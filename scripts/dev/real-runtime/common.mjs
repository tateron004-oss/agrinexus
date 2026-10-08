// Shared by the scripts in this folder: where things are, and a few small helpers for talking to the running server and to the in-memory database.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

export const HERE = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(process.env.RR_ROOT || path.join(HERE, "..", "..", ".."));
export const OUT = path.resolve(process.env.RR_OUT || path.join(os.tmpdir(), "kyro-real-runtime"));
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export function ports() {
  return JSON.parse(fs.readFileSync(path.join(OUT, "ports.json"), "utf8"));
}

// One HTTP call to the server. A dropped connection (the harness restarts the server if it ever dies) is retried a few times.
export async function call(method, route, body, cookie, { serial = false } = {}) {
  const base = `http://127.0.0.1:${serial ? ports().serial : ports().app}`;
  let res;
  for (let attempt = 0; ; attempt += 1) {
    try { res = await fetch(`${base}${route}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: method === "GET" ? undefined : JSON.stringify(body || {}) }); break; }
    catch (error) { if (attempt >= 5) throw error; await sleep(2500); }
  }
  const text = await res.text(); let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, text, cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}

// A SQL question to the in-memory database (the harness answers on its own port).
export async function sql(query, params = []) {
  const res = await fetch(`http://127.0.0.1:${ports().sql}/sql`, { method: "POST", body: JSON.stringify({ sql: query, params }) });
  const rows = await res.json();
  if (rows && rows.error) throw new Error(rows.error);
  return rows;
}

export async function adminCookie() {
  const login = await call("POST", "/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
  if (login.status !== 200) throw new Error(`admin sign-in failed (${login.status})`);
  return login.cookie;
}

// A dedicated ordinary Standard User (never one of the demo accounts), the way test/nexus/production-user-audit.test.js makes them.
export async function makeUser(admin, label) {
  const email = `rt-${label}-${crypto.randomUUID().slice(0, 6)}@example.com`;
  const password = `Rt-${crypto.randomUUID()}`;
  const made = await call("POST", "/api/admin/test-user", { email, name: `RT ${label}`, password, country: "Kenya", language: "en" }, admin);
  if (made.status !== 200) throw new Error(`could not make ${email}: ${made.status} ${made.text.slice(0, 120)}`);
  const login = await call("POST", "/api/login", { email, password });
  if (login.status !== 200) throw new Error(`sign-in as ${email} failed (${login.status})`);
  return { email, password, cookie: login.cookie };
}
