"use strict";

// Step-by-step walkthroughs for two public relations tasks in pr-events-guide.js: planning a business event, and preparing a crisis statement. Like the other walkthroughs (us-walkthroughs.js, california-walkthroughs.js), Kyro
// shows ONE step at a time on the screen with its official page, reads it out, and the PERSON does each step; Kyro never sends, files, books or publishes for them. Each step says which part comes from an official page (the FTC, CDC,
// SBA or ADA pages read on the guide's CHECKED_ON date) and which part is Kyro's own working practice, so the person is never told something is official when it is not.
//
// prWalkthrough(id) -> { id, title, checkedOn, steps: [{ title, text, gather: [], link: { name, url } | null }], sources: [{ name, url }] } | null     (id: "event" or "crisis")

const { SOURCES, CHECKED_ON } = require("./pr-events-guide.js");

const W = (term, means) => ({ term, means }); // (a word the person will meet in a step, in plain words: a step may carry done: "..." and words: [W(term, meaning)])
const link = key => ({ name: SOURCES[key].name, url: SOURCES[key].url });

const WALKTHROUGHS = Object.freeze({
  event: {
    title: "Planning a business event",
    sources: ["sbaMarketing", "sbaLicenses", "adaCommunication", "adaIntro", "ftcInfluencers", "ftcAdvertising"],
    steps: [
      { title: "Decide what the event is for", text: "The SBA says a marketing plan starts with your target market and sets goals. Write down who you want to reach and one goal you can count, such as new customers, sign-ups or sales.", gather: ["Who you want to reach", "Your goal in one sentence, with a number"], link: link("sbaMarketing") },
      { title: "Set the budget", text: "The SBA says to set a budget as accurate as you can and keep tracking your costs. Decide the most you can spend, add a margin for surprises, and decide who approves spending.", gather: ["The most you can spend", "Who approves spending"], link: link("sbaMarketing") },
      { title: "Choose the date, the place and a backup", text: "This step is Kyro's own working practice, not an official page. Pick a date that does not clash with other local events or holidays, a place that fits the number of people you expect, and a backup date or indoor option in case of weather.", gather: ["The date and a backup date", "The place, and how many people it holds"], link: null },
      { title: "Ask your city or county about permits, and your insurer", text: "The SBA says the licenses and permits you need depend on your business activities and location, and that you may also need licenses from your county or city. Its page does not mention event permits, so call your city or county office and say what you plan, how many people you expect and where. Ask your own insurance company too. I cannot tell you what your city requires.", gather: ["What the city or county says you need", "What your insurer says"], link: link("sbaLicenses") },
      { title: "Plan for access", text: "The ADA.gov page says businesses and nonprofits open to the public must communicate effectively with people who have communication disabilities, and lists aids such as sign language interpreters, captioning and large print. Say on the invitation how to ask for these, with a name and contact. Whether the ADA applies to your event is a question for a lawyer or the ADA Information Line on ada.gov.", gather: ["How people can ask for an interpreter, captions or large print", "A contact name for requests"], link: link("adaCommunication") },
      { title: "Name who does what", text: "This step is Kyro's own working practice, not an official page. Choose one person in charge, one for guests, one for the program and one for safety, and write down who they are and how to reach them on the day.", gather: ["The person in charge", "Names and phone numbers for each role"], link: null },
      { title: "Invite and promote, honestly", text: "Start weeks ahead. The FTC says claims in advertisements must be truthful and evidence-based, and that if someone is paid or given free products to post about your event they must disclose it clearly, in the post itself. Keep every claim something you can prove.", gather: ["Your invitation and where it will be seen", "A list of anyone you are asking to post, and how they will disclose"], link: link("ftcInfluencers") },
      { title: "Write the run of show and a plan B", text: "This step is Kyro's own working practice, not an official page. Write a minute-by-minute schedule for the day with who does what, and a plan B for bad weather, no-shows, a late speaker and technology that fails.", gather: ["The schedule, minute by minute", "Your plan B"], link: null },
      { title: "After the event: thank, ask, count", text: "Thank guests and helpers, ask for feedback, and count the result against the goal you set. The SBA says to compare what a marketing effort cost with the revenue it brought in, and to review your plan at least once a year.", gather: ["The result against your goal", "What it cost", "What you will do differently"], link: link("sbaMarketing") }
    ]
  },
  crisis: {
    title: "Preparing a crisis statement",
    sources: ["cdcCercPrinciples", "cdcCercAbout", "cdcCercManual"],
    steps: [
      { title: "Make sure people are safe first", text: "If anyone is in danger, call your local emergency number before anything else. The CDC says giving people the information to keep them safe is the critical first step. Everything below can wait until people are safe.", gather: [], link: link("cdcCercPrinciples") },
      { title: "Get your facts straight", text: "The CDC says to state what is known and what is not known, because acknowledging the gaps helps prevent rumors. Write two short lists: what you know for certain, and what you do not know yet. Do not guess.", gather: ["What you know for certain", "What you do not know yet"], link: link("cdcCercPrinciples") },
      { title: "Choose one spokesperson and who approves", text: "The CDC says messaging must be consistent, because even small differences in wording can cause confusion or doubt, and that people trained as spokespersons should have answers prepared for anticipated questions. Choose one person to speak for the business and decide who approves a statement before it goes out.", gather: ["Your one spokesperson", "Who approves a statement"], link: link("cdcCercPrinciples") },
      { title: "Start with empathy", text: "The CDC says to express empathy within the first 30 seconds of addressing the public, and gives the example of acknowledging the fear or worry people feel. Write one sentence that says, in your own words, that you are sorry for how people are affected.", gather: ["One sentence of empathy, in your own words"], link: link("cdcCercPrinciples") },
      { title: "Say what you are doing and one thing people can do", text: "The CDC says action messages should be short and easy to remember. Write what you are doing about it, and one clear thing the people affected can do.", gather: ["What you are doing", "One clear step for the people affected"], link: link("cdcCercPrinciples") },
      { title: "Write the holding statement and send it yourself", text: "The CDC says to be first, because people tend to keep following their first source of information. This outline is Kyro's own adaptation, not an official page: We are aware of [what happened]. We are sorry for [who is affected]. Here is what we know: [facts]. Here is what we do not know yet: [gaps]. Here is what we are doing: [actions]. Here is what you can do: [one step]. We will update you by [time]. Contact: [name, phone]. I cannot send it for you: you send it, to your customers, staff and partners first, then to the press if you choose.", gather: ["Your statement, filled in", "The people you will tell first"], link: link("cdcCercAbout") },
      { title: "Keep your promise to update", text: "This step is Kyro's own working practice, not an official page. Update people when you said you would, even if there is nothing new, correct any mistake plainly as soon as you find it, and write down what you would do differently. A communications professional can help you with a serious crisis.", gather: ["The time of your next update", "Who will write it"], link: null }
    ]
  }
});

function prWalkthrough(id) {
  const def = WALKTHROUGHS[id];
  if (!def) return null;
  return { id: `pr-${id}`, title: def.title, checkedOn: CHECKED_ON, steps: def.steps.map(step => ({ title: step.title, text: step.text, gather: step.gather.slice(), done: step.done || null, words: (step.words || []).map(word => ({ term: word.term, means: word.means })), link: step.link })), sources: def.sources.map(key => link(key)) };
}

// The guide's topics that have a walkthrough
const WALK_OF_TOPIC = Object.freeze({ "event-planning": "event", "crisis-communication": "crisis" });

module.exports = Object.freeze({ WALKTHROUGHS, WALK_OF_TOPIC, prWalkthrough });
