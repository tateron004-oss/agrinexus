"use strict";

// Koach Learn course: Small Business -> "AI for Healthcare Practices" (bonus course). Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// HIPAA business associate and cloud-service guidance was checked on hhs.gov on 27 October 2026. This course is not legal or compliance advice.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const HHS_CLOUD = { name: "HHS: Guidance on HIPAA and Cloud Computing", url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html" };
const HHS_BA = { name: "HHS: Business Associates (HIPAA guidance)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html" };
const HHS_HIPAA = { name: "HHS: HIPAA for Professionals", url: "https://www.hhs.gov/hipaa/for-professionals/index.html" };

module.exports = {
  id: "smallbiz-ai-healthcare-practices",
  category: "Small Business",
  name: "AI for Healthcare Practices",
  skills: "Knowing when patient information can and cannot go into AI, Writing front-desk scripts, Drafting patient education handouts for clinician review, Making scheduling and reminder templates, Writing office policies, Setting AI rules for staff",
  outcome: "use AI safely for the administrative work of a small healthcare practice: decide which tasks can use a general AI tool and which need an approved tool with a business associate agreement, and produce front-desk scripts, reminder templates, a plain-language handout for clinician review, and a staff AI policy, with no patient information in any general AI tool.",
  about: [
    "This course is for owners, office managers and front-desk staff of small healthcare practices: family clinics, dental offices, therapy and counseling practices, chiropractors, physical therapy, optometry and home health agencies, including many minority-owned practices serving their communities.",
    "You will learn the one rule that matters most: protected health information (PHI) does not go into an AI tool unless your practice has approved it and has a HIPAA business associate agreement (BAA) with the company. Then you will use AI for the many office tasks that need no patient information at all.",
    "AI does not diagnose, treat or give medical advice in this course. Every patient-facing health text is reviewed by a licensed clinician. This course is not legal or compliance advice; check HHS guidance and your compliance advisor. Each lesson takes about five minutes, with a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build a practice AI kit: a task list sorted into \"no PHI, general AI OK\" and \"PHI, approved BAA tool only or no AI\"; three front-desk phone scripts; appointment confirmation and reminder templates with placeholders; one plain-language patient handout on a general topic marked \"for clinician review\"; and a one-page staff AI policy. None of it contains real patient information.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Owners, office managers and front-desk staff of small healthcare practices: family clinics, dental offices, therapy and counseling practices, chiropractors, physical therapy, optometry and home health agencies, including many minority-owned practices serving their communities.",
    startingPoint: "Run the front desk, scheduling and office paperwork every day and know the basics of patient privacy. Many have heard of AI tools or tried one, but are not sure what is allowed under HIPAA.",
    gap: "Office writing takes time that small practices do not have, but putting patient information into the wrong AI tool can break HIPAA rules and harm patients. Learners need a clear rule for which tasks can use AI, and ready-made scripts, templates, handouts and a staff policy that keep patient information out.",
    constraints: [
      "No PHI in any general AI tool; only practice-approved tools with a business associate agreement",
      "AI never diagnoses, treats or gives medical advice; a licensed clinician reviews all patient-facing health text",
      "Not legal or compliance advice: check HHS guidance and the practice's compliance advisor",
      "Time: busy front desks, so lessons are about 5 minutes each",
      "Plain words for staff and for patient materials (about a 6th-grade reading level)"
    ],
    prerequisites: "None. Learners new to AI assistants can take an introduction to AI course first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of office tasks", action: "sort each task into \"no PHI, general AI OK\" or \"PHI, approved BAA tool only or no AI\"", standard: "getting every task with PHI in the second column" },
    { id: "O2", condition: "Given common front-desk calls", action: "write phone scripts that route refill, symptom and emergency calls to the right place", standard: "with every emergency script telling the caller to call 911, approved by the clinical lead" },
    { id: "O3", condition: "Using placeholders instead of patient details", action: "create confirmation and reminder templates that leave out the reason for the visit", standard: "with no real patient information in the AI tool" },
    { id: "O4", condition: "Given a general patient topic", action: "draft a plain-language handout and mark it for clinician review", standard: "at about a 6th-grade reading level, with your contact line and a 911 note" },
    { id: "O5", condition: "Given an office writing task such as a policy, email or job post", action: "draft it with a general AI tool and list any part that needs a compliance or HR check", standard: "with no patient information used" },
    { id: "O6", condition: "For your own practice", action: "write a one-page staff AI policy with five to seven rules", standard: "including no PHI without a BAA, approved tools by name, reporting mistakes and a yearly review" }
  ],
  chapters: [
    {
      name: "Chapter 1: HIPAA first, then the front desk",
      lessons: [
        {
          objectives: ["O1"],
          title: "PHI, HIPAA and AI: the rule that comes first",
          minutes: 6,
          goal: "Decide whether a task can use a general AI tool or needs an approved tool with a BAA.",
          text: [
            "Protected health information (PHI) is health information that can identify a patient: names with conditions, dates of birth, chart notes, insurance IDs, appointment details, photos and more. HIPAA sets rules for how practices protect it.",
            "HHS guidance says that when a covered entity uses an outside service, such as a cloud service, to create, receive, keep or send PHI, that service is a business associate, and the practice needs a business associate agreement (BAA) with it. Using such a service for PHI without a BAA violates the HIPAA rules. Most free, general AI chat tools do not sign BAAs with individual users.",
            "So sort every task: if it needs PHI, use only a tool your practice has approved and has a BAA with, or do not use AI. If it needs no PHI, such as a general handout, a phone script or an office policy, a general AI tool can help. When in doubt, ask your compliance or privacy officer."
          ],
          steps: ["List the office tasks you want help with.", "Ask: does this task need any patient information?", "No PHI: a general AI tool can help.", "PHI: only an approved tool with a BAA, or no AI.", "Unsure: ask your privacy or compliance officer."],
          words: [["PHI", "protected health information: health information that can identify a patient."], ["HIPAA", "the federal law with rules for protecting health information."], ["Business associate agreement (BAA)", "a contract in which a vendor agrees to protect PHI under HIPAA."], ["Covered entity", "a health plan, clearinghouse or provider that must follow HIPAA."]],
          slides: [
            { title: "What counts as PHI", bullets: ["Names with conditions, dates of birth", "Chart notes, insurance IDs, appointments", "Photos and other identifying details"] },
            { title: "HHS on outside services", bullets: ["A service handling PHI is a business associate", "The practice needs a BAA with it", "PHI without a BAA violates HIPAA rules"] },
            { title: "Sort every task", bullets: ["No PHI: general AI can help", "PHI: approved BAA tool only, or no AI", "Unsure: ask your compliance officer"] }
          ],
          sources: [HHS_CLOUD, HHS_BA, HHS_HIPAA],
          tryIt: "List ten tasks in your office. Sort them into two columns: \"No PHI: general AI OK\" and \"PHI: approved BAA tool only or no AI\".",
          youCanNow: "decide whether an office task can use a general AI tool or needs an approved tool with a BAA.",
          quickCheck: [
            { objective: "O1", q: "Which of these is PHI?", options: ["An insurance ID number for a patient", "Your office's opening hours", "A job post for a receptionist", "A general handout on hand washing"], answer: 0, why: "Insurance IDs are health information that can identify a patient." },
            { objective: "O1", q: "You want AI to help write a phone script about parking. Which tool can you use?", options: ["Only a tool with a BAA", "A general AI tool, because it needs no PHI", "No AI tool at all", "Only a patient's own phone"], answer: 1, why: "Tasks that need no patient information can use a general AI tool." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Front-desk phone and message scripts",
          minutes: 5,
          goal: "Write clear, kind front-desk scripts for common calls.",
          text: [
            "Front-desk staff handle the same calls every day: new patient questions, insurance accepted, directions and parking, rescheduling, prescription refill requests, records requests, and someone who sounds like they are in an emergency.",
            "These scripts need no patient information, so a general AI tool can help: \"Write a short, warm phone script for a family dental office for a new patient asking if we take their insurance. Our policy: [your policy]. Keep it under 80 words.\"",
            "Every script that touches care must route to the right person: refill and symptom questions go to clinical staff, and any emergency script tells the caller to hang up and call 911 or go to the nearest emergency room. Have your clinical lead approve these scripts."
          ],
          steps: ["List your ten most common calls.", "Ask AI for a short script for each, with your real policies.", "Make sure clinical questions route to clinical staff.", "Add an emergency line: call 911.", "Have your clinical lead approve them."],
          words: [["Script", "a short guide of what to say on a common call."], ["Triage", "deciding how urgent a health problem is; done by clinical staff, not the front desk or AI."]],
          slides: [
            { title: "Common calls", bullets: ["New patients and insurance", "Directions, rescheduling, records", "Refills and possible emergencies"] },
            { title: "No PHI needed", bullets: ["General AI can draft these", "Give it your real policies", "Keep each under about 80 words"] },
            { title: "Route care questions", bullets: ["Refills and symptoms -> clinical staff", "Emergencies -> call 911 or go to the ER", "Clinical lead approves scripts"] }
          ],
          tryIt: "Ask AI for three front-desk scripts: insurance question, rescheduling, and a caller describing chest pain (which must direct them to call 911). Mark them for your clinical lead to approve.",
          youCanNow: "write front-desk scripts that are kind, clear and route care questions safely.",
          quickCheck: [
            { objective: "O2", q: "Where should a front-desk script send a prescription refill request?", options: ["To the AI tool", "To the billing office", "To clinical staff", "To the caller's pharmacy only"], answer: 2, why: "Refill and symptom questions go to clinical staff." },
            { objective: "O2", q: "AI writes a script for a caller with trouble breathing that says \"We will call you back tomorrow.\" What do you do?", options: ["Use it; it is polite", "Make it shorter", "Translate it", "Change it to tell the caller to hang up and call 911 or go to the nearest emergency room"], answer: 3, why: "Every emergency script tells the caller to call 911 or go to the nearest emergency room." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Scheduling and reminder templates",
          minutes: 5,
          goal: "Make appointment confirmation and reminder templates that protect privacy.",
          text: [
            "Templates save time and reduce no-shows. Write them with placeholders: \"Hi [first name], this is [practice name] confirming your appointment on [date] at [time]. Reply C to confirm or call [phone] to reschedule.\"",
            "Keep reminders minimal. Leave out the reason for the visit and the type of provider when that would reveal sensitive information, such as a therapy or specialty visit. Your practice management or patient messaging system fills in the real details, not the AI tool.",
            "Ask AI for versions in other languages your patients speak, then have a fluent staff member or qualified translator check them."
          ],
          steps: ["Ask AI for confirmation, reminder and reschedule templates with placeholders.", "Remove anything that reveals the visit reason.", "Load them into your scheduling system, which fills in the details.", "Get translations checked by a fluent or qualified person."],
          words: [["Practice management system", "the software a practice uses for scheduling and billing."], ["Minimum necessary", "the HIPAA idea of using or sharing only the information needed for the purpose."]],
          slides: [
            { title: "Templates with placeholders", bullets: ["[first name], [date], [time], [phone]", "The AI tool never sees real details"] },
            { title: "Keep reminders minimal", bullets: ["Leave out the visit reason", "Be careful with sensitive specialties", "Your scheduling system fills in details"] },
            { title: "Other languages", bullets: ["AI drafts translations", "A fluent or qualified person checks them"] }
          ],
          tryIt: "Ask AI for a confirmation, a day-before reminder and a reschedule template with placeholders. Remove anything that reveals why the patient is coming.",
          youCanNow: "create privacy-minded appointment templates with AI help.",
          quickCheck: [
            { objective: "O3", q: "What fills in the real patient details in a reminder?", options: ["Your practice management or messaging system", "The general AI tool", "The patient's insurance company", "A printed calendar"], answer: 0, why: "Your scheduling or messaging system fills in real details, not the AI tool." },
            { objective: "O3", q: "A reminder template says \"your therapy appointment.\" What do you change?", options: ["Nothing", "Remove the word \"therapy\" so it does not reveal sensitive information", "Add the diagnosis", "Add the therapist's home phone"], answer: 1, why: "Leave out the visit reason or provider type when it would reveal sensitive information." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: HIPAA first, then the front desk",
        questions: [
          { objective: "O1", q: "Which is protected health information (PHI)?", options: ["Your office parking directions", "A patient's name with their diagnosis", "A general handout on hand washing", "Your office hours"], answer: 1, why: "Health information that identifies a patient is PHI." },
          { objective: "O1", q: "Per HHS, a service that keeps PHI for your practice needs:", options: ["A patient's password", "Nothing", "A social media account", "A business associate agreement"], answer: 3, why: "Services handling PHI are business associates and need a BAA." },
          { objective: "O1", q: "You want AI to summarize a patient's chart notes. Your practice has no BAA with the tool. What do you do?", options: ["Do not use that tool for it", "Paste the notes in", "Remove only the last name and paste", "Ask a friend"], answer: 0, why: "PHI only goes into approved tools with a BAA." },
          { objective: "O2", q: "A caller describes chest pain. The script should:", options: ["Ask AI for a diagnosis", "Book them next week", "Tell them to call 911 or go to the nearest ER", "Put them on hold"], answer: 2, why: "Emergencies go to 911." },
          { objective: "O3", q: "What should a text reminder leave out?", options: ["The time", "The date", "The reason for the visit", "The practice phone number"], answer: 2, why: "Minimal reminders protect privacy." }
        ]
      }
    },
    {
      name: "Chapter 2: Patient materials, office work and staff rules",
      lessons: [
        {
          objectives: ["O4"],
          title: "Plain-language patient handouts, reviewed by a clinician",
          minutes: 5,
          goal: "Draft a general patient handout in plain words and send it for clinician review.",
          text: [
            "Many patients struggle with medical language. AI is good at rewriting general information in plain words: how to prepare for a cleaning, what to bring to a first visit, general tips on staying active.",
            "Use general topics only, never a specific patient's details. Ask: \"Write a one-page handout at about a 6th-grade reading level on how to prepare for a first physical therapy visit. Short sentences, headings, no medical advice beyond general preparation.\"",
            "AI can be wrong about health facts. Mark every draft \"For clinician review\" and have a licensed clinician check and approve it before any patient sees it. Add your practice's contact line and a note to call 911 in an emergency."
          ],
          steps: ["Pick a general topic patients ask about.", "Ask AI for a plain-language draft with headings.", "Mark it \"For clinician review\".", "A licensed clinician corrects and approves it.", "Add your contact line and the 911 note."],
          words: [["Plain language", "writing that most people understand the first time they read it."], ["Reading level", "how hard a text is to read, often given as a school grade."]],
          slides: [
            { title: "Plain words help patients", bullets: ["Prepare for a visit", "What to bring", "General healthy habits"] },
            { title: "General topics only", bullets: ["Never a specific patient's details", "Ask for about a 6th-grade reading level"] },
            { title: "Clinician review", bullets: ["Mark drafts \"For clinician review\"", "A licensed clinician approves", "Add contact line and 911 note"] }
          ],
          tryIt: "Ask AI for a one-page handout on a general topic for your practice. Mark it \"For clinician review\" and list two facts the clinician should check.",
          youCanNow: "draft plain-language patient handouts with AI and route them for clinician approval.",
          quickCheck: [
            { objective: "O4", q: "Which topic fits a general AI handout draft?", options: ["Mr. Lee's test results", "A patient's medication changes", "What to bring to a first visit", "A diagnosis for a caller"], answer: 2, why: "Use general topics only, never a specific patient's details." },
            { objective: "O4", q: "AI's handout draft looks good. What do you do before a patient sees it?", options: ["Print it right away", "Post it on the website", "Ask AI if it is correct", "Mark it \"For clinician review\" and have a licensed clinician approve it"], answer: 3, why: "AI can be wrong about health facts, so a licensed clinician checks every draft." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Office policies, emails and job posts",
          minutes: 4,
          goal: "Use AI for office documents that need no patient information.",
          text: [
            "Much of running a practice is ordinary business writing: a cancellation and no-show policy, a staff email about a new phone system, a job post for a medical assistant, a vendor complaint letter, a new-hire checklist.",
            "These need no PHI, so general AI tools can draft them. Give your real policies and details: \"Draft a friendly no-show policy for a counseling practice: 24-hour notice, $50 fee after the second no-show. Plain words.\"",
            "Check any rule that touches law: fees, employment, billing and patient rights can be regulated. Have your compliance advisor, HR advisor or attorney check before you publish."
          ],
          steps: ["Pick an office document with no patient information.", "Give AI your real policy details.", "Edit for your voice.", "Have a compliance, HR or legal advisor check anything regulated."],
          words: [["No-show policy", "the practice's rules for missed appointments."], ["Compliance advisor", "a person who helps a practice follow health care laws and rules."]],
          slides: [
            { title: "Ordinary business writing", bullets: ["Cancellation and no-show policy", "Staff emails and job posts", "Vendor letters and checklists"] },
            { title: "No PHI: general AI can help", bullets: ["Give your real details", "Edit for your voice"] },
            { title: "Check regulated topics", bullets: ["Fees, employment, billing, patient rights", "Compliance, HR or legal review"] }
          ],
          tryIt: "Ask AI to draft your practice's no-show policy or a job post for a front-desk role. Note anything that needs a compliance or HR check.",
          youCanNow: "use AI for office documents that contain no patient information, with the right checks.",
          quickCheck: [
            { objective: "O5", q: "Which is ordinary business writing that needs no PHI?", options: ["A new-hire checklist", "A patient's chart note", "A lab result letter to one patient", "A referral with a diagnosis"], answer: 0, why: "Policies, emails, job posts and checklists need no patient information." },
            { objective: "O5", q: "AI drafts a no-show policy with a fee. What do you do before publishing it?", options: ["Publish it right away", "Have a compliance advisor, HR advisor or attorney check it", "Double the fee", "Remove the date"], answer: 1, why: "Fees and patient rights can be regulated, so an advisor checks them first." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Writing your practice's AI policy",
          minutes: 5,
          goal: "Write a one-page AI policy for staff and finish your practice AI kit.",
          text: [
            "Staff may already be using AI on their phones. A short written policy protects patients and the practice. Five to seven rules are enough to start.",
            "Example rules: (1) No PHI in any AI tool unless the practice approved it and has a BAA. (2) Approved tools are listed by name. (3) AI never gives diagnoses or treatment advice to patients. (4) A licensed clinician approves any patient-facing health content. (5) Staff check facts in AI drafts. (6) Report any accidental PHI entry to the privacy officer right away. (7) The policy is reviewed every year.",
            "Use AI to tighten the wording, then have your privacy or compliance officer approve it, train staff, and keep a signed copy."
          ],
          steps: ["Draft five to seven rules.", "List approved tools by name.", "Add how to report a mistake.", "Ask AI to tighten the wording.", "Get compliance approval, train staff and keep signed copies."],
          words: [["Privacy officer", "the person in a practice responsible for HIPAA privacy."], ["Approved tool", "a tool the practice has reviewed and allowed, with a BAA if it handles PHI."]],
          slides: [
            { title: "Why a policy", bullets: ["Staff may already use AI", "Protects patients and the practice"] },
            { title: "Core rules", bullets: ["No PHI without an approved BAA tool", "No diagnoses or treatment advice from AI", "Clinician approves patient health content"] },
            { title: "Make it work", bullets: ["Report accidental PHI entry right away", "Compliance approves; train staff", "Review every year"] }
          ],
          sources: [HHS_BA],
          tryIt: "Final task: write your one-page staff AI policy and put together your practice AI kit: sorted task list, three scripts, reminder templates, a handout marked for clinician review, and the policy. Check that no real patient information appears anywhere.",
          youCanNow: "lead safe AI use in a healthcare practice with clear rules and useful, PHI-free tools.",
          quickCheck: [
            { objective: "O6", q: "How many rules does the lesson suggest for a first AI policy?", options: ["One", "Fifty", "Five to seven", "None; just tell staff verbally"], answer: 2, why: "Five to seven rules are enough to start." },
            { objective: "O6", q: "Your AI policy draft is ready. What are the next steps?", options: ["Keep it in a drawer", "Post it online for patients", "Let each staff member change it", "Have the privacy or compliance officer approve it, train staff and keep a signed copy"], answer: 3, why: "The officer approves it, staff are trained, and you keep a signed copy." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Patient materials, office work and staff rules",
        questions: [
          { objective: "O4", q: "Who approves an AI-drafted patient handout?", options: ["A licensed clinician", "The AI", "The front desk alone", "A patient"], answer: 0, why: "Clinicians check health facts." },
          { objective: "O4", q: "Which topic is fine for a general AI handout draft?", options: ["A chart note", "Mr. Lee's test results", "A patient's medication list", "How to prepare for a first visit"], answer: 3, why: "General topics contain no PHI." },
          { objective: "O5", q: "Which office task can use a general AI tool?", options: ["Summarizing a patient's visit notes", "A job post for a medical assistant", "Writing a letter that includes a patient's diagnosis", "Coding a specific patient's claim"], answer: 1, why: "It contains no patient information." },
          { objective: "O6", q: "A staff member accidentally pasted a patient's name and condition into a free AI tool. What should the policy say to do?", options: ["Report it to the privacy officer right away", "Hide it", "Delete the computer", "Do nothing"], answer: 0, why: "Prompt reporting lets the practice respond correctly." },
          { objective: "O6", q: "Which is a good AI policy rule?", options: ["PHI can go anywhere", "Any tool is fine", "AI never gives diagnoses or treatment advice to patients", "No one reviews AI content"], answer: 2, why: "Care decisions stay with licensed clinicians." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Healthcare Practices",
    questions: [
      { objective: "O1", q: "PHI stands for:", options: ["Public health insurance", "Protected health information", "Private home inspection", "Primary health index"], answer: 1, why: "It is health information that identifies a patient." },
      { objective: "O1", q: "Which is PHI?", options: ["A general flu-season poster", "Office hours", "Parking directions", "A date of birth with an appointment type"], answer: 3, why: "Identifying details with health information are PHI." },
      { objective: "O1", q: "A BAA is:", options: ["A patient form", "A billing code", "An insurance card", "A contract in which a vendor agrees to protect PHI"], answer: 3, why: "Business associate agreements cover PHI handling." },
      { objective: "O1", q: "Most free, general AI chat tools:", options: ["Are always HIPAA approved", "Do not sign BAAs with individual users", "Are run by HHS", "Delete everything instantly"], answer: 1, why: "Do not assume a general tool is approved for PHI." },
      { objective: "O1", q: "When unsure whether a task can use AI, ask:", options: ["A patient", "The AI tool", "Your privacy or compliance officer", "A social media group"], answer: 2, why: "They decide what is approved." },
      { objective: "O1", q: "Where can staff find official HIPAA guidance?", options: ["hhs.gov", "A random blog", "A chat app", "A news comment"], answer: 0, why: "HHS publishes HIPAA guidance." },
      { objective: "O2", q: "Refill and symptom questions on the phone go to:", options: ["Voicemail forever", "The AI", "Clinical staff", "Billing"], answer: 2, why: "Clinical questions need clinical staff." },
      { objective: "O2", q: "Who approves front-desk scripts that touch care?", options: ["The clinical lead", "The newest hire", "The AI", "A vendor"], answer: 0, why: "Clinical approval keeps scripts safe." },
      { objective: "O2", q: "Triage is done by:", options: ["AI", "Clinical staff", "The front desk alone", "Patients' friends"], answer: 1, why: "Deciding urgency is clinical work." },
      { objective: "O3", q: "Which is a good reminder template?", options: ["The patient's insurance ID", "\"Hi Jane, confirming your HIV follow-up\"", "A chart note", "\"Hi [first name], confirming your appointment on [date] at [time].\""], answer: 3, why: "Placeholders and no visit reason." },
      { objective: "O3", q: "Who fills in real patient details in reminders?", options: ["Your scheduling or messaging system", "The general AI tool", "A volunteer's phone", "Social media"], answer: 0, why: "Real details stay in approved systems." },
      { objective: "O3", q: "AI-translated reminders should be checked by:", options: ["A patient", "Nobody", "The AI again", "A fluent staff member or qualified translator"], answer: 3, why: "Translations can contain mistakes." },
      { objective: "O4", q: "A good reading level for general patient handouts is about:", options: ["Medical school", "College graduate", "6th grade", "No words at all"], answer: 2, why: "Plain language helps more patients understand." },
      { objective: "O4", q: "Every AI handout draft is marked:", options: ["\"Final\"", "\"For clinician review\"", "\"Secret\"", "\"Approved by AI\""], answer: 1, why: "Clinicians must approve health content." },
      { objective: "O4", q: "Patient handouts should include:", options: ["Nothing else", "Other patients' stories with names", "A diagnosis for each reader", "Your contact line and a 911 note for emergencies"], answer: 3, why: "Patients need to know how to get help." },
      { objective: "O5", q: "Which document needs a compliance or HR check?", options: ["A holiday hours sign", "A thank-you note to staff for a party", "A no-show fee policy", "A parking map"], answer: 2, why: "Fees and patient rights can be regulated." },
      { objective: "O5", q: "A staff email about a new phone system:", options: ["Needs no PHI, so general AI can help", "Must include patient names", "Needs a BAA", "Cannot be written"], answer: 0, why: "No patient information is involved." },
      { objective: "O6", q: "An AI policy should list:", options: ["Patients' names", "Approved tools by name", "Staff passwords", "Nothing specific"], answer: 1, why: "Staff need to know which tools are allowed." },
      { objective: "O6", q: "How often should the AI policy be reviewed?", options: ["Never", "At least every year", "Every ten years", "Only after a fine"], answer: 1, why: "Tools and rules change." },
      { objective: "O6", q: "In this course, AI is used for:", options: ["Administrative work and drafts, never diagnosis", "Diagnosing patients", "Prescribing", "Replacing clinicians"], answer: 0, why: "Care decisions stay with licensed clinicians." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      7,
      9,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Sorted task list",
        objective: "O1",
        notYet: "A task that needs PHI is in the \"general AI OK\" column.",
        meets: "Ten tasks sorted correctly into the two columns.",
        exceeds: "Notes which approved BAA tool, if any, the practice uses for the PHI tasks."
      },
      {
        name: "Safe front-desk scripts",
        objective: "O2",
        notYet: "A script gives medical advice or does not route an emergency to 911.",
        meets: "Three scripts that route care questions to clinical staff and emergencies to 911.",
        exceeds: "Marked for clinical lead approval, with a note on who approved them."
      },
      {
        name: "Private reminder templates",
        objective: "O3",
        notYet: "A template has real patient details or reveals the reason for the visit.",
        meets: "Confirmation and reminder templates with placeholders and no visit reason.",
        exceeds: "Also has a reschedule template and a translated version checked by a fluent person."
      },
      {
        name: "Handout for review",
        objective: "O4",
        notYet: "The handout is about a specific patient or is not marked for review.",
        meets: "General topic, plain words, marked \"For clinician review\" with contact line and 911 note.",
        exceeds: "Lists the facts the clinician should check."
      },
      {
        name: "Staff AI policy",
        objective: "O6",
        notYet: "The policy is missing the no-PHI rule or how to report a mistake.",
        meets: "Five to seven rules including no PHI without a BAA, approved tools, reporting and yearly review.",
        exceeds: "Approved by the privacy or compliance officer with a staff training plan."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Practices that adopt a written staff AI policy within 30 days (follow-up survey)",
      "Practices reporting no PHI entered into general AI tools after training",
      "Learners who start another Koach Learn small business course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or phone with internet",
      "A free general AI assistant, used only for tasks with no PHI",
      "Your practice's current policies and common call types, or sample ones",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Use only made-up or sample information in class; never type a real patient's details into an AI tool.",
      "Invite the practice's privacy or compliance officer to the session on the staff AI policy.",
      "Have a licensed clinician review any handouts and care-related scripts before they are used.",
      "Remind learners this course is not legal or compliance advice and points to HHS guidance and their advisor.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
