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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Science, technology, engineering and math teachers, instructional coaches and school leaders who want students to use AI as a tool in investigations and design while still building real reasoning.",
    startingPoint: "Can teach STEM content, run labs and assign problem sets. Some have used an AI assistant to make practice problems. Few have a routine for checking AI's math, code or claims, or for designing tasks where student reasoning stays visible.",
    gap: "AI makes confident errors in multi-step math, code, diagrams and citations, and it can solve many textbook problems for students. Teachers need lessons where students use AI as scientists and engineers would: as a helper whose output is a hypothesis to test, with students explaining their own thinking.",
    constraints: [
      "Time: short lessons that fit into a planning period",
      "Devices: a school computer; some tools (Google Colab, Teachable Machine) need accounts and district approval",
      "Privacy and rules: check district policy and tool terms before students use any AI or online tool",
      "Free tool resources are not guaranteed, so plans need a backup and students save work often",
      "Every AI-made problem, explanation and piece of code must be checked before students see it"
    ],
    prerequisites: "None. Teachers new to AI tools may want an introductory AI course first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given AI-made STEM practice problems with solutions", action: "check every solution with a second method, a calculator or a graphing tool", standard: "before students see any problem" },
    { id: "O2", condition: "Given a public dataset and an AI coding helper", action: "plan a data investigation where students comment each line of code, predict the result and check one number by hand", standard: "with every understanding step included" },
    { id: "O3", condition: "Given an AI explanation, analogy or diagram", action: "find and fix misconceptions by checking it against your curriculum or a trusted source", standard: "before using it in class" },
    { id: "O4", condition: "Using a free tool or an unplugged card activity", action: "explain how machine learning uses training data to make predictions and why varied data matters", standard: "with a working classroom example" },
    { id: "O5", condition: "Given an AI claim such as a statistic, conversion or citation", action: "apply the claim, evidence, test, conclude routine", standard: "reaching accept, reject or not enough evidence with a reason" },
    { id: "O6", condition: "When planning a STEM task or design challenge", action: "design a task where students show their own reasoning and label its AI use level", standard: "with a verification step and an explanation in students' own words" }
  ],
  chapters: [
    {
      name: "Chapter 1: AI as a STEM tool",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "generate STEM practice with AI and verify every solution before students see it.",
          quickCheck: [
            { objective: "O1", q: "Where is AI especially likely to make mistakes in math?", options: ["Copying a problem's wording", "Multi-step problems", "Writing a word problem's context", "Choosing clean numbers"], answer: 1, why: "AI makes arithmetic and reasoning errors, especially across several steps." },
            { objective: "O1", q: "AI's worked solution and your calculator check give different answers. What would you do?", options: ["Trust the AI because it showed steps", "Trust the calculator without looking", "Remove the problem without checking", "Work the problem out yourself"], answer: 3, why: "When two methods disagree, the lesson says to work it out yourself." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "plan a data investigation where AI helps with code and students show understanding.",
          quickCheck: [
            { objective: "O2", q: "What is Google Colab?", options: ["A free Python notebook that runs in the browser", "A paid statistics package", "A tool that only makes slides", "A dataset of weather records"], answer: 0, why: "Colab lets students run Python in a browser with a Google account." },
            { objective: "O2", q: "A student ran AI-written code and got a graph but cannot say what the code does. What would you do?", options: ["Accept the graph as finished", "Have them comment each line in their own words and check one number by hand", "Ask AI to write a longer program", "Give them a lower grade and move on"], answer: 1, why: "If students cannot explain the code, they have not learned it yet." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "use AI explanations and simulations while catching their misconceptions.",
          quickCheck: [
            { objective: "O3", q: "What is the risk of an AI analogy in science?", options: ["It is always too long", "It cannot be printed", "It can mislead where the analogy breaks down", "It only works in math"], answer: 2, why: "Analogies like water for electric current can break down and create misconceptions." },
            { objective: "O3", q: "An AI-made diagram you plan to show looks wrong in one place. What would you do?", options: ["Check it against your curriculum or a trusted source and fix it", "Show it anyway because AI made it", "Ask students to memorize it", "Delete every AI diagram you have"], answer: 0, why: "AI diagrams can be scientifically wrong, so check them before use." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: AI as a STEM tool",
        questions: [
          { objective: "O1", q: "AI gives a step-by-step solution to a multi-step problem. You should:", options: ["Use it as is", "Make it longer", "Verify it before students see it", "Delete the steps"], answer: 2, why: "AI makes arithmetic and reasoning errors." },
          { objective: "O1", q: "A good way to verify an AI answer is to:", options: ["Check it with a second method or a calculator", "Ask the same question again and accept the same answer", "Trust it if it is confident", "Ask a student to guess"], answer: 0, why: "A second method catches errors." },
          { objective: "O2", q: "Google Colab's free resources are:", options: ["Guaranteed and unlimited", "Paid only", "Only for teachers", "Not guaranteed; save work often"], answer: 3, why: "Colab says free resources are not guaranteed." },
          { objective: "O2", q: "Students used AI to write code. How do they show understanding?", options: ["Run it without reading", "Comment every line in their own words and check a result by hand", "Copy it to another notebook", "Ask AI to explain it to the teacher"], answer: 1, why: "Explaining and checking build understanding." },
          { objective: "O3", q: "Why give students an AI explanation with an error?", options: ["To confuse them", "It is a test of speed", "To save time", "Finding errors in AI output is a scientific skill"], answer: 3, why: "Checking claims is what scientists do." }
        ]
      }
    },
    {
      name: "Chapter 2: AI as a STEM subject",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "teach the core idea of machine learning with a hands-on activity.",
          quickCheck: [
            { objective: "O4", q: "What is the core idea of machine learning?", options: ["A person writes every rule by hand", "The program memorizes one answer", "The computer guesses at random", "A program finds patterns in many labeled examples"], answer: 3, why: "Machine learning learns from training data instead of hand-written rules." },
            { objective: "O4", q: "Your class has no devices for Teachable Machine. What would you do?", options: ["Skip the topic", "Run the unplugged version: sort animal cards by features, write rules, test on new cards", "Show a video only", "Wait until next year"], answer: 1, why: "The unplugged card activity teaches the same idea without devices." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "teach students to test AI claims like scientists.",
          quickCheck: [
            { objective: "O5", q: "In the verification routine, what comes right after \"Claim\"?", options: ["Conclude", "Test", "Evidence", "Publish"], answer: 2, why: "The routine is Claim, Evidence, Test, Conclude." },
            { objective: "O5", q: "AI gives students a statistic with a citation. What should they do?", options: ["Copy the citation into their report", "Ask AI if the citation is real", "Ignore the statistic", "Find the source and check it exists and says that"], answer: 3, why: "AI sources must be found and checked, not trusted." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "lead STEM learning where students use AI as a tool, check it rigorously and keep their own reasoning visible.",
          quickCheck: [
            { objective: "O6", q: "At which stages of the engineering design process is AI most useful?", options: ["Brainstorming and improving", "Building and testing only", "Defining the problem only", "None of the stages"], answer: 0, why: "AI helps generate ideas and explain failures; students still choose, build, test and justify." },
            { objective: "O6", q: "AI can solve your textbook problem set. What would you change so reasoning stays visible?", options: ["Assign more of the same problems", "Ban calculators", "Ask students to predict first and explain why the method works", "Give the answers in advance"], answer: 2, why: "Predicting, explaining and comparing methods show thinking that AI cannot do for them." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: AI as a STEM subject",
        questions: [
          { objective: "O4", q: "In machine learning, training data is:", options: ["The final grade", "The program's code", "The labeled examples a program learns from", "A password"], answer: 2, why: "Patterns are learned from examples." },
          { objective: "O4", q: "A classifier trained only on photos of one kind of dog will likely:", options: ["Make wrong predictions on varied examples", "Recognize all animals perfectly", "Refuse to run", "Become faster"], answer: 0, why: "One-sided data leads to poor predictions." },
          { objective: "O5", q: "What is step 3 of the verification routine?", options: ["Claim", "Test", "Evidence", "Conclude"], answer: 1, why: "Test the claim against data or a trusted source." },
          { objective: "O5", q: "AI gives a citation for a statistic. Students should:", options: ["Find the source and check it exists and says that", "Copy it", "Ignore it", "Cite the AI instead"], answer: 0, why: "AI citations may not exist." },
          { objective: "O6", q: "Which task best keeps student reasoning visible?", options: ["Solve 20 textbook problems at home", "Watch a video only", "Copy the answer key", "Predict before calculating and explain why the method works"], answer: 3, why: "Prediction and explanation show thinking." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI in STEM Education",
    questions: [
      { objective: "O1", q: "STEM stands for:", options: ["Students, teachers, editors, managers", "Science, technology, engineering and math", "Study, test, evaluate, memorize", "Software, tools, email, media"], answer: 1, why: "The four fields." },
      { objective: "O1", q: "AI is especially error-prone on:", options: ["Lists of colors", "Greeting messages", "Multi-step math problems", "Spelling common words"], answer: 2, why: "Multi-step reasoning causes errors." },
      { objective: "O1", q: "Desmos is useful for:", options: ["Email", "Grading essays", "Graphing and checking math", "Attendance"], answer: 2, why: "Graphing tools verify answers visually." },
      { objective: "O1", q: "Asking AI for common mistakes on a problem gives you:", options: ["Discussion questions about misconceptions", "The final answer", "A grade", "A shortcut"], answer: 0, why: "Mistakes make good discussion." },
      { objective: "O2", q: "Google Colab is:", options: ["A video app", "A paid laptop", "A grading tool", "A free Python notebook in the browser"], answer: 3, why: "It runs Python online." },
      { objective: "O2", q: "A CSV file is:", options: ["An image", "A simple table file with comma-separated values", "A video", "A password file"], answer: 1, why: "Common for datasets." },
      { objective: "O2", q: "A code comment explains:", options: ["Nothing", "The weather", "The student's grade", "What a line of code does"], answer: 3, why: "Comments show understanding." },
      { objective: "O2", q: "Predicting a graph before running code helps students:", options: ["Run code faster", "Skip learning", "Think about what the code should do", "Avoid errors automatically"], answer: 2, why: "Prediction builds reasoning." },
      { objective: "O3", q: "AI analogies in science can:", options: ["Mislead if they break down", "Never be wrong", "Replace experiments", "Prove claims"], answer: 0, why: "Check analogies for misconceptions." },
      { objective: "O3", q: "A simulation lets students:", options: ["Avoid thinking", "Explore how something works with a model", "Grade themselves", "Skip the lesson"], answer: 1, why: "Models support exploration." },
      { objective: "O4", q: "Machine learning finds:", options: ["Patterns in labeled examples", "Hand-written rules only", "Passwords", "Lost files"], answer: 0, why: "It learns from data." },
      { objective: "O4", q: "If training data is not varied, predictions:", options: ["Stop completely", "Are always right", "Get faster", "May be wrong for new examples"], answer: 3, why: "Data quality decides accuracy." },
      { objective: "O4", q: "Before students use a tool like Teachable Machine, check:", options: ["Its color", "Its terms and your district's approval", "Its popularity", "Nothing"], answer: 1, why: "Student use needs approval and age checks." },
      { objective: "O4", q: "An unplugged machine-learning activity uses:", options: ["Only phones", "Only laptops", "Cards and rules, no devices", "Robots"], answer: 2, why: "Ideas can be taught without devices." },
      { objective: "O5", q: "In the verification routine, \"conclude\" can be:", options: ["Always reject", "Always accept", "Accept, reject or not enough evidence", "Skip"], answer: 2, why: "Evidence decides." },
      { objective: "O5", q: "AI output should be treated as:", options: ["A hypothesis to test", "A final answer", "A law", "A grade"], answer: 0, why: "Test before trusting." },
      { objective: "O6", q: "In engineering design, AI is most useful for:", options: ["Grading designs", "Building the prototype for students", "Testing physical materials itself", "Brainstorming and improving"], answer: 3, why: "Students still build, test and justify." },
      { objective: "O6", q: "A prototype is:", options: ["A final product", "An early model to test an idea", "A test score", "A software license"], answer: 1, why: "Prototypes are tested and improved." },
      { objective: "O6", q: "A lab notebook shows:", options: ["Attendance", "Only the final answer", "The teacher's plan", "What a student did, observed and concluded"], answer: 3, why: "It makes thinking visible." },
      { objective: "O6", q: "Each STEM task should be labeled with:", options: ["A password", "A price", "An AI use level", "Nothing"], answer: 2, why: "Students need to know when AI is allowed." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      4,
      7,
      8,
      10,
      11,
      14,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "AI as a tool in an investigation",
        objective: "O2",
        notYet: "AI does the investigation for students, or the tool is not approved.",
        meets: "Students use an approved AI tool for one clear part, such as writing code or brainstorming designs.",
        exceeds: "Students also predict what the AI's output should show before they run it."
      },
      {
        name: "Verification step",
        objective: "O5",
        notYet: "No step where students check the AI's output.",
        meets: "Students check the AI's code, numbers or claims against data, a calculation or a test.",
        exceeds: "Students record a conclusion: accept, reject or not enough evidence, with a reason."
      },
      {
        name: "Reasoning in their own words",
        objective: "O6",
        notYet: "Students only hand in an answer or a graph.",
        meets: "A task where students explain their reasoning in their own words.",
        exceeds: "Students also compare two methods or find an error."
      },
      {
        name: "AI use level",
        objective: "O6",
        notYet: "No AI use level is given.",
        meets: "The task is labeled with an AI use level.",
        exceeds: "The plan explains to students why that level fits the task."
      },
      {
        name: "Teacher checked the materials",
        objective: "O1",
        notYet: "AI-made problems, code or explanations were not checked.",
        meets: "Every AI-made solution and explanation was checked before class.",
        exceeds: "The plan names the method used to check, such as a calculator, Desmos or a trusted source."
      }
    ]
  },
  evaluation: {
    results: [
      "Teachers who finish the course and pass the final task (rubric)",
      "Teachers who teach a STEM lesson with an AI verification step within 30 days (follow-up survey)",
      "Students who can name an AI error they found and how they checked it",
      "Teachers who take another Koach Learn AI-for-educators course"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with an AI assistant your district allows",
      "Free tools such as Desmos, PhET simulations, Google Colab or Teachable Machine, where your district approves them",
      "One STEM lesson or design challenge you will teach soon",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Run it as a department session: take the pre-test together, then have teachers plan one lesson for their own class.",
      "Check district approval and student account rules before anyone tries Colab or Teachable Machine with students.",
      "Have pairs swap one AI-made problem set and verify each other's solutions with a second method.",
      "Use the unplugged card activity when devices or approvals are not ready.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
