"use strict";

// Koach Learn course (wave 1, job certifications): "Community Health Worker Foundations". Prepares learners for community health worker (CHW) training and entry-level work.
// It does not certify anyone; some states certify CHWs, and the course points to the state's own page. Shape and ADDIE parts: see scripts/koachlearn-courses/README.md.

module.exports = {
  id: "community-health-worker",
  category: "Workforce Development",
  name: "Community Health Worker Foundations",
  skills: "Explaining the CHW role and your state's path, Listening and using plain language, Asking about needs with respect, Finding and checking local resources, Making a referral and following up, Keeping privacy and boundaries",
  outcome: "make a checked resource guide for your community and use it to plan a respectful referral for a made-up neighbor, the way a community health worker does.",
  about: [
    "Community health workers (CHWs) are trusted people from a community who help their neighbors get health care and other help, such as food, housing, transportation and health coverage. They also go by names like promotor or promotora, outreach worker, peer navigator or patient navigator.",
    "Many CHWs are hired because they share the language, culture or life experience of the people they serve, including people who have been in prison, veterans and immigrants. Your life experience counts.",
    "This course prepares you for CHW training and entry-level work. It does not certify you. Some states certify CHWs and some do not, so you will learn where to check yours. You will practice listening, asking about needs, finding and checking local help, making a referral, and keeping privacy and boundaries.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task and a two-question quick check. At the end you make a resource guide for your own community and a referral plan for a made-up neighbor."
  ],
  finalTask: "Make a one-page resource guide for your community with at least five local resources (food, housing, health care, health coverage and one more), each checked on its own official page with the address, phone and how to apply. Then write a referral plan for a made-up neighbor (practice only): their need in their own words, the resource you chose and why, what you will say, how you will help them connect, and when you will follow up.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults who want to help their own community and get paid for it: job seekers, people coming home from prison, veterans, immigrants, church and nonprofit volunteers, and young adults. Many already help neighbors informally.",
    startingPoint: "Good people skills and local knowledge. Most have no formal health training, do not know the CHW job title or certification rules, and have not checked resources on official pages.",
    gap: "Clinics, health plans, health departments and nonprofits hire CHWs to connect people to care and services. Learners need to know the role, how to listen and ask about needs with respect, how to find and check resources, how to refer and follow up, and how to keep privacy and boundaries.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 7)",
      "Devices: a phone or library computer; every task works on paper",
      "CHW certification differs by state; the course points to the state's page and does not state hours or fees",
      "No clinical or medication advice; health questions go to clinicians",
      "Practice uses made-up people; no real names or private details"
    ],
    prerequisites: "None. \"Health Literacy: Understanding Your Health Care\" is a helpful companion."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Using national CHW sources and your state's official page", action: "describe what a community health worker does and the steps to start in your state", standard: "naming at least 3 CHW roles and whether your state certifies CHWs" },
    { id: "O2", condition: "In a practice conversation with a made-up neighbor", action: "use active listening, plain language and teach-back", standard: "reflecting back what they said and checking they understood, with no jargon" },
    { id: "O3", condition: "Using a short list of social needs", action: "ask a made-up neighbor about their needs with consent and respect", standard: "asking permission first and covering food, housing, transportation, utilities and safety" },
    { id: "O4", condition: "Given a need such as food or a clinic", action: "find a local resource and check it on its official page", standard: "with the address, phone, hours and how to apply, confirmed on the official page" },
    { id: "O5", condition: "Given a referral situation", action: "plan a referral and a follow-up while keeping privacy and boundaries", standard: "with a follow-up date, consent to share, and the right step for a crisis" }
  ],
  chapters: [
    {
      name: "Chapter 1: The CHW role and connecting with people",
      lessons: [
        {
          title: "What community health workers do and how to start",
          objectives: ["O1"],
          minutes: 5,
          goal: "Describe the CHW role and find your state's rules for CHWs.",
          text: [
            "The American Public Health Association calls a community health worker a frontline public health worker who is trusted by, or knows the community well. CHWs link people to health and social services and help make care fit people's culture.",
            "The US Bureau of Labor Statistics says CHWs do outreach such as home visits, help coordinate care, link people to transportation, housing and food help, and may do basic health screenings. The National C3 Council lists ten CHW roles, including outreach, health education, care coordination and system navigation, advocacy, and coaching and social support.",
            "A high school diploma is usually the minimum, with on-the-job training. Some states require certification, which may include an approved training program. Check your state's department of health, nursing board or human services department.",
            "This course prepares you. It does not certify you. Employers include community clinics, hospitals, health departments, health plans and nonprofits."
          ],
          steps: ["Search for your state's name plus \"community health worker certification\".", "Open the result from your state's government site.", "Write whether your state certifies CHWs and what it requires.", "Look at two CHW job posts near you and list the duties."],
          words: [["Community health worker (CHW)", "a trusted community member who helps people get health care and other services."], ["Promotor or promotora", "a common Spanish name for a community health worker."], ["Outreach", "going to where people are, like homes, events or churches, to share information and offer help."], ["Certification", "an official record that you met a state's or group's training and test rules."]],
          slides: [
            { title: "A CHW is...", bullets: ["A trusted member of the community", "A link to health care and services", "Also called promotor, outreach worker, navigator"] },
            { title: "What CHWs do", bullets: ["Outreach and home visits", "Health education in plain words", "Link people to food, housing, transport and care", "Advocacy and support"] },
            { title: "Getting started", bullets: ["Usually a high school diploma plus job training", "Some states certify CHWs", "Check your state's health department page"] },
            { title: "This course prepares you", bullets: ["It does not certify you", "Employers: clinics, hospitals, health plans, nonprofits"] }
          ],
          sources: [
            { name: "APHA: Community Health Workers Section", url: "https://www.apha.org/apha-communities/member-sections/community-health-workers" },
            { name: "US Bureau of Labor Statistics: Community Health Workers", url: "https://www.bls.gov/ooh/community-and-social-service/community-health-workers.htm" },
            { name: "National C3 Council: CHW Roles and Competencies", url: "https://www.c3council.org/roles-competencies" }
          ],
          tryIt: "Find out whether your state certifies community health workers, using your state's official page. Then find one CHW job post near you. On paper, write your state's rule, three duties from the job post, and one way your own life experience fits the job.",
          youCanNow: "describe what a community health worker does and find your state's rules on an official page.",
          quickCheck: [
            { objective: "O1", q: "Which is a main part of a CHW's job?", options: ["Writing prescriptions", "Doing surgery", "Diagnosing illness", "Linking people to health care and services"], answer: 3, why: "CHWs link people to care and services; clinicians diagnose and prescribe." },
            { objective: "O1", q: "Do all states require CHW certification?", options: ["Yes, the same everywhere", "No; some states do, so check your state's page", "Only for doctors", "Only in summer"], answer: 1, why: "BLS says some states require certification; rules differ by state." }
          ]
        },
        {
          title: "Listening and plain talk",
          objectives: ["O2"],
          minutes: 5,
          goal: "Use active listening, plain words and teach-back in a practice conversation.",
          text: [
            "People share more when they feel heard. Active listening means giving your full attention, letting the person finish, and saying back what you heard: \"So getting to the clinic is hard because the bus does not run early. Did I get that right?\"",
            "Use plain language. Say \"blood sugar\" instead of \"glucose\", and \"a paper that shows where you live\" instead of \"proof of residence\". Use short sentences and one idea at a time. Offer an interpreter when someone prefers another language.",
            "Teach-back checks that you explained clearly. Ask the person to say the plan in their own words: \"Just so I know I explained it well, can you tell me what you will bring to the food pantry?\" If they cannot, the fix is your explanation, not their memory.",
            "Respect means no judging. Ask about what matters to the person and what they already tried. They are the expert on their own life."
          ],
          steps: ["Give full attention and let the person finish.", "Say back what you heard and ask if you got it right.", "Explain the next step in plain words, one idea at a time.", "Use teach-back: ask them to say the plan in their own words."],
          words: [["Active listening", "listening with full attention and saying back what you heard."], ["Plain language", "short, common words and sentences that are easy to understand."], ["Teach-back", "asking a person to explain the plan in their own words to check you explained it clearly."], ["Jargon", "special words a group uses that others may not understand."]],
          slides: [
            { title: "Active listening", bullets: ["Full attention, let them finish", "Say back what you heard", "\"Did I get that right?\""] },
            { title: "Plain language", bullets: ["\"Blood sugar\", not \"glucose\"", "Short sentences, one idea at a time", "Offer an interpreter"] },
            { title: "Teach-back", bullets: ["Ask them to say the plan their way", "If it is not clear, fix your explanation", "It checks you, not them"] }
          ],
          tryIt: "Role play with a friend or family member, or write it on paper. Your made-up neighbor says: \"I keep missing my clinic appointments because I work early and the bus is late.\" Write a reflect-back sentence, a plain-language next step, and a teach-back question.",
          youCanNow: "listen actively, explain in plain words and check understanding with teach-back.",
          quickCheck: [
            { objective: "O2", q: "Which is a teach-back question?", options: ["\"Do you understand?\"", "\"Any questions? No? Good.\"", "\"Can you tell me in your own words what you will bring?\"", "\"You got it, right?\""], answer: 2, why: "Teach-back asks the person to say the plan in their own words." },
            { objective: "O2", q: "Which is plain language?", options: ["\"Blood sugar\"", "\"Glycemic index\"", "\"Hyperglycemia\"", "\"Glucose tolerance\""], answer: 0, why: "Common, short words are easiest to understand." }
          ]
        },
        {
          title: "Asking about needs with respect",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ask a made-up neighbor about their needs with consent, using a short list.",
          text: [
            "Health depends on more than doctor visits. Food, a safe place to live, money for utilities, transportation and safety all affect health. These are often called social needs.",
            "Many clinics and programs use a short screening form. Your employer will give you theirs. The usual topics are: food, housing, utilities, transportation and personal safety.",
            "Always ask permission first and explain why you are asking: \"I ask everyone a few questions about things like food and housing, so I can share help that might fit. You can skip any question.\" Let the person choose what to share.",
            "Write only what you need, on the program's form, not on your own phone. If someone says they are not safe at home, or talks about hurting themselves, follow your program's safety steps right away (see Lesson 6)."
          ],
          steps: ["Ask permission and say why you are asking.", "Say they can skip any question.", "Ask about food, housing, utilities, transportation and safety.", "Ask which need matters most to them right now.", "Write only what is needed, on the program's form."],
          words: [["Social needs", "everyday needs like food, housing and transportation that affect health."], ["Screening", "a short set of questions to find out what help someone may need."], ["Consent", "permission a person gives after they understand what you are asking."]],
          slides: [
            { title: "Health is more than the clinic", bullets: ["Food and housing", "Utilities and transportation", "Safety"] },
            { title: "Ask permission first", bullets: ["Say why you are asking", "They can skip any question", "They choose what to share"] },
            { title: "Start with what matters most", bullets: ["\"Which of these matters most right now?\"", "Write only what is needed", "Use the program's form, not your phone"] }
          ],
          tryIt: "Write a short screening script (practice only): your permission sentence, one plain question each about food, housing, utilities, transportation and safety, and a closing question about what matters most. Read it out loud to check it sounds kind and clear.",
          youCanNow: "ask about someone's needs with consent and respect, using a short list.",
          quickCheck: [
            { objective: "O3", q: "What do you do before asking about someone's needs?", options: ["Start with the hardest question", "Ask permission and say why you are asking", "Ask for their Social Security number", "Write their answers on your own phone"], answer: 1, why: "Consent and a clear reason build trust before screening." },
            { objective: "O3", q: "Which is a social need?", options: ["Favorite TV show", "Shoe brand", "Getting to the clinic when the bus does not run", "Favorite color"], answer: 2, why: "Transportation is a social need that affects health." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The CHW role and connecting with people",
        questions: [
          { objective: "O1", q: "Which is another name for a community health worker?", options: ["Promotor or promotora", "Surgeon", "Pharmacist", "Judge"], answer: 0, why: "Promotor or promotora is a common name for CHWs, especially in Spanish-speaking communities." },
          { objective: "O1", q: "Where do you check if your state certifies CHWs?", options: ["A social media group", "A friend's guess", "Your state's health department or board page", "An online ad"], answer: 2, why: "Each state's own official page explains its rules." },
          { objective: "O2", q: "What is active listening?", options: ["Talking more than the other person", "Planning your answer while they talk", "Giving full attention and saying back what you heard", "Looking at your phone while listening"], answer: 2, why: "Active listening means full attention and reflecting back what you heard." },
          { objective: "O2", q: "A neighbor cannot explain the plan back to you. What does that mean?", options: ["They are not trying", "Your explanation needs to be clearer", "They should not get help", "Nothing; move on"], answer: 1, why: "Teach-back checks your explanation; explain again in plainer words." },
          { objective: "O3", q: "A person does not want to answer a question about housing. You:", options: ["Insist they answer", "Write a guess", "Tell them they cannot get help", "Respect it and move on"], answer: 3, why: "People can skip any question; consent is voluntary." }
        ]
      }
    },
    {
      name: "Chapter 2: Connecting people to help",
      lessons: [
        {
          title: "Finding and checking local resources",
          objectives: ["O4"],
          minutes: 6,
          goal: "Find a local resource for a need and check it on its official page.",
          text: [
            "A CHW's resource list is only as good as its last check. Programs move, change hours and run out of money. Always check a resource on its own official page or by calling before you refer someone.",
            "Good places to start: call 211, a free, confidential service that connects people with local help. USA.gov's benefits page helps people find government programs for food, housing, health care and utility bills. HRSA's Find a Health Center shows community health centers. HealthCare.gov explains health coverage and how to apply.",
            "For each resource, write down: the name, what it offers, who can use it, the address, phone, hours, how to apply, what to bring, the languages it serves and the date you checked.",
            "If a website is not the official one, find the official page before you trust it. Many fake sites charge fees for forms that are free."
          ],
          steps: ["Name the need, for example food or a clinic.", "Search 211, USA.gov, HRSA's Find a Health Center, or the agency's own site.", "Open the official page and check address, phone, hours and how to apply.", "Write it down with the date you checked."],
          words: [["Resource", "a program or service that helps with a need, like a food pantry or clinic."], ["211", "a free, confidential phone service that connects people with local help."], ["Community health center", "a clinic that serves people whether or not they have insurance."], ["Eligibility", "the rules about who can use a program."]],
          slides: [
            { title: "Check before you refer", bullets: ["Programs move and change hours", "Check the official page or call", "Write the date you checked"] },
            { title: "Where to start", bullets: ["Call 211", "USA.gov benefits page", "HRSA Find a Health Center", "HealthCare.gov for coverage"] },
            { title: "Write down", bullets: ["Name, what it offers, who can use it", "Address, phone, hours", "How to apply, what to bring, languages"] },
            { title: "Watch for fake sites", bullets: ["Find the official page first", "Many forms are free; do not pay strangers"] }
          ],
          sources: [
            { name: "211: Find your local 211", url: "https://www.211.org/" },
            { name: "USA.gov: Government benefits", url: "https://www.usa.gov/benefits" },
            { name: "HRSA: Find a Health Center", url: "https://findahealthcenter.hrsa.gov/" },
            { name: "HealthCare.gov", url: "https://www.healthcare.gov/" }
          ],
          tryIt: "Pick two needs: food and a low-cost clinic. Find one real resource for each near you, check it on its official page, and write the name, address, phone, hours, how to apply and today's date.",
          youCanNow: "find a local resource and check it on its official page before you share it.",
          quickCheck: [
            { objective: "O4", q: "Before you refer someone to a food pantry, what do you do?", options: ["Check its hours and address on its official page or by phone", "Trust a list from three years ago", "Guess the hours", "Send them without checking"], answer: 0, why: "Resources change, so check the official page or call first." },
            { objective: "O4", q: "Which service connects people to local help by phone?", options: ["411", "211", "311 only in one city", "A random hotline from an ad"], answer: 1, why: "211 is a free, confidential service that connects people with local help." }
          ]
        },
        {
          title: "Making a referral and following up",
          objectives: ["O5", "O4"],
          minutes: 5,
          goal: "Plan a warm referral with consent and a follow-up date.",
          text: [
            "A referral is connecting a person to a service. A \"warm\" referral means you help make the connection, for example calling the clinic together, instead of only handing over a phone number.",
            "Ask before you share anything about the person: \"Is it OK if I tell the clinic you need an evening appointment?\" Share only what is needed, and follow your program's consent form.",
            "Help remove barriers. Does the person have a ride, child care, the papers they need, a phone that works? Write what they will bring and when they will go.",
            "Follow up. Set a date to check in: \"I'll call you Friday to see how it went.\" If the service did not work out, find another one. Write the result in the program's record."
          ],
          steps: ["Agree on the need and the service with the person.", "Get consent before sharing any information.", "Make a warm connection, such as a call together.", "Plan for barriers: ride, child care, papers.", "Set and keep a follow-up date, and record the result."],
          words: [["Referral", "connecting a person to a service that can help them."], ["Warm referral", "helping the person connect directly, such as calling together, not just giving a number."], ["Barrier", "something that makes it hard to get help, like no ride or no child care."], ["Follow-up", "checking back later to see if the help worked."]],
          slides: [
            { title: "Warm referral", bullets: ["Help make the connection", "Call together when you can", "Not just a phone number"] },
            { title: "Consent first", bullets: ["Ask before sharing anything", "Share only what is needed", "Use the program's consent form"] },
            { title: "Remove barriers", bullets: ["Ride and child care", "Papers to bring", "A working phone"] },
            { title: "Follow up", bullets: ["Set a date", "Did it work? If not, try another", "Record the result"] }
          ],
          tryIt: "Practice only: your made-up neighbor, Ms. Carter, needs food for her two kids and has no car. Using a food resource you checked in Lesson 4, write a warm referral plan: what you will say, the consent question, one barrier and how you will help with it, and a follow-up date.",
          youCanNow: "plan a warm referral with consent, help with barriers and set a follow-up date.",
          quickCheck: [
            { objective: "O5", q: "What makes a referral \"warm\"?", options: ["Giving only a phone number", "Telling them to search online", "Helping them connect, such as calling together", "Sending them a flyer"], answer: 2, why: "A warm referral helps the person connect directly." },
            { objective: "O5", q: "You want to tell a clinic about a neighbor's situation. First you:", options: ["Share everything you know", "Ask the neighbor for consent", "Post it in a group chat", "Tell the neighbor's family"], answer: 1, why: "Consent comes before sharing any information." }
          ]
        },
        {
          title: "Privacy, boundaries, crisis steps and your resource guide",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Keep privacy and boundaries, follow crisis steps, and build your resource guide.",
          text: [
            "People trust you with private things. Health information is protected by a federal law called HIPAA when you work for a clinic, hospital or health plan, and every good program keeps people's information private. Do not talk about the people you serve with friends, post about them or keep notes on your own phone.",
            "Boundaries keep the work healthy. You are a guide, not a doctor, lawyer or bank. Do not give medical or legal advice, lend money or promise what you cannot deliver. Health questions go to clinicians.",
            "Know your crisis steps. If someone is in danger now, call 911. If someone talks about suicide or is in emotional crisis, they can call or text 988, the Suicide and Crisis Lifeline, or chat online. Tell your supervisor right away and follow your program's safety plan.",
            "Take care of yourself too. Helping people with hard lives is heavy work. Talk with your supervisor, take breaks and use your own support. Now you are ready to build your resource guide and referral plan."
          ],
          steps: ["Keep information private: no talk, posts or personal-phone notes.", "Stay in your role: no medical or legal advice, no lending money.", "Crisis: 911 for danger now; 988 for suicide or emotional crisis; tell your supervisor.", "Build your resource guide with at least five checked resources and a referral plan."],
          words: [["HIPAA", "a federal law that protects the privacy of health information held by health care providers and health plans."], ["Boundary", "a clear limit on what you do in a work relationship."], ["988", "the Suicide and Crisis Lifeline: call, text or chat."], ["Self-care", "things you do to keep yourself healthy and able to keep helping."]],
          slides: [
            { title: "Privacy", bullets: ["No talk or posts about people you serve", "No notes on your own phone", "HIPAA protects health information"] },
            { title: "Boundaries", bullets: ["You are a guide, not a doctor or lawyer", "No lending money or big promises", "Health questions go to clinicians"] },
            { title: "Crisis steps", bullets: ["Danger now: 911", "Suicide or emotional crisis: call or text 988", "Tell your supervisor right away"] },
            { title: "Your resource guide", bullets: ["5 or more checked resources", "Address, phone, hours, how to apply, date checked", "Plus a referral plan for a made-up neighbor"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" },
            { name: "MedlinePlus: Patient Rights", url: "https://medlineplus.gov/patientrights.html" }
          ],
          tryIt: "Final task: make your one-page community resource guide with at least five resources (food, housing, health care, health coverage and one more), each checked on its official page with address, phone, hours, how to apply and the date checked. Then write a referral plan for a made-up neighbor: their need in their words, the resource, what you will say, the consent question, one barrier and a follow-up date.",
          youCanNow: "build a checked resource guide and plan a referral that keeps privacy, boundaries and safety.",
          quickCheck: [
            { objective: "O5", q: "A person you serve says they are thinking about ending their life. What do you do?", options: ["Promise to keep it secret", "Change the subject", "Tell them to sleep on it", "Connect them to 988 (or 911 if in danger now) and tell your supervisor"], answer: 3, why: "Follow crisis steps: 988 or 911, and tell your supervisor right away." },
            { objective: "O5", q: "A person asks you to lend them $100. What do you do?", options: ["Kindly say no and help find a resource for the need", "Lend it quietly", "Give them your card", "Ignore them"], answer: 0, why: "Lending money crosses a boundary; help connect them to a resource instead." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Connecting people to help",
        questions: [
          { objective: "O4", q: "Which is the best way to check a clinic's hours?", options: ["A three-year-old flyer", "A guess", "The clinic's official page or a phone call", "A random comment online"], answer: 2, why: "The official page or a call gives current information." },
          { objective: "O4", q: "Which tool finds community health centers?", options: ["HRSA's Find a Health Center", "A movie app", "A shopping site", "A weather app"], answer: 0, why: "HRSA's Find a Health Center lists community health centers." },
          { objective: "O5", q: "When should you follow up after a referral?", options: ["Never", "Only if they call you", "On a date you set together", "After a year"], answer: 2, why: "Setting a follow-up date makes sure the help worked." },
          { objective: "O5", q: "Where should you keep notes about the people you serve?", options: ["On your personal phone", "In a group chat", "On social media", "On the program's form or record"], answer: 3, why: "Notes belong in the program's record to keep them private." },
          { objective: "O5", q: "Someone asks you for medical advice about their medicine. You:", options: ["Tell them what you would take", "Help them ask their clinician or pharmacist", "Look it up and tell them what to do", "Say medicines do not matter"], answer: 1, why: "CHWs stay in their role; health questions go to clinicians." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Community Health Worker Foundations",
    questions: [
      { objective: "O1", q: "A community health worker is best described as:", options: ["A trusted community member who links people to care and services", "A doctor", "A police officer", "A tax preparer"], answer: 0, why: "CHWs are trusted frontline workers who connect people to care." },
      { objective: "O1", q: "Which is one of the CHW roles listed by the National C3 Council?", options: ["Performing surgery", "Conducting outreach", "Prescribing medicine", "Running a bank"], answer: 1, why: "Outreach is one of the ten CHW roles." },
      { objective: "O1", q: "What does this course do?", options: ["Certifies you as a CHW", "Gives you a state license", "Replaces your employer's training", "Prepares you for CHW training and entry-level work"], answer: 3, why: "The course prepares you; some states certify CHWs separately." },
      { objective: "O1", q: "Why are many CHWs hired?", options: ["They share the language, culture or life experience of the community", "They have medical degrees", "They never talk to people", "They work only online"], answer: 0, why: "Shared experience builds trust with the people CHWs serve." },
      { objective: "O2", q: "Which is a good reflect-back sentence?", options: ["\"You should have planned better.\"", "\"So the bus is late and that makes you miss visits. Is that right?\"", "\"That's not my problem.\"", "\"Everyone has that issue.\""], answer: 1, why: "Reflecting back shows you heard and lets the person correct you." },
      { objective: "O2", q: "Teach-back checks:", options: ["The person's intelligence", "How fast they talk", "Whether you explained clearly", "Their reading test score"], answer: 2, why: "Teach-back checks your explanation, not the person." },
      { objective: "O2", q: "A neighbor prefers to speak Spanish and you do not. You:", options: ["Speak louder in English", "Skip the visit", "Use their child to interpret medical details", "Offer a qualified interpreter"], answer: 3, why: "Offering an interpreter lets the person understand and be understood." },
      { objective: "O3", q: "Which topics does a social needs screening usually cover?", options: ["Food, housing, utilities, transportation and safety", "Favorite foods and music", "Sports and hobbies", "Shoe and clothing sizes"], answer: 0, why: "These social needs affect health." },
      { objective: "O3", q: "What should you say before a screening?", options: ["\"You must answer everything.\"", "Nothing; just start", "\"I ask everyone a few questions so I can share help. You can skip any.\"", "\"This is a test.\""], answer: 2, why: "Explaining why and saying they can skip builds trust and respects consent." },
      { objective: "O3", q: "After the screening questions, a good next question is:", options: ["\"Which of these matters most to you right now?\"", "\"Why didn't you fix this earlier?\"", "\"What is your bank PIN?\"", "\"Who else can I tell?\""], answer: 0, why: "Starting with what matters most to the person respects their choices." },
      { objective: "O4", q: "211 is:", options: ["An emergency number for fires only", "A free, confidential service that connects people with local help", "A paid hotline", "A social media app"], answer: 1, why: "211 connects people with local help." },
      { objective: "O4", q: "USA.gov's benefits page helps people:", options: ["Buy concert tickets", "Pay parking tickets", "Find government programs for food, housing, health care and bills", "Book flights"], answer: 2, why: "It helps people find government benefits and how to apply." },
      { objective: "O4", q: "What should a resource entry include?", options: ["Only the name", "A guess at the hours", "The name of a friend who went there", "Address, phone, hours, how to apply and the date checked"], answer: 3, why: "Complete, checked details make a resource useful." },
      { objective: "O4", q: "A website charges a fee to \"help\" with a government form. You:", options: ["Find the official page first; many forms are free", "Pay quickly", "Share the site with everyone", "Give it your client's details"], answer: 0, why: "Fake sites often charge for free forms; find the official page." },
      { objective: "O5", q: "A warm referral means:", options: ["Handing over a business card", "Helping the person connect directly, like calling together", "Telling them to search online", "Mailing a flyer"], answer: 1, why: "A warm referral helps make the connection." },
      { objective: "O5", q: "Before sharing information with a clinic, you need:", options: ["The person's consent", "Your friend's opinion", "Nothing", "A social media post"], answer: 0, why: "Consent comes first, and you share only what is needed." },
      { objective: "O5", q: "Which is a barrier to getting help?", options: ["A working phone", "A ride to the appointment", "No child care during the appointment", "The right papers"], answer: 2, why: "No child care can stop someone from getting to a service." },
      { objective: "O5", q: "Someone is in emotional crisis and wants to talk to someone now. They can:", options: ["Wait for next month's visit", "Call or text 988", "Post online", "Call 411"], answer: 1, why: "988 is the Suicide and Crisis Lifeline: call, text or chat." },
      { objective: "O5", q: "A referral did not work out. You:", options: ["Give up", "Blame the person", "Stop following up", "Find another resource and set a new follow-up"], answer: 3, why: "Follow-up means trying another option when the first did not work." },
      { objective: "O5", q: "Which is a healthy boundary for a CHW?", options: ["Giving medical advice", "Lending money", "Promising housing by Friday", "Sending health questions to the person's clinician"], answer: 3, why: "CHWs stay in their role and connect people to clinicians for health questions." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 4, 5, 7, 8, 10, 12, 14, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check it again.",
    criteria: [
      { name: "Checked resources", objective: "O4", notYet: "Fewer than five resources, or details not checked on official pages.", meets: "At least five resources (food, housing, health care, coverage and one more), each with address, phone, hours, how to apply and the date checked.", exceeds: "Also notes who can use each one, what to bring and the languages served." },
      { name: "Need in their words", objective: "O3", notYet: "The need is a guess or uses jargon.", meets: "The made-up neighbor's need is written in their own words, with consent noted.", exceeds: "Shows which need matters most to them and why." },
      { name: "Plain, respectful talk", objective: "O2", notYet: "What you will say uses jargon or judges the person.", meets: "Plain words, a reflect-back sentence and a teach-back question.", exceeds: "Offers an interpreter or another way to communicate when needed." },
      { name: "Warm referral and follow-up", objective: "O5", notYet: "Only a phone number, or no follow-up date.", meets: "A warm connection, one barrier with a plan, and a follow-up date.", exceeds: "Includes a backup resource if the first does not work." },
      { name: "Privacy and role", objective: "O5", notYet: "Uses a real person's details or gives medical advice.", meets: "Made-up person, consent before sharing, no medical or legal advice.", exceeds: "Lists the crisis steps (911, 988, tell your supervisor) on the guide." },
      { name: "Your state path", objective: "O1", notYet: "No information on how to become a CHW in your state.", meets: "Notes whether your state certifies CHWs, with the official page.", exceeds: "Adds one local employer or training program to contact." }
    ]
  },
  evaluation: {
    results: [
      "Learners who apply for a CHW job or training program within 60 days",
      "Learners who earn state CHW certification where their state offers it",
      "Learners hired as CHWs, outreach workers or navigators within 6 months (follow-up survey)",
      "Partner organizations report referrals that reach the service and get followed up"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet to check resources on official pages",
      "Paper and pen for the screening script, resource guide and referral plan",
      "A partner for role play (optional; writing it works too)",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Before the course, find your state's CHW certification page (or note that your state has none) and share it.",
      "Run the listening and screening lessons as role plays in pairs, with made-up people only.",
      "Bring in a working CHW or promotora to share a day in the job, if you can.",
      "Have learners pool their checked resources into one group guide and note the date each was checked.",
      "Review crisis steps (911, 988, tell your supervisor) and your program's own safety plan before role plays on hard topics."
    ]
  }
};
