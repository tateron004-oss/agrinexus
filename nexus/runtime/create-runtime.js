const { readConfig, assertProductionConfig } = require("../../foundation/src/config.js");
const { createDatabaseRuntime } = require("../../foundation/src/runtime/database.js");
const { createPostgresAdapter } = require("../../foundation/src/runtime/postgres-adapter.js");
const { ConversationRepository } = require("../data/conversation-repository.js");
const { TaskRepository } = require("../data/task-repository.js");
const { ExecutionRepository } = require("../data/execution-repository.js");
const { ToolRegistry } = require("../tools/registry.js");
const { ConsentRepository } = require("../consent/repository.js");
const { AuditRepository } = require("../audit/repository.js");
const { MemoryRepository } = require("../memory/repository.js");
const { JobRepository } = require("../workers/job-repository.js");
const { AuthoritativeTaskEngine } = require("./authoritative-task-engine.js");
const { AccessControl } = require("../identity/access-control.js");
const { ArtifactRepository } = require("../storage/artifact-repository.js");
const { SyncRepository } = require("../sync/repository.js");
const { createOfflineSyncStatusExecutor, verifyOfflineSyncStatusOutcome } = require("../sync/status-executor.js");
const { ObservabilityRepository } = require("../observability/operations-repository.js");
const { ModelGovernanceRepository } = require("../models/repository.js");
const { OutcomeRepository } = require("../verification/outcome-repository.js");
const { ApplicationRegistry } = require("../apps/registry.js");
const { defaultApplicationManifests } = require("../apps/default-manifests.js");
const { OpenEndedPlanner } = require("../brain/planner.js");
const { AgentService } = require("./agent-service.js");
const { OpenAiPlanningModel } = require("../brain/openai-planning-model.js");
const { RecordRepository } = require("../data/record-repository.js");
const { DocumentRepository } = require("../data/document-repository.js");
const { WorkspaceStateRepository } = require("../apps/workspace-state-repository.js");
const { WorkspaceMigrationRepository } = require("../apps/migration-repository.js");
const { DeviceRepository } = require("../devices/repository.js");
const { NotificationRepository } = require("../notifications/repository.js");
const { DataLifecycleRepository } = require("../security/data-lifecycle-repository.js");
const { ScheduleRepository } = require("../schedules/repository.js");
const { createProviderCatalog } = require("../tools/provider-catalog.js");
const { WorkspaceCutoverPolicy } = require("../apps/cutover-policy.js");
const { DeviceTokenVault } = require("../security/device-token-vault.js");
const { ProductionAcceptanceRepository } = require("../acceptance/repository.js");
const { createObjectStore } = require("../storage/object-store.js");
const { Path2EvidenceRepository } = require("../path2/evidence-repository.js");
const { AutonomyControlRepository } = require("../security/autonomy-control-repository.js");
const { BehaviorSpine } = require("./behavior-spine.js");
const { CapabilityAdapterRegistry } = require("../tools/capability-adapter-registry.js");
const { OutcomeVerifierRegistry } = require("../verification/verifier-registry.js");
const { CapabilityExecutionAuthority } = require("./capability-execution-authority.js");
const { AuthorityCoverage } = require("./authority-coverage.js");
const { createReminderScheduleExecutor, verifyReminderScheduleOutcome } = require("../reminders/executor.js");
const { createRemindersListExecutor, verifyRemindersListOutcome, createRemindersCancelExecutor, verifyRemindersCancelOutcome } = require("../reminders/manage-executor.js");
const { createCommunicationsSendExecutor, verifyCommunicationsSendOutcome } = require("../communications/executor.js");
const { createDocumentsCreateExecutor, verifyDocumentsCreateOutcome } = require("../documents/executor.js");
const { createDocumentsReadExecutor, verifyDocumentsReadOutcome } = require("../documents/read-executor.js");
const { createListsCreateExecutor, verifyListsCreateOutcome, createListsReadExecutor, verifyListsReadOutcome,
  createListsUpdateExecutor, verifyListsUpdateOutcome } = require("../lists/executor.js");
const { createMapsViewExecutor, verifyMapsViewOutcome } = require("../maps/executor.js");
const { createTelehealthPrepareExecutor, verifyTelehealthPrepareOutcome, createOperationPlanExecutor, verifyOperationPlanOutcome } = require("../data/prepared-record-executors.js");
const { createHealthRecordExecutor, verifyHealthRecordOutcome } = require("../health/executor.js");
const { createChronicDiseaseIntakeExecutor, verifyChronicDiseaseIntakeOutcome, createChronicDiseaseReadingExecutor,
  verifyChronicDiseaseReadingOutcome, createChronicDiseaseSummaryExecutor, verifyChronicDiseaseSummaryOutcome } = require("../health/chronic-executor.js");
const { createPharmacyFindExecutor, verifyPharmacyFindOutcome, createClinicFindExecutor, verifyClinicFindOutcome } = require("../health/places-executor.js");
const { createBusinessExecutor, verifyBusinessOutcome } = require("../business/authoritative-executor.js");
const { BusinessRepository } = require("../business/repository.js");
const { createBriefService } = require("../brief/service.js");
const { BriefSettingsRepository } = require("../brief/settings.js");
const { createWeatherAlertService } = require("../alerts/service.js");
const { WeatherAlertSettingsRepository } = require("../alerts/settings.js");

function createRuntime({ env = process.env, executors = {}, verifier, planningModel, logger = console, fetchFn } = {}) {
  const config = assertProductionConfig(readConfig(env));
  const adapter = createPostgresAdapter(config);
  if (!adapter) throw new Error("PostgreSQL is required for the authoritative Nexus runtime.");
  const db = createDatabaseRuntime({ adapter, logger });
  const conversations = new ConversationRepository(db);
  const tasks = new TaskRepository(db);
  const executions = new ExecutionRepository(db);
  const tools = new ToolRegistry(db);
  const consents = new ConsentRepository(db);
  const audit = new AuditRepository(db);
  const memory = new MemoryRepository(db);
  const jobs = new JobRepository(db);
  const access = new AccessControl(db);
  const artifacts = new ArtifactRepository(db);
  const sync = new SyncRepository(db);
  const observability = new ObservabilityRepository(db, { dailyCostLimitCents: env.NEXUS_DAILY_COST_LIMIT_CENTS || 0 });
  const models = new ModelGovernanceRepository(db);
  const outcomes = new OutcomeRepository(db);
  const records = new RecordRepository(db);
  const businessRecords = new BusinessRepository(db);
  const documents = new DocumentRepository(db);
  const workspaceStates = new WorkspaceStateRepository(records);
  const autonomyControl = new AutonomyControlRepository(records);
  const workspaceMigrations = new WorkspaceMigrationRepository(db);
  const devices = new DeviceRepository(db);
  const deviceTokens = env.NEXUS_DEVICE_TOKEN_KEY ? new DeviceTokenVault(env.NEXUS_DEVICE_TOKEN_KEY) : null;
  const notifications = new NotificationRepository(db);
  const dataLifecycle = new DataLifecycleRepository(db);
  const schedules = new ScheduleRepository(db);
  const applications = new ApplicationRegistry(defaultApplicationManifests());
  const providers = createProviderCatalog({ env, fetchFn });
  const acceptance = new ProductionAcceptanceRepository(db);
  const path2Evidence = new Path2EvidenceRepository(db);
  const objectStorage = createObjectStore(env);
  // A growing set of canonical tools gets a REAL local/direct executor
  // instead of the scripts/provider-engines.js mock every other tool here
  // still uses -- none of these can produce that mock's signed HMAC
  // provider receipt, so each also needs its own verifier rather than the
  // shared provider_receipt check below. reminders.schedule was the first
  // (writes a real row via NotificationRepository); this list is the
  // reusable pattern for adding more, not a ceiling.
  const LOCAL_EXECUTORS = {
    "reminders.schedule": { create: () => createReminderScheduleExecutor({ notifications }), verify: verifyReminderScheduleOutcome, method: "local_notification_enqueue" },
    "reminders.list": { create: () => createRemindersListExecutor({ notifications }), verify: verifyRemindersListOutcome, method: "real_reminder_lookup" },
    "reminders.cancel": { create: () => createRemindersCancelExecutor({ notifications }), verify: verifyRemindersCancelOutcome, method: "real_reminder_cancel" },
    "communications.send": { create: () => createCommunicationsSendExecutor({ env }), verify: verifyCommunicationsSendOutcome, method: "real_provider_send" },
    "documents.create": { create: () => createDocumentsCreateExecutor({ env, documents }), verify: verifyDocumentsCreateOutcome, method: "real_local_export" },
    "documents.read": { create: () => createDocumentsReadExecutor({ documents }), verify: verifyDocumentsReadOutcome, method: "real_document_lookup" },
    "lists.create": { create: () => createListsCreateExecutor({ records }), verify: verifyListsCreateOutcome, method: "real_record_write" },
    "lists.read": { create: () => createListsReadExecutor({ records }), verify: verifyListsReadOutcome, method: "real_record_lookup" },
    "lists.update": { create: () => createListsUpdateExecutor({ records }), verify: verifyListsUpdateOutcome, method: "real_record_write" },
    "maps.view": { create: () => createMapsViewExecutor({ env }), verify: verifyMapsViewOutcome, method: "real_route_computation" },
    "health.record": { create: () => createHealthRecordExecutor({ records }), verify: verifyHealthRecordOutcome, method: "real_record_write" },
    "telehealth.prepare": { create: () => createTelehealthPrepareExecutor({ records }), verify: verifyTelehealthPrepareOutcome, method: "real_record_write" },
    "drone.plan": { create: () => createOperationPlanExecutor({ records }), verify: verifyOperationPlanOutcome, method: "real_record_write" },
    "offline.sync": { create: () => createOfflineSyncStatusExecutor({ sync }), verify: verifyOfflineSyncStatusOutcome, method: "real_server_state" },
    "health.chronic-intake": { create: () => createChronicDiseaseIntakeExecutor({ records }), verify: verifyChronicDiseaseIntakeOutcome, method: "real_record_write" },
    "health.chronic-reading": { create: () => createChronicDiseaseReadingExecutor({ records }), verify: verifyChronicDiseaseReadingOutcome, method: "real_record_write" },
    "health.chronic-summary": { create: () => createChronicDiseaseSummaryExecutor({ records }), verify: verifyChronicDiseaseSummaryOutcome, method: "real_record_lookup" },
    "pharmacy.find": { create: () => createPharmacyFindExecutor({ env }), verify: verifyPharmacyFindOutcome, method: "real_osm_place_search_with_local_fallback" },
    "clinic.find": { create: () => createClinicFindExecutor({ env }), verify: verifyClinicFindOutcome, method: "real_osm_place_search_with_local_fallback" },
    // Confirmed live: a real user's typed "add a donor"/"log an expense"/etc.
    // never reached nexus/business/* at all (see canonical-provider-
    // definitions.js's note on business.manage/business.query) -- both tools
    // share this one executor since nexus/business/voice-dispatch.js's run()
    // already branches internally on whether the command is a read or a
    // write.
    "business.manage": { create: () => createBusinessExecutor({ repository: businessRecords, access, consents, env }), verify: verifyBusinessOutcome, method: "real_business_workspace_write" },
    "business.query": { create: () => createBusinessExecutor({ repository: businessRecords, access, consents, env }), verify: verifyBusinessOutcome, method: "real_business_workspace_write" }
  };
  const localExecutorFns = Object.fromEntries(Object.entries(LOCAL_EXECUTORS).map(([toolId, entry]) => [toolId, entry.create()]));
  const governedExecutors = Object.assign({}, providers.executors, localExecutorFns, executors);
  const adapters = new CapabilityAdapterRegistry();
  const verifiers = new OutcomeVerifierRegistry();
  const verifyOutcome = verifier || (input => providers.verify(input));
  for (const [toolId, execute] of Object.entries(governedExecutors)) {
    const local = LOCAL_EXECUTORS[toolId] && !executors[toolId] ? LOCAL_EXECUTORS[toolId] : null;
    adapters.register({ toolId, implementation: `authoritative:${toolId}`, provider: providers.executors[toolId] ? "canonical-provider" : "runtime", execute });
    verifiers.register({ toolId, method: local ? local.method : "provider_receipt",
      verify: local ? local.verify : verifyOutcome });
  }
  const authority = new CapabilityExecutionAuthority({ adapters, verifiers,
    observe: event => observability.record({ tenantId: event.tenantId, actorId: event.actorId,
      traceId: event.traceId, correlationId: event.correlationId, taskId: event.taskId,
      component: "capability-execution-authority", eventType: event.eventType,
      outcome: event.eventType.endsWith(".failed") ? "failed" : "observed", metadata: event }) });
  const authorityCoverage = new AuthorityCoverage({ applications, tools, adapters, verifiers });
  const cutover = new WorkspaceCutoverPolicy({ migrations: workspaceMigrations, applications, authorityCoverage });
  const engine = new AuthoritativeTaskEngine({ conversations, tasks, tools, executions, consents,
    audit, observability, executors: governedExecutors, verifier: verifyOutcome, authority, jobs, autonomyControl });
  const model = planningModel || (config.ai.openaiApiKey ? new OpenAiPlanningModel({ apiKey: config.ai.openaiApiKey, model: config.ai.model }) : null);
  const brief = createBriefService({ notifications, settings: new BriefSettingsRepository(db), memory, devices, autonomyControl });
  const alerts = createWeatherAlertService({ notifications, settings: new WeatherAlertSettingsRepository(db), memory, devices, autonomyControl });
  const planner = model ? new OpenEndedPlanner({ model, tools, applications, memory, brief, alerts }) : null;
  const agent = planner ? new AgentService({ planner, engine, tasks, conversations, audit, cutover }) : null;
  const behavior = agent ? new BehaviorSpine({ agent, engine, tasks, conversations, workspaceStates }) : null;
  const ready = providers.register(tools);
  return Object.freeze({ config, adapter, db, brief, alerts, conversations, tasks, executions, tools, consents,
    audit, memory, jobs, access, artifacts, sync, observability, models, outcomes, records, documents, workspaceStates, workspaceMigrations, autonomyControl, cutover, devices, deviceTokens, notifications, dataLifecycle, schedules, applications,
    engine, planner, agent, behavior, providers, adapters, verifiers, authority, authorityCoverage, acceptance, path2Evidence, objectStorage, ready,
    async close() { await adapter.close(); } });
}

module.exports = Object.freeze({ createRuntime });
