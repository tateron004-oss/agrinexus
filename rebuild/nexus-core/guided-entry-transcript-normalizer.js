"use strict";

function clean(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/[“”]/g, "\"")
    .replace(/[’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeExpression(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function fieldAliases(fields, schema) {
  const aliases = [];
  for (const field of fields || []) {
    const definition = (schema?.fields || []).find((item) => item.key === field.key)
      || (schema?.fields || []).find((item) => clean(field.label).toLowerCase().includes(clean(item.key).toLowerCase()));
    for (const alias of [field.key, field.label, ...(definition?.aliases || [])]) {
      const normalized = clean(alias).toLowerCase();
      if (normalized && !aliases.includes(normalized)) aliases.push(normalized);
    }
  }
  return aliases.sort((left, right) => right.length - left.length);
}

function namesKnownField(command, aliases) {
  return aliases.some((alias) => (
    new RegExp(`(?:^|\\b)${escapeExpression(alias)}(?:\\b|$)`, "i").test(command)
  ));
}

function normalizeGuidedEntryTranscript(command, { fields = [], schema = null } = {}) {
  const original = clean(command);
  if (!original) return Object.freeze({ original, normalized: "", changed: false, rules: Object.freeze([]) });

  const aliases = fieldAliases(fields, schema);
  const wake = original.match(
    /^(?:(hey|hello)\s*[,;:!?.-]*\s*)?(nexus|next(?:\s+(?:us|is))?)\b[\s,;:!?.-]*/i
  );
  if (!wake) return Object.freeze({ original, normalized: original, changed: false, rules: Object.freeze([]) });

  let remainder = clean(original.slice(wake[0].length));
  const rules = [];
  const recognizedWake = /^nexus$/i.test(wake[2]);

  if (/^ed\b/i.test(remainder) && namesKnownField(remainder, aliases)) {
    remainder = remainder.replace(/^ed\b/i, "add");
    rules.push("leading-action-ed-to-add");
  }

  const beginsGuidedAction = /^(?:add|append|enter|record|put|set|change|replace|correct|undo|revert|read|review|repeat|save|store|keep|reopen|restore|load|continue|submit|send|share|apply|publish|confirm|approve|cancel)\b/i
    .test(remainder);
  if (!recognizedWake && (!beginsGuidedAction || !namesKnownField(remainder, aliases))) {
    return Object.freeze({ original, normalized: original, changed: false, rules: Object.freeze([]) });
  }

  if (!recognizedWake) rules.unshift("wake-alias-to-nexus");
  if (wake[0] !== "Nexus ") rules.push("wake-boundary-canonicalized");
  const normalized = clean(`Nexus ${remainder}`);
  return Object.freeze({
    original,
    normalized,
    changed: normalized !== original,
    rules: Object.freeze(rules)
  });
}

module.exports = {
  normalizeGuidedEntryTranscript
};
