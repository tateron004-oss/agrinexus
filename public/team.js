"use strict";
(() => {
  const byId = id => document.getElementById(id);
  const notice = text => { byId("notice").textContent = text; };
  const el = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };

  async function api(path, method = "GET", body) {
    const response = await fetch(`/api/team${path}`, { method, credentials: "same-origin", headers: body ? { "content-type": "application/json" } : {}, body: body ? JSON.stringify(body) : undefined });
    const result = await response.json().catch(() => ({}));
    if (response.status === 401) throw new Error("Sign in to Kyro first (use the link at the top), then reload this page.");
    if (response.status === 403 && /business manager/i.test(result.error || "")) throw new Error("Only a business manager can open this page. Ask the owner to make your account a business manager.");
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
    title.append(el("span", `pill ${member.active ? "on" : "off"}`, member.active ? "Active" : "Switched off"));
    if (member.businessManager) title.append(el("span", "pill mgr", "Business manager"));
    node.append(title, el("p", "small", member.email));

    const phones = el("ul", "phones");
    member.phones.forEach(phone => {
      const item = el("li", "", `${phone.phone}${phone.label ? ` · ${phone.label}` : ""}`);
      if (canRemoveNumbers) {
        const remove = el("button", "secondary danger", "Remove");
        remove.addEventListener("click", () => act(remove, () => api("/phone-numbers/remove", "POST", { id: phone.id }), () => "That phone number was removed."));
        item.append(remove);
      }
      phones.append(item);
    });
    if (!member.phones.length) phones.append(el("li", "small", "No phone linked yet. Without one, this person cannot talk to Kyro by phone."));
    node.append(phones);

    const actions = el("div", "actions");
    const reset = el("button", "secondary", "New password");
    reset.addEventListener("click", () => act(reset, () => api("/users/reset-password", "POST", { email: member.email }), result => {
      showSecret(`New password for ${result.reset.name || result.reset.email}`, `Their old password and any phone or browser they were signed in on no longer work. They sign in at the usual page with ${result.reset.email} and this password:`, result.reset.password);
      return "A new password was made. It is shown once, at the top of the page.";
    }));
    const toggle = el("button", member.active ? "secondary danger" : "", member.active ? "Switch off" : "Switch on");
    toggle.addEventListener("click", () => act(toggle, () => api("/users/status", "POST", { email: member.email, active: !member.active }),
      () => (member.active ? `${member.name || member.email} is switched off. They cannot sign in, and their phone is no longer answered.` : `${member.name || member.email} is switched on again.`)));
    actions.append(reset, toggle);
    node.append(actions);

    const form = el("form", "row");
    form.autocomplete = "off";
    const phoneLabel = el("label", "", "Phone, with country code");
    const phoneInput = el("input"); phoneInput.name = "phone"; phoneInput.placeholder = "+254712345678"; phoneInput.required = true; phoneInput.inputMode = "tel";
    phoneLabel.append(phoneInput);
    const nameLabel = el("label", "", "Label (optional)");
    const nameInput = el("input"); nameInput.name = "label"; nameInput.maxLength = 60; nameInput.placeholder = "e.g. Mary's mobile";
    nameLabel.append(nameInput);
    const add = el("button", "secondary", "Link phone"); add.type = "submit";
    form.append(phoneLabel, nameLabel, add);
    form.addEventListener("submit", event => {
      event.preventDefault();
      act(add, () => api("/phone-numbers", "POST", { email: member.email, phone: phoneInput.value, label: nameInput.value }), () => "That phone is linked. It can now call Kyro as this person.");
    });
    node.append(form);
    return node;
  }

  function render(state) {
    const team = byId("team"); team.replaceChildren();
    (state.team || []).forEach(member => team.append(person(member, true)));
    if (!(state.team || []).length) team.append(el("p", "empty", "Nobody is on your team yet. Add the first person above."));
    byId("limit").textContent = state.limit ? `${(state.team || []).length} of ${state.limit} people.` : "";
    if (state.created) showSecret(`${state.created.name} has been added`, `They sign in at the usual page with ${state.created.email} and this temporary password:`, state.created.password);
  }

  byId("addForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector("button");
    act(button, () => api("/users", "POST", { name: form.elements.name.value, email: form.elements.email.value }), result => { form.reset(); return `${result.created.name} was added to your team.`; });
  });

  api("/users").then(state => { byId("addSection").hidden = false; render(state); notice(`Signed in as ${state.manager.name || state.manager.email}.`); }).catch(error => notice(error.message));
})();
