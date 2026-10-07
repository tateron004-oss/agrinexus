"use strict";
(() => {
  const text = globalThis.KyroPageText;
  // The page's words come from public/page-text.js, in the signed-in person's language (Kiswahili or English; English for anything missing).
  let language = text.savedLanguage();
  const t = (key, params) => text.tx(language, key, params);
  const byId = id => document.getElementById(id);
  const notice = message => { byId("notice").textContent = message; };
  const el = (tag, className, label) => { const node = document.createElement(tag); if (className) node.className = className; if (label !== undefined) node.textContent = label; return node; };
  text.applyStatic(language);

  async function api(path, method = "GET", body) {
    const response = await fetch(`/api/team${path}`, { method, credentials: "same-origin", headers: body ? { "content-type": "application/json" } : {}, body: body ? JSON.stringify(body) : undefined });
    const result = await response.json().catch(() => ({}));
    if (response.status === 401) throw new Error(t("signInFirst"));
    if (response.status === 403 && /business manager/i.test(result.error || "")) throw new Error(t("team.notManager"));
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

  // Run one change, then redraw from what the server says is now true.
  async function act(button, work, done) {
    button.disabled = true;
    try { const result = await work(); render(result); if (done) notice(done(result)); }
    catch (error) { notice(error.message); }
    button.disabled = false;
  }

  function person(member, canRemoveNumbers) {
    const node = el("article", "card");
    const title = el("h3", "", member.name || member.email);
    title.append(el("span", `pill ${member.active ? "on" : "off"}`, member.active ? t("team.active") : t("team.off")));
    if (member.businessManager) title.append(el("span", "pill mgr", t("team.manager")));
    node.append(title, el("p", "small", member.email));

    const phones = el("ul", "phones");
    member.phones.forEach(phone => {
      const item = el("li", "", `${phone.phone}${phone.label ? ` · ${phone.label}` : ""}`);
      if (canRemoveNumbers) {
        const remove = el("button", "secondary danger", t("remove"));
        remove.addEventListener("click", () => act(remove, () => api("/phone-numbers/remove", "POST", { id: phone.id }), () => t("team.phoneRemoved")));
        item.append(remove);
      }
      phones.append(item);
    });
    if (!member.phones.length) phones.append(el("li", "small", t("team.noPhone")));
    node.append(phones);

    const actions = el("div", "actions");
    const reset = el("button", "secondary", t("team.newPassword"));
    reset.addEventListener("click", () => act(reset, () => api("/users/reset-password", "POST", { email: member.email }), result => {
      showSecret(t("newPasswordFor", { name: result.reset.name || result.reset.email }), t("resetText", { email: result.reset.email }), result.reset.password);
      return t("passwordMade");
    }));
    const toggle = el("button", member.active ? "secondary danger" : "", member.active ? t("team.switchOff") : t("team.switchOn"));
    toggle.addEventListener("click", () => act(toggle, () => api("/users/status", "POST", { email: member.email, active: !member.active }),
      () => t(member.active ? "team.switchedOff" : "team.switchedOn", { name: member.name || member.email })));
    actions.append(reset, toggle);
    node.append(actions);

    const form = el("form", "row");
    form.autocomplete = "off";
    const phoneLabel = el("label", "", t("phoneLabel"));
    const phoneInput = el("input"); phoneInput.name = "phone"; phoneInput.placeholder = "+254712345678"; phoneInput.required = true; phoneInput.inputMode = "tel";
    phoneLabel.append(phoneInput);
    const nameLabel = el("label", "", t("team.labelOptional"));
    const nameInput = el("input"); nameInput.name = "label"; nameInput.maxLength = 60; nameInput.placeholder = t("team.labelExample");
    nameLabel.append(nameInput);
    const add = el("button", "secondary", t("linkPhone")); add.type = "submit";
    form.append(phoneLabel, nameLabel, add);
    form.addEventListener("submit", event => {
      event.preventDefault();
      act(add, () => api("/phone-numbers", "POST", { email: member.email, phone: phoneInput.value, label: nameInput.value }), () => t("team.phoneLinked"));
    });
    node.append(form);
    return node;
  }

  function render(state) {
    const team = byId("team"); team.replaceChildren();
    (state.team || []).forEach(member => team.append(person(member, true)));
    if (!(state.team || []).length) team.append(el("p", "empty", t("team.empty")));
    byId("limit").textContent = state.limit ? t("team.count", { n: (state.team || []).length, limit: state.limit }) : "";
    if (state.created) showSecret(t("team.added", { name: state.created.name }), t("team.addedText", { email: state.created.email }), state.created.password);
  }

  byId("addForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector("button");
    act(button, () => api("/users", "POST", { name: form.elements.name.value, email: form.elements.email.value }), result => { form.reset(); return t("team.addedNotice", { name: result.created.name }); });
  });

  api("/users").then(state => {
    // The server says what language this person uses; from here on the page follows that, not just the sign-in screen's choice.
    language = text.languageOf(state.manager.language || language);
    text.applyStatic(language);
    byId("addSection").hidden = false; render(state); notice(t("team.signedInAs", { name: state.manager.name || state.manager.email }));
  }).catch(error => notice(error.message));
})();
