"use strict";

// Koach Learn course: Athletes -> "Educational Campaigns by Brands". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-brand-campaigns",
  category: "Athletes",
  name: "Educational Campaigns by Brands",
  skills: "Recognizing an educational campaign, Choosing a cause that fits you, Checking facts with trusted sources, Planning a 3-post campaign with AI, Pitching a brand or nonprofit partner with clear disclosure",
  outcome: "plan a three-post educational campaign on a cause you care about (for example water safety, reading, concussion awareness or financial literacy), with facts checked against official sources, a partner pitch and clear disclosure of any brand support.",
  about: [
    "This course is for athletes and coaches who want to use their platform to teach something useful, alone or with a brand or nonprofit partner. Brands often run educational campaigns with athletes on topics like health, safety, reading, money skills and community.",
    "An educational campaign teaches first and sells second, if at all. You will learn what makes one good, pick a cause that fits you, check facts with official sources, plan three posts with AI, and pitch a partner honestly.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course. Any paid or gifted brand work needs clear disclosure and, for students, a check of your school's and state's NIL rules."
  ],
  finalTask: "Plan a three-post educational campaign on one cause: one clear learning goal, three post plans drafted with AI, every fact linked to an official or expert source, a call to action, and a short pitch to one brand or nonprofit partner. Include how you will disclose any brand support and who at your school or state you checked NIL rules with.",
  chapters: [
    {
      name: "Chapter 1: What makes a good educational campaign",
      lessons: [
        {
          title: "What an educational campaign is",
          minutes: 4,
          goal: "Tell an educational campaign from a regular ad.",
          text: [
            "A regular ad says \"buy this\". An educational campaign says \"here is something useful to know or do\". Brands use athletes in these campaigns because athletes are trusted by young people and families.",
            "Examples of campaign topics: learning to swim and water safety, recognizing concussion signs, reading every day, staying hydrated, saving money, online safety, or mental health awareness.",
            "Good campaigns have one learning goal, accurate facts from trusted sources, a simple action people can take, and honesty about who is paying for it."
          ],
          words: [["Educational campaign", "a series of messages that teaches people something useful, often supported by a brand or nonprofit."], ["Learning goal", "the one thing you want your audience to know or do after the campaign."]],
          slides: [
            { title: "Ad vs educational campaign", bullets: ["Ad: \"buy this\"", "Campaign: \"here's something useful to know or do\""] },
            { title: "Topic examples", bullets: ["Water safety, concussion signs", "Reading, money skills", "Online safety, mental health awareness"] },
            { title: "A good campaign has", bullets: ["One learning goal", "Accurate, sourced facts", "A simple action", "Honesty about who pays"] }
          ],
          tryIt: "Find one educational campaign you have seen with an athlete or brand. Write its learning goal, the action it asked for, and whether it said who paid for it.",
          youCanNow: "tell an educational campaign from a regular ad and name what makes it good."
        },
        {
          title: "Choosing your cause",
          minutes: 5,
          goal: "Pick one cause that fits your story and your audience.",
          text: [
            "The strongest campaigns come from real life. Did a coach teach you about concussions after a teammate got hurt? Did reading help you stay eligible? Did learning to budget your NIL money change things? Your story makes people listen.",
            "Pick a cause that also fits your audience. Younger fans and their parents may care about safety and reading; college peers may care about money skills and mental health.",
            "Write one learning goal: \"After my campaign, middle-school players will know three signs of a concussion and to tell a coach right away.\""
          ],
          steps: ["List three causes connected to your life.", "Mark which fits your audience best.", "Write your story connection in two sentences.", "Write one learning goal."],
          words: [["Cause", "an issue or goal you care about and want to help with."], ["Authentic", "real and true to who you are."]],
          slides: [
            { title: "Start with your story", bullets: ["What happened to you?", "Why do you care?"] },
            { title: "Fit your audience", bullets: ["Younger fans: safety, reading", "College peers: money, mental health"] },
            { title: "One learning goal", bullets: ["Who will learn what", "And what they will do"] }
          ],
          tryIt: "Ask an AI assistant to help you list causes connected to your sport and life. Pick one and write your two-sentence story and one learning goal.",
          youCanNow: "choose an authentic cause and write a clear learning goal."
        },
        {
          title: "Getting the facts right",
          minutes: 5,
          goal: "Check every fact in your campaign against an official or expert source.",
          text: [
            "If you teach something wrong, people can get hurt, and your reputation and your partner's suffer. Every fact needs a trusted source.",
            "Use official and expert sources: government health and safety agencies (for example the CDC's HEADS UP concussion pages), national organizations, and experts like athletic trainers, doctors, teachers or financial counselors. Ask an AI assistant to explain a topic simply, then confirm each fact on the source itself.",
            "Keep a fact sheet: each fact, the source link, and the date you checked it. Teach general awareness and point people to professionals for personal advice."
          ],
          steps: ["List the facts you want to share.", "Find an official or expert source for each.", "Write the link and the date you checked.", "Remove any fact you cannot confirm.", "Point people to professionals for personal advice."],
          words: [["Official source", "information from a government agency or the organization in charge of the topic."], ["Fact sheet", "a list of your facts with their sources and dates checked."]],
          slides: [
            { title: "Wrong facts hurt", bullets: ["People can get hurt", "Your name and your partner's suffer"] },
            { title: "Trusted sources", bullets: ["Government agencies, like CDC HEADS UP", "National organizations", "Experts: trainers, doctors, teachers"] },
            { title: "Your fact sheet", bullets: ["Fact, source link, date checked", "Can't confirm it? Cut it"] }
          ],
          sources: [{ name: "CDC: HEADS UP (concussion awareness)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Write three facts for your campaign. Find an official or expert source for each and build your fact sheet with links and dates.",
          youCanNow: "check campaign facts against official sources and keep a fact sheet."
        }
      ],
      check: {
        title: "Knowledge Check 1: What makes a good educational campaign",
        questions: [
          { q: "How is an educational campaign different from a regular ad?", options: ["It is always longer", "It has no athletes", "It teaches something useful first", "It never has brands"], answer: 2, why: "Campaigns teach; ads mainly sell." },
          { q: "Which is a clear learning goal?", options: ["\"Middle-school players will know three concussion signs and tell a coach\"", "\"Be aware\"", "\"Spread the word\"", "\"Go viral\""], answer: 0, why: "It says who learns what and what they do." },
          { q: "Why start from your own story?", options: ["It's required by law", "It makes posts longer", "It hides the brand", "It makes the campaign real and people listen"], answer: 3, why: "Authentic stories build trust." },
          { q: "AI gives you a health fact. What do you do?", options: ["Post it right away", "Confirm it on an official or expert source", "Make it sound scarier", "Ask a fan"], answer: 1, why: "AI can be wrong; confirm on the source." },
          { q: "You can't find a source for a fact. You:", options: ["Post it anyway", "Cut it", "Make up a source", "Change the numbers"], answer: 1, why: "Only share what you can confirm." }
        ]
      }
    },
    {
      name: "Chapter 2: Planning and partnering",
      lessons: [
        {
          title: "Planning three posts with AI",
          minutes: 5,
          goal: "Draft a three-post campaign plan with AI and edit it.",
          text: [
            "Three posts are enough for a focused campaign: 1. Why it matters (your story). 2. What to know or do (the main lesson). 3. Take action (a simple step, like \"share this with your team\" or \"take the free training\").",
            "Ask an AI assistant: \"Here is my cause, learning goal, story and fact sheet. Plan three short posts: why it matters, what to know, take action. Give a hook, the main points and a call to action for each. Only use facts from my fact sheet.\"",
            "Edit for your voice and check every fact against your fact sheet again. Keep it hopeful and practical, not scary."
          ],
          steps: ["Paste your cause, goal, story and fact sheet.", "Ask for three posts: why, what, action.", "Check each fact against your fact sheet.", "Edit into your voice.", "Make the tone hopeful and practical."],
          words: [["Call to action", "the simple step you ask people to take."], ["Tone", "the feeling of your message, like hopeful or serious."]],
          slides: [
            { title: "Three posts", bullets: ["1. Why it matters: your story", "2. What to know or do", "3. Take action"] },
            { title: "Prompt AI with", bullets: ["Cause, goal, story", "Your fact sheet only"] },
            { title: "Then edit", bullets: ["Facts match your sheet", "Your voice", "Hopeful, not scary"] }
          ],
          tryIt: "Use AI to draft your three-post plan from your fact sheet. Edit it and check each fact again.",
          youCanNow: "plan a focused three-post campaign with AI and keep the facts accurate."
        },
        {
          title: "Pitching a brand or nonprofit partner",
          minutes: 5,
          goal: "Write a short pitch to a brand or nonprofit that fits your cause.",
          text: [
            "Partners can add reach, money or resources. Look for ones that already care about your cause: a swim school for water safety, a library or bookstore for reading, a local credit union for money skills, a sports medicine clinic for injury awareness. Nonprofits may welcome a volunteer partnership.",
            "A pitch shows your cause, your story, your learning goal, your three-post plan and your audience. Ask for something clear: sharing the posts, supplying materials, or sponsoring the campaign.",
            "Use AI to draft it, then make it personal. Under 18? Involve a parent or guardian. Student-athletes: check your school's and state's NIL rules before accepting any pay or products."
          ],
          steps: ["List three partners who already care about your cause.", "Write what you will ask for.", "Use AI to draft a pitch under 150 words.", "Personalize it.", "Check NIL rules before accepting pay or products."],
          words: [["Partner", "a brand or nonprofit that works with you on the campaign."], ["Nonprofit", "an organization that works for a cause instead of profit."]],
          slides: [
            { title: "Good partners", bullets: ["Already care about your cause", "Swim school, library, credit union, clinic"] },
            { title: "Your pitch shows", bullets: ["Cause, story, learning goal", "Three-post plan and audience", "A clear ask"] },
            { title: "Before saying yes", bullets: ["Under 18: involve a parent", "Check school and state NIL rules"] }
          ],
          sources: [{ name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Pick one partner and write a pitch under 150 words with AI help. Have a coach or parent read it.",
          youCanNow: "pitch a brand or nonprofit partner for your campaign."
        },
        {
          title: "Disclosure, honesty and measuring impact",
          minutes: 5,
          goal: "Disclose brand support clearly and measure whether people learned.",
          text: [
            "If a brand pays you or gives you anything for the campaign, the FTC says to disclose it clearly in each post, near the start: \"Paid partnership with [brand]\" or \"Thanks to [brand] for supporting this campaign\". In videos, say it and show it.",
            "Only say what you believe and what your fact sheet supports. Do not let a partner add claims you cannot back up, especially health claims.",
            "Measure learning, not just likes: count shares, saves, comments with questions, people who took the action (like signing up for training), or run a two-question poll at the end. Share results with your partner."
          ],
          steps: ["Add a clear disclosure in each sponsored post.", "Check every claim against your fact sheet.", "Pick two impact measures.", "Run a short poll after post 3.", "Send results to your partner."],
          words: [["Disclosure", "a clear statement that a brand paid or supported you."], ["Impact", "the real change your campaign made, like people learning or acting."]],
          slides: [
            { title: "Disclose clearly", bullets: ["In each sponsored post, near the start", "\"Paid partnership with [brand]\"", "Video: say it and show it"] },
            { title: "Stay honest", bullets: ["Only claims your fact sheet supports", "No unproven health claims"] },
            { title: "Measure learning", bullets: ["Shares, saves, questions", "People who took the action", "A two-question poll"] }
          ],
          sources: [{ name: "FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Final task: put together your campaign plan with learning goal, three posts, fact sheet, call to action, partner pitch, disclosure wording and the person you checked NIL rules with.",
          youCanNow: "run an honest educational campaign with clear disclosure and measure its impact."
        }
      ],
      check: {
        title: "Knowledge Check 2: Planning and partnering",
        questions: [
          { q: "What is post 1 of the campaign about?", options: ["Buying the product", "Your stats", "A giveaway", "Why it matters: your story"], answer: 3, why: "Your story makes people care." },
          { q: "Which partner fits a reading campaign?", options: ["A local library or bookstore", "A betting app", "An energy drink", "A car dealer"], answer: 0, why: "They already care about reading." },
          { q: "A brand supports your campaign with money. Each post should include:", options: ["Nothing", "A hidden hashtag", "A clear disclosure near the start", "A fake name"], answer: 2, why: "The FTC requires clear disclosure." },
          { q: "A partner wants you to say their drink prevents concussions. You:", options: ["Say it", "Say it quietly", "Say it without disclosure", "Refuse; it's an unproven health claim"], answer: 3, why: "Don't make claims you can't back up." },
          { q: "Which measures learning best?", options: ["Likes alone", "People who took the action and poll results", "Your follower count", "Emoji count"], answer: 1, why: "Impact is about learning and action." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Educational Campaigns by Brands",
    questions: [
      { q: "An educational campaign mainly:", options: ["Sells shoes", "Shows highlights", "Teaches something useful", "Lists stats"], answer: 2, why: "Teaching is the main goal." },
      { q: "Why do brands use athletes in campaigns?", options: ["Athletes are trusted by young people and families", "Athletes work for free", "It's required", "Athletes are doctors"], answer: 0, why: "Trust makes the message land." },
      { q: "Which is an example campaign topic?", options: ["Water safety", "Rival gossip", "Betting tips", "Fake diets"], answer: 0, why: "It's useful and safe to teach." },
      { q: "How many learning goals should a campaign have?", options: ["Ten", "None", "One", "As many as possible"], answer: 2, why: "One goal keeps it focused." },
      { q: "The strongest causes come from:", options: ["Whatever is trending", "Your real life", "A random list", "A competitor"], answer: 1, why: "Real stories are authentic." },
      { q: "Authentic means:", options: ["Expensive", "Viral", "Long", "Real and true to you"], answer: 3, why: "Authenticity builds trust." },
      { q: "Which is an official source on concussions?", options: ["A meme page", "An ad", "CDC HEADS UP", "A comment section"], answer: 2, why: "It's from a government health agency." },
      { q: "A fact sheet includes:", options: ["Your password", "Only opinions", "Rival stats", "Each fact, its source and the date checked"], answer: 3, why: "It proves your facts." },
      { q: "For personal advice, your campaign should:", options: ["Point people to professionals", "Diagnose people", "Give doses", "Ignore it"], answer: 0, why: "You teach awareness; professionals advise." },
      { q: "Post 3 of the campaign is:", options: ["A random selfie", "Take action", "A complaint", "A giveaway"], answer: 1, why: "Action turns learning into change." },
      { q: "When prompting AI for posts, tell it to:", options: ["Make up statistics", "Add scary stories", "Only use facts from your fact sheet", "Copy other athletes"], answer: 2, why: "This keeps facts accurate." },
      { q: "The best tone for safety topics is:", options: ["Hopeful and practical", "Scary", "Angry", "Joking about injuries"], answer: 0, why: "People act on practical, hopeful messages." },
      { q: "A credit union is a good partner for:", options: ["Concussion awareness", "Swimming", "Reading", "Money skills"], answer: 3, why: "It already cares about financial literacy." },
      { q: "A pitch should include:", options: ["Only a price", "Your cause, story, goal, plan, audience and a clear ask", "Only your stats", "A demand"], answer: 1, why: "Partners need the full picture." },
      { q: "Before accepting a partner's products, a student-athlete should:", options: ["Post right away", "Check school and state NIL rules", "Hide it", "Ask a rival"], answer: 1, why: "NIL rules vary." },
      { q: "If you are under 18 and pitching a partner:", options: ["Use a fake age", "Hide it", "Skip the pitch", "Involve a parent or guardian"], answer: 3, why: "Adults help protect minors." },
      { q: "Which disclosure is clear?", options: ["\"Paid partnership with [brand]\" near the start", "\"#sp\" at the end", "Nothing", "Only in your bio"], answer: 0, why: "Clear and hard to miss." },
      { q: "In a sponsored video, disclosure should be:", options: ["Only in the description", "In a comment", "Said and shown", "Left out"], answer: 2, why: "Video disclosures belong in the video." },
      { q: "Impact means:", options: ["Your follower count", "Likes only", "How long the video is", "The real change your campaign made"], answer: 3, why: "Impact is learning and action." },
      { q: "After the campaign, you should:", options: ["Delete everything", "Share results with your partner", "Hide the numbers", "Ask for more pay without results"], answer: 1, why: "Reporting results builds lasting partnerships." }
    ]
  }
};
