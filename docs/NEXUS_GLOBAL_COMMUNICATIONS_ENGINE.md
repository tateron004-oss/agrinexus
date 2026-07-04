# Nexus Global Communications Engine

Phase 6 adds a production-oriented communications preparation engine for Email, SMS, WhatsApp, Phone, and Telegram workflows.

The engine prepares channel-specific communication packets, draft previews, credential readiness, confirmation requirements, audit requirements, queue/test-mode status, and outcome recording contracts. It does not silently send messages, start calls, open external communication apps, or hand off to providers.

## Supported Packets

- `email_preparation_packet`
- `sms_preparation_packet`
- `whatsapp_preparation_packet`
- `phone_call_preparation_packet`
- `telegram_preparation_packet`
- `communication_confirmation_packet`
- `communication_outcome_packet`

## Runtime Behavior

The endpoint `POST /api/nexus/global-communications/engine` accepts an explicit user query and returns a local packet with:

- requested channel;
- provider name;
- draft preview;
- language confirmation requirement;
- credential status;
- missing environment variable names only;
- confirmation gate requirements;
- queue or test-mode status;
- audit event requirements;
- outcome recording status;
- Live Knowledge status and citations when configured.

## Channel Credential Model

- SMS uses `NEXUS_MESSAGES_ENABLED` and Twilio credentials.
- WhatsApp uses `NEXUS_WHATSAPP_ENABLED`, Twilio credentials, and `TWILIO_WHATSAPP_FROM`.
- Phone uses `NEXUS_CALLS_ENABLED` and Twilio Voice credentials.
- Email uses `NEXUS_EMAIL_ENABLED` and an approved SMTP or email provider key.
- Telegram uses `NEXUS_TELEGRAM_ENABLED` and `TELEGRAM_BOT_TOKEN`.

The engine reports only missing variable names. It never exposes API keys, auth tokens, phone numbers, or message provider secrets.

## Safety Rules

Nexus may prepare a draft, confirmation packet, queue status, and outcome contract. Nexus must not send SMS, WhatsApp, Telegram, or email, start phone calls, open provider apps, navigate externally, or contact anyone unless a future live channel is explicitly configured, the recipient is visible, the message or call purpose is previewed, language is confirmed, the user gives explicit final approval, audit logging is available, and outcome verification is recorded.

High-risk healthcare, pharmacy, emergency, payment, marketplace, transportation, and minor/family-support communications remain gated by the stricter workflow boundaries already defined in the platform.

## Standard User Experience

Standard Users see a communications packet card that explains the channel, draft preview, credential status, confirmation gate, queue/test-mode state, source context, citation count, and no-execution boundary. The card is useful immediately for preparation and review while still blocking live sends or calls without credentials and confirmation.

## Future Execution Path

Future phases can connect live providers by preserving the same packet contract:

1. resolve recipient;
2. display recipient and provider;
3. preview message or call purpose;
4. confirm language;
5. require explicit approval;
6. record audit event;
7. execute through configured provider only;
8. verify and record the actual outcome.
