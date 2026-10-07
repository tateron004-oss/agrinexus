"use strict";

// PROOF STAGE ONLY (spike/business-spaces-proof): separate business spaces inside one Kyro.
//
// A business space is its own copy of the shared record (users, profile, phone-caller list, ...). The current record is the "default" space and does not move. Which space a request runs in is
// decided once, before the record is read (from the session, the remember-me cookie, the email being signed in, or the number that was dialled), and carried through the request with an
// AsyncLocalStorage store, so the ten places that read the record and the one function that saves it can pick the right copy without changing the 300-odd callers that pass the record along.
//
// The directory (which email, which phone number, belongs to which space) is a small JSON file here; in production it would be a database table next to agrinexus_app_state.
const fs = require("node:fs");
const path = require("node:path");
const { AsyncLocalStorage } = require("node:async_hooks");

const DEFAULT_SPACE = "default";
const store = new AsyncLocalStorage();

const validSpaceId = id => typeof id === "string" && /^[a-z0-9][a-z0-9-]{1,39}$/.test(id) && id !== DEFAULT_SPACE;
const currentSpace = () => store.getStore()?.space || DEFAULT_SPACE;
const runInSpace = (space, work) => store.run({ space: space || DEFAULT_SPACE }, work);
const enterSpace = space => store.enterWith({ space: space || DEFAULT_SPACE });

// Where a space's record lives next to the default one (file mode). Postgres mode uses the same id as the row key instead.
const spaceDbPath = (defaultPath, space) => (space === DEFAULT_SPACE ? defaultPath : path.join(path.dirname(defaultPath), `${path.basename(defaultPath, ".json")}.space-${space}.json`));

const emailKey = value => String(value ?? "").trim().toLowerCase();
const numberKey = value => String(value ?? "").replace(/[^\d+]/g, "");

function createDirectory(filePath) {
  const load = () => {
    try { return JSON.parse(fs.readFileSync(filePath, "utf8")); } catch { return { spaces: {}, emails: {}, numbers: {} }; }
  };
  const save = data => {
    const temp = `${filePath}.tmp-${process.pid}`;
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(temp, JSON.stringify(data, null, 2));
    fs.renameSync(temp, filePath);
  };
  return {
    hasSpace: id => Boolean(load().spaces[id]),
    // An email belongs to exactly one space; anything not listed is in the default space.
    spaceForEmail: email => { const id = load().emails[emailKey(email)]; return id && load().spaces[id] ? id : DEFAULT_SPACE; },
    // The number that was dialled. Not listed (or listed for a space that no longer exists) -> null, so the caller decides (today's single global number is the default space).
    spaceForNumber: number => { const data = load(); const id = data.numbers[numberKey(number)]; return id && data.spaces[id] ? id : null; },
    createSpace(id, { name = "" } = {}) {
      if (!validSpaceId(id)) throw new Error("A business id is 2 to 40 lowercase letters, digits or dashes.");
      const data = load();
      if (data.spaces[id]) throw new Error("That business already exists.");
      data.spaces[id] = { name: String(name).slice(0, 80), createdAt: new Date().toISOString() };
      save(data);
    },
    linkEmail(email, id) {
      const data = load();
      if (!data.spaces[id]) throw new Error("No such business.");
      const key = emailKey(email);
      if (data.emails[key] && data.emails[key] !== id) throw new Error("That email already belongs to another business.");
      data.emails[key] = id; save(data);
    },
    linkNumber(number, id) {
      const data = load();
      if (!data.spaces[id]) throw new Error("No such business.");
      const key = numberKey(number);
      if (data.numbers[key] && data.numbers[key] !== id) throw new Error("That phone number already belongs to another business.");
      data.numbers[key] = id; save(data);
    },
    list: () => Object.entries(load().spaces).map(([id, info]) => ({ id, ...info }))
  };
}

// A new space's record. Deliberately NOT a copy of the default record (that holds the demo accounts and demo data): only the reference lists the app needs, an empty profile (the app fills in its
// own defaults), and the one first account. No demo logins are ever added to a space (see api()).
function newSpaceRecord(template, { adminAccount }) {
  return {
    users: [adminAccount],
    countries: template.countries || [], routes: template.routes || [], courses: template.courses || [], roles: template.roles || [],
    products: template.products || [], providers: template.providers || [],
    profile: {}
  };
}

module.exports = Object.freeze({ DEFAULT_SPACE, validSpaceId, currentSpace, runInSpace, enterSpace, spaceDbPath, createDirectory, newSpaceRecord, emailKey, numberKey });
