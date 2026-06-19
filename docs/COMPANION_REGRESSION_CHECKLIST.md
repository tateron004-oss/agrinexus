# Companion Regression Checklist

Use this checklist before future voice, chat, router, workflow, confirmation, or language changes.

## Commands

Run:

```powershell
npm.cmd run companion:understanding-smoke
npm.cmd run companion:route-mismatch-smoke
npm.cmd run companion:workflow-offer-smoke
npm.cmd run companion:confirmation-gate-smoke
npm.cmd run companion:response-quality-smoke
npm.cmd run voice:response-check
npm.cmd run conversation:smoke
```

If a smoke test fails with a transient Windows temp DB file-open error, rerun that test solo before treating it as a product failure.

## Manual Spot Checks

- `Work` asks a clarifying work question and does not immediately open workflow.
- `I need medicine` gives a safety boundary and asks who the medicine is for.
- `My crops are failing` asks for crop and symptoms.
- `Help me sell maize` asks for quantity and location.
- `Can AgriTrade talk to me about selling crops and contacting buyers?` explains first and does not open buyer contact.
- `Open map` remains low-risk immediate navigation.
- `Send the buyer a message` requires confirmation.
- `Send WhatsApp to the seller` mentions seller/WhatsApp and requires confirmation.
- `Call the provider` requires confirmation.
- `Yes` without a pending staged action does not execute anything.
- `okay` after a high-risk staged action asks for explicit confirmation again.

## Language Checks

- Spanish: `Necesito medicina`, `Busco trabajo`, `Ayudame a vender maiz`.
- French: `Je cherche du travail`, `J ai besoin de medicaments`, `Aide moi a vendre du mais`.
- Swahili: `Nahitaji kazi`, `Nahitaji dawa`, `Nisaidie kuuza mahindi`.
- Portuguese response-quality path: `Preciso de trabalho`, `Preciso de remedio`, `Ajude me a vender milho`.

Portuguese is currently covered for response-quality paths only. Do not document it as a full profile language until that is implemented and tested.

## Do Not Break

- Conversation-first inputs must remain conversation-first.
- Risky execution must require confirmation.
- Low-risk navigation commands should not require confirmation.
- Confirmation metadata must remain visible on command results.
- Route mismatch metadata must remain visible for diagnostics.
- Buyer and seller wording should remain target-aware.
- Voice responses should avoid robotic route/status phrases.
