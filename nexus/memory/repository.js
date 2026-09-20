const { createId } = require("../contracts/identifiers.js");
const MEMORY_CLASSES = Object.freeze(["working", "episodic", "semantic", "profile", "domain"]);

class MemoryRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async remember(item) {
    if (!MEMORY_CLASSES.includes(item.memoryClass)) throw new Error("Unsupported memory class.");
    if (!item.purpose) throw new Error("Memory purpose is required.");
    if (!item.provenance || !Object.keys(item.provenance).length) throw new Error("Memory provenance is required.");
    const memoryId = item.memoryId || createId("memory");
    const result = await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,task_id,conversation_id,memory_class,purpose,content,
       searchable_text,embedding,embedding_model,provenance,importance,confidence,
       verification_state,sensitivity,expires_at)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::vector,$11,$12,$13,$14,$15,$16,$17) returning *`, [
      memoryId, item.tenantId, item.principalId, item.taskId || null, item.conversationId || null,
      item.memoryClass, item.purpose, item.content, item.searchableText,
      vectorLiteral(item.embedding), item.embeddingModel, item.provenance, item.importance ?? 0.5,
      item.confidence ?? 0.5, item.verificationState || "unverified", item.sensitivity || "internal",
      item.expiresAt || null
    ]);
    return (result.rows || result)[0];
  }

  async recall({ tenantId, principalId, embedding, memoryClass, purpose, roles = [], limit = 20 }) {
    const healthAllowed = roles.includes("admin") || roles.includes("health_operator");
    const result = await this.db.query(`select memory_id,memory_class,purpose,content,provenance,importance,
      confidence,verification_state,sensitivity,created_at,1-(embedding <=> $3::vector) as similarity
      from nexus_memory_items where tenant_id=$1 and principal_id=$2 and memory_class=$4 and purpose=$5
      and deleted_at is null and (expires_at is null or expires_at > now())
      and (sensitivity <> 'health' or $7::boolean)
      order by (embedding <=> $3::vector)-(importance*0.05) limit $6`,
    [tenantId, principalId, vectorLiteral(embedding), memoryClass, purpose, Math.min(Math.max(limit, 1), 50), healthAllowed]);
    return result.rows || result;
  }

  async search({ tenantId, userId, purpose, query, roles = [], limit = 8 }) {
    const principalId = userId;
    const normalizedQuery = String(query || "").trim();
    if (!normalizedQuery || !purpose) return [];
    const healthAllowed = roles.includes("admin") || roles.includes("health_operator");
    const boundedLimit = Math.min(Math.max(Number(limit) || 8, 1), 20);
    const result = await this.db.query(`select memory_id,memory_class as kind,purpose,content,provenance,
      importance,confidence,verification_state,sensitivity,created_at
      from nexus_memory_items where tenant_id=$1 and principal_id=$2 and purpose=$3
      and deleted_at is null and (expires_at is null or expires_at > now())
      and (sensitivity <> 'health' or $6::boolean)
      and searchable_text ilike ('%' || $4 || '%')
      order by verification_state='source_verified' desc,importance desc,updated_at desc limit $5`,
    [tenantId, principalId, purpose, normalizedQuery, boundedLimit, healthAllowed]);
    return result.rows || result;
  }

  // What is saved for this person, newest and most important first, with the same purpose and sensitivity
  // rules as search(). search() matches the WHOLE query as a substring of the stored text, so a question such as
  // "what do you remember about me" can never match anything; recall questions list instead of searching.
  async recent({ tenantId, userId, purpose, roles = [], limit = 10 }) {
    if (!purpose) return [];
    const healthAllowed = roles.includes("admin") || roles.includes("health_operator");
    const boundedLimit = Math.min(Math.max(Number(limit) || 10, 1), 20);
    const result = await this.db.query(`select memory_id,memory_class as kind,purpose,content,provenance,
      importance,confidence,verification_state,sensitivity,created_at
      from nexus_memory_items where tenant_id=$1 and principal_id=$2 and purpose=$3
      and deleted_at is null and (expires_at is null or expires_at > now())
      and (sensitivity <> 'health' or $5::boolean)
      order by verification_state='source_verified' desc,importance desc,updated_at desc limit $4`,
    [tenantId, userId, purpose, boundedLimit, healthAllowed]);
    return result.rows || result;
  }

  // What Kyro has learned about this person from what they said about themselves (see profile-facts.js): one current fact per
  // kind. purpose "task_planning" is the purpose recall and planning already read, and sensitivity stays "internal" (health
  // details are never stored here). Facts are never matched by similarity, so they carry a fixed placeholder embedding.
  async saveProfileFact({ tenantId, userId, kind, value, sourceText, conversationId = null }) {
    const now = new Date().toISOString();
    const replaced = await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_class='profile' and purpose='task_planning' and content->>'kind'=$3 and deleted_at is null
      returning content`, [tenantId, userId, kind]);
    const saved = await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,conversation_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,$4,'profile','task_planning',$5,$6,$7::vector,'none',$8,0.8,0.9,'user_confirmed','internal') returning memory_id,content`,
    [createId("memory"), tenantId, userId, conversationId, { kind, value }, `${kind}: ${value}`, PLACEHOLDER_VECTOR,
      { source: "user-statement", text: String(sourceText || "").slice(0, 220), conversationId, capturedAt: now }]);
    return { fact: (saved.rows || saved)[0]?.content || { kind, value }, replaced: (replaced.rows || replaced).map(row => row.content).filter(Boolean) };
  }

  // Everything currently known about the person's profile, newest first.
  async profile({ tenantId, userId }) {
    const result = await this.db.query(`select memory_id,content,created_at from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and memory_class='profile' and purpose='task_planning' and deleted_at is null
      order by created_at desc, memory_id desc limit 50`, [tenantId, userId]);
    return (result.rows || result).filter(row => row.content && typeof row.content === "object" && row.content.kind);
  }

  // Take facts back (soft-deleted, like forget()). kind: a fact kind, "last" (the most recently saved), or "all".
  async forgetProfile({ tenantId, userId, kind }) {
    const current = await this.profile({ tenantId, userId });
    const chosen = kind === "all" ? current : kind === "last" ? current.slice(0, 1) : current.filter(row => row.content.kind === kind);
    if (!chosen.length) return [];
    const result = await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_class='profile' and memory_id = any($3::text[]) and deleted_at is null returning content`,
    [tenantId, userId, chosen.map(row => row.memory_id)]);
    return (result.rows || result).map(row => row.content).filter(Boolean);
  }

  async forget({ tenantId, principalId, memoryId }) {
    const result = await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and deleted_at is null returning memory_id`,
    [tenantId, principalId, memoryId]);
    return Boolean((result.rows || result)[0]);
  }
}

// A unit vector: the column is required, and cosine distance is undefined for a zero vector.
const PLACEHOLDER_VECTOR = `[1${",0".repeat(1535)}]`;

function vectorLiteral(values) {
  if (!Array.isArray(values) || values.length !== 1536 || values.some(value => !Number.isFinite(Number(value)))) {
    throw new Error("Embedding must contain exactly 1536 finite numbers.");
  }
  return `[${values.map(Number).join(",")}]`;
}

module.exports = Object.freeze({ MEMORY_CLASSES, MemoryRepository, vectorLiteral });
