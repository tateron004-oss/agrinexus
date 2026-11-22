"use strict";

// Koach Learn course (Igbo translation of shared/python-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Ajụjụ a na-ajụkarị", url: "https://research.google.com/colaboratory/faq.html" };

module.exports = {
  id: "python-basics-ig",
  lang: "ig",
  translationOf: "python-basics",
  category: "Youth",
  name: "Mmalite Mmemme Kọmputa na Python",
  skills: "Ịgba Python na Google Colab, Iji variable na input, Ime mkpebi na if, Iji list na loop, Ide function",
  outcome: "ide ma gbaa obere mmemme Python na Google Colab nke na-ajụ onye ọrụ ozi, na-echekwa ya, na-eji ya eme mkpebi, na-emeghachi nzọụkwụ site na loop, ma na-egosipụta azịza doro anya.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla na-edebeghị koodu mgbe ọ bụla: ụmụ akwụkwọ, ndị agha mbụ (veterans) na-abanye n'ọrụ ọhụrụ, na ndị okenye na-achọ ọrụ teknụzụ. Naanị ihe ị chọrọ bụ akaụntụ Google n'efu na web browser.",
    "Ị ga-ede ezi Python na Google Colab, weebụsaịtị n'efu na-agba koodu maka gị, ya mere ọ dịghị ihe ị ga-awụnye. Nkuzi ọ bụla na-agbakwunye otu ngwa ọhụrụ: print, variable, mkpebi, list, loop na function.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ ya, lee slaịdị, wee dee koodu ahụ n'onwe gị na \"Nwalee ya ugbu a\". Na njedebe, ị ga-ewu obere ihe na-elele mmefu ego ịzụ ahịa site na mbido. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Na Google Colab, dee ihe na-elele mmefu ego ịzụ ahịa: function na-anara list ọnụahịa na budget, na-agbakọ ọnụahịa ndị ahụ site na loop, ma na-egosipụta ngụkọta na ma ọ bụ \"Under budget\" ma ọ bụ \"Over budget\" ya na ọdịiche ya. Jiri input() jụọ onye ọrụ budget ya, kpọọ function gị, ma nwalee ya na budget abụọ dị iche iche.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa na ndị okenye na-anwa ide mmemme kọmputa nke mbụ: ụmụ akwụkwọ sekọndrị na mahadum, ndị otu mmemme ntorobịa, ndị na-agbanwe ọrụ na ndị na-amụ ọrụ chọrọ ịmata maka koodu, data ma ọ bụ AI.",
    startingPoint: "Ha nwere ike iji kọmputa na web browser ma banye n'akaụntụ Google. Ọtụtụ edebeghị koodu mgbe ọ bụla, ha amaghịkwa ihe variable, condition, list, loop ma ọ bụ function bụ.",
    gap: "Ide mmemme kọmputa bụ mmalite maka ọrụ na teknụzụ, data na AI, ọ bụkwa ngwa bara uru n'ọtụtụ ọrụ ndị ọzọ. Ndị na-edebeghị mmemme na-arụ ọrụ na-echekarị na koodu abụghị maka ha; mmemme mbụ na-edozi ezi nsogbu na-ewulite nka na obi ike ịga n'ihu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu mmemme ọ bụla site n'ọmụmaatụ",
      "Ngwaọrụ: kọmputa ma ọ bụ laptop nwere web browser kacha mma; tablet nwere ike ịrụ ọrụ mana ide koodu na ya siri ike karị",
      "Akaụntụ na ụgwọ: akaụntụ Google n'efu maka Google Colab; ọ dịghị ihe ị ga-awụnye ma ọ bụ zụta",
      "Oge: ihe dị ka nkeji 5 ruo 6 kwa nkuzi gbakwunyere omume, ihe dị ka nkeji 60 ruo 75 n'ozuzu",
      "Mgbakọ: naanị ịgbakọ, ịtụnyere na ọnụọgụ ntụpọ (decimal) dị mfe"
    ],
    prerequisites: "Ọ dịghị. \"Nka Mbụ nke Kọmputa\" na-enyere ndị na-amalite ide ihe na iji browser aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji Google Colab na web browser", action: "imeghe notebook, ide ma gbaa ahịrị print, na ịgụ ahịrị ikpeazụ nke ozi error", standard: "ebe mmemme ahụ na-agba ma e jiri ozi error dozie mperi ide ihe ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị ozi mmemme chọrọ", action: "ichekwa ya na variable nke ụdị ziri ezi, inweta input site n'aka onye ọrụ ma gosipụta ya site na f-string", standard: "na-agbanwe input ka ọ bụrụ ọnụọgụ site na float() ma ọ bụ int() tupu ime mgbakọ" },
    { id: "O3", condition: "Mgbe e nyere gị iwu nwere ihe abụọ ma ọ bụ karịa nwere ike isi na ya pụta", action: "ide ngọngọ if, elif na else na-ahọrọ ihe ziri ezi", standard: "nwere akara ntụnyere, colon na indentation ziri ezi, na-enye azịza ziri ezi maka uru nnwale ọ bụla" },
    { id: "O4", condition: "Mgbe e nyere gị ọtụtụ uru", action: "ịmepụta list, ịgbakwunye otu ihe ma gụọ ihe site na index, na iji len() na sum() na ya", standard: "ebe index na azịza ọ bụla ziri ezi" },
    { id: "O5", condition: "Mgbe e nyere gị list ma ọ bụ ọrụ a ga-emeghachi", action: "ide for loop nwere ngụkọta na-aga n'ihu na while loop na-akwụsị", standard: "ebe ngụkọta ziri ezi ma ọ dịghị loop na-agba ruo mgbe ebighị ebi" },
    { id: "O6", condition: "Mgbe e nyere gị obere nsogbu dị ka ilele budget", action: "ide function nwere parameter na uru return, kpọọ ya na mmemme zuru ezu ma nwalee ya", standard: "ebe mmemme ahụ na-enye azịza ziri ezi maka opekata mpe input abụọ dị iche iche" }
  ],
  chapters: [
    {
      name: "Isi 1: Mmemme mbụ gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Imeghe Google Colab na ịgba ahịrị mbụ gị",
          minutes: 5,
          goal: "Meghee notebook Colab, dee otu ahịrị Python ma gbaa ya.",
          text: [
            "Mmemme (program) bụ ndepụta ntuziaka kọmputa na-agbaso n'usoro. Python bụ asụsụ mmemme: ụzọ isi dee ntuziaka ndị ahụ nke mmadụ nwere ike ịgụ. A na-eji ya maka weebụsaịtị, data, egwuregwu, robot na AI.",
            "Google Colab bụ weebụsaịtị n'efu na-agba Python na browser gị. Ọ dịghị ihe ị ga-awụnye. A na-echekwa ọrụ gị dị ka notebook na Google Drive gị. Notebook nwere cell: igbe ebe ị na-ede koodu ma gbaa ya.",
            "Ntuziaka mbụ gị bụ print. print(\"Hello, world!\") na-egosi okwu dị n'ime akara ntinye okwu (quotes). Quotes ahụ na-agwa Python na nke a bụ ederede, ọ bụghị iwu. Ọ bụrụ na i mehie ide ihe, Python ga-egosi ozi error. Gụọ ahịrị ikpeazụ ya: ọ na-agwa gị ihe mebiri."
          ],
          steps: ["Gaa na colab.research.google.com ma banye site n'akaụntụ Google.", "Họrọ ịmepụta notebook ọhụrụ.", "Pịa n'ime cell koodu mbụ ma dee: print(\"Hello, world!\")", "Pịa bọtịnụ play dị n'akụkụ cell ahụ, ma ọ bụ Shift + Enter, iji gbaa ya.", "Gụọ ihe pụtara n'okpuru cell ahụ."],
          words: [["Mmemme (program)", "ndepụta ntuziaka kọmputa na-agbaso n'usoro."], ["Python", "asụsụ mmemme a ma ama nke dị mfe ịgụ."], ["Notebook", "faịlụ Colab nwere cell ebe ị na-ede ma gbaa koodu."], ["Cell", "otu igbe na notebook nwere koodu ị nwere ike ịgba."], ["Ozi error", "ihe Python na-egosi na ihe adịghị mma na koodu gị; ahịrị ikpeazụ na-ekwu ihe ọ bụ."]],
          slides: [
            { title: "Ihe Python bụ", bullets: ["Asụsụ e ji ede ntuziaka nye kọmputa", "A na-eji ya maka weebụsaịtị, data, egwuregwu na AI", "Ọ dị mfe ịgụ ma e jiri ya tụnyere ọtụtụ asụsụ"] },
            { title: "Google Colab", bullets: ["Weebụsaịtị n'efu na-agba Python na browser gị", "Ọ dịghị ihe ị ga-awụnye", "Notebook na-echekwa na Google Drive gị"] },
            { title: "Ahịrị mbụ gị", bullets: ["Dee: print(\"Hello, world!\")", "Gbaa ya site na bọtịnụ play ma ọ bụ Shift + Enter", "Okwu ndị ahụ ga-apụta n'okpuru cell ahụ"] },
            { title: "Error bụ ihe nkịtị", bullets: ["Gụọ ahịrị ikpeazụ nke error ahụ", "Lelee nsụpe, quotes na brackets", "Dozie ya ma gbaa ya ọzọ"] }
          ],
          sources: [COLAB],
          tryIt: "Meghee notebook Colab ọhụrụ. N'otu cell, print aha mbụ gị. Na cell nke abụọ, print otu ahịrịokwu banyere nri kacha amasị gị. Wee wepụ otu akara quote n'ebumnuche, gbaa ya, ma gụọ error ahụ. Tinyeghachi quote ahụ ma gbaa ya ọzọ.",
          youCanNow: "imeghe Google Colab, ide ahịrị print, ịgba ya, na ịgụ ozi error.",
          quickCheck: [
            { objective: "O1", q: "Na notebook Colab, gịnị bụ cell?", options: ["Folda Google Drive", "Igbe ebe ị na-ede koodu ma gbaa ya", "Ozi error", "Ụdị ọnụọgụ"], answer: 1, why: "Notebook nwere cell ebe ị na-ede ma gbaa koodu." },
            { objective: "O1", q: "I dere prnt(\"Hi\") Python wee gosi error ogologo. Gịnị ka ị ga-eme?", options: ["Mechie Colab ma mepụta akaụntụ ọhụrụ", "Leghara ya anya ma dekwuo koodu", "Gụọ ahịrị ikpeazụ nke error ahụ, wee dozie nsụpe ya ka ọ bụrụ print", "Hichapụ notebook ahụ dum"], answer: 2, why: "Ahịrị ikpeazụ nke error na-agwa gị ihe mebiri; ebe a, aha e dere ezighi ezi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Variable: inye data aha",
          minutes: 5,
          goal: "Chekwaa ozi na variable ma jụọ onye ọrụ input.",
          text: [
            "Variable bụ aha na-ejide uru (value), dị ka igbe e dere aha n'elu ya. name = \"Maya\" na-etinye ederede Maya n'igbe a na-akpọ name. hours = 20 na-etinye ọnụọgụ 20 n'igbe a na-akpọ hours. Akara = pụtara \"chekwaa nke a\", ọ pụtaghị \"ha nhata\".",
            "Uru nwere ụdị. Ederede dị n'ime quotes bụ string (str). Ọnụọgụ zuru ezu bụ integer (int). Ọnụọgụ nwere ntụpọ decimal bụ float (float). Ụdị dị mkpa: \"5\" + \"5\" na-enye \"55\", mana 5 + 5 na-enye 10.",
            "input() na-arịọ onye na-agba mmemme ahụ ka o dee ihe. Ọ na-enyeghachi string mgbe niile, ya mere iji mee mgbakọ, ị ga-agbanwe ya ka ọ bụrụ ọnụọgụ: hours = float(input(\"Hours worked: \")).",
            "f-string na-agwakọta ederede na variable: print(f\"Hi {name}, you worked {hours} hours.\") Mkpụrụedemede f tupu quotes na brackets ndị gbagọrọ agbagọ (curly brackets) na-arụ ọrụ ahụ."
          ],
          steps: ["Họrọ aha variable dị mkpụmkpụ ma doo anya, na-enweghị oghere (jiri_underscore).", "Chekwaa uru site na =.", "Maka input onye ọrụ, jiri input(\"question: \").", "Tinye ya n'ime int() ma ọ bụ float() ma ọ bụrụ na ịchọrọ ọnụọgụ.", "Gosipụta azịza ahụ site na f-string."],
          words: [["Variable", "aha na-ejide uru."], ["String (str)", "ederede, e dere n'ime quotes."], ["Integer (int)", "ọnụọgụ zuru ezu, dị ka 7."], ["Float", "ọnụọgụ nwere ntụpọ decimal, dị ka 7.5."], ["input()", "na-arịọ onye ọrụ ka o dee ihe ma nyeghachi ya dị ka string."], ["f-string", "ederede na-amalite na f nke nwere ike igosi variable n'ime { }."]],
          slides: [
            { title: "Variable bụ igbe nwere aha", bullets: ["name = \"Maya\"", "hours = 20", "= pụtara chekwaa, ọ pụtaghị ha nhata"] },
            { title: "Ụdị atọ a na-ahụkarị", bullets: ["str: ederede n'ime quotes", "int: ọnụọgụ zuru ezu", "float: ọnụọgụ nwere decimal"] },
            { title: "Ịjụ onye ọrụ", bullets: ["input() na-enyeghachi ederede mgbe niile", "hours = float(input(\"Hours worked: \"))", "Gbanwee ederede ka ọ bụrụ ọnụọgụ tupu mgbakọ"] },
            { title: "Igosipụta site na f-string", bullets: ["print(f\"Hi {name}!\")", "Tinye variable n'ime curly brackets"] }
          ],
          tryIt: "Dee mmemme na-ajụ onye ọrụ aha ya, ụgwọ ọ na-akwụ kwa elekere, na elekere ole ọ rụrụ n'izu a. Chekwaa nke ọ bụla na variable, mụbaa ụgwọ ahụ na elekere ahụ, ma print: Hi <name>, you earned <amount> this week.",
          youCanNow: "ichekwa uru na variable, ịjụ onye ọrụ input, ịgbanwe ederede ka ọ bụrụ ọnụọgụ, na igosipụta azịza doro anya.",
          quickCheck: [
            { objective: "O2", q: "Kedu ụdị uru 3.75 bụ?", options: ["str", "int", "list", "float"], answer: 3, why: "Ọnụọgụ nwere ntụpọ decimal bụ float." },
            { objective: "O2", q: "Ị chọrọ ka onye ọrụ dee ụgwọ elekere ya ka i wee mụbaa ya na elekere. Kedu ahịrị ị ga-ede?", options: ["rate = float(input(\"Pay rate: \"))", "rate = input(\"Pay rate: \")", "print(\"Pay rate\")", "rate == input(\"Pay rate: \")"], answer: 0, why: "input() na-enye string, ya mere float() na-eme ya ọnụọgụ i nwere ike iji mee mgbakọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime mkpebi site na if, elif na else",
          minutes: 6,
          goal: "Dee koodu na-eme ihe dị iche iche dabere na condition.",
          text: [
            "Mmemme na-eme nhọrọ site na if. Condition bụ ajụjụ azịza ya bụ True ma ọ bụ False, dị ka hours > 40. Ọ bụrụ True, ahịrị ndị e debara n'ime (indented) n'okpuru ya ga-agba.",
            "Akara ntụnyere: == ha nhata (akara nhata abụọ), != ha anaghị nhata, > karịrị, < erughị, >= opekata mpe, <= kacha. Ị nwere ike ijikọ condition site na and na or.",
            "elif pụtara \"else if\": nlele nke abụọ mgbe nke mbụ bụ False. else na-agba mgbe ọ dịghị nlele ọ bụla bụ True. Indentation (oghere anọ) bụ otu Python si mara ahịrị ndị bụ nke if. Colab na-etinye ya maka gị mgbe colon gasịrị.",
            "Ọmụmaatụ: if score >= 90: print(\"A\") elif score >= 80: print(\"B\") else: print(\"Keep practicing\"). Akụkụ ọ bụla na-aga n'ahịrị nke ya, ebe e debara print n'ime."
          ],
          steps: ["Dee if, wee dee condition, wee dee colon.", "Debanye n'ime (indent) ahịrị ndị ga-agba mgbe ọ bụ True.", "Tinye elif maka nlele ọzọ ma ọ dị mkpa.", "Tinye else maka ihe ndị ọzọ niile.", "Nwalee ya na uru ga-eru alaka ọ bụla."],
          words: [["Condition", "ajụjụ azịza ya bụ True ma ọ bụ False."], ["Boolean", "ụdị True ma ọ bụ False na Python."], ["Indentation", "oghere dị na mmalite ahịrị na-egosi ngọngọ ọ bụ nke ya."], ["Alaka (branch)", "otu n'ime ụzọ if nwere ike ịgbaso."]],
          slides: [
            { title: "if na-agba naanị mgbe ọ bụ True", bullets: ["if hours > 40:", "    print(\"Overtime!\")", "Echefula colon na indentation"] },
            { title: "Akara ntụnyere", bullets: ["== ha nhata, != ha anaghị nhata", "> karịrị, < erughị", ">= opekata mpe, <= kacha"] },
            { title: "elif na else", bullets: ["elif: lelee condition ọzọ", "else: na-agba mgbe ọ dịghị ihe ọzọ dabara", "Python na-elele site n'elu ruo n'ala"] },
            { title: "Nwalee alaka ọ bụla", bullets: ["Nwaa uru maka ụzọ ọ bụla", "Nwaa oke ya, dị ka 40 kpọmkwem"] }
          ],
          tryIt: "Dee mmemme na-ajụ okpomọkụ na Fahrenheit. Ọ bụrụ 85 ma ọ bụ karịa, print \"Hot: drink water.\" Ọ bụrụ 50 ma ọ bụ karịa, print \"Nice day.\" Ma ọ bụghị ya, print \"Bring a jacket.\" Gbaa ya ugboro atọ na 90, 50 na 30.",
          youCanNow: "ide ngọngọ if, elif na else ma nwalee alaka ọ bụla.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka akara != pụtara?", options: ["Ha nhata", "Karịrị", "Ha anaghị nhata", "Chekwaa uru a"], answer: 2, why: "!= pụtara ha anaghị nhata; == pụtara ha nhata." },
            { objective: "O3", q: "Ị chọrọ print \"Ticket free\" ma ọ bụrụ na afọ (age) erughị 5 ma ọ bụ opekata mpe 65. Kedu condition ị ga-eji?", options: ["if age < 5 and age >= 65:", "if age < 5 or age >= 65:", "if age = 5 or 65:", "if age > 5 or age < 65:"], answer: 1, why: "or na-eme ka condition bụrụ True mgbe otu akụkụ bụ True; ọ dịghị afọ erughị 5 ma ruo 65 n'otu oge." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Mmemme mbụ gị",
        questions: [
          { objective: "O1", q: "Gịnị ka print(\"Hello\") na-eme?", options: ["Na-echekwa faịlụ a na-akpọ Hello", "Na-eziga Hello n'igwe mbipụta", "Na-egosi okwu Hello n'okpuru cell ahụ", "Na-ehichapụ cell ahụ"], answer: 2, why: "print na-egosi ederede dị ka output." },
          { objective: "O1", q: "Koodu gị na-egosi error. Ebee ka ị ga-ebu ụzọ lee?", options: ["Ahịrị ikpeazụ nke ozi error ahụ", "Okwu mbụ nke notebook ahụ", "Google Drive gị", "Akụkọ ihe mere eme (history) nke browser"], answer: 0, why: "Ahịrị ikpeazụ nke error Python na-ekwu ihe mebiri." },
          { objective: "O2", q: "Ị gbara age = input(\"Age: \") ma dee 16. Kedu ụdị age bụ?", options: ["int", "float", "Boolean", "str (ederede)"], answer: 3, why: "input() na-enyeghachi string mgbe niile; jiri int() mee ya ọnụọgụ." },
          { objective: "O3", q: "Kedu ahịrị na-elele nke ọma ma hours karịrị 40?", options: ["if hours = 40", "if hours > 40:", "if hours more 40", "hours > 40 if:"], answer: 1, why: "if, condition ahụ, wee colon." },
          { objective: "O3", q: "Olee mgbe akụkụ else na-agba?", options: ["Mgbe niile, na mbụ", "Naanị mgbe ọ dịghị condition if ma ọ bụ elif bụ True", "Naanị mgbe if bụ True", "Ọ dịghị mgbe ọ bụla"], answer: 1, why: "else na-ejide ọnọdụ ọ bụla nlele ndị bu ya ụzọ na-ejideghị." }
        ]
      }
    },
    {
      name: "Isi 2: Mmemme na-emeghachi ihe ma na-echeta ihe",
      lessons: [
        {
          objectives: ["O4"],
          title: "List: idebe ọtụtụ uru ọnụ",
          minutes: 5,
          goal: "Mepụta list, gbakwunye ihe na ya, ma gụọ ihe dị na ya.",
          text: [
            "List na-ejide ọtụtụ uru n'usoro, n'ime square brackets: prices = [3.50, 12.00, 6.25]. List nwekwara ike ijide ederede: chores = [\"dishes\", \"laundry\"].",
            "Ihe ọ bụla nwere nọmba ọnọdụ a na-akpọ index. Python na-amalite ịgụ site na 0, ya mere prices[0] bụ ihe mbụ (3.50) ma prices[-1] bụ nke ikpeazụ.",
            "Ngwa list bara uru: prices.append(4.99) na-agbakwunye ihe na njedebe. len(prices) na-agwa gị ọnụọgụ ihe dị na ya. sum(prices) na-agbakọ list ọnụọgụ. \"dishes\" in chores bụ True ma ọ bụrụ na ihe ahụ dị na list ahụ."
          ],
          steps: ["Mee list site na square brackets na comma.", "Gụọ ihe site na list_name[index], na-amalite na 0.", "Gbakwunye site na .append(value).", "Gụọ ọnụọgụ ihe site na len().", "Gbakọọ ọnụọgụ site na sum()."],
          words: [["List", "otu ìgwè uru n'usoro n'ime square brackets."], ["Index", "ọnọdụ ihe na list, na-amalite na 0."], ["append", "na-agbakwunye otu ihe na njedebe list."], ["len()", "na-enye ọnụọgụ ihe dị na ya."]],
          slides: [
            { title: "List na-ejide ọtụtụ uru", bullets: ["prices = [3.50, 12.00, 6.25]", "chores = [\"dishes\", \"laundry\"]"] },
            { title: "Ịgụ na-amalite na 0", bullets: ["prices[0] bụ ihe mbụ", "prices[-1] bụ ihe ikpeazụ"] },
            { title: "Ngwa list", bullets: ["append() na-agbakwunye na njedebe", "len() na-agụ ọnụọgụ ihe", "sum() na-agbakọ ọnụọgụ", "in na-elele ma ihe ahụ dị ya"] }
          ],
          tryIt: "Mee list nke ihe atọ ị chọrọ ịzụta, ya na ọnụahịa ha na list nke abụọ. Gbakwunye otu ihe na ọnụahịa ọzọ. Print ọnụọgụ ihe dị ya, ihe mbụ, na ngụkọta ọnụahịa site na sum().",
          youCanNow: "ịmepụta list, ịgụ ihe site na index, ịgbakwunye ihe, na ịgụ ọnụọgụ ma ọ bụ ngụkọta ha.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ index na list?", options: ["Nọmba ọnọdụ ihe, na-amalite na 0", "Ngụkọta list ahụ", "Aha list ahụ", "Naanị ihe ikpeazụ"], answer: 0, why: "Ihe ọ bụla nwere index, Python na-amalitekwa ịgụ site na 0." },
            { objective: "O4", q: "chores = [\"dishes\", \"laundry\"]. Ị chọrọ ilele ma \"laundry\" dị na list ahụ. Gịnị ka ị ga-ede?", options: ["len(\"laundry\")", "chores[\"laundry\"]", "sum(chores)", "\"laundry\" in chores"], answer: 3, why: "\"laundry\" in chores bụ True ma ọ bụrụ na ihe ahụ dị na list ahụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Loop: imeghachi nzọụkwụ n'edeghachighị ha",
          minutes: 6,
          goal: "Jiri for loop gafee list na while loop iji meghachi ruo mgbe ọ gwụrụ.",
          text: [
            "Loop na-emeghachi koodu. for loop na-agba otu ugboro maka ihe ọ bụla na list: for price in prices: print(price). Oge ọ bụla ọ gbara gburugburu, variable price na-ejide ihe na-esote.",
            "range() na-eme list ọnụọgụ maka ịgụ: for i in range(5) na-agba ugboro ise ebe i = 0, 1, 2, 3, 4.",
            "Ngụkọta na-aga n'ihu (running total) bụ usoro a na-ahụkarị: malite total = 0 tupu loop ahụ, wee gbakwunye total = total + price n'ime ya (ma ọ bụ total += price). Mgbe loop ahụ gwụrụ, total na-ejide ngụkọta ahụ.",
            "while loop na-emeghachi ihe ma ọ bụrụhaala na condition bụ True, dịka ọmụmaatụ while answer != \"done\". Hụ na ihe dị n'ime loop ahụ na-agbanwe condition ahụ, ma ọ bụghị ya ọ ga-agba ruo mgbe ebighị ebi. Na Colab, pịa bọtịnụ stop iji kwụsị loop na-anaghị akwụsị."
          ],
          steps: ["Kpebie ihe na-emeghachi.", "Maka ihe ọ bụla na list, jiri: for item in my_list:", "Debanye n'ime (indent) koodu na-emeghachi.", "Maka ngụkọta, tọọ total = 0 tupu loop ahụ ma gbakwunye n'ime ya.", "Maka while loop, hụ na condition ahụ nwere ike ịghọ False."],
          words: [["Loop", "koodu na-emeghachi."], ["for loop", "na-emeghachi otu ugboro maka ihe ọ bụla na list ma ọ bụ range."], ["while loop", "na-emeghachi ma ọ bụrụhaala na condition bụ True."], ["range()", "na-eme usoro ọnụọgụ, na-amalite na 0 ma ọ bụrụ na ọ dịghị ihe ọzọ e kwuru."], ["Ngụkọta na-aga n'ihu (running total)", "variable ị na-agbakwunye ihe n'ime loop."]],
          slides: [
            { title: "for: otu ugboro maka ihe ọ bụla", bullets: ["for price in prices:", "    print(price)", "price na-ejide ihe na-esote oge ọ bụla"] },
            { title: "Ịgụ site na range", bullets: ["for i in range(5): na-agba ugboro 5", "i na-aga 0, 1, 2, 3, 4"] },
            { title: "Usoro ngụkọta na-aga n'ihu", bullets: ["total = 0 tupu loop ahụ", "total += price n'ime loop ahụ", "Print total mgbe loop ahụ gwụrụ"] },
            { title: "while: ruo mgbe condition gbanwere", bullets: ["Na-emeghachi ma ọ bụrụhaala na condition bụ True", "Gbanwee ihe n'ime ya, ma ọ bụghị ya ọ gaghị akwụsị", "Bọtịnụ stop na-akwụsị loop rapaara"] }
          ],
          tryIt: "Dee while loop na-anọgide na-ajụ \"Add a price (or type done): \". Gbakwunye ọnụọgụ ọ bụla na list. Mgbe onye ọrụ dere done, jiri for loop na ngụkọta na-aga n'ihu gbakọọ ọnụahịa ndị ahụ ma print ngụkọta ahụ.",
          youCanNow: "imeghachi koodu site na for na while loop ma debe ngụkọta na-aga n'ihu.",
          quickCheck: [
            { objective: "O5", q: "Kedu ọnụọgụ range(4) na-enye?", options: ["1, 2, 3, 4", "0, 1, 2, 3", "0, 1, 2, 3, 4", "naanị 4"], answer: 1, why: "range(4) na-amalite ịgụ na 0 ma kwụsị tupu 4." },
            { objective: "O5", q: "Loop gị na-agbakọ ọnụahịa mana total na-alaghachi na 0 oge ọ bụla. Ebee ka ị ga-ebuga total = 0?", options: ["N'ime loop ahụ", "Mgbe loop ahụ gwụrụ", "Tupu loop ahụ", "N'ime ahịrị print"], answer: 2, why: "Tọọ total = 0 otu ugboro tupu loop ahụ, wee gbakwunye na ya n'ime." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Function: ịchịkọta koodu ị nwere ike iji ọzọ",
          minutes: 6,
          goal: "Dee function nwere input na uru return, wee jiri ya na mmemme zuru ezu.",
          text: [
            "Function bụ ngọngọ koodu nwere aha ị nwere ike ịgba mgbe ọ bụla ị chọrọ ya. I jirila ndị dị na Python: print(), len(), sum(). Ugbu a ị ga-ede nke gị site na def.",
            "def check_budget(prices, budget): na-amalite function nwere parameter abụọ, input ndị ọ chọrọ. N'ime ya, ị na-arụ ọrụ ahụ. return na-ezighachi azịza nye onye kpọrọ ya.",
            "Ịkpọ function na-agba ya: result = check_budget([3.5, 12, 6.25], 25). Ezigbo function na-arụ otu ọrụ ma nwee aha na-ekwu ọrụ ahụ ọ bụ.",
            "Ịchịkọta ya ọnụ: ọrụ ikpeazụ na-eji ihe niile dị n'ihe ọmụmụ a. Buru ụzọ hazie ya n'okwu dị mfe (nweta budget, gbakọọ ọnụahịa, tụnyere, print), wee mee ahịrị ọ bụla ka ọ bụrụ koodu ma nwalee ya na budget abụọ."
          ],
          steps: ["Dee atụmatụ ahụ n'okwu dị mfe dị ka comment na-amalite na #.", "Malite function ahụ site na def name(parameters):", "Debanye ahụ ya n'ime (indent); jiri loop na if n'ime ya.", "Jiri return zighachi azịza, ma ọ bụ print n'ime ya.", "Kpọọ function ahụ ma nwalee ya na input dị iche iche."],
          words: [["Function", "ngọngọ koodu nwere aha ị nwere ike ịgba ugboro ugboro."], ["def", "okwu na-amalite function ọhụrụ."], ["Parameter", "input function chọrọ, e dere aha ya n'ime brackets ya."], ["return", "na-ezighachi uru site na function."], ["Comment", "ndetu na koodu na-amalite na #; Python na-eleghara ya anya."]],
          slides: [
            { title: "Ihe mere function", bullets: ["Dee koodu otu ugboro, jiri ya ọtụtụ oge", "Otu ọrụ kwa function", "Aha doro anya na-ekwu ihe ọ na-eme"] },
            { title: "Ide otu", bullets: ["def check_budget(prices, budget):", "Debanye ahụ ya n'ime (indent)", "return na-ezighachi azịza"] },
            { title: "Ịkpọ otu", bullets: ["check_budget([3.5, 12, 6.25], 25)", "Nwaa input dị iche iche iji nwalee ya"] },
            { title: "Atụmatụ ọrụ ikpeazụ", bullets: ["Nweta budget site na input()", "Gbakọọ ọnụahịa site na loop", "Tụnyere site na if, print azịza"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee check_budget(prices, budget). N'ime ya, jiri loop gbakọọ ọnụahịa, wee print total na \"Under budget by X\" ma ọ bụ \"Over budget by X\". Jụọ onye ọrụ budget site na float(input()), kpọọ function ahụ na list ịzụ ahịa gị, ma nwalee ya na budget dị elu na nke dị ala.",
          youCanNow: "ide ma kpọọ function nke gị, ma jikọta variable, input, if, list na loop n'otu mmemme na-arụ ọrụ.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ parameter na function?", options: ["Ozi error", "Loop dị n'ime function ahụ", "Aha function ahụ", "Input ndị function ahụ chọrọ"], answer: 3, why: "Parameter, dị ka prices na budget, bụ input ndị function chọrọ." },
            { objective: "O6", q: "Tupu i dee ihe na-elele budget, gịnị ka ị ga-ebu ụzọ mee?", options: ["Hazie ya n'okwu dị mfe: nweta budget, gbakọọ ọnụahịa, tụnyere, print", "Dee koodu dịka o kwere mee ma tụọ anya na ọ ga-arụ ọrụ", "Dee naanị aha function ahụ", "Nwalee ya n'enweghị budget"], answer: 0, why: "Ibu ụzọ hazie ya n'okwu dị mfe na-eme ka ọ dị mfe ime ahịrị ọ bụla koodu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Mmemme na-emeghachi ihe ma na-echeta ihe",
        questions: [
          { objective: "O4", q: "colors = [\"red\", \"blue\", \"green\"]. Gịnị bụ colors[0]?", options: ["\"blue\"", "\"green\"", "Error", "\"red\""], answer: 3, why: "Python na-agụ ọnọdụ list site na 0, ya mere index 0 bụ ihe mbụ." },
          { objective: "O4", q: "Kedu ahịrị na-agbakwunye 4.99 na njedebe list prices?", options: ["prices.append(4.99)", "prices + 4.99", "append.prices(4.99)", "prices[4.99]"], answer: 0, why: "append na-agbakwunye otu ihe na njedebe list." },
          { objective: "O5", q: "Ugboro ole ka for i in range(3): na-agba?", options: ["2", "4", "3", "Ruo mgbe ebighị ebi"], answer: 2, why: "range(3) na-enye 0, 1 na 2: ugboro atọ." },
          { objective: "O5", q: "while loop gị anaghị akwụsị. Gịnị bụ ihe kachasị kpata ya?", options: ["I jiri list", "Colab anọghị n'ịntanetị", "I jiri print", "Ọ dịghị ihe n'ime loop ahụ na-eme ka condition ahụ bụrụ False"], answer: 3, why: "while loop na-akwụsị naanị mgbe condition ya ghọrọ False." },
          { objective: "O6", q: "Gịnị ka return na-eme n'ime function?", options: ["Na-ehichapụ function ahụ", "Na-amalitegharị Colab", "Na-ezighachi uru n'ebe a kpọrọ function ahụ", "Na-egosi error"], answer: 2, why: "return na-enyeghachi azịza ahụ onye kpọrọ ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Mmemme Kọmputa na Python",
    questions: [
      { objective: "O1", q: "Gịnị bụ mmemme (program)?", options: ["Ụdị ihuenyo kọmputa", "Ndepụta ntuziaka kọmputa na-agbaso n'usoro", "Adreesị weebụsaịtị", "Akaụntụ Google"], answer: 1, why: "Mmemme bụ ntuziaka a na-agba n'usoro." },
      { objective: "O1", q: "Gịnị mere Google Colab ji baa uru maka ndị na-amalite?", options: ["Ọ na-agba Python na browser n'enweghị ihe ị ga-awụnye", "Ọ na-arụ ọrụ naanị n'enweghị ịntanetị", "Ọ na-ede koodu niile maka gị", "Ọ chọrọ ikike (licence) a na-akwụ ụgwọ"], answer: 0, why: "Colab bụ notebook n'efu dị n'ịntanetị; ọ dịghị ihe ị ga-awụnye." },
      { objective: "O1", q: "Kedu otu esi agba cell koodu na Colab?", options: ["Mechie tab ahụ", "Dee run n'elu peeji ahụ", "Pịa bọtịnụ play ma ọ bụ Shift + Enter", "Zigara onwe gị ya na email"], answer: 2, why: "Bọtịnụ play ma ọ bụ Shift + Enter na-agba cell ahụ." },
      { objective: "O1", q: "Kedu ahịrị na-egosi ederede Good job?", options: ["print(\"Good job\")", "print(Good job)", "print \"Good job\"", "say(\"Good job\")"], answer: 0, why: "Ederede na-aga n'ime quotes n'ime brackets nke print." },
      { objective: "O2", q: "Na Python, gịnị ka = na-eme na pay = 15?", options: ["Na-elele ma pay ha nhata 15", "Na-egosi 15", "Na-ehichapụ pay", "Na-echekwa 15 na variable pay"], answer: 3, why: "Otu = na-echekwa uru; == na-atụnyere." },
      { objective: "O2", q: "Gịnị ka \"5\" + \"5\" na-enye?", options: ["10", "\"55\"", "Error mgbe niile", "5"], answer: 1, why: "String abụọ e jikọtara ọnụ na-enye \"55\"." },
      { objective: "O2", q: "Ị chọrọ iji ihe onye ọrụ dere mee mgbakọ. Kedu ahịrị ziri ezi?", options: ["hours = input(\"Hours: \") * 2", "hours = float(input(\"Hours: \"))", "hours = print(\"Hours\")", "hours = text(input())"], answer: 1, why: "input na-enye ederede; float() na-eme ya ọnụọgụ." },
      { objective: "O2", q: "name = \"Ana\". Kedu nke na-egosi Hi Ana?", options: ["print(\"Hi {name}\")", "print(Hi name)", "print(f(Hi name))", "print(f\"Hi {name}\")"], answer: 3, why: "f tupu quotes na-eme ka {name} gosi variable ahụ." },
      { objective: "O3", q: "Kedu akara pụtara \"ha nhata\" na condition?", options: ["==", "=", "=>", "!="], answer: 0, why: "== na-atụnyere; = na-echekwa." },
      { objective: "O3", q: "Gịnị ga-adị na njedebe ahịrị if?", options: ["Semicolon", "Ntụpọ (full stop)", "Colon", "Ọ dịghị ihe"], answer: 2, why: "Ahịrị if, elif, else, for, while na def na-ejedebe na colon." },
      { objective: "O3", q: "score = 85. Kedu alaka na-agba? if score >= 90 / elif score >= 80 / else", options: ["if ahụ", "else ahụ", "Ọ dịghị nke ọ bụla", "elif ahụ"], answer: 3, why: "85 erughị 90, mana ọ bụ 80 ma ọ bụ karịa, ya mere elif na-agba." },
      { objective: "O3", q: "Kedu otu Python si mara ahịrị ndị bụ nke if?", options: ["Site na agba ederede ahụ", "Site na mkpụrụedemede ukwu", "Site na indentation", "Site na nọmba ahịrị"], answer: 2, why: "Ahịrị e debara n'ime (indented) n'okpuru if bụ ngọngọ ya." },
      { objective: "O4", q: "nums = [4, 8, 2]. Gịnị ka len(nums) na-enye?", options: ["2", "3", "8", "14"], answer: 1, why: "len na-agụ ọnụọgụ ihe; ha dị atọ." },
      { objective: "O4", q: "nums = [4, 8, 2]. Gịnị ka sum(nums) na-enye?", options: ["3", "8", "14", "482"], answer: 2, why: "sum na-agbakọ ọnụọgụ ndị ahụ: 4 + 8 + 2 = 14." },
      { objective: "O4", q: "Gịnị bụ prices[-1]?", options: ["Ihe mbụ", "Error", "Ihe ikpeazụ", "Mwepu ọnụahịa mbụ"], answer: 2, why: "Index -1 pụtara ihe ikpeazụ." },
      { objective: "O5", q: "Ị chọrọ ịgbakọ list n'ime loop. Gịnị na-abịa tupu loop ahụ?", options: ["total = 0", "return total", "print(total)", "def total"], answer: 0, why: "Ngụkọta na-aga n'ihu na-amalite na 0 tupu loop ahụ." },
      { objective: "O5", q: "Gịnị ka for chore in chores: na-eme?", options: ["Na-ehichapụ list ahụ", "Na-agba naanị otu ugboro", "Na-ahazi list ahụ n'usoro", "Na-agba otu ugboro maka ihe ọ bụla dị na chores"], answer: 3, why: "for loop na-agafe ihe ọ bụla n'usoro." },
      { objective: "O6", q: "Kedu okwu na-amalite function ọhụrụ?", options: ["func", "def", "new", "make"], answer: 1, why: "def na-akọwa (define) function." },
      { objective: "O6", q: "Na def check_budget(prices, budget):, gịnị bụ prices na budget?", options: ["Error", "Parameter: input ndị function ahụ chọrọ", "List nke function", "Comment"], answer: 1, why: "Aha ndị dị n'ime brackets bụ parameter." },
      { objective: "O6", q: "I dere ihe na-elele budget. Gịnị bụ ụzọ kacha mma isi nwalee ya?", options: ["Gbaa ya otu ugboro ma tụọ anya", "Hichapụ comment ndị ahụ", "Kesaa ya tupu ị gbaa ya", "Gbaa ya na budget dị elu na budget dị ala ma lelee azịza abụọ ahụ"], answer: 3, why: "Ịnwale input dị iche iche na-elele na alaka ọ bụla na-arụ ọrụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      5,
      6,
      8,
      10,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Function",
        objective: "O6",
        notYet: "Ọ dịghị function, ma ọ bụ ọ naghị anara ọnụahịa na budget.",
        meets: "Function nwere parameter maka ọnụahịa na budget nke na-eweghachi (return) ma ọ bụ na-egosipụta azịza ahụ.",
        exceeds: "Function ahụ nwere aha doro anya, na-arụ otu ọrụ ma na-eji return."
      },
      {
        name: "Loop na ngụkọta",
        objective: "O5",
        notYet: "Ngụkọta ahụ ezighi ezi ma ọ bụ e jighị loop.",
        meets: "for loop na-agbakọ ọnụahịa n'ime ngụkọta na-aga n'ihu nke malitere na 0.",
        exceeds: "Ọ na-egosipụtakwa ọnụọgụ ihe e lelere site na len()."
      },
      {
        name: "Mkpebi",
        objective: "O3",
        notYet: "Mmemme ahụ anaghị ekwu Under budget ma ọ bụ Over budget, ma ọ bụ na-ekwu nke na-ezighi ezi.",
        meets: "if na else na-egosipụta ozi ziri ezi ya na ọdịiche ya.",
        exceeds: "Ọ na-ejikwa elif edozi mgbe ọ ha nhata budget kpọmkwem."
      },
      {
        name: "Input",
        objective: "O2",
        notYet: "A jụghị budget, ma ọ bụ e jiri ya dị ka ederede nke mere mgbakọ ahụ ji daa.",
        meets: "input() na-ajụ budget ma float() na-eme ya ọnụọgụ.",
        exceeds: "Ọ na-egosipụta azịza ahụ site na f-string dị mfe ịgụ."
      },
      {
        name: "Nnwale",
        objective: "O6",
        notYet: "E gbara mmemme ahụ otu ugboro ma ọ bụ e gbaghị ya ma ọlị.",
        meets: "E gbara ya na budget abụọ dị iche iche, azịza abụọ ahụ ziri ezi.",
        exceeds: "E nwalekwara ya na budget ha nhata ngụkọta kpọmkwem, ma ọ bụ na list tọgbọrọ chakoo."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke ihe na-elele budget",
      "Ndị na-amụ ihe kwuru na ha dere mmemme Python ọzọ nke ha n'ime ụbọchị 30 mgbe ihe ọmụmụ ahụ gasịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe gara n'ihe ọmụmụ na-esote, dị ka AI Programming with Python ma ọ bụ Data Science for Beginners",
      "Ndị na-amụ ihe sonyere n'otu koodu, klas, internship ma ọ bụ mmemme ọzụzụ mgbe ihe ọmụmụ ahụ gasịrị"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ laptop nwere web browser",
      "Akaụntụ Google n'efu iji Google Colab",
      "Akwụkwọ na mkpịsị ode iji hazie mmemme ahụ n'okwu dị mfe",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, gbakwunyere oge omume"
    ],
    facilitatorNotes: [
      "Tupu klas, lelee na onye ọ bụla na-amụ ihe nwere ike ịbanye na Google Colab; akaụntụ ụlọ akwụkwọ na-egbochi ya mgbe ụfọdụ, ya mere kwadebe akaụntụ nke onwe ma ọ bụ notebook Python ọzọ n'efu.",
      "Gbaa ndị na-amụ ihe ume ka ha dee koodu ahụ n'onwe ha kama idetuo ma tinye ya (copy and paste), na ịgụpụta ozi error n'olu dị elu ọnụ.",
      "Jiri pair programming: otu na-ede, onye nke ọzọ na-agụ ma na-elele, wee gbanwee ọnọdụ kwa nkuzi.",
      "Mee ememe error dị ka akụkụ nke ide koodu; gosi otu i si edozi otu n'ime nke gị n'ihuenyo.",
      "Maka ọrụ ikpeazụ, nye ọmụmaatụ list ọnụahịa na budget ka ndị na-amụ ihe wee tụnyere azịza ha na nke gị."
    ]
  }
};
