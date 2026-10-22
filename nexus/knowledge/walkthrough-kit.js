"use strict";

// The common way to write a guide's step-by-step walkthroughs (asked for on 22 October 2026: "we are going to have to hold people's hands ... as a teacher this is how I would teach a process for those who will not have an
// instructor to help them, especially if they have never been exposed to the content before"). A walkthrough file only has to say WHAT each step is; this kit turns it into what the page shows and reads out, so every guide's
// walkthroughs look and behave the same:
//
//   S(title, text, gather, key, done, words)   one step
//       title   what the step is, in a few words            text    what to do and why, in plain words, from what the guide's official pages say (a step that is Kyro's own working practice says so: OWN)
//       gather  what to have in hand before the step         key     the guide's SOURCES key whose page says it, shown as the step's button (null for a step of Kyro's own working practice)
//       done    "You are finished with this step when ..."  so a person who has never done this knows when to stop and go on     words   [W(term, meaning)] the plain meaning of any word they will meet in the step
//   family({ prefix, label, SOURCES, CHECKED_ON, DEFS, topicOf }) -> { prefix, label, WALKTHROUGHS, WALK_OF_TOPIC, PHRASE_OF_TOPIC, walkthrough(id), walkthroughFor(text), topicOf }
//       DEFS    { id: { title, topic, phrase, us?, steps: [S(...)] } }     us: true when the steps are rules or programs of the United States (the plan carries the walkthrough only for a person in the United States context; anyone else gets the guide's ordinary answer)     topic: the guide's topic the walkthrough goes with       phrase: the words after "Walk me through ..." (the topic matcher must take them as that topic; a test checks)
//       label   the first part of the plan's knowledge label ("church-guide" in "church-guide:church-forming")

const OWN = "This step is Kyro's own working practice, not an official page. ";
const S = (title, text, gather, key, done, words) => ({ title, text, gather, key: key || null, done: done || null, words: Array.isArray(words) ? words : [] });
const W = (term, means) => ({ term, means });

function family({ prefix, label, SOURCES, CHECKED_ON, DEFS, topicOf }) {
  const link = key => {
    if (!SOURCES[key]) throw new Error(`${prefix}: no source "${key}"`);
    return { name: SOURCES[key].name, url: SOURCES[key].url };
  };
  const walkthrough = id => {
    const def = DEFS[id];
    if (!def) return null;
    const keys = [...new Set(def.steps.map(step => step.key).filter(Boolean))];
    return {
      id: `${prefix}-${id}`, title: def.title, checkedOn: CHECKED_ON, us: def.us === true,
      steps: def.steps.map(step => ({ title: step.title, text: step.text, gather: step.gather.slice(), done: step.done, words: step.words.map(word => ({ term: word.term, means: word.means })), link: step.key ? link(step.key) : null })),
      sources: keys.map(link)
    };
  };
  const WALK_OF_TOPIC = Object.freeze(Object.fromEntries(Object.entries(DEFS).map(([id, def]) => [def.topic, id])));
  const PHRASE_OF_TOPIC = Object.freeze(Object.fromEntries(Object.entries(DEFS).map(([, def]) => [def.topic, def.phrase])));
  // "Walk me through getting a church tax-exempt": the topic the words are about, and the walkthrough that goes with it
  const walkthroughFor = text => {
    const topic = typeof topicOf === "function" ? topicOf(text) : null;
    const id = topic ? WALK_OF_TOPIC[topic] : null;
    return id ? walkthrough(id) : null;
  };
  return Object.freeze({ prefix, label, WALKTHROUGHS: Object.freeze({ ...DEFS }), WALK_OF_TOPIC, PHRASE_OF_TOPIC, walkthrough, walkthroughFor, topicOf, CHECKED_ON, SOURCES });
}

module.exports = Object.freeze({ S, W, OWN, family });
