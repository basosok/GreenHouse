import Appliance from "./appliance.js";
import greenhouseConditions from "../../emulation_modules/greenhouseConditions.js";

class LightSource extends Appliance {
    #essentialLightLevel;

    constructor(lightLevel, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#essentialLightLevel = lightLevel;
    }

    getCurrentLightLevel() {
        return this._isSwitchedOn
            ? this.#essentialLightLevel
            : greenhouseConditions.LightLevel;
    }

    getEssentialLightLevel() {
        return this.#essentialLightLevel;
    }
}

export default LightSource;
