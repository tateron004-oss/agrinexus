const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

// Found live (server.js helper-function sweep): runNexusOpenAiNativeAgentCommand's
// turn-level requiresConfirmation check only matched the underscore spelling
// "confirmation_required" -- but that spelling is only ever returned by the
// provider-layer helpers (email.send, Twilio sendSms/sendWhatsapp). Every
// in-function branch that pauses for confirmation directly (reminder
// cancellation, field-visit-plan cancellation, nexus_lists, the telehealth-
// video path of nexus_health_preparation) returns the hyphenated
// "confirmation-required" instead, so the overall turn status was reported
// as "completed" even though a tool result was still waiting on the user's
// explicit yes.
const root = path.resolve(__dirname, "..", "..");
const port = 4802;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-openai-native-agent-command-confirmation-status-db.json");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

let server;
let mockOpenAi;
let cookie;
let callCount;

test.before(async () => {
  // Mocks the OpenAI Responses endpoint: the first call returns a
  // function_call for the reminder-cancellation branch (never confirmed),
  // the second call (previous_response_id set, tool output fed back) returns
  // the model's own closing spoken text, exactly as the real turn would.
  mockOpenAi = http.createServer((req, res) => {
    let raw = "";
    req.on("data", chunk => { raw += String(chunk); });
    req.on("end", () => {
      callCount += 1;
      res.setHeader("content-type", "application/json");
      if (callCount === 1) {
        res.end(JSON.stringify({
          id: "resp_1",
          output: [{ type: "function_call", name: "nexus_automation_reminder", call_id: "call_1", id: "call_1", arguments: "{}" }]
        }));
      } else {
        res.end(JSON.stringify({ id: "resp_2", output_text: "I found a reminder. Confirm and I will cancel it." }));
      }
    });
  });
  const mockPort = await new Promise(resolve => mockOpenAi.listen(0, "127.0.0.1", () => resolve(mockOpenAi.address().port)));

  callCount = 0;
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath,
      NEXUS_DISABLE_LOCAL_ENV_FILES: "true",
      OPENAI_API_KEY: "test-only-openai-native-key",
      OPENAI_RESPONSES_URL: `http://127.0.0.1:${mockPort}/responses`,
      // CI's own isolated test run (`.github/workflows`) deliberately sets this
      // to "false" to block real provider calls -- without forcing it back on
      // here, this test's whole premise (reaching runNexusOpenAiNativeAgentCommand)
      // silently never executes and the request falls through to the legacy
      // companion-safe dispatcher instead, failing for an unrelated reason.
      NEXUS_OPENAI_NATIVE_ENABLED: "true"
    },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(async () => {
  server.kill();
  await new Promise(resolve => server.once("exit", resolve));
  mockOpenAi.close();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

test("a turn whose tool result paused on the hyphenated confirmation-required status reports the turn itself as needing confirmation, not completed", async () => {
  const res = await fetch(`${base}/api/agent/command`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ command: "Cancel my reminder about watering the field" })
  });
  const body = await res.json();
  assert.equal(body.error, undefined, JSON.stringify(body));
  assert.equal(body.commandResult?.status, "needs-confirmation", `expected the turn to still be pending confirmation, got: ${JSON.stringify(body.commandResult)}`);
});
