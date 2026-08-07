const MEMORY_CLASSES = Object.freeze(["working", "episodic", "semantic", "profile", "domain"]);

class MemoryRepository {
  constructor(db) {
    if (!db || typeof db.query !== "function") throw new Error("A database runtime is required.");
    this.db = db;
  }

  async remember(item) {
    if (!MEMORY_CLASSES.includes(item.memoryClass)) throw new Error("Unsupported memory class.");
    if (!item.purpose) throw new Error("Memory purpose is required.");
    if (!item.provenance) throw new Error("Memory provenance is required.");
    await this.db.query(`insert into nexus_memory_items
      (memory_id, tenant_id, principal_id, task_id, memory_class, purpose, content,
       provenance, confidence, expires_at) values ($1,$2,$3,$4,$5,$6,$7::jsonb,$8::jsonb,$9,$10)`, [
      item.memoryId, item.tenantId, item.principalId, item.taskId || null, item.memoryClass,
      item.purpose, JSON.stringify(item.content), JSON.stringify(item.provenance),
      item.confidence ?? null, item.expiresAt || null
    ]);
    return item;
  }

  async recall({ tenantId, principalId, memoryClass, purpose, limit = 20 }) {
    const result = await this.db.query(`select * from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and memory_class=$3 and purpose=$4
        and deleted_at is null and (expires_at is null or expires_at > now())
      order by updated_at desc limit $5`, [tenantId, principalId, memoryClass, purpose, limit]);
    return result.rows || result;
  }
}

module.exports = Object.freeze({ MEMORY_CLASSES, MemoryRepository });
