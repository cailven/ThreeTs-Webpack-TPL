/// <reference path="../dts/jweixin-1.0.0.d.ts" />
/// <reference path="../dts/jquery.d.ts" />

import {ThreeView} from "./ThreeView";
class Main {
    constructor() {
        // var threeView:BasicThreeView = new BasicThreeView();
        var view:ThreeView = new ThreeView();
    }
}
window.onload = () => {
    var main = new Main();


};

