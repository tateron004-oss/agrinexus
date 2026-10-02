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
const SHARE_KEYS = Object.freeze(["checkins", "medications", "emergencyLocation"]);
// An emergency alert the person triggered is remembered for an hour, so their location can follow it (see emergency-location.js).
const ALERT_MINUTES = 60;
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

  // Found live (companion audit): `kind` ("circle" vs "alert") was applied as a JS .filter() AFTER the SQL
  // LIMIT 200 already truncated the result set -- both kinds share this one table/purpose and one
  // principal_id (the person's own userId). Circle-link rows are created once at invite time and only ever
  // updated in place, so their created_at never advances; alert rows are a brand-new row every time the
  // person's own emergency trigger fires and are never deleted. A person who has triggered enough alerts
  // over time (spread more than 5 minutes apart) could have their alert rows alone fill the 200-row window,
  // silently pushing their real circle-link rows out of it -- with activeMembers() (who to actually notify
  // in a real emergency) built directly on this function. Filtering by kind in the SQL itself, before the
  // LIMIT, means the two kinds can never compete for the same window.
  async rows({ tenantId, userId, linkId = null, kind = "circle" }) {
    const result = await this.db.query(`select memory_id,principal_id,content from nexus_memory_items
      where tenant_id=$1 and memory_class='domain' and purpose='circle' and deleted_at is null
      and ($2::text is null or principal_id::text=$2::text) and ($3::text is null or content->>'linkId'=$3)
      and content->>'kind'=$4
      order by created_at desc, memory_id desc limit 200`, [tenantId, userId, linkId, kind]);
    return (result.rows || result).filter(row => row.content && row.content.kind === kind);
  }

  // The caller's own links that are not over, newest first.
  async listFor({ tenantId, userId }) {
    return (await this.rows({ tenantId, userId })).filter(row => row.content.status !== "ended").map(row => ({ memoryId: row.memory_id, ...row.content }));
  }

  // Everyone who has said yes to looking out for this person.
  async activeMembers({ tenantId, personId }) {
    return (await this.listFor({ tenantId, userId: personId })).filter(link => link.role === "person" && link.status === "active");
  }

  // ---- emergency alerts the person triggered (same table and purpose; a different kind, so links never see them) ----
  // The same alert within five minutes is one alert, matching the push de-duplication in safety.js.
  // Found live: the reuse check reads before it commits, same shape as invite()'s already-fixed duplicate
  // race above -- two near-simultaneous first-ever alerts for the same person (a genuine panic sending two
  // messages within milliseconds, or a client double-submit) could both see no recent alert and both insert
  // distinct alert rows with different alertIds. A phone holding the FIRST alertId (from the first
  // safetyTurn() response) would then have its location-share calls rejected with 409 no_active_alert once
  // the second, slightly-later row sorts as "latest" -- silently breaking location sharing for that
  // emergency even though a circle alert genuinely went out. Re-checking under the same
  // transaction-scoped advisory lock as the insert, keyed per person, closes the window.
  async recordAlert({ tenantId, userId, alerted, now = new Date(), language = "en" }) {
    const write = async db => {
      const result = await db.query(`select memory_id,principal_id,content from nexus_memory_items where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='circle'
        and deleted_at is null and content->>'kind'='alert' order by created_at desc, memory_id desc limit 200`, [tenantId, userId]);
      const rows = (result.rows || result).filter(row => row.content && now.getTime() - Date.parse(row.content.at) < ALERT_MINUTES * 60 * 1000);
      rows.sort((a, b) => Date.parse(b.content.at) - Date.parse(a.content.at));
      const latest = rows[0]?.content || null;
      if (latest && !latest.ended && now.getTime() - Date.parse(latest.at) < 5 * 60 * 1000) return { alertId: latest.alertId, reused: true };
      const alertId = `alt_${crypto.randomUUID()}`;
      await this.insertRow(db, { tenantId, userId, content: { kind: "alert", role: "alert", alertId, at: now.toISOString(), alerted: alerted.map(member => ({ id: member.otherId, name: member.otherName })), language, ended: false, updates: 0, lastUpdateAt: null } });
      return { alertId, reused: false };
    };
    return typeof this.db.transaction === "function"
      ? this.db.transaction(async trx => {
          await trx.query("select pg_advisory_xact_lock(hashtext($1))", [`circle-alert:${tenantId}:${userId}`]);
          return write(trx);
        })
      : write(this.db);
  }
  // The person's most recent alert that is still within the hour, or null.
  async latestAlert({ tenantId, userId, now = new Date() }) {
    const rows = (await this.rows({ tenantId, userId, kind: "alert" })).filter(row => now.getTime() - Date.parse(row.content.at) < ALERT_MINUTES * 60 * 1000);
    rows.sort((a, b) => Date.parse(b.content.at) - Date.parse(a.content.at));
    return rows[0] ? { memoryId: rows[0].memory_id, ...rows[0].content } : null;
  }
  // `expectedUpdates`, when given, makes this a real compare-and-swap: the write only takes effect if the
  // alert's current `updates` count (checked in the SQL WHERE clause itself, not just the earlier read --
  // Postgres's own row-level locking makes this genuinely atomic under concurrent callers) still matches
  // what the caller last read. Found live: emergency-location.js's share() read the alert once, computed its
  // next update number from that snapshot, sent real pushes using it as part of the idempotency key, and
  // only wrote the update back afterward -- two near-simultaneous share() calls for the same alert could
  // both compute the same number, sending real pushes with the identical idempotency key (so the
  // notification layer's dedup silently dropped one of two genuinely distinct GPS fixes) and defeating the
  // 45-second anti-spam throttle. Callers that omit expectedUpdates (safety.js's own use) are unaffected.
  async updateAlert({ tenantId, userId, memoryId, change, expectedUpdates }) {
    const row = (await this.rows({ tenantId, userId, kind: "alert" })).find(item => item.memory_id === memoryId); if (!row) return false;
    if (expectedUpdates !== undefined && (row.content.updates || 0) !== expectedUpdates) return false;
    const params = [tenantId, memoryId, change(row.content)];
    let sql = `update nexus_memory_items set content=$3,updated_at=now() where tenant_id=$1 and memory_id=$2 and purpose='circle' and deleted_at is null`;
    if (expectedUpdates !== undefined) { sql += ` and coalesce((content->>'updates')::int,0) = $4`; params.push(expectedUpdates); }
    sql += ` returning memory_id`;
    const result = await this.db.query(sql, params);
    return Boolean((result.rows || result)[0]);
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
    // Someone who said no is not asked again for 30 days, so an invitation cannot be used to pester them.
    const cutoff = Date.now() - 30 * 24 * 3600 * 1000;
    if ((await this.rows({ tenantId, userId: person.id })).some(row => row.content.role === "person" && row.content.otherId === member.id && row.content.status === "ended"
      && row.content.endedBy === member.id && !row.content.acceptedAt && new Date(row.content.endedAt).getTime() > cutoff)) return { refused: "declined_recently" };
    // Fast pre-checks for the common case (a quick "you're full" reply with no transaction needed);
    // the authoritative checks happen inside the lock below, since these reads can go stale by the
    // time the insert actually runs.
    if (mine.filter(link => link.role === "person").length >= MAX_MEMBERS) return { refused: "full" };
    if ((await this.listFor({ tenantId, userId: member.id })).filter(link => link.role === "member").length >= MAX_LINKS_AS_MEMBER) return { refused: "member_full" };
    const linkId = `lnk_${crypto.randomUUID()}`; const invitedAt = new Date().toISOString(); const rel = clean(relationship).slice(0, 40);
    const base = { kind: "circle", linkId, relationship: rel, status: "invited", shares: {}, invitedAt };
    // Found live: every check above (this duplicate check included) reads
    // before any of them commit, so two near-simultaneous invite() calls
    // for the same (person, member) pair -- from either direction -- could
    // both pass every check and both insert, creating two independent
    // links with independently-settable, conflicting share states (and
    // double-counting against both sides' MAX_MEMBERS/MAX_LINKS_AS_MEMBER
    // caps). Re-checking for a duplicate under the same transaction-scoped
    // advisory lock as the insert -- keyed symmetrically so it doesn't
    // matter which side initiates -- closes the duplicate-link window, but
    // that lock alone doesn't close the CAP race: it's keyed to one
    // specific (person, member) pair, so two concurrent invite() calls from
    // the same person to two DIFFERENT members use two different lock keys
    // and never serialize against each other at all, letting both pass the
    // stale MAX_MEMBERS/MAX_LINKS_AS_MEMBER pre-checks above. Also locking
    // (and re-checking) on person.id and member.id individually -- all lock
    // keys acquired in one sorted order so two overlapping invite() calls
    // can never deadlock waiting on each other's keys in reverse order --
    // closes that the same way.
    const write = async db => {
      const existing = await db.query(`select 1 from nexus_memory_items where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='circle'
        and deleted_at is null and content->>'kind'='circle' and content->>'role'='person' and content->>'otherId'=$3 and content->>'status'<>'ended' limit 1`,
      [tenantId, person.id, member.id]);
      if ((existing.rows || existing)[0]) return { refused: "duplicate" };
      const personCount = await db.query(`select count(*)::int as n from nexus_memory_items where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='circle'
        and deleted_at is null and content->>'kind'='circle' and content->>'role'='person' and content->>'status'<>'ended'`, [tenantId, person.id]);
      if (Number((personCount.rows || personCount)[0]?.n || 0) >= MAX_MEMBERS) return { refused: "full" };
      const memberCount = await db.query(`select count(*)::int as n from nexus_memory_items where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='circle'
        and deleted_at is null and content->>'kind'='circle' and content->>'role'='member' and content->>'status'<>'ended'`, [tenantId, member.id]);
      if (Number((memberCount.rows || memberCount)[0]?.n || 0) >= MAX_LINKS_AS_MEMBER) return { refused: "member_full" };
      await this.insertRow(db, { tenantId, userId: person.id, content: { ...base, role: "person", otherId: member.id, otherName: member.name } });
      await this.insertRow(db, { tenantId, userId: member.id, content: { ...base, role: "member", otherId: person.id, otherName: person.name } });
      return { link: { linkId, status: "invited", relationship: rel } };
    };
    const lockKeys = [`circle-invite:${tenantId}:${[person.id, member.id].sort().join(":")}`, `circle-cap:${tenantId}:${person.id}`, `circle-cap:${tenantId}:${member.id}`].sort();
    return typeof this.db.transaction === "function"
      ? await this.db.transaction(async trx => {
          for (const key of lockKeys) await trx.query("select pg_advisory_xact_lock(hashtext($1))", [key]);
          return write(trx);
        })
      : await write(this.db);
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

module.exports = Object.freeze({ CircleRepository, MAX_MEMBERS, SHARE_KEYS, ALERT_MINUTES });
