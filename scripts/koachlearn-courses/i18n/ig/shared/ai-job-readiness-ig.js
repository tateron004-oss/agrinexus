"use strict";

// Koach Learn course (Igbo translation of shared/ai-job-readiness.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-job-readiness-ig",
  lang: "ig",
  translationOf: "ai-job-readiness",
  category: "Re-Entry",
  name: "AI maka Njikere Ọrụ na Ọganihu n'Ọrụ",
  skills: "Ịchọta nka gị, Ide résumé site n'AI, Ime ka ọ dabara mkpọsa ọrụ, Ide akwụkwọ ozi ntinye (cover letter), Ịmụ ajụjụ ọnụ site n'AI, Ịchọ ọrụ n'enweghị nsogbu",
  outcome: "iji ngwa enyemaka AI n'efu gbanwee ahụmịhe gị ka ọ bụrụ résumé otu peeji dabara n'ezi mkpọsa ọrụ, dee obere akwụkwọ ozi ntinye, mụọ ịza ajụjụ ọnụ n'olu dị elu, ma tinye akwụkwọ n'enweghị nsogbu ma na-ezere aghụghọ ọrụ.",
  about: [
    "Inweta ọrụ chọrọ résumé, fọm ịrịọ ọrụ, ajụjụ ọnụ na ọtụtụ obi ike. Ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot na Google Gemini nwere ike inyere aka na nzọụkwụ ọ bụla, karịsịa ma ọ bụrụ na i nwere oge ị na-arụghị ọrụ, akụkọ ikpe (record), ma ọ bụ ahụmịhe na-adịghị ka résumé \"nkịtị\".",
    "Ihe ọmụmụ a bụ maka ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị na-achọ ọrụ na mmemme ọzụzụ ọrụ, ndị na-agbanwe ọrụ na ndị ntorobịa na-achọ ọrụ mbụ ha. Ọrụ i rụrụ n'ime ụlọ mkpọrọ, n'ọrụ agha (military), ilekọta mmadụ, ọrụ afọ ofufo ma ọ bụ obere ọrụ n'akụkụ, ha niile bara uru.",
    "Ị ga-ewu ngwa ọrụ (job kit) nke gị nzọụkwụ n'otu n'otu. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Edebe ozi nzuzo n'ebe AI na-adịghị: enweghị nọmba Social Security, ID, okwu ikpe ma ọ bụ nọmba mkpọrọ."
  ],
  finalTask: "Chọta otu ezi mkpọsa ọrụ ị nwere ike ịrịọ. Site n'iji ngwa enyemaka AI, wuo résumé otu peeji dabara na ya, akwụkwọ ozi ntinye nwere okwu na-erughị 200, na azịza maka ajụjụ ọnụ ise nwere ike ịbịa, gụnyere otu gbasara oge ị na-arụghị ọrụ ma ọ bụ akụkọ ndụ gị ma ọ bụrụ na ọ metụtara gị. Mụọ azịza ndị ahụ n'olu dị elu, lelee mkpọsa ọrụ ahụ maka ihe ịrịba ama aghụghọ, ma tinye akwụkwọ ma ọ bụ chekwaa ya ka ọ dị njikere iziga.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-alọta ụlọ site n'ụlọ mkpọrọ (re-entry) na-achọ ọrụ, ọtụtụ mgbe nwere oge ha na-arụghị ọrụ na akụkọ ikpe ha ga-akọwa. Ọtụtụ nwere ezigbo ahụmịhe ọrụ site n'ọrụ n'ụlọ mkpọrọ, ọrụ agha, ilekọta mmadụ ma ọ bụ ọrụ na-abụghị nke ọfịs.",
    startingPoint: "Ha nwere ike ịkpọ oku ma zipu ozi n'ekwentị nkịtị; ụfọdụ nwere akaụntụ email ma nwaala ngwa enyemaka AI. Ọtụtụ enweghị résumé ọhụrụ, emebeghị ajụjụ ọnụ n'oge na-adịbeghị anya, ma amaghị otu ha ga-esi kwuo maka akụkọ ndụ ha.",
    gap: "Ọrụ kwụsiri ike bụ otu n'ime ihe kacha enyere mmadụ aka ịlọta ụlọ nke ọma, mana ugbu a a na-arịọ ọrụ n'ịntanetị, ndị were mmadụ n'ọrụ na-atụkwa anya résumé dabara n'ọrụ ahụ na azịza ajụjụ ọnụ nwere obi ike. Ndị na-amụ ihe kwesịrị iji enyemaka AI gbanwee ezi ahụmịhe ha ka ọ bụrụ akwụkwọ ọrụ, zaa ajụjụ gbasara oge ha na-arụghị ọrụ n'eziokwu, ma zere aghụghọ ọrụ na-achụ ndị chọrọ ọrụ ngwa ngwa.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 5 ruo 6)",
      "Ngwaọrụ: ụfọdụ nwere naanị ekwentị nkịtị ma ọ bụ kọmputa ọba akwụkwọ ma ọ bụ ebe enyemaka ọrụ nwere oge a kara aka",
      "Oge: nkuzi nkeji 5 dabara n'etiti oge ịhụ ndị ọrụ na oge ọrụ",
      "Nzuzo: enweghị nọmba Social Security, okwu ikpe ma ọ bụ nọmba mkpọrọ, ma ọ bụ ozi ụlọ akụ n'ime ngwa AI ma ọ bụ na résumé",
      "Iwu gbasara akụkọ ikpe dị iche site na steeti ruo steeti na obodo ruo obodo; ndị na-amụ ihe na-elele ngalaba ọrụ (labor department) steeti ha ma ọ bụ otu enyemaka iwu re-entry, ma na-agbaso iwu parole ma ọ bụ probation nke ha"
    ],
    prerequisites: "Ọ dịghị. \"Mmalite AI na Obi Ike n'Ihe Dijitalụ\" bụ ezigbo ihe ọmụmụ mbụ maka ndị AI dị ọhụrụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọrụ, ọzụzụ, ọrụ afọ ofufo na ahụmịhe ndụ gị, n'ime ụlọ mkpọrọ ma ọ bụ n'èzí", action: "idepụta nka ọrụ gị n'okwu ndị were mmadụ n'ọrụ na-eji, ya na otu ezi ọmụmaatụ maka nke ọ bụla", standard: "na-edebe naanị nka ndị bụ eziokwu maka gị" },
    { id: "O2", condition: "Mgbe e nyere gị ezi mkpọsa ọrụ na ụkpụrụ (template) n'efu", action: "ime résumé otu peeji dabara n'ọrụ ahụ, nwere isi okwu na-amalite n'okwu omume na nọmba", standard: "na okwu ọ bụla bụ eziokwu, na-enweghị nọmba Social Security, ụbọchị ọmụmụ ma ọ bụ foto" },
    { id: "O3", condition: "Maka otu mkpọsa ọrụ ahụ", action: "ide akwụkwọ ozi ntinye nwere obere paragraf atọ", standard: "nwere okwu na-erughị 200 ma dị ka okwu gị mgbe a gụpụtara ya n'olu dị elu" },
    { id: "O4", condition: "Site n'iji ngwa enyemaka AI dị ka onye na-ajụ gị ajụjụ ọnụ maka omume", action: "ịza ajụjụ ọnụ ise a na-ajụkarị n'olu dị elu, na-eji STAR maka ajụjụ \"gwa m oge mgbe\"", standard: "n'agụghị ihe e dere ede" },
    { id: "O5", condition: "Ọ bụrụ na i nwere oge ị na-arụghị ọrụ ma ọ bụ akụkọ ikpe", action: "ịkwadebe obere azịza nke eziokwu nke na-atụgharị gaa n'ihe mere i ji dị njikere ugbu a", standard: "na-eji naanị eziokwu obi dị gị mma ikesa, a na-ekwu ya n'olu dị jụụ" },
    { id: "O6", condition: "Mgbe ị na-achọ ọrụ ma na-arịọ ha", action: "ịchọta ọrụ dị na saịtị a pụrụ ịtụkwasị obi, idekọ arịrịọ ọ bụla ma lelee mkpọsa ọ bụla maka ihe ịrịba ama aghụghọ", standard: "n'enyeghị nọmba ụlọ akụ ma ọ bụ Social Security tupu ezi onyinye ọrụ (offer)" }
  ],
  chapters: [
    {
      name: "Isi 1: Iwu akwụkwọ ọrụ gị",
      lessons: [
        {
          title: "Ịchọta nka i nweworị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gbanwee ahụmịhe ndụ na ọrụ gị ka ọ bụrụ ndepụta nka ọrụ.",
          text: [
            "Ọtụtụ ndị nwere nka karịa ka ha chere. Ọrụ na kichin, ebe ịsa akwa ma ọ bụ ebe ndozi ihe n'ụlọ mkpọrọ, ọrụ agha, ilekọta onye ezinụlọ, ọrụ afọ ofufo na chọọchị, ịkpụ isi ma ọ bụ idozi ụgbọala ndị agbata obi: ha niile na-ewu nka ndị were mmadụ n'ọrụ chọrọ.",
            "Rịọ ngwa enyemaka AI ka o nyere gị aka ịkpọ ha aha: \"Arụrụ m ọrụ afọ 3 na nnukwu kichin, na-akwadebe nri maka mmadụ 500 kwa ụbọchị ma na-azụ ndị ọrụ ọhụrụ. Kedu nka ọrụ nke a na-egosi? Jiri okwu ndị were mmadụ n'ọrụ na-eji.\" Ị nwere ike inweta: nchekwa nri, ịrụ ọrụ n'oge dị mkpa, ịzụ ndị ọzọ, idekọ ngwaahịa (inventory), ịrụkọ ọrụ ọnụ.",
            "Mee ndepụta isi nke nka gị, ya na otu ọmụmaatụ maka nke ọ bụla. Ekwela ka AI tinye nka i nweghị n'ezie. Ihe niile dị na résumé gị ga-abụrịrị eziokwu, n'ihi na a pụrụ ịjụ gị maka ya n'ajụjụ ọnụ."
          ],
          steps: ["Depụta ọrụ ọ bụla, ọzụzụ, ọrụ afọ ofufo na ọrụ e nyere gị, n'ime ma ọ bụ n'èzí.", "Maka nke ọ bụla, jụọ AI nka ọ na-egosi, n'okwu ndị were mmadụ n'ọrụ.", "Debe naanị nka ndị bụ eziokwu maka gị.", "Dee otu ezi ọmụmaatụ maka nka ọ bụla."],
          words: [["Nka a na-ebufe (transferable skill)", "nka sitere n'otu ebe nke bara uru n'ebe ọzọ."], ["Nka mmekọrịta (soft skill)", "nka gbasara mmadụ dị ka ịrụkọ ọrụ ọnụ, ntụkwasị obi ma ọ bụ ikwurịta okwu."], ["Nka aka (hard skill)", "ikike pụrụ iche dị ka ịnya forklift, isi nri ma ọ bụ iji Excel."]],
          slides: [
            { title: "Ahụmịhe niile bara uru", bullets: ["Ọrụ n'ime ma ọ bụ n'èzí", "Ọrụ agha, ilekọta mmadụ, ọrụ afọ ofufo", "Obere ọrụ maka ndị agbata obi"] },
            { title: "Rịọ AI ka ọ kpọọ nka ndị ahụ aha", bullets: ["Kọwaa ihe i mere na maka mmadụ ole", "Rịọ maka okwu ndị were mmadụ n'ọrụ"] },
            { title: "Mee ka ọ bụrụ eziokwu", bullets: ["Wepụ nka i nweghị", "Otu ezi ọmụmaatụ maka nke ọ bụla", "A pụrụ ịjụ gị maka ihe ọ bụla n'ime ya"] }
          ],
          tryIt: "Kọwaara ngwa enyemaka AI ihe atọ i meela ma jụọ nka ọrụ ha na-egosi. Dee ndepụta isi nke nwere opekata mpe nka asatọ bụ eziokwu, nke ọ bụla nwere otu ọmụmaatụ.",
          youCanNow: "ịgbanwe ahụmịhe gị ka ọ bụrụ ndepụta nka ọrụ bụ eziokwu n'okwu ndị were mmadụ n'ọrụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ nka a na-ebufe (transferable skill)?", options: ["Nka ị nwere ike iji naanị n'otu ọrụ", "Nka sitere n'otu ebe nke bara uru n'ebe ọzọ", "Nka ị na-akwụ ụgwọ ịmụta", "Nka naanị ndị isi nwere"], answer: 1, why: "Nka a na-ebufe, dị ka ịzụ ndị ọzọ, na-esi n'otu ebe aga n'ebe ọzọ." },
            { objective: "O1", q: "Ị dozirila ụgbọala ndị agbata obi ọtụtụ afọ n'enweghị ụgwọ ọnwa. Gịnị ka ị ga-eme na ahụmịhe ahụ?", options: ["Hapụ ya; ọ bụghị ezi ọrụ", "Kwuo na ị bụ onye mekanik nwere akwụkwọ ikike", "Chere ruo mgbe onye ajụjụ ọnụ jụrụ maka ya", "Jụọ AI nka ọ na-egosi ma depụta ndị bụ eziokwu ya na ọmụmaatụ"], answer: 3, why: "Ọrụ na-abụghị nke ọfịs na-ewu ezi nka; depụta naanị ndị bụ eziokwu, ya na ọmụmaatụ." }
          ]
        },
        {
          title: "Ide résumé otu peeji site n'AI",
          objectives: ["O2"],
          minutes: 6,
          goal: "Wuo résumé otu peeji dị ọcha dabara n'ezi mkpọsa ọrụ.",
          text: [
            "Résumé bụ nchịkọta otu peeji nke nka gị, ahụmịhe gị na ọzụzụ gị. Nhazi dị mfe na-arụ ọrụ kacha mma: aha na ụzọ isi kpọtụrụ gị, nchịkọta ahịrị abụọ, nka, ahụmịhe, na agụmakwụkwọ ma ọ bụ ọzụzụ. Jiri ụkpụrụ (template) n'efu na Google Docs ma ọ bụ Microsoft Word.",
            "Mee ka ọ dabara n'ọrụ ọ bụla. Mapịa mkpọsa ọrụ ahụ (ọ bụghị ozi nzuzo gị) n'ime AI ma jụọ: \"Kedu nka na isi okwu (keywords) ọrụ a chọrọ? Kedu nka m dabara?\" Wee rịọ ya ka o dee isi okwu site n'ọmụmaatụ gị nke na-amalite n'okwu omume ma nwee nọmba: \"Kwadebere nri maka mmadụ 500 kwa ụbọchị ma na-agbaso iwu nchekwa nri.\"",
            "Maka ọrụ i rụrụ mgbe ị nọ n'ụlọ mkpọrọ, ị nwere ike ide ụdị ebe ahụ ma ọ bụ onye were gị n'ọrụ dị ka onye ndụmọdụ re-entry gị si tụọ aro, dị ka ngalaba mgbazi (department of corrections) steeti, ma lekwasị anya na nka. Etinyela nọmba Social Security gị, ụbọchị ọmụmụ gị ma ọ bụ foto na résumé U.S. mgbe ọ bụla."
          ],
          steps: ["Meghee ụkpụrụ résumé n'efu na Google Docs ma ọ bụ Word.", "Mapịa mkpọsa ọrụ ahụ n'ime AI ma jụọ isi okwu ọ chọrọ.", "Rịọ AI ka o dee isi okwu nwere okwu omume site n'ọmụmaatụ gị bụ eziokwu, ya na nọmba.", "Dejupụta ụkpụrụ ahụ ma mee ka ọ fọdụ n'otu peeji.", "Lelee okwu ọ bụla maka eziokwu na nsụpe."],
          words: [["Résumé", "nchịkọta otu peeji nke nka gị, ahụmịhe gị na ọzụzụ gị."], ["Isi okwu (keyword)", "okwu dị mkpa site na mkpọsa ọrụ nke ndị were mmadụ n'ọrụ na software na-achọ."], ["Ime ka ọ dabara (tailor)", "ịgbanwe résumé gị ka ọ dabara otu ọrụ."]],
          slides: [
            { title: "Nhazi otu peeji dị mfe", bullets: ["Aha, ụzọ isi kpọtụrụ gị, nchịkọta ahịrị abụọ", "Nka na ahụmịhe", "Agụmakwụkwọ ma ọ bụ ọzụzụ"] },
            { title: "Mee ka ọ dabara n'ọrụ ahụ", bullets: ["Mapịa mkpọsa ọrụ ahụ n'ime AI", "Chọta isi okwu dabara", "Okwu omume na nọmba"] },
            { title: "Mee ka ọ dị nchebe na eziokwu", bullets: ["Enweghị SSN, ụbọchị ọmụmụ ma ọ bụ foto", "Jụọ onye ndụmọdụ gị otu esi ede ọrụ n'ime ụlọ mkpọrọ", "Lelee okwu ọ bụla"] }
          ],
          tryIt: "Chọta otu ezi mkpọsa ọrụ. Jiri AI chọta isi okwu ya ma dee isi okwu ise site n'ọmụmaatụ gị bụ eziokwu. Tinye ha n'ụkpụrụ résumé otu peeji.",
          youCanNow: "iwu résumé otu peeji dabara n'ezi mkpọsa ọrụ site n'enyemaka AI.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka ị ga-amapịa n'ime AI iji mee ka résumé gị dabara n'ọrụ?", options: ["Mkpọsa ọrụ ahụ", "Nọmba Social Security gị", "Nọmba okwu ikpe gị", "Ozi ụlọ akụ gị"], answer: 0, why: "Mapịa mkpọsa ọrụ ahụ, ọ bụghị ozi nzuzo gị, ka AI wee chọta isi okwu." },
            { objective: "O2", q: "Résumé gị dị otu peeji na ọkara maka ọrụ mmalite. Gịnị ka ị ga-eme?", options: ["Mee ka mkpụrụ okwu ya dị obere nke ukwuu", "Tinyekwuo peeji", "Belata ya ka ọ fọdụ isi okwu kacha sie ike dabara n'ọrụ ahụ, n'otu peeji", "Tinye foto"], answer: 2, why: "Ọtụtụ résumé maka ọrụ mmalite kwesịrị ịdị n'otu peeji, na-elekwasị anya n'ihe ọrụ ahụ chọrọ." }
          ]
        },
        {
          title: "Ide obere akwụkwọ ozi ntinye",
          objectives: ["O3"],
          minutes: 5,
          goal: "Dee akwụkwọ ozi ntinye nwere okwu na-erughị 200 nke dị ka okwu gị.",
          text: [
            "Akwụkwọ ozi ntinye (cover letter) bụ obere akwụkwọ ozi na-ekwu ihe mere i ji chọọ ọrụ a na ihe mere i ji dabara na ya. Ọtụtụ ọrụ achọghị ya, mana ezigbo nke nwere ike ime ka ị pụta iche.",
            "Jiri obere paragraf atọ: ihe mere ọrụ a na ụlọ ọrụ a, nka abụọ dabara n'ihe ha chọrọ ya na obere ọmụmaatụ, na ekele ya na otu ha ga-esi kpọtụrụ gị. Jụọ AI: \"Dee akwụkwọ ozi ntinye nwere okwu na-erughị 200 maka mkpọsa ọrụ a site n'iji nka abụọ a na ọmụmaatụ ha. Enyi enyi, obi ike, okwu dị mfe.\"",
            "Wee mee ka ọ bụrụ nke gị. Gbanwee ahịrịokwu ọ bụla ị na-agaghị ekwu mgbe ọ bụla. Tinye otu ezi ihe gbasara ihe mere i ji chọọ ịrụ ọrụ n'ebe ahụ. Gụpụta ya n'olu dị elu: ọ bụrụ na ọ dịghị ka okwu gị, gbanwee ya ọzọ."
          ],
          steps: ["Paragraf 1: ihe mere ọrụ a na ụlọ ọrụ a.", "Paragraf 2: nka abụọ dabara, ya na ọmụmaatụ.", "Paragraf 3: ekele na otu ha ga-esi kpọtụrụ gị.", "Rịọ AI ka o dee ihe mbụ nwere okwu na-erughị 200.", "Dezie ya ka ọ dị ka okwu gị, ma gụpụta ya n'olu dị elu."],
          words: [["Akwụkwọ ozi ntinye (cover letter)", "obere akwụkwọ ozi e zitere ya na résumé, na-akọwa ihe mere i ji dabara n'ọrụ ahụ."]],
          slides: [
            { title: "Obere paragraf atọ", bullets: ["Ihe mere ọrụ a", "Nka abụọ dabara, ya na ọmụmaatụ", "Ekele na ụzọ isi kpọtụrụ gị"] },
            { title: "Ka AI dee ihe mbụ", bullets: ["Okwu na-erughị 200", "Enyi enyi, obi ike, okwu dị mfe"] },
            { title: "Mee ka ọ bụrụ nke gị", bullets: ["Gbanwee ahịrịokwu ị na-agaghị ekwu", "Tinye otu ezi ihe", "Gụpụta ya n'olu dị elu"] }
          ],
          tryIt: "Jiri AI dee akwụkwọ ozi ntinye maka mkpọsa ọrụ gị, mee ka okwu ya erughị 200, ma dezie ya ruo mgbe ọ dị ka okwu gị mgbe ị gụpụtara ya n'olu dị elu.",
          youCanNow: "ide obere akwụkwọ ozi ntinye nke gị site n'enyemaka AI.",
          quickCheck: [
            { objective: "O3", q: "Gịnị na-aba na paragraf nke abụọ nke akwụkwọ ozi ntinye?", options: ["Ụbọchị ọmụmụ gị", "Akụkọ ụgwọ ọnwa gị", "Naanị ekele", "Nka abụọ dabara n'ọrụ ahụ, ya na obere ọmụmaatụ"], answer: 3, why: "Paragraf 2 na-enye nka abụọ dabara, ya na ọmụmaatụ." },
            { objective: "O3", q: "Akwụkwọ ozi AI dere kwuru \"I am exceedingly enthusiastic to leverage my synergies.\" Gịnị ka ị ga-eme?", options: ["Debe ya; ọ dị ka okwu onye maara ihe", "Gbanwee ya ka ọ bụrụ okwu ị ga-ekwu n'ezie", "Mee ka ọ dị ogologo", "Ziga ya n'agụghị ya"], answer: 1, why: "Gbanwee ahịrịokwu ọ bụla ị na-agaghị ekwu ka akwụkwọ ozi ahụ dị ka okwu gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iwu akwụkwọ ọrụ gị",
        questions: [
          { objective: "O1", q: "Ị zụrụ ndị ọrụ ọhụrụ na kichin ụlọ mkpọrọ. Kedu nka nke a na-egosi?", options: ["Ịnya forklift", "Ndekọ ego (accounting)", "Ịzụ ndị ọzọ", "Ọ dịghị"], answer: 2, why: "Ịzụ ndị ọrụ ọhụrụ bụ nka a na-ebufe." },
          { objective: "O1", q: "AI tinyere \"na-asụ Spanish nke ọma\" na nka gị, mana ị naghị asụ ya. Gịnị ka ị ga-eme?", options: ["Wepụ ya", "Debe ya", "Mụta Spanish tupu ajụjụ ọnụ", "Tinyekwuo asụsụ ndị ọzọ"], answer: 0, why: "Ihe niile dị na résumé ga-abụrịrị eziokwu." },
          { objective: "O2", q: "Kedu nke na-ekwesịghị ịba na résumé U.S.?", options: ["Nka gị", "Ahụmịhe ọrụ gị", "Nọmba ekwentị gị", "Nọmba Social Security gị"], answer: 3, why: "Nọmba nzuzo anaghị aba na résumé." },
          { objective: "O2", q: "Gịnị ka ime ka résumé dabara n'ọrụ pụtara?", options: ["Ịkwa akwa", "Ịgbanwe ya ka ọ dabara otu mkpọsa ọrụ", "Ime ka ọ dị peeji atọ", "Iji otu résumé ahụ maka ọrụ niile"], answer: 1, why: "Résumé dabara n'ọrụ na-enwe isi okwu ọrụ ahụ." },
          { objective: "O3", q: "Ogologo ole ka akwụkwọ ozi ntinye n'ihe ọmụmụ a kwesịrị ịdị?", options: ["Peeji ise", "Okwu na-erughị 200", "Otu okwu", "Ihe karịrị okwu 1,000"], answer: 1, why: "A na-agụ akwụkwọ ozi dị mkpụmkpụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ajụjụ ọnụ na ịchọ ọrụ",
      lessons: [
        {
          title: "Ịmụ ajụjụ ọnụ site n'AI",
          objectives: ["O4"],
          minutes: 6,
          goal: "Jiri AI dị ka onye na-ajụ gị ajụjụ ọnụ maka omume, ma mee ka azịza gị ka mma.",
          text: [
            "AI nwere ike ime ka onye na-ajụ ajụjụ ọnụ. Jụọ: \"Ị na-ewe mmadụ n'ọrụ a [mapịa mkpọsa ọrụ]. Jụọ m otu ajụjụ ọnụ n'otu oge. Mgbe m zara, gwa m otu ihe m mere nke ọma na otu ihe m ga-eme ka ọ ka mma.\" Ọtụtụ app AI na-ekwe ka ị kwuo okwu n'olu dị elu, nke bụ ezigbo omume.",
            "Jiri usoro STAR maka ajụjụ \"gwa m oge mgbe\": Situation (ọnọdụ), Task (ọrụ e nyere), Action (ihe i mere), Result (ihe si na ya pụta). \"Na kichin (ọnọdụ), anyị ga-enye nri 500 n'otu awa (ọrụ e nyere). Ahazịrị m ahịrị nkwadebe ma zụọ ndị ọrụ ọhụrụ abụọ (ihe m mere). Anyị gwụchara n'oge kwa ụbọchị n'ọnwa ahụ (ihe si na ya pụta).\"",
            "Kwadebe ajụjụ ise a na-ajụkarị: kọọ maka onwe gị, gịnị mere ị chọrọ ọrụ a, otu ike gị, oge i doziri nsogbu, na i nwere ajụjụ ọ bụla maka anyị. Mụọ ruo mgbe ị nwere ike ịza n'agụghị ihe e dere ede."
          ],
          steps: ["Mapịa mkpọsa ọrụ ahụ ma rịọ AI ka ọ jụọ gị ajụjụ ọnụ otu ajụjụ n'otu oge.", "Zaa n'olu dị elu ma ọ bụ site n'ide ihe.", "Jiri STAR maka ajụjụ \"gwa m oge mgbe\".", "Rịọ maka otu ike na otu ihe ị ga-eme ka ọ ka mma mgbe azịza ọ bụla gasịrị.", "Mụọ ajụjụ ise ruo mgbe ị na-achọghị ihe e dere ede."],
          words: [["Usoro STAR", "ụzọ isi zaa ajụjụ: Situation (ọnọdụ), Task (ọrụ e nyere), Action (ihe i mere), Result (ihe si na ya pụta)."], ["Ajụjụ ọnụ omume (mock interview)", "ajụjụ ọnụ e mere maka omume."]],
          slides: [
            { title: "AI dị ka onye na-ajụ gị ajụjụ ọnụ maka omume", bullets: ["Otu ajụjụ n'otu oge", "Ndụmọdụ: otu ike, otu ihe ị ga-eme ka ọ ka mma", "Mụọ n'olu dị elu ma ọ bụrụ na ị nwere ike"] },
            { title: "Azịza STAR", bullets: ["Ọnọdụ na ọrụ e nyere", "Ihe i mere", "Ihe si na ya pụta"] },
            { title: "Ajụjụ ise ị ga-akwadebe", bullets: ["Kọọ maka onwe gị; gịnị mere ọrụ a", "Otu ike gị; nsogbu i doziri", "Ajụjụ gị maka ha"] }
          ],
          tryIt: "Mee ajụjụ ọnụ omume site n'AI maka mkpọsa ọrụ gị. Zaa ajụjụ ise n'olu dị elu, na-eji STAR ebe ọ dabara, ma dee ndụmọdụ ahụ.",
          youCanNow: "ịmụ ajụjụ ọnụ site n'AI ma zaa site n'usoro STAR.",
          quickCheck: [
            { objective: "O4", q: "N'usoro STAR, gịnị ka \"Result\" pụtara?", options: ["Aha ọrụ gị", "Nsogbu ị chere ihu", "Ihe mere n'ihi ihe i mere", "Ajụjụ a jụrụ gị"], answer: 2, why: "Result bụ ihe si n'ihe i mere pụta, dị ka ịgwụcha n'oge kwa ụbọchị." },
            { objective: "O4", q: "Ị nwere ike ịza \"Kọọ maka onwe gị\" naanị site n'ịgụ ihe i dere. Gịnị ka ị ga-eme?", options: ["Mụọ ya n'olu dị elu site n'AI ruo mgbe ị nwere ike ịza n'enweghị ihe e dere ede", "Wụfee ajụjụ ahụ n'ajụjụ ọnụ", "Buru n'isi ogologo okwu AI dere", "Bute ihe i dere ma gụọ ya"], answer: 0, why: "Mụọ n'olu dị elu ruo mgbe ị nwere ike ịza n'agụghị ihe." }
          ]
        },
        {
          title: "Ikwu maka oge ị na-arụghị ọrụ ma ọ bụ akụkọ ikpe n'obi ike",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kwadebe obere azịza nke eziokwu na-ele anya n'ihu gbasara oge ị na-arụghị ọrụ ma ọ bụ akụkọ ndụ gị.",
          text: [
            "Oge mmadụ na-arụghị ọrụ na-adị: ụlọ mkpọrọ, ọrịa, ilekọta mmadụ, ịkwaga n'ihi ọrụ agha, ịchụpụ n'ọrụ. Ndị were mmadụ n'ọrụ na-achọkarị ịma na ị dị njikere ugbu a. Kwadebe obere azịza: kwuo eziokwu, mee ka ọ dị mkpụmkpụ, gosi ihe i mụtara ma ọ bụ ihe i mere, ma tụgharịa gaa n'ihe mere i ji dị njikere maka ọrụ a.",
            "Ọmụmaatụ: \"Emehiere m ihe wee nọọ n'ụlọ mkpọrọ. Mgbe m nọ ebe ahụ, enwetara m asambodo onye na-emetụ nri (food handler certificate) ma na-elekọta ahịrị kichin. Adị m njikere iweta ụdị ịrụsi ọrụ ike ahụ ebe a.\" Rịọ AI ka o nyere gị aka mee ka azịza gị dị mkpụmkpụ ma kwụsie ike, mana jiri naanị eziokwu obi dị gị mma ikesa, ma hapụ nọmba okwu ikpe na nkọwa.",
            "Mara ndị nwere ike inyere gị aka. Ọtụtụ steeti na obodo U.S. nwere iwu fair chance ma ọ bụ \"ban the box\" gbasara mgbe ndị were mmadụ n'ọrụ nwere ike ịjụ maka akụkọ ikpe; lelee ngalaba ọrụ steeti gị ma ọ bụ otu enyemaka iwu re-entry. Federal Bonding Program na-enye ndị were mmadụ n'ọrụ fidelity bond n'efu mgbe ha were ndị na-achọ ọrụ nọ n'ihe egwu, ọ na-ekpuchikwa ọnwa isii mbụ. Ụfọdụ ndị were mmadụ n'ọrụ nwekwara ike iru eru maka Work Opportunity Tax Credit; lelee peeji WOTC nke IRS maka ọnọdụ ya ugbu a na otu ndị o metụtara."
          ],
          steps: ["Dee eziokwu ahụ n'otu ahịrịokwu.", "Tinye ihe i mụtara ma ọ bụ ihe i mere kemgbe ahụ.", "Tinye ihe mere i ji dị njikere maka ọrụ a.", "Rịọ AI ka o mee ka ọ dị mkpụmkpụ ma kwụsie ike.", "Mụọ ya n'olu dị elu ruo mgbe obi dị gị jụụ."],
          words: [["Iwe mmadụ n'ọrụ n'ụzọ ziri ezi (fair chance hiring)", "iwu ma ọ bụ omume na-enye ndị nwere akụkọ ikpe ohere ziri ezi tupu a jụọ maka ihe gara aga ha."], ["Fidelity bond", "mkpuchi (insurance) na-echebe onye were mmadụ n'ọrụ pụọ n'ọnwụ ego site n'aghụghọ onye ọrụ."]],
          slides: [
            { title: "Ezigbo obere azịza", bullets: ["Eziokwu ma dị mkpụmkpụ", "Ihe i mụtara ma ọ bụ ihe i mere", "Ihe mere i ji dị njikere ugbu a"] },
            { title: "Jiri AI nke ọma", bullets: ["Mee ka okwu gị dị mkpụmkpụ ma kwụsie ike", "Naanị eziokwu ị họọrọ ikesa", "Enweghị nọmba okwu ikpe"] },
            { title: "Mara ndị nwere ike inyere gị aka", bullets: ["Iwu fair chance: lelee steeti gị", "Federal Bonding Program: bond n'efu, ọnwa 6 mbụ", "WOTC: lelee peeji IRS maka ọnọdụ ya ugbu a"] }
          ],
          sources: [{ name: "The Federal Bonding Program", url: "https://bonds4jobs.com/" }, { name: "Ngalaba Ọrụ U.S. (Department of Labor): Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" }, { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" }],
          tryIt: "Dee azịza ahịrịokwu atọ gbasara oge ị na-arụghị ọrụ ma ọ bụ akụkọ ndụ gị (nke gị, ma ọ bụ nke omume). Jiri AI mee ka ọ dị mkpụmkpụ, wee kwuo ya n'olu dị elu ugboro atọ.",
          youCanNow: "ịza ajụjụ gbasara oge ị na-arụghị ọrụ ma ọ bụ akụkọ ikpe n'eziokwu na n'obi ike, ma kpọọ aha ndị nwere ike inyere aka.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ndị were mmadụ n'ọrụ na-achọkarị ịma mgbe ha jụrụ maka oge ị na-arụghị ọrụ?", options: ["Nkọwa niile nke okwu ikpe gị", "Nọmba okwu ikpe gị", "Na ị dị njikere ịrụ ọrụ ugbu a", "Onye bụ ọka iwu gị"], answer: 2, why: "Ndị were mmadụ n'ọrụ na-achọkarị ịma na ị dị njikere ugbu a, ya mere mee ka ọ dị mkpụmkpụ ma na-ele anya n'ihu." },
            { objective: "O5", q: "Onye ajụjụ ọnụ jụrụ maka akụkọ ikpe gị. Kedu azịza kacha mma?", options: ["\"Nke ahụ abụghị okwu gị.\"", "Ogologo akụkọ nwere nkọwa niile", "\"Abanyebeghị m na nsogbu mgbe ọ bụla.\"", "\"Emehiere m ihe wee nọọ n'ụlọ mkpọrọ. Enwetara m asambodo food handler n'ebe ahụ, adịkwa m njikere ịrụ ọrụ.\""], answer: 3, why: "Eziokwu, dị mkpụmkpụ, ma lekwasị anya n'ihe i mụtara na ihe mere i ji dị njikere." }
          ]
        },
        {
          title: "Ịchọ ọrụ na ịrịọ ya n'enweghị nsogbu",
          objectives: ["O6"],
          minutes: 5,
          goal: "Chọta ezi ọrụ dị, dekọọ arịrịọ gị ma zere aghụghọ ọrụ.",
          text: [
            "Chọọ ọrụ na saịtị a pụrụ ịtụkwasị obi, weebụsaịtị ụlọ ọrụ na American Job Center dị nso gị, nke na-enye enyemaka n'efu n'ịchọ ọrụ na ọzụzụ. Mmemme re-entry gị, ọfịs ndị agha mbụ (veterans) ma ọ bụ mmemme ọzụzụ ọrụ nwere ike inwe ozi gbasara ọrụ na ndị were mmadụ n'ọrụ na-ewe ndị nwere akụkọ ikpe.",
            "Dekọọ arịrịọ ọ bụla na mpempe ndekọ dị mfe: ụlọ ọrụ, ọrụ, ụbọchị i tinyere akwụkwọ, onye kpọtụrụ, ụbọchị ị ga-esochi. Soro ya ihe dị ka otu izu ka e mesịrị site n'obere email nwere nkwanye ugwu. AI nwere ike ide ya.",
            "Kpachara anya maka aghụghọ ọrụ. FTC (ọfịs gọọmentị U.S. na-echebe ndị ahịa) na-adọ aka na ntị: ezi ndị were mmadụ n'ọrụ anaghị eme ka ị kwụọ ụgwọ iji nweta ọrụ; kpachara anya maka nnukwu ụgwọ maka obere ọrụ, a rịọ gị ka ị tinye chekụ n'akaụntụ wee zighachi ego, iziga ngwugwu ọzọ, ma ọ bụ ịkwụ ụgwọ ọzụzụ ma ọ bụ asambodo tupu oge eruo. Enyela nọmba akaụntụ ụlọ akụ ma ọ bụ Social Security mgbe ọ bụla tupu i nweta ezi onyinye ọrụ site n'ezi ụlọ ọrụ. Kọọ aghụghọ na ReportFraud.ftc.gov."
          ],
          steps: ["Chọọ na saịtị a pụrụ ịtụkwasị obi, peeji ụlọ ọrụ na American Job Center gị.", "Dekọọ arịrịọ ọ bụla na mpempe ndekọ.", "Soro ya ihe dị ka otu izu ka e mesịrị.", "Lelee mkpọsa ọ bụla maka ihe ịrịba ama aghụghọ.", "Kọọ aghụghọ na ReportFraud.ftc.gov."],
          words: [["American Job Center", "ọfịs n'efu nke gọọmentị U.S. na-akwụ ụgwọ ya nke na-enyere aka n'ịchọ ọrụ na ọzụzụ."], ["Aghụghọ ọrụ (job scam)", "onyinye ọrụ adịgboroja e mere iji zuo ego ma ọ bụ ozi."]],
          slides: [
            { title: "Ebe ị ga-achọ", bullets: ["Saịtị ọrụ a pụrụ ịtụkwasị obi na peeji ụlọ ọrụ", "American Job Centers", "Mmemme re-entry, ndị agha mbụ na ọzụzụ ọrụ"] },
            { title: "Dekọọ ma soro ya", bullets: ["Ụlọ ọrụ, ọrụ, ụbọchị, onye kpọtụrụ", "Soro ya n'ihe dị ka otu izu"] },
            { title: "Ihe ịrịba ama aghụghọ ọrụ (FTC)", bullets: ["Ha na-eme ka ị kwụọ ụgwọ iji nweta ọrụ", "Tinye chekụ wee zighachi ego", "Iziga ngwugwu ọzọ; nnukwu ụgwọ maka obere ọrụ"] }
          ],
          sources: [{ name: "FTC: Aghụghọ ọrụ (Job scams)", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "CareerOneStop (Ngalaba Ọrụ U.S.): chọta American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Ọrụ ikpeazụ: mechaa résumé gị dabara n'ọrụ, akwụkwọ ozi ntinye gị na azịza ajụjụ ọnụ ise i mụrụ maka ezi mkpọsa ọrụ gị. Lelee mkpọsa ahụ maka ihe ịrịba ama aghụghọ, tinye ya na mpempe ndekọ, ma tinye akwụkwọ ma ọ bụ mee ka ọ dị njikere iziga.",
          youCanNow: "iwu ngwa ọrụ site n'AI, mee ajụjụ ọnụ n'obi ike ma rịọ ọrụ n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O6", q: "Ebee ka ị nwere ike inweta enyemaka n'efu n'ịchọ ọrụ na ọzụzụ?", options: ["American Job Center", "Weebụsaịtị na-ana ụgwọ iji rịọ ọrụ", "Ozi ederede site na nọmba ị na-amaghị", "Ọrụ na-arịọ gị ka ị ziga ngwugwu ọzọ"], answer: 0, why: "American Job Centers na-enye enyemaka n'efu n'ịchọ ọrụ na ọzụzụ." },
            { objective: "O6", q: "\"Ọrụ\" na-enye nnukwu ụgwọ maka obere ọrụ ma na-arịọ akaụntụ ụlọ akụ gị tupu ajụjụ ọnụ ọ bụla. Gịnị ka ị ga-eme?", options: ["Ziga ya ka ị malite ngwa ngwa", "Ziga naanị ọkara nọmba akaụntụ ahụ", "Ekesala ya; lelee maka ihe ịrịba ama aghụghọ ma kọọ ya", "Buru ụzọ kwụọ obere ụgwọ"], answer: 2, why: "Enyela akaụntụ ụlọ akụ mgbe ọ bụla tupu ezi onyinye ọrụ; nke a nwere ihe ịrịba ama aghụghọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ajụjụ ọnụ na ịchọ ọrụ",
        questions: [
          { objective: "O4", q: "Gịnị ka STAR pụtara?", options: ["Start, Talk, Ask, Rest", "Skills, Training, Awards, References", "Smile, Thank, Answer, Return", "Situation, Task, Action, Result"], answer: 3, why: "STAR na-ahazi azịza maka ajụjụ \"gwa m oge mgbe\"." },
          { objective: "O5", q: "Ezigbo azịza gbasara oge ị na-arụghị ọrụ ma ọ bụ akụkọ ikpe bụ:", options: ["Eziokwu, dị mkpụmkpụ ma lekwasị anya n'ihe mere i ji dị njikere ugbu a", "Ogologo akụkọ nwere nkọwa niile", "Ụgha", "Ịjụ ịza n'enweghị nkwanye ugwu"], answer: 0, why: "Azịza dị mkpụmkpụ, nke eziokwu, na-ele anya n'ihu na-arụ ọrụ kacha mma." },
          { objective: "O5", q: "Gịnị ka Federal Bonding Program na-enye?", options: ["Ụgbọala n'efu", "Ego nye ndị na-achọ ọrụ", "Fidelity bond n'efu nye ndị were mmadụ n'ọrụ na-ewe ndị na-achọ ọrụ nọ n'ihe egwu", "Ịhapụ mmadụ n'ụlọ mkpọrọ"], answer: 2, why: "Ọ na-enye ndị were mmadụ n'ọrụ bond n'efu nke na-ekpuchi ọnwa isii mbụ." },
          { objective: "O6", q: "Onyinye ọrụ na-arịọ gị ka ị kwụọ $150 maka ọzụzụ tupu ị malite. Dị ka FTC si kwuo, nke a bụ:", options: ["Ihe nkịtị maka ọrụ ọ bụla", "Ụtụ isi", "Ego onyinye (bonus)", "Ihe ịdọ aka na ntị nke aghụghọ"], answer: 3, why: "Ezi ndị were mmadụ n'ọrụ anaghị eme ka ị kwụọ ụgwọ iji nweta ọrụ." },
          { objective: "O6", q: "Mgbe ole ka ị ga-esochi mgbe i tinyere akwụkwọ?", options: ["Kwa awa", "Mgbe ọ bụla", "Ihe dị ka otu izu ka e mesịrị site n'obere email nwere nkwanye ugwu", "Mgbe otu afọ gachara"], answer: 2, why: "Nsochi nwere nkwanye ugwu na-egosi na ọ masịrị gị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Njikere Ọrụ na Ọganihu n'Ọrụ",
    questions: [
      { objective: "O1", q: "Nka a na-ebufe bụ:", options: ["Nka ị nwere ike ire", "Nka sitere n'otu ebe nke bara uru n'ebe ọzọ", "Nka naanị maka kọmputa", "Nka adịgboroja"], answer: 1, why: "Nka na-esi n'otu ebe aga n'ebe ọzọ." },
      { objective: "O1", q: "Kedu nke bụ nka mmekọrịta (soft skill)?", options: ["Ntụkwasị obi", "Ịnya forklift", "Ịgbado ọkụ (welding)", "Ọsọ ịpị mkpụrụ akwụkwọ"], answer: 0, why: "Nka mmekọrịta bụ nka gbasara mmadụ." },
      { objective: "O1", q: "Kedu ahụmịhe bara uru maka nka ọrụ?", options: ["Naanị ọrụ ọfịs a na-akwụ ụgwọ", "Naanị mahadum", "Ilekọta onye ezinụlọ", "Ọ dịghị ihe na-abụghị ọrụ"], answer: 2, why: "Ezi ahụmịhe niile na-ewu nka." },
      { objective: "O1", q: "Gịnị mere ihe niile dị na résumé gị ga-eji bụrụ eziokwu?", options: ["A pụrụ ịjụ gị maka ya n'ajụjụ ọnụ", "AI na-elele ya", "Ọ dịghị mkpa", "Ka ọ dị ogologo"], answer: 0, why: "Ndị na-ajụ ajụjụ ọnụ na-ajụ maka ihe i depụtara." },
      { objective: "O2", q: "Isi okwu (keyword) bụ:", options: ["Okwuntughe", "Igodo ọfịs", "Aha gị", "Okwu dị mkpa site na mkpọsa ọrụ"], answer: 3, why: "Isi okwu dabara na-enyere résumé gị aka ka a hụ ya." },
      { objective: "O2", q: "Kedu isi okwu kacha sie ike?", options: ["\"Mere ihe na kichin\"", "\"Kwadebere nri maka mmadụ 500 kwa ụbọchị ma na-agbaso iwu nchekwa nri\"", "\"Rụrụ ọrụ\"", "\"Nri\""], answer: 1, why: "Okwu omume, nọmba na ihe si na ya pụta." },
      { objective: "O2", q: "Mgbe ị na-arịọ AI ka o mee ka résumé gị dabara n'ọrụ, mapịa:", options: ["Nọmba Social Security gị", "Mkpọsa ọrụ ahụ, ọ bụghị ozi nzuzo gị", "Nọmba okwu ikpe gị", "Ozi ụlọ akụ gị"], answer: 1, why: "Mkpọsa ọrụ ahụ bụ ihe AI chọrọ." },
      { objective: "O2", q: "Ogologo ole ka résumé kwesịrị ịdịkarị maka ọtụtụ ọrụ mmalite?", options: ["Peeji iri", "Ọkara ahịrị", "Ogologo ka o kwere mee", "Otu peeji"], answer: 3, why: "Otu peeji dị mfe ịgụ." },
      { objective: "O3", q: "Akwụkwọ ozi ntinye na-akọwa:", options: ["Ihe mere i ji chọọ ọrụ ahụ na ihe mere i ji dabara", "Akụkọ ndụ gị niile", "Naanị akụkọ ụgwọ ọnwa gị", "Okwuntughe gị"], answer: 0, why: "Ọ na-ejikọ gị na ọrụ ahụ." },
      { objective: "O3", q: "Mgbe AI dechara ihe mbụ nke akwụkwọ ozi ntinye gị, ị kwesịrị:", options: ["Iziga ya n'agụghị ya", "Itinye nka i nweghị", "Idezi ya ma gụpụta ya n'olu dị elu ruo mgbe ọ dị ka okwu gị", "Ime ka ọ bụrụ okwu 1,000"], answer: 2, why: "Akwụkwọ ozi gị kwesịrị ịdị ka okwu gị." },
      { objective: "O4", q: "Ajụjụ ọnụ omume (mock interview) bụ:", options: ["Ọrụ adịgboroja", "Ajụjụ ọnụ enweghị nkwanye ugwu", "Ajụjụ ọnụ ị wụfere", "Ajụjụ ọnụ e mere maka omume"], answer: 3, why: "Omume na-ewu obi ike." },
      { objective: "O4", q: "Na STAR, \"Action\" pụtara:", options: ["Ihu igwe", "Aha ụlọ ọrụ ahụ", "Ihe i mere", "Ụgwọ ọnwa gị"], answer: 2, why: "Action bụ akụkụ gị n'akụkọ ahụ." },
      { objective: "O4", q: "\"I nwere ajụjụ ọ bụla maka anyị?\" Azịza kacha mma:", options: ["\"Mba.\"", "Jụọ ajụjụ echere echiche gbasara ọrụ ahụ ma ọ bụ otu ndị ọrụ", "Naanị \"Mgbe ole ka m nwere ike ịga ezumike?\"", "Pụọ"], answer: 1, why: "Ezigbo ajụjụ na-egosi na ọ masịrị gị." },
      { objective: "O5", q: "Mgbe ị na-ekwu maka akụkọ ikpe, ị kwesịrị:", options: ["Ikesa naanị eziokwu obi dị gị mma, n'obere okwu", "Inye nọmba okwu ikpe gị", "Ịgha ụgha maka ya", "Ikwu maka ya ruo nkeji 20"], answer: 0, why: "Dị mkpụmkpụ, eziokwu, na-ele anya n'ihu kacha mma." },
      { objective: "O5", q: "Iwu fair chance ma ọ bụ \"ban the box\":", options: ["Bụ otu ebe niile", "Adịghị adị", "Dị iche site na steeti na obodo; lelee ngalaba ọrụ steeti gị", "Machibidoro nyocha akụkọ ndụ niile"], answer: 2, why: "Iwu ndị a dị iche site n'ebe ruo ebe." },
      { objective: "O5", q: "Ebee ka ị nwere ike ịlele ọnọdụ Work Opportunity Tax Credit ugbu a?", options: ["Peeji WOTC nke IRS", "Ihe e dere na soshal midia", "Ihe AI chere", "Mkpọsa ọrụ"], answer: 0, why: "Iwu na ụbọchị nke ego ụtụ isi a na-agbanwe; IRS bụ isi iyi." },
      { objective: "O6", q: "American Job Centers na-enye:", options: ["Naanị ide résumé a na-akwụ ụgwọ", "Mbinye ego", "Ebe obibi", "Enyemaka n'efu n'ịchọ ọrụ na ọzụzụ"], answer: 3, why: "Ha bụ ebe enyemaka ọrụ n'efu." },
      { objective: "O6", q: "Mpempe ndekọ arịrịọ ọrụ nwere:", options: ["Okwuntughe gị", "Ụlọ ọrụ, ọrụ, ụbọchị i tinyere akwụkwọ, onye kpọtụrụ na ụbọchị nsochi", "Akaụntụ ụlọ akụ gị", "Ọ dịghị ihe"], answer: 1, why: "Ndekọ na-eme ka ihe gị dị n'usoro." },
      { objective: "O6", q: "\"Ọrụ\" na-arịọ gị ka ị tinye chekụ wee zighachi ụfọdụ ego ya. Nke a bụ:", options: ["Ụgwọ ọnwa nkịtị", "Aghụghọ chekụ adịgboroja", "Ego onyinye (bonus)", "Nkwụghachi ụtụ isi"], answer: 1, why: "FTC kpọrọ nke a aha dị ka aghụghọ a na-ahụkarị." },
      { objective: "O6", q: "Mgbe ole ka ọ dị mma inye nọmba akaụntụ ụlọ akụ gị maka ụgwọ ọnwa?", options: ["N'ozi mbụ gị nye onye ọ bụla na-achọ ndị ọrụ", "N'okwu e dere na bọọdụ ọrụ", "Nye onye ọ bụla jụrụ", "Mgbe i nwetara ezi onyinye ọrụ site n'ezi onye were mmadụ n'ọrụ e lelere"], answer: 3, why: "Kesaa naanị maka ụgwọ ọnwa mgbe ezi onyinye ọrụ e lelere." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 7, 8, 11, 13, 16, 18, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Résumé dabara n'ọrụ", objective: "O2", notYet: "Ọ karịrị otu peeji, adabaghị n'ọrụ ahụ, ma ọ bụ nwere nọmba nzuzo.", meets: "Otu peeji nwere isi okwu ọrụ ahụ, isi okwu nwere okwu omume na nọmba, na-enweghị nọmba nzuzo.", exceeds: "Isi okwu ọ bụla jikọtara na nka mkpọsa ọrụ ahụ chọrọ." },
      { name: "Nka bụ eziokwu", objective: "O1", notYet: "Otu nka ma ọ bụ ihe e kwuru na résumé abụghị eziokwu.", meets: "Nka ọ bụla bụ eziokwu, ezi ọmụmaatụ na-akwadokwa ya.", exceeds: "E dere nka sitere n'ọrụ n'ụlọ mkpọrọ, ilekọta mmadụ ma ọ bụ ọrụ na-abụghị nke ọfịs n'okwu ndị were mmadụ n'ọrụ." },
      { name: "Akwụkwọ ozi ntinye", objective: "O3", notYet: "Ọ karịrị okwu 200, ma ọ bụ ọ dị ka akwụkwọ ozi AI nkịtị.", meets: "Obere paragraf atọ na-erughị okwu 200 dị ka okwu onye na-amụ ihe.", exceeds: "O nwere otu ezi ihe gbasara ihe mere ha ji chọọ ịrụ ọrụ n'ebe ahụ." },
      { name: "Azịza ajụjụ ọnụ", objective: "O4", notYet: "Azịza na-erughị ise, ma ọ bụ a na-agụ azịza site n'ihe e dere ede.", meets: "Azịza ise a mụrụ n'olu dị elu, ya na STAR maka \"gwa m oge mgbe\".", exceeds: "Jiri ndụmọdụ AI mee ka opekata mpe azịza abụọ ka mma." },
      { name: "Azịza gbasara oge ị na-arụghị ọrụ ma ọ bụ akụkọ ndụ", objective: "O5", notYet: "Azịza ahụ dị ogologo, na-agbachitere onwe ya ma ọ bụ abụghị eziokwu (ma ọ bụrụ na ọ metụtara).", meets: "Dị mkpụmkpụ, bụ eziokwu ma na-ejedebe n'ihe mere onye na-amụ ihe ji dị njikere ugbu a.", exceeds: "E kwuru ya n'olu dị jụụ n'enweghị ihe e dere ede." },
      { name: "Arịrịọ n'enweghị nsogbu", objective: "O6", notYet: "E leleghị mkpọsa ọrụ ahụ maka ihe ịrịba ama aghụghọ.", meets: "E lelere mkpọsa ahụ maka ihe ịrịba ama aghụghọ, e dekọkwara arịrịọ ahụ.", exceeds: "E debere ụbọchị nsochi n'ihe dị ka otu izu ka e mesịrị." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe rịọrọ opekata mpe ọrụ atọ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe nwetara ajụjụ ọnụ ma ọ bụ onyinye ọrụ n'ime ụbọchị 90",
      "Ndị na-amụ ihe kwuru na ha hụrụ ma zere aghụghọ ọrụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ịntanetị, ma ọ bụ kọmputa ọba akwụkwọ, ebe enyemaka ọrụ ma ọ bụ nke mmemme ahụ",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini) na ụkpụrụ résumé n'efu na Google Docs ma ọ bụ Word",
      "Otu ezi mkpọsa ọrụ onye na-amụ ihe nwere ike ịrịọ",
      "Akwụkwọ na mkpịsị ode maka ndepụta nka na ndetu ajụjụ ọnụ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge omume"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ, na-eme ọrụ \"Nwalee ya ugbu a\" n'otu oge ahụ.",
      "Rụkọọ ọrụ ọnụ na onye ndụmọdụ re-entry ma ọ bụ American Job Center ka ndị na-amụ ihe nweta enyemaka n'ide ọrụ ha rụrụ mgbe ha nọ n'ụlọ mkpọrọ.",
      "Meenụ ajụjụ ọnụ omume abụọ abụọ; ka ndị na-amụ ihe họrọ ma ha ga-amụ ajụjụ gbasara akụkọ ndụ ha n'ihu ndị ọzọ.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha dee nọmba Social Security, okwu ikpe ma ọ bụ nọmba mkpọrọ n'ime ngwa AI; jiri ihe nnọchi.",
      "Chetara ndị nọ na parole ma ọ bụ probation ka ha gbasoo iwu ọ bụla gbasara iji ịntanetị, ma jiri rubric tụọ akara ọrụ ikpeazụ, otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
