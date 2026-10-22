"use strict";
// An athlete's questions, answered from the checked guide (nexus/knowledge/athlete-guide.js). Each must put its official sources and the date checked on the screen, and the key fact for the topic. They change nothing on the account.
const strict = (id, say, key) => ({ id: `ath-${id}`, area: "athletes", say, timeoutMs: 45000, expect: { screen: ["text", "list"], text: key, notText: "I cannot find|not sure what you" } });

module.exports = Object.freeze([
  strict("overview", "What can you do for athletes?", "I diagnose nothing"),
  strict("nutrition", "What should I eat before and after a hard training session?", "one to four hours"),
  strict("energy", "How do I know if I am not eating enough for my training?", "RED-S"),
  strict("supplements", "Is creatine allowed for college athletes?", "785-2000"),
  strict("training", "How much should a teenager lift?", "unsupervised home equipment"),
  strict("recovery", "My hamstring tightened up during sprints, what should I do?", "20 minutes at a time"),
  strict("concussion", "What are the signs of a concussion in a football player?", "one pupil larger"),
  strict("heat", "How do I stay safe running in the heat?", "cool first and transport second"),
  strict("mental", "I am a high school athlete and the pressure is getting to me", "988"),
  strict("safesport", "How do I report a coach who touches players inappropriately?", "833-587-7233"),
  strict("eligibility", "What is the NCAA Eligibility Center?", "$85"),
  strict("nil", "I am a college athlete, can I take a sponsorship deal?", "valid business purpose"),
  strict("agent", "How do I choose a sports agent and what should be in the contract?", "Sports Agent Responsibility and Trust Act"),
  strict("taxes", "I am a pro athlete, how do taxes work when I play games in other states?", "$2,000"),
  strict("brand", "Help me build my personal brand as an athlete", "#ad"),
  strict("business", "I want to start a training academy for young athletes. Where do I start?", "EIN"),
  strict("club", "I manage a youth soccer club. How do I handle registration and fees?", "liability waivers"),
  strict("money", "What happens to my money and career after I stop playing?", "emergency")
]);
