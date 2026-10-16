"use strict";
// Documents, notes, reminders, checklists: opened by voice (the sheet's words and other ways of saying it), then used with taps and typing.
// A case: { id, area, say | typed, expect, then?: [ {tap}|{type}|{choose}|{say}|{wait}|{expect} ], writes?, risky?, needs? }.  `writes: true` saves something on the account (run only with --writes).
const ANY_FIRST_DOCUMENT = "^(?!Save document|×)\\S";

module.exports = [
  { id: "docs-open", area: "documents", say: "Open documents.", expect: { screen: "list", text: "SAVED DOCUMENTS", keep: true, buttons: ["Save document"] } },
  { id: "docs-open-offscript-1", area: "documents", say: "Can you pull up my documents?", expect: { screen: "list", text: "SAVED DOCUMENTS" } },
  { id: "docs-open-offscript-2", area: "documents", say: "I want to see my files.", expect: { screen: "list", text: "SAVED DOCUMENTS" } },
  { id: "docs-open-politely", area: "documents", say: "Open documents, please.", expect: { screen: "list", text: "SAVED DOCUMENTS" } },
  { id: "docs-tap-open-edit", area: "documents", say: "Open documents.", expect: { screen: "list", text: "SAVED DOCUMENTS" },
    then: [{ tap: ANY_FIRST_DOCUMENT }, { expect: { screen: "document", buttons: ["Save changes"], download: true, keep: true } }] },
  { id: "docs-create", area: "documents", writes: true, say: "Make a document called Voice Suite Doc that says written by the voice suite.", timeoutMs: 45000, expect: { screen: "document", text: "VOICE SUITE DOC", download: true } },
  { id: "docs-save-edit", area: "documents", writes: true, say: "Open documents.", expect: { screen: "list", text: "Voice Suite Doc" },
    then: [{ tap: "^Voice Suite Doc" }, { expect: { screen: "document", buttons: ["Save changes"] } }, { type: { selector: "textarea", value: "edited by the voice suite" } }, { tap: "^Save changes" }, { expect: { text: "Saved" } }] },
  { id: "docs-new-from-box", area: "documents", writes: true, say: "Open documents.", expect: { screen: "list" },
    then: [{ type: { selector: "input[name=title]", value: "Suite Box Doc" } }, { type: { selector: "textarea[name=body]", value: "typed in the box" } }, { tap: "^Save document" }, { expect: { text: "Suite Box Doc" } }] },

  { id: "notes-open", area: "lists", say: "Show my notes.", expect: { screen: "list", text: "YOUR NOTES", keep: true } },
  { id: "notes-heard-wrong", area: "lists", say: "Go my notes.", expect: { screen: "list", text: "YOUR NOTES" } },
  { id: "notes-offscript", area: "lists", say: "I want to look at my notes.", expect: { screen: "list", text: "YOUR NOTES" } },
  { id: "notes-write", area: "lists", writes: true, say: "Show my notes.", expect: { screen: "list", text: "YOUR NOTES" },
    then: [{ type: { selector: "textarea,input[type=text]", value: "note from the voice suite" } }, { tap: "^Save note" }, { expect: { text: "note from the voice suite" } }] },
  { id: "notes-by-voice", area: "lists", writes: true, say: "Write a note that says call the vet tomorrow.", timeoutMs: 40000, expect: { screen: ["text", "list"], text: "vet" } },

  { id: "reminders-open", area: "lists", say: "Show my reminders.", expect: { screen: "list", text: "REMINDER", keep: true } },
  { id: "reminders-offscript", area: "lists", say: "Could you show me my reminders please?", expect: { screen: "list", text: "REMINDER" } },
  { id: "calendar-open", area: "lists", say: "Open the calendar.", expect: { screen: "list", text: "REMINDER" } },
  { id: "reminders-set", area: "lists", writes: true, say: "Show my reminders.", expect: { screen: "list" },
    then: [{ type: { selector: "input[name=what]", value: "voice suite reminder" } }, { type: { selector: "input[name=time]", value: "09:45" } }, { tap: "^Set reminder" }, { expect: { text: "voice suite reminder" } }] },

  { id: "checklists-open", area: "lists", say: "Show my checklists.", expect: { screen: "checklists", keep: true } },
  { id: "checklists-todo", area: "lists", say: "Show me my to-do list.", expect: { screen: "checklists" } },
  { id: "checklists-offscript", area: "lists", say: "I'd like to see my checklists.", expect: { screen: "checklists" } },
  { id: "checklists-create-by-voice", area: "lists", writes: true, say: "Create a checklist called Suite List with items seeds, sacks and scale.", timeoutMs: 45000, expect: { screen: "checklists", text: "Suite List" } },
  { id: "checklists-tick", area: "lists", writes: true, say: "Show my checklists.", expect: { screen: "checklists" },
    then: [{ tap: "^☐ " }, { expect: { text: "☑" } }] },
  { id: "list-replaced-by-next-request", area: "lists", say: "Open documents.", expect: { screen: "list", text: "SAVED DOCUMENTS" },
    then: [{ say: "Show my checklists." }, { expect: { screen: "checklists" } }] }
];
