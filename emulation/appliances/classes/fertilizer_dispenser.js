import Appliance from "./appliance.js";
import greenhouseConditions from "../../emulation_modules/greenhouseConditions.js";

class FertilizerDispenser extends Appliance {
    #essentialAcidity;

    constructor(acidity, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#essentialAcidity = acidity;
    }

    getCurrentAcidity() {
        return this._isSwitchedOn
            ? this.#essentialAcidity
            : greenhouseConditions.Acidity;
    }

    getEssentialAcidity() {
        return this.#essentialAcidity;
    }
}

export default FertilizerDispenser;
