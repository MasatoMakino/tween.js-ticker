import TWEEN from "@tweenjs/tween.js";

export class Demo {
  constructor() {
    const circle = this.addCircle();

    const tween = new TWEEN.Tween(circle.dataset)
      .to({ rotation: 360, y: 300 }, 750)
      .repeat(Infinity)
      .yoyo(true)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate((object) => {
        this.updateBox(circle, object);
      })
      .start();
  }

  updateBox(box, params) {
    const s = box.style;
    const transform = `translateY(${Math.round(
      params.y
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
