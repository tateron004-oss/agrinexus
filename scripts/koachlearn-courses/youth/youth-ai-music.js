"use strict";

// Koach Learn course: Youth -> "AI Music Production" (bonus). Skill-building: by the end the student can make a short original track in a free online music studio, with AI as a brainstorming partner, while respecting copyright and other people's voices.
// Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "youth-ai-music",
  category: "Youth",
  name: "AI Music Production",
  skills: "Making a beat in a free online studio, Brainstorming lyrics with AI, Building a song structure, Respecting copyright and voices, Exporting and sharing safely",
  outcome: "make a short original track (about 60 seconds) in a free online music studio, using AI to brainstorm ideas and lyrics, with a clear song structure, no copied songs or cloned voices, and credits that say how you used AI.",
  about: [
    "This course is for teens who love music and want to make their own, even if they cannot play an instrument yet. You can do it on a phone or a school or library computer.",
    "You will make a beat in BandLab, a free online music studio, use an AI assistant as a brainstorming partner for ideas and lyrics, build the parts of a song, and learn the rules about copyright and using other people's voices. You will finish by exporting a short track and sharing it safely.",
    "BandLab's terms say users must be at least 13 and that users under 18 need a parent's or guardian's permission. Check the age rules of every tool you use, check your school's rules on AI, and involve a parent or guardian when you sign up. Each lesson ends with a \"Try it now\" task, with a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make an original track of about 60 seconds in a free online studio: a beat, an intro, a verse and a chorus. Use an AI assistant to brainstorm a theme and at least four lines of lyrics, then rewrite them in your own words. Use no copied songs and no AI copy of a real person's voice. Export it, and write a short credit note that says what you made and how you used AI.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teens who love music and want to make their own, including those who cannot play an instrument yet.",
    startingPoint: "Listen to music every day and know songs they love. Most have never made a beat, arranged a song, or learned the rules about copyright, samples and AI voices.",
    gap: "AI music tools make it easy to copy songs or voices without knowing it is wrong, and prompting alone does not make someone the author. Teens need to make original music themselves, use AI only as a brainstorming partner, and share their work honestly and safely.",
    constraints: [
      "Age limits: BandLab and other tools have minimum ages and need a parent's or guardian's permission for under-18s",
      "School AI rules for music class",
      "Devices: a phone or a school or library computer with a web browser; free tools only",
      "Copyright and voice rights: no copied songs, samples without permission, or AI copies of real voices",
      "Privacy when sharing: no full name, school or location in public posts"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Thinking about music you hear and make", action: "explain how AI is used in music and the ground rules you will follow", standard: "naming three uses and the rules on copying, voices, age limits and honesty" },
    { id: "O2", condition: "Using a free online studio such as BandLab, with a parent's or guardian's OK", action: "make a 4-bar beat with drums and one other sound at a tempo that fits the mood", standard: "playing back without gaps" },
    { id: "O3", condition: "Given a theme from your own life", action: "use AI to brainstorm images and rhymes, then write four lines of lyrics in your own words", standard: "so the lines fit the beat when said out loud" },
    { id: "O4", condition: "Given your beat and lyrics", action: "arrange the track into an intro, verse and chorus", standard: "about 60 seconds long, with each part sounding a little different" },
    { id: "O5", condition: "For every sound and voice in your track", action: "decide whether each sound or voice is OK to use, and remove anything you cannot show is allowed", standard: "with no copied songs, unlicensed samples or AI copies of real voices" },
    { id: "O6", condition: "When the track is finished", action: "balance the mix, export the track and write an honest credit note", standard: "sharing only where your family agrees and keeping personal details private" }
  ],
  chapters: [
    {
      name: "Chapter 1: Making music with AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "How AI is used in music, and the ground rules",
          minutes: 4,
          goal: "Explain three ways AI is used in music and the rules you will follow.",
          text: [
            "AI is used in music in many ways: apps that suggest chords or drum patterns, tools that clean up recordings, assistants like ChatGPT, Microsoft Copilot or Google Gemini that help brainstorm lyrics, and generators that create whole songs from a text prompt.",
            "In this course, AI is your brainstorming partner. You make the main creative choices. That matters for learning, and it matters legally too: the U.S. Copyright Office has said that typing prompts alone is not enough to make you the author of what an AI produces. Your own words, sounds and arrangement are what count.",
            "Ground rules: do not copy other people's songs, do not use an AI copy of a real singer's or classmate's voice, check the age rules of each tool, follow your school's AI rules for music class, and be honest about how you used AI."
          ],
          words: [["AI music generator", "a tool that creates music from a text description."], ["Author", "the person who creates a work and can own its copyright."], ["Prompt", "what you type to ask an AI for something."]],
          slides: [
            { title: "AI in music", bullets: ["Suggests chords and drum patterns", "Cleans up recordings", "Brainstorms lyrics", "Generates songs from a prompt"] },
            { title: "AI is your partner", bullets: ["You make the main creative choices", "Prompts alone do not make you the author", "Your own words and sounds count"] },
            { title: "Ground rules", bullets: ["No copied songs", "No AI copies of real people's voices", "Check age rules and school rules", "Be honest about AI use"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright and Artificial Intelligence, Part 2 (copyrightability)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "U.S. Copyright Office: Copyright and AI", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Write the name of a song you love and three things you like about it (the beat, the mood, the words). These are ideas you can learn from without copying the song.",
          youCanNow: "name ways AI is used in music and explain the rules for using it fairly.",
          quickCheck: [
            { objective: "O1", q: "Which is one way AI is used in music?", options: ["Tools that clean up recordings", "Tuning a guitar by hand", "Printing concert tickets", "Building speakers"], answer: 0, why: "AI suggests chords, cleans up recordings, helps with lyrics and can generate songs." },
            { objective: "O1", q: "A song generator makes a whole track from your one-line prompt. Can you call it fully your work?", options: ["Yes, the prompt makes you the author", "Yes, if you rename it", "No; prompts alone are not enough, so make the main creative choices yourself", "Only if no one asks"], answer: 2, why: "The U.S. Copyright Office said typing prompts alone is not enough to make you the author." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Making your first beat in a free online studio",
          minutes: 6,
          goal: "Open a free online studio and make a 4-bar beat with drums and one other sound.",
          text: [
            "BandLab is a free music app and website with an online studio for making music. You can use it in a web browser at bandlab.com or in its app from the official app store. You need an account, so involve a parent or guardian when you sign up.",
            "Music is counted in beats and bars. Most pop and hip-hop songs have 4 beats in a bar. A loop is a short piece of music that repeats. Many beats start with a drum loop, then add bass, then one more sound like keys or guitar.",
            "Menus change over time, so look for these actions: start a new project, add a track, pick an instrument or browse loops, drag a loop onto the track, and press play. Change the tempo (speed) to fit the mood: slower for chill, faster for hype."
          ],
          steps: ["With a parent or guardian, sign up for BandLab or another free online studio.", "Start a new project.", "Add a drum track, using a loop or by tapping in a simple pattern.", "Add a bass or keys track that fits the drums.", "Set the tempo, make it 4 bars long, and press play."],
          words: [["Beat", "the steady pulse of music; also a short instrumental track."], ["Bar", "a group of beats, usually 4."], ["Loop", "a short piece of music that repeats."], ["Tempo", "how fast the music goes, counted in beats per minute (BPM)."]],
          slides: [
            { title: "A free online studio", bullets: ["BandLab: web browser or official app", "Sign up with a parent or guardian", "Users must be 13+ under BandLab's terms"] },
            { title: "Beats, bars and loops", bullets: ["Most songs: 4 beats in a bar", "A loop is a short repeating piece", "Start with drums, then bass, then one more"] },
            { title: "Build your beat", bullets: ["New project, add a track", "Choose a loop or instrument", "Set the tempo and press play"] }
          ],
          sources: [{ name: "BandLab Terms of Use (age and parent permission)", url: "https://bandlabtechnologies.com/policies/bandlab-terms-of-use/" }],
          tryIt: "Make a 4-bar beat with drums and one other sound. Try two different tempos and keep the one that fits the mood you want.",
          youCanNow: "open a free online studio and build a short beat from tracks and loops.",
          quickCheck: [
            { objective: "O2", q: "What is a bar in music?", options: ["A loud sound", "A type of drum", "A recording app", "A group of beats, usually 4 in pop and hip-hop"], answer: 3, why: "Music is counted in beats and bars, and most pop and hip-hop songs have 4 beats in a bar." },
            { objective: "O2", q: "Your beat should feel hype, but it sounds sleepy. What do you change?", options: ["Make it quieter", "Speed up the tempo", "Delete the drums", "Add more bars of silence"], answer: 1, why: "Tempo is the speed: faster for hype, slower for chill." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Brainstorming lyrics with AI",
          minutes: 5,
          goal: "Use AI to brainstorm a theme and rhymes, then write lyrics in your own words.",
          text: [
            "Start with a theme from your life: first day at a new school, a summer job, a friend moving away, making the team. Real feelings make better songs than general ones.",
            "Ask AI for ideas, not a finished song: \"Give me 10 images and phrases about the last day of summer before high school\" or \"Give me rhyming words for 'late' and 'wait'.\" Then pick what you like and write the lines yourself.",
            "Count syllables so the words fit the beat. Read your lines out loud over the beat. If a line feels crowded, cut words. Your lyrics should sound like you."
          ],
          steps: ["Choose a theme from your own life.", "Ask AI for images, phrases or rhymes, not a full song.", "Write four lines in your own words.", "Say them out loud over your beat.", "Cut or change words until they fit."],
          words: [["Lyrics", "the words of a song."], ["Theme", "what a song is about."], ["Syllable", "one beat of sound in a word; \"mu-sic\" has two."]],
          slides: [
            { title: "Start with your life", bullets: ["A real moment or feeling", "Specific beats general"] },
            { title: "Ask for ideas, not a song", bullets: ["\"10 images about...\"", "\"Rhymes for 'late'\"", "You choose and write"] },
            { title: "Make it fit", bullets: ["Count syllables", "Read it over the beat", "Cut crowded lines"] }
          ],
          tryIt: "Pick a theme, ask an AI assistant for 10 images or phrases about it, and write four lines of lyrics in your own words that fit your beat.",
          youCanNow: "brainstorm with AI and write original lyrics that fit a beat.",
          quickCheck: [
            { objective: "O3", q: "What should you ask AI for when writing lyrics?", options: ["A finished song to copy", "Your friend's lyrics", "A famous song's words", "Ideas such as images, phrases or rhymes"], answer: 3, why: "AI gives ideas; you write the lines yourself so they sound like you." },
            { objective: "O3", q: "One line feels crowded when you say it over the beat. What do you do?", options: ["Cut or change words until it fits", "Speed up the whole song", "Add more words", "Keep it and rap faster"], answer: 0, why: "Counting syllables and cutting words helps lines fit the beat." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Making music with AI",
        questions: [
          { objective: "O1", q: "According to the U.S. Copyright Office, is typing prompts alone enough to make you the author of AI output?", options: ["Yes, always", "No, prompts alone are not enough", "Only for songs", "Only if you pay"], answer: 1, why: "The Office said the mere provision of prompts is insufficient." },
          { objective: "O1", q: "A friend wants to use an AI copy of a famous singer's voice on your track. What do you do?", options: ["Use it", "Use it but hide it", "Say no and use your own or a willing person's voice", "Copy the whole song too"], answer: 2, why: "Do not use a real person's voice without permission." },
          { objective: "O2", q: "What is a loop?", options: ["A short piece of music that repeats", "A song's lyrics", "A volume button", "A type of microphone"], answer: 0, why: "Loops repeat and are a common way to build beats." },
          { objective: "O2", q: "What does tempo mean?", options: ["How loud the song is", "The song's title", "How many tracks you have", "How fast the music goes"], answer: 3, why: "Tempo is speed, counted in beats per minute." },
          { objective: "O3", q: "Which AI request fits this course best?", options: ["\"Write my whole song\"", "\"Give me 10 images about my first summer job\"", "\"Copy a hit song\"", "\"Sing in my teacher's voice\""], answer: 1, why: "Ask AI for ideas, then write the song yourself." }
        ]
      }
    },
    {
      name: "Chapter 2: Building, protecting and sharing your track",
      lessons: [
        {
          objectives: ["O4"],
          title: "Building a song structure",
          minutes: 5,
          goal: "Arrange your track into an intro, verse and chorus.",
          text: [
            "Most songs are built from parts. The intro opens the song. The verse tells the story and changes words each time. The chorus is the catchy part that repeats. A short song might go: intro, verse, chorus.",
            "Make each part feel a little different. For example, the intro has only keys, the verse adds drums, and the chorus adds bass and a melody. Copy and paste sections in the studio to build the song along the timeline.",
            "You can ask AI: \"I have a 4-bar beat at 90 BPM. How could I arrange a 60-second song with an intro, verse and chorus?\" Then try its ideas and trust your ears."
          ],
          steps: ["Plan the order: intro, verse, chorus.", "Copy your beat to make each section.", "Take sounds out or add sounds so each part feels different.", "Put your lyrics on the verse and chorus.", "Play the whole thing and adjust."],
          words: [["Intro", "the opening of a song."], ["Verse", "the part that tells the story; words change each time."], ["Chorus", "the catchy part that repeats."], ["Arrangement", "how the parts of a song are ordered and layered."]],
          slides: [
            { title: "Parts of a song", bullets: ["Intro: opens the song", "Verse: tells the story", "Chorus: the catchy part that repeats"] },
            { title: "Make each part different", bullets: ["Intro: fewer sounds", "Verse: add drums", "Chorus: add bass and melody"] },
            { title: "Ask AI, trust your ears", bullets: ["Ask for arrangement ideas", "Try them", "Keep what sounds good to you"] }
          ],
          tryIt: "Arrange your beat into an intro, verse and chorus of about 60 seconds. Add your four lines of lyrics as text notes or record them if you want.",
          youCanNow: "arrange a track into clear song parts that each feel different.",
          quickCheck: [
            { objective: "O4", q: "What does the intro of a song do?", options: ["Repeats the catchy part", "Ends the song", "Opens the song", "Tells the whole story"], answer: 2, why: "The intro opens the song before the verse and chorus." },
            { objective: "O4", q: "Your intro, verse and chorus all sound the same. What do you do?", options: ["Take sounds out or add sounds so each part feels different", "Make every part louder", "Delete the chorus", "Use a different song"], answer: 0, why: "Changing which sounds play in each part makes the structure clear." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Copyright, samples and voices",
          minutes: 5,
          goal: "Decide whether a sound or voice is OK to use in your track.",
          text: [
            "Copyright protects original works like songs and recordings. According to the U.S. Copyright Office, a work is protected as soon as it is created and fixed in a form people can hear or see, and registration is generally voluntary. So most songs you hear are protected, and the song you make is yours.",
            "Using a piece of someone else's recording is called sampling. Do not sample songs unless you have permission or the sound comes from a library that says you may use it, such as the loops in your studio. Read the tool's rules.",
            "Voices are personal. Do not make or use an AI copy of a real person's voice, whether a star, a teacher or a classmate, without their clear permission. If you are not sure something is OK, leave it out or ask a teacher or parent."
          ],
          steps: ["Ask: did I make this sound, or does the tool say I may use it?", "If it comes from someone else's song, leave it out unless you have permission.", "Never use an AI copy of a real person's voice without permission.", "When unsure, leave it out or ask a trusted adult."],
          words: [["Copyright", "the legal right of a creator to control copies of their work."], ["Sample", "a piece of someone else's recording used in a new track."], ["Voice clone", "an AI copy of a real person's voice."]],
          slides: [
            { title: "Copyright basics", bullets: ["Protects songs and recordings", "Starts when a work is created and fixed", "Registration is generally voluntary"] },
            { title: "Samples", bullets: ["Do not sample songs without permission", "Studio loops: check the tool's rules"] },
            { title: "Voices", bullets: ["No AI copies of real people without permission", "Stars, teachers and classmates included", "Unsure? Leave it out or ask"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright basics FAQ", url: "https://www.copyright.gov/help/faq/faq-general.html" }, { name: "U.S. Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }],
          tryIt: "List every sound in your track and where it came from: made by you, a studio loop, or something else. Remove anything you cannot say is OK to use.",
          youCanNow: "check every sound and voice in your track and keep only what you are allowed to use.",
          quickCheck: [
            { objective: "O5", q: "What is sampling?", options: ["Recording your own voice", "Using a piece of someone else's recording in a new track", "Changing the tempo", "Exporting a song"], answer: 1, why: "Sampling means using part of someone else's recording." },
            { objective: "O5", q: "You found a cool sound online but cannot tell who made it or if you may use it. What do you do?", options: ["Use it; no one will notice", "Speed it up so it sounds different", "Credit yourself", "Leave it out or ask a trusted adult"], answer: 3, why: "If you cannot say a sound is OK to use, leave it out or ask." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mixing, exporting and sharing safely",
          minutes: 5,
          goal: "Balance your track, export it, and share it with honest credits.",
          text: [
            "Mixing means setting how loud each track is so nothing drowns out the rest. Turn down anything too loud and listen on both headphones and a phone speaker.",
            "Then export or save the track as an audio file using the studio's export or download option. Write a short credit note: your name or artist name, the title, and how you used AI, for example \"AI helped brainstorm lyric ideas; all music and lyrics written and arranged by me.\"",
            "Share safely: post only where your family agrees, keep your full name, school and location private if you post publicly, and think before turning comments on. If your track is for school, follow your teacher's rules about AI."
          ],
          steps: ["Balance the volume of each track.", "Listen on headphones and a phone speaker.", "Export or save the track as an audio file.", "Write a credit note that says how you used AI.", "Share only where your family agrees, keeping personal details private."],
          words: [["Mixing", "balancing the volume of each track."], ["Export", "save your project as a file others can play."], ["Credit note", "a short note that says who made what."]],
          slides: [
            { title: "Mix it", bullets: ["Balance each track's volume", "Check on headphones and a phone speaker"] },
            { title: "Export and credit", bullets: ["Save as an audio file", "Title and artist name", "Say how you used AI"] },
            { title: "Share safely", bullets: ["Where your family agrees", "Keep name, school and location private", "Follow school AI rules"] }
          ],
          tryIt: "Final task: finish your 60-second original track with a beat, intro, verse and chorus and your own lyrics. Check every sound is OK to use, export it, and write a credit note that says how you used AI.",
          youCanNow: "make, mix, export and share an original track fairly and safely, with honest credits.",
          quickCheck: [
            { objective: "O6", q: "What does mixing mean?", options: ["Setting how loud each track is so nothing drowns out the rest", "Adding more lyrics", "Choosing a song title", "Uploading the song"], answer: 0, why: "Mixing balances the volume of each track." },
            { objective: "O6", q: "You want to post your track publicly. What do you keep private?", options: ["The song title", "Your artist name", "Your full name, school and location", "How you used AI"], answer: 2, why: "Share safely by keeping personal details private and posting only where your family agrees." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Building, protecting and sharing your track",
        questions: [
          { objective: "O4", q: "Which part of a song is the catchy part that repeats?", options: ["The intro", "The verse", "The export", "The chorus"], answer: 3, why: "The chorus is the repeating hook." },
          { objective: "O5", q: "When does copyright protection start, according to the U.S. Copyright Office?", options: ["When a work is created and fixed in a form people can hear or see", "Only after registration", "After 10 years", "Only for famous artists"], answer: 0, why: "Protection begins when the work is created and fixed." },
          { objective: "O5", q: "You want to use 5 seconds of a hit song in your beat. What do you do?", options: ["Use it; it is short", "Leave it out unless you have permission", "Change the speed so no one notices", "Credit the singer and use it"], answer: 1, why: "Sampling a protected song needs permission." },
          { objective: "O6", q: "What is mixing?", options: ["Writing lyrics", "Signing up for an app", "Balancing the volume of each track", "Choosing a theme"], answer: 2, why: "Mixing balances how loud each part is." },
          { objective: "O6", q: "Which credit note is honest?", options: ["\"No AI was used\" when it was", "\"AI helped brainstorm lyric ideas; music and lyrics by me\"", "No note at all for school work", "\"Made by a famous producer\""], answer: 1, why: "It says clearly how AI was used." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Music Production",
    questions: [
      { objective: "O1", q: "Which is a way AI is used in music?", options: ["Suggesting chords or drum patterns", "Replacing your ears", "Signing record deals for you", "Owning your songs"], answer: 0, why: "AI tools can suggest musical ideas." },
      { objective: "O1", q: "In this course, AI's job is to be your:", options: ["Ghostwriter", "Brainstorming partner", "Boss", "Lawyer"], answer: 1, why: "You make the main creative choices." },
      { objective: "O1", q: "What did the U.S. Copyright Office say about prompts alone?", options: ["They make you the author", "They are illegal", "They are not enough to make you the author", "They are only for adults"], answer: 2, why: "The mere provision of prompts is insufficient for authorship." },
      { objective: "O2", q: "Under BandLab's terms, users must be at least:", options: ["8", "10", "21", "13, with parent permission if under 18"], answer: 3, why: "The terms say 13 and up, with a parent's or guardian's permission for minors." },
      { objective: "O2", q: "Most pop and hip-hop songs have how many beats in a bar?", options: ["1", "4", "12", "100"], answer: 1, why: "Four beats per bar is the most common." },
      { objective: "O2", q: "A good order for building a beat is:", options: ["Only vocals", "Drums, then bass, then one more sound", "Export first", "Ten sounds at once"], answer: 1, why: "Starting with drums and bass gives a solid base." },
      { objective: "O2", q: "You want a chill, relaxed mood. You should probably:", options: ["Make the tempo very fast", "Add loud alarms", "Use a slower tempo", "Delete the drums"], answer: 2, why: "Slower tempos usually feel calmer." },
      { objective: "O3", q: "Which theme will likely make a stronger song?", options: ["\"Things\"", "\"Life in general\"", "\"Stuff happens\"", "\"Packing my locker on the last day of 8th grade\""], answer: 3, why: "Specific, real moments make stronger lyrics." },
      { objective: "O3", q: "A good AI request for lyrics is:", options: ["\"Give me rhyming words for 'late'\"", "\"Write the whole song and I will sign it\"", "\"Copy a famous song's words\"", "\"Use my friend's diary\""], answer: 0, why: "Asking for raw ideas keeps the writing yours." },
      { objective: "O3", q: "A line is too crowded for the beat. What do you do?", options: ["Speed up the whole song", "Cut words until it fits", "Add more words", "Delete the chorus"], answer: 1, why: "Cutting words helps lines fit the rhythm." },
      { objective: "O4", q: "The verse of a song:", options: ["Never has words", "Is the same every time", "Tells the story, with words that change", "Is the export file"], answer: 2, why: "Verses carry the story and change words." },
      { objective: "O4", q: "How can you make the chorus stand out?", options: ["Make it silent", "Delete the beat", "Use the same sounds as the intro", "Add more sounds, like bass and a melody"], answer: 3, why: "Adding layers makes the chorus feel bigger." },
      { objective: "O4", q: "AI gives you arrangement ideas. Then you:", options: ["Try them and trust your ears", "Must use all of them", "Must ignore all of them", "Post them as your song"], answer: 0, why: "You are the one making creative choices." },
      { objective: "O5", q: "Is registration required for your song to have copyright protection?", options: ["Yes, always", "No, registration is generally voluntary", "Only on weekends", "Only for school songs"], answer: 1, why: "The Copyright Office says registration is generally voluntary." },
      { objective: "O5", q: "A sample is:", options: ["A free trial", "A type of microphone", "A piece of someone else's recording used in a new track", "A lyric idea"], answer: 2, why: "Sampling uses part of an existing recording." },
      { objective: "O5", q: "A classmate's voice could be cloned by AI for your chorus. What is the rule?", options: ["Do it as a surprise", "Do it if it sounds good", "Do it only on school computers", "Only with their clear permission"], answer: 3, why: "Voices are personal; get clear permission or do not use them." },
      { objective: "O5", q: "You are not sure a sound is OK to use. The safest choice is:", options: ["Leave it out or ask a trusted adult", "Use it and hope", "Hide it in the mix", "Rename the file"], answer: 0, why: "When unsure, leave it out or ask." },
      { objective: "O6", q: "Why listen on both headphones and a phone speaker?", options: ["It is required by law", "To check the mix sounds good on different devices", "To make it louder", "To export it"], answer: 1, why: "Mixes sound different on different devices." },
      { objective: "O6", q: "When posting your track publicly, you should keep private:", options: ["The song title", "Your artist name", "Your full name, school and location", "The genre"], answer: 2, why: "Personal details stay private online." },
      { objective: "O6", q: "Your track is for music class. About AI, you should:", options: ["Hide that you used it", "Ask AI to write a note claiming no AI", "Skip the credit note", "Follow your teacher's rules and say how you used it"], answer: 3, why: "Honesty about AI use is part of school rules." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      6,
      8,
      10,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Beat",
        objective: "O2",
        notYet: "No drums, or only one sound.",
        meets: "A beat with drums and at least one other sound at a tempo that fits the mood.",
        exceeds: "The learner can explain why they chose that tempo."
      },
      {
        name: "Song structure",
        objective: "O4",
        notYet: "No clear intro, verse or chorus.",
        meets: "About 60 seconds with an intro, verse and chorus that sound a little different.",
        exceeds: "The chorus clearly stands out, for example with added bass or melody."
      },
      {
        name: "Own lyrics",
        objective: "O3",
        notYet: "Lyrics are missing or copied from AI.",
        meets: "At least four lines in the learner's own words that fit the beat.",
        exceeds: "Lyrics use a real theme from the learner's life and show AI ideas that were changed."
      },
      {
        name: "Original and allowed",
        objective: "O5",
        notYet: "Uses a copied song, an unlicensed sample or an AI copy of a real voice.",
        meets: "Every sound is made by the learner or allowed by the studio, and no real voice is copied.",
        exceeds: "Includes a list of each sound and where it came from."
      },
      {
        name: "Export and credit",
        objective: "O6",
        notYet: "Not exported, or no credit note.",
        meets: "Exported as an audio file with a credit note that says how AI was used.",
        exceeds: "The mix was checked on headphones and a phone speaker and adjusted."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who make a second original track within 30 days (follow-up survey)",
      "Learners who share a track safely with family, a class or a youth program showcase",
      "Learners who join a music class, club or program within 90 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or a school or library computer with internet",
      "Headphones",
      "BandLab or another free online studio, with a parent's or guardian's permission for under-18s",
      "A free AI assistant the learner is allowed to use",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Check each tool's age rules before class and collect parent or guardian permission for sign-ups; have a demo account ready if needed.",
      "Make headphones available so learners can work side by side in a lab.",
      "Review each learner's sound list before export to catch copied songs, unlicensed samples or cloned voices.",
      "Host a listening session in the group only, with families' agreement before anything is posted publicly.",
      "Score the track with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
