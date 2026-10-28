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
  chapters: [
    {
      name: "Chapter 1: What a board does",
      lessons: [
        {
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
          youCanNow: "explain the duties of care, loyalty and obedience and spot when one is at risk."
        },
        {
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
          youCanNow: "keep board and staff roles clear and find the key rules in a set of bylaws."
        },
        {
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
          youCanNow: "run a board meeting that follows the rules and record clear, official minutes."
        }
      ],
      check: {
        title: "Knowledge Check 1: What a board does",
        questions: [
          { q: "Which duty means reading the reports and asking questions before you vote?", options: ["Duty of loyalty", "Duty of obedience", "Duty of care", "Duty of silence"], answer: 2, why: "Care means making informed, careful decisions." },
          { q: "A board member wants the nonprofit to rent space from his company at a high price. Which duty is at risk?", options: ["Duty of loyalty", "Duty of care", "Duty of obedience", "None"], answer: 0, why: "Loyalty means putting the organization ahead of your own interests." },
          { q: "In a nonprofit with paid staff, who usually hires the executive director?", options: ["The newest volunteer", "The executive director", "A donor", "The board"], answer: 3, why: "Hiring and reviewing the executive director is a core board job." },
          { q: "What is a quorum?", options: ["The board's bank account", "The minimum number of members present to make decisions", "A type of motion", "The yearly budget"], answer: 1, why: "Without a quorum, the board cannot validly vote." },
          { q: "Which belongs in board minutes?", options: ["Every word everyone said", "Jokes from the meeting", "Each motion and the result of the vote", "Members' home addresses"], answer: 2, why: "Minutes record decisions, not a transcript." }
        ]
      }
    },
    {
      name: "Chapter 2: Oversight and building the board",
      lessons: [
        {
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
          youCanNow: "handle a conflict of interest with disclosure, recusal, a fair review and a written record."
        },
        {
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
          youCanNow: "review a nonprofit's finances as a board member and plan its yearly IRS and state filings."
        },
        {
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
          youCanNow: "recruit and welcome board members who fill real gaps, and keep the board healthy year after year."
        }
      ],
      check: {
        title: "Knowledge Check 2: Oversight and building the board",
        questions: [
          { q: "A board member has a conflict on a contract. What should they do?", options: ["Vote first, then mention it", "Disclose it and step out of the discussion and vote", "Keep it quiet", "Resign from the board"], answer: 1, why: "Disclosure and recusal let the board decide fairly." },
          { q: "Which report compares planned and real income and spending?", options: ["Budget versus actual", "Minutes", "Bylaws", "Skills grid"], answer: 0, why: "Budget-versus-actual shows where plans and reality differ." },
          { q: "According to the IRS, which small organizations can file the Form 990-N e-Postcard?", options: ["Any organization at all", "Those with gross receipts normally $50,000 or less", "Only churches", "Those with over $1 million in assets"], answer: 1, why: "The IRS sets the 990-N limit at gross receipts normally $50,000 or less." },
          { q: "What happens if an organization does not file its required annual return for three years in a row?", options: ["Nothing", "It gets a warning letter only", "It must change its name", "It automatically loses its tax-exempt status"], answer: 3, why: "The IRS says exemption is automatically revoked." },
          { q: "A useful first tool for recruiting board members is:", options: ["A skills grid", "A list of only your friends", "A raffle", "The bylaws' cover page"], answer: 0, why: "The grid shows which skills are missing." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Nonprofit Board Governance",
    questions: [
      { q: "Which duty means keeping the nonprofit true to its mission and the law?", options: ["Duty of care", "Duty of loyalty", "Duty of obedience", "Duty of speed"], answer: 2, why: "Obedience means mission, bylaws and the law." },
      { q: "A board member skips reading the budget and votes yes anyway. Which duty is weakest?", options: ["Duty of care", "Duty of loyalty", "Duty of obedience", "None; it's fine"], answer: 0, why: "Care requires informed decisions." },
      { q: "Who do the three board duties apply to?", options: ["Only the chair", "Only the treasurer", "Only paid staff", "Every board member"], answer: 3, why: "Each member carries the duties." },
      { q: "In a nonprofit with paid staff, who runs daily programs?", options: ["The board chair", "Staff, led by the executive director", "Donors", "The IRS"], answer: 1, why: "Staff run daily work; the board oversees." },
      { q: "A board votes yes on everything without asking questions. This is called:", options: ["Good governance", "Micromanaging", "Rubber-stamping", "Recusing"], answer: 2, why: "Rubber-stamping fails the duty of care." },
      { q: "Where do you find your board's size, terms and voting rules?", options: ["The bylaws", "The Form 990-N", "A donor letter", "A newspaper"], answer: 0, why: "Bylaws are the organization's rule book." },
      { q: "Before the board votes, the chair should confirm:", options: ["Everyone agrees", "There is a quorum", "The press is present", "The vote is secret"], answer: 1, why: "Decisions need a quorum to be valid." },
      { q: "A consent agenda is used for:", options: ["Big strategy debates", "Firing the director", "Conflicts of interest", "Routine items approved with one vote"], answer: 3, why: "It saves time for important topics." },
      { q: "Board minutes should be:", options: ["Short, factual and approved at the next meeting", "A word-for-word transcript", "Kept secret from the board", "Written only if there is time"], answer: 0, why: "Minutes record decisions and are formally approved." },
      { q: "A conflict-of-interest disclosure form should be signed:", options: ["Never", "Only when caught", "Every year by each board member", "Only by staff"], answer: 2, why: "Yearly disclosure keeps conflicts in the open." },
      { q: "A member's spouse wants to sell the nonprofit a van. The board should:", options: ["Buy it at any price", "Have the member disclose and step out, then check the deal is fair", "Let the member decide", "Hide it from the minutes"], answer: 1, why: "Disclose, recuse, review fairly and record." },
      { q: "To \"recuse\" means to:", options: ["Step out of a discussion and vote because of a conflict", "Resign forever", "Approve a budget", "Call a meeting"], answer: 0, why: "Recusal keeps the decision fair." },
      { q: "A restricted gift is:", options: ["A gift the board can spend on anything", "A loan", "A gift that must be used for a specific purpose", "A gift that was refused"], answer: 2, why: "Donors set restrictions the nonprofit must honor." },
      { q: "A good financial control is:", options: ["One person handles all money alone", "No reports", "Paying bills in cash only", "Two people involved in paying bills"], answer: 3, why: "Two people reduce the risk of mistakes and theft." },
      { q: "Per the IRS, an organization with gross receipts under $200,000 and total assets under $500,000 can file:", options: ["Form 990-EZ or Form 990", "Only Form 990-PF", "No return ever", "Form 1040"], answer: 0, why: "The IRS allows 990-EZ or 990 in that range." },
      { q: "For a nonprofit whose year ends December 31, Form 990 is due on:", options: ["January 1", "April 1", "May 15", "December 31"], answer: 2, why: "It is due the 15th day of the 5th month after year-end." },
      { q: "Are Form 990 returns kept private from the public?", options: ["Yes, always", "No; they must be made available for public inspection", "Only the first page is public", "Only donors can see them"], answer: 1, why: "The IRS requires public availability of annual returns." },
      { q: "In California, charities register and file annual reports with:", options: ["The DMV", "The county fair", "The FAA", "The Attorney General's Registry of Charities and Fundraisers"], answer: 3, why: "The AG's Registry handles charity registration in California." },
      { q: "Where should board members confirm current filing rules each year?", options: ["Official sites like irs.gov and their state charity office", "A random blog", "Last year's memory", "A friend's guess"], answer: 0, why: "Rules change; official sources are current." },
      { q: "A new board member should receive:", options: ["Nothing; they'll figure it out", "Only a T-shirt", "An orientation with mission, bylaws, finances, minutes and the conflict policy", "The executive director's passwords"], answer: 2, why: "Orientation prepares members to meet their duties." }
    ]
  }
};
