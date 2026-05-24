const { json } = require("../../runtime/http");
const { requirePermission } = require("../../runtime/permissions");

function registerTradeRoutes(router, { tradeRepository, tradeService }) {
  router.add("GET /trade/products", requirePermission("core:read", async request => {
    const products = await tradeRepository.listProducts(request.context.tenantId);
    return json(200, { products });
  }));

  router.add("GET /trade/orders", requirePermission("trade:write", async request => {
    const orders = await tradeRepository.listOrders(request.context.tenantId);
    return json(200, { orders });
  }));

  router.add("POST /trade/orders", requirePermission("trade:write", async request => {
    return json(201, await tradeService.createOrder({
      context: request.context,
      productId: request.body.productId
    }));
  }));

  router.add("POST /trade/orders/:id/advance", requirePermission("trade:write", async request => {
    return json(200, await tradeService.advanceOrder({
      context: request.context,
      orderId: request.params.id
    }));
  }));

  router.add("POST /trade/orders/:id/checkpoint", requirePermission("trade:write", async request => {
    return json(200, await tradeService.moveCheckpoint({
      context: request.context,
      orderId: request.params.id
    }));
  }));

  router.add("GET /wallet", requirePermission("trade:write", async request => {
    const wallet = await tradeRepository.getWallet(request.context.tenantId, request.context.userId);
    if (!wallet) return json(404, { error: "Wallet account not found" });
    return json(200, { wallet });
  }));

  router.add("POST /wallet/transactions", requirePermission("trade:write", async request => {
    return json(201, await tradeService.fundWallet({
      context: request.context,
      provider: request.body.provider,
      amount: Number(request.body.amount || 0)
    }));
  }));
}

module.exports = { registerTradeRoutes };
