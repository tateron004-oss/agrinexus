"use strict";

// Reads a request body as text with a hard size limit that is enforced WHILE reading.
//
// The two body readers in server.js used to append every chunk to one string and only reject the promise once the
// string passed the limit; they never stopped appending. A caller who simply kept sending (no sign-in needed: a
// sign-in, a password reset or any other POST reads its body first) made the server hold the whole upload in memory
// until the connection ended, and a body past the engine's maximum string length threw inside the stream's data
// handler, which nothing catches, so the whole server went down. Here the limit is checked on the declared length
// first, then on the bytes as they arrive; once it is passed the collected bytes are dropped, the handlers are
// removed (anything still arriving is discarded by the stream, not kept) and the promise is rejected with a
// "payload too large" fault the caller can answer with a 413.
//
// The result is decoded once, from whole bytes, so a multi-byte character (Kiswahili, accents) split between two
// network chunks is not corrupted.

function tooLarge(message, makeFault) {
  return makeFault(message, 413);
}

function collectBodyText(req, limitBytes, makeFault = (message, httpStatus) => Object.assign(new Error(message), { httpStatus, userSafe: true })) {
  return new Promise((resolve, reject) => {
    const declared = Number(req.headers?.["content-length"]);
    if (Number.isFinite(declared) && declared > limitBytes) {
      req.resume();
      return reject(tooLarge("Payload too large", makeFault));
    }
    let chunks = [];
    let size = 0;
    let settled = false;
    const finish = (fn, value) => {
      if (settled) return;
      settled = true;
      req.off("data", onData);
      req.off("end", onEnd);
      req.off("error", onError);
      req.off("aborted", onAborted);
      req.off("close", onClose);
      chunks = [];
      fn(value);
    };
    function onData(chunk) {
      size += chunk.length;
      if (size > limitBytes) {
        // Stop keeping anything. The stream keeps flowing so the rest is read and thrown away, which lets the 413 be sent.
        req.on("error", () => {});
        return finish(reject, tooLarge("Payload too large", makeFault));
      }
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    function onEnd() { finish(resolve, Buffer.concat(chunks).toString("utf8")); }
    function onError(error) { finish(reject, error); }
    function onAborted() { finish(reject, makeFault("Request ended before the body was complete", 400)); }
    function onClose() { if (!settled && !req.readableEnded) finish(reject, makeFault("Request ended before the body was complete", 400)); }
    req.on("data", onData);
    req.on("end", onEnd);
    req.on("error", onError);
    req.on("aborted", onAborted);
    req.on("close", onClose);
  });
}

module.exports = Object.freeze({ collectBodyText });
