"use strict";

// Koach Learn course: Non Profits -> "AI Donor Analytics" (bonus course). Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-ai-donor-analytics",
  category: "Non Profits",
  name: "AI Donor Analytics",
  skills: "Preparing a safe donor spreadsheet, Measuring retention and average gift, Grouping donors into segments, Using AI to explain numbers, Turning findings into a fundraising plan",
  outcome: "take a donor spreadsheet with names removed, work out your retention rate, average gift and donor groups, use an AI assistant to explain what the numbers mean, and write a one-page plan for your next appeal.",
  about: [
    "This course is for nonprofit and faith-based staff, development officers, board members and volunteers who keep a list of donors and want to raise more by understanding it.",
    "You will learn a few simple donor numbers, how to calculate them in a spreadsheet such as Google Sheets or Microsoft Excel, how to use AI to explain and chart them without sharing anyone's private information, and how to turn what you find into action.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a safe copy of your donor list (or the practice list from Lesson 1) with names and contact details replaced by donor IDs. Calculate your retention rate and average gift, sort donors into at least three groups, ask an AI assistant to explain the results and suggest one action per group, and write a one-page appeal plan you check yourself.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Nonprofit and faith-based staff, development officers, board members and volunteers who keep a list of donors and want to raise more by understanding it.",
    startingPoint: "Keep donor records in a spreadsheet or donor system and send appeals. Many have not calculated a retention rate, grouped donors into segments or used AI to explain their numbers.",
    gap: "Without knowing who comes back and who drifts away, organizations send the same appeal to everyone and lose donors they could have kept. Learners need to turn their own records into a few key numbers and a plan, using AI safely without exposing donor information.",
    constraints: [
      "Privacy: names, contact details and notes are removed before any analysis; only summary numbers go into AI",
      "Basic spreadsheet skills: SUM, AVERAGE, sort, filter and a simple chart",
      "AI can make arithmetic mistakes and invent benchmarks, so every number is rechecked",
      "Donor contact and opt-out rules and the organization's privacy policy apply",
      "Time: about 60 minutes in total, in 5-minute lessons"
    ],
    prerequisites: "Basic spreadsheet use. \"Introduction to AI for Nonprofits\" is helpful."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a donor list", action: "make an anonymous working copy with names replaced by IDs and contact details deleted", standard: "keeping only ID, gift date, amount and campaign" },
    { id: "O2", condition: "Given an anonymous donor spreadsheet", action: "calculate total raised, average gift and donor retention rate", standard: "getting each number right" },
    { id: "O3", condition: "Given your donor IDs and gift history", action: "sort donors into New, Repeat, Lapsed and Larger segments and count each group", standard: "with every donor ID in a segment" },
    { id: "O4", condition: "Given your summary numbers", action: "ask an AI assistant to explain them in plain words and recheck any math or benchmark it gives", standard: "pasting only summary numbers, never the donor list" },
    { id: "O5", condition: "Given your segment counts", action: "create a bar chart with a clear title in Google Sheets or Excel", standard: "showing one message" },
    { id: "O6", condition: "Given your findings", action: "write a one-page appeal plan with one action, owner and date for each segment", standard: "using placeholders for donor names and checked with your director" }
  ],
  chapters: [
    {
      name: "Chapter 1: Know your donor numbers",
      lessons: [
        {
          objectives: ["O1"],
          title: "Getting your donor data ready, safely",
          minutes: 5,
          goal: "Make a clean, anonymous copy of a donor list that is safe to analyze.",
          text: [
            "Donor analytics means looking at your giving records to learn who gives, how much, how often and whether they come back. You only need a spreadsheet.",
            "Donor names, addresses, emails and gift amounts are private and must be protected. Before you analyze anything with AI, make a copy and replace each name with an ID like D001. Delete addresses, phone numbers, emails and notes. Keep only the ID, gift date, gift amount and, if you have it, the campaign or fund.",
            "Keep the real list in your donor system or a protected file. The anonymous copy is what you work with. Follow your organization's privacy policy and any promises you made to donors."
          ],
          steps: ["Export or copy your donor list into a spreadsheet.", "Save a separate copy named \"donors-anonymous\".", "Replace each name with an ID such as D001, D002.", "Delete addresses, phone numbers, emails and notes.", "Keep only ID, gift date, amount and campaign."],
          words: [["Donor analytics", "studying giving records to learn who gives, how much, how often and whether they return."], ["Anonymous", "with names and contact details removed so no one can tell who is who."], ["Spreadsheet", "a table of rows and columns, like Google Sheets or Microsoft Excel."]],
          slides: [
            { title: "What donor analytics is", bullets: ["Who gives, how much, how often", "Whether donors come back", "All you need is a spreadsheet"] },
            { title: "Protect donors first", bullets: ["Make a separate copy", "Replace names with IDs like D001", "Delete addresses, phones, emails, notes"] },
            { title: "Keep only", bullets: ["Donor ID", "Gift date and amount", "Campaign or fund"] }
          ],
          tryIt: "Make a practice list in a spreadsheet with 12 rows: ID (D001 to D010, some repeated), gift date (last year and this year) and amount. Or make an anonymous copy of your real list following the steps.",
          youCanNow: "prepare a donor list that is safe to analyze, with names and contact details removed.",
          quickCheck: [
            { objective: "O1", q: "What do you delete from the anonymous copy?", options: ["Addresses, phone numbers, emails and notes", "Gift amounts", "Gift dates", "Donor IDs"], answer: 0, why: "Delete contact details and notes; keep ID, date, amount and campaign." },
            { objective: "O1", q: "A volunteer wants to analyze the real donor list on their personal laptop. What do you do?", options: ["Email them the real list", "Give them the anonymous copy and keep the real list in the protected file", "Print the real list for them", "Paste the real list into AI for them"], answer: 1, why: "Keep the real list protected; work with the anonymous copy." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Three numbers every nonprofit should know",
          minutes: 6,
          goal: "Calculate total raised, average gift and donor retention rate.",
          text: [
            "Total raised is all gifts added together. Average gift is total raised divided by the number of gifts. In a spreadsheet, =SUM() adds a column and =AVERAGE() gives the average.",
            "Donor retention rate tells you how many of last year's donors gave again this year. Count the donors who gave last year. Count how many of those also gave this year. Divide the second number by the first and multiply by 100. If 40 donors gave last year and 18 of them gave again, retention is 18 / 40 = 45 percent.",
            "Retention matters because keeping a donor usually costs less than finding a new one. A low rate is a sign to thank and update donors better."
          ],
          steps: ["Total raised: =SUM() of the amount column.", "Average gift: =AVERAGE() of the amount column.", "Count unique donors who gave last year.", "Count how many of them also gave this year.", "Retention = this-year repeat donors / last-year donors x 100."],
          words: [["Average gift", "total raised divided by the number of gifts."], ["Retention rate", "the percent of last year's donors who gave again this year."], ["Formula", "a calculation typed into a spreadsheet cell, starting with =."]],
          slides: [
            { title: "Total and average", bullets: ["Total raised: =SUM(amounts)", "Average gift: =AVERAGE(amounts)"] },
            { title: "Retention rate", bullets: ["Last year's donors who gave again", "Divided by all last year's donors", "Times 100 = percent"] },
            { title: "Example", bullets: ["40 donors last year", "18 of them gave again", "18 / 40 = 45 percent retention"] },
            { title: "Why it matters", bullets: ["Keeping donors costs less than finding new ones", "Low retention = thank and update better"] }
          ],
          tryIt: "Using your practice or anonymous list, calculate total raised, average gift and retention rate. Write the three numbers down.",
          youCanNow: "calculate total raised, average gift and donor retention rate in a spreadsheet.",
          quickCheck: [
            { objective: "O2", q: "Which formula adds up a column of gifts?", options: ["=AVERAGE()", "=COUNT()", "=SUM()", "=IF()"], answer: 2, why: "=SUM() adds a column; =AVERAGE() gives the average." },
            { objective: "O2", q: "20 donors gave last year and 10 of them gave again. What is your retention rate?", options: ["10 percent", "20 percent", "200 percent", "50 percent"], answer: 3, why: "10 / 20 = 0.5, times 100 = 50 percent." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Grouping donors into segments",
          minutes: 5,
          goal: "Sort donors into simple groups so each group gets the right message.",
          text: [
            "A segment is a group of donors who are alike in a way that matters. Different groups need different messages.",
            "Simple segments to start: New donors (first gift this year), Repeat donors (gave last year and this year), Lapsed donors (gave last year but not this year), and Larger donors (gifts above an amount you choose, such as your top 10 percent).",
            "Add a column called Segment and fill it in for each donor ID. You can use the spreadsheet's filter or sort to group them. Count how many donors are in each group."
          ],
          steps: ["Add a column called Segment.", "Mark each donor ID as New, Repeat, Lapsed or Larger.", "Use sort or filter to group them.", "Count the donors in each group."],
          words: [["Segment", "a group of donors who are alike in a way that matters, like new or lapsed."], ["Lapsed donor", "someone who gave before but has not given this year."]],
          slides: [
            { title: "What a segment is", bullets: ["A group of similar donors", "Each group gets the right message"] },
            { title: "Four starter segments", bullets: ["New: first gift this year", "Repeat: gave last year and this year", "Lapsed: gave last year, not this year", "Larger: above an amount you choose"] },
            { title: "In the spreadsheet", bullets: ["Add a Segment column", "Sort or filter to group", "Count each group"] }
          ],
          tryIt: "Add a Segment column to your list. Mark every donor ID and count how many are New, Repeat, Lapsed and Larger.",
          youCanNow: "sort donors into segments and count each group.",
          quickCheck: [
            { objective: "O3", q: "Which segment is a donor who gave last year and this year?", options: ["Repeat", "New", "Lapsed", "Larger"], answer: 0, why: "Repeat donors gave last year and this year." },
            { objective: "O3", q: "You want to see all lapsed donors together. What do you do in the spreadsheet?", options: ["Retype them on a new page", "Use the filter or sort on the Segment column", "Delete everyone else", "Ask AI to guess them"], answer: 1, why: "Use the spreadsheet's filter or sort to group them." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Know your donor numbers",
        questions: [
          { objective: "O1", q: "Before analyzing donor data with AI, what should you do?", options: ["Paste the full list with names", "Email it to volunteers", "Make a copy with names replaced by IDs and contact details deleted", "Post it online"], answer: 2, why: "An anonymous copy protects donors' private information." },
          { objective: "O2", q: "40 donors gave last year and 18 of them gave again this year. What is the retention rate?", options: ["18 percent", "40 percent", "45 percent", "58 percent"], answer: 2, why: "18 divided by 40 is 0.45, or 45 percent." },
          { objective: "O2", q: "Which spreadsheet formula gives the average gift?", options: ["=COUNT()", "=TODAY()", "=MAX()", "=AVERAGE()"], answer: 3, why: "=AVERAGE() divides the total by the number of gifts." },
          { objective: "O3", q: "A donor gave last year but not this year. Which segment are they in?", options: ["New", "Lapsed", "Repeat", "Larger"], answer: 1, why: "Lapsed donors gave before but not this year." },
          { objective: "O2", q: "Why does retention matter?", options: ["It is required by the AI", "Keeping donors usually costs less than finding new ones", "It makes the spreadsheet bigger", "It sets the tax rate"], answer: 1, why: "Strong retention keeps giving steady at lower cost." }
        ]
      }
    },
    {
      name: "Chapter 2: From numbers to action",
      lessons: [
        {
          objectives: ["O4"],
          title: "Using AI to explain your numbers",
          minutes: 5,
          goal: "Ask an AI assistant to explain anonymous donor numbers in plain words.",
          text: [
            "You can paste your summary numbers, not your donor list, into an AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini and ask what they mean.",
            "For example: \"I run a small food bank. Last year 40 donors, this year 35. Retention 45 percent. Average gift $85. Segments: 17 new, 18 repeat, 22 lapsed, 4 larger. Explain what these numbers tell me in plain words and what questions I should ask next.\"",
            "AI can also suggest formulas or chart types if you get stuck. Check any math it does yourself; AI can make arithmetic mistakes and can make up benchmark numbers that sound real."
          ],
          steps: ["Write your summary numbers, not individual donors.", "Say what kind of organization you are.", "Ask the AI to explain the numbers in plain words.", "Ask what questions you should ask next.", "Recheck any math yourself."],
          words: [["Summary numbers", "totals, averages and counts, not information about any one person."], ["Benchmark", "a typical number used for comparison; AI may make these up, so check the source."]],
          slides: [
            { title: "Share summaries, not people", bullets: ["Totals, averages, counts", "Never names or single gifts with names"] },
            { title: "A good prompt", bullets: ["What your organization does", "Your summary numbers", "\"Explain in plain words; what should I ask next?\""] },
            { title: "Check the AI", bullets: ["Redo its math yourself", "Be careful with benchmark numbers", "Ask where a number comes from"] }
          ],
          tryIt: "Paste only your summary numbers (totals, retention, average gift, segment counts) into an AI assistant and ask it to explain them and suggest three questions to ask next.",
          youCanNow: "use an AI assistant to explain donor numbers without sharing any donor's private information.",
          quickCheck: [
            { objective: "O4", q: "Besides explaining numbers, what else can AI help with in this lesson?", options: ["Finding donors' home addresses", "Deciding gift amounts for donors", "Suggesting formulas or chart types", "Sending appeals on its own"], answer: 2, why: "AI can suggest formulas or chart types if you get stuck." },
            { objective: "O4", q: "AI says your average gift is $95, but your spreadsheet says $85. What do you do?", options: ["Use $95", "Use the average of both", "Ask AI to agree with you", "Recheck the math yourself and use the correct number"], answer: 3, why: "AI can make arithmetic mistakes, so check its math yourself." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Making a simple chart",
          minutes: 4,
          goal: "Make one chart that shows your donor segments clearly.",
          text: [
            "A chart helps your board and team see the story fast. A bar chart works well for segments: one bar each for New, Repeat, Lapsed and Larger.",
            "In Google Sheets or Excel, put the segment names in one column and the counts in the next. Select both columns, then use the Insert menu to add a chart and choose a bar or column chart.",
            "Give the chart a clear title like \"Our donors this year by group\". Keep it simple: one message per chart."
          ],
          steps: ["Make a small table: segment name and count.", "Select both columns.", "Insert a chart and choose a bar or column chart.", "Give it a clear title.", "Check the numbers match your table."],
          words: [["Bar chart", "a chart that compares amounts using bars of different lengths."]],
          slides: [
            { title: "Why a chart", bullets: ["Your board sees the story fast", "One message per chart"] },
            { title: "Make it", bullets: ["Table: segment and count", "Select both columns", "Insert, then choose a bar chart"] },
            { title: "Finish it", bullets: ["Add a clear title", "Check the numbers match"] }
          ],
          tryIt: "Make a bar chart of your four segment counts with a clear title.",
          youCanNow: "make a clear bar chart of donor segments for your team or board.",
          quickCheck: [
            { objective: "O5", q: "What do you select before inserting a chart?", options: ["The segment names and their counts", "The whole donor list with names", "Only the title", "An empty column"], answer: 0, why: "Select the segment names column and the counts column, then insert the chart." },
            { objective: "O5", q: "Your chart tries to show segments, gift sizes and months all at once. What do you do?", options: ["Add more colors", "Keep it to one message per chart", "Remove the title", "Use a 3D chart"], answer: 1, why: "Keep it simple: one message per chart." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Turning findings into an appeal plan",
          minutes: 6,
          goal: "Write a one-page plan with one action for each donor segment.",
          text: [
            "Numbers matter only if they change what you do. For each segment, choose one action. New donors: a warm welcome and a story about what their gift did. Repeat donors: a thank-you and an invitation to give monthly. Lapsed donors: a \"we miss you\" note with an update. Larger donors: a personal call or visit from a leader.",
            "AI can draft each message. Use placeholders like [donor name] and [program result], then fill them in yourself in your donor system or mail merge.",
            "Write a one-page plan: your three key numbers, the chart, one action per segment, who does it and by when. Check it with your director before you send anything. Follow any rules your organization has about donor contact and opt-outs."
          ],
          steps: ["Write your three key numbers at the top.", "Add your chart.", "Choose one action per segment.", "Ask AI to draft each message with placeholders.", "Add who does what and by when, and get approval."],
          words: [["Appeal", "a request asking supporters to give."], ["Mail merge", "a tool that fills each letter or email with one person's details from a list."]],
          slides: [
            { title: "One action per segment", bullets: ["New: welcome plus a story", "Repeat: thanks plus monthly giving invite", "Lapsed: \"we miss you\" plus update", "Larger: personal call from a leader"] },
            { title: "Drafting with AI", bullets: ["Use [donor name] and [program result]", "Fill in real details yourself"] },
            { title: "Your one-page plan", bullets: ["Three key numbers and the chart", "Action per segment", "Who does it and by when", "Approved before sending"] }
          ],
          tryIt: "Final task: write your one-page appeal plan with your three numbers, chart, one action per segment and owners. Ask AI to draft the \"we miss you\" note with placeholders, then edit it in your own words.",
          youCanNow: "turn donor numbers into a practical appeal plan that respects donor privacy.",
          quickCheck: [
            { objective: "O6", q: "What is a good action for new donors?", options: ["Ignore them until next year", "Ask them to give monthly right away", "A warm welcome and a story about what their gift did", "A \"we miss you\" note"], answer: 2, why: "New donors get a warm welcome and a story about what their gift did." },
            { objective: "O6", q: "Your appeal plan is written. What do you do before sending anything?", options: ["Send it to every donor at once", "Post it on social media", "Ask AI to approve it", "Check it with your director and follow your donor contact and opt-out rules"], answer: 3, why: "Check with your director and follow your rules on donor contact and opt-outs." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: From numbers to action",
        questions: [
          { objective: "O4", q: "What is safe to paste into an AI assistant?", options: ["Your full donor list", "Donor emails", "Donors' home addresses", "Summary numbers like retention and segment counts"], answer: 3, why: "Summaries do not reveal any one person." },
          { objective: "O4", q: "The AI says \"most food banks retain 70 percent of donors\". What do you do?", options: ["Ask for a source and check it before using it", "Put it in the board report right away", "Assume it is true", "Delete your own numbers"], answer: 0, why: "AI can make up benchmarks; check the source." },
          { objective: "O5", q: "Which chart works well to compare segment counts?", options: ["A map", "A photo", "A bar chart", "A calendar"], answer: 2, why: "Bars make it easy to compare group sizes." },
          { objective: "O6", q: "What is a good action for lapsed donors?", options: ["Remove them forever", "Ask for their bank number", "Send nothing", "A \"we miss you\" note with an update"], answer: 3, why: "A warm update invites them back." },
          { objective: "O6", q: "When AI drafts donor letters, how do names appear?", options: ["Real names typed into the prompt", "No names ever, even in the final letter", "Placeholders like [donor name] filled in later", "Only last names"], answer: 2, why: "Placeholders keep names out of the AI tool." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Donor Analytics",
    questions: [
      { objective: "O1", q: "Donor analytics is:", options: ["Selling donor lists", "Studying giving records to learn who gives, how much and how often", "Guessing who might give", "A type of AI app"], answer: 1, why: "It uses your own records to guide fundraising." },
      { objective: "O1", q: "What do you replace donor names with in your working copy?", options: ["IDs like D001", "Nicknames", "Phone numbers", "Nothing"], answer: 0, why: "IDs let you analyze without showing who is who." },
      { objective: "O1", q: "Which columns should the anonymous copy keep?", options: ["Home address and email", "Phone and notes", "ID, gift date, amount and campaign", "Bank details"], answer: 2, why: "Those are all you need for the numbers." },
      { objective: "O1", q: "Where should the real donor list stay?", options: ["In your donor system or a protected file", "In a public folder", "In an AI chat", "In a group text"], answer: 0, why: "Private records stay protected." },
      { objective: "O2", q: "Total raised is found with:", options: ["=TODAY()", "=COUNT() of dates", "A guess", "=SUM() of the amounts"], answer: 3, why: "=SUM() adds all gifts." },
      { objective: "O2", q: "Average gift equals:", options: ["Largest gift", "Total raised divided by number of gifts", "Number of donors", "Smallest gift times two"], answer: 1, why: "That is the definition of an average." },
      { objective: "O2", q: "50 donors gave last year; 30 of them gave again. Retention is:", options: ["30 percent", "50 percent", "60 percent", "80 percent"], answer: 2, why: "30 / 50 = 0.6, or 60 percent." },
      { objective: "O2", q: "A low retention rate suggests you should:", options: ["Stop fundraising", "Raise prices", "Delete old donors", "Thank and update donors better"], answer: 3, why: "Better stewardship brings donors back." },
      { objective: "O3", q: "A donor's first gift was this year. Their segment is:", options: ["New", "Lapsed", "Repeat", "Larger"], answer: 0, why: "New donors gave for the first time this year." },
      { objective: "O3", q: "A segment is:", options: ["A single donor", "A chart type", "A group of donors who are alike in a way that matters", "A tax form"], answer: 2, why: "Segments let you send the right message to each group." },
      { objective: "O3", q: "To group donors in a spreadsheet, you can:", options: ["Print and cut the paper", "Ask donors to sort themselves", "Delete rows", "Add a Segment column and sort or filter"], answer: 3, why: "Sort and filter group rows by segment." },
      { objective: "O4", q: "Which prompt is safe and useful?", options: ["\"Here are all our donors' names and gifts...\"", "\"Here is our bank login.\"", "\"Retention 45 percent, average gift $85, 22 lapsed. Explain in plain words.\"", "\"Guess our donors.\""], answer: 2, why: "It shares only summary numbers and asks a clear question." },
      { objective: "O4", q: "AI did some math on your numbers. You should:", options: ["Trust it fully", "Recheck it yourself", "Send it to the board unchecked", "Ignore all numbers"], answer: 1, why: "AI can make arithmetic mistakes." },
      { objective: "O4", q: "A benchmark number from AI with no source should be:", options: ["Checked before you use it", "Used in your grant report", "Printed on your website", "Shared with donors"], answer: 0, why: "AI can invent numbers that sound real." },
      { objective: "O5", q: "To make a chart in Sheets or Excel, you first:", options: ["Close the file", "Type a password", "Select the table of segment names and counts", "Delete the data"], answer: 2, why: "The chart is built from the selected data." },
      { objective: "O5", q: "A good chart title is:", options: ["\"Our donors this year by group\"", "\"Chart 1\"", "No title", "\"Data\""], answer: 0, why: "A clear title tells readers the message." },
      { objective: "O6", q: "A good action for repeat donors is:", options: ["Ignoring them", "Asking for their passwords", "Removing them from the list", "A thank-you and an invitation to give monthly"], answer: 3, why: "Loyal donors are the best prospects for monthly giving." },
      { objective: "O6", q: "For larger donors, a good action is:", options: ["A form letter only", "A personal call or visit from a leader", "No contact", "A text asking for card numbers"], answer: 1, why: "Personal contact honors bigger commitments." },
      { objective: "O6", q: "Your one-page plan should include:", options: ["Every donor's address", "Key numbers, chart, actions, owners and dates", "Only the chart", "AI's opinions only"], answer: 1, why: "A plan says what will be done, by whom and when." },
      { objective: "O6", q: "Before sending any appeal, you should:", options: ["Send it to everyone at once without checking", "Let the AI send it", "Skip proofreading", "Get approval and follow your donor contact and opt-out rules"], answer: 3, why: "Approval and respect for opt-outs protect donor trust." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      6,
      8,
      11,
      14,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Safe copy",
        objective: "O1",
        notYet: "A name, address, phone, email or note is still in the copy.",
        meets: "Names replaced by IDs; only ID, date, amount and campaign kept.",
        exceeds: "Notes where the real list is kept and who can open it."
      },
      {
        name: "Key numbers",
        objective: "O2",
        notYet: "Retention rate or average gift is calculated wrong.",
        meets: "Total raised, average gift and retention rate are all correct.",
        exceeds: "Shows the formula or working for each number."
      },
      {
        name: "Donor segments",
        objective: "O3",
        notYet: "Fewer than three groups, or donors left out.",
        meets: "At least three segments, every donor ID in one, with counts.",
        exceeds: "Uses all four segments, with a stated amount for Larger donors."
      },
      {
        name: "AI explanation checked",
        objective: "O4",
        notYet: "Donor-level data was pasted, or AI math or benchmarks were used unchecked.",
        meets: "Only summary numbers pasted; AI's math and any benchmark rechecked.",
        exceeds: "Lists the questions AI suggested asking next and the answers."
      },
      {
        name: "Appeal plan",
        objective: "O6",
        notYet: "No action for a segment, or no owner or date.",
        meets: "One page with key numbers, chart, one action per segment, owner and date.",
        exceeds: "Draft messages use placeholders and the plan is approved by the director."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Organizations that calculate their donor retention rate for the first time (follow-up survey)",
      "Change in donor retention rate one year later, as reported by organizations",
      "Lapsed donors who give again after a \"we miss you\" note"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with Google Sheets or Excel",
      "An anonymous copy of your donor list, or the practice list from Lesson 1",
      "A free AI assistant, used only with summary numbers",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Use the practice list in class; learners work on real data only in their own protected files.",
      "Walk through the retention rate calculation together before learners try their own.",
      "Show a case where AI's arithmetic is wrong so learners see why they recheck it.",
      "Invite the director or development lead so the appeal plan can be approved on the spot.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
