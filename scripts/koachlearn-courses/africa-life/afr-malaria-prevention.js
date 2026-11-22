"use strict";

// Koach Learn course: Africa: Life and Work -> "Preventing Malaria in Your Family" (owner, 30 October 2026: "are there any more courses africans can use to support there lives").
// Written in the ADDIE format (model: re-entry/reentry-ai-digital-confidence.js). For mothers, fathers, carers and young people across Africa: how malaria spreads and who is most at risk, sleeping under a
// treated net every night, fewer mosquitoes and bites around the home, clinic services that protect pregnant women and young children (antenatal care, vaccines and preventive medicine where offered),
// testing every fever the same day, and the danger signs of severe malaria. Prevention and when to get help only: no medicine names for self-treatment, no doses, no treatment plans and no diagnosis.
// Follows WHO guidance (cited) and points to the clinic, community health worker and national malaria programme or ministry of health.

const WHO_MALARIA = { name: "World Health Organization: Malaria fact sheet (spread, symptoms, danger signs, nets, spraying, chemoprevention, vaccines, testing)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" };
const CDC_MALARIA = { name: "CDC: About malaria (bites in the late evening and at night, symptoms, seek care quickly)", url: "https://www.cdc.gov/malaria/about/index.html" };
const WHO_WATER = { name: "World Health Organization: Drinking-water fact sheet (household water containers as mosquito breeding sites; cover them)", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };

module.exports = {
  id: "afr-malaria-prevention",
  category: "Africa: Life and Work",
  name: "Preventing Malaria in Your Family",
  skills: "Knowing how malaria spreads and who is at risk, Using a treated bed net every night, Reducing mosquitoes around the home, Using clinic services for pregnant women and children, Testing every fever the same day, Spotting severe malaria danger signs",
  outcome: "protect your family from malaria: sleep under a treated net every night, cut down mosquitoes around your home, use the clinic's services for pregnant women and young children, get every fever tested the same day, and spot the danger signs that mean you go to the clinic now.",
  about: [
    "Malaria is spread by mosquito bites, and Africa carries most of the world's cases and deaths. WHO says that in 2024 the WHO African Region had about 95% of the world's malaria cases and deaths, and that children under 5 were about three in four of the deaths there. Malaria can be prevented, and it can be treated when it is found early. This course is for mothers, fathers, grandparents, carers and young people in Nigeria, DR Congo, Kenya, Ghana, Burkina Faso, Mali, Cameroon and across Africa.",
    "You will learn how malaria spreads and who is most at risk, hang and care for a treated bed net, cut down the places mosquitoes breed and bite around your home, find out which clinic services protect pregnant women and young children, get every fever tested the same day, and spot the danger signs of severe malaria.",
    "This course teaches prevention and when to get help. It does not tell you which medicine to take or how much: only a health worker can test for malaria and decide the treatment. Each lesson takes about five minutes and ends with a \"Try it now\" task, and together they build your household malaria plan."
  ],
  finalTask: "Make a household malaria plan on one page: who in your home is most at risk; how many treated nets you have and need, where each person sleeps under one, and how you will care for them; three things you will do to cut mosquitoes around your home; the clinic visits planned for any pregnant woman or young child; what you will do the same day anyone has a fever; and a danger-signs card with your nearest clinic's or community health worker's name and number.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mothers, fathers, grandparents, carers and young people across Africa, especially in areas with a lot of malaria, in villages, towns and informal settlements. Many have had malaria themselves and look after young children or a pregnant family member.",
    startingPoint: "Know that mosquitoes cause malaria and many have a bed net. But nets are often not used every night or by everyone, nets have holes, standing water sits around the home, fevers are treated at home with leftover or market medicine without a test, and danger signs are missed until late.",
    gap: "Malaria still kills many young children and harms pregnant women and their babies. Families need simple daily habits (a net every night, fewer mosquitoes) and quick action (a test for every fever, the clinic at once for danger signs) to prevent deaths. These habits are free or low-cost and work best together.",
    constraints: [
      "Reading level: plain words and short sentences; many learners speak English as a second language",
      "Devices: a basic phone with costly data; lessons work offline once loaded",
      "Money: low budgets; many nets, tests and services are free or low-cost through clinics and national programmes, but this varies",
      "Health: prevention and warning signs only; no medicine names for self-treatment, no doses, no treatment plans, no diagnosis; learners follow their clinic, community health worker and ministry of health",
      "Time: 4 to 6 minute lessons that fit around housework and work"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your own household", action: "explain how malaria spreads and list who in your home is most at risk", standard: "naming the mosquito bite at night and naming young children and pregnant women" },
    { id: "O2", condition: "Given a treated bed net and the places your family sleeps", action: "hang a treated net, tuck it in and repair any holes", standard: "with every person, starting with young children and pregnant women, sleeping under a net every night" },
    { id: "O3", condition: "Given the area around your home", action: "remove or cover the places where mosquitoes breed and block their way into the house", standard: "carrying out at least three actions in one week" },
    { id: "O4", condition: "Given a pregnant woman or a young child in your family", action: "list the malaria services your clinic offers them and plan the visits", standard: "naming early antenatal visits and asking about vaccines and preventive medicine where offered" },
    { id: "O5", condition: "Given a family member with a fever in a malaria area", action: "take the person for a malaria test the same day and follow the health worker's treatment", standard: "never treating with leftover or unknown medicine and never stopping early" },
    { id: "O6", condition: "Given a sick family member", action: "spot the danger signs of severe malaria and take the person to the clinic at once", standard: "naming at least four danger signs and the nearest clinic or community health worker" }
  ],
  chapters: [
    {
      name: "Chapter 1: Stopping the bite",
      lessons: [
        {
          title: "How malaria spreads and who is most at risk",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explain how malaria spreads and list who in your home is most at risk.",
          text: [
            "Malaria is caused by a tiny parasite. It is spread by the bite of certain female mosquitoes (Anopheles). A mosquito bites a person with malaria, then bites someone else and passes it on. It does not pass directly from person to person by touch, food or air.",
            "These mosquitoes bite mostly in the late evening and at night, often while people sleep. Signs of malaria usually start 10 to 15 days after the bite, with fever, chills and headache.",
            "WHO says those most at risk of severe malaria are babies and children under 5, pregnant women, people with HIV, and travellers who come from places without malaria. In Africa, most malaria deaths are young children. WHO reports that Nigeria and DR Congo alone had over 40% of the region's malaria deaths in 2024. In much of North Africa local malaria is rare, but people from Morocco, Egypt or Tunisia who travel to malaria areas are at high risk and should see a health worker before they go."
          ],
          words: [["Parasite", "a tiny living thing that lives in another body and harms it."], ["Anopheles", "the kind of mosquito that spreads malaria."], ["At risk", "more likely to get sick or very sick."]],
          slides: [
            { title: "How malaria spreads", bullets: ["A parasite carried by Anopheles mosquitoes", "Bite of a sick person, then the next person", "Not by touch, food or air"] },
            { title: "When they bite", bullets: ["Mostly late evening and at night", "Signs start 10 to 15 days after the bite", "Fever, chills, headache"] },
            { title: "Most at risk", bullets: ["Babies and children under 5", "Pregnant women", "People with HIV; travellers from places without malaria"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Write the names of everyone who sleeps in your home. Circle those most at risk: children under 5, any pregnant woman, anyone with HIV, and visitors from places without malaria.",
          youCanNow: "explain how malaria spreads and say who in your home is most at risk.",
          quickCheck: [
            { objective: "O1", q: "How does malaria spread?", options: ["By shaking hands", "Through the bite of certain mosquitoes", "By eating mangoes", "By cold rain"], answer: 1, why: "Malaria is passed by the bite of infected Anopheles mosquitoes, not by touch, food or weather." },
            { objective: "O1", q: "Who in a family is most at risk of severe malaria?", options: ["Young children under 5 and pregnant women", "Teenage boys only", "Grandparents only", "Nobody is more at risk"], answer: 0, why: "WHO names young children and pregnant women among those most at risk." }
          ]
        },
        {
          title: "A treated net every night",
          objectives: ["O2"],
          minutes: 5,
          goal: "Hang a treated bed net, tuck it in and repair any holes.",
          text: [
            "A bed net treated with insecticide (often called an ITN or a long-lasting net) is one of the main ways WHO recommends to prevent malaria. The net stops mosquitoes reaching you while you sleep, and the insecticide kills or weakens those that land on it. WHO says newer types of nets protect better where mosquitoes no longer die from the old insecticide.",
            "A net only works when it is used every night, all year, not just in the rainy season. Hang it over the bed or sleeping mat so it reaches the floor, tuck the edges under the mattress or mat before dark, and get in without leaving gaps. If there are not enough nets for everyone, young children and pregnant women sleep under one first, then work to get nets for the rest.",
            "Look after it: check for holes every week and sew or knot them closed straight away. Wash it gently and not too often, and dry it in the shade, following the instructions on the packet or from your health worker. Do not use nets for fishing, fencing or gardens. Many national programmes give nets free at clinics, antenatal visits, schools or in campaigns: ask your clinic or community health worker."
          ],
          steps: ["Hang the net over the bed or mat so it reaches the floor.", "Tuck the edges under the mattress or mat before dark.", "Get in without leaving gaps, every night.", "Check for holes every week and close them at once.", "Wash gently, not too often, and dry it in the shade.", "Ask your clinic or community health worker about free nets."],
          words: [["Insecticide", "a chemical that kills insects."], ["ITN (insecticide-treated net)", "a bed net treated with insecticide to keep off and kill mosquitoes."], ["Campaign", "a time when health workers give out nets or services to many people."]],
          slides: [
            { title: "Why a treated net works", bullets: ["Stops mosquitoes while you sleep", "Insecticide kills or weakens them", "One of WHO's main ways to prevent malaria"] },
            { title: "Every night, all year", bullets: ["Net reaches the floor", "Tucked in before dark, no gaps", "Not enough nets? Children and pregnant women first"] },
            { title: "Look after it", bullets: ["Check for holes every week; close them", "Wash gently, not often; dry in shade", "Never for fishing or gardens"] },
            { title: "Getting nets", bullets: ["Clinics, antenatal visits, schools, campaigns", "Ask your clinic or community health worker"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Tonight, check every net in your home. Hang each one so it reaches the floor, tuck it in and close any holes. Count how many more nets your family needs.",
          youCanNow: "hang, tuck in and care for a treated net so everyone, starting with the most at risk, sleeps under one every night.",
          quickCheck: [
            { objective: "O2", q: "When should your family sleep under the net?", options: ["Only in the rainy season", "Only when someone is sick", "Every night, all year", "Only on weekends"], answer: 2, why: "Mosquitoes can bite and spread malaria all year; the net works only when used every night." },
            { objective: "O2", q: "You find a small hole in the net. What do you do?", options: ["Throw the net away", "Use it for fishing", "Wait until the hole is bigger", "Sew or knot it closed straight away"], answer: 3, why: "Mosquitoes get through small holes; closing them at once keeps the net working." }
          ]
        },
        {
          title: "Fewer mosquitoes and fewer bites around the home",
          objectives: ["O3"],
          minutes: 5,
          goal: "Remove or cover the places where mosquitoes breed and block their way into the house.",
          text: [
            "Mosquitoes lay their eggs in still water. Puddles, old tyres, tins, broken pots, blocked drains, uncovered water drums and buckets can all become breeding places close to where your family sleeps.",
            "Around the home: empty or turn over things that hold water; cover water drums, buckets and tanks with a lid or a tight cloth; clear blocked gutters and drains; fill puddles with soil. Do this every week, especially in the rainy season, and work with neighbours, because mosquitoes fly between houses.",
            "Keep them out and avoid bites: close doors and windows at dusk and fix screens on windows and eaves if you can. In the evening, wear long sleeves and long trousers or a long wrapper. Repellents with DEET, IR3535 or icaridin can help after dusk; use them as the label says. Coils and vaporizers can help too, but never replace the net. If spray teams from the health programme come to spray inside homes (indoor residual spraying), let them in and follow their advice about not washing or painting the walls afterwards."
          ],
          steps: ["Walk around your home and find everything that holds still water.", "Empty, turn over, cover or remove it.", "Clear blocked drains and fill puddles.", "Close doors and windows at dusk; fix screens if you can.", "Cover arms and legs in the evening; use repellent as the label says.", "Let the health programme's spray teams in."],
          words: [["Breeding place", "still water where mosquitoes lay eggs."], ["Repellent", "a cream or spray that keeps mosquitoes off your skin."], ["Indoor residual spraying (IRS)", "health workers spraying insecticide on inside walls to kill mosquitoes that rest there."]],
          slides: [
            { title: "Mosquitoes breed in still water", bullets: ["Puddles, tyres, tins, broken pots", "Blocked drains, open drums and buckets"] },
            { title: "Every week around the home", bullets: ["Empty or turn over things that hold water", "Cover drums, buckets and tanks", "Clear drains; fill puddles; work with neighbours"] },
            { title: "Keep them out, avoid bites", bullets: ["Close doors and windows at dusk; screens", "Long sleeves and trousers in the evening", "Repellent as the label says; never instead of the net"] },
            { title: "Spray teams", bullets: ["Indoor spraying kills resting mosquitoes", "Let the health programme's teams in", "Follow their advice afterwards"] }
          ],
          sources: [WHO_MALARIA, WHO_WATER],
          tryIt: "Walk around your home now. Write every place with still water. Empty, cover or remove at least three today, and plan to check again every week.",
          youCanNow: "remove mosquito breeding places around your home and cut down bites in the evening.",
          quickCheck: [
            { objective: "O3", q: "Where do mosquitoes lay their eggs?", options: ["In dry sand", "In still water like puddles, tyres and open buckets", "In cooking fires", "In bread"], answer: 1, why: "Mosquitoes need still water to lay their eggs." },
            { objective: "O3", q: "You use a mosquito coil in the evening. What is true?", options: ["It can help, but you still sleep under a net", "You no longer need a net", "It cures malaria", "It must burn all night next to the baby"], answer: 0, why: "Coils and repellents add protection but never replace the net." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Stopping the bite",
        questions: [
          { objective: "O1", q: "When do malaria mosquitoes mostly bite?", options: ["At midday", "Only in the morning", "In the late evening and at night", "Only in the dry season"], answer: 2, why: "Anopheles mosquitoes bite mostly in the late evening and at night, often while people sleep." },
          { objective: "O2", q: "Your family has three nets and five people. Who sleeps under the nets first?", options: ["The father and the eldest sons", "Visitors", "Whoever goes to bed first", "Young children and the pregnant woman"], answer: 3, why: "Young children and pregnant women are most at risk, so they come first while you get more nets." },
          { objective: "O2", q: "How should a net be hung?", options: ["Reaching the floor and tucked in before dark", "Rolled up above the bed", "Half over the bed", "Only over the face"], answer: 0, why: "A net that reaches the floor and is tucked in leaves no gaps for mosquitoes." },
          { objective: "O3", q: "There are old tyres full of rainwater behind your house. What do you do?", options: ["Leave them; they are not yours", "Empty them and store them dry, or remove them", "Add more water", "Cover them with a net"], answer: 1, why: "Water in tyres is a breeding place; emptying or removing them stops mosquitoes breeding." },
          { objective: "O3", q: "Health workers come to spray the inside walls of your house. What do you do?", options: ["Refuse them", "Wash the walls straight after", "Let them in and follow their advice afterwards", "Paint over the spray the same day"], answer: 2, why: "Indoor residual spraying is a core WHO measure; washing or painting walls stops it working." }
        ]
      }
    },
    {
      name: "Chapter 2: Protecting the most at risk and acting fast",
      lessons: [
        {
          title: "Protecting pregnant women and young children",
          objectives: ["O4"],
          minutes: 5,
          goal: "List the malaria services your clinic offers pregnant women and young children and plan the visits.",
          text: [
            "Malaria in pregnancy can harm both the mother and the baby: WHO says it can cause the baby to be born too early or too small. A pregnant woman should start antenatal visits early and go to every one. At antenatal care in many countries she can get a treated net, malaria testing and, where the national programme offers it, preventive medicine for malaria in pregnancy (WHO calls this IPTp). The health worker decides what she needs and when. Never take malaria medicine in pregnancy without a health worker.",
            "For young children: WHO recommends two malaria vaccines (RTS,S and R21) for children in areas with a lot of malaria, and they are being added to routine child vaccinations in many African countries. In some areas, for example parts of the Sahel such as Burkina Faso and Mali, health workers also give young children preventive medicine during the rainy season (seasonal malaria chemoprevention). Ask your clinic what is offered where you live and keep the child's health card up to date.",
            "Vaccines and preventive medicine add protection, but WHO says they work best together with nets. Keep using the net every night. Write the clinic dates in your plan, and ask your community health worker if you cannot get to the clinic."
          ],
          steps: ["Pregnant woman: start antenatal visits early and go to every one.", "Ask at antenatal care about a net, testing and preventive medicine for malaria.", "Child: ask the clinic whether malaria vaccines are given where you live and keep the health card up to date.", "Ask if there are rainy-season preventive medicine campaigns in your area.", "Write every clinic date in your plan and keep using nets."],
          words: [["Antenatal care", "health check-ups for a woman during pregnancy."], ["Vaccine", "a medicine, usually an injection, that helps the body protect itself from a disease."], ["Preventive medicine", "medicine a health worker gives to stop an illness before it starts."], ["Health card", "the card or booklet where the clinic records a child's vaccines and check-ups."]],
          slides: [
            { title: "Malaria in pregnancy", bullets: ["Can harm mother and baby", "Baby born too early or too small", "Start antenatal visits early; go to every one"] },
            { title: "At antenatal care, ask about", bullets: ["A treated net and malaria testing", "Preventive medicine where offered (IPTp)", "Never take malaria medicine without a health worker"] },
            { title: "Young children", bullets: ["Malaria vaccines RTS,S and R21 where offered", "Rainy-season preventive medicine in some areas", "Keep the health card up to date"] },
            { title: "Still use the net", bullets: ["Vaccines and medicine work best with nets", "Write clinic dates in your plan", "Ask your community health worker for help"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "If anyone in your home is pregnant or under 5, write down the next clinic date for each and the questions you will ask about nets, vaccines and preventive medicine. If no one is, write it for a neighbour or relative you can help.",
          youCanNow: "name the clinic services that protect pregnant women and young children from malaria and plan the visits.",
          quickCheck: [
            { objective: "O4", q: "A woman in your family is pregnant. What is the first step to protect her from malaria?", options: ["Wait until the last month", "Buy malaria medicine at the market", "Start antenatal visits early, sleep under a net and ask about malaria protection", "Stop eating fruit"], answer: 2, why: "Early antenatal care plus a net gives her the protection the clinic offers." },
            { objective: "O4", q: "Your child had the malaria vaccine. What about the net?", options: ["Throw it away", "Only use it in the rainy season", "Give it to the neighbours", "Keep using it every night; vaccines work best with nets"], answer: 3, why: "WHO says vaccines give the most benefit combined with nets and other measures." }
          ]
        },
        {
          title: "Fever: get a test the same day",
          objectives: ["O5"],
          minutes: 5,
          goal: "Take a family member with a fever for a malaria test the same day.",
          text: [
            "In a malaria area, treat every fever as possible malaria until a test says otherwise. Malaria often starts like many other illnesses, with fever, chills, headache and body aches, so you cannot tell by looking. WHO recommends that every suspected case is confirmed with a test, a rapid diagnostic test or a microscope, before treatment.",
            "Go the same day to a clinic, health centre or trained community health worker who can test. A rapid test takes a drop of blood from a finger and gives a result in minutes. In a child under 5, a fever should never wait until tomorrow.",
            "If the test shows malaria, the health worker chooses the medicine and tells you how to take it. Take all of it, exactly as told, even if the person feels better. Do not use leftover medicine, medicine meant for someone else, or unknown medicine from a market or hawker: it may be the wrong type, too little or fake. If the test is negative, the health worker looks for another cause. If the person is not better, or gets worse, go back."
          ],
          steps: ["Fever in a malaria area? Treat it as possible malaria.", "Go the same day to a clinic or a community health worker who can test.", "If malaria is found: take the medicine exactly as the health worker says, all of it.", "Never use leftover, borrowed or unknown medicine.", "Not better or worse? Go back at once."],
          words: [["Rapid diagnostic test (RDT)", "a quick test with a drop of blood from a finger that shows malaria in minutes."], ["Negative result", "the test did not find malaria."], ["Fake medicine", "medicine that looks real but has the wrong amount or nothing that works."]],
          slides: [
            { title: "Every fever could be malaria", bullets: ["Fever, chills, headache, aches", "You cannot tell by looking", "WHO: test before treatment"] },
            { title: "Test the same day", bullets: ["Clinic or trained community health worker", "Rapid test: a drop of blood, minutes", "Child under 5: never wait until tomorrow"] },
            { title: "If it is malaria", bullets: ["The health worker chooses the medicine", "Take all of it exactly as told", "Not better or worse? Go back"] },
            { title: "Never", bullets: ["Leftover or borrowed medicine", "Unknown medicine from a hawker", "It may be wrong, too little or fake"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Find out where your family can get a malaria test the same day: the nearest clinic or community health worker, the opening hours, and how you would get there. Write it in your plan.",
          youCanNow: "get every fever tested the same day and follow only the health worker's treatment, all of it.",
          quickCheck: [
            { objective: "O5", q: "Your child has a fever in the evening. What do you do?", options: ["Get a malaria test the same day from a clinic or community health worker", "Wait three days", "Give leftover medicine from last time", "Buy medicine from a hawker"], answer: 0, why: "WHO advises testing before treatment, and a child's fever should not wait." },
            { objective: "O5", q: "After two days of malaria medicine, your husband feels better. What should he do?", options: ["Stop and keep the rest for next time", "Finish all of it exactly as the health worker said", "Give the rest to a neighbour", "Double the next amount"], answer: 1, why: "Stopping early can let the malaria come back; take it all as told." }
          ]
        },
        {
          title: "Danger signs of severe malaria and your family plan",
          objectives: ["O6"],
          minutes: 5,
          goal: "Spot the danger signs of severe malaria and get the person to a clinic at once.",
          text: [
            "Malaria can become severe quickly, especially in young children and pregnant women. Severe malaria is an emergency.",
            "WHO lists these danger signs. Go to the clinic or hospital NOW, day or night, if the person: is extremely tired or weak, or cannot sit or stand; is confused, very sleepy or hard to wake; has fits (convulsions), especially more than once; has difficulty breathing; has dark or bloody urine; has yellow eyes or skin; or has unusual bleeding. A child who cannot drink or breastfeed, or who vomits everything, also needs the clinic now.",
            "Be ready before it happens: write the danger signs and the name, place and phone number of your nearest clinic, hospital and community health worker on a card on the wall; know how you will get there at night; and keep some transport money aside if you can. Then put everything from this course into your household malaria plan."
          ],
          steps: ["Learn the danger signs.", "If you see any: go to the clinic or hospital now, day or night.", "Make a card with the signs and your nearest clinic's and health worker's names and numbers.", "Plan how you will travel at night and keep transport money if you can.", "Write your household malaria plan."],
          words: [["Severe malaria", "malaria that has become dangerous to life and needs a hospital or clinic at once."], ["Convulsions (fits)", "sudden shaking of the body that the person cannot control."], ["Jaundice", "yellow colour in the eyes or skin."]],
          slides: [
            { title: "Severe malaria is an emergency", bullets: ["It can happen fast", "Most dangerous for young children and pregnant women"] },
            { title: "Go NOW, day or night, if", bullets: ["Extreme weakness; confused or hard to wake", "Fits (convulsions); difficulty breathing", "Dark or bloody urine; yellow eyes or skin; bleeding", "Child cannot drink or breastfeed, or vomits everything"] },
            { title: "Be ready", bullets: ["Danger-signs card on the wall", "Clinic, hospital and health worker numbers", "Night transport plan; money aside if you can"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Make your danger-signs card now with at least four signs and your nearest clinic's or community health worker's name and number. Then write your full household malaria plan from the final task.",
          youCanNow: "spot the danger signs of severe malaria, get help at once, and keep a household malaria plan.",
          quickCheck: [
            { objective: "O6", q: "A child with malaria starts having fits. What do you do?", options: ["Wait to see if it stops", "Give more of the same medicine", "Go to the clinic or hospital now", "Let the child sleep it off"], answer: 2, why: "Convulsions are a danger sign of severe malaria; it is an emergency." },
            { objective: "O6", q: "Which is a danger sign of severe malaria?", options: ["Mild headache", "Feeling a bit hot after work", "Wanting to eat", "Yellow eyes, or dark or bloody urine"], answer: 3, why: "WHO lists jaundice and dark or bloody urine as danger signs that need emergency care." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Protecting the most at risk and acting fast",
        questions: [
          { objective: "O4", q: "What can a pregnant woman get at antenatal care in many countries?", options: ["Free fishing nets", "A treated net, malaria testing and preventive medicine where the programme offers it", "Malaria medicine to keep at home", "Nothing about malaria"], answer: 1, why: "Antenatal care is where many programmes give nets, tests and preventive medicine in pregnancy." },
          { objective: "O4", q: "Which vaccines does WHO recommend against malaria for children in high-malaria areas?", options: ["RTS,S and R21", "Polio and measles", "Only tetanus", "There is no malaria vaccine"], answer: 0, why: "WHO recommends RTS,S (since 2021) and R21 (since 2023) for children in areas with moderate to high malaria." },
          { objective: "O5", q: "Why test before treating a fever?", options: ["Tests are fun", "So you can sell the medicine", "Because many illnesses look like malaria; the test shows if it is", "Tests replace nets"], answer: 2, why: "Malaria looks like other fevers; a test makes sure the right treatment is given." },
          { objective: "O5", q: "A hawker offers cheap malaria tablets. What do you do?", options: ["Buy them for the family", "Buy them only for children", "Share them with neighbours", "Do not buy; get tested and treated by a health worker"], answer: 3, why: "Unknown medicine can be wrong or fake; testing and a health worker's treatment are safe." },
          { objective: "O6", q: "At midnight your daughter with malaria is confused and very hard to wake. What do you do?", options: ["Go to the clinic or hospital now", "Wait for morning", "Give her more medicine", "Put her under the net and let her sleep"], answer: 0, why: "Confusion and being hard to wake are danger signs; go now, day or night." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Preventing Malaria in Your Family",
    questions: [
      { objective: "O1", q: "What carries malaria from person to person?", options: ["Flies", "Certain mosquitoes (Anopheles)", "Dirty water", "Coughing"], answer: 1, why: "Malaria is passed by the bite of infected Anopheles mosquitoes." },
      { objective: "O1", q: "About how long after a bite do malaria signs usually start?", options: ["The same hour", "After one year", "10 to 15 days", "Never"], answer: 2, why: "WHO says symptoms usually appear 10 to 15 days after the infected bite." },
      { objective: "O1", q: "A cousin from Tunisia, where local malaria is rare, visits you in a malaria area. What is true?", options: ["She is safe because she is an adult", "She cannot get malaria", "She only needs a net in the rainy season", "She is at high risk and should see a health worker before travelling and sleep under a net"], answer: 3, why: "Travellers from places without malaria are at high risk, so they plan with a health worker." },
      { objective: "O2", q: "What does the insecticide on a treated net do?", options: ["Kills or weakens mosquitoes that land on it", "Makes the net smell nice", "Cures malaria", "Keeps the net clean"], answer: 0, why: "The insecticide kills or weakens mosquitoes, so the net protects more." },
      { objective: "O2", q: "How should you dry a washed net?", options: ["In hot sun for a week", "In the shade, after washing gently", "Over the cooking fire", "Wet, on the bed"], answer: 1, why: "Gentle washing and drying in the shade help the net keep working." },
      { objective: "O2", q: "Which use of a net is wrong?", options: ["Over a sleeping mat", "Over a baby's cot", "Fencing the vegetable garden", "Over a pregnant woman's bed"], answer: 2, why: "Nets are for sleeping under; using them for gardens or fishing leaves people unprotected." },
      { objective: "O3", q: "Which job cuts mosquito breeding at home?", options: ["Leaving buckets uncovered", "Keeping old tyres in the yard", "Sleeping outside", "Emptying, covering or removing things that hold still water"], answer: 3, why: "Removing still water takes away the places mosquitoes lay eggs." },
      { objective: "O3", q: "When should you close doors and windows to keep mosquitoes out?", options: ["At dusk", "At noon", "Only on Sundays", "Never"], answer: 0, why: "Malaria mosquitoes bite mostly from late evening and at night." },
      { objective: "O3", q: "Why work with neighbours on still water?", options: ["To borrow their tyres", "Because mosquitoes fly between houses", "So they pay for it", "It does not matter"], answer: 1, why: "Breeding places next door still send mosquitoes to your home." },
      { objective: "O4", q: "WHO says malaria in pregnancy can cause...", options: ["Nothing at all", "Twins", "The baby to be born too early or too small", "Only a mild cold"], answer: 2, why: "Malaria in pregnancy can lead to early birth and low birth weight." },
      { objective: "O4", q: "Where can you find out if malaria vaccines are given to children where you live?", options: ["A social media post", "The market", "A neighbour's guess", "Your clinic or community health worker"], answer: 3, why: "Vaccine programmes differ by place; the clinic knows what is offered." },
      { objective: "O4", q: "In parts of the Sahel, what do health workers give young children in the rainy season?", options: ["Preventive malaria medicine through campaigns", "Free phones", "Fishing nets", "Nothing"], answer: 0, why: "Seasonal malaria chemoprevention is given to young children in high-risk seasons in some areas." },
      { objective: "O5", q: "What does WHO recommend before treating a suspected malaria case?", options: ["Wait a week", "A test with a rapid test or microscope", "Ask a neighbour", "Buy two kinds of medicine"], answer: 1, why: "WHO recommends confirming every suspected case with a test before treatment." },
      { objective: "O5", q: "You have tablets left from last year's malaria. Your son has a fever. What do you do?", options: ["Give him the old tablets", "Give him half the old tablets", "Take him for a test today; do not use leftover medicine", "Wait and see"], answer: 2, why: "Leftover medicine may be the wrong type or too little; test first and follow the health worker." },
      { objective: "O5", q: "The malaria test was negative but your child still has a fever two days later. What do you do?", options: ["Stop worrying", "Give malaria medicine anyway", "Wait another week", "Go back to the health worker"], answer: 3, why: "If the fever continues or gets worse, the health worker needs to look again." },
      { objective: "O5", q: "Who decides which malaria medicine to take and how much?", options: ["A trained health worker after a test", "The person who is sick", "A market seller", "A text message"], answer: 0, why: "Only a health worker can choose the right medicine and amount after a test." },
      { objective: "O6", q: "Which of these means go to the clinic now?", options: ["A runny nose", "Difficulty breathing", "Feeling hungry", "A small cut"], answer: 1, why: "Difficulty breathing is a danger sign of severe malaria." },
      { objective: "O6", q: "A baby with fever will not breastfeed and vomits everything. What do you do?", options: ["Try again tomorrow", "Give water only and wait", "Go to the clinic now", "Give adult medicine"], answer: 2, why: "A child who cannot drink or vomits everything needs the clinic at once." },
      { objective: "O6", q: "What helps you act fast at night in an emergency?", options: ["Nothing; you will remember", "A list of medicines and doses", "Your mobile money PIN", "A danger-signs card with clinic numbers and a night transport plan"], answer: 3, why: "Knowing the signs, who to call and how to get there saves time." },
      { objective: "O1", q: "Can malaria pass from person to person by touching or sharing food?", options: ["No; it is spread by mosquito bites", "Yes, by touching", "Yes, by sharing food", "Yes, through the air"], answer: 0, why: "WHO says malaria does not spread directly from person to person; mosquitoes carry it." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 3, 6, 9, 12, 13, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Who is at risk", objective: "O1", notYet: "No one is marked as most at risk, or the plan does not say how malaria spreads.", meets: "Young children, pregnant women and other high-risk people in the home are named, with the night mosquito bite as the cause.", exceeds: "Also plans for visitors or travellers from places without malaria." },
      { name: "Nets every night", objective: "O2", notYet: "Nets are counted but not who sleeps under them, or holes are not mentioned.", meets: "Every sleeping place is listed with a net, the most at risk first, with weekly hole checks and gentle care.", exceeds: "Missing nets are counted and the learner has asked the clinic or community health worker how to get them." },
      { name: "Fewer mosquitoes", objective: "O3", notYet: "Fewer than three actions, or actions that do not remove still water or block bites.", meets: "At least three actions, such as emptying containers, covering drums, clearing drains and closing doors at dusk.", exceeds: "A weekly check day is set and neighbours are involved." },
      { name: "Clinic services", objective: "O4", notYet: "No clinic visits planned for a pregnant woman or young child in the home.", meets: "Antenatal visits and child clinic dates are written, with questions about nets, vaccines and preventive medicine.", exceeds: "Visits are booked or done, and the child's health card is up to date." },
      { name: "Fever action", objective: "O5", notYet: "The plan includes home treatment with leftover or market medicine, or waiting to see.", meets: "A same-day test at a named clinic or community health worker, and the full treatment as the health worker says.", exceeds: "Opening hours and a back-up place to test are written too." },
      { name: "Danger-signs card", objective: "O6", notYet: "Fewer than four danger signs, or no clinic contact.", meets: "At least four danger signs and the nearest clinic's or health worker's name and number.", exceeds: "Also a night transport plan, with no medicine names or doses on the card." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Homes where every person, starting with young children and pregnant women, sleeps under a net 30 days later (follow-up survey)",
      "Families who get a malaria test the same day for a child's fever, as reported by families or community health workers",
      "More pregnant women starting antenatal care early and more children up to date on vaccines where malaria vaccines are offered",
      "Fewer children arriving at the clinic late with severe malaria over the next rainy season"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A treated bed net to practise hanging and checking (or the learner's own)",
      "A needle and thread to close holes",
      "Paper and pen for the household plan and the danger-signs card",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Works well with mothers' clubs, antenatal groups, schools, faith groups, farmer groups and community health worker visits; take the pre-test together.",
      "Hang a net together in Lesson 2 and walk around the meeting place to find still water in Lesson 3.",
      "Invite the local community health worker or clinic nurse to say what the clinic offers: free nets, testing, vaccines and preventive medicine differ by country and area.",
      "Do not name malaria medicines or give doses; send all treatment questions to the clinic, community health worker or ministry of health.",
      "Use the national malaria programme's current messages during campaigns and the rainy season.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
