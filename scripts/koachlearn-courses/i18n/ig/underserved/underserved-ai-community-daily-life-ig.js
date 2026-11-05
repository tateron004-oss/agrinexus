"use strict";

// Koach Learn course (Igbo translation of underserved/underserved-ai-community-daily-life.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-community-daily-life-ig",
  lang: "ig",
  translationOf: "underserved-ai-community-daily-life",
  category: "Undeserved Community",
  name: "AI maka Obodo na Ndụ Kwa Ụbọchị",
  skills: "Ịhazi izu ezinụlọ, Ịhazi nri n'ego dị nta, Ịchọta na ịlele enyemaka dị nso, Iduzi nzukọ obodo, Ide ozi doro anya nye otu",
  outcome: "iji ngwa enyemaka AI n'efu hazie ndụ kwa ụbọchị na ọrụ obodo: ịhazi izu ezinụlọ gị na nri n'ego dị nta, ịchọta enyemaka dị nso ma lelee ya, na ịhazi obere nzukọ obodo nwere ndepụta ihe a ga-ekwu (agenda), ozi ncheta na ndepụta ebe enyemaka.",
  about: [
    "Ndụ na-ejupụta n'ọrụ: oge ọrụ, ịkpọta ụmụaka n'ụlọ akwụkwọ, ọhụhụ dọkịta, chọọchị, egwuregwu, na inyere ndị agbata obi aka. Ngwa enyemaka AI n'efu nwere ike iburu ụfọdụ n'ime ịhazi ihe ndị a.",
    "N'Isi 1, ị ga-ahazi izu ezinụlọ na nri n'ego dị nta, ma chọta enyemaka dị nso mgbe ego dị obere. N'Isi 2, ị ga-eji AI chịkọta obodo gị: ndepụta ihe a ga-ekwu na nzukọ (agenda), ozi doro anya nye otu, na ndepụta ebe enyemaka dị nso.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Hazie obere nzukọ maka otu ị so na ya (otu okporo ụzọ, otu ndị nne na nna, otu chọọchị ma ọ bụ otu ndị bi n'ụlọ mgbazinye). Jiri ngwa enyemaka AI dee agenda nwere otu peeji na obere ozi ncheta, wee mee ndepụta ebe enyemaka atọ dị nso (dịka ọmụmaatụ nri, ụgwọ ọkụ na mmiri, na enyemaka ọrụ) nke gị onwe gị lelere na weebụsaịtị gọọmentị ma ọ bụ site na 211.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye bi n'obodo ndị na-enweghị enyemaka zuru ezu, ndị na-ejikọta ọrụ, ezinụlọ na ọrụ obodo: ndị nne na nna, ndị na-elekọta mmadụ, na ndị otu ma ọ bụ ndị isi otu okporo ụzọ, otu ndị nne na nna, otu chọọchị na otu ndị bi n'ụlọ mgbazinye.",
    startingPoint: "Ha na-eji ekwentị akpọ oku, ezipu ozi ma jiri ụfọdụ app, ha na-ahazikwa izu ha n'isi ma ọ bụ n'akwụkwọ. Ole na ole ejirila ngwa enyemaka AI hazie ihe, ọtụtụ amaghịkwa maka 211.",
    gap: "Ezinụlọ ndị ọrụ juru na-echefu oge ọhụhụ, na-emefu ego karịa n'ihe oriri, ma na-ahụ nsogbu ịchọta enyemaka dị nso, otu obodo na-atụfukwa oge na nzukọ a na-ahazighị ahazi. Ngwa enyemaka AI n'efu nwere ike ime ịhazi ahụ, mana ndị na-amụ ihe kwesịrị iji ya n'enweghị nsogbu ma lelee ihe ọ bụla o kwuru gbasara mmemme enyemaka dị nso.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 5 ruo 6)",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa ọba akwụkwọ",
      "Ọnụ ahịa: naanị ngwa n'efu",
      "AI amaghị ọnụ ahịa taa ma ọ bụ mmemme ndị ka na-arụ ọrụ; ndị na-amụ ihe na-elele 211 na isi iyi gọọmentị",
      "Nzuzo: naanị aha mbụ ma ọ bụ ọrụ mmadụ, na-enweghị ozi ahụike ma ọ bụ ego nke ndị ọzọ na prompt"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ na ngwa enyemaka AI nwere ike ibu ụzọ were \"Mmalite AI na Ike n'Ihe Dijitalụ\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị izu jupụtara n'oge ọrụ, ụlọ akwụkwọ na ọhụhụ", action: "iji ngwa enyemaka AI gbanwee ndepụta gị ka ọ bụrụ usoro ụbọchị n'ụbọchị ma dozie ihe ọ bụla na-adakọ n'otu oge", standard: "na-eji naanị aha mbụ ma ọ bụ ọrụ mmadụ, gị onwe gị na-eme mkpebi ikpeazụ" },
    { id: "O2", condition: "Mgbe e nyere gị ọnụ ọgụgụ ndị ezinụlọ gị, ego gị na nri ị nwere", action: "ime atụmatụ nri abalị ise na ndepụta ihe ị ga-azụ n'ahịa site na ngwa enyemaka AI", standard: "na-atụnyere ọnụ ahịa ya na ezi ọnụ ahịa ụlọ ahịa gị" },
    { id: "O3", condition: "Mgbe e nyere gị ezi mkpa dị ka nri, ụgwọ ụlọ ma ọ bụ ụgwọ ọkụ na mmiri", action: "ịchọta otu mmemme enyemaka dị nso site na 211 ma kwado ya n'isi iyi gọọmentị", standard: "na-edetu nọmba ekwentị gọọmentị ya tupu i gaa" },
    { id: "O4", condition: "Maka otu ị so na ya", action: "ide agenda nzukọ nwere otu peeji site na ngwa enyemaka AI", standard: "nwere isiokwu n'usoro, oge, isiokwu kacha mkpa n'isi mmalite, na oge maka ajụjụ" },
    { id: "O5", condition: "Tupu nzukọ otu na mgbe ọ gachara", action: "ide ozi ncheta ma gbanwee ndetu dị ọgbaghara ka ọ bụrụ nchịkọta nwere ọrụ a ga-arụ", standard: "na-enweghị ozi nzuzo, ma e lelere ya na onye nọ ebe ahụ" },
    { id: "O6", condition: "Maka mkpa atọ dị n'obodo gị", action: "ime ndepụta ebe enyemaka nwere otu peeji, nwere nọmba gọọmentị na oge mmeghe nke gị onwe gị lelere", standard: "nwere ụbọchị i lelere ya" }
  ],
  chapters: [
    {
      name: "Isi 1: AI n'ụlọ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịhazi izu ezinụlọ gị",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI gbanwee izu dị ọgbaghara ka ọ bụrụ usoro doro anya.",
          text: [
            "Mgbe oge ọrụ, ụlọ akwụkwọ, ọhụhụ na ozi ị ga-eje juru, ọ dị mfe ichefu ihe. Ngwa enyemaka AI nwere ike ịhazi ndepụta gị ka ọ bụrụ atụmatụ ụbọchị n'ụbọchị.",
            "Dee ihe niile ị ga-eme n'izu a n'usoro ọ bụla, ya na oge ndị ị maralarị. Jiri aha mbụ ma ọ bụ ọrụ mmadụ (\"nwa m nke okenye\", \"Nne nne\") kama aha zuru ezu. Wee jụọ: \"Hazie nke a ka ọ bụrụ usoro ụbọchị n'ụbọchị. Gosi ihe na-adakọ.\"",
            "Lee ihe na-adakọ, ebe ihe abụọ na-eme n'otu oge. Rịọ AI echiche, dị ka ịkekọrịta ụgbọala (carpool) ma ọ bụ ịkwaga ozi ị ga-eje, mana gị na-eme mkpebi ikpeazụ."
          ],
          steps: ["Depụta ihe niile maka izu ahụ, n'usoro ọ bụla, ya na oge ị maara.", "Rịọ AI ka ọ hazie ya ka ọ bụrụ usoro ụbọchị n'ụbọchị ma gosi ihe na-adakọ.", "Rịọ echiche iji dozie ihe ọ bụla na-adakọ.", "Detuo atụmatụ ikpeazụ na kalenda ekwentị gị ma ọ bụ n'akwụkwọ ị ga-amanye na friji."],
          words: [["Usoro (schedule)", "atụmatụ na-egosi ihe na-eme kwa ụbọchị na n'oge ole."], ["Ihe na-adakọ (clash)", "mgbe e hazitere ihe abụọ n'otu oge."]],
          slides: [
            { title: "Ihe ị ga-echeta karịrị gị?", bullets: ["Oge ọrụ, ụlọ akwụkwọ, ọhụhụ, ozi ị ga-eje", "AI nwere ike ịhazi ya ka ọ bụrụ atụmatụ"] },
            { title: "Otu esi arịọ ya", bullets: ["Depụta ihe niile, n'usoro ọ bụla", "Jiri aha mbụ ma ọ bụ ọrụ mmadụ, ọ bụghị aha zuru ezu", "\"Mee usoro ụbọchị n'ụbọchị. Gosi ihe na-adakọ.\""] },
            { title: "Dozie ihe na-adakọ", bullets: ["Rịọ echiche: ịkekọrịta ụgbọala, ịkwaga ozi", "Gị na-eme mkpebi ikpeazụ", "Tinye ya na kalenda gị ma ọ bụ na friji"] }
          ],
          tryIt: "Depụta ihe niile ezinụlọ gị ga-eme n'izu a. Rịọ ngwa enyemaka AI ka ọ gbanwee ya ka ọ bụrụ usoro ụbọchị n'ụbọchị ma gosi ihe ọ bụla na-adakọ.",
          youCanNow: "ịgbanwe izu jupụtara n'ọrụ ka ọ bụrụ usoro doro anya ma hụ ihe na-adakọ n'oge.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ị ga-ebu ụzọ dee mgbe ị na-eji AI ahazi izu gị?", options: ["Ihe niile ị ga-eme, ya na oge ị maara", "Aha zuru ezu na ụbọchị ọmụmụ ndị ezinụlọ gị", "Naanị ụbọchị kacha sie ike", "Okwuntughe ọrụ gị"], answer: 0, why: "AI chọrọ ndepụta gị niile na oge ị maara iji hazie ya ka ọ bụrụ usoro." },
            { objective: "O1", q: "AI kwuru ka ị hapụ ọhụhụ dọkịta nwa gị iji dozie ihe na-adakọ. Gịnị ka ị ga-eme?", options: ["Mee ihe AI kwuru", "Rịọ echiche ndị ọzọ, dị ka ịkekọrịta ụgbọala, ma họrọ n'onwe gị", "Kagbuo ihe niile n'ụbọchị ahụ", "Kwụsị iji usoro ahụ"], answer: 1, why: "AI na-enye echiche, mana gị na-eme mkpebi ikpeazụ maka ezinụlọ gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịhazi nri n'ego dị nta",
          minutes: 5,
          goal: "Hazie nri otu izu na ndepụta ihe ị ga-azụ n'ahịa nke dabara n'ego gị.",
          text: [
            "Ngwa enyemaka AI nwere ike ịhazi nri dabere n'ihe ị nwerelarị, ihe ezinụlọ gị na-amasị, na ego ole ị nwere ike imefu.",
            "Gwa ya: ọnụ ọgụgụ ndị mmadụ, ego gị, nri ezinụlọ gị na-amasị ma ọ bụ nke ha na-apụghị iri, ihe dị na kichin gị, na oge ole ị nwere isi nri. Rịọ ndepụta ihe ị ga-azụ n'ahịa, kewara dị ka akụkụ ụlọ ahịa.",
            "AI amaghị ọnụ ahịa taa n'ụlọ ahịa gị, ya mere were ọnụ ahịa o chepụtara dị ka atụmatụ. Lelee mgbasa ozi ụlọ ahịa ahụ nke izu a ma ọ bụ app ya. Maka mkpa ahụike dị ka ọrịa shuga (diabetes) ma ọ bụ nfụkasị ahụ (allergy), soro ndụmọdụ dọkịta gị ma ọ bụ onye ọkachamara n'ihe oriri."
          ],
          steps: ["Lelee nri ị nwerelarị.", "Gwa AI ọnụ ọgụgụ ndị mmadụ, ego, ihe na-amasị ha, nfụkasị ahụ na oge isi nri.", "Rịọ nri abalị ise na ndepụta ihe ị ga-azụ n'ahịa, kewara dị ka akụkụ ụlọ ahịa.", "Tụnyere ya na ezi ọnụ ahịa ụlọ ahịa gị ma gbanwee ya."],
          words: [["Ego a kara aka (budget)", "ego ole ị zubere imefu."], ["Nri ndị bụ isi (staples)", "nri ndị nkịtị ị na-ejikarị, dị ka osikapa, agwa, ntụ ọka na mmanụ."]],
          slides: [
            { title: "AI nwere ike ịhazi nri", bullets: ["Dabere n'ihe ị nwerelarị", "Dabere n'ihe ezinụlọ gị na-amasị", "Dabere n'ego gị"] },
            { title: "Gwa ya", bullets: ["Ọnụ ọgụgụ ndị mmadụ na ego gị", "Ihe na-amasị ha, nfụkasị ahụ, oge isi nri", "Ihe dị na kichin gị"] },
            { title: "Lelee tupu ị zụọ ahịa", bullets: ["AI amaghị ọnụ ahịa taa", "Lelee mgbasa ozi ma ọ bụ app ụlọ ahịa ahụ", "Mkpa ahụike: soro dọkịta gị"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI nri abalị ise maka ezinụlọ gị site na nri ị nwerelarị na ego ị họọrọ, ya na ndepụta ihe ị ga-azụ n'ahịa kewara dị ka akụkụ ụlọ ahịa.",
          youCanNow: "ịhazi nri n'ego dị nta na ndepụta ihe ị ga-azụ n'ahịa site na AI, ma tụnyere ya na ezi ọnụ ahịa.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere ị ga-eji kewaa ndepụta ahịa dị ka akụkụ ụlọ ahịa?", options: ["Ọ na-eme ka nri dị ọnụ ala", "AI chọrọ ya", "Ọ na-eme ka ịzụ ahịa dị ngwa", "Ụlọ ahịa na-achọ ya"], answer: 2, why: "Ikewa ya dị ka akụkụ, dị ka akwụkwọ nri ma ọ bụ mmiri ara ehi, na-echekwa oge n'ụlọ ahịa." },
            { objective: "O2", q: "Ị nwere osikapa, agwa na akwa n'ụlọ. Gịnị ka ị ga-agwa AI?", options: ["Ọ dịghị ihe; ọ ga-echepụta ya", "Naanị ego gị", "Ụlọ oriri kacha amasị gị", "Nri ị nwerelarị, ka o wee hazie nri dabere na ha"], answer: 3, why: "Ịhazi nri dabere n'ihe ị nwere na-echekwa ego ma na-egbochi nri ịla n'iyi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịchọta enyemaka dị nso mgbe ego dị obere",
          minutes: 5,
          goal: "Chọta ebe enyemaka dị nso maka ezi mkpa ma lelee ya n'isi iyi gọọmentị.",
          text: [
            "Ọtụtụ ezinụlọ na-achọ enyemaka mgbe ụfọdụ: maka nri, ụgwọ ụlọ, ụgwọ ọkụ na mmiri, nlekọta ụmụaka ma ọ bụ ọrụ. Ịrịọ enyemaka bụ akụkụ nke ilekọta ezinụlọ gị.",
            "211 bụ ahịrị ekwentị nzuzo na-ejikọ ndị mmadụ na enyemaka dị nso maka ebe obibi, nri, njem, nlekọta ahụike na ndị ọzọ. Ị nwere ike ịkpọ 211, ọtụtụ mpaghara na-enyekwa ozi ederede ma ọ bụ mkparịta ụka na weebụ. Ọba akwụkwọ gị na ụlọ obodo dị nso nwekwara ndepụta enyemaka dị nso.",
            "Ngwa enyemaka AI nwere ike inyere gị aka ịghọta ụdị enyemaka dị na ajụjụ ị ga-ajụ. Mana o nwere ike idepụta ebe mechiri emechi ma ọ bụ mmemme gbanwere agbanwe. Kwado ya mgbe niile site na 211, weebụsaịtị gọọmentị mmemme ahụ, ma ọ bụ oku ekwentị."
          ],
          steps: ["Kpọọ aha mkpa ahụ: nri, ụgwọ ụlọ, ụgwọ ọkụ na mmiri, nlekọta ụmụaka ma ọ bụ ọrụ.", "Jụọ AI ụdị mmemme na-enyekarị aka na ihe ị ga-ajụ ha.", "Kpọọ 211 ma ọ bụ gaa na 211.org ịchọta ezi mmemme dị nso.", "Kpọọ ma ọ bụ lelee weebụsaịtị gọọmentị mmemme ahụ tupu i gaa."],
          words: [["Ebe enyemaka (resource)", "ebe, mmemme ma ọ bụ onye nwere ike inyere aka n'otu mkpa."], ["Nzuzo (confidential)", "e debere ya n'onwe gị; a naghị ekesa ya n'enweghị ikike gị."]],
          sources: [{ name: "211.org: About 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Ịrịọ enyemaka bụ ike", bullets: ["Nri, ụgwọ ụlọ, ụgwọ ọkụ na mmiri, nlekọta ụmụaka, ọrụ", "Ọtụtụ mmemme enyemaka dị nso dị"] },
            { title: "211 na-ejikọ gị", bullets: ["Kpọọ 211, oge ọ bụla", "Ọ bụ nzuzo, ị nwekwara ike ịghara ikwu aha gị", "Ọzọkwa: ndepụta ọba akwụkwọ na ụlọ obodo"] },
            { title: "Jiri AI, wee kwado ya", bullets: ["AI na-akọwa ụdị enyemaka dị", "O nwere ike idepụta ebe mechiri emechi", "Kwado ya na 211 ma ọ bụ saịtị gọọmentị"] }
          ],
          tryIt: "Họrọ otu mkpa ezinụlọ gị ma ọ bụ onye agbata obi nwere. Jụọ AI ụdị mmemme na-enyere aka na ya. Wee chọta otu ezi mmemme dị nso site na 211.org ma ọ bụ site n'ịkpọ 211, ma detuo nọmba ekwentị gọọmentị ya.",
          youCanNow: "ịchọta ebe enyemaka dị nso maka ezi mkpa ma kwado ya n'isi iyi gọọmentị.",
          quickCheck: [
            { objective: "O3", q: "E wezụga ịkpọ 211, kedu ụzọ ọzọ ị nwere ike isi nweta ya?", options: ["Site n'ozi ederede, mkparịta ụka na weebụ ma ọ bụ 211.org", "Naanị n'onwe gị", "Site n'iziga akwụkwọ ozi", "Site n'app a na-akwụ ụgwọ"], answer: 0, why: "Ọtụtụ mpaghara na-enye 211 site n'ozi ederede ma ọ bụ mkparịta ụka na weebụ, na n'ịntanetị na 211.org." },
            { objective: "O3", q: "Onye agbata obi chọrọ enyemaka ịkwụ ụgwọ ọkụ. Gịnị bụ ezigbo nzọụkwụ mbụ site na AI?", options: ["Rịọ AI ka ọ kwụọ ụgwọ ahụ", "Jụọ ụdị mmemme na-enyere aka na ihe ị ga-ajụ ha", "Tinye akwụkwọ ụgwọ onye agbata obi n'ịntanetị", "Chere ruo mgbe a gbanyụrụ ọkụ"], answer: 1, why: "AI nwere ike ịkọwa ụdị enyemaka na ajụjụ ị ga-ajụ; wee chọta ezi mmemme site na 211." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: AI n'ụlọ",
        questions: [
          { objective: "O1", q: "Mgbe ị na-edepụta izu ezinụlọ gị nye AI, kedu otu ị ga-esi kpọọ ndị mmadụ aha?", options: ["Aha zuru ezu na ụbọchị ọmụmụ", "Aha mbụ ma ọ bụ ọrụ dị ka \"nwa m nke okenye\"", "Nọmba Social Security", "Adreesị ụlọ onye ọ bụla"], answer: 1, why: "Aha mbụ ma ọ bụ ọrụ mmadụ na-edebe ozi nzuzo n'ebe ọ na-adịghị." },
          { objective: "O1", q: "Gịnị bụ ihe na-adakọ n'usoro?", options: ["Ihe abụọ e hazitere n'otu oge", "Ụbọchị ezumike", "Ụbọchị mmemme", "Atụmatụ a kagburu"], answer: 0, why: "Ihe na-adakọ bụ mgbe atụmatụ abụọ na-eme n'otu oge." },
          { objective: "O2", q: "AI kwuru na ndepụta ahịa gị ga-efu $42. Gịnị ka ị ga-eme?", options: ["Kwere ya kpọmkwem", "Kwụọ $42 tupu ị zụọ ahịa", "Were ya dị ka atụmatụ ma lelee ọnụ ahịa ụlọ ahịa ahụ", "Leghara ndepụta ahụ anya"], answer: 2, why: "AI amaghị ọnụ ahịa taa n'ụlọ ahịa gị." },
          { objective: "O2", q: "Nwa gị nwere nfụkasị ahụ n'ihe oriri. Ndụmọdụ onye ka ị ga-ebu ụzọ soro maka atụmatụ nri?", options: ["AI", "Ozi na soshal midia", "Weebụsaịtị ọ bụla", "Dọkịta gị ma ọ bụ onye ọkachamara n'ihe oriri"], answer: 3, why: "Mkpa ahụike na-eso ndụmọdụ onye ọkachamara." },
          { objective: "O3", q: "AI depụtara ebe a na-enye nri n'efu (food pantry) dị nso gị. Gịnị ka ị ga-eme tupu i gaa?", options: ["Kwado ya na 211, saịtị gọọmentị ya, ma ọ bụ oku ekwentị", "Naanị gaa", "Tinye ya n'ịntanetị", "Jụọ AI ọzọ"], answer: 0, why: "AI nwere ike idepụta ebe mechiri emechi; buru ụzọ kwado ya." }
        ]
      }
    },
    {
      name: "Isi 2: AI maka obodo gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide agenda nzukọ",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI dee agenda nzukọ doro anya nwere otu peeji.",
          text: [
            "Otu obodo na-arụzu ihe karịa mgbe nzukọ ha nwere atụmatụ. Agenda bụ obere ndepụta ihe nzukọ ahụ ga-ekwu, n'usoro, ya na oge ole e nyere akụkụ ọ bụla.",
            "Gwa AI otu ahụ, ebumnuche, ogologo oge nzukọ ahụ, na isiokwu. Dịka ọmụmaatụ: \"Mee agenda otu awa maka otu ndị bi n'ụlọ mgbazinye anyị. Isiokwu: igwe ịsa akwa mebiri emebi, oriri n'oge okpomọkụ, na ịhọpụta odeakwụkwọ ọhụrụ. Hapụ oge maka ajụjụ.\"",
            "Gụọ ya ka ị na-eche mkpa otu gị. Kwagharịa isiokwu, tinye nnabata, ma hụ na isiokwu kacha mkpa adịghị n'ọgwụgwụ ebe oge agaghị ezu ya."
          ],
          steps: ["Dee otu ahụ, ebumnuche, ogologo oge na isiokwu.", "Rịọ AI agenda nwere otu peeji ya na oge maka isiokwu ọ bụla.", "Tinye isiokwu kacha mkpa n'isi mmalite.", "Tinye nnabata na oge maka ajụjụ, wee kesaa ya tupu nzukọ ahụ."],
          words: [["Agenda", "ndepụta isiokwu maka nzukọ, n'usoro, ya na oge."], ["Odeakwụkwọ (secretary)", "onye n'otu na-ede ndetu ma na-edebe akwụkwọ ndekọ."]],
          slides: [
            { title: "Nzukọ chọrọ atụmatụ", bullets: ["Agenda na-edepụta isiokwu n'usoro", "Isiokwu ọ bụla na-enweta oge"] },
            { title: "Gwa AI", bullets: ["Otu ahụ na ebumnuche ya", "Ogologo oge nzukọ ahụ", "Isiokwu"] },
            { title: "Mee ka ọ dabara gị", bullets: ["Isiokwu kacha mkpa n'isi mmalite", "Tinye nnabata na ajụjụ", "Kesaa ya tupu nzukọ ahụ"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o dee agenda otu awa maka ezi otu ị so na ya, nwere isiokwu atọ na oge maka ajụjụ.",
          youCanNow: "ide agenda nzukọ doro anya site na ngwa enyemaka AI.",
          quickCheck: [
            { objective: "O4", q: "Kedu ihe anọ prompt agenda kwesịrị ịgwa AI?", options: ["Nọmba ekwentị ndị otu", "Naanị ụbọchị", "Otu ahụ, ebumnuche, ogologo oge na isiokwu", "Ndepụta nri mmanya nzukọ ahụ"], answer: 2, why: "Site n'otu ahụ, ebumnuche, ogologo oge na isiokwu, AI nwere ike ide agenda bara uru." },
            { objective: "O4", q: "AI tinyere ịhọpụta odeakwụkwọ ọhụrụ n'ikpeazụ, ya na nkeji 5. Ọ bụ isiokwu gị kacha mkpa. Gịnị ka ị ga-eme?", options: ["Hapụ ya otu ahụ", "Wepụ ya", "Mee ka nzukọ ahụ dị mkpụmkpụ", "Kwaga ya n'isi ma nye ya oge karịa"], answer: 3, why: "Isiokwu kacha mkpa kwesịrị ịbịa n'isi ka oge ghara ịkọ ya n'ọgwụgwụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ide ozi na ndetu doro anya nye otu",
          minutes: 5,
          goal: "Dee ozi ncheta nzukọ ma gbanwee ndetu dị ọgbaghara ka ọ bụrụ obere nchịkọta.",
          text: [
            "Ezigbo ozi ncheta na-ekwu gịnị, mgbe, ebee, na ihe a ga-ebute, n'ahịrị ole na ole dị mkpụmkpụ. Rịọ AI ka o dee otu n'olu enyi, na nke abụọ n'asụsụ ọzọ ma ọ bụrụ na otu gị chọrọ ya.",
            "Mgbe nzukọ gachara, AI nwere ike ịgbanwe ndetu dị ọgbaghara ka ọ bụrụ nchịkọta dị ọcha: ihe e kpebiri, onye ga-eme gịnị, na mgbe ọ ga-agwụ. Hapụ ozi nzuzo, dị ka nsogbu ahụike ma ọ bụ nsogbu ego onye ọzọ.",
            "Tupu i zipu ya, lelee aha, ụbọchị na mkpebi ya na onye nọ ebe ahụ. Nchịkọta ga-adakọrịrị na ihe mere n'ezie."
          ],
          steps: ["Rịọ ozi ncheta n'olu enyi nwere gịnị, mgbe, ebee na ihe a ga-ebute.", "Rịọ ya n'asụsụ nke abụọ ma ọ bụrụ na ọ dị mkpa.", "Mgbe nzukọ gachara, tinye ndetu gị dị ọgbaghara n'enweghị ozi nzuzo.", "Rịọ nchịkọta: mkpebi, onye ga-eme gịnị, na mgbe.", "Lelee ya na onye nọ ebe ahụ, wee zipu ya."],
          words: [["Nchịkọta (summary)", "ụdị dị mkpụmkpụ na-edebe naanị isi ihe."], ["Ọrụ a ga-arụ (action item)", "ọrụ mmadụ kwetara ime mgbe nzukọ gachara."]],
          slides: [
            { title: "Ezigbo ozi ncheta", bullets: ["Gịnị, mgbe, ebee, ihe a ga-ebute", "Mkpụmkpụ na n'olu enyi", "Asụsụ nke abụọ ma ọ bụrụ na ọ dị mkpa"] },
            { title: "Site na ndetu ruo nchịkọta", bullets: ["Tinye ndetu dị ọgbaghara, na-enweghị ozi nzuzo", "Rịọ mkpebi na ọrụ a ga-arụ", "Onye ga-eme gịnị, na mgbe"] },
            { title: "Lelee tupu i zipu", bullets: ["Aha, ụbọchị na mkpebi", "Jụọ onye nọ ebe ahụ"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ozi ncheta nwere ahịrị atọ maka nzukọ si na Nkuzi 4. Wee dee ndetu ise dị ọgbaghara maka omume ma rịọ ya ka ọ gbanwee ha ka ha bụrụ nchịkọta nwere ọrụ a ga-arụ.",
          youCanNow: "ide ozi ncheta nzukọ doro anya ma gbanwee ndetu ka ọ bụrụ nchịkọta nwere ọrụ a ga-arụ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka nchịkọta nzukọ na-edepụta?", options: ["Mkpebi, onye ga-eme gịnị, na mgbe", "Nsogbu nzuzo onye ọ bụla", "Naanị nri mmanya", "Okwu ọ bụla e kwuru"], answer: 0, why: "Nchịkọta na-egosi ihe e kpebiri na onye ga-eme gịnị na mgbe." },
            { objective: "O5", q: "Ndetu gị na-ekwu na otu onye otu enwebeghị ike ịkwụ ụgwọ ụlọ. Gịnị ka ị ga-eme tupu i tinye ha n'AI?", options: ["Hapụ ya; ọ bara uru", "Wepụ ozi nzuzo ahụ", "Tinye aha ya zuru ezu", "Zipu ndetu ahụ nye okporo ụzọ niile"], answer: 1, why: "Ozi nzuzo gbasara ego ma ọ bụ ahụike mmadụ anaghị abanye na prompt AI ma ọ bụ nchịkọta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ime ndepụta ebe enyemaka obodo",
          minutes: 5,
          goal: "Mee ndepụta enyemaka dị nso nwere otu peeji nke gị onwe gị lelere.",
          text: [
            "Ndepụta ebe enyemaka na-enyere ndị agbata obi aka ịchọta enyemaka ngwa ngwa. Mee ka ọ bụrụ otu peeji: ụdị enyemaka, aha mmemme ahụ, nọmba ekwentị gọọmentị ma ọ bụ weebụsaịtị, na oge mmeghe.",
            "Jiri AI hazie otu peeji ahụ ga-adị ma kọwaa mmemme ọ bụla n'otu ahịrịokwu dị mfe. Nweta ezi aha, nọmba na oge mmeghe site na 211, weebụsaịtị gọọmentị mmemme ahụ, ma ọ bụ oku ekwentị, ọ bụghị site n'AI.",
            "Dee ụbọchị n'ala peeji ahụ (\"E lelere ya na ...\"). Mmemme na-agbanwe, ya mere lelee ndepụta ahụ ọzọ kwa ọnwa ole na ole."
          ],
          steps: ["Họrọ mkpa atọ obodo gị nwere.", "Chọta otu ezi mmemme maka nke ọ bụla site na 211 ma ọ bụ weebụsaịtị gọọmentị.", "Rịọ AI ka o mee nhazi peeji dị mfe na nkọwa dị mfe nwere otu ahịrị maka nke ọ bụla.", "Dejupụta nọmba gọọmentị na oge mmeghe n'onwe gị.", "Tinye ụbọchị i lelere ya."],
          words: [["Nhazi peeji (layout)", "otu e si hazie okwu na igbe n'elu peeji."]],
          sources: [{ name: "211.org: find your local 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Ndepụta ebe enyemaka nwere otu peeji", bullets: ["Ụdị enyemaka na aha mmemme", "Nọmba ekwentị ma ọ bụ weebụsaịtị gọọmentị", "Oge mmeghe"] },
            { title: "Onye na-eme gịnị", bullets: ["AI: nhazi peeji na nkọwa dị mfe", "Gị: ezi aha, nọmba, oge mmeghe site n'isi iyi gọọmentị"] },
            { title: "Mee ka ọ dịrị ọhụrụ", bullets: ["Dee \"E lelere ya na\" na ụbọchị ahụ", "Lelee ya ọzọ kwa ọnwa ole na ole"] }
          ],
          tryIt: "Ọrụ ikpeazụ: hazie obere nzukọ maka otu gị nwere agenda AI dere na ozi ncheta, ma mee ndepụta nwere otu peeji nke ebe enyemaka atọ dị nso nke gị onwe gị lelere.",
          youCanNow: "ịhazi nzukọ obodo ma kesaa ndepụta enyemaka dị nso e lelere elele.",
          quickCheck: [
            { objective: "O6", q: "Kedu ihe anọ na-aga n'ahịrị ọ bụla nke ndepụta ebe enyemaka?", options: ["Aha, afọ, adreesị na ọrụ", "Ọnụ ahịa, agba, nha na aha ngwaahịa", "Ụdị enyemaka, aha mmemme, nọmba ekwentị ma ọ bụ weebụsaịtị gọọmentị, na oge mmeghe", "Naanị aha mmemme"], answer: 2, why: "Ihe anọ ndị a na-enyere ndị agbata obi aka ịchọta ma nweta enyemaka ahụ ngwa ngwa." },
            { objective: "O6", q: "AI dejupụtara nọmba ekwentị maka ebe a na-enye nri n'efu. Gịnị ka ị ga-eme?", options: ["Jiri ya otu o si dị", "Wepụ ebe ahụ na ndepụta", "Jụọ AI ọzọ", "Jiri nọmba si na 211 ma ọ bụ saịtị gọọmentị dochie ya"], answer: 3, why: "Ezi nọmba na oge mmeghe na-esi na 211 ma ọ bụ isi iyi gọọmentị, ọ bụghị site n'AI." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: AI maka obodo gị",
        questions: [
          { objective: "O4", q: "Gịnị bụ agenda?", options: ["Ndepụta isiokwu nzukọ, n'usoro, ya na oge", "Akwụkwọ ụgwọ", "Mkparịta ụka otu na ekwentị", "Akwụkwọ ndebanye aha"], answer: 0, why: "Agenda na-ahazi ihe nzukọ ga-ekwu." },
          { objective: "O4", q: "Ebee ka isiokwu kacha mkpa kwesịrị ịnọ n'agenda?", options: ["N'ọgwụgwụ kpọmkwem", "N'isi mmalite nzukọ", "Ọ bụghị n'agenda", "N'otu nzukọ ọzọ n'afọ ọzọ"], answer: 1, why: "Isiokwu ndị bịara n'isi na-enweta oge na nlebara anya kacha ukwuu." },
          { objective: "O5", q: "Ezigbo ozi ncheta nzukọ nwere:", options: ["Nọmba ekwentị onye ọ bụla", "Adreesị ụlọ ndị otu", "Gịnị, mgbe, ebee na ihe a ga-ebute", "Akụkọ ogologo gbasara otu ahụ"], answer: 2, why: "Ihe anọ ndị ahụ bụ ihe ndị mmadụ chọrọ." },
          { objective: "O5", q: "Ndetu gị kwuru maka nsogbu ahụike otu onye otu. Tupu i nye AI ha, ị:", options: ["Hapụ ya", "Tinyekwu nkọwa", "Kesaa ya na mkparịta ụka otu", "Wepụ ozi nzuzo ahụ"], answer: 3, why: "Ozi nzuzo gbasara ndị ọzọ anaghị abanye na ngwa AI." },
          { objective: "O6", q: "Ebee ka nọmba ekwentị dị na ndepụta ebe enyemaka kwesịrị isi?", options: ["211 ma ọ bụ weebụsaịtị gọọmentị mmemme ahụ", "Ihe ọ bụla AI kwuru", "Echiche", "Akwụkwọ mgbasa ozi ochie site n'ọtụtụ afọ gara aga"], answer: 0, why: "AI nwere ike inye nọmba ezighi ezi; isi iyi gọọmentị ziri ezi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Obodo na Ndụ Kwa Ụbọchị",
    questions: [
      { objective: "O1", q: "Iji AI hazie izu ezinụlọ gị, buru ụzọ:", options: ["Depụta ihe niile ị ga-eme, ya na oge ị maara", "Dee nọmba ụlọ akụ gị", "Zụta app nhazi oge", "Kpọọ 211"], answer: 0, why: "AI chọrọ ndepụta gị iji hazie ya." },
      { objective: "O1", q: "Kedu ụzọ n'enweghị nsogbu isi kpọọ ndị ezinụlọ aha na prompt?", options: ["Aha zuru ezu na ụbọchị ọmụmụ", "\"Nwa m nke okenye\" ma ọ bụ aha mbụ", "Nọmba ID ụlọ akwụkwọ", "Nọmba Social Security"], answer: 1, why: "Ọrụ mmadụ ma ọ bụ aha mbụ na-edebe ozi na nzuzo." },
      { objective: "O1", q: "Mgbe AI hụrụ ihe na-adakọ, ị:", options: ["Hapụ AI ka o kpebie", "Leghara ya anya", "Rịọ echiche, wee mee mkpebi ikpeazụ", "Kagbuo ihe niile"], answer: 2, why: "AI na-atụ aro; gị na-ekpebi." },
      { objective: "O2", q: "Prompt atụmatụ nri kwesịrị inwe:", options: ["Okwuntughe gị", "Adreesị gị", "PIN ụlọ akụ gị", "Ọnụ ọgụgụ ndị mmadụ, ego, ihe na-amasị ha na nfụkasị ahụ"], answer: 3, why: "Ozi ndị ahụ na-eme ka atụmatụ ahụ baa uru." },
      { objective: "O2", q: "Gịnị mere ị ga-eji lelee mgbasa ozi ụlọ ahịa nke izu a mgbe AI mechara ndepụta gị?", options: ["AI amaghị ọnụ ahịa taa", "AI na-agbakwụnye ọnụ ahịa mgbe niile", "Ụlọ ahịa na-achọ ya", "Ọ bụ iwu"], answer: 0, why: "Ọnụ ahịa AI chepụtara bụ atụmatụ." },
      { objective: "O2", q: "Nri ndị bụ isi (staples) bụ:", options: ["Naanị ngwa ọfịs", "Nri ndị nkịtị ị na-ejikarị, dị ka osikapa na agwa", "Nri ụtọ dị oke ọnụ", "Nri ụlọ oriri"], answer: 1, why: "Nri ndị bụ isi bụ nri nkịtị a na-eri kwa ụbọchị." },
      { objective: "O3", q: "211 bụ:", options: ["App AI", "Ụlọ ahịa", "Ahịrị ekwentị nzuzo na-ejikọ ndị mmadụ na enyemaka dị nso", "Ụlọ akụ"], answer: 2, why: "211 na-ejikọ gị na enyemaka dị nso." },
      { objective: "O3", q: "Oku a na-akpọ 211 bụ:", options: ["Ihe a na-ekesa n'ịntanetị", "Ihe a na-edekọ maka mgbasa ozi", "Naanị maka azụmahịa", "Nzuzo, ị nwekwara ike ịghara ikwu aha gị"], answer: 3, why: "211 kwuru na oku bụ nzuzo, ị nwekwara ike ịghara ikwu aha gị." },
      { objective: "O3", q: "AI nyere gị ndepụta ebe a na-enye nri n'efu. Tupu i gaa, ị:", options: ["Kwado otu n'ime ha na 211, saịtị gọọmentị ya ma ọ bụ oku", "Gaa n'ebe niile", "Kwere ya kpamkpam", "Tinye ndepụta ahụ n'ịntanetị"], answer: 0, why: "Mmemme na-emechi ma ọ bụ gbanwee; buru ụzọ kwado ya." },
      { objective: "O3", q: "Ịrịọ enyemaka maka nri ma ọ bụ ụgwọ bụ:", options: ["Ihe a ga-ezo ezo", "Akụkụ nke ilekọta ezinụlọ gị", "Ihe a machibidoro", "Naanị maka ndị ọzọ"], answer: 1, why: "Iji enyemaka dị nso bụ nzọụkwụ amamihe, nke nkịtị." },
      { objective: "O4", q: "Agenda nzukọ kwesịrị inwe:", options: ["Naanị ụbọchị", "Nọmba ekwentị ndị otu", "Isiokwu n'usoro ya na oge", "Adreesị onye ọ bụla"], answer: 2, why: "Isiokwu na oge na-eme ka nzukọ ahụ ghara ịpụ n'ụzọ." },
      { objective: "O4", q: "Ezigbo prompt agenda na-agwa AI:", options: ["Ọ dịghị ihe", "Okwuntughe gị", "Ụlọ akụ gị", "Otu ahụ, ebumnuche, ogologo oge na isiokwu"], answer: 3, why: "Ozi ndị ahụ na-eme ka agenda ahụ baa uru." },
      { objective: "O4", q: "Mgbe ole ka ị ga-ekesa agenda ahụ?", options: ["Tupu nzukọ ahụ", "Ọ dịghị mgbe", "Otu ọnwa mgbe e mechara", "Naanị nye onye isi oche"], answer: 0, why: "Ikesa ya n'oge na-enyere ndị mmadụ aka ịbịa n'ịdị njikere." },
      { objective: "O5", q: "Otu gị nwere ndị otu na-asụ Spanish. Maka ozi ncheta, ị nwere ike:", options: ["Ịhapụ ha", "Ịrịọ AI ka o dee ya n'asụsụ nke abụọ", "Iji naanị foto", "Ọ dịghị ihe i zipụrụ"], answer: 1, why: "Ozi n'asụsụ nke abụọ na-agụnye ndị otu karịa." },
      { objective: "O5", q: "Ọrụ a ga-arụ (action item) bụ:", options: ["Ihe nkiri", "Ụdị app", "Ọrụ mmadụ kwetara ime mgbe nzukọ gachara", "Nri mmanya"], answer: 2, why: "Ọrụ a ga-arụ na-ekwu onye ga-eme gịnị, na mgbe." },
      { objective: "O5", q: "Tupu i zipu nchịkọta nzukọ, ị kwesịrị:", options: ["Ịtinye ozi nzuzo", "Iziga ya n'agụghị ya", "Ihichapụ ndetu ahụ", "Ịlele ya na onye nọ ebe ahụ"], answer: 3, why: "Nchịkọta ga-adakọrịrị na ihe mere." },
      { objective: "O6", q: "Na ndepụta ebe enyemaka, onye kwesịrị idejupụta nọmba ekwentị na oge mmeghe?", options: ["Gị, site n'isi iyi gọọmentị", "AI", "Ọ dịghị onye", "Mgbasa ozi na-apụta na mberede"], answer: 0, why: "Isi iyi gọọmentị na-enye nọmba ziri ezi." },
      { objective: "O6", q: "Gịnị mere ị ga-eji tinye \"E lelere ya na\" na ụbọchị na ndepụta ebe enyemaka gị?", options: ["Ọ na-eme ka ọ maa mma", "Mmemme na-agbanwe, ya mere ndị mmadụ ga-ama ka ọ dị ọhụrụ", "Iwu chọrọ ya", "Iji mee ka ọ dị ogologo"], answer: 1, why: "Ụbọchị na-egosi mgbe e kwadoro ya ikpeazụ." },
      { objective: "O6", q: "Ugboro ole ka ị ga-elele ndepụta ebe enyemaka ọzọ?", options: ["Ọ dịghị mgbe", "Kwa afọ iri", "Kwa ọnwa ole na ole", "Naanị ma ọ bụrụ na mmadụ mere mkpesa"], answer: 2, why: "Mmemme na-agbanwe, ya mere na-elele ya ọzọ ugboro ugboro." },
      { objective: "O6", q: "N'ọrụ ikpeazụ, ndepụta ebe enyemaka nwere:", options: ["Ebe iri AI chepụtara", "Adreesị ụlọ ndị otu", "Naanị otu ebe", "Ebe enyemaka atọ dị nso nke gị onwe gị lelere"], answer: 3, why: "Ọrụ ahụ bụ ebe enyemaka atọ i kwadoro." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 8, 10, 13, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Agenda", objective: "O4", notYet: "Agenda adịghị, ma ọ bụ isiokwu na-enweghị usoro ma ọ bụ oge.", meets: "Otu peeji nwere isiokwu n'usoro, oge, na oge maka ajụjụ.", exceeds: "Isiokwu kacha mkpa dị n'isi mmalite, e nwekwara nnabata." },
      { name: "Ozi ncheta", objective: "O5", notYet: "Gịnị, mgbe ma ọ bụ ebee adịghị n'ime ya.", meets: "Obere ozi ncheta n'olu enyi nwere gịnị, mgbe, ebee na ihe a ga-ebute.", exceeds: "O nwekwara ụdị n'asụsụ nke abụọ nke otu ahụ chọrọ." },
      { name: "E lelere ebe enyemaka", objective: "O3", notYet: "Mmemme ma ọ bụ nọmba si n'AI, e leleghịkwa ha.", meets: "Ezi mmemme atọ dị nso, nke ọ bụla e kwadoro site na 211, saịtị gọọmentị ma ọ bụ oku.", exceeds: "Nwere ike ikwu otu e si lelee nke ọ bụla." },
      { name: "Nhazi ndepụta ebe enyemaka", objective: "O6", notYet: "Nọmba ekwentị, oge mmeghe ma ọ bụ ụbọchị adịghị n'ime ya.", meets: "Otu peeji nwere ụdị enyemaka, mmemme, nọmba ma ọ bụ saịtị gọọmentị, oge mmeghe, na ụbọchị \"E lelere ya na\".", exceeds: "Mmemme ọ bụla nwere nkọwa dị mfe nwere otu ahịrị." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe mere nzukọ otu a haziri ahazi nwere agenda n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe ma ọ bụ ndị agbata obi ha jikọrọ na mmemme enyemaka dị nso a chọtara site na 211",
      "Ndị mmekọ obodo na-akọ na e kesara ndepụta ebe enyemaka ma na-emezi ha ka ha dịrị ọhụrụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ịntanetị, ma ọ bụ kọmputa ọba akwụkwọ ma ọ bụ nke ụlọ obodo",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Ụzọ isi nweta 211 site n'ekwentị, ozi ederede ma ọ bụ 211.org",
      "Akwụkwọ na mkpịsị ode, ma ọ bụ kalenda ekwentị, maka usoro na ndepụta",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Mee ihe ọmụmụ a na ezi otu, dị ka otu ndị nne na nna ma ọ bụ otu ndị bi n'ụlọ mgbazinye, ka agenda na ndepụta ebe enyemaka baa uru ozugbo.",
      "Gosi 211 n'ezie ma chetara ndị na-amụ ihe na ịrịọ enyemaka bụ ihe nkịtị.",
      "Lelee prompt maka ozi nzuzo: naanị aha mbụ ma ọ bụ ọrụ mmadụ, na ọ dịghị ihe gbasara ahụike ma ọ bụ ego ndị ọzọ.",
      "Chịkọta ndepụta ebe enyemaka e lelere ka ọ bụrụ otu ndepụta otu ahụ ga-ekerịta, ya na ụbọchị e lelere ya.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
