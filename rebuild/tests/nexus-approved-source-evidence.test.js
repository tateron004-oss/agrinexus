"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const {
  classifyEvidenceDomain,
  isApprovedSource
} = require("../nexus-core/approved-source-registry");
const {
  ApprovedEvidenceService,
  createTavilyEvidenceProvider
} = require("../nexus-core/approved-evidence-service");
const { EvidenceReceiptStore } = require("../nexus-core/evidence-receipt-store");
const { routeCommand } = require("../nexus-core/router");
const { renderEvidenceWorkspace } = require("../browser/nexus-clean-entry");

async function main() {
  assert.equal(classifyEvidenceDomain("What guideline applies to hypertension?").key, "clinical");
  assert.equal(classifyEvidenceDomain("What is the status of the government in Kenya?").key, "government");
  assert.equal(classifyEvidenceDomain("What is Kenya's government status and how can Nexus support areas of need?").key, "cross-domain");
  assert.equal(classifyEvidenceDomain("What causes maize crop loss?").key, "agriculture");
  assert.equal(isApprovedSource("https://www.who.int/news/item", classifyEvidenceDomain("clinical guideline")), true);
  assert.equal(isApprovedSource("https://random-blog.example/claim", classifyEvidenceDomain("clinical guideline")), false);
  assert.equal(routeCommand("Show me the references", "connected").workspace, "live-knowledge");

  const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-evidence-"));
  const receiptPath = path.join(temporaryDirectory, "receipts.jsonl");
  const providerCalls = [];
  const store = new EvidenceReceiptStore({ filePath: receiptPath });
  const service = new ApprovedEvidenceService({
    receiptStore: store,
    now: () => new Date("2026-07-28T20:00:00.000Z"),
    searchProvider: async (request) => {
      providerCalls.push(request);
      return {
        provider: "test-approved-search",
        results: [
          {
            title: "WHO hypertension guidance",
            url: "https://www.who.int/publications/hypertension-guidance",
            content: "WHO describes evidence-based care pathways for hypertension.",
            published_date: "2025-10-01"
          },
          {
            title: "NIH diabetes and blood pressure review",
            url: "https://www.ncbi.nlm.nih.gov/books/example",
            content: "NIH evidence reviews blood-pressure management for adults with diabetes."
          },
          {
            title: "Unapproved opinion",
            url: "https://health-opinions.example/post",
            content: "This result must never reach the Evidence workspace."
          }
        ]
      };
    }
  });

  const receipt = await service.research({
    question: "What do current guidelines say about hypertension with diabetes?",
    userId: "ron"
  });
  assert.equal(receipt.status, "cross-source-verified");
  assert.equal(receipt.verified, true);
  assert.equal(receipt.domain, "clinical");
  assert.equal(receipt.sources.length, 2);
  assert.deepEqual(receipt.sources.map(({ id }) => id), ["S1", "S2"]);
  assert.ok(receipt.claims.every((claim) => claim.citations.length > 0));
  assert.doesNotMatch(JSON.stringify(receipt), /health-opinions/);
  assert.match(receipt.summary, /\[S1\]/);
  assert.match(receipt.summary, /\[S2\]/);
  assert.ok(fs.statSync(receiptPath).mode & 0o600);
  const evidenceSurface = {
    hidden: true,
    dataset: {},
    innerHTML: "",
    querySelector() { return null; }
  };
  assert.equal(renderEvidenceWorkspace({ receipt, surface: evidenceSurface }), true);
  assert.equal(evidenceSurface.hidden, false);
  assert.match(evidenceSurface.innerHTML, /Verified across approved sources/);
  assert.match(evidenceSurface.innerHTML, /\[S1\]/);
  assert.match(evidenceSurface.innerHTML, /Open source/);
  assert.match(evidenceSurface.innerHTML, /Research follow-up/);
  assert.match(evidenceSurface.innerHTML, new RegExp(receipt.id));

  const reloadedStore = new EvidenceReceiptStore({ filePath: receiptPath });
  assert.equal(reloadedStore.get(receipt.id).question, receipt.question);

  const followUpService = new ApprovedEvidenceService({
    receiptStore: reloadedStore,
    searchProvider: service.searchProvider,
    now: () => new Date("2026-07-28T20:01:00.000Z")
  });
  const followUp = await followUpService.research({
    question: "Compare that with Kenya guidance.",
    parentReceiptId: receipt.id,
    userId: "ron"
  });
  assert.equal(followUp.parentReceiptId, receipt.id);
  assert.equal(followUp.domain, "clinical");
  assert.match(providerCalls.at(-1).query, /Follow-up to:/);

  const tavilyRequests = [];
  const tavily = createTavilyEvidenceProvider({
    apiKey: "test-key",
    fetchImpl: async (url, options) => {
      tavilyRequests.push({ url, options });
      return { ok: true, json: async () => ({ results: [] }) };
    }
  });
  await tavily({ query: "Kenya government status", approvedDomains: ["knbs.or.ke", "worldbank.org"] });
  const tavilyBody = JSON.parse(tavilyRequests[0].options.body);
  assert.deepEqual(tavilyBody.include_domains, ["knbs.or.ke", "worldbank.org"]);
  assert.equal(tavilyBody.search_depth, "advanced");
  assert.equal(tavilyBody.include_answer, true);
  assert.doesNotMatch(JSON.stringify(tavilyRequests), /Authorization|Bearer/);

  fs.rmSync(temporaryDirectory, { recursive: true, force: true });
  console.log("Nexus Approved Source Evidence System: PASS");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
