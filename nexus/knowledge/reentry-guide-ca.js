"use strict";

// Kyro "Coming home" guide, California topics. Every fact is from fact sheets D and E (official California and federal pages read on 26 October 2026).
module.exports = {
  SOURCES: {
    dmvIdCards: { name: "California Department of Motor Vehicles: ID Cards (undated)", url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/identification-id-cards/" },
    dmvFees: { name: "California Department of Motor Vehicles: Licensing Fees (undated)", url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/" },
    dmvReducedOrgs: { name: "California Department of Motor Vehicles: Reduced/No Fee ID Card Program Information for Organizations (undated)", url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/reduced-no-fee-id-card-program-information-for-organizations/" },
    cdcrCalId: { name: "California Department of Corrections and Rehabilitation: California Identification Card Program (undated)", url: "https://www.cdcr.ca.gov/rehabilitation/calid/" },
    cdcrCalIdNews: { name: "California Department of Corrections and Rehabilitation: CDCR and DMV update state identification card application process (2 November 2023)", url: "https://www.cdcr.ca.gov/news/2023/11/02/cdcr-and-dmv-update-state-identification-card-application-process/" },
    cdcrReleaseRule: { name: "California Department of Corrections and Rehabilitation: Adopted Regulations, Release Allowance, Title 15 section 3075.2 (final text 17 June 2025)", url: "https://www.cdcr.ca.gov/regulations/wp-content/uploads/sites/171/2025/06/Adopted-Regulations-Release-Allowance.pdf" },
    cdcrOmbuds: { name: "California Department of Corrections and Rehabilitation, Office of the Ombudsman: Parole Assistance (undated)", url: "https://www.cdcr.ca.gov/ombuds/ombuds/parole/" },
    cdphBirth: { name: "California Department of Public Health, Vital Records: Obtaining Certified Copies of Birth Records (undated)", url: "https://www.cdph.ca.gov/Programs/CHSI/Pages/Vital-Records-Obtaining-Certified-Copies-of-Birth-Records.aspx" },
    cdphFees: { name: "California Department of Public Health, Vital Records: Fees (undated)", url: "https://www.cdph.ca.gov/Programs/CHSI/Pages/Vital-Records-Fees.aspx" },
    dhcsLetter: { name: "California Department of Health Care Services: All County Welfare Directors Letter 24-04, written for county workers (29 February 2024)", url: "https://www.dhcs.ca.gov/wp-content/uploads/2025/10/24-04.pdf" },
    dhcsReentry: { name: "California Department of Health Care Services: Justice-Involved Reentry Initiative (undated)", url: "https://www.dhcs.ca.gov/calaim-transforming-medi-cal/justice-involved-reentry-initiative/" },
    dhcsFactSheet: { name: "California Department of Health Care Services: Transformation of Medi-Cal, Justice-Involved fact sheet (undated; file added October 2025)", url: "https://www.dhcs.ca.gov/wp-content/uploads/2025/10/CalAIM-JI-a11y.pdf" },
    dhcsImpact: { name: "California Department of Health Care Services: From Incarceration to Care, Medi-Cal Reentry Initiative Impact Report (March 2026)", url: "https://www.dhcs.ca.gov/wp-content/uploads/2026/05/CA-Reentry-Initiative-Impact-Report-March-2026.pdf" },
    cdssFaq: { name: "California Department of Social Services: H.R.1 and CalFresh Frequently Asked Questions (updated 9 September 2026)", url: "https://www.cdss.ca.gov/benefits-services/food-nutrition-services/calfresh/frequently-asked-questions" },
    cdssAcl: { name: "California Department of Social Services: All County Letter 14-100, written for county workers (19 December 2014)", url: "https://www.cdss.ca.gov/lettersnotices/entres/getinfo/acl/2014/14-100.pdf" },
    cdssQuickRef: { name: "California Department of Social Services, CalFresh outreach toolkit: Regulation Quick Reference for people with a conviction (July 2015)", url: "https://www.cdss.ca.gov/calfreshoutreach/res/pdf/RegulationQuickReference_B_PeoplewithaFelonyConviction.pdf" },
    crdFairChance: { name: "California Civil Rights Department: Criminal History and Employment Fact Sheet, the Fair Chance Act (June 2025)", url: "https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2025/07/Fair-Chance-Act-Factsheet_English.pdf" },
    eddCaljobs: { name: "California Employment Development Department: Step 1, Register in CalJOBS (undated)", url: "https://edd.ca.gov/en/jobs_and_training/step-1-register-in-caljobs/" },
    dojAutoRelief: { name: "California Department of Justice: Automatic Record Relief, Penal Code sections 851.93 and 1203.425 (current as of 2 December 2024)", url: "https://oag.ca.gov/fingerprints/automatic-record-relief-penal-code-sections-851.93-and-1203.425" },
    dojRecordReview: { name: "California Department of Justice: Criminal Records, Request Your Own (undated)", url: "https://oag.ca.gov/fingerprints/record-review" },
    dojFeeWaiver: { name: "California Department of Justice: Apply for a Fee Waiver (undated)", url: "https://oag.ca.gov/fingerprints/record-review/fee-waiver" },
    courtsClean: { name: "California Courts Self Help Guide: Clean your record (undated)", url: "https://selfhelp.courts.ca.gov/clean-your-record" },
    courtsCertificate: { name: "California Courts Self Help Guide: Certificate of Rehabilitation (undated)", url: "https://selfhelp.courts.ca.gov/clean-your-record/certificate-rehabilitation" },
    sosFlyer: { name: "California Secretary of State: Voting Rights Restored, flyer for persons with a prior conviction (undated)", url: "https://elections.cdn.sos.ca.gov/pdfs/voting-rights-persons-with-prior-felony-flyer-en.pdf" },
    sosVoting: { name: "California Secretary of State: Voting Rights Restored (undated)", url: "https://www.sos.ca.gov/elections/voting-rights-restored/" },
    sosProp17: { name: "California Secretary of State: Proposition 17 Official Title and Summary, 2020 voter guide (2020, before the election)", url: "https://vig.cdn.sos.ca.gov/2020/general/pdf/prop17-title-summ-analysis.pdf" },
    cdcrCommunity: { name: "California Department of Corrections and Rehabilitation, Division of Adult Parole Operations: Links available to our Community Resources (30 March 2023)", url: "https://www.cdcr.ca.gov/parole/2023/03/30/links-to-community-resources/" },
    cpucLifeline: { name: "California Public Utilities Commission: California LifeLine Program (undated)", url: "https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/lifeline" },
    cpucEligibility: { name: "California Public Utilities Commission: California LifeLine Eligibility (undated)", url: "https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/lifeline/california-lifeline-eligibility" }
  },

  TOPICS: {
    "ca-reentry-id": {
      title: "California ID card, birth certificate and release money",
      kind: "reentry",
      sources: ["dmvIdCards", "dmvFees", "dmvReducedOrgs", "cdcrCalId", "cdcrCalIdNews", "cdphBirth", "cdphFees", "cdcrReleaseRule", "cdcrOmbuds"],
      text: "A California ID card proves who you are. It does not let you drive. You apply in person at an office of the Department of Motor Vehicles, called the DMV. The regular card costs $40. A reduced-fee card costs $11. If you qualify by income for certain help, ask your county public assistance office for the form. A person who is homeless, as federal law defines it, pays no fee. So does a person 62 or older. The DMV pages list no special fee break for people just released. They give no phone number.\n\nInside prison, the state prison agency, called CDCR, has a program called CAL-ID. An eligible person gets an ID card on release. You need a Social Security number and an earlier California ID or license from the DMV. It is offered within 13 months of release. The email is calidprogram@cdcr.ca.gov.\n\nA birth certificate costs $31 a copy from the state Department of Public Health. You can mail an application with a check or money order. Or you can go to the county office where the birth was recorded. The page does not mention a fee break. The phone for general questions is (916) 558-1784.\n\nRelease money is a different matter. A 2025 CDCR rule says the release allowance is $200, and that release clothing and bus travel are not taken out of it. An older CDCR Ombudsman page says the bus fare is taken out. The two pages disagree. Ask the facility for your release paper, Form 102, and read it. You do not need to tell me any of your numbers. Want me to walk you through one of these?"
    },

    "ca-reentry-medi-cal": {
      title: "Medi-Cal for people leaving prison or jail",
      kind: "reentry",
      sources: ["dhcsLetter", "dhcsReentry", "dhcsFactSheet", "dhcsImpact"],
      text: "Medi-Cal is California's health coverage. Two state pages talk about getting ready before release. They say two different things, so I give each with its source. First, a letter to county offices from the Department of Health Care Services, dated February 29, 2024, says an application should go in at least 135 days before release when the release date is known. Staff at the prison or jail help with it. It asks for your name, birth date, Social Security number and the address where you will live. Joining is voluntary. Being locked up is not by itself a reason to say you cannot have Medi-Cal.\n\nSecond, the department's reentry page says eligible people can get a set of health services in the 90 days before release. The fact sheet says adults qualify with certain health needs, such as a mental health or substance use condition, a long-term health condition, HIV, an intellectual or developmental disability, or a pregnancy. Services include care planning, medicine and lab tests. A March 2026 state report says all 31 state prisons and 33 county jails and youth facilities in 13 counties had started by February 1, 2026. The pages do not say which jails.\n\nAfter release, the letter says Medi-Cal that was paused must be turned back on from your release date. It can be done without a new application if the county has enough facts. The county can take your release date from what you say or write. The pages do not say how to fix it if it is not turned on. The letter says you can call, write or visit your county office. You do not need to tell me your case or your numbers."
    },

    "ca-reentry-calfresh": {
      title: "CalFresh food help after a drug conviction",
      kind: "reentry",
      sources: ["cdssFaq", "cdssAcl", "cdssQuickRef"],
      text: "CalFresh is California's food help. Other places call it SNAP. To apply, go to BenefitsCal.com, visit your county social services office, or call 1-877-847-3663. That comes from a state page updated September 9, 2026. If you need food now, ask about your local food bank.\n\nA drug conviction used to bring a lifetime ban. A state letter to counties, dated December 19, 2014, says the ban was repealed. From April 1, 2015, no person is denied aid because of a prior drug conviction. For CalFresh, such a person can get help as long as they follow the terms of probation or parole, including a drug treatment program if one is required. Your terms are in your own paperwork; ask your officer. Counties were told not to ask for extra proof. You must still meet the income rules. A July 2015 state sheet says the same.\n\nBoth of those pages are old. Ask your county worker if anything has changed.\n\nThe newer state page says a federal law is changing CalFresh. From June 1, 2026, some people aged 18 to 64 may need to work, volunteer, study or train about 20 hours a week to keep it. Some groups are excused. The page does not say if being newly released counts. It does not mention people with records, or fast CalFresh. Want me to read the page with you?"
    },

    "ca-reentry-jobs": {
      title: "California fair chance hiring rules and job help",
      kind: "reentry",
      sources: ["crdFairChance", "eddCaljobs"],
      text: "California has a law called the Fair Chance Act. It limits how an employer can use a conviction record. This comes from a June 2025 fact sheet by the Civil Rights Department. It covers public employers and private employers with five or more workers. Some jobs are exceptions, such as jobs where the law requires a background check.\n\nBefore a job offer, most employers cannot ask about convictions on an application, run a background check, or post ads that shut out people with records. After an offer with conditions, the employer may run a check. It may not use arrests that led to no conviction (with a few exceptions), sealed, dismissed or expunged convictions, or convictions more than seven years old. It must look at your case one person at a time.\n\nBefore it takes an offer back, it must send you a written notice with the convictions and a copy of the report. You have at least five business days to answer. You have at least ten days if you say the report is wrong. You may send proof of change, such as certificates and letters.\n\nTo complain, call the Civil Rights Department at 800-884-1684. The fact sheet gives no time limit for a complaint. It is not legal advice.\n\nFor job help, the state Employment Development Department calls CalJOBS California's largest online resource for job seekers. I did not read the CalJOBS site itself. The same page says your local America's Job Center of California offers free job and training services."
    },

    "ca-reentry-records": {
      title: "Getting your California record and automatic record relief",
      kind: "reentry",
      sources: ["dojRecordReview", "dojFeeWaiver", "dojAutoRelief", "courtsClean", "courtsCertificate"],
      text: "You can ask the California Department of Justice for a copy of your own criminal record. You give fingerprints at a Live Scan site. Many police and sheriff's offices have one. You pay a $25 state fee plus what the site charges, which varies. The $25 may be waived if you live in California and get help such as CalFresh, Medi-Cal or disability, or your income is low, or you have none. The waiver makes a form that saves the $25. Bring a valid photo ID. The page does not say if the site's fee can be waived, or how long it takes. If something looks wrong, a form comes with your record to claim a mistake.\n\nSome older arrests and convictions get automatic relief. Each month the Department finds those that qualify and sends the courts a list. You file nothing. The Department does not tell you. To check, ask for your record. A December 2024 page says this is not a dismissal, sealing or expungement. The record stays with a note. Employers who do fingerprint checks can still get it as the law allows.\n\nThe courts' self-help site says true expungement does not exist in California. It says there may be other ways to clean a record, and to think about legal help.\n\nThe pages I read do not say what a court dismissal does on a background check. They do not say what you may say when asked about a record. For that, ask a legal aid office or a public defender. The courts' page says many public defender offices have record-cleaning programs. You do not need to tell me about your case."
    },

    "ca-reentry-voting": {
      title: "Voting in California after a conviction",
      kind: "reentry",
      sources: ["sosFlyer", "sosVoting", "sosProp17", "cdcrCommunity"],
      text: "In California, a conviction does not always end your right to vote. The Secretary of State's flyer says you can register and vote if you are a U.S. citizen, live in California, and are 18 or older on Election Day. You must not be serving a state or federal prison term for a conviction. A court must not have found you mentally unable to vote. A misdemeanor never stops you. You can vote while on probation, on parole, or on post-release community supervision.\n\nIf you were registered, then convicted, your registration may have been canceled. Register again. If you are serving a prison term, your right to vote comes back when you finish it. Then you must register. Your county will send a notice. If you are not sure which group you are in, ask facility staff.\n\nYou can register online at registertovote.sos.ca.gov. You can also ask for a paper card. The Department of Corrections page says cards are at most public libraries and government offices. Your registration must arrive or be postmarked at least 15 days before Election Day. After that, you can register conditionally and vote a provisional ballot at your county elections office or polling place.\n\nProposition 17 on the 2020 ballot was about restoring the vote after a prison term. I did not read a page with its result, so I use the Secretary of State's rules. To check your case, call the voter hotline at (800) 345-VOTE, which is 800-345-8683. Spanish is (800) 232-VOTA. TTY is 711."
    },

    "ca-reentry-lifeline": {
      title: "California LifeLine phone discount",
      kind: "reentry",
      sources: ["cpucLifeline", "cpucEligibility"],
      text: "California LifeLine is a state program that gives a discount on phone service to households that qualify. You get one discount for each household. It is for a home phone or a cell phone, not both. A state page says it is up to $19.00 a month as of January 1, 2024. It also lists a connection discount of up to $39.\n\nYou can qualify by being in certain programs, such as Medi-Cal, CalFresh, Supplemental Security Income or Section 8 housing. Or you can qualify by income. You must show proof. The page does not give the income limits. It does not say if people just released qualify.\n\nTo start, call a phone company that takes part and ask for the California LifeLine discount. A list is at californialifeline.com.\n\nThe LifeLine Call Center answers general questions at 1-866-272-0349. The LifeLine Administrator answers questions about applying or renewing at 1-877-858-7463. Both are open 7 a.m. to 7 p.m. Pacific time, Monday through Friday, except state holidays. To complain or appeal a denial, call the Consumer Affairs Branch of the Public Utilities Commission at 1-800-649-7570.\n\nTwo warnings from the page. Breaking the one-discount rule can mean losing the discount, fines, a ban and possible prosecution. After you ask for LifeLine wireless service, you must wait up to 30 days before applying with another company. You do not need to tell me your case."
    }
  },

  PHRASES: {
    "ca-reentry-id": [
      "How do I get an ID in California when I just got out?",
      "I don't have a birth certificate, how do I get one in California?",
      "What money do I get when I leave prison in California?"
    ],
    "ca-reentry-medi-cal": [
      "How do I get Medi-Cal when I'm getting out of prison?",
      "Will I have health insurance when I get out of jail in California?",
      "My Medi-Cal didn't turn back on after I got out, what do I do?"
    ],
    "ca-reentry-calfresh": [
      "Can I get food stamps in California with a drug conviction?",
      "How do I apply for CalFresh when I get out?",
      "Does my record stop me from getting CalFresh?"
    ],
    "ca-reentry-jobs": [
      "Can a California employer ask about my record on the application?",
      "What are my rights when a job takes back an offer because of my record?",
      "Where can I get help finding a job in California with a record?"
    ],
    "ca-reentry-records": [
      "How do I get a copy of my own criminal record in California?",
      "Does California clear old convictions automatically?",
      "Can I get the fee waived for my California background record?"
    ],
    "ca-reentry-voting": [
      "Can I vote in California if I was in prison?",
      "I'm on parole in California, can I vote?",
      "How do I register to vote after I get out in California?"
    ],
    "ca-reentry-lifeline": [
      "How do I get a cheap phone plan in California?",
      "What is California LifeLine and how do I sign up?",
      "Is there a discount on my cell phone bill in California?"
    ]
  },

  KEYS: {
    "ca-reentry-id": "California ID card",
    "ca-reentry-medi-cal": "135 days before release",
    "ca-reentry-calfresh": "prior drug conviction",
    "ca-reentry-jobs": "Fair Chance Act",
    "ca-reentry-records": "your own criminal record",
    "ca-reentry-voting": "register and vote",
    "ca-reentry-lifeline": "California LifeLine"
  }
};
