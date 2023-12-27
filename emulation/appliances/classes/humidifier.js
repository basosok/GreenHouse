import Appliance from "./appliance.js";
import greenhouseConditions from "../../emulation_modules/greenhouseConditions.js";

class Humidlifier extends Appliance {
    #essentialHumidity;

    constructor(humidity, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#essentialHumidity = humidity;
    }

    getCurrentHumidity() {
        return this._isSwitchedOn
            ? this.#essentialHumidity
            : greenhouseConditions.Humidity;
    }

    getEssentialHumidity() {
        return this.#essentialHumidity;
    }
}

export default Humidlifier;
