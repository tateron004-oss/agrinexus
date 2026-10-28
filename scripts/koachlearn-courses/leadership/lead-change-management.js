"use strict";

// Koach Learn course: Leadership Development -> "Leading Change" (new people-and-leadership course the owner asked for on 28 October 2026). Skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "lead-change-management",
  category: "Leadership Development",
  name: "Leading Change",
  skills: "Understanding resistance, Making the case for change, Involving the people affected, Writing a simple change plan, Communicating change and quick wins, Making change stick",
  outcome: "lead a real change at work or in your community: understand why people push back, explain why the change matters, involve the people it affects, write a one-page change plan, communicate it well, and keep it going after the launch.",
  about: [
    "This course is for anyone asked to lead a change: a supervisor bringing in a new schedule, a nonprofit moving to a new donor system, a small-business owner changing how orders work, or a farm group switching to digital records.",
    "Most changes fail not because the idea is bad, but because people are not brought along. You will learn why people resist, how to make the case, how to involve people, and how to plan, communicate and sustain a change.",
    "Each lesson takes about five minutes. Pick one real change you care about at the start and use it in every \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Write a one-page change plan for a real change you want to lead. It must cover what is changing, why (in two or three sentences people will care about), who is affected and how you will involve them, when each step happens, how you will know it is working, three messages for three different groups, one quick win in the first month, and two ways you will keep the change going.",
  chapters: [
    {
      name: "Chapter 1: Understanding change and bringing people with you",
      lessons: [
        {
          title: "Why people resist change",
          minutes: 5,
          goal: "Name the likely reasons people will resist your change, so you can respond to them.",
          text: [
            "Change means losing something familiar, even when the new way is better. People resist for understandable reasons: they do not see why it is needed, they fear they will not be good at the new way, they worry about losing time, money, status or friends, they were not asked, or past changes went badly.",
            "Resistance is information, not an attack. The person pushing back often sees a real problem you missed. Treat their concern seriously and ask about it.",
            "Before you announce anything, list who is affected and what each group may lose and gain. That list tells you what to explain, who to involve and what support to give."
          ],
          steps: ["Write the change in one sentence.", "List every group it affects.", "For each group, write what they may lose and what they may gain.", "Mark the concerns you need to answer."],
          words: [["Resistance", "pushing back against a change, openly or quietly."], ["Stakeholder", "anyone affected by a change or who can affect whether it works."]],
          slides: [
            { title: "Change means loss", bullets: ["Even good change loses something familiar", "People worry before they see the benefits"] },
            { title: "Common reasons people resist", bullets: ["They don't see why", "They fear not being good at the new way", "They may lose time, money or status", "They weren't asked, or past changes failed"] },
            { title: "Resistance is information", bullets: ["They may see a real problem you missed", "Ask about it, don't argue"] },
            { title: "Map it first", bullets: ["Who is affected", "What each group may lose and gain"] }
          ],
          tryIt: "Choose a real change you want to lead. Write it in one sentence. Then list three groups it affects and, for each, one thing they may lose and one thing they may gain.",
          youCanNow: "predict why people may resist a change and map what each group may lose and gain."
        },
        {
          title: "Making the case for change",
          minutes: 5,
          goal: "Explain in a few sentences why a change is needed, in words the people affected care about.",
          text: [
            "People need to understand why before they accept what. A strong case answers three questions: What is the problem today? What will be better after the change? What happens if we do nothing?",
            "Use facts and a real story. \"Our paper sign-up sheets lost 30 volunteer names last month, and two families missed their food delivery\" moves people more than \"we need to modernize\". Speak to what each group cares about: time, fairness, safety, customers, the people you serve.",
            "Be honest about what is hard. If the new way takes extra work at first, say so and say how you will help. People trust a leader who admits the costs. An AI assistant can help you tighten your wording, but the facts and story should be your own."
          ],
          steps: ["Describe the problem today, with a fact.", "Describe what will be better.", "Say what happens if nothing changes.", "Add one real story.", "Be honest about what will be hard and how you will help."],
          words: [["Case for change", "a short explanation of why a change is needed and what it will make better."]],
          slides: [
            { title: "Why before what", bullets: ["What is the problem today?", "What will be better?", "What if we do nothing?"] },
            { title: "Facts plus a story", bullets: ["A real number shows the size of the problem", "A real story shows why it matters"] },
            { title: "Speak to what they care about", bullets: ["Time, fairness, safety", "Customers or the people you serve"] },
            { title: "Be honest", bullets: ["Say what will be hard", "Say how you will help"] }
          ],
          tryIt: "Write your case for change in four sentences: the problem today with one fact, what will be better, what happens if nothing changes, and one honest line about what will be hard. Read it aloud. Would the people affected care?",
          youCanNow: "write a short, honest case for change that answers why, not just what."
        },
        {
          title: "Involving the people affected",
          minutes: 5,
          goal: "Plan how to involve the people a change affects before decisions are final.",
          text: [
            "People support what they help create. Involve them early, while there is still room to change the plan. Asking after everything is decided feels fake, and people can tell.",
            "Ways to involve people: ask for their ideas in a short meeting or survey, test the change with a small group first, invite a few respected team members to help lead it, and let people choose how some parts are done.",
            "Be clear about what is open and what is not. \"We are moving to the new system by March; you can help decide how we train and in what order teams switch.\" Then show what you did with their input, even when you could not use it."
          ],
          steps: ["Decide what is fixed and what is open.", "Ask for ideas early, in a meeting or short survey.", "Test with a small pilot group.", "Invite respected team members to help lead.", "Report back on what you did with the input."],
          words: [["Pilot", "a small test of a change with a few people before everyone switches."], ["Change champion", "a respected team member who helps lead and explain the change."]],
          slides: [
            { title: "People support what they help create", bullets: ["Involve them early", "Asking after it's decided feels fake"] },
            { title: "Ways to involve people", bullets: ["Ask for ideas", "Run a small pilot", "Invite change champions", "Let them choose some of the how"] },
            { title: "Be clear what is open", bullets: ["\"The date is fixed; you help decide how we train\"", "Report back on what you did with their input"] }
          ],
          tryIt: "For your change, write what is fixed and what is open. Then name two ways you will involve people and two people you could ask to be change champions.",
          youCanNow: "involve the people a change affects in an honest way and close the loop on their input."
        }
      ],
      check: {
        title: "Knowledge Check 1: Understanding change and bringing people with you",
        questions: [
          { q: "Why do people often resist even a good change?", options: ["Because they are lazy", "Because change means losing something familiar", "Because all change is bad", "Because leaders are always wrong"], answer: 1, why: "Change brings loss and uncertainty even when it helps." },
          { q: "A staff member pushes back hard on your plan. What is the best first response?", options: ["Ask what worries them, because they may see a real problem", "Tell them to stop complaining", "Remove them from the team", "Ignore it"], answer: 0, why: "Resistance is information; ask before you argue." },
          { q: "A strong case for change answers which three questions?", options: ["Who, where, how much", "Who is to blame, when, why not", "What will it cost me, who decided, can I skip it", "What is the problem, what will be better, what if we do nothing"], answer: 3, why: "These show why the change matters." },
          { q: "When should you involve people in a change?", options: ["After everything is decided", "Never", "Early, while there is still room to change the plan", "Only if they complain"], answer: 2, why: "Early input is real input and builds support." },
          { q: "What is a pilot?", options: ["A small test of the change with a few people first", "The leader's boss", "A final deadline", "A type of training video"], answer: 0, why: "Pilots let you learn and fix problems before everyone switches." }
        ]
      }
    },
    {
      name: "Chapter 2: Planning, communicating and making it stick",
      lessons: [
        {
          title: "Writing a simple change plan",
          minutes: 6,
          goal: "Write a one-page change plan that answers what, why, who, when, and how you will know.",
          text: [
            "A change plan does not need to be long. One page that answers five questions is enough for most changes: What is changing? Why? Who is affected and who does what? When does each step happen? How will you know it is working?",
            "\"How you'll know\" is the part people skip. Choose two or three signs you can actually check, such as \"95% of orders entered in the new system by week 4\" or \"no missed deliveries for a month\". Pick a date to look at them.",
            "Name an owner for each step, plan training and support before the switch, and say what you will do if something goes wrong, like keeping the old way available for a short time."
          ],
          steps: ["What: the change in one sentence.", "Why: your case in two or three sentences.", "Who: groups affected, and an owner for each step.", "When: key dates, including training before the switch.", "How you'll know: two or three measures and a date to check them.", "A backup plan if something goes wrong."],
          words: [["Change plan", "a short written plan saying what is changing, why, who, when and how success will be measured."], ["Measure", "something you can count or check to see whether a change is working."], ["Owner", "the one person responsible for making a step happen."]],
          slides: [
            { title: "Five questions, one page", bullets: ["What is changing?", "Why?", "Who is affected and who does what?", "When? How will you know it works?"] },
            { title: "How you'll know", bullets: ["Two or three signs you can check", "Example: \"95% of orders in the new system by week 4\"", "Pick a date to look"] },
            { title: "Don't forget", bullets: ["An owner for each step", "Training before the switch", "A backup if something goes wrong"] }
          ],
          tryIt: "Write the first draft of your one-page plan with all five parts. For \"how you'll know\", write two measures and the date you will check them.",
          youCanNow: "write a short change plan with clear owners, dates and measures of success."
        },
        {
          title: "Communicating the change and getting quick wins",
          minutes: 5,
          goal: "Write clear messages for different groups and plan an early, visible win.",
          text: [
            "Say it more than once, in more than one way. People are busy and hear a message several times before it sinks in. Use a meeting, a short written note, and one-on-one talks. Tell people affected the most first, and in person if you can, before they hear it from someone else.",
            "Shape the message for each group: what is changing for them, why, when, what help they will get, and who to ask. Leave room for questions, and if you do not know an answer, say so and say when you will find out.",
            "Plan a quick win: an early, visible success in the first weeks, like a shorter line or a faster report. Share it and thank the people who made it happen. Quick wins show the change is working and win over people who were unsure."
          ],
          steps: ["Tell the most affected people first, in person if possible.", "For each group: what changes for them, why, when, help, who to ask.", "Repeat through meetings, notes and one-on-ones.", "Answer questions honestly; say when you will find out.", "Plan and celebrate one quick win in the first month."],
          words: [["Quick win", "an early, visible success that shows a change is working."], ["Audience", "the group of people a message is written for."]],
          slides: [
            { title: "Say it more than once", bullets: ["Meetings, notes and one-on-ones", "Most affected people first, in person"] },
            { title: "Every message covers", bullets: ["What changes for them and why", "When, and what help they get", "Who to ask"] },
            { title: "Honest answers", bullets: ["Don't know? Say so", "Say when you will find out"] },
            { title: "Quick wins", bullets: ["An early, visible success", "Share it and thank the people behind it"] }
          ],
          tryIt: "Write three short messages about your change for three different groups (for example front-line staff, managers and customers). Then write one quick win you could show in the first month.",
          youCanNow: "communicate a change clearly to different groups and plan an early win that builds support."
        },
        {
          title: "Making the change stick",
          minutes: 5,
          goal: "Plan how to keep a change going after launch so people do not slide back to the old way.",
          text: [
            "Launch day is not the finish line. Many changes fade after a few weeks as people slip back to old habits, especially when they are busy or stressed.",
            "To make it stick: check your measures on the dates you set, keep support easy to find, remove the old way once the new one works, and build the change into everyday routines like checklists, onboarding for new hires, and job expectations.",
            "Keep listening. Ask people what is still hard and fix it. Thank people who use the new way well, and share results. When the change is part of \"how we do things here\", look back on what you learned for the next change."
          ],
          steps: ["Check your measures on the planned dates.", "Keep help easy to find.", "Retire the old way when the new one works.", "Add the change to checklists, training and job expectations.", "Ask what is still hard, and fix it.", "Share results and thank people."],
          words: [["Sustain", "to keep something going over time."], ["Routine", "the regular way work gets done every day or week."]],
          slides: [
            { title: "Launch is not the finish line", bullets: ["Changes fade when people get busy", "Old habits pull people back"] },
            { title: "Build it into routines", bullets: ["Checklists and new-hire training", "Job expectations", "Retire the old way when the new one works"] },
            { title: "Keep listening", bullets: ["Check your measures on the dates", "Ask what is still hard and fix it", "Share results and thank people"] }
          ],
          tryIt: "Final task: finish your one-page change plan. Add three messages for three groups, one quick win in the first month, and two ways you will keep the change going after launch.",
          youCanNow: "keep a change going after launch by checking results, building it into routines and listening to the people doing the work."
        }
      ],
      check: {
        title: "Knowledge Check 2: Planning, communicating and making it stick",
        questions: [
          { q: "Which question is part of a simple change plan?", options: ["Who can we blame?", "How can we avoid telling people?", "How will we know it is working?", "How long can we wait?"], answer: 2, why: "Measures show whether the change works." },
          { q: "Which is a good measure of success?", options: ["\"People feel modern\"", "\"Things go better\"", "\"We tried hard\"", "\"No missed deliveries for a month\""], answer: 3, why: "It is something you can actually check." },
          { q: "Who should hear about a change first?", options: ["The people most affected, in person if possible", "The local newspaper", "Only the leadership team, forever", "Nobody until it starts"], answer: 0, why: "They deserve to hear it directly, not through rumors." },
          { q: "Someone asks a question you cannot answer yet. What do you do?", options: ["Make up an answer", "Say you don't know and say when you will find out", "Change the subject", "End the meeting"], answer: 1, why: "Honesty builds trust during change." },
          { q: "Three months after launch, people are slipping back to the old way. What helps most?", options: ["Stop talking about it", "Bring back the old system for good", "Blame the team", "Build the new way into checklists and training and ask what is still hard"], answer: 3, why: "Routines and listening make change stick." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Leading Change",
    questions: [
      { q: "Which is a common reason people resist change?", options: ["They fear they won't be good at the new way", "They enjoy conflict", "They want more meetings", "They never like their job"], answer: 0, why: "Fear of not being able to do the new way well is very common." },
      { q: "Treating resistance as information means:", options: ["Ignoring it", "Recording people secretly", "Asking what concerns people because they may see a real problem", "Punishing it"], answer: 2, why: "Push-back can point to real risks." },
      { q: "Before announcing a change, it helps to list:", options: ["Who to blame if it fails", "Who is affected and what each group may lose and gain", "Only the costs", "Nothing"], answer: 1, why: "That map shows what to explain and what support to give." },
      { q: "Which case for change is strongest?", options: ["\"We need to modernize.\"", "\"Because I said so.\"", "\"Everyone else is doing it.\"", "\"Paper sign-ups lost 30 volunteer names last month and two families missed deliveries.\""], answer: 3, why: "A real fact and a real story show why it matters." },
      { q: "Why be honest about what will be hard?", options: ["To scare people", "People trust a leader who admits the costs", "To delay the change", "It is never a good idea"], answer: 1, why: "Honesty builds trust and lets you plan support." },
      { q: "A case for change should explain:", options: ["What happens if we do nothing", "Only the leader's opinion", "Who will lose their job", "Nothing about the problem"], answer: 0, why: "The cost of doing nothing shows why change is needed." },
      { q: "\"People support what they help create\" means you should:", options: ["Keep plans secret", "Decide everything first, then ask", "Involve them early while the plan can still change", "Only involve managers"], answer: 2, why: "Early involvement builds real support." },
      { q: "A change champion is:", options: ["The person who resists most", "A respected team member who helps lead and explain the change", "A trophy", "An outside judge"], answer: 1, why: "Champions help others trust the change." },
      { q: "You asked for ideas and could not use some. What should you do?", options: ["Say nothing", "Pretend you used them", "Stop asking for ideas", "Report back on what you did with the input, and why"], answer: 3, why: "Closing the loop keeps trust even when ideas are not used." },
      { q: "The five parts of a simple change plan are:", options: ["What, why, who, when, how you'll know", "Who, blame, cost, delay, cancel", "Plan, hope, wait, see, quit", "Budget, logo, slogan, party, photo"], answer: 0, why: "These five questions cover most changes." },
      { q: "Each step in a change plan should have:", options: ["Ten owners", "No owner", "One owner who is responsible for it", "An owner chosen later"], answer: 2, why: "One clear owner makes sure it gets done." },
      { q: "When should training happen?", options: ["Months after the switch", "Before the switch", "Never", "Only for managers"], answer: 1, why: "People need skills before they are asked to use the new way." },
      { q: "Why repeat your message in different ways?", options: ["To annoy people", "Because people hear a message several times before it sinks in", "To fill time", "Because the first message was wrong"], answer: 1, why: "Busy people need to hear it more than once." },
      { q: "Each group's message should include:", options: ["Only the date", "Only the reason", "A long history", "What changes for them, why, when, the help they get and who to ask"], answer: 3, why: "These answer the questions people actually have." },
      { q: "A quick win is:", options: ["An early, visible success that shows the change is working", "Finishing the change in one day", "Winning an argument", "Skipping the plan"], answer: 0, why: "Quick wins build belief and support." },
      { q: "After a quick win, you should:", options: ["Keep it quiet", "Take all the credit", "Share it and thank the people who made it happen", "Stop the change"], answer: 2, why: "Sharing and thanking spreads support." },
      { q: "Why is launch day \"not the finish line\"?", options: ["Because changes often fade as people slip back to old habits", "Because there is always a party after", "Because plans never start", "Because launch day is optional"], answer: 0, why: "Sustaining the change takes ongoing work." },
      { q: "Which helps a change stick?", options: ["Keeping the old way forever as well", "Building it into checklists and new-hire training", "Never checking results", "Changing it again next week"], answer: 1, why: "Routines make the new way normal." },
      { q: "You set a measure to check at week 4. On week 4 you should:", options: ["Skip it", "Change the measure", "Wait until next year", "Check it and act on what you find"], answer: 3, why: "Measures only help if you look at them on time." },
      { q: "Once the change is part of \"how we do things here\", a good final step is:", options: ["Forget it", "Look back on what you learned for the next change", "Undo it", "Blame those who resisted"], answer: 1, why: "Lessons learned make the next change easier." }
    ]
  }
};
