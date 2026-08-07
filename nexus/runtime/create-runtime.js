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

function createRuntime({ env = process.env, executors = {}, verifier, logger = console } = {}) {
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
  const engine = new AuthoritativeTaskEngine({ conversations, tasks, tools, executions, consents,
    audit, executors, verifier });
  return Object.freeze({ config, adapter, db, conversations, tasks, executions, tools, consents,
    audit, memory, jobs, engine, async close() { await adapter.close(); } });
}

module.exports = Object.freeze({ createRuntime });
