"use strict";

// Koach Learn course: Agriculture (Africa) -> "Livestock Health and Management" (owner's request, 28 October 2026).
// For smallholder and growing livestock keepers in Kenya, Nigeria, Ghana and across Africa (cattle, goats, sheep, poultry): spotting healthy and sick
// animals, feed and water, housing and hygiene, vaccination schedules made with a local vet, poultry biosecurity and Newcastle disease, parasite control,
// records and when to call the vet. Safety rule: the course never gives drug or vaccine doses; it tells students to follow the vet and the label.
// Facts are sourced to WOAH, FAO and the Veterinary Council of Nigeria.

const WOAH_ND = { name: "World Organisation for Animal Health (WOAH): Newcastle disease", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const FAO_ND_VILLAGE = { name: "FAO: Newcastle disease in village chickens", url: "https://www.fao.org/4/y5162e/y5162e05.htm" };
const FAO_BIOSEC = { name: "FAO: Good biosecurity practices in small scale commercial and scavenging poultry production systems in Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const FAO_PRUDENT = { name: "FAO: Prudent and efficient use of antimicrobials in pigs and poultry (vets, health plans, withdrawal periods)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };
const VCN = { name: "Veterinary Council of Nigeria (register of veterinary surgeons)", url: "https://vcn.gov.ng" };

module.exports = {
  id: "agri-livestock-health",
  category: "Agriculture (Africa)",
  name: "Livestock Health and Management",
  skills: "Telling a healthy animal from a sick one, Feeding and watering well, Keeping housing clean and safe, Planning vaccinations with a vet, Protecting poultry from Newcastle disease, Controlling parasites and keeping health records",
  outcome: "run a simple health plan for your cattle, goats or poultry: check every animal daily for signs of sickness, feed and water them well, keep housing clean, follow a vaccination schedule made with your local vet, keep Newcastle disease and parasites out, record every treatment, and know when to call the vet.",
  about: [
    "This course is for smallholder and growing livestock keepers, herders, poultry farmers, farm workers and young farmers in Kenya, Nigeria, Ghana and across Africa who keep cattle, goats, sheep or chickens. Healthy animals grow faster, give more milk and eggs, and are worth more at market; one disease outbreak can wipe out years of savings.",
    "Chapter 1 covers everyday care: telling a healthy animal from a sick one, feed and water, and housing and hygiene. Chapter 2 covers prevention and treatment: vaccination schedules with a vet, poultry biosecurity and Newcastle disease, and parasites, records and when to call the vet.",
    "This course does not give drug or vaccine doses. Diseases, vaccines and approved medicines differ by country and area, so always follow your local veterinarian or animal health officer and the product label. Each lesson takes about five minutes and ends with a task with your own animals. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page health plan for your animals (your own, or an example such as 3 dairy cows in Kiambu, 15 goats in Kano, or 200 layers near Kumasi): your daily health check, feeding and water plan including the dry season, two housing and hygiene rules, the vaccination schedule agreed with your vet, your biosecurity rules (for poultry: Newcastle disease), how you will control worms and ticks, the records you will keep, and the signs that mean you call the vet at once, with the vet's name and number.",
  chapters: [
    {
      name: "Chapter 1: Everyday care",
      lessons: [
        {
          title: "Signs of a healthy and a sick animal",
          minutes: 5,
          goal: "Do a quick daily health check and spot an animal that may be sick.",
          text: [
            "You know your animals best. A daily look, at feeding or milking time, catches sickness early, when it is cheapest to treat and before it spreads.",
            "A healthy animal is alert and curious, stands and walks normally, eats and drinks well, and cattle, goats and sheep chew the cud when resting. Eyes are bright and clear, the nose is clean, the coat or feathers are smooth and shiny, breathing is calm, and dung and urine look normal. A healthy hen is active, has a bright red comb, and lays as usual.",
            "Warning signs: standing apart from the group, head down, not eating or not chewing the cud, dull or runny eyes, a runny nose, coughing or fast breathing, diarrhoea or blood in dung, limping, swellings, wounds, a sudden drop in milk or eggs, ruffled feathers, twisted necks in birds, or sudden deaths. Separate a sick animal from the others and contact your vet or animal health officer."
          ],
          steps: ["Check every animal once a day, at feeding or milking time.", "Look: alert, standing and walking normally, eating, chewing the cud.", "Look closer: eyes, nose, coat or feathers, breathing, dung.", "Note any drop in milk or eggs.", "Separate any animal with warning signs.", "Write what you saw and call your vet or animal health officer."],
          words: [["Chewing the cud", "when cattle, goats and sheep bring food back up and chew it again; a sign of good health."], ["Isolate", "keep a sick animal apart from the others."], ["Animal health officer", "a trained government or private worker who helps farmers with animal health."]],
          slides: [
            { title: "Healthy", bullets: ["Alert, walks normally, eats and drinks", "Chews the cud; bright eyes, clean nose", "Smooth coat or feathers; normal dung"] },
            { title: "Warning signs", bullets: ["Alone, head down, not eating", "Runny eyes or nose, cough, diarrhoea", "Limping, swellings, less milk or eggs"] },
            { title: "Act early", bullets: ["Check every animal daily", "Separate any sick animal", "Call your vet or animal health officer"] }
          ],
          tryIt: "Tomorrow at feeding time, check every animal with the list: alert, eating, chewing cud, eyes, nose, coat, breathing, dung. Write one line per animal (or per pen for poultry). Mark any you would watch or call the vet about.",
          youCanNow: "do a daily health check and spot the signs of a sick animal."
        },
        {
          title: "Feed and water",
          minutes: 5,
          goal: "Plan feed and clean water for your animals through the year, including the dry season.",
          text: [
            "Water comes first. Animals need clean water every day, and more in hot weather; a milking cow drinks a lot more than a dry one, and milk yield falls quickly without enough water. Keep troughs and drinkers clean and in the shade, and never let birds drink dirty, standing water.",
            "Cattle, goats and sheep need roughage (grass, fodder such as Napier grass, Rhodes grass, desmodium or lucerne, and crop residues such as maize stover and bean haulms), plus energy and protein for animals that are milking, pregnant or growing. Goats also browse shrubs and tree leaves. Give mineral licks or salt as your vet or extension officer advises. Chickens kept for eggs or meat need a balanced feed; village chickens scavenge but lay and grow better with some extra grain, greens and clean water.",
            "Plan for the dry season: grow fodder, and keep hay, silage or dried crop residues when there is plenty. Never feed mouldy feed: mould can carry aflatoxin, which harms animals and passes into milk and eggs. Change feeds slowly over several days to avoid stomach upsets."
          ],
          steps: ["Give clean water every day; more in hot weather and for milking animals.", "Clean troughs and drinkers; keep them in shade.", "Plan roughage: pasture, fodder and crop residues.", "Add energy and protein for milking, pregnant and growing animals.", "Store hay, silage or residues for the dry season.", "Throw away mouldy feed; change feeds slowly."],
          words: [["Roughage", "bulky feed such as grass, hay and crop residues."], ["Fodder", "crops grown to feed animals, such as Napier grass or lucerne."], ["Silage", "green fodder stored airtight so it keeps for months."], ["Mineral lick", "a block of salt and minerals animals lick."]],
          slides: [
            { title: "Water first", bullets: ["Clean water every day", "More in heat and for milking animals", "Clean drinkers, in the shade"] },
            { title: "Feed", bullets: ["Roughage: grass, fodder, crop residues", "Extra energy and protein for milking and growing", "Minerals as your vet advises"] },
            { title: "Plan and protect", bullets: ["Store hay, silage or residues for the dry season", "Never feed mouldy feed", "Change feeds slowly"] }
          ],
          tryIt: "List the feeds your animals get now and where each comes from. Mark which run out in the dry season and write one way to store or grow more before then. Check every drinker today and clean any that are dirty.",
          youCanNow: "plan feed and clean water for your animals through the year."
        },
        {
          title: "Housing and hygiene",
          minutes: 5,
          goal: "Check your animal housing and set three hygiene rules for your farm.",
          text: [
            "Good housing keeps animals dry, shaded, safe from thieves and predators, and not crowded. It needs fresh air without cold draughts, a dry floor that drains, and enough space for every animal to lie down, eat and drink. Crowded, damp, dirty housing spreads disease, worms and foot problems.",
            "Keep it clean: remove dung and wet bedding often (it makes good compost), clean feeders and drinkers, and control flies, rats and wild birds. For poultry, use dry litter and replace it when wet. Wash hands after handling animals, especially sick ones.",
            "Keep disease out and in: keep new animals apart from your herd or flock for a period your vet advises before mixing them, and keep sick animals in a separate pen. Some animal diseases also infect people, such as brucellosis and anthrax. If an animal dies suddenly with blood from the nose or other openings, do not open the carcass; keep people and animals away and call the vet at once. Dispose of dead animals the way your vet or animal health officer says."
          ],
          steps: ["Check housing: dry, shaded, airy, drained, not crowded.", "Remove dung and wet bedding often.", "Clean feeders and drinkers; control flies and rats.", "Keep new animals apart before mixing, as your vet advises.", "Keep a separate pen for sick animals.", "Wash hands after handling animals; call the vet about sudden deaths."],
          words: [["Litter", "dry bedding such as wood shavings on a poultry house floor."], ["Quarantine", "keeping new or sick animals apart to stop disease spreading."], ["Zoonosis", "a disease that can pass between animals and people."], ["Carcass", "the body of a dead animal."]],
          slides: [
            { title: "Good housing", bullets: ["Dry, shaded, airy, not draughty", "Floor that drains", "Space to lie, eat and drink; safe from thieves"] },
            { title: "Keep it clean", bullets: ["Remove dung and wet bedding often", "Clean feeders and drinkers", "Control flies, rats and wild birds"] },
            { title: "Keep disease out", bullets: ["New animals kept apart before mixing", "Separate pen for sick animals", "Wash hands after handling"] },
            { title: "Sudden death", bullets: ["Do not open the carcass", "Keep people and animals away", "Call the vet at once"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Walk through your animal house or pen with the checklist: dry, shaded, airy, drained, not crowded, clean drinkers. Write one thing to fix this week, and three hygiene rules for everyone who works with your animals.",
          youCanNow: "check housing and keep it clean, keep sick and new animals apart, and act safely on a sudden death."
        }
      ],
      check: {
        title: "Knowledge Check 1: Everyday care",
        questions: [
          { q: "Which is a sign of a healthy cow or goat?", options: ["Standing alone with head down", "Chewing the cud while resting", "Runny eyes and nose", "Not drinking"], answer: 1, why: "Cud-chewing shows the stomach is working normally." },
          { q: "A goat is not eating and stands apart from the herd. What do you do first?", options: ["Wait a week", "Sell it at once", "Separate it and contact your vet or animal health officer", "Give it any medicine from the shop"], answer: 2, why: "Isolating it protects the herd, and the vet can find the cause." },
          { q: "Your maize bran has gone mouldy. What should you do?", options: ["Throw it away; do not feed it", "Feed it to the chickens", "Mix it with good feed", "Feed it to milking cows only"], answer: 0, why: "Mould can carry aflatoxin, which harms animals and passes into milk and eggs." },
          { q: "How should you prepare for the dry season?", options: ["Sell all water troughs", "Feed mouldy hay", "Stop giving water", "Grow fodder and store hay, silage or crop residues"], answer: 3, why: "Stored feed carries animals through the dry season." },
          { q: "A cow dies suddenly with blood coming from its nose. What do you do?", options: ["Open it to see the cause", "Do not open it; keep people away and call the vet at once", "Sell the meat quickly", "Leave it for dogs"], answer: 1, why: "Sudden death with bleeding can be anthrax, which can infect people; the carcass must not be opened." }
        ]
      }
    },
    {
      name: "Chapter 2: Preventing and treating disease",
      lessons: [
        {
          title: "Vaccination schedules with your local vet",
          minutes: 5,
          goal: "Agree a written vaccination schedule with a registered vet and keep vaccines working.",
          text: [
            "Vaccines prevent many serious livestock diseases far more cheaply than treatment. Which vaccines your animals need, and when, depends on your country, your area and which diseases are present there. Common examples include foot-and-mouth disease, lumpy skin disease, anthrax and blackquarter in cattle; peste des petits ruminants (PPR) in goats and sheep; and Newcastle disease, Gumboro and fowl pox in poultry. Only a vet or animal health officer who knows your area can give the right schedule.",
            "Ask your vet to write a year calendar: each vaccine, for which animals, at what age, and when to repeat. Use a registered veterinarian or a trained animal health worker. In Nigeria, the Veterinary Council of Nigeria keeps the register of veterinary surgeons; in Kenya, the Kenya Veterinary Board registers vets and para-vets; in Ghana, the Veterinary Services Directorate of the Ministry of Food and Agriculture runs animal health services and vaccination campaigns. Government campaigns are sometimes free or low-cost, so watch for announcements.",
            "Vaccines are living or delicate products. Buy only from licensed agrovets, check the expiry date, keep them cool (in a cool box or fridge, out of the sun) from the shop to the animal, and use them as the label and the vet say. A vaccine that got hot may not protect your animals."
          ],
          steps: ["Ask a registered vet or animal health officer which diseases are a risk in your area.", "Get a written year calendar: vaccine, animals, age, repeat dates.", "Buy vaccines only from licensed agrovets; check expiry dates.", "Keep vaccines cool from shop to animal.", "Use them exactly as the label and the vet say.", "Record each vaccination: date, animals, vaccine, batch, who gave it."],
          words: [["Vaccine", "a product that teaches an animal's body to fight a disease before it gets sick."], ["Vaccination schedule", "a calendar of which vaccines to give, to which animals, and when."], ["Cold chain", "keeping vaccines cool all the way from the maker to the animal."], ["PPR", "peste des petits ruminants, a deadly virus disease of goats and sheep."]],
          slides: [
            { title: "Why vaccinate", bullets: ["Prevention is far cheaper than treatment", "Which vaccines depends on your area", "Only a local vet can set the schedule"] },
            { title: "Common examples", bullets: ["Cattle: foot-and-mouth, lumpy skin, anthrax, blackquarter", "Goats and sheep: PPR", "Poultry: Newcastle disease, Gumboro, fowl pox"] },
            { title: "Use registered help", bullets: ["Nigeria: Veterinary Council of Nigeria", "Kenya: Kenya Veterinary Board", "Ghana: Veterinary Services Directorate (MoFA)"] },
            { title: "Keep vaccines working", bullets: ["Licensed agrovets; check expiry", "Keep cool from shop to animal", "Follow the label and the vet"] }
          ],
          sources: [VCN],
          tryIt: "Call or visit your local vet or animal health officer and ask: which diseases should I vaccinate my animals against here, and when? Write their answer as a 12-month calendar and save the vet's number in your phone.",
          youCanNow: "get a vaccination schedule from a registered vet and keep vaccines cool and effective."
        },
        {
          title: "Poultry biosecurity and Newcastle disease",
          minutes: 5,
          goal: "Set biosecurity rules that keep Newcastle disease and other infections out of your flock.",
          text: [
            "Newcastle disease is one of the most serious poultry diseases in Africa. The World Organisation for Animal Health (WOAH) describes signs such as gasping, coughing and sneezing; nervous signs such as tremors, paralysis and twisted necks; diarrhoea; and a drop in eggs. Deaths can reach 100 percent of a flock, and almost all birds in a flock can be infected within a few days.",
            "WOAH explains it spreads through contact with sick birds and their droppings, and on contaminated feed, water, equipment and clothing. That is why biosecurity, the simple everyday steps that keep germs out, matters as much as vaccination. FAO's guidance for small-scale flocks in Kenya stresses that many of these steps cost little or nothing.",
            "Vaccinate the whole flock against Newcastle disease on the schedule your vet gives. For village chickens, FAO describes heat-tolerant vaccines (such as I-2) that can be given by eye drop; ask your animal health officer what is available. If many birds sicken or die suddenly, keep the flock shut in, tell the vet or animal health officer at once, and do not sell or move birds. WOAH advises leaving a cleaned house empty of poultry for 21 days before restocking after an outbreak."
          ],
          steps: ["Keep visitors out of the poultry house; wash hands and use a foot dip or separate shoes.", "Buy birds only from trusted, healthy sources; keep new birds apart first.", "Keep wild birds, rats and other people's poultry away from feed and water.", "Clean and disinfect drinkers, feeders and crates often.", "Vaccinate the whole flock on the vet's schedule.", "If birds sicken or die suddenly: shut the flock in, call the vet, do not sell or move birds."],
          words: [["Biosecurity", "simple everyday steps that keep germs out of a farm and stop them spreading."], ["Newcastle disease", "a fast-spreading virus disease of poultry that can kill a whole flock."], ["Foot dip", "a tray of disinfectant people step in before entering an animal house."], ["Thermostable vaccine", "a vaccine that copes better with heat, useful in villages; it still needs to be kept as cool as possible."]],
          slides: [
            { title: "Newcastle disease (WOAH)", bullets: ["Gasping, coughing, twisted necks, diarrhoea", "Egg drop; deaths up to 100 percent", "Whole flock infected within days"] },
            { title: "How it spreads", bullets: ["Sick birds and their droppings", "Contaminated feed, water, equipment, clothing", "Biosecurity stops it; much of it is free"] },
            { title: "Biosecurity rules", bullets: ["Limit visitors; wash hands; foot dip", "New birds kept apart first", "Keep wild birds and rats away; clean drinkers"] },
            { title: "Vaccinate and act fast", bullets: ["Whole flock, on the vet's schedule", "Village chickens: ask about eye-drop vaccines", "Sudden deaths: shut in, call the vet, do not sell"] }
          ],
          sources: [WOAH_ND, FAO_ND_VILLAGE, FAO_BIOSEC],
          tryIt: "Write five biosecurity rules for your poultry and post them at the poultry house door. Then ask your vet or animal health officer when your flock should next be vaccinated against Newcastle disease and add it to your calendar.",
          youCanNow: "protect a flock from Newcastle disease with biosecurity and vaccination, and act fast if birds die."
        },
        {
          title: "Parasites, records and when to call the vet",
          minutes: 6,
          goal: "Plan parasite control with your vet, keep a treatment record, and know the signs that need a vet at once.",
          text: [
            "Worms inside the gut and ticks, mites and fleas outside take blood, slow growth and spread disease; ticks spread East Coast fever in cattle in East Africa. Signs of worms include poor growth, rough coat, pot belly, diarrhoea and pale eyelids or gums. Reduce parasites with clean, dry housing, moving grazing animals to fresh pasture, and not overcrowding. Your vet can tell you when to deworm, dip or spray, and with which product. Always use the dose on the label or from the vet: too little lets worms and ticks become resistant, and too much can harm the animal.",
            "Medicines leave residues. Every drug has a withdrawal period: the time after treatment before milk, eggs or meat from that animal can be sold or eaten. FAO stresses working with your vet on a health plan and recording each treatment with its withdrawal period. Never use antibiotics to make animals grow faster or without a vet's advice.",
            "Records turn guessing into knowing. For each animal or flock, write: identity, births, vaccinations, treatments (date, product, who gave it, when the withdrawal period ends), weights or production, and deaths. A notebook works; so does a phone spreadsheet. Call the vet at once for: sudden deaths, several animals sick at the same time, an animal not eating for more than a day, difficult birth, heavy bleeding, nervous signs, or any disease your government says must be reported."
          ],
          steps: ["Ask your vet for a parasite plan: when to deworm and dip or spray, and with what.", "Use the dose on the label or from the vet, never a guess.", "Move grazing animals to fresh pasture; keep housing dry.", "Record every treatment with the date the withdrawal period ends.", "Do not sell milk, eggs or meat before the withdrawal period ends.", "Call the vet at once for sudden deaths, several sick, difficult birth or nervous signs."],
          words: [["Parasite", "a worm, tick, mite or flea that lives on or in an animal and harms it."], ["Deworming", "giving a medicine to kill worms inside an animal."], ["Withdrawal period", "the time after a treatment before milk, eggs or meat can be sold or eaten."], ["Resistance", "when worms, ticks or germs survive a medicine that used to kill them."]],
          slides: [
            { title: "Parasites", bullets: ["Worms: poor growth, pot belly, pale eyelids", "Ticks spread disease, e.g. East Coast fever", "Clean housing, fresh pasture, no crowding"] },
            { title: "Treat the right way", bullets: ["Vet's plan for deworming and dipping", "Dose from the label or vet; never guess", "Wrong doses build resistance"] },
            { title: "Withdrawal periods", bullets: ["Time before milk, eggs or meat can be sold", "Record the end date for each treatment", "No antibiotics without a vet's advice"] },
            { title: "Call the vet at once", bullets: ["Sudden deaths; several sick at once", "Not eating over a day; difficult birth", "Bleeding, nervous signs, reportable diseases"] }
          ],
          sources: [FAO_PRUDENT, WOAH_ND],
          tryIt: "Final task: write your one-page health plan. Include your daily check, feed and water plan, housing rules, the vaccination calendar from your vet, biosecurity rules, parasite plan, the records you will keep, and the signs that mean you call the vet, with the vet's name and number at the top.",
          youCanNow: "control parasites with your vet, keep treatment records with withdrawal periods, and know when to call the vet."
        }
      ],
      check: {
        title: "Knowledge Check 2: Preventing and treating disease",
        questions: [
          { q: "Who should set your animals' vaccination schedule?", options: ["A neighbour in another country", "The feed shop's poster", "A registered vet or animal health officer who knows your area", "Anyone online"], answer: 2, why: "Which vaccines are needed, and when, depends on diseases present in your area." },
          { q: "You buy a vaccine and travel home for three hours in the sun. What is the risk?", options: ["The vaccine may be damaged by heat and not protect your animals", "It becomes stronger", "No risk at all", "It becomes a dewormer"], answer: 0, why: "Vaccines must be kept cool from shop to animal." },
          { q: "Which is a sign of Newcastle disease in chickens?", options: ["Brighter combs", "More eggs", "Faster growth", "Twisted necks, gasping and sudden deaths"], answer: 3, why: "WOAH lists breathing and nervous signs, egg drop and high deaths." },
          { q: "Many of your birds die suddenly. What should you do?", options: ["Sell the rest quickly at market", "Shut the flock in, call the vet and do not move or sell birds", "Give the dead birds to neighbours", "Buy new birds the same day"], answer: 1, why: "Moving or selling birds spreads disease; the vet must find the cause." },
          { q: "What is a withdrawal period?", options: ["The time before milk, eggs or meat from a treated animal can be sold or eaten", "A holiday for farmers", "The time a vaccine lasts", "The time to dry grain"], answer: 0, why: "It keeps medicine residues out of food." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Livestock Health and Management",
    questions: [
      { q: "When is a good time for the daily health check?", options: ["Once a month", "Only when an animal dies", "At feeding or milking time", "Never; animals look after themselves"], answer: 2, why: "Animals are gathered and active at feeding or milking time." },
      { q: "A healthy hen usually has:", options: ["A pale, shrunken comb", "Ruffled feathers", "A twisted neck", "A bright red comb and is active"], answer: 3, why: "Bright combs and activity are signs of good health." },
      { q: "Which is a warning sign in a dairy cow?", options: ["A sudden drop in milk", "Chewing the cud", "Bright eyes", "Eating well"], answer: 0, why: "A sudden milk drop often means sickness." },
      { q: "What comes first in feeding animals?", options: ["Expensive supplements", "Clean water every day", "Mineral licks only", "Mouldy hay"], answer: 1, why: "Without enough clean water, health and production fall fast." },
      { q: "Napier grass and lucerne are examples of:", options: ["Vaccines", "Dewormers", "Fodder", "Litter"], answer: 2, why: "They are fodder crops grown to feed animals." },
      { q: "Why change animal feeds slowly over several days?", options: ["To avoid stomach upsets", "Because new feed is always bad", "To save water", "It does not matter"], answer: 0, why: "Sudden feed changes upset digestion." },
      { q: "Good animal housing is:", options: ["Crowded and warm", "Damp and dark", "Dry, shaded, airy and not crowded", "Open to thieves"], answer: 2, why: "Dry, airy, uncrowded housing reduces disease." },
      { q: "You buy three new goats. What should you do before mixing them with your herd?", options: ["Mix them at once", "Keep them apart for the period your vet advises", "Sell your old goats", "Give them antibiotics just in case"], answer: 1, why: "Keeping new animals apart stops them bringing in disease." },
      { q: "A zoonosis is:", options: ["A type of fodder", "A vaccine", "A disease that can pass between animals and people", "A poultry house"], answer: 2, why: "Brucellosis and anthrax are examples." },
      { q: "PPR is a serious disease of:", options: ["Goats and sheep", "Chickens", "Maize", "Fish"], answer: 0, why: "Peste des petits ruminants affects goats and sheep." },
      { q: "In Nigeria, which body keeps the register of veterinary surgeons?", options: ["The Nigerian Meteorological Agency", "The Veterinary Council of Nigeria", "The Central Bank", "A feed company"], answer: 1, why: "The VCN registers veterinary surgeons." },
      { q: "Where should you buy vaccines?", options: ["From anyone at the roadside", "Online from unknown sellers", "From a neighbour's old fridge", "From a licensed agrovet, checking the expiry date"], answer: 3, why: "Licensed sellers and in-date vaccines are more likely to work." },
      { q: "According to WOAH, Newcastle disease spreads through:", options: ["Sunlight only", "Clean water", "Vaccinated birds only", "Sick birds, droppings, and contaminated feed, water, equipment and clothing"], answer: 3, why: "Direct contact and contaminated items spread the virus." },
      { q: "Which is a low-cost biosecurity step?", options: ["Letting visitors walk through the poultry house", "Sharing crates with other farms without cleaning", "Washing hands and using a foot dip before entering", "Letting wild birds eat from the feeder"], answer: 2, why: "Simple hygiene keeps germs out." },
      { q: "For village chickens, FAO describes Newcastle vaccines that are:", options: ["Mixed into concrete", "Only for cattle", "Never needed", "Given by eye drop and more heat-tolerant"], answer: 3, why: "Thermostable vaccines such as I-2 suit village flocks." },
      { q: "After a Newcastle outbreak, WOAH advises leaving the cleaned house empty of poultry for:", options: ["1 day", "21 days", "2 hours", "It can be restocked at once"], answer: 1, why: "WOAH lists 21 days empty before restocking." },
      { q: "Which is a sign of worms in goats?", options: ["Fast growth and shiny coat", "Bright red eyelids", "Eating more than usual and gaining weight", "Poor growth, pot belly and pale eyelids"], answer: 3, why: "Worms take blood and nutrients, causing these signs." },
      { q: "How do you decide the dose of a dewormer?", options: ["Guess by eye", "Use half to save money", "Follow the label or your vet", "Use double to be sure"], answer: 2, why: "Wrong doses harm animals or build resistance." },
      { q: "A cow was treated yesterday and the withdrawal period is not over. What about her milk?", options: ["Sell it as normal", "Do not sell or drink it until the withdrawal period ends", "Mix it with other milk", "Boil it and sell it"], answer: 1, why: "Milk during the withdrawal period can carry medicine residues." },
      { q: "Which situation means you should call the vet at once?", options: ["Several animals sick at the same time", "An animal chewing the cud", "Hens laying as usual", "A calf drinking well"], answer: 0, why: "Several sick animals can mean a spreading disease." }
    ]
  }
};
