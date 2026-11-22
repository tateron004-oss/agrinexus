"use strict";

// Koach Learn course (shared): "Using a Smartphone and Tablet". Goes in Seniors and Technology and Re-Entry, so the examples are everyday ones: calling family, texting, photos, appointments, maps.
// Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "smartphone-tablet",
  category: "Seniors and Technology",
  name: "Using a Smartphone and Tablet",
  skills: "Using the touch screen, Calls and text messages, Taking and sending photos, Installing apps safely, Locking and updating your device",
  outcome: "use a smartphone or tablet on your own: unlock it, make a call, send a text and a photo, install an app from the official store, and keep the device locked and up to date.",
  about: [
    "A smartphone or tablet lets you call and text family, see photos of the grandchildren, check the weather, find a bus, and talk to your doctor. This course is for anyone who is new to these devices or wants to feel more sure of themselves.",
    "You will learn the touch screen, calls and texts, the camera, how to install an app safely, and how to keep your device locked and up to date. The steps work on both Android phones and iPhones and iPads; where they differ, we say so.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task with your device in your hand. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "With your own phone or tablet: unlock it, call or video-call someone you know, send them a text with a photo you just took, install one free useful app from the official app store, and check that your screen lock is on and your software is up to date.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults with a new or little-used smartphone or tablet: seniors, people who were given a phone by family or a program, people returning to the community, newcomers and caregivers.",
    startingPoint: "Can turn the device on and may answer calls. Many are unsure how to move around the touch screen, change text size, save contacts, send a photo, install an app safely or keep the device locked and updated.",
    gap: "Phones and tablets are now how people reach family, doctors, pharmacies, banks and services. People who cannot use them on their own miss calls and messages, struggle to read the screen, install fake apps, or lose private information when a phone is lost.",
    constraints: [
      "Reading level: plain words and short sentences; finger moves and words like icon and permission are explained",
      "Devices: the learner's own Android phone, iPhone or tablet; steps are given for both",
      "Time: about 5 minutes a lesson, about 60 minutes in total",
      "Cost: free apps only, from the official app store",
      "Privacy: learners never share a text-message code with a caller and never send photos of ID or bank cards to strangers"
    ],
    prerequisites: "None. A charged phone or tablet is needed."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using your own phone or tablet", action: "unlock it, use tap, swipe, press and hold and pinch, open an app and get back to the home screen", standard: "without help" },
    { id: "O2", condition: "In the Settings app", action: "change the text size, brightness and volume so the device is easy to see and hear", standard: "with each one set to a comfortable level" },
    { id: "O3", condition: "Given a person you want to reach", action: "save them as a contact, call them and send them a text, and handle unknown callers safely", standard: "with the call and text sent and no codes ever given to a caller" },
    { id: "O4", condition: "Using the Camera and Photos or Gallery apps", action: "take a sharp photo and share it in a text with someone you know", standard: "with the photo in focus and nothing private in it" },
    { id: "O5", condition: "In the official app store", action: "find and install a free app after checking the developer, rating and reviews, and choose which permissions to allow", standard: "allowing only the permissions the app really needs" },
    { id: "O6", condition: "On your own device", action: "turn on a strong screen lock, check for a software update and turn on Find My Device or Find My", standard: "with a lock that is not easy to guess and the device up to date" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting comfortable with your device",
      lessons: [
        {
          objectives: ["O1"],
          title: "Touch screen basics: tap, swipe and the home screen",
          minutes: 5,
          goal: "Unlock your device, open an app and get back to the home screen.",
          text: [
            "A smartphone is a phone that is also a small computer. A tablet is the same idea with a bigger screen. Most run Android (made by Google, used by Samsung, Motorola and others) or iOS and iPadOS (made by Apple for iPhone and iPad).",
            "You control it with your finger. Tap: touch and let go, to open something. Swipe: slide your finger across, to move between pages or scroll. Press and hold: keep your finger down, to see more choices. Pinch: two fingers apart to make things bigger, together to make them smaller.",
            "The home screen shows your apps as small pictures called icons. To go back home, swipe up from the bottom edge, or press the home button if your device has one."
          ],
          steps: ["Press the side or top button to wake the screen.", "Swipe up and enter your code, or use your fingerprint or face.", "Tap an app icon to open it.", "Swipe up from the bottom (or press the home button) to go back home.", "Pinch two fingers apart on a photo to zoom in."],
          words: [["Smartphone", "a phone that is also a small computer with a touch screen."], ["Icon", "a small picture you tap to open an app."], ["Home screen", "the main screen that shows your apps."], ["Swipe", "slide your finger across the screen."]],
          slides: [
            { title: "Two main kinds", bullets: ["Android: Samsung, Motorola, Google Pixel and others", "iPhone and iPad from Apple"] },
            { title: "Finger moves", bullets: ["Tap: open something", "Swipe: scroll or change pages", "Press and hold: more choices", "Pinch: zoom in and out"] },
            { title: "Getting home", bullets: ["Swipe up from the bottom edge", "Or press the home button if you have one"] }
          ],
          tryIt: "Wake and unlock your device. Open the Camera or Weather app, swipe around, then go back to the home screen. Do it three times until it feels easy.",
          youCanNow: "unlock your device, open an app with a tap, scroll with a swipe and get back to the home screen.",
          quickCheck: [
            { objective: "O1", q: "What does press and hold do?", options: ["Turns the phone off", "Shows more choices", "Takes a photo", "Makes a call"], answer: 1, why: "Keeping your finger down shows more choices." },
            { objective: "O1", q: "You are in an app and want to get back to your home screen. What would you do?", options: ["Turn the phone off and on", "Pinch two fingers together", "Take out the battery", "Swipe up from the bottom edge, or press the home button"], answer: 3, why: "Swiping up from the bottom, or the home button, takes you back to the home screen." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Making it easier to see and hear",
          minutes: 4,
          goal: "Make the text bigger and the volume and brightness right for you.",
          text: [
            "You can change your device so it is easier to use. All of these are in the Settings app, which usually has a gear icon.",
            "Bigger text: open Settings, then look for Display or Accessibility, and find text size or font size. Brightness: find it in Display, or swipe down from the top of the screen for quick controls. Volume: use the buttons on the side.",
            "If you cannot find something, use the search box at the top of Settings and type a word like \"text size\". Both Android and Apple devices also have accessibility features like a magnifier and reading the screen out loud."
          ],
          steps: ["Open the Settings app (gear icon).", "Tap the search box at the top and type \"text size\".", "Move the slider until the text is easy to read.", "Swipe down from the top to change brightness.", "Use the side buttons for volume."],
          words: [["Settings", "the app where you change how your device works."], ["Accessibility", "features that make a device easier to see, hear or touch."]],
          slides: [
            { title: "Settings app", bullets: ["Usually a gear icon", "Where you change how your device works"] },
            { title: "Easier to see and hear", bullets: ["Text size in Display or Accessibility", "Brightness in Display or quick controls", "Volume: side buttons"] },
            { title: "Can't find it?", bullets: ["Use the search box at the top of Settings", "Type a word like \"text size\""] }
          ],
          tryIt: "Open Settings, search for \"text size\" and make the text one step bigger. Then swipe down from the top and change the brightness.",
          youCanNow: "make text bigger and set the brightness and volume so your device is comfortable to use.",
          quickCheck: [
            { objective: "O2", q: "Which icon does the Settings app usually have?", options: ["A camera", "A speech bubble", "A gear", "A paper clip"], answer: 2, why: "Settings usually has a gear icon." },
            { objective: "O2", q: "The screen is too dark to read outside. What would you do?", options: ["Swipe down from the top and turn up the brightness", "Buy a new phone", "Press the volume buttons", "Delete an app"], answer: 0, why: "Quick controls for brightness are found by swiping down from the top of the screen." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Calls, contacts and text messages",
          minutes: 5,
          goal: "Save a contact, make a call and send a text message.",
          text: [
            "The Phone app makes calls. The Contacts app (on some phones it is part of the Phone app) saves names with numbers, so you can call by tapping a name instead of typing a number.",
            "The Messages app sends text messages. Tap the new message button, choose a contact, type in the box at the bottom, and tap the send arrow.",
            "If an unknown number calls, you can let it go to voicemail. A real caller will leave a message. Never give a code from a text message to someone who calls you."
          ],
          steps: ["Open Contacts (or Phone, then Contacts).", "Tap the + button to add a person: name and number. Save.", "Tap the name, then the phone icon to call.", "Open Messages and tap the new message button.", "Choose the contact, type your message and tap send."],
          words: [["Contact", "a saved name and phone number."], ["Text message", "a short written message sent from one phone to another."], ["Voicemail", "a recorded message left when you do not answer."]],
          slides: [
            { title: "Three apps", bullets: ["Phone: make calls", "Contacts: save names and numbers", "Messages: send texts"] },
            { title: "Add a contact", bullets: ["Tap +", "Enter name and number", "Tap Save"] },
            { title: "Send a text", bullets: ["New message button", "Pick the contact", "Type and tap the send arrow"] },
            { title: "Unknown callers", bullets: ["Let them go to voicemail", "Never give a code from a text to a caller"] }
          ],
          tryIt: "Save one family member or friend as a contact. Call them by tapping their name, then send them a short text: \"I am practicing with my phone!\"",
          youCanNow: "save a contact, call someone by name and send a text message.",
          quickCheck: [
            { objective: "O3", q: "Which app sends text messages?", options: ["Messages", "Camera", "Settings", "Photos"], answer: 0, why: "The Messages app sends text messages." },
            { objective: "O3", q: "A number you do not know calls you. What would you do?", options: ["Answer and give your bank details", "Call back right away and read out any codes", "Let it go to voicemail; a real caller will leave a message", "Turn off your phone for a week"], answer: 2, why: "Letting unknown calls go to voicemail is safe; real callers leave a message." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting comfortable with your device",
        questions: [
          { objective: "O1", q: "Which finger move makes a photo bigger?", options: ["Tap once", "Pinch two fingers apart", "Press the volume button", "Swipe down"], answer: 1, why: "Spreading two fingers apart zooms in." },
          { objective: "O1", q: "How do you usually go back to the home screen?", options: ["Turn the phone off", "Shake the phone", "Swipe up from the bottom or press the home button", "Open the camera"], answer: 2, why: "Swiping up from the bottom or pressing home returns you to the home screen." },
          { objective: "O2", q: "The text on your phone is too small. Where do you fix it?", options: ["Settings, under Display or Accessibility", "The Camera app", "The Phone app", "A text message"], answer: 0, why: "Text size is in Settings under Display or Accessibility." },
          { objective: "O3", q: "Why save someone as a contact?", options: ["It makes the phone faster", "It charges the battery", "It hides their number", "So you can call or text by tapping their name"], answer: 3, why: "A contact lets you reach someone by name." },
          { objective: "O3", q: "Someone calls and asks you to read them a code that was just texted to you. What do you do?", options: ["Read it to them", "Text it to them", "Do not share it and hang up", "Post it online"], answer: 2, why: "That code protects your account; real companies do not ask for it." }
        ]
      }
    },
    {
      name: "Chapter 2: Photos, apps and keeping your device safe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Taking and sending photos",
          minutes: 5,
          goal: "Take a photo and send it to someone in a text.",
          text: [
            "Open the Camera app, point it at what you want, and tap the big round button. Hold the device still. Tap the screen on your subject to make it sharp.",
            "Your photos are saved in the Photos or Gallery app. To send one, open it, tap the Share button (often a square with an arrow or three dots joined by lines), and choose Messages or email, then the person.",
            "Think before you share. Do not send photos of your ID, bank cards, tickets with barcodes, or anything private to people you do not know."
          ],
          steps: ["Open the Camera app.", "Point, hold still, and tap the subject to focus.", "Tap the big round button.", "Open Photos or Gallery and tap the photo.", "Tap Share, choose Messages, pick the person and send."],
          words: [["Gallery or Photos", "the app where your pictures are saved."], ["Share button", "the button that sends a photo or file to someone or another app."]],
          slides: [
            { title: "Take a photo", bullets: ["Open the Camera app", "Tap the subject to focus", "Tap the big round button"] },
            { title: "Send a photo", bullets: ["Open Photos or Gallery", "Tap Share", "Choose Messages and the person"] },
            { title: "Think before you share", bullets: ["No photos of IDs or bank cards", "No private papers to strangers"] }
          ],
          tryIt: "Take a photo of something nice near you, a plant, a meal or a view. Send it in a text to the contact you saved in Lesson 3.",
          youCanNow: "take a clear photo and share it with someone by text.",
          quickCheck: [
            { objective: "O4", q: "What does the Share button let you do with a photo?", options: ["Delete it", "Make it bigger", "Take it again", "Send it by text or email"], answer: 3, why: "Share lets you choose Messages or email and a person to send the photo to." },
            { objective: "O4", q: "Your photos keep coming out blurry. What would you do?", options: ["Shake the phone while you take it", "Hold still and tap the subject on the screen before taking it", "Turn the brightness down", "Take it from very far away"], answer: 1, why: "Holding still and tapping the subject makes the photo sharp." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Installing apps safely",
          minutes: 5,
          goal: "Find and install a free app from the official app store.",
          text: [
            "Apps add new things your device can do: maps, the weather, video calls, your bank, your pharmacy. Get them only from the official store: the Google Play Store on Android, or the App Store on iPhone and iPad.",
            "Search for the app by name. Before you install, check the name of the company that made it (the developer), the number of reviews, and the rating. Fake apps copy real names, so make sure it is from the real company.",
            "When an app asks for permission to use your location, camera, contacts or microphone, ask yourself if it really needs it. A flashlight app does not need your contacts. You can say no, and change it later in Settings."
          ],
          steps: ["Open the Play Store (Android) or App Store (Apple).", "Tap Search and type the app's name.", "Check the developer name, rating and number of reviews.", "Tap Install or Get.", "When asked for permissions, allow only what makes sense."],
          words: [["App", "a program on your phone or tablet that does one kind of job."], ["Developer", "the company or person who made the app."], ["Permission", "your OK for an app to use something like your camera or location."]],
          slides: [
            { title: "Official stores only", bullets: ["Android: Google Play Store", "iPhone and iPad: App Store"] },
            { title: "Before you install", bullets: ["Check the developer is the real company", "Look at the rating and number of reviews", "Fake apps copy real names"] },
            { title: "Permissions", bullets: ["Does the app really need it?", "A flashlight does not need your contacts", "You can change it later in Settings"] }
          ],
          tryIt: "Open your official app store and install one free app that is useful to you, for example a weather app, your pharmacy's app or a bus app. Check the developer name first.",
          youCanNow: "find, check and install an app from the official store, and decide which permissions to allow.",
          quickCheck: [
            { objective: "O5", q: "Why check the developer's name before installing an app?", options: ["To find the app's price in a store", "To change the phone's text size", "Fake apps copy real names, so make sure it is from the real company", "To see who called you"], answer: 2, why: "Fake apps copy real app names, so the developer name shows if it is genuine." },
            { objective: "O5", q: "A game app asks for permission to use your microphone and contacts. What would you do?", options: ["Say no unless it really needs them; you can change it later in Settings", "Always say yes to everything", "Delete your contacts", "Give it your password"], answer: 0, why: "Only allow permissions an app really needs; you can change them later." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Keeping your device locked, updated and charged",
          minutes: 5,
          goal: "Turn on a screen lock and check for a software update.",
          text: [
            "A screen lock stops other people using your phone if it is lost or stolen. Use a PIN code of at least six numbers, or your fingerprint or face. Do not use 123456 or your birthday.",
            "Updates fix security problems. Find them in Settings: on Android look for Software update or System update; on iPhone and iPad go to General, then Software Update. Plug in and use Wi-Fi when you update.",
            "If you lose your phone, Android's Find My Device and Apple's Find My can show it on a map or lock it. Turn them on now, while you still have it."
          ],
          steps: ["Open Settings and search for \"screen lock\" or \"passcode\".", "Set a PIN of at least six numbers, or fingerprint or face.", "Search Settings for \"software update\" and install any update.", "Search Settings for \"Find My\" and make sure it is turned on.", "Charge your device each night."],
          words: [["PIN", "a number code that unlocks your device."], ["Software update", "a free fix and improvement from the device maker."], ["Find My Device / Find My", "Android and Apple tools that help you find a lost device."]],
          slides: [
            { title: "Lock your screen", bullets: ["PIN of six numbers or more", "Or fingerprint or face", "Not 123456 or your birthday"] },
            { title: "Update your device", bullets: ["Updates fix security problems", "Settings, then Software update", "Plug in and use Wi-Fi"] },
            { title: "If it is lost", bullets: ["Android: Find My Device", "Apple: Find My", "Turn it on now"] }
          ],
          tryIt: "Final task practice: check your screen lock is on, search Settings for \"software update\" and see if one is waiting, and turn on Find My Device or Find My. Then do the final task: call, text a fresh photo, and install one useful app.",
          youCanNow: "keep your device locked, up to date and findable if it is lost.",
          quickCheck: [
            { objective: "O6", q: "Which of these is a weak screen lock?", options: ["Your fingerprint", "Your face", "A six-number PIN that is hard to guess", "123456"], answer: 3, why: "123456 or your birthday are easy to guess." },
            { objective: "O6", q: "You want to be able to find your phone if you lose it. What would you do now?", options: ["Wait until it is lost, then look for a setting", "Turn on Find My Device (Android) or Find My (Apple)", "Write your PIN on the back of the phone", "Turn off the screen lock"], answer: 1, why: "These tools must be turned on while you still have the phone." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Photos, apps and keeping your device safe",
        questions: [
          { objective: "O4", q: "Where are photos you take saved?", options: ["In the Phone app", "In Photos or Gallery", "In Settings", "In the app store"], answer: 1, why: "The Photos or Gallery app holds your pictures." },
          { objective: "O5", q: "Where is the safe place to get apps on an iPhone?", options: ["A link in a text from a stranger", "Any website", "A pop-up ad", "The App Store"], answer: 3, why: "Install apps only from the official store." },
          { objective: "O5", q: "A flashlight app asks to see your contacts. What is the best choice?", options: ["Say no; it does not need them", "Say yes to everything", "Give it your password", "Uninstall your contacts"], answer: 0, why: "Allow only permissions an app really needs." },
          { objective: "O6", q: "Which screen lock is the strongest?", options: ["No lock", "123456", "Your birthday", "A six-number PIN that is not easy to guess"], answer: 3, why: "A PIN that is not obvious is harder to guess." },
          { objective: "O6", q: "Why install software updates?", options: ["They delete your photos", "They fix security problems", "They cost money", "They turn off the phone forever"], answer: 1, why: "Updates fix problems that criminals could use." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Using a Smartphone and Tablet",
    questions: [
      { objective: "O1", q: "Which company makes the iPhone?", options: ["Samsung", "Google", "Apple", "Motorola"], answer: 2, why: "Apple makes the iPhone and iPad." },
      { objective: "O1", q: "What does a tap do?", options: ["Opens something", "Turns the phone off", "Deletes an app", "Makes a call by itself"], answer: 0, why: "A quick tap opens an app or chooses something." },
      { objective: "O1", q: "To scroll down a page you:", options: ["Pinch", "Press the power button", "Swipe up or down", "Shake the device"], answer: 2, why: "Swiping moves the page." },
      { objective: "O1", q: "The small pictures on the home screen are called:", options: ["Contacts", "Icons", "Texts", "Updates"], answer: 1, why: "Icons are the pictures you tap to open apps." },
      { objective: "O2", q: "Which app has a gear icon and lets you change text size?", options: ["Camera", "Messages", "Settings", "Photos"], answer: 2, why: "Settings is where you change how the device works." },
      { objective: "O2", q: "You cannot find a setting. What is quickest?", options: ["Buy a new phone", "Use the search box at the top of Settings", "Turn it off and on", "Open the camera"], answer: 1, why: "Settings search finds things by name." },
      { objective: "O2", q: "Where can you quickly change brightness on most devices?", options: ["Swipe down from the top of the screen", "The Phone app", "The app store", "Your contacts"], answer: 0, why: "Quick controls at the top include brightness." },
      { objective: "O3", q: "To call someone by tapping their name, first:", options: ["Install a new app", "Save them as a contact", "Take their photo", "Update the phone"], answer: 1, why: "A saved contact links a name to a number." },
      { objective: "O3", q: "Which app sends text messages?", options: ["Camera", "Settings", "Weather", "Messages"], answer: 3, why: "Messages sends and receives texts." },
      { objective: "O3", q: "An unknown number calls. A safe choice is:", options: ["Let it go to voicemail", "Give them a code from your texts", "Tell them your PIN", "Send them your bank card photo"], answer: 0, why: "A real caller will leave a voicemail." },
      { objective: "O4", q: "To make a photo sharp, you:", options: ["Shake the phone", "Tap the subject on the screen before taking it", "Turn off the screen", "Pinch together"], answer: 1, why: "Tapping the subject tells the camera where to focus." },
      { objective: "O4", q: "To send a photo, open it and tap:", options: ["Delete", "Volume", "Settings", "Share"], answer: 3, why: "Share sends the photo to a person or app." },
      { objective: "O4", q: "Which photo should you never send to a stranger?", options: ["A sunset", "A flower", "Your ID or bank card", "Your lunch"], answer: 2, why: "IDs and cards can be used to steal from you." },
      { objective: "O5", q: "The official app store on Android is:", options: ["A text link", "A pop-up ad", "Any website", "The Google Play Store"], answer: 3, why: "Google Play is the official Android store." },
      { objective: "O5", q: "Before installing an app, check:", options: ["Nothing", "Only the color of the icon", "The developer, rating and reviews", "Your bank balance"], answer: 2, why: "Fake apps copy names, so check who made it." },
      { objective: "O5", q: "A permission is:", options: ["A kind of photo", "Your OK for an app to use things like the camera or location", "A phone bill", "A type of text"], answer: 1, why: "Apps ask permission to use parts of your device." },
      { objective: "O6", q: "A screen lock helps because:", options: ["It makes calls cheaper", "It takes photos", "It makes the text bigger", "It stops others using your phone if it is lost"], answer: 3, why: "A lock keeps your information private." },
      { objective: "O6", q: "On an iPhone, Software Update is under:", options: ["The Camera", "Photos", "Messages", "Settings, then General"], answer: 3, why: "iPhone updates are in Settings, General, Software Update." },
      { objective: "O6", q: "When installing a big update, it is best to:", options: ["Turn off Wi-Fi", "Have a low battery", "Use Wi-Fi and plug in", "Do it during a call"], answer: 2, why: "Wi-Fi and power keep the update from stopping." },
      { objective: "O6", q: "Find My Device (Android) and Find My (Apple) help you:", options: ["Find cheap phone plans", "Find new friends", "Find free apps", "Find a lost device on a map"], answer: 3, why: "They show, lock or ring a lost device." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      4,
      6,
      7,
      9,
      11,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Call",
        objective: "O3",
        notYet: "No call or video call was made, or the learner needed help to find the person.",
        meets: "Calls or video-calls a saved contact without help.",
        exceeds: "Also saves a new contact with a name and number first."
      },
      {
        name: "Text with a photo",
        objective: "O4",
        notYet: "The text or photo was not sent, or the photo shows private information.",
        meets: "Takes a sharp photo and sends it in a text to someone they know.",
        exceeds: "Uses the Share button from Photos or Gallery and adds a short message."
      },
      {
        name: "Installing an app",
        objective: "O5",
        notYet: "No app installed, or it came from outside the official store.",
        meets: "One free app installed from the official store after checking the developer and reviews.",
        exceeds: "Also says no to a permission the app does not need."
      },
      {
        name: "Lock and updates",
        objective: "O6",
        notYet: "No screen lock, or an easy lock such as 123456.",
        meets: "A strong screen lock is on and software is up to date.",
        exceeds: "Find My Device or Find My is also turned on."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the final task",
      "Learners who report using their phone or tablet on their own for calls, texts and photos 30 days later (follow-up survey)",
      "Learners who report installing a useful app, such as a pharmacy, bank or video call app, safely from the official store",
      "Learners who go on to a next course, such as Internet Basics or Email and Online Communication"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "The learner's own charged smartphone or tablet (Android, iPhone or iPad)",
      "Wi-Fi for installing apps and updates",
      "A friend or family member's number to call and text, or a classmate's",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Group learners by device type (Android or Apple) so the steps on screen match what they see.",
      "Let learners do every tap themselves; if you must show something, use your own device.",
      "Some app installs ask for an account password; let the learner type it privately, and never ask for or write down their PIN or password.",
      "Have learners call and text each other in class so nobody needs to share a personal number they would rather keep private.",
      "Bring a charger and plan updates for the end of a session, since they can take a long time."
    ]
  }
};
