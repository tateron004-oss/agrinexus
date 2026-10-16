"use strict";

// Three-way merge for the saved state (the one big document every request reads, changes and writes back whole).
//
// The problem it answers: two requests read the same state, each changes its own copy, and the one that saves last used to
// replace the other's save entirely, with no error to anyone (10 requests at once kept 5 records). Now a save that finds the state
// has changed since it was read is merged with the newer state: `base` is what the request read, `mine` is what it wants to save,
// `latest` is what is stored now. Whatever each side changed since `base` is kept.
//
// Rules, all chosen so that a merge never loses the person's data and never brings back something that was deleted:
//   - a part only one side changed takes that side's version;
//   - objects are merged key by key; a key that either side deleted stays deleted (an erasure is never undone by a concurrent save);
//   - lists of records that have an id are merged by id, so two requests each adding a record both keep theirs, and two changes to
//     different fields of one record both stay; other lists are merged as sets of whole values (what I removed is removed, what I
//     added is added, what the other side added stays), in the other side's order with mine appended;
//   - a single value both sides changed differently (a number, a piece of text) takes mine: the last save wins, as it always did.
// Counters changed by both sides are such a value: this does not add the two increments together.

const RECORD_ID_KEYS = ["id"];

function isObject(value) { return value !== null && typeof value === "object" && !Array.isArray(value); }

function same(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b || a === null || b === null || typeof a !== "object") return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (Array.isArray(a)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i += 1) if (!same(a[i], b[i])) return false;
    return true;
  }
  const keysA = Object.keys(a); const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) if (!Object.prototype.hasOwnProperty.call(b, key) || !same(a[key], b[key])) return false;
  return true;
}

function recordKey(list) {
  if (!list.length) return null;
  for (const key of RECORD_ID_KEYS) {
    const seen = new Set();
    let ok = true;
    for (const item of list) {
      if (!isObject(item) || (typeof item[key] !== "string" && typeof item[key] !== "number") || seen.has(item[key])) { ok = false; break; }
      seen.add(item[key]);
    }
    if (ok) return key;
  }
  return null;
}

function mergeById(key, base, mine, latest) {
  const index = list => new Map(list.map(item => [item[key], item]));
  const baseById = index(base); const mineById = index(mine); const latestById = index(latest);
  const result = [];
  const used = new Set();
  for (const item of latest) {
    const id = item[key];
    const inBase = baseById.has(id); const inMine = mineById.has(id);
    if (inBase && !inMine) continue; // I deleted it
    used.add(id);
    result.push(inMine ? mergeValue(baseById.get(id), mineById.get(id), item) : item);
  }
  for (const item of mine) {
    const id = item[key];
    if (used.has(id)) continue;
    if (baseById.has(id) && !latestById.has(id)) continue; // the other side deleted it: it stays deleted
    result.push(item);
  }
  return result;
}

function counts(list) {
  const map = new Map();
  for (const item of list) { const k = JSON.stringify(item); const entry = map.get(k); if (entry) entry.n += 1; else map.set(k, { item, n: 1 }); }
  return map;
}

function mergeAsSets(base, mine, latest) {
  const baseCounts = counts(base); const mineCounts = counts(mine);
  const removed = new Map(); const added = [];
  for (const [k, entry] of baseCounts) { const left = (mineCounts.get(k)?.n || 0); if (left < entry.n) removed.set(k, entry.n - left); }
  const baseLeft = new Map([...baseCounts].map(([k, entry]) => [k, entry.n]));
  for (const [k, entry] of mineCounts) { const extra = entry.n - (baseLeft.get(k) || 0); for (let i = 0; i < extra; i += 1) added.push(entry.item); }
  const result = [];
  for (const item of latest) {
    const k = JSON.stringify(item); const toRemove = removed.get(k) || 0;
    if (toRemove > 0) { removed.set(k, toRemove - 1); continue; }
    result.push(item);
  }
  return result.concat(added);
}

function mergeObjects(base, mine, latest) {
  const result = {};
  const keys = new Set([...Object.keys(latest), ...Object.keys(mine)]);
  for (const key of keys) {
    const inBase = Object.prototype.hasOwnProperty.call(base, key);
    const inMine = Object.prototype.hasOwnProperty.call(mine, key);
    const inLatest = Object.prototype.hasOwnProperty.call(latest, key);
    if (inBase && (!inMine || !inLatest)) continue; // deleted by either side: deleted
    if (inMine && inLatest) result[key] = mergeValue(inBase ? base[key] : undefined, mine[key], latest[key]);
    else result[key] = inMine ? mine[key] : latest[key];
  }
  return result;
}

function mergeValue(base, mine, latest) {
  if (same(mine, latest)) return mine;
  if (base !== undefined && same(mine, base)) return latest; // I did not change this part
  if (base !== undefined && same(latest, base)) return mine; // nobody else changed it
  if (isObject(mine) && isObject(latest)) return mergeObjects(isObject(base) ? base : {}, mine, latest);
  if (Array.isArray(mine) && Array.isArray(latest)) {
    const baseList = Array.isArray(base) ? base : [];
    const key = recordKey(mine.length ? mine : latest);
    if (key && recordKey(latest) === key && recordKey(baseList.length ? baseList : mine) === key) return mergeById(key, baseList, mine, latest);
    return mergeAsSets(baseList, mine, latest);
  }
  return mine;
}

function mergeStates(base, mine, latest) {
  return mergeValue(base, mine, latest);
}

module.exports = { mergeStates, same };
