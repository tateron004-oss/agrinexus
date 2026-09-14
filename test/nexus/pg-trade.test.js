const test = require("node:test");
const assert = require("node:assert/strict");
const pgTrade = require("../../server/pg-trade.js");
const pgHealthIntakes = require("../../server/pg-health-intakes.js");

function stubPool(handlers) {
  const calls = [];
  return {
    calls,
    query: async (sql, params = []) => {
      calls.push({ sql, params });
      for (const [pattern, respond] of handlers) {
        if (pattern.test(sql)) return respond(params, calls);
      }
      throw new Error(`stubPool: no handler for query: ${sql}`);
    }
  };
}

test("upsertTradeOrder requires orderNumber", async () => {
  const pool = stubPool([]);
  await assert.rejects(() => pgTrade.upsertTradeOrder(pool, { countryId: "nigeria" }), /orderNumber is required/);
  assert.equal(pool.calls.length, 0);
});

test("upsertTradeOrder rejects (not silently resolves null) for an unmapped country", async () => {
  const pool = stubPool([]);
  await assert.rejects(
    () => pgTrade.upsertTradeOrder(pool, { orderNumber: "NX-TXN-1", countryId: "ghana" }),
    /no Postgres country mapping for "ghana"/
  );
  assert.equal(pool.calls.length, 0, "must not attempt a query for an unmapped country");
});

test("upsertTradeOrder inserts with an ON CONFLICT upsert on (tenant_id, order_number)", async () => {
  const pool = stubPool([
    [/^insert into trade_orders/, params => {
      assert.equal(params[0], pgHealthIntakes.DEMO_TENANT_ID);
      assert.equal(params[1], pgHealthIntakes.BLOB_COUNTRY_TO_PG_ID.nigeria);
      assert.equal(params[2], "NX-TXN-1");
      assert.equal(params[3], "draft");
      assert.equal(params[5], 500);
      return { rows: [{ id: "order-1", order_number: params[2] }] };
    }]
  ]);
  const created = await pgTrade.upsertTradeOrder(pool, { orderNumber: "NX-TXN-1", countryId: "nigeria", stage: "draft", totalAmount: 500 });
  assert.equal(created.order_number, "NX-TXN-1");
  assert.match(pool.calls[0].sql, /on conflict \(tenant_id, order_number\) do update/);
});

test("upsertTradeOrder defaults missing numeric fields to 0 rather than erroring", async () => {
  const pool = stubPool([
    [/^insert into trade_orders/, params => {
      assert.equal(params[4], 0, "buyerInterest should default to 0");
      assert.equal(params[5], 0, "totalAmount should default to 0");
      return { rows: [{ id: "order-2" }] };
    }]
  ]);
  await pgTrade.upsertTradeOrder(pool, { orderNumber: "NX-TXN-2", countryId: "kenya" });
});
