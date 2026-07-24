const { execFileSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const patchSource = path.join(__dirname, "approved-activation-matrix.patch.b64");
const patch = Buffer.from(fs.readFileSync(patchSource, "utf8").trim(), "base64");
if (!patch.length) throw new Error("Approved activation-matrix patch is empty");

const patchPath = path.join(os.tmpdir(), "nexus-activation-matrix.patch");
fs.writeFileSync(patchPath, patch);
try {
  execFileSync("git", ["apply", "--check", patchPath], { stdio: "inherit" });
  execFileSync("git", ["apply", patchPath], { stdio: "inherit" });
} finally {
  fs.rmSync(patchPath, { force: true });
}
