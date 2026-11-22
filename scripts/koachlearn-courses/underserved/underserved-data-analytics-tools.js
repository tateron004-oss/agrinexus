"use strict";

// Koach Learn course: Undeserved Community -> "Introduction to Data Analytics Tools and Techniques". Skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "underserved-data-analytics-tools",
  category: "Undeserved Community",
  name: "Introduction to Data Analytics Tools and Techniques",
  skills: "Setting up a clean spreadsheet, Sorting and filtering data, Using SUM and AVERAGE, Making a chart, Using AI to explain formulas, Sharing a finding in plain words",
  outcome: "put real information into a free spreadsheet (Google Sheets or Excel for the web), sort and filter it, total and average it with formulas, make a chart, and explain what it shows in two plain sentences.",
  about: [
    "Data analytics means using information to answer a question. A food pantry wants to know its busiest day. A family wants to know where its money goes. A youth league wants to know how many kids came each week. You can answer questions like these with free tools.",
    "In this course you will use a free spreadsheet, Google Sheets or Excel for the web, on a phone, home computer or library computer. You will enter data, sort and filter it, use simple formulas, make a chart, and use a free AI assistant to help when you get stuck.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task that builds the same spreadsheet, step by step. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build a spreadsheet of one month of real or practice data (for example food pantry visits per day, or family spending by category). Sort it, filter it, add a total with SUM and an average with AVERAGE, make a chart, and write two plain sentences that say what the data shows.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults in underserved communities who want a job-ready computer skill or need to track numbers for a family, food pantry, church, youth league or small nonprofit.",
    startingPoint: "Can use a phone and maybe a computer for browsing. Many have never used a spreadsheet, typed a formula or made a chart, and some feel unsure about math.",
    gap: "Spreadsheet skills are asked for in many office, retail and nonprofit jobs, and community groups need to show what their numbers mean. Learners need to enter clean data, sort, filter, total, chart and explain it, using free tools and keeping people's information private.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6)",
      "Devices: a library or home computer works best; a phone app works for small sheets",
      "Cost: free Google Sheets or Excel for the web with a free account",
      "Privacy: no names, phone numbers or account numbers of real people pasted into AI",
      "Math level: only adding and averaging; the spreadsheet does the math"
    ],
    prerequisites: "None. Learners who have never used a computer mouse or keyboard can take a basic computer skills course first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given something you care about at home, work or in your community", action: "write one clear question that data can answer and list the data you need", standard: "starting with which, how many or how much" },
    { id: "O2", condition: "Using Google Sheets or Excel for the web", action: "create a spreadsheet with clear headings and enter clean data", standard: "one heading per column in row 1 and one record per row, at least ten rows" },
    { id: "O3", condition: "Given a spreadsheet of data", action: "sort a column from largest to smallest and filter to show only some rows", standard: "then clear the filter so all rows come back" },
    { id: "O4", condition: "Given a column of numbers", action: "calculate a total with SUM and an average with AVERAGE", standard: "using the right range so both update when a number changes" },
    { id: "O5", condition: "Given your data and a free AI assistant", action: "create a chart with a clear title and ask AI to explain a formula or error", standard: "choosing the right chart type and pasting no private data" },
    { id: "O6", condition: "When your sheet is finished", action: "write two plain sentences that answer your question, check your work and share it safely", standard: "with a number that backs up the answer and sharing only with people who need it" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting your data ready",
      lessons: [
        {
          objectives: ["O1"],
          title: "What data analytics is, and asking a good question",
          minutes: 4,
          goal: "Write one clear question that data can answer.",
          text: [
            "Data is information you can count or list: dates, amounts, names of places, number of visitors. Analytics means looking at that data to answer a question.",
            "Every good project starts with a clear question. \"Which day of the week does our food pantry get the most visitors?\" is clear. \"Tell me about the pantry\" is not.",
            "A clear question tells you what data to collect. To find the busiest day, you need the date and the number of visitors for each day."
          ],
          steps: ["Pick something you care about: family, work, school or community.", "Write one question that starts with which, how many or how much.", "List the data you need to answer it."],
          words: [["Data", "information you can count or list, like dates, amounts or names."], ["Analytics", "looking at data to answer a question."]],
          slides: [
            { title: "Data and analytics", bullets: ["Data: information you can count or list", "Analytics: using data to answer a question"] },
            { title: "Start with a clear question", bullets: ["Clear: \"Which day gets the most visitors?\"", "Not clear: \"Tell me about the pantry\""] },
            { title: "The question tells you what to collect", bullets: ["Busiest day? You need dates and visitor counts", "Biggest cost? You need categories and amounts"] }
          ],
          tryIt: "Write one clear question about your family, work, school or community that numbers could answer. Under it, list the two or three kinds of data you would need.",
          youCanNow: "write a clear question and name the data needed to answer it.",
          quickCheck: [
            { objective: "O1", q: "What is data?", options: ["Information you can count or list", "Only numbers on a bank statement", "A type of computer", "A website"], answer: 0, why: "Data is information like dates, amounts, places and visitor counts." },
            { objective: "O1", q: "Your church wants to know if more people come in winter. What data do you need?", options: ["The pastor's phone number", "The date and number of people at each service", "The color of the building", "Nothing; just guess"], answer: 1, why: "A clear question tells you to collect the date and the count for each service." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Opening a free spreadsheet and entering data",
          minutes: 5,
          goal: "Create a spreadsheet with clear column headings and your data.",
          text: [
            "A spreadsheet is a grid of boxes called cells. Columns go up and down and have letters (A, B, C). Rows go across and have numbers (1, 2, 3). Cell B2 is in column B, row 2.",
            "Free choices: Google Sheets at sheets.google.com with a free Google account, or Excel for the web at office.com with a free Microsoft account. Both work in a web browser and as phone apps.",
            "Keep data clean: one heading per column in row 1 (like Date, Day, Visitors), one row for each record, and numbers typed as plain numbers with no extra words. Clean data makes every later step easier."
          ],
          steps: ["Open sheets.google.com or office.com and start a blank spreadsheet.", "Give the file a clear name.", "Type a heading in each column of row 1.", "Enter one record per row below the headings."],
          words: [["Spreadsheet", "a grid of rows and columns for working with numbers and lists."], ["Cell", "one box in a spreadsheet, named by its column letter and row number, like B2."], ["Heading", "the label at the top of a column."]],
          slides: [
            { title: "A spreadsheet is a grid", bullets: ["Columns have letters: A, B, C", "Rows have numbers: 1, 2, 3", "Cell B2 = column B, row 2"] },
            { title: "Free spreadsheet tools", bullets: ["Google Sheets: sheets.google.com", "Excel for the web: office.com", "Both work on a library computer or phone"] },
            { title: "Keep data clean", bullets: ["One heading per column in row 1", "One record per row", "Numbers as plain numbers"] }
          ],
          tryIt: "Open a free spreadsheet. Make three headings for your question (for example Date, Day, Visitors) and enter at least ten rows of real or practice data.",
          youCanNow: "start a free spreadsheet and enter clean data under clear headings.",
          quickCheck: [
            { objective: "O2", q: "In a spreadsheet, what are rows named with?", options: ["Letters", "Colors", "Numbers", "Names"], answer: 2, why: "Rows go across and have numbers; columns have letters." },
            { objective: "O2", q: "You typed \"about 40 people\" in the Visitors column. What do you change?", options: ["Nothing", "Add more words", "Make it bold", "Type just 40 as a plain number"], answer: 3, why: "Clean data uses plain numbers so the spreadsheet can do math with them." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sorting and filtering",
          minutes: 5,
          goal: "Sort your data from largest to smallest and filter it to show only some rows.",
          text: [
            "Sorting puts rows in order, such as largest to smallest. Sorting the Visitors column from largest to smallest puts the busiest day at the top.",
            "Filtering hides the rows you do not need right now. You could filter the Day column to show only Saturdays. Filtering does not delete anything; you can turn it off and all rows come back.",
            "In both Google Sheets and Excel for the web, sort and filter are in the Data menu or on the Data tab. If you cannot find them, ask a free AI assistant: \"How do I sort a column from largest to smallest in Google Sheets?\""
          ],
          steps: ["Click any cell in your data.", "Open the Data menu or Data tab and turn on a filter.", "Use the small arrow on a heading to sort largest to smallest.", "Use the arrow on another heading to show only some values, then clear the filter."],
          words: [["Sort", "put rows in order, like largest to smallest or A to Z."], ["Filter", "show only the rows that match what you choose, without deleting the others."]],
          slides: [
            { title: "Sort: put rows in order", bullets: ["Largest to smallest puts the top value first", "A to Z puts names in order"] },
            { title: "Filter: show only what you need", bullets: ["Example: only Saturdays", "Nothing is deleted", "Turn it off and all rows come back"] },
            { title: "Where to find them", bullets: ["The Data menu or Data tab", "Stuck? Ask AI how, for your tool"] }
          ],
          tryIt: "Sort your main number column from largest to smallest and write down the top row. Then filter to show only one kind of row, and clear the filter.",
          youCanNow: "sort and filter a spreadsheet to find what you are looking for.",
          quickCheck: [
            { objective: "O3", q: "What does sorting do?", options: ["Puts rows in order, like largest to smallest", "Deletes rows you do not need", "Adds up a column", "Makes a chart"], answer: 0, why: "Sorting puts rows in an order, such as the largest number first." },
            { objective: "O3", q: "You only want to see the rows for Mondays. What do you use?", options: ["SUM", "A filter on the Day column", "A pie chart", "Delete the other rows"], answer: 1, why: "A filter hides the rows you do not need without deleting them." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting your data ready",
        questions: [
          { objective: "O1", q: "Which is the clearest data question?", options: ["\"Tell me about the pantry\"", "\"Stuff?\"", "\"Which day of the week gets the most pantry visitors?\"", "\"Data please\""], answer: 2, why: "It says exactly what to find, so you know what data to collect." },
          { objective: "O2", q: "What is cell C4?", options: ["The box in column C, row 4", "The fourth file", "Row C, column 4", "A phone number"], answer: 0, why: "Cells are named by column letter, then row number." },
          { objective: "O2", q: "Where should column headings go?", options: ["At the bottom", "Row 1, one heading per column", "In a separate file", "Nowhere"], answer: 1, why: "Headings in row 1 keep the data clean and easy to sort." },
          { objective: "O3", q: "You filter to show only Saturdays. What happens to the other rows?", options: ["They are deleted forever", "They move to a new file", "They turn into a chart", "They are hidden and come back when you clear the filter"], answer: 3, why: "Filtering hides rows; it does not delete them." },
          { objective: "O3", q: "You want the busiest day at the top. What do you do?", options: ["Sort the visitor column from largest to smallest", "Delete the other rows", "Change the file name", "Make the text bold"], answer: 0, why: "Sorting largest to smallest puts the highest number first." }
        ]
      }
    },
    {
      name: "Chapter 2: Finding and sharing answers",
      lessons: [
        {
          objectives: ["O4"],
          title: "Formulas: SUM and AVERAGE",
          minutes: 5,
          goal: "Use SUM to total a column and AVERAGE to find its average.",
          text: [
            "A formula is a small instruction that does math for you. Every formula starts with an equals sign (=).",
            "=SUM(C2:C31) adds every number from cell C2 to cell C31. =AVERAGE(C2:C31) finds the average of those numbers. C2:C31 is called a range: all the cells from C2 down to C31.",
            "If you change a number in the column, the total and the average update on their own. That is the power of a spreadsheet: no recounting by hand."
          ],
          steps: ["Click an empty cell under your number column.", "Type =SUM( then the first cell, a colon, and the last cell, then ).", "Press Enter to see the total.", "In another empty cell, do the same with =AVERAGE( ... )."],
          words: [["Formula", "an instruction that starts with = and does math in a spreadsheet."], ["Range", "a group of cells, written like C2:C31."], ["Average", "the total divided by how many numbers there are."]],
          slides: [
            { title: "Formulas start with =", bullets: ["They do the math for you", "They update when numbers change"] },
            { title: "Two formulas to know", bullets: ["=SUM(C2:C31) adds them all", "=AVERAGE(C2:C31) finds the average"] },
            { title: "What is a range?", bullets: ["C2:C31 means C2 down to C31", "First cell, colon, last cell"] }
          ],
          tryIt: "Under your number column, add a total with =SUM and an average with =AVERAGE. Change one number and watch both update.",
          youCanNow: "total and average a column with SUM and AVERAGE.",
          quickCheck: [
            { objective: "O4", q: "What is a range like B2:B20?", options: ["One single cell", "A chart type", "All the cells from B2 down to B20", "A file name"], answer: 2, why: "A range is every cell from the first to the last, joined by a colon." },
            { objective: "O4", q: "You want the total of spending in D2 to D15. What do you type?", options: ["SUM D2 D15", "=AVERAGE(D2:D15)", "=D2+D15", "=SUM(D2:D15)"], answer: 3, why: "=SUM(D2:D15) adds every number from D2 to D15." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Making a chart, with AI as your helper",
          minutes: 5,
          goal: "Make a simple chart and use AI to explain a formula or fix an error.",
          text: [
            "A chart turns numbers into a picture. A bar chart compares amounts, like visitors per day. A line chart shows change over time. A pie chart shows parts of a whole, like spending by category.",
            "To make one, select your headings and data, then insert a chart from the Insert menu or Insert tab. Change the title to say what the chart shows.",
            "A free AI assistant can explain formulas and errors. Type the formula or error and ask: \"Explain this in simple words and how to fix it.\" Do not paste private data like names, addresses or account numbers; describe the columns instead."
          ],
          steps: ["Select the headings and the data you want to show.", "Open the Insert menu or Insert tab and choose Chart.", "Pick bar, line or pie.", "Give the chart a clear title."],
          words: [["Bar chart", "a chart that compares amounts with bars."], ["Line chart", "a chart that shows change over time."], ["Pie chart", "a circle that shows parts of a whole."]],
          slides: [
            { title: "Pick the right chart", bullets: ["Bar: compare amounts", "Line: change over time", "Pie: parts of a whole"] },
            { title: "Make a chart", bullets: ["Select headings and data", "Insert, then Chart", "Give it a clear title"] },
            { title: "AI as your helper", bullets: ["Ask it to explain a formula or error", "Describe columns; do not paste private data"] }
          ],
          tryIt: "Make a bar or line chart of your data and give it a clear title. Then ask an AI assistant to explain what =AVERAGE(C2:C31) does in simple words.",
          youCanNow: "make a chart and use AI to understand formulas without sharing private data.",
          quickCheck: [
            { objective: "O5", q: "Which chart compares amounts, like visitors per day?", options: ["Bar chart", "Line chart", "Pie chart", "No chart"], answer: 0, why: "A bar chart compares amounts side by side." },
            { objective: "O5", q: "Your formula shows an error and the sheet has clients' names. What do you paste into AI?", options: ["The whole sheet", "The formula and a description of the columns", "The clients' phone numbers", "Your account password"], answer: 1, why: "Describe the columns and paste the formula, not private data." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Telling what the data shows",
          minutes: 5,
          goal: "Write two plain sentences that answer your question and share the sheet safely.",
          text: [
            "Your work is not finished until someone understands it. Write two sentences: one with the answer, one with a number that backs it up. For example: \"Saturday is our busiest day. We averaged 64 visitors on Saturdays, compared with 38 on other days.\"",
            "Check your work before you share. Look for typos in numbers, blank rows and totals that look too big or too small. If something looks wrong, it probably is.",
            "To share, use the Share button and choose who can see it. For data about people, share only with those who need it, and remove names or phone numbers if they are not needed."
          ],
          steps: ["Write one sentence with the answer to your question.", "Write one sentence with a number that supports it.", "Check for typos, blank rows and odd totals.", "Share only with the people who need it."],
          words: [["Finding", "what the data shows, said in plain words."]],
          slides: [
            { title: "Say what it shows", bullets: ["Sentence 1: the answer", "Sentence 2: a number that backs it up"] },
            { title: "Check before you share", bullets: ["Typos in numbers", "Blank rows", "Totals that look too big or small"] },
            { title: "Share safely", bullets: ["Use the Share button", "Only people who need it", "Remove names or phone numbers if not needed"] }
          ],
          tryIt: "Final task: finish your spreadsheet with sorting, a filter, SUM, AVERAGE and a chart. Write two plain sentences that answer your question, check your work, and share it with one person.",
          youCanNow: "turn data into a clear, checked finding and share it safely.",
          quickCheck: [
            { objective: "O6", q: "What two parts does a good finding have?", options: ["A title and a color", "A chart and a formula", "An answer and a number that backs it up", "A name and a phone number"], answer: 2, why: "One sentence gives the answer and one gives a number that supports it." },
            { objective: "O6", q: "Your average visitors per day shows 4,200, but the pantry is small. What do you do?", options: ["Share it right away", "Delete the sheet", "Round it to 4,000", "Check for typos, blank rows and the formula range"], answer: 3, why: "A number that looks wrong probably is, so you check your work first." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Finding and sharing answers",
        questions: [
          { objective: "O4", q: "Every spreadsheet formula starts with:", options: ["A dollar sign", "A question mark", "A letter", "An equals sign (=)"], answer: 3, why: "Formulas begin with =." },
          { objective: "O4", q: "What does =SUM(B2:B10) do?", options: ["Adds the numbers from B2 to B10", "Finds the average", "Sorts the column", "Makes a chart"], answer: 0, why: "SUM adds every number in the range." },
          { objective: "O5", q: "Which chart best shows change over time?", options: ["Pie chart", "Line chart", "No chart", "A photo"], answer: 1, why: "Line charts show how something changes over time." },
          { objective: "O5", q: "You want AI to explain an error in a sheet of client names and phone numbers. What should you do?", options: ["Paste everything", "Paste only the phone numbers", "Describe the columns and paste the formula, not private data", "Give up"], answer: 2, why: "You can get help without sharing private information." },
          { objective: "O6", q: "Which is the best finding to share?", options: ["\"Saturday is busiest. We averaged 64 visitors on Saturdays and 38 on other days.\"", "\"Numbers.\"", "\"It's a chart.\"", "\"See the sheet.\""], answer: 0, why: "It gives the answer and a number that backs it up." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to Data Analytics Tools and Techniques",
    questions: [
      { objective: "O1", q: "Data analytics means:", options: ["Deleting old files", "Using data to answer a question", "Buying a computer", "Typing fast"], answer: 1, why: "Analytics is looking at data to find an answer." },
      { objective: "O1", q: "Why start with a clear question?", options: ["It tells you what data to collect", "It makes the file bigger", "It is not needed", "It hides the data"], answer: 0, why: "The question shapes the data you need." },
      { objective: "O1", q: "To find which spending category costs the most, you need:", options: ["Only dates", "Your password", "Categories and amounts", "Phone numbers"], answer: 2, why: "Categories and amounts let you compare costs." },
      { objective: "O2", q: "Which is a free spreadsheet tool?", options: ["A calculator watch", "A paper notebook", "A pop-up ad", "Google Sheets"], answer: 3, why: "Google Sheets is free with a Google account; Excel for the web is free with a Microsoft account." },
      { objective: "O2", q: "In a spreadsheet, columns are named with:", options: ["Letters", "Numbers", "Colors", "Emojis"], answer: 0, why: "Columns are A, B, C; rows are 1, 2, 3." },
      { objective: "O2", q: "Which is clean data?", options: ["Many headings in one cell", "\"about 20ish\" in a number cell", "One heading per column and plain numbers", "Blank rows between every record"], answer: 2, why: "Clean data has clear headings and plain numbers." },
      { objective: "O3", q: "Sorting largest to smallest puts:", options: ["The smallest number first", "The largest number first", "Rows in random order", "Everything in a chart"], answer: 1, why: "Largest to smallest starts with the biggest value." },
      { objective: "O3", q: "Filtering a column:", options: ["Deletes rows forever", "Emails the sheet", "Changes the numbers", "Hides rows that do not match, without deleting them"], answer: 3, why: "Filters only hide rows until you clear them." },
      { objective: "O3", q: "Where are sort and filter usually found?", options: ["The Data menu or Data tab", "The Print button", "The trash can", "The file name"], answer: 0, why: "Both tools keep them under Data." },
      { objective: "O4", q: "What does =AVERAGE(C2:C31) find?", options: ["The biggest number", "The average of C2 to C31", "The number of rows", "The first value"], answer: 1, why: "AVERAGE divides the total by how many numbers there are." },
      { objective: "O4", q: "In C2:C31, the colon means:", options: ["Divide", "Stop", "From C2 through C31", "Multiply"], answer: 2, why: "A colon makes a range of cells." },
      { objective: "O4", q: "You change a number in the column. The SUM total:", options: ["Stays the same forever", "Disappears", "Turns into text", "Updates on its own"], answer: 3, why: "Formulas recalculate when data changes." },
      { objective: "O5", q: "Which chart compares amounts, like visitors per day?", options: ["Bar chart", "Pie chart of one item", "No chart", "A map"], answer: 0, why: "Bar charts compare amounts side by side." },
      { objective: "O5", q: "Which chart shows parts of a whole, like spending by category?", options: ["Line chart", "Pie chart", "A table of dates", "A heading"], answer: 1, why: "Pie charts show how a whole is divided." },
      { objective: "O5", q: "To make a chart you first:", options: ["Delete the headings", "Close the file", "Select the headings and data", "Change the font"], answer: 2, why: "The chart needs to know which data to show." },
      { objective: "O5", q: "What should you NOT paste into an AI assistant?", options: ["A formula", "An error message", "A description of your columns", "Names and phone numbers of the people you serve"], answer: 3, why: "Personal information should stay private." },
      { objective: "O6", q: "A good finding has:", options: ["An answer and a number that backs it up", "Only a chart", "No numbers", "Your password"], answer: 0, why: "Two sentences: the answer and the evidence." },
      { objective: "O6", q: "Your total looks far too big. What do you do?", options: ["Share it anyway", "Check for typos, blank rows and the formula range", "Delete the file", "Make the font smaller"], answer: 1, why: "Odd totals usually mean an error to find." },
      { objective: "O6", q: "When sharing a sheet about people, you should:", options: ["Post it publicly", "Share it with everyone you know", "Share only with those who need it and remove details not needed", "Print and leave it out"], answer: 2, why: "Sharing less keeps people's information safe." },
      { objective: "O2", q: "Which free tool lets you use Excel in a web browser?", options: ["Excel for the web at office.com", "A fax machine", "A text message", "A gift card"], answer: 0, why: "Excel for the web is free with a Microsoft account." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      4,
      6,
      9,
      12,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Clean data",
        objective: "O2",
        notYet: "Missing headings, mixed words and numbers, or fewer than ten rows.",
        meets: "One heading per column, one record per row, plain numbers for a month of data.",
        exceeds: "The file has a clear name and the data needs no fixing."
      },
      {
        name: "Sort and filter",
        objective: "O3",
        notYet: "Data not sorted or filtered.",
        meets: "Main number column sorted largest to smallest, and a filter used and cleared.",
        exceeds: "Can say what the sort and filter showed."
      },
      {
        name: "SUM and AVERAGE",
        objective: "O4",
        notYet: "Formulas missing or using the wrong range.",
        meets: "Correct SUM and AVERAGE on the number column.",
        exceeds: "Shows that both update when a number is changed."
      },
      {
        name: "Chart",
        objective: "O5",
        notYet: "No chart, or the wrong type and no title.",
        meets: "A chart of the right type with a clear title.",
        exceeds: "The chart makes the answer to the question easy to see."
      },
      {
        name: "Two-sentence finding",
        objective: "O6",
        notYet: "No answer, or no number to back it up.",
        meets: "One sentence with the answer and one with a supporting number.",
        exceeds: "The work was checked and shared only with people who need it."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who use a spreadsheet for their family, job or community group within 30 days (follow-up survey)",
      "Learners who list spreadsheet skills on a résumé or get an office job within 90 days",
      "Community partners report using learner-made sheets and charts in reports or meetings"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet (library or home); a phone app works for small sheets",
      "A free Google or Microsoft account for Google Sheets or Excel for the web",
      "One month of real or practice data, such as pantry visits or spending by category",
      "A free AI assistant for explaining formulas and errors",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Provide a practice data set for learners who do not have their own.",
      "Show sort, filter and SUM live on a projector before learners try them.",
      "Remind learners never to paste names, phone numbers or account numbers into AI; describe the columns instead.",
      "Pair learners who are new to computers with a more experienced partner.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
