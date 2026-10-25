"use strict";

// Kyro "Special education and ADHD" guide, United States topics, part C (ADHD, ADHD at school, autism, learning disabilities, teacher resources).
// Every fact is from the fact sheets sped-facts-health-teaching.txt and (ADHD sections) sped-facts-fed2.txt. Pages were read on 25 October 2026.
module.exports = {
  SOURCES: {
    usc_cdcAdhdAbout: { name: "CDC: ADHD in Children (published May 15, 2024; updated October 21, 2026)", url: "https://www.cdc.gov/adhd/about/index.html" },
    usc_cdcAdhdSigns: { name: "CDC: Symptoms of ADHD (published May 15, 2024; updated June 1, 2026)", url: "https://www.cdc.gov/adhd/signs-symptoms/index.html" },
    usc_cdcAdhdDiagnosis: { name: "CDC: Diagnosing ADHD (published May 15, 2024; updated October 21, 2026)", url: "https://www.cdc.gov/adhd/diagnosis/index.html" },
    usc_cdcAdhdClassroom: { name: "CDC: ADHD in the Classroom (published May 15, 2024; updated October 21, 2026)", url: "https://www.cdc.gov/adhd/treatment/classroom.html" },
    usc_ocrAdhd504: { name: "U.S. Department of Education, Office for Civil Rights: Students with ADHD and Section 504, a resource guide, with a Dear Colleague Letter (July 26, 2016)", url: "https://sites.ed.gov/idea/files/OCR-letter-07-26-2016.pdf" },
    usc_ecfr3008: { name: "Electronic Code of Federal Regulations: 34 CFR 300.8, child with a disability (current text, read 25 October 2026)", url: "https://www.ecfr.gov/current/title-34/subtitle-B/chapter-II/part-300/subpart-A/section-300.8" },
    usc_cdcAsdAbout: { name: "CDC: About Autism Spectrum Disorder (published May 15, 2024; page header April 13, 2026)", url: "https://www.cdc.gov/autism/about/index.html" },
    usc_cdcAsdSigns: { name: "CDC: Signs and Symptoms of Autism Spectrum Disorder (May 16, 2024)", url: "https://www.cdc.gov/autism/signs-symptoms/index.html" },
    usc_cdcAsdScreening: { name: "CDC: Screening for Autism Spectrum Disorder (updated April 15, 2025; reviewed October 1, 2026)", url: "https://www.cdc.gov/autism/diagnosis/index.html" },
    usc_cdcAsdServices: { name: "CDC: Accessing Services for Autism Spectrum Disorder (updated April 15, 2025; reviewed October 2, 2026)", url: "https://www.cdc.gov/autism/treatment/accessing-services.html" },
    usc_nichdLdAbout: { name: "NIH, NICHD: About Learning Disabilities (last reviewed 9/11/2018)", url: "https://www.nichd.nih.gov/health/topics/learning/conditioninfo" },
    usc_nichdLdSigns: { name: "NIH, NICHD: What are some signs of learning disabilities? (last reviewed 9/11/2018)", url: "https://www.nichd.nih.gov/health/topics/learning/conditioninfo/signs" },
    usc_nichdLdDiagnosed: { name: "NIH, NICHD: How are learning disabilities diagnosed? (last reviewed 9/11/2018)", url: "https://www.nichd.nih.gov/health/topics/learning/conditioninfo/diagnosed" },
    usc_nichdLdTreatment: { name: "NIH, NICHD: What are the treatments for learning disabilities? (last reviewed 9/11/2018)", url: "https://www.nichd.nih.gov/health/topics/learning/conditioninfo/treatment" },
    usc_nichdReading: { name: "NIH, NICHD: Reading and Reading Disorders (last reviewed 3/5/2020)", url: "https://www.nichd.nih.gov/health/topics/reading/conditioninfo/disorders" },
    usc_iris: { name: "IRIS Center, a federally funded center (Vanderbilt University; funded through the U.S. Department of Education, Office of Special Education Programs): home page and modules (copyright 2026)", url: "https://iris.peabody.vanderbilt.edu/" },
    usc_nciiBehavior: { name: "National Center on Intensive Intervention, a federally funded center: Behavior Strategies to Support Intensifying Intervention (no date shown)", url: "https://intensiveintervention.org/implementation-intervention/behavior-strategies" },
    usc_nciiTools: { name: "National Center on Intensive Intervention, a federally funded center: Tools Chart Overview (no date shown)", url: "https://intensiveintervention.org/tools-charts/overview" },
    usc_pbisWhat: { name: "Center on PBIS, a federally funded center: What is PBIS? (copyright 2026)", url: "https://www.pbis.org/pbis/what-is-pbis" },
    usc_pbisGuide: { name: "Center on PBIS, a federally funded center: Supporting and Responding to Students' Social, Emotional, and Behavioral Needs, Evidence-Based Practices for Educators, Version 2 (April 2025)", url: "https://www.pbis.org/resource/supporting-and-responding-to-behavior-evidence-based-classroom-strategies-for-teachers" },
    usc_wwcBehavior: { name: "Institute of Education Sciences, What Works Clearinghouse: Teacher-Delivered Behavioral Interventions in Grades K-5, practice guide (released December 2024)", url: "https://ies.ed.gov/ncee/WWC/PracticeGuide/31" }
  },

  TOPICS: {
    "sped-adhd": {
      title: "ADHD: what it is, signs, and who can diagnose it",
      kind: "special-ed",
      sources: ["usc_cdcAdhdAbout", "usc_cdcAdhdSigns", "usc_cdcAdhdDiagnosis"],
      text: "ADHD stands for attention-deficit/hyperactivity disorder. The Centers for Disease Control and Prevention, or CDC, calls it one of the most common neurodevelopmental disorders of childhood. I cannot say whether a child has ADHD. The person to ask is the child's doctor. You do not need to tell me a child's name. The CDC page lists signs a child with ADHD might show. They may daydream a lot, forget or lose things, squirm or fidget, talk too much, have trouble taking turns, or have a hard time getting along with others. The page says all children have trouble focusing at times. With ADHD the symptoms continue, can be severe, and cause difficulty at school, at home, or with friends. The page names three presentations. They are mostly inattentive, mostly hyperactive and impulsive, and combined. It says the presentation can change over time. If you are a parent, the CDC says the first step is to talk with a healthcare provider. There is no single test. Anxiety, depression, sleep problems and some learning disabilities can look similar. A diagnosis can be made by a psychologist or psychiatrist, or by a primary care provider such as a pediatrician. The provider usually asks parents, teachers and others about the child's behavior at home and at school. For a free evaluation, the CDC says a local early intervention program serves children under age 3. The school system serves children age 3 or older. No doctor's referral is needed for early intervention. If you are a teacher, you may be asked to describe what you see. The CDC page does not list teachers among those who diagnose. The CDC help line is the National Resource Center on ADHD, 1-866-200-8098. The pages do not say how long this takes or how to ask the school."
    },

    "sped-adhd-school": {
      title: "ADHD at school: IEP, 504 plan and classroom help",
      kind: "special-ed",
      sources: ["usc_cdcAdhdClassroom", "usc_ocrAdhd504", "usc_ecfr3008", "usc_nichdLdTreatment"],
      text: "The CDC says children with ADHD can do well in school with support from parents, teachers and school administrators. Two federal laws cover support. One is the Individuals with Disabilities Education Act, or IDEA. The other is Section 504 of the Rehabilitation Act of 1973. The CDC says a child with ADHD may be eligible for special education through a category called other health impairment. The federal rule names attention deficit hyperactivity disorder there. The Office for Civil Rights letter of 2016 adds that eligibility is not limited to that category, and that a child found not eligible under IDEA must still be considered under Section 504. Neither page says a child with ADHD automatically qualifies. The CDC compares the two plans. An IEP, an individualized education program, gives individualized special education services under IDEA. A 504 plan gives services and changes to the learning environment so the child's needs are met as well as other students' needs. Accommodations the CDC lists include extra time on tests, instruction tailored to the child, positive feedback, technology, breaks, fewer distractions and help staying organized. These are examples, not promises. The CDC says there is limited information on which accommodations work. Some evidence shows clear expectations, immediate positive feedback and a daily report card with parents can help. If you are a teacher, the CDC checklist says to warn before changes, make assignments clear, offer choices, allow breaks, and talk with the student about what helps. If you are a parent, the page does not say how to ask for an IEP or 504 plan, or any deadline. Ask the school, or a parent training and information center."
    },

    "sped-autism": {
      title: "Autism: signs, screening ages, diagnosis and getting services",
      kind: "special-ed",
      sources: ["usc_cdcAsdAbout", "usc_cdcAsdSigns", "usc_cdcAsdScreening", "usc_cdcAsdServices"],
      text: "The CDC uses the term autism spectrum disorder, or ASD. I cannot say whether a child has autism. The child's doctor is the person to ask. You do not need to tell me a child's name. The CDC says ASD begins before age 3. Abilities vary a lot. The page lists examples to mention to the doctor. These are not a screening tool, and some people without ASD show some of them. It names a child who does not respond to name or show facial expressions by 9 months, or does not play pat-a-cake or use gestures by 12 months. It also names not pointing to show something interesting by 18 months, not noticing when others are hurt or upset by 24 months, and not joining other children in play by 36 months. Other signs include lining up toys, repeating words, and getting upset by small changes. If you are a parent, the CDC says contact your child's doctor with any concern. The American Academy of Pediatrics recommends developmental screening at 9, 18 and 30 months, and ASD screening at 18 and 24 months. A brief screening is not a diagnosis. There is no medical test. A specialist team does a formal evaluation. A diagnosis by an experienced professional can be reliable by age 2. For help, early intervention serves children from birth to age 3. A parent can refer their own child, with no doctor's referral. From age 3, ask the local public school system for a free evaluation under Child Find. You do not need a diagnosis first. The Early Childhood Technical Assistance Center number is (919) 962-2001. The page gives no timelines in days."
    },

    "sped-learning-disability": {
      title: "Learning disabilities and dyslexia: signs, diagnosis and supports",
      kind: "special-ed",
      sources: ["usc_nichdLdAbout", "usc_nichdLdSigns", "usc_nichdLdDiagnosed", "usc_nichdLdTreatment", "usc_nichdReading"],
      text: "These pages are from the National Institute of Child Health and Human Development, or NICHD. Several were last reviewed in 2018 and the reading pages in 2020. They are older than other pages I use. NICHD says learning disabilities affect how a person learns to read, write, speak and do math. They are not a sign of low intelligence. Types include dyslexia, dysgraphia and dyscalculia. I cannot say whether a child has one. Only a professional can diagnose. Signs the page lists include trouble reading or writing, math, memory, following directions and staying organized. Many children struggle at times. A child with a learning disability often has several related signs that do not go away over time. The page says these signs are not a screening tool. If you are a parent, NICHD says contact the school principal or special education coordinator to find out how to have your child evaluated. A full evaluation includes a medical exam, a review of school performance, and academic and psychological testing. Several specialists usually work as a team. The assessment must consider whether a student is bilingual or a second language learner. If you are a teacher, the school may use response to intervention. It watches all students' progress and adds tiers of help. For the school, the page says IDEA requires free special education supports, in most states from age 3 through high school or until age 21. Your state may set a different rule. For dyslexia, NICHD names intensive step by step reading teaching, extra time, audio books and word processing. It says teachers with special training give the most effective instruction. The pages give no timelines or dispute steps."
    },

    "sped-teacher-resources": {
      title: "For teachers and administrators: IRIS, NCII, PBIS and What Works",
      kind: "special-ed",
      sources: ["usc_iris", "usc_nciiBehavior", "usc_nciiTools", "usc_pbisWhat", "usc_pbisGuide", "usc_wwcBehavior"],
      text: "Here are four federal resources for teachers and administrators. Three are federally funded centers. The IRIS and PBIS pages say their views do not necessarily represent Department of Education policy. The fourth is a Department of Education research office. The IRIS Center offers free online modules. Examples are accommodations, classroom behavior management, executive functions, and writing high-quality IEPs. One module is written for administrators. Modules are free with no log-in. For a certificate, see the page. The pages do not rate the evidence for each module. The site map shows no module titled for ADHD. The National Center on Intensive Intervention explains behavior strategies in three areas. They are changing the setting before problems occur, teaching students to manage their own behavior, and reinforcement. Its tools charts show expert ratings of how rigorous assessments and interventions are. A tool on the chart is not an endorsement. The page gives no rating for the behavior strategy documents. The Center on PBIS calls PBIS an evidence-based, tiered framework when carried out with fidelity. Its practice guide of April 2025 lists classroom practices such as five praise statements for each corrective statement. The guide says it is not a replacement for more comprehensive training. The What Works Clearinghouse guide of December 2024 covers grades kindergarten to 5 and gives seven recommendations. Strong evidence is stated for teaching clear expectations, reminding students, acknowledging expected behavior, and behavior ratings for feedback. Moderate evidence is stated for instructional choices, opportunities to respond, and teaching students to monitor their own behavior. The pages I read do not name ADHD for these strategies."
    }
  },

  PHRASES: {
    "sped-adhd": [
      "How do I find out if my child has ADHD?",
      "What are the signs of ADHD in a kid?",
      "How do I know if my child might have ADHD?"
    ],
    "sped-adhd-school": [
      "My student has ADHD, what help can the school give?",
      "How can ADHD qualify a child for special education at school?",
      "What can I do in my classroom for a child with ADHD?"
    ],
    "sped-autism": [
      "What are the early signs of autism in a toddler?",
      "When should my baby be screened for autism?",
      "What are the early signs of autism?"
    ],
    "sped-learning-disability": [
      "My child struggles with reading, could it be dyslexia?",
      "How does the school test for a learning disability?",
      "What help is there for a child with dyslexia?"
    ],
    "sped-teacher-resources": [
      "Where can I find free training on classroom behavior?",
      "What is PBIS and does it work?",
      "What does the What Works Clearinghouse say about behavior?"
    ]
  },

  KEYS: {
    "sped-adhd": "I cannot say whether a child has ADHD",
    "sped-adhd-school": "Section 504 of the Rehabilitation Act",
    "sped-autism": "I cannot say whether a child has autism",
    "sped-learning-disability": "National Institute of Child Health",
    "sped-teacher-resources": "four federal resources"
  }
};
