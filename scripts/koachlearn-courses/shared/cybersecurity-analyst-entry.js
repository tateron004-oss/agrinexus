"use strict";

// Koach Learn course: Workforce Development -> "Entry-Level Cybersecurity (CompTIA Security+ Preparation)" (wave 1, 30 October 2026).
// Goes past shared/intro-cybersecurity.js (personal account safety) into analyst skills: CIA triad, risk, controls, hardening,
// log review and incident response. Defensive skills only, practiced on the learner's own device and on made-up logs.
// Security+ facts checked on comptia.org 30 October 2026: V7 is SY0-701 (English retires 11 June 2027); V8 is SY0-801,
// expected on or around 17 November 2026. The course prepares learners; it does not grant the certification.

const SEC = { name: "CompTIA Security+ certification (official page)", url: "https://www.comptia.org/en-us/certifications/security/" };
const V7 = { name: "CompTIA Security+ V7 (SY0-701) exam details", url: "https://www.comptia.org/en-us/certifications/security/v7/" };
const V8 = { name: "CompTIA Security+ V8 (SY0-801) exam details", url: "https://www.comptia.org/en-us/certifications/security/v8/" };
const CISA = { name: "CISA: Cybersecurity best practices", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" };

module.exports = {
  id: "cybersecurity-analyst-entry",
  category: "Workforce Development",
  name: "Entry-Level Cybersecurity (CompTIA Security+ Preparation)",
  skills: "Using the CIA triad, Rating risk, Choosing security controls, Hardening a computer, Reviewing logs, Following incident response steps",
  outcome: "think and work like an entry-level security analyst: sort a problem by the CIA triad, rate a risk and pick a control, harden your own computer, spot warning signs in a sign-in log, follow the incident response steps, and follow your own dated plan for the CompTIA Security+ exam.",
  about: [
    "Security analysts protect an organization's computers, accounts and data. They watch for warning signs, check settings, and respond when something goes wrong. CompTIA Security+ is one of the best-known certifications for starting this work.",
    "This course prepares you for Security+. It does not give you the certification; CompTIA grants it when you pass the exam. The exam is changing in late 2026, so Lesson 1 shows you how to choose the right version and where to check the current details.",
    "Everything here is defensive. You practice only on your own computer and accounts and on made-up logs in the lessons. Never test, scan or log in to systems you do not own or have written permission to use: that can be a crime.",
    "If you are new to security, take \"Introduction to Cybersecurity\" first. It covers passwords, multifactor authentication and phishing for your own accounts; this course builds on it for the job."
  ],
  finalTask: "Make your security starter portfolio: (1) a hardening checklist for your own computer showing each setting you checked and its result; (2) a short incident note on the practice sign-in log from Lesson 5: what you saw, why it is suspicious, its CIA impact and risk rating, and the incident response steps you would take; and (3) your Security+ study and test plan: which exam version you will take and why, a target date, each domain with its weight, and your weekly study hours.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults aiming for a first security job: job seekers, veterans (many with security clearances or IT duty), career changers and people in IT support who want to move up. Mixed backgrounds; most have used computers daily but never worked in security.",
    startingPoint: "Know basic personal safety (passwords, multifactor authentication, phishing) or can get it from \"Introduction to Cybersecurity\". Have not read logs, rated risk or followed an incident process. Few know how the Security+ exam is organized or that it is changing.",
    gap: "Entry security roles expect analyst habits: classifying problems, judging risk, checking settings, reading logs and following incident steps calmly. Learners also need a clear, dated plan for the right Security+ version so they do not study for an exam that is retiring.",
    constraints: [
      "Reading level: plain words and short sentences; every term explained",
      "Defensive only: practice on your own device and made-up data; no scanning or testing other people's systems",
      "Devices: one Windows or Mac computer; some settings need an admin account, so library computers may not show them",
      "Time: 4 to 6 minute lessons",
      "The exam changes in late 2026: learners must check comptia.org for the version, dates and price"
    ],
    prerequisites: "Comfort with a computer and basic account safety. \"Introduction to Cybersecurity\" and \"IT Support Fundamentals (CompTIA A+ Preparation)\" are good to take first."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a short security scenario", action: "classify which part of the CIA triad (confidentiality, integrity or availability) it harms", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Given a threat to an organization", action: "rate its risk by likelihood and impact and choose a control type to reduce it", standard: "with a reason for the rating and the control" },
    { id: "O3", condition: "Using your own Windows or Mac computer", action: "check and record the update, firewall, antivirus, account type, screen lock and disk encryption settings", standard: "with every item checked and any gap written down" },
    { id: "O4", condition: "Given a short sign-in log", action: "flag the suspicious entries and explain why each is suspicious", standard: "finding every repeated failed sign-in and the odd success after them" },
    { id: "O5", condition: "Given a security incident scenario", action: "list the incident response steps in order and write one action for each", standard: "with no step missing and evidence kept" },
    { id: "O6", condition: "Using the official CompTIA Security+ pages", action: "write a study and test plan that names the exam version and a target date", standard: "covering every domain with its weight and weekly study time" }
  ],
  chapters: [
    {
      name: "Chapter 1: Thinking like a security analyst",
      lessons: [
        {
          title: "The analyst job and the Security+ exam",
          objectives: ["O6"],
          minutes: 6,
          goal: "Choose the right Security+ exam version for your test date and list its domains.",
          text: [
            "Entry security jobs include security analyst, SOC analyst (security operations center), and security or systems administrator. Analysts watch alerts and logs, check that systems are set up safely, and help respond to incidents. Many start in IT support and move up.",
            "CompTIA Security+ is granted by CompTIA when you pass one exam. When we checked in October 2026, the exam had up to 90 questions in 90 minutes, multiple-choice and performance-based. CompTIA recommends Network+ and about two years of security or systems admin experience, but it lists these as recommended experience.",
            "The exam is changing. Version 7 (SY0-701) is available now; its English exam was set to retire on 11 June 2027. Version 8 (SY0-801) was expected on or around 17 November 2026. If your test date is well into 2027, study for V8. If you will test soon, V7 may fit. Check the official pages: dates can move.",
            "Each version lists five domains with weights. In both, security operations is the largest (about 27 to 28 percent). Your study time should follow the weights."
          ],
          steps: ["Open the official Security+ page and the V7 and V8 exam pages.", "Pick your target test date.", "Choose the version that will be available on that date.", "Write down its exam code, five domains and weights.", "Check the current price and testing options on the official site."],
          words: [["SOC", "security operations center: the team that watches an organization's systems for attacks."], ["Security analyst", "a person who watches for, checks and responds to security problems."], ["Exam version", "a version of the exam with its own code and topics; old versions retire."], ["Retire", "when an exam version stops being offered."]],
          slides: [
            { title: "Entry security jobs", bullets: ["Security or SOC analyst", "Security or systems administrator", "Many start in IT support"] },
            { title: "Security+ basics (checked Oct 2026)", bullets: ["One exam, up to 90 questions, 90 minutes", "Multiple-choice and performance-based", "CompTIA grants it; this course prepares you"] },
            { title: "Pick your version", bullets: ["V7 = SY0-701: English set to retire 11 June 2027", "V8 = SY0-801: expected around 17 November 2026", "Match the version to your test date"] },
            { title: "Study by the weights", bullets: ["Five domains per version", "Security operations is the biggest", "Check comptia.org before you book"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Choose a target test month. Using the official pages, decide V7 or V8 and write one sentence saying why. Then list that version's five domains with their weights and circle the largest.",
          youCanNow: "say what an entry security analyst does, choose the right Security+ version for your test date, and list its domains.",
          quickCheck: [
            { objective: "O6", q: "You plan to test in late 2027. Which version should you study for?", options: ["V7 (SY0-701), because it is older", "Any version; they are the same", "V8 (SY0-801), because V7 English is set to retire in June 2027", "No version; just take A+"], answer: 2, why: "Study for the version that will still be offered on your test date; check the official pages." },
            { objective: "O6", q: "Who grants the Security+ certification?", options: ["CompTIA, when you pass the exam", "This course", "Your employer", "Any security website"], answer: 0, why: "CompTIA grants Security+; this course prepares you for the exam." }
          ]
        },
        {
          title: "The CIA triad, threats, vulnerabilities and risk",
          objectives: ["O1", "O2"],
          minutes: 6,
          goal: "Classify a security problem with the CIA triad and rate its risk.",
          text: [
            "Security protects three things, called the CIA triad. Confidentiality: only the right people can see data. Integrity: data is correct and not changed without permission. Availability: systems and data work when people need them.",
            "Examples: a stolen laptop with customer files harms confidentiality. Someone changing payroll numbers harms integrity. Ransomware that locks every file, or a website knocked offline, harms availability.",
            "A threat is something that could cause harm (a thief, a scammer, a storm). A vulnerability is a weakness it could use (an unpatched computer, a weak password, an unlocked door). Risk is how likely the harm is, times how bad it would be (the impact).",
            "Analysts often rate risk on a simple grid: likelihood low, medium or high, and impact low, medium or high. High likelihood and high impact go to the top of the list."
          ],
          steps: ["Name what could be harmed.", "Ask: does it hurt confidentiality, integrity or availability?", "Name the threat and the vulnerability.", "Rate likelihood: low, medium or high.", "Rate impact: low, medium or high.", "Put the high-high risks first."],
          words: [["CIA triad", "confidentiality, integrity and availability: the three goals of security."], ["Threat", "something or someone that could cause harm."], ["Vulnerability", "a weakness that a threat could use."], ["Risk", "how likely a harm is and how bad it would be."], ["Ransomware", "malware that locks files and demands payment."]],
          slides: [
            { title: "The CIA triad", bullets: ["Confidentiality: only the right people see it", "Integrity: it stays correct", "Availability: it works when needed"] },
            { title: "Examples", bullets: ["Stolen laptop with files: confidentiality", "Changed payroll numbers: integrity", "Ransomware, site offline: availability"] },
            { title: "Threat, vulnerability, risk", bullets: ["Threat: what could cause harm", "Vulnerability: the weakness", "Risk: likelihood and impact together"] },
            { title: "Rate it", bullets: ["Likelihood: low, medium, high", "Impact: low, medium, high", "High and high go first"] }
          ],
          tryIt: "For a small business you know (a corner store, a church office, a clinic front desk), list three things that could go wrong. For each, write which CIA part it harms, the threat, the vulnerability, and a likelihood and impact rating.",
          youCanNow: "sort a security problem by the CIA triad and rate its risk by likelihood and impact.",
          quickCheck: [
            { objective: "O1", q: "Someone changes the amounts on invoices without permission. Which part of the CIA triad is harmed?", options: ["Confidentiality", "Availability", "None", "Integrity"], answer: 3, why: "Integrity means data stays correct; unauthorized changes break it." },
            { objective: "O2", q: "An office computer has not been updated in a year. In risk terms, the missing updates are a:", options: ["Threat", "Vulnerability", "Control", "Incident"], answer: 1, why: "A missing update is a weakness that a threat could use." }
          ]
        },
        {
          title: "Security controls and least privilege",
          objectives: ["O2"],
          minutes: 5,
          goal: "Choose a control type to reduce a given risk.",
          text: [
            "A control is anything that reduces risk. Security+ sorts controls in two ways. By category: technical (a firewall, encryption, multifactor authentication), managerial (policies, risk assessments), operational (training, guards, procedures people follow) and physical (locks, badges, cameras).",
            "By what they do: preventive controls stop an attack (a lock, multifactor authentication). Detective controls notice it (a camera, log alerts). Corrective controls fix things after (restoring from a backup). Deterrent controls discourage it (a warning sign). Compensating controls stand in when the main control is not possible.",
            "A key rule is least privilege: give each person only the access they need for their job, and no more. A cashier does not need access to payroll. If an account is taken over, least privilege limits the damage.",
            "Good defense uses several layers, so if one fails, another still protects (defense in depth)."
          ],
          words: [["Control", "anything that reduces a risk."], ["Preventive / detective / corrective", "controls that stop, notice, or fix a security problem."], ["Least privilege", "giving each person only the access their job needs."], ["Defense in depth", "using several layers of protection."], ["Firewall", "a tool that allows or blocks network traffic based on rules."]],
          slides: [
            { title: "Control categories", bullets: ["Technical: firewall, encryption, MFA", "Managerial: policies, risk assessments", "Operational: training, procedures", "Physical: locks, badges, cameras"] },
            { title: "What controls do", bullets: ["Preventive: stop it", "Detective: notice it", "Corrective: fix it after", "Deterrent and compensating"] },
            { title: "Least privilege", bullets: ["Only the access the job needs", "Limits damage if an account is taken"] },
            { title: "Defense in depth", bullets: ["Several layers", "If one fails, another still protects"] }
          ],
          sources: [V7, V8],
          tryIt: "Take the three risks from Lesson 2. For each, choose one control. Write its category (technical, managerial, operational or physical) and what it does (preventive, detective or corrective). Then write one least-privilege rule for that business.",
          youCanNow: "pick a control for a risk, name its category and type, and apply least privilege.",
          quickCheck: [
            { objective: "O2", q: "A security camera that records who enters is mainly which type of control?", options: ["Detective", "Corrective", "Managerial", "Compensating"], answer: 0, why: "Cameras notice and record events, which makes them detective (and physical) controls." },
            { objective: "O2", q: "A new cashier asks for access to the payroll system. Using least privilege, you:", options: ["Give full admin access to be safe", "Share your own password", "Give access only if the job truly needs it", "Give everyone access to everything"], answer: 2, why: "Least privilege grants only the access a role needs." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Thinking like a security analyst",
        questions: [
          { objective: "O1", q: "A clinic's scheduling website is knocked offline for a day. Which CIA part is harmed?", options: ["Confidentiality", "Integrity", "Availability", "None of them"], answer: 2, why: "People could not use the system when they needed it: availability." },
          { objective: "O1", q: "A worker emails a customer list to the wrong person outside the company. Which CIA part is harmed?", options: ["Confidentiality", "Availability", "Integrity", "Least privilege"], answer: 0, why: "Data was seen by someone who should not see it." },
          { objective: "O2", q: "Which risk should usually be handled first?", options: ["Low likelihood, low impact", "Low likelihood, medium impact", "Medium likelihood, low impact", "High likelihood, high impact"], answer: 3, why: "High likelihood and high impact is the most serious risk." },
          { objective: "O2", q: "Restoring files from a backup after ransomware is which type of control?", options: ["Deterrent", "Corrective", "Preventive", "Managerial"], answer: 1, why: "Corrective controls fix things after an event." },
          { objective: "O6", q: "In both Security+ versions, which domain has the largest weight?", options: ["General security concepts", "Security program management", "Security operations", "Security architecture"], answer: 2, why: "Security operations is about 27 to 28 percent in both versions." }
        ]
      }
    },
    {
      name: "Chapter 2: Security operations in practice",
      lessons: [
        {
          title: "Hardening your own computer",
          objectives: ["O3"],
          minutes: 6,
          goal: "Check and record the main security settings on your own computer.",
          text: [
            "Hardening means making a system harder to attack by turning on protections and turning off what is not needed. Analysts check this on company computers every day. Practice on your own computer only.",
            "Check six things. Updates: are they installed? Firewall: is it on? Antivirus: is it on and current (Microsoft Defender is built into Windows; Macs have built-in malware protection)? Account type: do you use a standard account for daily work, with admin only when needed? Screen lock: does it lock after a few minutes and need a password or PIN? Disk encryption: is it on (BitLocker or Device Encryption on many Windows computers, FileVault on Mac)?",
            "On Windows, look in Settings for Windows Update and Accounts, and open Windows Security for the firewall and virus protection. On a Mac, look in System Settings for Software Update, Network > Firewall, Users & Groups, Lock Screen, and Privacy & Security > FileVault. Menu names can change between versions; search Settings if you cannot find one.",
            "If you turn on disk encryption, save the recovery key somewhere safe and offline first. Without it you can lose your files. If you are not sure, write it down as a gap and ask for help instead."
          ],
          steps: ["Updates: check and install.", "Firewall: confirm it is on.", "Antivirus: confirm it is on and current.", "Account: note whether your daily account is standard or admin.", "Screen lock: set it to lock after a few minutes.", "Disk encryption: check if it is on; save the recovery key before turning it on.", "Write each result and any gap."],
          words: [["Hardening", "making a system harder to attack by turning on protections and removing what is not needed."], ["Disk encryption", "scrambling everything on a drive so a thief cannot read it without the key."], ["Recovery key", "a long code that unlocks an encrypted drive if you cannot sign in."], ["Baseline", "the standard secure settings every computer in an organization should have."]],
          slides: [
            { title: "Hardening", bullets: ["Turn on protections", "Turn off what is not needed", "Only on your own computer"] },
            { title: "Check six things", bullets: ["Updates, firewall, antivirus", "Standard account for daily use", "Screen lock and disk encryption"] },
            { title: "Where to look", bullets: ["Windows: Settings and Windows Security", "Mac: System Settings, Privacy & Security", "Menu names change: use search"] },
            { title: "Careful with encryption", bullets: ["Save the recovery key first, offline", "Not sure? Write it as a gap and ask"] }
          ],
          sources: [CISA],
          tryIt: "On your own computer, check all six items. Make a table with three columns: setting, what you found, and what to fix. This is part 1 of your final task.",
          youCanNow: "check a computer's main security settings and write down the gaps, the way an analyst checks a baseline.",
          quickCheck: [
            { objective: "O3", q: "Before turning on disk encryption, what should you do?", options: ["Turn off the firewall", "Save the recovery key somewhere safe and offline", "Delete your files", "Share your password"], answer: 1, why: "Without the recovery key you could lose access to your own files." },
            { objective: "O3", q: "Which account should you use for daily work?", options: ["An admin account", "A shared account with no password", "A guest account with your files", "A standard account"], answer: 3, why: "A standard account limits what malware or mistakes can change." }
          ]
        },
        {
          title: "Reading logs and spotting suspicious activity",
          objectives: ["O4"],
          minutes: 6,
          goal: "Flag the suspicious entries in a sign-in log and say why.",
          text: [
            "A log is a list of events a system records, each with a time. Analysts read sign-in logs to spot attacks. On Windows, Event Viewer keeps a Security log (viewing it needs an admin account); failed sign-ins appear as event 4625 and successful ones as 4624. Here we use a made-up log instead.",
            "Practice log (made up): 02:14:01 FAILED user=jlopez from 203.0.113.50. 02:14:03 FAILED user=jlopez from 203.0.113.50. 02:14:05 FAILED user=jlopez from 203.0.113.50. 02:14:07 FAILED user=jlopez from 203.0.113.50. 02:14:09 SUCCESS user=jlopez from 203.0.113.50. 08:02:30 SUCCESS user=mchen from 10.0.0.12.",
            "Warning signs: many failed sign-ins in a few seconds (someone guessing passwords), then a success from the same address (they may have guessed right). Also odd times (2 am for a 9-to-5 worker), sign-ins from an unusual place, and one account signing in from two far-apart places close together.",
            "Your job is to notice, record and report, not to strike back. Write what you saw, the times, the account and the address, and pass it on following your team's process."
          ],
          steps: ["Read each line: time, result, account, address.", "Look for many failures in a short time.", "Look for a success right after failures from the same address.", "Look for odd times or places.", "Write down each suspicious line and why.", "Report it; never try to get into the other system yourself."],
          words: [["Log", "a time-stamped list of events a system records."], ["Event Viewer", "the Windows tool for reading system and security logs."], ["Brute force", "guessing a password by trying many options very fast."], ["Indicator", "a clue in data that something bad may be happening."]],
          slides: [
            { title: "Logs tell the story", bullets: ["Each line: time, event, account, address", "Windows: Event Viewer, Security log", "4625 = failed sign-in, 4624 = success"] },
            { title: "Warning signs", bullets: ["Many failures in seconds", "Then a success from the same address", "Odd hours or odd places"] },
            { title: "In the practice log", bullets: ["4 failures for jlopez in 8 seconds at 2:14 am", "Then a success from the same address", "mchen at 8:02 am looks normal"] },
            { title: "Your job", bullets: ["Notice, record, report", "Never strike back or break in"] }
          ],
          tryIt: "Copy the practice log onto paper. Circle each suspicious line and write why. Rate the risk (likelihood and impact) and the CIA part at risk. Keep this for part 2 of your final task.",
          youCanNow: "read a sign-in log, flag the suspicious entries, and explain why they matter.",
          quickCheck: [
            { objective: "O4", q: "In the practice log, which line is the most worrying?", options: ["The 02:14:09 success for jlopez right after four failures", "The 08:02:30 success for mchen", "The first failed sign-in only", "None; failed sign-ins are always normal"], answer: 0, why: "A success right after rapid failures from the same address suggests a password was guessed." },
            { objective: "O4", q: "You find signs of an attack in a log. What do you do?", options: ["Hack the attacker's computer back", "Ignore it until morning", "Delete the log", "Record the details and report them through your team's process"], answer: 3, why: "Analysts record and report; striking back is illegal and deleting logs destroys evidence." }
          ]
        },
        {
          title: "Incident response, and your Security+ plan",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "List the incident response steps for a scenario and write a dated Security+ study plan.",
          text: [
            "An incident is a security event that causes or threatens harm. Organizations follow set steps so people stay calm. Security+ uses: preparation, detection, analysis, containment, eradication, recovery, and lessons learned.",
            "For the jlopez sign-in: preparation (the team already has a plan and contacts); detection (you spot the log entries); analysis (confirm it is real: did jlopez sign in at 2 am?); containment (lock the account and end its sessions); eradication (reset the password, turn on multifactor authentication, remove anything the attacker set up); recovery (give jlopez safe access back and watch the account); lessons learned (what would have stopped this?).",
            "Keep evidence: do not delete logs or wipe a computer before your team says so. Write times and actions as you go. Report to the person your process names.",
            "Now plan your exam. Use the version you chose in Lesson 1. Set a target date. Give more weeks to the bigger domains. Practice with the official exam objectives, your own hardening and log notes, and the checks here. Choose weekly hours that fit your life. Before booking, check the price and testing options on the official page, and ask workforce, veterans or reentry programs about help with costs."
          ],
          steps: ["Preparation: know the plan and who to call.", "Detection: notice the warning signs.", "Analysis: confirm it is real and how bad.", "Containment: stop it spreading.", "Eradication: remove the cause.", "Recovery: return to normal and watch.", "Lessons learned: write what to change.", "Plan: version, target date, domains and weights, weekly hours."],
          words: [["Incident", "a security event that causes or threatens harm."], ["Containment", "stopping an incident from spreading."], ["Eradication", "removing the cause of an incident."], ["Evidence", "logs, files and notes that show what happened; they must be kept."]],
          slides: [
            { title: "Incident response steps", bullets: ["Preparation, detection, analysis", "Containment, eradication, recovery", "Lessons learned"] },
            { title: "The jlopez case", bullets: ["Confirm with the user", "Lock the account; reset; turn on MFA", "Restore access and watch the account"] },
            { title: "Keep evidence", bullets: ["Do not delete logs or wipe devices early", "Write times and actions as you go"] },
            { title: "Your Security+ plan", bullets: ["Version and target date", "Domains with weights; more weeks for bigger ones", "Weekly hours; check price on comptia.org"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Final task: put together your hardening table (Lesson 4), an incident note for the jlopez log with its CIA impact, risk rating and one action for each response step, and your Security+ plan with version, target date, domains and weights, and weekly hours.",
          youCanNow: "follow the incident response steps for a real-looking case and follow your own dated plan toward Security+.",
          quickCheck: [
            { objective: "O5", q: "You confirm an account was taken over. What is the next step?", options: ["Lessons learned", "Containment: lock the account and end its sessions", "Recovery", "Preparation"], answer: 1, why: "After detection and analysis, you contain the incident so it cannot spread." },
            { objective: "O6", q: "Which belongs in a Security+ study plan?", options: ["Only the word \"Security+\"", "A list of hacking tools to try on others", "The exam version, a target date, domains with weights and weekly hours", "Your passwords"], answer: 2, why: "A plan names the right version, a date, what to study and when." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Security operations in practice",
        questions: [
          { objective: "O3", q: "Which is part of hardening a computer?", options: ["Turning off updates", "Turning on the firewall and screen lock", "Using an admin account for everything", "Sharing the recovery key online"], answer: 1, why: "Hardening turns on protections like the firewall and screen lock." },
          { objective: "O4", q: "Ten failed sign-ins for one account in five seconds from the same address most likely means:", options: ["The user forgot to charge the phone", "Normal traffic", "A printer error", "Someone is guessing the password"], answer: 3, why: "Many fast failures is the sign of a brute-force guessing attack." },
          { objective: "O4", q: "On Windows, which tool lets you read the Security log?", options: ["Event Viewer", "Paint", "Notepad only", "The calculator"], answer: 0, why: "Event Viewer shows Windows logs, including the Security log." },
          { objective: "O5", q: "Which step comes right after containment?", options: ["Detection", "Preparation", "Eradication", "Analysis"], answer: 2, why: "After stopping the spread, you remove the cause: eradication." },
          { objective: "O5", q: "During an incident, why should you keep logs and not wipe the computer right away?", options: ["Logs are evidence of what happened", "Wiping is always illegal", "Logs make the computer faster", "It does not matter"], answer: 0, why: "Logs and devices are evidence; the team decides when it is safe to clean up." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Entry-Level Cybersecurity (CompTIA Security+ Preparation)",
    questions: [
      { objective: "O6", q: "What is the exam code for Security+ V8?", options: ["SY0-701", "220-1201", "SY0-801", "DA0-002"], answer: 2, why: "V8 is SY0-801; V7 is SY0-701." },
      { objective: "O6", q: "Why check the official CompTIA page before booking?", options: ["Exam versions, dates and prices can change", "It is the only place with practice hacking tools", "It grants the certificate for free", "You do not need to"], answer: 0, why: "Versions retire and prices change; the official page is current." },
      { objective: "O6", q: "Which domain should get the most study time in a Security+ plan?", options: ["The smallest one", "Security operations, the largest", "None; study randomly", "Only the domain you like"], answer: 1, why: "The largest domain has the most questions." },
      { objective: "O1", q: "Ransomware locks every file in an office. Which CIA part is hit hardest?", options: ["Confidentiality", "Integrity", "Least privilege", "Availability"], answer: 3, why: "People cannot use their files: availability." },
      { objective: "O1", q: "Confidentiality means:", options: ["Systems work when needed", "Only the right people can see the data", "Data is backed up", "Data is printed"], answer: 1, why: "Confidentiality keeps data away from people who should not see it." },
      { objective: "O1", q: "A student changes their grade in the school system. Which CIA part is harmed?", options: ["Integrity", "Availability", "Confidentiality", "Deterrence"], answer: 0, why: "The data was changed without permission, so it is no longer correct." },
      { objective: "O2", q: "A weak password on an admin account is a:", options: ["Threat", "Control", "Vulnerability", "Recovery key"], answer: 2, why: "It is a weakness an attacker could use." },
      { objective: "O2", q: "Multifactor authentication on sign-in is mainly a:", options: ["Corrective control", "Detective control", "Deterrent sign", "Preventive technical control"], answer: 3, why: "It stops many account takeovers before they happen, using technology." },
      { objective: "O2", q: "Risk is judged by:", options: ["Likelihood and impact", "Screen size", "The number of computers", "How new the office is"], answer: 0, why: "Risk combines how likely a harm is with how bad it would be." },
      { objective: "O2", q: "A written policy that says who may access customer files is which control category?", options: ["Physical", "Managerial", "Technical", "Corrective"], answer: 1, why: "Policies and risk decisions are managerial controls." },
      { objective: "O3", q: "Which tool is built into Windows for virus protection?", options: ["Microsoft Defender in Windows Security", "Event Viewer", "Paint", "Task Scheduler only"], answer: 0, why: "Microsoft Defender is the built-in antivirus in Windows Security." },
      { objective: "O3", q: "FileVault on a Mac is used for:", options: ["Playing music", "Sending email", "Disk encryption", "Printing"], answer: 2, why: "FileVault encrypts the Mac's drive." },
      { objective: "O3", q: "Where should you practice hardening?", options: ["On a neighbor's computer", "On your own computer", "On your old job's server", "On any public Wi-Fi network"], answer: 1, why: "Practice only on devices you own or have written permission to use." },
      { objective: "O4", q: "What is a log?", options: ["A password list", "A type of virus", "A firewall rule", "A time-stamped list of events a system records"], answer: 3, why: "Logs record events with times so analysts can see what happened." },
      { objective: "O4", q: "Which sign-in is most unusual for a 9-to-5 office worker?", options: ["8:55 am from the office network", "12:30 pm from the office network", "3:10 am from another country", "4:45 pm from the office network"], answer: 2, why: "Odd hours and odd places are warning signs." },
      { objective: "O4", q: "Windows event 4625 means:", options: ["A failed sign-in", "A successful sign-in", "A printer job", "A software update"], answer: 0, why: "4625 is a failed sign-in; 4624 is a successful one." },
      { objective: "O5", q: "What is the FIRST incident response step?", options: ["Recovery", "Preparation", "Eradication", "Lessons learned"], answer: 1, why: "Preparation comes first: plans and contacts are ready before an incident." },
      { objective: "O5", q: "Resetting the password and removing what the attacker set up is:", options: ["Detection", "Preparation", "Lessons learned", "Eradication"], answer: 3, why: "Eradication removes the cause of the incident." },
      { objective: "O5", q: "After the account is safe again, the team meets to ask what would have stopped it. This is:", options: ["Lessons learned", "Containment", "Detection", "Analysis"], answer: 0, why: "Lessons learned is the last step: improve so it does not happen again." },
      { objective: "O5", q: "You spot an attack coming from an outside address. What should you NOT do?", options: ["Write down the times", "Report it to your team", "Try to break into the attacker's computer", "Keep the logs"], answer: 2, why: "Striking back is illegal and not the analyst's job; record and report." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 6, 8, 10, 13, 14, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Hardening table", objective: "O3", notYet: "Some of the six settings are not checked.", meets: "All six settings checked on your own computer, with results and gaps.", exceeds: "Each gap has a fix and a reason, and the recovery key plan is written down." },
      { name: "Log review", objective: "O4", notYet: "Misses the rapid failures or the success after them.", meets: "Flags every suspicious line and says why.", exceeds: "Also names what normal looks like and what extra data would confirm it." },
      { name: "CIA and risk", objective: "O1", notYet: "No CIA part named, or the wrong one.", meets: "Names the CIA part at risk and gives a likelihood and impact rating with a reason.", exceeds: "Explains how the risk could change if a control were added." },
      { name: "Controls", objective: "O2", notYet: "No control, or a control that does not fit the risk.", meets: "Names at least one fitting control with its category and type.", exceeds: "Uses layered controls and a least-privilege rule." },
      { name: "Incident steps", objective: "O5", notYet: "Steps missing or out of order, or evidence destroyed.", meets: "All seven steps in order, each with one action, and evidence kept.", exceeds: "Names who is told at each step and how lessons learned would change the setup." },
      { name: "Study and test plan", objective: "O6", notYet: "No version or date, or domains missing.", meets: "Names V7 or V8 with a reason, a target date, every domain with its weight and weekly hours.", exceeds: "Gives more weeks to heavier domains and names where to check price and get help with costs." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who book or pass Security+ within 6 months (follow-up survey)",
      "Learners who apply for or start a security, SOC or IT job within 6 months",
      "Learners who report fixing at least one security gap at home or work within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "One Windows or Mac computer the learner owns or may change (some settings need an admin account)",
      "Paper and pen, or a document, for the tables, incident note and plan",
      "The official CompTIA Security+ V7 and V8 pages",
      "About 90 minutes in total, in short sessions, plus ongoing study time for the exam"
    ],
    facilitatorNotes: [
      "State the rule at the start of every session: defensive only, own devices and made-up data only; testing other people's systems without written permission can be a crime.",
      "Check the official Security+ pages before each cohort; the V7 retirement and V8 launch dates may move.",
      "On shared lab computers, learners may not see some settings; let them complete Lesson 4 at home or as a demonstration.",
      "Run Lesson 6 as a tabletop exercise: one person reads the log, the group walks through each response step out loud.",
      "Remind learners this course prepares them and does not grant Security+; point them to local programs that help with exam costs.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
