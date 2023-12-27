import appliances from "./appliances/index.js";
import checkConditions from "./emulation_modules/checkConditions.js";
import changeEmulationTime from "./emulation_modules/changeEmulationTime.js";
import growPlants from "./emulation_modules/growPlants.js";
import showParameterValuesOnSensors from "./emulation_modules/showParameterValuesOnSensors.js";
import "./emulation_modules/dragAppliances.js";
import "./emulation_modules/dragSensors.js";

$(document).ready(function () {
    $(".toggle").click(function () {
        $(".menu").toggleClass("active");
    });
});
$(".switch-btn").click(function () {
    $(this).toggleClass("switch-on");
    if ($(this).hasClass("switch-on")) {
        $(this).trigger("on.switch");
    } else {
        $(this).trigger("off.switch");
    }
    if ($(this).hasClass("heater-btn"))
        for (let heater of appliances.heaters)
            heater.getState() ? heater.switchOff() : heater.switchOn();
    else if ($(this).hasClass("humidlifier-btn"))
        for (let humidlifier of appliances.humidlifiers)
            humidlifier.getState()
                ? humidlifier.switchOff()
                : humidlifier.switchOn();
    else if ($(this).hasClass("light-btn"))
        for (let lightSource of appliances.lightSources)
            lightSource.getState()
                ? lightSource.switchOff()
                : lightSource.switchOn();
    else
        for (let fertilizerDispenser of appliances.fertilizerDispensers)
            fertilizerDispenser.getState()
                ? fertilizerDispenser.switchOff()
                : fertilizerDispenser.switchOn();
});

function emulateGreenhouse() {
    const currentDay = changeEmulationTime(emulateGreenhouse);
    checkConditions();
    showParameterValuesOnSensors();
    growPlants(currentDay);
}

emulateGreenhouse();
