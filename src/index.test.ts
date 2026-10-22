import { afterEach, describe, expect, it, vi } from "vitest";
import { isUnicodeSupported } from "./index.js";

afterEach(() => {
	vi.unstubAllEnvs();
});

describe("isUnicodeSupported", () => {
	it("is true on non-Windows platforms unless TERM is linux", () => {
		vi.stubEnv("TERM", "xterm");
		expect(isUnicodeSupported("linux")).toBe(true);
		expect(isUnicodeSupported("darwin")).toBe(true);

		vi.stubEnv("TERM", "linux");
		expect(isUnicodeSupported("linux")).toBe(false);
	});

	it("detects supporting terminals on Windows", () => {
		vi.stubEnv("TERM", "");
		vi.stubEnv("CI", "");
		vi.stubEnv("WT_SESSION", "");
		vi.stubEnv("TERM_PROGRAM", "");
		expect(isUnicodeSupported("win32")).toBe(false);

		vi.stubEnv("WT_SESSION", "1");
		expect(isUnicodeSupported("win32")).toBe(true);
		expect(isUnicodeSupported("windows")).toBe(true);

		vi.stubEnv("WT_SESSION", "");
		vi.stubEnv("TERM_PROGRAM", "vscode");
		expect(isUnicodeSupported("win32")).toBe(true);
	});
});
