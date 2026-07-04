# Nexus Global Chronic Care Health Engine

Phase 4 builds the global chronic disease and health education engine for diabetes, hypertension, obesity, RPM, RTM, community health worker support, and provider-review preparation. The engine creates education-only care packets that help users organize readings, questions, access barriers, and care-team summaries without diagnosing, prescribing, changing medication, submitting records, or claiming live monitoring.

## Supported Capability Areas

- Chronic disease education: plain-language education, intake questions, care-team summary structure, and urgent warning reminders.
- Diabetes support: glucose reading organization, medication questions as known, meal/activity context, and provider-review questions.
- Hypertension support: blood pressure reading context, symptom timing, adherence questions, and urgent warning symptoms.
- Obesity support: weight trend context, nutrition/activity barriers, sleep/stress notes, and care-team questions.
- RPM support: Remote Patient Monitoring explanation and manual reading packets unless a verified RPM connector is configured.
- RTM support: Remote Therapeutic Monitoring explanation and manual therapy-progress packets unless a verified RTM connector is configured.
- Community health worker support: CHW visit notes, household barriers, language needs, danger signs, and local referral questions.
- Provider review packets: concise summaries for licensed clinician or care-team review.

## Runtime Packet Types

- `chronic_disease_education_packet`
- `diabetes_support_packet`
- `hypertension_support_packet`
- `obesity_support_packet`
- `rpm_support_packet`
- `rtm_support_packet`
- `chw_support_packet`
- `provider_review_packet`

Each packet includes the user query, intent, condition focus, patient context, education focus, source-backed education when configured, citations, intake questions, RPM/RTM context, provider-ready summary, urgent warning symptoms, next safe actions, Live Knowledge status, export readiness, and no-execution guarantees.

## Live Knowledge Use

The engine calls the shared Nexus Live Knowledge layer for source-backed chronic-care education. When retrieval is disabled, credentials are missing, or the provider does not return citations, Nexus prepares a safe local packet and states that it does not fabricate citations.

## Clinical Safety Boundary

This engine does not:

- Diagnose.
- Prescribe.
- Recommend medication changes.
- Replace clinical judgment.
- Submit records to providers.
- Contact clinicians, pharmacies, CHWs, or care teams.
- Enroll anyone in live RPM or RTM monitoring.
- Claim live device monitoring unless a verified connector is configured.
- Dispatch emergency help.

Diagnosis, prescribing, medication changes, provider submission, care-team contact, RPM/RTM enrollment, pharmacy actions, or emergency pathways require verified providers, consent, explicit user approval, confirmation, review, and audit controls.

## Standard User Experience

Health and chronic-care prompts from the Standard User knowledge rail can now produce visible chronic-care health packets. The Health & Chronic Care mode includes quick actions for diabetes, hypertension, obesity, RPM, RTM, CHW support, provider summaries, readings, and urgent warning education.

The Standard User health workspace also exposes a compact chronic-care section launcher with:

- Chronic Care Education.
- Diabetes Support.
- Hypertension Support.
- Obesity Support.
- RPM Manual Readings.
- RTM Therapy Updates.
- CHW Support.
- Provider Review Summary.
- Provider Submission Gate.
- RPM / RTM Connector Gate.
- Medication / Pharmacy Boundary.
- Emergency Boundary.
- Health Review Queue.

Each section routes to the existing chronic-care health engine as preparation and review only. The UI must continue to state or imply no diagnosis, no prescribing, no medication change, no provider submission, no live RPM/RTM device connection, and no emergency dispatch.

## Export and Review Posture

Packets are export-ready for local user, clinician, care-team, CHW, or provider review. Exported packet content must preserve the education-only and no-execution boundary and must not include secrets or unsupported claims of live provider action.
