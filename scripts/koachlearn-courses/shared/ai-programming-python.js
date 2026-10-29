"use strict";

// Koach Learn course (shared): "AI Programming with Python for Beginners". Listed for Youth, Veterans (military) and Workforce Development; category = the first one catalog.js gives (Youth).
// Shape and rules: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

const COLAB = { name: "Google Colab: Frequently Asked Questions", url: "https://research.google.com/colaboratory/faq.html" };
const HF_PIPELINES = { name: "Hugging Face Transformers: Pipelines", url: "https://huggingface.co/docs/transformers/en/main_classes/pipelines" };
const HF_MODEL = { name: "Hugging Face: distilbert-base-uncased-finetuned-sst-2-english model card", url: "https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english" };

module.exports = {
  id: "ai-programming-python",
  category: "Youth",
  name: "AI Programming with Python for Beginners",
  skills: "Using Python libraries in Colab, Building a rule-based chatbot, Loading a pre-trained AI model, Running AI on many texts, Checking AI results",
  outcome: "write a Python program in Google Colab that uses a free, pre-trained AI model to sort a list of written comments into positive and negative, prints a summary, and flags the results the AI is unsure about for a person to check.",
  about: [
    "This course is for beginners who know a little Python (variables, if, lists and loops) and want to make a program that uses AI. If you have never coded, take \"Introduction to Programming with Python\" first.",
    "You will start by building a simple chatbot with plain Python rules, so you see what a program can do without AI. Then you will load a free, pre-trained AI model from Hugging Face and use it to read the mood of written comments, the same kind of tool companies use on reviews and surveys.",
    "Everything runs in Google Colab in your browser, for free. Each lesson takes about five minutes and ends with code you type yourself. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Build a feedback sorter in Google Colab: write a list of at least six short comments (for example from a team practice, a class or a small shop), run a pre-trained sentiment model on each, print each comment with its label and score, mark any result with a score under 0.80 as \"check by hand\", and print how many comments were positive and how many negative.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people and adults who have written a little Python and want to build something with AI: high school and college students, coding club members, career changers and workforce trainees.",
    startingPoint: "Can write and run short Python programs in Google Colab with variables, if statements, lists, loops and functions. Most have never imported an AI library, used a pre-trained model, or thought about how sure a model is or when a person should check its answers.",
    gap: "AI tools are now built into many jobs and products, and employers value people who can use them in code and check them responsibly. Without hands-on practice, learners either think AI is magic or out of reach, and they do not learn to test a model's limits or keep private data out.",
    constraints: [
      "Reading level: plain words and short sentences; terms like library, model, score and threshold are explained",
      "Devices: a computer or laptop with a web browser; a tablet is hard for typing code",
      "Accounts and cost: a free Google account for Google Colab and free Hugging Face models; Colab's free resources are limited and can change",
      "Time: about 5 to 6 minutes a lesson plus practice, about 60 to 75 minutes in total",
      "Privacy: learners use made-up or permitted comments and never paste passwords or API keys into a shared notebook"
    ],
    prerequisites: "Introduction to Programming with Python (variables, if, lists, loops and functions)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "In Google Colab", action: "explain how an AI model differs from rule-based code and import or install a Python library", standard: "with a correct one-sentence explanation and the library loading without errors" },
    { id: "O2", condition: "Given keywords and replies for a simple chatbot", action: "use string tools and a dictionary to match a message to the right reply", standard: "matching regardless of capital letters and giving a default reply when nothing matches" },
    { id: "O3", condition: "Given your reply function", action: "write a chat loop that ends when the user says bye and describe the limits of rule-based replies", standard: "with the loop exiting on bye and at least one example the rules cannot handle" },
    { id: "O4", condition: "Using the Hugging Face pipeline", action: "load a pre-trained sentiment model, run it on a sentence and read its label and score", standard: "after reading the model card, with the label and score read correctly" },
    { id: "O5", condition: "Given a list of comments", action: "run the model on every comment in a loop, count the labels and print a neat summary", standard: "with the counts matching the labels and scores rounded to two decimals" },
    { id: "O6", condition: "Given the model's results", action: "flag results below a confidence threshold for a person to check and follow responsible AI habits", standard: "with every score under the threshold marked \"check by hand\" and no private data or keys in the notebook" }
  ],
  chapters: [
    {
      name: "Chapter 1: Python building blocks for AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "What AI programming is, and setting up Colab",
          minutes: 5,
          goal: "Explain what an AI model is and import a Python library in Colab.",
          text: [
            "Normal programming means you write every rule yourself: if the word is \"hi\", say \"hello\". AI programming means you use a model: a program that learned patterns from many examples, so it can handle cases you never wrote a rule for.",
            "You rarely build a model from zero. You use a library: ready-made code someone else wrote and shared. In Python you load a library with import. Popular free AI libraries include Hugging Face Transformers (language models), scikit-learn (classic machine learning) and PyTorch (deep learning).",
            "Google Colab already has many of these libraries. If one is missing, you install it in a cell with !pip install followed by its name. The ! tells Colab to run a system command instead of Python. Colab is free, but its computers are shared, so free resources are limited and can change."
          ],
          steps: ["Open colab.research.google.com and make a new notebook.", "In a cell, type: import random", "Next line: print(random.choice([\"rock\", \"paper\", \"scissors\"]))", "Run it a few times and watch the answer change.", "If an import ever fails with \"No module named\", run !pip install <name> in a cell, then try again."],
          words: [["AI model", "a program that learned patterns from many examples and can make guesses on new data."], ["Library", "ready-made code you can load and use in your own program."], ["import", "the Python word that loads a library."], ["pip", "the tool that installs Python libraries."], ["Rule-based", "a program where a person wrote every rule by hand."]],
          slides: [
            { title: "Rules vs models", bullets: ["Rule-based: you write every rule", "AI model: learned patterns from examples", "Models handle cases you never wrote"] },
            { title: "Libraries do the heavy lifting", bullets: ["import loads ready-made code", "Transformers, scikit-learn, PyTorch", "All free to use"] },
            { title: "Colab setup", bullets: ["Many libraries already installed", "Missing one? !pip install <name>", "Free resources are limited and can change"] }
          ],
          sources: [COLAB],
          tryIt: "In a new Colab notebook, import the random library and write a program that picks a random workout, snack or study topic from a list of five and prints it. Run it three times.",
          youCanNow: "explain the difference between rule-based code and an AI model, and import a library in Colab.",
          quickCheck: [
            { objective: "O1", q: "What is a library in Python?", options: ["A list of your saved notebooks", "A Google Drive folder", "Ready-made code someone else wrote and shared", "An error message"], answer: 2, why: "A library is shared, ready-made code you load with import." },
            { objective: "O1", q: "You want to use scikit-learn but are not sure Colab has it. What would you try first?", options: ["Run import sklearn, and if it says \"No module named\", run !pip install scikit-learn", "Rewrite the library yourself", "Delete the notebook", "Type the library name into print()"], answer: 0, why: "Colab has many libraries already; install with !pip only if the import fails." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Strings and dictionaries: the brain of a simple chatbot",
          minutes: 6,
          goal: "Use a dictionary to match keywords in a message to replies.",
          text: [
            "AI programs work with a lot of text, so you need a few string tools. message.lower() makes text lower case, so \"HELLO\" and \"hello\" match. \"hours\" in message is True if the word appears anywhere in the message. message.split() breaks a sentence into a list of words.",
            "A dictionary stores pairs: a key and a value, inside curly brackets. replies = {\"hours\": \"We are open 9 to 5.\", \"price\": \"Prices are on our menu page.\"} You get a value with replies[\"hours\"].",
            "To build a chatbot brain, loop through the dictionary: for keyword, answer in replies.items(): if keyword in message: return answer. If nothing matches, return a default reply such as \"Sorry, I do not know that yet.\""
          ],
          steps: ["Make a dictionary of keywords and replies.", "Write a function reply(message).", "Inside, set message = message.lower().", "Loop through replies.items() and return the answer for the first keyword found.", "After the loop, return a default reply."],
          words: [["String", "text in Python."], ["Dictionary", "a set of key: value pairs in curly brackets."], ["Key", "the label you look up in a dictionary."], ["Value", "what is stored under a key."], [".items()", "gives every key and value in a dictionary, for a loop."]],
          slides: [
            { title: "Text tools", bullets: ["lower(): \"HELLO\" becomes \"hello\"", "\"hours\" in message: True or False", "split(): sentence into a list of words"] },
            { title: "Dictionaries", bullets: ["{\"hours\": \"Open 9 to 5.\"}", "Look up with replies[\"hours\"]", "Keys on the left, values on the right"] },
            { title: "The chatbot brain", bullets: ["Lower-case the message", "Loop through replies.items()", "Return the first match, or a default"] }
          ],
          tryIt: "Write reply(message) for a pretend gym, library or food truck with at least four keywords (for example hours, price, location, contact). Test it with three messages, including one written in capital letters and one it should not understand.",
          youCanNow: "use string tools and a dictionary to match a message to the right reply.",
          quickCheck: [
            { objective: "O2", q: "What does \"I need help now\".split() give?", options: ["\"i need help now\"", "[\"I\", \"need\", \"help\", \"now\"]", "True", "4"], answer: 1, why: "split() breaks a sentence into a list of words." },
            { objective: "O2", q: "Your chatbot finds no keyword in the message. What would you have it do?", options: ["Crash with an error", "Print every reply in the dictionary", "Stop the program", "Return a default reply such as \"Sorry, I do not know that yet.\""], answer: 3, why: "A default reply handles messages that match no keyword." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Making the chatbot talk, and seeing its limits",
          minutes: 5,
          goal: "Put your reply function in a loop that chats until the user says bye, and spot what rules cannot do.",
          text: [
            "A chatbot needs a loop: ask for a message, print the reply, and repeat. while True: repeats forever, so you add an exit: if the message is \"bye\", print a goodbye and use break to leave the loop.",
            "Now test it like a real user would. Type \"when do you open?\" and your bot may fail, because you wrote \"hours\", not \"open\". Every new way of saying something needs a new rule. That is the main limit of rule-based programs.",
            "This is exactly why AI models are useful: a language model learned from millions of sentences, so it can understand many ways of saying the same thing. In the next chapter you will use one."
          ],
          steps: ["Start with while True:", "Inside, get message = input(\"You: \")", "If message.lower() == \"bye\", print a goodbye and break.", "Otherwise print(\"Bot:\", reply(message)).", "Test with five different ways of asking the same question."],
          words: [["while True", "a loop that keeps going until something inside it stops it."], ["break", "leaves a loop right away."], ["Limit", "something a program cannot do well."]],
          slides: [
            { title: "The chat loop", bullets: ["while True: keeps chatting", "input() gets the message", "break ends the chat on \"bye\""] },
            { title: "Test like a real user", bullets: ["Ask the same thing five ways", "Count how many the bot gets right"] },
            { title: "Why rules hit a wall", bullets: ["Every new phrasing needs a new rule", "AI models learned from millions of sentences", "That is what Chapter 2 uses"] }
          ],
          tryIt: "Wrap your reply function from Lesson 2 in a chat loop that ends on \"bye\". Ask about hours in five different ways. Write down how many your bot understood, then add one rule to fix a miss.",
          youCanNow: "build a working rule-based chatbot loop and explain why rules alone are limited.",
          quickCheck: [
            { objective: "O3", q: "What does while True: do on its own?", options: ["Repeats forever until something like break stops it", "Runs exactly once", "Runs only if the user says bye", "Loads a library"], answer: 0, why: "while True repeats forever, so you need an exit such as break." },
            { objective: "O3", q: "Users keep typing \"what time do you close?\" and your rule-based bot fails. What would that tell you?", options: ["The bot has a typing error", "Colab is broken", "Every new way of saying something needs a new rule, which is the limit of rule-based bots", "Users should type in capital letters"], answer: 2, why: "Rule-based bots only match the rules you wrote; language models handle more ways of saying things." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Python building blocks for AI",
        questions: [
          { objective: "O1", q: "What is the main difference between rule-based code and an AI model?", options: ["Rule-based code is always faster", "Models do not use any code", "A model learned patterns from examples instead of having every rule written by hand", "There is no difference"], answer: 2, why: "Models learn patterns from data; rule-based code needs every rule written." },
          { objective: "O1", q: "Your Colab cell says \"No module named\" a library. What do you do?", options: ["Run !pip install with the library's name, then import it again", "Restart your computer", "Delete the notebook", "Rename the variable"], answer: 0, why: "pip installs a missing library." },
          { objective: "O2", q: "replies = {\"hours\": \"Open 9 to 5.\"}. What is replies[\"hours\"]?", options: ["\"hours\"", "An error", "True", "\"Open 9 to 5.\""], answer: 3, why: "Looking up a key gives its value." },
          { objective: "O2", q: "Why use message.lower() in a chatbot?", options: ["To make the text shorter", "So \"HOURS\" and \"hours\" both match", "To delete the message", "To translate it"], answer: 1, why: "Lower-casing makes matching ignore capital letters." },
          { objective: "O3", q: "Which word leaves a while True loop?", options: ["exit", "break", "stop", "return to"], answer: 1, why: "break leaves the loop right away." }
        ]
      }
    },
    {
      name: "Chapter 2: Using a pre-trained AI model",
      lessons: [
        {
          objectives: ["O4"],
          title: "Loading a pre-trained model with Hugging Face",
          minutes: 6,
          goal: "Load a free sentiment model in Colab and use it on one sentence.",
          text: [
            "A pre-trained model is one someone already trained and shared, so you can use it right away. Hugging Face is a website that hosts thousands of free models, and its Transformers library loads them with one line.",
            "The easiest tool is pipeline. You tell it the task and the model: classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\"). This model reads English text and decides whether its mood (sentiment) is POSITIVE or NEGATIVE.",
            "Use it like a function: classifier(\"The practice today was great!\"). It returns a list with a dictionary inside, for example [{'label': 'POSITIVE', 'score': 0.99}]. The score is how sure the model is, from 0 to 1. The first run downloads the model, so it takes a little longer.",
            "Always read a model's page (its \"model card\") before you use it: it says what the model was trained on, what it is for and its licence."
          ],
          steps: ["In a new cell: from transformers import pipeline", "Create classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "Run result = classifier(\"The practice today was great!\")", "print(result[0][\"label\"], result[0][\"score\"])", "If transformers is missing, run !pip install transformers first."],
          words: [["Pre-trained model", "a model someone else already trained that you can use right away."], ["Hugging Face", "a website and set of libraries for sharing free AI models."], ["pipeline", "a Transformers tool that loads a model for a task in one line."], ["Sentiment", "the mood of a piece of text: positive or negative."], ["Score", "how sure the model is, from 0 to 1."], ["Model card", "the page that explains what a model does, its data and its licence."]],
          slides: [
            { title: "Pre-trained models", bullets: ["Already trained by someone else", "Hugging Face hosts thousands, free", "Read the model card first"] },
            { title: "One line to load", bullets: ["from transformers import pipeline", "pipeline(\"text-classification\", model=...)", "First run downloads the model"] },
            { title: "Reading the result", bullets: ["[{'label': 'POSITIVE', 'score': 0.99}]", "result[0][\"label\"] is the mood", "result[0][\"score\"] is how sure it is"] }
          ],
          sources: [HF_PIPELINES, HF_MODEL],
          tryIt: "Load the sentiment classifier and run it on three sentences you write: one clearly happy, one clearly upset, and one mixed like \"The food was good but the wait was long.\" Print the label and score for each and note which one it was least sure about.",
          youCanNow: "load a pre-trained model with pipeline and read its label and score.",
          quickCheck: [
            { objective: "O4", q: "What does a model card tell you?", options: ["Your Colab password", "How many comments you have", "The price of a computer", "What the model was trained on, what it is for and its licence"], answer: 3, why: "Read the model card before using a model." },
            { objective: "O4", q: "You run the classifier for the first time and it takes a while. What would you do?", options: ["Stop it and give up", "Wait; the first run downloads the model", "Install Python again", "Change the label to POSITIVE by hand"], answer: 1, why: "The first run downloads the model, so it takes longer." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Running the model on many texts",
          minutes: 5,
          goal: "Use a loop to classify a list of comments and count the results.",
          text: [
            "Real programs handle many texts, not one. Put your comments in a list, then loop: for comment in comments: result = classifier(comment)[0]. You can also pass the whole list at once, classifier(comments), and get one result per comment back.",
            "To summarize, keep counters: positive = 0 and negative = 0 before the loop, then add 1 to the right one inside it based on result[\"label\"].",
            "Round the score so it is easy to read: round(result[\"score\"], 2) gives two decimal places. An f-string prints a neat line: print(f\"{result['label']:8} {round(result['score'], 2)}  {comment}\")."
          ],
          steps: ["Put at least five comments in a list.", "Set positive = 0 and negative = 0.", "Loop through the comments and classify each one.", "Print the label, rounded score and comment.", "Add to the right counter, then print the totals after the loop."],
          words: [["Counter", "a variable that counts how many times something happened."], ["round()", "shortens a number to a set number of decimal places."], ["Batch", "a group of inputs handled together."]],
          slides: [
            { title: "Many texts, one loop", bullets: ["Put comments in a list", "for comment in comments:", "result = classifier(comment)[0]"] },
            { title: "Count as you go", bullets: ["positive = 0, negative = 0 before the loop", "Add 1 to the right counter inside it", "Print totals after the loop"] },
            { title: "Make it readable", bullets: ["round(score, 2) for two decimals", "One neat line per comment"] }
          ],
          tryIt: "Write six comments about a class, a team practice or a local shop. Classify them in a loop, print one neat line for each, and print how many were positive and how many negative.",
          youCanNow: "run an AI model over a list of texts and summarize the results with counters.",
          quickCheck: [
            { objective: "O5", q: "What does classifier(comments) give back when comments is a list?", options: ["One result for the whole list", "An error every time", "One result per comment", "Only the first comment's result"], answer: 2, why: "Passing a list returns one result for each comment." },
            { objective: "O5", q: "Inside your loop, result[\"label\"] is \"POSITIVE\". What would you do with your counters?", options: ["Add 1 to positive", "Add 1 to negative", "Set positive back to 0", "Delete the comment"], answer: 0, why: "Add 1 to the counter that matches the label." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Checking the AI and finishing the feedback sorter",
          minutes: 6,
          goal: "Flag low-confidence results for a person to check, and finish the feedback sorter.",
          text: [
            "AI models make mistakes. This one only knows positive and negative, so neutral or mixed comments get forced into one of them. It can also miss sarcasm (\"Great, another rainy game day.\") and it was trained on English movie reviews, so slang or other languages may confuse it.",
            "A good habit is a confidence threshold: if the score is below a number you choose, such as 0.80, the program says \"check by hand\" instead of trusting the label. A person makes the final call on anything that matters.",
            "Use AI responsibly: do not run private messages through a tool without permission, do not paste passwords or API keys into a shared notebook, and tell people when a result came from AI.",
            "You now have everything for the final task: a list, a model, a loop, an if with a threshold, counters and a clear printout."
          ],
          steps: ["Choose a threshold, for example THRESHOLD = 0.80.", "Inside the loop, check: if result[\"score\"] < THRESHOLD:", "Print \"check by hand\" next to those comments.", "Count positive and negative as before.", "Print the totals and how many need a human check."],
          words: [["Threshold", "a cut-off number you choose; results below it get special handling."], ["Confidence", "how sure a model is about its answer."], ["Sarcasm", "saying the opposite of what you mean, which models often miss."], ["Human in the loop", "a person reviews the AI's results before they are used."]],
          slides: [
            { title: "Models make mistakes", bullets: ["Only positive or negative: mixed gets forced", "Misses sarcasm and slang", "Trained on English movie reviews"] },
            { title: "Use a threshold", bullets: ["THRESHOLD = 0.80", "Score below it: \"check by hand\"", "A person makes the final call"] },
            { title: "Use AI responsibly", bullets: ["Get permission for private messages", "No passwords or keys in shared notebooks", "Say when a result came from AI"] }
          ],
          sources: [HF_MODEL],
          tryIt: "Final task: build the feedback sorter. Use at least six comments, including one mixed and one sarcastic. Print each with its label and score, mark anything under 0.80 as \"check by hand\", and print the positive, negative and check-by-hand totals. Then read the flagged ones yourself and decide.",
          youCanNow: "build a working AI program in Python that sorts text, reports its results and hands unsure cases to a person.",
          quickCheck: [
            { objective: "O6", q: "Why might this sentiment model get a neutral comment wrong?", options: ["It reads only numbers", "It only knows positive and negative, so neutral comments are forced into one", "It needs a password", "It only works on Fridays"], answer: 1, why: "The model has only two labels, so mixed or neutral comments get forced into one." },
            { objective: "O6", q: "A friend wants you to run their private messages through your sorter. What would you do?", options: ["Run them without asking the people who wrote them", "Post the results online", "Paste your API key into the notebook to speed it up", "Only use messages you have permission to use, and say the results came from AI"], answer: 3, why: "Responsible AI use means permission for private data and telling people when AI was used." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Using a pre-trained AI model",
        questions: [
          { objective: "O4", q: "What is a pre-trained model?", options: ["A model you must train for weeks first", "A list of rules you write", "A paid website", "A model someone already trained that you can use right away"], answer: 3, why: "Pre-trained models are ready to use." },
          { objective: "O4", q: "The classifier returns [{'label': 'NEGATIVE', 'score': 0.97}]. What does 0.97 mean?", options: ["The model is very sure the comment is negative", "97 words were read", "The comment is 97% long", "It cost 97 cents"], answer: 0, why: "The score is the model's confidence from 0 to 1." },
          { objective: "O5", q: "Which line gets the label from result = classifier(text)?", options: ["result.label", "result[\"label\"][0]", "result[0][\"label\"]", "label(result)"], answer: 2, why: "The result is a list holding a dictionary, so first [0], then [\"label\"]." },
          { objective: "O6", q: "A comment gets a score of 0.55. With a 0.80 threshold, what does your program do?", options: ["Deletes it", "Counts it twice", "Stops the program", "Marks it \"check by hand\""], answer: 3, why: "Scores under the threshold go to a person." },
          { objective: "O6", q: "Which of these is responsible AI use?", options: ["Pasting your API key into a notebook you share", "Running classmates' private messages without asking", "Telling people a result came from AI and checking unsure ones", "Trusting every label"], answer: 2, why: "Being open and keeping a person in the loop is responsible use." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Programming with Python for Beginners",
    questions: [
      { objective: "O1", q: "An AI model is best described as:", options: ["A list of if statements", "A program that learned patterns from many examples", "A type of keyboard", "A website address"], answer: 1, why: "Models learn patterns from data." },
      { objective: "O1", q: "What does import do in Python?", options: ["Loads a library so you can use its code", "Downloads a movie", "Prints text", "Deletes a file"], answer: 0, why: "import brings a library into your program." },
      { objective: "O1", q: "What does the ! mean in !pip install transformers in Colab?", options: ["It is a mistake", "Make it louder", "Run this as a system command, not Python", "Install it twice"], answer: 2, why: "! tells Colab to run a shell command." },
      { objective: "O1", q: "Which is a true statement about Colab's free tier?", options: ["It is free, but resources are limited and can change", "Resources are unlimited", "You must install it first", "It only runs on phones"], answer: 0, why: "Colab says free resources are not guaranteed or unlimited." },
      { objective: "O2", q: "\"HELP\".lower() gives:", options: ["\"HELP\"", "\"Help\"", "An error", "\"help\""], answer: 3, why: "lower() makes every letter lower case." },
      { objective: "O2", q: "\"price\" in \"what is the price?\" gives:", options: ["False", "True", "\"price\"", "0"], answer: 1, why: "in checks whether the word appears in the text." },
      { objective: "O2", q: "In {\"hours\": \"Open 9 to 5.\"}, what is \"hours\"?", options: ["The value", "The key", "A list", "A loop"], answer: 1, why: "The left side of the pair is the key." },
      { objective: "O3", q: "Your chatbot does not understand \"when do you open?\" but knows \"hours\". Why?", options: ["Colab is broken", "Python cannot read questions", "The dictionary is too short to work", "Rule-based bots only match the rules you wrote"], answer: 3, why: "Every phrasing needs its own rule in a rule-based bot." },
      { objective: "O3", q: "In a chat loop, what should happen when the user types bye?", options: ["Print a goodbye and break", "Start a new loop", "Ask for a password", "Nothing"], answer: 0, why: "break ends the loop cleanly." },
      { objective: "O3", q: "Why are language models useful for chatbots?", options: ["They never make mistakes", "They need no computer", "They understand many ways of saying the same thing", "They work without data"], answer: 2, why: "They learned from millions of sentences." },
      { objective: "O4", q: "What is Hugging Face?", options: ["A social media app", "A Python error", "A video game", "A site and libraries for sharing free AI models"], answer: 3, why: "Hugging Face hosts models and the Transformers library." },
      { objective: "O4", q: "Which line loads the sentiment model?", options: ["import sentiment", "model = load()", "pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "print(\"model\")"], answer: 2, why: "pipeline takes the task and the model name." },
      { objective: "O4", q: "Why does the first run of the model take longer?", options: ["Colab is slow on purpose", "It downloads the model", "It trains from zero", "It checks your email"], answer: 1, why: "The model files download the first time." },
      { objective: "O4", q: "What should you read before using a model?", options: ["Its model card", "Your browser history", "The Colab logo", "Nothing"], answer: 0, why: "The model card explains its use, data and licence." },
      { objective: "O4", q: "The sentiment model's score is:", options: ["How long the text is", "The number of positive words", "How sure the model is, from 0 to 1", "A grade out of 100"], answer: 2, why: "Score is confidence." },
      { objective: "O5", q: "To count positive comments in a loop, you first:", options: ["Set positive = 0 before the loop", "Print positive", "Delete the list", "Import counter"], answer: 0, why: "A counter starts at 0 before the loop." },
      { objective: "O5", q: "round(0.98765, 2) gives:", options: ["0.98", "0.99", "1", "98"], answer: 1, why: "Rounded to two decimals, 0.98765 is 0.99." },
      { objective: "O6", q: "Which comment is this model most likely to get wrong?", options: ["\"I loved it!\"", "\"Great, another rainy game day.\"", "\"This was terrible.\"", "\"Best class ever.\""], answer: 1, why: "Sarcasm says the opposite of what it means, and models often miss it." },
      { objective: "O6", q: "Why use a confidence threshold?", options: ["To make the program faster", "To send unsure results to a person to check", "To hide negative comments", "To delete low scores"], answer: 1, why: "Low-confidence results need a human check." },
      { objective: "O6", q: "Which is NOT safe to put in a notebook you share?", options: ["A list of made-up comments", "A comment line starting with #", "A print statement", "Your password or API key"], answer: 3, why: "Secrets in shared notebooks can be copied and misused." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      5,
      7,
      8,
      10,
      14,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Model loaded and used",
        objective: "O4",
        notYet: "The model does not load, or no labels or scores are produced.",
        meets: "The pre-trained sentiment model runs and gives a label and score for each comment.",
        exceeds: "The notebook notes what the model card says it was trained on."
      },
      {
        name: "Loop and printout",
        objective: "O5",
        notYet: "Fewer than six comments, or comments are not each printed with label and score.",
        meets: "At least six comments, each printed with its label and a rounded score.",
        exceeds: "The printout is neatly lined up with an f-string."
      },
      {
        name: "Counts",
        objective: "O5",
        notYet: "The positive and negative counts are missing or wrong.",
        meets: "Correct counts of positive and negative comments are printed.",
        exceeds: "Also prints how many were marked \"check by hand\"."
      },
      {
        name: "Confidence threshold",
        objective: "O6",
        notYet: "No threshold, or low scores are not flagged.",
        meets: "Every score under 0.80 is marked \"check by hand\".",
        exceeds: "Includes a sarcastic or mixed comment and explains why the model may get it wrong."
      },
      {
        name: "Responsible use",
        objective: "O6",
        notYet: "The notebook contains private messages without permission, or a password or API key.",
        meets: "Only made-up or permitted comments, and no passwords or keys in the notebook.",
        exceeds: "Adds a note saying the labels came from AI and a person checks the unsure ones."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the feedback sorter",
      "Learners who report building or changing another AI program in the 30 days after the course (follow-up survey)",
      "Learners who go on to a next course, such as Introduction to Machine Learning or Data Science for Beginners",
      "Learners who show the feedback sorter in a portfolio, class, club or job application"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or laptop with a web browser",
      "A free Google account to use Google Colab",
      "Six or more short made-up comments, for example from a practice, class or small shop",
      "About 60 to 75 minutes in total, plus practice time"
    ],
    facilitatorNotes: [
      "Run the model download once before class on the same network to check it works; school networks sometimes block model downloads.",
      "Have learners use made-up comments or ones they have permission to use; never real private messages.",
      "Remind learners never to paste passwords or API keys into a notebook, especially one they share.",
      "Ask each learner to find one comment the model gets wrong and discuss why as a group.",
      "Colab's free resources can run out; if a session stops, show learners how to reconnect and run the cells again from the top."
    ]
  }
};
