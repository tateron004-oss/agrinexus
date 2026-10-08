// Shows which language each route answers in when the ACCOUNT language and the language of the words just typed differ (docs/REAL_RUNTIME_VERIFICATION.md, open question 4).
//   node language-mix.mjs          run while the harness is up (RR_OUT set); makes one Kiswahili account and one English account (both Kenya) and asks the production audit's safety phrases
//                                  in the OTHER language on the voice tool, /api/agent/command and the planner route.
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
import { ROOT, call, adminCookie } from "./common.mjs";
const audit = createRequire(path.join(ROOT, "package.json"))("./scripts/production-user-audit.js");
const admin = await adminCookie();
async function account(language) {
  const email = `rt-lang-${language}-${crypto.randomUUID().slice(0, 6)}@example.com`; const password = `Rt-${crypto.randomUUID()}`;
  const made = await call("POST", "/api/admin/test-user", { email, name: `RT lang ${language}`, password, country: "Kenya", language }, admin);
  if (made.status !== 200) throw new Error(`could not make ${email}: ${made.status}`);
  return (await call("POST", "/api/login", { email, password })).cookie;
}
let n = 0;
const routes = {
  "voice tool": (cookie, text, lang) => call("POST", "/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `l-${Date.now()}-${n++}`, arguments: { command: text, language: lang }, language: lang }, cookie).then(r => r.json?.response || ""),
  "agent command": (cookie, text, lang) => call("POST", "/api/agent/command", { command: text, language: lang, conversational: true }, cookie).then(r => r.json?.commandResult?.response || ""),
  "planner (typed)": (cookie, text, lang) => call("POST", "/api/nexus/runtime/behavior/turn", { text, channel: "typed", locale: lang }, cookie).then(r => r.json?.response || "")
};
const looksSwahili = text => /\b(na|ya|wa|kwa|siko|uko|tafadhali|usaidizi|msaada|nipo|niko|pole|sasa|hapa|huduma|simu|unaweza|nimeuza)\b/i.test(text);
const accounts = { sw: await account("sw"), en: await account("en") };
let mismatches = 0;
for (const [accountLang, cookie] of Object.entries(accounts)) {
  const typed = accountLang === "sw" ? "en" : "sw";
  for (const item of audit.SAFETY.filter(entry => entry.lang === typed)) {
    for (const [route, ask] of Object.entries(routes)) {
      const reply = await ask(cookie, item.text, typed);
      const replyLang = looksSwahili(reply) ? "sw" : "en";
      if (replyLang !== typed) mismatches += 1;
      console.log(`${replyLang === typed ? "ok      " : "MISMATCH"} account=${accountLang} typed=${typed} ${route.padEnd(15)} "${item.text}" -> ${reply.slice(0, 90)}`);
    }
  }
}
console.log(`\n${mismatches} mismatches`);
process.exitCode = mismatches ? 1 : 0;
