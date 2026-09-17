"use strict";
(() => {
  const root = "/api/nexus/runtime/business";
  const byId = id => document.getElementById(id);
  let current = null;
  let status = { aiConfigured: false, billingConfigured: false };
  function notice(text) { byId("notice").textContent = text; }
  async function api(path, method = "GET", body) {
    const response = await fetch(root + path, { method, credentials: "same-origin", headers: body ? { "content-type": "application/json" } : {}, body: body ? JSON.stringify(body) : undefined });
    const result = await response.json();
    if (!response.ok) throw new Error(response.status === 401 ? "Sign in to AgriNexus first using the Nexus link above." : result.error || "The business workspace is unavailable.");
    return result;
  }
  async function run(work) { try { await work(); } catch (error) { notice(error.message || "The operation could not be completed."); } }
  function field(container, labelText, value, onChange, multiline = false, type = "text") {
    const label = document.createElement("label"); label.textContent = labelText;
    const input = document.createElement(multiline ? "textarea" : "input");
    if (!multiline) input.type = type;
    input.value = value || ""; if (type === "text") input.maxLength = 4000;
    input.addEventListener("input", () => onChange(input.value)); label.append(input); container.append(label);
  }
  function rows(containerId, values, keys) {
    const container = byId(containerId); container.replaceChildren();
    values.forEach((row, index) => {
      const div = document.createElement("div"); div.className = "fields";
      keys.forEach(([key, label]) => {
        if (typeof row[key] === "boolean") {
          const wrapper = document.createElement("label"), checkbox = document.createElement("input");
          checkbox.type = "checkbox"; checkbox.checked = row[key]; checkbox.addEventListener("change", () => { row[key] = checkbox.checked; });
          wrapper.append(checkbox, document.createTextNode(label)); div.append(wrapper);
        } else if (typeof row[key] === "number") {
          // Coerce back to a real number on change -- every DOM input value is
          // a string, but the backend's normalizeEditable rejects a field
          // whose type doesn't match its default (amount defaults to 0).
          field(div, label, String(row[key]), value => { const n = Number(value); row[key] = Number.isFinite(n) ? n : 0; }, false, "number");
        } else field(div, label, row[key], value => { row[key] = value; }, ["caption", "steps"].includes(key), ["start", "end"].includes(key) ? "datetime-local" : ["followUpDate", "date", "dueDate", "deadline"].includes(key) ? "date" : "text");
      });
      const remove = document.createElement("button"); remove.type = "button"; remove.textContent = "Remove row";
      remove.addEventListener("click", () => { values.splice(index, 1); rows(containerId, values, keys); }); div.append(remove); container.append(div);
    });
  }
  function download(name, content, type = "application/json") {
    const link = document.createElement("a"); const url = URL.createObjectURL(new Blob([content], { type }));
    link.href = url; link.download = name.replace(/[\\/]/g, "-"); link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  // Appointments get a dedicated renderer instead of the generic rows()
  // helper: each row needs a "Sync to calendar" action and a live-linked
  // real calendar event once synced, which rows() has no way to express.
  function renderAppointments() {
    const container = byId("appointments"); container.replaceChildren();
    current.data.editable.appointments.forEach((appointment, index) => {
      const div = document.createElement("div"); div.className = "fields";
      field(div, "Title", appointment.title, value => { appointment.title = value; });
      field(div, "Start", appointment.start, value => { appointment.start = value; }, false, "datetime-local");
      field(div, "End", appointment.end, value => { appointment.end = value; }, false, "datetime-local");
      field(div, "Notes", appointment.notes, value => { appointment.notes = value; }, true);
      const status = document.createElement("span"); status.textContent = `Status: ${appointment.status}`; div.append(status);
      if (appointment.calendarLink) {
        const link = document.createElement("a"); link.href = appointment.calendarLink; link.target = "_blank"; link.rel = "noopener noreferrer"; link.textContent = "Open in calendar"; div.append(link);
      }
      const sync = document.createElement("button"); sync.type = "button"; sync.textContent = "Sync to calendar";
      sync.addEventListener("click", () => run(async () => {
        if (!byId("calendar-consent").checked) throw new Error("Confirm creating a real calendar event with the configured provider first.");
        await save();
        current = await api(`/clients/${current.record_id}/appointment-sync`, "POST", { appointmentIndex: index, expectedVersion: current.version, confirmed: true });
        render(); notice("Appointment synced with the configured calendar provider.");
      }));
      div.append(sync);
      const remove = document.createElement("button"); remove.type = "button"; remove.textContent = "Remove row";
      remove.addEventListener("click", () => { current.data.editable.appointments.splice(index, 1); render(); });
      div.append(remove);
      container.append(div);
    });
  }
  function render() {
    byId("editor").hidden = !current; byId("empty").hidden = Boolean(current); if (!current) return;
    byId("client-name").textContent = current.data.info.businessName;
    const info = current.data.info, editable = current.data.editable;
    const business = byId("business-fields"); business.replaceChildren();
    for (const [key, label] of [["businessName", "Business name"], ["industry", "Industry"], ["location", "Location"], ["customer", "Who you serve"], ["problem", "Customer need"], ["objective", "Business goal"]]) field(business, label, info[key], value => { info[key] = value; });
    rows("leads", editable.leads, [["name", "Name"], ["contact", "Contact"], ["type", "Type (customer, donor, sponsor, volunteer)"], ["need", "Need"], ["stage", "Stage"], ["nextAction", "Next action"], ["followUpDate", "Follow-up date"]]);
    rows("transactions", editable.transactions, [["date", "Date"], ["type", "Type (income or expense)"], ["category", "Category"], ["amount", "Amount"], ["description", "Description"]]);
    const income = editable.transactions.filter(row => row.type !== "expense").reduce((sum, row) => sum + row.amount, 0);
    const expenses = editable.transactions.filter(row => row.type === "expense").reduce((sum, row) => sum + row.amount, 0);
    byId("finance-summary").textContent = `Income: ${income.toFixed(2)}  |  Expenses: ${expenses.toFixed(2)}  |  Net: ${(income - expenses).toFixed(2)}`;
    rows("invoices", editable.invoices, [["invoiceNumber", "Invoice #"], ["clientName", "Client"], ["date", "Date"], ["dueDate", "Due date"], ["notes", "Notes"], ["status", "Status"]]);
    rows("invoice-items", editable.invoiceItems, [["invoiceNumber", "Invoice #"], ["description", "Description"], ["quantity", "Qty"], ["unitPrice", "Unit price"]]);
    rows("grants", editable.grants, [["funderName", "Funder"], ["program", "Program / grant name"], ["amount", "Amount"], ["deadline", "Deadline"], ["status", "Status (researching, drafting, submitted, awarded, declined)"], ["notes", "Notes"]]);
    renderAppointments();
    const soonest = editable.grants.filter(row => row.deadline).map(row => row.deadline).sort()[0];
    byId("grants-summary").textContent = soonest ? `Next deadline: ${soonest}` : "No deadlines set yet.";
    rows("posts", editable.socialPosts, [["platform", "Platform"], ["caption", "Draft caption"], ["status", "Draft status"]]);
    rows("tasks", editable.tasks, [["title", "Task"], ["status", "Status"], ["assignee", "Assigned to"], ["priority", "Priority (low, medium, high)"], ["dueDate", "Due date"]]);
    const landing = byId("landing-fields"); landing.replaceChildren();
    for (const [key, label] of [["headline", "Headline"], ["subheadline", "Supporting text"], ["offer", "Offer"], ["phone", "Business phone"], ["email", "Business email"], ["proof", "Evidence or customer story"]]) field(landing, label, editable.landingPage[key], value => { editable.landingPage[key] = value; });
    const plan = byId("business-plan-fields"); plan.replaceChildren();
    for (const [key, label] of [["executiveSummary", "Executive Summary"], ["marketAnalysis", "Market Analysis"], ["productsServices", "Products & Services"], ["marketingSales", "Marketing & Sales"], ["operationsPlan", "Operations Plan"], ["financialPlan", "Financial Plan"], ["fundingRequest", "Funding Request"]]) field(plan, label, editable.businessPlan[key], value => { editable.businessPlan[key] = value; }, true);
    const assistant = byId("assistant-fields"); assistant.replaceChildren();
    for (const [key, label] of [["name", "Assistant name"], ["purpose", "Purpose"], ["personality", "Tone"]]) field(assistant, label, editable.assistantStudio[key], value => { editable.assistantStudio[key] = value; }, key === "purpose");
    const scripts = byId("scripts-fields"); scripts.replaceChildren();
    for (const [key, label] of [["greeting", "Greeting"], ["leadCapture", "Lead intake"], ["escalation", "Owner handoff draft"]]) field(scripts, label, editable.assistantScripts[key], value => { editable.assistantScripts[key] = value; }, true);
    rows("channels", editable.assistantStudio.channels, [["name", "Channel"], ["enabled", "Include in draft package (does not activate delivery)"], ["job", "Purpose"]]);
    rows("workflows", editable.assistantStudio.workflows, [["name", "Workflow"], ["trigger", "Trigger"], ["steps", "Draft steps"], ["status", "Review status"]]);
    rows("deployment", editable.assistantStudio.deployment, [["item", "Review item"], ["done", "Reviewed by owner"]]);
    byId("knowledge").value = editable.assistantStudio.knowledge.join("\n"); byId("test-message").value = editable.assistantStudio.testMessage || "";
    byId("ai-test").disabled = !status.aiConfigured; byId("ai-plan").disabled = !status.aiConfigured;
    byId("checkout").disabled = !status.billingConfigured; byId("refresh-subscription").disabled = !status.billingConfigured || !current.data.subscription?.sessionId;
    const subscription = current.data.subscription || {};
    byId("billing-status").textContent = status.billingConfigured ? `Subscription: ${subscription.state || "not started"}. Checkout creation does not mean payment is complete.` : "Billing is disabled or unconfigured. No checkout or charge will be created.";
    const checkoutLink = byId("checkout-link"); checkoutLink.hidden = true;
    if (subscription.checkoutUrl) { try { const url = new URL(subscription.checkoutUrl); if (url.protocol === "https:" && url.hostname === "checkout.stripe.com") { checkoutLink.href = url.href; checkoutLink.hidden = false; } } catch {} }
    const files = byId("files"); files.replaceChildren();
    Object.entries(current.data.files || {}).forEach(([name, file]) => { const li = document.createElement("li"); const button = document.createElement("button"); button.type = "button"; button.textContent = `Download ${name}`;
      button.addEventListener("click", () => file.binary
        ? download(name, Uint8Array.from(atob(file.content), value => value.charCodeAt(0)), file.contentType || "application/octet-stream")
        : download(name, file.content, "text/plain;charset=utf-8"));
      li.append(button); files.append(li); });
  }
  async function reload() {
    const [available, data] = await Promise.all([api("/status"), api("/clients")]); status = available;
    const clients = byId("clients"); clients.replaceChildren();
    data.clients.forEach(row => { const button = document.createElement("button"); button.type = "button"; button.textContent = row.data.info.businessName; button.addEventListener("click", () => run(async () => { current = await api(`/clients/${row.record_id}`); render(); notice("Client workspace opened."); })); clients.append(button); });
    if (!data.clients.length) clients.textContent = "No client workspaces yet.";
    if (current) current = await api(`/clients/${current.record_id}`);
    render(); notice("Your business workspace is ready. Generated assets remain drafts until you review and publish them separately.");
  }
  async function save() {
    if (!current) throw new Error("Choose a client first.");
    current.data.editable.assistantStudio.knowledge = byId("knowledge").value.split("\n").map(value => value.trim()).filter(Boolean);
    current.data.editable.assistantStudio.testMessage = byId("test-message").value;
    current = await api(`/clients/${current.record_id}`, "PUT", { expectedVersion: current.version, info: current.data.info, editable: current.data.editable }); render(); return current;
  }
  byId("create-client").addEventListener("submit", event => { event.preventDefault(); run(async () => { const form = new FormData(event.currentTarget); current = await api("/clients", "POST", { ...Object.fromEntries(form), consent: form.get("consent") === "on" }); await reload(); notice("Client workspace created with your AgriNexus identity."); }); });
  byId("reload").addEventListener("click", () => run(reload));
  byId("save").addEventListener("click", () => run(async () => { await save(); notice("Changes saved."); }));
  byId("add-lead").addEventListener("click", () => { current.data.editable.leads.push({ name: "", contact: "", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "" }); render(); });
  byId("add-transaction").addEventListener("click", () => { current.data.editable.transactions.push({ date: new Date().toISOString().slice(0, 10), type: "income", category: "", amount: 0, description: "" }); render(); });
  byId("add-invoice").addEventListener("click", () => { current.data.editable.invoices.push({ invoiceNumber: `INV-${String(current.data.editable.invoices.length + 1001)}`, clientName: "", date: new Date().toISOString().slice(0, 10), dueDate: "", notes: "", status: "draft" }); render(); });
  byId("add-invoice-item").addEventListener("click", () => { current.data.editable.invoiceItems.push({ invoiceNumber: current.data.editable.invoices.at(-1)?.invoiceNumber || "", description: "", quantity: 1, unitPrice: 0 }); render(); });
  byId("add-grant").addEventListener("click", () => { current.data.editable.grants.push({ funderName: "", program: "", amount: 0, deadline: "", status: "researching", notes: "" }); render(); });
  byId("add-appointment").addEventListener("click", () => { current.data.editable.appointments.push({ title: "", start: "", end: "", notes: "", status: "scheduled", calendarEventId: "", calendarLink: "" }); render(); });
  byId("generate-invoice-pdf").addEventListener("click", () => run(async () => {
    const invoiceNumber = byId("invoice-pdf-number").value.trim();
    if (!invoiceNumber) throw new Error("Enter the invoice number to generate a PDF for.");
    await save();
    current = await api(`/clients/${current.record_id}/invoice-pdf`, "POST", { invoiceNumber, expectedVersion: current.version });
    render(); notice(`Invoice ${invoiceNumber} PDF generated. Download it from the files list below.`);
  }));
  byId("generate-business-plan-pdf").addEventListener("click", () => run(async () => {
    await save();
    current = await api(`/clients/${current.record_id}/business-plan-pdf`, "POST", { expectedVersion: current.version });
    render(); notice("Business plan PDF generated. Download it from the files list below.");
  }));
  byId("add-post").addEventListener("click", () => { current.data.editable.socialPosts.push({ platform: "", caption: "", status: "draft" }); render(); });
  byId("add-task").addEventListener("click", () => { current.data.editable.tasks.push({ title: "", status: "todo", dueDate: "", assignee: "", priority: "medium" }); render(); });
  document.querySelectorAll("[data-generate]").forEach(button => button.addEventListener("click", () => run(async () => { await save(); current = await api(`/clients/${current.record_id}/generate`, "POST", { operation: button.dataset.generate, profile: byId("strategy-profile").value, expectedVersion: current.version }); render(); notice("Draft files created. Nothing was published or sent."); })));
  byId("preview").addEventListener("click", () => run(async () => { await save(); const result = await api(`/clients/${current.record_id}/preview`, "POST", { message: byId("test-message").value }); byId("assistant-result").textContent = "Template preview — no AI provider or message delivery was used.\n\n" + result.reply; }));
  byId("ai-test").addEventListener("click", () => run(async () => { if (!byId("ai-consent").checked) throw new Error("Confirm sharing the draft and test message with the configured AI provider first."); await save(); const result = await api(`/clients/${current.record_id}/assistant`, "POST", { message: byId("test-message").value, confirmed: true, consent: true }); byId("assistant-result").textContent = result.reply; }));
  byId("checkout").addEventListener("click", () => run(async () => { if (!byId("billing-consent").checked) throw new Error("Confirm provider checkout consent first."); current = await api(`/clients/${current.record_id}/checkout`, "POST", { plan: byId("plan").value, expectedVersion: current.version, confirmed: true, consent: true }); render(); notice("Provider checkout created. Review its price and terms before paying; no payment is inferred here."); }));
  byId("refresh-subscription").addEventListener("click", () => run(async () => { current = await api(`/clients/${current.record_id}/refresh-subscription`, "POST", {}); render(); notice("Payment status retrieved from the configured provider."); }));
  byId("export").addEventListener("click", () => run(async () => { const result = await api(`/clients/${current.record_id}/export`); download("business-workspace.json", JSON.stringify(result, null, 2)); notice("Workspace export prepared."); }));
  byId("delete").addEventListener("click", () => run(async () => { if (!confirm("Delete this business workspace and its saved history?")) return; await api(`/clients/${current.record_id}/delete`, "POST", { confirmed: true, expectedVersion: current.version }); current = null; await reload(); notice("Workspace and historical content deleted."); }));
  byId("revoke-consent").addEventListener("click", () => run(async () => { await api("/consent/revoke", "POST", {}); notice("Business-storage consent withdrawn. Existing data can still be exported or deleted; new writes require consent."); }));
  byId("knowledge").addEventListener("input", () => { if (current) current.data.editable.assistantStudio.knowledge = byId("knowledge").value.split("\n"); });
  byId("test-message").addEventListener("input", () => { if (current) current.data.editable.assistantStudio.testMessage = byId("test-message").value; });
  byId("grant-consent").addEventListener("click", () => run(async () => {
    if (!confirm("Allow AgriNexus to store and update your business workspace details?")) return;
    await api("/consent/grant", "POST", { confirmed: true }); notice("Business-storage consent granted.");
  }));
  byId("download-package").addEventListener("click", () => run(async () => {
    const result = await api(`/clients/${current.record_id}/package`);
    download(result.name, Uint8Array.from(atob(result.contentBase64), value => value.charCodeAt(0)), "application/zip");
    notice("Draft package downloaded with website folders preserved.");
  }));
  for (const [id, key, initial] of [
    ["add-channel", "channels", { name: "", enabled: false, job: "" }],
    ["add-workflow", "workflows", { name: "", trigger: "", steps: "", status: "draft" }],
    ["add-review", "deployment", { item: "", done: false }]
  ]) byId(id).addEventListener("click", () => { current.data.editable.assistantStudio[key].push({ ...initial }); render(); });
  byId("ai-plan").addEventListener("click", () => run(async () => {
    if (!byId("ai-consent").checked) throw new Error("Confirm sharing business details with the configured AI planner first.");
    await save(); current = await api(`/clients/${current.record_id}/plan`, "POST", { confirmed: true, consent: true, expectedVersion: current.version });
    render(); byId("assistant-result").textContent = current.data.planning.mode + " — outline only; nothing executed.\n" + current.data.planning.plan.map(step => step.agent + ": " + step.action).join("\n");
  }));
  run(reload);
})();
