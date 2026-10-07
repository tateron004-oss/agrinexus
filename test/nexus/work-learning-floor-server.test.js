"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// The work-and-learning floor on a real server with no AI key and no database (so the planner is not there): the voice tool route and the older command route give the same honest
// answers, a practice lesson carries over from one request to the next, and nothing a lesson, a job question or an interview practice does touches an application, a course, a
// certificate or a candidate stage. State is read back through the app's own API.

const root = path.resolve(__dirname, "..", "..");
const port = 16010;
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "work-floor-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie = ""; let counter = 0;
async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function call(method, route, body) {
  const res = await fetch(`${base}${route}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}), "x-forwarded-for": "10.16.0.1" }, body: body === undefined ? undefined : JSON.stringify(body) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  const set = (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
  return { status: res.status, json, text, setCookie: set };
}
const voice = async (command, language = "en") => {
  const r = await call("POST", "/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `wf-${(counter += 1)}`, arguments: { command, language }, language });
  assert.equal(r.status, 200, command);
  return { text: r.json?.response || "", intent: r.json?.intent || "", raw: r.json };
};
const agent = async (command, language = "en") => {
  const r = await call("POST", "/api/agent/command", { command, language, conversational: true, inputMode: "voice", outputMode: "voice" });
  assert.equal(r.status, 200, command);
  const result = r.json?.commandResult || {};
  return { text: result.response || "", intent: result.intent || "", raw: r.json };
};
const snapshot = async () => {
  const state = (await call("GET", "/api/state")).json;
  const profile = state.profile || {};
  return { certificates: (profile.certificates || []).length, enrollments: (profile.enrollments || []).length, completed: (profile.completedCourses || []).length, applications: JSON.stringify(profile.applications || []), stage: profile.candidateStage || "", readiness: profile.readiness };
};

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, stdio: "ignore", windowsHide: true, env: { ...process.env, PORT: String(port), SESSION_SECRET: "work-floor-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" } });
  await waitFor(`${base}/api/healthz`);
  const login = await call("POST", "/api/login", { email: "user@agrinexus.org", password: "User2026!" });
  assert.equal(login.status, 200);
  cookie = login.setCookie;
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("jobs and training questions get the plain truth, on the voice route and the command route, with nothing applied for", async () => {
  const before = await snapshot();
  for (const ask of [voice, agent]) {
    for (const phrase of ["find jobs near me", "show me available jobs", "i need work. any job"]) {
      const reply = await ask(phrase);
      assert.match(reply.text, /I can't search live job listings for your area, so I can't tell you what is open near you today/, `${phrase} -> ${reply.text.slice(0, 160)}`);
      assert.match(reply.text, /roles loaded on the platform: [A-Z][\w ]+/, phrase);
      assert.match(reply.text, /I have not checked them with any employer/, phrase);
      assert.doesNotMatch(reply.text, /map from|submitted|applied|verify profile|Generated supervised/i, phrase);
      assert.equal(reply.intent, "conversation.honest_job_search", phrase);
    }
    const training = await ask("training near me");
    assert.match(training.text, /I don't have a list of training places or apprenticeships near you/);
    assert.doesNotMatch(training.text, /map from|live-ready|certificate network/i);
  }
  assert.deepEqual(await snapshot(), before, "a job question changes no application, stage, course or certificate");
});

test("in Kiswahili the same questions are answered in Kiswahili", async () => {
  for (const ask of [voice, agent]) {
    const jobs = await ask("nitafutie kazi karibu nami", "sw");
    assert.match(jobs.text, /^Siwezi kutafuta orodha za kazi za moja kwa moja za eneo lako/, jobs.text.slice(0, 200));
    assert.match(jobs.text, /Sijazihakiki na mwajiri yeyote/);
    assert.doesNotMatch(jobs.text, /Usajili wa afya|remote health|\[SW\]/);
    const training = await ask("kuna mafunzo ya ufundi karibu nami", "sw");
    assert.match(training.text, /^Sina orodha ya vituo vya mafunzo/);
  }
});

test("a reading lesson runs across requests: start, answer, next, again, stop, and carry on later", async () => {
  const before = await snapshot();
  const start = await voice("teach me to read");
  assert.equal(start.intent, "conversation.practice_lesson");
  assert.match(start.text, /short practice lesson inside Kyro\. It is not a certified course/);
  assert.match(start.text, /The letter A\. A is for apple\./);
  assert.match((await voice("a")).text, /^Yes, that's right\. A is for apple\./);
  assert.match((await agent("next")).text, /^The letter B\. B is for ball/, "the command route carries the same lesson on");
  assert.match((await voice("again")).text, /^The letter B\./);
  assert.match((await voice("dog")).text, /^Not quite\./);
  assert.match((await voice("stop")).text, /^Okay, we have stopped/);
  const later = await voice("teach me letters");
  assert.match(later.text, /Welcome back\. Last time you finished 1 of 26 steps/);
  assert.match(later.text, /The letter B\./);
  assert.deepEqual(await snapshot(), before, "a lesson enrols no one, completes no course and issues no certificate");
  const history = await call("GET", "/api/state");
  assert.equal((history.json.profile?.certificates || []).length, 0);
});

test("maths and Kiswahili lessons, and what is remembered is on the person's own account", async () => {
  assert.match((await voice("teach me maths")).text, /Count with me, from 1 to 5/);
  assert.match((await voice("4")).text, /^Yes, that's right\. After 3 comes 4\./);
  assert.match((await voice("stop")).text, /^Okay, we have stopped/);
  const swahili = await voice("nifundishe herufi kutoka mwanzo", "sw");
  assert.match(swahili.text, /^Hili ni somo fupi la mazoezi ndani ya Kyro\. Si kozi rasmi yenye cheti\./);
  assert.match(swahili.text, /Herufi A\. A kama asali/);
  assert.equal(swahili.raw.language, "sw");
  assert.match((await voice("a", "sw")).text, /^Ndiyo, sawa kabisa\./);
  assert.match((await voice("endelea", "sw")).text, /^Herufi B\./);
  assert.match((await voice("acha", "sw")).text, /^Sawa, tumesimama/);
  const exported = await call("POST", "/api/account/export", {});
  assert.equal(exported.status, 200);
  const file = await call("GET", exported.json.downloadPath);
  assert.match(file.text, /floorPractice/, "the person's lesson progress is part of their data export");
});

test("a lesson is not swallowed when the person asks something else; the lesson waits", async () => {
  await voice("teach me letters");
  const other = await voice("what time is it");
  assert.doesNotMatch(other.text, /Yes, that's right|Not quite|The letter/);
  assert.match((await voice("next")).text, /^The letter|Say 'next'|Welcome|The answer/, "the lesson is still there");
  await voice("stop");
});

test("a practice interview: one question at a time, one tip, no scores, and nothing is invented", async () => {
  const before = await snapshot();
  for (const phrase of ["ask me interview questions", "practice interview", "help me prepare for an interview"]) {
    const start = await voice(phrase);
    assert.equal(start.intent, "conversation.practice_interview", phrase);
    assert.match(start.text, /Question 1 of 6: Tell me about yourself\.$/, phrase);
    assert.doesNotMatch(start.text, /Generated supervised AI recommendation|tell me the main goal/i, phrase);
    await voice("stop");
  }
  await voice("practice interview");
  const second = await voice("I am hardworking and I like to learn new things every day");
  assert.match(second.text, /^Thank you for answering\./);
  assert.match(second.text, /Question 2 of 6: Why do you want this job\?$/);
  assert.match((await agent("skip")).text, /Question 3 of 6/);
  assert.match((await voice("stop")).text, /^Okay, we have stopped/);
  const profileAfter = JSON.stringify((await call("GET", "/api/state")).json.profile?.userDisplayNames || {});
  assert.doesNotMatch(profileAfter, /hardworking/i, "an interview answer is not stored as the person's name");
  assert.deepEqual(await snapshot(), before);

  const sw = await voice("nisaidie kujiandaa kwa mahojiano ya kazi", "sw");
  assert.match(sw.text, /Swali 1 kati ya 6: Niambie kuhusu wewe mwenyewe\.$/);
  await voice("acha", "sw");
});

test("'schedule interview' never shows a past shift as the next one, and books nothing", async () => {
  for (const ask of [voice, agent]) {
    const reply = await ask("schedule interview");
    assert.match(reply.text, /I can't book an interview with an employer from here, and I have no interview saved for you/);
    assert.doesNotMatch(reply.text, /May 9|2026|Field Operations Agent at/);
  }
  const appointment = await voice("when is my next appointment");
  assert.doesNotMatch(appointment.text, /next workforce schedule item is Field Operations Agent at May/, appointment.text);
});

test("a child who works or wants to gets a protective answer and no workflow is staged", async () => {
  const before = await snapshot();
  for (const ask of [voice, agent]) {
    for (const phrase of ["I am 15 and I want to work", "my daughter is 14 and works as a house girl"]) {
      const reply = await ask(phrase);
      assert.equal(reply.intent, "conversation.safeguarding.child_work", phrase);
      assert.match(reply.text, /belongs in school, not at work/);
      assert.match(reply.text, /trusted teacher[\s\S]*children's officer/);
      assert.doesNotMatch(reply.text, /verify profile|schedule shift|learning hub|Say or type "yes"|selected/i);
    }
  }
  const swahili = await voice("mtoto wangu wa miaka 14 anafanya kazi ya nyumbani", "sw");
  assert.match(swahili.text, /anapaswa kuwa shuleni, si kazini/);
  const state = await call("GET", "/api/state");
  assert.equal(state.json.profile?.agentPendingAction ?? null, null, "nothing is waiting for a yes");
  assert.deepEqual(await snapshot(), before);
});

test("a CV asked for on a path that cannot take it is pointed at the app, never claimed", async () => {
  const reply = await voice("make my CV");
  assert.match(reply.text, /I have not made a CV yet/);
  const swahili = await voice("nataka CV", "sw");
  assert.match(swahili.text, /Bado sijatengeneza CV/);
  assert.doesNotMatch(swahili.text, /Usajili wa afya|remote health/);
});

test("the learning tool (the model's own route) serves the same lessons, and leaves job questions to its own job-search source", async () => {
  const tool = async (command, extraCookie) => {
    const res = await fetch(`${base}/api/nexus/openai-native/tool`, { method: "POST", headers: { "content-type": "application/json", cookie: extraCookie || cookie, "x-forwarded-for": "10.16.0.1" }, body: JSON.stringify({ name: "nexus_workforce_learning", arguments: { command } }) });
    return res.json();
  };
  const lesson = await tool("teach me to read");
  assert.equal(lesson.capability, "work-and-learning");
  assert.equal(lesson.intent, "conversation.practice_lesson");
  assert.match(lesson.response, /The letter [A-Z]\. [A-Z] is for/);
  assert.equal(lesson.executionVerified, false);
  assert.match((await tool("stop")).response, /^Okay, we have stopped/);
  const jobs = await tool("Find me a job");
  assert.equal(jobs.capability, "workforce-jobs", "the real job-search source still answers job questions on its own tool");
  const interviewHelp = await tool("Explain how to prepare for a job interview.");
  assert.equal(interviewHelp.capability, "learning-training", "an explanation is not turned into a practice");
});

test("one person's lesson is not another person's: a different account is not in the middle of anything", async () => {
  await voice("teach me letters");
  const login = await call("POST", "/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
  assert.equal(login.status, 200);
  const adminCookie = login.setCookie;
  const res = await fetch(`${base}/api/voice/realtime/tool`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie, "x-forwarded-for": "10.16.0.9" }, body: JSON.stringify({ name: "nexus_general_conversation", correlationId: "wf-admin-1", arguments: { command: "next", language: "en" }, language: "en" }) });
  const body = await res.json();
  assert.doesNotMatch(String(body.response || ""), /The letter|Yes, that's right|Not quite/, "the other account is not in a lesson");
  const mine = await voice("a");
  assert.match(mine.text, /^Yes, that's right|^Not quite|^The answer is/, "the first account's lesson is still there");
  await voice("stop");
});

test("a floor answer goes through the same layers as every other answer: every stage of the activation trace is recorded", async () => {
  for (const phrase of ["find jobs near me", "teach me letters", "practice interview", "I am 15 and I want to work"]) {
    const reply = await agent(phrase);
    const trace = reply.raw?.nexusResponse?.activationTrace;
    assert.ok(trace, `${phrase} should carry an activation trace`);
    for (const stage of trace.sharedLayerSequence) assert.notEqual(stage.active, false, `${phrase}: stage ${stage.stage} (${stage.detail})`);
    assert.equal(reply.raw.nexusResponse.response, reply.text, "the spoken response and the command result agree");
    await voice("stop");
  }
});

test("ordinary requests are not caught by the floor", async () => {
  for (const phrase of ["Add milk to my shopping list", "how much does paracetamol cost", "I need a day off from my job", "teach me how to use a smartphone"]) {
    const reply = await voice(phrase);
    assert.doesNotMatch(reply.text, /practice lesson|I can't search live job listings|Question 1 of 6|belongs in school/, `${phrase} -> ${reply.text.slice(0, 120)}`);
  }
});
