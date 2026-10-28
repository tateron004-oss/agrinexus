"use strict";

// Koach Learn course: Athletes -> "Sports Management Marketing". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-sports-management-marketing",
  category: "Athletes",
  name: "Sports Management Marketing",
  skills: "Defining an event's offer and audience, Writing a one-page event promotion plan, Building a local sponsor package, Writing a sponsor pitch email with AI, Tracking attendance and sponsor results",
  outcome: "plan the marketing for a real sports event, camp or team season: a one-page promotion plan, a three-level local sponsor package, a sponsor pitch email drafted with AI, and a simple results report for sponsors.",
  about: [
    "This course is for coaches, team managers, athletic staff, club organizers and athletes who run camps, tournaments, fundraisers or a team's season and need people to show up and businesses to support it.",
    "You will learn the basics of sports marketing from the manager's side: who the event is for, how to reach them, how to build a sponsor package a local business can say yes to, and how to report results so sponsors come back.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course. Schools and leagues have their own rules on sponsors, logos and fundraising, so check with your athletic director or league before you start."
  ],
  finalTask: "Choose one real or planned event (a camp, tournament, fundraiser or home game). Write a one-page promotion plan, a three-level sponsor package, and a pitch email to one local business drafted with AI and edited in your own words. Get approval from your athletic director or league, then list the three numbers you will report to sponsors afterward.",
  chapters: [
    {
      name: "Chapter 1: Marketing the event",
      lessons: [
        {
          title: "What you are offering and to whom",
          minutes: 5,
          goal: "Write a one-sentence offer and audience for your event.",
          text: [
            "Every event is an offer: something people get in return for their time or money. A youth camp offers skills and fun in a safe place. A home game offers entertainment and community. A tournament offers competition for teams.",
            "Write your offer in one sentence: \"A two-day beginner soccer camp for kids aged 6 to 10, run by our varsity players, with a T-shirt and snacks, on June 12-13.\" Then name the audience: who decides to come or pay? For a youth camp, that is the parents.",
            "Before you market anything, confirm the basics with your athletic director or league: date, place, cost, insurance, safety and any approval needed."
          ],
          steps: ["Name the event.", "Write what people get.", "Name who decides to come or pay.", "Confirm date, place, cost and approvals with your athletic director or league."],
          words: [["Offer", "what people get in return for their time or money."], ["Athletic director", "the person who runs a school's sports program and approves events."]],
          slides: [
            { title: "Every event is an offer", bullets: ["Camp: skills and fun, safely", "Home game: entertainment and community", "Tournament: competition"] },
            { title: "One-sentence offer", bullets: ["Who it's for, what they get", "When and where"] },
            { title: "Check first", bullets: ["Date, place, cost", "Insurance, safety, approvals"] }
          ],
          tryIt: "Pick a real or planned event. Write its one-sentence offer and name the audience who decides to come or pay.",
          youCanNow: "describe an event's offer and its deciding audience in one sentence."
        },
        {
          title: "The one-page promotion plan",
          minutes: 5,
          goal: "Write a one-page plan with channels, messages and a timeline.",
          text: [
            "A promotion plan answers: where will the audience hear about it, what will we say, and when? Keep it to one page.",
            "Local sports events often do best with a mix: school or club newsletters, the team's social accounts, local Facebook groups, flyers at schools, gyms and stores, word of mouth from players and families, and local news or community calendars.",
            "Use a simple timeline: announce about four to six weeks before, remind two weeks before, push hard the last week, and post thank-yous after. An AI assistant can turn your notes into a clean table."
          ],
          steps: ["List three to five channels.", "Write one main message.", "Make a timeline: announce, remind, last week, thank-you.", "Ask AI to put it into a one-page table.", "Assign who does each task."],
          words: [["Promotion", "telling people about your event so they come."], ["Timeline", "what happens on which dates."]],
          slides: [
            { title: "Three questions", bullets: ["Where will they hear about it?", "What will we say?", "When?"] },
            { title: "Local channels", bullets: ["Newsletters and team social accounts", "Local Facebook groups and flyers", "Word of mouth and community calendars"] },
            { title: "Timeline", bullets: ["Announce 4-6 weeks out", "Remind at 2 weeks", "Push the last week", "Thank people after"] }
          ],
          tryIt: "Ask an AI assistant: \"Turn these notes into a one-page promotion plan table with channel, message, date and who is responsible.\" Paste your event notes and edit the result.",
          youCanNow: "write a one-page promotion plan with channels, a message, a timeline and owners."
        },
        {
          title: "Making promo materials with AI and Canva",
          minutes: 5,
          goal: "Make a flyer and a social post for your event that follow your school's rules.",
          text: [
            "Every promo piece needs the same five facts: what, who it's for, when, where, and how to sign up or get tickets. Add one photo and one reason to come.",
            "Use an AI assistant to draft short wording, then use a free design tool like Canva to build a flyer and a square social post from a template.",
            "Follow your school or league rules on logos, team names and photos of minors. Use photos only with permission, and many schools require a media release from parents before posting photos of students."
          ],
          steps: ["List the five facts.", "Ask AI for a headline and two short lines.", "Build a flyer and a social post in Canva.", "Check logos and photos against your school's rules.", "Have someone else proofread the date, time and link."],
          words: [["Media release", "a signed permission to use someone's photo or video."], ["Proofread", "check carefully for mistakes before sharing."]],
          slides: [
            { title: "Five facts on every piece", bullets: ["What and who it's for", "When and where", "How to sign up or get tickets"] },
            { title: "Make it", bullets: ["AI drafts the wording", "Canva template for flyer and post"] },
            { title: "Before sharing", bullets: ["Logos and team names: follow school rules", "Photos of minors: permission and media release", "Someone else proofreads"] }
          ],
          tryIt: "Make a flyer and a social post for your event. Ask someone else to check the five facts and the sign-up link.",
          youCanNow: "make clear promo materials that follow school and photo rules."
        }
      ],
      check: {
        title: "Knowledge Check 1: Marketing the event",
        questions: [
          { q: "For a youth camp, who is usually the deciding audience?", options: ["The referee", "Rival coaches", "The kids' parents", "The bus driver"], answer: 2, why: "Parents decide and pay for youth camps." },
          { q: "Before marketing an event, you should confirm:", options: ["Date, place, cost and approvals", "The T-shirt color only", "Your follower count", "Nothing"], answer: 0, why: "You can't promote an event that isn't approved and set." },
          { q: "When should you usually announce a local event?", options: ["The day before", "After it happens", "A year later", "About four to six weeks before"], answer: 3, why: "That gives people time to plan, with reminders later." },
          { q: "Which five facts belong on every flyer?", options: ["Score, weather, mascot, color, song", "What, who, when, where, how to sign up", "Your password and address", "Only the logo"], answer: 1, why: "Those let people decide and act." },
          { q: "You want to post photos of camp kids. What do you need?", options: ["Nothing", "Permission and often a parent media release", "A filter", "More hashtags"], answer: 1, why: "Photos of minors need permission under most school rules." }
        ]
      }
    },
    {
      name: "Chapter 2: Sponsors and results",
      lessons: [
        {
          title: "Building a local sponsor package",
          minutes: 6,
          goal: "Build a three-level sponsor package a local business can say yes to.",
          text: [
            "A sponsor is a business that gives money, products or services in return for being seen by your audience. Local businesses like pizza shops, car dealers, gyms and dentists often sponsor school and club sports.",
            "Make it easy with three levels, for example Bronze, Silver and Gold. Each level lists what the sponsor gives and what they get: name on the banner, logo on the T-shirt, a social post thanking them, announcements at games, or a table at the event. Only promise what you can deliver and what your school allows.",
            "Set prices by asking your athletic director what other sponsors have paid and what your costs are. Do not guess big numbers, and keep the money handling within your school or club's official process."
          ],
          steps: ["List what you can offer sponsors that your school allows.", "Group the offers into three levels.", "Ask your athletic director about past prices and your costs.", "Put the package on one page.", "Route money through the official school or club process."],
          words: [["Sponsor", "a business that supports your event in return for being seen."], ["Sponsor package", "a one-page list of sponsor levels, what they give and what they get."]],
          slides: [
            { title: "What a sponsor wants", bullets: ["To be seen by your audience", "Goodwill in the community"] },
            { title: "Three levels", bullets: ["Bronze, Silver, Gold", "What they give and what they get", "Only promise what you can deliver"] },
            { title: "Money", bullets: ["Ask about past prices and your costs", "Use the official school or club process"] }
          ],
          tryIt: "Ask an AI assistant to help you lay out a three-level sponsor package for your event using only the benefits you listed. Fill in prices only after talking to your athletic director.",
          youCanNow: "build a three-level local sponsor package with clear give-and-get."
        },
        {
          title: "Pitching a sponsor with an AI-drafted email",
          minutes: 5,
          goal: "Write and send a short, personal sponsor pitch email.",
          text: [
            "A pitch email is short and personal. It says who you are, what the event is, why their business fits, what you are asking for, and how they benefit. Attach or link the one-page package.",
            "Ask an AI assistant: \"Write a short, friendly email to [business type] asking them to sponsor our youth basketball camp. Mention our audience of 80 local families and our Silver level. Under 150 words.\" Then edit it: add something true and specific about that business and why you chose them.",
            "Follow up once after about a week if you hear nothing. Visiting in person with a player or parent often works better than email for local businesses. Always say thank you, even if they say no."
          ],
          steps: ["Pick one local business that fits your audience.", "Ask AI for a short draft under 150 words.", "Add a true, specific reason you chose them.", "Attach the package and send from an official account.", "Follow up once after a week; thank them either way."],
          words: [["Pitch", "a short request that explains what you want and why it helps them."], ["Follow-up", "a polite second message if you have not heard back."]],
          slides: [
            { title: "A good pitch email", bullets: ["Who you are and the event", "Why their business fits", "What you ask and how they benefit"] },
            { title: "AI drafts, you personalize", bullets: ["Under 150 words", "Add a true, specific reason"] },
            { title: "After sending", bullets: ["Follow up once after a week", "Visit in person if you can", "Thank them, yes or no"] }
          ],
          tryIt: "Choose one local business. Use AI to draft a pitch email, personalize it, and have your coach or athletic director read it before you send it.",
          youCanNow: "write a short, personal sponsor pitch email and follow up politely."
        },
        {
          title: "Reporting results so sponsors return",
          minutes: 5,
          goal: "Track event numbers and send sponsors a short thank-you report.",
          text: [
            "Sponsors come back when they see what they got. Track a few numbers during and after the event: attendance or sign-ups, social post reach and engagement, and anything sponsor-specific like coupon uses or table visits.",
            "Send a one-page thank-you report within two weeks: a photo of their banner or logo at the event, the numbers, a quote from a family or player, and a thank-you from the team.",
            "Ask an AI assistant to turn your numbers and notes into a friendly report, then check every number yourself. Never inflate numbers; trust is what brings sponsors back next year."
          ],
          steps: ["Choose three numbers before the event.", "Collect them during and after.", "Take photos of sponsor signage.", "Draft a one-page report with AI.", "Check every number and send within two weeks."],
          words: [["Reach", "how many people saw a post."], ["Thank-you report", "a short summary for sponsors with photos and results."]],
          slides: [
            { title: "Track three numbers", bullets: ["Attendance or sign-ups", "Post reach and engagement", "Sponsor-specific: coupons, visits"] },
            { title: "Thank-you report", bullets: ["Photo of their logo at the event", "The numbers and a quote", "Send within two weeks"] },
            { title: "Trust", bullets: ["Check every number", "Never inflate"] }
          ],
          tryIt: "Final task: for your event, finish the promotion plan, sponsor package and pitch email, get approval from your athletic director or league, and write the three numbers you will report to sponsors.",
          youCanNow: "report honest results to sponsors so they want to return."
        }
      ],
      check: {
        title: "Knowledge Check 2: Sponsors and results",
        questions: [
          { q: "What does a sponsor usually want?", options: ["To coach the team", "Free tickets only", "Your passwords", "To be seen by your audience and build goodwill"], answer: 3, why: "Sponsors support you to be seen by your audience." },
          { q: "How should you set sponsor prices?", options: ["Ask your athletic director about past prices and your costs", "Guess a big number", "Copy a pro team", "Let AI decide"], answer: 0, why: "Real past prices and costs keep it fair and realistic." },
          { q: "What makes a pitch email personal?", options: ["A very long email", "Lots of emojis", "A true, specific reason you chose that business", "Sending it to 500 businesses at once"], answer: 2, why: "Specific reasons show you know them." },
          { q: "A business doesn't reply. What do you do?", options: ["Email daily", "Post about them", "Give up immediately", "Follow up once after about a week"], answer: 3, why: "One polite follow-up is professional." },
          { q: "Your event had 140 people. What do you report?", options: ["250, to look better", "140", "About 200", "Nothing"], answer: 1, why: "Honest numbers build trust." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Sports Management Marketing",
    questions: [
      { q: "An event's offer is:", options: ["The ticket price only", "The team logo", "What people get for their time or money", "The stadium"], answer: 2, why: "The offer is the value to the audience." },
      { q: "Who approves school events and sponsors?", options: ["Usually the athletic director", "A fan", "A sponsor", "The opposing coach"], answer: 0, why: "The athletic director runs the school's sports program." },
      { q: "A good promotion plan fits on:", options: ["One page", "Fifty pages", "A napkin with no dates", "Nothing"], answer: 0, why: "One page keeps it clear and usable." },
      { q: "Which is a good local channel?", options: ["A rival's locker room", "Private messages to strangers", "Local Facebook groups and school newsletters", "None"], answer: 2, why: "Those reach local families." },
      { q: "When should you post thank-yous?", options: ["Never", "After the event", "Before announcing", "Only if you win"], answer: 1, why: "Thank-yous build goodwill for next time." },
      { q: "Each promo task should have:", options: ["No owner", "Ten owners", "An AI owner", "A person responsible"], answer: 3, why: "Someone must own each task." },
      { q: "Which fact is missing from \"Soccer camp, June 12, Lincoln Park\"?", options: ["When", "Where", "How to sign up", "What"], answer: 2, why: "People need to know how to sign up." },
      { q: "A media release is:", options: ["A press conference", "A news article", "A ticket", "Signed permission to use someone's photo or video"], answer: 3, why: "It gives permission to share images." },
      { q: "Before sharing a flyer you should:", options: ["Have someone else proofread it", "Add more colors", "Post it at midnight", "Skip the date"], answer: 0, why: "A second reader catches mistakes." },
      { q: "A sponsor package usually has:", options: ["One huge price", "Three levels of give and get", "No benefits", "Only a logo"], answer: 1, why: "Levels make it easy to say yes." },
      { q: "Which is a sponsor benefit?", options: ["Coaching the team", "Picking the lineup", "Their name on the banner", "Free player data"], answer: 2, why: "Visibility is the core benefit." },
      { q: "Sponsor money should go through:", options: ["The official school or club process", "Your personal account", "Cash in a bag", "A friend"], answer: 0, why: "Official processes protect everyone." },
      { q: "You should only promise sponsors:", options: ["Anything they want", "Championships", "Player time without asking", "What you can deliver and your school allows"], answer: 3, why: "Broken promises lose sponsors." },
      { q: "A pitch email should be about:", options: ["Two pages", "Under 150 words", "One word", "As long as possible"], answer: 1, why: "Short emails get read." },
      { q: "AI drafts your pitch. Next you:", options: ["Send it to everyone unchanged", "Add a true, specific reason you chose that business", "Add fake numbers", "Delete it"], answer: 1, why: "Personal touches get replies." },
      { q: "Often more effective than email for local businesses:", options: ["Sending 10 emails", "Calling at midnight", "Posting angry comments", "Visiting in person with a player or parent"], answer: 3, why: "Local businesses respond to real people." },
      { q: "A business says no. You:", options: ["Thank them anyway", "Argue", "Post about them", "Keep emailing"], answer: 0, why: "Goodwill can lead to a yes later." },
      { q: "Which number is sponsor-specific?", options: ["Your shoe size", "The weather", "Coupon uses from their offer", "The final score only"], answer: 2, why: "It shows what they got directly." },
      { q: "When should you send the thank-you report?", options: ["Next year", "Never", "Before the event", "Within two weeks"], answer: 3, why: "Fresh results make the strongest impression." },
      { q: "AI writes your report. Before sending, you:", options: ["Round numbers up", "Check every number yourself", "Remove photos", "Send it unread"], answer: 1, why: "AI can make mistakes; trust depends on accuracy." }
    ]
  }
};
