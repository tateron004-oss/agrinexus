const {
  clean,
  envEnabled,
  providerResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse
} = require("./providerUtils");

function status(env = process.env) {
  return {
    provider: "agritrade-marketplace",
    enabled: envEnabled("NEXUS_MARKETPLACE_ENABLED", env, true),
    paymentsEnabled: envEnabled("NEXUS_MARKETPLACE_PAYMENTS_ENABLED", env),
    localStorage: true
  };
}

function ensureMarketplace(db) {
  db.profile = db.profile || {};
  db.profile.marketplaceListings = db.profile.marketplaceListings || [];
  return db.profile.marketplaceListings;
}

function listListings(db, env = process.env) {
  const provider = "agritrade-marketplace";
  const action = "marketplace.listings";
  if (!envEnabled("NEXUS_MARKETPLACE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MARKETPLACE_ENABLED");
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Marketplace listings loaded from local AgriTrade storage. No purchase or payment occurred.",
    data: { cards: ensureMarketplace(db).slice(0, 25), localOnly: true }
  });
}

function createListing(body = {}, db, env = process.env) {
  const provider = "agritrade-marketplace";
  const action = "marketplace.listing";
  if (!envEnabled("NEXUS_MARKETPLACE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MARKETPLACE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  if (!clean(body.title) || !clean(body.crop)) return blockedResponse(provider, action, "Listing title and crop are required.");
  const listing = {
    id: `listing-${Date.now()}`,
    title: clean(body.title),
    crop: clean(body.crop),
    quantity: clean(body.quantity || ""),
    location: clean(body.location || ""),
    priceNote: clean(body.priceNote || ""),
    status: "review_listing_created",
    paymentEnabled: false,
    buyerContacted: false,
    createdAt: new Date().toISOString()
  };
  ensureMarketplace(db).unshift(listing);
  db.profile.marketplaceListings = db.profile.marketplaceListings.slice(0, 50);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "AgriTrade listing saved for controlled testing. No buyer contact, order, checkout, or payment occurred.",
    data: { listing }
  });
}

module.exports = { status, listListings, createListing };
