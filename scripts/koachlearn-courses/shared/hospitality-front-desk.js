"use strict";

// Koach Learn course: Workforce Development -> "Hotel and Hospitality Careers: Front Desk and Guest Service" (wave 3, 30 October 2026). Also listed for Re-Entry, Youth and Undeserved Community.
// Goes deeper than shared/customer-service-excellence.js (general LAST service): this course teaches the hotel front desk itself: check-in, folios and check-out, walking a guest, guest privacy and key
// control, service animals, human-trafficking signs, the shift checklist, and the AHLEI START Certified Front Desk Representative (CFDR) credential. ADDIE parts follow re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "hospitality-front-desk",
  category: "Workforce Development",
  name: "Hotel and Hospitality Careers: Front Desk and Guest Service",
  skills: "Checking guests in and out, Reading a guest folio, Solving guest problems, Protecting guest privacy and safety, Running a front desk shift, Planning for the CFDR credential",
  outcome: "work a hotel front desk shift the right way: check a guest in and out, explain a bill, solve a problem calmly, keep guests' privacy and safety, and follow a written plan toward a front desk job and credential.",
  about: [
    "Hotels hire front desk agents in every city and many small towns, and many hire people with no hotel experience if they are friendly, reliable and careful. This course is for job seekers, young adults, people coming home from prison and anyone who wants a first step into hospitality.",
    "You will practice the real work of the desk: checking a guest in, reading the guest's bill (the folio), checking a guest out, handling a full hotel or an upset guest, and following the rules that keep guests safe, like never saying a room number out loud.",
    "The course prepares you for the job and for a front desk credential such as the START Certified Front Desk Representative (CFDR) from the American Hotel & Lodging Educational Institute (AHLEI). It does not grant that credential; you earn it by taking AHLEI's own course and exam.",
    "Each lesson takes about five minutes, with a \"Try it now\" task and a two-question quick check. There is a knowledge check after each chapter, a 20-question quiz at the end, and a final task you can show at an interview."
  ],
  finalTask: "Make your front desk job kit: (1) a one-page shift checklist for the start, middle and end of a front desk shift; (2) a check-in script you can say out loud, with the privacy rule built in; (3) a 30-day plan with dates: three hotels you will apply to, when you will practice the script with someone, and when you will check the AHLEI CFDR page or ask an employer about front desk training.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults looking for a first or better job: job seekers, people coming home from prison, immigrants, career changers and youth in job programs. Most have used a phone and talked with customers but have never worked in a hotel.",
    startingPoint: "Can greet people and use a smartphone. Most have not used hotel software, read a guest bill, or handled payment, keys and guest privacy rules.",
    gap: "Hotels hire for the front desk all year and often train on the job, but they want people who already know the basic check-in and check-out steps, can stay calm with upset guests, and will protect guest privacy and safety. Knowing those steps, and having a plan toward a credential, makes a learner easier to hire and helps them keep the job.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 7)",
      "Devices: a phone or a library computer; all practice works on paper",
      "Time: 4 to 6 minute lessons that fit around work and appointments",
      "No real hotel software is needed; hotel systems differ, so the course teaches the steps, not menu names",
      "Privacy: practice uses made-up guests, card numbers and room numbers only",
      "Hiring rules differ: age limits for teens and background checks vary by state and by employer"
    ],
    prerequisites: "None. \"Customer Service Excellence\" is a good companion course for general service skills."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a front desk job posting", action: "list the main front desk duties, the skills hotels ask for and a credential that matches the job", standard: "naming at least four duties and where to check the credential" },
    { id: "O2", condition: "Given a practice guest with a reservation", action: "check the guest in step by step, from greeting to handing over the key", standard: "without skipping a step and without saying the room number out loud" },
    { id: "O3", condition: "Given a practice guest folio at check-out", action: "explain each charge on the folio and check the guest out", standard: "with every charge explained and any wrong charge sent to a manager or fixed by the rules" },
    { id: "O4", condition: "Given an upset guest or a full hotel", action: "solve the guest's problem with an apology, choices and a follow-up note", standard: "staying calm and giving the guest at least two choices" },
    { id: "O5", condition: "Given a privacy, safety or emergency situation at the desk", action: "respond by the hotel's safety and privacy rules", standard: "never giving out a guest's room number or key, and calling 911 or a manager when needed" }
  ],
  chapters: [
    {
      name: "Chapter 1: Working the front desk",
      lessons: [
        {
          title: "The front desk job and the path to it",
          objectives: ["O1"],
          minutes: 5,
          goal: "List the main front desk duties and the credential that can help you get hired.",
          text: [
            "The front desk is the center of a hotel. Front desk agents (also called guest service agents) welcome guests, check them in and out, take reservations, answer the phone, handle payments and keys, solve problems and pass messages to housekeeping and maintenance. The night auditor works overnight, checks the day's numbers and closes the business day.",
            "Hotels hire for attitude and reliability first. Postings often ask for a friendly manner, clear speaking, basic computer skills, careful cash and card handling, and the ability to work nights, weekends and holidays. A second language is a plus in many cities.",
            "A credential can help you stand out. The American Hotel & Lodging Educational Institute (AHLEI) offers the START Certified Front Desk Representative (CFDR) online course and exam. This course prepares you for the job and for that kind of exam; it does not grant the credential. Check the AHLEI page for current details, or ask a hotel whether it pays for training. Some employers also offer apprenticeships, listed at apprenticeship.gov.",
            "Teens: the jobs and hours you can work depend on your age and your state. Check dol.gov/youthrules and your state labor office. If you have a record, many hotels hire fairly: be honest on the application and ready to talk about what you have done since."
          ],
          words: [["Front desk agent", "the hotel worker who checks guests in and out and helps them during their stay; also called a guest service agent."], ["Night auditor", "the overnight front desk worker who checks the day's charges and payments and closes the business day."], ["Credential", "a certificate that shows you passed a course or exam."], ["AHLEI", "the American Hotel & Lodging Educational Institute, which offers hotel training and certification exams."]],
          slides: [
            { title: "What the front desk does", bullets: ["Welcome, check in and check out guests", "Take reservations and answer the phone", "Handle payments and room keys", "Solve problems and pass messages to other teams"] },
            { title: "What hotels hire for", bullets: ["Friendly, clear and reliable", "Careful with cash, cards and keys", "Basic computer skills", "Nights, weekends and holidays"] },
            { title: "A credential that can help", bullets: ["AHLEI START Certified Front Desk Representative (CFDR)", "This course prepares you; AHLEI's exam grants it", "Check the AHLEI page for current details"] },
            { title: "Check your own rules", bullets: ["Teens: dol.gov/youthrules and your state labor office", "Apprenticeships: apprenticeship.gov", "A record: be honest and show what you did since"] }
          ],
          sources: [
            { name: "AHLEI: START Certified Front Desk Representative (CFDR) Online Course and Exam", url: "https://shopahlei.servsafebrands.com/start-cfdr-online-course-and-exam" },
            { name: "AHLEI: certification exams", url: "https://shopahlei.servsafebrands.com/training-and-certification/resourcetype/certification-exam" },
            { name: "Apprenticeship.gov (US Department of Labor)", url: "https://www.apprenticeship.gov/" },
            { name: "YouthRules! (US Department of Labor)", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Find one real front desk or guest service agent posting near you (a job site or a hotel's careers page). On paper, list four duties it names, three skills it asks for, and the shift times. Circle one skill you already have and one you need to build.",
          youCanNow: "say what a front desk agent does, name the skills hotels ask for, and name a credential that can help and where to check it.",
          quickCheck: [
            { objective: "O1", q: "Which is a normal front desk duty?", options: ["Fixing the air conditioner in a room", "Cooking breakfast for guests", "Checking guests in and out", "Cleaning the pool"], answer: 2, why: "Check-in and check-out are core front desk work; repairs, cooking and cleaning belong to other teams." },
            { objective: "O1", q: "What does this course do for the CFDR credential?", options: ["It grants the CFDR certificate", "It prepares you; you earn the credential through AHLEI's course and exam", "It replaces the need for any training", "It is the same as a state license"], answer: 1, why: "AHLEI grants the CFDR after its own course and exam; this course only prepares you." }
          ]
        },
        {
          title: "Checking a guest in",
          objectives: ["O2"],
          minutes: 6,
          goal: "Check in a practice guest in seven steps, from greeting to key.",
          text: [
            "Check-in is the guest's first real moment with the hotel. Do it in the same order every time so nothing gets missed, even when there is a line.",
            "Greet the guest, find the reservation and check the photo ID matches the name. Confirm the dates, room type and rate. Take the payment card, or a deposit by the hotel's rules; many hotels place a hold on the card for the stay and extra charges, and you explain that in plain words.",
            "Give the key card and point to the room on the key folder or a slip, but do not say the room number out loud: other people in the lobby can hear. Explain the basics (Wi-Fi, breakfast, check-out time) and ask if they need anything else.",
            "Every hotel uses a computer system, called a property management system (PMS), to record all of this. Systems differ, and the hotel will train you on its own; the steps stay the same."
          ],
          steps: ["Greet the guest with a smile and your name.", "Find the reservation and check the photo ID matches it.", "Confirm the dates, room type and rate.", "Take the payment card or deposit and explain any hold.", "Make the key card and write the room number on the key folder; do not say it aloud.", "Explain Wi-Fi, breakfast and check-out time.", "Ask \"Is there anything else I can help with?\" and wish them a good stay."],
          words: [["Reservation", "a booking that holds a room for a guest for certain dates."], ["Rate", "the price per night for the room."], ["Hold (authorization)", "an amount the hotel holds on a guest's card to cover the stay and extra charges; it is not the final charge."], ["Property management system (PMS)", "the hotel's computer system for reservations, rooms, check-in, bills and check-out."]],
          slides: [
            { title: "Check-in, the same way every time", bullets: ["Greet with a smile and your name", "Find the reservation and check the photo ID", "Confirm dates, room type and rate"] },
            { title: "Payment and keys", bullets: ["Take the card or deposit by hotel rules", "Explain any hold in plain words", "Make the key card"] },
            { title: "The privacy rule", bullets: ["Write the room number on the key folder", "Point to it; never say it out loud", "Others in the lobby can hear"] },
            { title: "Finish strong", bullets: ["Wi-Fi, breakfast and check-out time", "\"Is there anything else I can help with?\"", "Wish them a good stay"] }
          ],
          tryIt: "With a friend or in a mirror, check in a made-up guest: \"Ms. Rivera, two nights, one king room.\" Say all seven steps out loud. Write room 214 on a paper key folder and point to it instead of saying it. Do it twice, the second time in under three minutes.",
          youCanNow: "check in a guest in seven steps and hand over the key without saying the room number out loud.",
          quickCheck: [
            { objective: "O2", q: "You are handing a guest the key. What do you do with the room number?", options: ["Say it loudly so they remember", "Tell the whole line so they know", "Text it to the guest's friend", "Write it on the key folder and point to it"], answer: 3, why: "Saying the room number aloud lets strangers in the lobby know where the guest is staying." },
            { objective: "O2", q: "What do you check right after finding the reservation?", options: ["That the photo ID matches the name on the reservation", "The guest's job", "How the guest got to the hotel", "The guest's home address on social media"], answer: 0, why: "Matching the ID to the reservation makes sure the room goes to the right person." }
          ]
        },
        {
          title: "Reading the folio and checking a guest out",
          objectives: ["O3"],
          minutes: 5,
          goal: "Explain each charge on a guest folio and check the guest out.",
          text: [
            "A folio is the guest's bill. It lists every night's room rate, taxes and any extra charges, such as parking, room service, a mini-bar or a late check-out fee, and every payment.",
            "At check-out, greet the guest, ask how the stay was, and print or email the folio. Go over it line by line if the guest wants, and listen to anything that was wrong with the stay.",
            "If the guest questions a charge, stay calm and look at it together. If it is a clear mistake the hotel lets you fix, fix it and say so. If you are not allowed to remove it, say \"Let me get my manager so we can sort this out,\" and do not argue. Many hotels also offer express check-out by phone, TV or app.",
            "Protect card details: never write down or read out a full card number. Folios show only the last few digits."
          ],
          steps: ["Greet the guest and ask how the stay was.", "Print or email the folio.", "Go over each charge if the guest asks.", "Fix a clear mistake if your hotel allows it; otherwise call the manager.", "Take the final payment, thank the guest and invite them back."],
          words: [["Folio", "the guest's bill, listing room charges, taxes, extras and payments."], ["Incidentals", "extra charges during a stay, like parking, food or phone calls."], ["Late check-out", "leaving after the normal check-out time, sometimes for a fee."], ["Express check-out", "checking out without stopping at the desk, by phone, TV or app."]],
          slides: [
            { title: "The folio is the guest's bill", bullets: ["Room rate for each night, plus taxes", "Extras: parking, food, late check-out", "Every payment made"] },
            { title: "Checking out", bullets: ["Ask how the stay was", "Print or email the folio", "Go over charges if the guest asks"] },
            { title: "A charge is questioned", bullets: ["Stay calm and look at it together", "Fix a clear mistake if you are allowed", "If not: \"Let me get my manager.\""] },
            { title: "Protect card details", bullets: ["Never write down a full card number", "Never read it out loud", "Folios show only the last few digits"] }
          ],
          tryIt: "Make a practice folio on paper for a made-up guest: two nights at $129, tax shown as a separate line (use any made-up amount), parking $15 each night, and one $12 room service charge that the guest says they did not order. Add it up, then write what you would say about each line and how you would handle the room service charge.",
          youCanNow: "read a folio line by line, explain each charge, and handle a questioned charge calmly by the hotel's rules.",
          quickCheck: [
            { objective: "O3", q: "What is a folio?", options: ["The guest's room key", "The guest's bill with charges and payments", "A list of hotel rules", "The housekeeping schedule"], answer: 1, why: "The folio lists every room charge, tax, extra and payment for the stay." },
            { objective: "O3", q: "A guest questions a charge you are not allowed to remove. What do you say?", options: ["\"Too bad, you have to pay it.\"", "\"I will just delete it.\"", "\"Let me get my manager so we can sort this out.\"", "\"Call your bank.\""], answer: 2, why: "Calling a manager keeps you calm and inside the rules, and gets the guest an answer." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Working the front desk",
        questions: [
          { objective: "O1", q: "Which worker checks the day's charges overnight and closes the business day?", options: ["The night auditor", "The housekeeper", "The cook", "The valet"], answer: 0, why: "The night auditor balances the day's charges and payments and closes the day." },
          { objective: "O1", q: "Where do you check the current details of the START CFDR credential?", options: ["A social media post", "A friend who heard about it", "Any website that sells a certificate", "AHLEI's official page"], answer: 3, why: "AHLEI offers the CFDR, so its official page has the current details." },
          { objective: "O2", q: "A guest at check-in asks, \"Which room am I in?\" in a busy lobby. What do you do?", options: ["Say the number loudly", "Point to the number written on the key folder", "Refuse to tell them", "Write it on the lobby board"], answer: 1, why: "Pointing to the written number tells the guest without telling everyone else." },
          { objective: "O2", q: "Why do you explain a card hold at check-in?", options: ["So the guest knows an amount is held for the stay and extras, not charged as final", "So the guest pays twice", "Because it is the final bill", "Holds are secret and should not be explained"], answer: 0, why: "A clear explanation avoids surprise and complaints when guests see the hold on their card." },
          { objective: "O3", q: "A folio shows parking for three nights, but the guest stayed two. What is the best first step?", options: ["Ignore it", "Tell the guest they are wrong", "Look at it together and fix it or call a manager by the rules", "Charge another night to make it match"], answer: 2, why: "Checking together and following the rules for fixes treats the guest fairly." }
        ]
      }
    },
    {
      name: "Chapter 2: Problems, privacy and your shift",
      lessons: [
        {
          title: "Solving guest problems, even when the hotel is full",
          objectives: ["O4"],
          minutes: 5,
          goal: "Solve a guest problem with an apology, two choices and a follow-up note.",
          text: [
            "Things go wrong in hotels: a room is not ready, the air conditioning is loud, a reservation is missing. The guest is tired and wants a fix. Your job is to stay calm, own the problem and offer choices.",
            "Use four moves: listen without interrupting, apologize (\"I'm sorry, that's not the stay we want for you\"), offer at least two choices (another room, a fix by a certain time, a manager's offer), then follow up and write it in the shift log so the next shift knows.",
            "Sometimes a hotel is overbooked and a guest with a reservation has no room. Hotels may \"walk\" the guest: book them at a nearby hotel. Follow your hotel's walk policy and get a manager. Never promise money or free nights you are not allowed to give.",
            "If a guest yells, threatens or becomes unsafe, you do not have to handle it alone. Step back and call your manager or security."
          ],
          steps: ["Listen to the whole problem without interrupting.", "Apologize and thank the guest for telling you.", "Offer at least two choices you are allowed to give.", "Do what you promised, or get a manager.", "Follow up with the guest and write it in the shift log."],
          words: [["Overbooked", "when the hotel has more reservations than rooms."], ["Walking a guest", "booking a guest who cannot get a room at another nearby hotel, by the hotel's policy."], ["Shift log", "a written or computer log where the front desk records problems and messages for the next shift."]],
          slides: [
            { title: "Four moves for any problem", bullets: ["Listen without interrupting", "Apologize and thank them", "Offer at least two choices", "Follow up and write it in the log"] },
            { title: "When the hotel is full", bullets: ["Hotels may \"walk\" a guest to a nearby hotel", "Follow the walk policy and get a manager", "Never promise what you cannot give"] },
            { title: "If a guest becomes unsafe", bullets: ["Step back from the desk", "Call your manager or security", "You do not handle threats alone"] }
          ],
          tryIt: "Write what you would say to this guest: \"I booked a room with two beds and you gave me one king. My kids are with me.\" Write your apology, two choices you could offer, and the one-line note you would put in the shift log. Then say it out loud.",
          youCanNow: "calm an upset guest, offer two choices, follow up and log the problem, and know when to get a manager.",
          quickCheck: [
            { objective: "O4", q: "A guest's room is not ready. Which reply follows the four moves?", options: ["\"Not my fault, come back later.\"", "\"Rooms are never ready on time.\"", "\"Here is a free week.\"", "\"I'm sorry. I can store your bags and call you by 3 pm, or check for another room now.\""], answer: 3, why: "It apologizes and offers two choices the agent can give." },
            { objective: "O4", q: "The hotel is overbooked and a guest has no room. What do you do?", options: ["Follow the walk policy and get a manager", "Tell the guest to sleep in the lobby", "Promise a refund for a whole month", "Cancel another guest's room without asking"], answer: 0, why: "Walking a guest by policy, with a manager, is how hotels handle overbooking fairly." }
          ]
        },
        {
          title: "Guest privacy, keys and safety",
          objectives: ["O5"],
          minutes: 6,
          goal: "Respond to privacy, key and safety situations by the hotel's rules.",
          text: [
            "Guest privacy keeps people safe. Never tell a caller or visitor whether someone is staying at the hotel or what room they are in. Say \"I can't share guest information, but I can connect you to the room if the guest is staying here\" or take a message. Never give a key to someone whose name is not on the room without the hotel's ID process.",
            "Key cards: check ID before making a new key, never leave key cards or the key machine where guests can reach them, and report lost master keys at once.",
            "Service animals: under the ADA, when it is not obvious, staff may ask only two questions: is the dog required because of a disability, and what work or task has it been trained to perform. You cannot ask for papers or charge a pet fee for a service animal.",
            "Watch for signs of human trafficking, such as a person who seems controlled by someone else, coached on what to say or afraid. Do not confront anyone. Tell your manager and follow hotel policy; you can report to the National Human Trafficking Hotline at 1-888-373-7888. In any emergency (fire, medical, violence), call 911 (or your local emergency number) first, then your manager."
          ],
          steps: ["Never confirm a guest is staying or share a room number.", "Offer to connect the call to the room or take a message.", "Check ID before making any new key.", "For a service animal, ask only the two allowed questions when needed.", "Report trafficking signs to your manager; do not confront anyone.", "In an emergency, call 911 first, then your manager."],
          words: [["Key control", "the rules for making, storing and tracking room keys so only the right people get in."], ["ADA", "the Americans with Disabilities Act, the US law that protects people with disabilities, including their use of service animals."], ["Service animal", "under the ADA, a dog trained to do work or tasks for a person with a disability."], ["Human trafficking", "using force, fraud or threats to make someone work or do sex acts."]],
          slides: [
            { title: "Protect guest privacy", bullets: ["Never confirm who is staying", "Never share a room number", "\"I can connect you to the room or take a message.\""] },
            { title: "Key control", bullets: ["Check ID before any new key", "Keep keys and the key machine out of reach", "Report a lost master key at once"] },
            { title: "Service animals (ADA)", bullets: ["Ask only: required for a disability?", "And: what work or task is it trained to do?", "No papers, no pet fee for a service animal"] },
            { title: "Trafficking signs and emergencies", bullets: ["Watch for someone controlled, coached or afraid", "Do not confront; tell your manager", "Hotline: 1-888-373-7888", "Emergency: call 911 first, then your manager"] }
          ],
          sources: [
            { name: "ADA.gov: ADA Requirements: Service Animals", url: "https://www.ada.gov/resources/service-animals-2010-requirements/" },
            { name: "DHS Blue Campaign: Indicators of Human Trafficking", url: "https://www.dhs.gov/blue-campaign/indicators-human-trafficking" },
            { name: "AHLA Foundation: No Room For Trafficking (free hotel staff training)", url: "https://www.ahlafoundation.org/nrft/" }
          ],
          tryIt: "Write your answer to each: (1) A caller says \"Put me through to my wife, Jane Lee. What room is she in?\" (2) A man without ID says he lost his key to room 305. (3) A guest has a dog; you are not sure it is a service animal. Then, if you can, take the free 30-minute \"Your Role in Preventing Human Trafficking\" training linked from the AHLA Foundation's No Room For Trafficking page.",
          youCanNow: "protect guest privacy on the phone and at the desk, control keys, handle a service animal by the ADA, and report trafficking signs and emergencies the right way.",
          quickCheck: [
            { objective: "O5", q: "A caller asks what room a guest is in. What do you say?", options: ["Give the room number", "\"I can't share guest information, but I can connect you or take a message.\"", "\"She checked out an hour ago.\"", "\"Call back when I'm off shift.\""], answer: 1, why: "Never confirm a guest is staying or share a room number; connecting or taking a message protects the guest." },
            { objective: "O5", q: "A guest has a dog and it is not obvious it is a service animal. What may you ask?", options: ["For the dog's certification papers", "What the guest's disability is", "To pay the pet fee first", "Whether the dog is required for a disability and what task it is trained to do"], answer: 3, why: "The ADA allows only those two questions; no papers and no pet fee for a service animal." }
          ]
        },
        {
          title: "Your shift checklist and your job plan",
          objectives: ["O1", "O2"],
          minutes: 5,
          goal: "Write a front desk shift checklist and a 30-day plan toward a front desk job.",
          text: [
            "Good front desk agents work from a checklist. At the start of a shift: arrive early, read the shift log, count your cash drawer with a manager or by the hotel's process, and check today's arrivals, departures and rooms ready.",
            "During the shift: greet every guest, check in and out with the same steps, answer the phone by the third ring if you can, keep the desk neat and keep keys secure. At the end: finish open tasks, count your drawer again, and write anything the next shift must know in the log.",
            "Now plan your path. Pick three hotels near you, practice your check-in script with a real person, and decide when you will look at the AHLEI CFDR page or ask an employer if it pays for training. Put real dates on each step. Bring your checklist and script to the interview: it shows you already know the job."
          ],
          steps: ["Write the start-of-shift tasks.", "Write the during-shift tasks.", "Write the end-of-shift tasks.", "Write your check-in script with the privacy rule in it.", "Write a 30-day plan with dates: three hotels, practice, and the credential check."],
          words: [["Cash drawer (bank)", "the cash a front desk agent is responsible for during a shift; it is counted at the start and end."], ["Arrivals and departures", "the lists of guests checking in and checking out today."], ["Shift handoff", "passing on open tasks and notes to the next shift."]],
          slides: [
            { title: "Start of shift", bullets: ["Arrive early and read the shift log", "Count the cash drawer by the hotel's process", "Check arrivals, departures and rooms ready"] },
            { title: "During the shift", bullets: ["Same check-in and check-out steps every time", "Answer the phone quickly and politely", "Keep the desk neat and the keys secure"] },
            { title: "End of shift", bullets: ["Finish open tasks", "Count the drawer again", "Write what the next shift must know"] },
            { title: "Your 30-day plan", bullets: ["Three hotels to apply to, with dates", "Practice your script with a real person", "Check the AHLEI CFDR page or ask about training"] }
          ],
          tryIt: "Build your job kit on paper or in a free document: your shift checklist (start, during, end), your check-in script in seven steps, and a 30-day plan with real dates. Ask someone to play the guest while you read the script.",
          youCanNow: "show a hiring manager a front desk shift checklist, a check-in script and a dated plan toward the job and a credential.",
          quickCheck: [
            { objective: "O1", q: "Which belongs in a 30-day front desk job plan?", options: ["\"Someday look for jobs\"", "\"Apply to three named hotels by the 15th and practice my script on the 10th\"", "\"Pay someone for a guaranteed job\"", "\"Wait for a hotel to call me\""], answer: 1, why: "A real plan names specific steps with dates." },
            { objective: "O2", q: "What is a good start-of-shift task?", options: ["Read the shift log and check today's arrivals", "Leave the drawer uncounted", "Turn off the phones", "Give out spare keys to save time"], answer: 0, why: "Reading the log and arrivals tells you what the shift needs before guests arrive." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Problems, privacy and your shift",
        questions: [
          { objective: "O4", q: "What should you always do after solving a guest problem?", options: ["Forget it", "Post about it online", "Follow up and write it in the shift log", "Charge the guest extra"], answer: 2, why: "Following up and logging it lets the next shift know and shows the guest you care." },
          { objective: "O4", q: "A guest starts shouting threats at the desk. What do you do?", options: ["Shout back", "Step back and call your manager or security", "Jump over the desk", "Ignore it and keep typing"], answer: 1, why: "You do not handle threats alone; stepping back and calling for help keeps everyone safe." },
          { objective: "O5", q: "A visitor without ID says he lost the key to room 305. What do you do?", options: ["Make a key quickly", "Give him the master key", "Tell him who is in 305", "Follow the ID process; no key without it"], answer: 3, why: "Key control means checking ID before any new key, so strangers cannot get into rooms." },
          { objective: "O5", q: "A guest collapses in the lobby. What is your first step?", options: ["Call 911 (or your local emergency number), then your manager", "Finish checking in the next guest", "Post about it", "Wait to see if they get up"], answer: 0, why: "In any medical emergency, call 911 first; then tell your manager." },
          { objective: "O5", q: "You notice a young person who seems controlled and coached by an adult. What do you do?", options: ["Confront the adult", "Ask the young person loudly if they are trafficked", "Do not confront; tell your manager and follow hotel policy", "Ignore it"], answer: 2, why: "Confronting can put people in danger; report to your manager and the proper hotline." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Hotel and Hospitality Careers: Front Desk and Guest Service",
    questions: [
      { objective: "O1", q: "Which is a main duty of a front desk agent?", options: ["Repairing room plumbing", "Taking reservations and answering the phone", "Washing the hotel's laundry", "Cooking room service"], answer: 1, why: "Reservations and phones are front desk work; the others belong to other teams." },
      { objective: "O1", q: "Who offers the START Certified Front Desk Representative (CFDR) credential?", options: ["The American Hotel & Lodging Educational Institute (AHLEI)", "The IRS", "Your state DMV", "Any hotel guest"], answer: 0, why: "AHLEI offers the CFDR course and exam." },
      { objective: "O1", q: "A teen wants a front desk job. Where should they check which jobs and hours are allowed?", options: ["A friend's guess", "Any job ad", "dol.gov/youthrules and their state labor office", "Nowhere; teen rules are the same everywhere"], answer: 2, why: "Youth work rules depend on age and state, so check the official pages." },
      { objective: "O1", q: "What do hotels look for first in a new front desk agent?", options: ["Years of hotel experience only", "A college degree only", "Owning a car only", "A friendly, reliable person who is careful with cash and keys"], answer: 3, why: "Hotels often train on the job and hire for attitude and reliability." },
      { objective: "O2", q: "What is the right order to start a check-in?", options: ["Make the key, then greet the guest", "Greet, find the reservation, check the ID", "Take payment, then find out who they are", "Say the room number, then greet"], answer: 1, why: "Greet first, then find the reservation and match the ID." },
      { objective: "O2", q: "What is a property management system (PMS)?", options: ["The hotel's computer system for reservations, rooms and bills", "A cleaning schedule", "A parking app", "A type of key card"], answer: 0, why: "The PMS records reservations, check-in, bills and check-out." },
      { objective: "O2", q: "How do you tell a guest their room number at check-in?", options: ["Announce it to the lobby", "Shout it as they walk away", "Write it on the key folder and point to it", "Post it on the board"], answer: 2, why: "Writing and pointing keeps the room number private." },
      { objective: "O2", q: "Which should you explain before the guest leaves the desk?", options: ["The manager's home address", "Other guests' room numbers", "The hotel's alarm codes", "Wi-Fi, breakfast and check-out time"], answer: 3, why: "These basics help the guest and cut down on calls to the desk." },
      { objective: "O3", q: "Which is an incidental charge?", options: ["Parking or room service", "The guest's home rent", "The hotel's electric bill", "Your paycheck"], answer: 0, why: "Incidentals are extras during a stay, like parking and food." },
      { objective: "O3", q: "How should a full card number appear when you talk with a guest about the bill?", options: ["Read out loud in full", "Written on a sticky note", "Never read out or written down; only the last few digits", "Texted to the guest"], answer: 2, why: "Protecting card numbers stops fraud; folios show only the last few digits." },
      { objective: "O3", q: "A guest says a room service charge is not theirs. You may not remove charges. What do you do?", options: ["Argue until they pay", "Delete it anyway", "Tell them to dispute it with their bank", "Look at it with them and get your manager"], answer: 3, why: "Staying calm and bringing a manager follows the rules and gets the guest an answer." },
      { objective: "O3", q: "What is express check-out?", options: ["Checking out without stopping at the desk, by phone, TV or app", "Leaving without paying", "A faster elevator", "Checking out at midnight only"], answer: 0, why: "Express check-out lets guests leave without waiting in line." },
      { objective: "O4", q: "What are the four moves for a guest problem?", options: ["Ignore, wait, blame, leave", "Listen, apologize, offer choices, follow up and log", "Argue, refund, apologize, forget", "Transfer, hang up, log, repeat"], answer: 1, why: "Listening, apologizing, offering choices and following up solves most problems." },
      { objective: "O4", q: "What does \"walking a guest\" mean?", options: ["Showing a guest to the elevator", "Taking a guest's dog for a walk", "Booking a guest at a nearby hotel when yours is overbooked", "Asking a guest to leave"], answer: 2, why: "Hotels walk guests to another hotel by policy when they are overbooked." },
      { objective: "O4", q: "A guest wants a free week because the TV did not work. You are not allowed to give that. What do you do?", options: ["Promise it anyway", "Tell them they are lying", "Hang up on them", "Apologize, offer choices you are allowed to give, and get a manager for anything more"], answer: 3, why: "Never promise what you cannot give; offer what you can and bring in a manager." },
      { objective: "O4", q: "Why write guest problems in the shift log?", options: ["So the next shift knows and can follow up", "To blame the guest", "Because guests read it", "It is not needed"], answer: 0, why: "The log passes important information to the next shift." },
      { objective: "O5", q: "Someone at the desk asks, \"Is my boss, Mr. Diaz, staying here?\" What do you say?", options: ["\"Yes, room 410.\"", "\"I can't share guest information, but I can take a message.\"", "\"He checked in yesterday.\"", "\"Let me look up his home address.\""], answer: 1, why: "You never confirm a guest is staying; taking a message protects them." },
      { objective: "O5", q: "Under the ADA, what can you NOT do with a service animal?", options: ["Ask if the dog is required because of a disability", "Ask what task it is trained to do", "Charge a pet fee or ask for papers", "Welcome the guest"], answer: 2, why: "The ADA bars pet fees and paperwork demands for service animals." },
      { objective: "O5", q: "What is the National Human Trafficking Hotline number?", options: ["411", "1-800-555-0000", "The hotel's front desk extension", "1-888-373-7888"], answer: 3, why: "1-888-373-7888 is the National Human Trafficking Hotline listed by DHS." },
      { objective: "O5", q: "A fire alarm goes off and you smell smoke. What comes first?", options: ["Call 911 (or your local emergency number) and follow the hotel's emergency plan", "Finish the check-in you are doing", "Post a video", "Wait for a guest to complain"], answer: 0, why: "In an emergency, call 911 first and follow the hotel's emergency plan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 6, 8, 10, 12, 13, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Shift checklist", objective: "O1", notYet: "The checklist is missing the start, middle or end of the shift.", meets: "It has start, during and end tasks, including the shift log and the drawer count.", exceeds: "It also adds key control and phone tasks and fits on one clear page." },
      { name: "Check-in script", objective: "O2", notYet: "Steps are missing or the script says the room number out loud.", meets: "All seven steps in order, with the room number written and pointed to, not said.", exceeds: "Read aloud to a partner in under three minutes, with a warm greeting and close." },
      { name: "Folio and check-out", objective: "O3", notYet: "Cannot explain the charges, or would argue about a questioned charge.", meets: "Explains each charge on a practice folio and says to fix a clear mistake or get a manager.", exceeds: "Also explains a card hold in plain words and never shows a full card number." },
      { name: "Problem solving", objective: "O4", notYet: "The reply argues, blames or promises what the agent cannot give.", meets: "Apologizes, offers at least two allowed choices and writes a shift log note.", exceeds: "Also says when to get a manager and how they would follow up with the guest." },
      { name: "Privacy and safety", objective: "O5", notYet: "Shares a room number, gives a key without ID, or would confront a suspected trafficker.", meets: "Protects guest information, checks ID for keys, and reports emergencies and trafficking signs correctly.", exceeds: "Also handles a service animal with only the two ADA questions and has taken a free trafficking training." },
      { name: "30-day plan", objective: "O1", notYet: "No dates, or no named hotels.", meets: "Three named hotels, a practice date and a date to check the CFDR page or ask about training.", exceeds: "Also lists who will be a reference and how they will get to each shift." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who apply to at least three hotel or hospitality jobs within 30 days (follow-up survey)",
      "Learners hired into a front desk, guest service or other hotel job within 90 days",
      "Learners who start a front desk credential such as the AHLEI CFDR within 90 days",
      "Hotel partners report new hires need less basic front desk training"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet, or the lessons on paper",
      "Paper and pen for practice folios, key folders and the shift checklist",
      "A partner to play the guest (a friend, family member or classmate)",
      "About 75 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Set up a mock front desk with a table, a paper key folder and a practice folio; have learners take turns as agent and guest.",
      "Use only made-up guest names, card numbers and room numbers in all practice.",
      "Invite a local hotel manager to watch the check-in role plays and talk about how they hire.",
      "Youth programs: check state rules on teen work hours before placing anyone; re-entry programs: point learners to employers known for fair-chance hiring.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
