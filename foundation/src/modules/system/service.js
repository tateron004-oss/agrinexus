class SystemService {
  constructor({ db, config, modules = [] }) {
    this.db = db;
    this.config = config;
    this.modules = modules;
  }

  async health() {
    const database = await this.databaseHealth();
    const providers = this.providers();
    const warnings = [
      ...database.warnings,
      ...providers.flatMap(provider => provider.warnings)
    ];
    return {
      status: warnings.length ? "degraded" : "ok",
      database,
      providers,
      warnings
    };
  }

  providers() {
    return [
      providerStatus("openai", "AI", Boolean(this.config.ai.openaiApiKey), {
        model: this.config.ai.model,
        fallback: !this.config.ai.openaiApiKey
      }),
      providerStatus("maps", "Maps", this.config.maps.tileProvider === "openstreetmap" || Boolean(this.config.maps.mapboxToken), {
        tileProvider: this.config.maps.tileProvider,
        mapboxConfigured: Boolean(this.config.maps.mapboxToken)
      }),
      providerStatus("workforce-calendar", "Workforce calendar", this.config.workforce.calendarProvider === "sandbox" || Boolean(this.config.workforce.calendarWebhookUrl), {
        provider: this.config.workforce.calendarProvider
      }),
      providerStatus("workforce-notifications", "Workforce notifications", this.config.workforce.notificationProvider === "sandbox" || Boolean(this.config.workforce.notificationWebhookUrl), {
        provider: this.config.workforce.notificationProvider
      }),
      providerStatus("workforce-hris", "Workforce HRIS", this.config.workforce.hrisProvider === "sandbox" || Boolean(this.config.workforce.hrisWebhookUrl), {
        provider: this.config.workforce.hrisProvider
      }),
      providerStatus("workforce-shifts", "Workforce shifts", this.config.workforce.shiftProvider === "sandbox" || Boolean(this.config.workforce.shiftWebhookUrl), {
        provider: this.config.workforce.shiftProvider
      }),
      providerStatus("health-telehealth", "Health telehealth", this.config.health.telehealthProvider === "sandbox" || Boolean(this.config.health.telehealthWebhookUrl), {
        provider: this.config.health.telehealthProvider
      }),
      providerStatus("health-notifications", "Health notifications", this.config.health.notificationProvider === "sandbox" || Boolean(this.config.health.notificationWebhookUrl), {
        provider: this.config.health.notificationProvider
      }),
      providerStatus("health-ehr", "Health EHR", this.config.health.ehrProvider === "sandbox" || Boolean(this.config.health.ehrWebhookUrl), {
        provider: this.config.health.ehrProvider
      }),
      providerStatus("health-ai", "Health AI", this.config.health.aiProvider === "sandbox" || Boolean(this.config.health.aiWebhookUrl), {
        provider: this.config.health.aiProvider
      })
    ];
  }

  moduleStatus() {
    return {
      modules: this.modules.map(module => module.describe ? module.describe() : module)
    };
  }

  async databaseHealth() {
    if (!this.db.isConnected) {
      return {
        status: "offline",
        connected: false,
        warnings: ["DATABASE_URL is not set or database adapter is not configured."]
      };
    }
    try {
      await this.db.query("select 1 as ok");
      return { status: "ok", connected: true, warnings: [] };
    } catch (error) {
      return {
        status: "error",
        connected: false,
        error: error.message,
        warnings: ["Database adapter is configured but did not respond successfully."]
      };
    }
  }
}

function providerStatus(id, name, configured, metadata = {}) {
  return {
    id,
    name,
    status: configured ? "configured" : "missing",
    configured,
    metadata,
    warnings: configured ? [] : [`${name} provider is not fully configured.`]
  };
}

module.exports = { SystemService };
