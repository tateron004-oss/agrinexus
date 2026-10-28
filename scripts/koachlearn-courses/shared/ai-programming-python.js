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
  chapters: [
    {
      name: "Chapter 1: Python building blocks for AI",
      lessons: [
        {
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
          youCanNow: "explain the difference between rule-based code and an AI model, and import a library in Colab."
        },
        {
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
          youCanNow: "use string tools and a dictionary to match a message to the right reply."
        },
        {
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
          youCanNow: "build a working rule-based chatbot loop and explain why rules alone are limited."
        }
      ],
      check: {
        title: "Knowledge Check 1: Python building blocks for AI",
        questions: [
          { q: "What is the main difference between rule-based code and an AI model?", options: ["Rule-based code is always faster", "Models do not use any code", "A model learned patterns from examples instead of having every rule written by hand", "There is no difference"], answer: 2, why: "Models learn patterns from data; rule-based code needs every rule written." },
          { q: "Your Colab cell says \"No module named\" a library. What do you do?", options: ["Run !pip install with the library's name, then import it again", "Restart your computer", "Delete the notebook", "Rename the variable"], answer: 0, why: "pip installs a missing library." },
          { q: "replies = {\"hours\": \"Open 9 to 5.\"}. What is replies[\"hours\"]?", options: ["\"hours\"", "An error", "True", "\"Open 9 to 5.\""], answer: 3, why: "Looking up a key gives its value." },
          { q: "Why use message.lower() in a chatbot?", options: ["To make the text shorter", "So \"HOURS\" and \"hours\" both match", "To delete the message", "To translate it"], answer: 1, why: "Lower-casing makes matching ignore capital letters." },
          { q: "Which word leaves a while True loop?", options: ["exit", "break", "stop", "return to"], answer: 1, why: "break leaves the loop right away." }
        ]
      }
    },
    {
      name: "Chapter 2: Using a pre-trained AI model",
      lessons: [
        {
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
          youCanNow: "load a pre-trained model with pipeline and read its label and score."
        },
        {
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
          youCanNow: "run an AI model over a list of texts and summarize the results with counters."
        },
        {
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
          youCanNow: "build a working AI program in Python that sorts text, reports its results and hands unsure cases to a person."
        }
      ],
      check: {
        title: "Knowledge Check 2: Using a pre-trained AI model",
        questions: [
          { q: "What is a pre-trained model?", options: ["A model you must train for weeks first", "A list of rules you write", "A paid website", "A model someone already trained that you can use right away"], answer: 3, why: "Pre-trained models are ready to use." },
          { q: "The classifier returns [{'label': 'NEGATIVE', 'score': 0.97}]. What does 0.97 mean?", options: ["The model is very sure the comment is negative", "97 words were read", "The comment is 97% long", "It cost 97 cents"], answer: 0, why: "The score is the model's confidence from 0 to 1." },
          { q: "Which line gets the label from result = classifier(text)?", options: ["result.label", "result[\"label\"][0]", "result[0][\"label\"]", "label(result)"], answer: 2, why: "The result is a list holding a dictionary, so first [0], then [\"label\"]." },
          { q: "A comment gets a score of 0.55. With a 0.80 threshold, what does your program do?", options: ["Deletes it", "Counts it twice", "Stops the program", "Marks it \"check by hand\""], answer: 3, why: "Scores under the threshold go to a person." },
          { q: "Which of these is responsible AI use?", options: ["Pasting your API key into a notebook you share", "Running classmates' private messages without asking", "Telling people a result came from AI and checking unsure ones", "Trusting every label"], answer: 2, why: "Being open and keeping a person in the loop is responsible use." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Programming with Python for Beginners",
    questions: [
      { q: "An AI model is best described as:", options: ["A list of if statements", "A program that learned patterns from many examples", "A type of keyboard", "A website address"], answer: 1, why: "Models learn patterns from data." },
      { q: "What does import do in Python?", options: ["Loads a library so you can use its code", "Downloads a movie", "Prints text", "Deletes a file"], answer: 0, why: "import brings a library into your program." },
      { q: "What does the ! mean in !pip install transformers in Colab?", options: ["It is a mistake", "Make it louder", "Run this as a system command, not Python", "Install it twice"], answer: 2, why: "! tells Colab to run a shell command." },
      { q: "Which is a true statement about Colab's free tier?", options: ["It is free, but resources are limited and can change", "Resources are unlimited", "You must install it first", "It only runs on phones"], answer: 0, why: "Colab says free resources are not guaranteed or unlimited." },
      { q: "\"HELP\".lower() gives:", options: ["\"HELP\"", "\"Help\"", "An error", "\"help\""], answer: 3, why: "lower() makes every letter lower case." },
      { q: "\"price\" in \"what is the price?\" gives:", options: ["False", "True", "\"price\"", "0"], answer: 1, why: "in checks whether the word appears in the text." },
      { q: "In {\"hours\": \"Open 9 to 5.\"}, what is \"hours\"?", options: ["The value", "The key", "A list", "A loop"], answer: 1, why: "The left side of the pair is the key." },
      { q: "Your chatbot does not understand \"when do you open?\" but knows \"hours\". Why?", options: ["Colab is broken", "Python cannot read questions", "The dictionary is too short to work", "Rule-based bots only match the rules you wrote"], answer: 3, why: "Every phrasing needs its own rule in a rule-based bot." },
      { q: "In a chat loop, what should happen when the user types bye?", options: ["Print a goodbye and break", "Start a new loop", "Ask for a password", "Nothing"], answer: 0, why: "break ends the loop cleanly." },
      { q: "Why are language models useful for chatbots?", options: ["They never make mistakes", "They need no computer", "They understand many ways of saying the same thing", "They work without data"], answer: 2, why: "They learned from millions of sentences." },
      { q: "What is Hugging Face?", options: ["A social media app", "A Python error", "A video game", "A site and libraries for sharing free AI models"], answer: 3, why: "Hugging Face hosts models and the Transformers library." },
      { q: "Which line loads the sentiment model?", options: ["import sentiment", "model = load()", "pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "print(\"model\")"], answer: 2, why: "pipeline takes the task and the model name." },
      { q: "Why does the first run of the model take longer?", options: ["Colab is slow on purpose", "It downloads the model", "It trains from zero", "It checks your email"], answer: 1, why: "The model files download the first time." },
      { q: "What should you read before using a model?", options: ["Its model card", "Your browser history", "The Colab logo", "Nothing"], answer: 0, why: "The model card explains its use, data and licence." },
      { q: "The sentiment model's score is:", options: ["How long the text is", "The number of positive words", "How sure the model is, from 0 to 1", "A grade out of 100"], answer: 2, why: "Score is confidence." },
      { q: "To count positive comments in a loop, you first:", options: ["Set positive = 0 before the loop", "Print positive", "Delete the list", "Import counter"], answer: 0, why: "A counter starts at 0 before the loop." },
      { q: "round(0.98765, 2) gives:", options: ["0.98", "0.99", "1", "98"], answer: 1, why: "Rounded to two decimals, 0.98765 is 0.99." },
      { q: "Which comment is this model most likely to get wrong?", options: ["\"I loved it!\"", "\"Great, another rainy game day.\"", "\"This was terrible.\"", "\"Best class ever.\""], answer: 1, why: "Sarcasm says the opposite of what it means, and models often miss it." },
      { q: "Why use a confidence threshold?", options: ["To make the program faster", "To send unsure results to a person to check", "To hide negative comments", "To delete low scores"], answer: 1, why: "Low-confidence results need a human check." },
      { q: "Which is NOT safe to put in a notebook you share?", options: ["A list of made-up comments", "A comment line starting with #", "A print statement", "Your password or API key"], answer: 3, why: "Secrets in shared notebooks can be copied and misused." }
    ]
  }
};
