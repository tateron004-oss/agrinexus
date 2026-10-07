"use strict";

// Test helpers for the farm toolkit: an in-memory store with the contract of FarmRecordRepository, and an in-memory stand-in for the parts of
// MemoryRepository the toolkit uses (personal calendar items, the farm log, profile facts, contacts). Not a test file itself.
const { PUBLIC_COLLECTIONS } = require("../../nexus/farmwork/store.js");

// One clock for every fake store: each stamp is later than the one before it, so "the most recent entry" is well defined even when two things are saved in the same millisecond.
let lastStamp = 0;
const stamp = () => { lastStamp = Math.max(lastStamp + 1, Date.now()); return new Date(lastStamp).toISOString(); };

function fakeFarmStore() {
  const rows = []; let n = 0; const sessions = new Map();
  const live = () => rows.filter(row => !row.deleted);
  const numberFor = (tenantId, userId, collection) => Math.max(0, ...rows.filter(row => row.tenantId === tenantId && row.collection === collection && (PUBLIC_COLLECTIONS.includes(collection) || row.userId === userId)).map(row => row.number)) + 1;
  const shape = row => ({ memoryId: row.memoryId, userId: row.userId, number: row.number, collection: row.collection, data: JSON.parse(JSON.stringify(row.data)), createdAt: row.createdAt, updatedAt: row.updatedAt });
  return {
    rows, sessions,
    async add({ tenantId, userId, collection, data }) { const row = { memoryId: `f${++n}`, tenantId, userId, collection, number: numberFor(tenantId, userId, collection), data: JSON.parse(JSON.stringify(data)), createdAt: stamp(), updatedAt: stamp() }; rows.unshift(row); return shape(row); },
    // No `await` between the count check and the insert, so -- like the real store's advisory-lock-guarded
    // transaction -- this is atomic from the caller's point of view.
    async addUnlessPersonCapped({ tenantId, userId, collection, data, maxPerPerson }) {
      const count = live().filter(row => row.tenantId === tenantId && row.userId === userId && row.collection === collection && row.data.status === "active").length;
      if (count >= maxPerPerson) return { capped: true, count };
      const row = { memoryId: `f${++n}`, tenantId, userId, collection, number: numberFor(tenantId, userId, collection), data: JSON.parse(JSON.stringify(data)), createdAt: stamp(), updatedAt: stamp() };
      rows.unshift(row);
      return { record: shape(row) };
    },
    // No `await` between the clash check and the insert, so -- like the real store's advisory-lock-guarded
    // transaction -- this is atomic from the caller's point of view: two concurrent calls can never both
    // read "no clash" before either has written, closing the same race the real repository closes.
    async addUnlessClash({ tenantId, userId, collection, data, findClash }) {
      const existing = live().filter(row => row.tenantId === tenantId && row.userId === userId && row.collection === collection).map(shape);
      const clash = findClash(existing);
      if (clash) return { clash };
      const row = { memoryId: `f${++n}`, tenantId, userId, collection, number: numberFor(tenantId, userId, collection), data: JSON.parse(JSON.stringify(data)), createdAt: stamp(), updatedAt: stamp() };
      rows.unshift(row);
      return { record: shape(row) };
    },
    async list({ tenantId, userId, collection }) { return live().filter(row => row.tenantId === tenantId && row.userId === userId && row.collection === collection).map(shape); },
    async listAll({ tenantId, userId }) { return live().filter(row => row.tenantId === tenantId && row.userId === userId).map(shape); },
    async listPublic({ tenantId, collection }) { return PUBLIC_COLLECTIONS.includes(collection) ? live().filter(row => row.tenantId === tenantId && row.collection === collection).map(shape) : []; },
    async update({ tenantId, userId, record, expectedStatus, casField, casValue, casArrayField, casArrayLength }) { const row = live().find(item => item.tenantId === tenantId && item.userId === userId && item.memoryId === record.memoryId); if (!row) return false; if (expectedStatus !== undefined && (row.data.status || "") !== expectedStatus) return false; if (casField !== undefined && Number(row.data[casField]) !== Number(casValue)) return false; if (casArrayField !== undefined && (row.data[casArrayField] || []).length !== casArrayLength) return false; row.data = JSON.parse(JSON.stringify(record.data)); row.updatedAt = new Date().toISOString(); return true; },
    async remove({ tenantId, userId, memoryId }) { const row = live().find(item => item.tenantId === tenantId && item.userId === userId && item.memoryId === memoryId); if (!row) return false; row.deleted = true; return true; },
    async getSession({ tenantId, userId }) { return sessions.get(`${tenantId}:${userId}`) || null; },
    async setSession({ tenantId, userId, session }) { sessions.set(`${tenantId}:${userId}`, { memoryId: "s", kind: "session", ...session }); },
    async clearSession({ tenantId, userId }) { sessions.delete(`${tenantId}:${userId}`); },
    // the health store's hard erase (see healthwork/store.js); `hold.active` stands in for a legal hold
    hold: { active: false },
    async activeHold() { return this.hold.active; },
    async countRemoved({ tenantId, userId }) { return rows.filter(row => row.deleted && row.tenantId === tenantId && row.userId === userId).length; },
    async purgeRemoved({ tenantId, userId }) { if (this.hold.active) return { blocked: true }; let purged = 0; for (let i = rows.length - 1; i >= 0; i -= 1) if (rows[i].deleted && rows[i].tenantId === tenantId && rows[i].userId === userId) { rows.splice(i, 1); purged += 1; } return { purged }; },
    async purgeAll({ tenantId, userId }) { if (this.hold.active) return { blocked: true }; let purged = sessions.delete(`${tenantId}:${userId}`) ? 1 : 0; for (let i = rows.length - 1; i >= 0; i -= 1) if (rows[i].tenantId === tenantId && rows[i].userId === userId && rows[i].collection !== "audit") { rows.splice(i, 1); purged += 1; } return { purged }; }
  };
}

function fakeMemory({ farmEntries = [] } = {}) {
  const personal = []; let n = 0; const profile = []; const contacts = []; const entries = farmEntries.map(content => ({ content, memory_id: `fe${++n}`, created_at: stamp() }));
  return {
    personal, profile, contacts,
    async addPersonalItem({ content }) { personal.unshift({ memory_id: `p${++n}`, content }); return { memoryId: `p${n}` }; },
    async listPersonalItems() { return personal.map(row => ({ memory_id: row.memory_id, content: row.content })); },
    // the farm log (nexus/farm/log.js): newest first, each with the time it was saved
    async listFarmEntries() { return entries.filter(row => !row.deleted).map(row => ({ memory_id: row.memory_id, content: row.content, created_at: row.created_at })); },
    async addFarmEntry({ content }) { const row = { memory_id: `fe${++n}`, content, created_at: stamp() }; entries.unshift(row); return { memoryId: row.memory_id, content }; },
    async addFarmEntryUnlessCapped({ content, maxEntries }) { if (entries.filter(row => !row.deleted).length >= maxEntries) return { capped: true }; const row = { memory_id: `fe${++n}`, content, created_at: stamp() }; entries.unshift(row); return { memoryId: row.memory_id, content }; },
    async removeFarmEntry({ memoryId }) { const row = entries.find(item => item.memory_id === memoryId && !item.deleted); if (row) row.deleted = true; return Boolean(row); },
    async saveProfileFact({ kind, value }) { profile.push({ kind, value }); return { fact: { kind, value }, replaced: [] }; },
    async saveContact({ name, phone = "", email = "" }) { const i = contacts.findIndex(item => item.name.toLowerCase() === name.toLowerCase()); const content = { kind: "contact", name, phone, email }; if (i >= 0) contacts[i] = { ...contacts[i], ...content, phone: phone || contacts[i].phone, email: email || contacts[i].email }; else contacts.push(content); return { contact: content, updated: i >= 0 }; },
    async listContacts() { return contacts.map(content => ({ content })); }
  };
}

module.exports = Object.freeze({ fakeFarmStore, fakeMemory, stamp });
