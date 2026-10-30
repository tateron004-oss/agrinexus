"use strict";

// Koach Learn course: wave 1 (30 October 2026) -> "GED Test Preparation: Math". Prepares learners for the GED Mathematical Reasoning test from
// GED Testing Service (ged.com): Basic Math, Geometry, Basic Algebra, and Graphs and Functions; 115 minutes; onscreen calculator on part 2 (or their own
// TI-30XS at a test center); formula sheet and calculator reference sheet provided. Mentions HiSET where states use it. ADDIE parts as in
// re-entry/reentry-ai-digital-confidence.js. Practice items have their answers explained.

const GED_SUBJECTS = { name: "GED Testing Service: Test subjects (Math)", url: "https://www.ged.com/about-test/test-subjects.html" };
const GED_MATH = { name: "GED Testing Service: Math test, formula sheet and sample question", url: "https://ged.com/about_test/test_subjects/math/" };
const GED_PRACTICE = { name: "GED Testing Service: Free sample tests and GED Ready", url: "https://www.ged.com/practice-test/" };
const GED_CALC = { name: "GED Testing Service: TI-30XS calculator reference sheet (PDF)", url: "https://www.ged.com/wp-content/uploads/calculator_sheet.pdf" };
const HISET = { name: "HiSET: high school equivalency test", url: "https://hiset.org/" };

module.exports = {
  id: "ged-math",
  category: "Workforce Development",
  name: "GED Test Preparation: Math",
  skills: "Knowing the GED Math test and making a study plan, Number skills without a calculator, Ratios, percents and data, Solving equations and inequalities, Geometry with the formula sheet, Slope, graphs and functions",
  outcome: "solve the main kinds of GED Math problems (number skills, percents and data, equations, geometry with the formula sheet, and graphs) and follow a dated study and test plan that gets you ready to take the GED Math test.",
  about: [
    "This course is for adults working toward a high school equivalency diploma: young adults, people coming home from prison, immigrants, veterans and anyone returning to learning. A diploma opens doors to jobs, training programs and college.",
    "The GED test has four subjects, and Math (called Mathematical Reasoning) is one of them. It is given by GED Testing Service on a computer. The math test covers Basic Math, Geometry, Basic Algebra, and Graphs and Functions. You get a formula sheet, so you do not have to memorize formulas. Some states use the HiSET test instead of, or as well as, the GED; your state's adult education office or ged.com tells you which.",
    "You will learn how the math test works, then practice each kind of problem with worked examples and practice items with the answers explained. You finish with your own dated study and test plan.",
    "This course prepares you for the test; it does not give you the GED diploma. Only passing the official GED test does. Check ged.com for current rules in your state, the cost, testing at a test center or online, and the official practice tests. Each lesson takes about six minutes, with a quick check after it, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make your own GED Math study and test plan: take the free GED Math Sample Test on ged.com and write your result; list your 3 weakest topics from it and from this course's quizzes; write a weekly study schedule with real dates for the next 6 to 8 weeks (which topic, which day, how long); solve a practice set of 12 problems (2 from each lesson) and explain any you missed; and write the dates you plan to take the official GED Ready practice test and the GED Math test, after checking your state's rules and costs on ged.com.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults without a high school diploma: people coming home from prison, immigrants, veterans, parents and workers who need a diploma for a job, a promotion or college. Many left school years ago; some had bad experiences with math.",
    startingPoint: "Can add, subtract, multiply and divide whole numbers, often with a calculator. Many are rusty with fractions, negative numbers and percents, and have little or no algebra. Most have not seen the GED test format or its calculator.",
    gap: "The GED Math test asks for number skills, percents and data, algebra, geometry with a formula sheet, and graphs, in 115 minutes on a computer. Learners need to know the test format, practice each kind of problem with worked examples, and follow a study plan so they test when they are ready. Passing opens jobs, training and college.",
    constraints: [
      "Reading level: plain words and short sentences; every math word explained",
      "Devices: a phone or computer for the free GED sample test; paper and pencil for practice",
      "Calculator: practice with a TI-30XS if possible, or a free online scientific calculator",
      "Time: lessons of 5 to 6 minutes, plus a weekly study schedule the learner sets",
      "Rules, costs and test options differ by state and can change: always point to ged.com or the state office",
      "Math anxiety: many worked examples, checking answers, no timed pressure in practice"
    ],
    prerequisites: "Adding, subtracting, multiplying and dividing whole numbers. Learners who are unsure with fractions, decimals and percents can take \"Everyday Math for Work and Life\" first."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Using ged.com and the free GED Math Sample Test", action: "list the GED Math test's content areas, time, calculator rules and question types, and write a dated study and test plan", standard: "with a weekly schedule for 6 to 8 weeks and a target test date" },
    { id: "O2", condition: "Without a calculator", action: "solve problems with order of operations, fractions, negative numbers, exponents and square roots", standard: "getting at least 4 of 5 right" },
    { id: "O3", condition: "Given word problems and small data sets", action: "solve ratio, proportion and percent problems and find the mean, median, mode and range", standard: "getting at least 4 of 5 right" },
    { id: "O4", condition: "Given a word problem or an equation", action: "write and solve one-variable linear equations and inequalities", standard: "getting at least 4 of 5 right and checking each answer by putting it back in" },
    { id: "O5", condition: "Using a formula sheet and a calculator", action: "calculate perimeter, area, volume and a missing side of a right triangle", standard: "getting at least 4 of 5 right, with the correct units" },
    { id: "O6", condition: "Given a graph, a table, two points or a function", action: "find the slope, read values and evaluate the function", standard: "getting at least 4 of 5 right" }
  ],
  chapters: [
    {
      name: "Chapter 1: The test, numbers and data",
      lessons: [
        {
          title: "The GED Math test and your study plan",
          objectives: ["O1"],
          minutes: 6,
          goal: "List how the GED Math test works and start a dated study plan.",
          text: [
            "The GED test has four subjects: Math, Reasoning Through Language Arts, Science and Social Studies. You can take them one at a time. The Math test is called Mathematical Reasoning. It covers four areas: Basic Math, Geometry, Basic Algebra, and Graphs and Functions.",
            "According to ged.com, the Math test is 115 minutes, including time for instructions and review. It has parts, with a short break between them. An onscreen calculator is given on part 2; at a test center you may bring your own TI-30XS calculator. Some questions must be done without a calculator, so you need mental and paper math too. You get a formula sheet and a calculator reference sheet, so you do not have to memorize formulas.",
            "Question types include multiple choice, drag and drop, fill-in-the-blank, select an area (click on a graph or picture) and drop down. Check ged.com before you test, because details can change. In some states the HiSET test is used instead of, or as well as, the GED; your state decides.",
            "Start with the free GED Math Sample Test on ged.com. It shows you the screen and the kinds of questions. Use it to find your weak topics. When you are closer, the official practice test, GED Ready, tells you if you are likely ready (check ged.com for its cost). Then set a study plan: short sessions, several days a week, one topic at a time."
          ],
          steps: ["Go to ged.com and read the Math test page and your state's rules.", "Take the free GED Math Sample Test and write your result.", "List the topics you found hard.", "Pick study days and times for the next 6 to 8 weeks, with real dates.", "Put one topic on each study day, starting with your weakest.", "Pick a date to take GED Ready, and a target date for the real test."],
          words: [["GED", "a high school equivalency test from GED Testing Service; passing all four subjects earns a high school equivalency diploma."], ["HiSET", "another high school equivalency test used in some states."], ["Formula sheet", "a page of math formulas you are given during the test."], ["TI-30XS", "the scientific calculator model used on the GED Math test."], ["GED Ready", "the official GED practice test that shows whether you are likely ready."], ["Study plan", "a written schedule of what you will study and when."]],
          slides: [
            { title: "GED Math (Mathematical Reasoning)", bullets: ["Basic Math, Geometry, Basic Algebra, Graphs and Functions", "115 minutes, on a computer, with a short break", "Formula sheet and calculator reference sheet given"] },
            { title: "Calculator and question types", bullets: ["Onscreen calculator on part 2; or your own TI-30XS at a test center", "Some questions without a calculator", "Multiple choice, drag and drop, fill-in, select an area, drop down"] },
            { title: "Practice tests", bullets: ["Free GED Math Sample Test on ged.com", "GED Ready: the official practice test (check the cost)", "Some states use HiSET: check your state"] },
            { title: "Your study plan", bullets: ["Start with your weakest topics", "Short sessions, several days a week, real dates", "Pick a GED Ready date and a target test date"] }
          ],
          tryIt: "Go to ged.com and take the free GED Math Sample Test. Write down your result and the topics that felt hard. Then on paper make a calendar for the next 6 to 8 weeks: circle your study days, write a time for each, and put your hardest topic on the first day. This is the start of your final task.",
          youCanNow: "describe the GED Math test (content, time, calculator, formula sheet, question types) and start a dated study plan.",
          quickCheck: [
            { objective: "O1", q: "Do you have to memorize formulas for the GED Math test?", options: ["Yes, every formula", "No, a formula sheet is given", "Only the ones on the back of the calculator", "Only if you test online"], answer: 1, why: "GED Testing Service gives a formula sheet during the test." },
            { objective: "O1", q: "Where should you check your state's current GED rules and costs?", options: ["A social media post", "A friend who tested years ago", "ged.com or your state's adult education office", "This course only"], answer: 2, why: "Rules and costs change and differ by state; the official site is the source." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE, HISET]
        },
        {
          title: "Number skills without a calculator",
          objectives: ["O2"],
          minutes: 6,
          goal: "Solve order of operations, fraction, negative number, exponent and square root problems by hand.",
          text: [
            "Order of operations: do Parentheses first, then Exponents, then Multiply and Divide from left to right, then Add and Subtract from left to right. Some people remember PEMDAS. Example: 3 + 4 x (6 - 2)^2 / 8. Parentheses: 6 - 2 = 4. Exponent: 4^2 = 16. Multiply and divide left to right: 4 x 16 = 64, 64 / 8 = 8. Add: 3 + 8 = 11.",
            "Fractions: to multiply, multiply tops and bottoms: 2/3 x 3/4 = 6/12 = 1/2. To divide, flip the second fraction and multiply: 3/4 / 1/2 = 3/4 x 2/1 = 6/4 = 1 1/2. To compare fractions and decimals, change them all to decimals: 2/3 is about 0.667, so from smallest: 0.65, 2/3, 0.7.",
            "Negative numbers: -5 + 8 = 3. Subtracting a negative is adding: 6 - (-2) = 8. A negative times a negative is positive: -3 x -4 = 12; a negative times a positive is negative: -3 x 4 = -12. On a number line, numbers get bigger to the right.",
            "Exponents and roots: 2^5 means 2 x 2 x 2 x 2 x 2 = 32. A square root undoes squaring: the square root of 49 is 7, because 7 x 7 = 49. The square root of 50 is a little more than 7, because 50 is between 49 and 64."
          ],
          steps: ["Parentheses first.", "Then exponents and roots.", "Then multiply and divide, left to right.", "Then add and subtract, left to right.", "Fractions: multiply straight across; to divide, flip the second and multiply.", "Signs: same signs multiply to positive, different signs to negative."],
          words: [["Order of operations", "the agreed order for doing math steps: parentheses, exponents, multiply and divide, add and subtract."], ["Exponent", "a small raised number that says how many times to multiply a number by itself: 2^3 = 2 x 2 x 2."], ["Square root", "the number that, multiplied by itself, gives the number: the square root of 25 is 5."], ["Negative number", "a number less than zero, like -4."], ["Number line", "a line with numbers in order; numbers get bigger to the right."]],
          slides: [
            { title: "Order of operations", bullets: ["Parentheses, Exponents", "Multiply and Divide, left to right", "Add and Subtract, left to right", "3 + 4 x (6 - 2)^2 / 8 = 11"] },
            { title: "Fractions", bullets: ["Multiply: 2/3 x 3/4 = 6/12 = 1/2", "Divide: flip and multiply: 3/4 / 1/2 = 1 1/2", "Compare: change to decimals"] },
            { title: "Negative numbers", bullets: ["-5 + 8 = 3", "6 - (-2) = 8", "-3 x -4 = 12; -3 x 4 = -12"] },
            { title: "Exponents and roots", bullets: ["2^5 = 32", "Square root of 49 = 7", "Square root of 50 is a little more than 7"] }
          ],
          tryIt: "Practice without a calculator (answers below): (1) 10 - 2 x 3 + 4. (2) 5/6 x 3/5. (3) 2/3 / 4/9. (4) -7 - (-10). (5) 3^3 - square root of 16. Answers: (1) 10 - 6 + 4 = 8 (multiply first). (2) 15/30 = 1/2. (3) 2/3 x 9/4 = 18/12 = 1 1/2. (4) -7 + 10 = 3. (5) 27 - 4 = 23. For any you missed, find the step where it went wrong and write the rule you need.",
          youCanNow: "work order of operations, fractions, negatives, exponents and square roots by hand.",
          quickCheck: [
            { objective: "O2", q: "What is 8 + 12 / 4?", options: ["5", "20", "14", "11"], answer: 3, why: "Divide before adding: 12 / 4 = 3, then 8 + 3 = 11." },
            { objective: "O2", q: "What is -6 x -5?", options: ["30", "-30", "-11", "11"], answer: 0, why: "A negative times a negative is positive: 30." }
          ],
          sources: [GED_MATH]
        },
        {
          title: "Ratios, proportions, percents and data",
          objectives: ["O3"],
          minutes: 6,
          goal: "Solve ratio, proportion and percent problems and find the mean, median, mode and range.",
          text: [
            "A ratio compares two amounts: 3 cups of flour for every 2 cups of sugar is 3:2. A proportion says two ratios are equal. To solve one, cross-multiply. Example: 3 cups of flour make 24 cookies. How much for 40 cookies? 3/24 = x/40, so 24x = 120 and x = 5 cups.",
            "Three percent questions: (1) What is 35% of 80? 0.35 x 80 = 28. (2) 18 is what percent of 72? 18 / 72 = 0.25 = 25%. (3) Percent change: a price goes from $40 to $50. The change is $10, and 10 / 40 = 0.25, so it went up 25%. Always divide the change by the ORIGINAL amount.",
            "Data: for the numbers 4, 7, 7, 9, 13, the mean (average) is the total divided by how many: 40 / 5 = 8. The median is the middle number when they are in order: 7. The mode is the number that appears most: 7. The range is biggest minus smallest: 13 - 4 = 9. If there are two middle numbers, the median is halfway between them.",
            "Probability is the chance something happens: the number of ways it can happen / the total number of outcomes. A bag has 3 red and 9 blue marbles: the chance of red is 3/12 = 1/4, or 25%."
          ],
          steps: ["Proportion: write two equal fractions with the same units in the same places, then cross-multiply and divide.", "Percent of a number: change the percent to a decimal and multiply.", "What percent: part / whole, then change to a percent.", "Percent change: change / original.", "Mean: add, then divide by how many. Median: put in order, find the middle.", "Mode: the most common. Range: biggest minus smallest."],
          words: [["Ratio", "a comparison of two amounts, like 3:2."], ["Proportion", "two equal ratios, like 3/24 = 5/40."], ["Cross-multiply", "multiply the top of each fraction by the bottom of the other to solve a proportion."], ["Mean", "the average: add the numbers and divide by how many there are."], ["Median", "the middle number when the numbers are in order."], ["Mode", "the number that appears most often."], ["Range", "the biggest number minus the smallest."], ["Probability", "the chance something happens, from 0 (never) to 1 (always)."]],
          slides: [
            { title: "Ratios and proportions", bullets: ["3 cups for 24 cookies; x cups for 40", "3/24 = x/40, so 24x = 120", "x = 5 cups"] },
            { title: "Three percent questions", bullets: ["35% of 80 = 0.35 x 80 = 28", "18 of 72 = 18 / 72 = 25%", "$40 to $50: 10 / 40 = 25% increase"] },
            { title: "Data: 4, 7, 7, 9, 13", bullets: ["Mean: 40 / 5 = 8", "Median: 7; Mode: 7", "Range: 13 - 4 = 9"] },
            { title: "Probability", bullets: ["Ways it can happen / total outcomes", "3 red of 12 marbles: 3/12 = 1/4 = 25%"] }
          ],
          tryIt: "Practice (answers below): (1) A map scale is 1 inch : 20 miles. How many miles is 3.5 inches? (2) What is 15% of 260? (3) A $250 phone is now $200. What is the percent decrease? (4) Find the mean, median, mode and range of 12, 15, 15, 18, 20, 22. Answers: (1) 70 miles. (2) 39. (3) 50 / 250 = 20% decrease. (4) Mean 102 / 6 = 17; median halfway between 15 and 18 = 16.5; mode 15; range 10.",
          youCanNow: "solve proportions and the three kinds of percent problems, and describe a data set with mean, median, mode and range.",
          quickCheck: [
            { objective: "O3", q: "What is the median of 3, 9, 4, 8, 6?", options: ["4", "9", "6", "30"], answer: 2, why: "In order: 3, 4, 6, 8, 9. The middle number is 6." },
            { objective: "O3", q: "A $60 item goes up to $75. What is the percent increase?", options: ["15%", "20%", "80%", "25%"], answer: 3, why: "The change is 15, and 15 / 60 = 0.25 = 25%." }
          ],
          sources: [GED_SUBJECTS]
        }
      ],
      check: {
        title: "Knowledge Check 1: The test, numbers and data",
        questions: [
          { objective: "O1", q: "Which is one of the four content areas of the GED Math test?", options: ["Spelling", "Graphs and Functions", "World history", "Typing speed"], answer: 1, why: "The math test covers Basic Math, Geometry, Basic Algebra, and Graphs and Functions." },
          { objective: "O2", q: "What is 2 + 3 x 4^2?", options: ["50", "80", "26", "400"], answer: 0, why: "Exponent first: 16. Multiply: 48. Add: 50." },
          { objective: "O2", q: "What is 3/4 / 3/8?", options: ["9/32", "1/2", "3/8", "2"], answer: 3, why: "Flip and multiply: 3/4 x 8/3 = 24/12 = 2." },
          { objective: "O3", q: "5 workers can pack 40 boxes an hour. At the same rate, how many boxes can 8 workers pack?", options: ["43", "50", "64", "80"], answer: 2, why: "40/5 = x/8, so 5x = 320 and x = 64." },
          { objective: "O3", q: "What is the mean of 10, 14, 15 and 21?", options: ["15", "14.5", "11", "60"], answer: 0, why: "Total 60, divided by 4 numbers, is 15." }
        ]
      }
    },
    {
      name: "Chapter 2: Algebra, geometry and graphs",
      lessons: [
        {
          title: "Solving equations and inequalities",
          objectives: ["O4"],
          minutes: 6,
          goal: "Write and solve one-variable equations and inequalities and check each answer.",
          text: [
            "A variable is a letter, like x, that stands for an unknown number. Words turn into math: \"5 more than twice a number\" is 2x + 5. \"A number decreased by 7\" is x - 7. \"The product of 4 and a number\" is 4x.",
            "To solve an equation, do the same thing to both sides until x is alone. Undo adding or subtracting first, then multiplying or dividing. Example: 3x - 7 = 20. Add 7: 3x = 27. Divide by 3: x = 9. Check: 3 x 9 - 7 = 20. Yes. Example with parentheses: 2(x + 4) = 18. Divide by 2: x + 4 = 9, so x = 5.",
            "Word problem: a phone plan costs $25 a month plus $0.10 for each text. The bill was $32. How many texts? 25 + 0.10t = 32. Subtract 25: 0.10t = 7. Divide by 0.10: t = 70 texts.",
            "Inequalities use <, >, <= or >= and are solved the same way, with one rule: when you multiply or divide both sides by a negative number, flip the sign. 4x + 3 > 19 gives 4x > 16, so x > 4. But -2x <= 10 gives x >= -5. On multiple choice questions, you can also check by putting each answer back into the problem."
          ],
          steps: ["Turn the words into an equation with a letter for the unknown.", "Undo adding or subtracting on both sides.", "Undo multiplying or dividing on both sides.", "Inequality: flip the sign if you multiply or divide by a negative.", "Check: put your answer back into the original problem."],
          words: [["Variable", "a letter that stands for an unknown number."], ["Expression", "numbers, letters and operations without an equals sign, like 2x + 5."], ["Equation", "a math sentence with an equals sign, like 3x - 7 = 20."], ["Inequality", "a math sentence using <, >, <= or >= instead of an equals sign."], ["Solve", "find the value of the variable that makes the sentence true."]],
          slides: [
            { title: "Words into math", bullets: ["5 more than twice a number: 2x + 5", "A number decreased by 7: x - 7", "The product of 4 and a number: 4x"] },
            { title: "Solving an equation", bullets: ["3x - 7 = 20", "Add 7: 3x = 27; divide by 3: x = 9", "Check: 3 x 9 - 7 = 20"] },
            { title: "A word problem", bullets: ["$25 a month + $0.10 a text = $32", "25 + 0.10t = 32, so 0.10t = 7", "t = 70 texts"] },
            { title: "Inequalities", bullets: ["Solve like an equation", "Multiply or divide by a negative: flip the sign", "-2x <= 10 gives x >= -5"] }
          ],
          tryIt: "Practice (answers below): (1) Write \"8 less than 3 times a number\" as an expression. (2) Solve 5x + 6 = 41. (3) Solve 4(x - 2) = 28. (4) A taxi charges $3 plus $2 a mile. The ride cost $19. How many miles? (5) Solve -3x + 1 > 13. Answers: (1) 3x - 8. (2) 5x = 35, x = 7. (3) x - 2 = 7, x = 9. (4) 3 + 2m = 19, m = 8 miles. (5) -3x > 12, so x < -4 (flip the sign). Check each answer by putting it back in.",
          youCanNow: "turn words into equations, solve equations and inequalities, and check your answers.",
          quickCheck: [
            { objective: "O4", q: "Solve: x / 4 + 3 = 8", options: ["x = 44", "x = 5", "x = 20", "x = 1.25"], answer: 2, why: "Subtract 3: x / 4 = 5. Multiply by 4: x = 20." },
            { objective: "O4", q: "Solve: -5x < 20", options: ["x > -4", "x < -4", "x < 4", "x > 4"], answer: 0, why: "Divide by -5 and flip the sign: x > -4." }
          ],
          sources: [GED_SUBJECTS]
        },
        {
          title: "Geometry with the formula sheet and calculator",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculate perimeter, area, volume and a right triangle's missing side using a formula sheet and calculator.",
          text: [
            "Perimeter is the distance around a shape; add the sides. Area is the space inside, in square units. Volume is the space inside a 3-D object, in cubic units. A rectangle 8 feet by 5 feet has perimeter 2 x (8 + 5) = 26 feet and area 8 x 5 = 40 square feet. A triangle with base 10 and height 6 has area 1/2 x 10 x 6 = 30.",
            "Circles use pi, about 3.14 (the calculator has a pi key). For a circle with radius 3: area = pi x r^2 = about 28.27 square units; circumference = 2 x pi x r = about 18.85. The diameter is twice the radius, so read carefully which one the question gives.",
            "Volume: a box 4 by 3 by 2 has volume 4 x 3 x 2 = 24 cubic units. A cylinder with radius 2 and height 5 has volume pi x r^2 x h = pi x 4 x 5 = about 62.83 cubic units.",
            "Right triangles: a^2 + b^2 = c^2 (the Pythagorean theorem), where c is the longest side, across from the square corner. If the legs are 6 and 8, c^2 = 36 + 64 = 100, so c = 10. You get a formula sheet on the test: practice with the current sheet from ged.com so you know where each formula is. On the TI-30XS, use the (-) key for negative numbers and the x^2 key for squares; the GED calculator reference sheet shows the keys."
          ],
          steps: ["Draw the shape and label what you know.", "Decide: perimeter (around), area (inside, flat) or volume (inside, 3-D)?", "Find the formula on the formula sheet.", "Put in the numbers and use the calculator.", "Write the units: feet, square feet or cubic feet.", "Ask: does the answer make sense for the picture?"],
          words: [["Perimeter", "the distance around a flat shape."], ["Area", "the space inside a flat shape, in square units."], ["Volume", "the space inside a 3-D object, in cubic units."], ["Radius", "the distance from the center of a circle to its edge; the diameter is twice the radius."], ["Pi", "the number about 3.14 used with circles."], ["Pythagorean theorem", "for a right triangle, a^2 + b^2 = c^2, where c is the longest side."]],
          slides: [
            { title: "Perimeter, area, volume", bullets: ["Perimeter: around, in units", "Area: inside a flat shape, square units", "Volume: inside a 3-D object, cubic units"] },
            { title: "Rectangles and triangles", bullets: ["8 by 5 rectangle: perimeter 26, area 40", "Triangle: 1/2 x base x height", "Base 10, height 6: area 30"] },
            { title: "Circles and cylinders", bullets: ["Area = pi x r^2; radius 3: about 28.27", "Circumference = 2 x pi x r", "Cylinder volume = pi x r^2 x h"] },
            { title: "Right triangles", bullets: ["a^2 + b^2 = c^2", "Legs 6 and 8: c = 10", "Practice with the current formula sheet from ged.com"] }
          ],
          tryIt: "Practice with a calculator and the formula sheet from ged.com (answers below): (1) Area and perimeter of a 12 m by 7 m rectangle. (2) Area of a circle with diameter 10 inches. (3) Volume of a box 6 ft by 2 ft by 3 ft. (4) A 13-foot ladder leans on a wall with its foot 5 feet from the wall. How high up the wall does it reach? Answers: (1) area 84 square meters, perimeter 38 m. (2) radius 5, area about 78.54 square inches. (3) 36 cubic feet. (4) 5^2 + b^2 = 13^2, so b^2 = 169 - 25 = 144, b = 12 feet.",
          youCanNow: "find perimeter, area, volume and a missing side of a right triangle, with the right units.",
          quickCheck: [
            { objective: "O5", q: "A room is 14 feet by 10 feet. What is its area?", options: ["24 square feet", "48 feet", "140 cubic feet", "140 square feet"], answer: 3, why: "Area = length x width = 140, in square feet." },
            { objective: "O5", q: "A right triangle has legs 9 and 12. How long is the longest side?", options: ["21", "15", "225", "108"], answer: 1, why: "81 + 144 = 225, and the square root of 225 is 15." }
          ],
          sources: [GED_MATH, GED_CALC]
        },
        {
          title: "Slope, graphs and functions",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Find slope, read graphs and tables, evaluate functions, and finish your study and test plan.",
          text: [
            "A coordinate grid has an x-axis (across) and a y-axis (up and down). A point is written (x, y): (3, 5) means 3 across, 5 up. Slope tells how steep a line is: rise over run, or (y2 - y1) / (x2 - x1). From (1, 3) to (4, 9): (9 - 3) / (4 - 1) = 6 / 3 = 2. A line going up from left to right has a positive slope; going down, a negative slope.",
            "A line can be written y = mx + b, where m is the slope and b is where the line crosses the y-axis. From a table where x = 0, 1, 2 gives y = 5, 8, 11, y goes up 3 each time, so m = 3, and when x = 0, y = 5, so b = 5: y = 3x + 5.",
            "A function gives one output for each input. f(x) = x^2 - 3x means: take the input, square it, subtract 3 times it. f(4) = 16 - 12 = 4. On a graph, find the value by going across to the x you want, then up or down to the line, then across to read y.",
            "Finish your plan. Look at your scores on the quick checks, the knowledge checks and the sample test. Put your 3 weakest topics first in your weekly schedule, add review days, and pick dates for GED Ready and the real test, after checking your state's rules on ged.com."
          ],
          steps: ["Slope: subtract the y values, subtract the x values in the same order, divide.", "y = mx + b: m is the slope, b is the y-value when x = 0.", "From a table: how much y changes each time x goes up by 1 is the slope.", "Function: replace x with the number and follow the order of operations.", "Plan: weakest topics first, real dates, GED Ready before the real test."],
          words: [["Coordinate grid", "a grid with an x-axis and a y-axis for plotting points."], ["Ordered pair", "a point written (x, y)."], ["Slope", "how steep a line is: the rise divided by the run."], ["y-intercept", "where a line crosses the y-axis; the b in y = mx + b."], ["Function", "a rule that gives exactly one output for each input, like f(x) = 2x + 1."]],
          slides: [
            { title: "Slope = rise / run", bullets: ["(y2 - y1) / (x2 - x1)", "(1, 3) to (4, 9): 6 / 3 = 2", "Up left to right: positive; down: negative"] },
            { title: "y = mx + b", bullets: ["m: the slope; b: where it crosses the y-axis", "Table x = 0, 1, 2 gives y = 5, 8, 11", "So y = 3x + 5"] },
            { title: "Functions", bullets: ["f(x) = x^2 - 3x", "f(4) = 16 - 12 = 4", "Graph: go to the x, find the line, read the y"] },
            { title: "Finish your plan", bullets: ["Weakest 3 topics first", "Real dates, review days", "GED Ready date, then your test date"] }
          ],
          tryIt: "Practice (answers below): (1) Find the slope from (2, 1) to (6, 9). (2) Write the equation of a line with slope -2 that crosses the y-axis at 7. (3) If f(x) = 3x - 4, find f(5). (4) A table has x = 0, 1, 2 and y = 10, 7, 4. What is the slope? Answers: (1) 8 / 4 = 2. (2) y = -2x + 7. (3) 15 - 4 = 11. (4) y goes down 3 each time, so -3. Then finish your final task: your weekly schedule with dates, your 12-problem practice set with misses explained, and your GED Ready and test dates.",
          youCanNow: "find slope, write y = mx + b, read graphs and tables, evaluate functions, and follow a dated GED Math study and test plan.",
          quickCheck: [
            { objective: "O6", q: "What is the slope from (0, 2) to (3, 11)?", options: ["2", "9", "1/3", "3"], answer: 3, why: "(11 - 2) / (3 - 0) = 9 / 3 = 3." },
            { objective: "O6", q: "If f(x) = 2x + 1, what is f(6)?", options: ["9", "13", "8", "12"], answer: 1, why: "2 x 6 + 1 = 13." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE]
        }
      ],
      check: {
        title: "Knowledge Check 2: Algebra, geometry and graphs",
        questions: [
          { objective: "O4", q: "Which equation matches \"Twice a number plus 9 is 25\"?", options: ["2 + x + 9 = 25", "2(x + 9) = 25", "2x + 9 = 25", "x + 9 = 2 x 25"], answer: 2, why: "Twice a number is 2x, plus 9, equals 25." },
          { objective: "O4", q: "Solve: 7x - 4 = 31", options: ["x = 5", "x = 27", "x = 3.9", "x = 35"], answer: 0, why: "Add 4: 7x = 35. Divide by 7: x = 5." },
          { objective: "O5", q: "What is the volume of a box 5 by 4 by 2 inches?", options: ["11 cubic inches", "20 square inches", "22 inches", "40 cubic inches"], answer: 3, why: "Volume = 5 x 4 x 2 = 40 cubic inches." },
          { objective: "O5", q: "A circle has a radius of 7. About what is its circumference?", options: ["21.99", "43.98", "153.94", "49"], answer: 1, why: "2 x pi x 7 is about 43.98." },
          { objective: "O6", q: "In y = 4x - 2, what is the slope?", options: ["-2", "2", "4", "x"], answer: 2, why: "In y = mx + b, m is the slope, so it is 4." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: GED Test Preparation: Math",
    questions: [
      { objective: "O1", q: "How long is the GED Math test, according to ged.com?", options: ["30 minutes", "115 minutes", "3 hours", "No time limit"], answer: 1, why: "ged.com lists the Math test as 115 minutes, including instructions and review." },
      { objective: "O1", q: "Which free tool shows you the GED Math test screen and kinds of questions?", options: ["The GED Math Sample Test on ged.com", "A random quiz app", "A video game", "None exists"], answer: 0, why: "ged.com offers a free Math sample test." },
      { objective: "O1", q: "Which calculator model can you bring to a GED test center?", options: ["Any phone", "A graphing calculator", "No calculator is ever allowed", "TI-30XS"], answer: 3, why: "ged.com says you may bring your own TI-30XS; an onscreen one is given on part 2." },
      { objective: "O1", q: "Your state uses HiSET. What does that mean?", options: ["You cannot get a diploma", "You must move to another state", "HiSET is another high school equivalency test your state uses; check its rules", "You take only the math test"], answer: 2, why: "Some states use HiSET instead of, or as well as, the GED." },
      { objective: "O2", q: "What is 20 - 4 x 3 + 2?", options: ["50", "10", "6", "18"], answer: 1, why: "Multiply first: 12. Then 20 - 12 + 2 = 10." },
      { objective: "O2", q: "What is 4/5 x 5/8?", options: ["1/2", "9/13", "20/13", "32/25"], answer: 0, why: "20/40 = 1/2." },
      { objective: "O2", q: "Which number is between 8 and 9?", options: ["Square root of 60", "Square root of 100", "Square root of 70", "Square root of 81"], answer: 2, why: "64 < 70 < 81, so the square root of 70 is between 8 and 9." },
      { objective: "O3", q: "What is 40% of 150?", options: ["40", "6", "110", "60"], answer: 3, why: "0.40 x 150 = 60." },
      { objective: "O3", q: "A recipe uses 2 cups of rice for 6 people. How many cups for 15 people?", options: ["5", "4", "7.5", "45"], answer: 0, why: "2/6 = x/15, so 6x = 30 and x = 5." },
      { objective: "O3", q: "What is the range of 5, 12, 3, 9, 20?", options: ["9", "17", "49", "20"], answer: 1, why: "Biggest minus smallest: 20 - 3 = 17." },
      { objective: "O3", q: "A bag has 4 green and 6 yellow marbles. What is the chance of picking green?", options: ["4/6", "1/4", "2/5", "6/10"], answer: 2, why: "4 green out of 10 total = 4/10 = 2/5." },
      { objective: "O4", q: "Solve: 6x + 5 = 47", options: ["x = 8.67", "x = 6", "x = 42", "x = 7"], answer: 3, why: "Subtract 5: 6x = 42. Divide by 6: x = 7." },
      { objective: "O4", q: "A gym charges $40 to join plus $20 a month. You paid $160. How many months?", options: ["6", "8", "10", "4"], answer: 0, why: "40 + 20m = 160, so 20m = 120 and m = 6." },
      { objective: "O4", q: "Solve: 10 - 2x >= 4", options: ["x >= 3", "x <= 3", "x <= -3", "x >= 7"], answer: 1, why: "Subtract 10: -2x >= -6. Divide by -2 and flip: x <= 3." },
      { objective: "O5", q: "What is the area of a triangle with base 12 and height 5?", options: ["60", "17", "30", "120"], answer: 2, why: "1/2 x 12 x 5 = 30." },
      { objective: "O5", q: "A rectangular yard is 30 feet by 20 feet. How much fence goes around it?", options: ["600 feet", "50 feet", "100 square feet", "100 feet"], answer: 3, why: "Perimeter = 2 x (30 + 20) = 100 feet." },
      { objective: "O5", q: "A cylinder has radius 3 and height 10. About what is its volume?", options: ["282.74 cubic units", "94.25 cubic units", "30 cubic units", "188.50 cubic units"], answer: 0, why: "pi x 9 x 10 is about 282.74." },
      { objective: "O6", q: "What is the slope from (2, 7) to (5, 1)?", options: ["2", "-2", "-1/2", "6"], answer: 1, why: "(1 - 7) / (5 - 2) = -6 / 3 = -2." },
      { objective: "O6", q: "A line has slope 5 and crosses the y-axis at -3. Its equation is:", options: ["y = -3x + 5", "y = 5x", "y = 5x - 3", "y = x - 8"], answer: 2, why: "y = mx + b with m = 5 and b = -3." },
      { objective: "O6", q: "If f(x) = x^2 + 2, what is f(-3)?", options: ["-7", "-1", "8", "11"], answer: 3, why: "(-3)^2 = 9, and 9 + 2 = 11." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 4, 6, 7, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part, then share the plan with a teacher or study partner.",
    criteria: [
      { name: "Knows the test", objective: "O1", notYet: "Has not taken the free sample test, or the plan has no test facts from ged.com.", meets: "Sample test result written down; content areas, time, calculator rules and question types listed from ged.com.", exceeds: "Also lists the state's rules (GED or HiSET), how to schedule and the current cost, from the official site." },
      { name: "Dated study plan", objective: "O1", notYet: "No dates, or no order of topics.", meets: "6 to 8 weeks of study days with real dates and times, weakest 3 topics first, GED Ready date and target test date.", exceeds: "Includes review days and a backup plan for missed sessions." },
      { name: "Number and data skills", objective: "O3", notYet: "Fewer than 3 of 4 number and data practice problems right.", meets: "At least 3 of 4 number and data problems (Lessons 2 and 3) right, with any misses explained.", exceeds: "All right, with the work shown clearly step by step." },
      { name: "Algebra", objective: "O4", notYet: "Practice equations solved without checking, or 1 or both wrong.", meets: "Both algebra problems right and checked by putting the answer back in.", exceeds: "Explains the sign-flip rule for inequalities in their own words." },
      { name: "Geometry and graphs", objective: "O6", notYet: "Wrong formula used, units missing, or slope sign wrong.", meets: "Geometry and graph problems (Lessons 5 and 6) mostly right, with correct units and slope signs.", exceeds: "Can show where each formula is on the formula sheet and draw the graph for a slope problem." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course with a dated study and test plan that meets the rubric",
      "Gain from pre-test to final quiz",
      "Learners who take GED Ready or the official sample test again within 60 days and score higher (follow-up survey)",
      "Learners who pass the GED Math test (or HiSET math) within 6 months, and who go on to finish the full diploma"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper, pencil and a calendar",
      "A TI-30XS calculator if possible, or a free online scientific calculator",
      "The current GED formula sheet and TI-30XS calculator reference sheet from ged.com",
      "A phone or computer with internet for the free GED Math Sample Test",
      "About 2 to 3 hours for the course, then the learner's own weekly study schedule"
    ],
    facilitatorNotes: [
      "Give the pre-test as a no-grade warm-up; many learners are anxious about math.",
      "Work every example on the board, then have learners do the next one in pairs before they work alone.",
      "Print the current formula sheet and calculator reference sheet from ged.com so learners practice with what they will see.",
      "Help learners check their state's rules (GED or HiSET, age, ID, cost, online or test center) on the official sites; do not quote fees or pass scores from memory.",
      "In correctional or re-entry programs, ask the education office how testing is arranged on site.",
      "Pair this course with \"Everyday Math for Work and Life\" for learners who need more practice with fractions and percents."
    ]
  }
};
