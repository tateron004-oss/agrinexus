"use strict";

// Koach Learn course: Artificial Intelligence -> "Understanding LLMs and Prompt Engineering" (course 2 of the
// "Design, Build, and Deploy Autonomous AI Agents" program). Shape copied from re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "agentic-llms-prompting",
  category: "Artificial Intelligence",
  name: "Understanding LLMs and Prompt Engineering",
  skills: "Explaining tokens and context, Writing a system prompt, Using examples, Getting structured JSON output, Calling an LLM from Python, Testing a prompt",
  outcome: "write and test a reliable system prompt for an agent: it states a role, a task, rules and an output format with an example, returns clean JSON, and you have checked it on five test inputs from a short Python notebook.",
  about: [
    "This is course 2 of Design, Build, and Deploy Autonomous AI Agents. The model inside every agent is a large language model, and the way you instruct it decides whether the agent behaves. This course teaches you how LLMs work in plain words and how to instruct them well.",
    "Chapter 1 is about how the model works and how to write a strong prompt in a free chatbot. Chapter 2 moves to Python in Google Colab, a free notebook in your web browser, where you call a model from code, ask for JSON and test your prompt like an engineer.",
    "Code appears as short lines in the lesson text. You can copy them into Colab. If you have never coded, follow along; the course \"Introduction to Programming with Python\" is a good companion. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a system prompt for one job in your agent from course 1 (for example, \"sort an incoming message into: question, complaint, order, other\"). It must give a role, the task, three rules, the exact JSON output format and one example. Run it from a Colab notebook on five test inputs, including one tricky one, record whether each output was valid JSON and correct, and change the prompt once to fix a failure.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults building their first AI agent in the Design, Build, and Deploy Autonomous AI Agents program: small business owners, career changers, students and staff who finished course 1 and planned one agent job.",
    startingPoint: "Have used a free chatbot and planned an agent on paper in course 1. Most have little or no coding experience and have never called a model from code.",
    gap: "An agent is only as reliable as the instructions its model gets. Learners need to write clear system prompts, get answers a program can read, and test prompts on purpose, or their agents will behave unpredictably and break on odd inputs.",
    constraints: [
      "Reading level: plain words; code shown as short lines to copy",
      "Devices: a computer with a web browser; Google Colab is free but its resources are not guaranteed",
      "Free API tiers have limits and may use data, so no private or customer data in practice",
      "API keys must stay secret and out of notebooks and screenshots",
      "Time: short lessons with one practice task each"
    ],
    prerequisites: "The first course of Design, Build, and Deploy Autonomous AI Agents. \"Introduction to Programming with Python\" is a helpful companion."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a wrong but confident answer from a chatbot", action: "explain how tokens, prediction and the context window can make an LLM sound right and still be wrong", standard: "in your own words, naming at least two causes" },
    { id: "O2", condition: "For one job in your agent", action: "write a system prompt with a role, a task, context, rules and an output format", standard: "with every part present and rules that can be checked" },
    { id: "O3", condition: "Given your system prompt", action: "add one worked example and an exact JSON output format", standard: "so that at least 4 of 5 answers are only valid JSON with the right keys" },
    { id: "O4", condition: "In a free Google Colab notebook", action: "call an LLM from Python with the API key stored as a secret", standard: "with the answer printed and no key visible in the code" },
    { id: "O5", condition: "Given a model answer in your notebook", action: "parse the JSON answer into Python data and handle a bad answer", standard: "without the code crashing on an empty or broken answer" },
    { id: "O6", condition: "Given five test inputs, including one tricky input", action: "test the prompt, record the results and change one thing to fix a failure", standard: "rerunning every test after each change" }
  ],
  chapters: [
    {
      name: "Chapter 1: How LLMs work and how to instruct them",
      lessons: [
        {
          objectives: ["O1"],
          title: "How an LLM writes: tokens, prediction and context",
          minutes: 5,
          goal: "Explain why an LLM can sound right and still be wrong.",
          text: [
            "An LLM writes one small piece of text at a time. These pieces are called tokens: a short word, part of a longer word or a punctuation mark. At each step the model predicts a likely next token from everything it has seen so far.",
            "Everything the model can see at once is its context window: the system prompt, the conversation, any documents you paste and its own answer so far. Anything outside the context window does not exist for the model. It has no memory of past chats unless the app adds them.",
            "Because it predicts likely text, an LLM can write a smooth answer that is false. It is not looking facts up unless it has a search tool. Your prompt, the context you give it and the checks you build are what make it reliable."
          ],
          words: [["Token", "a small piece of text, often part of a word, that an LLM reads and writes."], ["Context window", "all the text the model can see at one time."], ["Prediction", "the model choosing a likely next token based on what came before."]],
          slides: [
            { title: "An LLM writes token by token", bullets: ["A token is a word or part of a word", "Each step predicts a likely next token"] },
            { title: "The context window", bullets: ["Everything the model can see at once", "System prompt, chat, documents, its answer", "Outside the window does not exist for it"] },
            { title: "Why it can be wrong", bullets: ["It predicts likely text, not checked facts", "Your prompt, context and checks make it reliable"] }
          ],
          tryIt: "In a free chatbot, ask: \"How many letters r are in the word strawberry? Then explain how tokens might make this hard for you.\" Note whether the first answer was right, and why tokens matter.",
          youCanNow: "explain tokens and the context window, and why an LLM needs checking.",
          quickCheck: [
            { objective: "O1", q: "What does an LLM do when it writes an answer?", options: ["Looks the answer up in a checked database", "Predicts likely next tokens, one at a time", "Copies a stored answer written by a person", "Runs a search and reads the top result"], answer: 1, why: "An LLM predicts text token by token, so it can sound fluent without checking facts." },
            { objective: "O1", q: "A chatbot gives a confident answer about a rule that matters to your work. What do you do?", options: ["Use it, because it sounded sure", "Ask it the same question again until it agrees", "Check the rule against a trusted source before using it", "Paste the answer into a new chat to confirm it"], answer: 2, why: "A smooth answer can still be wrong, so important facts need a trusted source." }
          ]
        },
        {
          objectives: ["O2"],
          title: "The parts of a strong prompt",
          minutes: 6,
          goal: "Write a prompt with a role, task, context, rules and output format.",
          text: [
            "A strong prompt for an agent has five parts. Role: who the model is (\"You sort customer messages for a small bakery.\"). Task: the one job. Context: the facts it needs. Rules: what it must and must not do. Output format: exactly how the answer should look.",
            "The system prompt holds the parts that stay the same on every run: role, rules and format. The user message holds what changes each time: the new message to sort, the new question.",
            "Be specific and positive. \"Answer in two sentences\" works better than \"don't be long\". Say what to do when unsure: \"If the message fits no category, use other.\" That one rule prevents many wrong guesses."
          ],
          steps: ["Role: who is the model?", "Task: one clear job.", "Context: the facts it needs.", "Rules: must, must not, and what to do when unsure.", "Format: exactly how the answer looks."],
          words: [["System prompt", "the standing instructions sent with every request."], ["User message", "the part that changes each time, like a new question or input."]],
          slides: [
            { title: "Five parts of a strong prompt", bullets: ["Role", "Task", "Context and rules", "Output format"] },
            { title: "System prompt vs user message", bullets: ["System: what stays the same (role, rules, format)", "User: what changes each run (the new input)"] },
            { title: "Write clear rules", bullets: ["Say what to do, not only what not to do", "Give a rule for when it is unsure", "Example: if nothing fits, use \"other\""] }
          ],
          tryIt: "Write a five-part system prompt for one job in your agent from course 1. Paste it into a free chatbot, then send three different inputs and see if it follows every rule.",
          youCanNow: "write a prompt with a role, task, context, rules and output format.",
          quickCheck: [
            { objective: "O2", q: "What is the role part of a system prompt?", options: ["The exact JSON keys you want back", "The message the user sends this time", "The list of test inputs", "Who the model should act as, such as a support sorter"], answer: 3, why: "The role tells the model who it is for this job; the other parts cover task, context, rules and format." },
            { objective: "O2", q: "Your prompt says \"be helpful and good\" and the answers vary. What would you change?", options: ["Replace it with clear rules the model can follow and you can check", "Make the prompt longer with more friendly words", "Remove all rules so the model can decide", "Switch to a different chatbot"], answer: 0, why: "Vague words cannot be checked; specific rules make behavior consistent." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Examples, steps and structured output",
          minutes: 5,
          goal: "Use an example and a JSON format to get answers a program can read.",
          text: [
            "Showing beats telling. One or two worked examples in the prompt (input and the exact output you want) improve results a lot. This is called few-shot prompting. Zero-shot means no examples.",
            "Agents need answers that code can read, not chatty paragraphs. Ask for JSON, a simple text format of names and values: {\"category\": \"order\", \"urgent\": false}. Say: \"Reply with only JSON, no other text,\" and show the exact keys.",
            "For harder jobs, ask the model to work in steps: first list the facts, then decide. Many model services can also force valid JSON with a setting called structured output; check your provider's documentation for it."
          ],
          words: [["Few-shot prompting", "giving the model a few examples of input and the right output."], ["JSON", "a simple text format of named values that programs can read, like {\"name\": \"Ana\"}."], ["Structured output", "a model setting that makes the answer follow an exact format."]],
          slides: [
            { title: "Show, do not just tell", bullets: ["Zero-shot: no examples", "Few-shot: one to three worked examples", "Examples improve results a lot"] },
            { title: "Ask for JSON", bullets: ["Programs can read it", "\"Reply with only JSON, no other text\"", "Show the exact keys you want"] },
            { title: "Harder jobs", bullets: ["Ask it to list facts, then decide", "Use structured output if your provider has it"] }
          ],
          tryIt: "Add one worked example and a JSON format to your prompt from Lesson 2. Send five inputs. Count how many answers were only JSON with the right keys.",
          youCanNow: "use examples and a JSON format to get answers your code can read.",
          quickCheck: [
            { objective: "O3", q: "Why add a worked example to a prompt?", options: ["It makes the model run faster", "It hides the rules from the user", "It shows the model the exact kind of answer you want", "It replaces the need for a role"], answer: 2, why: "An example shows the model the pattern and format to copy." },
            { objective: "O3", q: "Some answers come back as JSON with a friendly sentence in front. What would you do?", options: ["Accept it, because the JSON is in there somewhere", "State in the prompt to return only JSON with the exact keys, and show an example", "Ask for a longer answer", "Remove the output format so the model is free"], answer: 1, why: "Code needs only JSON, so the prompt must say so clearly and show it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How LLMs work and how to instruct them",
        questions: [
          { objective: "O1", q: "What is a token?", options: ["A password for the AI", "A coin used to pay for AI", "A small piece of text the model reads and writes", "A type of chatbot"], answer: 2, why: "LLMs work on tokens: words or parts of words." },
          { objective: "O1", q: "You pasted a document into one chat. In a new chat, the model does not know it. Why?", options: ["The document is outside its context window now", "The model is broken", "Documents are not allowed", "It needs a faster computer"], answer: 0, why: "The model only sees what is in the current context window." },
          { objective: "O2", q: "Which part belongs in the system prompt?", options: ["A random joke", "Today's customer message", "Your password", "The rules that apply on every run"], answer: 3, why: "The system prompt holds what stays the same; the user message holds what changes." },
          { objective: "O2", q: "Which rule is written best?", options: ["\"Don't be long.\"", "\"Answer in two sentences. If unsure, say: not sure.\"", "\"Try hard.\"", "\"Be good.\""], answer: 1, why: "It is specific, positive and says what to do when unsure." },
          { objective: "O3", q: "Why ask an agent's model for JSON?", options: ["It looks nicer", "Models cannot write paragraphs", "It is shorter to type", "Your code can read the answer reliably"], answer: 3, why: "Agents pass answers to code, and code needs a fixed format." }
        ]
      }
    },
    {
      name: "Chapter 2: Calling and testing an LLM from Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Your first model call from Google Colab",
          minutes: 6,
          goal: "Call an LLM from a Python notebook and print the answer.",
          text: [
            "Google Colab is a free Python notebook that runs in your browser; you need a Google account. Free resources are not guaranteed and idle notebooks time out, so save your work. Open colab.research.google.com and create a new notebook.",
            "To call a model you need an API key, a secret password for programs. Google's Gemini API has a free tier for small projects; you get a key from Google AI Studio (aistudio.google.com/apikey). Google says free-tier content may be used to improve its products, so never send private or customer data on the free tier.",
            "Google's current quickstart shows lines like these: pip install -U google-genai, then from google import genai, client = genai.Client(), then interaction = client.interactions.create(model='MODEL_NAME', input='Explain an AI agent in one sentence'), then print(interaction.output_text). Copy the exact model name and code from the quickstart page, because names and code change. The key is read from an environment variable named GEMINI_API_KEY.",
            "Never paste your key into a shared notebook, a screenshot or a chatbot. Keep it in a secret setting, and make a new key if one leaks. Other providers (OpenAI, Anthropic, or a free local model with Ollama) work the same way: a client, a model name, an input and an output."
          ],
          steps: ["Open colab.research.google.com and make a new notebook.", "Get an API key from Google AI Studio and keep it secret.", "Install the library and copy the quickstart code.", "Use the model name shown on the quickstart page.", "Run the cell and print the answer."],
          words: [["API", "a way for one program to talk to another, like your code asking a model for an answer."], ["API key", "a secret code that lets your program use a service; treat it like a password."], ["Environment variable", "a setting stored outside your code, often used for secrets."]],
          slides: [
            { title: "Colab: free Python in the browser", bullets: ["Needs a Google account", "Free resources are not guaranteed", "Idle notebooks time out: save your work"] },
            { title: "Getting a model to answer", bullets: ["Get an API key from Google AI Studio", "Copy code and model name from the quickstart", "Client, model name, input, output"] },
            { title: "Protect your key", bullets: ["Never in a shared notebook or screenshot", "Keep it in a secret setting", "Make a new key if it leaks"] },
            { title: "Free tier and privacy", bullets: ["Free-tier content may be used to improve products", "Never send private or customer data on it"] }
          ],
          sources: [{ name: "Google Colab FAQ", url: "https://research.google.com/colaboratory/faq.html" }, { name: "Gemini API quickstart", url: "https://ai.google.dev/gemini-api/docs/quickstart" }, { name: "Gemini API pricing and free tier", url: "https://ai.google.dev/gemini-api/docs/pricing" }],
          tryIt: "Make a Colab notebook, set up a key the safe way and get the model to answer: \"Explain an AI agent in one sentence.\" Save the notebook as agent-prompts.",
          youCanNow: "call an LLM from Python in a free notebook and keep your API key secret.",
          quickCheck: [
            { objective: "O4", q: "What is Google Colab?", options: ["A free Python notebook that runs in a web browser", "A paid AI model", "A place to store passwords", "A phone app for chatting with AI"], answer: 0, why: "Colab lets you run Python in the browser for free, with limits." },
            { objective: "O4", q: "You are about to share your notebook. Your API key is typed into a code cell. What do you do?", options: ["Share it, since only friends will see it", "Blur the key in a screenshot instead", "Change the variable name so it is harder to find", "Move the key into a secret setting, and make a new key if it was already seen"], answer: 3, why: "A key is like a password: keep it in a secret setting and replace it if it leaked." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sending your system prompt and reading JSON in code",
          minutes: 6,
          goal: "Send your prompt from code and turn the JSON answer into Python data.",
          text: [
            "Put your system prompt in a Python variable: SYSTEM = '''You sort messages for a bakery... Reply with only JSON.''' Put each new input in another variable. The simplest way to combine them is to send SYSTEM plus the input as one text; most providers also have a separate system-instruction setting, shown in their documentation.",
            "Read the answer with Python's json library: import json, then data = json.loads(text). Now data['category'] is a normal Python value your agent can act on.",
            "The model will sometimes add words around the JSON or miss a key. Plan for it: wrap the parse in try and except, and if it fails, either retry once with \"Reply with only JSON\" or mark the input as failed. Never let a bad answer crash the agent or slip through silently."
          ],
          steps: ["Store the system prompt in a variable.", "Send the system prompt and the input to the model.", "Parse the answer with json.loads inside try / except.", "Check the keys you need are there.", "On failure: retry once, or mark it failed."],
          words: [["Parse", "turn text into data a program can use."], ["try / except", "Python's way to catch an error and handle it instead of crashing."], ["Retry", "trying the same request again after a failure."]],
          slides: [
            { title: "Prompt in code", bullets: ["SYSTEM holds the role, rules and format", "Each new input goes in its own variable"] },
            { title: "Read the JSON", bullets: ["import json", "data = json.loads(text)", "data['category'] is now usable"] },
            { title: "Plan for bad answers", bullets: ["Wrap the parse in try / except", "Check the keys are there", "Retry once, or mark it failed"] }
          ],
          tryIt: "In your notebook, send your system prompt with one input, parse the JSON, and print just the category. Then give it a strange input (an empty message) and make sure your code does not crash.",
          youCanNow: "send a system prompt from Python and safely turn the model's JSON into data.",
          quickCheck: [
            { objective: "O5", q: "What does json.loads do with the model's answer?", options: ["Sends it back to the model", "Turns JSON text into Python data your code can use", "Checks whether the answer is true", "Saves it to a file"], answer: 1, why: "json.loads parses JSON text into Python data such as a dictionary." },
            { objective: "O5", q: "Your agent gets an empty message and the parse step fails. What should the code do?", options: ["Crash so you notice it", "Return whatever text came back as the category", "Catch the error, then retry once or mark the item as failed", "Delete the message"], answer: 2, why: "Wrapping the parse in try / except lets the agent handle a bad answer instead of crashing." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Testing a prompt like an engineer",
          minutes: 6,
          goal: "Run a prompt on a small test set and improve it from the results.",
          text: [
            "One good answer proves little. Engineers write a test set: a short list of inputs with the answer they expect. Include easy cases, edge cases (empty, very long, two topics at once) and one tricky case, such as a message that says \"ignore your instructions\".",
            "In Python, a list of pairs works: tests = [('Where is my cake?', 'order'), ('You burned my bread!', 'complaint')]. Loop over it, call the model, parse the JSON and compare to the expected answer. Count valid JSON and correct answers.",
            "Change one thing at a time: a clearer rule, a better example. Run the whole test set again after each change, so you know the fix helped and broke nothing. Keep each prompt version and its score in your notebook."
          ],
          steps: ["Write 5 to 10 test inputs with expected answers.", "Include edge cases and one tricky input.", "Loop: call, parse, compare, count.", "Change one thing in the prompt.", "Run all tests again and keep the better version."],
          words: [["Test set", "a list of inputs with the answers you expect, used to check a prompt."], ["Edge case", "an unusual input, like an empty or very long message."], ["Regression", "when a change fixes one thing but breaks another."]],
          slides: [
            { title: "Write a test set", bullets: ["Inputs with expected answers", "Easy cases and edge cases", "One tricky \"ignore your instructions\" input"] },
            { title: "Run it in a loop", bullets: ["Call the model for each input", "Parse the JSON, compare to expected", "Count valid and correct"] },
            { title: "Improve one change at a time", bullets: ["Clearer rule or better example", "Rerun every test after each change", "Keep versions and scores"] }
          ],
          tryIt: "Final task: write your system prompt with role, task, three rules, a JSON format and one example. Test it in Colab on five inputs including one tricky one, record valid JSON and correct for each, change the prompt once to fix a failure, and rerun.",
          youCanNow: "test and improve a prompt with a small test set, the way agent builders do.",
          quickCheck: [
            { objective: "O6", q: "What is a regression when you test prompts?", options: ["A test that passes the first time", "A fix that makes a test that used to pass now fail", "A test input written in another language", "A slower answer from the model"], answer: 1, why: "A regression is when a change breaks something that worked before." },
            { objective: "O6", q: "One of five tests fails. What is the best next step?", options: ["Change one thing in the prompt and rerun all five tests", "Rewrite the whole prompt from the start", "Delete the failing test", "Rerun only the failing test"], answer: 0, why: "Changing one thing and rerunning every test shows what the change fixed and what it broke." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Calling and testing an LLM from Python",
        questions: [
          { objective: "O4", q: "Where should your API key go?", options: ["In a shared notebook cell", "In a screenshot for help", "In a secret setting or environment variable", "In the chatbot so it remembers"], answer: 2, why: "Keys are passwords for programs and must stay secret." },
          { objective: "O4", q: "Why copy the model name from the provider's quickstart page?", options: ["Model names and code change over time", "It is required by law", "It makes the answer shorter", "Colab will not run otherwise"], answer: 0, why: "Providers rename and retire models; their page is current." },
          { objective: "O5", q: "json.loads(text) fails because the model added words. A good agent:", options: ["Crashes", "Catches the error, retries once or marks it failed", "Deletes the input", "Uses the text anyway"], answer: 1, why: "Plan for bad answers so they neither crash nor slip through." },
          { objective: "O6", q: "Which belongs in a good test set?", options: ["Easy cases, edge cases and a tricky input", "Only one input", "Only easy inputs", "The answers the model already gave"], answer: 0, why: "Edge and tricky cases show where a prompt breaks." },
          { objective: "O6", q: "You changed the prompt and one test now passes. What next?", options: ["Ship it immediately", "Change five more things at once", "Delete the old tests", "Run the whole test set again"], answer: 3, why: "Rerunning everything catches regressions." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Understanding LLMs and Prompt Engineering",
    questions: [
      { objective: "O1", q: "An LLM writes by:", options: ["Copying a web page", "Predicting one token at a time", "Asking a human", "Looking up a fixed answer list"], answer: 1, why: "It predicts a likely next token, again and again." },
      { objective: "O1", q: "The context window is:", options: ["A browser tab", "The model's price", "Everything the model can see at once", "The chat app's color theme"], answer: 2, why: "Only text inside the window exists for the model." },
      { objective: "O1", q: "Why can a model state something false smoothly?", options: ["It is out of tokens", "It is lying on purpose", "It predicts likely text rather than checking facts", "Its key expired"], answer: 2, why: "Prediction is not fact-checking unless a tool is added." },
      { objective: "O2", q: "Which is NOT one of the five parts of a strong prompt?", options: ["Your password", "Output format", "Rules", "Role"], answer: 0, why: "Passwords never belong in prompts." },
      { objective: "O2", q: "What should change on every run?", options: ["The system prompt", "The output format", "The role", "The user message"], answer: 3, why: "The new input goes in the user message." },
      { objective: "O2", q: "A good rule for uncertain cases is:", options: ["\"Guess.\"", "\"If nothing fits, use other.\"", "\"Never be unsure.\"", "\"Make something up.\""], answer: 1, why: "Telling it what to do when unsure prevents wrong guesses." },
      { objective: "O3", q: "Few-shot prompting means:", options: ["Short prompts only", "Sending fewer requests", "Using a small model", "Including a few worked examples"], answer: 3, why: "Examples of input and output guide the model." },
      { objective: "O3", q: "Which is valid JSON?", options: ["category = order", "<category>order", "{\"category\": \"order\"}", "category: order;"], answer: 2, why: "JSON uses braces, quoted names and values." },
      { objective: "O3", q: "Structured output is:", options: ["A model setting that forces an exact format", "A longer answer", "A type of chatbot", "A Colab menu"], answer: 0, why: "Many providers can force valid JSON with it; check the docs." },
      { objective: "O4", q: "Google Colab is:", options: ["A paid server you must install", "A free Python notebook in the browser", "A phone app only", "An AI model"], answer: 1, why: "Colab runs Python notebooks in your browser for free." },
      { objective: "O4", q: "Colab's free resources are:", options: ["Not guaranteed; idle notebooks time out", "Guaranteed and unlimited", "Only for schools", "Only on weekends"], answer: 0, why: "Colab says free resources are not guaranteed." },
      { objective: "O4", q: "An API key should be treated like:", options: ["A public username", "A comment", "A file name", "A password"], answer: 3, why: "Anyone with the key can use your account." },
      { objective: "O4", q: "On the Gemini API free tier you should not send:", options: ["A test question", "Private or customer data", "A sample bakery message you made up", "\"Hello\""], answer: 1, why: "Free-tier content may be used to improve Google's products." },
      { objective: "O4", q: "Your key leaked in a screenshot. You should:", options: ["Hope nobody saw", "Post it again", "Make a new key and stop using the old one", "Email it to support"], answer: 2, why: "A leaked key must be replaced." },
      { objective: "O5", q: "json.loads turns:", options: ["Data into a picture", "Python into JavaScript", "JSON text into Python data", "A prompt into a model"], answer: 2, why: "Parsing makes the answer usable in code." },
      { objective: "O5", q: "Wrapping the parse in try / except lets your agent:", options: ["Handle a bad answer instead of crashing", "Run faster", "Skip the model call", "Hide the key"], answer: 0, why: "Errors are caught and handled." },
      { objective: "O6", q: "An edge case is:", options: ["A very common input", "A model name", "The first test", "An unusual input like an empty message"], answer: 3, why: "Edge cases test the limits of a prompt." },
      { objective: "O6", q: "Why include an \"ignore your instructions\" input in tests?", options: ["To make the model faster", "To check the prompt resists injection", "To save tokens", "Because the law says so"], answer: 1, why: "Agents read untrusted text; the prompt should hold its rules." },
      { objective: "O6", q: "A regression is when:", options: ["The model gets cheaper", "The key expires", "Tests all pass", "A fix breaks something that worked"], answer: 3, why: "Rerunning all tests catches regressions." },
      { objective: "O6", q: "The best way to improve a prompt is to:", options: ["Change many things at once", "Never change it", "Change one thing and rerun all tests", "Ask the model to grade itself only"], answer: 2, why: "One change at a time shows what actually helped." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      3,
      5,
      7,
      8,
      11,
      13,
      15,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Complete system prompt",
        objective: "O2",
        notYet: "One or more of role, task or three rules is missing or vague.",
        meets: "Gives a role, the task and three clear rules.",
        exceeds: "Rules also cover what to do when unsure or when nothing fits."
      },
      {
        name: "Format and example",
        objective: "O3",
        notYet: "No exact JSON format or no example.",
        meets: "States the exact JSON keys and gives one worked example.",
        exceeds: "The example matches the format exactly and most outputs are valid JSON."
      },
      {
        name: "Runs from Colab safely",
        objective: "O4",
        notYet: "The notebook does not run, or the API key is visible.",
        meets: "The prompt runs from Colab with the key kept in a secret setting.",
        exceeds: "The notebook is tidy and someone else could rerun it with their own key."
      },
      {
        name: "Parses answers safely",
        objective: "O5",
        notYet: "A bad or empty answer crashes the code.",
        meets: "JSON is parsed into data and a bad answer is caught.",
        exceeds: "Failed items are marked clearly so they can be reviewed."
      },
      {
        name: "Tested and improved",
        objective: "O6",
        notYet: "Fewer than five inputs, no tricky input, or results not recorded.",
        meets: "Five inputs including one tricky one, valid JSON and correct recorded for each, one change made and all tests rerun.",
        exceeds: "Can explain why the failure happened and what the change fixed."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who go on to course 3 of the agents program within 30 days",
      "Learners who report using a tested system prompt in a real agent or work task within 30 days (follow-up survey)",
      "Learners who report no leaked API keys (follow-up survey)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with a web browser and internet",
      "A free Google account for Google Colab",
      "A free AI model API key from the provider's official site",
      "The agent plan from course 1",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do Chapter 1 in a free chatbot before anyone opens Colab.",
      "Walk the group through storing the API key as a secret, and check that no key appears on screens or in shared notebooks.",
      "Remind learners not to send private or customer data on free API tiers.",
      "Pair learners who have never coded with someone who has, and have them copy code lines exactly.",
      "Score the final task with the rubric, and ask each learner to show their five test results."
    ]
  }
};
