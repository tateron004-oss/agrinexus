"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-video-analysis.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-video-analysis-ig",
  lang: "ig",
  translationOf: "athletes-video-analysis",
  category: "Athletes",
  name: "Nnyocha Vidiyo na Ọgụgụ Isi n'Egwuregwu",
  skills: "Ise vidiyo egwuregwu na mmega ahụ bara uru, Ikiri vidiyo nwere otu ajụjụ, Ide tag maka egwu n'ime spreadsheet, Iji AI chịkọta egwu e dere tag, Ịgbanwe vidiyo ka ọ bụrụ otu ihe a ga-elekwasị anya na mmega ahụ",
  outcome: "ise vidiyo egwuregwu ma ọ bụ mmega ahụ, ide tag maka opekata mpe egwu 20 n'ime spreadsheet nwere ajụjụ doro anya n'uche gị, iji ngwa enyemaka AI chịkọta usoro ndị na-emegharị onwe ha, ma gbanwee ha ka ha bụrụ otu ihe a ga-elekwasị anya na mmega ahụ nke gị na onye nkuzi gị kwekọrịtara.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu na ndị nkuzi egwuregwu (coach) chọrọ ịmụta ihe site na vidiyo n'enweghị ngwanrọ dị oke ọnụ. Ị ga-eji igwefoto ekwentị, spreadsheet n'efu na ngwa enyemaka AI n'efu.",
    "Ikiri vidiyo bụ nka. Ọtụtụ mmadụ na-ekiri naanị egwu kacha mma (highlights). Ị ga-amụta ikiri ya nwere ajụjụ, dee tag maka ihe mere, chọta usoro na-emegharị onwe ya, ma gbanwee ha ka ha bụrụ ihe ị ga-amụ na mmega ahụ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Sere otu egwuregwu ma ọ bụ mmega ahụ na vidiyo (nwee ikike), họrọ otu ajụjụ, dee tag maka opekata mpe egwu 20 n'ime Google Sheet, rịọ ngwa enyemaka AI ka ọ chịkọta usoro ndị dị na tag gị, ma dee otu ihe a ga-elekwasị anya na mmega ahụ. Gị na onye nkuzi gị lerịta ya anya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu na ndị nkuzi egwuregwu nọ n'ụlọ akwụkwọ sekọndrị, mahadum na klọb, ndị chọrọ ịmụta ihe site na vidiyo egwuregwu na mmega ahụ n'enweghị ngwanrọ dị oke ọnụ.",
    startingPoint: "Ha nwere ike ise vidiyo n'ekwentị, ha ekiriwokwa vidiyo egwuregwu, ọtụtụ mgbe maka egwu kacha mma. Ole na ole esebeghị vidiyo nwere atụmatụ, dee tag maka egwu, gụọ usoro n'ime spreadsheet, ma ọ bụ lelee nchịkọta AI megide ọnụ ọgụgụ nke ha.",
    gap: "Ikiri vidiyo n'enweghị ajụjụ na-egosikarị naanị egwu kacha mma na nnukwu mperi, ya mere mmega ahụ anaghị agbanwe. Ide tag na ịgụ ọnụ na-eme ka vidiyo ghọọ ihe akaebe na-eduga n'otu ihe doro anya a ga-elekwasị anya na mmega ahụ na mkparịta ụka ka mma gị na onye nkuzi gị.",
    constraints: [
      "Okwu dị mfe, ihe dị ka ọkwa ịgụ akwụkwọ klas 7",
      "Igwefoto ekwentị, Google Sheets n'efu na ngwa enyemaka AI n'efu; ọ dịghị ngwanrọ a na-akwụ ụgwọ dị mkpa",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunyere oge ise vidiyo na ide tag maka otu egwuregwu ma ọ bụ mmega ahụ",
      "Iwu otu egwuregwu, ụlọ akwụkwọ na league gbasara ise vidiyo; vidiyo egwuregwu ụmụaka na-egosi ụmụ ndị ọzọ",
      "Aha ndị egwuregwu ndị ọzọ na ozi nzuzo ha anaghị abanye na ngwa AI"
    ],
    prerequisites: "Ọ dịghị. \"Ngwa AI maka Ndị Egwuregwu\" ga-enyere gị aka ma ọ bụrụ na ijibeghị Google Sheets mgbe ọ bụla."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ekwentị n'egwuregwu ma ọ bụ mmega ahụ", action: "ise vidiyo bara uru site n'ebe dị elu, n'etiti, nwere nlele sara mbara ma kwụsie ike", standard: "na-enweta ikike onye nkuzi gị tupu i see ya na tupu i kesaa ya" },
    { id: "O2", condition: "Tupu i kiri vidiyo egwuregwu ma ọ bụ mmega ahụ", action: "ide otu ajụjụ dị warara ma kiri ya ugboro abụọ, na-akwụsịtụ n'egwu ndị na-aza ya", standard: "nwere otu ajụjụ n'oge ikiri ọ bụla na obere ndetu maka egwu ọ bụla metụtara ya" },
    { id: "O3", condition: "Site n'iji Google Sheets na vidiyo gị", action: "ide tag maka egwu nwere Play #, Time, Situation, What happened, Result na Note", standard: "na-ede tag maka opekata mpe egwu 20 na-eji otu okwu tag ahụ mgbe niile" },
    { id: "O4", condition: "Mgbe i nwere opekata mpe egwu 20 e dere tag", action: "ịgụ tag gị site na sort, filter ma ọ bụ COUNTIF ma dee usoro abụọ kacha elu nwere nọmba", standard: "na-ede \"lee ọzọ\" n'akụkụ usoro ọ bụla dabere naanị n'egwu ole na ole" },
    { id: "O5", condition: "Site n'iji ngwa enyemaka AI n'efu na tebụl tag gị", action: "ịrịọ nchịkọta usoro kacha elu nwere ọnụ ọgụgụ ma lelee ya megide ọnụ ọgụgụ nke gị", standard: "e wepụrụ aha ndị egwuregwu ndị ọzọ na ozi nzuzo, ọnụ ọgụgụ ọ bụla dakwara na sheet gị" },
    { id: "O6", condition: "Mgbe i nwere usoro gị kacha sie ike", action: "ide otu ihe a ga-elekwasị anya na mmega ahụ ma bute ya nye onye nkuzi gị ya na nọmba, timestamp na ajụjụ", standard: "gị na onye nkuzi gị kwekọrịtara n'ihe ahụ, ma nwee atụmatụ ise vidiyo ọzọ na ide tag ọzọ ma emechaa" }
  ],
  chapters: [
    {
      name: "Isi 1: Inweta ezigbo vidiyo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ise vidiyo ị ga-eji n'ezie",
          minutes: 5,
          goal: "Dozie ekwentị ka i see vidiyo egwuregwu ma ọ bụ mmega ahụ bara uru.",
          text: [
            "Ezigbo vidiyo na-amalite n'ezigbo ebe igwefoto. Ọ bụrụ na ị nwere ike, see ya site n'ebe dị elu, dị ka n'elu oche ndị na-ekiri egwuregwu (bleachers), ka ị hụ egwu ahụ niile na ohere dị n'etiti ndị egwuregwu. Jide ekwentị n'akụkụ (landscape) ma mee ka ọ kwụsie ike site na tripod ma ọ bụ ịdabere ya n'ihe.",
            "Soro bọọlụ, mana mee ka ọtụtụ ama egwuregwu ka dị n'ihuenyo ka ị hụ ihe ndị egwuregwu na-enweghị bọọlụ na-eme. Esela ya nso nke ukwuu (zoom).",
            "Nweta ikike. Otu egwuregwu gị, ụlọ akwụkwọ gị ma ọ bụ league gị nwere ike inwe iwu gbasara ise vidiyo, ụmụ ndị ọzọ na-apụtakwa na vidiyo egwuregwu ụmụaka. Jụọ onye nkuzi gị tupu i see vidiyo na tupu i kesaa ihe ọ bụla."
          ],
          steps: ["Rịọ onye nkuzi gị ikike ise vidiyo.", "Chọta ebe dị elu, n'etiti.", "Tụgharịa ekwentị n'akụkụ ma mee ka ọ kwụsie ike.", "Debe nlele sara mbara; soro bọọlụ.", "Lelee batrị na ohere nchekwa tupu egwuregwu amalite."],
          words: [["Landscape", "ijide ekwentị n'akụkụ, ka vidiyo ahụ sara mbara."], ["Tripod", "ihe nwere ụkwụ atọ na-ejide igwefoto ka ọ kwụsie ike."]],
          slides: [
            { title: "Ebe igwefoto", bullets: ["N'elu na n'etiti ma ọ bụrụ na ị nwere ike", "Hụ egwu ahụ niile na ohere dị n'etiti ndị egwuregwu"] },
            { title: "Ndozi igwefoto", bullets: ["Ekwentị n'akụkụ", "Kwụsie ike: tripod ma ọ bụ dabere ya n'ihe", "Nlele sara mbara; soro bọọlụ"] },
            { title: "Tupu i see vidiyo", bullets: ["Jụọ onye nkuzi gị", "Lelee batrị na ohere nchekwa", "Jụọ tupu i kesaa"] }
          ],
          tryIt: "Na mmega ahụ gị ọzọ, mgbe onye nkuzi gị kwere, see vidiyo nkeji ise site n'ebe kacha elu ị ga-achọta. Kirie ya: ị na-ahụ onye ọ bụla sonyere n'egwu ọ bụla?",
          youCanNow: "idozi ekwentị ka i see vidiyo egwuregwu ma ọ bụ mmega ahụ bara uru, nwere ikike.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere ị ga-eji debe nlele sara mbara kama ịse nso (zoom)?", options: ["Vidiyo sara mbara na-eri obere ohere nchekwa", "Ịse nso megidere iwu", "Ka ị hụ ihe ndị egwuregwu na-enweghị bọọlụ na-eme", "Zoom na-eri batrị"], answer: 2, why: "Nlele sara mbara na-egosi ohere dị n'etiti ndị egwuregwu na ndị nọ n'ebe dị anya site na bọọlụ." },
            { objective: "O1", q: "Ị chọrọ ise vidiyo egwuregwu ụmụaka nwanne gị nwanyị ma tinye ya n'ịntanetị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Tinye ya ma wepụ ya ma ọ bụrụ na mmadụ mere mkpesa", "Jụọ onye nkuzi maka iwu tupu i see ya na tupu i kesaa ya", "See naanị otu nke ọzọ", "Mee ka ihu nke gị ghara ịpụta ìhè"], answer: 1, why: "Otu egwuregwu na league nwere ike inwe iwu gbasara ise vidiyo, vidiyo ahụ na-egosikwa ụmụ ndị ọzọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ikiri vidiyo nwere ajụjụ",
          minutes: 5,
          goal: "Họrọ otu ajụjụ doro anya tupu i kiri vidiyo.",
          text: [
            "Ọ bụrụ na i kiri vidiyo n'enweghị atụmatụ, ị na-ahụkarị naanị egwu kacha mma na mperi gị kacha njọ. Ndị nkuzi egwuregwu na-ekiri ya nwere ajụjụ.",
            "Ezigbo ajụjụ dị warara: \"Ebee ka bọọlụ na-esi n'aka m apụ?\" \"Olee otu m si eji ọsọ alaghachi n'ichekwa (defense)?\" \"Kedu ndokwa ndị na-anata serve (volleyball) na-atụfu akara?\" \"Gịnị ka otu nke ọzọ na-eme na third down (football America)?\"",
            "Họrọ otu ajụjụ n'oge ikiri ọ bụla. Kiri ya otu ugboro na ọsọ nkịtị ka ị hụ ihe niile, wee kirie ya ọzọ ma kwụsịtụ n'egwu ọ bụla na-aza ajụjụ gị."
          ],
          steps: ["Dee otu ajụjụ dị warara.", "Kirie ya otu ugboro na ọsọ nkịtị.", "Kirie ya ọzọ ma kwụsịtụ n'egwu ọ bụla metụtara ajụjụ gị.", "Dee obere ndetu maka egwu ọ bụla."],
          words: [["Ọmụmụ vidiyo (film study)", "ikiri vidiyo egwuregwu ma ọ bụ mmega ahụ iji mụta ihe ma ka mma."], ["Ọgụgụ isi n'egwuregwu (game intelligence)", "ịghọta ihe mere egwu ji eme, ọ bụghị naanị ihe mere."]],
          slides: [
            { title: "Enweghị atụmatụ = naanị egwu kacha mma", bullets: ["Ị na-ahụ nnukwu egwu na nnukwu mperi", "Ị na-atụfu usoro na-emegharị onwe ya"] },
            { title: "Ajụjụ dị warara", bullets: ["\"Ebee ka bọọlụ na-esi n'aka m apụ?\"", "\"Olee otu m si eji ọsọ alaghachi n'ichekwa?\"", "\"Gịnị ka ha na-eme na third down?\""] },
            { title: "Ikiri ugboro abụọ", bullets: ["1. Ọsọ nkịtị: hụ ihe niile", "2. Kwụsịtụ n'egwu ndị na-aza ajụjụ gị"] }
          ],
          tryIt: "Dee ajụjụ atọ i nwere ike ịjụ maka egwuregwu gị na ọnọdụ gị n'otu. Họrọ otu ma kirie vidiyo nkeji ise nwere ya, na-ede ndetu oge ọ bụla ọ pụtara.",
          youCanNow: "ikiri vidiyo nwere otu ajụjụ doro anya ma dee ndetu maka egwu ndị na-aza ya.",
          quickCheck: [
            { objective: "O2", q: "Kedu nke bụ ajụjụ vidiyo dị warara?", options: ["Olee otu m si eji ọsọ alaghachi n'ichekwa?", "Anyị ọ gbara nke ọma?", "Oge egwuregwu ahụ ọ dị mma?", "Onye bụ onye egwuregwu kacha mma?"], answer: 0, why: "Ajụjụ dị warara na-egosi egwu ụfọdụ ị nwere ike ịkwụsịtụ ma dee ndetu." },
            { objective: "O2", q: "I nwere ajụjụ abụọ maka vidiyo gị. Gịnị ka ị ga-eme?", options: ["Zaa ha abụọ n'otu oge ikiri", "Hapụ ajụjụ nke abụọ", "Rịọ AI ka ọ kirie ya kama", "Kiri ya nwere otu ajụjụ n'otu oge"], answer: 3, why: "Họrọ otu ajụjụ n'oge ikiri ọ bụla." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ide tag maka egwu n'ime spreadsheet",
          minutes: 6,
          goal: "Dee tag maka egwu na Google Sheets ka e nwee ike ịgụ usoro.",
          text: [
            "Ide tag pụtara ide otu okwu ole na ole ahụ maka egwu ọ bụla. Ọ na-eme ka vidiyo ghọọ data ị nwere ike ịgụ.",
            "Mee kọlụm: Play # (nọmba egwu), Time (oge na vidiyo), Situation (ọnọdụ, dịka ọmụmaatụ \"fast break\" ma ọ bụ \"2nd and long\"), What happened (ihe mere), Result (nsonaazụ: ọma, etiti ma ọ bụ njọ), na Note (ndetu). Jiri otu okwu ahụ mgbe niile, ka \"turnover\" bụrụ \"turnover\" mgbe niile, ọ bụghị \"lost ball\" mgbe ụfọdụ.",
            "Ngwa vidiyo otu egwuregwu dị ka Hudl na-ede tag maka egwu n'ọtụtụ ụlọ akwụkwọ; ọ bụrụ na otu gị na-eji otu, jụọ onye nkuzi gị otu esi eji tag ya. Spreadsheet na-arụ ọrụ maka onye ọ bụla, n'efu."
          ],
          steps: ["Meghee Google Sheets.", "Kọlụm: Play #, Time, Situation, What happened, Result, Note.", "Họrọ obere ndepụta okwu tag ma rapara na ha.", "Kwụsịtụ ma dejupụta otu ahịrị maka egwu ọ bụla.", "Dee tag maka opekata mpe egwu 20."],
          words: [["Tag", "akara aha ị na-enye egwu ọ bụla, dị ka \"turnover\" ma ọ bụ \"fast break\"."], ["Timestamp", "oge na vidiyo ebe egwu na-amalite, dị ka 12:45."]],
          slides: [
            { title: "Tag = vidiyo ghọọ data", bullets: ["Otu akara aha ahụ maka egwu ọ bụla", "Ugbu a ị nwere ike ịgụ usoro"] },
            { title: "Kọlụm gị", bullets: ["Play #, Time, Situation", "What happened, Result, Note"] },
            { title: "Iwu tag", bullets: ["Obere ndepụta okwu tag", "Otu okwu ahụ mgbe niile", "Opekata mpe egwu 20"] }
          ],
          tryIt: "Dozie sheet tag gị ma dee tag maka egwu 10 site na vidiyo gị, na-eji ajụjụ gị site na Nkuzi 2.",
          youCanNow: "ide tag maka egwu n'ime spreadsheet nwere otu akara aha ahụ mgbe niile na timestamp.",
          quickCheck: [
            { objective: "O3", q: "Kedu kọlụm na-edekọ ma egwu ahụ gara nke ọma?", options: ["Play #", "Time", "Result", "Situation"], answer: 2, why: "Result bụ ọma, etiti ma ọ bụ njọ." },
            { objective: "O3", q: "I dere \"lost ball\" maka egwu ụfọdụ na \"turnover\" maka ndị ọzọ. Gịnị ka ị ga-eme?", options: ["Gbanwee ha niile ka ha bụrụ otu okwu, dị ka \"turnover\"", "Hapụ ha; ọ dịghị mkpa", "Hichapụ egwu ndị ahụ", "Tinye okwu nke atọ"], answer: 0, why: "Iji otu okwu ahụ mgbe niile na-eme ka ọnụ ọgụgụ gị dị mma." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Inweta ezigbo vidiyo",
        questions: [
          { objective: "O1", q: "Kedu ebe igwefoto kacha mma maka vidiyo egwuregwu?", options: ["Naanị n'ala n'azụ ọnụ goolu", "N'ime akpa gị", "N'elu na n'etiti", "Zoom n'ihu otu onye egwuregwu"], answer: 2, why: "N'elu na n'etiti na-egosi egwu ahụ niile na ohere dị n'etiti ndị egwuregwu." },
          { objective: "O1", q: "Tupu i see vidiyo mmega ahụ, ị kwesịrị:", options: ["Ịrịọ onye nkuzi gị ikike", "Igosi ya ozugbo n'ịntanetị (live)", "Ise ime ụlọ mgbanwe uwe otu nke ọzọ", "Ijide ekwentị ọtọ"], answer: 0, why: "Otu egwuregwu na ụlọ akwụkwọ na-enwekarị iwu gbasara ise vidiyo." },
          { objective: "O2", q: "Kedu nke bụ ezigbo ajụjụ maka ọmụmụ vidiyo?", options: ["\"Egwuregwu ahụ ọ dị mma?\"", "\"Gịnị mere anyị ji dị njọ?\"", "\"Onye nwere akpụkpọ ụkwụ kacha mma?\"", "\"Ebee ka bọọlụ na-esi n'aka m apụ?\""], answer: 3, why: "Ajụjụ dị warara na-eduga gị n'usoro ị nwere ike idozi." },
          { objective: "O3", q: "Gịnị ka ide tag na-eme?", options: ["Ọ na-ehichapụ egwu ọjọọ", "Ọ na-eme ka vidiyo ghọọ data ị nwere ike ịgụ", "Ọ na-agbakwunye egwu (music)", "Ọ na-eme ka vidiyo dị mkpụmkpụ"], answer: 1, why: "Akara aha na-agbanweghị agbanwe na-enyere gị aka ịgụ usoro." },
          { objective: "O3", q: "Gịnị mere ị ga-eji jiri otu okwu tag ahụ mgbe niile?", options: ["Ka ọ dị ogologo", "Ka ọnụ ọgụgụ dị mma", "Ọ na-ama mma n'anya", "Ọ dịghị ihe kpatara ya"], answer: 1, why: "Okwu dị iche iche maka otu ihe ahụ na-emebi ọnụ ọgụgụ gị." }
        ]
      }
    },
    {
      name: "Isi 2: Ịchọta usoro na iji ha",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịgụ usoro dị na tag gị",
          minutes: 5,
          goal: "Gụọ tag gị ma chọta usoro kacha elu.",
          text: [
            "Mgbe i nwere egwu 20 ma ọ bụ karịa e dere tag, gụọ ugboro ole ọnọdụ na nsonaazụ ọ bụla pụtara. Na Google Sheets ị nwere ike iji kọlụm hazie ya (sort), jiri filter, ma ọ bụ jiri usoro COUNTIF gụọ otu tag.",
            "Chọọ usoro, ọ bụghị otu egwu: \"7 n'ime turnover 9 m mere mgbe m na-agba bọọlụ n'aka ekpe mgbe a na-akpagbu m\" bụ usoro. Otu pas ọjọọ abụghị.",
            "Obere nọmba nwere ike iduhie gị. Ọ bụrụ na ihe mere naanị ugboro abụọ, kiriekwuo vidiyo tupu i kpebie na ọ bụ ezi usoro."
          ],
          steps: ["Hazie (sort) ma ọ bụ filter site na Result.", "Gụọ Situation ọ bụla maka nsonaazụ ọjọọ.", "Dee usoro abụọ kacha elu dị ka ahịrịokwu nwere nọmba.", "Dee \"lee ọzọ\" n'akụkụ usoro ọ bụla nwere egwu ole na ole."],
          words: [["Usoro (pattern)", "ihe na-eme ugboro ugboro n'ọnọdụ yiri ibe ha."], ["COUNTIF", "usoro (formula) spreadsheet na-agụ cell ndị dabara n'otu okwu ma ọ bụ nọmba."]],
          slides: [
            { title: "Gụọ tag gị", bullets: ["Sort ma ọ bụ filter site na Result", "COUNTIF na-agụ otu tag"] },
            { title: "Usoro na otu egwu", bullets: ["Usoro: 7 n'ime turnover 9 mgbe m gara n'aka ekpe", "Ọ bụghị usoro: otu pas ọjọọ"] },
            { title: "Kpachara anya na obere nọmba", bullets: ["Naanị ugboro abụọ? Buru ụzọ kirie vidiyo ọzọ"] }
          ],
          tryIt: "Mechaa ide tag maka egwu 20. Gụọ nsonaazụ gị site n'ọnọdụ ma dee usoro abụọ kacha elu dị ka ahịrịokwu nwere nọmba.",
          youCanNow: "ịgụ tag ma kọwaa usoro nwere nọmba.",
          quickCheck: [
            { objective: "O4", q: "Kedu n'ime ndị a bụ usoro?", options: ["Otu pas ọjọọ na ọkara nke abụọ", "5 n'ime shot 6 m tụfuru mere mgbe m na-agba bọọlụ (dribble)", "Akara ikpeazụ", "Egwu kacha mma n'egwuregwu ahụ"], answer: 1, why: "Usoro na-emegharị onwe ya nwere nọmba; otu egwu abụghị usoro." },
            { objective: "O4", q: "Usoro i chere na ọ dị pụtara naanị n'egwu abụọ. Gịnị ka ị ga-eme?", options: ["Wuo mmega ahụ niile gburugburu ya", "Leghara tag gị niile anya", "Gwa otu gị na ọ bụ nsogbu gị kacha ukwuu", "Dee \"lee ọzọ\" ma buru ụzọ see vidiyo ọzọ"], answer: 3, why: "Obere nọmba nwere ike iduhie gị, ya mere kiriekwuo vidiyo tupu i kpebie." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iji AI chịkọta ndetu vidiyo gị",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI ka ọ chịkọta egwu e dere tag ma lelee nchịkọta ya.",
          text: [
            "Ị nwere ike idetuo tebụl tag gị (n'enweghị aha onye egwuregwu ọ bụla ma ọ bụghị nke gị, na n'enweghị ozi nzuzo) n'ime ngwa enyemaka AI ma jụọ: \"Nke a bụ egwu m dere tag. Chịkọta usoro atọ kacha elu nwere ọnụ ọgụgụ, ma tụọ aro otu ajụjụ m ga-ajụ onye nkuzi m.\"",
            "AI maara ịhụ usoro na tebụl ederede nke ọma, mana ọ nwere ike ịgụ ọnụ ezighi ezi ma ọ bụ chepụta ihe. Tụnyere ọnụ ọgụgụ ya na nke gị site na nkuzi gara aga. Ọ bụrụ na ha dị iche, kwere sheet gị ma dozie prompt gị.",
            "Ụfọdụ ngwa AI nwere ike ilele foto ma ọ bụ vidiyo, mana ha nwere ike ịghọtahie omume egwuregwu na-aga ọsọ ọsọ. Jiri tag nke gị dị ka isi ihe ị dabere na ya, jiri AI dị ka onye enyemaka."
          ],
          steps: ["Detuo tebụl tag gị, wepụ aha ndị egwuregwu ndị ọzọ na ozi nzuzo.", "Rịọ maka usoro atọ kacha elu nwere ọnụ ọgụgụ.", "Tụnyere ya na ọnụ ọgụgụ nke gị.", "Dozie mperi ọ bụla; sheet gị na-emeri."],
          words: [["Nchịkọta (summary)", "ụdị dị mkpụmkpụ na-edobe isi ihe ndị ahụ."]],
          slides: [
            { title: "Rịọ AI ka ọ chịkọta", bullets: ["Tinye tebụl tag gị", "\"Usoro atọ kacha elu nwere ọnụ ọgụgụ\"", "\"Otu ajụjụ maka onye nkuzi m\""] },
            { title: "Lelee ya", bullets: ["AI nwere ike ịgụ ezighi ezi ma ọ bụ chepụta ihe", "Tụnyere ya na ọnụ ọgụgụ gị", "Sheet gị na-emeri"] },
            { title: "Nzuzo", bullets: ["Enweghị aha ndị egwuregwu ndị ọzọ", "Enweghị ozi nzuzo"] }
          ],
          tryIt: "Tinye egwu 20 i dere tag n'ime ngwa enyemaka AI ma rịọ maka usoro atọ kacha elu nwere ọnụ ọgụgụ. Lelee ọnụ ọgụgụ ọ bụla megide sheet gị.",
          youCanNow: "iji AI chịkọta tag vidiyo ma lelee nchịkọta ahụ megide ọnụ ọgụgụ nke gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị nwere ike ịga njọ mgbe AI na-achịkọta tebụl tag gị?", options: ["Ọ nwere ike ịgụ ezighi ezi ma ọ bụ chepụta ihe", "Ọ na-ehichapụ sheet gị mgbe niile", "Ọ na-ekesa vidiyo ahụ n'ihu ọha", "Ọ dịghị ihe nwere ike ịga njọ"], answer: 0, why: "AI nwere ike ịhụ usoro mana ọ nwere ike ịgụ ezighi ezi, ya mere lelee ya megide ọnụ ọgụgụ nke gị." },
            { objective: "O5", q: "Tebụl tag gị nwere aha ndị otu gị. Gịnị ka ị ga-eme tupu i tinye ya n'ime AI?", options: ["Tinye ya otu o si dị", "Gbakwunye nọmba ekwentị ha", "Wepụ aha ndị egwuregwu ndị ọzọ na ozi nzuzo", "Rịọ ndị otu gị ka ha tinye ya kama"], answer: 2, why: "Debe aha ndị egwuregwu ndị ọzọ na ozi nzuzo n'ebe dị anya site na ngwa AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịgbanwe vidiyo ka ọ bụrụ ihe a ga-elekwasị anya na mmega ahụ",
          minutes: 5,
          goal: "Gbanwee usoro gị kacha elu ka ọ bụrụ otu ihe a ga-elekwasị anya na mmega ahụ nke gị na onye nkuzi gị kwekọrịtara.",
          text: [
            "Vidiyo na-enye aka naanị ma ọ bụrụ na ọ gbanwere mmega ahụ. Were usoro gị kacha sie ike ma gbanwee ya ka ọ bụrụ otu ihe a ga-elekwasị anya: \"Chebe bọọlụ mgbe a na-akpagbu m n'aka ekpe m\" ma ọ bụ \"Laghachi n'ichekwa n'ime sekọnd atọ mgbe turnover gasịrị.\"",
            "Bute onye nkuzi gị usoro ahụ, nọmba ya na timestamp abụọ ma ọ bụ atọ na-egosi ya. Jụọ: \"Kedu mmega (drill) ga-enyere aka na nke a?\" Ndị nkuzi egwuregwu hụrụ n'anya ndị egwuregwu na-abịa nwere ihe akaebe na ajụjụ.",
            "See vidiyo ọzọ mgbe izu ole na ole gachara ma dee tag ọzọ maka otu ajụjụ ahụ ka ị hụ ma usoro ahụ agbanweela. Nke ahụ bụ ọgụgụ isi n'egwuregwu: ịmụta, ime mmega na ilele."
          ],
          steps: ["Họrọ usoro gị kacha sie ike.", "Dee otu ihe a ga-elekwasị anya na mmega ahụ.", "Họrọ timestamp abụọ ma ọ bụ atọ na-egosi ya.", "Rịọ onye nkuzi gị maka mmega (drill).", "See vidiyo ọzọ ma dee tag ọzọ mgbe izu ole na ole gachara."],
          words: [["Ihe a ga-elekwasị anya na mmega ahụ (practice focus)", "otu ihe kpọmkwem ị na-arụ ọrụ na ya na mmega ahụ."], ["Ihe akaebe (evidence)", "eziokwu na-egosi na ihe bụ eziokwu, dị ka ọnụ ọgụgụ na timestamp vidiyo."]],
          slides: [
            { title: "Vidiyo ga-agbanwerịrị mmega ahụ", bullets: ["Usoro kacha sie ike -> otu ihe a ga-elekwasị anya"] },
            { title: "Bute onye nkuzi gị", bullets: ["Usoro ahụ na nọmba ya", "Timestamp abụọ ma ọ bụ atọ", "\"Kedu mmega ga-enyere aka?\""] },
            { title: "Mechie gburugburu ahụ", bullets: ["See vidiyo ọzọ mgbe izu ole na ole gachara", "Dee tag ọzọ maka otu ajụjụ ahụ", "Usoro ahụ ọ gbanwere?"] }
          ],
          tryIt: "Ọrụ ikpeazụ: site n'egwu 20 i dere tag na nchịkọta AI gị, dee otu ihe a ga-elekwasị anya na mmega ahụ ma họrọ timestamp abụọ. Kesaa ya na onye nkuzi gị ma rịọ maka mmega (drill).",
          youCanNow: "ịgbanwe usoro vidiyo ka ọ bụrụ ihe a ga-elekwasị anya na mmega ahụ ma lelee ma emechaa ma ọ ka mma.",
          quickCheck: [
            { objective: "O6", q: "Gịnị na-eme ka ihe a ga-elekwasị anya na mmega ahụ dị mma?", options: ["\"Gbaa nke ọma karịa\"", "Ndepụta mperi niile", "Otu mgbanwe kpọmkwem site n'usoro gị kacha sie ike", "Ihe ọ bụla AI tụrụ aro"], answer: 2, why: "Otu ihe a ga-elekwasị anya site n'usoro gị kacha sie ike na-agbanwe mmega ahụ." },
            { objective: "O6", q: "Onye nkuzi gị tụrụ aro mmega (drill) maka ihe ị na-elekwasị anya. Olee otu ị ga-esi mara na ọ rụrụ ọrụ?", options: ["Jụọ onye otu gị", "See vidiyo ọzọ mgbe izu ole na ole gachara ma dee tag ọzọ maka otu ajụjụ ahụ", "Tụkwasị obi n'otu obi gị si dị", "Jụọ AI ma ọ rụrụ ọrụ"], answer: 1, why: "Ịse vidiyo ọzọ na ide tag ọzọ na-egosi ma usoro ahụ agbanweela." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịchọta usoro na iji ha",
        questions: [
          { objective: "O4", q: "Kedu nke bụ usoro?", options: ["Otu pas ọjọọ", "Otu dunk mara mma", "Akara ikpeazụ", "7 n'ime turnover 9 mere mgbe m na-agba bọọlụ n'aka ekpe mgbe a na-akpagbu m"], answer: 3, why: "Usoro na-emegharị onwe ya n'ọtụtụ egwu yiri ibe ha." },
          { objective: "O4", q: "Gịnị ka COUNTIF na-eme?", options: ["Ọ na-agụ cell ndị dabara n'otu tag", "Ọ na-akpọ vidiyo", "Ọ na-ehichapụ ahịrị", "Ọ na-agbakwunye agba"], answer: 0, why: "COUNTIF na-agụ cell ndị dabara." },
          { objective: "O5", q: "Ọnụ ọgụgụ turnover AI dị iche na nke sheet gị. Kedu nke ị ga-ekwere?", options: ["AI", "Nke ọ bụla ka elu", "Sheet gị, wee dozie prompt", "Ọ dịghị nke ọ bụla"], answer: 2, why: "Tag nke gị bụ isi ihe ị dabere na ya; AI nwere ike ịgụ ezighi ezi." },
          { objective: "O5", q: "Tupu i tinye tag n'ime AI, wepụ:", options: ["Timestamp", "Result", "Situation", "Aha ndị egwuregwu ndị ọzọ na ozi nzuzo"], answer: 3, why: "Chebe nzuzo ndị ọzọ." },
          { objective: "O6", q: "Gịnị ka ị ga-ebutere onye nkuzi gị?", options: ["Naanị mkpesa", "Usoro ahụ, nọmba na timestamp, gbakwunyere ajụjụ", "Vidiyo niile n'enweghị ndetu", "Edemede AI dere"], answer: 1, why: "Ihe akaebe na ajụjụ na-eme ka mkparịta ụka baa uru." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nnyocha Vidiyo na Ọgụgụ Isi n'Egwuregwu",
    questions: [
      { objective: "O1", q: "Ijide ekwentị n'akụkụ mgbe ị na-ese vidiyo ka a na-akpọ:", options: ["Portrait", "Selfie", "Landscape", "Zoom"], answer: 2, why: "Landscape na-enye nlele sara mbara." },
      { objective: "O1", q: "Gịnị mere ị ga-eji see vidiyo site n'elu?", options: ["Ka ị hụ egwu ahụ niile na ohere dị n'etiti ndị egwuregwu", "Ka i zoo onwe gị", "Maka ụda ka mma", "Ọ bụ iwu"], answer: 0, why: "Ịnọ n'elu na-egosi onye ọ bụla sonyere." },
      { objective: "O1", q: "Gịnị na-eme ka igwefoto kwụsie ike?", options: ["Tripod ma ọ bụ ịdabere ya n'ihe", "Iji ya agba ọsọ", "Zoom", "Ịma ya jijiji"], answer: 0, why: "Vidiyo kwụsiri ike dị mfe ịmụ." },
      { objective: "O1", q: "Vidiyo egwuregwu ụmụaka na-egosikarị ụmụ ndị ọzọ. Ya mere ị kwesịrị:", options: ["Itinye ya ebe ọ bụla", "Ịghara ikpuchi ihe ọ bụla", "Ịjụ tupu i see ya na tupu i kesaa ya", "Ire ya"], answer: 2, why: "Otu egwuregwu na ezinụlọ nwere iwu nzuzo." },
      { objective: "O2", q: "Ikiri vidiyo n'enweghị atụmatụ na-apụtakarị na ị ga-ahụ:", options: ["Usoro niile", "Naanị egwu kacha mma na nnukwu mperi", "Ọ dịghị ihe", "Ndetu onye nkuzi"], answer: 1, why: "Na-enweghị ajụjụ, ị na-atụfu usoro." },
      { objective: "O2", q: "Ajụjụ ole n'oge ikiri ọ bụla?", options: ["Iri", "Ọ dịghị", "Ọtụtụ dị ka o kwere omume", "Otu"], answer: 3, why: "Otu ajụjụ dị warara na-eme ka uche gị dịrị n'otu ebe." },
      { objective: "O2", q: "N'oge ikiri nke abụọ, ị na-:", options: ["Gbanye ihe niile ọsọ ọsọ", "Mechie ụda ya", "Kwụsịtụ n'egwu ndị na-aza ajụjụ gị", "Hapụ ya"], answer: 2, why: "Ịkwụsịtụ na-enye gị ohere ide nkọwa." },
      { objective: "O2", q: "Ọgụgụ isi n'egwuregwu pụtara ịghọta:", options: ["Naanị akara", "Naanị ọnụ ọgụgụ (stats)", "Usoro oge egwuregwu", "Ihe mere egwu ji eme"], answer: 3, why: "Ọ bụ maka ihe kpatara ya, ọ bụghị naanị ihe mere." },
      { objective: "O3", q: "Timestamp bụ:", options: ["Oge na vidiyo ebe egwu na-amalite", "Ụbọchị egwuregwu", "Stampụ n'elu tiketi", "Opi ikpeazụ"], answer: 0, why: "Timestamp na-enyere gị aka ịchọta egwu ngwa ngwa." },
      { objective: "O3", q: "Kedu nke bụ kọlụm tag?", options: ["Abụ kacha amasị gị", "Situation", "Ihu igwe echi", "Okwuntughe gị"], answer: 1, why: "Situation bụ tag dị mkpa." },
      { objective: "O3", q: "Opekata mpe egwu ole ka ị ga-ede tag maka ha?", options: ["1", "3", "20", "500"], answer: 2, why: "Iri abụọ na-enye gị ezu ịhụ usoro." },
      { objective: "O3", q: "Ọ bụrụ na otu gị na-eji ngwa vidiyo dị ka Hudl, ị kwesịrị:", options: ["Ịjụ onye nkuzi gị otu esi eji tag ya", "Ileghara ya anya", "Ihichapụ ya", "Ikesa nbanye ya n'ịntanetị"], answer: 0, why: "Jiri ihe otu gị na-eji, otu onye nkuzi gị si chọọ." },
      { objective: "O4", q: "Ihe mere naanị ugboro abụọ. Ị kwesịrị:", options: ["Ịkpọ ya nnukwu usoro", "Ịgwa onye ọ bụla", "Ịgbanwe ọnọdụ gị n'otu", "Ibu ụzọ kirie vidiyo ọzọ"], answer: 3, why: "Obere nọmba nwere ike iduhie gị." },
      { objective: "O4", q: "Iji chọta usoro gị kacha elu na Sheets, ị nwere ike:", options: ["Ibipụta ya", "Iji sort, filter ma ọ bụ COUNTIF", "Ịgbanwe ụdị mkpụrụ akwụkwọ", "Ịgbakwunye foto"], answer: 1, why: "Ngwa ndị ahụ na-agụ ma na-achịkọta tag." },
      { objective: "O5", q: "Gịnị ka ị ga-arịọ AI ka o mee na tag gị?", options: ["Họrọ otu gị", "Chịkọta usoro kacha elu nwere ọnụ ọgụgụ", "Tinye ha n'ịntanetị", "Nye onye nkuzi gị akara"], answer: 1, why: "Ịchịkọta bụ ihe AI maara ime nke ọma." },
      { objective: "O5", q: "Ngwa AI na-agụ vidiyo ozugbo nwere ike:", options: ["Ọ dịghị mgbe ha na-emehie", "Dochie ndị nkuzi egwuregwu", "Bụrụ ihe iwu chọrọ", "Ịghọtahie omume egwuregwu na-aga ọsọ ọsọ"], answer: 3, why: "Jiri tag nke gị dị ka isi ihe ị dabere na ya." },
      { objective: "O6", q: "Ezigbo ihe a ga-elekwasị anya na mmega ahụ bụ:", options: ["\"Chebe bọọlụ mgbe a na-akpagbu m n'aka ekpe m\"", "\"Ka mma\"", "\"Merie\"", "\"Gbalịa ike\""], answer: 0, why: "Ọ bụ kpọmkwem, a pụkwara ime ya na mmega ahụ." },
      { objective: "O6", q: "Kedu ajụjụ kacha mma ị ga-ajụ onye nkuzi gị?", options: ["\"Gịnị mere m anaghị egwu karịa?\"", "\"Vidiyo ọ na-agwụ ike?\"", "\"Nke a bụ klip 3 nke usoro a. Kedu mmega ga-enyere aka?\"", "\"Enwere m ike ịhapụ mmega ahụ?\""], answer: 2, why: "Ihe akaebe gbakwunyere ajụjụ na-enweta azịza bara uru." },
      { objective: "O6", q: "Olee otu ị ga-esi mara ma ihe ị lekwasịrị anya na mmega ahụ rụrụ ọrụ?", options: ["Chee echiche", "Jụọ onye na-akwado otu", "Lelee mgbasa ozi ọha (social media)", "See vidiyo ọzọ ma dee tag ọzọ maka otu ajụjụ ahụ ma emechaa"], answer: 3, why: "Ide tag ọzọ na-egosi ma usoro ahụ agbanweela." },
      { objective: "O6", q: "Vidiyo na-enye aka naanị ma ọ bụrụ na ọ:", options: ["Nweta ọtụtụ ndị kiri ya", "Gbanwere ihe ị na-eme na mmega ahụ", "Dị ogologo", "Nwere egwu (music)"], answer: 1, why: "Ebumnuche ya bụ mmega ahụ ka mma na egwuregwu ka mma." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      3,
      5,
      9,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Vidiyo na ikike",
        objective: "O1",
        notYet: "E sere vidiyo n'enweghị ikike, ma ọ bụ vidiyo ahụ na-ama jijiji nke ukwuu ma ọ bụ dị nso nke ukwuu ịhụ egwu ahụ.",
        meets: "E nyere ikike; vidiyo landscape site n'ebe dị elu nwere nlele sara mbara ma kwụsie ike.",
        exceeds: "E lelere batrị na ohere nchekwa, e sekwara egwuregwu ma ọ bụ mmega ahụ niile n'enweghị oghere."
      },
      {
        name: "Sheet tag",
        objective: "O3",
        notYet: "Egwu na-erughị 20, kọlụm na-efu, ma ọ bụ okwu tag na-agbanwe.",
        meets: "Opekata mpe egwu 20 e dere tag na kọlụm isii niile, na-eji otu okwu tag ahụ mgbe niile.",
        exceeds: "Ahịrị ọ bụla nwere timestamp na obere ndetu metụtara ajụjụ ahụ."
      },
      {
        name: "Usoro na nlele AI",
        objective: "O5",
        notYet: "Enweghị ọnụ ọgụgụ, ma ọ bụ e jiri nchịkọta AI n'eleleghị ya.",
        meets: "E dere usoro kacha elu nwere ọnụ ọgụgụ, e lelekwara ọnụ ọgụgụ AI megide sheet ahụ, e wepụrụ aha.",
        exceeds: "A chọtara ihe dị iche ma dozie prompt ahụ; e dere \"lee ọzọ\" n'akụkụ usoro dabere n'obere nọmba."
      },
      {
        name: "Ihe a ga-elekwasị anya na mmega ahụ",
        objective: "O6",
        notYet: "Enweghị ihe a ga-elekwasị anya, ma ọ bụ o doghị anya.",
        meets: "Otu ihe kpọmkwem site n'usoro kacha sie ike, nke gị na onye nkuzi lerịtara anya site na nọmba na timestamp.",
        exceeds: "Ekwekọrịtara na mmega (drill) ma kaa ụbọchị a ga-ese vidiyo ọzọ ma dee tag ọzọ maka otu ajụjụ ahụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ọrụ ikpeazụ ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe kwuru na ha sere vidiyo ọzọ ma dee tag ọzọ maka otu ajụjụ ahụ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị nkuzi egwuregwu kwuru na mmega (drill) ma ọ bụ ihe a na-elekwasị anya gbanwere n'ihi ihe akaebe vidiyo onye egwuregwu",
      "Ndị na-amụ ihe were ihe ọmụmụ Athletes ọzọ, dị ka \"AI maka Egwuregwu Otu (Team Sports)\""
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nwere igwefoto, e chajiri, nwere ohere nchekwa",
      "Tripod ma ọ bụ ụzọ isi dabere ekwentị n'ihe (ọ bụghị iwu)",
      "Akaụntụ Google n'efu maka Google Sheets",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunyere nkeji 60 ruo 90 iji see vidiyo ma dee tag"
    ],
    facilitatorNotes: [
      "Kwado iwu otu egwuregwu, ụlọ akwụkwọ na league gbasara ise vidiyo tupu onye ọ bụla ese vidiyo, karịsịa n'egwuregwu ụmụaka.",
      "Gị na ndị egwuregwu kwekọrịta ebe a ga-echekwa vidiyo, na na a gaghị etinye ya n'ihu ọha n'enweghị ikike.",
      "Nye onye ọ bụla otu ndepụta okwu tag ahụ maka nnọkọ otu egwuregwu ka e nwee ike itunyere ọnụ ọgụgụ.",
      "Gosi otu esi ewepụ aha ndị egwuregwu ndị ọzọ tupu itinye ihe n'ime AI, ma mee ka ndị egwuregwu lelee ọnụ ọgụgụ AI megide sheet ha.",
      "Hazie obere oge nlele ya na ndị nkuzi egwuregwu ka onye egwuregwu ọ bụla nwee ike igosi usoro ya, timestamp ya na ajụjụ ya."
    ]
  }
};
