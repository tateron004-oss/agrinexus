"use strict";

// Koach Learn course: Africa: Life and Work -> "Mother and Child Health: Pregnancy, Birth and the First Years" (owner's request, 30 October 2026).
// For mothers, fathers, grandmothers and carers in towns and villages across Africa. Teaches prevention, healthy habits, planning and the warning signs that mean
// "go to the clinic now". It gives NO medicine doses, treatment plans or diagnosis: every lesson points to the clinic, the midwife, the community health worker
// and the ministry of health, and follows WHO guidance (cited in `sources`).

const WHO_ANC = { name: "WHO: New guidelines on antenatal care for a positive pregnancy experience (eight contacts, first in the first 12 weeks)", url: "https://www.who.int/news/item/07-11-2016-new-guidelines-on-antenatal-care-for-a-positive-pregnancy-experience" };
const WHO_MATERNAL = { name: "WHO fact sheet: Maternal mortality (main causes; skilled care before, during and after birth)", url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality" };
const WHO_NEWBORN = { name: "WHO fact sheet: Newborn mortality (newborn care and newborn danger signs)", url: "https://www.who.int/news-room/fact-sheets/detail/newborn-mortality" };
const WHO_IYCF = { name: "WHO fact sheet: Infant and young child feeding", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_DIARRHOEA = { name: "WHO fact sheet: Diarrhoeal disease (prevention, home care, signs of dehydration)", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_IMMUNIZATION = { name: "WHO fact sheet: Immunization coverage (what childhood vaccines prevent)", url: "https://www.who.int/news-room/fact-sheets/detail/immunization-coverage" };

module.exports = {
  id: "afr-mother-child-health",
  category: "Africa: Life and Work",
  name: "Mother and Child Health: Pregnancy, Birth and the First Years",
  skills: "Planning clinic visits in pregnancy, Spotting danger signs in pregnancy and after birth, Making a birth plan, Caring for a newborn in the first days, Spotting danger signs in a baby or young child, Keeping the child health card up to date",
  outcome: "make a simple family health plan for a pregnancy and a young child: when to go to the clinic, where the baby will be born and how you will get there, how to care for the newborn, which danger signs mean \"go to the clinic now\", and how to keep vaccines and growth checks on time.",
  about: [
    "This course is for mothers and mothers-to-be, fathers, grandmothers, older sisters and anyone who helps care for a pregnant woman or a young child, in towns and villages across Africa. You do not need any health training.",
    "Chapter 1 covers pregnancy and birth: clinic visits, the danger signs that mean \"go now\", and a birth plan. Chapter 2 covers the baby's first days and first years: newborn care, danger signs in babies and young children, and feeding, vaccines and growth checks.",
    "This course teaches prevention, healthy habits and when to get help. It does not tell you which medicine to take or how much, and it does not replace the nurse, midwife, doctor or community health worker. Always follow your clinic and your ministry of health. Each lesson takes about five minutes and ends with a task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page family health plan for a pregnancy or a young child in your family (or an example, such as Amina, 5 months pregnant in Kano, or baby Kofi, 3 months old, in Kumasi): the clinic visits still to come, the birth plan (place, skilled health worker, transport, money put aside, who goes with her and who minds the home), the newborn care steps for the first day, the danger signs for mother and child with the nearest clinic and an emergency phone number, and the next vaccine and growth-check dates from the health card.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mothers and mothers-to-be, fathers, grandmothers and other carers in Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Egypt and across Africa. Many live far from a hospital, use a basic Android phone with costly data, and get health advice from family, neighbours and the community health worker.",
    startingPoint: "Most know that pregnant women should go to the clinic, but many start late, go fewer times than advised, or wait at home when a danger sign appears. Few have a written birth plan, money set aside for transport, or a list of newborn and child danger signs. Many keep the child health card but do not read the next vaccine date on it.",
    gap: "Sub-Saharan Africa carries most of the world's deaths in pregnancy and birth, and the first month is the most dangerous time for a baby. Many of these deaths follow delays: in deciding to go, in getting there, and in getting care. Families who plan ahead, know the danger signs and keep visits on time act faster and keep mothers and children safer.",
    constraints: [
      "Reading level: plain words and short sentences; every health word is explained",
      "Devices: a basic phone; the course can also be taught out loud in a group or women's meeting",
      "Health services, free maternity schemes, vaccine schedules and health cards differ by country and change: learners check with their clinic or ministry of health",
      "No medicine doses, treatment plans or diagnosis: the course teaches prevention and when to get help",
      "Privacy: learners never have to share their own pregnancy or health details in a group"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a pregnancy in your family and its due month", action: "write a clinic visit plan for the pregnancy that starts in the first 12 weeks", standard: "with at least eight contacts as WHO advises, or the number your clinic gives you" },
    { id: "O2", condition: "Given a list of signs during pregnancy or after birth", action: "pick out the danger signs that mean the woman must go to the clinic now", standard: "getting at least 4 of 5 right and choosing \"go now\" instead of \"wait and see\"" },
    { id: "O3", condition: "For a coming birth", action: "write a birth plan naming the health facility, the transport, the money put aside and the people who will help", standard: "with every part filled in and agreed with the family before the last month" },
    { id: "O4", condition: "For a baby's first day", action: "list the newborn care steps: keep the baby warm, breastfeed within the first hour and keep the cord clean and dry", standard: "in the right order and without harmful practices" },
    { id: "O5", condition: "Given a description of a sick baby or young child", action: "identify the danger signs that mean the child must go to the clinic now", standard: "getting at least 4 of 5 right" },
    { id: "O6", condition: "Using a child's health card or booklet", action: "find the next vaccine and growth-check dates and write the feeding step for the child's age", standard: "with no missed visit left unplanned" }
  ],
  chapters: [
    {
      name: "Chapter 1: A healthy pregnancy and a safe birth",
      lessons: [
        {
          title: "Clinic visits during pregnancy",
          objectives: ["O1"],
          minutes: 5,
          goal: "Write a plan of clinic visits for a pregnancy, starting in the first 12 weeks.",
          text: [
            "Care during pregnancy is called antenatal care. At each visit, the nurse or midwife checks the mother's blood pressure, weight and blood, listens to the baby, and gives the care your country's clinic offers. Many problems can be found early, before they become dangerous.",
            "WHO advises at least eight contacts with a health worker during pregnancy, and the first one in the first 12 weeks (the first three months). So as soon as a woman thinks she is pregnant, she goes to the clinic. Your clinic may give you its own schedule; follow it.",
            "At the first visit, the clinic usually gives a mother-and-child health booklet or card. The name differs by country (for example, Kenya's Mother and Child Health Handbook or Ghana's Maternal and Child Health Record Book). Keep it in a plastic bag, bring it to every visit, and write the next date on your phone calendar.",
            "Fathers and family help too: help with transport money, go to a visit with her, and let her rest. Ask the clinic or your health insurance office whether pregnancy care is free or covered where you live; this changes, so ask each time."
          ],
          steps: ["Go to the clinic as soon as you think you are pregnant, ideally in the first 12 weeks.", "Ask how many visits the clinic plans and when.", "Write each date in the booklet and on your phone calendar.", "Bring the booklet to every visit.", "If you miss a visit, go as soon as you can; do not wait for the next one."],
          words: [["Antenatal care", "health checks for a woman during pregnancy, before the baby is born."], ["Contact", "a visit or meeting with a health worker, at the clinic or at home."], ["Midwife", "a trained health worker who cares for women in pregnancy, birth and after birth."]],
          slides: [
            { title: "Antenatal care", bullets: ["Health checks during pregnancy", "Finds problems early", "Blood pressure, weight, blood and the baby"] },
            { title: "When to go", bullets: ["First visit in the first 12 weeks", "WHO advises at least 8 contacts", "Follow your own clinic's schedule"] },
            { title: "Keep the booklet", bullets: ["Bring it to every visit", "Keep it dry in a plastic bag", "Write the next date on your phone"] },
            { title: "Family can help", bullets: ["Transport money", "Go with her to a visit", "Let her rest"] }
          ],
          sources: [WHO_ANC],
          tryIt: "Take a pregnancy in your family, or the example of Fatou in Thiès, Senegal, who is 10 weeks pregnant. Write the month of the first visit and list the months of the next visits. Next to each, write who will go with her.",
          youCanNow: "plan clinic visits for a pregnancy, starting early, and keep the dates where you will see them.",
          quickCheck: [
            { objective: "O1", q: "When should a woman make her first clinic visit in pregnancy?", options: ["Only when the baby is about to come", "In the last three months", "As soon as she thinks she is pregnant, ideally in the first 12 weeks", "Only if she feels sick"], answer: 2, why: "WHO advises the first contact in the first 12 weeks, so problems are found early." },
            { objective: "O1", q: "How many contacts with a health worker does WHO advise during pregnancy?", options: ["At least eight", "One", "Two", "None if she feels well"], answer: 0, why: "WHO advises at least eight contacts; your clinic may give its own schedule." }
          ]
        },
        {
          title: "Danger signs in pregnancy and after birth",
          objectives: ["O2"],
          minutes: 5,
          goal: "Identify the danger signs that mean a pregnant woman or new mother must go to the clinic now.",
          text: [
            "Most pregnancies go well. But some signs mean danger for the mother or the baby. With these signs, do not wait to see if they pass, and do not wait for the next visit. Go to the clinic or hospital now, day or night.",
            "Danger signs in pregnancy: bleeding from the vagina; a bad headache with blurred vision; fits (convulsions); swelling of the face and hands; fever; strong pain in the belly; the baby moving much less or not at all; water breaking before labour; trouble breathing.",
            "Danger signs after birth: heavy bleeding (soaking cloths or pads quickly); fever; bad-smelling discharge; a bad headache, blurred vision or fits; pain or swelling in one leg; feeling very sad or unable to cope for many days.",
            "Heavy bleeding, infection and high blood pressure are among the main causes of death in pregnancy and birth, and they can kill fast. Speed saves lives. Call the community health worker or the emergency number your area uses on the way."
          ],
          steps: ["Learn the danger signs and stick the list on the wall at home.", "If you see one, stop what you are doing.", "Go to the clinic or hospital now with the booklet.", "Call ahead or call the community health worker on the way."],
          words: [["Danger sign", "a sign that the mother or baby may be in serious danger and needs care now."], ["Convulsions (fits)", "sudden shaking of the body that the person cannot control."], ["Discharge", "fluid that comes out of the vagina."]],
          slides: [
            { title: "Danger signs mean go NOW", bullets: ["Do not wait to see if it passes", "Do not wait for the next visit", "Day or night"] },
            { title: "In pregnancy", bullets: ["Bleeding, fits, fever, strong belly pain", "Bad headache with blurred vision; swollen face or hands", "Baby moving much less; water breaks early; trouble breathing"] },
            { title: "After birth", bullets: ["Heavy bleeding or fever", "Bad-smelling discharge", "Bad headache, blurred vision or fits", "Very sad or unable to cope for many days"] },
            { title: "Speed saves lives", bullets: ["Take the booklet", "Call the health worker on the way"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Write the danger signs for pregnancy and after birth on one sheet, in your own language if you prefer. Add the name of the nearest clinic and an emergency phone number. Put it on the wall or save a photo on your phone.",
          youCanNow: "pick out the danger signs in pregnancy and after birth and know to go to the clinic at once.",
          quickCheck: [
            { objective: "O2", q: "Mariam in Bouaké is 7 months pregnant and has a bad headache and blurred vision. What should she do?", options: ["Rest and see how she feels tomorrow", "Wait for her next clinic visit", "Drink more water and lie down", "Go to the clinic or hospital now"], answer: 3, why: "A bad headache with blurred vision is a danger sign; it can mean dangerously high blood pressure." },
            { objective: "O2", q: "Which is a danger sign after birth?", options: ["Feeling tired after the birth", "Heavy bleeding that soaks cloths quickly", "Wanting to sleep when the baby sleeps", "Being hungry"], answer: 1, why: "Heavy bleeding after birth is a main cause of death in mothers and needs care now." }
          ]
        },
        {
          title: "Making a birth plan",
          objectives: ["O3"],
          minutes: 5,
          goal: "Write a birth plan that names the place, the transport, the money and the helpers.",
          text: [
            "Many dangers in birth happen fast and are hard to see coming. Care from a skilled health worker (a midwife, nurse or doctor) during and after birth saves the lives of mothers and babies. So the safest plan is to give birth at a health facility.",
            "A birth plan answers simple questions before labour starts: Which health facility? How will we get there at night? Who will pay for the transport, and how much have we put aside? Who goes with her? Who minds the other children? Who could give blood if needed?",
            "Start saving early, a little each week. For example, a family in Kisumu puts aside KES 200 a week, and a family in Tamale puts aside GHS 20 a week (these are example amounts; plan your own). Save the boda boda, okada, taxi or ambulance number in the phone now.",
            "Pack a small bag in the last months: the health booklet, clean cloths, clothes and a cap for the baby, and things for the mother. Agree the plan with the whole family so nobody argues when labour begins."
          ],
          steps: ["Choose the health facility and visit it before the birth if you can.", "Arrange transport for day and night, and save the numbers.", "Save money each week for transport and costs.", "Choose who goes with her and who minds the home.", "Pack the bag and agree the plan with the family."],
          words: [["Birth plan", "a written plan of where and how the baby will be born and how you will get there."], ["Skilled health worker", "a midwife, nurse or doctor trained to care for births."], ["Labour", "the pains and work of the body that push the baby out."]],
          slides: [
            { title: "Why a birth plan", bullets: ["Birth dangers can come fast", "Skilled care saves mothers and babies", "Plan before labour starts"] },
            { title: "The plan answers", bullets: ["Which facility?", "Transport, day and night?", "Money put aside?", "Who goes with her, who minds home?"] },
            { title: "Save early", bullets: ["A little each week (amounts are examples)", "Save the transport numbers now"] },
            { title: "Pack the bag", bullets: ["Health booklet", "Clean cloths, baby clothes and cap", "Things for the mother"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Write a birth plan for a pregnancy in your family, or for Amina in Kano who is due in three months. Fill in: facility, transport (day and night), weekly savings, who goes with her, who minds the home, and what is in the bag.",
          youCanNow: "write a birth plan that names the place, the transport, the money and the helpers.",
          quickCheck: [
            { objective: "O3", q: "What is the safest place to give birth?", options: ["At home with no one trained", "Wherever labour starts", "A health facility with a skilled health worker", "On the way, to save time"], answer: 2, why: "Skilled care during and after birth saves the lives of mothers and newborns." },
            { objective: "O3", q: "When should the family agree the birth plan?", options: ["When labour starts", "Before the last month of pregnancy", "After the baby is born", "Only if there is a problem"], answer: 1, why: "Planning ahead stops delays and arguments when labour starts." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: A healthy pregnancy and a safe birth",
        questions: [
          { objective: "O1", q: "Salma in Asyut thinks she is 8 weeks pregnant. What is the best next step?", options: ["Go to the clinic now for the first visit", "Wait until the baby moves", "Wait until the last month", "Ask a neighbour instead of the clinic"], answer: 0, why: "WHO advises the first contact in the first 12 weeks." },
          { objective: "O1", q: "Why bring the mother-and-child booklet to every visit?", options: ["The clinic will sell it again", "It is only for the father", "It holds the record of checks and the next dates", "It is not needed after the first visit"], answer: 2, why: "The booklet keeps the history and the next visit dates in one place." },
          { objective: "O2", q: "Which of these is a danger sign in pregnancy?", options: ["Wanting certain foods", "The baby moving much less or not at all", "Feeling a bit tired", "Needing to pass urine more often"], answer: 1, why: "A baby moving much less can mean the baby is in danger; go now." },
          { objective: "O2", q: "Akosua has a fever and bad-smelling discharge five days after the birth. What should the family do?", options: ["Wait a week", "Give her tea and rest", "Take her to the clinic now", "Wait for the baby's vaccine visit"], answer: 2, why: "Fever and bad-smelling discharge are signs of infection after birth; she needs care now." },
          { objective: "O3", q: "Which is part of a good birth plan?", options: ["Saved transport numbers for day and night", "Waiting to decide until labour starts", "Spending the savings first", "Not telling the family"], answer: 0, why: "Arranged transport, money and helpers stop dangerous delays." }
        ]
      }
    },
    {
      name: "Chapter 2: Your baby's first days and first years",
      lessons: [
        {
          title: "Caring for a newborn in the first days",
          objectives: ["O4"],
          minutes: 5,
          goal: "List the newborn care steps for the first day: warmth, early breastfeeding and a clean cord.",
          text: [
            "A newborn cannot keep itself warm. Dry the baby, then put the baby skin-to-skin on the mother's chest with a cloth over both, and put a cap on. Delay the first bath; ask the health worker when.",
            "Start breastfeeding within the first hour after birth. The first thick, yellow milk (colostrum) is good for the baby; do not throw it away. WHO advises only breast milk for the first 6 months: no water, no tea, no glucose water and no other drinks or foods.",
            "Keep the cord clean and dry. Do not put anything on it unless the health worker tells you to, and wash your hands before touching it. Wash hands with soap before feeding and after changing the baby.",
            "If you can, stay at the facility for about a day after birth, and go to the check-ups after birth that the clinic plans, for both mother and baby. Register the birth and start the vaccines given at birth."
          ],
          steps: ["Dry the baby and put the baby skin-to-skin on the mother, covered, with a cap.", "Breastfeed within the first hour.", "Give only breast milk.", "Keep the cord clean and dry; wash hands before touching it.", "Go to the after-birth check-ups; register the birth; start the vaccines."],
          words: [["Newborn", "a baby in its first 28 days."], ["Skin-to-skin", "holding the naked baby against the mother's bare chest to keep the baby warm."], ["Colostrum", "the first thick, yellow breast milk, full of protection for the baby."], ["Cord", "the part of the umbilical cord still on the baby's belly after birth."]],
          slides: [
            { title: "Keep the baby warm", bullets: ["Dry the baby", "Skin-to-skin on the mother, covered", "Cap on; delay the first bath"] },
            { title: "Breastfeed early", bullets: ["Within the first hour", "Colostrum is good: do not throw it away", "Only breast milk for 6 months"] },
            { title: "Keep the cord clean", bullets: ["Clean and dry", "Nothing on it unless the health worker says so", "Wash hands first"] },
            { title: "After birth", bullets: ["Check-ups for mother and baby", "Register the birth", "Start the birth vaccines"] }
          ],
          sources: [WHO_NEWBORN, WHO_IYCF],
          tryIt: "Write the newborn care steps for the first day in order, as a short list you could give to a new mother or a grandmother. Then write one harmful habit you have heard of in your area and the safe step that replaces it.",
          youCanNow: "list the newborn care steps for the first day: warmth, early breastfeeding, only breast milk and a clean cord.",
          quickCheck: [
            { objective: "O4", q: "When should breastfeeding start?", options: ["After the baby's first bath", "After three days", "When the milk turns white", "Within the first hour after birth"], answer: 3, why: "WHO advises starting within the first hour; the first milk protects the baby." },
            { objective: "O4", q: "A relative says to give the newborn water because it is hot. What does WHO advise?", options: ["Only breast milk for the first 6 months", "Water every hour", "Sugar water", "Tea with the breast milk"], answer: 0, why: "Breast milk has all the water a baby under 6 months needs; other drinks can carry germs." }
          ]
        },
        {
          title: "Danger signs in babies and young children",
          objectives: ["O5"],
          minutes: 5,
          goal: "Identify the danger signs that mean a baby or young child must go to the clinic now.",
          text: [
            "Babies and young children can get very sick very fast. Some signs mean go to the clinic now, not tomorrow.",
            "In a newborn: not feeding well or not able to suck; less active or floppy; fast or difficult breathing; fever, or feeling cold; fits.",
            "In a young child: cannot drink or breastfeed; vomits everything; fits; very sleepy or hard to wake; fast or difficult breathing; fever (in a malaria area, test the same day); diarrhoea with blood, or with sunken eyes and a very thirsty or very weak child.",
            "With diarrhoea, keep breastfeeding and giving drinks and food, and ask the health worker about oral rehydration solution (ORS) and zinc. But if you see a danger sign, go now. Do not use medicines from the market or a neighbour without a health worker's advice."
          ],
          steps: ["Look for the danger signs, even at night.", "If you see one, go to the clinic now with the child health card.", "Keep breastfeeding and giving drinks on the way.", "Call the community health worker if you cannot get there."],
          words: [["Fits (convulsions)", "sudden shaking the child cannot control."], ["Dehydration", "when the body loses too much water, for example through diarrhoea or vomiting."], ["ORS", "oral rehydration solution: a drink of clean water, salt and sugar that replaces water lost through diarrhoea."]],
          slides: [
            { title: "Go now, not tomorrow", bullets: ["Children get very sick very fast", "Take the child health card"] },
            { title: "Newborn danger signs", bullets: ["Not feeding or not sucking", "Floppy or less active", "Fast or hard breathing; fever or cold; fits"] },
            { title: "Young child danger signs", bullets: ["Cannot drink or breastfeed; vomits everything", "Fits; very sleepy or hard to wake", "Fast or hard breathing; fever; bloody diarrhoea"] },
            { title: "Diarrhoea", bullets: ["Keep breastfeeding and giving drinks", "Ask the health worker about ORS and zinc", "Sunken eyes or very weak: go now"] }
          ],
          sources: [WHO_NEWBORN, WHO_DIARRHOEA],
          tryIt: "Make a danger-sign card for babies and young children: one column for newborns, one for older babies and children. Add the nearest clinic, the community health worker's number and how you would get there at night.",
          youCanNow: "spot the danger signs in a baby or young child and get the child to the clinic at once.",
          quickCheck: [
            { objective: "O5", q: "A 3-week-old baby in Kumasi stops sucking and feels cold. What should the family do?", options: ["Wait until morning", "Give the baby water", "Go to the clinic now", "Give a medicine from the market"], answer: 2, why: "Not feeding and feeling cold are newborn danger signs that need care now." },
            { objective: "O5", q: "A 2-year-old with diarrhoea has sunken eyes and is very weak. What is right?", options: ["Stop all drinks", "Go to the clinic now", "Stop breastfeeding", "Wait three days"], answer: 1, why: "Sunken eyes and weakness are signs of dehydration, which can kill a child; go now." }
          ]
        },
        {
          title: "Feeding, vaccines and growth checks",
          objectives: ["O6"],
          minutes: 6,
          goal: "Find the next vaccine and growth-check dates on the child health card and write the feeding step for the child's age.",
          text: [
            "The child health card or booklet shows the vaccines given, the next vaccine dates and the growth chart. Vaccines protect against diseases such as measles, polio, whooping cough, tetanus and some kinds of pneumonia and diarrhoea. The schedule differs by country; follow your card and your clinic.",
            "Growth checks at the clinic or with the community health worker weigh and measure the child. A growth line that goes flat or down is a warning: ask the health worker what to do.",
            "Feeding by age (WHO): only breast milk for the first 6 months. From about 6 months, add soft, mashed family foods and keep breastfeeding to 2 years or longer. Start with small amounts and slowly give more, thicker food and more kinds. Babies of 6 to 8 months need 2 to 3 meals a day; children of 9 to 23 months need 3 to 4 meals, with 1 to 2 snacks if needed.",
            "If you miss a vaccine date, do not give up: go as soon as you can and the clinic will catch the child up. Write every next date on your phone calendar."
          ],
          steps: ["Open the child health card.", "Find the last vaccine and the next date.", "Find the last growth check and see if the line is going up.", "Write the feeding step for the child's age.", "Put the next dates on your phone calendar."],
          words: [["Vaccine", "medicine given to protect a child from a disease before they catch it; the clinic gives it on a schedule."], ["Growth chart", "a chart on the card that shows the child's weight over time."], ["Complementary feeding", "adding family foods from about 6 months while breastfeeding continues."]],
          slides: [
            { title: "The child health card", bullets: ["Vaccines given and next dates", "Growth chart", "Bring it to every visit"] },
            { title: "Vaccines and growth", bullets: ["Follow your country's schedule", "Growth line flat or down: ask the health worker", "Missed a date? Go as soon as you can"] },
            { title: "Feeding by age (WHO)", bullets: ["0-6 months: only breast milk", "From about 6 months: soft family foods plus breast milk", "6-8 months: 2-3 meals; 9-23 months: 3-4 meals, 1-2 snacks"] }
          ],
          sources: [WHO_IMMUNIZATION, WHO_IYCF],
          tryIt: "Final task: write your one-page family health plan. Include the clinic visits still to come, the birth plan, the first-day newborn steps, the danger signs for mother and child with the clinic and an emergency number, and the next vaccine and growth-check dates from the card with the feeding step for the child's age.",
          youCanNow: "read a child health card for the next vaccine and growth-check dates and plan feeding for the child's age.",
          quickCheck: [
            { objective: "O6", q: "Baby Kofi missed his vaccine date last week. What should the family do?", options: ["Wait for next year", "Skip that vaccine", "Start again from the first vaccine", "Go to the clinic as soon as possible to catch up"], answer: 3, why: "The clinic can catch a child up; go as soon as you can." },
            { objective: "O6", q: "At about what age does a baby start eating family foods as well as breast milk?", options: ["About 6 months", "2 weeks", "1 month", "2 years"], answer: 0, why: "WHO advises adding soft family foods from about 6 months while breastfeeding continues." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Your baby's first days and first years",
        questions: [
          { objective: "O4", q: "What is the best way to keep a newborn warm right after birth?", options: ["Skin-to-skin on the mother's chest, covered, with a cap", "A cold bath", "Leaving the baby uncovered", "Putting the baby in another room"], answer: 0, why: "Skin-to-skin contact keeps the baby warm and helps breastfeeding start." },
          { objective: "O4", q: "What should be put on the cord?", options: ["Ash or cow dung", "Nothing unless the health worker says so; keep it clean and dry", "Butter", "Mud"], answer: 1, why: "A clean, dry cord lowers the risk of infection." },
          { objective: "O5", q: "Which sign in a young child means go to the clinic now?", options: ["A small cough with normal eating", "The child cannot drink or breastfeed", "Teething", "A runny nose and playing well"], answer: 1, why: "Not able to drink or breastfeed is a general danger sign." },
          { objective: "O5", q: "A child in Kano has fast, hard breathing at night. What should the parents do?", options: ["Wait until the morning clinic", "Give a cough medicine from the shop", "Go to the clinic or hospital now", "Rub the chest and wait"], answer: 2, why: "Fast or difficult breathing can mean pneumonia and needs care now." },
          { objective: "O6", q: "The growth line on the card has been flat for two months. What should the parent do?", options: ["Nothing; it is normal", "Stop the clinic visits", "Give only water", "Ask the health worker about it"], answer: 3, why: "A flat or falling line is a warning; the health worker can help find out why." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Mother and Child Health: Pregnancy, Birth and the First Years",
    questions: [
      { objective: "O1", q: "Care for a woman during pregnancy is called:", options: ["Antenatal care", "Postnatal care", "First aid", "A growth check"], answer: 0, why: "Antenatal means before birth." },
      { objective: "O1", q: "WHO advises the first pregnancy contact:", options: ["In the last month", "In the first 12 weeks", "Only if there is pain", "After the baby moves"], answer: 1, why: "Starting early helps find problems early." },
      { objective: "O1", q: "A pregnant woman missed a clinic visit. What is best?", options: ["Wait until labour", "Stop going", "Go as soon as she can", "Wait for the following visit"], answer: 2, why: "Going as soon as possible keeps her care on track." },
      { objective: "O2", q: "Which is a danger sign in pregnancy?", options: ["Feeling hungry", "Feeling the baby kick", "Bleeding from the vagina", "Wanting to sleep more"], answer: 2, why: "Bleeding in pregnancy can mean danger to mother and baby." },
      { objective: "O2", q: "A pregnant woman's face and hands suddenly swell and she has a bad headache. She should:", options: ["Go to the clinic now", "Eat less salt and wait", "Wait for the next visit", "Sleep it off"], answer: 0, why: "These can be signs of dangerously high blood pressure." },
      { objective: "O2", q: "Two days after the birth, the mother is soaking cloths with blood quickly. The family should:", options: ["Wait a day", "Give her tea", "Take her to the clinic now", "Ask her to rest"], answer: 2, why: "Heavy bleeding after birth can kill fast." },
      { objective: "O2", q: "Why should you not \"wait and see\" with a danger sign?", options: ["The clinic closes early", "Danger signs can get worse fast and speed saves lives", "Waiting is cheaper", "Signs always go away"], answer: 1, why: "Many deaths follow delays in deciding to go and getting there." },
      { objective: "O3", q: "Which question belongs in a birth plan?", options: ["What colour will the baby's clothes be?", "How will we get to the facility at night?", "Who will cook for visitors?", "What will the baby be called?"], answer: 1, why: "Transport, especially at night, is a key part of a birth plan." },
      { objective: "O3", q: "A family in Dakar wants money ready for the birth. A good step is to:", options: ["Save a little each week, starting early", "Borrow on the day", "Hope a neighbour pays", "Wait until labour"], answer: 0, why: "Saving early means money is ready when labour starts." },
      { objective: "O3", q: "Which belongs in the birth bag?", options: ["Nothing; the clinic has all", "Only money", "Food for the whole family", "The health booklet, clean cloths and baby clothes"], answer: 3, why: "The booklet and clean things for mother and baby are needed at birth." },
      { objective: "O4", q: "What is colostrum?", options: ["A vaccine", "A kind of tea for babies", "The first thick, yellow breast milk", "A baby cream"], answer: 2, why: "Colostrum is the first milk and protects the baby." },
      { objective: "O4", q: "For the first 6 months, WHO advises giving the baby:", options: ["Breast milk and water", "Only breast milk", "Porridge", "Cow's milk"], answer: 1, why: "Only breast milk; no other drinks or foods." },
      { objective: "O4", q: "Which first-day step is correct?", options: ["Bathe the baby in cold water at once", "Put ash on the cord", "Wait two days to breastfeed", "Dry the baby and put it skin-to-skin"], answer: 3, why: "Drying and skin-to-skin keep the newborn warm." },
      { objective: "O5", q: "Which is a newborn danger sign?", options: ["Sleeping between feeds", "Not able to suck", "Sneezing once", "Crying before a feed"], answer: 1, why: "A newborn that cannot suck needs care now." },
      { objective: "O5", q: "A child vomits everything and is very sleepy. The family should:", options: ["Wait until tomorrow", "Give market medicine", "Give no drinks", "Go to the clinic now"], answer: 3, why: "Vomiting everything and being very sleepy are general danger signs." },
      { objective: "O5", q: "A child has diarrhoea with blood in it. The family should:", options: ["Take the child to the clinic", "Stop all food and drink", "Wait for it to pass", "Give a neighbour's tablets"], answer: 0, why: "Blood in the stool is a reason to seek care." },
      { objective: "O5", q: "On the way to the clinic with a child who has diarrhoea, you should:", options: ["Stop breastfeeding", "Keep breastfeeding and giving drinks", "Give no water", "Give strong tea only"], answer: 1, why: "Drinks and breast milk replace lost water." },
      { objective: "O6", q: "Where do you find the next vaccine date?", options: ["On the child health card", "On the radio", "From a market seller", "Nowhere; you guess"], answer: 0, why: "The card shows the vaccines given and the next dates." },
      { objective: "O6", q: "A child of 10 months should have about how many meals a day, by WHO advice?", options: ["One", "3 to 4, plus 1 to 2 snacks if needed", "Only breast milk", "Ten"], answer: 1, why: "WHO advises 3 to 4 meals for 9 to 23 months, plus snacks as needed." },
      { objective: "O6", q: "Until what age does WHO advise continuing breastfeeding?", options: ["3 months", "6 months", "1 year exactly", "2 years or longer"], answer: 3, why: "Breastfeeding continues alongside family foods to 2 years or longer." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 3, 6, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Clinic visits", objective: "O1", notYet: "No visit dates, or the first visit is late in pregnancy.", meets: "Lists the visits still to come, with the first in the first 12 weeks, written in the booklet or on the phone.", exceeds: "Also says who goes with her to each visit and how it is paid for." },
      { name: "Birth plan", objective: "O3", notYet: "One or more of place, transport, money or helpers is missing.", meets: "Names the facility, day and night transport, weekly savings, who goes with her and who minds the home.", exceeds: "Also has transport numbers saved, the bag packed and the plan agreed with the family." },
      { name: "Newborn first day", objective: "O4", notYet: "Steps are missing, out of order or include a harmful practice.", meets: "Warmth (skin-to-skin), breastfeeding in the first hour, only breast milk and a clean, dry cord.", exceeds: "Also names a local harmful habit and the safe step that replaces it." },
      { name: "Danger signs", objective: "O2", notYet: "The list misses key signs or says to wait and see.", meets: "Lists the main danger signs for mother and child, with the nearest clinic and an emergency number.", exceeds: "Also covers night-time transport and the community health worker's number." },
      { name: "Child danger signs", objective: "O5", notYet: "Child danger signs are missing or mixed up with normal signs.", meets: "Lists the newborn and young child danger signs that mean go now.", exceeds: "Explains them clearly enough for a grandmother or older sibling to use." },
      { name: "Card, vaccines and feeding", objective: "O6", notYet: "No next dates, or feeding advice does not fit the child's age.", meets: "Gives the next vaccine and growth-check dates from the card and the right feeding step for the age.", exceeds: "Dates are on the phone calendar with reminders." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Pregnant learners or family members who make a first clinic visit in the first 12 weeks (30-day follow-up survey)",
      "Families who report a written birth plan with money put aside and transport arranged",
      "Children whose next vaccine and growth-check visits are kept on time, reported by learners or partner clinics",
      "Partner community health workers report families coming sooner when a danger sign appears"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A basic phone, or a group session where the lessons are read out loud",
      "The mother-and-child health booklet or child health card, if the family has one",
      "Paper and pen for the danger-sign cards, the birth plan and the family health plan",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Good partners: community health workers, clinic midwives, women's groups, savings groups and faith groups; invite a midwife or nurse to answer questions.",
      "Never ask learners to share their own pregnancy, HIV status or other health details in the group; use the course examples instead.",
      "Do not give medicine doses or treatment advice; send all such questions to the clinic.",
      "Check local facts before the session: the nearest facility, emergency numbers, the local vaccine schedule and whether maternity care is free or covered.",
      "Invite fathers and grandmothers: decisions about going to the clinic are often made by the family.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
