"use strict";

const { resolveContact } = require("../memory/contacts.js");
const { t, languageOf } = require("../i18n/index.js");

// The trusted circle by conversation. The agreed defaults: the PERSON invites; the member says yes (by a push notification, then in
// their own words); either side can leave at any time, no reason needed; and a member is told NOTHING until the person chooses, except an
// emergency alert (see safety.js). Invitations never reveal whether an email has an account.
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();
const EMAIL = /^[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]+$/;
const CIRCLE = "(?:trusted )?circle";

// { action, ... } or null for text that is not about the circle.
function readCircleRequest(text) {
  const t = clean(text).replace(/[’]/g, "'").replace(/[.!?]+$/g, "");
  if (!t || t.length > 160) return null;
  const lower = t.toLowerCase();
  let m;
  if ((m = new RegExp(`^(?:please )?(?:add|invite) (.+?) to my ${CIRCLE}(?: as (?:my )?(.+))?$`, "i").exec(t))) return { action: "invite", who: clean(m[1]), relationship: clean(m[2] || "") };
  if (new RegExp(`^(?:who(?:'s| is) in my ${CIRCLE}|show my ${CIRCLE}|who looks out for me)$`).test(lower)) return { action: "list" };
  if ((m = new RegExp(`^(?:please )?(?:remove|take) (.+?) (?:out of|from) my ${CIRCLE}$`, "i").exec(t))) return { action: "remove", who: clean(m[1]) };
  if ((m = /^(?:please )?(?:share|let) my check-?ins? (?:be )?(?:with|shared with) (.+)$/i.exec(t)) || (m = /^(?:please )?let (.+?) (?:be told|know) (?:if|when) i (?:miss|skip) (?:a |my )?check-?in$/i.exec(t))) return { action: "share", key: "checkins", who: clean(m[1]), value: true };
  if ((m = /^(?:stop sharing|(?:do not|don't) share) my check-?ins? with (.+)$/i.exec(t))) return { action: "share", key: "checkins", who: clean(m[1]), value: false };
  if ((m = /^(?:please )?(?:share|let) my (?:medication|medicine|meds)(?: reminders?)? (?:be )?(?:with|shared with) (.+)$/i.exec(t)) || (m = /^(?:please )?let (.+?) (?:be told|know) (?:if|when) i (?:miss|skip) (?:a |my )?(?:dose|medication|medicine|meds)$/i.exec(t))) return { action: "share", key: "medications", who: clean(m[1]), value: true };
  if ((m = /^(?:stop sharing|(?:do not|don't) share) my (?:medication|medicine|meds)(?: reminders?)? with (.+)$/i.exec(t))) return { action: "share", key: "medications", who: clean(m[1]), value: false };
  // Location in an emergency: chosen by the person, for one member or for everyone in the circle, and only ever sent when they ask for urgent help.
  if ((m = /^(?:please )?(?:share|send|include) my (?:current )?location (?:in|during|with) (?:an? )?emergenc(?:y|ies)(?: alerts?)?(?: (?:with|to) (.+))?$/i.exec(t)) || (m = /^(?:please )?let (.+?) (?:see|get|know) my location (?:in|during) (?:an? )?emergenc(?:y|ies)$/i.exec(t))) return { action: "share", key: "emergencyLocation", who: clean(m[1] || "").replace(/^(?:everyone|everybody|all of them|all)(?: in my circle)?$/i, ""), value: true };
  if ((m = /^(?:stop sharing|stop sending|(?:do not|don't) share|(?:do not|don't) send|(?:do not|don't) include) my (?:current )?location (?:in|during|with) (?:an? )?emergenc(?:y|ies)(?: alerts?)?(?: (?:with|to) (.+))?$/i.exec(t))) return { action: "share", key: "emergencyLocation", who: clean(m[1] || "").replace(/^(?:everyone|everybody|all of them|all)(?: in my circle)?$/i, ""), value: false };
  if (/^(?:do i|am i) (?:share|sharing) my location (?:in|during) (?:an? )?emergenc(?:y|ies)$/.test(lower)) return { action: "list" };
  if (/^(?:do i have|show|list|what are) (?:any |my )?(?:circle )?invitations?$/.test(lower) || /^any (?:circle )?invitations?$/.test(lower)) return { action: "invitations" };
  if ((m = /^accept (?:the |an )?(?:circle )?invitation (?:from )?(.+)$/i.exec(t)) || (m = /^(?:yes,? )?(?:i )?accept (.+?)'s (?:circle )?invitation$/i.exec(t))) return { action: "accept", who: clean(m[1]) };
  if ((m = /^(?:decline|refuse|reject) (?:the |an )?(?:circle )?invitation (?:from )?(.+)$/i.exec(t)) || (m = /^(?:i )?(?:decline|refuse) (.+?)'s (?:circle )?invitation$/i.exec(t))) return { action: "decline", who: clean(m[1]) };
  if ((m = new RegExp(`^(?:please )?leave (.+?)'s ${CIRCLE}$`, "i").exec(t))) return { action: "leave", who: clean(m[1]) };
  if (/^who am i looking out for$/.test(lower)) return { action: "looking-out" };
  return readCircleRequestSw(text);
}

// Kiswahili: the same requests in Swahili. -> { action, ..., language: "sw" } or null. (Sharing check-ins and medication reminders is English only for now.)
function readCircleRequestSw(text) {
  const t = clean(text).replace(/[.!?]+$/g, "");
  if (!t || t.length > 160) return null;
  const lower = t.toLowerCase();
  let m;
  const everyone = value => clean(value || "").replace(/^(?:kila mtu|wote|watu wote)(?: kwenye mzunguko wangu)?$/i, "");
  if ((m = /^(?:tafadhali )?(?:ongeza|alika) (.+?) (?:kwenye|katika|kwa) mzunguko wangu(?: kama (.+))?$/i.exec(t))) return { action: "invite", who: clean(m[1]), relationship: clean(m[2] || ""), language: "sw" };
  if (/^(?:nani (?:yuko|wako) (?:kwenye|katika) mzunguko wangu|onyesha mzunguko wangu|mzunguko wangu|ni nani wanaonilinda)$/.test(lower)) return { action: "list", language: "sw" };
  if ((m = /^(?:tafadhali )?(?:ondoa|mtoe) (.+?) (?:kwenye|katika|kutoka) mzunguko wangu$/i.exec(t))) return { action: "remove", who: clean(m[1]), language: "sw" };
  if ((m = /^(?:tafadhali )?(?:shiriki|tuma) eneo langu (?:wakati wa|katika|kwenye) dharura(?: (?:na|kwa) (.+))?$/i.exec(t)) || (m = /^(?:tafadhali )?mruhusu (.+?) (?:aone|apate) eneo langu (?:wakati wa|katika) dharura$/i.exec(t))) return { action: "share", key: "emergencyLocation", who: everyone(m[1]), value: true, language: "sw" };
  if ((m = /^(?:acha kushiriki|acha kutuma|usishiriki|usitume) eneo langu (?:wakati wa|katika|kwenye) dharura(?: (?:na|kwa) (.+))?$/i.exec(t))) return { action: "share", key: "emergencyLocation", who: everyone(m[1]), value: false, language: "sw" };
  if (/^(?:je,? )?(?:ninashiriki|nashiriki) eneo langu wakati wa dharura$/.test(lower)) return { action: "list", language: "sw" };
  if (/^(?:nina mialiko|kuna mialiko|onyesha mialiko(?: yangu)?|je,? nina mialiko)$/.test(lower)) return { action: "invitations", language: "sw" };
  if ((m = /^(?:kubali|nakubali) mwaliko (?:kutoka kwa|kutoka|wa) (.+)$/i.exec(t))) return { action: "accept", who: clean(m[1]), language: "sw" };
  if ((m = /^(?:kataa|nakataa) mwaliko (?:kutoka kwa|kutoka|wa) (.+)$/i.exec(t))) return { action: "decline", who: clean(m[1]), language: "sw" };
  if ((m = /^(?:tafadhali )?(?:ondoka kwenye|acha|nitoke kwenye) mzunguko wa (.+)$/i.exec(t))) return { action: "leave", who: clean(m[1]), language: "sw" };
  if (/^ninawaangalia nani$/.test(lower)) return { action: "looking-out", language: "sw" };
  return null;
}

// Which of a person's links a spoken name means: exact, else first-name or word match. { link } | { ambiguous } | null
function pickLink(links, name) {
  const wanted = clean(name).toLowerCase().replace(/^(?:my )?/, "");
  if (!wanted) return null;
  const words = value => clean(value).toLowerCase().split(" ");
  const exact = links.filter(link => clean(link.otherName).toLowerCase() === wanted);
  if (exact.length === 1) return { link: exact[0] };
  const loose = links.filter(link => words(link.otherName).includes(wanted) || wanted.split(" ").every(word => words(link.otherName).includes(word)) || clean(link.relationship).toLowerCase() === wanted);
  if (loose.length === 1) return { link: loose[0] };
  return loose.length > 1 ? { ambiguous: loose } : null;
}
const first = name => clean(name).split(" ")[0] || "them";

// Returns the words to answer with, or null when the text is not about the circle. `push(userId, title, body, key)` sends a notification
// to another person (failures are swallowed: a circle change never fails because a push could not be queued).
// Languages: English and Kiswahili. The person is answered in the language they spoke, else the app's; a message to ANOTHER person's phone goes in both
// (that person's language is not known here). Check-in and medication sharing are English only for now.
async function circleTurn({ text, circle, memory, push, tenantId, userId, userName, locale = "en" }) {
  if (!circle?.listFor) return null;
  const request = readCircleRequest(text);
  if (!request) return null;
  const language = request.language === "sw" ? "sw" : languageOf(locale);
  const say = (key, params) => t(language, key, params);
  const nameList = links => links.map(link => link.otherName).join(say("circle.or"));
  const inLanguages = language === "en" ? ["en"] : [language, "en"];
  const bilingual = (key, paramsFor = () => ({}), separator = "\n") => inLanguages.map(chosen => t(chosen, key, paramsFor(chosen))).join(separator);
  const notify = async (toUserId, title, body, key) => { try { await push?.(toUserId, title, body, key); } catch { /* the change itself already happened */ } };
  try {
    const links = await circle.listFor({ tenantId, userId });
    const mine = links.filter(link => link.role === "person");
    const asMember = links.filter(link => link.role === "member");
    switch (request.action) {
      case "invite": {
        let email = EMAIL.test(request.who) ? request.who : "";
        if (!email) {
          const contacts = memory?.listContacts ? (await memory.listContacts({ tenantId, userId })).map(row => row.content) : [];
          const found = resolveContact(contacts, request.who);
          if (found?.ambiguous) return say("circle.which", { names: found.ambiguous.map(contact => contact.name).join(say("circle.or")) });
          if (!found?.contact) return say("circle.needEmail", { who: clean(request.who) });
          if (!found.contact.email) return say("circle.noEmail", { name: found.contact.name });
          email = found.contact.email;
        }
        const person = { id: userId, name: userName || say("circle.someone") };
        const found = await circle.findUserByEmail({ tenantId, email });
        const generic = say("circle.invited", { who: clean(request.who) });
        if (!found) return generic;
        const result = await circle.invite({ tenantId, person, member: found, relationship: request.relationship });
        if (result.refused === "self") return say("circle.self");
        if (result.refused === "duplicate") return say("circle.duplicate", { name: found.name });
        if (result.refused === "full") return say("circle.full");
        if (result.refused === "member_full" || result.refused === "declined_recently") return generic; // deliberately says nothing new: no probing, no pestering
        await notify(found.id, bilingual("circle.inviteTitle", () => ({}), " / "), bilingual("circle.inviteBody", chosen => ({ name: person.name, as: request.relationship ? t(chosen, "circle.inviteAs", { relationship: request.relationship }) : "", first: first(person.name) })), `circle-invite:${result.link.linkId}`);
        return generic;
      }
      case "list": {
        if (!mine.length) return say("circle.empty");
        const told = link => [link.shares?.checkins ? say("circle.told.checkins") : "", link.shares?.medications ? say("circle.told.medications") : "", link.shares?.emergencyLocation ? say("circle.told.location") : ""].filter(Boolean).join(say("circle.or"));
        const line = link => `${link.otherName}${link.relationship ? ` (${link.relationship})` : ""} — ${link.status === "invited" ? say("circle.state.waiting") : told(link) ? say("circle.state.told", { items: told(link) }) : say("circle.state.none")}`;
        const active = mine.filter(link => link.status === "active");
        const hint = active.length && !active.some(link => link.shares?.emergencyLocation) ? say("circle.hint") : "";
        return say("circle.list", { lines: mine.map(line).join("; "), hint });
      }
      case "remove": {
        const picked = pickLink(mine, request.who);
        if (picked?.ambiguous) return say("circle.which", { names: nameList(picked.ambiguous) });
        if (!picked) return say("circle.removeMissing", { who: clean(request.who) });
        await circle.end({ tenantId, userId, linkId: picked.link.linkId });
        await notify(picked.link.otherId, bilingual("circle.updateTitle", () => ({}), " / "), bilingual("circle.removedBody", chosen => ({ name: userName || t(chosen, "circle.someone") })), `circle-end:${picked.link.linkId}`);
        return say("circle.removeDone", { name: picked.link.otherName });
      }
      case "share": {
        const active = mine.filter(link => link.status === "active");
        if (request.key === "emergencyLocation" && !request.who) {
          if (!active.length) return say("circle.locationNobody");
          for (const link of active) await circle.setShare({ tenantId, personId: userId, linkId: link.linkId, key: "emergencyLocation", value: request.value });
          const names = active.map(link => link.otherName).join(", ");
          return say(request.value ? "circle.locationOnAll" : "circle.locationOffAll", { names });
        }
        const picked = pickLink(active, request.who);
        if (picked?.ambiguous) return say("circle.which", { names: nameList(picked.ambiguous) });
        if (!picked) return mine.some(link => pickLink([link], request.who)) ? say("circle.notYet", { who: clean(request.who) }) : say("circle.removeMissing", { who: clean(request.who) });
        const key = request.key || "checkins";
        await circle.setShare({ tenantId, personId: userId, linkId: picked.link.linkId, key, value: request.value });
        const who = first(picked.link.otherName);
        if (key === "emergencyLocation") return say(request.value ? "circle.locationOn" : "circle.locationOff", { name: picked.link.otherName, first: who });
        if (key === "medications") {
          return request.value
            ? `Done. If a dose you asked me to remind you about goes unconfirmed for two hours, I may tell ${picked.link.otherName} that a dose is waiting. They will not be told which medicine, and never the doses. Say "stop sharing my medication reminders with ${who}" to undo.`
            : `Done. ${picked.link.otherName} will not be told about your doses. Emergency alerts still reach everyone in your circle; say "remove ${who} from my circle" if you don't want that either.`;
        }
        return request.value
          ? `Done. If you miss a check-in, or you ask me to, I may tell ${picked.link.otherName}. They will not see your answers. Say "stop sharing my check-ins with ${who}" to undo.`
          : `Done. ${picked.link.otherName} will not be told about your check-ins. Emergency alerts still reach everyone in your circle; say "remove ${who} from my circle" if you don't want that either.`;
      }
      case "invitations": {
        const waiting = asMember.filter(link => link.status === "invited");
        if (!waiting.length) return say("circle.noInvitations");
        return say("circle.waiting", { items: waiting.map(link => `${link.otherName}${link.relationship ? say("circle.waitingAs", { relationship: link.relationship }) : ""}`).join("; "), first: first(waiting[0].otherName) });
      }
      case "accept": case "decline": {
        const waiting = asMember.filter(link => link.status === "invited");
        const picked = pickLink(waiting, request.who);
        if (picked?.ambiguous) return say("circle.which", { names: nameList(picked.ambiguous) });
        if (!picked) return say("circle.noInvitationFrom", { who: clean(request.who) });
        const accept = request.action === "accept";
        await circle.respond({ tenantId, memberId: userId, linkId: picked.link.linkId, accept });
        await notify(picked.link.otherId, bilingual(accept ? "circle.updateTitle" : "circle.inviteTitle", () => ({}), " / "), bilingual(accept ? "circle.answerYes" : "circle.answerNo", chosen => ({ name: userName || t(chosen, "circle.they") })), `circle-answer:${picked.link.linkId}`);
        return accept
          ? say("circle.acceptDone", { name: picked.link.otherName, first: first(picked.link.otherName) })
          : say("circle.declineDone", { name: picked.link.otherName });
      }
      case "leave": {
        const active = asMember.filter(link => link.status === "active");
        const picked = pickLink(active, request.who);
        if (picked?.ambiguous) return say("circle.which", { names: nameList(picked.ambiguous) });
        if (!picked) return say("circle.leaveMissing", { who: clean(request.who) });
        await circle.end({ tenantId, userId, linkId: picked.link.linkId });
        await notify(picked.link.otherId, bilingual("circle.updateTitle", () => ({}), " / "), bilingual("circle.leftBody", chosen => ({ name: userName || t(chosen, "circle.someone") })), `circle-end:${picked.link.linkId}`);
        return say("circle.leaveDone", { name: picked.link.otherName });
      }
      case "looking-out": {
        const active = asMember.filter(link => link.status === "active");
        return active.length ? say("circle.lookingOut", { names: active.map(link => link.otherName).join(", ") }) : say("circle.lookingOutNone");
      }
      default: return null;
    }
  } catch { return null; }
}

module.exports = Object.freeze({ circleTurn, readCircleRequest, readCircleRequestSw, pickLink });
