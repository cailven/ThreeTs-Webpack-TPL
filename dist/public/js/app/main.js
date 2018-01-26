/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./public/js/app/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ThreeView_1) {
    "use strict";
    var Main = (function () {
        function Main() {
            var view = new ThreeView_1.ThreeView();
        }
        return Main;
    }());
    window.onload = function () {
        var main = new Main();
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    var ThreeView = (function () {
        function ThreeView() {
            var geometry = new THREE.PlaneBufferGeometry(2, 2);
            var vertex = __webpack_require__(2);
            var frag = __webpack_require__(3);
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
        return ThreeView;
    }());
    exports.ThreeView = ThreeView;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n  void main() { gl_Position = vec4( position, 1.0 ); }"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n uniform vec2 iResolution; uniform float iTime; void main() { vec2 st = gl_FragCoord.xy/iResolution.xy; gl_FragColor=vec4(st.x,st.y,0.0,1.0); }"

/***/ })
/******/ ]);