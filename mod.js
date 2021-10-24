/// <reference types="./mod.d.ts" />

export default function isUnicodeSupported() {
  return Promise.resolve(isUnicodeSupportedSync());
}

export function isUnicodeSupportedSync() {
  if (Deno.build.os !== "windows") {
    return Deno.env.get("TERM") !== "linux";
  }

  return Boolean(Deno.env.get("CI")) ||
    Boolean(Deno.env.get("WT_SESSION")) || // Windows Terminal
    Deno.env.get("ConEmuTask") === "{cmd::Cmder}" || // ConEmu and cmder
    Deno.env.get("TERM_PROGRAM") === "vscode" ||
    Deno.env.get("TERM") === "xterm-256color" ||
    Deno.env.get("TERM") === "alacritty";
}
