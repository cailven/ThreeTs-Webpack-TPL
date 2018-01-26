/// <reference path="../dts/three.d.ts" />
/// <reference path="../dts/bone.d.ts" />
/**
 * Created by zhangcai on 2018/1/24.
 */

export class ThreeView {
    constructor() {
        var geometry:THREE.PlaneBufferGeometry = new THREE.PlaneBufferGeometry(2, 2);

        var vertex = require("../glsl/vertex.glsl");
        var frag = require('../glsl/frag.glsl');
        var uniforms = {
            iTime: {
                type: "f",
                value: 1.0
            },
            iResolution: {
                type: "v2",
                value: new THREE.Vector2()
            },
            iMouse: {
                type: "v2",
                value: new THREE.Vector2()
            }
        };


        var material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertex,
            fragmentShader: frag
        });
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        $$.worldActions = function () {
            uniforms.iTime.value += 0.05;
            console.log(uniforms.iTime.value);
        };

        onWindowResize(null);
        window.addEventListener('resize', onWindowResize, false);


        function onWindowResize(event) {
            uniforms.iResolution.value.x = window.innerWidth;
            uniforms.iResolution.value.y = window.innerHeight;
        }
    }
}