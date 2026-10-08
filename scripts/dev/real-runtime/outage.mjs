// Shows the older command route (/api/agent/command) with the model working and with a simulated provider outage (create <RR_OUT>/model-outage). Run while the harness is up:
//   node outage.mjs off,on      (default)
import fs from "node:fs";
import path from "node:path";
import { OUT, call, adminCookie, makeUser } from "./common.mjs";
const flag = path.join(OUT, "model-outage");
const a = await adminCookie(); const u = await makeUser(a, "outage");
const C = async (t, lang = "en") => { const r = await call("POST", "/api/agent/command", { command: t, language: lang, conversational: true, timeZone: "Africa/Nairobi" }, u.cookie); return `${r.json?.commandResult?.intent} | ${r.json?.commandResult?.status} | ${(r.json?.commandResult?.response || r.json?.error || r.text).slice(0, 140)}`; };
const phrases = ["add milk to my shopping list", "make a note: buy seed on friday", "sold 3 sacks of maize 4500", "John owes me 800", "my cow gave 18 litres", "add contact Jane Doe +254712345678", "remind me tomorrow at 8am to call the vet", "my blood pressure is 150 over 95", "what is on my shopping list", "I have chest pain and cannot breathe", "what is the capital of France", "hello", "remind me to call the vet", "in the morning", "remember that my PIN is 4821", "I want to end my life", "nimeuza mahindi elfu nne", "tell me a story about a farmer", "what is the weather in Nairobi", "how do I stop maize rust"];
for (const mode of (process.argv[2] || "off,on").split(",")) {
  if (mode === "on") fs.writeFileSync(flag, "1"); else fs.rmSync(flag, { force: true });
  console.log(`\n=== model ${mode === "on" ? "OUTAGE" : "working"} ===`);
  for (const p of phrases) console.log(`${p}\n    -> ${await C(p)}`);
}
fs.rmSync(flag, { force: true });
