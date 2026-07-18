const {
  clean,
  envEnabled,
  missingEnv,
  providerResponse,
  disabledResponse,
  missingConfigResponse,
  blockedResponse,
  failedResponse,
  safeJson
} = require("./providerUtils");

function provider(env = process.env) {
  return clean(env.NEXUS_VISION_PROVIDER || (env.OPENAI_API_KEY ? "openai" : "generic"));
}

function status(env = process.env) {
  const selected = provider(env);
  const enabled = envEnabled("NEXUS_VISION_ENABLED", env);
  const missingByProvider = {
    openai: missingEnv(["OPENAI_API_KEY"], env),
    generic: missingEnv(["NEXUS_VISION_PROVIDER_ENDPOINT", "NEXUS_VISION_API_KEY"], env)
  };
  return {
    provider: selected,
    enabled,
    missingConfig: missingByProvider[selected] || missingByProvider.generic,
    requiresUserSuppliedImage: true,
    cameraCaptureEnabled: false
  };
}

async function analyze(body = {}, env = process.env) {
  const selected = provider(env);
  const action = "vision.analyze";
  if (!envEnabled("NEXUS_VISION_ENABLED", env)) return disabledResponse(selected, action, "NEXUS_VISION_ENABLED");
  const readiness = status(env);
  if (readiness.missingConfig.length) return missingConfigResponse(selected, action, readiness.missingConfig);
  const imageUrl = clean(body.imageUrl || body.url);
  const prompt = clean(body.prompt || body.query || body.command || "Describe the user-supplied image safely.");
  if (!imageUrl) return blockedResponse(selected, action, "A user-supplied image URL is required. Nexus will not open the camera.");
  try {
    let response;
    if (selected === "openai") {
      response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: { authorization: `Bearer ${env.OPENAI_API_KEY}`, "content-type": "application/json" },
        body: JSON.stringify({
          model: clean(env.OPENAI_VISION_MODEL || env.OPENAI_MODEL || "gpt-5.4-mini"),
          input: [{
            role: "user",
            content: [
              { type: "input_text", text: `${prompt}\nDo not diagnose health conditions or prescribe pesticide/medication. State uncertainty.` },
              { type: "input_image", image_url: imageUrl }
            ]
          }],
          max_output_tokens: 500
        })
      });
      const payload = await safeJson(response);
      if (!response.ok) throw new Error(payload.error?.message || payload.message || response.statusText);
      const text = (payload.output || []).flatMap(item => item.content || []).map(item => item.text || item.output_text || "").filter(Boolean).join("\n").trim();
      return providerResponse({
        provider: selected,
        action,
        status: "completed",
        message: "Vision provider analyzed the user-supplied image with safety limits.",
        data: { analysis: text, imageUrl, providerVerified: true, noCameraOpened: true }
      });
    }
    response = await fetch(clean(env.NEXUS_VISION_PROVIDER_ENDPOINT), {
      method: "POST",
      headers: { authorization: `Bearer ${env.NEXUS_VISION_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({ imageUrl, prompt, safety: { noDiagnosis: true, noPrescription: true } })
    });
    const payload = await safeJson(response);
    if (!response.ok) throw new Error(payload.message || payload.error || response.statusText);
    return providerResponse({
      provider: selected,
      action,
      status: "completed",
      message: "Vision provider analyzed the user-supplied image with safety limits.",
      data: { analysis: payload.analysis || payload.text || payload.result || "", imageUrl, providerVerified: true, noCameraOpened: true }
    });
  } catch (error) {
    return failedResponse(selected, action, error);
  }
}

module.exports = { status, analyze };
