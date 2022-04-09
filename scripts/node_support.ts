import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.12/node_support.ts";

buildPackage({
	repoName: "is_unicode_supported",
	name: "@ultirequiem/is-unicode-supported",
	description: "Detect whether the terminal supports Unicode.",
	homepage: "https://ulti.js.org/is_unicode_supported",
	keywords: ["unicode", "terminal"],
	version: "2.0.1",
});
