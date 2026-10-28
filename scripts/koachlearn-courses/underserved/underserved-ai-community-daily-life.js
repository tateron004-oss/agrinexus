"use strict";

// Koach Learn course: Undeserved Community -> "AI for Community and Daily Life". Skill-building course (shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js).
// Audience: adults in low-income and underserved communities, some new to technology. Free tools; family and community examples.

module.exports = {
  id: "underserved-ai-community-daily-life",
  category: "Undeserved Community",
  name: "AI for Community and Daily Life",
  skills: "Planning a family week, Making a budget meal plan, Finding and checking local help, Running a community meeting, Writing clear group messages",
  outcome: "use a free AI assistant to organize daily life and community work: plan your family's week and meals on a budget, find local help and check it, and organize a small community meeting with an agenda, a reminder and a resource list.",
  about: [
    "Life gets busy: work shifts, school pick-ups, appointments, church, sports, and helping neighbors. A free AI assistant can take some of the planning off your shoulders.",
    "In Chapter 1 you will plan a family week and a budget meal plan, and find local help when money is tight. In Chapter 2 you will use AI to bring your community together: a meeting agenda, clear group messages and a list of local resources.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task. A knowledge check ends each chapter, and a 20-question quiz ends the course."
  ],
  finalTask: "Organize a small meeting for a group you belong to (a block club, parent group, church group or tenants' group). Use an AI assistant to write a one-page agenda and a short reminder message, then make a list of three local help resources (for example food, utilities and job help) that you checked yourself on official websites or through 211.",
  chapters: [
    {
      name: "Chapter 1: AI at home",
      lessons: [
        {
          title: "Planning your family's week",
          minutes: 5,
          goal: "Use an AI assistant to turn a messy week into a clear schedule.",
          text: [
            "When work shifts, school, appointments and errands pile up, it is easy to forget something. An AI assistant can sort your list into a day-by-day plan.",
            "Type everything you need to do this week in any order, with times you already know. Use first names or roles (\"my oldest\", \"Grandma\") instead of full names. Then ask: \"Put this into a day-by-day schedule. Show what clashes.\"",
            "Look for clashes, where two things happen at the same time. Ask the AI for ideas, like a carpool or moving an errand, but you make the final choice."
          ],
          steps: ["List everything for the week, in any order, with known times.", "Ask the AI to sort it into a day-by-day schedule and show clashes.", "Ask for ideas to fix each clash.", "Copy the final plan to your phone calendar or a paper on the fridge."],
          words: [["Schedule", "a plan that shows what happens on each day and at what time."], ["Clash", "when two things are planned for the same time."]],
          slides: [
            { title: "Too much to remember?", bullets: ["Shifts, school, appointments, errands", "AI can sort it into a plan"] },
            { title: "How to ask", bullets: ["List everything, any order", "Use first names or roles, not full names", "\"Make a day-by-day schedule. Show clashes.\""] },
            { title: "Fix clashes", bullets: ["Ask for ideas: carpool, move an errand", "You make the final choice", "Put it on your calendar or fridge"] }
          ],
          tryIt: "List everything your household has to do this week. Ask an AI assistant to turn it into a day-by-day schedule and point out any clashes.",
          youCanNow: "turn a busy week into a clear schedule and spot clashes early."
        },
        {
          title: "Making a meal plan on a budget",
          minutes: 5,
          goal: "Make a week of meals and a shopping list that fits your budget.",
          text: [
            "An AI assistant can plan meals around what you already have, what your family likes, and how much you can spend.",
            "Tell it: how many people, your budget, foods your family likes or cannot eat, what is in your kitchen, and how much time you have to cook. Ask for a shopping list grouped by store section.",
            "AI does not know today's prices at your store, so treat its cost guesses as rough. Check the store's weekly ad or app. For health needs like diabetes or allergies, follow your doctor's or dietitian's advice."
          ],
          steps: ["Check what food you already have.", "Tell the AI the number of people, budget, likes, allergies and cooking time.", "Ask for five dinners and a shopping list grouped by store section.", "Compare with your store's real prices and adjust."],
          words: [["Budget", "the amount of money you plan to spend."], ["Staples", "basic foods you use often, like rice, beans, flour and oil."]],
          slides: [
            { title: "AI can plan meals", bullets: ["Around what you already have", "Around what your family likes", "Around your budget"] },
            { title: "Tell it", bullets: ["Number of people and budget", "Likes, allergies, cooking time", "What is already in your kitchen"] },
            { title: "Check before you shop", bullets: ["AI does not know today's prices", "Check the store ad or app", "Health needs: follow your doctor"] }
          ],
          tryIt: "Ask an AI assistant for five dinners for your household using foods you already have plus a budget you choose, with a shopping list grouped by store section.",
          youCanNow: "make a budget meal plan and shopping list with AI, and check it against real prices."
        },
        {
          title: "Finding local help when money is tight",
          minutes: 5,
          goal: "Find a local resource for a real need and check it with an official source.",
          text: [
            "Many families need help sometimes: with food, rent, utility bills, child care or a job. Asking for help is part of taking care of your family.",
            "211 is a confidential line that connects people to local help with housing, food, transportation, health care and more. You can dial 211, and many areas also offer text or web chat. Your library and local community center also keep lists of local help.",
            "An AI assistant can help you understand what kinds of help exist and what questions to ask. But it may list places that closed or programs that changed. Always confirm with 211, the program's official website, or a phone call."
          ],
          steps: ["Name the need: food, rent, utilities, child care or jobs.", "Ask an AI what kinds of programs usually help and what to ask them.", "Dial 211 or visit 211.org to find real local programs.", "Call or check the program's official website before you go."],
          words: [["Resource", "a place, program or person that can help with a need."], ["Confidential", "kept private; not shared without your permission."]],
          sources: [{ name: "211.org: About 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Asking for help is strength", bullets: ["Food, rent, utilities, child care, jobs", "Many local programs exist"] },
            { title: "211 connects you", bullets: ["Dial 211, any time", "Confidential, and can be anonymous", "Also: library and community center lists"] },
            { title: "Use AI, then confirm", bullets: ["AI explains what kinds of help exist", "It may list closed places", "Confirm with 211 or the official site"] }
          ],
          tryIt: "Pick one need your family or a neighbor has. Ask an AI what kinds of programs help with it. Then find one real local program through 211.org or by dialing 211, and write down its official phone number.",
          youCanNow: "find a local resource for a real need and confirm it with an official source."
        }
      ],
      check: {
        title: "Knowledge Check 1: AI at home",
        questions: [
          { q: "When listing your family's week for an AI, how should you name people?", options: ["Full names with birthdays", "First names or roles like \"my oldest\"", "Social Security numbers", "Home address for each person"], answer: 1, why: "First names or roles keep private details out." },
          { q: "What is a clash in a schedule?", options: ["Two things planned for the same time", "A free day", "A holiday", "A cancelled plan"], answer: 0, why: "A clash is when two plans overlap." },
          { q: "The AI says your shopping list will cost $42. What do you do?", options: ["Trust it exactly", "Pay $42 before you shop", "Treat it as a rough guess and check the store's prices", "Ignore the list"], answer: 2, why: "AI does not know today's prices at your store." },
          { q: "Your child has a food allergy. Whose advice comes first for meal plans?", options: ["The AI", "A social media post", "A random website", "Your doctor or dietitian"], answer: 3, why: "Health needs follow a professional's advice." },
          { q: "AI lists a food pantry near you. What should you do before going?", options: ["Confirm it with 211, its official site, or a phone call", "Just go", "Post it online", "Ask the AI again"], answer: 0, why: "AI can list places that closed; confirm first." }
        ]
      }
    },
    {
      name: "Chapter 2: AI for your community",
      lessons: [
        {
          title: "Making a meeting agenda",
          minutes: 5,
          goal: "Use an AI assistant to write a clear one-page meeting agenda.",
          text: [
            "Community groups get more done when meetings have a plan. An agenda is a short list of what the meeting will cover, in order, with how much time for each part.",
            "Tell the AI the group, the goal, how long the meeting is, and the topics. For example: \"Make a one-hour agenda for our tenants' group. Topics: broken laundry machines, a summer cookout, and choosing a new secretary. Leave time for questions.\"",
            "Read it with your group's needs in mind. Move topics around, add a welcome, and make sure the most important topic is not squeezed at the end."
          ],
          steps: ["Write down the group, goal, length and topics.", "Ask the AI for a one-page agenda with times for each topic.", "Put the most important topic early.", "Add a welcome and time for questions, then share it before the meeting."],
          words: [["Agenda", "a list of topics for a meeting, in order, with times."], ["Secretary", "the person in a group who takes notes and keeps records."]],
          slides: [
            { title: "Meetings need a plan", bullets: ["An agenda lists topics in order", "Each topic gets a time"] },
            { title: "Tell the AI", bullets: ["The group and the goal", "How long the meeting is", "The topics"] },
            { title: "Make it work for you", bullets: ["Most important topic early", "Add a welcome and questions", "Share it before the meeting"] }
          ],
          tryIt: "Ask an AI assistant to write a one-hour agenda for a real group you belong to, with three topics and time for questions.",
          youCanNow: "make a clear meeting agenda with an AI assistant."
        },
        {
          title: "Writing clear group messages and notes",
          minutes: 5,
          goal: "Write a meeting reminder and turn rough notes into a short summary.",
          text: [
            "A good reminder says what, when, where, and what to bring, in a few short lines. Ask the AI for one in a friendly tone, and for a second version in another language if your group needs it.",
            "After the meeting, AI can turn rough notes into a clean summary: what was decided, who will do what, and by when. Leave out private details, like someone's health or money troubles.",
            "Before sending, check names, dates and decisions with someone who was there. A summary must match what really happened."
          ],
          steps: ["Ask for a friendly reminder with what, when, where and what to bring.", "Ask for a second-language version if needed.", "After the meeting, paste your rough notes without private details.", "Ask for a summary: decisions, who does what, and by when.", "Check it with someone who was there, then send."],
          words: [["Summary", "a short version that keeps only the main points."], ["Action item", "a task someone agreed to do after a meeting."]],
          slides: [
            { title: "A good reminder", bullets: ["What, when, where, what to bring", "Short and friendly", "Second language if needed"] },
            { title: "Notes to summary", bullets: ["Paste rough notes, no private details", "Ask for decisions and action items", "Who does what, by when"] },
            { title: "Check before sending", bullets: ["Names, dates and decisions", "Ask someone who was there"] }
          ],
          tryIt: "Ask an AI assistant for a three-line reminder for the meeting from Lesson 4. Then write five rough practice notes and ask it to turn them into a summary with action items.",
          youCanNow: "write clear meeting reminders and turn notes into a summary with action items."
        },
        {
          title: "Making a community resource list",
          minutes: 5,
          goal: "Make a one-page list of local help that you checked yourself.",
          text: [
            "A resource list helps neighbors find help fast. Keep it to one page: the type of help, the program name, the official phone number or website, and the hours.",
            "Use AI to set up the layout and explain each program in one plain sentence. Get the real names, numbers and hours from 211, the program's official website, or a phone call, not from the AI.",
            "Put the date at the bottom (\"Checked on ...\"). Programs change, so check the list again every few months."
          ],
          steps: ["Choose three needs your community has.", "Find one real program for each through 211 or official websites.", "Ask the AI for a simple one-page layout and a plain one-line description of each.", "Fill in the official numbers and hours yourself.", "Add the date you checked it."],
          words: [["Layout", "how words and boxes are arranged on a page."]],
          sources: [{ name: "211.org: find your local 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "One-page resource list", bullets: ["Type of help and program name", "Official phone or website", "Hours"] },
            { title: "Who does what", bullets: ["AI: layout and plain descriptions", "You: real names, numbers, hours from official sources"] },
            { title: "Keep it current", bullets: ["Write \"Checked on\" and the date", "Check again every few months"] }
          ],
          tryIt: "Final task: organize a small meeting for your group with an AI-written agenda and a reminder message, and make a one-page list of three local help resources you checked yourself.",
          youCanNow: "organize a community meeting and share a checked list of local help."
        }
      ],
      check: {
        title: "Knowledge Check 2: AI for your community",
        questions: [
          { q: "What is an agenda?", options: ["A list of meeting topics, in order, with times", "A bill", "A group chat", "A sign-in sheet"], answer: 0, why: "An agenda plans what the meeting covers." },
          { q: "Where should the most important topic go on an agenda?", options: ["At the very end", "Early in the meeting", "Not on the agenda", "In a separate meeting next year"], answer: 1, why: "Early topics get the most time and attention." },
          { q: "A good meeting reminder includes:", options: ["Everyone's phone numbers", "Members' home addresses", "What, when, where and what to bring", "A long history of the group"], answer: 2, why: "Those four details are what people need." },
          { q: "Your notes mention a member's medical problem. Before giving them to AI, you:", options: ["Leave it in", "Add more detail", "Share it in the group chat", "Take that private detail out"], answer: 3, why: "Private details about others stay out of AI tools." },
          { q: "Where should the phone numbers on a resource list come from?", options: ["211 or the program's official website", "Whatever the AI says", "A guess", "An old flyer from years ago"], answer: 0, why: "AI can give wrong numbers; official sources are right." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Community and Daily Life",
    questions: [
      { q: "To plan your family's week with AI, first:", options: ["List everything you need to do, with known times", "Type your bank number", "Buy a planner app", "Call 211"], answer: 0, why: "The AI needs your list to sort it." },
      { q: "Which is a safe way to name family members in a prompt?", options: ["Full names and birthdates", "\"My oldest\" or first names", "School ID numbers", "Social Security numbers"], answer: 1, why: "Roles or first names keep details private." },
      { q: "When the AI finds a clash, you:", options: ["Let the AI decide", "Ignore it", "Ask for ideas, then make the final choice", "Cancel everything"], answer: 2, why: "AI suggests; you decide." },
      { q: "A meal plan prompt should include:", options: ["Your password", "Your address", "Your bank PIN", "Number of people, budget, likes and allergies"], answer: 3, why: "Those details shape a useful plan." },
      { q: "Why check the store's weekly ad after AI makes your list?", options: ["AI does not know today's prices", "AI always overcharges", "Stores require it", "It is the law"], answer: 0, why: "AI cost guesses are rough." },
      { q: "Staples are:", options: ["Office supplies only", "Basic foods you use often, like rice and beans", "Fancy desserts", "Restaurant meals"], answer: 1, why: "Staples are basic everyday foods." },
      { q: "211 is:", options: ["An AI app", "A store", "A confidential line connecting people to local help", "A bank"], answer: 2, why: "211 connects you to local help." },
      { q: "Calls to 211 are:", options: ["Shared online", "Recorded for ads", "Only for businesses", "Confidential and can be anonymous"], answer: 3, why: "211 says calls are confidential and can be anonymous." },
      { q: "An AI gives you a list of food pantries. Before you go, you:", options: ["Confirm one with 211, its official site or a call", "Go to all of them", "Trust it completely", "Post the list online"], answer: 0, why: "Programs close or change; confirm first." },
      { q: "Asking for help with food or bills is:", options: ["Something to hide", "Part of taking care of your family", "Not allowed", "Only for other people"], answer: 1, why: "Using local help is a smart, normal step." },
      { q: "A meeting agenda should include:", options: ["Only the date", "Members' phone numbers", "Topics in order with times", "Everyone's address"], answer: 2, why: "Topics and times keep the meeting on track." },
      { q: "A good agenda prompt tells the AI:", options: ["Nothing", "Your password", "Your bank", "The group, goal, length and topics"], answer: 3, why: "Those details shape a useful agenda." },
      { q: "When should you share the agenda?", options: ["Before the meeting", "Never", "A month after", "Only to the chair"], answer: 0, why: "Sharing early helps people come ready." },
      { q: "Your group has members who speak Spanish. For the reminder you can:", options: ["Skip them", "Ask the AI for a second-language version", "Only use pictures", "Send nothing"], answer: 1, why: "A second-language version includes more members." },
      { q: "An action item is:", options: ["A movie", "A type of app", "A task someone agreed to do after a meeting", "A snack"], answer: 2, why: "Action items say who does what, by when." },
      { q: "Before sending a meeting summary, you should:", options: ["Add private details", "Send it without reading", "Delete the notes", "Check it with someone who was there"], answer: 3, why: "A summary must match what happened." },
      { q: "On a resource list, who should fill in phone numbers and hours?", options: ["You, from official sources", "The AI", "Nobody", "A pop-up ad"], answer: 0, why: "Official sources give correct numbers." },
      { q: "Why add \"Checked on\" and a date to your resource list?", options: ["It looks nice", "Programs change, so people know how current it is", "The law requires it", "To make it longer"], answer: 1, why: "A date shows when it was last confirmed." },
      { q: "How often should you recheck a resource list?", options: ["Never", "Every ten years", "Every few months", "Only if someone complains"], answer: 2, why: "Programs change, so recheck often." },
      { q: "In the final task, the resource list has:", options: ["Ten places the AI made up", "Members' home addresses", "Only one place", "Three local resources you checked yourself"], answer: 3, why: "The task is three resources you confirmed." }
    ]
  }
};
