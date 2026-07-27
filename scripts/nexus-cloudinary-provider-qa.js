"use strict";

const assert = require("assert");
const provider = require("../server/cloudinary-provider.js");

async function main() {
  const env = { CLOUDINARY_URL: "cloudinary://test-key:test-secret@nexus-test" };
  assert.equal(provider.isConfigured(env), true);
  assert.equal(provider.isConfigured({}), false);
  assert.deepEqual(provider.parseCloudinaryUrl(env), {
    apiKey: "test-key",
    apiSecret: "test-secret",
    cloudName: "nexus-test"
  });

  let request = null;
  const result = await provider.uploadCertificationAsset({
    env,
    fetchImpl: async (url, options) => {
      request = { url, options };
      return {
        ok: true,
        status: 200,
        json: async () => ({
          asset_id: "asset-123",
          public_id: "agrinexus/system-certification/nexus-genesis-voice-provider",
          resource_type: "image",
          format: "svg",
          bytes: 512,
          width: 640,
          height: 360,
          secure_url: "https://res.cloudinary.com/nexus-test/image/upload/v1/nexus.svg",
          version: 1
        })
      };
    }
  });

  assert.equal(request.url, "https://api.cloudinary.com/v1_1/nexus-test/image/upload");
  assert.equal(request.options.method, "POST");
  assert.equal(request.options.body.get("api_key"), "test-key");
  assert(request.options.body.get("signature"));
  assert.equal(request.options.body.get("folder"), "agrinexus/system-certification");
  assert.equal(request.options.body.get("file").type, "image/png");
  assert.equal(request.options.body.get("file").name, "nexus-genesis-cloudinary-certification.png");
  assert.equal(request.options.body.has("invalidate"), false);
  assert.equal(request.options.body.has("overwrite"), false);
  assert.equal(result.ok, true);
  assert.equal(result.provider, "cloudinary");
  assert.equal(result.receipt.verified, true);
  assert.equal(result.receipt.secureDelivery, true);
  assert(!JSON.stringify(result).includes("test-secret"));

  console.log("[nexus-cloudinary-provider-qa] passed");
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
