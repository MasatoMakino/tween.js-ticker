/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./demoSrc/demo.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./demoSrc/demo.js":
      /*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
      /*! exports provided: Demo */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo", function() { return Demo; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./lib/index.js");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js");\n\n\nclass Demo {\n  constructor() {\n    const circle = this.addCircle();\n    const tween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__["default"].Tween(circle.dataset).to({\n      rotation: 360,\n      y: 300\n    }, 750).repeat(Infinity) // .delay(1000)\n    .yoyo(true).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__["default"].Easing.Cubic.InOut).onUpdate(object => {\n      this.updateBox(circle, object);\n    }).start();\n  }\n\n  updateBox(box, params) {\n    const s = box.style;\n    const transform = `translateY(${Math.round(params.y)}px) rotate(${Math.floor(params.rotation)}deg)`;\n    s.transform = transform;\n  }\n\n  addCircle() {\n    const circle = document.createElement("div");\n    const style = circle.style;\n    style.left = "300px";\n    style.top = "0px";\n    style.width = "100px";\n    style.height = "100px";\n    style.border = "1px solid black";\n    style.borderRadius = "50px";\n    style.position = "absolute";\n    circle.dataset.y = 0;\n    circle.dataset.rotation = 0;\n    document.body.appendChild(circle);\n    return circle;\n  }\n\n}\n\nwindow.onload = () => {\n  const demo = new Demo();\n};\n\n//# sourceURL=webpack:///./demoSrc/demo.js?'
        );

        /***/
      },

    /***/ "./lib/TWEENTicker.js":
      /*!****************************!*\
  !*** ./lib/TWEENTicker.js ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        eval(
          '\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    "default": mod\n  };\n};\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar tween_js_1 = __importDefault(__webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js"));\n\nvar raf_ticker_1 = __webpack_require__(/*! raf-ticker */ "./node_modules/raf-ticker/esm/index.js");\n\nvar TWEENTicker =\n/** @class */\nfunction () {\n  function TWEENTicker() {}\n\n  TWEENTicker.initialize = function () {\n    this.start();\n  };\n\n  TWEENTicker.start = function () {\n    if (this.isStart) return;\n    this.isStart = true;\n    raf_ticker_1.RAFTicker.addEventListener(raf_ticker_1.RAFTickerEventType.onBeforeTick, this.update);\n  };\n\n  TWEENTicker.stop = function () {\n    if (!this.isStart) return;\n    this.isStart = false;\n    raf_ticker_1.RAFTicker.removeEventListener(raf_ticker_1.RAFTickerEventType.onBeforeTick, this.update);\n  };\n\n  TWEENTicker.update = function (e) {\n    tween_js_1.default.update();\n  };\n\n  return TWEENTicker;\n}();\n\nexports.TWEENTicker = TWEENTicker;\nTWEENTicker.initialize();\n\n//# sourceURL=webpack:///./lib/TWEENTicker.js?'
        );

        /***/
      },

    /***/ "./lib/index.js":
      /*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        eval(
          '\n\nfunction __export(m) {\n  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\n__export(__webpack_require__(/*! ./TWEENTicker */ "./lib/TWEENTicker.js"));\n\n//# sourceURL=webpack:///./lib/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js":
      /*!**********************************************************!*\
  !*** ./node_modules/@tweenjs/tween.js/dist/tween.esm.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {var version = '18.5.0';\n\n/**\n * Tween.js - Licensed under the MIT license\n * https://github.com/tweenjs/tween.js\n * ----------------------------------------------\n *\n * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.\n * Thank you all, you're awesome!\n */\n\n\nvar _Group = function () {\n\tthis._tweens = {};\n\tthis._tweensAddedDuringUpdate = {};\n};\n\n_Group.prototype = {\n\tgetAll: function () {\n\n\t\treturn Object.keys(this._tweens).map(function (tweenId) {\n\t\t\treturn this._tweens[tweenId];\n\t\t}.bind(this));\n\n\t},\n\n\tremoveAll: function () {\n\n\t\tthis._tweens = {};\n\n\t},\n\n\tadd: function (tween) {\n\n\t\tthis._tweens[tween.getId()] = tween;\n\t\tthis._tweensAddedDuringUpdate[tween.getId()] = tween;\n\n\t},\n\n\tremove: function (tween) {\n\n\t\tdelete this._tweens[tween.getId()];\n\t\tdelete this._tweensAddedDuringUpdate[tween.getId()];\n\n\t},\n\n\tupdate: function (time, preserve) {\n\n\t\tvar tweenIds = Object.keys(this._tweens);\n\n\t\tif (tweenIds.length === 0) {\n\t\t\treturn false;\n\t\t}\n\n\t\ttime = time !== undefined ? time : TWEEN.now();\n\n\t\t// Tweens are updated in \"batches\". If you add a new tween during an\n\t\t// update, then the new tween will be updated in the next batch.\n\t\t// If you remove a tween during an update, it may or may not be updated.\n\t\t// However, if the removed tween was added during the current batch,\n\t\t// then it will not be updated.\n\t\twhile (tweenIds.length > 0) {\n\t\t\tthis._tweensAddedDuringUpdate = {};\n\n\t\t\tfor (var i = 0; i < tweenIds.length; i++) {\n\n\t\t\t\tvar tween = this._tweens[tweenIds[i]];\n\n\t\t\t\tif (tween && tween.update(time) === false) {\n\t\t\t\t\ttween._isPlaying = false;\n\n\t\t\t\t\tif (!preserve) {\n\t\t\t\t\t\tdelete this._tweens[tweenIds[i]];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\ttweenIds = Object.keys(this._tweensAddedDuringUpdate);\n\t\t}\n\n\t\treturn true;\n\n\t}\n};\n\nvar TWEEN = new _Group();\n\nTWEEN.Group = _Group;\nTWEEN._nextId = 0;\nTWEEN.nextId = function () {\n\treturn TWEEN._nextId++;\n};\n\n\n// Include a performance.now polyfill.\n// In node.js, use process.hrtime.\nif (typeof (self) === 'undefined' && typeof (process) !== 'undefined' && process.hrtime) {\n\tTWEEN.now = function () {\n\t\tvar time = process.hrtime();\n\n\t\t// Convert [seconds, nanoseconds] to milliseconds.\n\t\treturn time[0] * 1000 + time[1] / 1000000;\n\t};\n}\n// In a browser, use self.performance.now if it is available.\nelse if (typeof (self) !== 'undefined' &&\n         self.performance !== undefined &&\n\t\t self.performance.now !== undefined) {\n\t// This must be bound, because directly assigning this function\n\t// leads to an invocation exception in Chrome.\n\tTWEEN.now = self.performance.now.bind(self.performance);\n}\n// Use Date.now if it is available.\nelse if (Date.now !== undefined) {\n\tTWEEN.now = Date.now;\n}\n// Otherwise, use 'new Date().getTime()'.\nelse {\n\tTWEEN.now = function () {\n\t\treturn new Date().getTime();\n\t};\n}\n\n\nTWEEN.Tween = function (object, group) {\n\tthis._isPaused = false;\n\tthis._pauseStart = null;\n\tthis._object = object;\n\tthis._valuesStart = {};\n\tthis._valuesEnd = {};\n\tthis._valuesStartRepeat = {};\n\tthis._duration = 1000;\n\tthis._repeat = 0;\n\tthis._repeatDelayTime = undefined;\n\tthis._yoyo = false;\n\tthis._isPlaying = false;\n\tthis._reversed = false;\n\tthis._delayTime = 0;\n\tthis._startTime = null;\n\tthis._easingFunction = TWEEN.Easing.Linear.None;\n\tthis._interpolationFunction = TWEEN.Interpolation.Linear;\n\tthis._chainedTweens = [];\n\tthis._onStartCallback = null;\n\tthis._onStartCallbackFired = false;\n\tthis._onUpdateCallback = null;\n\tthis._onRepeatCallback = null;\n\tthis._onCompleteCallback = null;\n\tthis._onStopCallback = null;\n\tthis._group = group || TWEEN;\n\tthis._id = TWEEN.nextId();\n\n};\n\nTWEEN.Tween.prototype = {\n\tgetId: function () {\n\t\treturn this._id;\n\t},\n\n\tisPlaying: function () {\n\t\treturn this._isPlaying;\n\t},\n\n\tisPaused: function () {\n\t\treturn this._isPaused;\n\t},\n\n\tto: function (properties, duration) {\n\n\t\tthis._valuesEnd = Object.create(properties);\n\n\t\tif (duration !== undefined) {\n\t\t\tthis._duration = duration;\n\t\t}\n\n\t\treturn this;\n\n\t},\n\n\tduration: function duration(d) {\n\t\tthis._duration = d;\n\t\treturn this;\n\t},\n\n\tstart: function (time) {\n\n\t\tthis._group.add(this);\n\n\t\tthis._isPlaying = true;\n\n\t\tthis._isPaused = false;\n\n\t\tthis._onStartCallbackFired = false;\n\n\t\tthis._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();\n\t\tthis._startTime += this._delayTime;\n\n\t\tfor (var property in this._valuesEnd) {\n\n\t\t\t// Check if an Array was provided as property value\n\t\t\tif (this._valuesEnd[property] instanceof Array) {\n\n\t\t\t\tif (this._valuesEnd[property].length === 0) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\t// Create a local copy of the Array with the start value at the front\n\t\t\t\tthis._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);\n\n\t\t\t}\n\n\t\t\t// If `to()` specifies a property that doesn't exist in the source object,\n\t\t\t// we should not set that property in the object\n\t\t\tif (this._object[property] === undefined) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\t// Save the starting value, but only once.\n\t\t\tif (typeof(this._valuesStart[property]) === 'undefined') {\n\t\t\t\tthis._valuesStart[property] = this._object[property];\n\t\t\t}\n\n\t\t\tif ((this._valuesStart[property] instanceof Array) === false) {\n\t\t\t\tthis._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings\n\t\t\t}\n\n\t\t\tthis._valuesStartRepeat[property] = this._valuesStart[property] || 0;\n\n\t\t}\n\n\t\treturn this;\n\n\t},\n\n\tstop: function () {\n\n\t\tif (!this._isPlaying) {\n\t\t\treturn this;\n\t\t}\n\n\t\tthis._group.remove(this);\n\n\t\tthis._isPlaying = false;\n\n\t\tthis._isPaused = false;\n\n\t\tif (this._onStopCallback !== null) {\n\t\t\tthis._onStopCallback(this._object);\n\t\t}\n\n\t\tthis.stopChainedTweens();\n\t\treturn this;\n\n\t},\n\n\tend: function () {\n\n\t\tthis.update(Infinity);\n\t\treturn this;\n\n\t},\n\n\tpause: function(time) {\n\n\t\tif (this._isPaused || !this._isPlaying) {\n\t\t\treturn this;\n\t\t}\n\n\t\tthis._isPaused = true;\n\n\t\tthis._pauseStart = time === undefined ? TWEEN.now() : time;\n\n\t\tthis._group.remove(this);\n\n\t\treturn this;\n\n\t},\n\n\tresume: function(time) {\n\n\t\tif (!this._isPaused || !this._isPlaying) {\n\t\t\treturn this;\n\t\t}\n\n\t\tthis._isPaused = false;\n\n\t\tthis._startTime += (time === undefined ? TWEEN.now() : time)\n\t\t\t- this._pauseStart;\n\n\t\tthis._pauseStart = 0;\n\n\t\tthis._group.add(this);\n\n\t\treturn this;\n\n\t},\n\n\tstopChainedTweens: function () {\n\n\t\tfor (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {\n\t\t\tthis._chainedTweens[i].stop();\n\t\t}\n\n\t},\n\n\tgroup: function (group) {\n\t\tthis._group = group;\n\t\treturn this;\n\t},\n\n\tdelay: function (amount) {\n\n\t\tthis._delayTime = amount;\n\t\treturn this;\n\n\t},\n\n\trepeat: function (times) {\n\n\t\tthis._repeat = times;\n\t\treturn this;\n\n\t},\n\n\trepeatDelay: function (amount) {\n\n\t\tthis._repeatDelayTime = amount;\n\t\treturn this;\n\n\t},\n\n\tyoyo: function (yoyo) {\n\n\t\tthis._yoyo = yoyo;\n\t\treturn this;\n\n\t},\n\n\teasing: function (easingFunction) {\n\n\t\tthis._easingFunction = easingFunction;\n\t\treturn this;\n\n\t},\n\n\tinterpolation: function (interpolationFunction) {\n\n\t\tthis._interpolationFunction = interpolationFunction;\n\t\treturn this;\n\n\t},\n\n\tchain: function () {\n\n\t\tthis._chainedTweens = arguments;\n\t\treturn this;\n\n\t},\n\n\tonStart: function (callback) {\n\n\t\tthis._onStartCallback = callback;\n\t\treturn this;\n\n\t},\n\n\tonUpdate: function (callback) {\n\n\t\tthis._onUpdateCallback = callback;\n\t\treturn this;\n\n\t},\n\n\tonRepeat: function onRepeat(callback) {\n\n\t\tthis._onRepeatCallback = callback;\n\t\treturn this;\n\n\t},\n\n\tonComplete: function (callback) {\n\n\t\tthis._onCompleteCallback = callback;\n\t\treturn this;\n\n\t},\n\n\tonStop: function (callback) {\n\n\t\tthis._onStopCallback = callback;\n\t\treturn this;\n\n\t},\n\n\tupdate: function (time) {\n\n\t\tvar property;\n\t\tvar elapsed;\n\t\tvar value;\n\n\t\tif (time < this._startTime) {\n\t\t\treturn true;\n\t\t}\n\n\t\tif (this._onStartCallbackFired === false) {\n\n\t\t\tif (this._onStartCallback !== null) {\n\t\t\t\tthis._onStartCallback(this._object);\n\t\t\t}\n\n\t\t\tthis._onStartCallbackFired = true;\n\t\t}\n\n\t\telapsed = (time - this._startTime) / this._duration;\n\t\telapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;\n\n\t\tvalue = this._easingFunction(elapsed);\n\n\t\tfor (property in this._valuesEnd) {\n\n\t\t\t// Don't update properties that do not exist in the source object\n\t\t\tif (this._valuesStart[property] === undefined) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tvar start = this._valuesStart[property] || 0;\n\t\t\tvar end = this._valuesEnd[property];\n\n\t\t\tif (end instanceof Array) {\n\n\t\t\t\tthis._object[property] = this._interpolationFunction(end, value);\n\n\t\t\t} else {\n\n\t\t\t\t// Parses relative end values with start as base (e.g.: +10, -3)\n\t\t\t\tif (typeof (end) === 'string') {\n\n\t\t\t\t\tif (end.charAt(0) === '+' || end.charAt(0) === '-') {\n\t\t\t\t\t\tend = start + parseFloat(end);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tend = parseFloat(end);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Protect against non numeric properties.\n\t\t\t\tif (typeof (end) === 'number') {\n\t\t\t\t\tthis._object[property] = start + (end - start) * value;\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t}\n\n\t\tif (this._onUpdateCallback !== null) {\n\t\t\tthis._onUpdateCallback(this._object, elapsed);\n\t\t}\n\n\t\tif (elapsed === 1) {\n\n\t\t\tif (this._repeat > 0) {\n\n\t\t\t\tif (isFinite(this._repeat)) {\n\t\t\t\t\tthis._repeat--;\n\t\t\t\t}\n\n\t\t\t\t// Reassign starting values, restart by making startTime = now\n\t\t\t\tfor (property in this._valuesStartRepeat) {\n\n\t\t\t\t\tif (typeof (this._valuesEnd[property]) === 'string') {\n\t\t\t\t\t\tthis._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);\n\t\t\t\t\t}\n\n\t\t\t\t\tif (this._yoyo) {\n\t\t\t\t\t\tvar tmp = this._valuesStartRepeat[property];\n\n\t\t\t\t\t\tthis._valuesStartRepeat[property] = this._valuesEnd[property];\n\t\t\t\t\t\tthis._valuesEnd[property] = tmp;\n\t\t\t\t\t}\n\n\t\t\t\t\tthis._valuesStart[property] = this._valuesStartRepeat[property];\n\n\t\t\t\t}\n\n\t\t\t\tif (this._yoyo) {\n\t\t\t\t\tthis._reversed = !this._reversed;\n\t\t\t\t}\n\n\t\t\t\tif (this._repeatDelayTime !== undefined) {\n\t\t\t\t\tthis._startTime = time + this._repeatDelayTime;\n\t\t\t\t} else {\n\t\t\t\t\tthis._startTime = time + this._delayTime;\n\t\t\t\t}\n\n\t\t\t\tif (this._onRepeatCallback !== null) {\n\t\t\t\t\tthis._onRepeatCallback(this._object);\n\t\t\t\t}\n\n\t\t\t\treturn true;\n\n\t\t\t} else {\n\n\t\t\t\tif (this._onCompleteCallback !== null) {\n\n\t\t\t\t\tthis._onCompleteCallback(this._object);\n\t\t\t\t}\n\n\t\t\t\tfor (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {\n\t\t\t\t\t// Make the chained tweens start exactly at the time they should,\n\t\t\t\t\t// even if the `update()` method was called way past the duration of the tween\n\t\t\t\t\tthis._chainedTweens[i].start(this._startTime + this._duration);\n\t\t\t\t}\n\n\t\t\t\treturn false;\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn true;\n\n\t}\n};\n\n\nTWEEN.Easing = {\n\n\tLinear: {\n\n\t\tNone: function (k) {\n\n\t\t\treturn k;\n\n\t\t}\n\n\t},\n\n\tQuadratic: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn k * k;\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn k * (2 - k);\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * k * k;\n\t\t\t}\n\n\t\t\treturn - 0.5 * (--k * (k - 2) - 1);\n\n\t\t}\n\n\t},\n\n\tCubic: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn k * k * k;\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn --k * k * k + 1;\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * k * k * k;\n\t\t\t}\n\n\t\t\treturn 0.5 * ((k -= 2) * k * k + 2);\n\n\t\t}\n\n\t},\n\n\tQuartic: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn k * k * k * k;\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn 1 - (--k * k * k * k);\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * k * k * k * k;\n\t\t\t}\n\n\t\t\treturn - 0.5 * ((k -= 2) * k * k * k - 2);\n\n\t\t}\n\n\t},\n\n\tQuintic: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn k * k * k * k * k;\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn --k * k * k * k * k + 1;\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * k * k * k * k * k;\n\t\t\t}\n\n\t\t\treturn 0.5 * ((k -= 2) * k * k * k * k + 2);\n\n\t\t}\n\n\t},\n\n\tSinusoidal: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn 1 - Math.cos(k * Math.PI / 2);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn Math.sin(k * Math.PI / 2);\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\treturn 0.5 * (1 - Math.cos(Math.PI * k));\n\n\t\t}\n\n\t},\n\n\tExponential: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn k === 0 ? 0 : Math.pow(1024, k - 1);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif (k === 0) {\n\t\t\t\treturn 0;\n\t\t\t}\n\n\t\t\tif (k === 1) {\n\t\t\t\treturn 1;\n\t\t\t}\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * Math.pow(1024, k - 1);\n\t\t\t}\n\n\t\t\treturn 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);\n\n\t\t}\n\n\t},\n\n\tCircular: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn 1 - Math.sqrt(1 - k * k);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn Math.sqrt(1 - (--k * k));\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn - 0.5 * (Math.sqrt(1 - k * k) - 1);\n\t\t\t}\n\n\t\t\treturn 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);\n\n\t\t}\n\n\t},\n\n\tElastic: {\n\n\t\tIn: function (k) {\n\n\t\t\tif (k === 0) {\n\t\t\t\treturn 0;\n\t\t\t}\n\n\t\t\tif (k === 1) {\n\t\t\t\treturn 1;\n\t\t\t}\n\n\t\t\treturn -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\tif (k === 0) {\n\t\t\t\treturn 0;\n\t\t\t}\n\n\t\t\tif (k === 1) {\n\t\t\t\treturn 1;\n\t\t\t}\n\n\t\t\treturn Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif (k === 0) {\n\t\t\t\treturn 0;\n\t\t\t}\n\n\t\t\tif (k === 1) {\n\t\t\t\treturn 1;\n\t\t\t}\n\n\t\t\tk *= 2;\n\n\t\t\tif (k < 1) {\n\t\t\t\treturn -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);\n\t\t\t}\n\n\t\t\treturn 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;\n\n\t\t}\n\n\t},\n\n\tBack: {\n\n\t\tIn: function (k) {\n\n\t\t\tvar s = 1.70158;\n\n\t\t\treturn k * k * ((s + 1) * k - s);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\tvar s = 1.70158;\n\n\t\t\treturn --k * k * ((s + 1) * k + s) + 1;\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tvar s = 1.70158 * 1.525;\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * (k * k * ((s + 1) * k - s));\n\t\t\t}\n\n\t\t\treturn 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);\n\n\t\t}\n\n\t},\n\n\tBounce: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn 1 - TWEEN.Easing.Bounce.Out(1 - k);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\tif (k < (1 / 2.75)) {\n\t\t\t\treturn 7.5625 * k * k;\n\t\t\t} else if (k < (2 / 2.75)) {\n\t\t\t\treturn 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;\n\t\t\t} else if (k < (2.5 / 2.75)) {\n\t\t\t\treturn 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;\n\t\t\t} else {\n\t\t\t\treturn 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;\n\t\t\t}\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif (k < 0.5) {\n\t\t\t\treturn TWEEN.Easing.Bounce.In(k * 2) * 0.5;\n\t\t\t}\n\n\t\t\treturn TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;\n\n\t\t}\n\n\t}\n\n};\n\nTWEEN.Interpolation = {\n\n\tLinear: function (v, k) {\n\n\t\tvar m = v.length - 1;\n\t\tvar f = m * k;\n\t\tvar i = Math.floor(f);\n\t\tvar fn = TWEEN.Interpolation.Utils.Linear;\n\n\t\tif (k < 0) {\n\t\t\treturn fn(v[0], v[1], f);\n\t\t}\n\n\t\tif (k > 1) {\n\t\t\treturn fn(v[m], v[m - 1], m - f);\n\t\t}\n\n\t\treturn fn(v[i], v[i + 1 > m ? m : i + 1], f - i);\n\n\t},\n\n\tBezier: function (v, k) {\n\n\t\tvar b = 0;\n\t\tvar n = v.length - 1;\n\t\tvar pw = Math.pow;\n\t\tvar bn = TWEEN.Interpolation.Utils.Bernstein;\n\n\t\tfor (var i = 0; i <= n; i++) {\n\t\t\tb += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);\n\t\t}\n\n\t\treturn b;\n\n\t},\n\n\tCatmullRom: function (v, k) {\n\n\t\tvar m = v.length - 1;\n\t\tvar f = m * k;\n\t\tvar i = Math.floor(f);\n\t\tvar fn = TWEEN.Interpolation.Utils.CatmullRom;\n\n\t\tif (v[0] === v[m]) {\n\n\t\t\tif (k < 0) {\n\t\t\t\ti = Math.floor(f = m * (1 + k));\n\t\t\t}\n\n\t\t\treturn fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);\n\n\t\t} else {\n\n\t\t\tif (k < 0) {\n\t\t\t\treturn v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);\n\t\t\t}\n\n\t\t\tif (k > 1) {\n\t\t\t\treturn v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);\n\t\t\t}\n\n\t\t\treturn fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);\n\n\t\t}\n\n\t},\n\n\tUtils: {\n\n\t\tLinear: function (p0, p1, t) {\n\n\t\t\treturn (p1 - p0) * t + p0;\n\n\t\t},\n\n\t\tBernstein: function (n, i) {\n\n\t\t\tvar fc = TWEEN.Interpolation.Utils.Factorial;\n\n\t\t\treturn fc(n) / fc(i) / fc(n - i);\n\n\t\t},\n\n\t\tFactorial: (function () {\n\n\t\t\tvar a = [1];\n\n\t\t\treturn function (n) {\n\n\t\t\t\tvar s = 1;\n\n\t\t\t\tif (a[n]) {\n\t\t\t\t\treturn a[n];\n\t\t\t\t}\n\n\t\t\t\tfor (var i = n; i > 1; i--) {\n\t\t\t\t\ts *= i;\n\t\t\t\t}\n\n\t\t\t\ta[n] = s;\n\t\t\t\treturn s;\n\n\t\t\t};\n\n\t\t})(),\n\n\t\tCatmullRom: function (p0, p1, p2, p3, t) {\n\n\t\t\tvar v0 = (p2 - p0) * 0.5;\n\t\t\tvar v1 = (p3 - p1) * 0.5;\n\t\t\tvar t2 = t * t;\n\t\t\tvar t3 = t * t2;\n\n\t\t\treturn (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;\n\n\t\t}\n\n\t}\n\n};\nTWEEN.version = version;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TWEEN);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/@tweenjs/tween.js/dist/tween.esm.js?"
        );

        /***/
      },

    /***/ "./node_modules/process/browser.js":
      /*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          "// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?"
        );

        /***/
      },

    /***/ "./node_modules/raf-ticker/esm/EventDispatcher.js":
      /*!********************************************************!*\
  !*** ./node_modules/raf-ticker/esm/EventDispatcher.js ***!
  \********************************************************/
      /*! exports provided: EventDispatcher */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });\n/**\n * Based on mrdoob/eventdispatcher.js\n * https://github.com/mrdoob/eventdispatcher.js\n * Copyright（c）mrdoob / http://mrdoob.com/\n * Licensed under MIT ( https://github.com/mrdoob/eventdispatcher.js/blob/master/LICENSE )\n */\nclass EventDispatcher {\n  addEventListener(type, listener) {\n    if (this._listeners === undefined) this._listeners = {};\n    const listeners = this._listeners;\n    if (listeners[type] === undefined) {\n      listeners[type] = [];\n    }\n    if (listeners[type].indexOf(listener) === -1) {\n      listeners[type].push(listener);\n    }\n  }\n  hasEventListener(type, listener) {\n    if (this._listeners === undefined) return false;\n    const listeners = this._listeners;\n    return (\n      listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1\n    );\n  }\n  removeEventListener(type, listener) {\n    if (this._listeners === undefined) return;\n    const listeners = this._listeners;\n    const listenerArray = listeners[type];\n    if (listenerArray !== undefined) {\n      const index = listenerArray.indexOf(listener);\n      if (index !== -1) {\n        listenerArray.splice(index, 1);\n      }\n    }\n  }\n  dispatchEvent(event) {\n    if (this._listeners === undefined) return;\n    const listeners = this._listeners;\n    const listenerArray = listeners[event.type];\n    if (listenerArray !== undefined) {\n      event.target = this;\n      const array = listenerArray.slice(0);\n      for (var i = 0, l = array.length; i < l; i++) {\n        array[i].call(this, event);\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/raf-ticker/esm/EventDispatcher.js?'
        );

        /***/
      },

    /***/ "./node_modules/raf-ticker/esm/RAFTicker.js":
      /*!**************************************************!*\
  !*** ./node_modules/raf-ticker/esm/RAFTicker.js ***!
  \**************************************************/
      /*! exports provided: RAFTicker */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RAFTicker", function() { return RAFTicker; });\n/* harmony import */ var _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RAFTickerEvent */ "./node_modules/raf-ticker/esm/RAFTickerEvent.js");\n/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventDispatcher */ "./node_modules/raf-ticker/esm/EventDispatcher.js");\n\n\nclass RAFTicker {\n  static initialize() {\n    this._dispatcher = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"]();\n    RAFTicker.onTick(performance.now());\n  }\n  static addEventListener(type, listener) {\n    this._dispatcher.addEventListener(type, listener);\n  }\n  static hasEventListener(type, listener) {\n    return this._dispatcher.hasEventListener(type, listener);\n  }\n  static removeEventListener(type, listener) {\n    this._dispatcher.removeEventListener(type, listener);\n  }\n}\nRAFTicker.onTick = timestamp => {\n  if (RAFTicker._lastUpdateTimestamp == null) {\n    RAFTicker._lastUpdateTimestamp = timestamp;\n  }\n  const delta = timestamp - RAFTicker._lastUpdateTimestamp;\n  RAFTicker._dispatcher.dispatchEvent(\n    new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__["RAFTickerEvent"](_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__["RAFTickerEventType"].onBeforeTick, timestamp, delta)\n  );\n  RAFTicker._dispatcher.dispatchEvent(\n    new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__["RAFTickerEvent"](_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__["RAFTickerEventType"].tick, timestamp, delta)\n  );\n  RAFTicker._dispatcher.dispatchEvent(\n    new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__["RAFTickerEvent"](_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__["RAFTickerEventType"].onAfterTick, timestamp, delta)\n  );\n  RAFTicker._lastUpdateTimestamp = timestamp;\n  RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);\n};\nRAFTicker.initialize();\n\n\n//# sourceURL=webpack:///./node_modules/raf-ticker/esm/RAFTicker.js?'
        );

        /***/
      },

    /***/ "./node_modules/raf-ticker/esm/RAFTickerEvent.js":
      /*!*******************************************************!*\
  !*** ./node_modules/raf-ticker/esm/RAFTickerEvent.js ***!
  \*******************************************************/
      /*! exports provided: RAFTickerEventType, RAFTickerEvent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RAFTickerEventType", function() { return RAFTickerEventType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RAFTickerEvent", function() { return RAFTickerEvent; });\nvar RAFTickerEventType;\n(function(RAFTickerEventType) {\n  RAFTickerEventType["onBeforeTick"] = "onBeforeTick";\n  RAFTickerEventType["tick"] = "tick";\n  RAFTickerEventType["onAfterTick"] = "onAfterTick";\n})(RAFTickerEventType || (RAFTickerEventType = {}));\nclass RAFTickerEvent {\n  constructor(type, timestamp, delta) {\n    this.type = type;\n    this.timestamp = timestamp;\n    this.delta = delta;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/raf-ticker/esm/RAFTickerEvent.js?'
        );

        /***/
      },

    /***/ "./node_modules/raf-ticker/esm/index.js":
      /*!**********************************************!*\
  !*** ./node_modules/raf-ticker/esm/index.js ***!
  \**********************************************/
      /*! exports provided: RAFTicker, RAFTickerEventType, RAFTickerEvent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RAFTicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RAFTicker */ "./node_modules/raf-ticker/esm/RAFTicker.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RAFTicker", function() { return _RAFTicker__WEBPACK_IMPORTED_MODULE_0__["RAFTicker"]; });\n\n/* harmony import */ var _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RAFTickerEvent */ "./node_modules/raf-ticker/esm/RAFTickerEvent.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RAFTickerEventType", function() { return _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__["RAFTickerEventType"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RAFTickerEvent", function() { return _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__["RAFTickerEvent"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/raf-ticker/esm/index.js?'
        );

        /***/
      }

    /******/
  }
);
