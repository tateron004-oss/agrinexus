"use strict";

// Koach Learn course: Seniors -> "Estate Planning and Wills" (one of the life-skills courses the owner asked for on 28 October 2026).
// Teaches students to PREPARE and ORGANIZE (inventory, beneficiaries, who to name, questions, where papers are kept) and then see a lawyer or legal aid;
// it does not teach drafting legal documents alone. Laws differ by state and country, and the course says so in every legal lesson.
// Sources: CFPB (managing someone else's money), MedlinePlus (advance directives), LawHelp.org, Eldercare Locator. Shape: see scripts/koachlearn-courses/README.md.

module.exports = {
  id: "seniors-estate-planning-wills",
  category: "Seniors and Technology",
  name: "Estate Planning and Wills",
  skills: "Knowing what a will does, Checking your beneficiaries, Understanding power of attorney and health care directives, Listing what you own and owe, Preparing for a lawyer or legal aid, Organizing and storing your papers",
  outcome: "prepare and organize your estate plan: a list of what you own and owe, a check of your beneficiaries, the people you want to name, your questions for a lawyer or legal aid, and a clear note telling your family where your important papers are.",
  about: [
    "This course is for older adults who want to make things easier for their family, and for adult children and grandchildren who help them. You do not need to be wealthy: anyone with a bank account, a home, a car, a pension, a pet or young grandchildren in their care can benefit from a plan.",
    "You will learn what a will, beneficiaries, a power of attorney and a health care directive do, then make the lists and choices a lawyer will ask you for, and organize everything so the right people can find it.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. Laws about wills and these documents are different in each US state and in each country. This course helps you get ready; to make the documents legal, see a lawyer or free legal aid where you live."
  ],
  finalTask: "Build your estate-planning folder: (1) a list of what you own and owe; (2) a beneficiary check for each account or policy that has one; (3) the people you would name as executor, financial agent and health care agent, with a backup for each; (4) at least five questions for a lawyer or legal aid; (5) a one-page \"where my papers are\" note for your family. Then find one place near you that offers legal help.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Older adults, and the family members who help them, who have not made an estate plan or have one that is out of date. Some are raising grandchildren; many have life insurance, retirement accounts or a home.",
    startingPoint: "Know that wills exist, but many have no will, have never checked their beneficiary forms, and do not know what a power of attorney or health care directive does. Papers are often scattered around the house.",
    gap: "Without a plan, the law decides who inherits, old beneficiary forms can send money to the wrong person, and families may need to go to court if a person cannot decide for themselves. Preparing the lists, people and questions, and organizing papers, saves families stress and money and makes a lawyer visit faster and cheaper.",
    constraints: [
      "Reading level: plain words, short sentences and large, simple steps",
      "Devices: paper and a folder are enough; a phone or computer helps to find legal help",
      "Time: about 5 minutes per lesson at a relaxed pace, plus time to gather papers",
      "Laws differ by state and country; the course prepares, and a lawyer or legal aid makes documents legal",
      "Privacy: only the last four digits of account numbers, no passwords, and no private details in AI tools"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the basic estate planning words", action: "explain what a will does, what an executor does and what can happen without a will", standard: "in your own words, getting at least 4 of 5 questions right" },
    { id: "O2", condition: "Given your life insurance, retirement and bank accounts", action: "check who is named as beneficiary and backup on each one", standard: "marking every form that is out of date" },
    { id: "O3", condition: "Given the people in your life", action: "choose an executor, a financial agent and a health care agent, with a backup for each", standard: "choosing people who are trustworthy, reachable and will follow your wishes" },
    { id: "O4", condition: "Using paper or a private file", action: "list what you own and what you owe", standard: "showing only the last four digits of any number and no passwords" },
    { id: "O5", condition: "Before you meet a lawyer or legal aid", action: "find a source of legal help near you and write at least five clear questions", standard: "including what it will cost and what is included" },
    { id: "O6", condition: "Given your important papers", action: "organize them in one folder and write a \"where my papers are\" note for your family", standard: "shared with the people you named" }
  ],
  chapters: [
    {
      name: "Chapter 1: Know the documents",
      lessons: [
        {
          objectives: ["O1"],
          title: "What estate planning is, and what a will does",
          minutes: 5,
          goal: "Explain what a will does and what can happen without one.",
          text: [
            "Estate planning means deciding ahead of time what happens to your money and belongings when you die, and who makes decisions for you if you become too sick to decide. Your estate is everything you own, minus what you owe.",
            "A will is a legal document that says who gets your belongings, and names an executor: the person who carries out your wishes, pays final bills and hands out what is left. In many places a will can also name a guardian for children under 18 in your care, such as grandchildren you are raising.",
            "If you die without a will, the law where you live decides who inherits, and a court picks who handles your estate. The result may not be what you wanted.",
            "Each state and country has its own rules for a will to be valid, such as how it is signed and witnessed. A will that does not follow those rules may not count. That is why this course helps you prepare, and a lawyer or legal aid helps you make it legal."
          ],
          words: [["Estate", "everything you own, such as money, a home, a car and belongings, minus what you owe."], ["Will", "a legal document that says who gets your belongings after you die and who carries out your wishes."], ["Executor", "the person named in a will to carry out your wishes and settle your estate."], ["Guardian", "a person named to care for a child under 18."]],
          slides: [
            { title: "Estate planning is deciding ahead", bullets: ["What happens to your things when you die", "Who decides for you if you are too sick"] },
            { title: "A will", bullets: ["Says who gets your belongings", "Names an executor", "Can name a guardian for children in your care"] },
            { title: "Without a will", bullets: ["The law where you live decides", "A court picks who handles it", "It may not be what you wanted"] },
            { title: "Rules differ by place", bullets: ["Each state and country has its own rules", "Prepare here; make it legal with a lawyer or legal aid"] }
          ],
          sources: [{ name: "LawHelp.org: find free legal help and information in your state", url: "https://www.lawhelp.org/" }],
          tryIt: "Write down three things that matter most to you to pass on, such as a home, savings, a family Bible, a car or a pet's care, and who you would want to have each one. This is a private list for you, not a legal document.",
          youCanNow: "explain what a will and an executor are, and why a will must follow the rules where you live.",
          quickCheck: [
            { objective: "O1", q: "What is an executor?", options: ["The person who carries out the wishes in your will", "A judge", "A bank account", "Your doctor"], answer: 0, why: "The executor carries out your wishes, pays final bills and hands out what is left." },
            { objective: "O1", q: "Your friend says, \"I don't need a will; my family will sort it out.\" What could happen without one?", options: ["Nothing changes", "The family votes", "The law where they live decides who inherits, which may not match their wishes", "The bank keeps everything"], answer: 2, why: "Without a will, the law decides who inherits and a court picks who handles the estate." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Checking your beneficiaries",
          minutes: 5,
          goal: "Find every account or policy that has a beneficiary and check who is named.",
          text: [
            "Some money does not go through your will at all. Life insurance, many retirement accounts and pensions, and some bank accounts let you name a beneficiary: the person who gets that money when you die. These forms usually control who gets that money, even if your will says something different.",
            "That is why old forms cause problems. A life insurance policy might still name a former spouse, or a parent who has passed away, or a child before the grandchildren were born.",
            "Make a list of every account and policy you have. For each one, ask the company or check your online account to see who is named as the beneficiary and the backup (often called the contingent beneficiary). Update any that are wrong using the company's own form.",
            "Review your beneficiaries after big life events: a marriage, a divorce, a death, a birth or a new grandchild. Ask a lawyer before naming a minor child or a person who gets disability benefits, because there can be special rules."
          ],
          steps: ["List every life insurance policy, retirement account, pension and bank account.", "For each, find out who is named as beneficiary and as backup.", "Mark any that are out of date.", "Update them with the company's own form.", "Review again after a marriage, divorce, death or birth."],
          words: [["Beneficiary", "the person you name to receive money from an account or policy when you die."], ["Contingent beneficiary", "the backup who receives the money if the first beneficiary has died."], ["Life event", "a big change like a marriage, divorce, death or birth."]],
          slides: [
            { title: "Some money skips the will", bullets: ["Life insurance, many retirement accounts", "Some bank accounts", "The beneficiary form usually decides"] },
            { title: "Old forms cause problems", bullets: ["A former spouse still named", "A person who has died", "New grandchildren left out"] },
            { title: "Check every one", bullets: ["List your accounts and policies", "Find the named and backup beneficiary", "Update with the company's form"] },
            { title: "Review after life events", bullets: ["Marriage, divorce, death, birth", "Ask a lawyer about minors or disability benefits"] }
          ],
          sources: [{ name: "CFPB: Managing someone else's money (guides for families)", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }],
          tryIt: "List every account or policy you have that could have a beneficiary. Pick one, check who is named (online, on your paperwork or by calling the company), and write down whether it is still right.",
          youCanNow: "find your accounts that have beneficiaries, check who is named, and know when to update them.",
          quickCheck: [
            { objective: "O2", q: "What is a beneficiary?", options: ["The person who writes your will", "The person named to get the money from an account or policy when you die", "Your lawyer", "Your bank manager"], answer: 1, why: "A beneficiary is the person named on an account or policy to receive that money." },
            { objective: "O2", q: "Your pension form still names your late husband as beneficiary. What do you do?", options: ["Leave it; the will covers it", "Cross out his name on your copy", "Tell a friend", "Update it using the company's own form"], answer: 3, why: "Beneficiary forms usually control who gets that money, so update them with the company's form." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Power of attorney and health care directives",
          minutes: 6,
          goal: "Explain who would decide for you about money and about health care if you could not.",
          text: [
            "A will only works after you die. Other documents protect you while you are alive, if an illness or accident leaves you unable to decide for yourself.",
            "A financial power of attorney names an agent: a person you trust to handle money and property for you, such as paying bills or talking to the bank. The Consumer Financial Protection Bureau has free guides for people who are named as agents. Without one, your family may have to go to court to get a guardian or conservator named, which takes time and money.",
            "A health care directive, also called an advance directive, covers medical decisions. A health care power of attorney (or health care proxy) names a person you trust to make health decisions if you cannot. A living will writes down which treatments you would or would not want if you were dying or permanently unconscious, such as breathing machines or tube feeding.",
            "Choose people who are trustworthy, live close enough or can be reached, and will follow your wishes, not their own. Name a backup for each. Then talk with them, and with your doctor, about what you want. The forms and rules differ by state and country, so get them from a lawyer, legal aid, your doctor's office or hospital, and ask how to sign them correctly."
          ],
          words: [["Power of attorney", "a legal document that lets a person you choose act for you."], ["Agent", "the person you name in a power of attorney."], ["Advance directive", "documents that tell doctors and family your health care wishes and who decides for you."], ["Living will", "a document that says which treatments you want or do not want near the end of life."], ["Health care proxy", "the person you name to make health decisions if you cannot."]],
          slides: [
            { title: "Plans for while you are alive", bullets: ["A will works only after death", "These cover illness or accident"] },
            { title: "Financial power of attorney", bullets: ["Names an agent for money and property", "Pays bills, talks to the bank", "Without one, family may need court"] },
            { title: "Health care directives", bullets: ["Health care proxy: who decides", "Living will: which treatments you want", "Talk with your doctor about them"] },
            { title: "Choose well", bullets: ["Trustworthy and reachable", "Will follow your wishes", "Name a backup; forms differ by state"] }
          ],
          sources: [
            { name: "MedlinePlus: Advance directives", url: "https://medlineplus.gov/advancedirectives.html" },
            { name: "CFPB: Managing someone else's money", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }
          ],
          tryIt: "Write the name of the person you would choose as your financial agent and as your health care proxy, and a backup for each. Next to each name, write one reason you trust them.",
          youCanNow: "explain a financial power of attorney, a health care proxy and a living will, and choose who you trust for each.",
          quickCheck: [
            { objective: "O3", q: "What does a financial power of attorney do?", options: ["Names someone to handle your money and property if you cannot", "Says who gets your house when you die", "Lists your medicines", "Closes your bank account"], answer: 0, why: "A financial power of attorney names an agent to manage money for you while you are alive." },
            { objective: "O3", q: "You are choosing a health care agent. Who is the best choice?", options: ["The relative who argues most", "Someone you have not seen in years", "A trusted person you can reach who will follow your wishes, with a backup", "Whoever asks first"], answer: 2, why: "Choose someone trustworthy, reachable and willing to follow your wishes, and name a backup." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Know the documents",
        questions: [
          { objective: "O1", q: "What does an executor do?", options: ["Carries out the wishes in your will and settles your estate", "Writes your medical records", "Sells you insurance", "Decides your Medicare plan"], answer: 0, why: "The executor is named in the will to carry out your wishes." },
          { objective: "O1", q: "What can happen if you die without a will?", options: ["Nothing happens to your belongings", "Your bank keeps everything", "The law where you live decides who inherits", "Your neighbor chooses"], answer: 2, why: "Without a will, state or national law and a court decide." },
          { objective: "O2", q: "Your will leaves everything to your daughter, but your life insurance form still names your ex-husband. Who usually gets the insurance?", options: ["Your daughter", "The court", "The insurance agent", "The person named on the beneficiary form"], answer: 3, why: "Beneficiary forms usually control that money, even if the will says something different." },
          { objective: "O3", q: "Which document names someone to make medical decisions if you cannot?", options: ["A bank statement", "A health care proxy or health care power of attorney", "A beneficiary form", "A grocery list"], answer: 1, why: "A health care proxy is the person you name for health decisions." },
          { objective: "O1", q: "Why do you need a lawyer or legal aid to finish these documents?", options: ["Because AI tools are not allowed to read them", "Because they must be typed", "Because the rules for making them legal differ by state and country", "Because only lawyers can own a home"], answer: 2, why: "A document that does not follow local rules may not count." }
        ]
      }
    },
    {
      name: "Chapter 2: Prepare and organize",
      lessons: [
        {
          objectives: ["O4"],
          title: "Listing what you own and what you owe",
          minutes: 5,
          goal: "Make a simple list of your assets and debts that a lawyer and your family can use.",
          text: [
            "Before you meet a lawyer, make a list of what you own and what you owe. This list helps the lawyer give good advice, and later helps your executor find everything.",
            "What you own (assets): bank and credit union accounts, retirement accounts and pensions, life insurance, your home or land, vehicles, valuable belongings, and things with family value such as jewelry or photos. Also list online accounts such as email and photo storage, and any pets that need a new home.",
            "What you owe (debts): a mortgage, car loan, credit cards, medical bills and any personal loans.",
            "For each item, write the company and the kind of account, but not full account numbers or passwords. Write \"ends in 1234\" instead. Keep this list somewhere safe. Do not type it into an AI assistant or email it to anyone who has not been chosen to help you."
          ],
          steps: ["Write a heading: What I own. List accounts, policies, property, vehicles and valued items.", "Add online accounts and pets.", "Write a heading: What I owe. List each debt and who it is with.", "Use only the last four digits of any number, and never write passwords on this list.", "Store it in a safe place."],
          words: [["Asset", "something you own that has value, like money, a home or a car."], ["Debt", "money you owe, like a mortgage or credit card."], ["Inventory", "a full list of what you have."]],
          slides: [
            { title: "Why make the list", bullets: ["Helps your lawyer advise you", "Helps your executor find everything"] },
            { title: "What you own", bullets: ["Accounts, pensions, life insurance", "Home, land, vehicles, valued items", "Online accounts and pets"] },
            { title: "What you owe", bullets: ["Mortgage, car loan, credit cards", "Medical bills, personal loans"] },
            { title: "Keep it private", bullets: ["Only the last four digits", "No passwords on the list", "Never paste it into an AI tool"] }
          ],
          tryIt: "Start your list now on paper: write at least five things you own and every debt you have, with the company name and only the last four digits of any number.",
          youCanNow: "make a private, organized list of what you own and owe for your lawyer and family.",
          quickCheck: [
            { objective: "O4", q: "What are your assets?", options: ["Your debts", "Your doctors", "Your questions for a lawyer", "What you own, such as accounts, property and valued items"], answer: 3, why: "Assets are what you own; debts are what you owe." },
            { objective: "O4", q: "You are writing your savings account on your list. How do you write the number?", options: ["The full number and password", "\"Ends in 1234\"", "The full number only", "Leave the account off"], answer: 1, why: "Write only the last four digits, and never write passwords on the list." }
          ]
        },
        {
          objectives: ["O5","O3"],
          title: "Getting ready for a lawyer or legal aid",
          minutes: 5,
          goal: "Find legal help near you and prepare the choices and questions to bring.",
          text: [
            "Estate planning help does not have to be expensive. Free or low-cost help may come from legal aid groups, senior legal services, law school clinics and volunteer lawyer programs. LawHelp.org lets you choose your state to find free legal help from nonprofit legal aid. The Eldercare Locator (1-800-677-1116) connects older adults and families to local services; ask them about legal help for seniors near you. Your state or local bar association may also have a lawyer referral service.",
            "Online will forms and kits exist, but a form that does not match your state's rules, or your family's situation, can fail. A lawyer or legal aid can tell you whether a simple form is enough for you or not.",
            "Bring what you prepared: your list of what you own and owe, your beneficiary check, and the people you chose for executor, guardian, financial agent and health care proxy, with backups. Also bring questions.",
            "Good questions: Do I need a will, a trust, or both? How should my will be signed and witnessed here? What happens to my home? What should I do about a grandchild in my care? What will this cost, and what is included? An AI assistant can help you write your questions in clear words, but leave out names and numbers, and let the lawyer give the legal answers."
          ],
          steps: ["Go to LawHelp.org and choose your state, or call the Eldercare Locator.", "Ask about free or low-cost estate planning for seniors.", "Gather your lists and the people you chose.", "Write at least five questions.", "Ask what it will cost and what is included before you start."],
          words: [["Legal aid", "free legal help from nonprofit groups for people who qualify."], ["Lawyer referral service", "a service, often from a bar association, that connects you to a lawyer."], ["Trust", "a legal arrangement where a person manages property for others; a lawyer can say whether you need one."]],
          slides: [
            { title: "Where to find help", bullets: ["LawHelp.org: choose your state", "Eldercare Locator: 1-800-677-1116", "Bar association lawyer referral"] },
            { title: "Careful with kits", bullets: ["A form must fit your state's rules", "Ask a lawyer whether a simple form is enough"] },
            { title: "Bring your preparation", bullets: ["What you own and owe", "Beneficiary check", "People you chose, with backups"] },
            { title: "Bring questions", bullets: ["Will, trust or both?", "How is it signed and witnessed here?", "What will it cost?"] }
          ],
          sources: [
            { name: "LawHelp.org: Find free legal help", url: "https://www.lawhelp.org/" },
            { name: "Eldercare Locator (Administration for Community Living)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Go to LawHelp.org, choose your state and find one legal aid group or senior legal service near you. Write its name and phone number, and write five questions you would ask it.",
          youCanNow: "find free or low-cost legal help near you and come to the meeting prepared.",
          quickCheck: [
            { objective: "O5", q: "What is LawHelp.org?", options: ["A site to find free legal help from nonprofit legal aid in your state", "An online will kit", "A bank", "A government benefits office"], answer: 0, why: "LawHelp.org lets you choose your state to find free legal help." },
            { objective: "O5", q: "You want AI to help write your questions for the lawyer. What do you leave out?", options: ["The word \"will\"", "Your questions", "Names and account numbers", "The word \"cost\""], answer: 2, why: "AI can help with clear wording, but leave out names and numbers and let the lawyer answer." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Organizing and storing your important papers",
          minutes: 5,
          goal: "Put your papers in one safe place and tell the right people where they are.",
          text: [
            "A plan only helps if people can find it. Many families search for days for a will, an insurance policy or the deed to a house. You can spare them that.",
            "Make one folder or binder. Put in it, or write where to find: your will and other legal documents, your power of attorney and health care directive, your list of what you own and owe, insurance policies, deeds and titles, your Medicare or other health cards (copies), and a contact list: your lawyer, doctor, bank and the people you named.",
            "Ask your lawyer where the signed original of your will should be kept, because the rules and choices differ. Give a copy of your health care directive to your health care proxy and your doctor, so it is there in an emergency. Keep the binder in a safe place at home that your executor knows about.",
            "Write a one-page \"where my papers are\" note and give it to the people you named. Review everything every few years and after big life events. When you change something, tell your family, and remove old versions so nobody uses the wrong one."
          ],
          steps: ["Make one binder or folder for important papers.", "Add each document, or a note saying where it is.", "Ask your lawyer where to keep the original will.", "Give your health care directive to your proxy and your doctor.", "Write a \"where my papers are\" note and share it with the people you named.", "Review after big life events and remove old versions."],
          words: [["Original", "the signed document itself, not a copy."], ["Deed", "the legal paper that shows who owns a home or land."], ["Title", "the paper that shows who owns a vehicle."]],
          slides: [
            { title: "People must be able to find it", bullets: ["Families can search for days", "One binder spares them"] },
            { title: "What goes in the binder", bullets: ["Will, power of attorney, health directive", "Your list of what you own and owe", "Policies, deeds, titles, contacts"] },
            { title: "Where to keep things", bullets: ["Ask your lawyer about the original will", "Health directive: to your proxy and doctor", "Binder: a safe place your executor knows"] },
            { title: "Tell and review", bullets: ["Share a \"where my papers are\" note", "Review after life events", "Remove old versions"] }
          ],
          sources: [{ name: "MedlinePlus: Advance directives", url: "https://medlineplus.gov/advancedirectives.html" }],
          tryIt: "Final task: build your estate-planning folder with your list of what you own and owe, your beneficiary check, the people you would name with backups, at least five questions for a lawyer or legal aid, and a one-page \"where my papers are\" note. Then find one legal help office near you and write down how to contact it.",
          youCanNow: "organize your important papers, store them safely and tell the right people where they are.",
          quickCheck: [
            { objective: "O6", q: "Why give a copy of your health care directive to your doctor?", options: ["So it is there in an emergency", "So the doctor can change it", "To pay less for care", "It is not needed"], answer: 0, why: "Your proxy and doctor need a copy so it is available when it matters." },
            { objective: "O6", q: "You updated your will. What do you do with the old version?", options: ["Keep both in the binder", "Mail the old one to a relative", "Hide the new one", "Follow your lawyer's advice and make sure nobody uses the old one"], answer: 3, why: "Remove old versions so nobody uses the wrong one, and tell your family about the change." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Prepare and organize",
        questions: [
          { objective: "O4", q: "How should account numbers appear on your list of what you own?", options: ["The full number and password", "Only the last four digits, no passwords", "Written on the outside of the folder", "Posted online for your family"], answer: 1, why: "The last four digits identify the account without exposing it." },
          { objective: "O4", q: "Which is a debt?", options: ["Your savings account", "Your car", "A life insurance policy", "A credit card balance"], answer: 3, why: "A debt is money you owe." },
          { objective: "O5", q: "Where can you look for free legal help in your state?", options: ["LawHelp.org", "A random online ad", "A text message link", "A social media comment"], answer: 0, why: "LawHelp.org lists nonprofit legal aid by state." },
          { objective: "O6", q: "Who should get a copy of your health care directive?", options: ["Nobody", "Your bank teller", "Your health care proxy and your doctor", "A stranger online"], answer: 2, why: "They need it to follow your wishes in an emergency." },
          { objective: "O6", q: "You changed your will. What should you do with the old version?", options: ["Keep both in the binder with no note", "Give it to a neighbor", "Hide it in a different room", "Follow your lawyer's advice and make sure nobody uses the old one"], answer: 3, why: "Old versions can confuse your family; your lawyer can say how to handle them." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Estate Planning and Wills",
    questions: [
      { objective: "O1", q: "Your estate is:", options: ["Only your house", "Only your bank account", "Your garden", "Everything you own, minus what you owe"], answer: 3, why: "An estate includes all your property, minus debts." },
      { objective: "O1", q: "A will mainly says:", options: ["Which doctor you see", "Who gets your belongings and who carries out your wishes", "Your monthly budget", "Your Medicare plan"], answer: 1, why: "A will names who inherits and an executor." },
      { objective: "O1", q: "A grandmother is raising her two grandchildren. What can a will often do for them?", options: ["Nothing", "Pay their school fees automatically", "Name a guardian for them", "Change their birth certificates"], answer: 2, why: "In many places a will can name a guardian for children under 18." },
      { objective: "O1", q: "Why might a will written on a free form fail?", options: ["It may not follow the signing and witness rules where you live", "Free forms are always illegal", "Wills must be in color", "It is too short"], answer: 0, why: "Each state and country has its own rules for a valid will." },
      { objective: "O2", q: "Life insurance usually goes to:", options: ["Whoever the will names", "The executor", "The person named on the beneficiary form", "The government"], answer: 2, why: "Beneficiary forms usually control that money." },
      { objective: "O2", q: "When should you review your beneficiaries?", options: ["Never", "Only once when you open the account", "Only when the company calls", "After a marriage, divorce, death or birth"], answer: 3, why: "Life events are when forms go out of date." },
      { objective: "O2", q: "A contingent beneficiary is:", options: ["The backup if the first beneficiary has died", "Your lawyer", "Your doctor", "The bank manager"], answer: 0, why: "The contingent beneficiary is the backup." },
      { objective: "O3", q: "A financial power of attorney names someone to:", options: ["Make medical decisions", "Handle your money and property if you cannot", "Read your will out loud", "Choose your church"], answer: 1, why: "The agent acts for you on money matters." },
      { objective: "O3", q: "Without a financial power of attorney, if you cannot manage money, your family may need to:", options: ["Do nothing", "Go to court to get a guardian or conservator named", "Call a radio station", "Close all your accounts"], answer: 1, why: "Court can be slow and costly; a power of attorney avoids it." },
      { objective: "O3", q: "A living will says:", options: ["Who gets your house", "Your bank balance", "Which treatments you want or do not want near the end of life", "Your grocery list"], answer: 2, why: "A living will records your treatment wishes." },
      { objective: "O3", q: "Who is a good choice for health care proxy?", options: ["Someone who will follow their own wishes", "A stranger who calls you", "Anyone who asks", "A trusted, reachable person who will follow your wishes"], answer: 3, why: "Your proxy must speak for you, not for themselves." },
      { objective: "O3", q: "Besides your lawyer, who should you talk with about your health care wishes?", options: ["Your doctor and your health care proxy", "A sales caller", "Nobody", "A social media group"], answer: 0, why: "They are the ones who will act on your wishes." },
      { objective: "O4", q: "Which belongs on your list of what you own?", options: ["Your full password", "Your neighbor's car", "Your PIN", "Your home, accounts, vehicles and valued items"], answer: 3, why: "List assets with the company and last four digits, not passwords." },
      { objective: "O4", q: "Should you paste your full list of accounts into an AI assistant?", options: ["Yes, to save time", "No; keep private details out of AI tools", "Yes, if the AI asks", "Only on a library computer"], answer: 1, why: "Never type private numbers or account details into AI tools." },
      { objective: "O5", q: "What phone number reaches the Eldercare Locator?", options: ["1-800-677-1116", "911", "1-800-MEDICARE", "411"], answer: 0, why: "The Eldercare Locator connects older adults to local services." },
      { objective: "O5", q: "Before you hire a lawyer, a smart question is:", options: ["What is your favorite color?", "Can you guess my wishes?", "What will this cost, and what is included?", "Can I skip signing?"], answer: 2, why: "Knowing the cost up front avoids surprises." },
      { objective: "O5", q: "What is a good use of an AI assistant in estate planning?", options: ["Writing your legal will alone", "Helping you write your questions in clear words, without names or numbers", "Storing your passwords", "Deciding who inherits"], answer: 1, why: "AI can help with wording, but legal answers come from a lawyer." },
      { objective: "O6", q: "Where should the signed original will be kept?", options: ["Wherever, it does not matter", "In the car", "Thrown away after copying", "Where your lawyer advises, and your executor should know"], answer: 3, why: "Rules and choices differ; ask your lawyer." },
      { objective: "O6", q: "A \"where my papers are\" note should go to:", options: ["Everyone online", "Nobody", "The people you named in your plan", "A sales caller"], answer: 2, why: "The people who will act for you need to find your papers." },
      { objective: "O1", q: "Estate planning laws:", options: ["Are different in each state and country", "Are the same everywhere in the world", "Never change", "Only apply to rich people"], answer: 0, why: "Rules vary by place, so see a lawyer or legal aid where you live." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      4,
      7,
      9,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "What I own and owe",
        objective: "O4",
        notYet: "The list is missing major items, or shows full account numbers or passwords.",
        meets: "A list of assets and debts with the company and kind of account, using only the last four digits.",
        exceeds: "Also lists online accounts and pets, and is stored in a safe place."
      },
      {
        name: "Beneficiary check",
        objective: "O2",
        notYet: "Some accounts or policies were not checked.",
        meets: "Every account or policy with a beneficiary is listed, with the named person and backup.",
        exceeds: "Out-of-date forms are marked and the update form has been requested."
      },
      {
        name: "People named",
        objective: "O3",
        notYet: "One or more roles is missing, or there are no backups.",
        meets: "An executor, financial agent and health care agent, each with a backup.",
        exceeds: "Has talked with the people chosen about their role and your wishes."
      },
      {
        name: "Questions for a lawyer",
        objective: "O5",
        notYet: "Fewer than five questions, or no source of legal help.",
        meets: "At least five clear questions, including cost, and one place near you that offers legal help.",
        exceeds: "Has contacted the legal help or booked an appointment."
      },
      {
        name: "Where my papers are",
        objective: "O6",
        notYet: "No note, or it leaves out where key papers are.",
        meets: "A one-page note saying where each important paper is.",
        exceeds: "The note has been given to the people named in the plan."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who update at least one beneficiary form within 60 days (follow-up survey)",
      "Learners who meet a lawyer or legal aid and sign a will, power of attorney or health care directive",
      "Learners who share a \"where my papers are\" note with family"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A folder or binder, paper and pen",
      "The learner's insurance policies, account statements and any existing will or directive (kept private)",
      "A phone or computer to find legal help on LawHelp.org or call the Eldercare Locator",
      "About 60 minutes in total, in short, relaxed sessions, plus time at home to gather papers"
    ],
    facilitatorNotes: [
      "Do not give legal advice or help write a will; the course prepares learners for a lawyer or legal aid.",
      "Learners keep their own papers private; never collect account numbers or documents.",
      "Some learners may be grieving or uneasy talking about death; keep the tone gentle and practical.",
      "Find local legal aid or senior legal services before the session so learners leave with a real contact.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
