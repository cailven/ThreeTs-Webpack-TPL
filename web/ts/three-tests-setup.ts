/// <reference path="../dts/detector.d.ts" />
/// <reference path="../dts/three-canvasrenderer.d.ts" />
/// <reference path="../dts/three-css3drenderer.d.ts" />
/// <reference path="../dts/three-projector.d.ts" />
/// <reference path="../dts/three-orbitcontrols.d.ts" />
/// <reference path="../dts/three-trackballcontrols.d.ts" />
/// <reference path="../dts/three-effectcomposer.d.ts" />
/// <reference path="../dts/three-renderpass.d.ts" />
/// <reference path="../dts/three-shaderpass.d.ts" />
/// <reference path="../dts/three-copyshader.d.ts" />
/// <reference path="../dts/bone.d.ts" />

declare class AlloyTouch {
    constructor(d:any);
}
// declare function require(any);
// declare module require {
//     function ensure(...paras);
//
//     export class require {
//         ensure();
//     }
//
// }
// declare function ga(...paras);
// declare var lib, images, ss;

declare namespace THREE {
    var AWDLoader:any;
    class ColladaLoader {
        public scene;
        public options;
        public load;

    }


    var FlyControls:any;
    var BloomPass:any;
    var DotScreenShader:Shader;
    var RGBShiftShader:Shader;
    var FXAAShader:Shader;
}
