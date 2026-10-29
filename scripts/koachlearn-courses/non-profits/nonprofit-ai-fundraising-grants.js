"use strict";

// Koach Learn course: Non Profits -> "AI for Fundraising and Grant Writing". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge
// check closes each chapter; a 20-question quiz closes the course. Model: scripts/koachlearn-courses/re-entry/reentry-ai-digital-confidence.js. See scripts/koachlearn-export.js for how it is built.
// Facts checked 27 October 2026: grants.gov (NOFO eligibility section; SAM.gov entity registration and UEI before applying; "It's free to register"), irs.gov/charities-non-profits/charitable-contributions, candid.org (search of 1.9 million organizations, free account).
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-ai-fundraising-grants",
  category: "Non Profits",
  name: "AI for Fundraising and Grant Writing",
  skills: "Finding grant opportunities, Reading funder guidelines, Drafting a statement of need with AI, Writing donor appeals with AI, Checking and personalizing every draft",
  outcome: "find a grant that fits your program, use AI to draft a statement of need and a program description that follow the funder's guidelines, and write a donor appeal email, checking every fact and keeping donor information private.",
  about: [
    "This course is for nonprofit and faith-based leaders, development staff and volunteers who raise money and write grants, often with little time and a small team.",
    "You will learn where to find grants, how to read a funder's guidelines, how to use AI to draft the most common grant sections and donor appeals, and how to check and personalize every draft so it is honest and sounds like you.",
    "Each lesson takes about five minutes and ends with a hands-on task. AI drafts; you decide, check and sign. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Pick one real grant opportunity that fits a program you run. Using AI, draft a statement of need (about 250 words) and a program description that follow the funder's guidelines, using only facts from your records and sources you have checked. Then draft a 150-word donor appeal email for the same program, with placeholders instead of donor details, and edit both so they sound like your organization.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Nonprofit and faith-based leaders, development staff and volunteers who raise money and write grants, often with little time and a small team.",
    startingPoint: "Know their programs and community well and have written some appeals or small grant applications. Many have little time for research and writing, and few have used AI for grants.",
    gap: "Grant deadlines and appeals take hours a small team does not have, and one missed attachment or false claim can cost the money and the funder's trust. Learners need to use AI to find fits, read guidelines and draft faster while keeping every fact true and donor data private.",
    constraints: [
      "Honesty: every number traces to a record or checked source; AI never invents outcomes, partners or endorsements",
      "Privacy: donor lists, names and gift histories stay out of AI tools",
      "Federal grants need SAM.gov registration, which is free and takes time",
      "Tax and legal statements are checked with an accountant or official IRS guidance",
      "Time: busy staff and volunteers, so lessons are about 5 minutes each"
    ],
    prerequisites: "\"Introduction to AI for Nonprofits\", or some experience using an AI assistant."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given one of your programs", action: "find at least two grant opportunities that fit it, using Grants.gov, Candid or local funders", standard: "with eligibility checked in each notice" },
    { id: "O2", condition: "Given a funder's public guidelines", action: "create a checklist of every section, limit, attachment and deadline with AI help", standard: "checked line by line against the funder's own document" },
    { id: "O3", condition: "Given your own facts and checked sources", action: "draft a statement of need and a program description with AI", standard: "with every number tracing to your records or a source you checked" },
    { id: "O4", condition: "For one program", action: "write a short donor appeal email with one story, what a gift does and one clear ask", standard: "with placeholders instead of donor details" },
    { id: "O5", condition: "Given different kinds of donors", action: "create thank-you templates with placeholders that you personalize yourself", standard: "with names and amounts added only in your donor database or mail merge" },
    { id: "O6", condition: "Before a grant or appeal goes out", action: "check every number, claim, story permission and word limit", standard: "with no invented outcomes, partners or endorsements" }
  ],
  chapters: [
    {
      name: "Chapter 1: Grants with AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Finding grants that fit your mission",
          minutes: 5,
          goal: "Find at least two grant opportunities that fit one of your programs.",
          text: [
            "Grants come from three main places: government (federal, state and local), private and family foundations, and companies. Federal grants are listed on Grants.gov. Each one has a notice of funding opportunity, or NOFO, with a section that says who is eligible.",
            "To apply for federal grants your organization must first register as an entity in SAM.gov, which gives you a Unique Entity ID (UEI). Grants.gov says registration is free. It can take time, so start early, and never pay a company that says it will register you for a fee.",
            "For foundations, Candid (candid.org) lets you search nonprofits and funders; some features need a paid plan, and many public libraries offer access. Also check your community foundation, local businesses and your denomination or faith network."
          ],
          steps: ["Pick one program that needs funding.", "Search Grants.gov for federal opportunities in that area.", "Search Candid and your community foundation for local funders.", "Read each opportunity's eligibility section.", "Write down two that fit, with their deadlines."],
          words: [["Grant", "money given for a purpose that does not have to be paid back."], ["NOFO", "notice of funding opportunity: the official description of a federal grant and its rules."], ["UEI", "Unique Entity ID: the number SAM.gov gives your organization for federal awards."]],
          slides: [
            { title: "Where grants come from", bullets: ["Government: federal, state, local", "Foundations", "Companies and faith networks"] },
            { title: "Federal grants", bullets: ["Listed on Grants.gov", "Read the NOFO's eligibility section", "Register in SAM.gov first: it is free"] },
            { title: "Foundations", bullets: ["Search Candid (candid.org)", "Ask your library about access", "Check your community foundation"] }
          ],
          sources: [
            { name: "Grants.gov: grant eligibility", url: "https://www.grants.gov/learn-grants/grant-eligibility" },
            { name: "Grants.gov: applicant registration", url: "https://www.grants.gov/applicants/applicant-registration" },
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "Candid", url: "https://candid.org/" }
          ],
          tryIt: "Choose one of your programs. Find two grant opportunities that fit it, one federal or state and one foundation or local. Write each funder's name, deadline and eligibility in one line.",
          youCanNow: "find grant opportunities that fit your mission and know what registration federal grants need.",
          quickCheck: [
            { objective: "O1", q: "What are the three main sources of grants?", options: ["Government, foundations and companies", "Banks, credit cards and loans", "Donors, volunteers and board members", "Schools, hospitals and courts"], answer: 0, why: "Grants come from government, private and family foundations, and companies." },
            { objective: "O1", q: "You want to search foundations on Candid but cannot afford a paid plan. What can you try?", options: ["Give up on foundations", "Ask your public library, since many offer access", "Pay a stranger for a list", "Ask AI to list every foundation"], answer: 1, why: "Many public libraries offer access to Candid's paid features." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reading funder guidelines with AI's help",
          minutes: 5,
          goal: "Turn a funder's guidelines into a checklist of what you must submit.",
          text: [
            "Every funder says what it wants: sections, word limits, budget format, attachments and deadlines. Missing one can disqualify you before anyone reads your work.",
            "Guidelines are public, so you can paste them into an AI assistant and ask: \"Turn these grant guidelines into a checklist: every section, its word or page limit, every attachment, and every deadline.\"",
            "Then check the checklist against the original. AI can drop an item or change a date. The funder's own document always wins."
          ],
          steps: ["Copy the funder's public guidelines.", "Ask the AI for a checklist of sections, limits, attachments and deadlines.", "Compare the checklist line by line with the original.", "Fix anything missing or wrong."],
          words: [["Guidelines", "the funder's rules for what to submit and how."], ["Attachment", "an extra document you send with the application, like a budget or IRS letter."]],
          slides: [
            { title: "Funders tell you what they want", bullets: ["Sections and word limits", "Budget format and attachments", "Deadlines"] },
            { title: "Ask AI for a checklist", bullets: ["Paste the public guidelines", "Sections, limits, attachments, deadlines"] },
            { title: "Check it", bullets: ["Compare line by line", "The funder's document always wins"] }
          ],
          tryIt: "Take the guidelines for one of your two opportunities. Ask an AI assistant for a checklist, then check it against the original and fix any mistakes.",
          youCanNow: "turn funder guidelines into an accurate submission checklist.",
          quickCheck: [
            { objective: "O2", q: "Why can you paste a funder's guidelines into an AI assistant?", options: ["Because AI tools are always private", "Because the funder said so", "Because guidelines are public", "Because AI will submit for you"], answer: 2, why: "Guidelines are public, so pasting them in shares nothing private." },
            { objective: "O2", q: "AI's checklist says the deadline is March 15, but the guidelines say March 1. What do you do?", options: ["Use March 15", "Split the difference", "Ask AI again until it agrees", "Use March 1, from the funder's document"], answer: 3, why: "AI can change a date; the funder's own document always wins." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Drafting a statement of need and program description",
          minutes: 6,
          goal: "Use AI to draft a statement of need and program description from your own facts.",
          text: [
            "The statement of need says what problem you address, who is affected, and why now. The program description says what you will do, for whom, and what will change.",
            "Give the AI your facts, not a blank page: \"Using only these facts, draft a 250-word statement of need for a grant to [funder type]: [your facts and sourced statistics]. Do not add any statistics I did not give you.\"",
            "Then edit hard. Add a real story (with permission, no identifying details), match the funder's words and priorities, and make sure every number traces to your records or a source you checked. Many funders ask whether AI was used; answer honestly."
          ],
          steps: ["Gather your facts: who you serve, numbers, outcomes, sourced statistics.", "Ask AI to draft using only those facts, within the word limit.", "Add a real story with permission and no identifying details.", "Match the funder's priorities and words.", "Trace every number to a record or source."],
          words: [["Statement of need", "the grant section explaining the problem and why it matters now."], ["Program description", "the section explaining what you will do and what will change."], ["Outcome", "the change in people's lives your program aims for."]],
          slides: [
            { title: "Two core sections", bullets: ["Need: the problem, who, why now", "Program: what you do, for whom, what changes"] },
            { title: "Give AI your facts", bullets: ["\"Using only these facts...\"", "\"Do not add statistics I did not give you\"", "Stay within the word limit"] },
            { title: "Edit hard", bullets: ["Add a real story with permission", "Use the funder's priorities", "Trace every number"] },
            { title: "Be honest", bullets: ["Answer truthfully if asked about AI use"] }
          ],
          tryIt: "Gather five facts about one program. Ask AI to draft a 250-word statement of need using only those facts. Mark every number and confirm where it came from.",
          youCanNow: "draft a grant statement of need with AI from your own checked facts.",
          quickCheck: [
            { objective: "O3", q: "What does a program description say?", options: ["What you will do, for whom, and what will change", "Your board members' home addresses", "Your donor list", "Only the budget total"], answer: 0, why: "A program description says what you will do, for whom and what will change." },
            { objective: "O3", q: "You want to add a family's story to your statement of need. What do you do?", options: ["Use their full name to make it real", "Get permission and remove identifying details", "Let AI invent a story", "Copy a story from another group"], answer: 1, why: "A real story needs permission and no identifying details." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Grants with AI",
        questions: [
          { objective: "O1", q: "Where are federal grant opportunities listed?", options: ["Grants.gov", "A social media group", "Your email spam folder", "The phone book"], answer: 0, why: "Grants.gov lists federal funding opportunities." },
          { objective: "O1", q: "A company offers to register you in SAM.gov for a fee. What do you know?", options: ["You must pay it", "SAM.gov registration is free, so register yourself", "SAM.gov is optional", "Only companies can register"], answer: 1, why: "Grants.gov says it is free to register." },
          { objective: "O2", q: "The AI checklist misses an attachment from the guidelines. Which is correct?", options: ["The checklist", "Neither", "The funder's guidelines", "Whichever is shorter"], answer: 2, why: "The funder's own document always wins." },
          { objective: "O3", q: "Which prompt protects you from made-up statistics?", options: ["\"Write a statement of need.\"", "\"Make it impressive.\"", "\"Add strong numbers.\"", "\"Using only these facts, draft... Do not add statistics I did not give you.\""], answer: 3, why: "Limiting the AI to your facts stops invented numbers." },
          { objective: "O3", q: "What does a statement of need explain?", options: ["The problem, who is affected and why now", "Your board's names", "Your office hours", "The donor list"], answer: 0, why: "That is the purpose of the need section." }
        ]
      }
    },
    {
      name: "Chapter 2: Donors with AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing a donor appeal with AI",
          minutes: 5,
          goal: "Draft a short donor appeal email for one program.",
          text: [
            "A good appeal is short and specific: one person or need, what a gift does, and one clear ask. \"$50 provides a week of after-school tutoring\" works better than \"please support our work\", but only if the number is true.",
            "Prompt: \"Write a 150-word donor appeal email for our after-school tutoring program. Tell a short story about [a student, no name], say what [amount] provides, and end with one clear ask and a link: [donate link]. Warm, hopeful tone.\"",
            "Keep donor lists, names and gift histories out of the AI tool. Use your donor database or email program to add names after the draft is final."
          ],
          steps: ["Choose one program and one true \"what a gift does\" fact.", "Ask AI for a short appeal with a story, the gift fact and one ask.", "Check every amount against your budget.", "Add names through your donor database, not the AI tool."],
          words: [["Appeal", "a request asking people to give."], ["Call to action", "the one clear thing you ask the reader to do, like \"Give today\"."]],
          slides: [
            { title: "A strong appeal", bullets: ["One story or need", "What a gift does: true numbers only", "One clear ask"] },
            { title: "The prompt", bullets: ["150 words, warm and hopeful", "Story with no names", "[amount] and [donate link] placeholders"] },
            { title: "Keep donors private", bullets: ["No donor lists in AI", "Add names in your donor database"] }
          ],
          tryIt: "Draft a 150-word appeal email for one program with AI. Check that the \"what a gift does\" amount is true from your budget.",
          youCanNow: "draft a short, honest donor appeal with AI.",
          quickCheck: [
            { objective: "O4", q: "How many asks should a good appeal have?", options: ["Five", "None", "One clear ask", "One for every program"], answer: 2, why: "A good appeal has one person or need, what a gift does and one clear ask." },
            { objective: "O4", q: "You want AI to write an appeal to your top donors by name. What do you do?", options: ["Paste your donor list into AI", "Paste names and gift histories", "Skip the appeal", "Write the draft with placeholders, then add names in your donor database"], answer: 3, why: "Keep donor lists out of AI; add names in your database after the draft is final." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Personalizing thank-yous and updates",
          minutes: 4,
          goal: "Use AI to make thank-you and update templates you personalize yourself.",
          text: [
            "Donors who are thanked quickly and told what their gift did are more likely to give again. AI can help you write templates for different donors: first-time givers, monthly givers, volunteers who also give, and church members who gave to a special offering.",
            "Ask: \"Write three short thank-you templates: first-time donor, monthly donor, and major donor. Each under 100 words, warm, with [name], [amount] and [program] placeholders and one sentence of impact.\"",
            "Fill in names and amounts in your donor database or mail merge. Add a hand-written line when you can. People can tell when no human was involved."
          ],
          steps: ["List the types of donors you thank.", "Ask AI for a template for each, with placeholders.", "Add a true impact sentence to each.", "Personalize in your donor database and add a personal line."],
          words: [["Template", "a reusable draft with blanks to fill in."], ["Mail merge", "a tool that fills names and details into a letter for many people."], ["Donor retention", "keeping donors giving year after year."]],
          slides: [
            { title: "Thank fast, show impact", bullets: ["Thanked donors give again", "Say what the gift did"] },
            { title: "Templates by donor type", bullets: ["First-time, monthly, major", "Under 100 words with placeholders"] },
            { title: "Make it personal", bullets: ["Fill in through your donor database", "Add a hand-written line"] }
          ],
          tryIt: "Ask AI for three thank-you templates for three donor types. Add one true impact sentence to each.",
          youCanNow: "create thank-you templates with AI and personalize them safely.",
          quickCheck: [
            { objective: "O5", q: "Which donors are more likely to give again?", options: ["Donors thanked quickly and told what their gift did", "Donors who never hear back", "Donors who get the same letter as everyone", "Donors thanked a year later"], answer: 0, why: "Quick thanks and a report on what the gift did make donors more likely to give again." },
            { objective: "O5", q: "You have a thank-you template ready for a monthly donor. What makes it feel human?", options: ["Sending it twice", "Adding a hand-written line when you can", "Using a bigger font", "Removing the impact sentence"], answer: 1, why: "People can tell when no human was involved; a hand-written line helps." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Checking, editing and staying honest",
          minutes: 5,
          goal: "Run a final check on any grant or appeal draft before it goes out.",
          text: [
            "Before anything goes to a funder or donor, run a final check. Every number traces to a record. Every claim is true. Every story has permission. Word limits are met. It sounds like your organization, not a robot.",
            "Never let AI invent outcomes, partners or endorsements. A funder who finds one false claim may never trust you again.",
            "Read it out loud, and ask one colleague who knows the program to read it. For legal or tax statements, such as what is tax-deductible, check with your accountant or the official IRS guidance."
          ],
          steps: ["Trace every number to a record or source.", "Confirm each story has permission and no identifying details.", "Check word limits and required sections.", "Read it out loud.", "Ask a colleague who knows the program to review."],
          words: [["Endorsement", "a public statement of support from a person or group."], ["Tax-deductible", "a gift a donor may subtract from taxable income under tax rules."]],
          slides: [
            { title: "Final check", bullets: ["Every number traces to a record", "Every story has permission", "Word limits met"] },
            { title: "Never invent", bullets: ["Outcomes", "Partners", "Endorsements"] },
            { title: "Last steps", bullets: ["Read it out loud", "A colleague reviews it", "Tax statements: check with an accountant or the IRS"] }
          ],
          sources: [
            { name: "IRS: Charitable contributions", url: "https://www.irs.gov/charities-non-profits/charitable-contributions" }
          ],
          tryIt: "Final task: for one real grant opportunity, finish your statement of need and a program description that follow the guidelines, and finish a 150-word donor appeal for the same program. Run the final check on both.",
          youCanNow: "produce honest, checked grant sections and donor appeals with AI's help.",
          quickCheck: [
            { objective: "O6", q: "What is a good way to catch a draft that sounds like a robot?", options: ["Make it longer", "Add more statistics", "Read it out loud", "Send it right away"], answer: 2, why: "Read it out loud and ask a colleague who knows the program to read it." },
            { objective: "O6", q: "Your grant draft says you served 300 youth, but no record shows that. What do you do?", options: ["Keep it; it sounds good", "Round it to 250", "Ask AI where it got the number", "Remove it or use the number from your records"], answer: 3, why: "Every number must trace to a record or source." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Donors with AI",
        questions: [
          { objective: "O4", q: "Which appeal line is strongest, if true?", options: ["\"Please support our work.\"", "\"$50 provides a week of after-school tutoring.\"", "\"We need money.\"", "\"Give if you can.\""], answer: 1, why: "Specific, true impact helps donors see what their gift does." },
          { objective: "O5", q: "Where do you add donor names to thank-you letters?", options: ["Paste the donor list into AI", "On social media", "In your donor database or mail merge", "Nowhere"], answer: 2, why: "Keeping donor data in your own system protects privacy." },
          { objective: "O6", q: "AI adds a partner you do not work with. What do you do?", options: ["Keep it, it sounds good", "Ask the partner later", "Make it smaller", "Remove it"], answer: 3, why: "Never let AI invent partners or endorsements." },
          { objective: "O6", q: "A draft says gifts are tax-deductible. Where do you check?", options: ["An accountant or official IRS guidance", "Another AI chat", "A donor", "Nowhere"], answer: 0, why: "Tax statements need an official source or professional." },
          { objective: "O6", q: "Why ask a colleague who knows the program to read the draft?", options: ["To share blame", "They can catch false or missing details", "To make it longer", "It is not useful"], answer: 1, why: "Someone who knows the program spots errors." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Fundraising and Grant Writing",
    questions: [
      { objective: "O1", q: "A grant is:", options: ["A loan", "A tax bill", "Money for a purpose that does not have to be paid back", "A donor list"], answer: 2, why: "Grants are not repaid." },
      { objective: "O1", q: "NOFO stands for:", options: ["New office for operations", "Nonprofit open forum", "Notice of financial obligation", "Notice of funding opportunity"], answer: 3, why: "A NOFO describes a federal grant and its rules." },
      { objective: "O1", q: "Before applying for a federal grant, your organization must:", options: ["Register as an entity in SAM.gov", "Buy a special license", "Hire a lobbyist", "Pay Grants.gov a fee"], answer: 0, why: "Grants.gov requires SAM.gov registration first." },
      { objective: "O1", q: "SAM.gov gives your organization a:", options: ["Free laptop", "Unique Entity ID (UEI)", "Grant award", "Tax refund"], answer: 1, why: "The UEI identifies your organization for federal awards." },
      { objective: "O1", q: "Which is a good place to search for foundation funders?", options: ["A weather app", "A shopping site", "Candid", "A game"], answer: 2, why: "Candid lists nonprofits and funders." },
      { objective: "O1", q: "Where in a NOFO do you find who may apply?", options: ["The logo", "The page footer", "The cover color", "The eligibility section"], answer: 3, why: "Each NOFO has an eligibility section." },
      { objective: "O2", q: "Why turn guidelines into a checklist?", options: ["Missing one item can disqualify you", "Funders like lists", "It makes the grant longer", "It is required by law"], answer: 0, why: "A checklist helps you submit everything." },
      { objective: "O2", q: "An AI checklist and the funder's guidelines disagree. Trust:", options: ["The AI", "The funder's guidelines", "Whichever is easier", "Neither, guess"], answer: 1, why: "The funder's own document wins." },
      { objective: "O3", q: "The best way to start a statement of need with AI is to:", options: ["Ask it to make up strong numbers", "Give it nothing", "Give it your facts and say not to add statistics", "Paste client files"], answer: 2, why: "Your facts keep the draft true." },
      { objective: "O3", q: "A program description explains:", options: ["Your tax ID only", "The weather", "Who sits on the board", "What you will do, for whom, and what will change"], answer: 3, why: "That is its job in a grant." },
      { objective: "O3", q: "You want to include a client's story. You need:", options: ["Permission and no identifying details", "Their full name and address", "Nothing", "A photo of their ID"], answer: 0, why: "Stories need consent and privacy." },
      { objective: "O3", q: "A funder asks whether AI was used. You should:", options: ["Say no", "Answer honestly", "Ignore the question", "Ask AI to answer"], answer: 1, why: "Honesty protects trust." },
      { objective: "O4", q: "A strong appeal has:", options: ["Ten asks", "No ask", "One story, what a gift does, and one clear ask", "A long annual report"], answer: 2, why: "Short and specific works best." },
      { objective: "O4", q: "What is a call to action?", options: ["A phone call", "A legal notice", "A board vote", "The one clear thing you ask the reader to do"], answer: 3, why: "Like \"Give today\"." },
      { objective: "O4", q: "Which should NEVER go into an AI tool?", options: ["Your donor list with gift histories", "\"Make it warmer\"", "The program's public name", "A word limit"], answer: 0, why: "Donor data is private." },
      { objective: "O5", q: "Why make thank-you templates by donor type?", options: ["To save paper", "Different donors need different messages", "Donors require it", "AI cannot write one"], answer: 1, why: "First-time and monthly donors relate differently." },
      { objective: "O5", q: "A mail merge is:", options: ["A merger of two nonprofits", "A postal fee", "A tool that fills names into letters for many people", "An AI model"], answer: 2, why: "It personalizes letters outside the AI tool." },
      { objective: "O5", q: "What makes a thank-you feel human?", options: ["More placeholders", "A longer template", "Sending it late", "A personal, hand-written line"], answer: 3, why: "People notice a real human touch." },
      { objective: "O6", q: "In a final check, every number must:", options: ["Trace to a record or source", "Be rounded up", "Be large", "Come from AI"], answer: 0, why: "True numbers keep trust." },
      { objective: "O6", q: "If a funder finds one false claim:", options: ["Nothing happens", "They may never trust you again", "They give more", "It is expected"], answer: 1, why: "Trust is hard to rebuild." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      2,
      6,
      8,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Grant fit",
        objective: "O1",
        notYet: "The grant does not fit the program, or eligibility was not checked.",
        meets: "One real opportunity that fits the program, with eligibility checked.",
        exceeds: "Notes a second opportunity and the deadline for each."
      },
      {
        name: "Follows the guidelines",
        objective: "O2",
        notYet: "A required section, limit or attachment is missed.",
        meets: "Drafts follow the funder's checklist, sections and word limits.",
        exceeds: "The checklist was checked line by line against the funder's document."
      },
      {
        name: "Need and program from facts",
        objective: "O3",
        notYet: "A statistic or outcome cannot be traced to a record or source.",
        meets: "About 250-word statement of need and a program description using only checked facts.",
        exceeds: "Uses the funder's words and priorities and includes a permitted story."
      },
      {
        name: "Donor appeal",
        objective: "O4",
        notYet: "No clear ask, or donor details in the prompt.",
        meets: "About 150 words with one story, what a gift does and one clear ask, using placeholders.",
        exceeds: "The amount and what it provides come from the program's real costs."
      },
      {
        name: "Honest and in our voice",
        objective: "O6",
        notYet: "An invented outcome, partner or endorsement remains.",
        meets: "Every claim is true and both pieces sound like the organization.",
        exceeds: "A colleague who knows the program has read and approved it."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Grant applications submitted within 90 days (follow-up survey)",
      "Grants awarded and appeal dollars raised, as reported by organizations",
      "Learners who start another Koach Learn nonprofit course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet",
      "A free AI assistant",
      "Your program facts and records, and one funder's public guidelines",
      "About 60 minutes in total, plus time to edit the drafts"
    ],
    facilitatorNotes: [
      "Ask learners to bring one real grant opportunity and their program numbers to the session.",
      "Remind learners never to paste donor lists, names or gift histories into AI tools.",
      "Warn learners about companies that charge to register them in SAM.gov; it is free.",
      "Pair learners to read each other's drafts out loud and trace every number to a source.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
