const MEDIA_PROVIDER_HOSTS = Object.freeze({
  youtube: "www.youtube.com",
  spotify: "open.spotify.com",
  appleMusic: "music.apple.com"
});

const MEDIA_INTENT_PATTERNS = Object.freeze([
  { id: "rnb", label: "R&B", query: "R&B music", patterns: [/\br\s*&\s*b\b/i, /\brnb\b/i, /\br and b\b/i] },
  { id: "african", label: "African music", query: "African music", patterns: [/\bafrican music\b/i] },
  { id: "afrobeats", label: "Afrobeats", query: "Afrobeats", patterns: [/\bafrobeats?\b/i, /\bafro beats?\b/i] },
  { id: "nigerian", label: "Nigerian music", query: "Nigerian music", patterns: [/\bnigerian music\b/i, /\bnaija music\b/i] },
  { id: "amapiano", label: "Amapiano", query: "Amapiano", patterns: [/\bamapiano\b/i] },
  { id: "highlife", label: "Highlife", query: "Highlife music", patterns: [/\bhighlife\b/i] },
  { id: "gospel", label: "Gospel", query: "Gospel music", patterns: [/\bgospel\b/i] },
  { id: "jazz", label: "Jazz", query: "jazz music", patterns: [/\bjazz\b/i] },
  { id: "relaxing", label: "Relaxing music", query: "relaxing music", patterns: [/\brelaxing music\b/i, /\bcalm music\b/i] },
  { id: "study", label: "Study music", query: "study background music", patterns: [/\bstudy\b/i, /\bbackground music\b/i, /\bfocus music\b/i] },
  { id: "workout", label: "Workout music", query: "workout music", patterns: [/\bworkout music\b/i, /\bexercise music\b/i, /\bfitness music\b/i] },
  { id: "kenya", label: "Kenya-inspired music", query: "Kenyan music", patterns: [/\bkenya\b/i, /\bkenyan\b/i] }
]);

function normalizeText(value = "") {
  return String(value || "").replace(/^nexus,\s*/i, "").replace(/\s+/g, " ").trim();
}

function encoded(value = "") {
  return encodeURIComponent(String(value || "").trim()).replace(/%20/g, "+");
}

function providerUrl(providerId, query) {
  const safeQuery = encoded(query || "music");
  if (providerId === "spotify") return `https://${MEDIA_PROVIDER_HOSTS.spotify}/search/${safeQuery}`;
  if (providerId === "appleMusic") return `https://${MEDIA_PROVIDER_HOSTS.appleMusic}/us/search?term=${safeQuery}`;
  return `https://${MEDIA_PROVIDER_HOSTS.youtube}/results?search_query=${safeQuery}`;
}

function detectRequestedMedia(command = "") {
  const text = normalizeText(command);
  const matched = MEDIA_INTENT_PATTERNS.find(item => item.patterns.some(pattern => pattern.test(text)));
  if (matched) return matched;
  return { id: "general", label: "Music", query: text.replace(/\b(play|open|use|music|on youtube|on spotify|in youtube|in spotify)\b/gi, "").trim() || "music" };
}

function detectPreferredProvider(command = "") {
  const text = normalizeText(command).toLowerCase();
  if (/\byoutube\b/.test(text)) return "youtube";
  if (/\bspotify\b/.test(text)) return "spotify";
  if (/\bapple music\b|\bapple\b/.test(text)) return "appleMusic";
  return "";
}

function isPauseOrStopMusicCommand(command = "") {
  const text = normalizeText(command).toLowerCase();
  return /\b(pause|stop|end|resume)\b.*\b(music|song|audio|playback)\b/.test(text);
}

function isBlockedMusicDownloadCommand(command = "") {
  const text = normalizeText(command).toLowerCase();
  return /\b(download|rip|cache|save|copy)\b.*\b(music|song|track|audio)\b/.test(text);
}

function isMediaCommand(command = "") {
  const text = normalizeText(command).toLowerCase();
  if (!text) return false;
  if (isPauseOrStopMusicCommand(text)) return true;
  if (isBlockedMusicDownloadCommand(text)) return true;
  return /\b(play|open|use|start)\b.*\b(music|r\s*&\s*b|rnb|african|afrobeats?|afro beats?|nigerian|naija|amapiano|highlife|gospel|jazz|youtube|spotify|apple music|study|background|relaxing|workout|exercise|fitness)\b/.test(text)
    || /\b(music while i study|background music)\b/.test(text);
}

function buildProviderOptions(query, preferredProvider = "") {
  return [
    {
      id: "youtube",
      label: "Open in YouTube",
      status: "open_search_handoff",
      credentialRequired: false,
      preferred: preferredProvider === "youtube",
      url: providerUrl("youtube", query)
    },
    {
      id: "spotify",
      label: "Open in Spotify",
      status: "open_search_handoff",
      credentialRequired: false,
      futureCredentialedPlaybackRequired: true,
      preferred: preferredProvider === "spotify",
      url: providerUrl("spotify", query)
    },
    {
      id: "appleMusic",
      label: "Open in Apple Music",
      status: "future_or_open_search_handoff",
      credentialRequired: false,
      futureCredentialedPlaybackRequired: true,
      preferred: preferredProvider === "appleMusic",
      url: providerUrl("appleMusic", query)
    }
  ];
}

function buildMediaResponse(command = "") {
  const normalized = normalizeText(command);
  const requested = detectRequestedMedia(normalized);
  const preferredProvider = detectPreferredProvider(normalized);
  const providerOptions = buildProviderOptions(requested.query, preferredProvider);
  const stopRequested = isPauseOrStopMusicCommand(normalized);
  const blockedDownload = isBlockedMusicDownloadCommand(normalized);
  const actionId = `nexus-media-${requested.id}`;
  const mediaMode = {
    actionId,
    mode: "Media / Music",
    request: normalized,
    requestedMusicType: requested.label,
    providerPreference: preferredProvider || "none",
    providerOptions: stopRequested || blockedDownload ? [] : providerOptions,
    playbackStatus: stopRequested
      ? "no_active_nexus_provider_playback"
      : blockedDownload
        ? "download_blocked"
        : "provider_search_handoff_ready",
    safeProviderHandoffOnly: true,
    noHostedMusic: true,
    noDownloadedMusic: true,
    noScraping: true,
    noCachedMedia: true,
    noFakeProviderPlayback: true,
    noAutoplay: true,
    noExecutionAuthorized: true
  };
  const preparedCard = {
    type: "media_provider_handoff",
    title: stopRequested ? "Music playback control" : `${requested.label} provider options`,
    status: mediaMode.playbackStatus,
    localOnly: true,
    mediaMode
  };
  return {
    ok: true,
    status: stopRequested ? "media_no_active_playback" : blockedDownload ? "media_download_blocked" : "media_provider_handoff_prepared",
    mode: "Media / Music",
    message: stopRequested
      ? "Nexus does not have active provider playback to pause, stop, or resume. If music opened in another app, control playback there."
      : blockedDownload
        ? "Nexus cannot download, rip, cache, host, or redistribute copyrighted music. I can prepare safe provider search options instead."
      : `I prepared safe provider search options for ${requested.label}. Nexus is not hosting, downloading, scraping, caching, or streaming copyrighted music.`,
    task: {
      taskId: actionId,
      type: "media_provider_handoff",
      title: requested.label,
      status: "prepared",
      riskTier: "low",
      executionAuthority: false,
      userGoal: normalized,
      mediaMode
    },
    preparedCards: [preparedCard],
    mediaMode,
    execution: {
      executionAuthorized: false,
      noExecutionAuthorized: true,
      noProviderPlaybackAuthorized: true,
      noDownloadAuthorized: true,
      noCachedMedia: true
    },
    auditEvent: {
      eventType: "media_provider_handoff_prepared",
      riskTier: "low",
      actionType: "media_search_handoff",
      executionAuthorized: false,
      providerHandoffOnly: true
    }
  };
}

module.exports = {
  MEDIA_PROVIDER_HOSTS,
  isMediaCommand,
  isPauseOrStopMusicCommand,
  isBlockedMusicDownloadCommand,
  detectRequestedMedia,
  detectPreferredProvider,
  buildProviderOptions,
  buildMediaResponse
};
