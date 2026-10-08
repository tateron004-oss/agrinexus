// Shows how the same "remind me ..." sentence is handled by the native reminder tool, the catch-all conversation tool and the typed planner route (docs/REAL_RUNTIME_VERIFICATION.md, open question 3),
// and how many rows each leaves in the push-reminder store. Run while the harness is up.
import { call, adminCookie, makeUser, sql } from "./common.mjs";
const u = await makeUser(await adminCookie(), "reminder-paths");
const text = "remind me tomorrow at 8am to call the vet";
const tool = (name, command) => call("POST", "/api/voice/realtime/tool", { name, correlationId: `rp-${Math.random().toString(36).slice(2)}`, arguments: { command, language: "en" }, language: "en", timeZone: "Africa/Nairobi" }, u.cookie).then(r => `${r.json?.status} | ${(r.json?.response || r.text).slice(0, 110)}`);
const rows = async () => (await sql("select count(*)::int as n from nexus_notifications where user_id = (select id from users where lower(email)=lower($1))", [u.email]).catch(() => [{ n: "?" }]))[0].n;
console.log("native tool nexus_automation_reminder:", await tool("nexus_automation_reminder", text), "| reminder rows:", await rows());
console.log("catch-all nexus_general_conversation :", await tool("nexus_general_conversation", "remind me tomorrow at 9am to call the buyer"), "| reminder rows:", await rows());
const planner = await call("POST", "/api/nexus/runtime/behavior/turn", { text: "remind me tomorrow at 10am to check the pump", channel: "typed", locale: "en", timeZone: "Africa/Nairobi" }, u.cookie);
console.log("typed planner                        :", planner.json?.state, "|", String(planner.json?.response || planner.json?.render?.response || "").slice(0, 110), "| reminder rows:", await rows());
console.log("native tool, cancel                  :", await tool("nexus_automation_reminder", "cancel my reminder about the vet"));
