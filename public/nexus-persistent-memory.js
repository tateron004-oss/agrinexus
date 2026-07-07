(function initNexusPersistentMemory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusPersistentMemory = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPersistentMemoryFactory() {
  const MEMORY_TYPES = Object.freeze([
    "health_patient_intake",
    "chronic_condition_record",
    "farmer_profile",
    "farm_profile",
    "crop_issue_record",
    "buyer_profile",
    "seller_profile",
    "marketplace_listing",
    "transaction_record",
    "shipment_record",
    "learning_progress",
    "workforce_applicant",
    "employer_profile",
    "provider_profile",
    "clinic_profile",
    "pharmacy_profile",
    "mobile_clinic_profile",
    "drone_mission_record",
    "predictive_intelligence_record",
    "audit_receipt"
  ]);

  const DATABASE_ENV_NAMES = Object.freeze([
    "DATABASE_URL",
    "NEXUS_DATABASE_URL",
    "SUPABASE_URL",
    "SUPABASE_SERVICE_ROLE_KEY",
    "FIREBASE_PROJECT_ID",
    "MONGODB_URI"
  ]);

  function now() {
    return new Date().toISOString();
  }

  function id(prefix = "nexus-memory") {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function envPresent(env = {}, name = "") {
    const value = String(env[name] || "").trim();
    return Boolean(value && !/replace|your-|todo|changeme/i.test(value));
  }

  function databaseReadiness(env = {}) {
    const configuredEnvNames = DATABASE_ENV_NAMES.filter(name => envPresent(env, name));
    const missingEnvNames = DATABASE_ENV_NAMES.filter(name => !configuredEnvNames.includes(name));
    return {
      configured: configuredEnvNames.length > 0,
      status: configuredEnvNames.length ? "database_configured" : "database_unavailable",
      configuredEnvNames,
      missingEnvNames,
      supportedEnvNames: DATABASE_ENV_NAMES.slice(),
      secretValuesExposed: false
    };
  }

  function persistenceStatus(env = {}, fallbackScope = "local_browser") {
    const database = databaseReadiness(env);
    return {
      ok: true,
      persistenceScope: database.configured ? "database_configured" : fallbackScope,
      message: database.configured
        ? "Production database configuration detected. Runtime writes still use the configured app storage path."
        : fallbackScope === "local_browser"
          ? "Local memory active. Production database not connected."
          : "Local/dev file memory active. Production database not connected.",
      database,
      noSecretsExposed: true
    };
  }

  function normalizeType(type = "") {
    const normalized = String(type || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
    return normalized || "general_memory_record";
  }

  function createReceipt({
    relatedRecordId = "",
    action = "memory_recorded",
    result = "Memory action completed locally.",
    status = "completed_local",
    persistenceScope = "local_browser",
    actorRole = "Standard User",
    blockedReason = "",
    nextStep = "Review saved memory before any external action."
  } = {}) {
    return {
      receiptId: id("nexus-memory-receipt"),
      relatedRecordId,
      action,
      result,
      status,
      timestamp: now(),
      persistenceScope,
      actorRole,
      blockedReason,
      nextStep,
      noExternalExecutionAuthorized: true
    };
  }

  function normalizeRecord(input = {}, options = {}) {
    const createdAt = input.createdAt || now();
    const status = input.status || "active";
    const persistenceScope = input.persistenceScope || options.persistenceScope || "local_browser";
    return {
      id: input.id || id("nexus-memory-record"),
      type: normalizeType(input.type || options.type),
      title: input.title || input.name || "Nexus memory record",
      name: input.name || input.title || "Nexus memory record",
      status,
      createdAt,
      updatedAt: input.updatedAt || createdAt,
      archivedAt: input.archivedAt || "",
      ownerRole: input.ownerRole || input.userRole || options.ownerRole || "Standard User",
      userRole: input.userRole || input.ownerRole || options.ownerRole || "Standard User",
      sourceMode: input.sourceMode || options.sourceMode || "standard_user",
      payload: input.payload && typeof input.payload === "object" ? input.payload : {},
      consentStatus: input.consentStatus || options.consentStatus || "not_required_for_local_memory",
      riskLevel: input.riskLevel || options.riskLevel || "low",
      relatedRecordIds: Array.isArray(input.relatedRecordIds) ? input.relatedRecordIds : [],
      receiptIds: Array.isArray(input.receiptIds) ? input.receiptIds : [],
      persistenceScope,
      safetyNote: input.safetyNote || "Local Nexus memory. Not a production medical, financial, legal, provider, payment, dispatch, or emergency record unless configured compliance/database controls are active.",
      noExternalExecutionAuthorized: true
    };
  }

  function emptyState(status = persistenceStatus({}, "local_browser")) {
    return {
      version: 1,
      status,
      records: [],
      receipts: [],
      updatedAt: now()
    };
  }

  function createMemoryStore(initialState = null, options = {}) {
    const state = initialState && typeof initialState === "object"
      ? { ...emptyState(options.status), ...initialState }
      : emptyState(options.status);
    state.records = Array.isArray(state.records) ? state.records.map(record => normalizeRecord(record, options)) : [];
    state.receipts = Array.isArray(state.receipts) ? state.receipts : [];
    const touch = () => { state.updatedAt = now(); return state; };
    return {
      state,
      status() {
        return {
          ...state.status,
          recordCount: state.records.length,
          activeCount: state.records.filter(record => !/archived|inactive|deceased|closed|cancelled/i.test(record.status)).length,
          archivedCount: state.records.filter(record => /archived|inactive|deceased|closed|cancelled/i.test(record.status)).length,
          receiptCount: state.receipts.length,
          updatedAt: state.updatedAt
        };
      },
      createRecord(input = {}) {
        const record = normalizeRecord(input, { ...options, persistenceScope: state.status?.persistenceScope || options.persistenceScope });
        const receipt = createReceipt({
          relatedRecordId: record.id,
          action: "create_record",
          result: `${record.title} saved ${record.persistenceScope === "database_configured" ? "through configured storage" : "locally"}.`,
          persistenceScope: record.persistenceScope,
          actorRole: record.ownerRole,
          nextStep: "Record can be reviewed, updated, archived, or used by predictive planning."
        });
        record.receiptIds = [receipt.receiptId, ...record.receiptIds];
        state.records = [record, ...state.records.filter(item => item.id !== record.id)];
        state.receipts = [receipt, ...state.receipts].slice(0, 200);
        touch();
        return { ok: true, record, receipt, state: this.snapshot() };
      },
      readRecord(recordId = "") {
        const record = state.records.find(item => item.id === recordId) || null;
        return { ok: Boolean(record), record, status: record ? "found" : "not_found" };
      },
      updateRecord(recordId = "", updates = {}) {
        const index = state.records.findIndex(item => item.id === recordId);
        if (index === -1) return { ok: false, status: "not_found" };
        const record = normalizeRecord({ ...state.records[index], ...updates, id: recordId, updatedAt: now() }, options);
        const receipt = createReceipt({
          relatedRecordId: record.id,
          action: "update_record",
          result: `${record.title} updated locally.`,
          persistenceScope: record.persistenceScope,
          actorRole: record.ownerRole,
          nextStep: "Review the updated record before any gated workflow."
        });
        record.receiptIds = [receipt.receiptId, ...(record.receiptIds || [])];
        state.records[index] = record;
        state.receipts = [receipt, ...state.receipts].slice(0, 200);
        touch();
        return { ok: true, record, receipt, state: this.snapshot() };
      },
      archiveRecord(recordId = "", archiveStatus = "archived", reason = "") {
        return this.updateRecord(recordId, {
          status: archiveStatus,
          archivedAt: now(),
          payload: { ...(state.records.find(item => item.id === recordId)?.payload || {}), archiveReason: reason }
        });
      },
      deleteLocalRecord(recordId = "", confirmedLocalClear = false) {
        if (!confirmedLocalClear) return { ok: false, status: "confirmation_required", message: "Local clear requires explicit confirmation. Archive is preferred for sensitive records." };
        const record = state.records.find(item => item.id === recordId) || null;
        state.records = state.records.filter(item => item.id !== recordId);
        const receipt = createReceipt({
          relatedRecordId: recordId,
          action: "clear_local_record",
          result: record ? `${record.title} cleared from local demo-safe memory.` : "Local record clear requested.",
          status: "local_record_cleared",
          persistenceScope: state.status?.persistenceScope || "local_browser",
          nextStep: "Use archive instead for sensitive or production records."
        });
        state.receipts = [receipt, ...state.receipts].slice(0, 200);
        touch();
        return { ok: true, record, receipt, state: this.snapshot() };
      },
      searchRecords({ type = "", status = "", sourceMode = "", query = "", includeArchived = true } = {}) {
        const q = String(query || "").toLowerCase();
        const records = state.records.filter(record => {
          if (type && record.type !== normalizeType(type)) return false;
          if (status && record.status !== status) return false;
          if (sourceMode && record.sourceMode !== sourceMode) return false;
          if (!includeArchived && /archived|inactive|deceased|closed|cancelled/i.test(record.status)) return false;
          if (q && !`${record.title} ${record.name} ${record.type} ${JSON.stringify(record.payload || {})}`.toLowerCase().includes(q)) return false;
          return true;
        });
        return { ok: true, records, count: records.length };
      },
      listRecords(type = "", options = {}) {
        return this.searchRecords({ ...options, type });
      },
      createReceipt(input = {}) {
        const receipt = createReceipt({ ...input, persistenceScope: input.persistenceScope || state.status?.persistenceScope || "local_browser" });
        state.receipts = [receipt, ...state.receipts].slice(0, 200);
        const record = state.records.find(item => item.id === receipt.relatedRecordId);
        if (record) {
          record.receiptIds = [receipt.receiptId, ...(record.receiptIds || [])];
          record.updatedAt = now();
        }
        touch();
        return { ok: true, receipt, state: this.snapshot() };
      },
      predictiveContext() {
        return {
          activeRecords: state.records.filter(record => !/archived|inactive|deceased|closed|cancelled/i.test(record.status)),
          archivedRecords: state.records.filter(record => /archived|inactive|deceased|closed|cancelled/i.test(record.status)),
          receipts: state.receipts.slice(0, 30),
          signals: state.records.map(record => ({
            recordId: record.id,
            type: record.type,
            status: record.status,
            riskLevel: record.riskLevel,
            sourceMode: record.sourceMode,
            title: record.title,
            missingData: record.payload?.missingData || [],
            updatedAt: record.updatedAt
          })),
          noExternalExecutionAuthorized: true
        };
      },
      snapshot() {
        return {
          version: state.version,
          status: this.status(),
          records: state.records.slice(),
          receipts: state.receipts.slice(),
          predictiveContext: this.predictiveContext(),
          updatedAt: state.updatedAt
        };
      }
    };
  }

  return {
    MEMORY_TYPES,
    DATABASE_ENV_NAMES,
    databaseReadiness,
    persistenceStatus,
    normalizeRecord,
    createReceipt,
    emptyState,
    createMemoryStore
  };
});
