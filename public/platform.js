"use strict";
(() => {
  const byId = id => document.getElementById(id);
  const notice = text => { byId("notice").textContent = text; };
  const el = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };

  async function api(path, method = "GET", body) {
    const response = await fetch(`/api/platform${path}`, { method, credentials: "same-origin", headers: body ? { "content-type": "application/json" } : {}, body: body ? JSON.stringify(body) : undefined });
    const result = await response.json().catch(() => ({}));
    if (response.status === 401) throw new Error("Sign in to Kyro first (use the link at the top), then reload this page.");
    if (response.status === 403) throw new Error("Only the platform owner can open this page.");
    if (!response.ok) throw new Error(result.error || "That did not work.");
    return result;
  }

  function showSecret(title, text, password) {
    byId("secretTitle").textContent = title;
    byId("secretText").textContent = text;
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
    node.append(title);
    node.append(el("p", "small", item.recordFound ? `${item.people} ${item.people === 1 ? "person" : "people"} · Admin: ${item.admins.join(", ") || "none"}` : "This business's record could not be read."));
    const numbers = el("ul", "phones");
    item.numbers.forEach(number => numbers.append(el("li", "", number)));
    if (!item.numbers.length) numbers.append(el("li", "small", "No phone number linked yet. Calls to your own number never reach this business."));
    node.append(numbers);

    const actions = el("div", "actions");
    const reset = el("button", "secondary", "New password for the Admin");
    reset.addEventListener("click", () => act(reset, () => api("/businesses/admin-reset", "POST", { id: item.id }), result => {
      showSecret(`New password for ${result.reset.name || result.reset.email}`, `Their old password and every phone or browser they were signed in on no longer work. They sign in at the usual page with ${result.reset.email} and this password:`, result.reset.password);
      return "A new password was made. It is shown once, at the top of the page.";
    }));
    actions.append(reset);
    node.append(actions);

    const form = el("form", "row");
    form.autocomplete = "off";
    const label = el("label", "", "Phone number, with country code");
    const input = el("input"); input.name = "number"; input.required = true; input.inputMode = "tel"; input.placeholder = "+254712345678";
    label.append(input);
    const link = el("button", "secondary", "Link phone"); link.type = "submit";
    form.append(label, link);
    form.addEventListener("submit", event => {
      event.preventDefault();
      act(link, () => api("/businesses/number", "POST", { id: item.id, number: input.value }), () => "That number now belongs to this business: calls to it reach only this business's people.");
    });
    node.append(form);

    // What this business sends as. Blank fields are left as they are; type "clear" in a field to remove it. A business never sends as the platform: with nothing set here it cannot send that kind of message.
    const sends = item.sends || {};
    const settings = el("form", "row");
    settings.autocomplete = "off";
    settings.append(el("p", "small", "Sends as (set by you; the business cannot change these)"));
    const fields = [
      ["smsFrom", "SMS sender", "+254712345678", sends.sms], ["whatsappFrom", "WhatsApp sender", "whatsapp:+254712345678", sends.whatsapp], ["emailFrom", "Email sender", "Green Valley <hello@yourdomain.com>", sends.email],
      ["paystackSubaccount", "Paystack payout account", "ACCT_xxxxxxxx", sends.paystackPayout], ["flutterwaveSubaccount", "Flutterwave payout account", "RS_xxxxxxxx", sends.flutterwavePayout]
    ];
    const inputs = {};
    fields.forEach(([key, text, example, current]) => {
      const field = el("label", "", current ? `${text} (now ${current})` : `${text} (not set)`);
      const input = el("input"); input.name = key; input.placeholder = example; input.maxLength = 120;
      field.append(input); inputs[key] = input; settings.append(field);
    });
    const save = el("button", "secondary", "Save sender settings"); save.type = "submit";
    settings.append(save);
    settings.addEventListener("submit", event => {
      event.preventDefault();
      const body = { id: item.id };
      Object.entries(inputs).forEach(([key, input]) => { const value = input.value.trim(); if (value) body[key] = value.toLowerCase() === "clear" ? "" : value; });
      if (Object.keys(body).length === 1) { notice("Type a value in at least one field."); return; }
      act(save, () => api("/businesses/settings", "POST", body), () => "Saved. It applies to this business within about half a minute.");
    });
    node.append(settings);
    return node;
  }

  function render(state) {
    const box = byId("businesses"); box.replaceChildren();
    (state.businesses || []).forEach(item => box.append(business(item)));
    if (!(state.businesses || []).length) box.append(el("p", "empty", "No businesses yet. Create the first one above."));
    if (state.created) showSecret(`${state.created.name} has been created`, `Its first Admin signs in at the usual page with ${state.created.adminEmail} and this temporary password:`, state.created.password);
  }

  byId("addForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const field = name => form.elements[name].value;
    act(form.querySelector("button"), () => api("/businesses", "POST", { name: field("name"), id: field("id"), adminName: field("adminName"), adminEmail: field("adminEmail"), country: field("country") }), result => { form.reset(); return `${result.created.name} was created.`; });
  });

  api("/businesses").then(state => { render(state); notice("Signed in as the platform owner."); }).catch(error => notice(error.message));
})();
