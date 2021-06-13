"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TWEENTicker = void 0;
const tween_js_1 = require("@tweenjs/tween.js");
const raf_ticker_1 = require("raf-ticker");
class TWEENTicker {
    static initialize() {
        this.start();
    }
    static start() {
        if (this.isStart)
            return;
        this.isStart = true;
        raf_ticker_1.RAFTicker.on(raf_ticker_1.RAFTickerEventType.onBeforeTick, this.update);
    }
    static stop() {
        if (!this.isStart)
            return;
        this.isStart = false;
        raf_ticker_1.RAFTicker.off(raf_ticker_1.RAFTickerEventType.onBeforeTick, this.update);
    }
}
exports.TWEENTicker = TWEENTicker;
TWEENTicker.update = (e) => {
    tween_js_1.update();
};
TWEENTicker.initialize();
