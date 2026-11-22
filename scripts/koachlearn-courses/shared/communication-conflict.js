"use strict";

// Koach Learn course: shared -> "Communication and Conflict Resolution" (new life and people skills course the owner asked for on 28 October 2026). Listed for Athletes, Entrepreneurs, Re-Entry, Small Business,
// Non Profits, Youth, Veterans (military), Workforce Development, Undeserved Community and Leadership Development, so it uses mixed, everyday examples: teammates, coworkers, family, customers, volunteers.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "communication-conflict",
  category: "Athletes",
  name: "Communication and Conflict Resolution",
  skills: "Active listening, Using \"I\" statements, Starting a hard conversation, Calming a heated moment, Working out a fair agreement",
  outcome: "hold a calm, honest conversation about a real disagreement: listen until the other person feels heard, say what you need without blaming, cool things down if they heat up, and agree on a fair next step you both write down.",
  about: [
    "Disagreements happen everywhere: on a team, at work, at home, with a business partner, a customer, a landlord or a volunteer. The people who handle them well are not the ones who never argue. They are the ones who know how to listen, speak up and find a way forward.",
    "This course is for anyone: athletes and coaches, workers and managers, business owners, nonprofit staff and volunteers, veterans, young people, and people rebuilding their lives after prison. The examples come from locker rooms, job sites, shops, offices and kitchen tables.",
    "You will practise five skills: active listening, \"I\" statements, starting a hard conversation, calming a heated moment and working out a fair agreement. Each lesson takes about five minutes and ends with a short practice. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Pick a real disagreement in your life (small is fine). Plan the conversation on paper, then hold it, or role-play it with a friend: reflect back what the other person says, use one \"I\" statement, ask what they need, and finish with a written agreement that says who does what by when.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Anyone who faces disagreements: athletes and coaches, workers and managers, business owners, nonprofit staff and volunteers, veterans, young people and people rebuilding their lives after prison.",
    startingPoint: "Talk with people every day and have handled some disagreements, but often avoid hard talks, blame, get heated, or leave without a clear plan.",
    gap: "Unresolved conflict hurts teams, jobs, businesses and families. Learners need practical skills to listen, speak up without blaming, cool things down and agree on a fair next step, so disagreements end in solutions instead of damage.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Practice uses real but small disagreements, or role-play with a friend",
      "Safety: if a conflict involves danger, threats or harassment, learners leave and get help or go to a manager or HR",
      "Privacy: learners do not have to share the details of their own conflicts",
      "Time: about five-minute lessons with short practices"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "In a real conversation", action: "reflect back what the other person said and ask an open question", standard: "until they agree you understood them" },
    { id: "O2", condition: "Given a blaming sentence", action: "rewrite it as an \"I\" statement with a clear request", standard: "using the pattern I feel, when, because, could we" },
    { id: "O3", condition: "For a conversation you have been putting off", action: "plan the goal, time, place and opening line of a hard conversation", standard: "with an opening line you can say calmly out loud" },
    { id: "O4", condition: "When a talk gets heated", action: "calm yourself and the other person with slow breathing, calming words or a timed break", standard: "without raising your voice or saying \"calm down\"" },
    { id: "O5", condition: "Given a disagreement", action: "list each side's position and interest and three options that could meet both", standard: "before judging any option" },
    { id: "O6", condition: "At the end of a conversation", action: "write an agreement that says who does what by when and how you will check in", standard: "with every part written down and shared" }
  ],
  chapters: [
    {
      name: "Chapter 1: Listening and speaking clearly",
      lessons: [
        {
          objectives: ["O1"],
          title: "Active listening: making people feel heard",
          minutes: 5,
          goal: "Listen to someone and reflect back what they said so they feel understood.",
          text: [
            "Most arguments get worse because each person is busy planning what to say next. Active listening means you put that aside and really try to understand the other person first.",
            "There are four parts. Give full attention: put the phone down and look at the person. Let them finish without cutting in. Reflect back: say in your own words what you heard, such as \"So you felt left out when the schedule changed without warning.\" Then ask an open question, one that cannot be answered with yes or no, such as \"What would have helped?\"",
            "Reflecting back is not agreeing. You are only showing that you understood. When people feel heard, they usually calm down and start listening to you too."
          ],
          steps: ["Put your phone away and face the person.", "Let them finish. Do not interrupt or fix it yet.", "Reflect back: \"So what I am hearing is...\"", "Ask an open question: \"What would help?\" or \"Tell me more about...\"", "Check: \"Did I get that right?\""],
          words: [["Active listening", "listening to understand, then showing the person you understood."], ["Reflect back", "repeating the main point in your own words."], ["Open question", "a question that needs more than a yes or no answer."]],
          slides: [
            { title: "Why listening comes first", bullets: ["Most people plan their reply instead of listening", "People who feel heard calm down", "Then they are ready to hear you"] },
            { title: "Four parts of active listening", bullets: ["Full attention: phone down, face them", "Let them finish", "Reflect back in your own words", "Ask an open question"] },
            { title: "What it sounds like", bullets: ["\"So you felt left out when the schedule changed.\"", "\"What would have helped?\"", "\"Did I get that right?\""] },
            { title: "Remember", bullets: ["Reflecting back is not agreeing", "It shows you understood"] }
          ],
          tryIt: "In your next real conversation today, with a teammate, coworker, friend or family member, reflect back one thing they said and ask one open question. Notice how they respond.",
          youCanNow: "listen with full attention, reflect back what you heard and ask an open question.",
          quickCheck: [
            { objective: "O1", q: "What is an open question?", options: ["A question that can be answered yes or no", "A question that invites the person to explain in their own words", "A question you ask in a public place", "A question you already know the answer to"], answer: 1, why: "Open questions start with words like what or how and invite a full answer." },
            { objective: "O1", q: "A teammate says, \"Coach never plays me in the second half.\" What would you say?", options: ["\"That's not true.\"", "\"You should train harder.\"", "\"So you feel you aren't getting a fair chance late in games?\"", "\"I don't want to talk about it.\""], answer: 2, why: "Reflecting back shows you heard them before you respond." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Saying what you need with \"I\" statements",
          minutes: 5,
          goal: "Turn a blaming sentence into a clear \"I\" statement.",
          text: [
            "\"You always...\" and \"You never...\" make people defend themselves, and then nobody listens. An \"I\" statement talks about what happened and how it affected you, without attacking the other person.",
            "A simple pattern: \"I feel [feeling] when [what happened] because [why it matters]. Could we [request]?\" For example, instead of \"You never pass me the ball,\" try \"I feel frustrated when I am open and the ball does not come to me, because I want to help us score. Could we look at the film together?\"",
            "Keep it to one issue, describe what happened as a camera would see it, and end with a request the person can actually do. Your tone and face matter as much as the words, so keep your voice calm."
          ],
          steps: ["Name one thing that happened, as a camera would see it.", "Name your feeling: frustrated, worried, hurt, stressed.", "Say why it matters to you.", "Ask for one clear, doable change."],
          words: [["\"I\" statement", "a sentence that starts with your feeling and need, not the other person's fault."], ["Request", "asking for one specific thing the other person can do."]],
          slides: [
            { title: "Blame shuts people down", bullets: ["\"You always...\" and \"You never...\"", "People defend instead of listen"] },
            { title: "The \"I\" statement pattern", bullets: ["I feel [feeling]", "when [what happened]", "because [why it matters]", "Could we [request]?"] },
            { title: "Before and after", bullets: ["Before: \"You never clean up.\"", "After: \"I feel stressed when dishes pile up, because I cook early.", "Could we take turns each night?\""] },
            { title: "Tips", bullets: ["One issue at a time", "Describe it as a camera would see it", "Calm voice, relaxed face"] }
          ],
          tryIt: "Write down three blaming sentences you have said or heard, for example at work or at home. Rewrite each one as an \"I\" statement with a clear request. Say the best one out loud.",
          youCanNow: "turn a blaming sentence into an \"I\" statement with a feeling, a reason and a clear request.",
          quickCheck: [
            { objective: "O2", q: "What is the main difference between an \"I\" statement and a \"you\" statement?", options: ["An \"I\" statement is always longer", "An \"I\" statement describes your feeling and need instead of blaming", "A \"you\" statement is more polite", "There is no difference"], answer: 1, why: "\"I\" statements share your feeling and need, so the other person does not feel attacked." },
            { objective: "O2", q: "Your roommate leaves dishes in the sink. Which would you say?", options: ["\"I feel frustrated when dishes stay overnight, because I cook early. Could we wash them before bed?\"", "\"You are so lazy.\"", "\"You always leave a mess.\"", "\"Whatever, I'll do it all myself.\""], answer: 0, why: "This follows the I feel, when, because, could we pattern with a clear request." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Starting a hard conversation",
          minutes: 5,
          goal: "Plan and open a hard conversation at the right time and place.",
          text: [
            "Many people avoid hard conversations until they explode. A little planning makes them much easier. First, get clear on what you want: not to win, but to fix the problem and keep the relationship working.",
            "Pick a good time and place: private, not rushed, and not when either of you is angry, tired or hungry. Ask first: \"Do you have ten minutes today? I would like to talk about the delivery schedule.\" A text or email can set up the talk, but have the talk itself in person or on a call when you can, because tone gets lost in writing.",
            "Open with a short, calm first line that names the topic and your goal: \"I want us to work well together, and something has been bothering me. Can I share it and then hear your side?\" Then use your \"I\" statement, and switch to listening."
          ],
          steps: ["Write down your goal: what would a good result look like?", "Pick a private time when you are both calm.", "Ask if now is a good time.", "Open with the topic and your goal in one or two sentences.", "Use your \"I\" statement, then listen."],
          words: [["Hard conversation", "a talk about something difficult, where feelings may run high."], ["Opening line", "the first sentence or two that start the talk calmly."]],
          slides: [
            { title: "Know your goal", bullets: ["Not to win", "To fix the problem", "And keep the relationship working"] },
            { title: "Pick the moment", bullets: ["Private and not rushed", "Not when angry, tired or hungry", "In person or on a call when you can"] },
            { title: "A calm opening", bullets: ["\"I want us to work well together.\"", "\"Something has been bothering me.\"", "\"Can I share it, then hear your side?\""] },
            { title: "Then", bullets: ["Use your \"I\" statement", "Switch to listening"] }
          ],
          tryIt: "Think of a conversation you have been putting off. Write your goal in one sentence, choose a time and place, and write your opening line. Read the opening line out loud until it sounds calm and natural.",
          youCanNow: "plan a hard conversation, pick a good moment and open it calmly.",
          quickCheck: [
            { objective: "O3", q: "What should you decide before starting a hard conversation?", options: ["Who will win", "Your goal, a good time and place, and your opening line", "What to post online about it", "How loud to speak"], answer: 1, why: "Planning the goal, time, place and opening helps the talk start calmly." },
            { objective: "O3", q: "You need to talk to your manager about your hours, but they are rushing to a meeting. What would you do?", options: ["Bring it up right now in the hallway", "Send an angry email", "Quit without saying anything", "Ask for ten minutes at a calmer time today"], answer: 3, why: "A private, calm time gives the talk a better chance." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Listening and speaking clearly",
        questions: [
          { objective: "O1", q: "Your coworker is upset about a schedule change. What is the best active-listening response?", options: ["\"That's not my fault.\"", "\"So you felt left out because nobody warned you. Did I get that right?\"", "\"Let me tell you what happened to me.\"", "Look at your phone while they talk"], answer: 1, why: "Reflecting back and checking shows you understood." },
          { objective: "O1", q: "Which is an open question?", options: ["\"Are you mad?\"", "\"Did you finish?\"", "\"Is that all?\"", "\"What would help you most right now?\""], answer: 3, why: "It cannot be answered with just yes or no." },
          { objective: "O2", q: "Which is a good \"I\" statement?", options: ["\"I feel worried when rent is late, because I could lose the lease. Could we set a reminder?\"", "\"You are always late with rent.\"", "\"I think you are lazy.\"", "\"You never care about anything.\""], answer: 0, why: "It names a feeling, what happened, why it matters and a clear request." },
          { objective: "O3", q: "When is the best time to start a hard conversation?", options: ["Right after a loss, while everyone is angry", "In front of the whole team", "A private time when you are both calm", "Never; wait until it blows over"], answer: 2, why: "Private and calm gives the talk the best chance." },
          { objective: "O1", q: "Reflecting back what someone said means:", options: ["You agree with them", "You show you understood what they said", "You repeat their words to mock them", "You change the subject"], answer: 1, why: "Reflecting is about understanding, not agreeing." }
        ]
      }
    },
    {
      name: "Chapter 2: Calming conflict and agreeing a way forward",
      lessons: [
        {
          objectives: ["O4"],
          title: "Calming a heated moment",
          minutes: 5,
          goal: "Cool down a heated moment, in yourself and in the other person.",
          text: [
            "When we get angry, the body gets ready to fight: the heart races and it is hard to think clearly. Nothing good gets decided in that state, so the first job is to calm down.",
            "Start with yourself: breathe slowly in for four counts and out for six, unclench your hands and lower your voice. Speak slower and softer than the other person. Name what you see without judging: \"I can see this matters a lot to you.\" Avoid \"Calm down!\", which usually does the opposite.",
            "If it is still too hot, take a break and set a time to come back: \"I want to sort this out. Let's take twenty minutes and talk at 3.\" If you ever feel unsafe, leave and get help. Your safety comes before any conversation."
          ],
          steps: ["Notice your own signs: fast heart, hot face, tight fists.", "Breathe: in for 4, out for 6, a few times.", "Lower and slow your voice.", "Name the feeling you see: \"I can see you are upset.\"", "If needed, take a break and set a time to come back.", "If you feel unsafe, leave and get help."],
          words: [["De-escalate", "to calm a situation down so it does not get worse."], ["Time-out", "a short agreed break to cool down, with a time to come back."]],
          slides: [
            { title: "Anger blocks clear thinking", bullets: ["The body gets ready to fight", "Nothing good gets decided hot", "First job: calm down"] },
            { title: "Calm yourself first", bullets: ["Breathe in for 4, out for 6", "Unclench your hands", "Lower and slow your voice"] },
            { title: "Calm the other person", bullets: ["Name what you see: \"I can see this matters to you.\"", "Avoid \"Calm down!\"", "Listen and reflect back"] },
            { title: "Still too hot?", bullets: ["Take a break: \"Let's talk at 3.\"", "Always come back at that time", "If you feel unsafe, leave and get help"] }
          ],
          tryIt: "Practise the 4-in, 6-out breath five times now. Then write two calming sentences you could use: one that names the other person's feeling, and one that asks for a break with a time to come back.",
          youCanNow: "calm yourself, help calm someone else and take a safe break when a moment gets too heated.",
          quickCheck: [
            { objective: "O4", q: "What is the 4-in, 6-out breath?", options: ["Breathing in for 4 counts and out for 6 to calm down", "Four deep breaths, then six fast ones", "Holding your breath for 10 seconds", "Breathing only through your mouth"], answer: 0, why: "A longer out-breath helps your body calm down." },
            { objective: "O4", q: "An argument with a customer is getting louder and you are getting angry. What would you do?", options: ["Raise your voice to be heard", "Tell them to calm down", "Slow your breathing, lower your voice and name their feeling", "Walk away without a word"], answer: 2, why: "Calming yourself first and naming their feeling cools the moment." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Finding what each person really needs",
          minutes: 5,
          goal: "Find the needs behind each side's position and list options that meet both.",
          text: [
            "In a conflict, people usually state a position: what they say they want. Behind it is an interest: the reason they want it. Two players both want the same jersey number (position). One wants it for luck; the other wants it because it was a late grandparent's number (interests). Knowing the interest opens up new answers.",
            "Ask \"why\" questions gently: \"What is most important to you about this?\" or \"What worries you about that plan?\" Then share your own interest the same way.",
            "Now list options together, without judging them yet. Aim for at least three. A shop owner and an employee who both want Saturdays off might find: alternate weekends, split shifts, or a paid weekend bonus to bring in extra help. The best option usually meets the most important need on each side."
          ],
          steps: ["Write down each side's position.", "Ask what matters most behind it, and write the interests.", "List at least three options together, without judging yet.", "Pick the option that meets the most important needs on both sides."],
          words: [["Position", "what someone says they want."], ["Interest", "the real need or reason behind the position."], ["Brainstorm", "listing many ideas quickly before judging any of them."]],
          slides: [
            { title: "Position vs interest", bullets: ["Position: what someone says they want", "Interest: why they want it", "Interests open up new answers"] },
            { title: "Ask about the why", bullets: ["\"What matters most to you about this?\"", "\"What worries you about that plan?\"", "Then share your own why"] },
            { title: "List options together", bullets: ["At least three ideas", "Do not judge them yet", "Example: alternate weekends, split shifts, a bonus"] },
            { title: "Choose", bullets: ["Pick the option that meets the biggest needs on both sides"] }
          ],
          tryIt: "Take the disagreement you planned in Lesson 3. Write down your position and interest, and your best guess at the other person's. Then list three options that could meet both interests.",
          youCanNow: "find the real needs behind a disagreement and list options that could work for both sides.",
          quickCheck: [
            { objective: "O5", q: "What is an interest in a disagreement?", options: ["The person's first demand", "The need or reason behind what a person asks for", "How interesting the argument is", "Money owed on a loan"], answer: 1, why: "An interest is the need under a position." },
            { objective: "O5", q: "You and a coworker both want Friday off. What would you do first?", options: ["Flip a coin right away", "Let the louder person win", "Go to the boss without talking", "Ask why each of you needs Friday and list a few options together"], answer: 3, why: "Finding each person's need opens options that can work for both." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Working out a fair agreement",
          minutes: 5,
          goal: "Turn a good conversation into a clear written agreement and follow up.",
          text: [
            "Many good talks fail because nobody says exactly what happens next. A clear agreement answers three questions: who does what, by when, and how you will check it is working.",
            "Fair means both people can live with it and it treats each side's main need with respect. Say it back out loud: \"So, I will cover Tuesday closes, you will cover Saturday mornings, starting next week, and we will check in on the 15th.\" Then write it down in a text, an email or a shared note so nobody remembers it differently later.",
            "Follow up on the date you set. If it is not working, go back to listening and options; that is normal, not failure. For serious problems, such as harassment, safety, money or legal issues, bring in a manager, HR, a coach, a mediator or another trusted person. You do not have to solve everything alone."
          ],
          steps: ["Say the agreement out loud: who, what, by when.", "Ask: \"Can we both live with this?\"", "Write it down and send a copy to the other person.", "Set a check-in date.", "Follow up. If it is not working, talk again."],
          words: [["Agreement", "what both people decide to do, said clearly."], ["Follow up", "checking back later to see if the agreement is working."], ["Mediator", "a neutral person who helps two sides talk and agree."]],
          slides: [
            { title: "A clear agreement says", bullets: ["Who does what", "By when", "How you will check it is working"] },
            { title: "Make it fair", bullets: ["Both people can live with it", "It respects each side's main need", "Ask: \"Can we both live with this?\""] },
            { title: "Write it down", bullets: ["Say it back out loud", "Send it by text, email or shared note", "Set a check-in date"] },
            { title: "Follow up and get help", bullets: ["Not working? Talk again", "Serious issues: manager, HR, coach or mediator"] }
          ],
          tryIt: "Final task: hold (or role-play with a friend) the conversation you planned. Reflect back, use one \"I\" statement, ask what they need, agree on who does what by when, and send a short written summary.",
          youCanNow: "close a hard conversation with a fair, written agreement and follow up on it.",
          quickCheck: [
            { objective: "O6", q: "Why set a check-in date in an agreement?", options: ["To see if the agreement is working and fix it if not", "To punish whoever breaks it", "To end the relationship", "Because it is required by law"], answer: 0, why: "A check-in lets both people see if the plan works and adjust it." },
            { objective: "O6", q: "You and your business partner agreed on a plan out loud. What would you do next?", options: ["Trust you will both remember it the same way", "Tell other people your version", "Send a short written summary of who does what by when", "Wait for problems to show up"], answer: 2, why: "A written summary means nobody remembers it differently." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Calming conflict and agreeing a way forward",
        questions: [
          { objective: "O4", q: "An argument is getting louder. What should you do first?", options: ["Talk louder so you are heard", "Say \"Calm down!\"", "Walk away and never return to it", "Slow your breathing and lower your voice"], answer: 3, why: "Calming yourself first helps calm the moment." },
          { objective: "O5", q: "Two volunteers both want the Saturday shift. One needs weekdays free for school. That need is their:", options: ["Interest", "Position", "Agreement", "Time-out"], answer: 0, why: "An interest is the real reason behind what someone asks for." },
          { objective: "O4", q: "When you take a break during a heated talk, you should:", options: ["Never bring it up again", "Set a time to come back and keep it", "Post about it online", "Tell everyone else first"], answer: 1, why: "A break works when you return at an agreed time." },
          { objective: "O6", q: "Which agreement is clearest?", options: ["\"We'll do better.\"", "\"Let's try harder.\"", "\"I'll close Tuesdays, you'll open Saturdays, starting Monday; we check in on the 15th.\"", "\"Whatever works.\""], answer: 2, why: "It says who, what, when and how you will check." },
          { objective: "O6", q: "A conflict involves harassment at work. What is the right step?", options: ["Bring in a manager or HR", "Handle it alone no matter what", "Ignore it", "Argue louder"], answer: 0, why: "Serious issues need a manager, HR or another trusted person." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Communication and Conflict Resolution",
    questions: [
      { objective: "O1", q: "Active listening means:", options: ["Waiting for your turn to talk", "Listening to understand, then showing you understood", "Agreeing with everything", "Giving advice right away"], answer: 1, why: "It is about understanding and showing you understood." },
      { objective: "O1", q: "Which shows full attention?", options: ["Scrolling your phone", "Looking at the TV", "Phone down, facing the person", "Finishing their sentences"], answer: 2, why: "Full attention means no distractions." },
      { objective: "O1", q: "\"So the late delivery left you short for the lunch rush?\" is an example of:", options: ["Blaming", "Changing the subject", "A closed question", "Reflecting back"], answer: 3, why: "It repeats the main point in your own words." },
      { objective: "O1", q: "Which is NOT an open question?", options: ["\"Did you get my text?\"", "\"What would help?\"", "\"How did that affect you?\"", "\"What matters most to you here?\""], answer: 0, why: "It can be answered with yes or no." },
      { objective: "O2", q: "Why do \"You always...\" sentences cause trouble?", options: ["They are too short", "They make people defend themselves", "They are too polite", "They are hard to spell"], answer: 1, why: "Blame makes people defend instead of listen." },
      { objective: "O2", q: "The \"I\" statement pattern is:", options: ["I win when you lose", "I am right because I said so", "I feel ___ when ___ because ___. Could we ___?", "I will ignore you until you change"], answer: 2, why: "Feeling, what happened, why it matters, and a request." },
      { objective: "O2", q: "A teammate keeps showing up late to practice. Which is the best opening?", options: ["\"I feel stressed when warm-up starts without you, because we lose drills. Could you aim for 10 minutes early?\"", "\"You don't care about this team.\"", "\"Everyone thinks you're lazy.\"", "Say nothing and complain to others"], answer: 0, why: "It is a calm \"I\" statement with a clear request." },
      { objective: "O2", q: "An \"I\" statement should describe what happened:", options: ["With as many insults as possible", "As a camera would see it", "Using every past mistake", "In a group chat"], answer: 1, why: "Plain facts, not judgments, keep it calm." },
      { objective: "O3", q: "Your goal in a hard conversation is usually to:", options: ["Win the argument", "Prove the other person wrong", "Get the last word", "Fix the problem and keep the relationship working"], answer: 3, why: "A good result works for both people." },
      { objective: "O3", q: "Which is the best way to set up a hard talk with your business partner?", options: ["Bring it up in front of customers", "\"Do you have ten minutes today to talk about the schedule?\"", "Send an angry text at midnight", "Wait until you explode"], answer: 1, why: "Asking first and picking a calm, private time works best." },
      { objective: "O3", q: "Why have the hard talk in person or by call when you can?", options: ["Tone can get lost in writing", "Texts are illegal", "It takes longer", "It is more dramatic"], answer: 0, why: "Voice and face carry tone that text loses." },
      { objective: "O4", q: "Which breathing pattern helps you calm down?", options: ["Hold your breath as long as you can", "Breathe very fast", "In for 4 counts, out for 6", "Shout to let it out"], answer: 2, why: "A longer out-breath helps the body slow down." },
      { objective: "O4", q: "Saying \"Calm down!\" to an upset person usually:", options: ["Calms them right away", "Makes things worse", "Ends the conflict", "Builds trust"], answer: 1, why: "It sounds dismissive; naming their feeling works better." },
      { objective: "O4", q: "You feel unsafe during an argument. What do you do?", options: ["Stay and finish it", "Raise your voice", "Block the door", "Leave and get help"], answer: 3, why: "Your safety comes before any conversation." },
      { objective: "O5", q: "\"I want the corner office\" is a position. Which is a possible interest behind it?", options: ["The corner office", "A bigger desk in the corner office", "A quiet place to make calls", "Winning"], answer: 2, why: "An interest is the reason behind the position." },
      { objective: "O5", q: "When listing options together, you should:", options: ["List several ideas before judging any", "Reject each idea as soon as it is said", "Only list your own ideas", "Stop at the first idea"], answer: 0, why: "Brainstorming first gives more choices." },
      { objective: "O5", q: "The best option is usually the one that:", options: ["Is fastest to say", "Meets the most important needs on both sides", "Lets the loudest person win", "Costs the most"], answer: 1, why: "Meeting both sides' key needs makes it last." },
      { objective: "O6", q: "A clear agreement answers:", options: ["Who was wrong", "Who yelled first", "What everyone thinks", "Who does what, by when, and how you will check"], answer: 3, why: "Those details make an agreement work." },
      { objective: "O6", q: "Why write the agreement down?", options: ["To use it against them later", "To post it online", "Because it looks official", "So nobody remembers it differently"], answer: 3, why: "A written note keeps both people on the same page." },
      { objective: "O6", q: "On the check-in date the agreement is not working. What is the best step?", options: ["Give up on the relationship", "Pretend it is fine", "Talk again: listen and look at new options", "Blame the other person"], answer: 2, why: "Going back to listening and options is normal." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      5,
      7,
      9,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Plan for the talk",
        objective: "O3",
        notYet: "No clear goal, time or opening line.",
        meets: "A one-sentence goal, a calm time and place, and an opening line practiced out loud.",
        exceeds: "Also planned how to take a break if things heat up."
      },
      {
        name: "Listening",
        objective: "O1",
        notYet: "Interrupted or jumped to answers without reflecting back.",
        meets: "Reflected back at least once and asked an open question.",
        exceeds: "The other person said they felt understood."
      },
      {
        name: "\"I\" statement",
        objective: "O2",
        notYet: "Used blaming \"you\" sentences.",
        meets: "Used at least one clear \"I\" statement with a request.",
        exceeds: "Stayed with \"I\" statements even when the talk got hard."
      },
      {
        name: "Needs and options",
        objective: "O5",
        notYet: "Only argued positions.",
        meets: "Asked what the other person needs and looked at more than one option.",
        exceeds: "Found an option that met important needs on both sides."
      },
      {
        name: "Written agreement",
        objective: "O6",
        notYet: "No agreement, or it is vague.",
        meets: "A written summary of who does what by when, shared with the other person.",
        exceeds: "Includes a check-in date."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who report holding a hard conversation within 30 days (follow-up survey)",
      "Learners who report a disagreement resolved with a written agreement",
      "Teams or programs that report fewer conflicts reaching a manager, coach or HR",
      "Learners who start another Koach Learn people-skills course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper and pen to plan the conversation and write the agreement",
      "A friend or partner for role-play, if possible",
      "About 60 minutes in total, plus time for the real conversation"
    ],
    facilitatorNotes: [
      "Use role-play in pairs with made-up or small real disagreements; nobody has to share personal details.",
      "Model active listening and \"I\" statements yourself before learners try them.",
      "Remind learners that conflicts involving danger, threats or harassment need help from a manager, HR or the authorities, not a one-on-one talk.",
      "For teams, practice with common team conflicts such as playing time, schedules and shared tasks.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
