# ts-tiny-invariant

[![npm](https://img.shields.io/npm/v/ts-tiny-invariant)](https://npm.im/ts-tiny-invariant)
[![build](https://github.com/iyegoroff/ts-tiny-invariant/workflows/build/badge.svg)](https://github.com/iyegoroff/ts-tiny-invariant/actions/workflows/build.yml)
[![publish](https://github.com/iyegoroff/ts-tiny-invariant/workflows/publish/badge.svg)](https://github.com/iyegoroff/ts-tiny-invariant/actions/workflows/publish.yml)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/ts-tiny-invariant)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/ts-tiny-invariant?label=min+gzip)](https://bundlephobia.com/package/ts-tiny-invariant)
[![npm](https://img.shields.io/npm/l/ts-tiny-invariant.svg?t=1495378566925)](https://www.npmjs.com/package/ts-tiny-invariant)

<!-- [![Bundlephobia](https://badgen.net/bundlephobia/minzip/ts-tiny-invariant?label=min+gzip)](https://bundlephobia.com/package/ts-tiny-invariant) -->

Stricter version of [tiny-invariant](https://github.com/alexreardon/tiny-invariant) that accepts only `boolean` condition

## Installation

`$ npm i ts-tiny-invariant`

## Usage

```ts
import invariant from 'ts-tiny-invariant'

expect(() => {
  invariant(false, 'fail')
}).toThrow('Invariant failed: fail')

expect(() => {
  invariant(true, 'pass')
}).not.toThrow()
```
