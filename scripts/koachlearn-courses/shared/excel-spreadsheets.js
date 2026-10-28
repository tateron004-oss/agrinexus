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
  chapters: [
    {
      name: "Chapter 1: Building your sheet",
      lessons: [
        {
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
          youCanNow: "open a spreadsheet, find any cell by its name, and enter a clean table with headers."
        },
        {
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
          youCanNow: "format headers, money and column widths so a sheet is clear and professional."
        },
        {
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
          youCanNow: "write SUM and AVERAGE formulas, multiply cells, and copy a formula down a column."
        }
      ],
      check: {
        title: "Knowledge Check 1: Building your sheet",
        questions: [
          { q: "What is the name of the cell in column C, row 4?", options: ["4C", "C4", "Row C", "Cell 34"], answer: 1, why: "A cell is named by its column letter, then its row number." },
          { q: "Where should your headers go?", options: ["In row 1, one per column", "At the bottom", "In random cells", "In a separate file"], answer: 0, why: "Headers in row 1 label each column of data below." },
          { q: "You want prices to show with a dollar sign. What do you do?", options: ["Type $ before every number", "Make the column bold", "Delete the prices", "Choose Currency from the number format menu"], answer: 3, why: "Currency formatting adds the symbol and decimals for every cell." },
          { q: "Which formula adds the cells B2 through B10?", options: ["SUM B2-B10", "=ADD(B2,B10)", "=SUM(B2:B10)", "B2+B10"], answer: 2, why: "Formulas start with =, and a range uses a colon." },
          { q: "What happens when you drag the fill handle down from a cell with =C2*D2?", options: ["The formula is copied and adjusts to each row", "The cell is deleted", "Every row gets exactly =C2*D2", "The sheet is shared"], answer: 0, why: "Cell names change row by row: C3*D3, C4*D4 and so on." }
        ]
      }
    },
    {
      name: "Chapter 2: Working with your data",
      lessons: [
        {
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
          youCanNow: "write an IF formula that labels rows automatically based on a rule."
        },
        {
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
          youCanNow: "sort and filter data safely and freeze the header row."
        },
        {
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
          youCanNow: "make a column chart from your data and share a spreadsheet with the right permission."
        }
      ],
      check: {
        title: "Knowledge Check 2: Working with your data",
        questions: [
          { q: "What does =IF(C2>40,\"Overtime\",\"Regular\") show when C2 is 45?", options: ["Regular", "45", "Overtime", "An error"], answer: 2, why: "45 is greater than 40, so the true result shows." },
          { q: "In an IF formula, where do text results go?", options: ["Inside double quotes", "Inside brackets", "After a # sign", "Nowhere"], answer: 0, why: "Text results must be in double quotes." },
          { q: "What does a filter do?", options: ["Deletes rows", "Changes the numbers", "Shares the file", "Hides rows that do not match, without deleting them"], answer: 3, why: "Filtering only hides rows; clearing it shows them again." },
          { q: "How do you keep the header row on screen in Google Sheets?", options: ["Format > Bold", "View > Freeze > 1 row", "Insert > Chart", "Data > Sort range"], answer: 1, why: "Freezing row 1 keeps it visible as you scroll." },
          { q: "A volunteer only needs to read your sheet. Which access do you give?", options: ["Editor", "Owner", "Viewer", "Nothing; send your password"], answer: 2, why: "Give the lowest access the person needs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Excel and Spreadsheets for Work",
    questions: [
      { q: "In a spreadsheet, columns are labeled with:", options: ["Numbers", "Letters", "Colors", "Dates"], answer: 1, why: "Columns use letters; rows use numbers." },
      { q: "Which key moves you one cell to the right after typing?", options: ["Tab", "Enter", "Shift", "Esc"], answer: 0, why: "Tab moves right; Enter moves down." },
      { q: "Which is the best layout for a donations list?", options: ["Each donation in a different file", "All data in one cell", "Random cells across the sheet", "Headers in row 1 and one donation per row"], answer: 3, why: "One record per row under clear headers keeps data usable." },
      { q: "You typed the wrong number. The fastest way to take back your last change is:", options: ["Close the file", "Undo: Ctrl+Z (Cmd+Z on Mac)", "Delete the column", "Start a new file"], answer: 1, why: "Undo reverses your last action." },
      { q: "Formatting a number as currency:", options: ["Changes how it looks, not its value", "Doubles the value", "Deletes the number", "Turns it into text you cannot add"], answer: 0, why: "Formatting changes the look only." },
      { q: "How do you make a column fit its longest entry?", options: ["Type spaces", "Delete the header", "Double-click the line between column letters", "Press Enter twice"], answer: 2, why: "Double-clicking the border auto-fits the column." },
      { q: "Every formula starts with:", options: ["A plus sign only", "A dollar sign", "A letter", "An equals sign"], answer: 3, why: "The = tells the app it is a formula." },
      { q: "Which finds the average of D2 to D20?", options: ["=AVERAGE(D2:D20)", "=AVG D2 D20", "AVERAGE=D2:D20", "=SUM(D2:D20)"], answer: 0, why: "AVERAGE with a range written first:last." },
      { q: "You change a quantity used by a SUM formula. What happens to the total?", options: ["Nothing", "It updates by itself", "It shows an error", "It is deleted"], answer: 1, why: "Formulas recalculate when their data changes." },
      { q: "A cell shows #NAME?. What is the likely cause?", options: ["The file is shared", "The column is bold", "The function name is misspelled", "The sheet is frozen"], answer: 2, why: "#NAME? usually means the app does not recognize the function name." },
      { q: "What is the fill handle?", options: ["A menu", "The small square at a cell's bottom-right corner used to copy", "The Share button", "A type of chart"], answer: 1, why: "Dragging it copies the formula and adjusts cell names." },
      { q: "Which formula shows \"Missing\" when D2 is empty and \"OK\" when it is not?", options: ["=IF(D2=\"\",\"Missing\",\"OK\")", "=SUM(D2)", "=IF(D2,OK,Missing)", "=AVERAGE(\"Missing\")"], answer: 0, why: "The test D2=\"\" checks for an empty cell." },
      { q: "What does <> mean in a formula?", options: ["Greater than", "Equal to", "Less than", "Not equal to"], answer: 3, why: "<> means not equal to." },
      { q: "In Excel, where are Sort and Filter?", options: ["File tab", "Data tab", "Help tab", "Draw tab"], answer: 1, why: "Sort and Filter are on Excel's Data tab." },
      { q: "In Google Sheets, how do you add filter arrows to the header row?", options: ["Data > Create a filter", "Insert > Chart", "Format > Number", "File > Share"], answer: 0, why: "Create a filter adds arrows to each header." },
      { q: "Why should you never sort just one column of a table?", options: ["It is too slow", "It deletes the sheet", "The rows get mixed up", "It shares the file"], answer: 2, why: "Sorting one column alone separates values from the rest of their row." },
      { q: "In Excel, how do you keep row 1 visible while scrolling?", options: ["Insert > Chart", "Home > Bold", "Data > Filter", "View > Freeze Panes > Freeze Top Row"], answer: 3, why: "Freeze Top Row keeps the header on screen." },
      { q: "Which chart is best for comparing sales by day?", options: ["A column chart", "No chart", "A chart with no labels", "A picture of a pie you drew"], answer: 0, why: "Column charts compare amounts side by side." },
      { q: "In Google Sheets, how do you start a chart?", options: ["Data > Sort range", "Insert > Chart", "View > Freeze", "Format > Bold"], answer: 1, why: "Insert > Chart opens the chart editor." },
      { q: "What should NEVER go in a sheet you share?", options: ["Sales totals", "Product names", "Passwords and Social Security numbers", "Dates"], answer: 2, why: "Private numbers can be misused if the file is shared." }
    ]
  }
};
