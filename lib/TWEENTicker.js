"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var tween_js_1 = __importDefault(require("@tweenjs/tween.js"));
var raf_ticker_1 = require("raf-ticker");
var TWEENTicker = /** @class */ (function() {
  function TWEENTicker() {}
  TWEENTicker.initialize = function() {
    this.start();
  };
  TWEENTicker.start = function() {
    if (this.isStart) return;
    this.isStart = true;
    raf_ticker_1.RAFTicker.addEventListener(
      raf_ticker_1.RAFTickerEventType.onBeforeTick,
      this.update
    );
  };
  TWEENTicker.stop = function() {
    if (!this.isStart) return;
    this.isStart = false;
    raf_ticker_1.RAFTicker.removeEventListener(
      raf_ticker_1.RAFTickerEventType.onBeforeTick,
      this.update
    );
  };
  TWEENTicker.update = function(e) {
    tween_js_1.default.update();
  };
  return TWEENTicker;
})();
exports.TWEENTicker = TWEENTicker;
TWEENTicker.initialize();
