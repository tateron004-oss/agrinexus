"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-ai-team-sports.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-team-sports-ig",
  lang: "ig",
  translationOf: "athletes-ai-team-sports",
  category: "Athletes",
  name: "AI maka Egwuregwu Otu (Team Sports)",
  skills: "Idekọ ọnụ ọgụgụ (stats) dị mfe nke otu, Ịchọta usoro ndị egwuregwu na usoro egwuregwu, Iji AI dee nchịkọta nyocha onye mmegide, Ịhazi mkparịta ụka otu, Ichebe nzuzo na ikpe ziri ezi nke ndị egwuregwu",
  outcome: "iji spreadsheet a na-ekerịta na ngwa enyemaka AI dekọọ ọnụ ọgụgụ dị mfe nke otu, chọta otu usoro ndị egwuregwu ma ọ bụ usoro egwuregwu, dee nchịkọta nyocha onye mmegide nke otu peeji, ma kesaa ya na otu ahụ n'ụzọ na-echebe nzuzo ndị egwuregwu.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nkuzi egwuregwu (coach), ndị njikwa otu, ndị isi otu (captain) na ndị nyocha otu n'egwuregwu otu ọ bụla: basketball, bọọlụ ụkwụ (soccer), volleyball, American football, hockey, baseball, softball na ndị ọzọ.",
    "Otu ndị ọkachamara nwere ngalaba nyocha data. Ị nwere ike ime ụdị dị mfe site na spreadsheet na ngwa enyemaka AI n'efu: dekọọ ihe dị mkpa, hụ usoro, nyochaa ndị mmegide, ma kparịta ụka nke ọma na ndị egwuregwu na ezinụlọ ha.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma na njedebe isi ọ bụla, na ule nwere ajụjụ 20 na njedebe ihe ọmụmụ a. Data na-akwado mkpebi onye nkuzi; ọ dịghị mgbe ọ na-anọchi ya."
  ],
  finalTask: "Maka otu gị, hazie spreadsheet ọnụ ọgụgụ a na-ekerịta maka egwuregwu atọ ma ọ bụ mmega ahụ atọ, chọta otu usoro ndị egwuregwu ma ọ bụ usoro egwuregwu site n'enyemaka AI, dee nchịkọta nyocha nke otu peeji banyere ezi onye mmegide site na vidiyo egwuregwu ma ọ bụ nsonaazụ ọha, ma dee ozi otu nke na-ekesa isi ihe ahụ n'ekpugheghị ozi nzuzo onye egwuregwu ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nkuzi egwuregwu, ndị njikwa otu, ndị isi otu na ndị nyocha otu n'egwuregwu otu ọ bụla, dị ka basketball, bọọlụ ụkwụ, volleyball, American football, hockey, baseball na softball.",
    startingPoint: "Ha maara egwuregwu ha na otu ha nke ọma, ma na-eji smartphone na ikekwe spreadsheet. Ọtụtụ na-edekọ obere ọnụ ọgụgụ ma ọ bụ na-edekọ ha n'usoro na-adịghị otu, na-enyocha ndị mmegide site na ncheta, ma esetabeghị iwu maka ikesa data ndị egwuregwu ma ọ bụ iji AI na ya.",
    gap: "N'enweghị ọnụ ọgụgụ na nyocha a na-eme mgbe niile, otu na-atụfu usoro ndị nwere ike ịgbanwe mmega ahụ na atụmatụ egwuregwu, ikesa ihe n'akpachapụghị anya nwekwara ike ikpughe ozi nzuzo ndị egwuregwu. Spreadsheet dị mfe a na-ekerịta, iji AI nke ọma na iwu nzuzo doro anya na-enyere otu aka ime nke ọma ma na-echebe ndị egwuregwu.",
    constraints: [
      "Okwu dị mfe, ihe dị ka ọkwa ịgụ akwụkwọ klas 8",
      "Ekwentị ma ọ bụ kọmputa nwere Google Sheets n'efu na ngwa enyemaka AI n'efu",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunyere ọnụ ọgụgụ si n'egwuregwu atọ ma ọ bụ mmega ahụ atọ",
      "Iwu ụlọ akwụkwọ, njikọ egwuregwu (league) na klọb gbasara data ụmụ akwụkwọ, app a kwadoro, mgbanwe vidiyo na ịkpọtụrụ ụmụaka",
      "Enweghị aha zuru ezu, ozi ahụike, ozi akwụkwọ ma ọ bụ ozi nkwukọrịta na spreadsheet ọnụ ọgụgụ ma ọ bụ n'ime ngwa AI"
    ],
    prerequisites: "Ọ dịghị. \"Nnyocha Vidiyo na Ọgụgụ Isi n'Egwuregwu\" na-enyere aka n'ịkara vidiyo akara (tagging)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị njirimara otu gị", action: "ịhọrọ ọnụ ọgụgụ otu atọ ruo ise ma dee nkọwa doro anya maka nke ọ bụla", standard: "ebe enwere ike ịnakọta ọnụ ọgụgụ ọ bụla n'egwuregwu ọ bụla, e nyekwara mmadụ ọrụ ịnakọta ya" },
    { id: "O2", condition: "Site n'iji Google Sheets", action: "ịhazi spreadsheet ọnụ ọgụgụ otu a na-ekerịta nwere taabụ nchịkọta na ohere ịbanye n'enweghị nsogbu", standard: "ebe naanị ndị ọrụ na-anakọta nwere ike idezi ya, ndị ọzọ na-ele naanị anya (view-only), ọ dịghị mgbe ọ ga-adị n'ihu ọha, ọ dịkwaghị ozi ahụike, akara ule ma ọ bụ ozi nkwukọrịta n'ime ya" },
    { id: "O3", condition: "Mgbe e nyere gị ọnụ ọgụgụ site n'opekata mpe egwuregwu atọ ma ọ bụ mmega ahụ atọ", action: "ịchọpụta otu usoro ndị egwuregwu ma ọ bụ usoro egwuregwu site n'ịhazi n'usoro, nzacha (filter) ma ọ bụ ngwa enyemaka AI", standard: "site n'iji naanị nọmba ma ọ bụ mkpụrụ aha mbụ ndị egwuregwu, ilele mgbakọ AI, na ilele obere data anya dị ka ajụjụ" },
    { id: "O4", condition: "Mgbe e nyere gị nsonaazụ ọha na vidiyo a kwadoro nke ezi onye mmegide", action: "ide nchịkọta nyocha nke otu peeji banyere mbuso agha ha, nchekwa ha, ndị egwuregwu ha kacha mkpa, na ihe atọ ga-eme ka unu merie ha", standard: "ebe isi ihe ọ bụla si na ndetu nke gị, a gbasokwara iwu nyocha nke njikọ egwuregwu" },
    { id: "O5", condition: "Mgbe e nyere gị data gị na nchịkọta nyocha gị", action: "ide obere ozi otu nwere isi ihe otu ruo atọ", standard: "nke e zipụrụ site n'ụzọ nkwukọrịta otu a kwadoro, ebe ndụmọdụ nye otu onye ka bụ nzuzo" },
    { id: "O6", condition: "Maka data otu gị", action: "ide iwu data otu na-echebe nzuzo ndị egwuregwu ma na-eme ka mkpebi bụrụ nke ziri ezi", standard: "nke na-ekwu ihe a ga-anakọta, ebe a ga-edebe ya, ihe na-agaghị abanye n'ime AI mgbe ọ bụla, onye na-akwado app, na otu a ga-esi kọwaara ndị egwuregwu mkpebi" }
  ],
  chapters: [
    {
      name: "Isi 1: Data otu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịhọrọ ọnụ ọgụgụ otu dị mkpa",
          minutes: 5,
          goal: "Họrọ ọnụ ọgụgụ otu atọ ruo ise jikọrọ n'otu otu gị si chọọ igwu egwu.",
          text: [
            "Nyocha data otu na-amalite site na njirimara otu gị. Otu basketball na-agba ọsọ ngwa ngwa (fast break) na-elekwasị anya na akara ha na-enweta mgbe ha gbanwere ụzọ na bọọlụ ha tụfuru (turnover). Otu bọọlụ ụkwụ na-ejide bọọlụ na-elekwasị anya na bọọlụ ha nyefere nke ọma na ịgba bọọlụ site n'ime igbe. Otu volleyball na-elekwasị anya na ịnata bọọlụ e zitere (serve receive) na pasent side-out.",
            "Họrọ ọnụ ọgụgụ atọ ruo ise ị nwere ike ịnakọta n'ezie n'egwuregwu ọ bụla site na ndị ị nwere: onye njikwa, nne ma ọ bụ nna na-enye aka, onye egwuregwu merụrụ ahụ, ma ọ bụ vidiyo mgbe egwuregwu gachara.",
            "Dee nkọwa doro anya maka nke ọ bụla ka onye ọ bụla gụọ ya n'otu ụzọ: \"Turnover bụ oge ọ bụla otu tụfuru bọọlụ n'agbaghị ya n'ihe mgbaru ọsọ.\""
          ],
          steps: ["Dee njirimara otu gị n'otu ahịrịokwu.", "Depụta ọnụ ọgụgụ dabara na ya.", "Họrọ atọ ruo ise ị nwere ike ịnakọta n'egwuregwu ọ bụla.", "Dee nkọwa doro anya maka nke ọ bụla.", "Nye mmadụ ọrụ ịnakọta ha."],
          words: [["Nyocha data otu (team analytics)", "iji nọmba gbasara otu ghọta ma meziwanye otu o si egwu egwu."], ["Nkọwa", "iwu doro anya maka kpọmkwem ihe a na-agụ."]],
          slides: [
            { title: "Malite na njirimara", bullets: ["Ọsọ ngwa ngwa? Ijide bọọlụ? Nchekwa mbụ?", "Ọnụ ọgụgụ dabara n'otu unu si egwu egwu"] },
            { title: "Họrọ ọnụ ọgụgụ 3-5", bullets: ["Ị nwere ike ịnakọta n'egwuregwu ọ bụla", "Site na ndị ị nwere"] },
            { title: "Kọwaa nke ọ bụla", bullets: ["Onye ọ bụla na-agụ ya n'otu ụzọ", "Nye mmadụ ọrụ ịnakọta ya"] }
          ],
          tryIt: "Dee njirimara otu gị n'otu ahịrịokwu. Rịọ ngwa enyemaka AI ka ọ tụọ aro ọnụ ọgụgụ dabara na ya, wee họrọ atọ ruo ise ma dee nkọwa ha.",
          youCanNow: "ịhọrọ na ịkọwa ọnụ ọgụgụ otu dabara n'otu otu gị si egwu egwu.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọnụ ọgụgụ dabara otu bọọlụ ụkwụ na-ejide bọọlụ?", options: ["Bọọlụ e nyefere nke ọma na ịgba bọọlụ site n'ime igbe", "Free throw", "Ịnata bọọlụ e zitere (serve receive)", "Home run"], answer: 0, why: "Ọnụ ọgụgụ kwesịrị ịdaba n'otu otu gị si chọọ igwu egwu." },
            { objective: "O1", q: "Ndị na-enye aka abụọ na-agụ turnover n'ụzọ dị iche. Gịnị ka ị ga-eme?", options: ["Were nkezi nọmba ha", "Kwụsị idekọ turnover", "Ka onye ọ bụla gụọ n'ụzọ nke ya", "Dee otu nkọwa doro anya onye ọ bụla ga-eji"], answer: 3, why: "Nkọwa doro anya na-eme ka onye ọ bụla gụọ n'otu ụzọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Spreadsheet ọnụ ọgụgụ otu a na-ekerịta",
          minutes: 5,
          goal: "Hazie Google Sheet a na-ekerịta maka ọnụ ọgụgụ otu, nwere ohere ịbanye n'enweghị nsogbu.",
          text: [
            "Jiri otu Google Sheet nwere taabụ maka egwuregwu ọ bụla, ma ọ bụ otu tebụl ogologo nwere kọlụm ndị a: Ụbọchị, Onye mmegide, Nkeji egwuregwu (quarter ma ọ bụ set), Ndị egwuregwu nọ n'ọgbọ (lineup), na ọnụ ọgụgụ gị. Taabụ nchịkọta nwere ike ịgbakọ ihe niile nke oge egwuregwu ahụ (season).",
            "Kesaa ya naanị na ndị nkuzi na ndị njikwa chọrọ idezi ya. Jiri njikọ view-only (ele naanị anya) maka ndị ọzọ, ma emela ka spreadsheet nwere ozi ndị egwuregwu dị n'ihu ọha n'ịntanetị mgbe ọ bụla.",
            "Debe naanị ọnụ ọgụgụ egwuregwu n'ime spreadsheet a. Etinyela ndetu ahụike, akara ule, ozi ezinụlọ ma ọ bụ ozi nkwukọrịta na spreadsheet ọnụ ọgụgụ otu; ndị ahụ kwesịrị ịnọ n'usoro gọọmentị ụlọ akwụkwọ gị nwere nchekwa nzuzo kwesịrị ekwesị."
          ],
          steps: ["Mepụta Google Sheet nwere kọlụm doro anya.", "Tinye taabụ nchịkọta maka ngụkọ oge egwuregwu.", "Kesaa ohere idezi naanị na ndị ọrụ na-anakọta.", "Jiri view-only maka ndị ọzọ; ọ dịghị mgbe ọ ga-adị n'ihu ọha.", "Wepụ ozi ahụike, akara ule na ozi nkwukọrịta."],
          words: [["Spreadsheet a na-ekerịta (shared sheet)", "spreadsheet ọtụtụ mmadụ nwere ike imeghe, ebe ị na-achịkwa onye nwere ohere."], ["View-only", "ndị mmadụ nwere ike ịhụ ya mana ha enweghị ike ịgbanwe ya."]],
          slides: [
            { title: "Nhazi spreadsheet", bullets: ["Ụbọchị, Onye mmegide, Nkeji, Lineup", "Ọnụ ọgụgụ 3-5 gị", "Taabụ nchịkọta maka oge egwuregwu"] },
            { title: "Ohere ịbanye", bullets: ["Idezi: ndị ọrụ na-anakọta", "View-only maka ndị ọzọ", "Ọ dịghị mgbe n'ihu ọha"] },
            { title: "Etinyela", bullets: ["Ndetu ahụike", "Akara ule na ozi ezinụlọ", "Ozi nkwukọrịta"] }
          ],
          tryIt: "Mepụta spreadsheet ọnụ ọgụgụ otu gị, tinye otu egwuregwu gara aga site na ncheta ma ọ bụ box score, ma lelee ntọala ikesa ya.",
          youCanNow: "ịhazi spreadsheet ọnụ ọgụgụ otu a na-ekerịta nwere ohere ịbanye n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka taabụ nchịkọta dị na spreadsheet otu na-eme?", options: ["Ọ na-edebe nọmba ekwentị ndị egwuregwu", "Ọ na-agbakọ ihe niile nke oge egwuregwu", "Ọ na-ezo data", "Ọ na-ezigara ndị egwuregwu ozi"], answer: 1, why: "Taabụ nchịkọta nwere ike ịgbakọ oge egwuregwu niile site n'egwuregwu ọ bụla." },
            { objective: "O2", q: "Nne ma ọ bụ nna onye egwuregwu rịọrọ njikọ spreadsheet ọnụ ọgụgụ otu. Gịnị ka ị ga-ekesa?", options: ["Ohere idezi", "Njikọ ọha n'ịntanetị", "Njikọ view-only, ma ọ bụrụ na iwu gị kwere", "Folda niile nwere ndetu ahụike"], answer: 2, why: "Jiri view-only maka ndị na-anaghị anakọta, ma emela ka ọ dị n'ihu ọha mgbe ọ bụla." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịchọta usoro lineup na usoro egwuregwu",
          minutes: 6,
          goal: "Jiri spreadsheet gị na ngwa enyemaka AI hụ otu usoro lineup ma ọ bụ usoro egwuregwu.",
          text: [
            "Mgbe egwuregwu ole na ole gachara, chọọ usoro: Kedu lineup na-enweta akara karịa ndị mmegide? N'ime nkeji egwuregwu (quarter ma ọ bụ set) kedu ka anyị na-esikarị ike? Kedu ụdị egwuregwu na-ewetara anyị akara kacha ukwuu?",
            "Jiri ịhazi n'usoro (sort), nzacha (filter) ma ọ bụ pivot table na Google Sheets. Ma ọ bụ detuo tebụl ahụ (jiri mkpụrụ aha mbụ ma ọ bụ nọmba ndị egwuregwu kama aha zuru ezu) tinye n'ime ngwa enyemaka AI ma jụọ: \"Kedu lineup nwere ọdịiche akara kacha mma? Kedu nkeji kacha adịghị ike? Gosi mgbakọ gị.\" Lelee mgbakọ ya na spreadsheet ahụ.",
            "Obere data na-eduhie. Lineup gwuru egwu nkeji anọ egosibeghị ihe ọ bụla. Lee usoro anya dị ka ajụjụ maka mmega ahụ na vidiyo, ọ bụghị azịza ikpeazụ, onye nkuzi na-ekpebikwa."
          ],
          steps: ["Hazie n'usoro ma ọ bụ zachaa site na lineup na nkeji.", "Jiri nọmba ma ọ bụ mkpụrụ aha mbụ ndị egwuregwu, ọ bụghị aha zuru ezu, na AI.", "Rịọ AI ka ọ chọta usoro ma gosi mgbakọ ya.", "Lelee mgbakọ ya.", "Mee otu usoro ka ọ bụrụ ajụjụ maka mmega ahụ ma ọ bụ vidiyo."],
          words: [["Ọdịiche akara (point differential)", "akara unu nwetara wepụ akara ndị mmegide nwetara."], ["Pivot table", "ngwa spreadsheet na-achịkọta ma na-agbakọ data, dị ka akara site na lineup."], ["Ọnụ ọgụgụ data (sample size)", "ole data ị nwere; obere data nwere ike iduhie."]],
          slides: [
            { title: "Ajụjụ usoro", bullets: ["Kedu lineup na-enweta akara karịa ndị mmegide?", "Kedu nkeji kacha adịghị ike?", "Kedu ụdị egwuregwu na-enweta akara kacha ukwuu?"] },
            { title: "Chọta ha", bullets: ["Sort, filter ma ọ bụ pivot table", "AI na mkpụrụ aha mbụ, ọ bụghị aha zuru ezu", "\"Gosi mgbakọ gị\" ma lelee ya"] },
            { title: "Kpachara anya", bullets: ["Obere data na-eduhie", "Usoro bụ ajụjụ", "Onye nkuzi na-ekpebi"] }
          ],
          tryIt: "Tinye opekata mpe egwuregwu abụọ na spreadsheet gị. Rịọ ngwa enyemaka AI ka ọ chọta nkeji ma ọ bụ lineup kacha mma na nke kacha njọ ma gosi mgbakọ ya. Lelee ya ma dee otu ajụjụ maka mmega ahụ.",
          youCanNow: "ịchọta usoro lineup na usoro egwuregwu ma lee ha anya dị ka ajụjụ maka onye nkuzi.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ọzọ ka ị ga-arịọ AI ka ọ mee mgbe ọ na-achọta usoro lineup?", options: ["Gosi mgbakọ ya", "Họrọ ndị ga-amalite egwuregwu", "Kpọsaa ọkwa ndị egwuregwu n'ihu ọha", "Chepụta egwuregwu na-efu"], answer: 0, why: "Rịọ AI ka ọ gosi mgbakọ ya ka i nwee ike ilele ya na spreadsheet." },
            { objective: "O3", q: "Nkeji nke atọ gị adịghị ike n'egwuregwu niile ruo ugbu a. Gịnị ka ị ga-eme na usoro a?", options: ["Wepụ otu ahụ niile n'ọgbọ", "Tinye ya n'ịntanetị", "Leghara ya anya", "Were ya gaa mmega ahụ na vidiyo dị ka ajụjụ maka onye nkuzi"], answer: 3, why: "Lee usoro anya dị ka ajụjụ maka mmega ahụ na vidiyo; onye nkuzi na-ekpebi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Data otu",
        questions: [
          { objective: "O1", q: "Ebee ka nyocha data otu kwesịrị ịmalite?", options: ["Ihe ọ bụla ndị ọkachamara na-edekọ", "Ọnụ ọgụgụ niile e nwere ike", "Njirimara otu gị na otu ị chọrọ igwu egwu", "Nọmba soshal midia"], answer: 2, why: "Ọnụ ọgụgụ kwesịrị ịdaba n'ụdị egwuregwu gị." },
          { objective: "O1", q: "Gịnị mere ị ga-eji dee nkọwa maka ọnụ ọgụgụ ọ bụla?", options: ["Ka onye ọ bụla gụọ ya n'otu ụzọ", "Ka o mee ogologo", "Ka o mee ndị mmegide mgbagwoju anya", "Ọ dịghị mkpa"], answer: 0, why: "Ịgụ n'otu ụzọ na-eme ka data bụrụ nke a pụrụ ịtụkwasị obi." },
          { objective: "O2", q: "Onye kwesịrị inwe ohere idezi spreadsheet ọnụ ọgụgụ otu?", options: ["Onye ọ bụla nọ n'ịntanetị", "Ndị nkuzi otu mmegide", "Ndị na-akwado otu (fans)", "Ndị ọrụ na-anakọta ọnụ ọgụgụ"], answer: 3, why: "Kpachie idezi naanị na ndị chọrọ ya." },
          { objective: "O2", q: "Kedu nke na-ekwesịghị ịnọ na spreadsheet ọnụ ọgụgụ otu?", options: ["Akara site na quarter", "Ndetu ahụike onye egwuregwu", "Turnover", "Lineup"], answer: 1, why: "Ozi ahụike kwesịrị ịnọ n'usoro gọọmentị nwere nchekwa." },
          { objective: "O3", q: "Otu lineup gwuru egwu nkeji anọ ma nwee +6. Ị kwesịrị:", options: ["Ime ka ha malite egwuregwu ọ bụla", "Ilele ya anya dị ka ajụjụ a ga-enyocha karịa", "Ileghara data niile anya", "Itinye ya n'ịntanetị"], answer: 1, why: "Obere data nwere ike iduhie." }
        ]
      }
    },
    {
      name: "Isi 2: Nyocha na nkwukọrịta",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iji AI nyochaa onye mmegide",
          minutes: 6,
          goal: "Dee nchịkọta nyocha onye mmegide nke otu peeji site n'ozi ọha.",
          text: [
            "Nyocha (scouting) pụtara ịmụta otu onye mmegide si egwu egwu tupu unu ezute ha. Jiri isi iyi ọha: nsonaazụ gara aga, box score e bipụtara, peeji ọnụ ọgụgụ njikọ egwuregwu, na vidiyo egwuregwu otu gị nwere ma ọ bụ nke e tinyere n'ihu ọha. Gbasoo iwu njikọ egwuregwu gị gbasara mgbanwe vidiyo na nyocha.",
            "Lee ya anya n'ajụjụ atọ: Gịnị ka ha na-emekarị na mbuso agha? Gịnị ka ha na-emekarị na nchekwa? Ndị egwuregwu ha kacha mkpa bụ ndị, gịnịkwa ka ndị ahụ na-enwe mmasị ime?",
            "Tinye ndetu gị n'ime ngwa enyemaka AI ma jụọ: \"Mee ka ndetu nyocha ndị a bụrụ nchịkọta otu peeji: mbuso agha ha, nchekwa ha, ndị egwuregwu ha kacha mkpa, ihe atọ ga-eme ka anyị merie ha. Isi okwu dị mkpụmkpụ.\" Lelee na isi ihe ọ bụla si na ndetu gị, ọ bụghị ihe AI chepụtara."
          ],
          steps: ["Nakọta nsonaazụ ọha, ọnụ ọgụgụ na vidiyo a kwadoro.", "Lee ya anya n'ajụjụ atọ.", "Dee ndetu nwere oge (timestamp).", "Rịọ AI maka nchịkọta otu peeji site naanị na ndetu gị.", "Lelee isi okwu ọ bụla na ndetu gị."],
          words: [["Akụkọ nyocha (scouting report)", "nchịkọta otu onye mmegide si egwu egwu na otu e si emeri ha."], ["Omume a na-emekarị (tendency)", "ihe otu ma ọ bụ onye egwuregwu na-emekarị n'otu ọnọdụ."]],
          slides: [
            { title: "Isi iyi ọha", bullets: ["Nsonaazụ na box score", "Peeji ọnụ ọgụgụ njikọ egwuregwu", "Vidiyo egwuregwu a kwadoro"] },
            { title: "Ajụjụ atọ", bullets: ["Mbuso agha ha", "Nchekwa ha", "Ndị egwuregwu kacha mkpa na ihe ha na-enwe mmasị ime"] },
            { title: "Nchịkọta AI", bullets: ["Site naanị na ndetu gị", "Ihe atọ ga-eme ka unu merie ha", "Lelee isi okwu ọ bụla"] }
          ],
          tryIt: "Họrọ ezi onye mmegide unu ga-ezute n'oge na-adịghị anya. Nakọta ozi ọha, dee ndetu site n'ajụjụ atọ ahụ, ma jiri AI mee nchịkọta otu peeji. Lelee isi okwu ọ bụla.",
          youCanNow: "ide nchịkọta nyocha onye mmegide nke otu peeji site n'isi iyi ọha, n'enyemaka AI.",
          quickCheck: [
            { objective: "O4", q: "Kedu nke bụ otu n'ime ajụjụ nyocha atọ ahụ?", options: ["Gịnị bụ ihe nnọchianya (mascot) ha?", "Gịnị ka ha na-emekarị na mbuso agha?", "Ndị na-akwado ha ole ka ha nwere?", "Kedu agba uwe egwuregwu ha?"], answer: 1, why: "Lee mbuso agha, nchekwa na ndị egwuregwu kacha mkpa." },
            { objective: "O4", q: "Ị chọrọ vidiyo onye mmegide nke na-adịghị n'ihu ọha. Gịnị ka ị ga-eme?", options: ["Were vidiyo mmega ahụ ha na nzuzo", "Rịọ enyi gị nọ n'otu ha ka o zitere ya", "Gbasoo iwu mgbanwe vidiyo nke njikọ egwuregwu gị", "Jiri AI chepụta ihe ha na-eme"], answer: 2, why: "Gbasoo iwu njikọ egwuregwu gị gbasara mgbanwe vidiyo na nyocha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Nkwukọrịta otu doro anya",
          minutes: 5,
          goal: "Mee ka data na nyocha bụrụ ozi otu dị mkpụmkpụ ma doo anya.",
          text: [
            "Ndị egwuregwu achọghị nọmba niile. Ha chọrọ isi ihe otu ruo atọ doro anya: \"Ha na-arụgide anyị (press) mgbe ọ bụla ha tụnyere bọọlụ. Tụnye bọọlụ n'etiti.\" Ozi dị mkpụmkpụ na-anọgide n'uche.",
            "Jiri AI mee nchịkọta gị ka ọ bụrụ ụdị dị iche iche: okwu sekọnd 30 n'ime ụlọ mgbanwe uwe (locker room), eserese otu slaịdị maka oge ilele vidiyo, na obere ozi maka app nkwukọrịta otu a kwadoro. Gbasoo iwu ụlọ akwụkwọ gị gbasara otu ndị nkuzi si akpọtụrụ ndị egwuregwu, karịsịa ụmụaka.",
            "Too n'ihu ọha, dozie na nzuzo. Ozi otu na-ekwu maka otu ahụ, ọ bụghị maka mperi otu onye egwuregwu."
          ],
          steps: ["Họrọ isi ihe otu ruo atọ.", "Rịọ AI maka okwu sekọnd 30, otu slaịdị na obere ozi.", "Zipu ya site n'ụzọ nkwukọrịta otu a kwadoro.", "Debe ndụmọdụ nye otu onye na nzuzo."],
          words: [["Isi ihe (key point)", "otu ihe ndị egwuregwu ga-echeta n'ezie."], ["Ụzọ nkwukọrịta a kwadoro (official channel)", "ụzọ nkwukọrịta ụlọ akwụkwọ ma ọ bụ klọb gị kwadoro maka ozi otu."]],
          slides: [
            { title: "Ntakịrị ka mma", bullets: ["Isi ihe otu ruo atọ", "Ozi dị mkpụmkpụ na-anọgide n'uche"] },
            { title: "Ụdị atọ site n'AI", bullets: ["Okwu sekọnd 30 n'ime locker room", "Eserese otu slaịdị", "Obere ozi otu"] },
            { title: "Nkwanye ugwu", bullets: ["Jiri ụzọ nkwukọrịta a kwadoro", "Too n'ihu ọha, dozie na nzuzo"] }
          ],
          tryIt: "Were nchịkọta nyocha gị ma jiri AI mee okwu sekọnd 30 na ozi otu nwere ahịrịokwu atọ, nke na-enweghị ihe karịrị isi ihe atọ.",
          youCanNow: "ime ka data bụrụ ozi otu dị mkpụmkpụ, doro anya ma nwee nkwanye ugwu.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ndị egwuregwu chọrọ n'ozi otu?", options: ["Isi ihe otu ruo atọ doro anya", "Nọmba niile dị na spreadsheet", "Akụkọ ogologo", "Ọnụ ọgụgụ otu ndị ọzọ"], answer: 0, why: "Ozi dị mkpụmkpụ nwere isi ihe ole na ole doro anya na-anọgide n'uche." },
            { objective: "O5", q: "Otu onye egwuregwu na-emeghachi otu mperi ahụ. Kedu ka ị ga-esi dozie ya?", options: ["Kpọpụta ya na group chat otu", "Tinye ya na peeji otu", "Gosi ya na slaịdị oge ilele vidiyo", "Gwa onye egwuregwu ahụ okwu na nzuzo"], answer: 3, why: "Too n'ihu ọha, dozie na nzuzo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nzuzo na ikpe ziri ezi na data otu",
          minutes: 5,
          goal: "Setịp iwu data otu na-echebe ndị egwuregwu ma na-eme ka mkpebi bụrụ nke ziri ezi.",
          text: [
            "Data onye egwuregwu bụ ihe nzuzo ya. Ọnụ ọgụgụ, vidiyo, karịsịa ozi ahụike, ozi ngwaọrụ a na-eyi n'ahụ (wearable) na ozi akwụkwọ chọrọ nlekọta. Nakọta naanị ihe ị chọrọ, debe ya n'ebe a kwadoro, ma hichapụ ihe ị na-achọghị ọzọ dịka iwu ụlọ akwụkwọ gị si dị.",
            "Etinyela aha zuru ezu, ozi ahụike ma ọ bụ ihe nzuzo n'ime ngwa AI. Jiri nọmba ma ọ bụ mkpụrụ aha mbụ. Ọtụtụ ụlọ akwụkwọ na njikọ egwuregwu nwere iwu gbasara data ụmụ akwụkwọ na app a kwadoro; jụọ onye isi egwuregwu ụlọ akwụkwọ gị (athletic director).",
            "Ikpe ziri ezi: nọmba nwere ike ịtụfu ihe dị ka mgbalị, ọchịchị ma ọ bụ nchekwa nke na-adịghị apụta na box score, obere data nwekwara ike ịbụ ikpe na-ezighị ezi nye ndị egwuregwu nọ n'oche (bench). Jiri data jụọ ajụjụ ka mma, ma kọwaara ndị egwuregwu mkpebi dị ka mmadụ."
          ],
          steps: ["Nakọta naanị ihe ị chọrọ.", "Debe ya n'ebe a kwadoro.", "Jiri nọmba ma ọ bụ mkpụrụ aha mbụ na AI.", "Jụọ athletic director gbasara iwu data na app.", "Kọwaara ndị egwuregwu mkpebi dị ka mmadụ."],
          words: [["Data ụmụ akwụkwọ", "ozi gbasara ụmụ akwụkwọ, nke ụlọ akwụkwọ ga-echebe."], ["Ele mmadụ n'ihu (bias)", "ikpe na-ezighị ezi nwere ike isi na data na-ezughị ezu ma ọ bụ echiche a na-elebaghị anya."]],
          slides: [
            { title: "Data onye egwuregwu bụ nzuzo", bullets: ["Nakọta naanị ihe ị chọrọ", "Naanị n'ebe a kwadoro", "Hichapụ ihe ị na-achọghị ọzọ"] },
            { title: "Na AI", bullets: ["Nọmba ma ọ bụ mkpụrụ aha mbụ", "Enweghị ozi ahụike ma ọ bụ ozi nzuzo", "Lelee iwu app nke ụlọ akwụkwọ"] },
            { title: "Ikpe ziri ezi", bullets: ["Nọmba na-atụfu mgbalị na ọchịchị", "Obere data nwere ike ịbụ ikpe na-ezighị ezi", "Kọwaara ndị egwuregwu mkpebi"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee iwu data otu ise, wee mechaa spreadsheet ọnụ ọgụgụ gị, otu usoro, nchịkọta nyocha otu peeji gị na ozi otu na-echebe nzuzo ndị egwuregwu.",
          youCanNow: "iji data otu n'ụzọ na-echebe ndị egwuregwu ma na-eme ka mkpebi bụrụ nke ziri ezi.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka ị ga-eme data onye egwuregwu ị na-achọghị ọzọ?", options: ["Debe ya ruo mgbe ebighị ebi", "Hichapụ ya dịka iwu ụlọ akwụkwọ gị si dị", "Kesaa ya na otu ndị ọzọ", "Tinye ya n'ịntanetị"], answer: 1, why: "Nakọta naanị ihe ị chọrọ, ma hichapụ ihe ị na-achọghị ọzọ dịka iwu ụlọ akwụkwọ gị si dị." },
            { objective: "O6", q: "Onye egwuregwu nọ n'oche nwere nọmba na-adịghị mma site naanị na nkeji isii ọ gwuru. Gịnị ziri ezi?", options: ["Chụpụ ya n'otu", "Kesaa ọnụ ọgụgụ ya na onye ọ bụla", "Lee obere data ahụ anya nke ọma ma gwa ya okwu dị ka mmadụ", "Ekwela ka o gwuo egwu ọzọ"], answer: 2, why: "Obere data nwere ike ịbụ ikpe na-ezighị ezi nye ndị nọ n'oche; kọwaara ndị egwuregwu mkpebi dị ka mmadụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nyocha na nkwukọrịta",
        questions: [
          { objective: "O4", q: "Kedu isi iyi ziri ezi maka nyocha?", options: ["Iwere vidiyo mmega ahụ ha emechiri emechi na nzuzo", "Ịbanye n'app ha n'ike (hacking)", "Ịrịọ ndị egwuregwu ha okwuntughe ha", "Box score ọha na vidiyo egwuregwu a kwadoro"], answer: 3, why: "Jiri isi iyi ọha na nke a kwadoro, na-agbaso iwu njikọ egwuregwu." },
          { objective: "O4", q: "AI tinyere isi ihe na-adịghị na ndetu gị. Ị ga:", options: ["Wepụ ya ma ọ bụ lelee ya n'onwe gị", "Debe ya", "Mee ka ọ pụta ìhè", "Gwa otu ahụ na ọ bụ eziokwu"], answer: 0, why: "Jiri naanị ihe ndetu gị kwadoro." },
          { objective: "O5", q: "Isi ihe ole ka ozi otu kwesịrị inwe?", options: ["Iri abụọ", "Ọ dịghị", "Otu ruo atọ", "Ọnụ ọgụgụ niile"], answer: 2, why: "Ozi dị mkpụmkpụ na-anọgide n'uche." },
          { objective: "O5", q: "Ebee ka ndụmọdụ nye otu onye kwesịrị ime?", options: ["Na group chat otu", "Na soshal midia", "N'ihu ndị na-akwado otu", "Na nzuzo"], answer: 3, why: "Too n'ihu ọha, dozie na nzuzo." },
          { objective: "O6", q: "Gịnị ka ị ga-etinye n'ime AI kama aha ndị egwuregwu?", options: ["Aha zuru ezu na ụbọchị ọmụmụ", "Nọmba ma ọ bụ mkpụrụ aha mbụ", "Ndetu ahụike", "Adreesị ụlọ"], answer: 1, why: "Nke a na-echebe nzuzo ndị egwuregwu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Egwuregwu Otu",
    questions: [
      { objective: "O1", q: "Nyocha data otu pụtara:", options: ["Ịgụ naanị ndị na-akwado otu", "Ịnọchi onye nkuzi", "Iji nọmba ghọta ma meziwanye otu otu si egwu egwu", "Ire tiketi"], answer: 2, why: "Ọ na-akwado mkpebi otu ka mma." },
      { objective: "O1", q: "Otu na-agba ọsọ ngwa ngwa (fast break) kwesịrị idekọ:", options: ["Akara mgbe a gbanwere ụzọ na turnover", "Agba uwe egwuregwu", "Oge ụgbọ ala", "Ọnụ ọgụgụ ndị na-ekiri"], answer: 0, why: "Ndị ahụ dabara n'ụdị egwuregwu fast break." },
      { objective: "O1", q: "Ọnụ ọgụgụ otu ole ka ị ga-eji malite?", options: ["Atọ ruo ise", "Iri ise", "Ọ dịghị", "Otu narị"], answer: 0, why: "Ọnụ ọgụgụ ole na ole ị nwere ike ịnakọta n'egwuregwu ọ bụla." },
      { objective: "O1", q: "Onye nwere ike inye aka ịnakọta ọnụ ọgụgụ?", options: ["Onye ọka ikpe egwuregwu (referee)", "Onye mmegide", "Onye njikwa, onye na-enye aka ma ọ bụ onye egwuregwu merụrụ ahụ", "Ọ dịghị onye"], answer: 2, why: "Jiri ndị ị nwere." },
      { objective: "O2", q: "Spreadsheet ọnụ ọgụgụ otu kwesịrị ịbụ:", options: ["N'ihu ọha n'ịntanetị", "Nke e kesara naanị na ndị chọrọ ya", "Nke e zigara ndị mmegide n'email", "Nke e bipụtara maka ndị na-akwado otu"], answer: 1, why: "Kpachie ohere iji chebe ndị egwuregwu." },
      { objective: "O2", q: "Ohere view-only pụtara na ndị mmadụ:", options: ["Nwere ike ihichapụ ya", "Nwere ike idezi ihe niile", "Enweghị ike imeghe ya", "Nwere ike ịhụ ya mana ha enweghị ike ịgbanwe ya"], answer: 3, why: "Ọ na-echebe data gị." },
      { objective: "O3", q: "Ọdịiche akara (point differential) bụ:", options: ["Akara niile", "Naanị free throw", "Akara unu nwetara wepụ akara ndị mmegide nwetara", "Ọnụ ọgụgụ ndị na-eso gị"], answer: 2, why: "Ọ na-egosi otu lineup si eme." },
      { objective: "O3", q: "Pivot table:", options: ["Bụ ụdị mmega ahụ", "Bụ omume basketball", "Na-ehichapụ ahịrị", "Na-achịkọta ma na-agbakọ data"], answer: 3, why: "Ọ na-achịkọta data ngwa ngwa." },
      { objective: "O3", q: "Mgbe ị na-ajụ AI gbasara lineup, rịọkwa ya ka ọ:", options: ["Gosi mgbakọ ya", "Họrọ ndị ga-amalite egwuregwu", "Tinye nsonaazụ n'ịntanetị", "Chepụta ihe"], answer: 0, why: "Ị chọrọ ilele ọrụ ya." },
      { objective: "O3", q: "Ụzọ kacha mma isi lee usoro si na data anya bụ dị ka:", options: ["Azịza ikpeazụ", "Ajụjụ maka mmega ahụ na vidiyo", "Ihe nzuzo", "Ihe a ga-etinye na soshal midia"], answer: 1, why: "Data na-akwado mkpebi onye nkuzi." },
      { objective: "O4", q: "Akụkọ nyocha (scouting report) na-achịkọta:", options: ["Naanị ọnụ ọgụgụ nke gị", "Nri otu", "Otu onye mmegide si egwu egwu na otu e si emeri ha", "Aha ndị ọka ikpe egwuregwu"], answer: 2, why: "Ọ na-akwado otu gị." },
      { objective: "O4", q: "Omume a na-emekarị (tendency) bụ:", options: ["Ihe otu na-emekarị n'otu ọnọdụ", "Egwuregwu e mere naanị otu ugboro", "Iwu", "Akara"], answer: 0, why: "Omume a na-emekarị na-enyere aka ịkọ ihe ha ga-eme." },
      { objective: "O4", q: "Nyocha kwesịrị ịgbaso:", options: ["Iwu ọ bụla adịghị", "Ihe onye mmegide chọrọ", "Ihe na-ewu ewu na soshal midia", "Iwu njikọ egwuregwu gị gbasara vidiyo na nyocha"], answer: 3, why: "Njikọ egwuregwu na-esetị iwu nyocha ziri ezi." },
      { objective: "O4", q: "Nchịkọta nyocha AI kwesịrị isi na:", options: ["Ihe AI chepụtara", "Naanị ndetu nke gị", "Asịrị", "Okwu ndị na-akwado otu"], answer: 1, why: "Ndetu gị bụ ihe akaebe gị." },
      { objective: "O5", q: "Okwu sekọnd 30 n'ime locker room kwesịrị inwe:", options: ["Ọnụ ọgụgụ niile", "Isi ihe otu ruo atọ", "Ọ dịghị isi ihe", "Slaịdị iri"], answer: 1, why: "Ndị egwuregwu na-echeta isi ihe ole na ole doro anya." },
      { objective: "O5", q: "Ndị nkuzi kwesịrị ịkpọtụrụ ndị egwuregwu site na:", options: ["App ọ bụla a hụrụ n'ụzọ", "Akaụntụ nzuzo", "Okwu n'ihu ọha", "Ụzọ nkwukọrịta ụlọ akwụkwọ ma ọ bụ klọb kwadoro"], answer: 3, why: "Iwu na-echebe ụmụaka na ndị nkuzi." },
      { objective: "O6", q: "Kedu data chọrọ nlekọta kacha ukwuu?", options: ["Ozi ahụike na ozi akwụkwọ", "Akara ikpeazụ", "Ụbọchị egwuregwu", "Agba otu"], answer: 0, why: "Ọ bụ ihe nzuzo nwere nchekwa." },
      { objective: "O6", q: "Onye nwere ike ịgwa gị app ụlọ akwụkwọ gị kwere maka data ụmụ akwụkwọ?", options: ["Onye na-akwado otu", "AI", "Athletic director", "Onye mmegide"], answer: 2, why: "Ụlọ akwụkwọ na-esetị iwu data." },
      { objective: "O6", q: "Box score nwere ike ịtụfu:", options: ["Akara", "Rebound", "Akara ikpeazụ", "Mgbalị, ọchịchị na nchekwa a na-eme n'ebe bọọlụ na-anọghị"], answer: 3, why: "Ọ bụghị ihe niile na-apụta na nọmba." },
      { objective: "O6", q: "Mgbe mkpebi jiri data, ndị nkuzi kwesịrị:", options: ["Izo ya", "Ịkọwara ndị egwuregwu ya dị ka mmadụ", "Ịta spreadsheet ụta", "Itinye ya n'ihu ọha"], answer: 1, why: "Ndị egwuregwu kwesịrị nkwanye ugwu na nkọwa doro anya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [2, 4, 8, 10, 13, 14, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Spreadsheet ọnụ ọgụgụ", objective: "O2", notYet: "Egwuregwu na-erughị atọ, ọnụ ọgụgụ edoghị anya, ma ọ bụ ikesa na-adịghị mma ma ọ bụ ozi nzuzo na spreadsheet ahụ.", meets: "Ọnụ ọgụgụ atọ ruo ise e kọwara maka egwuregwu atọ ma ọ bụ mmega ahụ atọ, taabụ nchịkọta na ohere ịbanye n'enweghị nsogbu dabere n'ọrụ onye ọ bụla.", exceeds: "E nyere mmadụ maka ọnụ ọgụgụ ọ bụla, nkọwa ndị ahụ dịkwa na taabụ onye ọ bụla nwere ike ịgụ." },
      { name: "Usoro a chọtara", objective: "O3", notYet: "Enweghị usoro, e leleghị mgbakọ AI, ma ọ bụ e jiri aha zuru ezu na AI.", meets: "Otu usoro lineup ma ọ bụ usoro egwuregwu nwere mgbakọ e lelere, site n'iji naanị nọmba ma ọ bụ mkpụrụ aha mbụ.", exceeds: "Ọ na-ekwu ole data e nwere ma mee usoro ahụ ka ọ bụrụ ajụjụ mmega ahụ ma ọ bụ vidiyo maka onye nkuzi." },
      { name: "Nchịkọta nyocha", objective: "O4", notYet: "Isi ihe ndị na-esighị na ndetu, ma ọ bụ isi iyi ndị na-adịghị n'iwu njikọ egwuregwu.", meets: "Otu peeji nwere mbuso agha, nchekwa, ndị egwuregwu kacha mkpa na ihe atọ, isi ihe ọ bụla si na ndetu onye na-amụ ihe na isi iyi a kwadoro.", exceeds: "Ọ nwere oge (timestamp) na-egosi isi ihe ọ bụla." },
      { name: "Ozi otu na nzuzo", objective: "O5", notYet: "Isi ihe karịrị akarị, ma ọ bụ e kesara mperi ma ọ bụ ozi nzuzo onye egwuregwu.", meets: "Isi ihe otu ruo atọ e zipụrụ site n'ụzọ nkwukọrịta a kwadoro, n'enweghị ozi nzuzo onye egwuregwu ọ bụla.", exceeds: "Ụdị maka okwu locker room, slaịdị na ozi, nke niile na-asọpụrụ nzuzo." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ọrụ ikpeazụ ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Otu ka na-anakọta ọnụ ọgụgụ ha kọwara mgbe ụbọchị 30 gachara (nnyocha nsochi)",
      "Ndị nkuzi kọrọ na ha gbanwere mmega ahụ ma ọ bụ atụmatụ egwuregwu site n'otu usoro ma ọ bụ nchịkọta nyocha",
      "Otu nabatara iwu nzuzo data e dere ede nke athletic director kwadoro"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Akaụntụ Google n'efu maka Google Sheets",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Nsonaazụ ọha, box score ma ọ bụ vidiyo a kwadoro nke otu onye mmegide",
      "Iwu ụlọ akwụkwọ ma ọ bụ njikọ egwuregwu gị gbasara data ụmụ akwụkwọ na app a kwadoro",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunyere ọnụ ọgụgụ egwuregwu atọ ma ọ bụ mmega ahụ atọ"
    ],
    facilitatorNotes: [
      "Jụọ athletic director app ndị a kwadoro maka data ụmụ akwụkwọ tupu otu ahụ ahazie spreadsheet.",
      "Gosi otu esi eji nọmba ma ọ bụ mkpụrụ aha mbụ dochie aha tupu e tinye ihe ọ bụla n'ime AI.",
      "Chetara ndị ọrụ na ozi ahụike, ozi akwụkwọ na ozi nkwukọrịta adịghị mgbe ọ bụla na spreadsheet ọnụ ọgụgụ.",
      "Gbasoo iwu njikọ egwuregwu gbasara nyocha na mgbanwe vidiyo; ewerela vidiyo mmega ahụ otu ndị ọzọ emechiri emechi.",
      "Kparịta maka ikpe ziri ezi: data na-amalite ajụjụ, onye nkuzi na-ekpebi, a na-akọwakwara ndị egwuregwu mkpebi dị ka mmadụ."
    ]
  }
};
