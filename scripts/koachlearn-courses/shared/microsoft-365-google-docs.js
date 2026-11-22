"use strict";

// Koach Learn course (shared): "Microsoft 365 and Google Docs Basics". Goes in Seniors and Technology (first), Re-Entry, Small Business, Non Profits, Youth, Veterans (military), Workforce Development and
// Undeserved Community, so the examples are everyday ones: a family letter, a résumé, a club sign-up sheet, a small budget. Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "microsoft-365-google-docs",
  category: "Seniors and Technology",
  name: "Microsoft 365 and Google Docs Basics",
  skills: "Creating and saving a document, Formatting text, Sharing and commenting, Building a simple spreadsheet, Adding with a formula, Downloading as PDF",
  outcome: "make a neat one-page document and a simple spreadsheet with a total in either Google Docs and Sheets or Microsoft Word and Excel on the web, then share them safely and save a copy as a PDF.",
  about: [
    "Most jobs, schools, churches, clubs and families now write and share documents online. The two most common free choices are Google Docs and Sheets (with a Google account) and Microsoft Word and Excel on the web (with a Microsoft account). The buttons are named a little differently, but the skills are the same.",
    "In Chapter 1 you make, format and share a document. In Chapter 2 you build a small spreadsheet, add up a column with a formula, and save your work as a PDF to send or print.",
    "Each lesson takes about five minutes. Keep the app open as you read so you can do the \"Try it now\" task right away. A knowledge check ends each chapter, and a 20-question quiz ends the course."
  ],
  finalTask: "Make a one-page flyer or letter (for example a yard sale, a volunteer day, or a note to a landlord) with a bold title, a bulleted list and your contact line, and a small spreadsheet that lists at least five costs and totals them with a SUM formula. Share the document with one person as \"view only\", and download both files as PDFs.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults who need everyday office documents: seniors, job seekers, volunteers, people returning to work, small nonprofit and community group members, and youth starting school or work.",
    startingPoint: "Can use a mouse or touch screen, open a web browser and type. Many have an email account but have never made a document or spreadsheet online, shared a file, or saved a PDF.",
    gap: "Letters, flyers, budgets, sign-up lists and job forms are now made and sent as online files, and offices often ask for PDFs. Without these skills people depend on others, pay for printing help, or share files with private details too widely.",
    constraints: [
      "Reading level: plain words and short sentences; words like cell, formula and PDF are explained",
      "Devices: a computer or tablet with a web browser works best; a phone is possible but harder",
      "Accounts: a free Google or Microsoft account is needed; no paid plan",
      "Time: 4 to 6 minute lessons, about 60 minutes in total",
      "Privacy: files with addresses, ID numbers or health information are never shared with \"Anyone with the link\""
    ],
    prerequisites: "None, but Basic Computer Skills or Internet Basics helps learners who are new to a mouse and browser."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using Google Docs or Word on the web", action: "open a new blank document, give it a clear name and say where it is saved", standard: "with a name that says what the file is and the right online storage named (Google Drive or OneDrive)" },
    { id: "O2", condition: "Given a page of plain text", action: "format a title, a bulleted list and body text so the page is easy to read", standard: "with the title in Heading 1, a bulleted list and one bold word" },
    { id: "O3", condition: "Given a document and a person who needs to see it", action: "share the document at the lowest access level the person needs and leave a comment", standard: "choosing the right level every time and never using \"Anyone with the link\" for private details" },
    { id: "O4", condition: "Using Google Sheets or Excel on the web", action: "create a spreadsheet with headings in row 1 and five rows of data", standard: "with one item per row and numbers typed without words" },
    { id: "O5", condition: "Given a column of numbers in a spreadsheet", action: "write a SUM formula that totals the column and updates by itself", standard: "with a correct total that changes when a number is changed" },
    { id: "O6", condition: "Given a finished document or spreadsheet", action: "download it as a PDF and print it after checking the preview", standard: "with the PDF found in the Downloads folder and nothing cut off in the preview" }
  ],
  chapters: [
    {
      name: "Chapter 1: Writing and sharing a document",
      lessons: [
        {
          objectives: ["O1"],
          title: "Opening Google Docs or Word on the web",
          minutes: 5,
          goal: "Open a new blank document, give it a name and know where it is saved.",
          text: [
            "Google Docs is free with a Google account (the same account as Gmail). Go to docs.google.com and choose Blank document. Microsoft Word on the web is free with a Microsoft account (the same account as Outlook.com). Go to microsoft365.com, choose Word, then Blank document.",
            "Both save your work by themselves as you type. Google keeps it in Google Drive; Microsoft keeps it in OneDrive. Both are online storage, also called the cloud, so you can open the file again from any computer or phone after you sign in.",
            "Give every file a clear name at the top left, such as \"Volunteer Day Flyer - May\". Clear names make files easy to find later."
          ],
          steps: ["Go to docs.google.com (Google) or microsoft365.com (Microsoft) and sign in.", "Choose a blank document.", "Click the name at the top left and type a clear file name.", "Type a sentence and watch for the saved message near the top."],
          words: [["Cloud", "storage on the internet, so you can reach your files from any device after you sign in."], ["Google Drive / OneDrive", "Google's and Microsoft's online storage, where your files are kept."], ["Account", "your sign-in name and password for a service."]],
          sources: [{ name: "Microsoft: free Word, Excel and PowerPoint for the web", url: "https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web" }, { name: "Google Docs", url: "https://docs.google.com" }],
          slides: [
            { title: "Two free choices", bullets: ["Google Docs: docs.google.com with a Google account", "Word on the web: microsoft365.com with a Microsoft account"] },
            { title: "It saves by itself", bullets: ["Google saves to Google Drive", "Microsoft saves to OneDrive", "Open it again from any device after you sign in"] },
            { title: "Name every file", bullets: ["Click the name at the top left", "Use clear names: \"Volunteer Day Flyer - May\""] }
          ],
          tryIt: "Open a blank document in Google Docs or Word on the web. Name it \"My Practice Document\" and type one sentence about your week.",
          youCanNow: "open a new document, name it and know it saves to the cloud by itself.",
          quickCheck: [
            { objective: "O1", q: "What is the cloud?", options: ["Online storage you can reach from any device after you sign in", "A folder that only exists on one computer", "A type of printer", "A paid app you must buy"], answer: 0, why: "Google Drive and OneDrive are online storage, also called the cloud." },
            { objective: "O1", q: "You typed a letter in Google Docs and want to find it again next week. What would you do now?", options: ["Leave it named \"Untitled document\"", "Print it so you do not lose it", "Click the name at the top left and type a clear name such as \"Letter to Landlord - June\"", "Copy it into an email to yourself"], answer: 2, why: "A clear file name makes the document easy to find later." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Making a document look neat",
          minutes: 5,
          goal: "Format a title, a list and body text so a page is easy to read.",
          text: [
            "Formatting means changing how text looks. First select the text: hold the mouse button down and drag across it, or double-click a word. Then use the toolbar at the top: B for bold, I for italic, the size box to make text bigger, and the list buttons for bullets or numbers.",
            "Use a Heading style for titles. In the toolbar find the box that says \"Normal text\" (Google) or \"Normal\" (Word) and choose Heading 1. Headings look neat and help screen readers.",
            "Keep it simple: one easy-to-read font, size 11 to 14 for body text, a bold title, short paragraphs and bulleted lists. If you make a mistake, press Ctrl+Z (Command+Z on a Mac) to undo."
          ],
          steps: ["Select the text you want to change.", "Choose Heading 1 for the title.", "Select a few lines and click the bulleted list button.", "Use B to make a key word bold.", "Press Ctrl+Z (Command+Z on Mac) to undo a mistake."],
          words: [["Formatting", "changing how text looks: size, bold, lists, headings."], ["Select", "mark text by dragging across it so you can change it."], ["Toolbar", "the row of buttons at the top of the app."]],
          slides: [
            { title: "Select, then change", bullets: ["Drag across text or double-click a word", "Then use the toolbar"] },
            { title: "Toolbar basics", bullets: ["B = bold, I = italic", "Size box makes text bigger or smaller", "List buttons make bullets or numbers"] },
            { title: "Use headings for titles", bullets: ["Change \"Normal text\" to Heading 1", "Neat, and helps screen readers"] },
            { title: "Keep it simple", bullets: ["One font, size 11 to 14", "Short paragraphs and bullets", "Ctrl+Z (Command+Z on Mac) undoes a mistake"] }
          ],
          tryIt: "In your practice document, type a title and three items, such as three things to bring to a family picnic. Make the title Heading 1, make the items a bulleted list, and make one word bold.",
          youCanNow: "format a page with a heading, a bulleted list and bold text.",
          quickCheck: [
            { objective: "O2", q: "Which text size does the lesson suggest for body text?", options: ["6 to 8", "20 to 24", "30 or more", "11 to 14"], answer: 3, why: "Size 11 to 14 is easy to read for body text." },
            { objective: "O2", q: "You want three lines to become a bulleted list. What would you do first?", options: ["Press Ctrl+Z", "Select the three lines", "Change the font for the whole page", "Click Share"], answer: 1, why: "You select text first, then choose the bulleted list button." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sharing safely and using comments",
          minutes: 5,
          goal: "Share a document with one person at the right access level and leave a comment.",
          text: [
            "Both apps have a Share button at the top right. Type the person's email address and choose what they can do: view only (read), comment (suggest), or edit (change the file). Give the lowest level the person needs.",
            "Be careful with \"Anyone with the link\". Anyone who gets the link, even by forwarding, can open the file. Do not use it for files with private details such as addresses, ID numbers or health information.",
            "Comments let people give feedback without changing your words. Select some text, then choose the comment button (a speech bubble) or right-click and choose Comment. When the issue is fixed, choose Resolve."
          ],
          steps: ["Click Share at the top right.", "Type the person's email address.", "Choose View, Comment or Edit; pick the lowest level they need.", "Send.", "To comment: select text, choose Comment, type, then post it."],
          words: [["Share", "let another person open your file."], ["Access level", "what a person can do with your file: view, comment or edit."], ["Comment", "a note on the side of the file that does not change the text."]],
          slides: [
            { title: "Share button, top right", bullets: ["Type their email", "Pick View, Comment or Edit", "Give the lowest level they need"] },
            { title: "Careful with \"Anyone with the link\"", bullets: ["Anyone who gets the link can open it", "Never for private details"] },
            { title: "Comments", bullets: ["Feedback without changing your words", "Select text, choose Comment", "Resolve it when fixed"] }
          ],
          tryIt: "Share your practice document with a friend or family member as view only. Then add a comment to your title that says \"Is this title clear?\"",
          youCanNow: "share a document at the right access level and use comments for feedback.",
          quickCheck: [
            { objective: "O3", q: "Which access level lets someone change the words in your file?", options: ["View only", "Comment", "Edit", "Download"], answer: 2, why: "Edit lets the person change the file; view and comment do not." },
            { objective: "O3", q: "A friend fixed the problem you raised in a comment. What would you do with the comment?", options: ["Choose Resolve", "Delete the whole document", "Share the file with Anyone with the link", "Leave a new comment on every line"], answer: 0, why: "Resolve closes a comment once the issue is fixed." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Writing and sharing a document",
        questions: [
          { objective: "O1", q: "Where does Google Docs save your work?", options: ["Only on a USB stick", "It does not save", "In Google Drive, online", "On a printer"], answer: 2, why: "Google Docs saves to Google Drive automatically." },
          { objective: "O1", q: "Which file name is best?", options: ["\"Untitled document\"", "\"asdf\"", "\"doc1\"", "\"Volunteer Day Flyer - May\""], answer: 3, why: "A clear name makes the file easy to find later." },
          { objective: "O2", q: "Before you make text bold, you first:", options: ["Close the app", "Print the page", "Select the text", "Share the file"], answer: 2, why: "You select text, then change it with the toolbar." },
          { objective: "O3", q: "Your neighbor only needs to read your flyer. Which access level do you give?", options: ["Edit", "Owner", "View only", "Anyone with the link"], answer: 2, why: "Give the lowest level the person needs." },
          { objective: "O3", q: "A document lists your home address and phone. Which sharing choice should you avoid?", options: ["Sharing with one person by email", "View only", "Comment only", "Anyone with the link"], answer: 3, why: "Anyone who gets the link could open a file with private details." }
        ]
      }
    },
    {
      name: "Chapter 2: Spreadsheets and finishing up",
      lessons: [
        {
          objectives: ["O4"],
          title: "Your first spreadsheet",
          minutes: 5,
          goal: "Make a spreadsheet with headings and five rows of data.",
          text: [
            "A spreadsheet is a grid of boxes for lists and numbers. Google's is Sheets (sheets.google.com); Microsoft's is Excel (choose Excel at microsoft365.com). It is great for budgets, sign-up lists, schedules and inventories.",
            "Columns go up and down and have letters (A, B, C). Rows go across and have numbers (1, 2, 3). Each box is a cell, named by its column and row, so B2 is column B, row 2.",
            "Put headings in row 1, like \"Item\" in A1 and \"Cost\" in B1. Then type one thing per row underneath. Type numbers without words (12.50, not \"12.50 dollars\") so the spreadsheet can do math with them."
          ],
          steps: ["Open Google Sheets or Excel on the web and choose a blank spreadsheet.", "Name the file.", "Type headings in row 1 (A1: Item, B1: Cost).", "Type five items in column A and their costs in column B.", "Make row 1 bold."],
          words: [["Spreadsheet", "a grid of cells for lists and numbers, like Google Sheets or Excel."], ["Cell", "one box in a spreadsheet, named by column letter and row number, like B2."], ["Column / row", "columns go up and down (letters); rows go across (numbers)."]],
          slides: [
            { title: "What a spreadsheet is for", bullets: ["Budgets and costs", "Sign-up lists and schedules", "Inventories"] },
            { title: "Columns, rows, cells", bullets: ["Columns: letters A, B, C", "Rows: numbers 1, 2, 3", "Cell B2 = column B, row 2"] },
            { title: "Set it up", bullets: ["Headings in row 1", "One item per row", "Numbers without words: 12.50"] }
          ],
          tryIt: "Make a spreadsheet called \"Practice Budget\". Put Item and Cost in row 1, then five real costs for a week or an event, such as groceries, bus fare or decorations.",
          youCanNow: "set up a spreadsheet with headings and rows of data.",
          quickCheck: [
            { objective: "O4", q: "In a spreadsheet, what is a cell?", options: ["A whole page of data", "One box, named by its column and row", "A formula that adds numbers", "The file name at the top"], answer: 1, why: "Each box is a cell, such as B2 for column B, row 2." },
            { objective: "O4", q: "You are making a sign-up list. Where would you type the headings \"Name\" and \"Phone\"?", options: ["At the bottom of the sheet", "In the file name", "All in one cell", "In row 1, one heading per column"], answer: 3, why: "Headings go in row 1, with one thing per row underneath." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Adding it up with a formula",
          minutes: 5,
          goal: "Use SUM to total a column so it updates by itself.",
          text: [
            "A formula tells the spreadsheet to do math. Every formula starts with an equals sign (=). To add cells B2 through B6, click an empty cell under them and type =SUM(B2:B6), then press Enter.",
            "The colon means \"through\", so B2:B6 is B2, B3, B4, B5 and B6. If you change a number, the total changes by itself. That is the big advantage over a calculator.",
            "Other simple formulas: =AVERAGE(B2:B6) gives the average, and =B2*2 doubles one cell. If you see an error like #NAME?, check the spelling and the equals sign."
          ],
          steps: ["Click the empty cell under your numbers.", "Type =SUM(B2:B6) using your own cell range.", "Press Enter.", "Change one number and watch the total update.", "Type the word Total in the cell to its left."],
          words: [["Formula", "an instruction that starts with = and tells the spreadsheet to calculate."], ["SUM", "a formula that adds up a group of cells."], ["Range", "a group of cells, written like B2:B6 (B2 through B6)."]],
          slides: [
            { title: "Formulas start with =", bullets: ["=SUM(B2:B6) adds B2 through B6", "Press Enter to see the answer"] },
            { title: "It updates by itself", bullets: ["Change a number", "The total changes too"] },
            { title: "More simple formulas", bullets: ["=AVERAGE(B2:B6) gives the average", "=B2*2 doubles one cell", "#NAME? means check the spelling"] }
          ],
          tryIt: "In your Practice Budget, type Total in A7 and =SUM(B2:B6) in B7. Then change one cost and check that the total changes.",
          youCanNow: "total a column with SUM and know the total updates when numbers change.",
          quickCheck: [
            { objective: "O5", q: "What is the big advantage of a SUM formula over adding on a calculator?", options: ["The total updates by itself when a number changes", "It makes the numbers bold", "It turns the sheet into a PDF", "It shares the file with others"], answer: 0, why: "A formula recalculates whenever a number in its range changes." },
            { objective: "O5", q: "Your costs are in B2 to B8. What would you type in B9 to total them?", options: ["SUM B2 B8", "=B2+B8", "=SUM(B2:B8)", "=AVERAGE(B2:B8)"], answer: 2, why: "=SUM(B2:B8) adds B2 through B8; =B2+B8 adds only two cells." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Saving as PDF and printing",
          minutes: 4,
          goal: "Download a document or spreadsheet as a PDF and print it.",
          text: [
            "A PDF is a file that looks the same on every phone and computer, and people cannot easily change it. Many job applications, offices and schools ask for PDFs.",
            "In Google Docs or Sheets: open the File menu, choose Download, then PDF. In Word or Excel on the web: open the File menu and look for Save as or Download, then choose PDF. The file goes to your Downloads folder.",
            "To print, open the File menu and choose Print, or press Ctrl+P (Command+P on a Mac). Check the preview first so nothing is cut off. At a library, ask staff how printing is paid for."
          ],
          steps: ["Open the File menu.", "Choose Download (Google) or Save as / Download (Microsoft).", "Choose PDF.", "Find the file in your Downloads folder.", "To print: Ctrl+P (Command+P on Mac), check the preview, then print."],
          words: [["PDF", "a file type that looks the same everywhere and is hard to change."], ["Downloads folder", "the place on a computer where downloaded files go."]],
          slides: [
            { title: "Why PDF?", bullets: ["Looks the same everywhere", "Hard to change by accident", "Often asked for by jobs and offices"] },
            { title: "Make a PDF", bullets: ["File menu, then Download (Google)", "File menu, then Save as or Download (Microsoft)", "Choose PDF; look in Downloads"] },
            { title: "Print it", bullets: ["Ctrl+P (Command+P on Mac)", "Check the preview first"] }
          ],
          tryIt: "Final task: make a one-page flyer or letter with a heading, a bulleted list and a contact line, plus a five-cost spreadsheet with a SUM total. Share the document as view only, then download both as PDFs.",
          youCanNow: "finish a document and a spreadsheet, share them safely and save them as PDFs.",
          quickCheck: [
            { objective: "O6", q: "Where does a downloaded PDF usually go?", options: ["Into your email inbox", "Into the recycle bin", "Into the cloud only", "Into your Downloads folder"], answer: 3, why: "Downloaded files go to the Downloads folder on your device." },
            { objective: "O6", q: "You are about to print a flyer at the library. What would you do first?", options: ["Print ten copies right away", "Check the print preview so nothing is cut off", "Delete the file", "Change the file to a spreadsheet"], answer: 1, why: "The preview shows whether anything is cut off before you pay to print." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Spreadsheets and finishing up",
        questions: [
          { objective: "O4", q: "What is cell C4?", options: ["Row C, column 4", "A formula", "The fourth file", "Column C, row 4"], answer: 3, why: "Cells are named by column letter, then row number." },
          { objective: "O4", q: "How should you type a cost of twelve dollars fifty?", options: ["\"twelve fifty\"", "\"12.50 dollars\"", "12.50", "\"about 12\""], answer: 2, why: "Numbers without words let the spreadsheet do math." },
          { objective: "O5", q: "Which formula adds cells B2 through B6?", options: ["add(B2-B6)", "SUM B2 B6", "=SUM(B2:B6)", "B2+B6"], answer: 2, why: "Formulas start with =, and B2:B6 means B2 through B6." },
          { objective: "O5", q: "You change one cost in your budget. What happens to the SUM total?", options: ["Nothing", "It turns into an error", "You must retype it", "It updates by itself"], answer: 3, why: "Formulas recalculate when numbers change." },
          { objective: "O6", q: "An office asks for your letter as a file that looks the same everywhere. You send a:", options: ["Screenshot of your phone", "Photo of the screen", "Link to anyone", "PDF"], answer: 3, why: "A PDF looks the same on every device." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Microsoft 365 and Google Docs Basics",
    questions: [
      { objective: "O1", q: "What do you need to use Google Docs for free?", options: ["A Google account", "A paid license", "A printer", "A Microsoft account"], answer: 0, why: "Google Docs is free with a Google account." },
      { objective: "O1", q: "Where does Word on the web save your files?", options: ["Google Drive", "A floppy disk", "OneDrive", "Nowhere"], answer: 2, why: "Microsoft saves to OneDrive." },
      { objective: "O1", q: "The cloud means:", options: ["The weather", "A virus", "A kind of printer", "Storage on the internet you can reach from any device"], answer: 3, why: "Cloud storage lets you open files anywhere after signing in." },
      { objective: "O1", q: "Where do you rename a Google Doc?", options: ["Click the name at the top left", "Restart the computer", "Print it first", "Email it to yourself"], answer: 0, why: "The file name is at the top left." },
      { objective: "O2", q: "To change how a word looks, you first:", options: ["Share the file", "Download a PDF", "Select the word", "Close the tab"], answer: 2, why: "Select first, then format." },
      { objective: "O2", q: "Which is the best way to make a title?", options: ["Type it in all capitals with spaces", "Put it at the bottom", "Make it tiny", "Choose the Heading 1 style"], answer: 3, why: "Heading styles look neat and help screen readers." },
      { objective: "O2", q: "You made a formatting mistake. What undoes it?", options: ["Ctrl+P", "Ctrl+Z (Command+Z on Mac)", "Closing the browser", "The Share button"], answer: 1, why: "Ctrl+Z or Command+Z undoes the last change." },
      { objective: "O3", q: "Where is the Share button in both apps?", options: ["Top right", "Bottom of the page", "In the print preview", "In the spreadsheet cell"], answer: 0, why: "Both apps put Share at the top right." },
      { objective: "O3", q: "Your coworker should suggest changes but not change your words. Give them:", options: ["Edit", "Comment", "Owner", "No access"], answer: 1, why: "Comment access lets them suggest without editing." },
      { objective: "O3", q: "Why be careful with \"Anyone with the link\"?", options: ["It deletes the file", "Anyone who gets the link can open it", "It costs money", "It turns the file into a PDF"], answer: 1, why: "Forwarded links can reach strangers." },
      { objective: "O3", q: "A comment is:", options: ["A change to your text", "A note on the side that does not change the text", "A PDF", "A formula"], answer: 1, why: "Comments give feedback without editing." },
      { objective: "O4", q: "Which is a good use for a spreadsheet?", options: ["A family budget", "A love letter", "A photo album", "A phone call"], answer: 0, why: "Spreadsheets are for lists and numbers." },
      { objective: "O4", q: "Columns in a spreadsheet are named with:", options: ["Numbers", "Letters", "Colors", "Emojis"], answer: 1, why: "Columns use letters; rows use numbers." },
      { objective: "O4", q: "Where do headings like \"Item\" and \"Cost\" usually go?", options: ["Row 1", "The last row", "In a comment", "In the file name"], answer: 0, why: "Headings go in the top row." },
      { objective: "O5", q: "Every formula starts with:", options: ["A dollar sign", "An equals sign (=)", "The word Total", "A space"], answer: 1, why: "The = tells the spreadsheet it is a formula." },
      { objective: "O5", q: "In =SUM(B2:B6), the colon means:", options: ["Divide", "Through", "Minus", "Stop"], answer: 1, why: "B2:B6 means B2 through B6." },
      { objective: "O5", q: "You see #NAME? in a cell. What should you check?", options: ["The printer", "The spelling of the formula", "Your password", "The file color"], answer: 1, why: "#NAME? usually means a misspelled formula." },
      { objective: "O5", q: "Which formula gives the average of B2 to B6?", options: ["=AVERAGE(B2:B6)", "=SUM(B2)", "AVG B2-B6", "=B2"], answer: 0, why: "AVERAGE works out the average of a range." },
      { objective: "O6", q: "In Google Docs, how do you make a PDF?", options: ["File menu, Download, PDF", "Share, Anyone with the link", "Press Ctrl+Z", "Right-click and Comment"], answer: 0, why: "File, Download, PDF saves a PDF." },
      { objective: "O6", q: "Before printing, you should:", options: ["Check the print preview", "Delete the file", "Share it with everyone", "Change all fonts"], answer: 0, why: "The preview shows if anything is cut off." }
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
      9,
      13,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Neat one-page document",
        objective: "O2",
        notYet: "The title, the bulleted list or the contact line is missing.",
        meets: "A bold Heading 1 title, a bulleted list and a contact line, all on one page.",
        exceeds: "Also uses one easy font, short paragraphs and a clear file name."
      },
      {
        name: "Safe sharing",
        objective: "O3",
        notYet: "The document is not shared, or it is shared with edit access or \"Anyone with the link\".",
        meets: "Shared with one person as view only.",
        exceeds: "Also leaves a comment asking for feedback and resolves it after a reply."
      },
      {
        name: "Spreadsheet",
        objective: "O4",
        notYet: "Headings are missing or fewer than five costs are listed.",
        meets: "Item and Cost headings in row 1 and at least five costs, one per row, typed as numbers.",
        exceeds: "Row 1 is bold and the file has a clear name."
      },
      {
        name: "SUM total",
        objective: "O5",
        notYet: "The total is typed by hand or the formula gives an error.",
        meets: "A SUM formula gives the right total and updates when a cost changes.",
        exceeds: "Also labels the total and adds an AVERAGE formula."
      },
      {
        name: "PDFs",
        objective: "O6",
        notYet: "One or both files are not saved as PDFs.",
        meets: "Both the document and the spreadsheet are downloaded as PDFs and can be found in Downloads.",
        exceeds: "Also checks the print preview so nothing is cut off."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the final task",
      "Learners who report making a real document, budget or sign-up sheet in the 30 days after the course (follow-up survey)",
      "Learners who send a PDF for a job application, school or office form without help",
      "Learners who go on to a next course, such as Email and Online Communication or a job-search course"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or tablet with internet and a web browser (a phone works but is harder)",
      "A free Google account or Microsoft account",
      "A real task to practise on, such as a flyer, a letter or a weekly budget",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Check before the session that every learner can sign in to a Google or Microsoft account; help create accounts beforehand so class time goes to the documents.",
      "Let each learner pick Google or Microsoft and stay with it for the whole course; pair learners using the same one.",
      "For sharing practice, have learners share with a partner in the room as view only, never with \"Anyone with the link\", and use no real addresses or ID numbers.",
      "In computer labs, remind learners to sign out at the end so the next person cannot open their files.",
      "If printing costs money where you meet, show the print preview and the PDF download, and print only when needed."
    ]
  }
};
