import { RAFTicker } from "@masatomakino/raf-ticker";
import TWEEN, { Tween } from "@tweenjs/tween.js";
import { TWEENTicker } from "../src";

describe("TweenTicker", () => {
  beforeEach(() => {
    TWEEN.removeAll();
    RAFTicker.stop();
    RAFTicker.emitTickEvent(0);
    TWEENTicker.start();
  });

  const generateTween = () => {
    const target = { x: 0 };
    const updateCallback = jest.fn();
    new Tween(target).to({ x: 1 }, 1000).onUpdate(updateCallback).start(0);
    return { target, updateCallback };
  };

  const testTick = (
    target: { x: number },
    val: number,
    updateCallback: jest.Mock,
    called: boolean
  ) => {
    expect(target).toEqual({ x: val });
    if (called) {
      expect(updateCallback).toBeCalled();
    } else {
      expect(updateCallback).not.toBeCalled();
    }
    updateCallback.mockClear();
  };

  test("tick", () => {
    const { target, updateCallback } = generateTween();

    RAFTicker.emitTickEvent(500);
    testTick(target, 0.5, updateCallback, true);
    RAFTicker.emitTickEvent(1000);
    testTick(target, 1.0, updateCallback, true);
    RAFTicker.emitTickEvent(10000);
    testTick(target, 1.0, updateCallback, false);
  });

  test("stop", () => {
    TWEENTicker.stop();
    const { target, updateCallback } = generateTween();
    RAFTicker.emitTickEvent(1000);
    testTick(target, 0, updateCallback, false);

    TWEENTicker.stop();
    RAFTicker.emitTickEvent(2000);
    testTick(target, 0, updateCallback, false);
  });
});
