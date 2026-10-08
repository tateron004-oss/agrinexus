"use strict";

// An in-memory stand-in for the saved-contacts part of the memory repository (saveContact / listContacts / forgetContact in repository.js), with the same one-contact-per-name,
// per-person scoping and newest-first order. It exists so the older command route can be exercised end to end without a database: a test or a local development server opts in with
// NEXUS_TEST_REMINDER_STORE=memory (ignored when NODE_ENV is production, like the reminder stand-ins in nexus/reminders/memory-stores.js). Nothing in it is ever delivered or kept.
const MAX_CONTACTS = 200;

function createMemoryContactStore() {
  const rows = []; let counter = 0;
  const mine = (tenantId, userId) => rows.filter(row => row.tenant_id === tenantId && row.principal_id === userId && !row.deleted_at);
  return {
    rows,
    async saveContact({ tenantId, userId, name, phone = "", email = "" }) {
      const own = mine(tenantId, userId);
      const existing = own.find(row => row.content.name.toLowerCase() === String(name).toLowerCase());
      if (!existing && own.length >= MAX_CONTACTS) return { full: true };
      const content = { kind: "contact", name, phone: phone || existing?.content.phone || "", email: email || existing?.content.email || "" };
      if (existing) existing.deleted_at = new Date();
      counter += 1;
      rows.push({ memory_id: `mem_contact_${counter}`, tenant_id: tenantId, principal_id: userId, content, created_at: new Date(Date.now() + counter) });
      return { contact: content, updated: Boolean(existing), full: false };
    },
    async listContacts({ tenantId, userId, limit = 200 }) {
      return mine(tenantId, userId).sort((a, b) => b.created_at - a.created_at).slice(0, Math.min(Math.max(Number(limit) || 200, 1), 500));
    },
    async forgetContact({ tenantId, userId, name }) {
      const found = (await this.listContacts({ tenantId, userId })).find(row => row.content.name.toLowerCase() === String(name).toLowerCase());
      if (!found) return null;
      found.deleted_at = new Date();
      return found.content;
    }
  };
}

module.exports = Object.freeze({ createMemoryContactStore });
