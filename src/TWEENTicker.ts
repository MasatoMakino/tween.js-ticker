import TWEEN from "@tweenjs/tween.js";
import { RAFTicker, RAFTickerEvent, RAFTickerEventType } from "raf-ticker";

export class TWEENTicker {
  private static isStart: boolean;

  public static initialize() {
    this.start();
  }

  public static start() {
    if (this.isStart) return;
    this.isStart = true;
    RAFTicker.on(RAFTickerEventType.onBeforeTick, this.update);
  }

  private static update = (e: RAFTickerEvent) => {
    TWEEN.update();
  };

  public static stop() {
    if (!this.isStart) return;
    this.isStart = false;
    RAFTicker.off(RAFTickerEventType.onBeforeTick, this.update);
  }
}

TWEENTicker.initialize();
