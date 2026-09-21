"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// The Windows listener is a PowerShell script that needs a microphone, so CI cannot run it. These checks keep its hardening from being
// silently removed, and keep the strings the archived desktop QA (archive/qa-scripts/native-desktop-runtime-qa.js) looks for.
const listener = fs.readFileSync(path.join(__dirname, "../../native-desktop/windows/NexusWakeListener.ps1"), "utf8");

test("only one listener runs per Windows session", () => {
  assert.match(listener, /New-Object System\.Threading\.Mutex\(\$false, "Local\\KyroDesktopListener"\)/);
  assert.match(listener, /if \(-not \$script:InstanceMutex\.WaitOne\(0\)\)[\s\S]{0,300}exit 0/);
});

test("back-to-back commands are not mistaken for duplicates", () => {
  assert.ok(!/\$script:LastCommand = \$afterWake/.test(listener), "the event handler must not pre-set LastCommand");
  assert.ok(!/\$script:LastCommand = \$text\b/.test(listener));
  assert.match(listener, /\$script:LastCommand = \$normalizedCommand/, "Send-NexusCommand still records its own duplicate guard");
});

test("an expired login is renewed once instead of failing every command until restart", () => {
  assert.match(listener, /function Invoke-NexusCommandRequest/);
  assert.match(listener, /\$status -eq 401 -or \$status -eq 403/);
  assert.match(listener, /\$script:NativeWebSession = \$null\s+if \(Ensure-NexusSession\) \{ \$response = Invoke-NexusCommandRequest \$headers \$body \} else \{ throw \}/);
});

test("TLS 1.2 is requested, and use of the shared demo account is stated plainly", () => {
  assert.match(listener, /SecurityProtocolType\]::Tls12/);
  assert.match(listener, /\$usingDemoAccount = /);
  assert.match(listener, /Account: the shared demo account/);
});

test("what the desktop QA and the stop phrases rely on is intact", () => {
  for (const needle of ["$wakePhrases", "$stopPhrases", "/api/agent/command", 'inputMode = "native"', 'nativeSource = "windows-desktop"', "AGRINEXUS_EMAIL", "AGRINEXUS_PASSWORD", "/api/login",
    "-WebSession $script:NativeWebSession", "AGRINEXUS_SESSION_COOKIE", "-Headers $headers"]) assert.ok(listener.includes(needle), needle);
  assert.match(listener, /"kyro stop"/); assert.match(listener, /"stop listening"/);
});
