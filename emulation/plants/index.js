import Plant from "./plant.js";

let plants = [];

for (let i = 0; i < 5; i++)
    for (let j = 0; j < 10; j++) plants.push(new Plant(j, i));

export default plants;
