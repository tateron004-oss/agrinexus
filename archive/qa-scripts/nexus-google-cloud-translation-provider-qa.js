"use strict";

const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const provider = require("../server/google-cloud-translation-provider.js");

function response(payload, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    async json() {
      return payload;
    }
  };
}

async function run() {
  const { privateKey } = crypto.generateKeyPairSync("rsa", { modulusLength: 2048 });
  const privateKeyPem = privateKey.export({ type: "pkcs8", format: "pem" });
  const credentials = {
    type: "service_account",
    project_id: "agrinexus-genesis-test",
    private_key_id: "not-a-production-key",
    private_key: privateKeyPem,
    client_email: "agrinexus-translation@agrinexus-genesis-test.iam.gserviceaccount.com",
    token_uri: provider.GOOGLE_OAUTH_TOKEN_URL
  };
  const env = { GOOGLE_TRANSLATION_CREDENTIALS_JSON: JSON.stringify(credentials) };
  const calls = [];
  const fetchImpl = async (url, options) => {
    calls.push({ url: String(url), options });
    if (String(url) === provider.GOOGLE_OAUTH_TOKEN_URL) {
      assert.match(String(options.body), /grant_type=/);
      assert.doesNotMatch(String(options.body), /PRIVATE KEY/);
      return response({ access_token: "short-lived-oauth-token", expires_in: 3600 });
    }
    assert.equal(String(url), "https://translation.googleapis.com/v3/projects/agrinexus-genesis-test/locations/global:translateText");
    assert.equal(options.headers.authorization, "Bearer short-lived-oauth-token");
    const body = JSON.parse(options.body);
    assert.deepEqual(body.contents, ["Good morning farmer"]);
    assert.equal(body.sourceLanguageCode, "en");
    assert.equal(body.targetLanguageCode, "sw");
    return response({ translations: [{ translatedText: "Habari za asubuhi mkulima" }] });
  };

  assert.equal(provider.isConfigured(env), true);
  const result = await provider.translateText({
    text: "Good morning farmer",
    sourceLanguage: "en",
    targetLanguage: "sw",
    env,
    fetchImpl
  });
  assert.equal(result.provider, "google-cloud-translation");
  assert.equal(result.translatedText, "Habari za asubuhi mkulima");
  assert.equal(calls.length, 2);
  assert.doesNotMatch(JSON.stringify(result), /private_key|short-lived-oauth-token|PRIVATE KEY/);
  assert.equal(provider.isConfigured({}), false);
  assert.throws(
    () => provider.parseCredentials({ GOOGLE_TRANSLATION_CREDENTIALS_JSON: "not-json" }),
    error => error.code === "invalid-credentials-json"
  );
  console.log("[nexus-google-cloud-translation-provider-qa] passed");
}

if (require.main === module) {
  run().catch(error => {
    console.error(error?.stack || error);
    process.exitCode = 1;
  });
}

module.exports = Object.freeze({ run });
