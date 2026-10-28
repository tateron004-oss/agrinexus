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
  chapters: [
    {
      name: "Chapter 1: HIPAA first, then the front desk",
      lessons: [
        {
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
          youCanNow: "decide whether an office task can use a general AI tool or needs an approved tool with a BAA."
        },
        {
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
          youCanNow: "write front-desk scripts that are kind, clear and route care questions safely."
        },
        {
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
          youCanNow: "create privacy-minded appointment templates with AI help."
        }
      ],
      check: {
        title: "Knowledge Check 1: HIPAA first, then the front desk",
        questions: [
          { q: "Which is protected health information (PHI)?", options: ["Your office parking directions", "A patient's name with their diagnosis", "A general handout on hand washing", "Your office hours"], answer: 1, why: "Health information that identifies a patient is PHI." },
          { q: "Per HHS, a service that keeps PHI for your practice needs:", options: ["A patient's password", "Nothing", "A social media account", "A business associate agreement"], answer: 3, why: "Services handling PHI are business associates and need a BAA." },
          { q: "You want AI to summarize a patient's chart notes. Your practice has no BAA with the tool. What do you do?", options: ["Do not use that tool for it", "Paste the notes in", "Remove only the last name and paste", "Ask a friend"], answer: 0, why: "PHI only goes into approved tools with a BAA." },
          { q: "A caller describes chest pain. The script should:", options: ["Ask AI for a diagnosis", "Book them next week", "Tell them to call 911 or go to the nearest ER", "Put them on hold"], answer: 2, why: "Emergencies go to 911." },
          { q: "What should a text reminder leave out?", options: ["The time", "The date", "The reason for the visit", "The practice phone number"], answer: 2, why: "Minimal reminders protect privacy." }
        ]
      }
    },
    {
      name: "Chapter 2: Patient materials, office work and staff rules",
      lessons: [
        {
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
          youCanNow: "draft plain-language patient handouts with AI and route them for clinician approval."
        },
        {
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
          youCanNow: "use AI for office documents that contain no patient information, with the right checks."
        },
        {
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
          youCanNow: "lead safe AI use in a healthcare practice with clear rules and useful, PHI-free tools."
        }
      ],
      check: {
        title: "Knowledge Check 2: Patient materials, office work and staff rules",
        questions: [
          { q: "Who approves an AI-drafted patient handout?", options: ["A licensed clinician", "The AI", "The front desk alone", "A patient"], answer: 0, why: "Clinicians check health facts." },
          { q: "Which topic is fine for a general AI handout draft?", options: ["A chart note", "Mr. Lee's test results", "A patient's medication list", "How to prepare for a first visit"], answer: 3, why: "General topics contain no PHI." },
          { q: "Which office task can use a general AI tool?", options: ["Summarizing a patient's visit notes", "A job post for a medical assistant", "Writing a letter that includes a patient's diagnosis", "Coding a specific patient's claim"], answer: 1, why: "It contains no patient information." },
          { q: "A staff member accidentally pasted a patient's name and condition into a free AI tool. What should the policy say to do?", options: ["Report it to the privacy officer right away", "Hide it", "Delete the computer", "Do nothing"], answer: 0, why: "Prompt reporting lets the practice respond correctly." },
          { q: "Which is a good AI policy rule?", options: ["PHI can go anywhere", "Any tool is fine", "AI never gives diagnoses or treatment advice to patients", "No one reviews AI content"], answer: 2, why: "Care decisions stay with licensed clinicians." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Healthcare Practices",
    questions: [
      { q: "PHI stands for:", options: ["Public health insurance", "Protected health information", "Private home inspection", "Primary health index"], answer: 1, why: "It is health information that identifies a patient." },
      { q: "Which is PHI?", options: ["A general flu-season poster", "Office hours", "Parking directions", "A date of birth with an appointment type"], answer: 3, why: "Identifying details with health information are PHI." },
      { q: "A BAA is:", options: ["A patient form", "A billing code", "An insurance card", "A contract in which a vendor agrees to protect PHI"], answer: 3, why: "Business associate agreements cover PHI handling." },
      { q: "Most free, general AI chat tools:", options: ["Are always HIPAA approved", "Do not sign BAAs with individual users", "Are run by HHS", "Delete everything instantly"], answer: 1, why: "Do not assume a general tool is approved for PHI." },
      { q: "When unsure whether a task can use AI, ask:", options: ["A patient", "The AI tool", "Your privacy or compliance officer", "A social media group"], answer: 2, why: "They decide what is approved." },
      { q: "Where can staff find official HIPAA guidance?", options: ["hhs.gov", "A random blog", "A chat app", "A news comment"], answer: 0, why: "HHS publishes HIPAA guidance." },
      { q: "Refill and symptom questions on the phone go to:", options: ["Voicemail forever", "The AI", "Clinical staff", "Billing"], answer: 2, why: "Clinical questions need clinical staff." },
      { q: "Who approves front-desk scripts that touch care?", options: ["The clinical lead", "The newest hire", "The AI", "A vendor"], answer: 0, why: "Clinical approval keeps scripts safe." },
      { q: "Triage is done by:", options: ["AI", "Clinical staff", "The front desk alone", "Patients' friends"], answer: 1, why: "Deciding urgency is clinical work." },
      { q: "Which is a good reminder template?", options: ["The patient's insurance ID", "\"Hi Jane, confirming your HIV follow-up\"", "A chart note", "\"Hi [first name], confirming your appointment on [date] at [time].\""], answer: 3, why: "Placeholders and no visit reason." },
      { q: "Who fills in real patient details in reminders?", options: ["Your scheduling or messaging system", "The general AI tool", "A volunteer's phone", "Social media"], answer: 0, why: "Real details stay in approved systems." },
      { q: "AI-translated reminders should be checked by:", options: ["A patient", "Nobody", "The AI again", "A fluent staff member or qualified translator"], answer: 3, why: "Translations can contain mistakes." },
      { q: "A good reading level for general patient handouts is about:", options: ["Medical school", "College graduate", "6th grade", "No words at all"], answer: 2, why: "Plain language helps more patients understand." },
      { q: "Every AI handout draft is marked:", options: ["\"Final\"", "\"For clinician review\"", "\"Secret\"", "\"Approved by AI\""], answer: 1, why: "Clinicians must approve health content." },
      { q: "Patient handouts should include:", options: ["Nothing else", "Other patients' stories with names", "A diagnosis for each reader", "Your contact line and a 911 note for emergencies"], answer: 3, why: "Patients need to know how to get help." },
      { q: "Which document needs a compliance or HR check?", options: ["A holiday hours sign", "A thank-you note to staff for a party", "A no-show fee policy", "A parking map"], answer: 2, why: "Fees and patient rights can be regulated." },
      { q: "A staff email about a new phone system:", options: ["Needs no PHI, so general AI can help", "Must include patient names", "Needs a BAA", "Cannot be written"], answer: 0, why: "No patient information is involved." },
      { q: "An AI policy should list:", options: ["Patients' names", "Approved tools by name", "Staff passwords", "Nothing specific"], answer: 1, why: "Staff need to know which tools are allowed." },
      { q: "How often should the AI policy be reviewed?", options: ["Never", "At least every year", "Every ten years", "Only after a fine"], answer: 1, why: "Tools and rules change." },
      { q: "In this course, AI is used for:", options: ["Administrative work and drafts, never diagnosis", "Diagnosing patients", "Prescribing", "Replacing clinicians"], answer: 0, why: "Care decisions stay with licensed clinicians." }
    ]
  }
};
