"use strict";

// Koach Learn course: Athletes -> "Sports Analytics Fundamentals" (bonus). Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-sports-analytics",
  category: "Athletes",
  name: "Sports Analytics Fundamentals",
  skills: "Asking an analytics question, Cleaning a sports data table, Calculating averages, percentages and rates, Making a clear chart, Explaining a finding honestly",
  outcome: "answer one real question about a player or team with data: collect and clean a small table, calculate averages, percentages and per-game rates in Google Sheets, make one clear chart, and explain the finding and its limits in three sentences.",
  about: [
    "This course is for athletes, coaches, team managers and fans who want to understand the numbers behind sports and use them well. No math beyond basic arithmetic is needed.",
    "Analytics is not about having the most numbers. It is about asking a good question, using clean data, doing simple math right, showing it clearly, and being honest about what it does not prove. You will use Google Sheets and an AI assistant as a helper.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Answer one question about your team or a favorite team with data: write the question, collect at least 10 games of data from a box score or official stats page, clean it, calculate at least one average, one percentage and one per-game rate, make one chart, and write a three-sentence finding that includes one limit of your data.",
  chapters: [
    {
      name: "Chapter 1: Questions and data",
      lessons: [
        {
          title: "Starting with a good question",
          minutes: 4,
          goal: "Write a clear analytics question you can answer with data.",
          text: [
            "Analytics starts with a question, not a spreadsheet. A good question is specific and answerable: \"Does our team shoot a better three-point percentage at home or away?\" \"Is my serve accuracy better in the first set or the third?\"",
            "Avoid questions that are too big (\"Who is the best player ever?\") or that data cannot answer (\"Who tries the hardest?\").",
            "Write what data you need to answer it: which stats, how many games, and where you will get them."
          ],
          steps: ["Write a question about your team or a player.", "Make it specific: who, what stat, what comparison.", "Check data can answer it.", "List the data you need and where to get it."],
          words: [["Analytics", "using data to answer questions and make better decisions."], ["Data", "facts and numbers, like points, attempts and makes."]],
          slides: [
            { title: "Question first", bullets: ["Not the spreadsheet", "Specific and answerable"] },
            { title: "Good vs too big", bullets: ["Good: home vs away 3-point %", "Too big: \"best player ever?\"", "Not data: \"who tries hardest?\""] },
            { title: "Plan the data", bullets: ["Which stats", "How many games", "Where you'll get them"] }
          ],
          tryIt: "Write three analytics questions about your team or a favorite team. Ask an AI assistant which is the most answerable with box scores. Pick one and list the data you need.",
          youCanNow: "write a specific analytics question and plan the data to answer it."
        },
        {
          title: "Collecting and cleaning data",
          minutes: 6,
          goal: "Collect at least 10 games of data and clean it so it is ready to use.",
          text: [
            "Get data from reliable sources: your team's official stats, league or school athletics websites, or official box scores. Write down where each number came from.",
            "Put it in Google Sheets: one row per game, one column per stat, with a header row (Date, Opponent, Home/Away, 3PA, 3PM). Cleaning means fixing problems: typos, missing values, the same team spelled two ways, numbers stored as text, or duplicate rows.",
            "An AI assistant can help you spot problems: paste the table and ask, \"Find any typos, duplicates, missing values or inconsistent names. Don't change the numbers, just list the problems.\" Then fix them yourself, using the original source."
          ],
          steps: ["Find an official source for your stats.", "Set up one row per game, one column per stat.", "Enter at least 10 games.", "Check for typos, duplicates, missing values and inconsistent names.", "Fix them using the source, not guesses."],
          words: [["Box score", "a table of stats from one game."], ["Data cleaning", "fixing mistakes and gaps in data before using it."], ["Missing value", "a blank where a number should be."]],
          slides: [
            { title: "Reliable sources", bullets: ["Official team stats", "League or school athletics sites", "Write the source down"] },
            { title: "Table layout", bullets: ["One row per game", "One column per stat", "Header row with clear names"] },
            { title: "Clean it", bullets: ["Typos, duplicates, blanks", "Same name spelled two ways", "AI lists problems; you fix from the source"] }
          ],
          tryIt: "Enter at least 10 games of data into Google Sheets from an official source. Ask AI to list problems, then fix each one from the source.",
          youCanNow: "collect sports data from reliable sources and clean it."
        },
        {
          title: "Averages, percentages and rates",
          minutes: 6,
          goal: "Calculate an average, a percentage and a per-game rate in Google Sheets.",
          text: [
            "Average: add the values and divide by how many there are. In Sheets, =AVERAGE(B2:B11) gives the average of those cells.",
            "Percentage: makes divided by attempts. Three-point percentage = 3PM / 3PA. Add up the totals first, then divide: =SUM(E2:E11)/SUM(D2:D11). Averaging each game's percentage can give a wrong answer when attempts differ a lot.",
            "Rate: a stat per game, per minute or per attempt makes fair comparisons when playing time differs. Points per game = total points / games played. An AI assistant can explain any formula; check results with a calculator on one row."
          ],
          steps: ["Use =AVERAGE() for an average.", "For a percentage, divide total makes by total attempts.", "For a rate, divide a total by games or minutes.", "Format percentages as percent.", "Check one result with a calculator."],
          words: [["Average (mean)", "the total divided by how many values there are."], ["Percentage", "a part out of 100, like makes out of attempts."], ["Rate", "a stat per unit, like per game or per minute."]],
          slides: [
            { title: "Average", bullets: ["Total / how many", "=AVERAGE(B2:B11)"] },
            { title: "Percentage", bullets: ["Total makes / total attempts", "=SUM(makes)/SUM(attempts)", "Don't average game percentages"] },
            { title: "Rate", bullets: ["Per game, per minute, per attempt", "Fair when playing time differs", "Check one with a calculator"] }
          ],
          tryIt: "In your sheet, calculate one average, one percentage (totals method) and one per-game rate. Check one with a calculator.",
          youCanNow: "calculate averages, percentages and rates correctly in a spreadsheet."
        }
      ],
      check: {
        title: "Knowledge Check 1: Questions and data",
        questions: [
          { q: "Which is a good analytics question?", options: ["\"Who's the best ever?\"", "\"Who tries hardest?\"", "\"Do we shoot better from three at home or away?\"", "\"Are sports fun?\""], answer: 2, why: "It's specific and data can answer it." },
          { q: "Where should your data come from?", options: ["Official team, league or school stats", "Memory only", "A random comment", "Guesses"], answer: 0, why: "Reliable sources make reliable answers." },
          { q: "Data cleaning means:", options: ["Deleting all data", "Making numbers bigger", "Changing the source", "Fixing mistakes and gaps before using data"], answer: 3, why: "Clean data gives correct results." },
          { q: "Team three-point percentage over 10 games is best found by:", options: ["Averaging each game's percentage", "Total makes divided by total attempts", "Adding the percentages", "Guessing"], answer: 1, why: "Totals handle games with different attempts correctly." },
          { q: "Why use per-game or per-minute rates?", options: ["To make numbers bigger", "To compare fairly when playing time differs", "Because it's trendy", "To hide data"], answer: 1, why: "Rates adjust for opportunity." }
        ]
      }
    },
    {
      name: "Chapter 2: Showing and explaining",
      lessons: [
        {
          title: "Making a clear chart",
          minutes: 5,
          goal: "Make one chart that answers your question at a glance.",
          text: [
            "Pick the chart that fits the question. Comparing groups (home vs away): a bar chart. Change over time (points game by game): a line chart. Parts of a whole: usually a bar chart is clearer than a pie.",
            "Keep it clear: a title that states the finding (\"We shoot 6 points better from three at home\"), labeled axes, the y-axis starting at zero for bar charts, and no extra decoration.",
            "In Google Sheets, select your data and insert a chart, then choose the chart type and edit labels. You can ask an AI assistant which chart type fits your question."
          ],
          steps: ["Decide: comparing groups or change over time?", "Choose bar or line.", "Insert the chart in Sheets.", "Write a title that states the finding.", "Label axes; start bar charts at zero."],
          words: [["Bar chart", "a chart with bars to compare groups."], ["Line chart", "a chart with a line to show change over time."], ["Axis", "the line along the side or bottom of a chart with labels."]],
          slides: [
            { title: "Pick the chart", bullets: ["Compare groups: bar", "Change over time: line", "Bar is usually clearer than pie"] },
            { title: "Keep it clear", bullets: ["Title states the finding", "Labeled axes", "Bars start at zero"] },
            { title: "In Sheets", bullets: ["Select data, insert chart", "Choose type, edit labels"] }
          ],
          tryIt: "Make one chart that answers your question. Give it a title that states the finding, and label both axes.",
          youCanNow: "make a clear chart that answers a question at a glance."
        },
        {
          title: "Correlation, sample size and other traps",
          minutes: 5,
          goal: "Spot three common traps that make numbers mislead.",
          text: [
            "Small samples: three games are not enough to prove much. A player who goes 4 for 5 is not a guaranteed 80 percent shooter. More games make you more confident.",
            "Correlation is not causation: if a team wins more when it wears blue, the jersey probably isn't the reason. Two things moving together doesn't mean one causes the other; look for other explanations, like opponent strength or home games.",
            "Context matters: stats don't capture everything, like defensive effort, injuries, or the quality of opponents. An AI assistant can help you list other explanations: \"What else could explain this pattern?\""
          ],
          steps: ["Check the sample size.", "Ask: could something else explain it?", "Look at context: opponents, injuries, home/away.", "Ask AI for other explanations.", "Write how confident you are."],
          words: [["Sample size", "how many games or attempts your data includes."], ["Correlation", "two things that tend to move together."], ["Causation", "when one thing actually causes another."]],
          slides: [
            { title: "Small samples", bullets: ["4 for 5 isn't a proven 80%", "More games, more confidence"] },
            { title: "Correlation is not causation", bullets: ["Blue jerseys don't win games", "Look for other explanations"] },
            { title: "Context", bullets: ["Opponents, injuries, home/away", "Effort and defense aren't always counted"] }
          ],
          tryIt: "Look at your finding. Write the sample size, two other things that could explain it, and how confident you are (low, medium, high).",
          youCanNow: "spot small samples, correlation-causation mix-ups and missing context."
        },
        {
          title: "Explaining your finding",
          minutes: 5,
          goal: "Write and share a three-sentence finding with its limits.",
          text: [
            "A good finding has three sentences: 1. What you found, with a number. 2. Why it might matter for the team. 3. One limit of the data. Example: \"Over 12 games we shot 38% from three at home and 31% away. If that holds, practicing road-game routines might help. With only 6 road games, this could be chance.\"",
            "Ask an AI assistant to make your sentences clearer, then check the numbers yourself. Show the chart with it.",
            "Share it with your coach as information, not a demand. Coaches combine numbers with what they see. Never share individual players' data publicly without permission."
          ],
          steps: ["Sentence 1: what you found, with a number.", "Sentence 2: why it might matter.", "Sentence 3: one limit.", "Add your chart.", "Share with your coach, not publicly."],
          words: [["Finding", "what your analysis shows."], ["Limit", "a reason the finding might not be fully reliable."]],
          slides: [
            { title: "Three sentences", bullets: ["1. What you found, with a number", "2. Why it might matter", "3. One limit"] },
            { title: "Polish", bullets: ["AI makes it clearer", "You check the numbers", "Add your chart"] },
            { title: "Share well", bullets: ["Information, not a demand", "Coach combines data and eyes", "No public player data without permission"] }
          ],
          tryIt: "Final task: write your three-sentence finding with your chart, sample size and source, and share it with your coach or a teammate.",
          youCanNow: "explain a data finding honestly, including its limits."
        }
      ],
      check: {
        title: "Knowledge Check 2: Showing and explaining",
        questions: [
          { q: "Which chart fits \"points game by game over the season\"?", options: ["A pie chart", "No chart", "A map", "A line chart"], answer: 3, why: "Line charts show change over time." },
          { q: "A good chart title:", options: ["States the finding", "Says \"Chart 1\"", "Is blank", "Is a joke"], answer: 0, why: "It tells the reader what to see." },
          { q: "A player goes 4 for 5 in one game. This proves:", options: ["They are an 80% shooter", "They should take every shot", "Not much; the sample is small", "Nothing about anything ever"], answer: 2, why: "Small samples can mislead." },
          { q: "A team wins more in blue jerseys. Most likely:", options: ["Blue causes wins", "Never wear red", "The data is fake", "Something else explains it"], answer: 3, why: "Correlation is not causation." },
          { q: "Sentence 3 of a finding is:", options: ["A demand to the coach", "One limit of the data", "A joke", "Your password"], answer: 1, why: "Honest findings include limits." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Sports Analytics Fundamentals",
    questions: [
      { q: "Analytics starts with:", options: ["A spreadsheet", "A chart", "A question", "A guess"], answer: 2, why: "The question guides everything else." },
      { q: "Which question can data NOT answer well?", options: ["\"Who tries the hardest?\"", "\"Do we score more at home?\"", "\"Is my serve better in set 1?\"", "\"Do we turn it over more in the 4th?\""], answer: 0, why: "Effort isn't measured in box scores." },
      { q: "A box score is:", options: ["A table of stats from one game", "A gift box", "A type of chart", "A team bench"], answer: 0, why: "It lists one game's stats." },
      { q: "In your table, each row should be:", options: ["One season", "One random number", "One game", "One chart"], answer: 2, why: "One row per game keeps it organized." },
      { q: "\"Lincoln HS\" and \"Lincoln High\" in the same column is:", options: ["Fine", "Inconsistent names to clean", "A chart", "A formula"], answer: 1, why: "Same team, two spellings breaks counts." },
      { q: "AI finds a missing value. You fix it by:", options: ["Guessing", "Letting AI invent it", "Deleting the column", "Checking the original source"], answer: 3, why: "Fix from the source, not guesses." },
      { q: "=AVERAGE(B2:B11) gives:", options: ["The total", "The biggest value", "The average of those cells", "The chart"], answer: 2, why: "AVERAGE computes the mean." },
      { q: "Three-point percentage equals:", options: ["3PA divided by 3PM", "3PM plus 3PA", "Points divided by games", "3PM divided by 3PA"], answer: 3, why: "Makes over attempts." },
      { q: "Why not average each game's percentage?", options: ["Games with different attempts get weighted wrong", "It's illegal", "It's always right", "Sheets can't do it"], answer: 0, why: "Use totals for a true percentage." },
      { q: "Points per game is a:", options: ["Percentage", "Rate", "Chart", "Box score"], answer: 1, why: "It's a stat per game." },
      { q: "Check a formula by:", options: ["Trusting it", "Deleting it", "Doing one row with a calculator", "Asking a fan"], answer: 2, why: "One manual check catches mistakes." },
      { q: "To compare home and away, use:", options: ["A bar chart", "A line chart over time only", "No chart", "A photo"], answer: 0, why: "Bars compare groups." },
      { q: "Bar charts should usually start the y-axis at:", options: ["The smallest value", "100", "Anywhere", "Zero"], answer: 3, why: "Otherwise differences look bigger than they are." },
      { q: "Usually clearer than a pie chart:", options: ["A 3D pie", "A bar chart", "A word cloud", "A blank page"], answer: 1, why: "Bars are easier to compare." },
      { q: "Sample size means:", options: ["Your shoe size", "How many games or attempts are in your data", "The chart size", "The team size"], answer: 1, why: "More data means more confidence." },
      { q: "Correlation means:", options: ["One causes the other", "A type of chart", "A cleaning step", "Two things tend to move together"], answer: 3, why: "Moving together isn't causing." },
      { q: "Which is context that stats might miss?", options: ["Opponent strength and injuries", "Points", "Rebounds", "Final score"], answer: 0, why: "Context explains numbers." },
      { q: "A good finding includes:", options: ["Only opinions", "Every stat", "A number, why it matters and a limit", "No numbers"], answer: 2, why: "That's the three-sentence format." },
      { q: "You share a finding with your coach as:", options: ["An order", "A social post", "A secret", "Information, not a demand"], answer: 3, why: "Coaches combine data with what they see." },
      { q: "Individual players' data should be shared publicly:", options: ["Always", "Only with permission", "To rival teams", "In comments"], answer: 1, why: "Player data is personal." }
    ]
  }
};
