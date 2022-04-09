# is_unicode_supported

[![Code Coverage](https://codecov.io/gh/ultirequiem/is_unicode_supported/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/REPO)
[![Deno Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/is_unicode_supported/mod.ts)

Detect whether the terminal supports Unicode, port of
[is-unicode-supported](https://github.com/sindresorhus/is-unicode-supported).

This can be useful to decide whether to use Unicode characters or fallback ASCII
characters in command-line output.

> Note that the check is quite naive. It just assumes all non-Windows terminals
> support Unicode and hard-codes which Windows terminals that do support
> Unicode.

## Usage

The API is the same on all this platforms ✔️

### [Deno 🦕](https://deno.land/x/is_unicode_supported)

```javascript
import isUnicodeSupported from "https://deno.land/x/is_unicode_supported/mod.ts";

isUnicodeSupported(); //=> true
```

### [Node.js 🐢🚀](https://npmjs.com/package/@ultirequiem/is-unicode-supported)

```javascript
import { timeZones } from "@ultirequiem/is-unicode-supported";
```

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/is_unicode_supported/mod.ts)
📄

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to start the repo ⭐

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
