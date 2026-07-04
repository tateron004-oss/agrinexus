# Nexus Production Provider Activation Checklist

Use this checklist when moving Nexus from deployed app to real provider activity. Do not paste secrets into this file, tickets, screenshots, or chat.

## Hosting

- [ ] Production host selected.
- [ ] App deployed from the intended commit.
- [ ] Public URL working.
- [ ] HTTPS enabled.
- [ ] `/api/health` returns OK.
- [ ] `/api/nexus/production/status` returns safe status with no secrets.
- [ ] Rollback path confirmed.

## Credentials

- [ ] Live Knowledge credentials installed.
- [ ] SendGrid or SMTP credentials installed.
- [ ] Twilio SMS credentials installed.
- [ ] Twilio WhatsApp credentials installed.
- [ ] Daily video credentials installed.
- [ ] Provider recipient emails configured.
- [ ] Provider SMS/WhatsApp destinations configured.
- [ ] No secrets committed to GitHub.

## Provider Endpoints

- [ ] Care team/provider review endpoint configured.
- [ ] Pharmacy endpoint configured.
- [ ] Mobile clinic endpoint configured.
- [ ] Agronomy expert endpoint configured.
- [ ] Marketplace/vendor endpoint configured.
- [ ] Logistics endpoint configured.
- [ ] Training/workforce endpoint configured.
- [ ] Admin alert endpoint configured.

## Live Smoke Tests

- [ ] Live Knowledge test passed.
- [ ] Email smoke test passed.
- [ ] SMS smoke test passed.
- [ ] WhatsApp smoke test passed.
- [ ] Daily video room test passed.
- [ ] Telehealth packet created.
- [ ] Provider packet delivered to test inbox.
- [ ] Case/queue/timeline verified.

## Proof To Capture

- [ ] Production URL.
- [ ] Commit hash deployed.
- [ ] Health route response.
- [ ] Production status response with no secrets.
- [ ] Email provider message ID.
- [ ] Twilio SMS SID.
- [ ] Twilio WhatsApp SID.
- [ ] Daily room URL.
- [ ] Nexus case ID.
- [ ] Timestamp.
- [ ] Recipient endpoint used.
- [ ] Screenshot or log excerpt showing success without secrets.

## Pilot Launch

- [ ] Test user flow completed.
- [ ] Consent language verified.
- [ ] No fake execution claims observed.
- [ ] Provider response process defined.
- [ ] Admin monitoring owner assigned.
- [ ] Pilot launch approved.
