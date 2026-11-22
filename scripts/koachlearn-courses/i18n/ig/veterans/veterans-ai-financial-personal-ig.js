"use strict";

// Koach Learn course (Igbo translation of veterans/veterans-ai-financial-personal.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. No investment advice.

module.exports = {
  id: "veterans-ai-financial-personal-ig",
  lang: "ig",
  translationOf: "veterans-ai-financial-personal",
  category: "Veterans (military)",
  name: "AI maka Ọganihu n'Ego na na Ndụ Gị",
  skills: "Iji AI n'enweghị nsogbu n'ajụjụ gbasara ego, Ime atụmatụ ego (budget) kwa ọnwa maka ndụ nkịtị, Ime atụmatụ maka mgbanwe ụgwọ ọnwa mgbe ọrụ agha gasịrị, Ịhụ aghụghọ ego a na-eme ndị agha ochie, Ịtọ ebumnuche na usoro kwa izu, Ịchọta enyemaka ego gọọmentị n'efu",
  outcome: "ime obere budget kwa ọnwa maka ndụ nkịtị na usoro kwa izu site n'enyemaka ngwa enyemaka AI, jiri nọmba e mere ka ọ dị mfe (rounded) na-enweghị ozi nzuzo akaụntụ ọ bụla, ma lelee ajụjụ ego na isi iyi gọọmentị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị agha ochie (veterans) na ndị agha na-apụ n'ọrụ agha bụ ndị chọrọ ijide ego na ndụ ha kwa ụbọchị n'aka mgbe ọrụ agha gasịrị. Ụgwọ ọnwa, ebe obibi na usoro ndụ na-agbanwe mgbe ị hapụrụ ndị agha, atụmatụ na-emekwa ka mgbanwe ahụ dị mfe.",
    "Ị ga-eji ngwa enyemaka AI n'efu dị ka onye na-enyere gị aka ime atụmatụ: ime budget, ime atụmatụ maka ego ị ga-atụfu na nke ị ga-enweta, ịhụ aghụghọ, ịtọ ebumnuche na ime usoro kwa izu. Ị ga-amụta kpọmkwem ihe ị na-agaghị ede n'ime AI mgbe ọ bụla, na ebe ị ga-enweta enyemaka ego gọọmentị n'efu.",
    "Ihe ọmụmụ a anaghị enye ndụmọdụ itinye ego (investment). AI bụ onye enyemaka, ọ bụghị onye ndụmọdụ ego: lelee mkpebi ego gị mgbe niile na isi iyi gọọmentị ma ọ bụ onye ọkachamara ruru eru. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Jiri ngwa enyemaka AI mee budget kwa ọnwa n'otu peeji maka ndụ nkịtị, jiri nọmba e mere ka ọ dị mfe (ego na-abata, ihe dị mkpa, ihe ị chọrọ, nchekwa ego na ịkwụ ụgwọ ị ji), tinye otu ahịrị maka mgbanwe ụgwọ ọnwa mgbe ọrụ agha gasịrị, na usoro kwa izu nwere oge atọ maka ebumnuche. Lelee na o nweghị nọmba akaụntụ ma ọ bụ ozi nzuzo, ma dee otu ajụjụ ego ị ga-ewere gaa n'isi iyi gọọmentị ma ọ bụ n'aka onye ndụmọdụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha ochie na ndị agha na-apụ n'ọrụ agha na-ejide ego na ndụ ha kwa ụbọchị n'aka mgbe ọrụ agha gasịrị, ọtụtụ mgbe ha na ezinụlọ ha. Ọtụtụ n'ime ha na-esi n'ụgwọ ọnwa ndị agha, ego enyemaka (allowances) na usoro a kara aka aga n'ụgwọ ọnwa ndụ nkịtị na usoro nke ha.",
    startingPoint: "Ha nwere ike iji smartphone ma ọ bụ kọmputa na igwe mgbakọ (calculator). Ọtụtụ n'ime ha enwetala ụgwọ ọnwa, mana ha emebeghị budget ndụ nkịtị site na mbido, ọ bụkwa mmadụ ole na ole jirila ngwa enyemaka AI mee atụmatụ.",
    gap: "Ụgwọ ọnwa, ego ebe obibi na usoro ndụ kwa ụbọchị na-agbanwe mgbe ọrụ agha gwụrụ, ndị aghụghọ ego na-elekwa ndị agha ochie anya. Ndị na-amụ ihe chọrọ budget dị mfe, usoro kwa izu na ebumnuche doro anya, nke ha ji AI mee n'ekesaghị ozi nzuzo, ha kwesịkwara ịma ebe ha ga-ewere ajụjụ ego gaa maka enyemaka gọọmentị n'efu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; e cheghị na ha mụrụ ihe gbasara ego",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa nwere ịntanetị, na igwe mgbakọ",
      "Nzuzo: naanị nọmba e mere ka ọ dị mfe; enweghị nọmba akaụntụ, kaadị, Social Security ma ọ bụ VA file n'ime prompt AI ọ bụla",
      "Enweghị ndụmọdụ itinye ego: a na-elele mkpebi ego na isi iyi gọọmentị ma ọ bụ onye ọkachamara ruru eru",
      "Oge: nkuzi dị ihe dị ka nkeji 5 nke dabara n'etiti oge ịhụ ndị ọrụ maka ịpụ n'ọrụ agha, ọrụ na ezinụlọ"
    ],
    prerequisites: "Ọ dịghị. Ndị na-ejibeghị ngwa enyemaka AI nwere ike ibu ụzọ were \"Mmalite AI na Ọrụ n'Ọdịnihu\" (Introduction to AI and the Future Workforce)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe i nwere ajụjụ gbasara ego", action: "ịjụ ngwa enyemaka AI ajụjụ ahụ site n'iji nọmba e mere ka ọ dị mfe na-enweghị ozi nzuzo", standard: "n'ekesaghị nọmba akaụntụ, kaadị ma ọ bụ njirimara ọ bụla" },
    { id: "O2", condition: "Site n'iji nọmba nke gị e mere ka ọ dị mfe", action: "ime tebụl budget kwa ọnwa maka ndụ nkịtị site n'enyemaka AI, tinyere ahịrị maka ihe na-efu ego nke na-agbanwe mgbe ọrụ agha gasịrị", standard: "nwere mkpokọta ị lelere n'onwe gị n'igwe mgbakọ" },
    { id: "O3", condition: "Mgbe e nyere gị ozi ma ọ bụ onyinye gbasara ego ma ọ bụ enyemaka gọọmentị", action: "ịmata ihe ịdọ aka na ntị nke aghụghọ ma họrọ ihe a ga-eme n'enweghị nsogbu", standard: "n'akwụghị ihe ọ bụla na n'ekesaghị koodu ma ọ bụ ozi nzuzo ọ bụla" },
    { id: "O4", condition: "Maka ego na ndụ mgbe ọrụ agha gasịrị", action: "ide ebumnuche atọ nwere nọmba na ụbọchị ma kewaa otu n'ime ha ka ọ bụrụ nzọụkwụ kwa izu site n'enyemaka AI", standard: "ebe ebumnuche ọ bụla nwere ihe a na-agụ agụ na ụbọchị" },
    { id: "O5", condition: "Site n'iji ebumnuche gị", action: "ime usoro kwa izu nwere oge atọ maka ebumnuche, tinyere ilele budget kwa izu", standard: "ma lelee ya ma gbanwee ya kwa izu" },
    { id: "O6", condition: "Mgbe e nyere gị ajụjụ gbasara ego", action: "ịhọrọ ezi isi iyi gọọmentị ma ọ bụ onye ndụmọdụ ma dee ajụjụ ahụ", standard: "na-elele azịza ego AI tupu i mee ihe na ha" }
  ],
  chapters: [
    {
      name: "Isi 1: Ego mgbe ọrụ agha gasịrị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Iji AI n'enweghị nsogbu n'ajụjụ gbasara ego",
          minutes: 4,
          goal: "Jụọ ngwa enyemaka AI ajụjụ gbasara ego n'enweghị nsogbu, na-enweghị ozi nzuzo.",
          text: [
            "Ngwa enyemaka AI nwere ike ịkọwa okwu gbasara ego, mee tebụl budget, tụnyere nhọrọ ndị i nyere ya, ma mee ka ndepụta ụgwọ gbagwojuru anya bụrụ atụmatụ. Ọ bụ onye enyemaka na-eme ngwa ngwa, nwekwa ndidi.",
            "Ọ bụghị onye ndụmọdụ ego. Ọ maghị ọnọdụ gị niile, ọ nwere ike ime mperi n'iwu na nọmba, ihe ọ maara nwekwara ike ịdị ochie. Jiri ya ghọta ihe ma hazie ihe; lelee mkpebi na isi iyi gọọmentị ma ọ bụ onye ndụmọdụ ruru eru.",
            "Edela nọmba Social Security gị, nọmba DD-214 gị (akwụkwọ na-egosi na ị hapụrụ ọrụ agha) ma ọ bụ nọmba VA file, nọmba ụlọ akụ ma ọ bụ kaadị, ihe nbanye akaụntụ ma ọ bụ okwuntughe n'ime AI mgbe ọ bụla. Jiri nọmba e mere ka ọ dị mfe kama: \"ụlọ ihe dị ka $1,200\" bụ naanị ihe ọ chọrọ."
          ],
          steps: ["Kpebie ihe ị chọrọ: nkọwa, tebụl ma ọ bụ atụmatụ.", "Jiri nọmba e mere ka ọ dị mfe, na-enweghị ozi akaụntụ.", "Jụọ ajụjụ ahụ.", "Kaa akara iwu, ọnụego ma ọ bụ ụbọchị ọ bụla ị ga-elele na isi iyi gọọmentị."],
          words: [["Budget", "atụmatụ maka otu ego gị si abata na otu o si apụ kwa ọnwa."], ["Nọmba e mere ka ọ dị mfe (rounded number)", "nọmba dị nso, dị mfe dị ka $1,200 kama nọmba kpọmkwem jikọtara na akaụntụ."]],
          slides: [
            { title: "AI nwere ike inyere gị aka", bullets: ["Ịkọwa okwu gbasara ego", "Ime tebụl budget", "Ime ka ndepụta ụgwọ bụrụ atụmatụ"] },
            { title: "AI abụghị", bullets: ["Onye ndụmọdụ ego", "Onye na-eziri ezi mgbe niile ma ọ bụ nwee ihe ọhụrụ", "Onye na-ekpebi: gị bụ onye na-ekpebi"] },
            { title: "Edela ihe ndị a", bullets: ["Nọmba SSN, DD-214 ma ọ bụ VA file", "Nọmba ụlọ akụ ma ọ bụ kaadị, ihe nbanye, okwuntughe", "Jiri nọmba e mere ka ọ dị mfe kama"] }
          ],
          tryIt: "Jụọ ngwa enyemaka AI: \"Kọwaa ọdịiche dị n'etiti ihe dị mkpa na ihe a chọrọ na budget kwa ọnwa, nye ọmụmaatụ atọ nke ọ bụla.\" Lelee na prompt gị enweghị ozi nzuzo tupu i zipu ya.",
          youCanNow: "ịjụ ngwa enyemaka AI ajụjụ gbasara ego n'enweghị nsogbu ma mara ihe ị ga-elele n'ebe ọzọ.",
          quickCheck: [
            { objective: "O1", q: "Kedu ụzọ kacha enweghị nsogbu isi gwa AI maka ụgwọ ụgbọala gị?", options: ["Dee nọmba akaụntụ mbinye ego gị", "Bulite foto akwụkwọ ụlọ akụ gị", "Dee nọmba kaadị gị ka o wee lelee", "\"Ụgwọ ụgbọala ihe dị ka $350 kwa ọnwa\""], answer: 3, why: "Nọmba e mere ka ọ dị mfe na-enye AI ihe ọ chọrọ n'enweghị ozi nzuzo ọ bụla." },
            { objective: "O1", q: "AI kọwara iwu gbasara ego ma nye ọnụego. Gịnị ka ị ga-eme?", options: ["Jiri ya ozugbo", "Lelee iwu ahụ na ọnụego ahụ na isi iyi gọọmentị", "Jụọ onye ị na-amaghị n'ịntanetị", "Leghara azịza AI niile anya ruo mgbe ebighi ebi"], answer: 1, why: "AI nwere ike ịkọwa ihe, mana a ga-elelerịrị iwu na ọnụego na isi iyi gọọmentị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ime budget kwa ọnwa maka ndụ nkịtị",
          minutes: 6,
          goal: "Mee tebụl budget kwa ọnwa site n'enyemaka AI, jiri nọmba e mere ka ọ dị mfe.",
          text: [
            "Mgbe ị nọ n'ọrụ agha, a nwere ike ịkwụ ụfọdụ ihe maka gị ma ọ bụ nye gị ha dị ka ego enyemaka (allowance), dị ka ego ebe obibi na nri, na nlekọta ahụike site na TRICARE. Mgbe ị hapụrụ ọrụ agha, ọtụtụ n'ime ha na-agbanwe ma ọ bụ kwụsị. Budget ndụ nkịtị gị ga-akwụ ha site n'ụgwọ ọnwa gị ma ọ bụ ego enyemaka gọọmentị. Lelee ụgwọ ọnwa ikpeazụ na enyemaka gị n'ọfịs ego gị, DFAS ma ọ bụ VA kama ịkọ nkọ.",
            "Malite n'otu anọ: ego na-abata (ụgwọ ọnwa, enyemaka gọọmentị), ihe dị mkpa (ụlọ, ọkụ na mmiri, nri, njem, inshọransị, ahụike), ihe ị chọrọ (iri nri n'èzí, ndebanye aha kwa ọnwa), na nchekwa ego na ịkwụ ụgwọ ị ji. Rịọ AI ka o mee tebụl ahụ ma gbakọta otu ọ bụla.",
            "Ọmụmaatụ prompt: \"Mee tebụl budget kwa ọnwa. Ego na-abata ihe dị ka $3,800. Ụlọ $1,200, ọkụ na mmiri $200, nri $450, ụgwọ ụgbọala $350, mmanụ ụgbọala $160, ekwentị $70, inshọransị $150, iri nri n'èzí $200, ndebanye aha $40. Gosi mkpokọta na ihe fọdụrụ.\""
          ],
          steps: ["Depụta ego na-abata kwa ọnwa site na nọmba e mere ka ọ dị mfe.", "Depụta ihe dị mkpa, ihe ị chọrọ, nchekwa ego na ịkwụ ụgwọ ị ji.", "Rịọ AI ka o mee tebụl nwere mkpokọta na ihe fọdụrụ.", "Tinye ihe ọ bụla a kwụrụ maka gị n'ọrụ agha nke a na-adịghịzi akwụ.", "Lelee mgbakọ ahụ n'onwe gị n'igwe mgbakọ."],
          words: [["Ego enyemaka (allowance)", "ego a na-akwụ n'ọrụ agha maka ihe dị ka ebe obibi ma ọ bụ nri."], ["Ihe dị mkpa (need)", "ihe ị ga-akwụrịrị ụgwọ ya iji bie ndụ ma rụọ ọrụ, dị ka ụlọ."], ["Ihe ị chọrọ (want)", "ihe ị nwere ike ibelata, dị ka iri nri n'èzí."]],
          slides: [
            { title: "Ihe na-agbanwe mgbe ọrụ agha gasịrị", bullets: ["Ego enyemaka dị ka maka ebe obibi na nri nwere ike ịkwụsị", "Nlekọta ahụike nwere ike ịgbanwe", "Lelee ụgwọ ọnwa na enyemaka gị n'ebe gọọmentị"] },
            { title: "Otu anọ nke budget", bullets: ["Ego na-abata", "Ihe dị mkpa", "Ihe ị chọrọ", "Nchekwa ego na ịkwụ ụgwọ ị ji"] },
            { title: "Hapụ AI ka o mee tebụl ahụ", bullets: ["Nye nọmba e mere ka ọ dị mfe", "Rịọ maka mkpokọta na ihe fọdụrụ", "Lelee mgbakọ ahụ n'onwe gị"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o mee tebụl budget kwa ọnwa gị site na nọmba e mere ka ọ dị mfe. Tinye otu ahịrị maka ihe a kwụrụ maka gị mgbe ị nọ n'ọrụ agha. Lelee mkpokọta ya n'igwe mgbakọ.",
          youCanNow: "ime tebụl budget kwa ọnwa maka ndụ nkịtị site na nọmba e mere ka ọ dị mfe ma lelee mkpokọta ya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ ọdịiche dị n'etiti ihe dị mkpa na ihe ị chọrọ na budget?", options: ["Ihe dị mkpa bụ ihe ị ga-akwụrịrị, dị ka ụlọ; ihe ị chọrọ bụ ihe ị nwere ike ibelata", "Ihe dị mkpa bụ ihe ọ bụla masịrị gị", "Ihe ị chọrọ na-adị oke ọnụ mgbe niile", "O nweghị ọdịiche"], answer: 0, why: "Ihe dị mkpa bụ ihe a ga-akwụrịrị; ihe ị chọrọ bụ nhọrọ ị nwere ike ibelata ma ego dị ntakịrị." },
            { objective: "O2", q: "Tebụl budget AI kwuru na mkpokọta gị bụ $2,950, mana ahịrị ndị ahụ yiri ka ha karịrị ya. Gịnị ka ị ga-eme?", options: ["Kwere mkpokọta AI", "Hichapụ tebụl ahụ", "Gbakọta ahịrị ndị ahụ n'onwe gị n'igwe mgbakọ ma dozie mkpokọta ahụ", "Mee ka mkpokọta ahụ bụrụ $3,000"], answer: 2, why: "AI nwere ike ime mperi na mgbakọ, ya mere ị na-elele mkpokọta n'onwe gị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhụ aghụghọ ego a na-eme ndị agha ochie",
          minutes: 5,
          goal: "Hụ ihe ịdọ aka na ntị nke aghụghọ ego ma mara ihe ị ga-eme.",
          text: [
            "Ndị aghụghọ na-elekwasị ndị agha ochie anya n'ihi ego enyemaka na ụgwọ ezumike nka (pension) ha. Ọnyà a na-ahụkarị gụnyere onyinye \"ịzụta\" pension ma ọ bụ ego enyemaka gị n'ọdịnihu maka otu nnukwu ego ugbu a (pension advance), ndị na-ana ego iji dee arịrịọ VA ma ọ bụ \"bulie\" rating gị, onyinye ọrụ adịgboroja, na oku ndị na-eme ka ha si na VA.",
            "Consumer Financial Protection Bureau (CFPB, ụlọ ọrụ gọọmentị US na-echebe ndị mmadụ n'okwu ego) na-adọ ndị agha na ndị agha ochie aka na ntị maka pension advance ma na-akọwa ikike ego gị. Ndị aghụghọ na-ejikwa AI ugbu a, iji dee ozi yiri ezi ozi ma ọbụna ṅomie olu mmadụ.",
            "Ihe ịdọ aka na ntị: ha na-eme ka ị mee ngwa ngwa, na-arịọ ego tupu ọrụ (upfront fee), na-arịọ gift card ma ọ bụ wire transfer, ma ọ bụ na-arịọ koodu e zitere n'ekwentị gị. Kwụsị, kwụsị oku ahụ, ma kpọghachi na nọmba ị chọtara n'onwe gị na va.gov ma ọ bụ na saịtị gọọmentị ahụ. Ị nwekwara ike itinye ozi ị na-enyo enyo n'ime AI ma jụọ \"Kedu ihe ịdọ aka na ntị dị na nke a?\", mgbe i wepụrụ ozi nzuzo gị."
          ],
          steps: ["Hụ mmanye, ego tupu ọrụ, gift card, wire transfer ma ọ bụ arịrịọ koodu.", "Kwụsị ma akwụla ụgwọ ma ọ bụ kesaa ihe ọ bụla.", "Chọta nọmba gọọmentị n'onwe gị ma kpọghachi.", "Wepụ ozi nzuzo, wee rịọ AI ka o gosi ihe ịdọ aka na ntị.", "Kọọ ya ma ọ bụrụ na i tufuru ego."],
          words: [["Pension advance", "onyinye ịkwụ gị otu nnukwu ego ugbu a maka pension ma ọ bụ ego enyemaka gị n'ọdịnihu, nke na-adịkarị oke ọnụ."], ["Aghụghọ (scam)", "wayo e ji ezu ego ma ọ bụ ozi."]],
          slides: [
            { title: "Ọnyà a na-ahụkarị", bullets: ["Onyinye pension advance", "Ego iji dee ma ọ bụ \"bulie\" arịrịọ VA", "Onyinye ọrụ adịgboroja na oku VA adịgboroja"] },
            { title: "Ihe ịdọ aka na ntị", bullets: ["Ha na-eme ka ị mee ngwa ngwa", "Ego tupu ọrụ, gift card ma ọ bụ wire transfer", "Ha na-arịọ koodu e zitere n'ekwentị gị"] },
            { title: "Ihe ị ga-eme", bullets: ["Kwụsị. Akwụla ụgwọ, ekesala ihe ọ bụla", "Kpọghachi na nọmba ị chọtara n'onwe gị", "Rịọ AI ka o gosi ihe ịdọ aka na ntị"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Military financial lifecycle", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Dee obere ọmụmaatụ ozi ederede aghụghọ na-ekwe nkwa \"ịbuli VA rating gị maka ego\". Rịọ ngwa enyemaka AI ka o depụta ihe ịdọ aka na ntị dị na ya. Wee dee ihe ị ga-eme ma ọ bụrụ na ị nwetara ya.",
          youCanNow: "ịhụ ihe ịdọ aka na ntị nke aghụghọ ego a na-eme ndị agha ochie ma meghachi n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O3", q: "Kedu nke bụ ihe ịdọ aka na ntị nke aghụghọ?", options: ["Akwụkwọ ozi ị rịọrọ VA ka o zitere gị", "Akwụkwọ ọnwa nkịtị nke ụlọ akụ gị", "Mmanye ịkwụ ụgwọ ngwa ngwa, site na gift card ma ọ bụ ego tupu ọrụ", "Fọm n'efu na va.gov"], answer: 2, why: "Ime ka ị mee ngwa ngwa na ịrịọ gift card ma ọ bụ ego tupu ọrụ bụ ihe ịrịba ama aghụghọ a ma ama." },
            { objective: "O3", q: "Ozi ederede kwuru na ego enyemaka gị ga-akwụsị ma ọ bụrụ na i zipughị koodu ị nwetara ugbu a. Gịnị ka ị ga-eme?", options: ["Zipu koodu ahụ ngwa ngwa", "Zaghachi jụọ onye ha bụ", "Zipu ọkara koodu ahụ", "Azaghachila; kpọtụrụ VA na nọmba ị chọtara n'onwe gị"], answer: 3, why: "Ezi ụlọ ọrụ gọọmentị anaghị arịọ koodu gị; ị na-akpọtụrụ ha site na nọmba ị chọtara n'onwe gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ego mgbe ọrụ agha gasịrị",
        questions: [
          { objective: "O1", q: "Kedu nke ị kwesịrị ide n'ime AI mgbe ị na-arịọ enyemaka budget?", options: ["Nọmba akaụntụ ụlọ akụ gị", "\"Ụlọ ihe dị ka $1,200\"", "Nọmba Social Security gị", "Okwuntughe ụlọ akụ ịntanetị gị"], answer: 1, why: "Nọmba e mere ka ọ dị mfe na-enye AI ihe ọ chọrọ n'enweghị ozi nzuzo." },
          { objective: "O1", q: "Ụzọ kacha mma isi jiri AI n'okwu ego bụ:", options: ["Ime mkpebi ikpeazụ maka gị", "Ịhọrọ ebe itinye ego maka gị", "Ịkọwa, ịhazi na ime atụmatụ ị ga-elele emesịa", "Ijide okwuntughe gị"], answer: 2, why: "AI na-enyere gị aka ịghọta na ịhazi ihe; ị na-elele mkpebi na isi iyi gọọmentị." },
          { objective: "O2", q: "Gịnị mere budget ndụ nkịtị ji chọọ ahịrị budget ndị agha nwere ike ọ gaghị enwe?", options: ["Ndị nkịtị anaghị akwụ ụgwọ ụlọ", "Ụtụ isi dị ala", "N'ihi na AI kwuru ya", "Ụfọdụ ego enyemaka na ihe a na-akwụ maka gị na-agbanwe ma ọ bụ kwụsị mgbe ọrụ agha gasịrị"], answer: 3, why: "A nwere ike ịkwụ ihe dị ka ebe obibi maka gị ma ọ bụ nye gị ya dị ka ego enyemaka n'ọrụ agha." },
          { objective: "O3", q: "Mmadụ na-enye gị ego ugbu a maka ụgwọ pension gị n'ọdịnihu. Nke a bụ:", options: ["Pension advance, nke CFPB na-adọ aka na ntị maka ya", "Ụgwọ ọnwa nkịtị", "Enyemaka VA", "Nlọghachi ụtụ isi"], answer: 0, why: "CFPB na-adọ ndị agha na ndị agha ochie aka na ntị maka onyinye pension advance." },
          { objective: "O3", q: "Onye kpọrọ oku kwuru na o si na VA ma rịọ koodu e zitere n'ekwentị gị. Ị ga-:", options: ["Gụọrọ ha koodu ahụ", "Kwụsị oku ahụ ma kpọọ VA na nọmba ị chọtara n'onwe gị", "Nye ha SSN gị kama", "Zipu gift card"], answer: 1, why: "Ezi ọfịs anaghị arịọ koodu ahụ; kpọghachi na nọmba ị maara na ọ bụ ezi nọmba." }
        ]
      }
    },
    {
      name: "Isi 2: Ebumnuche, usoro na ezi enyemaka",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịtọ ebumnuche ego na ndụ",
          minutes: 5,
          goal: "Dee ebumnuche atọ doro anya nwere nọmba na ụbọchị, ma kewaa otu n'ime ha ka ọ bụrụ nzọụkwụ site n'enyemaka AI.",
          text: [
            "Ebumnuche na-arụ ọrụ mgbe ọ doro anya, a na-agụ ya agụ, nwekwa ụbọchị: \"Chekwaa $1,000 maka ihe mberede tupu 31 March\" ka \"chekwaa ego karịa\" mma. Otu a ka ọ dịkwa maka ebumnuche ndụ: \"mechaa ihe ọmụmụ asambodo (certification) m tupu June\" ma ọ bụ \"gbaa ọsọ ugboro atọ n'izu\".",
            "Dee ebumnuche atọ: otu gbasara ego, otu gbasara ọrụ ma ọ bụ mmụta, na otu gbasara ahụike ma ọ bụ ezinụlọ. Wee rịọ AI ka o kewaa otu n'ime ha ka ọ bụrụ nzọụkwụ kwa izu: \"Kewaa ebumnuche a ka ọ bụrụ nzọụkwụ kwa izu: chekwaa $1,000 tupu 31 March. Enwere m ike ibelata ihe dị ka $60 kwa izu n'iri nri n'èzí na ndebanye aha.\"",
            "Consumer Financial Protection Bureau nwere ngwa n'efu maka ndị agha, gụnyere akwụkwọ ọrụ (worksheet) maka ịtọ ebumnuche. Jiri ya na atụmatụ AI gị."
          ],
          steps: ["Dee otu ebumnuche ego, otu ebumnuche ọrụ, na otu ebumnuche ahụike ma ọ bụ ezinụlọ.", "Nye nke ọ bụla nọmba na ụbọchị.", "Rịọ AI ka o kewaa otu ebumnuche ka ọ bụrụ nzọụkwụ kwa izu.", "Tinye nzọụkwụ mbụ na kalenda gị."],
          words: [["Ego ihe mberede (emergency fund)", "ego e chekwara maka ihe na-efu ego na mberede, dị ka ịrụzi ụgbọala."], ["A na-agụ ya agụ (measurable)", "ị nwere ike ịgụ ya, ya mere ị ma mgbe o mechara."]],
          slides: [
            { title: "Ebumnuche na-arụ ọrụ", bullets: ["Ọ doro anya", "A na-agụ ya agụ: nọmba", "Ụbọchị"] },
            { title: "Ebumnuche atọ", bullets: ["Ego", "Ọrụ ma ọ bụ mmụta", "Ahụike ma ọ bụ ezinụlọ"] },
            { title: "Kewaa ya", bullets: ["Rịọ AI maka nzọụkwụ kwa izu", "Tinye nzọụkwụ mbụ na kalenda gị", "CFPB nwere akwụkwọ ọrụ n'efu maka ịtọ ebumnuche"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Military financial lifecycle (goal-setting worksheet)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Dee ebumnuche atọ gị nwere nọmba na ụbọchị. Rịọ ngwa enyemaka AI ka o kewaa ebumnuche ego gị ka ọ bụrụ nzọụkwụ kwa izu.",
          youCanNow: "ide ebumnuche doro anya ma kewaa otu n'ime ha ka ọ bụrụ nzọụkwụ kwa izu site n'enyemaka AI.",
          quickCheck: [
            { objective: "O4", q: "Gịnị na-eme ka ebumnuche doo anya?", options: ["Ọ na-ada ka ihe dị ukwuu", "O nwere nọmba na ụbọchị", "O nweghị ụbọchị njedebe", "Onye ọzọ dere ya"], answer: 1, why: "Nọmba na ụbọchị na-eme ka ị hụ ma i ruru ebumnuche ahụ." },
            { objective: "O4", q: "Ị chọrọ ichekwa $600 n'ime ọnwa 3. Gịnị ka ị ga-enye AI ka o kewaa ya ka ọ bụrụ nzọụkwụ?", options: ["Ebumnuche ahụ, ụbọchị ahụ na ego ị nwere ike itinye n'ezie", "Ihe nbanye ụlọ akụ gị", "Naanị okwu \"chekwaa\"", "Nọmba Social Security gị"], answer: 0, why: "Ebumnuche, ụbọchị na ego ị nwere ike itinye n'ezie na-enyere AI aka ime nzọụkwụ kwa izu bara uru." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime usoro kwa izu",
          minutes: 5,
          goal: "Mee usoro kwa izu nwere oge atọ maka ebumnuche site n'enyemaka AI.",
          text: [
            "Ndụ ndị agha na-aga n'usoro a kara aka. Ndụ nkịtị anaghị adịkarị otu a, ọtụtụ ndị agha ochie na-ekwukwa na itufu usoro ahụ bụ otu n'ime ihe kacha sie ike mgbe ha na-apụ n'ọrụ agha. Ị nwere ike ime nke gị.",
            "Nye AI oge gị a kara aka na ebumnuche gị: \"Ana m arụ ọrụ site n'elekere 8 ruo 5, Mọnde ruo Fraịde. Ebumnuche m: ịgụ akwụkwọ maka asambodo m awa 4 n'izu, imega ahụ ugboro 3 n'izu, ilele budget m otu ugboro n'izu. Mee usoro kwa izu dị mfe dị ka tebụl.\"",
            "Mee ka ọ dị n'ezie. Hapụ oge ezumike na oge ezinụlọ. Lelee usoro ahụ kwa Sọnde ma gbanwee ya; atụmatụ bụ atụmatụ ruo mgbe ihe mbụ bịara, wee gbanwee dịka ọnọdụ si dị."
          ],
          steps: ["Depụta oge gị a kara aka: ọrụ, ụlọ akwụkwọ, ezinụlọ.", "Depụta ebumnuche atọ gị site na Nkuzi 4.", "Rịọ AI maka tebụl usoro kwa izu.", "Tinye oge ezumike na oge ezinụlọ.", "Lelee ya ma gbanwee ya kwa izu."],
          words: [["Usoro (routine)", "ihe ndị ị na-eme n'otu oge kwa izu."], ["Oge a kara aka (time block)", "oge e debere na kalenda gị maka otu ọrụ."]],
          slides: [
            { title: "Wughachi usoro gị", bullets: ["Ndụ ndị agha nwere usoro", "Ndụ nkịtị anaghị enwekarị ya", "Ị nwere ike ime nke gị"] },
            { title: "Rịọ AI maka tebụl kwa izu", bullets: ["Oge gị a kara aka", "Oge atọ maka ebumnuche gị", "Oge ezumike na oge ezinụlọ"] },
            { title: "Lelee ya kwa izu", bullets: ["Lelee ya kwa Sọnde", "Gbanwee ihe na-arụghị ọrụ", "Gbanwee dịka ọnọdụ si dị, dị ka n'atụmatụ ọ bụla"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o mee usoro kwa izu gị nwere oge atọ maka ebumnuche, tinyere otu oge ilele budget kwa izu. Tinye ya na kalenda ekwentị gị ma ọ bụ bipụta ya.",
          youCanNow: "ime usoro kwa izu dị n'ezie nke na-enye oge maka ebumnuche gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ oge maka ebumnuche n'usoro kwa izu?", options: ["Izu na-enweghị atụmatụ", "Ncheta ịkwụ onye aghụghọ ụgwọ", "Ndepụta ọrụ niile i mere", "Oge e debere kwa izu iji rụọ ọrụ n'otu ebumnuche"], answer: 3, why: "Oge maka ebumnuche bụ oge ị na-edebe n'otu ụbọchị kwa izu iji mee ka ebumnuche gaa n'ihu." },
            { objective: "O5", q: "Ị gbaghara oge abụọ maka ebumnuche n'izu a n'ihi oge ịhụ ndị ọrụ. Gịnị ka ị ga-eme?", options: ["Lelee usoro ahụ ma bufee oge ndị ahụ n'oge ga-adabara gị", "Hapụ usoro ahụ", "Tinye oge ise ọzọ", "Ahazila oge ịhụ ndị ọrụ ọzọ"], answer: 0, why: "Usoro na-arụ ọrụ mgbe ị na-elele ya kwa izu ma gbanwee ya ka o dabara ndụ gị n'ezie." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Inweta enyemaka ego gọọmentị n'efu",
          minutes: 5,
          goal: "Họrọ ezi isi iyi gọọmentị maka ajụjụ ego ma dee ajụjụ ahụ.",
          text: [
            "Ụfọdụ ajụjụ ego chọrọ mmadụ ma ọ bụ azịza gọọmentị: enyemaka na ụgwọ VA, ụgwọ ị ji, ụtụ isi, nsogbu kredit, nhọrọ ezumike nka, ma ọ bụ ihe ọ bụla gbasara iwu. AI nwere ike inyere gị aka ide ajụjụ ahụ nke ọma, mana ọ gaghị abụ azịza ikpeazụ.",
            "Enyemaka gọọmentị n'efu gụnyere: VA (va.gov) maka enyemaka na ụgwọ VA; Military OneSource, nke na-enye ndị agha na ndị ezinụlọ ha ruru eru ndụmọdụ ego n'efu (lelee ntuziaka ịruru eru ya ka ị mara ma ị ka ruru eru mgbe ị hapụrụ ọrụ agha); na Consumer Financial Protection Bureau (consumerfinance.gov) maka ikike ego gị na mkpesa.",
            "Itinye ego (investment) na akaụntụ ezumike nka bụ mkpebi nke onwe gị. Ihe ọmụmụ a anaghị atụ aro nke ọ bụla. Gwa onye ọkachamara ruru eru, nke a pụrụ ịtụkwasị obi okwu, ma kpachara anya maka onye ọ bụla na-ekwe nkwa uru buru ibu, ngwa ngwa."
          ],
          steps: ["Dee ajụjụ ego gị n'otu ahịrịokwu ma ọ bụ abụọ.", "Rịọ AI ka o nyere gị aka mee ka o doo anya, na-enweghị ozi nzuzo.", "Họrọ ezi isi iyi: VA, Military OneSource ma ọ bụ CFPB.", "Kpọtụrụ ha site na nọmba ma ọ bụ saịtị ị chọtara n'onwe gị."],
          words: [["Ndụmọdụ ego (financial counseling)", "enyemaka n'efu ma ọ bụ nke dị ọnụ ala site n'aka onye ndụmọdụ a zụrụ azụ iji mee atụmatụ ma dozie nsogbu ego."], ["CFPB", "Consumer Financial Protection Bureau: ụlọ ọrụ gọọmentị U.S. na-echebe ndị mmadụ n'okwu ego."]],
          slides: [
            { title: "Ụfọdụ ajụjụ chọrọ azịza gọọmentị", bullets: ["Enyemaka na ụgwọ VA", "Ụgwọ ị ji, ụtụ isi na nsogbu kredit", "Ajụjụ ezumike nka na iwu"] },
            { title: "Enyemaka gọọmentị n'efu", bullets: ["va.gov maka enyemaka VA", "Ndụmọdụ ego Military OneSource", "consumerfinance.gov maka ikike ego"] },
            { title: "Enweghị ndụmọdụ itinye ego ebe a", bullets: ["Itinye ego bụ mkpebi nke onwe gị", "Gwa onye ọkachamara ruru eru", "Kpachara anya maka nkwa uru buru ibu, ngwa ngwa"] }
          ],
          sources: [
            { name: "Military OneSource: Financial counseling", url: "https://www.militaryonesource.mil/benefits/financial-counseling/" },
            { name: "Consumer Financial Protection Bureau: Military financial lifecycle", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" },
            { name: "VA: Careers and employment (VA benefits and counseling)", url: "https://www.va.gov/careers-employment/" }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ gị n'otu peeji: budget kwa ọnwa gị site na Nkuzi 2 nwere ahịrị mgbanwe ụgwọ ọnwa, usoro kwa izu gị nwere oge atọ maka ebumnuche, na otu ajụjụ ego tinyere isi iyi gọọmentị ị ga-ewere ya gaa. Lelee na o nweghị nọmba akaụntụ ma ọ bụ ozi nzuzo.",
          youCanNow: "ịhọrọ ezi isi iyi gọọmentị n'efu maka ajụjụ ego ma were ajụjụ doro anya gaa n'ebe ahụ.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere ị ga-eji dee ajụjụ ego gị tupu ị kpọtụrụ isi iyi gọọmentị?", options: ["Ka i wee tinye ya n'ịntanetị", "Ka ị jụọ ezi ebe ahụ nke ọma ma nweta azịza bara uru", "Ka AI wee zaa ya kama", "Ka ị ghara ịjụ ajụjụ ọ bụla"], answer: 1, why: "Ajụjụ edere nke ọma na-enyere onye ndụmọdụ ma ọ bụ ụlọ ọrụ ahụ aka inye gị ezi azịza." },
            { objective: "O6", q: "I nwere ajụjụ gbasara ụgwọ VA gị. Ebee ka ị ga-ewere ya gaa?", options: ["Otu ndị mmadụ na soshal midia", "Naanị ngwa enyemaka AI", "VA na va.gov", "Onye kpọrọ oku na-ekwe nkwa inyere gị aka"], answer: 2, why: "Ajụjụ gbasara ụgwọ VA na-aga n'aka VA n'onwe ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ebumnuche, usoro na ezi enyemaka",
        questions: [
          { objective: "O4", q: "Kedu nke bụ ebumnuche kacha mma?", options: ["\"Chekwaa ego karịa\"", "\"Mee nke ọma karịa n'ego\"", "\"Chekwaa $1,000 maka ihe mberede tupu 31 March\"", "\"Otu ụbọchị zụta ụlọ\""], answer: 2, why: "Ọ doro anya, a na-agụ ya agụ, nwekwa ụbọchị." },
          { objective: "O5", q: "Ọtụtụ ndị agha ochie na-agụ agụụ usoro mgbe ọrụ agha gasịrị. Gịnị na-enyere aka?", options: ["Ịghara ime atụmatụ mgbe ọ bụla", "Ịhapụ AI ka ọ chịa ndụ gị", "Ịrụ ọrụ awa niile", "Ime usoro kwa izu na ilele ya"], answer: 3, why: "Usoro dị n'ezie nke ị na-elele kwa izu na-eweghachi usoro ndụ." },
          { objective: "O5", q: "Usoro kwa izu gị arụghị ọrụ n'izu a. Ị ga-:", options: ["Lelee ya ma gbanwee ya", "Hapụ usoro niile", "Tinye awa ọrụ ọzọ", "Hichapụ kalenda gị"], answer: 0, why: "A na-agbanwe atụmatụ ka ị na-amụta ihe na-arụ ọrụ." },
          { objective: "O6", q: "Kedu isi iyi na-enye ndị agha ndụmọdụ ego n'efu?", options: ["Mgbasa ozi na-apụta na mberede", "Military OneSource", "Ụlọ ọrụ pension advance", "Chatbot AI ọ bụla"], answer: 1, why: "Military OneSource na-enye ndị agha na ndị ezinụlọ ha ruru eru ndụmọdụ ego n'efu." },
          { objective: "O6", q: "AI tụrụ aro otu ebe kpọmkwem itinye ego. Gịnị ka ị kwesịrị ime?", options: ["Zụta ya ugbu a", "Gwa ndị enyi gị ka ha zụta ya", "Were ya dị ka ihe a na-elelebeghị ma gwa onye ọkachamara ruru eru", "Tinye ego nchekwa gị niile n'ime ya"], answer: 2, why: "Itinye ego bụ mkpebi nke onwe gị; AI abụghị onye ndụmọdụ ego." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ọganihu n'Ego na na Ndụ Gị",
    questions: [
      { objective: "O1", q: "Ngwa enyemaka AI nwere ike inyere aka n'okwu ego site n':", options: ["Ijide okwuntughe gị", "Ịkọwa okwu na ime tebụl budget", "Ikwe nkwa uru n'ego", "Ide arịrịọ VA gị maka gị"], answer: 1, why: "Ịkọwa na ịhazi ihe bụ ọrụ bara uru AI nwere ike ime n'enweghị nsogbu." },
      { objective: "O1", q: "Kedu nke enweghị nsogbu ide n'ime AI?", options: ["Nọmba DD-214 gị", "Nọmba kaadị gị", "Okwuntughe gị", "\"Nri ihe dị ka $450 kwa ọnwa\""], answer: 3, why: "Nọmba e mere ka ọ dị mfe na-enweghị ozi akaụntụ enweghị nsogbu." },
      { objective: "O1", q: "Azịza ego AI gbasara iwu na ọnụego kwesịrị:", options: ["Ka e lelee ya na isi iyi gọọmentị", "Ka a kwere ya n'ihi na ọ dị ka o ji n'aka", "Ka e tinye ya n'ịntanetị", "Ka a leghara ya anya kpamkpam"], answer: 0, why: "AI nwere ike ime mperi ma ọ bụ nwee ihe ochie gbasara iwu na ọnụego." },
      { objective: "O2", q: "Budget bụ:", options: ["Mbinye ego (loan)", "Fọm ụtụ isi", "Atụmatụ maka ego na-abata na nke na-apụ kwa ọnwa", "Akaụntụ ụlọ akụ"], answer: 2, why: "Budget na-ahazi ego na-abata na ego a na-emefu." },
      { objective: "O2", q: "Kedu nke bụ ihe dị mkpa?", options: ["Ndebanye aha ihe nkiri (streaming)", "Ụgwọ ụlọ", "Iri nri n'èzí", "Egwuregwu vidiyo ọhụrụ"], answer: 1, why: "Ụgwọ ụlọ bụ ihe ị ga-akwụrịrị iji bie ndụ." },
      { objective: "O2", q: "Mgbe ị hapụrụ ọrụ agha, kedu ihe ị nwere ike na-akwụ ugbu a n'onwe gị?", options: ["Ọ dịghị", "Naanị tiketi ihe nkiri", "Naanị onyinye", "Ihe a na-akwụbu maka gị ma ọ bụ nye gị dị ka ego enyemaka, dị ka ebe obibi"], answer: 3, why: "Ego enyemaka na ihe a na-akwụ maka gị nwere ike ịgbanwe ma ọ bụ kwụsị mgbe ọrụ agha gasịrị." },
      { objective: "O2", q: "Ebee ka ị ga-elele ụgwọ ọnwa ikpeazụ na enyemaka gị?", options: ["Ọfịs ego gị, DFAS ma ọ bụ VA", "Ihe e dere na soshal midia", "Ịkọ nkọ AI", "Ozi ederede onye ị na-amaghị"], answer: 0, why: "Ọfịs gọọmentị nwere ezi nọmba gị." },
      { objective: "O2", q: "Mgbe AI mechara tebụl budget gị, ị kwesịrị:", options: ["Ikwere mkpokọta ya", "Ilele mgbakọ ahụ n'onwe gị", "Iziga ya ndị ị na-amaghị", "Itinye ihe nbanye ụlọ akụ gị"], answer: 1, why: "AI nwere ike ime mperi na mgbakọ; lelee ya n'igwe mgbakọ." },
      { objective: "O3", q: "Onyinye \"pension advance\" bụ:", options: ["Mmemme VA", "Nlọghachi ụtụ isi", "Otu nnukwu ego ugbu a maka ụgwọ gị n'ọdịnihu, nke na-adịkarị oke ọnụ", "Ego n'efu"], answer: 2, why: "CFPB na-adọ aka na ntị maka onyinye ndị a." },
      { objective: "O3", q: "Mmadụ na-ana ego tupu ọrụ iji \"bulie VA rating gị\". Nke a bụ:", options: ["Ihe nkịtị", "Ihe a chọrọ n'iwu", "Iwu VA", "Ihe ịdọ aka na ntị nke aghụghọ"], answer: 3, why: "Ego tupu ọrụ na nkwa bụ ihe ịrịba ama aghụghọ a na-ahụkarị." },
      { objective: "O3", q: "Ozi na-eme ka ị kwụọ ụgwọ ngwa ngwa site na gift card. Ị ga-:", options: ["Kwụsị ma akwụla ụgwọ", "Kwụọ ngwa ngwa", "Kesaa SSN gị", "Nye ha koodu"], answer: 0, why: "Ime ka ị mee ngwa ngwa na gift card bụ ihe ịrịba ama aghụghọ a ma ama." },
      { objective: "O3", q: "Tupu i tinye ozi ị na-enyo enyo n'ime AI, ị kwesịrị:", options: ["Itinye nọmba akaụntụ gị", "Iwepụ ozi nzuzo gị", "Iziga ya ndị enyi gị", "Ịzaghachi onye zitere ya"], answer: 1, why: "Wepụ ozi nzuzo, wee rịọ AI ka o hụ ihe ịdọ aka na ntị." },
      { objective: "O4", q: "Ezigbo ebumnuche nwere:", options: ["Enweghị ụbọchị", "Enweghị nọmba", "Nọmba na ụbọchị", "Naanị mmetụta"], answer: 2, why: "Ebumnuche doro anya, a na-agụ agụ, nwekwa ụbọchị na-emezu." },
      { objective: "O4", q: "Kedu ụlọ ọrụ na-enye ndị agha akwụkwọ ọrụ n'efu maka ịtọ ebumnuche?", options: ["Ụlọ ọrụ pension advance", "Onye na-ere ụgbọala", "App crypto", "Consumer Financial Protection Bureau"], answer: 3, why: "Peeji ego ndị agha nke CFPB nwere njikọ gaa n'akwụkwọ ọrụ maka ịtọ ebumnuche." },
      { objective: "O4", q: "Mgbe ị na-arịọ AI ka o kewaa ebumnuche ka ọ bụrụ nzọụkwụ, tinye:", options: ["Ebumnuche ahụ, ụbọchị ahụ na ego ị nwere ike itinye n'ezie", "Okwuntughe ụlọ akụ gị", "Nọmba Social Security gị", "Ọ dịghị ihe"], answer: 0, why: "Ozi doro anya na-enweta atụmatụ dị n'ezie." },
      { objective: "O5", q: "Usoro kwa izu kwesịrị inwe:", options: ["Naanị ọrụ", "Oge maka ebumnuche tinyere oge ezumike na oge ezinụlọ", "Enweghị ezumike", "Naanị oge ihuenyo"], answer: 1, why: "Usoro dị n'ezie na-edozi ebumnuche na ezumike." },
      { objective: "O5", q: "Ugboro ole ka ị kwesịrị ilele usoro gị?", options: ["Ọ dịghị mgbe", "Otu ugboro n'afọ", "Kwa izu", "Naanị mgbe ihe mebiri"], answer: 2, why: "Ilele ya kwa izu na-eme ka ị gbanwee ihe na-arụghị ọrụ." },
      { objective: "O6", q: "Kedu ezi ebe maka ajụjụ gbasara ụgwọ VA gị?", options: ["Mgbasa ozi na-apụta na mberede", "Ebe mkparịta ụka ọ bụla n'ịntanetị", "Naanị chatbot AI", "VA na va.gov"], answer: 3, why: "VA bụ isi iyi gọọmentị maka enyemaka VA." },
      { objective: "O6", q: "Ihe ọmụmụ a ọ na-atụ aro ebe itinye ego?", options: ["Mba; gwa onye ọkachamara ruru eru", "Ee, crypto", "Ee, stock ọ bụla", "Ee, pension advance"], answer: 0, why: "Ihe ọmụmụ a anaghị enye ndụmọdụ itinye ego." },
      { objective: "O6", q: "Mmadụ na-ekwe nkwa uru buru ibu, ngwa ngwa n'itinye ego. Ị kwesịrị:", options: ["Itinye ego ozugbo", "Ịkpachara anya ma lelee ya n'aka onye ọkachamara ruru eru", "Inye ha ihe nbanye akaụntụ gị", "Ịgbazite ego iji tinye ya"], answer: 1, why: "Nkwa uru buru ibu, ngwa ngwa bụ ihe ịdọ aka na ntị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 5, 9, 10, 12, 15, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Budget kwa ọnwa", objective: "O2", notYet: "Ego na-abata, ihe dị mkpa, ihe ị chọrọ, nchekwa ego ma ọ bụ ịkwụ ụgwọ ị ji adịghị, ma ọ bụ mkpokọta ezighi ezi.", meets: "Akụkụ ise ahụ niile dị, nwere nọmba e mere ka ọ dị mfe, e lelekwara mkpokọta n'igwe mgbakọ.", exceeds: "Onye na-amụ ihe nwere ike ikwu ihe ọ chọrọ ọ ga-ebu ụzọ belata ma ego dị ntakịrị." },
      { name: "Ahịrị mgbanwe ụgwọ ọnwa", objective: "O2", notYet: "O nweghị ahịrị maka ihe na-efu ego ma ọ bụ ụgwọ ọnwa na-agbanwe mgbe ọrụ agha gasịrị.", meets: "Otu ahịrị na-egosi ihe a kwụrụ maka gị n'ọrụ agha ma ọ bụ mgbanwe ụgwọ ọnwa mgbe ọrụ agha gasịrị.", exceeds: "Onye na-amụ ihe dere ebe o lelere ụgwọ ọnwa ikpeazụ ma ọ bụ enyemaka ya." },
      { name: "Usoro kwa izu", objective: "O5", notYet: "Usoro ahụ nwere oge na-erughị atọ maka ebumnuche ma ọ bụ enweghị ilele budget.", meets: "Oge atọ maka ebumnuche, tinyere ilele budget kwa izu, na oge ezumike na oge ezinụlọ.", exceeds: "Usoro ahụ dị na kalenda ekwentị ma ọ bụ e bipụtara ya, nwekwa ụbọchị a kara aka maka ilele ya." },
      { name: "Enweghị ozi nzuzo", objective: "O1", notYet: "Atụmatụ ahụ ma ọ bụ otu prompt nwere nọmba akaụntụ, kaadị ma ọ bụ njirimara.", meets: "Enweghị nọmba akaụntụ ma ọ bụ ozi nzuzo ebe ọ bụla.", exceeds: "Onye na-amụ ihe nwere ike igosi prompt ndị o ji nọmba e mere ka ọ dị mfe dee." },
      { name: "Ajụjụ maka isi iyi gọọmentị", objective: "O6", notYet: "Enweghị ajụjụ ego, ma ọ bụ e kpọghị aha isi iyi ọ bụla.", meets: "Otu ajụjụ ego doro anya na ezi isi iyi gọọmentị ma ọ bụ onye ndụmọdụ maka ya.", exceeds: "Onye na-amụ ihe ahazila oge ma ọ bụ kpọtụrụla isi iyi ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha ka na-eji budget na usoro kwa izu ha ụbọchị 30 ka e mesịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe kpọtụrụ isi iyi ego gọọmentị n'efu, dị ka Military OneSource ma ọ bụ VA, n'ime ụbọchị 30",
      "Ndị na-amụ ihe kwuru na ha hụrụ ma zere ozi ma ọ bụ onyinye aghụghọ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ kọmputa nwere ịntanetị, na igwe mgbakọ",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Akwụkwọ, app ndetu ma ọ bụ spreadsheet maka budget, na kalenda ekwentị maka usoro",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Tupu omume ọ bụla, gosi otu esi eme ka nọmba dị mfe ma chetara ndị na-amụ ihe ka ha ghara ide nọmba akaụntụ, kaadị, Social Security ma ọ bụ VA file n'ime AI mgbe ọ bụla.",
      "Enyela ndụmọdụ itinye ego; zipu mkpebi ego gaa Military OneSource, VA ma ọ bụ onye ọkachamara ruru eru.",
      "Jiri ozi aghụghọ e chepụtara echepụta na klas; arịọla ndị na-amụ ihe mgbe ọ bụla ka ha kesaa ezi ozi nwere ozi nzuzo.",
      "Jiri rubric tụọ akara atụmatụ ikpeazụ nke otu peeji, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Di ma ọ bụ nwunye, ma ọ bụ ndị ezinụlọ, nwere ike isonye na nkuzi budget ma ọ bụrụ na onye na-amụ ihe chọrọ."
    ]
  }
};
