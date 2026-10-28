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
  chapters: [
    {
      name: "Chapter 1: Getting your data ready",
      lessons: [
        {
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
          youCanNow: "write a clear question and name the data needed to answer it."
        },
        {
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
          youCanNow: "start a free spreadsheet and enter clean data under clear headings."
        },
        {
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
          youCanNow: "sort and filter a spreadsheet to find what you are looking for."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting your data ready",
        questions: [
          { q: "Which is the clearest data question?", options: ["\"Tell me about the pantry\"", "\"Stuff?\"", "\"Which day of the week gets the most pantry visitors?\"", "\"Data please\""], answer: 2, why: "It says exactly what to find, so you know what data to collect." },
          { q: "What is cell C4?", options: ["The box in column C, row 4", "The fourth file", "Row C, column 4", "A phone number"], answer: 0, why: "Cells are named by column letter, then row number." },
          { q: "Where should column headings go?", options: ["At the bottom", "Row 1, one heading per column", "In a separate file", "Nowhere"], answer: 1, why: "Headings in row 1 keep the data clean and easy to sort." },
          { q: "You filter to show only Saturdays. What happens to the other rows?", options: ["They are deleted forever", "They move to a new file", "They turn into a chart", "They are hidden and come back when you clear the filter"], answer: 3, why: "Filtering hides rows; it does not delete them." },
          { q: "You want the busiest day at the top. What do you do?", options: ["Sort the visitor column from largest to smallest", "Delete the other rows", "Change the file name", "Make the text bold"], answer: 0, why: "Sorting largest to smallest puts the highest number first." }
        ]
      }
    },
    {
      name: "Chapter 2: Finding and sharing answers",
      lessons: [
        {
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
          youCanNow: "total and average a column with SUM and AVERAGE."
        },
        {
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
          youCanNow: "make a chart and use AI to understand formulas without sharing private data."
        },
        {
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
          youCanNow: "turn data into a clear, checked finding and share it safely."
        }
      ],
      check: {
        title: "Knowledge Check 2: Finding and sharing answers",
        questions: [
          { q: "Every spreadsheet formula starts with:", options: ["A dollar sign", "A question mark", "A letter", "An equals sign (=)"], answer: 3, why: "Formulas begin with =." },
          { q: "What does =SUM(B2:B10) do?", options: ["Adds the numbers from B2 to B10", "Finds the average", "Sorts the column", "Makes a chart"], answer: 0, why: "SUM adds every number in the range." },
          { q: "Which chart best shows change over time?", options: ["Pie chart", "Line chart", "No chart", "A photo"], answer: 1, why: "Line charts show how something changes over time." },
          { q: "You want AI to explain an error in a sheet of client names and phone numbers. What should you do?", options: ["Paste everything", "Paste only the phone numbers", "Describe the columns and paste the formula, not private data", "Give up"], answer: 2, why: "You can get help without sharing private information." },
          { q: "Which is the best finding to share?", options: ["\"Saturday is busiest. We averaged 64 visitors on Saturdays and 38 on other days.\"", "\"Numbers.\"", "\"It's a chart.\"", "\"See the sheet.\""], answer: 0, why: "It gives the answer and a number that backs it up." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to Data Analytics Tools and Techniques",
    questions: [
      { q: "Data analytics means:", options: ["Deleting old files", "Using data to answer a question", "Buying a computer", "Typing fast"], answer: 1, why: "Analytics is looking at data to find an answer." },
      { q: "Why start with a clear question?", options: ["It tells you what data to collect", "It makes the file bigger", "It is not needed", "It hides the data"], answer: 0, why: "The question shapes the data you need." },
      { q: "To find which spending category costs the most, you need:", options: ["Only dates", "Your password", "Categories and amounts", "Phone numbers"], answer: 2, why: "Categories and amounts let you compare costs." },
      { q: "Which is a free spreadsheet tool?", options: ["A calculator watch", "A paper notebook", "A pop-up ad", "Google Sheets"], answer: 3, why: "Google Sheets is free with a Google account; Excel for the web is free with a Microsoft account." },
      { q: "In a spreadsheet, columns are named with:", options: ["Letters", "Numbers", "Colors", "Emojis"], answer: 0, why: "Columns are A, B, C; rows are 1, 2, 3." },
      { q: "Which is clean data?", options: ["Many headings in one cell", "\"about 20ish\" in a number cell", "One heading per column and plain numbers", "Blank rows between every record"], answer: 2, why: "Clean data has clear headings and plain numbers." },
      { q: "Sorting largest to smallest puts:", options: ["The smallest number first", "The largest number first", "Rows in random order", "Everything in a chart"], answer: 1, why: "Largest to smallest starts with the biggest value." },
      { q: "Filtering a column:", options: ["Deletes rows forever", "Emails the sheet", "Changes the numbers", "Hides rows that do not match, without deleting them"], answer: 3, why: "Filters only hide rows until you clear them." },
      { q: "Where are sort and filter usually found?", options: ["The Data menu or Data tab", "The Print button", "The trash can", "The file name"], answer: 0, why: "Both tools keep them under Data." },
      { q: "What does =AVERAGE(C2:C31) find?", options: ["The biggest number", "The average of C2 to C31", "The number of rows", "The first value"], answer: 1, why: "AVERAGE divides the total by how many numbers there are." },
      { q: "In C2:C31, the colon means:", options: ["Divide", "Stop", "From C2 through C31", "Multiply"], answer: 2, why: "A colon makes a range of cells." },
      { q: "You change a number in the column. The SUM total:", options: ["Stays the same forever", "Disappears", "Turns into text", "Updates on its own"], answer: 3, why: "Formulas recalculate when data changes." },
      { q: "Which chart compares amounts, like visitors per day?", options: ["Bar chart", "Pie chart of one item", "No chart", "A map"], answer: 0, why: "Bar charts compare amounts side by side." },
      { q: "Which chart shows parts of a whole, like spending by category?", options: ["Line chart", "Pie chart", "A table of dates", "A heading"], answer: 1, why: "Pie charts show how a whole is divided." },
      { q: "To make a chart you first:", options: ["Delete the headings", "Close the file", "Select the headings and data", "Change the font"], answer: 2, why: "The chart needs to know which data to show." },
      { q: "What should you NOT paste into an AI assistant?", options: ["A formula", "An error message", "A description of your columns", "Names and phone numbers of the people you serve"], answer: 3, why: "Personal information should stay private." },
      { q: "A good finding has:", options: ["An answer and a number that backs it up", "Only a chart", "No numbers", "Your password"], answer: 0, why: "Two sentences: the answer and the evidence." },
      { q: "Your total looks far too big. What do you do?", options: ["Share it anyway", "Check for typos, blank rows and the formula range", "Delete the file", "Make the font smaller"], answer: 1, why: "Odd totals usually mean an error to find." },
      { q: "When sharing a sheet about people, you should:", options: ["Post it publicly", "Share it with everyone you know", "Share only with those who need it and remove details not needed", "Print and leave it out"], answer: 2, why: "Sharing less keeps people's information safe." },
      { q: "Which free tool lets you use Excel in a web browser?", options: ["Excel for the web at office.com", "A fax machine", "A text message", "A gift card"], answer: 0, why: "Excel for the web is free with a Microsoft account." }
    ]
  }
};
