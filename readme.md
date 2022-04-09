# unicode_supported

> Detect whether the terminal supports Unicode, port of [is-unicode-supported](https://github.com/sindresorhus/is-unicode-supported)

This can be useful to decide whether to use Unicode characters or fallback ASCII characters in command-line output.

> Note that the check is quite naive. It just assumes all non-Windows terminals
> support Unicode and hard-codes which Windows terminals that do support Unicode.
