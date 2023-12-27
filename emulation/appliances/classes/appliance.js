class Appliance {
    _appliancePositionX;
    _appliancePositionY;
    _isSwitchedOn = true;

    constructor(appliancePositionX, appliancePositionY) {
        this._appliancePositionX = appliancePositionX;
        this._appliancePositionY = appliancePositionY;
    }

    getPositionX() {
        return this._appliancePositionX;
    }

    getPositionY() {
        return this._appliancePositionY;
    }

    switchOn() {
        this._isSwitchedOn = true;
    }

    switchOff() {
        this._isSwitchedOn = false;
    }

    getState() {
        return this._isSwitchedOn;
    }

    changePosition(top, left) {
        console.log(top, left);
        this._appliancePositionX = left / 120;
        this._appliancePositionY = 5 - top / 100;
        console.log(this._appliancePositionX, this._appliancePositionY);
    }
}

export default Appliance;
