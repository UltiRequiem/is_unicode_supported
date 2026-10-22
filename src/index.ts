import process from "node:process";

/**
 * Detect whether the terminal supports Unicode.
 *
 * @param platform - Defaults to the current platform (`process.platform`).
 *
 * @example
 * ```javascript
 * import { isUnicodeSupported } from "@ultirequiem/is-unicode-supported";
 *
 * isUnicodeSupported(); //=> true
 * ```
 */
export function isUnicodeSupported(platform: string = process.platform) {
	if (platform !== "win32" && platform !== "windows") {
		return process.env.TERM !== "linux";
	}

	return (
		Boolean(process.env.CI) ||
		Boolean(process.env.WT_SESSION) || // Windows Terminal
		process.env.ConEmuTask === "{cmd::Cmder}" || // ConEmu and cmder
		process.env.TERM_PROGRAM === "vscode" ||
		process.env.TERM === "xterm-256color" ||
		process.env.TERM === "alacritty"
	);
}
