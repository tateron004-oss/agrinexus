"use strict";

const SCHEMA_VERSION = 1;

function schema(processId, options) {
  return Object.freeze({
    processId,
    version: SCHEMA_VERSION,
    sensitivity: "standard",
    confirmationRequired: true,
    ...options,
    fields: Object.freeze((options.fields || []).map((field) => Object.freeze(field)))
  });
}

const PROCESS_SCHEMAS = Object.freeze({
  agriculture: schema("agriculture", {
    fields: [
      { key: "subject", aliases: ["crop", "livestock", "product"] },
      { key: "location", aliases: ["location", "city", "region"] },
      { key: "observation", aliases: ["observation", "what are you seeing", "symptoms", "notes"] }
    ]
  }),
  health: schema("health", {
    sensitivity: "health",
    fields: [
      { key: "reading", aliases: ["blood pressure", "reading", "glucose", "weight"] },
      { key: "measuredAt", aliases: ["when measured", "date", "time"] },
      { key: "symptoms", aliases: ["symptom", "symptoms", "notes", "comments"] }
    ]
  }),
  telehealth: schema("telehealth", {
    sensitivity: "health",
    fields: [
      { key: "reason", aliases: ["reason for visit", "reason", "care needed"] },
      { key: "preferredDate", aliases: ["preferred date", "date", "appointment date"] },
      { key: "provider", aliases: ["provider", "care provider", "doctor"] }
    ]
  }),
  "mobile-clinic": schema("mobile-clinic", {
    sensitivity: "health",
    fields: [
      { key: "location", aliases: ["location", "city", "region"] },
      { key: "careNeeded", aliases: ["care needed", "reason", "service"] },
      { key: "travelDistance", aliases: ["travel distance", "distance"] }
    ]
  }),
  pharmacy: schema("pharmacy", {
    sensitivity: "health",
    fields: [
      { key: "medication", aliases: ["medication", "medicine", "drug"] },
      { key: "requestType", aliases: ["request type", "request", "question"] },
      { key: "pharmacy", aliases: ["pharmacy", "location"] }
    ]
  }),
  learning: schema("learning", {
    fields: [
      { key: "topic", aliases: ["topic", "skill", "question", "lesson"] },
      { key: "level", aliases: ["learning level", "level"] },
      { key: "language", aliases: ["language"] }
    ]
  }),
  workforce: schema("workforce", {
    fields: [
      { key: "name", aliases: ["name", "full name"] },
      { key: "role", aliases: ["role", "target role", "job"] },
      { key: "experience", aliases: ["experience", "work experience", "employment history"] },
      { key: "skills", aliases: ["skill", "skills"] },
      { key: "location", aliases: ["location", "city", "region"] },
      { key: "preference", aliases: ["work preference", "preference"] }
    ]
  }),
  marketplace: schema("marketplace", {
    fields: [
      { key: "product", aliases: ["product", "crop", "item"] },
      { key: "quantity", aliases: ["quantity", "amount"] },
      { key: "location", aliases: ["location", "city", "region"] }
    ]
  }),
  reminders: schema("reminders", {
    fields: [
      { key: "reminder", aliases: ["reminder", "task"] },
      { key: "time", aliases: ["time", "date", "when"] },
      { key: "repeat", aliases: ["repeat", "schedule"] }
    ]
  })
});

function normalizeProcessId(value) {
  const normalized = String(value || "current-form").trim().toLowerCase();
  if (normalized.includes(":")) return normalized.split(":")[0];
  return normalized;
}

function getProcessSchema(processId, visibleFields = []) {
  const normalized = normalizeProcessId(processId);
  const registered = PROCESS_SCHEMAS[normalized];
  if (registered) return registered;
  return schema(normalized, {
    fields: visibleFields.map((field) => ({
      key: field.key,
      aliases: [field.label || field.key]
    }))
  });
}

module.exports = {
  PROCESS_SCHEMAS,
  SCHEMA_VERSION,
  getProcessSchema,
  normalizeProcessId
};
