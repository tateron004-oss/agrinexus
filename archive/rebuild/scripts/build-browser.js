"use strict";

const path = require("node:path");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");

esbuild.build({
  entryPoints: [path.join(root, "browser", "nexus-clean-entry.js")],
  outfile: path.join(root, "browser", "nexus-clean.bundle.js"),
  bundle: true,
  platform: "browser",
  format: "iife",
  target: ["chrome120", "edge120", "safari17"],
  sourcemap: false,
  minify: false,
  legalComments: "none"
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
