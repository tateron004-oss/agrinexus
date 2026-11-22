"use strict";

// Koach Learn course: Agriculture (Africa) -> "Becoming a Farmer Trainer: Agricultural Extension and Farmer Business Advisors".
// For lead farmers, would-be Farm/Farmer Business Advisors, young agripreneurs and new extension workers: the roles in extension, how adults learn
// (show, try, discuss), demonstration plots and FAO farmer field schools, planning a session, phones and videos, responsible advice and referral,
// earning ethically from inputs and services, and keeping training records. Final task: a lesson plan and a demo-plot plan for a training day.
// Programs named are confirmed on their own pages: FAO Farmer Field Schools, iDE Farm Business Advisors, GIZ Farmer Business School, ICRAF volunteer
// farmer trainers, Nigeria's NAERLS.

const FAO_FFS = { name: "FAO Global Farmer Field School Platform: overview", url: "https://www.fao.org/farmer-field-schools/overview/en/" };
const IDE_FBA = { name: "iDE: Farm Business Advisors", url: "https://www.ideglobal.org/story/fbas" };
const GIZ_FBS = { name: "GIZ: Sustainable Smallholder Agribusiness (Farmer Business School, West and Central Africa)", url: "https://www.giz.de/en/projects/sustainable-smallholder-agribusiness" };
const ICRAF_VFT = { name: "CGIAR / ICRAF: Volunteer farmer trainer approach in Eastern Africa", url: "https://cgspace.cgiar.org/handle/10568/123260" };
const NAERLS = { name: "National Agricultural Extension and Research Liaison Services (NAERLS), Nigeria", url: "https://www.naerls.gov.ng/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO)", url: "https://www.kalro.org" };
const PCPB = { name: "Pest Control Products Board (Kenya): registered products", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nigeria): registration of agrochemicals", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Office of the Data Protection Commissioner (Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-extension-farmer-trainer",
  category: "Agriculture (Africa)",
  name: "Becoming a Farmer Trainer: Agricultural Extension and Farmer Business Advisors",
  skills: "Knowing the roles in farmer extension, Planning a show-try-discuss training session, Running a demonstration plot and field school session, Advising responsibly and referring, Earning ethically from inputs and services, Keeping training records",
  outcome: "plan and run a short training day for farmers in your community: a hands-on lesson built on show, try and discuss, a demonstration plot that compares the usual practice with a better one, honest advice that knows when to refer, and records of who you trained and what changed.",
  about: [
    "This course is for farmers who want to teach their neighbours: lead farmers, volunteer farmer trainers, people who want to become Farmer (or Farm) Business Advisors, young agripreneurs, cooperative leaders and new extension workers in Kenya, Nigeria, Ghana, Côte d'Ivoire, Cameroon and across Africa.",
    "You will learn how extension works and where you fit, how adults learn best, how to run a demonstration plot and a farmer field school session, how to plan a short session, how to use phones and videos to reach more farmers, how to give advice responsibly and when to refer to an expert, how to earn a living ethically by selling inputs and services, and how to keep records of who you trained and what changed.",
    "You finish with a lesson plan and a demo-plot plan for a real training day in your community. Money figures are examples only. Each lesson ends with a task; a knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Plan a training day for 15 to 25 farmers in your community on one practice you know well (for example planting maize in rows with compost, hermetic grain storage, or vaccinating chickens through the vet). Write: (1) a lesson plan of 60 to 90 minutes that follows show, try, discuss, with the one skill, materials, timings and how you will check that each farmer can do it; (2) a demo-plot plan with two side-by-side plots (usual practice and the new practice), same size, labelled, with what you will record and the dates of field visits; (3) your referral list (vet, extension office, input regulator) and what you will not advise on; (4) a training register sheet with consent and a follow-up date.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Lead farmers, volunteer farmer trainers, aspiring Farmer or Farm Business Advisors, young agripreneurs, cooperative leaders and new extension workers across Africa, including Kenya, Nigeria, Ghana, Côte d'Ivoire and Cameroon. Most are respected farmers with practical skill but no training in teaching or advising.",
    startingPoint: "Can grow crops or keep animals well and often give informal advice to neighbours. Few have planned a lesson, set up a fair comparison plot, kept records of who they taught, or thought about where their advice should stop. Some sell inputs and are unsure how to do it fairly.",
    gap: "There are far too few extension workers for the number of farmers, so farmer trainers and advisors carry much of the load. Without teaching skills, honest limits and records, their help is less effective and can cause harm (wrong doses, unregistered products, pushy selling). Learners need to teach in a way that sticks, advise safely, earn fairly and show results.",
    constraints: [
      "Reading level: plain words and short sentences; the course is also available in Spanish, French and Arabic",
      "Devices: a basic smartphone; trainees' farmers may have only basic phones",
      "Field setting: training happens on farms, with little equipment and no projector",
      "Safety: no drug, vaccine or hormone doses and no withdrawal periods; registered pesticides only, as the label says",
      "Money: all figures are examples; earning advice is about fairness, not investment",
      "Worker and farmer personal data are protected by national data protection laws"
    ],
    prerequisites: "Practical experience with at least one crop or livestock enterprise. A crop or livestock course from this catalogue helps you prepare the content you will teach."
  },
  // ---- ADDIE: Design (objectives) ----
  objectives: [
    { id: "O1", condition: "Given the people who support farmers in your area", action: "describe the roles of a lead farmer, a Farmer Business Advisor and an extension agent and who you will link with", standard: "naming one local contact or office for each where they exist" },
    { id: "O2", condition: "Given one practice you know well", action: "plan a 60 to 90 minute training session that follows show, try, discuss", standard: "with one clear skill, timings, materials and a check that every farmer can do it" },
    { id: "O3", condition: "For a practice you want farmers to adopt", action: "lay out a demonstration plot that compares the usual practice with the new practice", standard: "with plots of the same size, labelled, recorded and visited on set dates" },
    { id: "O4", condition: "When a farmer asks for advice beyond your training", action: "give only advice you are trained for and refer the farmer to the right expert", standard: "using a written referral list and never giving drug doses or recommending unregistered pesticides" },
    { id: "O5", condition: "If you sell inputs or services to the farmers you train", action: "set out how you earn and the ethical rules you follow", standard: "with written prices, commissions disclosed and no pressure to buy" },
    { id: "O6", condition: "After each training", action: "record who you trained, on what, and the results", standard: "with consent, kept private, and a follow-up at least once" }
  ],
  chapters: [
    {
      name: "Chapter 1: Teaching farmers so it sticks",
      lessons: [
        {
          title: "Lead farmers, Farmer Business Advisors and extension agents",
          objectives: ["O1"],
          minutes: 5,
          goal: "Describe the roles in farmer extension and name who you will link with.",
          text: [
            "Extension means helping farmers learn and use better practices. Government extension agents (in Nigeria, state Agricultural Development Programmes, supported by NAERLS; in Kenya, county agricultural officers working with research bodies such as KALRO) are trained advisers, but each one serves very many farmers. So farmers themselves carry much of the teaching.",
            "A lead farmer or volunteer farmer trainer is a respected farmer who hosts demonstrations and teaches neighbours, usually trained and backed by a project or extension office. In East Africa, ICRAF and partners have used volunteer farmer trainers widely, for example in dairy; an evaluation in Uganda found farmers' knowledge, milk output and income improved.",
            "A Farm Business Advisor (FBA), also called a Farmer Business Advisor, is a local entrepreneur who sells inputs and advice to nearby farmers and earns from commissions and fees. iDE trains FBAs in Zambia and Mozambique, each serving about 80 to 120 farmers. In West and Central Africa, GIZ's Farmer Business School has trained cocoa and food-crop farmers in Côte d'Ivoire, Ghana, Togo, Nigeria and Cameroon in farm business skills, working with extension services. Whatever your title, you complement the extension agent; you do not replace them."
          ],
          steps: ["List who supports farmers in your area: extension office, projects, cooperatives, agrovets.", "Decide which role fits you: lead farmer, FBA, or both.", "Meet your local extension officer and explain what you plan to do.", "Write one contact for each role and when you will next speak."],
          words: [["Extension", "services that help farmers learn and use better practices."], ["Lead farmer", "a respected farmer who hosts demonstrations and teaches neighbours, often with project or extension support."], ["Farm (or Farmer) Business Advisor (FBA)", "a local entrepreneur who sells inputs and gives advice to nearby farmers for a commission or fee."]],
          slides: [
            { title: "Extension agents", bullets: ["Trained government advisers", "Nigeria: ADPs, NAERLS; Kenya: county officers, KALRO", "Each serves very many farmers"] },
            { title: "Lead farmers and volunteer trainers", bullets: ["Host demonstrations, teach neighbours", "Used widely in East Africa (ICRAF, dairy)"] },
            { title: "Farm Business Advisors", bullets: ["Local entrepreneurs: inputs plus advice", "iDE: Zambia, Mozambique; 80-120 farmers each", "GIZ Farmer Business School: West and Central Africa"] },
            { title: "Work together", bullets: ["You complement the extension agent", "Meet your local office first"] }
          ],
          sources: [NAERLS, KALRO, ICRAF_VFT, IDE_FBA, GIZ_FBS],
          tryIt: "Make a table of who supports farmers in your area: the extension office, any project or cooperative, and the nearest agrovet or input dealer. Write which role you will take (lead farmer, FBA or both) and one contact for each role.",
          youCanNow: "explain the roles in farmer extension and where you fit.",
          quickCheck: [
            { objective: "O1", q: "What mainly makes a Farm Business Advisor different from a volunteer lead farmer?", options: ["An FBA earns from selling inputs and services", "An FBA is a government employee", "An FBA never gives advice", "An FBA only works in towns"], answer: 0, why: "FBAs are local entrepreneurs who earn from commissions and fees." },
            { objective: "O1", q: "You plan to start training neighbours. Who should you meet first?", options: ["A buyer in the city", "A radio station", "Your local extension officer", "Nobody; just start"], answer: 2, why: "Working with extension keeps your advice current and builds support." }
          ]
        },
        {
          title: "How adults learn, and planning a short session",
          objectives: ["O2"],
          minutes: 6,
          goal: "Plan a 60 to 90 minute training session that follows show, try, discuss.",
          text: [
            "Adult farmers learn best by doing, from people they trust, about problems they have now. They bring experience: respect it and ask what they already do. Long talks are forgotten; doing it with their own hands is remembered. Use three steps: show (you demonstrate the skill slowly, explaining why), try (every farmer does it while you watch and help), discuss (the group talks about what they saw, what is hard, and whether it will work on their farms).",
            "Teach one skill per session, such as \"measure and plant maize in rows with one handful of compost per hole\", not \"everything about maize\". Plan it: the skill; materials for everyone to try; timings (for example 10 minutes welcome and what you do now, 15 show, 30 try, 20 discuss, 10 plan and check); and how you will check that each farmer can do it, such as watching each one plant three holes correctly.",
            "Pick a time that suits farmers (after morning work, not on market day), a place they can reach, and a language they speak. Include women and young people: ask who does the work at home and invite them. Keep groups small enough for everyone to try, about 15 to 25 people per trainer."
          ],
          steps: ["Choose one skill the farmers need now.", "Plan show, try and discuss, with timings.", "List materials so everyone can try.", "Decide how you will check each farmer can do it.", "Choose a time, place and language that suit the farmers."],
          words: [["Show, try, discuss", "a teaching method: demonstrate, let everyone practise, then talk it through."], ["Lesson plan", "a short written plan of what you will teach, how, with what, and how long each part takes."], ["Learning by doing", "learning a skill by practising it with your own hands."]],
          slides: [
            { title: "How adults learn", bullets: ["By doing, from people they trust", "On problems they have now", "Respect what they already know"] },
            { title: "Show, try, discuss", bullets: ["Show: demonstrate slowly, say why", "Try: everyone does it", "Discuss: what is hard, will it work here?"] },
            { title: "One skill per session", bullets: ["Example: rows with compost per hole", "Timings, materials, a check for everyone"] },
            { title: "Make it easy to come", bullets: ["Good time and place", "Farmers' own language", "Invite women and young people"] }
          ],
          tryIt: "Write a lesson plan for one skill you know well: the skill in one sentence, materials, the show-try-discuss timings for 60 to 90 minutes, and how you will check that each farmer can do it.",
          youCanNow: "plan a short training session that teaches one skill by show, try and discuss.",
          quickCheck: [
            { objective: "O2", q: "Which is the best skill for one 90 minute session?", options: ["Everything about maize", "All of livestock health", "Farming in general", "Planting maize in rows with a handful of compost per hole"], answer: 3, why: "One clear skill can be shown, practised and checked in one session." },
            { objective: "O2", q: "In the \"try\" step, what happens?", options: ["The trainer gives a long talk", "Every farmer does the skill while the trainer watches and helps", "Farmers go home", "The group sells inputs"], answer: 1, why: "Practising with their own hands is how adults remember." }
          ]
        },
        {
          title: "Demonstration plots and farmer field schools",
          objectives: ["O3"],
          minutes: 6,
          goal: "Lay out a demonstration plot that fairly compares the usual practice with a new one.",
          text: [
            "Farmers believe what they see on a farm like theirs. A demonstration plot shows a new practice side by side with the usual one. Choose a visible place near a path, with even soil. Mark two plots of the same size (for example 10 m x 10 m each): plot A, the usual practice; plot B, the new practice. Change only one thing between them, such as the variety, spacing or compost, so the difference has one cause. Put a clear sign on each.",
            "Keep records from the start: planting date, inputs and labour for each plot, photos every two weeks, problems, and the harvest weighed separately. Plan field days at key stages (after emergence, at flowering, at harvest) so farmers can see and compare. Be honest if the new practice does not win: that is useful learning too.",
            "A Farmer Field School (FFS) goes further. FAO describes it as a group of farmers who meet regularly in a field through a whole production cycle, guided by a trained facilitator. They compare plots (local practice and a proposed better practice) and do Agro-Ecosystem Analysis: in small groups they observe plants, pests, natural enemies, soil and weather, draw what they see, and decide together what to do. FFS has been used in more than 90 countries. If you want to facilitate one, ask your extension office or a project about facilitator training."
          ],
          steps: ["Choose a visible spot with even soil.", "Mark two plots of the same size: usual and new practice.", "Change only one thing between them; label both.", "Record dates, inputs, labour, photos and the harvest by plot.", "Plan field days at emergence, flowering and harvest."],
          words: [["Demonstration plot", "a small plot that shows a practice so farmers can see it working."], ["Farmer Field School (FFS)", "a group that meets regularly in a field through a season, guided by a facilitator, to learn by observing and testing."], ["Agro-Ecosystem Analysis (AESA)", "observing plants, pests, natural enemies, soil and weather in a field, then deciding together what to do."]],
          slides: [
            { title: "Seeing is believing", bullets: ["Usual practice beside new practice", "Same size, visible, labelled"] },
            { title: "A fair comparison", bullets: ["Change only one thing", "Even soil, same care otherwise"] },
            { title: "Record and show", bullets: ["Dates, inputs, labour, photos", "Harvest weighed by plot", "Field days at key stages"] },
            { title: "Farmer Field School (FAO)", bullets: ["Meets regularly through the season", "Trained facilitator, compare plots", "Agro-Ecosystem Analysis, decide together"] }
          ],
          sources: [FAO_FFS],
          tryIt: "Draw a demo-plot layout for the skill you planned in Lesson 2: two plots of the same size, the one thing that differs, the signs, what you will record, and the dates of three field days.",
          youCanNow: "lay out a fair demonstration plot and explain how a farmer field school works.",
          quickCheck: [
            { objective: "O3", q: "In your demo, plot B has a new variety AND compost AND wider spacing. What is the problem?", options: ["Nothing; more changes are better", "The plots are too small", "You cannot tell which change made the difference", "Farmers do not like signs"], answer: 2, why: "Change one thing so the difference has one cause." },
            { objective: "O3", q: "What do farmers in an FAO farmer field school do in Agro-Ecosystem Analysis?", options: ["Observe the field in small groups and decide together what to do", "Listen to a lecture only", "Buy inputs", "Fill in loan forms"], answer: 0, why: "AESA is observing plants, pests, soil and weather, then deciding as a group." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Teaching farmers so it sticks",
        questions: [
          { objective: "O1", q: "Why do farmer trainers matter so much in African extension?", options: ["Extension agents are not trained", "Each extension agent serves very many farmers", "Farmers dislike experts", "The law requires them"], answer: 1, why: "Farmer trainers help extension reach more people." },
          { objective: "O1", q: "In which countries has GIZ's Farmer Business School worked with cocoa farmers?", options: ["Only Kenya", "Only in Asia", "Zambia and Mozambique only", "Côte d'Ivoire, Ghana, Togo, Nigeria and Cameroon"], answer: 3, why: "The project covers those five West and Central African countries." },
          { objective: "O2", q: "What are the three steps of the teaching method in this course?", options: ["Show, try, discuss", "Talk, talk, test", "Read, write, sign", "Buy, sell, pay"], answer: 0, why: "Demonstrate, practise and talk it through." },
          { objective: "O2", q: "How do you check that a session worked?", options: ["Count how many people came", "Ask if they enjoyed it", "Watch each farmer do the skill correctly", "Hand out a long leaflet"], answer: 2, why: "The test of a skill session is that each farmer can do the skill." },
          { objective: "O3", q: "A demo plot should be placed:", options: ["Hidden behind the house", "Somewhere visible near a path, with even soil", "On the worst soil only", "Far from any farmer"], answer: 1, why: "Farmers must see it, and even soil keeps the comparison fair." }
        ]
      }
    },
    {
      name: "Chapter 2: Advising, earning and showing results",
      lessons: [
        {
          title: "Reaching farmers by phone, and knowing when to refer",
          objectives: ["O4"],
          minutes: 6,
          goal: "Give only advice you are trained for and refer farmers to the right expert.",
          text: [
            "Phones help you reach more farmers between visits. Record a short video (one to two minutes) of the \"show\" step on your phone and share it in a WhatsApp group; send reminders by SMS for farmers with basic phones; use voice notes in the local language; hold a short group call before a field day. Ask permission before you film people or their farms, and keep the group for farming topics only.",
            "Advice can help or harm. Advise only on what you were trained for and have seen work. Never give doses for animal drugs, vaccines or hormones, and never give withdrawal periods: say \"follow the vet and the product label\". Recommend only pesticides registered in your country (for example with Kenya's Pest Control Products Board or Nigeria's NAFDAC), used as the label says, with protective equipment. Check the registration body's list if you are unsure.",
            "Refer quickly when something is beyond you: sick or dying animals go to the vet; sudden deaths of pigs or poultry may be African Swine Fever or avian flu, which are notifiable, so tell the farmer to report to the vet or veterinary authority at once and not to move or sell the animals. Unknown pests or diseases on crops go to the extension office or a research institute. Loans and contracts go to a trusted adviser. Keep a written referral list with names and phone numbers, and follow up to see what happened."
          ],
          steps: ["Share short videos, SMS reminders and voice notes; ask permission before filming.", "Advise only on what you were trained for.", "No doses or withdrawal periods: vet and label only.", "Registered pesticides only, as the label says.", "Refer quickly using your written referral list, and follow up."],
          words: [["Referral", "sending a farmer to an expert who can help with something beyond your skills."], ["Notifiable disease", "a disease that by law must be reported to the veterinary authority, such as African Swine Fever or avian flu."], ["Registered pesticide", "a product approved for use by the national regulator."]],
          slides: [
            { title: "Phones reach more farmers", bullets: ["1-2 minute videos of the \"show\" step", "SMS reminders, voice notes, group calls", "Ask before filming"] },
            { title: "Advise within your training", bullets: ["No drug, vaccine or hormone doses", "Vet and product label only", "Registered pesticides, as the label says"] },
            { title: "Refer quickly", bullets: ["Sick animals: the vet", "Pig or poultry deaths: report at once", "Unknown crop problems: extension"] },
            { title: "Your referral list", bullets: ["Names and phone numbers", "Follow up to see what happened"] }
          ],
          sources: [PCPB, NAFDAC],
          tryIt: "Write your referral list: the nearest vet or veterinary office, the extension office, the pesticide registration body for your country, and a trusted adviser for money and contracts, with phone numbers. Then write three questions you will NOT answer yourself and who you will send them to.",
          youCanNow: "reach farmers by phone and give advice within your limits, referring the rest to the right expert.",
          quickCheck: [
            { objective: "O4", q: "A farmer asks how much antibiotic to give a sick goat. You say:", options: ["\"Give two spoons a day.\"", "\"Use whatever is cheapest.\"", "\"Give double to be safe.\"", "\"Call the vet and follow the product label; I cannot give doses.\""], answer: 3, why: "Doses come from the vet and the label, not from a farmer trainer." },
            { objective: "O4", q: "Several pigs in a village die suddenly. What do you tell the farmers?", options: ["Sell the rest quickly", "Report to the vet or veterinary authority at once and do not move the pigs", "Wait a week", "Eat the meat"], answer: 1, why: "It may be African Swine Fever, a notifiable disease that must be reported at once." }
          ]
        },
        {
          title: "Earning a living as a Farmer Business Advisor, ethically",
          objectives: ["O5"],
          minutes: 5,
          goal: "Set out how you will earn from inputs and services and the ethical rules you will follow.",
          text: [
            "An FBA earns by bringing inputs and services to farmers who are far from shops: commission on seed, fertilizer, hermetic storage bags or tools sold; fees for services such as spraying with proper equipment, ploughing, soil sampling, aggregating harvests for buyers, or record keeping. iDE notes that an FBA's long-term ties to the community give them a strong reason to recommend only products that pay off for farmers.",
            "Ethics is good business. Sell only genuine, registered products from licensed suppliers. Write your prices down and tell farmers when you earn a commission. Recommend what the farmer needs, not what pays you most; say clearly when the best answer is \"you do not need to buy anything\". Never pressure people, never sell on credit you know they cannot repay, and keep training separate from selling: everyone can attend a training whether or not they buy.",
            "Know your numbers. Example only: if you earn a commission of XOF 500 per bag and sell 120 bags in a season, that is XOF 60,000, before your transport and time. Keep a simple record of sales, commissions and service fees, and check if any business registration or licence is needed in your country for selling inputs, especially agrochemicals."
          ],
          steps: ["List the inputs and services you can offer.", "Write your prices and your commission on each.", "Write your ethical rules: genuine products, disclose commissions, no pressure, training open to all.", "Record sales, commissions and fees.", "Check registration and licence rules for input dealers."],
          words: [["Commission", "money a seller earns for each item sold, paid by the supplier."], ["Service fee", "money charged for doing a job, such as spraying or ploughing."], ["Conflict of interest", "when what pays you most is not what is best for the person you advise."]],
          slides: [
            { title: "How FBAs earn", bullets: ["Commission on inputs sold", "Fees for services: spraying, ploughing, aggregating", "Bringing inputs close to farmers"] },
            { title: "Ethics is good business", bullets: ["Genuine, registered products only", "Written prices, commissions disclosed", "Advice first, selling second"] },
            { title: "No pressure", bullets: ["\"You do not need to buy\" is allowed", "Training open to all, buyers or not", "No credit people cannot repay"] },
            { title: "Know your numbers", bullets: ["Example only: XOF 500 x 120 bags = XOF 60,000", "Minus transport and time", "Check licence rules"] }
          ],
          sources: [IDE_FBA],
          tryIt: "Write a one-page FBA business note: three inputs or services you could offer, an example price and commission for each, a season's example earnings, and your five ethical rules.",
          youCanNow: "plan how to earn as an FBA from inputs and services while keeping farmers' trust.",
          quickCheck: [
            { objective: "O5", q: "Which is an ethical FBA rule?", options: ["Tell farmers when you earn a commission", "Only train people who buy from you", "Push the product with the highest commission", "Sell unregistered products if cheaper"], answer: 0, why: "Disclosing commissions keeps advice honest and builds trust." },
            { objective: "O5", q: "A farmer's crop does not need fertilizer this season. You should:", options: ["Sell it anyway", "Say nothing and sell a smaller bag", "Tell them honestly they do not need to buy it", "Refuse to visit them again"], answer: 2, why: "Long-term trust is worth more than one sale." }
          ]
        },
        {
          title: "Keeping training records and planning your training day",
          objectives: ["O6", "O2", "O3"],
          minutes: 6,
          goal: "Keep a training register with consent and plan a full training day.",
          text: [
            "Records show what your work achieves, help you follow up, and are what projects, cooperatives and employers ask for. Keep a training register for every session: date, place, topic, each farmer's name, gender, age group (youth or not) and village, and a phone number only if they agree. Note whether each farmer could do the skill by the end.",
            "Follow up at least once, for example a month later or at harvest: did they use the practice, on how much land or how many animals, and what happened? Record the demo-plot results by plot. Over time you can say, for example, \"I trained 60 farmers; 35 now plant in rows; their maize yield rose on average\", backed by records. Do not invent numbers: if you did not measure it, say so.",
            "Ask permission to record people's details, explain why, and keep the register private: on paper in a safe place or a locked phone, not in a public WhatsApp group. Kenya, Nigeria and other countries have data protection laws. Now put everything together for your training day: the lesson plan, the demo plot, your referral list and this register."
          ],
          steps: ["Make a register: date, place, topic, name, gender, age group, village, phone with consent.", "Note who could do the skill by the end.", "Follow up at least once and record what changed.", "Record demo-plot results by plot.", "Keep the register private; ask permission first."],
          words: [["Training register", "a list of who attended a training, on what, and the results."], ["Follow-up", "checking later whether farmers used what they learned and what happened."], ["Consent", "a person's permission to record or share their details."]],
          slides: [
            { title: "Why keep records", bullets: ["Show what your work achieves", "Follow up farmers", "Projects and employers ask for them"] },
            { title: "The training register", bullets: ["Date, place, topic", "Name, gender, age group, village", "Phone only with consent; could they do it?"] },
            { title: "Follow up", bullets: ["At least once: a month or at harvest", "Did they use it? What happened?", "Never invent numbers"] },
            { title: "Keep it private", bullets: ["Ask permission, explain why", "Safe paper or locked phone", "Not in a public group"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Final task: plan your training day. Write the 60 to 90 minute lesson plan (show, try, discuss, with the skill, materials, timings and check), the demo-plot plan (two labelled plots of the same size, the one difference, records and field-day dates), your referral list and what you will not advise on, and a training register sheet with a consent line and a follow-up date.",
          youCanNow: "plan a full training day and keep records that show who you trained and what changed.",
          quickCheck: [
            { objective: "O6", q: "Before writing a farmer's phone number in your register, you should:", options: ["Post it in the group", "Ask their permission and explain why", "Copy it from someone else", "Write it without asking"], answer: 1, why: "Consent is needed to record personal details." },
            { objective: "O6", q: "You did not measure yields after training. In your report you should:", options: ["Guess a high number", "Copy another trainer's numbers", "Leave out the training", "Say yields were not measured"], answer: 3, why: "Honest records are worth more than invented results." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Advising, earning and showing results",
        questions: [
          { objective: "O4", q: "Which pesticide may a farmer trainer recommend?", options: ["Any cheap one from the market", "A product registered in the country, used as the label says", "A home mix of several chemicals", "Whatever a neighbour used"], answer: 1, why: "Only registered products, used as labelled, with protective equipment." },
          { objective: "O4", q: "Before filming a farmer for a training video, you:", options: ["Ask their permission", "Film secretly", "Post first, ask later", "Never tell them"], answer: 0, why: "Permission respects people and their farms." },
          { objective: "O5", q: "Training should be:", options: ["Only for people who buy from you", "Paid by commission only", "Open to all, whether or not they buy", "Cancelled if sales are low"], answer: 2, why: "Keeping training separate from selling protects trust." },
          { objective: "O5", q: "Example only: commission XOF 500 per bag, 120 bags sold. Gross commission is:", options: ["XOF 6,000", "XOF 600", "XOF 620", "XOF 60,000"], answer: 3, why: "500 x 120 = 60,000, before costs." },
          { objective: "O6", q: "Where should a training register be kept?", options: ["Private: safe paper or a locked phone", "In a public WhatsApp group", "On a notice board", "Given to any buyer"], answer: 0, why: "Personal data must be kept private." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Becoming a Farmer Trainer: Agricultural Extension and Farmer Business Advisors",
    questions: [
      { objective: "O1", q: "Extension means:", options: ["Making a farm bigger", "Helping farmers learn and use better practices", "Selling land", "Lending money"], answer: 1, why: "Extension is advice and learning for farmers." },
      { objective: "O1", q: "A lead farmer is usually:", options: ["A respected farmer who hosts demos and teaches neighbours", "A bank officer", "A government minister", "A buyer"], answer: 0, why: "Lead farmers teach by example on their own farms." },
      { objective: "O1", q: "Which organisation trains Farm Business Advisors in Zambia and Mozambique?", options: ["NAFDAC", "The Kenya Meteorological Department", "iDE", "WOAH"], answer: 2, why: "iDE runs FBA networks there." },
      { objective: "O2", q: "Adults learn a farm skill best by:", options: ["Listening to a long talk", "Reading a long leaflet", "Watching TV", "Doing it with their own hands"], answer: 3, why: "Learning by doing is remembered." },
      { objective: "O2", q: "In a 90 minute session, the most time should go to:", options: ["The welcome", "Trying the skill", "Selling inputs", "Waiting"], answer: 1, why: "Practice is where the skill is learned." },
      { objective: "O2", q: "Which helps more women and young people attend?", options: ["Asking who does the work at home and inviting them, at a suitable time", "Holding it on market day", "Using a language they do not speak", "Inviting only household heads"], answer: 0, why: "Inviting the people who do the work, at a good time, makes training reach them." },
      { objective: "O3", q: "A fair demo plot compares:", options: ["Two plots with many differences", "One plot only", "Plots of the same size that differ in one practice", "Your farm with a neighbour's"], answer: 2, why: "Change one thing so the result has one cause." },
      { objective: "O3", q: "When should you hold field days on a demo plot?", options: ["Only after harvest", "Never", "Before planting only", "At key stages such as emergence, flowering and harvest"], answer: 3, why: "Farmers see the difference as the crop grows." },
      { objective: "O3", q: "According to FAO, a Farmer Field School meets:", options: ["Regularly through a whole production cycle, with a trained facilitator", "Once, for one hour", "Only online", "Only in a classroom"], answer: 0, why: "FFS groups learn in the field across the season." },
      { objective: "O4", q: "A farmer trainer should give drug or vaccine doses:", options: ["When asked", "Never; send the farmer to the vet and the label", "Only for poultry", "If the farmer insists"], answer: 1, why: "Doses come from the vet and the label." },
      { objective: "O4", q: "Several chickens die suddenly on a farm. You tell the farmer to:", options: ["Sell the rest at market", "Wait and see", "Report to the vet or veterinary authority at once", "Bury them and say nothing"], answer: 2, why: "It may be avian flu, a notifiable disease." },
      { objective: "O4", q: "In Nigeria, agrochemicals are registered by:", options: ["The Central Bank", "NiMet", "The police", "NAFDAC"], answer: 3, why: "NAFDAC registers agrochemicals in Nigeria." },
      { objective: "O4", q: "A farmer asks about a loan contract. You:", options: ["Tell them to sign quickly", "Refer them to a trusted adviser and suggest reading it fully", "Sign it for them", "Advise them to borrow more"], answer: 1, why: "Money and contracts are beyond a farmer trainer's role." },
      { objective: "O5", q: "An FBA commonly earns from:", options: ["Commissions on inputs and fees for services", "Government salaries only", "Fines on farmers", "Selling farmers' data"], answer: 0, why: "FBAs are entrepreneurs paid by commissions and fees." },
      { objective: "O5", q: "What is a conflict of interest for an FBA?", options: ["Selling genuine seed", "Recording sales", "When the product that pays you most is not best for the farmer", "Giving a training"], answer: 2, why: "Ethical rules exist to handle this conflict." },
      { objective: "O5", q: "Which is good FBA practice?", options: ["Hide your commission", "Sell on credit people cannot repay", "Sell products without labels", "Write your prices down"], answer: 3, why: "Written prices keep selling fair and clear." },
      { objective: "O6", q: "A training register should include:", options: ["Date, topic, names and whether each farmer could do the skill", "Farmers' mobile money PINs", "Only the trainer's name", "Nothing; memory is enough"], answer: 0, why: "This shows who was trained and how well." },
      { objective: "O6", q: "Why follow up farmers after training?", options: ["To sell more", "To see whether they used the practice and what happened", "Because they owe you", "It is not needed"], answer: 1, why: "Follow-up shows results and where to help more." },
      { objective: "O6", q: "If you did not measure results, you should:", options: ["Make up good numbers", "Use last year's numbers", "Say they were not measured", "Copy another report"], answer: 2, why: "Never invent results." },
      { objective: "O6", q: "Recording a farmer's phone number needs:", options: ["Nothing", "Payment", "A buyer's approval", "Their consent"], answer: 3, why: "Personal details are recorded only with permission." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 6, 8, 9, 10, 13, 14, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Lesson plan", objective: "O2", notYet: "A talk with no practice, or several skills at once.", meets: "One skill, show-try-discuss with timings and materials, fitting 60 to 90 minutes, with a check that each farmer can do it.", exceeds: "Also plans for women and young people to attend and includes a short phone video or SMS follow-up." },
      { name: "Demo plot", objective: "O3", notYet: "No comparison, or plots differ in several ways.", meets: "Two labelled plots of the same size that differ in one practice, with records and field-day dates.", exceeds: "Includes how harvests will be weighed by plot and shared honestly, even if the new practice does not win." },
      { name: "Safe advice and referral", objective: "O4", notYet: "Gives doses or names unregistered products; no referral list.", meets: "A referral list with contacts, and what the trainer will not advise on, including notifiable diseases.", exceeds: "Names the national pesticide registration body and how to check its list." },
      { name: "Fair earning", objective: "O5", notYet: "Training tied to buying, or commissions hidden.", meets: "If selling, written prices, disclosed commissions and training open to all.", exceeds: "Includes example season earnings after costs and a rule for saying \"you do not need to buy\"." },
      { name: "Records and roles", objective: "O6", notYet: "No register, or personal data shared openly.", meets: "A register with consent, a follow-up date and private storage; the local extension contact is named.", exceeds: "Records both demo-plot results and farmers' adoption at follow-up." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who run at least one training day within 30 days (follow-up survey)",
      "Number of farmers trained per learner, from training registers",
      "Share of trained farmers using the practice at follow-up",
      "Demo-plot results compared with the usual practice after one season",
      "Learners working with their local extension office or a program as lead farmers or FBAs"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone for short videos, SMS and WhatsApp",
      "Paper, pen and a notebook for the lesson plan, demo-plot plan and register",
      "Access to a small piece of land for a demo plot, stakes, string and signs",
      "Contact details of the local extension office, a vet and the national pesticide registration body",
      "About 90 minutes in total, plus time to run the training day"
    ],
    facilitatorNotes: [
      "Teach this course the way it asks learners to teach: show, try, discuss, with the lesson plan and demo-plot layout done in the session.",
      "Involve the local extension office; invite an extension officer to Lesson 1 if possible.",
      "Never let learners give animal drug, vaccine or hormone doses or withdrawal periods in role plays; practise the referral instead.",
      "For aspiring FBAs, role-play a sales conversation where the right answer is \"you do not need to buy\".",
      "Check that practice registers use made-up names unless real farmers have consented.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
