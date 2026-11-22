"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-intro-ai-ig",
  lang: "ig",
  translationOf: "smallbiz-intro-ai",
  category: "Small Business",
  name: "Mmalite AI maka Obere Azụmahịa",
  skills: "Ịkọwa ihe AI nwere ike imere azụmahịa, Ịchọta ọrụ ndị ga-echekwa oge, Ide prompt maka azụmahịa, Ịlele na ịhazi ihe AI dere, Ichebe ozi ndị ahịa na ozi azụmahịa",
  outcome: "iji ngwa enyemaka AI n'efu mechaa otu ezi ọrụ maka azụmahịa gị, dị ka ọkwa nye ndị ahịa, nkọwa ngwaahịa ma ọ bụ ndepụta ihe ị ga-eme n'izu: ide prompt doro anya nwere ozi azụmahịa gị, ime ka ihe mbụ ahụ ka mma, ịlele eziokwu ọ bụla, na idebe ozi nzuzo n'ebe ọ na-adịghị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa nụrụ maka AI mana ha ejibeghị ya nke ukwuu: ndị nwe ụlọ ahịa, ndị nwe ụlọ nri na ụgbọala nri, ndị na-akpụ isi na ndị na-edozi isi, ndị na-asacha ụlọ, ndị ọrụ ụlọ (contractors) na ndị na-azụ ahịa n'ụlọ ha. Ọtụtụ ndị na-amụ ihe anyị bụ ndị na-amalite azụmahịa nke mbụ na ndị si n'obere agbụrụ (minority), ndị na-arụ ọrụ niile n'onwe ha.",
    "Ị ga-amụta ihe ngwa enyemaka AI bụ, ọrụ ndị dị n'azụmahịa gị ọ nwere ike ime ka ha gaa ngwa ngwa, otu esi arịọ ya enyemaka site n'ozi azụmahịa gị, otu esi elele ihe o mere, na otu esi echebe ozi ndị ahịa gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\" site n'iji azụmahịa nke gị. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Họrọ otu ezi ọrụ n'azụmahịa gị n'izu a (akwụkwọ ọkwa maka oge mmeghe ọhụrụ, nkọwa ngwaahịa, azịza nye onye ahịa, ma ọ bụ ndepụta ihe ị ga-eme). Jiri ngwa enyemaka AI n'efu mee ya: dee prompt nwere ozi azụmahịa gị, rịọ opekata mpe otu mgbanwe, lelee eziokwu ọ bụla (ọnụahịa, oge mmeghe, adreesị) n'onwe gị, wepụ ozi nzuzo ọ bụla, ma jiri ya n'azụmahịa gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa nụrụ maka AI mana ha ejibeghị ya nke ukwuu: ndị nwe ụlọ ahịa, ụlọ nri na ụgbọala nri, ndị na-akpụ isi na ndị na-edozi isi, ndị na-asacha ụlọ, ndị ọrụ ụlọ (contractors) na ndị na-azụ ahịa n'ụlọ ha. Ọtụtụ bụ ndị na-amalite azụmahịa nke mbụ na ndị si n'obere agbụrụ (minority), ndị na-arụ ọrụ niile n'onwe ha.",
    startingPoint: "Ha na-agba azụmahịa ha kwa ụbọchị ma na-eji ekwentị akpọ oku, ezipu ozi ma jiri social media. Ha anaghị eji ngwa enyemaka AI, ma ọ bụ na-eji ya ntakịrị, ha amakwaghị ihe dị mma ikesa ya.",
    gap: "Ndị nwe azụmahịa na-arụ ọrụ niile n'onwe ha na-etinye ọtụtụ awa n'ọrụ ide ihe dị ka akwụkwọ ọkwa, azịza na nkọwa. Ha kwesịrị iji ngwa enyemaka AI n'efu mechaa ezi ọrụ ngwa ngwa ma na-elele eziokwu ọ bụla ma na-echebe ozi ndị ahịa, ka ha wee chekwaa oge n'emebighị aha ọma ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa, nke a na-ejikarị n'etiti ndị ahịa",
      "Oge: nkuzi ihe dị ka nkeji 5 nke dabara n'ụbọchị ọrụ juru eju",
      "Iwu: ụtụ isi, ikike azụmahịa (license) na okwu iwu na-aga n'aka ndị mmadụ na isi iyi gọọmentị, ọ bụghị AI",
      "Nzuzo: enweghị aha ndị ahịa, nọmba ekwentị, nọmba kaadị ma ọ bụ ozi nzuzo azụmahịa n'ime ngwa AI"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọmụmaatụ ọrụ azụmahịa", action: "ịkọwa ihe ngwa enyemaka AI nwere ike ime na ihe ọ na-enweghị ike ime maka obere azụmahịa", standard: "na-ekwu na ọ na-ede ihe mbụ (draft), na ọ maara ozi azụmahịa gị naanị ma ọ bụrụ na i gwara ya" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ ndị dị n'azụmahịa gị", action: "idepụta ọrụ ndị AI nwere ike ime ka ha gaa ngwa ngwa na ọrụ ndị chọrọ ndị mmadụ ma ọ bụ isi iyi gọọmentị", standard: "nwere opekata mpe ọrụ ise na \"Nwalee ya na AI\" na ọrụ atọ na \"Ndị mmadụ na isi iyi gọọmentị\"" },
    { id: "O3", condition: "Mgbe e nyere gị ezi ọrụ azụmahịa", action: "ide prompt nwere ozi azụmahịa gị na otu ị chọrọ ka azịza ahụ dị", standard: "nke mere na azịza mbụ ga-adaba azụmahịa gị" },
    { id: "O4", condition: "Mgbe e nyere gị ihe mbụ AI dere", action: "ịrịọ mgbanwe otu n'otu oge ma hazie nke ikpeazụ n'okwu nke gị", standard: "ruo mgbe ọ bụrụ ihe ị ga-eji n'ezie" },
    { id: "O5", condition: "Mgbe e nyere gị ihe AI dere maka ndị ahịa", action: "ịlele eziokwu na nkwa ọ bụla tupu i tinye ya n'ịntanetị, bipụta ya ma ọ bụ zipu ya", standard: "na-elele ọnụahịa, oge mmeghe, adreesị na nkwa, ma na-edozi ma ọ bụ wepụ ihe ọ bụla ezighi ezi" },
    { id: "O6", condition: "Mgbe ị na-eji AI maka azụmahịa gị", action: "idebe ozi nzuzo ndị ahịa na nke azụmahịa n'ebe AI na-adịghị ma hụ aghụghọ ịkwụ ụgwọ", standard: "site n'iji ihe nnọchi na ịlele arịrịọ ịkwụ ụgwọ ngwa ngwa na nọmba ị maralarị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe AI nwere ike imere azụmahịa gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ngwa enyemaka AI bụ, n'asụsụ azụmahịa",
          minutes: 4,
          goal: "Kọwaa ihe ngwa enyemaka AI nwere ike ime na ihe ọ na-enweghị ike ime maka obere azụmahịa.",
          text: [
            "Ngwa enyemaka AI bụ mmemme kọmputa ị nwere ike ide ihe na ya ma ọ bụ gwa ya okwu n'asụsụ nkịtị. Ị rịọ ya ihe, ọ dere ya maka gị n'ime sekọnd ole na ole. Ndị a ma ama na-akwụghị ụgwọ gụnyere ChatGPT, Microsoft Copilot na Google Gemini.",
            "Were ya dị ka onye enyemaka na-eme ngwa ngwa maka ide ihe na iche echiche. O nwere ike ide akwụkwọ mgbasa ozi (flyer), nkọwa nri dị na menu, azịza nye nyocha (review) onye ahịa, otu e si edozi ndepụta ọnụahịa, ozi social media ma ọ bụ ndepụta ihe a ga-eme tupu e meghee ụlọ ahịa.",
            "Ọ bụghị onye na-edekọ ego gị (accountant), ọka iwu gị ma ọ bụ onye gị na ya na-azụ ahịa. Ọ maghị ọnụahịa gị, ndị ahịa gị ma ọ bụ obodo gị ma ọ bụrụ na i gwaghị ya, o nwekwara ike ime mperi ma dị ka o ji n'aka. Ị ka bụ onye nwe azụmahịa: gị na-ekpebi ihe ị ga-eji."
          ],
          words: [["AI", "mkpụrụ okwu bekee maka artificial intelligence (ọgụgụ isi arụrụ arụ): mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ, dị ka ide ihe."], ["Ngwa enyemaka AI", "mmemme AI ị na-akparịta ụka na ya site n'ide ihe ma ọ bụ ikwu okwu, dị ka ChatGPT, Copilot ma ọ bụ Gemini."], ["Ihe mbụ (draft)", "ụdị mbụ nke ihe e dere, nke ị ga-elele ma gbanwee."]],
          slides: [
            { title: "Ngwa enyemaka AI bụ...", bullets: ["Mmemme ị na-akparịta ụka na ya n'okwu nkịtị", "Onye enyemaka na-eme ngwa ngwa maka ide ihe na iche echiche", "Nke n'efu: ChatGPT, Copilot, Gemini"] },
            { title: "N'obere azụmahịa, o nwere ike ide", bullets: ["Akwụkwọ mgbasa ozi, akwụkwọ ọkwa na ozi social media", "Nkọwa nri na nkọwa ngwaahịa", "Azịza nye ndị ahịa na nye nyocha (review)", "Ndepụta ihe a ga-eme na usoro oge"] },
            { title: "Ọ BỤGHỊ", bullets: ["Onye na-edekọ ego gị, ọka iwu gị ma ọ bụ onye gị na ya na-azụ ahịa", "Onye maara ọnụahịa gị ma ọ bụrụ na i kwughị ha", "Onye na-eziri ezi mgbe niile: gị bụ onye nwe azụmahịa"] }
          ],
          tryIt: "Dee ọrụ ide ihe atọ i mere maka azụmahịa gị n'ọnwa gara aga, dịka ọmụmaatụ akwụkwọ ọkwa, ozi i zigaara onye ahịa, ma ọ bụ ndepụta ọnụahịa. Gbaa nke were gị oge kacha ogologo gburugburu.",
          youCanNow: "ikwu ihe ngwa enyemaka AI bụ ma kpọọ aha ọrụ ide ihe n'azụmahịa gị ọ nwere ike inyere aka.",
          quickCheck: [
            { objective: "O1", q: "Ebee ka ngwa enyemaka AI si enweta ọnụahịa na oge mmeghe azụmahịa gị?", options: ["Ọ na-achọ ha n'ụlọ akụ gị", "Ọ maara ha mgbe niile", "Site n'aka gị, mgbe i gwara ya", "Site n'ekwentị ndị ahịa gị"], answer: 2, why: "Ngwa enyemaka AI maara ozi azụmahịa gị naanị ma ọ bụrụ na i nyere ya ha." },
            { objective: "O1", q: "AI dere akwụkwọ ọkwa maka ụlọ ahịa gị. Onye na-ekpebi ma a ga-eji ya?", options: ["Ụlọ ọrụ AI ahụ", "Gị, onye nwe azụmahịa", "Ndị ahịa gị", "Ọ dịghị onye; ọ na-etinye onwe ya"], answer: 1, why: "Ọ bụ gị na-aza ajụjụ maka ihe ọ bụla azụmahịa gị wepụtara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịchọta ọrụ ndị kwesịrị inye AI",
          minutes: 5,
          goal: "Mee ndepụta ọrụ n'azụmahịa gị AI nwere ike ime ka ha gaa ngwa ngwa, na ndị ọ na-ekwesịghị imetụ aka.",
          text: [
            "Ezigbo ọrụ AI bụ ndị a na-emeghachi, ndị e dere ede, na ndị ihe egwu ha dị ala: ịza otu ajụjụ ahụ, ịkọwa ngwaahịa, ide ozi social media, ime usoro oge na ndepụta ihe a ga-eme, ịchịkọta email ogologo, ma ọ bụ ịgbanwe ndetu ndị gbasasịrị ka ha bụrụ ndepụta doro anya.",
            "Ekwela ka AI mee mkpebi ikpeazụ gbasara ego, ụtụ isi, nkwekọrịta (contracts), iwe mmadụ n'ọrụ na ịchụ mmadụ n'ọrụ, iwu ahụike na nchekwa, na ihe ọ bụla gbasara iwu. O nwere ike inyere gị aka ịkwado ajụjụ ị ga-ajụ onye na-edekọ ego gị, mana ọ bụghị onye na-edekọ ego.",
            "Ule dị mfe: ọ bụrụ na mperi ga-adị mfe ịhụ na idozi, AI nwere ike inye aka. Ọ bụrụ na mperi nwere ike ime ka i tufuo ego, ntụkwasị obi onye ahịa ma ọ bụ ka a taa gị ntaramahụhụ (fine), mmadụ na-elele ya, gị onwe gị na-elelekwa isi iyi gọọmentị."
          ],
          steps: ["Depụta ọrụ ndị ị na-arụ kwa izu.", "Kaa nke ọ bụla akara: a na-emeghachi ya? e dere ede? ihe egwu ya dị ala?", "Tinye ọrụ nwere \"ee\" atọ na ndepụta \"Nwalee ya na AI\".", "Tinye mkpebi gbasara ego, iwu na nchekwa na ndepụta \"Ndị mmadụ na isi iyi gọọmentị\"."],
          words: [["Ọrụ ihe egwu ya dị ala", "ọrụ ebe mperi dị mfe ịhụ na idozi."], ["Ọrụ a na-emeghachi", "ihe ị na-eme ugboro ugboro, dị ka ịza otu ajụjụ ahụ."]],
          slides: [
            { title: "Ezigbo ọrụ AI", bullets: ["A na-emeghachi ya: otu ajụjụ ahụ kwa ụbọchị", "E dere ede: ozi, nkọwa, azịza", "Ihe egwu ya dị ala: mperi dị mfe ịhụ"] },
            { title: "Hapụ ha n'aka ndị mmadụ na isi iyi gọọmentị", bullets: ["Ego, ụtụ isi na nkwekọrịta", "Iwe mmadụ n'ọrụ na ịchụ mmadụ n'ọrụ", "Iwu ahụike, nchekwa na iwu ndị ọzọ"] },
            { title: "Ule dị ngwa", bullets: ["Ọ dị mfe ịhụ na idozi? AI nwere ike inye aka", "O nwere ike ime ka i tufuo ego, ntụkwasị obi ma ọ bụ ka a taa gị fine? Mmadụ na-elele ya"] }
          ],
          tryIt: "Mee ndepụta abụọ maka azụmahịa gị: \"Nwalee ya na AI\" (opekata mpe ọrụ ise) na \"Ndị mmadụ na isi iyi gọọmentị\" (opekata mpe atọ).",
          youCanNow: "ikewa ọrụ ndị dị n'azụmahịa gị ka ọ bụrụ ndị AI nwere ike inyere aka na ndị ndị mmadụ ga-arụrịrị.",
          quickCheck: [
            { objective: "O2", q: "Kedu ọrụ dabara AI nke ọma?", options: ["Ikpebi otu ị ga-esi tinye ụtụ isi gị", "Ịbịanye aka n'akwụkwọ mgbazinye ụlọ (lease)", "Ịhọrọ ụdị ikike azụmahịa (license)", "Ide otu azịza ahụ nye ajụjụ ndị ahịa na-ajụkarị"], answer: 3, why: "Ọrụ a na-emeghachi, e dere ede, nke ihe egwu ya dị ala dị mma inye AI." },
            { objective: "O2", q: "Ị chọrọ ịmata ikike (permit) ụgbọala nri gị chọrọ. Gịnị ka ị ga-eme?", options: ["Lelee peeji ma ọ bụ ọfịs gọọmentị n'onwe ya", "Jiri ihe ọ bụla AI kwuru", "Jụọ onye ahịa", "Chee ihe ọ bụ ma dozie ya emesịa"], answer: 0, why: "Mperi nwere ike ime ka a taa gị fine, ya mere mmadụ na-elele isi iyi gọọmentị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ide prompt azụmahịa doro anya",
          minutes: 5,
          goal: "Dee prompt nwere ozi azụmahịa gị ka azịza ahụ dabara azụmahịa gị.",
          text: [
            "Ihe ị na-ede nye ngwa enyemaka AI ka a na-akpọ prompt. Ka ọ na-amatakwu banyere azụmahịa gị, ka azịza ahụ na-adabakwu. Ezigbo prompt azụmahịa nwere akụkụ anọ: onye ị bụ, ihe ị chọrọ, onye ọ bụ maka ya, na otu o kwesịrị ịdị.",
            "Ọmụmaatụ: \"Enwere m obere ụlọ nri Caribbean na Fresno. Dee obere akwụkwọ ọkwa maka ọnụ ụzọ na-ekwu na anyị ga-emechi n'elekere 8 nke abalị na Sọnde site na May 5. Okwu enyi, ihe na-erughị okwu 30.\"",
            "Prompt na-adịghị ike dị ka \"dee akwụkwọ ọkwa\" na-eme ka AI chepụta ihe ị pụtara. Tinye ezi ozi gị: ụdị azụmahịa gị, obodo gị, oge mmeghe gị, ụdị okwu gị. Hapụ ozi nzuzo dị ka nọmba ụlọ akụ ma ọ bụ nọmba ekwentị onye ahịa."
          ],
          steps: ["Onye ị bụ: ụdị azụmahịa gị na ebe ọ dị.", "Ihe ị chọrọ: kpọmkwem ihe ahụ.", "Onye ọ bụ maka ya: ndị ahịa, ndị ọrụ gị, onye na-enye gị ngwaahịa.", "Otu o kwesịrị ịdị: ogologo ya, ụdị okwu, ndepụta ma ọ bụ paragraf."],
          words: [["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI iji rịọ ya ihe."], ["Ụdị okwu (tone)", "otu ihe e dere si ada: dị ka enyi, nkwanye ugwu, ihe ọchị."]],
          slides: [
            { title: "Akụkụ anọ nke prompt azụmahịa", bullets: ["1. Onye ị bụ", "2. Ihe ị chọrọ", "3. Onye ọ bụ maka ya", "4. Otu o kwesịrị ịdị"] },
            { title: "Ọmụmaatụ", bullets: ["\"Enwere m obere ụlọ nri Caribbean na Fresno.", "Dee akwụkwọ ọkwa ọnụ ụzọ: anyị na-emechi n'elekere 8 nke abalị na Sọnde site na May 5.", "Okwu enyi, ihe na-erughị okwu 30.\""] },
            { title: "Nke na-adịghị ike na nke doro anya", bullets: ["Nke na-adịghị ike: \"dee akwụkwọ ọkwa\"", "Nke doro anya: azụmahịa gị, ozi ya, ụdị okwu ya", "Mgbe ọ bụla: ọ bụghị nọmba ụlọ akụ ma ọ bụ nọmba ekwentị onye ahịa"] }
          ],
          tryIt: "Họrọ otu ọrụ site na ndepụta \"Nwalee ya na AI\" gị. Dee prompt nwere akụkụ anọ ahụ niile, zipu ya na ngwa enyemaka AI n'efu, ma gụọ azịza ya.",
          youCanNow: "ide prompt azụmahịa nwere onye ị bụ, ihe ị chọrọ, onye ọ bụ maka ya na otu o kwesịrị ịdị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ prompt?", options: ["Akwụkwọ ụgwọ site n'ụlọ ọrụ AI", "Ihe ị na-ede iji rịọ AI ihe", "Akwụkwọ ọkwa dị na windo gị", "Nyocha (review) onye ahịa"], answer: 1, why: "Prompt bụ arịrịọ gị nye AI." },
            { objective: "O3", q: "Ị chọrọ akwụkwọ ọkwa maka oge mmeghe ụbọchị ezumike. Kedu prompt ị ga-ede?", options: ["\"Mee akwụkwọ ọkwa.\"", "\"Oge mmeghe.\"", "\"Enwere m ụlọ achịcha na Fresno. Dee obere akwụkwọ ọkwa: anyị emechiri na Tọzde maka ezumike. Okwu enyi, ihe na-erughị okwu 20.\"", "\"Dee ihe ọma.\""], answer: 2, why: "Ụdị azụmahịa, obodo, ọrụ ahụ na ụdị okwu na-enye AI ihe ọ chọrọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe AI nwere ike imere azụmahịa gị",
        questions: [
          { objective: "O1", q: "Gịnị bụ ngwa enyemaka AI?", options: ["Onye ọrụ ọhụrụ", "Mmemme ị na-akparịta ụka na ya nke na-ede ihe mbụ (draft)", "Ụlọ akụ", "Igwe ndekọ ego (cash register)"], answer: 1, why: "Ọ bụ mmemme kọmputa ị na-ede ihe na ya ma ọ bụ gwa okwu." },
          { objective: "O2", q: "Kedu ọrụ dị mma inye ngwa enyemaka AI?", options: ["Ikpebi ma ị ga-abịanye aka n'akwụkwọ mgbazinye ụlọ (lease)", "Ịchụ onye ọrụ n'ọrụ", "Itinye ụtụ isi gị naanị gị", "Ide nkọwa ngwaahịa mbụ"], answer: 3, why: "Nkọwa ngwaahịa bụ ihe e dere ede, a na-emeghachi ya, ihe egwu ya dịkwa ala." },
          { objective: "O2", q: "Mperi nwere ike ime ka a taa gị fine. Gịnị ka ị ga-eme?", options: ["Mee ka mmadụ lelee ya n'isi iyi gọọmentị", "Hapụ AI ka o kpebie", "Leghara ya anya", "Jụọ AI ugboro abụọ"], answer: 0, why: "Ọrụ ihe egwu ya dị elu chọrọ mmadụ na isi iyi gọọmentị." },
          { objective: "O3", q: "Kedu prompt azụmahịa kacha doo anya?", options: ["\"akwụkwọ ọkwa\"", "\"nyere azụmahịa m aka\"", "\"Enwere m ụlọ ịkpụ isi na Oakland. Dee obere akwụkwọ ọkwa: anyị emechiri na Mọnde July 4. Okwu enyi, ihe na-erughị okwu 25.\"", "\"dee ihe\""], answer: 2, why: "Ọ na-ekwu onye ị bụ, ihe ị chọrọ, onye ọ bụ maka ya na otu o kwesịrị ịdị." },
          { objective: "O6", q: "Kedu nke ị ga-ahapụ na prompt?", options: ["Ụdị azụmahịa gị", "Obodo gị", "Nọmba ekwentị onye ahịa", "Ụdị okwu ị chọrọ"], answer: 2, why: "Ozi nzuzo ndị ahịa anaghị aba n'ime ngwa AI." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI n'enweghị nsogbu na nke ọma",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime ka ihe mbụ ahụ ka mma",
          minutes: 4,
          goal: "Jiri arịrịọ nsochi gbanwee ihe mbụ ka ọ bụrụ ihe ị ga-eji n'ezie.",
          text: [
            "Azịza mbụ bụ ihe mbụ (draft). N'otu mkparịta ụka ahụ, ngwa enyemaka ahụ na-echeta ihe ị rịọrọ, ya mere ị nwere ike ịgwa ya ihe ọ ga-agbanwe.",
            "Arịrịọ nsochi bara uru maka azụmahịa: \"Mee ka ọ dị mkpụmkpụ.\" \"Mee ka ọ dị nro karị.\" \"Tinye oge mmeghe anyị.\" \"Nye m ụdị atọ.\" \"Dekwaa ya n'asụsụ Spanish.\" \"Jiri okwu dị mfe karị.\"",
            "Wee mee ka ọ bụrụ nke gị. Gbanwee okwu ka ọ dị ka gị na ụlọ ahịa gị. Ndị ahịa maara olu gị; nke ikpeazụ kwesịrị ịdị otú ahụ."
          ],
          steps: ["Gụpụta ihe mbụ ahụ n'olu dị elu.", "Họrọ otu ihe ị ga-agbanwe ma rịọ ya.", "Megharịa ya ruo mgbe ọ dị mma.", "Hazie ụdị ikpeazụ n'okwu nke gị."],
          words: [["Arịrịọ nsochi (follow-up)", "arịrịọ nke abụọ na-ewuli elu n'azịza i nwetara."], ["Ụdị (version)", "otu n'ime ọtụtụ ụzọ e si ede otu ihe ahụ."]],
          slides: [
            { title: "Azịza mbụ bụ ihe mbụ (draft)", bullets: ["Mkparịta ụka ahụ na-echeta arịrịọ gị", "Rịọ otu mgbanwe n'otu oge"] },
            { title: "Arịrịọ nsochi maka azụmahịa", bullets: ["\"Mee ka ọ dị mkpụmkpụ.\" \"Mee ka ọ dị nro karị.\"", "\"Nye m ụdị atọ.\"", "\"Dekwaa ya n'asụsụ Spanish.\""] },
            { title: "Mee ka ọ bụrụ nke gị", bullets: ["Gụpụta ya n'olu dị elu", "Gbanwee okwu ka ọ dị ka gị", "Ndị ahịa maara olu gị"] }
          ],
          tryIt: "Were azịza i nwetara na Nkuzi 3. Rịọ maka mgbanwe abụọ, otu n'otu oge, wee hazie ụdị ikpeazụ ka ọ dị ka gị.",
          youCanNow: "ime ka ihe mbụ AI dere ka mma site n'arịrịọ nsochi ma mee ka ọ dị ka azụmahịa gị.",
          quickCheck: [
            { objective: "O4", q: "Kedu otu ị ga-esi were azịza AI nke mbụ?", options: ["Dị ka ihe mbụ ị nwere ike ime ka ọ ka mma", "Dị ka ọrụ zuru ezu", "Dị ka eziokwu ị na-enweghị ike ịgbanwe", "Dị ka ihe ị ga-etinye n'ịntanetị ozugbo"], answer: 0, why: "Azịza mbụ bụ ihe mbụ ị na-ahazi site n'arịrịọ nsochi." },
            { objective: "O4", q: "Nkọwa ngwaahịa AI dere dị mma mana o yiri ihe siri ike. Gịnị ka ị ga-eme?", options: ["Jiri ya otu o si dị", "Malitegharịa ya na ngwa AI ọzọ", "Rịọ ọtụtụ mgbanwe n'otu ozi ogologo", "Rịọ otu mgbanwe, wee hazie ya n'okwu nke gị"], answer: 3, why: "Otu mgbanwe n'otu oge na nhazi nke gị na-eme ka ọ dị ka gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịlele eziokwu tupu ndị ahịa ahụ ha",
          minutes: 5,
          goal: "Lelee eziokwu ọ bụla dị n'ihe AI dere tupu i tinye ya n'ịntanetị, bipụta ya ma ọ bụ zipu ya.",
          text: [
            "AI nwere ike ịchepụta ihe: ọnụahịa ezighi ezi, oge mmeghe ezighi ezi, mbelata ọnụahịa (sale) ị na-ezubeghị, ma ọ bụ iwu na-adịghị adị. A na-akpọ nke a hallucination. Ọ bụrụ na ọ banye n'akwụkwọ ọkwa gị ma ọ bụ na weebụsaịtị gị, ndị ahịa ga-ejide gị n'okwu ahụ.",
            "Tupu i jiri ihe ọ bụla, lelee: ọnụahịa, ụbọchị na oge mmeghe, adreesị na ekwentị gị, nkwa (\"nnyefe n'efu\", \"e kwere nkwa\"), na iwu ọ bụla gbasara ikike azụmahịa, ụtụ isi ma ọ bụ ahụike. Tụnyere ha na ndekọ nke gị.",
            "Maka iwu, AI abụghị isi iyi. Lelee peeji gọọmentị (nke na-ejedebekarị na .gov) ma ọ bụ jụọ onye na-edekọ ego gị, ọfịs obodo gị ma ọ bụ onye ndụmọdụ obere azụmahịa n'efu dị ka SCORE ma ọ bụ Small Business Development Center."
          ],
          steps: ["Dọọ ahịrị n'okpuru nọmba, ụbọchị, aha na nkwa ọ bụla.", "Tụnyere nke ọ bụla na ndekọ nke gị.", "Lelee iwu ọ bụla na peeji .gov nke gọọmentị.", "Hichapụ nkwa ọ bụla ị na-ezubeghị ime."],
          words: [["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."], ["Isi iyi gọọmentị", "ọfịs gọọmentị ma ọ bụ ụlọ ọrụ na-ewepụta iwu ahụ ma ọ bụ ọnụahịa ahụ n'ezie."]],
          slides: [
            { title: "AI nwere ike ịchepụta ihe", bullets: ["Ọnụahịa ma ọ bụ oge mmeghe ezighi ezi", "Mbelata ọnụahịa ma ọ bụ nkwa ị na-ezubeghị", "Iwu na-adịghị adị"] },
            { title: "Lelee tupu ndị ahịa ahụ ya", bullets: ["Ọnụahịa, ụbọchị, oge mmeghe", "Adreesị na ekwentị", "Nkwa dị ka \"n'efu\" ma ọ bụ \"e kwere nkwa\""] },
            { title: "Iwu", bullets: ["Lelee peeji .gov nke gọọmentị", "Jụọ onye na-edekọ ego gị ma ọ bụ ọfịs obodo", "Enyemaka n'efu: SCORE ma ọ bụ SBDC"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o dee obere paragraf \"Banyere anyị\" (About us) maka azụmahịa gị. Dọọ ahịrị n'okpuru eziokwu na nkwa ọ bụla dị n'ime ya, lelee nke ọ bụla, ma dozie ma ọ bụ hichapụ ihe ezighi ezi.",
          youCanNow: "ịchọta na ịlele eziokwu na nkwa ọ bụla dị n'ihe AI dere tupu ndị ahịa ahụ ya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ hallucination AI?", options: ["Foto na-egbuke egbuke AI mere", "Eziokwu e chepụtara echepụta nke dị ka ezi ihe", "Azịza na-abịa nwayọọ", "Mperi n'ide mkpụrụ okwu"], answer: 1, why: "AI nwere ike ịchepụta eziokwu dị ka ezi ihe, ya mere ị na-elele ha." },
            { objective: "O5", q: "\"Banyere anyị\" AI dere kwuru na e meghere ụlọ ahịa gị na 1995, mana e meghere ya na 2015. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ndị ahịa agaghị ahụ ya", "Jụọ AI ma o ji n'aka", "Dozie afọ ahụ tupu i tinye ya", "Hichapụ paragraf ahụ niile"], answer: 2, why: "A ga-elele ma dozie eziokwu ọ bụla dị n'ihe e dere maka ndị ahịa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ichebe ozi ndị ahịa na ozi azụmahịa",
          minutes: 5,
          goal: "Jiri AI maka azụmahịa gị n'ekesaghị ozi nzuzo ndị ahịa ma ọ bụ nke azụmahịa.",
          text: [
            "Etinyela ozi nzuzo n'ime ngwa enyemaka AI: aha ndị ahịa na nọmba ekwentị ma ọ bụ adreesị ha, nọmba kaadị ma ọ bụ nke ụlọ akụ, okwuntughe, nọmba Social Security ndị ọrụ gị (nọmba njirimara gọọmentị US), ma ọ bụ ozi nzuzo gbasara ahụike. Ị nwere ike inweta enyemaka ị chọrọ na-enweghị ha. Dee \"[aha onye ahịa]\" n'ọnọdụ ya.",
            "Gụọ ntọala nzuzo (privacy settings) nke ngwa ị na-eji. Ụfọdụ ngwa na-ekwe ka ị gbanyụọ ichekwa mkparịta ụka gị maka ọzụzụ AI. Ụdị azụmahịa nke ụfọdụ ngwa na-enye nchekwa karịa; lelee peeji ụlọ ọrụ ahụ n'onwe ya tupu i tụkwasị obi na nke ahụ.",
            "Ndị aghụghọ na-ejikwa AI: akwụkwọ ụgwọ (invoice) adịgboroja, email adịgboroja dị ka ọ si n'aka onye na-enye gị ngwaahịa, na oku adịgboroja. Ọ bụrụ na ozi na-eme ka ị kwụọ ụgwọ ngwa ngwa ma ọ bụ gbanwee ozi ụlọ akụ, kwụsị ma kpọghachi onye na-enye gị ngwaahịa na nọmba ị maralarị."
          ],
          steps: ["Tupu i zipu prompt, gụọ ya maka ozi nzuzo.", "Gbanwee ha were ihe nnọchi dị ka \"[aha onye ahịa]\".", "Lelee ntọala nzuzo nke ngwa ahụ.", "Kpọghachi na nọmba ị maara tupu i kwụọ ụgwọ ọ bụla a na-arịọ ngwa ngwa."],
          words: [["Ihe nnọchi (placeholder)", "ihe e ji anọchi anya dị ka \"[aha onye ahịa]\" kama ezi ozi nzuzo."], ["Ntọala nzuzo (privacy settings)", "nhọrọ dị na ngwa gbasara ihe ọ na-echekwa na otu o si eji ozi gị."]],
          slides: [
            { title: "Etinyela ihe ndị a n'ime AI mgbe ọ bụla", bullets: ["Nọmba ekwentị na adreesị ndị ahịa", "Nọmba kaadị, nke ụlọ akụ na okwuntughe", "Nọmba njirimara ndị ọrụ ma ọ bụ ozi nzuzo gbasara ahụike"] },
            { title: "Jiri ihe nnọchi", bullets: ["\"[aha onye ahịa]\" kama ezi aha ahụ", "Ị ka na-enweta enyemaka ị chọrọ"] },
            { title: "Ntọala na aghụghọ", bullets: ["Lelee ntọala nzuzo nke ngwa ahụ", "Akwụkwọ ụgwọ adịgboroja na email adịgboroja nke ndị na-enye ngwaahịa juru ebe niile", "Kpọghachi na nọmba ị maara tupu i kwụọ ụgwọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: họrọ otu ezi ọrụ maka azụmahịa gị n'izu a. Jiri ngwa enyemaka AI n'efu mee ya site na prompt nwere akụkụ anọ, rịọ opekata mpe otu mgbanwe, lelee eziokwu ọ bụla n'onwe gị, wepụ ozi nzuzo ọ bụla, ma jiri ya rụọ ọrụ.",
          youCanNow: "iji AI maka ezi ọrụ azụmahịa ma na-echebe ozi ndị ahịa na ozi azụmahịa.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ ihe nnọchi (placeholder)?", options: ["Ihe e ji anọchi anya dị ka \"[aha onye ahịa]\"", "Ezi nọmba ekwentị onye ahịa", "Okwuntughe", "Ụdị ngwa AI"], answer: 0, why: "Ihe nnọchi na-ekwe ka ị nweta enyemaka n'ekesaghị ozi nzuzo." },
            { objective: "O6", q: "Onye kpọrọ gị oku kwuru na ị ga-akwụ akwụkwọ ụgwọ gafere oge ya taa site na gift card (kaadị onyinye). Gịnị ka ị ga-eme?", options: ["Kwụọ ngwa ngwa ka i zere nsogbu", "Nye ha nọmba kaadị gị kama", "Rịọ AI ka ọ kwụọ ya", "Kwụsị oku ahụ ma kpọọ onye na-enye gị ngwaahịa na nọmba ị maralarị"], answer: 3, why: "Arịrịọ ịkwụ ụgwọ ngwa ngwa site na gift card bụ ihe ịdọ aka na ntị nke aghụghọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI n'enweghị nsogbu na nke ọma",
        questions: [
          { objective: "O4", q: "Akwụkwọ ọkwa AI dere dị ogologo nke ukwuu. Gịnị ka ị ga-arịọ?", options: ["\"Mee ka ọ dị mkpụmkpụ.\"", "\"Hichapụ akaụntụ m.\"", "\"Tinye nọmba ụlọ akụ m.\"", "Ọ dịghị ihe; bipụta ya"], answer: 0, why: "Arịrịọ nsochi na-arịọ mgbanwe ị chọrọ." },
          { objective: "O5", q: "Ihe AI dere kwuru \"Nnyefe n'efu maka ihe niile e nyere iwu\" mana ị nyeghị nke ahụ mgbe ọ bụla. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ dị mma ịnụ", "Jụọ AI ma ọ bụ eziokwu", "Tinye ya ma lee ihe ga-eme", "Hichapụ nkwa ahụ tupu i jiri ihe e dere"], answer: 3, why: "Ndị ahịa nwere ike ijide gị na nkwa dị n'akwụkwọ ọkwa ma ọ bụ na saịtị gị." },
          { objective: "O5", q: "Ebee ka ị ga-elele iwu gbasara ikike azụmahịa (license)?", options: ["Azịza AI", "Peeji ma ọ bụ ọfịs gọọmentị n'onwe ya", "Ozi social media", "Onye gị na ya na-asọ mpi n'ahịa"], answer: 1, why: "Iwu na-esi n'isi iyi gọọmentị." },
          { objective: "O6", q: "Gịnị ka ị ga-ede kama ezi aha na nọmba ekwentị onye ahịa?", options: ["Ihe nnọchi dị ka \"[aha onye ahịa]\"", "Ezi ozi ahụ", "Nọmba kaadị ha", "Ọ dịghị ihe; ejikwala AI ọzọ"], answer: 0, why: "Ihe nnọchi na-edebe ozi nzuzo n'ebe ọ na-adịghị." },
          { objective: "O6", q: "Email \"si n'aka onye na-enye gị ngwaahịa\" kwuru ka i kwụọ ego n'akaụntụ ụlọ akụ ọhụrụ taa. Gịnị ka ị ga-eme?", options: ["Kwụọ ozugbo", "Zaa ya site n'okwuntughe gị", "Kpọghachi onye na-enye gị ngwaahịa na nọmba ị maralarị", "Zigara ya ndị ahịa"], answer: 2, why: "Mgbanwe ịkwụ ụgwọ a na-eme ngwa ngwa bụ aghụghọ a na-ahụkarị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite AI maka Obere Azụmahịa",
    questions: [
      { objective: "O1", q: "Kedu nke bụ ngwa enyemaka AI n'efu?", options: ["Igwe ndekọ ego (cash register)", "Microsoft Copilot", "Igwe na-agụ barcode", "Igwe na-ebipụta akwụkwọ nnata ego"], answer: 1, why: "Copilot, ChatGPT na Gemini bụ ngwa enyemaka a ma ama." },
      { objective: "O1", q: "Ngwa enyemaka AI maara ọnụahịa gị:", options: ["Mgbe niile", "Site n'obodo gị", "Site n'ụlọ akụ gị", "Naanị ma ọ bụrụ na i gwara ya"], answer: 3, why: "Ọ maghị azụmahịa gị ma ọ bụrụ na i gwaghị ya." },
      { objective: "O1", q: "Onye na-eme mkpebi ikpeazụ maka ọrụ AI mere maka azụmahịa gị?", options: ["AI", "Ndị ahịa gị", "Ụlọ ahịa app", "Gị, onye nwe azụmahịa"], answer: 3, why: "Ị ka bụ onye nwe azụmahịa, ị na-ekpebikwa ihe ị ga-eji." },
      { objective: "O2", q: "Kedu nke bụ ọrụ a na-emeghachi, e dere ede, nke ihe egwu ya dị ala?", options: ["Ịbịanye aka n'akwụkwọ mgbazinye ụlọ", "Ịza otu ajụjụ onye ahịa ahụ kwa ụbọchị", "Ịkwụ ụtụ isi ụgwọ ọnwa ndị ọrụ", "Ịhọrọ ọka iwu"], answer: 1, why: "Azịza e dere ede a na-emeghachi bụ ezigbo ọrụ AI." },
      { objective: "O2", q: "Kedu nke kwesịrị ịbanye na ndepụta \"Ndị mmadụ na isi iyi gọọmentị\"?", options: ["Ozi social media", "Nkọwa nri dị na menu", "Mkpebi gbasara ụtụ isi", "Ndepụta ihe a ga-eme tupu e meghee"], answer: 2, why: "Mkpebi gbasara ego na ụtụ isi chọrọ ndị mmadụ na isi iyi gọọmentị." },
      { objective: "O2", q: "Ule dị ngwa na-ekwu na AI nwere ike inye aka mgbe mperi:", options: ["Dị mfe ịhụ na idozi", "Dị oke ọnụ", "Gbasara iwu", "Zoro ezo"], answer: 0, why: "Ọrụ ihe egwu ya dị ala dị mma ịnwale na AI." },
      { objective: "O3", q: "Gịnị bụ prompt?", options: ["Akwụkwọ nnata ego", "Ụgwọ ntaramahụhụ maka ịkwụ ụgwọ n'oge", "Ihe ị na-ede iji rịọ AI ihe", "Nnyefe ngwaahịa"], answer: 2, why: "Prompt bụ arịrịọ gị." },
      { objective: "O3", q: "Kedu akụkụ na-agwa AI ụdị ị chọrọ?", options: ["Otu o kwesịrị ịdị", "Onye ị bụ", "Ụlọ akụ gị", "Okwuntughe gị"], answer: 0, why: "\"Otu o kwesịrị ịdị\" gụnyere ogologo ya na ụdị okwu." },
      { objective: "O3", q: "Gịnị mere ị ga-eji tinye ụdị azụmahịa gị na obodo gị na prompt?", options: ["Ka ọ ga nwayọọ", "Ka azịza ahụ dabara azụmahịa gị", "Iwu chọrọ ya", "Ka AI wee nara gị ego"], answer: 1, why: "Ozi zuru ezu na-eme ka azịza ahụ dabara." },
      { objective: "O4", q: "Kacha mma, e kwesịrị iwere azịza AI nke mbụ dị ka:", options: ["Nke ikpeazụ", "Iwu", "Nkwekọrịta", "Ihe mbụ (draft)"], answer: 3, why: "Ị na-eme ka ọ ka mma ma lelee ya tupu i jiri ya." },
      { objective: "O4", q: "Kedu arịrịọ nsochi na-enyere ndị ahịa na-asụ Spanish aka?", options: ["\"Dekwaa ya n'asụsụ Spanish.\"", "\"Tinye okwuntughe m.\"", "\"Mee ka ọ dị ogologo.\"", "\"Hichapụ ya.\""], answer: 0, why: "AI nwere ike ide n'asụsụ ndị ọzọ; mee ka onye na-asụ ya nke ọma lelee ya." },
      { objective: "O4", q: "Gịnị mere ị ga-eji hazie ụdị ikpeazụ n'okwu nke gị?", options: ["Ọ baghị uru", "Iji zoo mperi", "Iji mee ka ọ dị ogologo", "Ka ọ dị ka gị na azụmahịa gị"], answer: 3, why: "Ndị ahịa maara olu gị." },
      { objective: "O5", q: "Gịnị bụ hallucination AI?", options: ["Nsogbu ihuenyo", "Ịntanetị na-aga nwayọọ", "Eziokwu e chepụtara echepụta nke dị ka ezi ihe", "Ụdị app"], answer: 2, why: "AI nwere ike ịchepụta eziokwu." },
      { objective: "O5", q: "Kedu ihe ị ga-elelerịrị tupu i tinye ihe AI dere?", options: ["Naanị ide mkpụrụ okwu", "Ọnụahịa, oge mmeghe, adreesị na nkwa", "Ọ dịghị ihe", "Naanị ụdị mkpụrụ akwụkwọ (font)"], answer: 1, why: "Eziokwu ma ọ bụ nkwa ezighi ezi na-emebi ntụkwasị obi." },
      { objective: "O5", q: "Ndị ndụmọdụ obere azụmahịa n'efu gụnyere:", options: ["AI n'onwe ya", "Mgbasa ozi na-apụta na mberede", "Ebe mkparịta ụka ọ bụla n'ịntanetị", "SCORE na Small Business Development Centers"], answer: 3, why: "SCORE na SBDC na-enye ndụmọdụ n'efu." },
      { objective: "O6", q: "Kedu nke ị na-ekwesịghị itinye n'ime ngwa AI MGBE Ọ BỤLA?", options: ["\"Mee ka ọ dị ka enyi karị\"", "Ụdị azụmahịa gị", "Nọmba kaadị onye ahịa", "Oge mmeghe gị"], answer: 2, why: "Nọmba kaadị bụ ozi nzuzo." },
      { objective: "O6", q: "Ihe nnọchi (placeholder) bụ:", options: ["Ihe e ji anọchi anya dị ka \"[aha onye ahịa]\"", "Ezi nọmba ekwentị", "Okwuntughe", "Ọnụahịa"], answer: 0, why: "Ihe nnọchi na-anọchi anya ozi nzuzo." },
      { objective: "O6", q: "Tupu i tụkwasị obi na nkwa nzuzo nke ngwa, ị kwesịrị:", options: ["Ichepụta ya", "Ịlele ntọala ya na peeji ụlọ ọrụ ahụ n'onwe ya", "Ịjụ onye ahịa", "Ileghara nzuzo anya"], answer: 1, why: "Ntọala na peeji ụlọ ọrụ ahụ na-ekwu ihe ngwa ahụ na-echekwa." },
      { objective: "O6", q: "Onye kpọrọ oku na-eme ka i kwụọ \"akwụkwọ ụgwọ gafere oge ya\" ngwa ngwa site na gift card. Nke a bụ:", options: ["Azụmahịa nkịtị", "Ihe ịdọ aka na ntị nke aghụghọ", "Iwu ụtụ isi", "Mbelata ọnụahịa"], answer: 1, why: "Ime ngwa ngwa na gift card bụ ihe ịrịba ama aghụghọ." },
      { objective: "O6", q: "Ụzọ kacha mma isi lelee arịrịọ ịkwụ ụgwọ ngwa ngwa site n'aka onye na-enye gị ngwaahịa bụ:", options: ["Ịkpọ onye na-enye gị ngwaahịa na nọmba ị maralarị", "Ịza otu email ahụ", "Ịkwụ ọkara", "Ịjụ AI"], answer: 0, why: "Nọmba ị maara na-eru ezi onye na-enye gị ngwaahịa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 4, 6, 8, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Prompt azụmahịa doro anya", objective: "O3", notYet: "Prompt ahụ edoghị anya, dịka ọmụmaatụ \"mee akwụkwọ ọkwa\".", meets: "Prompt ahụ nwere ụdị azụmahịa gị, ọrụ ahụ, ozi gị na otu o kwesịrị ịdị.", exceeds: "Azịza mbụ fọrọ nke nta ka ọ dị njikere n'ihi na prompt ahụ doro anya nke ukwuu." },
      { name: "Mere ka ọ ka mma", objective: "O4", notYet: "Jiri ihe mbụ ahụ otu o si dị.", meets: "Rịọrọ opekata mpe otu mgbanwe ma hazie ihe pụtara ka ọ dị ka gị.", exceeds: "Rịọrọ mgbanwe abụọ ma ọ bụ karịa, otu n'otu oge, ma nwee ike ikwu ihe nke ọ bụla dozie." },
      { name: "Elelere eziokwu", objective: "O5", notYet: "E leleghị ọnụahịa, oge mmeghe, adreesị ma ọ bụ nkwa.", meets: "E lelere eziokwu na nkwa ọ bụla, ma dozie ma ọ bụ wepụ ha ma ọ bụrụ na ha ezighi ezi.", exceeds: "Nwere ike ikwu ebe o lelere eziokwu ọ bụla." },
      { name: "Ozi nzuzo adịghị n'ime ya", objective: "O6", notYet: "Prompt ahụ nwere aha onye ahịa, nọmba ya ma ọ bụ ozi nzuzo ọzọ.", meets: "Ọ dịghị ozi nzuzo ndị ahịa ma ọ bụ nke azụmahịa na prompt ahụ.", exceeds: "Jiri ihe nnọchi ma dejupụta ha naanị n'ụdị ikpeazụ." },
      { name: "E jiri ya rụọ ọrụ", objective: "O2", notYet: "Ọrụ ahụ abụghị ezi ọrụ azụmahịa, ma ọ bụ e jighị ya.", meets: "E mechara ezi ọrụ site n'azụmahịa ahụ ma jiri ya.", exceeds: "Onye nwe azụmahịa ahụ họọrọ ọrụ site na ndepụta \"Nwalee ya na AI\" ma dee oge o chekwara." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa kwuru na ha na-eji AI maka opekata mpe otu ọrụ azụmahịa kwa izu (nnyocha nsochi ụbọchị 30)",
      "Ndị nwe azụmahịa kwuru na ha chekwara oge n'ọrụ ide ihe (nnyocha nsochi)",
      "Ndị nwe azụmahịa malitere ihe ọmụmụ obere azụmahịa Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Otu ezi ọrụ azụmahịa maka izu a, dị ka akwụkwọ ọkwa ma ọ bụ azịza nye onye ahịa",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Rịọ onye nwe azụmahịa ọ bụla ka o weta otu ezi ọrụ ka ọrụ ikpeazụ chekwaa ha oge ozugbo.",
      "Emela ka ndị nwe azụmahịa dee ezi aha ndị ahịa, nọmba ma ọ bụ ozi kaadị mgbe ọ bụla; jiri ihe nnọchi mee omume.",
      "Zipu ajụjụ gbasara ụtụ isi, ikike azụmahịa na iwu n'isi iyi gọọmentị, SCORE ma ọ bụ Small Business Development Center.",
      "Jikọta ndị nwe ụdị azụmahịa dị iche iche ọnụ ka ha hụ ụzọ ndị ọzọ isi jiri AI.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
