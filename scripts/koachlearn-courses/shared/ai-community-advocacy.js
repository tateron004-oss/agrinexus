"use strict";

// Koach Learn course (shared, bonus): "AI for Community Advocacy". Categories: Non Profits, Undeserved Community. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.
// Nonpartisan, issue-based advocacy. 501(c)(3) lobbying and campaign limits are from irs.gov; the course points to legal help for specifics.

module.exports = {
  id: "ai-community-advocacy",
  category: "Non Profits",
  name: "AI for Community Advocacy",
  skills: "Defining an issue and a clear ask, Researching facts and checking sources, Finding the decision maker, Writing a letter or public comment with AI, Making a one-page fact sheet, Giving two-minute public testimony",
  outcome: "plan a small advocacy campaign on a local issue with AI help: define a clear ask, back it with checked facts and real stories, reach the right decision maker with a letter or public comment and a one-page fact sheet, and speak up in a two-minute public testimony, while following the rules for nonprofits.",
  about: [
    "Advocacy means speaking up to change something: a dangerous crosswalk, a bus route that was cut, a park that needs lights, a rule that blocks people from jobs or housing. Communities that speak up clearly and with facts get heard more often.",
    "This course is for nonprofit staff and volunteers, faith and neighborhood groups, and community members who want to make change. AI assistants such as ChatGPT, Microsoft Copilot and Google Gemini can help research, write letters, make fact sheets and practice speeches, while your community's voice and real stories stay at the center.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course. Advocacy here is about issues, not candidates; nonprofits have special rules, covered in Lesson 6."
  ],
  finalTask: "Build an advocacy kit for one real local issue: a one-sentence problem and a specific ask, three facts with official sources, two short community stories shared with permission, the name of the decision maker and how to reach them, a letter or public comment of under 300 words, a one-page fact sheet, and a two-minute testimony you have practiced out loud.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Nonprofit staff and volunteers, faith and neighborhood groups, and community members who want to change a local problem such as a dangerous crosswalk, a cut bus route or a rule that blocks people from jobs or housing.",
    startingPoint: "Care about a local issue and can talk about it with neighbors. Many have not written a public comment, found the right decision maker, checked facts against official sources or spoken at a public meeting.",
    gap: "Communities that speak up with a clear ask, checked facts and real stories are heard more often. Learners need to plan a small campaign with AI help while keeping their community's voice at the center and following the rules for nonprofits, so their effort leads to real change.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a phone or computer with a free AI assistant and a free design or document tool",
      "Stories are shared only with permission, and private details stay out of AI prompts",
      "Nonprofit rules: issue advocacy only, no support for candidates; learners check IRS guidance",
      "Time: about five-minute lessons plus time to research and practice"
    ],
    prerequisites: "None. Learners new to AI tools can take \"Introduction to AI and Digital Confidence\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a community concern", action: "write a one-sentence problem statement and a specific ask that says what, from whom and by when", standard: "shaped with at least two people affected" },
    { id: "O2", condition: "For your issue", action: "find facts from official or trusted sources and collect community stories", standard: "with three facts each listed with source, link and date, and stories shared only with permission" },
    { id: "O3", condition: "Using official websites", action: "identify the decision maker, the next meeting or comment deadline, your allies and likely opposition", standard: "with the decision maker confirmed on an official source" },
    { id: "O4", condition: "Using your checked facts and a story", action: "write a respectful letter or public comment that makes your ask", standard: "in under 300 words with who you are, facts, a story and the ask" },
    { id: "O5", condition: "Using AI for text and a free design tool", action: "create a one-page fact sheet with the ask in a clear box", standard: "so a reader can tell you the ask after one minute" },
    { id: "O6", condition: "At a public meeting", action: "give a two-minute testimony and plan supporter action within nonprofit advocacy rules", standard: "timed at two minutes or less and with no support for candidates" }
  ],
  chapters: [
    {
      name: "Chapter 1: Building your case",
      lessons: [
        {
          objectives: ["O1"],
          title: "Defining the issue and your ask",
          minutes: 5,
          goal: "Turn a community concern into a clear problem statement and a specific ask.",
          text: [
            "Big concerns like \"our neighborhood isn't safe\" are hard for officials to act on. Narrow it to a specific problem: \"Children cross six lanes on Main Street at 5th Avenue to reach school, and there is no crosswalk signal.\"",
            "Then make a specific ask: what exactly you want, from whom, by when. \"We ask the City Transportation Department to install a pedestrian signal at Main and 5th before next school year.\" A clear ask gives decision makers something to say yes to.",
            "Ask AI to sharpen it: \"Help me turn this concern into a one-sentence problem and a specific, realistic ask: [your concern].\" Then check it with the people most affected. Advocacy works best when the community shapes the ask."
          ],
          steps: ["Write the concern in your own words.", "Narrow it to one specific problem, place and group affected.", "Write an ask: what, who decides, by when.", "Ask AI to sharpen the wording.", "Check it with people most affected."],
          words: [["Advocacy", "speaking up to change a policy, practice or decision."], ["Ask", "the specific action you want a decision maker to take."], ["Problem statement", "one or two sentences describing the issue clearly."]],
          slides: [
            { title: "From concern to problem", bullets: ["\"Not safe\" is too broad", "Name the place, the people, the problem"] },
            { title: "A specific ask", bullets: ["What exactly", "From whom", "By when"] },
            { title: "Community first", bullets: ["AI sharpens wording", "Affected people shape the ask"] }
          ],
          tryIt: "Pick a real local concern. Write a one-sentence problem and a specific ask, use AI to sharpen them, and share them with two people affected.",
          youCanNow: "turn a concern into a clear problem statement and a specific ask.",
          quickCheck: [
            { objective: "O1", q: "What three things does a strong ask include?", options: ["Your name, age and address", "What, from whom and by when", "A slogan, a logo and a color", "A complaint, a threat and a deadline"], answer: 1, why: "A strong ask names the action, the decision maker and the deadline." },
            { objective: "O1", q: "Your group's concern is \"our neighborhood is unsafe.\" What would you do first?", options: ["Narrow it to one specific problem officials can act on", "Send it to every official in the state", "Post it online without changes", "Wait for things to get worse"], answer: 0, why: "Specific problems lead to specific actions officials can take." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Researching facts and checking sources",
          minutes: 6,
          goal: "Find facts that support your case and check every one against an official or trusted source.",
          text: [
            "Facts make officials listen. Useful sources: city and county websites, meeting minutes and budgets, state agencies, the U.S. Census Bureau (data.census.gov) for population and income data, police or transportation data, local news, and university or nonprofit research.",
            "AI can suggest where to look and what to search for: \"What kinds of public data would show pedestrian safety problems at an intersection in a U.S. city, and where would I find them?\" But AI can invent statistics and studies. Never use a number from AI unless you find it yourself in the original source.",
            "Collect three strong facts, each with the source name, link and date. Add real stories: a parent, a student, a crossing guard. Always get permission to share someone's story, and leave out private details they do not want public."
          ],
          steps: ["Ask AI where to find data on your issue.", "Go to those sources yourself.", "Write down three facts with source, link and date.", "Never use a number you cannot find in the original source.", "Collect two stories with permission."],
          words: [["Source", "where a fact comes from."], ["Primary source", "the original place data or information was published."], ["Meeting minutes", "the official written record of a public meeting."]],
          slides: [
            { title: "Where facts live", bullets: ["City, county and state websites", "Census data and agency reports", "Local news and research"] },
            { title: "AI points, you verify", bullets: ["AI can invent statistics", "Find every number in the original source", "Write source, link and date"] },
            { title: "Facts plus stories", bullets: ["Real people's experiences", "Always get permission", "Leave out private details"] }
          ],
          sources: [{ name: "U.S. Census Bureau: data.census.gov", url: "https://data.census.gov/" }],
          tryIt: "Find three facts about your issue from official or trusted sources, with link and date for each. Ask two people if you may share their story.",
          youCanNow: "research checked facts and gather community stories with permission.",
          quickCheck: [
            { objective: "O2", q: "What is a trusted source for a fact about your city?", options: ["A random social media post", "An AI answer with no link", "The city's own official website or report", "A rumor from a neighbor"], answer: 2, why: "Official sources are where facts can be checked and cited." },
            { objective: "O2", q: "A neighbor tells you a powerful story about being hurt at the crosswalk. What would you do before using it?", options: ["Use it with their full name and address", "Change the details and use it anyway", "Post it online first", "Ask their permission and how they want to be named"], answer: 3, why: "Stories are shared only with the person's permission." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Finding the decision maker and the right moment",
          minutes: 5,
          goal: "Identify who can say yes to your ask and when they will decide.",
          text: [
            "Advocacy fails when it goes to the wrong person. Find out who has the power to say yes: a city council member, a county board, a school board, a state legislator, a department head or a company manager.",
            "Ask AI: \"In a typical U.S. city, who decides whether a new crosswalk signal is installed, and what process is involved?\" Then confirm on your own city's website, or call the office. Learn the calendar: when budgets are set, when the council or board meets, and when public comment is open.",
            "Map your allies (neighbors, schools, churches, businesses, other nonprofits) and anyone likely to oppose, and why. Allies make you stronger; understanding opposition helps you answer concerns."
          ],
          steps: ["Ask AI who typically decides on your issue.", "Confirm on your local government's website or by phone.", "Find meeting dates, budget timing and public comment periods.", "List allies and likely opposition.", "Pick your moment to act."],
          words: [["Decision maker", "the person or body with the power to say yes to your ask."], ["Public comment", "a chance for the public to speak or write to officials before a decision."], ["Ally", "a person or group that supports your cause."]],
          slides: [
            { title: "Who can say yes?", bullets: ["Council, board, legislator, department head", "Confirm on official websites"] },
            { title: "Know the calendar", bullets: ["Meeting dates", "Budget timing", "Public comment periods"] },
            { title: "Map the field", bullets: ["Allies: neighbors, schools, churches, businesses", "Opposition and their reasons"] }
          ],
          tryIt: "Find the decision maker for your issue and their next meeting or comment deadline on an official website. List three allies and one likely concern from opponents.",
          youCanNow: "find the right decision maker, timing and allies for an advocacy ask.",
          quickCheck: [
            { objective: "O3", q: "Who is a decision maker in advocacy?", options: ["The person or body who can say yes to your ask", "Anyone who agrees with you", "The newspaper", "The person who complains the loudest"], answer: 0, why: "The decision maker has the power to grant your ask." },
            { objective: "O3", q: "You want a new park light, but you do not know who decides. What would you do?", options: ["Write to the President", "Check the city website or call the city to find out", "Guess and send it to the school board", "Wait until someone tells you"], answer: 1, why: "Confirm the decision maker on an official source before you reach out." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Building your case",
        questions: [
          { objective: "O1", q: "Which is the clearest advocacy ask?", options: ["\"Make things better\"", "\"Fix safety\"", "\"We ask the Transportation Department to install a pedestrian signal at Main and 5th before next school year\"", "\"Do something now\""], answer: 2, why: "It says what, who and by when." },
          { objective: "O2", q: "AI gives a statistic about crashes at your intersection. What do you do?", options: ["Find it in the original source before using it", "Use it right away", "Round it up", "Put it in bold"], answer: 0, why: "AI can invent statistics." },
          { objective: "O2", q: "Before sharing a neighbor's story in your campaign, you must:", options: ["Post their address", "Change it to sound worse", "Nothing", "Get their permission"], answer: 3, why: "Stories belong to the people who lived them." },
          { objective: "O3", q: "Why find the decision maker?", options: ["To post their home address", "Advocacy fails when it goes to the wrong person", "It does not matter", "To avoid them"], answer: 1, why: "Only the right person can say yes." },
          { objective: "O3", q: "What is a public comment period?", options: ["A TV show", "A chance for the public to speak or write before a decision", "A tax deadline", "A private meeting"], answer: 1, why: "It is a formal time for public input." }
        ]
      }
    },
    {
      name: "Chapter 2: Speaking up effectively",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing a letter or public comment with AI",
          minutes: 5,
          goal: "Write a short, respectful letter or public comment that makes your ask.",
          text: [
            "A strong letter or comment is short (under 300 words) and has four parts: who you are and your connection to the issue, the problem with one or two facts, a short real story, and your specific ask with a thank-you.",
            "Ask AI: \"Write a respectful public comment under 300 words to the City Council. I am a parent at Lincoln Elementary. Problem: [problem]. Facts: [your checked facts]. Story: [shared with permission]. Ask: [your ask].\" Then edit so it sounds like you.",
            "Personal letters beat form letters: officials notice when hundreds of identical AI messages arrive. Encourage supporters to add their own sentence. Stay respectful even if you are angry; insults get ignored."
          ],
          steps: ["Who you are and your connection.", "The problem with one or two checked facts.", "A short real story, shared with permission.", "Your specific ask and a thank-you.", "Edit it to sound like you; keep it under 300 words."],
          words: [["Form letter", "the same letter sent by many people with little or no change."], ["Constituent", "a person who lives in an official's district and whom they represent."]],
          slides: [
            { title: "Four parts", bullets: ["Who you are", "Problem and facts", "A real story", "Your ask and thanks"] },
            { title: "AI drafts, you personalize", bullets: ["Give it checked facts only", "Under 300 words", "Make it sound like you"] },
            { title: "Be heard", bullets: ["Personal beats identical letters", "Supporters add their own sentence", "Stay respectful"] }
          ],
          tryIt: "Write a letter or public comment of under 300 words for your issue with AI help, using your checked facts and a story shared with permission. Read it out loud and edit it.",
          youCanNow: "write a short, respectful letter or public comment that makes a clear ask.",
          quickCheck: [
            { objective: "O4", q: "What is a constituent?", options: ["A staff member of a nonprofit", "A paid lobbyist", "A newspaper reporter", "A person who lives in an official's district"], answer: 3, why: "Officials pay attention to the people they represent." },
            { objective: "O4", q: "AI writes a letter that sounds angry and blames the council. What would you do?", options: ["Send it to show how upset you are", "Rewrite it to be respectful, with facts, a story and the ask", "Add more angry words", "Send the same letter from 100 fake names"], answer: 1, why: "Respectful, personal letters with a clear ask are more likely to be heard." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Making a one-page fact sheet",
          minutes: 5,
          goal: "Create a one-page fact sheet that busy officials and neighbors can read in a minute.",
          text: [
            "A fact sheet is a one-page handout you leave with officials, share online and give to supporters. Busy people read the top and skim the rest.",
            "Structure: a bold headline with the problem, three key facts with sources, a short quote or story, the ask in a box, and who you are with contact information. Use plain language, big text and one simple chart or photo if it helps.",
            "Ask AI to draft the text from your facts, then lay it out in Canva or Google Docs. Check every number and source again. Translate it if your community speaks other languages; AI can draft a translation, but have a fluent speaker check it."
          ],
          steps: ["Write a headline that names the problem.", "Add three facts with sources.", "Add one short quote or story.", "Put the ask in a box.", "Lay it out on one page; check numbers; get translations checked by fluent speakers."],
          words: [["Fact sheet", "a one-page handout summarizing an issue, facts and an ask."], ["Plain language", "clear, simple writing most people can understand."]],
          slides: [
            { title: "One page, one minute", bullets: ["Busy people read the top", "Then they skim"] },
            { title: "Structure", bullets: ["Headline with the problem", "Three facts with sources", "A quote, the ask in a box, contact"] },
            { title: "Polish it", bullets: ["Canva or Google Docs", "Re-check every number", "Translations checked by fluent speakers"] }
          ],
          tryIt: "Make a one-page fact sheet for your issue with AI drafting the text and Canva or Google Docs for layout. Ask someone to read it in one minute and tell you the ask.",
          youCanNow: "create a clear one-page fact sheet for an advocacy issue.",
          quickCheck: [
            { objective: "O5", q: "Who is a fact sheet mainly for?", options: ["Busy officials and neighbors who need the key points fast", "Only the people who wrote it", "Lawyers in court", "Students writing essays"], answer: 0, why: "A fact sheet gives busy readers the problem, facts and ask in one minute." },
            { objective: "O5", q: "Your draft fact sheet is two full pages of small text. What would you do?", options: ["Make the text smaller", "Add a third page for more facts", "Cut it to one page with the ask in a clear box", "Remove the ask to save space"], answer: 2, why: "One page with a clear ask is easier to read and act on." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Public testimony, supporters and the rules",
          minutes: 6,
          goal: "Give a two-minute testimony, mobilize supporters and follow nonprofit advocacy rules.",
          text: [
            "Many councils and boards give each speaker two or three minutes. Prepare a two-minute version of your letter: about 250 spoken words. Ask AI to trim it, then practice out loud with a timer. Start with your name and connection, end with your ask, and bring copies of your fact sheet.",
            "Bring supporters. A room of neighbors wearing the same color sends a message. Use AI to draft a short sign-up message and reminders, and help supporters write their own comments.",
            "Know the rules for nonprofits. The IRS says a 501(c)(3) may do some lobbying, but not as a substantial part of its activities, and educating the public on policy is not lobbying. It is absolutely prohibited from supporting or opposing candidates for office, though nonpartisan voter education and registration are allowed. Ask a nonprofit lawyer or your state's nonprofit association about specifics."
          ],
          steps: ["Trim your letter to about 250 spoken words.", "Practice out loud with a two-minute timer.", "Bring fact sheet copies and supporters.", "Use AI to draft sign-up and reminder messages.", "Check the nonprofit rules on lobbying and candidates."],
          words: [["Testimony", "speaking to officials at a public meeting about an issue."], ["Lobbying", "trying to influence legislation, such as contacting lawmakers about a bill."], ["Nonpartisan", "not supporting any political party or candidate."]],
          slides: [
            { title: "Two-minute testimony", bullets: ["About 250 spoken words", "Name and connection first, ask last", "Practice with a timer"] },
            { title: "Bring supporters", bullets: ["Show up together", "AI drafts sign-ups and reminders", "Each person adds their own words"] },
            { title: "501(c)(3) rules (IRS)", bullets: ["Some lobbying allowed, not a substantial part", "No supporting or opposing candidates", "Nonpartisan voter education is allowed"] }
          ],
          sources: [{ name: "IRS: Lobbying", url: "https://www.irs.gov/charities-non-profits/lobbying" }, { name: "IRS: Restriction of political campaign intervention by 501(c)(3) organizations", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/the-restriction-of-political-campaign-intervention-by-section-501c3-tax-exempt-organizations" }],
          tryIt: "Final task: trim your letter into a two-minute testimony and practice it out loud with a timer. Put it together with your problem and ask, facts, stories, decision maker, letter and fact sheet to complete your advocacy kit.",
          youCanNow: "plan and carry out a small, fact-based advocacy campaign with AI help, within the rules.",
          quickCheck: [
            { objective: "O6", q: "What does nonpartisan mean?", options: ["Supporting one party", "Paid for by the government", "Not supporting any candidate or party", "Against all officials"], answer: 2, why: "Nonpartisan means not taking sides with candidates or parties." },
            { objective: "O6", q: "Your testimony runs three and a half minutes, but you have two. What would you do?", options: ["Speak faster", "Keep going when the timer ends", "Skip the ask", "Cut it to your name, connection, one fact, one story and the ask, and practice with a timer"], answer: 3, why: "Trimming to the key parts and practicing keeps you within the time limit." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Speaking up effectively",
        questions: [
          { objective: "O4", q: "Why are personal letters better than hundreds of identical ones?", options: ["Identical letters are illegal", "Personal letters are longer", "They are not better", "Officials notice and value individual voices"], answer: 3, why: "Personal stories and words carry more weight." },
          { objective: "O5", q: "A fact sheet should be:", options: ["One page that can be read in about a minute", "Twenty pages", "Only photos", "Written in jargon"], answer: 0, why: "Busy readers need short and clear." },
          { objective: "O5", q: "AI translates your fact sheet into Spanish. What should you do next?", options: ["Print it without checking", "Delete the English version", "Have a fluent speaker check it", "Skip translation"], answer: 2, why: "AI translations can have errors." },
          { objective: "O6", q: "About how many spoken words fit in two minutes?", options: ["About 2,500", "About 20", "About 1,000", "About 250"], answer: 3, why: "Most people speak about 120-130 words a minute." },
          { objective: "O6", q: "According to the IRS, can a 501(c)(3) publicly support a candidate for office?", options: ["Yes, anytime", "Only on social media", "No, it is absolutely prohibited", "Only small donations"], answer: 2, why: "The IRS says campaign intervention is absolutely prohibited." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Community Advocacy",
    questions: [
      { objective: "O1", q: "Advocacy means:", options: ["Only voting", "Speaking up to change a policy, practice or decision", "Running for office", "Suing someone"], answer: 1, why: "Advocacy is about creating change by speaking up." },
      { objective: "O1", q: "Why narrow a big concern to a specific problem?", options: ["Officials can act on specific problems", "It sounds smaller", "AI requires it", "To avoid action"], answer: 0, why: "Specific problems lead to specific solutions." },
      { objective: "O1", q: "A strong ask includes:", options: ["Only feelings", "A threat", "What, from whom and by when", "No details"], answer: 2, why: "Clear asks are easier to say yes to." },
      { objective: "O1", q: "Who should shape the ask?", options: ["The people most affected", "Only the AI", "Only outsiders", "Nobody"], answer: 0, why: "Community-led advocacy is stronger." },
      { objective: "O2", q: "Where can you find U.S. population and income data?", options: ["A random meme", "An AI guess", "A social media comment", "data.census.gov"], answer: 3, why: "The Census Bureau publishes official data." },
      { objective: "O2", q: "A primary source is:", options: ["Any blog", "The original place information was published", "An AI summary", "A rumor"], answer: 1, why: "Primary sources are the most reliable." },
      { objective: "O2", q: "For each fact you collect, write down:", options: ["Only the number", "The source, link and date", "Nothing", "Your guess"], answer: 1, why: "Sources let others verify your facts." },
      { objective: "O3", q: "Meeting minutes are:", options: ["How long a meeting lasted", "A type of clock", "A private diary", "The official written record of a public meeting"], answer: 3, why: "Minutes record what was decided." },
      { objective: "O3", q: "AI says the school board decides on crosswalks. You should:", options: ["Confirm on your city's website or by calling", "Trust it", "Write to every office at once without checking", "Give up"], answer: 0, why: "Local processes differ; confirm officially." },
      { objective: "O3", q: "Why learn the budget calendar?", options: ["Budgets are secret", "It is not useful", "Many decisions are made when budgets are set", "To skip meetings"], answer: 2, why: "Timing your ask with budget decisions matters." },
      { objective: "O3", q: "An ally is:", options: ["An opponent", "A decision maker only", "A website", "A person or group that supports your cause"], answer: 3, why: "Allies add strength and voices." },
      { objective: "O3", q: "Why understand likely opposition?", options: ["To insult them", "To ignore them", "So you can answer their concerns", "To copy them"], answer: 2, why: "Addressing concerns builds support." },
      { objective: "O4", q: "A constituent is:", options: ["A type of law", "A person who lives in an official's district", "A lawyer", "A city building"], answer: 1, why: "Officials pay attention to constituents." },
      { objective: "O4", q: "A strong public comment is:", options: ["Under 300 words with who you are, facts, a story and an ask", "As long as possible", "Angry and insulting", "Only statistics"], answer: 0, why: "Short, personal and specific works best." },
      { objective: "O4", q: "You are angry at officials. In your letter you should:", options: ["Use insults", "Make threats", "Stay respectful", "Write in all capitals"], answer: 2, why: "Respectful messages get read and considered." },
      { objective: "O5", q: "Where should the ask appear on a fact sheet?", options: ["In a clear box", "Hidden at the bottom in small print", "Nowhere", "Only on the back"], answer: 0, why: "The ask should stand out." },
      { objective: "O6", q: "At public testimony, you should start with:", options: ["A long history", "Your ask only", "A joke", "Your name and connection to the issue"], answer: 3, why: "It tells officials why you matter to the issue." },
      { objective: "O6", q: "According to the IRS, educating the public about policy:", options: ["Is always illegal", "Is not considered lobbying", "Counts as campaigning", "Is banned for nonprofits"], answer: 1, why: "The IRS says educational activities are not lobbying." },
      { objective: "O6", q: "A 501(c)(3) can do some lobbying, but:", options: ["Unlimited amounts", "Not as a substantial part of its activities", "Only for candidates", "Never at all"], answer: 1, why: "Too much lobbying risks tax-exempt status." },
      { objective: "O6", q: "Nonpartisan voter registration drives by a 501(c)(3) are, per the IRS:", options: ["Always prohibited", "Only allowed for one party", "Required", "Generally allowed if truly nonpartisan"], answer: 3, why: "Nonpartisan voter registration is not prohibited." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      2,
      5,
      6,
      8,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Problem and ask",
        objective: "O1",
        notYet: "The problem is too broad, or the ask is missing what, from whom or by when.",
        meets: "A one-sentence problem and a specific ask with what, from whom and by when.",
        exceeds: "Shows how people affected helped shape the ask."
      },
      {
        name: "Facts and stories",
        objective: "O2",
        notYet: "A fact has no source, or a story is used without permission.",
        meets: "Three facts with source, link and date, and two stories shared with permission.",
        exceeds: "Facts come from primary sources and stories use the names people chose."
      },
      {
        name: "Decision maker",
        objective: "O3",
        notYet: "Wrong or unconfirmed decision maker.",
        meets: "Decision maker and next deadline confirmed on an official website.",
        exceeds: "Also lists allies and an answer to the main opposition concern."
      },
      {
        name: "Letter or comment and fact sheet",
        objective: "O4",
        notYet: "Over 300 words, disrespectful, or no clear ask.",
        meets: "Under 300 words, respectful, with who you are, facts, a story and the ask; the fact sheet fits on one page.",
        exceeds: "A reader can say the ask after one minute with the fact sheet."
      },
      {
        name: "Testimony and rules",
        objective: "O6",
        notYet: "Over two minutes, not practiced, or mentions support for a candidate.",
        meets: "Practiced out loud in two minutes or less, starting with name and connection, and issue-only.",
        exceeds: "Includes a plan for supporters to attend or comment."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who submit a letter or public comment, or speak at a public meeting, within 60 days (follow-up survey)",
      "Campaigns where the decision maker responds, schedules the issue or grants the ask",
      "Number of community members who join a campaign after the course",
      "Learners who start another Koach Learn nonprofit course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini",
      "Canva or Google Docs for the fact sheet",
      "A timer for testimony practice",
      "About 60 minutes for lessons and checks, plus time to research and practice"
    ],
    facilitatorNotes: [
      "Let groups work on one shared local issue so learners can split research and practice testimony together.",
      "Remind nonprofit staff that 501(c)(3) groups may not support candidates; point them to IRS guidance for their own situation.",
      "Stories are shared only with permission; keep private details out of AI prompts.",
      "Have learners practice testimony out loud with a timer in front of the group.",
      "Score the advocacy kit with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
