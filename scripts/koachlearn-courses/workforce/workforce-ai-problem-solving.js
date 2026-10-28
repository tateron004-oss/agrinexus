"use strict";

// Koach Learn course: Workforce Development -> "AI for Problem Solving and Decision Making". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "workforce-ai-problem-solving",
  category: "Workforce Development",
  name: "AI for Problem Solving and Decision Making",
  skills: "Defining a problem clearly, Finding root causes with the 5 Whys, Generating options with AI, Comparing options with a decision matrix, Checking AI reasoning, Presenting a recommendation",
  outcome: "solve a real workplace problem step by step with AI as a thinking partner: write a clear problem statement, find the root cause with the 5 Whys, list options, compare them in a decision matrix, check the AI's reasoning, and present a one-page recommendation to your manager.",
  about: [
    "This course is for workers and job seekers who want to be the person who solves problems, not just reports them: warehouse and retail leads, healthcare support staff, office workers, customer service and trades. Problem solving is one of the skills employers ask for most.",
    "You will learn a simple method that works on any problem, from long lines at a register to missed deliveries or a confusing process. An AI assistant helps you ask better questions, think of options and organize your thinking. You supply the facts and make the decision.",
    "Each lesson takes about five minutes with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. Keep confidential company and customer information out of AI tools and follow your workplace rules."
  ],
  finalTask: "Pick a real problem at work (or a realistic sample) and produce a one-page recommendation: a problem statement with facts, a 5 Whys root cause, at least four options (some from AI), a decision matrix with weighted criteria, notes on what you checked in the AI's reasoning, and your recommendation with first steps and how you will measure success.",
  chapters: [
    {
      name: "Chapter 1: Understanding the problem",
      lessons: [
        {
          title: "Writing a clear problem statement",
          minutes: 5,
          goal: "Turn a vague complaint into a clear, factual problem statement.",
          text: [
            "\"Things are a mess\" is not a problem you can solve. A clear problem statement says what is happening, where, when, how big it is, and why it matters. Example: \"On weekday evenings from 5 to 7 pm, customers wait an average of 12 minutes at checkout, and we get about 5 complaints a week.\"",
            "Use facts you can see or count: times, numbers, how often. If you do not have numbers, collect some for a week.",
            "AI can help: \"Here is my rough description. Ask me five questions that would make it a clearer problem statement.\" Answering those questions often shows you what you really need to know."
          ],
          steps: ["Write the problem in your own words.", "Add what, where, when, how big and why it matters.", "Replace guesses with counts or measurements.", "Ask AI for questions that sharpen it, then rewrite."],
          words: [["Problem statement", "a short, factual description of a problem."], ["Data", "facts and numbers you can count or measure."]],
          slides: [
            { title: "Vague vs clear", bullets: ["Vague: \"Things are a mess\"", "Clear: what, where, when, how big, why it matters"] },
            { title: "Example", bullets: ["Weekdays 5-7 pm", "Average 12-minute checkout wait", "About 5 complaints a week"] },
            { title: "Sharpen it with AI", bullets: ["\"Ask me five questions to make this clearer\"", "Answer with facts, then rewrite"] }
          ],
          tryIt: "Pick a real or sample problem at work. Write a rough description, ask AI for five sharpening questions, answer them, and rewrite it as a clear problem statement.",
          youCanNow: "write a clear, factual problem statement."
        },
        {
          title: "Finding the root cause with the 5 Whys",
          minutes: 5,
          goal: "Use the 5 Whys to find the cause behind a problem.",
          text: [
            "Fixing a symptom makes the problem come back. The 5 Whys helps you dig to the root cause: ask \"Why?\" about the problem, then ask \"Why?\" about that answer, about five times.",
            "Example: Long checkout lines. Why? Only one register is open at 5 pm. Why? A cashier's shift ends at 5. Why? The schedule was built for morning rushes. Why? Nobody looked at evening sales when it was made. Root cause: the schedule does not match evening demand.",
            "AI can suggest possible \"whys\" you had not thought of, but only you and your coworkers know which ones are true. Check each answer with facts or by asking the people who do the work."
          ],
          steps: ["Write the problem statement at the top.", "Ask \"Why?\" and write the answer.", "Ask \"Why?\" about that answer; repeat about five times.", "Check each answer with facts or coworkers.", "Circle the root cause."],
          words: [["Root cause", "the deeper reason a problem happens."], ["Symptom", "a sign of a problem, not its cause."], ["5 Whys", "a method of asking \"why?\" several times to find a root cause."]],
          slides: [
            { title: "Symptom vs root cause", bullets: ["Fixing a symptom: problem returns", "Fixing the root cause: problem goes away"] },
            { title: "Ask \"Why?\" about five times", bullets: ["Lines are long -> one register open", "-> shift ends at 5 -> schedule built for mornings", "Root: schedule does not match evening demand"] },
            { title: "AI suggests, you confirm", bullets: ["AI can offer possible whys", "Check each with facts or coworkers"] }
          ],
          tryIt: "Do the 5 Whys on your problem. Ask AI for other possible causes, then check which ones are true with facts or a coworker. Circle the root cause.",
          youCanNow: "find the root cause of a problem using the 5 Whys."
        },
        {
          title: "Generating options with AI",
          minutes: 5,
          goal: "Create a list of at least four possible solutions, using AI to widen your thinking.",
          text: [
            "Most people jump to the first solution. Better decisions come from comparing several. Aim for at least four options, including \"change nothing\" as a baseline.",
            "Ask AI to brainstorm: \"The root cause is that our schedule doesn't match evening demand at a small grocery store. Give me eight possible solutions, from cheap and quick to bigger changes.\" It may suggest ideas like shifting a break, a self-checkout lane, or cross-training stockers.",
            "Cross out ideas that do not fit your workplace or that you could never get approved, and add ideas from coworkers. The people who do the work often have the best ideas."
          ],
          steps: ["Write the root cause.", "Ask AI for six to eight options from small to big.", "Cross out ones that do not fit.", "Add coworkers' ideas.", "Keep at least four, including \"change nothing\"."],
          words: [["Option", "one possible solution."], ["Brainstorm", "list many ideas quickly without judging them yet."], ["Baseline", "what happens if you change nothing."]],
          slides: [
            { title: "Do not stop at the first idea", bullets: ["Compare at least four options", "Include \"change nothing\""] },
            { title: "AI widens your thinking", bullets: ["Give it the root cause", "Ask for options from small to big"] },
            { title: "Make it real", bullets: ["Cross out ideas that do not fit", "Add coworkers' ideas", "Doers often know best"] }
          ],
          tryIt: "Ask AI for eight options to fix your root cause. Cross out the ones that do not fit, add one from a coworker or your own experience, and keep at least four.",
          youCanNow: "generate and narrow a list of realistic options with AI help."
        }
      ],
      check: {
        title: "Knowledge Check 1: Understanding the problem",
        questions: [
          { q: "Which is the clearest problem statement?", options: ["\"Things are a mess.\"", "\"Weekdays 5-7 pm, checkout waits average 12 minutes and we get about 5 complaints a week.\"", "\"Customers are annoying.\"", "\"Fix it.\""], answer: 1, why: "It says what, when, how big and why it matters." },
          { q: "What is a root cause?", options: ["A complaint", "The first thing you notice", "A plant", "The deeper reason a problem happens"], answer: 3, why: "Fixing the root cause stops the problem returning." },
          { q: "In the 5 Whys, AI suggests a cause. What do you do?", options: ["Check it with facts or coworkers", "Accept it", "Ignore all AI ideas", "Blame someone"], answer: 0, why: "Only facts confirm a cause." },
          { q: "Why include \"change nothing\" as an option?", options: ["It is required by law", "It is always best", "It gives a baseline to compare against", "It is never useful"], answer: 2, why: "A baseline shows what each change gains." },
          { q: "Who often has the best ideas for fixing a work problem?", options: ["Customers' friends", "Only the AI", "The people who do the work", "Nobody"], answer: 2, why: "Doers know the details." }
        ]
      }
    },
    {
      name: "Chapter 2: Deciding and recommending",
      lessons: [
        {
          title: "Comparing options with a decision matrix",
          minutes: 6,
          goal: "Score options against weighted criteria in a decision matrix.",
          text: [
            "A decision matrix is a table that compares options fairly. Options go down the side; criteria go across the top. Common criteria: cost, time to set up, how well it fixes the root cause, effect on customers, effect on coworkers, and risk.",
            "Give each criterion a weight (1 to 3) for how much it matters, score each option 1 to 5 on each criterion, multiply score by weight, and add up. The highest total is a strong candidate, not an automatic winner.",
            "You can ask AI to build the empty table or a spreadsheet with formulas. You choose the weights and scores based on facts and what your workplace values. Then ask: does the winner make sense? If not, check your scores."
          ],
          steps: ["List your options down the side.", "Pick four to six criteria and give each a weight 1-3.", "Score each option 1-5 on each criterion.", "Multiply score x weight and add up.", "Sanity-check the result."],
          words: [["Decision matrix", "a table that scores options against criteria."], ["Criteria", "the things you judge options by, like cost or risk."], ["Weight", "how much a criterion matters compared with others."]],
          slides: [
            { title: "Set up the table", bullets: ["Options down the side", "Criteria across the top", "Cost, time, fixes root cause, people, risk"] },
            { title: "Score it", bullets: ["Weight each criterion 1-3", "Score each option 1-5", "Score x weight, then add"] },
            { title: "You decide", bullets: ["AI can build the table", "You choose weights and scores", "Does the winner make sense?"] }
          ],
          tryIt: "Build a decision matrix for your four options with at least four weighted criteria. Use AI to set up the table or spreadsheet, then fill in the scores yourself and total them.",
          youCanNow: "compare options fairly with a weighted decision matrix."
        },
        {
          title: "Checking AI's reasoning",
          minutes: 5,
          goal: "Spot common errors in AI reasoning before you rely on it.",
          text: [
            "AI can sound confident and still be wrong. Common problems: made-up facts or numbers, math errors, ideas that ignore your workplace's rules or budget, and missing the human side (morale, safety, fairness).",
            "Ask AI to show its reasoning: \"Explain step by step why you ranked option B first.\" Then ask it to argue the other side: \"What are the strongest reasons NOT to choose option B?\" This often reveals weak spots.",
            "Check numbers yourself, check any rule or policy with the official source or your manager, and ask a coworker for a gut check. Write down what you checked; it makes your recommendation stronger."
          ],
          steps: ["Ask AI to explain its reasoning step by step.", "Ask for the strongest case against its choice.", "Recheck numbers and math yourself.", "Check rules with the official source or your manager.", "Get a coworker's gut check and note what you checked."],
          words: [["Reasoning", "the steps of thinking that lead to a conclusion."], ["Devil's advocate", "arguing the other side on purpose to test an idea."]],
          slides: [
            { title: "Confident is not correct", bullets: ["Made-up facts or numbers", "Math errors", "Missing rules, budget or the human side"] },
            { title: "Test the reasoning", bullets: ["\"Explain step by step\"", "\"What are the reasons NOT to choose this?\""] },
            { title: "Check and note it", bullets: ["Recheck numbers yourself", "Rules: official source or manager", "Coworker gut check; write what you checked"] }
          ],
          tryIt: "Ask AI which of your options it would choose and why. Then ask for the strongest case against it. Recheck one number and write down two things you verified.",
          youCanNow: "test AI reasoning and catch errors before you rely on it."
        },
        {
          title: "Presenting your recommendation",
          minutes: 5,
          goal: "Write a one-page recommendation your manager can act on.",
          text: [
            "Managers say yes to clear, short proposals. Use this order: Problem (one or two sentences with facts), Root cause, Options considered, Recommendation and why, First steps, How we will measure success, Risks and how to handle them.",
            "Keep it to one page. Ask AI to tighten your draft: \"Make this a one-page recommendation for my manager, main point first, plain words.\" Then check every fact and number matches your work.",
            "Offer a small test first: \"Let's try it for two weeks on Tuesday and Thursday evenings and measure wait times.\" A small, measurable trial is easier to approve and proves your idea."
          ],
          steps: ["Write the seven sections.", "Lead with your recommendation in the first lines.", "Ask AI to tighten it to one page.", "Check every fact and number.", "Propose a small, measurable trial."],
          words: [["Recommendation", "the option you suggest and why."], ["Trial", "a short, small test of a change."], ["Success measure", "the number that shows whether the change worked."]],
          slides: [
            { title: "One-page order", bullets: ["Problem and root cause", "Options and recommendation", "First steps, success measure, risks"] },
            { title: "Make it easy to say yes", bullets: ["Main point first, one page", "AI tightens; you check facts"] },
            { title: "Propose a small trial", bullets: ["\"Two weeks, two evenings a week\"", "Measure the result", "Easier to approve; proves the idea"] }
          ],
          tryIt: "Final task: write your one-page recommendation with all seven sections, your 5 Whys and decision matrix attached, notes on what you checked in AI's reasoning, and a small trial with a success measure.",
          youCanNow: "solve a workplace problem step by step and present a recommendation your manager can act on."
        }
      ],
      check: {
        title: "Knowledge Check 2: Deciding and recommending",
        questions: [
          { q: "In a decision matrix, what is a weight?", options: ["How much a criterion matters", "How heavy a box is", "A score for an option", "A password"], answer: 0, why: "Weights show importance." },
          { q: "Option A scores 4 on cost (weight 3) and 2 on risk (weight 2). Its total for these two is:", options: ["6", "8", "12", "16"], answer: 3, why: "4 x 3 + 2 x 2 = 12 + 4 = 16." },
          { q: "A good way to test AI's choice is to ask:", options: ["\"Are you sure?\" only", "\"What are the strongest reasons NOT to choose this?\"", "Nothing", "\"Choose for me\""], answer: 1, why: "Arguing the other side reveals weak spots." },
          { q: "Where should a recommendation's main point go?", options: ["In the first lines", "At the very end", "In a footnote", "Nowhere"], answer: 0, why: "Managers read the start first." },
          { q: "Why propose a small trial?", options: ["Because it costs more", "To delay the decision forever", "It is easier to approve and proves the idea", "It is not useful"], answer: 2, why: "Small, measurable tests reduce risk." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Problem Solving and Decision Making",
    questions: [
      { q: "A clear problem statement includes:", options: ["Only a complaint", "What, where, when, how big and why it matters", "A person to blame", "A solution"], answer: 1, why: "Those parts make it solvable." },
      { q: "If you have no numbers about a problem, you should:", options: ["Ask AI to invent them", "Guess", "Give up", "Collect some for a week"], answer: 3, why: "Facts beat guesses." },
      { q: "How can AI help with a problem statement?", options: ["It cannot help", "By inventing the facts", "By deciding for you", "By asking you questions that sharpen it"], answer: 3, why: "Good questions reveal what you need." },
      { q: "A symptom is:", options: ["The root cause", "A sign of a problem, not its cause", "A solution", "A tool"], answer: 1, why: "Symptoms point to deeper causes." },
      { q: "In the 5 Whys, you ask \"Why?\" about:", options: ["Fifty times", "Only once", "Each answer, about five times", "Nothing"], answer: 2, why: "Each why digs deeper." },
      { q: "In the checkout example, the root cause was:", options: ["The schedule did not match evening demand", "Customers were slow", "The registers were old", "It was raining"], answer: 0, why: "The schedule was built for mornings." },
      { q: "How many options should you compare at least?", options: ["None", "One", "Four, including change nothing", "Only AI's first idea"], answer: 2, why: "Comparing several leads to better decisions." },
      { q: "To brainstorm means to:", options: ["List many ideas quickly without judging yet", "Decide fast", "Argue", "Write a report"], answer: 0, why: "Judging comes later." },
      { q: "AI suggests an idea your workplace could never approve. You:", options: ["Insist on it", "Cross it out", "Hide it", "Pay for it yourself"], answer: 1, why: "Keep realistic options." },
      { q: "Which is a common decision matrix criterion?", options: ["Weather tomorrow", "Favorite color", "Lucky number", "Cost"], answer: 3, why: "Cost is a key criterion." },
      { q: "Scores in this course's matrix run from:", options: ["1 to 5", "1 to 100", "A to Z", "0 to 1 only"], answer: 0, why: "A simple 1-5 scale." },
      { q: "The highest matrix total is:", options: ["Not useful", "Automatically the answer", "Always wrong", "A strong candidate, which you still sanity-check"], answer: 3, why: "Check that the result makes sense." },
      { q: "Who chooses weights and scores?", options: ["A random number", "AI alone", "You, based on facts and what your workplace values", "Nobody"], answer: 2, why: "Judgment stays with you." },
      { q: "Which is a common AI reasoning problem?", options: ["Being too careful always", "Made-up numbers", "Refusing to write", "Perfect math"], answer: 1, why: "AI can invent figures." },
      { q: "Rules and policies in AI's answer should be checked with:", options: ["Nobody", "Another AI only", "A rumor", "The official source or your manager"], answer: 3, why: "Rules need an authoritative source." },
      { q: "Why write down what you checked?", options: ["It is not useful", "To fill space", "It makes your recommendation stronger", "To blame AI"], answer: 2, why: "It shows careful work." },
      { q: "Which should never go into an AI tool while problem solving?", options: ["Confidential customer data", "A general description of the problem", "Your list of options", "Criteria names"], answer: 0, why: "Confidential data stays out." },
      { q: "A one-page recommendation includes:", options: ["Only your opinion", "Problem, root cause, options, recommendation, first steps, measure, risks", "Every email you sent", "Passwords"], answer: 1, why: "Those sections make it actionable." },
      { q: "A success measure is:", options: ["Your salary", "The number that shows whether the change worked", "A compliment", "A guess"], answer: 1, why: "Measures prove results." },
      { q: "Which trial is best to propose?", options: ["Two weeks on two evenings, measuring wait times", "Change everything forever right away", "No trial and no measure", "A secret change"], answer: 0, why: "Small, measured trials are easy to approve." }
    ]
  }
};
