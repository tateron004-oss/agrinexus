"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const tutor = require("../../nexus/tutor/tutor.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Tutor lessons with pictures and videos (4 November 2026). The AI model ends a step with "SHOW: picture=<search>; video=<search>" (or none). That line is never shown or spoken: the planner takes it off, cleans the searches, applies the
// caps (a video at most once every three turns and not on the first turn unless one was asked for, none in a quiz) and sends only { picture, video } and the step number. The page fetches them with its ordinary picture and video search.
const tools = ["documents.create", "lists.create"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
function planner(answers, sessions = tutor.createTutorSessions()) {
  let call = 0; const responded = [];
  const instance = new OpenEndedPlanner({
    model: { plan: async () => { throw new Error("MODEL_REACHED"); }, respond: async request => { responded.push(request); const answer = answers[Math.min(call, answers.length - 1)]; call += 1; return answer; } },
    tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() },
    memory: Object.assign(fakeMemory(), { search: async () => [] }), tutorSessions: sessions
  });
  return { instance, responded, sessions };
}
const ask = (instance, text) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });
const LESSON = "A half is one of two equal parts. If you cut a roti in two, each piece is a half. How many halves make a whole roti?";

test("the SHOW line is taken off the reply: it is never in the answer, the history or anything spoken, and only the cleaned searches go on", async () => {
  const { instance, sessions } = planner([`${LESSON}\nSHOW: picture=fraction circle halves diagram; video=none`]);
  const plan = await ask(instance, "Teach me fractions.");
  assert.doesNotMatch(plan.response, /SHOW|picture=|video=/);
  assert.match(plan.response, /How many halves make a whole roti\?$/);
  assert.deepEqual({ ...plan.tutor.media }, { picture: "fraction circle halves diagram" });
  assert.equal(plan.tutor.step, 1);
  assert.equal(plan.tutor.turn, 1);
  const session = sessions.get("t1", "u1");
  assert.ok(session.turns.every(turn => !/SHOW|picture=|video=/.test(turn.content)), "the history sent back to the model has no SHOW line");
  assert.doesNotMatch(JSON.stringify({ ...plan, tutor: { ...plan.tutor, media: undefined } }), /SHOW|picture=/);
});

test("a reply with no SHOW line, an all-none line, or a garbled one gives a lesson with no media, and the garbled line is still removed", async () => {
  for (const [answer, shownText] of [[LESSON, LESSON], [`${LESSON}\nSHOW: picture=none; video=none`, LESSON], [`${LESSON}\nSHOW: pictures are nice`, LESSON], [`${LESSON} SHOW: picture=none; video=none`, LESSON], [`${LESSON}\n**SHOW:** picture=n/a; video=nothing`, LESSON]]) {
    const { instance } = planner([answer]);
    const plan = await ask(instance, "Teach me fractions.");
    assert.equal(plan.response.endsWith(shownText), true, answer);
    assert.doesNotMatch(plan.response, /SHOW/i, answer);
    assert.equal(plan.tutor.media, undefined, answer);
    assert.equal(plan.tutor.step, 1);
  }
});

test("a reply that is only a SHOW line is a failed reply, not an empty lesson", async () => {
  const { instance, sessions } = planner(["SHOW: picture=fraction diagram; video=none"]);
  await assert.rejects(ask(instance, "Teach me fractions."), /MODEL_REACHED|plan_invalid|safe executable/);
  assert.equal(sessions.get("t1", "u1"), null);
});

test("each search is cleaned to a few plain words; a search the content guard would refuse is dropped and the lesson is kept", () => {
  assert.equal(tutor.sanitiseSearch("  fraction   circle halves diagram  "), "fraction circle halves diagram");
  assert.equal(tutor.sanitiseSearch('"<b>pizza</b> slices!!"'), "pizza slices");
  assert.equal(tutor.sanitiseSearch("tomatoes & cells (labelled)"), "tomatoes cells labelled");
  assert.equal(tutor.sanitiseSearch("a b c d e f g h i j k"), "a b c d e f g h");
  assert.ok(tutor.sanitiseSearch("word ".repeat(30)).length <= 60);
  for (const empty of ["none", "None", "n/a", "nothing", "-", "", "  ", "x", null, undefined]) assert.equal(tutor.sanitiseSearch(empty), "", String(empty));
  for (const guarded of ["porn tutorial", "sports betting tips", "naked pictures"]) assert.equal(tutor.sanitiseSearch(guarded), "", guarded);
});

test("a guarded search never reaches the page, while the lesson text and a clean search on the same line do", async () => {
  const { instance } = planner([`${LESSON}\nSHOW: picture=porn videos; video=none`]);
  const plan = await ask(instance, "Teach me fractions.");
  assert.equal(plan.tutor.media, undefined);
  assert.match(plan.response, /How many halves make a whole roti\?$/);
  const { instance: other } = planner([`${LESSON}\nSHOW: picture=fraction circle; video=sports betting tips`]);
  const second = await ask(other, "Teach me fractions.");
  assert.deepEqual({ ...second.tutor.media }, { picture: "fraction circle" });
});

test("a video is held back on the first turn unless one was asked for, and then comes at most once every three turns; the same picture is not sent twice in a row", async () => {
  const same = `${LESSON}\nSHOW: picture=halves diagram; video=fractions for kids`;
  const { instance } = planner([same, same, same, same, same, same]);
  const first = await ask(instance, "Teach me fractions.");
  assert.deepEqual({ ...first.tutor.media }, { picture: "halves diagram" }, "turn 1: picture only");
  const second = await ask(instance, "A half.");
  assert.deepEqual({ ...second.tutor.media }, { video: "fractions for kids" }, "turn 2: the video, and the same picture is not repeated");
  const third = await ask(instance, "Two halves.");
  assert.equal(third.tutor.media, undefined, "turn 3: no video yet, same picture");
  const fourth = await ask(instance, "Okay.");
  assert.equal(fourth.tutor.media, undefined, "turn 4: still inside the three turns");
  const fifth = await ask(instance, "Yes.");
  assert.deepEqual({ ...fifth.tutor.media }, { video: "fractions for kids" }, "turn 5: another video is allowed");
  assert.deepEqual([first, second, third, fourth, fifth].map(plan => plan.tutor.step), [1, 2, 3, 4, 5]);
});

test("a person who asks for a video on the first turn gets it; a quiz never gets a picture or a video", async () => {
  const video = `${LESSON}\nSHOW: picture=none; video=fractions for kids`;
  const { instance } = planner([video]);
  const asked = await ask(instance, "Teach me fractions with a video.");
  assert.deepEqual({ ...asked.tutor.media }, { video: "fractions for kids" });
  const { instance: quiz } = planner([`Which city is the capital of Kenya?\nSHOW: picture=kenya capital map; video=nairobi city`]);
  const quizzed = await ask(quiz, "Quiz me on world capitals.");
  assert.equal(quizzed.tutor.media, undefined);
  assert.doesNotMatch(quizzed.response, /SHOW/);
});

test("the tutor rules ask for the SHOW line, in the exact form the parser reads, and say it is never mentioned to the learner", () => {
  const goal = tutor.tutorGoal({ session: { kind: "learn", subject: "fractions", lang: "en" }, said: "Teach me fractions.", first: true });
  assert.match(goal, /SHOW: picture=<2 to 6 words to search for a simple labelled diagram or photo that helps THIS step, or none>; video=<2 to 6 words to search for a short teaching video, or none>/);
  assert.match(goal, /whenever this step is about something that can be drawn or photographed[^.]*add a picture/);
  assert.match(goal, /Write SHOW: picture=none; video=none only when the step is just a question/);
  assert.match(goal, /Never mention this line to the learner/);
  const parsed = tutor.splitShowLine("Step.\nSHOW: picture=a b c; video=d e f");
  assert.deepEqual({ ...parsed }, { text: "Step.", picture: "a b c", video: "d e f" });
});

// ---- the page ----
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const from = app.indexOf("function kyroTutorSafeUrl(value) {");
const to = app.indexOf("function kyroDrawTutorMedia(holder, items, tutor) {");
assert.ok(from > 0 && to > from, "the media helpers are in app.js");
const page = {};
vm.runInNewContext(`${app.slice(from, to)}\nthis.items = kyroTutorMediaItems; this.safe = kyroTutorSafeUrl;`, page);
const result = (key, list) => ({ render: { data: { [key]: list } } });

test("only https addresses are used, up to three pictures and one video, whatever shape the search result has", () => {
  assert.equal(page.safe("https://example.org/a.png"), "https://example.org/a.png");
  for (const bad of ["http://example.org/a.png", "javascript:alert(1)", "data:text/html,x", "//example.org/a.png", "https://exa mple.org", 'https://x.org/"onload=1', "", null, undefined, 12]) assert.equal(page.safe(bad), "", String(bad));
  const pictures = page.items(result("images", [{ url: "https://a/1.png", title: "One" }, { url: "http://a/2.png" }, { url: "https://a/3.png" }, { url: "https://a/4.png" }, { url: "https://a/5.png" }, null, "x"]), "picture");
  assert.deepEqual(Array.from(pictures, picture => picture.url), ["https://a/1.png", "https://a/3.png", "https://a/4.png"]);
  assert.equal(pictures[0].title, "One");
  const videos = page.items(result("videos", [{ title: "No file" }, { embedUrl: "javascript:x" }, { embedUrl: "https://www.youtube.com/embed/abc", title: "Halves", thumbnailUrl: "https://i/t.jpg" }, { embedUrl: "https://www.youtube.com/embed/def" }]), "video");
  assert.equal(videos.length, 1);
  assert.equal(videos[0].embedUrl, "https://www.youtube.com/embed/abc");
  assert.equal(videos[0].thumbnailUrl, "https://i/t.jpg");
  const file = page.items(result("videos", [{ videoUrl: "https://a/v.webm", mimeType: "video/webm", thumbnailUrl: "http://a/t.jpg" }]), "video");
  assert.deepEqual({ ...file[0] }, { title: "", embedUrl: "", videoUrl: "https://a/v.webm", thumbnailUrl: "", mimeType: "video/webm" });
  for (const nothing of [null, undefined, {}, { render: null }, { render: { data: null } }, result("images", "nope"), result("videos", [])]) assert.deepEqual(Array.from(page.items(nothing, "picture")), []);
});

test("the lesson card shows the step, holds a media area above the answer box (not in low-bandwidth mode), fills it when the search comes back, and drops what arrives after the learner moved on", () => {
  assert.match(app, /const stepNumber = Number\(tutor && tutor\.step\) \|\| 0;\s+if \(stepNumber >= 1 && !screen\.querySelector\("\[data-kyro-tutor-step\]"\)\) \{[\s\S]*?sw \? `Hatua ya \$\{stepNumber\}` : `Step \$\{stepNumber\}`/);
  assert.match(app, /const holder = tutor && tutor\.media && !nexusLowBandwidthMode\s+\? kyroMake\("div", \{ "data-kyro-tutor-media": "true"/);
  assert.match(app, /form\.append\(box, row\); screen\.append\(form\);\s+if \(holder\) \{\s+screen\.insertBefore\(holder, form\);\s+if \(cachedMedia\) kyroDrawTutorMedia\(holder, cachedMedia, tutor\);\s+else void kyroLoadTutorMedia\(holder, tutor\);\s+\}/);
  const loader = app.slice(app.indexOf("async function kyroLoadTutorMedia(holder, tutor) {"), app.indexOf("async function kyroLoadTutorMedia(holder, tutor) {") + 1800);
  assert.match(loader, /const stillHere = \(\) => holder\.isConnected && kyroTutorOpen\(\) && Boolean\(kyroTutorLast && kyroTutorLast\.tutor && kyroTutorLast\.tutor\.step === step\);/);
  assert.match(loader, /kyroSilentTurn\(`Show me pictures of \$\{media\.picture\}`\)[\s\S]*?if \(!stillHere\(\)\) return;[\s\S]*?kyroSilentTurn\(`Show me videos about \$\{media\.video\}`\)[\s\S]*?if \(!stillHere\(\)\) return;/);
  assert.match(loader, /catch \{ items\.pictures = \[\]; \}/);
  assert.match(loader, /catch \{ items\.videos = \[\]; \}/);
  assert.match(loader, /\} catch \{ \/\* the lesson is on the screen without them \*\/ \}\s*\}/);
  const draw = app.slice(app.indexOf("function kyroDrawTutorMedia(holder, items, tutor) {"), app.indexOf("async function kyroLoadTutorMedia(holder, tutor) {"));
  assert.match(draw, /loading: "lazy", referrerpolicy: "no-referrer"/);
  assert.match(draw, /alt: picture\.title \|\| "Picture"/);
  assert.match(draw, /void handleNexusUnifiedBrainRuntimeCommand\(`Show me pictures of \$\{tutor\.media\.picture\}`/);
  assert.match(draw, /kyroMake\("video", \{ controls: "true", preload: "none"/);
  assert.match(draw, /if \(!holder \|\| !holder\.isConnected\) return false;/);
});

test("the lesson that comes back after a picture or video is closed uses the media already fetched, and the on-demand buttons and 'show me a picture' stay", () => {
  assert.match(app, /kyroTutorLast = \{ response: String\(message \|\| ""\), tutor: \{ active: true, subject: String\(tutor\.subject \|\| ""\), step: Number\(tutor\.step\) \|\| 0, media: tutor\.media \|\| null \}, items: null \};/);
  assert.match(app, /if \(shown\) kyroAddTutorBox\(kyroTutorLast\.tutor, kyroTutorLast\.items \|\| null\);/);
  assert.match(app, /demo\(sw \? "Onyesha picha" : "Show a picture", `Show me pictures of \$\{subject\}`\);\s+demo\(sw \? "Onyesha video" : "Show a video", `Show me videos about \$\{subject\}`\);/);
  assert.match(app, /const tutorDemo = kyroTutorDemoCommand\(said\);/);
});

test("a lesson with a subject is never three steps without a picture: the subject's own diagram is added from the second step when the model asked for none, and not in a quiz or for homework", () => {
  const session = { kind: "learn", subject: "fractions", lang: "en" };
  const none = { picture: "none", video: "none" };
  assert.equal(tutor.chooseMedia(none, session, { said: "I am in third grade", turn: 1 }), null, "the first step is the model's own choice");
  assert.deepEqual({ ...tutor.chooseMedia(none, session, { said: "ok", turn: 2 }) }, { picture: "fractions diagram" });
  assert.equal(tutor.chooseMedia(none, session, { said: "ok", turn: 3 }), null);
  assert.equal(tutor.chooseMedia(none, session, { said: "ok", turn: 4 }), null);
  assert.deepEqual({ ...tutor.chooseMedia(none, session, { said: "ok", turn: 5 }) }, { picture: "fractions examples" }, "again after three steps, a different picture");
  assert.deepEqual({ ...tutor.chooseMedia({ picture: "pie fraction parts", video: "none" }, { kind: "learn", subject: "fractions" }, { said: "ok", turn: 2 }) }, { picture: "pie fraction parts" }, "what the model asked for wins");
  assert.equal(tutor.chooseMedia(none, { kind: "quiz", subject: "fractions" }, { said: "ok", turn: 2 }), null);
  assert.equal(tutor.chooseMedia(none, { kind: "homework", subject: "fractions" }, { said: "ok", turn: 2 }), null);
  assert.equal(tutor.chooseMedia(none, { kind: "tutor", subject: "", lang: "en" }, { said: "ok", turn: 2 }), null, "no subject yet, nothing to draw");
});
