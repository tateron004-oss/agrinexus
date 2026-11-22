"use strict";

// Koach Learn course: Workforce Development (wave 1, adult basic education) -> "GED Test Preparation: Science".
// Prepares learners for the GED Science test from the GED Testing Service. It does not grant the GED credential.
// ADDIE model: re-entry/reentry-ai-digital-confidence.js. Test facts checked on ged.com on 30 October 2026.

const GED_SUBJECTS = { name: "GED Testing Service: test subjects (time, question types, calculator)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SCIENCE = { name: "GED Testing Service: Science test", url: "https://ged.com/about_test/test_subjects/science/" };
const GED_SCORES = { name: "GED Testing Service: scores", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: free sample tests (English and Spanish)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, the official practice test", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, another high school equivalency test (official site)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-science",
  category: "Workforce Development",
  name: "GED Test Preparation: Science",
  skills: "Reading science passages, Spotting variables in an experiment, Reading tables and graphs, Science math (mean, median, range, formulas), Judging conclusions, Making a study plan",
  outcome: "read a science passage, a table or a graph and answer GED-style questions about it, name the variables in an experiment, do the science math the test asks for, and judge whether a conclusion is supported by the data.",
  about: [
    "This course is for adults getting ready for the GED Science test: job seekers, people coming home from prison, veterans, young adults, immigrants and anyone returning to learning. You do not need to be a science expert. The test is mostly about reading science, understanding experiments and working with numbers and graphs.",
    "The course prepares you for the test. It does not give you the GED credential. The GED Testing Service runs the test, and your state sets the rules for taking it. Some states use a different test called HiSET. Check ged.com and your state's adult education office for current rules, fees and testing.",
    "Each lesson teaches one skill with worked examples and a \"Try it now\" practice with answers explained, then a two-question quick check. There is a knowledge check after each chapter and a 20-question quiz at the end.",
    "The final task is your own small, safe kitchen experiment: you plan a fair test, record the data in a table, find the average, sketch a graph and write a conclusion the data supports."
  ],
  finalTask: "Plan and run a small, safe kitchen experiment (for example: does the amount of stirring change how fast sugar dissolves in water?). Write a question and hypothesis, name the independent, dependent and controlled variables, repeat each trial three times, record the results in a table, find the mean for each group, sketch a bar graph, and write a two-sentence conclusion that the data supports. Add your dated GED study plan at the bottom.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults preparing for the GED Science test: job seekers, people coming home from prison, veterans, young adults who left school, immigrants and adults returning to learning after many years.",
    startingPoint: "Can read everyday text and do basic arithmetic. Many have not taken a science class in years and feel the subject is hard or full of facts to memorize. Some are still building English or math confidence.",
    gap: "The GED Science test is about reading science text, understanding how experiments work, and using numbers, tables and graphs. These are learnable skills, and they are also used at work in healthcare, manufacturing, labs and the trades.",
    constraints: [
      "Reading level: plain words and short sentences; every science word is explained",
      "Devices: a phone, a library computer, or paper and pen; a basic calculator helps",
      "Time: 4 to 6 minute lessons that fit around work, appointments and family",
      "Safety: home experiments use only water, sugar, salt and room-temperature or warm tap water; no heat, flames or chemicals",
      "Test rules, fees and which test a state uses (GED or HiSET) change; learners check ged.com and their state"
    ],
    prerequisites: "None. Learners who need help with averages or reading a graph can take the GED Math course or an everyday math course at the same time."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Using the official GED website", action: "list the parts, question types, time and tools of the GED Science test and write a study plan with dates", standard: "with all three skill areas named and at least one study date each week until the test" },
    { id: "O2", condition: "Given a short science passage", action: "identify the main idea and the claim that the passage's evidence supports", standard: "pointing to the sentence or number that supports each answer" },
    { id: "O3", condition: "Given a description of an experiment", action: "name the hypothesis and the independent, dependent and controlled variables", standard: "getting at least 4 of 5 right" },
    { id: "O4", condition: "Given a table or a graph", action: "read values, describe the trend and choose the conclusion the data supports", standard: "without adding facts that are not in the data" },
    { id: "O5", condition: "Given a small set of data or a formula", action: "calculate the mean, median, mode and range or use the formula to find an answer", standard: "with the right units and getting at least 4 of 5 right" }
  ],
  chapters: [
    {
      name: "Chapter 1: Reading science and understanding experiments",
      lessons: [
        {
          title: "How the GED Science test works",
          objectives: ["O1"],
          minutes: 5,
          goal: "List the parts and tools of the GED Science test and write a study plan with dates.",
          text: [
            "The GED has four tests: Math, Reasoning Through Language Arts, Science and Social Studies. You can take them one at a time. The GED Testing Service makes the test. Some states use another high school equivalency test, HiSET, so check which test your state uses.",
            "On ged.com, the Science test is listed as 90 minutes with no break. It covers three skill areas: reading for meaning in science, designing and interpreting science experiments, and using numbers and graphics in science. Questions are multiple choice, fill in the blank, drag and drop, select an area and drop-down.",
            "You get an on-screen calculator and a calculator reference sheet, and ged.com says you may bring your own TI-30XS calculator to a test center. Ged.com also says you do not need to memorize formulas: the information you need is given with each question. It is not a test of memorized facts; it tests how you read and reason.",
            "Ged.com lists a passing score of 145 for each subject. Times and rules can change, so check ged.com before you book. Ged.com has free sample tests and an official practice test, GED Ready."
          ],
          steps: ["Go to ged.com and read the Science test page.", "Write down the time, the three skill areas and the tools you get.", "Take the free sample Science test to see where you stand.", "Pick a target test week.", "Write at least one study date each week, with the skill you will practice."],
          words: [["GED", "a high school equivalency test; passing all four subjects earns a credential that many employers and colleges accept like a diploma."], ["HiSET", "another high school equivalency test that some states use."], ["TI-30XS", "the model of hand calculator the GED test uses on screen and allows at test centers."], ["Calculator reference sheet", "a sheet given on the test that shows how to use the calculator's keys."]],
          slides: [
            { title: "The GED Science test (check ged.com)", bullets: ["90 minutes, no break", "Multiple choice and other question types", "Passing score listed: 145"] },
            { title: "Three skill areas", bullets: ["Reading for meaning in science", "Designing and interpreting experiments", "Using numbers and graphics"] },
            { title: "Tools you get", bullets: ["On-screen calculator and reference sheet", "You may bring a TI-30XS to a test center", "Needed information is given with each question"] },
            { title: "Make a plan", bullets: ["Take the free sample test first", "Pick a target test week", "Study a little, most days of the week"] }
          ],
          sources: [GED_SUBJECTS, GED_SCIENCE, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Open ged.com and take the free Science sample test (or read the Science page if you cannot take it now). Write your study plan: your target test week and one date each week with the skill you will practice: reading science, experiments, or numbers and graphs. Keep it for the final task.",
          youCanNow: "name the parts and tools of the GED Science test and follow a study plan with dates.",
          quickCheck: [
            { objective: "O1", q: "According to ged.com, what do you need to memorize for the GED Science test?", options: ["Every formula in science", "The periodic table", "Not formulas: the information you need is given with each question", "The names of all scientists"], answer: 2, why: "Ged.com says you do not need to memorize formulas; the needed information is provided." },
            { objective: "O1", q: "Which is one of the three skill areas of the Science test?", options: ["Designing and interpreting science experiments", "Spelling science words", "Drawing animals", "Building a computer"], answer: 0, why: "Ged.com lists reading for meaning, experiments, and numbers and graphics." }
          ]
        },
        {
          title: "Reading a science passage",
          objectives: ["O2"],
          minutes: 5,
          goal: "Identify the main idea of a science passage and the claim its evidence supports.",
          text: [
            "Science passages look hard because of new words, but you read them the same way as any passage. Find what it is mostly about, and find the facts and numbers that back it up. Often the passage explains a hard word right in the text. Look for \"is called\", \"means\" or a word in commas after it.",
            "Worked example. \"Sweat cools the body. When sweat evaporates, or turns from liquid into gas, it takes heat away from the skin. On humid days, the air already holds a lot of water, so sweat evaporates more slowly.\" Main idea: sweating cools the body by evaporation. Supported claim: you may feel hotter on humid days because sweat dries more slowly.",
            "A claim is supported only if the passage gives evidence for it. \"Sweating burns fat\" is not supported; the passage says nothing about fat. Pick the answer that the text proves, not the one that sounds most scientific."
          ],
          steps: ["Read the question first.", "Read the passage; circle new words and look for their meaning nearby.", "Say the main idea in one sentence.", "For each answer choice, ask: where does the passage prove this?", "Cross out choices that add facts the passage does not give."],
          words: [["Evaporate", "to change from a liquid into a gas, like a puddle drying up."], ["Humid", "when the air holds a lot of water vapor."], ["Claim", "a statement that something is true."], ["Supported", "backed up by evidence in the text or data."]],
          slides: [
            { title: "Read science like any passage", bullets: ["What is it mostly about?", "Which facts and numbers back it up?"] },
            { title: "New words", bullets: ["Look for \"is called\" or \"means\"", "Look for a meaning in commas after the word"] },
            { title: "Supported or not?", bullets: ["Supported: the passage proves it", "Not supported: it adds facts not in the text", "Do not pick an answer just because it sounds smart"] }
          ],
          tryIt: "Practice passage: \"Plants make their own food through photosynthesis. They use light, water and carbon dioxide, a gas in the air, to make sugar. They release oxygen as a result.\" 1) Main idea? 2) Which claim is supported: (a) a plant kept in a dark closet will have trouble making food, or (b) plants need soda to grow? Answers: 1) Plants make food from light, water and carbon dioxide. 2) (a): the passage says plants need light. (b) is not in the text.",
          youCanNow: "find the main idea of a science passage and pick the claim its evidence supports.",
          quickCheck: [
            { objective: "O2", q: "A passage says, \"Vaccines train the immune system, the body's defense system, to recognize germs.\" What does \"immune system\" mean here?", options: ["A kind of germ", "The body's defense system", "A doctor's office", "A type of medicine you swallow"], answer: 1, why: "The meaning is given in the commas right after the word." },
            { objective: "O2", q: "A passage says steel rusts faster in wet, salty air. Which claim is supported?", options: ["Steel never rusts", "Salt makes steel stronger", "Rust only happens in deserts", "A steel bridge near the ocean may need more rust protection"], answer: 3, why: "Ocean air is wet and salty, and the passage says that speeds up rust." }
          ]
        },
        {
          title: "Experiments: hypothesis and variables",
          objectives: ["O3"],
          minutes: 6,
          goal: "Name the hypothesis and the independent, dependent and controlled variables in an experiment.",
          text: [
            "An experiment tests a question. The hypothesis is a testable guess about the answer, often written \"If ..., then ...\". For example: \"If plants get more hours of light, then they will grow taller.\"",
            "The independent variable is the one thing the scientist changes on purpose (hours of light). The dependent variable is what is measured to see the effect (plant height). Controlled variables are kept the same so the test is fair (same kind of plant, same pot, same water, same soil).",
            "A trick to remember: the dependent variable depends on the independent one. Height depends on light. A fair test changes only one thing at a time. If you change light and water together, you cannot tell which one made the plant grow.",
            "Good experiments repeat each trial several times and often have a control group, a group that gets no change, to compare against. More trials make the results more reliable."
          ],
          steps: ["Find the question being tested.", "Find the one thing changed on purpose: the independent variable.", "Find what is measured: the dependent variable.", "List what is kept the same: the controlled variables.", "Check only one thing changes, and that trials are repeated."],
          words: [["Hypothesis", "a testable guess, often \"If ..., then ...\"."], ["Independent variable", "the one thing you change on purpose."], ["Dependent variable", "what you measure to see the effect."], ["Controlled variable", "something you keep the same so the test is fair."], ["Control group", "a group that gets no change, used for comparison."]],
          slides: [
            { title: "Hypothesis", bullets: ["A testable guess", "\"If more light, then taller plants\""] },
            { title: "Three kinds of variables", bullets: ["Independent: what you change", "Dependent: what you measure", "Controlled: what you keep the same"] },
            { title: "A fair test", bullets: ["Change only one thing", "Repeat each trial", "Compare with a control group"] }
          ],
          tryIt: "Practice: A worker tests whether a new glove keeps hands warmer. Ten workers wear the new glove and ten wear the old glove, outside for 30 minutes at the same time. Hand temperature is measured. Name: 1) independent variable, 2) dependent variable, 3) two controlled variables, 4) a hypothesis. Answers: 1) type of glove; 2) hand temperature; 3) time outside, same weather, same time of day; 4) \"If workers wear the new glove, then their hands will be warmer.\"",
          youCanNow: "read an experiment and name its hypothesis and its variables, and spot an unfair test.",
          quickCheck: [
            { objective: "O3", q: "A student tests if salt changes how fast ice melts. What is the dependent variable?", options: ["The amount of salt", "The size of the ice cubes", "The room temperature", "The time it takes the ice to melt"], answer: 3, why: "Melting time is what is measured; it depends on the salt." },
            { objective: "O3", q: "Why should an experiment change only one thing at a time?", options: ["So you know which change caused the result", "So it is faster", "So it uses less paper", "It does not matter"], answer: 0, why: "If two things change, you cannot tell which one made the difference." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Reading science and understanding experiments",
        questions: [
          { objective: "O1", q: "Which tool does ged.com say you get on the Science test?", options: ["A phone", "An on-screen calculator and a calculator reference sheet", "A science textbook", "A notebook of formulas you wrote"], answer: 1, why: "Ged.com lists an on-screen calculator and a calculator reference sheet." },
          { objective: "O2", q: "A passage says, \"Exercise raises heart rate, the number of heartbeats per minute.\" Which claim is supported?", options: ["Exercise lowers heart rate", "Heart rate is measured in miles", "Exercise makes the heart beat more times per minute", "Heart rate does not change"], answer: 2, why: "The passage says exercise raises heartbeats per minute." },
          { objective: "O3", q: "\"If I water tomatoes every day, then they will grow more fruit.\" What is this?", options: ["A conclusion", "A hypothesis", "A data table", "A control group"], answer: 1, why: "It is a testable \"If ..., then ...\" guess." },
          { objective: "O3", q: "In the tomato test, what is the independent variable?", options: ["How often the plants are watered", "The amount of fruit", "The kind of soil", "The size of the pots"], answer: 0, why: "Watering is what is changed on purpose." },
          { objective: "O3", q: "Which is a controlled variable in the tomato test?", options: ["How often they are watered", "The number of tomatoes grown", "The hypothesis", "The same kind of tomato plant for every group"], answer: 3, why: "Using the same plant type keeps the test fair." }
        ]
      }
    },
    {
      name: "Chapter 2: Numbers, tables and graphs in science",
      lessons: [
        {
          title: "Reading tables and graphs",
          objectives: ["O4"],
          minutes: 5,
          goal: "Read values from a table or graph, describe the trend and pick the conclusion the data supports.",
          text: [
            "Many science questions give you a table or a graph. First read the title, the labels and the units. On a graph, the label on the bottom (x-axis) is usually the independent variable, and the label on the side (y-axis) is the dependent variable.",
            "Worked example. Table: \"Hours of light per day: 4, 8, 12. Average plant height after 3 weeks: 5 cm, 9 cm, 14 cm.\" Read a value: at 8 hours, plants grew 9 cm. Trend: as light goes up, height goes up. Supported conclusion: in this test, more light went with taller plants.",
            "Do not go past the data. The table does not show 20 hours of light, so you cannot say what happens then. It also does not show water or soil, so a conclusion about them is not supported.",
            "Graph types: a bar graph compares groups, a line graph shows change over time or a trend, and a pie chart shows parts of a whole."
          ],
          steps: ["Read the title, labels and units.", "Find the value the question asks about.", "Describe the trend: up, down, or no clear pattern.", "Choose the conclusion that stays inside the data.", "Cross out answers about things the data does not show."],
          words: [["Trend", "the general direction of data: going up, going down or staying flat."], ["X-axis", "the line across the bottom of a graph."], ["Y-axis", "the line up the side of a graph."], ["Units", "what a number is measured in, like cm, degrees or minutes."]],
          slides: [
            { title: "Read the labels first", bullets: ["Title, labels and units", "Bottom (x-axis): usually what was changed", "Side (y-axis): usually what was measured"] },
            { title: "Find the trend", bullets: ["Up, down, or no clear pattern", "Say it in one sentence"] },
            { title: "Stay inside the data", bullets: ["No guessing beyond the numbers shown", "No conclusions about things not measured"] },
            { title: "Graph types", bullets: ["Bar: compares groups", "Line: change over time", "Pie: parts of a whole"] }
          ],
          tryIt: "Practice table: \"Water temperature (degrees C): 10, 20, 30, 40. Time for a sugar cube to dissolve (seconds): 120, 90, 60, 40.\" 1) How long at 30 degrees? 2) What is the trend? 3) Which conclusion is supported: (a) warmer water dissolved sugar faster in this test, or (b) salt dissolves faster than sugar? Answers: 1) 60 seconds. 2) As temperature goes up, dissolving time goes down. 3) (a); salt was not tested.",
          youCanNow: "read a table or graph, describe its trend, and choose a conclusion the data supports.",
          quickCheck: [
            { objective: "O4", q: "A graph shows a town's average temperature rising each decade from 1980 to 2020. What is the trend?", options: ["Falling", "No change", "Rising over time", "It cannot be read"], answer: 2, why: "The values go up across the decades." },
            { objective: "O4", q: "A table shows plant height for 4, 8 and 12 hours of light. Which conclusion goes beyond the data?", options: ["Plants with 8 hours grew taller than plants with 4", "Plants given 24 hours of light will be the tallest", "Height went up as light went up", "Plants with 12 hours grew the most in this test"], answer: 1, why: "24 hours was not tested, so the data cannot tell you that." }
          ]
        },
        {
          title: "Science math: averages, range and formulas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculate the mean, median, mode and range of a data set and use a given formula.",
          text: [
            "Data set (practice only): heart rates after a walk, in beats per minute: 80, 84, 84, 90, 92. Mean (average): add them and divide by how many: 430 / 5 = 86. Median: the middle number when they are in order: 84. Mode: the number that appears most: 84. Range: largest minus smallest: 92 - 80 = 12.",
            "If there is an even number of values, the median is the mean of the two middle numbers. For 3, 5, 7, 9: (5 + 7) / 2 = 6.",
            "Formulas are given on the test. Plug in the numbers and keep the units. Speed = distance / time: a truck goes 120 miles in 2 hours, so speed = 120 / 2 = 60 miles per hour. Density = mass / volume: a block of 40 grams with a volume of 20 cubic centimeters has density 40 / 20 = 2 grams per cubic centimeter.",
            "Check that your answer makes sense. A mean must be between the smallest and largest values. Write the unit with every answer."
          ],
          steps: ["Put the data in order from smallest to largest.", "Mean: add all values and divide by how many.", "Median: find the middle (or the average of the two middle values).", "Mode: the most common value. Range: largest minus smallest.", "For a formula: write it, plug in numbers, solve, and add the units."],
          words: [["Mean", "the average: the total divided by how many values."], ["Median", "the middle value when numbers are in order."], ["Mode", "the value that appears most often."], ["Range", "the largest value minus the smallest."], ["Density", "how much mass is packed into a space: mass divided by volume."]],
          slides: [
            { title: "Four numbers that describe data", bullets: ["Mean: total divided by how many", "Median: the middle value in order", "Mode: the most common value", "Range: largest minus smallest"] },
            { title: "Worked example", bullets: ["Data: 80, 84, 84, 90, 92", "Mean 86, median 84, mode 84, range 12"] },
            { title: "Using a given formula", bullets: ["Speed = distance / time", "Density = mass / volume", "Plug in, solve, write the units"] }
          ],
          tryIt: "Practice only. 1) Minutes for an ice cube to melt in five trials: 6, 7, 7, 8, 12. Find the mean, median, mode and range. 2) A cyclist rides 30 miles in 3 hours. Speed = distance / time. Answers: 1) Mean 40 / 5 = 8 minutes; median 7; mode 7; range 12 - 6 = 6 minutes. 2) 30 / 3 = 10 miles per hour.",
          youCanNow: "find the mean, median, mode and range of data and use a science formula with the right units.",
          quickCheck: [
            { objective: "O5", q: "Data: 2, 4, 4, 6, 9. What is the mean?", options: ["4", "5", "6", "7"], answer: 1, why: "2 + 4 + 4 + 6 + 9 = 25, and 25 / 5 = 5." },
            { objective: "O5", q: "A rock has mass 60 grams and volume 20 cubic centimeters. Density = mass / volume. What is the density?", options: ["40 grams per cubic centimeter", "1,200 grams per cubic centimeter", "80 grams per cubic centimeter", "3 grams per cubic centimeter"], answer: 3, why: "60 / 20 = 3 grams per cubic centimeter." }
          ]
        },
        {
          title: "Putting it together: your own fair test",
          objectives: ["O3", "O4", "O5"],
          minutes: 6,
          goal: "Plan a fair test, record data in a table, find the mean and write a conclusion the data supports.",
          text: [
            "Now use every skill at once. Many test questions describe a whole experiment with a table, then ask about the variables, the math and the conclusion. Doing a small experiment yourself makes these questions much easier.",
            "Safe kitchen example. Question: does stirring change how fast sugar dissolves? Hypothesis: if the water is stirred, then the sugar will dissolve faster. Independent variable: stirred or not stirred. Dependent variable: time to dissolve (seconds). Controlled: same cup, same amount of tap water, same water temperature, one sugar cube each time. Do three trials of each.",
            "Sample results (practice only). Stirred: 40, 45, 50 seconds; mean 45. Not stirred: 170, 180, 190 seconds; mean 180. Conclusion: in this test, stirring made sugar dissolve faster, about 4 times faster on average. A bar graph with two bars (stirred, not stirred) shows this clearly.",
            "Safety: use only tap water at room temperature or warm from the tap, sugar or salt, and clean cups. No stove, no flames and no cleaning chemicals. Do not drink or taste anything during the test."
          ],
          steps: ["Write your question and an \"If ..., then ...\" hypothesis.", "Name the independent, dependent and controlled variables.", "Run at least three trials of each group and write the results in a table.", "Find the mean for each group.", "Sketch a bar graph and write a two-sentence conclusion that stays inside your data."],
          words: [["Trial", "one run of an experiment."], ["Data table", "rows and columns that hold your results."], ["Conclusion", "what the results show, in a sentence or two."]],
          slides: [
            { title: "Your fair test", bullets: ["Question and hypothesis", "Independent, dependent, controlled variables", "Three trials per group"] },
            { title: "Record and calculate", bullets: ["Write results in a table", "Find the mean of each group", "Sketch a bar graph"] },
            { title: "Write the conclusion", bullets: ["Say what the data shows", "Stay inside your data", "Name one way to improve the test"] },
            { title: "Stay safe", bullets: ["Tap water, sugar or salt only", "No stove, flames or chemicals", "Do not taste or drink the samples"] }
          ],
          tryIt: "Final task: run your own small, safe kitchen experiment (stirring and sugar, or another one-change test with water, sugar or salt). Write the question, hypothesis and variables, record three trials per group in a table, find each mean, sketch a bar graph and write a two-sentence conclusion. Add your dated GED study plan at the bottom and score it with the rubric.",
          youCanNow: "plan and run a fair test, record and average the data, and write a conclusion that the data supports.",
          quickCheck: [
            { objective: "O3", q: "In the stirring test, which must stay the same for a fair test?", options: ["The amount and temperature of the water", "Whether the water is stirred", "The time to dissolve", "The conclusion"], answer: 0, why: "Water amount and temperature are controlled variables; only stirring changes." },
            { objective: "O4", q: "Stirred mean: 45 seconds. Not stirred mean: 180 seconds. Which conclusion is supported?", options: ["Stirring makes sugar sweeter", "In this test, stirring made sugar dissolve faster", "Salt dissolves faster than sugar", "Stirring has no effect"], answer: 1, why: "The stirred cups dissolved much faster, and the conclusion stays inside the data." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Numbers, tables and graphs in science",
        questions: [
          { objective: "O4", q: "On most science graphs, what is shown on the bottom axis (x-axis)?", options: ["The title", "The conclusion", "Usually the independent variable, what was changed", "The units of money"], answer: 2, why: "The x-axis usually shows what the scientist changed." },
          { objective: "O4", q: "Which graph is best to compare the average height of plants in three groups?", options: ["A bar graph", "A map", "A pie chart of the whole garden", "A photo"], answer: 0, why: "Bar graphs compare groups side by side." },
          { objective: "O5", q: "Data: 10, 12, 15, 15, 18. What is the range?", options: ["15", "14", "13", "8"], answer: 3, why: "18 - 10 = 8." },
          { objective: "O5", q: "Data: 3, 8, 6, 1, 7. What is the median?", options: ["3", "6", "7", "5"], answer: 1, why: "In order: 1, 3, 6, 7, 8. The middle value is 6." },
          { objective: "O5", q: "A bus goes 150 miles in 3 hours. Speed = distance / time. What is the speed?", options: ["450 miles per hour", "153 miles per hour", "50 miles per hour", "147 miles per hour"], answer: 2, why: "150 / 3 = 50 miles per hour." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: GED Test Preparation: Science",
    questions: [
      { objective: "O1", q: "What does this course do for you?", options: ["Prepares you for the GED Science test", "Gives you a GED credential", "Makes you a licensed scientist", "Replaces the GED test"], answer: 0, why: "The course prepares you; the GED Testing Service runs the test and your state awards the credential." },
      { objective: "O1", q: "Which is another high school equivalency test some states use?", options: ["ACT", "CDL", "HiSET", "TOEFL"], answer: 2, why: "HiSET is another high school equivalency test." },
      { objective: "O1", q: "Ged.com lists which skill area on the Science test?", options: ["Memorizing the names of bones", "Using numbers and graphics in science", "Drawing maps", "Writing poems"], answer: 1, why: "The three areas are reading for meaning, experiments, and numbers and graphics." },
      { objective: "O1", q: "Where should you check the current GED test time, fees and rules?", options: ["An old flyer", "A friend", "A video comment", "Ged.com and your state's adult education office"], answer: 3, why: "Rules and fees change; official sources have the current ones." },
      { objective: "O2", q: "A passage explains a new word in commas right after it. What should you do?", options: ["Skip the passage", "Use that meaning to understand the passage", "Guess a different meaning", "Look it up during the test on your phone"], answer: 1, why: "Passages often define hard words right in the text." },
      { objective: "O2", q: "A passage says bees carry pollen between flowers, which helps many crops make fruit. Which claim is supported?", options: ["Fewer bees could mean less fruit from some crops", "Bees make all food", "Bees eat fruit", "Flowers do not need pollen"], answer: 0, why: "If bees help crops make fruit, fewer bees could lower fruit." },
      { objective: "O2", q: "Which answer choice should you cross out?", options: ["One the passage proves", "One with a number from the passage", "One that adds facts the passage never gives", "One that restates the main idea"], answer: 2, why: "Answers that add facts not in the text are not supported." },
      { objective: "O3", q: "What is a hypothesis?", options: ["The final answer", "A testable guess, often \"If ..., then ...\"", "A graph", "A list of tools"], answer: 1, why: "A hypothesis is a testable guess about what will happen." },
      { objective: "O3", q: "A test checks whether music changes how fast workers pack boxes. What is the independent variable?", options: ["Number of boxes packed", "Size of the boxes", "The time of day", "Music or no music"], answer: 3, why: "Music is the one thing changed on purpose." },
      { objective: "O3", q: "In the music test, what is the dependent variable?", options: ["Number of boxes packed", "Music or no music", "The workers' names", "The type of tape"], answer: 0, why: "Boxes packed is what is measured." },
      { objective: "O3", q: "Why repeat each trial several times?", options: ["To use more supplies", "To make the test longer", "To make the results more reliable", "To change more variables"], answer: 2, why: "More trials reduce the chance that one odd result misleads you." },
      { objective: "O3", q: "What is a control group?", options: ["The group with the most people", "A group that gets no change, for comparison", "The scientists running the test", "A group that changes two things"], answer: 1, why: "The control group shows what happens without the change." },
      { objective: "O4", q: "A line graph shows a patient's temperature falling each hour after medicine (practice only). What is the trend?", options: ["Going down", "Going up", "Staying flat", "No data"], answer: 0, why: "The values fall each hour." },
      { objective: "O4", q: "What should you read first on a graph?", options: ["The smallest number", "The answer choices only", "The color of the bars", "The title, labels and units"], answer: 3, why: "Labels and units tell you what the numbers mean." },
      { objective: "O4", q: "A table tested 10, 20 and 30 degree water. Which statement goes beyond the data?", options: ["30 degree water was tested", "The 20 degree result is in the table", "At 100 degrees sugar dissolves instantly", "The test used three temperatures"], answer: 2, why: "100 degrees was not tested, so the data cannot show that." },
      { objective: "O4", q: "Which graph shows parts of a whole?", options: ["Line graph", "Pie chart", "Scatter plot", "Number line"], answer: 1, why: "A pie chart splits a whole into parts." },
      { objective: "O5", q: "Data: 5, 7, 7, 9, 12. What is the mode?", options: ["5", "8", "12", "7"], answer: 3, why: "7 appears most often." },
      { objective: "O5", q: "Data: 6, 8, 10, 12. What is the median?", options: ["9", "8", "10", "36"], answer: 0, why: "The two middle values are 8 and 10, and (8 + 10) / 2 = 9." },
      { objective: "O5", q: "A car goes 200 miles in 4 hours. Speed = distance / time. What is the speed?", options: ["800 miles per hour", "50 miles per hour", "204 miles per hour", "196 miles per hour"], answer: 1, why: "200 / 4 = 50 miles per hour." },
      { objective: "O5", q: "Data: 20, 30, 40. What is the mean?", options: ["90", "20", "30", "40"], answer: 2, why: "20 + 30 + 40 = 90, and 90 / 3 = 30." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [2, 3, 5, 8, 9, 13, 14, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and run the test again.",
    criteria: [
      { name: "Question and hypothesis", objective: "O3", notYet: "No question, or the hypothesis cannot be tested.", meets: "A clear question and an \"If ..., then ...\" hypothesis.", exceeds: "The hypothesis also says why the writer expects that result." },
      { name: "Variables and fair test", objective: "O3", notYet: "Variables are missing or more than one thing changes.", meets: "Independent, dependent and at least two controlled variables are named; only one thing changes.", exceeds: "Also includes a control group and explains why each controlled variable matters." },
      { name: "Data and math", objective: "O5", notYet: "Fewer than three trials per group, or the mean is wrong.", meets: "Three trials per group in a table, with a correct mean and units.", exceeds: "Also gives the range for each group and comments on how much the trials varied." },
      { name: "Graph and conclusion", objective: "O4", notYet: "No graph, or the conclusion claims more than the data shows.", meets: "A labeled bar graph and a two-sentence conclusion that stays inside the data.", exceeds: "Also names one way to improve the test next time." },
      { name: "Reading the results", objective: "O2", notYet: "The conclusion does not match the numbers.", meets: "The conclusion matches the numbers in the table.", exceeds: "Points to the exact numbers that support the conclusion." },
      { name: "Study plan", objective: "O1", notYet: "No study plan, or no dates.", meets: "A study plan with at least one date each week through the target test week.", exceeds: "Also includes a date for GED Ready or a booked test date." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or better on every rubric row",
      "Learners who take GED Ready or a free ged.com sample test within 30 days",
      "Learners who book or pass the GED Science test within 90 days (self-reported)",
      "Partner programs report more learners moving on to job training in healthcare, labs or the trades"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, tablet or computer with internet, or printed lessons",
      "Paper, pen and a basic calculator (a phone calculator works for practice)",
      "For the final task: two clean cups, tap water, sugar cubes or salt, a spoon, and a phone timer",
      "Free ged.com sample tests; GED Ready if the learner chooses to buy it",
      "About 90 minutes for lessons and checks, plus about 45 minutes for the final task"
    ],
    facilitatorNotes: [
      "Start with the pre-test and the free ged.com sample Science test to find which skill area each learner needs most.",
      "Run the stirring experiment as a group demonstration first, then have learners design their own one-change test.",
      "Check every experiment plan for safety before learners run it: no heat sources, flames, chemicals or tasting.",
      "Practice reading graphs out loud: title, labels, units, trend, then the conclusion.",
      "Check which test your state uses (GED or HiSET) and share local testing sites and any fee help."
    ]
  }
};
