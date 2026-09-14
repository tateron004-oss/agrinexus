const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4511;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-health-source-africa-coverage-db.json");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

let server;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function trustedSources() {
  const res = await fetch(`${base}/api/nexus/knowledge/trusted-sources`);
  const body = await res.json();
  return body.categories;
}

test("every health-related knowledge category names a real African or pan-African public health authority, not just US/international ones", async () => {
  const categories = await trustedSources();
  for (const id of ["health", "chronicCare", "telehealth", "mobileClinic"]) {
    const category = categories.find(item => item.id === id);
    assert.ok(category, `expected a "${id}" trusted-source category`);
    const joined = category.preferredSources.join(" | ");
    assert.match(joined, /Africa CDC/, `${id} must name Africa CDC`);
    assert.match(joined, /WHO.*Africa|Africa.*WHO/, `${id} must name WHO's African regional office`);
  }
});

test("the pharmacy category names African medicine regulators, not only FDA/NIH/MedlinePlus", async () => {
  const categories = await trustedSources();
  const pharmacy = categories.find(item => item.id === "pharmacy");
  const joined = pharmacy.preferredSources.join(" | ");
  assert.match(joined, /African Medicines Agency/);
  assert.match(joined, /NAFDAC|Pharmacy and Poisons Board|Egyptian Drug Authority/);
});

test("health_chronic_care alias category also carries the African source additions", async () => {
  const categories = await trustedSources();
  const alias = categories.find(item => item.id === "health_chronic_care");
  assert.ok(alias);
  assert.match(alias.preferredSources.join(" | "), /Africa CDC/);
});

test("the URL-bearing authoritative source catalog includes WHO AFRO and Africa CDC with real, checkable URLs", async () => {
  const categories = await trustedSources();
  const health = categories.find(item => item.id === "health");
  const orgs = health.authoritativeSourceCandidates.map(item => item.organization);
  assert.ok(orgs.includes("WHO Regional Office for Africa"));
  assert.ok(orgs.includes("Africa CDC"));
  const afro = health.authoritativeSourceCandidates.find(item => item.organization === "WHO Regional Office for Africa");
  const cdc = health.authoritativeSourceCandidates.find(item => item.organization === "Africa CDC");
  assert.equal(afro.url, "https://www.afro.who.int/");
  assert.equal(cdc.url, "https://africacdc.org/");
});

test("a real citation from an African government health domain (.gov.ng) is classified primary in the actual institutional evidence receipt, not downgraded to a generic web source", async () => {
  const mockProvider = http.createServer((req, res) => {
    let raw = "";
    req.on("data", chunk => { raw += String(chunk); });
    req.on("end", () => {
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify({
        provider: "mock-institutional-provider",
        answer: "Manage hypertension with regular monitoring, sodium reduction, and clinician follow-up.",
        results: [
          { title: "NAFDAC Hypertension Medicine Safety Notice", url: "https://www.nafdac.gov.ng/hypertension-medicine-safety/", snippet: "National guidance on hypertension medicine safety in Nigeria." },
          { title: "WHO Regional Office for Africa: Hypertension", url: "https://www.afro.who.int/health-topics/hypertension", snippet: "Regional hypertension guidance for the African region." }
        ]
      }));
    });
  });
  const providerPort = await new Promise(resolve => mockProvider.listen(0, "127.0.0.1", () => resolve(mockProvider.address().port)));

  const altPort = 4512;
  const altBase = `http://localhost:${altPort}`;
  const altDbPath = path.join(root, "tmp-health-source-africa-classifier-db.json");
  fs.copyFileSync(dbPath, altDbPath);
  const altServer = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(altPort),
      AGRINEXUS_DB_PATH: altDbPath,
      OPENAI_API_KEY: "",
      NEXUS_LIVE_KNOWLEDGE_ENABLED: "true",
      NEXUS_LIVE_KNOWLEDGE_PROVIDER: "generic",
      NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT: `http://127.0.0.1:${providerPort}/search`,
      NEXUS_LIVE_KNOWLEDGE_API_KEY: "test-only-api-key"
    },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${altBase}/api/healthz`);
    const res = await fetch(`${altBase}/api/nexus/knowledge/query`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ question: "What are current best practices to monitor hypertension at home?", category: "chronicCare" })
    });
    const body = await res.json();
    assert.equal(body.result.retrievalStatus, "retrieved");
    const claims = body.result.institutionalEvidenceReceipt.claimSupport;
    const nafdacClaim = claims.find(item => item.sourceUrlOrInternalId.includes("nafdac.gov.ng"));
    const afroClaim = claims.find(item => item.sourceUrlOrInternalId.includes("afro.who.int"));
    assert.ok(nafdacClaim, "expected a claim citing the Nigerian NAFDAC source");
    assert.ok(afroClaim, "expected a claim citing the WHO AFRO source");
    assert.equal(nafdacClaim.sourceClassification, "primary", "a .gov.ng government source must classify as primary, matching how a US .gov source would");
    assert.equal(afroClaim.sourceClassification, "primary");
  } finally {
    altServer.kill();
    await new Promise(resolve => altServer.once("exit", resolve));
    mockProvider.close();
    if (fs.existsSync(altDbPath)) fs.unlinkSync(altDbPath);
  }
});
