"use strict";
// Flyers, newsletters and emails WITH PICTURES (5 November 2026: "i want kyro to be able to create newsletters, emails and flyers with images"). The pictures come from the person's own uploads (a logo, a photo) or are found on the open web and
// fetched on the server with a credit; the document card shows them, says plainly that found pictures belong to their owners, and offers Add a picture / Add my logo and the other file types.
// Everything is SAID (the request is a spoken sentence) and saved to the throwaway guest account only. The picture is found on the web, so it takes a few seconds after the card appears: the previews are waited for, not looked for at once.
// A guest has uploaded nothing, so "with my logo" must say so and offer the button, and never pretend a logo is in the file.
module.exports = Object.freeze([
  { id: "picture-flyer-with-found-picture", area: "documents", writes: true, say: "Make me a flyer for my bake sale on Saturday at ten at the church hall with a picture of fresh bread.", timeoutMs: 120000,
    expect: { screen: "document", text: "BAKE SALE", notText: "picture of|placeholders|SHOW:", download: true, buttons: ["Add a picture", "Add my logo", "PDF"] },
    then: [{ expect: { screen: "document", images: 1, text: "Picture: .*\\n?[\\s\\S]*belong to their owners|belong to their owners", notText: "could not find a good picture" }, timeoutMs: 90000 }] },
  { id: "picture-newsletter-with-found-picture", area: "documents", writes: true, say: "Create a newsletter for the church with a picture of the church building.", timeoutMs: 120000,
    expect: { screen: "document", text: "CHURCH|Church", download: true },
    then: [{ expect: { screen: "document", images: 1, text: "belong to their owners" }, timeoutMs: 90000 }] },
  { id: "picture-email-with-my-logo-says-so", area: "documents", writes: true, say: "Write a promotional email for my bakery with my logo.", timeoutMs: 120000,
    expect: { screen: "document", text: "Subject", notText: "logo (?:is|was) (?:added|in)", buttons: ["Add my logo", "PDF"] },
    then: [{ expect: { screen: "document", text: "do not have a logo from you yet", images: 0, notText: "belong to their owners" }, timeoutMs: 30000 }] },
  { id: "picture-email-as-a-web-page", area: "documents", writes: true, say: "Write a promotional email for my bakery as a web page.", timeoutMs: 120000,
    expect: { screen: "document", text: "Subject", download: true, buttons: ["Word", "PDF"] },
    then: [{ expect: { screen: "document", text: "copy it, and paste it into your email" }, timeoutMs: 30000 }] },
  { id: "picture-added-to-the-open-document", area: "documents", writes: true, say: "Make me a poster for the community clean-up on Saturday at nine at the park.", timeoutMs: 120000, expect: { screen: "document", text: "CLEAN.?UP|Clean.?up", download: true },
    then: [{ say: "Add a picture of a broom to the poster.", timeoutMs: 120000, expect: { screen: "document", text: "CLEAN.?UP|Clean.?up", download: true } },
      { expect: { screen: "document", images: 1, text: "belong to their owners" }, timeoutMs: 90000 }] }
]);
