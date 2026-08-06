"use strict";

function journey(id, prompts, evidence) {
  return Object.freeze({ id, prompts: Object.freeze(prompts), evidence: Object.freeze(evidence) });
}

module.exports = Object.freeze([
  journey("agriculture", [
    "Nexus, open Agriculture Help.",
    "Research current maize diseases in Kenya and show source-labeled images.",
    "Use the second source to add a field observation report.",
    "Correct the crop to maize and the location to Nakuru County.",
    "Save this report, close Agriculture Help, and reopen the saved report."
  ], ["source-backed-records", "loaded-image-pixels", "editable-document", "persisted-artifact"]),
  journey("health", [
    "Nexus, open Health and Chronic Care.",
    "Record my blood pressure as 140 over 90 yesterday morning.",
    "Add that I had a mild headache and correct the time to yesterday evening.",
    "Create a care-team summary without sending it.",
    "Save it, close the workspace, and reopen my saved health summary."
  ], ["editable-fields", "safety-boundary", "correction", "persisted-artifact"]),
  journey("telehealth", [
    "Nexus, open Telehealth Intake.",
    "Prepare a video visit intake for recurring migraines next Tuesday.",
    "Change the preferred date to Wednesday and add sensitivity to light.",
    "Show the real configured video-visit handoff or truthfully identify the missing provider.",
    "Save the intake, close it, and reopen the saved intake."
  ], ["editable-fields", "consent", "provider-status", "persisted-artifact"]),
  journey("mobile-clinic", [
    "Nexus, open Mobile Clinic support.",
    "Find current mobile clinic options near Kisumu with their sources.",
    "Put the second clinic on the map and create a route from central Kisumu.",
    "Change the starting point to Kisumu Airport.",
    "Save this visit plan, close it, and reopen it."
  ], ["source-backed-records", "coordinates", "route-geometry", "persisted-artifact"]),
  journey("pharmacy", [
    "Nexus, open Pharmacy Support.",
    "Find pharmacies near Nakuru and create questions about a new blood pressure medicine.",
    "Add a question about side effects and correct the medicine name when I provide it.",
    "Prepare the pharmacist handoff but do not send anything without my consent.",
    "Save the question card, close it, and reopen it."
  ], ["source-backed-records", "safety-boundary", "consent", "persisted-artifact"]),
  journey("learning", [
    "Nexus, open Learning and Literacy.",
    "Find a current beginner digital literacy lesson in Swahili with sources.",
    "Explain the second step in simpler language.",
    "Correct my learning language to Swahili and mark the first step complete.",
    "Save my progress, close the lesson, and reopen it."
  ], ["source-backed-records", "follow-up-context", "correction", "persisted-artifact"]),
  journey("workforce", [
    "Nexus, open Jobs and Workforce.",
    "Find three current agriculture jobs near Nairobi with visible sources.",
    "Create an editable resume for the second job.",
    "Add five years of farm operations experience and correct the phone number when I provide it.",
    "Save the resume, close it, and reopen the saved resume."
  ], ["source-backed-records", "editable-document", "correction", "persisted-artifact"]),
  journey("marketplace", [
    "Nexus, open AgriTrade Marketplace.",
    "Show current maize market information for Kenya with sources and draft a listing for fifty bags.",
    "Set the pickup location to Nakuru and the price to the amount I provide.",
    "Prepare the buyer handoff but do not publish or contact anyone without confirmation.",
    "Save the draft, close it, and reopen the saved listing."
  ], ["source-backed-records", "editable-fields", "consent", "persisted-artifact"]),
  journey("maps", [
    "Nexus, open a fresh map of Nairobi.",
    "Move the map to Nakuru and create a route from Nairobi to Nakuru.",
    "Change the destination to Naivasha.",
    "Reset the map to its initial Nairobi state.",
    "Close the map and reopen the last saved route."
  ], ["rendered-map", "viewport-change", "route-geometry", "reset-state"]),
  journey("music", [
    "Nexus, play an authorized Stevie Wonder source.",
    "Pause the music, resume it, and verify playback time advances.",
    "Play the next available result.",
    "Stop the music and verify playback is no longer audible.",
    "Close Music and reopen the last music result without claiming playback until it actually starts."
  ], ["provider-source", "advancing-current-time", "audible-output", "stopped-state"]),
  journey("reminders", [
    "Nexus, open Reminders.",
    "Remind me tomorrow morning to check my blood pressure.",
    "Change the time to tomorrow evening.",
    "Save the reminder and list my current reminders.",
    "Close Reminders and reopen the saved reminder."
  ], ["editable-fields", "correction", "saved-record", "persisted-artifact"]),
  journey("offline", [
    "Nexus, open the Offline Queue.",
    "Queue a request to research maize storage when the connection returns.",
    "Change its priority to high and show the queued record.",
    "Reconnect and synchronize it, or truthfully show why synchronization is unavailable.",
    "Close the queue and reopen the saved queue state."
  ], ["queued-record", "connection-transition", "sync-receipt", "persisted-artifact"]),
  journey("live-knowledge", [
    "Nexus, search for current soil restoration programs in the Sahel and show visible sources.",
    "Show source-labeled images and open the second source.",
    "Find a relevant playable video from a real provider and verify it starts.",
    "Put the three programs into a new editable document with their source links.",
    "Save the document, close it, and reopen the saved document."
  ], ["source-backed-records", "loaded-image-pixels", "playable-video", "persisted-artifact"]),
  journey("images-video", [
    "Nexus, show source-labeled images of drip irrigation in Kenya.",
    "Open the second image and tell me its source.",
    "Replace it with a playable video about the same topic.",
    "Correct the topic to solar irrigation and verify playback starts.",
    "Save the result, close it, and reopen the saved media collection."
  ], ["loaded-image-pixels", "attribution", "playback-progress", "persisted-artifact"]),
  journey("documents-forms", [
    "Nexus, list my documents and open a new editable field visit form.",
    "Enter my name as Ron Tate and the location as Nairobi.",
    "Correct the location to Nakuru and show the changed field.",
    "Save the form and close the document workspace.",
    "Reopen the saved form in a fresh session and read the values."
  ], ["editable-fields", "corrected-value", "persisted-artifact", "new-session-reload"]),
  journey("guided-entry", [
    "Nexus, open Guided Entry for a telehealth intake.",
    "Enter recurring headache as the visit reason.",
    "Move to the date field and enter next Tuesday.",
    "Correct the date to Wednesday and verify the active field changed.",
    "Save, close Guided Entry, and reopen the saved intake."
  ], ["active-field", "transcript-receipt", "corrected-value", "persisted-artifact"]),
  journey("rpm-rtm", [
    "Nexus, open RPM and RTM in Health and Chronic Care.",
    "Record blood pressure 140 over 90 yesterday morning.",
    "Add a walking session and correct its duration to thirty minutes.",
    "Create a care-team trend summary without sending it.",
    "Save, close the health workspace, and reopen the saved readings."
  ], ["timestamped-reading", "editable-fields", "safety-boundary", "persisted-artifact"]),
  journey("uploads", [
    "Nexus, open Uploads and select the provided field report file.",
    "Validate the file and show its name, type, and size.",
    "Extract a preview and explain any unsupported content truthfully.",
    "Correct the document title to Nakuru Field Report.",
    "Save, close Uploads, and reopen the saved upload record."
  ], ["file-metadata", "content-preview", "truthful-rejection", "persisted-artifact"]),
  journey("cross-application", [
    "Nexus, find current maize storage sources in Agriculture Help.",
    "Use the second result to create a report in Documents.",
    "Add a reminder to review that report tomorrow.",
    "Correct it to tomorrow evening and tell me what 'it' refers to.",
    "Save everything, close all workspaces, and reopen the report and reminder."
  ], ["source-receipt", "active-workspace", "resolved-reference", "persisted-artifact"]),
  journey("multilingual", [
    "Nexus, open Learning and Literacy in English.",
    "Explain crop rotation in Swahili.",
    "Now simplify that explanation in French.",
    "Correct the language to Portuguese without losing the topic.",
    "Save, close the lesson, and reopen it in Portuguese."
  ], ["detected-language", "spoken-response", "visible-result", "context-receipt"]),
  journey("voice-memory", [
    "Hello Nexus, open Live Knowledge using the microphone.",
    "Find solar irrigation sources, then stop speaking when I interrupt.",
    "Open the second result and explain it more simply.",
    "Correct 'it' to mean the first result and continue listening.",
    "Save the session, close the workspace, and reopen the remembered conversation."
  ], ["audio-owner-receipt", "transcript", "interruption-receipt", "context-receipt"])
]);
