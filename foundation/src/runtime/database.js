class DatabaseUnavailableError extends Error {
  constructor(message = "Database adapter is not configured.") {
    super(message);
    this.name = "DatabaseUnavailableError";
  }
}

class DatabaseRuntime {
  constructor({ adapter, logger = console } = {}) {
    this.adapter = adapter || null;
    this.logger = logger;
  }

  get isConnected() {
    return Boolean(this.adapter);
  }

  async query(sql, params = []) {
    if (!this.adapter) throw new DatabaseUnavailableError();
    return this.adapter.query(sql, params);
  }

  async transaction(work) {
    if (!this.adapter) throw new DatabaseUnavailableError();
    if (this.adapter.transaction) return this.adapter.transaction(work);
    await this.query("begin");
    try {
      const result = await work(this);
      await this.query("commit");
      return result;
    } catch (error) {
      await this.query("rollback");
      throw error;
    }
  }
}

function createOfflineDatabaseRuntime(logger = console) {
  return new DatabaseRuntime({ logger });
}

function createDatabaseRuntime({ adapter, logger = console }) {
  return new DatabaseRuntime({ adapter, logger });
}

module.exports = {
  DatabaseRuntime,
  DatabaseUnavailableError,
  createOfflineDatabaseRuntime,
  createDatabaseRuntime
};
