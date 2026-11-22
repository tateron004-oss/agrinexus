"use strict";

// Koach Learn course (shared): "Social Media Apps and How to Use Them". Goes in Seniors and Technology and Re-Entry, so the examples are everyday ones: family photos, community groups, local news, job pages.
// Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "social-media-apps",
  category: "Seniors and Technology",
  name: "Social Media Apps and How to Use Them",
  skills: "Choosing a social media app, Setting up a safe profile, Posting and commenting, Privacy settings, Spotting fake accounts and scams",
  outcome: "set up a social media account with safe privacy settings, follow people and groups you care about, post and comment kindly, and spot and report fake accounts and scams.",
  about: [
    "Social media apps like Facebook, Instagram, WhatsApp, YouTube, TikTok and LinkedIn are where many families share photos, where community groups post news, and where employers look for workers.",
    "This course shows you how to pick an app, set up a profile that keeps your private life private, post and comment, and stay safe from fake accounts and scams.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "On one social media app: set your profile so only friends or followers you approve can see your posts, follow one family member or friend and one local group or page, write a kind comment on a post, and find the Report button on a post or account so you know where it is.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults who want to use social media to keep up with family, friends, church and neighborhood groups or jobs: seniors, grandparents, people returning to the community, newcomers and parents of teens.",
    startingPoint: "Can use a smartphone or computer to open apps and type. Some have an account a relative set up; few have checked their privacy settings, turned on two-step verification, or know how to spot a fake account, report a post or block someone.",
    gap: "Social media is where many families share news and where groups, events and jobs are posted, but it is also where scammers find people. Without safe settings and habits people overshare, accept fake friend requests, fall for romance and prize scams, or feel worse from endless scrolling.",
    constraints: [
      "Reading level: plain words and short sentences; words like feed, profile and privacy settings are explained",
      "Devices: a smartphone, tablet or computer with internet",
      "Time: about 5 minutes a lesson, about 60 minutes in total",
      "Cost: free apps only, from the official app store",
      "Privacy and age: learners leave out address, birth year and travel plans, and check each app's minimum age before a child or teen signs up"
    ],
    prerequisites: "None. Using a Smartphone and Tablet helps learners who are new to apps."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given something you want to do, such as see family photos or find a job", action: "choose the social media app that fits it", standard: "matching the right app every time" },
    { id: "O2", condition: "Using a social media app from the official store", action: "create an account with a safe profile and turn on two-step verification", standard: "with no home address, birth year or phone number on the profile and two-step verification on" },
    { id: "O3", condition: "On your social media account", action: "follow people and groups you have checked, write a post and leave a kind comment", standard: "checking who can see each post before you share it" },
    { id: "O4", condition: "In the app's privacy settings", action: "set who can see your posts, find you and message you", standard: "with posts set to friends or approved followers and location in posts turned off" },
    { id: "O5", condition: "Given a friend request or message", action: "identify the signs of a fake account or scam and refuse it", standard: "naming at least two warning signs and never sending money, gift cards or codes" },
    { id: "O6", condition: "Given an unwanted post, account or habit", action: "block, report or mute it and set a time limit for the app", standard: "choosing the right tool for each case" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting started on social media",
      lessons: [
        {
          objectives: ["O1"],
          title: "What social media is and which app does what",
          minutes: 4,
          goal: "Pick the social media app that fits what you want to do.",
          text: [
            "Social media apps let people share words, photos and videos and talk to each other. Each one is good for different things.",
            "Facebook: family, friends, local groups and events. Instagram: photos and short videos. WhatsApp: free messages and calls with family, also across countries. YouTube: videos to watch and learn from. TikTok: short videos. LinkedIn: jobs and work contacts. Nextdoor: news from your neighborhood.",
            "You do not need all of them. Start with one that matches what you want, such as seeing family photos or finding a job. Each app sets a minimum age in its rules; check them before a child or teen signs up."
          ],
          words: [["Social media", "apps and websites where people share posts and talk to each other."], ["Post", "something you share: words, a photo or a video."], ["Feed", "the list of posts you scroll through."]],
          slides: [
            { title: "What social media is", bullets: ["Apps where people share words, photos and videos", "And talk to each other"] },
            { title: "Which app does what", bullets: ["Facebook: family, friends, local groups", "Instagram and TikTok: photos and short videos", "WhatsApp: messages and calls", "YouTube: videos; LinkedIn: jobs"] },
            { title: "Start with one", bullets: ["Pick the app that fits your goal", "Check each app's age rules for children"] }
          ],
          tryIt: "Write down one thing you want from social media (for example: see the grandchildren's photos, join a church or community group, or find work). Next to it, write the app from this lesson that fits best.",
          youCanNow: "say what the main social media apps are for and choose one that fits your goal.",
          quickCheck: [
            { objective: "O1", q: "Which app is mainly for news from your neighborhood?", options: ["LinkedIn", "TikTok", "Nextdoor", "Instagram"], answer: 2, why: "Nextdoor is for news from your neighborhood." },
            { objective: "O1", q: "You want to see your grandchildren's photos and join a local church group. Which app would you start with?", options: ["LinkedIn", "Facebook", "A job website", "All of them at once"], answer: 1, why: "Facebook is for family, friends, local groups and events; start with one app that fits." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Setting up a safe profile",
          minutes: 5,
          goal: "Create an account and fill in a profile without oversharing.",
          text: [
            "Install the app only from the official app store, or go to the company's real website. Sign up with your email or phone number and a strong password you use nowhere else.",
            "Your profile is the page that tells people who you are. Add your name and a friendly photo. Leave out your birthday year, home address, phone number and when you are away from home. Scammers collect these details.",
            "Turn on two-step verification (sometimes called two-factor authentication) in the app's security settings. Then, even if someone steals your password, they also need a code from your phone."
          ],
          steps: ["Install the app from the official app store.", "Sign up with email or phone and a new, strong password.", "Add your name and a friendly photo.", "Leave out your address, phone number, full birth date and travel plans.", "Open security settings and turn on two-step verification."],
          words: [["Profile", "your page that shows who you are on the app."], ["Two-step verification", "a second check, usually a code sent to your phone, when you sign in."]],
          slides: [
            { title: "Sign up safely", bullets: ["Official app store or real website", "A strong password used nowhere else"] },
            { title: "What to put in your profile", bullets: ["Your name", "A friendly photo"] },
            { title: "What to leave out", bullets: ["Home address and phone number", "Full birth date", "When you are away from home"] },
            { title: "Turn on two-step verification", bullets: ["Find it in security settings", "A thief also needs the code from your phone"] }
          ],
          tryIt: "Create an account on the app you picked (or open the one you have). Check your profile: remove anything from the \"leave out\" list, and turn on two-step verification.",
          youCanNow: "make a social media profile that shows who you are without giving away private details.",
          quickCheck: [
            { objective: "O2", q: "What is your profile?", options: ["The page that tells people who you are", "A list of posts from others", "Your password", "A setting that hides you"], answer: 0, why: "Your profile is your page, with your name and photo." },
            { objective: "O2", q: "The sign-up asks for your full birthday, address and phone to show on your profile. What would you do?", options: ["Show all of them so people can find you", "Show only your address", "Post your travel dates too", "Leave them off your profile, because scammers collect these details"], answer: 3, why: "Leaving out your birth year, address and phone number protects you from scammers." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Following, posting and commenting",
          minutes: 5,
          goal: "Follow people and groups, write a post and leave a kind comment.",
          text: [
            "To see someone's posts, send a friend request or follow them. Search for their name, check the photo and shared friends to be sure it is really them, and tap Add friend or Follow. You can also join groups: a church, a neighborhood, a hobby or a job group.",
            "To post, tap the box that asks what is on your mind, or the + button. Write a few words, add a photo if you like, check who can see it, and tap Post or Share.",
            "Reacting (like a thumbs up or heart) shows you saw a post. Commenting adds your words under it. Be kind: write as if the person were in the room. Remember that what you post can be copied and seen for a long time."
          ],
          steps: ["Search for a person or group by name.", "Check it is the real one: photo, shared friends, posts.", "Tap Add friend, Follow or Join.", "To post: tap the post box or +, write, add a photo, check who can see it, then Post.", "To comment: tap Comment under a post, write something kind, send."],
          words: [["Follow", "choose to see someone's posts in your feed."], ["Group", "a space on the app for people with the same interest."], ["Comment", "words you write under someone's post."], ["React", "tap a like, heart or other symbol on a post."]],
          slides: [
            { title: "Follow and join", bullets: ["Search the name", "Check it is really them", "Tap Add friend, Follow or Join"] },
            { title: "Make a post", bullets: ["Tap the post box or +", "Write and add a photo", "Check who can see it, then Post"] },
            { title: "React and comment", bullets: ["React: like or heart", "Comment: your words under a post", "Be kind; posts can last a long time"] }
          ],
          tryIt: "Follow one family member or friend and join or follow one local group or page. Then leave a kind comment on one of their posts.",
          youCanNow: "follow people and groups, make a post, and react and comment kindly.",
          quickCheck: [
            { objective: "O3", q: "What does a reaction, such as a thumbs up or heart, show?", options: ["That you want to block the person", "That you reported the post", "That you shared the post with everyone", "That you saw the post"], answer: 3, why: "A reaction shows you saw a post; a comment adds your words." },
            { objective: "O3", q: "You disagree with a cousin's post. What would you do?", options: ["Write kindly, as if the person were in the room, or say nothing", "Write an angry comment in capital letters", "Post their phone number", "Share the post with an insult"], answer: 0, why: "Be kind; what you post can be copied and seen for a long time." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting started on social media",
        questions: [
          { objective: "O1", q: "You want free calls and messages with family in another country. Which app fits best?", options: ["LinkedIn", "WhatsApp", "Nextdoor", "TikTok"], answer: 1, why: "WhatsApp is for messages and calls, including across countries." },
          { objective: "O2", q: "Which detail should you leave OUT of your profile?", options: ["Your first name", "A friendly photo", "Your home address", "A favorite hobby"], answer: 2, why: "A home address lets strangers find you." },
          { objective: "O2", q: "What does two-step verification do?", options: ["Asks for a code from your phone as well as your password", "Makes posts bigger", "Adds friends for you", "Deletes your account"], answer: 0, why: "A thief would need your phone code too." },
          { objective: "O3", q: "You search for your niece and find two accounts with her name. What do you do?", options: ["Add both", "Send money to both", "Give both your password", "Check the photo, shared friends and posts first"], answer: 3, why: "Checking helps you avoid fake copy accounts." },
          { objective: "O3", q: "What is a comment?", options: ["Your password", "A private bank message", "Words you write under someone's post", "An app update"], answer: 2, why: "A comment is your reply written under a post." }
        ]
      }
    },
    {
      name: "Chapter 2: Staying private and safe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Privacy settings: choosing who sees what",
          minutes: 5,
          goal: "Set your posts and profile so only people you choose can see them.",
          text: [
            "Every app has privacy settings. They decide who can see your posts, who can find you, and who can message you. Public means anyone in the world. Friends or followers you approve means only people you said yes to.",
            "Look for Settings, then Privacy (on some apps it is in a menu with three lines or your profile picture). Many apps also have a privacy check-up that walks you through each choice.",
            "A good start: make posts visible to friends only, approve new followers yourself, and limit who can message you. Turn off location sharing in posts if you do not want people to know where you are."
          ],
          steps: ["Open the app's menu or your profile picture.", "Choose Settings, then Privacy (or a privacy check-up).", "Set who can see your posts to friends or approved followers.", "Set who can message you and find you.", "Turn off location in posts if you do not need it."],
          words: [["Public", "anyone, even strangers, can see it."], ["Privacy settings", "the choices that control who sees your posts and profile."], ["Location sharing", "showing where you are when you post."]],
          slides: [
            { title: "Who can see it?", bullets: ["Public: anyone in the world", "Friends or approved followers: only people you say yes to"] },
            { title: "Finding privacy settings", bullets: ["Menu or profile picture, then Settings", "Look for Privacy or a privacy check-up"] },
            { title: "A good start", bullets: ["Posts: friends only", "Approve followers yourself", "Limit who can message you", "Location off in posts"] }
          ],
          tryIt: "Open your app's privacy settings. Set your posts to friends or approved followers only, and turn off location in posts. Then look at your own profile the way a stranger would, if the app lets you.",
          youCanNow: "set your privacy so only people you choose see your posts and details.",
          quickCheck: [
            { objective: "O4", q: "What is a privacy check-up?", options: ["A doctor's visit", "A tool in many apps that walks you through each privacy choice", "A way to post publicly", "A scam message"], answer: 1, why: "Many apps offer a privacy check-up that walks you through each choice." },
            { objective: "O4", q: "You do not want strangers to see where you are when you post. What would you do?", options: ["Make all posts public", "Post your address instead", "Turn off location sharing in posts", "Accept every friend request"], answer: 2, why: "Turning off location in posts stops people knowing where you are." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Spotting fake accounts and scams",
          minutes: 5,
          goal: "Recognize a fake account or scam message and refuse it.",
          text: [
            "Scammers make fake accounts, sometimes copying a real friend's name and photo. A second friend request from someone you are already friends with is a warning sign. Ask the real person by phone before you accept.",
            "The Federal Trade Commission (FTC) lists signs of a scam: pretending to be someone you know or trust, a problem or a prize, pressure to act right now, and asking for payment by gift card, wire transfer, payment app or cryptocurrency. On social media this looks like \"You won! Pay a small fee\", romance messages that soon ask for money, and \"too good to be true\" job or investment offers.",
            "Never send money, gift cards or codes to someone you have only met online. In the United States you can report scams at reportfraud.ftc.gov."
          ],
          steps: ["Be careful with new friend requests, especially from people you already know.", "Check by phone or in person before you accept.", "Watch for: a prize, a rush, money or gift card requests, and love or job offers that turn to money.", "Do not click their links or send money or codes.", "Report the account in the app, and in the US at reportfraud.ftc.gov."],
          words: [["Fake account", "a profile made by a scammer, often copying a real person."], ["Romance scam", "a scammer pretends to love you online, then asks for money."]],
          slides: [
            { title: "Fake accounts", bullets: ["A second request from a friend you already have", "New profile, few posts, few friends", "Check with the real person first"] },
            { title: "FTC scam signs", bullets: ["Pretends to be someone you trust", "A problem or a prize", "Pressure to act now", "Pay by gift card, wire, payment app or crypto"] },
            { title: "Never send", bullets: ["Money or gift cards to someone met only online", "Codes from your phone"] },
            { title: "Report it", bullets: ["Use the app's Report button", "US: reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Look at your friend requests or followers. For any you are not sure about, check the profile for warning signs. Decline anyone you cannot confirm is real.",
          youCanNow: "spot a fake account or scam on social media and refuse it.",
          quickCheck: [
            { objective: "O5", q: "Which of these is a warning sign of a scam on social media?", options: ["Pressure to act right now and pay with a gift card", "A friend you know sharing a birthday photo", "A local group posting a meeting time", "A video about cooking"], answer: 0, why: "Pressure to act now and payment by gift card are signs the FTC lists." },
            { objective: "O5", q: "Someone you met online offers you a job if you first send them a code from your phone. What would you do?", options: ["Send the code quickly", "Send money instead of the code", "Give them your password", "Refuse and never send codes to someone you only met online"], answer: 3, why: "Never send money, gift cards or codes to someone you have only met online." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reporting, blocking and taking a break",
          minutes: 4,
          goal: "Block or report an account and control how much time you spend.",
          text: [
            "Block stops a person from seeing your posts or contacting you. Report tells the app that an account or post breaks its rules, such as a scam, a fake account or bullying. Unfollow or mute hides someone's posts without telling them.",
            "These buttons are usually in the three-dot menu on a post or on a person's profile. The app does not tell the person you reported them.",
            "Social media is made to keep you scrolling. Many phones and apps have a screen time or time limit setting. Pick times to check it, and step away if posts make you feel angry or sad."
          ],
          steps: ["Tap the three dots on the post or profile.", "Choose Report and pick the reason, or Block.", "Use Mute or Unfollow to hide posts quietly.", "In Settings, look for screen time or a daily time limit."],
          words: [["Block", "stops a person from seeing you or contacting you."], ["Report", "tells the app an account or post breaks its rules."], ["Mute", "hides someone's posts without telling them."]],
          slides: [
            { title: "Your tools", bullets: ["Block: they cannot contact you", "Report: tell the app about a problem", "Mute or Unfollow: hide posts quietly"] },
            { title: "Where to find them", bullets: ["The three-dot menu on a post or profile", "The person is not told you reported them"] },
            { title: "Take a break", bullets: ["Use screen time or time limit settings", "Step away if posts upset you"] }
          ],
          tryIt: "Final task practice: on any post, tap the three dots and find Report, Block and Mute (do not press them unless you need to). Then check your privacy setting is still friends only.",
          youCanNow: "block, report or mute an account and set limits on your time.",
          quickCheck: [
            { objective: "O6", q: "What does Report do?", options: ["Sends the person your address", "Deletes your account", "Tells the app a post or account breaks its rules", "Makes your posts public"], answer: 2, why: "Report tells the app about a scam, fake account or bullying." },
            { objective: "O6", q: "A relative posts so much that you want to see less, without upsetting them. What would you do?", options: ["Report them as a scam", "Mute or unfollow them", "Block them and tell everyone", "Delete your own account"], answer: 1, why: "Mute or unfollow hides their posts without telling them." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Staying private and safe",
        questions: [
          { objective: "O4", q: "What does \"public\" mean for a post?", options: ["Only you can see it", "Anyone, even strangers, can see it", "Only your family can see it", "It is deleted"], answer: 1, why: "Public posts can be seen by anyone." },
          { objective: "O5", q: "A friend you are already connected to sends a new friend request. What is the safest step?", options: ["Accept it right away", "Send them money", "Call the real friend to check before accepting", "Give them your phone code"], answer: 2, why: "Scammers copy real friends' accounts." },
          { objective: "O5", q: "Someone you met online last month says they love you and need money for a plane ticket. This is most likely:", options: ["A romance scam", "A normal request", "A job offer", "A privacy setting"], answer: 0, why: "Online love that turns to money requests is a common scam." },
          { objective: "O6", q: "Which button stops a person from contacting you?", options: ["Like", "Share", "Comment", "Block"], answer: 3, why: "Block stops them seeing or contacting you." },
          { objective: "O6", q: "Where are Report and Block usually found?", options: ["In the camera", "In the three-dot menu on a post or profile", "In your contacts", "In the app store"], answer: 1, why: "The three-dot menu holds these options." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Social Media Apps and How to Use Them",
    questions: [
      { objective: "O1", q: "Which app is mainly for jobs and work contacts?", options: ["TikTok", "LinkedIn", "Instagram", "YouTube"], answer: 1, why: "LinkedIn is built for work and jobs." },
      { objective: "O1", q: "Which app is mainly for watching and learning from videos?", options: ["YouTube", "WhatsApp", "Nextdoor", "LinkedIn"], answer: 0, why: "YouTube is a video app." },
      { objective: "O3", q: "A \"feed\" is:", options: ["Your password", "A privacy setting", "The list of posts you scroll through", "A kind of comment"], answer: 2, why: "Your feed shows posts from people and groups you follow." },
      { objective: "O2", q: "Where should you install a social media app?", options: ["From a link a stranger sends", "From a pop-up", "From any website", "From the official app store"], answer: 3, why: "Official stores have the real apps." },
      { objective: "O2", q: "Which belongs in a safe profile?", options: ["Your name and a friendly photo", "Your full birth date and address", "Your bank details", "Your travel dates"], answer: 0, why: "Name and photo are fine; private details are not." },
      { objective: "O2", q: "Why not post that you are away on holiday?", options: ["It makes the app slow", "It tells strangers your home may be empty", "It is against all laws", "It uses your data plan"], answer: 1, why: "Travel posts can tell thieves when no one is home." },
      { objective: "O2", q: "Two-step verification needs:", options: ["Only your password", "A friend's password", "Your bank number", "Your password and a code from your phone"], answer: 3, why: "It adds a second check from your phone." },
      { objective: "O3", q: "Before you follow someone, check:", options: ["Their photo, shared friends and posts", "Their bank balance", "Their password", "Nothing"], answer: 0, why: "This helps make sure it is the real person." },
      { objective: "O3", q: "A group on social media is:", options: ["A virus", "A password", "A space for people with the same interest", "A type of ad"], answer: 2, why: "Groups gather people around one interest." },
      { objective: "O3", q: "Before you tap Post, you should check:", options: ["Your battery", "The weather", "Your bank account", "Who can see it"], answer: 3, why: "Checking the audience protects your privacy." },
      { objective: "O3", q: "Which comment is kind and suitable?", options: ["A link from a stranger", "An insult", "Your phone number", "\"Great photo, the kids look so happy!\""], answer: 3, why: "Write as if the person were in the room." },
      { objective: "O4", q: "Privacy settings control:", options: ["Your phone's battery", "The app's colors", "Who can see your posts and contact you", "Your internet speed"], answer: 2, why: "They decide who sees and reaches you." },
      { objective: "O4", q: "A good first privacy choice is:", options: ["Posts set to public", "Let anyone message you", "Share your location on every post", "Posts set to friends or approved followers"], answer: 3, why: "Friends only keeps strangers out." },
      { objective: "O4", q: "Turning off location in posts:", options: ["Blocks your friends", "Deletes your account", "Stops people knowing where you are", "Makes photos blurry"], answer: 2, why: "Your location is no longer shown on posts." },
      { objective: "O5", q: "A message says you won a prize but must pay a small fee first. This is:", options: ["A normal prize", "A privacy setting", "A friend request", "A scam sign"], answer: 3, why: "The FTC lists a prize with a fee as a scam sign." },
      { objective: "O5", q: "Which payment request is a warning sign?", options: ["Gift cards", "Paying a store at the counter", "Paying your phone bill on the company's site", "Paying a doctor at the front desk"], answer: 0, why: "Scammers ask for gift cards because they are hard to trace." },
      { objective: "O5", q: "In the US, you can report a social media scam to:", options: ["A comment section", "The scammer", "reportfraud.ftc.gov", "Your feed"], answer: 2, why: "The FTC takes fraud reports there." },
      { objective: "O6", q: "Mute does what?", options: ["Reports a crime", "Deletes their account", "Calls the police", "Hides someone's posts without telling them"], answer: 3, why: "Muting quietly hides posts." },
      { objective: "O6", q: "When you report an account, the app:", options: ["Tells them your name", "Deletes your profile", "Does not tell them you reported them", "Charges a fee"], answer: 2, why: "Reports are kept private from the person." },
      { objective: "O6", q: "Posts keep making you angry. A healthy step is:", options: ["Scroll more", "Use a time limit and step away", "Post your address", "Accept every request"], answer: 1, why: "Time limits and breaks protect your wellbeing." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      4,
      5,
      7,
      9,
      11,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Privacy settings",
        objective: "O4",
        notYet: "Posts are still public, or anyone can follow without approval.",
        meets: "Posts are visible only to friends or approved followers.",
        exceeds: "Also limits who can message you and turns off location in posts."
      },
      {
        name: "Following safely",
        objective: "O3",
        notYet: "Followed no one, or followed an account without checking it was real.",
        meets: "Follows one checked family member or friend and one local group or page.",
        exceeds: "Explains how they checked the photo, shared friends and posts."
      },
      {
        name: "Kind comment",
        objective: "O3",
        notYet: "No comment, or the comment is unkind or shares private details.",
        meets: "One kind, suitable comment on a post.",
        exceeds: "The comment is warm and specific to the post."
      },
      {
        name: "Report button",
        objective: "O6",
        notYet: "Cannot find Report on a post or account.",
        meets: "Finds Report in the three-dot menu on a post or account.",
        exceeds: "Also finds Block and Mute and says when to use each."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the final task",
      "Learners who report keeping posts private and two-step verification on 30 days later (follow-up survey)",
      "Learners who report refusing or reporting a fake friend request or scam message",
      "Learners who report joining a local, church, job or family group that they use"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone, tablet or computer with internet",
      "One social media app from the official store, and an email or phone number for sign-up",
      "Screenshots of sample scam messages and fake friend requests for practice",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Let each learner choose one app that fits their goal; do not require everyone to join the same app.",
      "Do the privacy settings together, step by step, on each learner's own screen; never sign in to a learner's account yourself.",
      "Use screenshots for scam practice so nobody has to contact a real scammer.",
      "Talk about minimum ages if learners are setting up accounts for grandchildren or children.",
      "Some learners may have been scammed online before; keep the tone free of blame and show where to report."
    ]
  }
};
