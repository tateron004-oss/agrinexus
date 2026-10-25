"use strict";

// Kyro "Special education" guide, KENYA topics. Every fact is from the fact sheet sped-facts-ke.txt (Kenyan government pages read on 25 October 2026).
module.exports = {
  SOURCES: {
    ke_constitution: { name: "Kenya Law (National Council for Law Reporting): Constitution of Kenya, 2010, Articles 53 and 54 (commenced 27 August 2010)", url: "https://new.kenyalaw.org/akn/ke/act/2010/constitution/eng@2010-09-03" },
    ke_pwdAct: { name: "Kenya Law: Persons with Disabilities Act, Act No. 4 of 2025 (published 13 May 2025, in force 27 May 2025)", url: "https://new.kenyalaw.org/akn/ke/act/2025/4" },
    ke_beAct: { name: "Kenya Law: Basic Education Act, 2013, Act No. 14 of 2013 (revised to 31 December 2022)", url: "https://new.kenyalaw.org/akn/ke/act/2013/14" },
    ke_kiseEarc: { name: "Kenya Institute of Special Education (KISE): Educational Assessment and Resource Centre service page (undated)", url: "https://kise.ac.ke/service/educational-assessment-and-resource-centre/" },
    ke_kiseFa: { name: "KISE: Functional Assessment (undated)", url: "https://kise.ac.ke/service/assessment/" },
    ke_kiseArc: { name: "KISE: Assessment and Research Centre, About ARC (undated)", url: "https://kise.ac.ke/about-arc/" },
    ke_kiseCharter: { name: "KISE: Citizen's Service Delivery Charter, English, 2025", url: "https://kise.ac.ke/wp-content/uploads/2025/07/SERVICE-ENGLISH-CHARTER-2025.pdf" },
    ke_kiseContact: { name: "KISE: Contact page (undated)", url: "https://kise.ac.ke/contact/" },
    ke_ncpwdHome: { name: "National Council for Persons with Disabilities (NCPWD): home page (undated; site news to 23 October 2026)", url: "https://ncpwd.go.ke/" },
    ke_ncpwdEcitizen: { name: "NCPWD: How to Self-Register on eCitizen as a Person with a Disability (two-page guide, undated)", url: "https://ncpwd.go.ke/download/ncpwd-how-to-self-register-on-ecitizen-as-a-pwd/?wpdmdl=17809&refresh=6684fe4d0c8151719991885" },
    ke_ncpwdEdu: { name: "NCPWD: Education Assistance (undated)", url: "https://ncpwd.go.ke/education-assistance/" },
    ke_ncpwd2027: { name: "NCPWD: 2027 Persons with Disabilities Scholarships (23 October 2026)", url: "https://ncpwd.go.ke/2027-persons-with-disabilities-scholarships/" },
    ke_ncpwdScholarships: { name: "NCPWD: Scholarships and Education Grant Scheme downloads (undated)", url: "https://ncpwd.go.ke/scholarships/" },
    ke_ncpwdAssistive: { name: "NCPWD: Assistive Device (undated)", url: "https://ncpwd.go.ke/assistive-device/" },
    ke_kiseAssistive: { name: "KISE: Production of Assistive Devices (undated)", url: "https://kise.ac.ke/service/production-of-assistive-devices/" },
    ke_knecReg: { name: "Kenya National Examinations Council (KNEC): Registration of Candidates, including candidates with special needs (undated)", url: "https://www.knec.ac.ke/services/registration-of-candidates/" },
    ke_kpsea: { name: "KNEC: KPSEA Regulations 2024 (Kenya Primary School Education Assessment; file on the KNEC site dated August 2026)", url: "https://www.knec.ac.ke/wp-content/uploads/2026/08/kpsea_regulations_2024.pdf" },
    ke_kiseTraining: { name: "KISE: Training Programs (undated)", url: "https://kise.ac.ke/training-programs/" },
    ke_kiseTeacherTraining: { name: "KISE: Training service page (undated)", url: "https://kise.ac.ke/service/teacher-training/" },
    ke_kicd: { name: "Kenya Institute of Curriculum Development (KICD): Special Needs Education well catered for in the new curriculum (13 January 2019, old)", url: "https://kicd.ac.ke/press_releases/special-needs-education-well-catered-for-in-the-new-curriculum/" },
    ke_cajOmbudsman: { name: "Commission on Administrative Justice (Office of the Ombudsman): home page (undated)", url: "https://www.ombudsman.go.ke/" }
  },

  TOPICS: {
    "ke-sped-rights": {
      title: "A learner's right to education in Kenya",
      kind: "special-ed",
      sources: ["ke_constitution", "ke_pwdAct", "ke_beAct", "ke_cajOmbudsman"],
      text: "This is about the right of a learner with a disability to go to school in Kenya. It comes from Kenyan law pages read on 25 October 2026. I am not a lawyer, and this is not legal advice. You do not need to tell me a child's name. The Constitution, Article 53, gives every child the right to free and compulsory basic education. Article 54 says a person with any disability is entitled to dignity and respect and to use Sign language or Braille. The Persons with Disabilities Act, 2025, in force from 27 May 2025, replaced the older 2003 Act. Section 20 gives every person with a disability the right to admission to any institution of learning and to inclusive, quality education on an equal basis with others. It also says no one shall be excluded from the education system because of disability. The Act defines reasonable accommodation as necessary and appropriate changes that do not impose a disproportionate or undue burden. If you are a parent: refusing admission because of disability is an offence. The fine is up to KSh 500,000, or prison up to two years, or both, and the court may order unconditional admission. The Basic Education Act, 2013, section 34, also bars discrimination in admission, including because of disability. Section 34 of the 2025 Act lets a person apply to the High Court. For the school: section 20 expects individualized support, equipment and assistive devices. The pages give no step-by-step complaint route and no time limit. The Ombudsman, the Commission on Administrative Justice, handles complaints of unfair treatment in public bodies, toll free 0800 221349, but its page does not mention schools, so ask if it takes your case. The Basic Education Act has an Education Appeals Tribunal, but two sections, 85 and 93, are ambiguous about a refused admission, so ask a lawyer which route applies. The Ministry of Education's site and several others could not be read, and I did not read every section of the Act."
    },
    "ke-sped-assessment": {
      title: "How a learner with a disability is assessed in Kenya",
      kind: "special-ed",
      sources: ["ke_pwdAct", "ke_beAct", "ke_kiseEarc", "ke_kiseFa", "ke_kiseArc", "ke_kiseCharter", "ke_kiseContact"],
      text: "This is about assessment of a learner with a disability in Kenya. It comes from Kenyan government pages read on 25 October 2026. You do not need to tell me a child's name. The Persons with Disabilities Act, 2025, section 20, says each learner with a disability has a right to be assessed and placed in an appropriate learning institution according to the result. It says the Ministry's strategies include at least one assessment centre in each county. The Basic Education Act, 2013, section 46, tells each County Education Board to provide education assessment and research centres that advise parents and teachers. The Kenya Institute of Special Education, or KISE, in Kasarani, Nairobi, offers functional assessment. KISE says its process has an initial consultation, evaluation by specialists, and a detailed report with recommendations. Its page lists ten centres: Nairobi, Mombasa, Nakuru, Eldoret, Kakamega, Kisumu, Embu, Garissa, Nyeri and Machakos. If you are a parent: for KISE assessment, call +254 111 055816 or write to kiseassessment@kise.ac.ke. Hours are Monday to Thursday 08:00 to 17:00, and Friday 08:00 to 16:00. Cost: one KISE page says most services are free and others have a nominal fee, but its service charter was unclear, so I cannot give a price. Ask when you call. What the pages do not cover: no readable page explained how a parent gets a child assessed at a county centre, how long it takes, or whether a referral is needed. One KISE page showed a label I could not interpret, so ask whether your nearest centre is working. The Ministry of Education's site and several others could not be read. I cannot say whether any child has a condition."
    },
    "ke-sped-register-support": {
      title: "Registering with NCPWD, grants, scholarships and assistive devices",
      kind: "special-ed",
      sources: ["ke_ncpwdHome", "ke_ncpwdEcitizen", "ke_ncpwdEdu", "ke_ncpwd2027", "ke_ncpwdScholarships", "ke_ncpwdAssistive", "ke_kiseAssistive", "ke_pwdAct"],
      text: "This is about support for learners with disabilities in Kenya from the National Council for Persons with Disabilities, or NCPWD. It comes from government pages read on 25 October 2026. You do not need to tell me a child's name. To register on eCitizen you need a disability medical assessment report from a government-gazetted hospital, signed by the County Director of Medical Services, plus a national ID for those over 18 or a birth certificate for a minor, and a coloured passport photo. Sign in at accounts.ecitizen.go.ke, search agencies for ncpwd, choose Register as a person with a disability, fill in the form, upload documents, tick consent, then Preview and Complete. An SMS gives an application number and a certificate link. The Act says medical assessment reports for registration are free in public health institutions. Education assistance: individuals or their guardians may apply for fees for secondary and tertiary education, vocational training and special educational establishments. Masters and PhDs are not funded. A letter from the school is asked for, and your details must match NCPWD records. For senior school in 2027, the page invites vulnerable and underprivileged learners who will sit the 2026 Grade 9 KJSEA to apply. Download the form at www.ncpwd.go.ke and hand it in at the nearest NCPWD office or KCB Bank branch by 6 November 2026. Please check that date. Applying is free. Assistive devices such as wheelchairs, crutches and hearing aids: applications are open all year. You need the form, disability card copy, ID, and an assessment report. KISE says it makes devices at reasonable prices, most often for free. The Act says an unregistered person cannot be denied the services in that part, yet the forms ask for card details. NCPWD toll free: 0800 724 333. The pages gave no capitation or bursary rates. The Ministry's site and several others could not be read."
    },
    "ke-sped-exams": {
      title: "Exam arrangements for candidates with disabilities in Kenya",
      kind: "special-ed",
      sources: ["ke_knecReg", "ke_kpsea"],
      text: "This is about arrangements in national exams for candidates with disabilities in Kenya, from the Kenya National Examinations Council, or KNEC. It comes from KNEC pages read on 25 October 2026. You do not need to tell me a child's name. The rules I could read are for the primary assessment, KPSEA, in the 2024 regulations. KNEC says it prepares Braille and large print papers for candidates with visual impairment. It prepares adapted English and Kenyan Sign Language papers for candidates with hearing impairment. The time for a paper may be changed at the Council's discretion, depending on the degree of impairment. In one paper listed, Braille candidates get 2 hours 10 minutes, and other candidates 1 hour 40 minutes. If you are a parent: ask the head teacher to include your child's needs at registration. If you are a teacher or head: details must be given at registration, backed by evidence from a recognised medical authority and, where possible, a Disability identity card from NCPWD. Requests go through the Sub-County Directors of Education. Registration is online, and the head signs the nominal roll. KNEC contact: 0719 093 000, info@knec.ac.ke. What the pages do not cover: they list no arrangements for ADHD, dyslexia, autism or other learning difficulties. The rules for the Grade 9 assessment and for KCSE are published as images, so I could not read them, and other levels may differ. KNEC's registration page names four groups of candidates with special needs and uses the words mentally challenged for one. That is its own wording, while the Act says intellectual disability. The Ministry of Education's site and several others could not be read."
    },
    "ke-sped-teachers": {
      title: "Training for teachers and school heads: KISE courses",
      kind: "special-ed",
      sources: ["ke_kiseTraining", "ke_kiseTeacherTraining", "ke_kiseContact", "ke_kicd", "ke_pwdAct", "ke_beAct"],
      text: "This is for teachers and school heads in Kenya. It comes from Kenyan government pages read on 25 October 2026. The Kenya Institute of Special Education, or KISE, offers training from one-day workshops to multi-year diploma courses, including Braille and sign language. The Diploma in Special Needs Teacher Education takes two years. Entry is a P1 teacher certificate or the KNEC early childhood development and education certificate. Full-time specialisations are visual impairment, hearing impairment, physical disabilities, deafblind, mental disabilities, autism, and gifted and talented. Holiday programmes by open, distance and e-learning cover learning disabilities, hearing impairment and autism at several teacher colleges. Certificate courses are Learner Support Assistant, Functional Assessment, Education of Learners with Autism, Kenyan Sign Language, Braille and Audiology. Most ask for a D plus in KCSE, Audiology asks for a C minus, and Functional Assessment asks for the special needs diploma. KISE says graduates can identify and screen learners with special needs. KISE also trains caregivers and the public. Write to admissions@kise.ac.ke for training. For school heads: the Basic Education Act says special schools and institutions shall be provided with trained teachers, and the Persons with Disabilities Act says schools give individualized support and assistive devices. What the pages do not cover: nothing official I could read explained teaching methods for dyslexia or ADHD, and neither dyslexia nor ADHD appears on the KISE training page. Fees and intake dates were not read. A 2019 curriculum page from the Kenya Institute of Curriculum Development is old. The Teachers Service Commission site, the Ministry of Education's site and several others could not be read."
    }
  },

  PHRASES: {
    "ke-sped-rights": [
      "Can a school in Kenya refuse my child because of a disability?",
      "What does the law say about education for learners with disabilities?",
      "A head teacher refused to admit my child with a disability, what can I do?"
    ],
    "ke-sped-assessment": [
      "How do I get my child assessed for a disability in Kenya?",
      "Where is the Kenya Institute of Special Education assessment centre?",
      "How much does a disability assessment for a child cost?"
    ],
    "ke-sped-register-support": [
      "How do I register my child with the National Council for Persons with Disabilities?",
      "Is there a scholarship for a learner with a disability?",
      "How do I get a wheelchair or hearing aid for my child?"
    ],
    "ke-sped-exams": [
      "Can my child get extra time in the national exam?",
      "Does KNEC give Braille or large print papers?",
      "What help in exams is there for a learner with a disability?"
    ],
    "ke-sped-teachers": [
      "Where can I train to teach learners with disabilities?",
      "How do I learn Kenyan Sign Language as a teacher?",
      "Is there a course on autism for teachers in Kenya?"
    ]
  },

  KEYS: {
    "ke-sped-rights": "free and compulsory basic education",
    "ke-sped-assessment": "assessed and placed",
    "ke-sped-register-support": "support for learners with disabilities",
    "ke-sped-exams": "Kenya National Examinations Council",
    "ke-sped-teachers": "Kenya Institute of Special Education"
  }
};
