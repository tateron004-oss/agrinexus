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

  // People the person has told Kyro about (see contacts.js). Other people's details are sensitive: kept under their own purpose
  // ("contacts"), so no planning or recall query that reads profile facts ever returns them. One contact per name; saving the same
  // name again merges what is new (a phone number added to an email) and replaces what changed.
  async saveContact({ tenantId, userId, name, phone = "", email = "" }) {
    const existing = (await this.listContacts({ tenantId, userId })).find(row => row.content.name.toLowerCase() === String(name).toLowerCase());
    const content = { kind: "contact", name, phone: phone || existing?.content.phone || "", email: email || existing?.content.email || "" };
    if (existing) await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and deleted_at is null`, [tenantId, userId, existing.memory_id]);
    await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,'domain','contacts',$4,$5,$6::vector,'none',$7,0.6,0.9,'user_confirmed','sensitive')`,
    [createId("memory"), tenantId, userId, content, `contact: ${name}`, PLACEHOLDER_VECTOR, { source: "user-statement", capturedAt: new Date().toISOString() }]);
    return { contact: content, updated: Boolean(existing) };
  }

  async listContacts({ tenantId, userId, limit = 200 }) {
    const result = await this.db.query(`select memory_id,content from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='contacts' and deleted_at is null
      order by created_at desc, memory_id desc limit $3`, [tenantId, userId, Math.min(Math.max(Number(limit) || 200, 1), 500)]);
    return (result.rows || result).filter(row => row.content && row.content.kind === "contact" && row.content.name);
  }

  // Forget one contact by (case-insensitive) name. Returns the contact that was forgotten, or null.
  async forgetContact({ tenantId, userId, name }) {
    const found = (await this.listContacts({ tenantId, userId })).find(row => row.content.name.toLowerCase() === String(name).toLowerCase());
    if (!found) return null;
    await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and deleted_at is null`, [tenantId, userId, found.memory_id]);
    return found.content;
  }

  // The person's own to-dos, shopping items, notes and calendar events (see personal/items.js): one row each under the purpose
  // "personal_items", private to them. Newest first. Removing is a soft delete like every other forget.
  async addPersonalItem({ tenantId, userId, content }) {
    const saved = await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,'domain','personal_items',$4,$5,$6::vector,'none',$7,0.5,0.9,'user_confirmed','sensitive') returning memory_id`,
    [createId("memory"), tenantId, userId, content, `${content.kind}: ${String(content.text || "").slice(0, 200)}`, PLACEHOLDER_VECTOR, { source: "user-statement", capturedAt: new Date().toISOString() }]);
    return { memoryId: (saved.rows || saved)[0]?.memory_id, content };
  }

  async listPersonalItems({ tenantId, userId, kind = null, limit = 400 }) {
    const result = await this.db.query(`select memory_id,content from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='personal_items' and deleted_at is null
      order by created_at desc, memory_id desc limit $3`, [tenantId, userId, Math.min(Math.max(Number(limit) || 400, 1), 500)]);
    return (result.rows || result).filter(row => row.content && typeof row.content === "object" && row.content.kind && (!kind || row.content.kind === kind));
  }

  async updatePersonalItem({ tenantId, userId, memoryId, content }) {
    const result = await this.db.query(`update nexus_memory_items set content=$4,searchable_text=$5,updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and purpose='personal_items' and deleted_at is null returning memory_id`,
    [tenantId, userId, memoryId, content, `${content.kind}: ${String(content.text || "").slice(0, 200)}`]);
    return Boolean((result.rows || result)[0]);
  }

  async removePersonalItem({ tenantId, userId, memoryId }) {
    const result = await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and purpose='personal_items' and deleted_at is null returning memory_id`, [tenantId, userId, memoryId]);
    return Boolean((result.rows || result)[0]);
  }

  // The person's farm log (see farm/log.js): readings they reported (rain, soil moisture, tank level, harvest) and the warning levels
  // they set, one row each under the purpose "farm_log", private to them, newest first. Removing is a soft delete.
  async addFarmEntry({ tenantId, userId, content }) {
    const saved = await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,'domain','farm_log',$4,$5,$6::vector,'none',$7,0.5,0.9,'user_confirmed','internal') returning memory_id`,
    [createId("memory"), tenantId, userId, content, `${content.kind}: ${content.metric} ${content.value ?? content.below ?? ""}`, PLACEHOLDER_VECTOR, { source: "user-statement", capturedAt: new Date().toISOString() }]);
    return { memoryId: (saved.rows || saved)[0]?.memory_id, content };
  }

  async listFarmEntries({ tenantId, userId, limit = 5000 }) {
    const result = await this.db.query(`select memory_id,content from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='farm_log' and deleted_at is null
      order by created_at desc, memory_id desc limit $3`, [tenantId, userId, Math.min(Math.max(Number(limit) || 5000, 1), 5000)]);
    return (result.rows || result).filter(row => row.content && typeof row.content === "object" && row.content.kind);
  }

  async removeFarmEntry({ tenantId, userId, memoryId }) {
    const result = await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and purpose='farm_log' and deleted_at is null returning memory_id`, [tenantId, userId, memoryId]);
    return Boolean((result.rows || result)[0]);
  }

  // Answer feedback (see quality/feedback.js): a person's "that was wrong" / "that helped", kept under the purpose "feedback". Given a
  // userId it lists that person's; without one it lists the whole tenant's, for the administrator's report. Newest first.
  async addFeedback({ tenantId, userId, content }) {
    const saved = await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,'domain','feedback',$4,$5,$6::vector,'none',$7,0.5,0.9,'user_confirmed','internal') returning memory_id`,
    [createId("memory"), tenantId, userId, content, `feedback: ${content.rating}`, PLACEHOLDER_VECTOR, { source: "user-statement", capturedAt: new Date().toISOString() }]);
    return { memoryId: (saved.rows || saved)[0]?.memory_id, content };
  }

  async listFeedback({ tenantId, userId = null, sinceDays = 30, limit = 200 }) {
    const result = await this.db.query(`select memory_id,content,created_at from nexus_memory_items
      where tenant_id=$1 and ($2::text is null or principal_id::text=$2::text) and memory_class='domain' and purpose='feedback' and deleted_at is null
      and created_at > now() - ($3::int * interval '1 day') order by created_at desc, memory_id desc limit $4`,
    [tenantId, userId, Math.min(Math.max(Number(sinceDays) || 30, 1), 365), Math.min(Math.max(Number(limit) || 200, 1), 1000)]);
    return (result.rows || result).filter(row => row.content && typeof row.content === "object" && row.content.rating);
  }

  async updateFeedback({ tenantId, userId, memoryId, content }) {
    const result = await this.db.query(`update nexus_memory_items set content=$4,updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and purpose='feedback' and deleted_at is null returning memory_id`, [tenantId, userId, memoryId, content]);
    return Boolean((result.rows || result)[0]);
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
