const crypto = require("node:crypto");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.marketplaceReviewAssistant.v1";

const SUPPORTED_MARKETPLACE_ARTIFACTS = Object.freeze([
  "marketplace_listing_review",
  "agritrade_browse_checklist",
  "seller_question_draft",
  "price_comparison_notes",
  "transaction_safety_checklist",
  "produce_readiness_notes"
]);

const BLOCKED_MARKETPLACE_ACTIONS = Object.freeze([
  "buy_item",
  "sell_item",
  "place_order",
  "accept_offer",
  "contact_seller",
  "contact_buyer",
  "send_message",
  "process_payment",
  "create_account",
  "arrange_delivery",
  "open_external_marketplace"
]);

function text(value, fallback = "") {
  const normalized = String(value || "").trim().replace(/\s+/g, " ");
  return normalized || fallback;
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 12)}`;
}

function nowIso(input = {}) {
  return input.nowIso || new Date(input.now || Date.now()).toISOString();
}

function classifyMarketplaceArtifact(prompt = "") {
  const lower = text(prompt).toLowerCase();
  if (/\b(buy|purchase|pay|checkout|place order|order now|sell\b.*\bnow|list it|accept offer|message seller|message buyer|contact seller|contact buyer|arrange delivery|open marketplace|create\s+(an\s+)?account)\b/.test(lower) && !/review|checklist|questions|compare|prepare|draft/.test(lower)) {
    return "blocked_marketplace_execution";
  }
  if (/review|listing/.test(lower)) return "marketplace_listing_review";
  if (/agritrade|browse|marketplace/.test(lower)) return "agritrade_browse_checklist";
  if (/seller|buyer|question|message draft/.test(lower)) return "seller_question_draft";
  if (/price|compare|market rate|value/.test(lower)) return "price_comparison_notes";
  if (/safe|fraud|risk|transaction/.test(lower)) return "transaction_safety_checklist";
  if (/produce|crop|harvest|quality|readiness/.test(lower)) return "produce_readiness_notes";
  return "marketplace_listing_review";
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    reviewOnly: true,
    noPurchaseAuthorized: true,
    noSaleAuthorized: true,
    noOrderCreated: true,
    noOfferAccepted: true,
    noBuyerSellerContactAuthorized: true,
    noMessageSent: true,
    noPaymentAuthorized: true,
    noDeliveryArranged: true,
    noAccountCreationAuthorized: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noExternalNavigationAuthorized: true
  });
}

function artifactBody(artifactType, input = {}) {
  const topic = text(input.topic || input.prompt, "this marketplace item");
  if (artifactType === "agritrade_browse_checklist") {
    return `AgriTrade browse checklist for ${topic}: review listing details, seller notes, freshness, price, delivery expectations, and questions to ask before taking any action yourself.`;
  }
  if (artifactType === "seller_question_draft") {
    return `Seller question draft for ${topic}: ask about quantity, quality, pickup timing, storage, delivery expectations, and whether the listing details are current. No message was sent.`;
  }
  if (artifactType === "price_comparison_notes") {
    return `Price comparison notes for ${topic}: compare visible listing price, local market reference, unit size, quality grade, transport cost, and freshness. No purchase or sale was created.`;
  }
  if (artifactType === "transaction_safety_checklist") {
    return `Transaction safety checklist for ${topic}: verify identity through approved channels, avoid advance payment, meet in a safe location, document terms, and stop if details feel inconsistent.`;
  }
  if (artifactType === "produce_readiness_notes") {
    return `Produce readiness notes for ${topic}: confirm harvest date, quantity, packaging, quality notes, photos you choose to provide, and manual listing readiness. No item was listed.`;
  }
  return `Marketplace listing review for ${topic}: summarize item details, compare price and quality, prepare questions, and decide manually whether to continue.`;
}

function auditMetadata(input = {}) {
  const artifactType = text(input.artifactType, "marketplace_listing_review");
  return Object.freeze({
    auditId: text(input.auditId, stableId("n100-marketplace-audit", `${artifactType}:${input.prompt || ""}`)),
    auditEventType: "marketplace_review_artifact_prepared",
    artifactType,
    createdAt: nowIso(input),
    redactedPayloadOnly: true,
    noExecutionAuthorized: true,
    noTransactionAuthorized: true
  });
}

function blockedMarketplaceResponse(prompt = "") {
  const artifactType = "blocked_marketplace_execution";
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    marketplaceArtifactId: stableId("n100-marketplace-blocked", prompt),
    artifactType,
    status: "blocked_no_marketplace_execution",
    reason: "Nexus can prepare marketplace review notes, safety checklists, and questions, but it cannot buy, sell, contact buyers or sellers, process payments, create orders, or arrange delivery in this phase.",
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_MARKETPLACE_ACTIONS]),
    auditMetadata: auditMetadata({ artifactType, prompt }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  });
}

function createN100MarketplaceReviewArtifact(input = {}) {
  const prompt = text(input.prompt, "Prepare a marketplace review.");
  const artifactType = input.artifactType && SUPPORTED_MARKETPLACE_ARTIFACTS.includes(input.artifactType)
    ? input.artifactType
    : classifyMarketplaceArtifact(prompt);
  if (!SUPPORTED_MARKETPLACE_ARTIFACTS.includes(artifactType)) return blockedMarketplaceResponse(prompt);

  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    marketplaceArtifactId: text(input.marketplaceArtifactId, stableId("n100-marketplace", `${artifactType}:${prompt}`)),
    artifactType,
    status: "prepared_for_user_review",
    prompt,
    title: text(input.title, artifactType.replace(/_/g, " ")),
    body: artifactBody(artifactType, input),
    requiresUserReview: true,
    requiresFinalExecutionGateBeforeTransaction: true,
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_MARKETPLACE_ACTIONS]),
    auditMetadata: auditMetadata({ artifactType, prompt, nowIso: input.nowIso }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeN100MarketplaceReviewArtifact(artifact) {
  if (!artifact || typeof artifact !== "object" || Array.isArray(artifact)) return false;
  if (artifact.schemaVersion !== SCHEMA_VERSION) return false;
  if (!artifact.marketplaceArtifactId || !artifact.artifactType || !artifact.status) return false;
  if (artifact.canExecute !== false || artifact.executionAuthority !== "none") return false;
  if (artifact.noExecutionAuthorized !== true || artifact.noBackendWritePerformed !== true) return false;
  if (!artifact.safetyPosture || artifact.safetyPosture.noPurchaseAuthorized !== true || artifact.safetyPosture.noPaymentAuthorized !== true) return false;
  if (artifact.safetyPosture.noBuyerSellerContactAuthorized !== true || artifact.safetyPosture.noExternalNavigationAuthorized !== true) return false;
  const serialized = JSON.stringify(artifact);
  if (/(paymentIntent|checkout|submitOrder|placeOrder|buyNow|sellNow|contactSeller|contactBuyer|sendMessage|window\.open|location\.href|providerUrl|executionAuthority":"provider")/.test(serialized)) return false;
  return Array.isArray(artifact.blockedActions) && BLOCKED_MARKETPLACE_ACTIONS.every(action => artifact.blockedActions.includes(action));
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SUPPORTED_MARKETPLACE_ARTIFACTS,
  BLOCKED_MARKETPLACE_ACTIONS,
  createN100MarketplaceReviewArtifact,
  blockedMarketplaceResponse,
  isSafeN100MarketplaceReviewArtifact
});
