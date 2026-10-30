# tween.js-ticker

> [!CAUTION]
>
> **This repository has been archived.**
>
> This package is deprecated in favor of [raf-ticker](https://github.com/MasatoMakino/raf-ticker). Bind the update of a tween instance to the global `RAFTicker` to get the same behavior.
>
> **Migration:** Install `@masatomakino/raf-ticker` and update the tween on each tick.
>
> ```js
> import { RAFTicker } from "@masatomakino/raf-ticker";
> import { Tween } from "@tweenjs/tween.js";
>
> const tween = new Tween({ x: 0 }).to({ x: 100 }, 1000).start();
> const update = (e) => tween.update(e.timestamp);
> RAFTicker.on("tick", update);
> ```
>
> You must dispose of the tween explicitly. To stop updating it, call `RAFTicker.off("tick", update)`.
>
> See [#305](https://github.com/MasatoMakino/tween.js-ticker/issues/305) for details.

> This module is a simple Tween.js [mainGroup](https://github.com/tweenjs/tween.js/blob/main/src/mainGroup.ts) substitute.

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=MasatoMakino&repo=tween.js-ticker)](https://github.com/MasatoMakino/tween.js-ticker)

## Demo

[Demo page](https://masatomakino.github.io/tween.js-ticker/demo)

## Getting Started

### Install

```bash
npm install @masatomakino/tween.js-ticker -D
```

### How to use

```js
import { TWEENTicker } from "@masatomakino/tween.js-ticker";

const tween = new Tween({ x: 0 })
  .to({ x: 100 }, 1000)
  .start();

TWEENTicker.group.add(tween); // start updating

tween.remove(); // if you want to stop updating, call remove method.
```

Just import it, tween.js-ticker will start automatically.

In Tween.js v25 and later, completed tween instances are not automatically removed from a group. To remove a tween instance, you must manually call the remove function.

[API documentation](https://masatomakino.github.io/tween.js-ticker/api)

## License

[MIT licensed](LICENSE).
