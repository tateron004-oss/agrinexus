"use strict";

// Koach Learn course: Leadership Development -> "Managing Teams" (new people-and-leadership course the owner asked for on 28 October 2026). Skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "lead-managing-teams",
  category: "Leadership Development",
  name: "Managing Teams",
  skills: "Setting clear expectations, Delegating work, Running one-on-ones, Giving situation-behavior-impact feedback, Handling under-performance fairly, Running team meetings and recognition",
  outcome: "run a small team week to week: set clear expectations, hand off work, hold useful one-on-ones, give fair and specific feedback, deal with a performance problem step by step, and run a short team meeting that ends with clear actions and real thanks.",
  about: [
    "This course is for new and soon-to-be managers: a shift lead at a store, a crew chief on a farm, a supervisor at a nonprofit, or anyone who has just been asked to look after other people's work.",
    "You will practice the everyday habits of good managers: moving from doing the work to leading it, saying clearly what good looks like, delegating, meeting one-on-one, giving feedback that helps, handling a problem fairly, and running meetings people do not dread.",
    "Each lesson takes about five minutes. Read it, look at the slides, then do the \"Try it now\" task using your own team or a team you know. There is a knowledge check after each chapter and a 20-question quiz at the end. AI assistants can help you draft notes and agendas, but the skill is yours."
  ],
  finalTask: "Write a one-page \"first 30 days\" plan for a team you lead or know: clear expectations for one role, one task you will delegate (with the outcome, deadline and check-in), a one-on-one agenda, one piece of feedback written in situation-behavior-impact form, and a 20-minute team meeting agenda that ends with actions and one specific thank-you.",
  chapters: [
    {
      name: "Chapter 1: From doer to manager",
      lessons: [
        {
          title: "Moving from doer to manager",
          minutes: 4,
          goal: "Describe how your job changes when you start managing people, and choose what to stop doing yourself.",
          text: [
            "Many managers get the job because they were good at the work. But the job is now different: your results are the team's results. If you keep doing everything yourself, the team stops growing and you burn out.",
            "Your new work is to make the goal clear, give people what they need, remove things that block them, help them improve, and notice good work. You still pitch in when it truly helps, but it is no longer your main job.",
            "It is normal for this to feel strange, especially if you now manage former teammates. Be friendly, be fair to everyone, and be honest that your role has changed. Ask your own manager what success looks like for you."
          ],
          steps: ["Write down the tasks you still do yourself every week.", "Mark the ones someone on the team could learn to do.", "Pick one to hand off this month.", "Ask your manager: \"What would make my team a success in six months?\""],
          words: [["Manager", "a person who is responsible for the results of a group of people, not only their own work."], ["Direct report", "a person whose manager you are."]],
          slides: [
            { title: "Your job has changed", bullets: ["Before: your own results", "Now: the team's results", "Doing it all yourself stops the team from growing"] },
            { title: "What a manager does", bullets: ["Makes the goal clear", "Gives people what they need", "Removes blockers", "Helps people improve and notices good work"] },
            { title: "Managing former teammates", bullets: ["Be friendly and fair to everyone", "Say honestly that your role changed", "Ask your manager what success looks like"] }
          ],
          tryIt: "List five tasks you do every week. Circle one that someone on your team could learn. Write one sentence about who could take it and why it would help them.",
          youCanNow: "explain how a manager's job differs from a doer's job and pick one task to stop doing yourself."
        },
        {
          title: "Setting clear expectations and delegating",
          minutes: 6,
          goal: "Write a clear expectation and hand off a task with an outcome, a deadline and a check-in.",
          text: [
            "Most team problems start with unclear expectations. People cannot hit a target they cannot see. A clear expectation says what the result is, how good it needs to be, and by when. \"Keep the store clean\" is vague. \"Restock and face the front shelves by 9 am every day\" is clear.",
            "Delegating means handing someone a task and the authority to do it, not just the chores. Say what result you want and why it matters, the deadline, what they can decide on their own, and when you will check in. Then let them do it their way.",
            "Match the handoff to the person. Someone new needs more steps and more check-ins. Someone experienced may only need the goal. Ask them to say back what they heard, so you both know you agree."
          ],
          steps: ["Name the result you want and why it matters.", "Say how good it needs to be and the deadline.", "Say what they can decide alone and when to ask you.", "Agree a check-in time.", "Ask them to say back the task in their own words."],
          words: [["Expectation", "a clear statement of the result someone is responsible for and how it will be judged."], ["Delegate", "to give someone a task and the authority to do it."], ["Check-in", "a short planned talk to see how a task is going."]],
          slides: [
            { title: "Clear expectations", bullets: ["What result", "How good it needs to be", "By when"] },
            { title: "Vague vs clear", bullets: ["Vague: \"Keep the store clean\"", "Clear: \"Restock and face the front shelves by 9 am daily\""] },
            { title: "Five parts of a good handoff", bullets: ["Result and why it matters", "Quality and deadline", "What they decide alone", "Check-in time, then they say it back"] },
            { title: "Match the handoff to the person", bullets: ["New: more steps, more check-ins", "Experienced: the goal and room to work"] }
          ],
          tryIt: "Take the task you circled in Lesson 1. Write the handoff with all five parts. Read it to a friend or say it out loud, then ask yourself: could someone do this without asking me ten questions?",
          youCanNow: "write a clear expectation and delegate a task with a result, a deadline, decision limits and a check-in."
        },
        {
          title: "Running useful one-on-ones",
          minutes: 5,
          goal: "Plan and hold a regular one-on-one that belongs to the team member.",
          text: [
            "A one-on-one is a short, regular private meeting between you and one person on your team, often 20 to 30 minutes every week or two. It is the best place to catch problems early, build trust and help people grow.",
            "Make it their meeting. Start with what is on their mind. Then talk about progress on their work, anything blocking them, and their growth. Save status updates you could read in a message for the message.",
            "Protect the time: do not cancel often, put your phone away, and listen more than you talk. Write down any promise you make and keep it. Keep notes private and respectful."
          ],
          steps: ["Book a regular time and keep it.", "Open with: \"What's on your mind?\"", "Ask about progress and what is blocking them.", "Talk about growth: \"What do you want to get better at?\"", "End by agreeing next steps, and write them down."],
          words: [["One-on-one", "a regular private meeting between a manager and one team member."], ["Blocker", "anything that stops someone from getting their work done."]],
          slides: [
            { title: "What a one-on-one is", bullets: ["Short, private and regular", "Often 20-30 minutes every week or two", "Catches problems early and builds trust"] },
            { title: "Make it their meeting", bullets: ["Open: \"What's on your mind?\"", "Progress and blockers", "Growth", "Next steps, written down"] },
            { title: "Protect the time", bullets: ["Don't cancel often", "Phone away, listen more than you talk", "Keep every promise you make"] }
          ],
          tryIt: "Write a one-on-one agenda for a real or pretend team member with four questions: one opener, one about progress, one about blockers, and one about growth.",
          youCanNow: "plan and hold a one-on-one that puts the team member's needs first and ends with clear next steps."
        }
      ],
      check: {
        title: "Knowledge Check 1: From doer to manager",
        questions: [
          { q: "What is the biggest change when you move from doer to manager?", options: ["You work fewer hours", "Your results are now the team's results", "You no longer need to listen", "You do all the hard tasks yourself"], answer: 1, why: "A manager is judged on what the whole team achieves." },
          { q: "Which expectation is the clearest?", options: ["\"Do your best\"", "\"Keep things tidy\"", "\"Be more on top of it\"", "\"Have the weekly order sent to the supplier by Thursday noon\""], answer: 3, why: "It names the result and the deadline." },
          { q: "You delegate a report to a new team member. What should you add?", options: ["More steps and an early check-in", "Nothing; let them guess", "A warning that you will redo it", "Only the deadline"], answer: 0, why: "Someone new needs more guidance and an earlier check-in." },
          { q: "Whose meeting is a one-on-one mainly?", options: ["The manager's boss", "The whole team's", "The team member's", "Human resources'"], answer: 2, why: "Start with what is on their mind; it is their time." },
          { q: "After delegating a task, a good way to confirm you agree is to:", options: ["Send it again in capital letters", "Ask them to say the task back in their own words", "Check on them every hour", "Do it yourself just in case"], answer: 1, why: "Saying it back shows whether you both understood the same thing." }
        ]
      }
    },
    {
      name: "Chapter 2: Feedback, performance and the team",
      lessons: [
        {
          title: "Giving feedback with situation-behavior-impact",
          minutes: 5,
          goal: "Give specific feedback, positive or corrective, using situation-behavior-impact.",
          text: [
            "Feedback works when it is specific, timely and about what someone did, not who they are. A simple way to say it is situation-behavior-impact, often called SBI.",
            "Situation: when and where. Behavior: what the person did that you saw or heard. Impact: what happened because of it. For example: \"In this morning's customer call (situation), you cut the customer off twice (behavior). She got upset and asked for a supervisor (impact).\" Then ask: \"How did you see it?\" and agree a next step together.",
            "Use SBI for praise too: \"At Saturday's food drive, you set up the sign-in table early. We checked in 40 volunteers with no line.\" Give feedback soon, in private for corrections, and avoid words like \"always\" and \"never\"."
          ],
          steps: ["Situation: say when and where.", "Behavior: describe what they did, like a video camera would see it.", "Impact: say what happened because of it.", "Ask how they see it and listen.", "Agree a next step."],
          words: [["Feedback", "information about how someone's actions affected the work, given so they can keep doing it or change it."], ["SBI", "situation-behavior-impact: a way to give feedback that names when, what they did, and what happened."]],
          slides: [
            { title: "Good feedback is", bullets: ["Specific", "Soon after it happens", "About what they did, not who they are"] },
            { title: "Situation-behavior-impact", bullets: ["Situation: when and where", "Behavior: what they did", "Impact: what happened because of it"] },
            { title: "Then talk it through", bullets: ["Ask: \"How did you see it?\"", "Listen", "Agree a next step"] },
            { title: "Use it for praise too", bullets: ["Specific thanks lands better than \"good job\"", "Correct in private", "Avoid \"always\" and \"never\""] }
          ],
          tryIt: "Write two SBI statements about real moments you saw: one to praise good work and one to fix a problem. Check that the behavior part describes only what you saw or heard.",
          youCanNow: "give specific, fair feedback with situation, behavior and impact, and turn it into a next step."
        },
        {
          title: "Handling under-performance fairly",
          minutes: 6,
          goal: "Take a performance problem through clear, fair, written steps.",
          text: [
            "When someone is not meeting expectations, act early. Waiting usually makes it worse and is unfair to the rest of the team. First check yourself: was the expectation clear? Did they have the training, tools and time?",
            "Talk privately. Use SBI to name the gap, then ask what is getting in the way. Sometimes there is a cause you did not know about, like a health or family issue, a broken tool or confusing instructions. Agree a plan together: what good looks like, what support you will give, and a date to review.",
            "Write down what you agreed, and follow up on that date. Treat everyone by the same standard. If things do not improve, or before any formal warning or firing, follow your organization's policy and talk to human resources or your own manager. Rules differ by place, so get advice when in doubt."
          ],
          steps: ["Check: was the expectation clear, and did they have what they needed?", "Meet privately and name the gap with SBI.", "Ask what is getting in the way, and listen.", "Agree what good looks like, your support and a review date.", "Write it down and follow up on the date.", "Before formal steps, follow your policy and talk to HR or your manager."],
          words: [["Under-performance", "when someone's work is not meeting the expectations that were set."], ["Improvement plan", "a written agreement on what must change, the support given, and a date to review."], ["HR", "human resources: the people who handle hiring, policies and employee matters."]],
          slides: [
            { title: "Act early", bullets: ["Waiting makes it worse", "It is unfair to the rest of the team"] },
            { title: "Check yourself first", bullets: ["Was the expectation clear?", "Did they have training, tools and time?"] },
            { title: "The conversation", bullets: ["Private, using SBI", "Ask what is getting in the way", "Agree what good looks like, support and a date"] },
            { title: "Keep it fair", bullets: ["Write down what you agreed", "Follow up on the date", "Same standard for everyone", "Follow policy; talk to HR before formal steps"] }
          ],
          tryIt: "Think of a real or made-up performance problem. Write the improvement plan in four lines: the gap (in SBI form), what good looks like, the support you will give, and the review date.",
          youCanNow: "handle a performance problem early and fairly with a private talk, a written plan and a follow-up."
        },
        {
          title: "Team meetings and recognition",
          minutes: 5,
          goal: "Run a short team meeting that ends with clear actions and specific thanks.",
          text: [
            "A good team meeting has a purpose, an agenda sent ahead, a start and end time, and a list of actions at the end. If you only need to share news, send a message instead.",
            "Run it on time. Go around so quieter people speak, keep side topics for later, and end by reading back each action: who will do what, by when. Send the actions out the same day. An AI assistant can help you turn your notes into a clean list, but check it.",
            "Recognition keeps people going. Thank people often, soon, and specifically, and say how their work helped. Some people like public praise; others prefer a private word or note. Ask them what they like."
          ],
          steps: ["Write the purpose and a short agenda; send it ahead.", "Start and end on time.", "Invite every person to speak.", "Close by reading back actions: who, what, by when.", "Send the actions the same day.", "Give one specific thank-you."],
          words: [["Agenda", "the list of topics for a meeting, in order."], ["Action item", "a task agreed in a meeting, with a person and a deadline."], ["Recognition", "showing people you noticed and value their work."]],
          slides: [
            { title: "Before the meeting", bullets: ["Clear purpose", "Short agenda sent ahead", "Just news? Send a message instead"] },
            { title: "During the meeting", bullets: ["Start and end on time", "Invite everyone to speak", "Park side topics for later"] },
            { title: "End with actions", bullets: ["Who will do what, by when", "Send them out the same day"] },
            { title: "Recognition", bullets: ["Often, soon and specific", "Say how their work helped", "Ask if they prefer public or private thanks"] }
          ],
          tryIt: "Final task: write your one-page \"first 30 days\" plan. Include expectations for one role, one task to delegate, a one-on-one agenda, one SBI feedback note, and a 20-minute meeting agenda that ends with actions and one specific thank-you.",
          youCanNow: "run a short, focused team meeting, close it with clear actions, and recognize good work in a way people value."
        }
      ],
      check: {
        title: "Knowledge Check 2: Feedback, performance and the team",
        questions: [
          { q: "In situation-behavior-impact, what is the \"behavior\" part?", options: ["Your opinion of their attitude", "What other people said about them", "What they did that you saw or heard", "Their job title"], answer: 2, why: "Behavior is what the person actually did, described plainly." },
          { q: "Which statement is SBI feedback?", options: ["\"You're lazy.\"", "\"In Tuesday's meeting you finished the budget early, so we could approve it on time.\"", "\"You always mess up.\"", "\"Good job, I guess.\""], answer: 1, why: "It names the situation, the behavior and the impact." },
          { q: "Before raising a performance problem, what should you check first?", options: ["Whether the expectation was clear and they had what they needed", "Whether others dislike them", "Whether you can fire them today", "Their social media"], answer: 0, why: "Many problems come from unclear expectations or missing tools." },
          { q: "A team member's work keeps slipping. When should you act?", options: ["At the yearly review", "Never; it may fix itself", "Only after others complain", "Early, in a private talk"], answer: 3, why: "Acting early is kinder and fairer than waiting." },
          { q: "What should every team meeting end with?", options: ["A long speech", "Actions: who will do what, by when", "A new meeting", "Nothing in writing"], answer: 1, why: "Clear actions turn talk into work." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Managing Teams",
    questions: [
      { q: "A new manager keeps doing all the hard tasks herself. What is the main risk?", options: ["The team learns faster", "Customers are happier", "The team stops growing and she burns out", "Nothing changes"], answer: 2, why: "Doing everything yourself blocks the team's growth." },
      { q: "Which is part of a manager's main job?", options: ["Removing things that block the team", "Doing every task alone", "Avoiding hard talks", "Keeping goals secret"], answer: 0, why: "Managers clear blockers so the team can work." },
      { q: "You now manage former teammates. A good approach is to:", options: ["Pretend nothing changed", "Only help your friends", "Avoid talking to them", "Be friendly, fair to everyone and honest that your role changed"], answer: 3, why: "Fairness and honesty build trust in a new role." },
      { q: "A clear expectation includes:", options: ["Only a feeling", "The result, how good it needs to be, and by when", "A threat", "A long history"], answer: 1, why: "Result, quality and deadline make it clear." },
      { q: "Delegating means:", options: ["Giving away only chores you dislike", "Watching every step", "Giving someone a task and the authority to do it", "Doing it yourself later"], answer: 2, why: "Real delegation includes authority to act." },
      { q: "When you delegate, you should say what the person can:", options: ["Decide on their own", "Never ask about", "Hide from you", "Skip"], answer: 0, why: "Decision limits let them act without waiting on you." },
      { q: "How often are one-on-ones commonly held?", options: ["Once a year", "Only when there is a problem", "Never", "Every week or two"], answer: 3, why: "Regular meetings catch problems early." },
      { q: "A good way to open a one-on-one is:", options: ["\"Here's what you did wrong.\"", "\"What's on your mind?\"", "\"Let's keep this short.\"", "Checking your phone"], answer: 1, why: "It makes the meeting theirs." },
      { q: "During a one-on-one you promised to fix a broken scanner. What do you do?", options: ["Write it down and do it", "Forget it", "Ask them to fix it", "Wait for them to ask again"], answer: 0, why: "Keeping promises builds trust." },
      { q: "What does SBI stand for?", options: ["Speak, blame, insist", "Skills, budget, ideas", "Situation, behavior, impact", "Schedule, break, inform"], answer: 2, why: "Situation, behavior and impact." },
      { q: "Where should corrective feedback usually be given?", options: ["In front of the whole team", "On social media", "In a group text", "In private"], answer: 3, why: "Private correction protects dignity." },
      { q: "After giving SBI feedback, the next step is to:", options: ["Walk away", "Ask how they see it and agree a next step", "Repeat it louder", "Tell the team"], answer: 1, why: "A two-way talk leads to change." },
      { q: "Which word should you avoid in feedback?", options: ["\"Today\"", "\"Thanks\"", "\"Always\"", "\"Because\""], answer: 2, why: "\"Always\" and \"never\" exaggerate and make people defensive." },
      { q: "A worker's output drops after years of good work. What should you ask in a private talk?", options: ["\"What is getting in the way?\"", "\"Why are you so bad?\"", "\"Do you want to quit?\"", "Nothing; just write them up"], answer: 0, why: "There may be a cause you do not know about." },
      { q: "An improvement plan should include:", options: ["Only a warning", "What good looks like, the support you'll give, and a review date", "No dates", "A list of their faults"], answer: 1, why: "Clear goals, support and a date make it fair." },
      { q: "Before a formal warning or firing, you should:", options: ["Post it in the team chat", "Act alone right away", "Ask the team to vote", "Follow your policy and talk to HR or your manager"], answer: 3, why: "Policies and laws differ; get advice first." },
      { q: "The meeting is only to share news. What is better?", options: ["A two-hour meeting", "Send a message instead", "Cancel all meetings forever", "Read the news aloud"], answer: 1, why: "Save meetings for discussion and decisions." },
      { q: "Two people never speak in meetings. What helps?", options: ["Go around so everyone gets a turn", "Ignore them", "Call them out sharply", "Hold longer meetings"], answer: 0, why: "Going around invites quieter people in." },
      { q: "When should you send out the meeting's action items?", options: ["Next month", "Never", "Only if someone asks", "The same day"], answer: 3, why: "Fast follow-up keeps actions on track." },
      { q: "Which is the best recognition?", options: ["\"Good job.\"", "Nothing, since it's their job", "\"Your call to the supplier got our order here a day early, so we didn't run out.\"", "A group email with no details"], answer: 2, why: "Specific thanks that names the impact means the most." }
    ]
  }
};
