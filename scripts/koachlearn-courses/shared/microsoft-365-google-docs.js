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
  chapters: [
    {
      name: "Chapter 1: Writing and sharing a document",
      lessons: [
        {
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
          youCanNow: "open a new document, name it and know it saves to the cloud by itself."
        },
        {
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
          youCanNow: "format a page with a heading, a bulleted list and bold text."
        },
        {
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
          youCanNow: "share a document at the right access level and use comments for feedback."
        }
      ],
      check: {
        title: "Knowledge Check 1: Writing and sharing a document",
        questions: [
          { q: "Where does Google Docs save your work?", options: ["Only on a USB stick", "It does not save", "In Google Drive, online", "On a printer"], answer: 2, why: "Google Docs saves to Google Drive automatically." },
          { q: "Which file name is best?", options: ["\"Untitled document\"", "\"asdf\"", "\"doc1\"", "\"Volunteer Day Flyer - May\""], answer: 3, why: "A clear name makes the file easy to find later." },
          { q: "Before you make text bold, you first:", options: ["Close the app", "Print the page", "Select the text", "Share the file"], answer: 2, why: "You select text, then change it with the toolbar." },
          { q: "Your neighbor only needs to read your flyer. Which access level do you give?", options: ["Edit", "Owner", "View only", "Anyone with the link"], answer: 2, why: "Give the lowest level the person needs." },
          { q: "A document lists your home address and phone. Which sharing choice should you avoid?", options: ["Sharing with one person by email", "View only", "Comment only", "Anyone with the link"], answer: 3, why: "Anyone who gets the link could open a file with private details." }
        ]
      }
    },
    {
      name: "Chapter 2: Spreadsheets and finishing up",
      lessons: [
        {
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
          youCanNow: "set up a spreadsheet with headings and rows of data."
        },
        {
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
          youCanNow: "total a column with SUM and know the total updates when numbers change."
        },
        {
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
          youCanNow: "finish a document and a spreadsheet, share them safely and save them as PDFs."
        }
      ],
      check: {
        title: "Knowledge Check 2: Spreadsheets and finishing up",
        questions: [
          { q: "What is cell C4?", options: ["Row C, column 4", "A formula", "The fourth file", "Column C, row 4"], answer: 3, why: "Cells are named by column letter, then row number." },
          { q: "How should you type a cost of twelve dollars fifty?", options: ["\"twelve fifty\"", "\"12.50 dollars\"", "12.50", "\"about 12\""], answer: 2, why: "Numbers without words let the spreadsheet do math." },
          { q: "Which formula adds cells B2 through B6?", options: ["add(B2-B6)", "SUM B2 B6", "=SUM(B2:B6)", "B2+B6"], answer: 2, why: "Formulas start with =, and B2:B6 means B2 through B6." },
          { q: "You change one cost in your budget. What happens to the SUM total?", options: ["Nothing", "It turns into an error", "You must retype it", "It updates by itself"], answer: 3, why: "Formulas recalculate when numbers change." },
          { q: "An office asks for your letter as a file that looks the same everywhere. You send a:", options: ["Screenshot of your phone", "Photo of the screen", "Link to anyone", "PDF"], answer: 3, why: "A PDF looks the same on every device." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Microsoft 365 and Google Docs Basics",
    questions: [
      { q: "What do you need to use Google Docs for free?", options: ["A Google account", "A paid license", "A printer", "A Microsoft account"], answer: 0, why: "Google Docs is free with a Google account." },
      { q: "Where does Word on the web save your files?", options: ["Google Drive", "A floppy disk", "OneDrive", "Nowhere"], answer: 2, why: "Microsoft saves to OneDrive." },
      { q: "The cloud means:", options: ["The weather", "A virus", "A kind of printer", "Storage on the internet you can reach from any device"], answer: 3, why: "Cloud storage lets you open files anywhere after signing in." },
      { q: "Where do you rename a Google Doc?", options: ["Click the name at the top left", "Restart the computer", "Print it first", "Email it to yourself"], answer: 0, why: "The file name is at the top left." },
      { q: "To change how a word looks, you first:", options: ["Share the file", "Download a PDF", "Select the word", "Close the tab"], answer: 2, why: "Select first, then format." },
      { q: "Which is the best way to make a title?", options: ["Type it in all capitals with spaces", "Put it at the bottom", "Make it tiny", "Choose the Heading 1 style"], answer: 3, why: "Heading styles look neat and help screen readers." },
      { q: "You made a formatting mistake. What undoes it?", options: ["Ctrl+P", "Ctrl+Z (Command+Z on Mac)", "Closing the browser", "The Share button"], answer: 1, why: "Ctrl+Z or Command+Z undoes the last change." },
      { q: "Where is the Share button in both apps?", options: ["Top right", "Bottom of the page", "In the print preview", "In the spreadsheet cell"], answer: 0, why: "Both apps put Share at the top right." },
      { q: "Your coworker should suggest changes but not change your words. Give them:", options: ["Edit", "Comment", "Owner", "No access"], answer: 1, why: "Comment access lets them suggest without editing." },
      { q: "Why be careful with \"Anyone with the link\"?", options: ["It deletes the file", "Anyone who gets the link can open it", "It costs money", "It turns the file into a PDF"], answer: 1, why: "Forwarded links can reach strangers." },
      { q: "A comment is:", options: ["A change to your text", "A note on the side that does not change the text", "A PDF", "A formula"], answer: 1, why: "Comments give feedback without editing." },
      { q: "Which is a good use for a spreadsheet?", options: ["A family budget", "A love letter", "A photo album", "A phone call"], answer: 0, why: "Spreadsheets are for lists and numbers." },
      { q: "Columns in a spreadsheet are named with:", options: ["Numbers", "Letters", "Colors", "Emojis"], answer: 1, why: "Columns use letters; rows use numbers." },
      { q: "Where do headings like \"Item\" and \"Cost\" usually go?", options: ["Row 1", "The last row", "In a comment", "In the file name"], answer: 0, why: "Headings go in the top row." },
      { q: "Every formula starts with:", options: ["A dollar sign", "An equals sign (=)", "The word Total", "A space"], answer: 1, why: "The = tells the spreadsheet it is a formula." },
      { q: "In =SUM(B2:B6), the colon means:", options: ["Divide", "Through", "Minus", "Stop"], answer: 1, why: "B2:B6 means B2 through B6." },
      { q: "You see #NAME? in a cell. What should you check?", options: ["The printer", "The spelling of the formula", "Your password", "The file color"], answer: 1, why: "#NAME? usually means a misspelled formula." },
      { q: "Which formula gives the average of B2 to B6?", options: ["=AVERAGE(B2:B6)", "=SUM(B2)", "AVG B2-B6", "=B2"], answer: 0, why: "AVERAGE works out the average of a range." },
      { q: "In Google Docs, how do you make a PDF?", options: ["File menu, Download, PDF", "Share, Anyone with the link", "Press Ctrl+Z", "Right-click and Comment"], answer: 0, why: "File, Download, PDF saves a PDF." },
      { q: "Before printing, you should:", options: ["Check the print preview", "Delete the file", "Share it with everyone", "Change all fonts"], answer: 0, why: "The preview shows if anything is cut off." }
    ]
  }
};
