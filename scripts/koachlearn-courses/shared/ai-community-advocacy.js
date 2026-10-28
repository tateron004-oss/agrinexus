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
  chapters: [
    {
      name: "Chapter 1: Building your case",
      lessons: [
        {
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
          youCanNow: "turn a concern into a clear problem statement and a specific ask."
        },
        {
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
          youCanNow: "research checked facts and gather community stories with permission."
        },
        {
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
          youCanNow: "find the right decision maker, timing and allies for an advocacy ask."
        }
      ],
      check: {
        title: "Knowledge Check 1: Building your case",
        questions: [
          { q: "Which is the clearest advocacy ask?", options: ["\"Make things better\"", "\"Fix safety\"", "\"We ask the Transportation Department to install a pedestrian signal at Main and 5th before next school year\"", "\"Do something now\""], answer: 2, why: "It says what, who and by when." },
          { q: "AI gives a statistic about crashes at your intersection. What do you do?", options: ["Find it in the original source before using it", "Use it right away", "Round it up", "Put it in bold"], answer: 0, why: "AI can invent statistics." },
          { q: "Before sharing a neighbor's story in your campaign, you must:", options: ["Post their address", "Change it to sound worse", "Nothing", "Get their permission"], answer: 3, why: "Stories belong to the people who lived them." },
          { q: "Why find the decision maker?", options: ["To post their home address", "Advocacy fails when it goes to the wrong person", "It does not matter", "To avoid them"], answer: 1, why: "Only the right person can say yes." },
          { q: "What is a public comment period?", options: ["A TV show", "A chance for the public to speak or write before a decision", "A tax deadline", "A private meeting"], answer: 1, why: "It is a formal time for public input." }
        ]
      }
    },
    {
      name: "Chapter 2: Speaking up effectively",
      lessons: [
        {
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
          youCanNow: "write a short, respectful letter or public comment that makes a clear ask."
        },
        {
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
          youCanNow: "create a clear one-page fact sheet for an advocacy issue."
        },
        {
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
          youCanNow: "plan and carry out a small, fact-based advocacy campaign with AI help, within the rules."
        }
      ],
      check: {
        title: "Knowledge Check 2: Speaking up effectively",
        questions: [
          { q: "Why are personal letters better than hundreds of identical ones?", options: ["Identical letters are illegal", "Personal letters are longer", "They are not better", "Officials notice and value individual voices"], answer: 3, why: "Personal stories and words carry more weight." },
          { q: "A fact sheet should be:", options: ["One page that can be read in about a minute", "Twenty pages", "Only photos", "Written in jargon"], answer: 0, why: "Busy readers need short and clear." },
          { q: "AI translates your fact sheet into Spanish. What should you do next?", options: ["Print it without checking", "Delete the English version", "Have a fluent speaker check it", "Skip translation"], answer: 2, why: "AI translations can have errors." },
          { q: "About how many spoken words fit in two minutes?", options: ["About 2,500", "About 20", "About 1,000", "About 250"], answer: 3, why: "Most people speak about 120-130 words a minute." },
          { q: "According to the IRS, can a 501(c)(3) publicly support a candidate for office?", options: ["Yes, anytime", "Only on social media", "No, it is absolutely prohibited", "Only small donations"], answer: 2, why: "The IRS says campaign intervention is absolutely prohibited." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Community Advocacy",
    questions: [
      { q: "Advocacy means:", options: ["Only voting", "Speaking up to change a policy, practice or decision", "Running for office", "Suing someone"], answer: 1, why: "Advocacy is about creating change by speaking up." },
      { q: "Why narrow a big concern to a specific problem?", options: ["Officials can act on specific problems", "It sounds smaller", "AI requires it", "To avoid action"], answer: 0, why: "Specific problems lead to specific solutions." },
      { q: "A strong ask includes:", options: ["Only feelings", "A threat", "What, from whom and by when", "No details"], answer: 2, why: "Clear asks are easier to say yes to." },
      { q: "Who should shape the ask?", options: ["The people most affected", "Only the AI", "Only outsiders", "Nobody"], answer: 0, why: "Community-led advocacy is stronger." },
      { q: "Where can you find U.S. population and income data?", options: ["A random meme", "An AI guess", "A social media comment", "data.census.gov"], answer: 3, why: "The Census Bureau publishes official data." },
      { q: "A primary source is:", options: ["Any blog", "The original place information was published", "An AI summary", "A rumor"], answer: 1, why: "Primary sources are the most reliable." },
      { q: "For each fact you collect, write down:", options: ["Only the number", "The source, link and date", "Nothing", "Your guess"], answer: 1, why: "Sources let others verify your facts." },
      { q: "Meeting minutes are:", options: ["How long a meeting lasted", "A type of clock", "A private diary", "The official written record of a public meeting"], answer: 3, why: "Minutes record what was decided." },
      { q: "AI says the school board decides on crosswalks. You should:", options: ["Confirm on your city's website or by calling", "Trust it", "Write to every office at once without checking", "Give up"], answer: 0, why: "Local processes differ; confirm officially." },
      { q: "Why learn the budget calendar?", options: ["Budgets are secret", "It is not useful", "Many decisions are made when budgets are set", "To skip meetings"], answer: 2, why: "Timing your ask with budget decisions matters." },
      { q: "An ally is:", options: ["An opponent", "A decision maker only", "A website", "A person or group that supports your cause"], answer: 3, why: "Allies add strength and voices." },
      { q: "Why understand likely opposition?", options: ["To insult them", "To ignore them", "So you can answer their concerns", "To copy them"], answer: 2, why: "Addressing concerns builds support." },
      { q: "A constituent is:", options: ["A type of law", "A person who lives in an official's district", "A lawyer", "A city building"], answer: 1, why: "Officials pay attention to constituents." },
      { q: "A strong public comment is:", options: ["Under 300 words with who you are, facts, a story and an ask", "As long as possible", "Angry and insulting", "Only statistics"], answer: 0, why: "Short, personal and specific works best." },
      { q: "You are angry at officials. In your letter you should:", options: ["Use insults", "Make threats", "Stay respectful", "Write in all capitals"], answer: 2, why: "Respectful messages get read and considered." },
      { q: "Where should the ask appear on a fact sheet?", options: ["In a clear box", "Hidden at the bottom in small print", "Nowhere", "Only on the back"], answer: 0, why: "The ask should stand out." },
      { q: "At public testimony, you should start with:", options: ["A long history", "Your ask only", "A joke", "Your name and connection to the issue"], answer: 3, why: "It tells officials why you matter to the issue." },
      { q: "According to the IRS, educating the public about policy:", options: ["Is always illegal", "Is not considered lobbying", "Counts as campaigning", "Is banned for nonprofits"], answer: 1, why: "The IRS says educational activities are not lobbying." },
      { q: "A 501(c)(3) can do some lobbying, but:", options: ["Unlimited amounts", "Not as a substantial part of its activities", "Only for candidates", "Never at all"], answer: 1, why: "Too much lobbying risks tax-exempt status." },
      { q: "Nonpartisan voter registration drives by a 501(c)(3) are, per the IRS:", options: ["Always prohibited", "Only allowed for one party", "Required", "Generally allowed if truly nonpartisan"], answer: 3, why: "Nonpartisan voter registration is not prohibited." }
    ]
  }
};
