"use strict";

// Koach Learn course (shared): "Introduction to Data Science and Data Analysis". Listed for Youth, Workforce Development and Undeserved Community; category = the first one catalog.js gives (Youth).
// Shape and rules: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

const COLAB = { name: "Google Colab: Frequently Asked Questions", url: "https://research.google.com/colaboratory/faq.html" };
const PANDAS = { name: "pandas: 10 minutes to pandas", url: "https://pandas.pydata.org/docs/user_guide/10min.html" };
const SEABORN = { name: "seaborn: load_dataset", url: "https://seaborn.pydata.org/generated/seaborn.load_dataset.html" };

module.exports = {
  id: "data-science-beginners",
  category: "Youth",
  name: "Introduction to Data Science and Data Analysis",
  skills: "Asking a question data can answer, Working out averages and spotting outliers, Loading data with pandas, Cleaning and grouping data, Making a chart and sharing findings",
  outcome: "take a real dataset in Google Colab, load it with pandas, clean it, answer a clear question with averages and groups, make a chart, and write up three honest findings.",
  about: [
    "Data analysts turn rows of numbers into answers people can act on: which day a shop is busiest, which team drill helps most, where a program's money goes. It is one of the most useful job skills today, and you can start for free.",
    "Chapter 1 teaches the thinking with no code: asking a good question, knowing your data, and using averages without being fooled. Chapter 2 moves to Google Colab, a free website that runs Python, where you use pandas, the most popular data tool in Python, on a real restaurant dataset.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "In Google Colab, load the restaurant tips dataset with pandas, check it for missing values, add a column for the tip as a percent of the bill, find the average tip percent for each day and for lunch versus dinner, make a bar chart of one of them, and write three findings in plain sentences, including one thing the data cannot tell you.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people and adults starting out with data: high school and college students, youth program members, coaches, small business and nonprofit staff, and career changers looking at data analyst roles.",
    startingPoint: "Can use a computer and web browser and have written a little Python. Many use spreadsheets but have never loaded data in pandas, checked it for missing values, compared groups, or written findings that state their limits.",
    gap: "Teams, schools, businesses and nonprofits make decisions from data, and data analysis is a common entry point into tech jobs. Without the basic steps people answer the wrong question, are fooled by outliers or correlation, or share charts and claims the data cannot support.",
    constraints: [
      "Reading level: plain words and short sentences; terms like DataFrame, median, outlier and correlation are explained",
      "Devices: a computer or laptop with a web browser",
      "Accounts and cost: a free Google account for Google Colab; pandas and seaborn are already installed",
      "Time: about 5 to 6 minutes a lesson plus practice, about 60 to 75 minutes in total",
      "Math: averages and percentages only"
    ],
    prerequisites: "Introduction to Programming with Python."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a real question, such as a coach's or a shop's", action: "list the five steps of a data project in order and match each to the example", standard: "with all five steps (Ask, Get, Clean, Explore, Share) in the right order" },
    { id: "O2", condition: "Given a data table and a question", action: "describe what each column holds and its type and check whether the data can answer the question", standard: "naming numeric and categorical columns correctly and saying so when a question cannot be answered" },
    { id: "O3", condition: "Given a short list of numbers or a claim about two things", action: "calculate the mean and median, identify any outlier and check whether a claim mixes up correlation and cause", standard: "with the mean and median correct and every correlation-cause mix-up named" },
    { id: "O4", condition: "In Google Colab with pandas", action: "load a dataset into a DataFrame and describe its rows, columns and types", standard: "using head(), shape, info() and describe() and reporting the results correctly" },
    { id: "O5", condition: "Given a loaded DataFrame", action: "check for missing values, add a calculated column, filter rows and compare groups", standard: "with each step's code running and any cleaning written down" },
    { id: "O6", condition: "Given your group results", action: "make a titled bar chart and write findings that state their limits", standard: "with numbers from your own results and at least one honest limit" }
  ],
  chapters: [
    {
      name: "Chapter 1: Thinking like a data analyst",
      lessons: [
        {
          objectives: ["O1"],
          title: "What data science is, and the five steps",
          minutes: 4,
          goal: "Name the five steps of a data project and match them to a real example.",
          text: [
            "Data science means using data to answer questions and make better decisions. Data analysis is the hands-on part: cleaning, counting, comparing and charting.",
            "Almost every project follows five steps. Ask: what do you want to know? Get: find the data. Clean: fix mistakes and gaps. Explore: count, average, compare and chart. Share: tell people what you found in plain words.",
            "Example: a youth soccer coach asks \"Do we score more in the second half?\" She gets the scores from each game, cleans out a game that was cancelled, adds up first-half and second-half goals, and shares a simple chart with the team."
          ],
          steps: ["Ask a clear question.", "Get the data.", "Clean it.", "Explore it with counts, averages and charts.", "Share what you found."],
          words: [["Data", "facts and numbers collected about something."], ["Data science", "using data to answer questions and guide decisions."], ["Data analysis", "cleaning, summarizing and charting data to find answers."], ["Dataset", "a collection of data, usually a table."]],
          slides: [
            { title: "Data science is", bullets: ["Using data to answer questions", "And to make better decisions"] },
            { title: "The five steps", bullets: ["Ask, Get, Clean", "Explore, Share"] },
            { title: "Example: the soccer coach", bullets: ["Ask: more goals in the second half?", "Get and clean the game scores", "Explore and share a simple chart"] }
          ],
          tryIt: "Think of one question from your own life, work or community that data could answer (for example \"Which day do I spend the most?\"). Write what you would do at each of the five steps.",
          youCanNow: "describe the five steps of a data project and plan one.",
          quickCheck: [
            { objective: "O1", q: "What happens in the Clean step of a data project?", options: ["You ask the question", "You fix mistakes and gaps in the data", "You share the chart", "You collect more data"], answer: 1, why: "Clean means fixing mistakes and gaps before you explore." },
            { objective: "O1", q: "A shop owner asks, \"Which day do we sell the most?\" What would you do right after this Ask step?", options: ["Make a chart", "Write the findings", "Average the days of the week", "Get the sales data with dates"], answer: 3, why: "After Ask comes Get: find the data that can answer the question." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Knowing your data: rows, columns and types",
          minutes: 5,
          goal: "Read a data table and say what each column holds and what type it is.",
          text: [
            "Most data comes as a table. Tidy data means each row is one thing you measured (one game, one sale, one person) and each column is one fact about it (date, amount, team).",
            "Columns have types. Numbers you can do math with, like price or minutes. Categories are groups, like day of the week or team name: you count them, but you do not average them. Dates are their own type.",
            "Good questions match the data you have. \"What is the average sale on Saturdays?\" needs a sale amount column and a day column. If the data does not have it, you cannot answer it, and saying so is part of the job."
          ],
          steps: ["Say what one row stands for.", "List each column and what it means.", "Mark each column as number, category or date.", "Check that your question can be answered with these columns."],
          words: [["Row", "one record: one thing you measured."], ["Column", "one fact recorded for every row."], ["Tidy data", "one row per thing, one column per fact."], ["Numeric", "a column of numbers you can do math with."], ["Categorical", "a column of groups or labels, like day or team."]],
          slides: [
            { title: "Tidy data", bullets: ["Each row: one thing measured", "Each column: one fact about it"] },
            { title: "Column types", bullets: ["Numbers: price, minutes", "Categories: day, team", "Dates"] },
            { title: "Match question to data", bullets: ["The question needs the right columns", "Missing column = cannot answer it", "Say so honestly"] }
          ],
          tryIt: "Make a small table of your last 7 days: date, day of the week, hours of sleep and mood from 1 to 5. Label each column as number, category or date, and write one question the table can answer and one it cannot.",
          youCanNow: "read a table, name each column's type and check whether a question fits the data.",
          quickCheck: [
            { objective: "O2", q: "What is a categorical column?", options: ["A column of prices", "A column of dates only", "A column of groups, such as team name or day of the week", "A column of averages"], answer: 2, why: "Categories are groups you count, not average." },
            { objective: "O2", q: "Your sales table has amount and day columns but no time of day. Someone asks if mornings sell more. What would you say?", options: ["The data cannot answer that, because there is no time column", "Mornings sell more", "Average the day column", "Guess from the amounts"], answer: 0, why: "If the data does not have it, you cannot answer it, and saying so is part of the job." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Averages, outliers and not being fooled",
          minutes: 6,
          goal: "Work out the mean and median, spot an outlier, and avoid a common mistake.",
          text: [
            "The mean (average) is the total divided by how many there are. The median is the middle value when you sort them. For 3, 4, 4, 5 and 34 the mean is 50 / 5 = 10, but the median is 4.",
            "That 34 is an outlier: a value far from the rest. It might be a typo, or it might be real and important. Outliers pull the mean a lot but barely move the median, so when there are outliers, the median often describes a typical value better.",
            "Two things moving together is called correlation, but it does not prove that one causes the other. Ice cream sales and sunburns both rise in summer: the sun causes both. Before you claim a cause, look for another reason."
          ],
          steps: ["Sort the numbers.", "Mean: add them and divide by how many.", "Median: take the middle one (or the average of the two middle ones).", "Look for values far from the rest and check whether they are mistakes.", "Before saying \"X causes Y\", look for another explanation."],
          words: [["Mean", "the average: total divided by count."], ["Median", "the middle value when the numbers are sorted."], ["Outlier", "a value far from the others."], ["Correlation", "two things that tend to move together."], ["Causation", "one thing actually making another happen."]],
          slides: [
            { title: "Mean and median", bullets: ["Mean: total / count", "Median: the middle sorted value", "3, 4, 4, 5, 34: mean 10, median 4"] },
            { title: "Outliers", bullets: ["Far from the other values", "Typo, or real and important", "Pull the mean, not the median"] },
            { title: "Correlation is not causation", bullets: ["Ice cream and sunburns rise together", "The sun causes both", "Look for another reason first"] }
          ],
          tryIt: "Here are 7 delivery times in minutes: 22, 25, 19, 24, 95, 21, 23. Work out the mean and the median by hand, name the outlier, and write which number better describes a typical delivery and why. (Mean about 32.7, median 23.)",
          youCanNow: "calculate a mean and median, spot outliers and avoid mixing up correlation and causation.",
          quickCheck: [
            { objective: "O3", q: "What is the mean of 2, 4, 6 and 8?", options: ["5", "4", "6", "20"], answer: 0, why: "2 + 4 + 6 + 8 = 20, and 20 / 4 = 5." },
            { objective: "O3", q: "Bus wait times this week were 5, 6, 5, 7 and 60 minutes. Which number would you report as a typical wait?", options: ["The mean, 16.6", "The highest, 60", "The median, 6", "The total, 83"], answer: 2, why: "The 60 is an outlier that pulls the mean up; the median shows a typical wait." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Thinking like a data analyst",
        questions: [
          { objective: "O1", q: "What is the first step of a data project?", options: ["Make a chart", "Delete outliers", "Ask a clear question", "Share the results"], answer: 2, why: "A clear question guides every other step." },
          { objective: "O2", q: "In a table of games, \"team name\" is what type of column?", options: ["Categorical", "Numeric", "Date", "Outlier"], answer: 0, why: "Team names are groups, not numbers." },
          { objective: "O3", q: "What is the median of 2, 9, 3, 7, 5?", options: ["3", "5", "5.2", "7"], answer: 1, why: "Sorted: 2, 3, 5, 7, 9. The middle value is 5." },
          { objective: "O3", q: "One house in a list costs ten times more than the rest. Which describes a typical house better?", options: ["The mean", "The median", "The highest price", "The total"], answer: 1, why: "The median is not pulled much by one big outlier." },
          { objective: "O3", q: "Kids who play more sports get better grades. What should you NOT conclude right away?", options: ["That the two move together", "That sports cause the better grades", "That more data could help", "That other reasons may exist"], answer: 1, why: "Correlation alone does not prove causation." }
        ]
      }
    },
    {
      name: "Chapter 2: Analyzing data with Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Loading and looking at data with pandas",
          minutes: 5,
          goal: "Load a dataset into a pandas DataFrame in Colab and describe it.",
          text: [
            "pandas is a free Python library for working with tables, and it is already in Google Colab. A table in pandas is called a DataFrame, usually named df.",
            "For practice we use a real restaurant dataset of 244 meals that comes with seaborn, a charting library: df = sns.load_dataset(\"tips\"). It needs internet, which Colab has. Its columns include total_bill, tip, day, time (Lunch or Dinner) and size (people at the table). For your own data, pd.read_csv(\"file.csv\") loads a CSV file you upload.",
            "Four commands show you what you have: df.head() shows the first five rows, df.shape gives rows and columns, df.info() lists each column's type, and df.describe() gives the count, mean, min, max and more for the number columns."
          ],
          steps: ["In a new Colab notebook run: import pandas as pd and import seaborn as sns", "Load: df = sns.load_dataset(\"tips\")", "Look: df.head()", "Size and types: df.shape and df.info()", "Summary: df.describe()"],
          words: [["pandas", "a free Python library for working with tables of data."], ["DataFrame", "a table in pandas, with rows and named columns."], ["CSV", "a plain text file of a table, with commas between values."], ["head()", "shows the first rows of a DataFrame."], ["describe()", "gives summary numbers for each number column."]],
          slides: [
            { title: "pandas and DataFrames", bullets: ["pandas: Python's table tool", "A table is a DataFrame, often called df", "Already in Google Colab"] },
            { title: "Load the data", bullets: ["df = sns.load_dataset(\"tips\")", "Your own file: pd.read_csv(\"file.csv\")"] },
            { title: "Look before you analyze", bullets: ["df.head(): first rows", "df.shape and df.info(): size and types", "df.describe(): summary numbers"] }
          ],
          sources: [PANDAS, SEABORN, COLAB],
          tryIt: "Load the tips dataset in Colab. Write down how many rows and columns it has, which columns are numbers and which are categories, and the mean and maximum total_bill from df.describe().",
          youCanNow: "load a dataset with pandas and describe its size, columns and summary numbers.",
          quickCheck: [
            { objective: "O4", q: "What does df.info() show?", options: ["A bar chart", "Only the first row", "The missing values filled in", "Each column's type"], answer: 3, why: "df.info() lists each column and its type." },
            { objective: "O4", q: "You uploaded your club's file attendance.csv to Colab. Which line would you use to load it?", options: ["sns.load_dataset(\"attendance\")", "df = pd.read_csv(\"attendance.csv\")", "df.head(\"attendance.csv\")", "df.describe(\"attendance.csv\")"], answer: 1, why: "pd.read_csv loads a CSV file you upload." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Cleaning, filtering and grouping",
          minutes: 6,
          goal: "Check for missing values, add a column, filter rows and compare groups.",
          text: [
            "Clean first. df.isna().sum() counts missing values in each column. If some are missing, you can drop those rows with df.dropna() or decide how to fill them; write down what you did. Also check for impossible values, like a negative bill.",
            "Make the column you need. A $5 tip means different things on a $20 bill and a $100 bill, so add a fair measure: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100.",
            "Filter rows with a condition: df[df[\"time\"] == \"Dinner\"] keeps only dinners. Group to compare: df.groupby(\"day\")[\"tip_pct\"].mean() gives the average tip percent for each day. If pandas prints a yellow warning, read it, but it is not an error. .round(1) makes the numbers neater."
          ],
          steps: ["Count missing values: df.isna().sum()", "Add a column: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100", "Filter: dinners = df[df[\"time\"] == \"Dinner\"]", "Group: df.groupby(\"day\")[\"tip_pct\"].mean().round(1)", "Try another group, like time or size."],
          words: [["Missing value", "an empty cell; pandas shows it as NaN."], ["Cleaning", "finding and fixing missing, wrong or impossible values."], ["Filter", "keep only the rows that match a condition."], ["groupby", "split rows into groups and summarize each group."]],
          slides: [
            { title: "Clean first", bullets: ["df.isna().sum() counts missing values", "Drop or fill, and write down what you did", "Look for impossible values"] },
            { title: "Make a fair measure", bullets: ["tip_pct = tip / total_bill * 100", "Compares big and small bills fairly"] },
            { title: "Filter and group", bullets: ["df[df[\"time\"] == \"Dinner\"]", "df.groupby(\"day\")[\"tip_pct\"].mean()", "A warning is not an error"] }
          ],
          sources: [PANDAS],
          tryIt: "Check the tips data for missing values. Add the tip_pct column. Find the average tip percent for each day and for Lunch versus Dinner. Write down which day had the highest average.",
          youCanNow: "check data for missing values, create a new column, filter rows and compare groups.",
          quickCheck: [
            { objective: "O5", q: "What does df.dropna() do?", options: ["Adds a new column", "Counts the rows", "Drops rows that have missing values", "Makes a chart"], answer: 2, why: "dropna() removes rows with missing values; write down that you did it." },
            { objective: "O5", q: "You see a bill of -12.00 in the data. What would you do?", options: ["Treat it as an impossible value, fix or remove it, and note what you did", "Keep it; negative bills are normal", "Average it with the others anyway", "Hide it in the chart"], answer: 0, why: "Check for impossible values like a negative bill as part of cleaning." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Making a chart and sharing honest findings",
          minutes: 6,
          goal: "Make a clear bar chart and write findings people can trust.",
          text: [
            "A chart shows a pattern faster than a table. A bar chart is best for comparing groups: tip_by_day = df.groupby(\"day\")[\"tip_pct\"].mean() then tip_by_day.plot(kind=\"bar\", title=\"Average tip % by day\"). Give every chart a title and say what the numbers mean.",
            "Write findings in plain sentences with the number: \"On average, [day] tips were the highest, at about X percent of the bill.\" Use the number your own code printed.",
            "Be honest about limits. Say how many rows a group has: df[\"day\"].value_counts() shows a day with few meals, so its average is less reliable. This data came from one restaurant, so it may not hold for others. And it shows what happened, not why."
          ],
          steps: ["Make the grouped numbers.", "Plot them: .plot(kind=\"bar\", title=\"...\")", "Check group sizes with value_counts().", "Write three findings with real numbers.", "Add one limit: what the data cannot tell you."],
          words: [["Bar chart", "a chart of bars used to compare groups."], ["value_counts()", "counts how many rows each group has."], ["Finding", "a clear statement of what the data shows, with a number."], ["Limitation", "something your data or analysis cannot tell you."]],
          slides: [
            { title: "Bar charts compare groups", bullets: ["groupby, then .plot(kind=\"bar\")", "Always add a title"] },
            { title: "Write clear findings", bullets: ["Plain sentence plus the number", "Use the number your code printed"] },
            { title: "Be honest about limits", bullets: ["Small groups are less reliable", "One restaurant, not every restaurant", "Shows what happened, not why"] }
          ],
          sources: [PANDAS],
          tryIt: "Final task: in one notebook, load the tips data, check for missing values, add tip_pct, find the average tip percent by day and by time, make a bar chart of one of them with a title, and write three findings with numbers, including one thing this data cannot tell you.",
          youCanNow: "turn a dataset into a chart and honest, plain-language findings.",
          quickCheck: [
            { objective: "O6", q: "Which kind of chart is best for comparing groups, such as days?", options: ["A pie chart of one number", "A bar chart", "A table with no labels", "A chart with no title"], answer: 1, why: "A bar chart is best for comparing groups." },
            { objective: "O6", q: "Your chart shows Saturdays had higher tips. What would you add before sharing it?", options: ["A claim that Saturdays cause bigger tips everywhere", "Nothing; charts speak for themselves", "A made-up number to make it clearer", "A title and an honest limit, such as how many meals each day had"], answer: 3, why: "A title and an honest limit help people trust and understand the finding." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Analyzing data with Python",
        questions: [
          { objective: "O4", q: "In pandas, what is a DataFrame?", options: ["A picture frame", "A chart", "A Python error", "A table with rows and named columns"], answer: 3, why: "DataFrames are pandas tables." },
          { objective: "O5", q: "Which command counts missing values in each column?", options: ["df.isna().sum()", "df.head()", "df.plot()", "df.shape"], answer: 0, why: "isna marks missing cells and sum counts them." },
          { objective: "O5", q: "Why add a tip percent column instead of comparing tip dollars?", options: ["Dollars are not numbers", "pandas cannot use dollars", "A percent compares big and small bills fairly", "It makes the table smaller"], answer: 2, why: "Percent of the bill is a fair comparison." },
          { objective: "O5", q: "Which line gives the average tip percent for each day?", options: ["df[\"day\"].plot()", "df.mean(\"day\")", "df.head(\"day\")", "df.groupby(\"day\")[\"tip_pct\"].mean()"], answer: 3, why: "groupby splits by day; mean averages each group." },
          { objective: "O6", q: "One day has only 19 meals. What should your write-up say?", options: ["Nothing", "That the data is wrong", "That its average is less reliable because the group is small", "That it is the best day"], answer: 2, why: "Small groups make averages less certain." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to Data Science and Data Analysis",
    questions: [
      { objective: "O1", q: "Data science is mainly about:", options: ["Fixing computers", "Using data to answer questions and make decisions", "Typing faster", "Building websites"], answer: 1, why: "It turns data into answers." },
      { objective: "O1", q: "Which order is right for a data project?", options: ["Ask, Get, Clean, Explore, Share", "Share, Ask, Clean, Get, Explore", "Explore, Share, Ask, Get, Clean", "Clean, Share, Get, Ask, Explore"], answer: 0, why: "Start with the question and end by sharing." },
      { objective: "O2", q: "In tidy data, each row is:", options: ["One column", "One chart", "One thing you measured", "A total"], answer: 2, why: "One row per record." },
      { objective: "O2", q: "Which column is numeric?", options: ["Minutes played", "Team name", "Day of the week", "City"], answer: 0, why: "You can do math with minutes." },
      { objective: "O2", q: "Your data has no column about weather. Can you answer \"Do people tip more when it rains?\"", options: ["Yes, just guess", "Yes, use the mean", "Yes, use a chart", "No, and you should say so"], answer: 3, why: "A question needs data that covers it." },
      { objective: "O3", q: "What is the mean of 4, 6 and 8?", options: ["4", "6", "8", "18"], answer: 1, why: "18 / 3 = 6." },
      { objective: "O3", q: "What is the median of 1, 3, 3, 9, 50?", options: ["3", "9", "13.2", "50"], answer: 0, why: "The middle sorted value is 3." },
      { objective: "O3", q: "An outlier is:", options: ["The median", "A missing column", "A chart title", "A value far from the others"], answer: 3, why: "Outliers stand apart from the rest." },
      { objective: "O3", q: "Outliers pull which number more?", options: ["The mean", "The median", "The row count", "Neither"], answer: 0, why: "The mean uses every value, so extremes move it." },
      { objective: "O3", q: "Umbrella sales and car crashes both rise on rainy days. This shows:", options: ["Umbrellas cause crashes", "Crashes cause umbrella sales", "Correlation, likely caused by rain", "Nothing at all"], answer: 2, why: "A third factor, rain, drives both." },
      { objective: "O4", q: "pandas is:", options: ["A paid spreadsheet app", "A kind of chart", "A website", "A free Python library for tables of data"], answer: 3, why: "pandas handles DataFrames in Python." },
      { objective: "O4", q: "Which command shows the first five rows?", options: ["df.tail(0)", "df.shape", "df.head()", "df.sum()"], answer: 2, why: "head shows the top rows." },
      { objective: "O4", q: "df.shape returns (244, 7). What does that mean?", options: ["244 columns and 7 rows", "244 rows and 7 columns", "244 missing values", "7 charts"], answer: 1, why: "shape is rows, then columns." },
      { objective: "O4", q: "Which loads your own CSV file?", options: ["pd.read_csv(\"file.csv\")", "df.head(\"file.csv\")", "sns.plot(\"file.csv\")", "print(\"file.csv\")"], answer: 0, why: "read_csv reads a CSV into a DataFrame." },
      { objective: "O4", q: "df.describe() gives:", options: ["A bar chart", "The file name", "Summary numbers like mean, min and max", "Missing value fixes"], answer: 2, why: "describe summarizes number columns." },
      { objective: "O5", q: "Which keeps only dinner rows?", options: ["df[df[\"time\"] == \"Dinner\"]", "df[\"Dinner\"]", "df.dinner()", "df.drop(\"Dinner\")"], answer: 0, why: "A condition inside df[ ] filters rows." },
      { objective: "O5", q: "You find missing values and drop those rows. What else should you do?", options: ["Hide it", "Delete the whole dataset", "Nothing", "Write down what you did"], answer: 3, why: "Recording cleaning steps keeps the analysis honest." },
      { objective: "O6", q: "Which chart is best for comparing averages across days?", options: ["A photo", "A bar chart", "A single number", "A word cloud"], answer: 1, why: "Bars compare groups clearly." },
      { objective: "O6", q: "Which is a well-written finding?", options: ["\"Tips are good.\"", "\"Weekend sales averaged $420 a day, about 30% more than weekdays.\"", "\"Data shows stuff.\"", "\"Weekends are best because people are happy.\""], answer: 1, why: "It is specific, uses a number and claims no cause it cannot show." },
      { objective: "O6", q: "This tips data came from one restaurant. What is the right limit to state?", options: ["The results apply everywhere", "The data is fake", "There are no limits", "The results may not apply to other restaurants"], answer: 3, why: "One source cannot speak for all restaurants." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      4,
      6,
      8,
      9,
      11,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Loading and checking the data",
        objective: "O4",
        notYet: "The data does not load, or missing values were not checked.",
        meets: "The tips data is loaded, described and checked for missing values.",
        exceeds: "Also notes the number of rows and the type of each column used."
      },
      {
        name: "Tip percent column",
        objective: "O5",
        notYet: "No tip percent column, or it is calculated wrongly.",
        meets: "A tip_pct column equal to tip divided by total_bill times 100.",
        exceeds: "Also checks for impossible values such as a negative bill."
      },
      {
        name: "Group averages",
        objective: "O5",
        notYet: "Only one comparison, or the averages are wrong.",
        meets: "Average tip percent for each day and for lunch versus dinner, rounded.",
        exceeds: "Also shows how many meals are in each group."
      },
      {
        name: "Bar chart",
        objective: "O6",
        notYet: "No chart, or the chart has no title.",
        meets: "A bar chart of one comparison with a clear title.",
        exceeds: "Axis labels or a note say what the numbers mean."
      },
      {
        name: "Honest findings",
        objective: "O6",
        notYet: "Fewer than three findings, or no limit stated.",
        meets: "Three plain findings with numbers from the results, including one thing the data cannot tell you.",
        exceeds: "Also avoids claiming a cause and mentions small groups where they matter."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the tips analysis",
      "Learners who report analyzing a dataset of their own, such as for a team, club, class or job, in the 30 days after the course (follow-up survey)",
      "Learners who go on to a next course, such as Introduction to Machine Learning",
      "Learners who add the notebook to a portfolio or use it in an application for a data role or program"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or laptop with a web browser and internet",
      "A free Google account to use Google Colab",
      "Paper and pen to write the question and findings",
      "About 60 to 75 minutes in total, plus practice time"
    ],
    facilitatorNotes: [
      "Start with a question learners care about, such as a team's scores or a club's attendance, before opening any code.",
      "Work out the mean and median of a small list by hand together before using pandas.",
      "The tips dataset loads from the internet; test it on your network before class and have a CSV copy ready.",
      "Have learners read each other's findings and flag any claim of cause or any missing limit.",
      "If learners bring their own data, check it holds no private information about real people before they upload it."
    ]
  }
};
