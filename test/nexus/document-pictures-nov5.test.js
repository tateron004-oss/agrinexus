"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { EventEmitter } = require("node:events");
const JSZip = require("jszip");
const { PDFParse } = require("pdf-parse");
const images = require("./helpers/test-images.js");
const { sniffImage, assertDrawable, fitInside } = require("../../server/providers/image-info.js");
const pictureFetch = require("../../server/providers/picture-fetch.js");
const design = require("../../server/providers/design-render.js");
const exportProvider = require("../../server/providers/exportProvider.js");
const pictures = require("../../nexus/documents/pictures.js");
const { createDocumentsCreateExecutor } = require("../../nexus/documents/executor.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const wording = require("../../nexus/knowledge/handout-wording.js");

// 5 November 2026: the owner asked for newsletters, emails and flyers WITH IMAGES. Pictures come from the person's own uploads (a logo, a photo) or from open-licence pictures found on the web and fetched on the server, strictly.

const sunrise = (w, h) => images.sunrise(w, h);
const logo = (w, h) => images.logo(w, h);
const picture = (buffer, extra = {}) => { const info = sniffImage(buffer); return { buffer, mime: info.mime, ext: info.ext, width: info.width, height: info.height, alt: "A test picture", title: "A test picture", ...extra }; };
const NOTE = "Made by Kyro from what you said. Fill in each [bracket] and delete this line. Nothing here was looked up or added by Kyro.";
const TEXT = {
  flyer: `BAKE SALE\n\nWhen: Saturday at 10\nWhere: the church hall\nWhat: bake sale\nCost: [the price, or free]\n\nQuestions? [name and phone number]\n\n${NOTE}`,
  poster: `COMMUNITY CLEAN-UP\n\nWhen: Saturday at nine\nWhere: the park\nWhat: community clean-up\nCost: free\n\nQuestions? [name and phone number]\n\n${NOTE}`,
  newsletter: `GRACE CHURCH\n[month and year]\n\nWelcome\n[a few sentences to greet your readers]\n\nNews\n[what has happened since the last issue]\n\nDates to remember\n[dates, times and places]\n\nHow to reach us\n[name, phone, email or address]\n\n${NOTE}`,
  brochure: `AMINA FARM\n\nAbout us\n[who you are, in a few sentences]\n\nWhat we offer\n[the main things you do or sell]\n\nHow to reach us\n[name, phone, email or address, and hours]\n\n${NOTE}`,
  invitation: `YOU ARE INVITED\n\nChurch Anniversary Dinner\n\nWhen: Sunday at five\nWhere: [the place]\nPlease tell us by [date] if you can come: [name and phone number]\n\n${NOTE}`,
  email: `Subject: Fresh bread every Saturday\n\nHello [name],\n\nFresh bread from our bakery, baked that morning.\n\nWhen: Saturdays from 8 to noon\nWhere: [the place, or the web page]\nPrice: [the price, or free]\nTo order or reply: [phone, email or address]\n\nThank you,\n[your name]\n\n${NOTE}`
};

// ---------- reading a picture's own bytes ----------
test("a PNG and a JPEG are read from their own bytes (type and size); anything else, or a damaged header, is not a picture; a picture is never stretched", () => {
  const png = sniffImage(logo(120, 80)); const jpg = sniffImage(sunrise(200, 100));
  assert.deepEqual({ ...png }, { mime: "image/png", ext: "png", width: 120, height: 80, interlaced: false });
  assert.deepEqual({ mime: jpg.mime, ext: jpg.ext, width: jpg.width, height: jpg.height }, { mime: "image/jpeg", ext: "jpg", width: 200, height: 100 });
  for (const bad of [Buffer.from("GIF89a\u0001\u0000\u0001\u0000", "binary"), Buffer.from("<html><body>not a picture</body></html>"), Buffer.alloc(0), Buffer.from([0xff, 0xd8, 0xff, 0xd9]), Buffer.from("%PDF-1.4 ...")]) assert.equal(sniffImage(bad), null);
  assert.equal(sniffImage("not a buffer"), null);
  assert.throws(() => assertDrawable(Buffer.from("hello")), /not a PNG or JPEG/);
  assert.throws(() => assertDrawable(logo(10, 10)), /too small/);
  assert.deepEqual({ ...assertDrawable(logo(120, 80)) }, { mime: "image/png", ext: "png", width: 120, height: 80 });
  // the same shape, scaled to fit a box, never enlarged unless allowed (and then at most maxScale times)
  assert.deepEqual({ ...fitInside(1000, 500, 400, 400) }, { width: 400, height: 200 });
  assert.deepEqual({ ...fitInside(100, 50, 400, 400) }, { width: 100, height: 50 });
  assert.deepEqual({ ...fitInside(100, 50, 400, 400, { maxScale: 2 }) }, { width: 200, height: 100 });
  assert.deepEqual({ ...fitInside(300, 900, 400, 300) }, { width: 100, height: 300 });
});

// ---------- the strict fetch ----------
function fakeRequester(responses, seen = []) {
  return (options, onResponse) => {
    const request = new EventEmitter(); request.destroy = () => { request.destroyed = true; }; request.end = () => {
      seen.push(options);
      const spec = typeof responses === "function" ? responses(options, seen.length) : responses;
      setImmediate(() => {
        const response = new EventEmitter(); response.statusCode = spec.status || 200; response.headers = spec.headers || {}; response.resume = () => {}; response.destroy = () => { response.destroyed = true; };
        onResponse(response);
        for (const chunk of spec.chunks || []) { if (response.destroyed) break; response.emit("data", chunk); }
        if (!response.destroyed) response.emit("end");
      });
    };
    return request;
  };
}
const publicLookup = async () => [{ address: "93.184.216.34", family: 4 }];

test("the fetch gets a real picture from a public https address, connecting to the address that was checked, and refuses everything else", async () => {
  const png = logo(120, 80); const seen = [];
  const got = await pictureFetch.fetchPublicImage("https://upload.example-pictures.org/a/logo.png", { lookup: publicLookup, requester: fakeRequester({ headers: { "content-type": "image/png" }, chunks: [png.subarray(0, 50), png.subarray(50)] }, seen) });
  assert.equal(got.mime, "image/png"); assert.equal(got.width, 120); assert.ok(got.buffer.equals(png));
  // the connection is to the vetted address, whatever the name resolves to later
  assert.equal(seen[0].hostname, "upload.example-pictures.org");
  await new Promise(resolve => seen[0].lookup("anything.example", {}, (error, address, family) => { assert.equal(error, null); assert.deepEqual([address, family], ["93.184.216.34", 4]); resolve(); }));
  await new Promise(resolve => seen[0].lookup("anything.example", { all: true }, (error, list) => { assert.deepEqual(list, [{ address: "93.184.216.34", family: 4 }]); resolve(); }));
  for (const url of ["http://upload.example-pictures.org/x.png", "https://127.0.0.1/x.png", "https://localhost/x.png", "https://169.254.169.254/latest/meta-data/", "https://user:secret@upload.example-pictures.org/x.png", "https://upload.example-pictures.org:8443/x.png", "https://printer.local/x.png", "https://intranet/x.png", "ftp://upload.example-pictures.org/x.png", "javascript:alert(1)", ""])
    await assert.rejects(pictureFetch.fetchPublicImage(url, { lookup: publicLookup, requester: fakeRequester({ chunks: [png] }) }), error => /^picture_(link|blocked)$/.test(error.code), url);
  // a name that RESOLVES to a private, loopback or link-local address is refused (every address it resolves to must be public)
  for (const address of ["10.0.0.5", "192.168.1.20", "127.0.0.1", "169.254.169.254", "::1", "fd00::1", "100.64.0.1"])
    await assert.rejects(pictureFetch.fetchPublicImage("https://sneaky.example-pictures.org/x.png", { lookup: async () => [{ address: "93.184.216.34" }, { address }], requester: fakeRequester({ chunks: [png] }) }), error => error.code === "picture_blocked", address);
});

test("a redirect is followed at most three times and every step is checked again; the size is capped; only real PNG and JPEG bytes count", async () => {
  const png = logo(120, 80);
  // redirect to a private name, to http, and a loop
  await assert.rejects(pictureFetch.fetchPublicImage("https://a.example-pictures.org/x.png", { lookup: publicLookup, requester: fakeRequester({ status: 302, headers: { location: "https://localhost/secret.png" } }) }), error => error.code === "picture_link");
  await assert.rejects(pictureFetch.fetchPublicImage("https://a.example-pictures.org/x.png", { lookup: publicLookup, requester: fakeRequester({ status: 301, headers: { location: "http://b.example-pictures.org/x.png" } }) }), error => error.code === "picture_link");
  await assert.rejects(pictureFetch.fetchPublicImage("https://a.example-pictures.org/x.png", { lookup: publicLookup, requester: fakeRequester({ status: 302, headers: { location: "/again.png" } }) }), error => error.code === "picture_redirects");
  // a redirect to a name that resolves privately is stopped at the lookup of the second hop
  let lookups = 0;
  await assert.rejects(pictureFetch.fetchPublicImage("https://a.example-pictures.org/x.png", { lookup: async () => (++lookups === 1 ? [{ address: "93.184.216.34" }] : [{ address: "10.1.1.1" }]), requester: fakeRequester((options, n) => (n === 1 ? { status: 302, headers: { location: "https://b.example-pictures.org/y.png" } } : { chunks: [png] })) }), error => error.code === "picture_blocked");
  // one redirect to a good address works
  const ok = await pictureFetch.fetchPublicImage("https://a.example-pictures.org/x.png", { lookup: publicLookup, requester: fakeRequester((options, n) => (n === 1 ? { status: 302, headers: { location: "https://b.example-pictures.org/y.png" } } : { chunks: [png] })) });
  assert.equal(ok.url, "https://b.example-pictures.org/y.png");
  // more than 4 MB: refused while it streams, and by its declared length
  const big = Buffer.concat([png, Buffer.alloc(4 * 1024 * 1024)]);
  await assert.rejects(pictureFetch.fetchPublicImage("https://a.example-pictures.org/x.png", { lookup: publicLookup, requester: fakeRequester({ chunks: [big.subarray(0, 1024 * 1024), big.subarray(1024 * 1024, 3 * 1024 * 1024), big.subarray(3 * 1024 * 1024)] }) }), error => error.code === "picture_too_big");
  await assert.rejects(pictureFetch.fetchPublicImage("https://a.example-pictures.org/x.png", { lookup: publicLookup, requester: fakeRequester({ headers: { "content-length": String(9 * 1024 * 1024) }, chunks: [png] }) }), error => error.code === "picture_too_big");
  // a page that says it is an image but is not (the content type is not believed), a GIF, an error status
  await assert.rejects(pictureFetch.fetchPublicImage("https://a.example-pictures.org/x.png", { lookup: publicLookup, requester: fakeRequester({ headers: { "content-type": "image/png" }, chunks: [Buffer.from("<html>login</html>")] }) }), error => error.code === "picture_type");
  await assert.rejects(pictureFetch.fetchPublicImage("https://a.example-pictures.org/x.png", { lookup: publicLookup, requester: fakeRequester({ chunks: [Buffer.from("GIF89a\u0001\u0000\u0001\u0000\u0000", "binary")] }) }), error => error.code === "picture_type");
  await assert.rejects(pictureFetch.fetchPublicImage("https://a.example-pictures.org/x.png", { lookup: publicLookup, requester: fakeRequester({ status: 404 }) }), error => error.code === "picture_http");
  // a server that never answers is given up on (the time limit)
  await assert.rejects(pictureFetch.fetchPublicImage("https://a.example-pictures.org/x.png", { lookup: publicLookup, timeoutMs: 60, requester: () => { const request = new EventEmitter(); request.destroy = () => {}; request.end = () => {}; return request; } }), error => error.code === "picture_timeout");
});

test("finding a picture: the first candidate that downloads, is a real picture both file types can hold and is big enough; its credit says where it came from", async () => {
  const good = sunrise(640, 360); const tiny = logo(60, 40);
  const candidates = [
    { title: "Broken", imageUrl: "https://a.example-pictures.org/broken.jpg", sourceUrl: "https://a.example-pictures.org/wiki/Broken", sourceName: "Wikimedia Commons" },
    { title: "Too small", imageUrl: "https://a.example-pictures.org/tiny.png", sourceUrl: "https://a.example-pictures.org/wiki/Tiny", sourceName: "Wikimedia Commons" },
    { title: "Sunrise over fields", imageUrl: "https://a.example-pictures.org/sun.jpg", sourceUrl: "https://a.example-pictures.org/wiki/Sunrise", creator: "A. Photographer", license: "CC BY-SA 4.0", sourceName: "Wikimedia Commons" },
    { title: "Never reached", imageUrl: "https://a.example-pictures.org/other.jpg", sourceName: "Openverse" }
  ];
  const byPath = { "/broken.jpg": { chunks: [Buffer.from("not a picture")] }, "/tiny.png": { chunks: [tiny] }, "/sun.jpg": { chunks: [good] }, "/other.jpg": { chunks: [good] } };
  const seen = [];
  const found = await pictureFetch.findPicture("fresh bread", { candidates, fetchOptions: { lookup: publicLookup, requester: (options, cb) => fakeRequester(byPath[options.path], seen)(options, cb) } });
  assert.equal(found.title, "Sunrise over fields"); assert.equal(found.mime, "image/jpeg"); assert.equal(found.credit, "Picture: Wikimedia Commons, A. Photographer, CC BY-SA 4.0");
  assert.equal(found.sourceUrl, "https://a.example-pictures.org/wiki/Sunrise");
  assert.deepEqual(seen.map(options => options.path), ["/broken.jpg", "/tiny.png", "/sun.jpg"], "it stops at the first good one");
  assert.equal(await pictureFetch.findPicture("nothing", { candidates: [candidates[0]], fetchOptions: { lookup: publicLookup, requester: fakeRequester(byPath["/broken.jpg"]) } }), null);
  assert.equal(pictureFetch.cleanQuery("a picture of my fresh bread"), "fresh bread");
});

// ---------- what a person says ----------
test("'with a picture of fresh bread', 'with my logo', 'using the photo I uploaded' are taken out of the request and kept as what pictures to put in; ordinary requests are left alone", () => {
  const ask = say => pictures.extractPictureRequest(say);
  assert.deepEqual(ask("Make me a flyer for my bake sale on Saturday at ten at the church hall with a picture of fresh bread"), { text: "Make me a flyer for my bake sale on Saturday at ten at the church hall", specs: [{ source: "search", query: "fresh bread" }] });
  assert.deepEqual(ask("Create a newsletter for the church with a picture of the building"), { text: "Create a newsletter for the church", specs: [{ source: "search", query: "the building" }] });
  assert.deepEqual(ask("Write a promotional email for my bakery with my logo"), { text: "Write a promotional email for my bakery", specs: [{ source: "upload", hint: "logo", role: "logo" }] });
  assert.deepEqual(ask("Make a flyer for the yard sale on Saturday with a picture of a bicycle and my logo."), { text: "Make a flyer for the yard sale on Saturday.", specs: [{ source: "search", query: "a bicycle" }, { source: "upload", hint: "logo", role: "logo" }] });
  assert.deepEqual(ask("Make an invitation to our party on Friday using the photo I uploaded"), { text: "Make an invitation to our party on Friday", specs: [{ source: "upload", hint: "latest" }] });
  assert.deepEqual(ask("Create a poster for the clean-up on Saturday at nine at the park"), { text: "Create a poster for the clean-up on Saturday at nine at the park", specs: [] });
  assert.deepEqual(ask("Make me a flyer for my photo studio").specs, []);
  const add = say => pictures.addPictureRequest(say);
  assert.deepEqual(add("Add a picture of fresh bread to the flyer"), { specs: [{ source: "search", query: "fresh bread" }], target: "flyer" });
  assert.deepEqual(add("put my logo on it"), { specs: [{ source: "upload", hint: "logo", role: "logo" }], target: "" });
  assert.deepEqual(add("Add the photo I uploaded to the newsletter."), { specs: [{ source: "upload", hint: "latest" }], target: "newsletter" });
  assert.deepEqual(add("Could you add a picture of a bicycle"), { specs: [{ source: "search", query: "a bicycle" }], target: "" });
  for (const say of ["Make me a flyer", "Add milk to my shopping list", "Add a reminder for Saturday", "What is a picture of health"]) assert.equal(add(say), null, say);
});

// ---------- the pictures of the person's own ----------
function uploadsFor(files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "kyro-uploads-"));
  const metas = files.map((file, index) => ({ fileId: file.fileId, originalFilename: file.name, mimeType: file.mime, sizeBytes: file.bytes.length, uploadedBy: file.owner || "u1", space: "default", uploadedAt: new Date(2026, 10, 5, 10, index).toISOString() }));
  files.forEach(file => fs.writeFileSync(path.join(dir, file.fileId), file.bytes));
  const uploads = require("../../server/uploads.js");
  return { dir, deps: { uploads: { uploadDir: () => dir, listUploadsForUser: (_, userId) => metas.filter(meta => meta.uploadedBy === userId), resolveUploadedFilePath: uploads.resolveUploadedFilePath } } };
}
const ctx = { tenantId: "t1", userId: "u1" };

test("the person's own pictures: 'my logo' finds the file called logo, 'the photo I uploaded' the newest picture, only their own files are ever used, and what cannot be used is said plainly", async () => {
  const { deps } = uploadsFor([
    { fileId: "aaaa1111-logo.png", name: "Amina Bakery logo.png", mime: "image/png", bytes: logo(200, 200) },
    { fileId: "bbbb2222-bread.jpg", name: "bread.jpg", mime: "image/jpeg", bytes: sunrise(480, 320) },
    { fileId: "cccc3333-secret.jpg", name: "someone-elses-logo.jpg", mime: "image/jpeg", bytes: sunrise(400, 300), owner: "u2" }
  ]);
  const one = await pictures.resolvePictures({ specs: [{ source: "upload", hint: "logo", role: "logo" }, { source: "upload", hint: "latest" }], env: {}, context: ctx, deps });
  assert.deepEqual(one.pictures.map(item => [item.role, item.ref.filename, item.source]), [["logo", "Amina Bakery logo.png", "upload"], ["", "bread.jpg", "upload"]]);
  assert.equal(one.pictures[0].credit, "", "the person's own pictures carry no credit");
  assert.ok(!one.notes.some(note => /belong to their owners/.test(note)), "and no note about other people's pictures");
  assert.equal(one.missingUpload, false);
  // another person's file is not reachable by name or by id
  const other = await pictures.resolvePictures({ specs: [{ source: "upload", fileId: "cccc3333-secret.jpg" }], env: {}, context: ctx, deps });
  assert.equal(other.pictures.length, 0);
  // no logo among the files: the newest picture is used and it is said so; no pictures at all: a plain note and the Add a picture button
  const noLogo = uploadsFor([{ fileId: "dddd4444-photo.jpg", name: "photo.jpg", mime: "image/jpeg", bytes: sunrise(480, 320) }]);
  const guessed = await pictures.resolvePictures({ specs: [{ source: "upload", hint: "logo", role: "logo" }], env: {}, context: ctx, deps: noLogo.deps });
  assert.equal(guessed.pictures.length, 1); assert.match(guessed.notes.join(" "), /newest picture you uploaded as your logo/);
  const empty = await pictures.resolvePictures({ specs: [{ source: "upload", hint: "logo", role: "logo" }], env: {}, context: ctx, deps: uploadsFor([]).deps });
  assert.equal(empty.pictures.length, 0); assert.equal(empty.missingUpload, true); assert.match(empty.notes.join(" "), /do not have a logo from you yet\. Use the Add a picture button/);
  const signedOut = await pictures.resolvePictures({ specs: [{ source: "upload", hint: "latest" }], env: {}, context: { tenantId: "t1" }, deps });
  assert.match(signedOut.notes.join(" "), /signed in/);
  // a WebP is not something a Word or PDF file can hold here
  const webp = uploadsFor([{ fileId: "eeee5555-pic.webp", name: "pic.webp", mime: "image/webp", bytes: Buffer.from("RIFF....WEBPVP8 ") }]);
  const refused = await pictures.resolvePictures({ specs: [{ source: "upload", hint: "latest" }], env: {}, context: ctx, deps: webp.deps });
  assert.equal(refused.pictures.length, 0); assert.match(refused.notes.join(" "), /WebP/);
  // a file that says it is a JPEG but is not
  const fake = uploadsFor([{ fileId: "ffff6666-fake.jpg", name: "fake.jpg", mime: "image/jpeg", bytes: Buffer.from("this is not a picture at all") }]);
  const unreadable = await pictures.resolvePictures({ specs: [{ source: "upload", hint: "latest" }], env: {}, context: ctx, deps: fake.deps });
  assert.equal(unreadable.pictures.length, 0); assert.match(unreadable.notes.join(" "), /not a PNG or JPEG/);
});

test("a picture found on the web is kept with its credit, the card is told that found pictures belong to their owners, and there are never more than three", async () => {
  const sun = picture(sunrise(640, 360), { credit: "Picture: Wikimedia Commons, A. Photographer, CC BY-SA 4.0", title: "Sunrise", source: "search" });
  const finder = async query => (/nothing/.test(query) ? null : { ...sun, imageUrl: "https://a.example-pictures.org/sun.jpg", sourceUrl: "https://a.example-pictures.org/wiki/Sunrise", creator: "A. Photographer", license: "CC BY-SA 4.0" });
  const result = await pictures.resolvePictures({ specs: [{ source: "search", query: "fresh bread" }, { source: "search", query: "nothing at all" }], env: {}, context: ctx, deps: { findPicture: finder } });
  assert.equal(result.pictures.length, 1); assert.equal(result.pictures[0].credit, sun.credit); assert.equal(result.pictures[0].source, "search");
  assert.match(result.notes.join(" | "), /could not find a picture of nothing at all that I can use\. You can upload your own with the Add a picture button/);
  assert.match(result.notes.join(" | "), /Pictures found on the web belong to their owners/);
  const many = await pictures.resolvePictures({ specs: [1, 2, 3, 4].map(n => ({ source: "search", query: `bread ${n}` })), env: {}, context: ctx, deps: { findPicture: finder } });
  assert.equal(many.pictures.length, 3); assert.match(many.notes.join(" "), /at most three pictures/);
  // kept pictures round-trip through the stored form, bytes and all
  const stored = pictures.toStored(result.pictures);
  assert.equal(typeof stored[0].dataBase64, "string");
  const back = pictures.fromStored(JSON.parse(JSON.stringify(stored)));
  assert.ok(back[0].buffer.equals(result.pictures[0].buffer)); assert.equal(back[0].credit, sun.credit);
  assert.ok(!("buffer" in pictures.summariseForMetadata(result.pictures)[0]) && !("dataBase64" in pictures.summariseForMetadata(result.pictures)[0]));
  assert.deepEqual(pictures.fromStored("not json"), []);
});

// ---------- the Word, PDF and web page files ----------
async function docxParts(buffer) {
  const zip = await JSZip.loadAsync(buffer);
  const xml = await zip.file("word/document.xml").async("string");
  const media = Object.keys(zip.files).filter(name => /^word\/media\/.+\.(?:png|jpe?g)$/.test(name));
  const rels = await zip.file("word/_rels/document.xml.rels").async("string");
  return { zip, xml, media, rels };
}
const extents = xml => [...xml.matchAll(/<wp:extent cx="(\d+)" cy="(\d+)"/g)].map(match => ({ cx: Number(match[1]), cy: Number(match[2]) }));

test("every kind with pictures makes a real Word file: the pictures are inside it as PNG/JPEG, related, with alt text, in the shape they came in, and none of them wider or taller than its box", async () => {
  const lead = picture(sunrise(640, 360), { alt: "Sunrise over green fields", title: "Sunrise", credit: "Picture: Wikimedia Commons, A. Photographer, CC BY-SA 4.0" });
  const second = picture(sunrise(480, 360), { alt: "The church hall steps", caption: "The view from the church hall steps" });
  const mark = picture(logo(240, 240), { role: "logo", alt: "Logo" });
  for (const kind of ["flyer", "poster", "newsletter", "brochure", "invitation", "email"]) {
    const given = kind === "invitation" ? [lead] : kind === "newsletter" || kind === "brochure" ? [mark, lead, second] : [mark, lead];
    const file = await docxParts(await design.renderDesignDocx(kind, kind, TEXT[kind], { images: given }));
    assert.equal(file.media.length, given.length, `${kind}: every picture is in the file`);
    for (const name of file.media) assert.match(name, /\.(?:png|jpe?g)$/);
    assert.equal((file.xml.match(/<w:drawing>/g) || []).length, given.length);
    assert.equal((file.rels.match(/relationships\/image/g) || []).length, given.length, `${kind}: each picture has its relationship`);
    for (const id of [...file.xml.matchAll(/r:embed="([^"]+)"/g)].map(match => match[1])) assert.match(file.rels, new RegExp(`Id="${id}"[^>]*Target="media/`), `${kind}: ${id} points at a picture`);
    assert.match(file.xml, /descr="Sunrise over green fields"/); if (given.includes(mark)) assert.match(file.xml, /descr="Logo"/);
    for (const text of file.xml.match(/<wp:docPr [^>]*>/g)) assert.match(text, /descr="[^"]+"/, `${kind}: alt text on every picture`);
    // shapes: each extent keeps its picture's own proportions and fits its box (pixels are 9525 EMU)
    const sizes = extents(file.xml); const wanted = given.slice().sort((a, b) => (a.role === "logo" ? -1 : b.role === "logo" ? 1 : 0));
    sizes.forEach((size, index) => { const source = wanted[index]; assert.ok(Math.abs(size.cx / size.cy - source.width / source.height) < 0.02, `${kind}: picture ${index} is not stretched`); assert.ok(size.cx / 9525 <= 701 && size.cy / 9525 <= 322, `${kind}: picture ${index} fits its box`); });
    // the words are all still there, the credit is printed, and the picture's alt text is not in the words
    assert.match(file.xml, /Picture: Wikimedia Commons, A\. Photographer, CC BY-SA 4\.0/);
    assert.match(file.xml, /\[bracket\]/);
  }
  assert.match((await docxParts(await design.renderDesignDocx("newsletter", "n", TEXT.newsletter, { images: [mark, lead, second] }))).xml, /The view from the church hall steps/, "the caption the person gave is under its picture");
  // without pictures: exactly as before (no media, no drawing, no credit line)
  const plain = await docxParts(await design.renderDesignDocx("flyer", "f", TEXT.flyer));
  assert.deepEqual(plain.media, []); assert.doesNotMatch(plain.xml, /<w:drawing>|Picture:/);
  // what a picture is, and its size, is read from its own bytes, whatever the caller said: junk and empty entries are left out; a JPEG labelled "gif" with a wrong size is still the JPEG it is, in its own shape
  const rejected = await docxParts(await design.renderDesignDocx("flyer", "f", TEXT.flyer, { images: [{ buffer: Buffer.from("junk"), ext: "png", width: 10, height: 10 }, null, { buffer: Buffer.alloc(0) }, { ...lead, ext: "gif", width: 50, height: 500 }] }));
  assert.equal(rejected.media.length, 1); assert.match(rejected.media[0], /\.jpg$/);
  const [shape] = extents(rejected.xml); assert.ok(Math.abs(shape.cx / shape.cy - 640 / 360) < 0.02, "its own proportions, not the claimed ones");
});

test("the PDF holds the same pictures on the SAME pages: a flyer, poster, invitation and email stay one page with pictures; the credit sits with the footer", async () => {
  const lead = picture(sunrise(640, 360), { alt: "Sunrise", credit: "Picture: Wikimedia Commons, A. Photographer, CC BY-SA 4.0" });
  const mark = picture(logo(240, 240), { role: "logo", alt: "Logo" });
  for (const [kind, given] of [["flyer", [mark, lead]], ["poster", [lead]], ["invitation", [lead]], ["email", [mark, lead]], ["newsletter", [mark, lead, picture(sunrise(480, 360))]], ["brochure", [lead]]]) {
    const buffer = await design.renderDesignPdf(kind, kind, TEXT[kind], { images: given });
    assert.equal(buffer.subarray(0, 5).toString(), "%PDF-");
    const parser = new PDFParse({ data: buffer }); const parsed = await parser.getText();
    if (["flyer", "poster", "invitation", "email"].includes(kind)) assert.equal(parsed.total ?? parsed.pages?.length, 1, `${kind} stays on one page`);
    assert.match(parsed.text, /Picture: Wikimedia Commons, A\. Photographer, CC BY-SA 4\.0/);
    assert.match(parsed.text, /Made by Kyro from what you said/);
    assert.ok((buffer.toString("latin1").match(/\/Subtype \/Image/g) || []).length >= given.length, `${kind}: the pictures are in the PDF`);
    await parser.destroy?.();
  }
  const plain = await design.renderDesignPdf("flyer", "f", TEXT.flyer);
  assert.doesNotMatch(plain.toString("latin1"), /\/Subtype \/Image/);
});

test("the web page version: one self-contained page with the pictures inline (alt text on each), the words escaped, the blanks highlighted; an email is made the same way", async () => {
  const lead = picture(sunrise(640, 360), { alt: "Sunrise <over> \"fields\"", credit: "Picture: Wikimedia Commons, A. Photographer, CC BY-SA 4.0" });
  const mark = picture(logo(240, 240), { role: "logo", alt: "Logo" });
  const html = (await design.renderDesignHtml("email", "Fresh bread", TEXT.email.replace("Fresh bread from our bakery", "Fresh <b>bread</b> & rolls from our bakery"), { images: [mark, lead] })).toString("utf8");
  assert.match(html, /^<!doctype html>/); assert.match(html, /<title>Fresh bread every Saturday<\/title>|<title>Fresh bread<\/title>/);
  assert.equal((html.match(/<img src="data:image\/(?:png|jpeg);base64,/g) || []).length, 2);
  assert.match(html, /alt="Sunrise &lt;over&gt; &quot;fields&quot;"/); assert.match(html, /alt="Logo"/);
  assert.doesNotMatch(html, /<b>bread<\/b>/); assert.match(html, /Fresh &lt;b&gt;bread&lt;\/b&gt; &amp; rolls/);
  assert.match(html, /background:#FFF59D[^>]*>\[name\]/); assert.match(html, /PROMOTIONAL EMAIL/); assert.match(html, /Picture: Wikimedia Commons/);
  assert.doesNotMatch(html, /<script|onerror=|javascript:/i);
  const widths = [...html.matchAll(/<img [^>]*width="(\d+)" height="(\d+)"/g)].map(match => Number(match[1]) / Number(match[2]));
  assert.ok(Math.abs(widths[0] - 1) < 0.02 && Math.abs(widths[1] - 640 / 360) < 0.03, "shapes kept");
  for (const kind of ["flyer", "poster", "newsletter", "brochure", "invitation"]) assert.match((await design.renderDesignHtml(kind, kind, TEXT[kind], { images: [lead] })).toString("utf8"), /<img src="data:image\/jpeg;base64,/);
  // the export provider: a web page only for a designed document; the file on disk is the page
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "kyro-export-"));
  const made = await exportProvider.exportDocument({ confirmed: true, title: "Fresh bread", content: TEXT.email, format: "html", design: "email", images: [lead] }, { NEXUS_EXPORT_DIR: root });
  assert.equal(made.body.status, "completed"); assert.equal(made.body.data.format, "html"); assert.equal(made.body.data.pictureCount, 1);
  assert.match(fs.readFileSync(made.body.data.localPath, "utf8"), /<img src="data:image\/jpeg/);
  const refused = await exportProvider.exportDocument({ confirmed: true, title: "Notes", content: "plain", format: "html" }, { NEXUS_EXPORT_DIR: root });
  assert.equal(refused.body.status, "blocked");
  // a design that cannot be drawn with its pictures is drawn without them, and says so
  const dropped = await exportProvider.exportDocument({ confirmed: true, title: "Bake sale", content: TEXT.flyer, format: "docx", design: "flyer", images: [{ ...lead, buffer: Buffer.from("junk"), ext: "png", width: 100, height: 100 }, { ...lead, buffer: null }] }, { NEXUS_EXPORT_DIR: root });
  assert.equal(dropped.body.status, "completed");
});

// ---------- the executor: create, save changes, export again ----------
function fakeDocuments() {
  const rows = new Map(); const versions = [];
  return {
    rows, versions,
    async create({ ownerId, title, documentType, metadata }) { const row = { document_id: `doc_${rows.size + 1}`, owner_id: ownerId, title, document_type: documentType, metadata }; rows.set(row.document_id, row); return row; },
    async addVersion({ documentId, content }) { const version = versions.filter(item => item.documentId === documentId).length + 1; versions.push({ documentId, version, content }); return { version }; },
    async get({ documentId }) { const row = rows.get(documentId); return row ? { ...row, version: versions.filter(item => item.documentId === documentId).length } : null; },
    async getPictures({ documentId }) { const list = versions.filter(item => item.documentId === documentId); return list.length ? list[list.length - 1].content.pictures || [] : []; }
  };
}

test("documents.create with pictures: found and kept with the version, summarised in the metadata, listed in the result with the honest notes; Save changes and 'export as PDF' keep the pictures", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "kyro-exec-")); const documents = fakeDocuments();
  const sun = picture(sunrise(640, 360), { credit: "Picture: Wikimedia Commons, A. Photographer, CC BY-SA 4.0", title: "Fresh made bread", source: "search" });
  const executor = createDocumentsCreateExecutor({ env: { NEXUS_EXPORT_DIR: root }, documents, pictureDeps: { findPicture: async () => ({ ...sun, imageUrl: "https://a.example-pictures.org/b.jpg", sourceUrl: "https://a.example-pictures.org/wiki/B", creator: "A. Photographer", license: "CC BY-SA 4.0" }), uploads: { uploadDir: () => root, listUploadsForUser: () => [], resolveUploadedFilePath: () => null } } });
  const created = await executor({ input: { title: "Bake Sale Flyer", content: TEXT.flyer, format: "docx", design: "flyer", pictures: [{ source: "search", query: "fresh bread" }, { source: "upload", hint: "logo", role: "logo" }] }, context: ctx, taskId: "task1" });
  assert.equal(created.status, "completed"); assert.equal(created.data.pictureCount, 1);
  assert.deepEqual(created.data.pictureSummary, [{ n: 0, role: "", source: "search", title: "Fresh made bread", credit: sun.credit }]);
  assert.match(created.data.pictureNotes.join(" | "), /do not have a logo from you yet\. Use the Add a picture button/);
  assert.equal(created.data.needsPicture, true, "the card offers the Add a picture button"); assert.match(created.data.pictureNotes.join(" | "), /belong to their owners/);
  const row = documents.rows.get(created.documentId);
  assert.equal(row.metadata.design, "flyer"); assert.deepEqual(row.metadata.pictures.map(item => [item.source, item.title]), [["search", "Fresh made bread"]]); assert.ok(!JSON.stringify(row.metadata).includes("dataBase64"), "no picture bytes in the metadata");
  const first = documents.versions[0].content;
  assert.equal(first.pictures.length, 1); assert.ok(Buffer.from(first.pictures[0].dataBase64, "base64").equals(sun.buffer)); assert.ok(first.contentBase64, "the file itself is kept too");
  const docx = await docxParts(Buffer.from(first.contentBase64, "base64")); assert.equal(docx.media.length, 1);
  // Save changes: new words, the same pictures
  const saved = await executor({ input: { documentId: created.documentId, content: TEXT.flyer.replace("bake sale", "autumn bake sale"), reopenAfterSave: true }, context: ctx, taskId: "task2" });
  assert.equal(saved.data.pictureCount, 1); const savedDocx = await docxParts(Buffer.from(documents.versions[1].content.contentBase64, "base64"));
  assert.equal(savedDocx.media.length, 1); assert.match(savedDocx.xml, /autumn bake sale/);
  // export it as a PDF, and as a web page: a new document with the same pictures
  const pdf = await executor({ input: { title: "Bake Sale Flyer", content: TEXT.flyer, format: "pdf", design: "flyer", picturesFromDocumentId: created.documentId }, context: ctx, taskId: "task3" });
  assert.equal(pdf.data.pictureCount, 1); assert.ok((fs.readFileSync(pdf.data.localPath).toString("latin1").match(/\/Subtype \/Image/g) || []).length >= 1);
  const page = await executor({ input: { title: "Bake Sale Flyer", content: TEXT.flyer, format: "html", design: "flyer", picturesFromDocumentId: created.documentId }, context: ctx, taskId: "task4" });
  assert.match(fs.readFileSync(page.data.localPath, "utf8"), /<img src="data:image\/jpeg/);
  // the pictures of someone else's document are not reachable: a document is read with the caller's own tenant and owner
  const stranger = await executor({ input: { title: "X", content: TEXT.flyer, format: "docx", design: "flyer", picturesFromDocumentId: "doc_does_not_exist" }, context: ctx, taskId: "task5" });
  assert.equal(stranger.data.pictureCount, 0);
  // a document that is not a designed one never takes pictures, and a 'web page' of a plain document is a Word file
  const plain = await executor({ input: { title: "Notes", content: "just words", format: "html", pictures: [{ source: "search", query: "bread" }] }, context: ctx, taskId: "task6" });
  assert.equal(plain.data.format, "docx"); assert.equal(plain.data.pictureCount, undefined);
});

// ---------- the planner ----------
const catalogTools = ["documents.create", "business.manage", "lists.create"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
const memory = { search: async () => [], list: async () => [], remember: async () => ({}), recall: async () => [], summary: async () => "" };
function planner({ documents, respond } = {}) {
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("MODEL_REACHED"); }, respond: async request => (respond ? respond(request) : null) }, businessWorkspaces: { count: async () => 0 }, tools: { list: async () => catalogTools }, applications: { list: () => defaultApplicationManifests() }, memory, documents });
}
const ask = (instance, text) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone: "America/Chicago" } });
const input = plan => plan.steps[0].input;

test("by voice or typing: a flyer, newsletter or email with a picture asked for passes the pictures on, with the picture words kept out of the words of the document", async () => {
  const flyer = await ask(planner(), "Make me a flyer for my bake sale on Saturday with a picture of fresh bread");
  assert.deepEqual({ title: input(flyer).title, design: input(flyer).design, format: input(flyer).format, pictures: input(flyer).pictures }, { title: "Bake Sale Flyer", design: "flyer", format: "docx", pictures: [{ source: "search", query: "fresh bread" }] });
  assert.doesNotMatch(input(flyer).content, /picture|bread/i);
  const calls = [];
  const detailed = await ask(planner({ respond: async request => { calls.push(request); return JSON.stringify({ headline: "Bake Sale", subhead: "", when: "Saturday at ten", where: "the church hall", what: "", cost: "", contact: "", points: [] }); } }), "Make me a flyer for my bake sale on Saturday at ten at the church hall with a picture of fresh bread");
  assert.equal(calls.length, 1); assert.doesNotMatch(calls[0].goal, /picture|bread/i, "the model that words the flyer is not given the picture words");
  assert.match(input(detailed).content, /When: Saturday at ten\nWhere: the church hall/); assert.deepEqual(input(detailed).pictures, [{ source: "search", query: "fresh bread" }]);
  const letter = await ask(planner(), "Create a newsletter for the church with a picture of the building as a PDF");
  assert.deepEqual({ design: input(letter).design, format: input(letter).format, pictures: input(letter).pictures }, { design: "newsletter", format: "pdf", pictures: [{ source: "search", query: "the building" }] });
  const email = await ask(planner(), "Write a promotional email for my bakery with my logo");
  assert.deepEqual({ design: input(email).design, pictures: input(email).pictures }, { design: "email", pictures: [{ source: "upload", hint: "logo", role: "logo" }] });
  assert.match(input(email).content, /^Subject: \[a short, clear subject line\]/);
  assert.equal(input(await ask(planner(), "Write a promotional email for my bakery as a web page")).format, "html");
  const none = await ask(planner(), "Make me a flyer for my bake sale on Saturday");
  assert.equal(input(none).pictures, undefined, "no pictures asked for: none passed");
});

test("'add a picture of ... to the flyer', 'put my logo on it' and the card's buttons change the saved designed document; a document that is not designed, or none at all, is said plainly", async () => {
  const rows = [{ document_id: "doc_a9b9c9", title: "Bake Sale Flyer", metadata: { design: "flyer" } }, { document_id: "doc_a8b8c8", title: "Grace Newsletter", metadata: { design: "newsletter" } }, { document_id: "doc_a7b7c7", title: "Notes", metadata: {} }];
  const documents = { list: async () => rows, get: async ({ documentId }) => rows.find(row => row.document_id === documentId) || null, getSource: async ({ documentId }) => ({ title: "x", sourceText: `TEXT of ${documentId}` }) };
  const flyer = await ask(planner({ documents }), "Add a picture of fresh bread to the flyer");
  assert.deepEqual({ ...input(flyer) }, { documentId: "doc_a9b9c9", content: "TEXT of doc_a9b9c9", pictures: [{ source: "search", query: "fresh bread" }], reopenAfterSave: true });
  const newsletter = await ask(planner({ documents }), "add a picture of the church building to the newsletter.");
  assert.equal(input(newsletter).documentId, "doc_a8b8c8");
  const logoOn = await ask(planner({ documents }), "Put my logo on it");
  assert.deepEqual({ id: input(logoOn).documentId, pictures: input(logoOn).pictures }, { id: "doc_a9b9c9", pictures: [{ source: "upload", hint: "logo", role: "logo" }] });
  // the card's Add a picture button: the file the person uploaded, named by its own id, into the document named by its own id
  const button = await ask(planner({ documents }), "Add picture 1f2e3d4c-aaaa-bbbb-cccc-1234567890ab.jpg to document doc_a8b8c8");
  assert.deepEqual({ id: input(button).documentId, pictures: input(button).pictures }, { id: "doc_a8b8c8", pictures: [{ source: "upload", fileId: "1f2e3d4c-aaaa-bbbb-cccc-1234567890ab.jpg" }] });
  const asLogo = await ask(planner({ documents }), "Add picture 1f2e3d4c-aaaa-bbbb-cccc-1234567890ab.png to document doc_a9b9c9 as logo");
  assert.deepEqual(input(asLogo).pictures, [{ source: "upload", fileId: "1f2e3d4c-aaaa-bbbb-cccc-1234567890ab.png", role: "logo" }]);
  // the card's Word / PDF / web page buttons
  const pdf = await ask(planner({ documents }), "Export document doc_a9b9c9 as pdf");
  assert.deepEqual({ ...input(pdf) }, { title: "Bake Sale Flyer", content: "TEXT of doc_a9b9c9", format: "pdf", design: "flyer", picturesFromDocumentId: "doc_a9b9c9", reopenAfterSave: true });
  assert.equal(input(await ask(planner({ documents }), "Export document doc_a8b8c8 as html")).format, "html");
  assert.match((await ask(planner({ documents }), "Export document doc_a7b7c7 as html")).response, /only be made from a designed/);
  assert.match((await ask(planner({ documents }), "Add picture 1f2e3d4c-aaaa-bbbb-cccc-1234567890ab.jpg to document doc_a7b7c7")).response, /I can add pictures to a flyer/);
  assert.match((await ask(planner({ documents }), "Add picture 1f2e3d4c-aaaa-bbbb-cccc-1234567890ab.jpg to document doc_a404404")).response, /could not find that document/);
  // no designed document saved
  const none = await ask(planner({ documents: { ...documents, list: async () => [rows[2]] } }), "Add a picture of fresh bread to the flyer");
  assert.match(none.response, /do not have a saved flyer to add a picture to/);
  // an email asked for by name
  assert.equal(input(await ask(planner({ documents: { ...documents, list: async () => [{ document_id: "doc_a5b5c5", title: "Email", metadata: { design: "email" } }, ...rows] } }), "Add my logo to the email")).documentId, "doc_a5b5c5");
  assert.equal(wording.designFor("email"), "email");
});

// ---------- the routes the card uses ----------
test("the card's routes: the list of pictures and each picture's bytes are the document OWNER's only, are never cached or sniffed, and the summary says the design; a web page downloads as text/html", async () => {
  const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");
  const png = logo(120, 80); const jpg = sunrise(200, 120);
  const stored = [
    { role: "logo", source: "upload", title: "logo", mime: "image/png", credit: "", caption: "", dataBase64: png.toString("base64") },
    { role: "", source: "search", title: "Sunrise", mime: "image/jpeg", credit: "Picture: Wikimedia Commons", caption: "", dataBase64: jpg.toString("base64") },
    { role: "", source: "search", title: "Odd", mime: "text/html", credit: "", caption: "", dataBase64: Buffer.from("<script>alert(1)</script>").toString("base64") }
  ];
  const asked = [];
  const runtime = { engine: { tasks: {} }, documents: {
    getPictures: async args => { asked.push(args); return args.ownerId === "user-1" && args.documentId === "doc_a1b2c3" ? stored : []; },
    get: async ({ documentId }) => ({ document_id: documentId, title: "Email", document_type: "html", version: 2, metadata: { design: "email" }, object_key: "local:55555555-5555-5555-5555-555555555555.html" }),
    getFileContent: async () => Buffer.from("<!doctype html><p>hi</p>").toString("base64"), getSource: async () => ({ sourceText: "Subject: hi" }) } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_EXPORT_DIR: os.tmpdir() }, resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const call = async urlPath => {
    const capture = { status: 0, body: null, headers: null, raw: null };
    const res = { writeHead(status, headers) { capture.status = status; capture.headers = headers; }, end(bytes) { capture.raw = bytes; } };
    await adapter.handle({ method: "GET", headers: {} }, res, new URL(`http://local${urlPath}`), (_res, status, body) => { capture.status = status; capture.body = body; });
    return capture;
  };
  const list = await call("/api/nexus/runtime/documents/doc_a1b2c3/pictures");
  assert.equal(list.status, 200); assert.deepEqual(list.body.pictures.map(item => [item.n, item.role, item.source, item.credit]), [[0, "logo", "upload", ""], [1, "", "search", "Picture: Wikimedia Commons"], [2, "", "search", ""]]);
  assert.ok(!JSON.stringify(list.body).includes("dataBase64"), "the list never carries the bytes");
  assert.deepEqual(asked[0], { tenantId: "tenant-1", ownerId: "user-1", documentId: "doc_a1b2c3" }, "asked for this owner's pictures only");
  const first = await call("/api/nexus/runtime/documents/doc_a1b2c3/pictures/0");
  assert.equal(first.status, 200); assert.ok(Buffer.from(first.raw).equals(png)); assert.equal(first.headers["content-type"], "image/png");
  assert.equal(first.headers["cache-control"], "private, no-store"); assert.equal(first.headers["x-content-type-options"], "nosniff"); assert.match(first.headers["content-security-policy"], /default-src 'none'/);
  assert.equal((await call("/api/nexus/runtime/documents/doc_a1b2c3/pictures/1")).headers["content-type"], "image/jpeg");
  assert.equal((await call("/api/nexus/runtime/documents/doc_a1b2c3/pictures/2")).status, 404, "a stored entry that is not a PNG or JPEG is never served");
  assert.equal((await call("/api/nexus/runtime/documents/doc_a1b2c3/pictures/9")).status, 404);
  const other = await call("/api/nexus/runtime/documents/doc_zzzzzz/pictures"); assert.deepEqual(other.body.pictures, [], "someone else's document has no pictures here");
  // the document itself: its design, and a web page is sent as text/html
  const document = await call("/api/nexus/runtime/documents/doc_a1b2c3");
  assert.equal(document.status, 200); assert.equal(document.body.document.design, "email"); assert.equal(document.body.document.documentType, "html"); assert.match(document.body.contentType, /^text\/html/);
});

// ---------- the page ----------
test("the page: 'add a picture ...' said aloud goes the typed route (not 'add a photo to my profile or list'); the document card shows the previews, notes, Add a picture / Add my logo, the file types, and says what could not be done", () => {
  const vm = require("node:vm");
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const lines = app.split("\n");
  const sandbox = {};
  vm.runInNewContext(`${lines.filter(line => ["KYRO_OPEN_LEAD", "KYRO_ADD_PICTURE", "KYRO_ADD_PICTURE_NOT"].some(name => line.startsWith(`const ${name} = `))).join("\n")}
this.add = said => KYRO_ADD_PICTURE.test(said) && !KYRO_ADD_PICTURE_NOT.test(said);`, sandbox);
  for (const say of ["Add a picture of fresh bread to the flyer", "Put my logo on it", "add the photo I uploaded to the newsletter", "Kyro, add a picture of a broom", "Could you include a picture of the church building"]) assert.equal(sandbox.add(say), true, say);
  for (const say of ["Add a photo to my profile", "Add milk to my shopping list", "Add a picture of my cow to its health record", "Add a reminder for Saturday", "Add a photo to my contact Grace"]) assert.equal(sandbox.add(say), false, say);
  assert.ok(app.indexOf("KYRO_NOTE_REQUEST.test(said) || KYRO_REMINDER_REQUEST.test(said)") < app.indexOf("KYRO_ADD_PICTURE.test(said) && !KYRO_ADD_PICTURE_NOT.test(said)"), "after the list, note and reminder claims");
  assert.match(app, /if \(!options\.typed && KYRO_ADD_PICTURE\.test\(said\) && !KYRO_ADD_PICTURE_NOT\.test\(said\)\) \{\s+kyroTakeOverTurn\(\);\s+void handleNexusUnifiedBrainRuntimeCommand\(said, \{ source: "typed", kyroDirect: true \}\);/);
  // the card
  assert.match(app, /addTools\(\{ design: drawn\?\.data\?\.design, format: drawn\?\.data\?\.format, data: drawn\?\.data\?\.data \|\| \{\} \}\);/);
  assert.match(app, /async function kyroDocumentPictureTools\(screen, id, status, info = \{\}\)/);
  assert.match(app, /"\/api\/nexus\/runtime\/documents\/" \+ encodeURIComponent\(id\) \+ "\/pictures\/" \+ item\.n/);
  assert.match(app, /kyroSilentTurn\("Add picture " \+ uploaded\.fileId \+ " to document " \+ id \+ \(asLogo \? " as logo" : ""\)\)/);
  assert.match(app, /kyroSilentTurn\("Export document " \+ id \+ " as " \+ format\)/);
  assert.match(app, /accept: "image\/png,image\/jpeg"/);
  assert.match(app, /Pictures found on the web belong to their owners\. Their credit is printed in the file\./);
  assert.match(app, /Kyro does not send it for you\./);
  assert.match(app, /\{ pdf: "pdf", docx: "docx", html: "html", markdown: "md", md: "md" \}/);
  // what could not be done is said aloud as well as shown
  assert.match(app, /pictureNotesSaid \? `\$\{message\} \$\{pictureNotesSaid\}`\.trim\(\) : message/);
});
