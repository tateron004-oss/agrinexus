const {
  clean,
  envEnabled,
  missingEnv,
  providerResponse,
  disabledResponse,
  missingConfigResponse,
  requireConfirmation,
  blockedResponse,
  failedResponse,
  safeJson
} = require("./providerUtils");

function status(env = process.env) {
  return {
    provider: "zoom",
    enabled: envEnabled("NEXUS_ZOOM_ENABLED", env),
    missingConfig: missingEnv(["ZOOM_ACCOUNT_ID", "ZOOM_CLIENT_ID", "ZOOM_CLIENT_SECRET"], env)
  };
}

async function token(env = process.env) {
  const auth = Buffer.from(`${env.ZOOM_CLIENT_ID}:${env.ZOOM_CLIENT_SECRET}`).toString("base64");
  const response = await fetch(`https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${encodeURIComponent(env.ZOOM_ACCOUNT_ID)}`, {
    method: "POST",
    headers: { authorization: `Basic ${auth}` }
  });
  const payload = await safeJson(response);
  if (!response.ok) throw new Error(payload.reason || payload.message || response.statusText);
  return payload.access_token;
}

async function createMeeting(body = {}, env = process.env) {
  const provider = "zoom";
  const action = "zoom.meeting";
  if (!envEnabled("NEXUS_ZOOM_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_ZOOM_ENABLED");
  const missing = missingEnv(["ZOOM_ACCOUNT_ID", "ZOOM_CLIENT_ID", "ZOOM_CLIENT_SECRET"], env);
  if (missing.length) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  if (!clean(body.topic)) return blockedResponse(provider, action, "Meeting topic is required.");
  try {
    const accessToken = await token(env);
    const response = await fetch("https://api.zoom.us/v2/users/me/meetings", {
      method: "POST",
      headers: { authorization: `Bearer ${accessToken}`, "content-type": "application/json" },
      body: JSON.stringify({
        topic: clean(body.topic),
        type: 2,
        start_time: body.startTime || new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        duration: Math.min(Number(body.duration || 30), 120),
        settings: { join_before_host: false, waiting_room: true }
      })
    });
    const payload = await safeJson(response);
    if (!response.ok) throw new Error(payload.message || response.statusText);
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: "Zoom meeting created after explicit confirmation.",
      data: { id: payload.id, topic: payload.topic, joinUrl: payload.join_url, startUrlAvailable: Boolean(payload.start_url) }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

module.exports = { status, createMeeting };
