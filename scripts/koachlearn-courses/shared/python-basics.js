"use strict";

// Koach Learn course (shared): "Introduction to Programming with Python". Listed for Youth, Veterans (military) and Workforce Development; category = the first one catalog.js gives (Youth).
// Shape and rules: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

const COLAB = { name: "Google Colab: Frequently Asked Questions", url: "https://research.google.com/colaboratory/faq.html" };

module.exports = {
  id: "python-basics",
  category: "Youth",
  name: "Introduction to Programming with Python",
  skills: "Running Python in Google Colab, Using variables and input, Making decisions with if, Working with lists and loops, Writing a function",
  outcome: "write and run a short Python program in Google Colab that asks the user for information, stores it, makes a decision with it, repeats steps with a loop, and prints a clear result.",
  about: [
    "This course is for anyone who has never written code: students, veterans moving into a new career, and adults looking for a tech job. You only need a free Google account and a web browser.",
    "You will write real Python in Google Colab, a free website that runs code for you, so there is nothing to install. Each lesson adds one new tool: printing, variables, decisions, lists, loops and functions.",
    "Every lesson takes about five minutes. Read it, watch the slides, then type the code yourself in \"Try it now\". By the end you will build a small shopping budget checker from scratch. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "In Google Colab, write a shopping budget checker: a function that takes a list of prices and a budget, adds up the prices with a loop, and prints the total and either \"Under budget\" or \"Over budget\" with the difference. Ask the user for the budget with input(), call your function, and test it with two different budgets.",
  chapters: [
    {
      name: "Chapter 1: Your first programs",
      lessons: [
        {
          title: "Opening Google Colab and running your first line",
          minutes: 5,
          goal: "Open a Colab notebook, type a line of Python and run it.",
          text: [
            "A program is a list of instructions a computer follows in order. Python is a programming language: a way of writing those instructions that people can read. It is used for websites, data, games, robots and AI.",
            "Google Colab is a free website that runs Python in your browser. You do not install anything. Your work is saved as a notebook in your Google Drive. A notebook is made of cells: boxes where you type code and run it.",
            "Your first instruction is print. print(\"Hello, world!\") shows the words inside the quotes. The quotes tell Python this is text, not a command. If you make a typo, Python shows an error message. Read the last line of it: it tells you what went wrong."
          ],
          steps: ["Go to colab.research.google.com and sign in with a Google account.", "Choose to make a new notebook.", "Click inside the first code cell and type: print(\"Hello, world!\")", "Press the play button next to the cell, or Shift + Enter, to run it.", "Read the output under the cell."],
          words: [["Program", "a list of instructions a computer follows in order."], ["Python", "a popular programming language that is easy to read."], ["Notebook", "a Colab file made of cells where you write and run code."], ["Cell", "one box in a notebook that holds code you can run."], ["Error message", "Python's note that something in your code is wrong; the last line says what."]],
          slides: [
            { title: "What Python is", bullets: ["A language for writing instructions to a computer", "Used for websites, data, games and AI", "Easy to read compared with many languages"] },
            { title: "Google Colab", bullets: ["Free website that runs Python in your browser", "Nothing to install", "Notebooks save to your Google Drive"] },
            { title: "Your first line", bullets: ["Type: print(\"Hello, world!\")", "Run it with the play button or Shift + Enter", "The words appear under the cell"] },
            { title: "Errors are normal", bullets: ["Read the last line of the error", "Check spelling, quotes and brackets", "Fix it and run again"] }
          ],
          sources: [COLAB],
          tryIt: "Open a new Colab notebook. In one cell, print your first name. In a second cell, print a sentence about your favorite food. Then remove one quote mark on purpose, run it, and read the error. Put the quote back and run it again.",
          youCanNow: "open Google Colab, write a print line, run it, and read an error message."
        },
        {
          title: "Variables: giving data a name",
          minutes: 5,
          goal: "Store information in variables and ask the user for input.",
          text: [
            "A variable is a name that holds a value, like a labeled box. name = \"Maya\" puts the text Maya in a box called name. hours = 20 puts the number 20 in a box called hours. The = sign means \"store this\", not \"is equal to\".",
            "Values have types. Text in quotes is a string (str). Whole numbers are integers (int). Numbers with a decimal point are floats (float). The type matters: \"5\" + \"5\" gives \"55\", but 5 + 5 gives 10.",
            "input() asks the person running the program to type something. It always gives back a string, so to do math you change it into a number: hours = float(input(\"Hours worked: \")).",
            "An f-string mixes text and variables: print(f\"Hi {name}, you worked {hours} hours.\") The f before the quotes and the curly brackets do the work."
          ],
          steps: ["Pick a short, clear variable name with no spaces (use_underscores).", "Store a value with =.", "For user input, use input(\"question: \").", "Wrap it in int() or float() if you need a number.", "Print the result with an f-string."],
          words: [["Variable", "a name that holds a value."], ["String (str)", "text, written inside quotes."], ["Integer (int)", "a whole number, like 7."], ["Float", "a number with a decimal point, like 7.5."], ["input()", "asks the user to type something and gives it back as a string."], ["f-string", "text starting with f that can show variables inside { }."]],
          slides: [
            { title: "A variable is a labeled box", bullets: ["name = \"Maya\"", "hours = 20", "= means store, not equals"] },
            { title: "Three common types", bullets: ["str: text in quotes", "int: whole numbers", "float: numbers with a decimal"] },
            { title: "Asking the user", bullets: ["input() always returns text", "hours = float(input(\"Hours worked: \"))", "Change text to a number before math"] },
            { title: "Printing with f-strings", bullets: ["print(f\"Hi {name}!\")", "Put variables inside curly brackets"] }
          ],
          tryIt: "Write a program that asks for the user's name and their hourly pay, and the hours they worked this week. Store each in a variable, multiply pay by hours, and print: Hi <name>, you earned <amount> this week.",
          youCanNow: "store values in variables, ask the user for input, change text to numbers, and print a clear result."
        },
        {
          title: "Making decisions with if, elif and else",
          minutes: 6,
          goal: "Write code that does different things depending on a condition.",
          text: [
            "Programs make choices with if. A condition is a question that is True or False, such as hours > 40. If it is True, the indented lines under it run.",
            "Comparison signs: == equal to (two equals signs), != not equal, > greater than, < less than, >= at least, <= at most. You can join conditions with and and or.",
            "elif means \"else if\": a second check when the first is False. else runs when none of the checks were True. Indentation (four spaces) is how Python knows which lines belong to the if. Colab adds it for you after the colon.",
            "Example: if score >= 90: print(\"A\") elif score >= 80: print(\"B\") else: print(\"Keep practicing\"). Each part goes on its own line, with the print indented."
          ],
          steps: ["Write if, then a condition, then a colon.", "Indent the lines that should run when it is True.", "Add elif for another check if needed.", "Add else for everything else.", "Test with values that hit every branch."],
          words: [["Condition", "a question whose answer is True or False."], ["Boolean", "the True or False type in Python."], ["Indentation", "spaces at the start of a line that show which block it belongs to."], ["Branch", "one of the paths an if statement can take."]],
          slides: [
            { title: "if runs code only when True", bullets: ["if hours > 40:", "    print(\"Overtime!\")", "Do not forget the colon and the indent"] },
            { title: "Comparison signs", bullets: ["== equal, != not equal", "> greater, < less", ">= at least, <= at most"] },
            { title: "elif and else", bullets: ["elif: check another condition", "else: runs when nothing else matched", "Python checks from top to bottom"] },
            { title: "Test every branch", bullets: ["Try a value for each path", "Try the edge, like exactly 40"] }
          ],
          tryIt: "Write a program that asks for a temperature in Fahrenheit. If it is 85 or more, print \"Hot: drink water.\" If it is 50 or more, print \"Nice day.\" Otherwise print \"Bring a jacket.\" Run it three times with 90, 50 and 30.",
          youCanNow: "write if, elif and else blocks and test every branch."
        }
      ],
      check: {
        title: "Knowledge Check 1: Your first programs",
        questions: [
          { q: "What does print(\"Hello\") do?", options: ["Saves a file called Hello", "Sends Hello to a printer", "Shows the word Hello under the cell", "Deletes the cell"], answer: 2, why: "print shows text as output." },
          { q: "Your code shows an error. Where do you look first?", options: ["The last line of the error message", "The first word of the notebook", "Your Google Drive", "The browser's history"], answer: 0, why: "The last line of a Python error says what went wrong." },
          { q: "You run age = input(\"Age: \") and type 16. What type is age?", options: ["int", "float", "Boolean", "str (text)"], answer: 3, why: "input() always gives back a string; use int() to make it a number." },
          { q: "Which line correctly checks if hours is more than 40?", options: ["if hours = 40", "if hours > 40:", "if hours more 40", "hours > 40 if:"], answer: 1, why: "if, the condition, then a colon." },
          { q: "When does the else part run?", options: ["Always, first", "Only when none of the if or elif conditions were True", "Only when the if was True", "Never"], answer: 1, why: "else catches every case the earlier checks did not." }
        ]
      }
    },
    {
      name: "Chapter 2: Programs that repeat and remember",
      lessons: [
        {
          title: "Lists: keeping many values together",
          minutes: 5,
          goal: "Create a list, add to it, and read items from it.",
          text: [
            "A list holds many values in order, inside square brackets: prices = [3.50, 12.00, 6.25]. A list can hold text too: chores = [\"dishes\", \"laundry\"].",
            "Each item has a position number called an index. Python counts from 0, so prices[0] is the first item (3.50) and prices[-1] is the last.",
            "Useful list tools: prices.append(4.99) adds an item to the end. len(prices) tells you how many items there are. sum(prices) adds up a list of numbers. \"dishes\" in chores is True if the item is in the list."
          ],
          steps: ["Make a list with square brackets and commas.", "Read an item with list_name[index], starting at 0.", "Add with .append(value).", "Count items with len().", "Add up numbers with sum()."],
          words: [["List", "an ordered group of values inside square brackets."], ["Index", "an item's position in a list, starting from 0."], ["append", "adds one item to the end of a list."], ["len()", "gives the number of items."]],
          slides: [
            { title: "A list holds many values", bullets: ["prices = [3.50, 12.00, 6.25]", "chores = [\"dishes\", \"laundry\"]"] },
            { title: "Counting starts at 0", bullets: ["prices[0] is the first item", "prices[-1] is the last item"] },
            { title: "List tools", bullets: ["append() adds to the end", "len() counts items", "sum() adds up numbers", "in checks if an item is there"] }
          ],
          tryIt: "Make a list of three things you need to buy, with their prices in a second list. Append one more item and price. Print how many items there are, the first item, and the total of the prices with sum().",
          youCanNow: "create a list, read items by index, add items and count or total them."
        },
        {
          title: "Loops: repeating steps without retyping",
          minutes: 6,
          goal: "Use a for loop to go through a list and a while loop to repeat until done.",
          text: [
            "A loop repeats code. A for loop runs once for each item in a list: for price in prices: print(price). Each time around, the variable price holds the next item.",
            "range() makes a list of numbers for counting: for i in range(5) runs five times with i = 0, 1, 2, 3, 4.",
            "A running total is a common pattern: start total = 0 before the loop, then add total = total + price inside it (or total += price). After the loop, total holds the sum.",
            "A while loop repeats as long as a condition is True, for example while answer != \"done\". Make sure something inside the loop changes the condition, or it will run forever. In Colab, press the stop button to end a loop that will not stop."
          ],
          steps: ["Decide what repeats.", "For each item in a list, use: for item in my_list:", "Indent the code that repeats.", "For a total, set total = 0 before the loop and add inside it.", "For a while loop, make sure the condition can become False."],
          words: [["Loop", "code that repeats."], ["for loop", "repeats once for each item in a list or range."], ["while loop", "repeats as long as a condition is True."], ["range()", "makes a series of numbers, starting at 0 by default."], ["Running total", "a variable you keep adding to inside a loop."]],
          slides: [
            { title: "for: once per item", bullets: ["for price in prices:", "    print(price)", "price holds the next item each time"] },
            { title: "Counting with range", bullets: ["for i in range(5): runs 5 times", "i goes 0, 1, 2, 3, 4"] },
            { title: "The running total pattern", bullets: ["total = 0 before the loop", "total += price inside the loop", "Print total after the loop"] },
            { title: "while: until a condition changes", bullets: ["Repeats while the condition is True", "Change something inside, or it never ends", "Stop button ends a stuck loop"] }
          ],
          tryIt: "Write a while loop that keeps asking \"Add a price (or type done): \". Append each number to a list. When the user types done, use a for loop and a running total to add the prices and print the total.",
          youCanNow: "repeat code with for and while loops and keep a running total."
        },
        {
          title: "Functions: packaging code you can reuse",
          minutes: 6,
          goal: "Write a function with inputs and a return value, then use it in a full program.",
          text: [
            "A function is a named block of code you can run whenever you need it. You already used built-in ones: print(), len(), sum(). Now you will write your own with def.",
            "def check_budget(prices, budget): starts a function with two parameters, the inputs it needs. Inside, you do the work. return sends a result back to whoever called it.",
            "Calling the function runs it: result = check_budget([3.5, 12, 6.25], 25). A good function does one job and has a name that says what that job is.",
            "Putting it together: the final task uses everything in this course. Plan it in plain words first (get budget, add prices, compare, print), then turn each line into code and test it with two budgets."
          ],
          steps: ["Write the plan in plain words as comments starting with #.", "Start the function with def name(parameters):", "Indent the body; use a loop and an if inside.", "Use return to send back a result, or print inside.", "Call the function and test it with different inputs."],
          words: [["Function", "a named block of code you can run again and again."], ["def", "the word that starts a new function."], ["Parameter", "an input a function needs, named in its brackets."], ["return", "sends a value back from a function."], ["Comment", "a note in code starting with #; Python ignores it."]],
          slides: [
            { title: "Why functions", bullets: ["Write the code once, use it many times", "One job per function", "A clear name says what it does"] },
            { title: "Writing one", bullets: ["def check_budget(prices, budget):", "Indent the body", "return sends back a result"] },
            { title: "Calling one", bullets: ["check_budget([3.5, 12, 6.25], 25)", "Try different inputs to test it"] },
            { title: "Final task plan", bullets: ["Get the budget with input()", "Add the prices with a loop", "Compare with if, print the result"] }
          ],
          tryIt: "Final task: write check_budget(prices, budget). Inside, use a loop to total the prices, then print the total and \"Under budget by X\" or \"Over budget by X\". Ask the user for the budget with float(input()), call the function with your shopping list, and test it with a high and a low budget.",
          youCanNow: "write and call your own function and combine variables, input, if, lists and loops in one working program."
        }
      ],
      check: {
        title: "Knowledge Check 2: Programs that repeat and remember",
        questions: [
          { q: "colors = [\"red\", \"blue\", \"green\"]. What is colors[0]?", options: ["\"blue\"", "\"green\"", "An error", "\"red\""], answer: 3, why: "Python counts list positions from 0, so index 0 is the first item." },
          { q: "Which line adds 4.99 to the end of the list prices?", options: ["prices.append(4.99)", "prices + 4.99", "append.prices(4.99)", "prices[4.99]"], answer: 0, why: "append adds one item to the end of a list." },
          { q: "How many times does for i in range(3): run?", options: ["2", "4", "3", "Forever"], answer: 2, why: "range(3) gives 0, 1 and 2: three times." },
          { q: "Your while loop never stops. What is the most likely cause?", options: ["You used a list", "Colab is offline", "You used print", "Nothing inside the loop ever makes the condition False"], answer: 3, why: "A while loop ends only when its condition becomes False." },
          { q: "What does return do inside a function?", options: ["Deletes the function", "Restarts Colab", "Sends a value back to where the function was called", "Prints an error"], answer: 2, why: "return hands the result back to the caller." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to Programming with Python",
    questions: [
      { q: "What is a program?", options: ["A type of computer screen", "A list of instructions a computer follows in order", "A website address", "A Google account"], answer: 1, why: "A program is a set of instructions run in order." },
      { q: "Why is Google Colab handy for beginners?", options: ["It runs Python in the browser with nothing to install", "It only works offline", "It writes all the code for you", "It needs a paid licence"], answer: 0, why: "Colab is a free hosted notebook; you do not install anything." },
      { q: "How do you run a code cell in Colab?", options: ["Close the tab", "Type run at the top of the page", "Press the play button or Shift + Enter", "Email it to yourself"], answer: 2, why: "The play button or Shift + Enter runs the cell." },
      { q: "Which line prints the text Good job?", options: ["print(\"Good job\")", "print(Good job)", "print \"Good job\"", "say(\"Good job\")"], answer: 0, why: "Text goes inside quotes inside print's brackets." },
      { q: "In Python, what does = do in pay = 15?", options: ["Checks if pay equals 15", "Prints 15", "Deletes pay", "Stores 15 in the variable pay"], answer: 3, why: "A single = stores a value; == compares." },
      { q: "What does \"5\" + \"5\" give?", options: ["10", "\"55\"", "An error every time", "5"], answer: 1, why: "Two strings joined together make \"55\"." },
      { q: "You need to do math with what the user types. Which line is right?", options: ["hours = input(\"Hours: \") * 2", "hours = float(input(\"Hours: \"))", "hours = print(\"Hours\")", "hours = text(input())"], answer: 1, why: "input gives text; float() turns it into a number." },
      { q: "name = \"Ana\". Which prints Hi Ana?", options: ["print(\"Hi {name}\")", "print(Hi name)", "print(f(Hi name))", "print(f\"Hi {name}\")"], answer: 3, why: "The f before the quotes lets {name} show the variable." },
      { q: "Which sign means \"is equal to\" in a condition?", options: ["==", "=", "=>", "!="], answer: 0, why: "== compares; = stores." },
      { q: "What must come at the end of an if line?", options: ["A semicolon", "A period", "A colon", "Nothing"], answer: 2, why: "if, elif, else, for, while and def lines end with a colon." },
      { q: "score = 85. Which branch runs? if score >= 90 / elif score >= 80 / else", options: ["The if", "The else", "None of them", "The elif"], answer: 3, why: "85 is not 90 or more, but it is 80 or more, so the elif runs." },
      { q: "How does Python know which lines belong to an if?", options: ["By the color of the text", "By capital letters", "By the indentation", "By line numbers"], answer: 2, why: "Indented lines under the if are its block." },
      { q: "nums = [4, 8, 2]. What does len(nums) give?", options: ["2", "3", "8", "14"], answer: 1, why: "len counts items; there are three." },
      { q: "nums = [4, 8, 2]. What does sum(nums) give?", options: ["3", "8", "14", "482"], answer: 2, why: "sum adds the numbers: 4 + 8 + 2 = 14." },
      { q: "What is prices[-1]?", options: ["The first item", "An error", "The last item", "Minus the first price"], answer: 2, why: "Index -1 means the last item." },
      { q: "You want to total a list in a loop. What comes before the loop?", options: ["total = 0", "return total", "print(total)", "def total"], answer: 0, why: "A running total starts at 0 before the loop." },
      { q: "What does for chore in chores: do?", options: ["Deletes the list", "Runs only once", "Sorts the list", "Runs once for each item in chores"], answer: 3, why: "A for loop goes through each item in order." },
      { q: "Which word starts a new function?", options: ["func", "def", "new", "make"], answer: 1, why: "def defines a function." },
      { q: "In def check_budget(prices, budget):, what are prices and budget?", options: ["Errors", "Parameters: the inputs the function needs", "Lists of functions", "Comments"], answer: 1, why: "Names in the brackets are the parameters." },
      { q: "You wrote a budget checker. What is the best way to test it?", options: ["Run it once and hope", "Delete the comments", "Share it before running it", "Run it with a high budget and a low budget and check both results"], answer: 3, why: "Testing different inputs checks every branch works." }
    ]
  }
};
