const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.CONVERSATION_SMOKE_PORT || 4398);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-conversation-smoke-db.json");
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let i = 0; i < 60; i += 1) {
    try {
      const res = await fetch(`${base}/api/healthz`);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Conversation smoke server did not become reachable");
}

async function call(route, body) {
  const res = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await res.json();
  if (!res.ok) throw new Error(`${route}: ${json.error || res.statusText}`);
  return json;
}

(async () => {
  fs.copyFileSync(sourceDb, tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    let state = await call("/api/agent/command", {
      command: "Can AgriTrade talk to me about selling crops and contacting buyers?",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert(state.commandResult.intent === "conversation.open_reasoning");
    assert(state.commandResult.metadata.redirectSection === "trade");
    assert(state.profile.agentMemory.lastRecommendedAction);
    assert(state.profile.agentMemory.conversationQuality.openEndedAnswers >= 1);

    state = await call("/api/agent/command", {
      command: "do the next step",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert(state.commandResult.intent === "conversation.pending_action");
    assert(state.profile.agentPendingAction);

    state = await call("/api/agent/command", {
      command: "explain that",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert(state.commandResult.intent === "conversation.followup_explained");
    assert(/pending action/i.test(state.commandResult.response));

    state = await call("/api/agent/command", {
      command: "yes",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert(state.commandResult.intent === "conversation.confirmed");
    assert(!state.profile.agentPendingAction);

    state = await call("/api/agent/command", {
      command: "thanks coach",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert(state.commandResult.intent === "conversation.acknowledged");
    assert(/next/i.test(state.commandResult.response));
    console.log("Conversation brain smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
