"use strict";

// Koach Learn course (Igbo translation of veterans/veterans-ai-career-transition.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-career-transition-ig",
  lang: "ig",
  translationOf: "veterans-ai-career-transition",
  category: "Veterans (military)",
  name: "AI maka Ịgbanwe Ọrụ na Inweta Ọrụ",
  skills: "Ịchọta enyemaka gọọmentị maka mgbanwe, Ịgụ mgbasa ozi ọrụ maka okwu isi, Ide résumé ndị nkịtị dabara n'otu ọrụ, Ide obere akwụkwọ ozi (cover letter) na profaịlụ, Ime omume ajụjụ ọnụ na AI, Ịhụ aghụghọ ọrụ",
  outcome: "iji ngwa enyemaka AI dee résumé ndị nkịtị nwere otu peeji dabara n'otu ezi mgbasa ozi ọrụ, na azịza sekọnd 60 maka \"kọọrọ m banyere onwe gị\", ilele ha abụọ maka eziokwu na ozi nzuzo, na ịmara ebe ị ga-enweta enyemaka gọọmentị n'efu.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị agha lara ezumike (veterans) na ndị agha na-apụ n'ọrụ agha bụ ndị na-achọ ọrụ ndị nkịtị. Ị nwere ahụmahụ; ọrụ ugbu a bụ igosi ya n'okwu onye isi na-ewe ndị ọrụ (hiring manager) ndị nkịtị ga-aghọta, na ịdị njikere maka ajụjụ ọnụ.",
    "Ị ga-achọta enyemaka gọọmentị n'efu, gụọ mgbasa ozi ọrụ dị ka onye na-ewe ndị ọrụ, jiri ngwa enyemaka AI n'efu wuo résumé dabara n'ọrụ ahụ, obere akwụkwọ ozi na nchịkọta profaịlụ n'ịntanetị, ma mee omume azịza ajụjụ ọnụ. Ị ga-amụtakwa ịhụ aghụghọ ọrụ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise: gụọ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Họrọ otu ezi mgbasa ozi ọrụ ndị nkịtị. Jiri ngwa enyemaka AI dee résumé nwere otu peeji dabara na ya (opekata mpe isi okwu ise nwere okwu ndị nkịtị na nọmba) na azịza sekọnd 60 maka \"kọọrọ m banyere onwe gị\". Lelee na ihe ọ bụla i kwuru bụ eziokwu, na o nweghị nọmba Social Security, DD-214 ma ọ bụ nọmba nzuzo ọzọ, ma kwuo azịza ahụ n'olu dị elu ugboro abụọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha lara ezumike na ndị agha na-apụ n'ọrụ agha bụ ndị na-achọ ọrụ ndị nkịtị, site na ndị nọ n'oge ọrụ mbụ ha ruo ndị lara ezumike nká.",
    startingPoint: "Ha nwere ezi ahụmahụ, ịdọ aka na ntị n'onwe (discipline) na nduzi, ha nwekwara ike iji kọmputa ma ọ bụ smartphone. Ọtụtụ edebeghị résumé ndị nkịtị dabara n'otu mgbasa ozi ọrụ ma ọ bụ mee omume ajụjụ ọnụ ndị nkịtị, ọ bụkwa mmadụ ole na ole jirila ngwa enyemaka AI maka enyemaka.",
    gap: "Ndị isi na-ewe ndị ọrụ na sọftwụ na-enyocha résumé na-achọ okwu nke mgbasa ozi ọrụ ahụ n'onwe ya na nsonaazụ doro anya, ndị aghụghọ ọrụ na-achọkwa ndị nọ na mgbanwe. Ndị na-amụ ihe kwesịrị iji AI mee ka résumé na azịza ajụjụ ọnụ, nke bụ eziokwu ma nwee nzuzo, dabara n'otu ezi mgbasa ozi ọrụ, ma mara ebe ha ga-enweta enyemaka gọọmentị n'efu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: kọmputa kachasị mfe maka ọrụ résumé; smartphone na-arụ ọrụ maka omume",
      "Nzuzo: enweghị nọmba Social Security, DD-214 ma ọ bụ nọmba nzuzo ọzọ na prompt AI ọ bụla ma ọ bụ na résumé",
      "Eziokwu: ihe ọ bụla na nọmba ọ bụla dị na résumé ga-abụrịrị eziokwu",
      "Oge: nkuzi ihe dị ka nkeji 5 nke dabara n'etiti oge ịhụ ndị ọrụ mgbanwe na oge ọrụ"
    ],
    prerequisites: "Ọ dịghị. \"Mmalite AI na Ọrụ n'Ọdịnihu\" na-enyere ndị na-amụ ihe aka ibu ụzọ gbanwee ọrụ agha ha ka ha bụrụ isi okwu ndị nkịtị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Dabere n'ebe ị nọ na mgbanwe gị", action: "ịmata isi iyi gọọmentị na-enye enyemaka ọrụ n'efu ma họrọ otu ị ga-akpọtụrụ", standard: "ma dee ụzọ ị ga-esi kpọtụrụ ha ma ọ bụ oge nzukọ" },
    { id: "O2", condition: "Mgbe e nyere gị otu ezi mgbasa ozi ọrụ", action: "ide ihe ọ chọrọ n'ezie, ihe ọ ga-amasị ya na okwu isi ya site n'enyemaka AI ma jikọta ha na nka gị", standard: "ma nwee opekata mpe okwu isi 10 site na mgbasa ozi ahụ" },
    { id: "O3", condition: "Site n'iji ndepụta okwu isi gị", action: "ide résumé ndị nkịtị nwere otu peeji dabara na mgbasa ozi ahụ site n'enyemaka AI", standard: "ma nwee opekata mpe isi okwu ise n'okwu ndị nkịtị na nọmba, ihe ọ bụla bụ eziokwu, na enweghị nọmba nzuzo" },
    { id: "O4", condition: "Maka otu ọrụ ahụ", action: "ide obere akwụkwọ ozi (cover letter) na nchịkọta profaịlụ n'ịntanetị site n'enyemaka AI", standard: "nke a dezigharịrị ka ọ dị ka okwu gị" },
    { id: "O5", condition: "Mgbe AI na-eme ka onye isi na-ewe ndị ọrụ", action: "ime omume azịza sekọnd 60 maka \"kọọrọ m banyere onwe gị\" na azịza STAR n'olu dị elu", standard: "opekata mpe ugboro abụọ, na-ede otu ihe i mere nke ọma na otu ihe ị ga-edozi" },
    { id: "O6", condition: "Mgbe ị na-achọ ọrụ", action: "ịchọ ọrụ n'isi iyi gọọmentị na ịmata ihe ịdọ aka na ntị nke aghụghọ ọrụ", standard: "na-akwụghị ụgwọ ọ bụla ma na-ekesaghị nọmba nzuzo ọ bụla tupu ezi onyinye ọrụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Iwu résumé ndị nkịtị gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Enyemaka gọọmentị n'efu maka mgbanwe na ọrụ",
          minutes: 5,
          goal: "Kpọọ aha isi iyi gọọmentị atọ na-enye enyemaka ọrụ n'efu ma họrọ otu ị ga-akpọtụrụ.",
          text: [
            "Ọ dịghị mkpa ka i mee nke a naanị gị. Transition Assistance Program (TAP, mmemme enyemaka mgbanwe) bụ ọtụtụ ụlọ ọrụ gọọmentị na-elekọta ya, gụnyere Department of Labor (Ngalaba Ọrụ), Department of Defense (Ngalaba Agha) na VA (Ngalaba Ndị Agha Lara Ezumike). Akụkụ nke Department of Labor gụnyere ọmụmụ ihe (workshop) gbasara ọrụ na enyemaka otu-na-otu site na Employment Navigator and Partnership Program ya n'ọdụ agha ụfọdụ a họpụtara. Chọta usoro oge klaasị site n'ọfịs mgbanwe nke ọdụ agha gị.",
            "Mgbe ị pụrụ n'ọrụ agha, American Job Centers (ihe fọrọ nke nta ka ọ bụrụ 2,400 n'obodo niile, ị na-achọta ha site na CareerOneStop) na-enyere aka n'ịchọ ọrụ na ọzụzụ, a na-ebukwa ndị agha lara ezumike ụzọ (priority of service). Mmemme Personalized Career Planning and Guidance nke VA na-enye ndụmọdụ ọrụ na agụmakwụkwọ n'efu, gụnyere enyemaka résumé, nye ndị agha lara ezumike na ndị agha ruru eru.",
            "AI bụ ezigbo enyi n'ide ihe, mana onye ndụmọdụ a zụrụ azụ maara ahịa ọrụ dị n'obodo gị na uru gọọmentị gị. Jiri ha abụọ."
          ],
          steps: ["Ọ bụrụ na ị ka nọ n'ọrụ agha: kpọtụrụ ọfịs mgbanwe nke ọdụ agha gị gbasara TAP.", "Ọ bụrụ na ị pụọla: chọta American Job Center kacha nso gị na CareerOneStop.", "Gụọ peeji Personalized Career Planning and Guidance nke VA ma lee ma ị ruru eru.", "Debe otu oge nzukọ n'izu a."],
          words: [["TAP", "Transition Assistance Program: ọzụzụ na enyemaka maka ndị agha na-apụ n'ọrụ agha na-abanye ndụ ndị nkịtị."], ["American Job Center", "ebe enyemaka n'efu nke Department of Labor na-akwụ ụgwọ ya, maka enyemaka ịchọ ọrụ na ọzụzụ."], ["Priority of service", "a na-ebu ndị agha lara ezumike ụzọ jee ozi n'ọtụtụ mmemme ọrụ na ọzụzụ nke Department of Labor."]],
          slides: [
            { title: "Ọ bụrụ na ị ka nọ n'ọrụ agha", bullets: ["Transition Assistance Program (TAP)", "Ọmụmụ ihe gbasara ọrụ nke DOL", "Enyemaka otu-na-otu n'ọdụ agha ụfọdụ"] },
            { title: "Mgbe ị pụrụ n'ọrụ agha", bullets: ["American Job Centers, ị na-achọta ha na CareerOneStop", "A na-ebu ndị agha lara ezumike ụzọ", "Ndụmọdụ ọrụ n'efu site na VA"] },
            { title: "Jiri ha abụọ", bullets: ["AI maka enyemaka n'ide ihe", "Onye ndụmọdụ maka ọrụ dị n'obodo gị na uru gọọmentị"] }
          ],
          sources: [
            { name: "U.S. Department of Labor: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Họrọ otu isi iyi gọọmentị n'ime nkuzi a dabara gị ugbu a. Chọta peeji ya ma ọ bụ ọfịs ya kacha nso, ma dee otu ị ga-esi kpọtụrụ ya. Debe ma ọ bụ zụọ atụmatụ otu oge nzukọ.",
          youCanNow: "ịkpọ aha isi iyi gọọmentị na-enye enyemaka ọrụ n'efu na ịhọrọ nke kwesịrị ekwesị ị ga-akpọtụrụ.",
          quickCheck: [
            { objective: "O1", q: "Kedu n'ime ndị a bụ isi iyi gọọmentị na-enye enyemaka ọrụ n'efu nye ndị agha na-apụ n'ọrụ agha?", options: ["Saịtị résumé a na-akwụ ụgwọ site na mgbasa ozi", "Onye ị na-amaghị na soshal midia", "TAP n'ọfịs mgbanwe nke ọdụ agha gị", "Ozi ederede na-ekwe nkwa ọrụ n'ezie"], answer: 2, why: "TAP bụ mmemme mgbanwe gọọmentị, n'efu, maka ndị agha." },
            { objective: "O1", q: "I jiri AI dee résumé gị nke mbụ. Gịnị ọzọ ka ị ga-eme?", options: ["Rịọ onye ndụmọdụ TAP, American Job Center ma ọ bụ VA ka o lelee ya", "Zipu ya n'ọrụ ọ bụla n'agụghị ya", "Hapụ ndị ndụmọdụ n'ihi na AI ezuola", "Tinye ya n'ịntanetị ọha na nọmba ekwentị gị"], answer: 0, why: "AI na-enyere gị aka ide ihe, mana onye ndụmọdụ maara ọrụ dị n'obodo gị na uru gọọmentị, ma nwee ike ịhụ mperi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịgụ mgbasa ozi ọrụ dị ka onye isi na-ewe ndị ọrụ",
          minutes: 5,
          goal: "Wepụta ihe ndị dị mkpa na okwu isi n'ime mgbasa ozi ọrụ site n'enyemaka AI.",
          text: [
            "Mgbasa ozi ọrụ ọ bụla na-agwa gị ihe onye were ndị ọrụ chọrọ ịnụ. Ọtụtụ ụlọ ọrụ na-eji applicant tracking system (ATS), sọftwụ na-enyocha résumé maka okwu dabara na mgbasa ozi ahụ, ya mere iji okwu nke mgbasa ozi ahụ n'onwe ya dị mkpa.",
            "Detuo ezi mgbasa ozi ọrụ tinye n'ime ngwa enyemaka AI ma jụọ: \"Depụta ihe ndị a chọrọ n'ezie, nka ndị ọ ga-amasị ha inwe, na okwu isi 10 kachasị mkpa n'ime mgbasa ozi a. Wee gwa m nka m ndị dabara: abụ m onye isi ngwongwo (supply chief) na Marine Corps afọ 7, duru Marines 10, lekọta ngwaọrụ ruru $2 nde.\"",
            "Jiri aka gị tụnyere ndepụta AI ahụ na mgbasa ozi ahụ. Ọ bụrụ na i nwere ọtụtụ n'ime ihe a chọrọ n'ezie, tinye akwụkwọ. Ọtụtụ mmadụ na-etinye akwụkwọ n'enweghị ihe niile ọ ga-amasị ha inwe."
          ],
          steps: ["Họrọ otu ezi mgbasa ozi ọrụ.", "Tinye mgbasa ozi ahụ (ọ bụghị ozi nzuzo gị) n'ime ngwa enyemaka AI.", "Rịọ maka ihe a chọrọ n'ezie, ihe ọ ga-amasị ha inwe na okwu isi kachasị mkpa.", "Jụọ nka gị ndị dabara.", "Jiri aka gị tụnyere ndepụta ahụ na mgbasa ozi ahụ."],
          words: [["Applicant tracking system (ATS)", "sọftwụ ndị were ndị ọrụ na-eji anakọta ma nyochaa résumé maka okwu dabara."], ["Okwu isi (keyword)", "okwu ma ọ bụ nkebiokwu dị mkpa n'ime mgbasa ozi ahụ, dị ka \"inventory control\"."], ["Ihe a chọrọ n'ezie (must-have)", "ihe ị ga-enwerịrị ka e lebara gị anya."]],
          slides: [
            { title: "Mgbasa ozi na-agwa gị ihe ị ga-ekwu", bullets: ["Ndị were ndị ọrụ na-enyocha okwu dabara", "Jiri okwu nke mgbasa ozi ahụ n'onwe ya"] },
            { title: "Rịọ AI ka o wepụta", bullets: ["Ihe a chọrọ n'ezie", "Nka ndị ọ ga-amasị ha inwe", "Okwu isi 10 kachasị mkpa", "Nka gị ndị dabara"] },
            { title: "Wee kpebie", bullets: ["Jiri aka gị lelee ndepụta ahụ", "I nwere ọtụtụ ihe a chọrọ n'ezie? Tinye akwụkwọ"] }
          ],
          tryIt: "Chọta otu ezi mgbasa ozi ọrụ ị ga-achọ. Rịọ ngwa enyemaka AI ka o depụta ihe a chọrọ n'ezie, ihe ọ ga-amasị ha inwe na okwu isi 10 kachasị mkpa, na nka gị ndị dabara.",
          youCanNow: "iwepụta ihe a chọrọ na okwu isi n'ime mgbasa ozi ọrụ ma jikọta ha na ahụmahụ gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ \"ihe ọ ga-amasị ha inwe\" (nice-to-have) n'ime mgbasa ozi ọrụ?", options: ["Ihe ị ga-enwerịrị ka i tinye akwụkwọ", "Ụgwọ ọnwa", "Adreesị ụlọ ọrụ ahụ", "Nka na-enyere aka mana a chọghị ya n'ezie"], answer: 3, why: "Ihe ọ ga-amasị ha inwe bụ ihe mgbakwunye; ị ka nwere ike itinye akwụkwọ ma ọ bụrụ na i nwere ọtụtụ ihe a chọrọ n'ezie." },
            { objective: "O2", q: "I tinyere mgbasa ozi ọrụ n'ime AI. Gịnị ka ị ga-arịọ?", options: ["\"Ọrụ a ọ dị mma?\"", "\"Depụta ihe a chọrọ n'ezie, ihe ọ ga-amasị ha inwe na okwu isi 10 kachasị mkpa, na nka m ndị dabara.\"", "\"Tinyere m akwụkwọ.\"", "\"Dee nọmba Social Security m n'elu ya.\""], answer: 1, why: "Arịrịọ doro anya na-ewepụta ihe a chọrọ na okwu isi ị chọrọ iji mee ka résumé gị dabara." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ide résumé ndị nkịtị dabara n'ọrụ ahụ",
          minutes: 6,
          goal: "Jiri AI dee résumé mbụ nwere otu peeji dabara n'otu mgbasa ozi ọrụ, n'okwu ndị nkịtị na nọmba.",
          text: [
            "Résumé ndị nkịtị na-abụkarị otu peeji ma ọ bụ abụọ, ọ bụghị akụkọ ọrụ agha gị niile. O nwere obere nchịkọta n'elu, ahụmahụ gị n'isi okwu, nka gị, agụmakwụkwọ gị na asambodo gị. Jiri aha ọrụ ndị nkịtị ebe ọ dabara (\"supply chain supervisor\" kama \"supply chief\") ma kọwaa ihe i mere, otú o si buo ibu, na nsonaazụ ya.",
            "Nye AI ahụmahụ gị n'okwu dị mfe na okwu isi site na Nkuzi 2: \"Dee résumé nwere otu peeji maka mgbasa ozi ọrụ logistics coordinator a. Jiri okwu isi ndị a. Ahụmahụ m: [nkọwa dị mfe]. Jiri ngwaa siri ike na nọmba, enweghị mkpụrụ okwu nkenke ndị agha (acronym).\"",
            "Ewepụ nọmba Social Security gị, ozi DD-214, ụbọchị ọmụmụ gị zuru ezu, na ozi gbasara security clearance karịa ihe mgbasa ozi ahụ chọrọ. Ekwela ka AI tinye ihe ị na-emeghị. Wee rịọ onye ndụmọdụ TAP, American Job Center ma ọ bụ VA ka o lelee ya."
          ],
          steps: ["Dee ahụmahụ gị n'okwu dị mfe: gịnị, otú o si buo ibu, nsonaazụ gịnị.", "Nye AI okwu isi site na mgbasa ozi ahụ.", "Rịọ maka résumé nwere otu peeji nwere nchịkọta, isi okwu ahụmahụ na nka.", "Gbanwee okwu ndị agha ma lelee na ihe ọ bụla bụ eziokwu.", "Wepụ ozi nzuzo ma rịọ onye ndụmọdụ ka o lelee ya."],
          words: [["Nchịkọta (summary)", "ahịrị abụọ ma ọ bụ atọ n'elu résumé na-ekwu onye ị bụ na ihe ị na-enye."], ["Ime ka ọ dabara (tailor)", "ịgbanwe résumé gị ka ọ dabara n'otu ọrụ a kapịrị ọnụ."]],
          slides: [
            { title: "Ọdịdị résumé ndị nkịtị", bullets: ["Obere nchịkọta", "Isi okwu ahụmahụ nwere nsonaazụ", "Nka, agụmakwụkwọ, asambodo"] },
            { title: "Kwuo ya n'ụzọ ha", bullets: ["Aha ọrụ ndị nkịtị ebe ọ dabara", "Gịnị, otú o si buo ibu, nsonaazụ gịnị", "Jiri okwu isi nke mgbasa ozi ahụ"] },
            { title: "Mee ka ọ bụrụ eziokwu ma nwee nchekwa", bullets: ["Enweghị SSN, ozi DD-214 ma ọ bụ ụbọchị ọmụmụ zuru ezu", "Ekwela ka AI tinye ihe ị na-emeghị", "Rịọ onye ndụmọdụ ka o lelee ya"] }
          ],
          tryIt: "Jiri ndepụta okwu isi gị site na Nkuzi 2. Rịọ ngwa enyemaka AI ka o dee résumé mbụ nwere otu peeji maka mgbasa ozi ahụ. Gbanwee ahịrị ọ bụla na-abụghị eziokwu kpọmkwem.",
          youCanNow: "ide résumé ndị nkịtị nwere otu peeji dabara n'otu mgbasa ozi ọrụ site n'enyemaka AI.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere résumé dabara n'ọrụ ji eji okwu nke mgbasa ozi ahụ n'onwe ya?", options: ["Ka sọftwụ na-enyocha ya na onye isi na-ewe ndị ọrụ hụ na ọ dabara", "Ka ọ dị ogologo", "Ka o jiri okwu ndị agha", "Ka ị ghara ide cover letter"], answer: 0, why: "Applicant tracking systems na ndị isi na-ewe ndị ọrụ na-achọ okwu isi nke mgbasa ozi ahụ." },
            { objective: "O3", q: "Ihe AI dere na-ekwu na i nwetara asambodo ị na-enweghị. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ dịghị onye na-elele", "Kwuo na ị ga-enweta ya n'oge na-adịghị anya", "Wepụ ya ka ihe ọ bụla bụrụ eziokwu", "Tinye asambodo abụọ ọzọ"], answer: 2, why: "Ihe ọ bụla dị na résumé gị ga-abụrịrị eziokwu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iwu résumé ndị nkịtị gị",
        questions: [
          { objective: "O1", q: "Ị ga-apụ n'ọrụ agha ọnwa na-abịa, ị chọkwara enyemaka ọrụ otu-na-otu. Ezigbo ebe mbụ ị ga-aga bụ:", options: ["Ọfịs mgbanwe nke ọdụ agha gị na TAP", "Weebụsaịtị ọrụ ọ bụla", "Onye a ma ama na soshal midia", "Ọrụ na-akwụ ụgwọ maka itinye akwụkwọ"], answer: 0, why: "TAP na Department of Labor na-enye ọmụmụ ihe na enyemaka otu-na-otu." },
          { objective: "O2", q: "Gịnị bụ applicant tracking system?", options: ["GPS maka ajụjụ ọnụ ọrụ", "Sọftwụ na-enyocha résumé maka okwu dabara", "Uru VA", "Ebe nchekwa data ndị agha"], answer: 1, why: "Ọtụtụ ndị were ndị ọrụ na-eji ya ahazi résumé." },
          { objective: "O2", q: "Gịnị mere ị ga-eji okwu nke mgbasa ozi ọrụ ahụ n'onwe ya na résumé gị?", options: ["Iji ṅomie onye were ndị ọrụ", "Ime ka ọ dị ogologo", "Ka sọftwụ na-enyocha ya na ndị isi na-ewe ndị ọrụ hụ na ọ dabara", "Iwu chọrọ ya"], answer: 2, why: "Okwu isi dabara na-egosi na ị dabara n'ọrụ ahụ." },
          { objective: "O3", q: "Kedu isi okwu résumé kacha rụọ ọrụ maka ọrụ logistics ndị nkịtị?", options: ["\"S4 shop NCOIC\"", "\"Mere ihe gbasara ngwongwo\"", "\"Hooah\"", "\"Lekọtara ngwaọrụ ruru $2 nde n'enweghị ihe furu efu n'ime ngụkọ ngwongwo 3\""], answer: 3, why: "Okwu ndị nkịtị, nọmba na nsonaazụ." },
          { objective: "O3", q: "Kedu nke ị ga-ewepụ na résumé ndị nkịtị?", options: ["Nọmba Social Security gị", "Nka gị", "Obere nchịkọta", "Asambodo gị"], answer: 0, why: "Nọmba nzuzo adịghị na résumé." }
        ]
      }
    },
    {
      name: "Isi 2: Itinye akwụkwọ na ajụjụ ọnụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide obere akwụkwọ ozi na nchịkọta profaịlụ",
          minutes: 5,
          goal: "Jiri AI dee obere akwụkwọ ozi (cover letter) na nchịkọta profaịlụ n'ịntanetị n'okwu nke gị.",
          text: [
            "Cover letter bụ obere akwụkwọ ozi na-ekwu ihe mere i ji chọọ ọrụ a na ihe mere i ji dabara na ya. Mee ka ọ bụrụ paragraf atọ dị mkpụmkpụ: ihe mere ọrụ a, ihe abụọ ma ọ bụ atọ kacha dabara gị na ihe akaebe, na njedebe nwere nkwanye ugwu.",
            "Jụọ AI: \"Dee cover letter nwere paragraf 3 maka mgbasa ozi ọrụ a, site n'iji résumé m. Ka ọ nwee obi ike mana ọ ghara isi ike, enweghị okwu ndị agha.\" Wee mee ka ọ dị ka gị: gbanwee okwu ị na-agaghị ekwu mgbe ọ bụla.",
            "Nchịkọta profaịlụ n'ịntanetị, dịka ọmụmaatụ na LinkedIn, bụ ahịrịokwu abụọ ruo anọ gbasara onye ị bụ na ọrụ ị chọrọ. Rịọ AI ka o nye gị ụdị atọ, họrọ otu ma dezie ya."
          ],
          steps: ["Nye AI mgbasa ozi ọrụ ahụ na résumé gị.", "Rịọ maka cover letter nwere paragraf atọ.", "Dezie ya ka ọ dị ka gị.", "Rịọ maka ụdị atọ nke nchịkọta profaịlụ nwere ahịrịokwu abụọ ruo anọ.", "Họrọ otu, dezie ya ma jiri ya."],
          words: [["Cover letter", "obere akwụkwọ ozi e zitere na résumé na-ekwu ihe mere i ji chọọ ọrụ ahụ ma dabara na ya."], ["Nchịkọta profaịlụ", "ahịrịokwu ole na ole gbasara gị n'elu profaịlụ ọrụ gị n'ịntanetị."]],
          slides: [
            { title: "Cover letter: paragraf atọ", bullets: ["Ihe mere ọrụ a", "Ihe kacha dabara gị, na ihe akaebe", "Njedebe nwere nkwanye ugwu"] },
            { title: "Mee ka ọ bụrụ nke gị", bullets: ["Obi ike, ọ bụghị isi ike", "Enweghị okwu ndị agha", "Gbanwee okwu ị na-agaghị ekwu"] },
            { title: "Nchịkọta profaịlụ", bullets: ["Ahịrịokwu abụọ ruo anọ", "Onye ị bụ na ọrụ ị chọrọ", "Rịọ AI ka o nye gị ụdị atọ"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI maka cover letter nwere paragraf atọ maka ọrụ ahụ site na Nkuzi 2. Gbanwee opekata mpe nkebiokwu atọ ka ọ dị ka gị.",
          youCanNow: "ide obere cover letter na nchịkọta profaịlụ site n'enyemaka AI, n'okwu nke gị.",
          quickCheck: [
            { objective: "O4", q: "Ole ka ezigbo cover letter kwesịrị ịdị ogologo?", options: ["Otu ahịrịokwu", "Paragraf atọ dị mkpụmkpụ", "Peeji atọ zuru ezu", "Dị ka résumé gị"], answer: 1, why: "Paragraf atọ dị mkpụmkpụ na-ekwu ihe mere ọrụ a, ihe kacha dabara gị na njedebe nwere nkwanye ugwu." },
            { objective: "O4", q: "Cover letter AI dere na-eji okwu ị na-agaghị ekwu mgbe ọ bụla. Gịnị ka ị ga-eme?", options: ["Zipu ya otu o si dị", "Rịọ maka nke ka ogologo", "Detuo akwụkwọ ozi enyi gị kama", "Gbanwee opekata mpe nkebiokwu atọ ka ọ dị ka gị"], answer: 3, why: "Cover letter gị kwesịrị ịdị ka gị, ka ajụjụ ọnụ dabara n'akwụkwọ ozi ahụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime omume ajụjụ ọnụ na AI",
          minutes: 6,
          goal: "Mee omume mmeghe sekọnd 60 na azịza STAR abụọ na AI na-ajụ ajụjụ ọnụ.",
          text: [
            "Ọtụtụ ajụjụ ọnụ na-amalite na \"Kọọrọ m banyere onwe gị.\" Ezigbo azịza na-ewe ihe dị ka sekọnd 60: onye ị bụ ugbu a, ahụmahụ gị kacha dabara, na ihe mere i ji chọọ ọrụ a. Akọla akụkọ ọrụ agha gị niile.",
            "Maka ajụjụ \"Kọọrọ m otu oge...\", jiri STAR: situation (ọnọdụ), task (ọrụ e nyere gị), action (ihe i mere), result (nsonaazụ). Ọmụmaatụ: \"Njikere ụgbọala ndị otu anyị dị na 70% (ọnọdụ). A gwara m ka m bulie ya tupu nyocha (ọrụ). Edoro m ihe nsochi akụrụngwa kwa ụbọchị na usoro ọrụ shift abụọ (ihe m mere). Njikere ruru 92% n'ime izu isii (nsonaazụ).\"",
            "Rịọ AI ka o mee ka onye na-ajụ ajụjụ ọnụ: \"Mee ka onye isi na-ewe ndị ọrụ maka ọrụ a. Jụọ m otu ajụjụ n'otu oge. Mgbe azịza ọ bụla gasịrị, gwa m otu ihe m mere nke ọma na otu ihe m ga-eme ka ọ ka mma.\" Mee omume n'olu dị elu. Ọ bụrụ na i ji voice mode (ikwu okwu), kwuo okwu dị ka ị na-ekwukarị."
          ],
          steps: ["Dee azịza sekọnd 60 maka \"kọọrọ m banyere onwe gị\".", "Dee akụkọ STAR abụọ site n'ọrụ agha gị.", "Rịọ AI ka o mee ka onye na-ajụ ajụjụ ọnụ, otu ajụjụ n'otu oge.", "Zaa n'olu dị elu ma rịọ maka otu ihe i mere nke ọma na otu ihe ị ga-edozi oge ọ bụla.", "Mee omume ruo mgbe ọ dị gị mfe."],
          words: [["STAR", "situation, task, action, result: ụzọ isi kọọ obere akụkọ gbasara ọrụ gị."], ["Ajụjụ gbasara omume (behavioral question)", "ajụjụ ọnụ na-ajụ maka oge i mere otu ihe."]],
          slides: [
            { title: "\"Kọọrọ m banyere onwe gị\"", bullets: ["Ihe dị ka sekọnd 60", "Onye ị bụ ugbu a", "Ahụmahụ kacha dabara", "Ihe mere ọrụ a"] },
            { title: "Azịza STAR", bullets: ["Situation (ọnọdụ)", "Task (ọrụ e nyere gị)", "Action (ihe i mere)", "Result (nsonaazụ), na nọmba ma ọ bụrụ na ị nwere ike"] },
            { title: "AI dị ka onye na-ajụ ajụjụ ọnụ", bullets: ["Otu ajụjụ n'otu oge", "Otu ihe i mere nke ọma, otu ihe ị ga-edozi mgbe ọ bụla", "Mee omume n'olu dị elu"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o mee ka onye isi na-ewe ndị ọrụ maka ọrụ ị họọrọ. Zaa ajụjụ atọ n'olu dị elu, gụnyere \"Kọọrọ m banyere onwe gị\", ma dee ndụmọdụ ọ nyere.",
          youCanNow: "inye mmeghe sekọnd 60 na ịza ajụjụ gbasara omume site n'iji STAR.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka A dị n'azịza STAR pụtara?", options: ["Award (onyinye)", "Attitude (àgwà)", "Action (ihe i mere)", "Answer (azịza)"], answer: 2, why: "STAR bụ situation, task, action, result; action bụ ihe i mere." },
            { objective: "O5", q: "Ị chọrọ ime omume na AI na-ajụ ajụjụ ọnụ. Kedu arịrịọ ị ga-eji?", options: ["\"Jụọ otu ajụjụ n'otu oge ma gwa m otu ihe m mere nke ọma na otu ihe m ga-edozi.\"", "\"Nye m azịza niile ka m buru n'isi.\"", "\"Jụọ m ajụjụ 30 n'otu mgbe.\"", "\"Gwa m na m zuru oke.\""], answer: 0, why: "Otu ajụjụ n'otu oge na ndụmọdụ na-ekwe ka i mee omume ma mee ka azịza ọ bụla ka mma." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịchọ ọrụ nke ọma na ịhụ aghụghọ ọrụ",
          minutes: 5,
          goal: "Chọọ ọrụ n'isi iyi gọọmentị ma hụ ihe ịdọ aka na ntị nke aghụghọ ọrụ.",
          text: [
            "Chọọ ebe a na-etinye ezi ọrụ: weebụsaịtị ụlọ ọrụ, CareerOneStop Job Finder, American Job Centers, na maka ọrụ gọọmentị etiti (federal), USAJOBS na saịtị FedsHireVets nke Office of Personnel Management (OPM), nke na-akọwa otu gọọmentị etiti si ewe ndị agha lara ezumike n'ọrụ, gụnyere veterans' preference.",
            "Ndị aghụghọ na-achọ ndị na-achọ ọrụ. Ihe ịdọ aka na ntị: onyinye ọrụ n'enweghị ajụjụ ọnụ, arịrịọ ka ị kwụọ ụgwọ maka ọzụzụ ma ọ bụ ngwaọrụ, chekị ị ga-etinye n'ụlọ akụ wee zighachi ego, ajụjụ ọnụ naanị site n'ozi ederede, ma ọ bụ arịrịọ maka nọmba Social Security gị ma ọ bụ ozi ụlọ akụ tupu ezi onyinye ọrụ.",
            "Rịọ AI ka o gosi ihe ịdọ aka na ntị n'ime mgbasa ozi ọrụ na-enyo enyo, mgbe i wepụrụ ozi gị. Wee jiri aka gị lelee ụlọ ọrụ ahụ na weebụsaịtị ya n'onwe ya. Nye ozi nzuzo naanị maka ezi akwụkwọ, mgbe ezi onyinye ọrụ gasịrị, site n'ụzọ gọọmentị nke onye were ndị ọrụ ahụ."
          ],
          steps: ["Chọọ na saịtị ụlọ ọrụ, CareerOneStop, American Job Centers na USAJOBS.", "Lee ihe ịdọ aka na ntị: enweghị ajụjụ ọnụ, ịkwụ ụgwọ n'ihu, chekị-wee-zighachi, ajụjụ ọnụ naanị site n'ozi ederede.", "Enyela SSN ma ọ bụ ozi ụlọ akụ tupu ezi onyinye ọrụ.", "Lelee ụlọ ọrụ ahụ na weebụsaịtị ya n'onwe ya.", "Rịọ AI ka o depụta ihe ịdọ aka na ntị n'ime mgbasa ozi na-enyo enyo."],
          words: [["Veterans' preference", "iwu na-enye ndị agha lara ezumike ruru eru uru n'iwe ndị ọrụ gọọmentị etiti."], ["Aghụghọ ọrụ (job scam)", "onyinye ọrụ adịgboroja e mere iji zuo ego ma ọ bụ ozi nzuzo."]],
          slides: [
            { title: "Chọọ ebe ezi ọrụ dị", bullets: ["Weebụsaịtị ụlọ ọrụ", "CareerOneStop na American Job Centers", "USAJOBS na FedsHireVets maka ọrụ gọọmentị etiti"] },
            { title: "Ihe ịdọ aka na ntị nke aghụghọ ọrụ", bullets: ["Onyinye ọrụ n'enweghị ajụjụ ọnụ", "Ịkwụ ụgwọ maka ọzụzụ ma ọ bụ ngwaọrụ", "Tinye chekị n'ụlọ akụ wee zighachi ego", "Ajụjụ ọnụ naanị site n'ozi ederede"] },
            { title: "Chebe onwe gị", bullets: ["Enweghị SSN ma ọ bụ ozi ụlọ akụ tupu ezi onyinye ọrụ", "Jiri aka gị lelee ụlọ ọrụ ahụ", "Rịọ AI ka ọ hụ ihe ịdọ aka na ntị"] }
          ],
          sources: [
            { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "Office of Personnel Management: FedsHireVets", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa résumé gị nwere otu peeji dabara na mgbasa ozi ọrụ ị họọrọ, na azịza sekọnd 60 gị maka \"kọọrọ m banyere onwe gị\". Lelee na ihe ọ bụla bụ eziokwu na o nweghị nọmba nzuzo, wee kwuo azịza ahụ n'olu dị elu ugboro abụọ.",
          youCanNow: "ịchọ ọrụ n'isi iyi gọọmentị, izere aghụghọ ọrụ, na itinye akwụkwọ na résumé dabara n'ọrụ na mmeghe i meela omume ya.",
          quickCheck: [
            { objective: "O6", q: "Ebee ka a na-etinye ọrụ gọọmentị etiti (federal) nke US?", options: ["Naanị na soshal midia", "N'ozi ederede site n'aka ndị ị na-amaghị", "Na saịtị résumé a na-akwụ ụgwọ", "USAJOBS"], answer: 3, why: "USAJOBS bụ saịtị gọọmentị maka mgbasa ozi ọrụ gọọmentị etiti." },
            { objective: "O6", q: "Onye na-achọ ndị ọrụ (recruiter) na-arịọ nọmba Social Security gị tupu ajụjụ ọnụ ọ bụla. Gịnị ka ị ga-eme?", options: ["Zipu ya ka ọrụ ahụ ghara ịgafe gị", "Ezipula ya; nye ya naanị maka ezi akwụkwọ mgbe ezi onyinye ọrụ gasịrị", "Zipu ọkara ya", "Zipu DD-214 gị kama"], answer: 1, why: "Ịrịọ nọmba nzuzo tupu ajụjụ ọnụ ma ọ bụ onyinye ọrụ ọ bụla bụ ihe ịdọ aka na ntị nke aghụghọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Itinye akwụkwọ na ajụjụ ọnụ",
        questions: [
          { objective: "O4", q: "Ezigbo cover letter bụ:", options: ["Peeji ise", "Paragraf atọ dị mkpụmkpụ: ihe mere ọrụ a, ihe kacha dabara gị, njedebe nwere nkwanye ugwu", "Otu ihe ahụ dị ka résumé gị", "Nke juputara na mkpụrụ okwu nkenke ndị agha"], answer: 1, why: "Ọ dị mkpụmkpụ, lekwasịrị anya, ma dabara n'ọrụ ahụ." },
          { objective: "O5", q: "Azịza \"kọọrọ m banyere onwe gị\" kwesịrị ịdị ihe dị ka:", options: ["Nkeji 10", "Akụkọ ọrụ agha gị niile", "Sekọnd 60: onye ị bụ, ahụmahụ dabara, ihe mere ọrụ a", "Akụkọ ezinụlọ gị"], answer: 2, why: "Ọ dị mkpụmkpụ ma lekwasị anya n'ọrụ ahụ." },
          { objective: "O5", q: "Gịnị ka R dị na STAR pụtara?", options: ["Rank (ọkwa agha)", "Reason (ihe kpatara ya)", "Report (akụkọ)", "Result (nsonaazụ)"], answer: 3, why: "Jiri nsonaazụ mechie, ọ ka mma ma ọ bụrụ na nọmba dị na ya." },
          { objective: "O6", q: "\"Ụlọ ọrụ\" na-enye gị ọrụ n'enweghị ajụjụ ọnụ ma na-arịọ ka ị kwụọ ụgwọ maka ọzụzụ. Nke a bụ:", options: ["Ihe ịdọ aka na ntị nke aghụghọ ọrụ", "Onyinye ọrụ nkịtị", "Uru ndị agha lara ezumike", "Veterans' preference"], answer: 0, why: "Enweghị ajụjụ ọnụ na ịkwụ ụgwọ n'ihu bụ ihe ịrịba ama aghụghọ ọrụ a ma ama." },
          { objective: "O6", q: "Kedu saịtị na-akọwa otu gọọmentị etiti si ewe ndị agha lara ezumike n'ọrụ, gụnyere veterans' preference?", options: ["Mgbasa ozi na-apụta na mberede", "FedsHireVets nke OPM", "Njikọ dị n'ozi ederede", "Chatbot AI ọ bụla"], answer: 1, why: "FedsHireVets bụ isi iyi OPM maka ndị agha lara ezumike na-achọ ọrụ gọọmentị etiti." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ịgbanwe Ọrụ na Inweta Ọrụ",
    questions: [
      { objective: "O1", q: "TAP pụtara:", options: ["Transition Assistance Program", "Training and Pay", "Total Army Program", "Tech Apprentice Plan"], answer: 0, why: "TAP na-enyere ndị agha aka ịbanye ndụ ndị nkịtị." },
      { objective: "O1", q: "Kedu ụlọ ọrụ gọọmentị so na TAP?", options: ["Naanị ụlọ ọrụ nkeonwe", "Ọtụtụ, gụnyere Department of Labor, DoD na VA", "Naanị ndị agha Army", "Naanị VA"], answer: 1, why: "TAP bụ ọrụ ọtụtụ ụlọ ọrụ gọọmentị na-arụkọ ọnụ." },
      { objective: "O1", q: "Ebee ka a na-ebu ndị agha lara ezumike ụzọ maka enyemaka ịchọ ọrụ na ọzụzụ?", options: ["Onye na-ere ụgbọala", "Otu na soshal midia", "American Job Centers", "Weebụsaịtị na-akwụ ụgwọ maka itinye akwụkwọ"], answer: 2, why: "Department of Labor na-ebu ndị agha lara ezumike ụzọ n'ebe ahụ." },
      { objective: "O1", q: "Kedu mmemme VA na-enye ndụmọdụ ọrụ n'efu, gụnyere enyemaka résumé, nye ndị agha lara ezumike ruru eru?", options: ["VA home loans", "TRICARE", "The GI Bill Comparison Tool", "Personalized Career Planning and Guidance"], answer: 3, why: "VA na-akọwa ya dị ka ndụmọdụ ọrụ na agụmakwụkwọ n'efu." },
      { objective: "O1", q: "Gịnị mere ị ga-eji AI na onye ndụmọdụ abụọ?", options: ["AI na-enyere gị aka ide ihe; onye ndụmọdụ maara ọrụ dị n'obodo gị na uru gọọmentị", "AI na-ehie ụzọ mgbe niile", "Ndị ndụmọdụ na-edere gị ihe niile", "Naanị otu ka ị chọrọ"], answer: 0, why: "Nke ọ bụla na-eme ihe nke ọzọ na-enweghị ike ime." },
      { objective: "O2", q: "\"Ihe a chọrọ n'ezie\" (must-have) n'ime mgbasa ozi ọrụ bụ:", options: ["Ihe mgbakwunye mara mma", "Ihe ị ga-enwerịrị ka e lebara gị anya", "Ụgwọ ọnwa", "Adreesị ọfịs"], answer: 1, why: "Ihe a chọrọ n'ezie bụ isi ihe a chọrọ." },
      { objective: "O3", q: "Mgbe ị na-etinye mgbasa ozi ọrụ n'ime AI, ị KWESỊGHỊ itinyekwa:", options: ["Aha ọrụ ahụ", "Ihe a chọrọ", "Nọmba Social Security gị", "Okwu isi"], answer: 2, why: "Nọmba nzuzo anaghị abanye n'ime AI mgbe ọ bụla." },
      { objective: "O2", q: "I nwere ọtụtụ ihe a chọrọ n'ezie mana ọ bụghị ihe niile ọ ga-amasị ha inwe. Ị kwesịrị:", options: ["Ịghara itinye akwụkwọ mgbe ọ bụla", "Ịgha ụgha maka ndị fọdụrụ", "Ichere afọ ise", "Itinye akwụkwọ"], answer: 3, why: "Ọtụtụ mmadụ na-etinye akwụkwọ n'enweghị ihe niile ọ ga-amasị ha inwe." },
      { objective: "O3", q: "Ime ka résumé dabara (tailor) pụtara:", options: ["Ịgbanwe ya ka ọ dabara n'otu ọrụ a kapịrị ọnụ", "Ime ka ọ dị ogologo", "Itinye ọrụ niile ị rụtụla", "Ibipụta ya na agba"], answer: 0, why: "Ime ka ọ dabara na-eme ka résumé gị dabara na mgbasa ozi ahụ." },
      { objective: "O3", q: "Kedu aha ọrụ ndị nkịtị ka mma maka supply chief?", options: ["S4 NCOIC", "Supply chain supervisor", "Gunny", "Chief of Stuff"], answer: 1, why: "Aha ọrụ ndị nkịtị na-enyere ndị isi na-ewe ndị ọrụ aka ịghọta ọrụ gị." },
      { objective: "O3", q: "Résumé AI dere na-ekwu na i duru mmadụ 50; i duru 10. Ị ga-:", options: ["Hapụ 50, ọ na-ada mma karị", "Gbanwee ya ka ọ bụrụ 100", "Gbanwee ya ka ọ bụrụ ezi nọmba, 10", "Wepụ nọmba niile"], answer: 2, why: "Ihe ọ bụla ga-abụrịrị eziokwu." },
      { objective: "O3", q: "Onye kwesịrị ilele résumé gị tupu i zipu ya?", options: ["Onye ị na-amaghị n'ịntanetị", "Ọ dịghị onye", "Naanị AI", "Onye ndụmọdụ TAP, American Job Center ma ọ bụ VA"], answer: 3, why: "Onye ndụmọdụ a zụrụ azụ nwere ike ịhụ nsogbu AI na-ahụghị." },
      { objective: "O4", q: "Nchịkọta profaịlụ bụ:", options: ["Ahịrịokwu abụọ ruo anọ gbasara onye ị bụ na ọrụ ị chọrọ", "Akụkọ ọrụ agha gị niile", "Adreesị ụlọ gị", "Ndepụta okwuntughe"], answer: 0, why: "Ọ bụ obere mmeghe n'elu profaịlụ n'ịntanetị." },
      { objective: "O4", q: "Mgbe AI dechara cover letter gị, ị kwesịrị:", options: ["Izipu ya n'agụghị ya", "Idezi ya ka ọ dị ka gị", "Itinye okwu ndị agha", "Ime ka ọ bụrụ peeji ise"], answer: 1, why: "Akwụkwọ ozi gị kwesịrị ịdị ka gị." },
      { objective: "O5", q: "STAR pụtara:", options: ["Skills, training, awards, rank", "Start, try, answer, repeat", "Situation, task, action, result", "Speak, think, act, rest"], answer: 2, why: "STAR bụ ụzọ isi kọọ obere akụkọ gbasara ọrụ." },
      { objective: "O5", q: "Mgbe AI na-eme ka onye na-ajụ gị ajụjụ ọnụ, ezigbo arịrịọ bụ:", options: ["\"Jụọ ajụjụ niile n'otu mgbe\"", "\"Zaa n'ọnọdụ m\"", "\"Gwa m na m zuru oke\"", "\"Jụọ otu ajụjụ n'otu oge ma nye otu ihe m mere nke ọma na otu ihe m ga-edozi\""], answer: 3, why: "Otu n'otu oge na ndụmọdụ na-ewulite ezi nka." },
      { objective: "O5", q: "Ime omume azịza ajụjụ ọnụ n'olu dị elu na-enyere aka n'ihi na:", options: ["Ikwu okwu dị iche n'ịgụ ihe; ọ na-eme ka azịza dị mfe ikwu", "Ọ bụ iwu", "AI enweghị ike ịgụ ederede", "Ọ dị ngwa karịa ide ihe"], answer: 0, why: "Ikwu ya n'olu dị elu na-akwado gị maka ezi ajụjụ ọnụ." },
      { objective: "O6", q: "Ebee ka a na-etinye ọrụ gọọmentị etiti?", options: ["Naanị na soshal midia", "USAJOBS", "N'ozi ederede", "Naanị n'ọdụ agha"], answer: 1, why: "USAJOBS bụ saịtị ọrụ nke gọọmentị etiti." },
      { objective: "O6", q: "Onye na-achọ ndị ọrụ zitere gị chekị ka i tinye n'ụlọ akụ ma rịọ ka i zighachi akụkụ ya. Nke a bụ:", options: ["Ego mbata ọrụ (signing bonus)", "Uru VA", "Ihe ịdọ aka na ntị nke aghụghọ ọrụ", "Usoro nnabata ọrụ nkịtị"], answer: 2, why: "Chekị-wee-zighachi bụ aghụghọ a na-ahụkarị." },
      { objective: "O6", q: "Olee mgbe ọ dị mma inye onye were ndị ọrụ nọmba Social Security gị?", options: ["N'ozi ederede mbụ", "Iji nweta ajụjụ ọnụ", "Tupu onyinye ọrụ ọ bụla", "Maka ezi akwụkwọ mgbe ezi onyinye ọrụ gasịrị, site n'ụzọ gọọmentị ha"], answer: 3, why: "Ezi ndị were ndị ọrụ chọrọ ya naanị maka akwụkwọ iwe mmadụ n'ọrụ mgbe onyinye ọrụ gasịrị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 5, 7, 8, 10, 12, 14, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Dabara na mgbasa ozi ọrụ ahụ", objective: "O2", notYet: "Résumé ahụ nwere ike ịbụ maka ọrụ ọ bụla; okwu isi ole na ole nke mgbasa ozi ahụ dị na ya.", meets: "Résumé ahụ na-eji okwu isi nke mgbasa ozi ahụ ma gosi ihe a chọrọ n'ezie onye na-amụ ihe nwere.", exceeds: "Onye na-amụ ihe nwere ike igosi ebe e gosiri ihe ọ bụla a chọrọ n'ezie." },
      { name: "Isi okwu ndị nkịtị nwere nọmba", objective: "O3", notYet: "Isi okwu na-erughị ise, ma ọ bụ isi okwu nwere okwu ndị agha na-enweghị nọmba.", meets: "Opekata mpe isi okwu ise n'okwu ndị nkịtị, nwere nọmba ma ọ bụ nsonaazụ, n'otu peeji.", exceeds: "Isi okwu ọ bụla na-egosi ihe e mere, otú o si buo ibu na nsonaazụ ya." },
      { name: "Eziokwu na nzuzo", objective: "O6", notYet: "Otu ihe ekwuru abụghị eziokwu, ma ọ bụ nọmba Social Security, DD-214 ma ọ bụ nọmba nzuzo ọzọ dị na ya.", meets: "Ihe ọ bụla ekwuru bụ eziokwu, ọ dịghịkwa nọmba nzuzo dị na ya.", exceeds: "Onye ndụmọdụ ma ọ bụ onye ọgụgụ a tụkwasịrị obi elelela ya." },
      { name: "Azịza sekọnd 60", objective: "O5", notYet: "Azịza ahụ dị ogologo karịa sekọnd 60 nke ukwuu ma ọ bụ ọ bụghị maka ọrụ a.", meets: "Ihe dị ka sekọnd 60: onye ị bụ, ahụmahụ dabara na ihe mere ọrụ a, e kwuru n'olu dị elu ugboro abụọ.", exceeds: "Onye na-amụ ihe jiri ndụmọdụ AI mee ka otu akụkụ ka mma n'etiti nnwale abụọ ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe tinyere akwụkwọ n'opekata mpe otu ọrụ na résumé dabara na ya n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe nwetara ajụjụ ọnụ ma ọ bụ onyinye ọrụ n'ime ụbọchị 90",
      "Ndị na-amụ ihe kpọtụrụ TAP, American Job Center ma ọ bụ ndụmọdụ ọrụ VA n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị (smartphone na-arụ ọrụ maka omume ajụjụ ọnụ)",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Otu ezi mgbasa ozi ọrụ ndị nkịtị onye na-amụ ihe chọrọ",
      "Ngwa ide ihe dị ka Google Docs ma ọ bụ Microsoft Word maka résumé",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Mee ka onye na-amụ ihe ọ bụla weta otu ezi mgbasa ozi ọrụ na nnọkọ mbụ.",
      "Chetara ndị na-amụ ihe na nọmba Social Security, DD-214 na nọmba nzuzo ndị ọzọ anaghị abanye na prompt AI ma ọ bụ na résumé mgbe ọ bụla.",
      "Mee omume ajụjụ ọnụ n'abụọ abụọ mgbe omume AI gasịrị: otu na-ajụ, otu na-aza n'olu dị elu, wee gbanwee.",
      "Jiri rubric tụọ akara résumé ikpeazụ na azịza ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Jikọta ndị na-amụ ihe na TAP, American Job Center ma ọ bụ ndụmọdụ ọrụ VA maka nlele mgbe ihe ọmụmụ a gwụrụ."
    ]
  }
};
