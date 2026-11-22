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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Team leads, supervisors, small business owners, nonprofit and community leaders who need to lead a real change, such as a new system, process or way of serving people.",
    startingPoint: "Know the change they want and can explain it to someone who already agrees. Most have seen changes fail but have never written a change plan or planned how to involve the people affected.",
    gap: "Changes often fail because people do not see why, were not asked, hear about it once, or slide back to old habits after launch. Leaders need a simple way to understand resistance, make the case, involve people, plan, communicate and keep the change going.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Time: short lessons that fit around a working day",
      "Devices: a phone or computer; paper works for the plan",
      "The change plan must fit on one page",
      "Facts and stories in the case for change must be the learner's own, not made up by AI"
    ],
    prerequisites: "None. \"Managing Teams\" is a helpful companion course."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a change you want to lead", action: "list who is affected and what each group may lose and gain, and the likely reasons they may resist", standard: "treating each concern as information to respond to" },
    { id: "O2", condition: "Given a real change", action: "write a case for change that says the problem, what will be better and what happens if you do nothing", standard: "in two or three sentences using a real fact or story" },
    { id: "O3", condition: "Given the people a change affects", action: "plan how to involve them early, such as ideas, a pilot or change champions", standard: "saying what is open and what is not, and how you will report back" },
    { id: "O4", condition: "Given a real change", action: "write a one-page change plan answering what, why, who, when and how you will know", standard: "with an owner for each step and two or three measures with check dates" },
    { id: "O5", condition: "When announcing a change", action: "write messages for three different groups and plan one quick win", standard: "each message saying what changes, why, when, the help they get and who to ask" },
    { id: "O6", condition: "After the change launches", action: "plan two ways to keep the change going", standard: "such as checking measures on set dates and building the new way into checklists or training" }
  ],
  chapters: [
    {
      name: "Chapter 1: Understanding change and bringing people with you",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "predict why people may resist a change and map what each group may lose and gain.",
          quickCheck: [
            { objective: "O1", q: "Which is an understandable reason people resist a change?", options: ["They want the team to fail", "They were not asked", "They never like anything", "They are paid to resist"], answer: 1, why: "Not being asked is one of the common, understandable reasons for resistance." },
            { objective: "O1", q: "Before announcing a change, what would you do first?", options: ["Send an email to everyone at once", "Wait until people complain", "Ask AI to write the announcement", "List who is affected and what each group may lose and gain"], answer: 3, why: "That list tells you what to explain, who to involve and what support to give." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "write a short, honest case for change that answers why, not just what.",
          quickCheck: [
            { objective: "O2", q: "Which case for change is strongest?", options: ["\"Last month our paper forms lost 12 orders and three customers left.\"", "\"We need to modernize.\"", "\"Everyone else is doing it.\"", "\"The boss wants it.\""], answer: 0, why: "A real fact and story move people more than a slogan." },
            { objective: "O2", q: "The new way will take extra time at first. What would you say?", options: ["Hide it until launch", "Say it will be easy", "Say so honestly and say how you will help", "Blame the old system"], answer: 2, why: "People trust a leader who admits the costs." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "involve the people a change affects in an honest way and close the loop on their input.",
          quickCheck: [
            { objective: "O3", q: "Why does asking for input after everything is decided backfire?", options: ["It takes too long", "It feels fake, and people can tell", "It costs money", "People do not have ideas"], answer: 1, why: "Involve people while there is still room to change the plan." },
            { objective: "O3", q: "You collected ideas but could not use some of them. What would you do?", options: ["Say nothing about them", "Use them anyway", "Stop asking for ideas", "Report back on what you did with the input and why"], answer: 3, why: "Showing what you did with input keeps trust, even when you could not use it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Understanding change and bringing people with you",
        questions: [
          { objective: "O1", q: "Why do people often resist even a good change?", options: ["Because they are lazy", "Because change means losing something familiar", "Because all change is bad", "Because leaders are always wrong"], answer: 1, why: "Change brings loss and uncertainty even when it helps." },
          { objective: "O1", q: "A staff member pushes back hard on your plan. What is the best first response?", options: ["Ask what worries them, because they may see a real problem", "Tell them to stop complaining", "Remove them from the team", "Ignore it"], answer: 0, why: "Resistance is information; ask before you argue." },
          { objective: "O2", q: "A strong case for change answers which three questions?", options: ["Who, where, how much", "Who is to blame, when, why not", "What will it cost me, who decided, can I skip it", "What is the problem, what will be better, what if we do nothing"], answer: 3, why: "These show why the change matters." },
          { objective: "O3", q: "When should you involve people in a change?", options: ["After everything is decided", "Never", "Early, while there is still room to change the plan", "Only if they complain"], answer: 2, why: "Early input is real input and builds support." },
          { objective: "O3", q: "What is a pilot?", options: ["A small test of the change with a few people first", "The leader's boss", "A final deadline", "A type of training video"], answer: 0, why: "Pilots let you learn and fix problems before everyone switches." }
        ]
      }
    },
    {
      name: "Chapter 2: Planning, communicating and making it stick",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "write a short change plan with clear owners, dates and measures of success.",
          quickCheck: [
            { objective: "O4", q: "Which part of a change plan do people most often skip?", options: ["What is changing", "Who is affected", "How you will know it is working", "When it starts"], answer: 2, why: "Choose two or three signs you can check and a date to look at them." },
            { objective: "O4", q: "You are worried the new system might fail in week one. What would you add to the plan?", options: ["What you will do if it goes wrong, such as keeping the old way for a short time", "Nothing; plan for success only", "A longer case for change", "A second launch date in a year"], answer: 0, why: "A good plan says what you will do if something goes wrong." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "communicate a change clearly to different groups and plan an early win that builds support.",
          quickCheck: [
            { objective: "O5", q: "What is a quick win?", options: ["Finishing the change in one day", "An early, visible success that shows the change is working", "Skipping training", "A prize for the first person to switch"], answer: 1, why: "Quick wins win over people who were unsure." },
            { objective: "O5", q: "How would you tell the people most affected by the change?", options: ["Let them hear it from someone else", "Put a notice on the wall", "Send one email to all staff", "Tell them first, in person if you can"], answer: 3, why: "The most affected people should hear it first, before rumors reach them." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "keep a change going after launch by checking results, building it into routines and listening to the people doing the work.",
          quickCheck: [
            { objective: "O6", q: "What often happens to a change a few weeks after launch?", options: ["It fades as people slip back to old habits", "It always sticks on its own", "Everyone forgets the old way", "It gets bigger by itself"], answer: 0, why: "Launch day is not the finish line; habits pull people back." },
            { objective: "O6", q: "The new way works well. What would you do with the old way?", options: ["Keep both forever", "Ask each person to choose", "Remove the old way and build the new one into checklists and training", "Hide the new way"], answer: 2, why: "Removing the old way and building in the new one helps the change stick." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Planning, communicating and making it stick",
        questions: [
          { objective: "O4", q: "Which question is part of a simple change plan?", options: ["Who can we blame?", "How can we avoid telling people?", "How will we know it is working?", "How long can we wait?"], answer: 2, why: "Measures show whether the change works." },
          { objective: "O4", q: "Which is a good measure of success?", options: ["\"People feel modern\"", "\"Things go better\"", "\"We tried hard\"", "\"No missed deliveries for a month\""], answer: 3, why: "It is something you can actually check." },
          { objective: "O5", q: "Who should hear about a change first?", options: ["The people most affected, in person if possible", "The local newspaper", "Only the leadership team, forever", "Nobody until it starts"], answer: 0, why: "They deserve to hear it directly, not through rumors." },
          { objective: "O5", q: "Someone asks a question you cannot answer yet. What do you do?", options: ["Make up an answer", "Say you don't know and say when you will find out", "Change the subject", "End the meeting"], answer: 1, why: "Honesty builds trust during change." },
          { objective: "O6", q: "Three months after launch, people are slipping back to the old way. What helps most?", options: ["Stop talking about it", "Bring back the old system for good", "Blame the team", "Build the new way into checklists and training and ask what is still hard"], answer: 3, why: "Routines and listening make change stick." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Leading Change",
    questions: [
      { objective: "O1", q: "Which is a common reason people resist change?", options: ["They fear they won't be good at the new way", "They enjoy conflict", "They want more meetings", "They never like their job"], answer: 0, why: "Fear of not being able to do the new way well is very common." },
      { objective: "O1", q: "Treating resistance as information means:", options: ["Ignoring it", "Recording people secretly", "Asking what concerns people because they may see a real problem", "Punishing it"], answer: 2, why: "Push-back can point to real risks." },
      { objective: "O1", q: "Before announcing a change, it helps to list:", options: ["Who to blame if it fails", "Who is affected and what each group may lose and gain", "Only the costs", "Nothing"], answer: 1, why: "That map shows what to explain and what support to give." },
      { objective: "O2", q: "Which case for change is strongest?", options: ["\"We need to modernize.\"", "\"Because I said so.\"", "\"Everyone else is doing it.\"", "\"Paper sign-ups lost 30 volunteer names last month and two families missed deliveries.\""], answer: 3, why: "A real fact and a real story show why it matters." },
      { objective: "O2", q: "Why be honest about what will be hard?", options: ["To scare people", "People trust a leader who admits the costs", "To delay the change", "It is never a good idea"], answer: 1, why: "Honesty builds trust and lets you plan support." },
      { objective: "O2", q: "A case for change should explain:", options: ["What happens if we do nothing", "Only the leader's opinion", "Who will lose their job", "Nothing about the problem"], answer: 0, why: "The cost of doing nothing shows why change is needed." },
      { objective: "O3", q: "\"People support what they help create\" means you should:", options: ["Keep plans secret", "Decide everything first, then ask", "Involve them early while the plan can still change", "Only involve managers"], answer: 2, why: "Early involvement builds real support." },
      { objective: "O3", q: "A change champion is:", options: ["The person who resists most", "A respected team member who helps lead and explain the change", "A trophy", "An outside judge"], answer: 1, why: "Champions help others trust the change." },
      { objective: "O3", q: "You asked for ideas and could not use some. What should you do?", options: ["Say nothing", "Pretend you used them", "Stop asking for ideas", "Report back on what you did with the input, and why"], answer: 3, why: "Closing the loop keeps trust even when ideas are not used." },
      { objective: "O4", q: "The five parts of a simple change plan are:", options: ["What, why, who, when, how you'll know", "Who, blame, cost, delay, cancel", "Plan, hope, wait, see, quit", "Budget, logo, slogan, party, photo"], answer: 0, why: "These five questions cover most changes." },
      { objective: "O4", q: "Each step in a change plan should have:", options: ["Ten owners", "No owner", "One owner who is responsible for it", "An owner chosen later"], answer: 2, why: "One clear owner makes sure it gets done." },
      { objective: "O4", q: "When should training happen?", options: ["Months after the switch", "Before the switch", "Never", "Only for managers"], answer: 1, why: "People need skills before they are asked to use the new way." },
      { objective: "O5", q: "Why repeat your message in different ways?", options: ["To annoy people", "Because people hear a message several times before it sinks in", "To fill time", "Because the first message was wrong"], answer: 1, why: "Busy people need to hear it more than once." },
      { objective: "O5", q: "Each group's message should include:", options: ["Only the date", "Only the reason", "A long history", "What changes for them, why, when, the help they get and who to ask"], answer: 3, why: "These answer the questions people actually have." },
      { objective: "O5", q: "A quick win is:", options: ["An early, visible success that shows the change is working", "Finishing the change in one day", "Winning an argument", "Skipping the plan"], answer: 0, why: "Quick wins build belief and support." },
      { objective: "O5", q: "After a quick win, you should:", options: ["Keep it quiet", "Take all the credit", "Share it and thank the people who made it happen", "Stop the change"], answer: 2, why: "Sharing and thanking spreads support." },
      { objective: "O6", q: "Why is launch day \"not the finish line\"?", options: ["Because changes often fade as people slip back to old habits", "Because there is always a party after", "Because plans never start", "Because launch day is optional"], answer: 0, why: "Sustaining the change takes ongoing work." },
      { objective: "O6", q: "Which helps a change stick?", options: ["Keeping the old way forever as well", "Building it into checklists and new-hire training", "Never checking results", "Changing it again next week"], answer: 1, why: "Routines make the new way normal." },
      { objective: "O6", q: "You set a measure to check at week 4. On week 4 you should:", options: ["Skip it", "Change the measure", "Wait until next year", "Check it and act on what you find"], answer: 3, why: "Measures only help if you look at them on time." },
      { objective: "O6", q: "Once the change is part of \"how we do things here\", a good final step is:", options: ["Forget it", "Look back on what you learned for the next change", "Undo it", "Blame those who resisted"], answer: 1, why: "Lessons learned make the next change easier." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      6,
      9,
      11,
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
        name: "Why it matters",
        objective: "O2",
        notYet: "The reason is a slogan, such as \"we need to modernize\".",
        meets: "Two or three sentences on the problem, what will be better and what happens if nothing changes.",
        exceeds: "Uses a real fact or story the people affected will care about."
      },
      {
        name: "Who is affected and how they are involved",
        objective: "O3",
        notYet: "No one is involved before the decision is final.",
        meets: "Names who is affected and how they will be involved early.",
        exceeds: "Says what is open and what is not, and how input will be reported back."
      },
      {
        name: "Plan and measures",
        objective: "O4",
        notYet: "Missing what, why, who, when or how you will know.",
        meets: "Answers all five questions, with when each step happens and how you will know it is working.",
        exceeds: "Each step has an owner and each measure has a check date."
      },
      {
        name: "Messages and quick win",
        objective: "O5",
        notYet: "One message for everyone, or no quick win.",
        meets: "Three messages for three groups and one quick win in the first month.",
        exceeds: "Each message says the help people will get and who to ask."
      },
      {
        name: "Keeping it going",
        objective: "O6",
        notYet: "The plan stops at launch.",
        meets: "Two ways to keep the change going after launch.",
        exceeds: "Includes building the new way into checklists, training or job expectations."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who launch the change in their plan within 90 days (follow-up survey)",
      "Changes still in use three months after launch",
      "Learners who take another Koach Learn leadership course"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer to watch the lessons",
      "Paper or a document for the one-page change plan",
      "One real change the learner wants to lead",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Ask each learner to bring one real change before the session starts.",
      "Have pairs play the person pushing back, so learners practice asking what worries them.",
      "Have learners swap their case for change and say whether it would convince them.",
      "Remind learners to keep the facts and stories their own when using AI to tighten wording.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
