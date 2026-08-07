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

function createRuntime({ env = process.env, executors = {}, verifier, planningModel, logger = console } = {}) {
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
  const notifications = new NotificationRepository(db);
  const dataLifecycle = new DataLifecycleRepository(db);
  const schedules = new ScheduleRepository(db);
  const applications = new ApplicationRegistry(defaultApplicationManifests());
  const engine = new AuthoritativeTaskEngine({ conversations, tasks, tools, executions, consents,
    audit, executors, verifier });
  const model = planningModel || (config.ai.openaiApiKey ? new OpenAiPlanningModel({ apiKey: config.ai.openaiApiKey, model: config.ai.model }) : null);
  const planner = model ? new OpenEndedPlanner({ model, tools, applications, memory }) : null;
  const agent = planner ? new AgentService({ planner, engine, tasks, audit }) : null;
  return Object.freeze({ config, adapter, db, conversations, tasks, executions, tools, consents,
    audit, memory, jobs, access, artifacts, sync, observability, models, outcomes, records, workspaceMigrations, devices, notifications, dataLifecycle, schedules, applications,
    engine, planner, agent,
    async close() { await adapter.close(); } });
}

module.exports = Object.freeze({ createRuntime });
