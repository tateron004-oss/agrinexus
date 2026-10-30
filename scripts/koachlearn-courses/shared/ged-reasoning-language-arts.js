"use strict";

// Koach Learn course: Workforce Development (wave 1, adult basic education) -> "GED Test Preparation: Reasoning Through Language Arts".
// Prepares learners for the GED Reasoning Through Language Arts (RLA) test from the GED Testing Service. It does not grant the GED credential.
// ADDIE model: re-entry/reentry-ai-digital-confidence.js. Test facts checked on ged.com on 30 October 2026.

const GED_SUBJECTS = { name: "GED Testing Service: test subjects (time, question types, essay)", url: "https://ged.com/about_test/test_subjects/" };
const GED_RLA = { name: "GED Testing Service: Reasoning Through Language Arts", url: "https://ged.com/about_test/test_subjects/language_arts/" };
const GED_SCORES = { name: "GED Testing Service: scores", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: free sample tests (English and Spanish)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, the official practice test", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, another high school equivalency test (official site)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-reasoning-language-arts",
  category: "Workforce Development",
  name: "GED Test Preparation: Reasoning Through Language Arts",
  skills: "Finding the main idea and evidence, Making inferences, Fixing grammar and punctuation, Judging arguments and evidence, Writing the extended response, Making a study plan",
  outcome: "read a passage and answer GED-style questions about its main idea, its evidence and its grammar, and write a practice extended response in 45 minutes that picks the better-supported argument and explains why with evidence.",
  about: [
    "This course is for adults getting ready for the GED Reasoning Through Language Arts test: job seekers, people coming home from prison, veterans, young adults, immigrants and anyone returning to learning. The GED credential can open doors to jobs, training programs and college.",
    "The course prepares you for the test. It does not give you the GED credential. The GED Testing Service runs the test, and your state sets the rules for taking it. Some states use a different test called HiSET. Check ged.com and your state's adult education office for current rules, fees and testing.",
    "You will learn how the test works, read for the main idea and evidence, fix common grammar mistakes, judge arguments, and write the extended response (the essay). Each lesson has worked examples, a \"Try it now\" practice with answers explained, and a two-question quick check.",
    "There is a knowledge check after each chapter and a 20-question quiz at the end. The final task is a practice essay you write in 45 minutes and score with a rubric."
  ],
  finalTask: "Write a practice GED extended response in 45 minutes on the two library passages in Lesson 6. Pick the argument with better evidence, explain why with at least two pieces of evidence from the passages, and use an introduction, body paragraphs and a conclusion. Then proofread for grammar and score your essay with the course rubric.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults preparing for the GED Reasoning Through Language Arts test: job seekers, people coming home from prison, veterans, young adults who left school, immigrants and adults returning to learning after many years.",
    startingPoint: "Can read everyday text such as signs, forms and short articles. Many have not written an essay or studied grammar in years, and some feel nervous about tests or are still building English.",
    gap: "Many jobs, training programs and colleges ask for a high school diploma or an equivalency credential. Learners need to read closely for evidence, judge arguments, use standard grammar and write a timed essay, skills that are tested and that they will also use at work.",
    constraints: [
      "Reading level: plain words and short sentences in the teaching; practice passages are short",
      "Devices: a phone, a library computer, or paper and pen",
      "Time: 4 to 6 minute lessons that fit around work, appointments and family",
      "Test rules, fees and which test a state uses (GED or HiSET) change; learners check ged.com and their state",
      "Some learners have test anxiety; practice is low-stakes and answers are explained"
    ],
    prerequisites: "None. Learners who read below a grade 6 level may want an adult education reading class at the same time."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Using the official GED website", action: "list the parts, question types and time of the GED language arts test and write a study plan with dates", standard: "with every part of the test named and at least one study date each week until the test" },
    { id: "O2", condition: "Given a short passage", action: "identify the main idea, the supporting details and an inference backed by evidence", standard: "pointing to the exact sentence that supports each answer" },
    { id: "O3", condition: "Given sentences with errors", action: "correct mistakes in grammar, punctuation, capitalization and word choice", standard: "getting at least 4 of 5 right" },
    { id: "O4", condition: "Given a short argument", action: "identify the claim and the evidence and rate each piece of evidence as strong or weak", standard: "giving a reason for each rating" },
    { id: "O5", condition: "Given two passages that disagree, with a 45-minute timer", action: "write an extended response that picks the better-supported argument and explains why with evidence", standard: "with an introduction, at least two pieces of evidence from the passages and a conclusion" }
  ],
  chapters: [
    {
      name: "Chapter 1: Reading closely and writing correctly",
      lessons: [
        {
          title: "How the GED language arts test works",
          objectives: ["O1"],
          minutes: 5,
          goal: "List the parts of the GED language arts test and write a study plan with dates.",
          text: [
            "The GED has four tests: Math, Reasoning Through Language Arts (RLA), Science and Social Studies. You can take them one at a time. The GED Testing Service makes the test. Some states use another high school equivalency test, HiSET, so check which test your state uses.",
            "On ged.com, the RLA test is listed as 150 minutes in three sections, with a 10-minute break between parts 2 and 3. It covers reading for meaning, finding and making arguments, and grammar and language. One section is a written essay, called the extended response, with 45 minutes.",
            "Most questions are multiple choice. Others ask you to drag and drop, select an area of the screen, or pick from a drop-down list in a sentence. Ged.com lists a passing score of 145 for each subject. Times and rules can change, so check ged.com before you book.",
            "A plan beats cramming. Short practice four or five days a week works better than one long night. Ged.com has free sample tests and an official practice test, GED Ready, which shows if you are likely to pass."
          ],
          steps: ["Go to ged.com and read the Reasoning Through Language Arts page.", "Write down the time, the sections and the question types.", "Take the free sample RLA test to see where you stand.", "Pick a target test week and count the weeks until then.", "Write at least one study date each week, with the lesson or skill for that day."],
          words: [["GED", "a high school equivalency test; passing all four subjects earns a credential that many employers and colleges accept like a diploma."], ["HiSET", "another high school equivalency test that some states use."], ["Extended response", "the GED word for the essay you write on the test."], ["Drop-down", "a list that opens when you click it, so you can pick one answer."], ["Study plan", "a calendar of what you will practice and when."]],
          slides: [
            { title: "Four GED subjects", bullets: ["Math", "Reasoning Through Language Arts (RLA)", "Science", "Social Studies"] },
            { title: "The RLA test (check ged.com)", bullets: ["150 minutes, three sections, one 10-minute break", "Reading for meaning, arguments, grammar", "One essay: the extended response, 45 minutes"] },
            { title: "Kinds of questions", bullets: ["Multiple choice", "Drag and drop", "Select an area", "Drop-down"] },
            { title: "Make a plan", bullets: ["Take the free sample test first", "Pick a target test week", "Study a little, most days of the week"] }
          ],
          sources: [GED_SUBJECTS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Open ged.com and take the free RLA sample test (or read the RLA page if you cannot take it now). Then write your study plan: your target test week, and one date each week with the skill you will practice (reading, grammar, arguments or the essay). Keep it; you will add to it.",
          youCanNow: "name the parts of the GED language arts test and follow a study plan with dates.",
          quickCheck: [
            { objective: "O1", q: "What is the extended response on the GED language arts test?", options: ["A list of vocabulary words", "A spoken interview", "The essay you write on the test", "A math section"], answer: 2, why: "Ged.com calls the written essay the extended response." },
            { objective: "O1", q: "Your test is 8 weeks away. Which plan is best?", options: ["Study 30 minutes on four days each week, with a skill for each day", "Study all night the day before", "Take the test with no practice to see what happens", "Read only the essay tips"], answer: 0, why: "Short, regular practice with a planned skill each day builds skills better than cramming." }
          ]
        },
        {
          title: "Main idea, details and inferences",
          objectives: ["O2"],
          minutes: 6,
          goal: "Identify the main idea, two supporting details and one inference in a short passage.",
          text: [
            "The main idea is what the whole passage is mostly about. Supporting details are the facts, examples and reasons that back it up. Ask: \"If I had to say this passage in one sentence, what would I say?\"",
            "Worked example. Passage: \"Many warehouses now run all night. Night shifts often pay more per hour. But workers on night shifts report more trouble sleeping, and some say it is harder to see their families.\" Main idea: night shifts pay more but have costs for workers. Details: they pay more; workers report sleep trouble; family time is harder.",
            "An inference is a smart guess based on clues in the text. It is not written word for word, but the text supports it. From the passage, you can infer that a worker with young children might think twice about a night shift. You cannot infer that night shifts are against the law; nothing says that.",
            "On the test, always point to the sentence that proves your answer. If you cannot point to it, the answer is probably wrong."
          ],
          steps: ["Read the question first, so you know what to look for.", "Read the passage once all the way through.", "Say the main idea in one sentence.", "Find two details that support it.", "For an inference, pick the answer the text supports, and find the sentence that proves it."],
          words: [["Main idea", "what a passage is mostly about."], ["Supporting detail", "a fact, example or reason that backs up the main idea."], ["Inference", "a conclusion you reach from clues in the text."], ["Evidence", "the words in the text that prove an answer."]],
          slides: [
            { title: "Main idea", bullets: ["What the passage is mostly about", "Say it in one sentence"] },
            { title: "Supporting details", bullets: ["Facts, examples and reasons", "They back up the main idea"] },
            { title: "Inference", bullets: ["A smart guess from clues in the text", "Not written word for word", "Must be supported by the text"] },
            { title: "Prove it", bullets: ["Point to the sentence that proves your answer", "No sentence to point to? Pick again"] }
          ],
          tryIt: "Practice passage: \"The city opened three new cooling centers this summer. On days over 100 degrees, they stayed open until 10 pm. Visits were highest among older adults and people without air conditioning.\" 1) Main idea? 2) Two details? 3) Which inference is supported: (a) the city wants to protect people from heat, or (b) the centers cost too much? Answers: 1) The city opened cooling centers to help people in hot weather. 2) Open until 10 pm on very hot days; most visitors were older adults and people without air conditioning. 3) (a). Nothing in the passage talks about cost.",
          youCanNow: "find the main idea, the details and a supported inference, and point to the proof.",
          quickCheck: [
            { objective: "O2", q: "A passage says a bakery added an evening shift, hired five people and sold 30% more bread. What is the main idea?", options: ["Bread is healthy", "Adding an evening shift helped the bakery grow", "Five people were hired", "Bakeries close at night"], answer: 1, why: "The whole passage is about the evening shift helping the bakery; the hires and sales are details." },
            { objective: "O2", q: "Which is an inference, not a detail written in the text?", options: ["A fact copied word for word from the passage", "The title of the passage", "The number of paragraphs", "A conclusion you reach from clues the text gives"], answer: 3, why: "An inference is a conclusion supported by clues, not a fact stated directly." }
          ]
        },
        {
          title: "Fixing grammar and punctuation",
          objectives: ["O3"],
          minutes: 6,
          goal: "Correct five common kinds of grammar and punctuation mistakes in sentences.",
          text: [
            "Many RLA questions show a sentence with a drop-down choice and ask which version is correct. A few mistakes come up again and again. Learn these and you will get many points.",
            "1) Subject and verb agree: \"The list of jobs is long\" (the subject is list, not jobs). 2) Complete sentences: \"Because the bus was late.\" is a fragment; fix it: \"I was late because the bus was late.\" 3) Run-ons: \"I applied I got the job\" needs a period, a semicolon or a joining word: \"I applied, and I got the job.\"",
            "4) Words that sound alike: their (belongs to them), there (a place), they're (they are); its (belongs to it), it's (it is); your (belongs to you), you're (you are). 5) Capital letters and apostrophes: names of people, places and days take capitals (Monday, Texas); an apostrophe shows ownership (the manager's office) or a missing letter (don't), not a plural (two shifts, not two shift's).",
            "Transition words link ideas: however (but), therefore (so), for example, in addition. Pick the one that fits the meaning between the two sentences."
          ],
          steps: ["Read the whole sentence, not just the underlined part.", "Find the subject and the verb, and check they agree.", "Check it is a complete sentence and not two sentences run together.", "Check sound-alike words, capitals and apostrophes.", "Read the choice you picked back in the sentence to be sure it sounds right."],
          words: [["Subject", "who or what the sentence is about."], ["Verb", "the action or being word, like runs or is."], ["Fragment", "a piece of a sentence that cannot stand alone."], ["Run-on", "two sentences joined with no correct punctuation."], ["Transition", "a word that links two ideas, like however or therefore."]],
          slides: [
            { title: "Five mistakes to catch", bullets: ["Subject and verb that do not agree", "Fragments and run-ons", "Sound-alike words", "Capitals and apostrophes"] },
            { title: "Sound-alike words", bullets: ["their / there / they're", "its / it's", "your / you're"] },
            { title: "Apostrophes", bullets: ["Ownership: the manager's office", "Missing letter: don't, it's", "Never for a plain plural: two shifts"] },
            { title: "Transition words", bullets: ["however = but", "therefore = so", "for example, in addition"] }
          ],
          tryIt: "Fix each sentence. 1) \"The box of gloves are on the shelf.\" 2) \"Their going to the job fair on friday.\" 3) \"I finished my shift I went home.\" 4) \"The company changed it's hours.\" 5) \"Because I wanted to learn.\" Answers: 1) \"is\" (the subject is box). 2) \"They're going to the job fair on Friday.\" 3) \"I finished my shift, and I went home.\" 4) \"its\" (belongs to it). 5) Add a main idea: \"I signed up for class because I wanted to learn.\"",
          youCanNow: "spot and fix the most common grammar and punctuation mistakes on the test.",
          quickCheck: [
            { objective: "O3", q: "Which sentence is correct?", options: ["The team of nurses are ready.", "The team of nurses were ready.", "The team of nurses is ready.", "The team of nurses be ready."], answer: 2, why: "The subject is team (one group), so the verb is is." },
            { objective: "O3", q: "Which word fits: \"___ going to start training on Monday.\"", options: ["There", "They're", "Their", "Thier"], answer: 1, why: "They're means they are: they are going to start training." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Reading closely and writing correctly",
        questions: [
          { objective: "O1", q: "Which kinds of questions are on the GED language arts test, according to ged.com?", options: ["Only true or false", "Only spoken answers", "Only essays", "Multiple choice, drag and drop, select an area, drop-down and one essay"], answer: 3, why: "Ged.com lists these question types plus one extended response." },
          { objective: "O2", q: "A passage says a clinic added Saturday hours, and visits from working parents doubled. Which inference is supported?", options: ["Many working parents could not come on weekdays", "The clinic will close soon", "Saturday is a holiday", "Doctors do not like Saturdays"], answer: 0, why: "More working parents came when Saturday opened, which suggests weekdays were hard for them." },
          { objective: "O2", q: "How do you check that your answer about a passage is right?", options: ["Pick the longest answer", "Point to the sentence in the passage that proves it", "Pick the answer you like best", "Choose C every time"], answer: 1, why: "A right answer is supported by words in the text." },
          { objective: "O3", q: "Which sentence is correct?", options: ["The store changed it's hours.", "The store changed its hours.", "The store changed its' hours.", "The store changed it is hours."], answer: 1, why: "Its with no apostrophe means belongs to it." },
          { objective: "O3", q: "\"I passed the test I was so happy.\" What is the problem?", options: ["It is a run-on; it needs a period or a joining word", "A word is misspelled", "It needs a capital letter on test", "There is no problem"], answer: 0, why: "Two complete sentences are joined with nothing between them." }
        ]
      }
    },
    {
      name: "Chapter 2: Arguments and the extended response",
      lessons: [
        {
          title: "Claims, evidence and strong reasons",
          objectives: ["O4"],
          minutes: 5,
          goal: "Identify the claim and the evidence in an argument and rate each piece of evidence as strong or weak.",
          text: [
            "An argument tries to convince you. The claim is what the writer wants you to believe. The evidence is what they use to prove it.",
            "Strong evidence is specific and can be checked: numbers from a study or a record, facts, or an expert in that field. Weak evidence is a feeling, one person's story used to stand for everyone, a famous person who is not an expert, or a claim with no proof.",
            "Worked example. Claim: \"Our town should add a bus route to the industrial park.\" Evidence A: \"A county survey of 600 workers found 1 in 4 miss shifts because of rides.\" Strong: a number from a survey. Evidence B: \"My cousin says the bus would be nice.\" Weak: one person's opinion.",
            "Also watch for tricks: words like \"everyone knows\", attacks on a person instead of their idea, and only two choices when there are more."
          ],
          steps: ["Find the claim: what does the writer want you to believe?", "Underline each piece of evidence.", "Ask: is it specific, and could I check it?", "Rate it strong or weak, and write one reason why."],
          words: [["Argument", "writing that tries to convince you of something."], ["Claim", "the main point a writer wants you to believe."], ["Strong evidence", "specific facts or numbers you could check, or an expert in that field."], ["Weak evidence", "feelings, one story, or claims with no proof."]],
          slides: [
            { title: "Parts of an argument", bullets: ["Claim: what the writer wants you to believe", "Evidence: what they use to prove it"] },
            { title: "Strong evidence", bullets: ["Numbers from a study or record", "Facts you could check", "An expert in that field"] },
            { title: "Weak evidence", bullets: ["Feelings or \"everyone knows\"", "One person's story", "A famous person who is not an expert"] },
            { title: "Watch for tricks", bullets: ["Attacking the person, not the idea", "Only two choices when there are more"] }
          ],
          tryIt: "Practice argument: \"The city should plant more trees downtown. A city study measured streets with trees at about 10 degrees cooler in summer. A local singer said trees look nice. Anyone who disagrees just hates nature.\" Find the claim and rate each piece of support. Answers: Claim: plant more trees downtown. City study: strong (a measured number from a study). Singer: weak (not an expert; just an opinion). \"Anyone who disagrees hates nature\": weak (attacks people instead of giving proof).",
          youCanNow: "find the claim, sort strong evidence from weak, and say why.",
          quickCheck: [
            { objective: "O4", q: "Which is the strongest evidence that a job training program works?", options: ["The director says it is great", "A celebrity likes it", "Records show 70% of graduates found jobs within six months", "Everyone knows it works"], answer: 2, why: "It is a specific number from records that could be checked." },
            { objective: "O4", q: "\"My neighbor got sick after eating there, so the restaurant is unsafe.\" What kind of evidence is this?", options: ["Expert evidence", "A study", "Official data", "Weak: one person's story"], answer: 3, why: "One story does not prove something about every meal there." }
          ]
        },
        {
          title: "Comparing two arguments and planning your essay",
          objectives: ["O4", "O5"],
          minutes: 5,
          goal: "Compare two arguments and write a short plan for an extended response.",
          text: [
            "On the test you read two passages that take different sides. Ged.com says you analyze them, decide which argument has more convincing evidence, and explain why. You are not asked which side you agree with; you judge the evidence.",
            "Use a simple chart. For each passage, write the claim, the evidence, and a mark for strong or weak. The passage with more strong evidence is usually your pick, even if you personally believe the other side.",
            "Spend about 10 minutes planning. Your plan: 1) your thesis, one sentence that says which argument is better supported; 2) two or three pieces of evidence from that passage and why they are strong; 3) one weakness in the other passage.",
            "Practice passages are in Lesson 6. Today, practice the chart with any two short opinion articles that disagree, such as two letters to the editor."
          ],
          steps: ["Read both passages and find each claim.", "Make a two-column chart: evidence in each passage.", "Mark each piece of evidence strong or weak.", "Write one thesis sentence: which argument is better supported.", "List the evidence you will use in each body paragraph."],
          words: [["Thesis", "one sentence that states your main point; in the GED essay, which argument is better supported."], ["Analyze", "look closely at the parts to see how they work."], ["Body paragraph", "a middle paragraph that gives one reason with evidence."]],
          slides: [
            { title: "What the essay asks", bullets: ["Read two passages that disagree", "Decide which has more convincing evidence", "Explain why; not which side you like"] },
            { title: "Make a chart", bullets: ["Claim of each passage", "Its evidence", "Strong or weak?"] },
            { title: "Plan in about 10 minutes", bullets: ["Thesis: which argument is better supported", "2 or 3 pieces of evidence and why they are strong", "One weakness in the other passage"] }
          ],
          sources: [GED_RLA],
          tryIt: "Practice: Passage 1 says a four-day work week is good and cites a company record: sick days fell from 6 to 4 per worker in a year. Passage 2 says it is bad because \"workers will get lazy\" and a manager \"has a feeling\" output will drop. Write a thesis. Answer: \"Passage 1 is better supported because it uses company records on sick days, while Passage 2 relies on feelings with no data.\"",
          youCanNow: "compare two arguments with a chart and write a thesis and plan for your essay.",
          quickCheck: [
            { objective: "O5", q: "What does the GED extended response ask you to do?", options: ["Write about your own life story", "Decide which argument has more convincing evidence and explain why", "Summarize a novel", "Write a poem"], answer: 1, why: "Ged.com says you analyze two passages and explain which argument has better evidence." },
            { objective: "O4", q: "You agree with Passage B, but Passage A has more strong evidence. Which should your thesis pick?", options: ["Passage A, because it is better supported", "Passage B, because you agree with it", "Neither", "Both equally"], answer: 0, why: "The essay judges the evidence, not your opinion on the topic." }
          ]
        },
        {
          title: "Writing the extended response in 45 minutes",
          objectives: ["O5"],
          minutes: 6,
          goal: "Write a timed extended response that picks the better-supported argument and explains why with evidence.",
          text: [
            "Use a simple shape. Introduction (2 to 3 sentences): name the topic and give your thesis. Body paragraphs (two or three): each gives one reason, quotes or describes evidence from the passage, and explains why it is strong or weak. Conclusion (2 sentences): restate your thesis in new words.",
            "Practice passages (made up for this course). Passage A, by the city librarian: \"Keep the main library open until 9 pm. During a three-month trial, our door counter recorded about 340 visits after 6 pm each week. Our computer log shows that 6 in 10 job-search sessions happened after 6 pm. The extra hours cost less than 1% of our budget.\" Passage B, by a council member: \"Close at 6 pm. I walked by one evening and it looked empty. People can just use their phones. It is a waste of money.\"",
            "Time plan: about 10 minutes to read and plan, 30 minutes to write, 5 minutes to proofread. Use transition words (first, in addition, however, therefore). Write in complete sentences and your own words, and quote short pieces of the passages as evidence.",
            "Proofread for the mistakes from Lesson 3: subject and verb, run-ons, sound-alike words, capitals and apostrophes."
          ],
          steps: ["Set a 45-minute timer.", "Read both passages and fill in your strong-or-weak chart (about 10 minutes).", "Write the introduction with your thesis.", "Write two or three body paragraphs, each with evidence and why it is strong or weak.", "Write a short conclusion.", "Proofread in the last 5 minutes."],
          words: [["Introduction", "the first paragraph; it names the topic and gives your thesis."], ["Conclusion", "the last paragraph; it restates your main point."], ["Quote", "copy a few exact words from the passage, inside quotation marks."], ["Proofread", "read your writing again to find and fix mistakes."]],
          slides: [
            { title: "Essay shape", bullets: ["Introduction with your thesis", "Two or three body paragraphs with evidence", "A short conclusion"] },
            { title: "Each body paragraph", bullets: ["One reason", "Evidence from the passage", "Why it is strong, or why the other side is weak"] },
            { title: "45-minute time plan", bullets: ["About 10 minutes: read and plan", "About 30 minutes: write", "About 5 minutes: proofread"] }
          ],
          tryIt: "Final task: set a 45-minute timer and write your extended response on the library passages above. Then proofread and score it with the rubric. Model thesis: \"Passage A is better supported because it uses the library's own visit counts and computer records, while Passage B relies on one evening's look and opinions.\" Strong evidence to use: about 340 visits after 6 pm each week; 6 in 10 job-search sessions after 6 pm; cost under 1% of the budget. Weakness in B: one visit, no numbers.",
          youCanNow: "write a complete, timed extended response that judges two arguments by their evidence.",
          quickCheck: [
            { objective: "O5", q: "What belongs in your introduction?", options: ["A list of grammar rules", "Every piece of evidence", "The topic and your thesis", "Your name and address"], answer: 2, why: "The introduction names the topic and states which argument is better supported." },
            { objective: "O5", q: "In the library passages, which is the strongest evidence?", options: ["\"It looked empty\" one evening", "\"People can just use their phones\"", "\"It is a waste of money\"", "The door counter recorded about 340 visits after 6 pm each week"], answer: 3, why: "It is a specific number from a record that could be checked." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Arguments and the extended response",
        questions: [
          { objective: "O4", q: "What is the claim in an argument?", options: ["The main point the writer wants you to believe", "The title", "The longest sentence", "A grammar mistake"], answer: 0, why: "The claim is what the writer is trying to convince you of." },
          { objective: "O4", q: "\"People who want longer library hours are just lazy.\" What is wrong with this support?", options: ["It uses too many numbers", "It quotes an expert", "It attacks people instead of giving proof", "Nothing; it is strong evidence"], answer: 2, why: "Attacking the people who disagree is not evidence about the idea." },
          { objective: "O5", q: "About how long should you spend reading and planning in the 45-minute essay?", options: ["0 minutes", "About 40 minutes", "About 2 minutes", "About 10 minutes"], answer: 3, why: "About 10 minutes to plan leaves about 30 to write and 5 to proofread." },
          { objective: "O5", q: "What does a strong body paragraph include?", options: ["One reason, evidence from the passage and why it is strong", "Only your opinion", "A new topic", "A list of words with no sentences"], answer: 0, why: "Each body paragraph ties one reason to evidence and explains it." },
          { objective: "O1", q: "Where should you check the current GED test rules, times and fees?", options: ["A friend's memory", "A social media post", "Ged.com and your state's adult education office", "An old textbook"], answer: 2, why: "Rules and fees change; the official site and your state have the current ones." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: GED Test Preparation: Reasoning Through Language Arts",
    questions: [
      { objective: "O1", q: "Which test does this course prepare you for?", options: ["The GED Reasoning Through Language Arts test", "A driver's license test", "A typing test", "A citizenship interview"], answer: 0, why: "The course prepares you for the GED RLA test; it does not grant the credential." },
      { objective: "O1", q: "Which is another high school equivalency test some states use?", options: ["SAT", "HiSET", "CDL", "ESL"], answer: 1, why: "HiSET is another high school equivalency test used in some states." },
      { objective: "O1", q: "What is the best first step for a study plan?", options: ["Book the test for tomorrow", "Skip the hard parts", "Take a free sample test to see where you stand", "Study only the night before"], answer: 2, why: "A sample test shows which skills need the most practice." },
      { objective: "O1", q: "According to ged.com, how long is the essay part of the RLA test?", options: ["10 minutes", "2 hours", "There is no essay", "45 minutes"], answer: 3, why: "Ged.com lists 45 minutes for the extended response." },
      { objective: "O2", q: "The main idea of a passage is:", options: ["The first word", "What the passage is mostly about", "The hardest word", "The last sentence only"], answer: 1, why: "The main idea is the passage said in one sentence." },
      { objective: "O2", q: "A passage says a factory added safety training and injuries fell by half. Which detail supports \"training made the factory safer\"?", options: ["Injuries fell by half", "The factory is large", "Training was on Mondays", "The factory makes chairs"], answer: 0, why: "The drop in injuries is the evidence that safety improved." },
      { objective: "O2", q: "Which is a supported inference from: \"Lines at the food bank doubled after the plant closed\"?", options: ["The food bank is closing", "Food prices fell", "Many people who lost jobs needed food help", "The plant reopened"], answer: 2, why: "The timing of the closing and longer lines supports this conclusion." },
      { objective: "O3", q: "Which sentence is correct?", options: ["The list of tasks are on the board.", "The list of tasks is on the board.", "The list of tasks were on the board.", "The list of tasks be on the board."], answer: 1, why: "The subject is list (one list), so the verb is is." },
      { objective: "O3", q: "Which sentence uses capital letters correctly?", options: ["I start work on monday in ohio.", "I Start Work on Monday in Ohio.", "i start work on Monday in ohio.", "I start work on Monday in Ohio."], answer: 3, why: "Days and places take capitals; other words do not." },
      { objective: "O3", q: "Which is a sentence fragment?", options: ["I got the job.", "Because the shift ended late.", "She called the manager.", "We passed."], answer: 1, why: "It cannot stand alone; it needs a main idea, like \"I was tired because the shift ended late.\"" },
      { objective: "O3", q: "Pick the right word: \"___ a good day to apply.\"", options: ["Its", "Its'", "It's", "It"], answer: 2, why: "It's means it is: it is a good day to apply." },
      { objective: "O4", q: "Which is strong evidence?", options: ["A state report showing 2,000 new nursing jobs last year", "\"I just know it\"", "A movie star's opinion about nursing", "\"Everyone says so\""], answer: 0, why: "Specific numbers from an official report can be checked." },
      { objective: "O4", q: "\"Either we cut all bus routes or the city goes broke.\" What is the trick?", options: ["It uses a study", "It quotes an expert", "It is a fact", "It gives only two choices when there are more"], answer: 3, why: "There are other options, such as cutting some routes or finding new money." },
      { objective: "O4", q: "Why is one person's story weak evidence for a big claim?", options: ["Stories are always false", "One case may not be true for most people", "Stories are too long", "It is against the rules"], answer: 1, why: "One example does not show what is true in general." },
      { objective: "O4", q: "To judge an argument, you first find:", options: ["The longest word", "The author's age", "The claim and its evidence", "Grammar mistakes"], answer: 2, why: "You judge an argument by how well its evidence supports its claim." },
      { objective: "O5", q: "In the GED essay, your thesis should say:", options: ["Which argument is better supported", "Your favorite color", "Which writer you like", "That both are perfect"], answer: 0, why: "The task is to decide which argument has more convincing evidence." },
      { objective: "O5", q: "What is a good way to use evidence in your essay?", options: ["Copy whole passages", "Make up numbers", "Leave evidence out", "Quote a short piece and explain why it is strong"], answer: 3, why: "Short quotes plus your explanation show you analyzed the evidence." },
      { objective: "O5", q: "What do you do in the last few minutes of the essay?", options: ["Start a new essay", "Proofread for grammar and punctuation", "Erase your thesis", "Leave the room"], answer: 1, why: "Proofreading catches mistakes that cost points." },
      { objective: "O5", q: "Which conclusion is best?", options: ["\"The end.\"", "\"I like libraries.\"", "\"Because Passage A uses records and counts, and Passage B uses only opinions, Passage A is better supported.\"", "\"Some people agree and some don't.\""], answer: 2, why: "It restates the thesis and the main reason in new words." },
      { objective: "O2", q: "When you are not sure of an answer about a passage, you should:", options: ["Look back for the sentence that proves an answer", "Pick the shortest option", "Skip reading and guess", "Choose the answer with the hardest words"], answer: 0, why: "The right answer is supported by the text, so go back and find the proof." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [2, 3, 4, 6, 7, 10, 11, 13, 15, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, practice that part and write a new essay on a new pair of passages.",
    criteria: [
      { name: "Clear thesis", objective: "O5", notYet: "No thesis, or it says which side the writer agrees with instead of which is better supported.", meets: "The introduction has one sentence that says which argument is better supported.", exceeds: "The thesis also names the main reason, such as records versus opinions." },
      { name: "Evidence from the passages", objective: "O4", notYet: "No evidence from the passages, or evidence is made up.", meets: "At least two pieces of evidence from the passages, each explained as strong or weak.", exceeds: "Also points out a trick or weakness in the other passage and explains it." },
      { name: "Organization", objective: "O5", notYet: "One block of text, or ideas jump around.", meets: "Introduction, at least two body paragraphs and a conclusion, with transition words.", exceeds: "Each body paragraph opens with a clear topic sentence that ties back to the thesis." },
      { name: "Grammar and punctuation", objective: "O3", notYet: "Many errors make it hard to read.", meets: "A few small errors, but the meaning is always clear.", exceeds: "Almost no errors; sound-alike words, capitals and apostrophes are all correct." },
      { name: "Reading accuracy", objective: "O2", notYet: "Gets the main idea of a passage wrong.", meets: "Describes each passage's main idea correctly.", exceeds: "Uses short exact quotes that match what the passages say." },
      { name: "Plan and timing", objective: "O1", notYet: "Did not finish in 45 minutes and has no study plan.", meets: "Finished in 45 minutes and the study plan has dates through test week.", exceeds: "Also booked a GED Ready practice test or a real test date on ged.com." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or better on every rubric row",
      "Learners who take GED Ready or a free ged.com sample test within 30 days",
      "Learners who book or pass the GED language arts test within 90 days (self-reported)",
      "Partner programs report more learners moving on to job training or college classes"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, tablet or computer with internet, or printed lessons",
      "Paper and pen for charts, practice answers and essays",
      "A timer (a phone timer works) for the 45-minute essay",
      "Free ged.com sample tests; GED Ready if the learner chooses to buy it",
      "About 90 minutes in total for lessons and checks, plus 45 minutes for the final essay"
    ],
    facilitatorNotes: [
      "Start with the pre-test and the free ged.com sample RLA test, then group learners by the skills they need most.",
      "Model one strong-or-weak chart out loud before learners try their own.",
      "Have learners read essays aloud in pairs and give feedback on one rubric row at a time.",
      "Check which test your state uses (GED or HiSET) and share local testing sites and any fee help.",
      "Keep practice low-stakes; many adult learners carry test anxiety from school."
    ]
  }
};
