"use strict";
(() => {
  const text = globalThis.KyroPageText;
  // The page's words come from public/page-text.js, in the signed-in person's language (Kiswahili or English; English for anything missing).
  let language = text.savedLanguage();
  const t = (key, params) => text.tx(language, key, params);
  const byId = id => document.getElementById(id);
  const notice = message => { byId("notice").textContent = message; };
  const el = (tag, className, label) => { const node = document.createElement(tag); if (className) node.className = className; if (label !== undefined) node.textContent = label; return node; };
  let knownBusinesses = [];
  let activityBusiness = "";
  text.applyStatic(language);

  async function api(path, method = "GET", body) {
    const response = await fetch(`/api/platform${path}`, { method, credentials: "same-origin", headers: body ? { "content-type": "application/json" } : {}, body: body ? JSON.stringify(body) : undefined });
    const result = await response.json().catch(() => ({}));
    if (response.status === 401) throw new Error(t("signInFirst"));
    if (response.status === 403) throw new Error(t("platform.notOwner"));
    if (!response.ok) throw new Error(result.error ? text.serverError(language, result.error) : t("didNotWork"));
    return result;
  }

  function showSecret(title, message, password) {
    byId("secretTitle").textContent = title;
    byId("secretText").textContent = message;
    byId("secretPassword").textContent = password;
    byId("secret").hidden = false;
    byId("secret").scrollIntoView({ block: "nearest" });
  }
  byId("secretClose").addEventListener("click", () => { byId("secretPassword").textContent = ""; byId("secret").hidden = true; });

  async function act(button, work, done) {
    button.disabled = true;
    try { const result = await work(); render(result); if (done) notice(done(result)); }
    catch (error) { notice(error.message); }
    button.disabled = false;
  }

  function business(item) {
    const node = el("article", "card");
    const title = el("h3", "", item.name || item.id);
    title.append(el("span", "pill mgr", item.id));
    if (item.closed) title.append(el("span", "pill off", t("closed")));
    node.append(title);
    node.append(el("p", "small", item.recordFound
      ? t("platform.peopleLine", { n: item.people, unit: t(item.people === 1 ? "platform.person" : "platform.people"), admins: item.admins.join(", ") || t("platform.none") })
      : t("platform.noRecord")));
    if (item.usage) {
      const last = item.usage.lastActivityAt ? t("platform.lastActivity", { date: new Date(item.usage.lastActivityAt).toLocaleDateString() }) : t("platform.noActivity");
      node.append(el("p", "small", t("platform.useLine", { last, events: item.usage.recentEvents, orders: item.usage.orders, health: item.usage.healthIntakes, ai: item.usage.aiRuns })));
    }
    const numbers = el("ul", "phones");
    item.numbers.forEach(number => numbers.append(el("li", "", number)));
    if (!item.numbers.length) numbers.append(el("li", "small", t("platform.noNumber")));
    node.append(numbers);

    const actions = el("div", "actions");
    const reset = el("button", "secondary", t("platform.resetButton"));
    reset.addEventListener("click", () => act(reset, () => api("/businesses/admin-reset", "POST", { id: item.id }), result => {
      showSecret(t("newPasswordFor", { name: result.reset.name || result.reset.email }), t("resetText", { email: result.reset.email }), result.reset.password);
      return t("passwordMade");
    }));
    actions.append(reset);
    // Closing stops all access at once and deletes nothing; reopening brings it back as it was.
    const toggle = el("button", item.closed ? "" : "secondary danger", t(item.closed ? "platform.reopenButton" : "platform.closeButton"));
    toggle.addEventListener("click", () => act(toggle, () => api(item.closed ? "/businesses/reopen" : "/businesses/close", "POST", { id: item.id }),
      () => t(item.closed ? "platform.reopened" : "platform.closedNotice")));
    actions.append(toggle);
    node.append(actions);

    const form = el("form", "row");
    form.autocomplete = "off";
    const label = el("label", "", t("phoneLabelLong"));
    const input = el("input"); input.name = "number"; input.required = true; input.inputMode = "tel"; input.placeholder = "+254712345678";
    label.append(input);
    const link = el("button", "secondary", t("linkPhone")); link.type = "submit";
    form.append(label, link);
    form.addEventListener("submit", event => {
      event.preventDefault();
      act(link, () => api("/businesses/number", "POST", { id: item.id, number: input.value }), () => t("platform.numberLinked"));
    });
    node.append(form);

    // What this business sends as. Blank fields are left as they are; type "clear" in a field to remove it. A business never sends as the platform: with nothing set here it cannot send that kind of message.
    const sends = item.sends || {};
    const settings = el("form", "row");
    settings.autocomplete = "off";
    settings.append(el("p", "small", t("platform.sendsAs")));
    const fields = [
      ["smsFrom", "+254712345678", sends.sms], ["whatsappFrom", "whatsapp:+254712345678", sends.whatsapp], ["emailFrom", "Green Valley <hello@yourdomain.com>", sends.email],
      ["paystackSubaccount", "ACCT_xxxxxxxx", sends.paystackPayout], ["flutterwaveSubaccount", "RS_xxxxxxxx", sends.flutterwavePayout]
    ];
    const inputs = {};
    fields.forEach(([key, example, current]) => {
      const name = t(`sender.${key}`);
      const field = el("label", "", current ? t("platform.fieldNow", { label: name, value: current }) : t("platform.fieldNotSet", { label: name }));
      const box = el("input"); box.name = key; box.placeholder = example; box.maxLength = 120;
      field.append(box); inputs[key] = box; settings.append(field);
    });
    const save = el("button", "secondary", t("platform.saveSender")); save.type = "submit";
    settings.append(save);
    settings.addEventListener("submit", event => {
      event.preventDefault();
      const body = { id: item.id };
      Object.entries(inputs).forEach(([key, box]) => { const value = box.value.trim(); if (value) body[key] = value.toLowerCase() === "clear" ? "" : value; });
      if (Object.keys(body).length === 1) { notice(t("platform.typeOne")); return; }
      act(save, () => api("/businesses/settings", "POST", body), () => t("platform.saved"));
    });
    node.append(settings);

    // Erasing is permanent and only for a closed business: type the id again.
    if (item.closed) {
      const erase = el("form", "row");
      erase.append(el("p", "small", t("platform.eraseNote")));
      const confirmLabel = el("label", "", t("platform.eraseConfirm", { id: item.id }));
      const confirmInput = el("input"); confirmInput.autocomplete = "off"; confirmLabel.append(confirmInput);
      const go = el("button", "secondary danger", t("platform.eraseButton")); go.type = "submit";
      erase.append(confirmLabel, go);
      erase.addEventListener("submit", event => {
        event.preventDefault();
        if (confirmInput.value.trim() !== item.id) { notice(t("platform.eraseTypeId")); return; }
        act(go, () => api("/businesses/erase", "POST", { id: item.id, confirm: confirmInput.value.trim() }),
          result => t("platform.erased", { id: item.id, people: result.erased.people, files: result.erased.uploadsRemoved, queued: result.erased.engineErasuresQueued }));
      });
      node.append(erase);
    }
    return node;
  }

  // The activity list: what the platform owner did, newest first. The business is shown by name and id; one that no longer exists (erased) is marked, and its entries stay.
  function activityEntry(entry) {
    const node = el("li", "activity-entry");
    const known = knownBusinesses.some(item => item.id === entry.businessId);
    const head = el("p", "activity-what", text.TEXT.en[`activity.${entry.action}`] ? t(`activity.${entry.action}`) : entry.action);
    node.append(head);
    if (entry.businessId) {
      const where = el("p", "activity-where");
      where.append(el("span", "", entry.businessName || entry.businessId), el("span", "pill mgr", entry.businessId));
      if (!known) where.append(el("span", "pill off", t("activity.erasedBusiness")));
      node.append(where);
    }
    const facts = entry.facts || {};
    const lines = ["adminEmail", "phone", "signInsEnded", "people", "uploadsRemoved", "engineErasuresQueued", "engineErasuresFailed"].filter(key => facts[key] !== undefined && facts[key] !== "")
      .map(key => t(`activity.fact.${key}`, { value: facts[key] }));
    if (Array.isArray(facts.fields) && facts.fields.length) lines.push(t("activity.fact.fields", { value: facts.fields.map(key => (text.TEXT.en[`sender.${key}`] ? t(`sender.${key}`) : key)).join(", ") }));
    lines.forEach(line => node.append(el("p", "small activity-fact", line)));
    const when = new Date(entry.at);
    node.append(el("p", "small activity-when", `${Number.isNaN(when.getTime()) ? entry.at : when.toLocaleString(language === "sw" ? "sw-KE" : undefined)} · ${t("activity.by", { who: entry.by || "?" })}`));
    return node;
  }

  function drawActivityFilter() {
    const filter = byId("activityFilter");
    filter.replaceChildren();
    filter.append(new Option(t("activity.all"), ""));
    const ids = knownBusinesses.map(item => item.id);
    if (activityBusiness && !ids.includes(activityBusiness)) filter.append(new Option(`${activityBusiness} ${t("activity.erasedBusiness")}`, activityBusiness));
    knownBusinesses.forEach(item => filter.append(new Option(item.name ? `${item.name} (${item.id})` : item.id, item.id)));
    filter.value = activityBusiness;
  }

  async function loadActivity() {
    const list = byId("activity");
    try {
      const result = await api(`/audit?limit=100${activityBusiness ? `&business=${encodeURIComponent(activityBusiness)}` : ""}`);
      list.replaceChildren();
      (result.entries || []).forEach(entry => list.append(activityEntry(entry)));
      if (!(result.entries || []).length) list.append(el("li", "empty", t("activity.empty")));
    } catch {
      list.replaceChildren(el("li", "empty", t("activity.failed")));
    }
  }

  function render(state) {
    const box = byId("businesses"); box.replaceChildren();
    knownBusinesses = state.businesses || [];
    knownBusinesses.forEach(item => box.append(business(item)));
    if (!knownBusinesses.length) box.append(el("p", "empty", t("platform.empty")));
    if (state.created) showSecret(t("platform.created", { name: state.created.name }), t("platform.createdText", { email: state.created.adminEmail }), state.created.password);
    drawActivityFilter();
    byId("activitySection").hidden = false;
    loadActivity();
  }

  byId("activityFilter").addEventListener("change", event => { activityBusiness = event.target.value; loadActivity(); });

  byId("addForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const field = name => form.elements[name].value;
    act(form.querySelector("button"), () => api("/businesses", "POST", { name: field("name"), id: field("id"), adminName: field("adminName"), adminEmail: field("adminEmail"), country: field("country") }), result => { form.reset(); return t("platform.createdNotice", { name: result.created.name }); });
  });

  api("/businesses").then(state => {
    // The server says what language this person uses; from here on the page follows that, not just the sign-in screen's choice.
    language = text.languageOf(state.viewer?.language || language);
    text.applyStatic(language);
    byId("addSection").hidden = false; render(state); notice(t("platform.signedIn"));
  }).catch(error => notice(error.message));
})();
