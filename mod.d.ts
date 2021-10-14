/**
Detect whether the terminal supports Unicode.
@example
```
// @deno-types="https://deno.land/x/is_unicode_supported/mod.d.ts"
import isUnicodeSupported from 'https://deno.land/x/is_unicode_supported/mod.js';
await isUnicodeSupported();
//=> true
```
*/
export default function isUnicodeSupported(): Promise<boolean>;

/**
Detect whether the terminal supports Unicode.
@example
```
// @deno-types="https://deno.land/x/is_unicode_supported/mod.d.ts"
import {isUnicodeSupported} from 'https://deno.land/x/is_unicode_supported/mod.js';
isUnicodeSupported();
//=> false
```
*/
export function isUnicodeSupportedSync(): boolean;
