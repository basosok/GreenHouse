export default async function (app, db) {
    await app.put("/plan_db:culture", (req, res) => {
        const cultureToUpdate = { culture: req.body.culture };
        const newCulturePlan = {
            humidity: req.body.humidity,
            temperature: req.body.temperature,
            acidity: req.body.acidity,
            lightLevel: req.body.lightLevel,
        };
        db.updateOne(cultureToUpdate, newCulturePlan, (err) => {
            if (err) {
                res.send({ error: "An error has occurred" });
            } else {
                res.send("");
            }
        });
    });
    await app.delete("/plan_db:culture", (req, res) => {
        const cultureToDelete = { culture: req.body.culture };
        db.deleteOne(cultureToDelete, (err) => {
            if (err) {
                res.send({ error: "An error has occurred" });
            } else {
                res.send("");
            }
        });
    });
    await app.get("/plan_db", (req, res) => {
        db.find({}, (err, data) => {
            if (err) {
                res.send({ error: "An error has occurred" });
            } else {
                res.send(JSON.stringify(data));
            }
        });
    });
    await app.post("/plan_db", (req, res) => {
        const culturePlan = {
            culture: req.body.culture,
            humidity: req.body.humidity,
            temperature: req.body.temperature,
            acidity: req.body.acidity,
            lightLevel: req.body.lightLevel,
        };
        db.create(culturePlan, (err, result) => {
            if (err) {
                res.send({ error: "An error has occurred" });
            } else {
                res.send("");
            }
        });
    });
}
