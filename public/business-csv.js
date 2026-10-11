"use strict";
// Importing a spreadsheet (saved as CSV) into the business or nonprofit workspace: contacts, money in and out, and inventory. It runs entirely in the browser: the file is read here, checked row by row, and the good rows are
// added to the page's lists; nothing leaves the device until the person presses Save, and a row that cannot be used is skipped with the reason, never guessed at. No external service is involved.
//
//   BusinessCsv.parseCsv(text) -> array of rows (arrays of strings)
//   BusinessCsv.importRows(kind, text, existing, { limit, today }) -> { rows, skipped: [{ line, reason }], unknownColumns, headerOk }
//   BusinessCsv.template(kind) -> a CSV with the column names and one example row
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.BusinessCsv = factory();
})(typeof self !== "undefined" ? self : this, function () {
  const MAX_ROWS = 500;
  const MAX_CHARS = 250000;

  // quoted fields, doubled quotes, commas and line breaks inside quotes, a leading byte-order mark, \r\n or \n
  function parseCsv(text) {
    const source = String(text || "").replace(/^﻿/, "");
    const rows = []; let row = []; let field = ""; let quoted = false;
    for (let i = 0; i < source.length; i += 1) {
      const c = source[i];
      if (quoted) {
        if (c === '"') { if (source[i + 1] === '"') { field += '"'; i += 1; } else quoted = false; } else field += c;
      } else if (c === '"') quoted = true;
      else if (c === ",") { row.push(field); field = ""; }
      else if (c === "\n" || c === "\r") { if (c === "\r" && source[i + 1] === "\n") i += 1; row.push(field); field = ""; if (row.some(value => value.trim() !== "")) rows.push(row); row = []; }
      else field += c;
    }
    row.push(field); if (row.some(value => value.trim() !== "")) rows.push(row);
    return rows;
  }

  const norm = value => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const num = value => { const cleaned = String(value || "").replace(/[$€£₦,\s]/g, "").replace(/^\((.*)\)$/, "-$1"); if (cleaned === "") return null; const n = Number(cleaned); return Number.isFinite(n) ? n : null; };
  // 2026-10-09, or 10/9/2026 read as month/day/year (the form most spreadsheets in the United States save); anything else is skipped rather than guessed
  function dateOf(value) {
    const text = String(value || "").trim();
    if (!text) return "";
    let m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(text);
    let y; let mo; let d;
    if (m) { y = +m[1]; mo = +m[2]; d = +m[3]; }
    else if ((m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(text))) { mo = +m[1]; d = +m[2]; y = +m[3]; }
    else return null;
    const check = new Date(Date.UTC(y, mo - 1, d));
    if (check.getUTCFullYear() !== y || check.getUTCMonth() !== mo - 1 || check.getUTCDate() !== d) return null;
    return `${String(y).padStart(4, "0")}-${String(mo).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  }
  const consentOf = value => { const t = norm(value); if (!t) return ""; if (/^(?:given|yes|y|true|consented|agreed)$/.test(t)) return "given"; if (/^(?:declined|no|n|false|refused|withdrawn)$/.test(t)) return "declined"; return null; };
  const typeOf = value => { const t = norm(value); if (/^(?:income|revenue|sale|sales|donation|gift|credit|in|received|deposit)$/.test(t)) return "income"; if (/^(?:expense|expenses|cost|payment|debit|out|spent|purchase|withdrawal)$/.test(t)) return "expense"; return null; };

  // each kind: the page list it fills, the columns (key, the names accepted for it), and how a row is made from the cells
  const KINDS = {
    contacts: {
      list: "leads", label: "contacts",
      columns: [["name", ["name", "full name", "contact", "person"]], ["contact", ["email", "phone", "contact info", "email address", "phone number", "contact details"]], ["type", ["type", "kind", "role", "category"]], ["need", ["need", "notes", "note"]],
        ["stage", ["stage", "status"]], ["followUpDate", ["follow up", "follow up date", "followup"]], ["skills", ["skills"]], ["availability", ["availability", "available"]], ["source", ["source", "how they heard about us", "referral source", "heard about us"]],
        ["consent", ["consent", "consent given", "consent to keep records"]], ["consentDate", ["consent date", "consent recorded on"]]],
      example: ["Maria Chen", "maria@example.org", "donor", "", "new", "", "", "", "newsletter", "", ""],
      build(cells, ctx) {
        const name = (cells.name || "").trim();
        if (!name) return { skip: "no name" };
        const consent = consentOf(cells.consent); if (consent === null) return { skip: `consent "${cells.consent}" is not given or declined` };
        const follow = dateOf(cells.followUpDate); if (follow === null) return { skip: `follow-up date "${cells.followUpDate}" is not a date (use 2026-10-09 or 10/9/2026)` };
        const consentDate = dateOf(cells.consentDate); if (consentDate === null) return { skip: `consent date "${cells.consentDate}" is not a date` };
        const contact = (cells.contact || "").trim();
        if (ctx.existing.some(row => norm(row.name) === norm(name) && norm(row.contact) === norm(contact))) return { skip: `${name} is already on the list` };
        return { row: { name: name.slice(0, 160), contact: contact.slice(0, 160), type: norm(cells.type) || "customer", need: (cells.need || "").slice(0, 400), stage: norm(cells.stage) || "new", nextAction: "", followUpDate: follow,
          skills: (cells.skills || "").slice(0, 200), availability: (cells.availability || "").slice(0, 200), source: (cells.source || "").slice(0, 80), consent, consentDate } };
      }
    },
    transactions: {
      list: "transactions", label: "money entries",
      columns: [["date", ["date", "when", "day", "transaction date"]], ["type", ["type", "kind", "income or expense", "direction"]], ["category", ["category"]], ["amount", ["amount", "value", "total", "sum"]], ["currency", ["currency"]],
        ["description", ["description", "memo", "details", "note", "notes", "payee"]], ["fund", ["fund", "restricted to", "restricted"]]],
      example: ["2026-10-09", "income", "donation", "250", "USD", "Donation from Maria Chen", ""],
      build(cells, ctx) {
        const date = dateOf(cells.date); if (date === null || date === "") return { skip: `date "${cells.date}" is not a date (use 2026-10-09 or 10/9/2026)` };
        let amount = num(cells.amount); if (amount === null) return { skip: `amount "${cells.amount}" is not a number` };
        let type = typeOf(cells.type);
        if (type === null && norm(cells.type) === "") type = amount < 0 ? "expense" : null;
        if (amount < 0) { amount = -amount; if (!type) type = "expense"; }
        if (type === null) return { skip: `type "${cells.type}" is not income or expense` };
        if (amount > 1e9) return { skip: "amount is too large" };
        const currency = (cells.currency || "USD").trim().toUpperCase().slice(0, 3) || "USD";
        return { row: { date, type, category: (cells.category || "").slice(0, 160), amount, currency, description: (cells.description || "").slice(0, 500), fund: (cells.fund || "").slice(0, 80) } };
      }
    },
    inventory: {
      list: "inventory", label: "inventory items",
      columns: [["item", ["item", "name", "product", "description"]], ["kind", ["kind", "type", "category"]], ["quantity", ["quantity", "qty", "count", "on hand", "stock"]], ["unit", ["unit", "units"]], ["reorderAt", ["reorder at", "reorder level", "reorder", "minimum", "min"]],
        ["value", ["value", "unit value", "price", "cost", "unit price"]], ["currency", ["currency"]], ["location", ["location", "where"]], ["notes", ["notes", "note"]]],
      example: ["Candles", "product", "20", "jars", "10", "5.50", "USD", "Storage room", ""],
      build(cells, ctx) {
        const item = (cells.item || "").trim();
        if (!item) return { skip: "no item name" };
        const quantity = cells.quantity === undefined || cells.quantity === "" ? 0 : num(cells.quantity); if (quantity === null || quantity < 0) return { skip: `quantity "${cells.quantity}" is not a number` };
        const reorderAt = cells.reorderAt === undefined || cells.reorderAt === "" ? 0 : num(cells.reorderAt); if (reorderAt === null || reorderAt < 0) return { skip: `reorder level "${cells.reorderAt}" is not a number` };
        const value = cells.value === undefined || cells.value === "" ? 0 : num(cells.value); if (value === null || value < 0) return { skip: `value "${cells.value}" is not a number` };
        const kind = ["product", "supply", "equipment", "donated"].includes(norm(cells.kind)) ? norm(cells.kind) : (/suppl/.test(norm(cells.kind)) ? "supply" : /equip/.test(norm(cells.kind)) ? "equipment" : /donat/.test(norm(cells.kind)) ? "donated" : "product");
        if (ctx.existing.some(row => norm(row.item) === norm(item))) return { skip: `${item} is already in the inventory` };
        return { row: { item: item.slice(0, 160), kind, quantity, unit: (cells.unit || "").slice(0, 40), reorderAt, value, currency: (cells.currency || "USD").trim().toUpperCase().slice(0, 3) || "USD", location: (cells.location || "").slice(0, 160), wasted: 0, notes: (cells.notes || "").slice(0, 400) } };
      }
    }
  };

  function importRows(kind, text, existing = [], { limit = 200, today = "" } = {}) {
    const spec = KINDS[kind];
    if (!spec) return { rows: [], skipped: [{ line: 0, reason: `I do not know how to import ${kind}` }], unknownColumns: [], headerOk: false };
    if (String(text || "").length > MAX_CHARS) return { rows: [], skipped: [{ line: 0, reason: `the file is larger than ${Math.round(MAX_CHARS / 1000)} thousand characters; split it into smaller files` }], unknownColumns: [], headerOk: false };
    const table = parseCsv(text);
    if (!table.length) return { rows: [], skipped: [{ line: 0, reason: "the file is empty" }], unknownColumns: [], headerOk: false };
    const header = table[0].map(norm);
    const indexOf = {}; const used = new Set();
    for (const [key, names] of spec.columns) {
      const at = header.findIndex((name, i) => !used.has(i) && names.map(norm).includes(name));
      if (at >= 0) { indexOf[key] = at; used.add(at); }
    }
    const unknownColumns = table[0].filter((name, i) => !used.has(i) && String(name).trim() !== "");
    const required = spec.columns[0][0];
    if (indexOf[required] === undefined && !(kind === "transactions" && indexOf.amount !== undefined && indexOf.date !== undefined)) {
      return { rows: [], skipped: [{ line: 1, reason: `the first line must have column names, including "${spec.columns[0][1][0]}"; use "Download a template" for an example` }], unknownColumns, headerOk: false };
    }
    if (table.length - 1 > MAX_ROWS) return { rows: [], skipped: [{ line: 0, reason: `the file has ${table.length - 1} rows; the most one import takes is ${MAX_ROWS}` }], unknownColumns, headerOk: true };
    const rows = []; const skipped = [];
    const room = Math.max(0, limit - existing.length);
    for (let i = 1; i < table.length; i += 1) {
      const cells = {};
      for (const key of Object.keys(indexOf)) cells[key] = (table[i][indexOf[key]] || "").trim();
      const made = spec.build(cells, { existing: [...existing, ...rows], today });
      if (made.skip) { skipped.push({ line: i + 1, reason: made.skip }); continue; }
      if (rows.length >= room) { skipped.push({ line: i + 1, reason: `the workspace already holds the most it keeps for ${spec.label} (${limit})` }); continue; }
      rows.push(made.row);
    }
    return { rows, skipped, unknownColumns, headerOk: true };
  }

  const quote = value => (/[",\n]/.test(value) ? `"${String(value).replace(/"/g, '""')}"` : String(value));
  function template(kind) {
    const spec = KINDS[kind];
    if (!spec) return "";
    return `${spec.columns.map(([, names]) => quote(names[0])).join(",")}\n${spec.example.map(quote).join(",")}\n`;
  }

  return Object.freeze({ parseCsv, importRows, template, KINDS: Object.freeze(Object.fromEntries(Object.entries(KINDS).map(([k, v]) => [k, { list: v.list, label: v.label }]))), MAX_ROWS, MAX_CHARS });
});
