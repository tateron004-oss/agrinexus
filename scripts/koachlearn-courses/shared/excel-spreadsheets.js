"use strict";

// Koach Learn course: shared -> "Excel and Spreadsheets for Work" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Categories: Small Business, Non Profits, Veterans (military), Workforce Development, Undeserved Community. Mixed everyday examples.
// Works in Microsoft Excel (desktop or free on the web) and Google Sheets. Where menu names differ, both are given or the action is described.

module.exports = {
  id: "excel-spreadsheets",
  category: "Small Business",
  name: "Excel and Spreadsheets for Work",
  skills: "Entering and formatting data, Adding totals and averages with SUM and AVERAGE, Making decisions with IF, Sorting and filtering, Making a simple chart, Freezing headers and sharing a sheet",
  outcome: "build a clean work spreadsheet in Excel or Google Sheets: enter and format data, add totals and averages with formulas, label rows with IF, sort and filter, make a simple chart, freeze the header row, and share it safely with a coworker.",
  about: [
    "Spreadsheets are used in almost every workplace: a shop tracks sales, a nonprofit tracks donations and volunteer hours, a crew lead tracks shifts, and a family tracks a budget. Knowing them well is a skill employers ask for.",
    "This course works in Microsoft Excel (on a computer, or free on the web at office.com with a Microsoft account) and in Google Sheets (free with a Google account at sheets.google.com). The formulas are the same in both. When the menus are named differently, the lesson tells you both or describes the action.",
    "Each lesson takes about five minutes. Read the lesson, look over the slides, then do the \"Try it now\" task in a real spreadsheet. You will build one practice sheet across the course. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build a \"Weekly Sales\" (or \"Volunteer Hours\" or \"Shift Hours\") sheet with at least 8 rows: headers in bold, money shown as currency, a SUM total and an AVERAGE, an IF column that labels each row (for example \"Goal met\" or \"Below goal\"), the data sorted from highest to lowest, a filter on the header row, a column chart, the top row frozen, and the file shared with one person as a viewer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Small business owners, their staff, job seekers and volunteers who need to track sales, hours, stock or donations at work. Many have seen spreadsheets but never built one from scratch.",
    startingPoint: "Can use a computer or phone, type and open a web browser. Little or no use of formulas, sorting, charts or sharing settings.",
    gap: "Many jobs and small businesses expect basic spreadsheet skills, and records kept on paper or in messy sheets cause mistakes. Building a clean sheet with totals, labels, a chart and safe sharing saves time and makes a learner more hireable.",
    constraints: [
      "Reading level: plain words and short steps",
      "Devices: a computer with Excel, Excel on the web or Google Sheets works best; a phone is harder",
      "Time: about 5 minutes per lesson plus hands-on practice",
      "Menus differ slightly between Excel and Google Sheets; both are shown",
      "Privacy: no passwords, Social Security numbers or bank details in practice or shared sheets"
    ],
    prerequisites: "None. Learners new to computers can take a basic computer skills course first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "In a blank Excel or Google Sheets file", action: "enter a small table with headers in row 1 and one record in each row", standard: "with one kind of data per column" },
    { id: "O2", condition: "Given a table of data", action: "format the headers in bold, money as currency and columns to fit", standard: "so it reads clearly at a glance" },
    { id: "O3", condition: "Given a column of numbers", action: "write SUM, AVERAGE and row formulas and copy them down with the fill handle", standard: "with correct results and no error messages" },
    { id: "O4", condition: "Given a rule such as a sales goal or 40 hours", action: "write an IF formula that labels each row", standard: "with the right label on every row" },
    { id: "O5", condition: "Given a table of at least 8 rows", action: "sort the whole table, add a filter and freeze the header row", standard: "without mixing up any rows" },
    { id: "O6", condition: "Given labels and numbers", action: "make a column chart and share the file with the lowest access the person needs", standard: "with no private information in the shared sheet" }
  ],
  chapters: [
    {
      name: "Chapter 1: Building your sheet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cells, rows, columns and entering data",
          minutes: 5,
          goal: "Open a new spreadsheet and enter a small table of data with headers.",
          text: [
            "A spreadsheet is a grid. Columns run up and down and have letters (A, B, C). Rows run across and have numbers (1, 2, 3). Each box is a cell, named by its column and row: the top-left cell is A1. A file can hold several sheets, shown as tabs at the bottom.",
            "To enter data, click a cell, type, and press Enter to move down or Tab to move right. Put headers in row 1, such as Date, Item, Quantity and Price, and one record in each row below. Keep one kind of data per column: only dates in the Date column, only numbers in Price.",
            "To fix a cell, click it and type over it, or double-click to edit part of it. Undo (Ctrl+Z on Windows, Cmd+Z on a Mac) takes back your last change. Excel on the web and Google Sheets save as you work; in desktop Excel, save often.",
            "To start: in Google Sheets, go to sheets.google.com and choose a blank spreadsheet. In Excel, open Excel (or Excel on the web at office.com) and choose a blank workbook."
          ],
          steps: ["Open a blank spreadsheet in Google Sheets or Excel.", "Click cell A1 and type your first header. Press Tab to move right.", "Type the other headers in row 1.", "Enter one record per row starting in row 2.", "Give the file a clear name, such as \"Weekly Sales - March\"."],
          words: [["Cell", "one box in the grid, named by column letter and row number, like B3."], ["Header", "the label at the top of a column that says what is in it."], ["Workbook", "an Excel file; it can hold several sheets."]],
          slides: [
            { title: "The grid", bullets: ["Columns have letters; rows have numbers", "A cell is named like A1 or B3", "Tabs at the bottom are separate sheets"] },
            { title: "Entering data", bullets: ["Click, type, then Enter (down) or Tab (right)", "Headers in row 1", "One record per row, one kind of data per column"] },
            { title: "Fixing and saving", bullets: ["Type over a cell or double-click to edit", "Undo: Ctrl+Z (Windows) or Cmd+Z (Mac)", "Web versions save as you go"] }
          ],
          tryIt: "Open a blank spreadsheet. In row 1 type the headers Day, Item, Quantity, Price. Enter 8 rows of practice sales (for example Mon, Coffee, 12, 3.50). Name the file \"Practice Sales\".",
          youCanNow: "open a spreadsheet, find any cell by its name, and enter a clean table with headers.",
          quickCheck: [
            { objective: "O1", q: "What is a cell?", options: ["A whole column", "A tab at the bottom of the file", "One box in the grid, named by its column and row", "The name of the file"], answer: 2, why: "Each box in the grid is a cell, named by its column letter and row number, such as A1." },
            { objective: "O1", q: "You are making a price list. What goes in the Price column?", options: ["Prices and item names mixed together", "Only prices", "Prices and notes about each customer", "Anything that fits"], answer: 1, why: "Keep one kind of data per column, so the Price column holds only numbers." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Formatting so it is easy to read",
          minutes: 4,
          goal: "Format headers, money and column widths so the sheet is clear.",
          text: [
            "Formatting changes how data looks, not what it is. Good formatting makes a sheet easy to read at a glance.",
            "Make headers bold: select row 1 and click the B (Bold) button on the toolbar, or press Ctrl+B (Cmd+B on a Mac). You can also add a fill color to the header row.",
            "Show money as currency: select the Price column, then open the number format menu and choose Currency. In Excel this is on the Home tab; in Google Sheets it is under Format, then Number, and there is also a $ button on the toolbar.",
            "Make columns fit: double-click the line between two column letters at the top, and the column on the left resizes to fit its longest entry. This works in both Excel and Google Sheets."
          ],
          steps: ["Select row 1 by clicking the number 1 at the left.", "Click Bold (B) or press Ctrl+B.", "Select the Price column by clicking its letter.", "Choose Currency from the number format menu (Excel: Home tab; Sheets: Format > Number, or the $ button).", "Double-click the border between column letters to auto-fit the width."],
          words: [["Formatting", "changing how data looks (bold, color, currency) without changing the value."], ["Select", "click or drag over cells to choose them before you act on them."]],
          slides: [
            { title: "Formatting changes the look", bullets: ["Not the value inside", "Makes a sheet easy to read"] },
            { title: "Bold headers", bullets: ["Select row 1", "Click B or press Ctrl+B (Cmd+B on Mac)", "Add a fill color if you like"] },
            { title: "Money as currency", bullets: ["Select the column", "Excel: Home tab number format menu", "Sheets: Format > Number, or the $ button"] },
            { title: "Fit the columns", bullets: ["Double-click the line between column letters", "Works in Excel and Google Sheets"] }
          ],
          tryIt: "In your Practice Sales sheet, make row 1 bold with a light fill color, show the Price column as currency, and auto-fit every column.",
          youCanNow: "format headers, money and column widths so a sheet is clear and professional.",
          quickCheck: [
            { objective: "O2", q: "What does formatting change?", options: ["How the data looks, not what it is", "The numbers in your cells", "The formulas in your sheet", "Who can open the file"], answer: 0, why: "Formatting changes how data looks, such as bold or currency, not its value." },
            { objective: "O2", q: "A column is too narrow and cuts off the text. What do you do?", options: ["Delete the long entries", "Make the font tiny", "Retype the text in two cells", "Double-click the line between the column letters at the top"], answer: 3, why: "Double-clicking the border resizes the column to fit its longest entry." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Totals and averages with SUM and AVERAGE",
          minutes: 5,
          goal: "Write SUM and AVERAGE formulas and copy a formula down a column.",
          text: [
            "A formula always starts with an equals sign (=). It can do math with cell names: =C2*D2 multiplies the quantity in C2 by the price in D2. If you change C2, the answer updates by itself.",
            "SUM adds a range of cells. A range is written as first cell, colon, last cell: =SUM(E2:E9) adds E2 through E9. AVERAGE finds the average: =AVERAGE(E2:E9). Both work the same way in Excel and Google Sheets.",
            "To copy a formula down a column, click the cell with the formula, then drag the small square at its bottom-right corner (the fill handle) down. The cell names change for each row: E2 becomes E3, E4 and so on.",
            "Check your work: if a formula shows an error such as #NAME? or #VALUE!, look for a typo in the function name or text in a number column."
          ],
          steps: ["In E1 type the header Total.", "In E2 type =C2*D2 and press Enter.", "Drag the fill handle from E2 down to the last row.", "Below the last row, type =SUM(E2:E9) for the grand total.", "Under that, type =AVERAGE(E2:E9) for the average sale."],
          words: [["Formula", "a calculation in a cell that starts with = and updates when the data changes."], ["Range", "a block of cells written first:last, like E2:E9."], ["Fill handle", "the small square at the bottom-right of a selected cell that you drag to copy."]],
          slides: [
            { title: "Formulas start with =", bullets: ["=C2*D2 multiplies two cells", "Change the data and the answer updates"] },
            { title: "SUM and AVERAGE", bullets: ["=SUM(E2:E9) adds a range", "=AVERAGE(E2:E9) finds the average", "Same in Excel and Google Sheets"] },
            { title: "Copy a formula down", bullets: ["Drag the fill handle at the cell's corner", "Cell names adjust for each row"] },
            { title: "Errors", bullets: ["#NAME?: check the spelling", "#VALUE!: text where a number should be"] }
          ],
          tryIt: "In your sheet, add a Total column with =C2*D2 copied down, then add a grand total with SUM and the average sale with AVERAGE under the column. Change one quantity and watch the totals update.",
          youCanNow: "write SUM and AVERAGE formulas, multiply cells, and copy a formula down a column.",
          quickCheck: [
            { objective: "O3", q: "What does =C2*D2 do?", options: ["Adds C2 and D2", "Multiplies the value in C2 by the value in D2", "Copies C2 into D2", "Shows an error"], answer: 1, why: "The * sign multiplies, so =C2*D2 multiplies quantity by price." },
            { objective: "O3", q: "You need the total of E2 through E9. What do you type?", options: ["SUM E2 to E9", "=E2+E9", "=SUM(E2:E9)", "=TOTAL E2-E9"], answer: 2, why: "SUM adds a range written as first cell, colon, last cell, and every formula starts with =." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Building your sheet",
        questions: [
          { objective: "O1", q: "What is the name of the cell in column C, row 4?", options: ["4C", "C4", "Row C", "Cell 34"], answer: 1, why: "A cell is named by its column letter, then its row number." },
          { objective: "O1", q: "Where should your headers go?", options: ["In row 1, one per column", "At the bottom", "In random cells", "In a separate file"], answer: 0, why: "Headers in row 1 label each column of data below." },
          { objective: "O2", q: "You want prices to show with a dollar sign. What do you do?", options: ["Type $ before every number", "Make the column bold", "Delete the prices", "Choose Currency from the number format menu"], answer: 3, why: "Currency formatting adds the symbol and decimals for every cell." },
          { objective: "O3", q: "Which formula adds the cells B2 through B10?", options: ["SUM B2-B10", "=ADD(B2,B10)", "=SUM(B2:B10)", "B2+B10"], answer: 2, why: "Formulas start with =, and a range uses a colon." },
          { objective: "O3", q: "What happens when you drag the fill handle down from a cell with =C2*D2?", options: ["The formula is copied and adjusts to each row", "The cell is deleted", "Every row gets exactly =C2*D2", "The sheet is shared"], answer: 0, why: "Cell names change row by row: C3*D3, C4*D4 and so on." }
        ]
      }
    },
    {
      name: "Chapter 2: Working with your data",
      lessons: [
        {
          objectives: ["O4"],
          title: "Making decisions with IF",
          minutes: 5,
          goal: "Write an IF formula that labels each row based on a rule.",
          text: [
            "IF checks a condition and shows one result if it is true and another if it is false. The pattern is =IF(test, value if true, value if false).",
            "Examples: =IF(E2>=50,\"Goal met\",\"Below goal\") labels a sale. =IF(C2>40,\"Overtime\",\"Regular\") labels a week of hours. =IF(D2=\"\",\"Missing\",\"OK\") flags an empty cell. Text answers go inside double quotes; numbers do not.",
            "Comparison signs: > greater than, < less than, >= greater than or equal to, <= less than or equal to, = equal to, <> not equal to.",
            "IF works the same in Excel and Google Sheets. If your sheet's region setting uses commas for decimals, the separator may be a semicolon (;) instead of a comma; the app will show you the pattern as you type."
          ],
          steps: ["Add a header, such as Status, to the next empty column.", "In row 2 type =IF(", "Type the test, such as E2>=50, then a comma.", "Type the true result in quotes, a comma, the false result in quotes, and ).", "Press Enter and copy the formula down with the fill handle."],
          words: [["IF", "a function that shows one result when a test is true and another when it is false."], ["Condition", "the test in an IF formula, such as E2>=50."]],
          slides: [
            { title: "The IF pattern", bullets: ["=IF(test, if true, if false)", "Same in Excel and Google Sheets"] },
            { title: "Examples", bullets: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(C2>40,\"Overtime\",\"Regular\")", "Text in double quotes; numbers without"] },
            { title: "Comparison signs", bullets: ["> greater, < less", ">= at least, <= at most", "= equal, <> not equal"] }
          ],
          tryIt: "Add a Status column to your sheet with =IF(E2>=50,\"Goal met\",\"Below goal\") and copy it down. Change one total so it crosses 50 and watch the label change.",
          youCanNow: "write an IF formula that labels rows automatically based on a rule.",
          quickCheck: [
            { objective: "O4", q: "What does the IF function do?", options: ["Adds a column of numbers", "Sorts the table", "Makes a chart", "Shows one result if a test is true and another if it is false"], answer: 3, why: "The pattern is =IF(test, value if true, value if false)." },
            { objective: "O4", q: "You want to label sales of 50 or more as \"Goal met\". Which formula do you type in row 2?", options: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(E2<50,Goal met,Below goal)", "=SUM(E2>=50)", "=IF(\"Goal met\")"], answer: 0, why: "The test E2>=50 comes first, and text results go inside double quotes." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sorting, filtering and freezing the header row",
          minutes: 5,
          goal: "Sort your data, filter it to show only some rows, and freeze the header row.",
          text: [
            "Sorting puts rows in order, such as highest sale first or names A to Z. Filtering hides rows you do not need right now, such as showing only \"Below goal\" rows. Neither deletes any data.",
            "Excel: click any cell in your table, go to the Data tab, and choose Sort to pick a column and an order, or choose Filter to add drop-down arrows to the header row. Google Sheets: select your data, open the Data menu and choose Sort range (tick that the data has a header row), or choose Create a filter to add the arrows. Click an arrow in a header to sort or to tick only the values you want to see.",
            "Always sort the whole table, not one column alone, or rows get mixed up. Selecting one cell inside the table in Excel, or the full range in Sheets, keeps rows together.",
            "Freezing keeps the header row on screen when you scroll down a long list. Excel: View tab, Freeze Panes, then Freeze Top Row. Google Sheets: View menu, Freeze, then 1 row."
          ],
          steps: ["Click inside your table (Excel) or select the whole table (Sheets).", "Sort: Excel Data tab > Sort; Sheets Data > Sort range, with a header row.", "Filter: Excel Data tab > Filter; Sheets Data > Create a filter.", "Use the arrow in a header to show only the rows you want.", "Freeze: Excel View > Freeze Panes > Freeze Top Row; Sheets View > Freeze > 1 row."],
          words: [["Sort", "put rows in order by one column, keeping each row together."], ["Filter", "hide rows that do not match what you choose, without deleting them."], ["Freeze", "keep rows or columns on screen while you scroll."]],
          slides: [
            { title: "Sort and filter", bullets: ["Sort: put rows in order", "Filter: show only the rows you want", "Neither deletes data"] },
            { title: "In Excel", bullets: ["Data tab > Sort", "Data tab > Filter adds header arrows", "View > Freeze Panes > Freeze Top Row"] },
            { title: "In Google Sheets", bullets: ["Data > Sort range (data has a header row)", "Data > Create a filter", "View > Freeze > 1 row"] },
            { title: "Keep rows together", bullets: ["Sort the whole table, never one column alone"] }
          ],
          tryIt: "Sort your sheet by Total from largest to smallest. Add a filter and show only \"Below goal\" rows, then clear the filter. Freeze the top row and scroll down to check the headers stay.",
          youCanNow: "sort and filter data safely and freeze the header row.",
          quickCheck: [
            { objective: "O5", q: "What does freezing the header row do?", options: ["Locks the file so no one can edit", "Keeps the header row on screen when you scroll down", "Deletes the rows below", "Turns the header blue"], answer: 1, why: "Freezing keeps the header visible while you scroll through a long list." },
            { objective: "O5", q: "You want to see only the \"Below goal\" rows for now, without losing any data. What do you use?", options: ["Delete the other rows", "Sort one column alone", "A filter on the header row", "Freeze Panes"], answer: 2, why: "A filter hides the rows you do not need right now and deletes nothing." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Making a chart and sharing your sheet",
          minutes: 5,
          goal: "Make a simple column chart and share the sheet with the right permission.",
          text: [
            "A chart turns numbers into a picture. A column chart is good for comparing amounts, such as sales by day or volunteer hours by person.",
            "Select two columns: the labels (such as Day) and the numbers (such as Total), including the headers. To select two columns that are not next to each other, hold Ctrl (Cmd on a Mac) while you select the second one. Excel: go to the Insert tab and choose a column chart (or Recommended Charts). Google Sheets: open the Insert menu and choose Chart; the chart editor opens on the right, where you can pick Column chart. Click the chart title to rename it.",
            "To share: in Google Sheets, click the Share button at the top right, type the person's email, and choose Viewer, Commenter or Editor. In Excel, the file must be saved to OneDrive or SharePoint; then click Share, add the email, and choose whether they can edit or only view.",
            "Share safely: give the lowest access the person needs (view-only if they just need to read it), and never put passwords, Social Security numbers or bank details in a shared sheet."
          ],
          steps: ["Select the label column and the number column, with headers.", "Excel: Insert tab > a column chart. Sheets: Insert > Chart, then choose Column chart.", "Rename the chart title.", "Click Share, add the person's email.", "Choose view-only unless they need to edit, then send."],
          words: [["Column chart", "a chart with bars standing up, good for comparing amounts."], ["Viewer", "someone who can see a shared file but not change it."], ["Editor", "someone who can change a shared file."]],
          slides: [
            { title: "Pick the right chart", bullets: ["Column chart: compare amounts", "Example: sales by day, hours by person"] },
            { title: "Make the chart", bullets: ["Select labels and numbers with headers", "Excel: Insert tab > column chart", "Sheets: Insert > Chart > Column chart"] },
            { title: "Share it", bullets: ["Click Share, add an email", "Choose view or edit", "Excel files must be on OneDrive or SharePoint"] },
            { title: "Share safely", bullets: ["Give the lowest access needed", "No passwords, ID or bank numbers in shared sheets"] }
          ],
          tryIt: "Final task: finish your sheet with at least 8 rows, bold headers, currency, SUM and AVERAGE, an IF Status column, sorted highest to lowest, a filter, a column chart of Day and Total, and the top row frozen. Then share it with one person as a viewer.",
          youCanNow: "make a column chart from your data and share a spreadsheet with the right permission.",
          quickCheck: [
            { objective: "O6", q: "Which chart is good for comparing amounts, such as hours by person?", options: ["A column chart", "A blank sheet", "A filter", "A frozen row"], answer: 0, why: "The lesson says a column chart is good for comparing amounts." },
            { objective: "O6", q: "Your manager only needs to read your sheet. Which access do you give when you share it?", options: ["Editor", "Owner", "Anyone with the link can edit", "Viewer"], answer: 3, why: "Give the lowest access the person needs; view-only if they just need to read it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Working with your data",
        questions: [
          { objective: "O4", q: "What does =IF(C2>40,\"Overtime\",\"Regular\") show when C2 is 45?", options: ["Regular", "45", "Overtime", "An error"], answer: 2, why: "45 is greater than 40, so the true result shows." },
          { objective: "O4", q: "In an IF formula, where do text results go?", options: ["Inside double quotes", "Inside brackets", "After a # sign", "Nowhere"], answer: 0, why: "Text results must be in double quotes." },
          { objective: "O5", q: "What does a filter do?", options: ["Deletes rows", "Changes the numbers", "Shares the file", "Hides rows that do not match, without deleting them"], answer: 3, why: "Filtering only hides rows; clearing it shows them again." },
          { objective: "O5", q: "How do you keep the header row on screen in Google Sheets?", options: ["Format > Bold", "View > Freeze > 1 row", "Insert > Chart", "Data > Sort range"], answer: 1, why: "Freezing row 1 keeps it visible as you scroll." },
          { objective: "O6", q: "A volunteer only needs to read your sheet. Which access do you give?", options: ["Editor", "Owner", "Viewer", "Nothing; send your password"], answer: 2, why: "Give the lowest access the person needs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Excel and Spreadsheets for Work",
    questions: [
      { objective: "O1", q: "In a spreadsheet, columns are labeled with:", options: ["Numbers", "Letters", "Colors", "Dates"], answer: 1, why: "Columns use letters; rows use numbers." },
      { objective: "O1", q: "Which key moves you one cell to the right after typing?", options: ["Tab", "Enter", "Shift", "Esc"], answer: 0, why: "Tab moves right; Enter moves down." },
      { objective: "O1", q: "Which is the best layout for a donations list?", options: ["Each donation in a different file", "All data in one cell", "Random cells across the sheet", "Headers in row 1 and one donation per row"], answer: 3, why: "One record per row under clear headers keeps data usable." },
      { objective: "O1", q: "You typed the wrong number. The fastest way to take back your last change is:", options: ["Close the file", "Undo: Ctrl+Z (Cmd+Z on Mac)", "Delete the column", "Start a new file"], answer: 1, why: "Undo reverses your last action." },
      { objective: "O2", q: "Formatting a number as currency:", options: ["Changes how it looks, not its value", "Doubles the value", "Deletes the number", "Turns it into text you cannot add"], answer: 0, why: "Formatting changes the look only." },
      { objective: "O2", q: "How do you make a column fit its longest entry?", options: ["Type spaces", "Delete the header", "Double-click the line between column letters", "Press Enter twice"], answer: 2, why: "Double-clicking the border auto-fits the column." },
      { objective: "O3", q: "Every formula starts with:", options: ["A plus sign only", "A dollar sign", "A letter", "An equals sign"], answer: 3, why: "The = tells the app it is a formula." },
      { objective: "O3", q: "Which finds the average of D2 to D20?", options: ["=AVERAGE(D2:D20)", "=AVG D2 D20", "AVERAGE=D2:D20", "=SUM(D2:D20)"], answer: 0, why: "AVERAGE with a range written first:last." },
      { objective: "O3", q: "You change a quantity used by a SUM formula. What happens to the total?", options: ["Nothing", "It updates by itself", "It shows an error", "It is deleted"], answer: 1, why: "Formulas recalculate when their data changes." },
      { objective: "O3", q: "A cell shows #NAME?. What is the likely cause?", options: ["The file is shared", "The column is bold", "The function name is misspelled", "The sheet is frozen"], answer: 2, why: "#NAME? usually means the app does not recognize the function name." },
      { objective: "O3", q: "What is the fill handle?", options: ["A menu", "The small square at a cell's bottom-right corner used to copy", "The Share button", "A type of chart"], answer: 1, why: "Dragging it copies the formula and adjusts cell names." },
      { objective: "O4", q: "Which formula shows \"Missing\" when D2 is empty and \"OK\" when it is not?", options: ["=IF(D2=\"\",\"Missing\",\"OK\")", "=SUM(D2)", "=IF(D2,OK,Missing)", "=AVERAGE(\"Missing\")"], answer: 0, why: "The test D2=\"\" checks for an empty cell." },
      { objective: "O4", q: "What does <> mean in a formula?", options: ["Greater than", "Equal to", "Less than", "Not equal to"], answer: 3, why: "<> means not equal to." },
      { objective: "O5", q: "In Excel, where are Sort and Filter?", options: ["File tab", "Data tab", "Help tab", "Draw tab"], answer: 1, why: "Sort and Filter are on Excel's Data tab." },
      { objective: "O5", q: "In Google Sheets, how do you add filter arrows to the header row?", options: ["Data > Create a filter", "Insert > Chart", "Format > Number", "File > Share"], answer: 0, why: "Create a filter adds arrows to each header." },
      { objective: "O5", q: "Why should you never sort just one column of a table?", options: ["It is too slow", "It deletes the sheet", "The rows get mixed up", "It shares the file"], answer: 2, why: "Sorting one column alone separates values from the rest of their row." },
      { objective: "O5", q: "In Excel, how do you keep row 1 visible while scrolling?", options: ["Insert > Chart", "Home > Bold", "Data > Filter", "View > Freeze Panes > Freeze Top Row"], answer: 3, why: "Freeze Top Row keeps the header on screen." },
      { objective: "O6", q: "Which chart is best for comparing sales by day?", options: ["A column chart", "No chart", "A chart with no labels", "A picture of a pie you drew"], answer: 0, why: "Column charts compare amounts side by side." },
      { objective: "O6", q: "In Google Sheets, how do you start a chart?", options: ["Data > Sort range", "Insert > Chart", "View > Freeze", "Format > Bold"], answer: 1, why: "Insert > Chart opens the chart editor." },
      { objective: "O6", q: "What should NEVER go in a sheet you share?", options: ["Sales totals", "Product names", "Passwords and Social Security numbers", "Dates"], answer: 2, why: "Private numbers can be misused if the file is shared." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      4,
      6,
      8,
      11,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Clean data table",
        objective: "O1",
        notYet: "Fewer than 8 rows, missing headers, or mixed data in a column.",
        meets: "Headers in row 1, at least 8 rows, one kind of data per column.",
        exceeds: "The file and sheet tab have clear names."
      },
      {
        name: "Easy to read",
        objective: "O2",
        notYet: "Headers are plain, money has no currency format, or text is cut off.",
        meets: "Headers in bold, money shown as currency, columns fit their entries.",
        exceeds: "The header row also has a fill color and the sheet looks tidy."
      },
      {
        name: "Totals and average",
        objective: "O3",
        notYet: "Totals typed by hand or a formula shows an error.",
        meets: "A SUM total and an AVERAGE that give the right results.",
        exceeds: "Row totals use a formula copied down with the fill handle."
      },
      {
        name: "IF labels",
        objective: "O4",
        notYet: "No IF column, or labels are wrong.",
        meets: "An IF column labels every row correctly, such as \"Goal met\" or \"Below goal\".",
        exceeds: "Can explain the test and change the goal number to update the labels."
      },
      {
        name: "Sorted, filtered and frozen",
        objective: "O5",
        notYet: "Rows are mixed up, or the sort, filter or freeze is missing.",
        meets: "Data sorted highest to lowest, a filter on the header row, and the top row frozen.",
        exceeds: "Can use the filter to show only one label and then clear it."
      },
      {
        name: "Chart and safe sharing",
        objective: "O6",
        notYet: "No chart, or shared with edit access by default or with private data.",
        meets: "A titled column chart, and the file shared with one person as a viewer, with no private data.",
        exceeds: "Can say why they chose that access level."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report using a spreadsheet at work or in their business within 30 days (follow-up survey)",
      "Learners who list spreadsheet skills on a résumé or get a job that uses them",
      "Learners who start another Koach Learn course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with Excel, Excel on the web or Google Sheets (free with a Google account)",
      "Sample data: a week of sales, shift hours or volunteer hours with at least 8 rows",
      "An email address of one person to share the finished sheet with",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Show each step once on a projected screen in both Excel and Google Sheets, then let learners repeat it.",
      "Give learners a ready sample data set so no one has to use real customer or private data.",
      "Watch for learners who sort one column alone; have them undo and sort the whole table.",
      "Remind learners to share as Viewer unless the person needs to edit, and never to put passwords or ID numbers in a shared sheet.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
