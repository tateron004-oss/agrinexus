"use strict";

// Koach Learn course (Igbo translation of shared/youth-first-job.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const SRC = {
  youthRules: { name: "US Department of Labor: YouthRules! (iwu ọrụ maka ndị ntorobịa)", url: "https://www.dol.gov/agencies/whd/youthrules" },
  fs43: { name: "US Department of Labor: Fact Sheet 43, iwu ọrụ ụmụaka maka ọrụ na-abụghị ọrụ ugbo", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
  childLabor: { name: "US Department of Labor: Ọrụ ụmụaka (child labor)", url: "https://www.dol.gov/agencies/whd/child-labor" },
  stateChildLabor: { name: "US Department of Labor: Iwu ọrụ ụmụaka nke steeti ọ bụla", url: "https://www.dol.gov/agencies/whd/state/child-labor" },
  minWage: { name: "US Department of Labor: Ụgwọ ọrụ kacha nta (minimum wage)", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
  stateMinWage: { name: "US Department of Labor: Iwu ụgwọ ọrụ kacha nta nke steeti ọ bụla", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
  i9: { name: "USCIS: Form I-9, Nkwenye na ị nwere ike ịrụ ọrụ", url: "https://www.uscis.gov/i-9" },
  w4: { name: "IRS: Gbasara Form W-4", url: "https://www.irs.gov/forms-pubs/about-form-w-4" },
  irs751: { name: "IRS: Topic 751, ụtụ Social Security na Medicare a na-ewepụ n'ụgwọ", url: "https://www.irs.gov/taxtopics/tc751" },
  oshaYoung: { name: "OSHA: Ndị ọrụ na-eto eto", url: "https://www.osha.gov/young-workers" },
  ftcJobScams: { name: "FTC: Aghụghọ ọrụ", url: "https://consumer.ftc.gov/articles/job-scams" }
};

module.exports = {
  id: "youth-first-job-ig",
  lang: "ig",
  translationOf: "youth-first-job",
  category: "Workforce Development",
  name: "Ọrụ Mbụ Gị: Akwụkwọ Ikike Ọrụ, Ụgwọ Ọrụ na Ihe Ndị Isi Na-atụ Anya",
  skills: "Ịlele iwu ọrụ ndị ntorobịa, Ịkwadebe akwụkwọ ọrụ, Ịgụ paystub, Idebe ndekọ awa ọrụ gị, Ime ihe onye isi na-atụ anya, Ikwu okwu gbasara nchekwa",
  outcome: "ịmalite ọrụ mbụ gị dị njikere: ịlele na ọrụ ahụ na awa ya kwekọrọ n'iwu maka afọ gị, ịchịkọta akwụkwọ ọrụ gị, ịgụ na ịlele paystub gị, ime ihe otu onye isi si atụ anya, na ikwu okwu ma ọ bụrụ na ihe adịghị mma ma ọ bụ ezighi ezi.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ntorobịa na-akwado maka ọrụ mbụ ha, dị ka n'ụlọ ahịa, ụlọ nri, ogige ezumike oge okpomọkụ (summer camp), ụlọ ihe nkiri ma ọ bụ ọfịs. Ọ na-enyekwa ndị nne na nna, ndị ndụmọdụ na mmemme ọrụ ndị ntorobịa aka.",
    "Ị ga-elele iwu maka afọ gị, kwadebe akwụkwọ gị, gụọ paycheck (akwụkwọ ụgwọ ọrụ) ma tụnyere ya na awa i rụrụ, mụta ihe ndị isi na-atụ anya n'izu mbụ, ma mụta ikike gị na ihe ị ga-eme ma ọ bụrụ na ọrụ adịghị mma.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" n'akwụkwọ ma ọ bụ n'ekwentị. Na njedebe, ị ga-eme Mpempe Mmalite Ọrụ Mbụ nke gị. Ihe ọmụmụ a na-akụzi iwu; ọ naghị anọchi ọfịs ọrụ nke steeti gị. Lelee peeji steeti gị mgbe niile."
  ],
  finalTask: "Mee Mpempe Mmalite Ọrụ Mbụ (otu peeji) maka ezi ọrụ ma ọ bụ ọrụ ị na-eme atụmatụ: (1) afọ gị, ọrụ ahụ, na awa ị nwere ike ịrụ n'okpuru iwu federal na iwu steeti gị, ya na peeji gọọmentị i lelere; (2) ndepụta akwụkwọ ị chọrọ (akwụkwọ ikike ọrụ ma ọ bụrụ na steeti gị chọrọ ya, akwụkwọ njirimara maka Form I-9, Form W-4) na ebe ị ga-enweta nke ọ bụla; (3) omume ilele paystub: site na paystub e mepụtara emepụta, dee gross pay, mwepụ ọ bụla na net pay, ma hụ na mgbakọ ahụ ziri ezi; (4) omume atọ ị ga-egosi onye isi gị n'izu abụọ mbụ; (5) atụmatụ gị ma ọ bụrụ na ihe adịghị mma: onye ị ga-ebu ụzọ gwa na nọmba ekwentị gọọmentị ị ga-akpọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa (ihe dị ka afọ 14 ruo 19) na ndị okenye na-eto eto na-achọ ọrụ mbụ, gụnyere ụmụ akwụkwọ nọ na mmemme ọrụ ndị ntorobịa oge okpomọkụ, ndị ntorobịa nọ na foster care na ndị ntorobịa nọ na mmemme ọzụzụ ọrụ. Ụfọdụ bụ ndị mbụ n'ezinụlọ ha ga-arụ ọrụ n'ebe ọrụ US.",
    startingPoint: "Ha nwere ike iji ekwentị ma dejupụta fọm ndị dị mfe. Ọtụtụ ahụbeghị paystub, Form W-4 ma ọ bụ akwụkwọ ikike ọrụ, ha amaghịkwa iwu ọrụ ụmụaka ma ọ bụ ikike ha n'ebe ọrụ.",
    gap: "A na-ahazikarị ndị ọrụ na-eto eto ka ha rụọ awa ma ọ bụ ọrụ iwu na-ekweghị maka afọ ha, ha amaghị akwụkwọ ha chọrọ, ha enweghị ike ịmata ma ụgwọ ha ziri ezi, ha na-atụkwa egwu ikwu okwu gbasara nchekwa. Ịmara iwu na omume ndị isi na-atụ anya na-enyere ha aka inweta ọrụ, idebe ọrụ ahụ ma nọrọ na nchekwa.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 6 ruo 8)",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ụlọ akwụkwọ ma ọ bụ ọba akwụkwọ; akwụkwọ na mkpịsị ode zuru maka ọrụ ọ bụla",
      "Oge: nkuzi nkeji 4 ruo 6",
      "Iwu dị iche site na steeti ruo steeti; iwu federal na-esetịpụ ala, iwu siri ike karịa na-arụ ọrụ, ya mere nkuzi ọ bụla na-egosi peeji gọọmentị",
      "Nzuzo: a naghị ekesa ezi nọmba Social Security, ozi ụlọ akụ ma ọ bụ ezi paystub na klas; omume na-eji nọmba e mepụtara emepụta"
    ],
    prerequisites: "Ọ dịghị. Ndị na-achọ enyemaka na résumé na ajụjụ ọnụ ọrụ (interview) nwekwara ike iwere \"Resumes, LinkedIn and Interviews\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị afọ gị na ọrụ e nyere gị nwere usoro oge", action: "ịlele ma ọrụ ndị ahụ na awa ndị ahụ kwekọrọ n'iwu maka afọ gị n'okpuru iwu federal na iwu steeti", standard: "na-akpọ aha peeji gọọmentị i jiri" },
    { id: "O2", condition: "Maka ọrụ dị na steeti gị", action: "idepụta akwụkwọ ị chọrọ iji malite ọrụ na ebe ị ga-enweta nke ọ bụla", standard: "gụnyere akwụkwọ ikike ọrụ ma ọ bụrụ na steeti gị chọrọ ya, akwụkwọ njirimara maka Form I-9 na Form W-4" },
    { id: "O3", condition: "Mgbe e nyere gị paystub na ndekọ awa nke gị", action: "ịchọta gross pay, mwepụ ọ bụla na net pay, ma tụnyere ha na awa gị", standard: "ya na mgbakọ ziri ezi ruo na cent" },
    { id: "O4", condition: "Mgbe e nyere gị ọnọdụ n'ebe ọrụ n'izu mbụ gị", action: "ịhọrọ na ịkọwa omume ọkachamara onye isi na-atụ anya", standard: "na-enweta opekata mpe 4 n'ime ọnọdụ 5 ziri ezi" },
    { id: "O5", condition: "Mgbe e nyere gị ọnọdụ adịghị mma ma ọ bụ ezighi ezi n'ebe ọrụ", action: "ịkọwa nzọụkwụ maka ikwu okwu na ịkọ ya", standard: "na-akpọ aha onye ị ga-ebu ụzọ gwa na ụlọ ọrụ gọọmentị ị ga-akpọ ma ọ bụrụ na edozighị ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkwadebe ịrụ ọrụ",
      lessons: [
        {
          title: "Ọrụ na awa kwekọrọ n'iwu maka afọ gị",
          objectives: ["O1"],
          minutes: 6,
          goal: "Lelee ma ọrụ na awa nke otu ọrụ kwekọrọ n'iwu maka afọ gị.",
          text: [
            "Na US, iwu federal (iwu mba niile) gbasara ọrụ ụmụaka bụ Fair Labor Standards Act (FLSA). Steeti nwekwara iwu ọrụ ụmụaka nke ha. Mgbe iwu abụọ ahụ dị iche, iwu siri ike karịa bụ nke a na-agbaso.",
            "N'okpuru iwu federal maka ọtụtụ ọrụ na-abụghị ọrụ ugbo: ọ bụrụ na ị karịbeghị afọ 14, ị gaghị arụ ọrụ n'ozuzu (e nwere obere ndị a na-ahapụ na peeji gọọmentị). Mgbe ị dị afọ 14 na 15, ị nwere ike ịrụ ọrụ mgbe ụlọ akwụkwọ anaghị aga, ma naanị ruo awa 3 n'ụbọchị ụlọ akwụkwọ (Fraịdee kwa), awa 18 n'izu ụlọ akwụkwọ, awa 8 n'ụbọchị na-abụghị ụbọchị ụlọ akwụkwọ na awa 40 n'izu na-enweghị ụlọ akwụkwọ, ma naanị n'etiti elekere 7 nke ụtụtụ na elekere 7 nke mgbede. Site na June 1 ruo Labor Day, oke mgbede na-aga elekere 9 nke abalị.",
            "Mgbe ị dị afọ 16 na 17, iwu federal anaghị egbochi awa gị, ma ị gaghị arụ ọrụ Department of Labor kpọrọ ọrụ dị egwu (hazardous). Ọmụmaatụ: ịnya ụgbọala n'okporo ụzọ ọha dị ka akụkụ nke ọrụ (ndị dị afọ 17 nwere obere ihe a hapụrụ), ịnya forklift ma ọ bụ igwe ọzọ na-ebuli ihe nke ike eletrik na-akwọ, na ọtụtụ igwe ọrụ osisi nke ike eletrik na-akwọ. Steeti gị nwere ike ịgbakwunye oke ndị ọzọ.",
            "Ọ bụrụ na ị karịbeghị afọ 18 ma usoro oge ma ọ bụ ọrụ dị ka ọ megidere iwu ndị a, ọ bụghị gị nọ na nsogbu: iwu ndị a dị iji chebe gị, onye were gị n'ọrụ bụ onye ga-agbaso ha."
          ],
          steps: ["Dee afọ gị, ọrụ ndị ahụ na awa ọrụ ahụ.", "Gụọ iwu federal na YouthRules ma ọ bụ Fact Sheet 43 nke Department of Labor.", "Mepee peeji ọrụ ụmụaka nke steeti gị (Department of Labor depụtara steeti niile).", "Jiri iwu siri ike karịa. Gbaa okirikiri gburugburu awa ma ọ bụ ọrụ ọ bụla a na-anabataghị."],
          words: [["FLSA", "Fair Labor Standards Act, iwu federal gbasara ụgwọ ọrụ kacha nta, ọrụ karịrị awa (overtime) na ọrụ ụmụaka."], ["Iwu ọrụ ụmụaka (child labor law)", "iwu gbasara ọrụ na awa a na-ekwe ka ndị ọrụ na-erubeghị afọ 18 rụọ."], ["Ọrụ dị egwu (hazardous job)", "ọrụ Department of Labor kwuru na ọ dị egwu nke ukwuu maka ndị ọrụ na-erubeghị afọ 18, dị ka ịnya ụgbọala ma ọ bụ ịnya forklift."], ["Izu ụlọ akwụkwọ", "izu ụlọ akwụkwọ na-aga opekata mpe otu ụbọchị."]],
          slides: [
            { title: "Ụdị iwu abụọ", bullets: ["Iwu federal (FLSA) na iwu steeti gị", "Mgbe ha dị iche, iwu siri ike karịa na-arụ ọrụ"] },
            { title: "Afọ 14 na 15 (federal)", bullets: ["Awa 3 n'ụbọchị ụlọ akwụkwọ, awa 18 n'izu ụlọ akwụkwọ", "Awa 8 n'ụbọchị na-enweghị ụlọ akwụkwọ, 40 n'izu na-enweghị ụlọ akwụkwọ", "Elekere 7 ụtụtụ ruo 7 mgbede; 9 abalị site na June 1 ruo Labor Day"] },
            { title: "Afọ 16 na 17 (federal)", bullets: ["Iwu federal anaghị egbochi awa", "Enweghị ọrụ dị egwu: ịnya ụgbọala, forklift, ọtụtụ igwe eletrik", "Steeti gị nwere ike ịgbakwunye oke"] },
            { title: "Otu esi elele", bullets: ["Dee afọ gị, ọrụ na awa", "Gụọ YouthRules na peeji steeti gị", "Gbaa okirikiri gburugburu ihe a na-anabataghị"] }
          ],
          sources: [SRC.youthRules, SRC.fs43, SRC.stateChildLabor],
          tryIt: "E nyere onye dị afọ 15 ọrụ n'ụlọ ahịa nri na Tuzdee na Tọzdee site n'elekere 4 ruo 8 nke mgbede n'ọnwa October, na Satọdee site n'elekere 9 nke ụtụtụ ruo elekere 3 nke ehihie. N'akwụkwọ, lelee oge ọrụ ọ bụla n'iwu federal. Mgbe ahụ mepee peeji ọrụ ụmụaka nke steeti gị ma dee otu iwu ọ gbakwunyere.",
          youCanNow: "ịlele ma ọrụ na awa nke otu ọrụ kwekọrọ n'iwu maka afọ gị, site n'iji iwu federal na peeji steeti gị.",
          quickCheck: [
            { objective: "O1", q: "Ị dị afọ 15. Ọ bụ ọnwa October. Onye isi gị hazitere gị ịrụ ọrụ ruo elekere 8 nke mgbede n'abalị tupu ụbọchị ụlọ akwụkwọ. Gịnị bụ eziokwu n'okpuru iwu federal?", options: ["Ọ dị mma n'ihi na ọ erughị awa 3", "Ọ dị oke n'abalị: ndị dị afọ 14 na 15 na-akwụsị n'elekere 7 nke mgbede ma ọ bụghị oge okpomọkụ", "Ọ dị mma ma ọ bụrụ na nne na nna gị kwere", "Ọ bụ naanị steeti nwere ike ikpebi"], answer: 1, why: "Ma ọ bụghị site na June 1 ruo Labor Day, ndị dị afọ 14 na 15 nwere ike ịrụ ọrụ naanị n'etiti elekere 7 nke ụtụtụ na elekere 7 nke mgbede." },
            { objective: "O1", q: "Iwu steeti gị siri ike karịa iwu federal. Kedu nke ị ga-agbaso?", options: ["Iwu federal, mgbe niile", "Nke ọ bụla onye isi gị họọrọ", "Ọ dịghị nke ọ bụla; ha na-akagbu onwe ha", "Iwu steeti siri ike karịa"], answer: 3, why: "Mgbe iwu ọrụ ụmụaka nke federal na nke steeti dị iche, iwu siri ike karịa na-arụ ọrụ." }
          ]
        },
        {
          title: "Akwụkwọ ikike ọrụ na akwụkwọ ụbọchị mbụ",
          objectives: ["O2"],
          minutes: 5,
          goal: "Depụta akwụkwọ ị chọrọ iji malite ọrụ gị na ebe ị ga-enweta nke ọ bụla.",
          text: [
            "Iwu federal anaghị achọ akwụkwọ ikike ọrụ (work permit), ma ọtụtụ steeti na-achọ ya maka ndị ọrụ na-erubeghị afọ 18. A na-akpọkwa ya working papers ma ọ bụ employment certificate. Dabere na steeti, ị nwere ike inweta ya n'ụlọ akwụkwọ gị, n'ọfịs ọrụ nke steeti ma ọ bụ n'ịntanetị, ọ nwekwara ike ịchọ mbinye aka nne ma ọ bụ nna. Lelee peeji steeti gị ka ị mara ma ị chọrọ ya na otu esi enweta ya.",
            "N'ụbọchị mbụ gị ma ọ bụ tupu ya, onye were gị n'ọrụ ọ bụla na US ga-eme ka i dejupụta Form I-9. Ọ na-egosi na a na-ekwe ka ị rụọ ọrụ na US. Ị na-egosi akwụkwọ njirimara mbụ (original) site na ndepụta dị na fọm ahụ, dịka ọmụmaatụ paspọtụ US, ma ọ bụ kaadị njirimara ụlọ akwụkwọ ma ọ bụ nke steeti ya na kaadị Social Security ma ọ bụ akwụkwọ ọmụmụ.",
            "Ị na-edejupụtakwa Form W-4. Ọ na-agwa onye were gị n'ọrụ ego ụtụ isi federal (federal income tax) ole ọ ga-ewepụ na paycheck ọ bụla. Steeti gị nwekwara ike inwe fọm ụtụ isi nke ya. Jụọ onye isi gị ma ọ bụ nne ma ọ bụ nna gị ma ọ bụrụ na ajụjụ ọ bụla mgbagwojuru gị anya.",
            "Chebe ya: nye nọmba Social Security gị naanị n'ezi akwụkwọ mbanye n'ọrụ, mgbe e werechara gị n'ọrụ. Ezi onye were mmadụ n'ọrụ anaghị arịọ gị ka ị kwụọ ego iji nweta ọrụ ma ọ bụ ka ị zụta gift card. Nke ahụ bụ aghụghọ."
          ],
          steps: ["Lelee peeji ọrụ ụmụaka nke steeti gị: ị chọrọ akwụkwọ ikike ọrụ? Onye na-enye ya?", "Chọta akwụkwọ njirimara mbụ gị maka Form I-9 (lee ndepụta dị na fọm ahụ).", "Gụọ Form W-4 tupu ụbọchị mbụ gị ka ị mara ihe ọ na-ajụ.", "Tinye mbipụta akwụkwọ gị n'otu folda. Debe nke mbụ n'ụlọ n'ebe dị nchebe."],
          words: [["Akwụkwọ ikike ọrụ (work permit)", "akwụkwọ ụfọdụ steeti na-achọ tupu onye na-erubeghị afọ 18 arụọ ọrụ; a na-akpọkwa ya working papers ma ọ bụ employment certificate."], ["Form I-9", "fọm federal na-egosi na a na-ekwe ka ị rụọ ọrụ na US; ị na-egosi akwụkwọ njirimara maka ya."], ["Form W-4", "fọm federal na-agwa onye were gị n'ọrụ ego ụtụ isi ole ọ ga-ewepụ n'ụgwọ gị."], ["Akwụkwọ mbụ (original)", "ezigbo akwụkwọ ma ọ bụ kaadị ahụ, ọ bụghị foto ma ọ bụ mbipụta."]],
          slides: [
            { title: "Akwụkwọ ikike ọrụ", bullets: ["Iwu federal anaghị achọ ya", "Ọtụtụ steeti na-achọ ya maka ndị na-erubeghị afọ 18", "Peeji steeti gị na-ekwu onye na-enye ya"] },
            { title: "Form I-9", bullets: ["Na-egosi na ị nwere ike ịrụ ọrụ na US", "Bute akwụkwọ njirimara mbụ site na ndepụta fọm ahụ"] },
            { title: "Form W-4", bullets: ["Na-agwa onye were gị n'ọrụ ụtụ isi ole ọ ga-ewepụ", "Steeti gị nwere ike inwe fọm nke ya"] },
            { title: "Nọrọ na nchekwa", bullets: ["Kesaa nọmba Social Security gị naanị n'ezi akwụkwọ mbanye n'ọrụ", "Ejila mgbe ọ bụla kwụọ ego iji nweta ọrụ"] }
          ],
          sources: [SRC.fs43, SRC.stateChildLabor, SRC.i9, SRC.w4, SRC.ftcJobScams],
          tryIt: "Mee ndepụta \"Akwụkwọ Ụbọchị Mbụ\" n'akwụkwọ. Maka steeti gị, dee: m chọrọ akwụkwọ ikike ọrụ, ebee ka m ga-enweta ya? Kedu akwụkwọ njirimara abụọ m ga-ebute maka Form I-9? Onye nwere ike inyere m aka na Form W-4?",
          youCanNow: "idepụta akwụkwọ ị chọrọ iji malite ọrụ, ebe ị ga-enweta nke ọ bụla, na otu esi echebe nọmba nzuzo gị.",
          quickCheck: [
            { objective: "O2", q: "Kedu fọm na-egosi onye were gị n'ọrụ na a na-ekwe ka ị rụọ ọrụ na US?", options: ["Form I-9", "Form W-4", "Akwụkwọ akara ule (report card)", "Paystub"], answer: 0, why: "Form I-9 na-elele na a na-ekwe ka ị rụọ ọrụ na US; ị na-egosi akwụkwọ njirimara mbụ maka ya." },
            { objective: "O2", q: "Mmadụ na-enye gị ọrụ ma ọ bụrụ na i bu ụzọ kwụọ $50 maka \"ihe ọzụzụ\". Gịnị ka nke a nwere ike ịbụ?", options: ["Ụgwọ nkịtị nke ụbọchị mbụ", "Ụgwọ Form W-4", "Aghụghọ: ezi ndị were mmadụ n'ọrụ anaghị ana gị ego iji nweta ọrụ", "Ụgwọ akwụkwọ ikike ọrụ nke steeti gị"], answer: 2, why: "Ịrịọ gị ka ị kwụọ ego iji nweta ọrụ bụ ihe ịrịba ama aghụghọ ọrụ a na-ahụkarị." }
          ]
        },
        {
          title: "Ihe ndị isi na-atụ anya n'izu mbụ gị",
          objectives: ["O4"],
          minutes: 5,
          goal: "Họrọ omume ọkachamara onye isi na-atụ anya n'ọnọdụ a na-ahụkarị n'ọrụ mbụ.",
          text: [
            "Ọtụtụ ndị isi ọrụ mbụ anaghị elekwasị anya na ahụmahụ, kama na omume: ịbịa n'oge, ịdị njikere ịrụ ọrụ, ịgbaso ntuziaka, inwe nkwanye ugwu n'ebe ndị ahịa na ndị ọrụ ibe gị nọ, na ịgwa ha n'oge mgbe ihe mere.",
            "Ịbịa n'oge pụtara ịdị njikere ịrụ ọrụ mgbe oge ọrụ gị (shift) malitere, ọ bụghị naanị ịbanye n'ọnụ ụzọ. Ọ bụrụ na ị na-arịa ọrịa ma ọ bụ na ị ga-abịa n'azụ oge, gwa onye isi gị ozugbo i nwere ike, n'ụzọ ebe ọrụ gị chọrọ (ọtụtụ mgbe oku, ọ bụghị naanị ozi ederede). Ahapụla shift n'ekwughị ihe ọ bụla.",
            "Debe ekwentị gị mgbe ị na-arụ ọrụ belụsọ na ọrụ gị kwere. Mgbe ị maghị otu esi eme ihe, jụọ. Kwughachi ntuziaka ka ị hụ na ị ghọtara. Nara ndụmọdụ (feedback) nwayọọ ma kelee ha; ọ pụtara na onye isi gị chọrọ ka i mee nke ọma.",
            "Gụọ usoro oge ọrụ gị kwa izu, ma rịọ maka ezumike n'oge. Ịbụ onye a pụrụ ịtụkwasị obi bụ ihe na-enweta gị awa ndị ọzọ, ezigbo onye ga-agba akaebe maka gị na ọrụ gị ọzọ."
          ],
          steps: ["Bịa nkeji ole na ole tupu oge, dị njikere ịrụ ọrụ.", "Ọ bụrụ na ị ga-abịa n'azụ oge ma ọ bụ na-arịa ọrịa, gwa onye isi gị ozugbo i nwere ike, n'ụzọ ha chọrọ.", "Debe ekwentị gị belụsọ na ọrụ ahụ kwere.", "Jụọ mgbe o doghị gị anya; kwughachi ntuziaka.", "Nara ndụmọdụ nwayọọ ma jiri ya."],
          words: [["Shift", "oge e hazitere gị ịrụ ọrụ."], ["Call out", "ịgwa onye isi gị tupu oge na ị gaghị abịa shift."], ["Onye akaebe (reference)", "mmadụ, ọtụtụ mgbe onye isi gị mbụ, na-agwa onye ọhụrụ ga-ewe gị n'ọrụ ụdị onye ọrụ ị bụ."], ["Ndụmọdụ (feedback)", "okwu gbasara otu ị na-eme na otu i ga-esi mee nke ka mma."]],
          slides: [
            { title: "Omume ndị isi na-achọ", bullets: ["Ịbịa n'oge ma dị njikere ịrụ ọrụ", "Ịgbaso ntuziaka", "Nkwanye ugwu n'ebe ndị ahịa na ndị ọrụ ibe nọ"] },
            { title: "Ị ga-abịa n'azụ oge ma ọ bụ na-arịa ọrịa?", bullets: ["Gwa onye isi gị ozugbo i nwere ike", "Jiri ụzọ ebe ọrụ gị chọrọ", "Ahapụla shift n'ekwughị ihe"] },
            { title: "N'ọrụ", bullets: ["Debe ekwentị belụsọ ma a kwere", "Jụọ mgbe o doghị gị anya; kwughachi ntuziaka", "Nara ndụmọdụ nwayọọ"] },
            { title: "Ihe mere o ji dị mkpa", bullets: ["Awa ndị ọzọ", "Ezigbo onye akaebe", "Ọrụ gị ọzọ"] }
          ],
          tryIt: "Dee ihe ị ga-ekwu n'ọnọdụ abụọ: (1) i tetara na-arịa ọrịa awa abụọ tupu shift gị; (2) onye njikwa gị gwara gị na i dobeghị ihe n'ebe nchekwa ahịa (shelf) nke ọma. Kwuo ha abụọ n'olu dị elu dị ka ị na-agwa onye isi gị okwu.",
          youCanNow: "ịhọrọ na ịkọwa ihe onye isi na-atụ anya mgbe ị ga-abịa n'azụ oge ma ọ bụ na-arịa ọrịa, mgbe ị maghị ihe ị ga-eme, ma ọ bụ mgbe ị na-anata ndụmọdụ.",
          quickCheck: [
            { objective: "O4", q: "Shift gị na-amalite n'elekere 4 nke mgbede. Gịnị ka \"n'oge\" pụtara?", options: ["Ịbanye n'ọnụ ụzọ n'elekere 4:00", "Ịbịa tupu elekere 4:15", "Ịdị njikere ịrụ ọrụ n'elekere 4:00, ya bụ ịbịa nkeji ole na ole tupu oge", "Oge ọ bụla tupu ezumike gị"], answer: 2, why: "Ịbịa n'oge pụtara ịdị njikere ịmalite ọrụ mgbe shift malitere." },
            { objective: "O4", q: "Ị maghị nke ọma otu esi eji igwe ego (cash register). Gịnị kacha mma ime?", options: ["Kọọ ma tụọ anya na ọ ga-arụ ọrụ", "Chere ruo mgbe onye ahịa mere mkpesa", "Chọọ ya n'ekwentị gị n'oge shift", "Rịọ onye nlekọta gị ka o gosi gị, wee kwughachi ya"], answer: 3, why: "Ịjụ na ịkwughachi ntuziaka na-egosi na ị na-eche maka ọrụ ma na-egbochi mperi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkwadebe ịrụ ọrụ",
        questions: [
          { objective: "O1", q: "Ị dị afọ 14. Ọ bụ izu ụlọ akwụkwọ. Awa ole n'ozuzu ka ị nwere ike ịrụ n'izu ahụ n'okpuru iwu federal?", options: ["18", "40", "Enweghị oke", "8"], answer: 0, why: "Iwu federal na-ekwe ka ndị dị afọ 14 na 15 rụọ ọrụ ruo awa 18 n'izu ụlọ akwụkwọ na-aga." },
          { objective: "O1", q: "Ị dị afọ 16. Onye isi gị gwara gị ka ị nya vanị ụlọ ahịa ahụ ka i bugara ndị mmadụ ihe ha zụrụ. Gịnị bụ eziokwu n'okpuru iwu federal?", options: ["Onye ọ bụla nwere akwụkwọ ikike ịnya ụgbọala nwere ike ime ya", "Ịnya ụgbọala n'okporo ụzọ ọha dị ka akụkụ nke ọrụ bụ ọrụ dị egwu a machibidoro ndị na-erubeghị afọ 17, naanị obere ihe a hapụrụ n'afọ 17", "Ọ dị mma na ngwụsị izu", "Ọ dị mma ma ọ bụrụ na a kwụ gị ụgwọ karịa"], answer: 1, why: "Iwu federal gbasara ọrụ dị egwu machibidoro ịnya ụgbọala n'ọrụ maka ndị na-erubeghị afọ 17, ọ na-ekwekwa naanị obere ịnya ụgbọala n'afọ 17." },
          { objective: "O2", q: "Iwu federal ọ na-achọ akwụkwọ ikike ọrụ maka onye dị afọ 15?", options: ["Ee, mgbe niile", "Naanị n'oge okpomọkụ", "Mba, ma ọtụtụ steeti na-achọ ya, ya mere lelee peeji steeti gị", "Naanị maka ọrụ ụlọ nri"], answer: 2, why: "Iwu federal anaghị achọ akwụkwọ ikike ọrụ, ma ọtụtụ steeti na-achọ ya." },
          { objective: "O2", q: "Gịnị ka Form W-4 na-eme?", options: ["Na-egosi na a na-ekwe ka ị rụọ ọrụ na US", "Na-enye gị akwụkwọ ikike ọrụ", "Na-edepụta awa gị", "Na-agwa onye were gị n'ọrụ ụtụ isi federal ole ọ ga-ewepụ"], answer: 3, why: "Form W-4 na-esetịpụ ụtụ isi federal ole a ga-ewepụ n'ụgwọ gị." },
          { objective: "O4", q: "Ị ga-abịa nkeji 20 n'azụ oge n'ihi na ụgbọ ala bọs mebiri. Gịnị ka ị ga-eme?", options: ["Gwa onye isi gị ozugbo, n'ụzọ ebe ọrụ gị chọrọ", "Ekwula ihe ọ bụla, bịa n'azụ oge", "Ahapụ shift ahụ", "Dee ya n'ịntanetị"], answer: 0, why: "Ịgwa onye isi gị n'oge, n'ụzọ ha chọrọ, na-egosi na ị bụ onye a pụrụ ịtụkwasị obi." }
        ]
      }
    },
    {
      name: "Isi 2: Ụgwọ gị, ikike gị na nchekwa gị",
      lessons: [
        {
          title: "Ịgụ paystub mbụ gị",
          objectives: ["O3"],
          minutes: 6,
          goal: "Chọta gross pay, mwepụ ọ bụla na net pay na paystub.",
          text: [
            "Paystub (ma ọ bụ akwụkwọ nkọwa ụgwọ) na-eso paycheck ọ bụla ma ọ bụ ego e zigara n'akaụntụ gị (direct deposit). Ọ na-egosi oge ụgwọ (pay period), awa gị, ọnụ ego kwa awa gị, gross pay gị, mwepụ ọ bụla na net pay gị.",
            "Gross pay bụ awa mụbaa ọnụ ego kwa awa gị, tupu e wepụ ihe ọ bụla. Mwepụ (deductions) bụ ego e wepụrụ. Ndị a na-ahụkarị: ụtụ isi federal (dabere na Form W-4 gị), Social Security (6.2 pasent nke ụgwọ gị) na Medicare (1.45 pasent), a na-egosikarị ha ọnụ dị ka FICA, na n'ọtụtụ steeti ụtụ isi steeti. Net pay, ma ọ bụ ego ị na-eburu laa, bụ ihe fọdụrụ.",
            "Naanị maka omume, nọmba e mepụtara emepụta: awa 20 na $12.00 kwa awa = $240.00 gross. Social Security: 240 x 0.062 = $14.88. Medicare: 240 x 0.0145 = $3.48. Ụtụ isi federal: $6.00. Ụtụ steeti: $3.00. Mwepụ niile bụ $27.36, ya mere net pay = $240.00 - $27.36 = $212.64.",
            "Ụgwọ ọrụ kacha nta nke federal bụ $7.25 kwa awa. Ọtụtụ steeti na obodo na-esetịpụ nke dị elu karịa, nke dị elu karịa bụ nke na-arụ ọrụ maka gị. Lelee peeji steeti gị ka ị mara na ọnụ ego gị kwekọrọ n'iwu."
          ],
          steps: ["Chọta ụbọchị oge ụgwọ na awa gị.", "Lelee gross pay: awa x ọnụ ego.", "Depụta mwepụ ọ bụla ma gbakọta ha.", "Lelee net pay: gross pay wepụ mwepụ niile.", "Ọ bụrụ na ihe adabaghị, jụọ payroll ma ọ bụ onye isi gị nke ọma."],
          words: [["Gross pay", "ụgwọ gị tupu e wepụ ihe ọ bụla: awa x ọnụ ego."], ["Mwepụ (deduction)", "ego e wepụrụ n'ụgwọ gị, dị ka ụtụ isi."], ["Net pay", "ego ị na-eburu laa: gross pay wepụ mwepụ."], ["FICA", "ụtụ Social Security na Medicare a na-ewepụ n'ụgwọ gị."], ["Oge ụgwọ (pay period)", "ụbọchị ọrụ paycheck na-akwụ ụgwọ ya."]],
          slides: [
            { title: "Ihe dị na paystub", bullets: ["Oge ụgwọ, awa na ọnụ ego kwa awa", "Gross pay na mwepụ ọ bụla", "Net pay (ego ị na-eburu laa)"] },
            { title: "Mwepụ a na-ahụkarị", bullets: ["Ụtụ isi federal (site na W-4 gị)", "Social Security 6.2% na Medicare 1.45% (FICA)", "Ụtụ isi steeti n'ọtụtụ steeti"] },
            { title: "Omume: nọmba e mepụtara emepụta", bullets: ["Awa 20 x $12.00 = $240.00 gross", "Mwepụ: $14.88 + $3.48 + $6.00 + $3.00 = $27.36", "Net pay: $240.00 - $27.36 = $212.64"] },
            { title: "Ụgwọ ọrụ kacha nta", bullets: ["Federal: $7.25 kwa awa", "Ọtụtụ steeti na obodo na-akwụ karịa; nke dị elu karịa na-arụ ọrụ"] }
          ],
          sources: [SRC.irs751, SRC.minWage, SRC.stateMinWage, SRC.w4],
          tryIt: "Naanị maka omume: i rụrụ ọrụ awa 15 na $13.00 kwa awa. Ụtụ isi federal bụ $5.00, ụtụ steeti bụ $2.00. N'akwụkwọ, gbakọọ gross pay, Social Security, Medicare, mwepụ niile na net pay. (Azịza: $195.00 gross, $12.09, $2.83, $21.92 niile, $173.08 net.)",
          youCanNow: "ịgụ paystub, ịchọta gross pay, mwepụ ọ bụla na net pay, na ịlele mgbakọ ahụ.",
          quickCheck: [
            { objective: "O3", q: "I rụrụ ọrụ awa 10 na $14.00 kwa awa. Gịnị bụ gross pay gị?", options: ["$14.00", "$124.00", "$104.00", "$140.00"], answer: 3, why: "Gross pay bụ awa mụbaa ọnụ ego: 10 x $14.00 = $140.00." },
            { objective: "O3", q: "Gross pay bụ $300.00, mwepụ niile bụ $35.00. Gịnị bụ net pay?", options: ["$265.00", "$335.00", "$300.00", "$35.00"], answer: 0, why: "Net pay bụ gross pay wepụ mwepụ: $300.00 - $35.00 = $265.00." }
          ]
        },
        {
          title: "Idebe ndekọ awa gị ka ụgwọ gị zie ezi",
          objectives: ["O3"],
          minutes: 5,
          goal: "Debe ndekọ awa nke gị ma tụnyere ya na paystub gị.",
          text: [
            "Mperi na-eme n'ụgwọ. Nchekwa kacha mma bụ ndekọ nke gị. Na shift ọ bụla, dee ụbọchị, oge i bidoro, mgbe ezumike gị malitere na mgbe ọ kwụsịrị, na oge i mechara. Department of Labor nwere app timesheet n'efu, ma ọ bụ ị nwere ike iji akwụkwọ ndetu ma ọ bụ ndetu dị n'ekwentị gị.",
            "Gbakọta awa maka oge ụgwọ ahụ. Cheta iwepụ ezumike nri a na-anaghị akwụ ụgwọ ya. Mgbe ahụ tụnyere ngụkọta gị na awa dị na paystub gị.",
            "Ọ bụrụ na nọmba ndị ahụ adabaghị, atụla egwu, ebokwala mmadụ ebubo. Bute ndekọ gị n'ebe onye isi gị ma ọ bụ payroll nọ ma jụọ: \"Ndetu m na-egosi awa 22, paystub m na-egosi 19. Ị nwere ike inyere m aka ilele ya?\" A na-edozi ọtụtụ mperi n'ụzọ a.",
            "Ọ bụrụ na a kwụghị gị ụgwọ awa i rụrụ ma edozighị ya, Wage and Hour Division nke Department of Labor na-anabata mkpesa. Ọ bụ n'efu, ọ bụkwa nzuzo."
          ],
          steps: ["Na shift ọ bụla: dee ụbọchị, oge mmalite, oge ezumike na oge njedebe.", "Na njedebe oge ụgwọ, gbakọta awa gị (wepụ ezumike a na-akwụghị ụgwọ).", "Tụnyere ngụkọta gị na awa dị na paystub gị.", "Ọ bụrụ na ha dị iche, bute ndekọ gị ma jụọ nke ọma ka e lelee ya.", "Ọ bụrụ na edozighị ya, kpọtụrụ Wage and Hour Division."],
          words: [["Timesheet", "ndekọ ụbọchị na awa i rụrụ ọrụ."], ["Ezumike a na-akwụghị ụgwọ", "ezumike nri mgbe ị kwụsịrị ọrụ kpamkpam, a naghị akwụ gị ụgwọ ya."], ["Payroll", "onye ma ọ bụ otu na-akwụ ndị ọrụ ụgwọ."], ["Wage and Hour Division", "akụkụ US Department of Labor na-eme ka a gbasoo iwu ụgwọ na iwu ọrụ ụmụaka."]],
          slides: [
            { title: "Debe ndekọ nke gị", bullets: ["Ụbọchị, oge mmalite, ezumike na njedebe", "Akwụkwọ ndetu, ndetu ekwentị ma ọ bụ app timesheet DOL n'efu"] },
            { title: "Tụnyere ya n'oge ụgwọ ọ bụla", bullets: ["Gbakọta awa gị, wepụ ezumike a na-akwụghị ụgwọ", "Tụnyere ya na paystub"] },
            { title: "Ọ bụrụ na ọ dabaghị", bullets: ["Bute ndekọ gị ma jụọ nke ọma", "\"Ị nwere ike inyere m aka ilele ya?\""] },
            { title: "Edozibeghị ya?", bullets: ["Wage and Hour Division: n'efu na nzuzo", "1-866-487-9243 (1-866-4-US-WAGE)"] }
          ],
          sources: [SRC.youthRules, SRC.childLabor],
          tryIt: "Naanị maka omume: Mọnde 3:30 ruo 7:00 mgbede, Wenezdee 3:30 ruo 7:00 mgbede, Satọdee 9:00 ụtụtụ ruo 3:00 ehihie ya na ezumike nri nkeji 30 a na-akwụghị ụgwọ. Gbakọta awa ndị ahụ. Paystub gị kwuru awa 11. Dee ihe ị ga-agwa onye isi gị. (Azịza: 3.5 + 3.5 + 5.5 = awa 12.5.)",
          youCanNow: "idebe ndekọ awa gị, ịtụnyere ya na paystub gị, na ịjụ nke ọma ka e dozie mperi.",
          quickCheck: [
            { objective: "O3", q: "I rụrụ ọrụ site n'elekere 9 nke ụtụtụ ruo elekere 2 nke ehihie ya na ezumike nri nkeji 30 a na-akwụghị ụgwọ. Awa ole ka a ga-akwụ gị?", options: ["5", "5.5", "4.5", "4"], answer: 2, why: "Elekere 9 ụtụtụ ruo elekere 2 ehihie bụ awa 5; wepụ ezumike nkeji 30 a na-akwụghị ụgwọ, ọ bụ awa 4.5." },
            { objective: "O3", q: "Ndetu gị na-egosi awa 22, ma paystub gị na-egosi 19. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Kwụsị ọrụ ozugbo", "Bute ndekọ gị n'ebe onye isi gị ma ọ bụ payroll nọ ma jụọ nke ọma ka e lelee ya", "Ekwula ihe ọ bụla", "Dee paystub ahụ n'ịntanetị"], answer: 1, why: "A na-edozi ọtụtụ mperi ụgwọ site n'igosi ndekọ gị na ịjụ nke ọma." }
          ]
        },
        {
          title: "Ikike gị na nchekwa gị: ikwu okwu",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kọwaa nzọụkwụ maka ikwu okwu na ịkọ ọnọdụ adịghị mma ma ọ bụ ezighi ezi.",
          text: [
            "Onye ọrụ ọ bụla, gụnyere ndị ntorobịa, nwere ikike. Onye were gị n'ọrụ ga-enye gị ebe ọrụ dị nchebe ma kwụọ gị opekata mpe ụgwọ ọrụ kacha nta iwu kwadoro maka awa ọ bụla i rụrụ. I kwesịrị inweta ọzụzụ tupu i mee ọrụ, ị nwekwara ike ịjụ ajụjụ. Onye were gị n'ọrụ apụghị ịta gị ahụhụ maka ịjụ gbasara ikike gị ma ọ bụ maka ime mkpesa.",
            "Ndị ọrụ na-eto eto na-emerụkarị ahụ mgbe ha ka bụ ndị ọhụrụ, mgbe a na-eme ka ha mee ngwa ngwa ma ọ bụ mgbe a zụbeghị ha. Ihe ịrịba ama: a gwa gị ka i jiri igwe a zụbeghị gị maka ya, ọrụ a machibidoro maka afọ gị, enweghị ihe nchebe ahụ, ala na-amị amị, mmanụ ọkụ na-ekpo ọkụ, ma ọ bụ ịhapụ gị naanị gị n'abalị.",
            "Nzọụkwụ maka ikwu okwu: kwụsị ma ọ bụrụ na ị nọ n'ihe egwu. Gwa onye nlekọta gị nwayọọ ihe nsogbu ahụ bụ. Ọ bụrụ na ha edozighị ya, gwa onye njikwa ọzọ na nne ma ọ bụ nna, onye nkuzi ma ọ bụ onye ọrụ mmemme ọrụ. Ọ bụrụ na edozibeghị ya, kpọtụrụ gọọmentị: OSHA (1-800-321-6742) maka nchekwa, ma ọ bụ Wage and Hour Division (1-866-487-9243) maka nsogbu ụgwọ, awa ma ọ bụ ọrụ ụmụaka.",
            "Ọ bụrụ na mmadụ merụrụ ahụ nke ukwuu, buru ụzọ kpọọ 911 (ma ọ bụ nọmba ihe mberede nke ebe ị nọ)."
          ],
          steps: ["Ọ bụrụ na ị nọ n'ihe egwu, kwụsị ma pụọ ebe ahụ.", "Gwa onye nlekọta gị nwayọọ ihe na-adịghị mma.", "Ọ bụrụ na edozighị ya, gwa onye njikwa ọzọ na okenye ị tụkwasịrị obi.", "Edozibeghị ya: kpọọ OSHA maka nchekwa ma ọ bụ Wage and Hour Division maka ụgwọ, awa ma ọ bụ ọrụ ụmụaka.", "Ihe mberede: buru ụzọ kpọọ 911."],
          words: [["OSHA", "Occupational Safety and Health Administration, ụlọ ọrụ federal na-ahụ maka nchekwa n'ebe ọrụ."], ["Mmegwara (retaliation)", "ịta onye ọrụ ahụhụ maka ikwu okwu ma ọ bụ ime mkpesa; a naghị ekwe ya."], ["Ihe nchebe ahụ (protective gear)", "ihe dị ka uwe aka, ugogbe anya nchebe ma ọ bụ akpụkpọ ụkwụ na-adịghị amị amị na-echebe gị."]],
          slides: [
            { title: "Ikike gị", bullets: ["Ebe ọrụ dị nchebe", "Opekata mpe ụgwọ ọrụ kacha nta iwu kwadoro maka awa ọ bụla", "Ọzụzụ, ajụjụ, na enweghị ntaramahụhụ maka ikwu okwu"] },
            { title: "Ihe ịrịba ama", bullets: ["Igwe a zụbeghị gị maka ya", "Ọrụ a machibidoro maka afọ gị", "Enweghị ihe nchebe ahụ, mmanụ ọkụ, ala na-amị amị"] },
            { title: "Kwuo okwu n'usoro", bullets: ["Kwụsị ma ọ bụrụ na ị nọ n'ihe egwu", "Gwa onye nlekọta gị, wee gwa onye njikwa ọzọ na okenye ị tụkwasịrị obi", "Edozighị ya: OSHA ma ọ bụ Wage and Hour Division"] },
            { title: "Nọmba ị ga-amara", bullets: ["Ihe mberede: buru ụzọ kpọọ 911", "OSHA: 1-800-321-6742", "Wage and Hour: 1-866-487-9243"] }
          ],
          sources: [SRC.oshaYoung, SRC.youthRules, SRC.fs43],
          tryIt: "Ị dị afọ 16. Onye njikwa gị gwara gị ka i jiri igwe na-egbutu anụ (meat slicer) n'ụlọ ahịa deli, ma a zụbeghị gị. Dee okwu ị ga-agwa onye njikwa gị, na onye ị ga-agwa ọzọ ma ọ bụrụ na ha siri ọnwụ. Chekwaa nọmba OSHA na Wage and Hour n'ekwentị gị.",
          youCanNow: "ịhụ ọnọdụ adịghị mma ma ọ bụ ezighi ezi ma kwuo okwu n'usoro: onye nlekọta gị, okenye ị tụkwasịrị obi, wee ụlọ ọrụ gọọmentị.",
          quickCheck: [
            { objective: "O5", q: "Onye isi gị gwara gị ka i hichaa ite e ji eghe ihe (fryer) nwere mmanụ ọkụ, o nyeghịkwa gị uwe aka ma ọ bụ ọzụzụ. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Gwa onye nlekọta gị nwayọọ na ị chọrọ ọzụzụ na ihe nchebe tupu i mee ya", "Mee ya ngwa ngwa ka ị ghara ịbanye na nsogbu", "Kpọọ 911", "Kwụsị ọrụ n'ekwughị ihe kpatara ya"], answer: 0, why: "Ịgwa onye nlekọta gị bụ nzọụkwụ mbụ a na-emekarị mgbe onweghị onye merụrụ ahụ." },
            { objective: "O5", q: "I gwala ndị njikwa abụọ gbasara nsogbu ụgwọ, ihe ọ bụla agbanweghị. Onye ka ị nwere ike ịkpọtụrụ?", options: ["Ọ dịghị onye; ị ga-anabata ya", "Onye ọbịa n'ịntanetị", "Wage and Hour Division nke US Department of Labor", "Naanị onye nkuzi egwuregwu ụlọ akwụkwọ gị"], answer: 2, why: "Wage and Hour Division na-anabata mkpesa n'efu na na nzuzo gbasara ụgwọ, awa na ọrụ ụmụaka." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ụgwọ gị, ikike gị na nchekwa gị",
        questions: [
          { objective: "O3", q: "Na paystub, gịnị bụ net pay?", options: ["Ụgwọ tupu ụtụ isi", "Ọnụ ego kwa awa gị", "Ego ị na-eburu laa mgbe e wepụchara mwepụ", "Ụtụ isi niile e wepụrụ"], answer: 2, why: "Net pay bụ ihe fọdụrụ mgbe e wepụchara mwepụ niile na gross pay." },
          { objective: "O3", q: "Naanị maka omume: gross pay bụ $200.00. Gịnị bụ mwepụ Social Security na 6.2 pasent?", options: ["$6.20", "$2.90", "$15.30", "$12.40"], answer: 3, why: "$200.00 x 0.062 = $12.40." },
          { objective: "O3", q: "Gịnị mere i ji debe ndekọ awa nke gị?", options: ["Ka i nwee ike ịtụnyere ya na paystub gị ma hụ mperi", "N'ihi na iwu kwuru na ọ bụ naanị gị nwere ike idekọ awa", "Ka i nwee ike ịhapụ ezumike", "Ka ị ghara ịchọ paystub"], answer: 0, why: "Ndekọ nke gị na-enyere gị aka ịlele na a kwụrụ gị ụgwọ awa ọ bụla i rụrụ." },
          { objective: "O5", q: "Ọkụ gbara onye ọrụ ibe gị nke ukwuu. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Mechaa ọrụ gị", "Kpọọ 911 (ma ọ bụ nọmba ihe mberede nke ebe ị nọ)", "Kpọọ OSHA", "Zigara ndị enyi gị ozi"], answer: 1, why: "N'ihe mberede, buru ụzọ kpọọ 911; ịkọrọ ụlọ ọrụ gọọmentị na-abịa ma emechaa." },
          { objective: "O5", q: "Onye were gị n'ọrụ ọ nwere ike ịta gị ahụhụ maka ime mkpesa gbasara nchekwa ma ọ bụ ụgwọ?", options: ["Ee, ma ọ bụrụ na ị karịbeghị afọ 18", "Ee, ma ọ bụrụ na mkpesa ahụ ezighi ezi", "Mba, a naghị ekwe mmegwara maka ikwu okwu", "Naanị n'ọnwa mbụ gị"], answer: 2, why: "Iwu na-echebe ndị ọrụ pụọ na mmegwara maka ịjụ gbasara ikike ha ma ọ bụ ime mkpesa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ọrụ Mbụ Gị: Akwụkwọ Ikike Ọrụ, Ụgwọ Ọrụ na Ihe Ndị Isi Na-atụ Anya",
    questions: [
      { objective: "O1", q: "Ị dị afọ 15, ụlọ akwụkwọ akwụsịla maka oge okpomọkụ n'ọnwa July. Ruo elekere ole n'abalị ka ị nwere ike ịrụ ọrụ n'okpuru iwu federal?", options: ["Elekere 7 mgbede", "Elekere 9 abalị", "Elekere 11 abalị", "Oge ọ bụla"], answer: 1, why: "Site na June 1 ruo Labor Day, oke mgbede maka ndị dị afọ 14 na 15 na-aga elekere 9 nke abalị." },
      { objective: "O2", q: "Kedu akwụkwọ onye ọrụ ọhụrụ ọ bụla na-edejupụta, n'afọ ọ bụla?", options: ["Form I-9 na Form W-4", "Akwụkwọ ikike ọrụ na akwụkwọ akara ule", "Paystub na timesheet", "Ule akwụkwọ ikike ịnya ụgbọala"], answer: 0, why: "Onye ọrụ ọhụrụ ọ bụla na-edejupụta Form I-9 na Form W-4; akwụkwọ ikike ọrụ dabere n'afọ na steeti." },
      { objective: "O3", q: "Naanị maka omume: awa 18 na $12.50 kwa awa. Gịnị bụ gross pay?", options: ["$215.00", "$250.00", "$225.00", "$180.00"], answer: 2, why: "18 x $12.50 = $225.00." },
      { objective: "O4", q: "I tetara na-arịa ọrịa awa abụọ tupu shift gị. Gịnị bụ omume ọkachamara?", options: ["Gaa ọrụ na-arịa ọrịa ma ekwula ihe ọ bụla", "Ahapụ shift ahụ ma kọwaa n'izu na-abịa", "Rịọ enyi gị ka ọ gaa n'ọnọdụ gị n'agwaghị onye ọ bụla", "Gwa onye isi gị ozugbo, n'ụzọ ebe ọrụ gị chọrọ"], answer: 3, why: "Ịgwa onye isi gị n'oge, n'ụzọ ha chọrọ, na-enye ha ohere ịchọta onye ga-anọchi gị ma na-egosi na ị bụ onye a pụrụ ịtụkwasị obi." },
      { objective: "O5", q: "Kedu ụlọ ọrụ gọọmentị na-ahụ maka mkpesa nchekwa n'ebe ọrụ?", options: ["IRS", "OSHA", "Ụlọ ọrụ nzipu akwụkwọ ozi (post office)", "Mpaghara ụlọ akwụkwọ gị"], answer: 1, why: "OSHA bụ ụlọ ọrụ federal na-ahụ maka nchekwa na ahụike n'ebe ọrụ." },
      { objective: "O1", q: "Ị dị afọ 14. N'ụbọchị ụlọ akwụkwọ, awa ole ka ị nwere ike ịrụ n'okpuru iwu federal?", options: ["3", "5", "8", "Enweghị oke"], answer: 0, why: "Ndị dị afọ 14 na 15 nwere ike ịrụ ọrụ ruo awa 3 n'ụbọchị ụlọ akwụkwọ, gụnyere Fraịdee." },
      { objective: "O1", q: "Ị dị afọ 17. Kedu ọrụ a machibidoro gị n'okpuru iwu federal gbasara ọrụ dị egwu?", options: ["Itinye ihe a zụrụ n'akpa", "Ịza ekwentị", "Iji aka dobe ihe n'ebe nchekwa ahịa", "Ịnya forklift"], answer: 3, why: "Ịnya igwe na-ebuli ihe nke ike eletrik na-akwọ dị ka forklift bụ ọrụ dị egwu a machibidoro ndị na-erubeghị afọ 18." },
      { objective: "O2", q: "Ebee ka ị ga-amata ma steeti gị chọrọ akwụkwọ ikike ọrụ?", options: ["Peeji ọrụ ụmụaka gọọmentị nke steeti gị (Department of Labor depụtara ha)", "Ihe e dere na soshal midia", "Weebụsaịtị ọrụ ọ bụla", "Azụ paystub"], answer: 0, why: "Akwụkwọ ikike ọrụ bụ iwu steeti, ya mere peeji gọọmentị nke steeti ahụ bụ ebe a ga-elele." },
      { objective: "O2", q: "Onye isi ọhụrụ zigara gị ozi tupu ajụjụ ọnụ ọ bụla na-arịọ maka ozi mbanye akaụntụ ụlọ akụ gị \"iji hazie ụgwọ\". Gịnị ka nke a bụ?", options: ["Ihe nkịtị maka direct deposit", "Akụkụ nke Form W-4", "Ihe ịrịba ama aghụghọ; ekesala ozi mbanye mgbe ọ bụla", "Akụkụ nke Form I-9"], answer: 2, why: "Ezi ndị were mmadụ n'ọrụ anaghị achọ ozi mbanye ụlọ akụ gị; ịrịọ ya bụ ihe ịrịba ama aghụghọ." },
      { objective: "O3", q: "Kedu mwepụ dabere n'ihe i dere na Form W-4?", options: ["Medicare", "Social Security", "Ọnụ ego kwa awa gị", "Ụtụ isi federal"], answer: 3, why: "Form W-4 na-agwa onye were gị n'ọrụ ụtụ isi federal ole ọ ga-ewepụ." },
      { objective: "O3", q: "Naanị maka omume: gross pay $240.00, mwepụ $27.36. Gịnị bụ net pay?", options: ["$212.64", "$267.36", "$222.64", "$213.64"], answer: 0, why: "$240.00 - $27.36 = $212.64." },
      { objective: "O3", q: "Ụgwọ ọrụ kacha nta nke federal bụ $7.25, ma nke obodo gị dị elu karịa. Kedu nke na-arụ ọrụ maka gị?", options: ["$7.25 nke federal", "Nke ọ bụla onye isi gị họọrọ", "Nke dị elu karịa", "Nke dị ala karịa"], answer: 2, why: "Mgbe ụgwọ ọrụ kacha nta nke steeti ma ọ bụ obodo dị elu karịa nke federal, nke dị elu karịa na-arụ ọrụ." },
      { objective: "O4", q: "Onye njikwa gị kwuru na i dobeghị ihe n'ebe nchekwa ahịa nke ọma. Gịnị bụ azịza kacha mma?", options: ["Rụọ ụka na ọ dị mma", "Kwuo \"Daalụ maka ịgwa m. Ị nwere ike igosi m ụzọ ziri ezi?\"", "Leghara ya anya", "Mee mkpesa nye ndị ahịa"], answer: 1, why: "Ịnara ndụmọdụ nwayọọ na ịjụ otu esi edozi ya bụ ihe ndị isi na-atụ anya." },
      { objective: "O4", q: "Olee mgbe ọ dị mma iji ekwentị gị n'oge shift gị?", options: ["Mgbe ọ bụla ọrụ dị nwayọọ", "Naanị mgbe ọrụ ahụ kwere", "Mgbe ọ bụla ndị ahịa anaghị ele anya", "Oge ọ bụla ma ọ bụrụ na ị ka na-arụ ọrụ"], answer: 1, why: "Debe ekwentị gị mgbe ị na-arụ ọrụ belụsọ na ebe ọrụ gị kwere." },
      { objective: "O4", q: "Ị chọrọ ezumike otu Satọdee maka mmemme ezinụlọ n'ọnwa na-abịa. Gịnị ka ị ga-eme?", options: ["Rịọ onye isi gị n'oge, n'ụzọ ebe ọrụ gị chọrọ", "Abịala naanị", "Gwa naanị onye ọrụ ibe gị", "Jụọ n'abalị tupu ụbọchị ahụ"], answer: 0, why: "Ịrịọ maka ezumike n'oge na-enye onye isi gị oge ime atụmatụ." },
      { objective: "O5", q: "Ị dị afọ 16, a gwakwara gị ka i jiri igwe na-egbutu anụ (meat slicer). Gịnị ka i kwesịrị ịmara?", options: ["Ọ dị mma mgbe i nwalechara ya otu ugboro", "Ọ dị mma ma ọ bụrụ na ndị ahịa ahụghị", "Ọ bụ nhọrọ gị", "Igwe na-egbutu anụ nke ike eletrik na-akwọ bụ ọrụ dị egwu a machibidoro ndị na-erubeghị afọ 18, ya mere kwuo okwu"], answer: 3, why: "Iwu federal gbasara ọrụ dị egwu machibidoro ndị ọrụ na-erubeghị afọ 18 iji igwe na-egbutu anụ nke ike eletrik na-akwọ." },
      { objective: "O5", q: "Gịnị bụ nzọụkwụ mbụ a na-emekarị mgbe ihe adịghị mma n'ebe ọrụ ma onweghị onye merụrụ ahụ?", options: ["Kpọọ ndị akụkọ", "Dee ya n'ịntanetị", "Gwa onye nlekọta gị nwayọọ", "Kwụsị ọrụ n'ekwughị ihe ọ bụla"], answer: 2, why: "Ịgwa onye nlekọta gị na-enye ha ohere idozi ya; mgbe ahụ gaa n'ebe dị elu ma ọ bụrụ na edozighị ya." },
      { objective: "O1", q: "Ị dị afọ 16. Awa ole n'izu ka ị nwere ike ịrụ n'okpuru iwu federal?", options: ["18", "40", "Iwu federal enweghị oke, ma lelee steeti gị", "8"], answer: 2, why: "Iwu federal anaghị egbochi awa n'afọ 16 na 17, ma steeti gị nwere ike." },
      { objective: "O4", q: "Gịnị ka onye isi na-elekwasịkarị anya na onye ọrụ mbụ?", options: ["Uwe dị oke ọnụ", "Ọtụtụ afọ ahụmahụ", "Ịmara onye nwe ụlọ ọrụ ahụ", "Ịbịa n'oge na ịbụ onye a pụrụ ịtụkwasị obi"], answer: 3, why: "Ndị isi ọrụ mbụ na-achọkarị omume a pụrụ ịtụkwasị obi dị ka ịbịa n'oge na ịgbaso ntuziaka." },
      { objective: "O5", q: "Ụgwọ gị ezighi ezi, ndị njikwa abụọ edozighịkwa ya. Kedu nọmba ị nwere ike ịkpọ?", options: ["Wage and Hour Division, 1-866-487-9243", "Naanị OSHA", "911", "IRS"], answer: 0, why: "Wage and Hour Division na-ahụ maka mkpesa gbasara ụgwọ, awa na ọrụ ụmụaka." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 2, 3, 4, 6, 9, 15] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "E lelere awa na ọrụ", objective: "O1", notYet: "E deghị iwu afọ ọ bụla, ma ọ bụ a hụghị shift ma ọ bụ ọrụ megidere iwu.", meets: "E lelere shift na ọrụ ọ bụla n'iwu federal na nke steeti, ma kpọọ aha peeji gọọmentị.", exceeds: "Ọ na-akọkwa iwu steeti siri ike karịa nke federal na otu o si agbanwe usoro oge ahụ." },
      { name: "Akwụkwọ dị njikere", objective: "O2", notYet: "Ndepụta ahụ enweghị Form I-9, Form W-4 ma ọ bụ ajụjụ akwụkwọ ikike ọrụ nke steeti.", meets: "Ọ depụtara akwụkwọ ikike ọrụ (ma ọ dị mkpa), akwụkwọ njirimara maka Form I-9 na Form W-4, na ebe a ga-enweta nke ọ bụla.", exceeds: "Ọ depụtakwara otu esi echebe nọmba nzuzo na otu ihe ịrịba ama aghụghọ ọrụ." },
      { name: "E lelere paystub", objective: "O3", notYet: "Gross pay, mwepụ ma ọ bụ net pay adịghị, ma ọ bụ mgbakọ ahụ ezighi ezi.", meets: "E dere gross pay, mwepụ ọ bụla na net pay, mgbakọ ahụ zikwara ezi ruo na cent.", exceeds: "Ọ na-atụnyekwa awa dị na paystub na timesheet e dere ede ma kwuo ihe a ga-eme ma ọ bụrụ na ha dị iche." },
      { name: "Ihe onye isi na-atụ anya", objective: "O4", notYet: "Omume ndị ahụ edoghị anya, dị ka \"bụrụ ezigbo mmadụ\".", meets: "Omume atọ doro anya, dị ka ịbịa tupu oge, ịkpọ oku n'oge mgbe ị gaghị abịa na ịjụ mgbe o doghị gị anya.", exceeds: "Omume ọ bụla nwere obere okwu onye na-amụ ihe ga-ekwu." },
      { name: "Atụmatụ nchekwa", objective: "O5", notYet: "Enweghị atụmatụ, ma ọ bụ atụmatụ ahụ hapụrụ ịgwa onye nlekọta ma ọ bụ ịkpọ aha ụlọ ọrụ gọọmentị.", meets: "Ọ kpọrọ aha onye a ga-ebu ụzọ gwa, okenye a tụkwasịrị obi, na OSHA ma ọ bụ Wage and Hour Division ya na nọmba ekwentị.", exceeds: "Ọ kwukwara ka e buru ụzọ kpọọ 911 n'ihe mberede ma depụta ihe ịrịba ama maka ọrụ onye na-amụ ihe n'onwe ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe malitere ọrụ, internship ma ọ bụ ọrụ ndị ntorobịa oge okpomọkụ n'ime ụbọchị 90 (nnyocha nsochi ma ọ bụ ndekọ mmemme)",
      "Ndị na-amụ ihe ka nọ n'ọrụ ahụ mgbe ụbọchị 60 gachara, na ole n'ime ha nwetara ezigbo onye akaebe",
      "Ndị na-amụ ihe kwuru na ha lelere paystub n'awa nke ha opekata mpe otu ugboro (nsochi ụbọchị 30)",
      "Mmemme ndị ntorobịa na ndị were mmadụ n'ọrụ na-akọ na nsogbu usoro oge ma ọ bụ ọrụ megidere iwu ọrụ ụmụaka belatara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị iji mepee peeji Department of Labor na nke steeti, ma ọ bụ mbipụta peeji ọrụ ụmụaka nke steeti",
      "Akwụkwọ, mkpịsị ode na kalkuleta (kalkuleta ekwentị dị mma)",
      "Mbipụta Form W-4 na Form I-9 tọgbọrọ chakoo site na irs.gov na uscis.gov ka a lee ha (edejupụtala ezi nọmba na klas)",
      "Paystub ihe atụ e mepụtara emepụta maka omume",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Tupu ihe ọmụmụ ahụ, chọọ peeji ọrụ ụmụaka na ụgwọ ọrụ kacha nta nke steeti gị ma bipụta iwu ndị bụ isi; ha dị iche site na steeti ruo steeti, ha na-agbanwekwa.",
      "Na mmemme ndị ntorobịa oge okpomọkụ: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ, na-eme ọrụ \"Nwalee ya ugbu a\" abụọ abụọ.",
      "Anakọtala ezi nọmba Social Security, mbipụta akwụkwọ njirimara ma ọ bụ ezi paystub mgbe ọ bụla; jiri ihe atụ e mepụtara emepụta.",
      "Mee ka ha mee egwuregwu omume (role-play) okwu ịkpọ oku mgbe ị gaghị abịa na okwu ndụmọdụ na Nkuzi 3 na nzọụkwụ ikwu okwu na Nkuzi 6.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Ọ bụrụ na onye na-amụ ihe kọwara ezi ọrụ na-adịghị nchebe ma ọ bụ megidere iwu, nyere ya aka ịgbaso nzọụkwụ dị na Nkuzi 6 ma tinye nne, nna ma ọ bụ onye nlekọta ya."
    ]
  }
};
