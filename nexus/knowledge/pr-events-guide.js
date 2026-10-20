"use strict";

// A checked guide for small business owners who do their own PUBLIC RELATIONS and EVENTS, or who are about to hire a PR or event firm: what Kyro can and cannot do, writing a press release and working with the media, influencer disclosure,
// the Federal Trade Commission's advertising rules, a crisis communication plan, planning an event, event permits, making an event accessible, brand, stakeholders, measuring results, and what to put in a brief to a PR or event firm.
// It was asked for by the owner, after a friend's PR and event production firm described its services, as a way to offer the basics to the small businesses Kyro serves and to prepare them to hire a firm for the bigger work.
//
// What is an official fact and what is Kyro's own: every statement of a rule or a practice was read from the pages in SOURCES on CHECKED_ON (the FTC, the CDC, the SBA, the ADA) and says so. The press release outline, the event
// checklist, the holding statement and the brief are KYRO'S OWN starting templates and each is labelled as one, because no official page gives them. The CDC's crisis communication principles were written for public health
// emergencies; the guide says so and calls the business version Kyro's adaptation. Event permits are not covered by the SBA page: the guide says that and sends the person to their city or county.
// It must be REVIEWED by a communications professional before it is relied on. Kyro does not send anything to the media, run an event, or sign anyone up with a firm.
//
// prEventsAnswer(id) -> { topic, title, text, sources: [{ name, url }] } or null.   The matching of a question to a topic is in public/kyro-pr-topics.js.

const CHECKED_ON = "20 October 2026";

const SOURCES = Object.freeze({
  ftcAdvertising: { name: "FTC: advertising and marketing basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing" },
  ftcInfluencers: { name: "FTC: disclosures 101 for social media influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
  ftcReviews: { name: "FTC: the consumer reviews and testimonials rule, questions and answers", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" },
  cdcCercAbout: { name: "CDC: crisis and emergency risk communication (CERC)", url: "https://www.cdc.gov/cerc/php/about/index.html" },
  cdcCercManual: { name: "CDC: the CERC manual", url: "https://www.cdc.gov/cerc/php/cerc-manual/index.html" },
  cdcCercPrinciples: { name: "CDC: the six CERC principles", url: "https://www.cdc.gov/radiation-emergencies/php/communication-resources/cerc-rad.html" },
  sbaMarketing: { name: "SBA: marketing and sales", url: "https://www.sba.gov/counseling/manage-your-business/#marketing-and-sales" },
  sbaLicenses: { name: "SBA: apply for licenses and permits", url: "https://www.sba.gov/counseling/launch-your-business/#licenses-permits" },
  adaIntro: { name: "ADA.gov: introduction to the ADA", url: "https://www.ada.gov/topics/intro-to-ada/" },
  adaCommunication: { name: "ADA.gov: effective communication", url: "https://www.ada.gov/topics/effective-communication/" }
});

const OWN_TEMPLATE = "This outline is Kyro's own starting template; no official page gives one.";

const TOPICS = Object.freeze({
  "pr-overview": {
    title: "What Kyro can do for public relations and events",
    sources: ["sbaMarketing", "ftcAdvertising", "cdcCercAbout"],
    text: "I can help with the planning side of public relations and events, and I can point you to the official rules. I can explain a press release and a media list and give you a starting outline, help you plan an event step by step, explain the Federal Trade Commission's rules for advertising, influencer posts and reviews, help you prepare for a crisis using the CDC's crisis communication principles, help you make an event accessible, and help you write a brief to give a PR or event firm. I cannot send anything to the media, run your event, keep a media distribution list, or replace a professional. Media relations, signature events and outreach to a list of reporters are work for people, and I can help you decide what to ask them for. Ask me, for example: how do I write a press release; how do I plan an event; what are the rules for influencer posts; how do I handle a crisis; how do I hire a PR firm."
  },
  "press-release": {
    title: "Press releases and working with the media",
    sources: ["cdcCercManual", "ftcAdvertising"],
    text: `A press release is a short announcement you send to reporters so they can decide whether to cover your news. ${OWN_TEMPLATE} Headline: one line that says the news, not the company's slogan. First paragraph: who, what, when, where and why, in plain words. Second paragraph: why it matters to the reader. One short quote from a named person. The details: date, time, place, how to attend or buy. A short paragraph about your business. A contact name, phone number and email. End with three number signs. Keep it to one page, send it to the reporter who covers this kind of news rather than to everyone, and offer a photo or an interview. A media list is simply the reporters, editors and outlets that cover your kind of news, with the person's name, outlet, email and what they have covered before; build it yourself from what each outlet publishes. The CDC's crisis communication manual has a chapter on working with the media, which describes the media's role in a crisis and practices for building good relationships with the media. The FTC says claims in advertisements must be truthful, not deceptive or unfair, and evidence-based, so keep every claim in a release something you can prove. I cannot send a release for you or keep a distribution list.`
  },
  "influencer-disclosure": {
    title: "Influencer and sponsored posts: what must be disclosed",
    sources: ["ftcInfluencers", "ftcAdvertising"],
    text: "The FTC says that if you endorse a product on social media, your message should make it obvious when you have a relationship with the brand. That includes a personal, family or employment relationship, or a financial one: the brand paying you, or giving you free or discounted products or services. Disclose even if you were not asked to mention that product, and even if you think your opinion is unbiased. Place the disclosure with the endorsement and where it is hard to miss: disclosures are likely to be missed on a profile page, at the end of a post, or behind a MORE link, or mixed into a group of hashtags. In a video, put it in the video and not only in the description, in both audio and picture if you can; in a live stream, repeat it periodically. Use simple, clear words such as ad, advertisement or sponsored, or a plain sentence like thanks to the brand for the free product. Avoid vague terms such as sp, spon, collab, or a stand-alone thanks or ambassador. Say it in the same language as the endorsement. You cannot talk about a product you have not tried, and if you are paid to talk about a product you thought was terrible you cannot say it is terrific. The FTC says the influencer is responsible for making the disclosure and should not rely on others to do it, and its Endorsement Guides apply to advertisers as well. This is the FTC's guidance for the United States, not legal advice."
  },
  "ad-rules": {
    title: "The rules for advertising claims",
    sources: ["ftcAdvertising", "ftcReviews"],
    text: "The FTC says that under the law, claims in advertisements must be truthful, cannot be deceptive or unfair, and must be evidence-based; for some products and services additional rules apply. Its advertising and marketing page points to specific rules for: advertising to children; endorsements, influencers and reviews; environmental or green claims, which need competent and reliable scientific evidence; health claims, which need solid proof, especially for food, over-the-counter drugs and dietary supplements; Made in USA claims; online advertising; and telemarketing, including the National Do Not Call Registry. The FTC's rule on consumer reviews and testimonials took effect on 21 October 2024. The FTC says advertising agencies and public relations firms are not immune: they can be liable if they write, create or sell a fake review or testimonial, if they pay or reward people on condition that they write reviews with a particular sentiment, if they suppress reviews, or if they misuse fake indicators of social media influence. Keep the proof for every claim you make, and ask your PR firm how they get reviews and testimonials. This is general information from the FTC, not legal advice; for a specific ad, ask a lawyer."
  },
  "crisis-communication": {
    title: "Preparing for a crisis: what to say and how",
    sources: ["cdcCercPrinciples", "cdcCercAbout", "cdcCercManual"],
    text: `The CDC's crisis and emergency risk communication program was written for public health emergencies, not for businesses; here is what it teaches, and then Kyro's adaptation for a business. The CDC's six principles: be first, because people tend to keep following their first source of information, so get your fact-based message out first; be right, which means stating what is known and what is not known, because acknowledging gaps helps prevent rumors, and using plain language so you are understood; be credible, with messages that are consistent, and technical experts trained to act as spokespersons with answers prepared for anticipated questions; express empathy, within the first 30 seconds of addressing the public; promote action, with short, easy-to-remember actions; and show respect, never dismissing or mocking a person's questions. The CDC also says to start now with a communication plan with key messages, and to plan for alternatives if your usual channels are not working. Kyro's own adaptation for a business, not an official page: decide now who the one spokesperson is and who approves statements; keep a list of the people you must tell first, such as customers, staff, partners and regulators; and write a holding statement you can send within the hour. A starting holding statement: We are aware of [what happened]. We are sorry for [who is affected] and we take it seriously. Here is what we know: [facts]. Here is what we do not know yet: [gaps]. Here is what we are doing: [actions]. Here is what you can do: [one clear step]. We will update you by [time]. Contact: [name, phone]. Never say anything that is not true, and do not guess. If someone is in danger, call your local emergency number first.`
  },
  "event-planning": {
    title: "Planning a business event step by step",
    sources: ["sbaMarketing", "sbaLicenses", "adaCommunication"],
    text: `A business event is a marketing action, so start the way the SBA says a marketing plan starts: know your target audience, set a goal for what the event should achieve, set a budget as accurate as you can and keep tracking it, and measure the result afterwards by comparing what it cost with what it brought in. The rest is Kyro's own starting checklist, not an official page. 1. Purpose, audience and one measurable goal. 2. Date, venue and capacity. 3. Budget, with a margin for surprises. 4. Permits and insurance: ask your city or county, and your insurance company, early. 5. Accessibility: plan it from the start. 6. Team and roles: one person in charge, one for guests, one for the program, one for safety. 7. Invitations and promotion, starting weeks ahead. 8. A run of show: a minute-by-minute schedule for the day, with who does what. 9. A plan B for weather, no-shows, late speakers and technology failures. 10. After the event: thank guests, collect feedback, count results against your goal. For a large or signature event, a professional event producer is worth considering; I can help you write a brief for one.`
  },
  "event-permits": {
    title: "Permits for an event",
    sources: ["sbaLicenses"],
    text: "The SBA's page on licenses and permits says the licenses and permits you need depend on your business activities and location, that you may also need licenses from your county or city as well as state ones, that some licenses and permits expire so you should track renewal dates closely, and that you should research your state, county and city rules and visit your Secretary of State's website. That page does not mention event permits. There is no single national event permit: what an event needs is usually decided locally, so call your city or county office and say what you plan, how many people you expect, where, and whether you will have food, amplified sound or a road or space closure, and ask what permits and insurance they require. Ask your own insurance company too. I cannot tell you what your city requires."
  },
  "event-accessibility": {
    title: "Making an event accessible",
    sources: ["adaCommunication", "adaIntro"],
    text: "The ADA is a federal civil rights law that prohibits discrimination against people with disabilities in everyday activities. The ADA.gov page says it covers businesses and nonprofits open to the public, and that they must communicate effectively with people who have communication disabilities. Aids and services it lists include American Sign Language interpreters, video remote interpreting, notetakers, large print materials, captioning, and accessible electronic information. Which one is right depends on the situation: the nature, length and complexity of the communication and the person's usual way of communicating. Businesses and nonprofits open to the public should work with the person to choose an appropriate aid when possible. The page says an organization may ask for requests a reasonable time in advance but must still help walk-in requests as best it can, that a person cannot be required to bring their own interpreter, and that aids are not required if they would cause an undue burden, meaning a significant difficulty or expense, or would fundamentally change what you provide; in that case, offer an alternative if possible. For an event: say on the invitation how to ask for an interpreter, captioning, large print or an accessible document, give a name and contact, and plan the venue so people can get in and move around. Whether the ADA applies to your event, and what your venue must do, is a question for a lawyer or the ADA Information Line on ada.gov."
  },
  "hire-pr-firm": {
    title: "Hiring a PR or event firm: what to ask and what to put in a brief",
    sources: ["sbaMarketing", "ftcReviews", "ftcAdvertising"],
    text: `Before you talk to a firm, write a brief. This is Kyro's own starting list, not an official page. Your goal: what should change because of this work, in one sentence, and how you will know. Your audience: who you need to reach. Your message: the one thing you want them to know. Your budget: a range, and who approves spending. Your timeline: dates that cannot move. What has been done already, and what worked. Who decides, and who approves anything that goes out. What you do not want. Needs such as languages and accessibility. The SBA says a marketing plan should set goals, a budget, and a way to measure and update; ask the firm how it will measure results and report them. Questions to ask: who will actually do the work, examples of similar work and people you can call, what is and is not included, how fees and expenses are charged, how they get media coverage or reviews, and what happens if the work is not delivered. The FTC says advertising agencies and public relations firms can be liable for fake reviews and testimonials, so ask how they will get any reviews or testimonials, and keep a written agreement. I can ask you the questions and save the brief as a document you can edit and send: say "write my PR brief". I cannot choose a firm for you or sign you up with one.`
  },
  "measure-results": {
    title: "Measuring whether PR and events worked",
    sources: ["sbaMarketing"],
    text: "The SBA says to set marketing and sales goals for the next year, and to measure and update your plan: compare your marketing and sales costs with the revenue they generate to see what is working and the return on your spending. It notes that some tactics, such as print advertising or word of mouth, are hard to measure, and says to review the plan on an annual basis at minimum. For PR and events, the same idea in Kyro's own words: before you start, write the one number you want to move, such as new customers, sign-ups, sales or attendees; ask every new customer how they heard about you and write it down; keep a record of every piece of coverage and every invitation sent; and after each effort compare what it cost with what it brought in."
  },
  "stakeholder-engagement": {
    title: "Engaging the people your business affects",
    sources: ["cdcCercManual", "cdcCercAbout"],
    text: "The CDC's crisis communication manual has a chapter on community engagement, which describes how to identify and engage with the communities affected by a crisis and promote their active participation, and a chapter on messages and audiences, which describes ways to consider your audiences' needs and tailor messages for different audiences. Those chapters are written for public health emergencies; here is Kyro's own adaptation for a business, not an official page. List everyone your business affects or depends on: customers, staff, neighbors, suppliers, partners, funders, local officials and the press. For each, write what they care about, how they prefer to hear from you, and who in your business is their contact. Tell the same facts to every group in words that suit them, and tell the people closest to you before you tell the public."
  },
  "brand-strategy": {
    title: "Brand strategy: the basics",
    sources: ["sbaMarketing", "ftcAdvertising"],
    text: "The SBA's marketing plan starts with your target market, which is the size, demographics and traits of your audience and the trends that affect them, and your competitive advantage, which is what sets you apart, such as a better product, a lower price or the customer experience. That is the core of a brand. Kyro's own simple outline, not an official page: who you serve; what you promise them; why you are different; the three words you want people to use about you; how you sound; and proof, meaning the facts and results behind the promise. The FTC says claims must be truthful and evidence-based, so build your brand on promises you can keep and prove. For being found, ask me about marketing and getting seen. A brand strategy for a larger business is work for a professional, and I can help you write the brief for one."
  }
});

const CLOSING = "This is general information, not legal advice, and it does not replace a communications professional or a lawyer. Rules change, so confirm on the official pages.";

function prEventsAnswer(id) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const sources = topic.sources.map(key => SOURCES[key]);
  const cited = ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).`;
  return { topic: id, title: topic.title, text: `${topic.text}${cited} ${CLOSING}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, SOURCES, TOPICS, prEventsAnswer });
