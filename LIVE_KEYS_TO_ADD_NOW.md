# AgriNexus Live Keys To Add Now

Use this as the short Render checklist. Add these to the `agrinexus-platform` web service environment.

## Already Connected Or Previously Added

- `OPENAI_API_KEY`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`

## Add Next For Professional Maps And Routing

Choose one map/routing provider first.

### Option A: Mapbox

- `MAPBOX_ACCESS_TOKEN`

### Option B: OpenRouteService

- `OPENROUTESERVICE_API_KEY`

### Optional Later

- `GOOGLE_MAPS_API_KEY`
- `ROUTING_WEBHOOK_URL`

## Add Next For Real Payments

Choose Paystack or Flutterwave first. Do not add both as the active `PAYMENT_PROVIDER`.

### Option A: Paystack

- `PAYMENT_PROVIDER=paystack`
- `PAYSTACK_SECRET_KEY`
- `PAYSTACK_SUBACCOUNT_CODE` if using split payments
- `PAYSTACK_BEARER=subaccount`

### Option B: Flutterwave

- `PAYMENT_PROVIDER=flutterwave`
- `FLUTTERWAVE_SECRET_KEY`
- `FLUTTERWAVE_SUBACCOUNT_ID` if using split payments

## Add Next For Better SMS And WhatsApp

- `TWILIO_SMS_FROM`
- `TWILIO_WHATSAPP_FROM`
- `TWILIO_MESSAGING_SERVICE_SID`

Use these only after Twilio confirms the sender/WhatsApp/messaging service values.

## Recommended Order

1. Add `MAPBOX_ACCESS_TOKEN` or `OPENROUTESERVICE_API_KEY`.
2. Add Paystack or Flutterwave payment keys.
3. Add Twilio SMS/WhatsApp sender values.
4. Redeploy `agrinexus-platform`.
5. Run the hosted live service check.

## Important

Do not paste placeholder values such as `PASTE_*` into Render. Only add real keys from the provider dashboard.
