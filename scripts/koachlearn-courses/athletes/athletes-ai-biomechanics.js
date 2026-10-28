"use strict";

// Koach Learn course: Athletes -> "AI Biomechanics" (bonus). Skill-building course: by the end the student can DO the skill in `outcome`.
// General education only: technique and injury questions go to the coach, athletic trainer, physical therapist or doctor.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-ai-biomechanics",
  category: "Athletes",
  name: "AI Biomechanics",
  skills: "Explaining basic biomechanics terms, Filming a movement for analysis, Breaking a skill into phases, Using pose-estimation and frame-by-frame tools, Comparing before-and-after technique with your coach",
  outcome: "film one sports movement from the right angles, break it into phases, use frame-by-frame review (and, if you choose, a free pose-estimation tool) to describe one technique point, and build a before-and-after comparison to review with your coach.",
  about: [
    "Biomechanics is the study of how the body moves. This course is for athletes and coaches who want to understand technique better using a phone camera and AI tools, in sports like sprinting, jumping, throwing, shooting, swinging and kicking.",
    "You will learn a few key terms, film a movement properly, break it into phases, and use slow motion, frame-by-frame review and AI pose tools to see what is happening. Then you will compare before and after with your coach.",
    "This is general education. Technique changes should come from your coach, and pain, injury or return-to-play questions go to your athletic trainer, a physical therapist or a doctor. Each lesson is about five minutes with a \"Try it now\" task, a knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Choose one movement from your sport. Film it from the side and from the front, break it into phases, use frame-by-frame review to describe one technique point with screenshots, agree one cue with your coach, practice it, and film again two weeks later for a side-by-side before-and-after comparison.",
  chapters: [
    {
      name: "Chapter 1: Seeing movement",
      lessons: [
        {
          title: "Biomechanics in plain words",
          minutes: 5,
          goal: "Explain five basic biomechanics terms using an example from your sport.",
          text: [
            "Biomechanics looks at how forces and body positions create movement. Coaches use it to make technique more efficient and to reduce injury risk.",
            "Five useful words: Joint angle (the angle at a knee, hip or elbow). Range of motion (how far a joint moves). Center of mass (the balance point of your body). Kinetic chain (how force passes from the ground through legs, hips, trunk and arms). Ground reaction force (the push the ground gives back when you push into it).",
            "Example: in a jump shot, force starts in your legs, passes through your hips and trunk, and finishes through your arm and wrist. That is the kinetic chain. An AI assistant can explain any term with an example from your sport."
          ],
          words: [["Biomechanics", "the study of how forces and body positions create movement."], ["Kinetic chain", "the way force passes from one body part to the next, like legs to hips to arms."], ["Center of mass", "your body's balance point."]],
          slides: [
            { title: "Biomechanics", bullets: ["How forces and positions create movement", "More efficient technique", "Lower injury risk"] },
            { title: "Five key words", bullets: ["Joint angle, range of motion", "Center of mass", "Kinetic chain, ground reaction force"] },
            { title: "Jump shot example", bullets: ["Legs -> hips -> trunk -> arm -> wrist", "That's the kinetic chain"] }
          ],
          tryIt: "Pick one movement from your sport. Ask an AI assistant to explain the kinetic chain in it in simple words. Write it in your own words in three sentences.",
          youCanNow: "explain basic biomechanics terms with an example from your sport."
        },
        {
          title: "Filming a movement for analysis",
          minutes: 5,
          goal: "Film a movement from the right angles so it can be analyzed.",
          text: [
            "Analysis needs good video. Film from the side (to see joint angles front-to-back) and from the front or back (to see knees caving in, hips dropping or arms crossing). Keep the camera at about hip height, steady, and far enough away to see the whole body.",
            "Use your phone's slow-motion mode and good light. Wear clothes that show your body shape, and add tape marks on the floor so you can film from the same spot next time.",
            "Film several repetitions, not just one, and film when you are warmed up. Get permission before filming others, and follow your team's rules."
          ],
          steps: ["Set the phone at hip height on a tripod or stand.", "Film from the side.", "Film from the front or back.", "Use slow motion and good light.", "Mark the camera and athlete spots for next time.", "Film three to five reps."],
          words: [["Sagittal view", "a side view, showing forward-and-back motion."], ["Frontal view", "a front or back view, showing side-to-side motion."]],
          slides: [
            { title: "Two angles", bullets: ["Side: joint angles", "Front or back: knees, hips, arms"] },
            { title: "Camera setup", bullets: ["Hip height, steady", "Whole body in frame", "Slow motion, good light"] },
            { title: "Repeatable", bullets: ["Mark camera and athlete spots", "Three to five warmed-up reps"] }
          ],
          tryIt: "Film one movement from the side and the front, three reps each, with your phone at hip height and slow motion on. Mark the spots.",
          youCanNow: "film a movement properly for biomechanics analysis."
        },
        {
          title: "Breaking a skill into phases",
          minutes: 5,
          goal: "Break your movement into phases and find the key positions.",
          text: [
            "Most sports skills have phases. A throw: wind-up, stride, arm cocking, acceleration, release, follow-through. A sprint start: set, push-off, drive, transition. A jump: approach, plant, take-off, flight, landing.",
            "For each phase, there are key positions coaches look at: where the foot lands, the knee angle at take-off, the trunk angle at release. Your coach can tell you which ones matter most for you.",
            "Use frame-by-frame review in your phone's video app or a free video tool. Pause on the key frame for each phase and take a screenshot. Ask an AI assistant to list the typical phases of your skill, then confirm them with your coach."
          ],
          steps: ["Ask AI for the typical phases of your skill.", "Confirm the phases with your coach.", "Scrub frame by frame through your video.", "Screenshot the key frame for each phase.", "Label each screenshot."],
          words: [["Phase", "one part of a movement, like the wind-up or release."], ["Key position", "an important body position at a certain moment."], ["Frame by frame", "stepping through a video one picture at a time."]],
          slides: [
            { title: "Skills have phases", bullets: ["Throw: wind-up to follow-through", "Sprint start: set to transition", "Jump: approach to landing"] },
            { title: "Key positions", bullets: ["Foot landing", "Knee angle at take-off", "Trunk angle at release"] },
            { title: "Frame by frame", bullets: ["Pause on each key frame", "Screenshot and label", "Confirm phases with your coach"] }
          ],
          tryIt: "Break your filmed movement into phases. Screenshot and label one key frame for each phase.",
          youCanNow: "break a skill into phases and capture its key positions."
        }
      ],
      check: {
        title: "Knowledge Check 1: Seeing movement",
        questions: [
          { q: "What is the kinetic chain?", options: ["A bike part", "A weight machine", "How force passes from one body part to the next", "A type of shoe"], answer: 2, why: "Force flows legs to hips to trunk to arms." },
          { q: "Which camera view best shows knees caving inward?", options: ["Front or back view", "Side view only", "From above only", "Close-up of the face"], answer: 0, why: "Side-to-side motion shows best from the front or back." },
          { q: "At what height should the camera be?", options: ["On the floor", "Above your head", "Anywhere", "About hip height"], answer: 3, why: "Hip height reduces distortion of the body." },
          { q: "Why film several reps?", options: ["To fill storage", "One rep may not be typical", "It's a rule", "To make it longer"], answer: 1, why: "Several reps show your real pattern." },
          { q: "Who should confirm the phases and key positions for you?", options: ["A random video", "Your coach", "A fan", "No one"], answer: 1, why: "Your coach knows what matters for your technique." }
        ]
      }
    },
    {
      name: "Chapter 2: AI tools and real change",
      lessons: [
        {
          title: "Pose estimation: AI that finds your joints",
          minutes: 5,
          goal: "Explain what pose estimation does and its limits.",
          text: [
            "Pose estimation is AI that finds body points, like shoulders, elbows, hips, knees and ankles, in a photo or video and connects them into a stick figure. Some apps then estimate joint angles.",
            "These tools are useful for seeing positions and comparing reps, but they make mistakes: loose clothing, fast motion, blur, poor light, other people in the frame or a body part hidden behind another can throw them off. Angles from a 2D phone video are estimates, not lab measurements.",
            "If you try a pose app, check its privacy policy, because video of your body is personal data. For minors, a parent should approve. Always check the stick figure against the real video before trusting a number."
          ],
          steps: ["Choose a well-lit, clear clip.", "If you use a pose app, check its privacy policy first.", "Run the clip and look at the stick figure.", "Check it matches the real body in each key frame.", "Treat angles as estimates."],
          words: [["Pose estimation", "AI that finds body points in video and draws a stick figure."], ["2D video", "flat video from one camera; it can't measure depth perfectly."]],
          slides: [
            { title: "Pose estimation", bullets: ["AI finds shoulders, hips, knees, ankles", "Draws a stick figure", "Some apps estimate angles"] },
            { title: "Limits", bullets: ["Blur, loose clothes, poor light", "Hidden body parts", "2D angles are estimates"] },
            { title: "Use it safely", bullets: ["Check the privacy policy", "Minors: parent approves", "Check against the real video"] }
          ],
          tryIt: "Ask an AI assistant to explain how pose estimation works and three ways it can be wrong. Then look at your key frames and write where a pose tool might struggle.",
          youCanNow: "explain what pose estimation does and why its numbers need checking."
        },
        {
          title: "Describing one technique point",
          minutes: 5,
          goal: "Describe one technique point clearly using your screenshots.",
          text: [
            "Pick one thing to look at, not ten. For example: \"At take-off, my knee bends much less on my left leg than my right.\" or \"At release, my elbow is below my shoulder.\"",
            "Describe it with evidence: the phase, the screenshot, and what you see compared with another rep or with a model your coach gives you. An AI assistant can help you write a clear, neutral description: \"Help me describe what I see in these two key frames in plain, neutral words.\" Do not ask it for a diagnosis or a fix for pain.",
            "Bring it to your coach as a question: \"I noticed this. Is it something we should work on? What cue should I use?\""
          ],
          steps: ["Choose one technique point.", "Pick the screenshots that show it.", "Write a neutral description with the phase.", "Ask your coach if it matters and what cue to use."],
          words: [["Cue", "a short instruction that helps you change a movement, like \"tall chest\"."], ["Neutral description", "describing what you see without judging or diagnosing."]],
          slides: [
            { title: "One point, not ten", bullets: ["Example: less knee bend on the left at take-off"] },
            { title: "Show evidence", bullets: ["Phase and screenshot", "Compared with another rep or a model", "Neutral words; no diagnosis"] },
            { title: "Ask your coach", bullets: ["\"Should we work on this?\"", "\"What cue should I use?\""] }
          ],
          tryIt: "Write one technique point in two neutral sentences with the phase and screenshots. Use AI to make it clearer, then take it to your coach.",
          youCanNow: "describe one technique point with evidence and turn it into a question for your coach."
        },
        {
          title: "Before and after: did it change?",
          minutes: 5,
          goal: "Make a side-by-side comparison to see whether technique changed.",
          text: [
            "After practicing your coach's cue for a few weeks, film again from the same marked spots, same angles, same lighting. Put the before and after key frames side by side in a slide or Canva layout.",
            "Look at the same key position in each. Is the change there? Is it there on every rep or only some? Change takes many repetitions; small progress is still progress.",
            "If a change causes pain, or a movement hurts, stop and tell your athletic trainer, physical therapist or doctor. Technique work should never push through pain."
          ],
          steps: ["Film again from the same spots and angles.", "Pick the same key frames.", "Put before and after side by side.", "Note what changed and on how many reps.", "Review with your coach; report any pain."],
          words: [["Side-by-side", "two images or videos placed next to each other to compare."], ["Physical therapist", "a licensed professional who helps people recover movement after injury."]],
          slides: [
            { title: "Same setup", bullets: ["Same marked spots", "Same angles and light"] },
            { title: "Compare", bullets: ["Same key frame, side by side", "Every rep or only some?", "Small progress counts"] },
            { title: "Safety", bullets: ["Pain? Stop", "Tell your athletic trainer, PT or doctor"] }
          ],
          tryIt: "Final task: practice your coach's cue, film again in two weeks from the same spots, and build a side-by-side before-and-after comparison to review with your coach.",
          youCanNow: "compare before-and-after technique fairly and know when to stop for pain."
        }
      ],
      check: {
        title: "Knowledge Check 2: AI tools and real change",
        questions: [
          { q: "What does pose estimation do?", options: ["Diagnoses injuries", "Writes training plans", "Counts followers", "Finds body points in video and draws a stick figure"], answer: 3, why: "It locates joints in images." },
          { q: "Which can make a pose tool wrong?", options: ["Blur and loose clothing", "Good light", "Tight clothes", "A clear background"], answer: 0, why: "Blur and loose clothes hide joint positions." },
          { q: "Angles from one phone video are:", options: ["Perfect", "Medical diagnoses", "Estimates, not lab measurements", "Useless"], answer: 2, why: "2D video can't measure depth perfectly." },
          { q: "What should you ask AI when describing your technique?", options: ["To diagnose your knee pain", "To prescribe treatment", "To overrule your coach", "Help describing what you see in neutral words"], answer: 3, why: "Diagnosis and treatment belong to professionals." },
          { q: "A new technique causes pain. You:", options: ["Push through", "Stop and tell your athletic trainer, PT or doctor", "Ignore it", "Ask AI for painkillers"], answer: 1, why: "Never push through pain." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Biomechanics",
    questions: [
      { q: "Biomechanics studies:", options: ["Team finances", "Social media", "How forces and body positions create movement", "Stadium design"], answer: 2, why: "It's the science of movement." },
      { q: "Range of motion is:", options: ["How far a joint moves", "How far you run", "A scoreboard", "A type of drill"], answer: 0, why: "It describes joint movement." },
      { q: "Center of mass is:", options: ["Your body's balance point", "The middle of the field", "A gym", "A muscle"], answer: 0, why: "It's where your weight balances." },
      { q: "Ground reaction force is:", options: ["Wind", "A penalty", "The push the ground gives back", "A team rule"], answer: 2, why: "You push the ground, it pushes back." },
      { q: "In a jump shot, force starts in:", options: ["The wrist", "The legs", "The eyes", "The ball"], answer: 1, why: "The kinetic chain starts from the ground up." },
      { q: "A side view shows:", options: ["Only the face", "Nothing useful", "Only the crowd", "Forward-and-back motion and joint angles"], answer: 3, why: "That's the sagittal view." },
      { q: "Why mark camera spots on the floor?", options: ["For decoration", "It's a rule", "To film the same way next time", "To confuse others"], answer: 2, why: "Same setup makes fair comparisons." },
      { q: "Slow motion helps you:", options: ["Save battery", "Hide errors", "Add music", "See fast movements clearly"], answer: 3, why: "It shows details." },
      { q: "Before filming teammates you should:", options: ["Get permission", "Post it first", "Film secretly", "Skip it"], answer: 0, why: "Respect privacy and team rules." },
      { q: "A phase is:", options: ["A game period", "One part of a movement", "A team", "A phone"], answer: 1, why: "Skills break into phases." },
      { q: "Which is a phase of a throw?", options: ["Halftime", "Timeout", "Release", "Warm-down lap"], answer: 2, why: "Release is a throwing phase." },
      { q: "Frame-by-frame review means:", options: ["Stepping through video one picture at a time", "Watching at double speed", "Skipping to the end", "Deleting frames"], answer: 0, why: "It lets you find key positions." },
      { q: "AI lists the phases of your skill. Next you:", options: ["Trust them fully", "Post them", "Ignore your coach", "Confirm them with your coach"], answer: 3, why: "Coaches confirm what matters." },
      { q: "Pose estimation draws:", options: ["A logo", "A stick figure on your body", "A map", "A chart of followers"], answer: 1, why: "It connects detected body points." },
      { q: "Before using a pose app, check:", options: ["Its color", "Its privacy policy", "Its logo", "Nothing"], answer: 1, why: "Body video is personal data." },
      { q: "How many technique points should you work on at once?", options: ["One", "Ten", "All of them", "None"], answer: 0, why: "One focus is easier to change." },
      { q: "A cue is:", options: ["A short instruction to change a movement", "A pool stick", "A score", "A video app"], answer: 0, why: "Cues guide technique changes." },
      { q: "A neutral description:", options: ["Judges harshly", "Diagnoses injuries", "Describes what you see without diagnosing", "Ignores evidence"], answer: 2, why: "Stick to what you see." },
      { q: "Before-and-after videos should use:", options: ["Different angles each time", "Any setup", "No video", "The same spots, angles and light"], answer: 3, why: "Same setup makes fair comparisons." },
      { q: "Who helps people recover movement after injury?", options: ["A fan", "A physical therapist", "An AI app", "A referee"], answer: 1, why: "Physical therapists are licensed for this." }
    ]
  }
};
