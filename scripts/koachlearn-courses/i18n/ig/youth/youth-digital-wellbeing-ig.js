"use strict";

// Koach Learn course (Igbo translation of youth/youth-digital-wellbeing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-digital-wellbeing-ig",
  lang: "ig",
  translationOf: "youth-digital-wellbeing",
  category: "Youth",
  name: "Ọdịmma Dijitalụ na Oge Ihuenyo Dị Mma",
  skills: "Ilele ezi oge ihuenyo gị, Ịhụ ihe ndị e mere ka ị nọgide na-akpụgharị, Ichebe ụra gị pụọ n'ihuenyo, Ijikwa ozi ọkwa na itinye oke n'app, Ime ka feed gị ka mma, Ime na ịnwale atụmatụ ihuenyo",
  outcome: "ilele otu i si eji ekwentị gị n'ezie, ịhụ ihe ndị na-adọghachi gị azụ, ịgbanwe ntọala na omume gị iji chebe ụra gị, uche gị na obi gị, na ịgbaso atụmatụ ihuenyo nke gị otu izu.",
  about: [
    "Ekwentị, egwuregwu na soshal midia nwere ike ịdị mma: ndị enyi, egwu, ọmụmụ ihe, imepụta ihe, inweta enyemaka. Ma e mere ha ka ha jide gị ogologo oge o kwere omume. Ọdịmma dijitalụ pụtara iji ihuenyo n'ụzọ na-enyere gị aka, ọ bụghị n'ụzọ na-ewere ụra gị, ọrụ ụlọ akwụkwọ gị, egwuregwu gị, ọrụ gị ma ọ bụ obi gị.",
    "Ihe ọmụmụ a bụ maka ndị ntorobịa chọrọ ijikwa ihe ka mma, ọ bụghị maka ịbara ha mba. Ọ dịghị onye ga-agwa gị ka i tụfuo ekwentị gị. Ị ga-ele nọmba nke gị, mụta aghụghọ app na-eji, gbanwee ntọala ole na ole, ma mee atụmatụ dabara ndụ gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\" n'ekwentị ma ọ bụ ngwaọrụ nke gị. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ ihuenyo nke gị ma nwalee ya ụbọchị asaa: ebumnuche oge ihuenyo gị, app abụọ kacha elu ị ga-etinye oke (were oke ahụ tọọ n'ekwentị gị), mgbanwe ozi ọkwa gị, oge ị ga-emechi ihuenyo tupu ụra na ebe ekwentị ga-anọ n'abalị, ihe abụọ ị ga-eme kama ịkpụgharị, na otu mgbanwe na feed gị. Na njedebe izu ahụ, tụnyere oge ihuenyo gị na ụra gị na nke izu gara aga.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa, ọkachasị ndị nọ n'afọ iri na ụma (teens), ndị na-eji ekwentị, egwuregwu na soshal midia kwa ụbọchị ma chọọ ijikwa oge ihuenyo ha ka mma n'enweghị onye na-abara ha mba.",
    startingPoint: "Ha na-eji ekwentị ha n'obi ike maka app, egwuregwu na ozi. Ọtụtụ na-eche na oge ihuenyo ha dị ala karịa ka ọ dị, ọtụtụ ozi ọkwa ha na-agba, ha na-akpụgharị n'abalị, ha etinyebeghịkwa oke n'app ma ọ bụ gbanwee feed ha n'ebumnuche.",
    gap: "E mere app ka ha jide ndị mmadụ, nke nwere ike iwere ụra, ọrụ ụlọ akwụkwọ, egwuregwu, ọrụ na obi. Ndị ntorobịa kwesịrị ịhụ ezi nọmba ha, ịhụ ihe ndị na-adọta ha, ịgbanwe ntọala na omume ha, na ịnwale atụmatụ, ka ihuenyo nyere ha aka kama iwere ndụ ha.",
    constraints: [
      "A chọrọ ekwentị ma ọ bụ ngwaọrụ nke onwe gị maka ọrụ omume; menu dị iche n'ekwentị dị iche iche",
      "Abarala mba: ndị na-amụ ihe na-ahọrọ ebumnuche nke ha",
      "Ahụike uche: ndị na-anọkarị n'obi mwute ka a na-eduga n'ebe onye okenye ha tụkwasịrị obi, dọkịta ma ọ bụ ahịrị enyemaka ọnọdụ mberede, ọ bụghị ka a gwọọ ha n'ihe ọmụmụ a",
      "Nzuzo: ndị na-amụ ihe na-edebe nọmba na ndetu ha n'onwe ha belụsọ ma ha họrọ ikesa ya",
      "Nkuzi dị mkpụmkpụ na okwu dị mfe"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ntọala ekwentị gị", action: "ịchọta oge ihuenyo gị kwa ụbọchị, app ndị kacha elu na pickups ma ọ bụ ozi ọkwa, ma tụnyere ha na ebumnuche gị", standard: "na-ede nọmba atọ ahụ niile" },
    { id: "O2", condition: "N'app ị na-ejikarị", action: "ịmata ihe ndị e mere na-adọghachi gị azụ, ma gbanyụọ otu ma ọ bụ chọta ụzọ gbara ya gburugburu", standard: "na-akpọ opekata mpe atọ n'ime ha aha" },
    { id: "O3", condition: "Maka abalị gị", action: "ịtọ oge mmechi ihuenyo, ebe ekwentị ga-anọ nke dị anya n'akwa gị, na ọnọdụ ụra", standard: "ebe ihuenyo na-apụ ihe dị ka nkeji 30 tupu oge ụra gị" },
    { id: "O4", condition: "Site n'iji ntọala ekwentị gị", action: "ịgbanyụ ozi ọkwa na-adịghị mkpa ma tinye oke kwa ụbọchị n'app gị kacha elu", standard: "na-agbanyụ ozi ọkwa nke opekata mpe app atọ" },
    { id: "O5", condition: "N'app soshal gị kacha", action: "ịgbanwe feed gị site n'ime ka akaụntụ ndị na-eme ka obi jọọ gị njọ ghara ịpụta ma ọ bụ ịkwụsị iso ha, na iso ndị na-enyere gị aka ito", standard: "na-agbanwe opekata mpe akaụntụ abụọ n'akụkụ ọ bụla" },
    { id: "O6", condition: "Site n'iji ihe i doro n'ihe ọmụmụ a", action: "ide atụmatụ ihuenyo nke gị, gbasoo ya ụbọchị asaa, ma tụnyere ihe si na ya pụta na nọmba mbụ gị", standard: "na akụkụ niile nke atụmatụ ahụ na ntụnyere tupu na mgbe e mechara" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmara omume ihuenyo gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ilele ezi oge ihuenyo gị",
          minutes: 4,
          goal: "Chọta oge ihuenyo gị kwa ụbọchị na app ndị kacha elu n'ekwentị gị.",
          text: [
            "Ọtụtụ mmadụ na-eche na oge ihuenyo ha dị ala karịa ka ọ dị. Ekwentị gị na-edekọ ya ugbu a. Na iPhone, meghee Settings ma chọọ Screen Time. N'ọtụtụ ekwentị Android, meghee Settings ma chọọ Digital Wellbeing. Aha nwere ike ịdị iche n'ekwentị dị iche iche; ọ bụrụ na ị hụghị ya, chọọ \"screen time\" na Settings.",
            "Lee nọmba atọ: oge gị kwa ụbọchị (daily average), app gị kacha elu, na ugboro ole ị na-ebuli ekwentị gị ma ọ bụ na-enweta ozi ọkwa. Pickups na ozi ọkwa na-egosi ugboro ole ekwentị gị na-adọghachi gị azụ.",
            "Ọ dịghị otu nọmba zuru oke. Ihe dị mkpa bụ ma oge ihuenyo gị dabara ebumnuche gị: ụra zuru ezu, ọrụ ụlọ akwụkwọ ma ọ bụ ọrụ e mechara, oge gị na ndị enyi ihu na ihu, egwuregwu, izu ike na ihe ntụrụndụ. Nọmba gị bụ mmalite, ọ bụghị akara ule."
          ],
          steps: ["Meghee Settings n'ekwentị gị.", "Chọta Screen Time (iPhone) ma ọ bụ Digital Wellbeing (ọtụtụ ekwentị Android), ma ọ bụ chọọ \"screen time\" na Settings.", "Dee oge gị kwa ụbọchị, app atọ gị kacha elu, na pickups ma ọ bụ ozi ọkwa gị.", "Jụọ onwe gị: nke a ọ dabara ebumnuche m?"],
          words: [["Oge ihuenyo (screen time)", "oge ole ị na-eji ele ihuenyo."], ["Pickup", "oge ọ bụla i buliri ma ọ bụ meghee ekwentị gị."], ["Ọdịmma dijitalụ (digital wellbeing)", "iji teknụzụ n'ụzọ na-akwado ahụike gị, ebumnuche gị na obi gị."]],
          slides: [
            { title: "Ekwentị gị na-edekọ ya ugbu a", bullets: ["iPhone: Settings, wee Screen Time", "Ọtụtụ ekwentị Android: Settings, wee Digital Wellbeing", "Ị hụghị ya? Chọọ \"screen time\" na Settings"] },
            { title: "Nọmba atọ ị ga-ele", bullets: ["Oge gị kwa ụbọchị", "App gị kacha elu", "Pickups na ozi ọkwa"] },
            { title: "Ọ dịghị nọmba zuru oke", bullets: ["Ọ dabara ebumnuche gị?", "Ụra, ụlọ akwụkwọ ma ọ bụ ọrụ, ndị enyi, egwuregwu, izu ike", "Mmalite, ọ bụghị akara ule"] }
          ],
          tryIt: "Meghee peeji oge ihuenyo n'ekwentị gị. Dee oge gị kwa ụbọchị, app atọ gị kacha elu, na pickups ma ọ bụ ozi ọkwa gị kwa ụbọchị. Wee dee otu ebumnuche ihuenyo na-egbochi, ọ bụrụ na o nwere.",
          youCanNow: "ịchọta ezi oge ihuenyo gị, app gị kacha elu na pickups n'ekwentị gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka nọmba \"pickups\" n'ekwentị gị na-egosi?", options: ["Ịdị arọ ekwentị gị", "App ole i nwere", "Ugboro ole ekwentị gị na-adọghachi gị azụ", "Ike batrị gị"], answer: 2, why: "Pickups na ozi ọkwa na-egosi ugboro ole ekwentị gị na-adọghachi gị azụ." },
            { objective: "O1", q: "Ị hụghị Screen Time ma ọ bụ Digital Wellbeing n'ekwentị gị. Gịnị ka ị ga-eme?", options: ["Chọọ \"screen time\" na Settings", "Kọọ nọmba ahụ n'echiche", "Kwụsị", "Budata app ọ bụla site na mgbasa ozi na-apụta na mberede"], answer: 0, why: "Aha dị iche n'ekwentị dị iche iche, ya mere chọọ \"screen time\" na Settings." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Otu app si eme ka ị nọgide na-akpụgharị",
          minutes: 5,
          goal: "Hụ ihe ndị e mere n'app na-adọghachi gị azụ.",
          text: [
            "Ọtụtụ app na-enweta ego site n'uche gị: ka ị na-anọ ogologo oge, ka ha na-egosi mgbasa ozi karịa. Ya mere e mere ha ka o siere gị ike ịhapụ ha. Ịmara aghụghọ ndị a na-eme ka ọ dịrị gị mfe ịhọrọ n'onwe gị.",
            "Ihe ndị na-adọta mmadụ a na-ahụkarị: endless scroll (ọ dịghị mgbe ọ na-agwụ), autoplay (vidiyo ọzọ na-amalite n'onwe ya), ozi ọkwa na akara uhie (ha na-eme ka ị lee), streaks (egwu ịtụfu ha), likes na ọnụ ọgụgụ ndị lere (ị na-alọghachi ịhụ ma ọ gbagoro), na feed \"for you\" na-amụta kpọmkwem ihe na-eme ka ị nọgide na-ele.",
            "Nke a apụtaghị na ị dị nro. Otu ndị ọkachamara mere ihe ndị a. Ihe ngwọta bụ itinye ebe nkwụsị nke gị: gbanyụọ autoplay, tinye oke oge, ma kpebie tupu i meghee app ihe i ji bịa ime."
          ],
          steps: ["Meghee app gị kacha elu site na Nkuzi 1.", "Chọta ihe ọ bụla na-adọta gị: endless scroll, autoplay, ozi ọkwa, streaks, likes.", "Họrọ otu ị ga-agbanyụ ma ọ bụ chọta ụzọ gbara ya gburugburu.", "Tupu i meghee app, kwuo ihe i ji bịa ime."],
          words: [["Endless scroll", "feed na-anọgide na-ebunye ihe ọzọ nke mere na ọ dịghị ebe nkwụsị."], ["Autoplay", "mgbe vidiyo ọzọ na-amalite n'onwe ya."], ["Algorithm", "iwu kọmputa app na-eji ahọrọ ihe ọ ga-egosi gị ọzọ."]],
          slides: [
            { title: "Uche gị bụ ihe a na-ere", bullets: ["Ogologo oge n'app = mgbasa ozi karịa", "Ya mere e mere app ka o sie ike ịhapụ ha"] },
            { title: "Ihe ndị na-adọta gị", bullets: ["Endless scroll na autoplay", "Ozi ọkwa na akara uhie", "Streaks, likes na ọnụ ọgụgụ ndị lere", "Feed \"for you\""] },
            { title: "Tinye ebe nkwụsị nke gị", bullets: ["Gbanyụọ autoplay", "Tinye oke oge", "Buru ụzọ kpebie ihe i ji bịa ime"] }
          ],
          tryIt: "Meghee app ị kacha eji ma depụta ihe ọ bụla na-adọta gị ị hụrụ. Gbanyụọ otu (dịka ọmụmaatụ autoplay ma ọ bụ otu ụdị ozi ọkwa) ma ọ bụrụ na app ahụ kwere. Dee nke i gbanwere.",
          youCanNow: "ịhụ ihe app na-eji eme ka ị nọgide na-akpụgharị na itinye ebe nkwụsị nke gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ autoplay?", options: ["Ụdị egwuregwu", "Vidiyo ọzọ na-amalite n'onwe ya", "Ihe na-echekwa batrị", "Ntọala nzuzo"], answer: 1, why: "Autoplay na-amalite vidiyo ọzọ n'ahọrọghị gị, nke na-eme ka o sie ike ịkwụsị." },
            { objective: "O2", q: "I meghere app ịza otu ozi, wee kpụgharịa otu awa. Kedu omume ga-enyere gị aka oge ọzọ?", options: ["Gbanye ozi ọkwa karịa", "Meghee app ọtụtụ n'otu oge", "Nọgide na streak", "Kpebie ihe i ji bịa ime tupu i meghee app ahụ"], answer: 3, why: "Ikpebi ihe i ji bịa ime na-etinye ebe nkwụsị nke gị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ihuenyo, ụra na obi gị",
          minutes: 5,
          goal: "Tọọ oge mmechi ihuenyo na ebe ekwentị ga-anọ n'abalị.",
          text: [
            "Ụra bụ oge ahụ gị na ụbụrụ gị na-agbake. CDC (ụlọ ọrụ ahụike gọọmentị US) kwuru na ndị dị afọ 13 ruo 17 chọrọ awa 8 ruo 10 n'abalị, ndị okenye dị afọ 18 gaa n'ihu chọrọ awa 7 ma ọ bụ karịa. Ịkpụgharị, igwu egwuregwu na ozi n'abalị bụ ụfọdụ n'ime ndị kacha ezu ụra: ị na-amụ anya ogologo oge ma teta n'ozi ọkwa.",
            "Ndụmọdụ ụra CDC gụnyere idebe otu oge ụra na otu oge iteta, idebe ime ụlọ gị n'ọchịchịrị, jụụ ma dị oyi, na iwepụ ihuenyo ihe dị ka nkeji 30 tupu ụra. Ebe ekwentị ga-anọ n'abalị nke dị n'èzí akwa gị, ma ọ bụ n'ofe ime ụlọ, na-eme ka nke a dị mfe. Jiri elekere mkpu dị ọnụ ala ma ọ bụrụ na ekwentị gị bụ mkpu gị.",
            "Hụkwa otu ihuenyo si emetụta obi gị. Ọ bụrụ na app ụfọdụ na-eme ka ụjọ jide gị, iwe were gị, ma ọ bụ ka i chee na ị dịghị mma, nke ahụ bụ ozi bara uru. Ọ bụrụ na ị na-anọkarị n'obi mwute, enweghị ike ihi ụra ma ọ bụ enweghị olileanya, gwa onye okenye ị tụkwasịrị obi ma ọ bụ dọkịta. Na US, ị nwere ike ịkpọ ma ọ bụ zipu ozi na 988 oge ọ bụla; na mpụga US, kpọọ ahịrị enyemaka ọnọdụ mberede ma ọ bụ nọmba mberede nke ebe ahụ."
          ],
          steps: ["Họrọ oge ụra gị ma gụghachi nkeji 30: nke ahụ bụ oge mmechi ihuenyo.", "Họrọ ebe ekwentị ga-anọ nke dị anya n'akwa gị.", "Gbanye ọnọdụ ụra ma ọ bụ do not disturb n'ekwentị gị maka abalị.", "Hụ app ndị na-agbanwe obi gị, na otu ha si eme ya."],
          words: [["Do not disturb", "ntọala ekwentị na-eme ka oku na ozi ọkwa ghara ịda ụda ruo oge a kara aka."], ["Usoro ụra", "ịlakpu ụra na iteta n'ihe dị ka otu oge ahụ kwa ụbọchị."]],
          slides: [
            { title: "Ụra ole (CDC)", bullets: ["Ndị dị afọ 13-17: awa 8 ruo 10", "Ndị okenye 18+: awa 7 ma ọ bụ karịa"] },
            { title: "Chebe ụra gị", bullets: ["Otu oge ụra na otu oge iteta", "Ime ụlọ gbara ọchịchịrị, jụụ, dị oyi", "Wepụ ihuenyo ihe dị ka nkeji 30 tupu ụra"] },
            { title: "Tọgbọ ekwentị gị", bullets: ["Anya n'akwa gị", "Gbanye ọnọdụ ụra ma ọ bụ do not disturb", "Jiri elekere mkpu ma ọ dị mkpa"] },
            { title: "Lelee obi gị", bullets: ["Kedu app na-eme ka obi jọọ gị njọ?", "Ị na-anọkarị n'obi mwute ma ọ bụ enweghị ụra? Gwa mmadụ", "US: kpọọ ma ọ bụ zipu ozi na 988 oge ọ bụla"] }
          ],
          sources: [{ name: "CDC: About Sleep", url: "https://www.cdc.gov/sleep/about/index.html" }, { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }],
          tryIt: "Tọọ oge mmechi ihuenyo gị na ebe ekwentị gị ga-anọ n'abalị a. Gbanye ọnọdụ ụra ma ọ bụ do not disturb. Echi, dee otu i si hie ụra na otu ahụ dị gị n'ụtụtụ.",
          youCanNow: "ichebe ụra gị site n'oge mmechi ihuenyo, ebe ekwentị ga-anọ n'abalị na ọnọdụ do not disturb.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ebe ekwentị ga-anọ n'abalị (phone parking spot)?", options: ["Akpa ekwentị", "Eriri chaja", "Ntọala app", "Ebe dị anya n'akwa gị ebe ekwentị na-anọ n'abalị"], answer: 3, why: "Itinye ekwentị anya n'akwa gị na-eme ka ịkpụgharị n'abalị sie ike." },
            { objective: "O3", q: "Oge ụra gị bụ 10:30 pm. Olee mgbe ị ga-ewepụ ihuenyo?", options: ["N'elekere 10:30 pm", "Ihe dị ka 10 pm", "Mgbe ọ bụla ike gwụrụ gị", "Mgbe otu vidiyo ọzọ gachara"], answer: 1, why: "Iwepụ ihuenyo ihe dị ka nkeji 30 tupu ụra na-enyere gị aka ihi ụra." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmara omume ihuenyo gị",
        questions: [
          { objective: "O1", q: "Ebee ka ị na-ahụkarị oge ihuenyo gị na iPhone?", options: ["App igwefoto", "Settings, wee Screen Time", "Igwe mgbakọ", "App Store"], answer: 1, why: "iPhone na-edekọ ya n'okpuru Screen Time na Settings." },
          { objective: "O1", q: "Gịnị ka ọtụtụ pickups na-agwa gị?", options: ["Batrị gị emeela ochie", "Ekwentị gị na-adọghachi gị azụ ugboro ugboro", "Ekwentị gị na-agba ọsọ", "Ọ dịghị ihe ọ bụla"], answer: 1, why: "Pickups na-egosi ugboro ole ị na-alọghachi n'ekwentị gị." },
          { objective: "O2", q: "Gịnị mere ọtụtụ app ji eji endless scroll na autoplay?", options: ["Ka ị nọgide n'app ahụ ogologo oge", "Ichekwa batrị gị", "Inyere gị aka ihi ụra", "N'ihi na iwu chọrọ ya"], answer: 0, why: "Oge ka ukwuu n'app pụtara mgbasa ozi na ego karịa maka app ahụ." },
          { objective: "O3", q: "Awa ụra ole ka CDC kwuru na ndị dị afọ 13 ruo 17 chọrọ?", options: ["4 ruo 5", "5 ruo 6", "12 ruo 14", "8 ruo 10"], answer: 3, why: "CDC depụtara awa 8 ruo 10 maka ndị dị afọ 13 ruo 17." },
          { objective: "O3", q: "Kedu omume na-echebe ụra gị?", options: ["Ịkpụgharị n'akwa ruo mgbe ụra buru gị", "Ịhapụ ozi ọkwa ka ha na-ada ụda elu", "Iwepụ ihuenyo ihe dị ka nkeji 30 tupu ụra", "Igwu egwuregwu ruo 2 am n'abalị ụlọ akwụkwọ"], answer: 2, why: "CDC na-atụ aro iwepụ ihuenyo tupu ụra." }
        ]
      }
    },
    {
      name: "Isi 2: Ijide ọchịchị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ijikwa ozi ọkwa na itinye oke n'app",
          minutes: 5,
          goal: "Gbanyụọ ozi ọkwa na-adịghị mkpa ma tinye oke n'otu app.",
          text: [
            "Ozi ọkwa ọ bụla bụ nkwụsịtụ. O nwere ike iwe oge tupu uche gị alọghachi mgbe i lechara ekwentị gị, nke na-eme ka ihe omume ụlọ, omume egwuregwu, ọmụmụ ihe ma ọ bụ ọrụ ghara ịga ngwa ngwa. Gị na-ekpebi app ndị nwere ike ịkwụsịtụ gị.",
            "Debe ozi ọkwa maka ndị mmadụ na ihe dị mkpa (oku na ozi site n'ezinụlọ, ọkwa ụlọ akwụkwọ ma ọ bụ ọrụ, ụgbọ na-abịa ibu gị). Gbanyụọ ha maka egwuregwu, ịzụ ahịa na ọtụtụ soshal midia. Ị na-emekarị nke a na Settings, n'okpuru Notifications, otu app n'otu oge.",
            "iPhone na Android abụọ na-ekwe ka i tinye oke oge kwa ụbọchị n'app, na ọnọdụ focus ma ọ bụ do not disturb maka ụlọ akwụkwọ, ọrụ ma ọ bụ omume egwuregwu. Mgbe i ruru oke, ekwentị na-echetara gị. Ị nwere ike ịgafe ya, mana nkwụsịtụ ahụ na-enye gị nhọrọ. Ụfọdụ mmadụ na-ewepụkwa app ndị na-adọta ha n'ihuenyo mbụ (home screen) ma ọ bụ na-apụ (log out) mgbe ha jiri ya, ka imeghe ha were obere mgbalị."
          ],
          steps: ["Meghee Settings, wee Notifications.", "Debe ndị mmadụ na ọkwa dị mkpa; gbanyụọ egwuregwu, ịzụ ahịa na ọtụtụ soshal midia.", "Tinye oke kwa ụbọchị n'app gị kacha elu (Screen Time ma ọ bụ Digital Wellbeing).", "Gbanye ọnọdụ focus ma ọ bụ do not disturb n'oge ụlọ akwụkwọ, ọrụ ma ọ bụ omume egwuregwu.", "Wepụ otu app na-adọta gị n'ihuenyo mbụ."],
          words: [["Ozi ọkwa (notification)", "ozi ma ọ bụ ọkwa na-apụta n'ekwentị gị site n'app."], ["Oke app (app limit)", "oke oge kwa ụbọchị i tinyere n'app."], ["Ọnọdụ focus (focus mode)", "ntọala na-eme ka ihe ndọpụ uche ghara ịda ụda mgbe ị na-arụ ọrụ, na-agụ akwụkwọ ma ọ bụ na-ezu ike."]],
          slides: [
            { title: "Gị na-ahọrọ onye ga-akwụsịtụ gị", bullets: ["Ọkwa ọ bụla na-agbaji uche gị", "Debe ndị mmadụ na ọkwa dị mkpa", "Gbanyụọ egwuregwu, ịzụ ahịa, ọtụtụ soshal"] },
            { title: "Tinye oke n'app", bullets: ["Oke kwa ụbọchị n'app gị kacha elu", "Ncheta ahụ na-enye gị nhọrọ"] },
            { title: "Ọnọdụ focus", bullets: ["Oge ụlọ akwụkwọ, ọrụ ma ọ bụ omume egwuregwu", "Mee ka mkpọtụ ahụ kwụsị"] },
            { title: "Tinye obere mgbalị", bullets: ["Wepụ app na-adọta gị n'ihuenyo mbụ", "Pụọ (log out) mgbe i jiri ya"] }
          ],
          tryIt: "Gaa n'ozi ọkwa gị ma gbanyụọ opekata mpe app atọ na-enweghị mkpa ịkwụsịtụ gị. Wee tinye oke oge kwa ụbọchị n'app gị kacha elu site na Nkuzi 1.",
          youCanNow: "ijikwa app ndị nwere ike ịkwụsịtụ gị, itinye oke n'app na iji ọnọdụ focus.",
          quickCheck: [
            { objective: "O4", q: "Gịnị mere ozi ọkwa nwere ike ime ka ihe omume ụlọ gị ghara ịga ngwa ngwa?", options: ["Nke ọ bụla na-akwụsịtụ gị, ọ na-ewekwa oge tupu uche gị alọghachi", "Ha na-eri ebe nchekwa", "Ha na-eme ka ihuenyo gbaa ọchịchịrị", "Ha na-agbanwe akara ule gị"], answer: 0, why: "Ozi ọkwa ọ bụla bụ nkwụsịtụ na-adọpụ uche gị." },
            { objective: "O4", q: "App ịzụ ahịa na-ezitere gị ọkwa ire ere ụbọchị niile. Gịnị ka ị ga-eme?", options: ["Debe ha; ị nwere ike itufu ohere", "Lelee nke ọ bụla ozugbo", "Gbanyụọ ozi ọkwa app ahụ na Settings", "Gbanyụọ oku na ozi gị kama"], answer: 2, why: "Debe ozi ọkwa maka ndị mmadụ na ọkwa dị mkpa; gbanyụọ ịzụ ahịa na egwuregwu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Feed ka mma na ntụnyere obere",
          minutes: 5,
          goal: "Gbanwee feed gị ka ọ hapụ gị n'obi ka mma, ọ bụghị njọ.",
          text: [
            "Soshal midia na-egosi highlight reel: foto kacha mma, filta na ndozi. Itụnyere ndụ gị kwa ụbọchị na oge kacha mma nke onye ọzọ nwere ike ime ka i chee na ị ezughị. Cheta na ihe ị na-ahụ ka a họọrọ ma dozie.",
            "Ị nwere ike ịzụ feed gị. Kwụsị iso (unfollow) ma ọ bụ mee mute akaụntụ ndị na-eme ka obi jọọ gị njọ gbasara ahụ gị, ego gị ma ọ bụ ndụ gị. Soro ndị na-akụzi gị ihe, na-eme ka ị chịa ọchị ma ọ bụ na-akwado ebumnuche gị: egwuregwu gị, egwu, nka, ọrụ ị chọrọ, omenala gị. Jiri nhọrọ \"not interested\" mgbe app ahụ nyere ya. Algorithm na-amụta site n'ihe ị na-ele, ya mere lee ihe n'ebumnuche.",
            "Jụọ onwe gị: \"Kedu ka ahụ dị m mgbe m nọrọ nkeji 10 n'app a?\" Ọ bụrụ na azịza ya na-abụkarị njọ, gbanwee ndị ị na-eso ma ọ bụ oge ị na-anọ. Ọ bụrụ na mmadụ n'ịntanetị na-emeso gị obi ọjọọ, gwa onye okenye ị tụkwasịrị obi; ihe ọmụmụ Koach Learn Staying Safe from Cyberbullying na-egosi gị ihe ị ga-eme."
          ],
          steps: ["Kpụgharịa feed gị nkeji abụọ ma hụ otu akaụntụ ọ bụla si eme ka obi dị gị.", "Kwụsị iso ma ọ bụ mee mute akaụntụ abụọ na-eme ka obi jọọ gị njọ.", "Soro akaụntụ abụọ na-akụzi, na-akpali ma ọ bụ na-eme ka ị chịa ọchị.", "Jiri \"not interested\" n'ihe ị na-achọghị."],
          words: [["Highlight reel", "naanị oge kacha mma, a họọrọ ma dozie ka ọ dị mma ile."], ["Mute", "ịzọ ozi mmadụ n'akwụsịghị iso ya ma ọ bụ gwa ya."]],
          slides: [
            { title: "Ọ bụ highlight reel", bullets: ["Foto kacha mma, filta na ndozi", "Atụnyerela ndụ gị kwa ụbọchị na nke kacha mma ha"] },
            { title: "Zụọ feed gị", bullets: ["Kwụsị iso ma ọ bụ mee mute ihe na-eme ka obi jọọ gị njọ", "Soro ihe na-akụzi, na-akpali ma ọ bụ na-atọ ọchị", "Jiri \"not interested\""] },
            { title: "Lelee onwe gị", bullets: ["Kedu ka ahụ dị m mgbe nkeji 10 gachara?", "Ọ na-ajọkarị njọ? Gbanwee ndị ị na-eso"] }
          ],
          tryIt: "Nọrọ nkeji abụọ n'app gị kacha ma tụọ akara otu ozi iri mbụ ọ bụla si eme ka obi dị gị (ka mma, otu ihe ahụ, njọ). Mee mute ma ọ bụ kwụsị iso akaụntụ \"njọ\" abụọ ma soro abụọ na-enyere gị aka ito.",
          youCanNow: "ịkpụzi feed gị ka ọ kwado obi gị na ebumnuche gị kama ime ka ị na-atụnyere onwe gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka algorithm app na-amụta ihe site na ya?", options: ["Ihe ị na-ele na ihe ị na-eme n'app ahụ", "Akara ule ụlọ akwụkwọ gị", "Ihu igwe", "Ọ dịghị ihe; feed na-abịa n'enweghị usoro"], answer: 0, why: "Algorithm na-amụta site n'ihe ị na-ele, ya mere ile ihe n'ebumnuche na-akpụzi feed gị." },
            { objective: "O5", q: "Ọtụtụ ụbọchị, obi na-ajọ gị njọ mgbe nkeji 10 n'app gachara. Gịnị ka ị ga-anwa?", options: ["Kpụgharịa ogologo oge ka obi dị gị mma", "Soro akaụntụ ndị ọzọ dị ka ndị na-ewe gị iwe", "Leghara otu ahụ dị gị anya", "Gbanwee ndị ị na-eso ma ọ bụ oge ị na-anọ"], answer: 3, why: "Ọ bụrụ na app na-emekarị ka obi jọọ gị njọ, gbanwee feed gị ma ọ bụ oge gị n'ime ya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ime na ịnwale atụmatụ ihuenyo gị",
          minutes: 6,
          goal: "Dee atụmatụ ihuenyo ma nwalee ya ụbọchị asaa.",
          text: [
            "Atụmatụ na-eme ka ezi echiche ghọọ omume. Atụmatụ ihuenyo gị dị mkpụmkpụ, doo anya, ọ bụkwa nke gị: gị na-ahọrọ ebumnuche ya.",
            "Tinye: ebumnuche oge ihuenyo gị kwa ụbọchị, app abụọ kacha elu ị ga-etinye oke (were oke ahụ tọọ n'ekwentị gị), mgbanwe ozi ọkwa gị, oge mmechi ihuenyo gị na ebe ekwentị ga-anọ, ihe abụọ ị ga-eme kama ịkpụgharị mgbe ike agwụghị gị ma ihe na-agwụ gị ike (ije, omume egwuregwu gị, ise ihe, ịkpọ enyi, ịgụ akwụkwọ, isi nri), na otu mgbanwe feed.",
            "Nwalee ya ụbọchị asaa, wee tụnyere oge ihuenyo gị, pickups na ụra gị na nọmba gị site na Nkuzi 1. Debe ihe rụrụ ọrụ ma gbanwee ihe na-arụghị. Ịda otu ụbọchị bụ ihe nkịtị; naanị malite ọzọ n'echi ya. Ịgwa enyi ma ọ bụ onye ezinụlọ banyere atụmatụ gị, ma ọ bụ ime ya ọnụ, na-eme ka ọ dị mfe."
          ],
          steps: ["Dee ebumnuche oge ihuenyo gị.", "Tinye oke n'app abụọ gị kacha elu.", "Depụta mgbanwe ozi ọkwa gị na oge mmechi ihuenyo gị.", "Dee ihe abụọ ị ga-eme kama ịkpụgharị.", "Nwalee ụbọchị asaa ma tụnyere na Nkuzi 1."],
          words: [["Atụmatụ ihuenyo (screen plan)", "iwu nke gị e dere ede maka mgbe, ebe na oke ị na-eji ihuenyo."]],
          slides: [
            { title: "Atụmatụ ihuenyo gị", bullets: ["Ebumnuche oge ihuenyo na oke app abụọ", "Mgbanwe ozi ọkwa", "Oge mmechi ihuenyo na ebe ekwentị ga-anọ"] },
            { title: "Kama ịkpụgharị", bullets: ["Ije, omume egwuregwu, ise ihe, ịgụ akwụkwọ, isi nri", "Kpọọ enyi ma ọ bụ soro ya nọrọ"] },
            { title: "Nwalee ụbọchị asaa", bullets: ["Tụnyere na nọmba gị site na Nkuzi 1", "Debe ihe rụrụ ọrụ, gbanwee ihe na-arụghị", "Ị dara? Malite ọzọ echi"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ihuenyo gị nwere akụkụ niile, tinye oke ndị ahụ n'ekwentị gị, ma gbasoo ya ụbọchị asaa. N'ụbọchị nke asaa, tụnyere oge ihuenyo gị, pickups na ụra gị na nọmba gị site na Nkuzi 1.",
          youCanNow: "ime, ịgbaso na imezi atụmatụ ihuenyo nke gị na-echebe ụra gị, uche gị na obi gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka ị ga-atụnyere na njedebe nnwale ụbọchị asaa gị?", options: ["Oge ihuenyo gị, pickups na ụra gị na nọmba gị site na Nkuzi 1", "Oge ihuenyo ndị enyi gị", "Ọnụ ahịa ekwentị gị", "Ọnụ ọgụgụ ndị na-eso gị"], answer: 0, why: "Itụnyere na nọmba mbụ gị na-egosi ihe rụrụ ọrụ." },
            { objective: "O6", q: "Ihe na-agwụ gị ike, ị wee chọọ iwere ekwentị gị. Gịnị ka atụmatụ gị kwuru ka ị mee?", options: ["Meghee app gị kacha elu", "Gbanyụọ oke app", "Mee otu n'ime ihe abụọ gị kama ịkpụgharị, dị ka ije ma ọ bụ oku", "Mụrụ anya ogologo oge"], answer: 2, why: "Atụmatụ gị depụtara ihe abụọ ị ga-eme kama ịkpụgharị mgbe ihe na-agwụ gị ike." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ijide ọchịchị",
        questions: [
          { objective: "O4", q: "Kedu ozi ọkwa ka ọ na-adịkarị mma ịhapụ ka ọ na-agba?", options: ["Ozi site n'ezinụlọ na ọkwa ụlọ akwụkwọ ma ọ bụ ọrụ", "Egwuregwu ọ bụla", "Ọkwa ire ere", "Likes niile nke soshal midia"], answer: 0, why: "Debe ọkwa dị mkpa; gbanyụọ ndị ọzọ." },
          { objective: "O4", q: "Gịnị na-eme mgbe i ruru oke app i tinyere?", options: ["E kpochiri ekwentị gị ruo mgbe ebighị ebi", "A na-ehichapụ app ahụ", "Ekwentị gị na-echetara gị, na-enye gị nhọrọ", "A machibidoro akaụntụ gị"], answer: 2, why: "Oke ahụ na-etinye nkwụsịtụ ka i wee họrọ." },
          { objective: "O5", q: "Gịnị mere itụnyere onwe gị na ozi soshal midia ji ezighi ezi nye gị?", options: ["Ozi niile bụ ụgha mgbe niile", "Ekwentị dị obere nke ukwuu", "Ọ dịghị onye na-etinye ezi ihe", "Ozi na-abụkarị highlight reel: oge kacha mma a họọrọ ma dozie"], answer: 3, why: "Ị na-atụnyere ndụ gị kwa ụbọchị na oge kacha mma nke onye ọzọ." },
          { objective: "O5", q: "Otu akaụntụ na-emekarị ka obi jọọ gị njọ gbasara onwe gị. Gịnị ka ị nwere ike ime?", options: ["Lekwuo ya anya", "Mee ya mute ma ọ bụ kwụsị iso ya", "Zipu ya okwuntughe gị", "Hichapụ ekwentị gị"], answer: 1, why: "Ime mute ma ọ bụ ịkwụsị iso na-agbanwe ihe feed gị na-egosi gị." },
          { objective: "O6", q: "I mebiri atụmatụ ihuenyo gị n'ụbọchị nke atọ. Gịnị ugbu a?", options: ["Kwụsị kpamkpam", "Hichapụ app gị niile", "Malite ọzọ n'echi ya ma mezie ya ma ọ dị mkpa", "Zoo ya n'anya onye ọ bụla"], answer: 2, why: "Ịda bụ ihe nkịtị; gaa n'ihu ma mezie atụmatụ ahụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ọdịmma Dijitalụ na Oge Ihuenyo Dị Mma",
    questions: [
      { objective: "O1", q: "Ọdịmma dijitalụ pụtara:", options: ["Ịghara iji ekwentị mgbe ọ bụla", "Iji ihuenyo n'ụzọ na-akwado ahụike gị, ebumnuche gị na obi gị", "Inwe ekwentị kacha ọhụrụ", "Inweta ndị na-eso kacha ọtụtụ"], answer: 1, why: "Ọ bụ maka ihuenyo inyere gị aka, ọ bụghị iwere ndụ gị." },
      { objective: "O1", q: "N'ọtụtụ ekwentị Android, a na-ahụ oge ihuenyo na Settings n'okpuru:", options: ["Digital Wellbeing", "Camera", "Wallpaper", "Bluetooth"], answer: 0, why: "Ọtụtụ ekwentị Android na-akpọ ya Digital Wellbeing; aha nwere ike ịdị iche." },
      { objective: "O1", q: "Kedu nọmba atọ kacha baa uru ilele mbụ?", options: ["Batrị, ebe nchekwa, ìhè ihuenyo", "Ndị na-eso, likes, nkọwa", "Oge kwa ụbọchị, app kacha elu, pickups ma ọ bụ ozi ọkwa", "Ọnụ ahịa ekwentị, afọ ya, agba ya"], answer: 2, why: "Ndị a na-egosi oke na ugboro ole ị na-eji ekwentị gị." },
      { objective: "O1", q: "Ọ nwere otu nọmba oge ihuenyo zuru oke maka onye ọ bụla?", options: ["Ee, kpọmkwem awa 1", "Ee, kpọmkwem awa 3", "Ee, efu", "Mba; ihe dị mkpa bụ ma ọ dabara ebumnuche gị"], answer: 3, why: "Oge ihuenyo gị kwesịrị ịdaba n'ụra gị, ụlọ akwụkwọ, ọrụ na ndụ gị." },
      { objective: "O2", q: "Endless scroll bụ ihe na-adọta gị n'ihi na:", options: ["Ọ dịghị ebe nkwụsị nkịtị", "Ọ na-echekwa data", "Iwu chọrọ ya", "Ọ na-eme ka ihuenyo nwuo karịa"], answer: 0, why: "Ebe ọ na-enweghị ala, ọ dị mfe ịnọgide na-aga." },
      { objective: "O2", q: "\"Algorithm\" n'app bụ:", options: ["Ụdị akpa ekwentị", "Onye na-agụ ozi gị", "Iwu kọmputa na-ahọrọ ihe ọ ga-egosi gị ọzọ", "Ọkwa egwuregwu"], answer: 2, why: "Algorithm na-amụta ihe na-eme ka ị nọgide na-ele." },
      { objective: "O2", q: "Kedu ezigbo ebe nkwụsị ị ga-etinye?", options: ["Gbanye autoplay", "Gbanyụọ autoplay", "Tinye ozi ọkwa karịa", "Wepụ oke niile"], answer: 1, why: "Ịgbanyụ autoplay na-akwụsị vidiyo ọzọ ịmalite n'onwe ya." },
      { objective: "O2", q: "Tupu i meghee app, omume bara uru bụ:", options: ["Ịtụgharị ụda ruo n'elu", "Imeghe app ise ọzọ", "Ilele ozi ọkwa ọ bụla", "Ikpebi ihe i ji bịa ime"], answer: 3, why: "Ebumnuche doro anya na-eme ka ọ dị mfe imechi app ahụ." },
      { objective: "O3", q: "Awa ụra ole ka CDC kwuru na ndị okenye dị afọ 18 gaa n'ihu chọrọ?", options: ["7 ma ọ bụ karịa", "4", "5", "3 ruo 4"], answer: 0, why: "CDC kwuru na ndị okenye chọrọ awa 7 ma ọ bụ karịa." },
      { objective: "O3", q: "Ebe ekwentị ga-anọ n'abalị kwesịrị ịbụ:", options: ["N'okpuru ohiri isi gị", "N'aka gị", "Anya n'akwa gị", "Na-ada ụda elu"], answer: 2, why: "Ịdị anya n'akwa gị na-echebe ụra gị." },
      { objective: "O3", q: "Ị na-anọkarị n'obi mwute, enweghịkwa ike ihi ụra. Na US, kedu otu ebe ị nwere ike ịkpọtụrụ oge ọ bụla?", options: ["Dee ya n'ebe nkọwa", "Kpọọ ma ọ bụ zipu ozi na 988", "Chere, agwala onye ọ bụla", "Jụọ app ọ bụla"], answer: 1, why: "988 bụ n'efu ma na-arụ ọrụ 24/7; gwakwa onye okenye ị tụkwasịrị obi ma ọ bụ dọkịta." },
      { objective: "O4", q: "Kedu ozi ọkwa kacha mma ịgbanyụ?", options: ["Ụgbọ na-ebu gị abịala", "Ozi site n'aka nne ma ọ bụ nna gị", "Ọkwa ụlọ akwụkwọ", "Egwuregwu na-agwa gị ka ị lọghachi"], answer: 3, why: "Ọkwa egwuregwu na ịzụ ahịa anaghị adịkarị mkpa ịkwụsịtụ gị." },
      { objective: "O4", q: "Gịnị bụ ọnọdụ focus?", options: ["Ntọala na-eme ka ihe ndọpụ uche ghara ịda ụda mgbe ị na-agụ akwụkwọ, na-arụ ọrụ ma ọ bụ na-ezu ike", "Filta igwefoto", "App a na-akwụ ụgwọ", "Egwuregwu"], answer: 0, why: "Ọnọdụ focus na-eme ka ọkwa ghara ịda ụda ruo oge a kara aka." },
      { objective: "O4", q: "Iwepụ app na-adọta gị n'ihuenyo mbụ na-enyere aka n'ihi na:", options: ["Ọ na-ehichapụ akaụntụ gị", "Ọ na-eme ka imeghe ya were obere mgbalị karịa", "Ọ na-eme ka app ahụ gaa ngwa ngwa", "Ọ na-enye gị akara"], answer: 1, why: "Obere nzọụkwụ ọzọ na-enye gị oge ịhọrọ." },
      { objective: "O5", q: "\"Highlight reel\" bụ:", options: ["Ngwa ịkụ azụ", "Ihe a na-agbasa ndụ n'enweghị ndozi", "Akụkọ oge ihuenyo gị", "Naanị oge kacha mma, a họọrọ ma dozie"], answer: 3, why: "Soshal midia na-egosikarị naanị oge kacha mma e doziri edozi." },
      { objective: "O5", q: "Gịnị ka ime akaụntụ mute na-eme?", options: ["Ọ na-akọrọ ndị uwe ojii banyere ha", "Ọ na-ehichapụ akaụntụ ha", "Ọ na-ezo ozi ha n'akwụsịghị iso ha ma ọ bụ gwa ha", "Ọ na-ezigara ha ozi"], answer: 2, why: "Mute na-ezo ozi ha nwayọọ." },
      { objective: "O5", q: "Ezigbo ajụjụ ịjụ onwe gị mgbe i jiri app bụ:", options: ["Likes ole ka m nwetara?", "Kedu ka ahụ dị m mgbe m nọrọ nkeji 10 n'app a?", "Onye nwere ndị na-eso karịa?", "Gịnị ka m ga-azụ?"], answer: 1, why: "Ịhụ otu ahụ dị gị na-enyere gị aka ịgbanwe ihe ị na-eji." },
      { objective: "O6", q: "Kedu nke kwesịrị ịbanye n'atụmatụ ihuenyo gị?", options: ["Okwuntughe gị", "Ndepụta ndị ị ga-esoro rụọ ụka", "Ịgbanye ozi ọkwa niile", "Ihe abụọ ị ga-eme kama ịkpụgharị"], answer: 3, why: "Inwe ihe omume ndị ọzọ dị njikere na-eme ka ọ dị mfe itinye ekwentị ala." },
      { objective: "O6", q: "Ogologo oge ole ka ị ga-anwale atụmatụ ihuenyo gị tupu i kpee ya ikpe?", options: ["Otu nkeji", "Otu awa", "Ụbọchị asaa", "Anwalela ya mgbe ọ bụla"], answer: 2, why: "Otu izu na-enye gị ezi nọmba ị ga-atụnyere." },
      { objective: "O6", q: "Gịnị na-eme ka ịgbaso atụmatụ ihuenyo dị mfe?", options: ["Ịgwa enyi ma ọ bụ onye ezinụlọ, ma ọ bụ ime ya ọnụ", "Ime ya nzuzo", "Ime ka o sie ike dịka o kwere omume", "Ịgbanwe ya kwa awa"], answer: 0, why: "Nkwado site n'aka ndị ọzọ na-enyere gị aka ịga n'ihu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      4,
      6,
      9,
      10,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ebumnuche na oke app",
        objective: "O4",
        notYet: "Enweghị ebumnuche oge ihuenyo, ma ọ bụ etinyeghị oke n'ekwentị.",
        meets: "Ebumnuche oge ihuenyo kwa ụbọchị na oke e tinyere n'app abụọ kacha elu.",
        exceeds: "Na-ejikwa ọnọdụ focus maka ụlọ akwụkwọ, ọrụ ma ọ bụ omume egwuregwu."
      },
      {
        name: "Ozi ọkwa",
        objective: "O4",
        notYet: "Enweghị mgbanwe ozi ọkwa.",
        meets: "E gbanyụrụ ozi ọkwa nke opekata mpe app atọ na-adịghị mkpa, ma debe ndị mmadụ na ọkwa dị mkpa.",
        exceeds: "Wepụkwara otu app na-adọta ya n'ihuenyo mbụ."
      },
      {
        name: "Atụmatụ ụra",
        objective: "O3",
        notYet: "Enweghị oge mmechi ihuenyo ma ọ bụ ebe ekwentị ga-anọ n'abalị.",
        meets: "Oge mmechi ihuenyo ihe dị ka nkeji 30 tupu ụra na ebe ekwentị ga-anọ nke dị anya n'akwa.",
        exceeds: "Ọnọdụ ụra ma ọ bụ do not disturb gbanyere n'abalị ọ bụla nke nnwale ahụ."
      },
      {
        name: "Feed na ihe ndị ọzọ",
        objective: "O5",
        notYet: "Enweghị mgbanwe feed, ma ọ bụ enweghị ihe ọzọ a ga-eme kama ịkpụgharị.",
        meets: "Otu mgbanwe feed na ihe abụọ a ga-eme kama ịkpụgharị.",
        exceeds: "Dere otu mgbanwe feed ahụ si metụta obi ya."
      },
      {
        name: "Nnwale ụbọchị asaa",
        objective: "O6",
        notYet: "A nwalebeghị atụmatụ ahụ, ma ọ bụ a tụnyereghị ihe si na ya pụta.",
        meets: "Gbasoro ya ụbọchị asaa, ma tụnyere oge ihuenyo, pickups na ụra na Nkuzi 1.",
        exceeds: "Kwuru ihe a ga-edebe na ihe a ga-agbanwe maka izu na-abịa."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe oge ihuenyo ma ọ bụ pickups ha belatara mgbe nnwale ụbọchị asaa gachara (ha n'onwe ha kọrọ)",
      "Ndị na-amụ ihe kọrọ na ha na-ehi ụra awa karịa na nnyocha nsochi ụbọchị 30",
      "Ndị na-amụ ihe ka na-eji atụmatụ ihuenyo ha mgbe ụbọchị 30 gachara (nnyocha nsochi)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ ngwaọrụ nke onye na-amụ ihe n'onwe ya",
      "Akwụkwọ ma ọ bụ app ndetu maka atụmatụ ihuenyo na ndetu kwa ụbọchị",
      "Elekere mkpu dị ọnụ ala ma ọ bụrụ na a na-eji ekwentị dị ka mkpu (ọ bụghị iwu)",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunyere nnwale ụbọchị asaa"
    ],
    facilitatorNotes: [
      "Mee ka ọ bụrụ nhọrọ, ọ bụghị ịbara mba: ndị na-amụ ihe na-etinye ebumnuche nke ha ma debe nọmba ha nzuzo belụsọ ma ha chọrọ ikesa ya.",
      "Nyere ndị na-amụ ihe nwere ekwentị dị iche iche aka ịchọta ntọala ziri ezi; menu dị iche site n'otu ngwaọrụ gaa n'ọzọ.",
      "Kesaa ebe enyemaka ahụike uche na ọnọdụ mberede nke ebe ahụ, gụnyere 988 na US, ma gwa ndị na-amụ ihe onye ha ga-agwa ma ọ bụrụ na ha na-anọkarị n'obi mwute.",
      "Mee nnwale ụbọchị asaa ka ọ bụrụ asọmpi otu nwere nzukọ nlele na njedebe izu ahụ.",
      "Jiri rubric tụọ akara atụmatụ ihuenyo, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
