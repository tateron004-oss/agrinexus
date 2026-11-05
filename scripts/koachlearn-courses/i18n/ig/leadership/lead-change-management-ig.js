"use strict";

// Koach Learn course (Igbo translation of leadership/lead-change-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "lead-change-management-ig",
  lang: "ig",
  translationOf: "lead-change-management",
  category: "Leadership Development",
  name: "Iduzi Mgbanwe",
  skills: "Ịghọta ihe mere ndị mmadụ ji eguzogide mgbanwe, Ịkọwa ihe mere mgbanwe ji dị mkpa, Ịtinye ndị mgbanwe metụtara aka, Ide atụmatụ mgbanwe dị mfe, Ịkọsa mgbanwe na mmeri mbụ, Ime ka mgbanwe guzosie ike",
  outcome: "iduzi ezi mgbanwe n'ebe ọrụ ma ọ bụ n'obodo gị: ịghọta ihe mere ndị mmadụ ji eguzogide ya, ịkọwa ihe mere mgbanwe ahụ ji dị mkpa, ịtinye ndị ọ metụtara aka, ide atụmatụ mgbanwe nke otu peeji, ịkọsa ya nke ọma, na ime ka ọ gaa n'ihu mgbe a malitere ya.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla a rịọrọ ka o duzie mgbanwe: onye isi na-ewebata usoro oge ọhụrụ, otu enyemaka (nonprofit) na-akwaga na usoro ọhụrụ maka ndị na-enye onyinye, onye nwe obere azụmahịa na-agbanwe otu e si anabata ọda (orders), ma ọ bụ otu ndị ọrụ ugbo na-amalite idebe ndekọ dijitalụ.",
    "Ọtụtụ mgbanwe na-ada ọ bụghị n'ihi na echiche ahụ adịghị mma, kama n'ihi na e duteghị ndị mmadụ. Ị ga-amụta ihe mere ndị mmadụ ji eguzogide, otu esi akọwa ihe mere mgbanwe ji dị mkpa, otu esi etinye ndị mmadụ aka, na otu esi ahazi, akọsa ma na-ebugide mgbanwe n'ihu.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Na mmalite, họrọ otu ezi mgbanwe ị na-eche banyere ya ma jiri ya n'ọrụ \"Nwalee ya ugbu a\" ọ bụla. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ mgbanwe nke otu peeji maka ezi mgbanwe ị chọrọ iduzi. O kwesịrị ikwu ihe na-agbanwe, ihe mere (n'ahịrịokwu abụọ ma ọ bụ atọ ndị mmadụ ga-eche banyere ya), ndị ọ metụtara na otu ị ga-esi tinye ha aka, mgbe nzọụkwụ ọ bụla ga-eme, otu ị ga-esi mara na ọ na-arụ ọrụ, ozi atọ maka otu atọ dị iche iche, otu mmeri mbụ n'ọnwa mbụ, na ụzọ abụọ ị ga-esi mee ka mgbanwe ahụ gaa n'ihu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị isi otu, ndị na-elekọta ndị ọrụ (supervisors), ndị nwe obere azụmahịa, ndị isi otu enyemaka na ndị isi obodo ndị kwesịrị iduzi ezi mgbanwe, dị ka usoro ọhụrụ, usoro ọrụ ọhụrụ ma ọ bụ ụzọ ọhụrụ e si enyere ndị mmadụ aka.",
    startingPoint: "Ha maara mgbanwe ha chọrọ ma nwee ike ịkọwara ya onye kwenyeworị. Ọtụtụ ahụla mgbanwe ka ọ dara, mana ha edebeghị atụmatụ mgbanwe mgbe ọ bụla ma ọ bụ hazie otu ha ga-esi tinye ndị ọ metụtara aka.",
    gap: "Mgbanwe na-adakarị n'ihi na ndị mmadụ ahụghị ihe mere, a jụghị ha, ha nụrụ ya naanị otu ugboro, ma ọ bụ ha laghachiri n'omume ochie mgbe a malitere ya. Ndị isi chọrọ ụzọ dị mfe isi ghọta mmegide, kọwaa ihe mere mgbanwe ji dị mkpa, tinye ndị mmadụ aka, hazie, kọsaa ma mee ka mgbanwe ahụ gaa n'ihu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Oge: nkuzi dị mkpụmkpụ nke dabara n'etiti ọrụ ụbọchị",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa; akwụkwọ (paper) na-arụkwa ọrụ maka atụmatụ ahụ",
      "Atụmatụ mgbanwe ahụ ga-adaba n'otu peeji",
      "Eziokwu na akụkọ dị n'ịkọwa ihe mere mgbanwe ji dị mkpa ga-abụ nke onye na-amụ ihe n'onwe ya, ọ bụghị nke AI chepụtara"
    ],
    prerequisites: "Ọ dịghị. \"Ilekọta Otu Ndị Ọrụ\" bụ ihe ọmụmụ ọzọ na-enyere aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị mgbanwe ị chọrọ iduzi", action: "idepụta ndị ọ metụtara, ihe otu ọ bụla nwere ike ịtụfu na ihe ọ nwere ike irite, na ihe nwere ike ime ka ha guzogide", standard: "na-ewere nchegbu ọ bụla dị ka ozi ị ga-aza" },
    { id: "O2", condition: "Mgbe e nyere gị ezi mgbanwe", action: "ide nkọwa ihe mere mgbanwe ji dị mkpa nke na-ekwu nsogbu ahụ, ihe ga-aka mma, na ihe ga-eme ma ọ bụrụ na e meghị ihe ọ bụla", standard: "n'ahịrịokwu abụọ ma ọ bụ atọ, na-eji ezi eziokwu ma ọ bụ ezi akụkọ" },
    { id: "O3", condition: "Mgbe e nyere gị ndị mgbanwe metụtara", action: "ịhazi otu ị ga-esi tinye ha aka n'oge, dị ka ịjụ echiche ha, obere nnwale (pilot) ma ọ bụ ndị na-akwado mgbanwe", standard: "na-ekwu ihe ghere oghe na ihe na-agaghị agbanwe, na otu ị ga-esi kọọrọ ha ihe i mere" },
    { id: "O4", condition: "Mgbe e nyere gị ezi mgbanwe", action: "ide atụmatụ mgbanwe nke otu peeji na-aza gịnị, n'ihi gịnị, onye, mgbe na otu ị ga-esi mara", standard: "na onye nwe nzọụkwụ ọ bụla, na ihe ntụle abụọ ma ọ bụ atọ nwere ụbọchị ilele ha" },
    { id: "O5", condition: "Mgbe ị na-ekwupụta mgbanwe", action: "ide ozi maka otu atọ dị iche iche ma hazie otu mmeri mbụ", standard: "ozi ọ bụla na-ekwu ihe na-agbanwe, ihe mere, mgbe, enyemaka ha ga-enweta na onye ha ga-ajụ" },
    { id: "O6", condition: "Mgbe e malitere mgbanwe ahụ", action: "ịhazi ụzọ abụọ isi mee ka mgbanwe ahụ gaa n'ihu", standard: "dị ka ilele ihe ntụle n'ụbọchị a kara aka na itinye ụzọ ọhụrụ ahụ na ndepụta ọrụ (checklists) ma ọ bụ ọzụzụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịghọta mgbanwe na iduga ndị mmadụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe mere ndị mmadụ ji eguzogide mgbanwe",
          minutes: 5,
          goal: "Kpọọ aha ihe nwere ike ime ka ndị mmadụ guzogide mgbanwe gị, ka i wee nwee ike ịza ha.",
          text: [
            "Mgbanwe pụtara ịtụfu ihe ị maara nke ọma, ọbụlagodi mgbe ụzọ ọhụrụ ka mma. Ndị mmadụ na-eguzogide n'ihi ihe a ghọtara aghọta: ha ahụghị ihe mere o ji dị mkpa, ha na-atụ ụjọ na ha agaghị ama ụzọ ọhụrụ ahụ nke ọma, ha na-echegbu onwe ha maka ịtụfu oge, ego, ọkwa ma ọ bụ ndị enyi, a jụghị ha, ma ọ bụ mgbanwe ndị gara aga emeghị nke ọma.",
            "Mmegide bụ ozi, ọ bụghị mwakpo. Onye na-eguzogide na-ahụkarị ezi nsogbu ị hụghị. Were nchegbu ya kpọrọ ihe ma jụọ ya banyere ya.",
            "Tupu i kwupụta ihe ọ bụla, depụta ndị ọ metụtara na ihe otu ọ bụla nwere ike ịtụfu na irite. Ndepụta ahụ na-egosi gị ihe ị ga-akọwa, ndị ị ga-etinye aka na enyemaka ị ga-enye."
          ],
          steps: ["Dee mgbanwe ahụ n'otu ahịrịokwu.", "Depụta otu ọ bụla ọ metụtara.", "Maka otu ọ bụla, dee ihe ha nwere ike ịtụfu na ihe ha nwere ike irite.", "Kaa akara n'nchegbu ndị ị ga-aza."],
          words: [["Mmegide (resistance)", "iguzogide mgbanwe, n'ihu ọha ma ọ bụ na nzuzo."], ["Onye mmasị (stakeholder)", "onye ọ bụla mgbanwe metụtara ma ọ bụ onye nwere ike ime ka ọ rụọ ọrụ ma ọ bụ ghara ịrụ."]],
          slides: [
            { title: "Mgbanwe pụtara ịtụfu ihe", bullets: ["Ọbụna ezigbo mgbanwe na-atụfu ihe a maara nke ọma", "Ndị mmadụ na-echegbu onwe ha tupu ha ahụ uru ya"] },
            { title: "Ihe na-emekarị ka ndị mmadụ guzogide", bullets: ["Ha ahụghị ihe mere o ji dị mkpa", "Ha na-atụ ụjọ na ha agaghị ama ụzọ ọhụrụ nke ọma", "Ha nwere ike ịtụfu oge, ego ma ọ bụ ọkwa", "A jụghị ha, ma ọ bụ mgbanwe ndị gara aga dara"] },
            { title: "Mmegide bụ ozi", bullets: ["Ha nwere ike ịhụ ezi nsogbu ị hụghị", "Jụọ banyere ya, esela okwu"] },
            { title: "Buru ụzọ depụta ya", bullets: ["Ndị ọ metụtara", "Ihe otu ọ bụla nwere ike ịtụfu na irite"] }
          ],
          tryIt: "Họrọ otu ezi mgbanwe ị chọrọ iduzi. Dee ya n'otu ahịrịokwu. Wee depụta otu atọ ọ metụtara, na maka otu ọ bụla, otu ihe ha nwere ike ịtụfu na otu ihe ha nwere ike irite.",
          youCanNow: "ịkọ ihe mere ndị mmadụ nwere ike iji guzogide mgbanwe ma depụta ihe otu ọ bụla nwere ike ịtụfu na irite.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke bụ ihe a ghọtara aghọta mere ndị mmadụ ji eguzogide mgbanwe?", options: ["Ha chọrọ ka otu ahụ daa", "A jụghị ha", "Ha anaghị enwe mmasị n'ihe ọ bụla", "A na-akwụ ha ụgwọ ka ha guzogide"], answer: 1, why: "Ịghara ịjụ ha bụ otu n'ime ihe a na-ahụkarị, nke a ghọtara aghọta, mere ndị mmadụ ji eguzogide." },
            { objective: "O1", q: "Tupu i kwupụta mgbanwe, gịnị ka ị ga-ebu ụzọ mee?", options: ["Zipu email nye mmadụ niile otu mgbe", "Chere ruo mgbe ndị mmadụ ga-eme mkpesa", "Rịọ AI ka o dee ọkwa ahụ", "Depụta ndị ọ metụtara na ihe otu ọ bụla nwere ike ịtụfu na irite"], answer: 3, why: "Ndepụta ahụ na-egosi gị ihe ị ga-akọwa, ndị ị ga-etinye aka na enyemaka ị ga-enye." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịkọwa ihe mere mgbanwe ji dị mkpa",
          minutes: 5,
          goal: "Kọwaa n'ahịrịokwu ole na ole ihe mere mgbanwe ji dị mkpa, n'okwu ndị ọ metụtara na-eche banyere ya.",
          text: [
            "Ndị mmadụ kwesịrị ịghọta ihe mere tupu ha anabata ihe ahụ. Nkọwa siri ike na-aza ajụjụ atọ: Gịnị bụ nsogbu taa? Gịnị ga-aka mma mgbe mgbanwe ahụ gasịrị? Gịnị ga-eme ma ọ bụrụ na anyị emeghị ihe ọ bụla?",
            "Jiri eziokwu na ezi akụkọ. \"Akwụkwọ ndebanye aha anyị tụfuru aha ndị ọrụ afọ ofufo 30 n'ọnwa gara aga, ezinụlọ abụọ enwetaghịkwa nri ha\" na-emetụ ndị mmadụ n'obi karịa \"anyị kwesịrị ime ka ihe dị ọhụrụ\". Kwuo maka ihe otu ọ bụla na-eche banyere ya: oge, ikpe ziri ezi, nchekwa, ndị ahịa, ndị ị na-enyere aka.",
            "Kwuo eziokwu banyere ihe siri ike. Ọ bụrụ na ụzọ ọhụrụ ahụ ga-ewe ọrụ ọzọ na mmalite, kwuo ya ma kwuo otu ị ga-esi nyere aka. Ndị mmadụ na-atụkwasị onye isi na-ekweta ihe ọ ga-efu obi. Ngwa enyemaka AI nwere ike inyere gị aka ime ka okwu gị doo anya, mana eziokwu na akụkọ kwesịrị ịbụ nke gị."
          ],
          steps: ["Kọwaa nsogbu taa, jiri otu eziokwu.", "Kọwaa ihe ga-aka mma.", "Kwuo ihe ga-eme ma ọ bụrụ na ọ dịghị ihe gbanwere.", "Tinye otu ezi akụkọ.", "Kwuo eziokwu banyere ihe ga-esi ike na otu ị ga-esi nyere aka."],
          words: [["Nkọwa ihe mere mgbanwe ji dị mkpa (case for change)", "obere nkọwa nke ihe mere e ji chọọ mgbanwe na ihe ọ ga-eme ka ọ ka mma."]],
          slides: [
            { title: "Ihe mere tupu ihe ahụ", bullets: ["Gịnị bụ nsogbu taa?", "Gịnị ga-aka mma?", "Gịnị ga-eme ma anyị emeghị ihe ọ bụla?"] },
            { title: "Eziokwu na akụkọ", bullets: ["Ezi nọmba na-egosi otu nsogbu ahụ si buo ibu", "Ezi akụkọ na-egosi ihe mere o ji dị mkpa"] },
            { title: "Kwuo maka ihe ha na-eche banyere ya", bullets: ["Oge, ikpe ziri ezi, nchekwa", "Ndị ahịa ma ọ bụ ndị ị na-enyere aka"] },
            { title: "Kwuo eziokwu", bullets: ["Kwuo ihe ga-esi ike", "Kwuo otu ị ga-esi nyere aka"] }
          ],
          tryIt: "Dee nkọwa ihe mere mgbanwe gị ji dị mkpa n'ahịrịokwu anọ: nsogbu taa na otu eziokwu, ihe ga-aka mma, ihe ga-eme ma ọ bụrụ na ọ dịghị ihe gbanwere, na otu ahịrị eziokwu banyere ihe ga-esi ike. Gụpụta ya n'olu dị elu. Ndị ọ metụtara ọ ga-eche banyere ya?",
          youCanNow: "ide obere nkọwa eziokwu nke ihe mere mgbanwe ji dị mkpa, nke na-aza ihe mere, ọ bụghị naanị ihe ahụ.",
          quickCheck: [
            { objective: "O2", q: "Kedu nkọwa ihe mere mgbanwe ji dị mkpa kacha sie ike?", options: ["\"N'ọnwa gara aga, fọm akwụkwọ anyị tụfuru ọda 12, ndị ahịa atọ wee hapụ anyị.\"", "\"Anyị kwesịrị ime ka ihe dị ọhụrụ.\"", "\"Onye ọ bụla ọzọ na-eme ya.\"", "\"Onye isi chọrọ ya.\""], answer: 0, why: "Ezi eziokwu na akụkọ na-emetụ ndị mmadụ n'obi karịa okwu ịkpọ oku (slogan)." },
            { objective: "O2", q: "Ụzọ ọhụrụ ahụ ga-ewe oge ọzọ na mmalite. Gịnị ka ị ga-ekwu?", options: ["Zoo ya ruo mgbe a ga-amalite", "Kwuo na ọ ga-adị mfe", "Kwuo ya n'eziokwu ma kwuo otu ị ga-esi nyere aka", "Tọọ usoro ochie ụta"], answer: 2, why: "Ndị mmadụ na-atụkwasị onye isi na-ekweta ihe ọ ga-efu obi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Itinye ndị mgbanwe metụtara aka",
          minutes: 5,
          goal: "Hazie otu ị ga-esi tinye ndị mgbanwe metụtara aka tupu mkpebi ndị ahụ agwụ.",
          text: [
            "Ndị mmadụ na-akwado ihe ha nyere aka mepụta. Tinye ha aka n'oge, mgbe e ka nwere ohere ịgbanwe atụmatụ ahụ. Ịjụ ha mgbe e kpebiri ihe niile dị ka ihe adịgboroja, ndị mmadụ na-ahụkwa ya.",
            "Ụzọ isi tinye ndị mmadụ aka: jụọ echiche ha n'obere nzukọ ma ọ bụ nnyocha (survey), buru ụzọ nwalee mgbanwe ahụ n'obere otu, kpọọ ndị otu ole na ole a na-akwanyere ùgwù ka ha nyere aka duzie ya, ma kwe ka ndị mmadụ họrọ otu a ga-esi mee ụfọdụ akụkụ ya.",
            "Mee ka o doo anya ihe ghere oghe na ihe na-agaghị agbanwe. \"Anyị ga-akwaga na usoro ọhụrụ ahụ tupu March; ị nwere ike inyere aka kpebie otu anyị ga-esi zụọ ndị mmadụ na usoro otu ndị ga-esi gbanwee.\" Wee gosi ihe i mere n'echiche ha, ọbụlagodi mgbe i nweghị ike iji ya."
          ],
          steps: ["Kpebie ihe na-agaghị agbanwe na ihe ghere oghe.", "Jụọ echiche n'oge, na nzukọ ma ọ bụ obere nnyocha.", "Nwalee ya n'obere otu nnwale (pilot).", "Kpọọ ndị otu a na-akwanyere ùgwù ka ha nyere aka duzie.", "Kọọrọ ha ihe i mere n'echiche ha."],
          words: [["Pilot (obere nnwale)", "obere nnwale nke mgbanwe na mmadụ ole na ole tupu onye ọ bụla agbanwee."], ["Onye na-akwado mgbanwe (change champion)", "onye otu a na-akwanyere ùgwù nke na-enyere aka duzie ma kọwaa mgbanwe ahụ."]],
          slides: [
            { title: "Ndị mmadụ na-akwado ihe ha nyere aka mepụta", bullets: ["Tinye ha aka n'oge", "Ịjụ ha mgbe e kpebiri ya dị ka ihe adịgboroja"] },
            { title: "Ụzọ isi tinye ndị mmadụ aka", bullets: ["Jụọ echiche ha", "Mee obere nnwale (pilot)", "Kpọọ ndị na-akwado mgbanwe", "Kwe ka ha họrọ ụfọdụ n'otu a ga-esi mee ya"] },
            { title: "Mee ka o doo anya ihe ghere oghe", bullets: ["\"Ụbọchị ahụ agaghị agbanwe; ị na-enyere aka kpebie otu anyị ga-esi zụọ\"", "Kọọrọ ha ihe i mere n'echiche ha"] }
          ],
          tryIt: "Maka mgbanwe gị, dee ihe na-agaghị agbanwe na ihe ghere oghe. Wee kpọọ aha ụzọ abụọ ị ga-esi tinye ndị mmadụ aka, na mmadụ abụọ ị nwere ike ịrịọ ka ha bụrụ ndị na-akwado mgbanwe.",
          youCanNow: "itinye ndị mgbanwe metụtara aka n'ụzọ eziokwu ma kọọrọ ha ihe i mere n'echiche ha.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere ịjụ echiche mgbe e kpebiri ihe niile ji ebute nsogbu?", options: ["Ọ na-ewe oge dị ukwuu", "Ọ dị ka ihe adịgboroja, ndị mmadụ na-ahụkwa ya", "Ọ na-efu ego", "Ndị mmadụ enweghị echiche"], answer: 1, why: "Tinye ndị mmadụ aka mgbe e ka nwere ohere ịgbanwe atụmatụ ahụ." },
            { objective: "O3", q: "I nwetara echiche mana i nweghị ike iji ụfọdụ n'ime ha. Gịnị ka ị ga-eme?", options: ["Ekwula ihe ọ bụla banyere ha", "Jiri ha n'agbanyeghị", "Kwụsị ịjụ echiche", "Kọọrọ ha ihe i mere n'echiche ha na ihe mere"], answer: 3, why: "Igosi ihe i mere n'echiche ha na-edebe ntụkwasị obi, ọbụlagodi mgbe i nweghị ike iji ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịghọta mgbanwe na iduga ndị mmadụ",
        questions: [
          { objective: "O1", q: "Gịnị mere ndị mmadụ ji eguzogidekarị ọbụna ezigbo mgbanwe?", options: ["N'ihi na ha dị umengwụ", "N'ihi na mgbanwe pụtara ịtụfu ihe ha maara nke ọma", "N'ihi na mgbanwe niile adịghị mma", "N'ihi na ndị isi na-ehie ụzọ mgbe niile"], answer: 1, why: "Mgbanwe na-eweta mfu na enweghị nkwụsi ike, ọbụlagodi mgbe ọ na-enyere aka." },
          { objective: "O1", q: "Onye ọrụ na-eguzogide atụmatụ gị nke ukwuu. Gịnị bụ azịza mbụ kacha mma?", options: ["Jụọ ya ihe na-echegbu ya, n'ihi na o nwere ike ịhụ ezi nsogbu", "Gwa ya ka ọ kwụsị mkpesa", "Wepụ ya n'otu ahụ", "Leghara ya anya"], answer: 0, why: "Mmegide bụ ozi; jụọ ajụjụ tupu i see okwu." },
          { objective: "O2", q: "Nkọwa siri ike nke ihe mere mgbanwe ji dị mkpa na-aza ajụjụ atọ ndị a?", options: ["Onye, ebee, ego ole", "Onye kpatara ya, mgbe, gịnị mere ọ bụghị", "Gịnị ka ọ ga-efu m, onye kpebiri ya, m nwere ike ịhapụ ya", "Gịnị bụ nsogbu, gịnị ga-aka mma, gịnị ga-eme ma anyị emeghị ihe ọ bụla"], answer: 3, why: "Ndị a na-egosi ihe mere mgbanwe ahụ ji dị mkpa." },
          { objective: "O3", q: "Olee mgbe ị kwesịrị itinye ndị mmadụ aka na mgbanwe?", options: ["Mgbe e kpebiri ihe niile", "Mgbe ọ bụla", "N'oge, mgbe e ka nwere ohere ịgbanwe atụmatụ ahụ", "Naanị ma ọ bụrụ na ha emee mkpesa"], answer: 2, why: "Echiche e nwetara n'oge bụ ezi echiche ma na-ewulite nkwado." },
          { objective: "O3", q: "Gịnị bụ pilot?", options: ["Obere nnwale nke mgbanwe ahụ na mmadụ ole na ole na mbụ", "Onye isi onye isi", "Ụbọchị ikpeazụ", "Ụdị vidiyo ọzụzụ"], answer: 0, why: "Pilot na-enye gị ohere ịmụta ihe ma dozie nsogbu tupu onye ọ bụla agbanwee." }
        ]
      }
    },
    {
      name: "Isi 2: Ịhazi, ịkọsa na ime ka ọ guzosie ike",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide atụmatụ mgbanwe dị mfe",
          minutes: 6,
          goal: "Dee atụmatụ mgbanwe nke otu peeji na-aza gịnị, n'ihi gịnị, onye, mgbe, na otu ị ga-esi mara.",
          text: [
            "Atụmatụ mgbanwe adịghị mkpa ịdị ogologo. Otu peeji na-aza ajụjụ ise zuru ezu maka ọtụtụ mgbanwe: Gịnị na-agbanwe? N'ihi gịnị? Ndị ole ka ọ metụtara, onye na-emekwa gịnị? Olee mgbe nzọụkwụ ọ bụla ga-eme? Olee otu ị ga-esi mara na ọ na-arụ ọrụ?",
            "\"Otu ị ga-esi mara\" bụ akụkụ ndị mmadụ na-ahapụ. Họrọ ihe ịrịba ama abụọ ma ọ bụ atọ ị nwere ike ilele n'ezie, dị ka \"95% nke ọda e debanyere na usoro ọhụrụ tupu izu 4\" ma ọ bụ \"ọ dịghị nnyefe a tụfuru otu ọnwa\". Họrọ ụbọchị ị ga-ele ha anya.",
            "Kpọọ aha onye nwe nzọụkwụ ọ bụla, hazie ọzụzụ na enyemaka tupu mgbanwe ahụ, ma kwuo ihe ị ga-eme ma ọ bụrụ na ihe ọjọọ emee, dị ka idebe ụzọ ochie ka ọ dị ruo obere oge."
          ],
          steps: ["Gịnị: mgbanwe ahụ n'otu ahịrịokwu.", "N'ihi gịnị: nkọwa gị n'ahịrịokwu abụọ ma ọ bụ atọ.", "Onye: otu ndị ọ metụtara, na onye nwe nzọụkwụ ọ bụla.", "Mgbe: ụbọchị ndị dị mkpa, gụnyere ọzụzụ tupu mgbanwe ahụ.", "Otu ị ga-esi mara: ihe ntụle abụọ ma ọ bụ atọ na ụbọchị ilele ha.", "Atụmatụ ndabere ma ọ bụrụ na ihe ọjọọ emee."],
          words: [["Atụmatụ mgbanwe", "obere atụmatụ e dere ede na-ekwu ihe na-agbanwe, ihe mere, onye, mgbe na otu a ga-esi tụọ ịga nke ọma."], ["Ihe ntụle (measure)", "ihe ị nwere ike ịgụ ọnụ ma ọ bụ ilele iji mara ma mgbanwe ahụ na-arụ ọrụ."], ["Onye nwe (owner)", "otu onye na-ahụ na nzọụkwụ ahụ mere."]],
          slides: [
            { title: "Ajụjụ ise, otu peeji", bullets: ["Gịnị na-agbanwe?", "N'ihi gịnị?", "Ndị ole ka ọ metụtara, onye na-emekwa gịnị?", "Mgbe? Olee otu ị ga-esi mara na ọ na-arụ ọrụ?"] },
            { title: "Otu ị ga-esi mara", bullets: ["Ihe ịrịba ama abụọ ma ọ bụ atọ ị nwere ike ilele", "Ọmụmaatụ: \"95% nke ọda dị na usoro ọhụrụ tupu izu 4\"", "Họrọ ụbọchị ị ga-ele ya anya"] },
            { title: "Echefula", bullets: ["Onye nwe nzọụkwụ ọ bụla", "Ọzụzụ tupu mgbanwe ahụ", "Ụzọ ndabere ma ọ bụrụ na ihe ọjọọ emee"] }
          ],
          tryIt: "Dee ihe mbụ (draft) nke atụmatụ gị nke otu peeji nwere akụkụ ise ahụ niile. Maka \"otu ị ga-esi mara\", dee ihe ntụle abụọ na ụbọchị ị ga-elele ha.",
          youCanNow: "ide obere atụmatụ mgbanwe nwere ndị nwe ya doro anya, ụbọchị na ihe ntụle ịga nke ọma.",
          quickCheck: [
            { objective: "O4", q: "Kedu akụkụ nke atụmatụ mgbanwe ndị mmadụ na-ahapụkarị?", options: ["Ihe na-agbanwe", "Ndị ọ metụtara", "Otu ị ga-esi mara na ọ na-arụ ọrụ", "Mgbe ọ ga-amalite"], answer: 2, why: "Họrọ ihe ịrịba ama abụọ ma ọ bụ atọ ị nwere ike ilele na ụbọchị ị ga-ele ha anya." },
            { objective: "O4", q: "Ị na-echegbu onwe gị na usoro ọhụrụ ahụ nwere ike ịda n'izu mbụ. Gịnị ka ị ga-etinye n'atụmatụ ahụ?", options: ["Ihe ị ga-eme ma ọ bụrụ na ihe ọjọọ emee, dị ka idebe ụzọ ochie ruo obere oge", "Ọ dịghị ihe; hazie naanị maka ịga nke ọma", "Nkọwa ka ogologo nke ihe mere mgbanwe ji dị mkpa", "Ụbọchị mmalite nke abụọ n'afọ ọzọ"], answer: 0, why: "Ezigbo atụmatụ na-ekwu ihe ị ga-eme ma ọ bụrụ na ihe ọjọọ emee." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịkọsa mgbanwe na inweta mmeri mbụ",
          minutes: 5,
          goal: "Dee ozi doro anya maka otu dị iche iche ma hazie mmeri mbụ a ga-ahụ anya.",
          text: [
            "Kwuo ya karịa otu ugboro, n'ụzọ karịrị otu. Ndị mmadụ na-arụsi ọrụ ike, ha na-anụ ozi ọtụtụ ugboro tupu ọ banye ha n'isi. Jiri nzukọ, obere ozi e dere ede, na mkparịta ụka gị na onye ọ bụla n'otu n'otu. Buru ụzọ gwa ndị ọ metụtara karịsịa, ihu na ihu ma ọ bụrụ na ị nwere ike, tupu ha anụ ya n'ọnụ onye ọzọ.",
            "Hazie ozi ahụ maka otu ọ bụla: ihe na-agbanwe maka ha, ihe mere, mgbe, enyemaka ha ga-enweta, na onye ha ga-ajụ. Hapụ ohere maka ajụjụ, ma ọ bụrụ na ị maghị azịza, kwuo ya ma kwuo mgbe ị ga-achọpụta.",
            "Hazie mmeri mbụ: ihe ịga nke ọma mbụ a ga-ahụ anya n'izu ndị mbụ, dị ka ahịrị dị mkpụmkpụ ma ọ bụ akụkọ (report) na-adị ngwa. Kesaa ya ma kelee ndị mere ka ọ mee. Mmeri mbụ na-egosi na mgbanwe ahụ na-arụ ọrụ ma na-adọta ndị nwere obi abụọ."
          ],
          steps: ["Buru ụzọ gwa ndị ọ metụtara karịsịa, ihu na ihu ma o kwere omume.", "Maka otu ọ bụla: ihe na-agbanwe maka ha, ihe mere, mgbe, enyemaka, onye ha ga-ajụ.", "Kwughachi ya site na nzukọ, ozi e dere ede na mkparịta ụka otu na otu.", "Zaa ajụjụ n'eziokwu; kwuo mgbe ị ga-achọpụta.", "Hazie ma mee ememe otu mmeri mbụ n'ọnwa mbụ."],
          words: [["Mmeri mbụ (quick win)", "ihe ịga nke ọma mbụ a na-ahụ anya nke na-egosi na mgbanwe na-arụ ọrụ."], ["Ndị a na-agwa (audience)", "otu ndị mmadụ e dere ozi maka ha."]],
          slides: [
            { title: "Kwuo ya karịa otu ugboro", bullets: ["Nzukọ, ozi e dere ede na mkparịta ụka otu na otu", "Ndị ọ metụtara karịsịa na mbụ, ihu na ihu"] },
            { title: "Ozi ọ bụla na-ekwu", bullets: ["Ihe na-agbanwe maka ha na ihe mere", "Mgbe, na enyemaka ha ga-enweta", "Onye ha ga-ajụ"] },
            { title: "Azịza eziokwu", bullets: ["Ị maghị? Kwuo ya", "Kwuo mgbe ị ga-achọpụta"] },
            { title: "Mmeri mbụ", bullets: ["Ihe ịga nke ọma mbụ a na-ahụ anya", "Kesaa ya ma kelee ndị mere ya"] }
          ],
          tryIt: "Dee obere ozi atọ banyere mgbanwe gị maka otu atọ dị iche iche (dịka ọmụmaatụ ndị ọrụ n'ihu, ndị njikwa na ndị ahịa). Wee dee otu mmeri mbụ ị nwere ike igosi n'ọnwa mbụ.",
          youCanNow: "ịkọsa mgbanwe nke ọma nye otu dị iche iche ma hazie mmeri mbụ na-ewulite nkwado.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ mmeri mbụ (quick win)?", options: ["Imecha mgbanwe ahụ n'otu ụbọchị", "Ihe ịga nke ọma mbụ a na-ahụ anya nke na-egosi na mgbanwe ahụ na-arụ ọrụ", "Ịhapụ ọzụzụ", "Onyinye nye onye mbụ gbanwere"], answer: 1, why: "Mmeri mbụ na-adọta ndị nwere obi abụọ." },
            { objective: "O5", q: "Olee otu ị ga-esi gwa ndị mgbanwe ahụ metụtara karịsịa?", options: ["Hapụ ka ha nụ ya n'ọnụ onye ọzọ", "Tinye ọkwa na mgbidi", "Zipu otu email nye ndị ọrụ niile", "Buru ụzọ gwa ha, ihu na ihu ma ọ bụrụ na ị nwere ike"], answer: 3, why: "Ndị ọ metụtara karịsịa kwesịrị ibu ụzọ nụ ya, tupu asịrị eru ha ntị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ime ka mgbanwe guzosie ike",
          minutes: 5,
          goal: "Hazie otu ị ga-esi mee ka mgbanwe gaa n'ihu mgbe a malitere ya, ka ndị mmadụ ghara ịlaghachi n'ụzọ ochie.",
          text: [
            "Ụbọchị mmalite abụghị njedebe. Ọtụtụ mgbanwe na-ada mbà mgbe izu ole na ole gachara ka ndị mmadụ na-alaghachi n'omume ochie, karịsịa mgbe ha nwere ọrụ dị ukwuu ma ọ bụ nchekasị.",
            "Iji mee ka ọ guzosie ike: lelee ihe ntụle gị n'ụbọchị i kara aka, mee ka enyemaka dị mfe ịchọta, wepụ ụzọ ochie mgbe nke ọhụrụ na-arụ ọrụ, ma tinye mgbanwe ahụ n'omume kwa ụbọchị dị ka ndepụta ọrụ (checklists), ọzụzụ ndị ọrụ ọhụrụ, na ihe a na-atụ anya n'ọrụ.",
            "Nọgide na-ege ntị. Jụọ ndị mmadụ ihe ka siri ike ma dozie ya. Kelee ndị na-eji ụzọ ọhụrụ ahụ nke ọma, ma kesaa nsonaazụ. Mgbe mgbanwe ahụ ghọrọ \"otu anyị si eme ihe ebe a\", leghachi anya n'ihe ị mụtara maka mgbanwe ọzọ."
          ],
          steps: ["Lelee ihe ntụle gị n'ụbọchị a haziri.", "Mee ka enyemaka dị mfe ịchọta.", "Kwụsị ụzọ ochie mgbe nke ọhụrụ na-arụ ọrụ.", "Tinye mgbanwe ahụ na ndepụta ọrụ, ọzụzụ na ihe a na-atụ anya n'ọrụ.", "Jụọ ihe ka siri ike, ma dozie ya.", "Kesaa nsonaazụ ma kelee ndị mmadụ."],
          words: [["Ibugide n'ihu (sustain)", "ime ka ihe gaa n'ihu ruo ogologo oge."], ["Omume kwa ụbọchị (routine)", "ụzọ a na-esi arụ ọrụ mgbe niile kwa ụbọchị ma ọ bụ kwa izu."]],
          slides: [
            { title: "Mmalite abụghị njedebe", bullets: ["Mgbanwe na-ada mbà mgbe ndị mmadụ nwere ọrụ dị ukwuu", "Omume ochie na-adọghachi ndị mmadụ azụ"] },
            { title: "Tinye ya n'omume kwa ụbọchị", bullets: ["Ndepụta ọrụ na ọzụzụ ndị ọrụ ọhụrụ", "Ihe a na-atụ anya n'ọrụ", "Kwụsị ụzọ ochie mgbe nke ọhụrụ na-arụ ọrụ"] },
            { title: "Nọgide na-ege ntị", bullets: ["Lelee ihe ntụle gị n'ụbọchị ndị ahụ", "Jụọ ihe ka siri ike ma dozie ya", "Kesaa nsonaazụ ma kelee ndị mmadụ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ mgbanwe gị nke otu peeji. Tinye ozi atọ maka otu atọ, otu mmeri mbụ n'ọnwa mbụ, na ụzọ abụọ ị ga-esi mee ka mgbanwe ahụ gaa n'ihu mgbe a malitere ya.",
          youCanNow: "ime ka mgbanwe gaa n'ihu mgbe a malitere ya site n'ilele nsonaazụ, itinye ya n'omume kwa ụbọchị na ige ndị na-arụ ọrụ ahụ ntị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị na-emekarị mgbanwe izu ole na ole mgbe a malitere ya?", options: ["Ọ na-ada mbà ka ndị mmadụ na-alaghachi n'omume ochie", "Ọ na-eguzosi ike n'onwe ya mgbe niile", "Onye ọ bụla na-echefu ụzọ ochie", "Ọ na-ebuwanye ibu n'onwe ya"], answer: 0, why: "Ụbọchị mmalite abụghị njedebe; omume na-adọghachi ndị mmadụ azụ." },
            { objective: "O6", q: "Ụzọ ọhụrụ ahụ na-arụ ọrụ nke ọma. Gịnị ka ị ga-eme ụzọ ochie?", options: ["Debe ha abụọ ruo mgbe ebighị ebi", "Rịọ onye ọ bụla ka ọ họrọ", "Wepụ ụzọ ochie ma tinye nke ọhụrụ na ndepụta ọrụ na ọzụzụ", "Zoo ụzọ ọhụrụ ahụ"], answer: 2, why: "Iwepụ ụzọ ochie na itinye nke ọhụrụ n'omume na-enyere mgbanwe aka iguzosi ike." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịhazi, ịkọsa na ime ka ọ guzosie ike",
        questions: [
          { objective: "O4", q: "Kedu ajụjụ bụ akụkụ nke atụmatụ mgbanwe dị mfe?", options: ["Onye ka anyị ga-ata ụta?", "Olee otu anyị ga-esi zere ịgwa ndị mmadụ?", "Olee otu anyị ga-esi mara na ọ na-arụ ọrụ?", "Ruo ole oge ka anyị nwere ike ichere?"], answer: 2, why: "Ihe ntụle na-egosi ma mgbanwe ahụ na-arụ ọrụ." },
          { objective: "O4", q: "Kedu nke bụ ezigbo ihe ntụle ịga nke ọma?", options: ["\"Ndị mmadụ na-eche na ha dị ọhụrụ\"", "\"Ihe na-aga nke ọma karị\"", "\"Anyị gbalịrị nke ukwuu\"", "\"Ọ dịghị nnyefe a tụfuru otu ọnwa\""], answer: 3, why: "Ọ bụ ihe ị nwere ike ilele n'ezie." },
          { objective: "O5", q: "Onye kwesịrị ibu ụzọ nụ banyere mgbanwe?", options: ["Ndị ọ metụtara karịsịa, ihu na ihu ma o kwere omume", "Akwụkwọ akụkọ obodo", "Naanị ndị isi, ruo mgbe ebighị ebi", "Ọ dịghị onye ruo mgbe ọ malitere"], answer: 0, why: "O kwesịrị ka ha nụ ya ozugbo, ọ bụghị site n'asịrị." },
          { objective: "O5", q: "Mmadụ jụrụ ajụjụ ị na-enweghị ike ịza ugbu a. Gịnị ka ị ga-eme?", options: ["Chepụta azịza", "Kwuo na ị maghị ma kwuo mgbe ị ga-achọpụta", "Gbanwee isiokwu", "Kwụsị nzukọ ahụ"], answer: 1, why: "Eziokwu na-ewulite ntụkwasị obi n'oge mgbanwe." },
          { objective: "O6", q: "Ọnwa atọ mgbe a malitere ya, ndị mmadụ na-alaghachi n'ụzọ ochie. Gịnị na-enyere aka karịsịa?", options: ["Kwụsị ikwu maka ya", "Weghachi usoro ochie ruo mgbe ebighị ebi", "Tọọ otu ahụ ụta", "Tinye ụzọ ọhụrụ ahụ na ndepụta ọrụ na ọzụzụ ma jụọ ihe ka siri ike"], answer: 3, why: "Omume kwa ụbọchị na ige ntị na-eme ka mgbanwe guzosie ike." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Iduzi Mgbanwe",
    questions: [
      { objective: "O1", q: "Kedu nke bụ ihe a na-ahụkarị mere ndị mmadụ ji eguzogide mgbanwe?", options: ["Ha na-atụ ụjọ na ha agaghị ama ụzọ ọhụrụ nke ọma", "Ha na-enwe mmasị n'esemokwu", "Ha chọrọ nzukọ ndị ọzọ", "Ha anaghị enwe mmasị n'ọrụ ha mgbe ọ bụla"], answer: 0, why: "Ụjọ na mmadụ agaghị enwe ike ime ụzọ ọhụrụ nke ọma bụ ihe a na-ahụkarị." },
      { objective: "O1", q: "Iwere mmegide dị ka ozi pụtara:", options: ["Ileghara ya anya", "Idekọ ndị mmadụ na nzuzo", "Ịjụ ihe na-echegbu ndị mmadụ n'ihi na ha nwere ike ịhụ ezi nsogbu", "Ịta ya ahụhụ"], answer: 2, why: "Mmegide nwere ike igosi ezi ihe egwu." },
      { objective: "O1", q: "Tupu i kwupụta mgbanwe, ọ na-enyere aka idepụta:", options: ["Onye a ga-ata ụta ma ọ daa", "Ndị ọ metụtara na ihe otu ọ bụla nwere ike ịtụfu na irite", "Naanị ihe ọ ga-efu", "Ọ dịghị ihe"], answer: 1, why: "Ndepụta ahụ na-egosi ihe ị ga-akọwa na enyemaka ị ga-enye." },
      { objective: "O2", q: "Kedu nkọwa ihe mere mgbanwe ji dị mkpa kacha sie ike?", options: ["\"Anyị kwesịrị ime ka ihe dị ọhụrụ.\"", "\"N'ihi na m kwuru ya.\"", "\"Onye ọ bụla ọzọ na-eme ya.\"", "\"Akwụkwọ ndebanye aha tụfuru aha ndị ọrụ afọ ofufo 30 n'ọnwa gara aga, ezinụlọ abụọ enwetaghịkwa nri.\""], answer: 3, why: "Ezi eziokwu na ezi akụkọ na-egosi ihe mere o ji dị mkpa." },
      { objective: "O2", q: "Gịnị mere ị ga-eji kwuo eziokwu banyere ihe ga-esi ike?", options: ["Iji tụọ ndị mmadụ egwu", "Ndị mmadụ na-atụkwasị onye isi na-ekweta ihe ọ ga-efu obi", "Iji gbuo oge mgbanwe ahụ", "Ọ dịghị mma mgbe ọ bụla"], answer: 1, why: "Eziokwu na-ewulite ntụkwasị obi ma na-enye gị ohere ịhazi enyemaka." },
      { objective: "O2", q: "Nkọwa ihe mere mgbanwe ji dị mkpa kwesịrị ịkọwa:", options: ["Ihe ga-eme ma ọ bụrụ na anyị emeghị ihe ọ bụla", "Naanị echiche onye isi", "Onye ga-atụfu ọrụ ya", "Ọ dịghị ihe gbasara nsogbu ahụ"], answer: 0, why: "Ihe ịghara ime ihe ga-efu na-egosi ihe mere e ji chọọ mgbanwe." },
      { objective: "O3", q: "\"Ndị mmadụ na-akwado ihe ha nyere aka mepụta\" pụtara na ị kwesịrị:", options: ["Idebe atụmatụ na nzuzo", "Ibu ụzọ kpebie ihe niile, wee jụọ", "Itinye ha aka n'oge mgbe atụmatụ ahụ ka nwere ike ịgbanwe", "Itinye naanị ndị njikwa aka"], answer: 2, why: "Itinye ndị mmadụ aka n'oge na-ewulite ezi nkwado." },
      { objective: "O3", q: "Onye na-akwado mgbanwe (change champion) bụ:", options: ["Onye kacha eguzogide", "Onye otu a na-akwanyere ùgwù nke na-enyere aka duzie ma kọwaa mgbanwe ahụ", "Iko mmeri (trophy)", "Onye ikpe si n'èzí"], answer: 1, why: "Ndị na-akwado mgbanwe na-enyere ndị ọzọ aka ịtụkwasị mgbanwe ahụ obi." },
      { objective: "O3", q: "I jụrụ echiche mana i nweghị ike iji ụfọdụ. Gịnị ka ị kwesịrị ime?", options: ["Ekwula ihe ọ bụla", "Mee ka à ga-asị na i jiri ha", "Kwụsị ịjụ echiche", "Kọọrọ ha ihe i mere n'echiche ha, na ihe mere"], answer: 3, why: "Ịkọọrọ ha ihe i mere na-edebe ntụkwasị obi ọbụlagodi mgbe a na-ejighị echiche ndị ahụ." },
      { objective: "O4", q: "Akụkụ ise nke atụmatụ mgbanwe dị mfe bụ:", options: ["Gịnị, n'ihi gịnị, onye, mgbe, otu ị ga-esi mara", "Onye, ụta, ego, igbu oge, ịkagbu", "Atụmatụ, olileanya, chere, hụ, kwụsị", "Mmefu ego, akara (logo), okwu ịkpọ oku, oriri, foto"], answer: 0, why: "Ajụjụ ise ndị a na-ekpuchi ọtụtụ mgbanwe." },
      { objective: "O4", q: "Nzọụkwụ ọ bụla n'atụmatụ mgbanwe kwesịrị inwe:", options: ["Ndị nwe ya iri", "Ọ dịghị onye nwe ya", "Otu onye nwe ya na-ahụ maka ya", "Onye nwe a ga-ahọrọ ma emechaa"], answer: 2, why: "Otu onye nwe ya doro anya na-ahụ na e mere ya." },
      { objective: "O4", q: "Olee mgbe ọzụzụ kwesịrị ime?", options: ["Ọnwa ole na ole mgbe mgbanwe ahụ gachara", "Tupu mgbanwe ahụ", "Ọ dịghị mgbe", "Naanị maka ndị njikwa"], answer: 1, why: "Ndị mmadụ chọrọ nka tupu a rịọ ha ka ha jiri ụzọ ọhụrụ ahụ." },
      { objective: "O5", q: "Gịnị mere ị ga-eji kwughachi ozi gị n'ụzọ dị iche iche?", options: ["Iji kpasuo ndị mmadụ iwe", "N'ihi na ndị mmadụ na-anụ ozi ọtụtụ ugboro tupu ọ banye ha n'isi", "Iji mejupụta oge", "N'ihi na ozi mbụ ezighi ezi"], answer: 1, why: "Ndị na-arụsi ọrụ ike kwesịrị ịnụ ya karịa otu ugboro." },
      { objective: "O5", q: "Ozi maka otu ọ bụla kwesịrị ịgụnye:", options: ["Naanị ụbọchị", "Naanị ihe mere", "Akụkọ ihe mere eme dị ogologo", "Ihe na-agbanwe maka ha, ihe mere, mgbe, enyemaka ha ga-enweta na onye ha ga-ajụ"], answer: 3, why: "Ndị a na-aza ajụjụ ndị mmadụ nwere n'ezie." },
      { objective: "O5", q: "Mmeri mbụ (quick win) bụ:", options: ["Ihe ịga nke ọma mbụ a na-ahụ anya nke na-egosi na mgbanwe ahụ na-arụ ọrụ", "Imecha mgbanwe ahụ n'otu ụbọchị", "Imeri n'arụmụka", "Ịhapụ atụmatụ ahụ"], answer: 0, why: "Mmeri mbụ na-ewulite nkwenye na nkwado." },
      { objective: "O5", q: "Mgbe mmeri mbụ gasịrị, ị kwesịrị:", options: ["Idebe ya na nzuzo", "Iwere otuto niile n'onwe gị", "Ikesa ya ma kelee ndị mere ka ọ mee", "Ịkwụsị mgbanwe ahụ"], answer: 2, why: "Ikesa na ekele na-agbasa nkwado." },
      { objective: "O6", q: "Gịnị mere ụbọchị mmalite ji \"abụghị njedebe\"?", options: ["N'ihi na mgbanwe na-adakarị mbà ka ndị mmadụ na-alaghachi n'omume ochie", "N'ihi na a na-enwe oriri mgbe niile ma emechaa", "N'ihi na atụmatụ anaghị amalite mgbe ọ bụla", "N'ihi na ụbọchị mmalite abụghị iwu"], answer: 0, why: "Ibugide mgbanwe n'ihu na-achọ ọrụ na-aga n'ihu." },
      { objective: "O6", q: "Kedu nke na-enyere mgbanwe aka iguzosi ike?", options: ["Idebekwa ụzọ ochie ruo mgbe ebighị ebi", "Itinye ya na ndepụta ọrụ na ọzụzụ ndị ọrụ ọhụrụ", "Ịghara ilele nsonaazụ mgbe ọ bụla", "Ịgbanwe ya ọzọ n'izu na-abịa"], answer: 1, why: "Omume kwa ụbọchị na-eme ka ụzọ ọhụrụ ahụ bụrụ ihe nkịtị." },
      { objective: "O6", q: "I kara aka ilele otu ihe ntụle n'izu 4. N'izu 4 ị kwesịrị:", options: ["Ịhapụ ya", "Ịgbanwe ihe ntụle ahụ", "Ichere ruo afọ ọzọ", "Ilele ya ma mee ihe gbasara ihe ị chọpụtara"], answer: 3, why: "Ihe ntụle na-enyere aka naanị ma ọ bụrụ na i lere ha anya n'oge." },
      { objective: "O6", q: "Mgbe mgbanwe ahụ ghọrọ \"otu anyị si eme ihe ebe a\", ezigbo nzọụkwụ ikpeazụ bụ:", options: ["Ichefu ya", "Ileghachi anya n'ihe ị mụtara maka mgbanwe ọzọ", "Ịkagbu ya", "Ịta ndị guzogidere ụta"], answer: 1, why: "Ihe a mụtara na-eme ka mgbanwe ọzọ dị mfe." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ihe mere o ji dị mkpa", objective: "O2", notYet: "Ihe mere ahụ bụ okwu ịkpọ oku (slogan), dị ka \"anyị kwesịrị ime ka ihe dị ọhụrụ\".", meets: "Ahịrịokwu abụọ ma ọ bụ atọ banyere nsogbu ahụ, ihe ga-aka mma na ihe ga-eme ma ọ bụrụ na ọ dịghị ihe gbanwere.", exceeds: "Na-eji ezi eziokwu ma ọ bụ ezi akụkọ ndị ọ metụtara ga-eche banyere ya." },
      { name: "Ndị ọ metụtara na otu e si etinye ha aka", objective: "O3", notYet: "Ọ dịghị onye e tinyere aka tupu mkpebi ahụ agwụ.", meets: "Na-akpọ aha ndị ọ metụtara na otu a ga-esi tinye ha aka n'oge.", exceeds: "Na-ekwu ihe ghere oghe na ihe na-agaghị agbanwe, na otu a ga-esi kọọrọ ha ihe e mere n'echiche ha." },
      { name: "Atụmatụ na ihe ntụle", objective: "O4", notYet: "Gịnị, n'ihi gịnị, onye, mgbe ma ọ bụ otu ị ga-esi mara adịghị n'ime ya.", meets: "Na-aza ajụjụ ise ahụ niile, na mgbe nzọụkwụ ọ bụla ga-eme na otu ị ga-esi mara na ọ na-arụ ọrụ.", exceeds: "Nzọụkwụ ọ bụla nwere onye nwe ya, ihe ntụle ọ bụla nwekwara ụbọchị ilele ya." },
      { name: "Ozi na mmeri mbụ", objective: "O5", notYet: "Otu ozi maka onye ọ bụla, ma ọ bụ enweghị mmeri mbụ.", meets: "Ozi atọ maka otu atọ na otu mmeri mbụ n'ọnwa mbụ.", exceeds: "Ozi ọ bụla na-ekwu enyemaka ndị mmadụ ga-enweta na onye ha ga-ajụ." },
      { name: "Ime ka ọ gaa n'ihu", objective: "O6", notYet: "Atụmatụ ahụ na-akwụsị na mmalite.", meets: "Ụzọ abụọ isi mee ka mgbanwe ahụ gaa n'ihu mgbe a malitere ya.", exceeds: "Gụnyere itinye ụzọ ọhụrụ ahụ na ndepụta ọrụ, ọzụzụ ma ọ bụ ihe a na-atụ anya n'ọrụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe malitere mgbanwe dị n'atụmatụ ha n'ime ụbọchị 90 (nnyocha nsochi)",
      "Mgbanwe ndị a ka na-eji ọnwa atọ mgbe a malitere ha",
      "Ndị na-amụ ihe were ihe ọmụmụ iduzi ọzọ na Koach Learn"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa iji lee nkuzi ndị ahụ",
      "Akwụkwọ (paper) ma ọ bụ dọkụmenti maka atụmatụ mgbanwe nke otu peeji",
      "Otu ezi mgbanwe onye na-amụ ihe chọrọ iduzi",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Rịọ onye ọ bụla na-amụ ihe ka o weta otu ezi mgbanwe tupu nnọkọ ahụ amalite.",
      "Mee ka ndị abụọ abụọ na-eme ka onye na-eguzogide, ka ndị na-amụ ihe mụọ ịjụ ihe na-echegbu onye ahụ.",
      "Mee ka ndị na-amụ ihe gbanweta nkọwa ihe mere mgbanwe ha ji dị mkpa ma kwuo ma ọ ga-eme ka ha kwenye.",
      "Chetara ndị na-amụ ihe ka eziokwu na akụkọ ha bụrụ nke ha mgbe ha na-eji AI ime ka okwu doo anya.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
