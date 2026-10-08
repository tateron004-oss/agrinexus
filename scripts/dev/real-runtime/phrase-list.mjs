// Every phrase of section 14 ("What you can say") of the capabilities list, English and Kiswahili, as data for phrases.mjs.
//
// One entry per phrase:  { id, g (group), t (what the person says), lang ("en" | "sw"), tool (the orb tool a model following the voice instructions would pick), steps (follow-ups the person says, in order),
//                          save / change / reply / ask / none / read / setup ... (what a correct answer looks like; see judge() in phrases.mjs) }
//
//   save    regex that must match a stored thing that GAINED a row (mem:, notif:, sched:, rec:, doc:, legacy:)
//   change  regex that must match any stored thing that changed (gained or lost a live row)
//   reply   regex the final reply must match
//   ask     the first answer must be a read-back that asks for a yes, and nothing may be stored until the yes
//   none    nothing may be stored (a question, a refusal, a read-back)
//   setup   not counted in the totals (it only prepares what the next phrase needs)
//   model   open-ended: a real model answers it, the stand-in model cannot (reported as MODEL, not judged)
//   net     needs the internet or a configured provider (an honest 'cannot' is the expected answer here)
//   noorb   the orb has no tool for it (the browser registers ten); route (a) is skipped and listed
const E = "nexus_everyday_records";
const list = [];
const P = (g, id, t, o = {}) => list.push({ g, id, t, lang: "en", tool: E, steps: [], ...o });
const S = (g, id, t, o = {}) => list.push({ g, id, t, lang: "sw", tool: E, steps: [], ...o });

// ---------------------------------------------------------------- 1 Talking to Kyro
const G1 = "Talking to Kyro";
P(G1, "tk-attention-1", "Kyro", { none: true });
P(G1, "tk-attention-2", "Hey Kyro", { none: true });
P(G1, "tk-attention-3", "Hey Kyro, um, please could you add eggs to my shopping list, thanks", { save: /mem:personal_items:[^:]*:live/, reply: /eggs/i });
P(G1, "tk-attention-4", "Could you please remind me in 5 minutes to stretch, thanks", { save: /notif:/, reply: /stretch/i });
S(G1, "tk-attention-sw", "Tafadhali weka sukari kwenye orodha yangu ya manunuzi, asante", { save: /mem:personal_items/, reply: /sukari/i });
P(G1, "tk-stop", "Stop", { none: true });
P(G1, "tk-cancel", "Cancel", { none: true });
P(G1, "tk-again", "Say that again", { none: true });
P(G1, "tk-yes", "Yes", { none: true });
P(G1, "tk-no", "No", { none: true });
S(G1, "tk-stop-sw", "Acha", { none: true });
S(G1, "tk-again-sw", "Sema tena", { none: true });
S(G1, "tk-yes-sw", "Ndiyo", { none: true });
S(G1, "tk-no-sw", "Hapana", { none: true });
P(G1, "tk-can", "What can you do?", { none: true, reply: /./ });
S(G1, "tk-can-sw", "Unaweza kufanya nini?", { none: true, reply: /./ });

// ---------------------------------------------------------------- 2 Lists, notes and memory
const G2 = "Lists, notes and memory";
P(G2, "ln-add-1", "Add milk to my shopping list", { save: /mem:personal_items:[^:]*:live/, reply: /milk/i });
P(G2, "ln-add-2", "Add buy seed to my to-do list", { save: /mem:personal_items:[^:]*:live/, reply: /seed/i });
P(G2, "ln-add-3", "Add milk, eggs and bread to my shopping list", { save: /mem:personal_items:[^:]*:live/, reply: /bread/i });
S(G2, "ln-add-sw-1", "Weka maziwa kwenye orodha yangu ya manunuzi", { save: /mem:personal_items/, reply: /maziwa/i });
S(G2, "ln-add-sw-2", "Weka mbegu kwenye orodha yangu", { save: /mem:personal_items/, reply: /mbegu/i });
P(G2, "ln-read", "What is on my shopping list?", { none: true, reply: /milk|bread|eggs/i });
P(G2, "ln-clear-done", "Clear my completed to-dos", { reply: /nothing finished|cleared|removed/i });
P(G2, "ln-clear-1", "Clear my shopping list", { ask: true, steps: ["yes, clear my shopping list"], change: /mem:personal_items:[^:]*:deleted/ });
S(G2, "ln-add-sw-setup", "Weka unga kwenye orodha yangu ya manunuzi", { setup: true });
S(G2, "ln-clear-sw-done", "Futa zilizokamilika", { reply: /./ });
S(G2, "ln-clear-sw", "Futa orodha yangu ya manunuzi", { ask: true, steps: ["Ndiyo, futa orodha yangu"], change: /mem:personal_items:[^:]*:deleted/ });
P(G2, "ln-note-1", "Note that the pump needs a new seal", { save: /mem:personal_items:note:live/, reply: /pump/i });
P(G2, "ln-note-2", "Remember that the vet comes Friday", { save: /mem:(personal_items|task_planning)/, reply: /vet/i });
P(G2, "ln-note-read", "What are my notes?", { none: true, reply: /pump/i });
P(G2, "ln-me-name", "My name is Amina", { save: /mem:task_planning|legacy:/, reply: /Amina/i });
P(G2, "ln-me-crop", "I grow maize in Kisumu", { save: /mem:task_planning|legacy:/, reply: /maize|Kisumu/i });
P(G2, "ln-forget-that", "Forget that", { change: /./ });
P(G2, "ln-forget-name", "Forget my name", { change: /./ });

// ---------------------------------------------------------------- 3 Contacts, texts and calls
const G3 = "Contacts, texts and calls";
P(G3, "ct-save-phone", "Save Otieno's number as plus 254 712 345 678", { save: /mem:contacts/, reply: /254 ?712 ?345 ?678/ });
P(G3, "ct-save-email", "Save Amina's email as amina@example.com", { save: /mem:contacts/, reply: /amina@example\.com/ });
P(G3, "ct-save-local", "Save John's number as 0712 345 678", { save: /mem:contacts/, reply: /254 ?712 ?345 ?678/ });
S(G3, "ct-save-sw", "Hifadhi namba ya Otieno kama +254712345678", { save: /mem:contacts/, reply: /254 ?712/ });
P(G3, "ct-text", "Text John I am late", { args: { channel: "sms" }, tool: "nexus_communications", ask: true, steps: ["no"], reply: /John/ });
P(G3, "ct-text-yes", "Text John I am late", { args: { channel: "sms" }, tool: "nexus_communications", ask: true, steps: ["yes"], note: "yes with no SMS provider: must not claim it was sent", notreply: /\b(i(?:'ve| have)? sent|has been sent|was sent to John|text sent|message sent)\b/i });
P(G3, "ct-call", "Call Mama", { args: { channel: "call" }, tool: "nexus_communications", none: true, reply: /Mama/ });
S(G3, "ct-call-sw", "Mpigie Mama", { args: { channel: "call" }, tool: "nexus_communications", none: true, reply: /Mama/ });
P(G3, "ct-connect", "Connect me to plus 254 712 345 678", { args: { channel: "call" }, tool: "nexus_communications", ask: true, steps: ["no"] });
P(G3, "ct-connect-listen", "Connect me to +254712345678 and listen", { args: { channel: "call", mode: "connect_and_listen" }, tool: "nexus_communications", ask: true, steps: ["no"] });

// ---------------------------------------------------------------- 4 Reminders, brief and weather
const G4 = "Reminders, brief and weather";
P(G4, "rm-set-1", "Remind me in 20 minutes to check the oven", { save: /notif:/, reply: /oven/i });
P(G4, "rm-set-2", "Remind me tomorrow at 9 to pay the school fees", { steps: ["9 am"], save: /notif:/, reply: /school fees|9/i });
P(G4, "rm-set-3", "Remind me every day at 8am and 8pm to take my tablets", { save: /sched:reminder\.repeat/, reply: /tablets/i });
S(G4, "rm-set-sw-1", "Nikumbushe baada ya nusu saa", { none: true, note: "no task named: should ask what to remind about" });
S(G4, "rm-set-sw-2", "Nikumbushe kesho saa tatu asubuhi", { none: true, note: "no task named: should ask what to remind about" });
S(G4, "rm-set-sw-3", "Nikumbushe baada ya nusu saa kuangalia jiko", { save: /notif:/, note: "same with a task" });
P(G4, "rm-list", "What reminders do I have?", { none: true, reply: /oven|school fees|reminder/i });
P(G4, "rm-list-repeat", "Show my repeating reminders", { none: true, reply: /tablets|repeating/i });
P(G4, "rm-stop-repeat", "Stop repeating reminder", { change: /sched:/ });
P(G4, "rm-cancel", "Cancel the reminder about the school fees", { tsteps: ["yes"], change: /notif:/ });
P(G4, "wx-kisumu", "What is the weather in Kisumu?", { tool: "nexus_weather", none: true, net: true });
P(G4, "wx-rain", "Will it rain tomorrow?", { tool: "nexus_weather", none: true, net: true });
S(G4, "wx-sw", "Hali ya hewa Kisumu ikoje?", { tool: "nexus_weather", none: true, net: true });
P(G4, "br-morning", "Send me a morning brief at 7am", { save: /sched:|legacy:|notif:/ });
P(G4, "br-weekly", "Send me a weekly summary on Sunday at 6pm", { save: /sched:|legacy:|notif:/ });
P(G4, "br-storm", "Warn me about storms and heavy rain", { save: /sched:|legacy:|notif:|mem:/ });
P(G4, "br-stop-morning", "Stop my morning brief", { change: /./ });
P(G4, "br-stop-weekly", "Stop my weekly summary", { change: /./ });
P(G4, "br-stop-alerts", "Stop weather alerts", { change: /./ });

// ---------------------------------------------------------------- 5 Money, shop and credit
const G5 = "Money, shop and credit";
P(G5, "mo-sold", "Sold 3 sacks of maize 4500", { save: /mem:farm_records:money:live/, reply: /4,?500/ });
P(G5, "mo-bought", "Bought stock 12000", { save: /mem:farm_records:money:live/, reply: /12,?000/ });
P(G5, "mo-spent", "Spent 5000 on fertilizer", { save: /mem:farm_records:money:live/, reply: /5,?000/ });
P(G5, "mo-grand", "Sold eggs for two grand", { save: /mem:farm_records:money:live/, reply: /2,?000/ });
P(G5, "mo-2k", "Sold beans 2k", { save: /mem:farm_records:money:live/, reply: /2,?000/ });
P(G5, "mo-unclear", "Sold some maize", { steps: ["3000"], note: "unclear amount: asks, then just the number", reply: /3,?000/, save: /mem:farm_records:money:live/ });
S(G5, "mo-sold-sw", "Nimeuza mahindi elfu nne", { save: /mem:farm_records:money:live/, reply: /4,?000/ });
S(G5, "mo-spent-sw", "Nimetumia 5000 kwa mbolea", { save: /mem:farm_records:money:live/, reply: /5,?000/ });
S(G5, "mo-sugar-sw", "Nimeuza sukari kilo mbili 400", { save: /mem:farm_records:money:live/, reply: /400/ });
P(G5, "cr-owes", "John owes me 800", { save: /mem:farm_records:money:live/, reply: /John/ });
P(G5, "cr-paid", "John paid 500", { change: /mem:farm_records:money/, reply: /500/ });
P(G5, "cr-who", "Who owes me?", { none: true, reply: /John/ });
S(G5, "cr-sold-sw", "Nimeuza unga 600", { setup: true });
S(G5, "cr-credit-sw", "Kwa mkopo", { change: /mem:farm_records:money/, note: "follow-up: the sale just made was on credit" });
S(G5, "cr-credit-sw-2", "Nimeuza unga 700 kwa mkopo kwa Mary", { save: /mem:farm_records:money:live/, reply: /Mary/ });
P(G5, "st-have", "I have 20 bags of flour", { save: /mem:farm_records:stock:live/, reply: /flour/i });
P(G5, "st-low-q", "What is running low?", { none: true });
P(G5, "st-low", "Stock of flour is low", { change: /mem:farm_records:stock|legacy:/ });
P(G5, "st-add", "Add 50 kg of maize seed to inventory", { save: /mem:farm_records:stock:live/, reply: /seed/i });
S(G5, "st-low-sw", "Unga unakwisha", { change: /mem:farm_records:stock|legacy:/ });
S(G5, "st-add-sw", "Ongeza mbolea gunia 2 kwenye ghala", { save: /mem:farm_records:stock:live/, reply: /mbolea/i });
P(G5, "un-undo", "Undo", { change: /mem:farm_records:money:(live|deleted)/ });
P(G5, "un-delete", "Delete the last entry", { change: /mem:farm_records/ });
P(G5, "un-oops", "Sold 2 bags of beans 3000", { setup: true });
P(G5, "un-oops-2", "Oops, that was 3500", { change: /mem:farm_records:money/, reply: /3,?500/ });
S(G5, "un-delete-sw", "Futa rekodi ya mwisho", { change: /mem:farm_records/ });
P(G5, "su-today", "What are today's sales?", { none: true, reply: /KSh|\d/ });
P(G5, "su-spend", "What did I spend this month?", { none: true, reply: /KSh|\d/ });
P(G5, "su-summary", "My summary for this month", { none: true, reply: /KSh|\d/ });

// ---------------------------------------------------------------- 6 Farm
const G6 = "Farm";
P(G6, "fm-cow", "My cow gave 18 litres", { alt: ["nexus_agriculture"], save: /mem:farm_(records|log)/, reply: /18/ });
P(G6, "fm-hens", "The hens laid 42 eggs", { alt: ["nexus_agriculture"], save: /mem:farm_(records|log)/, reply: /42/ });
P(G6, "fm-vacc", "Vaccinated the goats", { alt: ["nexus_agriculture"], save: /mem:farm_(records|log)/, reply: /goat/i });
P(G6, "fm-plant", "Planted 2 acres of maize", { alt: ["nexus_agriculture"], save: /mem:farm_(records|log)/, reply: /maize/i });
P(G6, "fm-rain", "Log 12 mm of rain", { alt: ["nexus_agriculture"], save: /mem:farm_(records|log)/, reply: /12/ });
S(G6, "fm-plant-sw", "Nimepanda mahindi shamba Kaskazini tarehe 5 Oktoba", { alt: ["nexus_agriculture"], save: /mem:farm_(records|log)/, reply: /mahindi/i });
P(G6, "fa-setup", "Set up my farm", { wizard: true, reply: /./ });
P(G6, "fa-field", "Add a field called North Plot", { alt: ["nexus_agriculture"], wizard: true, save: /mem:farm_records:fields?/, reply: /North Plot/i });
P(G6, "fa-calendar", "Make a crop calendar for North Plot", { tool: "nexus_agriculture", reply: /./ });
P(G6, "fa-cow", "Add a cow called Bella", { alt: ["nexus_agriculture"], wizard: true, save: /mem:farm_records:(animals?|livestock)/, reply: /Bella/ });
P(G6, "fa-calf", "Add a calf", { alt: ["nexus_agriculture"], wizard: true, save: /mem:farm_records:(animals?|livestock)/, reply: /calf/i });
S(G6, "fa-field-sw", "Ongeza shamba linaloitwa Kaskazini, ekari 2, mahindi", { alt: ["nexus_agriculture"], wizard: true, dup: /Tayari|already/i, save: /mem:farm_records:fields?/, reply: /Kaskazini/i });
S(G6, "fa-cow-sw", "Ongeza ng'ombe anayeitwa Bella, jike", { alt: ["nexus_agriculture"], wizard: true, dup: /Tayari|already/i, save: /mem:farm_records:(animals?|livestock)/, reply: /Bella/ });
P(G6, "pg-pest", "Log pest: armyworm in the maize", { tool: "nexus_agriculture", save: /mem:farm_(records|log)/, reply: /armyworm/i });
P(G6, "pg-update", "Update problem 2: sprayed neem", { tool: "nexus_agriculture", change: /./ });
P(G6, "pg-guides", "List farm guides", { none: true, reply: /./ });
P(G6, "pg-snake", "Read the guide on snakebite", { none: true, reply: /snake/i });
S(G6, "pg-pest-sw", "Andika tatizo: viwavi jeshi kwenye mahindi", { tool: "nexus_agriculture", save: /mem:farm_(records|log)/, reply: /viwavi/i });
S(G6, "pg-snake-sw", "Soma mwongozo wa kuumwa na nyoka", { none: true, reply: /nyoka/i });
S(G6, "pg-guides-sw", "Orodhesha miongozo ya shamba", { none: true, reply: /./ });
P(G6, "wb-worker", "Add a worker Juma", { wizard: true, save: /mem:farm_records:workers?/, reply: /Juma/ });
P(G6, "wb-assign", "Assign Juma weeding North Plot by Friday", { change: /./, reply: /Juma/ });
P(G6, "wb-buyer", "Add a buyer Amina", { wizard: true, save: /mem:farm_records:(buyers?|party)/, reply: /Amina/ });
P(G6, "wb-post", "Post for sale: 500 kg maize at 40 per kg", { tool: "nexus_marketplace_logistics", reply: /Posted|need your yes|Say yes/i });
P(G6, "wb-remove", "Remove listing 3", { tool: "nexus_marketplace_logistics", reply: /listing|need your yes|Say yes|can.t find/i });
S(G6, "wb-worker-sw", "Ongeza mfanyakazi Juma", { wizard: true, dup: /Tayari|already/i, save: /mem:farm_records:workers?/, reply: /Juma/ });
S(G6, "wb-post-sw", "Weka tangazo: ninauza kilo 500 za mahindi kwa shilingi 40 kwa kilo", { tool: "nexus_marketplace_logistics", reply: /Nimetangaza|need your yes|Say yes|ndiyo/i });
P(G6, "co-setup", "Set up our cooperative called Umoja Farmers", { wizard: true, save: /mem:|legacy:|rec:/, reply: /Umoja/ });
P(G6, "co-member", "Add cooperative member Amina", { wizard: true, save: /mem:|legacy:|rec:/, reply: /Amina/ });
P(G6, "co-dues", "Amina paid dues 500", { save: /mem:|legacy:|rec:/, reply: /500/ });
P(G6, "co-who", "Who hasn't paid dues?", { none: true, reply: /./ });
P(G6, "co-book", "Book the tractor for Amina on Friday", { save: /mem:|legacy:|rec:/, reply: /tractor/i });
S(G6, "co-member-sw", "Ongeza mwanachama Amina", { wizard: true, dup: /Tayari|already/i, save: /mem:|legacy:|rec:/, reply: /Amina/ });
S(G6, "co-who-sw", "Nani hajalipa ada?", { none: true, reply: /./ });

// ---------------------------------------------------------------- 7 Health and safety
const G7 = "Health and safety";
const H = "nexus_health_preparation";
P(G7, "hs-bp", "My blood pressure is 140 over 90", { tool: H, ask: true, steps: ["yes"], save: /legacy:.*ChronicDisease|rec:health/, reply: /140 over 90/ });
P(G7, "hs-sugar", "My blood sugar is 7.2", { tool: H, ask: true, steps: ["yes"], save: /legacy:.*ChronicDisease|rec:health/, reply: /7\.2/ });
S(G7, "hs-bp-sw", "Shinikizo la damu ni 140 juu ya 90", { tool: H, ask: true, steps: ["ndiyo"], save: /legacy:.*ChronicDisease|rec:health/, reply: /140/ });
P(G7, "hs-show", "Show my readings", { tool: H, none: true, reply: /140|7\.2/ });
P(G7, "hs-show-bp", "Show my blood pressure readings", { tool: H, none: true, reply: /140/ });
P(G7, "hs-delete", "Delete my last reading", { tool: H, ask: true, steps: ["yes"] });
P(G7, "hs-who", "Who can see my readings?", { tool: H, none: true, reply: /./ });
S(G7, "hs-delete-sw", "Futa kipimo cha mwisho", { tool: H, ask: true, steps: ["ndiyo"] });
P(G7, "md-add", "Add medication metformin 500mg at 8am and 8pm", { alt: [H], save: /mem:|legacy:|rec:|sched:|notif:/, reply: /metformin/i });
P(G7, "md-took", "I took my metformin", { alt: [H], change: /./, reply: /metformin/i });
P(G7, "md-missed", "I missed my metformin", { alt: [H], change: /./, reply: /metformin/i });
P(G7, "ci-every", "Check in on me every morning at 8", { save: /mem:|legacy:|rec:|sched:|notif:/ });
P(G7, "ci-okay", "I'm okay", { reply: /./ });
P(G7, "ci-circle", "Add amina@example.com to my circle", { reply: /amina@example\.com/ });
P(G7, "ci-share", "Share my check-ins with Amina", { reply: /./ });
P(G7, "ci-stop", "Stop my check-ins", { change: /./ });
S(G7, "ci-circle-sw", "Ongeza jina@mfano.com kwenye mzunguko wangu", { reply: /jina@mfano\.com/ });
S(G7, "ci-accept-sw", "Kubali mwaliko kutoka kwa Amina", { reply: /./ });
P(G7, "gh-help", "I need help", { reply: /./ });
P(G7, "gh-alert", "Alert my circle", { reply: /./ });
P(G7, "gh-safe", "I'm safe", { reply: /./ });
P(G7, "gh-fitting", "My child is fitting", { urgent: true, alt: [E], tool: H, reply: /(999|112|emergency|urgent|hospital)/i });
P(G7, "gh-chest", "I have chest pain", { urgent: true, alt: [E], tool: H, reply: /(999|112|emergency|urgent|hospital)/i });
P(G7, "gh-bleeding", "She has heavy bleeding", { urgent: true, alt: [E], tool: H, reply: /(999|112|emergency|urgent|hospital)/i });
P(G7, "gh-number", "What is the emergency number in Kenya?", { none: true, reply: /999|112/, notreply: /911/ });
S(G7, "gh-help-sw", "Nahitaji msaada", { reply: /./ });
P(G7, "cl-clinic", "Find a clinic near Kisumu", { tool: H, none: true, net: true, reply: /clinic|facility|hospital|health cent|dispensar|couldn.t|can.t|not (?:set up|available|connected)/i });
P(G7, "cl-pharmacy", "Find a pharmacy near me", { tool: H, none: true, net: true, reply: /pharmac|chemist|couldn.t|can.t|not (?:set up|available|connected)|origin|location/i });
P(G7, "cl-intake", "Save a telehealth intake: my back has hurt for a week", { tool: H, reply: /./ });

// ---------------------------------------------------------------- 8 Fitness and wellbeing
const G8 = "Fitness and wellbeing";
P(G8, "fw-run", "I ran 5 km in 30 minutes", { tool: H, change: /./, reply: /5/ });
P(G8, "fw-sleep", "I slept 7 hours", { tool: H, change: /./, reply: /7/ });
P(G8, "fw-weight", "My weight is 68 kilos", { tool: H, reply: /68/ });
P(G8, "fw-water", "I drank 2 litres of water", { tool: H, change: /./, reply: /2/ });
P(G8, "fw-goal", "My goal is 4 workouts a week", { tool: H, change: /./, reply: /4/ });
P(G8, "fw-count", "How many workouts this week?", { tool: H, none: true, reply: /./ });
P(G8, "fw-sleepwk", "How did I sleep this week?", { tool: H, none: true, reply: /./ });
P(G8, "fw-log", "Show my training log", { tool: H, none: true, reply: /./ });
P(G8, "fw-undo", "Undo my last workout", { tool: H, change: /./ });

// ---------------------------------------------------------------- 9 Work and learning
const G9 = "Work and learning";
const W = "nexus_workforce_learning";
P(G9, "wl-cv", "Build my CV", { end: "stop", tool: W, reply: /./ });
P(G9, "wl-jobs", "Find jobs near Kisumu", { tool: W, none: true, reply: /./ });
P(G9, "wl-match", "Match me to a role", { tool: W, reply: /./ });
S(G9, "wl-match-sw", "Nilinganishe na nafasi", { tool: W, reply: /./ });
P(G9, "wl-letters", "Teach me letters", { end: "stop", tool: W, reply: /./ });
P(G9, "wl-counting", "Teach me counting", { end: "stop", tool: W, reply: /./ });
P(G9, "wl-adding", "Teach me adding", { end: "stop", tool: W, reply: /./ });
P(G9, "wl-interview", "Give me a practice interview", { end: "stop", tool: W, reply: /./ });
P(G9, "wl-course", "Continue my course", { end: "stop", tool: W, reply: /./ });
S(G9, "wl-course-sw", "Endelea na kozi yangu", { end: "stop", tool: W, reply: /./ });

// ---------------------------------------------------------------- 10 Music and video
const G10 = "Music and video";
const M = { noorb: true, none: true, net: true, reply: /play|music|radio|station|song|track|video|youtube|stream|volume|pause|resum|mute|stop|next|previous|nothing is playing|rendering the verified|cheza|muziki|wimbo|redio|sauti|sitisha|endelea|samahani|couldn.t|can.t|not (?:connected|available|set up)/i };
P(G10, "mu-play-1", "Play Burna Boy Last Last", M);
P(G10, "mu-play-2", "Play radio Citizen", M);
P(G10, "mu-play-3", "Play some music", M);
P(G10, "mu-play-4", "Open YouTube and play Last Last", M);
P(G10, "mu-play-5", "Watch drip irrigation on YouTube", M);
S(G10, "mu-play-sw-1", "Cheza Sauti Sol Melanin", M);
S(G10, "mu-play-sw-2", "Weka redio Citizen", M);
S(G10, "mu-play-sw-3", "Fungua YouTube na cheza Last Last", M);
for (const [id, t] of [["pause", "Pause"], ["resume", "Resume"], ["next", "Next song"], ["prev", "Previous song"], ["volup", "Volume up"], ["voldown", "Volume down"], ["mute", "Mute"], ["stop", "Stop the music"]]) P(G10, `mc-${id}`, t, M);
for (const [id, t] of [["pause", "Sitisha"], ["resume", "Endelea"], ["next", "Wimbo unaofuata"], ["volup", "Ongeza sauti"]]) S(G10, `mc-${id}-sw`, t, M);
P(G10, "mp-yt", "Play music in YouTube from now on", { change: /./ });
P(G10, "mp-kyro", "Play music in Kyro always", { change: /./ });
S(G10, "mp-yt-sw", "Cheza muziki kwenye YouTube kuanzia sasa", { change: /./ });

// ---------------------------------------------------------------- 11 Business, nonprofit and community
const G11 = "Business, nonprofit and community";
P(G11, "bz-donor", "Add a donor named Grace Otieno", { tsteps: ["yes"], save: /mem:|rec:|legacy:/, reply: /Grace|workspace/i });
P(G11, "bz-donors", "Who are my donors?", { none: true, reply: /Grace|workspace/i });
P(G11, "bz-owes", "Who owes me money?", { none: true, reply: /./ });
P(G11, "bz-invoice", "Create an invoice for Grace Otieno", { tsteps: ["yes"], save: /mem:|rec:|legacy:|doc:/, reply: /invoice/i });
P(G11, "bz-paid", "Mark invoice INV-1001 as paid", { tsteps: ["yes"], reply: /./ });
P(G11, "bz-grants", "What grants are we tracking?", { none: true, reply: /./ });
P(G11, "bz-follow", "Set a follow-up with Grace next Tuesday", { tsteps: ["yes"], save: /mem:|rec:|legacy:|notif:|sched:/, reply: /Grace/ });
P(G11, "rs-report", "Report: the borehole in ward 3 is broken", { save: /mem:|rec:|legacy:/, reply: /./ });
P(G11, "rs-status", "What is the status of my reports?", { none: true, reply: /borehole|report/i });
P(G11, "rs-new", "What's new from the community?", { none: true, reply: /./ });
P(G11, "rs-stop", "Stop community announcements", { change: /./ });
P(G11, "sf-open", "Show open reports", { staff: true, none: true, reply: /./ });
P(G11, "sf-close", "Close report 12: pump repaired", { staff: true, reply: /./ });
P(G11, "sf-test", "Announce test: Water will be off on Friday", { staff: true, reply: /./ });
P(G11, "sf-announce", "Announce: Water will be off on Friday", { staff: true, reply: /./ });
P(G11, "sf-confirm", "Confirm announcement", { staff: true, reply: /./ });

// ---------------------------------------------------------------- 12 Health workers
const G12 = "Health workers";
P(G12, "hw-register", "Register patient Mary Akinyi, 34, female, Kibera", { alt: [H], wizard: true, save: /mem:|rec:|legacy:/, reply: /Mary/ });
P(G12, "hw-visit", "Visit Mary: temperature 38.5, cough", { alt: [H], save: /mem:|rec:|legacy:/, reply: /Mary/ });
P(G12, "hw-follow", "Follow up Mary on Friday", { alt: [H], save: /mem:|rec:|legacy:|sched:|notif:/, reply: /Mary/ });
P(G12, "hw-follow-done", "Follow-up 3 done", { alt: [H], reply: /./ });
S(G12, "hw-visit-sw", "Ziara ya Mary: homa, kikohozi", { alt: [H], save: /mem:|rec:|legacy:/, reply: /Mary/ });
P(G12, "hw-preg", "Mary is pregnant, due 12 March", { alt: [H], save: /mem:|rec:|legacy:/, reply: /Mary/ });
P(G12, "hw-anc", "Antenatal visit Mary: blood pressure fine, baby moving", { alt: [H], save: /mem:|rec:|legacy:/, reply: /Mary/ });
P(G12, "hw-referral", "Referral letter for Mary", { alt: [H], reply: /referral|handoff|summary|letter/i });
P(G12, "hw-supply", "Add 100 tablets of paracetamol to clinic stock", { alt: [H], save: /mem:|rec:|legacy:/, reply: /paracetamol/i });
P(G12, "hw-warn", "Warn me when paracetamol drops below 50", { alt: [H], save: /mem:|rec:|legacy:|sched:/, reply: /paracetamol/i });
S(G12, "hw-preg-sw", "Mary ni mjamzito, atajifungua tarehe 12 Machi", { alt: [H], save: /mem:|rec:|legacy:/, reply: /Mary/ });
S(G12, "hw-warn-sw", "Niarifu paracetamol ikishuka chini ya 50", { alt: [H], save: /mem:|rec:|legacy:|sched:/, reply: /paracetamol/i });

// ---------------------------------------------------------------- 13 Information and documents
const G13 = "Information and documents";
const L = "nexus_live_knowledge";
P(G13, "in-price", "What is the maize price in Nakuru this week?", { tool: L, none: true, net: true });
P(G13, "in-search", "Search the web for drip irrigation", { tool: L, none: true, net: true });
P(G13, "in-picture", "Find a picture of a maize armyworm", { tool: L, none: true, net: true });
P(G13, "in-route", "Route from Kisumu to Nakuru", { tool: "nexus_maps_route", none: true, net: true });
P(G13, "in-time", "What time is it?", { none: true, reply: /\d/ });
P(G13, "dc-create", "Create a document for my farm budget", { reply: /./ });
P(G13, "dc-export", "Export it as a PDF", { reply: /./ });
P(G13, "dc-translate", "Translate this to Kiswahili", { reply: /./ });

export const PHRASES = list;
export const GROUPS = [...new Set(list.map(item => item.g))];
