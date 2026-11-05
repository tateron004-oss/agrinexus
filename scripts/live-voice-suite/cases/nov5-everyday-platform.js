"use strict";
// The everyday and platform items still open from the owner's test report of 4 November 2026 (everyday-21/26/33/45/58/65, platform-09/13). Every sentence is SAID; nothing here is typed.
//   - the tips and guide answers must be read out to the END, not cut off part way (the owner heard Kyro "stopping while answering a lot")
//   - a walkthrough must go from step to step when "Next" is said (the owner heard it stop and not finish the steps)
//   - "Give me directions to ..." is directions: never a job for a worker called "Me" ("add a me section")
// The rig is a guest with no location, so directions end in the card that says where to go from here.
// (a step is read out whole: the line always ends with what to say next, or that it is the last step; it used to be cut off after 500 letters)
const ENDS = "Say next when you have done this|This is the last step";
const walkStep = (n, total) => ({ say: "Next", timeoutMs: 120000, expect: { text: `Step ${n} of ${total}`, said: ENDS } });

module.exports = Object.freeze([
  { id: "n5-ai-tips-read-to-the-end", area: "nov5", say: "I just got out of prison. What is an AI assistant?", timeoutMs: 120000,
    expect: { screen: ["text", "list"], text: "Kyro's own tips", notText: "I cannot find|not sure what you", said: "gift cards|a code" } },
  { id: "n5-library-computer-read-to-the-end", area: "nov5", say: "I just got out of prison. How do I use a library computer safely?", timeoutMs: 60000,
    expect: { screen: ["text", "list"], text: "library computer is shared", notText: "I cannot find|not sure what you", said: "sign out|do not let" } },
  { id: "n5-hacked-email-read-to-the-end", area: "nov5", say: "My email got hacked, what do I do?", timeoutMs: 60000,
    expect: { screen: ["text", "list"], text: "First, clean your device", notText: "I cannot find|not sure what you" } },
  { id: "n5-two-step-then-walk-me-through-it", area: "nov5", say: "How do I turn on two-step sign-in?", timeoutMs: 60000,
    expect: { screen: ["text", "list"], text: "two-step|second proof", notText: "I cannot find|not sure what you" },
    then: [{ say: "Walk me through it.", timeoutMs: 120000, expect: { screen: "walkthrough", text: "Step 1 of", said: ENDS } }, walkStep(2, "\\d+")] },
  { id: "n5-special-ed-walkthrough-to-the-last-step", area: "nov5", say: "Walk me through using Kyro for special education", timeoutMs: 120000,
    expect: { screen: "walkthrough", text: "Step 1 of 6", said: ENDS },
    then: [walkStep(2, 6), walkStep(3, 6), walkStep(4, 6), walkStep(5, 6), walkStep(6, 6)] },
  // platform-13: "I want to upload a Word document" opens the ONE-button screen (a single sentence and a Choose a file button), not a long workspace, and it stays until it is closed
  { id: "n5-upload-a-word-document-is-one-button", area: "nov5", say: "I want to upload a Word document.", timeoutMs: 45000,
    expect: { screen: "text", keep: true, buttons: ["Choose a file"], text: "Choose a picture, a PDF, a Word document or an Excel file", notText: "workspace|Provider|readiness" } },
  { id: "n5-upload-an-excel-sheet-is-one-button", area: "nov5", say: "Upload my Excel spreadsheet.", timeoutMs: 45000,
    expect: { screen: "text", keep: true, buttons: ["Choose a file"], notText: "workspace|Provider|readiness" } },
  // platform-09: with no signal the typed box shows at once (voice cannot work) with the words for it, and goes when the signal comes back. The rig tells the page the signal went, as the browser does.
  { id: "n5-offline-typed-box-shows-at-once", area: "nov5", say: "Hello there.", timeoutMs: 45000, expect: { model: true },
    then: [{ offline: true, expect: { typedBox: true }, timeoutMs: 10000 }, { offline: false, expect: { typedBox: false }, timeoutMs: 10000 }] },
  { id: "n5-directions-to-the-clinic-are-directions", area: "nov5", say: "Give me directions to the clinic.", timeoutMs: 60000,
    expect: { allowRefusal: true, screen: ["text", "list"], text: "location|where you are", notText: "Task \\d|worker|Me Directions" } },
  { id: "n5-directions-nearest-pharmacy-are-directions", area: "nov5", say: "Give me directions to the nearest pharmacy.", timeoutMs: 60000,
    expect: { allowRefusal: true, screen: ["text", "list"], text: "location|where you are", notText: "Task \\d|worker|Me Directions|add a me" } }
]);
