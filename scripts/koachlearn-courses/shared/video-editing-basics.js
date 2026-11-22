"use strict";

// Koach Learn course: Workforce Development -> "Video Editing Basics" (wave 3, 30 October 2026). Also listed for Youth, Athletes and Entrepreneurs.
// Goes deeper than youth/youth-ai-video.js and athletes/athletes-content-creation.js (which plan, film and post): this one teaches the editor's job
// from a brief to a delivered file and a portfolio piece, with free editors (DaVinci Resolve, Clipchamp, CapCut, a phone's built-in editor).
// Menu names change often, so lessons describe actions ("trim", "split", "export") rather than exact menus.

module.exports = {
  id: "video-editing-basics",
  category: "Workforce Development",
  name: "Video Editing Basics",
  skills: "Reading a brief and organizing footage, Setting up a project, Building a rough cut, Using B-roll and cleaner cuts, Fixing sound and adding captions, Exporting and building a portfolio",
  outcome: "take your own raw clips and a short brief, edit them in a free video editor into a clean 30 to 60 second video with clear sound and captions, export it in the right shape for where it will play, and use it as the first piece of a work portfolio.",
  about: [
    "This course is for anyone who wants to edit video for work: young people looking for a first creative job, adults changing careers, athletes and coaches making highlight clips, and small business owners who want videos for their own shop. You do not need to have edited before.",
    "You will work like a real editor: read a brief, organize your files, build a rough cut, make it smoother with B-roll and better cuts, fix the sound, add captions, and export the finished file. Everything works with free editors such as DaVinci Resolve, Microsoft Clipchamp, CapCut or the editor built into your phone.",
    "Each lesson takes about five minutes, followed by a \"Try it now\" task using your own clips. There is a two-question quick check after each lesson, a knowledge check after each chapter and a 20-question quiz at the end. Your final product is a finished short video and a portfolio note you can show an employer or client.",
    "This course prepares you. It does not grant a certificate. If you want a credential later, Lesson 6 shows two real ones and where to check them."
  ],
  finalTask: "Edit a 30 to 60 second video from your own footage for a real or practice brief (for example a team highlight, a promo for a local shop, or a story about a job program). Hand in: a named project folder, the finished video exported in the right shape for where it will play, with B-roll, clean sound, captions and only music you have permission to use, and a short portfolio note that says the brief, your role and the tools you used.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Youth and adults in workforce programs, athletes and coaches, and small business owners in the US and abroad. Most have filmed video on a phone; few have edited beyond adding a filter in a social app.",
    startingPoint: "Can record video on a phone and post to social media. Has not used a timeline, does not know aspect ratio or frame rate, and has never exported a file for someone else.",
    gap: "Businesses, schools, teams and nonprofits all need short videos, and many entry jobs and freelance gigs (social media assistant, content creator, junior editor) ask for basic editing skills and a sample of your work. Learners need a repeatable way to turn clips and a brief into a clean, finished video, and one finished piece to show.",
    constraints: [
      "Reading level: plain words and short sentences; every editing term is explained",
      "Devices: a phone, or a computer at home, a library or a job center; free editors only",
      "Editor menus change often, so lessons teach actions, not exact menu names",
      "Time: 4 to 6 minute lessons plus about an hour of hands-on editing for the final task",
      "Rules: permission from people on camera (and a parent for anyone under 18) and music the learner is allowed to use"
    ],
    prerequisites: "Able to record video on a phone and move files to a computer or between apps. Learners new to phones or computers can take \"Basic Computer Skills\" or \"Using a Smartphone and Tablet\" first."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a short brief and a set of raw clips", action: "organize the footage in a named project folder and set the project's aspect ratio and frame rate to match where the video will play", standard: "with every clip easy to find and no clip stretched or cropped by mistake" },
    { id: "O2", condition: "Using a free video editor", action: "build a rough cut by trimming, splitting and ordering clips on the timeline into a beginning, middle and end", standard: "that tells the brief's story in the target length with no dead time" },
    { id: "O3", condition: "Given a rough cut", action: "add B-roll, cutaways and simple transitions to hide jumps and keep the video moving", standard: "using no more than one or two kinds of transition" },
    { id: "O4", condition: "Given a cut with speech and music", action: "balance the sound levels and add accurate captions and on-screen text", standard: "so every word can be heard and read, the meter never hits the top, and all music is used with permission" },
    { id: "O5", condition: "Given a finished edit", action: "export the video with settings that fit the platform, review it against the brief and write a short portfolio note", standard: "so the file plays correctly on the first try and the note names the brief, your role and your tools" }
  ],
  chapters: [
    {
      name: "Chapter 1: From raw clips to a rough cut",
      lessons: [
        {
          title: "Read the brief and organize your footage",
          objectives: ["O1"],
          minutes: 5,
          goal: "Write down a brief and set up a named project folder with your clips sorted.",
          text: [
            "Every editing job starts with a brief: a short description of what the video is for. A good brief answers five questions: who will watch it, where it will play (for example YouTube, Instagram Reels, TikTok, a TV in a shop window), how long it should be, what one message it must get across, and when it is due.",
            "Next, organize. Editors lose hours hunting for clips. Make one project folder with a clear name, like \"2026-11 Bakery promo\". Inside it, make folders for video, audio, music, graphics and exports. Copy your clips in and give the best ones short names, like \"oven-closeup\" or \"owner-interview\".",
            "Keep a second copy of your raw clips somewhere else, such as a USB drive or cloud storage. If a phone breaks or a file gets deleted, the job is not lost.",
            "Check permission now, not after you post. Everyone who can be clearly seen or heard should agree to be in the video, and anyone under 18 needs a parent or guardian to agree too."
          ],
          steps: ["Write the brief: audience, platform, length, one message, due date.", "Make a project folder with a clear name and the date.", "Add folders for video, audio, music, graphics and exports.", "Copy your clips in and rename the best ones.", "Back up the raw clips in a second place.", "Check that everyone on camera agreed."],
          words: [["Brief", "a short description of what a video is for: who it is for, where it plays, how long, the message and the due date."], ["Footage", "the raw video clips you filmed before editing."], ["Back up", "keep a second copy of your files in another place."], ["Client", "the person or business you are making the video for."]],
          slides: [
            { title: "A brief answers five questions", bullets: ["Who will watch it?", "Where will it play?", "How long? What one message?", "When is it due?"] },
            { title: "One clear project folder", bullets: ["Name it with the date and the job", "Folders: video, audio, music, graphics, exports", "Rename your best clips"] },
            { title: "Protect the job", bullets: ["Back up raw clips in a second place", "Permission from everyone on camera", "A parent or guardian for anyone under 18"] }
          ],
          tryIt: "Pick the video you will make for the final task (a team highlight, a shop promo, a job-program story or your own idea). Write a five-line brief on paper. Then make the project folder with its five inside folders, copy in 8 to 15 clips you filmed, and rename the five best ones.",
          youCanNow: "write a short brief and set up a project folder where every clip is easy to find.",
          quickCheck: [
            { objective: "O1", q: "Which of these belongs in a video brief?", options: ["Your favorite color", "Where the video will play and how long it should be", "The price of your phone", "A list of every app you own"], answer: 1, why: "Where it plays and how long it is shape every editing choice that follows." },
            { objective: "O1", q: "Your phone holds the only copy of a client's clips. What do you do first?", options: ["Start editing right away", "Delete the clips you don't like", "Post the clips so they are saved online", "Copy them to a second place such as a USB drive or cloud storage"], answer: 3, why: "A backup in a second place means a broken phone or a deleted file does not lose the job." }
          ]
        },
        {
          title: "Set up the project: shape, size and speed",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose the aspect ratio, resolution and frame rate for a project before you edit.",
          text: [
            "Before you edit, tell the editor the shape and size of the finished video. Aspect ratio is the shape. Wide 16:9 fits YouTube, laptops and TVs. Tall 9:16 fits phone apps like TikTok, Instagram Reels and YouTube Shorts. Square 1:1 fits some feeds. Choose the shape from your brief.",
            "Resolution is how many dots (pixels) make up the picture. 1920 by 1080, often called 1080p or Full HD, is a safe choice for most work. For a tall video it is 1080 wide by 1920 high.",
            "Frame rate is how many still pictures play each second, written as fps. Common rates are 24, 30 and 60. Set the project to the rate most of your clips were filmed at. You can see a clip's details in the editor or in the file's information on your computer or phone.",
            "If the shape is wrong, the editor will add black bars or cut off the sides. If you mix up frame rates, motion can look jumpy. Setting these first saves a lot of fixing later."
          ],
          steps: ["Read the brief: where will the video play?", "Pick the shape: 16:9 wide, 9:16 tall or 1:1 square.", "Pick the size: 1920 x 1080 wide, or 1080 x 1920 tall.", "Check the frame rate of your clips and set the project to match.", "Start the project and import your clips."],
          words: [["Aspect ratio", "the shape of the video, written as width to height, such as 16:9 (wide) or 9:16 (tall)."], ["Resolution", "how many pixels make up the picture, such as 1920 x 1080."], ["Pixel", "one tiny dot of color on a screen."], ["Frame rate (fps)", "how many still pictures play each second, such as 24, 30 or 60."], ["Import", "bring your clips into the editing program."]],
          slides: [
            { title: "Shape: aspect ratio", bullets: ["16:9 wide: YouTube, laptops, TVs", "9:16 tall: TikTok, Reels, Shorts", "1:1 square: some feeds"] },
            { title: "Size: resolution", bullets: ["1920 x 1080 (1080p) is safe for most work", "Tall: 1080 wide x 1920 high"] },
            { title: "Speed: frame rate", bullets: ["24, 30 or 60 frames per second", "Match the rate most clips were filmed at"] },
            { title: "Why set it first", bullets: ["Wrong shape = black bars or cut-off sides", "Mixed rates = jumpy motion"] }
          ],
          sources: [
            { name: "Blackmagic Design: DaVinci Resolve (free version for Mac, Windows and Linux)", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
            { name: "Microsoft Clipchamp: plans, including the free plan", url: "https://clipchamp.com/en/pricing/" }
          ],
          tryIt: "Open a free editor: DaVinci Resolve or Clipchamp on a computer, or CapCut or your phone's built-in editor on a phone. Look up the frame rate of three of your clips. Start a new project with the shape and frame rate your brief needs, and import your clips.",
          youCanNow: "set up a project with the right shape, size and frame rate for where the video will play.",
          quickCheck: [
            { objective: "O1", q: "Your brief says the video will be an Instagram Reel. Which shape do you choose?", options: ["16:9 wide", "4:3 old TV", "9:16 tall", "21:9 cinema"], answer: 2, why: "Reels, TikTok and Shorts play tall on a phone, so 9:16 fills the screen." },
            { objective: "O1", q: "Most of your clips were filmed at 30 fps. What frame rate should the project use?", options: ["30 fps, to match the clips", "60 fps, because higher is always better", "Any rate; it makes no difference", "24 fps, because films use it"], answer: 0, why: "Matching the rate of most of your clips keeps motion smooth." }
          ]
        },
        {
          title: "Build a rough cut on the timeline",
          objectives: ["O2"],
          minutes: 6,
          goal: "Trim, split and order clips on the timeline into a story that fits the target length.",
          text: [
            "The timeline is the strip where you lay clips in order, left to right. The playhead is the line that shows where you are. A rough cut is your first full version: the right clips, in the right order, at about the right length. It does not need to be pretty yet.",
            "Build it in three parts. The beginning grabs attention in the first few seconds. The middle shows the main message. The end tells the viewer what to do or remember. For a bakery: fresh bread coming out of the oven, the owner saying why she started, then the shop's sign and hours.",
            "Two tools do most of the work. Trim cuts the start or end off a clip. Split cuts one clip into two at the playhead, so you can remove a middle part. Start each shot right before the action and end it right after. Remove dead time: waiting, looking at the camera, \"um\" and long pauses.",
            "Watch the whole rough cut from the start. If it is longer than the brief allows, remove whole shots before you shorten good ones. Save often, and save a copy with a version number (v1, v2) before big changes."
          ],
          steps: ["Drag your best clips to the timeline in story order: beginning, middle, end.", "Trim the start and end of each clip so it starts just before the action.", "Split clips to remove pauses, mistakes and dead time.", "Watch from the start and check the length against the brief.", "Remove whole weak shots if it is too long.", "Save as v1."],
          words: [["Timeline", "the strip in an editor where clips are placed in order, left to right."], ["Playhead", "the line on the timeline that shows the moment you are viewing."], ["Trim", "shorten a clip by cutting its start or end."], ["Split", "cut one clip into two pieces at the playhead."], ["Rough cut", "the first full version of an edit, with the right clips in order but not yet polished."], ["Dead time", "parts where nothing useful happens, such as waiting or long pauses."]],
          slides: [
            { title: "The timeline", bullets: ["Clips in order, left to right", "The playhead shows where you are", "Rough cut = first full version"] },
            { title: "Beginning, middle, end", bullets: ["Grab attention in the first seconds", "Show the main message", "End with what to do or remember"] },
            { title: "Trim and split", bullets: ["Trim: cut the start or end", "Split: cut a clip in two at the playhead", "Remove waiting, pauses and \"um\""] },
            { title: "Check and save", bullets: ["Watch from the start", "Too long? Remove whole shots first", "Save versions: v1, v2"] }
          ],
          tryIt: "In your project, build a rough cut of your final-task video. Put clips in beginning-middle-end order, trim each one, split out at least two pauses or mistakes, and get within 10 seconds of your target length. Save it as v1 and write down its length.",
          youCanNow: "build a rough cut that tells a story in the target length with no dead time.",
          quickCheck: [
            { objective: "O2", q: "You need to remove a long pause from the middle of an interview clip. Which tool do you use?", options: ["Change the aspect ratio", "Export the clip", "Add a transition", "Split the clip at both ends of the pause and delete the middle"], answer: 3, why: "Splitting at both ends of the pause lets you lift out just the middle part." },
            { objective: "O2", q: "Your rough cut is 20 seconds too long. What do you try first?", options: ["Speed up the whole video", "Remove whole weak shots", "Make every clip one second shorter", "Change the frame rate"], answer: 1, why: "Removing weak shots keeps the strong ones whole and the story clear." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: From raw clips to a rough cut",
        questions: [
          { objective: "O1", q: "A shop owner asks for a video for the TV in her front window. Which shape fits a TV?", options: ["9:16 tall", "16:9 wide", "1:1 square", "Any shape; TVs adjust"], answer: 1, why: "TVs are wide screens, so 16:9 fills them without black bars." },
          { objective: "O1", q: "Which project folder name is the most useful?", options: ["\"stuff\"", "\"New folder (3)\"", "\"video final final\"", "\"2026-11 Bakery promo\""], answer: 3, why: "A date and the job name make the folder easy to find later." },
          { objective: "O2", q: "What is a rough cut?", options: ["The first full version with the right clips in order", "A video with a scratch on the lens", "The finished, exported file", "A clip that was filmed badly"], answer: 0, why: "A rough cut has the story in place; polishing comes after." },
          { objective: "O2", q: "Where should a shot usually start?", options: ["As soon as you pressed record", "After the action is over", "Right before the action", "In the middle of the action"], answer: 2, why: "Starting just before the action removes dead time and keeps the video moving." },
          { objective: "O2", q: "Before a big change to your edit, what is a good habit?", options: ["Delete the old version to save space", "Close the editor without saving", "Change the aspect ratio", "Save a copy with a version number, like v2"], answer: 3, why: "Version copies let you go back if the change does not work." }
        ]
      }
    },
    {
      name: "Chapter 2: Polishing and delivering",
      lessons: [
        {
          title: "Smooth the edit with B-roll and better cuts",
          objectives: ["O3"],
          minutes: 5,
          goal: "Add B-roll, a cutaway and an L-cut or J-cut to smooth your rough cut.",
          text: [
            "When you cut out part of an interview, the face jumps. This is called a jump cut. Editors hide it with B-roll: shots that show what the person is talking about. A coach talks about practice; we see players running drills. The voice keeps going while the picture changes.",
            "A cutaway is a short shot of something nearby, such as hands, a crowd or a scoreboard, placed between two shots of the same thing. Mix wide, medium and close-up shots so the viewer sees the place, the people and the details.",
            "Two pro tricks are easy. In an L-cut, the picture changes to the next shot while the sound from the first shot keeps playing. In a J-cut, you hear the next shot before you see it. Both make the edit feel smooth and natural. Most editors let you unlink or detach the sound from the picture to do this.",
            "Go easy on transitions. A plain cut is used most of the time by professionals. Use one or two simple transitions, such as a short fade at the start and end. Many flashy wipes and spins make a video look like a beginner made it."
          ],
          steps: ["Watch your rough cut and mark every jump cut.", "Place B-roll on the track above the interview to cover each jump.", "Add at least one cutaway (hands, crowd, sign, scoreboard).", "Try one L-cut or J-cut by unlinking sound from picture.", "Use plain cuts, with at most one or two simple transitions.", "Save as v2."],
          words: [["B-roll", "extra shots that show what someone is talking about, placed over their voice."], ["Jump cut", "a sudden jump in the picture when part of a shot is cut out."], ["Cutaway", "a short shot of something nearby placed between two shots of the same subject."], ["L-cut and J-cut", "edits where the sound and picture change at different moments, so the cut feels smooth."], ["Transition", "an effect between two clips, such as a fade."]],
          slides: [
            { title: "Hide the jumps", bullets: ["Cutting an interview makes the face jump", "Cover it with B-roll that shows the topic", "The voice keeps going underneath"] },
            { title: "Mix your shots", bullets: ["Wide: the place", "Medium: the people", "Close-up: the details", "Cutaways: hands, crowd, sign"] },
            { title: "L-cut and J-cut", bullets: ["L-cut: picture changes, sound keeps going", "J-cut: hear the next shot before you see it", "Unlink sound from picture to do it"] },
            { title: "Transitions: less is more", bullets: ["Plain cuts most of the time", "One or two simple fades at most"] }
          ],
          tryIt: "Open your v1. Cover every jump cut with B-roll, add at least one cutaway, and make one L-cut or J-cut. Remove any flashy transitions so you use no more than two kinds. Save as v2 and watch v1 and v2 side by side.",
          youCanNow: "use B-roll, cutaways and L-cuts or J-cuts to make an edit smooth and easy to watch.",
          quickCheck: [
            { objective: "O3", q: "An interview has a jump cut where you removed a sentence. How do you hide it?", options: ["Place B-roll over the jump while the voice keeps playing", "Add a spinning transition", "Make the video louder", "Change the frame rate"], answer: 0, why: "B-roll covers the jump in the picture while the speech keeps flowing." },
            { objective: "O3", q: "You hear the crowd cheering before the picture cuts to the crowd. What is this called?", options: ["A jump cut", "An L-cut", "A rough cut", "A J-cut"], answer: 3, why: "In a J-cut the sound of the next shot starts before its picture." }
          ]
        },
        {
          title: "Fix the sound, add music and captions",
          objectives: ["O4"],
          minutes: 6,
          goal: "Balance voice and music levels, add music you have permission to use, and add accurate captions.",
          text: [
            "Viewers forgive a so-so picture but not bad sound. Use the audio meter: it shows how loud the sound is. If it reaches the top and turns red, the sound will crackle. A common target is to have voices peak around -6 on the meter, with music much lower under speech, and nothing hitting 0.",
            "Use only music you are allowed to use: music you made, music with written permission, or the free library in your editor or platform, following its rules. The YouTube Audio Library offers music for YouTube videos; some tracks require you to credit the artist. Giving credit alone does not give you permission to use someone else's song, and there is no safe number of seconds.",
            "Many people watch with the sound off, and captions also help viewers who are deaf or hard of hearing. Most editors can make automatic captions. Always read them and fix every mistake, especially names, places and numbers.",
            "Add on-screen text with care: a short title, a person's name and role the first time they speak, and a final card with the message or call to action. Use large, plain letters and keep text away from the edges, where apps put their buttons."
          ],
          steps: ["Play the edit and watch the audio meter.", "Lower any clip that turns red; raise voices that are too quiet.", "Add music you may use and lower it under speech.", "Turn on automatic captions, then read and fix every word.", "Add a title, a name label and an end card in large, plain letters.", "Save as v3."],
          words: [["Audio meter", "the bar that shows how loud the sound is."], ["Clipping", "crackling sound caused when the level hits the top of the meter."], ["Royalty-free", "music you can use without paying each time it plays, under the library's rules; it still has rules."], ["Captions", "the spoken words shown as text on screen."], ["Call to action", "what you want the viewer to do next, such as \"Visit us Saturday\"."]],
          slides: [
            { title: "Watch the meter", bullets: ["Red at the top = crackling sound", "Voices peak around -6", "Music much lower under speech"] },
            { title: "Music you may use", bullets: ["Your own music or written permission", "Your editor's or platform's library, under its rules", "Credit alone is not permission"] },
            { title: "Captions", bullets: ["Many viewers watch with sound off", "Help viewers who are deaf or hard of hearing", "Read and fix every auto-caption"] },
            { title: "On-screen text", bullets: ["Short title and name labels", "End card with the call to action", "Big, plain letters away from the edges"] }
          ],
          sources: [
            { name: "U.S. Copyright Office: Fair use FAQ", url: "https://www.copyright.gov/help/faq/faq-fairuse.html" },
            { name: "YouTube Help: Use music and sound effects from the Audio Library", url: "https://support.google.com/youtube/answer/3376882" }
          ],
          tryIt: "Open your v2. Watch the meter and fix any clip that turns red. Add music you are allowed to use and lower it under speech. Turn on automatic captions and fix every mistake. Add a title, one name label and an end card. Save as v3, then watch it once with the sound off to check that the captions tell the story.",
          youCanNow: "balance sound levels, add music the right way and add captions and text people can read.",
          quickCheck: [
            { objective: "O4", q: "The audio meter turns red at the top when the coach shouts. What do you do?", options: ["Raise the volume of that clip", "Leave it; red means good", "Lower that clip's level so it stays out of the red", "Delete the captions"], answer: 2, why: "Red at the top means clipping; lowering the level stops the crackle." },
            { objective: "O4", q: "A client wants a popular hit song in their ad. You have no permission. What is true?", options: ["It is fine if you use only 10 seconds", "Giving the artist credit makes it legal", "Ads can use any song on the radio", "You need permission, or use music from a library under its rules"], answer: 3, why: "There is no safe number of seconds and credit is not permission, so get permission or use licensed library music." }
          ]
        },
        {
          title: "Export, review and build your portfolio",
          objectives: ["O5"],
          minutes: 6,
          goal: "Export a finished video, check it against the brief and write a portfolio note.",
          text: [
            "Exporting turns your project into one video file. For most online use, choose an MP4 file with H.264 video at the same shape, size and frame rate as your project. Name the file clearly, like \"bakery-promo-v3-9x16.mp4\", and save it in your exports folder. In DaVinci Resolve this happens on the page called Deliver; other editors use a button such as Export or Save.",
            "Never send a file you have not watched. Play the exported file from start to end on the device where it will be seen. Check the brief: right length, right shape, one clear message, clean sound, correct captions and names. Then send it, ask for feedback, and make changes in a new version. Clients often ask for changes; that is a normal part of the job.",
            "Your portfolio is a small collection of your best work. Put the video online where you are allowed to (with permission from the client and everyone in it) and write a short note: the brief, what you did, the tools you used and the result. Employers hiring junior editors, social media assistants and content creators often ask for samples like this.",
            "Credentials can help later. Certiport, a Pearson VUE business, delivers the Adobe Certified Professional exam in Digital Video Using Adobe Premiere. Blackmagic Design offers training and online exams to become a certified DaVinci Resolve editor. Check each official page for the current requirements and costs. This course prepares you to keep learning; it does not grant either credential."
          ],
          steps: ["Export an MP4 (H.264) at the project's shape, size and frame rate.", "Name the file clearly and save it in your exports folder.", "Watch the whole file on the device where it will play.", "Check it against every line of the brief.", "Send it, get feedback and make changes in a new version.", "Write a portfolio note: brief, your role, tools, result."],
          words: [["Export", "turn your edit into one finished video file."], ["MP4 and H.264", "a common file type and video format that plays on most phones, computers and websites."], ["Portfolio", "a small collection of your best work to show employers or clients."], ["Revision", "a change a client asks for after seeing a version."], ["Credential", "proof from a recognized organization that you passed a test of your skills."]],
          slides: [
            { title: "Export the file", bullets: ["MP4 with H.264 for most online use", "Same shape, size and frame rate as the project", "Clear name, saved in your exports folder"] },
            { title: "Review before you send", bullets: ["Watch the whole file on the real device", "Check every line of the brief", "Changes go in a new version"] },
            { title: "Your portfolio note", bullets: ["The brief", "What you did and the tools you used", "The result; share only with permission"] },
            { title: "Credentials to explore later", bullets: ["Adobe Certified Professional in Premiere (Certiport)", "DaVinci Resolve certification (Blackmagic Design)", "Check official pages; this course prepares only"] }
          ],
          sources: [
            { name: "Certiport: Adobe Certified Professional exams", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Certify" },
            { name: "Blackmagic Design: DaVinci Resolve training and certification", url: "https://www.blackmagicdesign.com/products/davinciresolve/training" },
            { name: "U.S. Bureau of Labor Statistics: Film and Video Editors and Camera Operators", url: "https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm" }
          ],
          tryIt: "Final task: export your v3 as an MP4 in the right shape, name it clearly and watch it on the device where it will play. Check it against your brief and fix anything that does not match. Then write your portfolio note in four lines: the brief, what you did, the tools you used and the result.",
          youCanNow: "export a finished video, check it against a brief and present it as a portfolio piece.",
          quickCheck: [
            { objective: "O5", q: "Which file name is best for the finished video?", options: ["\"final.mp4\"", "\"bakery-promo-v3-9x16.mp4\"", "\"untitled (2).mp4\"", "\"video.mp4\""], answer: 1, why: "It says the job, the version and the shape, so nobody sends the wrong file." },
            { objective: "O5", q: "You just exported the video. What do you do before sending it?", options: ["Send it right away to save time", "Delete the project to save space", "Watch the whole file on the device where it will play and check it against the brief", "Change the frame rate"], answer: 2, why: "Watching the real file catches errors before the client sees them." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Polishing and delivering",
        questions: [
          { objective: "O3", q: "What is B-roll?", options: ["The first clip on the timeline", "A type of camera", "Extra shots that show what someone is talking about", "A music file"], answer: 2, why: "B-roll is placed over a voice to show the topic and hide jumps." },
          { objective: "O3", q: "How many kinds of transitions should a beginner's work video usually use?", options: ["One or two simple ones, with plain cuts most of the time", "A different one between every clip", "At least ten", "Only spinning and wipe effects"], answer: 0, why: "Professionals mostly use plain cuts; many flashy transitions look amateur." },
          { objective: "O4", q: "Why should you read automatic captions before you export?", options: ["Captions slow the video down", "Captions change the aspect ratio", "Automatic captions are always perfect", "They often get names, places and numbers wrong"], answer: 3, why: "Auto-captions make mistakes, so you check and fix every word." },
          { objective: "O4", q: "Where should music sit when someone is speaking?", options: ["Louder than the voice", "Much lower than the voice", "At the very top of the meter", "Muted and deleted"], answer: 1, why: "Low music under speech keeps every word clear." },
          { objective: "O5", q: "A client asks for two changes after watching v3. What is the professional response?", options: ["Make the changes in a new version, v4", "Refuse; the video is finished", "Delete v3 and start over", "Send the same file again"], answer: 0, why: "Revisions are a normal part of the job, and a new version keeps the old one safe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Video Editing Basics",
    questions: [
      { objective: "O1", q: "A brief says: \"30-second TikTok for our food truck, due Friday.\" What shape is the project?", options: ["16:9 wide", "1:1 square", "9:16 tall", "4:3"], answer: 2, why: "TikTok plays tall on phones, so 9:16 fills the screen." },
      { objective: "O1", q: "What is the main reason to make a named project folder with inside folders?", options: ["So every clip and file is easy to find", "It makes the video play faster", "Editors will not open files without it", "It adds captions automatically"], answer: 0, why: "Organized folders save time and stop lost or wrong files." },
      { objective: "O1", q: "What does \"1920 x 1080\" describe?", options: ["The frame rate", "The aspect ratio only", "The length in seconds", "The resolution, in pixels"], answer: 3, why: "1920 x 1080 is the width and height in pixels, often called 1080p." },
      { objective: "O1", q: "You want to film a 15-year-old player for a team highlight. Who must agree?", options: ["Only the coach", "The player and a parent or guardian", "Nobody, if it is a public game", "Only the other team"], answer: 1, why: "Anyone under 18 needs a parent or guardian to agree, as well as the player." },
      { objective: "O2", q: "What does the trim tool do?", options: ["Changes the colors", "Cuts the start or end off a clip", "Adds music", "Exports the file"], answer: 1, why: "Trimming shortens a clip from its start or end." },
      { objective: "O2", q: "What is the playhead?", options: ["The first clip in the project", "The editor's logo", "The audio meter", "The line on the timeline that shows where you are"], answer: 3, why: "The playhead marks the moment you are viewing; splits happen there." },
      { objective: "O2", q: "Which order fits a 45-second promo for a barber shop?", options: ["A fresh cut being finished, the barber saying what makes the shop special, then the address and hours", "The hours, then a long shot of an empty chair, then the logo", "Ten minutes of the full haircut", "The barber looking at the camera waiting to start"], answer: 0, why: "It grabs attention, gives the message and ends with what to do." },
      { objective: "O2", q: "Which is dead time you should remove?", options: ["The moment a player scores", "The owner explaining her best product", "A long pause where the speaker says \"um\" and looks away", "The shop sign at the end"], answer: 2, why: "Pauses and waiting add length without adding meaning." },
      { objective: "O3", q: "In an L-cut, what happens?", options: ["The video turns black", "The picture and sound both stop", "The sound starts before the picture", "The picture changes while the sound from the first shot keeps playing"], answer: 3, why: "In an L-cut the earlier sound carries on under the new picture." },
      { objective: "O3", q: "Which shot works as a cutaway in an interview with a baker?", options: ["The same interview shot again", "A black screen", "Close-up of her hands shaping dough", "A shot from a different video about cars"], answer: 2, why: "A cutaway shows something nearby and related, which hides a cut." },
      { objective: "O3", q: "Why mix wide, medium and close-up shots?", options: ["To show the place, the people and the details", "To make the file smaller", "To change the frame rate", "Editors require three shot sizes"], answer: 0, why: "Different shot sizes give the viewer the full picture and keep it interesting." },
      { objective: "O3", q: "Your edit has a different flashy transition between every clip. What should you change?", options: ["Add more transitions", "Use plain cuts and keep one or two simple transitions", "Make the transitions longer", "Speed the whole video up"], answer: 1, why: "Plain cuts with few simple transitions look professional." },
      { objective: "O4", q: "What does it mean when the audio meter hits the top and turns red?", options: ["The sound is perfect", "The captions are on", "The sound is too loud and may crackle", "The music has permission"], answer: 2, why: "Red at the top is clipping, which makes the sound crackle." },
      { objective: "O4", q: "Which music can you use in a client's video?", options: ["Any song if you give credit", "A song from the radio if it is under 15 seconds", "A song a friend uploaded online", "Music from your editor's library, following its rules"], answer: 3, why: "Library music under its rules, your own music or written permission are the safe choices." },
      { objective: "O4", q: "Why add captions to a work video?", options: ["Many people watch with the sound off, and captions help viewers who are deaf or hard of hearing", "Captions make the file smaller", "Captions are only for movies", "Platforms delete videos without captions"], answer: 0, why: "Captions reach more viewers and make the message clear without sound." },
      { objective: "O4", q: "Where should on-screen text go in a tall phone video?", options: ["Right at the very edges", "Away from the edges, in large plain letters", "Only in the last frame, very small", "Under the app's buttons"], answer: 1, why: "Apps put buttons near the edges, so text there can be covered." },
      { objective: "O5", q: "For most online use, which export choice is safe?", options: ["Any file type at any size", "A still image", "An MP4 with H.264, matching the project's shape, size and frame rate", "Only the project file"], answer: 2, why: "MP4 with H.264 plays on most phones, computers and websites." },
      { objective: "O5", q: "What goes in a short portfolio note?", options: ["The brief, what you did, the tools you used and the result", "Your home address and phone number", "Your editor password", "Only the video's file size"], answer: 0, why: "Those four lines show an employer what you can do." },
      { objective: "O5", q: "Who delivers the Adobe Certified Professional exam in Digital Video Using Adobe Premiere?", options: ["The U.S. Department of Labor", "YouTube", "Any video editing app", "Certiport, a Pearson VUE business"], answer: 3, why: "Certiport delivers Adobe Certified Professional exams; check its page for current details." },
      { objective: "O5", q: "What does this course give you?", options: ["An Adobe certificate", "A DaVinci Resolve certification", "A state license to edit video", "Preparation and a portfolio piece, not a credential"], answer: 3, why: "The course prepares you; credentials come from Adobe through Certiport or from Blackmagic Design." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 4, 7, 8, 11, 12, 13, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part, export a new version and try again.",
    criteria: [
      { name: "Organized and set up", objective: "O1", notYet: "Clips are scattered or the shape does not match the platform (black bars or cut-off sides).", meets: "A named project folder with inside folders, a backup, and the project shape and frame rate match the brief.", exceeds: "Best clips are renamed and the learner can explain why they chose the shape and frame rate." },
      { name: "Story and length", objective: "O2", notYet: "Clips are out of order, have dead time, or the video is far off the target length.", meets: "Clear beginning, middle and end; no dead time; within 5 seconds of the target length.", exceeds: "The first few seconds grab attention and every shot earns its place." },
      { name: "Smooth editing", objective: "O3", notYet: "Jump cuts are visible or many flashy transitions are used.", meets: "B-roll or cutaways hide the jumps; no more than two kinds of transition.", exceeds: "Includes a clean L-cut or J-cut and a good mix of wide, medium and close-up shots." },
      { name: "Sound and captions", objective: "O4", notYet: "Sound crackles or is hard to hear, captions have mistakes, or music has no permission.", meets: "Clear voices, music under speech, accurate captions, and only music the learner may use.", exceeds: "Name labels and an end card are clear on a phone, and music credits are given where the library requires it." },
      { name: "Delivered and presented", objective: "O5", notYet: "The file is misnamed, does not play, or the portfolio note is missing.", meets: "A clearly named MP4 that plays on the target device, checked against the brief, with a four-line portfolio note.", exceeds: "The learner got feedback and delivered a revised version, and the note says what changed." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who add the finished video to a portfolio or job application within 30 days (follow-up survey)",
      "Learners who complete a paid or volunteer editing job for a business, team, school or nonprofit within 90 days",
      "Learners who go on to a further editing course or a credential such as Adobe Certified Professional or DaVinci Resolve certification"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone that records video, and 8 to 15 short clips the learner filmed themselves",
      "A free editor: DaVinci Resolve or Microsoft Clipchamp on a computer, or CapCut or the phone's built-in editor",
      "A USB drive or cloud storage for the backup",
      "Earbuds or headphones to check the sound",
      "About 2 hours in total: lessons, checks, and editing time for the final task"
    ],
    facilitatorNotes: [
      "In a lab, check before the course that the chosen editor installs and runs on the program's computers; DaVinci Resolve needs a stronger computer than a web editor such as Clipchamp.",
      "Give learners who have no footage a short practice brief and let them film around the building, with permission from everyone on camera.",
      "Check each editor's age rules for young learners, and get parent or guardian permission for anyone under 18 who appears in a video.",
      "Menus change often: demonstrate the actions (import, trim, split, unlink audio, captions, export) live in the editor the group uses.",
      "Hold a short screening where learners show their videos and give feedback using the rubric rows, one row at a time."
    ]
  }
};
