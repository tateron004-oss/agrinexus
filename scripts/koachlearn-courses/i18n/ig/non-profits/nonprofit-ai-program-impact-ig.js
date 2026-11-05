"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-ai-program-impact.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-program-impact-ig",
  lang: "ig",
  translationOf: "nonprofit-ai-program-impact",
  category: "Non Profits",
  name: "AI maka Ịrụ Mmemme na Igosi Mgbanwe O Wetara",
  skills: "Ịkwado obere logic model, Ịhọrọ ihe a ga-eji tụọ mgbanwe, Iji AI dee obere nnyocha ndị sonyere, Ịchịkọta nsonaazụ na-enweghị aha, Ide akụkọ mgbanwe otu peeji",
  outcome: "iji AI kwado obere logic model maka otu mmemme, dee obere nnyocha ndị sonyere, chịkọta nsonaazụ na-enweghị aha, ma mee ha ka ha bụrụ akụkọ mgbanwe otu peeji nke eziokwu maka ndị isi (board) na ndị na-enye ego.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị njikwa mmemme, ndị nhazi na ndị ọrụ afọ ofufo n'ụlọ ọrụ na-anaghị achọ uru (nonprofit) na nke okpukpe, ndị na-eme mmemme ma kwesịrị igosi mgbanwe mmemme ndị ahụ na-eweta.",
    "Ị ga-akwado mmemme n'otu peeji, họrọ ihe ị ga-atụ, jiri AI dee nnyocha ziri ezi, chịkọta nsonaazụ n'egosighị ozi nzuzo onye ọ bụla, ma dee akụkọ mgbanwe nke ndị na-enye ego na ndị isi gị ga-atụkwasị obi.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ọ na-ewukwa otu akụkụ nke akụkọ mgbanwe gị. Obere nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Maka otu ezi mmemme, dee akụkọ mgbanwe otu peeji nwere: obere logic model (inputs, ọrụ, outputs, outcomes), ihe abụọ a ga-eji tụọ outcomes, obere nnyocha ndị sonyere i ji AI dee, nchịkọta nsonaazụ na-enweghị aha (ezi data ma ọ bụ data omume na-enweghị aha), otu akụkọ e kesara site n'ikike onye ahụ, na otu ihe mmụta nke eziokwu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị njikwa mmemme, ndị nhazi na ndị ọrụ afọ ofufo n'ụlọ ọrụ nonprofit na nke okpukpe, ndị na-eme mmemme ma kwesịrị igosi mgbanwe mmemme ndị ahụ na-eweta.",
    startingPoint: "Ha na-eme mmemme ma na-agụ ọnụ ọgụgụ dị ka nri e nyere ma ọ bụ nnọkọ e mere. Ọtụtụ ewubeghị logic model, tụọ outcomes tupu na mgbe e mechara, ma ọ bụ dee akụkọ mgbanwe.",
    gap: "Ndị na-enye ego na ndị isi na-arịọkwu outcomes, ọ bụghị naanị ọnụ ọgụgụ. Ndị na-amụ ihe chọrọ ụzọ dị mfe nke eziokwu iji kwado, tụọ ma kọọ mgbanwe, na-eji AI echekwa oge ma na-echebe ozi nzuzo ndị sonyere, ma hụ na nọmba ọ bụla bụ eziokwu.",
    constraints: [
      "Obere otu ndị ọrụ nwere obere oge maka ọrụ data",
      "Nzuzo: nnyocha bụ nke afọ ofufo na nke na-enweghị aha; enweghị aha, ozi ahụike ma ọ bụ ozi mbata (immigration) belụsọ na ọ dị mkpa n'ezie ma e debe ya nke ọma",
      "Ọ bụ naanị ọnụ ọgụgụ, ọ bụghị azịza onwe onye, na-abanye na ngwa AI",
      "AI na-emehie na mgbakọ, ya mere a na-elele pasent ọ bụla na spreadsheet",
      "Ngwa n'efu dị ka Google Forms ma ọ bụ Microsoft Forms"
    ],
    prerequisites: "\"Mmalite AI maka Otu Na-adịghị Achọ Uru\", ma ọ bụ ahụmahụ n'iji ngwa enyemaka AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta nsonaazụ mmemme", action: "ịmata ndị bụ outputs na ndị bụ outcomes", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị nkọwa ọha nke otu mmemme", action: "iji enyemaka AI wuo logic model otu peeji nwere inputs, ọrụ, outputs na outcomes", standard: "ma wepụ ihe ọ bụla unu anaghị eme n'ezie" },
    { id: "O3", condition: "Mgbe e nyere gị otu outcome", action: "ịhọrọ ihe abụọ dị mfe otu gị nwere ike ịnakọta iji tụọ ya, a jụrụ tupu na mgbe e mechara", standard: "nke bụ eziokwu ma dabara oge ndị ọrụ na ndị ọrụ afọ ofufo gị" },
    { id: "O4", condition: "Mgbe e nyere gị ihe ị ga-eji tụọ outcomes", action: "iji AI dee obere nnyocha ndị sonyere na-enweghị aha, nwere ajụjụ 5 ruo 8", standard: "n'enweghị ajụjụ na-eduhie mmadụ, ma nwee ndetu na ọ bụ nke afọ ofufo" },
    { id: "O5", condition: "Mgbe e nyere gị ọnụ ọgụgụ nnyocha na-enweghị aha", action: "iji AI chịkọta nsonaazụ ma lelee pasent ọ bụla n'onwe gị", standard: "n'enweghị ihe ọ bụla nwere ike igosi onye mmadụ bụ" },
    { id: "O6", condition: "Mgbe e nyere gị logic model gị na nsonaazụ e lelere", action: "ide akụkọ mgbanwe otu peeji nwere mkpa ahụ, ihe unu mere, ihe gbanwere, otu akụkọ na otu ihe mmụta", standard: "n'enweghị nọmba ma ọ bụ nkwupụta na-adịghị na data gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkwado ihe a ga-atụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Outputs na outcomes: gịnị bụ ọdịiche?",
          minutes: 4,
          goal: "Mata ọdịiche dị n'etiti outputs na outcomes maka otu n'ime mmemme gị.",
          text: [
            "Outputs na-agụ ihe unu mere: nri 300 e nyere, nnọkọ nkuzi 40, ndị ọrụ afọ ofufo 25 a zụrụ. Outcomes na-akọwa ihe gbanwere na ndụ ndị mmadụ: ezinụlọ anaghịzi echegbu onwe ha banyere nri, ụmụ akwụkwọ mere ka akara ọgụgụ ha ka mma, ndị ọrụ afọ ofufo nwere obi ike iduzi ndị ọzọ.",
            "Ndị na-enye ego na ndị isi na-arịọkwu outcomes, ọ bụghị naanị outputs. Outcomes na-egosi na ebumnuche unu na-arụ ọrụ.",
            "AI nwere ike inyere gị aka iche ya echiche. Jụọ: \"Mmemme anyị [nkọwa ọha] na-eme [ọrụ]. Depụta outputs nwere ike ịdị na outcomes dị nso nwere ike ịdị maka ndị sonyere.\" Wee họrọ ndị bụ eziokwu maka mmemme gị."
          ],
          words: [["Output", "ọnụ ọgụgụ ihe mmemme gị mere, dị ka nri e nyere."], ["Outcome", "mgbanwe na ndụ ndị mmadụ n'ihi mmemme gị."], ["Impact (mgbanwe ukwu)", "mgbanwe ka ukwuu, nke na-adị ogologo oge, ọrụ gị na-eweta n'obodo."]],
          slides: [
            { title: "Outputs na-agụ ihe unu mere", bullets: ["Nri 300 e nyere", "Nnọkọ nkuzi 40", "Ndị ọrụ afọ ofufo 25 a zụrụ"] },
            { title: "Outcomes na-egosi ihe gbanwere", bullets: ["Ezinụlọ anaghịzi echegbu onwe ha banyere nri", "Ụmụ akwụkwọ na-eme ka akara ọgụgụ ha ka mma", "Ndị ọrụ afọ ofufo dị njikere iduzi"] },
            { title: "Rịọ AI ka o chepụta echiche", bullets: ["Outputs na outcomes nwere ike ịdị", "Gị na-ahọrọ ihe bụ eziokwu"] }
          ],
          tryIt: "Maka otu mmemme, dee outputs atọ na outcomes abụọ. Jiri AI chepụta echiche, wee debe naanị ndị bụ eziokwu maka mmemme gị.",
          youCanNow: "ịmata ọdịiche dị n'etiti outputs na outcomes maka mmemme nke gị.",
          quickCheck: [
            { objective: "O1", q: "\"Ndị ọrụ afọ ofufo 25 a zụrụ\" bụ ọmụmaatụ nke gịnị?", options: ["Output", "Outcome", "Input", "Nnyocha"], answer: 0, why: "Outputs na-agụ ihe unu mere; outcomes na-akọwa ihe gbanwere maka ndị mmadụ." },
            { objective: "O1", q: "Akụkọ gị na-edepụta naanị nri e nyere. Onye na-enye ego na-arịọ outcomes. Gịnị ka ị ga-agbakwunye?", options: ["Ọnụ ọgụgụ nri ọzọ", "Ihe gbanwere maka ezinụlọ, dị ka ịghara ichegbu onwe ha banyere nri", "Ọnụ ahịa nri ahụ", "Ndepụta ndị ọrụ afọ ofufo"], answer: 1, why: "Outcomes na-akọwa ihe gbanwere maka ndị mmadụ n'ihi mmemme ahụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iwu obere logic model",
          minutes: 5,
          goal: "Jiri enyemaka AI wuo logic model otu peeji maka otu mmemme.",
          text: [
            "Logic model bụ foto otu peeji nke otu mmemme gị si arụ ọrụ: inputs (ihe unu na-etinye), ọrụ (ihe unu na-eme), outputs (ihe unu na-agụ) na outcomes (ihe na-agbanwe).",
            "Jụọ AI: \"Mee tebụl logic model maka mmemme a: [nkọwa ọha]. Kọlụm: inputs, ọrụ, outputs, outcomes dị nso, outcomes ogologo oge. Mee ka igbe ọ bụla dị mkpụmkpụ.\"",
            "Wee dozie ya ka ọ dabara eziokwu. Wepụ ihe ọ bụla unu anaghị eme. Logic model bụ atụmatụ ị nwere ike ịgbachitere, ọ bụghị ndepụta ọchịchọ."
          ],
          steps: ["Kọwaa mmemme ahụ n'ahịrịokwu ọha atọ.", "Rịọ AI maka tebụl logic model nwere kọlụm ise.", "Wepụ ihe ọ bụla unu anaghị eme n'ezie.", "Lelee na outcome ọ bụla jikọrọ na otu ọrụ."],
          words: [["Logic model", "tebụl otu peeji na-egosi inputs, ọrụ, outputs na outcomes."], ["Input", "ihe unu na-etinye na mmemme: ndị ọrụ, ndị ọrụ afọ ofufo, ego, ebe."]],
          slides: [
            { title: "Logic model na-egosi", bullets: ["Inputs: ihe unu na-etinye", "Ọrụ: ihe unu na-eme", "Outputs: ihe unu na-agụ", "Outcomes: ihe na-agbanwe"] },
            { title: "Rịọ AI maka tebụl", bullets: ["Kọlụm ise", "Igbe dị mkpụmkpụ"] },
            { title: "Mee ka ọ bụrụ eziokwu", bullets: ["Wepụ ihe unu anaghị eme", "Outcome ọ bụla jikọrọ na otu ọrụ"] }
          ],
          tryIt: "Jiri AI wuo tebụl logic model maka mmemme gị, wee dezie ya ruo mgbe igbe ọ bụla bụ eziokwu.",
          youCanNow: "iwu obere logic model nke eziokwu maka otu mmemme.",
          quickCheck: [
            { objective: "O2", q: "Na logic model, gịnị bụ ọrụ (activities)?", options: ["Ihe unu na-agụ", "Ihe na-agbanwe", "Ihe unu na-eme", "Ihe unu na-etinye"], answer: 2, why: "Ọrụ bụ ihe unu na-eme; inputs na-abanye, a na-agụ outputs, outcomes bụ ihe na-agbanwe." },
            { objective: "O2", q: "Logic model AI dere nwere outcome ogologo oge unu enweghị ụzọ iru. Gịnị ka ị ga-eme?", options: ["Debe ya; ndị na-enye ego hụrụ ebumnuche ukwu n'anya", "Mee ka ọ ka ukwuu", "Detuo ya na mmemme ọ bụla", "Wepụ ya ka model ahụ dabara eziokwu"], answer: 3, why: "Logic model bụ atụmatụ ị nwere ike ịgbachitere, ọ bụghị ndepụta ọchịchọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhọrọ ihe a ga-eji tụọ outcomes",
          minutes: 5,
          goal: "Họrọ ihe abụọ i nwere ike ịnakọta n'ezie iji tụọ outcomes.",
          text: [
            "Ihe ntụ (measure) bụ otu ị ga-esi mara na outcome mere. Maka \"ezinụlọ anaghịzi echegbu onwe ha banyere nri\", ihe ntụ nwere ike ịbụ: pasent ezinụlọ kwuru na ha chegbuchaghị onwe ha banyere nri ịgwụ, a jụrụ mgbe ha debanyere aha na mgbe ọnwa atọ gachara.",
            "Ezigbo ihe ntụ dị mfe, otu gị nwere ike ịnakọta ya, ọ bụkwa eziokwu. Ịtụnyere tupu na mgbe e mechara siri ike karịa ịjụ naanị otu ugboro.",
            "Jụọ AI: \"Tụọ aro ụzọ atọ dị mfe obere nonprofit nwere ike isi tụọ outcome a: [outcome]. Anyị nwere [oge ndị ọrụ na ndị ọrụ afọ ofufo].\" Họrọ abụọ unu nwere ike ime n'ezie."
          ],
          steps: ["Họrọ outcomes abụọ site na logic model gị.", "Rịọ AI maka ụzọ dị mfe isi tụọ nke ọ bụla.", "Họrọ ndị otu gị nwere ike ịnakọta.", "Kwado ịtụ tupu na mgbe e mechara mgbe ị nwere ike."],
          words: [["Ihe ntụ (measure)", "otu ị ga-esi mara na outcome mere, ọ na-abụkarị nọmba ma ọ bụ pasent."], ["Tupu na mgbe e mechara", "ịjụ otu ajụjụ ahụ na mmalite na emesịa, iji hụ mgbanwe."]],
          slides: [
            { title: "Ihe ntụ na-egosi outcome", bullets: ["\"Pasent ezinụlọ anaghịzi echegbu onwe ha banyere nri\"", "A jụrụ mgbe ha debanyere aha na mgbe ọnwa atọ gachara"] },
            { title: "Ezigbo ihe ntụ", bullets: ["Dị mfe", "Otu gị nwere ike ịnakọta ya", "Bụ eziokwu"] },
            { title: "Tupu na mgbe e mechara", bullets: ["Siri ike karịa ịjụ otu ugboro", "Na-egosi mgbanwe ka oge na-aga"] }
          ],
          tryIt: "Site n'aro AI, họrọ ihe abụọ ị ga-eji tụọ outcomes maka mmemme gị, ma dee mgbe ị ga-anakọta nke ọ bụla.",
          youCanNow: "ịhọrọ ihe ntụ outcomes nke otu gị nwere ike ịnakọta.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere ịjụ mgbe ha debanyere aha na ọzọ emesịa ji sie ike karịa ịjụ otu ugboro?", options: ["Ọ na-egosi mgbanwe ka oge na-aga", "Ọ dị mkpụmkpụ", "Ọ chọghị oge ndị ọrụ", "Ọ na-ezere iji nọmba"], answer: 0, why: "Ịtụnyere tupu na mgbe e mechara na-egosi mgbanwe." },
            { objective: "O3", q: "AI tụrụ aro ihe ntụ atọ, mana otu chọrọ ọtụtụ awa ndị ọrụ unu na-enweghị. Gịnị ka ị ga-eme?", options: ["Jiri ha atọ n'agbanyeghị", "Họrọ abụọ unu nwere ike ịnakọta n'ezie", "Buru ụzọ were onye ndụmọdụ", "Hapụ ịtụ ihe ọ bụla"], answer: 1, why: "Otu gị kwesịrị inwe ike ịnakọta ezigbo ihe ntụ; họrọ abụọ unu nwere ike ime n'ezie." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkwado ihe a ga-atụ",
        questions: [
          { objective: "O1", q: "Kedu nke bụ outcome?", options: ["Ezinụlọ anaghịzi echegbu onwe ha banyere nri", "Nri 300 e nyere", "Nnọkọ 40 e mere", "Ndị ọrụ afọ ofufo 25 a zụrụ"], answer: 0, why: "Outcomes bụ mgbanwe na ndụ ndị mmadụ." },
          { objective: "O1", q: "Kedu nke bụ output?", options: ["Ụmụ akwụkwọ nwekwuru obi ike", "Nnọkọ nkuzi 40 e mere", "Ezinụlọ ka ahụike", "Ndị ọrụ afọ ofufo dị njikere iduzi"], answer: 1, why: "Outputs na-agụ ihe unu mere." },
          { objective: "O2", q: "Logic model AI dere nwere ọrụ unu anaghị eme. Gịnị ka ị ga-eme?", options: ["Debe ya", "Malite ime ya na nzuzo", "Wepụ ya", "Jụọ onye na-enye ego"], answer: 2, why: "Logic model ga-abụrịrị eziokwu." },
          { objective: "O3", q: "Kedu atụmatụ ntụ kacha sie ike?", options: ["Jụọ otu ugboro na njedebe", "Kọọ nkọ", "Jụọ naanị ndị ọrụ", "Jụọ otu ajụjụ ahụ mgbe ha debanyere aha na mgbe ọnwa atọ gachara"], answer: 3, why: "Tupu na mgbe e mechara na-egosi mgbanwe." },
          { objective: "O2", q: "Gịnị bụ inputs?", options: ["Ihe unu na-etinye: ndị ọrụ, ndị ọrụ afọ ofufo, ego, ebe", "Azịza nnyocha", "Aha ndị na-enye ego", "Outcomes"], answer: 0, why: "Inputs bụ akụ mmemme na-eji." }
        ]
      }
    },
    {
      name: "Isi 2: Ịnakọta, ịchịkọta na ịkọ akụkọ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide obere nnyocha ndị sonyere ziri ezi",
          minutes: 5,
          goal: "Jiri AI dee obere nnyocha na-atụ outcomes gị.",
          text: [
            "Nnyocha (survey) na-ajụ ndị sonyere ihe gbanwere maka ha. Mee ka ọ dị mkpụmkpụ, ihe dị ka ajụjụ 5 ruo 8, n'okwu dị mfe na n'asụsụ ha na-asụ.",
            "Jụọ AI: \"Dee nnyocha ajụjụ 6 na-enweghị aha maka ndị okenye nọ na mmemme nri anyị iji tụọ [outcome]. Jiri okwu dị mfe n'ọkwa klas 6, ọtụtụ ajụjụ nhọrọ, otu ajụjụ mepere emepe. Zere ajụjụ na-eduhie mmadụ.\"",
            "Wepụ ajụjụ ọ bụla na-arịọ aha, ozi ahụike ma ọ bụ ọnọdụ mbata (immigration) belụsọ na ị chọrọ ya n'ezie ma nwee ụzọ n'enweghị nsogbu isi debe ya. Gwa ndị mmadụ na nnyocha ahụ bụ nke afọ ofufo, na ọ gaghị emetụta ọrụ ha na-enweta. Ngwa n'efu dị ka Google Forms ma ọ bụ Microsoft Forms nwere ike ịnakọta azịza."
          ],
          steps: ["Rịọ AI maka obere nnyocha na-enweghị aha na-atụ outcome gị.", "Degharịa ajụjụ ọ bụla na-eduhie mmadụ.", "Wepụ ajụjụ gbasara aha ma ọ bụ ozi nzuzo ị na-achọghị.", "Tinye ndetu na nnyocha ahụ bụ nke afọ ofufo.", "Wuo ya na ngwa fọm n'efu."],
          words: [["Nnyocha (survey)", "otu ajụjụ iji mụta ihe ndị mmadụ chere ma ọ bụ nwetara."], ["Na-enweghị aha (anonymous)", "enweghị aha ma ọ bụ ozi nwere ike igosi onye zara."], ["Ajụjụ na-eduhie (leading question)", "ajụjụ na-akwanye ndị mmadụ n'otu azịza, dị ka \"Olee otu mmemme anyị magburu onwe ya si nyere gị aka?\""]],
          slides: [
            { title: "Mee ka ọ dị mkpụmkpụ", bullets: ["Ajụjụ 5 ruo 8", "Okwu dị mfe, n'asụsụ ndị mmadụ"] },
            { title: "Jụọ AI", bullets: ["Na-enweghị aha, ọkwa klas 6", "Ọtụtụ ajụjụ nhọrọ, otu ajụjụ mepere emepe", "Enweghị ajụjụ na-eduhie mmadụ"] },
            { title: "Chebe ndị mmadụ", bullets: ["Enweghị aha ma ọ bụ ozi nzuzo belụsọ na ọ dị mkpa", "Afọ ofufo: ọ gaghị emetụta ọrụ ha na-enweta"] }
          ],
          tryIt: "Jiri AI dee nnyocha ajụjụ 6 na-enweghị aha maka mmemme gị. Chọta ma degharịa ajụjụ ọ bụla na-eduhie mmadụ, ma tinye ndetu afọ ofufo.",
          youCanNow: "iji enyemaka AI dee obere nnyocha ndị sonyere ziri ezi, na-enweghị aha.",
          quickCheck: [
            { objective: "O4", q: "Ụdị ajụjụ olee ka ọtụtụ n'ime nnyocha ahụ kwesịrị iji?", options: ["Ajụjụ edemede ogologo", "Ajụjụ gbasara aha na adreesị", "Ọtụtụ ajụjụ nhọrọ, nwere otu ajụjụ mepere emepe", "Naanị ee ma ọ bụ mba banyere ndị ọrụ"], answer: 2, why: "Prompt ahụ na-arịọ ọtụtụ ajụjụ nhọrọ na otu ajụjụ mepere emepe." },
            { objective: "O4", q: "Nnyocha AI dere na-ajụ onye ọ bụla sonyere ọrịa ọ na-arịa. Gịnị ka ị ga-eme?", options: ["Debe ya ka i nweta data ọzọ", "Mee ka ọ bụrụ iwu", "Gbakwunye aha ha", "Wepụ ya belụsọ na ị chọrọ ya n'ezie ma nwee ike idebe ya nke ọma"], answer: 3, why: "Wepụ ajụjụ gbasara ahụike ma ọ bụ mbata belụsọ na ọ dị mkpa n'ezie ma e debe ya nke ọma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịchịkọta nsonaazụ n'egosighị onye ọ bụla",
          minutes: 5,
          goal: "Jiri AI chịkọta nsonaazụ nnyocha na-enweghị aha ma lelee nọmba ndị ahụ n'onwe gị.",
          text: [
            "Tupu i jiri AI na nsonaazụ, hụ na data ahụ enweghị aha, ozi nkwurịta okwu ma ọ bụ ihe ọ bụla ọzọ nwere ike igosi onye mmadụ bụ. Ọ bụrụ na a ga-amata obere otu (dịka ọmụmaatụ naanị ndị agadi atọ na-asụ Spanish), jikọta ma ọ bụ wepụ ozi ndị ahụ.",
            "Ngwa fọm gị ma ọ bụ spreadsheet nwere ike ịgụrụ gị azịza. Wee tinye ọnụ ọgụgụ ndị ahụ, ọ bụghị azịza onwe onye, n'ime AI: \"Nke a bụ ọnụ ọgụgụ nnyocha: [ọnụ ọgụgụ]. Chịkọta isi ihe ndị a chọpụtara n'isi okwu 4 ma tụọ aro otu chaatị.\"",
            "Lelee pasent ọ bụla n'onwe gị na spreadsheet. AI na-emehiekarị na mgbakọ. Maka azịza mepere emepe, buru ụzọ gụọ ha n'onwe gị ma wepụ ihe ọ bụla na-egosi onye mmadụ bụ tupu ị rịọ AI ka o kee ha n'isiokwu."
          ],
          steps: ["Wepụ aha na ozi na-egosi onye mmadụ bụ.", "Gụọ azịza na ngwa fọm gị ma ọ bụ spreadsheet.", "Tinye ọnụ ọgụgụ, ọ bụghị azịza onwe onye, n'ime AI.", "Rịọ maka obere nchịkọta na echiche chaatị.", "Lelee pasent ọ bụla n'onwe gị."],
          words: [["Data", "ozi i nakọtara, dị ka azịza nnyocha."], ["Isiokwu (theme)", "echiche na-apụta ugboro ugboro n'azịza mepere emepe."], ["Pasent", "akụkụ n'ime 100, dị ka mmadụ 60 n'ime 100 bụ pasent 60."]],
          slides: [
            { title: "Buru ụzọ chebe ndị mmadụ", bullets: ["Enweghị aha ma ọ bụ ozi nkwurịta okwu", "A ga-amata obere otu: jikọta ha"] },
            { title: "Gụọ, wee chịkọta", bullets: ["Ka spreadsheet gụọ ya", "Nye AI ọnụ ọgụgụ, ọ bụghị azịza onwe onye"] },
            { title: "Lelee mgbakọ", bullets: ["AI na-emehie na mgbakọ", "Lelee pasent ọ bụla n'onwe gị"] }
          ],
          tryIt: "Jiri ọnụ ọgụgụ omume (dịka ọmụmaatụ mmadụ 30 n'ime 40 kwuru na ha anaghịzi echegbu onwe ha banyere nri). Rịọ AI maka nchịkọta isi okwu 4, wee jiri igwe mgbakọ lelee pasent ọ bụla.",
          youCanNow: "iji AI chịkọta nsonaazụ na-enweghị aha ma lelee nọmba ndị ahụ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ị ga-eme azịza mepere emepe tupu ị rịọ AI ka ọ chọta isiokwu?", options: ["Gụọ ha n'onwe gị ma wepụ ihe ọ bụla na-egosi onye mmadụ bụ", "Tinye ha niile otu ha dị", "Hichapụ ha", "Zigara ha onye na-enye ego"], answer: 0, why: "Buru ụzọ gụọ azịza mepere emepe ma wepụ ihe ọ bụla na-egosi onye mmadụ bụ." },
            { objective: "O5", q: "Naanị mmadụ abụọ sonyere bụ ụmụ nwoke karịrị afọ 70, ya mere a ga-amata ha. Gịnị ka ị ga-eme?", options: ["Kọọ ha iche site n'aha ha", "Jikọta ma ọ bụ wepụ ozi ndị ahụ", "Rịọ AI ka ọ kọọ nkọ onye ha bụ", "Tinye azịza ha n'ịntanetị"], answer: 1, why: "Ọ bụrụ na a ga-amata obere otu, jikọta ma ọ bụ wepụ ozi ndị ahụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ide akụkọ mgbanwe otu peeji",
          minutes: 5,
          goal: "Mee logic model gị na nsonaazụ gị ka ha bụrụ akụkọ mgbanwe otu peeji nke eziokwu.",
          text: [
            "Akụkọ mgbanwe (impact report) na-agwa ndị isi gị, ndị na-enye ego na obodo ihe mmemme gị mere na ihe gbanwere. Otu peeji zuru: mkpa ahụ, ihe unu mere (outputs), ihe gbanwere (outcomes nwere nọmba), otu akụkọ, na ihe unu mụtara.",
            "Jụọ AI: \"Site n'iji naanị ozi a, dee akụkọ mgbanwe otu peeji nwere isiokwu ndị a: Mkpa ahụ, Ihe anyị mere, Ihe gbanwere, Otu akụkọ, Ihe anyị mụtara. [logic model gị, ihe ntụ, nsonaazụ e lelere, akụkọ e kesara site n'ikike].\"",
            "Tinye ihe mmụta nke eziokwu. Ndị na-enye ego na-atụkwasị obi n'ụlọ ọrụ na-ekwu ihe na-arụghị ọrụ na otu ha ga-esi mee nke ọma karịa. Ekwela ka AI gbakwunye nọmba ma ọ bụ nkwupụta na-adịghị na data gị mgbe ọ bụla."
          ],
          steps: ["Chịkọta logic model gị, ihe ntụ, nsonaazụ e lelere na akụkọ e nwetara ikike ya.", "Rịọ AI maka akụkọ otu peeji nwere isiokwu ise, na-eji naanị ozi gị.", "Lelee nọmba ọ bụla na spreadsheet gị.", "Tinye ihe mmụta nke eziokwu.", "Ka onye ọrụ ibe gị gụọ ya."],
          words: [["Akụkọ mgbanwe (impact report)", "obere akụkọ banyere ihe mmemme mere na ihe gbanwere."], ["Ihe mmụta (lesson learned)", "ihe ị chọpụtara nke ga-enyere gị aka ime nke ọma karịa n'oge ọzọ."]],
          slides: [
            { title: "Otu peeji, akụkụ ise", bullets: ["Mkpa ahụ", "Ihe anyị mere na ihe gbanwere", "Otu akụkọ", "Ihe anyị mụtara"] },
            { title: "Jụọ AI", bullets: ["\"Site n'iji naanị ozi a...\"", "Isiokwu ise"] },
            { title: "Nọgide na eziokwu", bullets: ["Nọmba ọ bụla si na data gị", "Tinye ihe mmụta", "Onye ọrụ ibe gị na-agụ ya"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee akụkọ mgbanwe otu peeji gị nwere logic model, ihe ntụ abụọ, nnyocha gị, nchịkọta nsonaazụ na-enweghị aha, otu akụkọ e kesara site n'ikike na otu ihe mmụta nke eziokwu.",
          youCanNow: "iji enyemaka AI kwado, tụọ ma kọọ mgbanwe mmemme na-eweta.",
          quickCheck: [
            { objective: "O6", q: "Kedu isiokwu dị n'akụkọ mgbanwe otu peeji nke nkuzi a?", options: ["Okwuntughe ndị na-enye ego", "Ụgwọ ọnwa ndị ọrụ", "Ihe anyị mụtara", "Adreesị ndị sonyere"], answer: 2, why: "Isiokwu ndị ahụ bụ mkpa ahụ, ihe anyị mere, ihe gbanwere, otu akụkọ na ihe anyị mụtara." },
            { objective: "O6", q: "Akụkọ AI dere gbakwunyere \"90% nke ezinụlọ nwetara ọrụ,\" nke na-adịghị na data gị. Gịnị ka ị ga-eme?", options: ["Debe ya; ọ dị mma ịnụ", "Gbanwee ya ka ọ bụrụ 80%", "Bufee ya n'ala peeji", "Wepụ ya, n'ihi na AI agaghị agbakwunye nkwupụta na-adịghị na data gị"], answer: 3, why: "Ekwela ka AI gbakwunye nọmba ma ọ bụ nkwupụta na-adịghị na data gị mgbe ọ bụla." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịnakọta, ịchịkọta na ịkọ akụkọ",
        questions: [
          { objective: "O4", q: "Kedu nke bụ ajụjụ na-eduhie mmadụ?", options: ["\"Ugboro ole ka i chegburu onwe gị banyere nri n'ọnwa gara aga?\"", "\"Olee otu mmemme anyị magburu onwe ya si nyere gị aka?\"", "\"Ụbọchị olee ka ị na-abịa?\"", "\"Kedu otu i si nụ banyere anyị?\""], answer: 1, why: "Ọ na-akwanye ndị mmadụ n'azịza ọma." },
          { objective: "O4", q: "Gịnị ka ị kwesịrị ịgwa ndị mmadụ banyere nnyocha gị?", options: ["Ọ bụ iwu tupu ha enweta ọrụ", "Ọ dịghị ihe", "Ọ bụ nke afọ ofufo, ọ gaghịkwa emetụta ọrụ ha na-enweta", "A ga-etinye azịza ha n'ihu ọha"], answer: 2, why: "Ndị mmadụ kwesịrị inwe onwe ha ịza n'eziokwu ma ọ bụ ghara ịza ma ọlị." },
          { objective: "O5", q: "Gịnị ka ị kwesịrị itinye n'ime AI iji chịkọta nsonaazụ?", options: ["Azịza onwe onye nwere aha", "Nọmba ekwentị ndị sonyere", "Ebe nchekwa data ndị ahịa niile", "Ọnụ ọgụgụ na-enweghị ozi na-egosi onye mmadụ bụ"], answer: 3, why: "Ọnụ ọgụgụ na-echebe nzuzo." },
          { objective: "O5", q: "AI kwuru na 30 n'ime 40 bụ pasent 80. Gịnị ka ị ga-eme?", options: ["Lelee ya n'onwe gị: ọ bụ pasent 75", "Jiri ya", "Mee ya 100", "Wepụ nọmba niile"], answer: 0, why: "AI na-emehie na mgbakọ; 30 n'ime 40 bụ pasent 75." },
          { objective: "O6", q: "Gịnị mere ị ga-eji tinye ihe mmụta n'akụkọ mgbanwe?", options: ["Iji jupụta ohere", "Ndị na-enye ego na-atụkwasị obi n'ụlọ ọrụ na-ekwu eziokwu ma na-emezi onwe ha", "AI chọrọ ya", "Iji zoo nsonaazụ"], answer: 1, why: "Ikwu eziokwu banyere ihe na-arụghị ọrụ na-ewulite ntụkwasị obi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ịrụ Mmemme na Igosi Mgbanwe O Wetara",
    questions: [
      { objective: "O1", q: "Output bụ:", options: ["Mgbanwe na ndụ ndị mmadụ", "Onye na-enye ego", "Ọnụ ọgụgụ ihe mmemme gị mere", "Ajụjụ nnyocha"], answer: 2, why: "Outputs na-agụ ọrụ e mere." },
      { objective: "O1", q: "Outcome bụ:", options: ["Ọnụ ọgụgụ akwụkwọ mgbasa ozi e bipụtara", "Mmefu ego (budget)", "Adreesị ọfịs", "Mgbanwe na ndụ ndị mmadụ n'ihi mmemme gị"], answer: 3, why: "Outcomes bụ mgbanwe maka ndị mmadụ." },
      { objective: "O1", q: "Gịnị mere ndị na-enye ego ji arịọ outcomes?", options: ["Outcomes na-egosi na ebumnuche ahụ na-arụ ọrụ", "Ha dị mfe ịgụ", "Ha dị mkpụmkpụ", "Ndị na-enye ego anaghị achọ nọmba"], answer: 0, why: "Outcomes na-egosi ezi mgbanwe." },
      { objective: "O2", q: "Kedu nke ỌBỤGHỊ akụkụ nke logic model?", options: ["Inputs", "Okwuntughe ndị na-enye ego", "Ọrụ", "Outcomes"], answer: 1, why: "Logic model nwere inputs, ọrụ, outputs na outcomes." },
      { objective: "O2", q: "Logic model kwesịrị ịbụ:", options: ["Ndepụta ọchịchọ", "Ihe nzuzo", "Atụmatụ ị nwere ike ịgbachitere, dabara ihe unu na-eme", "Nke naanị AI dere"], answer: 2, why: "Ọ ga-adabarịrị eziokwu." },
      { objective: "O2", q: "Outcome ọ bụla na logic model kwesịrị ijikọ na:", options: ["Onye na-enye ego", "Akara (logo)", "Ezumike", "Otu ọrụ"], answer: 3, why: "Ọrụ na-eduga na outcomes." },
      { objective: "O3", q: "Ezigbo ihe ntụ bụ:", options: ["Nke dị mfe, a pụrụ ịnakọta, nke eziokwu", "Nke siri ike ma dị oke ọnụ", "Nke a na-enweghị ike ịnakọta", "Nke e chepụtara echepụta"], answer: 0, why: "Otu gị ga-enwerịrị ike ịnakọta ya." },
      { objective: "O3", q: "Ịtụ tupu na mgbe e mechara na-enyere gị aka:", options: ["Izere nnyocha", "Ịhụ mgbanwe ka oge na-aga", "Ịhapụ outcomes", "Izo nsonaazụ"], answer: 1, why: "Ntụnyere na-egosi mgbanwe." },
      { objective: "O4", q: "Ogologo ole ka nnyocha ndị sonyere kwesịrị ịdị?", options: ["Ajụjụ 50", "Otu okwu", "Ihe dị ka ajụjụ 5 ruo 8", "Enweghị oke"], answer: 2, why: "Nnyocha dị mkpụmkpụ na-enweta azịza karịa." },
      { objective: "O4", q: "Nnyocha na-enweghị aha:", options: ["Na-arịọ aha zuru ezu", "Bụ naanị maka ndị ọrụ", "Enweghị ajụjụ", "Enweghị aha ma ọ bụ ozi na-egosi onye zara"], answer: 3, why: "Enweghị aha na-echebe ndị sonyere." },
      { objective: "O4", q: "Kedu ajụjụ nnyocha ị kwesịrị iwepụkarị?", options: ["Ọnọdụ mbata (immigration), belụsọ na ọ dị mkpa n'ezie ma e debe ya nke ọma", "\"Ugboro ole ka ị bịara?\"", "\"Ị nwere mmasị na nnabata?\"", "\"Gịnị ka anyị nwere ike ime ka ọ ka mma?\""], answer: 0, why: "Ozi nzuzo na-etinye ndị mmadụ n'ihe egwu." },
      { objective: "O4", q: "Kedu ngwa n'efu nwere ike ịnakọta azịza nnyocha?", options: ["Igwe mgbakọ", "Google Forms ma ọ bụ Microsoft Forms", "Igwe mbipụta", "Chaja ekwentị"], answer: 1, why: "Ngwa fọm na-anakọta ma na-agụ azịza." },
      { objective: "O5", q: "A ga-amata obere otu na nsonaazụ gị. Ị kwesịrị:", options: ["Ịkpọ aha ha", "Itinye ha n'ihu ọha", "Ijikọta ma ọ bụ wepụ ozi ndị ahụ", "Ileghara ya anya"], answer: 2, why: "Obere otu nwere ike igosi onye mmadụ bụ." },
      { objective: "O5", q: "Onye kwesịrị ịgụ azịza nnyocha?", options: ["AI na-akọ nkọ", "Onye na-enye ego", "Ọ dịghị onye", "Ngwa fọm gị ma ọ bụ spreadsheet"], answer: 3, why: "Spreadsheet na-agụ nke ọma." },
      { objective: "O5", q: "AI na-emehie na mgbakọ, ya mere ị kwesịrị:", options: ["Ilele pasent ọ bụla n'onwe gị", "Ịtụkwasị ya obi", "Iwepụ nọmba niile", "Ịjụ ya ugboro abụọ ma họrọ otu"], answer: 0, why: "Ọ bụ gị na-aza maka nọmba ndị ahụ." },
      { objective: "O5", q: "Isiokwu (theme) n'azịza mepere emepe bụ:", options: ["Usoro agba", "Echiche na-apụta ugboro ugboro", "Ụdị onye na-enye ego", "Aha mmemme"], answer: 1, why: "Isiokwu na-achịkọta azịza mepere emepe." },
      { objective: "O6", q: "Akụkọ mgbanwe kwesịrị ịbụ:", options: ["Peeji 100", "Naanị foto", "Ihe dị ka otu peeji nwere mkpa, ihe unu mere, ihe gbanwere, otu akụkọ na ihe mmụta", "Naanị mmefu ego"], answer: 2, why: "Otu peeji doro anya zuru." },
      { objective: "O6", q: "Kedu prompt na-eme ka akụkọ mgbanwe bụrụ eziokwu?", options: ["\"Mee ka nọmba anyị ka ukwuu.\"", "\"Chepụta akụkọ ihe ịga nke ọma.\"", "\"Gbakwunye ọnụ ọgụgụ na-adọrọ mmasị.\"", "\"Site n'iji naanị ozi a, dee...\""], answer: 3, why: "Ịmachi AI na data gị na-akwụsị nkwupụta e chepụtara echepụta." },
      { objective: "O6", q: "Akụkọ n'akụkọ mgbanwe chọrọ:", options: ["Ikike onye ahụ", "Aha ya zuru ezu na adreesị ya", "Onye a ma ama", "Ọ dịghị ihe"], answer: 0, why: "Akụkọ chọrọ nkwenye onye ahụ." },
      { objective: "O6", q: "Onye kwesịrị ịgụ akụkọ mgbanwe tupu ọ pụọ?", options: ["Ọ dịghị onye", "Onye ọrụ ibe gị", "Naanị AI", "Onye asọmpi"], answer: 1, why: "Onye nke abụọ na-agụ ya na-ahụ mperi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 8, 12, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Logic model", objective: "O2", notYet: "Otu kọlụm adịghị, ma ọ bụ o depụtara ihe mmemme ahụ anaghị eme.", meets: "Inputs, ọrụ, outputs na outcomes, ha niile dabara mmemme ahụ n'eziokwu.", exceeds: "Outcome ọ bụla jikọrọ nke ọma na otu ọrụ." },
      { name: "Ihe ntụ outcomes", objective: "O3", notYet: "Ihe ntụ ndị ahụ bụ outputs, ma ọ bụ a pụghị ịnakọta ha.", meets: "Ihe ntụ outcomes abụọ dị mfe, nke eziokwu, otu ahụ nwere ike ịnakọta.", exceeds: "A na-ajụ ha abụọ tupu na mgbe e mechara iji gosi mgbanwe." },
      { name: "Nnyocha ziri ezi", objective: "O4", notYet: "Ajụjụ na-eduhie mmadụ, ma ọ bụ ọ na-arịọ aha ma ọ bụ ozi nzuzo n'enweghị mkpa.", meets: "Ajụjụ 5 ruo 8 dị mfe, na-enweghị aha, nke afọ ofufo.", exceeds: "E nyere ya n'asụsụ ndị sonyere na-asụ." },
      { name: "Nsonaazụ na-enweghị aha, e lelere", objective: "O5", notYet: "Nsonaazụ nwere ike igosi onye mmadụ bụ, ma ọ bụ otu pasent ezighi ezi.", meets: "Nchịkọta si n'ọnụ ọgụgụ na-enweghị ozi na-egosi onye mmadụ bụ, e lelere pasent ọ bụla.", exceeds: "E kewara azịza mepere emepe n'isiokwu mgbe e wepụchara ozi na-egosi onye mmadụ bụ." },
      { name: "Akụkọ otu peeji nke eziokwu", objective: "O6", notYet: "Otu nọmba ma ọ bụ nkwupụta adịghị na data, ma ọ bụ akụkọ ahụ enweghị ikike.", meets: "Otu peeji nwere mkpa, outputs, outcomes, akụkọ e nwetara ikike ya na ihe mmụta.", exceeds: "Onye ọrụ ibe gụrụ ya, ihe mmụta ahụ na-ekwukwa otu mmemme ahụ ga-esi ka mma." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Mmemme ndị na-anakọta data outcome tupu na mgbe e mechara n'ime ụbọchị 90 (nnyocha nsochi)",
      "Akụkọ mgbanwe e kesara ndị isi ma ọ bụ onye na-enye ego n'ime ụbọchị 90",
      "Ịgbatị grant ma ọ bụ ego ọhụrụ nke ụlọ ọrụ jikọrọ n'akụkọ mgbanwe ha"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị na spreadsheet n'efu",
      "Ngwa enyemaka AI n'efu na Google Forms ma ọ bụ Microsoft Forms",
      "Nkọwa ọha nke otu mmemme, na data omume na-enweghị aha ma ọ bụrụ na ezi data adịbeghị njikere",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Nye data omume na-enweghị aha ka ndị na-amụ ihe nwee ike ịnwale ịchịkọta n'enweghị nsogbu.",
      "Meenụ nkewa outputs na outcomes dị ka egwuregwu otu tupu nnwale mbụ.",
      "Ka ndị na-amụ ihe lelee pasent AI ọnụ na spreadsheet iji hụ ugboro ole ha chọrọ ndozi.",
      "Chetara ndị na-amụ ihe na nnyocha ga-abụrịrị nke afọ ofufo, ọ gakwaghị emetụta ọrụ onye ọ bụla na-enweta.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
