const crypto = require("crypto");

function hashPasswordForDev(password, { pepper = "", salt = crypto.randomBytes(16).toString("hex") } = {}) {
  const hash = crypto
    .pbkdf2Sync(`${password}${pepper}`, salt, 210_000, 32, "sha256")
    .toString("hex");
  return `pbkdf2_sha256$210000$${salt}$${hash}`;
}

function verifyPasswordForDev(password, storedHash, { pepper = "" } = {}) {
  const [scheme, iterations, salt, hash] = String(storedHash || "").split("$");
  if (scheme !== "pbkdf2_sha256") return false;
  const candidate = crypto
    .pbkdf2Sync(`${password}${pepper}`, salt, Number(iterations), 32, "sha256")
    .toString("hex");
  return crypto.timingSafeEqual(Buffer.from(candidate, "hex"), Buffer.from(hash, "hex"));
}

module.exports = {
  hashPasswordForDev,
  verifyPasswordForDev
};
