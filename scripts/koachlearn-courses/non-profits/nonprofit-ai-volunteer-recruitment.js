"use strict";

// Koach Learn course: Non Profits -> "AI Volunteer Recruitment" (bonus course). Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-ai-volunteer-recruitment",
  category: "Non Profits",
  name: "AI Volunteer Recruitment",
  skills: "Writing a volunteer role description, Drafting recruitment posts, Building a sign-up form, Writing welcome and reminder messages, Keeping volunteers coming back",
  outcome: "use a free AI assistant to write a clear volunteer role description, a recruitment post and a welcome message, set up a simple sign-up form, and plan how you will thank and keep the volunteers you recruit.",
  about: [
    "This course is for nonprofit and faith-based staff and volunteer coordinators who need more helpers for programs such as food pantries, tutoring, events, cleanups and mentoring.",
    "You will use an AI assistant (such as ChatGPT, Microsoft Copilot or Google Gemini) to write the words, and free tools such as Google Forms or Microsoft Forms to collect sign-ups. You stay in charge of every message, and you keep volunteers' personal details out of the AI.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build a complete recruitment kit for one real volunteer role: a role description, one social media post, one email to supporters, a sign-up form with a few simple questions, a welcome message and a one-week reminder, plus a short thank-you plan. Use AI to draft, then edit every piece in your own voice and check all dates and details.",
  chapters: [
    {
      name: "Chapter 1: Finding the right volunteers",
      lessons: [
        {
          title: "Writing a clear volunteer role description",
          minutes: 5,
          goal: "Write a role description that tells a volunteer exactly what, when, where and why.",
          text: [
            "People say yes when they know exactly what they are signing up for. A vague ask like \"We need help!\" gets few replies. A clear role gets more.",
            "A good role description answers: What will I do? When and for how long? Where? What skills or checks are needed (for example, a background check to work with children)? Why does it matter? Who do I contact?",
            "Give AI the facts and ask it to write them up. For example: \"Write a short volunteer role description for a Saturday food pantry helper, 9 am to noon twice a month, lifting up to 20 pounds, no experience needed. Warm and clear, under 150 words.\""
          ],
          steps: ["Write down the tasks, schedule, place and any requirements.", "Write one sentence on why the role matters.", "Ask AI to turn your notes into a short role description.", "Check every fact and add your contact information yourself."],
          words: [["Role description", "a short write-up of a volunteer job: tasks, time, place, needs and purpose."], ["Background check", "a check of someone's records, often required to work with children or vulnerable people."]],
          slides: [
            { title: "Clear asks get more yeses", bullets: ["\"We need help!\" is too vague", "Say exactly what, when and where"] },
            { title: "A role description answers", bullets: ["What will I do? When and how long?", "Where? What skills or checks?", "Why does it matter? Who do I contact?"] },
            { title: "Let AI write it up", bullets: ["Give it your facts", "Ask for warm, clear, short", "Check every detail yourself"] }
          ],
          tryIt: "Pick one real volunteer role your organization needs. Write the facts, ask AI for a role description under 150 words, and correct anything that is wrong.",
          youCanNow: "write a clear volunteer role description with AI's help."
        },
        {
          title: "Drafting recruitment posts and emails",
          minutes: 5,
          goal: "Turn one role description into a social media post and a supporter email.",
          text: [
            "Different places need different lengths. A social media post is short and friendly with one clear action. An email to supporters can tell a little story and give more detail.",
            "Ask AI for both from the same role description: \"Using this role description, write a 50-word Facebook post with one call to action, and a 150-word email to our supporters that starts with a short story about a family we serve.\" Use a made-up or approved story, never a real person's private details without permission.",
            "Ask for a few versions and pick the one that sounds most like you. Add the real sign-up link yourself."
          ],
          steps: ["Paste your role description into the AI.", "Ask for a short social post with one call to action.", "Ask for a longer supporter email.", "Ask for two versions of each and pick one.", "Add your real sign-up link and check the details."],
          words: [["Call to action", "the one thing you ask the reader to do, like \"Sign up here\"."], ["Supporters", "people who already know and care about your organization: donors, members, past volunteers."]],
          slides: [
            { title: "Match the message to the place", bullets: ["Social post: short, one action", "Email: a little story and more detail"] },
            { title: "Ask AI for both", bullets: ["Paste the role description", "Ask for post and email", "Ask for two versions of each"] },
            { title: "Before you post", bullets: ["Pick the one that sounds like you", "Add the real sign-up link", "No private stories without permission"] }
          ],
          tryIt: "Use your role description from Lesson 1 to get a 50-word social post and a 150-word supporter email. Pick the best version of each and edit it.",
          youCanNow: "create recruitment posts and emails for different audiences from one role description."
        },
        {
          title: "Reaching new kinds of volunteers",
          minutes: 5,
          goal: "Use AI to brainstorm where to find volunteers and how to make roles easier to join.",
          text: [
            "Many organizations ask the same few people again and again. AI is good at brainstorming new places to look: local colleges and high schools that need service hours, employers with volunteer days, faith communities, senior centers, and online volunteer listing sites.",
            "Ask AI: \"List 10 places in a mid-sized city to recruit weekend food pantry volunteers, and one sentence to say to each.\" Check that any group or site it names is real before you contact it.",
            "Also ask how to make roles easier to say yes to: shorter shifts, family-friendly roles, remote tasks such as making calls or writing cards, and materials in the languages your community speaks."
          ],
          steps: ["Ask AI for a list of places to find volunteers.", "Ask for one sentence to say to each.", "Check that each place or site is real.", "Ask how to make the role easier to join.", "Pick your top three places to try."],
          words: [["Service hours", "volunteer hours that schools or programs ask students to complete."], ["Remote task", "volunteer work done from home, such as calls, cards or online help."]],
          slides: [
            { title: "Look beyond the usual few", bullets: ["Schools and colleges", "Employers with volunteer days", "Faith communities and senior centers"] },
            { title: "Brainstorm with AI", bullets: ["Ask for 10 places and what to say", "Check each place is real"] },
            { title: "Make yes easier", bullets: ["Shorter shifts", "Family-friendly and remote roles", "Your community's languages"] }
          ],
          tryIt: "Ask AI for 10 places to recruit volunteers for your role in your area. Check them, then choose your top three and write down who you will contact.",
          youCanNow: "find new sources of volunteers and make roles easier to join."
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding the right volunteers",
        questions: [
          { q: "Which volunteer ask will likely get the most replies?", options: ["\"We need help!\"", "\"Volunteers wanted, details later.\"", "\"Food pantry helper, Saturdays 9 to noon, twice a month, no experience needed.\"", "\"Anyone?\""], answer: 2, why: "A clear role says what, when and where." },
          { q: "What is a call to action?", options: ["The one thing you ask the reader to do", "A phone call to a volunteer", "A type of AI", "A board meeting"], answer: 0, why: "It tells the reader the next step, like \"Sign up here\"." },
          { q: "AI suggests a local volunteer group you have never heard of. What do you do?", options: ["Contact them right away with your volunteer list", "Put it on your website", "Assume it is real", "Check that it is real before contacting"], answer: 3, why: "AI can make up names; check first." },
          { q: "Which is a way to make a role easier to join?", options: ["Longer shifts only", "Offer shorter shifts and remote tasks", "Require ten years of experience", "Only accept people who already volunteer"], answer: 1, why: "Flexible roles let more people say yes." },
          { q: "You want a story in your supporter email. What is safe?", options: ["A real client's name and situation without permission", "A made-up or approved story", "A volunteer's home address", "A donor's gift amount"], answer: 1, why: "Never share real people's private details without permission." }
        ]
      }
    },
    {
      name: "Chapter 2: Signing up, welcoming and keeping volunteers",
      lessons: [
        {
          title: "Building a simple sign-up form",
          minutes: 5,
          goal: "Create a short online sign-up form and ask only what you need.",
          text: [
            "A free form tool such as Google Forms or Microsoft Forms lets people sign up from a link. Answers go into a spreadsheet you control.",
            "Ask only what you need: name, email or phone, which shifts they can do, and anything you must know (such as language skills). Do not ask for Social Security numbers, birth dates or other sensitive details on a simple form. If a background check is needed, use your organization's approved process.",
            "AI can suggest questions and wording: \"Suggest 6 short sign-up form questions for a food pantry volunteer role.\" You build the form yourself, and the answers stay in your form tool, not in the AI."
          ],
          steps: ["Open Google Forms or Microsoft Forms and start a blank form.", "Ask AI to suggest short questions.", "Keep only what you truly need.", "Add the shift choices as checkboxes.", "Test the form yourself, then copy the share link."],
          words: [["Form", "an online set of questions people fill in; answers are saved for you."], ["Sensitive details", "information that could harm someone if shared, like ID numbers or health details."]],
          slides: [
            { title: "Free form tools", bullets: ["Google Forms or Microsoft Forms", "People sign up from a link", "Answers go to a spreadsheet you control"] },
            { title: "Ask only what you need", bullets: ["Name and how to contact them", "Which shifts they can do", "No ID numbers or birth dates"] },
            { title: "AI's part", bullets: ["Suggest questions and wording", "You build the form", "Answers never go into the AI"] }
          ],
          tryIt: "Build a sign-up form for your role with no more than six questions. Fill it in yourself to test it, and copy the link into your recruitment post.",
          youCanNow: "build a short, safe volunteer sign-up form."
        },
        {
          title: "Welcome and reminder messages",
          minutes: 4,
          goal: "Write a welcome message and a reminder that make new volunteers feel ready.",
          text: [
            "The first few days decide whether a new volunteer comes back. A quick welcome makes people feel wanted and ready.",
            "A good welcome says thank you, confirms the date, time and place, says what to wear or bring, names a contact person, and says what the first shift will be like. A reminder a few days before repeats the key details.",
            "Ask AI for both, using placeholders: \"Write a warm welcome email for a new food pantry volunteer. Use [name], [shift date], [contact person]. Under 120 words.\" Then fill in details using your email tool or mail merge, not the AI."
          ],
          steps: ["List what a new volunteer needs to know.", "Ask AI for a welcome message with placeholders.", "Ask AI for a short reminder for a few days before.", "Fill in details in your email tool.", "Check every date and time."],
          words: [["Onboarding", "helping a new volunteer get ready: welcome, training and first shift."], ["Placeholder", "a stand-in like [name] that you replace with the real detail later."]],
          slides: [
            { title: "First days matter", bullets: ["A warm welcome brings people back"] },
            { title: "A good welcome says", bullets: ["Thank you", "Date, time and place", "What to wear or bring", "Who to contact"] },
            { title: "Draft with placeholders", bullets: ["[name], [shift date], [contact person]", "Fill in details in your email tool", "Send a reminder a few days before"] }
          ],
          tryIt: "Ask AI for a welcome email and a reminder text with placeholders for your role. Edit both so they sound like your organization.",
          youCanNow: "write welcome and reminder messages that help new volunteers show up ready."
        },
        {
          title: "Thanking and keeping volunteers",
          minutes: 5,
          goal: "Make a simple plan to thank volunteers and learn why they stay or leave.",
          text: [
            "Keeping a volunteer is easier than finding a new one. People stay when they feel thanked, useful and part of a team.",
            "Simple ways to thank: a personal note after the first shift, sharing what their work made possible (\"Saturday's team packed 300 boxes\"), recognition at a gathering, and asking their ideas. AI can help write thank-you notes and short surveys, such as three questions about what went well and what to change.",
            "Write a short plan: when you will thank people, how you will share results, and when you will ask for feedback. Then put it on your calendar."
          ],
          steps: ["Plan a thank-you after the first shift.", "Plan how you will share results with volunteers.", "Ask AI to draft a three-question feedback survey.", "Put the thank-you and survey dates on your calendar."],
          words: [["Retention", "keeping volunteers coming back over time."], ["Feedback survey", "a few questions that ask people what went well and what to change."]],
          slides: [
            { title: "Why people stay", bullets: ["They feel thanked", "They feel useful", "They feel part of a team"] },
            { title: "Ways to thank", bullets: ["A note after the first shift", "Share results: \"we packed 300 boxes\"", "Recognition and asking their ideas"] },
            { title: "Your keep plan", bullets: ["When you will thank", "How you will share results", "When you will ask for feedback"] }
          ],
          tryIt: "Final task: put your full recruitment kit together: role description, social post, email, sign-up form, welcome message, reminder and thank-you plan. Edit each piece and check every detail.",
          youCanNow: "recruit, welcome and keep volunteers with AI-drafted messages you have checked and made your own."
        }
      ],
      check: {
        title: "Knowledge Check 2: Signing up, welcoming and keeping volunteers",
        questions: [
          { q: "Which question does NOT belong on a simple volunteer sign-up form?", options: ["Which shifts can you do?", "Your email or phone", "Languages you speak", "Your Social Security number"], answer: 3, why: "Sensitive ID numbers do not belong on a simple form." },
          { q: "Where should volunteers' form answers stay?", options: ["In your form tool and spreadsheet", "Pasted into an AI chat", "Posted online", "In a group text"], answer: 0, why: "Personal details stay in tools you control, not the AI." },
          { q: "A good welcome message includes:", options: ["Only a logo", "A request for money", "Date, time, place and a contact person", "Nothing but \"Thanks\""], answer: 2, why: "Clear details help new volunteers show up ready." },
          { q: "When should you send a reminder?", options: ["A month after the shift", "Never", "Only if they miss it", "A few days before the shift"], answer: 3, why: "A reminder shortly before helps people remember." },
          { q: "Which helps keep volunteers coming back?", options: ["Never contacting them", "Longer shifts with no breaks", "Sharing what their work made possible", "Ignoring their ideas"], answer: 2, why: "People stay when they see their impact and feel thanked." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Volunteer Recruitment",
    questions: [
      { q: "A clear role description answers:", options: ["Only the organization's name", "What, when, where, why and who to contact", "The director's salary", "Nothing specific"], answer: 1, why: "Clear details help people say yes." },
      { q: "When is a background check often needed?", options: ["For roles working with children or vulnerable people", "For every email", "Never", "Only for donors"], answer: 0, why: "Organizations often require checks for roles with children or vulnerable people." },
      { q: "What do you give AI to write a role description?", options: ["Volunteers' phone numbers", "Your password", "The facts of the role", "Nothing"], answer: 2, why: "AI writes up the facts you give it." },
      { q: "After AI drafts a role description, you:", options: ["Check every fact and add your contact information", "Post it unread", "Add a volunteer's address", "Delete it"], answer: 0, why: "You are responsible for accuracy." },
      { q: "A social media recruitment post should be:", options: ["Ten pages long", "Full of private stories", "Without a link", "Short with one clear action"], answer: 3, why: "Short posts with one action work best." },
      { q: "An email to supporters can:", options: ["Include donors' gift amounts", "Tell a short story and give more detail", "List clients' names", "Skip the sign-up link"], answer: 1, why: "Email allows more room for a story and details." },
      { q: "Why ask AI for two versions?", options: ["To use twice the data", "To pick the one that sounds most like you", "AI requires it", "To confuse readers"], answer: 1, why: "Comparing versions helps you choose your voice." },
      { q: "Which is a good new place to find volunteers?", options: ["Only the same five people", "A stranger's private phone list", "A spam email list", "A local high school that needs service hours"], answer: 3, why: "Students often need service hours." },
      { q: "AI names a volunteer website you do not know. You should:", options: ["Check it is real first", "Send it your volunteer list", "Pay it right away", "Trust it"], answer: 0, why: "AI can make up names and sites." },
      { q: "Which makes a role easier to join?", options: ["A 12-hour shift", "Strict experience rules", "A remote task like writing cards", "English-only materials for a Spanish-speaking area"], answer: 2, why: "Remote and flexible tasks fit more people." },
      { q: "Which free tools can make a sign-up form?", options: ["A calculator", "A photo app", "A music app", "Google Forms or Microsoft Forms"], answer: 3, why: "Both make online forms that save answers." },
      { q: "On a simple sign-up form, ask:", options: ["Every detail you can think of", "Bank details", "Only what you truly need", "Birth dates and ID numbers"], answer: 2, why: "Less data means less risk and quicker sign-ups." },
      { q: "AI's part in building a form is to:", options: ["Store volunteers' answers", "Suggest questions and wording", "Run background checks", "Approve volunteers"], answer: 1, why: "You build the form; answers stay in your tool." },
      { q: "Before sharing your form link, you should:", options: ["Fill it in yourself to test it", "Delete half the questions at random", "Hide the link", "Ask AI to fill it in"], answer: 0, why: "Testing catches mistakes before volunteers see them." },
      { q: "Onboarding means:", options: ["Removing volunteers", "Buying a boat", "Helping a new volunteer get ready", "Writing a grant"], answer: 2, why: "Onboarding covers welcome, training and the first shift." },
      { q: "How should a volunteer's name appear in an AI prompt for a welcome email?", options: ["As [name], filled in later", "Full name and address", "Name and phone number", "Name and birth date"], answer: 0, why: "Placeholders keep personal details out of the AI." },
      { q: "Where do you fill in real details for welcome emails?", options: ["The AI chat", "A public post", "A shared screen at a library", "Your email tool or mail merge"], answer: 3, why: "Real details stay in tools you control." },
      { q: "Why do volunteers stay?", options: ["They are never contacted", "They feel thanked, useful and part of a team", "They have no choice", "The shifts get longer"], answer: 1, why: "Appreciation and purpose keep people coming back." },
      { q: "A short feedback survey should ask:", options: ["Their bank account", "What went well and what to change", "Their medical history", "Their password"], answer: 1, why: "Feedback helps you improve the experience." },
      { q: "Your thank-you plan should be:", options: ["Kept only in your head", "Done once every five years", "Left to the AI to send", "Put on your calendar with dates"], answer: 3, why: "Scheduling it makes sure it happens." }
    ]
  }
};
