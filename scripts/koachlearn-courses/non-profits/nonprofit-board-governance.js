"use strict";

// Koach Learn course: Non Profits -> "Nonprofit Board Governance" (new people-and-leadership course the owner asked for on 28 October 2026). Skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// IRS Form 990 facts (which form, due date, public inspection, automatic revocation) and the California Registry of Charities and Fundraisers checked on irs.gov and oag.ca.gov, 28 October 2026.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-board-governance",
  category: "Non Profits",
  name: "Nonprofit Board Governance",
  skills: "Board duties of care, loyalty and obedience, Board and staff roles, Bylaws, meetings and minutes, Handling conflicts of interest, Financial oversight and Form 990, Recruiting board members",
  outcome: "serve on or lead a nonprofit board well: explain the board's legal duties, keep board and staff roles clear, run a proper meeting with minutes, handle a conflict of interest, review the finances and annual filings, and recruit the right new members.",
  about: [
    "This course is for nonprofit board members, founders, executive directors, church and community group leaders, and anyone asked to join a board for the first time.",
    "A board is legally responsible for the organization. You will learn the board's three core duties, how the board and staff divide the work, what bylaws are for, how to run meetings and keep minutes, how to handle conflicts of interest, what financial reports and IRS Form 990 a board should review, California's charity registration rules, and how to recruit good board members.",
    "Each lesson takes about five minutes, with a \"Try it now\" task you can do with your own organization's documents. There is a knowledge check after each chapter and a 20-question quiz at the end. This course is general education, not legal or tax advice. Rules differ by state and change over time, so check the official sources named in the lessons and get advice from a nonprofit lawyer or accountant on your situation."
  ],
  finalTask: "Build a one-page board governance checklist for a real or example nonprofit: the three duties in plain words, a board-versus-staff split for five common decisions, a meeting agenda with a minutes template, a conflict-of-interest steps list, a yearly calendar of financial reviews and filings (which Form 990 version, its due date, and any state registration such as California's Registry of Charities and Fundraisers), and a recruiting plan for two open seats based on a skills grid.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Nonprofit board members, founders, executive directors, church and community group leaders, and people asked to join a board for the first time.",
    startingPoint: "Care about a mission and may have attended board meetings. Many have never read their bylaws, taken minutes, reviewed a Form 990 or handled a conflict of interest.",
    gap: "A board is legally responsible for its organization. Members who do not know their duties, the line between board and staff, or the yearly filings put the nonprofit's tax-exempt status, money and reputation at risk. A clear checklist helps them govern well and keep the public's trust.",
    constraints: [
      "Volunteers with limited time; 5-minute lessons",
      "Rules differ by state and change over time; learners check irs.gov and their state charity office",
      "General education, not legal or tax advice; serious decisions go to a nonprofit lawyer or accountant",
      "Plain words for first-time board members and small, all-volunteer groups"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a board decision or situation", action: "explain the duties of care, loyalty and obedience and identify which duty is at risk", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Using your bylaws and a skills grid", action: "divide common decisions between board and staff, find the key rules in the bylaws, and plan how to fill open board seats", standard: "with five decisions sorted and two seats matched to skill gaps" },
    { id: "O3", condition: "For an upcoming board meeting", action: "write an agenda with a consent agenda and record minutes with attendance, quorum, motions, votes and actions", standard: "with every required part of the minutes" },
    { id: "O4", condition: "When a board member or their family or business could gain from a decision", action: "follow the conflict-of-interest steps: disclose, step out, check the deal is fair and record it", standard: "in the right order and recorded in the minutes" },
    { id: "O5", condition: "Given a nonprofit's income, assets and year-end date", action: "review its financial reports and build a yearly calendar of its Form 990 and state filings", standard: "with the version and due date confirmed on irs.gov and the state charity office's site" }
  ],
  chapters: [
    {
      name: "Chapter 1: What a board does",
      lessons: [
        {
          objectives: ["O1"],
          title: "The three duties: care, loyalty and obedience",
          minutes: 5,
          goal: "Explain the board's three core duties and spot when one is at risk.",
          text: [
            "Board members of a nonprofit hold the organization in trust for the public and the people it serves. That trust is often described as three duties.",
            "Duty of care: pay attention and make informed decisions. Come to meetings, read the reports, ask questions, and use good judgment. Duty of loyalty: put the organization's interests ahead of your own, and never use your seat to benefit yourself, your family or your business. Duty of obedience: make sure the organization follows its mission, its own bylaws and the law.",
            "These duties belong to every board member, not only the chair or the treasurer. \"I didn't read the budget\" is not an excuse. Exact legal rules vary by state, so ask a nonprofit lawyer when a decision is serious."
          ],
          words: [["Board of directors", "the group legally responsible for overseeing a nonprofit."], ["Fiduciary duty", "a legal duty to act in someone else's best interest; board members owe it to the organization."], ["Duty of care", "making informed, careful decisions."], ["Duty of loyalty", "putting the organization's interests ahead of your own."], ["Duty of obedience", "keeping the organization true to its mission, bylaws and the law."]],
          slides: [
            { title: "You hold the nonprofit in trust", bullets: ["For the public and the people it serves", "Three core duties"] },
            { title: "Care, loyalty, obedience", bullets: ["Care: show up, read, ask, decide wisely", "Loyalty: the organization first, never yourself", "Obedience: mission, bylaws and the law"] },
            { title: "Every member, every time", bullets: ["Not just the chair or treasurer", "\"I didn't read it\" is not an excuse", "Serious decision? Ask a nonprofit lawyer"] }
          ],
          tryIt: "Write one real example of each duty for a nonprofit you know, such as a food bank, church or youth sports league. Then write one action that would break each duty.",
          youCanNow: "explain the duties of care, loyalty and obedience and spot when one is at risk.",
          quickCheck: [
            { objective: "O1", q: "What does the duty of loyalty ask of a board member?", options: ["Come to every meeting on time", "Follow the bylaws and the law", "Put the organization's interests ahead of your own", "Raise the most money"], answer: 2, why: "Loyalty means never using your seat to benefit yourself, your family or your business." },
            { objective: "O1", q: "A member says, \"I don't read the reports; the treasurer handles money.\" What do you tell them?", options: ["Every member has the duty of care, so read the reports and ask questions", "That is fine; only the treasurer is responsible", "Ask staff to vote for you", "Skip money votes"], answer: 0, why: "The three duties belong to every board member, and not reading the budget is no excuse." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Board and staff roles, and the bylaws",
          minutes: 6,
          goal: "Split common decisions between board and staff and find the key rules in your bylaws.",
          text: [
            "In most nonprofits with paid staff, the board sets direction and oversees; staff run the daily work. The board approves the mission, strategy and budget, hires, supports and reviews the executive director, watches the money and risks, and helps raise funds. The executive director runs programs, hires and manages other staff, and makes daily decisions.",
            "Problems start when a board micromanages staff, or when a board rubber-stamps everything without asking questions. In small, all-volunteer groups, board members often also do hands-on work, so be clear about which \"hat\" you are wearing.",
            "Bylaws are the organization's own rule book. They usually set the number of board members, how they are elected and for how long, the officers, how meetings are called, how many members make a quorum, and how votes work. Keep a current copy, read it, and follow it. Change bylaws only by the process they describe."
          ],
          steps: ["List five common decisions (budget, hiring staff, a new program, a big contract, an event date).", "Mark each as board, staff or both.", "Open your bylaws and find: board size, terms, officers, quorum and voting rules.", "Note anything your board is not following."],
          words: [["Executive director", "the top staff leader who runs the nonprofit day to day and reports to the board."], ["Bylaws", "the nonprofit's rules for how the board and organization work."], ["Quorum", "the minimum number of members who must be present for a meeting to make decisions."], ["Micromanage", "to control small details of someone else's work."]],
          slides: [
            { title: "Board: direction and oversight", bullets: ["Mission, strategy and budget", "Hires and reviews the executive director", "Watches money and risk, helps raise funds"] },
            { title: "Staff: daily work", bullets: ["Runs programs", "Hires and manages other staff", "Daily decisions"] },
            { title: "Two traps", bullets: ["Micromanaging staff", "Rubber-stamping without questions", "All-volunteer? Know which hat you wear"] },
            { title: "Bylaws: your rule book", bullets: ["Board size, terms, officers", "Meetings, quorum, voting", "Read it, follow it, change it only by its process"] }
          ],
          tryIt: "Get your organization's bylaws (or a sample from a nonprofit you know). Find the board size, term length, quorum and how votes are taken. Then sort five common decisions into board, staff or both.",
          youCanNow: "keep board and staff roles clear and find the key rules in a set of bylaws.",
          quickCheck: [
            { objective: "O2", q: "What are bylaws?", options: ["The state's tax rules", "The executive director's job description", "A list of donors", "The organization's own rule book, such as board size, terms, quorum and voting"], answer: 3, why: "Bylaws are the organization's own rules for how the board works." },
            { objective: "O2", q: "The board chair starts telling program staff how to run each daily activity. What is the problem?", options: ["Nothing; the chair runs daily work", "The board is micromanaging; daily work belongs to staff led by the executive director", "The chair should also do payroll", "Staff should vote on the budget instead"], answer: 1, why: "The board sets direction and oversees; staff run the daily work." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Board meetings and minutes",
          minutes: 5,
          goal: "Run a board meeting that follows the bylaws and record clear minutes.",
          text: [
            "Send the agenda and reports at least several days ahead so members can prepare. Many boards use a consent agenda for routine items (like approving last meeting's minutes) so they can spend time on the big questions.",
            "Check that you have a quorum before voting. For each decision, someone makes a motion, the board discusses it, and the chair calls a vote. Members with a conflict of interest step out of the discussion and vote.",
            "Minutes are the official record. They list the date, who was present, whether there was a quorum, each motion and the result of the vote, any conflicts declared, and actions with owners. Keep them short and factual; they are not a word-for-word transcript. Approve them at the next meeting and keep them safe."
          ],
          steps: ["Send the agenda and reports days ahead.", "Use a consent agenda for routine items.", "Confirm a quorum before any vote.", "For each decision: motion, discussion, vote.", "Record minutes: date, attendance, quorum, motions, votes, conflicts, actions.", "Approve minutes at the next meeting and store them safely."],
          words: [["Minutes", "the official written record of what a board decided at a meeting."], ["Motion", "a formal proposal for the board to vote on."], ["Consent agenda", "a group of routine items approved with one vote."]],
          slides: [
            { title: "Before the meeting", bullets: ["Agenda and reports days ahead", "Consent agenda for routine items"] },
            { title: "Making decisions", bullets: ["Confirm a quorum", "Motion, discussion, vote", "Conflicted members step out"] },
            { title: "What minutes record", bullets: ["Date, attendance and quorum", "Each motion and the vote result", "Conflicts declared, actions with owners"] },
            { title: "Minutes are not a transcript", bullets: ["Short and factual", "Approved at the next meeting", "Kept safely"] }
          ],
          tryIt: "Write a one-page board meeting agenda with a consent agenda section and two discussion items. Then write sample minutes for one motion, including who moved it, the vote count and the result.",
          youCanNow: "run a board meeting that follows the rules and record clear, official minutes.",
          quickCheck: [
            { objective: "O3", q: "What are board minutes?", options: ["A word-for-word transcript of everything said", "The official, short and factual record of the meeting", "The agenda sent before the meeting", "A list of members' phone numbers"], answer: 1, why: "Minutes are the official record: who was there, quorum, motions, votes, conflicts and actions." },
            { objective: "O3", q: "Only a few members arrive and you are not sure you can vote. What do you check first?", options: ["Whether the coffee is ready", "Whether the minutes are long enough", "Whether staff agree", "Whether there is a quorum under the bylaws"], answer: 3, why: "The board can only make decisions when a quorum is present." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: What a board does",
        questions: [
          { objective: "O1", q: "Which duty means reading the reports and asking questions before you vote?", options: ["Duty of loyalty", "Duty of obedience", "Duty of care", "Duty of silence"], answer: 2, why: "Care means making informed, careful decisions." },
          { objective: "O1", q: "A board member wants the nonprofit to rent space from his company at a high price. Which duty is at risk?", options: ["Duty of loyalty", "Duty of care", "Duty of obedience", "None"], answer: 0, why: "Loyalty means putting the organization ahead of your own interests." },
          { objective: "O2", q: "In a nonprofit with paid staff, who usually hires the executive director?", options: ["The newest volunteer", "The executive director", "A donor", "The board"], answer: 3, why: "Hiring and reviewing the executive director is a core board job." },
          { objective: "O3", q: "What is a quorum?", options: ["The board's bank account", "The minimum number of members present to make decisions", "A type of motion", "The yearly budget"], answer: 1, why: "Without a quorum, the board cannot validly vote." },
          { objective: "O3", q: "Which belongs in board minutes?", options: ["Every word everyone said", "Jokes from the meeting", "Each motion and the result of the vote", "Members' home addresses"], answer: 2, why: "Minutes record decisions, not a transcript." }
        ]
      }
    },
    {
      name: "Chapter 2: Oversight and building the board",
      lessons: [
        {
          objectives: ["O4"],
          title: "Handling conflicts of interest",
          minutes: 5,
          goal: "Follow clear steps when a board member has a conflict of interest.",
          text: [
            "A conflict of interest happens when a board member, or their family or business, could gain from a decision the board makes. Conflicts are common in small communities and are not always wrong, but they must be handled openly.",
            "Most boards adopt a written conflict-of-interest policy and ask members to sign a yearly disclosure form. When a conflict comes up: the member tells the board, leaves the discussion and the vote, and the board decides whether the deal is fair to the organization, ideally after comparing other options. The minutes record all of this.",
            "Example: the treasurer's cousin runs a printing shop that bids on the annual report. The treasurer discloses it and steps out; the board compares three quotes and picks the best value. Transactions with insiders can have tax and legal consequences, so get advice from a lawyer or accountant on anything large."
          ],
          steps: ["Adopt a written conflict-of-interest policy.", "Collect a signed disclosure form from each member every year.", "When a conflict arises, the member discloses it.", "The member leaves the discussion and vote.", "The board checks the deal is fair, ideally by comparing options.", "Record it all in the minutes; get advice on large deals."],
          words: [["Conflict of interest", "when a person's own interests could affect a decision they make for the organization."], ["Disclosure", "openly telling the board about a possible conflict."], ["Recuse", "to step out of a discussion and vote because of a conflict."]],
          slides: [
            { title: "What a conflict is", bullets: ["A member, family or business could gain", "Common, not always wrong", "Must be handled openly"] },
            { title: "Policy and yearly disclosure", bullets: ["Written conflict-of-interest policy", "Signed disclosure form every year"] },
            { title: "When it comes up", bullets: ["Disclose", "Step out of discussion and vote", "Board checks the deal is fair", "Record it in the minutes"] }
          ],
          tryIt: "Write the five steps your board will follow when a conflict comes up, in plain words. Then apply them to this case: a board member's spouse wants to sell the nonprofit a used van.",
          youCanNow: "handle a conflict of interest with disclosure, recusal, a fair review and a written record.",
          quickCheck: [
            { objective: "O4", q: "When does a conflict of interest happen?", options: ["When a member, their family or their business could gain from a board decision", "When two members disagree", "When a meeting runs late", "When the budget is tight"], answer: 0, why: "A conflict exists when someone on the board could personally gain from the decision." },
            { objective: "O4", q: "A member's sister runs the catering company bidding on your gala. What happens next?", options: ["The member votes, since family helps", "Hide it from the minutes", "The member discloses it and steps out, and the board compares quotes", "Cancel the gala"], answer: 2, why: "The member discloses and leaves the discussion and vote, and the board checks the deal is fair." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Financial oversight, Form 990 and state registration",
          minutes: 6,
          goal: "Review a nonprofit's finances as a board member and put the yearly filings on a calendar.",
          text: [
            "Every board member, not just the treasurer, should understand the basics: the approved budget, regular reports comparing actual income and spending to the budget, the balance sheet (what the organization owns and owes), cash on hand, and any restricted gifts that must be used for a specific purpose. Ask questions when numbers change a lot. Use controls like two people involved in paying bills, and an outside review or audit when the size of the organization calls for it.",
            "Most tax-exempt organizations must file an annual return with the IRS from the Form 990 series. The IRS says organizations whose gross receipts are normally $50,000 or less can file the Form 990-N e-Postcard; those with gross receipts under $200,000 and total assets under $500,000 can file Form 990-EZ or Form 990; larger ones file Form 990. The return is due on the 15th day of the 5th month after the year ends (May 15 for a December 31 year). The IRS says organizations that do not file for three years in a row automatically lose their tax-exempt status. These returns must also be made available to the public. Thresholds and rules can change, so check irs.gov each year. Churches and some other groups have different rules.",
            "States have their own rules. In California, the Attorney General's Registry of Charities and Fundraisers requires charities to register and file annual reports, with limited exceptions. Check oag.ca.gov/charities for current forms and fees. Other states have their own charity offices. Have an accountant help prepare filings, and the board should review them before they are filed."
          ],
          steps: ["Approve a yearly budget.", "Review budget-versus-actual reports at each meeting.", "Check cash, the balance sheet and restricted gifts.", "Use controls: two people on payments; an outside review when needed.", "Put the Form 990 due date on the calendar; confirm which version on irs.gov.", "Put state filings on the calendar (California: oag.ca.gov/charities).", "Review filings before they are sent; get an accountant's help."],
          words: [["Budget versus actual", "a report comparing planned income and spending with what really happened."], ["Balance sheet", "a report of what an organization owns and owes on a date."], ["Restricted gift", "a donation that must be used for a specific purpose."], ["Form 990", "the IRS annual information return for most tax-exempt organizations."], ["Registry of Charities and Fundraisers", "the California Attorney General's office where charities register and file annual reports."]],
          slides: [
            { title: "What every member reviews", bullets: ["Budget and budget-versus-actual", "Balance sheet and cash", "Restricted gifts"] },
            { title: "Controls", bullets: ["Two people involved in payments", "Outside review or audit when size calls for it", "Ask when numbers change a lot"] },
            { title: "IRS Form 990 series (check irs.gov)", bullets: ["990-N: gross receipts normally $50,000 or less", "990-EZ: receipts < $200,000 and assets < $500,000", "990: larger organizations", "Due 15th day of 5th month; 3 missed years = exemption lost"] },
            { title: "State rules", bullets: ["California: register with the AG Registry of Charities", "File annual reports; check oag.ca.gov/charities", "Get an accountant; board reviews before filing"] }
          ],
          sources: [
            { name: "IRS: Form 990 series, which forms do exempt organizations file", url: "https://www.irs.gov/charities-non-profits/form-990-series-which-forms-do-exempt-organizations-file-filing-phase-in" },
            { name: "IRS: Return due dates for exempt organizations", url: "https://www.irs.gov/charities-non-profits/return-due-dates-for-exempt-organizations-annual-return" },
            { name: "IRS: Automatic revocation of exemption", url: "https://www.irs.gov/charities-non-profits/automatic-revocation-of-exemption" },
            { name: "IRS: Public disclosure of exempt organization returns", url: "https://www.irs.gov/charities-non-profits/public-disclosure-and-availability-of-exempt-organizations-returns-and-applications-documents-subject-to-public-disclosure" },
            { name: "California Attorney General: Registry of Charities and Fundraisers", url: "https://oag.ca.gov/charities" },
            { name: "California Attorney General's Guide for Charities (PDF)", url: "https://oag.ca.gov/system/files/media/Guide%20for%20Charities.pdf" }
          ],
          tryIt: "Look up a nonprofit you know on a public database or in its annual report. Note its approximate yearly income and decide which Form 990 version it likely files, then confirm the rule on irs.gov. Write its Form 990 due date and, if it is in California, its Registry renewal on a yearly calendar.",
          youCanNow: "review a nonprofit's finances as a board member and plan its yearly IRS and state filings.",
          quickCheck: [
            { objective: "O5", q: "What does a balance sheet show?", options: ["Who came to the meeting", "The board's term limits", "Next year's events", "What the organization owns and owes"], answer: 3, why: "The balance sheet shows what the organization owns and owes." },
            { objective: "O5", q: "Your nonprofit's year ends December 31. What do you put on the board calendar?", options: ["Nothing; filings are optional", "The Form 990 due date of May 15, after confirming the version on irs.gov", "A reminder to file every five years", "Only the holiday party"], answer: 1, why: "The return is due on the 15th day of the 5th month after the year ends, and the version is confirmed on irs.gov." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Recruiting and welcoming board members",
          minutes: 5,
          goal: "Use a skills grid to recruit the board members your nonprofit needs.",
          text: [
            "Recruit on purpose, not only from friends. Make a skills grid: list the skills and connections your board needs (for example finance, law, fundraising, the community you serve, technology) and mark which current members have them. The gaps tell you who to look for. Include people with lived experience of the issue you work on.",
            "Be honest about the job: how many meetings, what committees, how much time, and the expectation to give or help raise money, if there is one. Meet candidates more than once, have them attend a meeting, and check references. Elect them by the process in your bylaws.",
            "Welcome new members with an orientation: the mission, bylaws, budget and latest financial report, recent minutes, the conflict-of-interest policy to sign, and a board buddy. Review the board's own work every year, and use term limits so new people keep joining."
          ],
          steps: ["Build a skills grid; find the gaps.", "Look beyond friends; include lived experience.", "Write an honest description of the role and time.", "Meet candidates, invite them to a meeting, check references.", "Elect by the bylaws' process.", "Hold an orientation and assign a board buddy.", "Review the board every year."],
          words: [["Skills grid", "a chart of the skills a board needs and which members have them."], ["Orientation", "the welcome and training a new member gets."], ["Term limit", "a cap on how many terms a person can serve in a row."]],
          slides: [
            { title: "Recruit on purpose", bullets: ["Build a skills grid", "Find the gaps", "Look beyond friends; include lived experience"] },
            { title: "Be honest about the role", bullets: ["Meetings, committees, time", "Giving or fundraising expectations", "Meet more than once, check references"] },
            { title: "Welcome them well", bullets: ["Orientation pack: mission, bylaws, finances, minutes", "Sign the conflict-of-interest policy", "Assign a board buddy"] },
            { title: "Keep the board fresh", bullets: ["Review the board every year", "Use term limits"] }
          ],
          tryIt: "Final task: build your one-page governance checklist. Include the three duties, a board-versus-staff split for five decisions, a meeting agenda and minutes template, conflict-of-interest steps, a yearly filing and finance calendar, and a recruiting plan for two seats from a skills grid.",
          youCanNow: "recruit and welcome board members who fill real gaps, and keep the board healthy year after year.",
          quickCheck: [
            { objective: "O2", q: "What does a skills grid show?", options: ["Members' birthdays", "The meeting schedule", "The skills and connections the board needs, and which members have them", "The yearly budget"], answer: 2, why: "A skills grid shows the gaps, which tells you who to recruit." },
            { objective: "O2", q: "Your grid shows no one with finance skills. What is a good next step?", options: ["Look beyond friends for a candidate with finance skills, meet them and invite them to a meeting", "Ask your best friend, whatever their skills", "Leave the gap; it does not matter", "Make the treasurer do everything"], answer: 0, why: "Recruit on purpose to fill gaps, and meet candidates and have them attend a meeting first." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Oversight and building the board",
        questions: [
          { objective: "O4", q: "A board member has a conflict on a contract. What should they do?", options: ["Vote first, then mention it", "Disclose it and step out of the discussion and vote", "Keep it quiet", "Resign from the board"], answer: 1, why: "Disclosure and recusal let the board decide fairly." },
          { objective: "O5", q: "Which report compares planned and real income and spending?", options: ["Budget versus actual", "Minutes", "Bylaws", "Skills grid"], answer: 0, why: "Budget-versus-actual shows where plans and reality differ." },
          { objective: "O5", q: "According to the IRS, which small organizations can file the Form 990-N e-Postcard?", options: ["Any organization at all", "Those with gross receipts normally $50,000 or less", "Only churches", "Those with over $1 million in assets"], answer: 1, why: "The IRS sets the 990-N limit at gross receipts normally $50,000 or less." },
          { objective: "O5", q: "What happens if an organization does not file its required annual return for three years in a row?", options: ["Nothing", "It gets a warning letter only", "It must change its name", "It automatically loses its tax-exempt status"], answer: 3, why: "The IRS says exemption is automatically revoked." },
          { objective: "O2", q: "A useful first tool for recruiting board members is:", options: ["A skills grid", "A list of only your friends", "A raffle", "The bylaws' cover page"], answer: 0, why: "The grid shows which skills are missing." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Nonprofit Board Governance",
    questions: [
      { objective: "O1", q: "Which duty means keeping the nonprofit true to its mission and the law?", options: ["Duty of care", "Duty of loyalty", "Duty of obedience", "Duty of speed"], answer: 2, why: "Obedience means mission, bylaws and the law." },
      { objective: "O1", q: "A board member skips reading the budget and votes yes anyway. Which duty is weakest?", options: ["Duty of care", "Duty of loyalty", "Duty of obedience", "None; it's fine"], answer: 0, why: "Care requires informed decisions." },
      { objective: "O1", q: "Who do the three board duties apply to?", options: ["Only the chair", "Only the treasurer", "Only paid staff", "Every board member"], answer: 3, why: "Each member carries the duties." },
      { objective: "O2", q: "In a nonprofit with paid staff, who runs daily programs?", options: ["The board chair", "Staff, led by the executive director", "Donors", "The IRS"], answer: 1, why: "Staff run daily work; the board oversees." },
      { objective: "O2", q: "A board votes yes on everything without asking questions. This is called:", options: ["Good governance", "Micromanaging", "Rubber-stamping", "Recusing"], answer: 2, why: "Rubber-stamping fails the duty of care." },
      { objective: "O2", q: "Where do you find your board's size, terms and voting rules?", options: ["The bylaws", "The Form 990-N", "A donor letter", "A newspaper"], answer: 0, why: "Bylaws are the organization's rule book." },
      { objective: "O3", q: "Before the board votes, the chair should confirm:", options: ["Everyone agrees", "There is a quorum", "The press is present", "The vote is secret"], answer: 1, why: "Decisions need a quorum to be valid." },
      { objective: "O3", q: "A consent agenda is used for:", options: ["Big strategy debates", "Firing the director", "Conflicts of interest", "Routine items approved with one vote"], answer: 3, why: "It saves time for important topics." },
      { objective: "O3", q: "Board minutes should be:", options: ["Short, factual and approved at the next meeting", "A word-for-word transcript", "Kept secret from the board", "Written only if there is time"], answer: 0, why: "Minutes record decisions and are formally approved." },
      { objective: "O4", q: "A conflict-of-interest disclosure form should be signed:", options: ["Never", "Only when caught", "Every year by each board member", "Only by staff"], answer: 2, why: "Yearly disclosure keeps conflicts in the open." },
      { objective: "O4", q: "A member's spouse wants to sell the nonprofit a van. The board should:", options: ["Buy it at any price", "Have the member disclose and step out, then check the deal is fair", "Let the member decide", "Hide it from the minutes"], answer: 1, why: "Disclose, recuse, review fairly and record." },
      { objective: "O4", q: "To \"recuse\" means to:", options: ["Step out of a discussion and vote because of a conflict", "Resign forever", "Approve a budget", "Call a meeting"], answer: 0, why: "Recusal keeps the decision fair." },
      { objective: "O5", q: "A restricted gift is:", options: ["A gift the board can spend on anything", "A loan", "A gift that must be used for a specific purpose", "A gift that was refused"], answer: 2, why: "Donors set restrictions the nonprofit must honor." },
      { objective: "O5", q: "A good financial control is:", options: ["One person handles all money alone", "No reports", "Paying bills in cash only", "Two people involved in paying bills"], answer: 3, why: "Two people reduce the risk of mistakes and theft." },
      { objective: "O5", q: "Per the IRS, an organization with gross receipts under $200,000 and total assets under $500,000 can file:", options: ["Form 990-EZ or Form 990", "Only Form 990-PF", "No return ever", "Form 1040"], answer: 0, why: "The IRS allows 990-EZ or 990 in that range." },
      { objective: "O5", q: "For a nonprofit whose year ends December 31, Form 990 is due on:", options: ["January 1", "April 1", "May 15", "December 31"], answer: 2, why: "It is due the 15th day of the 5th month after year-end." },
      { objective: "O5", q: "Are Form 990 returns kept private from the public?", options: ["Yes, always", "No; they must be made available for public inspection", "Only the first page is public", "Only donors can see them"], answer: 1, why: "The IRS requires public availability of annual returns." },
      { objective: "O5", q: "In California, charities register and file annual reports with:", options: ["The DMV", "The county fair", "The FAA", "The Attorney General's Registry of Charities and Fundraisers"], answer: 3, why: "The AG's Registry handles charity registration in California." },
      { objective: "O5", q: "Where should board members confirm current filing rules each year?", options: ["Official sites like irs.gov and their state charity office", "A random blog", "Last year's memory", "A friend's guess"], answer: 0, why: "Rules change; official sources are current." },
      { objective: "O2", q: "A new board member should receive:", options: ["Nothing; they'll figure it out", "Only a T-shirt", "An orientation with mission, bylaws, finances, minutes and the conflict policy", "The executive director's passwords"], answer: 2, why: "Orientation prepares members to meet their duties." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      3,
      5,
      6,
      8,
      10,
      11,
      14,
      15
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "The three duties",
        objective: "O1",
        notYet: "A duty is missing or explained wrongly.",
        meets: "Care, loyalty and obedience are each explained in plain words.",
        exceeds: "Each duty has a real example of keeping it and breaking it."
      },
      {
        name: "Roles and recruiting",
        objective: "O2",
        notYet: "Decisions are not sorted, or recruiting is from friends only.",
        meets: "Five decisions sorted into board, staff or both, and two open seats matched to gaps in a skills grid.",
        exceeds: "Also notes bylaw rules the board is not following and an orientation plan for new members."
      },
      {
        name: "Meetings and minutes",
        objective: "O3",
        notYet: "No agenda, or minutes miss quorum, motions or votes.",
        meets: "An agenda with a consent agenda and a minutes template with every required part.",
        exceeds: "Sample minutes for one motion with who moved it, the vote count and the result."
      },
      {
        name: "Conflict of interest",
        objective: "O4",
        notYet: "Steps are missing or out of order.",
        meets: "Disclose, step out, check the deal is fair, and record it, in order.",
        exceeds: "Also includes the yearly signed disclosure form and when to get legal advice."
      },
      {
        name: "Finance and filing calendar",
        objective: "O5",
        notYet: "No Form 990 version or due date, or no state filing.",
        meets: "Budget reviews, the right Form 990 version and due date, and any state registration, confirmed on official sites.",
        exceeds: "Also lists financial controls such as two people on payments, and names where each rule was checked."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Boards that adopt a written conflict-of-interest policy and yearly disclosure forms within 90 days",
      "Organizations that file their Form 990 and state reports on time the next year",
      "Boards that fill open seats using a skills grid and hold an orientation for new members"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or phone with internet to check irs.gov and the state charity office",
      "Your organization's bylaws, latest budget report and recent minutes, or a sample set",
      "Paper or a document for the one-page checklist",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Run it as a board retreat session: members build the checklist together using their own bylaws and reports.",
      "Remind the group this is general education, not legal or tax advice; refer serious questions to a nonprofit lawyer or accountant.",
      "Have learners confirm Form 990 thresholds and state rules on the official sites during the session, since they can change.",
      "Use role-play for the conflict-of-interest steps so members practice stepping out of a vote.",
      "Score the checklist with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
