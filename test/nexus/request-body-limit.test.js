"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const { PassThrough } = require("node:stream");
const { collectBodyText } = require("../../server/requestBody.js");

// The body readers used to keep appending every chunk to one string after the limit was passed, so a caller who kept sending (no sign-in needed) made the server hold the whole upload in memory.
// collectBodyText stops keeping data the moment the limit is passed.

function fakeRequest(headers = {}) { const stream = new PassThrough(); stream.headers = headers; return stream; }

test("a body inside the limit is returned whole, and a multi-byte character split between chunks is not corrupted", async () => {
  const req = fakeRequest();
  const promise = collectBodyText(req, 1000);
  const bytes = Buffer.from('{"name":"Wanjiru é"}', "utf8");
  const cut = bytes.indexOf(0xc3) + 1; // splits the two bytes of "é"
  req.write(bytes.subarray(0, cut));
  req.write(bytes.subarray(cut));
  req.end();
  assert.equal(await promise, '{"name":"Wanjiru é"}');
});

test("a body over the limit is refused with a 413 and nothing is kept or listened to afterwards", async () => {
  const req = fakeRequest();
  const promise = collectBodyText(req, 100);
  req.write(Buffer.alloc(60, 97));
  req.write(Buffer.alloc(60, 97));
  await assert.rejects(promise, error => error.httpStatus === 413 && error.userSafe === true);
  assert.equal(req.listenerCount("data"), 0, "the data handler is gone, so the rest of the upload is not collected");
  req.write(Buffer.alloc(10_000, 97)); // still arriving: discarded, must not throw
  req.end();
});

test("a declared length over the limit is refused before any of the body is read", async () => {
  const req = fakeRequest({ "content-length": "5000000" });
  await assert.rejects(collectBodyText(req, 1_000_000), error => error.httpStatus === 413);
  assert.equal(req.listenerCount("data"), 0);
});

test("a connection that drops half way is an error, not a promise that never ends", async () => {
  const req = fakeRequest();
  const promise = collectBodyText(req, 1000);
  req.write("{\"a\":");
  req.destroy();
  await assert.rejects(promise, error => error.httpStatus === 400);
});

test("over a real connection: a large streamed upload gets a 413 and the server keeps working", async () => {
  const server = http.createServer(async (req, res) => {
    try { const text = await collectBodyText(req, 10_000); res.end(String(text.length)); }
    catch (error) { res.writeHead(error.httpStatus || 500); res.end(); }
  });
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  try {
    const status = await new Promise((resolve, reject) => {
      const request = http.request({ host: "127.0.0.1", port, method: "POST", headers: { "transfer-encoding": "chunked" } }, response => { response.resume(); resolve(response.statusCode); });
      request.on("error", error => (error.code === "ECONNRESET" ? resolve(413) : reject(error)));
      for (let i = 0; i < 20; i += 1) request.write(Buffer.alloc(64 * 1024, 97));
      request.end();
    });
    assert.equal(status, 413);
    const ok = await new Promise(resolve => {
      const request = http.request({ host: "127.0.0.1", port, method: "POST" }, response => { let data = ""; response.on("data", chunk => { data += chunk; }); response.on("end", () => resolve(data)); });
      request.end("hello");
    });
    assert.equal(ok, "5");
  } finally { server.closeAllConnections?.(); server.close(); }
});
