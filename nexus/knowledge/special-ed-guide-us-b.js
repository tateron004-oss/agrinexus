"use strict";

// Kyro "Special education and ADHD" guide, United States federal topics, part B.
// Every fact is from the fact sheet sped-facts-fed2.txt (official pages read on 25 October 2026).
module.exports = {
  SOURCES: {
    usb_ocr504faq: { name: "U.S. Department of Education, Office for Civil Rights: Frequently Asked Questions, Section 504 Free Appropriate Public Education (page last reviewed 30 June 2025)", url: "https://www.ed.gov/laws-and-policy/civil-rights-laws/disability-discrimination/frequently-asked-questions-section-504-free-appropriate-public-education-fape" },
    usb_ocradhd: { name: "U.S. Department of Education, Office for Civil Rights: Students with ADHD and Section 504, A Resource Guide, with the Dear Colleague Letter (26 July 2016; non-binding guidance)", url: "https://sites.ed.gov/idea/files/OCR-letter-07-26-2016.pdf" },
    usb_cfr10435: { name: "Electronic Code of Federal Regulations: 34 CFR 104.35 and 104.36, evaluation, placement and procedural safeguards (current on 25 October 2026)", url: "https://www.ecfr.gov/current/title-34/subtitle-B/chapter-I/part-104" },
    usb_ocrfile: { name: "U.S. Department of Education, Office for Civil Rights: How to File a Discrimination Complaint with OCR (page last reviewed 26 August 2025)", url: "https://www.ed.gov/laws-and-policy/civil-rights-laws/file-complaint/how-file-discrimination-complaint-ocr" },
    usb_ocrhandles: { name: "U.S. Department of Education, Office for Civil Rights: How the Office for Civil Rights Handles Complaints (page last reviewed 28 September 2026)", url: "https://www.ed.gov/laws-and-policy/civil-rights-laws/file-complaint/how-the-office-for-civil-rights-handles-complaints" },
    usb_ocrcontact: { name: "U.S. Department of Education, Office for Civil Rights: Contact OCR (undated)", url: "https://ocrcas.ed.gov/contact-ocr" },
    usb_hubauth: { name: "Parent Center Hub, a federally funded center: General Authority of School Personnel (current as of September 2022)", url: "https://www.parentcenterhub.org/schoolauthority/" },
    usb_hubspecial: { name: "Parent Center Hub, a federally funded center: School Authority in Special Circumstances (current as of September 2022)", url: "https://www.parentcenterhub.org/specialcircumstances/" },
    usb_hubmanif: { name: "Parent Center Hub, a federally funded center: Manifestation Determination in School Discipline (current as of January 2022)", url: "https://www.parentcenterhub.org/manifestation/" },
    usb_hubservices: { name: "Parent Center Hub, a federally funded center: Are Services Provided During Disciplinary Removals? (current as of September 2022)", url: "https://www.parentcenterhub.org/services-discipline/" },
    usb_hubappeals: { name: "Parent Center Hub, a federally funded center: Appeals and Expedited Due Process under Part B of IDEA (current as of September 2022)", url: "https://www.parentcenterhub.org/appeals/" },
    usb_hubbasis: { name: "Parent Center Hub, a federally funded center: What is Basis of Knowledge in School Discipline? (current as of September 2022)", url: "https://www.parentcenterhub.org/basis/" },
    usb_cfr300disc: { name: "Electronic Code of Federal Regulations: 34 CFR 300.530 to 300.536, discipline of children with disabilities (current on 25 October 2026)", url: "https://www.ecfr.gov/current/title-34/subtitle-B/chapter-III/part-300/subpart-E" },
    usb_ferpaparent: { name: "U.S. Department of Education, Student Privacy Policy Office: A Parent Guide to the Family Educational Rights and Privacy Act, FERPA (issued 9 July 2021; the guide says it has no force of law)", url: "https://studentprivacy.ed.gov/resources/parent-guide-family-educational-rights-and-privacy-act-ferpa" },
    usb_ferpacomplaint: { name: "U.S. Department of Education, Student Privacy Policy Office: File a Complaint (undated)", url: "https://studentprivacy.ed.gov/file-a-complaint" },
    usb_crosswalk: { name: "U.S. Department of Education, Student Privacy Policy Office: IDEA-FERPA Crosswalk (August 2022)", url: "https://studentprivacy.ed.gov/resources/ferpaidea-crosswalk" },
    usb_hubcenters: { name: "Parent Center Hub, a federally funded center: What Are Parent Centers? (undated)", url: "https://www.parentcenterhub.org/the-parent-center-network/" },
    usb_hubfind: { name: "Parent Center Hub, a federally funded center: Find Your Parent Center (undated)", url: "https://www.parentcenterhub.org/find-your-center/" },
    usb_hubca: { name: "Parent Center Hub, a federally funded center: California state page (undated; the site shows a change in February 2026)", url: "https://www.parentcenterhub.org/california/" },
    usb_hubtx: { name: "Parent Center Hub, a federally funded center: Texas state page (undated)", url: "https://www.parentcenterhub.org/findurcenter/texas/" },
    usb_ideacontacts: { name: "U.S. Department of Education, Office of Special Education Programs: IDEA website Contacts (undated)", url: "https://sites.ed.gov/idea/contacts/" },
    usb_aclpa: { name: "Administration for Community Living, U.S. Department of Health and Human Services: Protection and Advocacy Systems (last modified 9 September 2026)", url: "https://acl.gov/programs/pa-programs" },
    usb_dial: { name: "Administration for Community Living: Disability Information and Access Locator, DIAL (last modified 13 August 2026)", url: "https://dial.acl.gov/home" },
    usb_statecontacts: { name: "U.S. Department of Education: State Contacts (page last reviewed 30 March 2026)", url: "https://www.ed.gov/about/contact-us/state-contacts" }
  },

  TOPICS: {
    "sped-504": {
      title: "Section 504 in public schools",
      kind: "special-ed",
      sources: ["usb_ocr504faq", "usb_ocradhd", "usb_cfr10435", "usb_ocrfile", "usb_ocrhandles", "usb_ocrcontact"],
      text: "This is the United States federal rule for Section 504, a civil rights law, in public schools. Your state may set a different rule. You can name your state, such as California or Delaware, and I will say what the pages cover and where to ask. You do not need to tell me your child's name. Section 504 bars discrimination against a student with a disability in a school that gets federal money. A student is covered who has an impairment that substantially limits a major life activity, such as learning, reading or concentrating. A diagnosis alone is not enough. The school decides case by case. A 504 plan is not an IEP. An IEP, an individualized education program, is for a student eligible under the special education law, IDEA. A school does not have to write both for one student. If you are a parent, you can ask the school to evaluate your child. A 2016 Office for Civil Rights guide says the school must either evaluate or explain its refusal and tell you that you can dispute it through due process. Federal pages say the school needs your permission for a first evaluation. You may look at relevant records and ask for an impartial hearing, with a lawyer if you choose. If you are a teacher, you must carry out the parts of a 504 plan that cover how you treat the student. For the school, an evaluation uses many sources, not one test or a diagnosis alone, and is repeated periodically and before a significant change of placement. No federal page gives a number of days for a 504 evaluation or meeting. To complain to the Office for Civil Rights, file within 180 days of the last act of discrimination. Using the school's grievance process first is not required. If you do, file with the Office within 60 days after it ends. Its headquarters phone is 800-421-3481. It generally does not judge what a plan says. Those disagreements go to a due process hearing. I do not give legal advice. A parent center or advocate can help."
    },

    "sped-discipline": {
      title: "Discipline of a child with a disability",
      kind: "special-ed",
      sources: ["usb_hubauth", "usb_hubspecial", "usb_hubmanif", "usb_hubservices", "usb_hubappeals", "usb_hubbasis", "usb_cfr300disc"],
      text: "This is the federal rule under IDEA, the special education law, for discipline of a child with a disability. Your state may set a different rule. You can name your state, such as California or Delaware. The pages are from a federally funded center, and its figures match the federal regulation. If you are a parent, here are the steps. A school may remove a child who breaks the code of conduct for up to 10 school days in a row. A longer removal, or a pattern of removals, is a change of placement. When that is decided, the school must tell you that day and give you the procedural safeguards notice. Within 10 school days, the school, you and relevant members of the IEP team hold a manifestation determination. It asks whether the conduct was caused by, or directly and substantially related to, the disability, or was the direct result of the school not following the IEP. If either answer is yes, the child returns to the original placement, unless you and the school agree otherwise or the weapon, drug or injury exception below applies. If no, the school may discipline as for other children, but services continue. After 10 school days of removal in a year, the school must provide services so the child can take part in the general curriculum and progress toward IEP goals. For a weapon, illegal drugs or serious bodily injury at school, the school may remove a child for up to 45 school days either way. You can appeal with a due process complaint. An expedited hearing must happen within 20 school days, with a decision within 10 school days after. If you are a teacher or administrator, check your district's code of conduct and state rules. A child not yet found eligible may be protected if a parent put a concern in writing or asked for an evaluation. If a child is in danger, call 911 or your local emergency number."
    },

    "sped-privacy": {
      title: "Student records and privacy (FERPA)",
      kind: "special-ed",
      sources: ["usb_ferpaparent", "usb_ferpacomplaint", "usb_crosswalk"],
      text: "This is about student records under FERPA, the Family Educational Rights and Privacy Act, a federal law. Your state may have its own privacy law, which these pages do not cover. You can name your state, such as California or Delaware. You do not need to tell me a student's name. FERPA applies to schools that get funds from the Department of Education. Private and faith-based schools generally do not, so it generally does not apply to them. If you are a parent, you can inspect your child's education records. The school must let you within a reasonable time, and not more than 45 calendar days after your request. For a child with a disability, the special education law adds that you can inspect before any IEP meeting or hearing, ask for copies if you could not otherwise inspect, and send a representative. You can ask the school to amend a record you believe is inaccurate, misleading or violates privacy. If it refuses, you can ask for a hearing, and then add a statement to the record. This cannot change grades, an eligibility decision or IEP content. For those, use the special education dispute steps. If you are a teacher or administrator, a school generally may not share information that identifies a student without the parent's written consent. It may share with school officials who have a legitimate educational interest, with a school where the student will enroll, directory information the parent did not opt out of, under a court order, or in a health or safety emergency. The special education law says the school must destroy information no longer needed if the parent asks, but may keep basics such as name, grades and attendance. For a complaint, write to the Student Privacy Policy Office within 180 days of the violation or of when you knew. It is encouraged, not required, to contact the school first."
    },

    "sped-get-help": {
      title: "Finding your state's special education help",
      kind: "special-ed",
      sources: ["usb_hubcenters", "usb_hubfind", "usb_hubca", "usb_hubtx", "usb_ideacontacts", "usb_aclpa", "usb_dial", "usb_statecontacts"],
      text: "This shows how to find your own state's special education help. Rules and offices differ by state, such as California or Delaware. You do not need to tell me a child's name. Do not guess web addresses. One guess for Illinois returned page not found. Use the map or drop-down on the page. There are three places. First, your Parent Training and Information Center. These centers help families of children with disabilities from birth to age 26 take part in their child's education. The pages do not say if the help is free. Open parentcenterhub.org slash find-your-center. Click your state on the map or choose it in the drop-down. The state page lists the center for your county with its address, phone and email. California lists several centers by county, and Texas lists three regional projects and a center in El Paso. Second, your state's Protection and Advocacy agency. Each state and territory has one. It helps people with disabilities understand their rights, including to education. The pages do not say it is free or that it takes every school case. Open dial.acl.gov slash home, enter your location, press Search and choose the Protection and Advocacy agency. Third, your state's special education office. Open ed.gov slash about slash contact-us slash state-contacts, choose your state, and find the heading Special Education Agency. California shows its Special Education Division in Sacramento, and Texas shows the Office of Special Education in Austin. The pages do not say how to file a state complaint, so ask that office. Phone numbers on the pages were copied from lists, so use the page and check the state's own site. Teachers can use all three. If a child is in danger, call 911 or your local emergency number."
    }
  },

  PHRASES: {
    "sped-504": ["What is a 504 plan and how is it different from an IEP?", "How do I ask the school to evaluate my child for a 504 plan?", "How do I ask for a 504 plan for my child?"],
    "sped-discipline": ["My child with an IEP got suspended, what are my rights?", "What is a manifestation determination meeting?", "How long can a school suspend a student with a disability?"],
    "sped-privacy": ["Can I see my child's school records?", "What can I share about a student as a teacher?", "Who is the school allowed to give student information to?"],
    "sped-get-help": ["Where do I find my state's special education office?", "How do I find a parent center near me?", "Which organization helps parents of children with disabilities in my state?"]
  },

  KEYS: {
    "sped-504": "bars discrimination against a student",
    "sped-discipline": "discipline of a child with a disability",
    "sped-privacy": "student records under FERPA",
    "sped-get-help": "find your own state's special"
  }
};
