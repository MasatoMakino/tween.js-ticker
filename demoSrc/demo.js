import { Easing, Tween } from "@tweenjs/tween.js";
import { TWEENTicker } from "../esm/index.js";

export class Demo {
  constructor() {
    const circle = this.addCircle();

    const yoyo = (f) => {
      return (t) => {
        if (t < 0.5) {
          return f(2 * t);
        } else {
          return 1 - f(2 * (t - 0.5));
        }
      };
    };

    const tween = new Tween(circle.dataset)
      .to({ rotation: 360, y: 300 }, 1500)
      .repeat(Infinity)
      .easing(yoyo((t) => Easing.Cubic.InOut(t)))
      .onUpdate((object) => {
        this.updateBox(circle, object);
      })
      .start();
    TWEENTicker.group.add(tween);
  }

  updateBox(box, params) {
    const s = box.style;
    const transform = `translateY(${Math.round(
      params.y,
    )}px) rotate(${Math.floor(params.rotation)}deg)`;
    s.transform = transform;
  }

  addCircle() {
    const circle = document.createElement("div");
    const style = circle.style;
    style.left = "300px";
    style.top = "0px";
    style.width = "100px";
    style.height = "100px";
    style.border = "1px solid black";
    style.borderRadius = "50px";
    style.position = "absolute";
    circle.dataset.y = 0;
    circle.dataset.rotation = 0;

    document.body.appendChild(circle);
    return circle;
  }
}

window.onload = () => {
  const demo = new Demo();
};
