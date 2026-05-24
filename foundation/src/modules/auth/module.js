const { createModule } = require("../../module-factory");

const authModule = createModule({
  name: "auth",
  owner: "platform",
  responsibilities: [
    "User registration and login",
    "Password hashing and session/token issuance",
    "Role-based access control",
    "Tenant isolation",
    "Authentication audit events"
  ],
  routes: [
    "POST /auth/login",
    "POST /auth/logout",
    "POST /auth/session/refresh",
    "POST /auth/register",
    "GET /auth/me",
    "GET /auth/users",
    "GET /auth/roles",
    "POST /auth/roles/assign"
  ],
  tables: ["tenants", "users", "roles", "user_roles", "audit_events"],
  integrations: ["email verification provider", "optional SSO/OAuth provider"]
});

module.exports = { authModule };
