"use strict";

// Koach Learn course: Re-Entry -> "Clearing Your Record: Expungement and Record Relief" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Skill-building: by the end the student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course.
// Facts checked 28 Oct 2026 on oag.ca.gov (record review, automatic record relief), selfhelp.courts.ca.gov (clean your record, legal help), calcivilrights.ca.gov (Fair Chance Act fact sheet, June 2025)
// and justice.gov/pardon. fbi.gov blocked the fetch, so the FBI lesson text tells students to check fbi.gov for the current steps and fee.

module.exports = {
  id: "reentry-clearing-record",
  category: "Re-Entry",
  name: "Clearing Your Record: Expungement and Record Relief",
  skills: "Getting a copy of your record, Understanding record relief words, Finding free legal help, Preparing a record-relief file, Using fair-chance hiring rights",
  outcome: "get a copy of your criminal record, name the kinds of record relief that might fit your cases, find free legal help, and put together the papers you need to file for relief with that help.",
  about: [
    "A record can follow you to job interviews, apartment applications and school. In many states, including California, the law gives people ways to clean up a record or limit who can see it. Many people who qualify never apply, because nobody showed them how.",
    "This course shows you how to get a copy of your own record, what words like expungement, dismissal, sealing and certificate of rehabilitation mean, how federal and state records differ, where to find free legal help, how to prepare your papers, and what California's Fair Chance Act says about job offers. The examples use California, and each lesson tells you where to check the rules in your own state.",
    "This is not legal advice. Laws are different in every state and they change. Use this course to get ready, then get help from a lawyer, legal aid office or court self-help center before you file anything.",
    "Each lesson takes about five minutes and ends with a task you do right away. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a one-page record-relief action plan: where you will get your record, each case you know about (county, year, charge) and the kind of relief that might fit it, the free legal help you will contact first, the papers you will gather, and a short, honest rehabilitation statement you could give an employer after a job offer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults with a criminal record, many coming home from prison, whose record is getting in the way of jobs, housing or school. Examples use California, with pointers to check rules in other states.",
    startingPoint: "Know some of their cases from memory. Most have never seen their own official record, do not know the record relief words, and do not know where free legal help is.",
    gap: "Many people who qualify for record relief never apply because nobody showed them how. Learners need to get their record, name the relief that might fit, find free legal help and prepare their papers, so a lawyer or clinic can file for them and they can speak up for their rights in hiring.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 6)",
      "Devices: a smartphone or library computer with internet",
      "Time: about 5-minute lessons that fit around work and appointments",
      "Not legal advice: laws differ by state and change; learners get help from a lawyer, legal aid or court self-help center before filing",
      "Privacy: case details stay out of AI tools and shared computers"
    ],
    prerequisites: "None. \"Introduction to AI and Digital Confidence\" helps learners who are new to finding official websites."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using your state's official website", action: "request a copy of your own criminal record and find where to get federal and court records", standard: "writing down the form name, fee, fee waiver and nearest fingerprint site" },
    { id: "O2", condition: "Given the record relief words", action: "explain the difference between expungement, sealing, set-aside or dismissal, a certificate of rehabilitation and a pardon", standard: "with one plain, correct sentence for each" },
    { id: "O3", condition: "Given your list of cases", action: "identify whether each case is federal or state and check whether automatic relief may apply", standard: "with every case labeled and a plan to check your newest record" },
    { id: "O4", condition: "Using official and nonprofit sources", action: "find two free places that help with record relief and prepare questions for the first call", standard: "with name, phone, hours and three questions for each, and no paid service that guarantees results" },
    { id: "O5", condition: "Given your cases and proof of your life now", action: "build a record-relief folder a lawyer or clinic can use", standard: "with each case's county, year and charge and a checklist of proof still needed" },
    { id: "O6", condition: "Using California's Fair Chance Act", action: "explain when an employer can check your record and write a short rehabilitation statement", standard: "with a statement that is honest, short and says what you have done since" }
  ],
  chapters: [
    {
      name: "Chapter 1: Know your record and your options",
      lessons: [
        {
          objectives: ["O1"],
          title: "Getting a copy of your own record",
          minutes: 5,
          goal: "Request a copy of your state criminal record and know where to find your federal and court records.",
          text: [
            "You cannot fix what you cannot see. Before you apply for any record relief, get a copy of your own record. It shows each arrest and case, the county, the dates and how each case ended. Records often have mistakes or missing outcomes.",
            "In California, the Department of Justice (DOJ) runs a Record Review. If you live in California, you fill out form BCIA 8016RR, mark Record Review as the type of application, and take it to a Live Scan site to be fingerprinted. DOJ charges a $25 processing fee (a fee waiver is available), and the Live Scan site charges its own fee. If you live outside California, you mail form BCIA 8705 with a fingerprint card. Check oag.ca.gov for the current form and fee.",
            "Your record may live in more than one place. A state record covers state cases. The FBI keeps a national record called an Identity History Summary; check fbi.gov for how to request it and the current fee. Each county court also keeps its own case files, which you can ask for at the clerk's office.",
            "If you find a mistake on your California record, DOJ sends a form called BCIA 8706, the Claim of Alleged Inaccuracy or Incompleteness, with your record. You mail it back with proof."
          ],
          steps: ["Choose which record you need first: usually your state record.", "In California, fill out BCIA 8016RR and mark Record Review.", "Get fingerprinted at a Live Scan site and pay the fees, or ask about the fee waiver.", "When the record arrives, list each case: county, case number if shown, date, charge and outcome.", "Mark anything that looks wrong or missing, and keep the record in a safe folder."],
          words: [["Criminal record", "the official list of your arrests and court cases kept by the state or the FBI."], ["Live Scan", "a machine that takes your fingerprints digitally and sends them to the state."], ["Record Review", "the California DOJ service that lets you see your own state record."], ["Disposition", "how a case ended, for example dismissed, convicted or acquitted."]],
          slides: [
            { title: "See your record first", bullets: ["You cannot fix what you cannot see", "Records often have mistakes or missing outcomes"] },
            { title: "California Record Review", bullets: ["Form BCIA 8016RR, mark Record Review", "Fingerprints at a Live Scan site", "$25 DOJ fee, fee waiver available; check oag.ca.gov"] },
            { title: "Other places your record lives", bullets: ["FBI Identity History Summary: check fbi.gov", "County court files: ask the clerk"] },
            { title: "Found a mistake?", bullets: ["California sends form BCIA 8706 with your record", "Mail it back with proof"] }
          ],
          sources: [
            { name: "California DOJ: Record Review (request your own record)", url: "https://oag.ca.gov/fingerprints/record-review" },
            { name: "California DOJ: Apply for a fee waiver", url: "https://oag.ca.gov/fingerprints/record-review/fee-waiver" },
            { name: "FBI: Identity History Summary checks", url: "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks" }
          ],
          tryIt: "Find the official page where your state lets you request your own record (in California, oag.ca.gov Record Review). Write down the form name, the fee, whether there is a fee waiver, and the nearest place to get fingerprinted.",
          youCanNow: "request a copy of your state record, say where your FBI and court records are kept, and spot mistakes to challenge.",
          quickCheck: [
            { objective: "O1", q: "In California, what do you need to do to see your own state record?", options: ["Call the police station", "Fill out the DOJ Record Review form and get fingerprinted at a Live Scan site", "Ask an AI assistant to look it up", "Pay a background-check website"], answer: 1, why: "California's DOJ Record Review uses a form and Live Scan fingerprints." },
            { objective: "O1", q: "You get your record and see a case that is not yours. What would you do?", options: ["Ignore it", "Ask AI to delete it", "Wait until an employer asks", "Challenge it with the official form for mistakes"], answer: 3, why: "Getting your record lets you catch mistakes and challenge them officially." }
          ]
        },
        {
          objectives: ["O2"],
          title: "What the record relief words mean",
          minutes: 5,
          goal: "Explain the difference between expungement, dismissal, sealing, set-aside, a certificate of rehabilitation and a pardon.",
          text: [
            "People say expungement for almost any way of cleaning a record, but the real words and what they do are different in every state. Knowing the words helps you ask the right questions.",
            "Expungement usually means the record is erased or destroyed. Sealing means the record still exists but most people, such as many employers and landlords, cannot see it. A set-aside or dismissal means the court reopens a conviction and dismisses it, so in most cases you no longer have to say you were convicted. California's courts say true expungement does not exist in California; what people call expungement there is usually a dismissal.",
            "A certificate of rehabilitation is a court order saying you have lived a law-abiding life since your sentence. In some states it can help with licenses or be a step toward a pardon. A pardon is forgiveness from a governor (for state crimes) or the President (for federal crimes).",
            "None of these always wipes a record clean for every purpose. Some government jobs, licenses, firearms rules and immigration still look at old cases. A lawyer can tell you what each option does for you."
          ],
          words: [["Expungement", "erasing or destroying a record; in many places the word is used loosely for any record clean-up."], ["Sealing", "the record still exists but most of the public cannot see it."], ["Set-aside or dismissal", "a court reopens a conviction and dismisses it."], ["Certificate of rehabilitation", "a court order saying you have lived a law-abiding life since your sentence."], ["Pardon", "official forgiveness from a governor or the President."]],
          slides: [
            { title: "Same goal, different words", bullets: ["Each state uses its own words", "Knowing them helps you ask the right questions"] },
            { title: "Erase, hide or dismiss", bullets: ["Expungement: record erased", "Sealing: record hidden from most people", "Set-aside or dismissal: conviction dismissed by the court"] },
            { title: "Other kinds of relief", bullets: ["Certificate of rehabilitation: court says you have changed", "Pardon: forgiveness from a governor or the President"] },
            { title: "Limits", bullets: ["California: true expungement does not exist", "Some jobs, licenses and immigration still see old cases", "Ask a lawyer what each option does for you"] }
          ],
          sources: [
            { name: "California Courts Self-Help Guide: Clean your record", url: "https://selfhelp.courts.ca.gov/clean-your-record" }
          ],
          tryIt: "Make a small chart with five rows: expungement, sealing, set-aside or dismissal, certificate of rehabilitation, pardon. Next to each, write one plain sentence about what it does. Then write one question about your own case to ask a lawyer.",
          youCanNow: "explain the main kinds of record relief in plain words and say why you still ask a lawyer what each one does for you.",
          quickCheck: [
            { objective: "O2", q: "What does sealing a record usually do?", options: ["Keeps the record but hides it from most people", "Destroys every copy forever", "Turns a felony into a ticket", "Gives you a pardon"], answer: 0, why: "A sealed record still exists, but most people cannot see it." },
            { objective: "O2", q: "You are not sure which relief fits your case. What would you do?", options: ["Pick the one with the nicest name", "File for all of them at once", "Write down your question and ask a lawyer or legal aid", "Ask a friend who had a different case"], answer: 2, why: "A lawyer or legal aid can tell which relief fits your own case." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Federal, state and California Clean Slate",
          minutes: 5,
          goal: "Tell whether each of your cases is federal or state and check whether California's automatic relief may already apply.",
          text: [
            "Each case belongs to the system that charged it. A state case went through a county court and is handled under that state's laws. A federal case went through a United States District Court. State relief cannot clear a federal conviction, and federal relief does not clear state convictions.",
            "Relief for federal convictions is very limited. The main path is a presidential pardon. The US Department of Justice's Office of the Pardon Attorney takes pardon applications from people with federal convictions who have finished their sentence.",
            "California has Clean Slate laws. Every month the California DOJ checks its records, marks eligible arrests and convictions as receiving relief, and tells the courts. You do not have to file anything for this automatic relief, and DOJ does not tell you when it happens. A 2022 law, SB 731, added many more felonies starting in 2024.",
            "Automatic relief limits who can see a case, but it does not dismiss, seal or erase it. Some employers who use fingerprint checks, such as police and schools, may still see it. To know if you got it, request your own record. For dismissal, sealing or a reduced charge, you still file with the court."
          ],
          steps: ["For each case on your record, write the court: a county court means state, a US District Court means federal.", "For federal cases, look at the Office of the Pardon Attorney's page.", "In California, check your new DOJ record for a note that relief was granted.", "List the cases that still need a court petition."],
          words: [["Federal case", "a case charged by the US government and heard in a US District Court."], ["State case", "a case charged under state law and heard in a county court."], ["Clean Slate", "laws that give some record relief automatically, without a petition."], ["Petition", "a written request you file asking a court to do something."]],
          slides: [
            { title: "Federal or state?", bullets: ["County court = state case", "US District Court = federal case", "Each system clears only its own cases"] },
            { title: "Federal convictions", bullets: ["Relief is very limited", "Main path: presidential pardon", "Office of the Pardon Attorney, justice.gov/pardon"] },
            { title: "California Clean Slate", bullets: ["DOJ reviews records every month", "No petition needed; DOJ does not tell you", "SB 731 added more felonies starting in 2024"] },
            { title: "What automatic relief does not do", bullets: ["It does not dismiss, seal or erase", "Some fingerprint checks can still see it", "Dismissal or sealing still needs a court petition"] }
          ],
          sources: [
            { name: "California DOJ: Automatic record relief (Penal Code 851.93 and 1203.425)", url: "https://oag.ca.gov/fingerprints/automatic-record-relief-penal-code-sections-851.93-and-1203.425" },
            { name: "US DOJ Office of the Pardon Attorney: Apply for clemency", url: "https://www.justice.gov/pardon/apply-clemency" }
          ],
          tryIt: "Using your record or what you remember, list each case and write state or federal next to it. If you live in California, write down whether your newest DOJ record shows automatic relief for any case, or plan to request it to find out.",
          youCanNow: "sort your cases into federal and state, explain what California's automatic relief does and does not do, and list which cases still need a petition.",
          quickCheck: [
            { objective: "O3", q: "Your case was heard in a county superior court. What kind of case is it?", options: ["A federal case", "A state case", "A military case", "A civil case only"], answer: 1, why: "County superior courts hear state cases." },
            { objective: "O3", q: "You live in California and think automatic relief may apply to an old case. What would you do?", options: ["Assume it was cleared", "File a federal petition", "Ask an employer to check", "Request your newest DOJ record and look for the relief note"], answer: 3, why: "Your newest DOJ record shows whether automatic relief was applied." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Know your record and your options",
        questions: [
          { objective: "O1", q: "What is the best first step before applying for record relief?", options: ["Tell every employer you have no record", "Get a copy of your own record", "Pay a website to erase your record", "Wait for the court to call you"], answer: 1, why: "Your record shows each case and outcome, so you know what to fix and can spot mistakes." },
          { objective: "O1", q: "In California, how do you see your own state record?", options: ["Ask a friend at the courthouse", "Search your name on social media", "Call 911", "Fill out the DOJ Record Review form and get fingerprinted at a Live Scan site"], answer: 3, why: "California's DOJ Record Review uses form BCIA 8016RR and Live Scan fingerprints." },
          { objective: "O2", q: "Which option keeps the record but hides it from most people?", options: ["Sealing", "A traffic ticket", "Probation", "A warrant"], answer: 0, why: "Sealing means the record still exists but most of the public cannot see it." },
          { objective: "O3", q: "Your only conviction is from a US District Court. Which path is most likely?", options: ["A California dismissal", "A county Clean Slate program", "A presidential pardon", "A school transcript change"], answer: 2, why: "A US District Court case is federal, and state relief cannot clear it; the main path is a presidential pardon." },
          { objective: "O3", q: "What is true about California's automatic record relief?", options: ["It erases the case completely", "You must file a petition to get it", "DOJ calls you when it is done", "It limits who can see a case but does not dismiss it"], answer: 3, why: "Automatic relief adds a note that limits disclosure; the case is not dismissed or erased." }
        ]
      }
    },
    {
      name: "Chapter 2: Get help, prepare and use your rights",
      lessons: [
        {
          objectives: ["O4"],
          title: "Finding free legal help",
          minutes: 5,
          goal: "Find two free places that can help you with record relief and prepare for the first call.",
          text: [
            "Record relief laws are complicated, and a mistake can cost you months. The good news: a lot of help is free. California's court self-help guide has a Get started form that asks a few questions and gives instructions for your situation, plus a legal help page.",
            "Places that often help for free include court self-help centers, legal aid offices, public defender offices (about 19 California counties have record-cleaning programs), law school clinics, reentry organizations, and one-day clean slate clinics. In California, the Clear My Record service connects people to legal help in some counties.",
            "If you are not a US citizen, talk to an immigration lawyer before you file anything. Court actions can affect immigration status, and some relief does not count for immigration.",
            "Be careful of anyone who promises to erase your record for a big fee, guarantees a result, or asks for payment before telling you what they will do. Real help explains your options first."
          ],
          steps: ["Go to your state court's self-help website (in California, selfhelp.courts.ca.gov, Clean your record).", "Find two free helpers: a self-help center, legal aid, public defender program or clean slate clinic.", "Write down their phone number, hours and what they ask you to bring.", "Prepare three questions before you call.", "If you are not a citizen, contact an immigration lawyer first."],
          words: [["Legal aid", "free legal help for people with low incomes."], ["Public defender", "a government lawyer for people who cannot pay; many also run record-clearing programs."], ["Clean slate clinic", "an event where volunteer lawyers help people fill out record relief papers, usually for free."]],
          slides: [
            { title: "You do not have to do this alone", bullets: ["Laws are complicated; mistakes cost time", "A lot of help is free"] },
            { title: "Free places to ask", bullets: ["Court self-help centers and legal aid", "Public defender record-clearing programs", "Law school clinics and clean slate clinics"] },
            { title: "Not a US citizen?", bullets: ["Talk to an immigration lawyer first", "Some relief does not count for immigration"] },
            { title: "Warning signs", bullets: ["Big fees to erase your record", "Guaranteed results", "Pay first, explain later"] }
          ],
          sources: [
            { name: "California Courts Self-Help Guide: Clean your record", url: "https://selfhelp.courts.ca.gov/clean-your-record" },
            { name: "California Courts Self-Help Guide: Legal help to clean your record", url: "https://selfhelp.courts.ca.gov/clean-your-record/legal-help" }
          ],
          tryIt: "Find two free legal helpers near you for record relief. For each, write the name, phone number, hours and what to bring. Then write three questions you will ask, such as: Which of my cases can be cleared? Which kind of relief fits? How long will it take?",
          youCanNow: "find free legal help for record relief, prepare for the first call and spot paid offers that are warning signs.",
          quickCheck: [
            { objective: "O4", q: "Which is a free place to look for record relief help?", options: ["A website that guarantees results for a big fee", "A court self-help center", "A stranger on social media", "A bail bond office"], answer: 1, why: "Court self-help centers offer free help with court forms." },
            { objective: "O4", q: "Someone promises to clear your record for sure if you pay $1,000 today. What would you do?", options: ["Walk away and contact free legal help instead", "Pay half now", "Pay with a gift card", "Give them your case details to check"], answer: 0, why: "Guarantees and big up-front fees are warning signs." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Preparing and filing with help",
          minutes: 6,
          goal: "Build a record-relief folder that a lawyer or clinic can use to file for you.",
          text: [
            "Lawyers and clinics can help you much faster when you arrive organized. Build one folder, paper or digital, with everything about your cases.",
            "Put in: a copy of your record; a list of each case with the county, case number, year and charge; proof you finished probation, parole or programs; proof of paid fines, fees and restitution, or what is still owed; and proof of your life now, such as job letters, certificates, classes, treatment, volunteer work and letters of support.",
            "Your helper will choose the right forms, file them with the right court and tell you whether there is a hearing. Ask them to explain each form before you sign. Keep copies of everything you file and write down every date.",
            "After the court grants relief, ask for a copy of the order. A few months later, request your record again to make sure it was updated. If it was not, contact your helper or the court clerk."
          ],
          steps: ["Start one folder for your record relief.", "Add your record and a list of each case: county, case number, year, charge.", "Add proof of finished probation, parole and programs, and of fines paid or owed.", "Add proof of your life now: work, school, treatment, volunteering, support letters.", "Take the folder to your helper; keep copies of everything filed and all dates.", "After relief is granted, keep the order and check your record again later."],
          words: [["Case number", "the number a court gives each case; it helps find the file fast."], ["Restitution", "money a court orders you to pay to the victim of a crime."], ["Hearing", "a meeting in court where a judge listens and decides."], ["Order", "the judge's written decision."]],
          slides: [
            { title: "Arrive organized", bullets: ["One folder, paper or digital", "Helpers work faster with your papers ready"] },
            { title: "What goes in the folder", bullets: ["Your record and a list of every case", "Proof probation, parole and programs are done", "Fines and restitution: paid or still owed"] },
            { title: "Proof of your life now", bullets: ["Job letters and pay stubs", "Certificates, classes, treatment", "Volunteer work and support letters"] },
            { title: "After you file", bullets: ["Keep copies and write down every date", "Get a copy of the judge's order", "Check your record again a few months later"] }
          ],
          tryIt: "Start your record-relief folder today. Write the list of cases you know about (county, year, charge) and a checklist of the proof you still need to collect. Put a star next to the first two papers you will get this week.",
          youCanNow: "build a record-relief folder, work with a helper to file, and check afterward that your record was updated.",
          quickCheck: [
            { objective: "O5", q: "What is a case number?", options: ["Your Social Security number", "Your prison ID", "The number a court gives each case", "Your phone number"], answer: 2, why: "Each court case has its own case number." },
            { objective: "O5", q: "The court granted your relief. What would you do later?", options: ["Never think about it again", "Request your record again to make sure it was updated", "Tell employers you have no record without checking", "Throw away your folder"], answer: 1, why: "Checking your record again makes sure the relief shows up." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fair-chance hiring and your rights",
          minutes: 6,
          goal: "Explain California's Fair Chance Act and prepare a short rehabilitation statement for an employer.",
          text: [
            "California's Fair Chance Act covers public employers and private employers with five or more employees, with some exceptions such as jobs where a law requires a background check. Most covered employers cannot ask about your conviction history on an application, run a background check, or post ads saying No Felons, before they offer you a job.",
            "After a conditional job offer, they may run a check, but they can never use arrests that did not lead to a conviction (with limited exceptions), convictions that were sealed, dismissed or expunged, cases cleared after diversion, or, in most cases, convictions more than seven years old. They cannot reject you just for having a record. They must look at your situation and the job.",
            "If they want to take back the offer, they must tell you in writing, give you a copy of the report and list the convictions, and give you at least five business days to respond with evidence of rehabilitation, or to show a mistake on the report. If you think an employer broke the law, you can contact the California Civil Rights Department. Other states and cities have their own rules, often called ban the box; check yours.",
            "Prepare a short, honest statement now: what happened in one sentence, what you have done since, and why you are ready for this job. Gather proof, such as certificates, finished programs, support letters and a bonding letter if you have one."
          ],
          steps: ["Check whether your state or city has a fair-chance or ban-the-box law.", "Write one sentence about what happened, without excuses.", "Write two or three sentences about what you have done since.", "End with why you are ready for this job.", "Gather proof and keep it with your statement."],
          words: [["Fair Chance Act", "California's law limiting when and how employers can look at conviction history."], ["Conditional job offer", "a job offer that depends on something, such as a background check."], ["Ban the box", "laws that remove the criminal record question from job applications."], ["Evidence of rehabilitation", "proof of how your life has changed, such as programs finished and support letters."]],
          slides: [
            { title: "Before a job offer (California)", bullets: ["Applies to employers with 5 or more employees", "No conviction questions on the application", "No background check before an offer"] },
            { title: "After a conditional offer", bullets: ["Arrests without conviction: off limits (limited exceptions)", "Sealed, dismissed or expunged cases: off limits", "Most convictions older than 7 years: off limits"] },
            { title: "If they want to take back the offer", bullets: ["Written notice with the report and convictions listed", "At least 5 business days for you to respond", "Questions: California Civil Rights Department"] },
            { title: "Your rehabilitation statement", bullets: ["One sentence: what happened", "Two or three: what you have done since", "Close: why you are ready for this job"] }
          ],
          sources: [
            { name: "California Civil Rights Department: Fair Chance Act", url: "https://calcivilrights.ca.gov/fair-chance-act/" },
            { name: "California Civil Rights Department: Criminal History and Employment fact sheet (June 2025)", url: "https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2025/07/Fair-Chance-Act-Factsheet_English.pdf" }
          ],
          tryIt: "Final task: make your one-page record-relief action plan. Include where you will get your record, each case and the relief that might fit it, the free legal help you will contact first, the papers you will gather, and your short rehabilitation statement for employers.",
          youCanNow: "explain your fair-chance hiring rights in California, find out the rules in your state, and answer an employer about your record with a short, honest statement and proof.",
          quickCheck: [
            { objective: "O6", q: "Under California's Fair Chance Act, when can most covered employers run a background check?", options: ["Before the interview", "On the job application", "Never", "After a conditional job offer"], answer: 3, why: "Covered employers wait until after a conditional offer to check your record." },
            { objective: "O6", q: "An employer asks about your past after making you an offer. What would you do?", options: ["Give a short, honest statement about what you have done since", "Tell a long story about the case", "Refuse to say anything and leave", "Say you have no record"], answer: 0, why: "A short, honest rehabilitation statement shows you are ready for the job." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Get help, prepare and use your rights",
        questions: [
          { objective: "O4", q: "Which is a warning sign when someone offers to clear your record?", options: ["They explain your options first", "They work at a court self-help center", "They guarantee results and want a big fee up front", "They ask you to bring your record"], answer: 2, why: "Guarantees and large up-front fees are signs of a scam; real help explains options first." },
          { objective: "O4", q: "You are not a US citizen and want record relief. What should you do first?", options: ["Talk to an immigration lawyer", "File the forms alone right away", "Skip legal help", "Ask a friend to file for you"], answer: 0, why: "Court actions can affect immigration status, so an immigration lawyer should advise you first." },
          { objective: "O5", q: "Which belongs in your record-relief folder?", options: ["Your bank password", "Proof you finished probation", "Your social media login", "A blank page"], answer: 1, why: "Proof of finished probation helps show you qualify and have done what the court asked." },
          { objective: "O6", q: "Under California's Fair Chance Act, when can most covered employers run a background check?", options: ["Before you apply", "During the first phone call", "On the job ad", "After a conditional job offer"], answer: 3, why: "Most covered employers must wait until after a conditional job offer." },
          { objective: "O6", q: "An employer plans to take back your offer because of your record. How long do you have to respond in California?", options: ["No time at all", "One hour", "At least five business days", "One year"], answer: 2, why: "The employer must give at least five business days to respond with evidence or show a mistake." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Clearing Your Record: Expungement and Record Relief",
    questions: [
      { objective: "O1", q: "Why get a copy of your own record first?", options: ["To post it online", "To see each case and catch mistakes", "Because employers require you to show it", "It is not useful"], answer: 1, why: "Your record shows what needs relief and may have errors to fix." },
      { objective: "O1", q: "In California, the place you go to be fingerprinted for Record Review is:", options: ["A Live Scan site", "A bank", "A post office box", "A car dealership"], answer: 0, why: "Record Review uses Live Scan fingerprints taken at Live Scan sites." },
      { objective: "O1", q: "You find a mistake on your California DOJ record. Which form challenges it?", options: ["A job application", "A FAFSA", "BCIA 8706, the Claim of Alleged Inaccuracy or Incompleteness", "A driver's license form"], answer: 2, why: "DOJ sends BCIA 8706 with your record so you can challenge errors." },
      { objective: "O1", q: "Where can you request your national FBI record?", options: ["Your county library", "A social media site", "Your landlord", "The FBI, through fbi.gov"], answer: 3, why: "The FBI keeps the national Identity History Summary; fbi.gov explains how to request it." },
      { objective: "O2", q: "What does sealing a record usually mean?", options: ["The record still exists but most people cannot see it", "You go back to court for a new trial", "You pay a fine again", "The case gets longer"], answer: 0, why: "A sealed record exists but is hidden from most of the public." },
      { objective: "O2", q: "A set-aside or dismissal means:", options: ["You are arrested again", "The court reopens a conviction and dismisses it", "Your fingerprints are deleted", "You must move to a new state"], answer: 1, why: "A set-aside or dismissal is a court dismissing a past conviction." },
      { objective: "O2", q: "What is a certificate of rehabilitation?", options: ["A diploma from high school", "A parking permit", "A court order saying you have lived a law-abiding life since your sentence", "A job contract"], answer: 2, why: "It is a court's official statement that you have been rehabilitated." },
      { objective: "O2", q: "Which is true about the word expungement in California?", options: ["It always erases every record", "Only the FBI uses it", "It is a federal program", "The courts say true expungement does not exist there"], answer: 3, why: "California's courts say true expungement does not exist; the usual relief is a dismissal." },
      { objective: "O3", q: "Your case was heard in a county superior court. It is a:", options: ["State case", "Federal case", "Military case", "Tribal case"], answer: 0, why: "County courts hear state cases." },
      { objective: "O3", q: "Can a state dismissal clear a federal conviction?", options: ["Yes, always", "Yes, if you pay more", "No, each system clears only its own cases", "Only on weekends"], answer: 2, why: "State relief cannot clear a federal conviction." },
      { objective: "O3", q: "How do you get California's automatic Clean Slate relief?", options: ["You must file a petition", "DOJ applies it to eligible cases without a petition", "You call 911", "You ask your employer"], answer: 1, why: "DOJ reviews records monthly and grants eligible relief automatically." },
      { objective: "O3", q: "How can you find out whether you received automatic relief in California?", options: ["Wait for a letter from DOJ", "Ask a neighbor", "Search the news", "Request your own DOJ record and look for the relief note"], answer: 3, why: "DOJ does not notify people, so you check your own record." },
      { objective: "O4", q: "Which is a free place to look for record relief help?", options: ["A court self-help center", "A website that guarantees results for a big fee", "A stranger on social media", "A pawn shop"], answer: 0, why: "Court self-help centers, legal aid and public defender programs often help for free." },
      { objective: "O4", q: "Before calling a legal helper, a smart step is to:", options: ["Throw out your papers", "Write three questions and gather your record", "Guess your case numbers", "Sign blank forms"], answer: 1, why: "Being prepared helps the helper work faster and answer your real questions." },
      { objective: "O5", q: "What is a case number?", options: ["Your phone number", "A bank account", "The number a court gives each case", "Your shoe size"], answer: 2, why: "Case numbers help a helper or clerk find the right court file." },
      { objective: "O5", q: "After the court grants relief, what should you do later?", options: ["Nothing ever again", "Throw away the order", "Tell no one", "Request your record again to make sure it was updated"], answer: 3, why: "Records are not always updated, so you check and fix any problem." },
      { objective: "O5", q: "Which is good proof of your life now?", options: ["Certificates from classes and letters of support", "An old jail ID", "A blank check", "Your password list"], answer: 0, why: "Certificates and support letters are evidence of rehabilitation." },
      { objective: "O6", q: "Which employers does California's Fair Chance Act cover?", options: ["Only the state government", "Public employers and private employers with five or more employees", "Only employers with 500 or more workers", "Only restaurants"], answer: 1, why: "The law covers public employers and private employers with five or more employees, with some exceptions." },
      { objective: "O6", q: "After a conditional offer, which can a California employer NEVER use?", options: ["Your skills test", "Your work references", "A conviction that was dismissed", "Your start date"], answer: 2, why: "Sealed, dismissed or expunged convictions are off limits." },
      { objective: "O6", q: "A good rehabilitation statement for an employer:", options: ["Blames everyone else", "Is three pages long", "Says what happened in a sentence, what you have done since, and why you are ready", "Lies about the record"], answer: 2, why: "Short, honest and focused on change and readiness works best." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      4,
      7,
      8,
      10,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Getting the record",
        objective: "O1",
        notYet: "No plan, or plans to use a private background-check site.",
        meets: "Names the official place to request the record and the fingerprint site.",
        exceeds: "Also notes the fee, fee waiver and where to get a federal record if needed."
      },
      {
        name: "Cases and possible relief",
        objective: "O3",
        notYet: "Cases are missing, or none is labeled state or federal.",
        meets: "Each known case has county, year, charge, state or federal, and a possible kind of relief.",
        exceeds: "Notes which cases to check for automatic relief and one question for a lawyer."
      },
      {
        name: "Free legal help",
        objective: "O4",
        notYet: "No helper named, or a paid service that guarantees results.",
        meets: "A free legal helper to contact first, with phone and hours.",
        exceeds: "A second helper and three questions to ask are also written down."
      },
      {
        name: "Papers to gather",
        objective: "O5",
        notYet: "No list of papers.",
        meets: "A checklist of records and proof of life now to gather.",
        exceeds: "The first two papers to get this week are starred."
      },
      {
        name: "Rehabilitation statement",
        objective: "O6",
        notYet: "Missing, too long, or not honest.",
        meets: "A short, honest statement: what happened in a sentence, what you have done since, and why you are ready.",
        exceeds: "Practiced out loud and mentions proof like certificates or letters of support."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who request a copy of their own record within 30 days (follow-up survey)",
      "Learners who contact free legal help or file for record relief within 90 days",
      "Learners who report a job or housing offer after using their rehabilitation statement"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or computer with internet",
      "Paper and pen, or a folder, for the action plan and record-relief papers",
      "Contact details for a local legal aid office or court self-help center",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "This course is not legal advice; partner with a legal aid office or clinic and invite them to a session if possible.",
      "Learners outside California should look up their own state's official pages; have those links ready.",
      "Learners should not share case details out loud in a group or type them into AI; let them work on case lists privately.",
      "Tell learners who are not US citizens to talk with an immigration lawyer before seeking any record relief.",
      "Score the action plan with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
