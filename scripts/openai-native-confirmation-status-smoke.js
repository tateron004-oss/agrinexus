const assert = require("assert");
const http = require("http");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4505;
const mockPort = 4506;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-openai-native-confirmation-status-smoke-db.json");
let userCookie = "";

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

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function call(route, { method, body, cookie } = {}) {
  const res = await fetch(`${base}${route}`, {
    method: method || (body ? "POST" : "GET"),
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const json = await res.json();
  return { status: res.status, json };
}

// A minimal stand-in for OpenAI's /v1/responses endpoint: the first request
// (tools attached) returns a function_call for nexus_communications with no
// `confirmed` argument (the realistic shape a model produces on a first,
// un-confirmed utterance); the second request (tool output submitted) just
// returns the model's spoken follow-up text.
function startMockOpenAi(toolArguments) {
  let callCount = 0;
  const server = http.createServer((req, res) => {
    let raw = "";
    req.on("data", chunk => { raw += chunk; });
    req.on("end", () => {
      callCount += 1;
      res.setHeader("content-type", "application/json");
      if (callCount === 1) {
        res.end(JSON.stringify({
          id: "resp_mock_1",
          output: [{ type: "function_call", name: "nexus_communications", call_id: "call_1", arguments: JSON.stringify(toolArguments) }]
        }));
      } else {
        res.end(JSON.stringify({ id: "resp_mock_2", output_text: "I need your confirmation before I call Maria. Say yes to proceed." }));
      }
    });
  });
  return new Promise(resolve => server.listen(mockPort, () => resolve(server)));
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const mock = await startMockOpenAi({ command: "call Maria", channel: "call", to: "+15555550101" });
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDbPath,
      OPENAI_API_KEY: "test-only-mock-key",
      OPENAI_RESPONSES_URL: `http://127.0.0.1:${mockPort}/v1/responses`,
      NEXUS_CALLS_ENABLED: "true",
      TWILIO_ACCOUNT_SID: "",
      TWILIO_AUTH_TOKEN: "",
      NEXUS_PRESERVE_EMPTY_ENV: "1"
    },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);
    userCookie = await login("user@agrinexus.org", "User2026!");

    // Real bug fix: runNexusOpenAiNativeAgentCommand() always hardcoded the
    // turn's outer `status` to "completed", even when an invoked tool came
    // back `confirmation_required` -- so a client branching on `status`
    // (the same convention used by the deterministic call-staging path and
    // checked throughout server.js) could never tell that this turn was
    // actually still waiting on the user's explicit "yes".
    const result = await call("/api/agent/command", {
      body: { command: "call Maria", inputMode: "voice", outputMode: "voice", conversational: true, mode: "user", language: "en", targetLanguage: "en" },
      cookie: userCookie
    });
    assert.equal(result.status, 200);
    const commandResult = result.json.commandResult;
    assert.equal(commandResult.status, "needs-confirmation", "a confirmation_required tool result must surface as needs-confirmation, not completed");
    assert.equal(commandResult.metadata.confirmationRequired, true, "metadata should expose confirmationRequired");
    assert.equal(commandResult.metadata.executionDeferred, true, "metadata should expose executionDeferred");
    assert.equal(commandResult.metadata.openAiNativeAgent.toolResultStatuses[0], "confirmation_required");

    console.log("OpenAI-native confirmation status smoke test passed");
  } finally {
    server.kill();
    mock.close();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
