import { Schema, model, connect } from "mongoose";

const settingConnect = `mongodb+srv://basosok:92veboli@cluster0.j2hqjld.mongodb.net/?retryWrites=true&w=majority`;
await connect(settingConnect);
const planTable = new Schema({
    culture: { type: String, maxlength: 20, required: true },
    humidity: { type: Number, required: true, min: 40, max: 95 },
    temperature: { type: Number, required: true, min: 10, max: 30 },
    acidity: { type: Number, required: true, min: 4, max: 9 },
    lightLevel: { type: Number, required: true, min: 500, max: 20000 },
});

let table = model("planTable", planTable);
await table.deleteMany({});
await table.insertMany([
    {
        culture: "Tulips",
        humidity: 75,
        temperature: 15,
        acidity: 7,
        lightLevel: 1000,
    },
    {
        culture: "Tomatoes",
        humidity: 65,
        temperature: 20,
        acidity: 6,
        lightLevel: 7000,
    },
    {
        culture: "Roses",
        humidity: 70,
        temperature: 22,
        acidity: 6,
        lightLevel: 8000,
    },
    {
        culture: "Melons",
        humidity: 50,
        temperature: 23,
        acidity: 5.5,
        lightLevel: 5000,
    },
    {
        culture: "Cabbage",
        humidity: 80,
        temperature: 15,
        acidity: 6,
        lightLevel: 2000,
    },
    {
        culture: "Radish",
        humidity: 60,
        temperature: 19,
        acidity: 7,
        lightLevel: 1500,
    },
]);

export default table;
