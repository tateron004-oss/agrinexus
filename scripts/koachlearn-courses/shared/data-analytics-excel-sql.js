"use strict";

// Koach Learn course: Workforce Development -> "Data Analytics with Spreadsheets and SQL" (wave 1, 30 October 2026).
// Builds past shared/excel-spreadsheets.js (SUM, IF, sort, filter, chart) and shared/data-science-beginners.js (Python):
// here learners clean data, use pivot tables and COUNTIFS/SUMIFS, and write SQL (SELECT, WHERE, ORDER BY, GROUP BY, JOIN).
// Points to CompTIA Data+ (DA0-002, checked on comptia.org 30 October 2026) as a credential to prepare for; the course
// does not grant it. Practice data is made up and small enough to check by hand.

const DATAPLUS = { name: "CompTIA Data+ (DA0-002) official page", url: "https://www.comptia.org/en-us/certifications/data/" };
const SQLITE_ONLINE = { name: "SQLite Online (SQL editor in the browser)", url: "https://sqliteonline.com/" };
const DB_BROWSER = { name: "DB Browser for SQLite (open-source desktop tool)", url: "https://sqlitebrowser.org/" };

module.exports = {
  id: "data-analytics-excel-sql",
  category: "Workforce Development",
  name: "Data Analytics with Spreadsheets and SQL",
  skills: "Asking a data question, Cleaning data, Pivot tables and COUNTIFS/SUMIFS, Writing SQL queries, Grouping and joining tables, Reporting findings",
  outcome: "work like an entry-level data analyst: turn a business need into a clear question, clean a messy spreadsheet, summarize it with a pivot table and SUMIFS, answer questions with SQL (SELECT, WHERE, ORDER BY, GROUP BY and JOIN), and write short, honest findings you can show an employer.",
  about: [
    "Data analysts turn rows of numbers into answers people can act on: which store sells most, which program helps the most people, where money is going. Almost every kind of employer needs this, from shops and hospitals to city offices and nonprofits.",
    "You will use two tools analysts use every day: a spreadsheet (Google Sheets, free, or Excel) and SQL, the language for asking questions of a database. You will practice SQL for free in your web browser. All the practice data is made up and small, so you can check every answer by hand.",
    "If you want a credential, CompTIA Data+ is one for entry data analysts. This course helps you prepare and builds skills it covers, but it does not grant Data+ or any certificate; check the official page for the current exam, price and testing options.",
    "It helps to know basic spreadsheets first (\"Excel and Spreadsheets for Work\"). Each lesson takes about five minutes, ends with a \"Try it now\" task and two quick questions, and there is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a one-page analysis project for your portfolio: (1) a clear question about the practice sales data (or a small public dataset you choose); (2) the cleaned data in Google Sheets or Excel, with a Revenue column and a pivot table that answers it; (3) at least two SQL queries you ran, one with WHERE and ORDER BY and one with GROUP BY, with their results; (4) three findings in plain sentences with numbers, one limit of the data, and one suggested next step; and (5) one résumé line that describes the project.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Job seekers, young adults, veterans and career changers aiming for entry data roles (data analyst, reporting assistant, operations or business analyst) or wanting data skills in their current job. Mixed backgrounds; many have used spreadsheets but never SQL.",
    startingPoint: "Can enter data, use SUM and AVERAGE and sort in a spreadsheet. Have not cleaned messy data, built a pivot table or written a query. Few know how analysts present findings.",
    gap: "Entry data jobs ask for spreadsheet analysis and basic SQL, and for clear communication of results. Learners need hands-on practice on realistic, messy data with free tools, and a small project they can show an employer.",
    constraints: [
      "Reading level: plain words and short sentences; every term explained",
      "Devices: a computer with a web browser; phones are too small for SQL practice",
      "Free tools only: Google Sheets (or Excel if they have it) and a free SQL editor in the browser",
      "Practice data is made up; never put real customer, patient or employer data into online tools",
      "Time: 4 to 6 minute lessons; the project takes an extra hour or two"
    ],
    prerequisites: "Basic spreadsheet skills. \"Excel and Spreadsheets for Work\" covers them."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a business need from a manager", action: "write a clear, measurable data question and list the data needed to answer it", standard: "with a who or what, a measure and a time period" },
    { id: "O2", condition: "Given a messy spreadsheet", action: "clean the data by removing duplicates, trimming extra spaces and making labels and formats consistent", standard: "with no duplicates or mismatched labels left" },
    { id: "O3", condition: "Given clean data in Google Sheets or Excel", action: "build a pivot table and a SUMIFS or COUNTIFS formula that answer the question", standard: "with totals that match a hand check" },
    { id: "O4", condition: "Using a free SQL editor and a practice table", action: "write SELECT queries with WHERE and ORDER BY that return the rows asked for", standard: "returning exactly the right rows in the right order" },
    { id: "O5", condition: "Using two practice tables", action: "write queries that use GROUP BY with SUM, COUNT or AVG, and a JOIN between the tables", standard: "with results that match a hand check" },
    { id: "O6", condition: "Given the results of your analysis", action: "write three findings with numbers, one limit of the data and one next step", standard: "in plain sentences a manager can act on" }
  ],
  chapters: [
    {
      name: "Chapter 1: Spreadsheet analysis",
      lessons: [
        {
          title: "The analyst's job: from a need to a clear question",
          objectives: ["O1"],
          minutes: 5,
          goal: "Write a clear, measurable data question from a manager's request.",
          text: [
            "Analysts follow a simple path: ask a clear question, get the data, clean it, analyze it, and share what it means. Most of the work starts with the question. A vague request gets a vague answer.",
            "A manager says, \"How are sales doing?\" That is a need, not a question. A clear question names who or what, a measure and a time period: \"Which of our three stores had the most revenue from 1 to 4 October?\" Now you know what data you need: dates, stores, quantities and prices.",
            "Good questions are measurable (you can answer with a number), specific, and useful (the answer helps someone decide something). Write down the data you need before you open any file.",
            "Jobs that use these skills include data analyst, reporting analyst, operations analyst and business analyst. If you want a credential, CompTIA Data+ (exam DA0-002 when we checked in October 2026) covers data concepts, preparing data, analysis, visualization and reporting, and data governance. Check the official page for current details."
          ],
          steps: ["Write down the manager's need in their words.", "Turn it into a question with who or what, a measure and a time period.", "Check: can a number answer it?", "List the columns of data you need."],
          words: [["Data analyst", "a person who turns data into answers people can use."], ["Measurable", "can be answered with a number or a count."], ["Dataset", "a set of data, often a table with rows and columns."], ["Revenue", "money coming in from sales: quantity times price."]],
          slides: [
            { title: "The analyst's path", bullets: ["Ask, get data, clean, analyze, share", "It starts with a clear question"] },
            { title: "Need vs question", bullets: ["Need: \"How are sales doing?\"", "Question: \"Which store had the most revenue, 1 to 4 October?\""] },
            { title: "A clear question has", bullets: ["Who or what", "A measure", "A time period"] },
            { title: "A credential to prepare for", bullets: ["CompTIA Data+ (DA0-002, checked Oct 2026)", "This course prepares; CompTIA grants it", "Check comptia.org for current details"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Turn each need into a clear question and list the data needed: (a) \"Is the food pantry busier lately?\" (b) \"Which product should we order more of?\" Write each with who or what, a measure and a time period.",
          youCanNow: "turn a vague request into a clear, measurable question and list the data it needs.",
          quickCheck: [
            { objective: "O1", q: "Which is the clearest data question?", options: ["\"How is business?\"", "\"Tell me about sales.\"", "\"Are things good?\"", "\"Which item sold the most units in September at the North store?\""], answer: 3, why: "It names what (item), the measure (units), the place and the time period." },
            { objective: "O1", q: "Your question is \"Which store had the most revenue last week?\" Which data do you need?", options: ["Store, date, quantity and price for each sale", "Only the store names", "Employees' home addresses", "The weather"], answer: 0, why: "Revenue needs quantity and price; store and date sort it by place and time." }
          ]
        },
        {
          title: "Cleaning messy data in a spreadsheet",
          objectives: ["O2"],
          minutes: 6,
          goal: "Clean a messy table by removing duplicates, trimming spaces and fixing labels.",
          text: [
            "Real data is messy. The same store may be typed \"North\", \"north\" and \" North\" (with a space). A sale may be entered twice. Dates may be in different formats. If you do not clean it, your totals will be wrong, because the spreadsheet treats \"North\" and \"north \" as different stores.",
            "In Google Sheets, select your data and use Data > Data cleanup > Remove duplicates, and Data > Data cleanup > Trim whitespace. In Excel, use Data > Remove Duplicates, and the TRIM function to remove extra spaces. Use Find and replace to fix labels, for example change \"north\" to \"North\".",
            "Make every column one type: dates as dates, numbers as numbers (no \"$\" typed in), text the same spelling every time. Then add any column you need, such as Revenue = Qty times Price (for example =D2*E2).",
            "Always keep a copy of the raw data on its own tab and clean a copy. Write down each change you made, so someone else can trust and repeat your work."
          ],
          steps: ["Copy the raw data to a new tab called Clean.", "Remove duplicate rows.", "Trim extra spaces.", "Fix labels with Find and replace so each name is spelled one way.", "Make each column one type: dates, numbers or text.", "Add calculated columns, like Revenue = Qty * Price.", "Write a short list of the changes you made."],
          words: [["Data cleaning", "fixing errors, duplicates and inconsistent entries so results are correct."], ["Duplicate", "a row that appears more than once by mistake."], ["Whitespace", "extra spaces before or after text that you cannot easily see."], ["Raw data", "the data exactly as you received it, before any changes."]],
          slides: [
            { title: "Why clean?", bullets: ["\"North\", \"north\" and \" North\" count as different", "Duplicate rows double-count sales", "Messy data gives wrong totals"] },
            { title: "Cleaning tools", bullets: ["Sheets: Data > Data cleanup > Remove duplicates", "Sheets: Data > Data cleanup > Trim whitespace", "Excel: Remove Duplicates and TRIM", "Find and replace to fix labels"] },
            { title: "One type per column", bullets: ["Dates as dates, numbers as numbers", "Add Revenue = Qty * Price"] },
            { title: "Good habits", bullets: ["Keep the raw data on its own tab", "Write down every change"] }
          ],
          tryIt: "In Google Sheets, type this practice table with headers Date, Store, Item, Qty, Price: 2026-10-01, North, Coffee, 3, 2.50 / 2026-10-01, South, Bagel, 5, 1.75 / 2026-10-02, north , Bagel, 2, 1.75 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-03, South, Coffee, 4, 2.50 / 2026-10-03, North, Juice, 1, 3.00 / 2026-10-04, East, Bagel, 8, 1.75 / 2026-10-04, South, Juice, 2, 3.00. Copy it to a Clean tab, remove the duplicate East row, fix \"north \" to \"North\", and add a Revenue column. You should have 8 rows.",
          youCanNow: "clean a messy table so every total you build on it is correct.",
          quickCheck: [
            { objective: "O2", q: "A total for \"North\" looks too low. Some rows say \"north \" with a space. What do you do?", options: ["Delete those rows", "Trim the spaces and make the label \"North\" everywhere", "Ignore it", "Make the font bigger"], answer: 1, why: "Trimming and fixing labels makes all North rows count together." },
            { objective: "O2", q: "Before cleaning, what should you do with the raw data?", options: ["Delete it", "Email it to everyone", "Keep a copy on its own tab and clean a copy", "Print it"], answer: 2, why: "Keeping the raw data lets you check or redo your work." }
          ]
        },
        {
          title: "Summarizing with pivot tables, SUMIFS and COUNTIFS",
          objectives: ["O3"],
          minutes: 6,
          goal: "Build a pivot table and a SUMIFS formula that answer your question.",
          text: [
            "A pivot table summarizes a big table in seconds: for example, total revenue for each store. In Google Sheets, select your clean data and choose Insert > Pivot table. In Excel, choose Insert > PivotTable. Add Store under Rows and Revenue under Values, summarized by SUM.",
            "With the cleaned practice data, the pivot should show East 29.00, South 24.75 and North 14.00. So East had the most revenue from 1 to 4 October.",
            "Formulas can answer one question at a time. SUMIFS adds the numbers that match a rule: =SUMIFS(F:F, B:B, \"South\") adds the Revenue column (F) where the Store column (B) says South, giving 24.75. COUNTIFS counts matching rows: =COUNTIFS(C:C, \"Coffee\") counts the Coffee sales, giving 3. AVERAGEIFS works the same way for averages.",
            "Always check one number by hand. If the pivot and your hand check do not match, the data probably still needs cleaning."
          ],
          steps: ["Select the clean data, including headers.", "Insert a pivot table on a new sheet.", "Put the category (Store) in Rows.", "Put the measure (Revenue) in Values, summarized by SUM.", "Sort it from largest to smallest.", "Check one total by hand or with SUMIFS."],
          words: [["Pivot table", "a tool that groups and summarizes a table, for example totals by store."], ["SUMIFS", "a formula that adds numbers that match one or more rules."], ["COUNTIFS", "a formula that counts rows that match one or more rules."], ["Measure", "the number you are adding up or averaging, like revenue."]],
          slides: [
            { title: "Pivot tables", bullets: ["Sheets: Insert > Pivot table", "Excel: Insert > PivotTable", "Rows: Store; Values: SUM of Revenue"] },
            { title: "The practice answer", bullets: ["East 29.00, South 24.75, North 14.00", "East had the most revenue, 1 to 4 October"] },
            { title: "Formulas with rules", bullets: ["=SUMIFS(F:F, B:B, \"South\") gives 24.75", "=COUNTIFS(C:C, \"Coffee\") gives 3", "AVERAGEIFS for averages"] },
            { title: "Check by hand", bullets: ["Add one group yourself", "No match? Clean the data again"] }
          ],
          tryIt: "Using your clean practice data, build a pivot table of revenue by store and sort it. Then write a SUMIFS for East and a COUNTIFS for Bagel. Check: East should be 29.00 and Bagel should count 3 rows. Make a second pivot of Qty by Item.",
          youCanNow: "summarize a table with a pivot table and check it with SUMIFS and COUNTIFS.",
          quickCheck: [
            { objective: "O3", q: "In a pivot table of revenue by store, where does Store go?", options: ["Rows", "Values", "Filters only", "It is not used"], answer: 0, why: "The category you group by goes in Rows; the number you add goes in Values." },
            { objective: "O3", q: "Which formula adds the Revenue (column F) only for the North store (column B)?", options: ["=SUM(F:F)", "=COUNTIFS(B:B, \"North\")", "=AVERAGE(B:B)", "=SUMIFS(F:F, B:B, \"North\")"], answer: 3, why: "SUMIFS adds the sum range (F) where the rule range (B) matches North." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Spreadsheet analysis",
        questions: [
          { objective: "O1", q: "Which is a need, not yet a clear question?", options: ["\"How are we doing?\"", "\"Which store had the highest revenue in October?\"", "\"How many Coffee sales were there on 2 October?\"", "\"What was the average order size last week?\""], answer: 0, why: "It has no measure or time period, so a number cannot answer it yet." },
          { objective: "O2", q: "A sale was entered twice. What happens if you do not remove the duplicate?", options: ["Nothing changes", "The total counts that sale twice", "The spreadsheet fixes it", "The sale disappears"], answer: 1, why: "Duplicates double-count, so totals come out too high." },
          { objective: "O2", q: "Which Google Sheets menu removes extra spaces?", options: ["Insert > Chart", "Format > Theme", "Data > Data cleanup > Trim whitespace", "File > Print"], answer: 2, why: "Trim whitespace removes spaces before and after text." },
          { objective: "O3", q: "What does =COUNTIFS(C:C, \"Juice\") return for the clean practice data?", options: ["1", "3", "8", "2"], answer: 3, why: "Juice appears in two rows (North on 3 October and South on 4 October)." },
          { objective: "O3", q: "Your pivot total for South does not match your hand check. What is the most likely reason?", options: ["The data still has a duplicate or a mismatched label", "Pivot tables cannot add", "You need a bigger screen", "Hand checks are always wrong"], answer: 0, why: "Mismatches usually point to data that still needs cleaning." }
        ]
      }
    },
    {
      name: "Chapter 2: SQL and sharing results",
      lessons: [
        {
          title: "Your first SQL queries: SELECT, WHERE and ORDER BY",
          objectives: ["O4"],
          minutes: 6,
          goal: "Write SELECT queries with WHERE and ORDER BY in a free SQL editor.",
          text: [
            "Big organizations keep data in databases, not spreadsheets. SQL (often said \"sequel\") is the language to ask a database questions. A query is one question. SQL looks like plain English, and it is used by almost every data job.",
            "You can practice free in your browser at SQLite Online (sqliteonline.com): type SQL in the editor and press Run. It may offer paid extras; you do not need them. DB Browser for SQLite is a free, open-source desktop option. Use only practice data in online tools, never real customer data.",
            "Create the practice table by running: CREATE TABLE sales (id INTEGER, sale_date TEXT, store TEXT, item TEXT, qty INTEGER, price REAL); then INSERT INTO sales VALUES (1,'2026-10-01','North','Coffee',3,2.50),(2,'2026-10-01','South','Bagel',5,1.75),(3,'2026-10-02','North','Bagel',2,1.75),(4,'2026-10-02','East','Coffee',6,2.50),(5,'2026-10-03','South','Coffee',4,2.50),(6,'2026-10-03','North','Juice',1,3.00),(7,'2026-10-04','East','Bagel',8,1.75),(8,'2026-10-04','South','Juice',2,3.00);",
            "Now ask. SELECT * FROM sales; shows every row. SELECT item, qty FROM sales WHERE store = 'North'; shows only North's items. SELECT * FROM sales WHERE qty >= 4 ORDER BY qty DESC; shows the four biggest sales, largest first (8, 6, 5, 4). Text goes in single quotes; numbers do not."
          ],
          steps: ["Open a free SQL editor in your browser.", "Run the CREATE TABLE line, then the INSERT line.", "Run SELECT * FROM sales; to see all 8 rows.", "Add WHERE to keep only the rows you want.", "Add ORDER BY to sort; add DESC for largest first.", "Check the result by looking at the rows yourself."],
          words: [["Database", "an organized store of data, kept in tables."], ["SQL", "Structured Query Language: the language for asking a database questions."], ["Query", "one question written in SQL."], ["SELECT / FROM", "SELECT names the columns you want; FROM names the table."], ["WHERE", "keeps only the rows that match a rule."], ["ORDER BY", "sorts the results; DESC means largest first."]],
          slides: [
            { title: "SQL in plain words", bullets: ["The language for asking a database questions", "One question = one query", "Used in almost every data job"] },
            { title: "Practice free", bullets: ["SQLite Online in your browser: type, then Run", "DB Browser for SQLite on your computer", "Practice data only"] },
            { title: "Three queries", bullets: ["SELECT * FROM sales;", "SELECT item, qty FROM sales WHERE store = 'North';", "... WHERE qty >= 4 ORDER BY qty DESC;"] },
            { title: "Rules to remember", bullets: ["Text in single quotes: 'North'", "Numbers without quotes", "End each query with ;"] }
          ],
          sources: [SQLITE_ONLINE, DB_BROWSER],
          tryIt: "Create the sales table and run the three queries. Then write your own: all Coffee sales, sorted by qty from largest to smallest. You should get 3 rows: qty 6, 4 and 3. Save each query and its result for your final task.",
          youCanNow: "create a practice table and write SQL queries that filter and sort rows.",
          quickCheck: [
            { objective: "O4", q: "Which query shows only the South store's sales?", options: ["SELECT * FROM sales ORDER BY store;", "SELECT * FROM sales WHERE store = 'South';", "SELECT South FROM sales;", "SELECT * WHERE sales = South;"], answer: 1, why: "WHERE store = 'South' keeps only the rows for that store." },
            { objective: "O4", q: "What does DESC do in ORDER BY qty DESC?", options: ["Deletes the column", "Describes the table", "Sorts from largest to smallest", "Keeps only one row"], answer: 2, why: "DESC means descending: largest first." }
          ]
        },
        {
          title: "Totals with GROUP BY, and joining two tables",
          objectives: ["O5"],
          minutes: 6,
          goal: "Write a GROUP BY query with SUM and a JOIN between two tables.",
          text: [
            "GROUP BY does in SQL what a pivot table does in a spreadsheet. SELECT store, SUM(qty * price) AS revenue FROM sales GROUP BY store ORDER BY revenue DESC; gives East 29.0, South 24.75, North 14.0, the same as your pivot. AS gives the new column a name.",
            "Other summary functions: COUNT(*) counts rows, AVG(qty) gives the average, MIN and MAX give the smallest and largest. SELECT item, SUM(qty) FROM sales GROUP BY item; gives Bagel 15, Coffee 13, Juice 3.",
            "Data is often split across tables. A second table can hold each store's city: CREATE TABLE stores (store TEXT, city TEXT); INSERT INTO stores VALUES ('North','Fresno'),('South','Bakersfield'),('East','Modesto'); A JOIN matches rows where a column is the same in both tables.",
            "SELECT sales.item, sales.qty, stores.city FROM sales JOIN stores ON sales.store = stores.store; shows every sale with its city. If a store name is spelled differently in the two tables, the JOIN will miss it, which is another reason to clean data first."
          ],
          steps: ["Choose the column to group by (store, item, date).", "Choose the summary: SUM, COUNT, AVG, MIN or MAX.", "Write SELECT column, SUM(...) AS name FROM table GROUP BY column;", "Add ORDER BY to rank the groups.", "For a JOIN, name both tables and the matching column after ON.", "Compare the results with your pivot table."],
          words: [["GROUP BY", "groups rows that share a value so you can total or count each group."], ["Aggregate function", "a summary like SUM, COUNT, AVG, MIN or MAX."], ["AS", "gives a result column a name."], ["JOIN", "combines rows from two tables that share a matching column."], ["Key", "the column used to match rows between tables."]],
          slides: [
            { title: "GROUP BY = a pivot in SQL", bullets: ["SELECT store, SUM(qty * price) AS revenue", "FROM sales GROUP BY store ORDER BY revenue DESC;", "East 29.0, South 24.75, North 14.0"] },
            { title: "Summary functions", bullets: ["COUNT(*), SUM, AVG, MIN, MAX", "Units by item: Bagel 15, Coffee 13, Juice 3"] },
            { title: "Joining two tables", bullets: ["stores table: store and city", "JOIN stores ON sales.store = stores.store", "Each sale now shows its city"] },
            { title: "Clean keys matter", bullets: ["Different spellings: the JOIN misses rows", "Clean first, then join"] }
          ],
          sources: [SQLITE_ONLINE],
          tryIt: "Run the GROUP BY revenue query and check it matches your pivot table. Write a query that counts the sales at each store (COUNT(*)); you should get 3, 3 and 2. Then create the stores table and run the JOIN. Save each query and result.",
          youCanNow: "total and count groups with GROUP BY and combine two tables with a JOIN.",
          quickCheck: [
            { objective: "O5", q: "Which query gives total units sold for each item?", options: ["SELECT item, SUM(qty) FROM sales GROUP BY item;", "SELECT * FROM sales;", "SELECT item FROM sales WHERE qty = SUM;", "SELECT SUM(item) FROM sales;"], answer: 0, why: "GROUP BY item makes one group per item, and SUM(qty) totals each." },
            { objective: "O5", q: "A JOIN between sales and stores misses the North rows. What is the most likely reason?", options: ["SQL cannot join text", "There are too many rows", "The store name is spelled differently in the two tables", "JOIN only works on Mondays"], answer: 2, why: "A JOIN matches exact values; different spellings do not match." }
          ]
        },
        {
          title: "Turning results into findings, and your project",
          objectives: ["O6"],
          minutes: 6,
          goal: "Write three findings with numbers, one limit and one next step.",
          text: [
            "Numbers alone do not help a manager. A finding is one sentence that says what the data shows, with the number: \"East had the most revenue from 1 to 4 October: $29.00, more than double North's $14.00.\"",
            "Be honest about limits. The practice data covers only 4 days and 8 sales, so it cannot tell you about a whole year. Correlation is not cause: if Coffee sold more on a cold day, the data alone does not prove the weather caused it. Say what the data cannot tell you.",
            "End with a next step someone can act on: \"Collect a full month of sales before deciding where to send more stock.\" Keep it to one page, with one clear chart or table from your pivot.",
            "Finally, turn the project into a résumé line: \"Cleaned and analyzed sales data in Google Sheets and SQL (GROUP BY, JOIN); found the top store by revenue and reported findings.\" This shows an employer what you can do. Use only made-up or public data in a portfolio, never an employer's private data."
          ],
          steps: ["Write the question at the top.", "Add one table or chart from your pivot.", "Write three findings, each with a number.", "Write one limit: what the data cannot tell you.", "Write one next step.", "Add your SQL queries and their results.", "Write one résumé line about the project."],
          words: [["Finding", "one sentence that states what the data shows, with a number."], ["Limitation", "something the data cannot tell you, or a reason to be careful with it."], ["Correlation", "two things changing together; it does not prove one causes the other."], ["Portfolio", "a set of work samples you show employers."]],
          slides: [
            { title: "A good finding", bullets: ["One sentence, one number", "\"East had the most revenue: $29.00, double North's $14.00.\""] },
            { title: "Be honest about limits", bullets: ["Only 4 days and 8 sales", "Correlation is not cause"] },
            { title: "One page", bullets: ["Question, one chart or table", "Three findings, one limit, one next step", "Your SQL queries and results"] },
            { title: "Show it", bullets: ["Write one résumé line", "Use only made-up or public data"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Final task: build your one-page project with the question, cleaned data and pivot, at least two SQL queries with results, three findings with numbers, one limit, one next step, and one résumé line. Read it out loud: could a busy manager act on it in one minute?",
          youCanNow: "turn analysis into clear, honest findings and a project you can show an employer.",
          quickCheck: [
            { objective: "O6", q: "Which is the best finding?", options: ["\"Sales happened.\"", "\"The data is interesting.\"", "\"South sold 11 units of food and drink and earned $24.75, second of three stores.\"", "\"Numbers went up and down.\""], answer: 2, why: "It states what happened, with numbers and a comparison." },
            { objective: "O6", q: "Juice sold more on the warmest day in your data. What can you honestly say?", options: ["Warm weather causes juice sales", "Juice and warm days went together here, but this does not prove cause", "Juice will always sell more in summer", "The data is wrong"], answer: 1, why: "Correlation is not cause; a small dataset cannot prove why." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: SQL and sharing results",
        questions: [
          { objective: "O4", q: "What does SELECT * FROM sales; do?", options: ["Deletes the sales table", "Shows every column and row in the sales table", "Counts the rows", "Sorts the table"], answer: 1, why: "* means all columns, and with no WHERE every row is returned." },
          { objective: "O4", q: "Which is written correctly?", options: ["SELECT * FROM sales WHERE item = 'Bagel';", "SELECT * FROM sales WHERE item = Bagel", "FROM sales SELECT Bagel;", "SELECT Bagel WHERE sales;"], answer: 0, why: "Text values go in single quotes, and the order is SELECT, FROM, WHERE." },
          { objective: "O5", q: "Which SQL clause does the same job as a pivot table's Rows?", options: ["ORDER BY", "WHERE", "FROM", "GROUP BY"], answer: 3, why: "GROUP BY makes one group per value, like rows in a pivot table." },
          { objective: "O5", q: "What does COUNT(*) return for each store in the practice data?", options: ["The total revenue", "The average price", "The number of sales rows", "The city"], answer: 2, why: "COUNT(*) counts rows in each group." },
          { objective: "O6", q: "Which belongs in the limits part of your report?", options: ["\"The data covers only 4 days, so it cannot show a yearly pattern.\"", "\"East is the best store forever.\"", "\"SQL is hard.\"", "\"I like coffee.\""], answer: 0, why: "A limit tells the reader what the data cannot show." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Data Analytics with Spreadsheets and SQL",
    questions: [
      { objective: "O1", q: "A clear data question includes:", options: ["Only a topic", "Who or what, a measure and a time period", "A chart", "A password"], answer: 1, why: "Those three parts make it answerable with a number." },
      { objective: "O1", q: "What is the first step in the analyst's path?", options: ["Make a chart", "Write SQL", "Ask a clear question", "Share findings"], answer: 2, why: "The question decides what data you need and how to analyze it." },
      { objective: "O1", q: "Which credential from CompTIA is aimed at entry data analysts?", options: ["Data+", "A+", "Security+", "Network+"], answer: 0, why: "CompTIA Data+ covers data concepts, preparation, analysis, visualization and governance." },
      { objective: "O2", q: "Why does \"North\" and \"north \" cause a problem?", options: ["It makes the file bigger", "Spreadsheets cannot read lowercase", "It changes the font", "They are counted as two different stores"], answer: 3, why: "Different spellings split one group into two, so totals are wrong." },
      { objective: "O2", q: "Which Excel tool removes repeated rows?", options: ["Insert > Chart", "Data > Remove Duplicates", "View > Zoom", "File > Save As"], answer: 1, why: "Remove Duplicates deletes rows that appear more than once." },
      { objective: "O2", q: "Which is a good cleaning habit?", options: ["Clean the only copy of the data", "Keep the raw data and write down each change", "Delete any row that looks odd", "Type $ signs into number cells"], answer: 1, why: "Keeping the raw data and a change list makes your work checkable." },
      { objective: "O3", q: "In a pivot table, where does the number you add up go?", options: ["Values", "Rows", "The title", "Filters only"], answer: 0, why: "Values holds the measure, summarized by SUM, COUNT or AVERAGE." },
      { objective: "O3", q: "What does COUNTIFS do?", options: ["Adds numbers", "Finds the average", "Counts rows that match one or more rules", "Sorts a column"], answer: 2, why: "COUNTIFS counts rows that meet the rules you give it." },
      { objective: "O3", q: "In the clean practice data, which store had the most revenue?", options: ["North", "South", "All were equal", "East"], answer: 3, why: "East had 29.00, South 24.75 and North 14.00." },
      { objective: "O4", q: "What is SQL used for?", options: ["Drawing pictures", "Asking a database questions", "Sending email", "Making slides"], answer: 1, why: "SQL is the language for querying databases." },
      { objective: "O4", q: "Which keeps only rows where qty is 4 or more?", options: ["ORDER BY qty", "GROUP BY qty", "WHERE qty >= 4", "SELECT qty"], answer: 2, why: "WHERE filters rows by a rule." },
      { objective: "O4", q: "To sort results with the biggest first, you write:", options: ["ORDER BY qty DESC", "ORDER BY qty ASC", "WHERE qty BIG", "SORT qty"], answer: 0, why: "DESC sorts from largest to smallest." },
      { objective: "O4", q: "Which data is safe to put into an online SQL practice tool?", options: ["Your employer's customer list", "Patient records", "Made-up practice data", "Your bank statements"], answer: 2, why: "Use only practice or public data in online tools." },
      { objective: "O5", q: "SELECT store, SUM(qty * price) FROM sales GROUP BY store; returns:", options: ["Every sale", "Total revenue for each store", "The number of stores", "The city of each store"], answer: 1, why: "GROUP BY store with SUM gives one revenue total per store." },
      { objective: "O5", q: "Which function gives an average?", options: ["COUNT", "MAX", "SUM", "AVG"], answer: 3, why: "AVG returns the average of a column." },
      { objective: "O5", q: "A JOIN matches rows from two tables by:", options: ["A column with the same values in both", "The row color", "The table's size", "Alphabetical order only"], answer: 0, why: "JOIN ... ON matches rows where the key column is equal." },
      { objective: "O6", q: "A finding should include:", options: ["Only a chart with no words", "A number and what it means", "Every row of data", "Your opinion with no data"], answer: 1, why: "A clear finding states what happened with a number." },
      { objective: "O6", q: "Your data covers one week. Which is honest?", options: ["\"This proves the yearly trend.\"", "\"This will never change.\"", "\"The data is perfect.\"", "\"This week only; we need more data to see a pattern.\""], answer: 3, why: "Naming the limit keeps readers from drawing wrong conclusions." },
      { objective: "O6", q: "Which résumé line best shows this project?", options: ["\"Good with computers.\"", "\"Cleaned and analyzed sales data in Google Sheets and SQL (GROUP BY, JOIN) and reported findings.\"", "\"Know some data.\"", "\"Used the internet.\""], answer: 1, why: "It names the tools, the skills and the result." },
      { objective: "O6", q: "What should end your one-page report?", options: ["A clear next step someone can act on", "A long list of raw data", "Your password", "Nothing"], answer: 0, why: "A next step turns findings into action." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 6, 8, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Clear question", objective: "O1", notYet: "The question is vague or cannot be answered with a number.", meets: "The question names who or what, a measure and a time period.", exceeds: "It also says who will use the answer and what decision it helps." },
      { name: "Clean data", objective: "O2", notYet: "Duplicates or mismatched labels remain, or the raw data was lost.", meets: "No duplicates, consistent labels and types, raw data kept, changes listed.", exceeds: "The change list is clear enough for someone else to repeat the cleaning." },
      { name: "Pivot and formulas", objective: "O3", notYet: "No pivot, or totals do not match a hand check.", meets: "A pivot answers the question and a SUMIFS or COUNTIFS matches it.", exceeds: "A second pivot or formula adds a useful comparison." },
      { name: "Filtering queries", objective: "O4", notYet: "No working query, or it returns the wrong rows.", meets: "A query with WHERE and ORDER BY returns exactly the right rows.", exceeds: "Queries are neatly written and each has a one-line note on what it answers." },
      { name: "Grouping and joining", objective: "O5", notYet: "No GROUP BY query, or its totals are wrong.", meets: "A GROUP BY query with SUM, COUNT or AVG matches the pivot.", exceeds: "Also includes a working JOIN and explains the matching column." },
      { name: "Findings and résumé line", objective: "O6", notYet: "Findings have no numbers, or no limit or next step.", meets: "Three findings with numbers, one limit, one next step and one résumé line.", exceeds: "A manager could act on it in one minute, and the chart or table is clearly labeled." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who add the project to a résumé or portfolio within 30 days (follow-up survey)",
      "Learners who apply for or start a data, reporting or analyst role, or use these skills at work, within 6 months",
      "Learners who book or pass CompTIA Data+ or another data credential within 6 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with a web browser (a phone screen is too small for SQL practice)",
      "A free Google account for Google Sheets, or Excel if available",
      "A free SQL editor: SQLite Online in the browser, or DB Browser for SQLite installed",
      "About 90 minutes for the lessons, plus 1 to 2 hours for the final project"
    ],
    facilitatorNotes: [
      "Before the session, open the SQL editor on the lab computers and check that it loads; some networks block sites.",
      "Give learners the practice table as a file or printout to save typing time; the typing itself is also good practice.",
      "Pair learners for Lessons 4 and 5: one types the query, the other checks the result by hand, then swap.",
      "Stress the privacy rule: only made-up or public data in online tools and portfolios.",
      "If learners want a credential, point them to the official CompTIA Data+ page; this course prepares but does not grant it.",
      "Score the final project with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
