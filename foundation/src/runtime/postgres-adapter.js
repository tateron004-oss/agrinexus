function loadPg() {
  try {
    return require("pg");
  } catch {
    return null;
  }
}

class PostgresAdapter {
  constructor({ connectionString, ssl = false, pool, poolMax = 20, idleTimeoutMs = 30000,
    connectionTimeoutMs = 10000, statementTimeoutMs = 60000 }) {
    const pg = loadPg();
    if (!pg && !pool) {
      throw new Error("The pg package is not installed. Install it before using DATABASE_URL migrations.");
    }
    this.pool = pool || new pg.Pool({
      connectionString,
      ssl: ssl ? { rejectUnauthorized: false } : false,
      max: poolMax,
      idleTimeoutMillis: idleTimeoutMs,
      connectionTimeoutMillis: connectionTimeoutMs,
      statement_timeout: statementTimeoutMs,
      application_name: "agrinexus-foundation"
    });
  }

  async query(sql, params = []) {
    return this.pool.query(sql, params);
  }

  async transaction(work) {
    const client = await this.pool.connect();
    const trx = {
      query: (sql, params = []) => client.query(sql, params),
      isConnected: true
    };
    try {
      await client.query("begin");
      const result = await work(trx);
      await client.query("commit");
      return result;
    } catch (error) {
      await client.query("rollback");
      throw error;
    } finally {
      client.release();
    }
  }

  async close() {
    await this.pool.end();
  }
}

function createPostgresAdapter(config) {
  if (!config.database.url) return null;
  return new PostgresAdapter({
    connectionString: config.database.url,
    ssl: config.database.ssl,
    poolMax: config.database.poolMax,
    idleTimeoutMs: config.database.idleTimeoutMs,
    connectionTimeoutMs: config.database.connectionTimeoutMs,
    statementTimeoutMs: config.database.statementTimeoutMs
  });
}

module.exports = {
  PostgresAdapter,
  createPostgresAdapter
};
