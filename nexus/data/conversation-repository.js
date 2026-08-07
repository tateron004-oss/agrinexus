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
      values ($1,$2,$3,$4,$5,$6,$7) returning *`, [messageId, tenantId, conversationId, actorId, role, content, provenance]);
    return (result.rows || result)[0];
  }
}

module.exports = Object.freeze({ ConversationRepository });
