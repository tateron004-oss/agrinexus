"use strict";

// Koach Learn course: Seniors and Technology -> "AI for Photography" (bonus). Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.
// Editing menus differ by phone and app, so lessons describe the action ("tap Edit", "look for a magic or AI eraser tool") rather than exact menu names.

module.exports = {
  id: "seniors-ai-photography",
  category: "Seniors and Technology",
  name: "AI for Photography",
  skills: "Taking clear phone photos, Using automatic enhance and editing, Removing small distractions with AI tools, Finding photos by searching, Making an album to share with family",
  outcome: "take a clear photo with your phone, improve it with automatic and AI editing tools, find old photos by searching, and share a small album with your family.",
  about: [
    "This course is for older adults who love taking pictures of grandchildren, gardens, pets, trips and family gatherings, and want them to look their best without learning a complicated camera.",
    "Your phone's camera and photo app already include AI features: automatic enhancement, tools that remove small distractions, and search that can find \"dog\" or \"beach\" among thousands of photos. You will learn to use them, and also when to be honest about edited pictures.",
    "Each lesson takes about five minutes. Have your phone or tablet with you, and practice on your own photos. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Take three photos of something you love (a person with their permission, a pet, a plant or a meal). Improve the best one with automatic enhance and one other edit, find two older photos by searching your photo app, and share all three in a small album or message with a family member.",
  chapters: [
    {
      name: "Chapter 1: Taking and improving photos",
      lessons: [
        {
          title: "Taking a clear photo with your phone",
          minutes: 5,
          goal: "Take a sharp, well-lit photo with your phone.",
          text: [
            "Good photos start with a few simple habits. Wipe the camera lens gently with a soft cloth; fingerprints make photos blurry. Hold the phone with both hands and keep your elbows close to your body for steady shots.",
            "Light matters most. Face your subject toward a window or daylight, with the light behind you, not behind them. Tap the screen on the person's face or the flower you want to be sharp; the camera focuses there.",
            "Get close, and fill the picture with what matters. Take a few photos instead of one; you can keep the best and delete the rest. Always ask people, especially grandchildren's parents, before you share their pictures."
          ],
          steps: ["Wipe the lens with a soft cloth.", "Hold the phone with both hands.", "Put the light behind you, facing your subject.", "Tap the screen where you want it sharp.", "Take a few shots and keep the best."],
          words: [["Lens", "the small round glass on the back of the phone that the camera sees through."], ["Focus", "making part of the photo sharp and clear."]],
          slides: [
            { title: "Before you shoot", bullets: ["Wipe the lens gently", "Hold with both hands, elbows in"] },
            { title: "Light and focus", bullets: ["Light behind you, on your subject", "Tap the screen to focus"] },
            { title: "Get the best shot", bullets: ["Get close", "Take a few, keep the best", "Ask before sharing photos of people"] }
          ],
          tryIt: "Wipe your lens, then take three photos of a flower, pet or object near a window. Tap to focus on each one. Look at them and pick your favorite.",
          youCanNow: "take a clear, well-lit photo with your phone."
        },
        {
          title: "Automatic enhance and simple edits",
          minutes: 5,
          goal: "Improve a photo with one-tap enhance, cropping and straightening.",
          text: [
            "Your photo app has an Edit button. Open a photo and tap Edit. Most apps have a one-tap automatic button, often shown as a magic wand, that uses AI to fix brightness, color and contrast in a second.",
            "Next, crop to cut away empty space and straighten a tilted horizon. Look for the crop tool (often a square with arrows), drag the corners in, and rotate a little if needed.",
            "Edits usually do not destroy your original. Most apps let you go back with Revert or Undo. Tap Done or Save when you are happy."
          ],
          steps: ["Open the photo and tap Edit.", "Tap the automatic or magic wand button.", "Use the crop tool to cut empty space.", "Straighten if the picture tilts.", "Tap Done or Save; use Revert if you change your mind."],
          words: [["Enhance", "automatically improving brightness and color in a photo."], ["Crop", "cutting away the edges of a photo."]],
          slides: [
            { title: "One tap to better", bullets: ["Open the photo, tap Edit", "Tap the automatic or magic wand button"] },
            { title: "Crop and straighten", bullets: ["Cut away empty space", "Straighten tilted horizons"] },
            { title: "No harm done", bullets: ["Most apps keep your original", "Use Revert or Undo", "Tap Done or Save"] }
          ],
          tryIt: "Open your favorite photo from Lesson 1. Use automatic enhance, crop it a little, and save it. Then compare it to the original.",
          youCanNow: "improve a photo with automatic enhance, cropping and straightening."
        },
        {
          title: "AI tools that remove distractions",
          minutes: 5,
          goal: "Remove a small distraction from a photo with an AI eraser tool, and know when edits should be shared honestly.",
          text: [
            "Many newer phones and photo apps include an AI eraser: you circle or brush over something small you do not want, like a trash can, a stranger in the background or a power line, and the AI fills in the space.",
            "Look in the Edit screen for a tool called something like Magic Eraser, Clean Up or Object Eraser. Names differ by phone, and some phones do not have it. If yours does not, ask an AI assistant: \"How do I remove an object from a photo on my phone?\" and tell it your phone model.",
            "Small clean-ups are fine for family photos. But do not use AI to change what really happened in a photo in a way that could mislead people, and be honest if someone asks whether a photo was edited."
          ],
          steps: ["Open the photo and tap Edit.", "Look for an eraser or clean-up tool.", "Brush or circle the small distraction.", "Check the result and save, or undo.", "Be honest about edited photos."],
          words: [["AI eraser", "a tool that removes an object from a photo and fills in the background."], ["Mislead", "to make someone believe something that is not true."]],
          slides: [
            { title: "Erase small distractions", bullets: ["Trash cans, strangers, power lines", "Brush or circle them", "AI fills in the space"] },
            { title: "Find the tool", bullets: ["Names differ by phone", "Look in Edit for an eraser or clean-up tool", "Ask AI with your phone model"] },
            { title: "Be honest", bullets: ["Clean-ups are fine", "Don't change what really happened", "Say so if a photo was edited"] }
          ],
          tryIt: "Find a photo with a small distraction. Look in Edit for an eraser or clean-up tool and try removing it. If your phone does not have one, ask an AI assistant how to do it on your model.",
          youCanNow: "use an AI eraser tool to clean up a photo, and use it honestly."
        }
      ],
      check: {
        title: "Knowledge Check 1: Taking and improving photos",
        questions: [
          { q: "Your photos look blurry. What simple thing should you try first?", options: ["Shake the phone", "Buy a new phone", "Wipe the lens with a soft cloth", "Turn off the screen"], answer: 2, why: "Fingerprints on the lens cause blurry photos." },
          { q: "Where should the light be for a good portrait?", options: ["On your subject, behind you", "Behind your subject", "Nowhere", "Under the table"], answer: 0, why: "Light on the face shows it clearly." },
          { q: "What does tapping the screen before you shoot do?", options: ["Sends the photo", "Deletes the photo", "Turns on music", "Focuses on that spot"], answer: 3, why: "Tapping tells the camera where to focus." },
          { q: "What does the magic wand or automatic button usually do?", options: ["Deletes the photo", "Fixes brightness and color in one tap", "Shares it publicly", "Prints it"], answer: 1, why: "It is a one-tap AI enhancement." },
          { q: "When is it NOT OK to use an AI eraser?", options: ["To remove a trash can", "To change what really happened in a misleading way", "To remove a power line", "To tidy a family photo"], answer: 1, why: "Edits should not mislead people." }
        ]
      }
    },
    {
      name: "Chapter 2: Finding, organizing and sharing",
      lessons: [
        {
          title: "Finding photos by searching",
          minutes: 5,
          goal: "Find old photos by typing a word in your photo app's search.",
          text: [
            "If you have thousands of photos, scrolling is tiring. Photo apps such as Apple Photos and Google Photos use AI to recognize what is in your pictures, so you can search for \"dog\", \"beach\", \"birthday cake\" or \"snow\".",
            "Open your photo app, tap Search (often a magnifying glass), and type a word. You can also search by place (\"Florida\") or by month and year (\"July 2019\"). Many apps can group photos of the same face so you can name people; this is optional, and you can turn it off in settings.",
            "Use favorites to keep your best photos together: tap the heart on a photo, then find all favorites in one album."
          ],
          steps: ["Open your photo app.", "Tap Search or the magnifying glass.", "Type a thing, place or date.", "Tap the heart on photos you love to make them favorites."],
          words: [["Album", "a group of photos kept together, like a page in a photo book."], ["Favorites", "photos you mark with a heart so you can find them quickly."]],
          slides: [
            { title: "Let AI find your photos", bullets: ["Search \"dog\", \"beach\", \"birthday cake\"", "Or a place or a month and year"] },
            { title: "How to search", bullets: ["Open your photo app", "Tap the magnifying glass", "Type a word"] },
            { title: "Keep your best", bullets: ["Tap the heart for favorites", "Face grouping is optional"] }
          ],
          tryIt: "Search your photo app for two things, such as \"flower\" and a place you visited. Mark one photo from each search as a favorite.",
          youCanNow: "find old photos by searching and keep your best as favorites."
        },
        {
          title: "Making and sharing an album",
          minutes: 6,
          goal: "Create an album and share it with family.",
          text: [
            "An album is a collection of photos on one theme, like \"Summer at the lake\" or \"Emma's first year\". Making one is a lovely way to share memories.",
            "In most photo apps: select several photos by tapping Select and then each photo, tap the Share button or the plus sign, and choose to add them to a new album or a shared album. Give it a name. A shared album lets family members you invite see the photos, and often add their own.",
            "You can also simply send a few photos in a text message or email. Before sharing photos of grandchildren, ask their parents if it is OK and how widely to share."
          ],
          steps: ["Tap Select and choose several photos.", "Tap Share or the plus sign.", "Choose a new album or shared album and name it.", "Invite family members by name, phone number or email.", "Ask parents before sharing photos of children."],
          words: [["Shared album", "an album that people you invite can see and often add photos to."], ["Select", "choosing several items at once."]],
          slides: [
            { title: "An album tells a story", bullets: ["\"Summer at the lake\"", "\"Emma's first year\""] },
            { title: "Make one", bullets: ["Tap Select, choose photos", "Tap Share or +", "New album or shared album, then name it"] },
            { title: "Share kindly", bullets: ["Invite family members", "Or send a few by text or email", "Ask parents before sharing children's photos"] }
          ],
          tryIt: "Make an album of five favorite photos with a clear name. Share it, or send two of the photos, to one family member.",
          youCanNow: "make a photo album and share it with family."
        },
        {
          title: "Bringing old prints into your phone",
          minutes: 5,
          goal: "Turn an old printed photo into a digital copy and improve it.",
          text: [
            "Many families have boxes of old prints. You can make digital copies to share and keep safe, using only your phone.",
            "Lay the photo flat near a window, out of direct sun, and take a picture straight from above so the edges look square. Free scanning apps, such as Google's PhotoScan, are made for this and reduce glare. Then use automatic enhance and crop, as in Lesson 2.",
            "Some apps use AI to colorize or repair old photos. These can be fun, but the colors are the AI's guess, not what really happened. Keep the original scan too, and label colorized copies as such when you share them. You can ask an AI assistant to help write a short caption with the names and year."
          ],
          steps: ["Lay the print flat in soft daylight.", "Hold the phone straight above it.", "Take the photo, or use a scanning app to reduce glare.", "Enhance and crop.", "Keep the original; label any AI-colorized copy."],
          words: [["Scan", "making a digital copy of a paper photo or document."], ["Glare", "a bright shine on a photo from light reflecting off it."], ["Colorize", "adding color to a black-and-white photo."]],
          slides: [
            { title: "Save your old prints", bullets: ["Make digital copies to share and keep safe"] },
            { title: "How to copy", bullets: ["Flat, in soft daylight", "Phone straight above", "A scanning app reduces glare"] },
            { title: "AI colorizing", bullets: ["Colors are a guess", "Keep the original scan", "Label colorized copies"] }
          ],
          tryIt: "Final task: take three new photos of something you love, improve the best with enhance plus one other edit, find two older photos by searching, and share all three in a small album or message with family. If you have an old print, add a scanned copy too.",
          youCanNow: "take, improve, find, organize and share photos, including copies of old family prints."
        }
      ],
      check: {
        title: "Knowledge Check 2: Finding, organizing and sharing",
        questions: [
          { q: "How do you find all your beach photos quickly?", options: ["Ask a stranger", "Scroll for an hour", "Delete other photos", "Search \"beach\" in your photo app"], answer: 3, why: "AI search recognizes what is in photos." },
          { q: "What does tapping the heart on a photo do?", options: ["Marks it as a favorite", "Deletes it", "Posts it publicly", "Prints it"], answer: 0, why: "Favorites are kept together for easy finding." },
          { q: "What is a shared album?", options: ["A paper book", "A deleted album", "An album people you invite can see", "A password list"], answer: 2, why: "Shared albums let family see and add photos." },
          { q: "Before sharing photos of grandchildren, you should:", options: ["Nothing", "Post them everywhere", "Print them for strangers", "Ask their parents"], answer: 3, why: "Parents decide how widely to share their children's photos." },
          { q: "An AI app colorizes an old black-and-white photo. The colors are:", options: ["Taken from the original film", "Exactly what happened", "The AI's guess", "Always correct"], answer: 2, why: "Colorizing is a guess; keep and label the original." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Photography",
    questions: [
      { q: "The lens is:", options: ["The screen", "The small glass the camera sees through", "The battery", "The charger"], answer: 1, why: "The lens takes in the picture." },
      { q: "For steady photos, hold the phone:", options: ["With both hands, elbows in", "With one finger", "Above your head", "Upside down"], answer: 0, why: "Two hands keep it steady." },
      { q: "For a portrait, the light should be:", options: ["On the person's face", "Behind the person", "Turned off", "Under the person"], answer: 0, why: "Light on the face shows it clearly." },
      { q: "Taking several shots helps because:", options: ["Phones need practice", "You can keep the best", "It saves battery", "It deletes old photos"], answer: 1, why: "More shots, more chances for a great one." },
      { q: "To start editing a photo, tap:", options: ["Share", "Delete", "Edit", "Settings"], answer: 2, why: "Edit opens the editing tools." },
      { q: "\"Crop\" means:", options: ["Deleting", "Adding color", "Sharing", "Cutting away the edges"], answer: 3, why: "Cropping trims the photo." },
      { q: "If you do not like your edits, you can usually:", options: ["Buy the original", "Never go back", "Revert or Undo", "Restart the phone"], answer: 2, why: "Most apps keep the original." },
      { q: "An AI eraser is used to:", options: ["Remove a small distraction from a photo", "Delete your whole library", "Print photos", "Call family"], answer: 0, why: "It removes objects and fills the space." },
      { q: "Your phone does not seem to have an AI eraser. A good step is:", options: ["Delete the photo app", "Give up photography", "Share your password", "Ask an AI assistant how to do it on your phone model"], answer: 3, why: "Tool names differ; AI can guide you." },
      { q: "Using AI to change what really happened in a photo to fool people is:", options: ["Always fine", "Misleading and should be avoided", "Required", "A safety feature"], answer: 1, why: "Edits should not mislead." },
      { q: "Photo app search can find pictures by:", options: ["Only file numbers", "Things, places and dates", "Only color", "Nothing"], answer: 1, why: "AI recognizes contents, places and dates." },
      { q: "Face grouping in a photo app is:", options: ["A password", "Required", "A virus", "Optional and can be turned off"], answer: 3, why: "You can choose whether to use it." },
      { q: "An album is:", options: ["A group of photos kept together", "A single photo", "A camera", "A filter"], answer: 0, why: "Albums collect related photos." },
      { q: "To choose several photos at once, tap:", options: ["Camera", "Delete", "Select", "Settings"], answer: 2, why: "Select lets you pick many photos." },
      { q: "A simple way to share a few photos is:", options: ["Post them on a stranger's page", "Mail the phone", "Print and fax", "Send them by text or email"], answer: 3, why: "Texts and emails share easily." },
      { q: "To copy an old print, hold the phone:", options: ["Behind the photo", "At a sharp angle", "Straight above the photo", "Far across the room"], answer: 2, why: "Straight above keeps edges square." },
      { q: "Glare is:", options: ["A type of album", "A bright shine from light on the photo", "A filter", "A password"], answer: 1, why: "Glare hides parts of the picture." },
      { q: "Scanning apps like Google's PhotoScan help by:", options: ["Reducing glare", "Adding passwords", "Deleting prints", "Making calls"], answer: 0, why: "They are built to copy prints well." },
      { q: "When you share an AI-colorized photo, you should:", options: ["Label it as colorized and keep the original", "Say it is the original", "Delete the original", "Hide it"], answer: 0, why: "Colors are a guess; honesty matters." },
      { q: "AI can help with an old photo's caption by:", options: ["Knowing who is in it", "Helping write it once you give the names and year", "Finding their addresses", "Guessing their birthdays correctly"], answer: 1, why: "You supply the facts; AI helps with words." }
    ]
  }
};
