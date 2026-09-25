"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const serverJsPath = path.join(__dirname, "..", "..", "server.js");
const source = fs.readFileSync(serverJsPath, "utf8");

function extractFunction(name) {
  let start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in server.js`);
  if (source.slice(Math.max(0, start - 6), start) === "async ") start -= 6;
  const parenStart = source.indexOf("(", start);
  let parenDepth = 0;
  let parenEnd = parenStart;
  for (; parenEnd < source.length; parenEnd += 1) {
    if (source[parenEnd] === "(") parenDepth += 1;
    else if (source[parenEnd] === ")") {
      parenDepth -= 1;
      if (parenDepth === 0) break;
    }
  }
  const bodyStart = source.indexOf("{", parenEnd);
  let depth = 0;
  let i = bodyStart;
  for (; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    else if (source[i] === "}") {
      depth -= 1;
      if (depth === 0) break;
    }
  }
  return source.slice(start, i + 1);
}

// Found live: openAiRealtimeInstructions() -- used by BOTH the browser voice
// session and the Twilio phone bridge -- never mentioned nexus_lists at all,
// unlike the typed/native prompt, which explicitly warns against misrouting
// a checklist request to nexus_document_export/nexus_automation_reminder. A
// spoken "create a checklist called Farm Supplies" had nothing steering the
// model toward the real, persisted lists tool.
test("the realtime (voice/phone) instructions explicitly call out nexus_lists for checklist/to-do requests", () => {
  const context = { process: { env: {} } };
  vm.createContext(context);
  const instructions = vm.runInContext(`${extractFunction("openAiRealtimeInstructions")}\nopenAiRealtimeInstructions({ email: "test@example.com" }, "en");`, context);
  assert.match(instructions, /\bnexus_lists\b/, "the realtime instructions must mention nexus_lists");
  assert.match(instructions, /checklist/i);
  // Same non-negotiable warning as the native prompt: a checklist must never
  // be routed to the reminder or document-export tools instead.
  assert.match(instructions, /never route a checklist request to nexus_automation_reminder or nexus_document_export/i);
});

test("nexus_lists remains offered as a callable realtime tool (not filtered out like nexus_general_conversation)", () => {
  const context = { process: { env: {} } };
  vm.createContext(context);
  const toolsSource = `${extractFunction("nexusOpenAiNativeToolSchemas")}\n${extractFunction("nexusRealtimeCallableToolSchemas")}\nnexusRealtimeCallableToolSchemas();`;
  const tools = vm.runInContext(toolsSource, context);
  assert.ok(tools.some(tool => tool.name === "nexus_lists"), "nexus_lists must remain a callable realtime tool");
});
