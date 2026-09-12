-- 002_seed_demo.sql originally inserted the demo@agrinexus.org user with a
-- literal placeholder password_hash ('replace-with-real-password-hash') that
-- can never verify. Migrations never re-run once applied, so fixing that
-- file alone would only help a brand-new database -- any environment that
-- already ran 002 (production included) is still stuck with the placeholder
-- until this follow-up UPDATE runs.
--
-- password_hash below is scrypt:<salt>:<hash> for the password "Demo2026!"
-- (generated via server/pg-users.js's hashPassword with an empty pepper --
-- matches that function's default when PASSWORD_PEPPER is unset). If a real
-- PASSWORD_PEPPER is ever configured, this specific seed row's password will
-- stop verifying; it exists mainly as an FK anchor for 002's seeded
-- audit/AI-insight rows, not as a production login path.

update users
set password_hash = 'scrypt:ac3d50c4f9bde2187c7caecf3cd3ebe8:518557f1d14bbd7dfdb769c46921b525e000378cd0db0714226e7f1fe62a483f6513a8594851df97362f19e0bbdc8b1e43041b87e4e439c02614b2cf418ec0cd'
where email = 'demo@agrinexus.org' and password_hash = 'replace-with-real-password-hash';
