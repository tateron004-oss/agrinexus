"use strict";

// Koach Learn course: Workforce Development (also Re-Entry, Undeserved Community, Seniors and Technology) -> "English for Everyday Life (ESL)".
// Wave 1 adult basic education (brief of 30 October 2026). Beginner to low-intermediate English. Every English phrase being taught is inside
// double quotes so translators keep it in English; only the teaching language around it is translated. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "esl-everyday-english",
  category: "Workforce Development",
  name: "English for Everyday Life (ESL)",
  skills: "Introducing yourself, Asking someone to repeat or slow down, Shopping and paying, Talking to a doctor and making appointments, Asking for directions",
  outcome: "use short, polite English phrases to introduce yourself, ask people to repeat or slow down, shop and pay, tell a doctor what is wrong, make an appointment on the phone and ask for directions.",
  about: [
    "This course is for adults who are learning English and want to use it in daily life in the United States: at the store, at the doctor, on the phone, at your child's school and on the street.",
    "Each lesson gives you short phrases to say, a short example conversation, and practice you can do out loud at home, alone or with a partner. You do not need perfect grammar. You need phrases that work, and the courage to use them.",
    "Each lesson takes about five minutes. Read the lesson, read the example conversation out loud, then do the \"Try it now\" task. There are two quick questions after each lesson, a knowledge check after each chapter and a 20-question quiz at the end.",
    "At the end you make your own Everyday English phrase card, with the sentences you need most, and you practice it out loud."
  ],
  finalTask: "Make your own Everyday English phrase card and practice it out loud. On one page write: (1) a 3 to 4 sentence introduction about you, (2) three phrases to ask someone to repeat, slow down or spell, (3) two questions for a store you go to, (4) a short phone script to make a doctor's appointment, and (5) one question to ask for directions to a place you go often. Read the whole card out loud, or role play it with a partner, and record yourself if you can.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults who are learning English as a second language in the United States: immigrants and refugees, job seekers, parents, older adults, and people coming home from prison whose first language is not English.",
    startingPoint: "Know some English words and can say a few greetings. Can read short, simple sentences. Often understand more than they can say, and feel nervous speaking with strangers or on the phone.",
    gap: "Daily life needs short spoken English: meeting people, shopping, the doctor, calls and directions. Without a few ready phrases and a way to ask people to repeat or slow down, learners avoid these talks, depend on others or misunderstand important things like appointment times.",
    constraints: [
      "Language level: beginner to low-intermediate English; very common words and short sentences",
      "The course will be translated: English phrases being taught stay in English, inside quotation marks",
      "Devices: a phone or library computer; practice works with paper and a voice",
      "Time: 4 to 6 minute lessons that fit around work and family",
      "Privacy: practice uses made-up names, numbers and dates of birth, never real private numbers"
    ],
    prerequisites: "Can read the alphabet and simple words in English. Learners who cannot yet read English can do the course with a teacher or a helper reading aloud."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "When you meet a new person", action: "introduce yourself in English with your name, where you are from and what you do, and ask one question back", standard: "in at least three short sentences" },
    { id: "O2", condition: "When you do not understand what someone says", action: "ask the person to repeat, slow down or spell a word with a polite English phrase", standard: "instead of pretending to understand" },
    { id: "O3", condition: "In a store", action: "ask where an item is, ask the price and say how you will pay", standard: "using phrases from the lesson" },
    { id: "O4", condition: "At a doctor's office or on the phone", action: "say what is wrong and make an appointment for a day and time that works for you", standard: "giving your name, the problem and the time, and repeating the time back" },
    { id: "O5", condition: "Given a place you need to go", action: "ask for directions and repeat the directions back to check them", standard: "using direction words such as left, right, straight and next to" }
  ],
  chapters: [
    {
      name: "Chapter 1: Meeting people and shopping",
      lessons: [
        {
          title: "Saying hello and introducing yourself",
          objectives: ["O1"],
          minutes: 5,
          goal: "Introduce yourself in three short sentences and ask one question back.",
          text: [
            "When you meet someone new, start with a greeting: \"Hello.\" or \"Hi.\" In the morning you can say \"Good morning.\" Then say your name: \"My name is Ana.\" or \"I'm Ana.\"",
            "Add where you are from and what you do: \"I'm from Guatemala.\" \"I work at a restaurant.\" \"I'm looking for a job.\" Then ask a question back: \"What's your name?\" \"Where are you from?\" When they answer, say \"Nice to meet you.\"",
            "Example conversation. A: \"Hi, I'm Ana. What's your name?\" B: \"I'm Sam. Nice to meet you.\" A: \"Nice to meet you too. I'm from Guatemala. I work at a restaurant.\" B: \"Oh, which one?\"",
            "You do not need long sentences. Three short, clear sentences are a strong introduction. Smile, look at the person and speak a little slowly."
          ],
          steps: ["Greet: \"Hello.\" or \"Good morning.\"", "Say your name: \"My name is ...\" or \"I'm ...\"", "Say where you are from: \"I'm from ...\"", "Say what you do: \"I work at ...\" or \"I'm looking for a job.\"", "Ask one question back: \"What's your name?\" Then say \"Nice to meet you.\""],
          words: [["\"I'm\"", "a short way to say \"I am\"."], ["\"Nice to meet you\"", "a polite phrase you say when you meet someone for the first time."], ["Introduce yourself", "tell a new person who you are."]],
          slides: [
            { title: "Greet the person", bullets: ["\"Hello.\" \"Hi.\"", "\"Good morning.\" \"Good afternoon.\""] },
            { title: "Three short sentences", bullets: ["\"My name is Ana.\"", "\"I'm from Guatemala.\"", "\"I work at a restaurant.\""] },
            { title: "Ask a question back", bullets: ["\"What's your name?\"", "\"Where are you from?\"", "Then: \"Nice to meet you.\""] },
            { title: "Tips", bullets: ["Short and clear is strong", "Smile and look at the person", "Speak a little slowly"] }
          ],
          sources: [{ name: "USA Learns: free English courses for adults (Sacramento County Office of Education)", url: "https://www.usalearns.org/" }],
          tryIt: "Write your own introduction: your name, where you are from and what you do, in three short sentences. Add one question to ask back. Read it out loud three times. Then say it without looking at the paper.",
          youCanNow: "introduce yourself in three short English sentences and ask a new person a question back.",
          quickCheck: [
            { objective: "O1", q: "Someone says \"Nice to meet you.\" What is a good answer?", options: ["\"Goodbye.\"", "\"Nice to meet you too.\"", "\"I don't know.\"", "\"How much is it?\""], answer: 1, why: "\"Nice to meet you too\" is the polite answer when you meet someone." },
            { objective: "O1", q: "Which introduction has a name, where you are from and what you do?", options: ["\"Hello. Hello. Hello.\"", "\"Where is the bus?\"", "\"I like pizza.\"", "\"I'm Ali. I'm from Somalia. I drive a truck.\""], answer: 3, why: "It gives the name, the country and the work in three short sentences." }
          ]
        },
        {
          title: "Asking someone to repeat, slow down or spell",
          objectives: ["O2"],
          minutes: 5,
          goal: "Ask a person to repeat, slow down or spell a word with a polite phrase.",
          text: [
            "Everyone misses words sometimes, even native speakers. It is normal and polite to ask. It is much better than saying \"yes\" when you did not understand.",
            "Useful phrases: \"Sorry, can you repeat that, please?\" \"Can you speak more slowly, please?\" \"How do you spell that?\" \"What does that word mean?\" \"Can you write it down, please?\"",
            "To check that you understood, say it back: \"So, Tuesday at 3 o'clock?\" If you missed only one part, ask about that part: \"Sorry, what time?\"",
            "Example conversation. A: \"Your pickup is at the side entrance at four fifteen.\" B: \"Sorry, can you speak more slowly, please?\" A: \"Side entrance. Four fifteen.\" B: \"So, the side door at 4:15?\" A: \"Yes, that's right.\""
          ],
          steps: ["Do not pretend to understand.", "Say \"Sorry,\" and ask: repeat, slow down, spell or write it down.", "Say the important part back to check it.", "Wait for \"Yes, that's right.\""],
          words: [["\"Repeat\"", "say it again."], ["\"Slowly\"", "not fast."], ["\"Spell\"", "say the letters of a word one by one."]],
          slides: [
            { title: "Asking is normal and polite", bullets: ["Everyone misses words sometimes", "Asking is better than a wrong \"yes\""] },
            { title: "Phrases to ask", bullets: ["\"Sorry, can you repeat that, please?\"", "\"Can you speak more slowly, please?\"", "\"How do you spell that?\"", "\"Can you write it down, please?\""] },
            { title: "Check what you heard", bullets: ["Say it back: \"So, Tuesday at 3 o'clock?\"", "Ask about one part: \"Sorry, what time?\""] }
          ],
          tryIt: "Write the four phrases to ask for help on a small card and keep it in your pocket or phone. Read each one out loud five times. Then play a talk radio station or video, and each time you miss something, say one of the phrases out loud.",
          youCanNow: "ask someone to repeat, slow down, spell or write down a word, and say back what you heard to check it.",
          quickCheck: [
            { objective: "O2", q: "A worker talks very fast and you miss it. What do you say?", options: ["\"Can you speak more slowly, please?\"", "\"Yes, yes.\"", "Nothing; you walk away", "\"Goodbye.\""], answer: 0, why: "Asking the person to speak more slowly is polite and gets you the information." },
            { objective: "O2", q: "The nurse says your doctor's name and you cannot write it. What do you ask?", options: ["\"How much is it?\"", "\"Where are you from?\"", "\"How do you spell that?\"", "\"What time is it?\""], answer: 2, why: "\"How do you spell that?\" asks for the letters so you can write the name." }
          ]
        },
        {
          title: "Shopping: finding things, prices and paying",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ask where an item is, ask the price and say how you will pay.",
          text: [
            "To find something, say \"Excuse me\" and ask: \"Where can I find the rice?\" or \"Do you have diapers?\" The worker may say \"Aisle 5\" (a numbered row in the store) or \"Sorry, we're out of it.\"",
            "To ask the price: \"How much is this?\" or \"How much are these?\" for more than one. At the register the cashier may ask: \"Cash or card?\" \"Do you want a bag?\" \"Do you want your receipt?\" Answer: \"Card, please.\" \"No bag, thanks.\" \"Yes, please.\"",
            "Keep your receipt. To bring something back, say: \"I'd like to return this, please. Here is my receipt.\" Each store has its own return rules, so you can ask: \"What is your return policy?\"",
            "Example conversation. A: \"Excuse me, where can I find the milk?\" B: \"In the back, next to the eggs.\" A: \"Thanks. How much is this?\" B: \"Three ninety-nine.\" A: \"Okay. Card, please.\""
          ],
          steps: ["Say \"Excuse me\" to get help.", "Ask \"Where can I find ...?\"", "Ask \"How much is this?\"", "At the register answer \"Cash or card?\" and \"Do you want a bag?\"", "Keep the receipt for returns."],
          words: [["\"Aisle\"", "a row in a store with shelves on both sides. It sounds like \"I'll\"."], ["\"Receipt\"", "the paper that shows what you bought and paid. The p is silent."], ["\"Return\"", "bring something back to the store for your money."], ["\"Cashier\"", "the worker who takes your money at the register."]],
          slides: [
            { title: "Finding things", bullets: ["\"Excuse me, where can I find the rice?\"", "\"Do you have diapers?\"", "Answer: \"Aisle 5.\""] },
            { title: "Asking the price", bullets: ["One thing: \"How much is this?\"", "More than one: \"How much are these?\""] },
            { title: "At the register", bullets: ["\"Cash or card?\" - \"Card, please.\"", "\"Do you want a bag?\" - \"No bag, thanks.\"", "\"Do you want your receipt?\" - \"Yes, please.\""] },
            { title: "Returns", bullets: ["Keep your receipt", "\"I'd like to return this, please.\"", "\"What is your return policy?\""] }
          ],
          tryIt: "Role play with a partner, or play both parts out loud: you are in a grocery store. Ask where two things are, ask the price of one, and answer the cashier's three questions. Next time you go shopping, use one phrase for real.",
          youCanNow: "ask where something is in a store, ask the price, answer the cashier and ask to return something.",
          quickCheck: [
            { objective: "O3", q: "You want to know the price of two shirts. What do you ask?", options: ["\"Where are you from?\"", "\"Can you spell that?\"", "\"What time is it?\"", "\"How much are these?\""], answer: 3, why: "\"How much are these?\" asks the price of more than one thing." },
            { objective: "O3", q: "The cashier asks \"Cash or card?\" What does she want to know?", options: ["How you will pay", "Your name", "Where you live", "If you want a bag"], answer: 0, why: "\"Cash or card?\" asks how you will pay." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Meeting people and shopping",
        questions: [
          { objective: "O1", q: "Which is a good first sentence when you meet someone?", options: ["\"How much is this?\"", "\"Hi, my name is Rosa.\"", "\"Turn left.\"", "\"I have a fever.\""], answer: 1, why: "A greeting and your name is how an introduction starts." },
          { objective: "O1", q: "You said your name. What is a good question to ask back?", options: ["\"Where is the milk?\"", "\"Cash or card?\"", "\"What's your name?\"", "\"Can I return this?\""], answer: 2, why: "Asking the other person's name keeps the conversation going." },
          { objective: "O2", q: "You did not understand an address. What is the best thing to do?", options: ["Say \"yes\" and guess", "Ask \"Can you write it down, please?\"", "Leave", "Ask \"How much is it?\""], answer: 1, why: "Asking the person to write it down gives you the exact address." },
          { objective: "O2", q: "Someone says \"Your appointment is Friday at nine.\" How do you check you heard it right?", options: ["\"So, Friday at 9?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"I'm from Haiti.\""], answer: 0, why: "Saying the day and time back lets the person confirm or correct it." },
          { objective: "O3", q: "You want to bring back shoes that do not fit. What do you say?", options: ["\"Where are you from?\"", "\"How do you spell that?\"", "\"Turn right.\"", "\"I'd like to return this, please. Here is my receipt.\""], answer: 3, why: "This phrase asks to return the item and shows the receipt." }
        ]
      }
    },
    {
      name: "Chapter 2: The doctor, the phone and getting around",
      lessons: [
        {
          title: "At the doctor: saying what is wrong",
          objectives: ["O4"],
          minutes: 5,
          goal: "Tell a doctor or nurse what is wrong, where it hurts and for how long.",
          text: [
            "At the front desk, say: \"Hi, I have an appointment at 10 o'clock. My name is Ana Lopez.\" They may ask for your date of birth and your insurance card.",
            "To say what is wrong: \"I have a headache.\" \"I have a fever.\" \"My stomach hurts.\" \"My back hurts.\" \"I feel dizzy.\" Then say how long: \"It started two days ago.\" or \"I've had it since Monday.\" The doctor may ask: \"Does it hurt here?\" Answer: \"Yes, there.\" or \"No.\"",
            "If you need help with English, you can ask: \"Do you have an interpreter?\" An interpreter is a person who helps you speak with the doctor in your language. Ask the doctor to write down instructions: \"Can you write that down, please?\" This course teaches words only. Questions about your health go to your doctor or nurse.",
            "In an emergency, such as trouble breathing or chest pain, call 911 and say: \"I need an ambulance.\" Then say where you are."
          ],
          steps: ["At the desk: say your appointment time and your name.", "Say what is wrong: \"I have a ...\" or \"My ... hurts.\"", "Say how long: \"for two days\" or \"since Monday\".", "Ask for an interpreter or for written instructions if you need them."],
          words: [["\"Appointment\"", "a set day and time to see someone, like a doctor."], ["\"Fever\"", "when your body is too hot because you are sick."], ["\"Interpreter\"", "a person who helps two people talk in different languages."], ["\"Insurance card\"", "the card from your health plan that the office asks to see."]],
          slides: [
            { title: "At the front desk", bullets: ["\"I have an appointment at 10 o'clock.\"", "\"My name is Ana Lopez.\""] },
            { title: "Say what is wrong", bullets: ["\"I have a headache.\" \"I have a fever.\"", "\"My stomach hurts.\" \"My back hurts.\"", "\"I feel dizzy.\""] },
            { title: "Say how long", bullets: ["\"for two days\"", "\"since Monday\""] },
            { title: "Get help understanding", bullets: ["\"Do you have an interpreter?\"", "\"Can you write that down, please?\"", "Emergency: call 911, \"I need an ambulance.\""] }
          ],
          tryIt: "Practice only, with a made-up problem: write three sentences for the doctor, for example \"I have a sore throat. It started on Sunday. It hurts when I swallow.\" Read them out loud. Then practice the front desk line with a made-up name and time.",
          youCanNow: "check in at the front desk, say what is wrong and for how long, and ask for an interpreter or written instructions.",
          quickCheck: [
            { objective: "O4", q: "Your head has hurt since yesterday. What do you tell the doctor?", options: ["\"I've had a headache since yesterday.\"", "\"How much is this?\"", "\"Turn left.\"", "\"Cash, please.\""], answer: 0, why: "It says the problem and how long it has lasted." },
            { objective: "O4", q: "You do not understand the doctor well. What can you ask?", options: ["\"Where is aisle 5?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"Do you have an interpreter?\""], answer: 3, why: "An interpreter helps you and the doctor understand each other." }
          ]
        },
        {
          title: "Phone calls: making an appointment and calling the school",
          objectives: ["O4", "O2"],
          minutes: 6,
          goal: "Make an appointment by phone and repeat the day and time back.",
          text: [
            "Phone calls are hard because you cannot see the person. Plan your words before you call and keep a pen and paper ready.",
            "To make an appointment: \"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\" They ask: \"What is it for?\" \"What day works for you?\" Answer: \"I have a cough.\" \"Tuesday morning is good.\" Then repeat it back: \"So, Tuesday the 12th at 9:30?\" To change it: \"I need to change my appointment, please.\"",
            "To call your child's school when your child is sick: \"Hi, this is Ana Lopez. My son, David Lopez, is sick today. He is in second grade. He will not come to school today.\"",
            "If the call goes too fast, use your phrases from Lesson 2: \"Sorry, can you speak more slowly, please?\" \"Can you spell that?\" If they say a phone number, say it back in groups: \"5-5-5, 0-1-2-3?\""
          ],
          steps: ["Write what you will say before you call.", "Say your name and why you are calling.", "Answer: what it is for, and what day and time works.", "Write the day and time, then say it back.", "End: \"Thank you. Bye.\""],
          words: [["\"Make an appointment\"", "set a day and time to see someone."], ["\"Change\" / \"cancel\"", "move to a new time / stop the appointment."], ["\"What works for you?\"", "a question that means \"what day or time is good for you?\""]],
          slides: [
            { title: "Before you call", bullets: ["Write what you will say", "Pen and paper ready"] },
            { title: "Making an appointment", bullets: ["\"I'd like to make an appointment, please.\"", "\"What day works for you?\" - \"Tuesday morning.\"", "Repeat: \"So, Tuesday the 12th at 9:30?\""] },
            { title: "Calling the school", bullets: ["\"My son, David Lopez, is sick today.\"", "\"He is in second grade.\"", "\"He will not come to school today.\""] },
            { title: "When it goes too fast", bullets: ["\"Can you speak more slowly, please?\"", "Say numbers back in groups"] }
          ],
          tryIt: "Write a short phone script to make a doctor's appointment, with a made-up name and problem. Role play it with a partner, or say both parts out loud. Make sure you repeat the day and time back at the end.",
          youCanNow: "make or change an appointment by phone, call your child's school, and repeat the day and time back to check it.",
          quickCheck: [
            { objective: "O4", q: "The office says \"What day works for you?\" What do they want?", options: ["Your address", "Your job", "A day that is good for you", "Your insurance card"], answer: 2, why: "\"What day works for you?\" asks which day is good for you." },
            { objective: "O2", q: "The office says your appointment time. What do you do next?", options: ["Hang up right away", "Say the day and time back to check", "Say \"Nice to meet you\"", "Ask \"How much are these?\""], answer: 1, why: "Repeating the day and time back makes sure you heard it right." }
          ]
        },
        {
          title: "Asking for directions",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ask for directions to a place and repeat them back to check.",
          text: [
            "Start with \"Excuse me.\" Then ask: \"How do I get to the library?\" or \"Where is the bus stop?\" or \"Is the post office near here?\"",
            "Direction words: \"Go straight.\" \"Turn left.\" \"Turn right.\" \"It's on the corner.\" \"It's next to the bank.\" \"It's across from the park.\" \"Go two blocks.\" A block is the part of a street between two corners.",
            "Repeat the directions back: \"So, go straight two blocks, then turn left?\" The person will say \"Yes\" or fix it. If it is too much, ask: \"Can you show me on my phone?\" or \"Can you point?\"",
            "Example conversation. A: \"Excuse me, how do I get to the clinic?\" B: \"Go straight two blocks and turn right. It's next to the pharmacy.\" A: \"So, straight two blocks, turn right, next to the pharmacy?\" B: \"That's right.\" A: \"Thank you!\""
          ],
          steps: ["Say \"Excuse me.\"", "Ask \"How do I get to ...?\" or \"Where is ...?\"", "Listen for left, right, straight, blocks and next to.", "Repeat the directions back.", "Say \"Thank you!\""],
          words: [["\"Straight\"", "forward, without turning."], ["\"Block\"", "the part of a street between two corners."], ["\"Across from\"", "on the other side of the street from something."], ["\"Next to\"", "right beside something."]],
          slides: [
            { title: "Ask the way", bullets: ["\"Excuse me, how do I get to the library?\"", "\"Where is the bus stop?\"", "\"Is the post office near here?\""] },
            { title: "Direction words", bullets: ["\"Go straight.\" \"Turn left.\" \"Turn right.\"", "\"Go two blocks.\"", "\"Next to\" / \"across from\" / \"on the corner\""] },
            { title: "Check it", bullets: ["\"So, straight two blocks, then left?\"", "\"Can you show me on my phone?\""] }
          ],
          sources: [{ name: "USA Learns: free English practice for adults", url: "https://www.usalearns.org/" }],
          tryIt: "Final task: make your Everyday English phrase card. Write your introduction, three phrases to ask someone to repeat or slow down, two store questions, a short phone script for a doctor's appointment, and one question to ask for directions to a place you go often. Read the whole card out loud, or role play it with a partner, and record yourself if you can.",
          youCanNow: "ask for directions, understand left, right, straight and next to, and repeat the directions back to check them.",
          quickCheck: [
            { objective: "O5", q: "The person says \"It's across from the park.\" Where is it?", options: ["Inside the park", "Far away from the park", "On the other side of the street from the park", "Behind you"], answer: 2, why: "\"Across from\" means on the other side of the street." },
            { objective: "O5", q: "Which question asks for directions?", options: ["\"How much is this?\"", "\"How do I get to the bus station?\"", "\"Do you have an interpreter?\"", "\"What's your name?\""], answer: 1, why: "\"How do I get to ...?\" asks the way to a place." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: The doctor, the phone and getting around",
        questions: [
          { objective: "O4", q: "You arrive at the clinic. What do you say at the front desk?", options: ["\"I have an appointment at 2 o'clock. My name is Li Wei.\"", "\"Turn right.\"", "\"Cash or card?\"", "\"Where are you from?\""], answer: 0, why: "Say your appointment time and your name when you check in." },
          { objective: "O4", q: "Which sentence says how long you have been sick?", options: ["\"My stomach hurts.\"", "\"I feel dizzy.\"", "\"I have an appointment.\"", "\"I've had a fever since Monday.\""], answer: 3, why: "\"Since Monday\" tells the doctor how long." },
          { objective: "O4", q: "You cannot go to your appointment on Friday. What do you say on the phone?", options: ["\"I need to change my appointment, please.\"", "\"Nice to meet you.\"", "\"Where is aisle 3?\"", "\"Go straight.\""], answer: 0, why: "This phrase asks to move the appointment to a new time." },
          { objective: "O5", q: "What does \"Go two blocks\" mean?", options: ["Wait for two minutes", "Walk past two street corners", "Take bus number two", "Turn two times"], answer: 1, why: "A block is the part of a street between two corners." },
          { objective: "O5", q: "Someone gives you directions. How do you check you understood?", options: ["Say \"Okay\" and leave", "Ask \"How much is it?\"", "Say the directions back", "Ask \"What's your name?\""], answer: 2, why: "Repeating the directions back lets the person confirm or fix them." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: English for Everyday Life (ESL)",
    questions: [
      { objective: "O1", q: "Which is the best way to start an introduction?", options: ["\"Hello, I'm Marco.\"", "\"How much is this?\"", "\"Turn left.\"", "\"My back hurts.\""], answer: 0, why: "A greeting and your name start an introduction." },
      { objective: "O1", q: "What does \"I'm\" mean?", options: ["I will", "I have", "I am", "I can"], answer: 2, why: "\"I'm\" is the short way to say \"I am\"." },
      { objective: "O1", q: "A new coworker says \"I'm from Nigeria.\" What is a good question back?", options: ["\"Cash or card?\"", "\"Where is the bus stop?\"", "\"Can you spell that?\"", "\"How long have you been here?\""], answer: 3, why: "A friendly question about the person keeps the conversation going." },
      { objective: "O2", q: "Someone talks too fast. What do you say?", options: ["\"Yes, yes, okay.\"", "\"Can you speak more slowly, please?\"", "\"Nice to meet you.\"", "\"Goodbye.\""], answer: 1, why: "Asking the person to slow down is polite and helps you understand." },
      { objective: "O2", q: "Why is it better to ask than to say \"yes\" when you did not understand?", options: ["You might miss important information like a time or place", "Asking is rude", "People do not like questions", "It is faster to guess"], answer: 0, why: "A wrong \"yes\" can mean a missed time, place or instruction." },
      { objective: "O2", q: "You need to write a street name you heard. What do you ask?", options: ["\"How much is it?\"", "\"Do you want a bag?\"", "\"How do you spell that?\"", "\"What's your name?\""], answer: 2, why: "\"How do you spell that?\" asks for the letters." },
      { objective: "O3", q: "You cannot find the bread in a store. What do you ask a worker?", options: ["\"I have a fever.\"", "\"So, Tuesday at 3?\"", "\"Nice to meet you.\"", "\"Excuse me, where can I find the bread?\""], answer: 3, why: "\"Where can I find ...?\" asks where an item is." },
      { objective: "O3", q: "What is a receipt?", options: ["The paper that shows what you bought and paid", "A shopping bag", "A store worker", "A row in the store"], answer: 0, why: "The receipt shows what you bought; keep it for returns." },
      { objective: "O3", q: "The cashier asks \"Do you want a bag?\" You do not want one. What do you say?", options: ["\"Aisle 5.\"", "\"No bag, thanks.\"", "\"Turn right.\"", "\"I'm from Peru.\""], answer: 1, why: "\"No bag, thanks\" politely says no." },
      { objective: "O4", q: "Which sentence tells the doctor what is wrong?", options: ["\"Go straight.\"", "\"How much are these?\"", "\"My stomach hurts.\"", "\"Nice to meet you.\""], answer: 2, why: "\"My stomach hurts\" says the problem." },
      { objective: "O4", q: "What is an interpreter?", options: ["A doctor for children", "A person who helps two people talk in different languages", "A kind of medicine", "A form you fill out"], answer: 1, why: "An interpreter helps you and the doctor understand each other." },
      { objective: "O4", q: "Someone has chest pain and trouble breathing. What do you do?", options: ["Call 911 and say \"I need an ambulance.\"", "Make an appointment for next week", "Go shopping", "Send a text to a friend"], answer: 0, why: "Chest pain and trouble breathing are emergencies: call 911." },
      { objective: "O4", q: "You call to make an appointment. What is the first thing to say?", options: ["\"Turn left.\"", "\"How much is this?\"", "\"Do you want a bag?\"", "\"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\""], answer: 3, why: "Say your name and why you are calling." },
      { objective: "O4", q: "The office says \"Thursday at 4:15.\" What do you say next?", options: ["\"So, Thursday at 4:15?\"", "\"Where are you from?\"", "\"Cash, please.\"", "\"Go straight.\""], answer: 0, why: "Repeating the day and time back checks that you heard it right." },
      { objective: "O4", q: "Your daughter is sick and will miss school. Who do you call and what do you say?", options: ["The store: \"Where is the milk?\"", "The school: \"My daughter is sick today. She will not come to school.\"", "The bus company: \"Turn right.\"", "Nobody"], answer: 1, why: "Call the school, give your child's name and say she is sick today." },
      { objective: "O5", q: "What does \"Turn right\" mean?", options: ["Stop walking", "Go back", "Change direction to the right side", "Go straight"], answer: 2, why: "\"Turn right\" means change direction to the right." },
      { objective: "O5", q: "The bank is \"next to\" the pharmacy. Where is it?", options: ["Far from the pharmacy", "Inside the pharmacy", "On another street", "Right beside the pharmacy"], answer: 3, why: "\"Next to\" means right beside." },
      { objective: "O5", q: "The directions are long and confusing. What can you ask?", options: ["\"Can you show me on my phone?\"", "\"Do you want a bag?\"", "\"I have a headache.\"", "\"Nice to meet you.\""], answer: 0, why: "A map on your phone or pointing makes the directions clear." },
      { objective: "O2", q: "You missed only the time in a long sentence. What is the best question?", options: ["\"Goodbye.\"", "\"Sorry, what time?\"", "\"How much are these?\"", "\"Where are you from?\""], answer: 1, why: "Asking about the one part you missed is fast and clear." },
      { objective: "O1", q: "Which introduction is clear and complete?", options: ["\"Me, me, job.\"", "\"Where is the bank?\"", "\"Hi, I'm Fatima. I'm from Syria. I'm a cook.\"", "\"Card, please.\""], answer: 2, why: "It gives the name, the country and the work in short sentences." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 6, 9, 13, 15, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, practice that part and try again.",
    criteria: [
      { name: "Introduction", objective: "O1", notYet: "Fewer than three sentences, or no name or no question back.", meets: "Says name, where from and what they do, and asks one question back.", exceeds: "Says it out loud without reading and adds one more detail, such as a goal." },
      { name: "Asking to repeat or slow down", objective: "O2", notYet: "No phrases, or the phrases are not polite.", meets: "Three polite phrases to repeat, slow down, spell or write it down.", exceeds: "Also shows how to say something back to check it, such as \"So, Tuesday at 3?\"" },
      { name: "Store questions", objective: "O3", notYet: "No store questions, or they do not ask for an item or a price.", meets: "Two clear questions, such as where an item is and the price.", exceeds: "Also answers the cashier's questions in a role play." },
      { name: "Phone script for an appointment", objective: "O4", notYet: "Missing the name, the reason or the day and time.", meets: "Gives name, reason, a day and time that works, and repeats the time back.", exceeds: "Also shows how to change the appointment or ask for an interpreter." },
      { name: "Asking for directions", objective: "O5", notYet: "No question, or the question does not name a place.", meets: "A clear question to a real place, and a sentence that repeats directions back.", exceeds: "Uses three direction words correctly in a role play." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report making a phone call, appointment or store request in English on their own within 30 days (follow-up survey)",
      "Learners who start \"English for the Workplace (ESL)\" or an adult English class within 30 days",
      "Partner programs report fewer missed appointments caused by language misunderstandings"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer to watch the lessons, or a printed copy of the lesson text",
      "Paper and pen for phrase cards and scripts",
      "A partner for role plays, or a phone to record yourself",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Read every example conversation out loud first, then have learners read it in pairs, then swap roles.",
      "Translated versions keep the English phrases in English; explain them in the learners' language but practice them in English.",
      "Use made-up names, birthdays and phone numbers in all practice; never collect real private details.",
      "Celebrate attempts, not perfect grammar. The goal is phrases that work and the courage to use them.",
      "The doctor lesson teaches words only; send health questions to a doctor or nurse. Point learners to free adult English classes nearby (adult schools, libraries, community colleges) and to free practice such as USA Learns."
    ]
  }
};
