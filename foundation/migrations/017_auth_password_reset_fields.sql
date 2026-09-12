-- Additive fields needed to move login/password-reset off the JSON blob
-- store and onto the real users table. No existing column is changed.

alter table users add column if not exists password_reset_token_hash text;
alter table users add column if not exists password_reset_expires_at timestamptz;
alter table users add column if not exists last_login_at timestamptz;
