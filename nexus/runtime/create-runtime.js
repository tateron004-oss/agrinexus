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
const { ObservabilityRepository } = require("../observability/event-repository.js");
const { ModelGovernanceRepository } = require("../models/repository.js");
const { OutcomeRepository } = require("../verification/outcome-repository.js");
const { ApplicationRegistry } = require("../apps/registry.js");
const { defaultApplicationManifests } = require("../apps/default-manifests.js");
const { OpenEndedPlanner } = require("../brain/planner.js");
const { AgentService } = require("./agent-service.js");
const { OpenAiPlanningModel } = require("../brain/openai-planning-model.js");
const { RecordRepository } = require("../data/record-repository.js");
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
const { BehaviorSpine } = require("./behavior-spine.js");
const { CapabilityAdapterRegistry } = require("../tools/capability-adapter-registry.js");
const { OutcomeVerifierRegistry } = require("../verification/verifier-registry.js");
const { CapabilityExecutionAuthority } = require("./capability-execution-authority.js");
const { AuthorityCoverage } = require("./authority-coverage.js");

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
  const observability = new ObservabilityRepository(db);
  const models = new ModelGovernanceRepository(db);
  const outcomes = new OutcomeRepository(db);
  const records = new RecordRepository(db);
  const workspaceMigrations = new WorkspaceMigrationRepository(db);
  const devices = new DeviceRepository(db);
  const deviceTokens = env.NEXUS_DEVICE_TOKEN_KEY ? new DeviceTokenVault(env.NEXUS_DEVICE_TOKEN_KEY) : null;
  const notifications = new NotificationRepository(db);
  const dataLifecycle = new DataLifecycleRepository(db);
  const schedules = new ScheduleRepository(db);
  const applications = new ApplicationRegistry(defaultApplicationManifests());
  const cutover = new WorkspaceCutoverPolicy({migrations:workspaceMigrations,applications});
  const providers = createProviderCatalog({ env, fetchFn });
  const acceptance = new ProductionAcceptanceRepository(db);
  const path2Evidence = new Path2EvidenceRepository(db);
  const objectStorage = createObjectStore(env);
  const governedExecutors = Object.assign({}, providers.executors, executors);
  const adapters = new CapabilityAdapterRegistry();
  const verifiers = new OutcomeVerifierRegistry();
  const verifyOutcome = verifier || (input => providers.verify(input));
  for (const [toolId, execute] of Object.entries(governedExecutors)) {
    adapters.register({ toolId, implementation: `authoritative:${toolId}`, provider: providers.executors[toolId] ? "canonical-provider" : "runtime", execute });
    verifiers.register({ toolId, method: "provider_receipt", verify: verifyOutcome });
  }
  const authority = new CapabilityExecutionAuthority({ adapters, verifiers,
    observe: event => observability.record({ tenantId: event.tenantId, actorId: event.actorId,
      traceId: event.traceId, correlationId: event.correlationId, taskId: event.taskId,
      component: "capability-execution-authority", eventType: event.eventType,
      outcome: event.eventType.endsWith(".failed") ? "failed" : "observed", metadata: event }) });
  const authorityCoverage = new AuthorityCoverage({ applications, tools, adapters, verifiers });
  const engine = new AuthoritativeTaskEngine({ conversations, tasks, tools, executions, consents,
    audit, executors: governedExecutors, verifier: verifyOutcome, authority });
  const model = planningModel || (config.ai.openaiApiKey ? new OpenAiPlanningModel({ apiKey: config.ai.openaiApiKey, model: config.ai.model }) : null);
  const planner = model ? new OpenEndedPlanner({ model, tools, applications, memory }) : null;
  const agent = planner ? new AgentService({ planner, engine, tasks, conversations, audit, cutover }) : null;
  const behavior = agent ? new BehaviorSpine({ agent, engine, tasks, conversations }) : null;
  const ready = providers.register(tools);
  return Object.freeze({ config, adapter, db, conversations, tasks, executions, tools, consents,
    audit, memory, jobs, access, artifacts, sync, observability, models, outcomes, records, workspaceMigrations, cutover, devices, deviceTokens, notifications, dataLifecycle, schedules, applications,
    engine, planner, agent, behavior, providers, adapters, verifiers, authority, authorityCoverage, acceptance, path2Evidence, objectStorage, ready,
    async close() { await adapter.close(); } });
}

module.exports = Object.freeze({ createRuntime });
