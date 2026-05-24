# Auth Hardening Status

The auth phase is hardened at the foundation level and ready for production-grade password/session libraries when package installation is available.

## Completed

- Login/logout routes.
- Session refresh route.
- Session token IDs for rotation tracking.
- Tenant-scoped session claims.
- User email, display name, and roles in verified session claims.
- Production `Secure` cookie flag when `NODE_ENV=production`.
- Constant-time signature comparison with length guard.
- Admin-only user listing.
- Admin-only role listing.
- Admin-only role assignment.
- Auth audit events for login, refresh, and role assignment.
- Route smoke coverage.
- Admin route permission smoke coverage.

## Production Routes

- `POST /auth/login`
- `POST /auth/logout`
- `POST /auth/session/refresh`
- `GET /auth/me`
- `GET /auth/users`
- `GET /auth/roles`
- `POST /auth/roles/assign`

## Remaining Real-World Blockers

These require package/provider setup before production users:

- Replace development PBKDF2 password helper with Argon2id or bcrypt.
- Set a strong production `SESSION_SECRET`.
- Set `PASSWORD_PEPPER` through secrets management.
- Add persistent session revocation if immediate logout across devices is required.
- Add email verification or SSO/OAuth if public registration is enabled.

The code path is now ready for admin-facing user and role management UI.
