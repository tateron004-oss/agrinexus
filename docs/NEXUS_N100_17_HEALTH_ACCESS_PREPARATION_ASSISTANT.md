# N100-17 Health Access Preparation Assistant

N100-17 adds an inert server-side health access preparation contract. It helps Nexus prepare health access questions and checklists without giving medical advice, diagnosing, prescribing, refilling, booking, contacting providers, starting telehealth, dispatching emergency help, accessing medical records, processing payments, or sharing location.

## Supported Artifacts

- health access options checklist
- telehealth preparation notes
- pharmacy support questions
- mobile clinic access checklist
- transportation-to-care prep
- provider directory questions
- emergency boundary notice

## Safety Boundary

Every artifact keeps:

- `canExecute: false`
- `executionAuthority: "none"`
- `noMedicalAdviceProvided: true`
- `noDiagnosisAuthorized: true`
- `noPrescriptionActionAuthorized: true`
- `noAppointmentBooked: true`
- `noProviderContactAuthorized: true`
- `noTelehealthSessionStarted: true`
- `noEmergencyDispatchAuthorized: true`
- `noMedicalRecordAccessAuthorized: true`
- `noPaymentAuthorized: true`
- `noLocationSharingAuthorized: true`
- `noBackendWritePerformed: true`

## Runtime Status

This module is not loaded by `public/app.js`, `public/index.html`, or `server.js`. It does not change Standard User runtime behavior and does not add visible UI.

## QA

`scripts/nexus-n100-17-health-access-preparation-assistant-qa.js` verifies supported health access preparation artifact types, blocked health execution prompts, emergency boundary language, static runtime absence, no unsafe provider/medical/payment/location APIs, package alias wiring, and local-safe suite inclusion.
