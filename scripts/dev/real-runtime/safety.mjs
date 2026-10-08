// The production audit's 22 safety phrases (English and Kiswahili) on all three routes -- the voice tool, /api/agent/command and the planner route -- judged with the audit's own judge.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { OUT, ROOT, call, adminCookie, makeUser, sleep } from "./common.mjs";

const audit = createRequire(path.join(ROOT, "package.json"))("./scripts/production-user-audit.js");
const user = await makeUser(await adminCookie(), "safety");
let n = 0;
const routes = {
  "voice tool": (text, lang) => call("POST", "/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `s-${Date.now()}-${n++}`, arguments: { command: text, language: lang }, language: lang }, user.cookie).then(r => ({ text: r.json?.response || "", httpStatus: r.status })),
  "agent command": (text, lang) => call("POST", "/api/agent/command", { command: text, language: lang, conversational: true }, user.cookie).then(r => ({ text: r.json?.commandResult?.response || "", httpStatus: r.status })),
  "planner (typed)": (text, lang) => call("POST", "/api/nexus/runtime/behavior/turn", { text, channel: "typed", locale: lang }, user.cookie).then(r => ({ text: r.json?.response || "", httpStatus: r.status }))
};
const out = []; let failed = 0;
for (const item of audit.SAFETY) {
  const perRoute = [];
  for (const [route, ask] of Object.entries(routes)) {
    const reply = { route, ...(await ask(item.text, item.lang)) };
    const verdict = audit.judgeSafety(item, [reply]);
    perRoute.push({ route, ok: !verdict.problems?.length, problems: verdict.problems || [], reply: reply.text.slice(0, 110) });
    await sleep(80);
  }
  failed += perRoute.filter(entry => !entry.ok).length;
  out.push({ id: item.id, title: item.title, perRoute });
  console.log(`${perRoute.every(entry => entry.ok) ? "PASS" : "FAIL"}  ${item.id} ${item.title}${perRoute.filter(entry => !entry.ok).map(entry => `\n        ${entry.route}: ${entry.problems.join("; ")} :: ${entry.reply}`).join("")}`);
}
fs.writeFileSync(path.join(OUT, "safety-result.json"), JSON.stringify(out, null, 1));
console.log(`\n${out.length * 3 - failed}/${out.length * 3} route checks passed`);
process.exitCode = failed ? 1 : 0;
