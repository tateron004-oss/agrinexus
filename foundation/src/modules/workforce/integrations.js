class WorkforceIntegrations {
  constructor({ calendar, notifications, hris, scheduler } = {}) {
    this.calendar = calendar || new SandboxCalendarAdapter();
    this.notifications = notifications || new SandboxNotificationAdapter();
    this.hris = hris || new SandboxHrisAdapter();
    this.scheduler = scheduler || new SandboxShiftSchedulerAdapter();
  }
}

function createWorkforceIntegrations(config = {}) {
  const workforce = config.workforce || {};
  const apiKey = workforce.providerApiKey;
  return new WorkforceIntegrations({
    calendar: providerAdapter(workforce.calendarProvider, workforce.calendarWebhookUrl, apiKey, "calendar"),
    notifications: providerAdapter(workforce.notificationProvider, workforce.notificationWebhookUrl, apiKey, "notifications"),
    hris: providerAdapter(workforce.hrisProvider, workforce.hrisWebhookUrl, apiKey, "hris"),
    scheduler: providerAdapter(workforce.shiftProvider, workforce.shiftWebhookUrl, apiKey, "shift-scheduler")
  });
}

function providerAdapter(provider, webhookUrl, apiKey, type) {
  if (!provider || provider === "sandbox") return null;
  if (provider === "webhook") return new WebhookWorkforceAdapter({ webhookUrl, apiKey, type });
  if (provider === "google-calendar" && type === "calendar") return new WebhookWorkforceAdapter({ webhookUrl, apiKey, type, provider });
  if (provider === "outlook-calendar" && type === "calendar") return new WebhookWorkforceAdapter({ webhookUrl, apiKey, type, provider });
  return new MissingProviderAdapter({ provider, type });
}

class MissingProviderAdapter {
  constructor({ provider, type }) {
    this.provider = provider;
    this.type = type;
  }

  async createInterviewEvent() {
    throw new Error(`${this.type} provider ${this.provider} is not configured.`);
  }

  async send() {
    throw new Error(`${this.type} provider ${this.provider} is not configured.`);
  }

  async syncApplication() {
    throw new Error(`${this.type} provider ${this.provider} is not configured.`);
  }

  async createShift() {
    throw new Error(`${this.type} provider ${this.provider} is not configured.`);
  }
}

class WebhookWorkforceAdapter {
  constructor({ webhookUrl, apiKey, type, provider = "webhook" }) {
    this.webhookUrl = webhookUrl;
    this.apiKey = apiKey;
    this.type = type;
    this.provider = provider;
  }

  async createInterviewEvent(payload) {
    return this.post("calendar.create_interview_event", payload);
  }

  async send(payload) {
    return this.post("notifications.send", payload);
  }

  async syncApplication(payload) {
    return this.post("hris.sync_application", payload);
  }

  async createShift(payload) {
    return this.post("shift.create", payload);
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

class SandboxCalendarAdapter {
  constructor() {
    this.events = [];
  }

  async createInterviewEvent({ candidateProfileId, title, startsAt, metadata = {} }) {
    const event = {
      id: `cal_${this.events.length + 1}`,
      candidateProfileId,
      title,
      startsAt,
      metadata,
      provider: "sandbox-calendar"
    };
    this.events.push(event);
    return event;
  }
}

class SandboxNotificationAdapter {
  constructor() {
    this.messages = [];
  }

  async send({ to, channel = "in-app", subject, body, metadata = {} }) {
    const message = {
      id: `msg_${this.messages.length + 1}`,
      to,
      channel,
      subject,
      body,
      metadata,
      provider: "sandbox-notifications"
    };
    this.messages.push(message);
    return message;
  }
}

class SandboxHrisAdapter {
  constructor() {
    this.records = [];
  }

  async syncApplication({ application, role, profile }) {
    const record = {
      id: `hris_${this.records.length + 1}`,
      applicationId: application.id,
      roleId: role.id,
      candidateProfileId: profile.id,
      status: application.status,
      provider: "sandbox-hris"
    };
    this.records.push(record);
    return record;
  }
}

class SandboxShiftSchedulerAdapter {
  constructor() {
    this.shifts = [];
  }

  async createShift({ candidateProfileId, routeName, preferredStart }) {
    const shift = {
      id: `shift_${this.shifts.length + 1}`,
      candidateProfileId,
      routeName,
      startsAt: preferredStart || "Tomorrow 07:30",
      title: `Field Shift - ${preferredStart || "Tomorrow 07:30"}`,
      provider: "sandbox-shift-scheduler"
    };
    this.shifts.push(shift);
    return shift;
  }
}

module.exports = {
  WorkforceIntegrations,
  createWorkforceIntegrations,
  WebhookWorkforceAdapter,
  MissingProviderAdapter,
  SandboxCalendarAdapter,
  SandboxNotificationAdapter,
  SandboxHrisAdapter,
  SandboxShiftSchedulerAdapter
};
