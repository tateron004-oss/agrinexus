"use strict";

// Koach Learn course: Non Profits -> "AI for Social Impact Storytelling" (bonus course). Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-ai-impact-storytelling",
  category: "Non Profits",
  name: "AI for Social Impact Storytelling",
  skills: "Getting informed consent, Gathering a story with dignity, Shaping a story with a simple structure, Adding honest numbers, Using AI to draft and adapt stories, Checking stories for truth and respect",
  outcome: "get written consent from a person your program serves, shape their story with a simple structure and one honest number, use an AI assistant to draft and adapt it for a newsletter, a social post and a grant report, and check it for truth and dignity before you share it.",
  about: [
    "This course is for nonprofit and faith-based staff, volunteers and leaders who share the difference their work makes with donors, funders, members and the public.",
    "Stories move people to give and to help, but they belong to the people in them. You will learn to ask permission properly, tell a story with dignity, back it with honest numbers, and use AI (such as ChatGPT, Microsoft Copilot or Google Gemini) to draft and adapt it without putting anyone's private details into the AI.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Take one real program story (with written consent) or a fully made-up practice story. Write the facts using the Before, Turning point, After structure and add one honest program number. Use AI with placeholders to draft a 150-word newsletter story, a 40-word social post and a 100-word grant report paragraph. Check all three against the consent form and the dignity checklist, and fix anything that does not pass.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Nonprofit and faith-based staff, volunteers and leaders who share the difference their work makes with donors, funders, members and the public.",
    startingPoint: "Hear powerful stories from the people they serve and share some in newsletters or posts. Many have no written consent process and have not thought about dignity in wording or the risks of using AI with real stories.",
    gap: "Stories move donors and funders, but a story shared without consent, with pity words or with made-up details can hurt the person and the organization's trust. Learners need a safe process from consent to final check, using AI to draft and adapt stories without exposing anyone.",
    constraints: [
      "Written informed consent before any story, photo or quote is used; parents or guardians for children",
      "Some stories should not be told even with consent, such as those of survivors of abuse or people in immigration cases",
      "Privacy: no full names, addresses, health details or case notes in AI tools",
      "AI-made images are labeled and never stand in for real clients",
      "Time: about 60 minutes in total, in 5-minute lessons"
    ],
    prerequisites: "\"Introduction to AI for Nonprofits\", or some experience using an AI assistant."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Before using anyone's story, photo or words", action: "ask for and record written informed consent, including where it will be shared and how they want to be named", standard: "with the person told they can say no or change their mind without losing help" },
    { id: "O2", condition: "Given a draft story", action: "rewrite it so the person is the hero, using people-first words and no pity words", standard: "leaving out details that could identify or embarrass them" },
    { id: "O3", condition: "Given story notes", action: "organize the story as Before, Turning point, After and add one honest program number", standard: "with the number taken from your own checked records" },
    { id: "O4", condition: "Given your story notes", action: "write an AI prompt with placeholders and general details to get a draft", standard: "with no full name, address, health details or case notes in the prompt" },
    { id: "O5", condition: "Given one story draft", action: "adapt it into a newsletter story, a social post and a grant report paragraph", standard: "using each version only where the consent form allows" },
    { id: "O6", condition: "Before a story goes out", action: "check it for truth, consent, dignity and numbers and fix anything that fails", standard: "with every detail matching your notes and the consent form" }
  ],
  chapters: [
    {
      name: "Chapter 1: Stories that respect people",
      lessons: [
        {
          objectives: ["O1"],
          title: "Consent comes first",
          minutes: 5,
          goal: "Ask for and record informed consent before you use anyone's story, photo or words.",
          text: [
            "A person's story is theirs. Before you share it, ask for informed consent: they understand what you will share, where (newsletter, website, social media, grant reports), for how long, and that they can say no or change their mind without losing any help.",
            "Get consent in writing with a simple form, and for children get a parent or guardian's consent. Let the person choose: real name, first name only, or a changed name; photo or no photo. Write down what they agreed to and keep it with the story.",
            "Some stories should not be told even with consent if sharing could put the person at risk, for example survivors of abuse, people in immigration cases or people in recovery. When unsure, ask your director. Your organization may have its own consent form; use it. Ask a lawyer or your umbrella association if you need a form reviewed."
          ],
          steps: ["Explain what you will share, where and for how long.", "Make clear they can say no without losing any help.", "Let them choose name, photo and details.", "Get a signature (a parent or guardian for children).", "Keep the form with the story and respect any change of mind."],
          words: [["Informed consent", "a clear yes given by someone who understands exactly how their story will be used."], ["Guardian", "an adult legally responsible for a child."]],
          slides: [
            { title: "The story belongs to them", bullets: ["Ask before you share", "Saying no never affects their help"] },
            { title: "Informed consent covers", bullets: ["What you will share", "Where and for how long", "Name and photo choices", "Right to change their mind"] },
            { title: "Get it in writing", bullets: ["A simple signed form", "Parent or guardian for children", "Keep it with the story"] },
            { title: "When not to share", bullets: ["If sharing could put them at risk", "When unsure, ask your director"] }
          ],
          tryIt: "Write a five-line consent checklist for your organization covering what, where, how long, name and photo choices, and the right to say no. Compare it with any form your organization already uses.",
          youCanNow: "ask for and record informed consent before sharing someone's story.",
          quickCheck: [
            { objective: "O1", q: "Which naming choice should the person be offered?", options: ["Real name, first name only, or a changed name", "Only their full legal name", "Only a photo with no name", "Whatever the staff prefer"], answer: 0, why: "Let the person choose how they are named, and whether a photo is used." },
            { objective: "O1", q: "A survivor of abuse wants to share her story, but sharing could put her at risk. What do you do?", options: ["Share it, since she agreed", "Ask your director, because some stories should not be told even with consent", "Share it with her full name", "Post it only on social media"], answer: 1, why: "Some stories should not be told even with consent if sharing could put the person at risk." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Telling a story with dignity",
          minutes: 5,
          goal: "Rewrite a story so the person is the hero, not a victim.",
          text: [
            "Dignity means showing people as capable people with their own strengths and choices, not as helpless victims. The person is the hero of the story; your organization is the helper.",
            "Use people-first words (\"a man experiencing homelessness\", not \"a homeless man\"). Avoid pity words like \"poor\", \"suffering\" or \"broken\". Do not exaggerate. Use their own words in quotes when they agreed to it.",
            "Leave out details that are not needed and could identify or embarrass them: exact addresses, health details, legal problems, children's school names."
          ],
          steps: ["Make the person the main actor in the story.", "Use people-first words.", "Remove pity words and exaggeration.", "Remove details that are not needed.", "Use their own words if they agreed."],
          words: [["Dignity", "showing people with respect, as capable people with their own strengths."], ["People-first language", "naming the person before the situation, like \"a woman experiencing homelessness\"."]],
          slides: [
            { title: "The person is the hero", bullets: ["They act and choose", "Your organization helps"] },
            { title: "Words matter", bullets: ["People-first: \"a man experiencing homelessness\"", "No pity words: poor, suffering, broken", "No exaggeration"] },
            { title: "Leave out", bullets: ["Exact addresses", "Health and legal details", "Children's school names"] }
          ],
          tryIt: "Rewrite this sentence with dignity: \"Poor, broken Maria was homeless and helpless until we saved her.\" Make Maria the hero and remove pity words.",
          youCanNow: "write about the people you serve with dignity and respect.",
          quickCheck: [
            { objective: "O2", q: "In a dignity-based story, what is your organization's role?", options: ["The hero", "The victim", "The helper", "The judge"], answer: 2, why: "The person is the hero; your organization is the helper." },
            { objective: "O2", q: "A draft says \"poor Mrs. [Name] was suffering.\" What do you do?", options: ["Keep it; it moves donors", "Add more pity words", "Make it longer", "Remove the pity words and show her strengths and choices"], answer: 3, why: "Avoid pity words like \"poor\" and \"suffering\"; show people as capable." }
          ]
        },
        {
          objectives: ["O3"],
          title: "A simple story structure plus one honest number",
          minutes: 5,
          goal: "Shape a story as Before, Turning point, After, and add one true program number.",
          text: [
            "A simple structure makes a story easy to follow. Before: what life was like and what the person wanted. Turning point: what they did, with your program's help. After: what changed, in concrete terms.",
            "Then add one honest number to show the story is part of something bigger: \"Maria is one of 84 parents who finished our job training program this year.\" Use numbers from your own records, and do not round up or guess.",
            "One person's story makes people care; the number shows the size of your impact. Funders want both."
          ],
          steps: ["Write Before: life and goal.", "Write Turning point: their action with your help.", "Write After: the concrete change.", "Add one honest number from your records.", "Check the number with the person who keeps your data."],
          words: [["Impact", "the real change your work makes in people's lives."], ["Outcome", "a measurable result, like \"84 parents finished training\"."]],
          slides: [
            { title: "Before, Turning point, After", bullets: ["Before: life and goal", "Turning point: their action, your help", "After: the concrete change"] },
            { title: "Add one honest number", bullets: ["From your own records", "No rounding up or guessing"] },
            { title: "Why both", bullets: ["The story makes people care", "The number shows the size of impact"] }
          ],
          tryIt: "Using a consented story or a made-up practice story, write three short lines (Before, Turning point, After) and one honest number from your program.",
          youCanNow: "shape a story with a clear structure and support it with a true number.",
          quickCheck: [
            { objective: "O3", q: "What goes in the Turning point?", options: ["What the person did, with your program's help", "The person's address", "Your budget", "A list of donors"], answer: 0, why: "The Turning point is what they did, with your program's help." },
            { objective: "O3", q: "You think about 90 people finished the program, but your records say 84. Which do you use?", options: ["About 90, to round up", "84, from your records", "100, to sound bigger", "No number at all"], answer: 1, why: "Use numbers from your own records; do not round up or guess." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Stories that respect people",
        questions: [
          { objective: "O1", q: "What must you have before sharing a client's story?", options: ["A good photo", "A donor's approval", "Their informed consent", "An AI draft"], answer: 2, why: "The story belongs to the person; they must agree first." },
          { objective: "O1", q: "A client says no to sharing their story. What happens to their help?", options: ["Nothing changes; they still get help", "It stops", "It is reduced", "They must pay"], answer: 0, why: "Consent must be free; saying no never affects help." },
          { objective: "O2", q: "Which is people-first language?", options: ["\"a homeless man\"", "\"the homeless\"", "\"poor broken man\"", "\"a man experiencing homelessness\""], answer: 3, why: "It names the person before the situation." },
          { objective: "O3", q: "In the Before, Turning point, After structure, what goes in After?", options: ["The donor's name", "The concrete change", "The organization's address", "The budget"], answer: 1, why: "After shows what changed." },
          { objective: "O3", q: "Which number is right to use?", options: ["A guess that sounds big", "A number from your own records, checked", "A rounded-up number", "A number the AI made up"], answer: 1, why: "Honest numbers come from your own checked records." }
        ]
      }
    },
    {
      name: "Chapter 2: Drafting and sharing stories with AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Drafting a story with AI, safely",
          minutes: 5,
          goal: "Use AI to turn your story notes into a draft without sharing private details.",
          text: [
            "AI can turn your Before, Turning point, After notes into a smooth draft in seconds. But never paste a real person's full name, address, health details or case notes into an AI tool. Many AI tools may keep what you type.",
            "Use placeholders and general details: \"Write a 150-word newsletter story. [Name], a single parent, wanted steady work. She finished our 10-week job training and now works as a medical office assistant. 84 parents finished the program this year. Warm, respectful, people-first language, no pity words.\"",
            "After you get the draft, put the real details in yourself, but only the ones the person agreed to on the consent form."
          ],
          steps: ["Start from your structured notes.", "Replace names and private details with placeholders.", "Ask for length, tone and people-first language.", "Ask for one or two changes.", "Add only the agreed real details yourself."],
          words: [["Placeholder", "a stand-in like [Name] that you replace later."], ["Draft", "a first version you will check and improve."]],
          slides: [
            { title: "Never paste into AI", bullets: ["Full names and addresses", "Health details or case notes", "Children's details"] },
            { title: "A safe story prompt", bullets: ["Placeholders like [Name]", "Your Before, Turning point, After notes", "Length, tone, people-first words"] },
            { title: "After the draft", bullets: ["Add only details they agreed to", "Check against the consent form"] }
          ],
          tryIt: "Turn your notes from Lesson 3 into a safe prompt with placeholders and ask AI for a 150-word newsletter story. Ask for one change, then add only the agreed details.",
          youCanNow: "draft an impact story with AI while protecting the person's privacy.",
          quickCheck: [
            { objective: "O4", q: "Why keep real names and case notes out of AI tools?", options: ["AI cannot read names", "It makes drafts longer", "Many AI tools may keep what you type", "AI only writes in capital letters"], answer: 2, why: "Many AI tools may keep what you type." },
            { objective: "O4", q: "The person agreed to share their first name but not their job. What do you add to the AI draft?", options: ["Their full name and job", "Their address", "Nothing at all", "Only their first name"], answer: 3, why: "Add only the real details the person agreed to on the consent form." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Adapting one story for different audiences",
          minutes: 5,
          goal: "Turn one story into a newsletter piece, a social post and a grant report paragraph.",
          text: [
            "Different readers need different versions. Donors in a newsletter want warmth and a way to help. Social media needs short words and one clear action. A grant report needs facts, outcomes and how the funder's money helped.",
            "Ask AI to adapt the draft: \"Turn this story into a 40-word social post with one call to action, and a 100-word grant report paragraph that states the outcome and the number.\" Only use the story in places the person agreed to.",
            "Images made by AI should never pretend to be real people you serve. If you use an AI-made image, label it, and do not use one to stand in for a real client."
          ],
          steps: ["Check the consent form for where you may share.", "Ask AI for a short social version with one action.", "Ask AI for a grant report version with outcomes and the number.", "Compare the versions for truth.", "Label any AI-made image."],
          words: [["Audience", "the people who will read or see what you share."], ["Grant report", "a report to a funder showing what their money did."]],
          slides: [
            { title: "Same story, three versions", bullets: ["Newsletter: warm, a way to help", "Social: short, one action", "Grant report: facts and outcomes"] },
            { title: "Only where they agreed", bullets: ["Check the consent form first", "Website yes does not mean social yes"] },
            { title: "AI images", bullets: ["Never pretend to show real clients", "Label AI-made images"] }
          ],
          tryIt: "Ask AI to adapt your newsletter story into a 40-word social post and a 100-word grant report paragraph. Check that each place is allowed on the consent form.",
          youCanNow: "adapt one story for donors, social media and funders.",
          quickCheck: [
            { objective: "O5", q: "What do donors reading a newsletter want?", options: ["Warmth and a way to help", "A budget table", "Legal language", "Only numbers"], answer: 0, why: "Newsletter donors want warmth and a way to help." },
            { objective: "O5", q: "You have no photo of the real person, so AI makes a picture of a smiling family. How do you use it?", options: ["Say it is the family you served", "Label it as AI-made and do not present it as a real client", "Use it without any label", "Put the person's name under it"], answer: 1, why: "AI-made images must be labeled and never stand in for a real client." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Checking a story before it goes out",
          minutes: 5,
          goal: "Use a short checklist to catch errors, made-up details and dignity problems.",
          text: [
            "AI sometimes adds details that are not true: an extra child, a job title the person never had, a quote they never said. These can hurt the person and your organization's trust.",
            "Before sharing, check: Truth (is every detail true and in your notes?), Consent (is every detail and place allowed?), Dignity (is the person the hero, with people-first words?), and Numbers (is the number from your records?). If you can, let the person read their story before it goes out.",
            "Keep a copy of the final version with the consent form, and remove the story if the person asks."
          ],
          steps: ["Truth: compare every detail with your notes; remove anything AI added.", "Consent: check each detail and each place against the form.", "Dignity: hero, people-first words, no pity.", "Numbers: confirm from your records.", "Let the person read it if you can, then file it with the consent form."],
          words: [["Fabrication", "a made-up detail presented as true."], ["Checklist", "a list of checks you go through every time."]],
          slides: [
            { title: "AI may add untrue details", bullets: ["Extra people or events", "Job titles or quotes never said"] },
            { title: "Four checks", bullets: ["Truth", "Consent", "Dignity", "Numbers"] },
            { title: "Finish well", bullets: ["Let the person read it if you can", "File it with the consent form", "Remove it if they ask"] }
          ],
          tryIt: "Final task: run your three versions (newsletter, social post, grant paragraph) through the four checks. Fix anything that fails and note what you changed.",
          youCanNow: "check impact stories for truth, consent, dignity and honest numbers before sharing.",
          quickCheck: [
            { objective: "O6", q: "Which is one of the four checks before sharing?", options: ["Length", "Font", "Consent", "Color"], answer: 2, why: "The four checks are Truth, Consent, Dignity and Numbers." },
            { objective: "O6", q: "A family asks you to remove their story a month after it was posted. What do you do?", options: ["Leave it up; they signed the form", "Ask them to pay to remove it", "Change one word", "Remove the story"], answer: 3, why: "Remove the story if the person asks." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Drafting and sharing stories with AI",
        questions: [
          { objective: "O4", q: "What is safe to put in an AI story prompt?", options: ["The client's case notes", "Their home address", "Their medical records", "Placeholders and general details"], answer: 3, why: "Placeholders keep private details out of the AI." },
          { objective: "O5", q: "The consent form allows the website but not social media. What do you do?", options: ["Use the story only on the website", "Post on social anyway", "Ask the AI", "Change the name and post it everywhere"], answer: 0, why: "Share only where the person agreed." },
          { objective: "O6", q: "AI added a quote the person never said. What do you do?", options: ["Keep it, it sounds good", "Add more quotes", "Remove it", "Ask the donor"], answer: 2, why: "Made-up details break trust and must be removed." },
          { objective: "O5", q: "Which version needs outcomes and how the funder's money helped?", options: ["Social post", "Event flyer", "Thank-you card", "Grant report"], answer: 3, why: "Funders want results tied to their support." },
          { objective: "O5", q: "How should an AI-made image be used?", options: ["Presented as a real client", "Hidden in the background", "Labeled, and never standing in for a real client", "Used for consent"], answer: 2, why: "AI images must not pretend to show real people you serve." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Social Impact Storytelling",
    questions: [
      { objective: "O1", q: "Who does a client's story belong to?", options: ["The organization", "The client", "The donor", "The AI tool"], answer: 1, why: "It is their life and their story." },
      { objective: "O1", q: "Informed consent means the person understands:", options: ["What you will share, where and for how long", "Only that a photo will be taken", "Nothing; a signature is enough", "The organization's budget"], answer: 0, why: "Consent is informed only when they know how it will be used." },
      { objective: "O1", q: "For a child's story, who gives consent?", options: ["The child's teacher", "A volunteer", "A parent or guardian", "No one"], answer: 2, why: "A parent or guardian must agree for a child." },
      { objective: "O1", q: "A person who agreed last month now asks you to remove their story. You:", options: ["Remove it", "Refuse", "Ask them to pay", "Shorten it"], answer: 0, why: "People can change their mind." },
      { objective: "O1", q: "When might a story not be shared even with consent?", options: ["When it is too short", "When it is on a Monday", "Never", "When sharing could put the person at risk"], answer: 3, why: "Safety comes before a good story." },
      { objective: "O2", q: "In a dignity-based story, the hero is:", options: ["The organization", "The person you serve", "The donor", "The AI"], answer: 1, why: "The person acts and chooses; you help." },
      { objective: "O2", q: "Which word should you avoid?", options: ["\"finished\"", "\"broken\"", "\"chose\"", "\"started\""], answer: 1, why: "\"Broken\" is a pity word." },
      { objective: "O2", q: "Which detail should usually be left out?", options: ["The concrete change", "The program they joined", "Their goal", "Their exact address"], answer: 3, why: "Addresses can identify or endanger people." },
      { objective: "O3", q: "The three parts of the story structure are:", options: ["Before, Turning point, After", "Title, Logo, Ask", "Name, Address, Phone", "Problem, Price, Profit"], answer: 0, why: "This simple structure is easy to follow." },
      { objective: "O3", q: "Why add one honest number?", options: ["To make it longer", "Because AI needs it", "To show the story is part of a bigger impact", "To replace consent"], answer: 2, why: "The number shows the size of your impact." },
      { objective: "O3", q: "Where should your program number come from?", options: ["A guess", "The AI", "A competitor's website", "Your own checked records"], answer: 3, why: "Honest numbers come from your records." },
      { objective: "O4", q: "Which prompt is safe?", options: ["\"Maria Lopez, 123 Main St, diagnosed with...\"", "\"Here are her case notes...\"", "\"[Name], a single parent, finished our training and now works in a medical office.\"", "\"Here is her child's school...\""], answer: 2, why: "It uses a placeholder and no private details." },
      { objective: "O4", q: "After an AI draft, which real details do you add?", options: ["All the details you know", "Only the ones the person agreed to", "Their phone number", "Whatever the AI suggests"], answer: 1, why: "The consent form limits what you share." },
      { objective: "O5", q: "A social media version should be:", options: ["Short with one clear action", "As long as a grant report", "Full of case details", "Without any ask"], answer: 0, why: "Short posts with one action work best." },
      { objective: "O5", q: "A grant report version focuses on:", options: ["Jokes", "Pity words", "Facts, outcomes and how the money helped", "The person's address"], answer: 2, why: "Funders need results." },
      { objective: "O5", q: "Before posting a story on social media, check:", options: ["That the consent form allows social media", "Only the spelling", "The weather", "The donor list"], answer: 0, why: "Consent covers each place separately." },
      { objective: "O5", q: "An AI-made image of a smiling family is labeled as \"a family we served\". This is:", options: ["Fine", "Required", "Better than a real photo", "Misleading; label it and do not present it as a real client"], answer: 3, why: "AI images must not pretend to be real clients." },
      { objective: "O6", q: "Which is one of the four checks?", options: ["Speed", "Truth", "Price", "Font"], answer: 1, why: "Truth, Consent, Dignity and Numbers are the four checks." },
      { objective: "O6", q: "AI wrote that the client \"has three children\" but your notes say one. You:", options: ["Keep it", "Fix it to match your notes", "Ask the AI again and trust it", "Remove the client's consent"], answer: 1, why: "Every detail must match your notes." },
      { objective: "O6", q: "Where do you keep the final story?", options: ["Only in the AI chat", "Nowhere", "On a public drive", "With the signed consent form"], answer: 3, why: "Keeping them together shows what was agreed." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      5,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Consent",
        objective: "O1",
        notYet: "No written consent for a real story, or a detail is used that was not agreed to.",
        meets: "Written consent, or a fully made-up practice story, with naming and places recorded.",
        exceeds: "The person read their story before it went out."
      },
      {
        name: "Structure and number",
        objective: "O3",
        notYet: "Missing a story part, or the number is guessed.",
        meets: "Before, Turning point and After, plus one number from checked records.",
        exceeds: "The After part shows a concrete change in the person's own words, with permission."
      },
      {
        name: "Safe AI prompt",
        objective: "O4",
        notYet: "The prompt has a full name, address, health details or case notes.",
        meets: "Prompt uses placeholders and general details only.",
        exceeds: "Asks AI for people-first language and no pity words."
      },
      {
        name: "Three versions",
        objective: "O5",
        notYet: "A version is missing or used where consent does not allow.",
        meets: "About 150-word newsletter, 40-word social post and 100-word grant paragraph, each where consent allows.",
        exceeds: "Each version fits its readers: warmth, one action, or outcomes and funding."
      },
      {
        name: "Final check",
        objective: "O6",
        notYet: "An untrue detail, pity word or unchecked number remains.",
        meets: "All three pass Truth, Consent, Dignity and Numbers.",
        exceeds: "Lists what was fixed and keeps the final copy with the consent form."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Organizations that adopt a written story consent form within 60 days (follow-up survey)",
      "Stories shared in newsletters, posts or grant reports with consent on file",
      "Learners who start another Koach Learn nonprofit course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant",
      "Your organization's consent form, or a simple sample form",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Use fully made-up practice stories in class unless real stories have written consent.",
      "Do a group exercise rewriting pity words into people-first language.",
      "Bring the organization's consent form so learners can match each version to what was agreed.",
      "Remind learners to ask their director before telling stories of people who could be put at risk.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
