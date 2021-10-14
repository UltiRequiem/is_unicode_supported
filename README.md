# is_unicode_supported

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/deno_is_unicode_supported?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/deno_is_unicode_supported/workflows/CodeQL/badge.svg)
![Lint](https://github.com/UltiRequiem/deno_is_unicode_supported/workflows/Lint/badge.svg)

You can get this package by [nest.land](https://nest.land/package/is_unicode_supported),
[deno.land](https://deno.land/x/is_unicode_supported) or
[denopkg](https://denopkg.com/UltiRequiem/deno_is_unicode_supported/mod.ts).

> Detect whether the terminal supports Unicode, port of [is-unicode-supported](https://github.com/sindresorhus/is-unicode-supported).

This can be useful to decide whether to use Unicode characters or fallback ASCII characters in command-line output.

Note that the check is quite naive. It just assumes all non-Windows terminals support Unicode and hard-codes which Windows terminals that do support Unicode.

## Usage

This package exposes two Functions,
[isUnicodeSupported](https://github.com/UltiRequiem/deno_is_unicode_supported/blob/main/mod.js#L1) and
[isUnicodeSupportedSync](https://github.com/UltiRequiem/deno_is_unicode_supported/blob/main/mod.js#L5).

```typescript
@deno-types="https://deno.land/x/is_unicode_supported/mod.d.ts"
import isUnicodeSupported, {
	isUnicodeSupportedSync,
} from "https://deno.land/x/is_unicode_supported/mod.js";

const canIHaveEmojis = await isUnicodeSupported(); // isUnicodeSupported();
```

## API

### isUnicodeSupported()

Returns a `Promize<boolean>` for whether the terminal supports Unicode.

### isUnicodeSupportedSync()

Returns a `boolean` for whether the terminal supports Unicode.

### License

[This project](https://deno.land/x/template) is licensed under the
[MIT License](./LICENSE.md).
