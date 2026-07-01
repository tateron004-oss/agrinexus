const {
  clean,
  envEnabled,
  providerResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse
} = require("./providerUtils");

const remindersProvider = require("./reminderProvider");
const offlineSyncProvider = require("./offlineSyncProvider");
const stripeProvider = require("./stripeProvider");

const SENSITIVE_MARKETPLACE_PATTERN = /\b(payment|checkout|escrow|card|bank|routing|account number|ssn|patient|diagnos|prescri|medical record|insurance|password|secret|token|private key)\b/i;

const STARTER_LISTINGS = Object.freeze([
  {
    id: "starter-seeds-maize",
    title: "Maize seed starter lot",
    category: "Seeds",
    description: "Local test record for reviewing seed availability questions before contacting any seller.",
    location: "San Joaquin Valley",
    quantity: "10 sample bags",
    priceText: "Price to verify with seller",
    source: "AgriTrade local starter catalog"
  },
  {
    id: "starter-fertilizer-compost",
    title: "Compost fertilizer review listing",
    category: "Fertilizer",
    description: "Local test record for comparing fertilizer questions and safe next steps.",
    location: "Central California",
    quantity: "5 tons available for review",
    priceText: "Quote needed; no checkout",
    source: "AgriTrade local starter catalog"
  },
  {
    id: "starter-tools-irrigation",
    title: "Irrigation hand tools",
    category: "Tools",
    description: "Local test listing for small irrigation tool browsing and inquiry preparation.",
    location: "Stockton area",
    quantity: "Assorted tool set",
    priceText: "Seller-provided estimate required",
    source: "AgriTrade local starter catalog"
  },
  {
    id: "starter-equipment-pump",
    title: "Portable pump equipment review",
    category: "Equipment",
    description: "Local test equipment listing for reviewing inspection questions before any transaction.",
    location: "Delta corridor",
    quantity: "1 unit for review",
    priceText: "Inspection and quote required",
    source: "AgriTrade local starter catalog"
  },
  {
    id: "starter-produce-tomatoes",
    title: "Tomato produce availability",
    category: "Produce",
    description: "Local test produce listing for quantity, quality, timing, and pickup question preparation.",
    location: "Lodi, CA",
    quantity: "25 crates for review",
    priceText: "Market price to verify",
    source: "AgriTrade local starter catalog"
  },
  {
    id: "starter-transport-cold-chain",
    title: "Cold-chain transport review",
    category: "Transport/logistics",
    description: "Local test service listing for reviewing route, timing, and temperature questions.",
    location: "Northern California",
    quantity: "Service availability to verify",
    priceText: "Service quote required",
    source: "AgriTrade local starter catalog"
  },
  {
    id: "starter-training-seller",
    title: "AgriTrade seller basics training",
    category: "Training services",
    description: "Local test training service for seller readiness, quality notes, and safe buyer review.",
    location: "Online/local cohort",
    quantity: "Small group session",
    priceText: "Training fee to verify; no enrollment here",
    source: "AgriTrade local starter catalog"
  },
  {
    id: "starter-drone-field-review",
    title: "Drone/agritech field review service",
    category: "Drone/agritech services",
    description: "Local test service listing for preparing questions for a qualified drone operator.",
    location: "Field service area to verify",
    quantity: "One field review scope",
    priceText: "Operator quote required",
    source: "AgriTrade local starter catalog"
  }
]);

const DEFAULT_INQUIRY_DRAFT = "Hello, I am interested in this AgriTrade listing. Please share availability, location, and safe next steps.";

function status(env = process.env) {
  const stripe = stripeProvider.status(env);
  return {
    provider: "nexus-marketplace-bridge",
    enabled: envEnabled("NEXUS_MARKETPLACE_BRIDGE_ENABLED", env, true),
    localCatalogReady: true,
    localCatalogCount: STARTER_LISTINGS.length,
    paymentsEnabled: false,
    checkoutEnabled: false,
    stripe,
    confirmationControlled: true,
    noAutoContact: true,
    noOrders: true,
    noPayments: true
  };
}

function ensureMarketplaceListings(db) {
  db.profile = db.profile || {};
  db.profile.marketplaceListings = db.profile.marketplaceListings || [];
  return db.profile.marketplaceListings;
}

function ensureMarketplaceNotes(db) {
  db.profile = db.profile || {};
  db.profile.nexusMarketplaceNotes = db.profile.nexusMarketplaceNotes || [];
  return db.profile.nexusMarketplaceNotes;
}

function starterListings() {
  return STARTER_LISTINGS.map(listing => ({
    ...listing,
    sourceType: "starter_catalog",
    localOnly: true,
    paymentEnabled: false,
    checkoutAvailable: false
  }));
}

function normalizeListing(listing = {}) {
  return {
    id: clean(listing.id).slice(0, 120),
    title: clean(listing.title).slice(0, 180),
    category: clean(listing.category || listing.crop || "Produce").slice(0, 80),
    description: clean(listing.description || "").slice(0, 360),
    location: clean(listing.location).slice(0, 160),
    quantity: clean(listing.quantity).slice(0, 120),
    priceText: clean(listing.priceText || listing.priceNote || "").slice(0, 120),
    sellerContactDisplay: clean(listing.sellerContactDisplay || "").slice(0, 160),
    source: clean(listing.source || "AgriTrade local marketplace").slice(0, 160),
    sourceType: clean(listing.sourceType || "local_listing").slice(0, 80),
    localOnly: true,
    paymentEnabled: false,
    checkoutAvailable: false,
    orderCreated: false,
    buyerContacted: false,
    sellerContacted: false
  };
}

function userListings(db) {
  return ensureMarketplaceListings(db).map(normalizeListing);
}

function allListings(db) {
  return [...userListings(db), ...starterListings()];
}

function matchesListing(listing, query = "", category = "") {
  const queryText = clean(query).toLowerCase();
  const categoryText = clean(category).toLowerCase();
  const haystack = [
    listing.title,
    listing.category,
    listing.description,
    listing.location,
    listing.quantity,
    listing.priceText,
    listing.source
  ].join(" ").toLowerCase();
  const categoryMatches = !categoryText || listing.category.toLowerCase() === categoryText || haystack.includes(categoryText);
  const queryMatches = !queryText || haystack.includes(queryText);
  return categoryMatches && queryMatches;
}

function search({ query = "", category = "" } = {}, db, env = process.env) {
  const provider = "nexus-marketplace-bridge";
  const action = "marketplace.search";
  if (!envEnabled("NEXUS_MARKETPLACE_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MARKETPLACE_BRIDGE_ENABLED");
  const cards = allListings(db).filter(listing => matchesListing(listing, query, category)).slice(0, 30);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: `Loaded ${cards.length} local AgriTrade listing(s). No buyer contact, checkout, order, or payment occurred.`,
    data: {
      cards,
      starterCategories: Array.from(new Set(STARTER_LISTINGS.map(item => item.category))),
      paymentStatus: paymentStatus(env),
      localOnly: true
    }
  });
}

function listing(id = "", db, env = process.env) {
  const provider = "nexus-marketplace-bridge";
  const action = "marketplace.listing.details";
  if (!envEnabled("NEXUS_MARKETPLACE_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MARKETPLACE_BRIDGE_ENABLED");
  const found = allListings(db).find(item => item.id === clean(id));
  if (!found) return blockedResponse(provider, action, "Marketplace listing was not found in local AgriTrade bridge data.");
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Loaded local marketplace listing details. No transaction or contact occurred.",
    data: { listing: found, paymentStatus: paymentStatus(env) }
  });
}

function validateSafeMarketplaceRecord(record = {}, label = "Marketplace record") {
  const joined = Object.values(record).join(" ");
  if (SENSITIVE_MARKETPLACE_PATTERN.test(joined)) return `${label} blocked because it includes payment, checkout, private financial, health, credential, or secret content.`;
  return "";
}

function createListing(body = {}, db, env = process.env) {
  const provider = "nexus-marketplace-bridge";
  const action = "marketplace.listing";
  if (!envEnabled("NEXUS_MARKETPLACE_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MARKETPLACE_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const record = normalizeListing({
    title: body.title,
    category: body.category || body.crop,
    description: body.description,
    location: body.location,
    quantity: body.quantity,
    priceText: body.priceText || body.priceNote,
    sellerContactDisplay: body.sellerContactDisplay,
    source: "AgriTrade local user test listing"
  });
  if (!record.title || !record.category) return blockedResponse(provider, action, "Listing title and category are required.");
  const safetyError = validateSafeMarketplaceRecord({ ...record, priceText: "" }, "Marketplace listing");
  if (safetyError) return blockedResponse(provider, action, safetyError);
  const listingRecord = {
    ...record,
    id: `marketplace-listing-${Date.now()}`,
    status: "local_review_listing_created",
    createdAt: new Date().toISOString()
  };
  ensureMarketplaceListings(db).unshift(listingRecord);
  db.profile.marketplaceListings = db.profile.marketplaceListings.slice(0, 50);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "AgriTrade listing saved locally after explicit confirmation. No order, checkout, buyer contact, seller contact, shipment, or payment occurred.",
    data: { listing: listingRecord }
  });
}

function prepareInquiry(body = {}, db, env = process.env) {
  const provider = "nexus-marketplace-bridge";
  const action = "marketplace.inquiry.prepare";
  if (!envEnabled("NEXUS_MARKETPLACE_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MARKETPLACE_BRIDGE_ENABLED");
  const target = normalizeListing(body);
  if (!target.title) return blockedResponse(provider, action, "Listing title is required before preparing an inquiry draft.");
  const draft = clean(body.draft || body.message || DEFAULT_INQUIRY_DRAFT).slice(0, 500);
  if (SENSITIVE_MARKETPLACE_PATTERN.test(draft)) return blockedResponse(provider, action, "Marketplace inquiry draft must not include payment, private financial, health, credential, or secret content.");
  return providerResponse({
    provider,
    action,
    status: "prepared",
    message: "Marketplace inquiry draft prepared locally. It was not sent and no buyer or seller was contacted.",
    data: {
      draft,
      listing: target,
      draftOnly: true,
      sent: false,
      buyerContacted: false,
      sellerContacted: false
    }
  });
}

function saveNote(body = {}, db, env = process.env) {
  const provider = "nexus-marketplace-bridge";
  const action = "marketplace.note";
  if (!envEnabled("NEXUS_MARKETPLACE_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MARKETPLACE_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const noteText = clean(body.note).slice(0, 500);
  if (!noteText) return blockedResponse(provider, action, "A non-sensitive marketplace note is required.");
  if (SENSITIVE_MARKETPLACE_PATTERN.test(noteText)) return blockedResponse(provider, action, "Marketplace notes must not include payment, private financial, health, credential, or secret content.");
  const note = {
    id: `marketplace-note-${Date.now()}`,
    listingId: clean(body.listingId || body.id).slice(0, 120),
    title: clean(body.title).slice(0, 180),
    category: clean(body.category).slice(0, 80),
    note: noteText,
    localOnly: true,
    createdAt: new Date().toISOString()
  };
  ensureMarketplaceNotes(db).unshift(note);
  db.profile.nexusMarketplaceNotes = db.profile.nexusMarketplaceNotes.slice(0, 50);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Marketplace note saved locally after explicit confirmation. No contact, order, checkout, or payment occurred.",
    data: { note }
  });
}

function createReminder(body = {}, db, env = process.env) {
  const provider = "nexus-marketplace-bridge";
  const action = "marketplace.reminder";
  if (!envEnabled("NEXUS_MARKETPLACE_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MARKETPLACE_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const title = clean(body.title || "AgriTrade listing").slice(0, 180);
  const reminder = remindersProvider.create({
    confirmed: true,
    title: `Follow up on listing: ${title}`,
    dueAt: clean(body.dueAt || "next marketplace review"),
    note: "AgriTrade follow-up reminder. In-app only; no buyer or seller contacted."
  }, db, env);
  if (reminder.body?.status !== "completed") return reminder;
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Marketplace follow-up reminder created after explicit confirmation. No OS notification permission was requested.",
    data: { reminder: reminder.body.data.reminder }
  });
}

function queueOffline(body = {}, db, env = process.env) {
  const provider = "nexus-marketplace-bridge";
  const action = "marketplace.offline";
  if (!envEnabled("NEXUS_MARKETPLACE_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MARKETPLACE_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const listingRecord = normalizeListing(body);
  if (!listingRecord.title || !listingRecord.category) return blockedResponse(provider, action, "Listing title and category are required for offline marketplace queue.");
  const safetyError = validateSafeMarketplaceRecord({ title: listingRecord.title, category: listingRecord.category, description: listingRecord.description }, "Marketplace offline queue");
  if (safetyError) return blockedResponse(provider, action, safetyError);
  const content = JSON.stringify({
    listingId: listingRecord.id,
    title: listingRecord.title,
    category: listingRecord.category,
    displayArea: listingRecord.location,
    quantity: listingRecord.quantity,
    source: listingRecord.source,
    queuedAt: new Date().toISOString()
  });
  const queued = offlineSyncProvider.queueItem({ confirmed: true, type: "marketplace_listing", content }, db, env);
  if (queued.body?.status !== "completed") return queued;
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Marketplace listing queued locally for offline review after explicit confirmation. Safe listing metadata only.",
    data: { item: queued.body.data.item }
  });
}

function paymentStatus(env = process.env) {
  const stripe = stripeProvider.status(env);
  return {
    paymentsDisabled: true,
    checkoutAvailable: false,
    stripeStatus: stripe.enabled ? (stripe.missingConfig.length ? "missing_config" : "blocked") : "disabled",
    missingConfig: stripe.missingConfig,
    message: "Payments disabled. No checkout available from Marketplace Bridge."
  };
}

module.exports = {
  status,
  starterListings,
  search,
  listing,
  createListing,
  prepareInquiry,
  saveNote,
  createReminder,
  queueOffline,
  paymentStatus,
  DEFAULT_INQUIRY_DRAFT
};
