"use strict";

// Koach Learn course: Athletes -> "Mental Performance and Focus". Skill-building course: by the end the student can DO the skill in `outcome`.
// General education only: points to coaches, athletic trainers, school counselors, licensed mental health professionals and the 988 Lifeline. No therapy or diagnosis.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-mental-performance",
  category: "Athletes",
  name: "Mental Performance and Focus",
  skills: "Box breathing to calm nerves, Writing cue words and self-talk, Building a pre-game routine, Resetting after a mistake, Knowing when and where to get support",
  outcome: "build and use a written pre-game routine with a breathing reset, cue words and a mistake-reset plan, and know exactly who to reach out to when stress is more than nerves.",
  about: [
    "This course is for athletes who get nervous, lose focus or struggle to bounce back from mistakes, and for coaches who want to teach simple mental skills. These are general performance skills, not therapy.",
    "You will practice skills used by athletes at every level: slow breathing, helpful self-talk, routines and quick resets. You will use an AI assistant to help write your routine, and you will learn when to talk to a real person.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course. If you ever feel unsafe or hopeless, call or text 988 in the United States, or talk to a trusted adult right away."
  ],
  finalTask: "Write a one-page pre-game routine card: the time-line before your game, a box-breathing reset, three cue words, and a three-step mistake reset. Use an AI assistant to help word it, practice it at two practices, then share it with your coach and adjust it.",
  chapters: [
    {
      name: "Chapter 1: Calm and focus",
      lessons: [
        {
          title: "Understanding game-day nerves",
          minutes: 4,
          goal: "Notice your own signs of nerves and see them as energy you can manage.",
          text: [
            "Before a big game, your heart beats faster, your hands may sweat and your stomach may flutter. This is your body getting ready to perform. A little of it helps; too much can make you tense or rushed.",
            "Everyone feels it, including pros. The skill is not to make nerves disappear, but to notice them and bring them down to a level that helps you.",
            "Start by noticing. What do you feel in your body, what thoughts show up, and when do they start? Writing it down makes it easier to manage."
          ],
          words: [["Nerves", "the body's natural reaction before something important: faster heart, sweaty hands, butterflies."], ["Arousal level", "how revved up you feel, from very calm to very wound up."]],
          slides: [
            { title: "Nerves are normal", bullets: ["Faster heart, sweaty hands, butterflies", "Your body getting ready", "Pros feel it too"] },
            { title: "The skill", bullets: ["Not zero nerves", "The right amount for you"] },
            { title: "Start by noticing", bullets: ["What do I feel in my body?", "What thoughts show up?", "When do they start?"] }
          ],
          tryIt: "Think about your last big game. Write three body signs and two thoughts you had before it started, and when they began.",
          youCanNow: "notice your own signs of nerves and describe them."
        },
        {
          title: "Box breathing: a 60-second reset",
          minutes: 5,
          goal: "Use box breathing to calm your body in about a minute.",
          text: [
            "Slow breathing is one of the fastest ways to calm your body. Box breathing is simple: breathe in for a count of four, hold for four, breathe out for four, hold for four. Repeat four times.",
            "You can do it on the bench, at the free-throw line with shorter counts, in the locker room or before a test. Practice it when you are calm so it works when you are nervous.",
            "If holding your breath feels uncomfortable, skip the holds and just breathe in slowly and out even more slowly. Stop if you feel dizzy."
          ],
          steps: ["Breathe in through your nose for 4.", "Hold for 4.", "Breathe out slowly for 4.", "Hold for 4.", "Repeat 4 rounds."],
          words: [["Box breathing", "breathing in, holding, breathing out and holding for equal counts, like the four sides of a box."]],
          slides: [
            { title: "Box breathing", bullets: ["In 4", "Hold 4", "Out 4", "Hold 4"] },
            { title: "Where to use it", bullets: ["Bench or locker room", "Before a free throw or serve", "Before a test"] },
            { title: "Tips", bullets: ["Practice when calm", "Skip holds if uncomfortable", "Stop if dizzy"] }
          ],
          tryIt: "Do four rounds of box breathing right now. Rate how tense you feel from 1 to 10 before and after.",
          youCanNow: "use box breathing to calm your body in about a minute."
        },
        {
          title: "Cue words and self-talk",
          minutes: 5,
          goal: "Write three cue words and turn negative self-talk into useful instructions.",
          text: [
            "Self-talk is what you say to yourself in your head. \"Don't miss\" puts the picture of missing in your mind. \"Smooth release, follow through\" tells your body what to do.",
            "Cue words are one to three words that point your focus: \"eyes up\", \"quick feet\", \"next play\", \"strong and tall\". Pick words about what you control, not about the score.",
            "An AI assistant can help. Try: \"I'm a volleyball server. When I'm nervous I think 'don't serve into the net'. Give me five short cue words that tell me what to do instead.\" Pick the ones that feel like you."
          ],
          steps: ["Write a negative thought you often have.", "Ask: what do I want my body to do instead?", "Turn it into 1-3 words.", "Pick three cue words and practice saying them."],
          words: [["Self-talk", "the words you say to yourself in your head."], ["Cue word", "a short word or phrase that points your focus to what to do."]],
          slides: [
            { title: "Self-talk shapes action", bullets: ["\"Don't miss\" -> pictures missing", "\"Smooth release\" -> tells you what to do"] },
            { title: "Good cue words", bullets: ["1-3 words", "About what you control", "\"Eyes up\" \"Quick feet\" \"Next play\""] },
            { title: "AI can help", bullets: ["Give it your negative thought", "Ask for 5 short do-this cues", "Keep the ones that fit you"] }
          ],
          tryIt: "Write one negative thought you have in games. Use an AI assistant to get five cue words that tell you what to do instead. Choose your top three.",
          youCanNow: "write cue words and turn negative self-talk into useful instructions."
        }
      ],
      check: {
        title: "Knowledge Check 1: Calm and focus",
        questions: [
          { q: "Before a big game your heart races. This means:", options: ["Something is wrong with you", "You should quit", "Your body is getting ready to perform", "You are not good enough"], answer: 2, why: "Nerves are a normal body reaction before important moments." },
          { q: "What is the goal with nerves?", options: ["Bring them to a level that helps you", "Make them disappear completely", "Ignore them always", "Make them bigger"], answer: 0, why: "Some nerves help; the skill is managing the level." },
          { q: "What are the counts in box breathing?", options: ["In 1, out 10", "In 10, hold 10", "Fast breaths only", "In 4, hold 4, out 4, hold 4"], answer: 3, why: "Equal counts like the sides of a box." },
          { q: "Which is a useful cue word?", options: ["\"Don't mess up\"", "\"Quick feet\"", "\"Don't miss\"", "\"I always choke\""], answer: 1, why: "It tells your body what to do." },
          { q: "When should you practice box breathing?", options: ["Only during the biggest game", "When calm, so it works when you are nervous", "Never", "Only at night"], answer: 1, why: "Practicing calm makes the skill ready under pressure." }
        ]
      }
    },
    {
      name: "Chapter 2: Routines, resets and support",
      lessons: [
        {
          title: "Building a pre-game routine",
          minutes: 5,
          goal: "Write a pre-game routine with times and steps you control.",
          text: [
            "A routine is a set of steps you do the same way before every game. It gives your mind something familiar to hold on to, so you feel ready no matter the opponent.",
            "A simple routine: the night before (pack bag, sleep routine), game-day meal, arrival, warm-up, a one-minute breathing reset, your cue words, and a focus on your first job in the game.",
            "Keep the steps about things you control. Superstitions are fine for fun, but the routine should still work if you forget your lucky socks. Check timing with your coach so it fits the team warm-up."
          ],
          steps: ["List what you do from the night before to the first whistle.", "Add a breathing reset and your cue words.", "Name your first job in the game.", "Keep only steps you control.", "Check it fits your team's warm-up."],
          words: [["Routine", "steps you repeat the same way each time."], ["Controllable", "something you can choose or change yourself, like effort or preparation."]],
          slides: [
            { title: "Why routines work", bullets: ["Something familiar to hold on to", "Ready against any opponent"] },
            { title: "A simple routine", bullets: ["Night before: pack, sleep", "Game-day meal and arrival", "Warm-up, breathing reset, cue words", "First job in the game"] },
            { title: "Keep it controllable", bullets: ["Works without lucky socks", "Fits the team warm-up"] }
          ],
          tryIt: "Ask an AI assistant to turn your list of pre-game steps into a clean timeline from the night before to the first whistle. Edit it so it matches your real game day.",
          youCanNow: "write a pre-game routine built on steps you control."
        },
        {
          title: "Resetting after a mistake",
          minutes: 5,
          goal: "Use a three-step reset to move on from a mistake during a game.",
          text: [
            "Every athlete makes mistakes. What matters is how fast you move to the next play. Dwelling on a mistake often causes the next one.",
            "A three-step reset: 1. Release: a physical action that says \"done\", like wiping your hands, touching your shoe or a breath out. 2. Reset: one slow breath. 3. Refocus: say your cue word for the next play.",
            "After the game, not during it, look back at the mistake to learn from it with your coach or film. In the moment, the only job is the next play."
          ],
          steps: ["Release: one physical action that means \"done\".", "Reset: one slow breath.", "Refocus: say your next-play cue word.", "Learn from it after the game, not during."],
          words: [["Reset", "a quick routine to clear your mind and get ready for the next moment."], ["Next-play mindset", "focusing on what is coming, not what just happened."]],
          slides: [
            { title: "Mistakes happen", bullets: ["Dwelling causes the next one", "Speed of reset matters"] },
            { title: "Three-step reset", bullets: ["1. Release: a physical \"done\"", "2. Reset: one slow breath", "3. Refocus: next-play cue word"] },
            { title: "Learn later", bullets: ["Review after the game", "With your coach or film"] }
          ],
          tryIt: "Choose your release action and your next-play cue word. At your next practice, use the three-step reset after every mistake and count how many times you used it.",
          youCanNow: "use a three-step reset to move on quickly from a mistake."
        },
        {
          title: "When it is more than nerves: getting support",
          minutes: 5,
          goal: "Know the signs that stress needs real support and who to contact.",
          text: [
            "Mental skills help with normal pressure. But sometimes stress is bigger: you feel down most days, lose interest in things you liked, can't sleep or eat, feel hopeless, or think about hurting yourself. That is not a weakness, and it is not something a breathing drill or an AI chatbot can fix.",
            "Reach out to a real person: a parent or trusted adult, your coach, your athletic trainer, a school counselor, your team doctor or a licensed mental health professional. Many schools and colleges offer free counseling.",
            "If you or someone you know is in crisis or thinking about suicide in the United States, call or text 988 or chat at 988lifeline.org. It is free and open 24/7. In an emergency, call 911."
          ],
          steps: ["Notice the signs that it is more than nerves.", "Tell a trusted adult, coach, athletic trainer or counselor.", "Find your school's counseling service.", "In crisis: call or text 988. In an emergency: 911."],
          words: [["Licensed mental health professional", "a trained, licensed counselor, psychologist or therapist."], ["988 Lifeline", "the free US Suicide and Crisis Lifeline: call, text or chat 24/7."]],
          slides: [
            { title: "More than nerves if", bullets: ["Down most days", "Lost interest, can't sleep or eat", "Feeling hopeless or thinking of self-harm"] },
            { title: "Talk to a real person", bullets: ["Trusted adult, coach, athletic trainer", "School counselor or team doctor", "Licensed mental health professional"] },
            { title: "In crisis", bullets: ["Call or text 988 (US), free, 24/7", "Chat at 988lifeline.org", "Emergency: 911"] }
          ],
          sources: [{ name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }],
          tryIt: "Final task: write your one-page pre-game routine card with your breathing reset, three cue words and three-step mistake reset. At the bottom, write the names of two people you could talk to and how to reach your school's counseling service. Share the card with your coach.",
          youCanNow: "use your mental performance routine and know when and where to get real support."
        }
      ],
      check: {
        title: "Knowledge Check 2: Routines, resets and support",
        questions: [
          { q: "Why do athletes use pre-game routines?", options: ["To skip warm-ups", "To impress fans", "To avoid the coach", "To give the mind something familiar and feel ready"], answer: 3, why: "Routines create a familiar path to feeling ready." },
          { q: "Which routine step is controllable?", options: ["Your one-minute breathing reset", "The referee's calls", "The weather", "The other team's lineup"], answer: 0, why: "You choose to do your breathing reset." },
          { q: "What is step 1 of the mistake reset?", options: ["Argue with the ref", "Replay it in your head", "Release: a physical action that means \"done\"", "Leave the game"], answer: 2, why: "A physical release helps you let go." },
          { q: "When should you study a mistake?", options: ["In the middle of the next play", "Never", "While the coach is talking", "After the game, with your coach or film"], answer: 3, why: "During the game, the only job is the next play." },
          { q: "A teammate tells you they feel hopeless and talk about hurting themselves. What do you do?", options: ["Tell them to do box breathing", "Tell a trusted adult right away and share the 988 Lifeline", "Keep it secret", "Tell them to ask a chatbot"], answer: 1, why: "This needs real people and crisis support now." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Mental Performance and Focus",
    questions: [
      { q: "Sweaty hands before a game are:", options: ["A sign to quit", "Always dangerous", "A normal sign of nerves", "A rule violation"], answer: 2, why: "It's your body getting ready." },
      { q: "Do professional athletes feel nerves?", options: ["Yes, they manage them", "Never", "Only rookies", "Only in practice"], answer: 0, why: "Everyone feels nerves; pros manage them." },
      { q: "The first step to managing nerves is:", options: ["Noticing what you feel and think", "Ignoring them", "Yelling", "Skipping the game"], answer: 0, why: "You can't manage what you don't notice." },
      { q: "Box breathing has how many equal parts?", options: ["Two", "Three", "Four", "Five"], answer: 2, why: "In, hold, out, hold." },
      { q: "If holding your breath feels bad, you can:", options: ["Hold longer", "Skip the holds and breathe out slowly", "Stop breathing", "Breathe very fast"], answer: 1, why: "Slow breathing without holds still calms you." },
      { q: "Self-talk is:", options: ["Talking to the ref", "A team chant", "A post online", "What you say to yourself in your head"], answer: 3, why: "It's your inner voice." },
      { q: "Which self-talk helps more?", options: ["\"Don't miss\"", "\"I always choke\"", "\"Smooth release, follow through\"", "\"This is hopeless\""], answer: 2, why: "It tells your body what to do." },
      { q: "Good cue words focus on:", options: ["The score", "The crowd", "The other team", "What you control"], answer: 3, why: "Control what you can control." },
      { q: "How can AI help with cue words?", options: ["It can suggest short do-this phrases you choose from", "It can play for you", "It can diagnose anxiety", "It can't help at all"], answer: 0, why: "AI is good at wording; you pick what fits." },
      { q: "A pre-game routine should still work if:", options: ["You win", "You forget your lucky socks", "The coach leaves", "It rains"], answer: 1, why: "It's built on controllable steps, not luck." },
      { q: "Who should you check your routine timing with?", options: ["Your rival", "A stranger online", "Your coach", "Nobody"], answer: 2, why: "It must fit the team warm-up." },
      { q: "What is the next-play mindset?", options: ["Focusing on what is coming, not what happened", "Replaying mistakes", "Blaming teammates", "Watching the scoreboard"], answer: 0, why: "Next play is the only one you can change." },
      { q: "What is step 2 of the mistake reset?", options: ["Argue", "Leave the field", "Check social media", "One slow breath"], answer: 3, why: "Release, reset with a breath, refocus." },
      { q: "What is step 3 of the mistake reset?", options: ["Yell", "Refocus with your next-play cue word", "Replay the mistake", "Look at the crowd"], answer: 1, why: "The cue word points you to the next job." },
      { q: "Which is a sign stress is more than nerves?", options: ["Butterflies before a game", "Feeling down most days and losing interest", "Being excited", "A fast heart before kick-off"], answer: 1, why: "Ongoing low mood needs real support." },
      { q: "Can an AI chatbot replace a counselor?", options: ["Yes", "Only on weekends", "Only for athletes", "No, talk to a real person"], answer: 3, why: "Serious stress needs a trained person." },
      { q: "Who can you talk to about serious stress?", options: ["A trusted adult, coach, athletic trainer or school counselor", "Only yourself", "Nobody", "Opponents"], answer: 0, why: "These people can help or connect you to help." },
      { q: "In the US, the crisis line number is:", options: ["411", "311", "988", "0"], answer: 2, why: "Call or text 988 for the Suicide and Crisis Lifeline." },
      { q: "When is the 988 Lifeline open?", options: ["Weekdays only", "Only at night", "Only during the season", "24/7"], answer: 3, why: "It is free and open 24 hours a day, every day." },
      { q: "In an emergency where someone is in danger now, you call:", options: ["Your coach only", "911", "A friend later", "Nobody"], answer: 1, why: "911 is for emergencies happening now." }
    ]
  }
};
