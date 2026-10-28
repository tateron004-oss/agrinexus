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
  chapters: [
    {
      name: "Chapter 1: Your first lines of code",
      lessons: [
        {
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
          youCanNow: "say what code and a program are, and explain how to use AI as a tutor instead of a shortcut."
        },
        {
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
          youCanNow: "open a Colab notebook, type Python in a cell, run it, and read the output."
        },
        {
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
          youCanNow: "use a variable, input, an if statement and a loop in a small Python program."
        }
      ],
      check: {
        title: "Knowledge Check 1: Your first lines of code",
        questions: [
          { q: "What is a program?", options: ["A set of instructions that does a job", "A type of keyboard", "A website address", "A video game console"], answer: 0, why: "A program is code, a set of instructions, that does a job." },
          { q: "Your class allows AI for practice but not for graded homework. What do you do?", options: ["Use AI for the homework anyway", "Use AI to practice and do the graded work yourself", "Never code again", "Ask a friend to use AI for you"], answer: 1, why: "Following your teacher's rules is part of using AI honestly." },
          { q: "In Colab, how do you run a code cell?", options: ["Close the browser", "Print the page", "Press the play button or Shift and Enter", "Restart the computer"], answer: 2, why: "The play button or Shift and Enter runs the cell." },
          { q: "What does score = score + 1 do?", options: ["Deletes the score", "Prints the word score", "Asks the player for a score", "Adds one to the value stored in score"], answer: 3, why: "It takes the current score and adds one." },
          { q: "What does for i in range(3): do?", options: ["Repeats the indented code 3 times", "Asks 3 questions", "Makes 3 variables", "Stops the program"], answer: 0, why: "A for loop with range(3) repeats the code inside it three times." }
        ]
      }
    },
    {
      name: "Chapter 2: Coding with an AI helper",
      lessons: [
        {
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
          youCanNow: "get a clear line-by-line explanation of code from AI and test that you really understand it."
        },
        {
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
          youCanNow: "read a Python error message, look for the problem, and use AI to understand and fix a bug."
        },
        {
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
          youCanNow: "plan, build, test and explain a small Python program, using AI as a helper and not a replacement."
        }
      ],
      check: {
        title: "Knowledge Check 2: Coding with an AI helper",
        questions: [
          { q: "What is a good way to ask AI about code you do not understand?", options: ["\"Do my homework\"", "\"Explain this Python code line by line for a beginner\"", "\"Code\"", "\"Make it longer\""], answer: 1, why: "A clear request for a line-by-line explanation helps you learn." },
          { q: "How can you check that you really understand some code?", options: ["Change one thing, guess the result, then run it", "Read it once quickly", "Delete it", "Ask AI to say you understand"], answer: 0, why: "Predicting and testing shows whether you truly understand." },
          { q: "Python shows an error message. Where do you look first?", options: ["The first word on the screen", "The browser's address bar", "The last line of the message and the line number", "The keyboard"], answer: 2, why: "The last line names the problem and the line number shows where." },
          { q: "AI gives you a fix for your bug. What next?", options: ["Assume it works", "Turn it in without running it", "Delete your program", "Run it yourself and check it works"], answer: 3, why: "AI can be wrong, so you test the fix yourself." },
          { q: "In Python, what does a line starting with # do?", options: ["It is a comment that Python ignores", "It prints a hashtag", "It stops the program", "It makes a loop"], answer: 0, why: "Lines starting with # are comments for people, not instructions." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Intro to Coding with AI",
    questions: [
      { q: "Code is best described as:", options: ["Instructions a computer follows exactly", "A secret password", "A type of music", "A school grade"], answer: 0, why: "Code is a list of instructions for a computer." },
      { q: "Why is copying AI code you do not understand a problem?", options: ["It is always too short", "You learn nothing and cannot fix it when it breaks", "Computers cannot run AI code", "It costs money"], answer: 1, why: "Understanding is the skill; copied code leaves you stuck." },
      { q: "Before signing up for an AI tool as a teen, you should:", options: ["Use a fake birthday", "Share your password with friends", "Check the tool's minimum age and ask a parent or guardian", "Skip reading anything"], answer: 2, why: "Age limits and a parent's involvement keep you safe and within the rules." },
      { q: "Google Colab lets you:", options: ["Only watch videos", "Buy games", "Send text messages", "Run Python in a web browser without installing anything"], answer: 3, why: "Colab is a free online notebook for running Python." },
      { q: "In a notebook, a cell is:", options: ["A box where you type and run code", "A phone battery", "A kind of error", "A loop"], answer: 0, why: "Notebooks are made of cells that hold code." },
      { q: "Which line shows words on the screen in Python?", options: ["show Hello", "print(\"Hello\")", "say = Hello", "run Hello"], answer: 1, why: "print with text in quotes displays the text." },
      { q: "A variable is:", options: ["An error message", "A kind of website", "A named box that stores a value", "A loop that never ends"], answer: 2, why: "Variables store values under a name, like score." },
      { q: "Which line asks the player to type their name?", options: ["name = 0", "print(name)", "for name in range(3):", "name = input(\"What is your name? \")"], answer: 3, why: "input asks the user to type something." },
      { q: "In Python, == means:", options: ["Is the same as", "Add together", "Store a value", "Start a comment"], answer: 0, why: "Two equals signs compare two values." },
      { q: "Why does Python care about indentation?", options: ["It makes code colorful", "It shows which lines belong under an if or loop", "It saves battery", "It is only decoration"], answer: 1, why: "Indented lines belong to the if, else or loop above them." },
      { q: "You want to cheer \"Go team!\" 5 times. Which is best?", options: ["An if statement", "A comment", "A for loop with range(5)", "A variable named team"], answer: 2, why: "A loop repeats code a set number of times." },
      { q: "Which is safe to paste into an AI assistant?", options: ["Your school password", "Your home address", "Your phone number", "Ten lines of quiz code"], answer: 3, why: "Code for a project has no private information in it." },
      { q: "After AI explains your code, a good way to test your understanding is to:", options: ["Change one thing, predict, and run it", "Close the notebook", "Ask for a longer explanation only", "Copy it into another notebook unchanged"], answer: 0, why: "Predicting and testing proves you understand it." },
      { q: "A bug is:", options: ["A good feature", "A mistake in code", "A kind of loop", "A notebook"], answer: 1, why: "Bugs are mistakes; debugging fixes them." },
      { q: "IndentationError usually means:", options: ["Your internet is down", "You need a new computer", "The spaces at the start of a line are wrong", "The program worked"], answer: 2, why: "It points to wrong spacing at the start of a line." },
      { q: "You are stuck on an error. What should you paste into the AI assistant?", options: ["Only the word error", "Your password", "Nothing; give up", "The code and the full error message"], answer: 3, why: "The code and full error give the AI what it needs to explain the problem." },
      { q: "AI suggests a fix but the error changes. You should:", options: ["Tell the AI exactly what happened now", "Give up", "Turn it in anyway", "Delete Python"], answer: 0, why: "Clear follow-ups help you and the AI find the real problem." },
      { q: "What is the best first step when building a bigger program?", options: ["Type everything at once", "Write a short plan as comments", "Ask AI to write it all", "Skip testing"], answer: 1, why: "A plan breaks the program into small pieces." },
      { q: "Why run your program after adding each small piece?", options: ["It makes the code longer", "Python requires it", "You find mistakes early, when they are easy to fix", "It saves the file"], answer: 2, why: "Small steps make bugs easy to find." },
      { q: "You used AI to help with a school coding project. What should you do?", options: ["Hide it", "Say it was all your own work", "Delete the project", "Say how you used AI, following your teacher's rules"], answer: 3, why: "Being honest about AI use is part of following school rules." }
    ]
  }
};
