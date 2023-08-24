import {LogoGameBase} from "../../casino/display/LogoGameBase";

export class LogoGame extends LogoGameBase {
    constructor(graphic) {
        super(graphic);
    }

    destroy() {
        this._graphic = null;
        this._gdConf = null;
    }
}
