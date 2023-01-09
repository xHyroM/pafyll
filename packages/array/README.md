<h1 align="center">
  <br>
  <img src="https://github.com/xHyroM/website/blob/main/src/assets/logo.png?raw=true" alt="Hyro" width="256">
  <br>
</h1>

<h4 align="center">Source code for @pafyll/array, polyfill for ECMAScript standard array functions.</h4>

<p align="center">
    <a href="https://discord.gg/kFPKmEKeMS/" alt="Discord">
        <img src="https://img.shields.io/discord/1046534628577640528?label=discord&style=for-the-badge&color=2fbfc4"/>
    </a>
</p>

## Implemented functions

-   [`Array.prototype.reduce`](./src/reduce.ts) - [TC39](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduce)
-   [`Array.prototype.group`](./src/group.ts) - [TC39, Github, Proposal Stage 3](https://github.com/tc39/proposal-array-grouping)
-   [`Array.prototype.groupToMap`](./src/groupToMap.ts) - [TC39, Github, Proposal Stage 3](https://github.com/tc39/proposal-array-grouping)

## How to import

```js
import "@pafyll/array"; // Imports everything

import "@pafyll/array/group.js"; // Imports specific function
```
