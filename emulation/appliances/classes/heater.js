import Appliance from "./appliance.js";
import greenhouseConditions from "../../emulation_modules/greenhouseConditions.js";

class Heater extends Appliance {
    #essentialTemperature;

    constructor(temperature, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#essentialTemperature = temperature;
    }

    getCurrentTemperature() {
        return this._isSwitchedOn
            ? this.#essentialTemperature
            : greenhouseConditions.Temperature;
    }

    getEssentialTemperature() {
        return this.#essentialTemperature;
    }
}

export default Heater;
