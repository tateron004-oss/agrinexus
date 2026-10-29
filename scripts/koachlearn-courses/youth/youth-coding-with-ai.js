"use strict";

// Koach Learn course: Youth -> "Intro to Coding with AI" (bonus). Skill-building: by the end the student can write, run and fix a small Python program with an AI assistant as a helper, and explain every line.
// Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "youth-coding-with-ai",
  category: "Youth",
  name: "Intro to Coding with AI",
  skills: "Running Python in a free online notebook, Using variables and input, Making decisions with if, Repeating with loops, Asking AI to explain and fix code",
  outcome: "write and run a small Python quiz game in a free online notebook, using an AI assistant to explain code and help fix errors, and explain what every line of your program does.",
  about: [
    "This course is for teens who have never coded, or who tried once and got stuck. You do not need to be good at math. You need curiosity and about five minutes per lesson.",
    "You will write real Python code in Google Colab, a free notebook that runs in a web browser, so you can use a school or library computer. You will learn the basic building blocks of code, then learn how to use an AI assistant like a patient tutor: to explain code, find mistakes and suggest ideas, while you stay the one who understands and writes the program.",
    "Before you sign up for any tool, check your school's rules on AI use and the tool's minimum age, and involve a parent or guardian. Each lesson ends with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build a Python quiz game in Google Colab with at least 5 questions about a topic you like (a game, a sport, a band, a school subject). It must ask the player's name, ask the questions, keep score, and print a final message. Use an AI assistant to explain or fix at least one part, then write a comment above each part that says in your own words what it does.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teens who have never coded, or who tried once and got stuck, including those who do not see themselves as good at math.",
    startingPoint: "Use phones, apps and games every day and can use a web browser. Have not written or run a program, and may have seen AI write code without knowing how it works.",
    gap: "Coding opens doors to tech jobs and makes AI less mysterious, but copying AI code teaches nothing and breaks school rules in many classes. Teens need to write and run real Python themselves, using AI as a tutor to explain code and fix errors.",
    constraints: [
      "Age limits: Colab needs a Google account and AI tools have minimum ages; a parent or guardian is involved for under-18s",
      "School AI rules differ; graded work may not allow AI",
      "Devices: a school, library or home computer with a web browser; nothing to install",
      "Privacy: no passwords, addresses, ID or phone numbers pasted into AI tools",
      "Beginners: plain words, every term explained, about five minutes per lesson"
    ],
    prerequisites: "None. \"What Is AI? (for Young People)\" is a helpful first course."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "In your own words", action: "explain what code and a program are, and how to use AI as a tutor instead of a ghostwriter within your school's rules", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Using a Google account you are allowed to use", action: "open a Google Colab notebook and run Python code that prints text", standard: "without help, with the output showing under the cell" },
    { id: "O3", condition: "Given a one-question quiz to build", action: "write Python that uses a variable, input, if and else, and a loop", standard: "so it runs correctly with both a right and a wrong answer" },
    { id: "O4", condition: "Given a few lines of code", action: "ask an AI assistant to explain the code line by line, then change one thing, predict the result and run it", standard: "pasting no private information" },
    { id: "O5", condition: "Given a Python error message", action: "find the problem line, fix the bug with AI's help if needed, and run the fix yourself", standard: "until the program runs without errors" },
    { id: "O6", condition: "Starting from a plan written as comments", action: "build a 5-question quiz game one piece at a time and say how you used AI", standard: "with the player's name, score, final message and a comment above each part in your own words" }
  ],
  chapters: [
    {
      name: "Chapter 1: Your first lines of code",
      lessons: [
        {
          objectives: ["O1"],
          title: "What code is, and where AI fits in",
          minutes: 4,
          goal: "Explain what a program is and how an AI assistant can help you learn to code.",
          text: [
            "Code is a list of instructions a computer follows exactly, in order. A program is a set of those instructions that does a job, like a game, an app or a calculator. Python is a popular coding language because its words look a lot like English.",
            "AI assistants such as ChatGPT, Microsoft Copilot and Google Gemini can write and explain code. That is useful, but if you copy code you do not understand, you learn nothing and you cannot fix it when it breaks. In this course, AI is your tutor, not your ghostwriter.",
            "Schools have different rules about AI. Some classes allow it for practice but not for graded work. Always check your teacher's rules, and say when you used AI. Many AI tools also have a minimum age, so read the tool's terms and ask a parent or guardian before you sign up."
          ],
          words: [["Code", "instructions written for a computer to follow."], ["Program", "a set of instructions that does a job."], ["Python", "a popular coding language that is easy to read."]],
          slides: [
            { title: "Code is instructions", bullets: ["The computer follows them exactly, in order", "A program is code that does a job", "Python reads a lot like English"] },
            { title: "AI is your tutor", bullets: ["It can explain code line by line", "It can help find mistakes", "Do not copy code you do not understand"] },
            { title: "Before you start", bullets: ["Check your school's AI rules", "Check the tool's minimum age", "Ask a parent or guardian before signing up"] }
          ],
          tryIt: "Write down one small program you would like to build someday, like a quiz about your favorite game or a tip calculator for your first job. Then write one sentence on how AI could help you learn it without doing it for you.",
          youCanNow: "say what code and a program are, and explain how to use AI as a tutor instead of a shortcut.",
          quickCheck: [
            { objective: "O1", q: "Why is Python a popular first coding language?", options: ["It only works on phones", "It needs no computer", "Its words look a lot like English", "It writes itself"], answer: 2, why: "Python's words look a lot like English, which makes it easier to read." },
            { objective: "O1", q: "A friend says, \"Just have AI write your whole program and hand it in.\" What do you say?", options: ["I will use AI as a tutor and write the code myself, following my teacher's rules", "Good idea; no one will know", "Only if it looks hard", "I will copy it but change the names"], answer: 0, why: "Copying code you do not understand teaches nothing and may break school rules." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Running your first Python code in Google Colab",
          minutes: 5,
          goal: "Open a free Colab notebook and run a line of Python.",
          text: [
            "Google Colab is a free notebook that runs Python in your web browser. You do not need to install anything. You need a Google account. Check its age rules, and if you are under 18 ask a parent or guardian first; a school Google account may work if your school allows Colab.",
            "A notebook is made of cells. A code cell is a box where you type Python. You press the play button next to the cell (or Shift and Enter) to run it, and the result shows underneath.",
            "The first command most coders learn is print. It shows words on the screen. Text goes inside quotes, like this: print(\"Hello, I am learning Python\")."
          ],
          steps: ["Open a web browser and go to colab.research.google.com.", "Sign in with a Google account you are allowed to use.", "Create a new notebook.", "Click in the first code cell and type: print(\"Hello, I am learning Python\")", "Press the play button or Shift and Enter. Read the output under the cell."],
          words: [["Notebook", "a page where you write and run code in small boxes called cells."], ["Cell", "one box in a notebook where you type code."], ["Output", "what the program shows after it runs."]],
          slides: [
            { title: "Google Colab", bullets: ["Free Python in your web browser", "Nothing to install", "Needs a Google account you are allowed to use"] },
            { title: "Notebooks and cells", bullets: ["Type code in a cell", "Press play or Shift + Enter", "The output appears below"] },
            { title: "Your first command", bullets: ["print(\"Hello, I am learning Python\")", "Text goes inside quotes", "print shows it on the screen"] }
          ],
          tryIt: "In a new Colab notebook, print three lines: your first name, your favorite song or game, and one goal for this course. Run the cell and check all three lines appear.",
          youCanNow: "open a Colab notebook, type Python in a cell, run it, and read the output.",
          quickCheck: [
            { objective: "O2", q: "In Python, what does print do?", options: ["Sends your code to a printer", "Shows words or values on the screen", "Deletes a cell", "Saves the notebook"], answer: 1, why: "print shows text or values under the cell when it runs." },
            { objective: "O2", q: "You are 14 and want to use Colab at home. What do you do first?", options: ["Make an account with a fake age", "Use a stranger's account", "Skip Colab", "Check the age rules and ask a parent or guardian, or use an allowed school account"], answer: 3, why: "Colab needs a Google account; check its rules and involve a parent or guardian if you are under 18." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Variables, input, if and loops",
          minutes: 6,
          goal: "Use a variable, ask for input, make a decision with if, and repeat with a loop.",
          text: [
            "A variable is a named box that stores a value. score = 0 makes a box called score and puts 0 in it. Later, score = score + 1 adds one point.",
            "input asks the player to type something: name = input(\"What is your name? \"). An if statement makes a decision: if answer == \"Paris\": print(\"Correct!\") else: print(\"Not quite\"). Two equals signs mean \"is the same as\". The lines under if and else are pushed in with spaces; this is called indentation, and Python needs it.",
            "A loop repeats code. for i in range(3): print(\"Go team!\") prints the cheer three times. These four ideas, variables, input, if and loops, are enough to build a quiz game."
          ],
          steps: ["Make a variable: score = 0", "Ask for input: name = input(\"What is your name? \")", "Make a decision with if and else, indenting the lines under each.", "Repeat something with: for i in range(3):"],
          words: [["Variable", "a named box that stores a value."], ["Input", "something the user types in while the program runs."], ["If statement", "code that runs only when something is true."], ["Loop", "code that repeats."], ["Indentation", "spaces at the start of a line that show which lines belong together."]],
          slides: [
            { title: "Variables store values", bullets: ["score = 0", "score = score + 1 adds a point"] },
            { title: "Input and if", bullets: ["name = input(\"What is your name? \")", "if answer == \"Paris\": then print Correct", "== means \"is the same as\""] },
            { title: "Loops repeat", bullets: ["for i in range(3): repeats 3 times", "Indent the lines inside the loop"] },
            { title: "Four building blocks", bullets: ["Variables, input, if, loops", "Enough to build a quiz game"] }
          ],
          tryIt: "Write a one-question quiz: ask for the player's name, ask one question about your favorite subject or game, and use if and else to print \"Correct\" or \"Not quite\". Run it twice, once with the right answer and once with a wrong one.",
          youCanNow: "use a variable, input, an if statement and a loop in a small Python program.",
          quickCheck: [
            { objective: "O3", q: "What is indentation in Python?", options: ["A type of error", "The spaces that push lines in under an if, else or loop", "A comment line", "The play button"], answer: 1, why: "Indentation shows which lines belong under an if, else or loop, and Python needs it." },
            { objective: "O3", q: "You want the quiz to add a point for a right answer. Which line do you write under the if?", options: ["score = score + 1", "print(score)", "score == 1", "input(score)"], answer: 0, why: "score = score + 1 adds one point to the value stored in score." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Your first lines of code",
        questions: [
          { objective: "O1", q: "What is a program?", options: ["A set of instructions that does a job", "A type of keyboard", "A website address", "A video game console"], answer: 0, why: "A program is code, a set of instructions, that does a job." },
          { objective: "O1", q: "Your class allows AI for practice but not for graded homework. What do you do?", options: ["Use AI for the homework anyway", "Use AI to practice and do the graded work yourself", "Never code again", "Ask a friend to use AI for you"], answer: 1, why: "Following your teacher's rules is part of using AI honestly." },
          { objective: "O2", q: "In Colab, how do you run a code cell?", options: ["Close the browser", "Print the page", "Press the play button or Shift and Enter", "Restart the computer"], answer: 2, why: "The play button or Shift and Enter runs the cell." },
          { objective: "O3", q: "What does score = score + 1 do?", options: ["Deletes the score", "Prints the word score", "Asks the player for a score", "Adds one to the value stored in score"], answer: 3, why: "It takes the current score and adds one." },
          { objective: "O3", q: "What does for i in range(3): do?", options: ["Repeats the indented code 3 times", "Asks 3 questions", "Makes 3 variables", "Stops the program"], answer: 0, why: "A for loop with range(3) repeats the code inside it three times." }
        ]
      }
    },
    {
      name: "Chapter 2: Coding with an AI helper",
      lessons: [
        {
          objectives: ["O4"],
          title: "Asking AI to explain code",
          minutes: 5,
          goal: "Ask an AI assistant to explain a piece of code line by line, and check you understand it.",
          text: [
            "Paste a few lines of code into an AI assistant and ask: \"Explain this Python code line by line for a beginner. Use simple words.\" A good explanation tells you what each line does and why.",
            "Then test your understanding. Change one thing in the code, guess what will happen, and run it. If your guess was right, you understand it. If not, ask the AI: \"I changed this and expected that. Why did it do something else?\"",
            "Do not paste private information into an AI tool: no passwords, home address, school ID numbers or phone numbers. Code for a class project does not need any of them."
          ],
          steps: ["Copy 3 to 10 lines of code.", "Ask: \"Explain this Python code line by line for a beginner.\"", "Change one thing and guess what will happen.", "Run it and compare. Ask a follow-up if your guess was wrong."],
          words: [["Explain line by line", "go through code one line at a time and say what each does."]],
          slides: [
            { title: "Ask for an explanation", bullets: ["Paste a few lines", "\"Explain this line by line for a beginner\"", "Ask for simple words"] },
            { title: "Test your understanding", bullets: ["Change one thing", "Guess what will happen", "Run it and compare"] },
            { title: "Keep private info out", bullets: ["No passwords or school ID numbers", "No home address or phone number"] }
          ],
          tryIt: "Paste your one-question quiz from Lesson 3 into an AI assistant and ask it to explain each line. Then change the right answer to a new one, guess what will happen, and run it.",
          youCanNow: "get a clear line-by-line explanation of code from AI and test that you really understand it.",
          quickCheck: [
            { objective: "O4", q: "What makes a good AI explanation of code?", options: ["It is as long as possible", "It only gives the answer", "It tells what each line does and why", "It rewrites everything"], answer: 2, why: "A good explanation says what each line does and why, in simple words." },
            { objective: "O4", q: "You changed a line, guessed the result, and the program did something else. What next?", options: ["Delete the program", "Ask the AI: \"I changed this and expected that. Why did it do something else?\"", "Guess again without running it", "Paste your password so the AI can check"], answer: 1, why: "A follow-up explaining what you expected helps you understand the code." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Finding and fixing errors with AI",
          minutes: 5,
          goal: "Read an error message and use AI to help fix a bug.",
          text: [
            "A bug is a mistake in code. When Python cannot run a line, it shows an error message. The last line of the message usually names the problem, such as SyntaxError (something is typed wrong) or IndentationError (the spaces at the start of a line are wrong). It also shows the line number.",
            "First try yourself: look at that line for a missing quote, bracket, colon or space. If you are stuck, paste the code and the full error into an AI assistant and ask: \"What does this error mean, and how do I fix it? Explain why.\"",
            "AI can be wrong about code too. Run the fixed version yourself. If the error changes or stays, tell the AI exactly what happened."
          ],
          steps: ["Read the last line of the error message and the line number.", "Check that line for missing quotes, brackets, colons or spaces.", "If stuck, paste the code and the full error into an AI assistant.", "Ask what it means and why the fix works.", "Run the fix yourself and check it works."],
          words: [["Bug", "a mistake in code."], ["Error message", "Python's note saying what went wrong and on which line."], ["Debugging", "finding and fixing bugs."]],
          slides: [
            { title: "Bugs happen to everyone", bullets: ["Error messages are clues, not failure", "Read the last line and the line number"] },
            { title: "Try first yourself", bullets: ["Missing quote or bracket?", "Missing colon after if or for?", "Wrong spaces at the start of a line?"] },
            { title: "Then ask AI", bullets: ["Paste the code and the full error", "Ask what it means and why the fix works", "Run the fix yourself"] }
          ],
          tryIt: "In your quiz, delete the colon after the if line on purpose and run it. Read the error. Ask an AI assistant to explain it, fix it, and run the program again.",
          youCanNow: "read a Python error message, look for the problem, and use AI to understand and fix a bug.",
          quickCheck: [
            { objective: "O5", q: "What does a SyntaxError usually mean?", options: ["The computer is broken", "The internet is down", "Your answer was wrong", "Something is typed wrong, like a missing quote or colon"], answer: 3, why: "A SyntaxError means Python cannot read something you typed." },
            { objective: "O5", q: "Python shows an error on line 4. What do you check first?", options: ["Line 4, for a missing quote, bracket, colon or space", "Line 1 only", "Your internet speed", "Nothing; restart the computer"], answer: 0, why: "The message shows the line number; check that line yourself first." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Building your quiz game",
          minutes: 6,
          goal: "Plan and build a 5-question quiz game with AI as a helper.",
          text: [
            "Big programs are built from small pieces. Plan first: what the program says first, what it asks, how it keeps score, and what it says at the end. Write the plan as short comments. A comment starts with # and Python ignores it.",
            "Build one piece at a time and run it after each piece. If you want an idea, ask AI: \"How could I make my quiz tell the player their score out of 5?\" Then write it yourself and ask the AI to check it.",
            "When it works, have a friend or family member play it. Watch where they get confused, and improve it. If you turn it in for school, say how you used AI."
          ],
          steps: ["Write a plan as # comments: welcome, questions, score, ending.", "Code the welcome and ask the player's name. Run it.", "Add one question with if and else that changes the score. Run it.", "Add four more questions. Run it.", "Print the final score and a message. Let someone play it."],
          words: [["Comment", "a note in code that starts with # and is ignored by Python."], ["Plan", "a short list of what your program will do, in order."]],
          slides: [
            { title: "Plan with comments", bullets: ["# welcome", "# ask 5 questions", "# keep score", "# final message"] },
            { title: "Build in small pieces", bullets: ["Add one piece", "Run it", "Fix it, then add the next"] },
            { title: "AI as a helper", bullets: ["Ask for ideas, then write it yourself", "Ask AI to check your code", "Say how you used AI on school work"] },
            { title: "Test with a real player", bullets: ["Let a friend play", "Watch where they get confused", "Improve it"] }
          ],
          tryIt: "Final task: build a Python quiz game in Colab with at least 5 questions about a topic you like. Ask the player's name, keep score, print a final message, use AI to explain or fix one part, and write a comment above each part in your own words.",
          youCanNow: "plan, build, test and explain a small Python program, using AI as a helper and not a replacement.",
          quickCheck: [
            { objective: "O6", q: "What is a comment in Python?", options: ["A line that prints text", "A type of loop", "A line starting with # that Python ignores", "An error message"], answer: 2, why: "Comments start with # and are notes for people, not instructions for Python." },
            { objective: "O6", q: "You finished the quiz game. What is a good next step?", options: ["Never run it", "Delete the comments", "Ask AI to rewrite it all", "Have a friend play it and watch where they get confused"], answer: 3, why: "Watching someone play shows you what to improve." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Coding with an AI helper",
        questions: [
          { objective: "O4", q: "What is a good way to ask AI about code you do not understand?", options: ["\"Do my homework\"", "\"Explain this Python code line by line for a beginner\"", "\"Code\"", "\"Make it longer\""], answer: 1, why: "A clear request for a line-by-line explanation helps you learn." },
          { objective: "O4", q: "How can you check that you really understand some code?", options: ["Change one thing, guess the result, then run it", "Read it once quickly", "Delete it", "Ask AI to say you understand"], answer: 0, why: "Predicting and testing shows whether you truly understand." },
          { objective: "O5", q: "Python shows an error message. Where do you look first?", options: ["The first word on the screen", "The browser's address bar", "The last line of the message and the line number", "The keyboard"], answer: 2, why: "The last line names the problem and the line number shows where." },
          { objective: "O5", q: "AI gives you a fix for your bug. What next?", options: ["Assume it works", "Turn it in without running it", "Delete your program", "Run it yourself and check it works"], answer: 3, why: "AI can be wrong, so you test the fix yourself." },
          { objective: "O6", q: "In Python, what does a line starting with # do?", options: ["It is a comment that Python ignores", "It prints a hashtag", "It stops the program", "It makes a loop"], answer: 0, why: "Lines starting with # are comments for people, not instructions." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Intro to Coding with AI",
    questions: [
      { objective: "O1", q: "Code is best described as:", options: ["Instructions a computer follows exactly", "A secret password", "A type of music", "A school grade"], answer: 0, why: "Code is a list of instructions for a computer." },
      { objective: "O1", q: "Why is copying AI code you do not understand a problem?", options: ["It is always too short", "You learn nothing and cannot fix it when it breaks", "Computers cannot run AI code", "It costs money"], answer: 1, why: "Understanding is the skill; copied code leaves you stuck." },
      { objective: "O1", q: "Before signing up for an AI tool as a teen, you should:", options: ["Use a fake birthday", "Share your password with friends", "Check the tool's minimum age and ask a parent or guardian", "Skip reading anything"], answer: 2, why: "Age limits and a parent's involvement keep you safe and within the rules." },
      { objective: "O2", q: "Google Colab lets you:", options: ["Only watch videos", "Buy games", "Send text messages", "Run Python in a web browser without installing anything"], answer: 3, why: "Colab is a free online notebook for running Python." },
      { objective: "O2", q: "In a notebook, a cell is:", options: ["A box where you type and run code", "A phone battery", "A kind of error", "A loop"], answer: 0, why: "Notebooks are made of cells that hold code." },
      { objective: "O2", q: "Which line shows words on the screen in Python?", options: ["show Hello", "print(\"Hello\")", "say = Hello", "run Hello"], answer: 1, why: "print with text in quotes displays the text." },
      { objective: "O3", q: "A variable is:", options: ["An error message", "A kind of website", "A named box that stores a value", "A loop that never ends"], answer: 2, why: "Variables store values under a name, like score." },
      { objective: "O3", q: "Which line asks the player to type their name?", options: ["name = 0", "print(name)", "for name in range(3):", "name = input(\"What is your name? \")"], answer: 3, why: "input asks the user to type something." },
      { objective: "O3", q: "In Python, == means:", options: ["Is the same as", "Add together", "Store a value", "Start a comment"], answer: 0, why: "Two equals signs compare two values." },
      { objective: "O3", q: "Why does Python care about indentation?", options: ["It makes code colorful", "It shows which lines belong under an if or loop", "It saves battery", "It is only decoration"], answer: 1, why: "Indented lines belong to the if, else or loop above them." },
      { objective: "O3", q: "You want to cheer \"Go team!\" 5 times. Which is best?", options: ["An if statement", "A comment", "A for loop with range(5)", "A variable named team"], answer: 2, why: "A loop repeats code a set number of times." },
      { objective: "O4", q: "Which is safe to paste into an AI assistant?", options: ["Your school password", "Your home address", "Your phone number", "Ten lines of quiz code"], answer: 3, why: "Code for a project has no private information in it." },
      { objective: "O4", q: "After AI explains your code, a good way to test your understanding is to:", options: ["Change one thing, predict, and run it", "Close the notebook", "Ask for a longer explanation only", "Copy it into another notebook unchanged"], answer: 0, why: "Predicting and testing proves you understand it." },
      { objective: "O5", q: "A bug is:", options: ["A good feature", "A mistake in code", "A kind of loop", "A notebook"], answer: 1, why: "Bugs are mistakes; debugging fixes them." },
      { objective: "O5", q: "IndentationError usually means:", options: ["Your internet is down", "You need a new computer", "The spaces at the start of a line are wrong", "The program worked"], answer: 2, why: "It points to wrong spacing at the start of a line." },
      { objective: "O5", q: "You are stuck on an error. What should you paste into the AI assistant?", options: ["Only the word error", "Your password", "Nothing; give up", "The code and the full error message"], answer: 3, why: "The code and full error give the AI what it needs to explain the problem." },
      { objective: "O5", q: "AI suggests a fix but the error changes. You should:", options: ["Tell the AI exactly what happened now", "Give up", "Turn it in anyway", "Delete Python"], answer: 0, why: "Clear follow-ups help you and the AI find the real problem." },
      { objective: "O6", q: "What is the best first step when building a bigger program?", options: ["Type everything at once", "Write a short plan as comments", "Ask AI to write it all", "Skip testing"], answer: 1, why: "A plan breaks the program into small pieces." },
      { objective: "O6", q: "Why run your program after adding each small piece?", options: ["It makes the code longer", "Python requires it", "You find mistakes early, when they are easy to fix", "It saves the file"], answer: 2, why: "Small steps make bugs easy to find." },
      { objective: "O6", q: "You used AI to help with a school coding project. What should you do?", options: ["Hide it", "Say it was all your own work", "Delete the project", "Say how you used AI, following your teacher's rules"], answer: 3, why: "Being honest about AI use is part of following school rules." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      3,
      5,
      6,
      8,
      11,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Program runs",
        objective: "O2",
        notYet: "The program does not run in Colab, or stops with an error.",
        meets: "The program runs from start to finish in Colab.",
        exceeds: "It also handles a player typing an answer in a different way, such as capital letters."
      },
      {
        name: "Building blocks",
        objective: "O3",
        notYet: "Missing input, if and else, or a score variable.",
        meets: "Asks the player's name, uses if and else for at least 5 questions, and keeps score in a variable.",
        exceeds: "Also uses a loop to repeat part of the game."
      },
      {
        name: "Built in pieces",
        objective: "O6",
        notYet: "No plan or final message.",
        meets: "A plan in comments, five questions and a final message with the score.",
        exceeds: "A friend played it, and the learner improved one part based on what they saw."
      },
      {
        name: "AI as a tutor",
        objective: "O4",
        notYet: "AI wrote the program, or AI use is not stated.",
        meets: "AI explained or helped fix at least one part, and the learner says how it was used.",
        exceeds: "The learner can show a change they predicted and tested after the AI explanation."
      },
      {
        name: "Comments in own words",
        objective: "O5",
        notYet: "Comments are missing or copied from AI.",
        meets: "A comment above each part says in the learner's own words what it does.",
        exceeds: "Also notes one bug they fixed and how."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who build a second program on their own within 30 days (follow-up survey)",
      "Learners who join a coding club, class or camp within 90 days",
      "Learners who start another Koach Learn coding or AI course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with a web browser and internet (school, library or home)",
      "Google Colab, with a Google account the learner is allowed to use",
      "A free AI assistant the learner is allowed to use",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Check Colab and AI tool age rules and school account settings before class; have a demo account ready for learners who cannot sign up.",
      "Code along live on a projector for Lessons 2 and 3 so beginners can copy each step.",
      "Plant a missing colon or quote on purpose so every learner practices reading an error message.",
      "Remind learners never to paste private information into AI tools; quiz code does not need any.",
      "Hold a quiz-game swap where learners play each other's games, then score them with the rubric."
    ]
  }
};
