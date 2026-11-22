"use strict";

// Koach Learn course: Youth -> "AI Video Creation" (bonus). Skill-building: by the end the student can plan, film, edit and share a short video with AI helping on the script, storyboard and captions, while respecting permission, copyright and honesty about AI.
// Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "youth-ai-video",
  category: "Youth",
  name: "AI Video Creation",
  skills: "Writing a short script with AI, Making a storyboard, Filming with a phone, Editing in a free editor, Adding captions and music responsibly, Sharing safely",
  outcome: "plan, film and edit a 30-to-60-second video (such as a promo for a school club or event) using AI to help with the script, storyboard and captions, with permission from everyone on camera, music you are allowed to use, and an honest label for anything AI made.",
  about: [
    "This course is for teens who want to make better videos for school projects, clubs, teams, a band or their own channel. A phone and a free video editor are enough.",
    "You will use an AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini to brainstorm and write a short script, turn it into a storyboard, film it with good light and sound, edit it in a free editor such as CapCut or Canva, add captions, and share it safely.",
    "Video apps and AI tools have minimum ages and some need an account, so read each tool's terms, follow your school's rules on AI and filming, and involve a parent or guardian when you sign up. Each lesson ends with a \"Try it now\" task, a knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Make a 30-to-60-second video that promotes a school club, team, event or cause you care about. Use AI to help write the script and storyboard, film at least four shots with permission from everyone on camera, edit it in a free editor, add captions and music you are allowed to use, label anything AI-generated, and export it.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teens who want to make better videos for school projects, clubs, teams, a band or their own channel.",
    startingPoint: "Film and watch short videos on their phones every day. Few plan with a script or storyboard, control light and sound, edit tightly, or know the rules on filming permission, music copyright and labeling AI content.",
    gap: "Unplanned videos lose viewers in seconds, and careless ones can use music without permission, film people who said no, or spread AI fakes that hurt people. Teens need to plan, film and edit a short video well while using AI honestly and respecting others.",
    constraints: [
      "Age limits and account rules for video and AI apps; a parent or guardian is involved in sign-ups",
      "School rules on AI and on filming students; some students cannot be filmed or posted",
      "Devices: a phone and a free editor such as CapCut or Canva",
      "Copyright and consent: only allowed music and clips; permission from everyone on camera",
      "Privacy when sharing: no full name, school address or schedule in public posts"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Thinking about videos you watch and make", action: "explain how AI helps with video, what a deepfake is, and the ground rules you will follow", standard: "getting at least 3 of 4 right" },
    { id: "O2", condition: "Given a topic, audience and length", action: "draft a script with AI that has a hook, short scenes and a call to action, and turn it into a storyboard", standard: "rewritten in your own voice, with the facts checked and the total time fitting the length" },
    { id: "O3", condition: "Using a phone", action: "film steady, well-lit shots with clear sound", standard: "with permission from everyone on camera and following school filming rules" },
    { id: "O4", condition: "Using a free video editor", action: "import, trim and order your clips and add a title and call to action as text", standard: "following the storyboard with no dead time" },
    { id: "O5", condition: "Before your video is finished", action: "add accurate captions, music you are allowed to use, and labels for anything AI-generated", standard: "with every caption checked and no real person's face or voice made by AI without permission" },
    { id: "O6", condition: "When the edit is done", action: "get feedback, export the video and share it safely", standard: "keeping personal details private and saying how you used AI on school work" }
  ],
  chapters: [
    {
      name: "Chapter 1: Planning and filming",
      lessons: [
        {
          objectives: ["O1"],
          title: "How AI helps with video, and the ground rules",
          minutes: 4,
          goal: "Name ways AI helps with video and the rules you will follow.",
          text: [
            "AI shows up all over video making: assistants that help brainstorm and write scripts, editors that make automatic captions or remove background noise, and generators that create images or clips from a text prompt.",
            "AI can also be misused. A deepfake is a fake video or voice that makes a real person seem to say or do something they did not. Making deepfakes of classmates, teachers or celebrities can hurt people, break school rules and in some places break the law.",
            "Your ground rules: get permission from everyone you film, use only music and clips you are allowed to use, label anything AI-generated, check each app's minimum age, and follow your school's rules."
          ],
          words: [["Script", "the words and actions planned for a video."], ["Deepfake", "a fake video or voice that makes a real person seem to say or do something they did not."], ["AI-generated", "made by an AI tool instead of filmed or drawn by a person."]],
          slides: [
            { title: "AI in video making", bullets: ["Brainstorming and scripts", "Automatic captions and noise removal", "Images or clips from a prompt"] },
            { title: "Misuse: deepfakes", bullets: ["Fake a real person saying or doing things", "Hurts people and breaks school rules", "Never make them"] },
            { title: "Ground rules", bullets: ["Permission from everyone on camera", "Music and clips you may use", "Label AI-made content", "Check app ages and school rules"] }
          ],
          tryIt: "Pick the topic of your final video: a club, team, event or cause at your school or in your community. Write one sentence on who the video is for and what you want them to do after watching.",
          youCanNow: "name ways AI helps with video and explain the rules for using it fairly.",
          quickCheck: [
            { objective: "O1", q: "Which of these is a helpful way AI is used in video?", options: ["Making a fake video of a teacher", "Removing background noise from a recording", "Copying someone's face without asking", "Stealing a song"], answer: 1, why: "AI helps with scripts, captions and noise removal; fakes of real people are misuse." },
            { objective: "O1", q: "A friend wants to make a funny deepfake of the principal for your club video. What do you do?", options: ["Make it but only show friends", "Make it with a blurry face", "Post it without a label", "Say no, because it can hurt people and break rules"], answer: 3, why: "Deepfakes of real people can hurt them, break school rules and in some places break the law." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Writing a script and storyboard with AI",
          minutes: 5,
          goal: "Use AI to draft a short script and turn it into a shot-by-shot storyboard.",
          text: [
            "Short videos need a hook in the first 3 seconds, a clear middle, and an ending that tells people what to do, like \"Join us Thursday in Room 12\".",
            "Ask AI for a draft: \"Write a 45-second script for a video inviting freshmen to join our robotics club. Include a hook, 3 short scenes and a call to action. Use casual words for teens.\" Then rewrite it so it sounds like you and your club.",
            "A storyboard is the plan for each shot: what we see, what we hear, and how long. Ask AI to turn your script into a table with those columns. You can sketch stick figures too."
          ],
          steps: ["Tell the AI the topic, audience, length and tone.", "Ask for a hook, 3 short scenes and a call to action.", "Rewrite it in your own voice and check the facts (dates, room, times).", "Ask the AI to turn it into a storyboard table: shot, what we see, what we hear, seconds.", "Make sure the total time fits your length."],
          words: [["Hook", "the first few seconds that grab attention."], ["Call to action", "the line that tells viewers what to do next."], ["Storyboard", "a shot-by-shot plan of a video."], ["Shot", "one continuous piece of filming."]],
          slides: [
            { title: "Short video shape", bullets: ["Hook in the first 3 seconds", "Clear middle", "Call to action at the end"] },
            { title: "Ask AI for a draft", bullets: ["Topic, audience, length, tone", "Then rewrite it in your voice", "Check dates, times and places"] },
            { title: "Storyboard", bullets: ["Shot number", "What we see and hear", "How many seconds"] }
          ],
          tryIt: "Use an AI assistant to draft a script for your video topic, rewrite it in your voice, and turn it into a storyboard of 4 to 6 shots that fits your time.",
          youCanNow: "write a short video script and storyboard with help from AI.",
          quickCheck: [
            { objective: "O2", q: "What is a storyboard?", options: ["The video's comments section", "The final exported file", "The plan for each shot: what we see, what we hear and how long", "A list of music"], answer: 2, why: "A storyboard plans each shot before you film." },
            { objective: "O2", q: "AI's script says your club meets in Room 14, but you are not sure. What do you do?", options: ["Check the room, date and time yourself before filming", "Keep it; AI is usually right", "Leave the room out of the video", "Ask AI if it is sure"], answer: 0, why: "AI can get dates, times or places wrong, so check the facts." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Filming with a phone",
          minutes: 5,
          goal: "Film steady, well-lit shots with clear sound and permission.",
          text: [
            "Light: face the light, like a window, so the light is on the person's face, not behind them. Steady: hold the phone with two hands, lean on something, or use a stand. Turn the phone sideways or keep it tall to match where you will post.",
            "Sound matters more than people think. Film close to the speaker in a quiet place, away from fans and hallways. Record a 3-second test and listen before the real take.",
            "Ask everyone you film if it is OK, and tell them where the video will be shown. Some students cannot be filmed or posted under school rules, so check with your teacher or club advisor. Do not film people in private places or anyone who says no."
          ],
          steps: ["Face the light toward the person.", "Hold the phone steady with two hands or a stand.", "Choose sideways or tall to match where you will post.", "Record a short sound test and listen.", "Get permission from everyone on camera, and follow school filming rules."],
          words: [["Take", "one try at filming a shot."], ["Framing", "what is inside the edges of the picture."]],
          slides: [
            { title: "Light and steady", bullets: ["Face the light", "Two hands or a stand", "Sideways or tall to match the platform"] },
            { title: "Sound", bullets: ["Get close to the speaker", "Quiet place, no fans or hallways", "Do a 3-second test"] },
            { title: "Permission", bullets: ["Ask everyone on camera", "Say where it will be shown", "Follow school filming rules"] }
          ],
          tryIt: "Film the first two shots from your storyboard. Do a sound test first, get permission from anyone on camera, and film each shot at least twice.",
          youCanNow: "film steady, well-lit shots with clear sound, with permission from the people on camera.",
          quickCheck: [
            { objective: "O3", q: "Why record a short sound test before the real take?", options: ["To use up battery", "To make the video longer", "To test the light", "To hear if the sound is clear before you film"], answer: 3, why: "A 3-second test lets you catch noise or quiet sound before the real take." },
            { objective: "O3", q: "Your club advisor says one student cannot be filmed under school rules. What do you do?", options: ["Film them from behind", "Film them and blur it later", "Plan the shots so that student is not on camera", "Ignore the rule"], answer: 2, why: "Follow school filming rules and do not film anyone who cannot or does not want to be filmed." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning and filming",
        questions: [
          { objective: "O1", q: "What is a deepfake?", options: ["A fake video or voice that makes a real person seem to say or do something they did not", "A type of camera", "A free editing app", "A video's ending"], answer: 0, why: "Deepfakes put words or actions on real people that never happened." },
          { objective: "O2", q: "What should the first 3 seconds of a short video do?", options: ["Show the credits", "Stay silent", "Grab attention with a hook", "Show a blank screen"], answer: 2, why: "A hook keeps viewers watching." },
          { objective: "O2", q: "AI drafts your script. What do you do next?", options: ["Post it unchanged", "Rewrite it in your voice and check the facts", "Delete it", "Add your home address"], answer: 1, why: "You make it yours and make sure dates and places are right." },
          { objective: "O3", q: "Where should the light be when filming a person?", options: ["Behind them", "Nowhere", "Only on the floor", "On their face, like facing a window"], answer: 3, why: "Light on the face makes them easy to see." },
          { objective: "O3", q: "A classmate says they do not want to be in your video. What do you do?", options: ["Film them anyway", "Film them from far away", "Do not film them", "Blur them later without asking"], answer: 2, why: "Only film people who agree." }
        ]
      }
    },
    {
      name: "Chapter 2: Editing and sharing",
      lessons: [
        {
          objectives: ["O4"],
          title: "Editing in a free video editor",
          minutes: 6,
          goal: "Import clips, cut them, put them in order and add text.",
          text: [
            "Free editors such as CapCut and Canva work on phones and in web browsers. Menus change often, so look for these actions: start a new project, import or upload your clips, trim (cut the start and end), split a clip, drag clips into order, and add text.",
            "Follow your storyboard. Cut every shot tight: start right before the action and end right after. Dead time makes people scroll away.",
            "Add a title at the start and your call to action as text at the end. Keep text big, short and on screen long enough to read twice."
          ],
          steps: ["Start a new project and import your clips.", "Put the clips in storyboard order.", "Trim the start and end of each clip.", "Add a title and a call to action as text.", "Watch it all the way through and fix anything slow."],
          words: [["Import", "bring your clips into the editor."], ["Trim", "cut off the start or end of a clip."], ["Timeline", "the row in the editor where clips sit in order."]],
          slides: [
            { title: "Free editors", bullets: ["CapCut or Canva on phone or web", "Look for: import, trim, split, text"] },
            { title: "Cut tight", bullets: ["Start right before the action", "End right after it", "No dead time"] },
            { title: "Text on screen", bullets: ["Title at the start", "Call to action at the end", "Big, short, readable"] }
          ],
          tryIt: "Import all your shots, put them in storyboard order, trim each one, and add a title and an ending call to action.",
          youCanNow: "edit clips into a tight, ordered video with a title and a call to action.",
          quickCheck: [
            { objective: "O4", q: "What does it mean to cut a shot \"tight\"?", options: ["Make the text tiny", "Start right before the action and end right after it", "Zoom in on faces", "Use only one shot"], answer: 1, why: "Tight cuts remove dead time that makes viewers scroll away." },
            { objective: "O4", q: "Your call-to-action text flashes by too fast to read. What do you do?", options: ["Make the text smaller", "Delete it", "Add more words", "Keep it on screen long enough to read twice"], answer: 3, why: "On-screen text should be big, short and on screen long enough to read twice." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Captions, music and AI visuals, done right",
          minutes: 5,
          goal: "Add accurate captions, music you may use, and honest labels for AI content.",
          text: [
            "Many people watch with the sound off, and captions help people who are deaf or hard of hearing. Many editors can make automatic captions with AI. Always read them and fix wrong words, especially names.",
            "Music is protected by copyright. According to the U.S. Copyright Office, a work is protected once it is created and fixed, so most songs you hear are protected. Use music from the editor's own library under its rules, music you made, or music with clear permission. Platforms may mute or remove videos that use music without permission.",
            "If you add an AI-generated image or clip, label it, for example \"AI-generated image\" on screen or in the caption. Never use AI to put a real person's face or voice into your video without their clear permission."
          ],
          steps: ["Turn on automatic captions if your editor has them.", "Read every caption and fix mistakes, especially names.", "Choose music from the editor's library, your own, or with permission.", "Label any AI-generated image or clip.", "Use no real person's face or voice made by AI without permission."],
          words: [["Captions", "words on screen that show what is said."], ["Copyright", "the legal right of a creator to control copies of their work."], ["Label", "a short note that says something was made with AI."]],
          slides: [
            { title: "Captions", bullets: ["Many watch with sound off", "Help viewers who are deaf or hard of hearing", "Fix auto-caption mistakes"] },
            { title: "Music you may use", bullets: ["Editor's library under its rules", "Music you made", "Music with clear permission"] },
            { title: "AI visuals", bullets: ["Label them", "No AI faces or voices of real people without permission"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright basics FAQ", url: "https://www.copyright.gov/help/faq/faq-general.html" }],
          tryIt: "Add captions to your video and fix every mistake. Add music you are allowed to use. If you used any AI-generated image or clip, add a label.",
          youCanNow: "add accurate captions, choose music you may use, and label AI-generated content honestly.",
          quickCheck: [
            { objective: "O5", q: "Why read automatic captions before you publish?", options: ["AI captions can get words wrong, especially names", "Captions are always perfect", "To make the video longer", "Captions are optional"], answer: 0, why: "Automatic captions can mishear words, so read and fix them." },
            { objective: "O5", q: "You want a popular song in your club promo. What do you do?", options: ["Use it and hope no one notices", "Use it quietly in the background", "Pick music from the editor's library, your own, or with permission", "Speed it up so it sounds different"], answer: 2, why: "Most songs are protected; use allowed music or the platform may mute or remove the video." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reviewing, exporting and sharing safely",
          minutes: 5,
          goal: "Get feedback, export your video and share it safely.",
          text: [
            "Before you finish, show your video to one or two people and ask: Was the hook strong? Was anything confusing? Did you know what to do at the end? You can also describe your video to an AI assistant and ask for three ways to improve it.",
            "Export the video using the editor's export or save option. Watch the exported file once more to check the sound, captions and ending.",
            "Share it where your club, school and family agree. Keep your full name, school address and schedule out of public posts. If it is a school project, follow your teacher's AI rules and say how you used AI."
          ],
          steps: ["Show the video to one or two people and ask three questions.", "Make one or two improvements.", "Export the video and watch the file once more.", "Share where your club, school and family agree.", "Keep personal details private and say how you used AI on school work."],
          words: [["Feedback", "comments from others that help you improve."], ["Export", "save your project as a video file."]],
          slides: [
            { title: "Get feedback", bullets: ["Was the hook strong?", "Anything confusing?", "Did you know what to do at the end?"] },
            { title: "Export and check", bullets: ["Use export or save", "Watch the file once more"] },
            { title: "Share safely", bullets: ["Where school and family agree", "Keep personal details private", "Say how you used AI on school work"] }
          ],
          tryIt: "Final task: finish your 30-to-60-second video with AI-helped script and storyboard, at least four shots filmed with permission, captions, music you may use and labels for AI content. Get feedback, export it and share it safely.",
          youCanNow: "plan, film, edit, check and share a short video responsibly with help from AI.",
          quickCheck: [
            { objective: "O6", q: "Why watch the exported file once more?", options: ["To check the sound, captions and ending came out right", "To use more data", "To delete the project", "To change the topic"], answer: 0, why: "Exports can have problems, so watch the final file before sharing." },
            { objective: "O6", q: "A viewer says they did not know what to do at the end. What do you change?", options: ["Nothing", "Make the call to action clearer", "Add more music", "Remove the hook"], answer: 1, why: "Feedback about the ending means the call to action needs to be clearer." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Editing and sharing",
        questions: [
          { objective: "O4", q: "What does trim mean in a video editor?", options: ["Add music", "Cut off the start or end of a clip", "Share the video", "Make captions"], answer: 1, why: "Trimming removes extra time at the start or end." },
          { objective: "O5", q: "Automatic captions spelled your club leader's name wrong. What do you do?", options: ["Leave it", "Turn off sound", "Delete the video", "Fix the caption"], answer: 3, why: "Always read and fix auto-captions." },
          { objective: "O5", q: "Which music is safe to use?", options: ["Music from the editor's library under its rules", "A hit song from the radio", "A song ripped from a video site", "Any song if you credit the singer"], answer: 0, why: "Library music under its rules, your own music, or music with permission is OK." },
          { objective: "O5", q: "You added an AI-generated image. What should you do?", options: ["Hide it", "Say you drew it", "Label it as AI-generated", "Remove the captions"], answer: 2, why: "Honest labels tell viewers what AI made." },
          { objective: "O6", q: "What should you do before sharing a school project video?", options: ["Post your school address", "Hide how you used AI", "Skip watching the export", "Follow your teacher's AI rules and say how you used AI"], answer: 3, why: "Following school rules and being honest about AI use matters." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Video Creation",
    questions: [
      { objective: "O1", q: "Which is a helpful way AI is used in video?", options: ["Making automatic captions", "Making fake videos of classmates", "Copying movies", "Stealing accounts"], answer: 0, why: "Automatic captions are a common, helpful AI feature." },
      { objective: "O1", q: "Why are deepfakes of real people a problem?", options: ["They are too short", "They can hurt people and break school rules or laws", "They have no sound", "They need a tripod"], answer: 1, why: "Deepfakes make real people seem to do things they did not." },
      { objective: "O1", q: "Before signing up for a video or AI app, a teen should:", options: ["Use an older friend's account", "Skip the terms", "Check the minimum age and involve a parent or guardian", "Use a fake birthday"], answer: 2, why: "Apps have age limits, and a parent should be involved." },
      { objective: "O2", q: "A call to action is:", options: ["The background music", "A camera setting", "A video's file name", "The line telling viewers what to do next"], answer: 3, why: "It tells viewers what to do, like join or attend." },
      { objective: "O2", q: "Which AI request will give the best script draft?", options: ["\"45-second video inviting freshmen to robotics club; hook, 3 scenes, call to action; casual words\"", "\"video\"", "\"make something\"", "\"robots\""], answer: 0, why: "It gives the topic, audience, length, shape and tone." },
      { objective: "O2", q: "A storyboard shows:", options: ["Only the music", "Each shot: what we see, hear and how long", "The editor's price", "Viewer comments"], answer: 1, why: "A storyboard is a shot-by-shot plan." },
      { objective: "O2", q: "Why check the facts in an AI-written script?", options: ["AI never makes mistakes", "Facts do not matter in videos", "AI can get dates, times or places wrong", "It makes the video longer"], answer: 2, why: "AI can be wrong; you check details." },
      { objective: "O3", q: "To keep your phone steady you can:", options: ["Wave it around", "Hold it with one finger", "Film while running", "Use two hands, lean on something, or use a stand"], answer: 3, why: "Steady shots look more professional." },
      { objective: "O3", q: "The best place to record someone talking is:", options: ["A quiet place, close to the speaker", "Next to a loud fan", "A busy hallway", "Far across a gym"], answer: 0, why: "Quiet places and closeness give clear sound." },
      { objective: "O3", q: "Before filming people for a school club video, you should:", options: ["Film secretly", "Ask permission and check school filming rules", "Only ask after posting", "Film in private places"], answer: 1, why: "Permission and school rules come first." },
      { objective: "O4", q: "Import in a video editor means:", options: ["Posting the video", "Deleting clips", "Bringing your clips into the editor", "Adding captions"], answer: 2, why: "Importing brings clips in to edit." },
      { objective: "O4", q: "Why cut each shot tight?", options: ["To use more storage", "To make the video longer", "To hide the captions", "Dead time makes viewers scroll away"], answer: 3, why: "Tight cuts keep attention." },
      { objective: "O4", q: "On-screen text should be:", options: ["Big, short and on screen long enough to read", "Tiny and fast", "Very long paragraphs", "Hidden"], answer: 0, why: "Readable text gets your message across." },
      { objective: "O5", q: "Why add captions?", options: ["They are required for all phones", "Many watch with sound off, and they help deaf or hard-of-hearing viewers", "They replace editing", "They make the file smaller"], answer: 1, why: "Captions make videos clearer and more accessible." },
      { objective: "O5", q: "According to the U.S. Copyright Office, copyright protects a work:", options: ["Only after it is registered", "Only for 1 year", "Once it is created and fixed in a form people can see or hear", "Only for videos"], answer: 2, why: "Protection begins when the work is created and fixed." },
      { objective: "O5", q: "What can happen if you use a hit song without permission?", options: ["Nothing ever", "You earn money", "The song gets better", "The platform may mute or remove your video"], answer: 3, why: "Platforms act on music used without permission." },
      { objective: "O5", q: "A friend says to put a celebrity's AI-made face in your video for laughs. You:", options: ["Say no; do not use a real person's face without permission", "Do it and label it", "Do it on a private account", "Do it but blur it"], answer: 0, why: "Do not use AI copies of real people without their permission." },
      { objective: "O6", q: "Which feedback question is most useful?", options: ["\"Is it perfect?\"", "\"Did you know what to do at the end?\"", "\"Do you like me?\"", "\"Is my phone nice?\""], answer: 1, why: "It checks whether the call to action works." },
      { objective: "O6", q: "After exporting, you should:", options: ["Delete the project right away", "Post without looking", "Watch the file once more to check sound and captions", "Rename it with your address"], answer: 2, why: "Exports can have problems; check before sharing." },
      { objective: "O6", q: "When sharing publicly, keep private:", options: ["The club name", "The event date", "The video title", "Your full name, school address and schedule"], answer: 3, why: "Personal details stay private online." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Script and storyboard",
        objective: "O2",
        notYet: "No hook or call to action, or no storyboard.",
        meets: "A script with a hook, scenes and a call to action, in the learner's voice, and a storyboard that fits 30 to 60 seconds.",
        exceeds: "Facts such as dates and rooms are checked, and the storyboard lists seconds per shot."
      },
      {
        name: "Filming",
        objective: "O3",
        notYet: "Shots are dark, shaky or hard to hear, or someone was filmed without permission.",
        meets: "At least four steady, well-lit shots with clear sound, and permission from everyone on camera.",
        exceeds: "Each shot was filmed at least twice and the best take was chosen."
      },
      {
        name: "Editing",
        objective: "O4",
        notYet: "Clips are out of order or have long dead time.",
        meets: "Clips follow the storyboard, are trimmed tight, and have a title and an ending call to action.",
        exceeds: "Text is easy to read and the pacing keeps viewers watching."
      },
      {
        name: "Captions, music and labels",
        objective: "O5",
        notYet: "Captions have errors, music is not allowed, or AI content is not labeled.",
        meets: "Accurate captions, allowed music and a label on anything AI-generated.",
        exceeds: "The learner can say where the music came from and what rules allow it."
      },
      {
        name: "Feedback and safe sharing",
        objective: "O6",
        notYet: "Not exported, or shared with personal details.",
        meets: "Feedback from at least one person, one change made, exported and shared safely.",
        exceeds: "Notes how AI was used and what changed after feedback."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Videos used by a real club, team, event or cause within 30 days",
      "Learners who make a second planned video within 30 days (follow-up survey)",
      "Learners who report getting permission and labeling AI content on later videos"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone with a camera",
      "A free video editor such as CapCut or Canva, used within its age rules",
      "A free AI assistant the learner is allowed to use",
      "A simple phone stand or something to lean on (optional)",
      "About 60 minutes in total, plus filming time"
    ],
    facilitatorNotes: [
      "Check your school's filming and photo-release rules before class and share which students may not be filmed.",
      "Check age rules for each app and involve parents or guardians in any sign-ups.",
      "Pair learners as crews so each one practices filming, being on camera and giving feedback.",
      "Review videos for permission, music and AI labels before anything is posted publicly.",
      "Hold a screening in the group and score each video with the rubric, one Not yet row at a time."
    ]
  }
};
