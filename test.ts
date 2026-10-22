import { assert } from "https://deno.land/std@0.224.0/testing/asserts.ts";
import { isUnicodeSupported } from "./mod.ts";

Deno.test("main", () => {
  assert(isUnicodeSupported());
});

Deno.test({
  ignore: Deno.build.os !== "windows",
  name: "windows",
  fn: () => {
    assert(isUnicodeSupported());

    assert(isUnicodeSupported("linux"));
    assert(isUnicodeSupported("darwin"));

    Deno.env.delete("CI");
    Deno.env.delete("WT_SESSION");
    Deno.env.delete("TERM");

    assert(!isUnicodeSupported());
  },
});
