"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const JSZip = require("jszip");
const { PDFParse } = require("pdf-parse");
const design = require("../../server/providers/design-render.js");
const wording = require("../../nexus/knowledge/handout-wording.js");
const { handoutRequest, handoutTemplate } = require("../../nexus/knowledge/handout-templates.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const { fakeMemory } = require("./farmwork-fake.js");
const fs = require("node:fs");
const path = require("node:path");

// Phase 2 of the small-business assistant team (owner, 5 November 2026): "write social posts, emails, ads, flyers, and website content". Flyers, newsletters, posters, brochures, invitations and promotional emails already existed.
// A social media post, an ad and a web page are the same kind of thing: a short fixed layout with only the person's own facts in it and a [bracket] for the rest, made as a real Word / PDF / web page file.

const catalogTools = ["business.manage", "business.query", "documents.create", "lists.create"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
function planner({ respond, calls = [] } = {}) {
  return new OpenEndedPlanner({
    model: { plan: async () => { throw new Error("MODEL_REACHED"); }, respond: async request => { calls.push(request); return respond ? respond(request) : null; } },
    businessWorkspaces: { count: async () => 0 },
    tools: { list: async () => catalogTools },
    applications: { list: () => defaultApplicationManifests() },
    memory: Object.assign(fakeMemory(), { search: async () => [] })
  });
}
const ask = (instance, text) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone: "America/Chicago" } });
const input = plan => plan.steps[0].input;
const pdfText = async buffer => { const parser = new PDFParse({ data: buffer }); try { return (await parser.getText()).text; } finally { await parser.destroy().catch(() => {}); } };
const squash = text => String(text).replace(/\s+/g, " ");

test("the new kinds are understood from everyday words, and the old ones still are", () => {
  const kindOf = say => handoutRequest(say)?.kind || null;
  for (const [say, kind] of [
    ["Write a Facebook post for my salon opening on Saturday", "social"], ["Make an Instagram post for my bake sale", "social"], ["Create a social media post about our sale", "social"], ["Write a caption for my new menu", "social"],
    ["Draft a LinkedIn post for my business", "social"], ["Make an ad for my bakery", "ad"], ["Write an advertisement for my barber shop", "ad"], ["Create a short advert for the market stall", "ad"],
    ["Write the website page for my shop", "webpage"], ["Create website content for my catering business", "webpage"], ["Make a landing page for my salon", "webpage"], ["Write a web page for my farm stand", "webpage"],
    ["Make me a flyer for my bake sale", "flyer"], ["Create a newsletter for the church", "newsletter"], ["Write an invitation to my party", "invitation"], ["Make a promotional email for my sale", "email"], ["Make a poster for the clinic day", "poster"]
  ]) assert.equal(kindOf(say), kind, say);
  for (const say of ["Add a customer named Grace", "What is the weather", "Make a plan for my farm", "Write a letter to the landlord", "I added a post to the fence", "Make me a sandwich"]) assert.equal(handoutRequest(say), null, say);
  assert.equal(handoutRequest("Write a Facebook post for my salon opening on Saturday").subject, "salon opening");
  assert.equal(handoutRequest("Write a Facebook post for my salon opening on Saturday").when, "Saturday");
  assert.equal(handoutRequest("Make an ad for my bakery").subject, "bakery");
});

test("each new kind is a short fixed layout with a [bracket] for every detail not given, and nothing invented", () => {
  const post = handoutTemplate({ kind: "social", subject: "salon opening", when: "Saturday" }).content;
  assert.match(post, /^SALON OPENING\n\n\[one friendly sentence telling people what you are sharing\]\n\nWhen: Saturday\nWhere: \[the place\]\nWhat: \[what is happening, or what is for sale\]\nCost: \[the price, or free\]\n\nMessage us: \[name and phone number\]\n\n\[a hashtag people would search for\] \[a second hashtag\]/);
  assert.equal(handoutTemplate({ kind: "social", subject: "salon opening" }).title, "Salon Opening Social Media Post");
  const ad = handoutTemplate({ kind: "ad", subject: "bakery" });
  assert.equal(ad.title, "Bakery Ad"); assert.match(ad.content, /^BAKERY\n\n\[one clear line about what you offer and who it is for\]\n\nWhat: .*\nPrice: .*\nWhen: .*\nWhere: .*\n\nCall or visit: \[name and phone number\]/);
  const page = handoutTemplate({ kind: "webpage", subject: "Mama Joy Catering" });
  assert.equal(page.title, "Mama Joy Catering Web Page");
  for (const heading of ["About us", "What we offer", "Hours", "Find us", "Contact us"]) assert.ok(page.content.includes(`\n${heading}\n[`), heading);
  assert.match(page.content, /Made by Kyro from what you said\. Fill in each \[bracket\]/);
  for (const text of [post, ad.content, page.content]) assert.doesNotMatch(text, /best|amazing|delicious|fresh|award|guarantee|\$\d/i, "no claim, price or adjective the person did not say");
});

test("the designs: a post is laid out as a poster, an ad as a flyer and a web page as a brochure", () => {
  assert.equal(wording.designFor("social"), "poster");
  assert.equal(wording.designFor("ad"), "flyer");
  assert.equal(wording.designFor("webpage"), "brochure");
  assert.equal(wording.handoutTail("Write a Facebook post for my salon opening on Saturday at ten at 5 Moi Avenue"), "for my salon opening on Saturday at ten at 5 Moi Avenue");
  assert.equal(wording.handoutTail("Make an ad for my bakery"), "for my bakery");
});

test("the planner makes them as real designed documents, with no model call when only a subject and a day were given", async () => {
  const calls = [];
  const post = await ask(planner({ calls }), "Write a Facebook post for my salon opening on Saturday.");
  assert.equal(calls.length, 0);
  assert.deepEqual({ title: input(post).title, design: input(post).design, format: input(post).format, toolId: post.steps[0].toolId }, { title: "Salon Opening Social Media Post", design: "poster", format: "docx", toolId: "documents.create" });
  const ad = await ask(planner({ calls }), "Make an ad for my bakery as a PDF.");
  assert.deepEqual({ design: input(ad).design, format: input(ad).format }, { design: "flyer", format: "pdf" });
  const page = await ask(planner({ calls }), "Write the website page for my catering business.");
  assert.deepEqual({ design: input(page).design, title: input(page).title }, { design: "brochure", title: "Catering Business Web Page" });
  assert.equal(calls.length, 0);
});

test("with details given, only the person's own facts are put in; the model cannot add a place, a price or a claim", async () => {
  const say = "Write a Facebook post for my salon opening on Saturday at ten at 5 Moi Avenue, haircuts cost 500 shillings, call Grace on 0712345678.";
  const honest = await ask(planner({ respond: async () => JSON.stringify({ headline: "Salon Opening", subhead: "Come and see us", when: "Saturday at ten", where: "5 Moi Avenue", what: "haircuts", cost: "500 shillings", contact: "call Grace on 0712345678", points: [] }) }), say);
  assert.match(input(honest).content, /When: Saturday at ten\nWhere: 5 Moi Avenue\nWhat: haircuts\nCost: 500 shillings\n\nMessage us: call Grace on 0712345678/);
  assert.match(input(honest).content, /SALON OPENING\n\nCome and see us\n\nWhen: Saturday at ten/);
  assert.equal(input(honest).design, "poster");
  const invented = await ask(planner({ respond: async () => JSON.stringify({ headline: "Salon Opening", when: "Saturday at 10 am", where: "Grace Plaza", what: "the best haircuts in town", cost: "$5", contact: "555 1234", subhead: "Amazing deals", points: ["free tea"] }) }), say);
  assert.doesNotMatch(input(invented).content, /Grace Plaza|best haircuts|\$5|555 1234|Amazing|free tea|10 am/);
  const failed = await ask(planner({ respond: async () => { throw new Error("model down"); } }), say);
  assert.match(input(failed).content, /\[the place\]/, "a failed model gives the fixed layout");
  const web = await ask(planner({ respond: async () => JSON.stringify({ headline: "Mama Joy Catering", subhead: "We cook for weddings and funerals", when: "Monday to Saturday 8 to 6", where: "", what: "", cost: "", contact: "call 0712345678", points: ["weddings", "funerals"] }) }),
    "Write the website page for Mama Joy Catering, we cook for weddings and funerals, open Monday to Saturday 8 to 6, call 0712345678");
  assert.match(input(web).content, /About us\nWe cook for weddings and funerals/);
  assert.match(input(web).content, /What we offer\n- weddings\n- funerals/);
  assert.match(input(web).content, /Hours\nMonday to Saturday 8 to 6/);
  assert.match(input(web).content, /Contact us\ncall 0712345678/);
  assert.match(input(web).content, /Find us\n\[the place, or the web page\]/, "no address was given: left as a bracket");
});

test("they are made as real Word, PDF and web page files", async () => {
  const post = handoutTemplate({ kind: "social", subject: "salon opening", when: "Saturday" });
  const pdf = squash(await pdfText(await design.renderDesignPdf("poster", post.title, post.content)));
  assert.ok(pdf.includes("SALON OPENING") && pdf.includes("Saturday"));
  const docx = await design.renderDesignDocx("poster", post.title, post.content);
  const xml = await (await JSZip.loadAsync(docx)).file("word/document.xml").async("string");
  assert.ok(xml.includes("SALON OPENING"));
  const page = handoutTemplate({ kind: "webpage", subject: "Mama Joy Catering" });
  const html = await design.renderDesignHtml("brochure", page.title, page.content);
  assert.match(String(html), /<html/i); assert.ok(String(html).includes("MAMA JOY CATERING") && String(html).includes("Contact us"));
});

test("the owner's workspace and the spoken page treat them like flyers", () => {
  assert.equal(voiceDispatch.classify("Create a social media post for my salon"), "generateMarketing");
  assert.equal(voiceDispatch.classify("Make an advertisement for the bakery"), "generateMarketing");
  assert.equal(voiceDispatch.classify("Generate a landing page for my shop"), "generateMarketing");
  assert.equal(voiceDispatch.classify("Create a flyer for my sale"), "generateMarketing");
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const line = app.split("\n").find(row => row.startsWith("const KYRO_DOCUMENT_REQUEST"));
  assert.ok(line && /social\(\?: media\)\? \(\?:posts\?\|captions\?\)/.test(line) && /advertisements\?\|adverts\?\|ads\?/.test(line) && /landing page/.test(line));
});

// Found live on 6 November 2026: "Make an Instagram post for my bake sale on Saturday at ten at the church hall" put "What: Make an Instagram post" on the post.
test("the request itself is never put on the 'What:' line", () => {
  const said = "Make an Instagram post for my bake sale on Saturday at 10 at the church hall.";
  const sorted = reply => wording.validateWording(reply, said);
  assert.equal(sorted({ headline: "bake sale", when: "Saturday at 10", where: "the church hall", what: "Make an Instagram post" }).what, "");
  assert.equal(sorted({ headline: "bake sale", when: "Saturday at 10", where: "the church hall", what: "make an Instagram post for the bake sale" }).what, "bake sale");
  assert.equal(sorted({ headline: "bake sale", when: "Saturday at 10", where: "the church hall", what: "bake sale" }).what, "bake sale");
  const post = wording.composeFromFacts({ kind: "social", subject: "bake sale", when: "Saturday at 10" }, sorted({ headline: "bake sale", when: "Saturday at 10", where: "the church hall", what: "Make an Instagram post" }));
  assert.ok(!/Make an Instagram/i.test(post.content) && /When: Saturday at 10/.test(post.content) && /Where: the church hall/.test(post.content) && /What: \[what is happening/.test(post.content));
});
