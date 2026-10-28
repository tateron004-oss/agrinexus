"use strict";

// Koach Learn course: Athletes -> "Content Creation for Athletes". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-content-creation",
  category: "Athletes",
  name: "Content Creation for Athletes",
  skills: "Planning a short video with a hook, Filming with a phone, Editing with a free app, Writing captions and on-screen text with AI, Building a two-week content calendar",
  outcome: "plan, film, edit and post a 30-to-60-second athlete video with a strong hook, clear captions and on-screen text, and schedule the next two weeks of content in a simple calendar.",
  about: [
    "This course is for athletes and coaches who want to make short videos that people actually watch: training clips, game-day moments, behind-the-scenes, and tips.",
    "You only need a phone and free tools. You will plan a video with a hook, film it well, edit it with a free app such as CapCut or your phone's built-in editor, write captions with help from AI, and plan two weeks of posts.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Make and post one 30-to-60-second athlete video: a written three-part plan (hook, value, ending), filmed on your phone with good light and sound, edited with on-screen text and captions, and a caption written with AI and edited by you. Then fill in a two-week content calendar with six more post ideas.",
  chapters: [
    {
      name: "Chapter 1: Plan and film",
      lessons: [
        {
          title: "The three-part short video",
          minutes: 5,
          goal: "Plan a short video with a hook, value and ending.",
          text: [
            "Short videos are often watched for only a second or two before people scroll. The first moment, called the hook, decides if they stay.",
            "Plan three parts: 1. Hook (first 1 to 3 seconds): a question, a surprising moment, or a bold line like \"The drill that fixed my jump shot.\" 2. Value (the middle): show the drill, the moment or the tip. 3. Ending: a call to action like \"Save this for practice\" or a satisfying finish.",
            "Write the plan before you film. An AI assistant can give you ten hook ideas: \"Give me 10 short hooks for a video showing my 5-minute footwork warm-up for basketball.\""
          ],
          steps: ["Pick one idea from your content pillars.", "Write a hook for the first 1-3 seconds.", "List the shots that show the value.", "Write the ending or call to action.", "Ask AI for more hook ideas and pick the best."],
          words: [["Hook", "the first 1 to 3 seconds that make people want to keep watching."], ["Call to action", "a clear next step you ask viewers to take."]],
          slides: [
            { title: "Why the hook matters", bullets: ["People decide in a second or two", "Hook = first 1-3 seconds"] },
            { title: "Three parts", bullets: ["1. Hook: question, surprise, bold line", "2. Value: the drill, moment or tip", "3. Ending: call to action or finish"] },
            { title: "Plan first", bullets: ["Write it before filming", "Ask AI for 10 hook ideas"] }
          ],
          tryIt: "Write a three-part plan for one short video. Ask an AI assistant for ten hooks and choose the one that fits you best.",
          youCanNow: "plan a short video with a hook, value and ending."
        },
        {
          title: "Filming with your phone",
          minutes: 5,
          goal: "Film clean clips with good light, steady framing and clear sound.",
          text: [
            "Light: face the light, not away from it. Daylight from a window or outdoors in the shade is great. Avoid filming with a bright window behind you.",
            "Framing and steadiness: film vertically for short-video apps, keep the phone steady with a tripod or by leaning on something, and keep the action in the middle of the frame. Wipe your lens first. Slow-motion mode is great for showing technique.",
            "Sound: if you are talking, get close to the phone and away from wind and loud gyms, or add voice-over later. Ask permission before filming teammates, coaches or other people, and follow your team's filming rules."
          ],
          steps: ["Wipe the lens.", "Face the light.", "Film vertically and steady.", "Keep the action centered.", "Record a few extra seconds before and after each clip.", "Ask permission before filming others."],
          words: [["Vertical video", "video filmed with the phone upright, the shape most short-video apps use."], ["Voice-over", "talking recorded separately and added on top of the video."]],
          slides: [
            { title: "Light", bullets: ["Face the light", "Window or outdoor shade", "No bright window behind you"] },
            { title: "Frame and steady", bullets: ["Vertical for short-video apps", "Tripod or lean on something", "Wipe the lens; try slow motion"] },
            { title: "Sound and permission", bullets: ["Get close or use voice-over", "Ask before filming others"] }
          ],
          tryIt: "Film the clips for your planned video. Shoot each one twice and keep the best take.",
          youCanNow: "film clean, steady clips with good light and sound."
        },
        {
          title: "Telling a story in your clips",
          minutes: 4,
          goal: "Choose and order clips so the video tells a short story.",
          text: [
            "Even a 30-second video can tell a story: a problem, the work, the result. \"I kept missing left-handed layups. Here's the drill I did every day for two weeks. Now look.\"",
            "Use different shots: a wide shot to show where you are, a medium shot for the action, and a close-up for details like footwork or hands. Switching shots keeps people watching.",
            "Behind-the-scenes and real moments, like early workouts, team bus rides or a thank-you to a coach, often connect better than perfect highlight edits. Stay honest; do not fake results."
          ],
          steps: ["Write your story in one line: problem, work, result.", "Pick a wide, medium and close-up clip.", "Order them to match the story.", "Cut anything that does not help the story."],
          words: [["Wide shot", "shows the whole scene and where you are."], ["Close-up", "a tight shot of a detail, like hands or feet."]],
          slides: [
            { title: "Short story", bullets: ["Problem", "The work", "The result"] },
            { title: "Mix your shots", bullets: ["Wide: where you are", "Medium: the action", "Close-up: the details"] },
            { title: "Real connects", bullets: ["Behind-the-scenes moments", "Stay honest; no fake results"] }
          ],
          tryIt: "Write your video's story in one line, then put your clips in order: at least one wide, one medium and one close-up.",
          youCanNow: "order clips into a short, honest story with varied shots."
        }
      ],
      check: {
        title: "Knowledge Check 1: Plan and film",
        questions: [
          { q: "What is a hook?", options: ["The end credits", "A type of tripod", "The first 1-3 seconds that make people keep watching", "A hashtag"], answer: 2, why: "The hook decides if people stay." },
          { q: "Which is a strong hook?", options: ["\"The drill that fixed my jump shot\"", "\"Um, hi, so...\"", "A long silent intro", "A black screen"], answer: 0, why: "It promises value right away." },
          { q: "Where should the light be when you film yourself?", options: ["Behind you", "Nowhere", "Only from above", "In front of you, facing you"], answer: 3, why: "Facing the light keeps your face clear." },
          { q: "Before filming a teammate, you should:", options: ["Film secretly", "Ask their permission", "Post it first", "Use their name without asking"], answer: 1, why: "Permission and team rules come first." },
          { q: "A simple video story is:", options: ["Random clips", "Problem, the work, the result", "Only the ending", "Only text"], answer: 1, why: "That structure keeps viewers interested." }
        ]
      }
    },
    {
      name: "Chapter 2: Edit, caption and plan",
      lessons: [
        {
          title: "Editing with a free app",
          minutes: 6,
          goal: "Edit your clips into a tight video with text and music you are allowed to use.",
          text: [
            "Free editors like CapCut, your phone's built-in photo app, or the editing tools inside Instagram, TikTok and YouTube Shorts let you trim clips, put them in order and add text.",
            "Cut tight: trim the start and end of every clip so there is no dead time. Add short on-screen text for the hook and key points, big enough to read on a phone. Add captions (subtitles), since many people watch with the sound off, and check them for mistakes.",
            "Music: use the app's built-in licensed music library or royalty-free tracks. Using a popular song from somewhere else can get your video muted or removed, and sponsored posts may have stricter music rules."
          ],
          steps: ["Import your clips in order.", "Trim dead time at the start and end of each clip.", "Add hook text in the first seconds.", "Add captions and check them.", "Add music from the app's library.", "Watch it once full screen on your phone."],
          words: [["Trim", "cut off the parts of a clip you do not need."], ["Captions", "words on screen that show what is said."], ["Royalty-free music", "music you can use under its license without paying per use."]],
          slides: [
            { title: "Free editors", bullets: ["CapCut", "Your phone's built-in editor", "Editing tools inside the social apps"] },
            { title: "Cut tight", bullets: ["No dead time", "Hook text in the first seconds", "Captions: many watch with sound off"] },
            { title: "Music", bullets: ["Use the app's licensed library", "Other songs can get muted or removed"] }
          ],
          tryIt: "Edit your video to 30-60 seconds with hook text, captions and music from the app's library. Watch it full screen and cut anything slow.",
          youCanNow: "edit a tight short video with text, captions and allowed music."
        },
        {
          title: "Captions and posts with AI",
          minutes: 5,
          goal: "Write a post caption with AI help, in your voice, with honest disclosures.",
          text: [
            "The post caption is the text under your video. Ask an AI assistant: \"Write three short captions for my video showing my footwork warm-up. Friendly, under 150 characters, end with a question to get comments.\"",
            "Pick one and make it sound like you. Add a few relevant hashtags, not dozens. Tag people only if they agreed.",
            "If a brand paid you or gave you anything for the video, say it clearly in the video (spoken and on screen) and in the caption, near the start, like \"Ad\" or \"Thanks [brand] for the free gear\". The FTC says putting it only at the end, in hashtags or in the description is not enough. College athletes: check NIL reporting rules with your compliance office."
          ],
          steps: ["Ask AI for three short caption options.", "Rewrite your pick in your voice.", "Add a few relevant hashtags.", "If a brand is involved, disclose in the video and near the start of the caption.", "Post when your audience is usually online."],
          words: [["Hashtag", "a word with # in front that groups posts on a topic."], ["Disclosure", "a clear statement that a brand paid you or gave you something."]],
          slides: [
            { title: "AI drafts captions", bullets: ["Three short options", "End with a question"] },
            { title: "Make it yours", bullets: ["Your voice", "A few relevant hashtags", "Tag people only with permission"] },
            { title: "Brand involved?", bullets: ["Say it and show it in the video", "\"Ad\" near the start of the caption", "Check NIL rules"] }
          ],
          sources: [{ name: "FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Write the caption for your video with AI help, edit it into your voice, and post the video.",
          youCanNow: "write a short, honest post caption with AI help."
        },
        {
          title: "Your two-week content calendar",
          minutes: 5,
          goal: "Plan two weeks of posts in a simple calendar that fits your training.",
          text: [
            "Posting regularly matters more than posting a lot. Three or four posts a week is plenty for most athletes in season.",
            "Make a calendar in Google Sheets or a notes app with columns: Date, Pillar (training, game day, off the field, lessons), Idea, Format (short video, photo, story), and Status (idea, filmed, edited, posted). Batch your work: film several clips in one session.",
            "Ask an AI assistant to fill the first draft from your pillars and schedule, then edit it. Block out busy weeks like finals or tournaments: it is fine to post less then."
          ],
          steps: ["Make columns: Date, Pillar, Idea, Format, Status.", "Plan 3-4 posts a week for two weeks.", "Ask AI to draft ideas from your pillars.", "Edit around games, exams and travel.", "Batch filming into one session."],
          words: [["Content calendar", "a schedule of what you will post and when."], ["Batching", "doing many of the same task at once, like filming five clips in one session."]],
          slides: [
            { title: "Regular beats a lot", bullets: ["3-4 posts a week in season"] },
            { title: "Calendar columns", bullets: ["Date, Pillar, Idea", "Format, Status"] },
            { title: "Work smart", bullets: ["AI drafts ideas", "Batch your filming", "Post less in busy weeks"] }
          ],
          tryIt: "Final task: post your 30-60 second video, then build a two-week content calendar with six more post ideas, drafted with AI and edited around your schedule.",
          youCanNow: "plan two weeks of content in a calendar that fits your training."
        }
      ],
      check: {
        title: "Knowledge Check 2: Edit, caption and plan",
        questions: [
          { q: "Why add captions to your video?", options: ["They make it longer", "They are required by the NCAA", "To hide mistakes", "Many people watch with the sound off"], answer: 3, why: "Captions let sound-off viewers follow along." },
          { q: "Which music is safest to use?", options: ["The app's licensed music library", "Any song from the radio", "A song from a movie", "Your friend's download"], answer: 0, why: "Other songs can get your video muted or removed." },
          { q: "A brand paid for your video. Where should the disclosure be?", options: ["Only in hashtags at the end", "Only in the description", "Said and shown in the video and near the start of the caption", "Nowhere"], answer: 2, why: "The FTC says disclosures must be hard to miss." },
          { q: "What matters more for posting?", options: ["Posting 20 times a day", "Posting only once a year", "Copying others", "Posting regularly"], answer: 3, why: "Regular posting builds an audience." },
          { q: "Batching means:", options: ["Posting without editing", "Filming several clips in one session", "Deleting old posts", "Buying followers"], answer: 1, why: "Batching saves time during busy seasons." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Content Creation for Athletes",
    questions: [
      { q: "How long is the hook?", options: ["The last minute", "The whole video", "The first 1-3 seconds", "The caption"], answer: 2, why: "Viewers decide fast." },
      { q: "The middle of a short video should give:", options: ["Value: the drill, moment or tip", "Silence", "A long intro", "Only your logo"], answer: 0, why: "Value keeps people watching." },
      { q: "Why write a plan before filming?", options: ["You know what shots you need", "It's required", "To waste time", "It makes videos longer"], answer: 0, why: "Planning saves time and gets better clips." },
      { q: "AI can help your plan by:", options: ["Filming for you", "Running your account", "Suggesting hook ideas", "Choosing your sport"], answer: 2, why: "Brainstorming is a strength of AI." },
      { q: "Before filming, you should:", options: ["Turn off the lights", "Wipe your lens", "Shake the phone", "Cover the microphone"], answer: 1, why: "A clean lens gives a clear picture." },
      { q: "For short-video apps, film:", options: ["Upside down", "Only sideways", "With the lens covered", "Vertically"], answer: 3, why: "Short-video apps use vertical video." },
      { q: "Slow motion is great for:", options: ["Hiding mistakes", "Saving storage", "Showing technique", "Recording sound"], answer: 2, why: "It shows detail in fast movement." },
      { q: "Talking on video in a loud gym? Try:", options: ["Shouting", "Turning up music", "Filming far away", "Getting close or adding voice-over"], answer: 3, why: "Clear sound needs closeness or a voice-over." },
      { q: "A close-up shot shows:", options: ["Details like hands or feet", "The whole stadium", "The sky", "Nothing"], answer: 0, why: "Close-ups show detail." },
      { q: "Which often connects with followers?", options: ["Fake results", "Real behind-the-scenes moments", "Stolen clips", "Long silent videos"], answer: 1, why: "Real moments build trust." },
      { q: "Trimming means:", options: ["Adding more clips", "Changing the color", "Cutting parts of a clip you don't need", "Posting twice"], answer: 2, why: "Tight edits keep attention." },
      { q: "Which is a free editing option?", options: ["CapCut or your phone's built-in editor", "Only expensive studio software", "A printer", "A calculator"], answer: 0, why: "Free tools are enough to start." },
      { q: "Using a popular song from outside the app can:", options: ["Always make it go viral", "Pay you money", "Nothing happens", "Get your video muted or removed"], answer: 3, why: "Music rights matter." },
      { q: "On-screen text should be:", options: ["Tiny", "Big enough to read on a phone", "Hidden", "In ten fonts"], answer: 1, why: "Most viewers are on phones." },
      { q: "A good caption often ends with:", options: ["Fifty hashtags", "A question to get comments", "Your phone number", "Nothing"], answer: 1, why: "Questions invite engagement." },
      { q: "How many hashtags should you use?", options: ["Fifty random ones", "None ever", "Only trending unrelated ones", "A few relevant ones"], answer: 3, why: "Relevant hashtags help the right people find you." },
      { q: "You should tag people in a post:", options: ["Only if they agreed", "Always, without asking", "Randomly", "Never"], answer: 0, why: "Respect others' privacy." },
      { q: "Which is a clear brand disclosure?", options: ["\"#sp\" at the end", "\"collab?\"", "\"Ad\" or \"Thanks [brand] for the free gear\"", "Nothing"], answer: 2, why: "The FTC says use clear, simple words." },
      { q: "A content calendar Status column tracks:", options: ["Your mood", "The weather", "Your grades", "Idea, filmed, edited, posted"], answer: 3, why: "Status shows where each post is." },
      { q: "During finals week, it is fine to:", options: ["Skip exams to post", "Post less", "Buy content", "Post 20 times a day"], answer: 1, why: "School and training come first." }
    ]
  }
};
