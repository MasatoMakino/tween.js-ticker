import {
  RAFTicker,
  RAFTickerEvent,
  RAFTickerEventType,
} from "@masatomakino/raf-ticker";
import { update } from "@tweenjs/tween.js";

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

  static update = (e: RAFTickerEvent) => {
    update(e.timestamp);
  };

  public static stop() {
    if (!this.isStart) return;
    this.isStart = false;
    RAFTicker.off(RAFTickerEventType.onBeforeTick, this.update);
  }
}

TWEENTicker.initialize();
