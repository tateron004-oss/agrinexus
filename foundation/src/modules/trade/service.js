const crypto = require("crypto");
const { recordAuditEvent } = require("../../runtime/audit");

class TradeService {
  constructor({ repository, db, integrations }) {
    this.repository = repository;
    this.db = db;
    this.integrations = integrations;
  }

  async createOrder({ context, productId }) {
    const product = await this.requiredProduct(context.tenantId, productId);
    const route = await this.repository.getRouteForCountry(context.tenantId, product.country_id);
    if (!route) throw new Error("Route not found for product country.");
    const buyerInterest = await this.integrations.pricing.scoreBuyerDemand({ product, route });
    const order = await this.repository.createOrder({
      tenantId: context.tenantId,
      product,
      route,
      orderNumber: `AN-ORD-${crypto.randomBytes(4).toString("hex").toUpperCase()}`,
      buyerInterest,
      createdBy: context.userId
    });
    await this.audit(context, "trade.order_created", order.id, {
      productId,
      routeId: route.id,
      buyerInterest
    });
    return { order, product, route };
  }

  async advanceOrder({ context, orderId }) {
    const order = await this.requiredOrder(context.tenantId, orderId);
    const nextStage = this.nextStage(order.stage);
    const updated = await this.repository.updateOrder(order.id, { stage: nextStage });
    const event = await this.integrations.logistics.advanceOrder({
      order: updated,
      stage: nextStage
    });
    await this.audit(context, "trade.order_advanced", order.id, { stage: nextStage, logisticsEventId: event.id });
    return { order: updated, logisticsEvent: event };
  }

  async moveCheckpoint({ context, orderId }) {
    const order = await this.requiredOrder(context.tenantId, orderId);
    const checkpoint = await this.repository.nextCheckpoint(order.route_id, order.active_checkpoint_id);
    if (!checkpoint) throw new Error("Next checkpoint not found.");
    const updated = await this.repository.updateOrder(order.id, {
      activeCheckpointId: checkpoint.id
    });
    const event = await this.integrations.logistics.advanceOrder({
      order: updated,
      stage: updated.stage,
      checkpoint
    });
    await this.audit(context, "trade.checkpoint_moved", order.id, { checkpointId: checkpoint.id, logisticsEventId: event.id });
    return { order: updated, checkpoint, logisticsEvent: event };
  }

  async fundWallet({ context, provider, amount }) {
    const wallet = await this.repository.getWallet(context.tenantId, context.userId);
    if (!wallet) throw new Error("Wallet account not found.");
    const payment = await this.integrations.payments.postPayment({
      provider,
      amount,
      walletAccountId: wallet.id
    });
    const transaction = await this.repository.postWalletTransaction({
      walletAccountId: wallet.id,
      provider,
      amount,
      providerReference: payment.providerReference
    });
    await this.audit(context, "trade.wallet_funded", transaction.id, { provider, amount, paymentId: payment.id });
    return { wallet, transaction, payment };
  }

  async requiredProduct(tenantId, productId) {
    const product = await this.repository.getProduct(tenantId, productId);
    if (!product) throw new Error("Product not found.");
    return product;
  }

  async requiredOrder(tenantId, orderId) {
    const order = await this.repository.getOrder(tenantId, orderId);
    if (!order) throw new Error("Trade order not found.");
    return order;
  }

  nextStage(stage) {
    const stages = ["Order created", "Packed", "In transit", "Delivered"];
    const index = stages.indexOf(stage);
    return stages[Math.min(stages.length - 1, index + 1)];
  }

  async audit(context, action, entityId, metadata) {
    return recordAuditEvent(this.db, context, {
      action,
      entityType: "trade",
      entityId,
      metadata
    });
  }
}

module.exports = { TradeService };
