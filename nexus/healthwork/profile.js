"use strict";

const { startGuided } = require("../farmwork/guided.js");
const { listOf, clean, titleCase } = require("./common.js");

// The health worker's own details, used on referral letters and reports: their role, their facility, and the area they cover. Only what they say.
const ROLES = [
  { value: "community health worker", words: ["community health worker", "chw", "community", "chv", "village health worker", "vhw"] },
  { value: "nurse", words: ["nurse", "nursing"] }, { value: "midwife", words: ["midwife", "midwifery"] },
  { value: "clinical officer", words: ["clinical officer", "clinical", "co"] }, { value: "doctor", words: ["doctor", "physician", "medical officer", "dr"] },
  { value: "pharmacist", words: ["pharmacist", "pharmacy"] }, { value: "other", words: ["other", "something else", "technician", "assistant"] }
];

const templates = {
  clinic: {
    collection: "clinic", intro: "Let's set up your details for letters and reports.",
    questions: [
      { key: "role", ask: "What is your role? For example community health worker, nurse, midwife, clinical officer or doctor.", type: "choice", options: ROLES },
      { key: "facility", ask: "The name of your clinic or health post?", type: "text", max: 80, optional: true },
      { key: "area", ask: "The area or district you cover?", type: "text", max: 80, optional: true }
    ],
    async finish(ctx, answers) {
      const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
      const data = { role: answers.role, facility: answers.facility ? titleCase(answers.facility) : "", area: answers.area ? titleCase(answers.area) : "" };
      const existing = (await listOf(ctx, "clinic"))[0];
      if (existing) await ctx.store.update({ ...scope, record: { ...existing, data } });
      else await ctx.store.add({ ...scope, collection: "clinic", data });
      return `Saved: ${data.role}${data.facility ? ` at ${data.facility}` : ""}${data.area ? `, covering ${data.area}` : ""}. It will appear on your referral letters and reports.`;
    }
  }
};

const describeClinic = data => `${data.role}${data.facility ? ` at ${data.facility}` : ""}${data.area ? ` (${data.area})` : ""}`;

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, "");
  if (/^(?:set up|setup|update|edit|change) my (?:clinic|health work|health worker|facility)(?: profile| details)?$/i.test(t)) return startGuided(ctx, templates.clinic, {});
  if (/^(?:show|read|what are) my (?:clinic|health work|facility) (?:profile|details)$/i.test(t)) {
    const profile = (await listOf(ctx, "clinic"))[0];
    return profile ? `You are set up as ${describeClinic(profile.data)}. Say "update my clinic details" to change it.` : 'You haven\'t set up your clinic details yet. Say "set up my clinic details".';
  }
  return null;
}

module.exports = Object.freeze({ handle, templates, describeClinic });
