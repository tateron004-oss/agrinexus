"use strict";

// Koach Learn course: shared -> "Negotiation Skills" (new people and career skills course the owner asked for on 28 October 2026). Listed for Athletes, Entrepreneurs, Small Business,
// Workforce Development and Leadership Development, so it uses mixed examples: a job offer, a raise, a supplier price, a customer quote, a sponsorship or NIL deal, a lease.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// Facts that can change (California pay-scale and salary-history rules, BLS pay data) were checked on 28 October 2026 and are in the last lesson's sources.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "negotiation-skills",
  category: "Athletes",
  name: "Negotiation Skills",
  skills: "Preparing a negotiation plan, Asking with confidence, Trading instead of giving in, Staying calm under pressure, Getting the deal in writing, Negotiating pay and price",
  outcome: "prepare and hold a fair negotiation over pay or price: know your goal, your walk-away point and the other side's needs, ask with a reason, trade instead of giving in, stay calm under pressure, and confirm the deal in writing.",
  about: [
    "You negotiate more often than you think: a job offer, a raise, a price with a supplier, a quote for a customer, a lease, a sponsorship or NIL deal, even who does which chores at home. Good negotiators are not pushy. They prepare, ask clearly, listen and look for a deal both sides can keep.",
    "This course is for athletes, business owners, workers, job seekers and team leaders. The examples come from job offers, small shops, contractors, sponsorships and the workplace.",
    "You will build a one-page negotiation plan, practise asking, learn to trade instead of giving in, handle pressure, get the deal in writing, and use it all on pay and price. Each lesson takes about five minutes. There is a knowledge check after each chapter and a 20-question quiz at the end. For big contracts, such as NIL deals, leases or loans, get the final papers checked by a lawyer, an agent you trust or your school's compliance office."
  ],
  finalTask: "Write a one-page plan for a real pay or price negotiation (your goal, your walk-away point, your plan B, the other side's needs, your opening ask with a reason, and two things you could trade). Role-play it with a friend who pushes back, then write the short follow-up email that confirms what was agreed.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Athletes and other adults who need to agree pay or price: job seekers and workers, student-athletes with NIL or sponsor offers, and small business owners buying from suppliers or selling to customers.",
    startingPoint: "Have accepted job offers, prices or deals as given, or bargained without a plan. Many feel nervous asking for more and give in when pushed.",
    gap: "People who never ask, or who drop their number under pressure, leave pay and profit on the table and sign deals they regret. A written plan, a clear ask with a reason, trading instead of giving in, calm answers to pressure and a deal in writing protect their income and their reputation.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a phone or computer for research and email; paper works for the plan",
      "Time: about 5 minutes per lesson plus a role-play with a friend",
      "Pay laws differ by state and country; learners check their own labor department",
      "Big contracts such as NIL or sponsorship deals need a lawyer, agent or compliance office; no private ID or bank numbers in AI tools"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a real pay or price negotiation", action: "write a one-page plan with your goal, walk-away point, plan B and the other side's needs", standard: "with every part filled in before you talk" },
    { id: "O2", condition: "When you open a negotiation", action: "make a clear ask a little above your goal with a reason, then stop talking", standard: "in one or two sentences" },
    { id: "O3", condition: "When the other side pushes back on your number", action: "offer an \"If you can..., then I can...\" trade instead of giving in", standard: "naming at least two things besides money that you could trade" },
    { id: "O4", condition: "When someone uses a pressure tactic", action: "respond calmly by asking for time, or say no politely to an offer below your walk-away point", standard: "without agreeing on the spot" },
    { id: "O5", condition: "At the end of any deal", action: "confirm every agreed point in writing and read it before you sign", standard: "with price, dates and terms listed the same day" },
    { id: "O6", condition: "Before a pay or price talk", action: "research a fair number using pay data, job postings or three quotes, and your own costs", standard: "using at least one trusted source" }
  ],
  chapters: [
    {
      name: "Chapter 1: Preparing and asking",
      lessons: [
        {
          objectives: ["O1"],
          title: "Preparing: your goal, your walk-away point and their needs",
          minutes: 5,
          goal: "Write a one-page negotiation plan before you talk.",
          text: [
            "Most of a negotiation is won before it starts. Preparing means answering three questions on paper.",
            "Your goal: what would a great but realistic result be? Be specific: \"$19 an hour and Saturdays off\" or \"$4.50 a case, delivered weekly\". Your walk-away point: the worst deal you would still accept. Below it, you say no. Know your plan B, the best thing you can do if there is no deal, such as another job offer, another supplier or keeping your current job. A strong plan B gives you confidence.",
            "The other side's needs: what do they want, and what are they worried about? An employer may need someone reliable who can start soon. A sponsor may want your posts to reach their customers. A supplier may want a steady monthly order. When you know their needs, you can offer things that cost you little but matter to them."
          ],
          steps: ["Write your goal, with numbers.", "Write your walk-away point.", "Write your plan B if there is no deal.", "List the other side's needs and worries.", "List things you could offer that matter to them."],
          words: [["Walk-away point", "the worst deal you would still accept; below it you say no."], ["Plan B", "what you will do if there is no deal. Negotiation books call it a BATNA."], ["Negotiation", "talking with someone to reach an agreement you both accept."]],
          slides: [
            { title: "Prepare on paper", bullets: ["Most of a negotiation is won before it starts", "Answer three questions"] },
            { title: "1. Your goal", bullets: ["Great but realistic", "Specific: \"$19 an hour and Saturdays off\""] },
            { title: "2. Your walk-away point and plan B", bullets: ["The worst deal you would accept", "Plan B: what you do with no deal", "A strong plan B gives confidence"] },
            { title: "3. Their needs", bullets: ["Employer: someone reliable who starts soon", "Sponsor: reach their customers", "Supplier: a steady monthly order"] }
          ],
          tryIt: "Pick a real negotiation coming up: a pay talk, a price with a supplier or customer, rent, or a sponsorship. Write your goal, walk-away point, plan B and the other side's top two needs.",
          youCanNow: "prepare for a negotiation by writing your goal, walk-away point, plan B and the other side's needs.",
          quickCheck: [
            { objective: "O1", q: "What is your plan B?", options: ["Your opening ask", "The best thing you can do if there is no deal", "The other side's walk-away point", "A second copy of your plan"], answer: 1, why: "Your plan B is your best option if there is no deal, such as another offer or keeping your current job." },
            { objective: "O1", q: "You are preparing to ask a supplier for a better price. What do you write down about them?", options: ["Nothing; only your own goal matters", "Their home address", "A list of their mistakes", "What they want and worry about, such as a steady monthly order"], answer: 3, why: "Knowing the other side's needs helps you offer things that cost you little but matter to them." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Asking with confidence",
          minutes: 5,
          goal: "Make a clear opening ask with a reason, then stop talking.",
          text: [
            "Many people never get more because they never ask. The first number said out loud often shapes the whole talk, so it helps to make a clear, reasonable ask yourself. Aim a little above your goal so there is room to move, but keep it something you can explain.",
            "Give a reason: \"Based on the pay for this job in our area and my two years running a kitchen line, I am asking for $21 an hour.\" Or for a business: \"For a 12-month order paid on time, we are asking for $4.20 a case.\" Then stop talking. The silence can feel awkward, but it gives them time to think. Do not argue against yourself.",
            "Ask questions too, and listen to the answers: \"What is most important to you in this deal?\" \"What flexibility do you have on the start date?\" The answers tell you what you can trade."
          ],
          steps: ["Choose an opening ask a little above your goal.", "Write one reason you can explain.", "Say the ask and the reason calmly.", "Stop talking and wait.", "Ask open questions and listen for what they need."],
          words: [["Opening ask", "the first thing you ask for in a negotiation."], ["Anchor", "the first number said; it often shapes the rest of the talk."]],
          slides: [
            { title: "You don't get what you don't ask for", bullets: ["The first number shapes the talk", "Aim a little above your goal", "Keep it something you can explain"] },
            { title: "Ask with a reason", bullets: ["\"Based on local pay and my 2 years on a kitchen line,", "I am asking for $21 an hour.\""] },
            { title: "Then stop talking", bullets: ["Silence gives them time to think", "Do not argue against yourself"] },
            { title: "Ask and listen", bullets: ["\"What matters most to you in this deal?\"", "\"What flexibility do you have on the start date?\""] }
          ],
          tryIt: "Write your opening ask and one reason for your real negotiation. Say it out loud three times in a calm voice, and stop for five full seconds after each time.",
          youCanNow: "make a clear opening ask with a reason, stay silent, and ask questions that reveal the other side's needs.",
          quickCheck: [
            { objective: "O2", q: "Why is it helpful to make the first reasonable number yourself?", options: ["The first number said out loud often shapes the whole talk", "It ends the negotiation faster", "The other side must accept it", "It shows you do not care"], answer: 0, why: "The lesson says the first number often shapes the talk, so a clear ask with a reason helps you." },
            { objective: "O2", q: "You just made your ask with a reason, and the room goes quiet. What do you do?", options: ["Lower your number right away", "Explain again why you might not deserve it", "Stay quiet and let them think", "Leave the room"], answer: 2, why: "Silence gives them time to think; talking can lead you to argue against yourself." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trading instead of giving in",
          minutes: 5,
          goal: "Use \"if... then...\" trades so you never give something for nothing.",
          text: [
            "When the other side pushes back, do not just drop your number. Trade. Every time you give something, ask for something back. The simple tool is \"If you can..., then I can...\".",
            "Look for things that are cheap for one side and valuable to the other. A worker: \"If you can't move on the hourly rate, could we review it after 90 days, or add one extra paid day off?\" A small business: \"If you pay upfront, then I can take 5 percent off.\" An athlete with a sponsor: \"If you want two extra posts, then I would need a higher fee or free product for the team.\"",
            "Pay is not the only thing on the table. Think about start date, schedule, training, equipment, delivery, payment terms, length of contract, and title. More things to trade means more ways to a deal both sides like."
          ],
          steps: ["Never give something for nothing.", "Use \"If you can..., then I can...\".", "List what is cheap for you but valuable to them.", "Look beyond money: schedule, start date, training, delivery, terms.", "Check every trade against your walk-away point."],
          words: [["Trade", "giving something only when you get something back."], ["Concession", "something you give up during a negotiation."], ["Terms", "the details of a deal, such as when and how payment happens."]],
          slides: [
            { title: "Trade; don't give in", bullets: ["Every time you give, ask for something back", "\"If you can..., then I can...\""] },
            { title: "Examples", bullets: ["\"If the rate can't move, could we review it after 90 days?\"", "\"If you pay upfront, I can take 5 percent off.\"", "\"Two extra posts means a higher fee.\""] },
            { title: "More than money", bullets: ["Schedule and start date", "Training and equipment", "Delivery, payment terms, contract length"] },
            { title: "Stay safe", bullets: ["Check each trade against your walk-away point"] }
          ],
          tryIt: "For your real negotiation, list three things you could offer and three things you could ask for besides money. Write two \"If you can..., then I can...\" sentences.",
          youCanNow: "trade concessions with \"if... then...\" instead of giving things away.",
          quickCheck: [
            { objective: "O3", q: "What does trading mean in a negotiation?", options: ["Giving in to end the talk", "Asking for something back each time you give something", "Swapping jobs with someone", "Repeating your first number"], answer: 1, why: "Trading means every time you give something, you ask for something back." },
            { objective: "O3", q: "An employer cannot raise the hourly rate. What is a good trade to ask for?", options: ["Nothing; accept as it is", "Ask them to promise a raise someday", "Threaten to quit", "A pay review after 90 days or an extra paid day off"], answer: 3, why: "Things besides money, like a 90-day review or a day off, can make the deal work for both sides." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Preparing and asking",
        questions: [
          { objective: "O1", q: "Your walk-away point is:", options: ["The best deal you can imagine", "The worst deal you would still accept", "The other side's first offer", "Your favourite number"], answer: 1, why: "Below your walk-away point, you say no." },
          { objective: "O1", q: "Why does a strong plan B help?", options: ["It lets you insult the other side", "It means you never need to prepare", "It gives you confidence to say no to a bad deal", "It guarantees you win"], answer: 2, why: "A good option without a deal makes you less likely to accept a bad one." },
          { objective: "O2", q: "Which opening ask is strongest?", options: ["\"Whatever you think is fair.\"", "\"Sorry, could I maybe get a bit more?\"", "\"I'll take anything.\"", "\"Based on local pay and my experience, I'm asking for $21 an hour.\""], answer: 3, why: "A clear number with a reason is easy to take seriously." },
          { objective: "O2", q: "After making your ask, you should:", options: ["Stop talking and let them think", "Lower it right away", "Keep explaining why you might not deserve it", "Leave the room"], answer: 0, why: "Silence gives them time to respond; don't argue against yourself." },
          { objective: "O3", q: "The supplier says no to your price. Which reply is a trade?", options: ["\"OK, I'll pay full price.\"", "\"If I order for 12 months, could you do $4.20 a case?\"", "\"You're ripping me off.\"", "\"Fine, never mind.\""], answer: 1, why: "It offers something they value in return for what you want." }
        ]
      }
    },
    {
      name: "Chapter 2: Closing the deal",
      lessons: [
        {
          objectives: ["O4"],
          title: "Staying calm under pressure",
          minutes: 5,
          goal: "Recognize pressure tactics and respond calmly.",
          text: [
            "Some people use pressure to rush you: \"This offer ends today,\" \"Take it or leave it,\" a very low first offer, long silences, or one person acting tough while another acts friendly. These tactics work by making you feel you must decide now.",
            "Your best tool is time. It is almost always fine to say: \"Thank you. I'd like to take until tomorrow to think it over.\" Slow your breathing, keep your voice level and look at your written plan. If the offer is below your walk-away point, you can say no politely: \"I appreciate it, but I can't make that work.\"",
            "Stay respectful even if they do not. Talk about the problem, not the person. Being calm and polite keeps the door open for a better offer later. If anyone threatens you or asks you to do something dishonest or unsafe, walk away."
          ],
          steps: ["Notice the pressure: deadlines, take-it-or-leave-it, very low offers.", "Breathe and slow down.", "Look at your plan and walk-away point.", "Ask for time: \"I'd like until tomorrow to think it over.\"", "Say no politely if it is below your walk-away point."],
          words: [["Pressure tactic", "a trick to rush you into deciding before you are ready."], ["Lowball offer", "an offer far below what is fair."]],
          slides: [
            { title: "Common pressure tactics", bullets: ["\"This offer ends today\"", "\"Take it or leave it\"", "A very low first offer"] },
            { title: "Your best tool is time", bullets: ["\"I'd like until tomorrow to think it over.\"", "Breathe and check your written plan"] },
            { title: "Say no politely", bullets: ["\"I appreciate it, but I can't make that work.\"", "Below your walk-away point means no"] },
            { title: "Keep it respectful", bullets: ["Problem, not person", "Threats or dishonesty: walk away"] }
          ],
          tryIt: "Write your calm reply to three pressure lines: \"This offer ends today,\" \"Take it or leave it,\" and a lowball offer. Say each reply out loud in a level voice.",
          youCanNow: "spot pressure tactics and respond calmly by asking for time or saying no politely.",
          quickCheck: [
            { objective: "O4", q: "Which is a pressure tactic?", options: ["\"This offer ends today.\"", "\"What matters most to you?\"", "\"Let me send you the details by email.\"", "\"Thanks for meeting with me.\""], answer: 0, why: "Deadlines like \"ends today\" try to rush you into deciding now." },
            { objective: "O4", q: "The other side gets rude during the talk. What should you do?", options: ["Be rude back", "Agree to anything to end it", "Stay respectful and talk about the problem, not the person", "Post about them online"], answer: 2, why: "Staying calm and polite keeps the door open for a better offer later." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Getting it in writing",
          minutes: 5,
          goal: "Confirm an agreement in writing and read it before you sign.",
          text: [
            "A deal you only said out loud is easy to forget or remember differently. At the end of any negotiation, sum it up out loud: \"So we agreed $20 an hour, starting 3 November, with a pay review after 90 days.\" Then put it in writing.",
            "For a job, ask for a written offer letter. For a business deal, send a short email the same day that lists every point you agreed: price, amounts, dates, payment terms and who does what. Ask them to reply to confirm.",
            "Read every page before you sign, and make sure it matches what was agreed. Do not sign anything blank or that you do not understand. For big or long contracts, such as NIL or sponsorship deals, leases, loans or business partnerships, have a lawyer, a trusted agent, a legal aid clinic or your school's compliance office review it first. An AI assistant can explain hard words in a contract, but it is not a lawyer, and do not paste in private details such as ID or bank numbers."
          ],
          steps: ["Sum up the deal out loud.", "Ask for a written offer or send a summary email the same day.", "List price, amounts, dates, terms and who does what.", "Ask them to reply to confirm.", "Read every page before you sign; get big contracts reviewed."],
          words: [["Offer letter", "a written job offer that states pay, start date and other terms."], ["Contract", "a written agreement that the law can enforce."]],
          slides: [
            { title: "Say it back", bullets: ["\"So we agreed $20 an hour, starting 3 November,", "with a pay review after 90 days.\""] },
            { title: "Put it in writing", bullets: ["Jobs: ask for an offer letter", "Business: send a summary email the same day", "Ask them to reply to confirm"] },
            { title: "Before you sign", bullets: ["Read every page", "Check it matches what you agreed", "Never sign blank or unclear papers"] },
            { title: "Big contracts", bullets: ["NIL, sponsorships, leases, loans, partnerships", "Get a lawyer, agent or compliance office to review"] }
          ],
          tryIt: "Write a short summary email for a deal (real or practice) that lists price or pay, dates, terms and who does what, and ends with: \"Please reply to confirm this matches your understanding.\"",
          youCanNow: "sum up a deal, confirm it in writing and know when to get a contract reviewed.",
          quickCheck: [
            { objective: "O5", q: "What is the best written proof of a new job deal?", options: ["A text from a friend", "An offer letter", "Your own notes from memory", "A handshake"], answer: 1, why: "For a job, the lesson says to ask for a written offer letter." },
            { objective: "O5", q: "You are handed a contract with a blank section to \"fill in later\". What do you do?", options: ["Sign quickly so you do not lose the deal", "Sign and cross your fingers", "Ask an AI to sign it for you", "Do not sign until it is complete and you understand it"], answer: 3, why: "Never sign anything blank or that you do not understand." }
          ]
        },
        {
          objectives: ["O6","O3"],
          title: "Negotiating pay and price",
          minutes: 6,
          goal: "Research a fair number and negotiate a job offer or a price.",
          text: [
            "Pay: research before you talk. The US Bureau of Labor Statistics Occupational Outlook Handbook (bls.gov/ooh) lists typical pay for hundreds of jobs. Job postings show ranges too. In California, employers with 15 or more employees must put the pay scale in job postings, and an applicant can ask for the pay scale of the job they applied for. California employers also generally may not ask about your past pay, but they may ask what pay you expect. Rules differ by state, so check your state labor department.",
            "When you get an offer: thank them, show you are excited, and ask for time if you need it. Then counter with a reason: \"I'm excited about this role. Based on the posted range and my forklift certification, could you do $22?\" If pay can't move, trade: start date, schedule, training or a review after 90 days.",
            "Price: for buying, get at least three quotes so you know the going rate. For selling, know your costs so you never agree below what keeps your business alive. Offer options instead of discounts: a smaller package for less, or a lower price for a bigger order or faster payment."
          ],
          steps: ["Research the going rate: bls.gov/ooh, job postings or three quotes.", "Set your goal and walk-away point from that research.", "Thank them and show interest.", "Counter with a number and a reason.", "If money can't move, trade other terms.", "Confirm the final deal in writing."],
          words: [["Pay scale", "the salary or hourly range an employer expects to pay for a job."], ["Counteroffer", "your answer to an offer, asking for different terms."], ["Quote", "a price someone offers for a job or product."]],
          sources: [
            { name: "California Labor Commissioner: Equal Pay Act FAQ (pay scales, salary history)", url: "https://www.dir.ca.gov/dlse/California_Equal_Pay_Act.htm" },
            { name: "US Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }
          ],
          slides: [
            { title: "Research pay first", bullets: ["bls.gov/ooh lists typical pay for many jobs", "Job postings show ranges", "Rules differ by state: check yours"] },
            { title: "California rules", bullets: ["15+ employees: pay scale in job postings", "Applicants can ask for the job's pay scale", "Generally no questions about your past pay"] },
            { title: "Countering an offer", bullets: ["Thank them and show interest", "\"Based on the range and my certification, could you do $22?\"", "Can't move? Trade schedule, training or a 90-day review"] },
            { title: "Price", bullets: ["Buying: get three quotes", "Selling: know your costs", "Offer options, not just discounts"] }
          ],
          tryIt: "Final task: write your one-page plan for a real pay or price negotiation using real research. Role-play it with a friend who uses one pressure tactic, then write the follow-up email that confirms the deal.",
          youCanNow: "research a fair number, counter a job offer or price with a reason, and close the deal in writing.",
          quickCheck: [
            { objective: "O6", q: "Where can US workers look up typical pay for many jobs?", options: ["A social media poll", "The BLS Occupational Outlook Handbook at bls.gov/ooh", "Any online forum", "The employer's competitors"], answer: 1, why: "The BLS Occupational Outlook Handbook lists typical pay for hundreds of jobs." },
            { objective: "O6", q: "A customer asks you for a discount. What is a good option to offer?", options: ["A lower price for a bigger order or faster payment", "Half price with nothing in return", "A price below your costs", "Refuse to talk about price"], answer: 0, why: "Offering options instead of plain discounts protects your costs while helping the customer." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Closing the deal",
        questions: [
          { objective: "O4", q: "Someone says \"This offer ends today.\" What is a calm reply?", options: ["Sign right away", "Shout that it's unfair", "\"Thank you. I'd like until tomorrow to think it over.\"", "Lower your ask by half"], answer: 2, why: "Asking for time takes the pressure off." },
          { objective: "O4", q: "The offer is below your walk-away point. You should:", options: ["Say no politely", "Accept it anyway", "Insult them", "Ignore them"], answer: 0, why: "Below your walk-away point means no, said respectfully." },
          { objective: "O5", q: "What should you do right after agreeing a deal with a supplier by phone?", options: ["Nothing; you'll remember it", "Post it on social media", "Wait a month", "Send an email the same day listing every point agreed"], answer: 3, why: "A written summary prevents different memories later." },
          { objective: "O5", q: "You are offered an NIL deal with a long contract. What is wise?", options: ["Sign it today before it disappears", "Have a lawyer, trusted agent or compliance office review it first", "Let an AI assistant sign for you", "Sign without reading because it is long"], answer: 1, why: "Big contracts should be reviewed before signing." },
          { objective: "O6", q: "In California, what must employers with 15 or more employees put in job postings?", options: ["The pay scale", "The boss's phone number", "Your past pay", "Nothing about pay"], answer: 0, why: "California requires the pay scale in postings for employers with 15+ employees." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Negotiation Skills",
    questions: [
      { objective: "O1", q: "Most of a negotiation is won:", options: ["By talking the loudest", "Before it starts, by preparing", "At the very last second", "By luck"], answer: 1, why: "Preparation sets your goal, limits and options." },
      { objective: "O1", q: "Which goal is best for a negotiation plan?", options: ["\"More money\"", "\"A good deal\"", "\"Whatever they offer\"", "\"$19 an hour and Saturdays off\""], answer: 3, why: "Specific goals with numbers guide the talk." },
      { objective: "O1", q: "Your plan B is:", options: ["What you will do if there is no deal", "Your first offer", "The other side's walk-away point", "A second contract"], answer: 0, why: "Plan B is your best option without a deal." },
      { objective: "O1", q: "Why think about the other side's needs?", options: ["To trick them", "So you can give in faster", "To find things you can offer that matter to them", "It doesn't matter"], answer: 2, why: "Knowing their needs shows what to trade." },
      { objective: "O1", q: "A sponsor most likely needs:", options: ["Your bank password", "Your posts to reach their customers", "You to work for free", "Your home address"], answer: 1, why: "Sponsors pay to reach people who might buy." },
      { objective: "O2", q: "Why make the first reasonable ask yourself?", options: ["The first number often shapes the whole talk", "It is rude to wait", "It ends the talk faster", "The law requires it"], answer: 0, why: "The first number said acts as an anchor." },
      { objective: "O2", q: "Your opening ask should be:", options: ["Far below your goal", "A secret", "Exactly your walk-away point", "A little above your goal, with a reason"], answer: 3, why: "It leaves room to move and is easy to explain." },
      { objective: "O3", q: "Which question helps you learn what to trade?", options: ["\"Why are you so cheap?\"", "\"Can I just have it?\"", "\"What matters most to you in this deal?\"", "\"Is that your final answer?\""], answer: 2, why: "Open questions reveal the other side's needs." },
      { objective: "O3", q: "The \"If you can..., then I can...\" tool helps you:", options: ["Give things away for free", "Trade instead of giving in", "End the talk", "Avoid listening"], answer: 1, why: "It ties every concession to something back." },
      { objective: "O3", q: "Which is something besides money you could negotiate for a job?", options: ["Your coworkers' pay", "The company's tax return", "Start date or a 90-day pay review", "Nothing else is allowed"], answer: 2, why: "Schedule, start date, training and reviews are all negotiable." },
      { objective: "O3", q: "A customer wants a lower price. A good option-based reply is:", options: ["\"If you pay upfront, I can take 5 percent off.\"", "\"Sure, half price.\"", "\"No discounts ever, goodbye.\"", "\"I'll lose money but OK.\""], answer: 0, why: "It trades the discount for something you value." },
      { objective: "O4", q: "\"Take it or leave it\" is an example of:", options: ["A plan B", "A pressure tactic", "A written offer", "A counteroffer"], answer: 1, why: "It tries to rush you into deciding." },
      { objective: "O4", q: "Your best tool against pressure is:", options: ["Shouting", "Signing fast", "Lying", "Time: asking to think it over"], answer: 3, why: "Time lets you check your plan and calm down." },
      { objective: "O4", q: "During a tense talk, it is best to:", options: ["Attack the person", "Talk about the problem, not the person", "Leave without a word", "Raise your voice"], answer: 1, why: "Respect keeps the door open for a better deal." },
      { objective: "O5", q: "Someone asks you to sign a blank form and \"fill it in later\". You should:", options: ["Sign it", "Sign only the first page", "Refuse; never sign blank or unclear papers", "Ask an AI to sign"], answer: 2, why: "Blank papers can be filled in with anything." },
      { objective: "O5", q: "For a new job, the best written proof of the deal is:", options: ["An offer letter", "A text from a friend", "Your memory", "A social media post"], answer: 0, why: "An offer letter states pay, start date and terms." },
      { objective: "O6", q: "Where can US workers look up typical pay for many jobs?", options: ["A random forum", "A pop-up ad", "Only from the employer", "The BLS Occupational Outlook Handbook at bls.gov/ooh"], answer: 3, why: "The BLS handbook lists typical pay for hundreds of jobs." },
      { objective: "O6", q: "In California, can an employer generally ask about your past pay?", options: ["Yes, always", "Generally no, but they may ask what pay you expect", "Only by email", "Only if you are under 25"], answer: 1, why: "California generally bans seeking salary history; expectations may be asked." },
      { objective: "O6", q: "Before buying supplies for your business, a smart step is to:", options: ["Take the first price", "Ask the supplier to choose for you", "Get at least three quotes", "Never compare"], answer: 2, why: "Several quotes show the going rate." },
      { objective: "O6", q: "When selling, why must you know your costs?", options: ["So you never agree to a price that loses money", "To show customers your bills", "It is not important", "To raise prices on friends"], answer: 0, why: "Knowing costs sets your walk-away price." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      5,
      8,
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Plan on paper",
        objective: "O1",
        notYet: "The plan is missing the goal, walk-away point, plan B or the other side's needs.",
        meets: "All four parts are written, specific and realistic.",
        exceeds: "The other side's needs are linked to things you could offer them."
      },
      {
        name: "Fair number researched",
        objective: "O6",
        notYet: "The goal is a guess with no source.",
        meets: "The goal is based on at least one trusted source, such as pay data, job postings or three quotes.",
        exceeds: "Names the source and, for selling, shows the price covers your costs."
      },
      {
        name: "Clear ask",
        objective: "O2",
        notYet: "No number, or a number with no reason.",
        meets: "A clear opening ask a little above the goal, with a reason, and then silence.",
        exceeds: "The ask also includes a question to learn what matters to the other side."
      },
      {
        name: "Trades, not give-ins",
        objective: "O3",
        notYet: "Dropped the number when pushed, with nothing in return.",
        meets: "Used at least one \"If you can..., then I can...\" trade in the role-play.",
        exceeds: "Offered two or more trades besides money that cost little but matter to the other side."
      },
      {
        name: "Calm under pressure",
        objective: "O4",
        notYet: "Agreed on the spot or got upset when pushed.",
        meets: "Asked for time or said no politely, and stayed respectful.",
        exceeds: "Named the pressure tactic afterward and how they handled it."
      },
      {
        name: "Deal in writing",
        objective: "O5",
        notYet: "No follow-up email, or it leaves out agreed points.",
        meets: "The email lists every agreed point (price or pay, dates, terms) and asks them to confirm.",
        exceeds: "The email is short, polite and ready to send the same day."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report asking for higher pay, a better price or better terms within 30 days (follow-up survey)",
      "Learners who report a raise, a better offer or a better supplier price after negotiating",
      "Learners who confirm a deal in writing or have a big contract reviewed before signing"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper and pen, or a phone or computer, for the one-page plan",
      "Internet access to research pay or prices, such as bls.gov/ooh or job postings",
      "A friend or partner for the role-play",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Pair learners for the role-play and give the person pushing back a card with one pressure tactic to use.",
      "Use examples that fit the group: hourly pay for job seekers, NIL and sponsor deals for athletes, supplier prices for business owners.",
      "Remind student-athletes to check NIL deals with their school's compliance office, and anyone with a big contract to get it reviewed.",
      "Pay laws differ by state and country; point learners to their own labor department rather than giving legal advice.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
