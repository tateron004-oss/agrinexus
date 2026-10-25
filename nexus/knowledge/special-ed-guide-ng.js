"use strict";

// Kyro special education guide, Nigeria topics. Every fact is from the fact sheet sped-facts-ng.txt (Nigerian federal pages read on 25 October 2026).
module.exports = {
  SOURCES: {
    ng_sops: { name: "National Commission for Persons with Disabilities (NCPWD): National Standard Operating Procedures on Inclusion and Access of Persons with Disabilities to Pre-Tertiary Education (July 2024)", url: "https://ncpwd.gov.ng/pdfs/35document.pdf" },
    ng_regs: { name: "NCPWD, Federal Government Printer: Persons with Disabilities (Accessibility) Regulations, 2023 (Official Gazette No. 122, 7 July 2023)", url: "https://ncpwd.gov.ng/pdfs/44document.pdf" },
    ng_ncpwdEnforcement: { name: "NCPWD: Compliance and Enforcement department page (undated)", url: "https://ncpwd.gov.ng/Apps/Web/enforcement" },
    ng_ncpwdMandate: { name: "NCPWD: Core Mandate page (undated)", url: "https://ncpwd.gov.ng/Apps/Web/mandate" },
    ng_ncpwdContact: { name: "NCPWD: Contact page (undated)", url: "https://ncpwd.gov.ng/Apps/Web/contact" },
    ng_nhrcMandate: { name: "National Human Rights Commission (NHRC): Mandate page (undated)", url: "https://nhrc.gov.ng/about/nhrc-mandate.html" },
    ng_nhrcContact: { name: "National Human Rights Commission (NHRC): Contact us page (undated)", url: "https://nhrc.gov.ng/contact-us.html" },
    ng_nhrcEducation: { name: "National Human Rights Commission (NHRC): Right to Education page (undated)", url: "https://nhrc.gov.ng/focus-areas/right-to-education.html" },
    ng_waecSc: { name: "West African Examinations Council (WAEC), Nigeria national office: WASSCE 2026 timetable for school candidates (March 2026)", url: "https://www.waecnigeria.org/sites/default/files/2026-03/FINAL%20TIMETABLE%20WASSCE%20(SC)%202026%20-%20NIGERIA.pdf" },
    ng_waecPc: { name: "West African Examinations Council (WAEC), Nigeria national office: WASSCE 2026 timetable for private candidates, second series (August 2026)", url: "https://waecnigeria.org/sites/default/files/2026-08/WASSCE%20(PC%202)%202026%20TIME%20TABLE.pdf" },
    ng_nerdcCd: { name: "Nigerian Educational Research and Development Council (NERDC): Curriculum Development page (undated; file header July 2019)", url: "https://nerdc.gov.ng/content_manager/cd.html" },
    ng_nerdcEiie: { name: "NERDC: Emerging Issues in Education page (undated; file header July 2019)", url: "https://nerdc.gov.ng/content_manager/eiie.html" },
    ng_nerdcSpc: { name: "NERDC: Special Programme Centre page (undated)", url: "https://nerdc.gov.ng/content_manager/spc.html" },
    ng_feBasic: { name: "Federal Ministry of Education: Basic Education Department page (last updated 11 September 2026; read only as a summary)", url: "https://education.gov.ng/basic-educationdepartment" },
    ng_trcn: { name: "Teachers Registration Council of Nigeria (TRCN): home page and Resource Hub (undated)", url: "https://trcn.gov.ng/" }
  },

  TOPICS: {
    "ng-sped-inclusion-standards": {
      title: "Nigeria's national standards for including learners with disabilities in school",
      kind: "special-ed",
      sources: ["ng_sops"],
      text: "These are the standard operating procedures, called the SOPs, of the National Commission for Persons with Disabilities, the NCPWD, on including learners with disabilities in pre-tertiary education. Pre-tertiary means before university. They are dated July 2024 and cover pre-primary, primary, junior and senior secondary schools and skills centres, public and private. The NCPWD says schools must comply. The pages do not say if private schools are legally bound or if the SOPs were gazetted.\n\nIf you are a parent, the school's inclusion committee should include a parent representative. You are a key member of your child's IEP team. An IEP, an individualized education programme, is a written plan of services for a child with a disability. It lists current performance, measurable yearly goals, services, how far the child learns with peers, and how progress is measured. You do not need to tell me your child's name.\n\nIf you are a teacher, tell the school's special education coordinator or designated point of contact about any worry over a learner's progress. Next come screening, deeper assessment when needed, and referral to a learner support team. If the learner qualifies, an IEP is written. The SOPs say their screening questionnaire is not a diagnostic tool.\n\nFor the head teacher, set up a Disability Inclusion and Support Committee. It meets at least twice monthly. The SOPs name three kinds of school. Special schools teach learners with disabilities apart from their peers. Mainstream schools are regular schools that cater for them. Inclusive schools place all learners in age-appropriate general classes with support. Every school must have a transition and exit process, with a team that includes parents.\n\nThe SOPs set no deadlines, no consent rule and no appeal. The Disability Act 2018, the inclusive education policy of 2023, the special needs policy of 2015 and the Universal Basic Education Act could not be read, so wider legal rights are unknown here."
    },
    "ng-sped-accessibility": {
      title: "School buildings and the Accessibility Regulations 2023",
      kind: "special-ed",
      sources: ["ng_regs", "ng_sops"],
      text: "The Persons with Disabilities (Accessibility) Regulations, 2023 were published in the Official Gazette on 7 July 2023. They are about buildings and places open to the public: ramps, doors, toilets, lighting, signs and similar. They say nothing about teaching, admissions, IEPs or exams. An IEP is an individualized education programme, a written plan of services for a child with a disability.\n\nRegulation 155 is called Schools and Education Centres. It says, in full, that schools and other education centres shall comply with the provisions of these Regulations.\n\nRegulation 168 sets penalties. A person who breaks the Regulations faces an administrative penalty of not less than N500,000. The first words of that part are missing in the copy that was read, so who exactly it covers is unclear. A company, government institution or body corporate faces a penalty of not less than N2,000,000. Penalties go into the Fund set up under the Act.\n\nRegulation 169 lets the NCPWD, the National Commission for Persons with Disabilities, working with a relevant authority, seal off a built environment found to be in default. Before sealing, it shall issue the owner, manager, occupier or developer a 90 day notice to regularize the default.\n\nIf you are a parent or a teacher, these are the rules that apply to a school building problem, such as no ramp or no adapted toilet. The pages do not say how a person reports it. The national standards for schools also say school buildings should follow the NCPWD's national accessibility codes and standards.\n\nFor the head teacher, the Regulations apply to your school building.\n\nNot read: the full 170 pages of the Regulations, only searched parts. The Disability Act 2018 itself could not be read, so its penalties for refusing a child admission are unknown."
    },
    "ng-sped-complaints-help": {
      title: "Where to take a complaint when a school refuses a child with a disability",
      kind: "special-ed",
      sources: ["ng_ncpwdEnforcement", "ng_ncpwdMandate", "ng_ncpwdContact", "ng_nhrcMandate", "ng_nhrcContact", "ng_nhrcEducation", "ng_sops"],
      text: "No readable official page gave a step by step route for what to do when a school refuses a child with a disability. No form, deadline, fee or decision time appears on any page read. Two federal bodies take complaints in general. You do not need to tell me your child's name.\n\nThe National Commission for Persons with Disabilities, the NCPWD, says its functions include receiving complaints of persons with disabilities about violation of their rights, and supporting a person's right to seek redress in court, investigation, prosecution or sanctioning in appropriate cases. Its address is Plot 79 Ralph Shodeinde Street, Central Business District, Abuja. Its pages show several phone numbers and an email address spelled two ways, so I will not give them. Please confirm the contact details with the NCPWD before you call or write.\n\nThe National Human Rights Commission, the NHRC, says it receives and investigates complaints about violations of human rights, assists victims, acts as a conciliator between the parties, and refers matters needing prosecution to the Attorney General. Its head office is No 19 Aguiyi Ironsi Street, Maitama, Abuja. Its pages give a toll free number, 08006472428, a short code, 6472, and the email info@nhrc.gov.ng. Office hours are Monday to Friday, 8am to 4pm. Its site has a complaint tool, but how it works could not be read. Its pages do not say if it takes disability school complaints in particular, how long a case takes, or if it is free. Please confirm these details first.\n\nFor the head teacher, the national standards expect the school head and the school's inclusion committee to carry out the standards, and state education bodies to monitor. They do not call this a complaint route. The NCPWD may award a school a Disability Inclusion Certificate, or withdraw it.\n\nIf a child is in immediate danger, call your local emergency number. The Disability Act 2018 and the education laws could not be read, so what a family can demand is unknown here."
    },
    "ng-sped-exams": {
      title: "Examination help for candidates with disabilities",
      kind: "special-ed",
      sources: ["ng_sops", "ng_waecSc", "ng_waecPc"],
      text: "Two kinds of page say something about exams. The first is the July 2024 national standards of the National Commission for Persons with Disabilities, the NCPWD. The second is the West African Examinations Council, WAEC. WAEC is a regional council for West Africa with a Nigeria national office. It is not a Nigerian federal ministry or agency.\n\nWAEC's 2026 timetable for private candidates, second series, from August 2026, says candidates with special needs should be allowed one and half times the time allotted to other candidates. That is 1.5 times the normal time. The March 2026 timetable for school candidates gives the same 1.5 times for blind candidates and for deaf candidates. Neither note says how a candidate is classed, what proof or form is needed, who applies, by when, or what else is offered, such as braille papers, readers or interpreters. WAEC's help pages read had nothing on this. The National Examinations Council, NECO, could not be read at all.\n\nThe national standards say schools should give extra-time consideration to learners with albinism, low vision, learning disabilities, and intellectual and developmental disabilities. They say at least 30% of reading materials should be in large print and bold, and at least 10% braille copies of textbooks. They also list screen readers, speech-to-text, and other ways to assess, such as projects and presentations.\n\nIf you are a parent, you can ask the school what it plans for your child. The standards say an IEP, an individualized education programme, must state what changes are needed for state and national tests, or why a test is not suitable and how the child will be assessed instead. If you are a head teacher, the IEP is where this is written down.\n\nThe standards set no deadlines, consent rule or appeal. The Disability Act 2018 and the education policies could not be read."
    },
    "ng-sped-teachers": {
      title: "Official materials for teachers and school heads on special needs education",
      kind: "special-ed",
      sources: ["ng_nerdcCd", "ng_nerdcEiie", "ng_nerdcSpc", "ng_feBasic", "ng_sops", "ng_trcn"],
      text: "The Nigerian Educational Research and Development Council, NERDC, lists these materials on its Curriculum Development page. A Basic Education Curriculum for learners with special needs who are visually impaired. Hard and electronic copies of the Instructional Sign Language for Nigerian Schools, called ISLTENS. Senior secondary curricula for special needs education. Teachers' guides for the special needs versions of the basic and senior secondary curricula. The page gives no download link, dates or contents. NERDC also says it is the Secretariat for Albinism Education and has a blueprint on it. The national standards ask NERDC to develop a unique curriculum for learners with special needs, so do not assume one is finished.\n\nIf you are a teacher, the national standards of July 2024 list classroom supports. They include visual schedules, flexible seating, sign language, braille, large print, screen readers, a sensory-friendly space with sensory breaks, and, for a learner with attention or sensory issues, a classroom arranged to reduce distractions. They also describe behavioural support plans. They say users of the standards must have two to three days of training, and that teachers should hold a special education certificate such as a DIP, NCE, BSc/Ed or M.Ed.\n\nFor the school head, the Federal Ministry of Education says it retrained special needs teachers and master trainers on special needs materials and sign language with Gombe State. That page was read only as a summary and has no date for it. The Teachers Registration Council of Nigeria says registration is a legal requirement for teachers. Its pages had nothing on special needs.\n\nNothing official could be read on ADHD, autism or dyslexia, so I cannot give teaching steps for them. A child's doctor is the person for a medical question. The National Teachers' Institute and Universal Basic Education Commission sites could not be read, and the Disability Act 2018 and inclusive education policies could not either."
    }
  },

  PHRASES: {
    "ng-sped-inclusion-standards": [
      "What do the national rules say about including children with disabilities in school?",
      "I am a head teacher, what must my school do for learners with disabilities?",
      "What is an IEP and can I as a parent be part of it?"
    ],
    "ng-sped-accessibility": [
      "Does my child's school have to have a ramp?",
      "What is Regulation 155 about schools?",
      "What happens to a school that does not follow the accessibility rules?"
    ],
    "ng-sped-complaints-help": [
      "A school refused my child because of a disability, who do I complain to?",
      "How do I reach the National Commission for Persons with Disabilities?",
      "Can the Human Rights Commission help if a school will not take my child?"
    ],
    "ng-sped-exams": [
      "Can my child get extra time in WAEC?",
      "What exam help does a blind or deaf candidate get in Nigeria?",
      "Is WAEC, which gives exam help to candidates with disabilities, a government agency?"
    ],
    "ng-sped-teachers": [
      "Where can I find sign language materials for my classroom?",
      "I am a teacher and I have a pupil with ADHD, what official help is there?",
      "What training do teachers of learners with disabilities need in Nigeria?"
    ]
  },

  KEYS: {
    "ng-sped-inclusion-standards": "standard operating procedures",
    "ng-sped-accessibility": "Regulation 155",
    "ng-sped-complaints-help": "step by step route",
    "ng-sped-exams": "one and half times",
    "ng-sped-teachers": "Instructional Sign Language"
  }
};
