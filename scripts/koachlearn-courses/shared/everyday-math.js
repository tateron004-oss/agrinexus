"use strict";

// Koach Learn course: wave 1 (30 October 2026) -> "Everyday Math for Work and Life". Adult basic education: fractions, percents, unit prices, measurement,
// reading a paystub and budgeting, with workplace examples. Feeds into GED Test Preparation: Math. ADDIE parts as in re-entry/reentry-ai-digital-confidence.js.
// All money and pay examples are made up for practice.

const DOL_OT = { name: "U.S. Department of Labor: Overtime pay", url: "https://www.dol.gov/agencies/whd/overtime" };
const IRS_751 = { name: "IRS Topic 751: Social Security and Medicare withholding rates", url: "https://www.irs.gov/taxtopics/tc751" };
const CFPB = { name: "CFPB: Your Money, Your Goals (free budgeting materials)", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" };

module.exports = {
  id: "everyday-math",
  category: "Workforce Development",
  name: "Everyday Math for Work and Life",
  skills: "Fractions, decimals and percents, Discounts, tax, tips and raises, Unit prices and better buys, Measurement and work hours, Checking a paystub, Building a monthly budget",
  outcome: "do the math you meet at work and at home: use fractions, decimals and percents, find the better buy, measure and convert units, check your paystub, and build a monthly budget from your pay.",
  about: [
    "This course is for adults who want to feel sure about numbers again: job seekers, people coming home from prison, immigrants, parents and anyone returning to learning. You do not need to remember school math. We start from the beginning, with real things like a sale tag, a tape measure and a paycheck.",
    "You will practice fractions, decimals and percents; figure discounts, sales tax, tips and raises; compare unit prices at the store; measure and convert for a work task; check every line of a paystub; and build a monthly budget.",
    "These are the same skills many job tests and the GED Math test start with. When you finish, \"GED Test Preparation: Math\" is a good next step. This course does not give a certificate or diploma; it builds the skills.",
    "Each lesson takes about five minutes, with worked examples and a \"Try it now\" task on paper or a phone calculator. A 2-question quick check follows each lesson, a knowledge check closes each chapter, and a 20-question quiz ends the course. All pay and money examples are made up for practice."
  ],
  finalTask: "Make your own \"Work and Money Math Sheet\" on one page: (1) check a practice paystub (or your own, with private numbers covered) line by line: hours times rate, overtime, deductions and net pay; (2) turn that pay into monthly income and build a monthly budget with a savings line, where spending is no more than income; (3) compare the unit prices of 3 things you buy often and write which size is the better buy. Keep it and update it each month.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults returning to learning: job seekers, people coming home from prison, immigrants, parents and older workers. Many left school early or have not done math on paper in years, and some feel anxious about numbers.",
    startingPoint: "Can add, subtract and use a phone calculator for simple sums. Many are unsure with fractions, percents, unit conversions and paystub deductions, and few keep a written budget.",
    gap: "Jobs and daily life need quick, correct math: measuring on the job, counting hours, checking pay, finding real prices and making money last the month. Mistakes cost money and can go unnoticed on a paystub. These skills are also the base for the GED Math test and many hiring tests.",
    constraints: [
      "Reading level: plain words and short sentences; many worked examples",
      "Tools: paper, pencil and a basic phone calculator; no special software",
      "Math anxiety: small steps, check answers in two ways, no timed pressure",
      "Privacy: practice paystubs are made up; cover Social Security and account numbers on a real one",
      "Rules that change (tax rates, overtime) point to official sources; state rules differ"
    ],
    prerequisites: "Basic adding, subtracting and multiplying, with or without a calculator."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given fractions, decimals, percents and a tape measure", action: "convert between fractions, decimals and percents and read a tape measure to the nearest 1/8 inch", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Given a price, a bill or a pay rate", action: "calculate a discount, sales tax, a tip or a raise using percents", standard: "to the nearest cent" },
    { id: "O3", condition: "Given two sizes of the same product and their prices", action: "calculate each unit price and choose the better buy", standard: "choosing correctly in at least 4 of 5 pairs" },
    { id: "O4", condition: "Given a work task such as flooring a room or logging a shift", action: "convert units and calculate area or hours worked", standard: "with the right unit, and rounding up when you need whole items" },
    { id: "O5", condition: "Given a paystub", action: "check the hours, pay rate, overtime, deductions and net pay line by line", standard: "with every line matching to the cent, or the mistake written down to ask about" },
    { id: "O6", condition: "Given a regular paycheck", action: "build a monthly budget that includes savings and keeps spending at or below income", standard: "with every category written down and the totals checked" }
  ],
  chapters: [
    {
      name: "Chapter 1: Numbers you use every day",
      lessons: [
        {
          title: "Fractions, decimals, percents and the tape measure",
          objectives: ["O1"],
          minutes: 6,
          goal: "Convert between fractions, decimals and percents and read a tape measure.",
          text: [
            "Fractions, decimals and percents are three ways to write the same amount. Half a pizza is 1/2, or 0.5, or 50%. A quarter is 1/4, 0.25 or 25%. Three quarters is 3/4, 0.75 or 75%.",
            "To change a fraction into a decimal, divide the top number by the bottom number: 3/8 is 3 divided by 8, which is 0.375. To change a decimal into a percent, move the decimal point two places to the right: 0.375 is 37.5%. To go from a percent to a decimal, move it two places to the left: 15% is 0.15.",
            "A tape measure in the US shows inches split into 16 small marks. The longest mark in the middle of an inch is 1/2. The next longest marks are 1/4 and 3/4. Then 1/8, 3/8, 5/8 and 7/8. The shortest are sixteenths. If the tape stops 3 marks of 1/8 past the 5, it reads 5 and 3/8 inches.",
            "Adding fractions with the same bottom number is easy: add the tops and keep the bottom. 1/8 + 3/8 = 4/8, which is the same as 1/2."
          ],
          steps: ["Fraction to decimal: divide top by bottom.", "Decimal to percent: move the point 2 places right.", "Percent to decimal: move the point 2 places left.", "Tape measure: find the whole inch, then count the marks past it.", "Simplify: 4/8 is the same as 1/2."],
          words: [["Fraction", "a part of a whole, written as top number over bottom number, like 3/4."], ["Numerator", "the top number of a fraction: how many parts you have."], ["Denominator", "the bottom number of a fraction: how many equal parts make a whole."], ["Decimal", "a number with a point, like 0.75, that shows parts of a whole."], ["Percent (%)", "parts out of 100. 25% means 25 out of 100."]],
          slides: [
            { title: "Three ways to write the same amount", bullets: ["1/2 = 0.5 = 50%", "1/4 = 0.25 = 25%", "3/4 = 0.75 = 75%"] },
            { title: "Converting", bullets: ["Fraction to decimal: divide top by bottom (3/8 = 0.375)", "Decimal to percent: point 2 places right (37.5%)", "Percent to decimal: point 2 places left (15% = 0.15)"] },
            { title: "Reading a tape measure", bullets: ["Longest middle mark: 1/2", "Then 1/4 and 3/4, then eighths, then sixteenths", "5 inches and 3 eighth-marks = 5 3/8 in"] }
          ],
          tryIt: "Practice (answers below): (1) Write 1/4 as a decimal and a percent. (2) Write 0.6 as a percent. (3) Write 8% as a decimal. (4) Change 5/8 to a decimal. (5) Add 1/4 + 1/4. Answers: (1) 0.25 and 25%; (2) 60%; (3) 0.08; (4) 0.625; (5) 2/4, which is 1/2. If you have a tape measure or ruler, measure 3 things at home to the nearest 1/8 inch.",
          youCanNow: "switch between fractions, decimals and percents and read a tape measure to the nearest 1/8 inch.",
          quickCheck: [
            { objective: "O1", q: "What is 3/4 as a percent?", options: ["34%", "0.34%", "75%", "43%"], answer: 2, why: "3 divided by 4 is 0.75, and moving the point two places right gives 75%." },
            { objective: "O1", q: "What is 6% as a decimal?", options: ["0.06", "0.6", "6.0", "60"], answer: 0, why: "Move the point two places left: 6% = 0.06." }
          ]
        },
        {
          title: "Discounts, sales tax, tips and raises",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calculate discounts, sales tax, tips and raises with percents.",
          text: [
            "To find a percent of a number, change the percent to a decimal and multiply. 20% of $45 is 0.20 x 45 = $9.",
            "Discount: subtract it from the price. A $45 jacket at 20% off costs 45 - 9 = $36. Sales tax: add it on. If the tax rate is 8%, the tax on $36 is 0.08 x 36 = $2.88, so you pay $38.88. Sales tax rates are different in each state and city; check your state's tax agency or look at a receipt.",
            "Tip without a calculator: find 10% by moving the point one place left, then build from it. On a $28 bill, 10% is $2.80, 5% is half of that, $1.40, so 15% is $2.80 + $1.40 = $4.20. 20% is double 10%: $5.60.",
            "Raise: a 3% raise on $16.00 an hour is 0.03 x 16 = $0.48, so the new rate is $16.48 an hour. Watch the words: \"20% off\" means you pay 80% of the price; \"20% more\" means you pay 120%."
          ],
          steps: ["Change the percent to a decimal.", "Multiply by the amount.", "Discount: subtract. Tax or tip: add. Raise: add to the old rate.", "Round money to the nearest cent.", "Check: does the answer make sense? A discount must be less than the price."],
          words: [["Discount", "money taken off the price."], ["Sales tax", "a tax added to the price at the register; the rate depends on your state and city."], ["Tip", "extra money you give for service, often figured as a percent of the bill."], ["Raise", "an increase in your pay rate."], ["Round", "make a number simpler; money is rounded to the nearest cent."]],
          slides: [
            { title: "Percent of a number", bullets: ["Change the percent to a decimal", "Multiply: 20% of $45 = 0.20 x 45 = $9"] },
            { title: "Discount and tax", bullets: ["20% off $45: 45 - 9 = $36", "8% tax on $36: 0.08 x 36 = $2.88", "You pay $38.88; tax rates differ by state and city"] },
            { title: "Tip in your head", bullets: ["10%: move the point one place left", "$28 bill: 10% = $2.80, 5% = $1.40", "15% = $4.20, 20% = $5.60"] },
            { title: "Raises", bullets: ["3% of $16.00 = $0.48", "New rate: $16.48 an hour", "20% off = pay 80%; 20% more = pay 120%"] }
          ],
          tryIt: "Practice (answers below): (1) A $60 pair of work boots is 25% off. What is the sale price? (2) Tax is 7% on a $50 item. What is the total? (3) Find a 20% tip on a $35 bill. (4) Your $15.50 pay rate gets a 4% raise. What is the new rate? Answers: (1) $45; (2) $3.50 tax, $53.50 total; (3) $7.00; (4) $0.62 more, $16.12 an hour. Then look at a real receipt and find the tax rate your area charged.",
          youCanNow: "figure discounts, sales tax, tips and raises to the nearest cent.",
          quickCheck: [
            { objective: "O2", q: "A $80 coat is 25% off. What is the sale price?", options: ["$55", "$20", "$105", "$60"], answer: 3, why: "25% of 80 is 20, and 80 - 20 = $60." },
            { objective: "O2", q: "What is a 15% tip on a $40 bill?", options: ["$4.00", "$6.00", "$15.00", "$0.60"], answer: 1, why: "10% is $4.00 and 5% is $2.00, so 15% is $6.00." }
          ],
          sources: [{ name: "Federation of Tax Administrators: State tax agency links", url: "https://taxadmin.org/state-tax-agencies/" }]
        },
        {
          title: "Unit prices: finding the better buy",
          objectives: ["O3"],
          minutes: 5,
          goal: "Calculate unit prices and choose the better buy.",
          text: [
            "A unit price is the cost for one unit: one ounce, one pound, one count. It lets you compare different sizes fairly. To find it, divide the price by the number of units.",
            "Example: a 24-ounce box of cereal costs $4.80. $4.80 / 24 = $0.20 an ounce. A 36-ounce box costs $6.12. $6.12 / 36 = $0.17 an ounce. The bigger box is the better buy.",
            "Bigger is not always cheaper. A 2-pound bag of rice for $3.18 is $1.59 a pound. A 5-pound bag for $8.45 is $1.69 a pound. Here the small bag is the better buy. Many stores print the unit price in small type on the shelf tag; check that both tags use the same unit.",
            "The better buy is only better if you will use it before it goes bad and you can afford it this week. Unit prices also help at work, for example when ordering supplies."
          ],
          steps: ["Write the price and the size of each item.", "Make sure the units match (ounces with ounces).", "Divide: price / size = unit price.", "Compare: the lower unit price is the better buy.", "Ask: will I use it all, and can I afford it now?"],
          words: [["Unit price", "the cost for one unit, like one ounce or one pound."], ["Ounce (oz)", "a small unit of weight; 16 ounces make 1 pound."], ["Pound (lb)", "a unit of weight equal to 16 ounces."], ["Shelf tag", "the price label on the store shelf; it often shows the unit price."]],
          slides: [
            { title: "Unit price = price / size", bullets: ["Cost for one ounce, pound or item", "Compare different sizes fairly"] },
            { title: "Cereal example", bullets: ["24 oz for $4.80 = $0.20 an ounce", "36 oz for $6.12 = $0.17 an ounce", "The bigger box wins here"] },
            { title: "Bigger is not always cheaper", bullets: ["2 lb rice $3.18 = $1.59 a pound", "5 lb rice $8.45 = $1.69 a pound", "The small bag wins here"] },
            { title: "Smart buying", bullets: ["Check the shelf tag, same unit on both", "Will you use it before it goes bad?", "Can you afford it this week?"] }
          ],
          tryIt: "Practice (answers below): (1) 12 eggs for $3.60 or 18 eggs for $5.04? (2) 64 oz of juice for $3.84 or 128 oz for $6.40? Answers: (1) $0.30 an egg vs $0.28 an egg: 18 eggs is better; (2) $0.06 an ounce vs $0.05 an ounce: 128 oz is better. Then, at a store or on a store's website, find the unit prices of 3 things you buy often in two sizes and write down the better buy. This goes on your final task sheet.",
          youCanNow: "find unit prices and pick the better buy, and know when the bigger size is not worth it.",
          quickCheck: [
            { objective: "O3", q: "A 10-pound bag of potatoes costs $5.90. What is the unit price?", options: ["$0.59 a pound", "$5.90 a pound", "$1.69 a pound", "$59.00 a pound"], answer: 0, why: "$5.90 / 10 = $0.59 a pound." },
            { objective: "O3", q: "Soap A: 3 bars for $2.70. Soap B: 8 bars for $8.00. Which is the better buy?", options: ["Soap B, because it has more bars", "They cost the same per bar", "Soap B, because it costs more", "Soap A, at $0.90 a bar vs $1.00"], answer: 3, why: "$2.70 / 3 = $0.90 and $8.00 / 8 = $1.00, so A costs less per bar." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Numbers you use every day",
        questions: [
          { objective: "O1", q: "What is 1/8 as a decimal?", options: ["0.18", "0.8", "0.125", "1.8"], answer: 2, why: "1 divided by 8 is 0.125." },
          { objective: "O1", q: "On a tape measure, the longest mark between 4 and 5 inches is:", options: ["4 1/2 inches", "4 1/8 inches", "4 1/16 inches", "5 inches"], answer: 0, why: "The longest mark in the middle of an inch is the 1/2 mark." },
          { objective: "O2", q: "Sales tax is 6% on a $25 purchase. How much is the tax?", options: ["$6.00", "$0.25", "$31.00", "$1.50"], answer: 3, why: "0.06 x 25 = $1.50." },
          { objective: "O2", q: "Your pay goes from $14.00 to $14.70 an hour. What percent raise is that?", options: ["7%", "5%", "70%", "0.5%"], answer: 1, why: "The raise is $0.70, and 0.70 / 14.00 = 0.05, which is 5%." },
          { objective: "O3", q: "Which is the better buy: 16 oz of peanut butter for $3.20 or 40 oz for $7.20?", options: ["16 oz, at $0.20 an ounce", "They are the same", "40 oz, at $0.18 an ounce", "You cannot tell"], answer: 2, why: "$3.20 / 16 = $0.20 and $7.20 / 40 = $0.18, so the 40 oz jar costs less per ounce." }
        ]
      }
    },
    {
      name: "Chapter 2: Math for work and money",
      lessons: [
        {
          title: "Measuring, converting and counting work hours",
          objectives: ["O4"],
          minutes: 6,
          goal: "Convert units and calculate area and hours worked for a work task.",
          text: [
            "Common US units: 12 inches = 1 foot, 3 feet = 1 yard, 16 ounces = 1 pound, 2 pints = 1 quart, 4 quarts = 1 gallon. Some jobs use metric: 1 inch = 2.54 centimeters, and 1 kilogram is about 2.2 pounds. To change a big unit into small units, multiply; to change small units into big units, divide. 90 inches / 12 = 7.5 feet.",
            "Area is the space a flat surface covers: length x width, in square units. A room 12 feet by 10 feet is 12 x 10 = 120 square feet. If one box of flooring covers 20 square feet, you need 120 / 20 = 6 boxes. Workers often add about 10% extra for cuts and mistakes: 120 x 1.10 = 132, and 132 / 20 = 6.6. You cannot buy 0.6 of a box, so round UP to 7.",
            "Hours worked: count from start to end, then take out unpaid breaks. A shift from 7:30 am to 4:00 pm is 8 1/2 hours; minus a 30-minute unpaid lunch is 8 hours. Many timecards use decimal hours: 15 minutes = 0.25, 30 minutes = 0.5, 45 minutes = 0.75. Some workplaces use a 24-hour clock: 15:00 is 3:00 pm."
          ],
          steps: ["Write what you have and the unit you need.", "Big to small unit: multiply. Small to big: divide.", "Area: length x width, in square units.", "Need whole items (boxes, bags): always round up.", "Hours: end time minus start time, minus unpaid breaks; change minutes to decimals by dividing by 60."],
          words: [["Unit", "what you measure in, like inches, feet, pounds or hours."], ["Convert", "change a measurement from one unit to another."], ["Area", "the space a flat surface covers: length times width, in square units."], ["Square feet (sq ft)", "the unit for area when you measure in feet."], ["Metric", "the measuring system used in most of the world: centimeters, meters, kilograms, liters."], ["Decimal hours", "time written as a decimal, like 7.75 hours for 7 hours 45 minutes."]],
          slides: [
            { title: "Units to know", bullets: ["12 in = 1 ft; 3 ft = 1 yd", "16 oz = 1 lb; 4 qt = 1 gal", "1 in = 2.54 cm; 1 kg is about 2.2 lb", "Big to small: multiply. Small to big: divide"] },
            { title: "Area for a job", bullets: ["12 ft x 10 ft room = 120 sq ft", "Add 10% for cuts: 132 sq ft", "20 sq ft per box: 6.6, so buy 7 boxes"] },
            { title: "Counting hours", bullets: ["7:30 am to 4:00 pm = 8.5 hours", "Minus 30 min unpaid lunch = 8 hours", "15 min = 0.25, 30 min = 0.5, 45 min = 0.75"] }
          ],
          tryIt: "Practice (answers below): (1) Change 5 feet to inches. (2) Change 48 ounces to pounds. (3) A storage room is 9 feet by 14 feet. What is the area? (4) Paint covers about 350 square feet a gallon (on this made-up can). You must cover 800 square feet. How many gallons do you buy? (5) You work 6:45 am to 3:15 pm with a 30-minute unpaid lunch. How many hours, as a decimal? Answers: (1) 60 inches; (2) 3 pounds; (3) 126 square feet; (4) 800 / 350 = 2.29, so buy 3 gallons; (5) 8.5 hours minus 0.5 = 8.0 hours.",
          youCanNow: "convert units, find area, round up for whole items and count your work hours as decimals.",
          quickCheck: [
            { objective: "O4", q: "You need 4.2 bags of concrete mix. How many bags do you buy?", options: ["4", "4.2", "42", "5"], answer: 3, why: "You cannot buy part of a bag, so round up to 5." },
            { objective: "O4", q: "How many hours is 7 hours and 45 minutes as a decimal?", options: ["7.45", "7.75", "7.5", "8.45"], answer: 1, why: "45 / 60 = 0.75, so it is 7.75 hours." }
          ]
        },
        {
          title: "Checking your paystub",
          objectives: ["O5"],
          minutes: 6,
          goal: "Check the hours, rate, overtime, deductions and net pay on a paystub.",
          text: [
            "A paystub shows how your pay was figured. Gross pay is what you earned before anything is taken out. Deductions are amounts taken out, such as taxes. Net pay is what you actually get: gross pay minus deductions. YTD means year to date: the total so far this year.",
            "Practice paystub (made up): 45 hours at $18.00 an hour. Under federal law, covered hourly workers get overtime for hours over 40 in a workweek, at least time and a half. So: 40 x $18.00 = $720.00 regular pay. Overtime rate is $18.00 x 1.5 = $27.00, and 5 x $27.00 = $135.00. Gross pay = $855.00. Some states have extra overtime rules; check your state labor office.",
            "Deductions on this stub: Social Security 6.2% of $855.00 = $53.01. Medicare 1.45% = $12.40. Federal income tax $60.00 and state tax $20.00 (these depend on your W-4 form and your state; they are made up here). Total deductions = $145.41. Net pay = $855.00 - $145.41 = $709.59.",
            "If a line is wrong, write down the pay date, the line and what you expected, then ask payroll or your supervisor first. If it is not fixed, you can contact your state labor office or the U.S. Department of Labor's Wage and Hour Division. Keep your paystubs, and cover your Social Security number before showing one to anyone."
          ],
          steps: ["Check the hours against your own record of the hours you worked.", "Regular pay: up to 40 hours x your rate.", "Overtime: hours over 40 x (rate x 1.5), if you are covered.", "Gross pay = regular pay + overtime + any other pay.", "Add up all the deductions.", "Net pay = gross pay - total deductions. Does it match the stub?", "If not, write it down and ask payroll."],
          words: [["Paystub", "the paper or online record that shows how your pay was figured."], ["Gross pay", "what you earned before anything is taken out."], ["Net pay", "what you take home after deductions; also called take-home pay."], ["Deduction", "an amount taken out of your pay, like taxes or insurance."], ["Overtime", "extra pay, at least 1.5 times your rate, for covered hours over 40 in a workweek under federal law."], ["YTD (year to date)", "the total from January 1 up to this paycheck."], ["W-4", "the form you give your employer that sets how much federal income tax is withheld."]],
          slides: [
            { title: "Paystub words", bullets: ["Gross pay: earned before deductions", "Deductions: taxes and other amounts taken out", "Net pay: what you take home", "YTD: total so far this year"] },
            { title: "Practice stub: 45 hours at $18.00", bullets: ["Regular: 40 x $18.00 = $720.00", "Overtime: 5 x $27.00 = $135.00", "Gross pay: $855.00"] },
            { title: "Deductions and net pay", bullets: ["Social Security 6.2% = $53.01; Medicare 1.45% = $12.40", "Federal $60.00 + state $20.00 (made up)", "Net: $855.00 - $145.41 = $709.59"] },
            { title: "If something is wrong", bullets: ["Write down the date, the line and what you expected", "Ask payroll or your supervisor first", "Then your state labor office or the DOL Wage and Hour Division"] }
          ],
          tryIt: "Practice (answers below): You worked 42 hours at $16.00 an hour. Deductions: Social Security 6.2%, Medicare 1.45%, federal tax $45.00, state tax $15.00 (made up). Find (1) regular pay, (2) overtime pay, (3) gross pay, (4) total deductions, (5) net pay. Answers: (1) $640.00; (2) 2 x $24.00 = $48.00; (3) $688.00; (4) $42.66 + $9.98 + $45.00 + $15.00 = $112.64; (5) $575.36. Then check a real paystub of your own the same way, with private numbers covered.",
          youCanNow: "check every line of a paystub and know what to do if something does not add up.",
          quickCheck: [
            { objective: "O5", q: "Gross pay is $600.00 and deductions total $95.00. What is net pay?", options: ["$695.00", "$95.00", "$505.00", "$600.00"], answer: 2, why: "Net pay = gross pay - deductions = 600 - 95 = $505.00." },
            { objective: "O5", q: "You earn $20.00 an hour and are covered by federal overtime. What is your overtime rate?", options: ["$30.00", "$20.00", "$40.00", "$21.50"], answer: 0, why: "Time and a half: $20.00 x 1.5 = $30.00." }
          ],
          sources: [DOL_OT, IRS_751]
        },
        {
          title: "Building a monthly budget from your pay",
          objectives: ["O6"],
          minutes: 6,
          goal: "Build a monthly budget with savings that keeps spending at or below income.",
          text: [
            "A budget is a plan for your money. Start with monthly take-home (net) pay. Months are a little longer than 4 weeks, so do not just multiply weekly pay by 4. Paid weekly: weekly net x 52 / 12. Paid every two weeks: net x 26 / 12. Example: $700 a week x 52 = $36,400 a year, / 12 = $3,033.33 a month.",
            "List your spending: needs first (rent, utilities, food, transportation, phone, child care, minimum debt payments), then savings, then wants. Example: rent $1,200, utilities $150, phone $50, food $400, transportation $200, debt $150, savings $150. That totals $2,300, which leaves $733.33 for other needs and wants.",
            "The rule: total spending (including savings) must be equal to or less than income. If it is more, cut a want, lower a bill, or find more income. Check the totals by adding them a second time, or with a calculator.",
            "Track it for one month. Write down what you really spend, then compare with your plan and adjust. The Consumer Financial Protection Bureau's free \"Your Money, Your Goals\" materials have worksheets you can print."
          ],
          steps: ["Find monthly take-home pay (weekly x 52 / 12, or every-two-weeks x 26 / 12).", "List needs: rent, utilities, food, transportation, phone, child care, debt minimums.", "Add a savings line, even a small one.", "Add wants last.", "Total spending must be at or below income.", "Track for a month and adjust."],
          words: [["Budget", "a plan for how you will use your money each month."], ["Income", "money coming in, like your take-home pay."], ["Expense", "money going out, like rent or groceries."], ["Fixed expense", "an expense that is the same each month, like rent."], ["Variable expense", "an expense that changes each month, like food or gas."]],
          slides: [
            { title: "Monthly income", bullets: ["Weekly pay x 52 / 12", "Every two weeks: x 26 / 12", "$700 a week = $3,033.33 a month"] },
            { title: "Spending order", bullets: ["Needs first: rent, utilities, food, transportation", "Then savings, even a small amount", "Then wants"] },
            { title: "The rule", bullets: ["Spending + savings at or below income", "If over: cut a want, lower a bill, or earn more", "Add the totals twice to check"] },
            { title: "Track and adjust", bullets: ["Write down real spending for a month", "Compare with your plan", "Free CFPB worksheets: Your Money, Your Goals"] }
          ],
          tryIt: "Finish your final task. Use the net pay from your Lesson 5 paystub (or your own) and turn it into monthly income. Write a budget with needs, a savings line and wants. Add it up twice. If spending is more than income, change it until it fits. Put your paystub check, budget and 3 unit-price comparisons on one page: your \"Work and Money Math Sheet\".",
          youCanNow: "turn a paycheck into monthly income and build a budget that balances and includes savings.",
          quickCheck: [
            { objective: "O6", q: "You take home $500 a week. What is your monthly income?", options: ["$2,000.00", "$2,166.67", "$500.00", "$6,000.00"], answer: 1, why: "$500 x 52 / 12 = $2,166.67; multiplying by 4 leaves out the extra days." },
            { objective: "O6", q: "Your planned spending is $50 more than your income. What do you do?", options: ["Keep the plan and hope", "Remove the savings line and ignore it", "Use a payday loan every month", "Cut or lower some expenses until spending fits"], answer: 3, why: "A budget only works when spending is at or below income." }
          ],
          sources: [CFPB]
        }
      ],
      check: {
        title: "Knowledge Check 2: Math for work and money",
        questions: [
          { objective: "O4", q: "A room is 15 feet by 11 feet. What is the area?", options: ["26 square feet", "165 square feet", "52 square feet", "1,511 square feet"], answer: 1, why: "Area = length x width = 15 x 11 = 165 square feet." },
          { objective: "O4", q: "How many feet is 60 inches?", options: ["5 feet", "720 feet", "6 feet", "48 feet"], answer: 0, why: "Small to big unit: divide. 60 / 12 = 5 feet." },
          { objective: "O5", q: "On a paystub, what is gross pay?", options: ["What you take home", "Only the taxes", "Pay for one hour", "What you earned before deductions"], answer: 3, why: "Gross pay is the total earned before anything is taken out." },
          { objective: "O5", q: "Your paystub shows 38 hours, but your own record says 41. What do you do first?", options: ["Say nothing", "Quit the job", "Write down the dates and hours and ask payroll", "Change the paystub yourself"], answer: 2, why: "Start with payroll or your supervisor, with your own record in hand." },
          { objective: "O6", q: "Which belongs in the needs part of a budget?", options: ["Rent", "A new video game", "Concert tickets", "Takeout every night"], answer: 0, why: "Rent is a need; the others are wants." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Everyday Math for Work and Life",
    questions: [
      { objective: "O1", q: "Which is the same as 50%?", options: ["0.05", "1/5", "1/2", "5.0"], answer: 2, why: "50% means 50 out of 100, which is 1/2 or 0.5." },
      { objective: "O1", q: "What is 0.4 as a percent?", options: ["40%", "4%", "0.4%", "400%"], answer: 0, why: "Move the point two places right: 0.4 = 40%." },
      { objective: "O1", q: "1/8 + 5/8 = ?", options: ["6/16", "5/64", "4/8", "6/8, which is 3/4"], answer: 3, why: "Same bottom number: add the tops. 6/8 simplifies to 3/4." },
      { objective: "O2", q: "What is 10% of $73.00?", options: ["$73.00", "$7.30", "$0.73", "$10.00"], answer: 1, why: "Move the point one place left: $7.30." },
      { objective: "O2", q: "A $120 drill is 30% off. What is the sale price?", options: ["$36", "$90", "$84", "$150"], answer: 2, why: "30% of 120 is 36, and 120 - 36 = $84." },
      { objective: "O2", q: "\"20% off\" means you pay what percent of the price?", options: ["80%", "20%", "120%", "100%"], answer: 0, why: "100% - 20% = 80% of the price." },
      { objective: "O2", q: "Sales tax rates:", options: ["Are the same everywhere in the US", "Are always 10%", "Are set by the store", "Differ by state and city, so check your state's tax agency or a receipt"], answer: 3, why: "States and many cities set their own sales tax rates." },
      { objective: "O3", q: "How do you find a unit price?", options: ["Price x size", "Price / size", "Size / 100", "Price - size"], answer: 1, why: "Divide the price by the number of units." },
      { objective: "O3", q: "Detergent: 50 oz for $6.00 or 100 oz for $13.00. Which is the better buy?", options: ["100 oz, because it is bigger", "They are the same", "50 oz, at $0.12 an ounce vs $0.13", "You cannot tell"], answer: 2, why: "$6.00 / 50 = $0.12 and $13.00 / 100 = $0.13, so the smaller bottle costs less per ounce." },
      { objective: "O3", q: "Before buying the bigger size, you should also ask:", options: ["Will I use it before it goes bad, and can I afford it now?", "Is the box a nice color?", "Is it on the top shelf?", "Does the store have a parking lot?"], answer: 0, why: "A lower unit price only saves money if you use it and can pay for it." },
      { objective: "O4", q: "How many quarts are in 3 gallons?", options: ["7", "3", "16", "12"], answer: 3, why: "4 quarts = 1 gallon, so 3 x 4 = 12 quarts." },
      { objective: "O4", q: "Tile boxes cover 15 square feet. You need 100 square feet. How many boxes?", options: ["6", "7", "6.67", "15"], answer: 1, why: "100 / 15 = 6.67, and you round up to 7 whole boxes." },
      { objective: "O4", q: "You work 8:00 am to 4:30 pm with a 30-minute unpaid lunch. How many hours?", options: ["8.5", "8.3", "8.0", "9.0"], answer: 2, why: "8:00 to 4:30 is 8.5 hours, minus 0.5 hours = 8.0 hours." },
      { objective: "O5", q: "Net pay is:", options: ["Gross pay minus deductions", "Gross pay plus deductions", "Only your overtime", "Your hourly rate"], answer: 0, why: "Net pay is what is left after deductions are taken out." },
      { objective: "O5", q: "Under federal law, covered hourly workers get overtime for hours over:", options: ["35 in a workweek", "8 in a month", "50 in a workweek", "40 in a workweek"], answer: 3, why: "The federal rule is time and a half for hours over 40 in a workweek." },
      { objective: "O5", q: "You worked 44 hours at $15.00 an hour with overtime. What is gross pay?", options: ["$660.00", "$690.00", "$600.00", "$900.00"], answer: 1, why: "40 x $15 = $600, plus 4 x $22.50 = $90, so $690.00." },
      { objective: "O5", q: "Before you show a paystub to someone helping you, you should:", options: ["Post it online", "Add your password to it", "Cover your Social Security number", "Throw it away"], answer: 2, why: "Your Social Security number is private and can be used for identity theft." },
      { objective: "O6", q: "You are paid every two weeks and take home $1,200. What is your monthly income?", options: ["$2,400.00", "$2,600.00", "$1,200.00", "$4,800.00"], answer: 1, why: "$1,200 x 26 / 12 = $2,600.00." },
      { objective: "O6", q: "In a balanced budget, total spending including savings is:", options: ["More than income", "Equal to or less than income", "Always exactly $0", "Not written down"], answer: 1, why: "Spending at or below income keeps you out of new debt." },
      { objective: "O6", q: "Which is a variable expense?", options: ["Rent that stays the same", "A fixed car payment", "A fixed phone plan", "Groceries, which change each month"], answer: 3, why: "Variable expenses change from month to month." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 1, 4, 7, 8, 11, 12, 13, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, redo that part with the lesson's steps and check it again.",
    criteria: [
      { name: "Paystub checked", objective: "O5", notYet: "Some lines not checked, or math errors in gross or net pay.", meets: "Hours, rate, overtime, deductions and net pay checked; every line matches to the cent or a mistake is written down.", exceeds: "Also writes what to say to payroll about any mistake and where to go next." },
      { name: "Monthly income", objective: "O6", notYet: "Weekly pay multiplied by 4, or gross pay used instead of net.", meets: "Monthly take-home pay found with x 52 / 12 or x 26 / 12.", exceeds: "Shows the work and checks it a second way." },
      { name: "Balanced budget", objective: "O6", notYet: "Spending is more than income, or there is no savings line.", meets: "Needs, savings and wants listed; spending at or below income; totals checked.", exceeds: "Includes a plan to track real spending and a date to review it." },
      { name: "Unit prices", objective: "O3", notYet: "Fewer than 3 comparisons, or units do not match.", meets: "3 comparisons with correct unit prices and the better buy marked.", exceeds: "Notes when the bigger size is not the better choice and why." },
      { name: "Percents", objective: "O2", notYet: "Practice answers for discounts, tax, tips or raises are often wrong.", meets: "At least 4 of 5 percent practice problems right, to the cent.", exceeds: "Can explain the shortcut (10%, then build) to someone else." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and complete the Work and Money Math Sheet to the rubric",
      "Learners who report catching a paystub error or saving money with unit prices within 30 days (follow-up survey)",
      "Learners who keep a written budget for at least 2 months",
      "Learners who go on to \"GED Test Preparation: Math\" or pass a job's math test within 6 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper, pencil and a basic calculator (a phone calculator is fine)",
      "A tape measure or ruler with 1/8 inch marks",
      "The made-up practice paystub in Lesson 5, or the learner's own with private numbers covered",
      "Store receipts or shelf tags for unit prices",
      "About 2 hours in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Many adults feel anxious about math. Start with the pre-test as a \"no grade\" warm-up and celebrate the gain on the final quiz.",
      "Work each example on the board first, then let learners try the next one in pairs.",
      "Teach checking answers two ways (estimate, then calculate) so learners trust their own work.",
      "When learners bring real paystubs, have them cover Social Security and bank numbers first. Tax and overtime questions beyond the basics go to payroll, the state labor office or the DOL Wage and Hour Division.",
      "Do not judge anyone's budget; the goal is a plan that balances, not a perfect one.",
      "Point learners who want a diploma to \"GED Test Preparation: Math\"."
    ]
  }
};
