"use strict";

const fs = require("node:fs");
const path = require("node:path");

class EvidenceReceiptStore {
  constructor({ filePath = process.env.NEXUS_EVIDENCE_RECEIPT_PATH } = {}) {
    this.filePath = filePath || path.resolve(process.cwd(), "data", "nexus-evidence-receipts.jsonl");
    this.receipts = new Map();
    this.load();
  }

  load() {
    if (!fs.existsSync(this.filePath)) return;
    for (const line of fs.readFileSync(this.filePath, "utf8").split(/\r?\n/)) {
      if (!line.trim()) continue;
      try {
        const receipt = JSON.parse(line);
        if (receipt && receipt.id) this.receipts.set(receipt.id, Object.freeze(receipt));
      } catch {
        // A damaged trailing line must not erase prior valid receipts.
      }
    }
  }

  save(receipt) {
    if (!receipt || !receipt.id) throw new Error("An evidence receipt with an id is required.");
    fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
    fs.appendFileSync(this.filePath, `${JSON.stringify(receipt)}\n`, { encoding: "utf8", mode: 0o600 });
    this.receipts.set(receipt.id, Object.freeze(receipt));
    return this.receipts.get(receipt.id);
  }

  get(id) {
    return this.receipts.get(String(id || "")) || null;
  }
}

module.exports = { EvidenceReceiptStore };
