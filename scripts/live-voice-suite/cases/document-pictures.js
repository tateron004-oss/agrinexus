"use strict";
// Flyers, newsletters and emails WITH PICTURES (5 November 2026: "i want kyro to be able to create newsletters, emails and flyers with images"). The pictures come from the person's own uploads (a logo, a photo) or are found on the open web and
// fetched on the server with a credit; the document card shows them, says plainly that found pictures belong to their owners, and offers Add a picture / Add my logo and the other file types.
// Everything is SAID (the request is a spoken sentence) and saved to the throwaway guest account only. The picture is found on the web, so it takes a few seconds after the card appears: the previews are waited for, not looked for at once.
// A guest has uploaded nothing, so "with my logo" must say so and offer the button, and never pretend a logo is in the file.
module.exports = Object.freeze([
  { id: "picture-flyer-with-found-picture", area: "documents", writes: true, say: "Make me a flyer for my bake sale on Saturday at ten at the church hall with a picture of fresh bread.", timeoutMs: 120000,
    expect: { screen: "document", text: "BAKE SALE", notText: "picture of|placeholders|SHOW:", download: true, buttons: ["Add a picture", "Add my logo", "PDF"] },
    then: [{ expect: { screen: "document", images: 1, text: "Picture: .*\\n?[\\s\\S]*belong to their owners|belong to their owners", notText: "could not find a good picture" }, timeoutMs: 90000 }] },
  // a drawn picture (7 November 2026): with the Cloudflare settings it is drawn and labelled as drawn by a computer; without them the flyer is still made and the person is told plainly
  { id: "picture-flyer-drawn", area: "documents", writes: true, say: "Make me a flyer for my bake sale on Saturday at ten at the church hall with an illustration of fresh bread.", timeoutMs: 120000,
    expect: { screen: "document", text: "BAKE SALE", notText: "illustration of|placeholders|SHOW:", download: true },
    then: [{ expect: { screen: "document", text: "drawn by a computer|cannot draw pictures yet" }, timeoutMs: 90000 }] },
  // a slideshow video of the flyer (7 November 2026): said aloud, made on this device from its words and pictures, with the pictures' credits on the last slide
  { id: "video-flyer-slideshow", area: "documents", writes: true, say: "Make me a flyer for my bake sale on Saturday at ten at the church hall with a picture of fresh bread.", timeoutMs: 120000,
    expect: { screen: "document", text: "BAKE SALE", download: true },
    then: [{ say: "Make a video of it.", timeoutMs: 60000, expect: { screen: "document", text: "Making the video|Your video is ready|cannot make a video" } },
      { expect: { screen: "document", text: "Your video is ready", notText: "could not be made" }, timeoutMs: 90000 }] },
  // drawn pictures that are refused, a picture added to a flyer that is already open, and a video asked for with nothing open (7 November 2026)
  { id: "picture-draw-real-person-refused", area: "documents", writes: true, say: "Make me a flyer for the school fair on Friday at the school hall with an illustration of the president.", timeoutMs: 120000,
    expect: { screen: "document", text: "SCHOOL FAIR", download: true },
    then: [{ expect: { screen: "document", text: "do not draw real people", notText: "drawn by a computer" }, timeoutMs: 60000 }] },
  { id: "picture-draw-harmful-refused", area: "documents", writes: true, say: "Make me a flyer for the party on Saturday at the community hall with an illustration of a gun.", timeoutMs: 120000,
    expect: { screen: "document", text: "PARTY", download: true },
    then: [{ expect: { screen: "document", text: "do not draw that", notText: "drawn by a computer" }, timeoutMs: 60000 }] },
  { id: "picture-add-to-open-flyer", area: "documents", writes: true, say: "Make me a flyer for my bake sale on Saturday at ten at the church hall.", timeoutMs: 120000,
    expect: { screen: "document", text: "BAKE SALE", download: true },
    then: [{ say: "Add a picture of fresh bread to the flyer.", timeoutMs: 90000, expect: { screen: "document", images: 1, text: "Picture:" } }] },
  { id: "video-with-nothing-open", area: "documents", say: "Make a video of it.", timeoutMs: 45000, expect: { said: "slideshow video|make one first|flyer" } },
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
