const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.UTILITY_ASSISTANT_SMOKE_PORT || 4404);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-utility-assistant-smoke-db.json");
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(`${base}/api/healthz`);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Utility assistant smoke server did not become reachable");
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
    await call("/api/login", { email: "demo@agrinexus.org", password: "Prototype2026!" });
    const utilityBodies = [
      ["utility.time", "Nexus, what time is it?"],
      ["utility.weather", "Nexus, what is the weather for the farmer today?"],
      ["utility.crop-timing", "Nexus, when should I harvest this crop?"],
      ["utility.appointment-reminder", "Nexus, remind me about my telehealth appointment"],
      ["utility.route-delay", "Nexus, are there route delays for my shipment?"],
      ["utility.buyer-message", "Nexus, prepare a buyer message"],
      ["utility.field-alert", "Nexus, give me a field alert"],
      ["utility.health-safety", "Nexus, give me a health safety reminder"],
      ["utility.situation-agent", "Nexus, manage this situation"],
      ["utility.pre-provider-readiness", "Nexus, what works without providers?"],
      ["utility.shipment", "Nexus, how long until my shipment arrives?"],
      ["utility.appointment", "Nexus, what time is my appointment?"],
      ["utility.daily-plan", "Nexus, what is next today?"],
      ["utility.next-step", "Nexus, what should I do next?"]
    ];
    for (const [intent, command] of utilityBodies) {
      const state = await call("/api/agent/command", {
        command,
        conversational: true,
        inputMode: "voice",
        outputMode: "voice",
        timeZone: "America/Los_Angeles"
      });
      assert.strictEqual(state.commandResult.intent, intent, `${command} should return ${intent}`);
      assert.strictEqual(state.commandResult.metadata.utilityAssistant, true, `${intent} should be utility-backed`);
      assert.strictEqual(state.commandResult.metadata.situationAgent.mode, "nexus-situation-agent", `${intent} should include Situation Agent mode`);
      assert.strictEqual(state.commandResult.metadata.situationAgent.eightPointModel.length, 8, `${intent} should include all eight Situation Agent elements`);
      if (intent === "utility.pre-provider-readiness") {
        assert.strictEqual(state.commandResult.metadata.preProviderHardening.mode, "nexus-pre-provider-hardening", "pre-provider command should include hardening model");
        assert(state.commandResult.metadata.preProviderHardening.guardrails.length >= 5, "pre-provider hardening should include guardrails");
        assert(state.commandResult.metadata.preProviderHardening.modules.length >= 6, "pre-provider hardening should cover all core modules");
      }
      assert(state.commandResult.response.length > 20, `${intent} should produce a useful spoken answer`);
      assert((state.profile.agentMemory.rememberedContexts || []).some(item => item.intent === intent), `${intent} should be remembered as command evidence`);
    }
    for (const targetLanguage of ["es", "fr", "sw", "ar"]) {
      const state = await call("/api/agent/command", {
        command: "Nexus, what works without providers?",
        conversational: true,
        inputMode: "voice",
        outputMode: "voice",
        targetLanguage,
        timeZone: "America/Los_Angeles"
      });
      assert.strictEqual(state.commandResult.intent, "utility.pre-provider-readiness", `${targetLanguage} should keep the pre-provider intent`);
      assert.strictEqual(state.commandResult.metadata.translatedResponse, true, `${targetLanguage} should return a translated command response`);
      assert.strictEqual(state.commandResult.metadata.translation.targetLanguage, targetLanguage, `${targetLanguage} should be the response target language`);
      assert.notStrictEqual(state.commandResult.response, state.commandResult.metadata.originalResponse, `${targetLanguage} response should not remain English-only`);
      assert.strictEqual(state.commandResult.metadata.preProviderHardening.mode, "nexus-pre-provider-hardening", `${targetLanguage} should preserve the hardening model metadata`);
    }
  } finally {
    server.kill();
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Ignore cleanup race on Windows.
    }
  }

  console.log("Utility assistant smoke passed");
  console.log("- Ask Nexus backend time answer");
  console.log("- Ask Nexus backend weather answer");
  console.log("- Ask Nexus backend crop timing answer");
  console.log("- Ask Nexus backend appointment reminder answer");
  console.log("- Ask Nexus backend route delay answer");
  console.log("- Ask Nexus backend buyer message answer");
  console.log("- Ask Nexus backend field alert answer");
  console.log("- Ask Nexus backend health safety answer");
  console.log("- Ask Nexus backend Situation Agent eight-point model");
  console.log("- Ask Nexus pre-provider hardening model");
  console.log("- Ask Nexus backend shipment answer");
  console.log("- Ask Nexus backend appointment answer");
  console.log("- Ask Nexus backend daily plan answer");
  console.log("- Ask Nexus backend next-step answer");
  console.log("- Ask Nexus pre-provider multilingual responses: es, fr, sw, ar");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
