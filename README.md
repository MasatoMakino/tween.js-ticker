# tween.js-ticker

> [!WARNING]
> We do not recommend new installations of tween.js-ticker and tween.js v25 or later. manage tween instance creation/update manually.

> This module is a simple Tween.js [mainGroup](https://github.com/tweenjs/tween.js/blob/main/src/mainGroup.ts) substitute.

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![Test](https://github.com/MasatoMakino/tween.js-ticker/actions/workflows/ci_main.yml/badge.svg)](https://github.com/MasatoMakino/tween.js-ticker/actions/workflows/ci_main.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/626029403952adbad62d/maintainability)](https://codeclimate.com/github/MasatoMakino/tween.js-ticker/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/626029403952adbad62d/test_coverage)](https://codeclimate.com/github/MasatoMakino/tween.js-ticker/test_coverage)

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
