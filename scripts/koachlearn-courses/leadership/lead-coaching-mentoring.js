"use strict";

// Koach Learn course: Leadership Development -> "Coaching and Mentoring" (new people-and-leadership course the owner asked for on 28 October 2026). Skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "lead-coaching-mentoring",
  category: "Leadership Development",
  name: "Coaching and Mentoring",
  skills: "Telling coaching from mentoring, Listening fully, Asking powerful questions, Running a GROW conversation, Setting a development goal, Mentoring agreements and tracking growth",
  outcome: "hold a coaching conversation with the GROW model using good listening and open questions, help someone set a clear development goal, agree how a mentoring relationship will work, and track their growth over time.",
  about: [
    "This course is for anyone who helps other people grow: managers, team leads, teachers, coaches, pastors, youth leaders, and experienced workers who mentor newer ones.",
    "Coaching and mentoring are skills you can practice. You will learn the difference between them, how to listen so people feel heard, how to ask questions that help people think, how to run a conversation with the GROW model, and how to set and track a development goal.",
    "Each lesson takes about five minutes. Find a practice partner (a coworker, friend or family member) for the \"Try it now\" tasks if you can. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Hold a 20-minute coaching conversation with a practice partner using GROW. Listen more than you talk and ask at least five open questions. Together, write their development goal in a clear, measurable form, a one-paragraph mentoring agreement (how often you meet, how, for how long, what is private), and a simple tracker with three check-in dates.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Team leads, supervisors, managers, teachers, community and nonprofit leaders, and experienced workers who want to coach or mentor others.",
    startingPoint: "Are often asked for help and usually answer by giving advice. Few have practiced full listening, open questions, a structured coaching conversation or a written mentoring agreement.",
    gap: "Giving answers keeps people dependent and misses what they really need. Leaders need to listen, ask open questions, guide a conversation with GROW, help set a clear development goal and track growth, so the people they support learn to think for themselves.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Time: short lessons, plus a 20-minute practice conversation",
      "Needs a practice partner for the final task",
      "Privacy: what is said in coaching and mentoring stays private unless agreed otherwise",
      "Safety instructions are told directly, not coached"
    ],
    prerequisites: "None. \"Managing Teams\" is a helpful companion course."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a situation where someone needs help", action: "choose whether it calls for coaching, mentoring or telling", standard: "getting at least 4 of 5 situations right" },
    { id: "O2", condition: "In a conversation", action: "listen without interrupting and summarize what you heard", standard: "so the person agrees you understood or corrects you" },
    { id: "O3", condition: "When someone asks for your advice", action: "ask open questions that start with what or how instead of giving advice", standard: "asking at least five open questions in one conversation" },
    { id: "O4", condition: "In a 20-minute coaching conversation", action: "guide the talk through Goal, Reality, Options and Will", standard: "ending with a first step, a date and a commitment rating" },
    { id: "O5", condition: "Given a wish to grow a skill", action: "write a clear development goal with small learning steps", standard: "saying what, how much and by when, and owned by the person" },
    { id: "O6", condition: "When starting a mentoring relationship", action: "write a one-paragraph mentoring agreement and a tracker with three check-in dates", standard: "covering how often, how, for how long and what is private" }
  ],
  chapters: [
    {
      name: "Chapter 1: Coaching conversations",
      lessons: [
        {
          objectives: ["O1"],
          title: "Coaching and mentoring: what is the difference?",
          minutes: 4,
          goal: "Choose whether a situation calls for coaching, mentoring or simply telling.",
          text: [
            "Coaching helps a person find their own answers through questions and listening. The coach does not need to know the job better; the person being coached does most of the thinking. It works well when someone has the skill or knowledge but is stuck, or needs to grow their judgment.",
            "Mentoring is a longer relationship where someone with more experience shares advice, stories, contacts and lessons learned. A mentor often works in the same field. It works well for career choices, learning \"how things really work\" and building a network.",
            "Sometimes neither is right and you should just tell. A new worker about to make a safety mistake needs instruction, not questions. Good leaders switch between telling, coaching and mentoring depending on what the person needs."
          ],
          words: [["Coaching", "helping someone find their own answers by asking questions and listening."], ["Mentoring", "a longer relationship where someone more experienced shares advice and lessons."], ["Mentee", "the person being mentored."], ["Coachee", "the person being coached."]],
          slides: [
            { title: "Coaching", bullets: ["Questions and listening", "The person does the thinking", "Good when they're stuck or growing judgment"] },
            { title: "Mentoring", bullets: ["Longer relationship", "Shares experience, advice and contacts", "Good for careers and how things really work"] },
            { title: "Sometimes, just tell", bullets: ["Safety risks", "Brand-new tasks", "Switch styles to fit the need"] }
          ],
          tryIt: "Write three real situations from your work or life where someone asked you for help. For each, write whether coaching, mentoring or telling would help most, and why.",
          youCanNow: "tell coaching from mentoring and choose the right approach for a situation.",
          quickCheck: [
            { objective: "O1", q: "What is mentoring?", options: ["A one-time safety instruction", "A longer relationship where someone with more experience shares advice and lessons", "Asking only yes or no questions", "A performance review"], answer: 1, why: "Mentoring shares experience over time, often in the same field." },
            { objective: "O1", q: "A team member is curious about how promotions really work in your field. Which approach fits best?", options: ["Tell them to read the policy alone", "Coach them with questions only", "Ignore it until review time", "Mentor them by sharing your experience and contacts"], answer: 3, why: "Mentoring fits career choices and learning how things really work." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Listening so people feel heard",
          minutes: 5,
          goal: "Listen fully and show you understood by summarizing.",
          text: [
            "Most of us listen while planning what we will say next. In coaching, that gets in the way. Full listening means giving all your attention to the other person: phone away, eyes on them, no interrupting, and not jumping in with your own story.",
            "Show you are listening. Nod, say \"go on\", and every few minutes summarize: \"So what I'm hearing is that you want to lead the project but you're worried the team won't follow. Is that right?\" A good summary lets the person hear their own thinking and correct you if you got it wrong.",
            "Listen for feelings and values as well as facts: \"You sound frustrated\" or \"It sounds like fairness really matters to you.\" Get comfortable with silence. A pause often comes just before the person's best idea."
          ],
          steps: ["Put your phone away and face the person.", "Don't interrupt or jump in with your own story.", "Encourage them: nod, \"go on\".", "Summarize what you heard and ask if it is right.", "Name feelings you notice.", "Allow silence."],
          words: [["Active listening", "listening with full attention and showing you understood, for example by summarizing."], ["Summarize", "to repeat the main points briefly in your own words."]],
          slides: [
            { title: "Full listening", bullets: ["Phone away, eyes on them", "No interrupting", "No jumping in with your own story"] },
            { title: "Show you're listening", bullets: ["Nod, \"go on\"", "Summarize: \"So what I'm hearing is...\"", "Ask: \"Is that right?\""] },
            { title: "Listen deeper", bullets: ["Hear feelings and values, not just facts", "Allow silence: good ideas often follow"] }
          ],
          tryIt: "Ask a partner to talk for three minutes about something they want to improve. Don't give advice. Then summarize what you heard in two sentences and ask, \"Did I get that right?\"",
          youCanNow: "listen with full attention and summarize so the other person feels heard.",
          quickCheck: [
            { objective: "O2", q: "What gets in the way of full listening?", options: ["Planning what you will say next", "Nodding", "Summarizing", "Allowing silence"], answer: 0, why: "Planning your reply means you are not fully listening." },
            { objective: "O2", q: "While someone talks about a problem, you remember a similar story of your own. What would you do?", options: ["Tell your story right away", "Interrupt to give advice", "Keep listening and summarize what they said", "Check your phone"], answer: 2, why: "Full listening means not jumping in with your own story." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Asking powerful questions",
          minutes: 5,
          goal: "Turn advice into open questions that help people think for themselves.",
          text: [
            "A powerful question is open (it cannot be answered with yes or no), short, and about the other person's thinking. It often starts with \"what\" or \"how\": \"What would success look like?\" \"What have you already tried?\" \"What's really stopping you?\"",
            "Watch out for advice dressed up as a question, like \"Have you thought about calling her?\" That is your idea, not theirs. Also be careful with \"why\" questions, which can sound like blame. \"What led you to that?\" usually feels kinder than \"Why did you do that?\"",
            "One strong question is \"And what else?\" It helps people go past their first answer. Ask one question at a time, then stop and listen."
          ],
          steps: ["Start with \"what\" or \"how\".", "Keep it short and about their thinking.", "Avoid advice dressed up as a question.", "Swap \"why\" for \"what led you to...\".", "Ask \"And what else?\"", "Ask one question, then stop and listen."],
          words: [["Open question", "a question that can't be answered with just yes or no."], ["Closed question", "a question answered with yes, no or a single fact."]],
          slides: [
            { title: "Powerful questions are", bullets: ["Open, short", "About their thinking", "Often start with \"what\" or \"how\""] },
            { title: "Examples", bullets: ["\"What would success look like?\"", "\"What have you already tried?\"", "\"What's really stopping you?\"", "\"And what else?\""] },
            { title: "Watch out for", bullets: ["Advice disguised as a question", "\"Why\" questions that sound like blame", "Asking two questions at once"] }
          ],
          tryIt: "Write down three pieces of advice you often give people. Turn each into an open question. For example, \"You should ask your boss\" becomes \"Who could help you with this?\"",
          youCanNow: "ask short, open questions that help people find their own answers.",
          quickCheck: [
            { objective: "O3", q: "What makes a question \"open\"?", options: ["It is very long", "It cannot be answered with yes or no", "It includes your advice", "It starts with \"why\""], answer: 1, why: "Open questions invite the person to think and explain." },
            { objective: "O3", q: "You want to suggest your idea, \"Talk to your supervisor.\" How would you turn it into a coaching question?", options: ["\"Have you thought about talking to your supervisor?\"", "\"Why haven't you talked to your supervisor?\"", "\"You should talk to your supervisor.\"", "\"Who could help you with this?\""], answer: 3, why: "An open question lets them find the idea; the others are advice or blame." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Coaching conversations",
        questions: [
          { objective: "O1", q: "In coaching, who does most of the thinking?", options: ["The coach", "The person being coached", "The boss", "A book"], answer: 1, why: "Coaching helps the person find their own answers." },
          { objective: "O1", q: "A new worker is about to use a machine unsafely. What approach fits best?", options: ["A long coaching conversation", "A mentoring agreement", "Tell them clearly how to do it safely", "Ask \"And what else?\""], answer: 2, why: "Safety risks call for clear instruction." },
          { objective: "O2", q: "Which is a good summary while listening?", options: ["\"That happened to me too, once...\"", "\"You should just quit.\"", "\"Anyway, moving on.\"", "\"So you want to lead the project but worry the team won't follow. Is that right?\""], answer: 3, why: "It repeats their main points and checks you understood." },
          { objective: "O3", q: "Which is an open question?", options: ["\"What have you already tried?\"", "\"Did you call her?\"", "\"Is it Tuesday?\"", "\"Are you done?\""], answer: 0, why: "It can't be answered with yes or no." },
          { objective: "O3", q: "\"Have you thought about calling her?\" is a problem because it is:", options: ["Too long", "Advice disguised as a question", "Too open", "About feelings"], answer: 1, why: "It brings in your idea instead of drawing out theirs." }
        ]
      }
    },
    {
      name: "Chapter 2: Growth that lasts",
      lessons: [
        {
          objectives: ["O4"],
          title: "Running a conversation with the GROW model",
          minutes: 6,
          goal: "Guide a coaching conversation through Goal, Reality, Options and Will.",
          text: [
            "GROW is a simple, widely used map for a coaching conversation. G is the Goal: what do they want from this talk and longer term? R is Reality: what is happening now, what have they tried? O is Options: what could they do? W is Will (or Way forward): what will they do, and when?",
            "Spend time on Reality before rushing to Options. Often the person sees the answer once the situation is clear. In Options, ask for several ideas, and \"what else?\", before choosing. If you have an idea, you can offer it last, as one option among many.",
            "End with a clear commitment: \"What's your first step, and when will you do it?\" Ask how sure they are on a scale of 1 to 10. If it is low, ask what would make it higher."
          ],
          steps: ["Goal: \"What do you want to get out of this talk?\"", "Reality: \"What's happening now? What have you tried?\"", "Options: \"What could you do? What else?\"", "Will: \"What will you do, and by when?\"", "Check commitment: \"How sure are you, 1 to 10?\""],
          words: [["GROW model", "a four-step coaching map: Goal, Reality, Options, Will."], ["Commitment", "a clear promise to take a specific action by a certain time."]],
          slides: [
            { title: "The GROW model", bullets: ["Goal: what do you want?", "Reality: what's happening now?", "Options: what could you do?", "Will: what will you do, by when?"] },
            { title: "Take time on Reality", bullets: ["The answer often appears once things are clear", "Don't rush to solutions"] },
            { title: "Options, then commitment", bullets: ["Ask for several ideas, and \"what else?\"", "Offer your idea last, as one option", "\"How sure are you, 1 to 10?\""] }
          ],
          tryIt: "Write one GROW question for each step on a card. With a partner, hold a 15-minute GROW conversation about something they want to improve. End with their first step and a date.",
          youCanNow: "guide a coaching conversation from goal to a clear, committed next step with GROW.",
          quickCheck: [
            { objective: "O4", q: "In GROW, what does the O stand for?", options: ["Options", "Outcome", "Order", "Opinion"], answer: 0, why: "GROW is Goal, Reality, Options, Will." },
            { objective: "O4", q: "Ten minutes in, the person has listed only one option. What would you ask?", options: ["\"Is that your final answer?\"", "\"Here's what I would do.\"", "\"And what else?\"", "\"Why only one?\""], answer: 2, why: "\"And what else?\" helps people go past their first answer." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Setting a development goal",
          minutes: 5,
          goal: "Help someone turn a wish into a clear, measurable development goal.",
          text: [
            "A development goal is about growing a skill, not just finishing a task. \"Get better at speaking\" is a wish. A clear goal says what, how much and by when: \"Lead the Monday team huddle on my own, three weeks in a row, by the end of March.\"",
            "Many people use SMART to check a goal: Specific, Measurable, Achievable, Relevant and Time-bound. The person should own the goal. Ask what they want to grow, and why it matters to them, before adding what the job needs.",
            "Break the goal into small learning steps: something to read or watch, someone to watch or shadow, a chance to practice, and someone to give feedback. Most growth comes from doing, not only from courses."
          ],
          steps: ["Ask what they want to grow and why it matters.", "Write it as what, how much, by when.", "Check it with SMART.", "List learning steps: read, watch someone, practice, get feedback.", "Agree the first step."],
          words: [["Development goal", "a goal to grow a skill or ability."], ["SMART", "a goal check: Specific, Measurable, Achievable, Relevant, Time-bound."], ["Shadowing", "learning by watching someone do the work."]],
          slides: [
            { title: "Wish vs goal", bullets: ["Wish: \"Get better at speaking\"", "Goal: \"Lead the Monday huddle alone, 3 weeks running, by end of March\""] },
            { title: "Check it with SMART", bullets: ["Specific and Measurable", "Achievable and Relevant", "Time-bound"] },
            { title: "Their goal, their reasons", bullets: ["Ask what they want to grow", "Ask why it matters to them"] },
            { title: "Learning steps", bullets: ["Read or watch", "Shadow someone", "Practice", "Get feedback"] }
          ],
          tryIt: "With your practice partner, turn one wish into a SMART development goal. Then list three learning steps, including at least one chance to practice.",
          youCanNow: "help someone write a clear development goal and the learning steps to reach it.",
          quickCheck: [
            { objective: "O5", q: "Which is a wish rather than a clear development goal?", options: ["\"Present the monthly report on my own at two meetings by June\"", "\"Get better at speaking\"", "\"Run three safety briefings alone by the end of the quarter\"", "\"Train two new staff on the till by May 1\""], answer: 1, why: "A clear goal says what, how much and by when; a wish does not." },
            { objective: "O5", q: "Your mentee wants to get better at handling upset customers. Which learning step would you add first?", options: ["Only a long online course", "Nothing until next year", "Shadow a skilled coworker, then practice with feedback", "Read the company history"], answer: 2, why: "Most growth comes from doing and practicing with feedback." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mentoring agreements and tracking growth",
          minutes: 5,
          goal: "Write a simple mentoring agreement and a tracker to follow someone's growth.",
          text: [
            "A mentoring relationship works better with a short agreement at the start. Agree on the purpose, how often you will meet (for example monthly for six months), how (in person, phone or video), what is private, who sets the agenda (usually the mentee), and how either person can end it kindly.",
            "Track growth so you both see progress. A simple tracker can be a shared document or spreadsheet with the goal, learning steps, check-in dates, what was tried, what was learned, and the next step. Celebrate progress, even small steps.",
            "At each check-in, look back at the goal, ask what went well and what was hard, and agree the next step. At the end, review together what changed, and talk about what comes next: a new goal, a new mentor, or becoming a mentor yourself."
          ],
          steps: ["Agree purpose, how often, how, and for how long.", "Agree what stays private and who sets the agenda.", "Agree how either person can end it kindly.", "Set up a tracker: goal, steps, dates, learning, next step.", "At each check-in: review, reflect, next step.", "At the end, review what changed and what's next."],
          words: [["Mentoring agreement", "a short written understanding of how a mentoring relationship will work."], ["Tracker", "a simple record of progress toward a goal, with dates."], ["Check-in", "a planned meeting to review progress."]],
          slides: [
            { title: "The mentoring agreement", bullets: ["Purpose, how often, how, how long", "What stays private", "Mentee usually sets the agenda", "How to end it kindly"] },
            { title: "A simple tracker", bullets: ["Goal and learning steps", "Check-in dates", "What was tried and learned, next step"] },
            { title: "Each check-in", bullets: ["Look back at the goal", "What went well? What was hard?", "Agree the next step; celebrate progress"] }
          ],
          tryIt: "Final task: hold a 20-minute GROW conversation with your partner. Then write together their SMART development goal, a one-paragraph mentoring agreement, and a tracker with three check-in dates.",
          youCanNow: "set up a mentoring relationship with a clear agreement and track someone's growth over time.",
          quickCheck: [
            { objective: "O6", q: "Who usually sets the agenda in a mentoring meeting?", options: ["The mentor's manager", "The mentor", "Human resources", "The mentee"], answer: 3, why: "The mentee usually sets the agenda, since it is their growth." },
            { objective: "O6", q: "At a check-in, your mentee has made a small step forward. What would you do?", options: ["Celebrate it and agree the next step", "Say it is not enough", "Skip to a new goal", "Cancel the next check-in"], answer: 0, why: "Celebrating small progress keeps people motivated." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Growth that lasts",
        questions: [
          { objective: "O4", q: "What does the R in GROW stand for?", options: ["Results", "Rules", "Reward", "Reality"], answer: 3, why: "Reality: what is happening now." },
          { objective: "O4", q: "When should you offer your own idea in the Options step?", options: ["First, so they don't waste time", "Last, as one option among many", "Never, under any circumstances", "Only in writing"], answer: 1, why: "Offering it last keeps their thinking first." },
          { objective: "O5", q: "Which is a clear development goal?", options: ["\"Be a better leader\"", "\"Try harder\"", "\"Lead the Monday huddle alone three weeks in a row by end of March\"", "\"Learn stuff\""], answer: 2, why: "It says what, how much and by when." },
          { objective: "O6", q: "Who usually sets the agenda in a mentoring meeting?", options: ["The mentee", "The mentor's boss", "HR", "Nobody"], answer: 0, why: "The relationship is for the mentee's growth." },
          { objective: "O6", q: "What does a simple growth tracker include?", options: ["Only the mentor's opinions", "Private passwords", "Nothing written", "The goal, steps, check-in dates, what was learned and the next step"], answer: 3, why: "These let both people see progress." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Coaching and Mentoring",
    questions: [
      { objective: "O1", q: "Coaching is mainly about:", options: ["Telling people what to do", "Helping people find their own answers through questions and listening", "Giving out rewards", "Checking attendance"], answer: 1, why: "The coachee does the thinking." },
      { objective: "O1", q: "Mentoring is usually:", options: ["A one-time order", "A test", "A longer relationship where experience is shared", "A punishment"], answer: 2, why: "Mentors share experience over time." },
      { objective: "O1", q: "A skilled worker is stuck choosing between two good approaches. Best fit?", options: ["Coaching", "Telling them the answer", "Ignoring it", "A written warning"], answer: 0, why: "They have the skill; coaching helps them use their judgment." },
      { objective: "O2", q: "Full listening means:", options: ["Checking your phone while they talk", "Planning your reply", "Sharing your own story right away", "Giving all your attention, without interrupting"], answer: 3, why: "Attention without interruption helps people think." },
      { objective: "O2", q: "Why summarize what you heard?", options: ["To end the talk", "So they hear their own thinking and can correct you", "To show you are smarter", "To change the subject"], answer: 1, why: "A summary checks understanding and helps reflection." },
      { objective: "O2", q: "The person goes quiet after a question. You should:", options: ["Fill the silence with advice", "Ask three more questions", "Allow the silence; a good idea often follows", "End the meeting"], answer: 2, why: "Silence gives people room to think." },
      { objective: "O3", q: "Which is the most powerful coaching question?", options: ["\"Did you do it?\"", "\"Isn't that obvious?\"", "\"Why would you do that?\"", "\"What's really stopping you?\""], answer: 3, why: "It is open and gets to the heart of the issue." },
      { objective: "O3", q: "A kinder way to ask \"Why did you do that?\" is:", options: ["\"What led you to that?\"", "\"Who told you to do that?\"", "\"Are you serious?\"", "\"Didn't you know better?\""], answer: 0, why: "It explores thinking without sounding like blame." },
      { objective: "O3", q: "The question \"And what else?\" helps people:", options: ["Stop talking", "Go past their first answer", "Agree with you", "Feel blamed"], answer: 1, why: "First answers are rarely the only ones." },
      { objective: "O4", q: "GROW stands for:", options: ["Grade, Review, Order, Wait", "Give, Rest, Own, Win", "Goal, Reality, Options, Will", "Growth, Rules, Outcome, Work"], answer: 2, why: "Goal, Reality, Options, Will (or Way forward)." },
      { objective: "O4", q: "Which GROW question belongs in the Will step?", options: ["\"What will you do, and by when?\"", "\"What's happening now?\"", "\"What do you want from this talk?\"", "\"What could you do?\""], answer: 0, why: "Will is about commitment to action." },
      { objective: "O4", q: "Someone rates their commitment 4 out of 10. You ask:", options: ["\"Why so low?\"", "Nothing", "\"Just do it anyway.\"", "\"What would make it higher?\""], answer: 3, why: "It helps them remove what is holding them back." },
      { objective: "O4", q: "Why spend time on Reality before Options?", options: ["It fills time", "The answer often appears once the situation is clear", "Options are never useful", "To find someone to blame"], answer: 1, why: "Clarity about now leads to better choices." },
      { objective: "O5", q: "SMART stands for:", options: ["Simple, Modern, Active, Ready, True", "Specific, Measurable, Achievable, Relevant, Time-bound", "Strong, Many, Able, Real, Total", "Short, Main, All, Right, Today"], answer: 1, why: "These five checks make a goal clear." },
      { objective: "O5", q: "Who should own a development goal?", options: ["The person who is growing", "Only the manager", "The company lawyer", "No one"], answer: 0, why: "People commit to goals they own." },
      { objective: "O5", q: "Where does most growth come from?", options: ["Only reading", "Only certificates", "Doing and practicing, with feedback", "Waiting"], answer: 2, why: "Practice with feedback builds skill." },
      { objective: "O6", q: "A mentoring agreement should include:", options: ["The mentor's salary", "How often you'll meet, what's private and how to end it kindly", "Only the start date", "A list of the mentee's faults"], answer: 1, why: "Clear terms prevent confusion later." },
      { objective: "O6", q: "At each mentoring check-in, you should:", options: ["Start a new goal every time", "Talk only about yourself", "Cancel if things are going well", "Look back at the goal, reflect and agree the next step"], answer: 3, why: "Regular review keeps growth on track." },
      { objective: "O6", q: "Why celebrate small progress?", options: ["It keeps people motivated", "It replaces the goal", "It is required by law", "It ends the relationship"], answer: 0, why: "Seeing progress keeps people going." },
      { objective: "O6", q: "At the end of a mentoring relationship, a good step is to:", options: ["Stop speaking", "Hide the tracker", "Review what changed and talk about what comes next", "Start over at the beginning"], answer: 2, why: "A review closes well and points to the next growth step." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      3,
      6,
      9,
      10,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Listening",
        objective: "O2",
        notYet: "Talked more than the partner or interrupted often.",
        meets: "Listened more than they talked and summarized at least once.",
        exceeds: "Named a feeling or value they heard, and the partner agreed."
      },
      {
        name: "Open questions",
        objective: "O3",
        notYet: "Fewer than five open questions, or mostly advice.",
        meets: "At least five open questions, one at a time.",
        exceeds: "Used \"And what else?\" and avoided blaming \"why\" questions."
      },
      {
        name: "GROW conversation",
        objective: "O4",
        notYet: "Skipped a step or jumped straight to advice.",
        meets: "Covered Goal, Reality, Options and Will and ended with a first step and a date.",
        exceeds: "Asked for a 1 to 10 commitment rating and what would make it higher."
      },
      {
        name: "Development goal",
        objective: "O5",
        notYet: "The goal is a wish, such as \"get better at speaking\".",
        meets: "A clear goal that says what, how much and by when, owned by the partner.",
        exceeds: "Broken into small learning steps with practice and feedback."
      },
      {
        name: "Agreement and tracker",
        objective: "O6",
        notYet: "The agreement or tracker is missing.",
        meets: "A one-paragraph agreement (how often, how, how long, what is private) and a tracker with three check-in dates.",
        exceeds: "Also says how either person can end it kindly."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who start a coaching or mentoring relationship within 30 days (follow-up survey)",
      "Mentees who reach their development goal by the date set",
      "Learners who take another Koach Learn leadership course"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer to watch the lessons",
      "A practice partner for the 20-minute conversation",
      "Paper or a shared document for the goal, agreement and tracker",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Pair learners for the GROW practice; have them swap coach and coachee roles.",
      "Use a third person as an observer who counts open questions and summaries.",
      "Ask partners to use a real but low-stakes goal, and to keep what is said private.",
      "Remind learners that safety mistakes call for telling, not coaching.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
