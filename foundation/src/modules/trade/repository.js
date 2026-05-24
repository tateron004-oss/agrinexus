class TradeRepository {
  constructor(db) {
    this.db = db;
  }

  async listProducts(tenantId) {
    const result = await this.db.query(
      `select p.*, c.name as country_name
       from products p
       left join countries c on c.id = p.country_id
       where p.tenant_id = $1 and p.status = 'active'
       order by p.name`,
      [tenantId]
    );
    return result.rows || [];
  }

  async getProduct(tenantId, productId) {
    const result = await this.db.query(
      `select *
       from products
       where tenant_id = $1 and id = $2
       limit 1`,
      [tenantId, productId]
    );
    return (result.rows || [])[0] || null;
  }

  async getRouteForCountry(tenantId, countryId) {
    const result = await this.db.query(
      `select r.*, rc.id as first_checkpoint_id, rc.name as first_checkpoint_name
       from routes r
       left join route_checkpoints rc on rc.route_id = r.id and rc.sequence = 1
       where r.tenant_id = $1 and r.country_id = $2
       order by r.created_at
       limit 1`,
      [tenantId, countryId]
    );
    return (result.rows || [])[0] || null;
  }

  async nextCheckpoint(routeId, currentCheckpointId) {
    const result = await this.db.query(
      `select *
       from route_checkpoints
       where route_id = $1
       order by sequence`,
      [routeId]
    );
    const checkpoints = result.rows || [];
    if (!checkpoints.length) return null;
    const index = checkpoints.findIndex(item => item.id === currentCheckpointId);
    return checkpoints[(index + 1 + checkpoints.length) % checkpoints.length];
  }

  async createOrder({ tenantId, product, route, orderNumber, buyerInterest, createdBy }) {
    const result = await this.db.query(
      `insert into trade_orders (tenant_id, product_id, country_id, route_id, active_checkpoint_id, order_number, stage, buyer_interest, total_amount, created_by)
       values ($1, $2, $3, $4, $5, $6, 'Packed', $7, $8, $9)
       returning *`,
      [
        tenantId,
        product.id,
        product.country_id,
        route.id,
        route.first_checkpoint_id,
        orderNumber,
        buyerInterest,
        product.base_price || 0,
        createdBy
      ]
    );
    return (result.rows || [])[0] || null;
  }

  async updateOrder(orderId, patch) {
    const result = await this.db.query(
      `update trade_orders
       set stage = coalesce($2, stage),
           active_checkpoint_id = coalesce($3, active_checkpoint_id),
           buyer_interest = coalesce($4, buyer_interest),
           updated_at = now()
       where id = $1
       returning *`,
      [orderId, patch.stage || null, patch.activeCheckpointId || null, patch.buyerInterest ?? null]
    );
    return (result.rows || [])[0] || null;
  }

  async listOrders(tenantId) {
    const result = await this.db.query(
      `select o.*, p.name as product_name, r.name as route_name, rc.name as checkpoint_name
       from trade_orders o
       left join products p on p.id = o.product_id
       left join routes r on r.id = o.route_id
       left join route_checkpoints rc on rc.id = o.active_checkpoint_id
       where o.tenant_id = $1
       order by o.created_at desc`,
      [tenantId]
    );
    return result.rows || [];
  }

  async getOrder(tenantId, orderId) {
    const result = await this.db.query(
      `select *
       from trade_orders
       where tenant_id = $1 and id = $2
       limit 1`,
      [tenantId, orderId]
    );
    return (result.rows || [])[0] || null;
  }

  async getWallet(tenantId, userId) {
    const result = await this.db.query(
      `select *
       from wallet_accounts
       where tenant_id = $1 and user_id = $2
       limit 1`,
      [tenantId, userId]
    );
    return (result.rows || [])[0] || null;
  }

  async postWalletTransaction({ walletAccountId, provider, amount, providerReference }) {
    const result = await this.db.query(
      `insert into wallet_transactions (wallet_account_id, provider, amount, provider_reference)
       values ($1, $2, $3, $4)
       returning *`,
      [walletAccountId, provider, amount, providerReference]
    );
    await this.db.query(
      `update wallet_accounts
       set balance = balance + $2, updated_at = now()
       where id = $1`,
      [walletAccountId, amount]
    );
    return (result.rows || [])[0] || null;
  }
}

module.exports = { TradeRepository };
