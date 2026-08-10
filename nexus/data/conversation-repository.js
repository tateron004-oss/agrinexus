const { createId, assertId } = require("../contracts/identifiers.js");

class ConversationRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }
  async ensure({ conversationId, tenantId, ownerId, title = null }) {
    assertId("conversation", conversationId);
    const result = await this.db.query(`insert into nexus_conversations(conversation_id,tenant_id,owner_id,title)
      values ($1,$2,$3,$4) on conflict (conversation_id) do update set updated_at=now()
      where nexus_conversations.tenant_id=excluded.tenant_id returning *`, [conversationId, tenantId, ownerId, title]);
    return (result.rows || result)[0] || null;
  }
  async append({ tenantId, conversationId, actorId, role, content, provenance = {} }) {
    const messageId = createId("message");
    const result = await this.db.query(`insert into nexus_messages
      (message_id,tenant_id,conversation_id,actor_id,role,content,provenance)
      values ($1,$2,$3,$4,$5,to_jsonb($6::text),$7::jsonb) returning *`, [messageId, tenantId, conversationId, actorId, role, content, JSON.stringify(provenance)]);
    return (result.rows || result)[0];
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
