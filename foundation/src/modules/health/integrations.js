class HealthIntegrations {
  constructor({ telehealth, notifications, ehr, ai } = {}) {
    this.telehealth = telehealth || new SandboxTelehealthAdapter();
    this.notifications = notifications || new SandboxHealthNotificationAdapter();
    this.ehr = ehr || new SandboxEhrAdapter();
    this.ai = ai || new SandboxHealthAiAdapter();
  }
}

function createHealthIntegrations(config = {}) {
  const health = config.health || {};
  const apiKey = health.providerApiKey;
  return new HealthIntegrations({
    telehealth: healthProviderAdapter(health.telehealthProvider, health.telehealthWebhookUrl, apiKey, "telehealth"),
    notifications: healthProviderAdapter(health.notificationProvider, health.notificationWebhookUrl, apiKey, "notifications"),
    ehr: healthProviderAdapter(health.ehrProvider, health.ehrWebhookUrl, apiKey, "ehr"),
    ai: healthProviderAdapter(health.aiProvider, health.aiWebhookUrl, apiKey, "health-ai")
  });
}

function healthProviderAdapter(provider, webhookUrl, apiKey, type) {
  if (!provider || provider === "sandbox") return null;
  if (provider === "webhook") return new WebhookHealthAdapter({ webhookUrl, apiKey, type });
  return new MissingHealthProviderAdapter({ provider, type });
}

class MissingHealthProviderAdapter {
  constructor({ provider, type }) {
    this.provider = provider;
    this.type = type;
  }

  async createSession() {
    throw new Error(`${this.type} provider ${this.provider} is not configured.`);
  }

  async connectRepresentative() {
    throw new Error(`${this.type} provider ${this.provider} is not configured.`);
  }

  async send() {
    throw new Error(`${this.type} provider ${this.provider} is not configured.`);
  }

  async syncIntake() {
    throw new Error(`${this.type} provider ${this.provider} is not configured.`);
  }

  async run() {
    throw new Error(`${this.type} provider ${this.provider} is not configured.`);
  }
}

class WebhookHealthAdapter {
  constructor({ webhookUrl, apiKey, type, provider = "webhook" }) {
    this.webhookUrl = webhookUrl;
    this.apiKey = apiKey;
    this.type = type;
    this.provider = provider;
  }

  async createSession(payload) {
    return this.post("telehealth.create_session", payload);
  }

  async connectRepresentative(payload) {
    return this.post("telehealth.connect_representative", payload);
  }

  async send(payload) {
    return this.post("health_notifications.send", payload);
  }

  async syncIntake(payload) {
    return this.post("ehr.sync_intake", payload);
  }

  async run(payload) {
    const result = await this.post("health_ai.run", payload);
    return {
      text: result.text || result.responseText || "Health AI webhook returned no text.",
      provider: this.provider,
      model: result.model || null,
      metadata: result.metadata || {}
    };
  }

  async post(action, payload) {
    if (!this.webhookUrl) throw new Error(`${this.type} webhook URL is not configured.`);
    const response = await fetch(this.webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(this.apiKey ? { authorization: `Bearer ${this.apiKey}` } : {})
      },
      body: JSON.stringify({
        action,
        provider: this.provider,
        payload
      })
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.error || `${this.type} webhook request failed`);
    return {
      id: body.id || `${this.type}_${Date.now()}`,
      provider: this.provider,
      ...body
    };
  }
}

class SandboxTelehealthAdapter {
  constructor() {
    this.sessions = [];
  }

  async createSession({ intake, country }) {
    const session = {
      id: `tele_${this.sessions.length + 1}`,
      intakeId: intake.id,
      countryId: country.id,
      status: "created",
      provider: "sandbox-telehealth"
    };
    this.sessions.push(session);
    return session;
  }

  async connectRepresentative({ intake }) {
    const connection = {
      id: `rep_${this.sessions.length + 1}`,
      intakeId: intake.id,
      status: "connected",
      provider: "sandbox-telehealth"
    };
    this.sessions.push(connection);
    return connection;
  }
}

class SandboxHealthNotificationAdapter {
  constructor() {
    this.messages = [];
  }

  async send({ to, subject, body, metadata = {} }) {
    const message = {
      id: `health_msg_${this.messages.length + 1}`,
      to,
      subject,
      body,
      metadata,
      provider: "sandbox-health-notifications"
    };
    this.messages.push(message);
    return message;
  }
}

class SandboxEhrAdapter {
  constructor() {
    this.records = [];
  }

  async syncIntake({ intake, carePlan }) {
    const record = {
      id: `ehr_${this.records.length + 1}`,
      intakeId: intake.id,
      carePlan,
      provider: "sandbox-ehr"
    };
    this.records.push(record);
    return record;
  }
}

class SandboxHealthAiAdapter {
  async run({ type, country, intake }) {
    let text = `Health AI reviewed ${country.name}.`;
    if (type === "safety") {
      text = `${country.name} safety review: maintain supervised triage, monitor ${country.risk_level || "current"} risk, and escalate queue pressure early.`;
    }
    if (type === "inspector") {
      text = `${country.name} map inspector: ${country.facilities || 0} facilities, ${country.patients || 0} patients, heat ${country.heat_index_c || "n/a"}C.`;
    }
    if (type === "careplan") {
      text = `Care plan for ${intake.patient_ref}: monitor symptoms, review heat exposure, confirm nearest facility, and escalate if representative support is needed.`;
    }

    return {
      text,
      provider: "sandbox-health-ai",
      model: null,
      metadata: { type }
    };
  }
}

module.exports = {
  HealthIntegrations,
  createHealthIntegrations,
  WebhookHealthAdapter,
  MissingHealthProviderAdapter,
  SandboxTelehealthAdapter,
  SandboxHealthNotificationAdapter,
  SandboxEhrAdapter,
  SandboxHealthAiAdapter
};
