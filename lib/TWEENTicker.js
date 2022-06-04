"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TWEENTicker = void 0;
const raf_ticker_1 = require("@masatomakino/raf-ticker");
const tween_js_1 = require("@tweenjs/tween.js");
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
    (0, tween_js_1.update)();
};
TWEENTicker.initialize();
