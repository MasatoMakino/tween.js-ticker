import { RAFTicker, RAFTickerEventContext } from "@masatomakino/raf-ticker";
import { Group } from "@tweenjs/tween.js";

export class TWEENTicker {
  public static readonly group: Group = new Group();
  private static isStart: boolean;

  public static initialize() {
    this.start();
  }

  public static start() {
    if (this.isStart) return;
    this.isStart = true;
    RAFTicker.on("onBeforeTick", this.update);
  }

  static update = (e: RAFTickerEventContext) => {
    this.group.update(e.timestamp);
  };

  public static stop() {
    if (!this.isStart) return;
    this.isStart = false;
    RAFTicker.off("onBeforeTick", this.update);
  }
}

TWEENTicker.initialize();
