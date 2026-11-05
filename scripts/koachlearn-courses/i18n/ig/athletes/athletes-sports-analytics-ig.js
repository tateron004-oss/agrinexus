"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-sports-analytics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-sports-analytics-ig",
  lang: "ig",
  translationOf: "athletes-sports-analytics",
  category: "Athletes",
  name: "Ntọala Nyocha Data Egwuregwu",
  skills: "Ịjụ ajụjụ nyocha data, Ihicha tebụl data egwuregwu, Ịgụta nkezi, pasentị na ọnụọgụ kwa egwuregwu, Ime chaatị doro anya, Ịkọwa ihe ị chọpụtara n'eziokwu",
  outcome: "iji data zaa otu ezi ajụjụ gbasara onye egwuregwu ma ọ bụ otu egwuregwu: ịchịkọta na ihicha obere tebụl, ịgụta nkezi, pasentị na ọnụọgụ kwa egwuregwu na Google Sheets, ime otu chaatị doro anya, na ịkọwa ihe ị chọpụtara na oke ya n'ahịrịokwu atọ.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu, ndị nkuzi egwuregwu (coach), ndị na-elekọta otu egwuregwu na ndị na-akwado egwuregwu chọrọ ịghọta nọmba dị n'azụ egwuregwu ma jiri ha nke ọma. Ọ dịghị mgbakọ ọzọ chọrọ karịa mgbakọ dị mfe.",
    "Nyocha data (analytics) abụghị inwe nọmba kacha ukwuu. Ọ bụ ịjụ ezigbo ajụjụ, iji data dị ọcha, ime mgbakọ dị mfe nke ọma, igosi ya nke ọma, na ikwu eziokwu banyere ihe ọ na-egosighị. Ị ga-eji Google Sheets na ngwa enyemaka AI dị ka onye inyeaka.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma na njedebe isi ọ bụla, na ule nwere ajụjụ 20 na njedebe ihe ọmụmụ a."
  ],
  finalTask: "Jiri data zaa otu ajụjụ gbasara otu egwuregwu gị ma ọ bụ otu ị kacha hụ n'anya: dee ajụjụ ahụ, chịkọta data nke opekata mpe egwuregwu 10 site na box score ma ọ bụ peeji ọnụọgụ gọọmentị (official), hichaa ya, gụta opekata mpe otu nkezi, otu pasentị na otu ọnụọgụ kwa egwuregwu, mee otu chaatị, ma dee ihe ị chọpụtara n'ahịrịokwu atọ nwere otu oke nke data gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu, ndị nkuzi egwuregwu, ndị na-elekọta otu egwuregwu na ndị na-akwado egwuregwu chọrọ iji nọmba egwuregwu nke ọma. Ọtụtụ na-agbaso ọnụọgụ egwuregwu (stats) ugbu a mana ha ejibeghị ha rụọ ọrụ na spreadsheet.",
    startingPoint: "Ha nwere ike ịgụ box score ma mee mgbakọ dị mfe. Ha ejighị ma ọ bụ jiri ntakịrị formula ma ọ bụ chaatị spreadsheet, ha emechakwaghị ka ha ga-esi mara ma nọmba ọ na-egosi ihe ọ bụla n'ezie.",
    gap: "Okwu egwuregwu juputara na nọmba na-eduhie ndị mmadụ: obere data, pasentị e ji ụzọ ezighi ezi chọọ nkezi ya, na correlation a na-ewere dị ka ihe kpatara ya. Ndị na-amụ ihe kwesịrị iji data dị ọcha, mgbakọ dị mfe ziri ezi, chaatị doro anya na oke e kwuru n'eziokwu zaa otu ezi ajụjụ, ka ihe ha chọpụtara nyere coach ma ọ bụ otu aka kama imegharị ha anya.",
    constraints: [
      "Mgbakọ: naanị mgbakọ dị mfe; a na-egosi formula nzọụkwụ n'otu n'otu",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere Google Sheets n'efu",
      "Oge: ihe dị ka nkeji ise kwa nkuzi, gbakwunye oge itinye data nke egwuregwu 10",
      "Data ga-esi n'ọnụọgụ gọọmentị (official) nke otu, njikọ egwuregwu (league) ma ọ bụ ụlọ akwụkwọ",
      "A na-ekesa data onye egwuregwu n'otu n'otu n'ihu ọha naanị site n'ikike ya"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ na spreadsheet nwere ike ibu ụzọ were ihe ọmụmụ mbido Google Sheets."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị otu egwuregwu ma ọ bụ onye egwuregwu ị na-agbaso", action: "ide ajụjụ nyocha data doro anya nke data box score nwere ike ịza", standard: "na-akpọ aha ọnụọgụ ahụ, egwuregwu ndị ahụ na ihe a na-atụnyere" },
    { id: "O2", condition: "Site n'iji isi iyi ọnụọgụ gọọmentị (official) na Google Sheets", action: "ịchịkọta data nke opekata mpe egwuregwu 10 ma hichaa ya", standard: "nwere otu egwuregwu n'ahịrị ọ bụla, ebe ọ bụla tọgbọrọ chakoo ma ọ bụ na-adabaghị edozikwa site n'isi iyi ahụ" },
    { id: "O3", condition: "Mgbe e nyere gị tebụl dị ọcha", action: "ịgụta nkezi, pasentị na ọnụọgụ kwa egwuregwu site na formula spreadsheet", standard: "ebe i ji igwe mgbakọ (calculator) lelee otu nsonaazụ n'aka" },
    { id: "O4", condition: "Mgbe e nyere gị nsonaazụ ndị ị gụtara", action: "ịhọrọ na ime otu chaatị nke na-aza ajụjụ gị", standard: "nwere aha (title) na-ekwu ihe ị chọpụtara, ma e dekwara aha n'akụkụ abụọ (axis) ya" },
    { id: "O5", condition: "Mgbe e nyere gị ihe ị chọpụtara", action: "ịlele ya maka obere data, correlation a na-ewere dị ka ihe kpatara ya, na ọnọdụ a na-ekwughị", standard: "ma dee ọnụ ọgụgụ data (sample size) na opekata mpe nkọwa abụọ ọzọ nwere ike ịbụ" },
    { id: "O6", condition: "Mgbe e nyere gị chaatị gị na nlele gị", action: "ide na ikesa ihe ị chọpụtara n'ahịrịokwu atọ, ya na oke ya", standard: "nwere nọmba, ihe mere o ji dị mkpa na otu oke nke data ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ajụjụ na data",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịmalite site n'ezigbo ajụjụ",
          minutes: 4,
          goal: "Dee ajụjụ nyocha data doro anya nke ị nwere ike iji data zaa.",
          text: [
            "Nyocha data na-amalite site n'ajụjụ, ọ bụghị site na spreadsheet. Ezigbo ajụjụ doro anya ma nwee ike ịza: \"Otu anyị ọ na-agba bọọlụ akara atọ (three-point) nke ọma karịa n'ụlọ ka ọ bụ n'èzí?\" \"Ọ̀ bụ na m na-etinye serve m nke ọma karịa na set mbụ ka ọ bụ na nke atọ?\"",
            "Zere ajụjụ buru ibu nke ukwuu (\"Onye bụ onye egwuregwu kacha mma mgbe ọ bụla?\") ma ọ bụ nke data na-enweghị ike ịza (\"Onye na-agba mbọ karịa?\").",
            "Dee data ị chọrọ iji zaa ya: ọnụọgụ ndị ị chọrọ, egwuregwu ole, na ebe ị ga-esi nweta ha."
          ],
          steps: ["Dee ajụjụ gbasara otu gị ma ọ bụ onye egwuregwu.", "Mee ka o doo anya: onye, ọnụọgụ kedu, atụnyere kedu.", "Lelee na data nwere ike ịza ya.", "Depụta data ị chọrọ na ebe ị ga-esi nweta ya."],
          words: [["Nyocha data (analytics)", "iji data aza ajụjụ ma mee mkpebi ka mma."], ["Data", "eziokwu na nọmba, dị ka akara, ọnwụnwa (attempts) na ndị banyere (makes)."]],
          slides: [
            { title: "Ajụjụ na mbụ", bullets: ["Ọ bụghị spreadsheet", "Doro anya, nwee ike ịza"] },
            { title: "Nke dị mma na nke buru oke ibu", bullets: ["Nke dị mma: pasentị akara atọ n'ụlọ na n'èzí", "Nke buru oke ibu: \"onye kacha mma mgbe ọ bụla?\"", "Ọ bụghị data: \"onye na-agba mbọ karịa?\""] },
            { title: "Hazie data", bullets: ["Ọnụọgụ ndị kedu", "Egwuregwu ole", "Ebe ị ga-esi nweta ha"] }
          ],
          tryIt: "Dee ajụjụ nyocha data atọ gbasara otu gị ma ọ bụ otu ị kacha hụ n'anya. Jụọ ngwa enyemaka AI nke box score kacha nwee ike ịza. Họrọ otu ma depụta data ị chọrọ.",
          youCanNow: "ide ajụjụ nyocha data doro anya ma hazie data ga-aza ya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị na-eme ka ajụjụ nyocha data nwee ike ịza?", options: ["Ọ na-akpọ aha ọnụọgụ na ihe a na-atụnyere nke ị nwere ike ịgụ", "Ọ na-ajụ onye bụ onye kacha mma", "Ọ na-ajụ maka mmetụta", "O nweghị nọmba ọ bụla n'ime ya"], answer: 0, why: "Ezigbo ajụjụ na-egosi data ị nwere ike ịchịkọta ma tụnyere." },
            { objective: "O1", q: "Ajụjụ gị bụ \"Otu anyị ọ dị mma?\". Gịnị ka ị ga-eme?", options: ["Hapụ ya otu o si dị", "Mee ka o doo anya, dị ka ịtụnyere rebound kwa egwuregwu n'ụlọ na n'èzí", "Rịọ onye na-akwado egwuregwu ka ọ tụọ vootu", "Hapụ ajụjụ ahụ ma malite ime chaatị"], answer: 1, why: "Ajụjụ doro anya na-agwa gị kpọmkwem data ị ga-achịkọta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịchịkọta na ihicha data",
          minutes: 6,
          goal: "Chịkọta data nke opekata mpe egwuregwu 10 ma hichaa ya ka ọ dị njikere iji.",
          text: [
            "Nweta data site n'isi iyi a pụrụ ịtụkwasị obi: ọnụọgụ gọọmentị (official) nke otu gị, weebụsaịtị njikọ egwuregwu (league) ma ọ bụ nke egwuregwu ụlọ akwụkwọ, ma ọ bụ box score gọọmentị. Dee ebe nọmba ọ bụla si.",
            "Tinye ya na Google Sheets: otu ahịrị kwa egwuregwu, otu kọlụm kwa ọnụọgụ, ya na ahịrị isi (Date, Opponent, Home/Away, 3PA, 3PM). Ihicha data pụtara idozi nsogbu: mperi ide ihe, ebe tọgbọrọ chakoo, otu otu e dere n'ụzọ abụọ, nọmba e chekwara dị ka ederede, ma ọ bụ ahịrị e dere ugboro abụọ.",
            "Ngwa enyemaka AI nwere ike inyere gị aka ịhụ nsogbu: tinye tebụl ahụ ma jụọ, \"Chọta mperi ide ihe ọ bụla, ahịrị e dere ugboro abụọ, ebe tọgbọrọ chakoo ma ọ bụ aha na-adabaghị. Agbanwela nọmba, naanị depụta nsogbu ndị ahụ.\" Wee dozie ha n'onwe gị, site n'iji isi iyi mbụ ahụ."
          ],
          steps: ["Chọta isi iyi gọọmentị (official) maka ọnụọgụ gị.", "Hazie otu ahịrị kwa egwuregwu, otu kọlụm kwa ọnụọgụ.", "Tinye opekata mpe egwuregwu 10.", "Lelee mperi ide ihe, ahịrị e dere ugboro abụọ, ebe tọgbọrọ chakoo na aha na-adabaghị.", "Dozie ha site n'isi iyi ahụ, ọ bụghị site n'ịkọ nkọ."],
          words: [["Box score", "tebụl ọnụọgụ sitere n'otu egwuregwu."], ["Ihicha data (data cleaning)", "idozi mperi na oghere dị na data tupu i jiri ya."], ["Ebe tọgbọrọ chakoo (missing value)", "oghere n'ebe nọmba kwesịrị ịdị."]],
          slides: [
            { title: "Isi iyi a pụrụ ịtụkwasị obi", bullets: ["Ọnụọgụ gọọmentị (official) nke otu", "Saịtị njikọ egwuregwu ma ọ bụ egwuregwu ụlọ akwụkwọ", "Dee isi iyi ahụ"] },
            { title: "Nhazi tebụl", bullets: ["Otu ahịrị kwa egwuregwu", "Otu kọlụm kwa ọnụọgụ", "Ahịrị isi nwere aha doro anya"] },
            { title: "Hichaa ya", bullets: ["Mperi ide ihe, ugboro abụọ, oghere", "Otu aha e dere n'ụzọ abụọ", "AI na-edepụta nsogbu; gị na-edozi site n'isi iyi"] }
          ],
          tryIt: "Tinye data nke opekata mpe egwuregwu 10 na Google Sheets site n'isi iyi gọọmentị (official). Rịọ AI ka ọ depụta nsogbu, wee dozie nke ọ bụla site n'isi iyi ahụ.",
          youCanNow: "ịchịkọta data egwuregwu site n'isi iyi a pụrụ ịtụkwasị obi ma hichaa ya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka ahịrị ọ bụla nke tebụl ọnụọgụ gị kwesịrị ijide?", options: ["Otu oge egwuregwu (season)", "Ndụ egwuregwu niile nke otu onye", "Otu egwuregwu", "Otu aha otu"], answer: 2, why: "Otu egwuregwu n'ahịrị ọ bụla na-eme ka data dị mfe ịgụ na ilele." },
            { objective: "O2", q: "Egwuregwu nke 7 enweghị nọmba ọnwụnwa ya. Gịnị ka ị ga-eme?", options: ["Kọọ nkọ nọmba", "Jiri ihe AI chere", "Hichapụ egwuregwu niile", "Chọọ ya na box score gọọmentị (official)"], answer: 3, why: "A na-edozi oghere site n'isi iyi mbụ, ọ bụghị site n'ịkọ nkọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nkezi, pasentị na ọnụọgụ kwa egwuregwu",
          minutes: 6,
          goal: "Gụta nkezi, pasentị na ọnụọgụ kwa egwuregwu na Google Sheets.",
          text: [
            "Nkezi (average): gbakọọ nọmba niile ma kee ya n'ọnụ ọgụgụ ha. Na Sheets, =AVERAGE(B2:B11) na-enye nkezi nke cell ndị ahụ.",
            "Pasentị: ndị banyere (makes) kee n'ọnwụnwa (attempts). Pasentị akara atọ = 3PM / 3PA. Buru ụzọ gbakọọ ngụkọta, wee kee: =SUM(E2:E11)/SUM(D2:D11). Ịchọ nkezi nke pasentị egwuregwu ọ bụla nwere ike inye azịza ezighi ezi mgbe ọnwụnwa dị iche nke ukwuu.",
            "Ọnụọgụ kwa ihe (rate): ọnụọgụ kwa egwuregwu, kwa nkeji ma ọ bụ kwa ọnwụnwa na-eme ka ntụnyere ziri ezi mgbe oge egwuregwu dị iche. Akara kwa egwuregwu = akara niile / egwuregwu e gbara. Ngwa enyemaka AI nwere ike ịkọwa formula ọ bụla; jiri igwe mgbakọ lelee nsonaazụ n'otu ahịrị."
          ],
          steps: ["Jiri =AVERAGE() maka nkezi.", "Maka pasentị, kee ngụkọta ndị banyere na ngụkọta ọnwụnwa.", "Maka ọnụọgụ kwa ihe, kee ngụkọta n'egwuregwu ma ọ bụ nkeji.", "Hazie pasentị ka ọ gosi dị ka pasentị (%).", "Jiri igwe mgbakọ lelee otu nsonaazụ."],
          words: [["Nkezi (average, mean)", "ngụkọta e kere n'ọnụ ọgụgụ nọmba ndị ahụ."], ["Pasentị", "akụkụ n'ime 100, dị ka ndị banyere n'ime ọnwụnwa."], ["Ọnụọgụ kwa ihe (rate)", "ọnụọgụ kwa otu ihe, dị ka kwa egwuregwu ma ọ bụ kwa nkeji."]],
          slides: [
            { title: "Nkezi", bullets: ["Ngụkọta / ọnụ ọgụgụ", "=AVERAGE(B2:B11)"] },
            { title: "Pasentị", bullets: ["Ngụkọta ndị banyere / ngụkọta ọnwụnwa", "=SUM(makes)/SUM(attempts)", "Achọla nkezi pasentị egwuregwu"] },
            { title: "Ọnụọgụ kwa ihe (rate)", bullets: ["Kwa egwuregwu, kwa nkeji, kwa ọnwụnwa", "Ọ ziri ezi mgbe oge egwuregwu dị iche", "Jiri igwe mgbakọ lelee otu"] }
          ],
          tryIt: "Na sheet gị, gụta otu nkezi, otu pasentị (ụzọ ngụkọta) na otu ọnụọgụ kwa egwuregwu. Jiri igwe mgbakọ lelee otu n'ime ha.",
          youCanNow: "ịgụta nkezi, pasentị na ọnụọgụ kwa ihe nke ọma na spreadsheet.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ọnụọgụ kwa egwuregwu?", options: ["Ngụkọta e kere n'ọnụ ọgụgụ egwuregwu", "Akara egwuregwu ikpeazụ", "Nọmba kacha elu na kọlụm", "Nkọ banyere egwuregwu na-abịa"], answer: 0, why: "Ọnụọgụ kwa ihe na-ekesa ngụkọta n'egwuregwu ka e wee tụnyere ndị egwuregwu n'ụzọ ziri ezi." },
            { objective: "O3", q: "I jiri formula gụta pasentị otu. Kedu otu ị ga-esi lelee ya?", options: ["Tụkwasị formula ahụ obi", "Jiri igwe mgbakọ rụọ otu nsonaazụ", "Jụọ onye na-akwado egwuregwu", "Gbanwee data ruo mgbe ọ dị ka ọ ziri ezi"], answer: 1, why: "Ịlele otu nsonaazụ n'aka na-ejide mperi formula." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ajụjụ na data",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ezigbo ajụjụ nyocha data?", options: ["\"Onye kacha mma mgbe ọ bụla?\"", "\"Onye na-agba mbọ karịa?\"", "\"Anyị ọ na-agba akara atọ nke ọma karịa n'ụlọ ka ọ bụ n'èzí?\"", "\"Egwuregwu ọ na-atọ ụtọ?\""], answer: 2, why: "O doro anya, data nwekwara ike ịza ya." },
          { objective: "O2", q: "Ebee ka data gị kwesịrị isi?", options: ["Ọnụọgụ gọọmentị (official) nke otu, njikọ egwuregwu ma ọ bụ ụlọ akwụkwọ", "Naanị ihe i chetara", "Okwu mmadụ ọ bụla kwuru", "Nkọ"], answer: 0, why: "Isi iyi a pụrụ ịtụkwasị obi na-enye azịza a pụrụ ịtụkwasị obi." },
          { objective: "O2", q: "Ihicha data pụtara:", options: ["Ihichapụ data niile", "Ime ka nọmba buo ibu", "Ịgbanwe isi iyi ahụ", "Idozi mperi na oghere tupu i jiri data"], answer: 3, why: "Data dị ọcha na-enye nsonaazụ ziri ezi." },
          { objective: "O3", q: "Ụzọ kacha mma isi chọta pasentị akara atọ nke otu n'egwuregwu 10 bụ:", options: ["Ịchọ nkezi pasentị egwuregwu ọ bụla", "Ngụkọta ndị banyere kee na ngụkọta ọnwụnwa", "Ịgbakọ pasentị niile", "Ịkọ nkọ"], answer: 1, why: "Ngụkọta na-edozi egwuregwu nwere ọnwụnwa dị iche nke ọma." },
          { objective: "O3", q: "Gịnị mere ị ga-eji ọnụọgụ kwa egwuregwu ma ọ bụ kwa nkeji?", options: ["Iji mee ka nọmba buo ibu", "Iji tụnyere n'ụzọ ziri ezi mgbe oge egwuregwu dị iche", "N'ihi na ọ bụ ihe a na-eme ugbu a", "Iji zoo data"], answer: 1, why: "Ọnụọgụ kwa ihe na-edozi maka ohere onye ọ bụla nwere." }
        ]
      }
    },
    {
      name: "Isi 2: Igosi na ịkọwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime chaatị doro anya",
          minutes: 5,
          goal: "Mee otu chaatị nke na-aza ajụjụ gị ozugbo e lere ya anya.",
          text: [
            "Họrọ chaatị dabara n'ajụjụ ahụ. Ịtụnyere otu dị iche iche (n'ụlọ na n'èzí): bar chart. Mgbanwe n'oge (akara n'egwuregwu n'egwuregwu): line chart. Akụkụ nke ihe niile: bar chart na-adịkarị mfe ịghọta karịa pie chart.",
            "Mee ka o doo anya: aha (title) na-ekwu ihe ị chọpụtara (\"Anyị na-agba akara atọ ji pasentị 6 ka mma n'ụlọ\"), aha n'akụkụ (axis) abụọ, akụkụ y nke bar chart na-amalite na efu (0), na enweghị ihe ịchọ mma na-abaghị uru.",
            "Na Google Sheets, họrọ data gị ma tinye chaatị (insert chart), wee họrọ ụdị chaatị ma dezie aha. Ị nwere ike ịjụ ngwa enyemaka AI ụdị chaatị dabara n'ajụjụ gị."
          ],
          steps: ["Kpebie: ị na-atụnyere otu dị iche iche ka ọ bụ mgbanwe n'oge?", "Họrọ bar ma ọ bụ line.", "Tinye chaatị ahụ na Sheets.", "Dee aha na-ekwu ihe ị chọpụtara.", "Dee aha n'akụkụ abụọ; malite bar chart na efu."],
          words: [["Bar chart", "chaatị nwere ogwe (bar) iji tụnyere otu dị iche iche."], ["Line chart", "chaatị nwere ahịrị iji gosi mgbanwe n'oge."], ["Axis", "ahịrị dị n'akụkụ ma ọ bụ n'ala chaatị, nwere aha."]],
          slides: [
            { title: "Họrọ chaatị", bullets: ["Ịtụnyere otu: bar", "Mgbanwe n'oge: line", "Bar na-adịkarị mfe ịghọta karịa pie"] },
            { title: "Mee ka o doo anya", bullets: ["Aha na-ekwu ihe ị chọpụtara", "Aha n'akụkụ (axis)", "Ogwe na-amalite na efu"] },
            { title: "Na Sheets", bullets: ["Họrọ data, tinye chaatị", "Họrọ ụdị, dezie aha"] }
          ],
          tryIt: "Mee otu chaatị nke na-aza ajụjụ gị. Nye ya aha na-ekwu ihe ị chọpụtara, ma dee aha n'akụkụ (axis) abụọ ya.",
          youCanNow: "ime chaatị doro anya nke na-aza ajụjụ ozugbo e lere ya anya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ezigbo aha chaatị kwesịrị ime?", options: ["Ikwu naanị \"Chaatị 1\"", "Ịdepụta nọmba ọ bụla", "Ikwu ihe ị chọpụtara", "Ịhapụ ya oghere"], answer: 2, why: "Aha na-ekwu ihe ị chọpụtara na-eme ka ndị mmadụ ghọta chaatị ozugbo." },
            { objective: "O4", q: "Ị na-atụnyere ịgba bọọlụ n'ụlọ na n'èzí. Kedu chaatị ị ga-ahọrọ?", options: ["Pie chart", "Maapụ", "Tebụl na-enweghị chaatị", "Bar chart"], answer: 3, why: "Bar chart na-atụnyere otu ole na ole n'akụkụ ibe ha nke ọma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Correlation, ọnụ ọgụgụ data na ọnyà ndị ọzọ",
          minutes: 5,
          goal: "Hụ ọnyà atọ a na-ahụkarị na-eme ka nọmba duhie.",
          text: [
            "Obere data: egwuregwu atọ ezughị iji gosi ọtụtụ ihe. Onye egwuregwu banyere 4 n'ime 5 abụghị onye a ga-eji n'aka na ọ na-abanye pasentị 80. Egwuregwu ndị ọzọ na-eme ka obi sie gị ike karịa.",
            "Correlation abụghị ihe kpatara ya (causation): ọ bụrụ na otu na-emeri karịa mgbe ọ na-eyi uwe acha anụnụ anụnụ, o yighị ka uwe ahụ bụ ihe kpatara ya. Ihe abụọ na-agakọ ọnụ apụtaghị na otu na-akpata nke ọzọ; chọọ nkọwa ndị ọzọ, dị ka ike ndị a na-egwuri megide ma ọ bụ egwuregwu n'ụlọ.",
            "Ọnọdụ dị mkpa: ọnụọgụ anaghị ejide ihe niile, dị ka mbọ n'ichebe (defense), mmerụ ahụ, ma ọ bụ otú ndị a na-egwuri megide si dị mma. Ngwa enyemaka AI nwere ike inyere gị aka idepụta nkọwa ndị ọzọ: \"Gịnị ọzọ nwere ike ịkọwa usoro a?\""
          ],
          steps: ["Lelee ọnụ ọgụgụ data (sample size).", "Jụọ: ihe ọzọ ọ nwere ike ịkọwa ya?", "Lee ọnọdụ: ndị a na-egwuri megide, mmerụ ahụ, n'ụlọ ma ọ bụ n'èzí.", "Rịọ AI maka nkọwa ndị ọzọ.", "Dee otú obi si sie gị ike."],
          words: [["Ọnụ ọgụgụ data (sample size)", "egwuregwu ma ọ bụ ọnwụnwa ole dị na data gị."], ["Correlation", "ihe abụọ na-agakọkarị ọnụ."], ["Causation", "mgbe otu ihe na-akpata ihe ọzọ n'ezie."]],
          slides: [
            { title: "Obere data", bullets: ["4 n'ime 5 egosighị na ọ bụ pasentị 80", "Egwuregwu karịa, obi sie ike karịa"] },
            { title: "Correlation abụghị causation", bullets: ["Uwe acha anụnụ anụnụ anaghị emeri egwuregwu", "Chọọ nkọwa ndị ọzọ"] },
            { title: "Ọnọdụ", bullets: ["Ndị a na-egwuri megide, mmerụ ahụ, n'ụlọ/n'èzí", "A naghị agụkarị mbọ na ichebe (defense)"] }
          ],
          tryIt: "Lee ihe ị chọpụtara. Dee ọnụ ọgụgụ data, ihe abụọ ọzọ nwere ike ịkọwa ya, na otú obi si sie gị ike (obere, n'etiti, elu).",
          youCanNow: "ịhụ obere data, mgbagwoju anya correlation na causation, na ọnọdụ a na-ekwughị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ ọnyà obere data?", options: ["Ime mkpebi buru ibu site n'egwuregwu ma ọ bụ ọnwụnwa ole na ole", "Iji data gọọmentị (official)", "Ime bar chart", "Ide aha n'akụkụ chaatị"], answer: 0, why: "Egwuregwu ma ọ bụ ọnwụnwa ole na ole nwere ike ịgbanwe site na chi." },
            { objective: "O5", q: "Otu gị nwetara akara karịa mgbe ha malitere ụzọ ọhụrụ e si akwado ahụ (warm-up), mana ha gbakwara megide ndị na-esighị ike. Gịnị ka ị ga-ede?", options: ["Warm-up ahụ kpatara ya", "Ndị na-esighị ike ha gbara megide nwekwara ike ịkọwa ya", "Ọ dịghị; e gosila ya", "Hichapụ ihe ị chọpụtara"], answer: 1, why: "Ihe ndị ọzọ nwere ike ịkọwa usoro, ya mere ị na-akpọ aha ha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkọwa ihe ị chọpụtara",
          minutes: 5,
          goal: "Dee ma kesaa ihe ị chọpụtara n'ahịrịokwu atọ, ya na oke ya.",
          text: [
            "Ezigbo ihe a chọpụtara nwere ahịrịokwu atọ: 1. Ihe ị chọpụtara, ya na nọmba. 2. Ihe mere o nwere ike ịdị mkpa nye otu ahụ. 3. Otu oke nke data ahụ. Ọmụmaatụ: \"N'egwuregwu 12, anyị banyere 38% n'akara atọ n'ụlọ na 31% n'èzí. Ọ bụrụ na nke a eguzosie, ịmụ omume maka egwuregwu n'èzí nwere ike inye aka. Ebe ọ bụ naanị egwuregwu 6 n'èzí, nke a nwere ike ịbụ chi.\"",
            "Rịọ ngwa enyemaka AI ka o mee ka ahịrịokwu gị doo anya karị, wee lelee nọmba ndị ahụ n'onwe gị. Gosi chaatị ahụ ya na ya.",
            "Kesaa ya na coach gị dị ka ozi, ọ bụghị dị ka iwu. Ndị coach na-ejikọta nọmba na ihe ha na-ahụ anya. Ekesala data onye egwuregwu n'otu n'otu n'ihu ọha mgbe ọ bụla n'enweghị ikike."
          ],
          steps: ["Ahịrịokwu 1: ihe ị chọpụtara, ya na nọmba.", "Ahịrịokwu 2: ihe mere o nwere ike ịdị mkpa.", "Ahịrịokwu 3: otu oke.", "Tinye chaatị gị.", "Kesaa ya na coach gị, ọ bụghị n'ihu ọha."],
          words: [["Ihe a chọpụtara (finding)", "ihe nyocha gị na-egosi."], ["Oke (limit)", "ihe mere ihe a chọpụtara nwere ike ọ gaghị abụ nke a pụrụ ịtụkwasị obi kpamkpam."]],
          slides: [
            { title: "Ahịrịokwu atọ", bullets: ["1. Ihe ị chọpụtara, ya na nọmba", "2. Ihe mere o nwere ike ịdị mkpa", "3. Otu oke"] },
            { title: "Mee ka ọ maa mma", bullets: ["AI na-eme ka o doo anya", "Gị na-elele nọmba", "Tinye chaatị gị"] },
            { title: "Kesaa nke ọma", bullets: ["Ozi, ọ bụghị iwu", "Coach na-ejikọta data na ihe ọ hụrụ", "Ọ dịghị data onye egwuregwu n'ihu ọha n'enweghị ikike"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee ihe ị chọpụtara n'ahịrịokwu atọ ya na chaatị gị, ọnụ ọgụgụ data na isi iyi gị, ma kesaa ya na coach gị ma ọ bụ onye otu gị.",
          youCanNow: "ịkọwa ihe data gosiri n'eziokwu, gụnyere oke ya.",
          quickCheck: [
            { objective: "O6", q: "Kedu akụkụ atọ nke ezigbo ihe a chọpụtara?", options: ["Njakịrị, chaatị na nkọ", "Naanị nọmba kacha ukwuu", "Nọmba, ihe mere o ji dị mkpa na oke", "Iwu, ụbọchị njedebe na aha"], answer: 2, why: "Akụkụ atọ ndị ahụ na-eme ka ihe a chọpụtara doo anya ma bụrụ eziokwu." },
            { objective: "O6", q: "Ị chọrọ itinye ọnụọgụ onye otu gị n'ịntanetị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Tinye ha ozugbo", "Gbanwee aha ya ntakịrị", "Tinye naanị egwuregwu ọjọọ", "Rịọ ya ikike"], answer: 3, why: "A na-ekesa data onye egwuregwu n'otu n'otu n'ihu ọha naanị site n'ikike." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Igosi na ịkọwa",
        questions: [
          { objective: "O4", q: "Kedu chaatị dabara \"akara n'egwuregwu n'egwuregwu n'oge egwuregwu niile\"?", options: ["Pie chart", "Enweghị chaatị", "Maapụ", "Line chart"], answer: 3, why: "Line chart na-egosi mgbanwe n'oge." },
          { objective: "O4", q: "Ezigbo aha chaatị:", options: ["Na-ekwu ihe a chọpụtara", "Na-ekwu \"Chaatị 1\"", "Bụ oghere", "Bụ njakịrị"], answer: 0, why: "Ọ na-agwa onye na-agụ ihe ọ ga-ahụ." },
          { objective: "O5", q: "Onye egwuregwu banyere 4 n'ime 5 n'otu egwuregwu. Nke a na-egosi:", options: ["Na ọ na-abanye pasentị 80", "Na ọ kwesịrị ịgba bọọlụ ọ bụla", "Ọ bụghị ọtụtụ ihe; data ahụ dị obere", "Ọ dịghị ihe ọ bụla mgbe ọ bụla"], answer: 2, why: "Obere data nwere ike iduhie." },
          { objective: "O5", q: "Otu na-emeri karịa mgbe ha yi uwe acha anụnụ anụnụ. O yikarịrị ka:", options: ["Acha anụnụ anụnụ na-akpata mmeri", "Eyila uwe uhie mgbe ọ bụla", "Data ahụ bụ adịgboroja", "Ihe ọzọ na-akọwa ya"], answer: 3, why: "Correlation abụghị causation." },
          { objective: "O6", q: "Ahịrịokwu nke atọ nke ihe a chọpụtara bụ:", options: ["Iwu nye coach", "Otu oke nke data ahụ", "Njakịrị", "Okwuntughe gị"], answer: 1, why: "Ihe a chọpụtara n'eziokwu na-agụnye oke ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ntọala Nyocha Data Egwuregwu",
    questions: [
      { objective: "O1", q: "Nyocha data na-amalite site na:", options: ["Spreadsheet", "Chaatị", "Ajụjụ", "Nkọ"], answer: 2, why: "Ajụjụ ahụ na-eduzi ihe ndị ọzọ niile." },
      { objective: "O1", q: "Kedu ajụjụ data NA-ENWEGHỊ ike ịza nke ọma?", options: ["\"Onye na-agba mbọ karịa?\"", "\"Anyị ọ na-enweta akara karịa n'ụlọ?\"", "\"Serve m ọ ka mma na set 1?\"", "\"Anyị ọ na-atụfu bọọlụ karịa na nkeji nke 4?\""], answer: 0, why: "A naghị atụ mbọ na box score." },
      { objective: "O2", q: "Box score bụ:", options: ["Tebụl ọnụọgụ sitere n'otu egwuregwu", "Igbe onyinye", "Ụdị chaatị", "Oche ndị otu"], answer: 0, why: "Ọ na-edepụta ọnụọgụ otu egwuregwu." },
      { objective: "O2", q: "Na tebụl gị, ahịrị ọ bụla kwesịrị ịbụ:", options: ["Otu oge egwuregwu (season)", "Otu nọmba ọ bụla", "Otu egwuregwu", "Otu chaatị"], answer: 2, why: "Otu ahịrị kwa egwuregwu na-eme ka ọ dị n'usoro." },
      { objective: "O2", q: "\"Lincoln HS\" na \"Lincoln High\" n'otu kọlụm bụ:", options: ["Ọ dị mma", "Aha na-adabaghị ị ga-ehicha", "Chaatị", "Formula"], answer: 1, why: "Otu otu e dere n'ụzọ abụọ na-emebi ngụkọ." },
      { objective: "O2", q: "AI hụrụ ebe tọgbọrọ chakoo. Ị na-edozi ya site na:", options: ["Ịkọ nkọ", "Ịhapụ AI ka o chepụta ya", "Ihichapụ kọlụm ahụ", "Ịlele isi iyi mbụ"], answer: 3, why: "Dozie site n'isi iyi, ọ bụghị site n'ịkọ nkọ." },
      { objective: "O3", q: "=AVERAGE(B2:B11) na-enye:", options: ["Ngụkọta", "Nọmba kacha ukwuu", "Nkezi nke cell ndị ahụ", "Chaatị"], answer: 2, why: "AVERAGE na-agụta nkezi." },
      { objective: "O3", q: "Pasentị akara atọ ha nhata:", options: ["3PA kee na 3PM", "3PM gbakwunye 3PA", "Akara kee n'egwuregwu", "3PM kee na 3PA"], answer: 3, why: "Ndị banyere n'elu ọnwụnwa." },
      { objective: "O3", q: "Gịnị mere ị gaghị eji chọọ nkezi pasentị egwuregwu ọ bụla?", options: ["Egwuregwu nwere ọnwụnwa dị iche na-enweta ịdị arọ ezighi ezi", "Ọ megidere iwu", "Ọ na-eziri ezi mgbe niile", "Sheets enweghị ike ime ya"], answer: 0, why: "Jiri ngụkọta maka ezi pasentị." },
      { objective: "O3", q: "Akara kwa egwuregwu bụ:", options: ["Pasentị", "Ọnụọgụ kwa ihe (rate)", "Chaatị", "Box score"], answer: 1, why: "Ọ bụ ọnụọgụ kwa egwuregwu." },
      { objective: "O3", q: "Lelee formula site na:", options: ["Ịtụkwasị ya obi", "Ihichapụ ya", "Iji igwe mgbakọ rụọ otu ahịrị", "Ịjụ onye na-akwado egwuregwu"], answer: 2, why: "Otu nlele n'aka na-ejide mperi." },
      { objective: "O4", q: "Iji tụnyere n'ụlọ na n'èzí, jiri:", options: ["Bar chart", "Naanị line chart n'oge", "Enweghị chaatị", "Foto"], answer: 0, why: "Ogwe na-atụnyere otu dị iche iche." },
      { objective: "O4", q: "Bar chart kwesịrị ịmalitekarị akụkụ y na:", options: ["Nọmba kacha nta", "100", "Ebe ọ bụla", "Efu (0)"], answer: 3, why: "Ma ọ bụghị ya, ọdịiche ga-adị ka ọ buru ibu karịa ka ọ dị." },
      { objective: "O4", q: "Ihe na-adịkarị mfe ịghọta karịa pie chart:", options: ["Pie 3D", "Bar chart", "Igwe okwu (word cloud)", "Peeji oghere"], answer: 1, why: "Ogwe dị mfe ịtụnyere." },
      { objective: "O5", q: "Ọnụ ọgụgụ data (sample size) pụtara:", options: ["Nha akpụkpọ ụkwụ gị", "Egwuregwu ma ọ bụ ọnwụnwa ole dị na data gị", "Nha chaatị", "Ọnụ ọgụgụ ndị otu"], answer: 1, why: "Data karịa pụtara obi ike karịa." },
      { objective: "O5", q: "Correlation pụtara:", options: ["Otu na-akpata nke ọzọ", "Ụdị chaatị", "Nzọụkwụ ihicha data", "Ihe abụọ na-agakọkarị ọnụ"], answer: 3, why: "Ịgakọ ọnụ abụghị ịkpata." },
      { objective: "O5", q: "Kedu nke bụ ọnọdụ ọnụọgụ nwere ike ọ gaghị ejide?", options: ["Ike ndị a na-egwuri megide na mmerụ ahụ", "Akara", "Rebound", "Akara ikpeazụ"], answer: 0, why: "Ọnọdụ na-akọwa nọmba." },
      { objective: "O6", q: "Ezigbo ihe a chọpụtara gụnyere:", options: ["Naanị echiche", "Ọnụọgụ ọ bụla", "Nọmba, ihe mere o ji dị mkpa na oke", "Enweghị nọmba"], answer: 2, why: "Nke ahụ bụ usoro ahịrịokwu atọ." },
      { objective: "O6", q: "Ị na-ekesa ihe ị chọpụtara na coach gị dị ka:", options: ["Iwu", "Ozi na soshal midia", "Ihe nzuzo", "Ozi, ọ bụghị iwu"], answer: 3, why: "Ndị coach na-ejikọta data na ihe ha na-ahụ." },
      { objective: "O6", q: "A ga-ekesa data onye egwuregwu n'otu n'otu n'ihu ọha:", options: ["Mgbe niile", "Naanị site n'ikike", "Nye otu ndị iro", "Na nkọwa (comments)"], answer: 1, why: "Data onye egwuregwu bụ nke ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      5,
      7,
      8,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ajụjụ",
        objective: "O1",
        notYet: "Ajụjụ ahụ edoghị anya ma ọ bụ ọnụọgụ enweghị ike ịza ya.",
        meets: "Ajụjụ ahụ na-akpọ aha ọnụọgụ, egwuregwu ndị ahụ na ihe a na-atụnyere.",
        exceeds: "Ọ na-ekwukwa ihe mere azịza ahụ ji dị mkpa nye otu ahụ."
      },
      {
        name: "Data dị ọcha",
        objective: "O2",
        notYet: "Egwuregwu erughị 10, enweghị isi iyi, ma ọ bụ oghere na aha na-adabaghị fọdụrụ n'ime ya.",
        meets: "Opekata mpe egwuregwu 10 site n'isi iyi gọọmentị (official), otu n'ahịrị ọ bụla, e hichara ya.",
        exceeds: "Na-edekọ mgbanwe ọ bụla e mere na ebe e lelere ya."
      },
      {
        name: "Mgbakọ",
        objective: "O3",
        notYet: "Mgbakọ fọdụrụ ma ọ bụ pasentị na-achọ nkezi pasentị egwuregwu.",
        meets: "Nkezi, pasentị ụzọ ngụkọta na ọnụọgụ kwa egwuregwu, e lelere otu n'aka.",
        exceeds: "E dere aha formula ka onye ọzọ nwee ike ịghọta ha."
      },
      {
        name: "Chaatị",
        objective: "O4",
        notYet: "Ụdị chaatị ezighi ezi, enweghị aha ma ọ bụ akụkụ (axis) enweghị aha.",
        meets: "Otu chaatị dabara, nwere aha na-ekwu ihe a chọpụtara na aha n'akụkụ.",
        exceeds: "Bar chart na-amalite na efu, ọ dịghịkwa ihe ọzọ na-adọpụ uche n'ihe a chọpụtara."
      },
      {
        name: "Ihe a chọpụtara n'eziokwu",
        objective: "O6",
        notYet: "Na-ekwu na e gosiri ya n'ezie ma ọ bụ hapụ ọnụ ọgụgụ data na oke.",
        meets: "Ahịrịokwu atọ: nọmba, ihe mere o ji dị mkpa na otu oke, ya na isi iyi.",
        exceeds: "Na-akpọkwa aha nkọwa ndị ọzọ nwere ike ịbụ na otú obi si sie ya ike."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kesara ihe data gosiri na coach ma ọ bụ otu n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị coach ma ọ bụ otu na-akọ na ha jiri nyocha onye na-amụ ihe mee mkpebi",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka ndị egwuregwu ma ọ bụ data n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere Google Sheets n'efu",
      "Ohere ịbanye na peeji ọnụọgụ gọọmentị (official) nke otu, njikọ egwuregwu ma ọ bụ ụlọ akwụkwọ",
      "Igwe mgbakọ na ngwa enyemaka AI n'efu",
      "Ihe dị ka nkeji 60 maka nkuzi, nnwale na ule, gbakwunye oge itinye data nke egwuregwu 10"
    ],
    facilitatorNotes: [
      "Hapụ obere otu ka ha họrọ otu egwuregwu ma kekọrịta itinye data, wee tụnyere sheet ndị ha hichara.",
      "Gosi ụzọ ngụkọta maka pasentị n'ihu ha; ọ bụ mperi a na-emekarị.",
      "Jiri ọnụọgụ otu egwuregwu ma ọ bụ nke ọha maka omume; nweta ikike tupu ikesa nọmba onye egwuregwu ọ bụla.",
      "Rịọ otu ọ bụla ka ọ gụpụta ihe ọ chọpụtara n'olu dị elu ma kpọọ aha otu oke tupu ọ kesaa ya na coach.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
