const { createModule } = require("../../module-factory");

const tradeModule = createModule({
  name: "trade",
  owner: "market",
  responsibilities: [
    "Product catalog",
    "Trade orders",
    "Buyer demand",
    "Wallet accounts",
    "Provider-backed wallet transactions"
  ],
  routes: [
    "GET /trade/products",
    "POST /trade/orders",
    "POST /trade/orders/:id/advance",
    "GET /wallet",
    "POST /wallet/transactions"
  ],
  tables: ["products", "trade_orders", "wallet_accounts", "wallet_transactions"],
  integrations: ["M-Pesa", "MTN Mobile Money", "Airtel Money", "bank transfer provider", "market pricing provider"]
});

module.exports = { tradeModule };
