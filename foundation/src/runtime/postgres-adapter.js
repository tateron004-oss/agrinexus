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
    // Tracks, per client the pool hands out, the in-flight (or settled)
    // promise for that connection's own setup query below -- see query()/
    // transaction(), which await it before running real work on that same
    // client. A WeakMap so entries for closed/evicted clients are simply
    // garbage collected, never needing manual cleanup.
    this.clientReady = new WeakMap();
    if (!pool) {
      // statement_timeout must not go in the Pool config: node-postgres sends
      // it as a connection *startup* parameter, and a pooled (e.g. PgBouncer)
      // connection string rejects unrecognized startup parameters with
      // "unsupported startup parameter: statement_timeout". Apply it as a
      // normal SET on every new connection instead, which works through a
      // pooler as well as a direct connection.
      //
      // Confirmed live (2026-09-23): pg's Pool hands a freshly-connected
      // client to whoever is waiting as soon as the TCP handshake completes
      // -- it does not wait for anything done inside this "connect" handler.
      // The previous version fired this query without awaiting it, so the
      // caller's own first query on that same client could run concurrently
      // with this one, producing pg's "client.query() called while already
      // executing a query" deprecation warning (slated for removal, not
      // merely cosmetic). Recording the promise here and awaiting it in
      // query()/transaction() below guarantees this SET always completes
      // before any real query runs on that client.
      const timeoutMs = Number.isFinite(Number(statementTimeoutMs)) ? Math.max(0, Math.trunc(Number(statementTimeoutMs))) : 60000;
      this.pool.on("connect", client => {
        const ready = client.query(`set statement_timeout = ${timeoutMs}`).catch(error => {
          console.error("[postgres-adapter] failed to set statement_timeout on new connection:", error.message);
        });
        this.clientReady.set(client, ready);
      });
    }
  }

  async query(sql, params = []) {
    const client = await this.pool.connect();
    try {
      await this.clientReady.get(client);
      const result = await client.query(sql, params);
      client.release();
      return result;
    } catch (error) {
      // Matches pg's own Pool.query() convenience method (which this
      // replaces, to get access to the underlying client for the
      // clientReady await above): release with the error so the pool
      // discards a possibly-corrupted connection instead of handing it to
      // the next caller as if it were healthy. Released exactly once,
      // either here or on the success path above -- never both.
      client.release(error);
      throw error;
    }
  }

  async transaction(work) {
    const client = await this.pool.connect();
    await this.clientReady.get(client);
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
