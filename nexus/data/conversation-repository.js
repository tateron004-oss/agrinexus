const { createId, assertId } = require("../contracts/identifiers.js");

class ConversationRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }
  // Found live: the upsert's WHERE clause only checked tenant_id, never
  // owner_id -- calling ensure() with a conversationId that already exists,
  // owned by a DIFFERENT user in the same tenant, silently "succeeded"
  // (updated_at bumped, the EXISTING row with its ORIGINAL owner_id
  // returned) with no error, and the one caller that took an untrusted,
  // caller-supplied conversationId straight from an HTTP request body
  // (nexus/compat/task-api.js) never checked the returned row's owner_id
  // against what it asked for. Combined with append() having no ownership
  // check at all, any tenant member who learned/guessed another member's
  // conversationId could durably link their own task to it and have their
  // task's confirmation/outcome messages appended into that other person's
  // private conversation history. Now requires owner_id to match too, the
  // same way tenant_id already did -- a real conflict-with-wrong-owner
  // returns no row (null), the same "conflict but predicate false, do
  // nothing" semantics the tenant_id check already relied on.
  async ensure({ conversationId, tenantId, ownerId, title = null }) {
    assertId("conversation", conversationId);
    const result = await this.db.query(`insert into nexus_conversations(conversation_id,tenant_id,owner_id,title)
      values ($1,$2,$3,$4) on conflict (conversation_id) do update set updated_at=now()
      where nexus_conversations.tenant_id=excluded.tenant_id and nexus_conversations.owner_id=excluded.owner_id returning *`, [conversationId, tenantId, ownerId, title]);
    return (result.rows || result)[0] || null;
  }
  async append({ tenantId, conversationId, actorId, role, content, provenance = {} }) {
    // Defense in depth alongside ensure()'s own hardening above: never
    // append into a conversation this tenant/actor doesn't actually own,
    // even if some future caller reaches append() without going through
    // ensure() first.
    const ownerId = await this.owner({ tenantId, conversationId });
    if (ownerId !== null && ownerId !== actorId) {
      throw Object.assign(new Error("Cannot append to a conversation owned by a different user."), { code: "conversation_owner_mismatch" });
    }
    const messageId = createId("message");
    const result = await this.db.query(`insert into nexus_messages
      (message_id,tenant_id,conversation_id,actor_id,role,content,provenance)
      values ($1,$2,$3,$4,$5,to_jsonb($6::text),$7::jsonb) returning *`, [messageId, tenantId, conversationId, actorId, role, content, JSON.stringify(provenance)]);
    return (result.rows || result)[0];
  }

  async owner({ tenantId, conversationId }) {
    assertId("conversation", conversationId);
    const result = await this.db.query(`select owner_id from nexus_conversations where tenant_id=$1 and conversation_id=$2`, [tenantId, conversationId]);
    const row = (result.rows || result)[0];
    return row ? row.owner_id : null;
  }

  async recent({ tenantId, conversationId, limit = 24 }) {
    assertId("conversation", conversationId);
    const boundedLimit = Math.min(Math.max(Number(limit) || 24, 1), 100);
    const result = await this.db.query(`select message_id,actor_id,role,content,provenance,created_at
      from nexus_messages where tenant_id=$1 and conversation_id=$2
      order by created_at desc limit $3`, [tenantId, conversationId, boundedLimit]);
    return (result.rows || result).slice().reverse();
  }
}

module.exports = Object.freeze({ ConversationRepository });
