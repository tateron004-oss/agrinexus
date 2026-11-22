"use strict";

// Koach Learn course: Workforce Development -> "IT Support Fundamentals (CompTIA A+ Preparation)" (wave 1, 30 October 2026).
// Prepares learners for the two CompTIA A+ exams (Core 1 220-1201, Core 2 220-1202, checked on comptia.org 30 October 2026).
// It does not grant the certification. ADDIE parts follow re-entry/reentry-ai-digital-confidence.js.

const A_PLUS = { name: "CompTIA A+ certification (official page)", url: "https://www.comptia.org/en-us/certifications/a/" };
const CORE1 = { name: "CompTIA A+ Core 1 (220-1201) exam details", url: "https://www.comptia.org/en-us/certifications/a/core-1-v15/" };
const CORE2 = { name: "CompTIA A+ Core 2 (220-1202) exam details", url: "https://www.comptia.org/en-us/certifications/a/core-2-v15/" };
const BLS = { name: "US Bureau of Labor Statistics: Computer Support Specialists", url: "https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm" };

module.exports = {
  id: "it-support-fundamentals",
  category: "Workforce Development",
  name: "IT Support Fundamentals (CompTIA A+ Preparation)",
  skills: "Naming computer hardware, Checking a network connection, Using operating system tools, Troubleshooting step by step, Writing help-desk tickets, Planning for the A+ exams",
  outcome: "work like an entry-level help-desk technician: name the parts of a computer, check a network connection with ipconfig and ping, use built-in system tools, fix a problem with the six-step troubleshooting method, write a clear ticket, and follow your own dated study plan for the two CompTIA A+ exams.",
  about: [
    "IT support (also called help desk or desktop support) is a common first job in technology. Support technicians help people when a computer, printer, phone or network stops working. The best-known starting certification for this work is CompTIA A+.",
    "This course prepares you for A+. It does not give you the certification. To earn A+ you must pass two exams, Core 1 and Core 2, at a testing center or online. Check the official CompTIA page for the current exams, prices and testing options before you book.",
    "You will practice on your own computer with free, built-in tools. You do not need to open a computer or buy anything. Each lesson takes about five minutes and ends with a \"Try it now\" task and two quick questions. There is a knowledge check after each chapter and a 20-question quiz at the end.",
    "This course is for anyone starting out: job seekers, veterans, young adults, people coming home from prison, immigrants and adults changing careers."
  ],
  finalTask: "Make your IT support starter pack: (1) a practice help-desk ticket for a real or made-up problem, written with all six troubleshooting steps and the ticket fields from Lesson 6; (2) a one-page note on your own computer: its operating system and version, free storage, IP address, default gateway and whether ping worked; and (3) your A+ study and test plan with a target date for Core 1 and for Core 2, the domains for each exam with their weights, and the hours you will study each week.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults looking for a first job in technology: job seekers, veterans, people coming home from prison, immigrants and career changers. Most use a phone and computer every day but have never fixed one or worked in IT.",
    startingPoint: "Can use a web browser, email and common apps. Most have not used a command prompt, looked inside system settings, or written a support ticket. Few know what the A+ exams cover.",
    gap: "Help-desk jobs ask for basic hardware, networking, operating system and troubleshooting skills, and often for CompTIA A+. Learners need a clear picture of the work, hands-on practice with real tools, and a dated plan so they actually sit both exams.",
    constraints: [
      "Reading level: plain words and short sentences; every technical word explained",
      "Devices: one Windows or Mac computer (a library computer works for most tasks, but some commands may be blocked there)",
      "No opening of computers or power supplies; hardware is learned from pictures or a powered-off, unplugged old device only",
      "Time: 4 to 6 minute lessons that fit around work and appointments",
      "Exam rules, prices and versions change: learners check comptia.org before booking"
    ],
    prerequisites: "Comfort with a computer, mouse and keyboard. If that is new, take \"Basic Computer Skills\" first. \"Introduction to Cybersecurity\" is a helpful companion."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given pictures or a list of computer parts", action: "identify each main hardware part and say what it does", standard: "getting at least 8 of 10 right" },
    { id: "O2", condition: "Using your own Windows or Mac computer", action: "run ipconfig (or check network settings) and ping to record the IP address and default gateway and test the connection", standard: "without help, and say what a 169.254 address means" },
    { id: "O3", condition: "Using your own computer", action: "find the operating system version, free storage, running programs and update status with built-in tools", standard: "in under 10 minutes" },
    { id: "O4", condition: "Given a computer problem from a user", action: "apply the six-step CompTIA troubleshooting method and write down each step", standard: "with all six steps in the right order" },
    { id: "O5", condition: "Given a call or message from a user with a problem", action: "write a help-desk ticket and a short, polite reply to the user", standard: "with every ticket field filled in and no blame or jargon in the reply" },
    { id: "O6", condition: "Using the official CompTIA A+ exam pages", action: "write a study and test plan with target dates for Core 1 and Core 2", standard: "covering every exam domain with its weight and a weekly study time" }
  ],
  chapters: [
    {
      name: "Chapter 1: The job, the hardware and the network",
      lessons: [
        {
          title: "The help-desk job and the two A+ exams",
          objectives: ["O6"],
          minutes: 5,
          goal: "List the two A+ exams, their codes and the main topics each one covers.",
          text: [
            "A support technician answers calls, chats and tickets, sets up computers and accounts, fixes common problems, and knows when to pass a hard problem to a senior tech. Job titles include help desk technician, IT support specialist, desktop support and field technician.",
            "CompTIA A+ is a well-known entry certification for this work. It is granted by CompTIA, not by this course. You must pass two exams. Core 1 (220-1201) covers mobile devices, networking, hardware, virtualization and cloud, and hardware and network troubleshooting. Core 2 (220-1202) covers operating systems, security, software troubleshooting and operational procedures. You can take them in either order.",
            "When we checked in October 2026, each exam had up to 90 questions in 90 minutes, with multiple-choice, drag-and-drop and performance-based questions (small hands-on tasks). CompTIA recommends about 12 months of hands-on experience, but this is a recommendation. Exams, prices and versions change, so always check the official pages before you book.",
            "Each exam lists domains (topic areas) with a weight, the share of the exam that topic makes up. Your study time should follow those weights."
          ],
          steps: ["Open the official CompTIA A+ page.", "Open the Core 1 and Core 2 exam pages.", "Write down each exam code and its domains with their weights.", "Find the current price and testing options (test center or online) on the official site."],
          words: [["Help desk", "the team people contact when their technology does not work."], ["Certification", "a credential you earn by passing an exam, showing you have certain skills."], ["Domain", "a topic area of an exam. Its weight is the share of questions about it."], ["Performance-based question", "an exam task where you do something, like match settings or fix a setup, instead of picking one answer."]],
          slides: [
            { title: "What a support tech does", bullets: ["Answers calls, chats and tickets", "Sets up computers, printers and accounts", "Fixes common problems; passes hard ones on"] },
            { title: "CompTIA A+ = two exams", bullets: ["Core 1 (220-1201): hardware, networking, mobile, cloud, troubleshooting", "Core 2 (220-1202): operating systems, security, software, procedures", "Pass both, in any order"] },
            { title: "Exam format (checked Oct 2026)", bullets: ["Up to 90 questions, 90 minutes each", "Multiple-choice, drag-and-drop, performance-based", "Check comptia.org for current details and price"] },
            { title: "This course prepares you", bullets: ["It does not grant A+", "CompTIA grants it when you pass both exams"] }
          ],
          sources: [A_PLUS, CORE1, CORE2, BLS],
          tryIt: "Open the official Core 1 and Core 2 pages. On paper, make two columns, one per exam. Write the exam code, then each domain and its weight. Circle the biggest domain in each exam: that is where you will spend the most study time.",
          youCanNow: "name the two A+ exams, their codes and their main domains, and find the current details on the official page.",
          quickCheck: [
            { objective: "O6", q: "How many exams must you pass to earn CompTIA A+?", options: ["One", "Two: Core 1 and Core 2", "Three", "None; this course grants it"], answer: 1, why: "A+ needs both Core 1 and Core 2; the course only prepares you." },
            { objective: "O6", q: "Where should you check the current A+ price and exam version?", options: ["A forum post from last year", "A friend who passed in 2019", "The official CompTIA website", "Any video about A+"], answer: 2, why: "Prices and exam versions change; the official page is the only reliable source." }
          ]
        },
        {
          title: "Inside the computer: the main hardware parts",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identify the main hardware parts of a computer and say what each one does.",
          text: [
            "Hardware is the physical parts you can touch. The motherboard is the main board everything plugs into. The CPU (processor) does the thinking. RAM (memory) holds what you are working on right now and is cleared when the power goes off. Storage keeps your files when the power is off: an SSD (solid-state drive, fast, no moving parts) or an HDD (hard disk drive, slower, spinning disks).",
            "The power supply (PSU) turns wall power into the power the parts use. A graphics card (GPU) draws the picture on the screen; many computers have graphics built into the CPU. Ports on the outside include USB (USB-A and the smaller, reversible USB-C), HDMI and DisplayPort for screens, and Ethernet for a wired network.",
            "A common help-desk clue: a slow computer that has many programs open may need more RAM; a computer that takes a long time to start may have a nearly full or older hard drive.",
            "Safety first: you do not need to open a computer for this course. A technician always turns the computer off and unplugs it before opening it, wears an anti-static wrist strap, and never opens a power supply or a swollen battery."
          ],
          words: [["Hardware", "the physical parts of a computer."], ["CPU", "the processor; the part that runs programs and does calculations."], ["RAM", "short-term memory that holds open programs and files; it empties when the power is off."], ["SSD / HDD", "storage drives that keep files when the power is off. An SSD is faster and has no moving parts."], ["Motherboard", "the main circuit board that connects all the parts."], ["ESD", "electrostatic discharge: a small static shock that can damage computer parts."]],
          slides: [
            { title: "The core parts", bullets: ["Motherboard: connects everything", "CPU: does the thinking", "RAM: short-term memory, empties at power off", "SSD or HDD: keeps your files"] },
            { title: "More parts and ports", bullets: ["Power supply (PSU) and graphics (GPU)", "USB-A, USB-C, HDMI, DisplayPort, Ethernet"] },
            { title: "Clues on the job", bullets: ["Slow with many programs open: maybe low RAM", "Slow start-up: full or older drive"] },
            { title: "Safety", bullets: ["Power off and unplug before opening", "Anti-static wrist strap", "Never open a power supply or a swollen battery"] }
          ],
          tryIt: "Look at your own computer from the outside only. List every port you can see and name it (USB-A, USB-C, HDMI, Ethernet, headphone). Then, on Windows open Settings > System > About, or on a Mac open the Apple menu > About This Mac, and write down your processor and how much RAM (memory) the computer has.",
          youCanNow: "name the main parts of a computer, say what each does, and find your own computer's processor and memory.",
          quickCheck: [
            { objective: "O1", q: "Which part keeps your files when the computer is turned off?", options: ["RAM", "The CPU", "The power supply", "The SSD or hard drive"], answer: 3, why: "Storage (SSD or HDD) keeps files; RAM empties when the power goes off." },
            { objective: "O1", q: "Before opening a desktop computer, what does a technician do first?", options: ["Turn it off and unplug it", "Open the power supply", "Remove the battery while it runs", "Spray water to cool it"], answer: 0, why: "Power off and unplug first; this protects you and the parts." }
          ]
        },
        {
          title: "Networking basics: IP addresses, ipconfig and ping",
          objectives: ["O2"],
          minutes: 6,
          goal: "Check a computer's network connection with ipconfig and ping and record the results.",
          text: [
            "Every device on a network gets an IP address, like a street address for data. At home it usually looks like 192.168.x.x or 10.x.x.x. Your router hands out these addresses automatically with a service called DHCP. The default gateway is the router's address: the door from your home network to the internet.",
            "If a Windows computer shows an address starting with 169.254, it could not get an address from DHCP. That is a big clue: check the cable or Wi-Fi, then the router.",
            "Two tools every tech uses: ipconfig shows your IP address and default gateway (on Windows, open Command Prompt and type ipconfig). ping sends a small test message to another device and shows whether it answers. Ping the default gateway first; if that works, ping a website such as comptia.org.",
            "Practice these only on your own computer and network. Some library or work computers block the command prompt; if so, use network settings to find your IP address instead."
          ],
          steps: ["Windows: press the Windows key, type cmd and open Command Prompt. Mac: open Terminal.", "Windows: type ipconfig and press Enter. Write down the IPv4 address and the default gateway. Mac: find the IP address and router in System Settings > Network.", "Type ping followed by your gateway address, for example ping 192.168.1.1, and press Enter.", "On a Mac, press Control and C to stop ping.", "Read the result: replies mean the connection works; \"timed out\" or \"unreachable\" means it does not."],
          words: [["IP address", "a number that identifies a device on a network."], ["DHCP", "the service, usually in the router, that gives devices their IP addresses automatically."], ["Default gateway", "the router's address; the way out from your network to the internet."], ["ipconfig", "a Windows command that shows your network settings."], ["ping", "a command that tests whether another device answers over the network."], ["Router", "the box that connects your home network to the internet."]],
          slides: [
            { title: "Addresses on a network", bullets: ["Each device gets an IP address", "Home addresses: often 192.168.x.x or 10.x.x.x", "DHCP hands them out; the router is the gateway"] },
            { title: "The 169.254 clue", bullets: ["Windows shows 169.254.x.x", "It could not get an address from DHCP", "Check the cable or Wi-Fi, then the router"] },
            { title: "Two tools", bullets: ["ipconfig: shows your address and gateway", "ping: tests if another device answers", "Ping the gateway first, then a website"] },
            { title: "Practice safely", bullets: ["Only on your own computer and network", "Command blocked? Use network settings"] }
          ],
          sources: [CORE1],
          tryIt: "On your own computer, follow the steps. Write down your IP address and default gateway, then ping the gateway and ping comptia.org. Write \"works\" or \"does not work\" for each. Keep this note for your final task.",
          youCanNow: "find your IP address and default gateway, test a connection with ping, and say what a 169.254 address means.",
          quickCheck: [
            { objective: "O2", q: "A Windows laptop shows the IP address 169.254.20.5. What does this tell you?", options: ["The internet is very fast", "It did not get an address from DHCP", "The laptop has a virus", "The screen needs replacing"], answer: 1, why: "A 169.254 address means the device could not reach DHCP, so check the connection and router." },
            { objective: "O2", q: "Which command shows a Windows computer's IP address and default gateway?", options: ["ping", "print", "ipconfig", "shutdown"], answer: 2, why: "ipconfig shows your network settings; ping tests a connection." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The job, the hardware and the network",
        questions: [
          { objective: "O6", q: "Which exam covers operating systems and security?", options: ["Core 1 (220-1201)", "Core 2 (220-1202)", "Both cover only hardware", "Neither"], answer: 1, why: "Core 2 covers operating systems, security, software troubleshooting and operational procedures." },
          { objective: "O1", q: "A user says the computer slows down when many programs are open. Which part is a likely cause?", options: ["Not enough RAM", "The HDMI port", "The keyboard", "The monitor cable"], answer: 0, why: "RAM holds open programs; too little makes the computer slow when many are open." },
          { objective: "O1", q: "Which part does the main thinking and runs programs?", options: ["Power supply", "Ethernet port", "Hard drive", "CPU"], answer: 3, why: "The CPU (processor) runs programs and does calculations." },
          { objective: "O2", q: "What is the default gateway?", options: ["The fastest website", "A type of cable", "The router's address, the way out to the internet", "The computer's password"], answer: 2, why: "The default gateway is the router that connects your network to the internet." },
          { objective: "O2", q: "You ping your gateway and get replies, but pinging a website fails. Where is the problem most likely?", options: ["Between the router and the internet", "In the computer's RAM", "In the keyboard", "In the screen"], answer: 0, why: "The computer reaches the router, so the break is past the router: the internet connection." }
        ]
      }
    },
    {
      name: "Chapter 2: Systems, troubleshooting and your plan",
      lessons: [
        {
          title: "Operating system tools you use every day",
          objectives: ["O3"],
          minutes: 5,
          goal: "Find the system version, free storage, running programs and update status on your own computer.",
          text: [
            "The operating system (OS) is the main program that runs the computer: Windows, macOS, Linux, or on phones Android and iOS. A+ Core 2 expects you to find your way around these.",
            "On Windows: Settings > System > About shows the version. Settings > System > Storage shows free space. Task Manager (press Ctrl + Shift + Esc) shows running programs and how hard the CPU and memory are working; you can end a frozen program there. Settings > Windows Update shows whether updates are waiting.",
            "On a Mac: the Apple menu > About This Mac shows the version. Activity Monitor (search for it with Spotlight) shows running programs. System Settings > General > Software Update shows updates. Storage is under System Settings > General > Storage.",
            "Good security habits are part of the job: install updates, keep the built-in antivirus on (Microsoft Defender on Windows), use a standard (non-admin) account for daily work, and lock the screen when you step away (Windows key + L on Windows)."
          ],
          steps: ["Find the OS name and version.", "Find how much storage is free.", "Open Task Manager or Activity Monitor and find the program using the most memory.", "Check for updates.", "Lock your screen, then unlock it."],
          words: [["Operating system (OS)", "the main software that runs a computer or phone, like Windows or macOS."], ["Task Manager", "a Windows tool that shows running programs and lets you close a frozen one."], ["Activity Monitor", "the Mac tool that shows running programs."], ["Admin account", "an account that can install software and change settings. Daily work should use a standard account."]],
          slides: [
            { title: "Know the operating system", bullets: ["Windows, macOS, Linux; Android and iOS on phones", "Core 2 tests all of these"] },
            { title: "Windows tools", bullets: ["Settings > System > About: version", "Settings > System > Storage: free space", "Ctrl + Shift + Esc: Task Manager", "Settings > Windows Update"] },
            { title: "Mac tools", bullets: ["Apple menu > About This Mac", "Activity Monitor", "System Settings > General > Software Update"] },
            { title: "Security habits", bullets: ["Install updates; keep antivirus on", "Daily work on a standard account", "Lock the screen when you step away"] }
          ],
          sources: [CORE2],
          tryIt: "On your own computer, write down: the OS name and version, free storage, the program using the most memory right now, and whether any updates are waiting. Add this to your network note from Lesson 3. You now have most of part 2 of your final task.",
          youCanNow: "use built-in tools to check a computer's version, storage, running programs and updates.",
          quickCheck: [
            { objective: "O3", q: "A program is frozen on Windows. Which tool lets you close it?", options: ["Task Manager", "Paint", "The Recycle Bin", "The calculator"], answer: 0, why: "Task Manager shows running programs and can end one that is frozen." },
            { objective: "O3", q: "Which is the safer habit for everyday work?", options: ["Always using the admin account", "Turning off updates", "Using a standard account and keeping updates on", "Turning off the antivirus to save speed"], answer: 2, why: "A standard account and current updates limit the damage if something goes wrong." }
          ]
        },
        {
          title: "The six-step troubleshooting method",
          objectives: ["O4"],
          minutes: 6,
          goal: "Apply the six CompTIA troubleshooting steps to a problem, in order.",
          text: [
            "Good techs do not guess. They follow a method. The A+ objectives use six steps: 1. Identify the problem. 2. Establish a theory of probable cause (question the obvious). 3. Test the theory to find the cause. 4. Make a plan of action and carry out the fix. 5. Verify the whole system works and, if it helps, take steps to stop it happening again. 6. Document what you found, what you did and the result.",
            "Step 1 means asking the user questions: What happened? When did it start? Did anything change? Is there an error message? Back up important data before you change anything.",
            "Step 2 means starting with the simple causes: Is it plugged in? Is Wi-Fi on? Has it been restarted? If your first theory is wrong, make a new one and test again, or escalate (pass it to a senior tech).",
            "Example: a printer will not print. Theory: it is offline. Test: the printer screen shows a paper jam. Fix: clear the jam safely. Verify: print a test page. Document: \"Paper jam in tray 2, cleared, test page printed.\""
          ],
          steps: ["Identify the problem: ask questions, back up data.", "Establish a theory of probable cause: start with the obvious.", "Test the theory. Wrong? Make a new theory or escalate.", "Make a plan and carry out the fix.", "Verify it works and prevent a repeat if you can.", "Document findings, actions and outcome."],
          words: [["Troubleshooting", "finding and fixing the cause of a problem step by step."], ["Theory of probable cause", "your best guess at what is causing the problem."], ["Escalate", "pass a problem to someone with more skill or access."], ["Document", "write down what you found and did, usually in the ticket."]],
          slides: [
            { title: "The six steps", bullets: ["1 Identify  2 Theory  3 Test", "4 Plan and fix  5 Verify  6 Document"] },
            { title: "Step 1: identify", bullets: ["What happened? When? What changed?", "Any error message?", "Back up data before changes"] },
            { title: "Steps 2 and 3", bullets: ["Question the obvious: power, cables, restart", "Wrong theory? Try a new one or escalate"] },
            { title: "Steps 4 to 6", bullets: ["Fix it, then check the whole system", "Prevent a repeat if you can", "Write it all down"] }
          ],
          sources: [CORE1],
          tryIt: "Pick a real problem you have had (slow laptop, no Wi-Fi, a phone that will not charge) or use: \"A user cannot connect to Wi-Fi after moving desks.\" Write all six steps for it on paper, with what you would ask, check and write down at each step.",
          youCanNow: "work through a problem with the six troubleshooting steps and write each one down.",
          quickCheck: [
            { objective: "O4", q: "What is the FIRST troubleshooting step?", options: ["Replace the hard drive", "Document the fix", "Identify the problem", "Verify full system function"], answer: 2, why: "You must understand the problem before you guess at a cause." },
            { objective: "O4", q: "You fixed the problem. What comes before documenting it?", options: ["Verify the whole system works", "Close the ticket without telling the user", "Make a new theory", "Back up data for the first time"], answer: 0, why: "Step 5 is to verify everything works; step 6 is to document." }
          ]
        },
        {
          title: "Tickets, talking to users, and your A+ study plan",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Write a complete help-desk ticket and a dated A+ study and test plan.",
          text: [
            "A ticket is the record of one problem. A good ticket has: the user's name and how to reach them (in a real job, from the company system), the device, a short summary, the details and any error message, the priority (how urgent), the steps taken, and the result. Write it so another tech could pick it up and understand it.",
            "How you talk matters as much as the fix. Listen without interrupting, repeat the problem back, use plain words, never blame the user, give a time when you will update them, and confirm with them that it is fixed before you close the ticket. Keep their information private.",
            "Now plan your exams. Use the domain weights you wrote in Lesson 1. Pick a target date for each exam. Spend more weeks on the bigger domains. Use free practice: CompTIA's free exam objectives document, your own computer, and the knowledge checks here. Many people study 5 to 10 hours a week; choose what fits your life and write it down.",
            "Before you book, check the official page for the current price, any discount programs and testing options. Workforce centers, veterans programs and reentry programs sometimes help with exam costs, so ask yours."
          ],
          steps: ["Ticket: fill in user, device, summary, details, priority, steps taken and result.", "Reply: thank them, say what you found in plain words, say what happens next and when.", "Plan: write a target date for Core 1 and Core 2.", "List each domain with its weight and the weeks you give it.", "Write your weekly study hours and where you will study.", "Check the official page for price and testing options; ask a local program about help with costs."],
          words: [["Ticket", "the written record of one support request, from start to finish."], ["Priority", "how urgent a ticket is, often low, medium, high or critical."], ["Study plan", "a written schedule of what you will study, when, and your exam date."]],
          slides: [
            { title: "A complete ticket", bullets: ["User, device, summary, details, error message", "Priority, steps taken, result", "Another tech could pick it up"] },
            { title: "Talking to users", bullets: ["Listen and repeat the problem back", "Plain words, no blame", "Say when you will update them; confirm the fix"] },
            { title: "Your A+ plan", bullets: ["Target date for Core 1 and for Core 2", "More weeks for bigger domains", "Weekly hours written down"] },
            { title: "Before you book", bullets: ["Check comptia.org for price and testing options", "Ask workforce, veterans or reentry programs about help"] }
          ],
          sources: [A_PLUS, CORE1, CORE2],
          tryIt: "Final task: write the ticket for your Lesson 5 problem with every field and the six steps, plus a two-sentence reply to the user. Put your computer note from Lessons 3 and 4 on one page. Then write your A+ study and test plan: target dates for Core 1 and Core 2, each domain and its weight, and your weekly hours.",
          youCanNow: "write a clear support ticket, reply to a user politely, and follow your own dated plan toward both A+ exams.",
          quickCheck: [
            { objective: "O5", q: "Which ticket summary is most useful?", options: ["\"Broken.\"", "\"User is bad with computers.\"", "\"Help!!\"", "\"Laptop cannot connect to office Wi-Fi since moving to desk 14; error: no internet.\""], answer: 3, why: "It names the device, the problem, when it started and the error, with no blame." },
            { objective: "O6", q: "Core 1 has a domain worth 28% and one worth 11%. How should you plan?", options: ["Give both the same time", "Give more study time to the 28% domain", "Skip the 28% domain", "Study only the 11% domain"], answer: 1, why: "Bigger weights mean more questions, so they deserve more study time." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Systems, troubleshooting and your plan",
        questions: [
          { objective: "O3", q: "Where do you find the Windows version?", options: ["Task Manager > Startup", "The Recycle Bin", "Settings > System > About", "The printer menu"], answer: 2, why: "Settings > System > About shows the Windows edition and version." },
          { objective: "O4", q: "A monitor is black. Which theory should you test first?", options: ["The motherboard has failed", "The power or video cable is loose", "The operating system needs reinstalling", "The CPU is too slow"], answer: 1, why: "Question the obvious: cables and power are the most common and easiest to check." },
          { objective: "O4", q: "Your first theory turns out wrong. What do you do?", options: ["Make a new theory and test it, or escalate", "Close the ticket", "Tell the user it cannot be fixed", "Replace the computer"], answer: 0, why: "The method loops back: a new theory, or escalation if you are stuck." },
          { objective: "O5", q: "A user is upset that their laptop broke before a deadline. What is the best first response?", options: ["\"You must have broken it.\"", "\"That is not my problem.\"", "Use technical words so they trust you", "Listen, repeat the problem back, and say what you will do next"], answer: 3, why: "Listening, confirming and setting a clear next step calms the user and gets you the facts." },
          { objective: "O6", q: "Which is part of a complete A+ study plan?", options: ["Target dates for both exams and weekly study hours", "Only the name of the certification", "A list of computers you like", "Your Social Security number"], answer: 0, why: "Dates, domains and weekly hours turn a goal into a plan you can follow." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: IT Support Fundamentals (CompTIA A+ Preparation)",
    questions: [
      { objective: "O6", q: "Who grants the A+ certification?", options: ["This course", "CompTIA, when you pass both exams", "Your internet company", "Any employer"], answer: 1, why: "CompTIA grants A+; the course prepares you." },
      { objective: "O6", q: "The exam code 220-1201 is for:", options: ["Security+", "A+ Core 2", "A+ Core 1", "Network+"], answer: 2, why: "220-1201 is Core 1; 220-1202 is Core 2." },
      { objective: "O6", q: "A performance-based question asks you to:", options: ["Do a small hands-on task", "Write an essay", "Talk to a person", "Bring your own computer"], answer: 0, why: "Performance-based questions have you do something, like set up or fix a setting." },
      { objective: "O1", q: "Which part is short-term memory that empties when the power is off?", options: ["SSD", "HDD", "Power supply", "RAM"], answer: 3, why: "RAM holds open work only while the computer is on." },
      { objective: "O1", q: "Which is true about an SSD compared with an HDD?", options: ["It has spinning disks", "It is usually faster and has no moving parts", "It only stores music", "It is a type of screen"], answer: 1, why: "SSDs use chips with no moving parts, so they are faster." },
      { objective: "O1", q: "Which port connects a computer to a wired network?", options: ["Ethernet", "HDMI", "Headphone jack", "USB-C only for charging"], answer: 0, why: "Ethernet is the wired network port; HDMI is for screens." },
      { objective: "O1", q: "Which should a technician NEVER open?", options: ["A desktop case, after unplugging", "A laptop's settings menu", "A power supply", "A ticket"], answer: 2, why: "Power supplies hold dangerous stored charge and are replaced, not opened." },
      { objective: "O2", q: "What does DHCP do?", options: ["Prints documents", "Hands out IP addresses automatically", "Blocks viruses", "Charges the battery"], answer: 1, why: "DHCP, usually in the router, gives devices their IP addresses." },
      { objective: "O2", q: "Which command tests whether another device answers over the network?", options: ["ipconfig", "dir", "cls", "ping"], answer: 3, why: "ping sends a test message and shows whether replies come back." },
      { objective: "O2", q: "Which address is most likely a normal home network address?", options: ["192.168.1.25", "169.254.10.3", "999.1.1.1", "www.home"], answer: 0, why: "192.168.x.x is a common home range; 169.254 means DHCP failed, and 999 is not valid." },
      { objective: "O3", q: "Which keys open Task Manager on Windows?", options: ["Ctrl + P", "Ctrl + Shift + Esc", "Alt + Tab", "Windows + L"], answer: 1, why: "Ctrl + Shift + Esc opens Task Manager; Windows + L locks the screen." },
      { objective: "O3", q: "On a Mac, which tool shows the programs that are running?", options: ["Activity Monitor", "Notes", "Photos", "Calendar"], answer: 0, why: "Activity Monitor is the Mac version of Task Manager." },
      { objective: "O3", q: "You step away from your desk at work. What do you do?", options: ["Leave the screen open", "Turn off the antivirus", "Lock the screen", "Log in as admin"], answer: 2, why: "Locking the screen stops others from using your account." },
      { objective: "O4", q: "Put these in order: Test the theory, Identify the problem, Establish a theory.", options: ["Theory, Identify, Test", "Test, Theory, Identify", "Identify, Test, Theory", "Identify, Theory, Test"], answer: 3, why: "Identify the problem, establish a theory, then test it." },
      { objective: "O4", q: "What should you do before making changes to a user's computer?", options: ["Back up important data", "Delete old files", "Change their password", "Reinstall the system"], answer: 0, why: "Backing up first protects the user's data if a fix goes wrong." },
      { objective: "O4", q: "What is the LAST step of the troubleshooting method?", options: ["Test the theory", "Document findings, actions and outcome", "Identify the problem", "Restart the computer"], answer: 1, why: "Step 6 is to document, so others can learn from it and the record is complete." },
      { objective: "O5", q: "Which belongs in a help-desk ticket?", options: ["Your opinion of the user", "Jokes about the problem", "The steps taken and the result", "The user's bank details"], answer: 2, why: "Steps and results let any tech follow what happened." },
      { objective: "O5", q: "When should you close a ticket?", options: ["As soon as you start work", "After the user confirms it is fixed", "When the user stops answering for an hour", "Before you test the fix"], answer: 1, why: "Confirming with the user makes sure the problem is really solved." },
      { objective: "O5", q: "Which reply is best for a user?", options: ["\"Your DHCP lease failed, obviously.\"", "\"You did it wrong again.\"", "\"Ask someone else.\"", "\"Your laptop could not get a network address. I reset it and it works now. Please call if it happens again.\""], answer: 3, why: "It uses plain words, no blame, and tells the user what to do next." },
      { objective: "O6", q: "Where should you check current A+ prices and testing options before booking?", options: ["The official CompTIA website", "A social media comment", "An old textbook", "A pop-up ad"], answer: 0, why: "Only the official site has current prices, versions and options." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 3, 5, 8, 9, 10, 13, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Computer note", objective: "O3", notYet: "Missing the OS version, free storage or updates.", meets: "Lists OS and version, free storage, the top memory user and update status.", exceeds: "Also lists the processor and RAM and says what they mean for speed." },
      { name: "Network check", objective: "O2", notYet: "No IP address or gateway, or ping not tried.", meets: "Records IP address and gateway and the result of pinging both the gateway and a website.", exceeds: "Explains what the results would mean if one ping failed, including a 169.254 address." },
      { name: "Troubleshooting steps", objective: "O4", notYet: "Steps missing or out of order, or the fix is a guess.", meets: "All six steps in order, with what was asked, tested and done.", exceeds: "Includes a second theory or an escalation point and a way to stop it happening again." },
      { name: "Ticket and reply", objective: "O5", notYet: "Ticket is vague or the reply blames the user or uses jargon.", meets: "Every ticket field is filled in; the reply is polite, plain and says what happens next.", exceeds: "Another person could follow the ticket without asking any questions." },
      { name: "Study and test plan", objective: "O6", notYet: "No dates, or domains are missing.", meets: "Target dates for Core 1 and Core 2, every domain with its weight, weekly hours.", exceeds: "Plan gives more weeks to heavier domains and names where to check price and get help with costs." },
      { name: "Hardware words", objective: "O1", notYet: "Hardware parts are named wrongly in the note or ticket.", meets: "Parts and ports are named correctly.", exceeds: "Links a symptom to a likely part, for example slow with many programs open and low RAM." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who book or pass A+ Core 1 or Core 2 within 6 months (follow-up survey)",
      "Learners who apply for or start an IT support, help-desk or technician job within 6 months",
      "Partner programs (workforce centers, veterans and reentry services) report learners entering IT training or jobs"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "One Windows or Mac computer with internet (own or library; the command prompt may be blocked on some shared computers)",
      "Paper and pen, or a document, for the notes, ticket and plan",
      "The official CompTIA A+ Core 1 and Core 2 pages",
      "About 90 minutes in total, in short sessions, plus ongoing study time for the exams"
    ],
    facilitatorNotes: [
      "Take the pre-test together; use the results to decide which lessons need extra time.",
      "If you have an old, unplugged computer, show the parts with the case open; learners do not open devices themselves unless trained and supervised.",
      "In a lab, check that the command prompt works before Lesson 3, or show the network settings page instead.",
      "Pair learners to role-play the user and the tech for Lesson 6, then swap.",
      "Remind learners that this course prepares them and does not grant A+; help them find local programs that help with exam costs.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
