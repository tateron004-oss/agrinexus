"use strict";

// Real relational trade-order storage against foundation/migrations'
// `trade_orders` table, used only when TRADE_STORE=postgres. Shadow-writes
// alongside the JSON-blob nexusPersistentOperations transactions store,
// which stays authoritative for the app's own UI reads (same additive
// rollout pattern as server/pg-health-intakes.js and server/pg-workforce.js).
//
// product_id/route_id/active_checkpoint_id/created_by are all nullable, so
// unlike workforce's job_applications this needs no second linked table --
// only country_id is a required field the blob transaction doesn't already
// collect, which is why this stayed blocked until a country field was added
// to transaction creation.

const { DEMO_TENANT_ID, pgCountryId } = require("./pg-health-intakes.js");

async function upsertTradeOrder(pool, { orderNumber, countryId, stage, buyerInterest, totalAmount, tenantId = DEMO_TENANT_ID }) {
  if (!orderNumber) throw new Error("pg-trade: orderNumber is required");
  const pgCountry = pgCountryId(countryId);
  // Throw rather than resolve null, matching pg-health-intakes.js: the
  // caller's shadow-write wrapper only logs on a rejected promise, so a
  // silent null here would mean an unmapped country fails with zero
  // observability.
  if (!pgCountry) throw new Error(`pg-trade: no Postgres country mapping for "${countryId}"`);
  const result = await pool.query(
    `insert into trade_orders (tenant_id, country_id, order_number, stage, buyer_interest, total_amount)
     values ($1, $2, $3, $4, $5, $6)
     on conflict (tenant_id, order_number) do update set
       stage = excluded.stage,
       buyer_interest = excluded.buyer_interest,
       total_amount = excluded.total_amount,
       updated_at = now()
     returning *`,
    [tenantId, pgCountry, orderNumber, stage || "Order created", Number.isFinite(buyerInterest) ? buyerInterest : 0, Number.isFinite(totalAmount) ? totalAmount : 0]
  );
  return result.rows[0] || null;
}

module.exports = { upsertTradeOrder };
