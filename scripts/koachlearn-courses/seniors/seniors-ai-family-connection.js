"use strict";

// Koach Learn course: Seniors and Technology -> "AI for Communication and Family Connection". Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "seniors-ai-family-connection",
  category: "Seniors and Technology",
  name: "AI for Communication and Family Connection",
  skills: "Drafting warm messages with AI, Sending a text or email, Joining a video call, Sharing a photo, Staying safe with family messages",
  outcome: "use an AI assistant to help write a warm message to a family member, send it by text or email, and set up and join a video call with them.",
  about: [
    "This course is for grandparents, parents, aunts, uncles and friends who want to stay close to the people they love, even when they live far away.",
    "You will use an AI assistant to help find the right words for a birthday, a get-well note or a simple hello. Then you will send your message, share a photo, and join a video call so you can see your family's faces.",
    "Each lesson takes about five minutes and goes one step at a time. Read the lesson, look at the slides, and do the \"Try it now\" task. It is a good idea to practice with a family member who already uses these tools. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Use an AI assistant to help write a short, warm message inviting a family member to a video call. Make one change so it sounds like you, send it by text or email, then join the call at the agreed time and say hello.",
  chapters: [
    {
      name: "Chapter 1: Finding the right words",
      lessons: [
        {
          title: "Using AI to help write a family message",
          minutes: 5,
          goal: "Ask an AI assistant to draft a short message for a family member.",
          text: [
            "Sometimes the hardest part of keeping in touch is knowing what to say. An AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini can write a first draft for you in seconds.",
            "Tell it who the message is for, what it is about, and how you want it to sound. For example: \"Write a short, cheerful text to my grandson Leo, who just finished his first week of college. I am proud of him. Keep it under 40 words.\"",
            "The draft is a starting point, not the final word. You know your family; the assistant does not."
          ],
          steps: ["Open your AI assistant.", "Say who the message is for and what it is about.", "Say how it should sound: cheerful, gentle, funny or simple.", "Say how long it should be."],
          words: [["Draft", "a first version of a message that you can change before you send it."], ["Tone", "how a message sounds, such as warm, funny or serious."]],
          slides: [
            { title: "Stuck for words?", bullets: ["An AI assistant can write a first draft", "It takes only seconds"] },
            { title: "Tell it four things", bullets: ["Who it is for", "What it is about", "How it should sound", "How long it should be"] },
            { title: "Remember", bullets: ["The draft is a starting point", "You know your family best"] }
          ],
          tryIt: "Think of one family member you would like to hear from. Ask an assistant to write a short, warm message to them about something real, such as a birthday, a new job or a simple hello.",
          youCanNow: "ask an AI assistant to draft a short message for someone you love."
        },
        {
          title: "Making the message sound like you",
          minutes: 4,
          goal: "Change an AI draft so it sounds like your own voice.",
          text: [
            "AI drafts can sound a little stiff or too fancy. Your family will notice if it does not sound like you, so make it yours.",
            "You can ask the assistant: \"Make it sound more casual.\" \"Use shorter words.\" \"Add that I am making his favorite apple pie when he visits.\" Or you can simply change the words yourself.",
            "Add one detail only you would know: a nickname, a memory, an inside joke. That is what makes a message feel personal."
          ],
          steps: ["Read the draft out loud.", "Mark any words you would never say.", "Ask for a change, or change the words yourself.", "Add one personal detail only you know."],
          words: [["Personal detail", "something specific to you and the person, like a memory or nickname."]],
          slides: [
            { title: "Make it yours", bullets: ["Read the draft out loud", "Change words you would never say"] },
            { title: "Ask for changes", bullets: ["\"Make it sound more casual.\"", "\"Use shorter words.\"", "\"Add that I am baking his favorite pie.\""] },
            { title: "Add a personal touch", bullets: ["A nickname", "A shared memory", "An inside joke"] }
          ],
          tryIt: "Take your draft from Lesson 1. Read it out loud, make one change so it sounds like you, and add one personal detail.",
          youCanNow: "turn an AI draft into a message that sounds like you."
        },
        {
          title: "Sending your message by text or email",
          minutes: 6,
          goal: "Copy your message and send it by text message or email.",
          text: [
            "Once your message is ready, you need to move it from the AI assistant to your text or email app. You do this by copying and pasting.",
            "To copy on a phone or tablet: press and hold your finger on the text until a menu appears, then tap Copy. Many AI apps also show a small copy button under the answer. On a computer, select the text with the mouse, then right-click and choose Copy.",
            "Then open your Messages or email app, start a new message to your family member, press and hold in the message box and tap Paste (on a computer, right-click and choose Paste). Read it one last time and send it."
          ],
          steps: ["Copy the message: press and hold, then tap Copy, or use the copy button.", "Open your Messages or email app.", "Start a new message to your family member.", "Press and hold in the message box and tap Paste.", "Read it once more, then tap Send."],
          words: [["Copy and paste", "picking up text from one place and putting it in another, without retyping."], ["Text message", "a short written message sent from one phone to another."]],
          slides: [
            { title: "Copy the message", bullets: ["Press and hold the text, then tap Copy", "Or tap the copy button under the answer", "Computer: right-click, then Copy"] },
            { title: "Paste it", bullets: ["Open Messages or email", "Start a new message", "Press and hold, then tap Paste"] },
            { title: "Before you send", bullets: ["Check the name of the person", "Read it once more", "Tap Send"] }
          ],
          tryIt: "Copy your finished message from Lesson 2 and send it to your family member by text or email.",
          youCanNow: "copy a message from an AI assistant and send it by text or email."
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding the right words",
        questions: [
          { q: "What should you tell the AI assistant when asking for a family message?", options: ["Your bank number", "Only one word", "Who it is for, what it is about, the tone and the length", "Your password"], answer: 2, why: "Those four things help the assistant write a useful draft." },
          { q: "The draft sounds too fancy. What do you do?", options: ["Ask it to sound more casual or change the words yourself", "Delete the app", "Send it anyway", "Give up"], answer: 0, why: "You can ask for changes or edit it so it sounds like you." },
          { q: "What makes a message feel personal?", options: ["Copying a card from a store", "Very long words", "Many exclamation marks", "A detail only you would know, like a memory"], answer: 3, why: "A shared memory or nickname makes it yours." },
          { q: "On a phone, how do you usually copy text?", options: ["Shake the phone", "Press and hold the text, then tap Copy", "Turn the phone off", "Take a photo of it"], answer: 1, why: "Press and hold opens a menu with Copy." },
          { q: "What should you check before you tap Send?", options: ["The battery level only", "That it is going to the right person", "Nothing", "The weather"], answer: 1, why: "Checking the name avoids sending your message to the wrong person." }
        ]
      }
    },
    {
      name: "Chapter 2: Seeing and sharing with family",
      lessons: [
        {
          title: "Joining a video call",
          minutes: 6,
          goal: "Join a video call with a family member and use the camera and microphone.",
          text: [
            "A video call lets you see and hear someone at the same time, from anywhere. Common free apps include FaceTime (on iPhone and iPad), WhatsApp, Google Meet and Zoom. Families often pick the one most of them already use.",
            "The easiest way to start is to let a family member call you. When the call comes, tap the green button or Accept. If they send you a link, tap the link at the agreed time and then tap Join.",
            "Once you are in the call, find the microphone and camera buttons. If a button has a line through it, it is off; tap it to turn it on. Hold the device at eye level with light in front of you, not behind you, so they can see your face."
          ],
          steps: ["Agree on a time and app with your family member.", "When the call comes, tap Accept, or tap the link they sent and tap Join.", "Check that the microphone and camera are on.", "Hold the device at eye level with light in front of you.", "Tap the red button to end the call."],
          words: [["Video call", "a call where you can see and hear each other on screen."], ["Link", "blue or underlined text you tap to go somewhere, such as a call."], ["Mute", "turning off your microphone so others cannot hear you."]],
          slides: [
            { title: "Free video call apps", bullets: ["FaceTime on iPhone and iPad", "WhatsApp, Google Meet, Zoom", "Use the one your family uses"] },
            { title: "Joining", bullets: ["Tap Accept when they call", "Or tap their link, then Join", "Join at the time you agreed"] },
            { title: "In the call", bullets: ["A line through a button means it is off", "Turn on microphone and camera", "Red button ends the call"] },
            { title: "Look your best", bullets: ["Device at eye level", "Light in front of you, not behind"] }
          ],
          tryIt: "Ask a family member to call you on the app they use. Answer it, check your camera and microphone are on, say hello, then end the call with the red button.",
          youCanNow: "join a video call, turn your camera and microphone on and off, and end the call."
        },
        {
          title: "Sharing a photo with family",
          minutes: 5,
          goal: "Take a photo and send it to a family member.",
          text: [
            "Sharing photos is one of the best ways to stay close. You can send a picture of your garden, a meal you cooked or a page from an old photo album.",
            "Open the Camera app, point at what you want, and tap the large round button. To send it, open the Photos or Gallery app, tap the photo, then tap the Share button (often a square with an arrow, or three dots joined by lines). Choose Messages, email or WhatsApp, then choose your family member.",
            "An AI assistant can help you write a caption, such as: \"Write a short, fun caption for a photo of my first ripe tomato of the summer.\""
          ],
          steps: ["Open the Camera app and tap the round button.", "Open Photos or Gallery and tap the photo.", "Tap the Share button.", "Choose Messages, email or WhatsApp, then your family member.", "Add a few words and send."],
          words: [["Share button", "a button that sends a photo or page to someone else."], ["Caption", "a short line of words that goes with a photo."]],
          slides: [
            { title: "Take the photo", bullets: ["Open the Camera app", "Tap the large round button"] },
            { title: "Send the photo", bullets: ["Open Photos or Gallery", "Tap the photo, then the Share button", "Choose an app, then your family member"] },
            { title: "Add a caption", bullets: ["Write a few words yourself", "Or ask AI for a short, fun caption"] }
          ],
          tryIt: "Take a photo of something you are proud of. Ask an AI assistant for a short caption, then send the photo with the caption to a family member.",
          youCanNow: "take a photo, add a caption, and share it with family."
        },
        {
          title: "Staying safe in family messages",
          minutes: 5,
          goal: "Spot a fake \"family emergency\" message and check it safely.",
          text: [
            "Scammers sometimes pretend to be a grandchild or relative in trouble. They may text from a new number (\"Hi Grandma, I lost my phone\") or even use AI to copy a voice on the phone. They usually ask for money fast, often by gift card, wire transfer or payment app, and ask you to keep it secret.",
            "Real family can wait a few minutes while you check. Hang up or stop replying, then call your family member, or their parent, on the number you already have saved.",
            "Some families agree on a secret family word that only they know, to use in an emergency. Never send money until you have spoken to the person on a number you trust. You can report scams to the Federal Trade Commission at ReportFraud.ftc.gov."
          ],
          steps: ["Notice the signs: new number, rush, money request, keep it secret.", "Stop replying or hang up.", "Call your family member on the number you already have.", "Agree on a family code word for emergencies.", "Report scams at ReportFraud.ftc.gov."],
          words: [["Grandparent scam", "a trick where someone pretends to be a grandchild in trouble to get money."], ["Code word", "a secret word your family agrees on to prove who is really calling."]],
          slides: [
            { title: "The fake emergency", bullets: ["\"Hi Grandma, I lost my phone\"", "A copied voice on the phone", "Asks for money fast and in secret"] },
            { title: "What to do", bullets: ["Stop replying or hang up", "Call them on the number you already have", "Never send money until you are sure"] },
            { title: "Be ready", bullets: ["Agree on a family code word", "Report scams at ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Final task: ask an AI assistant to help write a short, warm message inviting a family member to a video call. Make it sound like you, send it by text or email, and join the call at the agreed time. While you talk, agree on a family code word.",
          youCanNow: "stay in touch with family by message, photo and video call, and check a suspicious \"family\" message safely."
        }
      ],
      check: {
        title: "Knowledge Check 2: Seeing and sharing with family",
        questions: [
          { q: "A family member sends you a link for a video call. What do you do at the agreed time?", options: ["Delete it", "Turn off your phone", "Forward it to strangers", "Tap the link, then tap Join"], answer: 3, why: "Tapping the link and Join takes you into the call." },
          { q: "The microphone button has a line through it. What does that mean?", options: ["Your microphone is off", "The call is over", "The battery is low", "Your camera is broken"], answer: 0, why: "A line through a button means it is turned off." },
          { q: "Where should the light be during a video call?", options: ["Behind you", "There should be no light", "In front of you", "Under the table"], answer: 2, why: "Light in front of you lets your family see your face." },
          { q: "How do you send a photo from your Photos app?", options: ["Turn the phone upside down", "Take a screenshot of the battery", "Delete the photo", "Tap the photo, then the Share button, then choose a person"], answer: 3, why: "The Share button sends the photo to the app and person you choose." },
          { q: "A text from a new number says \"Grandpa, I'm in trouble, send gift cards and don't tell Mom.\" What do you do?", options: ["Buy the gift cards", "Reply with your bank number", "Call your grandchild or their parent on the number you already have", "Keep it secret"], answer: 2, why: "Rushing, secrecy and gift cards are scam signs; check on a number you trust." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Communication and Family Connection",
    questions: [
      { q: "How can an AI assistant help you keep in touch with family?", options: ["It can visit them for you", "It can write a first draft of a message", "It knows their phone numbers", "It sends money for you"], answer: 1, why: "Drafting messages is a strength of AI assistants." },
      { q: "Which prompt will give the best family message?", options: ["\"Write a short, cheerful text to my granddaughter Ava, who won her soccer game. Keep it under 40 words.\"", "\"message\"", "\"text\"", "\"hello\""], answer: 0, why: "It says who, what, the tone and the length." },
      { q: "What is a draft?", options: ["A first version you can change", "A cold wind", "The final copy", "A kind of app"], answer: 0, why: "A draft is a starting point you can improve." },
      { q: "What does \"tone\" mean in a message?", options: ["The ringtone", "How the message sounds, such as warm or funny", "The font size", "The phone number"], answer: 1, why: "Tone is how the message feels to the reader." },
      { q: "A good way to check if a draft sounds like you is to:", options: ["Send it without reading", "Make it longer", "Read it out loud", "Add big words"], answer: 2, why: "Reading out loud shows words you would never say." },
      { q: "What makes a message feel personal?", options: ["Fancy words", "Writing in all capital letters", "Copying it from a card", "A shared memory or nickname"], answer: 3, why: "Details only you know make it yours." },
      { q: "To copy text on a phone you usually:", options: ["Tap the camera", "Shake the phone", "Press and hold, then tap Copy", "Turn up the volume"], answer: 2, why: "Press and hold opens the Copy menu." },
      { q: "After copying, how do you put the message into a text?", options: ["Press and hold in the message box and tap Paste", "Retype every word", "Take a photo", "Call the person"], answer: 0, why: "Paste puts the copied text in the message box." },
      { q: "What should you check before tapping Send?", options: ["Nothing", "The weather", "Your password", "The person's name"], answer: 3, why: "Checking the name avoids sending to the wrong person." },
      { q: "Which of these is a video call app?", options: ["Calculator", "FaceTime", "Clock", "Flashlight"], answer: 1, why: "FaceTime, WhatsApp, Google Meet and Zoom offer video calls." },
      { q: "When a family member calls you on video, you tap:", options: ["The red button", "The green button or Accept", "The camera roll", "Settings"], answer: 1, why: "Green or Accept answers the call; red ends it." },
      { q: "A button with a line through it is:", options: ["On", "Recording", "Broken", "Off"], answer: 3, why: "A line through it means it is turned off." },
      { q: "To end a video call you usually tap:", options: ["The red button", "The green button", "The volume button", "The microphone"], answer: 0, why: "The red button ends the call." },
      { q: "Where should you hold the device on a video call?", options: ["Near the floor", "Behind your head", "At eye level", "In your pocket"], answer: 2, why: "Eye level lets your family see your face." },
      { q: "The Share button is used to:", options: ["Delete a photo", "Turn off the phone", "Take a photo", "Send a photo to someone"], answer: 3, why: "Share sends the photo through an app you choose." },
      { q: "A caption is:", options: ["A phone number", "A type of camera", "A short line of words with a photo", "A password"], answer: 2, why: "A caption describes the photo." },
      { q: "A message from a new number says it is your grandchild and needs money fast. The first thing to do is:", options: ["Send money", "Stop and call your grandchild on the number you already have", "Share your bank details", "Keep it secret"], answer: 1, why: "Checking on a known number stops this scam." },
      { q: "Scammers can use AI to:", options: ["Copy a family member's voice", "Fix your phone", "Mail you a letter from the bank", "Visit your home"], answer: 0, why: "AI voice copying is used in family emergency scams." },
      { q: "What can a family code word help with?", options: ["Proving who is really calling in an emergency", "Unlocking your phone", "Making video calls clearer", "Paying bills"], answer: 0, why: "Only your real family knows the code word." },
      { q: "Where can you report a scam in the United States?", options: ["A pop-up ad", "ReportFraud.ftc.gov", "The caller's number", "A social media comment"], answer: 1, why: "The Federal Trade Commission takes scam reports at ReportFraud.ftc.gov." }
    ]
  }
};
