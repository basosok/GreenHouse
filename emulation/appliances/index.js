import Heater from "./classes/heater.js";
import Humidlifier from "./classes/humidifier.js";
import LightSource from "./classes/light_source.js";
import FertilizerDispenser from "./classes/fertilizer_dispenser.js";
let essentialPlan = sessionStorage.getItem("Plan");
essentialPlan = JSON.parse(essentialPlan);

let emulationAppliances = {};

emulationAppliances.heaters = [
    new Heater(+essentialPlan.temperature, 2, 4),
    new Heater(+essentialPlan.temperature, 5, 1),
    new Heater(+essentialPlan.temperature, 8, 4),
];

emulationAppliances.humidlifiers = [
    new Humidlifier(+essentialPlan.humidity, 2, 1),
    new Humidlifier(+essentialPlan.humidity, 5, 4),
    new Humidlifier(+essentialPlan.humidity, 8, 1),
];

emulationAppliances.lightSources = [
    new LightSource(+essentialPlan.lightLevel, 3, 0),
    new LightSource(+essentialPlan.lightLevel, 7, 0),
    new LightSource(+essentialPlan.lightLevel, 3, 5),
    new LightSource(+essentialPlan.lightLevel, 7, 5),
];

emulationAppliances.fertilizerDispensers = [
    new FertilizerDispenser(+essentialPlan.acidity, 0, 3),
    new FertilizerDispenser(+essentialPlan.acidity, 5, 2),
    new FertilizerDispenser(+essentialPlan.acidity, 10, 3),
];

export default emulationAppliances;
