const { spawnSync } = require("child_process");

const npmCli = process.env.npm_execpath;
const npmCheck = script => npmCli
  ? [process.execPath, [npmCli, "run", script]]
  : [process.platform === "win32" ? "npm.cmd" : "npm", ["run", script]];

const checks = [
  [process.execPath, ["--check", "server.js"]],
  [process.execPath, ["--check", "public/app.js"]],
  [process.execPath, ["--check", "scripts/provider-engines.js"]],
  [process.execPath, ["--check", "scripts/generate-render-env.js"]],
  npmCheck("workflow:audit"),
  npmCheck("user-mode:audit"),
  npmCheck("app:behavior-audit"),
  npmCheck("app:jarvis-qa"),
  npmCheck("app:mobile-native-qa"),
  npmCheck("placeholder:audit"),
  npmCheck("stabilization:gate"),
  npmCheck("production:clickthrough"),
  npmCheck("production:complete-check"),
  npmCheck("smoke"),
  npmCheck("learning:translation-smoke"),
  npmCheck("provider-engines:smoke"),
  npmCheck("github:check")
];

for (const [command, args] of checks) {
  const label = `${command} ${args.join(" ")}`;
  console.log(`\n==> ${label}`);
  const result = spawnSync(command, args, { stdio: "inherit", shell: false, windowsHide: true });
  if (result.status !== 0) {
    console.error(`Full production regression failed: ${label}`);
    process.exit(result.status || 1);
  }
}

console.log("\nFull production regression passed");
