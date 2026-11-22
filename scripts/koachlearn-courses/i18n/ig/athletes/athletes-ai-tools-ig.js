"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-tools-ig",
  lang: "ig",
  translationOf: "athletes-ai-tools",
  category: "Athletes",
  name: "Ngwa AI maka Ndị Egwuregwu",
  skills: "Ịhọrọ ngwa AI kwesịrị ọrụ ọ bụla, Iji ngwa enyemaka AI mee atụmatụ, Ime eserese na Canva, Idebe nọmba egwuregwu na Google Sheets, Ịtụle nzuzo na ọnụ ahịa ngwa",
  outcome: "ịhọrọ ma jiri ngwa AI atọ n'efu mee ezi ọrụ onye egwuregwu: onye na-eme atụmatụ, ngwa ime eserese na mpempe nọmba, ma kpebie ma app ọhụrụ enweghị nsogbu ma ruo eru tupu i debanye aha.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu na ndị nkuzi egwuregwu (coach) na-anụ maka app AI mgbe niile ma chọọ ịmara ndị bara uru n'ezie, na otu esi eji ha.",
    "Ị ga-ewu obere ngwa ọrụ n'efu: ngwa enyemaka AI maka ime atụmatụ na ide ihe, ngwa ime eserese, na mpempe nọmba (spreadsheet) maka idebe nọmba gị. Ị ga-amụtakwa nnyocha dị ngwa maka app ọhụrụ ọ bụla tupu i nye ya ozi gị ma ọ bụ ego gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, nwere ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Wuo ngwa ọrụ gị dị ka onye egwuregwu: jiri ngwa enyemaka AI mee atụmatụ izu na-abịa, mee otu eserese ụbọchị egwuregwu na Canva, ma hazie Google Sheet na-edebe otu nọmba n'oge mmega ahụ ise. Wee mee nnyocha app nwere ajụjụ ise n'otu app egwuregwu ọhụrụ ma dee ma ị ga-eji ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị, mahadum na klọb, na ndị coach na-arụ ọrụ ha, ndị na-anụ maka app AI ma chọọ ịmara ndị bara uru n'ezie.",
    startingPoint: "Ha na-eji smartphone kwa ụbọchị maka ozi, mgbasa ozi ọha (social media) na vidiyo. Ọtụtụ anwaala ngwa enyemaka AI otu ugboro ma ọ bụ ugboro abụọ, mana ole na ole na-eji ngwa ime eserese, mpempe nọmba ma ọ bụ nnyocha nzuzo n'ebumnuche.",
    gap: "A na-ere ndị egwuregwu ọtụtụ app na-ekwe nkwa ihe ọma, ha na-enyekarị ozi ahụ ha ma ọ bụ ego n'eleleghị anya. Obere ngwa ọrụ n'efu e ji nke ọma na-echekwa oge n'ime atụmatụ, n'itinye ihe n'ịntanetị na n'idebe nọmba, nnyocha app dị ngwa na-echebekwa ozi ha, ego ha na ikike ha isonye n'egwuregwu.",
    constraints: [
      "Okwu dị mfe, ihe dị ka ọkwa ịgụ akwụkwọ klas 7",
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị; naanị ụdị ngwa n'efu",
      "Ihe dị ka nkeji 60 n'ozuzu, n'obere nkuzi dabara n'etiti mmega ahụ na klas",
      "Iwu ụlọ akwụkwọ, otu egwuregwu (league) na coach gbasara akara (logo), mgbanwe mmega ahụ na ndụmọdụ ahụike na-ebu ụzọ",
      "Ozi ahụ, ahụike na ebe ị nọ bụ nzuzo, a ga-ekesa ya naanị ma ọ bụrụ na ị họrọ"
    ],
    prerequisites: "Ọ dịghị"
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ ndị egwuregwu ma ọ bụ ndị coach na-arụkarị", action: "ịmata ụdị ngwa dabara ọrụ ọ bụla: ngwa enyemaka AI, ngwa ime eserese, mpempe nọmba ma ọ bụ ngwa nlekọta (tracker)", standard: "ma nweta opekata mpe 4 n'ime ọrụ 5 ziri ezi" },
    { id: "O2", condition: "Site n'iji ngwa enyemaka AI n'efu na ezi usoro oge gị", action: "ime atụmatụ izu na tebụl ma mee ka ọ ka mma site n'arịrịọ nsochi", standard: "nke nwere oge ọ bụla a kara aka, na mmega ahụ coach setịrị n'agbanweghị ya" },
    { id: "O3", condition: "Site n'iji template Canva n'efu", action: "ime eserese ụbọchị egwuregwu na-egosi onye, mgbe na ebe, ya na otu foto dị ike", standard: "nke a ga-agụ na ekwentị n'ime sekọnd abụọ, na-eji naanị foto na akara i nwere ikike iji" },
    { id: "O4", condition: "Site n'iji Google Sheets", action: "ịhazi mpempe na-edebe otu nọmba site n'ụbọchị ma were chaatị gosi ụzọ ọ na-aga", standard: "nke nwere opekata mpe oge mmega ahụ atọ, a na-atụ nọmba ahụ otu ụzọ ahụ oge ọ bụla, ma kesaa mpempe ahụ naanị ndị ị họrọ" },
    { id: "O5", condition: "Mgbe e nyere gị app egwuregwu ma ọ bụ app AI ọhụrụ", action: "ilele onye mere ya, ozi ọ na-ewe, ọnụ ahịa ya, ma ọ dabara otu gị na nkwa ọ na-ekwe, site n'iji nnyocha app nwere ajụjụ ise", standard: "na-aza ajụjụ ise ahụ niile ma dee mkpebi doro anya: jiri ya, nwaa ya nke ọma, ma ọ bụ hapụ ya" },
    { id: "O6", condition: "Maka otu izu n'ezie", action: "ime usoro izu nke na-eji onye na-eme atụmatụ gị, ngwa ime eserese gị na mpempe nọmba gị ọnụ", standard: "nke ngwa ọ bụla nwere ụbọchị ma ọ bụ oge a kara aka, ma a na-ekesa ozi otu naanị ndị ọrụ chọrọ ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ngwa ọrụ AI gị n'efu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịhọrọ ngwa dabara ọrụ",
          minutes: 4,
          goal: "Kewaa ọrụ ndị egwuregwu na-arụkarị n'ụdị ngwa kwesịrị ha.",
          text: [
            "E nwere ọtụtụ narị app AI, mana ọtụtụ n'ime ha dabara n'ụdị ole na ole. Ngwa enyemaka AI (ChatGPT, Microsoft Copilot, Google Gemini) na-ede ihe, na-akọwa ihe, na-emekwa atụmatụ. Ngwa ime eserese (dị ka Canva) na-eme eserese na obere vidiyo. Mpempe nọmba (Google Sheets, Microsoft Excel) na-edebe nọmba gị ma were chaatị gosi ha. Ngwa nlekọta ahụ (fitness tracker) na app vidiyo otu na-anakọta ozi site n'ahụ gị ma ọ bụ n'egwuregwu gị.",
            "Bido n'ọrụ ahụ, ọ bụghị n'app ahụ. \"Achọrọ m atụmatụ izu\" na-egosi ngwa enyemaka. \"Achọrọ m ihe m ga-etinye maka ụbọchị egwuregwu\" na-egosi ngwa ime eserese. \"Achọrọ m ịhụ ma oge m na-agba ọsọ na-aka mma\" na-egosi mpempe nọmba.",
            "Ụdị n'efu na-ezukarị ịmalite. Mụta otu ngwa n'ụdị ọ bụla nke ọma tupu i tinyekwuo ndị ọzọ."
          ],
          words: [["Ngwa enyemaka AI", "mmemme AI ị na-akparịta ụka na ya iji dee ihe, kọwaa ihe ma ọ bụ mee atụmatụ."], ["Mpempe nọmba (spreadsheet)", "ahịrị na kọlụm e ji edebe nọmba ma were chaatị gosi ha."]],
          slides: [
            { title: "Ụdị ngwa anọ", bullets: ["Ngwa enyemaka AI: ide, ịkọwa, ime atụmatụ", "Ngwa ime eserese: eserese na obere vidiyo", "Mpempe nọmba: idebe nọmba na ime chaatị", "Tracker na app vidiyo: ịnakọta ozi"] },
            { title: "Bido n'ọrụ ahụ", bullets: ["Atụmatụ izu -> ngwa enyemaka", "Ihe maka ụbọchị egwuregwu -> ngwa ime eserese", "Oge m ọ na-aka mma? -> mpempe nọmba"] },
            { title: "Mee ka ọ dị mfe", bullets: ["Ụdị n'efu zuru ịmalite", "Mụta otu ngwa n'ụdị ọ bụla nke ọma"] }
          ],
          tryIt: "Depụta ọrụ ise ị na-arụ kwa izu dị ka onye egwuregwu ma ọ bụ coach (dịka ọmụmaatụ ime atụmatụ mmega ahụ, itinye ihe na social media, idebe otu nọmba). N'akụkụ nke ọ bụla, dee ụdị ngwa dabara ya.",
          youCanNow: "ịhọrọ ụdị ngwa AI dabara ọrụ onye egwuregwu.",
          quickCheck: [
            { objective: "O1", q: "Kedu ụdị ngwa na-edebe nọmba gị ma were ha mee chaatị?", options: ["Ngwa enyemaka AI", "Mpempe nọmba (spreadsheet)", "Ngwa ime eserese", "Ngwa nlekọta ahụ (fitness tracker)"], answer: 1, why: "Mpempe nọmba dị ka Google Sheets na Excel na-edebe nọmba ma mee chaatị." },
            { objective: "O1", q: "Onye otu gị chọrọ ịnwale app ọhụrụ ise n'izu a. Gịnị ka ị ga-atụ aro?", options: ["Budata ise ahụ niile taa", "Kwụọ ụgwọ maka nke kacha dị oke ọnụ", "Bido n'ọrụ ahụ, wee mụta otu ngwa n'efu n'ụdị ahụ nke ọma", "Ejikwala ngwa ọ bụla"], answer: 2, why: "Nkuzi ahụ kwuru ka ị bido n'ọrụ ahụ ma bu ụzọ mụta otu ngwa n'ụdị ọ bụla nke ọma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ngwa enyemaka AI dị ka onye na-eme atụmatụ gị",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI mee ka usoro oge gị bụrụ atụmatụ izu doro anya.",
          text: [
            "Ngwa enyemaka AI maara nke ọma ime ka ndepụta gbagwojuru anya bụrụ atụmatụ. Nye ya oge mmega ahụ gị, egwuregwu, klas na oge ọrụ gị, ma rịọ maka atụmatụ izu na tebụl.",
            "Kọwaa nke ọma: \"Abụ m onye egwuregwu volleyball na mahadum. Mmega ahụ bụ 2-5 pm Mọnde ruo Fraịde, egwuregwu na Satọde. Klas bụ 9-12. Mee tebụl izu nwere oge ọmụmụ ihe, oge nri na oge ụra.\" Wee mee ka ọ ka mma site n'arịrịọ nsochi dị ka \"Tinye nkeji 30 maka ilele vidiyo egwuregwu na Wenezde.\"",
            "Ngwa enyemaka ahụ na-eme atụmatụ; coach gị na-ekpebi mmega ahụ. Arịọla ya ka ọ gbanwee mmega ahụ coach gị dere, ma lelee ihe ọ bụla gbasara ahụike ma ọ bụ izu ike n'aka onye na-elekọta ahụike ndị egwuregwu (athletic trainer)."
          ],
          steps: ["Depụta oge gị a kara aka: mmega ahụ, egwuregwu, klas, ọrụ.", "Rịọ maka atụmatụ izu na tebụl.", "Rịọ maka otu mgbanwe n'otu oge.", "Detuo atụmatụ ikpeazụ n'ime kalenda ma ọ bụ ndetu gị."],
          words: [["Arịrịọ nsochi (follow-up)", "arịrịọ nke abụọ na-agbanwe ma ọ bụ na-ewuli elu n'azịza ahụ."]],
          slides: [
            { title: "Nye ya oge gị a kara aka", bullets: ["Mmega ahụ na egwuregwu", "Klas na oge ọrụ", "Ụbọchị njem"] },
            { title: "Rịọ maka tebụl", bullets: ["Oge ọmụmụ ihe, nri, ụra", "Wee otu mgbanwe n'otu oge"] },
            { title: "Onye na-ekpebi gịnị", bullets: ["AI na-ahazi izu gị", "Coach na-ekpebi mmega ahụ", "Athletic trainer maka ahụike na izu ike"] }
          ],
          tryIt: "Dee ezi oge gị a kara aka maka izu na-abịa n'ime ngwa enyemaka AI ma rịọ maka atụmatụ izu na tebụl. Rịọ maka otu mgbanwe ga-eme ka ọ ka mma.",
          youCanNow: "iji ngwa enyemaka AI mee ka usoro oge gị bụrụ atụmatụ izu.",
          quickCheck: [
            { objective: "O2", q: "Gịnị na-eme ka arịrịọ atụmatụ nye ngwa enyemaka AI rụọ ọrụ nke ọma?", options: ["Ịkọwa nke ọma egwuregwu gị na oge gị a kara aka", "Iji naanị otu okwu", "Ịrịọ ya ka o degharịa mmega ahụ coach gị", "Ịhapụ klas gị"], answer: 0, why: "Nkọwa doro anya banyere usoro oge gị na-enye atụmatụ dabara ezi izu gị." },
            { objective: "O2", q: "Atụmatụ gị chọrọ nkeji 30 maka ilele vidiyo egwuregwu na Wenezde. Gịnị ka ị ga-eme?", options: ["Malite mkparịta ụka ọhụrụ site na mbido", "Hichapụ atụmatụ ahụ niile", "Rịọ athletic trainer gị ka o dee ya", "Rịọ ngwa enyemaka ahụ maka otu mgbanwe ahụ dị ka arịrịọ nsochi"], answer: 3, why: "Arịrịọ nsochi na-arịọ otu mgbanwe n'otu oge na-eme ka atụmatụ ka mma." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime eserese ụbọchị egwuregwu na Canva",
          minutes: 5,
          goal: "Mee eserese ụbọchị egwuregwu dị mfe site n'iji template ime eserese n'efu.",
          text: [
            "Canva bụ ngwa ime eserese n'efu dị na weebụ na dị ka app. O nwere template e meelarị maka ihe a na-etinye na social media, akwụkwọ mgbasa ozi (flyer) na stories, o nwekwara ike AI nwere ike ịtụ aro okwu ma ọ bụ foto.",
            "Eserese ụbọchị egwuregwu dị ọcha nwere ihe anọ: ndị na-egwu, mgbe, ebe, na otu foto dị ike. Jiri agba otu gị, okwu buru ibu a na-agụ nke ọma, ọ dịghịkwa ihe ọzọ.",
            "Jiri naanị foto ị sere ma ọ bụ ndị i nwere ikike iji. Ọtụtụ ụlọ akwụkwọ nwere iwu gbasara iji akara (logo) na aha ụlọ akwụkwọ, ya mere jụọ ngalaba egwuregwu ụlọ akwụkwọ gị (athletic department) tupu i tinye eserese nwere akara gọọmentị ụlọ akwụkwọ."
          ],
          steps: ["Meghee Canva ma chọọ template \"game day\".", "Họrọ template nwere nha dabara ebe ị na-etinye ihe.", "Gbanwee okwu ya: ndị mmegide, ụbọchị, oge, ebe.", "Tinye foto nke gị na agba otu gị.", "Budata ya ma lelee ya na ekwentị gị tupu i tinye ya."],
          words: [["Template", "eserese e meelarị nke ị na-agbanwe ka ọ bụrụ nke gị."], ["Ikike (permission)", "\"ee\" site n'aka onye nwe ya iji foto ya, akara ya ma ọ bụ aha ya."]],
          slides: [
            { title: "Canva n'otu ahịrị", bullets: ["Ngwa ime eserese n'efu nwere template", "Weebụ na app ekwentị"] },
            { title: "Eserese ụbọchị egwuregwu dị ọcha", bullets: ["Onye, mgbe, ebe", "Otu foto dị ike", "Agba otu, okwu buru ibu"] },
            { title: "Nọgide n'iwu", bullets: ["Jiri foto nke gị ma ọ bụ ndị i nwere ikike iji", "Jụọ tupu i jiri akara ụlọ akwụkwọ"] }
          ],
          tryIt: "Mee eserese ụbọchị egwuregwu na Canva maka egwuregwu ma ọ bụ mmega ahụ gị na-esote. Lelee ya na ekwentị gị: ị nwere ike ịgụ oge na ebe n'ime sekọnd abụọ?",
          youCanNow: "ime eserese ụbọchị egwuregwu dị ọcha site na template ma jiri foto na akara n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ Canva?", options: ["Ngwa ime eserese n'efu nwere template maka ihe a na-etinye na flyer", "Mpempe nọmba egwuregwu", "Ngwa nlekọta ahụ", "Iwu ụlọ akwụkwọ gbasara akara"], answer: 0, why: "Canva bụ ngwa ime eserese n'efu dị na weebụ na dị ka app, nwere template e meelarị." },
            { objective: "O3", q: "I mechaala eserese gị. Gịnị ka ị ga-eme tupu i tinye ya?", options: ["Tinyekwuo okwu na agba", "Tinye ya ozugbo", "Budata ya ma lelee ya na ekwentị gị", "Tinye foto i hụrụ n'ịntanetị"], answer: 2, why: "Ilele ya na ekwentị na-egosi ma a ga-agụ oge na ebe ngwa ngwa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ngwa ọrụ AI gị n'efu",
        questions: [
          { objective: "O1", q: "Ị chọrọ ịhụ ma oge ị na-agba ọsọ na-aka mma. Kedu ụdị ngwa kacha dabara?", options: ["Ngwa ime eserese", "App egwu (music)", "Mpempe nọmba", "Ihe nzacha foto"], answer: 2, why: "Mpempe nọmba na-edebe nọmba ma were chaatị gosi ha ka oge na-aga." },
          { objective: "O1", q: "Gịnị ka ị ga-ebido na ya mgbe ị na-ahọrọ ngwa?", options: ["Ọrụ ị chọrọ ka e mee", "App kacha ewu ewu", "App kacha dị oke ọnụ", "Ihe ọ bụla onye ị na-amaghị tụrụ aro"], answer: 0, why: "Bido n'ọrụ ahụ, wee họrọ ụdị ngwa dabara ya." },
          { objective: "O2", q: "Ngwa enyemaka AI tụrụ aro ka a gbanwee mmega ahụ coach gị dere. Gịnị ka ị ga-eme?", options: ["Soro AI", "Ghara ịga mmega ahụ", "Tinye ya na social media", "Debe mmega ahụ coach ma jụọ coach gị ma ọ bụrụ na i nwere ajụjụ"], answer: 3, why: "AI na-ahazi izu gị; coach gị na-ekpebi mmega ahụ." },
          { objective: "O3", q: "Kedu ihe anọ kwesịrị ịdị n'eserese ụbọchị egwuregwu?", options: ["Okwuntughe, adreesị, ekwentị, email gị", "Onye, mgbe, ebe, otu foto dị ike", "Foto iri na ụdị mkpụrụ akwụkwọ ise", "Naanị akara"], answer: 1, why: "Nkọwa doro anya na otu foto dị ike na-eme ka eserese dị mfe ịgụ." },
          { objective: "O3", q: "Ị chọrọ iji akara ụlọ akwụkwọ gị n'ihe ị ga-etinye. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Detuo ya site na weebụsaịtị", "Jụọ athletic department gị", "Gbanwee agba ya", "Jiri ya ma tụọ anya na ọ ga-adị mma"], answer: 1, why: "Ọtụtụ ụlọ akwụkwọ nwere iwu gbasara akara ha, ya mere bu ụzọ jụọ." }
        ]
      }
    },
    {
      name: "Isi 2: Idebe nọmba, ịtụle app na iwu ngwa ọrụ gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Idebe otu nọmba na Google Sheets",
          minutes: 5,
          goal: "Hazie mpempe na-edebe otu nọmba ma gosi ya dị ka chaatị.",
          text: [
            "Họrọ otu nọmba dị gị mkpa nke ị nwere ike ịtụ otu ụzọ ahụ oge ọ bụla: bọọlụ free-throw batara n'ime 20, oge 40-yard, oge otu maịl, ma ọ bụ izi ezi serve.",
            "Na Google Sheets, mee kọlụm abụọ: Ụbọchị na nọmba gị. Tinye otu ahịrị mgbe mmega ahụ ọ bụla gwụrụ. Mgbe i nwere ahịrị ole na ole, họrọ kọlụm abụọ ahụ ma tinye chaatị ka ị hụ ụzọ ọ na-aga.",
            "Ị nwere ike ịrịọ ngwa enyemaka AI ka ọ kọwaa nzọụkwụ spreadsheet ma ọ bụ formula, dị ka otu esi enweta nkezi (average) gị. Debe mpempe ahụ na nzuzo ma ọ bụrụ na ị họrọghị ikesa ya na coach gị."
          ],
          steps: ["Meghee Google Sheets ma bido mpempe efu.", "Dee \"Date\" na A1 na aha nọmba gị na B1.", "Tinye otu ahịrị mgbe mmega ahụ ọ bụla gwụrụ.", "Họrọ kọlụm abụọ ahụ ma tinye chaatị.", "Kesaa ya naanị na coach gị ma ọ bụrụ na ịchọrọ ndụmọdụ."],
          words: [["Ụzọ ọ na-aga (trend)", "ụzọ nọmba gị na-aga ka oge na-aga: elu, ala ma ọ bụ otu ebe."], ["Formula", "obere ntụziaka n'ime igbe (cell) na-agbakọ ihe, dị ka nkezi."]],
          slides: [
            { title: "Họrọ otu nọmba", bullets: ["A na-atụ ya otu ụzọ ahụ oge ọ bụla", "Ọmụmaatụ: free throw n'ime 20, oge otu maịl"] },
            { title: "Hazie mpempe ahụ", bullets: ["Kọlụm A: Ụbọchị", "Kọlụm B: nọmba gị", "Otu ahịrị maka mmega ahụ ọ bụla"] },
            { title: "Hụ ụzọ ọ na-aga", bullets: ["Họrọ kọlụm abụọ ahụ ma tinye chaatị", "Rịọ AI ka ọ kọwaa formula ma ọ bụrụ na ọ siri ike"] }
          ],
          tryIt: "Hazie Google Sheet maka otu nọmba. Tinye opekata mpe oge mmega ahụ atọ gara aga (ma ọ bụ nọmba mmega) ma tinye chaatị.",
          youCanNow: "idebe otu nọmba na spreadsheet ma were chaatị hụ ụzọ ọ na-aga.",
          quickCheck: [
            { objective: "O4", q: "Kedu kọlụm abụọ mpempe nọmba gị na-ebido na ha?", options: ["Aha na otu", "Ndị mmegide na akara egwuregwu", "Coach na ọnọdụ egwuregwu", "Ụbọchị na nọmba gị"], answer: 3, why: "Ụbọchị na kọlụm A na nọmba na kọlụm B na-eme ka ị hụ ụzọ ọ na-aga ka oge na-aga." },
            { objective: "O4", q: "Ị chọrọ ndụmọdụ gbasara mpempe nọmba gị. Gịnị ka ị ga-eme?", options: ["Tinye njikọ ya n'ihu ọha", "Kesaa ya naanị na coach gị", "Zigara ya otu nke ọzọ", "Bipụta ya maka mgbidi ebe a na-agbanwe uwe"], answer: 1, why: "Debe mpempe ahụ na nzuzo ma kesaa ya naanị ndị ị họrọ, dị ka coach gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Nnyocha app nwere ajụjụ ise",
          minutes: 5,
          goal: "Tụlee app egwuregwu ma ọ bụ AI ọhụrụ tupu i nye ya ozi ma ọ bụ ego.",
          text: [
            "App ọhụrụ na-ekwe nkwa ime ka ị gbaa ọsọ karịa, ime ka a hụ gị maka ọkpụkpọ (recruiting) ma ọ bụ ime ka ndị na-eso gị baa ụba. Tupu i debanye aha, mee nnyocha dị ngwa nwere ajụjụ ise.",
            "1. Onye mere ya, ọ dịkwa n'ezi ụlọ ahịa app? 2. Kedu ozi ọ na-anakọta, ị nwere ike ihichapụ ya? (Gụọ nchịkọta privacy policy.) 3. Ego ole ka ọ na-efu mgbe oge nnwale n'efu gwụrụ? 4. Coach gị ma ọ bụ ụlọ akwụkwọ gị ọ na-ejibu ihe yiri ya? 5. Ọ na-ekwe nkwa ihe dị oke mma ikwere, dị ka scholarship a na-ekwe nkwa ya n'ezie?",
            "Ozi ahụ na ahụike, dị ka ọkụkụ obi, ụra na ebe ị nọ, bụ nzuzo. Kesaa ya naanị na app ị tụkwasịrị obi, ma gbanyụọ ikesa ebe ị nọ nke ị na-achọghị."
          ],
          steps: ["Lelee onye mere ya na na ọ dị n'ezi ụlọ ahịa app.", "Gụọ ozi ọ na-anakọta na otu esi ehichapụ ya.", "Chọta ọnụ ahịa ya mgbe nnwale n'efu ọ bụla gwụrụ.", "Jụọ coach gị ihe otu ahụ na-ejibu.", "Hapụ ihe na-ekwe nkwa na ọ ga-eme n'ezie."],
          words: [["Privacy policy", "nkọwa app ahụ banyere ozi ọ na-anakọta na ihe ọ na-eji ya eme."], ["Nnwale n'efu (free trial)", "obere oge n'efu tupu app ahụ amalite ịnara ego."]],
          slides: [
            { title: "Tupu i debanye aha", bullets: ["Onye mere ya? Ezi ụlọ ahịa app?", "Kedu ozi ọ na-anakọta?", "Ego ole ka ọ na-efu mgbe nnwale gwụrụ?"] },
            { title: "Ajụjụ abụọ ọzọ", bullets: ["Otu m ọ na-ejibu ihe dị otu a?", "Ọ na-ekwe nkwa karịrị akarị?"] },
            { title: "Chebe ozi ahụ gị", bullets: ["Ọkụkụ obi, ụra, ebe ị nọ bụ nzuzo", "Gbanyụọ ikesa ebe ị nọ nke ị na-achọghị"] }
          ],
          tryIt: "Họrọ otu app egwuregwu ma ọ bụ AI ị hụrụ na mgbasa ozi. Zaa ajụjụ ise ahụ banyere ya n'ime ndetu ma kpebie: jiri ya, nwaa ya nke ọma, ma ọ bụ hapụ ya.",
          youCanNow: "ilele onye mere app ọhụrụ, ozi ọ na-ewe, ọnụ ahịa ya na nkwa ọ na-ekwe tupu i debanye aha.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke bụ otu n'ime ajụjụ ise nnyocha app?", options: ["Kedu agba akara ya?", "Mgbasa ozi ole ka ọ na-egosi?", "Ego ole ka ọ na-efu mgbe nnwale n'efu gwụrụ?", "O nwere dark mode?"], answer: 2, why: "Ọnụ ahịa mgbe nnwale gwụrụ bụ ajụjụ nke 3 n'ime nnyocha ajụjụ ise." },
            { objective: "O5", q: "App mmega ahụ na-arịọ ikesa ebe ị nọ mgbe niile, mana ọ chọghị ya. Gịnị ka ị ga-eme?", options: ["Gbanyụọ ikesa ebe ị nọ", "Kwe ka app ahụ rụọ ọrụ ngwa ngwa", "Kesaakwa ọkụkụ obi gị", "Nye ya okwuntughe gị"], answer: 0, why: "Ebe ị nọ bụ ozi nzuzo, ya mere gbanyụọ ikesa ị na-achọghị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịchịkọta ngwa ọrụ gị ọnụ",
          minutes: 5,
          goal: "Jiri ngwa atọ ahụ ọnụ maka otu izu n'ezie.",
          text: [
            "Ngwa ọrụ gị na-arụ ọrụ kacha mma dị ka usoro izu. Sọnde: jiri ngwa enyemaka AI mee atụmatụ izu. Tupu egwuregwu: mee eserese ahụ. Mgbe mmega ahụ ọ bụla gwụrụ: tinye nọmba gị na mpempe ahụ.",
            "Dee obere ndepụta ngwa gị na ihe nke ọ bụla bụ maka ya, ka ị ghara ịnọ na-anwale app ọhụrụ kwa izu. Tinye ngwa ọhụrụ naanị mgbe i nwere ọrụ ngwa ọrụ gị enweghị ike ịrụ.",
            "Ndị coach nwere ike iji otu ngwa ọrụ ahụ maka otu: atụmatụ izu maka ndị ọrụ, otu eserese maka egwuregwu ọ bụla, na mpempe nọmba otu e kesara. Kesaa mpempe otu naanị ndị ọrụ chọrọ ya."
          ],
          steps: ["Dee ndepụta ngwa gị: atụmatụ, eserese, mpempe nọmba.", "Sọnde: jiri ngwa enyemaka mee atụmatụ izu.", "Izu egwuregwu: mee otu eserese.", "Mgbe mmega ahụ ọ bụla gwụrụ: tinye nọmba gị.", "Gị na coach gị lelee chaatị ahụ mgbe izu ole na ole gachara."],
          words: [["Usoro (routine)", "nzọụkwụ ị na-emeghachi n'otu oge kwa izu."], ["Ngwa ọrụ (toolkit)", "obere ngwa ole na ole ị na-eji ugboro ugboro."]],
          slides: [
            { title: "Usoro izu gị", bullets: ["Sọnde: mee atụmatụ izu", "Izu egwuregwu: otu eserese", "Mgbe mmega ahụ ọ bụla gwụrụ: tinye nọmba gị"] },
            { title: "Mee ka ngwa ọrụ dị obere", bullets: ["Dee ihe ngwa ọ bụla bụ maka ya", "Tinye ngwa naanị maka ọrụ ọhụrụ"] },
            { title: "Maka ndị coach", bullets: ["Atụmatụ izu ndị ọrụ", "Otu eserese maka egwuregwu ọ bụla", "Mpempe nọmba otu maka naanị ndị ọrụ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: jiri ngwa enyemaka AI mee atụmatụ izu na-abịa, mee otu eserese ụbọchị egwuregwu na Canva, hazie mpempe na-edebe otu nọmba, ma mee nnyocha ajụjụ ise n'otu app ọhụrụ.",
          youCanNow: "iji obere ngwa AI n'efu ọnụ dị ka usoro izu.",
          quickCheck: [
            { objective: "O6", q: "N'usoro izu, mgbe ole ka ị na-etinye nọmba gị na mpempe ahụ?", options: ["Otu ugboro n'oge egwuregwu niile (season)", "Naanị tupu egwuregwu", "Naanị mgbe i mebiri ndekọ (record)", "Mgbe mmega ahụ ọ bụla gwụrụ"], answer: 3, why: "Itinye nọmba mgbe mmega ahụ ọ bụla gwụrụ na-eme ka ụzọ ọ na-aga zuo oke." },
            { objective: "O6", q: "I nwere ọrụ ngwa ọrụ gị ugbu a enweghị ike ịrụ. Gịnị ka ị ga-eme?", options: ["Ka nọ na-anwale app ọhụrụ kwa izu", "Tinye otu ngwa ọhụrụ maka ọrụ ahụ ma mee nnyocha app", "Hapụ ọrụ ahụ", "Gbanwee ngwa ọrụ gị niile"], answer: 1, why: "Tinye ngwa ọhụrụ naanị mgbe i nwere ọrụ ngwa ọrụ gị enweghị ike ịrụ, ma bu ụzọ lelee ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Idebe nọmba, ịtụle app na iwu ngwa ọrụ gị",
        questions: [
          { objective: "O4", q: "Gịnị na-eme ka nọmba dị mma maka idebe?", options: ["A na-agbanwe otu e si atụ ya kwa izu", "Ọ bụ naanị coach gị nwere ike ịhụ ya", "Ọ bụ echiche", "Ị nwere ike ịtụ ya otu ụzọ ahụ oge ọ bụla"], answer: 3, why: "Ịtụ ya otu ụzọ ahụ na-eme ka ụzọ ọ na-aga nwee isi." },
          { objective: "O4", q: "N'ime mpempe gị, gịnị na-aba na kọlụm A?", options: ["Ụbọchị", "Okwuntughe gị", "Aha ndị mmegide gị", "Adreesị ụlọ gị"], answer: 0, why: "Ụbọchị na kọlụm A na nọmba na kọlụm B na-eme ka ị mee chaatị ụzọ ọ na-aga." },
          { objective: "O5", q: "App na-ekwe nkwa scholarship n'ezie ma ọ bụrụ na ị kwụọ ụgwọ. Gịnị ka nnyocha app kwuru?", options: ["Kwụọ ụgwọ ozugbo", "Kesaa ebe ị nọ", "Ọ na-ekwe nkwa karịrị akarị, ya mere hapụ ya", "Nye ya koodu nbanye gị"], answer: 2, why: "Ihe a na-ekwe nkwa ya n'ezie bụ ihe ịdọ aka na ntị." },
          { objective: "O5", q: "Kedu nke bụ ozi ahụ nzuzo?", options: ["Agba uwe egwuregwu gị", "Aha otu gị", "Mmega ị kacha hụ n'anya", "Ọkụkụ obi gị na ụra gị"], answer: 3, why: "Ọkụkụ obi, ụra na ebe ị nọ bụ ozi nzuzo." },
          { objective: "O6", q: "Mgbe ole ka ị ga-etinye ngwa ọhụrụ na ngwa ọrụ gị?", options: ["Kwa izu", "Mgbe i nwere ọrụ ngwa ọrụ gị enweghị ike ịrụ", "Mgbe enyi gị tinyere ihe banyere otu", "Ọ dịghị mgbe"], answer: 1, why: "Obere ngwa ọrụ ị maara nke ọma ka ọtụtụ app ị na-adịghị eji mma." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ngwa AI maka Ndị Egwuregwu",
    questions: [
      { objective: "O1", q: "Kedu ụdị ngwa na-ede ihe, na-akọwa ihe, na-emekwa atụmatụ?", options: ["Elekere nkwụsị (stopwatch)", "Naanị mpempe nọmba", "Ngwa enyemaka AI", "Igwefoto"], answer: 2, why: "Ngwa enyemaka AI dị ka ChatGPT, Copilot na Gemini na-ede ihe ma mee atụmatụ." },
      { objective: "O1", q: "Kedu nke bụ ngwa ime eserese n'efu nwere template?", options: ["Canva", "Igwe mgbakọ", "Bọọdụ akara egwuregwu", "Akwụkwọ atụmatụ egwuregwu (playbook)"], answer: 0, why: "Canva nwere template n'efu maka ihe a na-etinye na flyer." },
      { objective: "O1", q: "\"Achọrọ m ihe m ga-etinye maka ụbọchị egwuregwu\" na-egosi:", options: ["Ngwa ime eserese", "Mpempe nọmba", "Ngwa nlekọta ahụ", "Ngwa na-atụ ọkụkụ obi"], answer: 0, why: "Eserese bụ ọrụ ngwa ime eserese." },
      { objective: "O1", q: "Ngwa ole n'ụdị ọ bụla ka ị ga-ebu ụzọ mụta?", options: ["Ise", "Ka o kwere mee", "Otu, nke ọma", "Ọ dịghị"], answer: 2, why: "Ịmụta otu n'ụdị ọ bụla nke ọma bụ mmalite kacha ọsọ." },
      { objective: "O2", q: "Gịnị ka ị ga-enye ngwa enyemaka AI iji mee atụmatụ izu?", options: ["Okwuntughe gị", "Oge gị a kara aka: mmega ahụ, egwuregwu, klas", "Akwụkwọ ahụike gị", "Nọmba ụlọ akụ gị"], answer: 1, why: "Oge a kara aka na-enyere ya aka ime atụmatụ gburugburu izu gị." },
      { objective: "O2", q: "Onye na-ekpebi mmega ahụ gị?", options: ["AI", "Mgbasa ozi", "App ọ bụla", "Coach gị"], answer: 3, why: "Ngwa enyemaka na-ahazi; coach na-ekpebi mmega ahụ." },
      { objective: "O2", q: "Ụzọ kacha mma isi mee ka atụmatụ AI ka mma bụ:", options: ["Ịnabata nke mbụ", "Ide okwuntughe gị", "Otu mgbanwe n'otu oge", "Iso ya na-alụ ọgụ"], answer: 2, why: "Otu mgbanwe doro anya n'otu oge na-eme ka ọ nọrọ n'ụzọ." },
      { objective: "O3", q: "Eserese ụbọchị egwuregwu a na-agụ nke ọma nwere:", options: ["Obere okwu na foto iri", "Naanị emoji", "Nọmba ekwentị gị", "Onye, mgbe, ebe na otu foto dị ike"], answer: 3, why: "Nkọwa doro anya na otu foto dị mfe ịgụ ngwa ngwa." },
      { objective: "O3", q: "Kedu foto ị nwere ike iji n'eserese gị?", options: ["Foto nke gị ma ọ bụ ndị i nwere ikike iji", "Foto ọ bụla dị n'ịntanetị", "Foto site na peeji otu mmegide", "Foto ndị ị na-amaghị"], answer: 0, why: "Jiri foto bụ nke gị ma ọ bụ ndị i nwere ikike iji." },
      { objective: "O3", q: "Tupu i jiri akara ụlọ akwụkwọ gị, ị kwesịrị:", options: ["Isegharị ya", "Ịjụ athletic department gị", "Iji ya n'agbanyeghị", "Ịzụta ya n'ịntanetị"], answer: 1, why: "Ụlọ akwụkwọ na-enwekarị iwu gbasara akara ha." },
      { objective: "O4", q: "Kedu nọmba dị mfe idebe otu ụzọ ahụ oge ọ bụla?", options: ["Otu obi dị gị n'ụgbọ ala", "Ihe ndị na-ekiri chere", "Free throw batara n'ime 20", "Ọnọdụ obi onye mmegide gị"], answer: 2, why: "Nnwale a kara aka dị ka ndị batara n'ime 20 na-adị otu ụzọ mgbe niile." },
      { objective: "O4", q: "Kedu otu ị ga-esi hụ ụzọ nọmba gị na-aga na Google Sheets?", options: ["Họrọ kọlụm ndị ahụ ma tinye chaatị", "Bipụta ya", "Hichapụ ahịrị ochie", "Zigara onye ị na-amaghị ya n'email"], answer: 0, why: "Chaatị na-egosi ụzọ nọmba gị na-aga." },
      { objective: "O4", q: "Formula maka nkezi gị siri gị ike. Ezigbo ihe ime bụ:", options: ["Ịkwụsị idebe nọmba", "Ịkọ nọmba ahụ", "Ikesa okwuntughe gị", "Ịrịọ ngwa enyemaka AI ka ọ kọwaa formula ahụ"], answer: 3, why: "Ngwa enyemaka AI na-akọwa nzọụkwụ spreadsheet nke ọma." },
      { objective: "O4", q: "Onye kwesịrị ịhụ mpempe nọmba nke gị?", options: ["Onye ọ bụla n'ịntanetị", "Naanị ndị ị họrọ, dị ka coach gị", "Otu mmegide", "Ndị ị na-amaghị"], answer: 1, why: "Debe ya na nzuzo ma kesaa ya naanị ma ọ bụrụ na ị họrọ." },
      { objective: "O5", q: "Gịnị ka privacy policy na-agwa gị?", options: ["Agba app ahụ", "Ozi app ahụ na-anakọta na ihe ọ na-eji ya eme", "Mmega ahụ gị", "Akara egwuregwu"], answer: 1, why: "Ọ na-akọwa otu app ahụ si emeso ozi gị." },
      { objective: "O5", q: "Tupu nnwale n'efu, ị kwesịrị ilele:", options: ["Akara app ahụ", "App onye mmegide gị", "Ọ dịghị ihe", "Ọnụ ahịa mgbe nnwale ahụ gwụrụ"], answer: 3, why: "Ọtụtụ app na-amalite ịnara ego mgbe nnwale gwụrụ." },
      { objective: "O5", q: "Kedu nkwa app bụ ihe ịdọ aka na ntị?", options: ["\"Scholarship a na-ekwe nkwa ya n'ezie\"", "\"Debe oge ị na-agba ọsọ\"", "\"Mee eserese\"", "\"Template n'efu\""], answer: 0, why: "Ọ dịghị onye nwere ike ikwe nkwa scholarship n'ezie." },
      { objective: "O5", q: "Ikesa ebe ị nọ nke ị na-achọghị kwesịrị:", options: ["Ka e kesaa ya onye ọ bụla", "Ka e tinye ya n'ịntanetị", "Ka a gbanyụọ ya", "Ka a hapụ ya ka ọ na-arụ ọrụ ruo mgbe ebighị ebi"], answer: 2, why: "Ebe ị nọ bụ ozi nzuzo; kesaa ya naanị mgbe ọ dị mkpa." },
      { objective: "O6", q: "N'usoro izu, mgbe ole ka ị na-eme atụmatụ izu?", options: ["Mgbe oge egwuregwu (season) gwụrụ", "Ọ dịghị mgbe", "N'oge egwuregwu", "Sọnde, site n'iji ngwa enyemaka AI gị"], answer: 3, why: "Ime atụmatụ na mmalite izu na-akwado ihe ndị ọzọ niile." },
      { objective: "O6", q: "Coach na-ekesa mpempe nọmba otu. Onye kwesịrị inwe ike ịbanye na ya?", options: ["Onye ọ bụla nwere njikọ ahụ n'ịntanetị", "Naanị ndị ọrụ chọrọ ya", "Ndị coach otu mmegide", "Ndị na-akwado otu (fans)"], answer: 1, why: "Ozi otu kwesịrị ịga naanị ndị chọrọ ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 4, 7, 10, 14, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Atụmatụ izu", objective: "O2", notYet: "Atụmatụ ahụ enweghị oge a kara aka, ma ọ bụ ọ na-agbanwe mmega ahụ coach.", meets: "Tebụl izu nwere oge niile a kara aka, ọmụmụ ihe, nri na ụra, nke e mere ka ọ ka mma site n'opekata mpe otu arịrịọ nsochi.", exceeds: "E detuola atụmatụ ahụ na kalenda, e dekwala ajụjụ gbasara ahụike ma ọ bụ izu ike maka athletic trainer." },
      { name: "Eserese ụbọchị egwuregwu", objective: "O3", notYet: "Onye, mgbe ma ọ bụ ebe adịghị ya, ọ na-esi ike ịgụ na ekwentị, ma ọ bụ ọ na-eji foto ma ọ bụ akara n'enweghị ikike.", meets: "Ọ na-egosi onye, mgbe, ebe na otu foto dị ike, a na-agụ ya na ekwentị n'ime sekọnd abụọ, ọ na-ejikwa naanị foto e nyere ikike.", exceeds: "Ọ na-eji agba otu, o nwere nha dabara ebe a ga-etinye ya, athletic department kwadokwara iji akara ahụ." },
      { name: "Mpempe nọmba", objective: "O4", notYet: "Ọ dịghị ụbọchị, oge mmega ahụ erughị atọ, ma ọ bụ ọ dịghị chaatị.", meets: "Kọlụm ụbọchị na nọmba, opekata mpe oge mmega ahụ atọ a tụrụ otu ụzọ ahụ, na chaatị na-egosi ụzọ ọ na-aga.", exceeds: "E tinyela oge mmega ahụ ise, tinye nkezi, ma kesaa mpempe ahụ naanị na coach maka ndụmọdụ." },
      { name: "Nnyocha app", objective: "O5", notYet: "A zaghị ụfọdụ n'ime ajụjụ ise ahụ ma ọ bụ ọ dịghị mkpebi.", meets: "A zara ajụjụ ise ahụ niile, e nwekwara mkpebi doro anya: jiri ya, nwaa ya nke ọma, ma ọ bụ hapụ ya.", exceeds: "Mkpebi ahụ na-enye ihe kpatara ya site na privacy policy na ọnụ ahịa, e gbanyụọla ikesa ozi na-adịghị mkpa." },
      { name: "Usoro ngwa ọrụ", objective: "O6", notYet: "Ọ dịghị ndepụta ngwa, ma ọ bụ ọ dịghị oge a kara aka maka ngwa ọ bụla.", meets: "Ndepụta ngwa e dere ede nwere ụbọchị ma ọ bụ oge a kara aka maka atụmatụ, eserese na nọmba.", exceeds: "Usoro ahụ gụnyere ilele chaatị ya na coach mgbe niile na iwu maka mgbe a ga-etinye ngwa ọhụrụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ọrụ ikpeazụ ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe ka na-eji atụmatụ izu na mpempe nọmba mgbe ụbọchị 30 gachara (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha hapụrụ ma ọ bụ hichapụ app, ma ọ bụ gbanyụọ ikesa ozi, mgbe ha mechara nnyocha app",
      "Ndị na-amụ ihe were ihe ọmụmụ Athletes ọzọ, dị ka AI maka Mmega Ahụ na Ịrụ Ọrụ Nke Ọma n'Egwuregwu"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Akaụntụ Canva n'efu",
      "Akaụntụ Google n'efu maka Google Sheets",
      "Usoro oge gị maka izu na-abịa na otu nọmba ị nwere ike ịtụ",
      "Ihe dị ka nkeji 60, kewara n'ụbọchị ole na ole"
    ],
    facilitatorNotes: [
      "Mee ya dị ka nnọkọ otu: onye ọ bụla na-eji otu ngwa atọ n'efu ahụ ka ndị egwuregwu wee nyere ibe ha aka.",
      "Chetara ndị egwuregwu na ngwa enyemaka na-eme atụmatụ izu mana coach na-ekpebi mmega ahụ; zigara athletic trainer ajụjụ gbasara ahụike na izu ike.",
      "Lelee iwu ụlọ akwụkwọ ma ọ bụ league gbasara akara na ihe ndị egwuregwu na-etinye n'ịntanetị tupu nkuzi eserese.",
      "Anakọtala ozi ahụ ma ọ bụ ahụike ndị egwuregwu n'onwe gị; mpempe nọmba na-anọ na nzuzo ma ọ bụrụ na onye egwuregwu ahụ ahọrọghị ikesa ya.",
      "Mee ka ndị egwuregwu bido mpempe nọmba ha n'oge ka ha nwee oge mmega ahụ atọ ruo ise tupu ọrụ ikpeazụ."
    ]
  }
};
