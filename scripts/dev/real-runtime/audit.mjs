// Makes two dedicated ordinary test accounts and runs scripts/production-user-audit.js (full mode, layers A, B and C, staged messages included) against the running harness.
//   node audit.mjs [layers] [extra audit options...]
import { spawn } from "node:child_process";
import path from "node:path";
import { OUT, ROOT, ports, adminCookie, makeUser } from "./common.mjs";

const [layers = "ABC", ...rest] = process.argv.slice(2);
const admin = await adminCookie();
const first = await makeUser(admin, "audit1");
const second = await makeUser(admin, "audit2");
const child = spawn(process.execPath, ["scripts/production-user-audit.js", "--base", `http://127.0.0.1:${ports().app}`, "--mode", "full", "--layers", layers, "--with-staging", "--out", path.join(OUT, "audit"), ...rest], {
  cwd: ROOT, stdio: "inherit",
  env: { ...process.env, AUDIT_EMAIL: first.email, AUDIT_PASSWORD: first.password, AUDIT_EMAIL_2: second.email, AUDIT_PASSWORD_2: second.password }
});
child.on("exit", code => { process.exitCode = code || 0; });
