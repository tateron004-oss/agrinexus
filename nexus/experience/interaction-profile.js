"use strict";

const SUPPORTED_LOCALES = Object.freeze(["en", "es", "fr", "sw", "ar", "pt"]);
const RTL_LOCALES = new Set(["ar"]);

function normalizeLocale(value, fallback = "en") {
  const locale = String(value || "").trim().toLowerCase().replace(/_/g, "-").split("-")[0];
  if (SUPPORTED_LOCALES.includes(locale)) return locale;
  const safeFallback = String(fallback || "en").trim().toLowerCase().split("-")[0];
  return SUPPORTED_LOCALES.includes(safeFallback) ? safeFallback : "en";
}

function createInteractionProfile({ locale, userPreferences = {}, channel = "voice" } = {}) {
  const resolvedLocale = normalizeLocale(locale, userPreferences.locale);
  const accessibility = userPreferences.accessibility || {};
  const preferredFormats = unique([
    ...(Array.isArray(accessibility.preferredFormats) ? accessibility.preferredFormats : []),
    accessibility.screenReader ? "screen-reader" : null,
    accessibility.lowLiteracy ? "plain-language" : null,
    accessibility.captions ? "captions" : null,
    accessibility.largeText ? "large-text" : null
  ]);
  return Object.freeze({
    schema: "nexus.interaction-profile.v1",
    locale: resolvedLocale,
    supportedLocale: true,
    direction: RTL_LOCALES.has(resolvedLocale) ? "rtl" : "ltr",
    channel,
    voiceOnly: channel === "voice" || accessibility.voiceOnly === true,
    keyboardOperable: accessibility.keyboardOperable !== false,
    screenReader: accessibility.screenReader === true,
    lowLiteracy: accessibility.lowLiteracy === true,
    preferredFormats,
    requirements: Object.freeze({
      preserveLanguageAcrossWorkflow: true,
      preserveSafetyMeaning: true,
      doNotTranslateNamesOrIdentifiers: true,
      conciseSpokenPrompts: channel === "voice" || accessibility.lowLiteracy === true,
      announceVisibleOutcome: accessibility.screenReader === true || accessibility.voiceOnly === true
    })
  });
}

function unique(values) { return [...new Set(values.filter(Boolean).map(String))]; }

module.exports = Object.freeze({ SUPPORTED_LOCALES, normalizeLocale, createInteractionProfile });
