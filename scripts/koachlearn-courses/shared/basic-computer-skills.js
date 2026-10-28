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
  chapters: [
    {
      name: "Chapter 1: Getting comfortable",
      lessons: [
        {
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
          youCanNow: "name the parts of a computer, turn it on and sign in."
        },
        {
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
          youCanNow: "point, click, double-click, right-click and scroll with a mouse or trackpad."
        },
        {
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
          youCanNow: "type sentences with capitals and punctuation, fix mistakes and use common shortcuts."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting comfortable",
        questions: [
          { q: "What is a trackpad?", options: ["The screen", "A kind of printer", "The flat touch pad on a laptop that works like a mouse", "A cable"], answer: 2, why: "A trackpad does the mouse's job on a laptop." },
          { q: "What does the power button usually look like?", options: ["A star", "A circle with a line at the top", "A heart", "A question mark"], answer: 1, why: "That is the common power symbol." },
          { q: "How do you open a folder with the mouse?", options: ["Right-click once", "Roll the wheel", "Double-click it", "Shake the mouse"], answer: 2, why: "A double-click opens things." },
          { q: "How do you type one capital letter?", options: ["Press Enter", "Hold Shift and press the letter", "Press Backspace", "Press the Space bar twice"], answer: 1, why: "Shift plus a letter makes one capital." },
          { q: "You typed a wrong letter. Which key removes it?", options: ["Space bar", "Shift", "Caps Lock", "Backspace (Delete on Mac)"], answer: 3, why: "Backspace removes the letter to the left of the cursor." }
        ]
      }
    },
    {
      name: "Chapter 2: Apps, files and care",
      lessons: [
        {
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
          youCanNow: "open any app by name, move between windows and close them."
        },
        {
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
          youCanNow: "make folders, save files with clear names and find them again."
        },
        {
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
          youCanNow: "use a computer from start to finish: sign in, work, save, find your files and shut down safely."
        }
      ],
      check: {
        title: "Knowledge Check 2: Apps, files and care",
        questions: [
          { q: "On Windows, how do you open an app you cannot see?", options: ["Turn off the screen", "Unplug the computer", "Press Backspace", "Click Start and type its name"], answer: 3, why: "Start search finds any app by name." },
          { q: "On a Mac, the red button at the top left of a window:", options: ["Makes it full screen", "Hides it", "Closes it", "Prints it"], answer: 2, why: "Red closes, yellow minimizes, green fills the screen." },
          { q: "What is a folder?", options: ["A type of keyboard", "A place that holds files, like a drawer", "An update", "A web page"], answer: 1, why: "Folders keep files organized." },
          { q: "Which keys save your work on Windows?", options: ["Ctrl+Z", "Ctrl+P", "Alt+Tab", "Ctrl+S"], answer: 3, why: "Ctrl+S saves (Command+S on a Mac)." },
          { q: "The computer is slow and a program froze. A good first step is to:", options: ["Call a number in a pop-up", "Save your work and restart", "Pour water on it", "Buy a new computer"], answer: 1, why: "A restart fixes many problems." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Basic Computer Skills",
    questions: [
      { q: "Which part do you look at to see your work?", options: ["The power cord", "The mouse", "The screen (monitor)", "The keyboard"], answer: 2, why: "The screen shows what the computer is doing." },
      { q: "A laptop is:", options: ["A phone charger", "A type of mouse", "A printer", "A computer that folds open with screen and keyboard together"], answer: 3, why: "Laptops are all-in-one and portable." },
      { q: "After the computer turns on, you usually:", options: ["Unplug it", "Sign in with a password or PIN", "Press Caps Lock", "Close the lid"], answer: 1, why: "Signing in tells the computer it is you." },
      { q: "The pointer is:", options: ["A folder", "The power button", "The small arrow that moves with the mouse", "A key"], answer: 2, why: "The pointer follows the mouse." },
      { q: "Your mouse reaches the edge of the table. What do you do?", options: ["Turn it over", "Press it harder", "Restart the computer", "Lift it and put it back in the middle"], answer: 3, why: "Lifting the mouse does not move the pointer." },
      { q: "A right-click shows:", options: ["The power options only", "A short menu of choices", "A new computer", "Nothing ever"], answer: 1, why: "Right-click opens a menu." },
      { q: "On a trackpad, how do you scroll?", options: ["Press Shift", "Tap the power button", "Slide two fingers up or down", "Close the lid"], answer: 2, why: "Two fingers scroll on a trackpad." },
      { q: "The blinking line where your typing goes is the:", options: ["Monitor", "Folder", "Dock", "Cursor"], answer: 3, why: "The cursor shows where letters will appear." },
      { q: "Caps Lock:", options: ["Deletes a word", "Makes every letter a capital until pressed again", "Saves the file", "Turns off the computer"], answer: 1, why: "It locks capitals on." },
      { q: "Which shortcut undoes a mistake on Windows?", options: ["Ctrl+V", "Ctrl+S", "Ctrl+Z", "Ctrl+P"], answer: 2, why: "Ctrl+Z is undo (Command+Z on Mac)." },
      { q: "Enter (Return on Mac) is used to:", options: ["Turn off the screen", "Delete a letter", "Make a capital", "Start a new line"], answer: 3, why: "Enter starts a new line or says go." },
      { q: "On a Mac, how can you open an app by name?", options: ["Press the power button", "Click the magnifying glass (Spotlight) and type it", "Right-click the screen", "Hold Shift"], answer: 1, why: "Spotlight finds apps by name." },
      { q: "On Windows, the X at the top right of a window:", options: ["Closes it", "Makes it bigger", "Saves it", "Hides it"], answer: 0, why: "X closes the window." },
      { q: "A minimized window goes to:", options: ["The taskbar (Windows) or Dock (Mac)", "The trash forever", "The printer", "The internet"], answer: 0, why: "Click its icon there to bring it back." },
      { q: "Which is the best file name?", options: ["Questions for Dr Lee", "asdf", "Untitled", "1"], answer: 0, why: "A clear name helps you find it later." },
      { q: "The app for looking at files on Windows is:", options: ["File Explorer", "Spotlight", "Dock", "Safari"], answer: 0, why: "File Explorer shows files and folders." },
      { q: "You cannot remember where you saved a file. You can:", options: ["Search for part of its name", "Restart until it appears", "Buy a new computer", "Unplug the mouse"], answer: 0, why: "Search finds files by name." },
      { q: "Why install updates?", options: ["They fix problems and close security holes", "They delete your files", "They cost money every time", "They slow the computer forever"], answer: 0, why: "Updates improve safety and fix problems." },
      { q: "How do you shut down a Mac properly?", options: ["Apple menu, then Shut Down", "Pull out the plug", "Close the window", "Press Caps Lock"], answer: 0, why: "Use the Apple menu to shut down safely." },
      { q: "A pop-up says you have a virus and to call a number. You should:", options: ["Not call; close it and ask someone you trust", "Call right away", "Give them your password", "Pay with a gift card"], answer: 0, why: "Real warnings never ask you to call a number." }
    ]
  }
};
