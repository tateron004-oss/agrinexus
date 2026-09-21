"use strict";

const { clean } = require("./parse.js");

// A farm knowledge library stored in the code itself: no lookup, no internet, nothing that can change under the farmer. Two kinds of guide:
// SAFETY guides (chemicals, poisoning, snakebite, animal injuries, heat, machinery, fire, water, hygiene) and PRACTICE guides (storing grain,
// rotation, composting, keeping soil and water). They are general, widely agreed advice, deliberately short and conservative, and each one
// says it is not a substitute for a health worker, vet or local rule.
//
// REVIEW NEEDED before real use: a local health authority / poison centre should approve the first-response wording for the country it is
// used in, and the agricultural extension service should approve the practice guides for the local crops and climate. The text lives here so
// a reviewer can read and change it in one place.
const EMERGENCY = "In an emergency, call your local emergency number or get to a health facility now.";
const SAFETY_NOTE = "This is general safety information, not a replacement for a health worker, a vet, the product label or your local rules.";

const GUIDES = [
  { id: "pesticide-safety", title: "Using pesticides safely", kind: "safety", keywords: ["pesticide", "spray", "spraying", "chemical", "herbicide", "fungicide", "insecticide", "agrochemical"],
    text: "Read the label before every use and follow it exactly: the right product, the right crop, the right amount. Never mix it stronger than the label says. Wear what the label asks for: gloves, long sleeves and trousers, boots, a face mask or respirator, and eye protection. Do not eat, drink or smoke while spraying, and wash your hands and face before you eat. Do not spray in strong wind or in the heat of the day, keep children and animals away, and keep chemicals away from streams, wells and ponds. Wash spraying clothes separately from the family's. Never reuse an empty chemical container for food or water; rinse it three times, pour the rinse into the spray tank, and dispose of it as your local rules say." },
  { id: "chemical-storage", title: "Storing farm chemicals", kind: "safety", keywords: ["store", "storage", "storing", "chemical", "pesticide", "fertiliser", "fertilizer", "locked"],
    text: "Keep chemicals in their original labelled containers, never in drink bottles or food containers. Store them locked away, out of reach of children and animals, in a cool, dry place away from food, animal feed, seed and water. Keep fertiliser dry and away from fuel and flames. Keep a list of what you have and check for leaks. Never store chemicals in the house where people sleep." },
  { id: "pesticide-poisoning", title: "First response: pesticide poisoning or splash", kind: "emergency", keywords: ["poison", "poisoning", "swallowed", "drank", "splash", "splashed", "pesticide", "chemical", "spray"],
    text: `${EMERGENCY} Take the container or its label with you. Move the person away from the chemical into fresh air. Take off contaminated clothing without touching it with bare hands, and wash the skin with plenty of clean water and soap for at least 15 minutes. If it is in the eyes, rinse them gently with clean running water for 15 minutes. If it was swallowed, do not make the person vomit and do not give milk, oil or anything to drink unless a health worker tells you to. Keep them calm and still; if they are drowsy, lay them on their side. Tell the health worker what the product was, how much, and when.` },
  { id: "snakebite", title: "First response: snakebite", kind: "emergency", keywords: ["snake", "snakebite", "bite", "bitten", "viper", "cobra", "puff adder", "mamba"],
    text: `${EMERGENCY} Get there as fast as you can. Move away from the snake and do not try to catch or kill it. Keep the person calm and as still as possible, because moving speeds the spread of venom. Keep the bitten arm or leg still and take off rings and tight things before it swells. Do not cut the bite, suck it, tie a tight band around it, put ice on it, or use herbs. Note the time of the bite. A health facility can give the right treatment, so travel there without delay.` },
  { id: "animal-injury", title: "First response: bites, kicks and crush injuries from animals", kind: "emergency", keywords: ["animal", "bite", "bitten", "kick", "kicked", "gored", "dog", "crush", "injury", "wound", "cow", "bull"],
    text: `For heavy bleeding, press firmly on the wound with a clean cloth and keep pressing, and call your local emergency number or get to a health facility now. Wash any bite or scratch from a dog or other animal with soap and clean water for at least 15 minutes, then go to a clinic the same day: bites can carry rabies, which is deadly unless treated early. A person who has been kicked in the head, chest or belly, or crushed, should be seen by a health worker even if they seem fine. Keep animals calm and give them room; never stand behind a cow or between a mother and her young.` },
  { id: "heat", title: "Working safely in the heat", kind: "safety", keywords: ["heat", "hot", "sun", "sunstroke", "heatstroke", "dehydration", "thirst", "shade"],
    text: `Work in the cooler early morning and evening, rest in shade, wear a hat and light clothes, and drink water often before you feel thirsty. Dizziness, a headache, cramps or feeling faint are warnings: stop, move to shade, and drink. If someone is confused, has very hot dry or very sweaty skin, or collapses, that is an emergency: cool them with water and fanning, and call your local emergency number or get help now. Animals also need shade and clean water in the heat.` },
  { id: "machinery", title: "Tractors, machines and tools", kind: "safety", keywords: ["tractor", "machine", "machinery", "engine", "pto", "blade", "panga", "machete", "tool", "chainsaw", "plough"],
    text: "Read the manual and keep every guard in place. Switch the engine off and wait for moving parts to stop before you clean, adjust or unblock anything. Do not wear loose clothing, and tie back long hair or scarves that could catch. Keep children and bystanders well away, and never carry passengers on a tractor. Do not work tired, and keep blades sharp and stored covered, because dull tools slip. Never fuel an engine while it is hot or running." },
  { id: "fire", title: "Fire on the farm", kind: "safety", keywords: ["fire", "burn", "burning", "smoke", "extinguisher", "flame"],
    text: `Keep water, sand or a fire extinguisher near where you store fuel, hay and harvested crops. Do not burn residue in wind or dry spells, and keep fuel and fertiliser away from flames. If a fire starts, get people out first, then animals if it is safe, and shout for help; call your local emergency number. Do not go back inside a burning building. Cool a small burn under clean running water for 20 minutes; do not put oil or paste on it, and get help for large or deep burns.` },
  { id: "water-hygiene", title: "Clean water and hygiene around animals", kind: "safety", keywords: ["water", "drinking", "hygiene", "wash", "milk", "manure", "anthrax", "zoonoses", "dead animal", "sick animal", "boil"],
    text: "Boil drinking water for at least a minute, or treat it as the product label says, and keep it covered. Wash your hands with soap after handling animals, manure or raw meat, and before eating. Boil milk before drinking it unless it has been pasteurised. If an animal dies suddenly or looks very sick, do not cut it open or handle it with bare hands, and tell your vet or animal health officer, because some diseases spread to people. Keep animal drinking troughs clean and away from where chemicals are mixed." },
  { id: "grain-storage", title: "Storing grain safely", kind: "practice", keywords: ["grain", "storage", "store", "maize", "beans", "mould", "mold", "aflatoxin", "weevil", "dry", "moisture", "harvest"],
    text: "Dry grain fully in the sun on a clean sheet or raised rack before storing, and never store it damp. Use a clean, dry, sealed container or a bag made for grain storage, off the floor and away from walls. Check regularly for insects, damp and a musty smell. Mouldy grain can carry toxins you cannot see or smell, so do not eat it or feed it to animals; throw it out safely. Keep storage clean between harvests and keep rats out. Your extension officer can advise on safe storage products for your crop." },
  { id: "crop-rotation", title: "Crop rotation", kind: "practice", keywords: ["rotation", "rotate", "rotating", "intercrop", "legume", "soil", "fertility", "beans", "maize"],
    text: "Growing a different kind of crop in a field each season helps the soil and cuts pest and disease build-up. A common pattern is to follow a cereal such as maize, sorghum or millet with a legume such as beans, groundnuts or cowpeas, which add nitrogen to the soil, and then a root or vegetable crop. Avoid planting the same family (for example tomatoes, potatoes, peppers) in the same place year after year. Write down what grew where; your fields list and pest journal in Kyro can help. Your extension officer can suggest a rotation for your area." },
  { id: "composting", title: "Making compost and using manure", kind: "practice", keywords: ["compost", "composting", "manure", "organic", "fertility", "soil", "heap"],
    text: "Layer dry material (dry leaves, straw, maize stalks) with green material (weeds without seeds, vegetable waste, fresh manure), keep the heap damp like a squeezed sponge, and turn it every few weeks. It is ready when it is dark, crumbly and smells earthy, often in two to four months. Leave out meat, oil, diseased plants and weeds that have gone to seed. Wash your hands after handling it and wear gloves, and keep fresh manure off leafy crops close to harvest. Well-rotted compost or manure improves soil and holds water." },
  { id: "soil-water", title: "Keeping soil and water on the land", kind: "practice", keywords: ["soil", "erosion", "water", "conservation", "mulch", "mulching", "contour", "terrace", "runoff", "drought", "rain"],
    text: "Plant along the contour (across the slope, not down it) and use grass strips or terraces to slow runoff. Keep the soil covered with crops, residues or mulch so rain does not wash it away and the ground stays cooler and holds more water. Avoid leaving bare soil after harvest, and do not till steep slopes when rain is coming. Dig planting pits or basins to catch rain in dry areas. Small changes made every season add up." }
];

const STOP = new Set(["the", "a", "an", "on", "about", "for", "of", "to", "guide", "guides", "how", "do", "i", "what", "should", "if", "someone", "somebody", "my", "is", "are", "in", "and", "with", "me", "tell", "read", "show", "safety", "safe", "first", "response", "aid", "help"]);
const words = value => clean(value).toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(" ").filter(word => word && !STOP.has(word));
function score(guide, query) {
  const wanted = words(query); if (!wanted.length) return 0;
  let total = 0;
  for (const word of wanted) { if (guide.keywords.some(keyword => keyword === word || (word.length > 3 && (keyword.startsWith(word) || word.startsWith(keyword))))) total += 2; else if (guide.title.toLowerCase().includes(word)) total += 1; }
  return total;
}
function find(query) {
  const ranked = GUIDES.map(guide => ({ guide, points: score(guide, query) })).filter(item => item.points > 0).sort((a, b) => b.points - a.points);
  return ranked.length && (ranked.length === 1 || ranked[0].points > ranked[1].points) ? { guide: ranked[0].guide } : ranked.length ? { several: ranked.slice(0, 3).map(item => item.guide) } : null;
}
const render = guide => `${guide.title}. ${guide.text} ${guide.kind === "practice" ? "General farming guidance; check what suits your local conditions with your extension officer." : SAFETY_NOTE}`;

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  let m;

  // Someone is hurt or poisoned NOW: give the first response at once, before anything else.
  if (/\b(?:swallowed|drank|drunk|ingested|splashed|sprayed in|got .{0,20} in (?:his|her|my|their) (?:eyes?|mouth))\b.{0,40}\b(?:pesticide|poison|chemical|insecticide|herbicide|weedkiller)\b/i.test(t) || /\b(?:pesticide|insecticide|herbicide|chemical|poison)\b.{0,40}\b(?:poisoning|swallowed|in (?:his|her|my|their) (?:eyes?|mouth))\b/i.test(t)) return render(GUIDES.find(guide => guide.id === "pesticide-poisoning"));
  if (/\b(?:snake|viper|cobra|puff adder|mamba)\b.{0,30}\b(?:bit|bitten|bites|biting|bite)\b/i.test(t) || /\b(?:bitten|bit) by a (?:snake|viper|cobra|puff adder|mamba)\b/i.test(t)) return render(GUIDES.find(guide => guide.id === "snakebite"));

  if (/^(?:list|show|what are|what) (?:me )?(?:the |your |all )?(?:farm |safety |farming )?(?:guides|library|guides do you have|guides are there)$/.test(lower) || /^(?:farm|safety) (?:guides|library)$/.test(lower) || /^what guides (?:do you have|are there)$/.test(lower)) {
    return `Farm guides I keep, with no internet needed — safety: ${GUIDES.filter(guide => guide.kind !== "practice").map(guide => guide.title.replace(/^First response: /, "first response: ").toLowerCase()).join("; ")}. Farming practice: ${GUIDES.filter(guide => guide.kind === "practice").map(guide => guide.title.toLowerCase()).join("; ")}. Say "read the guide on snakebite" or "guide: grain storage".`;
  }
  // "what should I do if a cow kicks someone": only answered when a guide clearly fits; otherwise it is an ordinary question for the AI.
  if ((m = /^(?:what|how) (?:should|do|can|must) (?:i|we|you) do (?:if|when|after|about|for)\s+(.+)$/i.exec(t))) {
    const found = find(m[1]);
    return found?.guide && found.guide.kind === "emergency" ? render(found.guide) : null;
  }
  if ((m = /^(?:(?:please )?(?:read|open|show|give me|tell me) (?:me )?(?:the |a )?)?(?:farm |safety )?guide (?:on|about|for|to)\s+(.+)$/i.exec(t)) || (m = /^guide\s*[:,-]\s*(.+)$/i.exec(t)) || (m = /^(?:farm )?safety\s*[:,-]\s*(.+)$/i.exec(t)) || (m = /^(?:first aid|first response) (?:for|after|if|when)\s+(.+)$/i.exec(t))) {
    const found = find(m[1]);
    if (!found) return `I don't have a guide on that. Say "list farm guides" to see what I keep, and ask your extension officer or a health worker about anything else.`;
    if (found.several) return `A few guides could fit: ${found.several.map(guide => guide.title).join("; ")}. Which one?`;
    return render(found.guide);
  }
  return null;
}

module.exports = Object.freeze({ handle, GUIDES, find, render });
