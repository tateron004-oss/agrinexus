"use strict";
const { createId } = require("../contracts/identifiers.js");

// nexus_documents/nexus_document_versions have existed since migration 003
// but had no repository -- documents.create (Phase 1, nexus/documents/
// executor.js) only ever wrote a real file to local disk via
// exportProvider.js, with no durable owner-scoped record of who created
// what. That made "open/read a document back" impossible to build safely:
// server.js's /exports/:filename route serves by filename alone, with no
// ownership check at all. This repository is what documents.read/list
// (nexus/documents/read-executor.js) is built on, and what
// documents.create now also writes to, so a real per-owner document
// listing exists going forward.
class DocumentRepository {
  constructor(db) { if (!db?.query || !db?.transaction) throw new Error("A transactional database runtime is required."); this.db = db; }

  async create({ documentId, tenantId, ownerId, taskId, title, documentType, metadata = {} }) {
    const id = documentId || createId("document");
    const result = await this.db.query(`insert into nexus_documents
      (document_id,tenant_id,owner_id,task_id,title,document_type,state,metadata)
      values ($1,$2,$3,$4,$5,$6,'active',$7) returning *`,
      [id, tenantId, ownerId, taskId || null, title, documentType, metadata]);
    return (result.rows || result)[0];
  }

  async addVersion({ documentId, tenantId, content, objectKey, checksum, createdBy }) {
    return this.db.transaction(async trx => {
      const doc = await trx.query("select version from nexus_document_versions where document_id=$1 order by version desc limit 1", [documentId]);
      const nextVersion = Number((doc.rows || doc)[0]?.version || 0) + 1;
      const inserted = await trx.query(`insert into nexus_document_versions
        (version_id,document_id,version,content,object_key,checksum,created_by)
        values ($1,$2,$3,$4,$5,$6,$7) returning *`,
        [createId("version"), documentId, nextVersion, content, objectKey, checksum, createdBy]);
      await trx.query("update nexus_documents set updated_at=now() where document_id=$1 and tenant_id=$2", [documentId, tenantId]);
      return (inserted.rows || inserted)[0];
    });
  }

  // Tenant AND owner scoped -- a document is only ever readable by the
  // person who created it (or a caller who already knows to pass admin
  // context upstream); there is no cross-user document sharing today.
  async get({ tenantId, ownerId, documentId }) {
    const result = await this.db.query(`select d.*, v.version, v.object_key, v.checksum, v.created_at as version_created_at
      from nexus_documents d
      left join lateral (select * from nexus_document_versions where document_id=d.document_id order by version desc limit 1) v on true
      where d.tenant_id=$1 and d.owner_id=$2 and d.document_id=$3 and d.deleted_at is null`, [tenantId, ownerId, documentId]);
    return (result.rows || result)[0] || null;
  }

  async list({ tenantId, ownerId, limit = 50 }) {
    const result = await this.db.query(`select d.*, v.version, v.object_key, v.checksum
      from nexus_documents d
      left join lateral (select * from nexus_document_versions where document_id=d.document_id order by version desc limit 1) v on true
      where d.tenant_id=$1 and d.owner_id=$2 and d.deleted_at is null
      order by d.updated_at desc limit $3`, [tenantId, ownerId, Math.min(Math.max(limit, 1), 200)]);
    return result.rows || result;
  }
}

module.exports = Object.freeze({ DocumentRepository });
