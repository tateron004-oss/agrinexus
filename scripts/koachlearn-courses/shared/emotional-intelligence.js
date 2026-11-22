"use strict";

// Koach Learn course (shared): "Emotional Intelligence". Asked for by the owner on 28 October 2026 (people and career skills beyond AI).
// Categories: Athletes, Entrepreneurs, Re-Entry, Non Profits, Youth, Veterans (military), Workforce Development, Undeserved Community, Leadership Development.
// Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js. A skills course with no changing facts, so it needs no sources.

module.exports = {
  id: "emotional-intelligence",
  category: "Athletes",
  name: "Emotional Intelligence",
  skills: "Naming your emotions, Finding your triggers, Pausing before you respond, Listening with empathy, Handling conflict with \"I\" statements, Giving and receiving feedback",
  outcome: "name what you feel, pause before you react, listen so the other person feels understood, and handle a hard conversation at work, on a team or at home with calm \"I\" statements and a clear request.",
  about: [
    "Emotional intelligence is the skill of noticing and managing your own emotions and understanding other people's. It is not about hiding feelings or always being nice. It is about using feelings as information, so you choose what you do next instead of reacting.",
    "It matters everywhere: an athlete taking hard coaching, a manager giving feedback, a new hire with a short-tempered customer, a volunteer leader keeping a team together, a veteran adjusting to civilian work, someone coming home and rebuilding family trust, a teenager in a group chat argument. Employers often rank these people skills as highly as technical skills.",
    "You will practice six skills: naming emotions, finding triggers, pausing, listening with empathy, handling conflict and giving and receiving feedback. Each lesson takes about five minutes with a \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Plan and hold one real conversation you have been putting off (with a teammate, coworker, family member or friend). Before it, write what you feel and what triggered it. In it, pause before responding, reflect back what the other person says, and use one \"I feel ... when ... because ... Could we ...?\" statement. After it, write what went well and one thing to do differently.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Athletes and coaches, managers and new hires, volunteer leaders, veterans adjusting to civilian work, people coming home and rebuilding family trust, and young people.",
    startingPoint: "Feel strong emotions and deal with other people every day. Many describe feelings only as good, bad, fine or mad, react quickly when triggered, and find feedback and hard conversations uncomfortable.",
    gap: "Employers rank people skills as highly as technical skills, and quick reactions damage teams, jobs and families. Learners need to name and manage their emotions, listen with empathy and handle conflict and feedback calmly, so they choose what they do next instead of reacting.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Practice uses real but manageable situations; nobody has to share private details",
      "Not therapy; learners with ongoing distress are pointed to a counselor or the course on mental health and stress",
      "Time: about five-minute lessons with short daily practices"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Three times in one day", action: "name what you feel with an exact feeling word and the body clue that goes with it", standard: "without using good, bad, fine or mad" },
    { id: "O2", condition: "Looking back at recent strong reactions", action: "identify two of your triggers and what each one touches, such as respect or fairness", standard: "with a planned response written for each" },
    { id: "O3", condition: "In a heated moment", action: "use the STOP pause to choose your response", standard: "before you speak or send a message" },
    { id: "O4", condition: "When someone shares a problem", action: "reflect back what they feel and ask an open question", standard: "so they say you understood them" },
    { id: "O5", condition: "Given a real issue with another person", action: "say what bothers you with a calm \"I\" statement and a clear request", standard: "using the pattern I feel, when, because, could we" },
    { id: "O6", condition: "When giving or receiving feedback", action: "give specific, kind feedback and respond to tough feedback without getting defensive", standard: "describing actions, not the person" }
  ],
  chapters: [
    {
      name: "Chapter 1: Knowing and managing yourself",
      lessons: [
        {
          objectives: ["O1"],
          title: "Naming what you feel",
          minutes: 5,
          goal: "Name your emotion with a precise word, not just \"fine\" or \"mad\".",
          text: [
            "Emotional intelligence starts with self-awareness: knowing what you feel while you feel it. Many of us only use a few words, like good, bad, fine or mad. But \"mad\" could really be embarrassed, disrespected, worried or tired.",
            "Your body often knows first. A tight jaw, hot face, clenched fists, a knot in your stomach or a racing heart are clues. When you notice one, ask: \"What am I feeling right now?\" and look for a more exact word.",
            "Naming a feeling clearly helps you calm it and decide what to do. A player who knows \"I'm frustrated with myself, not the coach\" handles practice differently from one who just feels angry at everyone."
          ],
          steps: ["Notice a body clue: tight jaw, hot face, knot in your stomach.", "Ask: what am I feeling right now?", "Find a more exact word than good, bad or mad.", "Say it to yourself: \"I feel ...\""],
          words: [["Emotional intelligence", "the skill of noticing and managing your own emotions and understanding other people's."], ["Self-awareness", "knowing what you feel and why, while it is happening."]],
          slides: [
            { title: "Emotional intelligence", bullets: ["Notice and manage your emotions", "Understand other people's", "Choose your response instead of reacting"] },
            { title: "Your body knows first", bullets: ["Tight jaw, hot face, clenched fists", "Knot in your stomach, racing heart"] },
            { title: "Go beyond \"mad\"", bullets: ["Embarrassed, disrespected, worried, tired?", "Frustrated, nervous, let down, jealous?", "An exact word helps you calm it"] }
          ],
          tryIt: "Three times today, stop and write one exact feeling word and the body clue that went with it (for example: \"nervous - fast heartbeat before my shift\"). Try not to use good, bad, fine or mad.",
          youCanNow: "notice body clues and name your emotion with an exact word.",
          quickCheck: [
            { objective: "O1", q: "Which is a more exact word for feeling bad before a big test?", options: ["Fine", "Nervous", "Okay", "Bad"], answer: 1, why: "\"Nervous\" names the exact feeling, which helps you handle it." },
            { objective: "O1", q: "You notice a tight chest and fast heartbeat before your shift. What would you do?", options: ["Ignore it and hope it goes away", "Tell everyone you are fine", "Name the feeling with an exact word, such as worried", "Skip your shift"], answer: 2, why: "Naming the feeling from your body clue is the first step to managing it." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Finding your triggers",
          minutes: 5,
          goal: "Identify two situations that set off strong reactions in you.",
          text: [
            "A trigger is a situation, word or action that sets off a strong emotion fast: being interrupted, being corrected in front of others, someone being late, a certain tone of voice, losing a close game, feeling ignored.",
            "Triggers often connect to things that matter to you, like respect, fairness or safety, or to past experiences. For someone coming home from prison, being talked down to may hit hard. For a veteran, a sudden loud noise may. That is human, not a flaw.",
            "When you know your triggers, they lose some of their power. You can plan ahead: \"When my manager corrects me in front of the team, I will take a breath, say 'got it', and ask to talk after.\""
          ],
          steps: ["Think of the last two times you reacted strongly.", "Write what happened right before.", "Write what it touched: respect, fairness, safety, being heard?", "Write a plan for next time."],
          words: [["Trigger", "a situation or action that sets off a strong emotion quickly."], ["Pattern", "something that happens again and again in a similar way."]],
          slides: [
            { title: "What a trigger is", bullets: ["Sets off a strong emotion fast", "Interrupted, corrected in public, ignored", "Late teammates, a certain tone of voice"] },
            { title: "Why triggers hit hard", bullets: ["They touch respect, fairness or safety", "Or past experiences", "That's human, not a flaw"] },
            { title: "Plan ahead", bullets: ["Know your top triggers", "Decide your response in advance", "\"Breathe, say 'got it', talk after\""] }
          ],
          tryIt: "Write your top two triggers. For each, write what it touches (respect, fairness, safety, being heard) and one sentence about how you will respond next time.",
          youCanNow: "name your triggers, see what they touch, and plan a better response in advance.",
          quickCheck: [
            { objective: "O2", q: "What do triggers often connect to?", options: ["Things that matter to you, like respect or fairness", "The weather", "Random chance", "Only hunger"], answer: 0, why: "Triggers usually touch something you care about deeply." },
            { objective: "O2", q: "Being talked over in meetings always makes you angry. What would you do?", options: ["Stop going to meetings", "Talk over others first", "Hope it does not happen again", "Write it down as a trigger and plan how you will respond next time"], answer: 3, why: "Planning ahead takes power away from the trigger." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pausing before you respond",
          minutes: 5,
          goal: "Use the STOP pause to choose your response in a heated moment.",
          text: [
            "Between what happens and what you do, there is a tiny gap. Self-control means making that gap bigger. One easy tool is STOP: Stop. Take a breath. Observe what you feel and what is happening. Proceed with a choice.",
            "In the moment, a few slow breaths, counting to ten, or saying \"Give me a minute\" buys time. If you are too heated to talk well, it is okay to say \"I want to talk about this, but I need ten minutes first\" and come back. Coming back is the key part.",
            "Pausing is not the same as bottling up. You still deal with the feeling; you just do it when you can think clearly. Athletes call this staying composed; a calm player makes better decisions late in the game."
          ],
          steps: ["Stop: don't speak or hit send yet.", "Take a slow breath, or three.", "Observe: what am I feeling? What is really happening?", "Proceed: choose what to say or do, or ask for a short break and come back."],
          words: [["Self-control", "choosing what you do even when you feel a strong emotion."], ["Composure", "staying calm and clear-headed under pressure."]],
          slides: [
            { title: "Make the gap bigger", bullets: ["Something happens", "Pause", "Then choose your response"] },
            { title: "STOP", bullets: ["Stop", "Take a breath", "Observe", "Proceed with a choice"] },
            { title: "Need more time?", bullets: ["\"I need ten minutes, then let's talk.\"", "Always come back to it"] },
            { title: "Pausing is not bottling up", bullets: ["Deal with the feeling", "When you can think clearly"] }
          ],
          tryIt: "Think of a message or comment that made you angry recently. Walk through STOP on paper: what you felt, what was really happening, and what you would say now. Next time it happens for real, use STOP before you respond.",
          youCanNow: "use STOP to pause and choose your response instead of reacting.",
          quickCheck: [
            { objective: "O3", q: "What does the S in STOP stand for?", options: ["Stop", "Shout", "Smile", "Sleep"], answer: 0, why: "STOP starts by stopping before you react." },
            { objective: "O3", q: "A rude text arrives and you start typing an angry reply. What would you do?", options: ["Send it fast before you change your mind", "Stop, take a breath and decide what to say once you are calm", "Forward the text to friends", "Block the person right away"], answer: 1, why: "Pausing lets you choose your response instead of reacting." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Knowing and managing yourself",
        questions: [
          { objective: "O1", q: "Emotional intelligence is mainly:", options: ["Hiding all your feelings", "Always being nice", "Noticing and managing your emotions and understanding others'", "Being the loudest in the room"], answer: 2, why: "It is about using feelings as information to choose your response." },
          { objective: "O1", q: "Which is the most exact feeling word?", options: ["Bad", "Embarrassed", "Fine", "Whatever"], answer: 1, why: "An exact word like embarrassed tells you what is really going on." },
          { objective: "O2", q: "What is a trigger?", options: ["A situation that sets off a strong emotion fast", "A type of exercise", "A calm moment", "A job title"], answer: 0, why: "Triggers quickly set off strong emotions." },
          { objective: "O3", q: "In STOP, what does the T stand for?", options: ["Talk loudly", "Text back fast", "Tell everyone", "Take a breath"], answer: 3, why: "Stop, Take a breath, Observe, Proceed." },
          { objective: "O3", q: "You are too angry to talk well. What is a good move?", options: ["Say whatever comes to mind", "Never speak to them again", "Ask for ten minutes and come back to talk", "Post about it online"], answer: 2, why: "A short break followed by coming back lets you talk clearly." }
        ]
      }
    },
    {
      name: "Chapter 2: Understanding and working with others",
      lessons: [
        {
          objectives: ["O4"],
          title: "Listening with empathy",
          minutes: 5,
          goal: "Listen and reflect back so the other person feels understood.",
          text: [
            "Empathy means understanding what someone else feels and why, even if you would feel differently. You do not have to agree with them to understand them.",
            "Most people listen to reply. Empathic listening means listening to understand. Put the phone down, look at the person, and let them finish. Then reflect: say back what you heard and the feeling you noticed. \"So you've been covering extra shifts and nobody noticed. That sounds really frustrating.\"",
            "Then ask an open question: \"What would help?\" or \"What happened next?\" Avoid jumping to advice, comparing (\"that's nothing, once I...\") or saying \"calm down\". A coach, a customer service worker, a volunteer leader and a parent all get further when people feel heard first."
          ],
          steps: ["Put distractions away and look at the person.", "Let them finish without interrupting.", "Reflect what you heard and the feeling: \"Sounds like ...\"", "Ask an open question: \"What would help?\""],
          words: [["Empathy", "understanding what another person feels and why."], ["Reflect", "say back what you heard in your own words."], ["Open question", "a question that can't be answered with just yes or no."]],
          slides: [
            { title: "Empathy", bullets: ["Understand what they feel and why", "You don't have to agree"] },
            { title: "Listen to understand", bullets: ["Phone down, eyes up", "Let them finish", "Reflect: \"Sounds like that was frustrating.\""] },
            { title: "Then ask", bullets: ["\"What would help?\"", "\"What happened next?\""] },
            { title: "Avoid", bullets: ["Jumping to advice", "\"That's nothing, once I...\"", "\"Calm down\""] }
          ],
          tryIt: "In your next real conversation, practice one reflection (\"Sounds like you felt ...\") and one open question. Afterwards, write what the other person said and how they reacted.",
          youCanNow: "listen to understand, reflect what someone said and felt, and ask an open question.",
          quickCheck: [
            { objective: "O4", q: "What does it mean to reflect back?", options: ["To give advice right away", "To change the subject to your own story", "To say in your words what the other person feels and why", "To repeat the last word they said"], answer: 2, why: "Reflecting back shows the person you understood them." },
            { objective: "O4", q: "A coworker says, \"I'm so tired of doing all the cleanup.\" What would you say first?", options: ["\"Calm down, it's not a big deal.\"", "\"I do more than you.\"", "\"You should tell the boss.\"", "\"Sounds like you feel the work isn't shared fairly. What's been happening?\""], answer: 3, why: "Reflecting the feeling and asking an open question shows empathy." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Handling conflict with \"I\" statements",
          minutes: 5,
          goal: "Say what bothers you with a calm \"I\" statement and a clear request.",
          text: [
            "Conflict is normal on any team, in any family and in any business. Handled well, it solves problems. Handled badly, it breaks trust.",
            "\"You\" statements sound like blame: \"You always leave me to close.\" People defend themselves and stop listening. \"I\" statements describe your side: \"I feel stressed when I close alone three nights in a row, because I miss my bus. Could we take turns?\"",
            "The pattern: I feel [emotion] when [specific action] because [why it matters]. Could we [request]? Stick to one issue, describe actions not character (\"you were late twice\" not \"you're lazy\"), and listen to their side using the skills from the last lesson. Look for a solution you can both live with."
          ],
          steps: ["Pick one issue.", "Write: I feel ... when ... because ... Could we ...?", "Choose a calm time and private place.", "Say it, then listen and reflect their side.", "Agree on one next step."],
          words: [["\"I\" statement", "a way to say how something affects you without blaming the other person."], ["Conflict", "a disagreement between people who need or want different things."]],
          slides: [
            { title: "\"You\" vs \"I\"", bullets: ["\"You always leave me to close.\" (blame)", "\"I feel stressed when I close alone...\" (your side)"] },
            { title: "The pattern", bullets: ["I feel [emotion]", "when [specific action]", "because [why it matters]", "Could we [request]?"] },
            { title: "Keep it fair", bullets: ["One issue at a time", "Describe actions, not character", "Listen and reflect their side"] },
            { title: "End with a step", bullets: ["Find a solution you can both live with", "Agree on one next step"] }
          ],
          tryIt: "Think of a real issue with a teammate, coworker or family member. Write it first as a \"you\" statement, then rewrite it as \"I feel ... when ... because ... Could we ...?\" Read both out loud and notice the difference.",
          youCanNow: "turn a complaint into a calm \"I\" statement with a clear request, and work toward a shared next step.",
          quickCheck: [
            { objective: "O5", q: "Which part of an \"I\" statement is the clear request?", options: ["I feel", "When", "Because", "Could we"], answer: 3, why: "\"Could we ...?\" asks for a specific change." },
            { objective: "O5", q: "A family member keeps checking your phone. What would you say?", options: ["\"I feel uneasy when my phone is checked, because I want trust. Could we talk about it?\"", "\"You're always spying on me.\"", "\"Stop it or else.\"", "Say nothing and stay upset"], answer: 0, why: "A calm \"I\" statement names your feeling and asks for a change without blame." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Giving and receiving feedback",
          minutes: 6,
          goal: "Give specific, kind feedback and take feedback without getting defensive.",
          text: [
            "Feedback helps people grow. Good feedback is specific, about actions, and useful. Instead of \"Good job\" or \"That was bad\", say what happened and its effect: \"Your summary at the start of the meeting kept everyone on track.\" \"The report had three wrong totals, so the client called twice. Can you double-check totals before sending?\"",
            "Receiving feedback is harder. Your first feeling may be to defend yourself. Use STOP, listen to the whole thing, reflect it back, and ask a question: \"Can you give me an example?\" Say thank you, even if you do not agree yet. Then decide what to use. Athletes who take coaching well improve fastest.",
            "When you get it wrong, repair it. A real apology names what you did, its effect and what you will do differently: \"I snapped at you in the meeting. That was embarrassing for you. Next time I'll ask to talk after.\" Now you are ready for your final task."
          ],
          steps: ["Giving: say the specific action and its effect.", "Add a clear request or a thank-you.", "Receiving: pause, listen fully, reflect, ask for an example, say thank you.", "Repairing: name what you did, its effect and what you will do differently."],
          words: [["Feedback", "information about how someone did, given so they can improve or keep doing well."], ["Defensive", "quickly protecting yourself from criticism instead of listening."], ["Repair", "fixing a relationship after a mistake, often with a real apology."]],
          slides: [
            { title: "Giving feedback", bullets: ["Specific action + its effect", "\"Your summary kept us on track.\"", "Add a clear request or a thank-you"] },
            { title: "Receiving feedback", bullets: ["Pause, listen fully", "Reflect and ask for an example", "Say thank you, then decide what to use"] },
            { title: "Repair with a real apology", bullets: ["What I did", "The effect it had", "What I'll do differently"] }
          ],
          tryIt: "Final task: plan and hold one conversation you have been putting off. Before it, write what you feel and what triggered it. In it, pause, reflect what they say, and use one \"I feel ... when ... because ... Could we ...?\" statement. After it, write what went well and one thing to do differently.",
          youCanNow: "give specific feedback, take feedback without getting defensive, repair a mistake, and handle a hard conversation with emotional intelligence.",
          quickCheck: [
            { objective: "O6", q: "Which feedback is about actions, not the person?", options: ["\"You're careless.\"", "\"You never try.\"", "\"Two of the orders went out without labels yesterday.\"", "\"You're the worst on the team.\""], answer: 2, why: "Good feedback describes specific actions that can change." },
            { objective: "O6", q: "Your coach says your defense was weak in the last game. What would you do first?", options: ["Argue that the coach is wrong", "Listen, reflect it back and ask for an example", "Quit the team", "Blame a teammate"], answer: 1, why: "Listening and asking for an example helps you learn instead of getting defensive." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Understanding and working with others",
        questions: [
          { objective: "O4", q: "Empathy means:", options: ["Agreeing with everything", "Understanding what someone feels and why", "Feeling sorry for yourself", "Giving advice quickly"], answer: 1, why: "You can understand someone without agreeing with them." },
          { objective: "O4", q: "A teammate tells you they feel left out. Which response shows empathic listening?", options: ["\"That's nothing, I've had worse.\"", "\"Calm down.\"", "\"Here's what you should do...\"", "\"Sounds like you felt left out. What happened?\""], answer: 3, why: "It reflects their feeling and asks an open question." },
          { objective: "O5", q: "Which is an \"I\" statement?", options: ["\"I feel stressed when I close alone because I miss my bus. Could we take turns?\"", "\"You never help.\"", "\"You're so lazy.\"", "\"Everyone thinks you're wrong.\""], answer: 0, why: "It names your feeling, the action, why it matters and a request." },
          { objective: "O6", q: "Which feedback is most useful?", options: ["\"Bad job.\"", "\"Whatever.\"", "\"The report had three wrong totals; please double-check totals before sending.\"", "\"You're terrible at this.\""], answer: 2, why: "It names the specific action and a clear request." },
          { objective: "O6", q: "Which is a real apology?", options: ["\"Sorry you were upset.\"", "\"I snapped at you; that was embarrassing for you; next time I'll ask to talk after.\"", "\"I'm sorry, but you started it.\"", "Saying nothing"], answer: 1, why: "It names the action, its effect and what will change." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Emotional Intelligence",
    questions: [
      { objective: "O1", q: "Self-awareness means:", options: ["Knowing what you feel and why while it happens", "Thinking only about yourself", "Ignoring feelings", "Looking in a mirror"], answer: 0, why: "Self-awareness is noticing your feelings in the moment." },
      { objective: "O1", q: "Which is a body clue of a strong emotion?", options: ["A clean shirt", "A tight jaw or racing heart", "A full phone battery", "A sunny day"], answer: 1, why: "Your body often signals an emotion before you name it." },
      { objective: "O1", q: "Why name a feeling with an exact word?", options: ["To win arguments", "To sound smart", "It helps you calm it and decide what to do", "It makes the feeling stronger"], answer: 2, why: "Naming the feeling exactly helps you manage it." },
      { objective: "O1", q: "\"Mad\" might really be:", options: ["Hungry for pizza", "Sleepy only", "Happy", "Embarrassed, disrespected or worried"], answer: 3, why: "Anger often covers a more exact feeling." },
      { objective: "O2", q: "Triggers often connect to:", options: ["Things that matter to you, like respect or fairness", "The weather only", "Random numbers", "Your phone brand"], answer: 0, why: "Triggers touch values like respect, fairness or safety, or past experiences." },
      { objective: "O2", q: "Why plan your response to a trigger ahead of time?", options: ["So you never feel anything", "So you can blame others", "So the trigger has less power and you respond better", "It doesn't help"], answer: 2, why: "A plan made while calm guides you when the trigger hits." },
      { objective: "O3", q: "In STOP, the O stands for:", options: ["Order", "Observe", "Overreact", "Open your phone"], answer: 1, why: "Stop, Take a breath, Observe, Proceed." },
      { objective: "O3", q: "Pausing before you respond is:", options: ["The same as bottling up forever", "A sign of weakness", "Only for athletes", "Choosing a response when you can think clearly"], answer: 3, why: "You still deal with the feeling, just at a better moment." },
      { objective: "O3", q: "After asking for a ten-minute break in an argument, the key thing is to:", options: ["Come back and talk", "Never come back", "Complain to others", "Change the subject forever"], answer: 0, why: "A break helps only if you return to the conversation." },
      { objective: "O4", q: "Empathic listening means listening to:", options: ["Reply fast", "Find mistakes", "Understand", "Wait for your turn"], answer: 2, why: "Listening to understand helps the person feel heard." },
      { objective: "O4", q: "Which is an open question?", options: ["\"Are you okay?\"", "\"What would help?\"", "\"Did you finish?\"", "\"Is it Tuesday?\""], answer: 1, why: "Open questions can't be answered with just yes or no." },
      { objective: "O4", q: "When someone shares a problem, which should you usually avoid at first?", options: ["Looking at them", "Letting them finish", "Reflecting what they said", "Saying \"calm down\""], answer: 3, why: "\"Calm down\" can make people feel dismissed." },
      { objective: "O5", q: "Why do \"you\" statements often fail?", options: ["They are too short", "They are too polite", "They sound like blame, so people defend themselves", "They include feelings"], answer: 2, why: "Blame makes people defensive and stop listening." },
      { objective: "O5", q: "Complete the pattern: I feel ... when ... because ...", options: ["Could we ...?", "You always ...", "Everyone knows ...", "Never mind."], answer: 0, why: "The pattern ends with a clear request." },
      { objective: "O5", q: "Good conflict talk describes:", options: ["Someone's character (\"you're lazy\")", "Everything that ever went wrong", "Rumors", "Specific actions (\"you were late twice\")"], answer: 3, why: "Actions can change; character attacks only hurt." },
      { objective: "O5", q: "Which is a good place for a hard conversation?", options: ["A group chat", "A calm, private place", "In front of the whole team", "A shouting match after a loss"], answer: 1, why: "Calm and private helps both people listen." },
      { objective: "O6", q: "Good feedback is:", options: ["Specific, about actions, and useful", "Vague and general", "About someone's personality", "Given only when angry"], answer: 0, why: "Specific feedback tells people exactly what to keep or change." },
      { objective: "O6", q: "You receive tough feedback from your coach or boss. A strong first response is:", options: ["Argue right away", "Walk out", "Listen, reflect it back and ask for an example", "Ignore it"], answer: 2, why: "Listening and asking questions helps you learn from it." },
      { objective: "O6", q: "A real apology includes:", options: ["An excuse", "Blaming the other person", "\"Sorry you feel that way\"", "What you did, its effect and what you'll do differently"], answer: 3, why: "Those three parts repair trust." },
      { objective: "O6", q: "Repair after a mistake helps because it:", options: ["Proves you were right", "Rebuilds trust in the relationship", "Ends all future conflict", "Is required by law"], answer: 1, why: "Repairing shows respect and rebuilds trust." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      4,
      7,
      10,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Feeling and trigger named",
        objective: "O1",
        notYet: "Used a vague word such as bad or mad, or no trigger written.",
        meets: "Wrote an exact feeling word and what triggered it before the talk.",
        exceeds: "Also named what the trigger touches, such as respect or fairness."
      },
      {
        name: "Paused before responding",
        objective: "O3",
        notYet: "Reacted fast or raised their voice.",
        meets: "Paused at least once before responding in a hard moment.",
        exceeds: "Asked for a short break and came back to finish the talk."
      },
      {
        name: "Reflected back",
        objective: "O4",
        notYet: "Did not check what the other person meant.",
        meets: "Reflected back the other person's feeling at least once.",
        exceeds: "The other person said they felt understood."
      },
      {
        name: "\"I\" statement",
        objective: "O5",
        notYet: "Used blaming \"you\" statements.",
        meets: "Used one complete \"I feel ... when ... because ... Could we ...?\" statement.",
        exceeds: "The request led to a clear next step both agreed on."
      },
      {
        name: "Review afterwards",
        objective: "O6",
        notYet: "No review written.",
        meets: "Wrote what went well and one thing to do differently.",
        exceeds: "Asked the other person for feedback and noted it calmly."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who report holding a conversation they had been putting off within 30 days (follow-up survey)",
      "Learners who report using a pause before reacting in a hard moment",
      "Coaches, managers or program staff who report better teamwork or fewer blow-ups",
      "Learners who start another Koach Learn people-skills course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper or a notes app for feeling words, triggers and the plan",
      "A feeling-word list (optional)",
      "About 60 minutes in total, plus time for the real conversation"
    ],
    facilitatorNotes: [
      "Practice in pairs with made-up situations first; nobody has to share private stories.",
      "Model reflections and \"I\" statements yourself before asking learners to try them.",
      "Remind learners that conversations involving danger or abuse need outside help, not a one-on-one talk.",
      "If a learner seems in ongoing distress, point them to a counselor, the course on mental health and stress, or a local crisis line.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
