"use strict";

// Koach Learn course: shared -> "Public Speaking and Presenting" (new people and career skills course the owner asked for on 28 October 2026). Listed for Athletes, Entrepreneurs, Non Profits, Youth,
// Veterans (military), Workforce Development, Undeserved Community and Leadership Development, so it uses mixed, everyday examples: a team talk, a pitch, a donor update, a class presentation, a meeting.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "public-speaking",
  category: "Athletes",
  name: "Public Speaking and Presenting",
  skills: "Planning a short talk, Structuring a message, Making simple slides, Practising and managing nerves, Using voice and body language, Handling questions",
  outcome: "plan, practise and deliver a clear 2-minute talk with a strong opening, three key points and a clear close, manage your nerves, use your voice and body well, and answer questions calmly.",
  about: [
    "Speaking in front of people is one of the most common fears, and one of the most useful skills. You use it in job interviews, team meetings, pitches to customers or investors, talks to donors and volunteers, media interviews, community meetings and the locker room.",
    "This course is for athletes, business owners, nonprofit staff, veterans, young people, workers and anyone who wants to speak up with confidence. You do not need to be a natural. Good speakers are made by planning and practice.",
    "You will plan a short talk, give it a clear structure, make simple slides if you need them, practise, handle nerves, use your voice and body, and answer questions. Each lesson takes about five minutes and ends with a practice. The final task is a 2-minute talk you record on your phone. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Record yourself on your phone giving a 2-minute talk on a topic you know well (your sport, your business, your cause, your job or a skill you have). It must have a hook, three key points and a clear close. Watch it back, note one thing you did well and one to improve, then record it once more.",
  chapters: [
    {
      name: "Chapter 1: Planning your talk",
      lessons: [
        {
          title: "Planning a short talk: audience, goal and one big idea",
          minutes: 5,
          goal: "Write down your audience, your goal and your one big idea for a short talk.",
          text: [
            "Before you write a single word, answer three questions. Who is listening? What do I want them to do, think or feel afterward? What is the one big idea I want them to remember?",
            "The same topic changes with the audience. Talking about your nonprofit's food pantry to donors, you might focus on results and what their money does. To new volunteers, you would focus on what a shift looks like. To a youth team, a coach talking about discipline would use their own games as examples.",
            "Write your big idea as one sentence a 12-year-old could repeat: \"Showing up early every day is what wins close games.\" or \"Our app saves small shops two hours a week.\" Everything in your talk should support that sentence. If something does not, cut it."
          ],
          steps: ["Write who is listening and what they care about.", "Write what you want them to do, think or feel after.", "Write your one big idea in one simple sentence.", "Check: does each thing you plan to say support the big idea?"],
          words: [["Audience", "the people listening to your talk."], ["Big idea", "the one main message you want people to remember."]],
          slides: [
            { title: "Three questions first", bullets: ["Who is listening?", "What should they do, think or feel after?", "What is my one big idea?"] },
            { title: "Fit the audience", bullets: ["Donors: results and impact", "New volunteers: what a shift looks like", "Youth team: their own games as examples"] },
            { title: "One big idea", bullets: ["One sentence a 12-year-old could repeat", "\"Our app saves small shops two hours a week.\"", "If it does not support the idea, cut it"] }
          ],
          tryIt: "Pick a topic you know well for your 2-minute talk. Write your audience, your goal for them and your one big idea in one sentence.",
          youCanNow: "plan a talk by choosing your audience, your goal and one big idea."
        },
        {
          title: "Structure: hook, three points, close",
          minutes: 5,
          goal: "Outline a 2-minute talk with a hook, three key points and a clear close.",
          text: [
            "A simple structure helps your listeners follow you and helps you remember what comes next. Use: hook, three points, close.",
            "The hook grabs attention in the first 15 seconds: a short story, a surprising fact, or a question. \"Last season we lost four games by one point.\" Then give three key points. Three is easy to remember. Back each with an example or a number. Then close: repeat your big idea and tell people what to do next. \"Come early this week. I will be there at 6.\" or \"Sign up for one shift by Friday.\"",
            "For a 2-minute talk, that is roughly 15 seconds for the hook, 30 seconds per point and 15 seconds for the close. Write the outline as short notes, not a full script, so you sound natural."
          ],
          steps: ["Write a hook: story, surprising fact or question.", "Write three key points, each with one example or number.", "Write a close: repeat the big idea and ask for one action.", "Time it: about 15 s hook, 30 s per point, 15 s close."],
          words: [["Hook", "an opening that grabs attention."], ["Call to action", "telling the audience the one thing to do next."], ["Outline", "a short list of the parts of your talk, in order."]],
          slides: [
            { title: "Hook, three points, close", bullets: ["Easy for listeners to follow", "Easy for you to remember"] },
            { title: "The hook (about 15 seconds)", bullets: ["A short story", "A surprising fact", "A question to the audience"] },
            { title: "Three points (about 30 seconds each)", bullets: ["Three is easy to remember", "Back each with an example or number"] },
            { title: "The close (about 15 seconds)", bullets: ["Repeat your big idea", "One clear action: \"Sign up by Friday.\"", "Use notes, not a full script"] }
          ],
          tryIt: "Write the outline for your 2-minute talk: one hook, three points with an example each, and a close with one call to action. Keep it to short notes on one page or one phone note.",
          youCanNow: "outline a short talk with a hook, three key points and a close with a call to action."
        },
        {
          title: "Simple slides that help, not hurt",
          minutes: 4,
          goal: "Make simple slides, or decide you do not need any.",
          text: [
            "Slides should help the audience, not hold your script. Many great short talks use no slides at all. Use them when a picture, a chart or a few key words make your point clearer.",
            "Rules that work: one idea per slide; a short title; at most a few words or one picture; big text that people at the back can read; high contrast, like dark text on a light background. Never read your slides out loud word for word; the audience can read faster than you talk.",
            "Free tools such as Google Slides, Microsoft PowerPoint for the web and Canva let you make slides in a browser. An AI assistant can suggest slide titles from your outline, but cut its text down hard and check every fact and number it gives you."
          ],
          steps: ["Ask: does a slide make this point clearer? If not, skip it.", "One idea per slide with a short title.", "Use a few words or one picture.", "Make the text big with strong contrast.", "Practise without reading the slides out loud."],
          words: [["Slide deck", "a set of slides for a talk."], ["Contrast", "how much the text stands out from the background."]],
          slides: [
            { title: "Slides help the audience", bullets: ["Not a script for you", "Many great short talks use none"] },
            { title: "Slide rules", bullets: ["One idea per slide", "Few words or one picture", "Big text, strong contrast"] },
            { title: "Do not read them", bullets: ["People read faster than you talk", "Talk about the slide instead"] },
            { title: "Free tools", bullets: ["Google Slides, PowerPoint for the web, Canva", "AI can suggest titles; cut and check them"] }
          ],
          tryIt: "Decide whether your 2-minute talk needs slides. If yes, make no more than three in a free tool, one idea each. If no, write one sentence about why the talk works without them.",
          youCanNow: "make simple, readable slides or decide confidently to speak without them."
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning your talk",
        questions: [
          { q: "What should you decide before writing your talk?", options: ["Your outfit only", "How many slides to use", "Your audience, your goal and your one big idea", "How long the questions will be"], answer: 2, why: "Those three decide everything else in the talk." },
          { q: "Which is a good hook?", options: ["\"Last season we lost four games by one point.\"", "\"Um, so, I'm going to talk now.\"", "\"Sorry, I'm not good at this.\"", "Reading the title slide"], answer: 0, why: "A short story or surprising fact grabs attention." },
          { q: "Why use three key points?", options: ["It is a law", "More points always look smarter", "It fills the time", "Three is easy for people to remember"], answer: 3, why: "Three points are easy to follow and recall." },
          { q: "A good close does what?", options: ["Ends with \"That's it, I guess\"", "Repeats the big idea and asks for one action", "Adds a new fourth point", "Apologizes for the talk"], answer: 1, why: "A clear close leaves people knowing what to do." },
          { q: "Which slide is best?", options: ["Ten bullet points in small text", "A full page of your script", "One idea, a short title and big text", "Light grey text on white"], answer: 2, why: "Simple, readable slides help the audience." }
        ]
      }
    },
    {
      name: "Chapter 2: Delivering with confidence",
      lessons: [
        {
          title: "Practice and nerves",
          minutes: 5,
          goal: "Practise a talk out loud and use simple tools to manage nerves.",
          text: [
            "Nerves are normal, even for professional speakers and athletes before a big game. A fast heart and shaky hands are your body getting ready. You do not need to get rid of nerves; you need to use them.",
            "Practice is the best cure. Say the talk out loud at least three times, standing up, with a timer. Then record it on your phone and watch it back. Then try it in front of one friend, family member, coach or coworker. Each round, it gets easier.",
            "On the day: breathe slowly (in for 4, out for 6) before you start; hold your notes or rest your hands; find a friendly face in the room; and remember the audience wants you to do well. If you lose your place, pause, look at your notes and carry on. A pause feels long to you but short to them."
          ],
          steps: ["Say the talk out loud three times, standing, with a timer.", "Record it on your phone and watch it back.", "Practise once in front of one person and ask for one tip.", "Before you start: breathe in for 4, out for 6.", "If you lose your place: pause, check notes, carry on."],
          words: [["Rehearse", "practise a talk out loud before giving it."], ["Nerves", "the nervous feeling before something important; normal and useful."]],
          slides: [
            { title: "Nerves are normal", bullets: ["Even pros and athletes feel them", "Your body is getting ready", "Use them; don't fight them"] },
            { title: "Practise out loud", bullets: ["Three times, standing, with a timer", "Record and watch it back", "Try it in front of one person"] },
            { title: "On the day", bullets: ["Breathe: in for 4, out for 6", "Find a friendly face", "The audience wants you to do well"] },
            { title: "Lost your place?", bullets: ["Pause", "Look at your notes", "Carry on: the pause feels shorter to them"] }
          ],
          tryIt: "Stand up and say your 2-minute talk out loud three times with a timer. Note how long each run takes and cut anything that pushes you past 2 minutes.",
          youCanNow: "rehearse a talk out loud, time it, and use breathing and pauses to manage nerves."
        },
        {
          title: "Voice and body language",
          minutes: 5,
          goal: "Use your voice, eyes and body to sound and look confident.",
          text: [
            "How you say it matters as much as what you say. Speak a little slower and a little louder than in normal conversation. Pause after important points to let them land. Change your tone so you do not sound flat, and cut filler words such as \"um\" and \"like\" by pausing instead.",
            "Stand tall with your feet about shoulder-width apart and your weight even. Keep your hands relaxed at your sides or use them for natural gestures; avoid crossing your arms or keeping hands in your pockets. Look at real people, one at a time, for a sentence or two each. In a video call, look at the camera, not at your own face on the screen.",
            "Different cultures read eye contact and gestures differently, so watch your audience and adjust. The goal is to look calm, open and interested in them."
          ],
          steps: ["Speak a little slower and louder than normal.", "Pause after important points.", "Replace \"um\" with a short pause.", "Stand tall, feet shoulder-width apart, hands relaxed.", "Look at one person for a sentence, then another.", "On video, look at the camera."],
          words: [["Body language", "what your posture, face, hands and eyes say without words."], ["Filler words", "sounds like \"um\", \"uh\" and \"like\" that fill silence."]],
          slides: [
            { title: "Your voice", bullets: ["A little slower and louder", "Pause after key points", "Vary your tone; swap \"um\" for a pause"] },
            { title: "Your body", bullets: ["Stand tall, feet shoulder-width apart", "Hands relaxed or natural gestures", "No crossed arms or pocket hands"] },
            { title: "Your eyes", bullets: ["One person, one sentence, then the next", "On video: look at the camera"] },
            { title: "Read the room", bullets: ["Cultures differ on eye contact and gestures", "Aim for calm, open and interested"] }
          ],
          tryIt: "Record 30 seconds of your talk on your phone. Watch it with the sound off: check posture, hands and eyes. Then listen with your eyes closed: count the \"um\"s and notice your speed. Pick one thing to fix.",
          youCanNow: "use your voice, posture, hands and eye contact to come across as calm and confident."
        },
        {
          title: "Handling questions",
          minutes: 5,
          goal: "Answer questions after a talk calmly and clearly, including ones you cannot answer.",
          text: [
            "Questions mean people were listening. Prepare by writing the three questions you are most likely to get and a short answer for each.",
            "When someone asks: listen to the whole question, thank them, and repeat or rephrase it so everyone hears it. Answer briefly, in 30 seconds or less if you can, and then check: \"Does that answer your question?\" If you do not know, say so honestly: \"I don't know, but I will find out and get back to you by Friday.\" Then do it. Never make something up.",
            "For a hostile or off-topic question, stay calm and polite: \"That's a fair concern. Let's talk after so we can give it proper time.\" A reporter or a sponsor may ask tricky questions too; bridge back to your big idea: \"What I can tell you is...\". Finish the question time with your close again so your big idea is the last thing people hear."
          ],
          steps: ["Before: write three likely questions and short answers.", "Listen to the whole question.", "Thank them and repeat it for everyone.", "Answer briefly, then check it answered them.", "Don't know? Say so and promise to follow up.", "End by repeating your close."],
          words: [["Q&A", "short for questions and answers: the time after a talk for questions."], ["Bridge", "a phrase that moves a tricky answer back to your main message."]],
          slides: [
            { title: "Prepare", bullets: ["Write three likely questions", "Write a short answer for each"] },
            { title: "Answering", bullets: ["Listen to the whole question", "Thank them and repeat it", "Answer briefly, then check"] },
            { title: "When you don't know", bullets: ["Say so honestly", "\"I'll find out and get back to you by Friday.\"", "Never make it up"] },
            { title: "Tricky questions", bullets: ["Stay calm and polite", "Offer to talk after", "Bridge: \"What I can tell you is...\""] }
          ],
          tryIt: "Final task: record your 2-minute talk on your phone. Then have a friend ask you two questions (or ask yourself two) and record your answers. Watch it back, note one strength and one fix, and record the talk once more.",
          youCanNow: "deliver a short talk and handle questions calmly, including ones you cannot answer yet."
        }
      ],
      check: {
        title: "Knowledge Check 2: Delivering with confidence",
        questions: [
          { q: "What is the best way to prepare for a talk?", options: ["Read it silently once", "Say it out loud several times, standing, with a timer", "Memorize slides only", "Wing it"], answer: 1, why: "Out-loud practice is the best cure for nerves." },
          { q: "You lose your place mid-talk. What do you do?", options: ["Apologize many times", "Leave the stage", "Start over from the beginning", "Pause, check your notes and carry on"], answer: 3, why: "A short pause is normal and barely noticed." },
          { q: "On a video call, where should you look when speaking?", options: ["At the camera", "At your own face on screen", "At the keyboard", "Out the window"], answer: 0, why: "Looking at the camera looks like eye contact." },
          { q: "What is a good way to cut filler words like \"um\"?", options: ["Talk faster", "Replace them with a short pause", "Say \"like\" instead", "Never stop talking"], answer: 1, why: "A pause sounds confident; fillers do not." },
          { q: "Someone asks a question you cannot answer. What is best?", options: ["Make up an answer", "Ignore them", "Say you don't know, and promise to follow up by a set day", "Change the subject without saying anything"], answer: 2, why: "Honesty plus a follow-up keeps trust." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Public Speaking and Presenting",
    questions: [
      { q: "The \"big idea\" of a talk is:", options: ["The longest part", "The one main message you want people to remember", "Your slide design", "The title of your first slide"], answer: 1, why: "Everything in the talk supports the big idea." },
      { q: "You will speak to new volunteers about your food pantry. What should you focus on?", options: ["Your tax forms", "Last year's board minutes", "Every program you run", "What a volunteer shift looks like"], answer: 3, why: "Fit the talk to what that audience needs." },
      { q: "If a part of your talk does not support the big idea, you should:", options: ["Cut it", "Make it longer", "Put it first", "Put it on a slide"], answer: 0, why: "Cutting keeps the talk clear and short." },
      { q: "The simple talk structure in this course is:", options: ["Apology, details, goodbye", "Slides, more slides, questions", "Hook, three points, close", "Story, story, story"], answer: 2, why: "Hook, three points and a close are easy to follow." },
      { q: "In a 2-minute talk, about how long is each key point?", options: ["5 seconds", "30 seconds", "2 minutes", "10 minutes"], answer: 1, why: "About 15 s hook, 30 s per point, 15 s close." },
      { q: "Which is a clear call to action?", options: ["\"Thanks, I guess.\"", "\"Any questions? No? OK.\"", "\"Maybe think about it sometime.\"", "\"Sign up for one shift by Friday.\""], answer: 3, why: "It tells people exactly what to do and when." },
      { q: "Why use notes instead of a full script?", options: ["You sound more natural", "Scripts are not allowed", "Notes are longer", "So you can read every word"], answer: 0, why: "Short notes keep you natural while on track." },
      { q: "When should you use a slide?", options: ["For every sentence", "When a picture, chart or few words make a point clearer", "Never", "Only for your script"], answer: 1, why: "Slides should help the audience understand." },
      { q: "Why not read slides word for word?", options: ["It is too fast", "Slides are secret", "The audience reads faster than you talk", "It is against the rules"], answer: 2, why: "Reading slides loses the audience." },
      { q: "An AI assistant gives you slide text. What should you do?", options: ["Use it all as is", "Cut it down and check every fact and number", "Read it out loud word for word", "Add more text"], answer: 1, why: "AI can be wrong and wordy; you stay in charge." },
      { q: "Nerves before a talk are:", options: ["A sign you should cancel", "Rare", "Only for beginners", "Normal, and your body getting ready"], answer: 3, why: "Even pros feel nerves; you can use them." },
      { q: "Which practice step comes after saying it out loud three times?", options: ["Record it on your phone and watch it back", "Delete your notes", "Add ten more points", "Stop practising"], answer: 0, why: "Watching a recording shows what to fix." },
      { q: "A quick way to calm down just before you start is:", options: ["Drink lots of coffee", "Breathe in for 4, out for 6", "Run in place for 5 minutes", "Read all your emails"], answer: 1, why: "Slow breathing settles the body." },
      { q: "Which posture looks confident?", options: ["Arms crossed", "Hands in pockets", "Standing tall, feet shoulder-width apart, hands relaxed", "Leaning on the wall"], answer: 2, why: "An open, steady stance looks calm and confident." },
      { q: "Good eye contact with a group means:", options: ["Staring at one person the whole time", "Looking at the floor", "Looking at the ceiling", "Looking at one person for a sentence, then another"], answer: 3, why: "It connects with many people in turn." },
      { q: "Compared with normal chat, you should speak:", options: ["A little slower and louder", "Much faster", "In a whisper", "Without any pauses"], answer: 0, why: "Slower and louder helps everyone hear and follow." },
      { q: "Why repeat a question before answering?", options: ["To waste time", "So everyone hears it and you understood it", "To show off", "Because the asker forgot it"], answer: 1, why: "Repeating helps the room and checks your understanding." },
      { q: "A sponsor asks a tricky question. A good \"bridge\" is:", options: ["\"No comment.\" and walk away", "\"That's a stupid question.\"", "\"What I can tell you is...\" then back to your main message", "Making up numbers"], answer: 2, why: "A bridge answers politely and returns to your message." },
      { q: "Someone raises an off-topic complaint during Q&A. What is best?", options: ["Argue until they stop", "Ignore them completely", "End the talk early", "Stay polite and offer to talk after"], answer: 3, why: "It respects them and protects the time for everyone." },
      { q: "What should be the last thing people hear after Q&A?", options: ["Your close and big idea again", "An apology", "\"Um, OK, bye.\"", "A new topic"], answer: 0, why: "Ending with your close makes the big idea stick." }
    ]
  }
};
