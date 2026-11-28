"use strict";
// Koach Learn courses are paid (owner, 27 Nov 2026: no free courses; every course keeps $3 for the company after what it costs to teach). This joins the price list
// (course-plans.js), what each person bought (course-account.js) and the checkout (course-checkout.js) for the planner and the routes.
//
// Switches (Render):
//   KOACHLEARN_COURSES_PAID=1        courses are studied only with a purchase. Off until payments are set up, so no one is ever asked to pay where they cannot.
//   KOACHLEARN_FREE_FIRST_LESSON=1   the first lesson of every course may be studied without a purchase, by typing (no voice minutes come with it). Off by default.
const plans = require("./course-plans.js");
const account = require("./course-account.js");
const { createCourseCheckout, CheckoutError } = require("./course-checkout.js");

// About how many minutes a spoken tutoring turn takes: the words Kyro says and the words the learner said, at about 140 a minute, and a few seconds between.
function spokenMinutes(kyroText, learnerText) {
  const words = s => String(s || "").split(/\s+/).filter(Boolean).length;
  return Math.round(((words(kyroText) + words(learnerText)) / 140 + 0.1) * 100) / 100;
}

function createCourseBilling({ env = process.env, records = null, checkout = null, now = () => Date.now() } = {}) {
  const pay = checkout || createCourseCheckout({ env, now });
  const enforced = env.KOACHLEARN_COURSES_PAID === "1";
  const freeFirstLesson = env.KOACHLEARN_FREE_FIRST_LESSON === "1";
  const scopeOk = scope => Boolean(records && scope && scope.tenantId && scope.userId);

  async function summary(scope) {
    if (!scopeOk(scope)) return account.summary(null, now());
    return account.summary((await account.read(records, scope)).data, now());
  }
  // May this person study this course now? -> { ok, why, summary, voiceLeft }
  //   why: "not-enforced" | "chosen" | "all" | "slot" | "free-lesson" | "none" | "guest"
  async function access(scope, { slug, lessonIndex = 0, guest = false } = {}) {
    if (!enforced) return { ok: true, why: "not-enforced", voiceLeft: Infinity };
    if (guest || !scopeOk(scope)) {
      if (freeFirstLesson && lessonIndex === 0) return { ok: true, why: "free-lesson", voiceLeft: 0 };
      return { ok: false, why: "guest", voiceLeft: 0 };
    }
    await confirmPending(scope).catch(() => null);
    let result = null;
    await account.update(records, scope, data => { result = account.choose(data, slug, now()); return result.changed ? result.data : null; });
    const s = await summary(scope);
    if (result && result.ok) return { ok: true, why: result.why, summary: s, voiceLeft: s.voiceLeft };
    if (freeFirstLesson && lessonIndex === 0) return { ok: true, why: "free-lesson", summary: s, voiceLeft: 0 };
    return { ok: false, why: "none", summary: s, voiceLeft: s.voiceLeft };
  }
  // Counts a spoken tutoring turn against the voice minutes. -> minutes left
  async function useVoice(scope, minutes) {
    if (!enforced || !scopeOk(scope) || !(minutes > 0)) return Infinity;
    const next = await account.update(records, scope, data => account.useVoice(data, minutes));
    return account.summary(next, now()).voiceLeft;
  }
  async function start(scope, { email, country, lang, planId }) {
    const started = await pay.start({ tenantId: scope.tenantId, userId: scope.userId, email, country, lang, planId });
    if (scopeOk(scope)) await account.update(records, scope, data => account.addPending(data, { reference: started.reference, provider: started.provider, plan: started.plan }, now()));
    return started;
  }
  // The person came back from paying (or asked): the provider is asked, and a paid checkout of THEIRS becomes a purchase. -> { paid, granted, purchase }
  async function confirm(scope, { provider, reference }) {
    const checked = await pay.confirm({ provider, reference });
    if (!checked.paid || !checked.purchase) return { paid: false, granted: false };
    if (checked.purchase.userId !== scope.userId || checked.purchase.tenantId !== scope.tenantId) return { paid: false, granted: false, notYours: true };
    let granted = false;
    await account.update(records, scope, data => { const g = account.grant(data, checked.purchase, now()); granted = g.granted; return g.data; });
    return { paid: true, granted, purchase: checked.purchase };
  }
  // Checkouts started and not yet confirmed (a tab closed before coming back) are asked about again, at most 3 at a time and not before a minute has passed.
  async function confirmPending(scope, { all = false } = {}) {
    if (!scopeOk(scope)) return;
    const { data } = await account.read(records, scope);
    const due = Object.entries(data.pending).filter(([, p]) => all || now() - Date.parse(p.at) > 60000).slice(0, 3);
    for (const [reference, p] of due) await confirm(scope, { provider: p.provider, reference }).catch(() => null);
  }
  // A Stripe webhook whose signature checked out. -> { granted }
  async function grantFromWebhook(purchase) {
    if (!purchase || !records) return { granted: false };
    const scope = { tenantId: purchase.tenantId, userId: purchase.userId };
    let granted = false;
    await account.update(records, scope, data => { const g = account.grant(data, purchase, now()); granted = g.granted; return g.data; });
    return { granted };
  }
  return Object.freeze({ enforced, freeFirstLesson, summary, access, useVoice, start, confirm, confirmPending, grantFromWebhook, stripeWebhook: (raw, sig) => pay.stripeWebhook(raw, sig),
    prices: ({ country, lang }) => plans.priceList({ country, lang }), ready: currency => pay.ready(currency) });
}

module.exports = Object.freeze({ createCourseBilling, spokenMinutes, CheckoutError });
