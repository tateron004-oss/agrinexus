"use strict";

const crypto = require("node:crypto");
const {
  classifyEvidenceDomain,
  approvedOrganization,
  isApprovedSource,
  normalizeHostname
} = require("./approved-source-registry");

class ApprovedEvidenceService {
  constructor({ searchProvider, receiptStore, now = () => new Date() } = {}) {
    if (typeof searchProvider !== "function") throw new Error("An evidence search provider is required.");
    if (!receiptStore || typeof receiptStore.save !== "function") throw new Error("An evidence receipt store is required.");
    this.searchProvider = searchProvider;
    this.receiptStore = receiptStore;
    this.now = now;
  }

  async research({ question, parentReceiptId = null, userId = "standard-user" } = {}) {
    const normalizedQuestion = String(question || "").trim();
    if (normalizedQuestion.length < 4) throw new Error("A complete research question is required.");
    const parent = parentReceiptId ? this.receiptStore.get(parentReceiptId) : null;
    if (parentReceiptId && !parent) throw new Error("The referenced research receipt was not found.");
    const effectiveQuestion = parent
      ? `${normalizedQuestion}\nFollow-up to: ${parent.question}`
      : normalizedQuestion;
    const domain = parent
      ? classifyEvidenceDomain(parent.question)
      : classifyEvidenceDomain(normalizedQuestion);
    const providerResult = await this.searchProvider({
      query: effectiveQuestion,
      approvedDomains: domain.approvedDomains,
      domain: domain.key
    });
    const approved = normalizeResults(providerResult && providerResult.results)
      .filter((result) => isApprovedSource(result.url, domain));
    const distinctOrganizations = [...new Set(approved.map(
      (result) => approvedOrganization(result.url, domain)
    ).filter(Boolean))];
    const verified = distinctOrganizations.length >= 2;
    const sources = approved.slice(0, 8).map((result, index) => Object.freeze({
      id: `S${index + 1}`,
      title: result.title,
      organization: approvedOrganization(result.url, domain),
      url: result.url,
      publishedAt: result.publishedAt,
      retrievedAt: this.now().toISOString()
    }));
    const claims = sources.map((source, index) => Object.freeze({
      id: `C${index + 1}`,
      text: approved[index].content,
      citations: Object.freeze([source.id]),
      support: "directly-reported"
    }));
    const at = this.now().toISOString();
    const receipt = Object.freeze({
      schema: "nexus.approved-evidence.receipt.v1",
      id: `evr_${crypto.randomUUID()}`,
      userId,
      question: normalizedQuestion,
      effectiveQuestion,
      parentReceiptId: parent ? parent.id : null,
      domain: domain.key,
      domainLabel: domain.label,
      provider: providerResult && providerResult.provider || "not-configured",
      status: verified ? "cross-source-verified" : approved.length ? "insufficient-cross-check" : "no-approved-evidence",
      verified,
      crossCheck: Object.freeze({
        requiredDistinctOrganizations: 2,
        distinctOrganizations: Object.freeze(distinctOrganizations)
      }),
      summary: verified
        ? claims.slice(0, 3).map((claim) => `${claim.text} [${claim.citations.join(", ")}]`).join(" ")
        : "Nexus could not cross-check this question across at least two approved organizations. No verified synthesis was produced.",
      claims: Object.freeze(claims),
      sources: Object.freeze(sources),
      limitations: Object.freeze([
        "Source publication dates may differ from retrieval time.",
        "Clinical evidence supports professional judgment and does not replace diagnosis or treatment decisions."
      ]),
      createdAt: at
    });
    return this.receiptStore.save(receipt);
  }

  getReceipt(id) {
    return this.receiptStore.get(id);
  }
}

function normalizeResults(results) {
  return (Array.isArray(results) ? results : []).map((result) => ({
    title: String(result.title || "Untitled approved source").trim(),
    url: String(result.url || "").trim(),
    hostname: normalizeHostname(result.url),
    content: String(result.content || result.snippet || "").replace(/\s+/g, " ").trim().slice(0, 1200),
    publishedAt: result.published_date || result.publishedAt || null
  })).filter((result) => result.url && result.content);
}

function createTavilyEvidenceProvider({ apiKey = process.env.TAVILY_API_KEY, fetchImpl = globalThis.fetch } = {}) {
  return async ({ query, approvedDomains }) => {
    if (!apiKey) {
      return { provider: "not-configured", answer: "", results: [] };
    }
    const response = await fetchImpl("https://api.tavily.com/search", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        query,
        search_depth: "advanced",
        include_answer: true,
        include_raw_content: false,
        max_results: 10,
        include_domains: approvedDomains
      })
    });
    if (!response.ok) throw new Error(`Approved evidence provider failed (${response.status}).`);
    const payload = await response.json();
    return {
      provider: "tavily",
      answer: String(payload.answer || ""),
      results: Array.isArray(payload.results) ? payload.results : []
    };
  };
}

module.exports = { ApprovedEvidenceService, createTavilyEvidenceProvider, normalizeResults };
