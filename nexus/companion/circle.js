"use strict";

const { resolveContact } = require("../memory/contacts.js");

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
const nameList = links => links.map(link => link.otherName).join(" or ");
const first = name => clean(name).split(" ")[0] || "them";

// Returns the words to answer with, or null when the text is not about the circle. `push(userId, title, body, key)` sends a notification
// to another person (failures are swallowed: a circle change never fails because a push could not be queued).
async function circleTurn({ text, circle, memory, push, tenantId, userId, userName }) {
  if (!circle?.listFor) return null;
  const request = readCircleRequest(text);
  if (!request) return null;
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
          if (found?.ambiguous) return `Which one: ${found.ambiguous.map(contact => contact.name).join(" or ")}?`;
          if (!found?.contact) return `I need their email address to invite them. Say "add name@example.com to my circle", or save it first: "save ${clean(request.who)}'s email as name@example.com".`;
          if (!found.contact.email) return `I don't have an email for ${found.contact.name}. Say "save ${found.contact.name}'s email as name@example.com" first.`;
          email = found.contact.email;
        }
        const person = { id: userId, name: userName || "Someone" };
        const found = await circle.findUserByEmail({ tenantId, email });
        const generic = `If ${clean(request.who)} has a Kyro account in your community, I've sent them your invitation. They choose whether to say yes, and you will hear back here. Nobody in your circle is told anything about you until you say so.`;
        if (!found) return generic;
        const result = await circle.invite({ tenantId, person, member: found, relationship: request.relationship });
        if (result.refused === "self") return "That's you. Your circle is for other people.";
        if (result.refused === "duplicate") return `${found.name} is already in your circle, or has an invitation waiting.`;
        if (result.refused === "full") return "Your circle is full (eight people). Remove someone first if you want to add another.";
        if (result.refused === "member_full" || result.refused === "declined_recently") return generic; // deliberately says nothing new: no probing, no pestering
        await notify(found.id, "Circle invitation", `${person.name} would like you in their trusted circle${request.relationship ? ` as their ${request.relationship}` : ""}. Say "accept the invitation from ${first(person.name)}" in Kyro, or "decline" if you'd rather not.`, `circle-invite:${result.link.linkId}`);
        return generic;
      }
      case "list": {
        if (!mine.length) return 'Your circle is empty. Say "add name@example.com to my circle" to invite someone you trust.';
        const told = link => [link.shares?.checkins ? "if you miss a check-in" : "", link.shares?.medications ? "if a dose goes unconfirmed" : "", link.shares?.emergencyLocation ? "your location if you ask for urgent help" : ""].filter(Boolean).join(" or ");
        const line = link => `${link.otherName}${link.relationship ? ` (${link.relationship})` : ""} — ${link.status === "invited" ? "invitation waiting" : told(link) ? `may be told ${told(link)}` : "told nothing except an emergency"}`;
        const active = mine.filter(link => link.status === "active");
        const hint = active.length && !active.some(link => link.shares?.emergencyLocation) ? ' If you want them to be able to find you in an emergency, say "share my location in emergencies".' : "";
        return `Your circle: ${mine.map(line).join("; ")}.${hint}`;
      }
      case "remove": {
        const picked = pickLink(mine, request.who);
        if (picked?.ambiguous) return `Which one: ${nameList(picked.ambiguous)}?`;
        if (!picked) return `I don't see ${clean(request.who)} in your circle.`;
        await circle.end({ tenantId, userId, linkId: picked.link.linkId });
        await notify(picked.link.otherId, "Circle update", `${userName || "Someone"} has taken you out of their trusted circle.`, `circle-end:${picked.link.linkId}`);
        return `Done. ${picked.link.otherName} is out of your circle and will no longer be told anything.`;
      }
      case "share": {
        const active = mine.filter(link => link.status === "active");
        if (request.key === "emergencyLocation" && !request.who) {
          if (!active.length) return "Nobody in your circle has said yes to your invitation yet, so there is nobody to share with. Once someone has, say this again.";
          for (const link of active) await circle.setShare({ tenantId, personId: userId, linkId: link.linkId, key: "emergencyLocation", value: request.value });
          const names = active.map(link => link.otherName).join(", ");
          return request.value
            ? `Done. If you ask me for urgent help, I'll also send your location to ${names}, as soon as your phone tells me where you are, and keep it updated for a while. Only then, never otherwise. Say "stop sharing my location in emergencies" any time.`
            : `Done. ${names} will not be sent your location in an emergency. Alerts still reach everyone in your circle.`;
        }
        const picked = pickLink(active, request.who);
        if (picked?.ambiguous) return `Which one: ${nameList(picked.ambiguous)}?`;
        if (!picked) return mine.some(link => pickLink([link], request.who)) ? `${clean(request.who)} hasn't said yes to your invitation yet.` : `I don't see ${clean(request.who)} in your circle.`;
        const key = request.key || "checkins";
        await circle.setShare({ tenantId, personId: userId, linkId: picked.link.linkId, key, value: request.value });
        const who = first(picked.link.otherName);
        if (key === "emergencyLocation") {
          return request.value
            ? `Done. If you ask me for urgent help, I'll also send your location to ${picked.link.otherName}, as soon as your phone tells me where you are, and keep it updated for a while. Only then, never otherwise. Say "stop sharing my location in emergencies with ${who}" to undo.`
            : `Done. ${picked.link.otherName} will not be sent your location in an emergency. Alerts still reach everyone in your circle; say "remove ${who} from my circle" if you don't want that either.`;
        }
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
        if (!waiting.length) return "You have no circle invitations waiting.";
        return `Waiting for your answer: ${waiting.map(link => `${link.otherName}${link.relationship ? ` (you as their ${link.relationship})` : ""}`).join("; ")}. Say "accept the invitation from ${first(waiting[0].otherName)}" or "decline the invitation from ${first(waiting[0].otherName)}".`;
      }
      case "accept": case "decline": {
        const waiting = asMember.filter(link => link.status === "invited");
        const picked = pickLink(waiting, request.who);
        if (picked?.ambiguous) return `Which one: ${nameList(picked.ambiguous)}?`;
        if (!picked) return `I don't see an invitation from ${clean(request.who)}.`;
        const accept = request.action === "accept";
        await circle.respond({ tenantId, memberId: userId, linkId: picked.link.linkId, accept });
        await notify(picked.link.otherId, accept ? "Circle update" : "Circle invitation", accept ? `${userName || "They"} said yes and is now in your trusted circle.` : `${userName || "They"} isn't able to join your circle right now.`, `circle-answer:${picked.link.linkId}`);
        return accept
          ? `Thank you. You're now in ${picked.link.otherName}'s circle. You'll only hear from Kyro about them in an emergency, or if they choose to share more. You can leave any time: "leave ${first(picked.link.otherName)}'s circle".`
          : `Okay. I've told ${picked.link.otherName} you're not able to right now.`;
      }
      case "leave": {
        const active = asMember.filter(link => link.status === "active");
        const picked = pickLink(active, request.who);
        if (picked?.ambiguous) return `Which one: ${nameList(picked.ambiguous)}?`;
        if (!picked) return `You're not in ${clean(request.who)}'s circle.`;
        await circle.end({ tenantId, userId, linkId: picked.link.linkId });
        await notify(picked.link.otherId, "Circle update", `${userName || "Someone"} has left your trusted circle.`, `circle-end:${picked.link.linkId}`);
        return `Done. You've left ${picked.link.otherName}'s circle.`;
      }
      case "looking-out": {
        const active = asMember.filter(link => link.status === "active");
        return active.length ? `You look out for ${active.map(link => link.otherName).join(", ")}.` : "You're not in anyone's circle right now.";
      }
      default: return null;
    }
  } catch { return null; }
}

module.exports = Object.freeze({ circleTurn, readCircleRequest, pickLink });
