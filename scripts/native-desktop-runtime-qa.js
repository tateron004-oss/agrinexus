const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const bridge = JSON.parse(read("public/native-bridge.json"));
const runtime = JSON.parse(read("native-desktop/desktop-runtime.json"));
const listener = read("native-desktop/windows/NexusWakeListener.ps1");
const launcher = read("native-desktop/windows/Start-NexusDesktopVoice.cmd");
const readme = read("native-desktop/README.md");
const app = read("public/app.js");

const checks = [
  ["bridge advertises desktop wake", bridge.version === "1.4.0" && bridge.requiredPermissions.includes("desktopWakeListenerOptional") && bridge.wakeRuntime.desktopMode.includes("Chrome is closed")],
  ["bridge points to desktop runtime", bridge.nativeRuntimeSource.desktop === "native-desktop" && bridge.desktopRuntime.source === "native-desktop/desktop-runtime.json"],
  ["windows runtime declared", runtime.platforms.windows.runtime.includes("PowerShell") && runtime.platforms.windows.wakeMode === "visible-always-on-console"],
  ["windows launcher declared", runtime.platforms.windows.launcher === "native-desktop/windows/Start-NexusDesktopVoice.cmd" && launcher.includes("NexusWakeListener.ps1") && readme.includes("Start-NexusDesktopVoice.cmd")],
  ["visible privacy controls", runtime.privacyControls.includes("visible listener window") && readme.includes("no hidden listening")],
  ["wake and stop phrases", runtime.wakePhrases.includes("Nexus") && runtime.stopPhrases.includes("Nexus stop") && listener.includes("$wakePhrases") && listener.includes("$stopPhrases")],
  ["command handoff", listener.includes("/api/agent/command") && listener.includes('inputMode = "native"') && listener.includes('nativeSource = "windows-desktop"')],
  ["desktop login handoff", listener.includes("AGRINEXUS_EMAIL") && listener.includes("AGRINEXUS_PASSWORD") && listener.includes("/api/login") && listener.includes("-WebSession $script:NativeWebSession") && readme.includes("AGRINEXUS_EMAIL")],
  ["signed session handoff", listener.includes("AGRINEXUS_SESSION_COOKIE") && listener.includes('-Headers $headers') && readme.includes("-SessionCookie")],
  ["browser independence explained", readme.includes("Chrome is closed") && bridge.desktopRuntime.browserIndependence.includes("page being open")],
  ["web readiness explains desktop", app.includes("Desktop wake companion") && app.includes("computer-wide wake listening when Chrome is closed")],
  ["mobile remains source of phone always-on", app.includes("native Android or iOS wrapper") && bridge.wakeRuntime.mode === "native-required-for-true-background"]
];

const missing = checks.filter(([, ok]) => !ok).map(([name]) => name);
assert.deepStrictEqual(missing, [], `Missing native desktop runtime pieces: ${missing.join(", ")}`);

console.log("Native desktop runtime QA passed");
for (const [name] of checks) console.log(`- ${name}`);
