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
      application_name: "agrinexus-foundation"
    });
    if (!pool) {
      // statement_timeout must not go in the Pool config: node-postgres sends
      // it as a connection *startup* parameter, and a pooled (e.g. PgBouncer)
      // connection string rejects unrecognized startup parameters with
      // "unsupported startup parameter: statement_timeout". Apply it as a
      // normal SET on every new connection instead, which works through a
      // pooler as well as a direct connection.
      const timeoutMs = Number.isFinite(Number(statementTimeoutMs)) ? Math.max(0, Math.trunc(Number(statementTimeoutMs))) : 60000;
      this.pool.on("connect", client => {
        client.query(`set statement_timeout = ${timeoutMs}`).catch(error => {
          console.error("[postgres-adapter] failed to set statement_timeout on new connection:", error.message);
        });
      });
    }
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
