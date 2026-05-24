class TradeIntegrations {
  constructor({ payments, pricing, logistics } = {}) {
    this.payments = payments || new SandboxPaymentAdapter();
    this.pricing = pricing || new SandboxPricingAdapter();
    this.logistics = logistics || new SandboxLogisticsAdapter();
  }
}

class SandboxPaymentAdapter {
  constructor() {
    this.transactions = [];
  }

  async postPayment({ provider, amount, walletAccountId }) {
    const transaction = {
      id: `pay_${this.transactions.length + 1}`,
      provider,
      amount,
      walletAccountId,
      status: "posted",
      providerReference: `sandbox-${provider}-${this.transactions.length + 1}`
    };
    this.transactions.push(transaction);
    return transaction;
  }
}

class SandboxPricingAdapter {
  async scoreBuyerDemand({ product, route }) {
    const base = product.name.length * 7 + route.name.length * 3;
    return Math.min(99, 55 + (base % 35));
  }
}

class SandboxLogisticsAdapter {
  async advanceOrder({ order, stage, checkpoint }) {
    return {
      id: `log_${order.id}_${Date.now()}`,
      orderId: order.id,
      stage,
      checkpointId: checkpoint?.id || null,
      checkpointName: checkpoint?.name || null,
      provider: "sandbox-logistics"
    };
  }
}

module.exports = {
  TradeIntegrations,
  SandboxPaymentAdapter,
  SandboxPricingAdapter,
  SandboxLogisticsAdapter
};
