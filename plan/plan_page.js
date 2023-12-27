const url = "http://localhost:8000/plan_db";

let node = document.querySelector(".additional");
const result = await fetch(url);
let cultureList = await result.json();
cultureList.sort((item1, item2) => item1.culture.localeCompare(item2.culture));

let container = document.querySelector(".container");
if (!cultureList.length) {
    node.innerHTML = "No plans found";
} else {
    for (let plan of cultureList) {
        if (!cultureList.indexOf(plan)) {
            for (let childNum = 1; childNum <= 9; childNum += 2)
                node.childNodes[childNum].textContent =
                    plan[node.childNodes[childNum].classList[1]];
        } else {
            const planRow = node.cloneNode(true);
            for (let childNum = 1; childNum <= 9; childNum += 2)
                planRow.childNodes[childNum].textContent =
                    plan[planRow.childNodes[childNum].classList[1]];
            container.appendChild(planRow);
        }
    }
}

const confirmAddButton = document.querySelector(".add-confirm");
confirmAddButton.addEventListener("click", async () => {
    const newPlan = {
        culture: document.querySelector(".add-culture").value,
        humidity: document.querySelector(".add-humidity").value,
        temperature: document.querySelector(".add-temperature").value,
        acidity: document.querySelector(".add-acidity").value,
        lightLevel: document.querySelector(".add-lightLevel").value,
    };
    await fetch(url, {
        method: "POST",
        body: JSON.stringify(newPlan),
        headers: {
            "Content-Type": "application/json",
        },
    });
    location.reload();
});

const deleteButtons = document.querySelectorAll(".delete-btn");
let currentDeleteBtn;
for (let button of deleteButtons)
    button.addEventListener("click", () => {
        currentDeleteBtn = button;
    });

const confirmDeleteButtons = document.querySelectorAll(".delete-item");
for (let button of confirmDeleteButtons)
    button.addEventListener("click", async () => {
        const cultureToDelete =
            currentDeleteBtn.parentNode.parentNode.parentNode.childNodes[1]
                .textContent;
        await fetch(url + ":culture", {
            method: "DELETE",
            body: JSON.stringify({ culture: cultureToDelete }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        location.reload();
    });

const editButtons = document.querySelectorAll(".edit-item");
let currentEditBtn;
for (let button of editButtons)
    button.addEventListener("click", () => {
        currentEditBtn = button;
    });

const confirmEditButtons = document.querySelectorAll(".confirm-edit-btn");
for (let button of confirmEditButtons)
    button.addEventListener("click", async () => {
        const cultureToEdit =
            currentEditBtn.parentNode.parentNode.parentNode.childNodes[1]
                .textContent;
        const newCulturePlan = {
            culture: cultureToEdit,
            humidity: document.querySelector(".edit-humidity").value,
            temperature: document.querySelector(".edit-temperature").value,
            acidity: document.querySelector(".edit-acidity").value,
            lightLevel: document.querySelector(".edit-lightLevel").value,
        };
        await fetch(url + ":culture", {
            method: "PUT",
            body: JSON.stringify(newCulturePlan),
            headers: {
                "Content-Type": "application/json",
            },
        });
        location.reload();
    });
