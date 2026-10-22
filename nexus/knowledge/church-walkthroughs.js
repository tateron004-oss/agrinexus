"use strict";

// Step-by-step walkthroughs for churches and houses of worship (nexus/knowledge/church-guide.js). Like the other walkthroughs, Kyro shows ONE step at a time with its official page and reads it out, and the PERSON does each step; Kyro never files,
// applies, signs, pays or submits for them. Every step is a fact the guide already states from the official pages it cites (read on the guide's CHECKED_ON date), with the page that says it as the step's link; a step that is
// Kyro's own working practice says so (OWN). What the pages do not say is not here. See walkthrough-kit.js for how a step is written, and guide-walkthroughs.js for how the walkthroughs are found.

const { SOURCES, CHECKED_ON } = require("./church-guide.js");
const { churchTopic } = require("../../public/kyro-church-topics.js");
const { S, W, OWN, family } = require("./walkthrough-kit.js");

const DEFS = {
  // the model every other walkthrough follows: plain words, why each step matters, what to have ready, how the person knows the step is finished, what the new words mean, and an official page for the step (or a plain statement that it is Kyro's own practice)
  "setting-up": {
    title: "Setting up a church and finding out what it must do",
    topic: "church-register", phrase: "setting up and registering a church", us: true,
    steps: [
      S("Keep two questions apart", "Setting up a church involves two different questions. One is tax: does the church pay income tax? The other is legal: what kind of organization is it, and does your state want it registered? The IRS answers the first. Your state answers the second. Take them one at a time.", ["Paper and a pen to write each question at the top of a page"], "irsChurchStatus", "you have written both questions, tax and legal, at the top of two separate pages.", [W("Tax exempt", "not required to pay income tax."), W("Legal organization", "the form your church takes under your state's law, for example a nonprofit corporation.")]),
      S("Know what the IRS says about tax", "The IRS says a church that meets the section 501(c)(3) rules is automatically treated as tax exempt and does not have to apply to the IRS to be exempt. That is the IRS's rule for churches. Many people think they must apply, and the IRS page says they need not.", ["The IRS page, open to read"], "irsNotRequired1023", "you can say in your own words that a church does not have to apply to the IRS to be tax exempt.", [W("501(c)(3)", "the part of the tax law that describes charities and churches that are exempt from income tax.")]),
      S("Ask your state about the legal side", "Whether and how to form a nonprofit corporation or another legal organization is decided by your state. I have not read a state page about churches in particular, so I will not say what your state requires. If you tell me your state and ask how to start a nonprofit there, I can read you what that state's official page says.", ["The name of your state"], "irsStateSolicit", "you know which state office to ask, or you have asked me what your state's page says about nonprofit corporations.", [W("Nonprofit corporation", "a legal organization, set up under state law, that does not exist to make money for its owners.")]),
      S("Get an employer identification number if you need one", "The IRS says you can get an employer identification number, called an EIN, directly from the IRS in minutes, for free, and that you never have to pay a fee for one. Be careful of websites that charge for it. The IRS page does not say whether a church must have an EIN, so ask the IRS or a tax professional if you are not sure you need one.", ["The IRS page for an EIN", "The church's legal name and address"], "irsEin", "you know whether you need an EIN, and if you do, you got it from the IRS and paid nothing.", [W("EIN", "employer identification number: a nine-digit number the IRS gives an organization, a bit like a social security number for the church.")]),
      S("Ask about raising money and property tax", "Raising money from the public, and property tax, are state and county matters. The IRS page on state charitable solicitation points to each state's rules. I have not read whether your state exempts churches from either, so ask your state's charity office or your county assessor. " + OWN + "Write down the name and phone number of whoever you ask, and the date.", ["A pen and paper for names, numbers and dates"], "irsStateSolicit", "you have called or written to your state's charity office and your county assessor and noted what each said.", [W("Assessor", "the county office that decides what your property is worth for tax.")])
    ]
  }
};

module.exports = family({ prefix: "church", label: "church-guide", SOURCES: SOURCES, CHECKED_ON, DEFS, topicOf: churchTopic });
