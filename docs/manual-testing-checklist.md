# AgriNexus Manual Testing Checklist

Use this after the automated regression suite passes. The goal is to test like a real user, investor, and operator, not like a developer.

## 1. User Mode

Sign in as the standard user.

Check:
- The first screen feels simple enough for a non-technical person.
- Big service buttons open visible workflows.
- Every workflow has a clear back or close path.
- Captions do not block action buttons.
- No admin repair or backend controls are visible.

Try:
- `Nexus, go quiet`
- `Nexus, show manual testing path`
- `Nexus, open learning`
- `Nexus, start a course`
- `Nexus, open telehealth`
- `Nexus, start telehealth intake`
- `Nexus, sell my crop and track delivery`
- `Nexus, open the map`

## 2. Voice Behavior

Check:
- Nexus does not talk over the demo intro.
- `Nexus, stop` stops active speech.
- `Nexus, go quiet` turns off demo voice.
- `Nexus, turn voice back on` restores voice.
- Nexus can answer a new question after being stopped.
- Nexus responds as Nexus, not a role label.

Try:
- `Nexus, what should I call you?`
- `Nexus, run system integrity check`
- `Nexus, what can you do?`
- `Nexus, explain the platform to an investor`

## 3. Language

Check English, Spanish, French, Arabic, and Kiswahili.

Check:
- Header, module content, buttons, workflow text, captions, and voice responses change language where expected.
- Nexus can still understand commands after the language changes.
- Long translated text does not overflow.

Try:
- `Nexus, change language to Spanish`
- `Nexus, change language to French`
- `Nexus, change language to Arabic`
- `Nexus, change language to Kiswahili`
- `Nexus, open telehealth`

## 4. Maps

Check:
- Maps show real map tiles, country boundaries, labels, route context, and live tile status.
- Shipment, route, clinic/facility, hotspot, and rural health maps are visible.
- Global view and zoom controls work.
- No cartoon SVG route drawings appear.

Try:
- `Nexus, open the map`
- `Nexus, run route intelligence`
- `Nexus, track my sale and delivery`
- `Nexus, find nearest clinic`

## 5. Provider Truth

Check:
- Live providers are described as live only when configured.
- Missing vendors are described as provider-ready, local evidence, or needs credentials.
- Nexus does not pretend a real telehealth, job, course, drone, payment, logistics, or EHR partner is connected when it is not.

Try:
- `Nexus, run live service check`
- `Nexus, what is live and what still needs providers?`
- `Nexus, explain provider readiness`

## 6. Admin Mode

Sign in as Admin.

Check:
- Admin can see command center, readiness, integrations, provider pipeline, users, and operational evidence.
- Admin tools do not appear in User mode.
- Health check and live service check return visible results.

Try:
- `Nexus, run health check`
- `Nexus, run live service check`
- `Nexus, open integrations`
- `Nexus, show provider pipeline`

## 7. Investor Mode

Sign in as Investor.

Check:
- Investor mode feels presentation-ready.
- The platform can explain what it does, who benefits, and what is live versus provider-ready.
- Maps, AI, voice, learning, workforce, telehealth, trade, and integrations can be shown without hunting.

Try:
- `Nexus, run investor voice demo`
- `Nexus, explain this platform to an investor`
- `Nexus, summarize impact for rural African farmers`
- `Nexus, run system integrity check`

## 8. Failure Recovery

Check:
- Bad commands do not freeze the app.
- Nexus asks a helpful follow-up instead of demanding exact words.
- Slow or missing engines return a plain-language recovery message.

Try:
- `Nexus, I need help but I do not know where to start`
- `Nexus, qzxv blorf`
- `Nexus, help me with my farm`
- `Nexus, I need a doctor but I cannot explain it well`

## Pass Standard

Manual testing is ready to move forward when:
- No button feels like a placeholder.
- No workflow opens as a partial or blank panel.
- No text spills off-screen.
- Voice can stop, go quiet, restart, and redirect.
- Languages remain usable.
- Maps look real and useful.
- Provider truth is clear.
- User, Admin, and Investor modes each feel intentionally different.
