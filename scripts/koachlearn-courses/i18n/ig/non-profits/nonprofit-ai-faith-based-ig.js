"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-ai-faith-based.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-faith-based-ig",
  lang: "ig",
  translationOf: "nonprofit-ai-faith-based",
  category: "Non Profits",
  name: "AI maka Otu Okpukpere Chi",
  skills: "Ịtọ iwu maka iji AI n'ozi Chineke, Ide ọkwa na akwụkwọ mmemme, Ịhazi usoro ndị ọrụ afọ ofufo na mmemme, Ichebe ozi nzuzo ndị otu, Ịlele ihe AI dere maka okwukwe na ụda olu",
  outcome: "iji ngwa enyemaka AI n'efu dee ọkwa izu ụka na usoro ndị ọrụ afọ ofufo maka ọgbakọ gị ma ọ bụ mmemme okpukpere chi gị, idebe ozi ndị otu na nzuzo, na ilele ihe ọ bụla o dere ka o kwekọọ n'okwukwe gị na otu i si ekwu okwu.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị fada na ndị pastọ, ndị imam, ndị rabbi, ndị isi ozi, ndị ọrụ ọfịs chọọchị na ndị ọrụ afọ ofufo na chọọchị, ụlọ alakụba, ụlọ nsọ, ụlọ ekpere ndị Juu na otu enyemaka okpukpere chi.",
    "Ị ga-amụta ebe AI nwere ike ichekwa oge n'ọrụ ọfịs nke ozi Chineke (ọkwa, akwụkwọ mmemme, usoro oge, akwụkwọ akụkọ, arịrịọ enyemaka ego) na ebe a na-ekwesịghị iji ya: nlekọta ndị otu, mkparịta ụka nzuzo na mkpebi gbasara ndị mmadụ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee ederede otu peeji \"Otu anyị si eji AI\" maka ndị isi ọgbakọ gị, wee jiri ngwa enyemaka AI dee ọkwa izu a na usoro ndị ọrụ afọ ofufo nwere ihe nnọchi kama aha. Lelee ha abụọ maka eziokwu, okwukwe na ụda olu, ma gosi ihe ị gbanwere.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị fada na ndị pastọ, ndị imam, ndị rabbi, ndị isi ozi, ndị ọrụ ọfịs chọọchị na ndị ọrụ afọ ofufo na chọọchị, ụlọ alakụba, ụlọ nsọ, ụlọ ekpere ndị Juu na otu enyemaka okpukpere chi.",
    startingPoint: "Ha na-eji aka ede ọkwa, akwụkwọ mmemme na usoro ndị ọrụ afọ ofufo kwa izu. Ọtụtụ anụla maka AI ma ha ejibeghị ya, ụfọdụ na-echegbukwa onwe ha maka nzuzo na maka AI ịghọtahie okwukwe ha.",
    gap: "Ide ihe n'ọfịs na-ewe ọtụtụ awa ndị isi ga-achọ inye ndị mmadụ. Ndị na-amụ ihe kwesịrị iji AI dee ihe mbụ na atụmatụ ma debe arịrịọ ekpere na ozi ndị otu na nzuzo, ma hụ na ihe ọ bụla e dere kwekọrọ n'omenala okpukpere chi ha, eziokwu na otu ha si ekwu okwu.",
    constraints: [
      "Nzuzo: aha, arịrịọ ekpere, ndekọ onyinye, ahụike, ozi ụmụaka na ozi kọntaktị anaghị abanye n'AI",
      "Nlekọta ndị otu, ndụmọdụ na mkpebi gbasara ndị mmadụ na-anọgide n'aka ndị a tụkwasịrị obi",
      "A na-elele akwụkwọ nsọ na nkuzi n'akwụkwọ nsọ nke ọgbakọ ahụ n'onwe ya",
      "Iwu ụtụ isi gbasara ndọrọ ndọrọ ọchịchị na-emetụta ha (IRS Publication 1828)",
      "Okwu dị mfe; teknụzụ dị ọhụrụ nye ọtụtụ ndị ọrụ afọ ofufo"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ ozi Chineke", action: "ikewa ha n'ụzọ abụọ: \"AI nwere ike ide nke a\" na \"naanị ndị mmadụ\"", standard: "ma hapụ nlekọta ndị otu, arịrịọ ekpere na mkpebi gbasara ndị mmadụ n'aka ndị mmadụ" },
    { id: "O2", condition: "Maka ndị isi ọgbakọ gị", action: "ide ederede otu peeji \"Otu anyị si eji AI\" nke na-aza ajụjụ anọ nke iwu", standard: "n'okwu dị mfe, dị njikere ka ndị isi gị, ndị okenye ma ọ bụ kansụl gị kwenye na ya" },
    { id: "O3", condition: "Mgbe e nyere gị arịrịọ nwere ozi ndị otu", action: "ide ya ọzọ dị ka prompt nchekwa nwere ihe nnọchi", standard: "n'enweghị aha, arịrịọ ekpere, ndekọ onyinye, ahụike ma ọ bụ ozi kọntaktị" },
    { id: "O4", condition: "Mgbe e nyere gị mmemme izu a", action: "ide prompt doro anya ma dee ọkwa izu ụka n'olu ọgbakọ gị", standard: "ebe gị onwe gị lelere ụbọchị, oge na ebe ọ bụla" },
    { id: "O5", condition: "Mgbe e nyere gị ọrụ, ụbọchị na ọnụ ọgụgụ ndị mmadụ ọrụ ọ bụla chọrọ", action: "iji AI mee usoro ndị ọrụ afọ ofufo nwere ihe nnọchi kama aha", standard: "ebe ị na-etinye ezi aha naanị n'akwụkwọ nke gị" },
    { id: "O6", condition: "Mgbe e nyere gị ihe AI dere", action: "ilele ya maka okwukwe, eziokwu na ụda olu ma dozie ihe na-adabaghị", standard: "ebe i lelere akwụkwọ nsọ n'akwụkwọ nsọ nke gị tupu onye nyocha a họpụtara akwado ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Iji AI nke ọma n'ozi Chineke",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ebe AI na-enyere ọgbakọ aka, na ebe ọ na-adịghị",
          minutes: 4,
          goal: "Kewaa ọrụ ozi Chineke n'ụzọ abụọ: \"AI nwere ike ide nke a\" na \"naanị ndị mmadụ\".",
          text: [
            "Ngwa enyemaka AI, dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini, bụ mmemme kọmputa ị na-akparịta ụka na ya n'okwu nkịtị. Ọ na-ede ihe mbụ, ndepụta na atụmatụ n'ime sekọnd ole na ole.",
            "N'ọgbakọ, ọ bara uru maka ọrụ ọfịs: ọkwa izu ụka, ederede akwụkwọ mmemme, akwụkwọ akụkọ, atụmatụ mmemme, ozi ịkpọ ndị ọrụ afọ ofufo, akwụkwọ ekele nye ndị na-enye onyinye na ihe mbụ nke arịrịọ enyemaka ego (grant).",
            "O kwesịghị ịnọchi ndị mmadụ na nlekọta ndị otu, arịrịọ ekpere, ndụmọdụ, nkwupụta mmehie, esemokwu n'etiti ndị otu, ma ọ bụ mkpebi gbasara onye na-eje ozi ma ọ bụ onye na-enweta enyemaka. Ihe ndị ahụ chọrọ onye a tụkwasịrị obi, ọ bụghị mmemme kọmputa."
          ],
          words: [["Ngwa enyemaka AI", "mmemme kọmputa ị na-akparịta ụka na ya site n'ide ihe ma ọ bụ ikwu okwu; ọ na-edeghachi azịza."], ["Nlekọta ndị otu", "nlekọta onye isi okpukpere chi na-enye ndị otu: ileta ha, ndụmọdụ, nkasi obi na ekpere."]],
          slides: [
            { title: "AI nwere ike ide", bullets: ["Ọkwa na akwụkwọ mmemme", "Akwụkwọ akụkọ na atụmatụ mmemme", "Ozi ịkpọ ndị ọrụ afọ ofufo na akwụkwọ ekele"] },
            { title: "Naanị ndị mmadụ", bullets: ["Nlekọta ndị otu na ndụmọdụ", "Arịrịọ ekpere na mkparịta ụka nzuzo", "Mkpebi gbasara ndị otu na onye na-enweta enyemaka"] },
            { title: "Iwu dị mfe icheta", bullets: ["AI na-enyere aka n'okwu na atụmatụ", "Ndị mmadụ na-elekọta obi na mkpebi"] }
          ],
          tryIt: "Depụta ọrụ iri ọfịs ọgbakọ gị na-arụ n'otu ọnwa. Kaa nke ọ bụla akara \"AI nwere ike ide\" ma ọ bụ \"naanị ndị mmadụ\".",
          youCanNow: "ịkpọ aha ọrụ ozi Chineke ebe AI nwere ike inyere aka na ndị ga-anọgide n'aka ndị mmadụ.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọrụ ọfịs dabara adaba maka AI n'ọgbakọ?", options: ["Ide ozi ịkpọ ndị ọrụ afọ ofufo", "Ịnụ nkwupụta mmehie", "Ikpebi onye na-enweta enyemaka", "Idozi esemokwu n'etiti ndị otu"], answer: 0, why: "AI na-enyere aka n'ide ihe n'ọfịs; nlekọta ndị otu na mkpebi chọrọ onye a tụkwasịrị obi." },
            { objective: "O1", q: "Otu onye otu jụrụ ma AI nwere ike inye ya ndụmọdụ maka iru újú ya. Gịnị ka ị ga-asị?", options: ["Ee, AI dị mgbe niile", "Mba; nke ahụ chọrọ onye a tụkwasịrị obi, ọ bụghị mmemme kọmputa", "Ee, ma ọ bụrụ na o hotara akwụkwọ nsọ", "Naanị n'abalị"], answer: 1, why: "Ndụmọdụ na nlekọta ndị otu chọrọ onye a tụkwasịrị obi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide iwu dị mfe maka iji AI",
          minutes: 5,
          goal: "Dee obere ederede \"Otu anyị si eji AI\" nke ndị isi gị nwere ike ikwenye na ya.",
          text: [
            "Tupu ndị ọrụ na ndị ọrụ afọ ofufo amalite iji AI, kwenyenụ n'iwu ole na ole dị mfe. Nke a na-echekwa onye ọ bụla ma na-egbochi ihe ijuanya.",
            "Ezigbo ederede na-aza ajụjụ anọ: Gịnị ka anyị nwere ike iji AI mee? Gịnị ka a na-agaghị etinye n'AI ma ọlị (aha, arịrịọ ekpere, ndekọ onyinye, ahụike ma ọ bụ ihe gbasara ezinụlọ)? Onye na-elele ihe AI dere tupu e kesaa ya? Ànyị na-agwa ndị mmadụ mgbe AI nyere aka ide ihe?",
            "Mee ka ọ bụrụ otu peeji n'okwu dị mfe. Kesaa ya na ndị isi gị, ndị okenye ma ọ bụ kansụl ozi gị, ma lelee ya ọzọ otu ugboro n'afọ."
          ],
          steps: ["Depụta ọrụ AI nwere ike inyere aka.", "Depụta ihe a na-agaghị ede n'AI ma ọlị.", "Kpọọ aha onye na-elele ihe ọ bụla AI dere tupu e kesaa ya.", "Kpebie ma unu ga-ekwu na AI nyere aka, na otu unu ga-esi kwuo ya.", "Mee ka ndị isi gị kwenye ma tọọ ụbọchị nlele kwa afọ."],
          words: [["Iwu", "obere ndepụta iwu e kwenyere na ya nke onye ọ bụla na-agbaso."], ["Nlele", "ịgụ ihe e dere nke ọma na idozi ya tupu e kesaa ya."]],
          slides: [
            { title: "Ihe mere iwu ji dị mkpa", bullets: ["Onye ọ bụla maara ihe a nabatara", "Ntụkwasị obi ndị otu na-anọgide"] },
            { title: "Ajụjụ anọ a ga-aza", bullets: ["Gịnị ka anyị nwere ike iji AI mee?", "Gịnị anaghị abanye n'AI?", "Onye na-elele ihe e dere?", "Ànyị na-ekwu na AI nyere aka?"] },
            { title: "Mee ka ọ dị mfe", bullets: ["Otu peeji, okwu dị mfe", "Ndị isi gị kwenyere na ya", "A na-elele ya otu ugboro n'afọ"] }
          ],
          tryIt: "Dee ederede otu peeji \"Otu anyị si eji AI\" nke ọgbakọ gị site n'ịza ajụjụ anọ ahụ. Ị nwere ike ịrịọ ngwa enyemaka AI ka o mee ka ihe i dere doo anya karịa, mana gị onwe gị dee iwu ndị ahụ.",
          youCanNow: "ide obere iwu maka iji AI n'ọgbakọ ma ọ bụ mmemme okpukpere chi.",
          quickCheck: [
            { objective: "O2", q: "Kedu ajụjụ ederede \"Otu anyị si eji AI\" na-aza?", options: ["Ego ole pastọ na-akpata", "Ndị otu na-enye onyinye kacha", "Onye na-elele ihe AI dere tupu e kesaa ya", "Ụlọ ọrụ AI kacha mma"], answer: 2, why: "Ederede ahụ na-aza ihe AI bụ maka ya, ihe anaghị abanye, onye na-elele na ma unu na-agwa ndị mmadụ." },
            { objective: "O2", q: "Ndị otu ozi gị dere iwu maka AI. Gịnị ka ị ga-eme ọzọ?", options: ["Zoo ya", "Mee ka ọ bụrụ peeji iri", "Hapụ onye ọrụ afọ ofufo ọ bụla ka ọ gbanwee ya", "Kesaa ya na ndị isi gị, ndị okenye ma ọ bụ kansụl gị ma lelee ya kwa afọ"], answer: 3, why: "Ndị isi na-akwado ederede ahụ, a na-elelekwa ya otu ugboro n'afọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Idebe ozi ndị otu na nzuzo",
          minutes: 5,
          goal: "Gbanwee arịrịọ nwere ozi nzuzo ka ọ bụrụ prompt nchekwa nwere ihe nnọchi.",
          text: [
            "Ndị otu na-atụkwasị gị obi n'ihe nzuzo: arịrịọ ekpere, ọrịa, nsogbu ezinụlọ, ego ha na-enye, adreesị na nọmba ekwentị. Ọtụtụ ngwa AI nwere ike idebe ihe ị dere, ya mere were prompt dị ka kaadị nzipu ozi (postcard) onye ọ bụla nwere ike ịgụ.",
            "Edela aha, arịrịọ ekpere, ndekọ onyinye, ozi ahụike, ozi ụmụaka ma ọ bụ ozi kọntaktị n'ime ngwa enyemaka AI. Jiri ihe nnọchi dị ka [member name] ma ọ bụ [amount], ma mesịa dejupụta ha n'onwe gị, n'akwụkwọ nke gị.",
            "Ọ bụrụ na otu gị na-akwụ ụgwọ maka ụdị azụmahịa ma ọ bụ agụmakwụkwọ nke ngwa AI, jụọ onye na-ahụ maka ya kedu ntọala nzuzo ya. Ọbụlagodi mgbe ahụ, wepụ okwu nlekọta ndị otu nke nzuzo."
          ],
          steps: ["Dee ihe ị chọrọ ka AI nyere gị aka na ya.", "Gụọ ya ka ịchọta aha, ego, ahụike, ezinụlọ na ozi kọntaktị.", "Dochie nke ọ bụla n'ihe nnọchi dị ka [member name].", "Zipu prompt ahụ, wee dejupụta ezi ozi n'onwe gị na mpụga ngwa AI ahụ."],
          words: [["Ihe nnọchi", "ihe na-anọchi anya dị ka [member name] nke ị ga-eji ezi ozi dochie mgbe e mesịrị."], ["Nzuzo", "ozi onwe onye e kesara n'ntụkwasị obi nke a na-agaghị agwa onye ọzọ."]],
          slides: [
            { title: "Were prompt dị ka postcard", bullets: ["Chee na onye ọzọ nwere ike ịgụ ya", "Debe ntụkwasị obi ndị otu gị"] },
            { title: "Edela ihe ndị a n'AI", bullets: ["Aha na ozi kọntaktị", "Arịrịọ ekpere, ahụike ma ọ bụ nsogbu ezinụlọ", "Ndekọ onyinye na ego", "Ozi ụmụaka"] },
            { title: "Jiri ihe nnọchi", bullets: ["[member name], [amount], [date]", "Mesịa dejupụta ezi ozi n'onwe gị"] }
          ],
          tryIt: "Were arịrịọ a: \"Dee kaadị ọdịmma maka Nwanne Nwaanyị Mary Jones, onye a wara obi ya ahụ n'ụlọ ọgwụ County Hospital.\" Dee ya ọzọ site n'iji ihe nnọchi ka ozi nzuzo ọ bụla ghara ịbanye n'AI, wee zipu ya.",
          youCanNow: "iwepụ ozi nzuzo ndị otu na prompt ma jiri ihe nnọchi kama ha.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere a ga-eji were prompt dị ka postcard?", options: ["Ọtụtụ ngwa AI nwere ike idebe ihe ị dere", "Postcard dị mkpụmkpụ", "AI na-ebipụta prompt gị", "Ọ na-eme ka azịza ahụ dị nwayọọ karịa"], answer: 0, why: "Ọtụtụ ngwa AI nwere ike idebe ihe ị dere, ya mere chee na mmadụ nwere ike ịgụ ya." },
            { objective: "O3", q: "Ị chọrọ ka AI nyere gị aka ide kaadị ọdịmma maka onye otu nọ n'ụlọ ọgwụ. Gịnị ka ị ga-ede?", options: ["Aha onye otu ahụ na ọrịa ya", "\"Dee obere kaadị ọdịmma maka [member name] site n'ọgbakọ anyị.\"", "Ọnụ ụlọ ya n'ụlọ ọgwụ na ekwentị ya", "Arịrịọ ekpere ezinụlọ ya"], answer: 1, why: "Jiri ihe nnọchi ma mesịa dejupụta ezi ozi n'onwe gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iji AI nke ọma n'ozi Chineke",
        questions: [
          { objective: "O1", q: "Kedu ọrụ dabara adaba maka ngwa enyemaka AI n'ọfịs chọọchị?", options: ["Ide ọkwa izu ụka", "Inye onye otu na-eru újú ndụmọdụ", "Ikpebi onye na-enweta ego enyemaka ndị nọ ná mkpa", "Ịza arịrịọ ekpere nzuzo"], answer: 0, why: "Ọkwa bụ ide ihe n'ọfịs; ndị ọzọ chọrọ onye a tụkwasịrị obi." },
          { objective: "O2", q: "Gịnị ka ederede \"Otu anyị si eji AI\" kwesịrị inwe?", options: ["Nọmba ekwentị onye otu ọ bụla", "Ndepụta ọnụ ahịa ụlọ ọrụ AI", "Ihe a nwere ike iji AI mee na ihe a na-agaghị etinye na ya ma ọlị", "Okwuntughe pastọ"], answer: 2, why: "Iwu na-ekwu ihe a nabatara na ihe ga-anọ na mpụga." },
          { objective: "O3", q: "Onye ọrụ afọ ofufo chọrọ itinye ndepụta ekpere n'AI ka o \"hazie ya\". Gịnị ka ị ga-asị?", options: ["Mee ya, ọ na-echekwa oge", "Tinye naanị ọkara ya", "Tinye ya ma mesịa hichapụ mkparịta ụka ahụ", "Mba. Arịrịọ ekpere bụ nzuzo ma ha anaghị abanye n'AI"], answer: 3, why: "Arịrịọ ekpere bụ ihe nzuzo, a gaghị edekwa ha na ngwa AI." },
          { objective: "O3", q: "Gịnị bụ ihe nnọchi?", options: ["Oche e debere n'ụlọ ụka", "Ihe na-anọchi anya dị ka [member name] nke ị ga-ejupụta mgbe e mesịrị", "Ụdị app AI", "Okwuntughe"], answer: 1, why: "Ihe nnọchi na-enye gị ohere inweta enyemaka n'ekesaghị ozi nzuzo." },
          { objective: "O2", q: "Onye kwesịrị ilele ihe AI dere tupu e kesaa ya n'ọgbakọ?", options: ["Ọ dịghị onye, AI na-eziri ezi mgbe niile", "AI n'onwe ya", "Onye a kpọrọ aha nke ndị isi gị kwenyere na ya", "Ọbịa ọ bụla"], answer: 2, why: "Iwu unu na-akpọ aha onye na-elele ihe e dere ka e wee jide mperi." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI rụọ ọrụ maka ọgbakọ gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide ọkwa na akwụkwọ mmemme",
          minutes: 5,
          goal: "Jiri prompt doro anya dee ọkwa izu ụka n'olu ọgbakọ gị.",
          text: [
            "Prompt doro anya na-eweta ihe mbụ ka mma. Gwa AI ihe ị chọrọ, ntakịrị banyere ọgbakọ gị (enweghị ozi nzuzo), na otu ị chọrọ ka e dee ya.",
            "Dịka ọmụmaatụ: \"Dee ọkwa dị mkpụmkpụ, nwee obi ọma, maka akwụkwọ mmemme Sọnde anyị. Mmemme: ebe nri Satọde 9 nke ụtụtụ ruo ehihie, otu ndị ntorobịa Wenezde 6 nke mgbede, ndị ukwe chọrọ olu abụọ ọzọ. Ụda olu enyi na nnabata, ihe na-erughị okwu 120.\"",
            "Wee rịọ maka mgbanwe: \"Mee ka ọ dị mkpụmkpụ.\" \"Tinye otu ahịrị na-anabata ndị ọbịa.\" \"Jiri okwu dị mfe karịa.\" Gị onwe gị lelee ụbọchị, oge na ebe ọ bụla tupu e zipu ya."
          ],
          steps: ["Depụta mmemme ndị ahụ na ụbọchị, oge na ebe ha.", "Kwuo ụda olu ị chọrọ na ogologo ya.", "Rịọ AI maka ihe mbụ.", "Rịọ maka otu mgbanwe ma ọ bụ abụọ.", "Lelee ụbọchị, oge na ebe ọ bụla na kalenda gị."],
          words: [["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI iji rịọ ihe."], ["Ụda olu", "otu ihe e dere si ada: nwee obi ọma, nke nkwanye ugwu, nke ọṅụ, nke nwayọọ."]],
          slides: [
            { title: "Prompt doro anya nwere", bullets: ["Ihe ị chọrọ", "Mmemme, ụbọchị na ebe", "Ụda olu na ogologo"] },
            { title: "Wee mee ka ọ ka mma", bullets: ["\"Mee ka ọ dị mkpụmkpụ.\"", "\"Tinye nnabata maka ndị ọbịa.\"", "\"Jiri okwu dị mfe karịa.\""] },
            { title: "Tupu e zipu ya", bullets: ["Lelee ụbọchị na oge ọ bụla", "Lelee ebe na kọntaktị ọ bụla", "Hụ na ọ dị ka okwu gị"] }
          ],
          tryIt: "Dee prompt maka ezi ọkwa izu a n'ọgbakọ ma ọ bụ mmemme gị. Nweta ihe mbụ, rịọ maka otu mgbanwe, wee lelee ụbọchị na oge ọ bụla na kalenda gị.",
          youCanNow: "iji AI dee ọkwa ọgbakọ ma lelee ya tupu e kesaa ya.",
          quickCheck: [
            { objective: "O4", q: "Kedu ihe atọ prompt ọkwa doro anya na-agwa AI?", options: ["Aha, ekwentị na adreesị ndị otu", "Naanị okwu \"ọkwa\"", "Ihe ị chọrọ, ntakịrị banyere ọgbakọ gị, na otu ị chọrọ ka e dee ya", "Okwuntughe gị na nbanye gị"], answer: 2, why: "Gwa AI ihe ị chọrọ, banyere ọgbakọ gị (enweghị ozi nzuzo) na otu e kwesịrị isi dee ya." },
            { objective: "O4", q: "Ihe mbụ ahụ dị mma mana ọ dị ogologo karịa maka akwụkwọ mmemme. Gịnị ka ị ga-arịọ?", options: ["\"Tinye mmemme ndị ọzọ.\"", "\"Jiri okwu siri ike karịa.\"", "\"Dee ya n'asụsụ ọhụrụ.\"", "\"Mee ka ọ dị mkpụmkpụ.\""], answer: 3, why: "Rịọ maka mgbanwe dị ka \"Mee ka ọ dị mkpụmkpụ\" ruo mgbe ọ dabara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịhazi usoro ndị ọrụ afọ ofufo na mmemme",
          minutes: 5,
          goal: "Jiri AI mee usoro ndị ọrụ afọ ofufo nwere ọrụ na ihe nnọchi, ọ bụghị aha.",
          text: [
            "Ndị na-edu ndị mmadụ n'oche, ndị na-anabata ndị mmadụ, ndị na-enyere aka n'ebe ụmụaka, otu ebe nri na ndị ọkwọ ụgbọala niile chọrọ usoro oge. AI nwere ike ime ndepụta ọrụ na ụbọchị ka ọ bụrụ tebụl doro anya n'ime sekọnd ole na ole.",
            "Nye ya ọrụ, ụbọchị na ọnụ ọgụgụ ndị mmadụ ọrụ ọ bụla chọrọ, ma jiri [Volunteer 1], [Volunteer 2] kama ezi aha. Wee detuo tebụl ahụ n'akwụkwọ gị ma ọ bụ spreadsheet gị, tinyekwa aha n'ebe ahụ.",
            "AI nwekwara ike ime ndepụta nlele maka mmemme, dịka ọmụmaatụ maka mmemme mmụgharị (revival), nri anyasị maka ịchịkọta ego ma ọ bụ mmemme ahụike obodo: ihe a ga-eme izu isii, izu abụọ na otu ụbọchị tupu ya."
          ],
          steps: ["Depụta ọrụ ndị ahụ na ọnụ ọgụgụ ndị mmadụ nke ọ bụla chọrọ.", "Depụta ụbọchị ndị ahụ.", "Rịọ AI maka tebụl na-eji ihe nnọchi [Volunteer 1], [Volunteer 2].", "Detuo ya n'akwụkwọ nke gị ma tinye ezi aha n'ebe ahụ.", "Rịọ maka ndepụta nlele mmemme ma ọ bụrụ na ị na-ahazi mmemme."],
          words: [["Tebụl", "ozi e hazịrị n'ahịrị na kọlụm."], ["Ndepụta nlele", "ndepụta ọrụ ị na-aka akara ka ị na-arụcha ha."]],
          slides: [
            { title: "AI nwere ike ime", bullets: ["Usoro ndị ọrụ afọ ofufo dị ka tebụl", "Ndepụta nlele mmemme kwa izu", "Ozi ncheta maka ndị ọrụ afọ ofufo"] },
            { title: "Wepụ aha", bullets: ["Jiri [Volunteer 1], [Volunteer 2]", "Tinye ezi aha n'akwụkwọ nke gị"] },
            { title: "Ndepụta nlele mmemme", bullets: ["Izu isii tupu ya", "Izu abụọ tupu ya", "Ụbọchị tupu ya na ụbọchị ahụ"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI maka usoro izu anọ maka ọrụ atọ (dịka ọmụmaatụ onye nnabata, onye na-edu ndị mmadụ n'oche, onye na-elekọta ụmụaka) nwere mmadụ abụọ n'otu, na-eji ihe nnọchi. Detuo ya n'akwụkwọ nke gị.",
          youCanNow: "iji AI mee usoro ndị ọrụ afọ ofufo na ndepụta nlele mmemme ma debe aha na nzuzo.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ị na-enye AI ka o mee usoro ndị ọrụ afọ ofufo?", options: ["Ọrụ, ụbọchị na ọnụ ọgụgụ ndị mmadụ ọrụ ọ bụla chọrọ", "Nọmba ekwentị onye ọrụ afọ ofufo ọ bụla", "Ndekọ onyinye ndị otu", "Naanị adreesị chọọchị"], answer: 0, why: "Nye ọrụ, ụbọchị na ọnụ ọgụgụ ndị a chọrọ, jiri ihe nnọchi kama aha." },
            { objective: "O5", q: "Ị na-ahazi nri anyasị maka ịchịkọta ego. Gịnị ka AI nwere ike imere gị?", options: ["Ndepụta ndị ọbịa ikpeazụ nwere aha", "Ndepụta nlele ihe a ga-eme izu isii, izu abụọ na otu ụbọchị tupu ya", "Ego ndị na-enye onyinye nyere", "Mkpebi gbasara onye na-eje ozi"], answer: 1, why: "AI nwere ike ime ndepụta nlele mmemme dabere n'oge tupu mmemme ahụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ilele ihe e dere maka okwukwe, eziokwu na ụda olu",
          minutes: 5,
          goal: "Lelee ihe AI dere ma dozie ihe ọ bụla na-ekwekọghị n'omenala gị, eziokwu ma ọ bụ olu gị.",
          text: [
            "AI nwere ike ime mperi. O nwere ike ịhọtahie akwụkwọ nsọ, iji okwu sitere n'okpukpere chi ọzọ, ịkpọhie ụbọchị nsọ, ma ọ bụ ịda ka ihe siri ike. O nwekwara ike ichepụta eziokwu na-ada ka ezi ihe.",
            "Gụọ ihe ọ bụla e dere maka ihe atọ: okwukwe (ọ kwekọrọ n'ihe anyị kwere na okwu anyị?), eziokwu (ihe e hotara, ụbọchị na eziokwu ziri ezi?), na ụda olu (ọ dị ka okwu anyị, ọ na-akwanyekwa onye ọ bụla ùgwù?). Lelee akwụkwọ nsọ na nkuzi n'akwụkwọ nsọ nke gị, ọ bụghị n'AI.",
            "Ọ bụrụ na otu gị bụ otu ọrụ ebere anaghị akwụ ụtụ isi, ihe AI dere ekwesịghị ịkwado ma ọ bụ imegide ndị na-azọ ọkwa ndọrọ ndọrọ ọchịchị. IRS kọwara iwu maka chọọchị na otu okpukpere chi na Publication 1828; jụọ ndị isi gị ma ọ bụ onye ndụmọdụ ma ọ bụrụ na obi abụọ dị gị."
          ],
          steps: ["Gụọ maka okwukwe: ọ kwekọrọ n'ihe anyị kwere na okwu anyị?", "Lelee ihe ọ bụla e hotara, akwụkwọ nsọ na ụbọchị n'isi iyi nke gị.", "Gụpụta ya n'olu dị elu maka ụda olu.", "Dozie ihe na-ezighi ezi, ma dee ihe ị gbanwere.", "Mee ka onye nyocha e kwenyere na ya kwado ya."],
          words: [["Hallucination", "mgbe AI dere ihe na-ada ka eziokwu mana ọ bụ ihe e chepụtara."], ["Anaghị akwụ ụtụ isi (tax-exempt)", "otu IRS nabatara dị ka nke anaghị akwụ ụtụ isi ego mba (federal income tax), nwere iwu ọ ga-agbaso."]],
          sources: [{ name: "IRS Publication 1828, Tax Guide for Churches and Religious Organizations", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" }],
          slides: [
            { title: "AI nwere ike ịghọtahie okwukwe", bullets: ["Akwụkwọ nsọ e hotahiere", "Okwu sitere n'okpukpere chi ọzọ", "Ụbọchị nsọ ezighi ezi ma ọ bụ eziokwu e chepụtara"] },
            { title: "Nlele atọ", bullets: ["Okwukwe: ọ kwekọrọ n'ihe anyị kwere", "Eziokwu: ihe e hotara, ụbọchị, eziokwu", "Ụda olu: ọ dị ka anyị, nwee nkwanye ugwu"] },
            { title: "Nọgide n'ime iwu", bullets: ["Akwadola ndị na-azọ ọkwa ndọrọ ndọrọ ọchịchị", "Lee IRS Publication 1828", "Jụọ ndị isi gị mgbe obi abụọ dị"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee ederede \"Otu anyị si eji AI\" gị, wee jiri AI dee ọkwa izu a na usoro ndị ọrụ afọ ofufo nwere ihe nnọchi. Lelee ha abụọ maka okwukwe, eziokwu na ụda olu, ma gosi ihe ị gbanwere.",
          youCanNow: "ilele ihe AI dere maka okwukwe, eziokwu na ụda olu tupu ọ ruo ọgbakọ gị.",
          quickCheck: [
            { objective: "O6", q: "Kedu nlele atọ dị n'ihe ọmụmụ a?", options: ["Ogologo, ụdị mkpụrụ edemede na agba", "Ọnụ ahịa, ụbọchị na ebe", "Okwukwe, eziokwu na ụda olu", "Nsụpe, ụtọ asụsụ na ọsọ"], answer: 2, why: "Gụọ ihe ọ bụla e dere maka okwukwe, eziokwu na ụda olu." },
            { objective: "O6", q: "Ihe AI dere kpọhiere ụbọchị nsọ. Gịnị ka ị ga-eme?", options: ["Hapụ ya; AI maara ụbọchị", "Jụọ AI ma o ji n'aka", "Wepụ ụbọchị nsọ ahụ na kalenda", "Lelee ya na kalenda okpukpere chi gị ma dozie ya"], answer: 3, why: "AI nwere ike ịkpọhie ụbọchị nsọ, ya mere gị onwe gị lelee ma dozie ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI rụọ ọrụ maka ọgbakọ gị",
        questions: [
          { objective: "O4", q: "Kedu prompt ga-enye ihe mbụ kacha mma maka akwụkwọ mmemme?", options: ["\"Dee ọkwa okwu 100 nwere obi ọma: ebe nri Sat 9-12, ntorobịa Wed 6 pm, ndị ukwe chọrọ olu.\"", "\"akwụkwọ mmemme\"", "\"ihe chọọchị\"", "\"dee ihe niile\""], answer: 0, why: "Ọ na-enye mmemme, ụda olu na ogologo." },
          { objective: "O5", q: "Kedu otu aha kwesịrị isi pụta n'usoro ndị ọrụ afọ ofufo AI mere?", options: ["Dị ka ihe nnọchi dị ka [Volunteer 1]", "Aha zuru ezu na nọmba ekwentị", "Naanị aha mbụ na adreesị", "Aha na adreesị email"], answer: 0, why: "Ihe nnọchi na-ewepụ ozi ndị ọrụ afọ ofufo na ngwa AI." },
          { objective: "O6", q: "AI hotara akwụkwọ nsọ n'ọkwa gị. Gịnị ka ị ga-eme?", options: ["Tụkwasị ya obi", "Jụọ AI ma o ji n'aka", "Lelee ihe e hotara n'akwụkwọ nsọ nke gị", "Hichapụ ọkwa ahụ niile"], answer: 2, why: "AI nwere ike ịhọtahie; lelee isi iyi nke gị." },
          { objective: "O6", q: "Kedu nke bụ otu n'ime nlele atọ dị n'ihe ọmụmụ a?", options: ["Ọsọ", "Ụda olu", "Ọnụ ahịa", "Nha mkpụrụ edemede"], answer: 1, why: "Okwukwe, eziokwu na ụda olu bụ nlele atọ ahụ." },
          { objective: "O6", q: "Ebee ka chọọchị nwere ike ịmụta iwu IRS maka otu okpukpere chi?", options: ["Ozi na soshal midia", "Naanị ngwa enyemaka AI", "Blọọgụ ọ bụla", "IRS Publication 1828"], answer: 3, why: "Publication 1828 bụ ntuziaka ụtụ isi IRS maka chọọchị na otu okpukpere chi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Otu Okpukpere Chi",
    questions: [
      { objective: "O1", q: "Kedu ọrụ kwesịrị ịnọ n'aka ndị mmadụ, ọ bụghị AI?", options: ["Ide ndepụta nlele mmemme", "Inye onye otu nọ ná nsogbu ndụmọdụ", "Ide ihe mbụ nke akwụkwọ akụkọ", "Ime tebụl ndị ọrụ afọ ofufo"], answer: 1, why: "Nlekọta ndị otu chọrọ onye a tụkwasịrị obi." },
      { objective: "O1", q: "AI kacha enyere aka n'ozi Chineke maka:", options: ["Ide ihe n'ọfịs na ịhazi atụmatụ", "Ịnụ nkwupụta mmehie", "Ikpebi onye na-enweta enyemaka", "Idebe ihe nzuzo ekpere"], answer: 0, why: "AI na-ede okwu na atụmatụ; ndị mmadụ na-elekọta nlekọta na mkpebi." },
      { objective: "O1", q: "Iwu dị mfe icheta bụ:", options: ["AI na-ekpebi, ndị mmadụ na-eso", "AI na-ahụ maka ihe niile", "Agụla ihe AI dere", "AI na-enyere aka n'okwu na atụmatụ; ndị mmadụ na-elekọta obi na mkpebi"], answer: 3, why: "Nke ahụ na-ahapụ nlekọta na ikpe ikpe n'aka ndị mmadụ." },
      { objective: "O2", q: "Ogologo ole ka ederede \"Otu anyị si eji AI\" kwesịrị ịdị?", options: ["Peeji iri ise", "Otu okwu", "Ihe dị ka otu peeji n'okwu dị mfe", "Ogologo ọ bụla AI chọrọ"], answer: 2, why: "Mkpụmkpụ na dị mfe pụtara na ndị mmadụ ga-agụ ma gbasoo ya." },
      { objective: "O2", q: "Onye kwesịrị ikwenye n'iwu AI?", options: ["Naanị ụlọ ọrụ AI", "Otu ọbịa", "Ndị isi gị, ndị okenye ma ọ bụ kansụl ozi gị", "Ọ dịghị onye"], answer: 2, why: "Nkwenye ndị isi na-enye iwu ahụ ike." },
      { objective: "O2", q: "Ugboro ole ka i kwesịrị ilele iwu AI gị?", options: ["Ihe dị ka otu ugboro n'afọ", "Ọ dịghị mgbe", "Kwa awa", "Naanị ma ọ bụrụ na AI jụrụ"], answer: 0, why: "Ngwa na-agbanwe, ya mere nlele kwa afọ na-eme ka iwu dịrị ọhụrụ." },
      { objective: "O3", q: "Kedu nke a na-agaghị ede n'ime ngwa enyemaka AI MA ỌLỊ?", options: ["\"Mee ka ọ dị mkpụmkpụ\"", "Ndepụta ụbọchị mmemme", "\"Jiri ụda olu nwere obi ọma\"", "Arịrịọ ekpere onye otu nwere aha ya"], answer: 3, why: "Arịrịọ ekpere na aha bụ ihe nzuzo." },
      { objective: "O3", q: "Gịnị mere a ga-eji were prompt dị ka postcard?", options: ["Postcard dị mkpụmkpụ", "Onye ọzọ nwere ike ịgụ ihe ị dere", "AI na-agụ naanị postcard", "Ọ dị ngwa karịa"], answer: 1, why: "Ngwa AI nwere ike idebe ihe ị dere." },
      { objective: "O3", q: "Ị chọrọ akwụkwọ ekele maka onyinye onye nyere. Kedu otu ị ga-esi dee prompt n'enweghị nsogbu?", options: ["Tinye aha ya na ego ahụ", "Jiri [donor name] na [amount] ma dejupụta ha n'onwe gị", "Tinye ndekọ onyinye ahụ", "Tinye adreesị ya"], answer: 1, why: "Ihe nnọchi na-edebe ndekọ onyinye na nzuzo." },
      { objective: "O3", q: "Chọọchị gị na-akwụ ụgwọ maka atụmatụ AI nke azụmahịa. Ị kwesịrị itinye okwu nlekọta ndị otu nke nzuzo n'ime ya?", options: ["Ee, a kwụrụ ụgwọ ya", "Naanị na Sọnde", "Naanị ma ọ bụrụ na ọ dị mkpụmkpụ", "Mba, wepụ okwu nlekọta ndị otu nke nzuzo"], answer: 3, why: "Nlekọta nzuzo na-anọ na mpụga AI ọbụlagodi na atụmatụ a na-akwụ ụgwọ." },
      { objective: "O4", q: "Prompt ọkwa doro anya nwere:", options: ["Mmemme, ụbọchị, ụda olu na ogologo", "Naanị okwu \"ọkwa\"", "Nọmba ekwentị ndị otu", "Okwuntughe pastọ"], answer: 0, why: "Ozi ndị ahụ na-enye AI ohere ide ihe mbụ bara uru." },
      { objective: "O4", q: "Mgbe i nwetara ihe mbụ, kedu ajụjụ nsochi bara uru?", options: ["\"Nke a bụ ndepụta ndị otu anyị.\"", "\"Kpebie mmefu ego anyị.\"", "\"Tinye otu ahịrị na-anabata ndị ọbịa.\"", "\"Zipu ya onye ọ bụla ugbu a.\""], answer: 2, why: "Ọ na-arịọ maka mmezi doro anya." },
      { objective: "O4", q: "Tupu e zipu ọkwa, ị ga-:", options: ["Tinye ihe AI dere ọzọ", "Wepụ ụbọchị niile", "Ghara ịgụ ya", "Lelee ụbọchị, oge na ebe ọ bụla"], answer: 3, why: "AI nwere ike ikwuhie eziokwu." },
      { objective: "O5", q: "Ebee ka ị na-etinye ezi aha ndị ọrụ afọ ofufo?", options: ["N'ime prompt AI", "N'akwụkwọ nke gị mgbe i detuchara tebụl ahụ", "N'ozi ọha", "Ọ dịghị ebe"], answer: 1, why: "Aha na-anọ n'akwụkwọ nke gị, ọ bụghị na ngwa AI." },
      { objective: "O5", q: "Ndepụta nlele mmemme na-edepụtakarị ọrụ:", options: ["Dabere n'ego ndị otu na-akpata", "N'usoro na-enweghị usoro", "Dabere n'oge tupu mmemme ahụ, dị ka izu isii na izu abụọ", "Naanị mgbe mmemme ahụ gachara"], answer: 2, why: "Ịgụ azụ site n'ụbọchị ahụ na-eme ka atụmatụ gaa n'ihu nke ọma." },
      { objective: "O6", q: "AI jiri okwu sitere n'okpukpere chi ọzọ n'ihe o dere. Ị kwesịrị:", options: ["Idozi ya ka o kwekọọ n'okpukpere chi gị", "Ịhapụ ya", "Ịrịọ ndị otu ka ha tụọ vootu", "Ibipụta ya otú ahụ"], answer: 0, why: "Nlele okwukwe na-ahụ na o kwekọrọ n'ihe unu kwere na okwu unu." },
      { objective: "O6", q: "Gịnị bụ hallucination n'AI?", options: ["Ihe AI dere na-ada ka eziokwu mana ọ bụ ihe e chepụtara", "Ọhụụ n'oge ekpere", "Ịntanetị na-aga nwayọọ", "Ụdị app"], answer: 0, why: "AI nwere ike ichepụta eziokwu na-ada ka ezi ihe." },
      { objective: "O6", q: "Ịgụpụta ihe e dere n'olu dị elu na-enyere gị aka ilele:", options: ["Ọsọ ịntanetị", "Ọnụ ahịa AI", "Ụda olu", "Ihu igwe"], answer: 2, why: "Ịnụ ya na-egosi ma ọ dị ka okwu gị." },
      { objective: "O6", q: "Ihe AI dere maka chọọchị anaghị akwụ ụtụ isi kwadoro onye na-azọ ọkwa ndọrọ ndọrọ ọchịchị. Ị kwesịrị:", options: ["Ibipụta ya", "Iwepụ ya ma lelee IRS Publication 1828 ma ọ bụ jụọ ndị isi gị", "Itinye onye nke abụọ na-azọ ọkwa", "Ileghara ya anya"], answer: 1, why: "Otu ọrụ ebere anaghị akwụ ụtụ isi nwere iwu IRS gbasara mkpọsa ndọrọ ndọrọ ọchịchị." },
      { objective: "O6", q: "Onye na-enye nkwado ikpeazụ tupu e kesaa ihe AI dere?", options: ["AI", "Onye ọ bụla nọ nso", "Ọ dịghị onye", "Onye nyocha ndị isi gị kwenyere na ya"], answer: 3, why: "Onye nyocha a kpọrọ aha na-ejide mperi ma na-echekwa ntụkwasị obi." }
    ]
  },
  // ---- ADDIE: Ntụle ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 10, 13, 15] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ederede \"Otu anyị si eji AI\"", objective: "O2", notYet: "Ederede ahụ ekwughị ihe a na-agaghị etinye n'AI, ma ọ bụ onye na-elele.", meets: "Otu peeji n'okwu dị mfe nke zara ajụjụ anọ ahụ niile.", exceeds: "Ọ na-akpọ aha ndị isi ga-akwado ya na ụbọchị nlele kwa afọ." },
      { name: "Ọkwa doro anya", objective: "O4", notYet: "Ụbọchị, oge ma ọ bụ ebe ezighi ezi ma ọ bụ adịghị.", meets: "E dere ọkwa izu a site na prompt doro anya, e lelere ozi ọ bụla.", exceeds: "O nwere obi ọma na nnabata, ọ dịkwa ka okwu ọgbakọ ahụ." },
      { name: "Usoro ndị ọrụ afọ ofufo nzuzo", objective: "O5", notYet: "Ezi aha ma ọ bụ ozi kọntaktị banyere n'AI.", meets: "Usoro nwere ọrụ, ụbọchị na ihe nnọchi; e tinyere aha n'akwụkwọ nke gị.", exceeds: "O nwekwara ndepụta nlele mmemme dabere n'oge tupu mmemme ahụ." },
      { name: "Nlele okwukwe, eziokwu na ụda olu", objective: "O6", notYet: "Ihe e hotahiere, ụbọchị ezighi ezi ma ọ bụ okwu sitere n'okpukpere chi ọzọ ka dị n'ime ya.", meets: "E lelere ihe abụọ ahụ e dere maka okwukwe, eziokwu na ụda olu, e gosikwara mgbanwe.", exceeds: "E lelere akwụkwọ nsọ n'akwụkwọ nsọ nke gị, ma dee ebe e si hota ya." },
      { name: "Nzuzo ndị otu", objective: "O3", notYet: "E dere arịrịọ ekpere, ndekọ onyinye ma ọ bụ ozi onye otu ọ bụla n'AI.", meets: "Ọ bụ naanị ihe nnọchi ka e jiri na prompt ọ bụla.", exceeds: "Nwere ike igosi prompt nchekwa ahụ n'akụkụ arịrịọ mbụ ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ọgbakọ ndị isi ha nabatara ederede \"Otu anyị si eji AI\" n'ime ụbọchị 60 (nnyocha nsochi)",
      "Awa ọfịs e chekwara kwa izu n'ọkwa na usoro oge, dị ka ndị ọrụ kwuru",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka otu enyemaka n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Ozi mmemme izu a na ndepụta ọrụ ndị ọrụ afọ ofufo, n'enweghị aha",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Mee nnọkọ ahụ mgbe pastọ, imam, rabbi ma ọ bụ onye isi ozi nọ ya, ka e wee kwenye n'iwu ahụ ọnụ.",
      "Ejila ezi arịrịọ ekpere, ndekọ onyinye ma ọ bụ ozi ndị otu mee omume; jiri ihe nnọchi.",
      "Weta akwụkwọ nsọ nke gị ka ndị na-amụ ihe nwee ike ilele akwụkwọ nsọ ọ bụla AI hotara.",
      "Chetara ọgbakọ ndị anaghị akwụ ụtụ isi iwu gbasara ndọrọ ndọrọ ọchịchị dị na IRS Publication 1828.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
