const assert = require("node:assert/strict");
const media = require("../server/nexus-music-media-source-provider.js");
const { isSafeReadOnlySourceResult } = require("../public/nexus-live-source-result-contract.js");

function buildResponse(payload, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    async json() {
      return payload;
    }
  };
}

async function runYouTubeDataApiLiveProviderQa() {
  const calls = [];
  const env = {
    YOUTUBE_API_KEY: "test-secret-key",
    NEXUS_MUSIC_MEDIA_FETCH_IMPL: async url => {
      calls.push(String(url));
      return buildResponse({
        items: [{
          id: { videoId: "abc123" },
          snippet: {
            title: "How to Plant Maize",
            channelTitle: "Kenya Farm Learning"
          }
        }]
      });
    }
  };

  assert.equal(media.isYouTubeProviderConfigured(env), true);
  assert.equal(media.resolveMusicMediaProviderConfig(env).providerMode, "live");

  const result = await media.getMusicMediaSourceResultAsync({
    mediaRequest: "show me how to plant maize"
  }, env);

  assert.equal(calls.length, 1);
  const requestUrl = new URL(calls[0]);
  assert.equal(requestUrl.origin + requestUrl.pathname, media.YOUTUBE_SEARCH_URL);
  assert.equal(requestUrl.searchParams.get("part"), "snippet");
  assert.equal(requestUrl.searchParams.get("type"), "video");
  assert.equal(requestUrl.searchParams.get("safeSearch"), "moderate");
  assert.equal(requestUrl.searchParams.get("q"), "show me how to plant maize");
  assert.equal(requestUrl.searchParams.get("key"), "test-secret-key");

  assert.equal(isSafeReadOnlySourceResult(result), true);
  assert.equal(result.sourceName, "YouTube Data API v3");
  assert.equal(result.sourceStatus, "source-result-available");
  assert.equal(result.evidenceStatus, "source-backed");
  assert.equal(result.sourceUrl, "https://www.youtube.com/watch?v=abc123");
  assert.match(result.resultSummary, /How to Plant Maize/);
  assert.doesNotMatch(JSON.stringify(result), /test-secret-key/);
  assert.equal(result.executionAuthority, false);

  const failed = await media.getMusicMediaSourceResultAsync({
    mediaRequest: "Swahili diabetes education"
  }, {
    YOUTUBE_API_KEY: "test-secret-key",
    NEXUS_MUSIC_MEDIA_FETCH_IMPL: async () => buildResponse({}, 403)
  });
  assert.equal(failed.sourceStatus, "source-error");
  assert.equal(failed.executionAuthority, false);
  assert.doesNotMatch(JSON.stringify(failed), /test-secret-key/);

  console.log("[nexus-youtube-data-api-live-provider-qa] passed");
}

if (require.main === module) {
  runYouTubeDataApiLiveProviderQa().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  });
}

module.exports = Object.freeze({ runYouTubeDataApiLiveProviderQa });
