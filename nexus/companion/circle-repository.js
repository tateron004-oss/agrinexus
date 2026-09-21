"use strict";

const crypto = require("node:crypto");
const { createId } = require("../contracts/identifiers.js");

// A person's trusted circle: the few people they have chosen to look out for them. A link joins two people and is stored as TWO rows (one
// each, under the purpose "circle" in the existing memory table, no new schema) that always change together:
//   the person's row   { role: "person", otherId: <member>, otherName, relationship, status, shares }
//   the member's row   { role: "member", otherId: <person>, otherName, relationship, status, shares }
// status: "invited" (waiting for the member) -> "active" (they said yes) -> "ended" (either side left; kept only as history, never used).
// shares: what the PERSON has chosen to let this member be told. Nothing is shared by default; emergency alerts are the one exception
// (see companion/safety.js), and only go to members who have said yes.
// Links are within one community (tenant): both people must belong to the same one.
const MAX_MEMBERS = 8;
const MAX_LINKS_AS_MEMBER = 20;
const SHARE_KEYS = Object.freeze(["checkins"]);
const PLACEHOLDER_VECTOR = `[1${",0".repeat(1535)}]`;
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();

class CircleRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  // The people in the same community who could be invited. Returns { id, name } or null. Callers must never reveal to the person whether a
  // lookup succeeded until the other side has answered (see circle.js), so an email cannot be probed for an account.
  async findUserByEmail({ tenantId, email }) {
    const result = await this.db.query(`select id,display_name from users where tenant_id=$1 and lower(email)=lower($2) and status='active' limit 1`, [tenantId, clean(email)]);
    const row = (result.rows || result)[0];
    return row ? { id: String(row.id), name: clean(row.display_name) } : null;
  }
  async userName({ tenantId, userId }) {
    try {
      const result = await this.db.query(`select display_name from users where tenant_id=$1 and id=$2 limit 1`, [tenantId, userId]);
      return clean((result.rows || result)[0]?.display_name);
    } catch { return ""; }
  }

  async rows({ tenantId, userId, linkId = null }) {
    const result = await this.db.query(`select memory_id,principal_id,content from nexus_memory_items
      where tenant_id=$1 and memory_class='domain' and purpose='circle' and deleted_at is null
      and ($2::text is null or principal_id=$2) and ($3::text is null or content->>'linkId'=$3)
      order by created_at desc, memory_id desc limit 200`, [tenantId, userId, linkId]);
    return (result.rows || result).filter(row => row.content && row.content.kind === "circle");
  }

  // The caller's own links that are not over, newest first.
  async listFor({ tenantId, userId }) {
    return (await this.rows({ tenantId, userId })).filter(row => row.content.status !== "ended").map(row => ({ memoryId: row.memory_id, ...row.content }));
  }

  // Everyone who has said yes to looking out for this person.
  async activeMembers({ tenantId, personId }) {
    return (await this.listFor({ tenantId, userId: personId })).filter(link => link.role === "person" && link.status === "active");
  }

  async insertRow(db, { tenantId, userId, content }) {
    await db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,'domain','circle',$4,$5,$6::vector,'none',$7,0.7,0.9,'user_confirmed','sensitive')`,
    [createId("memory"), tenantId, userId, content, `circle: ${content.role}`, PLACEHOLDER_VECTOR, { source: "user-statement", capturedAt: new Date().toISOString() }]);
  }

  // A person invites a member. Returns { link } or { refused: "self"|"duplicate"|"full"|"member_full" }.
  async invite({ tenantId, person, member, relationship = "" }) {
    if (person.id === member.id) return { refused: "self" };
    const mine = await this.listFor({ tenantId, userId: person.id });
    if (mine.some(link => link.role === "person" && link.otherId === member.id)) return { refused: "duplicate" };
    if (mine.filter(link => link.role === "person").length >= MAX_MEMBERS) return { refused: "full" };
    if ((await this.listFor({ tenantId, userId: member.id })).filter(link => link.role === "member").length >= MAX_LINKS_AS_MEMBER) return { refused: "member_full" };
    const linkId = `lnk_${crypto.randomUUID()}`; const invitedAt = new Date().toISOString(); const rel = clean(relationship).slice(0, 40);
    const base = { kind: "circle", linkId, relationship: rel, status: "invited", shares: {}, invitedAt };
    const write = async db => {
      await this.insertRow(db, { tenantId, userId: person.id, content: { ...base, role: "person", otherId: member.id, otherName: member.name } });
      await this.insertRow(db, { tenantId, userId: member.id, content: { ...base, role: "member", otherId: person.id, otherName: person.name } });
    };
    if (typeof this.db.transaction === "function") await this.db.transaction(write); else await write(this.db);
    return { link: { linkId, status: "invited", relationship: rel } };
  }

  async updateBoth({ tenantId, linkId, change }) {
    const rows = await this.rows({ tenantId, userId: null, linkId });
    for (const row of rows) await this.db.query(`update nexus_memory_items set content=$3,updated_at=now() where tenant_id=$1 and memory_id=$2 and purpose='circle' and deleted_at is null`, [tenantId, row.memory_id, change(row.content)]);
    return rows.length;
  }

  // The member's answer. Only the invited member can answer, and only while the invitation is waiting.
  async respond({ tenantId, memberId, linkId, accept }) {
    const mine = (await this.listFor({ tenantId, userId: memberId })).find(link => link.linkId === linkId && link.role === "member" && link.status === "invited");
    if (!mine) return null;
    const at = new Date().toISOString();
    await this.updateBoth({ tenantId, linkId, change: content => ({ ...content, status: accept ? "active" : "ended", ...(accept ? { acceptedAt: at } : { endedAt: at, endedBy: memberId }) }) });
    return { linkId, personId: mine.otherId, personName: mine.otherName };
  }

  // Either side leaves or removes the other. Returns the link as the caller saw it, or null when it is not theirs.
  async end({ tenantId, userId, linkId }) {
    const mine = (await this.listFor({ tenantId, userId })).find(link => link.linkId === linkId);
    if (!mine) return null;
    const at = new Date().toISOString();
    await this.updateBoth({ tenantId, linkId, change: content => ({ ...content, status: "ended", endedAt: at, endedBy: userId, shares: {} }) });
    return mine;
  }

  // Only the person can change what a member may be told.
  async setShare({ tenantId, personId, linkId, key, value }) {
    if (!SHARE_KEYS.includes(key)) return null;
    const mine = (await this.listFor({ tenantId, userId: personId })).find(link => link.linkId === linkId && link.role === "person" && link.status === "active");
    if (!mine) return null;
    await this.updateBoth({ tenantId, linkId, change: content => ({ ...content, shares: { ...(content.shares || {}), [key]: Boolean(value) } }) });
    return { ...mine, shares: { ...(mine.shares || {}), [key]: Boolean(value) } };
  }
}

module.exports = Object.freeze({ CircleRepository, MAX_MEMBERS, SHARE_KEYS });
