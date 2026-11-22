"use strict";

// Koach Learn course: Re-Entry -> "Rebuilding Family and Community Ties" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Skill-building: by the end the student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course.
// Facts checked 28 Oct 2026: childsupport.ca.gov (modify my payment; incarcerated parent request), 988lifeline.org (call, text, chat; free, 24/7), 211.org.
// acf.gov (federal Office of Child Support Services) blocked the fetch, so the lesson tells students outside California to ask their state or tribal child support agency.

module.exports = {
  id: "reentry-family-ties",
  category: "Re-Entry",
  name: "Rebuilding Family and Community Ties",
  skills: "Planning a first contact, Reconnecting with your children, Asking for a child support review, Listening and apologizing, Finding mentors and community groups, Setting healthy boundaries",
  outcome: "make a plan to reconnect with family and children, take the first step on child support if it applies, find mentors and community support, and set boundaries that protect your progress.",
  about: [
    "Coming home is not only about a job and a place to live. The people around you matter just as much. Family, children, friends, mentors and community groups can help you stay on track, and rebuilding those ties is a skill you can learn.",
    "In this course you will plan a first contact, learn how to reconnect with your children at their pace, ask for a child support review if your order no longer fits your income, practice listening and apologizing, find mentors and community groups, and set healthy boundaries. You will also make a support list that includes the 988 Suicide and Crisis Lifeline.",
    "Every family is different. Some people will welcome you quickly, some need time, and some contact may not be safe or allowed. Always follow court orders, and ask a counselor, legal aid or your parole or probation officer when you are unsure.",
    "Each lesson takes about five minutes and ends with a task you do right away. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Write a one-page reconnection and support plan: the first family member you will contact and your first message to them, one step on parenting or child support if it applies, two community supports (a mentor, group or faith community), two boundaries you will keep, and a support list of people and numbers to call, including 988.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults coming home from prison (re-entry) who want to reconnect with family, children, friends and community. Some are parents with child support orders; some have court orders limiting contact.",
    startingPoint: "Know the people they want to reach and may have some contact by phone or letter. Many feel unsure how to start, worry about rejection, and do not know how child support reviews, mentoring or support groups work.",
    gap: "Strong ties with family and community help people stay on track after release, but a rushed or poorly planned first contact can hurt relationships, and ignored child support can grow into large debt. Learners need a plan to reconnect at others' pace, rebuild trust, find support and protect their progress.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 6)",
      "Devices: a basic phone or smartphone; paper and pen work too",
      "Time: about 5-minute lessons that fit around work and appointments",
      "Court orders, no-contact orders and parole or probation conditions always come first",
      "Emotional topics: learners share only what they choose, and 988 is on every support list"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the people you want to reconnect with", action: "choose who to contact first and write a short, respectful first message", standard: "with no demand for money, blame or pressure, and following any court order" },
    { id: "O2", condition: "Given a child you want to reconnect with", action: "plan a first visit or call that puts the child's needs first", standard: "with questions for the caregiver and one small promise you can keep" },
    { id: "O3", condition: "Given a child support order that no longer fits your income", action: "ask your child support agency for a review", standard: "with the agency's contact, the papers needed and a date to contact them" },
    { id: "O4", condition: "Given a hard conversation", action: "use listening, I-statements and a three-part apology", standard: "with no \"but\" in the apology and no request to be forgiven" },
    { id: "O5", condition: "Using 211, your case manager or local groups", action: "find a mentor and one community group and ask the mentor for a specific commitment", standard: "with contact details for each and the exact words of your ask" },
    { id: "O6", condition: "Given people or situations that could set you back", action: "set two healthy boundaries and write a support list that includes 988", standard: "with the list kept in your phone and on paper" }
  ],
  chapters: [
    {
      name: "Chapter 1: Reconnecting with family and children",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planning your first contact",
          minutes: 5,
          goal: "Choose who to contact first and write a short, respectful first message.",
          text: [
            "While you were away, your family kept living. Children grew, people moved, some relationships got stronger and some got hurt. Reconnecting goes best when you plan it instead of showing up unannounced.",
            "Start by making a list of the people you want back in your life. Next to each name, write how things were left and whether there is any court order, such as a no-contact or custody order. Follow every order. If you are not sure, ask your parole or probation officer or legal aid.",
            "Pick one person who is likely to be open, and start small: a letter, a text or a short call. Say you are home, say you would like to reconnect, and let them choose the pace. Do not ask for money or a place to stay in the first message.",
            "Expect mixed feelings, including your own. If someone is not ready, thank them and leave the door open. That is not the end; it is the start."
          ],
          steps: ["List the people you want to reconnect with.", "Note how things were left and any court orders; follow every order.", "Choose one person likely to be open.", "Write a short message: you are home, you would like to reconnect, they can choose the pace.", "Send it, then give them time to answer."],
          words: [["No-contact order", "a court order that says you may not contact a certain person."], ["Custody order", "a court order about who children live with and who makes decisions for them."], ["Pace", "how fast something happens."]],
          slides: [
            { title: "Plan, do not surprise", bullets: ["Family kept living while you were away", "A planned first contact goes better"] },
            { title: "Make your list", bullets: ["Who you want back in your life", "How things were left", "Any court orders: follow them all"] },
            { title: "Start small", bullets: ["A letter, a text or a short call", "Say you are home and want to reconnect", "Let them choose the pace"] },
            { title: "If they are not ready", bullets: ["Thank them", "Leave the door open", "Try again later, gently"] }
          ],
          tryIt: "Write your list of people, then choose one person and write a first message of three or four sentences. Read it out loud. Take out anything that asks for money, blames anyone or pushes for a quick answer.",
          youCanNow: "plan a first contact, follow any court orders, and write a short, respectful message that lets the other person choose the pace.",
          quickCheck: [
            { objective: "O1", q: "What should a first message to a family member include?", options: ["A request to stay at their place", "That you are home and would like to reconnect", "A list of what they did wrong", "A demand for an answer today"], answer: 1, why: "A short, respectful message opens the door without pressure." },
            { objective: "O1", q: "Your brother replies that he needs time before talking. What would you do?", options: ["Call him every day until he answers", "Show up at his house", "Thank him and leave the door open", "Ask other family to pressure him"], answer: 2, why: "Respecting his pace keeps the door open for later." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reconnecting with your children",
          minutes: 6,
          goal: "Plan a first visit or call with your child that puts the child's needs first.",
          text: [
            "Children need three things from a returning parent: safety, honesty they can understand, and a parent who shows up again and again. Being consistent matters more than big gifts or big promises.",
            "Work with the adult who cares for your child now. Ask them what the child knows, what the child is ready for, and what times work. Speak respectfully about the other parent or caregiver in front of the child, even when it is hard.",
            "Be honest in words that fit the child's age. A young child may only need: I made a mistake, I was away, and I am here now. Older children may have questions or anger. Listen, do not argue, and do not make promises you cannot keep.",
            "If you need visits or a change in custody, your state court's self-help website explains the forms, and family law facilitators or legal aid can help. Never take a child or pressure a caregiver outside a court order."
          ],
          steps: ["Talk with the child's caregiver first.", "Ask what the child knows and is ready for.", "Plan a short first visit or call at a time that works for the child.", "Use honest words that fit the child's age.", "Keep every promise, starting with small ones, such as calling when you said you would."],
          words: [["Caregiver", "the adult who looks after a child day to day."], ["Visitation", "the time a parent spends with a child who does not live with them, often set by a court."], ["Family law facilitator", "a court helper who explains family law forms, often for free."]],
          slides: [
            { title: "What children need", bullets: ["Safety", "Honesty they can understand", "A parent who shows up again and again"] },
            { title: "Work with the caregiver", bullets: ["Ask what the child knows and is ready for", "Agree on times", "Speak respectfully about them"] },
            { title: "Honest, age-right words", bullets: ["Young: I was away, I am here now", "Older: listen to questions and anger", "No promises you cannot keep"] },
            { title: "Visits and custody", bullets: ["Use your state court's self-help website", "Ask a family law facilitator or legal aid", "Always follow court orders"] }
          ],
          tryIt: "Write down three questions to ask your child's caregiver before a first visit or call, and one small promise you know you can keep, such as calling every Sunday at 6 pm.",
          youCanNow: "plan a first visit or call that puts your child first, work with the caregiver, and keep small promises that build trust.",
          quickCheck: [
            { objective: "O2", q: "What builds a child's trust most after a parent comes home?", options: ["Expensive gifts", "Big promises about the future", "One long visit", "Keeping small promises again and again"], answer: 3, why: "Children trust a parent who keeps showing up and keeping small promises." },
            { objective: "O2", q: "You want to call your daughter for the first time in years. What would you do first?", options: ["Talk with her caregiver", "Call her school", "Message her on social media", "Show up after school"], answer: 0, why: "The caregiver can help plan contact that puts the child's needs first." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Child support: asking for a review",
          minutes: 5,
          goal: "Ask your child support agency for a review when your order no longer fits your income.",
          text: [
            "Child support does not stop by itself when your income changes. Unpaid support can build up into a large debt and lead to things like a suspended driver's license. Ignoring it makes it worse. Asking for a review is the right move.",
            "In California, either parent can ask the local child support agency for a review and adjustment, called a modification. There is no charge. It can apply when the order would change by 20% or $50, whichever is less. Changes that count include losing or starting a job, a change in income, custody changes, disability, incarceration and military deployment. A parent who will be incarcerated for 60 days or more in a row can ask for a lower order using the Incarcerated Parent's Request to Review Child Support form.",
            "Bring proof of your income and expenses, such as pay stubs or a benefits letter. If both parents agree, they can sign an agreement for the court; if not, the court decides. Your county's family law facilitator can help.",
            "Outside California, contact your state or tribal child support agency and ask how to request a review. Ask early: in many places a change only counts from the date you ask, not from when your income dropped."
          ],
          steps: ["Find your local child support agency (in California, childsupport.ca.gov).", "Call or write to ask for a review and adjustment.", "Gather proof of income and expenses.", "Keep copies and write down the date you asked.", "Pay what you can while you wait, and keep records of every payment."],
          words: [["Child support order", "a court order saying how much a parent pays to help support a child."], ["Modification", "a change to a child support order."], ["Arrears", "child support that was owed and not paid."]],
          slides: [
            { title: "Do not ignore child support", bullets: ["It does not stop by itself", "Unpaid support becomes a large debt", "Asking for a review is the right move"] },
            { title: "California review and adjustment", bullets: ["Either parent can ask; no charge", "Changes: job, income, custody, incarceration", "Jailed 60+ days in a row: ask for a lower order"] },
            { title: "What to bring", bullets: ["Proof of income and expenses", "Help: your county's family law facilitator"] },
            { title: "Outside California", bullets: ["Contact your state or tribal child support agency", "Ask early: changes often count only from when you ask"] }
          ],
          sources: [
            { name: "California Department of Child Support Services: Modify my payment", url: "https://childsupport.ca.gov/overview/modify-my-payment/" },
            { name: "California Department of Child Support Services: Home", url: "https://childsupport.ca.gov/" }
          ],
          tryIt: "Find your child support agency's website or phone number. Write down how to ask for a review, the papers they want, and the date you will contact them. If you have no order, write down one way you can help your child this month.",
          youCanNow: "ask your child support agency for a review and bring the right proof, instead of letting unpaid support build up.",
          quickCheck: [
            { objective: "O3", q: "What can happen if you ignore child support after your income drops?", options: ["The order stops by itself", "Unpaid support can build into a large debt", "The child support agency forgets about it", "Your child pays it"], answer: 1, why: "Ignored support keeps adding up, so asking for a review matters." },
            { objective: "O3", q: "You lost hours at work and your child support order is now too high. What would you do?", options: ["Stop paying and wait", "Pay only when you can", "Ask a friend to call for you", "Contact your child support agency and ask for a review"], answer: 3, why: "A review is the official way to match an order to your income." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Reconnecting with family and children",
        questions: [
          { objective: "O1", q: "You want to reconnect with a cousin you have not talked to in years. What is the best first step?", options: ["Show up at their home late at night", "Send a short message saying you are home and would like to reconnect", "Ask them for money right away", "Post about them online"], answer: 1, why: "A short, respectful message lets them choose the pace." },
          { objective: "O1", q: "There is a no-contact order with a family member. What should you do?", options: ["Follow the order", "Ignore it if you feel ready", "Ask a friend to pass messages", "Contact them once to explain"], answer: 0, why: "Court orders must always be followed; ask legal aid or your officer if unsure." },
          { objective: "O2", q: "What matters most to a child when a parent comes home?", options: ["Expensive gifts", "Big promises", "Showing up again and again", "Talking badly about the caregiver"], answer: 2, why: "Consistency builds a child's trust more than gifts or promises." },
          { objective: "O3", q: "Your income dropped and you cannot pay your child support. What do you do?", options: ["Stop paying and say nothing", "Wait until the debt is large", "Move away", "Ask your child support agency for a review"], answer: 3, why: "A review can lower the order; ignoring it lets debt build." },
          { objective: "O3", q: "In California, what does asking for a child support review cost?", options: ["$500", "Nothing", "One month of support", "It depends on the judge"], answer: 1, why: "California's review and adjustment is free." }
        ]
      }
    },
    {
      name: "Chapter 2: Community, boundaries and support",
      lessons: [
        {
          objectives: ["O4"],
          title: "Listening, apologizing and rebuilding trust",
          minutes: 5,
          goal: "Use listening, I-statements and a real apology in a hard conversation.",
          text: [
            "Trust is rebuilt by actions over time, not in one talk. Good communication helps those actions be seen.",
            "Listen first. Let the other person finish, then say back what you heard: So you felt let down when I missed your graduation. This shows you understand, even if you see it differently.",
            "Use I-statements to share your feelings without blaming: I feel nervous about this, instead of You always make this hard. A real apology names what you did, says how it hurt them, and says what you will do differently. It does not include but, and it does not demand forgiveness.",
            "Some people will need a long time. Be patient. Keep showing up, keep your word, and let the trust come back at their speed."
          ],
          steps: ["Let the other person finish talking.", "Say back what you heard.", "Share your feelings with I-statements.", "Apologize: what you did, how it hurt, what you will do differently.", "Do not add but; do not demand forgiveness.", "Keep your word afterward."],
          words: [["I-statement", "a way to share your feelings starting with I, without blaming."], ["Reflect back", "repeating in your own words what someone said, to show you understood."], ["Trust", "believing someone will do what they say."]],
          slides: [
            { title: "Trust comes back through actions", bullets: ["Not in one talk", "Communication helps actions be seen"] },
            { title: "Listen first", bullets: ["Let them finish", "Say back what you heard"] },
            { title: "A real apology", bullets: ["Name what you did", "Say how it hurt them", "Say what you will do differently", "No but; no demand to be forgiven"] },
            { title: "Be patient", bullets: ["Some need a long time", "Keep showing up and keep your word"] }
          ],
          tryIt: "Write a real apology to one person, using the three parts: what you did, how it hurt them, and what you will do differently. Check it has no but and does not ask to be forgiven. You decide later whether and when to share it.",
          youCanNow: "listen and reflect back, speak with I-statements, and give a real apology that helps rebuild trust.",
          quickCheck: [
            { objective: "O4", q: "What are the three parts of a real apology?", options: ["What you did, how it hurt them, and what you will do differently", "Why you did it, who else was at fault, and what they should do", "Sorry, but, and please forgive me", "A gift, a hug and a promise to forget"], answer: 0, why: "A real apology names the harm and the change without excuses." },
            { objective: "O4", q: "Your mother starts telling you how hurt she felt. What would you do first?", options: ["Explain your side right away", "Change the subject", "Listen and let her finish", "Leave the room"], answer: 2, why: "Listening first shows respect and helps rebuild trust." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mentors, faith and community groups",
          minutes: 5,
          goal: "Find a mentor and one community group you can join this month.",
          text: [
            "A mentor is someone a few steps ahead of you who can give advice, check in and cheer you on. Many reentry programs match people with mentors, often people who have come home themselves.",
            "Community groups give you a place to belong: reentry support groups, recovery meetings, faith communities, sports leagues, volunteer groups, parenting classes and alumni groups from programs you finished. Being around people who are building good lives makes it easier to do the same.",
            "To find them, ask your reentry program, case manager or parole officer, call 211, or ask a faith community near you. Go once, then go again. Most groups feel strange at first and better by the third visit.",
            "When you ask someone to be a mentor, be specific: Could we talk for 30 minutes once a month? I am working on keeping my job and reconnecting with my kids."
          ],
          steps: ["Ask your reentry program or case manager about mentors.", "Call 211 or ask a faith community about groups near you.", "Pick one group and go at least three times.", "Ask a possible mentor for a specific, small commitment.", "Thank people who help you."],
          words: [["Mentor", "a trusted person who gives advice and support as you grow."], ["Support group", "people with a shared experience who meet to help each other."], ["Faith community", "a church, mosque, temple or other place of worship and its members."]],
          slides: [
            { title: "Why a mentor", bullets: ["Someone a few steps ahead of you", "Advice, check-ins and encouragement", "Often someone who came home too"] },
            { title: "Places to belong", bullets: ["Reentry and recovery groups", "Faith communities and volunteering", "Sports, parenting and alumni groups"] },
            { title: "How to find them", bullets: ["Ask your reentry program or case manager", "Call 211", "Go at least three times"] },
            { title: "Asking someone to mentor you", bullets: ["Be specific and small", "30 minutes once a month", "Say what you are working on"] }
          ],
          sources: [
            { name: "211: Find local help", url: "https://www.211.org/" }
          ],
          tryIt: "Find one possible mentor and one community group. Write down how to reach each. Then write the exact words you will use to ask the mentor for a small, specific commitment.",
          youCanNow: "find a mentor and a community group and ask for support in a clear, specific way.",
          quickCheck: [
            { objective: "O5", q: "What is a mentor?", options: ["Someone who pays your bills", "A trusted person a few steps ahead who gives advice and support", "Your parole officer", "Anyone you meet once"], answer: 1, why: "A mentor has walked a similar road and helps guide you." },
            { objective: "O5", q: "You want someone at your church to mentor you. What would you say?", options: ["Will you fix my life?", "Can you be there for me whenever I need you?", "Can you lend me money?", "Could we meet for 30 minutes once a month about my goals?"], answer: 3, why: "A small, specific ask is easier for a mentor to say yes to." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Healthy boundaries and getting support",
          minutes: 6,
          goal: "Set two healthy boundaries and build a support list that includes 988.",
          text: [
            "A boundary is a line you draw to protect your health, your freedom and your progress. Some old friends, places and habits can pull you back. A boundary might be: I do not go to that block anymore, or I will not keep anything in my car for anyone.",
            "Say a boundary simply and kindly: I care about you, and I cannot be around drinking right now. You do not need to argue or explain it many times. Boundaries also go both ways: respect the boundaries your family sets with you.",
            "Coming home is stressful. Feeling anxious, angry, sad or alone is common, and help is normal. The 988 Suicide and Crisis Lifeline is free, confidential and open 24 hours a day, every day. You can call or text 988, or chat at 988lifeline.org, for yourself or someone you are worried about. In an emergency, call 911.",
            "Make a support list: two or three people you trust, your mentor or group, your case manager, and 988. Keep it in your phone and on paper."
          ],
          steps: ["Name two situations that could pull you back.", "Write a boundary for each.", "Practice saying each one kindly and simply.", "Write your support list: trusted people, mentor or group, case manager, 988.", "Keep the list in your phone and on paper."],
          words: [["Boundary", "a limit you set to protect your health, safety and progress."], ["988", "the Suicide and Crisis Lifeline; call, text or chat for free, 24/7."], ["Trigger", "a person, place or feeling that makes an old habit feel stronger."]],
          slides: [
            { title: "What a boundary is", bullets: ["A line that protects your progress", "Example: I do not go to that block anymore"] },
            { title: "Saying it", bullets: ["Simply and kindly", "No need to argue or explain again and again", "Respect your family's boundaries too"] },
            { title: "988: help any time", bullets: ["Call or text 988, or chat at 988lifeline.org", "Free, confidential, 24/7", "Emergency: call 911"] },
            { title: "Your support list", bullets: ["Two or three trusted people", "Mentor, group and case manager", "988, in your phone and on paper"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }
          ],
          tryIt: "Final task: write your one-page reconnection and support plan with the first family member you will contact and your message, one parenting or child support step if it applies, two community supports, two boundaries, and your support list with 988 on it.",
          youCanNow: "set healthy boundaries, say them kindly, and reach for support, including 988, when things get hard.",
          quickCheck: [
            { objective: "O6", q: "What is a boundary?", options: ["A limit you set to protect your health and progress", "A rule your family sets for you", "A court order", "A way to punish people"], answer: 0, why: "Boundaries are limits you choose to protect yourself and your progress." },
            { objective: "O6", q: "An old friend keeps inviting you to places that could get you in trouble. What would you do?", options: ["Go once so they stop asking", "Kindly say no and suggest something else, or step back", "Go but leave early", "Block everyone you know"], answer: 1, why: "A clear, kind no protects your progress." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Community, boundaries and support",
        questions: [
          { objective: "O4", q: "Which is a real apology?", options: ["I am sorry, but you made me do it", "I am sorry if you were upset", "Can we just forget it?", "I missed your birthdays. I know it hurt you. I will call every week now."], answer: 3, why: "It names what you did, how it hurt and what you will do differently." },
          { objective: "O4", q: "Which is an I-statement?", options: ["You never listen", "I feel nervous about this talk", "You always ruin things", "Everyone is against me"], answer: 1, why: "An I-statement shares your feeling without blaming." },
          { objective: "O5", q: "What is a good way to ask someone to mentor you?", options: ["Could we talk 30 minutes once a month about keeping my job?", "Fix my life", "Give me money", "Be available all the time"], answer: 0, why: "A specific, small request is easy to say yes to." },
          { objective: "O6", q: "An old friend wants you to hold something in your car. A healthy boundary is:", options: ["Saying yes to keep the friendship", "Saying yes just this once", "Kindly saying no: I cannot do that anymore", "Ignoring your parole rules"], answer: 2, why: "A clear, kind no protects your freedom and progress." },
          { objective: "O6", q: "You feel hopeless late at night. What can you do?", options: ["Wait until next month", "Call or text 988", "Keep it to yourself", "Search for a random forum"], answer: 1, why: "988 is free, confidential and open 24/7 by call, text or chat." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Rebuilding Family and Community Ties",
    questions: [
      { objective: "O1", q: "Why plan your first contact instead of showing up unannounced?", options: ["A plan respects the other person and goes better", "Plans are required by law", "It is faster to surprise people", "It does not matter"], answer: 0, why: "A planned, respectful contact gives the relationship a better start." },
      { objective: "O1", q: "What should a first message NOT include?", options: ["That you are home", "That you would like to reconnect", "A demand for money or a place to stay", "That they can choose the pace"], answer: 2, why: "Asking for money or housing first puts pressure on them." },
      { objective: "O1", q: "A family member says they are not ready to talk. What is the best response?", options: ["Keep calling every hour", "Get angry", "Ask others to pressure them", "Thank them and leave the door open"], answer: 3, why: "Respecting their pace keeps the door open for later." },
      { objective: "O2", q: "Before your first visit with your child, you should first talk with:", options: ["The child's caregiver", "A stranger online", "Your old friends", "Nobody"], answer: 0, why: "The caregiver knows what the child is ready for and what times work." },
      { objective: "O2", q: "A young child asks where you were. A good answer is:", options: ["A long story with every detail", "I made a mistake, I was away, and I am here now", "It was your mom's fault", "Nothing"], answer: 1, why: "Simple, honest words fit a young child's age." },
      { objective: "O2", q: "You want regular visits set by a court. Where can you start?", options: ["A social media group", "Your old cellmate", "Your state court's self-help website or a family law facilitator", "A pawn shop"], answer: 2, why: "Court self-help sites and family law facilitators explain the forms." },
      { objective: "O2", q: "What builds a child's trust the most?", options: ["Big promises", "Big gifts once a year", "Talking badly about the caregiver", "Keeping small promises again and again"], answer: 3, why: "Consistency shows the child they can count on you." },
      { objective: "O3", q: "What happens to child support if you ignore it after your income drops?", options: ["Unpaid support can build into a large debt", "It stops by itself", "It is forgiven automatically", "Nothing happens"], answer: 0, why: "Orders stay in place until changed, so unpaid support builds up." },
      { objective: "O3", q: "In California, who can ask for a child support review?", options: ["Only the judge", "Either parent", "Only the child", "Only a lawyer"], answer: 1, why: "Either parent can ask the local child support agency for a review." },
      { objective: "O3", q: "In California, a parent incarcerated for 60 days or more in a row can:", options: ["Never change the order", "Ignore the order", "Ask for a lower order with the Incarcerated Parent's Request to Review Child Support form", "Pay double"], answer: 2, why: "California has a specific form for incarcerated parents to request a review." },
      { objective: "O3", q: "Outside California, where do you ask about changing a child support order?", options: ["Your employer", "Your landlord", "A radio station", "Your state or tribal child support agency"], answer: 3, why: "State and tribal child support agencies handle reviews." },
      { objective: "O4", q: "What should you do first in a hard conversation?", options: ["Listen and let them finish", "Interrupt to explain", "Leave", "Raise your voice"], answer: 0, why: "Listening first shows respect and helps you understand." },
      { objective: "O4", q: "Saying back what you heard is called:", options: ["Arguing", "Reflecting back", "Ignoring", "Blaming"], answer: 1, why: "Reflecting back shows the other person you understood." },
      { objective: "O4", q: "Which word should you leave out of an apology?", options: ["Sorry", "Will", "But", "I"], answer: 2, why: "But turns an apology into an excuse." },
      { objective: "O5", q: "A mentor is:", options: ["Your parole officer", "Someone who pays your bills", "A judge", "A trusted person a few steps ahead who gives advice and support"], answer: 3, why: "Mentors share advice and encouragement as you grow." },
      { objective: "O5", q: "You went to a support group once and felt out of place. What is a good next step?", options: ["Go at least two more times before deciding", "Never go again", "Complain online", "Tell others not to go"], answer: 0, why: "Most groups feel better by the third visit." },
      { objective: "O5", q: "Which is a way to find community groups?", options: ["Ask a stranger for money", "Call 211 or ask your case manager", "Wait for someone to find you", "Go back to old hangouts"], answer: 1, why: "211 and case managers know local groups and programs." },
      { objective: "O6", q: "What is a boundary?", options: ["A fence around your house", "A rule others set for you", "A limit you set to protect your health and progress", "A type of court order"], answer: 2, why: "A boundary protects your health, safety and progress." },
      { objective: "O6", q: "Which is true about 988?", options: ["It costs money", "It only works on weekdays", "It is only for emergencies with police", "You can call, text or chat for free, 24/7"], answer: 3, why: "988 is free, confidential and open 24/7 by call, text or chat." },
      { objective: "O6", q: "Where should you keep your support list?", options: ["In your phone and on paper", "Only in your head", "Nowhere", "With a stranger"], answer: 0, why: "Having it in two places means you can reach it when you need it." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      3,
      6,
      7,
      10,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "First contact",
        objective: "O1",
        notYet: "No message, or it asks for money, blames or pushes.",
        meets: "Names who to contact first and a short, respectful message.",
        exceeds: "The message was read out loud and leaves room for the person to take their time."
      },
      {
        name: "Parenting or child support step",
        objective: "O3",
        notYet: "No step when one applies.",
        meets: "One clear step, such as contacting the caregiver or asking the agency for a review, with a date.",
        exceeds: "Lists the papers needed or the questions for the caregiver."
      },
      {
        name: "Community supports",
        objective: "O5",
        notYet: "Fewer than two supports.",
        meets: "Two supports, such as a mentor, group or faith community, with how to reach them.",
        exceeds: "Includes the exact words to ask a mentor for a specific commitment."
      },
      {
        name: "Boundaries",
        objective: "O6",
        notYet: "Fewer than two boundaries, or they are vague.",
        meets: "Two clear boundaries that protect the learner's progress.",
        exceeds: "Each boundary has the words the learner will use to keep it."
      },
      {
        name: "Support list",
        objective: "O6",
        notYet: "No list, or 988 is missing.",
        meets: "A list of people and numbers to call, including 988.",
        exceeds: "Saved in the phone and on paper."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report contacting a family member or child within 30 days (follow-up survey)",
      "Learners who join a mentor program, support group or faith community within 60 days",
      "Learners who ask for a child support review when their order no longer fits their income"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper and pen, or a notes app on a phone",
      "A phone to save the support list",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "These topics can bring up strong feelings; let learners share only what they choose and keep 988 visible.",
      "Remind learners that court orders, no-contact orders and parole or probation conditions come first.",
      "Have your local child support agency, legal aid and 211 contacts ready.",
      "Practice listening and I-statements in pairs using made-up situations, not real family conflicts.",
      "Score the plan with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
