"use strict";

// A checked guide to real, official help in the United States for four groups: veterans, older adults, young people, and nonprofits, and for everyday needs anyone has (food, energy bills, Medicaid, free tax help, vital records).
//
// Every number, name and rule below was read on CHECKED_ON from the official page listed in the topic's `sources` (VA.gov and its Vet Center and homeless-programs pages, the Veterans Crisis Line, the Department of Labor, SBA,
// Eldercare Locator, Medicare.gov, SHIP, Social Security, the Department of Justice, the FTC, the IRS, SAM.gov and Grants.gov, Job Corps, StudentAid, and the crisis lines' own sites). Where an official page did not say something (a phone
// number VA.gov's contact page leaves blank, the hours of the Childhelp line, the due date of Form 990) the answer does not say it either and points to the official page. Phone numbers and rules change: each answer carries its sources and the
// date it was checked, says it is general information, and tells the person to confirm on the official site. To update an answer, read the official page again, change the text and CHECKED_ON, and run the tests.
//
// communityTopic(text) -> a topic id, or null. Only a QUESTION or a request for help is taken (a record, a reminder or a draft is not).
// communityAnswer(id, { us }) -> { text, sources: [{ name, url }], topic, group, title } or null.
// isCommunityUs(text) -> true when the words themselves name a United States programme (VA, Medicare, 988, the IRS...); the planner also uses the device's time zone.

const CHECKED_ON = "15 October 2026";

const SOURCES = Object.freeze({
  // veterans
  vclHome: { name: "Veterans Crisis Line", url: "https://www.veteranscrisisline.net/" },
  vaContact: { name: "VA.gov: contact us", url: "https://www.va.gov/contact-us/" },
  vaPhones: { name: "VA.gov: helpful VA phone numbers", url: "https://www.va.gov/resources/helpful-va-phone-numbers/" },
  vaDisability: { name: "VA.gov: VA disability compensation", url: "https://www.va.gov/disability/" },
  vaHealthElig: { name: "VA.gov: VA health care eligibility", url: "https://www.va.gov/health-care/eligibility/" },
  vaGiBill: { name: "VA.gov: about GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/" },
  vaGiFaq: { name: "VA.gov: GI Bill and other VA education benefit payments FAQs", url: "https://www.va.gov/resources/gi-bill-and-other-va-education-benefit-payments-faqs/" },
  vaHomeLoans: { name: "VA.gov: VA home loans", url: "https://www.va.gov/housing-assistance/home-loans/" },
  vaVetCenterCall: { name: "Vet Centers: Vet Center Call Center", url: "https://www.vetcenter.va.gov/media/Call-Center-PSA.asp" },
  vaHomeless: { name: "VA Homeless Programs: National Call Center for Homeless Veterans", url: "https://department.va.gov/homeless/nationalcallcenter/" },
  vaAccredited: { name: "VA.gov: get help from a VA accredited representative or VSO", url: "https://www.va.gov/get-help-from-accredited-representative/" },
  dolVets: { name: "U.S. Department of Labor: Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
  sbaOvbd: { name: "SBA: Office of Veterans Business Development", url: "https://www.sba.gov/about-sba/sba-locations/headquarters-offices/office-veterans-business-development" },
  // older adults
  eldercare: { name: "Eldercare Locator (Administration for Community Living)", url: "https://eldercare.acl.gov/" },
  medicareTalk: { name: "Medicare.gov: talk to someone", url: "https://www.medicare.gov/talk-to-someone" },
  shiphelp: { name: "SHIP: State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" },
  ssaExtraHelp: { name: "Social Security: Extra Help with Medicare prescription drug plan costs", url: "https://www.ssa.gov/medicare/part-d-extra-help" },
  ssaContact: { name: "Social Security: contact us", url: "https://www.ssa.gov/contact/" },
  benefitsCheckUp: { name: "BenefitsCheckUp (National Council on Aging)", url: "https://benefitscheckup.org/" },
  elderFraud: { name: "U.S. Department of Justice, Office for Victims of Crime: National Elder Fraud Hotline", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" },
  ftcReport: { name: "FTC: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" },
  aclAbuse: { name: "ACL: what if I suspect abuse, neglect or exploitation", url: "https://acl.gov/programs/protection-and-advocacy-systems/what-if-i-suspect-abuse-neglect-or-exploitation" },
  lifeline: { name: "988 Suicide & Crisis Lifeline", url: "https://988lifeline.org/" },
  // young people
  crisisText: { name: "Crisis Text Line", url: "https://www.crisistextline.org/" },
  childhelp: { name: "Childhelp National Child Abuse Hotline", url: "https://childhelphotline.org/" },
  runaway: { name: "National Runaway Safeline", url: "https://www.1800runaway.org/" },
  trevor: { name: "The Trevor Project: get help", url: "https://www.thetrevorproject.org/get-help/" },
  trafficking: { name: "National Human Trafficking Hotline: get help", url: "https://humantraffickinghotline.org/en/get-help" },
  jobCorps: { name: "Job Corps", url: "https://www.jobcorps.gov/" },
  dolYouth: { name: "U.S. Department of Labor: YouthRules", url: "https://www.dol.gov/agencies/whd/youthrules" },
  dolFact43: { name: "U.S. Department of Labor: Fact Sheet #43, child labor in non-farm jobs", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
  studentAidScams: { name: "Federal Student Aid: avoiding scams", url: "https://studentaid.ed.gov/sa/types/scams" },
  ftcAidScams: { name: "FTC: how to avoid scholarship and financial aid scams", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" },
  // nonprofits
  irsApplyExempt: { name: "IRS: applying for tax-exempt status", url: "https://www.irs.gov/charities-non-profits/applying-for-tax-exempt-status" },
  irs1023Fee: { name: "IRS: Form 1023 and 1023-EZ, amount of user fee", url: "https://www.irs.gov/charities-non-profits/form-1023-and-1023-ez-amount-of-user-fee" },
  irsP557: { name: "IRS: Publication 557, tax-exempt status for your organization", url: "https://www.irs.gov/publications/p557" },
  irs990N: { name: "IRS: Form 990-N (e-Postcard) for small exempt organizations", url: "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard" },
  irsP4839: { name: "IRS: annual Form 990 filing requirements for tax-exempt organizations (Publication 4839)", url: "https://www.irs.gov/pub/irs-pdf/p4839.pdf" },
  irsSubstantiation: { name: "IRS: charitable organizations, substantiation and disclosure requirements", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-organizations-substantiation-and-disclosure-requirements" },
  irsP1771: { name: "IRS: Publication 1771, charitable contributions, substantiation and disclosure", url: "https://www.irs.gov/pub/irs-pdf/p1771.pdf" },
  irsStateSolicit: { name: "IRS: charitable solicitation, state requirements", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-solicitation-state-requirements" },
  nasco: { name: "National Association of State Charity Officials: resources", url: "https://www.nasconet.org/resources" },
  samGov: { name: "SAM.gov: entity registration and the Unique Entity ID", url: "https://sam.gov/entity-registration" },
  grantsApplicant: { name: "Grants.gov: applicant registration", url: "https://www.grants.gov/applicants/applicant-registration" },
  irsTeos: { name: "IRS: Tax Exempt Organization Search", url: "https://www.irs.gov/charities-non-profits/tax-exempt-organization-search" },
  irsGovernance: { name: "IRS: governance and related topics, 501(c)(3) organizations", url: "https://www.irs.gov/pub/irs-tege/governance_practices.pdf" },
  councilNonprofits: { name: "National Council of Nonprofits: find your state association", url: "https://www.councilofnonprofits.org/find-your-state-association" },
  // everyday help for anyone
  usaEmergencyFood: { name: "USA.gov: emergency food assistance", url: "https://www.usa.gov/emergency-food-assistance" },
  usaSnap: { name: "USA.gov: SNAP (food stamps)", url: "https://www.usa.gov/food-stamps" },
  usaEnergy: { name: "USA.gov: help with energy bills (LIHEAP)", url: "https://www.usa.gov/help-with-energy-bills" },
  healthcareMedicaidApply: { name: "HealthCare.gov: how to apply for Medicaid and CHIP", url: "https://www.healthcare.gov/medicaid-chip/getting-medicaid-chip/" },
  healthcareMedicaidWho: { name: "HealthCare.gov: Medicaid and CHIP eligibility", url: "https://www.healthcare.gov/medicaid-chip/eligibility/" },
  irsVita: { name: "IRS: free tax return preparation for qualifying taxpayers", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" },
  cdcVitalRecords: { name: "CDC: where to write for vital records", url: "https://www.cdc.gov/nchs/w2w/index.htm" }
});

const TOPICS = Object.freeze({
  // ---- veterans ----
  "vet-crisis": { group: "veterans", title: "Veterans Crisis Line",
    text: "If you are a Veteran, a service member, a National Guard or Reserve member, or someone who supports one, and you are in crisis or just need to talk: dial 988 then press 1, text 838255, or chat online at VeteransCrisisLine.net. It is free and confidential, open 24 hours a day, 365 days a year, and you do not need to be enrolled with VA. If someone is in immediate danger, call 911.",
    sources: ["vclHome"] },
  "vet-homeless": { group: "veterans", title: "Help for homeless or at-risk Veterans",
    text: "The National Call Center for Homeless Veterans is 877-424-3838, open 24 hours a day, 7 days a week. It is for Veterans who are homeless or at risk of homelessness, and for their family, friends and the agencies helping them. A trained VA staff member asks a few questions and connects the Veteran to the nearest VA staff member who can help. If you are in crisis, dial 988 then press 1.",
    sources: ["vaHomeless", "vclHome"] },
  "vet-center": { group: "veterans", title: "Vet Centers and the Vet Center Call Center",
    text: "The Vet Center Call Center is 1-877-927-8387 and is open around the clock. VA describes it as a confidential call center where combat Veterans and their families can talk about military experiences or other challenges in adjusting to civilian life, and as a benefit earned through military service. For a crisis, dial 988 then press 1.",
    sources: ["vaVetCenterCall", "vclHome"] },
  "vet-gi-bill": { group: "veterans", title: "GI Bill education benefits",
    text: "The GI Bill is a set of VA education benefits that help eligible Veterans and family members pay for school or job training. The types VA lists are the Post-9/11 GI Bill (for service after 10 September 2001, with the Yellow Ribbon Program), the Montgomery GI Bill Active Duty, the Montgomery GI Bill Selected Reserve, and education benefits for eligible spouses and children. They can pay for tuition and fees, books, a monthly living payment, licensing and certification tests, flight training, on-the-job training and apprenticeships. The GI Bill line is 888-442-4551 (TTY 711), Monday to Friday, 8 a.m. to 7 p.m. Eastern. VA also says an accredited representative can help you apply.",
    sources: ["vaGiBill", "vaGiFaq", "vaAccredited"] },
  "vet-home-loan": { group: "veterans", title: "VA home loans",
    text: "VA offers VA direct and VA-backed home loans to help Veterans, service members and their survivors buy, build, improve or refinance a home. You still need to meet credit and income requirements. A Certificate of Eligibility (COE) is the document that shows a lender you qualify, based on your service history and duty status. VA's own page does not explain how the VA-backed loans work, so ask a VA-approved lender or call VA on 800-827-1000.",
    sources: ["vaHomeLoans", "vaDisability"] },
  "vet-disability": { group: "veterans", title: "VA disability compensation",
    text: "VA disability compensation is a monthly tax-free payment for Veterans who became sick or injured during service, or whose service made an existing condition worse. It can cover physical conditions and mental health conditions such as PTSD, and surviving spouses, children and parents may also be able to get benefits. You can file online, by phone, by mail or by fax. The VA benefits hotline is 800-827-1000, and an accredited VSO representative, attorney or claims agent can help you file.",
    sources: ["vaDisability", "vaAccredited"] },
  "vet-health": { group: "veterans", title: "VA health care",
    text: "Veterans who served in the active military, naval or air service are generally eligible for VA health care if they did not receive a dishonorable discharge. Most who enlisted after 7 September 1980 need 24 continuous months of service unless an exception applies; National Guard and Reserve members generally must have been called to active duty by federal order. A service-connected disability rating, combat service or a VA pension can put you in a higher priority group, and if none of the descriptions fit you may still qualify based on income. Apply with the health care application (Form 10-10EZ) on VA.gov, or ask an accredited representative or your state's Veterans agency. The main VA information line, MyVA411, is 800-698-2411.",
    sources: ["vaHealthElig", "vaDisability", "vaPhones"] },
  "vet-free-help": { group: "veterans", title: "Free help with a VA claim",
    text: "VA lists three kinds of accredited representatives who can help with a VA benefits claim: Veterans Service Organization (VSO) representatives, accredited attorneys and accredited claims agents. VA says the services of an accredited VSO representative are always free. An accredited attorney or claims agent can charge fees. Find one through VA.gov's page on getting help from an accredited representative.",
    sources: ["vaAccredited"] },
  "vet-jobs": { group: "veterans", title: "Jobs and training for Veterans",
    text: "The U.S. Department of Labor's Veterans' Employment and Training Service lists help to find a job, Veterans Employment Services, apprenticeships, the Transition Assistance Program (TAP), Veterans' Preference, help for disabled Veterans and for military spouses, the Homeless Veterans' Reintegration Program, and information on your reemployment rights under USERRA. The phone number on its page is 1-866-237-0275.",
    sources: ["dolVets"] },
  "vet-business": { group: "veterans", title: "Starting or growing a business as a Veteran",
    text: "SBA's Office of Veterans Business Development supports Veterans, service members, National Guard and Reserve members, military spouses and family members who want to start, grow or expand a small business, with training, counselling, access to capital, contracting opportunities and disaster assistance. SBA lists Veterans Business Outreach Centers (VBOCs) as a resource for Veterans. My small business guide has more on free business help and on SBA's certifications.",
    sources: ["sbaOvbd"] },
  "vet-overview": { group: "veterans", title: "Where Veterans can get help",
    text: "These are the official places I have checked. In a crisis: dial 988 then press 1, or text 838255 (Veterans Crisis Line, 24/7). Benefits and claims: the VA benefits hotline, 800-827-1000, and the main VA information line, MyVA411, 800-698-2411. Talking to someone about life after service: the Vet Center Call Center, 1-877-927-8387, around the clock. Homeless or at risk: 877-424-3838, 24/7. Education: the GI Bill line, 888-442-4551. Free help with a claim: an accredited VSO representative. Jobs: the Department of Labor's Veterans' Employment and Training Service, 1-866-237-0275. Ask me about any of these for more.",
    sources: ["vclHome", "vaDisability", "vaVetCenterCall", "vaHomeless", "vaGiFaq", "vaAccredited", "dolVets"] },

  // ---- older adults ----
  "sr-eldercare": { group: "seniors", title: "Eldercare Locator",
    text: "The Eldercare Locator is a public service of the Administration for Community Living that connects older adults and their families to services near them, including through your local Area Agency on Aging. Call or text 1-800-677-1116, use the live chat, or search by location at eldercare.acl.gov.",
    sources: ["eldercare"] },
  "sr-medicare": { group: "seniors", title: "Medicare help",
    text: "For questions about Medicare you can call 1-800-MEDICARE (1-800-633-4227), open 24 hours a day, 7 days a week except some federal holidays; TTY users can call 1-877-486-2048. For free one-on-one counselling, every state has a State Health Insurance Assistance Program (SHIP): SHIP counselors help you compare costs, review coverage and provider networks, apply for Extra Help, and handle complaints or appeals. Find yours at shiphelp.org.",
    sources: ["medicareTalk", "shiphelp"] },
  "sr-extra-help": { group: "seniors", title: "Extra Help with Medicare prescription costs",
    text: "Extra Help helps people with limited income and resources pay Medicare drug plan premiums, deductibles and copayments. People with full Medicaid, certain Medicare Savings Programs or SSI get it automatically. Otherwise you apply with Social Security, at ssa.gov or on 1-800-772-1213 (TTY 1-800-325-0778); applying does not enrol you in a drug plan, and the help starts once you are enrolled. The income and resource limits change every year, so check the Social Security page for the current ones. A SHIP counselor can also help you apply, free.",
    sources: ["ssaExtraHelp", "medicareTalk", "shiphelp"] },
  "sr-social-security": { group: "seniors", title: "Social Security",
    text: "Social Security's national toll-free number is 1-800-772-1213 (TTY 1-800-325-0778), weekdays from 8 a.m. to 7 p.m.; automated services on the same number work around the clock. You can also do much of the business online at ssa.gov. Social Security's own pages list slightly different hours in different places, so confirm on ssa.gov before you call.",
    sources: ["ssaContact"] },
  "sr-benefits": { group: "seniors", title: "Find benefits you may qualify for",
    text: "BenefitsCheckUp, from the National Council on Aging, is a free and confidential online tool that helps older adults and people with disabilities find benefit programs they may qualify for: nearly 2,000 federal, state and local programs for food, medicine, utilities and other costs, such as SNAP, Medicare Savings Programs, Extra Help and LIHEAP energy assistance. No sign-up is needed for basic use. The results are estimates, not decisions: the agency that runs each programme decides.",
    sources: ["benefitsCheckUp"] },
  "sr-fraud": { group: "seniors", title: "Scams and fraud against older adults",
    text: "If you or someone you know is 60 or older and has been a victim of fraud, the National Elder Fraud Hotline is 833-372-8311 (833-FRAUD-11), Monday to Friday, 10 a.m. to 6 p.m. Eastern. It is run by the U.S. Department of Justice's Office for Victims of Crime, it is free, and a case manager helps you through reporting at the federal, state and local levels. Anyone can also report a scam to the FTC at ReportFraud.ftc.gov or on 1-877-FTC-HELP, even if you lost no money.",
    sources: ["elderFraud", "ftcReport"] },
  "sr-abuse": { group: "seniors", title: "If an older person is being hurt or neglected",
    text: "If someone is in immediate danger, call 911. Otherwise, contact Adult Protective Services (APS) in the state where the older person lives. APS handles abuse, neglect, self-neglect and financial exploitation. The Eldercare Locator, 1-800-677-1116, can give you the number for your state or area. You do not need proof: it is up to the professionals to look into it, and anonymous reports are allowed.",
    sources: ["aclAbuse", "eldercare"] },
  "sr-crisis": { group: "seniors", title: "Someone to talk to in a crisis",
    text: "The 988 Suicide & Crisis Lifeline is free and confidential and open 24 hours a day, 365 days a year. Call 988, text 988, or chat at 988lifeline.org. For Veterans, dial 988 then press 1. If someone is in immediate danger, call 911.",
    sources: ["lifeline", "vclHome"] },

  // ---- young people ----
  "yt-crisis": { group: "youth", title: "Someone to talk to right now",
    text: "If you are struggling and want someone to talk to: text HOME to 741741 for Crisis Text Line (free, confidential, 24/7, with a live volunteer crisis counselor), or call or text 988 for the 988 Suicide & Crisis Lifeline (free and confidential, 24/7). If you are in danger right now, call 911.",
    sources: ["crisisText", "lifeline"] },
  "yt-abuse": { group: "youth", title: "Child abuse: the Childhelp hotline",
    text: "The Childhelp National Child Abuse Hotline is (800) 422-4453, or text GO to 800.422.4453; there is also a live chat on its site. It is for anyone concerned about or affected by child abuse. It is not connected to 911: in an emergency, call 911. Childhelp says that if a child under 18 is being harmed, it may have to share that information with the appropriate authorities.",
    sources: ["childhelp"] },
  "yt-runaway": { group: "youth", title: "Running away or in an unsafe home: the National Runaway Safeline",
    text: "The National Runaway Safeline is 1-800-786-2929 (1-800-RUNAWAY); you can also text 1-800-786-2929 or chat on its website. It is open 24/7, confidential, and there to support youth, caregivers and service providers. If you are in danger right now, call 911.",
    sources: ["runaway"] },
  "yt-lgbtq": { group: "youth", title: "Support for LGBTQ+ young people",
    text: "The Trevor Project offers support to LGBTQ+ young people: call 1-866-488-7386, text START to 678-678, or chat at thetrevorproject.org/get-help. Its services are 24/7/365, nationwide, free and confidential. Deaf and hard of hearing users can use TTY on 1-866-803-3699. You can also call or text 988.",
    sources: ["trevor", "lifeline"] },
  "yt-trafficking": { group: "youth", title: "Human trafficking",
    text: "The National Human Trafficking Hotline is 1-888-373-7888, open 24 hours a day, 7 days a week; text 233733, or use the chat on its site. Support is in more than 200 languages and all communication is strictly confidential. Dial 711 to use TTY. If someone is in immediate danger, call 911.",
    sources: ["trafficking"] },
  "yt-work-rules": { group: "youth", title: "Rules for teenagers who work",
    text: "The U.S. Department of Labor's rules for 14- and 15-year-olds in most non-farm jobs: only outside school hours; no more than 3 hours on a school day, 18 hours in a school week, 8 hours on a non-school day or 40 hours in a non-school week; and not before 7 a.m. or after 7 p.m., except from 1 June through Labor Day, when the evening limit is 9 p.m. Young people of 16 and 17 can do any non-hazardous job, but there are 17 hazardous jobs that anyone under 18 may not do. Your state may have stricter rules, and then the stricter rule applies. The Department of Labor's YouthRules site has the details, including farm work and the jobs that are off limits.",
    sources: ["dolYouth", "dolFact43"] },
  "yt-job-corps": { group: "youth", title: "Job Corps: free career training",
    text: "Job Corps is a federal programme that offers free career training and education, and free housing, meals, basic medical care and a living allowance, at no cost to the student. Students are generally 16 through 24 and low-income, and must meet citizenship or residency requirements. It covers fields such as manufacturing, health care, technology and construction, and help with finishing a high school diploma. Apply through jobcorps.gov or call 800-733-JOBS (800-733-5627); TTY 877-889-5627.",
    sources: ["jobCorps"] },
  "yt-aid-scams": { group: "youth", title: "Paying for school without being scammed",
    text: "The FAFSA, the form for federal student aid, is free, and the official site is fafsa.gov. The U.S. Department of Education says sites that charge a fee to help you file it are not affiliated with or endorsed by the Department, and the FTC says to walk away if a company asks for a fee to process it. Never share your FSA ID with anyone. If a company promises a scholarship for a processing fee or any payment up front, walk away. If a page asks for your credit card, you are not on the official government site.",
    sources: ["studentAidScams", "ftcAidScams"] },

  // ---- nonprofits ----
  "np-exemption-fees": { group: "nonprofits", title: "Applying for 501(c)(3) status: forms and fees",
    text: "To apply for recognition as a 501(c)(3) charitable organization you file either Form 1023-EZ, the streamlined application, or the full Form 1023, electronically on Pay.gov. The IRS user fee is $275 for Form 1023-EZ and $600 for Form 1023, and the fees can change, so check the IRS page before filing. Publication 557 says a smaller organization may be able to use the 1023-EZ if its assets are $250,000 or less and its annual gross receipts are $50,000 or less; otherwise use Form 1023.",
    sources: ["irsApplyExempt", "irs1023Fee", "irsP557"] },
  "np-annual-filing": { group: "nonprofits", title: "Annual filing for tax-exempt organizations",
    text: "Most tax-exempt organizations must file an annual return. Form 990 is required when gross receipts are $200,000 or more or total assets are $500,000 or more at year-end; an organization below both can use Form 990-EZ; and an organization whose gross receipts are normally $50,000 or less generally files the short electronic Form 990-N (e-Postcard) instead. An organization that does not file the required return for three years in a row automatically loses its tax-exempt status, and that applies to Form 990-N filers too. Check the IRS instructions for the due date and any extension, and ask your accountant about your own situation.",
    sources: ["irsP4839", "irs990N"] },
  "np-donor-receipts": { group: "nonprofits", title: "Thanking and receipting donors",
    text: "A donor can deduct a gift of $250 or more only if they have a written acknowledgment from the charity. The charity supplies the content: its name, the amount of any cash gift, a description (not a value) of any non-cash gift, and a statement of whether it gave any goods or services in return, and if it did, a description and a good-faith estimate of their value. There is no IRS form: a letter, postcard or email works, and one acknowledgment can cover several gifts, such as an annual summary. For a cash gift of any size the donor needs a bank record or a written note from the charity with its name, the amount and the date.",
    sources: ["irsSubstantiation", "irsP1771"] },
  "np-state-registration": { group: "nonprofits", title: "Registering to fundraise in your state",
    text: "Charitable solicitation is regulated by the states: the IRS says many states require charities to register with a state agency before they ask residents for donations, with some exemptions, and may require periodic financial reports. Some states also regulate paid solicitors and fundraising counsel. The National Association of State Charity Officials keeps a state-by-state survey and regulator contacts, and the IRS points to it for finding out which states require registration. Confirm with the charity regulator in each state where you fundraise.",
    sources: ["irsStateSolicit", "nasco"] },
  "np-federal-grants": { group: "nonprofits", title: "Getting ready to apply for federal grants",
    text: "To apply for federal grants a nonprofit generally needs to be registered in SAM.gov and have a Unique Entity ID (UEI), and then register at Grants.gov: Grants.gov will not let you start applying until your organization is registered in SAM.gov. SAM.gov is free, with no charge to get a UEI or to register or maintain your registration. Plan ahead: allow up to 10 business days for the registration to become active, and renew it every 365 days. Read each opportunity's own eligibility section before you spend time on an application, and be wary of anyone who charges a fee to find you a grant.",
    sources: ["samGov", "grantsApplicant"] },
  "np-check-charity": { group: "nonprofits", title: "Checking that a charity is real and tax-exempt",
    text: "The IRS Tax Exempt Organization Search lets you check whether an organization is tax-exempt and eligible to receive tax-deductible contributions, and whether its exemption was revoked. Search by its legal name or its EIN: a \"doing business as\" name may not be listed. Not every eligible organization appears, for example churches that did not apply for a determination, so if one is missing ask for its IRS determination letter.",
    sources: ["irsTeos"] },
  "np-governance": { group: "nonprofits", title: "Board and governance basics",
    text: "The IRS encourages a charity's board to adopt, and regularly review, a written conflict of interest policy: how conflicts are identified, how an interested person steps out of the discussion and vote, and how the policy is enforced, with directors and officers disclosing financial interests in writing and signing an annual statement. It is encouraged, not required to obtain tax-exempt status, and Form 990 asks whether you have one. The IRS also suggests, without requiring it, that a majority of a public charity's board be independent. No part of a charity's net earnings may go to benefit an insider. Ask a nonprofit lawyer about your own bylaws and state law.",
    sources: ["irsGovernance"] },
  "np-state-association": { group: "nonprofits", title: "Help from other nonprofits in your state",
    text: "The National Council of Nonprofits runs a network of state associations of nonprofits, with a map and directory of member associations at councilofnonprofits.org/find-your-state-association. Some states do not yet have a member. Your state association is a good place to ask about local registration, training and peer support.",
    sources: ["councilNonprofits"] },
  // ---- everyday help for anyone (read 16 October 2026) ----
  "cs-food": { group: "everyone", title: "Food help", checkedOn: "16 October 2026",
    text: "If you need food now, you can call the National Hunger Hotline at 1-866-3-HUNGRY (1-866-348-6479) or, in Spanish, 1-877-8-HAMBRE (1-877-842-6273); it answers in English and Spanish on weekdays, Eastern Time. To find a food pantry near you, enter your ZIP code in the HUD Find Shelter tool at hud.gov/findshelter, or call 211 to reach local agencies that can help you find food in an emergency. SNAP (food stamps) can help you pay for food if you have a low income: your state sets who is eligible, you apply through your state or local SNAP office, and depending on your state you may be able to apply online; find your state's office in the SNAP state directory at fns.usda.gov/snap/state-directory. You can also ask your state agency about emergency food through TEFAP.",
    sources: ["usaEmergencyFood", "usaSnap"] },
  "cs-energy": { group: "everyone", title: "Help paying energy bills (LIHEAP)", checkedOn: "16 October 2026",
    text: "LIHEAP, the Low Income Home Energy Assistance Program, can help you pay your heating or cooling bills or get emergency services during an energy crisis; depending on where you live it may also cover electric bills. Eligibility is based on your income, and each state and territory sets its own requirements. To apply, answer a few questions to see whether you qualify, find your state or territory's LIHEAP office with the search tool at liheapch.acf.hhs.gov/search-tool, and then apply: some offices take applications online and others may need you to apply in person. If your power or gas was shut off, each state has its own rules about when a utility can disconnect you, and where to find your state's rule is liheapch.acf.hhs.gov/Disconnect/disconnect.htm. For other questions about government help, USAGov answers at 1-844-USAGOV1 (1-844-872-4681).",
    sources: ["usaEnergy"] },
  "cs-medicaid": { group: "everyone", title: "Medicaid and CHIP", checkedOn: "16 October 2026",
    text: "Medicaid and CHIP cover people with a low income, including families, children, pregnant women, older adults and people with disabilities, and some states also cover low-income adults. Eligible income levels, coverage and costs differ from state to state, and full coverage is limited to certain immigration statuses. You can apply any time of year in two ways: through the Marketplace at healthcare.gov/create-account, which sends your information securely to your state agency if someone in your household looks eligible, or directly with your state Medicaid agency, whose contact details you get by choosing your state on healthcare.gov. For questions you can call HealthCare.gov at 1-800-318-2596, and localhelp.healthcare.gov can find local help.",
    sources: ["healthcareMedicaidApply", "healthcareMedicaidWho"] },
  "cs-free-tax": { group: "everyone", title: "Free tax help (VITA and TCE)", checkedOn: "16 October 2026",
    text: "The IRS supports free basic tax return preparation by IRS-certified volunteers through two programmes. VITA, Volunteer Income Tax Assistance, helps people who generally make about $70,244 or less (the IRS page does not name the tax year), people with disabilities and people who speak limited English. TCE, Tax Counseling for the Elderly, is for people age 60 and older and focuses on pension and retirement questions. The IRS sets no single income limit for the programme and individual sites may set their own; services vary by site, every return gets a quality review before it is filed, and some sites let you prepare your own return with a volunteer's help only where the listing says Self-Prep. To find a site, use the IRS VITA Locator Tool or call 800-906-9887; AARP Tax-Aide, which runs mostly TCE sites, has its own locator and the number 888-227-7669, which the IRS page says to use from January to April.",
    sources: ["irsVita"] },
  "cs-vital-records": { group: "everyone", title: "Getting a copy of a birth certificate or other vital record", checkedOn: "16 October 2026",
    text: "Birth, death, marriage and divorce records are kept by the state or area where the event happened, so you ask that state or area's vital records office. The CDC's page lists every state and territory, each with its own application guidelines: first work out where the birth, death, marriage or divorce took place, then open that place's page. The federal government does not hand out certificates, files or indexes with identifying information, so the CDC itself cannot give you a copy. Fees, identification and how to apply are set by each office, so read its page before you apply. For a passport, the CDC page points to the U.S. State Department.",
    sources: ["cdcVitalRecords"] }
});

// (the question matchers live in public/kyro-community-topics.js, so the page can use the same words)
const { topic: communityTopic, isCommunityUs } = require("../../public/kyro-community-topics.js");

const CLOSING = "This is general information, not legal, medical, tax or financial advice, and numbers and rules change, so confirm on the official site or number. I cannot call, file or apply for anything for you.";
const OUTSIDE = " These are United States sources, and the programmes named are American, so if you are in another country, check what your own government offers.";

function communityAnswer(id, { us = true } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const sources = topic.sources.map(key => SOURCES[key]);
  const text = `${topic.text} Sources: ${sources.map(source => source.name).join("; ")} (checked ${topic.checkedOn || CHECKED_ON}).${us ? "" : OUTSIDE} ${CLOSING}`;
  return { topic: id, group: topic.group, title: topic.title, text, sources };
}

module.exports = Object.freeze({ CHECKED_ON, SOURCES, TOPICS, communityTopic, communityAnswer, isCommunityUs });
