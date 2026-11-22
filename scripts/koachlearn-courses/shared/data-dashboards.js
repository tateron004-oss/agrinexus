"use strict";

// Koach Learn course: wave 1 (30 October 2026) -> "Building Data Dashboards (Power BI and Data Studio)". Prepares learners for dashboard work and for the
// visualization parts of Microsoft's PL-300 exam (Power BI Data Analyst Associate) and CompTIA Data+ (DA0-002). Free tools only: Google Sheets,
// Power BI Desktop (free, Windows) and Looker Studio, which Google now calls Data Studio. ADDIE parts as in re-entry/reentry-ai-digital-confidence.js.

const PL300 = { name: "Microsoft Learn: Power BI Data Analyst Associate (exam PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const DATAPLUS = { name: "CompTIA Data+ (exam DA0-002)", url: "https://www.comptia.org/certifications/data" };
const PBI_DESKTOP = { name: "Microsoft: Power BI Desktop (free download)", url: "https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop" };
const DATA_STUDIO = { name: "Google Cloud: Data Studio (formerly Looker Studio) help", url: "https://docs.cloud.google.com/looker/docs/studio" };
const DS_SHEETS = { name: "Google Cloud: Connect Data Studio to Google Sheets", url: "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-sheets" };

module.exports = {
  id: "data-dashboards",
  category: "Workforce Development",
  name: "Building Data Dashboards (Power BI and Data Studio)",
  skills: "Planning a dashboard and its key numbers, Cleaning data into a tidy table, Choosing the right chart, Building a one-page dashboard with filters, Checking and sharing a dashboard safely",
  outcome: "plan, build, check and share a one-page dashboard in Power BI Desktop or Looker Studio (Data Studio) that answers one clear business question with 3 to 5 key numbers, the right charts and simple filters.",
  about: [
    "Businesses, nonprofits, hospitals and the military all use dashboards: one screen that shows the numbers people need to make a decision. Building them is a core skill for data analyst, reporting and operations jobs. This course is for job seekers, veterans, small business owners and anyone who has used a spreadsheet and wants the next step.",
    "You will plan a dashboard, clean a small practice data set in Google Sheets, load it into a free tool, pick the right charts, add key number cards and filters, check every number and share it safely. You can use Power BI Desktop (a free Windows program from Microsoft) or Looker Studio, which Google now calls Data Studio (free in any web browser).",
    "This course prepares you for dashboard work and for the reporting parts of two real exams: Microsoft's PL-300 (Power BI Data Analyst Associate) and CompTIA Data+ (DA0-002). It does not give you either certificate. Check the official pages in the sources for what each exam covers, how to schedule it and what it costs today.",
    "Each lesson takes about five minutes, then a \"Try it now\" task. A 2-question quick check follows each lesson, a knowledge check closes each chapter, and a 20-question quiz ends the course. All practice data is made up."
  ],
  finalTask: "Build a one-page dashboard for your own path: use the practice bakery sales data from this course or a small made-up data set from a job you want (for example warehouse orders or clinic visits). Write the dashboard question and 3 to 5 key numbers, clean the data into a tidy table, build at least 3 key number cards and 2 charts that fit the question, add a date filter and one other filter, check 3 totals against the source data, then share or export it with a 3-sentence summary of what it shows. Save it as a portfolio piece you can show in a job interview.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mixed adults: job seekers aiming at data, reporting or operations roles, veterans moving to civilian jobs, small business owners, young adults, and people coming home from prison who are rebuilding work skills. Many have used a spreadsheet; few have built a dashboard.",
    startingPoint: "Can enter data in a spreadsheet, add a total with SUM and make a simple chart (or have taken \"Excel and Spreadsheets for Work\"). Have not used Power BI or Looker Studio. Some are unsure which chart to use or why numbers on a report can be wrong.",
    gap: "Employers want people who can turn raw data into one clear page that answers a business question and can be trusted. Learners need to plan, clean, build, check and share a dashboard, and to show one in an interview. This is also the reporting skill tested on PL-300 and CompTIA Data+.",
    constraints: [
      "Reading level: plain words and short sentences; every data word explained",
      "Devices: Power BI Desktop needs a Windows computer; on a Mac, Chromebook or library computer, use Data Studio in a browser",
      "Free tools only: Google Sheets, Power BI Desktop, Data Studio (Looker Studio)",
      "Time: 5 to 6 minute lessons that fit around work and job searching",
      "Privacy: practice data is made up; never load real customer, patient or employee data for practice"
    ],
    prerequisites: "Basic spreadsheet use: enter data, SUM, sort and a simple chart. If that is new, take \"Excel and Spreadsheets for Work\" first."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a business need such as \"Which products sell best?\"", action: "write a one-sentence dashboard question, name the audience and choose 3 to 5 key numbers (KPIs)", standard: "with each key number's name, how it is calculated and its time period" },
    { id: "O2", condition: "Given a messy practice sales sheet", action: "clean the data into a tidy table with one row per record and one column per field", standard: "with no blank headers, no duplicate rows and one format for each column" },
    { id: "O3", condition: "Given a question about a trend, a comparison or a share of a total", action: "choose and build the chart type that fits the question in Power BI Desktop or Data Studio", standard: "getting at least 4 of 5 chart choices right" },
    { id: "O4", condition: "Using your cleaned data in Power BI Desktop or Data Studio", action: "build a one-page dashboard with key number cards, at least 2 charts, a date filter and one other filter", standard: "so a viewer can answer the dashboard question in under one minute" },
    { id: "O5", condition: "Given a finished dashboard and its source data", action: "check at least 3 totals on the dashboard against the source data and fix any that do not match", standard: "before anyone else sees it" },
    { id: "O6", condition: "When your dashboard is ready", action: "share or export the dashboard with view-only access and write a 3-sentence summary of what it shows", standard: "without sharing any private data" }
  ],
  chapters: [
    {
      name: "Chapter 1: Planning the dashboard and getting the data ready",
      lessons: [
        {
          title: "Starting with the question and the key numbers",
          objectives: ["O1"],
          minutes: 5,
          goal: "Write a dashboard question, name its audience and choose 3 to 5 key numbers.",
          text: [
            "A dashboard is one screen of numbers and charts that helps someone make a decision. A good one starts with a question, not with a chart. Ask: who will look at this, and what do they need to decide?",
            "Example: the owner of a small bakery asks, \"Which products and which days bring in the most money each month?\" The audience is the owner. The decision is what to bake more of and when to schedule staff.",
            "Next, pick 3 to 5 key numbers, called KPIs. For the bakery: total sales in dollars, number of items sold, average sale per order, and the best-selling product. Write how each is calculated and for what time period, for example \"Total sales = sum of the Total column, this month\".",
            "Too many numbers hide the important ones. If a number does not help answer the question, leave it off."
          ],
          steps: ["Name the audience: who will use the dashboard?", "Write the question in one sentence.", "Name the decision it helps them make.", "Choose 3 to 5 key numbers that answer it.", "For each, write its name, how it is calculated and its time period."],
          words: [["Dashboard", "one screen of key numbers and charts that helps someone make a decision."], ["KPI (key performance indicator)", "one of the few numbers that shows whether things are going well, like total sales this month."], ["Audience", "the people who will look at the dashboard."], ["Metric", "any number you measure, like items sold or average sale."]],
          slides: [
            { title: "Start with the question, not the chart", bullets: ["Who will look at it?", "What do they need to decide?", "Write the question in one sentence"] },
            { title: "Example: a small bakery", bullets: ["Question: which products and days bring in the most money?", "Audience: the owner", "Decision: what to bake and when to staff"] },
            { title: "Pick 3 to 5 key numbers (KPIs)", bullets: ["Total sales, items sold, average sale, best seller", "Write how each is calculated", "Write the time period: this month, this week"] },
            { title: "Less is more", bullets: ["Too many numbers hide the important ones", "If it does not answer the question, leave it off"] }
          ],
          tryIt: "Pick a job you want (for example warehouse, clinic front desk, store manager or the bakery example). On paper, write the audience, the one-sentence question, the decision, and 3 to 5 key numbers with how each is calculated and the time period. Keep this page: it is the plan for your final dashboard.",
          youCanNow: "write a dashboard question for a real audience and choose 3 to 5 key numbers that answer it.",
          quickCheck: [
            { objective: "O1", q: "What should you do FIRST when you build a dashboard?", options: ["Write the question and who it is for", "Pick colors for the charts", "Add every chart the tool offers", "Choose a font"], answer: 0, why: "The question and audience decide which numbers and charts belong on the page." },
            { objective: "O1", q: "Which is the best key number for \"Which products bring in the most money each month?\"", options: ["The number of employees", "The bakery's street address", "Total sales in dollars by product, this month", "The weather each day"], answer: 2, why: "Sales by product for the month directly answers the question." }
          ],
          sources: [PL300, DATAPLUS]
        },
        {
          title: "Cleaning data into a tidy table",
          objectives: ["O2"],
          minutes: 6,
          goal: "Clean a messy sheet into a tidy table with one row per record and one column per field.",
          text: [
            "Dashboard tools work best with a tidy table: one header row, one row for each record (each sale, each order) and one column for each field (Date, Product, Units). No merged cells, no blank rows, no totals typed inside the data.",
            "Messy data gives wrong numbers. Common problems: the same sale typed twice (a duplicate), blank cells, dates written different ways (10/3/26 and Oct 3), numbers stored as text (\"$4.50\" typed with a space), and spelling differences (\"Muffin\" and \"muffins\").",
            "In Google Sheets you can fix most of this: Data > Data cleanup > Remove duplicates, Format > Number to set dates and currency, and Edit > Find and replace to fix spellings. Keep the original sheet and clean a copy, so you can always go back.",
            "Practice data for this course (made up): columns Date, Product, Category, Units, Price, Total. For example 10/1/2026, Muffin, Pastry, 12, 2.50, 30.00."
          ],
          steps: ["Make a copy of the sheet and work on the copy.", "Make sure there is exactly one header row with a clear name in every column.", "Remove blank rows, merged cells and any total rows inside the data.", "Remove duplicate rows.", "Give each column one format: dates as dates, money as currency, text spelled the same way.", "Check one row by hand: Units times Price should equal Total."],
          words: [["Tidy table", "data with one header row, one row per record and one column per field."], ["Record", "one row of data, like one sale."], ["Field", "one column of data, like Date or Product."], ["Duplicate", "the same record typed twice."], ["Data type", "what kind of value a column holds: number, date, currency or text."]],
          slides: [
            { title: "A tidy table", bullets: ["One header row", "One row per record, one column per field", "No merged cells, blank rows or typed totals"] },
            { title: "Common messes", bullets: ["Duplicate rows", "Dates written different ways", "Numbers stored as text", "Different spellings of the same thing"] },
            { title: "Fixes in Google Sheets", bullets: ["Data > Data cleanup > Remove duplicates", "Format > Number for dates and currency", "Edit > Find and replace for spellings"] },
            { title: "Work safely", bullets: ["Clean a copy, keep the original", "Check one row by hand: Units x Price = Total"] }
          ],
          tryIt: "In Google Sheets, type 15 rows of made-up bakery sales (Date, Product, Category, Units, Price, Total) over two weeks. On purpose, add 1 duplicate row, 1 blank row, 1 date written as text (Oct 5) and 1 spelling difference (\"muffins\"). Then make a copy and clean it with the steps. Count how many problems you fixed.",
          youCanNow: "spot and fix duplicates, blanks, mixed formats and spelling differences to make a tidy table.",
          quickCheck: [
            { objective: "O2", q: "Your sheet shows \"Muffin\" and \"muffins\" as two products. What do you do?", options: ["Leave it; the tool will guess", "Delete all muffin rows", "Add a third spelling", "Use Find and replace so every row says \"Muffin\""], answer: 3, why: "One spelling per item means the tool adds them together correctly." },
            { objective: "O2", q: "Which describes a tidy table?", options: ["Merged title cells over the data", "One header row, one row per record, one column per field", "A total row in the middle of the data", "Two header rows with blank cells"], answer: 1, why: "Dashboard tools read tidy tables correctly; merged cells and typed totals confuse them." }
          ],
          sources: [{ name: "Google Docs Editors Help: Split text, remove duplicates, or trim whitespace", url: "https://support.google.com/docs/answer/6325535" }]
        },
        {
          title: "Loading data into Power BI Desktop or Data Studio",
          objectives: ["O2"],
          minutes: 6,
          goal: "Load a tidy table into Power BI Desktop or Data Studio and check each column's data type.",
          text: [
            "Choose your tool. Power BI Desktop is free from Microsoft and runs on a Windows computer. Looker Studio, which Google now calls Data Studio, is free and runs in a web browser, so it works on a Mac, a Chromebook or a library computer. Both are used in real jobs; the skills move from one to the other.",
            "Power BI Desktop: download it only from Microsoft's official site. Save your clean sheet as an Excel or CSV file. Choose Get data, pick the file, and look at the preview. Choose Transform data if a column needs fixing; this opens the Power Query Editor, where you can set a column's data type.",
            "Data Studio: sign in with a Google account, choose Create, then Data source, choose the Google Sheets connector, pick your spreadsheet and worksheet, and choose Connect. You will see your fields listed with their types.",
            "In both tools, check every column: Date should be a date, Units and Total should be numbers, Product should be text. A number stored as text cannot be added up. Fields you count or add (Units, Total) are often called measures or metrics; fields you group by (Product, Date) are called dimensions."
          ],
          steps: ["Pick Power BI Desktop (Windows) or Data Studio (any browser).", "Power BI: Get data, pick your Excel or CSV file, look at the preview, choose Load or Transform data.", "Data Studio: Create, Data source, Google Sheets connector, pick the sheet, Connect.", "Check each column's type: dates, numbers, text.", "Fix any wrong type before you build charts."],
          words: [["Power BI Desktop", "a free Microsoft program for Windows that builds reports and dashboards."], ["Data Studio (Looker Studio)", "Google's free browser tool for reports and dashboards; Google renamed Looker Studio to Data Studio."], ["Data source", "the file or sheet a dashboard reads its data from."], ["Power Query Editor", "the part of Power BI where you clean and shape data before building visuals."], ["Dimension", "a field you group by, like Product or Date."], ["Measure (metric)", "a number you add, count or average, like Total sales."], ["CSV file", "a plain text file of data with values separated by commas."]],
          slides: [
            { title: "Two free tools", bullets: ["Power BI Desktop: free, Windows", "Data Studio (was Looker Studio): free, any web browser", "Skills move from one to the other"] },
            { title: "Power BI Desktop", bullets: ["Get data, pick your Excel or CSV file", "Check the preview", "Transform data opens the Power Query Editor"] },
            { title: "Data Studio", bullets: ["Create, then Data source", "Google Sheets connector, pick the sheet", "Connect, then check the field list"] },
            { title: "Check every data type", bullets: ["Dates as dates, numbers as numbers", "Measures: things you add, like Total", "Dimensions: things you group by, like Product"] }
          ],
          tryIt: "Load your cleaned bakery sheet into Power BI Desktop or Data Studio. Write down each column and its data type. If any number shows as text, fix it in the tool or in the sheet, then reload. Then name which fields are dimensions and which are measures.",
          youCanNow: "load a tidy table into Power BI Desktop or Data Studio and make sure every column has the right data type.",
          quickCheck: [
            { objective: "O2", q: "Your Total column loaded as text. What happens if you leave it?", options: ["The tool cannot add the totals up correctly", "Nothing; text and numbers work the same", "The dashboard gets more colors", "The file gets smaller"], answer: 0, why: "Only number columns can be summed or averaged." },
            { objective: "O2", q: "You only have a Chromebook. Which tool can you use for this course?", options: ["Power BI Desktop", "No tool will work", "Data Studio in the web browser", "Only paper"], answer: 2, why: "Data Studio runs in a browser; Power BI Desktop needs Windows." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO, DS_SHEETS]
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning the dashboard and getting the data ready",
        questions: [
          { objective: "O1", q: "A store manager wants to know which day of the week needs more staff. Which key number helps most?", options: ["The store's phone number", "Number of products in the catalog", "Number of customers by day of the week", "The manager's start date"], answer: 2, why: "Customers by day directly shows which days are busiest." },
          { objective: "O1", q: "How many key numbers should a one-page dashboard usually show?", options: ["3 to 5", "Only 1", "As many as possible", "At least 20"], answer: 0, why: "A few key numbers keep the important ones easy to see." },
          { objective: "O2", q: "Which problem would make a sales total too high?", options: ["A clear header row", "Dates formatted as dates", "One spelling for each product", "The same sale typed twice"], answer: 3, why: "A duplicate row counts the same sale two times." },
          { objective: "O2", q: "Before cleaning a sheet, what should you do?", options: ["Delete the header row", "Make a copy and clean the copy", "Merge all the cells", "Type totals into the data"], answer: 1, why: "Keeping the original lets you go back if a fix goes wrong." },
          { objective: "O2", q: "Product and Date are fields you group by. What are they called?", options: ["Measures", "Passwords", "Dimensions", "Filters"], answer: 2, why: "Dimensions are fields you group or slice by; measures are numbers you add or average." }
        ]
      }
    },
    {
      name: "Chapter 2: Building, checking and sharing",
      lessons: [
        {
          title: "Choosing the right chart",
          objectives: ["O3"],
          minutes: 6,
          goal: "Choose and build the chart that fits each kind of question.",
          text: [
            "Match the chart to the question. A change over time (sales by day or month) is a line chart. A comparison between groups (sales by product) is a bar or column chart, sorted from biggest to smallest. Parts of a whole (share of sales by category) can be a pie or donut chart, but only with a few slices; a bar chart is often clearer.",
            "One key number on its own is a card in Power BI or a scorecard in Data Studio. Exact values people need to look up go in a table. A map only helps when location matters.",
            "To build: in Power BI Desktop, click a visual in the Visualizations pane, then drag a dimension (Product) and a measure (Total) into its fields. In Data Studio, choose Add a chart, pick the type, then set the dimension and the metric.",
            "Keep charts honest: bar charts start at zero, every chart has a clear title that says what it shows (\"Sales by product, October\"), and you use one color unless color means something."
          ],
          steps: ["Read the question: is it about time, comparing groups, parts of a whole, or one number?", "Time: line chart. Compare: bar chart, sorted. Parts: pie with few slices, or a bar. One number: card or scorecard.", "Add the chart and set the dimension and the measure.", "Give it a title that says what it shows and the time period.", "Check that bars start at zero."],
          words: [["Line chart", "a chart that shows how a number changes over time."], ["Bar chart", "a chart of bars that compares groups; column charts are bar charts standing up."], ["Pie chart", "a circle cut into slices that shows parts of a whole."], ["Card / scorecard", "a box that shows one big number, such as total sales."], ["Visual", "Power BI's word for a chart, card, table or map."]],
          slides: [
            { title: "Match the chart to the question", bullets: ["Over time: line chart", "Compare groups: bar chart, sorted", "Parts of a whole: few slices, or a bar", "One number: card or scorecard"] },
            { title: "Build it", bullets: ["Power BI: pick a visual, drag in fields", "Data Studio: Add a chart, set dimension and metric"] },
            { title: "Keep it honest", bullets: ["Bars start at zero", "Title says what it shows and when", "One color unless color means something"] }
          ],
          tryIt: "Using your bakery data, build three charts: (1) total sales by date as a line chart, (2) total sales by product as a bar chart sorted biggest first, (3) total sales as one card or scorecard. Give each a clear title. Then write one sentence each chart tells you.",
          youCanNow: "choose a line, bar, pie, card or table to fit a question and build it with a clear title.",
          quickCheck: [
            { objective: "O3", q: "Which chart best shows how sales changed each day this month?", options: ["A pie chart", "A map", "A single card", "A line chart"], answer: 3, why: "Line charts show change over time." },
            { objective: "O3", q: "You want to compare sales across 8 products. Which is clearest?", options: ["A pie chart with 8 slices", "A bar chart sorted from biggest to smallest", "A map", "A table of dates"], answer: 1, why: "A sorted bar chart makes comparisons easy; 8 pie slices are hard to read." }
          ],
          sources: [DATAPLUS, PL300]
        },
        {
          title: "Laying out the dashboard with cards and filters",
          objectives: ["O4"],
          minutes: 6,
          goal: "Build a one-page dashboard with key number cards, charts, a date filter and one other filter.",
          text: [
            "People read a screen from the top left. Put the key number cards in a row across the top, the most important chart under them, and details lower down. Add a title for the whole page and the date range it covers.",
            "Filters let viewers change what they see. In Power BI they are called slicers: add a Slicer visual and put Date in it, then add another for Category. In Data Studio they are called controls: choose Add a control, pick Date range control, then add a Drop-down list control for Category.",
            "Test the filters: pick one category and make sure every card and chart changes. If one does not, it is not connected to the same data.",
            "Leave white space, line things up, and remove anything that does not help answer the question. Then do the one-minute test: show the page to a friend and ask the dashboard question. Can they answer it in under a minute?"
          ],
          steps: ["Add a page title and the date range.", "Put 3 to 5 key number cards in a row across the top.", "Put the main chart under the cards and other charts below.", "Add a date filter (slicer or date range control).", "Add one more filter, such as Category.", "Test: change each filter and watch every card and chart change.", "Do the one-minute test with another person."],
          words: [["Layout", "where each card and chart sits on the page."], ["Filter", "a control that lets the viewer show only some of the data, like one month."], ["Slicer", "Power BI's name for a filter on the page."], ["Control", "Data Studio's name for a filter on the page, like a date range control."]],
          slides: [
            { title: "Layout", bullets: ["Key number cards across the top", "Main chart under them, details lower", "Page title with the date range"] },
            { title: "Filters", bullets: ["Power BI: Slicer visual for Date and Category", "Data Studio: Date range control and Drop-down list"] },
            { title: "Test it", bullets: ["Change a filter: does everything update?", "Remove anything that does not help", "One-minute test with a friend"] }
          ],
          tryIt: "Put your three charts from Lesson 4 on one page. Add at least one more key number card (for example items sold or average sale), a date filter and a Category filter. Line everything up. Then ask someone your dashboard question and time how long they take to answer from the page.",
          youCanNow: "lay out a one-page dashboard with key number cards, charts and working filters that someone can read in under a minute.",
          quickCheck: [
            { objective: "O4", q: "Where should the key number cards usually go?", options: ["In a row across the top", "Hidden on a second page", "At the very bottom", "Inside the pie chart"], answer: 0, why: "People read from the top left, so key numbers go first." },
            { objective: "O4", q: "You pick one category in the filter, but one chart does not change. What does that mean?", options: ["The dashboard is finished", "That chart is not connected to the same data or filter", "Filters never change charts", "You need a bigger screen"], answer: 1, why: "Every card and chart should respond; one that does not needs to be fixed." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO]
        },
        {
          title: "Checking the numbers and sharing safely",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Check 3 dashboard totals against the source data, then share it view-only with a short summary.",
          text: [
            "A dashboard is only useful if it can be trusted. Before anyone sees it, check at least 3 numbers. Example: the card says total sales were $1,240. In your sheet, use SUM on the Total column for the same dates. Do they match? Then check one product and one day the same way.",
            "If a number does not match, look for the usual causes: a filter is still set, duplicates came back, a column is text instead of a number, the date range is different, or the card uses Count instead of Sum.",
            "Share safely. In Data Studio, use the Share button and give people view access, not edit access. With Power BI Desktop, export the page to PDF or save the file and send it only to the right person; publishing online may need a work or school account. Never put real customer, patient or employee details in a practice dashboard.",
            "Add a 3-sentence summary: what the dashboard shows, the most important finding, and one suggested action. Example: \"This shows bakery sales for October. Muffins earned the most, and Saturdays were the busiest day. We could bake more muffins and add one staff member on Saturdays.\""
          ],
          steps: ["Clear all filters.", "Check 3 numbers against the source sheet: the total, one product and one day.", "If one is wrong, check filters, duplicates, data types, dates, and Sum vs Count.", "Share with view-only access, or export to PDF.", "Write a 3-sentence summary: what it shows, the main finding, one action."],
          words: [["Validate", "check that a number is right by comparing it with the source."], ["View-only access", "people can look at the dashboard but cannot change it."], ["Export", "save a copy in another format, such as PDF."], ["Insight", "a useful finding that helps someone decide what to do."]],
          slides: [
            { title: "Check before you share", bullets: ["Clear the filters", "Check 3 numbers against the source sheet", "Total, one product, one day"] },
            { title: "If a number is wrong", bullets: ["A filter is still set", "Duplicates or text numbers", "Different dates, or Count instead of Sum"] },
            { title: "Share safely", bullets: ["View-only access, not edit", "Or export to PDF", "No real private data in practice work"] },
            { title: "Write a 3-sentence summary", bullets: ["What it shows", "The main finding", "One suggested action"] }
          ],
          tryIt: "Finish your final task: check 3 numbers on your dashboard against your sheet and write down each pair. Fix any mismatch. Then share it view-only (Data Studio) or export a PDF (Power BI), and write your 3-sentence summary. Score yourself with the rubric before you call it done.",
          youCanNow: "check a dashboard's numbers against its source, share it safely, and explain what it shows in three sentences.",
          quickCheck: [
            { objective: "O5", q: "Your card says 340 items sold, but SUM of Units in the sheet says 310. What should you check first?", options: ["The chart colors", "The page title font", "Whether a filter is set or duplicates came back", "The screen brightness"], answer: 2, why: "Filters and duplicates are common causes of totals that do not match." },
            { objective: "O6", q: "Your manager only needs to look at the dashboard. What access do you give?", options: ["Your password", "Edit access", "Owner access", "View-only access"], answer: 3, why: "View-only lets them see it without changing it by accident." }
          ],
          sources: [DATA_STUDIO, DATAPLUS]
        }
      ],
      check: {
        title: "Knowledge Check 2: Building, checking and sharing",
        questions: [
          { objective: "O3", q: "Which chart shows ONE big number, such as total sales this month?", options: ["A line chart", "A card or scorecard", "A map", "A table of 100 rows"], answer: 1, why: "A card (Power BI) or scorecard (Data Studio) shows one key number." },
          { objective: "O3", q: "A bar chart's bars start at 900 instead of 0. What is the problem?", options: ["Small differences look much bigger than they are", "Nothing; it looks better", "The colors are wrong", "The title is too long"], answer: 0, why: "Bars that do not start at zero exaggerate differences." },
          { objective: "O4", q: "In Power BI, what is a filter on the page called?", options: ["A card", "A source", "A metric", "A slicer"], answer: 3, why: "Power BI calls page filters slicers; Data Studio calls them controls." },
          { objective: "O5", q: "How many numbers should you check against the source before sharing?", options: ["None; the tool is always right", "Only the page title", "At least 3, such as the total, one product and one day", "Only numbers your manager asks about"], answer: 2, why: "Checking several numbers catches filter, duplicate and type errors." },
          { objective: "O6", q: "Which is the best summary sentence to share with a dashboard?", options: ["\"Here are some charts.\"", "\"Muffins earned the most in October, so we could bake more on Saturdays.\"", "\"I used a lot of colors.\"", "\"Look at it yourself.\""], answer: 1, why: "A good summary states the finding and a suggested action." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Building Data Dashboards (Power BI and Data Studio)",
    questions: [
      { objective: "O1", q: "What is a dashboard?", options: ["A list of passwords", "One screen of key numbers and charts that helps someone decide", "A type of spreadsheet formula", "A printer setting"], answer: 1, why: "A dashboard puts the key numbers for a decision on one screen." },
      { objective: "O1", q: "Which is a clear dashboard question?", options: ["\"Show me data.\"", "\"Make it look nice.\"", "\"Everything about the business.\"", "\"Which products bring in the most money each month?\""], answer: 3, why: "It is one specific question a dashboard can answer." },
      { objective: "O1", q: "For each key number you write its name, how it is calculated and:", options: ["Its time period", "Its favorite color", "The tool's price", "Your password"], answer: 0, why: "A key number needs a time period, such as this month, to mean anything." },
      { objective: "O2", q: "In a tidy table, each row is:", options: ["A chart", "A total", "One record, like one sale", "A title"], answer: 2, why: "One row per record and one column per field is a tidy table." },
      { objective: "O2", q: "Dates in your sheet are written as \"10/3/26\" and \"Oct 3\". What do you do?", options: ["Leave both", "Delete the date column", "Add a third style", "Format the column so every date is a real date in one style"], answer: 3, why: "One date format lets the tool group and filter by date correctly." },
      { objective: "O2", q: "Where do you get Power BI Desktop?", options: ["Microsoft's official website", "A link in a text from a stranger", "Any free download site", "A pop-up ad"], answer: 0, why: "Download software only from the company's official site." },
      { objective: "O2", q: "In Data Studio, how do you connect a Google Sheet?", options: ["Email the sheet to Google", "Create a data source with the Google Sheets connector", "Print it and scan it", "Type every number again"], answer: 1, why: "The Google Sheets connector links the sheet as a data source." },
      { objective: "O3", q: "Which question fits a line chart?", options: ["What share of sales is bread?", "What is our phone number?", "How did weekly sales change over 3 months?", "Which store is in which city?"], answer: 2, why: "Line charts show change over time." },
      { objective: "O3", q: "Which question fits a sorted bar chart?", options: ["Which of our 6 products sold the most?", "What is total sales today?", "What time does the store open?", "How did sales change each hour?"], answer: 0, why: "Bar charts compare groups; sorting makes the biggest easy to see." },
      { objective: "O3", q: "When is a pie chart a reasonable choice?", options: ["To show change over 12 months", "To show a share of a total with only a few slices", "To compare 15 products", "To show one number"], answer: 1, why: "Pies show parts of a whole and are only readable with a few slices." },
      { objective: "O3", q: "A good chart title:", options: ["Says \"Chart 1\"", "Is left blank", "Is in a tiny font", "Says what it shows and the time period"], answer: 3, why: "\"Sales by product, October\" tells the viewer exactly what they see." },
      { objective: "O4", q: "In Data Studio, a filter on the page is called a:", options: ["Slicer", "Data type", "Control", "Measure"], answer: 2, why: "Data Studio calls page filters controls, such as a date range control." },
      { objective: "O4", q: "What is the one-minute test?", options: ["Ask someone the dashboard question and see if they can answer it from the page in under a minute", "Build the dashboard in one minute", "Show the page for one second", "Restart the computer"], answer: 0, why: "If a viewer can answer quickly, the layout works." },
      { objective: "O4", q: "You change the Category filter and every card and chart updates. This shows:", options: ["The data is wrong", "The filters work across the page", "The dashboard needs more pages", "The colors are broken"], answer: 1, why: "Everything changing together means the filter is connected to all visuals." },
      { objective: "O5", q: "The dashboard total is $1,240 and SUM in the sheet for the same dates is $1,240. This means:", options: ["The total is checked and matches", "The dashboard is wrong", "You should delete the sheet", "You need a new tool"], answer: 0, why: "Matching the source is how you validate a number." },
      { objective: "O5", q: "A card shows 52 when you expected total sales of $1,240. A likely cause is:", options: ["The page title", "The bar colors", "The card is set to Count instead of Sum", "The font size"], answer: 2, why: "Count gives the number of rows, not the total of the values." },
      { objective: "O5", q: "When should you check the numbers?", options: ["Never", "Only after the boss finds a mistake", "Only once a year", "Before anyone else sees the dashboard"], answer: 3, why: "Checking first keeps wrong numbers from leading to wrong decisions." },
      { objective: "O6", q: "Which should NEVER go into a practice dashboard?", options: ["Made-up bakery sales", "Real customers' names and phone numbers", "Product categories", "Dates"], answer: 1, why: "Practice data stays made up; real private data must be protected." },
      { objective: "O6", q: "What does this course give you?", options: ["The PL-300 certificate", "The CompTIA Data+ certificate", "A driver's license", "Preparation and a portfolio dashboard; the exams are taken separately"], answer: 3, why: "The course prepares you; Microsoft and CompTIA give their certifications after their own exams." },
      { objective: "O6", q: "A good 3-sentence summary includes what the dashboard shows, the main finding and:", options: ["One suggested action", "Your home address", "The tool's history", "A list of every row"], answer: 0, why: "An action turns the finding into a decision." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 3, 6, 7, 9, 11, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check it again.",
    criteria: [
      { name: "Question and key numbers", objective: "O1", notYet: "No clear question, or more than 5 numbers with no time period.", meets: "One-sentence question, audience named, 3 to 5 key numbers each with how it is calculated and a time period.", exceeds: "Also names the decision the dashboard supports and why each number matters to it." },
      { name: "Tidy data", objective: "O2", notYet: "Duplicates, blank rows, mixed date formats or numbers stored as text remain.", meets: "One header row, one row per record, correct data types, no duplicates.", exceeds: "Keeps the original sheet and a short note of every fix made." },
      { name: "Right charts", objective: "O3", notYet: "Chart types do not fit the questions, or titles are missing.", meets: "At least 2 charts that fit their questions, with clear titles; bars start at zero.", exceeds: "Can explain why each chart type was chosen over another." },
      { name: "Layout and filters", objective: "O4", notYet: "Cards are missing, or filters do not update every visual.", meets: "3 or more key number cards at the top, a date filter and one other filter that update everything; passes the one-minute test.", exceeds: "Clean, lined-up layout with nothing extra; a viewer answers in well under a minute." },
      { name: "Numbers checked", objective: "O5", notYet: "No numbers checked against the source.", meets: "3 numbers checked and written down; any mismatch fixed.", exceeds: "Explains the cause of a mismatch they found and how they fixed it." },
      { name: "Shared safely with a summary", objective: "O6", notYet: "Shared with edit access, contains private data, or no summary.", meets: "Shared view-only or exported to PDF, no private data, 3-sentence summary with a finding and an action.", exceeds: "Summary is ready to read aloud in a job interview as a portfolio piece." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and build a dashboard that meets the rubric",
      "Learners who add the dashboard to a résumé, portfolio or LinkedIn profile within 30 days",
      "Learners who schedule or pass PL-300 or CompTIA Data+, or start a data or reporting job, within 6 months (follow-up survey)",
      "Small business learners who use a dashboard to make a stocking, staffing or pricing decision"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet: Windows for Power BI Desktop, or any computer with a browser for Data Studio",
      "A free Google account (Google Sheets and Data Studio), and Power BI Desktop from Microsoft's official site if using Windows",
      "The made-up bakery sales data (learners type 15 or more rows) or another made-up data set for their own field",
      "Paper and pen for the dashboard plan",
      "About 2 to 3 hours in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Check devices first: learners on Mac, Chromebook or library computers use Data Studio; Windows users may choose either tool.",
      "Give the pre-test before Lesson 1 and compare with the final quiz.",
      "Have learners keep their Lesson 1 plan page; it guides the whole final task.",
      "Never use real customer, patient or employee data in class. Remind veterans and job seekers to use made-up numbers in portfolio pieces too.",
      "Score the final dashboard with the rubric and have each learner present it in 60 seconds, as practice for an interview.",
      "Point learners to the official PL-300 and CompTIA Data+ pages for current exam content, scheduling and costs; do not quote prices from memory."
    ]
  }
};
