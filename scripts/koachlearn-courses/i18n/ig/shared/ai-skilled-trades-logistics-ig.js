"use strict";

// Koach Learn course (Igbo translation of shared/ai-skilled-trades-logistics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-skilled-trades-logistics-ig",
  lang: "ig",
  translationOf: "ai-skilled-trades-logistics",
  category: "Re-Entry",
  name: "AI maka Ọrụ Aka na Logistics",
  skills: "Iji AI kọwaa akwụkwọ ntụziaka na spec, Ide estimate ọrụ, Ime ndepụta nchekwa, Idebe ndekọ ọrụ nwere foto na ndetu, Ịhazi ụzọ na ibu, Ịchọta apprenticeship na ọrụ aka",
  outcome: "iji ngwa enyemaka AI n'efu na ekwentị gị ghọta akwụkwọ ntụziaka, dee estimate ọrụ doro anya, mee ndepụta nchekwa ọrụ nke ị na-elele n'iwu gọọmentị, debe ndekọ ọrụ, hazie ụzọ mbupu ma ọ bụ ụzọ ọrụ, ma chọta apprenticeship na ọrụ aka.",
  about: [
    "A na-achọ ndị ọrụ aka (ọkụ eletrik, plumbing, HVAC, ọrụ osisi, welding, ịrụzi ụgbọala) na ndị ọrụ logistics (ụlọ nkwakọba ngwaahịa, forklift, iziga ngwa, ịnya ụgbọ ibu, mbupu). Ọtụtụ ụzọ na-amalite site na apprenticeship ma ọ bụ ọzụzụ dị mkpụmkpụ, ọ bụghị akara mmụta mahadum. Ọtụtụ ndị were mmadụ n'ọrụ n'ebe ndị a na-ewe ndị nwere akụkọ mkpọrọ.",
    "AI anaghị akụ hama ma ọ bụ anya ụgbọ ibu. Mana na ekwentị, ọ nwere ike ịkọwa akwụkwọ ntụziaka n'okwu dị mfe, dee estimate na ndetu ọrụ, dee ndepụta nchekwa mbụ, ma nyere aka hazie ụzọ. Nke a na-echekwa oge ma na-eme ka ị dị ka onye ọkachamara.",
    "Ihe ọmụmụ a bụ maka ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị ọrụ nọ na mmemme ọzụzụ ọrụ, na onye ọ bụla na-amalite ọrụ aka ma ọ bụ ọrụ logistics. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ. Iwu nchekwa na-esi mgbe niile n'aka onye were gị n'ọrụ, onye mepụtara ngwa ahụ na OSHA, ọ bụghị n'aka AI."
  ],
  finalTask: "Maka otu ezi ọrụ ma ọ bụ ọrụ omume n'ọrụ aka ma ọ bụ logistics, jiri enyemaka AI mee ngwugwu ọrụ: nchịkọta n'okwu dị mfe nke akụkụ akwụkwọ ntụziaka ma ọ bụ spec, estimate ma ọ bụ work order e dere ede, ndepụta nchekwa ọrụ i lelere n'isi iyi gọọmentị, ndekọ ọrụ nwere ndetu foto tupu na mgbe e mechara, na atụmatụ ụzọ ma ọ bụ ibu. Wee chọta otu apprenticeship ma ọ bụ ọrụ aka ị nwere ike itinye akwụkwọ maka ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị ọrụ nọ na mmemme ọzụzụ ọrụ, na onye ọ bụla na-amalite ọrụ aka (ọkụ eletrik, plumbing, HVAC, ọrụ osisi, welding, ịrụzi ụgbọala) ma ọ bụ ọrụ logistics (ụlọ nkwakọba ngwaahịa, forklift, iziga ngwa, ịnya ụgbọ ibu).",
    startingPoint: "Ha nwere ike iji ekwentị kpọọ oku, zipu ozi ma see foto, ọtụtụ n'ime ha nwekwara ahụmịhe ọrụ aka. Ole na ole ejirila ngwa enyemaka AI gụọ akwụkwọ ntụziaka, dee estimate ma ọ bụ hazie ụzọ.",
    gap: "A na-atụ anya ka ndị ọrụ aka na logistics gụọ akwụkwọ ntụziaka teknụzụ, dee estimate na ndetu ọrụ, soro iwu nchekwa ma hazie ụzọ. Iji AI na ekwentị, na ilele ya n'isi iyi gọọmentị, na-echekwa oge, na-eme ka ha dị ka ndị ọkachamara, ma na-enyere ha aka ịbanye n'apprenticeship na ọrụ aka.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: ọtụtụ mgbe naanị ekwentị, nke a na-eji n'ebe ọrụ ma ọ bụ n'ime ụgbọ ibu",
      "Iwu nchekwa, torque, voltage na oke ịdị arọ na-esi n'akwụkwọ ntụziaka, onye were gị n'ọrụ na OSHA, ọ bụghị mgbe ọ bụla n'aka AI",
      "Nzuzo: enweghị akwụkwọ nzuzo ma ọ bụ ozi nzuzo nke ndị ahịa na foto ma ọ bụ prompt AI",
      "Oge: nkuzi ihe dị ka nkeji ise nke dabara n'etiti oge ọrụ"
    ],
    prerequisites: "Ọ dịghị. Ndị na-ejibeghị ngwa AI nwere ike ibu ụzọ were \"Mmalite AI na Obi Ike n'Ihe Dijitalụ\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị akụkụ akwụkwọ ntụziaka ma ọ bụ spec sheet", action: "iji AI kọwaa ya n'okwu dị mfe ma lelee nọmba ọ bụla n'akwụkwọ ntụziaka ahụ", standard: "nke mere na nọmba ọ bụla dabara n'isi iyi ahụ" },
    { id: "O2", condition: "Maka ezi ọrụ ma ọ bụ ọrụ omume", action: "ide estimate ma ọ bụ work order nwere ụgwọ ọrụ aka, ngwa, ngụkọta, ihe gụnyere na ụbọchị ọ ga-agwụ", standard: "ma i jiri aka gị lelee mgbakọ ahụ, ma tinye akụkụ ọ bụla dị mkpa" },
    { id: "O3", condition: "Maka otu ezi ọrụ", action: "iji AI dee ndepụta nchekwa ọrụ mbụ ma lelee ya n'akwụkwọ ntụziaka ma ọ bụ n'isi iyi nchekwa gọọmentị", standard: "ma tinye ihe ọ bụla AI hapụrụ tupu ọrụ amalite" },
    { id: "O4", condition: "Mgbe ọrụ gwụchara", action: "ide ndekọ ọrụ nwere ụbọchị, ebe, ọrụ e mere, ngwa e ji rụọ ọrụ, nsogbu, nzọụkwụ ọzọ na ndetu foto", standard: "nke nwere akụkụ ọ bụla, na-enweghị ozi nzuzo onye ahịa" },
    { id: "O5", condition: "Mgbe e nyere gị ọtụtụ ebe nkwụsị ma ọ bụ ngwa", action: "ịhazi ụzọ na ndepụta ibu ma ọ bụ ngwaahịa dị mfe, wee lelee ụzọ ahụ na app maapụ", standard: "ma tinye ibu n'usoro azụ nke ebe nkwụsị, ma lelee oge ịnya ụgbọ" },
    { id: "O6", condition: "Site n'iji Apprenticeship.gov ma ọ bụ mmemme dị n'obodo gị", action: "ịchọta otu apprenticeship ma ọ bụ ọrụ aka ị nwere ike itinye akwụkwọ maka ya", standard: "ma dee ihe ọ chọrọ na otu esi etinye akwụkwọ" }
  ],
  chapters: [
    {
      name: "Isi 1: AI n'ebe ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Iji AI ghọta akwụkwọ ntụziaka na spec",
          minutes: 5,
          goal: "Jiri AI kọwaa akwụkwọ ntụziaka teknụzụ ma ọ bụ spec n'okwu dị mfe, wee lelee ya n'isi iyi ahụ.",
          text: [
            "Akwụkwọ ntụziaka (manual), spec sheet na ntụziaka nwụnye jupụtara n'okwu siri ike. AI nwere ike ịkọwa ha. Detuo ma ọ bụ dee otu akụkụ, ma ọ bụ see ya foto ma ọ bụrụ na app AI gị na-agụ foto, wee jụọ: \"Kọwaa nke a n'okwu dị mfe. Gịnị bụ nzọụkwụ ya, ngwa ọrụ ole ka m chọrọ, gịnịkwa bụ ihe ịdọ aka na ntị?\"",
            "Jụọ ajụjụ nsochi: \"Gịnị ka 'torque to 25 ft-lbs' pụtara?\" ma ọ bụ \"Gịnị dị iche n'etiti GFCI na soket nkịtị?\" AI bụ ezigbo onye nkuzi maka okwu na echiche.",
            "Mana akwụkwọ ntụziaka na-emeri. Nọmba dị ka torque, voltage, pressure, oghere a ga-ahapụ na oke ịdị arọ ga-esi n'akwụkwọ ntụziaka onye mepụtara ngwa ahụ, code obodo gị na-eji, ma ọ bụ onye isi gị. Ọ bụrụ na AI na akwụkwọ ntụziaka ekwekọghị, soro akwụkwọ ntụziaka ma jụọ onye isi gị."
          ],
          steps: ["Detuo, dee ma ọ bụ see foto akụkụ akwụkwọ ntụziaka ahụ.", "Rịọ AI ka ọ kọwaa ya n'okwu dị mfe: nzọụkwụ, ngwa ọrụ, ihe ịdọ aka na ntị.", "Jụọ ajụjụ nsochi maka okwu ị na-amaghị.", "Lelee nọmba ọ bụla n'akwụkwọ ntụziaka.", "Ọ bụrụ na ha ekwekọghị, soro akwụkwọ ntụziaka ma jụọ onye isi gị."],
          words: [["Spec sheet", "akwụkwọ na-edepụta nha na ihe achọrọ kpọmkwem maka otu ngwa."], ["Torque", "otu esi tụchie ihe ike, dị ka bolt."], ["Code", "iwu gọọmentị maka iwu ụlọ ma ọ bụ ọrụ ọkụ eletrik nke otu obodo chọrọ."]],
          slides: [
            { title: "AI dị ka onye nkuzi akwụkwọ ntụziaka gị", bullets: ["Tinye, dee ma ọ bụ see foto otu akụkụ", "Jụọ maka nzọụkwụ, ngwa ọrụ na ihe ịdọ aka na ntị", "Jụọ ihe okwu pụtara"] },
            { title: "Akwụkwọ ntụziaka na-emeri", bullets: ["Torque, voltage, pressure, oke ịdị arọ", "Na-esi n'akwụkwọ ntụziaka, code ma ọ bụ onye isi"] },
            { title: "Mgbe ha ekwekọghị", bullets: ["Soro akwụkwọ ntụziaka", "Jụọ onye isi gị"] }
          ],
          tryIt: "Chọta akwụkwọ ntụziaka nke ihe ị nwere (ngwa ọrụ, ngwa ụlọ ma ọ bụ ụgbọala) n'ịntanetị ma ọ bụ n'drọwa. Rịọ AI ka ọ kọwaa otu akụkụ n'okwu dị mfe, wee lelee nọmba ọ bụla n'akwụkwọ ntụziaka ahụ.",
          youCanNow: "iji AI ghọta akwụkwọ ntụziaka na spec ma na-atụkwasị obi na nọmba gọọmentị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ spec sheet?", options: ["Akwụkwọ mgbasa ozi nwere ọnụahịa", "Ndepụta nha na ihe achọrọ kpọmkwem maka otu ngwa", "Akwụkwọ nchekwa a kwụnyere n'ọnụ ụlọ izu ike", "Ihe onye ahịa kwuru banyere ngwa"], answer: 1, why: "Spec sheet na-enye nha na ihe achọrọ kpọmkwem nke i ga-emezu." },
            { objective: "O1", q: "AI kọwara akụkụ akwụkwọ ntụziaka mana o nyere voltage dị iche na nke dị n'akwụkwọ ntụziaka. Gịnị ka ị ga-eme?", options: ["Jiri voltage dị n'akwụkwọ ntụziaka ma jụọ onye isi gị", "Jiri nọmba AI n'ihi na ọ dị ọhụrụ", "Kee nọmba abụọ ahụ n'etiti", "Wụfee nzọụkwụ ahụ"], answer: 0, why: "Nọmba dị ka voltage na-esi n'akwụkwọ ntụziaka, ọ bụghị AI; jụọ onye isi gị ma ọ bụrụ na obi abụọ dị gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide estimate ma ọ bụ work order doro anya",
          minutes: 5,
          goal: "Jiri enyemaka AI dee estimate ma ọ bụ work order dị ka nke ọkachamara.",
          text: [
            "Ndị ahịa na ndị isi na-atụkwasị obi na ndị ọrụ na-ede ihe ede. Estimate na-agwa onye ahịa ihe ị ga-eme na ego ọ ga-efu tupu ịmalite. Work order na-edekọ ọrụ: ihe a rịọrọ, ihe e mere, ngwa e ji rụọ ọrụ na oge e jiri.",
            "Gwa AI eziokwu ahụ ka o hazie ya: \"Dee estimate dị mfe maka ịgbanwe pọmpụ mmiri ụlọ ịsa ahụ. Ụgwọ ọrụ aka: awa 2 na $60 kwa awa. Ngwa: pọmpụ $85, ọkpọkọ mmiri $15. Ọ dị irè ụbọchị 30. Onye ahịa ga-ahọrọ ụdị pọmpụ.\" Lelee mgbakọ ahụ na nkọwa ọ bụla.",
            "Kwụwa aka ọtọ: depụta ihe gụnyere na ihe na-agụnyeghị, ma kwuo na ọnụahịa nwere ike ịgbanwe ma ọ bụrụ na ịchọta nsogbu zoro ezo, mana naanị mgbe onye ahịa kwetara. Jiri template n'efu na Google Docs ma ọ bụ Word ma chekwaa otu mbipụta nke ọ bụla."
          ],
          steps: ["Dee ọrụ ahụ, awa ọrụ aka na ọnụ ya, na ngwa ya na ọnụahịa ha.", "Rịọ AI ka o hazie estimate ma ọ bụ work order dị mfe.", "Lelee mgbakọ na nkọwa ya.", "Tinye ihe gụnyere, ihe na-agụnyeghị, na mgbe ọ ga-agwụ.", "Chekwaa otu mbipụta."],
          words: [["Estimate", "ọnụahịa e dere ede maka ọrụ tupu ọ malite."], ["Work order", "ndekọ ọrụ: ihe a rịọrọ, ihe e mere, ngwa na oge."], ["Ụgwọ ọrụ aka (labor)", "ego maka oge onye ọrụ."]],
          slides: [
            { title: "Dee ya ede", bullets: ["Estimate: tupu ọrụ", "Work order: ndekọ ọrụ ahụ"] },
            { title: "Ka AI hazie ya", bullets: ["Nye ya ụgwọ ọrụ aka, ọnụ ya na ngwa", "Lelee mgbakọ"] },
            { title: "Kwụwa aka ọtọ", bullets: ["Ihe gụnyere na ihe na-agụnyeghị", "Mgbanwe naanị mgbe onye ahịa kwetara", "Chekwaa mbipụta ọ bụla"] }
          ],
          tryIt: "Jiri enyemaka AI dee estimate maka ezi ọrụ ma ọ bụ ọrụ omume: ụgwọ ọrụ aka, ngwa, ngụkọta, ihe gụnyere na ụbọchị ọ ga-agwụ. Jiri aka gị lelee mgbakọ ahụ.",
          youCanNow: "iji enyemaka AI dee estimate ma ọ bụ work order doro anya ma kwụwa aka ọtọ.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka \"ngwa\" (parts) pụtara n'estimate?", options: ["Oge onye ọrụ", "Ụtụ isi n'ọrụ ahụ", "Ngwa achọrọ maka ọrụ ahụ", "Oge njem"], answer: 2, why: "Ngwa bụ ihe e ji arụ ọrụ; ụgwọ ọrụ aka bụ oge onye ọrụ." },
            { objective: "O2", q: "AI gbakọrọ estimate gị ka ọ bụrụ $310, mana mgbakọ aka gị bụ $280. Gịnị ka ị ga-eme?", options: ["Zipu $310 n'ihi na AI ka mara mgbakọ", "Zipu $280 n'eleleghị ya", "Zipu nọmba abụọ ahụ nye onye ahịa", "Lelee ahịrị ọ bụla ọzọ ma zipu ngụkọta ziri ezi"], answer: 3, why: "Lelee mgbakọ mgbe niile, ahịrị n'ahịrị, tupu i zipu estimate." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime ndepụta nchekwa ọrụ",
          minutes: 6,
          goal: "Jiri AI dee ndepụta nchekwa ọrụ mbụ ma lelee ya n'isi iyi nchekwa gọọmentị.",
          text: [
            "Ọtụtụ ọrụ aka na ọrụ ụlọ nkwakọba ngwaahịa na-eji nyocha nchekwa ọrụ (job safety analysis ma ọ bụ hazard analysis): depụta nzọụkwụ ọrụ ahụ, ihe egwu dị na nzọụkwụ ọ bụla, na otu esi achịkwa ha. Ihe egwu ndị a na-ahụkarị: ịda, ọkụ eletrik ịgba mmadụ, mmerụ ahụ site n'ibuli ihe, igwe na-agagharị dị ka forklift, kemịkalụ na okpomọkụ.",
            "AI nwere ike ide nke mbụ: \"Mee ndepụta nchekwa ọrụ maka ịgbanwe ọkụ dị n'elu ụlọ: nzọụkwụ, ihe egwu na njikwa, gụnyere ngwa nchekwa onwe onye.\" Ọ na-etinyekarị ihe ndị bụ isi dị mma dị ka igbanyụ breaker na ilele na ọkụ adịghị.",
            "Mana AI abụghị onye ikike nchekwa. Lelee ndepụta ahụ na onye isi gị, ntụziaka onye mepụtara ngwa ahụ na isi iyi gọọmentị dị ka OSHA (osha.gov). Klas OSHA Outreach nke awa 10 na awa 30 na-akụzi ihe ndị bụ isi nke nchekwa; OSHA kwuru na kaadị ahụ bụ nhọrọ, ọ bụghị asambodo ma ọ bụ ikike (license), ọ bụ ezie na ụfọdụ ndị were mmadụ n'ọrụ na ụfọdụ steeti na-achọ ya."
          ],
          steps: ["Depụta nzọụkwụ ọrụ ahụ.", "Rịọ AI maka ihe egwu na njikwa na nzọụkwụ ọ bụla, gụnyere ngwa nchekwa.", "Lelee ya na onye isi gị, akwụkwọ ntụziaka na osha.gov.", "Dozie ihe ọ bụla fọdụrụ ma ọ bụ ezighi ezi.", "Gwa ndị otu ọrụ gị ya tupu ịmalite."],
          words: [["Ihe egwu (hazard)", "ihe nwere ike imerụ mmadụ ahụ."], ["PPE", "ngwa nchekwa onwe onye (personal protective equipment), dị ka uwe aka, ugogbe nchekwa, okpu ike na akpụkpọ ụkwụ nwere igwe n'isi."], ["Nyocha nchekwa ọrụ", "ndepụta nzọụkwụ ọrụ, ihe egwu ya na njikwa ya."]],
          slides: [
            { title: "Nyocha nchekwa ọrụ", bullets: ["Nzọụkwụ ọrụ ahụ", "Ihe egwu na nzọụkwụ ọ bụla", "Njikwa na PPE"] },
            { title: "AI na-ede nke mbụ, mmadụ na-ekpebi", bullets: ["AI na-edepụta ihe egwu a na-ahụkarị", "Onye isi, akwụkwọ ntụziaka na OSHA na-akwado"] },
            { title: "Kaadị OSHA Outreach", bullets: ["Klas nchekwa awa 10 na awa 30", "Nhọrọ; ọ bụghị asambodo ma ọ bụ license", "Ụfọdụ ndị were mmadụ n'ọrụ na steeti na-achọ ya"] }
          ],
          sources: [{ name: "OSHA Outreach Training Program", url: "https://www.osha.gov/training/outreach" }, { name: "OSHA Outreach Training Program FAQs", url: "https://www.osha.gov/training/outreach/faq" }],
          tryIt: "Rịọ AI maka ndepụta nchekwa ọrụ maka otu ezi ọrụ (dị ka ibuli igbe dị arọ ma ọ bụ ịgbanwe taya). Wee chọta otu peeji nchekwa gọọmentị ma ọ bụ akwụkwọ ntụziaka maka ọrụ ahụ ma tinye ihe ọ bụla AI hapụrụ.",
          youCanNow: "iji AI dee ndepụta nchekwa ọrụ mbụ ma lelee ya n'isi iyi gọọmentị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ihe atọ nyocha nchekwa ọrụ na-edepụta?", options: ["Nzọụkwụ, ihe egwu na njikwa", "Ngwa ọrụ, ọnụahịa na oge", "Ndị ọrụ, oge ọrụ na izu ike", "Ndị ahịa, adreesị na nọmba ekwentị"], answer: 0, why: "Nyocha nchekwa ọrụ na-edepụta nzọụkwụ ọ bụla, ihe egwu ya na njikwa ha." },
            { objective: "O3", q: "Ndepụta nchekwa AI gị maka ibuli igbe ekwughị uwe aka, mana iwu onye were gị n'ọrụ chọrọ ya. Gịnị ka ị ga-eme?", options: ["Ghara iyi uwe aka n'ihi na AI edepụtaghị ya", "Jụọ AI ọzọ ruo mgbe ọ kwenyere", "Tinye uwe aka na ndepụta ahụ ma soro iwu onye were gị n'ọrụ", "Yiri uwe aka naanị maka igbe dị arọ"], answer: 2, why: "Iwu gọọmentị na nke onye were gị n'ọrụ na-emeri; tinye ihe AI hapụrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: AI n'ebe ọrụ",
        questions: [
          { objective: "O1", q: "AI kwuru ka i tụchie bolt ruo 40 ft-lbs, mana akwụkwọ ntụziaka kwuru 25. Gịnị ka ị ga-eme?", options: ["Soro AI", "Were nọmba dị n'etiti", "Soro akwụkwọ ntụziaka ma jụọ onye isi gị", "Tụchie ya ike dịka i nwere ike"], answer: 2, why: "Nọmba gọọmentị na-esi n'akwụkwọ ntụziaka." },
          { objective: "O2", q: "Gịnị bụ estimate?", options: ["Ọnụahịa e dere ede maka ọrụ tupu ọ malite", "Akwụkwọ nnata ego mgbe a kwụrụ ụgwọ", "Iwu nchekwa", "Ụdị ngwa ọrụ"], answer: 0, why: "Estimate na-eme ka onye ọ bụla mara ihe ọ ga-atụ anya ya tupu ọrụ amalite." },
          { objective: "O2", q: "Ị chọtara nsogbu zoro ezo nke na-eme ka ọnụahịa rịa elu. Gịnị ka ị kwesịrị ime?", options: ["Gbakwunye ego n'agwaghị ha", "Hapụ ọrụ ahụ", "Zoo nsogbu ahụ", "Nweta nkwenye onye ahịa tupu ịrụ ọrụ ọzọ"], answer: 3, why: "Mgbanwe ọnụahịa chọrọ nkwenye onye ahịa." },
          { objective: "O3", q: "PPE pụtara:", options: ["Onye ọrụ gọọmentị a na-akwụ ụgwọ", "Ngwa nchekwa onwe onye (personal protective equipment)", "Ihe ndọtị plọg ọkụ", "Ịbanye n'ala onye ọzọ"], answer: 1, why: "PPE bụ ngwa dị ka uwe aka na ugogbe nchekwa." },
          { objective: "O3", q: "Dị ka OSHA si kwuo, kaadị OSHA awa 10 bụ:", options: ["License gọọmentị etiti", "Nhọrọ, ọ bụghị asambodo ma ọ bụ license", "License ịnya ụgbọala", "Ihe OSHA chọrọ maka ọrụ ọ bụla"], answer: 1, why: "OSHA kwuru na kaadị Outreach abụghị asambodo ma ọ bụ license." }
        ]
      }
    },
    {
      name: "Isi 2: Logistics, ndekọ na ọrụ ndụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Idebe ndekọ ọrụ nwere foto na ndetu",
          minutes: 5,
          goal: "Debe ndekọ ọrụ kwa ụbọchị nwere foto na ndetu dị mkpụmkpụ, na-eji AI hazie ha.",
          text: [
            "Ezigbo ndekọ ọrụ na-echebe gị ma na-atọ ndị were mmadụ n'ọrụ ụtọ: ọ na-egosi ihe i mere, mgbe i mere ya, na na i mere ya nke ọma. See foto tupu na mgbe e mechara, dee ngwa i jiri, nsogbu ị chọtara na oge i jiri.",
            "Jiri voice-to-text n'ekwentị gị kwuo ndetu gị mgbe ọrụ gwụrụ, wee jụọ AI: \"Mee ndetu ndị a ka ọ bụrụ ndekọ ọrụ dị mkpụmkpụ dị ka nke ọkachamara, nwere ụbọchị, ebe, ọrụ e mere, ngwa, nsogbu na nzọụkwụ ọzọ.\" Lelee na ọ ziri ezi.",
            "Soro iwu onye were gị n'ọrụ gbasara foto: ụfọdụ ebe ọrụ anaghị ekwe ka e see foto, ọ dịghịkwa mgbe ị ga-ese foto ndị ahịa, akwụkwọ nzuzo ha ma ọ bụ usoro nchekwa ụlọ ha n'enweghị ikike. Chekwaa ndekọ ebe onye were gị n'ọrụ kwuru."
          ],
          steps: ["See foto tupu na mgbe e mechara ebe a na-ekwe.", "Kwuo ma ọ bụ dee ndetu ngwa ngwa mgbe ọrụ gwụrụ.", "Rịọ AI ka o hazie ndekọ ọrụ.", "Lelee na ọ ziri ezi.", "Chekwaa ya ebe onye were gị n'ọrụ kwuru."],
          words: [["Ndekọ ọrụ (work log)", "ndekọ kwa ụbọchị nke ọrụ i mere."], ["Voice-to-text", "ihe dị n'ekwentị na-agbanwe okwu ọnụ gị ka ọ bụrụ ihe e dere ede."]],
          slides: [
            { title: "Ihe mere i ji debe ndekọ", bullets: ["Ọ na-egosi ihe i mere na mgbe i mere ya", "Ọ na-echebe gị ma na-atọ ndị isi ụtọ"] },
            { title: "Ndekọ ngwa ngwa", bullets: ["Foto tupu na mgbe e mechara", "Kwuo ndetu gị", "AI na-ahazi ndekọ ahụ"] },
            { title: "Iwu foto", bullets: ["Soro iwu ebe ọrụ", "Ọ bụghị ndị ahịa, akwụkwọ nzuzo ma ọ bụ usoro nchekwa", "Chekwaa ebe onye were gị n'ọrụ kwuru"] }
          ],
          tryIt: "Rụọ obere ọrụ n'ụlọ (rụzie, hichaa ma ọ bụ hazie ihe). See foto tupu na mgbe e mechara, kwuo ndetu gị, ma mee ka AI mee ha ka ọ bụrụ ndekọ ọrụ.",
          youCanNow: "idebe ndekọ ọrụ dị ka nke ọkachamara nwere foto na ndetu AI haziri.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka foto \"tupu\" dị na ndekọ ọrụ na-egosi?", options: ["Otu i si rụọ ọrụ ngwa ngwa", "Ọnọdụ ihe ahụ tupu ịmalite ọrụ", "Ihu onye ahịa", "Ngwa ọrụ gị ị na-ere"], answer: 1, why: "Foto tupu na mgbe e mechara na-egosi ihe i gbanwere na na i mere ya nke ọma." },
            { objective: "O4", q: "Akwụkwọ ụlọ akụ onye ahịa dị n'elu tebụl ebe ị na-arụ ọrụ. Gịnị ka ị ga-eme tupu i see foto?", options: ["See foto ahụ; ọ bụ naanị maka ndekọ", "Jụọ AI ma ọ dị mma", "Mee ka akwụkwọ ahụ pụta ìhè nke ọma na foto", "Wepụ ya na foto ma ọ bụ rịọ onye ahịa ka o wepụ ya"], answer: 3, why: "Esela foto akwụkwọ nzuzo n'enweghị ikike." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịhazi ụzọ, ibu na ngwaahịa",
          minutes: 5,
          goal: "Jiri app maapụ na AI hazie ụzọ na ndepụta ibu ma ọ bụ ngwaahịa dị mfe.",
          text: [
            "Ndị ọkwọ ụgbọ na-ebuga ngwa, ndị na-arụzi ihe n'ụlọ ndị mmadụ na ndị ọrụ ụlọ nkwakọba ngwaahịa na-ahazi ụzọ na ibu kwa ụbọchị. App maapụ n'efu dị ka Google Maps na-ekwe ka i tinye ọtụtụ ebe nkwụsị ma na-egosi okporo ụzọ jupụtara. Ọtụtụ ụlọ ọrụ na-eji software ịhazi ụzọ nke ha; mụta ya mgbe ị malitere.",
            "AI nwere ike inyere gị aka iche echiche: \"Enwere m oku ọrụ 6: [mpaghara na oge]. Tụọ aro usoro ga-ebelata ịnya ụgbọ ma kwekọọ n'oge ndị ahụ.\" Wee lelee ya na app maapụ. Maka ibu: \"Mee ndepụta ibu maka ihe ndị a a ga-ebuga ka e buru ụzọ tinye ihe nke ebe nkwụsị ikpeazụ.\"",
            "Maka ngwaahịa (inventory), mpempe akwụkwọ dị mfe nwere ihe ahụ, ebe ọ dị (ahịrị, shelf), ọnụ ọgụgụ ya na mgbe a ga-azụkwu ya na-enyere aka. Ekwela ka AI gafee oke ịdị arọ, iwu ịkekọ ibu, ma ọ bụ iwu hours-of-service maka ndị ọkwọ ụgbọ; ha na-esi n'aka onye were gị n'ọrụ na iwu njem gọọmentị."
          ],
          steps: ["Depụta ebe nkwụsị nwere mpaghara na oge ha.", "Rịọ AI ka ọ tụọ aro usoro.", "Lelee ya na app maapụ nwere okporo ụzọ.", "Mee ndepụta ibu: e buru ụzọ tinye nke ebe nkwụsị ikpeazụ.", "Soro iwu ịdị arọ, ịkekọ ibu na oge ịnya ụgbọ nke onye were gị n'ọrụ."],
          words: [["Ụzọ (route)", "usoro na ụzọ e si aga ebe nkwụsị."], ["Ịkekọ ibu (load securement)", "ịkekọ ibu ka ọ ghara ịkpụgharị ma ọ bụ daa."], ["Hours of service", "iwu na-ekpebi ogologo oge ndị ọkwọ ụgbọ azụmahịa nwere ike ịnya ụgbọ na ịrụ ọrụ."]],
          slides: [
            { title: "Hazie ụzọ", bullets: ["Depụta ebe nkwụsị na oge ha", "AI na-atụ aro usoro", "Lelee ya na app maapụ"] },
            { title: "Hazie ibu", bullets: ["E buru ụzọ tinye nke ebe nkwụsị ikpeazụ", "Ngwaahịa: ihe, ebe ọ dị, ọnụ ọgụgụ"] },
            { title: "Iwu na-ebu ụzọ", bullets: ["Oke ịdị arọ na ịkekọ ibu", "Hours of service nke ndị ọkwọ ụgbọ", "Site n'aka onye were gị n'ọrụ na iwu gọọmentị"] }
          ],
          tryIt: "Họrọ ebe ise dị adị n'obodo gị. Rịọ AI ka ọ tụọ aro usoro kacha mma isi gaa ha, wee lelee ya na app maapụ n'efu ma tụnyere oge ịnya ụgbọ.",
          youCanNow: "iji AI na app maapụ hazie ụzọ na ibu ma na-eso iwu.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka inventory (ngwaahịa) pụtara?", options: ["Ndepụta ihe ị nwere n'ụlọ ahịa na ọnụ ọgụgụ ha", "Ụzọ kacha ọsọ", "Oge ọrụ onye ọkwọ ụgbọ", "Iwu nchekwa maka itinye ibu"], answer: 0, why: "Inventory bụ ọnụ ọgụgụ ihe ndị ị nwere." },
            { objective: "O5", q: "AI tụrụ aro usoro ụzọ maka ebe nkwụsị ise. Gịnị ka ị ga-eme ọzọ?", options: ["Soro ya n'eleleghị ya", "Lelee ya na app maapụ nwere okporo ụzọ tupu ịnya ụgbọ", "Rịọ ndị ahịa ka ha họrọ", "Buru ụzọ gaa ebe nkwụsị kacha anya"], answer: 1, why: "Echiche ụzọ AI chọrọ ilele na app maapụ nwere okporo ụzọ ugbu a." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịchọta apprenticeship na ọrụ aka",
          minutes: 5,
          goal: "Chọta Registered Apprenticeship ma ọ bụ ọrụ aka ma kwadebe itinye akwụkwọ.",
          text: [
            "Registered Apprenticeship na-ekwe ka ị nweta ụgwọ ọnwa mgbe ị na-amụ ọrụ aka, ya na ọzụzụ klas na asambodo a ma ama na njedebe. Apprenticeship.gov nke U.S. Department of Labor (Ngalaba Ọrụ US) nwere Apprenticeship Job Finder. Otu ndị ọrụ (unions), community colleges na mmemme pre-apprenticeship na-enyekwa ụzọ.",
            "Rịọ AI ka ọ kọwaa otu ọrụ aka: \"Gịnị ka onye HVAC apprentice na-eme kwa ụbọchị, ngwa ọrụ ole ka ha na-eji, mgbakọ ole ka ọ gụnyere?\" Wee rịọ ya ka o nyere gị aka mee ahụmịhe gị ka ọ bụrụ résumé ọrụ aka, na-edebe ihe niile n'eziokwu.",
            "Ụfọdụ ọrụ aka na ọrụ ịnya ụgbọ chọrọ license, ule ma ọ bụ akụkọ ịnya ụgbọ dị ọcha, ụfọdụ license na-elekwa akụkọ mkpọrọ; lelee na ụlọ ọrụ license steeti gị ma jụọ mmemme re-entry ma ọ bụ ọzụzụ ọrụ gị ndị were mmadụ n'ọrụ na mmemme na-anabata ndị nwere akụkọ mkpọrọ. Bịa n'oge mgbe niile ma dị njikere ịmụta: n'ọrụ aka, nke ahụ kacha mkpa."
          ],
          steps: ["Chọọ na Job Finder nke Apprenticeship.gov na mmemme union ma ọ bụ college dị n'obodo gị.", "Rịọ AI ka ọ kọwaa ọrụ aka ahụ na nka ọ chọrọ.", "Lelee iwu license na akụkọ mkpọrọ na ụlọ ọrụ steeti gị.", "Jụọ mmemme re-entry ma ọ bụ ọzụzụ ọrụ gị maka ndị were mmadụ n'ọrụ fair-chance.", "Jiri enyemaka AI mee résumé ọrụ aka nke eziokwu."],
          words: [["Registered Apprenticeship", "ọrụ a na-akwụ ụgwọ nwere ọzụzụ nke na-eduga n'asambodo a ma ama."], ["Pre-apprenticeship", "mmemme dị mkpụmkpụ na-akwadebe gị ịbanye n'apprenticeship."], ["Journeyworker", "onye ọrụ zụchara n'ọrụ aka."]],
          slides: [
            { title: "Nweta ego mgbe ị na-amụ ihe", bullets: ["Registered Apprenticeship: ụgwọ na ọzụzụ", "Asambodo a ma ama na njedebe"] },
            { title: "Ebe ị ga-achọ", bullets: ["Apprenticeship.gov Job Finder", "Unions na community colleges", "Mmemme pre-apprenticeship"] },
            { title: "Lelee iwu", bullets: ["License, ule, akụkọ ịnya ụgbọ", "Ụlọ ọrụ license steeti", "Ndị were mmadụ n'ọrụ fair-chance site na mmemme gị"] }
          ],
          sources: [{ name: "Apprenticeship.gov (U.S. Department of Labor)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Ọrụ ikpeazụ: chọọ na Apprenticeship.gov ma ọ bụ mmemme dị n'obodo gị otu apprenticeship ma ọ bụ ọrụ aka ị nwere ike itinye akwụkwọ maka ya. Wee mechaa ngwugwu ọrụ gị: nchịkọta akwụkwọ ntụziaka, estimate ma ọ bụ work order, ndepụta nchekwa i lelere, ndekọ ọrụ na atụmatụ ụzọ ma ọ bụ ibu.",
          youCanNow: "iji AI rụọ ọrụ nke ọma n'ọrụ aka ma ọ bụ logistics ma chọta ụzọ ịbanye n'otu.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ pre-apprenticeship?", options: ["License ịrụ ọrụ naanị gị", "Ọrụ a na-akwụ ụgwọ dị ka onye isi", "Mmemme na-akwadebe gị ịbanye n'apprenticeship", "Ule ị na-ede mgbe apprenticeship gwụrụ"], answer: 2, why: "Pre-apprenticeship na-ewuli ihe ndị bụ isi ka i wee banye n'apprenticeship." },
            { objective: "O6", q: "Ị chọrọ ịma ma license ọrụ aka ị chọrọ na-ele akụkọ mkpọrọ. Gịnị ka ị ga-eme?", options: ["Chee ya site n'akụkọ enyi gị", "Jụọ AI ma tụkwasị obi n'azịza ya", "Hapụ ọrụ aka ahụ", "Lelee na ụlọ ọrụ license steeti gị"], answer: 3, why: "Ụlọ ọrụ license steeti nwere iwu gọọmentị maka license ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Logistics, ndekọ na ọrụ ndụ",
        questions: [
          { objective: "O4", q: "Gịnị mere ị ga-eji debe foto tupu na mgbe e mechara na ndekọ ọrụ?", options: ["Maka nkwado na soshal midia", "Iwu ọ bụla chọrọ ha", "Iji see ndị ahịa foto", "Ha na-egosi ihe i mere na na i mere ya nke ọma"], answer: 3, why: "Foto na-egosi ọrụ ahụ." },
          { objective: "O5", q: "Mgbe ị na-etinye ibu n'ụgbọ ibu maka ọtụtụ ebe nkwụsị, kedu ihe a na-ebu ụzọ tinye?", options: ["Ihe nke ebe nkwụsị ikpeazụ", "Ihe nke ebe nkwụsị mbụ", "Ihe kacha dị mfe mgbe niile", "Usoro ọ bụla"], answer: 0, why: "Ọ bụrụ na e buru ụzọ tinye nke ikpeazụ, ihe nke ebe nkwụsị mbụ ga-adị mfe iru." },
          { objective: "O5", q: "Ebee ka oke ịdị arọ na iwu oge ịnya ụgbọ na-esi?", options: ["Chatbot AI", "Ndị enyi gị", "Onye were gị n'ọrụ na iwu njem gọọmentị", "App maapụ"], answer: 2, why: "Iwu gọọmentị na-ekpebi oke ndị a." },
          { objective: "O6", q: "Gịnị bụ Registered Apprenticeship?", options: ["Naanị internship a na-adịghị akwụ ụgwọ", "Akara mmụta mahadum", "Ule license", "Ọrụ a na-akwụ ụgwọ nwere ọzụzụ nke na-eduga n'asambodo a ma ama"], answer: 3, why: "Ndị apprentice na-enweta ego mgbe ha na-amụ ihe." },
          { objective: "O6", q: "Kedu saịtị nwere Apprenticeship Job Finder nke U.S. Department of Labor?", options: ["App soshal midia", "Blọọgụ ọ bụla", "Apprenticeship.gov", "Saịtị ịzụ ahịa"], answer: 2, why: "Department of Labor na-elekọta Apprenticeship.gov." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ọrụ Aka na Logistics",
    questions: [
      { objective: "O6", q: "Kedu nke bụ ọrụ aka?", options: ["Onye na-akpali mmadụ na soshal midia", "Onye ọrụ ọkụ eletrik", "Onye na-enyocha ihe nkiri", "Onye na-agba lọtrị"], answer: 1, why: "Ọrụ ọkụ eletrik bụ ọrụ aka." },
      { objective: "O1", q: "Kedu otu AI nwere ike isi nyere aka n'akwụkwọ ntụziaka siri ike?", options: ["Ịkọwa ya n'okwu dị mfe", "Ịnọchi nọmba akwụkwọ ntụziaka ahụ", "Ịrụrụ gị ọrụ ahụ", "Ịkwado nchekwa"], answer: 0, why: "AI bụ ezigbo onye nkuzi maka okwu na nzọụkwụ." },
      { objective: "O1", q: "Spec sheet na-edepụta:", options: ["Oge ọrụ gị", "Ụgwọ gị", "Nha na ihe achọrọ kpọmkwem maka otu ngwa", "Ihe ndị ahịa kwuru"], answer: 2, why: "Spec na-enye ihe achọrọ kpọmkwem." },
      { objective: "O1", q: "Kedu nọmba ga-esi n'akwụkwọ ntụziaka ma ọ bụ code, ọ bụghị AI?", options: ["Voltage, torque na oke ịdị arọ", "Ụbọchị", "Aha gị", "Agba ụgbọ ibu ahụ"], answer: 0, why: "Nọmba dị mkpa maka nchekwa chọrọ isi iyi gọọmentị." },
      { objective: "O2", q: "Ụgwọ ọrụ aka (labor) n'estimate pụtara:", options: ["Ngwa", "Ụtụ isi", "Adreesị onye ahịa", "Ego maka oge onye ọrụ"], answer: 3, why: "Labor bụ oge a na-akwụ ụgwọ ya." },
      { objective: "O2", q: "Awa 2 na $60 gbakwunyere $100 maka ngwa bụ:", options: ["$62", "$120", "$160", "$220"], answer: 3, why: "2 x 60 = 120, gbakwunye 100 = 220." },
      { objective: "O2", q: "Ezigbo estimate na-ekwukwa:", options: ["Ọ dịghị ihe gbasara ọrụ ahụ", "Ihe gụnyere, ihe na-agụnyeghị, na mgbe ọ ga-agwụ", "Nọmba Social Security gị", "Ọnụahịa a kara aka nke na-agaghị agbanwe ma ihe ọ bụla mee"], answer: 1, why: "Usoro doro anya na-egbochi esemokwu." },
      { objective: "O3", q: "Nyocha nchekwa ọrụ na-edepụta:", options: ["Naanị ọnụahịa", "Ụbọchị ọmụmụ ndị otu ọrụ", "Ihe ndị ahịa kwuru", "Nzọụkwụ, ihe egwu na njikwa"], answer: 3, why: "Ọ na-ahazi nchekwa maka nzọụkwụ ọ bụla." },
      { objective: "O3", q: "Kedu nke bụ PPE?", options: ["Ugogbe nchekwa", "Mkpuchi ekwentị", "Igbe nri ehihie", "App maapụ"], answer: 0, why: "Ugogbe nchekwa na-echebe anya gị." },
      { objective: "O3", q: "Onye na-akwado ndepụta nchekwa AI dere?", options: ["Ọ dịghị onye", "AI n'onwe ya", "Onye isi gị, akwụkwọ ntụziaka na isi iyi gọọmentị dị ka OSHA", "Vidiyo ọ bụla"], answer: 2, why: "AI abụghị onye ikike nchekwa." },
      { objective: "O3", q: "Klas OSHA Outreach awa 10:", options: ["Bụ license kọntraktọ", "Na-anọchi ọzụzụ ọrụ niile", "AI na-eme ya", "Na-akụzi ihe ndị bụ isi nke nchekwa; kaadị ya bụ nhọrọ"], answer: 3, why: "OSHA kọwara ya dị ka ọzụzụ nhọrọ." },
      { objective: "O4", q: "Voice-to-text na-enyere gị aka:", options: ["Ime ka oku ekwentị dị ọnụ ala", "Ịnya ụgbọ ọsọ ọsọ", "Ikwu ndetu kama ide ha", "Naanị ịgụpụta akwụkwọ ntụziaka n'olu dị elu"], answer: 2, why: "Ọ na-agbanwe okwu ọnụ ka ọ bụrụ ihe e dere ede." },
      { objective: "O4", q: "Kedu foto ị na-ekwesịghị ise n'enweghị ikike?", options: ["Ọrụ i rụzichara", "Akwụkwọ nzuzo onye ahịa", "Ngwa mebiri emebi", "Igbe ngwa ọrụ gị"], answer: 1, why: "Kwanyere nzuzo onye ahịa ugwu." },
      { objective: "O4", q: "Ndekọ ọrụ nwere:", options: ["Ụbọchị, ebe, ọrụ e mere, ngwa, nsogbu na nzọụkwụ ọzọ", "Naanị echiche gị", "Okwuntughe ndị ahịa", "Ọ dịghị ihe"], answer: 0, why: "Ndekọ zuru ezu bụ ndekọ bara uru." },
      { objective: "O5", q: "Mgbe AI tụrụ aro usoro ụzọ, ị kwesịrị:", options: ["Iso ya n'eleleghị ya", "Ileghara oge anya", "Ilele ya na app maapụ nwere okporo ụzọ", "Ịnya ụgbọ ọsọ ọsọ"], answer: 2, why: "App maapụ na-egosi ezi oge ịnya ụgbọ na okporo ụzọ." },
      { objective: "O5", q: "Ịkekọ ibu (load securement) pụtara:", options: ["Ịkekọ ibu ka ọ ghara ịkpụgharị ma ọ bụ daa", "Ikpochi ọfịs", "Inweta mbinye ego", "Ichekwa faịlụ"], answer: 0, why: "Ibu e kekọrọ nke ọma na-egbochi ihe mberede." },
      { objective: "O5", q: "Iwu hours-of-service na-ekpebi:", options: ["Oge ụlọ ahịa na-emeghe", "Izu ike nri ehihie naanị maka ndị ọrụ ọfịs", "Iji ịntanetị", "Ogologo oge ndị ọkwọ ụgbọ azụmahịa nwere ike ịnya ụgbọ na ịrụ ọrụ"], answer: 3, why: "Ha na-egbochi ike ịgwụ ndị ọkwọ ụgbọ." },
      { objective: "O6", q: "Pre-apprenticeship:", options: ["Bụ license zuru ezu", "Na-akwadebe gị ịbanye n'apprenticeship", "Bụ mmemme mbinye ego", "Bụ ụdị ngwa ọrụ"], answer: 1, why: "Ọ na-ewuli nka iji banye n'apprenticeship." },
      { objective: "O6", q: "Ebee ka ị ga-elele ma license ọrụ aka na-ele akụkọ mkpọrọ?", options: ["Ihe AI chere", "Ụlọ ọrụ license steeti gị", "Okwu e dere n'okpuru mgbasa ozi ọrụ", "Ebe ọ bụla"], answer: 1, why: "Ụlọ ọrụ steeti na-ekpebi iwu license." },
      { objective: "O6", q: "N'ọrụ aka, gịnị kacha mkpa nye ọtụtụ ndị were mmadụ n'ọrụ na mmalite?", options: ["Inwe ngwa ọrụ dị oke ọnụ", "Inwe akara mmụta mahadum", "Ịmara onye ọ bụla", "Ịbịa n'oge mgbe niile na ịdị njikere ịmụta"], answer: 3, why: "Ịbụ onye a pụrụ ịtụkwasị obi na agwa ọma na-emeghe ụzọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 5, 7, 9, 13, 14, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nchịkọta akwụkwọ ntụziaka", objective: "O1", notYet: "Nchịkọta ahụ nwere nọmba na-adabaghị n'akwụkwọ ntụziaka, ma ọ bụ enweghị isi iyi.", meets: "Nchịkọta n'okwu dị mfe, e lelere nọmba ọ bụla ya n'akwụkwọ ntụziaka.", exceeds: "Ọ na-ekwukwa nzọụkwụ chọrọ onye isi ma ọ bụ onye ọrụ nwere license." },
      { name: "Estimate ma ọ bụ work order", objective: "O2", notYet: "Ụgwọ ọrụ aka, ngwa, ngụkọta, ihe gụnyere ma ọ bụ ụbọchị ọ ga-agwụ adịghị, ma ọ bụ mgbakọ ezighi ezi.", meets: "Akụkụ niile dị, e jirikwa aka lelee mgbakọ ahụ.", exceeds: "Ọ na-ekwukwa ihe na-agụnyeghị na otu a ga-esi kwado mgbanwe." },
      { name: "Ndepụta nchekwa", objective: "O3", notYet: "E detuuru ya site n'AI n'eleleghị ya n'isi iyi gọọmentị.", meets: "E lelere ya n'akwụkwọ ntụziaka ma ọ bụ isi iyi gọọmentị, e tinyekwara ihe ọ bụla fọdụrụ.", exceeds: "Ọ na-akpọ aha isi iyi ahụ na PPE maka ihe egwu ọ bụla." },
      { name: "Ndekọ ọrụ", objective: "O4", notYet: "Ụbọchị, ọrụ e mere, ngwa, nsogbu ma ọ bụ nzọụkwụ ọzọ adịghị, ma ọ bụ ọ na-egosi ozi nzuzo.", meets: "Ndekọ zuru ezu nwere ndetu foto tupu na mgbe e mechara, na-enweghị ozi nzuzo.", exceeds: "Onye ọrụ ọzọ nwere ike ịga n'ihu n'ọrụ ahụ site na ndekọ a naanị." },
      { name: "Atụmatụ ụzọ ma ọ bụ ibu", objective: "O5", notYet: "E leleghị ụzọ ahụ, ma ọ bụ ibu adịghị n'usoro ziri ezi.", meets: "E lelere ụzọ ahụ na app maapụ, e tinyekwara ibu n'usoro azụ nke ebe nkwụsị.", exceeds: "Ọ na-edepụtakwa ọnụ ọgụgụ ngwaahịa ma dee iwu onye were ya n'ọrụ." },
      { name: "Ọrụ ọzọ achọtara", objective: "O6", notYet: "Achọtaghị apprenticeship ma ọ bụ ọrụ ọ bụla.", meets: "Otu ezi apprenticeship ma ọ bụ ọrụ aka, ya na ihe ọ chọrọ na otu esi etinye akwụkwọ.", exceeds: "Ọ na-edepụtakwa nzọụkwụ mbụ ha ga-eme n'izu a." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe tinyere akwụkwọ maka apprenticeship, pre-apprenticeship ma ọ bụ ọrụ aka n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe malitere apprenticeship ma ọ bụ ọrụ aka n'ime ụbọchị 90",
      "Ndị na-amụ ihe kwuru na ha jiri AI dee estimate, ndekọ ọrụ ma ọ bụ ndepụta nchekwa n'ọrụ",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ gbasara ọrụ aka ma ọ bụ ọrụ ndụ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere igwefoto na ịntanetị",
      "Ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini, na app maapụ n'efu",
      "Akwụkwọ ntụziaka maka ngwa ọrụ, ngwa ụlọ ma ọ bụ ụgbọala (n'akwụkwọ ma ọ bụ n'ịntanetị)",
      "Akwụkwọ na mkpịsị ode ma ọ bụ app ndetu maka ngwugwu ọrụ",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Kwusie ike na nnọkọ ọ bụla na nọmba na iwu nchekwa na-esi n'akwụkwọ ntụziaka, onye were mmadụ n'ọrụ na OSHA, ọ bụghị n'aka AI.",
      "Weta ezi akwụkwọ ntụziaka na estimate ọmụmaatụ site n'aka ndị ọrụ aka dị n'obodo ka ndị na-amụ ihe were ezi akwụkwọ mee omume.",
      "Ekwela ka ndị na-amụ ihe rụọ ọrụ ọkụ eletrik, gas ma ọ bụ ọrụ ọzọ chọrọ license dị ka omume; jiri ọrụ ụlọ na-enweghị ihe egwu.",
      "Jikọọ ndị na-amụ ihe na mmemme pre-apprenticeship dị n'obodo na ndị were mmadụ n'ọrụ na-ewe ndị nwere akụkọ mkpọrọ.",
      "Jiri rubric tụọ akara ngwugwu ọrụ ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
