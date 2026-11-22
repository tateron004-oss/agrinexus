"use strict";

// Koach Learn course (Igbo translation of underserved/underserved-data-analytics-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-data-analytics-tools-ig",
  lang: "ig",
  translationOf: "underserved-data-analytics-tools",
  category: "Undeserved Community",
  name: "Mmalite Ngwaọrụ na Ụzọ Nnyocha Data",
  skills: "Ịhazi spreadsheet dị ọcha, Ịhazi n'usoro na ịchọpụta data, Iji SUM na AVERAGE, Ime chaatị, Iji AI kọwaa formula, Ikesa ihe ị chọpụtara n'okwu dị mfe",
  outcome: "itinye ezi ozi na spreadsheet n'efu (Google Sheets ma ọ bụ Excel for the web), hazie ya n'usoro ma chọpụta ihe ị chọrọ n'ime ya, gbakọọ ngụkọta na nkezi ya site na formula, mee chaatị, ma kọwaa ihe ọ na-egosi n'ahịrịokwu abụọ dị mfe.",
  about: [
    "Nnyocha data (data analytics) pụtara iji ozi zaa ajụjụ. Ebe a na-enye nri n'efu (food pantry) chọrọ ịma ụbọchị ndị mmadụ kacha abịa. Ezinụlọ chọrọ ịma ebe ego ya na-aga. Otu egwuregwu ụmụaka chọrọ ịma ụmụaka ole bịara kwa izu. Ị nwere ike ịza ajụjụ ndị a site na ngwaọrụ n'efu.",
    "N'ihe ọmụmụ a, ị ga-eji spreadsheet n'efu, Google Sheets ma ọ bụ Excel for the web, na ekwentị, kọmputa ụlọ ma ọ bụ kọmputa ọba akwụkwọ. Ị ga-etinye data, hazie ya n'usoro, chọpụta ihe n'ime ya, jiri formula dị mfe, mee chaatị, ma jiri ngwa enyemaka AI n'efu mgbe ihe siri gị ike.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" nke na-ewu otu spreadsheet ahụ, nzọụkwụ n'otu n'otu. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee spreadsheet nke data otu ọnwa, nke ezi ma ọ bụ nke omume (dịka ọmụmaatụ ndị bịara ebe nri n'efu kwa ụbọchị, ma ọ bụ ego ezinụlọ mefuru n'ụdị ọ bụla). Hazie ya n'usoro, chọpụta ihe n'ime ya (filter), tinye ngụkọta site na SUM na nkezi site na AVERAGE, mee chaatị, ma dee ahịrịokwu abụọ dị mfe na-ekwu ihe data ahụ na-egosi.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na ndị ntorobịa n'obodo ndị na-enwetaghị enyemaka zuru ezu, ndị chọrọ nka kọmputa maka ọrụ ma ọ bụ ndị kwesịrị idebe nọmba maka ezinụlọ, ebe nri n'efu, ụka, otu egwuregwu ụmụaka ma ọ bụ obere otu na-adịghị achọ uru (nonprofit).",
    startingPoint: "Ha nwere ike iji ekwentị, ma eleghị anya kọmputa, leta weebụsaịtị. Ọtụtụ ejibeghị spreadsheet, edeghị formula ma ọ bụ mee chaatị mgbe ọ bụla, ụfọdụ enweghịkwa obi ike na mgbakọ na mwepụ.",
    gap: "A na-achọ nka spreadsheet n'ọtụtụ ọrụ ọfịs, ụlọ ahịa na nonprofit, otu obodo kwesịkwara igosi ihe nọmba ha pụtara. Ndị na-amụ ihe kwesịrị itinye data dị ọcha, hazie ya n'usoro, chọpụta ihe, gbakọọ ngụkọta, mee chaatị ma kọwaa ya, site na ngwaọrụ n'efu, ma debe ozi ndị mmadụ na nzuzo.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 6)",
      "Ngwaọrụ: kọmputa ọba akwụkwọ ma ọ bụ nke ụlọ kacha mma; app ekwentị na-arụ ọrụ maka obere spreadsheet",
      "Ego: Google Sheets ma ọ bụ Excel for the web n'efu, nwere akaụntụ n'efu",
      "Nzuzo: etinyela aha, nọmba ekwentị ma ọ bụ nọmba akaụntụ nke ezi ndị mmadụ n'ime AI",
      "Ọkwa mgbakọ: naanị ịgbakọ ngụkọta na nkezi; spreadsheet na-eme mgbakọ ahụ"
    ],
    prerequisites: "Ọ dịghị. Ndị ejibeghị òké kọmputa (mouse) ma ọ bụ keyboard mgbe ọ bụla nwere ike ibu ụzọ were ihe ọmụmụ nka kọmputa mbido."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ihe dị gị mkpa n'ụlọ, n'ọrụ ma ọ bụ n'obodo gị", action: "ide otu ajụjụ doro anya nke data nwere ike ịza ma depụta data ị chọrọ", standard: "nke na-amalite na \"kedu\", \"ole\" ma ọ bụ \"ego ole\"" },
    { id: "O2", condition: "Site n'iji Google Sheets ma ọ bụ Excel for the web", action: "imepụta spreadsheet nwere isi okwu doro anya ma tinye data dị ọcha", standard: "otu isi okwu n'otu kọlụm n'ahịrị 1 na otu ndekọ n'otu ahịrị, opekata mpe ahịrị iri" },
    { id: "O3", condition: "Mgbe e nyere gị spreadsheet nwere data", action: "ịhazi kọlụm site na nke kacha ukwuu ruo nke kacha nta ma jiri filter gosi naanị ụfọdụ ahịrị", standard: "wee kpochapụ filter ahụ ka ahịrị niile laghachi" },
    { id: "O4", condition: "Mgbe e nyere gị kọlụm nwere nọmba", action: "ịgbakọ ngụkọta site na SUM na nkezi site na AVERAGE", standard: "na-eji range ziri ezi ka ha abụọ gbanwee mgbe nọmba gbanwere" },
    { id: "O5", condition: "Mgbe e nyere gị data gị na ngwa enyemaka AI n'efu", action: "ime chaatị nwere aha doro anya ma jụọ AI ka ọ kọwaa formula ma ọ bụ njehie", standard: "na-ahọrọ ụdị chaatị ziri ezi ma n'etinyeghị ozi nzuzo ọ bụla" },
    { id: "O6", condition: "Mgbe spreadsheet gị gwụrụ", action: "ide ahịrịokwu abụọ dị mfe na-aza ajụjụ gị, lelee ọrụ gị ma kesaa ya n'enweghị nsogbu", standard: "nwere nọmba na-akwado azịza ahụ ma na-ekesara naanị ndị chọrọ ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkwadebe data gị",
      lessons: [
        {
          title: "Ihe nnyocha data bụ, na ịjụ ezigbo ajụjụ",
          objectives: ["O1"],
          minutes: 4,
          goal: "Dee otu ajụjụ doro anya nke data nwere ike ịza.",
          text: [
            "Data bụ ozi ị nwere ike ịgụ ọnụ ma ọ bụ depụta: ụbọchị, ego, aha ebe, ọnụ ọgụgụ ndị bịara. Nnyocha (analytics) pụtara ile data ahụ anya iji zaa ajụjụ.",
            "Ọrụ ọ bụla dị mma na-amalite n'ajụjụ doro anya. \"Kedu ụbọchị n'izu ndị mmadụ kacha abịa ebe nri n'efu anyị?\" doro anya. \"Gwa m maka ebe nri ahụ\" edoghị anya.",
            "Ajụjụ doro anya na-agwa gị data ị ga-achịkọta. Iji chọta ụbọchị kacha enwe ndị mmadụ, ị chọrọ ụbọchị ahụ na ọnụ ọgụgụ ndị bịara n'ụbọchị ọ bụla."
          ],
          steps: ["Họrọ ihe dị gị mkpa: ezinụlọ, ọrụ, ụlọ akwụkwọ ma ọ bụ obodo.", "Dee otu ajụjụ na-amalite na \"kedu\", \"ole\" ma ọ bụ \"ego ole\".", "Depụta data ị chọrọ iji zaa ya."],
          words: [["Data", "ozi ị nwere ike ịgụ ọnụ ma ọ bụ depụta, dị ka ụbọchị, ego ma ọ bụ aha."], ["Nnyocha (analytics)", "ile data anya iji zaa ajụjụ."]],
          slides: [
            { title: "Data na nnyocha", bullets: ["Data: ozi ị nwere ike ịgụ ọnụ ma ọ bụ depụta", "Nnyocha: iji data zaa ajụjụ"] },
            { title: "Malite n'ajụjụ doro anya", bullets: ["Doro anya: \"Kedu ụbọchị ndị mmadụ kacha abịa?\"", "Edoghị anya: \"Gwa m maka ebe nri ahụ\""] },
            { title: "Ajụjụ na-agwa gị ihe ị ga-achịkọta", bullets: ["Ụbọchị kacha enwe ndị mmadụ? Ị chọrọ ụbọchị na ọnụ ọgụgụ ndị bịara", "Ihe kacha ewe ego? Ị chọrọ ụdị ihe na ego"] }
          ],
          tryIt: "Dee otu ajụjụ doro anya banyere ezinụlọ gị, ọrụ gị, ụlọ akwụkwọ ma ọ bụ obodo gị nke nọmba nwere ike ịza. N'okpuru ya, depụta ụdị data abụọ ma ọ bụ atọ ị ga-achọ.",
          youCanNow: "ide ajụjụ doro anya ma kpọọ aha data ị chọrọ iji zaa ya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ data?", options: ["Ozi ị nwere ike ịgụ ọnụ ma ọ bụ depụta", "Naanị nọmba dị n'akwụkwọ ụlọ akụ", "Ụdị kọmputa", "Weebụsaịtị"], answer: 0, why: "Data bụ ozi dị ka ụbọchị, ego, ebe na ọnụ ọgụgụ ndị bịara." },
            { objective: "O1", q: "Ụka gị chọrọ ịma ma ndị mmadụ na-abịakarị n'oge oyi. Kedu data ị chọrọ?", options: ["Nọmba ekwentị onye pastọ", "Ụbọchị na ọnụ ọgụgụ ndị bịara ofufe ọ bụla", "Agba ụlọ ụka ahụ", "Ọ dịghị; naanị chee echiche"], answer: 1, why: "Ajụjụ doro anya na-agwa gị ka ị chịkọta ụbọchị na ọnụ ọgụgụ maka ofufe ọ bụla." }
          ]
        },
        {
          title: "Imeghe spreadsheet n'efu na itinye data",
          objectives: ["O2"],
          minutes: 5,
          goal: "Mee spreadsheet nwere isi okwu kọlụm doro anya na data gị.",
          text: [
            "Spreadsheet bụ ụgbụ igbe a na-akpọ cell. Kọlụm na-aga elu na ala, nwee mkpụrụ akwụkwọ (A, B, C). Ahịrị na-aga n'obosara, nwee nọmba (1, 2, 3). Cell B2 dị na kọlụm B, ahịrị 2.",
            "Nhọrọ n'efu: Google Sheets na sheets.google.com nwere akaụntụ Google n'efu, ma ọ bụ Excel for the web na office.com nwere akaụntụ Microsoft n'efu. Ha abụọ na-arụ ọrụ na web browser na dị ka app ekwentị.",
            "Debe data ọcha: otu isi okwu n'otu kọlụm n'ahịrị 1 (dị ka Ụbọchị, Ụbọchị izu, Ndị bịara), otu ahịrị maka ndekọ ọ bụla, na nọmba e dere dị ka nọmba nkịtị n'enweghị okwu ọzọ. Data dị ọcha na-eme ka nzọụkwụ ọ bụla na-esote dị mfe."
          ],
          steps: ["Meghee sheets.google.com ma ọ bụ office.com ma malite spreadsheet efu.", "Nye faịlụ ahụ aha doro anya.", "Dee isi okwu na kọlụm ọ bụla nke ahịrị 1.", "Tinye otu ndekọ n'otu ahịrị n'okpuru isi okwu ndị ahụ."],
          words: [["Spreadsheet", "ụgbụ ahịrị na kọlụm maka iji nọmba na ndepụta arụ ọrụ."], ["Cell", "otu igbe na spreadsheet, a na-akpọ ya site na mkpụrụ akwụkwọ kọlụm ya na nọmba ahịrị ya, dị ka B2."], ["Isi okwu (heading)", "aha dị n'elu kọlụm."]],
          slides: [
            { title: "Spreadsheet bụ ụgbụ", bullets: ["Kọlụm nwere mkpụrụ akwụkwọ: A, B, C", "Ahịrị nwere nọmba: 1, 2, 3", "Cell B2 = kọlụm B, ahịrị 2"] },
            { title: "Ngwaọrụ spreadsheet n'efu", bullets: ["Google Sheets: sheets.google.com", "Excel for the web: office.com", "Ha abụọ na-arụ ọrụ na kọmputa ọba akwụkwọ ma ọ bụ ekwentị"] },
            { title: "Debe data ọcha", bullets: ["Otu isi okwu n'otu kọlụm n'ahịrị 1", "Otu ndekọ n'otu ahịrị", "Nọmba dị ka nọmba nkịtị"] }
          ],
          tryIt: "Meghee spreadsheet n'efu. Mee isi okwu atọ maka ajụjụ gị (dịka ọmụmaatụ Ụbọchị, Ụbọchị izu, Ndị bịara) ma tinye opekata mpe ahịrị iri nke data ezi ma ọ bụ nke omume.",
          youCanNow: "ịmalite spreadsheet n'efu ma tinye data dị ọcha n'okpuru isi okwu doro anya.",
          quickCheck: [
            { objective: "O2", q: "Na spreadsheet, gịnị ka e ji akpọ ahịrị?", options: ["Mkpụrụ akwụkwọ", "Agba", "Nọmba", "Aha"], answer: 2, why: "Ahịrị na-aga n'obosara ma nwee nọmba; kọlụm nwere mkpụrụ akwụkwọ." },
            { objective: "O2", q: "I dere \"ihe dị ka mmadụ 40\" na kọlụm Ndị bịara. Gịnị ka ị ga-agbanwe?", options: ["Ọ dịghị ihe", "Tinyekwuo okwu", "Mee ya ka o gbaa ọchịchịrị (bold)", "Dee naanị 40 dị ka nọmba nkịtị"], answer: 3, why: "Data dị ọcha na-eji nọmba nkịtị ka spreadsheet nwee ike iji ha gbakọọ." }
          ]
        },
        {
          title: "Ịhazi n'usoro na iji filter",
          objectives: ["O3"],
          minutes: 5,
          goal: "Hazie data gị site na nke kacha ukwuu ruo nke kacha nta ma jiri filter gosi naanị ụfọdụ ahịrị.",
          text: [
            "Ịhazi n'usoro (sort) na-etinye ahịrị n'usoro, dị ka site na nke kacha ukwuu ruo nke kacha nta. Ịhazi kọlụm Ndị bịara site na nke kacha ukwuu ruo nke kacha nta na-etinye ụbọchị kacha enwe ndị mmadụ n'elu.",
            "Filter na-ezo ahịrị ndị ị na-achọghị ugbu a. Ị nwere ike iji filter na kọlụm Ụbọchị izu gosi naanị Satọdee. Filter anaghị ehichapụ ihe ọ bụla; ị nwere ike ịgbanyụ ya, ahịrị niile ga-alaghachi.",
            "Na Google Sheets na Excel for the web, sort na filter dị na menu Data ma ọ bụ taabụ Data. Ọ bụrụ na ịchọtaghị ha, jụọ ngwa enyemaka AI n'efu: \"Kedu otu m ga-esi hazie kọlụm site na nke kacha ukwuu ruo nke kacha nta na Google Sheets?\""
          ],
          steps: ["Pịa cell ọ bụla dị na data gị.", "Meghee menu Data ma ọ bụ taabụ Data ma gbanye filter.", "Jiri obere akụ dị n'isi okwu hazie site na nke kacha ukwuu ruo nke kacha nta.", "Jiri akụ dị n'isi okwu ọzọ gosi naanị ụfọdụ ihe, wee kpochapụ filter ahụ."],
          words: [["Sort", "itinye ahịrị n'usoro, dị ka site na nke kacha ukwuu ruo nke kacha nta ma ọ bụ site na A ruo Z."], ["Filter", "igosi naanị ahịrị dabara ihe ị họọrọ, n'ehichapụghị ndị ọzọ."]],
          slides: [
            { title: "Sort: tinye ahịrị n'usoro", bullets: ["Nke kacha ukwuu ruo nke kacha nta na-ebute nke kacha elu ụzọ", "A ruo Z na-etinye aha n'usoro"] },
            { title: "Filter: gosi naanị ihe ị chọrọ", bullets: ["Ọmụmaatụ: naanị Satọdee", "Ọ dịghị ihe a na-ehichapụ", "Gbanyụọ ya, ahịrị niile ga-alaghachi"] },
            { title: "Ebe ị ga-achọta ha", bullets: ["Menu Data ma ọ bụ taabụ Data", "Ọ siri ike? Jụọ AI otu esi eme ya na ngwaọrụ gị"] }
          ],
          tryIt: "Hazie kọlụm nọmba gị kacha mkpa site na nke kacha ukwuu ruo nke kacha nta ma dee ahịrị dị n'elu. Wee jiri filter gosi naanị otu ụdị ahịrị, ma kpochapụ filter ahụ.",
          youCanNow: "ịhazi spreadsheet n'usoro ma jiri filter chọta ihe ị na-achọ.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka sort na-eme?", options: ["Ọ na-etinye ahịrị n'usoro, dị ka site na nke kacha ukwuu ruo nke kacha nta", "Ọ na-ehichapụ ahịrị ị na-achọghị", "Ọ na-agbakọ kọlụm ọnụ", "Ọ na-eme chaatị"], answer: 0, why: "Sort na-etinye ahịrị n'usoro, dị ka nọmba kacha ukwuu na mbụ." },
            { objective: "O3", q: "Ị chọrọ ịhụ naanị ahịrị maka Mọnde. Gịnị ka ị ga-eji?", options: ["SUM", "Filter na kọlụm Ụbọchị izu", "Chaatị pie", "Hichapụ ahịrị ndị ọzọ"], answer: 1, why: "Filter na-ezo ahịrị ndị ị na-achọghị n'ehichapụghị ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkwadebe data gị",
        questions: [
          { objective: "O1", q: "Kedu ajụjụ data kacha doo anya?", options: ["\"Gwa m maka ebe nri ahụ\"", "\"Ihe?\"", "\"Kedu ụbọchị n'izu ndị mmadụ kacha abịa ebe nri n'efu?\"", "\"Data biko\""], answer: 2, why: "Ọ na-ekwu kpọmkwem ihe a ga-achọta, ya mere ị maara data ị ga-achịkọta." },
          { objective: "O2", q: "Gịnị bụ cell C4?", options: ["Igbe dị na kọlụm C, ahịrị 4", "Faịlụ nke anọ", "Ahịrị C, kọlụm 4", "Nọmba ekwentị"], answer: 0, why: "A na-akpọ cell site na mkpụrụ akwụkwọ kọlụm, wee nọmba ahịrị." },
          { objective: "O2", q: "Ebee ka isi okwu kọlụm kwesịrị ịdị?", options: ["N'ala", "Ahịrị 1, otu isi okwu n'otu kọlụm", "Na faịlụ ọzọ", "Ebe ọ bụla"], answer: 1, why: "Isi okwu n'ahịrị 1 na-eme ka data dị ọcha ma dị mfe ịhazi." },
          { objective: "O3", q: "I jiri filter gosi naanị Satọdee. Gịnị na-eme ahịrị ndị ọzọ?", options: ["A na-ehichapụ ha ruo ebighị ebi", "Ha na-aga na faịlụ ọhụrụ", "Ha na-aghọ chaatị", "A na-ezo ha, ha ga-alaghachi mgbe i kpochapụrụ filter"], answer: 3, why: "Filter na-ezo ahịrị; ọ naghị ehichapụ ha." },
          { objective: "O3", q: "Ị chọrọ ka ụbọchị kacha enwe ndị mmadụ dị n'elu. Gịnị ka ị ga-eme?", options: ["Hazie kọlụm ndị bịara site na nke kacha ukwuu ruo nke kacha nta", "Hichapụ ahịrị ndị ọzọ", "Gbanwee aha faịlụ", "Mee ka mkpụrụ okwu gbaa ọchịchịrị"], answer: 0, why: "Ịhazi site na nke kacha ukwuu ruo nke kacha nta na-ebute nọmba kacha elu ụzọ." }
        ]
      }
    },
    {
      name: "Isi 2: Ịchọta na ikesa azịza",
      lessons: [
        {
          title: "Formula: SUM na AVERAGE",
          objectives: ["O4"],
          minutes: 5,
          goal: "Jiri SUM gbakọọ ngụkọta kọlụm ma jiri AVERAGE chọta nkezi ya.",
          text: [
            "Formula bụ obere ntụziaka na-agbakọrọ gị. Formula ọ bụla na-amalite n'akara nha (=).",
            "=SUM(C2:C31) na-agbakọ nọmba niile site na cell C2 ruo cell C31. =AVERAGE(C2:C31) na-achọta nkezi nọmba ndị ahụ. A na-akpọ C2:C31 range: cell niile site na C2 ruo C31.",
            "Ọ bụrụ na ị gbanwee nọmba na kọlụm ahụ, ngụkọta na nkezi na-agbanwe n'onwe ha. Nke a bụ ike spreadsheet: ọ dịghị mkpa ịgụkwa ọnụ n'aka."
          ],
          steps: ["Pịa cell efu dị n'okpuru kọlụm nọmba gị.", "Dee =SUM( wee cell mbụ, akara colon (:), na cell ikpeazụ, wee ).", "Pịa Enter ka ịhụ ngụkọta.", "Na cell efu ọzọ, mee otu ihe ahụ site na =AVERAGE( ... )."],
          words: [["Formula", "ntụziaka na-amalite na = ma na-agbakọ ihe na spreadsheet."], ["Range", "otu ìgwè cell, e dere dị ka C2:C31."], ["Nkezi (average)", "ngụkọta e kere site n'ọnụ ọgụgụ nọmba dị."]],
          slides: [
            { title: "Formula na-amalite na =", bullets: ["Ha na-agbakọrọ gị", "Ha na-agbanwe mgbe nọmba gbanwere"] },
            { title: "Formula abụọ ị ga-amata", bullets: ["=SUM(C2:C31) na-agbakọ ha niile ọnụ", "=AVERAGE(C2:C31) na-achọta nkezi"] },
            { title: "Gịnị bụ range?", bullets: ["C2:C31 pụtara site na C2 ruo C31", "Cell mbụ, colon, cell ikpeazụ"] }
          ],
          tryIt: "N'okpuru kọlụm nọmba gị, tinye ngụkọta site na =SUM na nkezi site na =AVERAGE. Gbanwee otu nọmba ma lee ka ha abụọ si agbanwe.",
          youCanNow: "ịgbakọ ngụkọta na nkezi kọlụm site na SUM na AVERAGE.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ range dị ka B2:B20?", options: ["Naanị otu cell", "Ụdị chaatị", "Cell niile site na B2 ruo B20", "Aha faịlụ"], answer: 2, why: "Range bụ cell ọ bụla site na nke mbụ ruo nke ikpeazụ, e ji colon jikọta." },
            { objective: "O4", q: "Ị chọrọ ngụkọta ego e mefuru na D2 ruo D15. Gịnị ka ị ga-ede?", options: ["SUM D2 D15", "=AVERAGE(D2:D15)", "=D2+D15", "=SUM(D2:D15)"], answer: 3, why: "=SUM(D2:D15) na-agbakọ nọmba niile site na D2 ruo D15." }
          ]
        },
        {
          title: "Ime chaatị, nwere AI dị ka onye enyemaka gị",
          objectives: ["O5"],
          minutes: 5,
          goal: "Mee chaatị dị mfe ma jiri AI kọwaa formula ma ọ bụ dozie njehie.",
          text: [
            "Chaatị na-eme ka nọmba ghọọ foto. Chaatị bar na-atụnyere ọnụ ọgụgụ, dị ka ndị bịara kwa ụbọchị. Chaatị line na-egosi mgbanwe n'ime oge. Chaatị pie na-egosi akụkụ nke otu ihe zuru ezu, dị ka ego e mefuru n'ụdị ọ bụla.",
            "Iji mee otu, họrọ isi okwu na data gị, wee tinye chaatị site na menu Insert ma ọ bụ taabụ Insert. Gbanwee aha ya ka ọ kwuo ihe chaatị ahụ na-egosi.",
            "Ngwa enyemaka AI n'efu nwere ike ịkọwa formula na njehie. Dee formula ma ọ bụ njehie ahụ ma jụọ: \"Kọwaa nke a n'okwu dị mfe na otu m ga-esi dozie ya.\" Etinyela ozi nzuzo dị ka aha, adreesị ma ọ bụ nọmba akaụntụ; kọwaa kọlụm ndị ahụ kama."
          ],
          steps: ["Họrọ isi okwu na data ị chọrọ igosi.", "Meghee menu Insert ma ọ bụ taabụ Insert ma họrọ Chart.", "Họrọ bar, line ma ọ bụ pie.", "Nye chaatị ahụ aha doro anya."],
          words: [["Chaatị bar", "chaatị na-eji ogwe atụnyere ọnụ ọgụgụ."], ["Chaatị line", "chaatị na-egosi mgbanwe n'ime oge."], ["Chaatị pie", "okirikiri na-egosi akụkụ nke otu ihe zuru ezu."]],
          slides: [
            { title: "Họrọ chaatị ziri ezi", bullets: ["Bar: tụnyere ọnụ ọgụgụ", "Line: mgbanwe n'ime oge", "Pie: akụkụ nke otu ihe zuru ezu"] },
            { title: "Mee chaatị", bullets: ["Họrọ isi okwu na data", "Insert, wee Chart", "Nye ya aha doro anya"] },
            { title: "AI dị ka onye enyemaka gị", bullets: ["Jụọ ya ka ọ kọwaa formula ma ọ bụ njehie", "Kọwaa kọlụm; etinyela ozi nzuzo"] }
          ],
          tryIt: "Mee chaatị bar ma ọ bụ line nke data gị ma nye ya aha doro anya. Wee jụọ ngwa enyemaka AI ka ọ kọwaa ihe =AVERAGE(C2:C31) na-eme n'okwu dị mfe.",
          youCanNow: "ime chaatị ma jiri AI ghọta formula n'ekesaghị ozi nzuzo.",
          quickCheck: [
            { objective: "O5", q: "Kedu chaatị na-atụnyere ọnụ ọgụgụ, dị ka ndị bịara kwa ụbọchị?", options: ["Chaatị bar", "Chaatị line", "Chaatị pie", "Ọ dịghị chaatị"], answer: 0, why: "Chaatị bar na-atụnyere ọnụ ọgụgụ n'akụkụ n'akụkụ." },
            { objective: "O5", q: "Formula gị na-egosi njehie, spreadsheet ahụ nwekwara aha ndị ahịa. Gịnị ka ị ga-etinye n'ime AI?", options: ["Spreadsheet ahụ dum", "Formula ahụ na nkọwa kọlụm ndị ahụ", "Nọmba ekwentị ndị ahịa", "Okwuntughe akaụntụ gị"], answer: 1, why: "Kọwaa kọlụm ma tinye formula ahụ, ọ bụghị ozi nzuzo." }
          ]
        },
        {
          title: "Ịkọ ihe data na-egosi",
          objectives: ["O6"],
          minutes: 5,
          goal: "Dee ahịrịokwu abụọ dị mfe na-aza ajụjụ gị ma kesaa spreadsheet ahụ n'enweghị nsogbu.",
          text: [
            "Ọrụ gị agwụbeghị ruo mgbe mmadụ ghọtara ya. Dee ahịrịokwu abụọ: otu nwere azịza, otu nwere nọmba na-akwado ya. Dịka ọmụmaatụ: \"Satọdee bụ ụbọchị anyị kacha enwe ndị mmadụ. Nkezi anyị bụ ndị ọbịa 64 na Satọdee, ma 38 n'ụbọchị ndị ọzọ.\"",
            "Lelee ọrụ gị tupu i kesaa ya. Chọọ mperi n'ide nọmba, ahịrị efu, na ngụkọta yiri ka ọ buru oke ibu ma ọ bụ dị oke nta. Ọ bụrụ na ihe yiri ka ọ dịghị mma, o yikarịrị ka ọ dịghị mma.",
            "Iji kesaa, jiri bọtịnụ Share ma họrọ ndị nwere ike ịhụ ya. Maka data gbasara ndị mmadụ, kesaa naanị ndị chọrọ ya, ma wepụ aha ma ọ bụ nọmba ekwentị ma ọ bụrụ na ha adịghị mkpa."
          ],
          steps: ["Dee otu ahịrịokwu nwere azịza ajụjụ gị.", "Dee otu ahịrịokwu nwere nọmba na-akwado ya.", "Lelee mperi n'ide, ahịrị efu na ngụkọta na-adịghị mma.", "Kesaa naanị ndị chọrọ ya."],
          words: [["Ihe a chọpụtara (finding)", "ihe data na-egosi, e kwuru n'okwu dị mfe."]],
          slides: [
            { title: "Kwuo ihe ọ na-egosi", bullets: ["Ahịrịokwu 1: azịza ahụ", "Ahịrịokwu 2: nọmba na-akwado ya"] },
            { title: "Lelee tupu i kesaa", bullets: ["Mperi n'ide nọmba", "Ahịrị efu", "Ngụkọta yiri ka ọ buru oke ibu ma ọ bụ dị oke nta"] },
            { title: "Kesaa n'enweghị nsogbu", bullets: ["Jiri bọtịnụ Share", "Naanị ndị chọrọ ya", "Wepụ aha ma ọ bụ nọmba ekwentị ma ọ bụrụ na ha adịghị mkpa"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa spreadsheet gị nwere sort, filter, SUM, AVERAGE na chaatị. Dee ahịrịokwu abụọ dị mfe na-aza ajụjụ gị, lelee ọrụ gị, ma kesaa ya otu onye.",
          youCanNow: "ime ka data ghọọ ihe a chọpụtara doro anya, nke e lelere, ma kesaa ya n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O6", q: "Akụkụ abụọ ole ka ezigbo ihe a chọpụtara nwere?", options: ["Aha na agba", "Chaatị na formula", "Azịza na nọmba na-akwado ya", "Aha na nọmba ekwentị"], answer: 2, why: "Otu ahịrịokwu na-enye azịza, nke ọzọ na-enye nọmba na-akwado ya." },
            { objective: "O6", q: "Nkezi ndị bịara kwa ụbọchị na-egosi 4,200, ma ebe nri ahụ dị obere. Gịnị ka ị ga-eme?", options: ["Kesaa ya ozugbo", "Hichapụ spreadsheet ahụ", "Mee ya 4,000", "Lelee mperi n'ide, ahịrị efu na range formula ahụ"], answer: 3, why: "Nọmba yiri ka ọ dịghị mma o yikarịrị ka ọ dịghị mma, ya mere ị ga-ebu ụzọ lelee ọrụ gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịchọta na ikesa azịza",
        questions: [
          { objective: "O4", q: "Formula spreadsheet ọ bụla na-amalite na:", options: ["Akara dollar", "Akara ajụjụ", "Mkpụrụ akwụkwọ", "Akara nha (=)"], answer: 3, why: "Formula na-amalite na =." },
          { objective: "O4", q: "Gịnị ka =SUM(B2:B10) na-eme?", options: ["Ọ na-agbakọ nọmba site na B2 ruo B10 ọnụ", "Ọ na-achọta nkezi", "Ọ na-ahazi kọlụm", "Ọ na-eme chaatị"], answer: 0, why: "SUM na-agbakọ nọmba ọ bụla dị na range ahụ." },
          { objective: "O5", q: "Kedu chaatị kacha egosi mgbanwe n'ime oge?", options: ["Chaatị pie", "Chaatị line", "Ọ dịghị chaatị", "Foto"], answer: 1, why: "Chaatị line na-egosi otu ihe si agbanwe n'ime oge." },
          { objective: "O5", q: "Ị chọrọ ka AI kọwaa njehie na spreadsheet nwere aha na nọmba ekwentị ndị ahịa. Gịnị ka ị kwesịrị ime?", options: ["Tinye ihe niile", "Tinye naanị nọmba ekwentị", "Kọwaa kọlụm ma tinye formula ahụ, ọ bụghị ozi nzuzo", "Kwụsị"], answer: 2, why: "Ị nwere ike inweta enyemaka n'ekesaghị ozi nzuzo." },
          { objective: "O6", q: "Kedu ihe a chọpụtara kacha mma ikesa?", options: ["\"Satọdee kacha enwe ndị mmadụ. Nkezi anyị bụ ndị ọbịa 64 na Satọdee na 38 n'ụbọchị ndị ọzọ.\"", "\"Nọmba.\"", "\"Ọ bụ chaatị.\"", "\"Lee spreadsheet ahụ.\""], answer: 0, why: "Ọ na-enye azịza na nọmba na-akwado ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Ngwaọrụ na Ụzọ Nnyocha Data",
    questions: [
      { objective: "O1", q: "Nnyocha data pụtara:", options: ["Ihichapụ faịlụ ochie", "Iji data zaa ajụjụ", "Ịzụta kọmputa", "Ide ihe ngwa ngwa"], answer: 1, why: "Nnyocha bụ ile data anya iji chọta azịza." },
      { objective: "O1", q: "Gịnị mere ị ga-eji malite n'ajụjụ doro anya?", options: ["Ọ na-agwa gị data ị ga-achịkọta", "Ọ na-eme ka faịlụ buo ibu", "Ọ dịghị mkpa", "Ọ na-ezo data"], answer: 0, why: "Ajụjụ ahụ na-ekpebi data ị chọrọ." },
      { objective: "O1", q: "Iji chọta ụdị mmefu kacha ewe ego, ị chọrọ:", options: ["Naanị ụbọchị", "Okwuntughe gị", "Ụdị mmefu na ego", "Nọmba ekwentị"], answer: 2, why: "Ụdị mmefu na ego na-eme ka ị tụnyere ọnụ ahịa." },
      { objective: "O2", q: "Kedu nke bụ ngwaọrụ spreadsheet n'efu?", options: ["Elekere mgbakọ", "Akwụkwọ ndetu", "Mgbasa ozi na-apụta na mberede", "Google Sheets"], answer: 3, why: "Google Sheets dị n'efu nwere akaụntụ Google; Excel for the web dị n'efu nwere akaụntụ Microsoft." },
      { objective: "O2", q: "Na spreadsheet, a na-akpọ kọlụm site na:", options: ["Mkpụrụ akwụkwọ", "Nọmba", "Agba", "Emoji"], answer: 0, why: "Kọlụm bụ A, B, C; ahịrị bụ 1, 2, 3." },
      { objective: "O2", q: "Kedu nke bụ data dị ọcha?", options: ["Ọtụtụ isi okwu n'otu cell", "\"ihe dị ka 20\" na cell nọmba", "Otu isi okwu n'otu kọlụm na nọmba nkịtị", "Ahịrị efu n'etiti ndekọ ọ bụla"], answer: 2, why: "Data dị ọcha nwere isi okwu doro anya na nọmba nkịtị." },
      { objective: "O3", q: "Ịhazi site na nke kacha ukwuu ruo nke kacha nta na-etinye:", options: ["Nọmba kacha nta na mbụ", "Nọmba kacha ukwuu na mbụ", "Ahịrị n'usoro na-enweghị isi", "Ihe niile na chaatị"], answer: 1, why: "Nke kacha ukwuu ruo nke kacha nta na-amalite na nke kacha elu." },
      { objective: "O3", q: "Iji filter na kọlụm:", options: ["Na-ehichapụ ahịrị ruo ebighị ebi", "Na-ezipu spreadsheet n'email", "Na-agbanwe nọmba", "Na-ezo ahịrị na-adabaghị, n'ehichapụghị ha"], answer: 3, why: "Filter na-ezo ahịrị naanị ruo mgbe i kpochapụrụ ya." },
      { objective: "O3", q: "Ebee ka a na-ahụkarị sort na filter?", options: ["Menu Data ma ọ bụ taabụ Data", "Bọtịnụ Print", "Igbe unyi", "Aha faịlụ"], answer: 0, why: "Ngwaọrụ abụọ ahụ na-etinye ha n'okpuru Data." },
      { objective: "O4", q: "Gịnị ka =AVERAGE(C2:C31) na-achọta?", options: ["Nọmba kacha ukwuu", "Nkezi C2 ruo C31", "Ọnụ ọgụgụ ahịrị", "Ihe mbụ"], answer: 1, why: "AVERAGE na-eke ngụkọta site n'ọnụ ọgụgụ nọmba dị." },
      { objective: "O4", q: "Na C2:C31, colon pụtara:", options: ["Kee", "Kwụsị", "Site na C2 ruo C31", "Mụbaa"], answer: 2, why: "Colon na-eme range nke cell." },
      { objective: "O4", q: "Ị gbanwere nọmba na kọlụm ahụ. Ngụkọta SUM:", options: ["Na-anọ otu ebe ruo ebighị ebi", "Na-apụ n'anya", "Na-aghọ okwu", "Na-agbanwe n'onwe ya"], answer: 3, why: "Formula na-agbakọgharị mgbe data gbanwere." },
      { objective: "O5", q: "Kedu chaatị na-atụnyere ọnụ ọgụgụ, dị ka ndị bịara kwa ụbọchị?", options: ["Chaatị bar", "Chaatị pie nke otu ihe", "Ọ dịghị chaatị", "Maapụ"], answer: 0, why: "Chaatị bar na-atụnyere ọnụ ọgụgụ n'akụkụ n'akụkụ." },
      { objective: "O5", q: "Kedu chaatị na-egosi akụkụ nke otu ihe zuru ezu, dị ka ego e mefuru n'ụdị ọ bụla?", options: ["Chaatị line", "Chaatị pie", "Tebụl ụbọchị", "Isi okwu"], answer: 1, why: "Chaatị pie na-egosi otu e si kee ihe zuru ezu." },
      { objective: "O5", q: "Iji mee chaatị, ị ga-ebu ụzọ:", options: ["Hichapụ isi okwu", "Mechie faịlụ", "Họrọ isi okwu na data", "Gbanwee ụdị mkpụrụ okwu"], answer: 2, why: "Chaatị ahụ kwesịrị ịmata data ọ ga-egosi." },
      { objective: "O5", q: "Gịnị ka ị na-ekwesịghị itinye n'ime ngwa enyemaka AI?", options: ["Formula", "Ozi njehie", "Nkọwa kọlụm gị", "Aha na nọmba ekwentị ndị ị na-enyere aka"], answer: 3, why: "Ozi gbasara mmadụ kwesịrị ịnọ na nzuzo." },
      { objective: "O6", q: "Ezigbo ihe a chọpụtara nwere:", options: ["Azịza na nọmba na-akwado ya", "Naanị chaatị", "Enweghị nọmba", "Okwuntughe gị"], answer: 0, why: "Ahịrịokwu abụọ: azịza na ihe akaebe." },
      { objective: "O6", q: "Ngụkọta gị yiri ka ọ buru oke ibu. Gịnị ka ị ga-eme?", options: ["Kesaa ya otú ọ dị", "Lelee mperi n'ide, ahịrị efu na range formula ahụ", "Hichapụ faịlụ ahụ", "Mee ka mkpụrụ okwu dị nta"], answer: 1, why: "Ngụkọta na-adịghị mma na-apụtakarị njehie ị ga-achọta." },
      { objective: "O6", q: "Mgbe ị na-ekesa spreadsheet gbasara ndị mmadụ, ị kwesịrị:", options: ["Itinye ya n'ihu ọha", "Ikesara onye ọ bụla ị maara", "Ikesara naanị ndị chọrọ ya ma wepụ ihe na-adịghị mkpa", "Ibipụta ya ma hapụ ya n'ebe ọ bụla"], answer: 2, why: "Ikesa ntakịrị na-echebe ozi ndị mmadụ." },
      { objective: "O2", q: "Kedu ngwaọrụ n'efu na-ekwe ka i jiri Excel na web browser?", options: ["Excel for the web na office.com", "Igwe fax", "Ozi ederede", "Gift card"], answer: 0, why: "Excel for the web dị n'efu nwere akaụntụ Microsoft." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 4, 6, 9, 12, 15, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Data dị ọcha", objective: "O2", notYet: "Isi okwu adịghị, okwu na nọmba agwakọtara, ma ọ bụ ahịrị erughị iri.", meets: "Otu isi okwu n'otu kọlụm, otu ndekọ n'otu ahịrị, nọmba nkịtị maka data otu ọnwa.", exceeds: "Faịlụ ahụ nwere aha doro anya, data ahụ achọkwaghị ndozi ọ bụla." },
      { name: "Sort na filter", objective: "O3", notYet: "Data ahụ ahazighị n'usoro ma ọ bụ jiri filter.", meets: "E hazirila kọlụm nọmba kacha mkpa site na nke kacha ukwuu ruo nke kacha nta, e jirila filter ma kpochapụ ya.", exceeds: "Nwere ike ikwu ihe sort na filter ahụ gosiri." },
      { name: "SUM na AVERAGE", objective: "O4", notYet: "Formula adịghị ma ọ bụ na-eji range ezighi ezi.", meets: "SUM na AVERAGE ziri ezi na kọlụm nọmba ahụ.", exceeds: "Na-egosi na ha abụọ na-agbanwe mgbe a gbanwere nọmba." },
      { name: "Chaatị", objective: "O5", notYet: "Enweghị chaatị, ma ọ bụ ụdị ezighi ezi na-enweghị aha.", meets: "Chaatị nke ụdị ziri ezi nwere aha doro anya.", exceeds: "Chaatị ahụ na-eme ka azịza ajụjụ ahụ dị mfe ịhụ." },
      { name: "Ihe a chọpụtara n'ahịrịokwu abụọ", objective: "O6", notYet: "Enweghị azịza, ma ọ bụ enweghị nọmba na-akwado ya.", meets: "Otu ahịrịokwu nwere azịza na otu nwere nọmba na-akwado ya.", exceeds: "E lelere ọrụ ahụ ma kesaa ya naanị ndị chọrọ ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe jiri spreadsheet maka ezinụlọ ha, ọrụ ha ma ọ bụ otu obodo ha n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe depụtara nka spreadsheet na résumé ha ma ọ bụ nweta ọrụ ọfịs n'ime ụbọchị 90",
      "Ndị mmekọ obodo na-akọ na ha jiri spreadsheet na chaatị ndị na-amụ ihe mere n'akụkọ ma ọ bụ na nzukọ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị (ọba akwụkwọ ma ọ bụ ụlọ); app ekwentị na-arụ ọrụ maka obere spreadsheet",
      "Akaụntụ Google ma ọ bụ Microsoft n'efu maka Google Sheets ma ọ bụ Excel for the web",
      "Data otu ọnwa, nke ezi ma ọ bụ nke omume, dị ka ndị bịara ebe nri n'efu ma ọ bụ mmefu n'ụdị ọ bụla",
      "Ngwa enyemaka AI n'efu maka ịkọwa formula na njehie",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Nye data omume maka ndị na-amụ ihe na-enweghị nke ha.",
      "Gosi sort, filter na SUM n'ihu ha na projector tupu ndị na-amụ ihe anwaa ha.",
      "Chetara ndị na-amụ ihe ka ha ghara itinye aha, nọmba ekwentị ma ọ bụ nọmba akaụntụ n'ime AI mgbe ọ bụla; ha kọwaa kọlụm kama.",
      "Jikọta ndị ọhụrụ na kọmputa na onye nwere ahụmahụ karịa.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
