import { update } from "@tweenjs/tween.js";
import { RAFTicker, RAFTickerEventType } from "raf-ticker";
export class TWEENTicker {
    static initialize() {
        this.start();
    }
    static start() {
        if (this.isStart)
            return;
        this.isStart = true;
        RAFTicker.on(RAFTickerEventType.onBeforeTick, this.update);
    }
    static stop() {
        if (!this.isStart)
            return;
        this.isStart = false;
        RAFTicker.off(RAFTickerEventType.onBeforeTick, this.update);
    }
}
TWEENTicker.update = (e) => {
    update();
};
TWEENTicker.initialize();
