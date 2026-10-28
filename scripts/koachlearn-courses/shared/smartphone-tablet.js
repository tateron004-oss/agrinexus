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
  chapters: [
    {
      name: "Chapter 1: Getting comfortable with your device",
      lessons: [
        {
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
          youCanNow: "unlock your device, open an app with a tap, scroll with a swipe and get back to the home screen."
        },
        {
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
          youCanNow: "make text bigger and set the brightness and volume so your device is comfortable to use."
        },
        {
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
          youCanNow: "save a contact, call someone by name and send a text message."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting comfortable with your device",
        questions: [
          { q: "Which finger move makes a photo bigger?", options: ["Tap once", "Pinch two fingers apart", "Press the volume button", "Swipe down"], answer: 1, why: "Spreading two fingers apart zooms in." },
          { q: "How do you usually go back to the home screen?", options: ["Turn the phone off", "Shake the phone", "Swipe up from the bottom or press the home button", "Open the camera"], answer: 2, why: "Swiping up from the bottom or pressing home returns you to the home screen." },
          { q: "The text on your phone is too small. Where do you fix it?", options: ["Settings, under Display or Accessibility", "The Camera app", "The Phone app", "A text message"], answer: 0, why: "Text size is in Settings under Display or Accessibility." },
          { q: "Why save someone as a contact?", options: ["It makes the phone faster", "It charges the battery", "It hides their number", "So you can call or text by tapping their name"], answer: 3, why: "A contact lets you reach someone by name." },
          { q: "Someone calls and asks you to read them a code that was just texted to you. What do you do?", options: ["Read it to them", "Text it to them", "Do not share it and hang up", "Post it online"], answer: 2, why: "That code protects your account; real companies do not ask for it." }
        ]
      }
    },
    {
      name: "Chapter 2: Photos, apps and keeping your device safe",
      lessons: [
        {
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
          youCanNow: "take a clear photo and share it with someone by text."
        },
        {
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
          youCanNow: "find, check and install an app from the official store, and decide which permissions to allow."
        },
        {
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
          youCanNow: "keep your device locked, up to date and findable if it is lost."
        }
      ],
      check: {
        title: "Knowledge Check 2: Photos, apps and keeping your device safe",
        questions: [
          { q: "Where are photos you take saved?", options: ["In the Phone app", "In Photos or Gallery", "In Settings", "In the app store"], answer: 1, why: "The Photos or Gallery app holds your pictures." },
          { q: "Where is the safe place to get apps on an iPhone?", options: ["A link in a text from a stranger", "Any website", "A pop-up ad", "The App Store"], answer: 3, why: "Install apps only from the official store." },
          { q: "A flashlight app asks to see your contacts. What is the best choice?", options: ["Say no; it does not need them", "Say yes to everything", "Give it your password", "Uninstall your contacts"], answer: 0, why: "Allow only permissions an app really needs." },
          { q: "Which screen lock is the strongest?", options: ["No lock", "123456", "Your birthday", "A six-number PIN that is not easy to guess"], answer: 3, why: "A PIN that is not obvious is harder to guess." },
          { q: "Why install software updates?", options: ["They delete your photos", "They fix security problems", "They cost money", "They turn off the phone forever"], answer: 1, why: "Updates fix problems that criminals could use." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Using a Smartphone and Tablet",
    questions: [
      { q: "Which company makes the iPhone?", options: ["Samsung", "Google", "Apple", "Motorola"], answer: 2, why: "Apple makes the iPhone and iPad." },
      { q: "What does a tap do?", options: ["Opens something", "Turns the phone off", "Deletes an app", "Makes a call by itself"], answer: 0, why: "A quick tap opens an app or chooses something." },
      { q: "To scroll down a page you:", options: ["Pinch", "Press the power button", "Swipe up or down", "Shake the device"], answer: 2, why: "Swiping moves the page." },
      { q: "The small pictures on the home screen are called:", options: ["Contacts", "Icons", "Texts", "Updates"], answer: 1, why: "Icons are the pictures you tap to open apps." },
      { q: "Which app has a gear icon and lets you change text size?", options: ["Camera", "Messages", "Settings", "Photos"], answer: 2, why: "Settings is where you change how the device works." },
      { q: "You cannot find a setting. What is quickest?", options: ["Buy a new phone", "Use the search box at the top of Settings", "Turn it off and on", "Open the camera"], answer: 1, why: "Settings search finds things by name." },
      { q: "Where can you quickly change brightness on most devices?", options: ["Swipe down from the top of the screen", "The Phone app", "The app store", "Your contacts"], answer: 0, why: "Quick controls at the top include brightness." },
      { q: "To call someone by tapping their name, first:", options: ["Install a new app", "Save them as a contact", "Take their photo", "Update the phone"], answer: 1, why: "A saved contact links a name to a number." },
      { q: "Which app sends text messages?", options: ["Camera", "Settings", "Weather", "Messages"], answer: 3, why: "Messages sends and receives texts." },
      { q: "An unknown number calls. A safe choice is:", options: ["Let it go to voicemail", "Give them a code from your texts", "Tell them your PIN", "Send them your bank card photo"], answer: 0, why: "A real caller will leave a voicemail." },
      { q: "To make a photo sharp, you:", options: ["Shake the phone", "Tap the subject on the screen before taking it", "Turn off the screen", "Pinch together"], answer: 1, why: "Tapping the subject tells the camera where to focus." },
      { q: "To send a photo, open it and tap:", options: ["Delete", "Volume", "Settings", "Share"], answer: 3, why: "Share sends the photo to a person or app." },
      { q: "Which photo should you never send to a stranger?", options: ["A sunset", "A flower", "Your ID or bank card", "Your lunch"], answer: 2, why: "IDs and cards can be used to steal from you." },
      { q: "The official app store on Android is:", options: ["A text link", "A pop-up ad", "Any website", "The Google Play Store"], answer: 3, why: "Google Play is the official Android store." },
      { q: "Before installing an app, check:", options: ["Nothing", "Only the color of the icon", "The developer, rating and reviews", "Your bank balance"], answer: 2, why: "Fake apps copy names, so check who made it." },
      { q: "A permission is:", options: ["A kind of photo", "Your OK for an app to use things like the camera or location", "A phone bill", "A type of text"], answer: 1, why: "Apps ask permission to use parts of your device." },
      { q: "A screen lock helps because:", options: ["It makes calls cheaper", "It takes photos", "It makes the text bigger", "It stops others using your phone if it is lost"], answer: 3, why: "A lock keeps your information private." },
      { q: "On an iPhone, Software Update is under:", options: ["The Camera", "Photos", "Messages", "Settings, then General"], answer: 3, why: "iPhone updates are in Settings, General, Software Update." },
      { q: "When installing a big update, it is best to:", options: ["Turn off Wi-Fi", "Have a low battery", "Use Wi-Fi and plug in", "Do it during a call"], answer: 2, why: "Wi-Fi and power keep the update from stopping." },
      { q: "Find My Device (Android) and Find My (Apple) help you:", options: ["Find cheap phone plans", "Find new friends", "Find free apps", "Find a lost device on a map"], answer: 3, why: "They show, lock or ring a lost device." }
    ]
  }
};
