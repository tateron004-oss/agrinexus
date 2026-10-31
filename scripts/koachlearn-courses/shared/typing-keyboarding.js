"use strict";

// Koach Learn course (wave 3): "Typing and Keyboarding Skills". Goes past the keyboard basics in shared/basic-computer-skills.js: safe set-up, touch typing by the home row,
// numbers and the number pad, measuring speed and accuracy, editing shortcuts, and a personal practice plan for a job typing test. ADDIE parts follow re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "typing-keyboarding",
  category: "Workforce Development",
  name: "Typing and Keyboarding Skills",
  skills: "Safe typing posture, Touch typing from the home row, Numbers and the number pad, Measuring speed and accuracy, Keyboard shortcuts, Planning daily practice",
  outcome: "set up a safe typing space, type without looking at the keys from the home row, enter numbers and symbols, measure your own speed and accuracy, use the main editing shortcuts, and follow a four-week practice plan to get ready for a job typing test.",
  about: [
    "Many jobs ask you to type: office and front-desk work, customer service chat, data entry, medical records, school work and online applications. Some employers give a short typing test before they hire. This course is for young people looking for a first job, adults changing careers, seniors who want to type with less effort, and anyone who types with two fingers and wants to do better.",
    "You will set up your chair and keyboard so typing does not hurt, learn where each finger goes, practice numbers and symbols, time yourself and work out your words per minute and accuracy, and learn the shortcuts that save time at work. At the end you write your own four-week practice plan with a starting score and a goal.",
    "You only need a computer keyboard and any program you can type in, such as Notepad, TextEdit, Google Docs or Microsoft Word. A free practice site helps but is not required: every drill also works with a text editor, paper and a phone timer.",
    "Each lesson takes about five minutes, followed by a \"Try it now\" drill and a two-question quick check. There is a knowledge check after each chapter and a 20-question quiz at the end. Typing gets better with daily practice, so the course gives you a plan, not a shortcut."
  ],
  finalTask: "Make your four-week typing practice plan. Take a one-minute timed test and write down your starting words per minute and accuracy, set a goal for both, and write a daily plan with dates: 10 to 15 minutes a day with a warm-up, a drill for your weakest keys, a number or shortcut drill, and one timed test a week. Add a log table to fill in each week and a note on how you will take a job typing test.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Job seekers of all ages: young people looking for a first job, adults changing careers or going back to work, seniors, people coming home from prison and second-language speakers. Many use a phone every day but type on a computer with two fingers while looking at the keys.",
    startingPoint: "Can turn on a computer, open a program and type a sentence by looking at the keys (as taught in \"Basic Computer Skills\"). Most have never learned the home row, do not know their speed, and use the mouse for every copy, paste and undo.",
    gap: "Office, customer service, data entry and healthcare jobs expect steady, accurate typing, and some employers test typing speed before hiring. Hunt-and-peck typing is slow, tiring and full of mistakes. Learners need correct finger habits, a way to measure progress, safe posture and a daily plan they can keep up on their own.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6)",
      "Devices: a desktop or laptop keyboard; a phone or tablet screen keyboard does not work for touch-typing drills",
      "Some learners only have a library or program computer for short sessions",
      "Time: 4 to 6 minute lessons plus 10 to 15 minutes of daily practice",
      "Comfort and health: stop if typing causes pain or numbness and talk to a health professional"
    ],
    prerequisites: "Able to turn on a computer and open a program to type in. Learners who have never used a computer take \"Basic Computer Skills\" first."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a chair, a desk and a computer", action: "set up the chair, keyboard and screen and sit in a safe typing posture", standard: "meeting at least 5 of the 6 points on the set-up checklist" },
    { id: "O2", condition: "Using a computer keyboard", action: "place your fingers on the home row and press each letter key with the correct finger", standard: "typing a full line of drill without looking at the keys" },
    { id: "O3", condition: "Given a one-minute or longer timed typing test", action: "calculate your words per minute and your accuracy", standard: "with both numbers worked out correctly" },
    { id: "O4", condition: "Given a list of phone numbers, prices, dates and capitals", action: "type numbers, symbols and capital letters with the number row, the Shift keys and the number pad", standard: "with no more than 2 mistakes in 10 lines" },
    { id: "O5", condition: "While typing and fixing a short document", action: "use keyboard shortcuts to select, copy, paste, undo and save", standard: "doing all five without the mouse" },
    { id: "O6", condition: "Using your own starting test score", action: "write a four-week practice plan with a goal, daily drills, dates and a log", standard: "that meets every row of the course rubric" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting your hands ready",
      lessons: [
        {
          title: "Setting up to type safely",
          objectives: ["O1"],
          minutes: 5,
          goal: "Set up your chair, keyboard and screen and sit in a posture that does not strain your body.",
          text: [
            "Typing for hours in a bad position can cause pain in your neck, back, wrists and hands. A good set-up costs nothing and helps you type faster, because relaxed hands move more easily.",
            "OSHA, the US workplace safety agency, describes a neutral posture for computer work: head and neck balanced in line with your body, shoulders relaxed, elbows close to your body, wrists and hands straight in line with your forearms, lower back supported and feet flat on the floor. The top of the screen should be at or just below eye level. There is no one perfect position for everyone, so adjust until it feels easy.",
            "Keep the keyboard close, so you do not reach. Let your fingers float over the keys and tap them lightly; do not rest your wrists hard on the desk edge while typing. Take short breaks to stand, stretch and look away from the screen. If typing ever causes pain, tingling or numbness that does not go away, stop and talk to a doctor or nurse."
          ],
          steps: ["Sit back in the chair so your lower back is supported. Use a rolled towel or cushion if needed.", "Put your feet flat on the floor or on a box or footrest.", "Pull the keyboard close so your elbows stay near your sides.", "Keep your wrists straight, in line with your forearms, and your shoulders relaxed.", "Move the screen so the top is at or just below eye level.", "Plan a short break to stand and stretch about every 30 to 60 minutes."],
          words: [["Posture", "the way you hold your body when you sit or stand."], ["Neutral posture", "a relaxed, balanced position where your joints are not bent or twisted."], ["Ergonomics", "setting up work and tools so they fit your body and do not hurt it."], ["OSHA", "the Occupational Safety and Health Administration, the US agency for workplace safety."]],
          slides: [
            { title: "Why set-up matters", bullets: ["Bad posture can hurt your neck, back and wrists", "Relaxed hands type faster", "A good set-up is free"] },
            { title: "The neutral posture", bullets: ["Head in line with your body, shoulders relaxed", "Elbows close, wrists straight", "Lower back supported, feet flat"] },
            { title: "Keyboard and screen", bullets: ["Keyboard close so you do not reach", "Top of the screen at or just below eye level", "Tap keys lightly; let fingers float"] },
            { title: "Look after your body", bullets: ["Take short breaks to stand and stretch", "Pain, tingling or numbness: stop and see a doctor or nurse"] }
          ],
          sources: [{ name: "OSHA: Computer Workstations eTool", url: "https://www.osha.gov/etools/computer-workstations" }],
          tryIt: "Copy this six-point checklist on paper: back supported, feet flat, elbows close, wrists straight, shoulders relaxed, screen top at or below eye level. Sit at the computer you will practice on, tick each point you meet, and fix any you do not.",
          youCanNow: "set up a chair, keyboard and screen for safe typing and check your posture with a six-point checklist.",
          quickCheck: [
            { objective: "O1", q: "Where should the top of your computer screen be?", options: ["Well above your head", "At or just below eye level", "Flat on the desk", "Next to your knees"], answer: 1, why: "OSHA's guidance puts the top of the monitor at or just below eye level so your neck stays balanced." },
            { objective: "O1", q: "Your wrists bend up sharply while you type. What do you change?", options: ["Type faster to finish sooner", "Push the keyboard further away", "Lift your shoulders", "Adjust the chair or keyboard so your wrists are straight"], answer: 3, why: "Wrists should be straight, in line with your forearms; bent wrists add strain." }
          ]
        },
        {
          title: "The home row and the finger map",
          objectives: ["O2"],
          minutes: 6,
          goal: "Place your fingers on the home row and press each letter key with the right finger without looking.",
          text: [
            "Touch typing means typing without looking at the keys. Each finger has its own keys, so your hands learn where the letters are. It feels slower at first, but after a few weeks of practice it becomes faster and more accurate than looking.",
            "Your fingers start and return to the home row. Left hand: little finger on A, ring finger on S, middle finger on D, pointer on F. Right hand: pointer on J, middle on K, ring on L, little finger on the semicolon (;). Your thumbs rest on the space bar. Most keyboards have a small bump on F and J so you can find home without looking.",
            "Each finger reaches up and down from its home key. Left pinky: Q, A, Z. Left ring: W, S, X. Left middle: E, D, C. Left pointer: R, F, V and also T, G, B. Right pointer: Y, H, N and also U, J, M. Right middle: I, K and the comma. Right ring: O, L and the period. Right pinky: P, the semicolon, the slash and the Enter key. After each reach, the finger goes back home."
          ],
          steps: ["Find the bumps on F and J with your pointer fingers.", "Rest the other fingers on A S D and K L ;, thumbs on the space bar.", "Look at the screen, not your hands. Cover your hands with a cloth if you keep looking.", "Type slowly: reach with the correct finger, then return it home.", "Say each letter quietly as you type it at first, and keep a steady rhythm."],
          words: [["Touch typing", "typing without looking at the keys, using the same finger for each key every time."], ["Home row", "the middle row of letters where your fingers rest: A S D F and J K L ;."], ["Hunt and peck", "looking for each key and pressing it with one or two fingers."], ["Reach", "moving a finger from its home key to another key and back."]],
          slides: [
            { title: "Touch typing", bullets: ["Type without looking at the keys", "Each finger owns its own keys", "Slower at first, faster after practice"] },
            { title: "Home row", bullets: ["Left: A S D F", "Right: J K L ;", "Thumbs on the space bar; bumps on F and J"] },
            { title: "Reaches", bullets: ["Each finger reaches up or down from home", "Pointers also cover T G B and Y H N", "Go back home after every reach"] },
            { title: "Habits that work", bullets: ["Eyes on the screen", "Slow and steady rhythm", "Accuracy first; speed comes later"] }
          ],
          tryIt: "Open Notepad, TextEdit, Google Docs or Word. Without looking at your hands, type each line three times: asdf jkl; then fdsa ;lkj then sad lad fall flask then dad has a glass. Then type: the quick brown fox jumps over the lazy dog. Count how many times you looked down.",
          youCanNow: "find the home row by feel, use the right finger for each letter, and practice a line without looking at the keys.",
          quickCheck: [
            { objective: "O2", q: "Which keys have small bumps to help you find the home row?", options: ["F and J", "A and ;", "Q and P", "Z and M"], answer: 0, why: "The bumps on F and J let your pointer fingers find home without looking." },
            { objective: "O2", q: "Which finger types the letter E?", options: ["Right pointer", "Left pinky", "Left middle finger", "Right thumb"], answer: 2, why: "E is the reach up from D, which belongs to the left middle finger." }
          ]
        },
        {
          title: "Capitals, numbers, symbols and the number pad",
          objectives: ["O4"],
          minutes: 6,
          goal: "Type capital letters, numbers and common symbols, and enter numbers on the number pad.",
          text: [
            "For a capital letter, hold the Shift key with the little finger of the OTHER hand, press the letter, then let go. For a capital A (left hand), use the right Shift. For a capital J (right hand), use the left Shift. Caps Lock is for typing a whole word in capitals; turn it off after.",
            "The number row is above the letters. Each finger reaches up from its home key: left pinky types 1, left ring 2, left middle 3, left pointer 4 and 5, right pointer 6 and 7, right middle 8, right ring 9, right pinky 0. Symbols on the same keys, such as $ % @ # and !, need Shift.",
            "Many desktop keyboards have a number pad on the right, laid out like a calculator. Data entry, billing, banking and stock jobs use it a lot. Turn on Num Lock. Rest the right pointer on 4, middle finger on 5 (it has a bump) and ring finger on 6. The thumb presses 0 and the little finger presses Enter. Many laptops have no number pad; then use the number row."
          ],
          steps: ["Capitals: hold Shift with the opposite hand's little finger, press the letter, let go.", "Number row: reach up from home with the same finger, then come back.", "Symbols: hold Shift and press the number key that shows the symbol.", "Number pad: turn on Num Lock and rest on 4 5 6, using the bump on 5.", "Check numbers twice; one wrong digit in a price or phone number is a real error."],
          words: [["Shift key", "the key you hold down to get a capital letter or the top symbol on a key."], ["Caps Lock", "a key that makes every letter a capital until you press it again."], ["Number pad", "the block of number keys on the right side of many keyboards, also called the numeric keypad or 10-key."], ["Num Lock", "the key that turns the number pad's numbers on."], ["Data entry", "typing information such as names, numbers and codes into a computer system."]],
          slides: [
            { title: "Capital letters", bullets: ["Hold Shift with the opposite hand", "Capital A: right Shift; capital J: left Shift", "Caps Lock only for whole words"] },
            { title: "Number row and symbols", bullets: ["Reach up from home with the same finger", "Symbols such as $ % @ need Shift", "Come back home after each reach"] },
            { title: "The number pad (10-key)", bullets: ["Turn on Num Lock", "Rest on 4 5 6; the bump is on 5", "Thumb on 0, little finger on Enter"] },
            { title: "Numbers must be exact", bullets: ["One wrong digit is a real mistake", "Check prices, dates and phone numbers twice"] }
          ],
          tryIt: "Type these ten lines, then check each one against the page: (555) 014-2290 | $12.75 | 03/15/2026 | Order #4471 | 40% off | Maria Lopez | Dr. Kim, Room 210 | 7:30 a.m. | ID 88-31-05 | Total: $1,049.60. Use the number pad if you have one. Count your mistakes and practice the lines you missed.",
          youCanNow: "type capitals with the opposite Shift key, enter numbers and symbols from the number row, and use the number pad from 4 5 6.",
          quickCheck: [
            { objective: "O4", q: "You want a capital P (a right-hand key). Which Shift do you hold?", options: ["The right Shift", "Caps Lock", "Either Shift with the same hand", "The left Shift"], answer: 3, why: "Use the Shift on the opposite hand, so the right hand is free to press P." },
            { objective: "O4", q: "On the number pad, where does your middle finger rest?", options: ["On 0", "On 5, the key with the bump", "On Enter", "On 9"], answer: 1, why: "The number pad home keys are 4 5 6, and 5 has the bump for your middle finger." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting your hands ready",
        questions: [
          { objective: "O1", q: "Which is part of a safe typing posture?", options: ["Feet flat on the floor and lower back supported", "Shoulders lifted toward your ears", "Wrists bent up high", "Keyboard at arm's length"], answer: 0, why: "Feet flat, back supported and relaxed shoulders are part of the neutral posture OSHA describes." },
          { objective: "O1", q: "After an hour of typing your hand tingles and it does not go away. What do you do?", options: ["Type harder to warm it up", "Ignore it and keep going", "Stop and talk to a doctor or nurse", "Switch to typing with one finger"], answer: 2, why: "Lasting pain, tingling or numbness is a sign to stop and get it checked by a health professional." },
          { objective: "O2", q: "Where does your right pointer finger rest?", options: ["On F", "On H", "On ;", "On J"], answer: 3, why: "The right pointer rests on J, the key with the bump." },
          { objective: "O2", q: "You keep looking down at your hands. What helps most?", options: ["Look at the keys more carefully", "Cover your hands with a cloth and type slowly", "Type with two fingers instead", "Turn off the screen"], answer: 1, why: "Covering your hands makes you rely on finger memory, which is how touch typing is learned." },
          { objective: "O4", q: "A job form needs a price: $49.99. How do you type the $ sign?", options: ["Hold Shift and press the 4 key", "Press Caps Lock, then 4", "Press the 4 key twice", "Hold Shift and press the S key"], answer: 0, why: "The $ is the Shift symbol on the 4 key in the number row of a US keyboard." }
        ]
      }
    },
    {
      name: "Chapter 2: Speed, accuracy and a plan",
      lessons: [
        {
          title: "Measuring your speed and accuracy",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculate your words per minute and accuracy from a timed typing test.",
          text: [
            "Typing speed is counted in words per minute (WPM). Because words have different lengths, typing tests count every 5 characters (letters, spaces and punctuation) as one word. So if you type 200 characters in one minute, that is 200 divided by 5 = 40 WPM. For a longer test, divide by the minutes too: 450 characters in 3 minutes is 90 words divided by 3 = 30 WPM.",
            "Accuracy tells you how many of your words were right. Accuracy = correct words divided by all words typed, times 100. If you typed 50 words and 4 had mistakes, accuracy is 46 divided by 50 = 92%. Some tests also give net WPM, which takes off for mistakes: errors divided by minutes, subtracted from your speed.",
            "Accuracy matters more than speed. A fast typist who makes many mistakes is slow at work, because every mistake must be found and fixed. Build accuracy first, then speed. You can time yourself with a phone timer and a text editor (many programs show a character count), or use a free practice site such as typing.com, which shows speed and accuracy for you."
          ],
          steps: ["Choose a paragraph you have not practiced, from a book, a news story or a job post.", "Set a timer for 1 minute (or 3 minutes for a steadier score).", "Type at your normal pace without stopping to fix mistakes.", "Count the characters, including spaces, or use the program's character count.", "Speed: characters divided by 5, then divided by the minutes.", "Accuracy: correct words divided by words typed, times 100. Write both down with the date."],
          words: [["WPM", "words per minute: how many words you type in one minute."], ["Standard word", "5 characters, including spaces and punctuation, counted as one word in typing tests."], ["Accuracy", "the percent of what you typed that is correct."], ["Net WPM", "your speed after taking off for mistakes."], ["Character", "any letter, number, space or symbol you type."]],
          slides: [
            { title: "Words per minute", bullets: ["Every 5 characters count as 1 word", "200 characters in 1 minute = 40 WPM", "450 characters in 3 minutes = 30 WPM"] },
            { title: "Accuracy", bullets: ["Correct words divided by words typed, times 100", "46 right out of 50 = 92%", "Net WPM takes off for mistakes"] },
            { title: "Accuracy comes first", bullets: ["Every mistake costs time to fix", "Build accuracy, then speed"] },
            { title: "How to test yourself", bullets: ["A new paragraph and a phone timer", "Or a free site such as typing.com", "Write down the score and the date"] }
          ],
          sources: [{ name: "Typing.com (free typing lessons and tests)", url: "https://www.typing.com/" }],
          tryIt: "Take a one-minute test: set a timer, type a new paragraph from a job post or news story, and stop when the timer ends. Count the characters (or use the character count), work out your WPM, mark your mistakes, and work out your accuracy. Write both numbers and today's date at the top of a page. This is your starting score.",
          youCanNow: "time yourself, work out your words per minute and your accuracy, and record a starting score.",
          quickCheck: [
            { objective: "O3", q: "You typed 250 characters in one minute. What is your speed?", options: ["25 WPM", "250 WPM", "100 WPM", "50 WPM"], answer: 3, why: "250 characters divided by 5 is 50 words, in one minute: 50 WPM." },
            { objective: "O3", q: "You typed 40 words and 2 had mistakes. What is your accuracy?", options: ["80%", "98%", "95%", "38%"], answer: 2, why: "38 correct divided by 40 typed is 0.95, which is 95%." }
          ]
        },
        {
          title: "Shortcuts and editing keys that save time",
          objectives: ["O5"],
          minutes: 5,
          goal: "Use keyboard shortcuts to select, copy, paste, undo and save without the mouse.",
          text: [
            "Every time you reach for the mouse, your hands leave the home row. Keyboard shortcuts let you edit without stopping. On Windows they use the Ctrl key; on a Mac most use the Command key instead.",
            "The core five: Ctrl+A selects all, Ctrl+C copies, Ctrl+V pastes, Ctrl+Z undoes your last change, and Ctrl+S saves. Ctrl+X cuts (removes and copies). To do a shortcut, hold Ctrl down, tap the letter, then let go of both.",
            "Editing keys help too. Backspace deletes to the left of the cursor; Delete removes to the right. The arrow keys move the cursor. Home and End jump to the start or end of a line. Hold Shift with an arrow key to select text a letter at a time. In many programs, Ctrl with the left or right arrow jumps a whole word. Fix a mistake when you see it, but do not stop typing to look back at every letter."
          ],
          steps: ["Hold Ctrl (Command on a Mac) with your left little finger.", "Tap the letter: A select all, C copy, X cut, V paste, Z undo, S save.", "Let go of both keys.", "Use Shift with the arrow keys to select part of a line.", "Practice each shortcut five times so it becomes a habit."],
          words: [["Shortcut", "a key combination that does a task without the mouse."], ["Ctrl", "the Control key on a Windows keyboard, used for most shortcuts."], ["Command key", "the key with the symbol on Mac keyboards that does what Ctrl does on Windows."], ["Cursor", "the blinking line that shows where your typing will go."], ["Undo", "take back the last change you made."]],
          slides: [
            { title: "Why shortcuts", bullets: ["Hands stay on the keyboard", "Fewer trips to the mouse", "Windows: Ctrl; Mac: usually Command"] },
            { title: "The core five", bullets: ["Ctrl+A select all, Ctrl+C copy, Ctrl+V paste", "Ctrl+Z undo", "Ctrl+S save; Ctrl+X cut"] },
            { title: "Editing keys", bullets: ["Backspace deletes left; Delete deletes right", "Home and End jump to the line's start or end", "Shift + arrow selects text"] }
          ],
          tryIt: "Type three short lines about a job you want. Then, without touching the mouse: select all (Ctrl+A), copy (Ctrl+C), click to the end with the End and arrow keys, paste (Ctrl+V), undo the paste (Ctrl+Z), and save the file (Ctrl+S). On a Mac, use Command in place of Ctrl. Do it twice.",
          youCanNow: "select, copy, cut, paste, undo and save with the keyboard and move around a line with the editing keys.",
          quickCheck: [
            { objective: "O5", q: "You just deleted a paragraph by accident. Which shortcut brings it back on Windows?", options: ["Ctrl+Z", "Ctrl+S", "Ctrl+A", "Ctrl+P"], answer: 0, why: "Ctrl+Z undoes the last change." },
            { objective: "O5", q: "On a Mac, which key do most shortcuts use instead of Ctrl?", options: ["Shift", "Command", "Caps Lock", "Tab"], answer: 1, why: "Most Mac shortcuts use the Command key where Windows uses Ctrl." }
          ]
        },
        {
          title: "Your practice plan and the job typing test",
          objectives: ["O6", "O3"],
          minutes: 6,
          goal: "Write a four-week practice plan with your starting score, a goal, daily drills and a log.",
          text: [
            "Typing improves with short daily practice, not long weekend sessions. 10 to 15 minutes a day, most days, works better than an hour once a week, because your fingers build habits through repetition. Keep your eyes on the screen and your posture neutral every time.",
            "A good daily session has four parts: a 2-minute warm-up on the home row, a drill on your weakest keys (the ones you missed most in your test), a short drill on numbers or shortcuts, and real text such as a job post or a news story. Once a week, take a timed test and write the score in your log. Set a goal for accuracy first, then speed, and compare each week to your starting score.",
            "Some employers give a typing test before hiring. The job post or the hiring office usually says what is tested and the speed they want; if it does not, ask. Before the test: sit in a good position, warm up for two minutes, read the instructions, and type steadily without rushing. Never pay a website that promises a typing certificate as a condition of getting a job; the employer gives its own test."
          ],
          steps: ["Write your starting WPM, accuracy and the date from Lesson 4.", "Set a goal for week 4: accuracy first, then speed.", "List your weakest keys from your test.", "Plan each day: warm-up, weak-key drill, number or shortcut drill, real text.", "Pick one day a week for a timed test and make a log table: date, WPM, accuracy, note.", "Add a plan for test day: posture, warm-up, read the instructions, steady pace."],
          words: [["Practice plan", "a written schedule of what you will practice, when, and how you will measure progress."], ["Log", "a table where you write your scores each week."], ["Weak keys", "the keys you miss or slow down on most often."], ["Pre-employment test", "a test an employer gives to check a skill before hiring."]],
          slides: [
            { title: "Short and often", bullets: ["10 to 15 minutes a day, most days", "Better than one long session a week", "Eyes on screen, good posture every time"] },
            { title: "A daily session", bullets: ["Warm-up on the home row", "Drill your weakest keys", "Numbers or shortcuts, then real text"] },
            { title: "Track progress", bullets: ["A timed test once a week", "Log: date, WPM, accuracy, note", "Accuracy goal first, then speed"] },
            { title: "The job typing test", bullets: ["The job post or employer says what is tested", "Warm up, read instructions, steady pace", "Never pay a site for a certificate to get hired"] }
          ],
          sources: [{ name: "Typing.com (free typing lessons and tests)", url: "https://www.typing.com/" }],
          tryIt: "Final task: write your four-week practice plan. Put your starting WPM and accuracy from Lesson 4 at the top, set a goal for each, list your weakest keys, and write each day's 10 to 15 minute session with dates. Add a log table with four weekly test rows and a short test-day plan.",
          youCanNow: "write and follow a four-week typing plan with a starting score, goals, daily drills and a weekly log, and prepare for a job typing test.",
          quickCheck: [
            { objective: "O6", q: "Which practice schedule usually builds typing skill best?", options: ["One three-hour session a month", "Only practicing the night before a test", "10 to 15 minutes most days", "Practicing only when you feel like it"], answer: 2, why: "Short, regular practice builds finger habits through repetition." },
            { objective: "O6", q: "What belongs at the top of your practice plan?", options: ["Your Social Security number", "A list of typing websites", "Your favorite song", "Your starting WPM, accuracy and the date"], answer: 3, why: "A starting score lets you set a goal and see your progress each week." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Speed, accuracy and a plan",
        questions: [
          { objective: "O3", q: "In a typing test, how many characters count as one word?", options: ["1", "10", "5", "3"], answer: 2, why: "Typing tests count every 5 characters, including spaces, as one standard word." },
          { objective: "O3", q: "You typed 600 characters in 3 minutes. What is your speed?", options: ["40 WPM", "120 WPM", "200 WPM", "60 WPM"], answer: 0, why: "600 divided by 5 is 120 words; 120 divided by 3 minutes is 40 WPM." },
          { objective: "O5", q: "Which shortcut copies selected text on Windows?", options: ["Ctrl+V", "Ctrl+C", "Ctrl+S", "Ctrl+Z"], answer: 1, why: "Ctrl+C copies; Ctrl+V pastes." },
          { objective: "O5", q: "You want to select a whole document to change the font. What do you press?", options: ["Ctrl+X", "Home", "Backspace", "Ctrl+A"], answer: 3, why: "Ctrl+A selects all the text." },
          { objective: "O6", q: "Your test shows you miss P, Q and Z most. What do you add to your plan?", options: ["A daily drill on P, Q and Z", "Nothing; skip those letters", "Type faster to hide the mistakes", "Only practice the home row"], answer: 0, why: "Drilling your weakest keys is how a plan fixes the mistakes your test found." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Typing and Keyboarding Skills",
    questions: [
      { objective: "O1", q: "In a neutral typing posture, your wrists are:", options: ["Bent up high", "Straight, in line with your forearms", "Resting hard on the desk edge", "Twisted to the side"], answer: 1, why: "Straight wrists in line with the forearms reduce strain." },
      { objective: "O1", q: "Your feet do not reach the floor in the office chair. What can you do?", options: ["Let them hang", "Sit on the edge of the chair", "Cross your legs tightly", "Use a box or footrest so they are flat"], answer: 3, why: "Feet should be flat and supported; a footrest or box does that." },
      { objective: "O1", q: "Why keep the keyboard close to you?", options: ["So your elbows stay near your body and you do not reach", "So you can see the keys better", "So the screen looks bigger", "So you can type with one hand"], answer: 0, why: "A close keyboard keeps elbows close and shoulders relaxed." },
      { objective: "O2", q: "What is touch typing?", options: ["Typing on a touch screen", "Typing with one finger", "Typing without looking at the keys, with set fingers for each key", "Typing only capital letters"], answer: 2, why: "Touch typing uses the same finger for each key so you do not need to look." },
      { objective: "O2", q: "Which keys make up the left-hand home row?", options: ["A S D F", "Q W E R", "Z X C V", "J K L ;"], answer: 0, why: "The left fingers rest on A S D F; the right on J K L ;." },
      { objective: "O2", q: "Your left pointer reaches for T. What does it do next?", options: ["Stays on T", "Goes back to F, its home key", "Moves to the space bar", "Moves to J"], answer: 1, why: "After every reach, the finger returns to its home key." },
      { objective: "O2", q: "Which finger presses the space bar?", options: ["The left pinky", "The right ring finger", "The left pointer", "A thumb"], answer: 3, why: "The thumbs rest on and press the space bar." },
      { objective: "O4", q: "To type a capital S (a left-hand key), you hold:", options: ["The left Shift", "Caps Lock for the whole sentence", "The right Shift", "The Ctrl key"], answer: 2, why: "Use the Shift key on the opposite hand from the letter." },
      { objective: "O4", q: "The number pad types arrows instead of numbers. What do you check?", options: ["That Num Lock is on", "That Caps Lock is on", "That the screen is bright", "That Ctrl is held down"], answer: 0, why: "Num Lock turns the number pad's numbers on." },
      { objective: "O4", q: "You are entering a phone number for a customer. Why check it twice?", options: ["To type faster", "One wrong digit makes the whole number wrong", "Numbers do not count as mistakes", "So the screen saves it"], answer: 1, why: "In numbers, one wrong digit is a real error that can reach the wrong person." },
      { objective: "O3", q: "What does WPM stand for?", options: ["Writing practice method", "Work per month", "Words printed per minute", "Words per minute"], answer: 3, why: "WPM means words per minute, the usual measure of typing speed." },
      { objective: "O3", q: "You typed 300 characters in 2 minutes. What is your speed?", options: ["60 WPM", "150 WPM", "30 WPM", "15 WPM"], answer: 2, why: "300 divided by 5 is 60 words; 60 divided by 2 minutes is 30 WPM." },
      { objective: "O3", q: "You typed 60 words and 6 had mistakes. Your accuracy is:", options: ["90%", "94%", "54%", "10%"], answer: 0, why: "54 correct divided by 60 typed is 0.90, which is 90%." },
      { objective: "O3", q: "Which should you build first?", options: ["Speed, even with many mistakes", "Accuracy, then speed", "Neither; only posture matters", "Speed on the number pad only"], answer: 1, why: "Every mistake takes time to fix, so accuracy first makes you faster at real work." },
      { objective: "O5", q: "Which shortcut saves your file on Windows?", options: ["Ctrl+A", "Ctrl+V", "Ctrl+X", "Ctrl+S"], answer: 3, why: "Ctrl+S saves." },
      { objective: "O5", q: "Why use keyboard shortcuts while typing?", options: ["They make the text bigger", "They turn on Num Lock", "Your hands stay on the keyboard, so you work faster", "They check your spelling"], answer: 2, why: "Shortcuts avoid trips to the mouse and keep your hands near the home row." },
      { objective: "O5", q: "Which key jumps to the end of the line?", options: ["End", "Tab", "Caps Lock", "Shift"], answer: 0, why: "End jumps to the end of the line; Home jumps to the start." },
      { objective: "O6", q: "How often should you take a timed test in your four-week plan?", options: ["Every few minutes", "Once a week, written in your log", "Never; tests slow you down", "Only once, at the very end"], answer: 1, why: "A weekly test in a log shows progress without taking time from practice." },
      { objective: "O6", q: "A website says you must pay for its typing certificate to be hired. What do you do?", options: ["Pay right away", "Give it your bank details to hold a spot", "Send the link to friends to pay", "Do not pay; employers give their own test"], answer: 3, why: "Employers test typing themselves; paying a site to be hired is a warning sign." },
      { objective: "O6", q: "Which daily session fits a good practice plan?", options: ["One hour of only the home row", "Typing anything without looking at the screen", "Warm-up, weak-key drill, number or shortcut drill, then real text", "Only timed tests every day"], answer: 2, why: "A short session that warms up, fixes weak keys and uses real text builds skill steadily." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 7, 10, 12, 14, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Starting score", objective: "O3", notYet: "No starting score, or WPM and accuracy are worked out wrong.", meets: "Starting WPM and accuracy from a timed test, worked out correctly, with the date.", exceeds: "Also shows the working (characters, minutes, mistakes) so someone else can check it." },
      { name: "Goals and dates", objective: "O6", notYet: "No goal, or no dates for the four weeks.", meets: "A goal for accuracy and for speed, with dates for each day or week.", exceeds: "The goal is realistic for 10 to 15 minutes a day and has a checkpoint at week 2." },
      { name: "Daily drills", objective: "O2", notYet: "Practice is just \"type more\".", meets: "Each session has a home-row warm-up, a drill on named weak keys and real text.", exceeds: "Weak keys change week by week based on the log." },
      { name: "Numbers and shortcuts", objective: "O4", notYet: "No number, symbol or shortcut practice in the plan.", meets: "The plan includes number or number-pad lines and the core shortcuts.", exceeds: "The number practice matches a target job, such as prices for retail or IDs for data entry." },
      { name: "Shortcut use", objective: "O5", notYet: "Uses the mouse for every copy, paste, undo and save.", meets: "Can show select all, copy, paste, undo and save with the keyboard.", exceeds: "Also uses Home, End and Shift with the arrows to edit." },
      { name: "Safe set-up and test day", objective: "O1", notYet: "No posture check or test-day plan.", meets: "The plan starts each session with the six-point set-up check and has a test-day plan.", exceeds: "Includes planned breaks and what to do if typing hurts." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Change in WPM and accuracy from the starting score to the week-4 test",
      "Learners who report passing an employer typing or data entry test within 30 days (follow-up survey)",
      "Learners who apply for or start an office, customer service or data entry job within 90 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A desktop or laptop computer with a physical keyboard (a number pad helps but is not required)",
      "Any program to type in: Notepad, TextEdit, Google Docs or Microsoft Word",
      "A phone or kitchen timer, paper and pen for the log",
      "Optional: a free practice site such as typing.com",
      "About 45 minutes for the lessons and checks, plus 10 to 15 minutes of practice most days for four weeks"
    ],
    facilitatorNotes: [
      "Start with the six-point set-up check at every station; adjust chairs and screens before anyone types.",
      "Give the pre-test and a one-minute timed test on day one so every learner has a starting score.",
      "Expect speed to drop for a week or two when learners switch from hunt-and-peck; tell them this is normal.",
      "Let learners who keep looking down cover their hands with a cloth or paper.",
      "Run a group timed test once a week and have learners update their own logs; praise accuracy gains, not just speed.",
      "On shared or library computers, remind learners not to save passwords and to sign out when they finish."
    ]
  }
};
