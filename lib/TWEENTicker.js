"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TWEENTicker = void 0;
var tween_js_1 = require("@tweenjs/tween.js");
var raf_ticker_1 = require("raf-ticker");
var TWEENTicker = /** @class */ (function () {
    function TWEENTicker() {
    }
    TWEENTicker.initialize = function () {
        this.start();
    };
    TWEENTicker.start = function () {
        if (this.isStart)
            return;
        this.isStart = true;
        raf_ticker_1.RAFTicker.on(raf_ticker_1.RAFTickerEventType.onBeforeTick, this.update);
    };
    TWEENTicker.stop = function () {
        if (!this.isStart)
            return;
        this.isStart = false;
        raf_ticker_1.RAFTicker.off(raf_ticker_1.RAFTickerEventType.onBeforeTick, this.update);
    };
    TWEENTicker.update = function (e) {
        tween_js_1.update();
    };
    return TWEENTicker;
}());
exports.TWEENTicker = TWEENTicker;
TWEENTicker.initialize();
