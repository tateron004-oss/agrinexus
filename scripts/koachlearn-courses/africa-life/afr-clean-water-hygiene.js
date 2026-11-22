"use strict";

// Koach Learn course: Africa: Life and Work -> "Clean Water, Sanitation and Hygiene at Home" (owner, 30 October 2026: "are there any more courses africans can use to support there lives").
// Written in the ADDIE format (model: re-entry/reentry-ai-digital-confidence.js). For mothers, fathers, carers and young people across Africa: choosing the safest water source, making water safer at home,
// storing it safely, handwashing with soap at the key times, toilets and child faeces, and the warning signs of diarrhoea and cholera that mean "go to the clinic now".
// Prevention only: no medicine doses, treatment plans or diagnosis. Follows WHO, CDC and WHO/UNICEF JMP guidance (cited in each lesson) and points to the local clinic, community health worker and ministry of health.

const WHO_WATER = { name: "World Health Organization: Drinking-water fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };
const CDC_SAFE_WATER = { name: "US Centers for Disease Control and Prevention (CDC): How to make water safe (boiling, settling and filtering, disinfecting)", url: "https://www.cdc.gov/healthywater/emergency/making-water-safe.html" };
const CDC_HANDS = { name: "CDC: About handwashing (key times and steps)", url: "https://www.cdc.gov/clean-hands/about/index.html" };
const JMP_SANITATION = { name: "WHO/UNICEF Joint Monitoring Programme (JMP): Sanitation ladder", url: "https://washdata.org/monitoring/sanitation" };
const WHO_DIARRHOEA = { name: "World Health Organization: Diarrhoeal disease fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_CHOLERA = { name: "World Health Organization: Cholera fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/cholera" };

module.exports = {
  id: "afr-clean-water-hygiene",
  category: "Africa: Life and Work",
  name: "Clean Water, Sanitation and Hygiene at Home",
  skills: "Choosing the safest water source, Making drinking water safer, Storing water safely, Handwashing with soap, Keeping toilets and child faeces safe, Spotting diarrhoea and cholera danger signs",
  outcome: "keep your family's water, hands and toilet safe: choose the safest water, make it safer at home, store it covered, wash hands with soap at the key times, deal safely with faeces, and know the warning signs that mean you go to the clinic now.",
  about: [
    "Germs in water, on hands and from faeces cause diarrhoea, cholera and typhoid. Diarrhoea is one of the biggest killers of young children, and most of it can be prevented with safe water, soap and a clean toilet. This course is for mothers, fathers, grandparents, carers and young people in towns and villages in Kenya, Nigeria, Ghana, DR Congo, Senegal, Egypt and across Africa.",
    "You will compare the water sources near you, make drinking water safer by boiling or with a chlorine product, store it so it stays clean, set up a place to wash hands with soap, keep the toilet and children's faeces safe, and learn the danger signs of diarrhoea and cholera.",
    "This course teaches prevention and when to get help. It does not tell you how to treat illness or what medicine to give: that is for the clinic, the community health worker and your ministry of health. Each lesson takes about five minutes and ends with a \"Try it now\" task at home."
  ],
  finalTask: "Make a one-page clean water and hygiene plan for your home: your safest water source and a back-up, how you will make drinking water safer, how you will store and serve it, where your handwashing place is and the key times your family washes hands, how you keep the toilet and children's faeces safe, and a danger-signs card with the name and phone number of your nearest clinic or community health worker.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mothers, fathers, grandparents, carers and young people across Africa, in towns, informal settlements and villages. Many fetch water from a borehole, well, kiosk, river or shared tap, or buy it in sachets or jerrycans, and share a toilet or latrine.",
    startingPoint: "Know that dirty water can make people sick and often boil water for babies. Many do not treat all drinking water, store it in open containers, dip cups into it by hand, wash hands without soap or only with water, and are not sure which signs of diarrhoea need the clinic at once.",
    gap: "Diarrhoea, cholera and typhoid spread through unsafe water, unwashed hands and faeces, and kill many young children. Families need a few daily habits, safe water, soap at the right times and safe toilets, plus knowing when to go to the clinic at once, to protect their children.",
    constraints: [
      "Reading level: plain words and short sentences; many learners speak English as a second language",
      "Devices: a basic phone with costly data; lessons work offline once loaded",
      "Money: low budgets; use low-cost methods (boiling, chlorine products sold for water, soap, a simple handwashing station)",
      "Health: prevention and warning signs only; no medicine doses, treatment or diagnosis; learners follow their clinic, community health worker and ministry of health",
      "Time: 4 to 6 minute lessons that fit around housework and work"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the water sources near your home", action: "rank the water sources from safest to riskiest and choose one for drinking", standard: "giving a reason for each one and naming a back-up source" },
    { id: "O2", condition: "Given water from your source and the things you have at home", action: "make drinking water safer by boiling it or with a chlorine product sold for water", standard: "following every step, including settling or filtering cloudy water first and following the product label" },
    { id: "O3", condition: "Given treated water and the containers in your home", action: "store and serve drinking water so hands and dirt do not touch it", standard: "using a clean covered container and pouring or using a tap, never dipping" },
    { id: "O4", condition: "Given soap or ash and water at home", action: "wash hands with soap at the key times and set up a handwashing place", standard: "scrubbing every part of the hands for at least 20 seconds, with the station near the toilet and the kitchen" },
    { id: "O5", condition: "Given your toilet or latrine and young children at home", action: "keep the toilet clean and dispose of children's faeces safely", standard: "with no faeces left in the open and a lid or cover in use" },
    { id: "O6", condition: "Given a family member with diarrhoea or watery stools", action: "spot the danger signs of dehydration and cholera and take the person to the clinic at once", standard: "naming at least four danger signs and the nearest clinic or community health worker" }
  ],
  chapters: [
    {
      name: "Chapter 1: Safe water to drink",
      lessons: [
        {
          title: "Choosing the safest water source",
          objectives: ["O1"],
          minutes: 5,
          goal: "Rank the water sources near your home from safest to riskiest.",
          text: [
            "Water can look clear and still carry germs. The biggest danger is faeces (human or animal waste) getting into the water. WHO says unsafe water can spread diarrhoea, cholera, dysentery, typhoid, hepatitis A and polio. Water from rivers and lakes can also carry worms that cause bilharzia (schistosomiasis).",
            "Safer sources are usually piped water, a protected borehole or well with a cover and a pump, protected springs and rainwater collected in a clean, covered tank. Riskier sources are open wells, unprotected springs, rivers, ponds, lakes and dams, where people and animals wash, swim and drink. Water from a kiosk, tanker or sachet is only as safe as where it came from and how it was handled.",
            "Look at each source near you. Is it covered? Is there a toilet, latrine or animal pen close to it, or uphill of it? Do people wash clothes or let animals drink there? Choose the safest one for drinking and cooking, and a back-up for when it is dry or broken. Even good water can get dirty on the way home, so you will still treat and store it well (next lessons)."
          ],
          steps: ["List every water source your family uses.", "For each one ask: is it covered, protected and away from toilets and animals?", "Rank them from safest to riskiest.", "Choose one for drinking and cooking, and a back-up.", "Use riskier water only for washing, and still treat any water you drink."],
          words: [["Faeces", "human or animal waste (poo)."], ["Protected source", "a well, borehole or spring that is covered and sealed so dirt and runoff cannot get in."], ["Bilharzia (schistosomiasis)", "an illness from tiny worms in some rivers and lakes."]],
          slides: [
            { title: "Clear is not the same as safe", bullets: ["Faeces in water spread germs", "Diarrhoea, cholera, typhoid, hepatitis A", "Rivers and lakes can carry bilharzia worms"] },
            { title: "Usually safer", bullets: ["Piped water", "Protected borehole or well with a cover and pump", "Protected spring; rain in a clean covered tank"] },
            { title: "Usually riskier", bullets: ["Open wells and unprotected springs", "Rivers, ponds, lakes and dams", "Kiosk, tanker, sachet: only as safe as the source"] },
            { title: "Check each source", bullets: ["Covered? Away from toilets and animals?", "Choose the safest for drinking, plus a back-up", "Still treat and store it well"] }
          ],
          sources: [WHO_WATER],
          tryIt: "Write down every water source your family uses. Mark each one safer or riskier, and why. Circle the one you will use for drinking and the back-up.",
          youCanNow: "compare the water sources near you and choose the safest one for drinking, with a back-up.",
          quickCheck: [
            { objective: "O1", q: "Which source is usually safest for drinking?", options: ["A protected borehole with a cover and pump", "A river where cattle drink", "An open pond", "A dam where people wash clothes"], answer: 0, why: "A protected, covered source keeps faeces and runoff out." },
            { objective: "O1", q: "The river water looks clear. What is true?", options: ["Clear water is always safe", "Clear water can still carry germs, so treat it before drinking", "Only brown water is dangerous", "Rivers clean themselves"], answer: 1, why: "Germs cannot be seen; clear water can still carry them." }
          ]
        },
        {
          title: "Making drinking water safer at home",
          objectives: ["O2"],
          minutes: 6,
          goal: "Make drinking water safer by boiling it or with a chlorine product sold for water.",
          text: [
            "If your water may not be safe, treat it before drinking, before mixing baby food or formula, and before brushing teeth. Two common ways are boiling and chlorine. Both work best on clear water.",
            "If the water is cloudy, first let it settle in a clean container so dirt sinks to the bottom, then pour the clear water off through a clean cloth folded several times. Settling and cloth filtering do not make water safe on their own; they prepare it for boiling or chlorine.",
            "Boiling: bring the water to a rolling boil, with big bubbles, for 1 minute. High in the mountains, above about 2,000 metres, boil for 3 minutes. Let it cool, covered, in the same pot or a clean container.",
            "Chlorine: use a chlorine product sold for drinking water (liquid, tablets or sachets) or one your health worker gives. Follow the label exactly: how much for how much water, and how long to wait before drinking (often at least 30 minutes). Cloudy water may need more; the label tells you. Keep chlorine away from children. If you have no label or are unsure, ask your community health worker or clinic. WHO tests some household water treatment products; your ministry of health can say which are approved where you live."
          ],
          steps: ["If cloudy: let it settle, then pour it through a clean folded cloth.", "Boil: a rolling boil for 1 minute (3 minutes high in the mountains), then cool it covered.", "Or chlorine: add the product as its label says, stir, and wait the time on the label.", "Pour it into a clean, covered container.", "Keep chlorine products out of children's reach."],
          words: [["Rolling boil", "water boiling hard with big bubbles that do not stop when you stir."], ["Chlorine product", "a liquid, tablet or sachet sold to kill germs in drinking water."], ["Settle", "leave water still so dirt sinks to the bottom."]],
          slides: [
            { title: "When to treat water", bullets: ["Before drinking", "Before mixing baby food or formula", "Before brushing teeth"] },
            { title: "Cloudy water first", bullets: ["Let it settle", "Pour through a clean folded cloth", "This prepares it; it is not safe yet"] },
            { title: "Boil", bullets: ["Rolling boil for 1 minute", "3 minutes above about 2,000 metres", "Cool it covered"] },
            { title: "Chlorine", bullets: ["A product sold for drinking water", "Follow the label: amount and waiting time", "Unsure? Ask your health worker; keep from children"] }
          ],
          sources: [CDC_SAFE_WATER, WHO_WATER],
          tryIt: "Choose one way, boiling or a chlorine product, and treat one container of drinking water today, step by step. Write down each step you did.",
          youCanNow: "make cloudy or doubtful water safer to drink by settling, then boiling or using a chlorine product as its label says.",
          quickCheck: [
            { objective: "O2", q: "Your water is cloudy. What do you do before boiling or adding chlorine?", options: ["Add sugar", "Drink it quickly", "Let it settle and pour it through a clean folded cloth", "Nothing; cloudy water is fine"], answer: 2, why: "Settling and filtering remove dirt so boiling or chlorine work better." },
            { objective: "O2", q: "How long do you keep water at a rolling boil at normal heights?", options: ["Just until it is warm", "5 seconds", "Until half has gone", "1 minute"], answer: 3, why: "CDC advises a rolling boil for 1 minute, or 3 minutes high in the mountains." }
          ]
        },
        {
          title: "Storing and serving water safely",
          objectives: ["O3"],
          minutes: 4,
          goal: "Store and serve drinking water so hands and dirt cannot touch it.",
          text: [
            "Safe water can get dirty again in the home. Germs get in when hands or cups are dipped into the container, when it is left open, or when the container itself is dirty.",
            "Keep drinking water in a clean container with a lid, ideally with a narrow neck or a tap. Keep it off the floor and away from animals. Pour water out or use the tap; never dip a cup or your hand in. Wash the container and lid with soap and safe water often, and let it dry upside down.",
            "Covering water also stops mosquitoes laying eggs in it. Keep drinking water apart from water for washing. A family in Kumasi, Lubumbashi or Kano can use the same rule: one clean, covered drinking-water container per home, and nobody dips."
          ],
          steps: ["Use a clean container with a lid, narrow neck or tap.", "Keep it raised off the floor, away from animals.", "Pour or use the tap: no dipping cups or hands.", "Wash the container with soap and safe water often.", "Keep drinking water separate from washing water."],
          words: [["Container", "a jerrycan, bucket, pot or bottle that holds water."], ["Dipping", "putting a cup or hand into the water to take some out."]],
          slides: [
            { title: "Safe water can get dirty again", bullets: ["Dipping hands or cups", "Open containers", "Dirty containers"] },
            { title: "Store it well", bullets: ["Clean container with a lid, narrow neck or tap", "Off the floor, away from animals", "Separate from washing water"] },
            { title: "Serve it well", bullets: ["Pour, or use the tap", "Never dip a cup or hand", "Wash the container with soap often"] }
          ],
          sources: [WHO_WATER, CDC_SAFE_WATER],
          tryIt: "Look at how your home stores drinking water. Is it covered? Does anyone dip? Make one change today, such as a lid, a ladle with a long handle kept on a hook, or a container with a tap.",
          youCanNow: "store and serve drinking water so it stays clean after you treat it.",
          quickCheck: [
            { objective: "O3", q: "What is the safest way to take water from the storage container?", options: ["Dip a cup in", "Pour it out or use a tap", "Dip your hand in", "Leave the lid off so it is quick"], answer: 1, why: "Pouring or using a tap keeps hands and cups out of the clean water." },
            { objective: "O3", q: "Why keep a lid on the drinking-water container?", options: ["It keeps out dirt, hands and mosquitoes", "It makes water colder", "It is only for looks", "It makes the water boil"], answer: 0, why: "A lid stops dirt, germs and mosquito eggs getting in." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Safe water to drink",
        questions: [
          { objective: "O1", q: "There is a latrine just uphill of a shallow open well. What do you do?", options: ["Drink from it; it looks clear", "Use the well only for drinking", "Choose a safer source for drinking, and treat any water you drink", "Put a lid on the latrine only"], answer: 2, why: "Faeces can run from a latrine into a nearby open well; choose a safer source and treat drinking water." },
          { objective: "O2", q: "Which statement about chlorine products for water is right?", options: ["Use as much as you like", "Drink straight away", "Any bleach is the same", "Follow the label for how much and how long to wait"], answer: 3, why: "The label gives the right amount and waiting time for that product." },
          { objective: "O2", q: "You live high in the mountains, above about 2,000 metres. How long do you boil?", options: ["3 minutes at a rolling boil", "10 seconds", "1 minute only", "No boiling needed"], answer: 0, why: "Water boils at a lower heat high up, so CDC advises 3 minutes there." },
          { objective: "O3", q: "Your child dips a cup into the water bucket. What is the best change?", options: ["Tell them to dip faster", "Use a covered container you pour from, or one with a tap", "Leave the bucket open", "Add sugar to the water"], answer: 1, why: "Pouring or a tap stops dirty hands and cups reaching the clean water." },
          { objective: "O1", q: "Water from a kiosk or tanker is...", options: ["Always safe", "Never safe", "Only safe when warm", "Only as safe as its source and how it was handled"], answer: 3, why: "Bought water can be clean or dirty; ask about the source and still store it well." }
        ]
      }
    },
    {
      name: "Chapter 2: Clean hands, safe toilets, quick action",
      lessons: [
        {
          title: "Handwashing with soap at the key times",
          objectives: ["O4"],
          minutes: 5,
          goal: "Wash hands with soap at the key times and set up a handwashing place at home.",
          text: [
            "Washing hands with soap is one of the cheapest ways to stop diarrhoea and chest infections. Water alone is not enough; soap lifts the germs off.",
            "Key times: after using the toilet; after cleaning a child's bottom or changing a nappy; before, during and after preparing food; before eating and before feeding a child; after caring for someone sick with diarrhoea or vomiting; after blowing your nose, coughing or sneezing; and after touching animals or rubbish.",
            "How: wet your hands with clean running water, add soap, rub the palms, the backs, between the fingers and under the nails for at least 20 seconds (about as long as singing a short song twice), rinse in running water and let them air-dry or use a clean cloth. Where there is no tap, a handwashing station helps: a jerrycan or bottle with a small hole and a stopper, hung or tipped with a foot stick (often called a tippy tap), with soap on a string and a little gravel underneath for the waste water. Put it near the toilet and near where you cook."
          ],
          steps: ["Wet hands with clean running water.", "Add soap.", "Scrub palms, backs, between fingers and under nails for at least 20 seconds.", "Rinse in running water.", "Air-dry or use a clean cloth.", "Set up a station near the toilet and the kitchen."],
          words: [["Key times", "the moments when washing hands stops the most germs."], ["Handwashing station", "a fixed place with water and soap for washing hands."], ["Tippy tap", "a simple handwashing station made from a jerrycan or bottle that you tip with a foot pedal."]],
          slides: [
            { title: "Soap, not just water", bullets: ["Soap lifts germs off hands", "Stops diarrhoea and chest infections"] },
            { title: "Key times", bullets: ["After the toilet or cleaning a child's bottom", "Before cooking, eating or feeding a child", "After caring for the sick; after animals or rubbish"] },
            { title: "How to wash", bullets: ["Wet, soap, scrub at least 20 seconds", "Palms, backs, between fingers, under nails", "Rinse in running water; air-dry or clean cloth"] },
            { title: "A station at home", bullets: ["Jerrycan or bottle with a tap or tipping stick", "Soap on a string; gravel underneath", "Near the toilet and the kitchen"] }
          ],
          sources: [CDC_HANDS, WHO_WATER],
          tryIt: "Set up or improve one handwashing place at home today, with water and soap, near the toilet or the kitchen. Then show each person in your home how to wash for 20 seconds.",
          youCanNow: "wash hands well with soap at the key times and set up a handwashing place at home.",
          quickCheck: [
            { objective: "O4", q: "When must you wash your hands with soap?", options: ["Only once a day", "Only before church or mosque", "After the toilet, after cleaning a child's bottom and before cooking or eating", "Only when they look dirty"], answer: 2, why: "These key times stop germs from faeces reaching food and mouths." },
            { objective: "O4", q: "How long should you scrub with soap?", options: ["2 seconds", "Until the soap is gone", "Only the palms, quickly", "At least 20 seconds, all parts of the hands"], answer: 3, why: "Scrubbing every part for at least 20 seconds removes the germs." }
          ]
        },
        {
          title: "Safe toilets and children's faeces",
          objectives: ["O5"],
          minutes: 5,
          goal: "Keep your toilet clean and dispose of children's faeces safely.",
          text: [
            "Faeces left in the open, in a bush, a field, a drain or a river, carry germs that flies, feet, rain and hands bring back to food and water. WHO and UNICEF count a toilet as safer when it separates faeces from people: a flush or pour-flush toilet, or a pit latrine with a slab. A toilet your household does not share is better still.",
            "Keep the toilet or latrine clean: wash the slab or seat often, keep the lid or cover on the hole to keep flies off, and keep a handwashing place right next to it. Children need a toilet they can use safely too, such as a potty or a small hole cover.",
            "Young children's faeces are as dangerous as adults'. Put them in the toilet or latrine straight away, including from nappies and potties, then wash the potty and your hands with soap. Do not leave them in the yard or throw them into the drain or rubbish."
          ],
          steps: ["Wash the slab or seat often.", "Keep the lid or cover on the hole.", "Keep soap and water right next to the toilet.", "Put children's faeces in the toilet straight away.", "Wash the potty and your hands with soap."],
          words: [["Latrine", "a toilet over a pit in the ground."], ["Slab", "the solid floor over a pit latrine that you stand on."], ["Open defecation", "passing faeces in fields, bushes, rivers or other open places."]],
          slides: [
            { title: "Faeces in the open come back", bullets: ["Flies, feet, rain and hands carry germs", "Into food and water"] },
            { title: "A safer toilet", bullets: ["Flush, pour-flush, or pit latrine with a slab", "Not shared with other households is better", "Lid or cover on; soap and water beside it"] },
            { title: "Children's faeces", bullets: ["As dangerous as adults'", "Into the toilet straight away", "Wash the potty and your hands with soap"] }
          ],
          sources: [JMP_SANITATION, WHO_DIARRHOEA],
          tryIt: "Check your toilet or latrine today: is it clean, covered and next to soap and water? Fix one thing. Agree with your family where children's faeces will go every time.",
          youCanNow: "keep a toilet or latrine clean and covered and get rid of children's faeces safely.",
          quickCheck: [
            { objective: "O5", q: "Where do a baby's faeces from a nappy go?", options: ["Into the toilet or latrine straight away", "Into the yard", "Into the drain", "Into the rubbish heap"], answer: 0, why: "Children's faeces carry germs too and must go into the toilet." },
            { objective: "O5", q: "Why keep a lid or cover on the latrine hole?", options: ["To keep it warm", "To keep flies from carrying germs to food", "To hide the smell only", "It is not needed"], answer: 1, why: "Flies that land on faeces can carry germs to food." }
          ]
        },
        {
          title: "Diarrhoea and cholera: when to go to the clinic now",
          objectives: ["O6"],
          minutes: 6,
          goal: "Spot the danger signs of dehydration and cholera and get help at once.",
          text: [
            "Diarrhoea drains water and salts from the body. This is called dehydration, and it can kill a young child quickly. Cholera can cause very large amounts of watery stool and, WHO says, can kill within hours if not treated. Do not wait to see if it gets better.",
            "Go to the clinic, health centre or community health worker NOW if the person: is very sleepy, weak, floppy or hard to wake; cannot drink or drinks very poorly; has sunken eyes; has skin that goes back very slowly when pinched; has a lot of watery stool, like rice water; has blood in the stool; vomits again and again; or has diarrhoea that goes on for many days. A baby or young child with diarrhoea needs extra care.",
            "Oral rehydration salts (ORS) replace the lost water and salts, and health workers also give zinc for children. Ask your clinic, community health worker or pharmacy how to use ORS; give it on the way, as they tell you, but still go. Keep breastfeeding. In a cholera outbreak, listen to your ministry of health: it may run vaccine campaigns and treatment centres. Write the name and phone number of your nearest clinic and community health worker on a card and keep money for transport if you can."
          ],
          steps: ["Watch anyone with diarrhoea closely, especially young children.", "Check for the danger signs.", "If you see any, go to the clinic or call the community health worker now.", "Ask the health worker how to give ORS, and keep breastfeeding.", "Wash hands with soap after every contact and clean up safely."],
          words: [["Dehydration", "when the body loses too much water and salt."], ["ORS (oral rehydration salts)", "a mix of salts and sugar that, mixed with safe water, replaces what diarrhoea takes out."], ["Cholera", "a disease from dirty water or food that causes very watery diarrhoea and can kill fast."], ["Outbreak", "many cases of an illness in one area at the same time."]],
          slides: [
            { title: "Diarrhoea can kill fast", bullets: ["The body loses water and salts", "Cholera can kill within hours", "Do not wait"] },
            { title: "Go to the clinic NOW if", bullets: ["Very sleepy, floppy, hard to wake; cannot drink", "Sunken eyes; skin pinch goes back slowly", "Lots of rice-water stool; blood in stool", "Vomits again and again; lasts many days"] },
            { title: "On the way", bullets: ["Ask a health worker how to give ORS", "Keep breastfeeding", "Wash hands after every contact"] },
            { title: "Be ready", bullets: ["Card with the clinic's and health worker's numbers", "Transport money if you can", "In an outbreak, follow the ministry of health"] }
          ],
          sources: [WHO_DIARRHOEA, WHO_CHOLERA],
          tryIt: "Make a danger-signs card: write four or more danger signs, the name and phone number of your nearest clinic or community health worker, and how you would get there. Put it on the wall.",
          youCanNow: "spot the danger signs of dehydration and cholera and get the person to the clinic at once.",
          quickCheck: [
            { objective: "O6", q: "Which is a danger sign that means go to the clinic now?", options: ["One loose stool", "A child playing normally", "A child who is very sleepy and cannot drink", "Being thirsty after football"], answer: 2, why: "Being very sleepy and unable to drink are signs of severe dehydration." },
            { objective: "O6", q: "A neighbour has huge amounts of watery stool like rice water during a cholera outbreak. What do you do?", options: ["Wait until tomorrow", "Give any medicine you have at home", "Hide it from the health workers", "Help them get to a clinic or treatment centre now"], answer: 3, why: "Cholera can kill within hours; fast care at a clinic saves lives." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Clean hands, safe toilets, quick action",
        questions: [
          { objective: "O4", q: "There is water but no soap at the handwashing place. What is true?", options: ["Water alone is enough", "Soap is needed to lift germs off; get soap for the station", "Hands do not need washing", "Use the drinking water bucket"], answer: 1, why: "Soap removes germs that water alone leaves behind." },
          { objective: "O4", q: "Where is the best place for a handwashing station?", options: ["Near the toilet and near where you cook", "Far from the house", "Inside the drinking-water bucket", "In the bedroom"], answer: 0, why: "Near the toilet and kitchen makes washing easy at the key times." },
          { objective: "O5", q: "A toddler's faeces are in the yard. What do you do?", options: ["Sweep them into the drain", "Leave them to dry", "Cover them with sand and leave them", "Put them in the toilet and wash your hands with soap"], answer: 3, why: "Children's faeces belong in the toilet; then wash hands." },
          { objective: "O6", q: "Your child has diarrhoea and sunken eyes, and a skin pinch goes back slowly. What do you do?", options: ["Wait two days", "Stop all drinks", "Go to the clinic now and ask how to give ORS on the way", "Give an adult's medicine"], answer: 2, why: "These are signs of dehydration; a health worker must see the child now." },
          { objective: "O6", q: "What does ORS do?", options: ["Kills mosquitoes", "Replaces water and salts lost in diarrhoea", "Cleans the toilet", "Makes water boil faster"], answer: 1, why: "ORS replaces the water and salts that diarrhoea takes out of the body." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Clean Water, Sanitation and Hygiene at Home",
    questions: [
      { objective: "O1", q: "What is the biggest danger to drinking-water safety?", options: ["Faeces getting into the water", "Cold water", "Hard water", "Water that tastes of iron"], answer: 0, why: "WHO says germs from faeces are the biggest drinking-water risk." },
      { objective: "O1", q: "Which question helps you judge a well?", options: ["What colour is the bucket?", "Is it covered and away from toilets and animals?", "Who dug it?", "Is it near the market?"], answer: 1, why: "A covered source away from toilets and animals is less likely to carry faeces." },
      { objective: "O1", q: "Your usual borehole is broken. What do you do?", options: ["Drink from the river untreated", "Stop drinking", "Use your back-up source and treat the water before drinking", "Use the washing water"], answer: 2, why: "A back-up plus treatment keeps drinking water safer when the main source fails." },
      { objective: "O2", q: "Which two ways make drinking water safer at home?", options: ["Adding sugar or salt", "Leaving it in the sun for an hour or shaking it", "Cooling it or freezing it", "Boiling it, or using a chlorine product sold for water"], answer: 3, why: "Boiling and chlorine products kill germs; the others do not." },
      { objective: "O2", q: "Does pouring cloudy water through a cloth make it safe?", options: ["No; it removes dirt, but you still boil it or add chlorine", "Yes, always", "Only if the cloth is new", "Yes, if you do it twice"], answer: 0, why: "Cloth removes dirt, not all germs; you still need to boil or use chlorine." },
      { objective: "O2", q: "You have a chlorine product but lost the label. What do you do?", options: ["Guess the amount", "Add a lot to be safe", "Ask your community health worker or clinic how to use it", "Drink straight after adding it"], answer: 2, why: "The right amount and waiting time matter; a health worker can tell you." },
      { objective: "O2", q: "Before mixing baby formula, the water should be...", options: ["Straight from the river", "Treated: boiled and cooled, or safely treated", "Warm from the sun", "Any water at all"], answer: 1, why: "Babies are most at risk; their water must be treated first." },
      { objective: "O3", q: "Which drinking-water container is best?", options: ["An open bucket on the floor", "A container used for fuel", "A clean, covered container with a narrow neck or tap, off the floor", "Any pot"], answer: 2, why: "Clean, covered and off the floor keeps treated water safe." },
      { objective: "O3", q: "Why should nobody dip a cup into the drinking water?", options: ["Hands and cups bring germs into clean water", "It wastes water", "It makes noise", "It is rude"], answer: 0, why: "Dipping carries germs from hands and cups into the whole container." },
      { objective: "O3", q: "How often should you wash the water container?", options: ["Never", "Once a year", "Only when it smells", "Often, with soap and safe water, then dry upside down"], answer: 3, why: "Regular washing stops germs building up inside the container." },
      { objective: "O4", q: "Which is a key time for handwashing?", options: ["Before feeding a child", "After watching television", "Before sleeping only", "After drinking water"], answer: 0, why: "Clean hands before feeding a child keep germs out of the child's mouth." },
      { objective: "O4", q: "Which parts of the hands do you scrub?", options: ["Only the fingertips", "Palms, backs, between the fingers and under the nails", "Only the palms", "Only the right hand"], answer: 1, why: "Germs hide on every part of the hand, so scrub them all." },
      { objective: "O4", q: "You have no tap at home. How can you wash hands in running water?", options: ["Dip your hands in the drinking-water bucket", "Wipe them on a cloth only", "Make a station from a jerrycan or bottle that pours, with soap on a string", "Skip washing"], answer: 2, why: "A simple station gives running water for washing without spoiling stored water." },
      { objective: "O5", q: "Which toilet do WHO and UNICEF count as safer?", options: ["A field far from the house", "A bucket emptied in the drain", "A pit with no slab", "A pit latrine with a slab, or a flush or pour-flush toilet"], answer: 3, why: "These separate faeces from people; a pit with no slab or open fields do not." },
      { objective: "O5", q: "What should always be next to the toilet?", options: ["Soap and water for washing hands", "The drinking-water container", "Food", "Nothing"], answer: 0, why: "Washing hands right after the toilet stops germs spreading." },
      { objective: "O5", q: "Why are children's faeces dangerous?", options: ["They are not dangerous", "They carry germs just like adults' faeces", "Only because they smell", "Only when the child is sick"], answer: 1, why: "Children's faeces carry the same germs and must go into the toilet." },
      { objective: "O6", q: "Which of these needs the clinic now?", options: ["One loose stool and the child is playing", "A child who is thirsty after running", "Blood in the stool", "A child who wants to eat"], answer: 2, why: "Blood in the stool is a danger sign that needs a health worker." },
      { objective: "O6", q: "Why should you not wait when someone has cholera signs?", options: ["Because it is shameful", "Because the clinic closes early", "It passes by itself", "Cholera can kill within hours without care"], answer: 3, why: "WHO says cholera can be fatal within hours if untreated." },
      { objective: "O6", q: "A baby has diarrhoea. What do you keep doing while you get help?", options: ["Keep breastfeeding", "Stop all milk", "Stop all drinks", "Give adult medicine"], answer: 0, why: "Breastfeeding keeps giving the baby water and food; the health worker advises the rest." },
      { objective: "O6", q: "What should your danger-signs card include?", options: ["Your mobile money PIN", "The danger signs and your nearest clinic's or health worker's name and number", "A list of medicines and doses", "Nothing; you will remember"], answer: 1, why: "In an emergency, the signs and who to call are what you need at once." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 8, 11, 13, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Water source", objective: "O1", notYet: "No source chosen, or a risky source chosen without a reason.", meets: "Sources ranked with reasons; the safest chosen for drinking and a back-up named.", exceeds: "Also notes what makes each source risky (toilets, animals, no cover) and who to tell about a broken or dirty source." },
      { name: "Making water safer", objective: "O2", notYet: "No treatment method, or a method missing steps (no boil time, no label waiting time).", meets: "Boiling or a chlorine product, with settling first for cloudy water, every step and the label rule.", exceeds: "A back-up method is planned too, and chlorine is kept out of children's reach." },
      { name: "Storage and serving", objective: "O3", notYet: "Open container, or dipping still allowed.", meets: "A clean covered container, off the floor, poured or tapped, washed often.", exceeds: "Drinking water kept separate from washing water, and everyone in the home knows the no-dipping rule." },
      { name: "Handwashing", objective: "O4", notYet: "No handwashing place or no soap; key times missing.", meets: "A place with water and soap near the toilet or kitchen, and the key times written down.", exceeds: "Places near both the toilet and the kitchen, and every family member has been shown the 20-second wash." },
      { name: "Toilet and children's faeces", objective: "O5", notYet: "Faeces left in the open or no plan for children's faeces.", meets: "The toilet is kept clean and covered, and children's faeces go into it every time.", exceeds: "A cleaning routine is shared between family members, with soap next to the toilet." },
      { name: "Danger-signs card", objective: "O6", notYet: "Fewer than four danger signs, or no clinic contact.", meets: "At least four danger signs and the nearest clinic's or health worker's name and number.", exceeds: "Also how to get there and a plan for transport money, with no medicine doses on the card." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Homes that treat all drinking water and store it covered 30 days later (follow-up survey)",
      "Homes with a handwashing place with soap 30 days later",
      "Fewer diarrhoea episodes in young children reported by families or community health workers over the next season",
      "Faster arrival at the clinic for diarrhoea with danger signs, as reported by community health workers"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Soap, a water container with a lid, and a jerrycan or bottle for a handwashing station",
      "A pot to boil water, or a chlorine product sold for drinking water with its label",
      "Paper and pen for the plan and the danger-signs card",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Works well with women's groups, mothers' clubs, schools, faith groups and community health worker visits; take the pre-test together.",
      "Build a handwashing station together during Lesson 4; it is the part learners remember best.",
      "Invite the local community health worker or clinic nurse to the session on danger signs and ORS.",
      "Do not give medicine doses or treatment advice; send all treatment questions to the clinic, community health worker or ministry of health.",
      "In a cholera outbreak, use the ministry of health's current messages and treatment-centre locations.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
