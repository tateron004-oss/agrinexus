"use strict";

// Where a CHILD can get help, in plain words, when a child tells Kyro that someone touched them, hurt them, or that they are pregnant, or asks how to tell a grown-up. It is not a guide and it gives no advice of its own: it says what the
// child hotlines' own pages say (tell a grown-up you trust, keep asking until someone helps, you do not have to keep it secret, it is not your fault), names the free hotlines with their numbers, says honestly what those hotlines may
// have to do, and says what Kyro is and is not (an app that cannot call anyone or keep the child safe). Kyro never asks the child questions about what happened, never decides whether abuse happened, and never promises a secret.
//
// Every statement was read from the pages in SOURCES on CHECKED_ON, so the wording must be compared with the pages and REVIEWED BY A CHILD PROTECTION SPECIALIST before this is relied on. English only for now.
// What the pages did NOT say is not here: what to do about the person (the pages say tell a grown-up, not confront), each country's reporting law, and how a hotline decides to share what it is told beyond what it says on its own page.
//
// childHelpAnswer(id, { us, country }) -> { topic, title, text, sources: [{ name, url }] } or null.   The matching of the child's words to a topic is in public/kyro-child-help.js.

const CHECKED_ON = "19 October 2026";

const SOURCES = Object.freeze({
  rainnKid: { name: "RAINN: I'm a kid and something happened", url: "https://rainn.org/for-survivors-of-child-sexual-abuse/im-a-kid-and-something-happened/" },
  rainnHotline: { name: "RAINN: National Sexual Assault Hotline", url: "https://rainn.org/help-and-healing/hotline/" },
  rainnTell: { name: "RAINN: how to tell someone", url: "https://rainn.org/overcoming-trauma-after-sexual-violence/how-to-tell-someone-you-were-sexually-assaulted/" },
  rainnMedical: { name: "RAINN: getting medical help", url: "https://rainn.org/help-and-healing/if-youve-been-assaulted/getting-medical-help-after-sexual-assault/" },
  childhelp: { name: "Childhelp National Child Abuse Hotline", url: "https://childhelphotline.org/" },
  whoAdolescentPregnancy: { name: "WHO: adolescent pregnancy fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/adolescent-pregnancy" },
  childlineKenya: { name: "Childline Kenya: the child helpline 116", url: "https://www.childlinekenya.co.ke/" },
  childHelplineDirectory: { name: "Child Helpline International: find your local child helpline", url: "https://www.childhelplineinternational.org/helplines/" }
});

const NOT_YOUR_FAULT = "I'm really glad you told me. You are not in trouble, and it is not your fault.";
const AN_APP = "I am an app, so I cannot call anyone for you and I cannot keep you safe by myself.";
const TELL_A_GROWN_UP = "Please tell a grown-up you trust, like a parent, a teacher, a school nurse or a doctor. If that person does not help, tell a different grown-up. Keep asking until someone helps you.";
const NO_SECRET = "You do not have to keep it a secret.";
const CLOSE_SCREEN = "If someone might see this screen, you can close it when you are done.";

// The hotlines, by place. The United States lines are from Childhelp's and RAINN's own pages; Kenya's is Childline Kenya's own page. Anywhere else: the directory of child helplines by country.
const US_LINES = "If someone is hurting you right now, or you are in danger, call 911. You can also talk to someone who is trained to help, for free, any time of day or night. Childhelp: call or text 1-800-422-4453, or chat at childhelphotline.org. RAINN: call 800-656-4673, text HOPE to 64673, or chat at rainn.org/hotline. They will not ask for your name. If you do tell them your name and where you are, they may have to tell the authorities so that a child can be kept safe.";
const KENYA_LINES = "If someone is hurting you right now, or you are in danger, call 999 or 112. You can also call Childline Kenya on 116. It is free from a mobile phone and open all day and night. Children can call it, and you do not have to tell them your name.";
const OTHER_LINES = "If someone is hurting you right now, or you are in danger, call your local emergency number. Many countries have a free child helpline you can call. Child Helpline International lists them by country: open the link below, choose your country, and call the number you find there.";

const TOPICS = Object.freeze({
  "child-hurt": {
    title: "If someone touched you or hurt you",
    sources: { us: ["rainnKid", "childhelp", "rainnHotline", "rainnMedical"], kenya: ["rainnKid", "childlineKenya"], other: ["rainnKid", "childHelplineDirectory"] },
    lead: `${NOT_YOUR_FAULT} ${NO_SECRET} ${AN_APP} ${TELL_A_GROWN_UP}`,
    medical: " A doctor or nurse can check that you are healthy and safe, and it is okay to ask for that. RAINN says a doctor can check for injuries, infections and pregnancy."
  },
  "child-pregnant": {
    title: "If you are pregnant",
    sources: { us: ["rainnKid", "childhelp", "rainnHotline", "whoAdolescentPregnancy"], kenya: ["rainnKid", "childlineKenya", "whoAdolescentPregnancy"], other: ["rainnKid", "childHelplineDirectory", "whoAdolescentPregnancy"] },
    lead: `I'm really glad you told me. You are not in trouble, and you do not have to face this alone. ${AN_APP} ${TELL_A_GROWN_UP} Please see a doctor, nurse or clinic as soon as you can. WHO says adolescent mothers face higher health risks than older women, so they need care. If anyone made you, pressured you, or took advantage of you, that is not your fault, and you can tell the people below.`,
    medical: ""
  },
  "child-tell": {
    title: "How to tell a grown-up",
    sources: { us: ["rainnKid", "rainnTell", "childhelp", "rainnHotline"], kenya: ["rainnKid", "rainnTell", "childlineKenya"], other: ["rainnKid", "rainnTell", "childHelplineDirectory"] },
    lead: `It is brave to want to tell someone. ${NO_SECRET} ${AN_APP} ${TELL_A_GROWN_UP} You can start with: I have something hard to tell you. Please just listen. You do not have to say everything at once, and if they ask a question you do not want to answer, you can say you do not feel ready to say more. RAINN says you are not responsible for how someone reacts. If you think a person might get angry, you can tell them with someone else beside you. If you are not sure who to tell, or you are afraid, call one of the helplines below first. They can help you plan.`,
    medical: ""
  }
});

const CLOSING = "I am not a doctor, a counsellor or the police, and I cannot check what happened. This is general help from official pages, and it does not replace a real person.";

function childHelpAnswer(id, { us = true, country = null } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const place = us ? "us" : (country === "ke" ? "kenya" : "other");
  const lines = place === "us" ? US_LINES : (place === "kenya" ? KENYA_LINES : OTHER_LINES);
  const sources = topic.sources[place].map(key => SOURCES[key]);
  const body = `${topic.lead}${topic.medical && place === "us" ? topic.medical : ""} ${lines} ${CLOSE_SCREEN}`;
  const cited = ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).`;
  return { topic: id, title: topic.title, text: `${body}${cited} ${CLOSING}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, SOURCES, TOPICS, childHelpAnswer });
