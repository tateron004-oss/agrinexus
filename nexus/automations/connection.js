"use strict";

// Outside-tool automations, version 1: a person (or the consultant who helps them) pastes the link a tool such as Zapier, Make, n8n or IFTTT gives for a "catch hook" / "webhook", and Kyro can then send
// ONE message to it, only after reading back what will be sent and getting a yes. Nothing is sent on its own, and nothing is received.
//
// This file is the part that must never be wrong: what a link may be, and that Kyro can never be turned into a way to reach this server's own network (SSRF). Rules:
//   * https only, a normal host name (no IP address, no "localhost", no credentials, no port other than 443), at most 2000 characters;
//   * the host name is looked up at the moment of sending and EVERY address it resolves to must be a public one (not loopback, private, link-local, cloud metadata, carrier-grade NAT or reserved);
//   * redirects are never followed (a public address that redirects inward is refused);
//   * the link itself is a secret (anyone holding it can post to the person's automation), so it is stored only on the person's own record and never read aloud, logged or returned by a list.
const dns = require("node:dns").promises;
const net = require("node:net");
const crypto = require("node:crypto");

const MAX_CONNECTIONS_PER_ACCOUNT = 10;
const MAX_URL_LENGTH = 2000;
const MAX_NAME_LENGTH = 40;

const clip = (value, limit) => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, limit);

// "Sales sheet" -> a short label the person can say. Letters, digits, spaces and a few marks only.
function normalizeName(value) {
  const name = clip(value, MAX_NAME_LENGTH).replace(/[^\p{L}\p{N} '’&.-]/gu, "").replace(/\s+/g, " ").trim();
  return name.length >= 2 ? name : "";
}
const sameName = (a, b) => normalizeName(a).toLowerCase() === normalizeName(b).toLowerCase();

// Every IPv4/IPv6 range that is not the public internet. An address in any of them is refused.
function isPublicAddress(address) {
  const value = String(address || "").trim().toLowerCase();
  if (net.isIPv4(value)) {
    const [a, b] = value.split(".").map(Number);
    if (a === 0 || a === 10 || a === 127) return false;                    // this host, private, loopback
    if (a === 100 && b >= 64 && b <= 127) return false;                    // carrier-grade NAT
    if (a === 169 && b === 254) return false;                              // link-local, cloud metadata (169.254.169.254)
    if (a === 172 && b >= 16 && b <= 31) return false;                     // private
    if (a === 192 && b === 168) return false;                              // private
    if (a === 192 && b === 0) return false;                                // IETF protocol assignments, documentation
    if (a === 198 && (b === 18 || b === 19)) return false;                 // benchmarking
    if (a === 198 && b === 51) return false;                               // documentation
    if (a === 203 && b === 0) return false;                                // documentation
    if (a >= 224) return false;                                            // multicast, reserved, broadcast
    return true;
  }
  if (net.isIPv6(value)) {
    const mapped = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/.exec(value);            // an IPv4 address written in IPv6 is judged as IPv4
    if (mapped) return isPublicAddress(mapped[1]);
    if (value === "::" || value === "::1") return false;
    if (/^f[cd]/.test(value)) return false;                                // unique local
    if (/^fe[89ab]/.test(value)) return false;                             // link-local
    if (/^ff/.test(value)) return false;                                   // multicast
    if (/^2001:db8/.test(value)) return false;                             // documentation
    return true;
  }
  return false;
}

// The link as the person typed it -> { ok, url, host } or { ok: false, reason, message }. No network is used here.
function checkLink(raw) {
  const text = String(raw ?? "").trim();
  const fail = (reason, message) => ({ ok: false, reason, message });
  if (!text) return fail("link_missing", "Paste the link your automation tool gave you.");
  if (text.length > MAX_URL_LENGTH) return fail("link_too_long", "That link is too long.");
  let url;
  try { url = new URL(text); } catch { return fail("link_invalid", "That does not look like a web link."); }
  if (url.protocol !== "https:") return fail("link_not_https", "The link must start with https://.");
  if (url.username || url.password) return fail("link_has_credentials", "The link must not contain a user name or password.");
  if (url.port && url.port !== "443") return fail("link_port", "The link must use the normal secure port.");
  const host = url.hostname.toLowerCase().replace(/\.$/, "");
  if (!host || net.isIP(host) || host.startsWith("[")) return fail("link_ip_address", "The link must use a web address, not a number address.");
  if (host === "localhost" || !host.includes(".") || /\.(?:local|localhost|internal|lan|home|corp|intranet|test|invalid|example)$/.test(host)) return fail("link_private_host", "That link points to a private address, which cannot be used.");
  return { ok: true, url: url.toString(), host };
}

// At the moment of sending: every address the host name resolves to must be public. `lookup` is injectable for tests.
async function assertPublicHost(host, { lookup = hostname => dns.lookup(hostname, { all: true, verbatim: true }) } = {}) {
  let addresses;
  try { addresses = await lookup(host); } catch { throw Object.assign(new Error("I could not find that web address."), { code: "automation_host_unreachable", status: 502 }); }
  const list = (Array.isArray(addresses) ? addresses : [addresses]).map(item => (typeof item === "string" ? item : item?.address)).filter(Boolean);
  if (!list.length || !list.every(isPublicAddress)) throw Object.assign(new Error("That link points to a private address, so I did not send anything."), { code: "automation_blocked", status: 422 });
  return list;
}

// Posted body signature, so the receiving tool can check a message really came from Kyro (the secret is shown once, when the link is saved).
function signBody(secret, body) { return `sha256=${crypto.createHmac("sha256", String(secret)).update(body).digest("hex")}`; }
function newSigningSecret() { return crypto.randomBytes(24).toString("hex"); }

module.exports = Object.freeze({ MAX_CONNECTIONS_PER_ACCOUNT, MAX_URL_LENGTH, MAX_NAME_LENGTH, normalizeName, sameName, isPublicAddress, checkLink, assertPublicHost, signBody, newSigningSecret });
