"use strict";

// Koach Learn course: Workforce Development -> "Data Science Professional Certificate Preparation". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// Certificate names, course counts and topics were checked on the providers' own pages (coursera.org, learn.microsoft.com) on 27 October 2026.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const GOOGLE_DA = { name: "Coursera: Google Data Analytics Professional Certificate", url: "https://www.coursera.org/professional-certificates/google-data-analytics" };
const IBM_DS = { name: "Coursera: IBM Data Science Professional Certificate", url: "https://www.coursera.org/professional-certificates/ibm-data-science" };
const MS_PL300 = { name: "Microsoft Learn: Microsoft Certified: Power BI Data Analyst Associate (Exam PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const COLAB = { name: "Google Colab", url: "https://colab.research.google.com/" };

module.exports = {
  id: "workforce-data-science-certificate",
  category: "Workforce Development",
  name: "Data Science Professional Certificate Preparation",
  skills: "Choosing the right data certificate, Making a weekly study plan, Cleaning and summarizing a data set, Asking a data question and answering it with a chart, Building a portfolio project",
  outcome: "choose the data certificate that fits your goal, make a study plan you can keep, and complete a small practice project of the kind these certificates ask for: take a real data set, clean it, summarize it, make one clear chart and write what it means.",
  about: [
    "This course is for job seekers and working people who want to move into data work, or use data in the job they have, and are thinking about a well-known online data certificate such as the Google Data Analytics Professional Certificate, the IBM Data Science Professional Certificate, or Microsoft's Power BI Data Analyst Associate.",
    "It does not replace those programs. It gets you ready for them: you will learn what each one covers, pick one that fits your goal and your week, and practice the core skills they all use, on a small project you can show employers.",
    "A certificate is a way to learn and to show what you learned. It does not promise a job or a pay raise. What helps most is finishing, practicing, and being able to explain your own projects. Check each program's current page for its cost, time and content before you sign up.",
    "Each lesson takes about five minutes, with a hands-on task. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Complete a mini portfolio project: pick a free public data set (or the sample sales table in Lesson 4), write one clear question, clean the data (fix blanks, duplicates and formats), make a summary table, make one chart that answers the question, and write a three-sentence finding with one limit of your data. Save it in Google Sheets, Excel or Google Colab with a short title and description.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Job seekers and working people who want to move into data work, or use data in the job they have, and are thinking about a well-known online data certificate (Google Data Analytics, IBM Data Science or Microsoft Power BI Data Analyst).",
    startingPoint: "Can use a computer and basic spreadsheets. Most have not compared data certificates, kept a long online study plan, or cleaned, summarized and charted a real data set.",
    gap: "Data skills open many jobs, but people often pick the wrong certificate, stop partway through, or finish without work to show. Learners need to choose a certificate that fits their goal, plan study they can keep, and complete a small portfolio project of the kind these certificates ask for.",
    constraints: [
      "Reading level: plain words and short sentences; data terms are explained",
      "Devices: a computer is needed for spreadsheets and Google Colab; a phone is enough for planning",
      "Costs and course details change, so learners check each program's official page today",
      "Privacy: no private customer data in a public portfolio without permission; sample or public data sets only",
      "Time: about 5-minute lessons plus hands-on practice; certificates take months after this course"
    ],
    prerequisites: "None. Basic spreadsheet practice helps."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a workplace you know", action: "describe the data workflow and write three questions data could answer there", standard: "marking each one as analyst or data scientist work" },
    { id: "O2", condition: "Given three well-known data certificates", action: "compare their level, main tools, time and cost and choose the one that fits your goal", standard: "with the cost taken from the official page today" },
    { id: "O3", condition: "For the certificate you chose", action: "create a weekly study plan with set study blocks and a weekly goal", standard: "that fits around your work and family" },
    { id: "O4", condition: "Given a small data set with problems", action: "find and fix blanks, duplicates and format problems and write a cleaning log", standard: "with a copy of the original saved first" },
    { id: "O5", condition: "Given a cleaned data set and a question", action: "make a summary table and one chart that answers the question", standard: "with the right chart type and a title that states the answer" },
    { id: "O6", condition: "Using your chart and summary", action: "write a three-sentence finding with one limit and save it as a portfolio project", standard: "with a short title and description and no private data" }
  ],
  chapters: [
    {
      name: "Chapter 1: Choosing your certificate and planning to finish",
      lessons: [
        {
          objectives: ["O1"],
          title: "What data analysts and data scientists do",
          minutes: 5,
          goal: "Describe the data workflow and say which part interests you most.",
          text: [
            "Data work follows a simple path: ask a question, collect the data, clean it, explore and analyze it, show it with charts, and share what it means. Google's program describes the same idea in its own steps.",
            "A data analyst mostly works with what already happened: \"Which product sold best last month?\" They use spreadsheets, SQL (a language for asking questions of databases) and dashboard tools like Tableau or Power BI.",
            "A data scientist does that too, and also builds models that predict or sort things: \"Which customers might stop buying?\" They usually code in Python and use more math. Many people start as analysts and grow into data science."
          ],
          words: [["Data set", "a collection of data, usually a table of rows and columns."], ["SQL", "Structured Query Language: a language for getting data out of databases."], ["Model", "a program that learns patterns from data to predict or sort things."], ["Dashboard", "a page of charts that updates as the data changes."]],
          slides: [
            { title: "The data workflow", bullets: ["Ask a question", "Collect and clean the data", "Analyze and chart it", "Share what it means"] },
            { title: "Data analyst", bullets: ["Explains what happened", "Spreadsheets, SQL, Tableau or Power BI", "\"Which product sold best last month?\""] },
            { title: "Data scientist", bullets: ["Also predicts and sorts with models", "Usually Python and more math", "\"Which customers might stop buying?\""] }
          ],
          tryIt: "Think of your current or last job (a store, warehouse, clinic, restaurant). Write three questions data could answer there, such as \"Which hours are busiest?\" Mark each one \"analyst\" or \"data scientist\".",
          youCanNow: "describe the data workflow and the difference between a data analyst and a data scientist.",
          quickCheck: [
            { objective: "O1", q: "What is the usual first step of the data workflow?", options: ["Make a chart", "Clean the data", "Build a model", "Ask a question"], answer: 3, why: "Data work starts with a clear question, which guides every later step." },
            { objective: "O1", q: "At your store you want to know which hours are busiest. Whose kind of work is that?", options: ["Data scientist only", "Data analyst", "Nobody's; it cannot be answered", "Only a computer programmer"], answer: 1, why: "Describing what happened, such as busy hours, is typical analyst work." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Comparing the well-known data certificates",
          minutes: 6,
          goal: "Compare three widely known data certificates and pick the one that fits your goal.",
          text: [
            "Google Data Analytics Professional Certificate (on Coursera): a 9-course series for beginners, no experience needed. Its page lists spreadsheets, SQL, Tableau and presentations, and its FAQ says it teaches Python. It suggests about 6 months at 10 hours a week.",
            "IBM Data Science Professional Certificate (on Coursera): a 12-course series for beginners. Its page lists Python, SQL, Jupyter and libraries like Pandas, NumPy, Matplotlib and Scikit-learn, and covers data analysis, visualization and machine learning models. It suggests about 4 months at 10 hours a week.",
            "Microsoft Certified: Power BI Data Analyst Associate: an intermediate certification earned by passing Exam PL-300, a proctored exam. It tests preparing, modeling, visualizing and analyzing data in Power BI, and you renew it every 12 months for free on Microsoft Learn.",
            "Costs, times and course lists change, and some programs are included in subscriptions or offered free through libraries, workforce boards or financial aid. Open each official page and check before you enroll. No certificate guarantees a job."
          ],
          steps: ["Write your goal: analyst, data scientist, or using data in your current job.", "Open each certificate's official page.", "Write down its level, tools, length and current cost.", "Ask your local workforce center or library about free access.", "Choose one, and write why."],
          words: [["Professional certificate", "a series of online courses from a company or school that ends with a certificate."], ["Proctored exam", "a test watched by an official, in person or online, to prevent cheating."], ["Python", "a popular programming language used in data science."]],
          slides: [
            { title: "Google Data Analytics", bullets: ["9 courses on Coursera, beginner level", "Spreadsheets, SQL, Tableau; FAQ says Python too", "About 6 months at 10 hours a week (per its page)"] },
            { title: "IBM Data Science", bullets: ["12 courses on Coursera, beginner level", "Python, SQL, Jupyter, Pandas, Scikit-learn", "About 4 months at 10 hours a week (per its page)"] },
            { title: "Microsoft Power BI Data Analyst", bullets: ["Intermediate: pass Exam PL-300", "Prepare, model, visualize and analyze in Power BI", "Renew free every 12 months on Microsoft Learn"] },
            { title: "Before you enroll", bullets: ["Check the official page for cost and time", "Ask about free access: library, workforce center, aid", "No certificate guarantees a job"] }
          ],
          sources: [GOOGLE_DA, IBM_DS, MS_PL300],
          tryIt: "Make a three-row comparison table: certificate, level, main tools, time, cost today (from the official page). Circle the one that fits your goal and write one sentence saying why.",
          youCanNow: "compare the Google, IBM and Microsoft data certificates and choose one that fits your goal.",
          quickCheck: [
            { objective: "O2", q: "What does earning a data certificate guarantee?", options: ["Nothing; it shows what you learned", "A job offer", "A raise", "A college degree"], answer: 0, why: "A certificate shows skills; it does not guarantee a job." },
            { objective: "O2", q: "A friend says a certificate costs a certain amount a month. What do you do before enrolling?", options: ["Trust your friend", "Ask an AI for the price", "Check the cost on the program's official page today", "Enroll and find out later"], answer: 2, why: "Costs change, so you check the official page at the time you enroll." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Making a study plan you will keep",
          minutes: 5,
          goal: "Build a weekly study plan that fits around work and family.",
          text: [
            "Most people who do not finish a certificate stop because life gets busy, not because it was too hard. A plan written down, with set times, makes finishing much more likely.",
            "Start with your real week. If you work shifts, pick study blocks that fit: for example, three 45-minute blocks on weekdays and one 2-hour block on the weekend. Short, regular study beats one long weekend session.",
            "Each week, set one small goal you can check off: \"finish module 2 and its quiz\". Keep notes in your own words, and do every hands-on lab: the labs are where the skill is built. An AI assistant can explain a confusing idea in simpler words or quiz you, but do the graded work yourself and follow the program's honesty rules."
          ],
          steps: ["Write down your fixed hours: work, family, sleep.", "Pick 3-5 study blocks a week and put them in your calendar.", "Set one weekly goal you can check off.", "Ask a friend or AI assistant to quiz you on your notes.", "Review every Sunday and adjust."],
          words: [["Study block", "a set time in your calendar for learning."], ["Lab", "a hands-on exercise where you practice a skill on real data or code."]],
          slides: [
            { title: "Why plans matter", bullets: ["People stop when life gets busy", "A written plan with set times helps you finish"] },
            { title: "Fit it to your week", bullets: ["3-5 short blocks beat one long session", "Example: three 45-minute weekday blocks", "Plus one 2-hour weekend block"] },
            { title: "Each week", bullets: ["One small goal you can check off", "Do every hands-on lab", "AI can quiz you; do graded work yourself"] }
          ],
          tryIt: "Put four study blocks for next week into your phone or paper calendar. Write one weekly goal from the certificate you chose, for example \"finish the first module\".",
          youCanNow: "make a weekly study plan with set times and a goal you can check off.",
          quickCheck: [
            { objective: "O3", q: "Where is the real skill built in an online course?", options: ["Watching videos at double speed", "Reading the course ads", "Doing the hands-on labs", "Skipping to the final test"], answer: 2, why: "Practice in the labs builds the skill employers want to see." },
            { objective: "O3", q: "You work evening shifts. Which study plan do you write?", options: ["Set study blocks in your calendar that fit your shifts, with a weekly goal", "Study whenever you have a free day", "Study eight hours in one night each month", "Wait until your schedule changes"], answer: 0, why: "Regular blocks in your calendar with a goal are the plan most likely to work." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Choosing your certificate and planning to finish",
        questions: [
          { objective: "O1", q: "Which question is most like a data analyst's work?", options: ["How do I fix a car engine?", "Which product sold best last month?", "What should I cook tonight?", "Who will win the game?"], answer: 1, why: "Analysts explain what happened using existing data." },
          { objective: "O2", q: "Which certificate is earned by passing Exam PL-300?", options: ["Google Data Analytics Professional Certificate", "IBM Data Science Professional Certificate", "A high school diploma", "Microsoft Certified: Power BI Data Analyst Associate"], answer: 3, why: "Microsoft's Power BI Data Analyst Associate is earned by passing PL-300." },
          { objective: "O2", q: "Your goal is to build prediction models in Python. Which program's topics fit best?", options: ["IBM Data Science Professional Certificate", "A typing course", "A forklift license", "A food handler card"], answer: 0, why: "IBM's program covers Python, Scikit-learn and machine learning models." },
          { objective: "O2", q: "A program's cost was $49 a month last year. What do you do now?", options: ["Assume it is the same", "Ask a stranger online", "Check the official page today", "Skip checking"], answer: 2, why: "Costs change; the official page has the current one." },
          { objective: "O3", q: "Which study plan is most likely to work for a shift worker?", options: ["Study 10 hours once a month", "Study only when you feel like it", "Three 45-minute weekday blocks and one weekend block", "Skip the labs to save time"], answer: 2, why: "Short, regular blocks in your calendar are easier to keep." }
        ]
      }
    },
    {
      name: "Chapter 2: Practicing the core skills",
      lessons: [
        {
          objectives: ["O4"],
          title: "Cleaning a data set",
          minutes: 6,
          goal: "Find and fix blanks, duplicates and format problems in a small data set.",
          text: [
            "Real data is messy. Before you analyze, you clean it. Every certificate above spends time on this, because wrong data gives wrong answers.",
            "Common problems: blank cells, the same row twice (duplicates), the same thing written different ways (\"CA\", \"Calif.\", \"California\"), numbers stored as text, and dates in mixed formats.",
            "In Google Sheets or Excel you can sort and filter to find problems, use Remove duplicates, use Find and replace to make names match, and change a column's format to number or date. Keep a copy of the original and write down each change you made, so others can trust your work."
          ],
          steps: ["Save a copy of the original data.", "Sort and filter each column to spot blanks and odd values.", "Remove duplicate rows.", "Make spellings match with Find and replace.", "Set number and date formats.", "Write a short log of every change."],
          words: [["Data cleaning", "fixing errors in data before you analyze it."], ["Duplicate", "a row that appears more than once."], ["Cleaning log", "a list of every change you made to the data."]],
          slides: [
            { title: "Why clean first", bullets: ["Messy data gives wrong answers", "Every data certificate teaches this"] },
            { title: "Common problems", bullets: ["Blank cells and duplicate rows", "\"CA\", \"Calif.\", \"California\"", "Numbers as text; mixed date formats"] },
            { title: "How to fix them", bullets: ["Sort and filter to find problems", "Remove duplicates; Find and replace", "Set number and date formats"] },
            { title: "Be trustworthy", bullets: ["Keep the original copy", "Write a log of every change"] }
          ],
          tryIt: "Make a small table of 15 sales: Date, Item, Store, Amount. Put in 2 duplicate rows, one blank amount and two spellings of one store. Then clean it and write your cleaning log.",
          youCanNow: "find and fix common data problems and keep a cleaning log.",
          quickCheck: [
            { objective: "O4", q: "What is a duplicate in a data set?", options: ["A blank cell", "A row that appears more than once", "A chart", "A column title"], answer: 1, why: "Duplicates count the same thing twice and make totals wrong." },
            { objective: "O4", q: "You are about to clean a sales table. What do you do first?", options: ["Delete rows that look odd", "Make a chart", "Sort by date only", "Save a copy of the original"], answer: 3, why: "Saving the original lets you check or undo your cleaning." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Summarizing data and making one clear chart",
          minutes: 5,
          goal: "Answer a question with a summary table and one chart.",
          text: [
            "Start with one clear question, such as \"Which store sold the most last month?\" A good question decides which columns you need.",
            "A summary table groups and totals the data. In Sheets or Excel, a pivot table does this: put Store in rows and the sum of Amount in values. In Python, the Pandas library does the same with groupby. You can try Python free in Google Colab, which the IBM program's tools are similar to.",
            "Then pick the chart that fits: a bar chart to compare groups, a line chart for change over time, and avoid pie charts with many slices. Give it a title that states the answer, like \"Eastside sold the most in March\", and label the axes."
          ],
          steps: ["Write one question.", "Make a pivot table (or a Pandas groupby).", "Choose the chart: bar to compare, line for time.", "Write a title that states the answer.", "Label the axes."],
          words: [["Pivot table", "a spreadsheet tool that groups and totals data."], ["Pandas", "a Python library for working with tables of data."], ["Bar chart", "a chart that compares groups with bars of different lengths."]],
          slides: [
            { title: "Start with a question", bullets: ["\"Which store sold the most last month?\"", "The question picks your columns"] },
            { title: "Summarize", bullets: ["Spreadsheet: pivot table", "Python: Pandas groupby (try it in Google Colab)", "Rows: Store. Values: sum of Amount"] },
            { title: "Chart it clearly", bullets: ["Bar to compare, line for time", "Title states the answer", "Label the axes"] }
          ],
          sources: [COLAB],
          tryIt: "Use your cleaned table from Lesson 4. Make a pivot table of total Amount by Store, then a bar chart with a title that states the answer.",
          youCanNow: "turn a question into a summary table and a clear chart.",
          quickCheck: [
            { objective: "O5", q: "What does a pivot table do?", options: ["Draws a map", "Deletes duplicates", "Fixes spelling", "Groups and totals data"], answer: 3, why: "A pivot table groups rows, such as by store, and totals them." },
            { objective: "O5", q: "You want to compare total sales across 5 stores. Which chart do you make?", options: ["A line chart", "A bar chart with a title that states the answer", "A pie chart with 50 slices", "No chart"], answer: 1, why: "Bar charts compare categories, and a title that states the answer makes it clear." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Telling the story and building a portfolio project",
          minutes: 5,
          goal: "Write a short finding and package your work as a portfolio project.",
          text: [
            "Employers want to see that you can explain data, not just make charts. A good finding is three sentences: what you found, why it matters, and one limit of the data. Example: \"Eastside sold 40% of March sales. It may need more staff on Saturdays. The data covers only one month.\"",
            "Most of these certificates end with a capstone or portfolio project. You can start one now: a title, the question, where the data came from, your cleaning log, the chart and your finding. Use free public data, like a city open-data site, or your practice table. Never use private customer or company data without permission.",
            "An AI assistant can help you check your writing for clarity, but make sure every number in your finding comes from your own table."
          ],
          steps: ["Write your finding in three sentences: result, why it matters, one limit.", "Collect title, question, data source, cleaning log, chart.", "Check every number against your table.", "Save it in one place you can share, like a Google Drive folder or GitHub."],
          words: [["Capstone", "a final project at the end of a program."], ["Portfolio", "a collection of your work that you show employers."], ["Limitation", "something about the data that means the answer may not be complete."]],
          slides: [
            { title: "A three-sentence finding", bullets: ["What you found", "Why it matters", "One limit of the data"] },
            { title: "Your portfolio project", bullets: ["Title, question and data source", "Cleaning log, chart and finding", "Public or practice data only"] },
            { title: "Before you share", bullets: ["Check every number against your table", "AI can check clarity, not your facts", "Save it where you can share a link"] }
          ],
          tryIt: "Final task: finish your mini portfolio project. Question, cleaned data, cleaning log, summary table, one chart and a three-sentence finding with one limit. Save it with a title and short description.",
          youCanNow: "complete and explain a small data project of the kind data certificates ask for.",
          quickCheck: [
            { objective: "O6", q: "Why include one limit in your finding?", options: ["It shows honesty about what the data can and cannot say", "It makes the finding longer", "It is required by law", "It hides mistakes"], answer: 0, why: "Stating a limit, like covering only one month, builds trust in your work." },
            { objective: "O6", q: "You want to use your employer's customer list in your public portfolio. What do you do?", options: ["Post it as it is", "Remove only the names", "Use a public or sample data set instead, unless you have permission", "Post it and ask later"], answer: 2, why: "Private customer data does not go in a public portfolio without permission." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Practicing the core skills",
        questions: [
          { objective: "O4", q: "Your data has \"CA\", \"Calif.\" and \"California\". What do you do?", options: ["Make them match with Find and replace", "Leave it", "Delete the column", "Guess the totals"], answer: 0, why: "Matching spellings stops one place from being counted as three." },
          { objective: "O4", q: "Why keep a cleaning log?", options: ["It is not useful", "To make the file bigger", "Because charts need it", "So others can trust and repeat your changes"], answer: 3, why: "A log shows exactly what you changed." },
          { objective: "O5", q: "Which tool groups and totals data in a spreadsheet?", options: ["Spell check", "A pivot table", "Print preview", "Comments"], answer: 1, why: "Pivot tables group and summarize." },
          { objective: "O5", q: "You want to show sales changing over 12 months. Which chart?", options: ["Line chart", "Pie chart", "No chart", "A photo"], answer: 0, why: "Line charts show change over time." },
          { objective: "O6", q: "Which is a good three-sentence finding?", options: ["\"Here is a chart.\"", "\"Data is interesting.\"", "\"Eastside sold the most in March. It may need more Saturday staff. Data covers one month.\"", "\"I used Excel.\""], answer: 2, why: "It gives the result, why it matters and a limit." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Data Science Professional Certificate Preparation",
    questions: [
      { objective: "O1", q: "What is the usual first step of the data workflow?", options: ["Make a chart", "Ask a question", "Buy software", "Share results"], answer: 1, why: "A clear question guides everything that follows." },
      { objective: "O1", q: "A data scientist, more than an analyst, usually:", options: ["Only uses paper", "Only types data", "Never uses data", "Builds models that predict"], answer: 3, why: "Data scientists build predictive models, often in Python." },
      { objective: "O1", q: "What is SQL used for?", options: ["Drawing pictures", "Editing video", "Sending email", "Getting data out of databases"], answer: 3, why: "SQL is a language for asking questions of databases." },
      { objective: "O2", q: "The Google Data Analytics Professional Certificate is offered on:", options: ["Microsoft Learn only", "Coursera", "The DMV", "A phone app store"], answer: 1, why: "Its official page is on Coursera." },
      { objective: "O2", q: "According to its page, how many courses are in the IBM Data Science Professional Certificate?", options: ["3", "9", "12", "20"], answer: 2, why: "IBM's Coursera page lists a 12-course series." },
      { objective: "O2", q: "Which tool is the Microsoft certification centered on?", options: ["Power BI", "Photoshop", "Word", "Tableau"], answer: 0, why: "It is the Power BI Data Analyst Associate." },
      { objective: "O2", q: "What does earning a data certificate guarantee?", options: ["A job", "A pay raise", "Nothing; it shows what you learned", "A college degree"], answer: 2, why: "Certificates show learning; they do not guarantee outcomes." },
      { objective: "O2", q: "Before enrolling you should check the cost on:", options: ["The program's official page", "A social media ad", "Last year's notes", "An AI's memory"], answer: 0, why: "The official page has the current cost and content." },
      { objective: "O3", q: "Which plan is best for finishing a certificate?", options: ["Study whenever there is time", "Set study blocks in your calendar with a weekly goal", "Skip labs", "Study once a month for a day"], answer: 1, why: "Regular, scheduled blocks with goals help you finish." },
      { objective: "O3", q: "Using an AI assistant during a certificate, you should:", options: ["Have it do graded work", "Avoid it completely, always", "Paste in your exam", "Use it to explain ideas and quiz you, and follow the honesty rules"], answer: 3, why: "AI can help you learn, but graded work must be your own." },
      { objective: "O3", q: "Where is the real skill built in an online course?", options: ["Doing the hands-on labs", "Watching videos only", "Reading the title", "Skipping quizzes"], answer: 0, why: "Labs are hands-on practice." },
      { objective: "O4", q: "What is a duplicate in a data set?", options: ["A blank cell", "A column name", "A chart", "A row that appears more than once"], answer: 3, why: "Duplicates are repeated rows." },
      { objective: "O4", q: "Before cleaning, you should:", options: ["Delete the original", "Make a chart", "Save a copy of the original", "Email it to everyone"], answer: 2, why: "A copy lets you start over or check your work." },
      { objective: "O4", q: "Numbers stored as text can cause:", options: ["Faster work", "Wrong totals", "Better charts", "Nothing"], answer: 1, why: "Text numbers may not add up correctly." },
      { objective: "O4", q: "In Python, which library works with tables like a spreadsheet?", options: ["Outlook", "Paint", "Zoom", "Pandas"], answer: 3, why: "Pandas is for working with tables of data." },
      { objective: "O5", q: "Which free tool lets you run Python in a web browser?", options: ["A calculator", "Notepad", "Google Colab", "Paint"], answer: 2, why: "Google Colab runs Python notebooks online." },
      { objective: "O5", q: "To compare sales across 5 stores, the best chart is usually:", options: ["A bar chart", "A pie with 20 slices", "A map", "No chart"], answer: 0, why: "Bar charts compare groups clearly." },
      { objective: "O5", q: "A good chart title:", options: ["\"Chart 1\"", "States the answer, like \"Eastside sold the most in March\"", "Is left blank", "Is very long"], answer: 1, why: "A title that states the answer helps readers." },
      { objective: "O6", q: "Which data should you NOT use in a public portfolio?", options: ["City open data", "Private customer data without permission", "Your practice table", "Free public data sets"], answer: 1, why: "Private data needs permission and should not be shared." },
      { objective: "O6", q: "Your finding should include one limit because:", options: ["It shows honesty about what the data can and cannot say", "It makes it longer", "Employers dislike it", "It is required by law"], answer: 0, why: "Stating a limit shows careful, trustworthy analysis." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      6,
      8,
      10,
      11,
      12,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Clear question",
        objective: "O1",
        notYet: "No question, or one the data cannot answer.",
        meets: "One clear question the data set can answer.",
        exceeds: "The question matters to a real workplace and says why."
      },
      {
        name: "Cleaned data and log",
        objective: "O4",
        notYet: "Blanks, duplicates or format problems remain, or no log.",
        meets: "Blanks, duplicates and formats fixed, with a cleaning log and the original saved.",
        exceeds: "The log says how many rows each fix changed."
      },
      {
        name: "Summary and chart",
        objective: "O5",
        notYet: "No summary table, or a chart that does not answer the question.",
        meets: "A summary table and one chart of the right type with a title that states the answer.",
        exceeds: "Axes are labeled and the chart is easy to read at a glance."
      },
      {
        name: "Finding and limit",
        objective: "O6",
        notYet: "No finding, or no limit stated.",
        meets: "A three-sentence finding with one limit of the data.",
        exceeds: "The finding suggests a practical next step."
      },
      {
        name: "Portfolio-ready",
        objective: "O6",
        notYet: "Not saved, or contains private data.",
        meets: "Saved in Google Sheets, Excel or Google Colab with a short title and description, and no private data.",
        exceeds: "Shared as a link the learner can add to a résumé or profile."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who enroll in a data certificate within 30 days (follow-up survey)",
      "Learners who complete a data certificate within 6 months",
      "Learners who use their portfolio project in a job application or get a data-related role"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet",
      "A free spreadsheet (Google Sheets or Microsoft Excel online), and optionally Google Colab",
      "A free public data set, or the sample sales table from Lesson 4",
      "A phone or paper calendar for the study plan",
      "About 60 minutes for lessons and checks, plus hands-on time for the project"
    ],
    facilitatorNotes: [
      "Prepare the sample sales table with planted problems so every learner can practice cleaning the same data.",
      "Have learners check certificate costs on the official pages live in class rather than using old numbers.",
      "Demonstrate one pivot table and one chart step by step before learners build their own.",
      "Remind learners to use only public or sample data in portfolios.",
      "Score the portfolio project with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
