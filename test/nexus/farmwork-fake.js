"use strict";

// Test helpers for the farm toolkit: an in-memory store with the contract of FarmRecordRepository, and an in-memory stand-in for the parts of
// MemoryRepository the toolkit uses (personal calendar items, the farm log, profile facts, contacts). Not a test file itself.
const { PUBLIC_COLLECTIONS } = require("../../nexus/farmwork/store.js");

function fakeFarmStore() {
  const rows = []; let n = 0; const sessions = new Map();
  const live = () => rows.filter(row => !row.deleted);
  const numberFor = (tenantId, userId, collection) => Math.max(0, ...rows.filter(row => row.tenantId === tenantId && row.collection === collection && (PUBLIC_COLLECTIONS.includes(collection) || row.userId === userId)).map(row => row.number)) + 1;
  const shape = row => ({ memoryId: row.memoryId, userId: row.userId, number: row.number, collection: row.collection, data: JSON.parse(JSON.stringify(row.data)), createdAt: row.createdAt, updatedAt: row.updatedAt });
  return {
    rows, sessions,
    async add({ tenantId, userId, collection, data }) { const row = { memoryId: `f${++n}`, tenantId, userId, collection, number: numberFor(tenantId, userId, collection), data: JSON.parse(JSON.stringify(data)), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }; rows.unshift(row); return shape(row); },
    async list({ tenantId, userId, collection }) { return live().filter(row => row.tenantId === tenantId && row.userId === userId && row.collection === collection).map(shape); },
    async listAll({ tenantId, userId }) { return live().filter(row => row.tenantId === tenantId && row.userId === userId).map(shape); },
    async listPublic({ tenantId, collection }) { return PUBLIC_COLLECTIONS.includes(collection) ? live().filter(row => row.tenantId === tenantId && row.collection === collection).map(shape) : []; },
    async update({ tenantId, userId, record, expectedStatus }) { const row = live().find(item => item.tenantId === tenantId && item.userId === userId && item.memoryId === record.memoryId); if (!row) return false; if (expectedStatus !== undefined && (row.data.status || "") !== expectedStatus) return false; row.data = JSON.parse(JSON.stringify(record.data)); row.updatedAt = new Date().toISOString(); return true; },
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
  const personal = []; let n = 0; const profile = []; const contacts = []; const entries = farmEntries.map(content => ({ content }));
  return {
    personal, profile, contacts,
    async addPersonalItem({ content }) { personal.unshift({ memory_id: `p${++n}`, content }); return { memoryId: `p${n}` }; },
    async listPersonalItems() { return personal.map(row => ({ memory_id: row.memory_id, content: row.content })); },
    async listFarmEntries() { return entries; },
    async saveProfileFact({ kind, value }) { profile.push({ kind, value }); return { fact: { kind, value }, replaced: [] }; },
    async saveContact({ name, phone = "", email = "" }) { const i = contacts.findIndex(item => item.name.toLowerCase() === name.toLowerCase()); const content = { kind: "contact", name, phone, email }; if (i >= 0) contacts[i] = { ...contacts[i], ...content, phone: phone || contacts[i].phone, email: email || contacts[i].email }; else contacts.push(content); return { contact: content, updated: i >= 0 }; },
    async listContacts() { return contacts.map(content => ({ content })); }
  };
}

module.exports = Object.freeze({ fakeFarmStore, fakeMemory });
