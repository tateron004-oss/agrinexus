"use strict";

// Koach Learn course: Athletes -> "AI Digital Marketing Strategies for Athletes". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-ai-digital-marketing",
  category: "Athletes",
  name: "AI Digital Marketing Strategies for Athletes",
  skills: "Setting a marketing goal, Defining your audience, Choosing channels, Drafting a 4-week plan with AI, Measuring results and adjusting",
  outcome: "use an AI assistant to build and run a simple 4-week digital marketing plan for yourself as an athlete: one goal, one audience, two channels, a weekly posting plan and three numbers you track.",
  about: [
    "This course is for high school, college and early-career athletes who want to grow their audience on purpose, for recruiting, NIL opportunities, a camp, or a future career, and for coaches who help them.",
    "Marketing means getting the right people to know, like and trust you. You will set a goal, pick your audience and channels, use AI to draft a 4-week plan, and learn which numbers to watch.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course. NIL rules differ by school, state and level, so check with your compliance office or state athletic association before any paid deal."
  ],
  finalTask: "Write a one-page 4-week marketing plan: one SMART goal, an audience description, two channels, a weekly posting plan drafted with AI, and three numbers to track. Run week one, record the numbers, and write one change for week two.",
  chapters: [
    {
      name: "Chapter 1: Goal, audience and channels",
      lessons: [
        {
          title: "Setting a marketing goal",
          minutes: 5,
          goal: "Write one SMART marketing goal for the next four weeks.",
          text: [
            "Marketing without a goal is just posting. Decide what you want in the next four weeks: get noticed by college coaches, fill a youth camp, grow an audience a brand would care about, or build a following for your future career.",
            "Make it SMART: Specific, Measurable, Achievable, Relevant and Time-bound. \"Get 15 sign-ups for my free summer shooting clinic by June 30\" is SMART. \"Get famous\" is not.",
            "An AI assistant can help sharpen it: \"I'm a high school basketball player. Help me turn 'get more college coaches to see me' into a SMART goal for the next 4 weeks.\""
          ],
          steps: ["Choose what you want in 4 weeks.", "Add a number.", "Add a date.", "Check it is realistic and matters to you."],
          words: [["Marketing", "getting the right people to know, like and trust you or what you offer."], ["SMART goal", "Specific, Measurable, Achievable, Relevant and Time-bound."]],
          slides: [
            { title: "No goal = just posting", bullets: ["Recruiting? Camp? Audience? Career?"] },
            { title: "SMART", bullets: ["Specific, Measurable, Achievable", "Relevant, Time-bound"] },
            { title: "Example", bullets: ["\"15 sign-ups for my free clinic by June 30\"", "Not: \"get famous\""] }
          ],
          tryIt: "Write one marketing goal for the next four weeks. Ask an AI assistant to make it SMART, then edit it so it is true and realistic for you.",
          youCanNow: "write a SMART marketing goal."
        },
        {
          title: "Knowing your audience",
          minutes: 5,
          goal: "Describe the people you want to reach in one short profile.",
          text: [
            "Your audience is the specific group you want to reach. A college coach, a parent of a 10-year-old who wants camp, a local business owner and a fan of your sport all want different things.",
            "Write a short audience profile: who they are, what they care about, where they spend time online, and what would make them take action. Example: \"Parents of local kids aged 8 to 12, busy, care about safe and fun coaching, use Facebook groups and Instagram, sign up when they see real reviews.\"",
            "AI can help you brainstorm what your audience cares about. Then check it by asking two or three real people from that group."
          ],
          steps: ["Name the group.", "Write what they care about.", "Write where they spend time online.", "Write what makes them act.", "Check it with two or three real people."],
          words: [["Audience", "the specific people you want to reach."], ["Audience profile", "a short description of who they are and what they want."]],
          slides: [
            { title: "Different audiences", bullets: ["College coaches", "Camp parents", "Local businesses", "Fans of your sport"] },
            { title: "Audience profile", bullets: ["Who they are", "What they care about", "Where they are online", "What makes them act"] },
            { title: "Check it", bullets: ["Ask AI to brainstorm", "Then ask 2-3 real people"] }
          ],
          tryIt: "Write an audience profile for your goal. Ask an AI assistant: \"What else might this audience care about?\" Add one idea, then ask one real person from that group if it is right.",
          youCanNow: "write a short audience profile for your goal."
        },
        {
          title: "Choosing your channels",
          minutes: 5,
          goal: "Pick two channels where your audience already spends time.",
          text: [
            "A channel is a place you reach people: Instagram, TikTok, YouTube, X, LinkedIn, Facebook groups, email, a website, or in person at games and community events.",
            "Pick only two channels to start, based on your audience, not on what is trendy. College coaches often look at highlight videos and recruiting profiles plus email. Camp parents may use Facebook groups and local flyers. Brands look at how engaged your followers are.",
            "Check the age rules for each platform, and set your accounts so you control who can contact you. If you are under 18, involve a parent or guardian."
          ],
          steps: ["List where your audience spends time.", "Pick the two best matches.", "Check age rules and privacy settings.", "Write why you picked each channel."],
          words: [["Channel", "a place where you reach your audience, like a social app or email."], ["Engagement", "how people interact with your posts: likes, comments, shares, saves."]],
          slides: [
            { title: "Channels", bullets: ["Social apps: Instagram, TikTok, YouTube, X, LinkedIn", "Email and a website", "In person at games and events"] },
            { title: "Pick two", bullets: ["Where your audience already is", "Not just what is trendy"] },
            { title: "Stay safe", bullets: ["Check age rules", "Control who can contact you", "Under 18: involve a parent"] }
          ],
          tryIt: "Pick your two channels and write one sentence for each explaining why your audience is there. Check the privacy settings on each account.",
          youCanNow: "choose two channels that match your audience and set them up safely."
        }
      ],
      check: {
        title: "Knowledge Check 1: Goal, audience and channels",
        questions: [
          { q: "Which is a SMART goal?", options: ["Get famous", "Post more", "Get 15 sign-ups for my free clinic by June 30", "Be a brand"], answer: 2, why: "It is specific, measurable and has a date." },
          { q: "What is an audience?", options: ["The specific people you want to reach", "Everyone on the internet", "Your teammates only", "A type of post"], answer: 0, why: "Marketing works best aimed at a specific group." },
          { q: "How do you check your audience profile?", options: ["Trust the AI fully", "Guess", "Post and hope", "Ask two or three real people from that group"], answer: 3, why: "Real people tell you if your guesses are right." },
          { q: "How many channels should you start with?", options: ["Every app", "Two", "Ten", "None"], answer: 1, why: "Two channels done well beats many done poorly." },
          { q: "You are 16 and starting a public account. You should:", options: ["Share your address", "Involve a parent or guardian and check age rules", "Let anyone message you", "Lie about your age"], answer: 1, why: "Safety and age rules come first." }
        ]
      }
    },
    {
      name: "Chapter 2: Plan, run and measure",
      lessons: [
        {
          title: "Drafting a 4-week plan with AI",
          minutes: 6,
          goal: "Use an AI assistant to draft a 4-week posting plan and edit it.",
          text: [
            "Give an AI assistant your goal, audience profile and channels, and ask: \"Make a 4-week plan with 3 posts per week across these two channels. For each post give the idea, the format (photo, short video, story, email) and a call to action. Put it in a table.\"",
            "A call to action tells people what to do next: \"Sign up at the link\", \"Watch my full highlights\", \"Email me for camp info\". Every post that supports your goal should have one.",
            "Edit the plan so it fits your training and school schedule. Never plan posts that show your exact location in real time, your home, or your school schedule to strangers."
          ],
          steps: ["Paste your goal, audience profile and channels.", "Ask for a 4-week table: idea, format, call to action.", "Edit it to fit your schedule.", "Remove anything that shares your live location or home."],
          words: [["Call to action", "a clear next step you ask people to take."], ["Content plan", "a schedule of what you will post and when."]],
          slides: [
            { title: "Give AI", bullets: ["Your SMART goal", "Your audience profile", "Your two channels"] },
            { title: "Ask for a table", bullets: ["3 posts per week for 4 weeks", "Idea, format, call to action"] },
            { title: "Then edit", bullets: ["Fit your training and school schedule", "No live location or home details"] }
          ],
          tryIt: "Ask an AI assistant for your 4-week plan in a table. Edit at least three rows so they fit your real schedule and voice.",
          youCanNow: "draft and edit a 4-week marketing plan with AI."
        },
        {
          title: "Writing posts that sound like you, honestly",
          minutes: 5,
          goal: "Turn plan ideas into honest posts in your own voice, with disclosures where needed.",
          text: [
            "AI can write a first draft caption, but people follow athletes because they are real. Ask AI for three options, then rewrite the best one in your own words. Read it out loud: does it sound like you?",
            "Be honest. Do not use fake stats, fake followers or claims you cannot back up. Coaches, brands and fans check.",
            "If a business gives you money, free products or any other benefit to post, the FTC (the US agency that enforces advertising law) says you must make that clear, for example \"Ad\" or \"Thanks to [brand] for the free gear\", right with the post, not buried in hashtags. In videos, say it and show it on screen. College athletes may also need to report deals; ask your compliance office."
          ],
          steps: ["Ask AI for three caption options.", "Rewrite the best one in your own words.", "Remove any claim you cannot prove.", "If there is any brand benefit, add a clear disclosure.", "Read it out loud before posting."],
          words: [["Caption", "the text that goes with a post."], ["Disclosure", "a clear statement that you were paid or given something to post."]],
          slides: [
            { title: "AI drafts, you finish", bullets: ["Ask for three options", "Rewrite in your own words", "Read it out loud"] },
            { title: "Be honest", bullets: ["No fake stats or followers", "No claims you can't back up"] },
            { title: "Paid or free stuff?", bullets: ["Say it clearly: \"Ad\" or \"Thanks [brand] for the free gear\"", "With the post, not buried in hashtags", "In videos: say it and show it"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Take one post idea from your plan. Ask AI for three caption options, rewrite one in your voice, and read it out loud. If it involves any brand, add a clear disclosure.",
          youCanNow: "write honest posts in your own voice and disclose brand relationships clearly."
        },
        {
          title: "Measuring and adjusting",
          minutes: 5,
          goal: "Track three numbers each week and make one change based on them.",
          text: [
            "Pick three numbers that connect to your goal. For a clinic: link clicks, sign-ups and comments asking questions. For recruiting: profile views, highlight video views and coach replies. Follower count alone can mislead.",
            "Most social apps show these numbers in their insights or analytics area for professional or creator accounts. Record them in a sheet once a week.",
            "Each week, ask: what worked best, and what will I change? You can paste your weekly numbers into an AI assistant and ask for one suggestion, then decide yourself."
          ],
          steps: ["Choose three numbers tied to your goal.", "Record them weekly in a sheet.", "Find your best and worst post.", "Make one change for next week."],
          words: [["Analytics", "numbers that show how your posts and pages are doing."], ["Vanity metric", "a number that looks good but does not show progress toward your goal."]],
          slides: [
            { title: "Three numbers tied to your goal", bullets: ["Clinic: clicks, sign-ups, questions", "Recruiting: views, coach replies"] },
            { title: "Weekly routine", bullets: ["Record numbers in a sheet", "Best and worst post", "One change for next week"] },
            { title: "Watch out", bullets: ["Followers alone can mislead", "AI suggests; you decide"] }
          ],
          tryIt: "Final task: put your goal, audience, channels, AI-drafted plan and three numbers on one page. Run week one, record the numbers, and write one change for week two.",
          youCanNow: "measure your marketing with three meaningful numbers and adjust each week."
        }
      ],
      check: {
        title: "Knowledge Check 2: Plan, run and measure",
        questions: [
          { q: "What is a call to action?", options: ["A phone call to your coach", "A type of hashtag", "A penalty", "A clear next step you ask people to take"], answer: 3, why: "It tells your audience what to do next." },
          { q: "Which detail should your plan avoid?", options: ["Your live location or home", "Your sport", "Your highlights", "Your camp sign-up link"], answer: 0, why: "Live location and home details can put you at risk." },
          { q: "A shoe store gives you free shoes to post. What should your post include?", options: ["Nothing extra", "A hidden hashtag at the end", "A clear disclosure like \"Thanks [store] for the free shoes\"", "A fake review"], answer: 2, why: "The FTC says free products count and must be disclosed clearly." },
          { q: "Which is most likely a vanity metric for a clinic goal?", options: ["Sign-ups", "Link clicks", "Questions about the clinic", "Follower count alone"], answer: 3, why: "Followers don't show progress toward sign-ups." },
          { q: "After week one, the best next step is:", options: ["Quit", "Make one change based on your numbers", "Change everything", "Buy followers"], answer: 1, why: "One change at a time shows what works." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Digital Marketing Strategies for Athletes",
    questions: [
      { q: "Marketing means:", options: ["Posting randomly", "Buying followers", "Getting the right people to know, like and trust you", "Only selling things"], answer: 2, why: "It's about the right people and trust." },
      { q: "What does the T in SMART stand for?", options: ["Time-bound", "Trendy", "Total", "Team"], answer: 0, why: "A SMART goal has a deadline." },
      { q: "Which goal is NOT SMART?", options: ["Get famous", "Get 10 coach replies by March 1", "Sell 30 camp spots by May 15", "Get 200 highlight views by Friday"], answer: 0, why: "\"Get famous\" has no number or date." },
      { q: "An audience profile includes:", options: ["Their passwords", "Your stats only", "Who they are and what they care about", "Your rival's stats"], answer: 2, why: "It describes the people you want to reach." },
      { q: "Camp parents may spend time in:", options: ["Only video games", "Facebook groups and local spots", "Only LinkedIn", "Nowhere online"], answer: 1, why: "Pick channels where that audience is." },
      { q: "How should you pick channels?", options: ["Whatever is trendy", "Where your audience already spends time", "All of them", "Randomly"], answer: 1, why: "Go where your audience is." },
      { q: "Engagement means:", options: ["Getting married", "Followers only", "How people interact: likes, comments, shares, saves", "Ads"], answer: 2, why: "Engagement shows real interest." },
      { q: "What should you give AI to draft your plan?", options: ["Your password", "Your home address", "Your bank details", "Goal, audience profile and channels"], answer: 3, why: "Those make the plan fit your goal." },
      { q: "A good plan table includes:", options: ["Idea, format and call to action", "Only hashtags", "Only dates", "Your grades"], answer: 0, why: "Each post needs an idea, format and next step." },
      { q: "Which is a call to action?", options: ["\"Nice day\"", "\"Sign up at the link\"", "\"Lol\"", "\"Game was fun\""], answer: 1, why: "It tells people what to do next." },
      { q: "AI writes a caption. You should:", options: ["Post it unread", "Copy someone else's", "Rewrite it in your own voice", "Add fake stats"], answer: 2, why: "People follow you because you are real." },
      { q: "Which should you never post?", options: ["Fake stats", "Your highlights", "Thanks to your coach", "Your camp info"], answer: 0, why: "Honesty matters; people check." },
      { q: "Where should a disclosure go?", options: ["Hidden among many hashtags", "Only in your bio", "Nowhere", "With the post, easy to see"], answer: 3, why: "The FTC says disclosures must be hard to miss." },
      { q: "In a sponsored video, the disclosure should be:", options: ["Only in the description", "Said and shown on screen", "Left out", "In a comment"], answer: 1, why: "Video disclosures should be in the video itself." },
      { q: "Who should a college athlete ask about NIL reporting?", options: ["A random fan", "The compliance office", "An AI only", "Nobody"], answer: 1, why: "Rules differ by school and level." },
      { q: "Where do you usually find post numbers?", options: ["In the weather app", "In your calendar", "Nowhere", "In the app's insights or analytics"], answer: 3, why: "Professional or creator accounts show analytics." },
      { q: "For a recruiting goal, which number matters most?", options: ["Coach replies", "Random likes", "Emoji count", "Profile color"], answer: 0, why: "Coach replies show real progress." },
      { q: "How often should you record your numbers?", options: ["Once a year", "Never", "Weekly", "Every minute"], answer: 2, why: "Weekly lets you adjust in time." },
      { q: "AI suggests a change. Who decides?", options: ["The AI", "Your followers", "Nobody", "You"], answer: 3, why: "AI suggests; you decide." },
      { q: "How many changes should you make each week?", options: ["Ten", "One", "Everything", "None ever"], answer: 1, why: "One change at a time shows what worked." }
    ]
  }
};
