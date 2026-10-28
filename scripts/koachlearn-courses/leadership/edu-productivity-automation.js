"use strict";

// Koach Learn course: Leadership Development -> "AI for School and Educational Leaders 6: Productivity and Workflow Automation" (course 6 of 8).
// Shape copied from re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "edu-productivity-automation",
  category: "Leadership Development",
  name: "AI for School and Educational Leaders 6: Productivity and Workflow Automation",
  skills: "Finding your biggest time drains, Drafting newsletters and family messages, Running meetings from agenda to actions, Summarizing survey and form results, Building simple automations, Measuring time saved",
  outcome: "save measurable time on school administration by building three AI-assisted workflows, a weekly family newsletter, a staff meeting from agenda to action list, and a survey-to-summary report, each with a human check and a before-and-after time count.",
  about: [
    "This course is for principals, assistant principals, office managers, department heads, counselors and teachers who carry administrative work. Paperwork and messages take time away from students. This course helps you get some of it back, safely.",
    "Chapter 1 starts with a time audit, then builds AI workflows for communication and meetings. Chapter 2 moves to forms, surveys and simple automations, and ends with a plan to measure the time you save and keep the workflows running.",
    "Use only tools your district has approved, and keep student and staff personal information out of tools that are not approved. Free tools such as Google Forms, Microsoft Forms, Google Docs and Microsoft 365 work for most tasks. A knowledge check closes each chapter and a 20-question quiz closes the course. This is course 6 of 8 in AI for School and Educational Leaders."
  ],
  finalTask: "Build and run three workflows for one week: (1) a weekly family newsletter from bullet notes to a finished, checked draft (with any translations checked by a qualified speaker); (2) a staff meeting from AI-drafted agenda to an action list with owners and dates, sent the same day; (3) a short staff or family survey whose results you summarize with AI using only data with no names. Record minutes spent before and after for each, and the human check you kept in each workflow.",
  chapters: [
    {
      name: "Chapter 1: Getting time back for communication and meetings",
      lessons: [
        {
          title: "A time audit: where does the week go?",
          minutes: 5,
          goal: "Find your three biggest repeatable time drains.",
          text: [
            "Before automating, measure. For one week, jot down repeatable admin tasks and roughly how long each takes: emails, newsletters, meeting prep, notes, forms, reports, schedules, duty rosters.",
            "Circle tasks that are repeated often, follow a similar pattern each time, and do not need private student information to draft. These are your best AI candidates. Tasks that require judgment about a specific student or staff member stay with you.",
            "Pick your top three by time spent. Those are the workflows you will build in this course, and your before-numbers for measuring time saved."
          ],
          steps: ["For a week, list repeatable admin tasks and minutes spent.", "Circle frequent, patterned tasks that need no private student data.", "Keep judgment-about-people tasks with you.", "Pick the top three by time.", "Save the minutes as your before-numbers."],
          words: [["Time audit", "tracking how you spend your time so you can improve it."], ["Workflow", "the steps you follow to get a recurring task done."]],
          slides: [
            { title: "Measure first", bullets: ["One week of repeatable tasks", "Rough minutes for each"] },
            { title: "Good AI candidates", bullets: ["Frequent and patterned", "No private student data needed to draft", "Judgment about people stays with you"] },
            { title: "Pick three", bullets: ["Top three by time", "Their minutes are your before-numbers"] }
          ],
          tryIt: "List at least ten repeatable admin tasks from your week with rough minutes for each. Circle your top three AI candidates.",
          youCanNow: "find the repeatable tasks where AI can save you the most time."
        },
        {
          title: "Newsletters and family messages",
          minutes: 6,
          goal: "Turn bullet notes into a clear family newsletter with a reusable prompt.",
          text: [
            "Keep a running list of bullet notes during the week: events, dates, reminders, celebrations (no student names unless your school's media and directory-information rules allow it). On Friday, paste the bullets with a saved prompt.",
            "A reusable prompt: \"Turn these notes into a warm, clear family newsletter for an elementary school. Plain English, short sections with headings, dates in bold, under 300 words. Do not add any event or fact that is not in my notes.\" Save it so the newsletter looks consistent every week.",
            "Check every date, time and place against the school calendar. For families who read other languages, an AI translation is a draft: have a qualified speaker check it before it goes out, so families get accurate information."
          ],
          steps: ["Keep bullet notes during the week.", "Paste them with your saved newsletter prompt.", "Check every date, time and place.", "Have translations checked by a qualified speaker.", "Send, and save the prompt for next week."],
          words: [["Reusable prompt", "a prompt you save and use every time for the same task."], ["Qualified speaker", "a person fluent enough in a language to check a translation for accuracy."]],
          slides: [
            { title: "Bullets all week", bullets: ["Events, dates, reminders, celebrations", "Follow your rules on student names and photos"] },
            { title: "The saved prompt", bullets: ["Warm, plain English, short sections", "Dates in bold, under 300 words", "\"Add nothing not in my notes\""] },
            { title: "Before it goes out", bullets: ["Check dates, times, places", "Translations checked by a qualified speaker"] }
          ],
          tryIt: "Write bullet notes for a made-up week and use the saved prompt to turn them into a newsletter. Check it against your notes and time how long it took.",
          youCanNow: "produce a consistent, checked family newsletter from weekly notes."
        },
        {
          title: "Meetings: agenda to action list",
          minutes: 5,
          goal: "Use AI to draft an agenda and turn notes into an action list with owners and dates.",
          text: [
            "Before: give AI the meeting purpose, length, attendees by role, and topics. Ask for a timed agenda with the desired outcome for each item (decide, discuss, inform). Send it ahead so people come ready.",
            "After: paste your notes (with personal details about students or staff removed) and ask for decisions, actions as a table with owner and due date, and open questions, with \"write MISSING if an owner or date is not in the notes; add nothing that is not in the notes\".",
            "Check the action list against your memory, fill gaps and send it the same day. If you consider an AI meeting recorder, check your district policy and tell participants first; never record meetings about individual students, such as IEP or discipline meetings, with unapproved tools."
          ],
          steps: ["Draft a timed agenda with outcomes per item.", "Send it ahead.", "After the meeting, paste notes with personal details removed.", "Get decisions, actions (owner, date) and open questions.", "Check, fill gaps and send the same day."],
          words: [["Agenda", "the list of topics and timings for a meeting."], ["Action list", "tasks agreed in a meeting, each with an owner and a due date."]],
          slides: [
            { title: "Before the meeting", bullets: ["Purpose, length, roles, topics", "Timed agenda", "Outcome per item: decide, discuss, inform"] },
            { title: "After the meeting", bullets: ["Paste notes without personal details", "Decisions, actions, open questions", "MISSING for gaps; add nothing"] },
            { title: "Recorders", bullets: ["Check policy; tell participants", "Never for IEP or discipline meetings in unapproved tools"] }
          ],
          tryIt: "Use AI to draft a timed agenda for your next staff or team meeting. After it, turn your notes into an action list and send it the same day. Time both steps.",
          youCanNow: "run meetings from a clear agenda to a same-day action list with AI's help."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting time back for communication and meetings",
        questions: [
          { q: "Which task is the best AI candidate?", options: ["Deciding a student's discipline", "Writing a specific student's IEP", "A weekly newsletter that follows the same pattern", "Choosing which teacher to evaluate"], answer: 2, why: "Frequent, patterned tasks without private data suit AI." },
          { q: "Why add \"Do not add anything not in my notes\" to the newsletter prompt?", options: ["It stops AI from inventing events or facts", "It makes it longer", "It translates it", "It adds photos"], answer: 0, why: "AI can fill gaps with made-up details." },
          { q: "An AI translation of the newsletter should be:", options: ["Sent immediately", "Sent only to staff", "Skipped", "Checked by a qualified speaker first"], answer: 3, why: "Families deserve accurate information." },
          { q: "Which meeting should never be recorded with an unapproved AI tool?", options: ["A general planning meeting", "An IEP meeting about a student", "A book club", "A fire drill debrief"], answer: 1, why: "Student-specific meetings involve protected information." },
          { q: "When should the action list be sent?", options: ["Next month", "Only if asked", "Never", "The same day"], answer: 3, why: "Same-day action lists keep momentum." }
        ]
      }
    },
    {
      name: "Chapter 2: Forms, automations and measuring the gain",
      lessons: [
        {
          title: "Surveys and forms: from responses to a summary",
          minutes: 6,
          goal: "Summarize survey results with AI without exposing personal information.",
          text: [
            "Google Forms and Microsoft Forms collect responses into a spreadsheet. AI can then help you see themes in open comments and write a short summary for staff or families.",
            "Protect people first. Design surveys that do not collect names unless you truly need them. Before pasting responses into an AI tool, delete names, emails and any comment that identifies a student or staff member. Use only approved tools for anything containing student information.",
            "Prompt: \"Here are anonymous survey comments from families about pickup times. Group them into themes, count how many fit each theme, quote two short typical comments per theme, and list three suggestions. Do not invent comments.\" Then check the counts yourself against the spreadsheet; AI often miscounts."
          ],
          steps: ["Design surveys without names unless needed.", "Remove names, emails and identifying comments before using AI.", "Use approved tools for anything with student information.", "Ask for themes, counts, typical quotes and suggestions.", "Check the counts yourself."],
          words: [["Anonymous", "without names or details that show who someone is."], ["Theme", "a common idea that appears in many responses."]],
          slides: [
            { title: "Forms to spreadsheet to summary", bullets: ["Google Forms or Microsoft Forms", "AI finds themes in comments"] },
            { title: "Protect people first", bullets: ["Do not collect names unless needed", "Remove identifying details before AI", "Approved tools for student information"] },
            { title: "Ask, then check", bullets: ["Themes, counts, typical quotes, suggestions", "\"Do not invent comments\"", "Check counts yourself: AI miscounts"] }
          ],
          tryIt: "Create a three-question anonymous survey in Google Forms or Microsoft Forms. Write ten made-up responses, summarize them with AI, and check the counts against the responses.",
          youCanNow: "turn survey responses into an accurate summary without exposing personal information."
        },
        {
          title: "Simple automations: templates, rules and triggers",
          minutes: 5,
          goal: "Set up one simple automation and keep a human check in it.",
          text: [
            "Not everything needs AI. Many time savers are simple automations: email templates for common replies, email rules that sort messages into folders, document templates for recurring reports, mail merge for personalized letters, and calendar reminders.",
            "Bigger automations connect steps: when a form is submitted, add a row to a sheet and send a confirmation; every Friday, remind staff to submit notes. Microsoft Power Automate and Google Apps Script can do this; ask your technology team what is allowed in your district before building anything that touches school data.",
            "Keep a human check wherever an automation sends something to families or makes a change that matters. A small mistake repeated automatically to 500 families is a big mistake."
          ],
          steps: ["Start simple: templates, rules, reminders.", "Pick one repeated task to automate.", "Check with your technology team before connecting school data.", "Add a human check before anything goes to families.", "Test with yourself as the only recipient first."],
          words: [["Automation", "a set-up that does a task automatically when something happens."], ["Trigger", "the event that starts an automation, like a form being submitted."], ["Mail merge", "making many personalized letters or emails from one template and a list."]],
          slides: [
            { title: "Simple time savers", bullets: ["Email templates and sorting rules", "Document templates", "Mail merge and reminders"] },
            { title: "Connected steps", bullets: ["Form submitted, row added, confirmation sent", "Power Automate or Apps Script", "Ask your tech team first"] },
            { title: "Keep a human check", bullets: ["Before anything goes to families", "Test with yourself first", "Mistakes multiply automatically"] }
          ],
          tryIt: "Set up one simple automation: an email template for a common reply, or a rule that sorts a type of message. Test it on yourself and write where the human check is.",
          youCanNow: "set up simple automations safely, with a human check where it matters."
        },
        {
          title: "Measuring time saved and keeping it going",
          minutes: 6,
          goal: "Measure before-and-after time and make your workflows last.",
          text: [
            "You saved time only if the numbers say so. For each workflow, compare minutes before (from your time audit) and after, including checking time. If a workflow takes as long because of fixing, change the prompt or drop the workflow.",
            "Write each workflow on one page: the purpose, the saved prompt or template, the steps, the human check, and who does it. Then someone else can run it when you are out, and new staff can learn it.",
            "Share wins with staff and invite their workflows. A shared folder of school prompts and templates multiplies the time saved across the building. Review it each term so prompts stay accurate as calendars, tools and policies change."
          ],
          steps: ["Compare minutes before and after, including checking.", "Fix or drop workflows that do not save time.", "Write each workflow on one page.", "Share in a school prompt and template folder.", "Review every term."],
          words: [["Before-and-after", "comparing a measure before and after a change."], ["Documentation", "written steps so others can repeat a process."]],
          slides: [
            { title: "Count the minutes", bullets: ["Before vs after", "Include checking time", "No gain? Fix or drop it"] },
            { title: "One page per workflow", bullets: ["Purpose, prompt, steps", "Human check and owner", "Others can run it"] },
            { title: "Spread the gain", bullets: ["Shared prompt and template folder", "Invite staff workflows", "Review every term"] }
          ],
          tryIt: "Final task: run your three workflows for one week (newsletter, meeting agenda to actions, survey to summary). Record before and after minutes for each, write each on one page with its human check, and put them in a shared folder.",
          youCanNow: "build, measure and share AI-assisted admin workflows that give time back to students."
        }
      ],
      check: {
        title: "Knowledge Check 2: Forms, automations and measuring the gain",
        questions: [
          { q: "Before pasting survey comments into an AI tool, you should:", options: ["Add names for context", "Add student IDs", "Remove names, emails and identifying comments", "Do nothing"], answer: 2, why: "Remove identifying details to protect people." },
          { q: "AI says 40 families mentioned traffic. You should:", options: ["Check the count against the spreadsheet", "Publish it", "Double it", "Ignore the theme"], answer: 0, why: "AI often miscounts." },
          { q: "Before building an automation that touches school data, ask:", options: ["A student", "Your technology team what is allowed", "The vendor's ad", "No one"], answer: 1, why: "Districts set rules for connecting school data." },
          { q: "Why test an automation with yourself as the only recipient first?", options: ["To catch mistakes before they reach many people", "It is faster", "It is required by law", "To save paper"], answer: 0, why: "Mistakes multiply when automated." },
          { q: "A workflow takes as long as before because of fixing AI errors. You should:", options: ["Keep it anyway", "Add more steps", "Stop checking", "Change the prompt or drop the workflow"], answer: 3, why: "Only real time savings count." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for School and Educational Leaders 6: Productivity and Workflow Automation",
    questions: [
      { q: "A time audit:", options: ["Checks the school clocks", "Tracks how you spend time on tasks", "Is a financial audit", "Grades teachers"], answer: 1, why: "Measure before you improve." },
      { q: "Tasks that require judgment about a specific student should:", options: ["Be automated", "Go to AI", "Stay with you", "Be skipped"], answer: 2, why: "Decisions about people stay with people." },
      { q: "Before-numbers are:", options: ["Test scores", "Phone numbers", "Minutes spent before automating", "Budget lines"], answer: 2, why: "They let you measure time saved." },
      { q: "A newsletter prompt should be:", options: ["Saved and reused each week", "Rewritten from scratch each time", "Secret", "Long and vague"], answer: 0, why: "Saved prompts keep it consistent." },
      { q: "Before sending the newsletter, check:", options: ["The font", "Only the title", "Nothing", "Every date, time and place"], answer: 3, why: "Wrong dates cause real problems for families." },
      { q: "Student names in newsletters should follow:", options: ["Whatever AI suggests", "Your school's media and directory-information rules", "No rules", "Social media trends"], answer: 1, why: "Schools have rules about sharing student information." },
      { q: "A timed agenda gives each item:", options: ["Nothing", "A price", "A password", "A time and a desired outcome"], answer: 3, why: "Outcomes keep meetings focused." },
      { q: "An action list includes:", options: ["Gossip", "Only the topic", "Task, owner and due date", "Salaries"], answer: 2, why: "Clear ownership gets things done." },
      { q: "If the notes do not name an owner, the AI should write:", options: ["MISSING", "A guess", "Your name", "Nothing"], answer: 0, why: "Flagging gaps avoids invented owners." },
      { q: "AI meeting recorders require:", options: ["Secret use", "Checking policy and telling participants", "No checks", "Student consent only"], answer: 1, why: "Recording raises consent and privacy issues." },
      { q: "Google Forms and Microsoft Forms collect responses into:", options: ["A spreadsheet", "A video", "A printer", "A chatbot"], answer: 0, why: "Responses land in a sheet you can analyze." },
      { q: "An anonymous survey:", options: ["Has no questions", "Collects everyone's address", "Is illegal", "Does not collect names or identifying details"], answer: 3, why: "Anonymity protects respondents." },
      { q: "Asking AI to \"quote two typical comments per theme\" helps you:", options: ["Invent comments", "Show real voices behind each theme", "Hide results", "Save paper"], answer: 1, why: "Quotes make summaries concrete; still check them." },
      { q: "Which is a simple automation?", options: ["A staff meeting", "A new building", "An email rule that sorts messages into folders", "A field trip"], answer: 2, why: "Rules and templates save time with no AI." },
      { q: "Mail merge makes:", options: ["A spreadsheet chart", "One long letter", "Many personalized letters from one template and a list", "A survey"], answer: 2, why: "It personalizes at scale." },
      { q: "A trigger is:", options: ["The event that starts an automation", "A school bell", "A password", "A grade"], answer: 0, why: "Like a form being submitted." },
      { q: "Where should a human check go?", options: ["At the end of the year", "Nowhere", "Only after complaints", "Before anything is sent to families"], answer: 3, why: "Errors to families multiply fast." },
      { q: "Time saved should include:", options: ["Only drafting time", "The time spent checking and fixing", "Nothing", "Other people's time only"], answer: 1, why: "Checking time is part of the real cost." },
      { q: "Writing each workflow on one page lets:", options: ["It be deleted", "No one see it", "AI grade it", "Others run it when you are out"], answer: 3, why: "Documentation keeps workflows alive." },
      { q: "A shared school prompt folder should be reviewed:", options: ["Every ten years", "Never", "Every term", "Only by students"], answer: 2, why: "Calendars, tools and policies change." }
    ]
  }
};
