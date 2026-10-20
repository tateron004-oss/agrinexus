"use strict";

const { readMemoryBookRequest, MAX_ENTRY } = require("../../public/kyro-memory-book.js");
const { pickLink } = require("./circle.js");

// The memory book: short true memories that a person, or someone in their trusted circle whom THEY allowed, writes down; Kyro reads them back exactly as they were written. It was asked for by the owner for older people,
// including those living with dementia, as a calm place that holds their own life.
//
// The rules this file keeps (each is tested):
//  - Kyro reads ONLY what was written. It never makes up, adds to, shortens, "improves" or corrects a memory, because an invented memory told to a person with dementia is harm.
//  - Kyro never quizzes ("do you remember?") and never corrects. It reads the memory and says who wrote it.
//  - The book belongs to the person. Someone else can add to it only if the person said so ("let Grace add to my memory book"), through the trusted circle they invited and who said yes; the person can stop that at any time, and
//    leaving or ending the circle ends it. Only the person can read the book through Kyro; a family member can add, and can remove what they themselves wrote.
//  - Every memory says who wrote it, when it is read and in the list, so the person can see where each one came from and remove any of them.
//  - It is not treatment, and Kyro says so: it is a place to keep and hear one's own life.
//
// createMemoryBookService({ store, circle, pick }) -> { turn({ text, tenantId, userId, userName }) -> words | null }
const MAX_ENTRIES = 200;
const MAX_LIST = 20;
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();
const first = name => clean(name).split(" ")[0] || "them";
// "mom", "dad", "grandma"... are how a family member refers to the person; the circle knows the person by name. If the member can add to exactly one book, that is the one meant.
const FAMILY_WORDS = /^(?:mom|mum|mama|mother|dad|daddy|papa|father|grandma|grandmother|gran|granny|nana|grandpa|grandfather|grandad|aunt|auntie|uncle|my (?:mom|mum|mother|dad|father|grandma|grandmother|grandpa|grandfather))$/i;
const titleOf = text => { const sentence = clean(text).split(/(?<=[.!?])\s/)[0]; return sentence.length > 70 ? `${sentence.slice(0, 67).trimEnd()}...` : sentence; };
const relation = value => clean(value).replace(/^(?:my|his|her|their)\s+/i, "");

function createMemoryBookService({ store, circle, pick = Math.random }) {
  const lastRead = new Map();
  const remember = (userId, memoryId) => { if (lastRead.size > 1000) lastRead.clear(); lastRead.set(userId, memoryId); };

  const written = entry => entry.source === "family" && entry.addedByName
    ? `${entry.addedByName}${entry.relationship ? `, your ${relation(entry.relationship)},` : ""} wrote this for you:`
    : "You wrote this:";
  const readOut = entry => `${written(entry)}\n\n${entry.text}`;

  async function turn({ text, tenantId, userId, userName }) {
    const request = readMemoryBookRequest(text);
    if (!request || !store?.list) return null;
    const mine = { tenantId, userId };
    try {
      switch (request.action) {
        case "add": return await add({ request, tenantId, userId, userName });
        case "read": {
          const entries = await store.list(mine);
          if (!entries.length) return emptyBook();
          const others = entries.length > 1 ? entries.filter(entry => entry.memoryId !== lastRead.get(userId)) : entries;
          const chosen = others[Math.min(Math.floor(pick() * others.length), others.length - 1)];
          remember(userId, chosen.memoryId);
          return `${readOut(chosen)}\n\nSay "another memory" to hear one more.`;
        }
        case "read-about": {
          const entries = await store.list(mine);
          if (!entries.length) return emptyBook();
          const found = match(entries, request.about);
          if (!found.length) return `I could not find a memory about "${request.about}" in your memory book. Say "what is in my memory book" to hear what is there.`;
          if (found.length > 1) return `I found ${found.length} memories about that: ${found.slice(0, 6).map(entry => `"${entry.title}"`).join("; ")}. Say "read me the memory about" and a few more words.`;
          remember(userId, found[0].memoryId);
          return readOut(found[0]);
        }
        case "list": {
          const entries = await store.list(mine);
          if (!entries.length) return emptyBook();
          const shown = entries.slice(0, MAX_LIST).map((entry, index) => `${index + 1}. ${entry.title}${entry.source === "family" && entry.addedByName ? ` (from ${first(entry.addedByName)})` : ""}`).join("\n");
          return `Your memory book has ${entries.length} ${entries.length === 1 ? "memory" : "memories"}:\n${shown}${entries.length > MAX_LIST ? `\nand ${entries.length - MAX_LIST} more.` : ""}\n\nSay "tell me a memory" to hear one, or "remove the memory about" and a few words to take one out.`;
        }
        case "remove": return await remove({ request, tenantId, userId });
        case "allow": case "disallow": return await allow({ request, tenantId, userId });
        case "allowed": {
          const links = (await circle.listFor(mine)).filter(link => link.role === "person" && link.status === "active" && link.shares?.memoryBook);
          return links.length
            ? `${links.map(link => link.otherName).join(", ")} can add to your memory book. Say "stop letting ${first(links[0].otherName)} add to my memory book" if you want that to end.`
            : 'Nobody can add to your memory book except you. To let someone in your trusted circle add memories, say "let" and their name, then "add to my memory book".';
        }
        case "help": return help();
        default: return null;
      }
    } catch { return null; }
  }

  async function add({ request, tenantId, userId, userName }) {
    let ownerId = userId; let source = "self"; let relationship = ""; let ownerName = "";
    if (request.who) {
      const links = (await circle.listFor({ tenantId, userId })).filter(link => link.role === "member" && link.status === "active");
      const can = links.filter(link => link.shares?.memoryBook);
      const picked = FAMILY_WORDS.test(clean(request.who)) && can.length === 1 ? { link: can[0] } : pickLink(links, request.who);
      if (picked?.ambiguous) return `Which one: ${picked.ambiguous.map(link => link.otherName).join(" or ")}? Say their name.`;
      if (!picked) return `I could not find ${clean(request.who)} among the people you look out for. They need to invite you to their trusted circle and you need to say yes first.`;
      if (!picked.link.shares?.memoryBook) return `${picked.link.otherName} has not allowed you to add to their memory book yet. They can say "let ${first(userName) === "them" ? "them" : first(userName)} add to my memory book", or you can ask them to.`;
      ownerId = picked.link.otherId; ownerName = picked.link.otherName; source = "family"; relationship = picked.link.relationship || "";
    }
    if (!request.text) return request.who
      ? `What would you like to add to ${first(ownerName || request.who)}'s memory book? Say: add to ${clean(request.who)}'s memory book, and then the memory.`
      : 'What would you like to add? Say: add to my memory book, and then the memory, for example: add to my memory book: I grew up by the lake with my four sisters.';
    if (request.text.length > MAX_ENTRY) return `That is too long for one memory (the limit is ${MAX_ENTRY} characters). Please split it into shorter memories and add them one at a time. Nothing was saved.`;
    if (clean(request.text).length < 8) return "That is very short. Please write a little more so the memory makes sense when it is read back. Nothing was saved.";
    // The writer's own words, kept as written (only spaces and line breaks are tidied).
    const text = String(request.text).replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
    const saved = await store.addUnlessCapped({ tenantId, userId: ownerId, maxEntries: MAX_ENTRIES,
      content: { title: titleOf(text), text, addedById: userId, addedByName: clean(userName), relationship: clean(relationship), source } });
    if (saved.capped) return `The memory book is full (${MAX_ENTRIES} memories). Remove one you no longer want before adding another.`;
    if (saved.duplicate) return "That memory is already in the book. Nothing new was added.";
    return source === "family"
      ? `Saved to ${ownerName}'s memory book, with your name on it. Tip: write it as if you are speaking to them, for example: "You grew up by the lake." They can hear it by asking me for a memory, and they can remove it at any time.`
      : 'Saved to your memory book. Say "tell me a memory" any time to hear one.';
  }

  async function remove({ request, tenantId, userId }) {
    let ownerId = userId; let onlyOwn = false; let ownerName = "";
    if (request.who) {
      const links = (await circle.listFor({ tenantId, userId })).filter(link => link.role === "member" && link.status === "active");
      const can = links.filter(link => link.shares?.memoryBook);
      const picked = FAMILY_WORDS.test(clean(request.who)) && can.length === 1 ? { link: can[0] } : pickLink(links, request.who);
      if (picked?.ambiguous) return `Which one: ${picked.ambiguous.map(link => link.otherName).join(" or ")}? Say their name.`;
      if (!picked) return `I could not find ${clean(request.who)} among the people you look out for.`;
      ownerId = picked.link.otherId; ownerName = picked.link.otherName; onlyOwn = true;
    }
    const all = await store.list({ tenantId, userId: ownerId });
    // A family member can take out only what they wrote themselves; the person can take out anything.
    const entries = onlyOwn ? all.filter(entry => entry.addedById === userId) : all;
    const found = match(entries, request.about);
    if (!found.length) return onlyOwn ? `I could not find a memory about "${request.about}" that you added to ${first(ownerName)}'s memory book.` : `I could not find a memory about "${request.about}" in your memory book. Say "what is in my memory book" to see what is there.`;
    if (found.length > 1) return `More than one memory fits: ${found.slice(0, 6).map(entry => `"${entry.title}"`).join("; ")}. Say "remove the memory about" and a few more words from the one you mean. Nothing was removed.`;
    await store.remove({ tenantId, userId: ownerId, memoryId: found[0].memoryId });
    return `Removed the memory "${found[0].title}"${onlyOwn ? ` from ${first(ownerName)}'s memory book` : " from your memory book"}.`;
  }

  async function allow({ request, tenantId, userId }) {
    const links = (await circle.listFor({ tenantId, userId })).filter(link => link.role === "person" && link.status === "active");
    const picked = pickLink(links, request.who);
    if (picked?.ambiguous) return `Which one: ${picked.ambiguous.map(link => link.otherName).join(" or ")}? Say their name.`;
    if (!picked) return `${clean(request.who)} is not in your trusted circle yet. Invite them first ("add" their email "to my circle"); they need to say yes. Then I can let them add memories.`;
    const value = request.action === "allow";
    await circle.setShare({ tenantId, personId: userId, linkId: picked.link.linkId, key: "memoryBook", value });
    return value
      ? `Done. ${picked.link.otherName} can now add memories to your memory book, with their name on each one. They cannot read your book through me, and you can remove any memory. Say "stop letting ${first(picked.link.otherName)} add to my memory book" to undo this.`
      : `Done. ${picked.link.otherName} can no longer add to your memory book. What they already added stays unless you remove it.`;
  }

  function match(entries, about) {
    const words = clean(about).toLowerCase().replace(/^(?:my|the|our|a)\s+/g, "").split(" ").filter(word => word.length > 1 && !/^(?:the|a|an|of|my|our|about)$/.test(word));
    if (!words.length) return [];
    const hay = entry => `${entry.title} ${entry.text}`.toLowerCase();
    const strong = entries.filter(entry => words.every(word => hay(entry).includes(word)));
    return strong;
  }

  function emptyBook() {
    return 'Your memory book is empty for now. You can add a memory yourself: say "add to my memory book" and then the memory. Or you can let someone in your trusted circle add them: say "let" and their name, then "add to my memory book".';
  }

  function help() {
    return 'A memory book is a place for your own life: short, true memories that you, or someone in your trusted circle whom you choose, write down. Then you can say "tell me a memory" and I read one back exactly as it was written, and tell you who wrote it. I never make a memory up, and I never test you on them. You can say "add to my memory book" and then a memory, "what is in my memory book", "remove the memory about" and a few words, or "let" a name "add to my memory book". It is a comfort and a way to keep your stories; it is not a treatment, and it does not replace the people who care for you.';
  }

  return Object.freeze({ turn });
}

module.exports = Object.freeze({ createMemoryBookService, MAX_ENTRIES });
