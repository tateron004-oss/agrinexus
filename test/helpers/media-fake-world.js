"use strict";
// A pretend internet for the media tests: radio-browser.info, Audius, YouTube (search, videos, oEmbed), Jamendo, Internet Archive, Wikimedia Commons,
// the Apple iTunes search API and the stream/preview files themselves. No test touches the real network.
//
//   const world = createFakeWorld({ youtubeQuota: false, audius: [...] });
//   world.fetch      a fetch-compatible function
//   world.calls      [{ url, method, headers }] in order, for asserting what was (not) called

function jsonResponse(body, status = 200) {
  return { ok: status >= 200 && status < 300, status, headers: { get: name => (name.toLowerCase() === "content-type" ? "application/json" : "") }, json: async () => body, body: { cancel: async () => {} } };
}
function mediaResponse(contentType, status = 206, extra = {}) {
  return { ok: status >= 200 && status < 300, status, url: extra.url, headers: { get: name => ({ "content-type": contentType, "accept-ranges": extra.ranges === false ? "" : "bytes" })[name.toLowerCase()] || "" }, json: async () => { throw new Error("not json"); }, body: { cancel: async () => {} } };
}

const STATIONS = [
  { stationuuid: "11111111-aaaa", name: "Citizen Radio", url_resolved: "https://streams.example.test/citizen.mp3", homepage: "https://citizen.example.test", favicon: "https://citizen.example.test/logo.png", tags: "news,swahili,music", country: "Kenya", countrycode: "KE", codec: "MP3", bitrate: 128, hls: 0, lastcheckok: 1, clickcount: 900, votes: 300 },
  { stationuuid: "22222222-bbbb", name: "Capital FM Kenya", url_resolved: "https://streams.example.test/capital.mp3", tags: "pop,hits", country: "Kenya", countrycode: "KE", codec: "MP3", bitrate: 96, hls: 0, lastcheckok: 1, clickcount: 700, votes: 200 },
  { stationuuid: "33333333-cccc", name: "Dead Air FM", url_resolved: "https://streams.example.test/dead.mp3", tags: "pop", country: "Kenya", countrycode: "KE", codec: "MP3", bitrate: 64, hls: 0, lastcheckok: 1, clickcount: 800, votes: 100 },
  { stationuuid: "44444444-dddd", name: "Lagos Gospel Radio", url_resolved: "https://streams.example.test/lagos.aac", tags: "gospel", country: "Nigeria", countrycode: "NG", codec: "AAC", bitrate: 64, hls: 0, lastcheckok: 1, clickcount: 400, votes: 90 },
  { stationuuid: "55555555-eeee", name: "Plain Http Radio", url_resolved: "http://streams.example.test/plain.mp3", tags: "pop", country: "Kenya", countrycode: "KE", hls: 0, lastcheckok: 1, clickcount: 100, votes: 5 }
];

const AUDIUS_TRACKS = [
  { id: "aud1", title: "Last Last (Cover)", user: { name: "Nairobi Beats", handle: "nbeats" }, duration: 215, is_streamable: true, play_count: 1200, permalink: "/nbeats/last-last-cover", artwork: { "480x480": "https://img.example.test/a.jpg" } },
  { id: "aud2", title: "Last Last Explicit Mix", user: { name: "Dirty DJ" }, duration: 200, is_streamable: true, is_explicit: true },
  { id: "aud3", title: "Last Last gated", user: { name: "Gated" }, duration: 200, is_streamable: true, stream_conditions: { usdc_purchase: 1 } },
  { id: "aud4", title: "Unrelated Banger", user: { name: "Someone" }, duration: 100, is_streamable: true }
];

function createFakeWorld(options = {}) {
  const calls = [];
  const opts = {
    stations: STATIONS, audius: AUDIUS_TRACKS, youtubeQuota: false, youtubeDown: false, radioDown: false, audiusDown: false, itunes: true,
    youtubeItems: [
      { videoId: "dQw4w9WgXcQ", title: "Burna Boy - Last Last (Official Audio)", channel: "Burna Boy", embeddable: true, duration: "PT3M20S" },
      { videoId: "blockedVid01", title: "Last Last (blocked embed)", channel: "Someone", embeddable: false, duration: "PT3M" },
      { videoId: "karaokeVid01", title: "Last Last karaoke", channel: "KaraokeCo", embeddable: true, duration: "PT3M" }
    ],
    oembedFail: new Set(["blockedVid01"]),
    deadStreams: new Set(["https://streams.example.test/dead.mp3"]),
    ...options
  };

  async function fetch(input, init = {}) {
    const url = String(input);
    const parsed = new URL(url);
    calls.push({ url, method: init.method || "GET", headers: init.headers || {} });
    const host = parsed.host;
    const p = parsed.searchParams;

    // radio-browser
    if (host === "all.api.radio-browser.info") return jsonResponse([{ ip: "1.1.1.1", name: "de1.api.radio-browser.info" }]);
    if (host.endsWith(".api.radio-browser.info")) {
      if (opts.radioDown) throw Object.assign(new Error("getaddrinfo ENOTFOUND"), { name: "TypeError" });
      if (parsed.pathname.startsWith("/json/url/")) return jsonResponse({ ok: true });
      const name = (p.get("name") || "").toLowerCase();
      const cc = p.get("countrycode");
      const tag = p.get("tag");
      let list = opts.stations;
      if (cc) list = list.filter(station => station.countrycode === cc);
      if (name) list = list.filter(station => station.name.toLowerCase().includes(name));
      if (tag) list = list.filter(station => (station.tags || "").split(",").includes(tag));
      if (p.get("is_https") === "true") list = list.filter(station => /^https:/.test(station.url_resolved) || true);
      return jsonResponse(list.slice().sort((a, b) => b.clickcount - a.clickcount));
    }

    // Audius
    if (host === "api.audius.co") return jsonResponse({ data: ["https://audius-host.test"] });
    if (host === "audius-host.test") {
      if (opts.audiusDown) return jsonResponse({}, 503);
      if (parsed.pathname === "/v1/tracks/search") {
        const query = (p.get("query") || "").toLowerCase();
        const words = query.split(/\s+/).filter(Boolean);
        return jsonResponse({ data: opts.audius.filter(track => words.some(word => track.title.toLowerCase().includes(word))) });
      }
      if (/\/stream$/.test(parsed.pathname)) return mediaResponse("audio/mpeg");
    }

    // YouTube
    if (host === "www.googleapis.com" && parsed.pathname === "/youtube/v3/search") {
      if (opts.youtubeDown) return jsonResponse({ error: { message: "backend error" } }, 500);
      if (opts.youtubeQuota) return jsonResponse({ error: { message: "quota exceeded", errors: [{ reason: "quotaExceeded" }] } }, 403);
      return jsonResponse({ items: opts.youtubeItems.map(item => ({ id: { videoId: item.videoId }, snippet: { title: item.title, channelTitle: item.channel, liveBroadcastContent: "none", thumbnails: { medium: { url: "https://img.example.test/t.jpg" } } } })) });
    }
    if (host === "www.googleapis.com" && parsed.pathname === "/youtube/v3/videos") {
      const ids = (p.get("id") || "").split(",");
      return jsonResponse({ items: opts.youtubeItems.filter(item => ids.includes(item.videoId)).map(item => ({ id: item.videoId, status: { embeddable: item.embeddable, privacyStatus: "public" }, contentDetails: { duration: item.duration, ...(item.regionBlocked ? { regionRestriction: { blocked: item.regionBlocked } } : {}) } })) });
    }
    if (host === "www.youtube.com" && parsed.pathname === "/oembed") {
      const id = (p.get("url") || "").split("v=")[1];
      return opts.oembedFail.has(id) ? jsonResponse({}, 401) : jsonResponse({ type: "video", html: "<iframe></iframe>" });
    }

    // Jamendo
    if (host === "api.jamendo.com") {
      return jsonResponse({ results: [{ id: "jam1", name: "Savanna Sunrise", artist_name: "Kenya Collective", duration: 180, audio: "https://jamendo-cdn.example.test/jam1.mp3", license_ccurl: "https://creativecommons.org/licenses/by/3.0/", shareurl: "https://www.jamendo.com/track/jam1" }] });
    }

    // Internet Archive
    if (host === "archive.org" && parsed.pathname === "/advancedsearch.php") {
      const q = p.get("q") || "";
      if (/mediatype:movies/.test(q)) return jsonResponse({ response: { docs: [{ identifier: "farm_film_1950", title: "Modern Farming Methods", creator: "US Dept of Agriculture", licenseurl: "https://creativecommons.org/publicdomain/mark/1.0/" }] } });
      return jsonResponse({ response: { docs: [{ identifier: "folk_song_01", title: "Jambo Bwana Folk Recording", creator: "Field Recordings", licenseurl: "https://creativecommons.org/licenses/by/4.0/" }] } });
    }
    if (host === "archive.org" && parsed.pathname.startsWith("/metadata/")) {
      if (parsed.pathname.includes("farm_film")) return jsonResponse({ files: [{ name: "farm.mp4", format: "h.264", size: "4000000" }, { name: "farm_512kb.mp4", format: "MPEG4", size: "900000" }] });
      return jsonResponse({ files: [{ name: "song.mp3", format: "VBR MP3", size: "3000000", length: "185.2" }, { name: "song.ogg", format: "Ogg Vorbis", size: "2000000" }] });
    }
    if (host === "archive.org" && parsed.pathname.startsWith("/download/")) return mediaResponse(/\.mp4$/.test(parsed.pathname) ? "video/mp4" : "audio/mpeg");

    // Wikimedia Commons
    if (host === "commons.wikimedia.org") {
      return jsonResponse({ query: { pages: { 1: { title: "File:Maize harvest in Kenya.webm", imageinfo: [{ url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Maize_harvest.webm", mime: "video/webm", descriptionurl: "https://commons.wikimedia.org/wiki/File:Maize_harvest_in_Kenya.webm", extmetadata: { Artist: { value: "<a>Jane</a>" }, LicenseShortName: { value: "CC BY-SA 4.0" } } }] } } } });
    }
    if (host === "upload.wikimedia.org") return mediaResponse("video/webm");

    // Apple iTunes
    if (host === "itunes.apple.com") {
      if (!opts.itunes) return jsonResponse({ results: [] });
      return jsonResponse({ results: [{ trackName: "Sir Duke", artistName: "Stevie Wonder", collectionName: "Songs in the Key of Life", previewUrl: "https://audio-ssl.example.test/sir-duke.m4a", trackViewUrl: "https://music.apple.com/x", artworkUrl100: "https://img.example.test/sd.jpg" }, { trackName: "Last Last", artistName: "Burna Boy", previewUrl: "https://audio-ssl.example.test/last-last.m4a" }] });
    }
    if (host === "audio-ssl.example.test") return mediaResponse("audio/mp4");

    // Streams
    if (host === "streams.example.test" || host === "jamendo-cdn.example.test") {
      if (opts.deadStreams.has(url)) return mediaResponse("text/html", 404);
      if (/\.m3u8$/.test(parsed.pathname)) return mediaResponse("application/vnd.apple.mpegurl", 200);
      return mediaResponse(/\.aac$/.test(parsed.pathname) ? "audio/aac" : "audio/mpeg", 200, { ranges: false });
    }
    throw Object.assign(new Error(`fake world has no route for ${url}`), { name: "TypeError" });
  }
  return { fetch, calls, options: opts };
}

module.exports = { createFakeWorld, jsonResponse, mediaResponse, STATIONS, AUDIUS_TRACKS };
