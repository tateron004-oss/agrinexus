"use strict";
// Social posts, ads and website pages (phase 2 of the small-business assistant team, 5 November 2026), SAID, and saved to the throwaway guest account only. Each is a real designed document on the screen with the file buttons,
// made from the person's own words: no place, price or claim they did not say.
module.exports = Object.freeze([
  { id: "mk-facebook-post", area: "marketing", writes: true, say: "Write a Facebook post for my salon opening on Saturday.", timeoutMs: 120000,
    expect: { screen: "document", text: "SALON OPENING", notText: "placeholders|SHOW:|picture of", download: true, buttons: ["PDF"] } },
  { id: "mk-instagram-post-with-details", area: "marketing", writes: true, say: "Make an Instagram post for my bake sale on Saturday at ten at the church hall.", timeoutMs: 120000,
    expect: { screen: "document", text: "BAKE SALE[\\s\\S]*Saturday at ten[\\s\\S]*church hall", notText: "placeholders|SHOW:", download: true } },
  { id: "mk-ad", area: "marketing", writes: true, say: "Make an ad for my bakery.", timeoutMs: 120000,
    expect: { screen: "document", text: "BAKERY", notText: "placeholders|SHOW:", download: true, buttons: ["PDF"] } },
  { id: "mk-website-page", area: "marketing", writes: true, say: "Write the website page for my catering business.", timeoutMs: 120000,
    expect: { screen: "document", text: "About us[\\s\\S]*What we offer[\\s\\S]*Contact us", notText: "placeholders|SHOW:", download: true } },
  { id: "mk-post-with-picture", area: "marketing", writes: true, say: "Write a Facebook post for my bake sale on Saturday with a picture of fresh bread.", timeoutMs: 120000,
    expect: { screen: "document", text: "BAKE SALE", notText: "picture of|placeholders|SHOW:", download: true },
    then: [{ expect: { screen: "document", images: 1, text: "belong to their owners" }, timeoutMs: 90000 }] }
]);
