#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const manifestPath = path.join(root, ".github", "nexus-protected-foundation.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const failures = [];

for (const [relativePath, expectedBlob] of Object.entries(manifest.protectedFiles)) {
  const absolutePath = path.join(root, relativePath);

  if (!fs.existsSync(absolutePath)) {
    failures.push(`${relativePath}: missing`);
    continue;
  }

  const stat = fs.statSync(absolutePath);
  if (!stat.isFile() || stat.size === 0) {
    failures.push(`${relativePath}: empty or not a regular file`);
    continue;
  }

  const sample = fs.readFileSync(absolutePath);
  if (sample.includes(0)) {
    failures.push(`${relativePath}: contains NUL bytes`);
    continue;
  }

  let actualBlob;
  try {
    actualBlob = execFileSync("git", ["hash-object", "--", relativePath], {
      cwd: root,
      encoding: "utf8"
    }).trim();
  } catch (error) {
    failures.push(`${relativePath}: unable to calculate Git object identity`);
    continue;
  }

  if (actualBlob !== expectedBlob) {
    failures.push(
      `${relativePath}: protected identity changed (${actualBlob || "unknown"}; expected ${expectedBlob})`
    );
  }
}

if (failures.length) {
  console.error("NEXUS PROTECTED FOUNDATION: BLOCKED");
  for (const failure of failures) console.error(`- ${failure}`);
  console.error(
    "Restore the protected files. Do not update the manifest without Ron Tate's explicit file-specific authorization."
  );
  process.exit(1);
}

console.log(
  `NEXUS PROTECTED FOUNDATION: PASS — ${Object.keys(manifest.protectedFiles).length} files match ${manifest.baseline.runtime}.`
);

