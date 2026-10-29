"use strict";

// Koach Learn course: Agriculture (Africa) -> "Animal Husbandry, Breeding and Farm Biosecurity" (owner's farmer-course list, 29 October 2026: animal science and
// biosecurity including artificial insemination, African Swine Fever and avian flu). Goes beyond agri-livestock-health (daily health checks, vaccination with a vet,
// Newcastle disease), which it does not repeat: choosing breeds, heat detection and breeding records, AI through a trained technician, avoiding inbreeding,
// a written farm biosecurity plan, and spotting and reporting ASF and avian influenza. Safety rule: no drug, vaccine or hormone doses and no withdrawal periods;
// ASF and avian influenza are notifiable, so suspected cases go to the vet or veterinary authority at once.
// Facts checked 29 October 2026 on WOAH, FAO, USDA APHIS, University of Georgia Extension, KAGRC and the Kenya Veterinary Board.

const WOAH_ASF = { name: "World Organisation for Animal Health (WOAH): African swine fever", url: "https://www.woah.org/en/disease/african-swine-fever/" };
const WOAH_ASF_VACCINE = { name: "WOAH (June 2025): use only high-quality ASF vaccines that meet the new standard", url: "https://www.woah.org/en/asf-woah-stresses-the-importance-of-using-high-quality-vaccines-that-comply-with-newly-adopted-standard" };
const FAO_ASF = { name: "FAO: African swine fever (no effective vaccine or treatment; prevention is the control)", url: "https://www.fao.org/animal-health/animal-diseases/african-swine-fever/en" };
const WOAH_AI = { name: "World Organisation for Animal Health (WOAH): Avian influenza", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: Avian influenza (signs in birds)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const FAO_PIG_BIOSEC = { name: "FAO: Good practices for biosecurity in the pig sector (Animal Production and Health Paper 169)", url: "https://www.fao.org/4/i1435e/i1435e00.htm" };
const FAO_POULTRY_BIOSEC = { name: "FAO: Good biosecurity practices in small scale commercial and scavenging poultry production systems in Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const UGA_HEAT = { name: "University of Georgia Extension: Heat detection strategies for dairy cattle (standing heat, AM-PM rule)", url: "https://fieldreport.caes.uga.edu/publications/B1212/heat-detection-strategies-for-dairy-cattle" };
const KAGRC = { name: "Kenya Animal Genetic Resources Centre (KAGRC): semen and AI supplies", url: "https://kagrc.go.ke/" };
const KVB = { name: "Kenya Veterinary Board (register of vets and veterinary para-professionals)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (register of veterinary surgeons)", url: "https://vcn.gov.ng" };
const ILRI_AI = { name: "ILRI: Training of AI service providers on community-based artificial insemination", url: "https://www.ilri.org/knowledge/publications/training-artificial-insemination-service-providers-community-based" };
const FAO_DADIS = { name: "FAO DAD-IS: Domestic Animal Diversity Information System (breed information by country)", url: "https://www.fao.org/dad-is/en/" };

module.exports = {
  id: "agri-animal-breeding-biosecurity",
  category: "Agriculture (Africa)",
  name: "Animal Husbandry, Breeding and Farm Biosecurity",
  skills: "Choosing breeds for your climate and market, Detecting heat and keeping breeding records, Arranging artificial insemination with a trained technician, Avoiding inbreeding, Writing a farm biosecurity plan, Spotting and reporting African Swine Fever and avian influenza",
  outcome: "breed your cattle, goats, pigs or poultry on purpose and keep disease out: choose a breed that suits your climate and market, catch heats and record every service, use a trained AI technician, avoid inbreeding, run a written biosecurity plan, and report suspected African Swine Fever or avian influenza to the vet at once.",
  about: [
    "This course is for smallholder and growing livestock farmers, farm workers, young agripreneurs and extension workers in Kenya, Nigeria, Ghana, Senegal, Cameroon and across Africa who keep dairy cattle, goats, pigs or poultry and want to grow the herd or flock without bringing in disease.",
    "Chapter 1 is about breeding well: choosing the right breed, catching heats and keeping breeding records, and using artificial insemination (AI) through a trained technician while avoiding inbreeding. Chapter 2 is about keeping disease out: a biosecurity plan with zones, footbaths and visitor rules, quarantine of new animals and safe disposal of dead animals, and the two diseases every pig and poultry farmer must know: African Swine Fever and avian influenza.",
    "This course builds on \"Livestock Health and Management\", which covers daily health checks, vaccination with a vet and Newcastle disease. It gives no drug, vaccine or hormone doses: always follow your vet and the product label. Each lesson takes about five minutes and ends with a task on your own farm. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page biosecurity plan for your own unit (your farm, or an example such as 20 pigs near Abeokuta, 500 layers near Kumasi, 4 dairy cows in Nyeri or 300 broilers near Thies): a sketch with the clean, buffer and dirty zones and the single entry point; your footbath and handwashing rules; your visitor and vehicle rules with a visitor log; how you will quarantine new animals; how you will dispose of dead animals; the warning signs of African Swine Fever or avian influenza and what you will do in the first hour, with the name and phone number of your vet or veterinary office.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial livestock farmers, farm workers, young agripreneurs and extension workers in East, West and Central Africa (including French-speaking countries) who keep dairy cattle, goats, pigs or poultry.",
    startingPoint: "Can feed and care for animals and recognise an animal that looks sick. Many breed with whatever male is nearby, keep few written breeding records, and let visitors, traders and new animals onto the farm without any rules.",
    gap: "Farmers who want more milk, meat or eggs often buy breeds that do not suit their climate or feed, miss heats, waste AI services and let inbreeding creep in. One visitor, truck or new pig can bring in African Swine Fever, which has no effective vaccine or treatment, or avian influenza, which can kill most of a flock. A written breeding routine and biosecurity plan protect the farm and the neighbours.",
    constraints: [
      "Reading level: plain words and short sentences; many learners read English as a second language and the course is also available in Spanish, French and Arabic",
      "Devices: a basic phone or smartphone, paper and pen; low data",
      "Money: low-cost measures first; figures in KES, NGN, GHS and XOF are examples only",
      "Animal health rules: no drug, vaccine or hormone doses and no withdrawal periods; follow the vet and the label",
      "ASF and avian influenza are notifiable: suspected cases are reported to the vet or veterinary authority at once, and national rules differ by country"
    ],
    prerequisites: "Basic animal care. \"Livestock Health and Management\" (Agriculture (Africa)) is recommended first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your climate, feed supply and market", action: "choose a breed or cross for your farm and give reasons for the choice", standard: "naming at least three reasons that fit your farm" },
    { id: "O2", condition: "Using a notebook or phone during twice-daily checks", action: "record heat signs, services and expected due dates for each breeding female", standard: "with no missing dates for the animals you breed" },
    { id: "O3", condition: "When a cow or goat shows standing heat", action: "arrange artificial insemination with a trained, registered AI technician at the right time", standard: "calling the technician the same day and recording the semen or sire details" },
    { id: "O4", condition: "Given your breeding records", action: "plan matings that avoid breeding close relatives", standard: "with no parent-offspring or brother-sister matings in the plan" },
    { id: "O5", condition: "For your own farm or unit", action: "write a biosecurity plan with zones, a footbath, visitor rules, quarantine and dead animal disposal", standard: "covering all five parts on one page" },
    { id: "O6", condition: "When pigs or poultry show warning signs or die suddenly", action: "identify the signs of African Swine Fever or avian influenza and report them to the vet or veterinary authority", standard: "at once, without moving, selling or eating the animals" }
  ],
  chapters: [
    {
      name: "Chapter 1: Breeding for a better herd",
      lessons: [
        {
          title: "Choosing breeds for your climate and market",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose a breed or cross that fits your climate, your feed and your buyers.",
          text: [
            "The best breed is the one that makes money on your farm, not the one with the biggest numbers in a brochure. A high-yielding exotic dairy cow needs a lot of good feed, clean water, shade and close health care. In a hot, dry area with poor grazing, she may give less milk than a hardy local cross and fall sick more often.",
            "Local breeds, such as the East African Zebu, the West African Dwarf goat or the N'Dama cattle of West Africa, cope with heat, ticks and poor feed but grow and yield less. Exotic breeds, such as Friesian or Ayrshire dairy cattle, Large White pigs or commercial hybrid chickens, yield more when you can feed and protect them well. Crosses often sit in between.",
            "Start from your market: who buys, what they pay for (milk, live weight, lean meat, eggs, a festival goat) and when. Then check what you can supply all year: feed, water, housing, labour and a vet. Ask your extension officer, a breeders' association or your national research institute which breeds do well in your area. FAO's DAD-IS database lists the breeds kept in each country."
          ],
          steps: ["Write what your buyers want and pay for.", "Write what you can provide all year: feed, water, housing, labour, vet.", "List two or three breeds or crosses that farmers near you keep.", "Ask your extension officer or a breeders' association about each one.", "Choose the breed that fits both lists, and write three reasons."],
          words: [["Breed", "a group of animals of one kind with the same looks and traits, passed from parents to young."], ["Exotic breed", "a breed developed in another region, often higher-yielding but less suited to local heat, disease and feed."], ["Cross", "an animal whose parents are from two different breeds."]],
          slides: [
            { title: "The right breed makes money on YOUR farm", bullets: ["Big brochure numbers need big inputs", "Poor feed and heat cut yields fast", "Choose for your farm, not for a photo"] },
            { title: "Local, exotic or cross", bullets: ["Local: hardy, copes with heat, ticks and poor feed", "Exotic: high yield, needs good feed and care", "Cross: often in between"] },
            { title: "Start from the market", bullets: ["What do buyers pay for: milk, meat, eggs?", "When do they buy?", "What can you supply all year?"] },
            { title: "Ask before you buy", bullets: ["Extension officer or breeders' association", "Farmers near you with the breed", "FAO DAD-IS lists breeds by country"] }
          ],
          sources: [FAO_DADIS],
          tryIt: "Write two short lists for your farm: what your buyers want, and what you can provide all year. Name two breeds or crosses and choose one, with three reasons.",
          youCanNow: "choose a breed or cross that fits your climate, your feed and your market, and explain why.",
          quickCheck: [
            { objective: "O1", q: "A farmer in a hot, dry area with poor grazing wants dairy cows. Which choice fits best?", options: ["The highest-yielding exotic cow he can find", "Any cow that is cheapest at the market", "A hardy local cross that suits the heat and the feed", "A breed chosen from a brochure photo"], answer: 2, why: "A breed that copes with the heat and the feed he really has will produce more over time than one that needs inputs he cannot supply." },
            { objective: "O1", q: "What should you write down FIRST when choosing a breed?", options: ["The name of the breed your neighbour likes", "What your buyers want and pay for", "The colour you prefer", "The breed with the biggest animals"], answer: 1, why: "The market decides what pays; then you check what your farm can supply." }
          ]
        },
        {
          title: "Heat detection and breeding records",
          objectives: ["O2"],
          minutes: 5,
          goal: "Spot a female in heat and record heats, services and due dates.",
          text: [
            "A cow, goat or sow can only conceive for a short time when she is \"in heat\". Miss it, and you wait about three weeks for the next one, while you still feed her. Cows, goats and pigs usually come into heat about every 21 days, but this varies, so watch closely.",
            "The surest sign in a cow is standing heat: she stands still when another animal mounts her. Other signs are mounting other animals, restlessness, bellowing, a clear sticky discharge from the vulva and less milk. Goats wag their tails, bleat and seek the buck. A sow in heat stands still when you press on her back. Watch at least twice a day, early morning and evening, for 20 to 30 minutes, when animals are calm.",
            "Records turn guesses into a plan. For each female write: her ID, the date and time of each heat, the date she was served, by which bull, buck or boar or which AI straw, and the expected due date. Then you know when to check for a return to heat about 3 weeks later, when to dry off a cow, and which females keep failing to conceive. Gestation is about 9 months for a cow, about 5 months for a goat, and about 3 months, 3 weeks and 3 days for a sow; your vet or extension officer can give the exact figures for your breed."
          ],
          steps: ["Give every breeding female an ID: ear tag, name or number.", "Watch for heat twice a day, morning and evening.", "Write the date, time and signs you saw.", "Write the service date and the male or AI straw used.", "Add the date to check for a return to heat, about 3 weeks later.", "Write the expected due date, and check pregnancy with your vet or technician."],
          words: [["Heat (oestrus)", "the short time when a female will accept the male and can become pregnant."], ["Standing heat", "when a cow stands still to be mounted; the surest sign she is in heat."], ["Service", "mating, by a male or by artificial insemination."], ["Gestation", "the time from conception to birth."]],
          slides: [
            { title: "Heat is short; missing it costs 3 weeks", bullets: ["Cows, goats and pigs: about every 21 days", "Missed heat = weeks of feed with no pregnancy"] },
            { title: "Signs of heat", bullets: ["Cow: stands to be mounted (surest sign)", "Mounting others, restless, clear discharge", "Goat: tail wagging; sow: stands when pressed"] },
            { title: "Watch twice a day", bullets: ["Early morning and evening", "20 to 30 minutes, when animals are calm"] },
            { title: "The breeding record", bullets: ["ID, heat date and time, service date", "Male or AI straw used", "Return-to-heat check date and due date"] }
          ],
          sources: [UGA_HEAT],
          tryIt: "Make a breeding record page on paper or in a phone note with these columns: animal ID, heat date and time, signs seen, service date, male or AI straw, return-to-heat check, due date. Fill it in for one of your females, or an example cow.",
          youCanNow: "spot the signs of heat and keep a breeding record with heats, services and due dates.",
          quickCheck: [
            { objective: "O2", q: "Which is the surest sign that a cow is in heat?", options: ["She eats more than usual", "She lies down a lot", "She stands still when another animal mounts her", "Her coat looks shiny"], answer: 2, why: "Standing to be mounted is the surest sign of heat; other signs only suggest it." },
            { objective: "O2", q: "Your goat was served on 1 March. When do you watch for a return to heat?", options: ["About 3 weeks later, around 22 March", "The next day", "After 6 months", "Never; she must be pregnant"], answer: 0, why: "Heats come about every 21 days, so a female that did not conceive shows heat again about 3 weeks later." }
          ]
        },
        {
          title: "Artificial insemination and avoiding inbreeding",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Arrange AI with a trained technician at the right time, and plan matings that avoid close relatives.",
          text: [
            "Artificial insemination (AI) places semen from a proven male into the female's reproductive tract. It gives a small farmer the genes of a top bull or buck without keeping one, and it lowers the risk of diseases spread by mating. AI is done by a trained AI technician or vet, not by the farmer. A wrong technique can injure the animal, and semen must be kept frozen in liquid nitrogen until the moment of use, or it dies.",
            "Find a technician who is trained and registered: ask your county or district livestock office, your dairy cooperative or a registered vet. In Kenya, KAGRC supplies semen through appointed agents and AI technicians should be registered with the Kenya Veterinary Board; in Nigeria, check that the vet is on the Veterinary Council of Nigeria register. A common rule for cows is AM-PM: a cow first seen in standing heat in the morning is served that afternoon or evening; one first seen in the afternoon is served the next morning. Call the technician as soon as you see heat, and write down the straw's bull name or code.",
            "Inbreeding means mating close relatives: a father with his daughter, a mother with her son, or a brother with his sister. The young are often weaker, grow slowly, get sick more and may be born with defects. It happens quietly when the same bull, buck, boar or cock stays on a farm for years. Prevent it: keep records of every animal's mother and father, swap or sell your breeding male before his daughters are old enough to breed, borrow or exchange males with farmers whose animals are not related to yours, and use AI straws from a different bull each time you breed a daughter."
          ],
          steps: ["See standing heat: write the time.", "Call your registered AI technician at once.", "Use the AM-PM rule for cows, or the technician's advice.", "Check that the straw comes from a known bull and write its name or code.", "Before each mating, check the records: is this male her father, son or brother?", "If yes, use another male or a different AI bull."],
          words: [["Artificial insemination (AI)", "putting semen from a chosen male into a female by hand, done by a trained technician."], ["Straw", "a thin tube holding one dose of frozen semen, labelled with the bull's name or code."], ["Liquid nitrogen", "a very cold liquid that keeps semen frozen until use."], ["Inbreeding", "mating close relatives, which makes weaker young with more defects."]],
          slides: [
            { title: "Why AI", bullets: ["Top-quality genes without keeping a bull", "Lower risk of diseases spread by mating", "Done by a trained technician, not the farmer"] },
            { title: "Find a registered technician", bullets: ["Livestock office, dairy cooperative or vet", "Kenya: KAGRC agents, Kenya Veterinary Board", "Nigeria: Veterinary Council of Nigeria register"] },
            { title: "Timing: the AM-PM rule for cows", bullets: ["Heat seen in the morning: serve that afternoon", "Heat seen in the afternoon: serve next morning", "Record the bull name or code on the straw"] },
            { title: "Avoid inbreeding", bullets: ["No father-daughter, mother-son, brother-sister", "Swap your male before his daughters breed", "Use a different AI bull for each daughter"] }
          ],
          sources: [UGA_HEAT, KAGRC, KVB, VCN, ILRI_AI],
          tryIt: "Write the name and phone number of a trained, registered AI technician near you (ask your livestock office or cooperative). Then look at your animals: list any female that is closely related to your current breeding male, and write how you will breed her instead.",
          youCanNow: "arrange AI with a trained technician at the right time and plan matings that avoid close relatives.",
          quickCheck: [
            { objective: "O3", q: "A cow shows standing heat at 7 am. Using the AM-PM rule, when should she be served?", options: ["In two days", "That afternoon or evening", "Next week", "Only when she stops showing heat"], answer: 1, why: "A cow first seen in heat in the morning is served that afternoon or evening." },
            { objective: "O4", q: "Your bull has been on the farm for four years and his daughters are now ready to breed. What do you do?", options: ["Keep using him on everyone", "Use him only on the biggest daughters", "Stop breeding for a year", "Use a different bull or AI from an unrelated bull for his daughters"], answer: 3, why: "Mating a bull with his daughters is inbreeding; an unrelated male or a different AI bull avoids it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Breeding for a better herd",
        questions: [
          { objective: "O1", q: "Why can a high-yielding exotic breed earn less than a local cross on some farms?", options: ["Exotic breeds never give much milk", "Local animals always sell for more", "Exotic breeds cannot be fed grass", "It needs feed, water and care the farm cannot supply, so it yields less and gets sick more"], answer: 3, why: "High yield depends on good feed and care; without them, a hardy cross often does better." },
          { objective: "O2", q: "How often should you watch for signs of heat?", options: ["At least twice a day, morning and evening", "Once a week", "Only when the animal is sick", "Once a month"], answer: 0, why: "Heat is short, so watching twice a day when animals are calm catches most heats." },
          { objective: "O2", q: "Which of these belongs in a breeding record?", options: ["The weather each day", "The service date and the male or AI straw used", "The colour of the shed", "The price of fuel"], answer: 1, why: "The service date and the sire let you check for return to heat, predict the due date and avoid inbreeding." },
          { objective: "O3", q: "Who should carry out artificial insemination?", options: ["Any farm worker after watching a video", "The person who sells the cow", "A trained, registered AI technician or vet", "A neighbour with a strong arm"], answer: 2, why: "AI needs training: a wrong technique can injure the animal and semen must be handled correctly." },
          { objective: "O4", q: "Which mating is inbreeding?", options: ["A cow with an unrelated AI bull", "A doe with a buck borrowed from another village", "A gilt with a boar bought from a far farm", "A ram with his own daughter"], answer: 3, why: "A father with his daughter is a close-relative mating, which is inbreeding." }
        ]
      }
    },
    {
      name: "Chapter 2: Keeping disease out",
      lessons: [
        {
          title: "Your biosecurity plan: zones, footbaths and visitors",
          objectives: ["O5"],
          minutes: 5,
          goal: "Draw your farm's biosecurity zones and write rules for footbaths and visitors.",
          text: [
            "Biosecurity means everything you do to stop germs getting onto your farm, spreading inside it, and leaving it. Most diseases arrive on animals, people, shoes, clothes, vehicles, crates, feed bags or equipment. Many of the best measures cost little: a fence, a gate, a footbath, soap and a rule that is kept every day.",
            "Divide the farm into zones. The clean zone is where the animals live: only the people who care for them go in. The buffer zone is around it: the store, the changing area, the footbath. The dirty zone is outside: the road, the parking place, the market crates. Have ONE entry point to the animal area, with a gate you can close. Traders' trucks stay outside the fence; load and unload at the boundary.",
            "At the entry, put a footbath with a farm disinfectant mixed as the label says, and change it when it is dirty or after rain; dirt stops disinfectant working, so brush the mud off boots first. Better still, keep farm-only boots and clothes at the entry. Have soap and water for hands. Keep visitors to those who must come, ask where they have been with animals, and write each visit in a visitor log: date, name, phone, reason and last farm visited."
          ],
          steps: ["Sketch your farm: houses, pens, store, gate and road.", "Mark the clean, buffer and dirty zones.", "Choose one entry point to the animal area, with a gate.", "Put a footbath and handwashing point at that entry.", "Keep farm-only boots and clothes there if you can.", "Start a visitor log and keep traders' vehicles outside the fence."],
          words: [["Biosecurity", "steps that stop germs getting onto a farm, spreading on it and leaving it."], ["Footbath", "a shallow tray of disinfectant that people step through to clean their boots."], ["Disinfectant", "a chemical that kills germs; use a farm product mixed as the label says."], ["Visitor log", "a book where you write every visitor's name, contact, reason and last farm visited."]],
          slides: [
            { title: "Germs arrive on...", bullets: ["New animals, people, shoes and clothes", "Vehicles, crates, feed bags and tools", "Most good measures cost little"] },
            { title: "Three zones", bullets: ["Clean: where the animals live", "Buffer: store, changing area, footbath", "Dirty: road, parking, market crates"] },
            { title: "One entry, with a footbath", bullets: ["One gate into the animal area", "Brush off mud, then step in the footbath", "Disinfectant mixed as the label says"] },
            { title: "Visitors", bullets: ["Only those who must come", "Farm boots and handwashing", "Log date, name, phone, reason, last farm"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Sketch your farm on paper. Mark the clean, buffer and dirty zones, the one entry point, the footbath and where trucks will stop. Write three visitor rules under the sketch.",
          youCanNow: "draw biosecurity zones for your farm and set rules for footbaths, handwashing and visitors.",
          quickCheck: [
            { objective: "O5", q: "A pig trader arrives to buy weaners. Where should his truck stop?", options: ["Outside the fence, loading at the boundary", "Next to the pig pens", "Inside the feed store", "Wherever he likes"], answer: 0, why: "Vehicles that visit many farms carry germs, so they stay in the dirty zone outside the fence." },
            { objective: "O5", q: "Your footbath is full of mud after the rain. What do you do?", options: ["Leave it; it still works", "Add more water only", "Empty it, clean it and refill it with disinfectant mixed as the label says", "Remove it until the dry season"], answer: 2, why: "Dirt and dilution stop a disinfectant working, so a dirty footbath must be cleaned and refilled." }
          ]
        },
        {
          title: "Quarantine for new animals and safe disposal of the dead",
          objectives: ["O5"],
          minutes: 5,
          goal: "Set up quarantine for new animals and a safe way to dispose of dead ones.",
          text: [
            "New animals are the most common way disease enters a farm. An animal can look healthy and still carry germs or parasites. Buy from known, healthy farms, ask for the animal's vaccination and treatment history, and avoid animals from markets or areas with disease reports.",
            "Quarantine means keeping new or returning animals in a separate pen, away from your herd or flock, for a period your vet advises, often a few weeks. Care for them last each day, with separate boots and tools, and watch them daily. Ask your vet whether to test, treat or vaccinate before they join the others. Animals that come back unsold from a market or show also go into quarantine.",
            "Dead animals spread disease to your animals, dogs, wild animals and neighbours. Never sell, eat or give away an animal that died of an unknown cause. Handle carcasses with gloves, then dispose of them as your vet or local rules say: often a deep pit, away from water and houses, that dogs and wild animals cannot dig up. If an animal died suddenly, or several are sick, do not open the carcass or move it off the farm: call the vet first, because it may be a notifiable disease or anthrax."
          ],
          steps: ["Buy only from known, healthy farms; ask for the health history.", "Prepare a separate quarantine pen, away from the herd or flock.", "Keep new and returning animals there for the time your vet advises.", "Care for them last each day, with separate boots and tools.", "Choose a disposal place for carcasses with your vet, away from water and houses.", "Sudden or unexplained deaths: do not open or move the carcass; call the vet."],
          words: [["Quarantine", "keeping new or returning animals apart for a time to see whether they carry disease."], ["Carcass", "the body of a dead animal."], ["Notifiable disease", "a disease that the law says must be reported to the veterinary authority."]],
          slides: [
            { title: "New animals bring disease", bullets: ["Healthy-looking animals can carry germs", "Buy from known, healthy farms", "Ask for the health history"] },
            { title: "Quarantine", bullets: ["Separate pen, away from the herd or flock", "For the time your vet advises", "Care for them last, with separate boots and tools"] },
            { title: "Dead animals", bullets: ["Never sell, eat or give away", "Gloves; dispose as the vet or local rules say", "Deep pit, away from water; dogs cannot dig it"] },
            { title: "Sudden deaths", bullets: ["Do not open or move the carcass", "Call the vet first"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Mark a quarantine pen on your farm sketch, as far from your animals as you can, and write how long your vet advises keeping new animals there (ask if you do not know). Then mark where and how you will dispose of dead animals, and write the rule for sudden deaths.",
          youCanNow: "quarantine new animals and dispose of dead animals safely, and know when to call the vet before touching a carcass.",
          quickCheck: [
            { objective: "O5", q: "You buy three goats at the market. What do you do when you get home?", options: ["Put them straight in with your herd", "Keep them in a separate pen for the time your vet advises", "Sell them at once", "Let them graze with the neighbour's goats"], answer: 1, why: "Quarantine shows whether new animals carry disease before they can infect your herd." },
            { objective: "O5", q: "A pig dies suddenly overnight. What is the right first step?", options: ["Open it to see what happened", "Sell the meat quickly", "Leave the carcass where it is, keep people and animals away, and call the vet", "Throw it in the river"], answer: 2, why: "A sudden death may be a notifiable disease; opening or moving the carcass can spread it." }
          ]
        },
        {
          title: "African Swine Fever and avian influenza: spot, stop, report",
          objectives: ["O6"],
          minutes: 6,
          goal: "Identify the warning signs of African Swine Fever and avian influenza and report them to the vet at once.",
          text: [
            "African Swine Fever (ASF) is a virus disease of pigs that has caused heavy losses in several African countries, including Nigeria. WOAH lists high fever, weakness, loss of appetite, red or purple patches on the skin, vomiting, diarrhoea, abortion in sows and death, with up to 100 percent of pigs dying in severe forms. It spreads through contact with sick pigs, pork and food waste (swill) from infected pigs, and contaminated clothes, boots, vehicles and equipment, and soft ticks where they live. The virus survives a long time in pork and in the environment. It does not infect people. FAO says there is no effective vaccine or treatment, so prevention is the only control; WOAH warns against sub-standard vaccines, so never use an \"ASF vaccine\" that your national veterinary authority has not approved.",
            "Avian influenza (bird flu) is a virus disease of birds. Severe forms can kill most of a flock in days. Signs listed by USDA APHIS include sudden deaths without warning, birds that are weak and stop eating, a drop in eggs or soft-shelled eggs, swollen and purple comb, wattles and legs, gasping, coughing and twisted necks. It spreads from wild birds, sick birds, live bird markets, droppings, crates, feed, water and equipment. People rarely catch it, mostly through close contact with sick birds, so never handle sick or dead birds with bare hands.",
            "Both diseases are notifiable: suspected cases must be reported to your vet or veterinary authority at once. Only a laboratory test can confirm them, because other diseases look similar. To prevent them: never feed pigs uncooked swill, buy only from healthy farms, keep pigs penned and poultry housed away from wild birds, and use your biosecurity plan every day. If you suspect either disease: keep all animals in, stop all sales and movement of animals, meat, eggs and manure, keep visitors out, and call the vet."
          ],
          steps: ["Know the signs of ASF (pigs) and avian influenza (poultry).", "Check your animals every day.", "Suspect a case: keep all animals in their pens or houses.", "Stop all sales and movements: animals, meat, eggs, manure, equipment.", "Do not open, sell or eat sick or dead animals; no bare hands.", "Call your vet or veterinary office at once and follow their instructions."],
          words: [["African Swine Fever (ASF)", "a deadly virus disease of pigs with no effective vaccine or treatment; it does not infect people."], ["Avian influenza", "bird flu: a virus disease of birds; severe forms kill most of a flock."], ["Swill", "food waste fed to pigs; uncooked swill with pork can spread ASF."], ["Veterinary authority", "the government office in charge of animal disease, such as the national or county veterinary services."]],
          slides: [
            { title: "African Swine Fever (pigs)", bullets: ["High fever, weak, not eating, red or purple skin", "Vomiting, diarrhoea, abortions, sudden deaths", "No effective vaccine or treatment (FAO)"] },
            { title: "How ASF spreads", bullets: ["Sick pigs, pork and uncooked swill", "Boots, clothes, vehicles and tools", "Does not infect people"] },
            { title: "Avian influenza (poultry)", bullets: ["Sudden deaths; weak birds; egg drop", "Swollen, purple comb and wattles; gasping", "Spread by wild birds, markets, crates, droppings"] },
            { title: "Notifiable: report at once", bullets: ["Keep all animals in; stop all sales and movement", "No bare hands; do not open, sell or eat", "Call the vet or veterinary office now"] }
          ],
          sources: [WOAH_ASF, FAO_ASF, WOAH_ASF_VACCINE, WOAH_AI, APHIS_AI],
          tryIt: "Final task: write your one-page biosecurity plan. Use your farm sketch with zones, the footbath and visitor rules, quarantine and dead animal disposal, then add the warning signs of ASF or avian influenza, your first-hour actions, and your vet's name and phone number.",
          youCanNow: "recognise the warning signs of African Swine Fever and avian influenza, stop all movement, and report suspected cases to the vet at once.",
          quickCheck: [
            { objective: "O6", q: "Several of your pigs have a high fever, purple skin patches and two died overnight. What do you do first?", options: ["Sell the rest quickly before they die", "Buy an ASF vaccine from the market", "Treat them with leftover medicine", "Keep all pigs in, stop all movement and sales, and call the vet at once"], answer: 3, why: "These are warning signs of ASF, a notifiable disease: stop movement and report it immediately." },
            { objective: "O6", q: "Which practice helps keep African Swine Fever out?", options: ["Never feeding pigs uncooked swill", "Feeding pigs hotel food waste", "Letting pigs roam the village", "Buying pigs from any passing trader"], answer: 0, why: "Uncooked food waste can contain pork with the ASF virus, which survives a long time in meat." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Keeping disease out",
        questions: [
          { objective: "O5", q: "In a biosecurity plan, which area is the clean zone?", options: ["The road outside the farm", "The parking place for trucks", "Where the animals live", "The market"], answer: 2, why: "The clean zone is the animal area, where only the people caring for the animals go." },
          { objective: "O5", q: "What is the main purpose of a visitor log?", options: ["To charge visitors a fee", "To know who came, when and from where if disease appears", "To count how many friends you have", "To advertise the farm"], answer: 1, why: "If disease appears, the log helps the vet trace where it may have come from." },
          { objective: "O5", q: "How should you dispose of a goat that died of an unknown cause?", options: ["Sell the meat cheaply", "Give it to the dogs", "Leave it in the bush", "Use gloves and dispose of it as the vet or local rules say, away from water"], answer: 3, why: "Carcasses spread disease; safe disposal as the vet advises protects animals, people and water." },
          { objective: "O6", q: "Is there an effective vaccine or treatment you can use against African Swine Fever?", options: ["No; FAO says prevention through biosecurity is the only control", "Yes, any antibiotic cures it", "Yes, sold at every market", "Yes, a herbal mix cures it"], answer: 0, why: "FAO says there is no effective vaccine or treatment for ASF, so prevention is the control." },
          { objective: "O6", q: "Your layers suddenly stop laying, some have swollen purple combs and many die in a day. What do you do?", options: ["Sell the eggs and birds at the market today", "Bury the dead birds and say nothing", "Keep the birds in, stop all movement, avoid bare-hand contact and report to the vet at once", "Release the birds outside"], answer: 2, why: "These signs suggest avian influenza, which is notifiable and must be reported at once." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Animal Husbandry, Breeding and Farm Biosecurity",
    questions: [
      { objective: "O1", q: "What should guide your choice of breed most?", options: ["What your buyers want and what your farm can supply all year", "The breed in the latest advert", "The breed with the biggest animals", "The cheapest animal at the market"], answer: 0, why: "A breed pays only when it meets the market and your farm can feed and care for it." },
      { objective: "O1", q: "Which is a strength of many local breeds such as the West African Dwarf goat or N'Dama cattle?", options: ["The highest milk yield in the world", "They cope with heat, ticks and poor feed", "They never get sick", "They need no water"], answer: 1, why: "Local breeds are hardy; their trade-off is lower growth and yield." },
      { objective: "O1", q: "Where can you ask which breeds do well in your area?", options: ["A random social media post", "A trader selling one breed only", "Your extension officer, breeders' association or research institute", "Nobody; just buy and see"], answer: 2, why: "Local experts and farmers know which breeds perform in your conditions." },
      { objective: "O2", q: "About how often do cows, goats and pigs come into heat if they are not pregnant?", options: ["Every 3 days", "Every 6 months", "Once a year", "About every 21 days"], answer: 3, why: "The usual cycle is about 21 days, though it varies." },
      { objective: "O2", q: "When is the best time to watch for heat?", options: ["Midday only", "Early morning and evening, when animals are calm", "Only at feeding time on market days", "Once a week"], answer: 1, why: "Heat signs are easiest to see when animals are calm, at least twice a day." },
      { objective: "O2", q: "Why write down the service date?", options: ["To check for a return to heat and know the due date", "Because the law requires a photo", "To set the milk price", "To choose the feed brand"], answer: 0, why: "The service date tells you when to check for return to heat and when the birth is due." },
      { objective: "O2", q: "About how long is a sow's pregnancy?", options: ["About 9 months", "About 3 weeks", "About 3 months, 3 weeks and 3 days", "About 1 year"], answer: 2, why: "Sow gestation is about 3 months, 3 weeks and 3 days; check your breed with your vet." },
      { objective: "O3", q: "What is one big benefit of artificial insemination for a small farmer?", options: ["It replaces all feeding", "It means no records are needed", "It removes all disease", "Access to top-quality genes without keeping a bull"], answer: 3, why: "AI brings proven genes to small farms that cannot keep a top male." },
      { objective: "O3", q: "A cow first shows standing heat in the afternoon. When should the technician serve her?", options: ["The next morning", "Immediately at night", "In one week", "At the next heat"], answer: 0, why: "By the AM-PM rule, heat first seen in the afternoon is served the next morning." },
      { objective: "O3", q: "How do you find a trustworthy AI technician?", options: ["Anyone with a semen flask", "A trained, registered technician through the livestock office, cooperative or vet", "The cheapest person at the market", "A video tutorial"], answer: 1, why: "Training and registration protect your animals and your money." },
      { objective: "O3", q: "Why must semen stay in liquid nitrogen until use?", options: ["To make it heavier", "To change its colour", "Because it dies if it warms up", "To add vitamins"], answer: 2, why: "Frozen semen dies if it is not kept very cold until the moment of insemination." },
      { objective: "O4", q: "What happens to young from closely related parents?", options: ["They are always stronger", "They grow faster", "They need less feed", "They are often weaker, sicker and may have defects"], answer: 3, why: "Inbreeding increases weak, sick and defective young." },
      { objective: "O4", q: "What is a simple way to prevent inbreeding with your own breeding male?", options: ["Swap or sell him before his daughters are old enough to breed", "Keep him for life", "Use him only in the rainy season", "Feed him more"], answer: 0, why: "Changing the male before his daughters breed stops father-daughter matings." },
      { objective: "O4", q: "Which records help you avoid inbreeding?", options: ["Feed prices", "Rainfall", "Each animal's mother and father", "Visitor names"], answer: 2, why: "Knowing parents shows which animals are related." },
      { objective: "O5", q: "How many entry points should the animal area have?", options: ["As many as possible", "One, with a gate, footbath and handwashing", "None; animals roam", "One for each visitor"], answer: 1, why: "One controlled entry makes the biosecurity rules easy to keep." },
      { objective: "O5", q: "Why brush mud off boots before the footbath?", options: ["Dirt stops the disinfectant from working", "To save water", "Mud makes the boots heavy", "It does not matter"], answer: 0, why: "Disinfectants work poorly on dirty surfaces." },
      { objective: "O5", q: "Pigs come back unsold from the market. What do you do?", options: ["Put them straight back with the others", "Give them away at the gate", "Release them in the village", "Quarantine them as if they were new animals"], answer: 3, why: "Market animals may have picked up disease, so they are quarantined." },
      { objective: "O6", q: "Which of these spreads African Swine Fever?", options: ["Rain on the roof", "Feeding pigs maize bran", "Pork in uncooked food waste, sick pigs and dirty boots or vehicles", "Clean drinking water"], answer: 2, why: "ASF spreads through infected pigs, pork products, swill and contaminated items." },
      { objective: "O6", q: "Does African Swine Fever infect people?", options: ["Yes, always", "Only children", "Only farm workers", "No, it does not infect people"], answer: 3, why: "WOAH says ASF does not affect human health, but it is deadly to pigs." },
      { objective: "O6", q: "Why must suspected avian influenza be reported at once?", options: ["It is notifiable and spreads fast between farms", "To get a free vaccine every time", "Because birds stop eating", "To change the market price"], answer: 0, why: "Notifiable diseases must be reported so the veterinary authority can stop the spread." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 8, 11, 14, 16, 17, 19] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again.",
    criteria: [
      { name: "Zones and entry", objective: "O5", notYet: "No sketch, or animals and vehicles mix with no marked zones.", meets: "Sketch shows clean, buffer and dirty zones, one entry point and where trucks stop.", exceeds: "Also shows the route for feed, manure and dead animals so they never cross the clean zone." },
      { name: "Footbath and visitor rules", objective: "O5", notYet: "No footbath or visitor rules, or rules nobody can follow.", meets: "Footbath with disinfectant mixed as the label says, handwashing, and a visitor log with last farm visited.", exceeds: "Farm-only boots and clothes, and a named person who checks the rules daily." },
      { name: "Quarantine and dead animals", objective: "O5", notYet: "New animals join the herd at once, or carcasses are sold, eaten or dumped.", meets: "Separate quarantine pen for the time the vet advises, and a safe disposal place agreed with the vet.", exceeds: "Also covers animals returning from market and the rule never to open a suddenly dead animal." },
      { name: "ASF or avian influenza response", objective: "O6", notYet: "Warning signs missing, or the plan says to sell, treat or wait.", meets: "Lists the warning signs and the first-hour actions: keep animals in, stop all movement, report at once.", exceeds: "Names the veterinary office, phone number and the person who will call, and the no-swill or wild-bird rule." },
      { name: "Breeding and new stock", objective: "O4", notYet: "New breeding animals are bought with no checks, or the plan allows related matings.", meets: "New breeding stock comes from known, healthy farms and the plan avoids related matings.", exceeds: "Uses AI from unrelated bulls or a male exchange plan, with records of parents." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Farms with a footbath, one controlled entry and a visitor log in use 30 days after the course (follow-up survey or extension visit)",
      "Learners who keep a breeding record and report fewer missed heats or repeat services",
      "Suspected ASF or avian influenza cases reported by learners to the vet within one day",
      "Fewer deaths from disease in learners' herds and flocks over the next year"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook and pen, or a phone note or spreadsheet, for breeding records and the visitor log",
      "Paper for the farm sketch",
      "The name and phone number of a local vet, veterinary office and registered AI technician",
      "About 60 to 75 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Run it with a farmer group or cooperative: take the pre-test together, then one chapter per session, doing the \"Try it now\" tasks on real farms where possible.",
      "Invite the local vet or animal health officer to the Chapter 2 session to explain how to report ASF and avian influenza in your country and the local disposal rules.",
      "Never give or discuss drug, vaccine or hormone doses or withdrawal periods; send every such question to the vet and the label.",
      "Do not let the group visit several pig or poultry farms on the same day; practise biosecurity on the training itself.",
      "Score each learner's biosecurity plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
