# Women's health care in Kyro: plan

Decision (2026-10-13, owner): women as users only; build steps 1 and 2 now. No pregnancy companion, no cycle or contraception tracking for now.

## What this is

A "women's health" area made from things Kyro already does well: plain answers with their sources, help finding care, reminders (later), and the safety net. It is information and navigation. It does not diagnose, does not advise on medicines or doses, does not track a person's body, and does not contact anyone.

## Who it is for

- A woman using Kyro herself, typed or spoken, in the United States or in Africa (Kenya and Nigeria first; WHO sources for everywhere else).
- Not the community health worker. Their tool (`nexus/healthwork/`, pregnancies, antenatal visits, immunisation, referrals) already exists and is left alone.

## What exists already (not rebuilt)

- Danger signs in pregnancy, labour, after a birth, a miscarriage, a newborn, raised blood pressure in pregnancy, and a woman hurt by a partner: `public/kyro-care-phrases.js`, `nexus/companion/safety.js`. They run before everything in this plan and win over it.
- "Is ibuprofen safe in pregnancy": no dose from Kyro, and who to ask (`nexus/companion/safety.js`).
- Clinic and pharmacy search near a place (`server/providers/placesLocation.js`).
- Blood pressure and blood sugar readings, medicine questions, reminders.

## Step 1: sourced guides (built)

`nexus/knowledge/womens-health.js` (answers and sources) and `womens-health-topics.js` (which question is which). Same pattern as the small-business guides: every statement was read from an official page on the checked date, each answer lists its sources and that date, says it is general information and not medical advice, and says when to see a health worker.

Topics: cervical screening and the HPV vaccine; breast health and screening; contraception and family planning; periods and the cycle; menopause; prenatal care; after the birth (postpartum, including mood); finding care; a women's health overview.

Two source sets: United States (CDC, HHS Office on Women's Health, NIH, USPSTF, ACOG) and everywhere else (WHO, with the national ministry where the page could be read). A person is treated as in the United States by the device time zone or a question that names a US term; otherwise the WHO version is used.

A question is taken only if it is a question or a request for help. These are never answered with a guide, and are left to the layers that handle them: anything urgent or unsafe (bleeding, labour, a baby not moving, a fit, fever, harm by another person, thoughts of self-harm), anything about a medicine or dose, a health worker's own list ("who is pregnant"), a record or a draft ("log my period"), and the women's business programmes.

Works typed and by voice (it is a deterministic planner answer, no AI model, so the spoken path uses it too).

## Step 2: finding care (built)

- "Where can I get a Pap smear / family planning / prenatal care", "low cost women's health care", "find an antenatal clinic": a finding-care answer. In the United States it names the HRSA health center finder and the Title X family planning clinic locator; elsewhere it names the public health facility and the community health worker, and says to ask for the service by name. It says Kyro cannot tell which clinics offer which service, and that the person can say "find a clinic near [town]" for a map-based search.
- "Find a women's health clinic near me": the normal clinic search still runs; the answer gets one added line saying to ask the clinic whether it offers the service (typed route). The spoken clinic search is unchanged.

## Later steps (not built, in order)

3. Reminders she sets herself (check-ups, screenings, an appointment) through the existing reminder tool. No new health record.
4. A wider safety net: heavy bleeding, severe pelvic pain, a breast lump, postpartum depression check-ins, and country help lines for violence and crisis.
5. Only after clinician review and a privacy design for shared phones and US state law: cycle, fertility or contraception tracking; pregnancy trends.

## Rules that do not change

- Privacy by default. Nothing about a woman is shown or read aloud unless she asked; her health records stay behind her sign-in. Family-planning information is already kept out of anything another person could read (`server.js`, the profile blob).
- No diagnosis, no dose, no "you should take". Always who to ask.
- Every sentence needs clinician review before this is called finished; the Kiswahili needs a fluent speaker. Neither has happened. Both are listed in the pull request.
- The checked date is shown on every answer. When a source changes, read the page again, change the text and the date, run the tests.

## Open decisions for the owner

- Clinician reviewer for the English wording; fluent reviewer for Kiswahili.
- Which other African countries get their own national sources after Kenya and Nigeria.
- Whether step 3 (reminders) is next.
