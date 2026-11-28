"use strict";
// Paying for Koach Learn courses: Stripe for US dollars (cards), Paystack for naira and shillings (cards, bank transfer, wallets, M-Pesa). Owner's choice, 27 Nov 2026.
// Nothing is granted on the page's word: a purchase is granted only after the provider itself says the payment is complete -- by asking the provider (confirm), or from a
// Stripe webhook whose signature checks out. The amount and currency paid must be exactly the plan's price, worked out again here from the price list, never from the page.
//
// Settings (Render): STRIPE_SECRET_KEY, PAYSTACK_SECRET_KEY, KOACHLEARN_STRIPE_WEBHOOK_SECRET (optional backup for a closed tab), KOACHLEARN_RETURN_ORIGIN (default: the live site).
const crypto = require("crypto");
const plans = require("./course-plans.js");

const PLAN_NAMES = Object.freeze({ course1: "1 Koach Learn course with Kyro", course3: "3 Koach Learn courses with Kyro", course10: "10 Koach Learn courses with Kyro",
  year: "Every Koach Learn course with Kyro for a year", voice: "Extra Kyro voice minutes" });

class CheckoutError extends Error { constructor(code, message, status = 400) { super(message); this.code = code; this.status = status; } }

function createCourseCheckout({ env = process.env, fetchImpl = globalThis.fetch, now = () => Date.now(), randomId = () => crypto.randomBytes(9).toString("hex") } = {}) {
  const stripeKey = String(env.STRIPE_SECRET_KEY || "");
  const paystackKey = String(env.PAYSTACK_SECRET_KEY || "");
  const origin = (() => { try { const u = new URL(env.KOACHLEARN_RETURN_ORIGIN || env.NEXUS_PUBLIC_ORIGIN || "https://nexus-genesis-certified.onrender.com"); return u.origin; } catch { return "https://nexus-genesis-certified.onrender.com"; } })();
  const providerFor = currency => (currency === "NGN" || currency === "KES" ? "paystack" : "stripe");
  const ready = currency => (providerFor(currency) === "paystack" ? Boolean(paystackKey) : Boolean(stripeKey));

  async function call(url, init) {
    const response = await fetchImpl(url, { ...init, signal: AbortSignal.timeout(20000) });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new CheckoutError("provider_error", (body && (body.error?.message || body.message)) || `The payment provider answered ${response.status}.`, 502);
    return body;
  }

  // -> { provider, reference, url }
  async function start({ tenantId, userId, email, country, lang, planId }) {
    const list = plans.priceList({ country, lang });
    const plan = plans.planFrom(list, planId);
    if (!plan) throw new CheckoutError("unknown_plan", "That plan does not exist.");
    if (!ready(list.currency)) throw new CheckoutError("payments_not_set_up", "Payments are not set up yet.", 503);
    const meta = { kind: "koachlearn-courses", plan: plan.id, listKey: list.key, userId, tenantId };
    if (providerFor(list.currency) === "stripe") {
      const form = new URLSearchParams({ mode: "payment", "line_items[0][quantity]": "1", "line_items[0][price_data][currency]": "usd",
        "line_items[0][price_data][unit_amount]": String(plan.amount), "line_items[0][price_data][product_data][name]": PLAN_NAMES[plan.id],
        client_reference_id: userId, success_url: `${origin}/?koachlearn_paid=stripe&ref={CHECKOUT_SESSION_ID}`, cancel_url: `${origin}/?koachlearn_paid=cancelled` });
      if (email) form.set("customer_email", email);
      for (const [k, v] of Object.entries(meta)) form.set(`metadata[${k}]`, String(v));
      const session = await call("https://api.stripe.com/v1/checkout/sessions", { method: "POST",
        headers: { authorization: `Bearer ${stripeKey}`, "content-type": "application/x-www-form-urlencoded", "idempotency-key": `kl:${userId}:${plan.id}:${Math.floor(now() / 60000)}` }, body: form.toString() });
      let url; try { url = new URL(session.url); } catch { throw new CheckoutError("provider_error", "The payment provider gave no checkout page.", 502); }
      if (!/^cs_[A-Za-z0-9_]+$/.test(String(session.id || "")) || url.protocol !== "https:" || url.hostname !== "checkout.stripe.com") throw new CheckoutError("provider_error", "The payment provider gave an unexpected checkout page.", 502);
      return { provider: "stripe", reference: session.id, url: url.href, amount: plan.amount, currency: list.currency, plan: plan.id };
    }
    if (!email) throw new CheckoutError("email_needed", "An email address is needed to pay with Paystack.");
    const reference = `kl_${randomId()}`;
    const result = await call("https://api.paystack.co/transaction/initialize", { method: "POST",
      headers: { authorization: `Bearer ${paystackKey}`, "content-type": "application/json" },
      body: JSON.stringify({ email, amount: plan.amount, currency: list.currency, reference, callback_url: `${origin}/?koachlearn_paid=paystack`, metadata: meta }) });
    let url; try { url = new URL(result?.data?.authorization_url); } catch { throw new CheckoutError("provider_error", "The payment provider gave no checkout page.", 502); }
    if (url.protocol !== "https:" || !/(^|\.)paystack\.(com|co)$/.test(url.hostname)) throw new CheckoutError("provider_error", "The payment provider gave an unexpected checkout page.", 502);
    return { provider: "paystack", reference, url: url.href, amount: plan.amount, currency: list.currency, plan: plan.id };
  }

  // The purchase a paid checkout is worth, if the paid amount and currency are exactly the plan's price. -> purchase or null
  function purchaseFrom({ meta, amount, currency, provider, reference }) {
    if (!meta || meta.kind !== "koachlearn-courses") return null;
    const list = plans.PRICE_LISTS[meta.listKey];
    if (!list || !plans.PLAN_IDS.includes(meta.plan)) return null;
    const listCurrency = String(meta.listKey).split("|")[2];
    if (String(currency || "").toUpperCase() !== listCurrency || Number(amount) !== list[meta.plan]) return null;
    const courses = { course1: 1, course3: 3, course10: 10, year: Infinity, voice: 0 }[meta.plan];
    const voiceMinutes = meta.plan === "year" ? list.yearMinutes : meta.plan === "voice" ? list.voiceMinutes : courses * plans.MINUTES_PER_COURSE;
    return { reference, plan: meta.plan, courses, voiceMinutes, amount: Number(amount), currency: listCurrency, provider, userId: meta.userId, tenantId: meta.tenantId };
  }

  // Asks the provider whether this checkout is paid. -> { paid, purchase? }
  async function confirm({ provider, reference }) {
    if (provider === "stripe") {
      if (!stripeKey || !/^cs_[A-Za-z0-9_]+$/.test(String(reference || ""))) return { paid: false };
      const s = await call(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(reference)}`, { headers: { authorization: `Bearer ${stripeKey}` } });
      if (s.id !== reference || s.status !== "complete" || s.payment_status !== "paid") return { paid: false };
      const purchase = purchaseFrom({ meta: s.metadata, amount: s.amount_total, currency: s.currency, provider, reference });
      return purchase ? { paid: true, purchase } : { paid: false, mismatch: true };
    }
    if (provider === "paystack") {
      if (!paystackKey || !/^kl_[a-f0-9]{6,40}$/.test(String(reference || ""))) return { paid: false };
      const v = await call(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, { headers: { authorization: `Bearer ${paystackKey}` } });
      const d = v && v.data;
      if (!d || d.reference !== reference || d.status !== "success") return { paid: false };
      const meta = typeof d.metadata === "string" ? (() => { try { return JSON.parse(d.metadata); } catch { return null; } })() : d.metadata;
      const purchase = purchaseFrom({ meta, amount: d.amount, currency: d.currency, provider, reference });
      return purchase ? { paid: true, purchase } : { paid: false, mismatch: true };
    }
    return { paid: false };
  }

  // A Stripe webhook (checkout.session.completed), checked with its signature. -> purchase or null
  function stripeWebhook(raw, signature) {
    const secret = String(env.KOACHLEARN_STRIPE_WEBHOOK_SECRET || "");
    if (!secret) throw new CheckoutError("webhook_not_set_up", "The Stripe webhook is not set up.", 503);
    const fields = String(signature || "").split(",").map(item => item.split("="));
    const timestamp = Number(fields.find(item => item[0] === "t")?.[1]);
    if (!Number.isFinite(timestamp) || Math.abs(now() / 1000 - timestamp) > 300) throw new CheckoutError("bad_signature", "Invalid webhook signature.");
    const expected = crypto.createHmac("sha256", secret).update(`${timestamp}.`).update(raw).digest();
    const ok = fields.filter(item => item[0] === "v1" && /^[a-f0-9]{64}$/i.test(item[1] || "")).some(item => crypto.timingSafeEqual(expected, Buffer.from(item[1], "hex")));
    if (!ok) throw new CheckoutError("bad_signature", "Invalid webhook signature.");
    const event = JSON.parse(Buffer.from(raw).toString("utf8"));
    if (event.type !== "checkout.session.completed") return null;
    const s = event.data && event.data.object;
    if (!s || s.payment_status !== "paid" || !/^cs_[A-Za-z0-9_]+$/.test(String(s.id || ""))) return null;
    return purchaseFrom({ meta: s.metadata, amount: s.amount_total, currency: s.currency, provider: "stripe", reference: s.id });
  }

  return Object.freeze({ start, confirm, stripeWebhook, purchaseFrom, ready, providerFor, origin });
}

module.exports = Object.freeze({ createCourseCheckout, CheckoutError, PLAN_NAMES });
