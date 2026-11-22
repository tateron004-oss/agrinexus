"use strict";

// Koach Learn course (Igbo translation of veterans/veterans-ai-productivity-leadership.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-productivity-leadership-ig",
  lang: "ig",
  translationOf: "veterans-ai-productivity-leadership",
  category: "Veterans (military)",
  name: "AI maka Ịrụ Ọrụ Nke Ọma na Idu Ndị Mmadụ",
  skills: "Iji AI hazie izu otu ndị ọrụ, Ide email BLUF, Ichikọta nzukọ ka ọ bụrụ ọrụ a ga-arụ, Inye nkọwa doro anya, Inyefe ọrụ site na ndepụta, Iji AI n'ụzọ kwesịrị ekwesị na ozi ndị otu",
  outcome: "iji ngwa enyemaka AI hazie izu nke obere otu ndị ọrụ, dee email doro anya nke na-ebu isi okwu ụzọ (BLUF), ma mee ka ndetu nzukọ bụrụ ọrụ a ga-arụ nwere onye nwe ya na ụbọchị, ma na-edebe ozi nzuzo ndị otu gị n'ebe ọ na-adịghị na ngwa AI ọha.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị agha ochie (veterans) duru ndị mmadụ mgbe ha nọ n'ọrụ agha, dị ka NCO, petty officer, onye ọchịagha ma ọ bụ onye isi otu, ma ugbu a na-edu ma ọ bụ chọrọ idu ndị mmadụ n'ebe ọrụ nkịtị. Omume idu ndú gị ka bara uru; okwu na ngwa ọrụ dị ntakịrị iche.",
    "Ị ga-eji ngwa enyemaka AI n'efu hazie izu otu ndị ọrụ, dee ozi mkpụmkpụ doro anya, mee ka ndetu nzukọ gbagwojuru anya bụrụ ọrụ a ga-arụ, kwado nkọwa (feedback) ma nyefee ọrụ nke ọma. Ị ga-amụtakwa iwu maka iji AI n'ụzọ kwesịrị ekwesị na ozi ndị ọzọ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise: gụọ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Maka ezi otu ndị ọrụ ma ọ bụ otu omume nwere mmadụ atọ ruo isii: jiri ngwa enyemaka AI mee atụmatụ otu izu nwere ihe ndị bu ụzọ na onye nwe ọrụ ọ bụla, dee email BLUF nye onye isi gị, ma mee ka obere ndetu nzukọ bụrụ tebụl ọrụ a ga-arụ nwere onye nwe ya na ụbọchị ọ ga-agwụ, na-eji ọrụ mmadụ (role) kama aha ma na-ahapụ ozi nzuzo ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha ochie (veterans) duru ndị mmadụ n'ọrụ agha dị ka NCO, petty officer, onye ọchịagha ma ọ bụ onye isi otu, ma ugbu a na-edu ma ọ bụ chọrọ idu obere otu ndị ọrụ n'ebe ọrụ nkịtị.",
    startingPoint: "Ha nwere ezigbo omume n'ịhazi atụmatụ, ịkọ akụkọ (briefing), nyocha mgbe ọrụ gwụrụ (after-action review) na ilekọta ndị mmadụ. Ha maara iji email na kọmputa. Ha ejibeghị ngwa enyemaka AI nke ukwuu maka ọrụ idu ndú, na ide ihe n'ụdị ndị agha nwere ike ịdị ka okwu ike nye ndị nkịtị.",
    gap: "Otu ndị ọrụ nkịtị na-atụ anya atụmatụ, email na nkọwa n'okwu ndị nkịtị, ọtụtụ ebe ọrụ na-ejikwa ngwa AI ugbu a. Ndị na-amụ ihe kwesịrị iji ngwa enyemaka AI chekwaa oge n'atụmatụ, ozi ọhụrụ, ndetu nzukọ, nkọwa na inyefe ọrụ, ma na-edebe ozi nzuzo ndị otu ha n'ebe ọ na-adịghị ma bụrụ ndị na-aza ajụjụ maka ọrụ ikpeazụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: kọmputa ma ọ bụ smartphone nwere ịntanetị na ngwa enyemaka AI n'efu",
      "Nzuzo na iwu: ọrụ mmadụ kama aha, ọ dịghị ụgwọ ọnwa, ahụike ma ọ bụ ozi gbasara ndị ọrụ na ngwa AI ọha, iwu AI nke onye were gị n'ọrụ na-ebu ụzọ",
      "Oge: nkuzi dị ka nkeji 5 nke dabara n'ụbọchị ọrụ",
      "Omume na-eji ezi otu ndị ọrụ ma ọ bụ otu omume nwere mmadụ atọ ruo isii"
    ],
    prerequisites: "Ọ dịghị. Ndị ejibeghị ngwa enyemaka AI nwere ike ibu ụzọ were \"Introduction to AI and the Future Workforce\" (Mmalite AI na Ọrụ n'Ọdịnihu)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ otu ndị ọrụ maka izu ahụ", action: "iji ngwa enyemaka AI mee atụmatụ izu nwere ihe ndị bu ụzọ na onye nwe ọrụ ọ bụla", standard: "ma were uche gị dozie ihe ọ bụla o mehiere" },
    { id: "O2", condition: "Mgbe e nyere gị ndetu gbagwojuru anya maka onye isi", action: "ide email BLUF (isi okwu na-ebu ụzọ) site n'enyemaka AI", standard: "nke isi okwu ya dị n'ahịrịokwu mbụ, ma nwee ụda enyi na nke ọkachamara" },
    { id: "O3", condition: "Mgbe e nyere gị obere ndetu nzukọ", action: "iji AI mee ka ndetu ahụ bụrụ mkpebi, ọrụ a ga-arụ na ajụjụ fọdụrụ", standard: "ebe ọrụ ọ bụla nwere otu onye nwe ya na ụbọchị ọ ga-agwụ" },
    { id: "O4", condition: "Mgbe e nyere gị ihe otu onye otu gị mere", action: "ide nkọwa n'ụdị ọnọdụ-omume-mmetụta (SBI) ma degharịa ya n'okwu nke gị", standard: "na-akọwa naanị omume ị hụrụ" },
    { id: "O5", condition: "Mgbe e nyere gị ọrụ ị nwere ike inyefe onye ọzọ", action: "ime ndepụta inyefe ọrụ nwere ebumnuche, ọkwa, ụbọchị njedebe, ihe enyemaka na oge nlele", standard: "nwere akụkụ ọ bụla dị mkpa" },
    { id: "O6", condition: "Mgbe ọ bụla ị na-eji AI na ozi otu ma ọ bụ ụlọ ọrụ", action: "ịgbaso iwu AI nke onye were gị n'ọrụ, jiri ọrụ mmadụ kama aha ma debe ozi nzuzo n'ebe ọ na-adịghị", standard: "n'enweghị ozi nzuzo ọ bụla na prompt ọ bụla, gị bụkwa onye na-aza ajụjụ maka ọrụ ikpeazụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ime ka ọrụ gwụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Site n'atụmatụ ozi agha ruo atụmatụ izu otu ndị ọrụ",
          minutes: 5,
          goal: "Jiri AI mee ka ndepụta ọrụ bụrụ atụmatụ izu nwere ihe ndị bu ụzọ na ndị nwe ọrụ.",
          text: [
            "N'ọrụ agha, i si n'ozi (mission) hazie atụmatụ: ihe a ga-eme, mgbe ọ ga-agwụ, ndị ga-eme ya na ihe a ga-eji. Otu ndị ọrụ nkịtị chọrọ otu ihe ahụ; ha na-akpọkarị ya work plan ma ọ bụ project plan (atụmatụ ọrụ).",
            "Nye ngwa enyemaka AI ndepụta ọrụ gị, ụbọchị njedebe na ọrụ ndị otu gị, ma rịọ ya ka o hazie ha dịka ihe bu ụzọ ma kọwaa izu ahụ. Dịka ọmụmaatụ: \"Nke a bụ ọrụ 8 maka otu ndị ọrụ m nwere mmadụ 5 n'ụlọ nkwakọba ngwaahịa n'izu a, ya na ụbọchị njedebe. Hazie ha dịka ihe ngwa ngwa na ihe dị mkpa, ma mee tebụl Mọnde ruo Fraịde nwere ọrụ onye nwe ya maka nke ọ bụla.\"",
            "Jiri ọrụ mmadụ, ọ bụghị aha zuru ezu (\"Shift lead A\", \"Forklift operator 2\"). Wee jiri uche gị: AI amaghị na otu onye nọ n'ezumike ma ọ bụ na otu onye ahịa kacha mkpa. Gị na-edozi ma kwado atụmatụ ahụ."
          ],
          steps: ["Depụta ọrụ izu ahụ na ụbọchị njedebe ha.", "Depụta ọrụ ndị otu gị, ọ bụghị aha ha.", "Rịọ AI ka o hazie ha dịka ihe ngwa ngwa na ihe dị mkpa ma mee tebụl izu.", "Dozie ihe AI amaghị: ezumike, nka, ndị ahịa dị mkpa.", "Kesaa atụmatụ ikpeazụ ahụ na ndị otu gị."],
          words: [["Atụmatụ ọrụ (work plan)", "ndepụta ọrụ nwere ndị nwe ha na ụbọchị; ụdị nkịtị nke atụmatụ ọrụ agha (operations plan)."], ["Ihe ngwa ngwa na ihe dị mkpa", "ihe ngwa ngwa (urgent) chọrọ ka e mee ya ugbu a; ihe dị mkpa (important) kacha baa uru n'ebumnuche ahụ. Ha anaghị adị otu mgbe niile."]],
          slides: [
            { title: "Otu nka ahụ, okwu ọhụrụ", bullets: ["Atụmatụ ozi agha = atụmatụ ọrụ", "Gịnị, mgbe ole, onye, na gịnị ka a ga-eji"] },
            { title: "Ka AI hazie ma kọwaa", bullets: ["Nye ọrụ, ụbọchị njedebe na ọrụ ndị mmadụ", "Rịọ maka usoro ihe bu ụzọ na tebụl izu"] },
            { title: "Gị na-akwado atụmatụ ahụ", bullets: ["Jiri ọrụ mmadụ, ọ bụghị aha", "Dozie maka ezumike, nka, ndị ahịa dị mkpa", "Kesaa atụmatụ ikpeazụ"] }
          ],
          tryIt: "Dee ọrụ isii otu ndị ọrụ gị (ezi otu ma ọ bụ otu omume) ga-arụ n'izu a. Rịọ ngwa enyemaka AI ka o hazie ha dịka ihe ngwa ngwa na ihe dị mkpa ma mee tebụl Mọnde ruo Fraịde nwere ọrụ onye nwe ya maka nke ọ bụla. Gbanwee otu ihe o mehiere.",
          youCanNow: "iji AI mee ka ndepụta ọrụ bụrụ atụmatụ izu otu ndị ọrụ nwere ihe ndị bu ụzọ, ma were uche gị dozie ya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ịhazi ọrụ dịka ihe ngwa ngwa na ihe dị mkpa pụtara?", options: ["Ibu ụzọ mee ọrụ kacha dị mfe", "Ikpebi ọrụ ndị chọrọ ka e mee ha n'oge na-adịghị anya na ndị kacha mkpa", "Inye otu onye ọrụ niile", "Ime ọrụ dịka usoro mkpụrụ akwụkwọ"], answer: 1, why: "Ihe ngwa ngwa na ihe dị mkpa dị iche, ya mere ịhazi ha n'abụọ na-egosi ihe a ga-ebu ụzọ mee." },
            { objective: "O1", q: "Atụmatụ izu AI mere nyere otu onye ọrụ isii niile. Gịnị ka ị ga-eme?", options: ["Nabata ya n'ihi na AI kpebiri ya", "Hichapụ atụmatụ ahụ ma mee ihe niile n'onwe gị", "Rịọ AI ka ọ tinyekwuo ọrụ", "Jiri uche gị kesaa ọrụ ahụ ma dozie atụmatụ ahụ"], answer: 3, why: "AI na-ede atụmatụ mbụ, mana gị maara otu gị ma na-akwado nke ikpeazụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide email na ozi ọhụrụ BLUF",
          minutes: 5,
          goal: "Dee email mkpụmkpụ nke isi okwu ya na-ebu ụzọ, site n'enyemaka AI.",
          text: [
            "BLUF (bottom line up front: isi okwu na-ebu ụzọ) na-arụkwa ọrụ n'ọfịs ndị nkịtị, ọbụlagodi ma ndị mmadụ anaghị eji okwu ahụ. Tinye isi okwu ma ọ bụ mkpebi ị chọrọ n'ahịrịokwu mbụ. Wee nye ihe kpatara ya n'obere na nzọụkwụ ndị ọzọ.",
            "Rịọ AI ka o degharịa ihe ogologo i dere: \"Degharịa nke a ka ọ bụrụ email mkpụmkpụ nye onye isi m. Tinye isi okwu n'ahịrịokwu mbụ, wee isi okwu atọ (bullet), wee nzọụkwụ ọzọ. Ụda enyi na nke ọkachamara. Ejila okwu ndị agha.\"",
            "Lelee ụda ya. Ide ihe n'ụdị ndị agha nwere ike ịdị ka okwu ike nye ndị nkịtị. Obere \"Daalụ\" ma ọ bụ \"Obi dị m ụtọ ịkparịta ya\" na-enyere aka. Gụọ ya otu ugboro dị ka onye ga-anata ya."
          ],
          steps: ["Dee ihe ị chọrọ ikwu, ọbụlagodi ma ọ gbagwojuru anya.", "Rịọ AI ka o tinye isi okwu n'ihu, wee isi okwu ndị ọzọ, wee nzọụkwụ ọzọ.", "Rịọ ya ka o wepụ okwu ndị agha ma jiri ụda enyi na nke ọkachamara.", "Gụọ ya dị ka onye ga-anata ya ma dozie ihe ọ bụla na-edoghị anya."],
          words: [["BLUF", "bottom line up front: isi okwu ma ọ bụ arịrịọ na-ebu ụzọ."], ["Ụda (tone)", "otu ihe i dere si dị nye onye na-agụ ya: nke enyi, nke okwu ike, nke nkwanye ugwu."]],
          slides: [
            { title: "BLUF na-arụ ọrụ ebe niile", bullets: ["Isi okwu ma ọ bụ arịrịọ na-ebu ụzọ", "Ihe kpatara ya n'obere na-esote", "Nzọụkwụ ọzọ na-abịa n'ikpeazụ"] },
            { title: "Rịọ AI ka o degharịa ya", bullets: ["\"Isi okwu n'ahịrịokwu mbụ\"", "\"Isi okwu atọ, wee nzọụkwụ ọzọ\"", "\"Ụda enyi na nke ọkachamara, enweghị okwu ndị agha\""] },
            { title: "Lelee ụda ya", bullets: ["Ide ihe n'ụdị ndị agha nwere ike ịdị ka okwu ike", "Tinye \"Daalụ\" ma ọ bụ \"Obi dị m ụtọ ịkparịta ya\"", "Gụọ ya dị ka onye ga-anata ya"] }
          ],
          tryIt: "Dee ndetu gbagwojuru anya nye onye isi banyere igbu oge n'otu ọrụ. Rịọ ngwa enyemaka AI ka o degharịa ya ka ọ bụrụ email BLUF nwere isi okwu atọ na nzọụkwụ ọzọ, n'ụda enyi na nke ọkachamara.",
          youCanNow: "ide email mkpụmkpụ doro anya nke isi okwu ya na-ebu ụzọ, nke dabara ebe ọrụ nkịtị.",
          quickCheck: [
            { objective: "O2", q: "N'email BLUF, gịnị na-ebu ụzọ?", options: ["Isi okwu ma ọ bụ arịrịọ", "Akụkọ ogologo banyere ihe mere tupu", "Mbịanye aka gị", "Ndepụta onye ọ bụla nyere aka"], answer: 0, why: "Isi okwu na-ebu ụzọ pụtara na onye na-agụ ya na-ahụ isi okwu ma ọ bụ arịrịọ ozugbo." },
            { objective: "O2", q: "Email AI dere dị mkpụmkpụ ma dị ka okwu ike. Gịnị ka ị ga-eme tupu i zipu ya?", options: ["Zipu ya otu o si dị", "Mee ka ọ dị okpukpu abụọ n'ogologo", "Tinye ahịrị nke enyi ma gụọ ya dị ka onye ga-anata ya", "Wepụ isi okwu ahụ"], answer: 2, why: "Ahịrị nke enyi na ịgụ ya dị ka onye ga-anata ya na-eme ka ọ doo anya ma dị ka nke ọkachamara." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime ka ndetu nzukọ bụrụ ọrụ a ga-arụ",
          minutes: 5,
          goal: "Jiri AI mee ka ndetu nzukọ bụrụ tebụl ọrụ a ga-arụ nwere ndị nwe ya na ụbọchị ọ ga-agwụ.",
          text: [
            "Nzukọ na-emebi oge mgbe ọ dịghị onye pụrụ na-amata onye ga-eme gịnị. Omume nyocha mgbe ọrụ gwụrụ na-edozi nke ahụ: ihe e kpebiri, onye nwe ọrụ ọ bụla, na mgbe ọ ga-agwụ.",
            "Tinye ndetu gị (nwere ọrụ mmadụ kama aha, na-enweghị ozi nzuzo) ma jụọ: \"Mee ka ndetu ndị a bụrụ: 1) mkpebi e mere, 2) tebụl ọrụ a ga-arụ nwere onye nwe ya na ụbọchị ọ ga-agwụ, 3) ajụjụ fọdụrụ.\" Ọ bụrụ na ọrụ enweghị onye nwe ya ma ọ bụ ụbọchị, AI kwesịrị igosi ya.",
            "Ọtụtụ ngwa ọrụ, dị ka Microsoft Teams nwere Copilot ma ọ bụ Google Meet nwere Gemini, nwere ike ichikọta nzukọ ma ọ bụrụ na onye were gị n'ọrụ gbanyere ya. Gbasoo iwu onye were gị n'ọrụ gbasara idekọ nzukọ na AI, ma gwa ndị mmadụ mgbe a na-edekọ ma ọ bụ na-achịkọta nzukọ."
          ],
          steps: ["Dee obere ndetu n'oge nzukọ.", "Dochie aha na ọrụ mmadụ ma wepụ ozi nzuzo.", "Rịọ AI maka mkpebi, tebụl ọrụ nwere onye nwe ya na ụbọchị ọ ga-agwụ, na ajụjụ fọdụrụ.", "Dejupụta onye nwe ya ma ọ bụ ụbọchị ọ bụla na-adịghị.", "Zipu nchịkọta ahụ nye ndị otu gị n'otu ụbọchị ahụ."],
          words: [["Ọrụ a ga-arụ (action item)", "ọrụ si na nzukọ nwere otu onye nwe ya na ụbọchị ọ ga-agwụ."], ["Nyocha mgbe ọrụ gwụrụ (after-action review)", "obere nlegharị anya azụ: ihe mere, ihe rụrụ ọrụ, ihe a ga-agbanwe."]],
          slides: [
            { title: "Nzukọ ọ bụla kwesịrị ịgwụ na", bullets: ["Mkpebi e mere", "Ọrụ a ga-arụ: onye nwe ya + ụbọchị ọ ga-agwụ", "Ajụjụ fọdụrụ"] },
            { title: "Rịọ AI ka o hazie ndetu ahụ", bullets: ["Tinye ndetu nwere ọrụ mmadụ, ọ bụghị aha", "Rịọ maka mkpebi, ọrụ, ajụjụ", "Ka o gosi ebe onye nwe ya ma ọ bụ ụbọchị na-adịghị"] },
            { title: "Gbasoo iwu ebe ọrụ", bullets: ["Jiri ngwa nzukọ AI naanị ma ọ bụrụ na e kwere", "Gwa ndị mmadụ mgbe ị na-edekọ ma ọ bụ na-achịkọta", "Zipu nchịkọta n'otu ụbọchị ahụ"] }
          ],
          tryIt: "Dee ahịrị ise nke ndetu nzukọ omume. Rịọ ngwa enyemaka AI ka o mee ka ha bụrụ mkpebi, tebụl ọrụ a ga-arụ nwere ọrụ onye nwe ya na ụbọchị ọ ga-agwụ, na ajụjụ fọdụrụ.",
          youCanNow: "ime ka ndetu nzukọ bụrụ tebụl ọrụ a ga-arụ doro anya nwere ndị nwe ya na ụbọchị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ajụjụ fọdụrụ na nchịkọta nzukọ?", options: ["Ọrụ nwere onye nwe ya", "Mkpebi otu ahụ mere", "Ajụjụ ọ dịghị onye nwere ike ịjụ", "Ihe a ka na-ekpebibeghị nke chọrọ azịza ma emechaa"], answer: 3, why: "Ajụjụ fọdụrụ bụ okwu nzukọ ahụ edozighị, e depụtara ka a ghara ichefu ha." },
            { objective: "O3", q: "Tebụl ọrụ AI mere nwere \"Nye iwu ka e zụta akụkụ ngwa\" n'enweghị onye nwe ya. Gịnị ka ị ga-eme?", options: ["Hapụ ya; mmadụ ga-eme ya", "Nye ya otu onye nwe ya na ụbọchị ọ ga-agwụ", "Nye ya onye ọ bụla", "Hichapụ ya"], answer: 1, why: "Ọrụ a ga-arụ zuru ezu naanị mgbe o nwere otu onye nwe ya na ụbọchị ọ ga-agwụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ime ka ọrụ gwụ",
        questions: [
          { objective: "O1", q: "Kedu aha ndị nkịtị na-akpọkarị atụmatụ ozi agha ma ọ bụ atụmatụ ọrụ agha?", options: ["Work plan ma ọ bụ project plan (atụmatụ ọrụ)", "Résumé", "Mmefu ego (budget)", "Crosswalk (ntụnyere nka)"], answer: 0, why: "Otu ndị ọrụ nkịtị na-akpọkarị ya work plan ma ọ bụ project plan." },
          { objective: "O6", q: "Gịnị mere ị ga-eji jiri ọrụ mmadụ dị ka \"Shift lead A\" kama aha na prompt AI?", options: ["AI apụghị ịgụ aha", "Iji debe ozi ndị otu gị na nzuzo", "Aha na-eme ka azịza dị ogologo", "Ọ dị ngwa ide"], answer: 1, why: "Ọrụ mmadụ na-enye AI ihe ọ chọrọ n'ekesaghị ozi ndị mmadụ." },
          { objective: "O1", q: "Atụmatụ AI tinyere nnukwu ọrụ n'ụbọchị otu onye nọ n'ezumike. Ị ga-eme:", options: ["Debe atụmatụ AI ahụ", "Kagbuo ọrụ ahụ", "Jiri uche gị dozie atụmatụ ahụ", "Rịọ onye ahụ ka ọ hapụ ezumike ya"], answer: 2, why: "Ị maara ihe AI amaghị; gị na-akwado atụmatụ ikpeazụ." },
          { objective: "O2", q: "Gịnị na-aba n'ahịrịokwu mbụ nke email BLUF?", options: ["Ekele ogologo", "Akụkọ ihe mere tupu", "Njakịrị", "Isi okwu ma ọ bụ arịrịọ"], answer: 3, why: "Isi okwu na-ebu ụzọ: isi okwu na-abịa na mbụ." },
          { objective: "O3", q: "Gịnị na-eme ka ọrụ a ga-arụ zuo ezu?", options: ["Otu onye nwe ya na ụbọchị ọ ga-agwụ", "Nkọwa ogologo", "Onye ọ bụla nwe ya", "Enweghị ụbọchị, ka ọ dị nro"], answer: 0, why: "Ọrụ a ga-arụ chọrọ otu onye nwe ya doro anya na ụbọchị ọ ga-agwụ." }
        ]
      }
    },
    {
      name: "Isi 2: Idu ndị mmadụ ebe AI bụ onye enyemaka gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịkwado nkọwa doro anya na nke ziri ezi",
          minutes: 5,
          goal: "Jiri AI dee nkọwa n'ụdị ọnọdụ-omume-mmetụta, wee mee ka ọ bụrụ nke gị.",
          text: [
            "Ezigbo nkọwa (feedback) doro anya ma gbasara omume, ọ bụghị agwa mmadụ. Ụzọ dị mfe bụ ọnọdụ, omume, mmetụta (SBI): \"N'ịnyefe shift na Tuzde (ọnọdụ), i lere anya n'iwu ọ bụla a na-emechabeghị (omume), shift na-esote wee malite n'enweghị igbu oge (mmetụta).\" Ọ na-arụ ọrụ maka otuto na maka mgbazi.",
            "AI nwere ike inyere gị aka ịkwado: \"Nyere m aka dee nkọwa SBI maka onye otu m nke bịaghị n'oge na nzukọ ụtụtụ ugboro atọ n'ọnwa a. Mee ka o nwee nkwanye ugwu ma jiri ajụjụ na-akpọ ya ka o kwuo nke ya mechie ya.\" Jiri ọrụ mmadụ, ọ bụghị aha.",
            "Nye ya n'onwe gị, ihu na ihu ma ọ bụ site n'oku, ma gee ntị. AI na-enyere gị aka ịkwado okwu; ntụkwasị obi n'etiti gị na ndị gị na-esi n'aka gị."
          ],
          steps: ["Họrọ otu ọnọdụ doro anya.", "Kọwaa omume ị hụrụ, ọ bụghị agwa onye ahụ.", "Kwuo mmetụta o nwere n'otu ma ọ bụ n'ọrụ.", "Rịọ AI ka o nyere aka kọwaa ya na nkwanye ugwu, na-eji ọrụ mmadụ kama aha.", "Nye ya n'onwe gị ma gee ntị."],
          words: [["SBI", "situation, behavior, impact (ọnọdụ, omume, mmetụta): ụzọ dị mfe isi nye nkọwa doro anya."], ["Omume (behavior)", "ihe mmadụ mere ma ọ bụ kwuru, nke ị nwere ike ịhụ ma ọ bụ ịnụ."]],
          slides: [
            { title: "Nkọwa SBI", bullets: ["Ọnọdụ: mgbe na ebe", "Omume: ihe ha mere", "Mmetụta: ihe o mere otu ma ọ bụ ọrụ"] },
            { title: "Ka AI nyere gị aka ịkwado", bullets: ["Jiri ọrụ mmadụ, ọ bụghị aha", "Rịọ maka okwu nwere nkwanye ugwu", "Jiri ajụjụ maka nke ha mechie ya"] },
            { title: "Gị na-enye ya", bullets: ["Ihu na ihu ma ọ bụ site n'oku", "Gee ntị", "Ntụkwasị obi na-esi n'aka gị, ọ bụghị ngwa ahụ"] }
          ],
          tryIt: "Chee otu ihe onye otu gị mere nke ọma n'oge na-adịbeghị anya. Rịọ ngwa enyemaka AI ka o nyere gị aka dee otuto SBI maka ya, na-eji ọrụ mmadụ kama aha. Wee degharịa ya n'okwu nke gị.",
          youCanNow: "ịkwado nkọwa ọnọdụ-omume-mmetụta doro anya na nke ziri ezi site n'enyemaka AI ma nye ya n'onwe gị.",
          quickCheck: [
            { objective: "O4", q: "Na nkọwa SBI, gịnị bụ akụkụ omume?", options: ["Echiche gị banyere agwa onye ahụ", "Ụbọchị nzukọ ahụ", "Ihe onye ahụ mere nke ị hụrụ ma ọ bụ nụrụ", "Mmetụta o nwere n'obi gị"], answer: 2, why: "Omume bụ ihe doro anya ị hụrụ, ọ bụghị ikpe gbasara onye ahụ." },
            { objective: "O4", q: "AI dere otuto maka onye otu gị nke dị ka okwu akwụkwọ siri ike. Gịnị ka ị ga-eme?", options: ["Degharịa ya n'okwu nke gị ma nye ya n'onwe gị", "Zipu ederede AI ahụ otu o si dị n'email", "Ka AI zipu ya", "Hapụ otuto ahụ"], answer: 0, why: "AI nwere ike inyere gị aka ịkwado, mana nkọwa kwesịrị ịdị n'okwu gị ma si n'aka gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Inyefe ọrụ site na ndepụta doro anya",
          minutes: 5,
          goal: "Jiri AI mee ndepụta inyefe ọrụ nke na-ekwu ọrụ ahụ, ọkwa, ụbọchị njedebe na oge nlele.",
          text: [
            "Ị maara commander's intent (ebumnuche onye ọchịagha): gwa ndị mmadụ ebumnuche na ọnọdụ njedebe, ọ bụghị naanị nzọụkwụ, ka ha nwee ike ịgbanwe mgbe ihe gbanwere. Inyefe ọrụ n'ebe ọrụ nkịtị na-arụ ọrụ otu ụzọ ahụ.",
            "Ezigbo inyefe ọrụ gụnyere: ọrụ ahụ, ihe mere o ji dị mkpa (ebumnuche), otu ọ ga-adị mgbe o mechara (ọkwa), ụbọchị njedebe, ihe enyemaka na ikike ha nwere, na mgbe ị ga-elele. Jụọ AI: \"Mee ndepụta inyefe ọrụ otu peeji maka inyefe akụkọ ngwaahịa kwa izu nye onye otu ọhụrụ. Tinye ebumnuche, ọkwa, ụbọchị njedebe, ihe enyemaka na oge nlele.\"",
            "Wee nyefee ya ihu na ihu, rịọ ha ka ha kọwaghachi ya, ma laghachi azụ. Lelee n'oge unu kwekọrịtara kama ịnọ na-agbaso ha anya mgbe niile."
          ],
          steps: ["Kpọọ aha ọrụ ahụ na ihe mere o ji dị mkpa.", "Kọwaa otu ọ ga-adị mgbe o mechara.", "Tọọ ụbọchị njedebe, ihe enyemaka na ikike.", "Rịọ AI ka o mee nke a ka ọ bụrụ ndepụta otu peeji.", "Nyefee ya, rịọ ha ka ha kọwaghachi ya, ma lelee dịka unu kwekọrịtara."],
          words: [["Inyefe ọrụ (delegate)", "inye onye ọzọ ọrụ na ikike ime ya."], ["Ebumnuche (intent)", "ihe mere ọrụ ji dị na ọnọdụ njedebe ya, ka ndị mmadụ nwee ike ịgbanwe mgbe ihe gbanwere."]],
          slides: [
            { title: "Ebumnuche onye ọchịagha, n'ụdị ndị nkịtị", bullets: ["Ebumnuche na ọnọdụ njedebe", "Ọ bụghị naanị nzọụkwụ", "Ka ndị mmadụ nwee ike ịgbanwe"] },
            { title: "Ezigbo inyefe ọrụ gụnyere", bullets: ["Ọrụ ahụ na ihe mere o ji dị mkpa", "Ọkwa na ụbọchị njedebe", "Ihe enyemaka, ikike na oge nlele"] },
            { title: "Wee laghachi azụ", bullets: ["Rịọ ha ka ha kọwaghachi ya", "Lelee n'oge unu kwekọrịtara", "Anọla na-agbaso ha anya mgbe niile"] }
          ],
          tryIt: "Họrọ otu ọrụ ị nwere ike inyefe onye ọzọ. Rịọ ngwa enyemaka AI ka o mee ndepụta inyefe ọrụ otu peeji nwere ebumnuche, ọkwa, ụbọchị njedebe, ihe enyemaka na oge nlele.",
          youCanNow: "inyefe ọrụ site na ndepụta doro anya nke na-enye ebumnuche, ọkwa, ụbọchị njedebe na oge nlele.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere ị ga-eji tinye ebumnuche mgbe ị na-enyefe ọrụ?", options: ["Ka onye ahụ ghara ịgbanwe ihe ọ bụla", "Ka onye ahụ nwee ike ịgbanwe ma ihe gbanwee", "Ka ị ghara ilele ọzọ", "Ka ọrụ ahụ were oge karịa"], answer: 1, why: "Ịmara ebumnuche na ọnọdụ njedebe na-enyere ndị mmadụ aka ime ezigbo mkpebi mgbe atụmatụ gbanwere." },
            { objective: "O5", q: "I nyefere akụkọ ga-agwụ na Fraịde. Gịnị ka ị ga-eme ọzọ?", options: ["Chere ruo Fraịde ma nwee olileanya", "Weghachi ọrụ ahụ ozugbo", "Megharịa ya n'onwe gị n'ajụghị ajụjụ", "Lelee n'oge unu kwekọrịtara"], answer: 3, why: "Nlele unu kwekọrịtara na-enyere gị aka ịhụ nsogbu n'oge n'enweghị ịchịkwa ihe niile n'onwe gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iji AI n'ụzọ kwesịrị ekwesị dị ka onye ndú",
          minutes: 5,
          goal: "Jiri iwu atọ maka iji AI n'ụzọ kwesịrị ekwesị na ozi otu na ụlọ ọrụ.",
          text: [
            "Dị ka onye ndú, ị na-egosi ụzọ. Iwu 1: gbasoo iwu AI nke onye were gị n'ọrụ. Ọtụtụ ụlọ ọrụ na-ekwu ngwa AI e kwadoro na ozi nwere ike ịba n'ime ha. Ọ bụrụ na iwu adịghị, jụọ.",
            "Iwu 2: debe ozi nzuzo ndị mmadụ n'ebe ọ na-adịghị na ngwa AI ọha: nsogbu ọrụ ha n'aha ha, ahụike, ụgwọ ọnwa, adreesị ụlọ, ma ọ bụ ihe ọ bụla a gwara gị na nzuzo. Debekwa ihe nzuzo ndị ahịa na ụlọ ọrụ n'ebe ọ na-adịghị. Jiri ọrụ mmadụ na nkọwa n'ozuzu.",
            "Iwu 3: gị nwe ihe si na ya pụta. Lelee eziokwu, nọmba na ụda tupu ihe ọ bụla apụọ. Ọ bụrụ na AI nyere aka dee ihe dị mkpa, gụọ okwu ọ bụla. Ịgwa otu gị otu ị si eji AI, na otu ha nwere ike isi jiri ya, na-ewulite ntụkwasị obi."
          ],
          steps: ["Chọta ma gụọ iwu AI nke onye were gị n'ọrụ, ma ọ bụ jụọ onye isi gị.", "Jiri naanị ngwa e kwadoro maka ozi ọrụ.", "Debe ozi nzuzo na ozi a na-ekwesịghị ikesa n'ebe ọ na-adịghị na AI ọha.", "Lelee ihe niile AI dere tupu ọ pụọ.", "Gwa otu gị otu e nwere ike isi jiri AI."],
          words: [["Iwu AI (AI policy)", "iwu onye were gị n'ọrụ gbasara ngwa AI e nwere ike iji na ozi nwere ike ịba n'ime ha."], ["Nzuzo (confidential)", "ozi e kwesịrị idebe n'ime otu ma ọ bụ ụlọ ọrụ."]],
          slides: [
            { title: "Iwu 1: Gbasoo iwu ụlọ ọrụ", bullets: ["Jiri ngwa AI e kwadoro", "Iwu adịghị? Jụọ"] },
            { title: "Iwu 2: Chebe ndị mmadụ", bullets: ["Ọ dịghị aha ya na nsogbu ọrụ, ahụike ma ọ bụ ụgwọ ọnwa", "Ọ dịghị ihe nzuzo ndị ahịa ma ọ bụ ụlọ ọrụ", "Jiri ọrụ mmadụ na okwu n'ozuzu"] },
            { title: "Iwu 3: Gị nwe ihe si na ya pụta", bullets: ["Lelee eziokwu, nọmba na ụda", "Gụọ okwu ọ bụla nke ọrụ dị mkpa", "Kwuo eziokwu n'ihu otu gị gbasara AI"] }
          ],
          tryIt: "Ọrụ ikpeazụ: maka otu nwere mmadụ atọ ruo isii, jiri ngwa enyemaka AI mee atụmatụ otu izu nwere ndị nwe ọrụ, dee email BLUF, ma mee ka obere ndetu nzukọ bụrụ tebụl ọrụ a ga-arụ. Jiri ọrụ mmadụ kama aha ma lelee na o nweghị ozi nzuzo n'ime ha ọ bụla.",
          youCanNow: "iji AI dị ka onye ndú n'ụzọ na-agbaso iwu, na-echebe ndị gị ma na-eme ka ị bụrụ onye na-aza ajụjụ.",
          quickCheck: [
            { objective: "O6", q: "Kedu iwu na-ebu ụzọ mgbe ị na-eji AI n'ọrụ?", options: ["Gbasoo iwu AI nke onye were gị n'ọrụ", "Jiri ngwa ọ bụla masịrị gị", "Tinye ihe niile ka AI mara ọnọdụ ya", "Ka AI mee mkpebi ikpeazụ"], answer: 0, why: "Iwu onye were gị n'ọrụ na-ekpebi ngwa na ozi ị nwere ike iji." },
            { objective: "O6", q: "Ị chọrọ enyemaka AI maka ndetu gbasara nsogbu ụgwọ ọnwa otu onye otu gị. Gịnị ka ị ga-eme?", options: ["Tinye aha ya na ozi ụgwọ ọnwa ya", "Tinye akwụkwọ ndekọ ya niile", "Hapụ ozi nzuzo ma kọwaa ọnọdụ ahụ site n'ọrụ mmadụ", "Tinye ya na mkparịta ụka ọha"], answer: 2, why: "Ụgwọ ọnwa na ozi onwe anaghị aba na ngwa AI ọha mgbe ọ bụla; ọrụ mmadụ na-edebe onye ahụ na nzuzo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Idu ndị mmadụ ebe AI bụ onye enyemaka gị",
        questions: [
          { objective: "O4", q: "Gịnị ka SBI pụtara?", options: ["Ọnọdụ, omume, mmetụta (situation, behavior, impact)", "Ndị ọrụ, mmefu ego, ngwaahịa", "Ọsọ, nguzozi, ebumnuche", "Nchekwa, ịkọ akụkọ, nlele"], answer: 0, why: "SBI bụ ụzọ dị mfe maka nkọwa doro anya." },
          { objective: "O4", q: "Kedu nkọwa gbadoro ụkwụ n'omume?", options: ["\"Ị bụ onye umengwụ.\"", "\"I bịara nkeji 15 n'azụ oge na nzukọ ụtụtụ atọ n'ọnwa a.\"", "\"I nwere agwa ọjọọ.\"", "\"Ị kacha njọ.\""], answer: 1, why: "Ọ na-akọwa ihe onye ahụ mere, nke ị nwere ike ịhụ." },
          { objective: "O5", q: "N'inyefe ọrụ, \"ebumnuche\" pụtara:", options: ["Naanị nzọụkwụ kpọmkwem", "Naanị ụbọchị njedebe", "Ebumnuche na ọnọdụ njedebe, ka ndị mmadụ nwee ike ịgbanwe", "Mmetụta gị banyere ọrụ ahụ"], answer: 2, why: "Ebumnuche na-enyere ndị mmadụ aka ịgbanwe mgbe ihe gbanwere." },
          { objective: "O6", q: "Ụlọ ọrụ gị enweghị iwu AI. Gịnị ka ị ga-eme?", options: ["Jiri ngwa ọ bụla na ozi ọ bụla", "Machibido onye ọ bụla AI n'onwe gị", "Tinye ozi ndị ahịa na chatbot ọha", "Jụọ onye isi gị tupu i jiri AI na ozi ọrụ"], answer: 3, why: "Mgbe iwu adịghị, jụọ tupu i tinye ozi ọrụ n'ime AI." },
          { objective: "O6", q: "Kedu nke dị mma itinye na prompt AI ọha?", options: ["\"Otu onye otu m abịaghị n'oge na nzukọ ụtụtụ atọ\"", "Nsogbu ahụike nke onye ọrụ a kpọrọ aha", "Nọmba akaụntụ ndị ahịa", "Adreesị ụlọ ndị otu gị"], answer: 0, why: "Nkọwa n'ozuzu nke na-eji ọrụ mmadụ na-edebe ozi ndị mmadụ na nzuzo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ịrụ Ọrụ Nke Ọma na Idu Ndị Mmadụ",
    questions: [
      { objective: "O1", q: "Atụmatụ ọrụ n'ebe ọrụ nkịtị gụnyere:", options: ["Naanị onye bụ onye isi", "Gịnị, mgbe ole, onye na gịnị ka a ga-eji", "Naanị mmefu ego", "Naanị oge nzukọ"], answer: 1, why: "Dị ka atụmatụ ozi agha, ọ gụnyere ọrụ, ụbọchị, ndị mmadụ na ihe enyemaka." },
      { objective: "O1", q: "Mgbe ị na-arịọ AI ka o hazie ọrụ, ọ na-enyere aka ịrịọ maka:", options: ["Usoro na-enweghị isi", "Usoro mkpụrụ akwụkwọ", "Usoro dịka ihe ngwa ngwa na ihe dị mkpa", "Ọrụ kacha ogologo na mbụ"], answer: 2, why: "Ihe ngwa ngwa na ihe dị mkpa na-enye usoro ihe bu ụzọ bara uru." },
      { objective: "O1", q: "Ihe ngwa ngwa na ihe dị mkpa:", options: ["Na-adị otu mgbe niile", "Bụ okwu abụọ maka \"dị mfe\"", "Bụ naanị okwu ndị agha", "Anaghị adị otu mgbe niile"], answer: 3, why: "Ngwa ngwa pụtara ugbu a; dị mkpa pụtara na ọ kacha baa uru n'ebumnuche ahụ." },
      { objective: "O1", q: "Onye na-akwado atụmatụ ikpeazụ nke otu ahụ?", options: ["Gị, onye ndú", "AI", "Onye otu kacha ọhụrụ", "Ọ dịghị onye"], answer: 0, why: "Ị na-eji uche AI na-enweghị." },
      { objective: "O2", q: "BLUF pụtara:", options: ["Briefing, lesson, update, follow-up", "Bottom line up front (isi okwu na-ebu ụzọ)", "Basic leadership under fire", "Best last unit file"], answer: 1, why: "Tinye isi okwu na mbụ." },
      { objective: "O2", q: "Ide ihe n'ụdị ndị agha nwere ike ịdị ka okwu ike nye ndị nkịtị. Ezigbo ndozi bụ:", options: ["Mee ka ọ dị ogologo", "Tinyekwuo mkpụrụ okwu mkpirisi (acronyms)", "Tinye ahịrị nke enyi dị ka \"Obi dị m ụtọ ịkparịta ya\"", "Dee ya niile na mkpụrụ akwụkwọ ukwu"], answer: 2, why: "Ụda enyi na nke ọkachamara na-enyere ndị nkịtị na-agụ ya aka." },
      { objective: "O2", q: "Tupu i zipu email AI dere, ị kwesịrị:", options: ["Izipu ya n'agụghị ya", "Itinye okwu ndị agha", "Ime ka ọ dị ogologo", "Ịgụ ya dị ka onye ga-anata ya ma dozie ihe ọ bụla na-edoghị anya"], answer: 3, why: "Gị nwe ihe ị na-ezipu." },
      { objective: "O3", q: "Nchịkọta nzukọ kwesịrị inwe:", options: ["Mkpebi, ọrụ a ga-arụ nwere onye nwe ya na ụbọchị, na ajụjụ fọdụrụ", "Naanị ndị bịara", "Naanị njakịrị", "Naanị oge mmalite"], answer: 0, why: "Nke a na-agwa onye ọ bụla onye ga-eme gịnị na mgbe ole." },
      { objective: "O6", q: "Tupu i tinye ndetu nzukọ na AI ọha, ị kwesịrị:", options: ["Itinye nọmba ekwentị onye ọ bụla", "Ịdochie aha na ọrụ mmadụ ma wepụ ozi nzuzo", "Itinye ihe nzuzo ụlọ ọrụ", "Ọ dịghị ihe ị ga-eme"], answer: 1, why: "Buru ụzọ chebe ozi ndị mmadụ." },
      { objective: "O6", q: "Iji ngwa AI na-achịkọta nzukọ n'ọrụ dị mma mgbe:", options: ["Ọ dịghị onye maara banyere ya", "I ji akaụntụ onwe gị na ozi ụlọ ọrụ", "Onye were gị n'ọrụ kwere ya, a gwakwara ndị mmadụ", "Mgbe niile, n'agbanyeghị iwu"], answer: 2, why: "Gbasoo iwu onye were gị n'ọrụ ma kwuo eziokwu gbasara idekọ." },
      { objective: "O3", q: "Ọrụ a ga-arụ na-enweghị onye nwe ya kwesịrị:", options: ["Ka a leghara ya anya", "Ka e nye ya onye ọ bụla", "Ka e hichapụ ya", "Ka e nye ya otu onye nwe ya na ụbọchị ọ ga-agwụ"], answer: 3, why: "Mgbe ọtụtụ mmadụ nwe ọrụ, ọ na-abụkarị na ọ dịghị onye mere ya." },
      { objective: "O4", q: "Ezigbo nkọwa gbasara:", options: ["Omume ị hụrụ", "Agwa onye ahụ", "Asịrị", "Ọnọdụ obi gị"], answer: 0, why: "Omume doro anya ma ziri ezi." },
      { objective: "O4", q: "Na nkọwa SBI, \"mmetụta\" (impact) bụ:", options: ["Ọkwa onye ahụ", "Ihe o mere otu ma ọ bụ ọrụ", "Ntaramahụhụ", "Ụbọchị"], answer: 1, why: "Mmetụta na-akọwa ihe mere omume ahụ ji dị mkpa." },
      { objective: "O4", q: "Onye kwesịrị inye nkọwa AI nyere aka kwado?", options: ["AI site n'email", "Onye ọrụ ibe gị", "Gị, ihu na ihu ma ọ bụ site n'oku", "Ọ dịghị onye"], answer: 2, why: "Ntụkwasị obi na-esi n'aka gị, ọ bụghị ngwa ahụ." },
      { objective: "O5", q: "Mgbe ị na-enyefe ọrụ, mgbe i nyefechara ya ị kwesịrị:", options: ["Mee ya n'onwe gị n'agbanyeghị", "Na-agbaso nzọụkwụ ọ bụla anya", "Ghara ilele ọzọ", "Lelee n'oge unu kwekọrịtara"], answer: 3, why: "Nlele unu kwekọrịtara na-edozi ntụkwasị obi na ịza ajụjụ." },
      { objective: "O5", q: "Ezigbo inyefe ọrụ gụnyere:", options: ["Ebumnuche, ọkwa, ụbọchị njedebe, ihe enyemaka na oge nlele", "Naanị ụbọchị njedebe", "Naanị \"mee ya\"", "Okwuntughe gị"], answer: 0, why: "Akụkụ ndị ahụ na-enyere onye ahụ aka ime nke ọma." },
      { objective: "O5", q: "Ịrịọ onye ahụ ka ọ kọwaghachi ọrụ ahụ na-enyere gị aka:", options: ["Imefu oge", "Ịkwado na ọ ghọtara", "Ịnwale ncheta ya maka egwuregwu", "Izere inye ebumnuche"], answer: 1, why: "Ọ na-ejide nghọtahie n'oge." },
      { objective: "O6", q: "Iwu 1 maka iji AI dị ka onye ndú bụ:", options: ["Jiri ngwa ọ bụla n'efu maka ihe niile", "Ejila AI mgbe ọ bụla", "Gbasoo iwu AI nke onye were gị n'ọrụ", "Ka otu ahụ kpebie naanị ha"], answer: 2, why: "Iwu na-ekwu ngwa na ozi e kwere." },
      { objective: "O6", q: "Kedu nke ekwesịghị ịba na ngwa AI ọha mgbe ọ bụla?", options: ["\"Hazie izu m\"", "\"Degharịa email a\"", "Ndepụta aha ọrụ", "Ụgwọ ọnwa na ozi ahụike nke onye ọrụ a kpọrọ aha"], answer: 3, why: "Nke ahụ bụ ozi nzuzo a na-ekwesịghị ikesa." },
      { objective: "O6", q: "Ọ bụrụ na AI nyere aka dee akụkọ dị mkpa, onye na-aza ajụjụ maka ya?", options: ["Gị", "Ụlọ ọrụ AI ahụ", "Onye na-agụ ya", "Ọ dịghị onye"], answer: 0, why: "Gị nwe ihe si na ya pụta, ya mere lelee okwu ọ bụla." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 4, 7, 8, 10, 12, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Atụmatụ izu", objective: "O1", notYet: "Ọrụ adịghị n'usoro ihe bu ụzọ, ma ọ bụ ụfọdụ enweghị onye nwe ha.", meets: "Atụmatụ otu izu nwere ihe ndị bu ụzọ na ọrụ onye nwe ya maka ọrụ ọ bụla.", exceeds: "Onye na-amụ ihe gbanwere ihe AI mehiere ma nwee ike ikwu ihe mere." },
      { name: "Email BLUF", objective: "O2", notYet: "Isi okwu zoro ezo, ma ọ bụ ụda ya dị ka okwu ike.", meets: "Ahịrịokwu mbụ na-ekwu isi okwu, ya na isi okwu mkpụmkpụ na nzọụkwụ ọzọ n'ụda ọkachamara.", exceeds: "A gụrụ email ahụ dị ka onye ga-anata ya ma mee ka o nwee okwu ole na ole kacha nta." },
      { name: "Ọrụ a ga-arụ", objective: "O3", notYet: "Ụfọdụ ọrụ a ga-arụ enweghị onye nwe ha ma ọ bụ ụbọchị ọ ga-agwụ.", meets: "Mkpebi, ọrụ a ga-arụ nke ọ bụla nwere otu onye nwe ya na ụbọchị ọ ga-agwụ, na ajụjụ fọdụrụ.", exceeds: "Ụbọchị ọ ga-agwụ dabara atụmatụ izu ahụ, ajụjụ fọdụrụ nwekwara onye ga-aza ha." },
      { name: "Nzuzo na iwu", objective: "O6", notYet: "Aha ma ọ bụ ozi nzuzo dị na prompt ma ọ bụ n'ọrụ ahụ.", meets: "Ọrụ mmadụ kama aha, na-enweghị ozi nzuzo ọ bụla ebe ọ bụla.", exceeds: "Onye na-amụ ihe kpọrọ aha iwu AI nke onye were ya n'ọrụ ma ọ bụ ajụjụ ọ ga-ajụ onye isi ya gbasara ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha jiri atụmatụ izu, email BLUF ma ọ bụ tebụl ọrụ a ga-arụ n'ọrụ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe banyere ma ọ bụ nọgidere n'ọkwa onye isi otu, onye nlekọta ma ọ bụ manịja n'ebe ọrụ nkịtị n'ime ọnwa 6",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ gbasara ndị agha ochie ma ọ bụ idu ndú n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ smartphone nwere ịntanetị",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini, ma ọ bụ ngwa onye were gị n'ọrụ kwadoro",
      "Ndepụta ọrụ omume na ndetu nzukọ na-eji ọrụ mmadụ, ọ bụghị aha",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Nye ọnọdụ otu omume nwere ọrụ mmadụ dị ka \"Shift lead A\" ka ọ ghara inwe onye ga-eji aha ma ọ bụ ozi ezi ndị ọrụ ibe ya.",
      "Rịọ ndị na-amụ ihe ka ha lelee iwu AI nke onye were ha n'ọrụ tupu ha ejiri AI na ezi ozi ọrụ.",
      "Kpọkọta ndị na-amụ ihe abụọ abụọ ka ha gụọ email BLUF ibe ha dị ka onye ga-anata ya ma nye otu ndụmọdụ.",
      "Mee omume nkọwa SBI n'olu dị elu n'abụọ abụọ mgbe AI dechara ya, ka ndị na-amụ ihe mee ka ọ bụrụ nke ha.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
