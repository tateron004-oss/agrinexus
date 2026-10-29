"use strict";

// Koach Learn course (shared): "Basic Computer Skills". Goes in Seniors and Technology, so the examples are everyday ones: a note to a grandchild, a list for the doctor, family photos.
// Covers Windows and Mac by describing the action and naming the main buttons. Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "basic-computer-skills",
  category: "Seniors and Technology",
  name: "Basic Computer Skills",
  skills: "Turning a computer on and off, Using a mouse or trackpad, Typing with the keyboard, Opening and closing apps and windows, Saving and finding files in folders, Keeping a computer updated",
  outcome: "turn on a Windows or Mac computer and sign in, use the mouse and keyboard with confidence, open an app, type and save a short note in a folder you made, find it again later, and shut the computer down properly.",
  about: [
    "This course is for anyone who feels unsure in front of a computer: people who have never used one, people who learned years ago, and people who mostly use a phone. We go one small step at a time, and nothing you do in these lessons will break the computer.",
    "In Chapter 1 you learn the parts of a computer, how to turn it on and sign in, and how to use the mouse and keyboard. In Chapter 2 you open apps and windows, save a file in a folder, find it again, and keep the computer healthy.",
    "Steps are given for Windows computers and Mac computers. Each lesson takes about five minutes. A knowledge check ends each chapter and a 20-question quiz ends the course."
  ],
  finalTask: "Turn on the computer and sign in. Make a new folder called \"Practice\" in your Documents folder. Open Notepad (Windows) or TextEdit (Mac), type a short note, such as a list of questions for your next doctor visit or a note to a grandchild, with a capital letter at the start of each sentence. Save it in the Practice folder with a clear name, close the app, find the file again and open it, then shut the computer down properly.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults who have little or no experience with a computer: seniors, people returning to work or to the community, job seekers and caregivers who want to use a home, library or job-center computer on their own.",
    startingPoint: "May use a mobile phone for calls or texts. Many have never used a mouse, typed on a full keyboard, opened an app on a computer, saved a file in a folder or shut a computer down properly.",
    gap: "Job applications, library services, school and many forms need a computer. Without these basics people must ask others for help, lose their work because it was not saved, or avoid computers altogether.",
    constraints: [
      "Reading level: plain words and short sentences; every part and button is named and described",
      "Devices: a Windows or Mac desktop or laptop, at home or at a library or job center",
      "Time: about 5 minutes a lesson, about 60 minutes in total, with extra practice time for the mouse",
      "Cost: only the free apps already on the computer (Notepad or TextEdit)",
      "Shared computers: learners follow staff sign-in rules and do not save private files on library computers"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a desktop or laptop computer", action: "name its main parts, turn it on and sign in", standard: "without help, naming the screen, keyboard, mouse or trackpad and the power button" },
    { id: "O2", condition: "Using a mouse or trackpad", action: "point, click, double-click, right-click and scroll", standard: "doing each action correctly when asked" },
    { id: "O3", condition: "Using the keyboard", action: "type a sentence with capital letters, spaces and punctuation and fix mistakes", standard: "with a capital at the start of each sentence and every mistake fixed with Backspace or undo" },
    { id: "O4", condition: "On a Windows or Mac computer", action: "open an app by name, resize or minimize its window, bring it back and close it", standard: "without help" },
    { id: "O5", condition: "Given a short note to save", action: "create a folder, save the note in it with a clear name and find it again", standard: "with the file in the right folder and opened again later" },
    { id: "O6", condition: "When a computer needs care or has a problem", action: "install updates, restart, shut down properly and choose a safe place to get help", standard: "using the menu to shut down and never calling a number from a pop-up" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting comfortable",
      lessons: [
        {
          objectives: ["O1"],
          title: "The parts of a computer, and turning it on",
          minutes: 5,
          goal: "Name the main parts of a computer, turn it on and sign in.",
          text: [
            "A desktop computer has a screen (monitor), a keyboard, a mouse and a box or screen that holds the computer itself. A laptop has all of these in one piece that folds open; instead of a mouse it has a flat touch pad called a trackpad.",
            "To turn it on, press the power button once. It usually has a circle with a line through the top. On a laptop it is often at the top right of the keyboard or on the side. Wait for the screen to wake up.",
            "Most computers then ask you to sign in with a password or PIN. Type it and press Enter. On a shared computer, like one at a library, the staff will tell you how to sign in."
          ],
          steps: ["Find the power button (a circle with a line at the top).", "Press it once and let go.", "Wait for the sign-in screen.", "Type your password or PIN and press Enter."],
          words: [["Monitor", "the screen of a desktop computer."], ["Laptop", "a computer that folds open, with the screen and keyboard in one piece."], ["Trackpad", "the flat touch pad on a laptop that works like a mouse."], ["Sign in", "type your password or PIN so the computer knows it is you."]],
          slides: [
            { title: "Parts of a computer", bullets: ["Screen (monitor)", "Keyboard", "Mouse, or a trackpad on a laptop"] },
            { title: "Turn it on", bullets: ["Power button: a circle with a line at the top", "Press once and wait"] },
            { title: "Sign in", bullets: ["Type your password or PIN", "Press Enter", "On a shared computer, ask staff"] }
          ],
          tryIt: "Point to the screen, keyboard and mouse (or trackpad) on a computer near you. Find the power button, turn the computer on and sign in.",
          youCanNow: "name the parts of a computer, turn it on and sign in.",
          quickCheck: [
            { objective: "O1", q: "What is a monitor?", options: ["The mouse", "The screen", "The power cable", "The keyboard"], answer: 1, why: "The monitor is the screen where you see your work." },
            { objective: "O1", q: "You want to use a computer at the library and it asks for a sign-in. What would you do?", options: ["Hold the power button until it turns off", "Unplug it", "Type random letters until it opens", "Ask the staff how to sign in"], answer: 3, why: "On a shared computer, the staff will tell you how to sign in." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Using the mouse or trackpad",
          minutes: 5,
          goal: "Point, click, double-click, right-click and scroll.",
          text: [
            "The mouse moves the pointer, the small arrow on the screen. Rest your hand on the mouse and slide it gently on the table; the arrow follows. If you run out of room, lift the mouse and put it back down in the middle.",
            "Click: press the left button once to choose something. Double-click: press the left button twice quickly to open something, like a folder. Right-click: press the right button once to see a short menu of choices. Scroll: roll the small wheel between the buttons to move a page up or down.",
            "On a laptop trackpad, slide one finger to move the arrow, tap or press once to click, and slide two fingers up or down to scroll. To right-click, tap with two fingers."
          ],
          steps: ["Slide the mouse to move the arrow.", "Click: press the left button once.", "Double-click: press the left button twice quickly.", "Right-click: press the right button once for a menu.", "Scroll: roll the wheel, or slide two fingers on a trackpad."],
          words: [["Pointer", "the small arrow on the screen that moves with the mouse."], ["Click", "press the left mouse button once."], ["Double-click", "press the left button twice quickly to open something."], ["Right-click", "press the right button to see a menu of choices."], ["Scroll", "move a page up or down."]],
          slides: [
            { title: "Move the pointer", bullets: ["Slide the mouse gently", "Out of room? Lift it and put it back in the middle"] },
            { title: "Clicks", bullets: ["Click: left button once, to choose", "Double-click: twice quickly, to open", "Right-click: right button, for a menu"] },
            { title: "Scroll", bullets: ["Roll the mouse wheel", "Trackpad: slide two fingers up or down"] },
            { title: "Trackpad", bullets: ["One finger moves the arrow", "Tap to click", "Two-finger tap to right-click"] }
          ],
          tryIt: "Open any web page or document. Scroll down and back up. Right-click on an empty spot and read the menu, then press the Esc key to close it. Double-click a word to select it.",
          youCanNow: "point, click, double-click, right-click and scroll with a mouse or trackpad.",
          quickCheck: [
            { objective: "O2", q: "What does scrolling do?", options: ["Moves a page up or down", "Opens a folder", "Turns the computer off", "Types a capital letter"], answer: 0, why: "Rolling the mouse wheel, or sliding two fingers on a trackpad, moves the page." },
            { objective: "O2", q: "On a laptop trackpad, you want to see the short menu of choices. What would you do?", options: ["Slide one finger", "Press the power button", "Tap with two fingers", "Press Caps Lock"], answer: 2, why: "On a trackpad, a two-finger tap is a right-click." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Typing with the keyboard",
          minutes: 5,
          goal: "Type a sentence with capital letters, spaces and punctuation, and fix mistakes.",
          text: [
            "The keyboard has letters, numbers and special keys. The long bar at the bottom is the Space bar. Enter (Return on a Mac) starts a new line or says \"go\". Backspace (Delete on a Mac) removes the letter to the left of the blinking line, called the cursor.",
            "For one capital letter, hold Shift and press the letter. Caps Lock makes every letter a capital until you press it again. Shift also types the top symbol on a key, like ? or !.",
            "Shortcuts save time. On Windows use Ctrl; on a Mac use Command. Ctrl+Z undoes a mistake, Ctrl+C copies, Ctrl+V pastes and Ctrl+S saves."
          ],
          steps: ["Click where you want to type; the cursor blinks there.", "Hold Shift and press a letter for a capital.", "Press the Space bar between words.", "Press Backspace (Delete on Mac) to fix a mistake.", "Press Enter (Return on Mac) for a new line."],
          words: [["Cursor", "the blinking line that shows where your typing will go."], ["Shift", "the key you hold for a capital letter or a top symbol."], ["Backspace", "the key that deletes the letter to the left (Delete on a Mac)."], ["Shortcut", "a key combination that does a job quickly, like Ctrl+S to save."]],
          slides: [
            { title: "Key keys", bullets: ["Space bar: a space", "Enter (Return on Mac): new line", "Backspace (Delete on Mac): remove a letter"] },
            { title: "Capitals and symbols", bullets: ["Shift + letter = one capital", "Caps Lock = all capitals until pressed again", "Shift also types ? and !"] },
            { title: "Handy shortcuts", bullets: ["Windows: Ctrl. Mac: Command", "Z undo, C copy, V paste, S save"] }
          ],
          tryIt: "Open a search box or a blank document and type: My name is ___ and I am learning computers! Use a capital letter at the start, then delete one word with Backspace and type it again.",
          youCanNow: "type sentences with capitals and punctuation, fix mistakes and use common shortcuts.",
          quickCheck: [
            { objective: "O3", q: "What does Ctrl+C do on Windows?", options: ["Saves your work", "Undoes a mistake", "Copies", "Closes the app"], answer: 2, why: "Ctrl+C copies; Ctrl+V pastes." },
            { objective: "O3", q: "Everything you type is coming out in capital letters. What would you do?", options: ["Restart the computer", "Press Caps Lock again to turn it off", "Hold Shift for every letter", "Buy a new keyboard"], answer: 1, why: "Caps Lock makes every letter a capital until you press it again." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting comfortable",
        questions: [
          { objective: "O1", q: "What is a trackpad?", options: ["The screen", "A kind of printer", "The flat touch pad on a laptop that works like a mouse", "A cable"], answer: 2, why: "A trackpad does the mouse's job on a laptop." },
          { objective: "O1", q: "What does the power button usually look like?", options: ["A star", "A circle with a line at the top", "A heart", "A question mark"], answer: 1, why: "That is the common power symbol." },
          { objective: "O2", q: "How do you open a folder with the mouse?", options: ["Right-click once", "Roll the wheel", "Double-click it", "Shake the mouse"], answer: 2, why: "A double-click opens things." },
          { objective: "O3", q: "How do you type one capital letter?", options: ["Press Enter", "Hold Shift and press the letter", "Press Backspace", "Press the Space bar twice"], answer: 1, why: "Shift plus a letter makes one capital." },
          { objective: "O3", q: "You typed a wrong letter. Which key removes it?", options: ["Space bar", "Shift", "Caps Lock", "Backspace (Delete on Mac)"], answer: 3, why: "Backspace removes the letter to the left of the cursor." }
        ]
      }
    },
    {
      name: "Chapter 2: Apps, files and care",
      lessons: [
        {
          objectives: ["O4"],
          title: "Opening apps and handling windows",
          minutes: 5,
          goal: "Open an app, resize its window and close it.",
          text: [
            "Apps (programs) do jobs: a web browser for the internet, a writing app for notes, a photo app for pictures. On Windows, click the Start button (the Windows logo at the bottom of the screen) and type the app's name. On a Mac, click the magnifying glass at the top right (Spotlight), type the name and press Return.",
            "Each app opens in a window. At the top corner are small buttons. On Windows, at the top right: a dash (minimize, hide it for now), a square (maximize, fill the screen) and an X (close). On a Mac, at the top left: red (close), yellow (minimize) and green (full screen).",
            "Minimized apps wait on the taskbar (Windows, at the bottom) or the Dock (Mac). Click the app's icon there to bring it back."
          ],
          steps: ["Windows: click Start and type the app name. Mac: click the magnifying glass and type the name.", "Press Enter or Return to open it.", "Use the minimize button to hide it.", "Click its icon on the taskbar or Dock to bring it back.", "Close it with X (Windows) or the red button (Mac)."],
          words: [["App / program", "software that does a job, like writing or browsing."], ["Window", "the box an app opens in."], ["Minimize", "hide a window for now without closing it."], ["Taskbar / Dock", "the row of app icons at the bottom of the screen (Windows taskbar, Mac Dock)."]],
          slides: [
            { title: "Open an app", bullets: ["Windows: Start button, type the name", "Mac: magnifying glass (Spotlight), type the name"] },
            { title: "Window buttons on Windows", bullets: ["Top right", "Dash = minimize, square = maximize, X = close"] },
            { title: "Window buttons on a Mac", bullets: ["Top left", "Red = close, yellow = minimize, green = full screen"] },
            { title: "Bring it back", bullets: ["Click its icon on the taskbar (Windows)", "Or the Dock (Mac)"] }
          ],
          tryIt: "Open Notepad (Windows) or TextEdit (Mac) by typing its name in Start or Spotlight. Minimize it, bring it back from the taskbar or Dock, then make it fill the screen.",
          youCanNow: "open any app by name, move between windows and close them.",
          quickCheck: [
            { objective: "O4", q: "On Windows, what does the square button at the top right of a window do?", options: ["Closes the window", "Hides the window", "Opens Spotlight", "Makes the window fill the screen"], answer: 3, why: "The square is maximize; the dash hides the window and the X closes it." },
            { objective: "O4", q: "You minimized your writing app and now want it back. What would you do?", options: ["Click its icon on the taskbar (Windows) or the Dock (Mac)", "Shut the computer down", "Open a new folder", "Press Backspace"], answer: 0, why: "Minimized apps wait on the taskbar or Dock until you click them." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Saving and finding files in folders",
          minutes: 5,
          goal: "Save a note in a folder you made and find it again.",
          text: [
            "A file is one saved thing: a letter, a photo, a list. A folder holds files, like a drawer in a filing cabinet. The Documents folder is a good home for your files.",
            "To make a folder: on Windows open File Explorer (the yellow folder icon), click Documents, then choose New and Folder. On a Mac open Finder (the blue face icon), click Documents, then open the File menu and choose New Folder. Type a name and press Enter or Return.",
            "To save: press Ctrl+S (Command+S on a Mac). A box opens; choose the folder, type a clear file name like \"Questions for Dr Lee\", and click Save. To find a file later, open File Explorer or Finder and look in the folder, or type part of the name in the search box."
          ],
          steps: ["Open File Explorer (Windows) or Finder (Mac).", "Go to Documents and make a new folder.", "In your app, press Ctrl+S (Command+S on Mac).", "Pick the folder, type a clear name, click Save.", "To find it: open the folder, or search for part of the name."],
          words: [["File", "one saved item, like a letter or photo."], ["Folder", "a place that holds files, like a drawer."], ["File Explorer / Finder", "the app for looking at files and folders (Windows / Mac)."]],
          slides: [
            { title: "Files and folders", bullets: ["File = one saved thing", "Folder = a drawer that holds files", "Documents is a good home"] },
            { title: "Make a folder", bullets: ["Windows: File Explorer, Documents, New, Folder", "Mac: Finder, Documents, File, New Folder"] },
            { title: "Save with a clear name", bullets: ["Ctrl+S (Command+S on Mac)", "Pick the folder, name it, click Save"] },
            { title: "Find it again", bullets: ["Open the folder", "Or search for part of the name"] }
          ],
          tryIt: "Make a folder called \"Practice\" in Documents. Type a short list in Notepad or TextEdit, save it in Practice as \"My First Note\", close the app, then find and open the file again.",
          youCanNow: "make folders, save files with clear names and find them again.",
          quickCheck: [
            { objective: "O5", q: "What is a file?", options: ["One saved thing, such as a letter, photo or list", "A drawer that holds folders", "The app that opens the internet", "The power button"], answer: 0, why: "A file is one saved thing; a folder holds files." },
            { objective: "O5", q: "You finished a note and want to keep it. What would you do?", options: ["Close the app without saving", "Turn the computer off", "Unplug the keyboard", "Press Ctrl+S (Command+S on Mac), choose the folder, type a clear name and click Save"], answer: 3, why: "Saving puts the note in a folder with a name so you can find it later." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Keeping your computer healthy",
          minutes: 4,
          goal: "Install updates, restart and shut down properly, and know where to get help.",
          text: [
            "Updates fix problems and close security holes. On Windows, open Settings and choose Windows Update. On a Mac, open System Settings and choose General, then Software Update. Install updates when asked and let the computer restart.",
            "If the computer is slow or something freezes, save your work and restart it. That fixes many problems. To shut down on Windows: Start, then the power icon, then Shut down. On a Mac: the Apple menu at the top left, then Shut Down. Do not just unplug it or hold the power button unless it is completely stuck.",
            "If a pop-up says your computer has a virus and gives a phone number, do not call; close it. Ask for help from someone you trust, a library's tech help session, or the store where you bought the computer."
          ],
          steps: ["Check for updates: Windows Update (Windows) or Software Update (Mac).", "Install them and let the computer restart.", "Slow or frozen? Save and restart.", "Shut down: Start, power icon, Shut down (Windows) or Apple menu, Shut Down (Mac).", "Need help? A trusted person, library tech help or the store."],
          words: [["Update", "a free fix from the maker that improves safety and features."], ["Restart", "turn the computer off and on again in one step."], ["Shut down", "turn the computer fully off the right way."]],
          sources: [{ name: "FTC: How to spot, avoid and report tech support scams", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" }],
          slides: [
            { title: "Install updates", bullets: ["Windows: Settings, Windows Update", "Mac: System Settings, General, Software Update"] },
            { title: "Restart fixes a lot", bullets: ["Slow or frozen? Save, then restart"] },
            { title: "Shut down properly", bullets: ["Windows: Start, power icon, Shut down", "Mac: Apple menu, Shut Down", "Do not just unplug it"] },
            { title: "Getting help", bullets: ["Never call numbers in virus pop-ups", "Ask someone you trust or library tech help"] }
          ],
          tryIt: "Final task: turn on and sign in, make a Practice folder, type and save a short note with capitals in Notepad or TextEdit, close it, find and open it again, check for updates, then shut down properly.",
          youCanNow: "use a computer from start to finish: sign in, work, save, find your files and shut down safely.",
          quickCheck: [
            { objective: "O6", q: "Where do you find updates on a Windows computer?", options: ["In the Recycle Bin", "In Settings, under Windows Update", "On the taskbar clock", "In Notepad"], answer: 1, why: "Windows updates are in Settings, under Windows Update." },
            { objective: "O6", q: "You are done for the day on a Windows computer. What would you do?", options: ["Pull out the plug", "Hold the power button down", "Click Start, then the power icon, then Shut down", "Close the lid while an app is saving"], answer: 2, why: "Shutting down from the menu is the proper way; unplugging can cause problems." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Apps, files and care",
        questions: [
          { objective: "O4", q: "On Windows, how do you open an app you cannot see?", options: ["Turn off the screen", "Unplug the computer", "Press Backspace", "Click Start and type its name"], answer: 3, why: "Start search finds any app by name." },
          { objective: "O4", q: "On a Mac, the red button at the top left of a window:", options: ["Makes it full screen", "Hides it", "Closes it", "Prints it"], answer: 2, why: "Red closes, yellow minimizes, green fills the screen." },
          { objective: "O5", q: "What is a folder?", options: ["A type of keyboard", "A place that holds files, like a drawer", "An update", "A web page"], answer: 1, why: "Folders keep files organized." },
          { objective: "O5", q: "Which keys save your work on Windows?", options: ["Ctrl+Z", "Ctrl+P", "Alt+Tab", "Ctrl+S"], answer: 3, why: "Ctrl+S saves (Command+S on a Mac)." },
          { objective: "O6", q: "The computer is slow and a program froze. A good first step is to:", options: ["Call a number in a pop-up", "Save your work and restart", "Pour water on it", "Buy a new computer"], answer: 1, why: "A restart fixes many problems." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Basic Computer Skills",
    questions: [
      { objective: "O1", q: "Which part do you look at to see your work?", options: ["The power cord", "The mouse", "The screen (monitor)", "The keyboard"], answer: 2, why: "The screen shows what the computer is doing." },
      { objective: "O1", q: "A laptop is:", options: ["A phone charger", "A type of mouse", "A printer", "A computer that folds open with screen and keyboard together"], answer: 3, why: "Laptops are all-in-one and portable." },
      { objective: "O1", q: "After the computer turns on, you usually:", options: ["Unplug it", "Sign in with a password or PIN", "Press Caps Lock", "Close the lid"], answer: 1, why: "Signing in tells the computer it is you." },
      { objective: "O2", q: "The pointer is:", options: ["A folder", "The power button", "The small arrow that moves with the mouse", "A key"], answer: 2, why: "The pointer follows the mouse." },
      { objective: "O2", q: "Your mouse reaches the edge of the table. What do you do?", options: ["Turn it over", "Press it harder", "Restart the computer", "Lift it and put it back in the middle"], answer: 3, why: "Lifting the mouse does not move the pointer." },
      { objective: "O2", q: "A right-click shows:", options: ["The power options only", "A short menu of choices", "A new computer", "Nothing ever"], answer: 1, why: "Right-click opens a menu." },
      { objective: "O2", q: "On a trackpad, how do you scroll?", options: ["Press Shift", "Tap the power button", "Slide two fingers up or down", "Close the lid"], answer: 2, why: "Two fingers scroll on a trackpad." },
      { objective: "O3", q: "The blinking line where your typing goes is the:", options: ["Monitor", "Folder", "Dock", "Cursor"], answer: 3, why: "The cursor shows where letters will appear." },
      { objective: "O3", q: "Caps Lock:", options: ["Deletes a word", "Makes every letter a capital until pressed again", "Saves the file", "Turns off the computer"], answer: 1, why: "It locks capitals on." },
      { objective: "O3", q: "Which shortcut undoes a mistake on Windows?", options: ["Ctrl+V", "Ctrl+S", "Ctrl+Z", "Ctrl+P"], answer: 2, why: "Ctrl+Z is undo (Command+Z on Mac)." },
      { objective: "O3", q: "Enter (Return on Mac) is used to:", options: ["Turn off the screen", "Delete a letter", "Make a capital", "Start a new line"], answer: 3, why: "Enter starts a new line or says go." },
      { objective: "O4", q: "On a Mac, how can you open an app by name?", options: ["Press the power button", "Click the magnifying glass (Spotlight) and type it", "Right-click the screen", "Hold Shift"], answer: 1, why: "Spotlight finds apps by name." },
      { objective: "O4", q: "On Windows, the X at the top right of a window:", options: ["Closes it", "Makes it bigger", "Saves it", "Hides it"], answer: 0, why: "X closes the window." },
      { objective: "O4", q: "A minimized window goes to:", options: ["The taskbar (Windows) or Dock (Mac)", "The trash forever", "The printer", "The internet"], answer: 0, why: "Click its icon there to bring it back." },
      { objective: "O5", q: "Which is the best file name?", options: ["Questions for Dr Lee", "asdf", "Untitled", "1"], answer: 0, why: "A clear name helps you find it later." },
      { objective: "O5", q: "The app for looking at files on Windows is:", options: ["File Explorer", "Spotlight", "Dock", "Safari"], answer: 0, why: "File Explorer shows files and folders." },
      { objective: "O5", q: "You cannot remember where you saved a file. You can:", options: ["Search for part of its name", "Restart until it appears", "Buy a new computer", "Unplug the mouse"], answer: 0, why: "Search finds files by name." },
      { objective: "O6", q: "Why install updates?", options: ["They fix problems and close security holes", "They delete your files", "They cost money every time", "They slow the computer forever"], answer: 0, why: "Updates improve safety and fix problems." },
      { objective: "O6", q: "How do you shut down a Mac properly?", options: ["Apple menu, then Shut Down", "Pull out the plug", "Close the window", "Press Caps Lock"], answer: 0, why: "Use the Apple menu to shut down safely." },
      { objective: "O6", q: "A pop-up says you have a virus and to call a number. You should:", options: ["Not call; close it and ask someone you trust", "Call right away", "Give them your password", "Pay with a gift card"], answer: 0, why: "Real warnings never ask you to call a number." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      5,
      8,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Turning on and signing in",
        objective: "O1",
        notYet: "Needs help to turn on the computer or sign in.",
        meets: "Turns on the computer and signs in without help.",
        exceeds: "Also names the main parts of the computer."
      },
      {
        name: "Folder and saved note",
        objective: "O5",
        notYet: "The Practice folder or the saved note is missing, or the note has a name like Untitled.",
        meets: "A Practice folder in Documents holds the note, saved with a clear name.",
        exceeds: "Finds the file again using the search box as well as the folder."
      },
      {
        name: "Typing the note",
        objective: "O3",
        notYet: "The note is missing, or sentences have no capital letters.",
        meets: "A short note with a capital at the start of each sentence and mistakes fixed.",
        exceeds: "Also uses punctuation such as ? or ! correctly and uses Ctrl+Z (Command+Z) to undo."
      },
      {
        name: "Opening and closing the app",
        objective: "O4",
        notYet: "Cannot open Notepad or TextEdit, or cannot close it.",
        meets: "Opens the app by name, closes it, then finds and opens the saved file.",
        exceeds: "Also minimizes the window and brings it back from the taskbar or Dock."
      },
      {
        name: "Shutting down",
        objective: "O6",
        notYet: "The computer is unplugged or the power button is held down.",
        meets: "Shuts down properly from the Start menu or Apple menu.",
        exceeds: "Also checks for updates before shutting down."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the final task",
      "Learners who report using a computer on their own, such as at a library or job center, in the 30 days after the course (follow-up survey)",
      "Learners who go on to a next course, such as Internet Basics or Microsoft 365 and Google Docs",
      "Learners who report completing a real task on a computer, such as a letter or a job application"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A Windows or Mac desktop or laptop with a mouse or trackpad",
      "A sign-in for the computer (from home, or from library or lab staff)",
      "Notepad (Windows) or TextEdit (Mac), already on the computer",
      "About 60 minutes in total, in short sessions, plus extra mouse practice time"
    ],
    facilitatorNotes: [
      "Set up sign-ins before class so the first lesson is not spent on accounts.",
      "Give new learners extra time with the mouse; let them practise clicking and double-clicking on desktop icons before moving on.",
      "Group Windows and Mac users separately, or show both sets of steps on screen.",
      "On shared computers, have learners delete their practice files and sign out at the end, and remind them not to save private information there.",
      "Let learners press every key and click every button themselves; avoid taking the mouse from them."
    ]
  }
};
