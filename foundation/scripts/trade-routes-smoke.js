const { createFoundationRouter } = require("../src/app");
const { readConfig } = require("../src/config");
const { TradeRepository } = require("../src/modules/trade/repository");
const { TradeService } = require("../src/modules/trade/service");
const { TradeIntegrations } = require("../src/modules/trade/integrations");
const { createDatabaseRuntime } = require("../src/runtime/database");
const { createRequestContext } = require("../src/runtime/request-context");
const { permissionsForRoles } = require("../src/runtime/permissions");

class FakeAdapter {
  constructor() {
    this.product = { id: "product-1", tenant_id: "tenant-1", country_id: "country-1", name: "Cassava", base_price: 250, status: "active" };
    this.route = { id: "route-1", name: "West Africa Corridor", first_checkpoint_id: "checkpoint-1", first_checkpoint_name: "Lagos Port" };
    this.checkpoints = [
      { id: "checkpoint-1", route_id: "route-1", sequence: 1, name: "Lagos Port" },
      { id: "checkpoint-2", route_id: "route-1", sequence: 2, name: "Ibadan Hub" }
    ];
    this.orders = [];
    this.wallet = { id: "wallet-1", tenant_id: "tenant-1", user_id: "user-1", balance: 2450 };
    this.transactions = [];
  }

  async query(sql, params) {
    if (sql.includes("from products") && sql.includes("order by")) return { rows: [this.product] };
    if (sql.includes("from products") && sql.includes("limit 1")) return { rows: [this.product] };
    if (sql.includes("from routes")) return { rows: [this.route] };
    if (sql.includes("from route_checkpoints")) return { rows: this.checkpoints };
    if (sql.includes("insert into trade_orders")) {
      const order = {
        id: `order-${this.orders.length + 1}`,
        tenant_id: params[0],
        product_id: params[1],
        country_id: params[2],
        route_id: params[3],
        active_checkpoint_id: params[4],
        order_number: params[5],
        stage: "Packed",
        buyer_interest: params[6],
        total_amount: params[7],
        created_by: params[8]
      };
      this.orders.unshift(order);
      return { rows: [order] };
    }
    if (sql.includes("from trade_orders") && sql.includes("order by")) return { rows: this.orders };
    if (sql.includes("from trade_orders") && sql.includes("limit 1")) return { rows: this.orders.filter(order => order.id === params[1]) };
    if (sql.includes("update trade_orders")) {
      const order = this.orders.find(item => item.id === params[0]);
      if (!order) return { rows: [] };
      order.stage = params[1] || order.stage;
      order.active_checkpoint_id = params[2] || order.active_checkpoint_id;
      order.buyer_interest = params[3] ?? order.buyer_interest;
      return { rows: [order] };
    }
    if (sql.includes("from wallet_accounts")) return { rows: [this.wallet] };
    if (sql.includes("insert into wallet_transactions")) {
      const tx = { id: `tx-${this.transactions.length + 1}`, wallet_account_id: params[0], provider: params[1], amount: params[2], provider_reference: params[3], status: "posted" };
      this.transactions.push(tx);
      return { rows: [tx] };
    }
    if (sql.includes("update wallet_accounts")) {
      this.wallet.balance += params[1];
      return { rows: [this.wallet] };
    }
    if (sql.includes("insert into audit_events")) return { rows: [] };
    return { rows: [] };
  }
}

async function main() {
  const config = readConfig({ SESSION_SECRET: "test-secret" });
  const db = createDatabaseRuntime({ adapter: new FakeAdapter() });
  const tradeRepository = new TradeRepository(db);
  const tradeService = new TradeService({ repository: tradeRepository, db, integrations: new TradeIntegrations() });
  const router = createFoundationRouter({ tradeRepository, tradeService, config });
  const context = createRequestContext({
    tenantId: "tenant-1",
    userId: "user-1",
    roles: ["coordinator"],
    permissions: permissionsForRoles(["coordinator"])
  });

  const products = await router.handle({ method: "GET", url: "/trade/products", headers: {}, context });
  if (products.status !== 200 || products.body.products.length !== 1) throw new Error("Expected product list.");

  const create = await router.handle({ method: "POST", url: "/trade/orders", headers: {}, body: { productId: "product-1" }, context });
  if (create.status !== 201 || create.body.order.stage !== "Packed") throw new Error("Expected created order.");

  const orderId = create.body.order.id;
  const advance = await router.handle({ method: "POST", url: `/trade/orders/${orderId}/advance`, headers: {}, body: {}, context });
  if (advance.status !== 200 || advance.body.order.stage !== "In transit") throw new Error("Expected advanced order.");

  const checkpoint = await router.handle({ method: "POST", url: `/trade/orders/${orderId}/checkpoint`, headers: {}, body: {}, context });
  if (checkpoint.status !== 200 || checkpoint.body.checkpoint.id !== "checkpoint-2") throw new Error("Expected checkpoint move.");

  const wallet = await router.handle({ method: "POST", url: "/wallet/transactions", headers: {}, body: { provider: "M-Pesa", amount: 120 }, context });
  if (wallet.status !== 201 || wallet.body.transaction.provider !== "M-Pesa") throw new Error("Expected wallet transaction.");

  console.log("Trade routes smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
