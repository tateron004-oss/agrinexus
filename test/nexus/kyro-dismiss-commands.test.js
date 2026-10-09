"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const D = require("../../public/kyro-dismiss-commands.js");

// Found by using the product: "close the weather card" opened a Live Knowledge Research window (any sentence that mentioned the weather did), "close it" and "go back to the orb" were
// understood by nothing, and the answer stayed on the screen. These tests pin what counts as a dismissal, and what must never be mistaken for one.

test("requests to close what is on the screen are understood, however they are phrased", () => {
  for (const text of ["Close out the weather information.", "close the weather card", "Close the card", "close it", "Close this", "dismiss the weather", "hide the weather card", "Close the map",
    "close this window", "Kyro, please close the weather card", "could you close that", "close everything", "hide it", "shut the window", "close the weather popup", "clear the screen",
    "Hey Kyro, dismiss that", "please close the forecast", "get rid of the weather card", "put away the map"]) {
    const parsed = D.parse(text);
    assert.ok(parsed && (parsed.kind === "close" || parsed.kind === "home"), `"${text}" must close the screen, got ${JSON.stringify(parsed)}`);
  }
});

test("going back to the orb, and being finished, are understood", () => {
  for (const text of ["go back to the orb", "back to the orb", "return to the orb", "take me back to the orb", "take me home", "go home", "go back to the home screen", "show me just the orb",
    "I am done", "I'm done", "we're done here", "that's all", "Thanks, that's all", "that will be all", "all done", "I'm finished with this", "done for now"]) {
    const parsed = D.parse(text);
    assert.ok(parsed && (parsed.kind === "home" || parsed.kind === "done"), `"${text}" must go back to the orb, got ${JSON.stringify(parsed)}`);
  }
});

test("'I'm done working, close' and its kin: a finished sentence, with or without a closing request, goes back to the orb", () => {
  for (const text of ["Kyro, I am done working, close", "Kyro, im done working, close", "I am done working. Close.", "I am done working", "done working", "Kyro I am done for the day", "I'm finished working, close everything",
    "I am done, close", "that is all, close it", "I'm done for today, go back to the orb", "Kyro, close and go back to the orb", "close everything and go home"]) {
    const parsed = D.parse(text);
    assert.ok(parsed && (parsed.kind === "done" || parsed.kind === "home"), `"${text}" must go back to the orb, got ${JSON.stringify(parsed)}`);
  }
  for (const text of ["I am done working with the maize harvest today", "I am done, close my account", "I am done working on my resume, close the report", "clear my shopping list and go home"]) {
    assert.equal(D.parse(text), null, `"${text}" names something specific and must not be taken as a dismissal`);
  }
});

test("Kiswahili: closing the screen, going back and being finished", () => {
  assert.deepEqual(D.parse("funga kadi ya hali ya hewa"), { kind: "close", lang: "sw" });
  assert.deepEqual(D.parse("ficha hii"), { kind: "close", lang: "sw" });
  assert.deepEqual(D.parse("rudi kwenye orb"), { kind: "home", lang: "sw" });
  assert.deepEqual(D.parse("nenda nyumbani"), { kind: "home", lang: "sw" });
  assert.deepEqual(D.parse("nimemaliza"), { kind: "done", lang: "sw" });
  assert.deepEqual(D.parse("ni hayo tu"), { kind: "done", lang: "sw" });
});

test("a person's own records, other commands and ordinary requests are never mistaken for a dismissal", () => {
  for (const text of ["close my account", "close report 12: pump repaired", "close report 12", "clear my shopping list", "remove milk from my shopping list", "remove it", "clear everything", "close the gate",
    "what is the weather in Kisumu", "show me the weather", "weather card", "open the weather card", "close the video", "close the music", "stop the music", "pause", "next song", "go back", "back", "home",
    "I am done with the maize harvest today", "I'm done planting 2 acres of maize", "done", "close the deal with John", "how do I close the card reader", "clear my completed to-dos",
    "delete the last entry", "undo", "cancel", "stop", "no", "yes", "futa rekodi ya mwisho", "weka maziwa kwenye orodha yangu", "basi nimeuza mahindi elfu nne", "sold 3 sacks of maize 4500"]) {
    assert.equal(D.parse(text), null, `"${text}" is not a dismissal`);
  }
  assert.equal(D.parse(""), null);
  assert.equal(D.parse(null), null);
  assert.equal(D.parse("close " + "the weather card ".repeat(20)), null, "a long rambling sentence is never a dismissal");
});

test("going back to the orb by itself: only a finished answer, only after a quiet spell, never mid-conversation and never over work the person is in", () => {
  const quiet = { userMode: true, answerShowing: true, workOpen: false, lastActivityAt: 1000 };
  const later = 1000 + D.AUTO_RETURN_MS + 1;
  assert.equal(D.shouldAutoReturn(quiet, later).go, true, "30 seconds of quiet with an answer on the screen goes back to the orb");
  assert.equal(D.shouldAutoReturn(quiet, 1000 + D.AUTO_RETURN_MS - 5000).go, false, "not before the time is up");
  assert.ok(D.shouldAutoReturn(quiet, 1000 + 2000).retryMs > 0, "and it says when to look again");
  for (const busy of [{ assistantSpeaking: true }, { userSpeaking: true }, { focusInField: true }, { pendingConfirmation: true }, { intakeActive: true }]) {
    const decision = D.shouldAutoReturn({ ...quiet, ...busy }, later);
    assert.equal(decision.go, false, `${JSON.stringify(busy)} must hold it off`);
    assert.equal(decision.retryMs, D.AUTO_RETURN_RETRY_MS);
  }
  assert.equal(D.shouldAutoReturn({ ...quiet, answerShowing: false }, later).go, false, "no answer on the screen: nothing to clear");
  const work = D.shouldAutoReturn({ ...quiet, workOpen: true }, later);
  assert.equal(work.go, false, "a map, a function window, a form or navigation is work: never closed by itself");
  assert.equal(work.retryMs, D.AUTO_RETURN_RETRY_MS);
  assert.equal(D.shouldAutoReturn({ ...quiet, userMode: false }, later).go, false, "admin and investor screens are never closed by itself");
  assert.equal(D.shouldAutoReturn(null, later).go, false);
});
