"use strict";

// Koach Learn course: Workforce Development (wave 1, adult basic education) -> "GED Test Preparation: Social Studies".
// Prepares learners for the GED Social Studies test from the GED Testing Service. It does not grant the GED credential.
// ADDIE model: re-entry/reentry-ai-digital-confidence.js. Test facts checked on ged.com, and government facts on usa.gov, on 30 October 2026.

const GED_SUBJECTS = { name: "GED Testing Service: test subjects (time, question types, calculator)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SS = { name: "GED Testing Service: Social Studies test", url: "https://ged.com/about_test/test_subjects/social_studies/" };
const GED_SCORES = { name: "GED Testing Service: scores", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: free sample tests (English and Spanish)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, the official practice test", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, another high school equivalency test (official site)", url: "https://hiset.org/" };
const USA_BRANCHES = { name: "USAGov: Branches of the U.S. government", url: "https://www.usa.gov/branches-of-government" };
const ARCHIVES_CONST = { name: "National Archives: The Constitution of the United States (transcript)", url: "https://www.archives.gov/founding-docs/constitution-transcript" };
const ARCHIVES_BOR = { name: "National Archives: The Bill of Rights (transcript)", url: "https://www.archives.gov/founding-docs/bill-of-rights-transcript" };

module.exports = {
  id: "ged-social-studies",
  category: "Workforce Development",
  name: "GED Test Preparation: Social Studies",
  skills: "Reading primary and secondary sources, Telling fact from opinion, Explaining how US government works, Finding cause and effect, Reading maps, charts and graphs, Making a study plan",
  outcome: "read a social studies passage, a historical document, a map or a graph and answer GED-style questions about it: the main idea, the point of view, fact or opinion, cause and effect, how the US government works, and what the data shows.",
  about: [
    "This course is for adults getting ready for the GED Social Studies test: job seekers, people coming home from prison, veterans, young adults, immigrants and anyone returning to learning. Ged.com says it is not a memorization test. It tests how you read, reason and use graphs about government, history and money.",
    "The course prepares you for the test. It does not give you the GED credential. The GED Testing Service runs the test, and your state sets the rules for taking it. Some states use a different test called HiSET. Check ged.com and your state's adult education office for current rules, fees and testing.",
    "Each lesson teaches one skill with worked examples, a \"Try it now\" practice with answers explained, and a two-question quick check. There is a knowledge check after each chapter and a 20-question quiz at the end.",
    "The final task is a source analysis sheet you complete on a real founding document from the National Archives, plus your own dated GED study plan."
  ],
  finalTask: "Complete a one-page source analysis sheet on the Preamble to the US Constitution (or another founding document on archives.gov): who wrote it and when, primary or secondary source, the main idea in one sentence, the point of view, one fact and one opinion or goal, one cause and one effect connected to it, and which branch of government it relates to and why. Add your dated GED study plan at the bottom.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults preparing for the GED Social Studies test: job seekers, people coming home from prison, veterans, young adults who left school, immigrants (some preparing for citizenship too) and adults returning to learning after many years.",
    startingPoint: "Can read everyday text and simple charts. Many remember little US history or civics from school and think the test means memorizing dates. Some are still building English.",
    gap: "The test asks learners to read sources, spot point of view and evidence, explain how government works, and read graphs and maps. These skills also help people follow the news, vote where eligible, understand their rights and make money decisions.",
    constraints: [
      "Reading level: plain words and short sentences; old documents are explained line by line",
      "Devices: a phone, a library computer, or paper and pen",
      "Time: 4 to 6 minute lessons that fit around work, appointments and family",
      "Political topics are taught neutrally: how things work and how to judge evidence, not which side to take",
      "Test rules, fees and which test a state uses (GED or HiSET) change; learners check ged.com and their state"
    ],
    prerequisites: "None. The GED language arts course helps with reading for the main idea and judging evidence."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Using the official GED website", action: "list the parts, question types, time and tools of the GED Social Studies test and write a study plan with dates", standard: "with all three skill areas named and at least one study date each week until the test" },
    { id: "O2", condition: "Given a primary or secondary source", action: "identify the main idea, the author's point of view, and which statements are facts and which are opinions", standard: "pointing to the words that show each answer" },
    { id: "O3", condition: "Given a short civics scenario", action: "explain which branch of government acts and how checks and balances or a constitutional right apply", standard: "getting at least 4 of 5 right" },
    { id: "O4", condition: "Given a historical event or argument", action: "identify a cause and an effect and the evidence that supports an inference", standard: "with the evidence named from the source" },
    { id: "O5", condition: "Given a map, chart or graph about history, economics or geography", action: "read values, describe a trend and choose the conclusion the data supports", standard: "without adding facts that are not shown" }
  ],
  chapters: [
    {
      name: "Chapter 1: Reading sources and how government works",
      lessons: [
        {
          title: "How the GED Social Studies test works",
          objectives: ["O1"],
          minutes: 5,
          goal: "List the parts and tools of the GED Social Studies test and write a study plan with dates.",
          text: [
            "The GED has four tests: Math, Reasoning Through Language Arts, Science and Social Studies. You can take them one at a time. The GED Testing Service makes the test. Some states use another high school equivalency test, HiSET, so check which test your state uses.",
            "On ged.com, the Social Studies test is listed as 70 minutes with no break. It covers three skill areas: reading for meaning in social studies, analyzing historical events and arguments, and using numbers and graphs in social studies. Questions are multiple choice, fill in the blank, drag and drop, select an area and drop-down.",
            "You get an on-screen calculator and a calculator reference sheet, and ged.com says you may bring your own TI-30XS calculator to a test center. Ged.com says it is not a memorization test: you use the information given to draw conclusions.",
            "Ged.com lists a passing score of 145 for each subject. Times and rules can change, so check ged.com before you book. Ged.com has free sample tests and an official practice test, GED Ready."
          ],
          steps: ["Go to ged.com and read the Social Studies test page.", "Write down the time, the three skill areas and the tools you get.", "Take the free sample Social Studies test to see where you stand.", "Pick a target test week.", "Write at least one study date each week, with the skill you will practice."],
          words: [["GED", "a high school equivalency test; passing all four subjects earns a credential that many employers and colleges accept like a diploma."], ["HiSET", "another high school equivalency test that some states use."], ["Civics", "the study of government and the rights and duties of citizens."], ["Economics", "the study of how people make, buy, sell and use goods and money."]],
          slides: [
            { title: "The Social Studies test (check ged.com)", bullets: ["70 minutes, no break", "Multiple choice and other question types", "Passing score listed: 145"] },
            { title: "Three skill areas", bullets: ["Reading for meaning in social studies", "Analyzing historical events and arguments", "Using numbers and graphs"] },
            { title: "Not a memory test", bullets: ["Use the information given", "Draw conclusions from it", "On-screen calculator and reference sheet"] },
            { title: "Make a plan", bullets: ["Take the free sample test first", "Pick a target test week", "Study a little, most days of the week"] }
          ],
          sources: [GED_SUBJECTS, GED_SS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Open ged.com and take the free Social Studies sample test (or read the Social Studies page if you cannot take it now). Write your study plan: your target test week and one date each week with the skill you will practice: reading sources, government, history, or graphs. Keep it for the final task.",
          youCanNow: "name the parts and tools of the GED Social Studies test and follow a study plan with dates.",
          quickCheck: [
            { objective: "O1", q: "What does ged.com say about the Social Studies test?", options: ["It is mostly memorizing dates", "It is not a memorization test", "It has no graphs", "It is only about other countries"], answer: 1, why: "Ged.com says it is not a memorization test; you reason with the information given." },
            { objective: "O1", q: "Which is one of the three skill areas on the test?", options: ["Spelling state capitals", "Drawing flags", "Using numbers and graphs in social studies", "Typing speed"], answer: 2, why: "Ged.com lists reading for meaning, historical events and arguments, and numbers and graphs." }
          ]
        },
        {
          title: "Sources, point of view, fact and opinion",
          objectives: ["O2"],
          minutes: 6,
          goal: "Identify the main idea, point of view, facts and opinions in a source.",
          text: [
            "A primary source was made by someone who was there at the time: a letter, a speech, a law, a photo, a diary. A secondary source was made later by someone studying the event, like a textbook or a news analysis. Both are useful; primary sources show how people saw things then.",
            "Point of view is how the author sees the topic, shaped by who they are and what they want. Ask: who wrote this, when, and why? A factory owner and a factory worker in 1900 might describe the same strike very differently.",
            "A fact can be checked and proven true or false: \"The 19th Amendment was ratified in 1920.\" An opinion is a belief or feeling: \"It was the most important change in our history.\" Words like best, worst, should, important and I believe often signal an opinion.",
            "Worked example. A 1910 newspaper ad: \"Our new machines make 500 shirts a day. Every modern family should buy our shirts!\" Fact: 500 shirts a day (it can be checked). Opinion: every family should buy them. Point of view: a business selling its product."
          ],
          steps: ["Ask who made the source, when and why.", "Decide: primary (made at the time) or secondary (made later).", "Say the main idea in one sentence.", "Mark each statement fact (can be checked) or opinion (belief or judgment).", "Describe the author's point of view and what they want the reader to do or think."],
          words: [["Primary source", "something made at the time of an event by someone who was there."], ["Secondary source", "something made later by someone studying the event."], ["Point of view", "how an author sees a topic, shaped by who they are and what they want."], ["Fact", "a statement that can be checked and proven."], ["Opinion", "a belief, feeling or judgment."]],
          slides: [
            { title: "Primary or secondary?", bullets: ["Primary: made at the time, by someone there", "Secondary: made later, by someone studying it"] },
            { title: "Point of view", bullets: ["Who wrote it?", "When?", "Why, and what do they want?"] },
            { title: "Fact or opinion?", bullets: ["Fact: can be checked", "Opinion: a belief or judgment", "Signal words: best, worst, should, I believe"] }
          ],
          tryIt: "Practice: a 1935 letter from a farmer: \"Dust storms buried our fields three times this spring. The government should help farmers like us before it is too late.\" 1) Primary or secondary? 2) One fact. 3) One opinion. 4) Point of view? Answers: 1) Primary: written at the time by someone there. 2) Dust storms buried the fields three times that spring. 3) The government should help farmers. 4) A struggling farmer asking for help.",
          youCanNow: "tell primary from secondary sources, describe point of view, and sort facts from opinions.",
          quickCheck: [
            { objective: "O2", q: "Which is a primary source about World War II?", options: ["A 2020 textbook chapter", "A website summary written last year", "A movie made in 2015", "A letter a soldier wrote home in 1944"], answer: 3, why: "It was made at the time by someone who was there." },
            { objective: "O2", q: "Which statement is an opinion?", options: ["Congress passed the law in 1964.", "The city has 40,000 residents.", "That was the best law Congress ever passed.", "The bridge opened in 1937."], answer: 2, why: "\"Best\" is a judgment that cannot be proven." }
          ]
        },
        {
          title: "How the US government works",
          objectives: ["O3"],
          minutes: 6,
          goal: "Explain which branch of government acts in a scenario and how checks and balances apply.",
          text: [
            "The US Constitution divides the federal government into three branches so that no person or group holds too much power. The legislative branch is Congress (the Senate and the House of Representatives); it makes laws. The executive branch is the president, the vice president and the cabinet; it carries out laws. The judicial branch is the Supreme Court and other federal courts; they interpret laws and decide if they conflict with the Constitution.",
            "Checks and balances let each branch limit the others. The president can veto a bill passed by Congress. The Senate confirms or rejects the president's nominees, such as federal judges. The Supreme Court can overturn a law it finds unconstitutional. Congress can, in extreme cases, remove a president from office.",
            "The Bill of Rights is the first ten amendments to the Constitution. It protects rights such as freedom of speech, religion, the press and assembly (First Amendment), and rights of people accused of crimes, such as a fair and speedy trial. Power is also shared between the federal government and the states; this is called federalism.",
            "Worked example. \"Congress passes a bill. The president vetoes it.\" Which check is this? The executive checking the legislative branch."
          ],
          steps: ["Find who is acting: Congress, the president or a court.", "Name the branch: legislative, executive or judicial.", "Ask what power is being used: make, carry out or interpret laws.", "If one branch limits another, name the check.", "If a person's rights are involved, look for the right in the Bill of Rights."],
          words: [["Constitution", "the highest law of the United States; it sets up the government."], ["Legislative branch", "Congress; it makes laws."], ["Executive branch", "the president, vice president and cabinet; it carries out laws."], ["Judicial branch", "the courts; they interpret laws."], ["Veto", "when the president rejects a bill passed by Congress."], ["Amendment", "a change or addition to the Constitution."]],
          slides: [
            { title: "Three branches", bullets: ["Legislative (Congress): makes laws", "Executive (president): carries out laws", "Judicial (courts): interprets laws"] },
            { title: "Checks and balances", bullets: ["President can veto bills", "Senate confirms or rejects nominees", "Supreme Court can overturn unconstitutional laws"] },
            { title: "The Bill of Rights", bullets: ["First ten amendments", "Speech, religion, press, assembly", "Rights of people accused of crimes"] },
            { title: "Federalism", bullets: ["Power shared between the nation and the states"] }
          ],
          sources: [USA_BRANCHES, ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Practice: name the branch or right. 1) The Senate votes on the president's choice for a federal judge. 2) The Supreme Court rules that a law breaks the Constitution. 3) A newspaper prints a story criticizing the mayor. 4) The president signs a bill into law. Answers: 1) Legislative checking the executive. 2) Judicial checking the legislative. 3) Freedom of the press, First Amendment. 4) Executive (carrying out its role in making a law).",
          youCanNow: "name the three branches, explain checks and balances in a scenario, and connect a situation to the Bill of Rights.",
          quickCheck: [
            { objective: "O3", q: "Which branch makes federal laws?", options: ["The legislative branch (Congress)", "The judicial branch", "The executive branch", "The states only"], answer: 0, why: "Congress, the legislative branch, makes laws." },
            { objective: "O3", q: "The Supreme Court rules a law unconstitutional. What is this an example of?", options: ["Federalism", "A veto", "A check by the judicial branch on the legislative branch", "An amendment"], answer: 2, why: "Courts can overturn laws that conflict with the Constitution." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Reading sources and how government works",
        questions: [
          { objective: "O1", q: "Where should you check current GED test times, fees and rules?", options: ["A social media post", "Ged.com and your state's adult education office", "An old textbook", "A friend's memory"], answer: 1, why: "Rules and fees change; official sources have the current ones." },
          { objective: "O2", q: "Which is a secondary source?", options: ["A speech given in 1963", "A photo taken during a 1930s dust storm", "A 1776 letter", "A history textbook written in 2015"], answer: 3, why: "A textbook is made later by people studying the events." },
          { objective: "O2", q: "A company's 1912 ad says its trains are \"the finest in the land.\" What is this?", options: ["An opinion from a business's point of view", "A fact", "A law", "A secondary source"], answer: 0, why: "\"Finest\" is a judgment, and the company wants to sell tickets." },
          { objective: "O3", q: "The president vetoes a bill. Which branch is being checked?", options: ["The judicial branch", "The executive branch", "The legislative branch", "The states"], answer: 2, why: "A veto lets the executive check Congress, the legislative branch." },
          { objective: "O3", q: "What is the Bill of Rights?", options: ["The president's budget", "The first ten amendments to the Constitution", "A list of state laws", "A Supreme Court ruling"], answer: 1, why: "The Bill of Rights is the first ten amendments." }
        ]
      }
    },
    {
      name: "Chapter 2: History, economics and graphs",
      lessons: [
        {
          title: "Cause, effect and evidence in history",
          objectives: ["O4"],
          minutes: 5,
          goal: "Identify a cause and an effect in a historical event and the evidence that supports an inference.",
          text: [
            "History questions often ask why something happened (the cause) and what happened because of it (the effect). Signal words: because, so, as a result, led to, therefore, due to.",
            "Worked example. \"In the late 1800s, factories in cities offered many new jobs. As a result, millions of people moved from farms to cities. City populations grew fast, and crowded housing became a problem.\" Cause: factory jobs in cities. Effect: people moved to cities. A later effect: crowded housing. One cause can lead to a chain of effects.",
            "An inference is a conclusion the evidence supports. GED questions may ask which statement from a source supports an inference. Pick the statement that gives proof, not just one that is about the same topic.",
            "Be careful: two things happening at the same time does not always mean one caused the other. Look for the source to say or show the link."
          ],
          steps: ["Find the event the question asks about.", "Look for signal words: because, so, as a result, led to.", "Name the cause (why) and the effect (what happened next).", "For an inference, pick the statement that gives proof for it.", "Check the source actually links the two; do not assume."],
          words: [["Cause", "why something happened."], ["Effect", "what happened because of the cause."], ["Inference", "a conclusion supported by evidence."], ["Industrialization", "the growth of factories and machines making goods."]],
          slides: [
            { title: "Cause and effect", bullets: ["Cause: why it happened", "Effect: what happened next", "Signal words: because, as a result, led to"] },
            { title: "A chain of effects", bullets: ["Factory jobs in cities", "People moved from farms to cities", "Crowded housing in cities"] },
            { title: "Evidence for an inference", bullets: ["Pick the statement that proves it", "Same topic is not the same as proof", "At the same time does not mean caused by"] }
          ],
          tryIt: "Practice: \"The 1930s Dust Bowl destroyed crops on the Great Plains. Many farm families lost their land and moved west to look for work.\" 1) Cause? 2) Effect? 3) Which statement best supports the inference \"the Dust Bowl changed where people lived\": (a) \"The Dust Bowl destroyed crops\" or (b) \"Many farm families moved west\"? Answers: 1) Dust storms destroyed crops. 2) Families lost land and moved west. 3) (b): it shows people moving.",
          youCanNow: "find causes and effects in history and choose the evidence that supports an inference.",
          quickCheck: [
            { objective: "O4", q: "\"Gas prices rose sharply, so more people took the bus.\" What is the effect?", options: ["Gas prices rose", "More people took the bus", "Buses got cheaper", "Cars got bigger"], answer: 1, why: "Taking the bus is what happened because gas prices rose." },
            { objective: "O4", q: "Which statement best supports the inference that a new highway helped a town's businesses?", options: ["\"The highway is four lanes wide.\"", "\"The highway opened in 1960.\"", "\"Highways are made of concrete.\"", "\"Store sales in town doubled in the five years after the highway opened.\""], answer: 3, why: "It gives evidence of business growth linked to the highway." }
          ]
        },
        {
          title: "Economics and graphs",
          objectives: ["O5"],
          minutes: 6,
          goal: "Read a chart or map, describe the trend and choose the conclusion the data supports.",
          text: [
            "Supply is how much of something is for sale. Demand is how much people want to buy. When demand goes up and supply stays the same, prices usually rise. When supply goes up and demand stays the same, prices usually fall. Example: after a freeze ruins orange crops, the supply of oranges drops and prices rise.",
            "Graphs: read the title, the labels and the units first. Practice table (made up): a city's unemployment rate was 8% in 2020, 6% in 2021, 5% in 2022 and 4% in 2023. Trend: falling each year. Supported conclusion: a smaller share of people looking for work had no job in 2023 than in 2020. Not supported: why it fell, because the table does not say.",
            "Maps: read the title, the legend (key) and the compass rose. The legend tells you what colors or symbols mean. A map of rainfall might use darker colors for more rain. Use the scale to estimate distance.",
            "Percent change is common: from 8% to 4% is a drop of 4 percentage points. You can use the on-screen calculator for the math."
          ],
          steps: ["Read the title, labels, units or the map legend.", "Find the value the question asks about.", "Describe the trend: rising, falling or no clear pattern.", "Pick the conclusion that stays inside the data.", "For prices, ask: did supply or demand change?"],
          words: [["Supply", "how much of a good or service is for sale."], ["Demand", "how much of it people want to buy."], ["Unemployment rate", "the share of people looking for work who do not have a job."], ["Legend", "the key on a map or chart that tells what colors or symbols mean."], ["Percentage point", "the simple difference between two percents, like 8% to 4% is 4 points."]],
          slides: [
            { title: "Supply and demand", bullets: ["Demand up, supply same: prices usually rise", "Supply up, demand same: prices usually fall"] },
            { title: "Reading a graph", bullets: ["Title, labels, units first", "Find the value", "Describe the trend"] },
            { title: "Reading a map", bullets: ["Title and legend (key)", "Compass rose for direction", "Scale for distance"] },
            { title: "Stay inside the data", bullets: ["A chart shows what, not always why", "No conclusions about things not shown"] }
          ],
          tryIt: "Practice (made-up data): a bar chart shows average monthly rent in a city: 2019: $1,000; 2021: $1,150; 2023: $1,400. 1) Rent in 2021? 2) Trend? 3) How much did rent rise from 2019 to 2023? 4) Which conclusion is supported: (a) rent rose over this time, or (b) rent rose because of new jobs? Answers: 1) $1,150. 2) Rising. 3) $400. 4) (a); the chart does not show why.",
          youCanNow: "use supply and demand to explain price changes, and read charts and maps to pick a supported conclusion.",
          quickCheck: [
            { objective: "O5", q: "A storm destroys many lumber mills, so less lumber is for sale while builders still want it. What usually happens to lumber prices?", options: ["They rise", "They fall", "They stay the same", "Lumber becomes free"], answer: 0, why: "Supply fell while demand stayed the same, so prices usually rise." },
            { objective: "O5", q: "On a map, what tells you what each color means?", options: ["The compass rose", "The title", "The legend (key)", "The scale"], answer: 2, why: "The legend explains colors and symbols." }
          ]
        },
        {
          title: "Putting it together: analyzing a founding document",
          objectives: ["O2", "O3", "O4"],
          minutes: 6,
          goal: "Complete a source analysis sheet on a founding document.",
          text: [
            "GED questions often give you a short piece of an old document and ask about its main idea, its purpose or how it connects to government today. The Preamble, the opening sentence of the Constitution, is a good one to practice with. Read it on the National Archives website.",
            "The Preamble begins \"We the People of the United States\" and lists goals: to form a more perfect union, establish justice, insure domestic tranquility (peace at home), provide for the common defense, promote the general welfare (the well-being of all) and secure the blessings of liberty.",
            "Worked analysis. Who and when: delegates to the Constitutional Convention, 1787. Type: primary source. Main idea: the people set up a government to meet shared goals. Point of view: leaders who wanted a stronger national government than they had before. Cause and effect: the earlier government under the Articles of Confederation was weak, which led to writing a new Constitution. Branches: the Preamble introduces the whole Constitution, which sets up all three branches.",
            "Your sheet does not need perfect answers. It needs answers you can support by pointing to the words in the document."
          ],
          steps: ["Open the Constitution transcript on archives.gov and read the Preamble.", "Write who wrote it, when, and whether it is primary or secondary.", "Write the main idea in one sentence and the point of view.", "Write one fact about it and one goal or opinion in it.", "Write one cause and one effect, and the branch or right it connects to.", "Add your dated study plan at the bottom."],
          words: [["Preamble", "the opening sentence of the Constitution that states its purpose."], ["Articles of Confederation", "the first plan of US government, used before the Constitution."], ["Domestic tranquility", "peace at home."], ["General welfare", "the well-being of all the people."]],
          slides: [
            { title: "The Preamble", bullets: ["Opening sentence of the Constitution", "Begins \"We the People\"", "Lists the goals of the new government"] },
            { title: "Your analysis sheet", bullets: ["Who, when, primary or secondary", "Main idea and point of view", "A fact and a goal or opinion"] },
            { title: "Connect it", bullets: ["One cause and one effect", "The branch or right it relates to", "Point to the words that prove it"] }
          ],
          sources: [ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Final task: complete your one-page source analysis sheet on the Preamble (or the Bill of Rights) from archives.gov, using the steps above. Add your dated GED study plan at the bottom, then score your work with the course rubric.",
          youCanNow: "analyze a founding document: its source type, main idea, point of view, causes and effects, and links to how government works.",
          quickCheck: [
            { objective: "O2", q: "The Preamble was written in 1787 by delegates to the Constitutional Convention. What kind of source is it?", options: ["Secondary", "An opinion poll", "A map", "Primary"], answer: 3, why: "It was made at the time by the people who wrote the Constitution." },
            { objective: "O4", q: "The Articles of Confederation created a weak national government. What was one effect?", options: ["Leaders wrote a new Constitution", "The Bill of Rights was removed", "Congress was closed forever", "States stopped existing"], answer: 0, why: "The weakness of the Articles led to the Constitution of 1787." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: History, economics and graphs",
        questions: [
          { objective: "O4", q: "\"Because the factory closed, many workers moved away.\" What is the cause?", options: ["Workers moved away", "The town grew", "The factory closed", "New stores opened"], answer: 2, why: "The factory closing is why the workers moved." },
          { objective: "O4", q: "Two things happened in the same year. What can you say for sure?", options: ["One caused the other", "They happened at the same time; check the source for a link", "They are both opinions", "Neither happened"], answer: 1, why: "Happening together does not prove one caused the other." },
          { objective: "O5", q: "Demand for bikes goes up and supply stays the same. What usually happens to bike prices?", options: ["They fall", "They stay the same", "Bikes become free", "They rise"], answer: 3, why: "More buyers for the same supply usually pushes prices up." },
          { objective: "O5", q: "A table shows a town's population: 2000: 10,000; 2010: 12,000; 2020: 15,000. Which conclusion is supported?", options: ["The population grew over these years", "The town will have 50,000 people in 2030", "People moved because of good schools", "The town lost people"], answer: 0, why: "The numbers rise each decade; the table does not show the future or the reasons." },
          { objective: "O3", q: "The Senate rejects a person the president chose to be a federal judge. Which check is this?", options: ["The judicial branch checking the executive", "The legislative branch checking the executive", "Federalism", "A veto"], answer: 1, why: "The Senate, part of Congress, confirms or rejects the president's nominees." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: GED Test Preparation: Social Studies",
    questions: [
      { objective: "O1", q: "What does this course do for you?", options: ["Gives you a GED credential", "Makes you a US citizen", "Prepares you for the GED Social Studies test", "Replaces the GED test"], answer: 2, why: "It prepares you; the GED Testing Service runs the test and your state awards the credential." },
      { objective: "O1", q: "Which is another high school equivalency test some states use?", options: ["HiSET", "SAT", "CDL", "LSAT"], answer: 0, why: "HiSET is another high school equivalency test." },
      { objective: "O1", q: "According to ged.com, the Social Studies test is:", options: ["Only about memorizing dates", "An essay test only", "Not a memorization test", "A spoken interview"], answer: 2, why: "Ged.com says it is not a memorization test." },
      { objective: "O2", q: "What is a primary source?", options: ["A textbook written last year", "Something made at the time by someone who was there", "A summary on a website", "A teacher's notes"], answer: 1, why: "Primary sources come from people at the time of the event." },
      { objective: "O2", q: "Which is a fact?", options: ["The Civil Rights Act was signed in 1964.", "It was the greatest law ever written.", "Everyone should love it.", "It was the most exciting day in history."], answer: 0, why: "A date of signing can be checked; the others are judgments." },
      { objective: "O2", q: "To find an author's point of view, ask:", options: ["How long the source is", "What color the paper is", "How many pages it has", "Who wrote it, when and why"], answer: 3, why: "Who, when and why shape how an author sees a topic." },
      { objective: "O2", q: "Which word often signals an opinion?", options: ["Ratified", "Should", "1920", "Congress"], answer: 1, why: "\"Should\" states what someone believes ought to happen." },
      { objective: "O3", q: "Which branch carries out the laws?", options: ["Legislative", "Judicial", "Executive", "None"], answer: 2, why: "The president and the executive branch carry out laws." },
      { objective: "O3", q: "Congress is made up of:", options: ["The Senate and the House of Representatives", "The president and the cabinet", "The Supreme Court", "The governors"], answer: 0, why: "Congress has two parts: the Senate and the House." },
      { objective: "O3", q: "A group holds a peaceful protest in a park. Which right protects this?", options: ["The right to a speedy trial", "The right to vote at 18", "The president's veto", "Freedom of assembly (First Amendment)"], answer: 3, why: "The First Amendment protects peaceful assembly." },
      { objective: "O3", q: "Power shared between the national government and the states is called:", options: ["A veto", "Federalism", "A preamble", "An opinion"], answer: 1, why: "Federalism divides power between the nation and the states." },
      { objective: "O4", q: "Which signal word shows cause and effect?", options: ["As a result", "Also", "For example", "In addition"], answer: 0, why: "\"As a result\" introduces an effect." },
      { objective: "O4", q: "\"Factory jobs grew in cities, so people moved from farms.\" What is the cause?", options: ["People moved from farms", "Farms got bigger", "Factory jobs grew in cities", "Cities got smaller"], answer: 2, why: "Factory jobs are why people moved." },
      { objective: "O4", q: "Which statement best supports the inference that a new law reduced workplace injuries?", options: ["\"The law was 20 pages long.\"", "\"Injury reports fell by a third in the three years after the law began.\"", "\"Many people talked about the law.\"", "\"The law had a long name.\""], answer: 1, why: "It gives evidence of fewer injuries after the law." },
      { objective: "O5", q: "A freeze ruins much of the orange crop. What usually happens to orange prices?", options: ["They fall", "They stay the same", "Oranges become free", "They rise"], answer: 3, why: "Lower supply with the same demand usually raises prices." },
      { objective: "O5", q: "What should you read first on a chart?", options: ["The title, labels and units", "The answer choices only", "The smallest number", "The colors only"], answer: 0, why: "They tell you what the numbers mean." },
      { objective: "O5", q: "Unemployment was 8% in 2020 and 4% in 2023. How much did it fall?", options: ["2 percentage points", "12 percentage points", "4 percentage points", "8 percentage points"], answer: 2, why: "8% - 4% = 4 percentage points." },
      { objective: "O5", q: "A chart shows rent rising each year. Which conclusion goes beyond the data?", options: ["Rent rose over these years", "Rent will double next year", "Rent was higher at the end than at the start", "The chart shows several years"], answer: 1, why: "The chart does not show next year." },
      { objective: "O2", q: "The Preamble begins \"We the People.\" What does this show about the government's point of view?", options: ["Power comes from the people", "Power comes from a king", "Only states have power", "The courts wrote it"], answer: 0, why: "\"We the People\" shows the government is set up by and for the people." },
      { objective: "O4", q: "Why did leaders write the Constitution in 1787?", options: ["The country had no states", "The king asked them to", "The Bill of Rights had failed", "The government under the Articles of Confederation was too weak"], answer: 3, why: "The weak Articles of Confederation led to a new plan of government." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [2, 3, 4, 7, 9, 12, 13, 14, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, reread that part of the document and fix your answer.",
    criteria: [
      { name: "Source and point of view", objective: "O2", notYet: "Source type or author is wrong or missing.", meets: "Correct author, date and source type, and a point of view that fits who wrote it and why.", exceeds: "Also explains how the point of view shapes what the document says." },
      { name: "Main idea, fact and opinion", objective: "O2", notYet: "The main idea is wrong, or fact and opinion are mixed up.", meets: "A correct one-sentence main idea, one fact and one goal or opinion, each tied to the words.", exceeds: "Quotes the exact words that show each answer." },
      { name: "Cause and effect", objective: "O4", notYet: "No cause or effect, or they are reversed.", meets: "One correct cause and one correct effect connected to the document.", exceeds: "Shows a chain: a cause, an effect and a later effect." },
      { name: "Government connection", objective: "O3", notYet: "No branch or right named, or the wrong one.", meets: "Names the branch or right it relates to and explains why in one sentence.", exceeds: "Also gives an example of checks and balances or a right in use today." },
      { name: "Data reading", objective: "O5", notYet: "Did not complete the graph practice in Lesson 5.", meets: "Completed the Lesson 5 graph practice with a conclusion that stays inside the data.", exceeds: "Also explains a price change using supply and demand." },
      { name: "Study plan", objective: "O1", notYet: "No study plan, or no dates.", meets: "A study plan with at least one date each week through the target test week.", exceeds: "Also includes a date for GED Ready or a booked test date." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or better on every rubric row",
      "Learners who take GED Ready or a free ged.com sample test within 30 days",
      "Learners who book or pass the GED Social Studies test within 90 days (self-reported)",
      "Partner programs report more learners finishing all four GED subjects and moving on to job training or college"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, tablet or computer with internet, or printed lessons",
      "Paper and pen for practice answers and the source analysis sheet",
      "A printed or on-screen copy of the Preamble and the Bill of Rights from archives.gov",
      "Free ged.com sample tests; GED Ready if the learner chooses to buy it",
      "About 90 minutes for lessons and checks, plus about 45 minutes for the final task"
    ],
    facilitatorNotes: [
      "Start with the pre-test and the free ged.com sample Social Studies test to find which skill area each learner needs most.",
      "Read the Preamble aloud together and put each goal into everyday words before learners write their sheets.",
      "Keep political topics neutral: teach how government works and how to judge evidence, not which side to take.",
      "Use local, real charts (for example county jobs or rent data) for extra graph practice, and check the numbers on the official source.",
      "Check which test your state uses (GED or HiSET) and share local testing sites and any fee help."
    ]
  }
};
