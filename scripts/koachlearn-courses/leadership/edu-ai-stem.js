"use strict";

// Koach Learn course: Leadership Development -> "AI in STEM Education" (advanced topic in AI for School and Educational Leaders).
// Shape copied from re-entry/reentry-ai-digital-confidence.js. Colab facts checked on research.google.com on 27 October 2026.

module.exports = {
  id: "edu-ai-stem",
  category: "Leadership Development",
  name: "AI in STEM Education",
  skills: "Generating STEM problems with verified solutions, Using AI as a coding helper in data investigations, Teaching how AI learns from data, Verifying AI claims like a scientist, Using AI in the engineering design process, Designing tasks that show reasoning",
  outcome: "design and teach a STEM lesson in which students use AI as a tool, to help write code, analyze data or brainstorm designs, and then verify its output like scientists and engineers, with tasks that make student reasoning visible.",
  about: [
    "This course is for science, technology, engineering and math (STEM) teachers, coaches and leaders. AI is both a tool for STEM learning and a STEM topic in its own right. Students should learn to use it, check it, and understand how it works.",
    "Chapter 1 uses AI as a teacher's and student's tool: problem sets with verified solutions, simulations and graphing, and data investigations where AI helps write code. Chapter 2 makes AI the subject: how machines learn from data, verifying AI claims like a scientist, AI in the engineering design process, and tasks that keep student reasoning at the center.",
    "Student use of AI tools depends on your district's approval and each tool's age rules. Keep student information out of unapproved tools. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Plan and (if you can) teach one STEM lesson where students use an approved AI tool as part of an investigation, for example asking AI to help write Python code in Google Colab to graph a public dataset, or to brainstorm designs for an engineering challenge. The lesson must include a verification step (students check the AI's code, numbers or claims against data, a calculation or a test), a task where students explain their reasoning in their own words, and an AI use level for the task.",
  chapters: [
    {
      name: "Chapter 1: AI as a STEM tool",
      lessons: [
        {
          title: "Problem sets with verified solutions",
          minutes: 5,
          goal: "Generate STEM practice with AI and verify every solution.",
          text: [
            "AI can produce many practice problems fast: word problems with real-world contexts, problems at several difficulty levels, and step-by-step worked solutions. That saves time, but AI is known to make arithmetic and reasoning errors, especially in multi-step problems, and can state a wrong answer confidently.",
            "So verify every solution. Work it yourself, check it with a calculator or graphing tool such as Desmos, or ask the AI to check its answer by a second method and compare. If the two methods disagree, work it out yourself.",
            "Ask for problems with clean numbers for practice, or realistic messy numbers for application. Ask for common mistakes students make on each problem; those make good discussion questions."
          ],
          steps: ["Ask for problems at the level and context you need.", "Ask for step-by-step solutions.", "Work or check every answer with a calculator or graphing tool.", "Ask for a second method and compare.", "Ask for common mistakes to discuss."],
          words: [["Worked solution", "a solution showing every step."], ["Verify", "check that something is correct using another method or source."]],
          slides: [
            { title: "Fast practice", bullets: ["Real-world word problems", "Several difficulty levels", "Step-by-step solutions"] },
            { title: "AI makes math mistakes", bullets: ["Especially multi-step problems", "Can be confidently wrong", "Verify every answer"] },
            { title: "How to verify", bullets: ["Work it yourself", "Calculator or graphing tool such as Desmos", "Second method; compare"] }
          ],
          tryIt: "Ask AI for six multi-step problems on a topic you teach, with solutions. Verify each one and count how many were wrong.",
          youCanNow: "generate STEM practice with AI and verify every solution before students see it."
        },
        {
          title: "Data investigations with AI as a coding helper",
          minutes: 6,
          goal: "Plan a data investigation where AI helps write code students check and explain.",
          text: [
            "Real data makes STEM real. Students can investigate public datasets (weather, health, sports, environment) in Google Colab, a free Python notebook in the browser; it needs a Google account, and free resources are not guaranteed, so save work often. Check your district's rules for student Google accounts first.",
            "AI can be a coding helper: students describe what they want (\"read this CSV and make a line graph of temperature by month\") and AI suggests code. Many students can then run code they could not yet write alone, and learn from it.",
            "Build in understanding: students must add a comment to each line explaining what it does, predict the graph before running the code, and check one number in the output by hand. If they cannot explain the code, they have not learned it yet."
          ],
          steps: ["Choose a public dataset and a question.", "Students ask AI to help write code for one step.", "Students comment each line in their own words.", "Predict the result, then run the code.", "Check one number by hand."],
          words: [["Dataset", "an organized collection of data, often a table."], ["CSV", "a simple file format for tables, with values separated by commas."], ["Code comment", "a note in code, often starting with #, that explains what the code does."]],
          slides: [
            { title: "Real data, free tools", bullets: ["Public datasets: weather, health, sports", "Google Colab: free, in the browser", "Check district rules for student accounts"] },
            { title: "AI as coding helper", bullets: ["Describe the step in words", "AI suggests code", "Students run what they could not yet write"] },
            { title: "Build understanding", bullets: ["Comment every line", "Predict, then run", "Check one number by hand"] }
          ],
          sources: [{ name: "Google Colab FAQ", url: "https://research.google.com/colaboratory/faq.html" }],
          tryIt: "Find a public dataset on a topic your students care about. Use AI to help write code in Colab that graphs one variable, add a comment to every line, and check one number by hand.",
          youCanNow: "plan a data investigation where AI helps with code and students show understanding."
        },
        {
          title: "Simulations, visuals and explanations",
          minutes: 5,
          goal: "Use AI to create explanations and visuals, and check them for misconceptions.",
          text: [
            "AI can explain STEM ideas in several ways (an analogy, a step-by-step, a story) and suggest diagrams, simulations or demonstrations. Free simulation and graphing tools such as PhET simulations and Desmos let students explore; AI can help you write the guiding questions.",
            "Watch for misconceptions. AI analogies can mislead (for example, explaining electric current with water flow in ways that break down), and AI-generated diagrams can be scientifically wrong. Check every explanation against your curriculum and a trusted source.",
            "A useful classroom move: give students an AI explanation with a deliberate or real error and ask them to find and fix it. Finding errors in AI output is a scientific skill."
          ],
          steps: ["Ask AI for two or three explanations of a concept.", "Check each against your curriculum and a trusted source.", "Use AI to write guiding questions for a simulation.", "Check diagrams for scientific accuracy.", "Have students find errors in an AI explanation."],
          words: [["Simulation", "a computer model that lets you explore how something works."], ["Analogy", "explaining something by comparing it to something familiar."], ["Misconception", "a common wrong idea about how something works."]],
          slides: [
            { title: "Explanations and simulations", bullets: ["Several ways to explain one idea", "Guiding questions for PhET or Desmos"] },
            { title: "Watch for misconceptions", bullets: ["Analogies can mislead", "AI diagrams can be wrong", "Check against a trusted source"] },
            { title: "Find the error", bullets: ["Give students a flawed AI explanation", "They find and fix it"] }
          ],
          tryIt: "Ask AI to explain one STEM concept you teach in two different ways. Find any misconception in each, and write a find-the-error task for students.",
          youCanNow: "use AI explanations and simulations while catching their misconceptions."
        }
      ],
      check: {
        title: "Knowledge Check 1: AI as a STEM tool",
        questions: [
          { q: "AI gives a step-by-step solution to a multi-step problem. You should:", options: ["Use it as is", "Make it longer", "Verify it before students see it", "Delete the steps"], answer: 2, why: "AI makes arithmetic and reasoning errors." },
          { q: "A good way to verify an AI answer is to:", options: ["Check it with a second method or a calculator", "Ask the same question again and accept the same answer", "Trust it if it is confident", "Ask a student to guess"], answer: 0, why: "A second method catches errors." },
          { q: "Google Colab's free resources are:", options: ["Guaranteed and unlimited", "Paid only", "Only for teachers", "Not guaranteed; save work often"], answer: 3, why: "Colab says free resources are not guaranteed." },
          { q: "Students used AI to write code. How do they show understanding?", options: ["Run it without reading", "Comment every line in their own words and check a result by hand", "Copy it to another notebook", "Ask AI to explain it to the teacher"], answer: 1, why: "Explaining and checking build understanding." },
          { q: "Why give students an AI explanation with an error?", options: ["To confuse them", "It is a test of speed", "To save time", "Finding errors in AI output is a scientific skill"], answer: 3, why: "Checking claims is what scientists do." }
        ]
      }
    },
    {
      name: "Chapter 2: AI as a STEM subject",
      lessons: [
        {
          title: "How machines learn from data",
          minutes: 6,
          goal: "Teach the basic idea of machine learning with a hands-on example.",
          text: [
            "Machine learning is a STEM topic students can understand. The core idea: instead of writing rules, we show a program many labeled examples (training data) and it finds patterns, then makes predictions on new examples. Its accuracy depends on the data: too few examples, or examples that are not varied, lead to wrong predictions.",
            "Hands-on: free tools such as Google's Teachable Machine let students train a simple image or sound classifier in a browser; check its terms and your district's approval before student use. An unplugged version works too: students sort cards of animals by features and write rules, then test on new cards.",
            "Then ask the big questions: What happens if training data only shows one kind of example? How would we measure accuracy? This links machine learning to statistics, data quality and fairness."
          ],
          steps: ["Explain: labeled examples in, patterns found, predictions out.", "Train a simple classifier, or do the unplugged card sort.", "Test it on new examples.", "Change the training data and see what happens.", "Discuss accuracy, data quality and fairness."],
          words: [["Machine learning", "programs that learn patterns from examples instead of following hand-written rules."], ["Training data", "the labeled examples a program learns from."], ["Classifier", "a program that sorts things into categories."]],
          slides: [
            { title: "Machine learning in one line", bullets: ["Labeled examples in", "Patterns found", "Predictions on new examples"] },
            { title: "Hands-on", bullets: ["Train a simple classifier in a browser", "Or an unplugged card sort", "Check terms and approval first"] },
            { title: "Big questions", bullets: ["What if the data is one-sided?", "How do we measure accuracy?", "Links to statistics and fairness"] }
          ],
          tryIt: "Plan a 20-minute activity where students train (or simulate, unplugged) a simple classifier, then change the training data and explain what happened to its predictions.",
          youCanNow: "teach the core idea of machine learning with a hands-on activity."
        },
        {
          title: "Verifying AI claims like a scientist",
          minutes: 5,
          goal: "Teach students a routine to test AI claims against evidence.",
          text: [
            "Scientific thinking is the best defense against AI errors. Teach a four-step routine: Claim: what exactly does the AI say? Evidence: what data or source would show it is true? Test: check the claim against data, a calculation, an experiment or a trusted source. Conclude: accept, reject or \"not enough evidence\".",
            "Practice with STEM claims AI might get wrong: a unit conversion, a statistic, a cause-and-effect claim, a chemical formula, or a citation that may not exist. Students learn that AI sources must be found and checked, not trusted.",
            "This routine works across subjects and builds the habit you want for life: AI output is a hypothesis to test, not an answer to copy."
          ],
          steps: ["Claim: state exactly what AI says.", "Evidence: what would show it is true?", "Test: data, calculation, experiment or trusted source.", "Conclude: accept, reject or not enough evidence."],
          words: [["Claim", "a statement that something is true."], ["Hypothesis", "an idea that can be tested."], ["Citation", "a reference to a source of information."]],
          slides: [
            { title: "Four-step routine", bullets: ["Claim", "Evidence", "Test", "Conclude"] },
            { title: "Practice claims", bullets: ["Unit conversions and statistics", "Cause and effect", "Citations that may not exist"] },
            { title: "The life habit", bullets: ["AI output is a hypothesis", "Test it, do not copy it"] }
          ],
          tryIt: "Collect three STEM claims from an AI tool on a topic you teach. Run each through the four-step routine and note which held up.",
          youCanNow: "teach students to test AI claims like scientists."
        },
        {
          title: "Engineering design and tasks that show reasoning",
          minutes: 6,
          goal: "Use AI in the engineering design process and design tasks where reasoning stays visible.",
          text: [
            "In the engineering design process (define the problem, brainstorm, plan, build, test, improve), AI is most useful at the brainstorming and improving stages: generating many design ideas, suggesting tests, or explaining why a prototype failed. Students still choose, build, test and justify.",
            "Because AI can solve many textbook problems, design tasks where reasoning is visible: ask students to explain why a method works, compare two methods, find an error, make a prediction before calculating, or apply the idea to their own data or design. Oral explanations and lab notebooks show thinking.",
            "Label each task with an AI use level so students know when AI is a tool and when the skill must be shown alone, and explain why."
          ],
          steps: ["Use AI for brainstorming and improving in design.", "Students choose, build, test and justify.", "Design tasks: explain, compare, find errors, predict, apply.", "Use oral explanations and lab notebooks.", "Label the AI use level for each task."],
          words: [["Engineering design process", "the cycle of defining a problem, designing, building, testing and improving."], ["Prototype", "an early model built to test an idea."], ["Lab notebook", "a record of what a student did, observed and concluded."]],
          slides: [
            { title: "AI in engineering design", bullets: ["Brainstorm many ideas", "Suggest tests; explain failures", "Students choose, build, test, justify"] },
            { title: "Keep reasoning visible", bullets: ["Explain why, compare methods", "Find the error, predict first", "Apply to their own data or design"] },
            { title: "Label the AI use level", bullets: ["When AI is a tool", "When the skill is shown alone"] }
          ],
          tryIt: "Final task: plan your STEM lesson where students use an approved AI tool in an investigation or design challenge, with a verification step, a reasoning task in their own words, and an AI use level. Teach it if you can and note what students found when they checked the AI.",
          youCanNow: "lead STEM learning where students use AI as a tool, check it rigorously and keep their own reasoning visible."
        }
      ],
      check: {
        title: "Knowledge Check 2: AI as a STEM subject",
        questions: [
          { q: "In machine learning, training data is:", options: ["The final grade", "The program's code", "The labeled examples a program learns from", "A password"], answer: 2, why: "Patterns are learned from examples." },
          { q: "A classifier trained only on photos of one kind of dog will likely:", options: ["Make wrong predictions on varied examples", "Recognize all animals perfectly", "Refuse to run", "Become faster"], answer: 0, why: "One-sided data leads to poor predictions." },
          { q: "What is step 3 of the verification routine?", options: ["Claim", "Test", "Evidence", "Conclude"], answer: 1, why: "Test the claim against data or a trusted source." },
          { q: "AI gives a citation for a statistic. Students should:", options: ["Find the source and check it exists and says that", "Copy it", "Ignore it", "Cite the AI instead"], answer: 0, why: "AI citations may not exist." },
          { q: "Which task best keeps student reasoning visible?", options: ["Solve 20 textbook problems at home", "Watch a video only", "Copy the answer key", "Predict before calculating and explain why the method works"], answer: 3, why: "Prediction and explanation show thinking." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI in STEM Education",
    questions: [
      { q: "STEM stands for:", options: ["Students, teachers, editors, managers", "Science, technology, engineering and math", "Study, test, evaluate, memorize", "Software, tools, email, media"], answer: 1, why: "The four fields." },
      { q: "AI is especially error-prone on:", options: ["Lists of colors", "Greeting messages", "Multi-step math problems", "Spelling common words"], answer: 2, why: "Multi-step reasoning causes errors." },
      { q: "Desmos is useful for:", options: ["Email", "Grading essays", "Graphing and checking math", "Attendance"], answer: 2, why: "Graphing tools verify answers visually." },
      { q: "Asking AI for common mistakes on a problem gives you:", options: ["Discussion questions about misconceptions", "The final answer", "A grade", "A shortcut"], answer: 0, why: "Mistakes make good discussion." },
      { q: "Google Colab is:", options: ["A video app", "A paid laptop", "A grading tool", "A free Python notebook in the browser"], answer: 3, why: "It runs Python online." },
      { q: "A CSV file is:", options: ["An image", "A simple table file with comma-separated values", "A video", "A password file"], answer: 1, why: "Common for datasets." },
      { q: "A code comment explains:", options: ["Nothing", "The weather", "The student's grade", "What a line of code does"], answer: 3, why: "Comments show understanding." },
      { q: "Predicting a graph before running code helps students:", options: ["Run code faster", "Skip learning", "Think about what the code should do", "Avoid errors automatically"], answer: 2, why: "Prediction builds reasoning." },
      { q: "AI analogies in science can:", options: ["Mislead if they break down", "Never be wrong", "Replace experiments", "Prove claims"], answer: 0, why: "Check analogies for misconceptions." },
      { q: "A simulation lets students:", options: ["Avoid thinking", "Explore how something works with a model", "Grade themselves", "Skip the lesson"], answer: 1, why: "Models support exploration." },
      { q: "Machine learning finds:", options: ["Patterns in labeled examples", "Hand-written rules only", "Passwords", "Lost files"], answer: 0, why: "It learns from data." },
      { q: "If training data is not varied, predictions:", options: ["Stop completely", "Are always right", "Get faster", "May be wrong for new examples"], answer: 3, why: "Data quality decides accuracy." },
      { q: "Before students use a tool like Teachable Machine, check:", options: ["Its color", "Its terms and your district's approval", "Its popularity", "Nothing"], answer: 1, why: "Student use needs approval and age checks." },
      { q: "An unplugged machine-learning activity uses:", options: ["Only phones", "Only laptops", "Cards and rules, no devices", "Robots"], answer: 2, why: "Ideas can be taught without devices." },
      { q: "In the verification routine, \"conclude\" can be:", options: ["Always reject", "Always accept", "Accept, reject or not enough evidence", "Skip"], answer: 2, why: "Evidence decides." },
      { q: "AI output should be treated as:", options: ["A hypothesis to test", "A final answer", "A law", "A grade"], answer: 0, why: "Test before trusting." },
      { q: "In engineering design, AI is most useful for:", options: ["Grading designs", "Building the prototype for students", "Testing physical materials itself", "Brainstorming and improving"], answer: 3, why: "Students still build, test and justify." },
      { q: "A prototype is:", options: ["A final product", "An early model to test an idea", "A test score", "A software license"], answer: 1, why: "Prototypes are tested and improved." },
      { q: "A lab notebook shows:", options: ["Attendance", "Only the final answer", "The teacher's plan", "What a student did, observed and concluded"], answer: 3, why: "It makes thinking visible." },
      { q: "Each STEM task should be labeled with:", options: ["A password", "A price", "An AI use level", "Nothing"], answer: 2, why: "Students need to know when AI is allowed." }
    ]
  }
};
