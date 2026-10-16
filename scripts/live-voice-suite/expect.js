"use strict";
// Judges what the page did (the state the rig reports) against what a case expects. Pure: no browser, so it is tested on its own. It is written as one self-contained factory because the same source is also
// sent into the page (the cases are judged where they run).
//
// An expectation may say:
//   screen: "list" | ["list","text"]   a screen of that kind is showing        app: "health"      the application screen of that id
//   text: "regex"                       the words on the screen match           notText: "regex"   they must not
//   keep: true                          the screen stays until closed           buttons: ["regex"] each of these is a button on the screen
//   fields: ["name"]                    the screen has these fields             images: 1          at least this many pictures      frames: 1   videos       links: 1   job/listing links
//   download: true                      a Download button is on the screen
//   intake: true | false | "regex"      a form (intake) is on the screen / not / its words match
//   orb: true                           nothing is on the screen: the orb is back
//   said: "regex"                       what the model said aloud matches (any of its lines)     notSaid: "regex"
//   player: { active: true, state: "playing" }   the music/video player      model: true   the model must have answered (spoken)
//   tool: "regex" | typed: "regex"      the model called a tool matching, or the page answered a typed route matching      section: "regex"   the page section
//   heard: "regex"                      the speech-to-text wrote this: reported as a WARNING only (it is not the page's fault)
// By default the model must not say it cannot open or see something (REFUSAL) over a screen that did open, unless the case sets allowRefusal.
function makeEvaluator() {
  const REFUSAL = /\b(?:i\s+(?:can(?:'|’)?t|cannot|can not|am not able|am unable|don(?:'|’)?t have (?:access|a way))|i(?:'|’)m\s+(?:not able|unable))\b[^.]{0,60}\b(?:open|see|show|pull up|access|display|view|find|look)\b|\bopen (?:it|that|them|the [a-z ]{3,30}) (?:on|from) your (?:device|screen|phone)\b|\bplease open your\b/i;
  const asRegex = value => (value instanceof RegExp ? value : new RegExp(String(value), "i"));
  const list = value => (Array.isArray(value) ? value : value === undefined || value === null ? [] : [value]);

  function evaluate(expect = {}, state = {}, options = {}) {
    const failures = []; const warnings = [];
    const screens = state.screens || []; const top = screens[screens.length - 1] || null;
    const wanted = list(expect.screen);
    const said = (state.modelSaid || []).concat(state.pageLines || []);
    const check = (ok, message) => { if (!ok) failures.push(message); };

    if (expect.orb) check(!screens.length && !state.intake, `expected the orb (nothing on screen) but ${screens.length ? "a " + top.kind + " screen" : "a form"} is showing`);
    if (wanted.length) check(Boolean(top) && wanted.includes(top.kind), `expected a ${wanted.join(" or ")} screen, found ${top ? top.kind + (top.app ? ":" + top.app : "") : "none"}`);
    if (expect.app) check(Boolean(top) && top.app === expect.app, `expected the ${expect.app} application screen, found ${top ? (top.app || top.kind) : "none"}`);
    if (expect.text !== undefined) check(Boolean(top) && asRegex(expect.text).test(top.text), `screen words did not match ${asRegex(expect.text)}: "${top ? top.text.slice(0, 140) : "no screen"}"`);
    if (expect.notText !== undefined && top) check(!asRegex(expect.notText).test(top.text), `screen words matched what must not be there ${asRegex(expect.notText)}`);
    if (expect.keep !== undefined) check(Boolean(top) && top.keep === Boolean(expect.keep), `expected the screen ${expect.keep ? "to stay until closed" : "to go back by itself"}`);
    for (const label of list(expect.buttons)) check(Boolean(top) && top.buttons.some(button => asRegex(label).test(button)), `no button matching ${asRegex(label)} (buttons: ${top ? top.buttons.slice(0, 8).join(" | ") : "no screen"})`);
    for (const name of list(expect.fields)) check(Boolean(top) && top.fields.includes(name), `no field named ${name}`);
    if (expect.images !== undefined) check(Boolean(top) && top.images >= expect.images, `expected at least ${expect.images} picture(s), found ${top ? top.images : 0}`);
    if (expect.frames !== undefined) check(Boolean(top) && top.frames >= expect.frames, `expected at least ${expect.frames} video(s), found ${top ? top.frames : 0}`);
    if (expect.links !== undefined) check(Boolean(top) && top.links >= expect.links, `expected at least ${expect.links} link(s), found ${top ? top.links : 0}`);
    if (expect.download !== undefined) check(Boolean(top) && top.hasDownload === Boolean(expect.download), `expected a Download button ${expect.download ? "on" : "not on"} the screen`);
    if (expect.intake !== undefined) {
      if (expect.intake === true) check(Boolean(state.intake), "expected a form (questions) to be on the screen");
      else if (expect.intake === false) check(!state.intake, `a form is still on the screen: "${String(state.intake).slice(0, 80)}"`);
      else check(asRegex(expect.intake).test(state.intake || ""), `the form's words did not match ${asRegex(expect.intake)}: "${String(state.intake || "none").slice(0, 100)}"`);
    }
    if (expect.said !== undefined) check(said.some(line => asRegex(expect.said).test(line)), `nothing said aloud matched ${asRegex(expect.said)} (said: ${said.join(" / ").slice(0, 160) || "nothing"})`);
    if (expect.notSaid !== undefined) check(!said.some(line => asRegex(expect.notSaid).test(line)), `something said aloud matched what must not be said ${asRegex(expect.notSaid)}`);
    if (expect.model) check(said.length > 0, "nothing was said aloud at all");
    if (expect.tool !== undefined) check((state.tools || []).some(tool => asRegex(expect.tool).test(tool)), `the model called no tool matching ${asRegex(expect.tool)} (called: ${(state.tools || []).join(", ") || "none"})`);
    if (expect.typed !== undefined) check((state.typed || []).some(route => asRegex(expect.typed).test(route)), `the page answered no typed route matching ${asRegex(expect.typed)} (answered: ${(state.typed || []).join(" / ") || "none"})`);
    if (expect.section !== undefined) check(asRegex(expect.section).test(state.section || ""), `expected the page section ${asRegex(expect.section)}, it is "${state.section || "none"}"`);
    if (expect.player) {
      const player = state.player || {};
      if (expect.player.active !== undefined) check(Boolean(player.active) === Boolean(expect.player.active), `expected the player ${expect.player.active ? "to be playing something" : "to be off"} (state: ${player.state || "none"}, ${player.status || ""})`);
      if (expect.player.state !== undefined) check(asRegex(expect.player.state).test(player.state || ""), `expected the player state ${asRegex(expect.player.state)}, it is "${player.state || "none"}"`);
      if (expect.player.frames !== undefined) check((player.frames || 0) >= expect.player.frames, "expected a video frame in the player");
    }
    // the model must not say it cannot do what the page just did
    if (!expect.allowRefusal && !expect.orb) {
      const refusal = (state.modelSaid || []).find(line => REFUSAL.test(line));
      if (refusal) failures.push(`the voice said it could not do it: "${refusal.slice(0, 120)}"`);
    }
    if (expect.heard !== undefined && !(state.heard || []).some(line => asRegex(expect.heard).test(line))) warnings.push(`the speech-to-text wrote "${(state.heard || [])[0] || "nothing"}" (wanted ${asRegex(expect.heard)})`);
    if (options.requireVoiceActive && state.voiceActive === false) failures.push("the live voice session is no longer connected");
    return { pass: failures.length === 0, failures, warnings };
  }
  return { evaluate, REFUSAL };
}

const { evaluate, REFUSAL } = makeEvaluator();
module.exports = { evaluate, REFUSAL, makeEvaluator };
