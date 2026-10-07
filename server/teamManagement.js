"use strict";

// The Business manager: a person in charge of the team at ONE business who can add people, reset a password, switch an account off or on, and link a person's phone number, without being an Admin.
//
// It is not a separate role in the permission table. A business manager is an ordinary "Standard User" account with `businessManager: true` on it, so every rule that already applies to a Standard
// User (private records, health and money restrictions, what the screens show) applies to them unchanged, and the only extra thing they hold is the Team tools. The flag is set by an Admin only;
// no other route writes it. A manager never sees an Admin, an Investor or a Provider Reviewer account, cannot make an Admin or another manager, cannot reach any /api/admin route, and (as for every
// Standard User) is not shown anyone else's private records.
//
// A manager's team is the ordinary accounts that carry their id in `teamManagerId`: the people they added themselves, plus anyone an Admin assigned to them. Until a business has a space of its own
// (see the multi-business plan), this is what keeps one business's manager from seeing or changing another business's people. An Admin sees every ordinary account.
//
// Switching an account off sets status "disabled": it cannot sign in, a session or remember-me cookie it already holds stops working, and a phone number linked to it is not answered.
//
// This file is the logic that has no side effects (who is listed, who may be changed, how an account is shown) so that it can be read and tested on its own.
const MANAGED_ROLE = "Standard User";
const MAX_TEAM_SIZE = 50;
const MIN_PASSWORD_LENGTH = 8;

const emailKey = value => String(value ?? "").trim().toLowerCase();
const validEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
const isBusinessManager = user => Boolean(user && user.role === MANAGED_ROLE && user.businessManager === true);
// An Admin can use the Team tools too (they see the same list); a manager can while their own account is on.
const canManageTeam = user => Boolean(user && user.status !== "deleted" && user.status !== "disabled" && (user.role === "Admin" || isBusinessManager(user)));

const ordinaryAccounts = db => (Array.isArray(db?.users) ? db.users : []).filter(user => user && user.role === MANAGED_ROLE && user.guest !== true && user.status !== "deleted");
const inTeamOf = (actor, user) => Boolean(actor && user && (actor.role === "Admin" || (user.teamManagerId && user.teamManagerId === actor.id)));

// The accounts the Team screen lists for this actor. Never an Admin, an Investor, a Provider Reviewer, a guest session, an erased account, or the actor's own account.
const listedUsers = (db, actor) => ordinaryAccounts(db).filter(user => user.id !== actor?.id && inTeamOf(actor, user));
const teamSize = (db, actor) => ordinaryAccounts(db).filter(user => user.teamManagerId && user.teamManagerId === actor?.id).length;

// -> { ok: true, user } | { ok: false, status, error }. An account the actor may change: on their team, never their own account (a person changes their own password the normal way), and another
// business manager only for an Admin. Whatever is not on the team (an Admin, another team's person, a missing account) is answered the same way, so other accounts cannot be probed.
function manageableUser(db, actor, email) {
  const address = emailKey(email);
  if (!address) return { ok: false, status: 400, error: "Enter the email of the person." };
  const target = ordinaryAccounts(db).find(user => emailKey(user.email) === address);
  if (target && actor && target.id === actor.id) return { ok: false, status: 400, error: "That is your own account. Change your own password from the sign-in screen." };
  if (!target || !inTeamOf(actor, target)) return { ok: false, status: 404, error: "There is nobody with that email on your team." };
  if (isBusinessManager(target) && actor?.role !== "Admin") return { ok: false, status: 403, error: "Only an Admin can change another business manager." };
  return { ok: true, user: target };
}

const maskPhone = value => { const digits = String(value || "").replace(/\s/g, ""); return digits.length > 7 ? `${digits.slice(0, 4)}${"*".repeat(Math.max(0, digits.length - 8))}${digits.slice(-4)}` : digits ? "set" : ""; };

// How an account is shown on the Team screen: no password, no hash, no token; a phone number only masked.
function shapeUser(user, db) {
  const links = (Array.isArray(db?.phoneCallers) ? db.phoneCallers : []).filter(row => row.userId === user.id);
  return {
    id: user.id,
    name: String(user.name || ""),
    email: String(user.email || ""),
    businessManager: isBusinessManager(user),
    teamManagerId: user.teamManagerId || null,
    active: user.status !== "disabled",
    createdAt: user.createdAt || null,
    phones: links.map(row => ({ id: row.id, phone: maskPhone(row.phone), label: row.label || "" }))
  };
}

module.exports = Object.freeze({ MANAGED_ROLE, MAX_TEAM_SIZE, MIN_PASSWORD_LENGTH, emailKey, validEmail, isBusinessManager, canManageTeam, ordinaryAccounts, inTeamOf, listedUsers, teamSize, manageableUser, shapeUser, maskPhone });
