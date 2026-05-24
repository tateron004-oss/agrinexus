async function recordAuditEvent(db, context, event) {
  const payload = {
    tenantId: context.tenantId || null,
    userId: context.userId || null,
    actorEmail: event.actorEmail || null,
    action: event.action,
    entityType: event.entityType,
    entityId: event.entityId || null,
    metadata: event.metadata || {}
  };

  if (!db.isConnected) return { queued: true, payload };

  await db.query(
    `insert into audit_events (tenant_id, user_id, actor_email, action, entity_type, entity_id, metadata)
     values ($1, $2, $3, $4, $5, $6, $7)`,
    [payload.tenantId, payload.userId, payload.actorEmail, payload.action, payload.entityType, payload.entityId, JSON.stringify(payload.metadata)]
  );

  return { queued: false, payload };
}

module.exports = { recordAuditEvent };
