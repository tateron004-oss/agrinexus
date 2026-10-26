"use strict";

// Kyro "Coming home" guide, United States federal topics, part A. Every fact is from fact sheets reentry-facts-a.txt and reentry-facts-e.txt (official US government pages read on 26 October 2026).
module.exports = {
  SOURCES: {
    usaSsCard: { name: "USAGov: How to get, replace, or correct a Social Security card (updated January 16, 2026)", url: "https://www.usa.gov/social-security-card" },
    ssaReplace: { name: "Social Security Administration: Replace Social Security card (no date shown)", url: "https://www.ssa.gov/number-card/replace-card" },
    cfr422103: { name: "Code of Federal Regulations, 20 CFR 422.103: Replacement of social security number card (current as of 20 October 2026)", url: "https://www.ecfr.gov/" },
    cfr422107: { name: "Code of Federal Regulations, 20 CFR 422.107: Evidence requirements (current as of 20 October 2026)", url: "https://www.ecfr.gov/" },
    ssaReentry: { name: "Social Security Administration: Transitioning From Incarceration, Statewide Prerelease Agreements (no date shown)", url: "https://www.ssa.gov/reentry/" },
    ssaBenefits: { name: "Social Security Administration: Benefits after Incarceration, What You Need To Know (no date shown)", url: "https://www.ssa.gov/reentry/benefits.htm" },
    usaBirth: { name: "USAGov: How to get a certified copy of a U.S. birth certificate (updated November 17, 2025)", url: "https://www.usa.gov/birth-certificate" },
    usaReplaceDocs: { name: "USAGov: How to replace lost or stolen ID cards (updated November 17, 2025)", url: "https://www.usa.gov/replace-vital-documents" },
    usaMvs: { name: "USAGov: State motor vehicle services (no date shown)", url: "https://www.usa.gov/state-motor-vehicle-services" },
    usaRealId: { name: "USAGov: How to get a REAL ID and use it for travel (updated April 6, 2026)", url: "https://www.usa.gov/real-id" },
    cfpbReentry: { name: "Consumer Financial Protection Bureau: Your Money, Your Goals, Focus on Reentry companion guide (published July 2021)", url: "https://files.consumerfinance.gov/f/documents/cfpb_ymyg_reentry_supplement.pdf" },
    snapElig: { name: "U.S. Department of Agriculture: SNAP Eligibility (page updated October 1, 2026)", url: "https://www.fns.usda.gov/snap/recipient/eligibility" },
    snapDirectory: { name: "U.S. Department of Agriculture: SNAP State Directory of Resources (page updated January 30, 2025)", url: "https://www.fns.usda.gov/snap/state-directory" },
    usaFood: { name: "USAGov: How to apply for food stamps (SNAP benefits) and check your balance (updated December 23, 2025)", url: "https://www.usa.gov/food-stamps" },
    cfr27311: { name: "Code of Federal Regulations, 7 CFR 273.11: Action on households with special circumstances (current as of 20 October 2026)", url: "https://www.ecfr.gov/" },
    snapStateOptions: { name: "U.S. Department of Agriculture: SNAP State Options Report, 17th Edition, Drug Felony Disqualifications (August 2025; data reference period October 2024)", url: "https://www.fna.usda.gov/sites/default/files/resource-files/snap-stateOptionsReport-17edition-120925.pdf" },
    hcgIncarcerated: { name: "HealthCare.gov: Health coverage options for incarcerated people (no date shown)", url: "https://www.healthcare.gov/incarcerated-people/" },
    cmsAssisters: { name: "Centers for Medicare and Medicaid Services: Incarcerated and Recently Released Consumers, fact sheet for assisters (January 2024)", url: "https://www.cms.gov/marketplace/technical-assistance-resources/incarcerated-and-recently-released-consumers.pdf" },
    cmsGuide: { name: "Centers for Medicare and Medicaid Services: Returning to the Community, Health Care After Incarceration (April 2024)", url: "https://www.cms.gov/files/document/returning-community-health-care-after-incarceration-guide-health-care-reentry-english.pdf" },
    cmsPress: { name: "Centers for Medicare and Medicaid Services: HHS Authorizes Five States to Provide Historic Health Care Coverage for People Transitioning out of Incarceration (July 2, 2024)", url: "https://www.cms.gov/newsroom/press-releases/hhs-authorizes-five-states-provide-historic-health-care-coverage-people-transitioning-out" },
    usaMedicaid: { name: "USAGov: How to apply for Medicaid and CHIP (updated August 11, 2026)", url: "https://www.usa.gov/medicaid-chip-insurance" },
    hudPhog: { name: "U.S. Department of Housing and Urban Development: Public Housing Occupancy Guidebook, Eligibility Determination and Denial of Assistance (June 2022)", url: "https://www.hud.gov/sites/dfiles/PIH/documents/PHOG_Eligibility_Det_Denial_Assistance.pdf" },
    hudHcv: { name: "U.S. Department of Housing and Urban Development: Housing Choice Voucher Program Guidebook, Eligibility Determination and Denial of Assistance (November 2019)", url: "https://www.hud.gov/sites/dfiles/PIH/documents/HCV_Guidebook_Eligibility_Determination_and_Denial_of_Assistance.pdf" },
    hudHelping: { name: "U.S. Department of Housing and Urban Development: Helping Americans, I am homeless and need shelter and supportive services (no date shown)", url: "https://www.hud.gov/helping-americans" },
    usaEmergHousing: { name: "USAGov: Get emergency housing (updated April 15, 2026)", url: "https://www.usa.gov/emergency-housing" },
    cfpbChecklist: { name: "Consumer Financial Protection Bureau: Checklist for opening a bank or credit union account (no date shown)", url: "https://files.consumerfinance.gov/f/documents/cfpb_adult-fin-ed_checklist-for-opening-an-account.pdf" },
    fdicOpen: { name: "Federal Deposit Insurance Corporation: How To Open a Checking or Savings Account at an FDIC-Insured Bank (no date shown; file placed under 2024-05)", url: "https://www.fdic.gov/system/files/2024-05/how-to-open-a-bank-account.pdf" },
    cfpbSecondChance: { name: "Consumer Financial Protection Bureau: What is a second-chance bank account and who is it for? (last reviewed September 13, 2024)", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-second-chance-bank-account-and-who-is-it-for-en-2153/" },
    cfpbDenied: { name: "Consumer Financial Protection Bureau: Why was I denied a checking account? (last reviewed December 18, 2024)", url: "https://www.consumerfinance.gov/ask-cfpb/why-was-i-denied-a-checking-account-en-1113/" },
    cfpbCheck: { name: "Consumer Financial Protection Bureau: Can I cash a check at any bank or credit union? (last reviewed December 18, 2024)", url: "https://www.consumerfinance.gov/ask-cfpb/can-i-cash-a-check-at-any-bank-or-credit-union-en-931/" },
    cfpbPrepaid: { name: "Consumer Financial Protection Bureau: What types of fees do prepaid cards typically charge? (last reviewed October 31, 2024)", url: "https://www.consumerfinance.gov/ask-cfpb/what-types-of-fees-do-prepaid-cards-typically-charge-en-2053/" },
    ftcAvoidScam: { name: "Federal Trade Commission: How To Avoid a Scam (July 2023)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" },
    identityTheftGov: { name: "Federal Trade Commission: IdentityTheft.gov home page (no date shown)", url: "https://www.identitytheft.gov/" },
    dojFines: { name: "U.S. Department of Justice: Dear Colleague Letter to Courts Regarding Fines and Fees (April 20, 2023; page marked archived content)", url: "https://www.justice.gov/opa/press-release/file/1580546/dl" }
  },

  TOPICS: {
    "reentry-start": {
      title: "Coming home: the first things the pages cover",
      kind: "reentry",
      sources: ["cfpbReentry", "snapElig", "hcgIncarcerated", "ssaBenefits", "hudHelping", "cfpbChecklist"],
      text: "Welcome home. Coming home is a lot, and you do not have to do it all at once. You do not need to tell me about your case. I can walk you through any step, one at a time, or read the official page with you. The pages I read cover these things. Papers that prove who you are, like a Social Security card, a birth certificate and a state ID. Many things need them, like a job, benefits and a bank account. Food help, which is called SNAP. Health coverage, like Medicaid, and the dates to watch after release. Money from Social Security and from Supplemental Security Income, which may start again after release. Housing, including what a housing office may look at and where to call about a shelter. A bank account, and how to stay safe from money scams. Money you may owe from a court case. I only say what official government pages said. I tell you when a page is old or does not cover your question. I am not a lawyer or a case manager. Which one would you like to start with?"
    },

    "reentry-ssn-card": {
      title: "Replacing a Social Security card",
      kind: "reentry",
      sources: ["usaSsCard", "ssaReplace", "cfr422103", "cfr422107", "ssaReentry"],
      text: "You can ask for a free replacement card. Social Security does not charge. Depending on your case, you may be able to start online. If not, you need an appointment at a local Social Security office. When the request is done, the card comes by mail in 5 to 10 business days. You may not need a new card if you know your number. The page says in most cases a card is not needed. The office cannot print one for you. You do not need to tell me your number. Please do not say it or type it to me. You can also call 1-800-772-1213 and say you want a replacement card. The page lists Monday to Friday, 8 a.m. to 7 p.m. For people who are deaf or hard of hearing, the line is 1-800-325-0778. You must show papers that prove who you are. A driver's license, state ID, school record, medical record, marriage record or passport can work. A birth record alone does not prove who you are. Papers must be originals, or copies certified by the office that holds the original. The rules allow 3 replacement cards a year and 10 in a lifetime. The rules also allow exceptions in hardship cases. Some prisons have an agreement with Social Security, so a person can ask before release. I do not know which ones. The pages do not say if a library computer is safe for this. Want me to walk you through the first step?"
    },

    "reentry-id": {
      title: "Birth certificate, state ID and REAL ID",
      kind: "reentry",
      sources: ["usaBirth", "usaReplaceDocs", "usaMvs", "usaRealId", "cfpbReentry"],
      text: "Many places want proof of who you are. For a birth certificate, contact the vital records office in the state where you were born. You need to know the city and county. The page gives no fee or wait time. If you lost all your ID, ask that office what it accepts. The page says most states have another way to check who you are. One way is a sworn statement. Another is a notarized letter and a copy of the photo ID of a parent on your birth certificate. The page also says that if you cannot get a birth certificate, try to replace your driver's license first. For a state ID or driver's license, contact your state motor vehicle office. Your state decides the steps and the papers. In most cases it asks for proof of who you are, proof of your Social Security number, and proof you live in the state, like a lease, a utility bill or a bank statement. A 2021 guide says some states give ID cards free or for a lower fee. It also says some states limit getting a license or ID if you owe court debt, so ask about a payment plan. A card with a star in the top right corner is a REAL ID. You can still get an ID that is not a REAL ID. Without a REAL ID, you cannot use the card to enter federal buildings. For flying, a passport also works. Which would you like to start with?"
    },

    "reentry-snap": {
      title: "Food help (SNAP) and drug convictions",
      kind: "reentry",
      sources: ["snapElig", "snapDirectory", "usaFood", "cfr27311", "snapStateOptions"],
      text: "SNAP is food help. It comes on a card that works like a debit card. You apply in the state where you live. You can use the local SNAP office, the state website, or the state's toll-free hotline. In most cases the state sends a notice within 30 days, and you do an interview. Federal law says a person with a felony conviction that involved drugs, for something after August 22, 1996, can be left out of SNAP. But each state's lawmakers can opt out or soften that rule. So the state you live in decides. The rest of your household can still apply. You do not need to tell me about your case. This list is from a report with data from October 2024, so a state may have changed. No ban: Arkansas, Delaware, District of Columbia, Illinois, Iowa, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Mississippi, Nevada, New Hampshire, New Mexico, New York, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Dakota, Utah, Vermont, Virgin Islands, Virginia, Washington, Wyoming. A softer rule: Alabama, Alaska, Arizona, California, Colorado, Connecticut, Florida, Georgia, Guam, Hawaii, Idaho, Indiana, Kansas, Michigan, Minnesota, Missouri, Montana, Nebraska, New Jersey, North Carolina, Tennessee, Texas, West Virginia, Wisconsin. A lifetime ban: South Carolina. The report does not say what each softer rule is. Ask your state SNAP office what applies to you."
    },

    "reentry-health": {
      title: "Health coverage after release",
      kind: "reentry",
      sources: ["hcgIncarcerated", "cmsAssisters", "cmsGuide", "cmsPress", "usaMedicaid"],
      text: "You can get health coverage after release. The first thing to know is the 60 day window. After release you get a Special Enrollment Period at HealthCare.gov. That means 60 days to pick a plan. If you miss it, you generally wait for the next yearly Open Enrollment, unless something like moving or losing coverage lets you sign up. Tell them you are out as soon as you can, within 30 days. A page says people on probation, parole or in a halfway house are generally not counted as incarcerated for the Marketplace. Help line: 1-800-318-2596, or the website localhelp.healthcare.gov. Medicaid is the second way. You can apply at any time, before, during or after incarceration. Many adults qualify by income, including adults without children. Medicaid does not need a fixed home address, but you must give an address where you can be reached. Each state runs its own Medicaid. Some states are approved for programs that cover some care in the 90 days before release. A 2024 page says this. The pages do not say how a person asks. Ask the state Medicaid office or the prison staff. If you had Medicare, call Social Security at 1-800-772-1213 when you are released. To join a Medicare Advantage or drug plan, the time is the first two full months after the month of release. If you are in crisis, call or text 988. If you are in danger, call 911."
    },

    "reentry-ssi-ssdi": {
      title: "Social Security and SSI payments after release",
      kind: "reentry",
      sources: ["ssaBenefits", "ssaReentry"],
      text: "Social Security payments can stop while a person is locked up. They can start again. You need proof of release. Social Security stops when a person is held more than 30 days in a row after a conviction. A spouse or children can still get theirs. SSI, which is money for people who are 65 or older, blind, or have a disability and have little money, stops after a full calendar month. To restart Social Security, go to your local Social Security office with proof of release. Payments can restart from the month of release. The page also says release does not make you eligible on its own, and some checks start the month after. SSI can restart the month you get out. If you were held 12 months in a row or more, you must apply again and be approved again. If your prison has a prerelease agreement with Social Security, you or the prison's staff can start 90 days before your release date. If not, call 1-800-772-1213, ask for an appointment, say you were released, and bring your official release papers. The page lists Monday to Friday, 7 a.m. to 7 p.m. The deaf line is 1-800-325-0778. In a halfway house run by a state corrections department, there are no payments while you live there. At home with an ankle monitor, payments can start once you tell the local office. Medicare Part A goes on. Part B ends unless you keep paying the monthly payment, called the premium. If it ended, you can sign up from January to March. You may owe past premiums and a late penalty. Ask about a special sign-up window."
    },

    "reentry-housing": {
      title: "Public housing, vouchers and a place to stay",
      kind: "reentry",
      sources: ["hudPhog", "hudHcv", "hudHelping", "usaEmergHousing"],
      text: "Public housing and housing vouchers are run by a local public housing agency. The federal housing department, called HUD, sets the rules. These are HUD guides from 2022 and 2019. HUD says agencies should balance safety with the needs of people coming home. It encourages them to let a person rejoin family when that fits. An agency may admit a person with a record. It cannot turn you down only for an arrest. If it plans to deny you for a conviction, it must tell you, let you dispute the record, and give you a copy. It looks at how long ago, what happened and how serious it was. It may also look at things in your favor, like joining counseling. In some cases the agency must say no. These include making methamphetamine on federally assisted housing property, a rule to register for life for a sex offense, using illegal drugs now, or being evicted from federal housing for a drug crime in the last three years. Each agency may add stricter rules. Ask yours for its written rules. The pages I read say little about private landlords. HUD also says to apply for the Housing Choice Voucher Program for rental help. For a place to sleep, dial 2-1-1 and press 6 for homeless services. If that does not work, go to 211.org/about-us/your-local-211 and type your zip code. In danger, call 911."
    },

    "reentry-bank": {
      title: "Opening a bank account and avoiding money traps",
      kind: "reentry",
      sources: ["cfpbChecklist", "fdicOpen", "cfpbSecondChance", "cfpbDenied", "cfpbCheck", "cfpbPrepaid", "cfpbReentry", "ftcAvoidScam", "identityTheftGov"],
      text: "You can open a bank or credit union account. Most places want a first deposit, often 25 to 100 dollars. The bank must check your name, birth date, address and an ID number. Many ask for a photo ID, like a driver's license, state ID, passport or military ID. Some also ask for a second paper, like a Social Security card, a bill with your name and address, or a birth certificate. If you do not have what they ask for, ask how else you can show who you are. A second-chance account has fewer services and lower fees. It is for people with trouble in their banking history, like a closed account or bounced checks. The page does not say that a criminal record itself blocks an account. Each bank sets its own rules. If you are turned down, you can ask for your free checking account report and fix errors. You can also ask the bank about other accounts, or try a credit union. A bank does not have to cash your check. Prepaid cards and check cashing can have many fees, so read the fee chart on the package. A guide says if you are given a prepaid card when you leave prison, register it. Scammers ask you to pay by gift card, wire or payment app. They may pretend to be from the government. The Federal Trade Commission says it will never tell you to move your money to protect it. I cannot check if a library computer is safe for banking."
    },

    "reentry-money-owed": {
      title: "Fines, fees and money owed from a court case",
      kind: "reentry",
      sources: ["cfpbReentry", "dojFines"],
      text: "The pages I read say little about money owed from a court case. They do not say how to get it lowered. A 2021 guide from the Consumer Financial Protection Bureau lists what a person may owe. Examples are jail fees, electronic monitoring fees, restitution, which is money paid to victims, the cost of a public defender, room and board, and fees for probation, parole, drug tests and treatment. The names change by state. The guide warns that not paying can have serious results, even going back to jail or prison. It says this debt can be collected in stronger ways than other debt. It tells people to find out what they owe from the court, their lawyer or their probation officer. Also find out if it went to collections and who has it. It suggests a list of each debt, so you can see which ones have the worst results if unpaid. It says some states limit getting a license or state ID if you owe court debt, so ask about a payment plan. A 2023 letter from the U.S. Department of Justice to courts says a court should check if a person can pay before punishing them. That page is marked archived and may be out of date. It does not bind state courts, so I cannot say it will help you. For your own case, ask legal aid or a lawyer. Your conditions are in your own paperwork. Ask your officer. You do not need to tell me what you owe."
    }
  },

  PHRASES: {
    "reentry-start": [
      "I just got out, where do I even start?",
      "I just came home and I don't know what to do first",
      "What things do I need to take care of now that I'm home?"
    ],
    "reentry-ssn-card": [
      "I lost my social security card, how do I get a new one?",
      "How do I get a new social security card? Is it free?",
      "They took my social security card when I went in. How do I get another?"
    ],
    "reentry-id": [
      "How do I get my birth certificate? I have no ID",
      "I need a state ID, what do I need to bring?",
      "What is a REAL ID and do I need one?"
    ],
    "reentry-snap": [
      "Can I get food stamps with a drug felony?",
      "I need food help. How do I sign up for SNAP?",
      "Does my state let people with a drug conviction get SNAP?"
    ],
    "reentry-health": [
      "How do I get health insurance after I get out?",
      "Can I get Medicaid when I come home from prison?",
      "How long do I have to sign up for health coverage after release?"
    ],
    "reentry-ssi-ssdi": [
      "Can I get my Social Security or SSI back after I get out?",
      "My SSI stopped while I was locked up. How do I start it again?",
      "What do I bring to Social Security to get my check restarted?"
    ],
    "reentry-housing": [
      "Can I live in public housing with a record?",
      "Will a housing voucher turn me down because of my conviction?",
      "I have nowhere to sleep tonight, who do I call?"
    ],
    "reentry-bank": [
      "How do I open a bank account when I just got out?",
      "Can a bank turn me down because of my record?",
      "What is a second chance bank account?"
    ],
    "reentry-money-owed": [
      "I owe fines and fees from my case, what do I do?",
      "What is restitution and do I have to pay it?",
      "Can they take my license because I owe court fees?"
    ]
  },

  KEYS: {
    "reentry-start": "walk you through any step",
    "reentry-ssn-card": "free replacement card",
    "reentry-id": "birth certificate",
    "reentry-snap": "the state you live in decides",
    "reentry-health": "Special Enrollment Period",
    "reentry-ssi-ssdi": "proof of release",
    "reentry-housing": "public housing agency",
    "reentry-bank": "bank or credit union account",
    "reentry-money-owed": "money owed from a court case"
  }
};
