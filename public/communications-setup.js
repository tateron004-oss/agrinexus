"use strict";
(() => {
  const byId = id => document.getElementById(id);
  const notice = text => { byId("notice").textContent = text; };
  const STATE_LABEL = { ready: "Set up", off: "Switched off", "needs-setup": "Needs setup", simulated: "Pretend only" };
  const TEST_LABEL = { sms: "text", whatsapp: "WhatsApp message", call: "phone call", calls: "phone call", email: "email" };

  async function api(path, method = "GET", body) {
    const response = await fetch(`/api/admin/communications${path}`, { method, credentials: "same-origin", headers: body ? { "content-type": "application/json" } : {}, body: body ? JSON.stringify(body) : undefined });
    const result = await response.json().catch(() => ({}));
    if (response.status === 401) throw new Error("Sign in to Kyro as the owner first (use the link at the top), then reload this page.");
    if (response.status === 403) throw new Error("Only the owner (an Admin account) can open this page.");
    if (!response.ok) throw new Error(result.error || "That did not work.");
    return result;
  }
  const el = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };

  function renderResult(box, test) {
    box.className = `result ${test.ok ? "good" : "bad"}`;
    box.replaceChildren();
    box.append(el("strong", "", test.ok ? "Test sent to you. " : "Test did not work. "), document.createTextNode(test.plain || ""));
    if (test.next) box.append(el("p", "small", test.next));
    if (test.providerMessage) box.append(el("p", "small", `Provider said: ${test.providerMessage}`));
    if (test.errorCode) box.append(el("p", "small", `Error code ${test.errorCode}.`));
    box.append(el("p", "small", `Sent to ${test.to || "you"}.`));
  }

  function card(channel) {
    const node = el("article", "card");
    const title = el("h3", "", channel.label);
    title.append(el("span", `pill ${channel.state}`, STATE_LABEL[channel.state] || channel.state));
    node.append(title, el("p", "", channel.summary));
    if (channel.missing?.length) {
      const missing = el("p", "missing", "Still to add in Render: ");
      channel.missing.forEach((name, index) => { missing.append(el("code", "", name)); if (index < channel.missing.length - 1) missing.append(document.createTextNode(" ")); });
      node.append(missing);
    }
    if (channel.switch) node.append(el("p", "small", `Switch: ${channel.switch.shown}`));
    if (channel.notes?.length) { const list = el("ul", "notes"); channel.notes.forEach(text => list.append(el("li", "", text))); node.append(list); }
    const result = el("div", "result"); result.hidden = true;
    const actions = el("div", "actions");
    const test = el("button", "", "Send myself a test");
    const sure = el("button", "", `Yes, send it to me`); sure.hidden = true;
    const cancel = el("button", "secondary", "Cancel"); cancel.hidden = true;
    const reset = () => { sure.hidden = true; cancel.hidden = true; test.hidden = false; };
    test.addEventListener("click", () => { test.hidden = true; sure.hidden = false; cancel.hidden = false; notice(`This will send a real ${TEST_LABEL[channel.id]} to you. Press "Yes, send it to me" to go ahead.`); });
    cancel.addEventListener("click", () => { reset(); notice("Cancelled. Nothing was sent."); });
    sure.addEventListener("click", async () => {
      sure.disabled = true; cancel.hidden = true; notice("Sending… a text can take a few seconds to report back.");
      try {
        const done = await api("/test", "POST", { channel: channel.id, confirm: true });
        result.hidden = false; renderResult(result, done.test); notice(done.test.ok ? "Done. Check your phone or inbox." : "The test did not work: see the card for why.");
      } catch (error) { result.hidden = false; result.className = "result bad"; result.textContent = error.message; notice(error.message); }
      sure.disabled = false; reset();
    });
    actions.append(test, sure, cancel);
    node.append(actions, result);
    return node;
  }

  async function load() {
    try {
      const status = await api("/status");
      const cards = byId("cards"); cards.replaceChildren();
      status.channels.forEach(channel => cards.append(card(channel)));
      byId("whose").textContent = `${status.note}${status.testRecipients.phone ? ` Your phone: ${status.testRecipients.phone}.` : " No phone number is linked to your account yet: add yours under \"Phone numbers for Kyro\" in the Admin screen."}${status.testRecipients.email ? ` Your email: ${status.testRecipients.email}.` : ""}${status.simulationWhenUnconfigured ? " Until a channel is fully set up, Kyro's sends on it are labelled pretends and never reach anyone." : ""}`;
      notice("Signed in as the owner. Pick a card, fix what it says is missing, then send yourself a test.");
    } catch (error) { notice(error.message); }
  }
  load();
})();
