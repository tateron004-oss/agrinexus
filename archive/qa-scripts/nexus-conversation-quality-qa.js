const assert = require("node:assert");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_CONVERSATION_QUALITY_QA_PORT || 4591);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-nexus-conversation-quality-qa-db.json");
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Nexus conversation quality QA server did not become reachable");
}

async function call(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return json;
}

async function command(prompt) {
  const state = await call("/api/agent/command", {
    command: prompt,
    conversational: true,
    inputMode: "voice",
    outputMode: "voice",
    mode: "user",
    targetLanguage: "en"
  });
  return state.commandResult || {};
}

function compact(text = "") {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function assertNoUnsafeClaims(prompt, result) {
  const text = compact(`${result.response || ""} ${JSON.stringify(result.metadata || {})}`);
  assert(!/live medical diagnosis|live provider dispatch|payment processed|application submitted|registry-driven execution|already contacted|i diagnosed|i dispatched|i submitted/i.test(text), `${prompt} must not overclaim unsafe autonomy`);
  const agentAction = result.metadata?.agentAction;
  assert(agentAction, `${prompt} should keep agentAction metadata`);
  assert.strictEqual(agentAction.runtimeStatus, "metadata-only", `${prompt} agentAction remains metadata-only`);
  assert.strictEqual(agentAction.source, "existing-router", `${prompt} agentAction source remains existing router`);
  assert.notStrictEqual(agentAction.executionMode, "registry-driven", `${prompt} must not become registry-driven`);
}

function assertResponse(result, check) {
  const response = compact(result.response);
  assert.strictEqual(result.intent, check.intent, `${check.prompt} should route to ${check.intent}, got ${result.intent}`);
  assert.strictEqual(result.metadata?.redirectSection, check.section, `${check.prompt} should redirect to ${check.section}, got ${result.metadata?.redirectSection}`);
  for (const include of check.includes) {
    assert(response.toLowerCase().includes(include.toLowerCase()), `${check.prompt} response should include "${include}", got "${response}"`);
  }
  assertNoUnsafeClaims(check.prompt, result);
}

const checks = [
  {
    prompt: "What are you?",
    intent: "conversation.capability_summary",
    section: "agent",
    includes: ["listen in normal words", "workforce development", "ask before taking high-impact actions"]
  },
  {
    prompt: "What can you do?",
    intent: "conversation.capability_summary",
    section: "agent",
    includes: ["listen in normal words", "training", "AgriTrade"]
  },
  {
    prompt: "How can you help me?",
    intent: "conversation.capability_summary",
    section: "agent",
    includes: ["guide and prepare", "will ask before calls"]
  },
  {
    prompt: "Can you act like Jarvis?",
    intent: "conversation.jarvis_boundary",
    section: "agent",
    includes: ["guided workflow assistant", "not fully autonomous yet", "will ask before any high-impact action"]
  },
  {
    prompt: "Be my Jarvis.",
    intent: "conversation.jarvis_boundary",
    section: "agent",
    includes: ["guided workflow assistant", "do not diagnose medical issues"]
  },
  {
    prompt: "Guide me step by step.",
    intent: "conversation.guided_menu",
    section: "agent",
    includes: ["Start training", "explore job pathways", "open AgriTrade"]
  },
  {
    prompt: "I don't know where to start.",
    intent: "conversation.guided_menu",
    section: "agent",
    includes: ["Choose one starting point", "health access", "maps and location"]
  },
  {
    prompt: "Can you plan my next steps?",
    intent: "conversation.next_step_plan",
    section: "agent",
    includes: ["safe next-step plan", "ask before any high-impact action"]
  },
  {
    prompt: "Help me get trained.",
    intent: "conversation.learning_start",
    section: "learning",
    includes: ["get trained for work", "skill gaps", "will not submit any application"]
  },
  {
    prompt: "Help me find a job pathway.",
    intent: "conversation.workforce_help",
    section: "workforce",
    includes: ["explore job pathways", "interview preparation", "will not submit an application"]
  },
  {
    prompt: "Help me prepare for work.",
    intent: "conversation.learning_start",
    section: "learning",
    includes: ["training options", "job-readiness steps"]
  },
  {
    prompt: "Help me in the field.",
    intent: "conversation.crop_help",
    section: "trade",
    includes: ["field support", "one safe next step", "AgriTrade"]
  },
  {
    prompt: "Are you AgriNexus?",
    intent: "conversation.platform_explained",
    section: "agent",
    includes: ["Nexus is the assistant inside Nexus Genesis | AgriNexus", "legacy/internal compatibility identity"]
  },
  {
    prompt: "What is Nexus Genesis | AgriNexus?",
    intent: "conversation.platform_explained",
    section: "agent",
    includes: ["Nexus is the assistant inside Nexus Genesis | AgriNexus", "AgriTrade remain active"]
  }
];

(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: "",
      TWILIO_ACCOUNT_SID: "",
      TWILIO_AUTH_TOKEN: "",
      TWILIO_PHONE_NUMBER: "",
      PUBLIC_BASE_URL: base
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
    for (const check of checks) {
      const result = await command(check.prompt);
      assertResponse(result, check);
    }

    const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
    const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
    assert(!serverSource.includes("nexus-tool-registry.v1.json"), "server.js must not reference static registry JSON at runtime");
    assert(!appSource.includes("nexus-tool-registry.v1.json"), "public/app.js must not reference static registry JSON at runtime");
    assert(serverSource.includes("assistantFullName") || appSource.includes('const assistantFullName = "AgriNexus";'), "AgriNexus compatibility identifiers must remain present");
    assert(serverSource.includes("AgriTrade") && appSource.includes("AgriTrade"), "AgriTrade compatibility must remain present");
    assert(/agriculture|farmer|crop/i.test(`${serverSource} ${appSource}`), "agriculture/farm/crop compatibility must remain present");

    console.log("Nexus conversation quality QA passed");
    checks.forEach(check => console.log(`- ${check.prompt} -> ${check.intent}`));
  } finally {
    server.kill();
    await wait(150);
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best effort cleanup for Windows file locks.
    }
  }
})().catch(error => {
  try {
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  } catch {
    // Best effort cleanup for Windows file locks.
  }
  console.error(error);
  process.exit(1);
});
