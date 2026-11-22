"use strict";

// Koach Learn course: Workforce Development (also Re-Entry, Undeserved Community) -> "English for the Workplace (ESL)".
// Wave 1 adult basic education (brief of 30 October 2026). Beginner to low-intermediate English. Every English phrase being taught is inside
// double quotes so translators keep it in English; only the teaching language around it is translated. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "esl-workplace-english",
  category: "Workforce Development",
  name: "English for the Workplace (ESL)",
  skills: "Answering job interview questions, Safety words and signs, Reporting a problem or injury, Asking for help and checking instructions, Talking about schedules, Helping customers",
  outcome: "use short, clear English at work: answer common interview questions, understand safety words and report a problem, ask for help and check instructions, talk about your schedule, and greet and help a customer.",
  about: [
    "This course is for adults who are learning English and want to get a job or do better at the job they have: in warehouses, kitchens, cleaning, construction, stores, care work, factories and offices.",
    "You learn the English you need most at work: answers for a job interview, safety words, how to report a problem, how to ask for help, how to talk about your schedule and how to speak with customers. Each lesson has phrases to say, an example conversation and a role play you can do at home.",
    "Each lesson takes about five minutes. Read the lesson, read the example conversation out loud, then do the \"Try it now\" task. There are two quick questions after each lesson, a knowledge check after each chapter and a 20-question quiz at the end.",
    "At the end you write your own Workplace English script for the job you want, and you practice it out loud."
  ],
  finalTask: "Write your Workplace English script for the job you want, on one page: (1) a short answer to \"Tell me about yourself.\" (3 to 4 sentences), (2) answers to two more interview questions, (3) three safety words or signs for that job, with what they mean, (4) a message to call in sick or late, and (5) two phrases for helping a customer or asking a coworker for help. Practice the whole script out loud or in a role play with a partner, and record yourself if you can.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults learning English as a second language who are looking for work or already working in the United States: immigrants and refugees, young adults, people coming home from prison, and workers in entry-level jobs who want to move up.",
    startingPoint: "Can greet people and say simple sentences in English. Understand some work words but feel nervous in interviews, on the phone and with supervisors or customers. Many have strong work skills from their home country.",
    gap: "Workers who cannot answer interview questions, understand a safety warning or ask a supervisor to explain a task lose job offers, make mistakes and can get hurt. A small set of workplace phrases and the habit of checking instructions makes them safer, more confident and easier to promote.",
    constraints: [
      "Language level: beginner to low-intermediate English; very common words and short sentences",
      "The course will be translated: English phrases being taught stay in English, inside quotation marks",
      "Devices: a phone or library computer; practice works with paper, a partner and a voice",
      "Time: 4 to 6 minute lessons that fit around work shifts",
      "Workplace rules (call-in rules, safety rules) differ by employer: learners follow their own employer's handbook and training"
    ],
    prerequisites: "Can read short, simple English sentences. \"English for Everyday Life (ESL)\" is a good first course for learners who are just starting."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "In a job interview", action: "answer common interview questions such as \"Tell me about yourself\" with short prepared answers", standard: "in 2 to 4 clear sentences each, with one real example from your work or life" },
    { id: "O2", condition: "Given common workplace safety words, signs and warnings", action: "say what each one means and what to do, and report a hazard or injury to a supervisor", standard: "getting at least 4 of 5 right and reporting right away" },
    { id: "O3", condition: "When you get an instruction you do not fully understand", action: "ask a supervisor or coworker for help and repeat the instruction back to check it", standard: "before you start the task" },
    { id: "O4", condition: "Given a work schedule or a change in your plans", action: "read your shift times and tell your supervisor you will be late, are sick or need time off", standard: "saying the day, the time and the reason, as early as you can" },
    { id: "O5", condition: "When a customer comes to you", action: "greet the customer, offer help and get another worker when you cannot help", standard: "politely and without guessing an answer" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting the job and staying safe",
      lessons: [
        {
          title: "The job interview: answering common questions",
          objectives: ["O1"],
          minutes: 6,
          goal: "Answer three common interview questions with short prepared answers.",
          text: [
            "Most interviews start with the same few questions. You can prepare your answers and practice them out loud. Short, clear answers are better than long ones.",
            "\"Tell me about yourself.\" Answer with your work, not your private life: \"I have three years of experience in a restaurant kitchen. I am fast and careful. I want to grow in food service.\" \"Why do you want this job?\" Answer: \"I like working with my hands, and this company has good training.\" \"When can you start?\" Answer: \"I can start next Monday.\"",
            "Other common questions: \"What are your strengths?\" (\"I am on time and I learn fast.\") \"Can you work weekends?\" (\"Yes, I can work Saturdays.\") At the end they often ask \"Do you have any questions?\" Have one ready: \"What does a normal day look like?\" or \"What are the hours?\"",
            "Experience from your home country counts. Say it: \"In Mexico I built houses for five years.\" If you did not understand a question, use the phrases you know: \"Sorry, can you repeat the question, please?\""
          ],
          steps: ["Write short answers to the common questions.", "Use one real example from your work or life in each.", "Practice out loud until you can say them without reading.", "Prepare one question to ask at the end.", "If you miss a question, ask them to repeat it."],
          words: [["\"Experience\"", "work you have done before."], ["\"Strengths\"", "things you do well."], ["\"Interview\"", "a meeting where an employer asks you questions to decide whether to hire you."]],
          slides: [
            { title: "Prepare and practice", bullets: ["The same questions come up again and again", "Short, clear answers win", "Practice out loud"] },
            { title: "\"Tell me about yourself.\"", bullets: ["Talk about work, not your private life", "\"I have three years of experience in a kitchen.\"", "\"I am fast and careful.\""] },
            { title: "More common questions", bullets: ["\"Why do you want this job?\"", "\"What are your strengths?\"", "\"When can you start?\" \"Can you work weekends?\""] },
            { title: "Your turn to ask", bullets: ["\"Do you have any questions?\"", "\"What does a normal day look like?\"", "\"What are the hours?\""] }
          ],
          sources: [{ name: "USA Learns: free English courses for adults (Sacramento County Office of Education)", url: "https://www.usalearns.org/" }],
          tryIt: "Write your answers to \"Tell me about yourself\", \"Why do you want this job?\" and \"When can you start?\" for a job you want. Keep each to 2 to 4 sentences. Read them out loud three times, then ask a partner to interview you, or record yourself answering.",
          youCanNow: "answer common interview questions with short prepared answers, and ask a question at the end of an interview.",
          quickCheck: [
            { objective: "O1", q: "The interviewer says \"Tell me about yourself.\" What is the best answer?", options: ["\"I have two years of experience cleaning offices. I am careful and on time.\"", "\"I don't know.\"", "\"I have three children and I like soccer and my favorite food is rice.\"", "\"What is your name?\""], answer: 0, why: "It talks about work and strengths in short, clear sentences." },
            { objective: "O1", q: "The interviewer asks \"Do you have any questions?\" What is a good answer?", options: ["\"No.\"", "\"Where is the bathroom?\"", "\"What does a normal day look like?\"", "\"Goodbye.\""], answer: 2, why: "A question about the job shows you are interested." }
          ]
        },
        {
          title: "Safety words, signs and warnings",
          objectives: ["O2"],
          minutes: 5,
          goal: "Say what common safety signs and warnings mean and what to do.",
          text: [
            "Safety words are the most important English at work. Learn them first. Signs: \"Danger\" means a serious hazard that can kill or badly hurt you. \"Caution\" or \"Warning\" means be careful. \"Exit\" is the way out. \"Authorized personnel only\" means only workers with permission can go in. \"Wet floor\" means it is slippery.",
            "Spoken warnings are short and loud: \"Watch out!\" \"Stop!\" \"Look out!\" \"Heads up!\" (something may fall or come toward you). When you hear one, stop, look and move away from the danger.",
            "Protective equipment words: \"Wear your gloves.\" \"Put on your safety glasses.\" \"Hard hat\" (a strong helmet). \"Safety vest\" (a bright vest so drivers see you). \"Ear plugs\". Your employer trains you on the equipment for your job. If you do not understand the training, ask.",
            "Example conversation. Supervisor: \"Heads up! Forklift coming.\" Worker: \"Okay!\" (steps back). Supervisor: \"Always wear your vest in this area.\" Worker: \"Yes. My vest, always in this area.\""
          ],
          words: [["\"Hazard\"", "something that can hurt you, like a wet floor or a moving machine."], ["\"Danger\"", "a sign word for a serious hazard that can kill or badly hurt you."], ["\"Caution\"", "a sign word that means be careful."], ["\"Protective equipment\"", "gear that keeps you safe, like gloves, safety glasses or a hard hat."]],
          slides: [
            { title: "Sign words", bullets: ["\"Danger\": serious hazard", "\"Caution\" / \"Warning\": be careful", "\"Exit\": the way out", "\"Authorized personnel only\": permission needed"] },
            { title: "Spoken warnings", bullets: ["\"Watch out!\" \"Stop!\" \"Look out!\"", "\"Heads up!\": something is coming", "Stop, look, move away"] },
            { title: "Protective equipment", bullets: ["\"Wear your gloves.\"", "\"Put on your safety glasses.\"", "\"Hard hat\" \"Safety vest\" \"Ear plugs\""] }
          ],
          sources: [{ name: "OSHA: Workers' rights (US Department of Labor)", url: "https://www.osha.gov/workers" }],
          tryIt: "Make a safety word card for the job you want: write five safety words or signs you will see there and what each means. Say each one out loud. Then ask a partner to call out warnings (\"Watch out!\" \"Heads up!\") while you show what you would do.",
          youCanNow: "say what common safety signs, warnings and protective equipment words mean, and what to do when you hear a warning.",
          quickCheck: [
            { objective: "O2", q: "A coworker shouts \"Heads up!\" What do you do?", options: ["Look down at your phone", "Stop, look and move away from what is coming", "Keep working", "Shout \"Heads up\" back and stay there"], answer: 1, why: "\"Heads up!\" means something may fall or come toward you." },
            { objective: "O2", q: "A door has a sign: \"Authorized personnel only\". What does it mean?", options: ["Anyone can go in", "It is the exit", "The floor is wet", "Only workers with permission can go in"], answer: 3, why: "\"Authorized personnel only\" means you need permission to go in." }
          ]
        },
        {
          title: "Reporting a problem or an injury",
          objectives: ["O2"],
          minutes: 5,
          goal: "Report a hazard or an injury to your supervisor right away.",
          text: [
            "If you see something unsafe, tell your supervisor right away: \"Excuse me, there is a problem. There is oil on the floor in aisle 4.\" \"This machine is making a strange noise.\" \"The ladder is broken.\"",
            "If you get hurt, even a little, tell your supervisor the same day: \"I hurt my hand. I cut it on a box.\" \"I hurt my back when I lifted that.\" Say where and when: \"It happened at 10 o'clock, at the loading dock.\" In an emergency, call 911.",
            "In the United States, OSHA (the federal agency for work safety) says workers have rights, including safety training in a language they understand, reporting a work injury, and asking for an inspection of an unsafe workplace. The law says your employer cannot punish you for using these rights. Check osha.gov/workers for the details.",
            "Example conversation. Worker: \"Excuse me, I need to report something. I slipped and hurt my knee.\" Supervisor: \"When did it happen?\" Worker: \"About ten minutes ago, near the freezer.\" Supervisor: \"Okay, let's fill out a report.\""
          ],
          steps: ["Say \"Excuse me, I need to report something.\"", "Say what is wrong: the hazard or the injury.", "Say where and when it happened.", "Report an injury the same day, even a small one.", "In an emergency, call 911."],
          words: [["\"Report\"", "tell the right person about a problem."], ["\"Injury\"", "harm to your body, like a cut, burn or hurt back."], ["\"Supervisor\"", "the person in charge of your work."], ["OSHA", "the Occupational Safety and Health Administration, the US federal agency for workplace safety."]],
          slides: [
            { title: "Report a hazard", bullets: ["\"Excuse me, there is a problem.\"", "\"There is oil on the floor in aisle 4.\"", "\"The ladder is broken.\""] },
            { title: "Report an injury", bullets: ["\"I hurt my hand. I cut it on a box.\"", "Say where and when", "Same day, even if it is small"] },
            { title: "Your rights (OSHA)", bullets: ["Safety training in a language you understand", "Report an injury; ask for an inspection", "Your employer cannot punish you for this", "Details: osha.gov/workers"] }
          ],
          sources: [{ name: "OSHA: Workers' rights (US Department of Labor)", url: "https://www.osha.gov/workers" }],
          tryIt: "Practice only: write two short reports, one about a hazard (for example a wet floor) and one about a small made-up injury. Each one says what, where and when. Say them out loud as if you are talking to your supervisor.",
          youCanNow: "report a hazard or an injury to your supervisor, saying what, where and when, and name your basic safety rights.",
          quickCheck: [
            { objective: "O2", q: "You see a broken ladder at work. What do you say to your supervisor?", options: ["Nothing; someone else will see it", "\"Excuse me, the ladder in the back room is broken.\"", "\"Watch out!\" and go home", "\"Can I have a day off?\""], answer: 1, why: "Telling your supervisor what and where lets them fix the hazard before someone is hurt." },
            { objective: "O2", q: "You cut your finger a little at work. When do you report it?", options: ["Next month", "Only if it gets worse", "Never", "The same day"], answer: 3, why: "Report every work injury the same day, even a small one." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting the job and staying safe",
        questions: [
          { objective: "O1", q: "The interviewer asks \"When can you start?\" What is a clear answer?", options: ["\"I can start next Monday.\"", "\"Maybe.\"", "\"I like this company.\"", "\"Where is the exit?\""], answer: 0, why: "It gives a clear day." },
          { objective: "O1", q: "You did not understand the interview question. What do you say?", options: ["\"Yes.\"", "Nothing", "\"Sorry, can you repeat the question, please?\"", "\"Goodbye.\""], answer: 2, why: "Asking them to repeat is better than guessing the answer." },
          { objective: "O2", q: "A sign says \"Danger\". What does it mean?", options: ["The bathroom", "A place to rest", "A serious hazard that can kill or badly hurt you", "A break room"], answer: 2, why: "\"Danger\" marks the most serious hazards." },
          { objective: "O2", q: "Which item is protective equipment?", options: ["Safety glasses", "A schedule", "A paycheck", "A receipt"], answer: 0, why: "Safety glasses protect your eyes." },
          { objective: "O2", q: "You hurt your back lifting a box. What do you say?", options: ["\"Watch out!\"", "\"When can I start?\"", "\"Do you have any questions?\"", "\"I need to report something. I hurt my back lifting a box at 2 o'clock.\""], answer: 3, why: "It says what happened, how and when." }
        ]
      }
    },
    {
      name: "Chapter 2: Every day at work",
      lessons: [
        {
          title: "Asking for help and checking instructions",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ask for help and repeat an instruction back before you start.",
          text: [
            "At work, a mistake can cost time, money or safety. It is always better to ask than to guess. Good workers ask questions.",
            "To ask for help: \"Excuse me, can you help me?\" \"Can you show me how to do this?\" \"Where do I put these boxes?\" \"What should I do next?\" If you did not understand: \"Sorry, can you explain that again, more slowly?\"",
            "Before you start, repeat the instruction back: \"So, first I clean the tables, then I fill the napkins?\" or \"Okay, I put the blue boxes on shelf 3. Is that right?\" Your supervisor will say \"Yes\" or fix it.",
            "Example conversation. Supervisor: \"Please restock aisle 7 and then break down the empty boxes.\" Worker: \"Okay. So, first I restock aisle 7, then I break down the boxes. Where do the boxes go?\" Supervisor: \"In the recycling by the back door.\" Worker: \"Got it. Thank you.\""
          ],
          steps: ["Listen to the whole instruction.", "Ask about anything you did not understand.", "Repeat the steps back: \"So, first ..., then ...?\"", "Wait for \"Yes\" before you start.", "Ask again if you get stuck: \"What should I do next?\""],
          words: [["\"Instruction\"", "words that tell you how to do a task."], ["\"Show me\"", "do it in front of me so I can see how."], ["\"Got it\"", "a short way to say \"I understand\"."]],
          slides: [
            { title: "Ask, don't guess", bullets: ["Mistakes cost time, money and safety", "Good workers ask questions"] },
            { title: "Asking for help", bullets: ["\"Excuse me, can you help me?\"", "\"Can you show me how to do this?\"", "\"What should I do next?\""] },
            { title: "Repeat it back", bullets: ["\"So, first I clean the tables, then I fill the napkins?\"", "\"Is that right?\"", "Wait for \"Yes\" before you start"] }
          ],
          tryIt: "Ask a partner or family member to give you a three-step instruction in English (for example how to make a sandwich or fold a shirt). Repeat it back with \"So, first ..., then ...?\" before you do it. Then switch roles.",
          youCanNow: "ask a supervisor or coworker for help, and repeat an instruction back to check it before you start.",
          quickCheck: [
            { objective: "O3", q: "Your supervisor gives a long instruction. What do you do before you start?", options: ["Start and hope it is right", "Repeat the steps back to check", "Ask a customer", "Go on break"], answer: 1, why: "Repeating the steps back catches mistakes before you start." },
            { objective: "O3", q: "You do not know how to use the new machine. What do you say?", options: ["\"Can you show me how to do this?\"", "\"Got it.\"", "\"Heads up!\"", "Nothing; you try it anyway"], answer: 0, why: "\"Can you show me?\" asks for help in a safe, clear way." }
          ]
        },
        {
          title: "Schedules: shifts, being late, sick days and time off",
          objectives: ["O4"],
          minutes: 6,
          goal: "Read your shift times and tell your supervisor you will be late, are sick or need time off.",
          text: [
            "A shift is the time you work, for example \"Monday, 7 a.m. to 3:30 p.m.\" \"a.m.\" is morning (before 12 noon) and \"p.m.\" is afternoon and night. Your schedule may also say \"OFF\" for days you do not work.",
            "If you will be late, tell your supervisor before your shift: \"Hi, this is Carlos. I'm sorry, my bus is late. I will be about 20 minutes late.\" If you are sick: \"Hi, this is Carlos. I'm sick today and I can't come in. I'm sorry.\" Every employer has its own rules for calling in, so check your handbook or ask your supervisor how and when to tell them.",
            "To ask for time off, ask early, in person or in writing: \"Can I have Friday the 14th off? I have an appointment.\" To trade a shift with a coworker: \"Can I switch shifts with Maria on Saturday?\"",
            "Example text message: \"Hi Ms. Johnson, this is Carlos from the morning shift. I am sick today and cannot come in. I'm sorry. I will let you know about tomorrow.\""
          ],
          steps: ["Read your schedule: the days, start times and end times.", "Late or sick: tell your supervisor before your shift.", "Say who you are, what is wrong and when you will come.", "Ask for time off early, and say the date.", "Follow your employer's rules for calling in."],
          words: [["\"Shift\"", "the hours you work on one day."], ["\"Call in sick\"", "tell your employer you are sick and cannot work."], ["\"Time off\"", "days you ask not to work."], ["\"Switch shifts\"", "trade work times with a coworker."]],
          slides: [
            { title: "Read your schedule", bullets: ["\"Monday, 7 a.m. to 3:30 p.m.\"", "\"a.m.\" = morning, \"p.m.\" = afternoon and night", "\"OFF\" = you do not work"] },
            { title: "Late or sick", bullets: ["Tell them before your shift", "\"I will be about 20 minutes late.\"", "\"I'm sick today and I can't come in.\""] },
            { title: "Time off and trades", bullets: ["\"Can I have Friday the 14th off?\"", "\"Can I switch shifts with Maria on Saturday?\"", "Ask early"] },
            { title: "Your employer's rules", bullets: ["Each employer has its own call-in rules", "Check your handbook or ask your supervisor"] }
          ],
          tryIt: "Write two messages to a supervisor with a made-up name: one to say you will be 15 minutes late, and one to call in sick. Each says who you are, what is wrong and when you will come. Read them out loud as a phone call.",
          youCanNow: "read your shift times, and tell your supervisor clearly that you will be late, are sick or need time off.",
          quickCheck: [
            { objective: "O4", q: "Your schedule says \"Tuesday 2 p.m. - 10 p.m.\" When do you start work?", options: ["2 in the morning", "10 in the morning", "2 in the afternoon", "10 at night"], answer: 2, why: "\"p.m.\" means afternoon or night, so 2 p.m. is 2 in the afternoon." },
            { objective: "O4", q: "Your bus is late and you will miss the start of your shift. What do you do?", options: ["Tell your supervisor before your shift starts", "Say nothing and come late", "Go home", "Tell a customer"], answer: 0, why: "Telling your supervisor early is respectful and helps them plan." }
          ]
        },
        {
          title: "Talking to customers",
          objectives: ["O5"],
          minutes: 5,
          goal: "Greet a customer, offer help and get another worker when you cannot help.",
          text: [
            "Customers like workers who are friendly and clear. Greet them: \"Hi, welcome!\" or \"Good morning.\" Offer help: \"Can I help you find something?\" \"What can I get for you?\"",
            "If you know the answer, keep it short: \"Yes, it's in aisle 9.\" \"It comes with fries.\" If you do not know, never guess. Say: \"Let me check for you.\" or \"One moment, please. I'll get my manager.\"",
            "If the customer talks too fast: \"Sorry, could you say that again, please?\" If they are upset, stay calm and polite: \"I'm sorry about that. Let me get someone who can help.\" End with: \"Have a nice day!\"",
            "Example conversation. Worker: \"Hi, welcome! Can I help you find something?\" Customer: \"Do you have this jacket in a large?\" Worker: \"Let me check for you. One moment, please.\" (checks) \"Yes, here you go.\" Customer: \"Thanks!\" Worker: \"You're welcome. Have a nice day!\""
          ],
          steps: ["Greet: \"Hi, welcome!\"", "Offer help: \"Can I help you find something?\"", "Answer short if you know.", "If you do not know: \"Let me check for you.\" or get a manager.", "End: \"Have a nice day!\""],
          words: [["\"Customer\"", "a person who buys or uses what a business sells."], ["\"Manager\"", "a person who is in charge of a store or team."], ["\"Let me check\"", "a polite way to say you will find the answer."]],
          slides: [
            { title: "Greet and offer help", bullets: ["\"Hi, welcome!\"", "\"Can I help you find something?\"", "\"What can I get for you?\""] },
            { title: "Don't know? Don't guess", bullets: ["\"Let me check for you.\"", "\"One moment, please. I'll get my manager.\""] },
            { title: "Hard moments", bullets: ["\"Sorry, could you say that again, please?\"", "Upset customer: \"I'm sorry about that.\"", "\"Let me get someone who can help.\""] },
            { title: "End well", bullets: ["\"You're welcome.\"", "\"Have a nice day!\""] }
          ],
          tryIt: "Final task: write your Workplace English script for the job you want: your answer to \"Tell me about yourself\", two more interview answers, three safety words with their meanings, a call-in-sick or late message, and two phrases for a customer or for asking a coworker for help. Practice it out loud or in a role play, and record yourself if you can.",
          youCanNow: "greet a customer, offer help, and get the right person when you do not know the answer.",
          quickCheck: [
            { objective: "O5", q: "A customer asks a question and you do not know the answer. What do you say?", options: ["Guess an answer", "\"I don't know\" and walk away", "\"That's not my job.\"", "\"Let me check for you.\""], answer: 3, why: "Checking or getting a manager is polite and gives the customer the right answer." },
            { objective: "O5", q: "A customer walks up to you. What is a good first thing to say?", options: ["\"What?\"", "\"Hi, welcome! Can I help you find something?\"", "\"Heads up!\"", "\"I'm sick today.\""], answer: 1, why: "A greeting and an offer of help start the conversation well." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Every day at work",
        questions: [
          { objective: "O3", q: "Your supervisor says \"Put the red boxes on shelf 2.\" How do you check?", options: ["\"Got it\" and put them on shelf 3", "\"So, the red boxes go on shelf 2?\"", "Say nothing", "\"Have a nice day!\""], answer: 1, why: "Repeating the instruction back checks you heard it right." },
          { objective: "O3", q: "You finished your task and do not know what to do. What do you ask?", options: ["\"What should I do next?\"", "\"Can I go home?\"", "\"Where is the exit?\"", "\"Watch out!\""], answer: 0, why: "Asking what to do next shows you are ready to work." },
          { objective: "O4", q: "What is a \"shift\"?", options: ["A kind of uniform", "A safety sign", "The hours you work on one day", "A day off"], answer: 2, why: "A shift is the time you work." },
          { objective: "O4", q: "You need next Friday off for an appointment. What do you say, and when?", options: ["Nothing; just do not come", "Tell a customer on Friday", "Text your supervisor during your Friday shift", "Ask your supervisor early: \"Can I have Friday the 14th off?\""], answer: 3, why: "Asking early, with the date, gives your supervisor time to plan." },
          { objective: "O5", q: "A customer is upset. What is the best thing to say?", options: ["\"Not my problem.\"", "\"Calm down!\"", "\"I'm sorry about that. Let me get someone who can help.\"", "\"Goodbye.\""], answer: 2, why: "Staying calm and getting help is polite and solves the problem." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: English for the Workplace (ESL)",
    questions: [
      { objective: "O1", q: "In an interview, \"Tell me about yourself\" means:", options: ["Tell them about your work and strengths", "Tell them your whole life story", "Ask them about themselves", "Say your address"], answer: 0, why: "They want to hear about your work, skills and goals in a few sentences." },
      { objective: "O1", q: "Which is a good answer to \"What are your strengths?\"", options: ["\"Nothing.\"", "\"I don't know.\"", "\"I'm sick today.\"", "\"I am always on time and I learn fast.\""], answer: 3, why: "It names two things you do well." },
      { objective: "O1", q: "You worked as a builder in your home country. Should you say it in the interview?", options: ["No, it does not count", "Yes: \"In Mexico I built houses for five years.\"", "Only if they ask in Spanish", "Only on paper"], answer: 1, why: "Work experience from your home country counts and shows your skills." },
      { objective: "O2", q: "What does a \"Caution\" sign mean?", options: ["Be careful", "The way out", "The break room", "Free food"], answer: 0, why: "\"Caution\" means be careful." },
      { objective: "O2", q: "Someone shouts \"Watch out!\" What do you do?", options: ["Keep walking", "Shout back", "Stop, look and move away from the danger", "Close your eyes"], answer: 2, why: "\"Watch out!\" warns you of danger near you." },
      { objective: "O2", q: "What is a hazard?", options: ["A kind of tool", "Something that can hurt you", "A customer", "A schedule"], answer: 1, why: "A hazard is something that can hurt you, like a wet floor." },
      { objective: "O2", q: "You see oil on the floor in aisle 4. What do you say to your supervisor?", options: ["\"Have a nice day!\"", "\"Can I switch shifts?\"", "\"Got it.\"", "\"Excuse me, there is oil on the floor in aisle 4.\""], answer: 3, why: "Say what the hazard is and where it is." },
      { objective: "O2", q: "Which of these is a worker right on OSHA's list?", options: ["Free lunch every day", "Safety training in a language you understand", "Choosing your own pay", "No schedule"], answer: 1, why: "OSHA lists safety training in a language you understand as a worker right." },
      { objective: "O2", q: "When should you report a small injury at work?", options: ["The same day", "Only if it gets worse", "At the end of the year", "Never"], answer: 0, why: "Report every injury the same day, even small ones." },
      { objective: "O3", q: "You do not understand an instruction. What is best?", options: ["Guess and start", "Ask a customer", "Ask: \"Sorry, can you explain that again, more slowly?\"", "Go home"], answer: 2, why: "Asking is safer and faster than guessing." },
      { objective: "O3", q: "Which sentence repeats an instruction back?", options: ["\"Hi, welcome!\"", "\"Heads up!\"", "\"I'm sick today.\"", "\"So, first I sweep, then I mop. Is that right?\""], answer: 3, why: "It says the steps back and asks if they are right." },
      { objective: "O3", q: "What does \"Got it\" mean?", options: ["I understand", "I have a cold", "I lost it", "Give it to me"], answer: 0, why: "\"Got it\" is a short way to say \"I understand\"." },
      { objective: "O4", q: "What does \"a.m.\" mean on a schedule?", options: ["Afternoon", "Night", "Morning, before 12 noon", "A day off"], answer: 2, why: "\"a.m.\" is the morning." },
      { objective: "O4", q: "You are sick. What is a good message to your supervisor?", options: ["\"Not coming.\"", "\"Hi, this is Carlos. I'm sick today and I can't come in. I'm sorry.\"", "Nothing", "\"Watch out!\""], answer: 1, why: "It says who you are, what is wrong, and that you will not come." },
      { objective: "O4", q: "How do you find your workplace's rules for calling in?", options: ["Ask a customer", "Guess", "Use another company's rules", "Check your handbook or ask your supervisor"], answer: 3, why: "Every employer has its own call-in rules." },
      { objective: "O5", q: "What does \"Let me check for you\" mean?", options: ["I will find the answer", "Go away", "I am the manager", "It is free"], answer: 0, why: "It politely says you will find the answer." },
      { objective: "O5", q: "A customer asks for something you do not know about. What should you NOT do?", options: ["Get your manager", "Say \"Let me check for you\"", "Guess an answer", "Ask a coworker"], answer: 2, why: "Guessing can give the customer wrong information." },
      { objective: "O5", q: "Which is a polite way to end with a customer?", options: ["\"What?\"", "\"Have a nice day!\"", "\"Heads up!\"", "\"I'm late.\""], answer: 1, why: "\"Have a nice day!\" is a friendly goodbye." },
      { objective: "O1", q: "At the end of an interview, which question is good to ask?", options: ["\"What does a normal day look like?\"", "\"Can I leave now?\"", "\"Watch out!\"", "\"Where is the bathroom?\""], answer: 0, why: "A question about the job shows you are interested." },
      { objective: "O3", q: "Your new task has a step you do not know. What do you say?", options: ["\"Have a nice day!\"", "\"I'm sick today.\"", "\"Let me check for you.\"", "\"Can you show me how to do this step?\""], answer: 3, why: "Asking to be shown is the safe way to learn a new step." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 6, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, practice that part and try again.",
    criteria: [
      { name: "Interview answers", objective: "O1", notYet: "Answers are missing, very long, or about private life instead of work.", meets: "\"Tell me about yourself\" and two more answers, each 2 to 4 clear sentences with one real example.", exceeds: "Says them out loud without reading and adds a question to ask at the end." },
      { name: "Safety words", objective: "O2", notYet: "Fewer than three words, or the meanings are wrong.", meets: "Three safety words or signs for the job, each with the right meaning.", exceeds: "Also shows how to report a hazard or injury: what, where and when." },
      { name: "Asking for help", objective: "O3", notYet: "No phrase for asking for help, or no way to check an instruction.", meets: "One phrase to ask for help and one sentence that repeats an instruction back.", exceeds: "Uses them correctly in a role play with a partner." },
      { name: "Late or sick message", objective: "O4", notYet: "Missing who you are, what is wrong or when you will come.", meets: "A clear, polite message with name, reason and timing.", exceeds: "Also notes how their employer wants call-ins (handbook or supervisor)." },
      { name: "Customer phrases", objective: "O5", notYet: "No customer phrases, or the phrases are not polite.", meets: "A greeting with an offer of help, and a phrase for when you do not know.", exceeds: "Handles an upset customer politely in a role play." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who have a job interview in English within 30 days, and how many get an offer (follow-up survey)",
      "Learners who report asking a supervisor for help or reporting a hazard in English within 30 days",
      "Employer partners report fewer mistakes and safety incidents caused by misunderstood instructions"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer to watch the lessons, or a printed copy of the lesson text",
      "Paper and pen for scripts and safety word cards",
      "A partner for role plays, or a phone to record yourself",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Do every example conversation as a role play: read it, swap roles, then change the details (a different job, time or problem).",
      "Translated versions keep the English phrases in English; explain them in the learners' language but practice them in English.",
      "Adapt the safety lesson to learners' target jobs; bring real signs or photos from local workplaces if you can.",
      "Call-in rules, time-off rules and safety rules differ by employer: remind learners to follow their own employer's handbook and training. This course teaches the language, not the employer's rules.",
      "Use made-up names and details in practice reports and messages. Pair this course with job search help (see \"Resumes, LinkedIn and Job Interviews\")."
    ]
  }
};
