import { RAFTicker } from "@masatomakino/raf-ticker";
import { Tween } from "@tweenjs/tween.js";
import { beforeEach, describe, expect, Mock, test, vi } from "vitest";
import { TWEENTicker } from "../src/index.js";

describe("TweenTicker", () => {
  beforeEach(() => {
    TWEENTicker.group.removeAll();
    RAFTicker.stop();
    RAFTicker.emitTickEvent(0);
    TWEENTicker.start();
  });

  const generateTween = () => {
    const target = { x: 0 };
    const updateCallback = vi.fn();
    const tween = new Tween(target)
      .to({ x: 1 }, 1000)
      .onUpdate(updateCallback)
      .start(0);
    return { target, tween, updateCallback };
  };

  const testTick = (
    target: { x: number },
    val: number,
    updateCallback: Mock,
    called: boolean,
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
    const { target, tween, updateCallback } = generateTween();
    TWEENTicker.group.add(tween);

    RAFTicker.emitTickEvent(500);
    testTick(target, 0.5, updateCallback, true);
    RAFTicker.emitTickEvent(1000);
    testTick(target, 1.0, updateCallback, true);
    RAFTicker.emitTickEvent(10000);
    testTick(target, 1.0, updateCallback, false);
  });

  test("stop", () => {
    TWEENTicker.stop();
    const { target, tween, updateCallback } = generateTween();
    TWEENTicker.group.add(tween);

    RAFTicker.emitTickEvent(1000);
    testTick(target, 0, updateCallback, false);

    TWEENTicker.stop();
    RAFTicker.emitTickEvent(2000);
    testTick(target, 0, updateCallback, false);
  });
});
