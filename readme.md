# is_unicode_supported

Detect whether the terminal supports Unicode, port of

[![npm](https://img.shields.io/npm/v/@ultirequiem/is-unicode-supported?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/is-unicode-supported)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/is-unicode-supported?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/is-unicode-supported)
[![CI](https://github.com/UltiRequiem/is_unicode_supported/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/is_unicode_supported/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/is_unicode_supported/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/is_unicode_supported)

[is-unicode-supported](https://github.com/sindresorhus/is-unicode-supported).

This can be useful to decide whether to use Unicode characters or fallback ASCII
characters in command-line output.

Note that the check is quite naive. It just assumes all non-Windows terminals
support Unicode and hard-codes which Windows terminals that do support Unicode.

## Install

```sh
npm install @ultirequiem/is-unicode-supported
```

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```javascript
import { isUnicodeSupported } from "@ultirequiem/is-unicode-supported";

isUnicodeSupported(); //=> true
```

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/is_unicode_supported/tags) 🏷️

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/is_unicode_supported/contributors)
who participated in this project ✨

## Licence

Licensed under the MIT License 📄
