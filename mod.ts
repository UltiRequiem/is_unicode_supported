/**
Detect whether the terminal supports Unicode.

@example
```javascript
isUnicodeSupported(); //=> true
```
*/
export function isUnicodeSupported() {
	if (Deno.build.os !== "windows") {
		return Deno.env.get("TERM") !== "linux";
	}

	return (
		Boolean(Deno.env.get("CI")) ||
		Boolean(Deno.env.get("WT_SESSION")) || // Windows Terminal
		Deno.env.get("ConEmuTask") === "{cmd::Cmder}" || // ConEmu and cmder
		Deno.env.get("TERM_PROGRAM") === "vscode" ||
		Deno.env.get("TERM") === "xterm-256color" ||
		Deno.env.get("TERM") === "alacritty"
	);
}
