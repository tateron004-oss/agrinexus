"use strict";

// Koach Learn course (Yoruba translation of small-business/smallbiz-ai-healthcare-practices.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// This course is not legal or compliance advice.

const HHS_CLOUD = { name: "HHS: Guidance on HIPAA and Cloud Computing (ìtọ́sọ́nà HIPAA fún iṣẹ́ cloud)", url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html" };
const HHS_BA = { name: "HHS: Business Associates (ìtọ́sọ́nà HIPAA nípa alájọṣe òwò)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html" };
const HHS_HIPAA = { name: "HHS: HIPAA for Professionals (HIPAA fún àwọn òṣìṣẹ́ ìlera)", url: "https://www.hhs.gov/hipaa/for-professionals/index.html" };

module.exports = {
  id: "smallbiz-ai-healthcare-practices-yo",
  lang: "yo",
  translationOf: "smallbiz-ai-healthcare-practices",
  category: "Small Business",
  name: "AI fún Àwọn Ilé Ìwòsàn Kékeré",
  skills: "Mímọ ìgbà tí ìsọfúnni aláìsàn lè wọ inú AI àti ìgbà tí kò lè wọ̀ ọ́, Kíkọ ọ̀rọ̀ ìpè fún tábìlì ìgbàlejò, Kíkọ àkọ́pẹrẹ ìwé ìtọ́sọ́nà aláìsàn fún àyẹ̀wò oníṣègùn, Ṣíṣe àwòṣe ìṣètò àkókò àti ìránnilétí, Kíkọ òfin ọ́fíìsì, Fífi òfin AI lélẹ̀ fún òṣìṣẹ́",
  outcome: "lo AI láìléwu fún iṣẹ́ ọ́fíìsì ilé ìwòsàn kékeré: pinnu àwọn iṣẹ́ tí ó lè lo irinṣẹ́ AI gbogbogbò àti àwọn tí ó nílò irinṣẹ́ tí a fọwọ́ sí pẹ̀lú àdéhùn alájọṣe òwò (BAA), kí o sì ṣe ọ̀rọ̀ ìpè tábìlì ìgbàlejò, àwòṣe ìránnilétí, ìwé ìtọ́sọ́nà ní èdè tó rọrùn fún àyẹ̀wò oníṣègùn, àti òfin AI fún òṣìṣẹ́, láìsí ìsọfúnni aláìsàn kankan nínú irinṣẹ́ AI gbogbogbò.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn olùdásílẹ̀, àwọn alákòóso ọ́fíìsì àti òṣìṣẹ́ tábìlì ìgbàlejò ní àwọn ilé ìwòsàn kékeré: ilé ìwòsàn ẹbí, ọ́fíìsì oníṣègùn eyín, ibi ìtọ́jú ọkàn àti ìgbaninímọ̀ràn, chiropractor, ìtọ́jú ara (physical therapy), ìtọ́jú ojú àti iléeṣẹ́ ìtọ́jú nílé, pẹ̀lú ọ̀pọ̀ ilé ìwòsàn tí àwọn ẹ̀yà kékeré ní, tí wọ́n ń sin àwùjọ wọn.",
    "O máa kọ́ òfin kan tí ó ṣe pàtàkì jù: ìsọfúnni ìlera tí a dáàbò bò (PHI) kò gbọdọ̀ wọ inú irinṣẹ́ AI àfi tí ilé ìwòsàn rẹ bá ti fọwọ́ sí i, tí ó sì ní àdéhùn alájọṣe òwò HIPAA (BAA) pẹ̀lú ilé-iṣẹ́ náà. Lẹ́yìn náà, o máa lo AI fún ọ̀pọ̀ iṣẹ́ ọ́fíìsì tí kò nílò ìsọfúnni aláìsàn rárá.",
    "Nínú ẹ̀kọ́ yìí, AI kì í ṣàyẹ̀wò àìsàn, kì í tọ́jú, kì í sì fúnni ní ìmọ̀ràn ìṣègùn. Oníṣègùn tí ó ní ìwé àṣẹ ló ń ṣàyẹ̀wò gbogbo ọ̀rọ̀ ìlera tí aláìsàn máa rí. Ẹ̀kọ́ yìí kì í ṣe ìmọ̀ràn òfin tàbí ti ìtẹ̀lé òfin; wo ìtọ́sọ́nà HHS kí o sì béèrè lọ́wọ́ olùdámọ̀ràn ìtẹ̀lé òfin rẹ. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe àpò irinṣẹ́ AI fún ilé ìwòsàn rẹ: àkọsílẹ̀ iṣẹ́ tí a pín sí \"Kò sí PHI: AI gbogbogbò dára\" àti \"PHI: irinṣẹ́ BAA tí a fọwọ́ sí nìkan, tàbí kò sí AI\"; ọ̀rọ̀ ìpè mẹ́ta fún tábìlì ìgbàlejò; àwòṣe ìfìdímúlẹ̀ àti ìránnilétí ìpàdé pẹ̀lú àmì ìdúrópò; ìwé ìtọ́sọ́nà aláìsàn kan ní èdè tó rọrùn lórí kókó gbogbogbò, tí a kọ \"Fún àyẹ̀wò oníṣègùn\" sí; àti òfin AI ojú-ìwé kan fún òṣìṣẹ́. Kò sí ìsọfúnni aláìsàn gidi kankan nínú rẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olùdásílẹ̀, àwọn alákòóso ọ́fíìsì àti òṣìṣẹ́ tábìlì ìgbàlejò ní àwọn ilé ìwòsàn kékeré: ilé ìwòsàn ẹbí, ọ́fíìsì oníṣègùn eyín, ibi ìtọ́jú ọkàn àti ìgbaninímọ̀ràn, chiropractor, ìtọ́jú ara, ìtọ́jú ojú àti iléeṣẹ́ ìtọ́jú nílé, pẹ̀lú ọ̀pọ̀ ilé ìwòsàn tí àwọn ẹ̀yà kékeré ní, tí wọ́n ń sin àwùjọ wọn.",
    startingPoint: "Wọ́n ń ṣe iṣẹ́ tábìlì ìgbàlejò, ìṣètò àkókò àti ìwé ọ́fíìsì lójoojúmọ́, wọ́n sì mọ ìpìlẹ̀ ìpamọ́ aláìsàn. Ọ̀pọ̀ ti gbọ́ nípa irinṣẹ́ AI tàbí ti gbìyànjú ọ̀kan, ṣùgbọ́n kò dá wọn lójú ohun tí HIPAA fàyè gbà.",
    gap: "Kíkọ̀wé ọ́fíìsì ń gba àkókò tí àwọn ilé ìwòsàn kékeré kò ní, ṣùgbọ́n fífi ìsọfúnni aláìsàn sínú irinṣẹ́ AI tí kò tọ́ lè rú òfin HIPAA, ó sì lè pa àwọn aláìsàn lára. Àwọn akẹ́kọ̀ọ́ nílò òfin tó yé nípa àwọn iṣẹ́ tí ó lè lo AI, àti ọ̀rọ̀ ìpè, àwòṣe, ìwé ìtọ́sọ́nà àti òfin òṣìṣẹ́ tí ó ti ṣetán, tí ó pa ìsọfúnni aláìsàn mọ́ kúrò nínú AI.",
    constraints: [
      "Kò sí PHI nínú irinṣẹ́ AI gbogbogbò kankan; irinṣẹ́ tí ilé ìwòsàn fọwọ́ sí pẹ̀lú àdéhùn alájọṣe òwò nìkan",
      "AI kì í ṣàyẹ̀wò àìsàn, kì í tọ́jú, kì í sì fúnni ní ìmọ̀ràn ìṣègùn; oníṣègùn tí ó ní ìwé àṣẹ ló ń ṣàyẹ̀wò gbogbo ọ̀rọ̀ ìlera fún aláìsàn",
      "Kì í ṣe ìmọ̀ràn òfin tàbí ti ìtẹ̀lé òfin: wo ìtọ́sọ́nà HHS àti olùdámọ̀ràn ìtẹ̀lé òfin ilé ìwòsàn",
      "Àkókò: ọwọ́ tábìlì ìgbàlejò máa ń dí, nítorí náà ẹ̀kọ́ kọ̀ọ̀kan jẹ́ nǹkan bí ìṣẹ́jú 5",
      "Ọ̀rọ̀ tó rọrùn fún òṣìṣẹ́ àti fún ìwé aláìsàn (nǹkan bí ìpele kíkàwé kíláàsì 6)"
    ],
    prerequisites: "Kò sí. Àwọn tí AI jẹ́ tuntun fún lè kọ́kọ́ ṣe ẹ̀kọ́ ìfihàn sí AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ àwọn iṣẹ́ ọ́fíìsì", action: "pín iṣẹ́ kọ̀ọ̀kan sí \"Kò sí PHI: AI gbogbogbò dára\" tàbí \"PHI: irinṣẹ́ BAA tí a fọwọ́ sí nìkan, tàbí kò sí AI\"", standard: "kí gbogbo iṣẹ́ tí ó ní PHI wà nínú ọ̀wọ́n kejì" },
    { id: "O2", condition: "Tí a bá fún ọ ní àwọn ìpè tábìlì ìgbàlejò tí ó wọ́pọ̀", action: "kọ ọ̀rọ̀ ìpè tí ó ń darí ìpè àtúngbà oògùn, àmì àìsàn àti pàjáwìrì sí ibi tí ó tọ́", standard: "tí gbogbo ọ̀rọ̀ ìpè pàjáwìrì sọ fún ẹni tí ń pè pé kí ó pe 911, tí olórí ìtọ́jú sì fọwọ́ sí i" },
    { id: "O3", condition: "Tí o bá ń lo àmì ìdúrópò dípò àlàyé aláìsàn", action: "ṣe àwòṣe ìfìdímúlẹ̀ àti ìránnilétí tí kò sọ ìdí ìbẹ̀wò", standard: "láìsí ìsọfúnni aláìsàn gidi kankan nínú irinṣẹ́ AI" },
    { id: "O4", condition: "Tí a bá fún ọ ní kókó gbogbogbò fún aláìsàn", action: "kọ àkọ́pẹrẹ ìwé ìtọ́sọ́nà ní èdè tó rọrùn kí o sì sàmì sí i fún àyẹ̀wò oníṣègùn", standard: "ní nǹkan bí ìpele kíkàwé kíláàsì 6, pẹ̀lú ìlà ìkànsí rẹ àti àkíyèsí 911" },
    { id: "O5", condition: "Tí a bá fún ọ ní iṣẹ́ kíkọ̀wé ọ́fíìsì bí òfin, ímeèlì tàbí ìpolówó iṣẹ́", action: "kọ àkọ́pẹrẹ rẹ̀ pẹ̀lú irinṣẹ́ AI gbogbogbò kí o sì kọ apá tí ó nílò àyẹ̀wò ìtẹ̀lé òfin tàbí HR sílẹ̀", standard: "láìlo ìsọfúnni aláìsàn kankan" },
    { id: "O6", condition: "Fún ilé ìwòsàn tìrẹ", action: "kọ òfin AI ojú-ìwé kan fún òṣìṣẹ́ pẹ̀lú òfin márùn-ún sí méje", standard: "pẹ̀lú kò sí PHI láìsí BAA, orúkọ àwọn irinṣẹ́ tí a fọwọ́ sí, ìròyìn àṣìṣe àti àtúnyẹ̀wò ọdọọdún" }
  ],
  chapters: [
    {
      name: "Orí 1: HIPAA lákọ̀ọ́kọ́, lẹ́yìn náà tábìlì ìgbàlejò",
      lessons: [
        {
          objectives: ["O1"],
          title: "PHI, HIPAA àti AI: òfin tí ó ṣáájú",
          minutes: 6,
          goal: "Pinnu bóyá iṣẹ́ kan lè lo irinṣẹ́ AI gbogbogbò tàbí ó nílò irinṣẹ́ tí a fọwọ́ sí pẹ̀lú BAA.",
          text: [
            "Ìsọfúnni ìlera tí a dáàbò bò (PHI) ni ìsọfúnni ìlera tí ó lè fi aláìsàn hàn: orúkọ pẹ̀lú àìsàn, ọjọ́ ìbí, àkọsílẹ̀ ìtọ́jú, nọ́mbà ìdánimọ̀ ìbánigbófò, àlàyé ìpàdé, àwòrán àti bẹ́ẹ̀ bẹ́ẹ̀ lọ. HIPAA ni òfin tí ó sọ bí àwọn ilé ìwòsàn ṣe gbọdọ̀ dáàbò bò ó.",
            "Ìtọ́sọ́nà HHS sọ pé nígbà tí covered entity bá lo iṣẹ́ láti òde, bí iṣẹ́ cloud, láti ṣe, gbà, pamọ́ tàbí fi PHI ránṣẹ́, iṣẹ́ náà jẹ́ alájọṣe òwò (business associate), ilé ìwòsàn sì nílò àdéhùn alájọṣe òwò (BAA) pẹ̀lú rẹ̀. Lílo irú iṣẹ́ bẹ́ẹ̀ fún PHI láìsí BAA rú òfin HIPAA. Ọ̀pọ̀ irinṣẹ́ AI ọ̀fẹ́ gbogbogbò kì í fọwọ́ sí BAA pẹ̀lú ẹnìkọ̀ọ̀kan.",
            "Nítorí náà, pín gbogbo iṣẹ́: tí ó bá nílò PHI, lo irinṣẹ́ tí ilé ìwòsàn rẹ fọwọ́ sí tí ó sì ní BAA pẹ̀lú nìkan, tàbí má ṣe lo AI. Tí kò bá nílò PHI, bí ìwé ìtọ́sọ́nà gbogbogbò, ọ̀rọ̀ ìpè tàbí òfin ọ́fíìsì, irinṣẹ́ AI gbogbogbò lè ràn ọ́ lọ́wọ́. Tí kò bá dá ọ lójú, béèrè lọ́wọ́ olùdarí ìtẹ̀lé òfin tàbí olùdarí ìpamọ́ rẹ."
          ],
          steps: ["Kọ àwọn iṣẹ́ ọ́fíìsì tí o fẹ́ ìrànlọ́wọ́ fún sílẹ̀.", "Béèrè: ṣé iṣẹ́ yìí nílò ìsọfúnni aláìsàn kankan?", "Kò sí PHI: irinṣẹ́ AI gbogbogbò lè ràn ọ́ lọ́wọ́.", "PHI: irinṣẹ́ tí a fọwọ́ sí pẹ̀lú BAA nìkan, tàbí kò sí AI.", "Kò dá ọ lójú: béèrè lọ́wọ́ olùdarí ìpamọ́ tàbí ìtẹ̀lé òfin."],
          words: [["PHI", "ìsọfúnni ìlera tí a dáàbò bò (protected health information): ìsọfúnni ìlera tí ó lè fi aláìsàn hàn."], ["HIPAA", "òfin ìjọba àpapọ̀ US tí ó ní àwọn òfin fún dídáàbò bo ìsọfúnni ìlera."], ["Àdéhùn alájọṣe òwò (BAA)", "àdéhùn tí olùpèsè iṣẹ́ fi gbà láti dáàbò bo PHI lábẹ́ HIPAA."], ["Covered entity", "ètò ìbánigbófò ìlera, clearinghouse tàbí olùpèsè ìtọ́jú tí ó gbọdọ̀ tẹ̀lé HIPAA."]],
          slides: [
            { title: "Ohun tí ó jẹ́ PHI", bullets: ["Orúkọ pẹ̀lú àìsàn, ọjọ́ ìbí", "Àkọsílẹ̀ ìtọ́jú, nọ́mbà ìbánigbófò, ìpàdé", "Àwòrán àti àlàyé míì tí ó fi ènìyàn hàn"] },
            { title: "HHS nípa iṣẹ́ láti òde", bullets: ["Iṣẹ́ tí ó ń bójú tó PHI jẹ́ alájọṣe òwò", "Ilé ìwòsàn nílò BAA pẹ̀lú rẹ̀", "PHI láìsí BAA rú òfin HIPAA"] },
            { title: "Pín gbogbo iṣẹ́", bullets: ["Kò sí PHI: AI gbogbogbò lè ràn ọ́ lọ́wọ́", "PHI: irinṣẹ́ BAA tí a fọwọ́ sí nìkan, tàbí kò sí AI", "Kò dá ọ lójú: béèrè lọ́wọ́ olùdarí ìtẹ̀lé òfin"] }
          ],
          sources: [HHS_CLOUD, HHS_BA, HHS_HIPAA],
          tryIt: "Kọ iṣẹ́ mẹ́wàá nínú ọ́fíìsì rẹ sílẹ̀. Pín wọn sí ọ̀wọ́n méjì: \"Kò sí PHI: AI gbogbogbò dára\" àti \"PHI: irinṣẹ́ BAA tí a fọwọ́ sí nìkan, tàbí kò sí AI\".",
          youCanNow: "pinnu bóyá iṣẹ́ ọ́fíìsì kan lè lo irinṣẹ́ AI gbogbogbò tàbí ó nílò irinṣẹ́ tí a fọwọ́ sí pẹ̀lú BAA.",
          quickCheck: [
            { objective: "O1", q: "Èwo nínú ìwọ̀nyí ni PHI?", options: ["Nọ́mbà ìdánimọ̀ ìbánigbófò aláìsàn kan", "Àkókò ìṣísílẹ̀ ọ́fíìsì rẹ", "Ìpolówó iṣẹ́ fún olùgbàlejò", "Ìwé ìtọ́sọ́nà gbogbogbò nípa fífọ ọwọ́"], answer: 0, why: "Nọ́mbà ìbánigbófò jẹ́ ìsọfúnni ìlera tí ó lè fi aláìsàn hàn." },
            { objective: "O1", q: "O fẹ́ kí AI ràn ọ́ lọ́wọ́ láti kọ ọ̀rọ̀ ìpè nípa ibi ìgbọ́kọ̀sí. Irinṣẹ́ wo ni o lè lò?", options: ["Irinṣẹ́ tí ó ní BAA nìkan", "Irinṣẹ́ AI gbogbogbò, nítorí kò nílò PHI", "Kò sí irinṣẹ́ AI kankan", "Fóònù aláìsàn nìkan"], answer: 1, why: "Iṣẹ́ tí kò nílò ìsọfúnni aláìsàn lè lo irinṣẹ́ AI gbogbogbò." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ọ̀rọ̀ ìpè àti ọ̀rọ̀ ìránṣẹ́ fún tábìlì ìgbàlejò",
          minutes: 5,
          goal: "Kọ ọ̀rọ̀ ìpè tó yé tí ó sì ní inú rere fún àwọn ìpè tí ó wọ́pọ̀.",
          text: [
            "Òṣìṣẹ́ tábìlì ìgbàlejò ń gba irú ìpè kan náà lójoojúmọ́: ìbéèrè aláìsàn tuntun, ìbánigbófò tí a gbà, ọ̀nà àti ibi ìgbọ́kọ̀sí, yíyí àkókò ìpàdé padà, ìbéèrè àtúngbà oògùn, ìbéèrè àkọsílẹ̀, àti ẹnì kan tí ó dún bí ẹni tí ó wà nínú pàjáwìrì.",
            "Àwọn ọ̀rọ̀ ìpè yìí kò nílò ìsọfúnni aláìsàn, nítorí náà irinṣẹ́ AI gbogbogbò lè ràn ọ́ lọ́wọ́: \"Kọ ọ̀rọ̀ ìpè kúkúrú tí ó ní inú rere fún ọ́fíìsì oníṣègùn eyín ẹbí, fún aláìsàn tuntun tí ń béèrè bóyá a ń gba ìbánigbófò rẹ̀. Òfin wa: [òfin rẹ]. Kí ó má ju ọ̀rọ̀ 80 lọ.\"",
            "Gbogbo ọ̀rọ̀ ìpè tí ó kan ìtọ́jú gbọdọ̀ darí ẹni náà sí ẹni tí ó tọ́: ìbéèrè àtúngbà oògùn àti àmì àìsàn ń lọ sọ́dọ̀ òṣìṣẹ́ ìtọ́jú, gbogbo ọ̀rọ̀ ìpè pàjáwìrì sì ń sọ fún ẹni tí ń pè pé kí ó gbé fóònù sílẹ̀ kí ó pe 911 tàbí kí ó lọ sí yàrá pàjáwìrì tó sún mọ́ jù. Jẹ́ kí olórí ìtọ́jú rẹ fọwọ́ sí àwọn ọ̀rọ̀ ìpè yìí."
          ],
          steps: ["Kọ ìpè mẹ́wàá tí ó wọ́pọ̀ jù sílẹ̀.", "Béèrè lọ́wọ́ AI fún ọ̀rọ̀ ìpè kúkúrú fún ọ̀kọ̀ọ̀kan, pẹ̀lú òfin rẹ gidi.", "Rí i dájú pé ìbéèrè ìtọ́jú ń lọ sọ́dọ̀ òṣìṣẹ́ ìtọ́jú.", "Fi ìlà pàjáwìrì kún un: pe 911.", "Jẹ́ kí olórí ìtọ́jú rẹ fọwọ́ sí wọn."],
          words: [["Ọ̀rọ̀ ìpè (script)", "ìtọ́sọ́nà kúkúrú nípa ohun tí a ó sọ lórí ìpè tí ó wọ́pọ̀."], ["Triage", "pípinnu bí ìṣòro ìlera ṣe yára tó; òṣìṣẹ́ ìtọ́jú ló ń ṣe é, kì í ṣe tábìlì ìgbàlejò tàbí AI."]],
          slides: [
            { title: "Àwọn ìpè tí ó wọ́pọ̀", bullets: ["Aláìsàn tuntun àti ìbánigbófò", "Ọ̀nà, yíyí ìpàdé padà, àkọsílẹ̀", "Àtúngbà oògùn àti pàjáwìrì tí ó ṣeé ṣe"] },
            { title: "Kò nílò PHI", bullets: ["AI gbogbogbò lè kọ àkọ́pẹrẹ wọn", "Fún un ní òfin rẹ gidi", "Kí ọ̀kọ̀ọ̀kan má ju nǹkan bí ọ̀rọ̀ 80 lọ"] },
            { title: "Darí ìbéèrè ìtọ́jú", bullets: ["Àtúngbà oògùn àti àmì àìsàn -> òṣìṣẹ́ ìtọ́jú", "Pàjáwìrì -> pe 911 tàbí lọ sí yàrá pàjáwìrì", "Olórí ìtọ́jú ló ń fọwọ́ sí ọ̀rọ̀ ìpè"] }
          ],
          tryIt: "Béèrè lọ́wọ́ AI fún ọ̀rọ̀ ìpè mẹ́ta: ìbéèrè ìbánigbófò, yíyí ìpàdé padà, àti ẹni tí ń pè tí ó sọ pé àyà ń dùn òun (èyí tí ó gbọdọ̀ sọ fún un pé kí ó pe 911). Sàmì sí wọn fún olórí ìtọ́jú rẹ láti fọwọ́ sí.",
          youCanNow: "kọ ọ̀rọ̀ ìpè tábìlì ìgbàlejò tí ó ní inú rere, tí ó yé, tí ó sì ń darí ìbéèrè ìtọ́jú láìléwu.",
          quickCheck: [
            { objective: "O2", q: "Ibo ni ọ̀rọ̀ ìpè tábìlì ìgbàlejò yẹ kí ó darí ìbéèrè àtúngbà oògùn sí?", options: ["Sí irinṣẹ́ AI", "Sí ọ́fíìsì owó", "Sí òṣìṣẹ́ ìtọ́jú", "Sí ilé oògùn ẹni tí ń pè nìkan"], answer: 2, why: "Ìbéèrè àtúngbà oògùn àti àmì àìsàn ń lọ sọ́dọ̀ òṣìṣẹ́ ìtọ́jú." },
            { objective: "O2", q: "AI kọ ọ̀rọ̀ ìpè fún ẹni tí kò lè mí dáadáa tí ó sọ pé \"A máa pè ọ́ padà lọ́la.\" Kí ni o máa ṣe?", options: ["Lò ó; ó ní ọ̀wọ̀", "Jẹ́ kí ó kúrú sí i", "Túmọ̀ rẹ̀", "Yí i padà kí ó sọ fún ẹni náà pé kí ó gbé fóònù sílẹ̀ kí ó pe 911 tàbí kí ó lọ sí yàrá pàjáwìrì tó sún mọ́ jù"], answer: 3, why: "Gbogbo ọ̀rọ̀ ìpè pàjáwìrì ń sọ fún ẹni tí ń pè pé kí ó pe 911 tàbí kí ó lọ sí yàrá pàjáwìrì tó sún mọ́ jù." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Àwòṣe ìṣètò àkókò àti ìránnilétí",
          minutes: 5,
          goal: "Ṣe àwòṣe ìfìdímúlẹ̀ àti ìránnilétí ìpàdé tí ó ń dáàbò bo ìpamọ́.",
          text: [
            "Àwòṣe ń fi àkókò pamọ́, ó sì ń dín àwọn tí kò wá kù. Kọ wọ́n pẹ̀lú àmì ìdúrópò: \"Ẹ n lẹ́ o [orúkọ àkọ́kọ́], [orúkọ ilé ìwòsàn] ni èyí, a ń fìdí ìpàdé rẹ múlẹ̀ ní [ọjọ́] ní [àkókò]. Fi C dáhùn láti fìdí rẹ̀ múlẹ̀ tàbí pe [fóònù] láti yí àkókò padà.\"",
            "Jẹ́ kí ìránnilétí kéré. Má ṣe kọ ìdí ìbẹ̀wò tàbí irú oníṣègùn sí i tí ìyẹn bá máa fi ìsọfúnni ẹlẹgẹ́ hàn, bí ìbẹ̀wò ìtọ́jú ọkàn tàbí ti amọ̀jà. Ètò ìṣàkóso ilé ìwòsàn rẹ tàbí ètò ìránṣẹ́ aláìsàn ló ń kọ àlàyé gidi sí i, kì í ṣe irinṣẹ́ AI.",
            "Béèrè lọ́wọ́ AI fún ẹ̀dà ní àwọn èdè míì tí àwọn aláìsàn rẹ ń sọ, lẹ́yìn náà jẹ́ kí òṣìṣẹ́ tí ó gbọ́ èdè náà dáadáa tàbí ògbóǹkangí atúmọ̀ èdè ṣàyẹ̀wò wọn."
          ],
          steps: ["Béèrè lọ́wọ́ AI fún àwòṣe ìfìdímúlẹ̀, ìránnilétí àti yíyí àkókò padà pẹ̀lú àmì ìdúrópò.", "Yọ ohunkóhun tí ó fi ìdí ìbẹ̀wò hàn kúrò.", "Fi wọ́n sínú ètò ìṣètò àkókò rẹ, èyí tí ó ń kọ àlàyé gidi sí i.", "Jẹ́ kí ẹni tí ó gbọ́ èdè dáadáa tàbí ògbóǹkangí ṣàyẹ̀wò ìtúmọ̀."],
          words: [["Ètò ìṣàkóso ilé ìwòsàn", "sọ́fítíwéà tí ilé ìwòsàn ń lò fún ìṣètò àkókò àti owó."], ["Ìwọ̀n tí ó pọndandan (minimum necessary)", "èrò HIPAA pé kí a lo tàbí pín ìsọfúnni tí a nílò fún iṣẹ́ náà nìkan."]],
          slides: [
            { title: "Àwòṣe pẹ̀lú àmì ìdúrópò", bullets: ["[orúkọ àkọ́kọ́], [ọjọ́], [àkókò], [fóònù]", "Irinṣẹ́ AI kò rí àlàyé gidi rárá"] },
            { title: "Jẹ́ kí ìránnilétí kéré", bullets: ["Má ṣe kọ ìdí ìbẹ̀wò", "Ṣọ́ra pẹ̀lú àwọn ẹ̀ka ìtọ́jú ẹlẹgẹ́", "Ètò ìṣètò àkókò rẹ ló ń kọ àlàyé sí i"] },
            { title: "Àwọn èdè míì", bullets: ["AI ń kọ àkọ́pẹrẹ ìtúmọ̀", "Ẹni tí ó gbọ́ èdè dáadáa tàbí ògbóǹkangí ń ṣàyẹ̀wò wọn"] }
          ],
          tryIt: "Béèrè lọ́wọ́ AI fún àwòṣe ìfìdímúlẹ̀, ìránnilétí ọjọ́ tí ó ṣáájú, àti àwòṣe yíyí àkókò padà pẹ̀lú àmì ìdúrópò. Yọ ohunkóhun tí ó fi hàn ìdí tí aláìsàn fi ń bọ̀ kúrò.",
          youCanNow: "ṣe àwòṣe ìpàdé tí ó bọ̀wọ̀ fún ìpamọ́ pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O3", q: "Kí ló ń kọ àlàyé aláìsàn gidi sínú ìránnilétí?", options: ["Ètò ìṣàkóso ilé ìwòsàn tàbí ètò ìránṣẹ́ rẹ", "Irinṣẹ́ AI gbogbogbò", "Ilé-iṣẹ́ ìbánigbófò aláìsàn", "Kàlẹ́ńdà tí a tẹ̀ jáde"], answer: 0, why: "Ètò ìṣètò àkókò tàbí ètò ìránṣẹ́ rẹ ló ń kọ àlàyé gidi sí i, kì í ṣe irinṣẹ́ AI." },
            { objective: "O3", q: "Àwòṣe ìránnilétí kan sọ pé \"ìpàdé ìtọ́jú ọkàn rẹ.\" Kí ni o máa yí padà?", options: ["Kò sí nǹkan", "Yọ ọ̀rọ̀ \"ìtọ́jú ọkàn\" kúrò kí ó má fi ìsọfúnni ẹlẹgẹ́ hàn", "Fi orúkọ àìsàn kún un", "Fi fóònù ilé oníṣègùn kún un"], answer: 1, why: "Má ṣe kọ ìdí ìbẹ̀wò tàbí irú oníṣègùn tí ìyẹn bá máa fi ìsọfúnni ẹlẹgẹ́ hàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: HIPAA lákọ̀ọ́kọ́, lẹ́yìn náà tábìlì ìgbàlejò",
        questions: [
          { objective: "O1", q: "Èwo ni ìsọfúnni ìlera tí a dáàbò bò (PHI)?", options: ["Ọ̀nà sí ibi ìgbọ́kọ̀sí ọ́fíìsì rẹ", "Orúkọ aláìsàn pẹ̀lú àìsàn rẹ̀", "Ìwé ìtọ́sọ́nà gbogbogbò nípa fífọ ọwọ́", "Àkókò ìṣísílẹ̀ ọ́fíìsì rẹ"], answer: 1, why: "Ìsọfúnni ìlera tí ó fi aláìsàn hàn jẹ́ PHI." },
          { objective: "O1", q: "Gẹ́gẹ́ bí HHS ṣe sọ, iṣẹ́ tí ó ń pa PHI mọ́ fún ilé ìwòsàn rẹ nílò:", options: ["Ọ̀rọ̀ aṣínà aláìsàn", "Kò sí nǹkan", "Àkáǹtì social media", "Àdéhùn alájọṣe òwò"], answer: 3, why: "Iṣẹ́ tí ó ń bójú tó PHI jẹ́ alájọṣe òwò, wọ́n sì nílò BAA." },
          { objective: "O1", q: "O fẹ́ kí AI ṣe àkópọ̀ àkọsílẹ̀ ìtọ́jú aláìsàn kan. Ilé ìwòsàn rẹ kò ní BAA pẹ̀lú irinṣẹ́ náà. Kí ni o máa ṣe?", options: ["Má ṣe lo irinṣẹ́ yẹn fún un", "Lẹ̀ àkọsílẹ̀ náà sínú rẹ̀", "Yọ orúkọ ìdílé nìkan kí o sì lẹ̀ ẹ́", "Béèrè lọ́wọ́ ọ̀rẹ́ kan"], answer: 0, why: "PHI ń wọ inú irinṣẹ́ tí a fọwọ́ sí pẹ̀lú BAA nìkan." },
          { objective: "O2", q: "Ẹni tí ń pè sọ pé àyà ń dùn òun. Ọ̀rọ̀ ìpè yẹ kí ó:", options: ["Béèrè lọ́wọ́ AI kí ó sọ àìsàn náà", "Ṣètò ìpàdé fún un ní ọ̀sẹ̀ tí ń bọ̀", "Sọ fún un pé kí ó pe 911 tàbí lọ sí yàrá pàjáwìrì tó sún mọ́ jù", "Ní kí ó dúró lórí fóònù"], answer: 2, why: "Pàjáwìrì ń lọ sí 911." },
          { objective: "O3", q: "Kí ni ìránnilétí ọ̀rọ̀ ìránṣẹ́ yẹ kí ó fi sílẹ̀?", options: ["Àkókò", "Ọjọ́", "Ìdí ìbẹ̀wò", "Nọ́mbà fóònù ilé ìwòsàn"], answer: 2, why: "Ìránnilétí tí ó kéré ń dáàbò bo ìpamọ́." }
        ]
      }
    },
    {
      name: "Orí 2: Ìwé aláìsàn, iṣẹ́ ọ́fíìsì àti òfin òṣìṣẹ́",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ìwé ìtọ́sọ́nà aláìsàn ní èdè tó rọrùn, tí oníṣègùn ṣàyẹ̀wò",
          minutes: 5,
          goal: "Kọ àkọ́pẹrẹ ìwé ìtọ́sọ́nà aláìsàn gbogbogbò ní ọ̀rọ̀ tó rọrùn kí o sì fi ránṣẹ́ fún àyẹ̀wò oníṣègùn.",
          text: [
            "Ọ̀pọ̀ aláìsàn ló ń tiraka pẹ̀lú èdè ìṣègùn. AI mọ bí a ṣe ń tún ìsọfúnni gbogbogbò kọ ní ọ̀rọ̀ tó rọrùn: bí a ṣe ń múra sílẹ̀ fún ìfọ̀mọ́ eyín, ohun tí a ó mú wá sí ìbẹ̀wò àkọ́kọ́, ìmọ̀ràn gbogbogbò nípa ṣíṣe eré ìdárayá.",
            "Lo kókó gbogbogbò nìkan, má ṣe lo àlàyé aláìsàn kan pàtó láéláé. Béèrè: \"Kọ ìwé ìtọ́sọ́nà ojú-ìwé kan ní nǹkan bí ìpele kíkàwé kíláàsì 6 nípa bí a ṣe ń múra sílẹ̀ fún ìbẹ̀wò ìtọ́jú ara àkọ́kọ́. Gbólóhùn kúkúrú, àkọlé, kò sí ìmọ̀ràn ìṣègùn ju ìmúrasílẹ̀ gbogbogbò lọ.\"",
            "AI lè ṣàṣìṣe nípa òtítọ́ ìlera. Kọ \"Fún àyẹ̀wò oníṣègùn\" sí gbogbo àkọ́pẹrẹ, kí oníṣègùn tí ó ní ìwé àṣẹ sì ṣàyẹ̀wò rẹ̀ kí ó fọwọ́ sí i kí aláìsàn kankan tó rí i. Fi ìlà ìkànsí ilé ìwòsàn rẹ kún un, àti àkíyèsí pé kí wọ́n pe 911 nígbà pàjáwìrì."
          ],
          steps: ["Yan kókó gbogbogbò tí àwọn aláìsàn máa ń béèrè nípa rẹ̀.", "Béèrè lọ́wọ́ AI fún àkọ́pẹrẹ ní èdè tó rọrùn pẹ̀lú àkọlé.", "Kọ \"Fún àyẹ̀wò oníṣègùn\" sí i.", "Oníṣègùn tí ó ní ìwé àṣẹ ń tún un ṣe, ó sì ń fọwọ́ sí i.", "Fi ìlà ìkànsí rẹ àti àkíyèsí 911 kún un."],
          words: [["Èdè tó rọrùn", "kíkọ̀wé tí ọ̀pọ̀ ènìyàn máa ń yé nígbà àkọ́kọ́ tí wọ́n bá kà á."], ["Ìpele kíkàwé", "bí ọ̀rọ̀ kan ṣe ṣòro tó láti kà, tí a sábà máa ń fi kíláàsì ilé-ìwé sọ."]],
          slides: [
            { title: "Ọ̀rọ̀ tó rọrùn ń ran aláìsàn lọ́wọ́", bullets: ["Bí a ṣe ń múra sílẹ̀ fún ìbẹ̀wò", "Ohun tí a ó mú wá", "Ìwà ìlera gbogbogbò"] },
            { title: "Kókó gbogbogbò nìkan", bullets: ["Láéláé, kì í ṣe àlàyé aláìsàn kan pàtó", "Béèrè fún nǹkan bí ìpele kíkàwé kíláàsì 6"] },
            { title: "Àyẹ̀wò oníṣègùn", bullets: ["Kọ \"Fún àyẹ̀wò oníṣègùn\" sí àkọ́pẹrẹ", "Oníṣègùn tí ó ní ìwé àṣẹ ń fọwọ́ sí i", "Fi ìlà ìkànsí àti àkíyèsí 911 kún un"] }
          ],
          tryIt: "Béèrè lọ́wọ́ AI fún ìwé ìtọ́sọ́nà ojú-ìwé kan lórí kókó gbogbogbò fún ilé ìwòsàn rẹ. Kọ \"Fún àyẹ̀wò oníṣègùn\" sí i, kí o sì kọ òtítọ́ méjì tí oníṣègùn yẹ kí ó ṣàyẹ̀wò sílẹ̀.",
          youCanNow: "kọ àkọ́pẹrẹ ìwé ìtọ́sọ́nà aláìsàn ní èdè tó rọrùn pẹ̀lú AI, kí o sì fi wọ́n ránṣẹ́ fún ìfọwọ́sí oníṣègùn.",
          quickCheck: [
            { objective: "O4", q: "Kókó wo ló bá àkọ́pẹrẹ ìwé ìtọ́sọ́nà AI gbogbogbò mu?", options: ["Èsì àyẹ̀wò Ọ̀gbẹ́ni Lee", "Ìyípadà oògùn aláìsàn kan", "Ohun tí a ó mú wá sí ìbẹ̀wò àkọ́kọ́", "Orúkọ àìsàn fún ẹni tí ń pè"], answer: 2, why: "Lo kókó gbogbogbò nìkan, má ṣe lo àlàyé aláìsàn kan pàtó láéláé." },
            { objective: "O4", q: "Àkọ́pẹrẹ ìwé ìtọ́sọ́nà AI dára lójú. Kí ni o máa ṣe kí aláìsàn tó rí i?", options: ["Tẹ̀ ẹ́ jáde lẹ́sẹ̀kẹsẹ̀", "Gbé e sórí ojú-òpó wẹ́ẹ̀bù", "Béèrè lọ́wọ́ AI bóyá ó tọ̀nà", "Kọ \"Fún àyẹ̀wò oníṣègùn\" sí i kí oníṣègùn tí ó ní ìwé àṣẹ sì fọwọ́ sí i"], answer: 3, why: "AI lè ṣàṣìṣe nípa òtítọ́ ìlera, nítorí náà oníṣègùn tí ó ní ìwé àṣẹ ń ṣàyẹ̀wò gbogbo àkọ́pẹrẹ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Òfin ọ́fíìsì, ímeèlì àti ìpolówó iṣẹ́",
          minutes: 4,
          goal: "Lo AI fún ìwé ọ́fíìsì tí kò nílò ìsọfúnni aláìsàn.",
          text: [
            "Púpọ̀ nínú ṣíṣe ilé ìwòsàn jẹ́ kíkọ̀wé òwò lásán: òfin fífagilé àti àìwá sí ìpàdé, ímeèlì òṣìṣẹ́ nípa ètò fóònù tuntun, ìpolówó iṣẹ́ fún olùrànlọ́wọ́ ìṣègùn, lẹ́tà ẹ̀sùn sí olùpèsè, àkọsílẹ̀ ohun tí òṣìṣẹ́ tuntun máa ṣe.",
            "Àwọn wọ̀nyí kò nílò PHI, nítorí náà irinṣẹ́ AI gbogbogbò lè kọ àkọ́pẹrẹ wọn. Fún un ní òfin àti àlàyé rẹ gidi: \"Kọ àkọ́pẹrẹ òfin àìwá sí ìpàdé tí ó ní inú rere fún ibi ìgbaninímọ̀ràn: ìkìlọ̀ wákàtí 24, owó ìtanràn $50 lẹ́yìn àìwá kejì. Ọ̀rọ̀ tó rọrùn.\"",
            "Ṣàyẹ̀wò gbogbo òfin tí ó kan òfin ìjọba: owó ìtanràn, iṣẹ́ òṣìṣẹ́, ìsanwó àti ẹ̀tọ́ aláìsàn lè ní òfin tí ó ń darí wọn. Jẹ́ kí olùdámọ̀ràn ìtẹ̀lé òfin, olùdámọ̀ràn HR tàbí agbẹjọ́rò rẹ ṣàyẹ̀wò wọn kí o tó gbé wọn jáde."
          ],
          steps: ["Yan ìwé ọ́fíìsì tí kò ní ìsọfúnni aláìsàn.", "Fún AI ní àlàyé òfin rẹ gidi.", "Tún un ṣe kí ó dún bí ìwọ.", "Jẹ́ kí olùdámọ̀ràn ìtẹ̀lé òfin, HR tàbí òfin ṣàyẹ̀wò ohunkóhun tí òfin ń darí."],
          words: [["Òfin àìwá sí ìpàdé", "àwọn òfin ilé ìwòsàn fún ìpàdé tí aláìsàn kò wá."], ["Olùdámọ̀ràn ìtẹ̀lé òfin", "ẹni tí ó ń ran ilé ìwòsàn lọ́wọ́ láti tẹ̀lé òfin àti ìlànà ìtọ́jú ìlera."]],
          slides: [
            { title: "Kíkọ̀wé òwò lásán", bullets: ["Òfin fífagilé àti àìwá sí ìpàdé", "Ímeèlì òṣìṣẹ́ àti ìpolówó iṣẹ́", "Lẹ́tà olùpèsè àti àkọsílẹ̀ iṣẹ́"] },
            { title: "Kò sí PHI: AI gbogbogbò lè ràn ọ́ lọ́wọ́", bullets: ["Fún un ní àlàyé rẹ gidi", "Tún un ṣe kí ó dún bí ìwọ"] },
            { title: "Ṣàyẹ̀wò àwọn kókó tí òfin ń darí", bullets: ["Owó ìtanràn, iṣẹ́ òṣìṣẹ́, ìsanwó, ẹ̀tọ́ aláìsàn", "Àyẹ̀wò ìtẹ̀lé òfin, HR tàbí agbẹjọ́rò"] }
          ],
          tryIt: "Béèrè lọ́wọ́ AI láti kọ àkọ́pẹrẹ òfin àìwá sí ìpàdé fún ilé ìwòsàn rẹ tàbí ìpolówó iṣẹ́ fún tábìlì ìgbàlejò. Kọ ohunkóhun tí ó nílò àyẹ̀wò ìtẹ̀lé òfin tàbí HR sílẹ̀.",
          youCanNow: "lo AI fún ìwé ọ́fíìsì tí kò ní ìsọfúnni aláìsàn, pẹ̀lú àwọn àyẹ̀wò tí ó tọ́.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni kíkọ̀wé òwò lásán tí kò nílò PHI?", options: ["Àkọsílẹ̀ iṣẹ́ fún òṣìṣẹ́ tuntun", "Àkọsílẹ̀ ìtọ́jú aláìsàn kan", "Lẹ́tà èsì àyẹ̀wò sí aláìsàn kan", "Ìwé ìtọ́kasí tí ó ní orúkọ àìsàn"], answer: 0, why: "Òfin, ímeèlì, ìpolówó iṣẹ́ àti àkọsílẹ̀ iṣẹ́ kò nílò ìsọfúnni aláìsàn." },
            { objective: "O5", q: "AI kọ àkọ́pẹrẹ òfin àìwá sí ìpàdé tí ó ní owó ìtanràn. Kí ni o máa ṣe kí o tó gbé e jáde?", options: ["Gbé e jáde lẹ́sẹ̀kẹsẹ̀", "Jẹ́ kí olùdámọ̀ràn ìtẹ̀lé òfin, olùdámọ̀ràn HR tàbí agbẹjọ́rò ṣàyẹ̀wò rẹ̀", "Sọ owó ìtanràn di ìlọ́po méjì", "Yọ ọjọ́ kúrò"], answer: 1, why: "Owó ìtanràn àti ẹ̀tọ́ aláìsàn lè ní òfin tí ó ń darí wọn, nítorí náà olùdámọ̀ràn ló kọ́kọ́ ń ṣàyẹ̀wò wọn." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kíkọ òfin AI fún ilé ìwòsàn rẹ",
          minutes: 5,
          goal: "Kọ òfin AI ojú-ìwé kan fún òṣìṣẹ́ kí o sì parí àpò irinṣẹ́ AI ilé ìwòsàn rẹ.",
          text: [
            "Òṣìṣẹ́ lè ti máa lo AI lórí fóònù wọn. Òfin kíkọ kúkúrú ń dáàbò bo àwọn aláìsàn àti ilé ìwòsàn. Òfin márùn-ún sí méje tó láti bẹ̀rẹ̀.",
            "Àpẹẹrẹ òfin: (1) Kò sí PHI nínú irinṣẹ́ AI kankan àfi tí ilé ìwòsàn bá fọwọ́ sí i tí ó sì ní BAA. (2) A kọ orúkọ àwọn irinṣẹ́ tí a fọwọ́ sí sílẹ̀. (3) AI kì í fún aláìsàn ní orúkọ àìsàn tàbí ìmọ̀ràn ìtọ́jú láéláé. (4) Oníṣègùn tí ó ní ìwé àṣẹ ló ń fọwọ́ sí gbogbo ọ̀rọ̀ ìlera fún aláìsàn. (5) Òṣìṣẹ́ ń ṣàyẹ̀wò òtítọ́ inú àkọ́pẹrẹ AI. (6) Sọ fún olùdarí ìpamọ́ lẹ́sẹ̀kẹsẹ̀ tí PHI bá wọ inú AI láìmọ̀ọ́mọ̀. (7) A ń ṣàtúnyẹ̀wò òfin náà lọ́dọọdún.",
            "Lo AI láti mú ọ̀rọ̀ rẹ̀ ṣe kedere sí i, lẹ́yìn náà jẹ́ kí olùdarí ìpamọ́ tàbí ìtẹ̀lé òfin rẹ fọwọ́ sí i, kọ́ òṣìṣẹ́, kí o sì pa ẹ̀dà tí wọ́n fọwọ́ sí mọ́."
          ],
          steps: ["Kọ àkọ́pẹrẹ òfin márùn-ún sí méje.", "Kọ orúkọ àwọn irinṣẹ́ tí a fọwọ́ sí sílẹ̀.", "Fi bí a ṣe ń ròyìn àṣìṣe kún un.", "Béèrè lọ́wọ́ AI láti mú ọ̀rọ̀ rẹ̀ ṣe kedere sí i.", "Gba ìfọwọ́sí ìtẹ̀lé òfin, kọ́ òṣìṣẹ́, kí o sì pa ẹ̀dà tí wọ́n fọwọ́ sí mọ́."],
          words: [["Olùdarí ìpamọ́ (privacy officer)", "ẹni tí ó ń bójú tó ìpamọ́ HIPAA nínú ilé ìwòsàn."], ["Irinṣẹ́ tí a fọwọ́ sí", "irinṣẹ́ tí ilé ìwòsàn ti ṣàyẹ̀wò tí ó sì fàyè gbà, pẹ̀lú BAA tí ó bá ń bójú tó PHI."]],
          slides: [
            { title: "Ìdí tí a fi nílò òfin", bullets: ["Òṣìṣẹ́ lè ti máa lo AI", "Ó ń dáàbò bo aláìsàn àti ilé ìwòsàn"] },
            { title: "Òfin pàtàkì", bullets: ["Kò sí PHI láìsí irinṣẹ́ BAA tí a fọwọ́ sí", "AI kì í fúnni ní orúkọ àìsàn tàbí ìmọ̀ràn ìtọ́jú", "Oníṣègùn ló ń fọwọ́ sí ọ̀rọ̀ ìlera fún aláìsàn"] },
            { title: "Jẹ́ kí ó ṣiṣẹ́", bullets: ["Ròyìn PHI tí ó wọ AI láìmọ̀ọ́mọ̀ lẹ́sẹ̀kẹsẹ̀", "Ìtẹ̀lé òfin ń fọwọ́ sí i; kọ́ òṣìṣẹ́", "Ṣàtúnyẹ̀wò rẹ̀ lọ́dọọdún"] }
          ],
          sources: [HHS_BA],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ òfin AI ojú-ìwé kan fún òṣìṣẹ́, kí o sì kó àpò irinṣẹ́ AI ilé ìwòsàn rẹ jọ: àkọsílẹ̀ iṣẹ́ tí a pín, ọ̀rọ̀ ìpè mẹ́ta, àwòṣe ìránnilétí, ìwé ìtọ́sọ́nà tí a kọ \"Fún àyẹ̀wò oníṣègùn\" sí, àti òfin náà. Ṣàyẹ̀wò pé kò sí ìsọfúnni aláìsàn gidi kankan níbìkíbi.",
          youCanNow: "darí lílo AI láìléwu nínú ilé ìwòsàn pẹ̀lú òfin tó yé àti irinṣẹ́ tó wúlò tí kò ní PHI.",
          quickCheck: [
            { objective: "O6", q: "Òfin mélòó ni ẹ̀kọ́ náà dámọ̀ràn fún òfin AI àkọ́kọ́?", options: ["Ọ̀kan", "Àádọ́ta", "Márùn-ún sí méje", "Kò sí; sọ fún òṣìṣẹ́ lẹ́nu nìkan"], answer: 2, why: "Òfin márùn-ún sí méje tó láti bẹ̀rẹ̀." },
            { objective: "O6", q: "Àkọ́pẹrẹ òfin AI rẹ ti ṣetán. Kí ni àwọn ìgbésẹ̀ tó kàn?", options: ["Fi í sínú àpótí", "Gbé e sórí íńtánẹ́ẹ̀tì fún àwọn aláìsàn", "Jẹ́ kí òṣìṣẹ́ kọ̀ọ̀kan yí i padà", "Jẹ́ kí olùdarí ìpamọ́ tàbí ìtẹ̀lé òfin fọwọ́ sí i, kọ́ òṣìṣẹ́, kí o sì pa ẹ̀dà tí wọ́n fọwọ́ sí mọ́"], answer: 3, why: "Olùdarí náà ń fọwọ́ sí i, a ń kọ́ òṣìṣẹ́, o sì ń pa ẹ̀dà tí wọ́n fọwọ́ sí mọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìwé aláìsàn, iṣẹ́ ọ́fíìsì àti òfin òṣìṣẹ́",
        questions: [
          { objective: "O4", q: "Ta ló ń fọwọ́ sí ìwé ìtọ́sọ́nà aláìsàn tí AI kọ àkọ́pẹrẹ rẹ̀?", options: ["Oníṣègùn tí ó ní ìwé àṣẹ", "AI", "Tábìlì ìgbàlejò nìkan", "Aláìsàn kan"], answer: 0, why: "Oníṣègùn ló ń ṣàyẹ̀wò òtítọ́ ìlera." },
          { objective: "O4", q: "Kókó wo ló dára fún àkọ́pẹrẹ ìwé ìtọ́sọ́nà AI gbogbogbò?", options: ["Àkọsílẹ̀ ìtọ́jú", "Èsì àyẹ̀wò Ọ̀gbẹ́ni Lee", "Àkọsílẹ̀ oògùn aláìsàn kan", "Bí a ṣe ń múra sílẹ̀ fún ìbẹ̀wò àkọ́kọ́"], answer: 3, why: "Kókó gbogbogbò kò ní PHI." },
          { objective: "O5", q: "Iṣẹ́ ọ́fíìsì wo ló lè lo irinṣẹ́ AI gbogbogbò?", options: ["Ṣíṣe àkópọ̀ àkọsílẹ̀ ìbẹ̀wò aláìsàn kan", "Ìpolówó iṣẹ́ fún olùrànlọ́wọ́ ìṣègùn", "Kíkọ lẹ́tà tí ó ní orúkọ àìsàn aláìsàn kan", "Kíkọ kóòdù ìbéèrè owó aláìsàn kan pàtó"], answer: 1, why: "Kò ní ìsọfúnni aláìsàn kankan." },
          { objective: "O6", q: "Òṣìṣẹ́ kan lẹ̀ orúkọ àti àìsàn aláìsàn kan sínú irinṣẹ́ AI ọ̀fẹ́ láìmọ̀ọ́mọ̀. Kí ni òfin náà yẹ kí ó sọ pé kí ó ṣe?", options: ["Sọ fún olùdarí ìpamọ́ lẹ́sẹ̀kẹsẹ̀", "Fi í pamọ́", "Pa kọ̀mpútà rẹ́", "Má ṣe nǹkan kan"], answer: 0, why: "Ìròyìn kíákíá ń jẹ́ kí ilé ìwòsàn dáhùn bí ó ti tọ́." },
          { objective: "O6", q: "Èwo ni òfin AI tó dára?", options: ["PHI lè lọ síbikíbi", "Irinṣẹ́ èyíkéyìí dára", "AI kì í fún aláìsàn ní orúkọ àìsàn tàbí ìmọ̀ràn ìtọ́jú láéláé", "Kò sí ẹni tí ó ń ṣàyẹ̀wò ọ̀rọ̀ AI"], answer: 2, why: "Ìpinnu ìtọ́jú wà lọ́wọ́ oníṣègùn tí ó ní ìwé àṣẹ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Àwọn Ilé Ìwòsàn Kékeré",
    questions: [
      { objective: "O1", q: "PHI dúró fún:", options: ["Public health insurance (ìbánigbófò ìlera ìjọba)", "Protected health information (ìsọfúnni ìlera tí a dáàbò bò)", "Private home inspection (àyẹ̀wò ilé àdáni)", "Primary health index (atọ́ka ìlera àkọ́kọ́)"], answer: 1, why: "Ó jẹ́ ìsọfúnni ìlera tí ó fi aláìsàn hàn." },
      { objective: "O1", q: "Èwo ni PHI?", options: ["Pósítà gbogbogbò nípa àkókò ibà flu", "Àkókò ìṣísílẹ̀ ọ́fíìsì", "Ọ̀nà sí ibi ìgbọ́kọ̀sí", "Ọjọ́ ìbí pẹ̀lú irú ìpàdé"], answer: 3, why: "Àlàyé tí ó fi ènìyàn hàn pẹ̀lú ìsọfúnni ìlera jẹ́ PHI." },
      { objective: "O1", q: "BAA ni:", options: ["Fọ́ọ̀mù aláìsàn", "Kóòdù ìsanwó", "Káàdì ìbánigbófò", "Àdéhùn tí olùpèsè iṣẹ́ fi gbà láti dáàbò bo PHI"], answer: 3, why: "Àdéhùn alájọṣe òwò ń bo bí a ṣe ń bójú tó PHI." },
      { objective: "O1", q: "Ọ̀pọ̀ irinṣẹ́ AI ọ̀fẹ́ gbogbogbò:", options: ["Ni HIPAA ti fọwọ́ sí nígbà gbogbo", "Kì í fọwọ́ sí BAA pẹ̀lú ẹnìkọ̀ọ̀kan", "Ni HHS ń ṣàkóso", "Ń pa gbogbo nǹkan rẹ́ lẹ́sẹ̀kẹsẹ̀"], answer: 1, why: "Má ṣe rò pé a ti fọwọ́ sí irinṣẹ́ gbogbogbò fún PHI." },
      { objective: "O1", q: "Tí kò bá dá ọ lójú bóyá iṣẹ́ kan lè lo AI, béèrè lọ́wọ́:", options: ["Aláìsàn kan", "Irinṣẹ́ AI náà", "Olùdarí ìpamọ́ tàbí ìtẹ̀lé òfin rẹ", "Ẹgbẹ́ social media kan"], answer: 2, why: "Àwọn ni wọ́n ń pinnu ohun tí a fọwọ́ sí." },
      { objective: "O1", q: "Ibo ni òṣìṣẹ́ ti lè rí ìtọ́sọ́nà HIPAA ti ìjọba?", options: ["hhs.gov", "Búlọ́ọ̀gù èyíkéyìí", "App ìjíròrò", "Ọ̀rọ̀ àsọyé lábẹ́ ìròyìn"], answer: 0, why: "HHS ló ń gbé ìtọ́sọ́nà HIPAA jáde." },
      { objective: "O2", q: "Ìbéèrè àtúngbà oògùn àti àmì àìsàn lórí fóònù ń lọ sọ́dọ̀:", options: ["Voicemail títí láé", "AI", "Òṣìṣẹ́ ìtọ́jú", "Ọ́fíìsì owó"], answer: 2, why: "Ìbéèrè ìtọ́jú nílò òṣìṣẹ́ ìtọ́jú." },
      { objective: "O2", q: "Ta ló ń fọwọ́ sí ọ̀rọ̀ ìpè tábìlì ìgbàlejò tí ó kan ìtọ́jú?", options: ["Olórí ìtọ́jú", "Òṣìṣẹ́ tí ó ṣẹ̀ṣẹ̀ dé jù", "AI", "Olùpèsè iṣẹ́ kan"], answer: 0, why: "Ìfọwọ́sí ìtọ́jú ń jẹ́ kí ọ̀rọ̀ ìpè wà láìléwu." },
      { objective: "O2", q: "Ta ló ń ṣe triage?", options: ["AI", "Òṣìṣẹ́ ìtọ́jú", "Tábìlì ìgbàlejò nìkan", "Àwọn ọ̀rẹ́ aláìsàn"], answer: 1, why: "Pípinnu bí nǹkan ṣe yára tó jẹ́ iṣẹ́ ìtọ́jú." },
      { objective: "O3", q: "Èwo ni àwòṣe ìránnilétí tó dára?", options: ["Nọ́mbà ìbánigbófò aláìsàn", "\"Ẹ n lẹ́ o Jane, a ń fìdí ìpàdé àtẹ̀lé HIV rẹ múlẹ̀\"", "Àkọsílẹ̀ ìtọ́jú", "\"Ẹ n lẹ́ o [orúkọ àkọ́kọ́], a ń fìdí ìpàdé rẹ múlẹ̀ ní [ọjọ́] ní [àkókò].\""], answer: 3, why: "Àmì ìdúrópò, kò sì sí ìdí ìbẹ̀wò." },
      { objective: "O3", q: "Kí ló ń kọ àlàyé aláìsàn gidi sínú ìránnilétí?", options: ["Ètò ìṣètò àkókò tàbí ètò ìránṣẹ́ rẹ", "Irinṣẹ́ AI gbogbogbò", "Fóònù olùyọ̀ǹda kan", "Social media"], answer: 0, why: "Àlàyé gidi ń wà nínú ètò tí a fọwọ́ sí." },
      { objective: "O3", q: "Ta ló yẹ kí ó ṣàyẹ̀wò ìránnilétí tí AI túmọ̀?", options: ["Aláìsàn kan", "Kò sí ẹnìkan", "AI lẹ́ẹ̀kan sí i", "Òṣìṣẹ́ tí ó gbọ́ èdè náà dáadáa tàbí ògbóǹkangí atúmọ̀ èdè"], answer: 3, why: "Ìtúmọ̀ lè ní àṣìṣe." },
      { objective: "O4", q: "Ìpele kíkàwé tó dára fún ìwé ìtọ́sọ́nà aláìsàn gbogbogbò jẹ́ nǹkan bí:", options: ["Ilé-ìwé ìṣègùn", "Ẹni tí ó jáde ní yunifásítì", "Kíláàsì 6", "Kò sí ọ̀rọ̀ rárá"], answer: 2, why: "Èdè tó rọrùn ń ran àwọn aláìsàn púpọ̀ sí i lọ́wọ́ láti lóye." },
      { objective: "O4", q: "Kí la máa ń kọ sí gbogbo àkọ́pẹrẹ ìwé ìtọ́sọ́nà AI?", options: ["\"Ó ti parí\"", "\"Fún àyẹ̀wò oníṣègùn\"", "\"Àṣírí\"", "\"AI ti fọwọ́ sí i\""], answer: 1, why: "Oníṣègùn gbọdọ̀ fọwọ́ sí ọ̀rọ̀ ìlera." },
      { objective: "O4", q: "Ìwé ìtọ́sọ́nà aláìsàn yẹ kí ó ní:", options: ["Kò sí nǹkan míì", "Ìtàn àwọn aláìsàn míì pẹ̀lú orúkọ wọn", "Orúkọ àìsàn fún olùkàwé kọ̀ọ̀kan", "Ìlà ìkànsí rẹ àti àkíyèsí 911 fún pàjáwìrì"], answer: 3, why: "Àwọn aláìsàn nílò láti mọ bí wọ́n ṣe lè rí ìrànlọ́wọ́." },
      { objective: "O5", q: "Ìwé wo ló nílò àyẹ̀wò ìtẹ̀lé òfin tàbí HR?", options: ["Àkọlé àkókò iṣẹ́ ọjọ́ ìsinmi", "Lẹ́tà ọpẹ́ sí òṣìṣẹ́ fún àríyá", "Òfin owó ìtanràn àìwá sí ìpàdé", "Máàpù ibi ìgbọ́kọ̀sí"], answer: 2, why: "Owó ìtanràn àti ẹ̀tọ́ aláìsàn lè ní òfin tí ó ń darí wọn." },
      { objective: "O5", q: "Ímeèlì òṣìṣẹ́ nípa ètò fóònù tuntun:", options: ["Kò nílò PHI, nítorí náà AI gbogbogbò lè ràn ọ́ lọ́wọ́", "Gbọdọ̀ ní orúkọ aláìsàn", "Nílò BAA", "Kò ṣeé kọ"], answer: 0, why: "Kò sí ìsọfúnni aláìsàn kankan nínú rẹ̀." },
      { objective: "O6", q: "Òfin AI yẹ kí ó kọ:", options: ["Orúkọ àwọn aláìsàn", "Orúkọ àwọn irinṣẹ́ tí a fọwọ́ sí", "Ọ̀rọ̀ aṣínà òṣìṣẹ́", "Kò sí nǹkan pàtó"], answer: 1, why: "Òṣìṣẹ́ nílò láti mọ àwọn irinṣẹ́ tí a fàyè gbà." },
      { objective: "O6", q: "Ìgbà mélòó ló yẹ kí a ṣàtúnyẹ̀wò òfin AI?", options: ["Láéláé", "Ó kéré tán lọ́dọọdún", "Lẹ́ẹ̀kan ní ọdún mẹ́wàá", "Lẹ́yìn ìtanràn nìkan"], answer: 1, why: "Irinṣẹ́ àti òfin ń yí padà." },
      { objective: "O6", q: "Nínú ẹ̀kọ́ yìí, a ń lo AI fún:", options: ["Iṣẹ́ ọ́fíìsì àti àkọ́pẹrẹ, láéláé kì í ṣe fún ṣíṣàyẹ̀wò àìsàn", "Ṣíṣàyẹ̀wò àìsàn aláìsàn", "Kíkọ oògùn", "Rírọ́pò oníṣègùn"], answer: 0, why: "Ìpinnu ìtọ́jú wà lọ́wọ́ oníṣègùn tí ó ní ìwé àṣẹ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 3, 7, 9, 13, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Àkọsílẹ̀ iṣẹ́ tí a pín", objective: "O1", notYet: "Iṣẹ́ kan tí ó nílò PHI wà nínú ọ̀wọ́n \"AI gbogbogbò dára\".", meets: "A pín iṣẹ́ mẹ́wàá sí ọ̀wọ́n méjì náà dáadáa.", exceeds: "Ó kọ irinṣẹ́ BAA tí a fọwọ́ sí, tí ó bá wà, tí ilé ìwòsàn ń lò fún àwọn iṣẹ́ PHI sílẹ̀." },
      { name: "Ọ̀rọ̀ ìpè tábìlì ìgbàlejò tí kò léwu", objective: "O2", notYet: "Ọ̀rọ̀ ìpè kan fúnni ní ìmọ̀ràn ìṣègùn tàbí kò darí pàjáwìrì sí 911.", meets: "Ọ̀rọ̀ ìpè mẹ́ta tí ó ń darí ìbéèrè ìtọ́jú sí òṣìṣẹ́ ìtọ́jú àti pàjáwìrì sí 911.", exceeds: "A sàmì sí wọn fún ìfọwọ́sí olórí ìtọ́jú, pẹ̀lú àkíyèsí nípa ẹni tí ó fọwọ́ sí wọn." },
      { name: "Àwòṣe ìránnilétí àdáni", objective: "O3", notYet: "Àwòṣe kan ní àlàyé aláìsàn gidi tàbí ó fi ìdí ìbẹ̀wò hàn.", meets: "Àwòṣe ìfìdímúlẹ̀ àti ìránnilétí pẹ̀lú àmì ìdúrópò, láìsí ìdí ìbẹ̀wò.", exceeds: "Ó tún ní àwòṣe yíyí àkókò padà àti ẹ̀dà tí a túmọ̀ tí ẹni tí ó gbọ́ èdè dáadáa ṣàyẹ̀wò." },
      { name: "Ìwé ìtọ́sọ́nà fún àyẹ̀wò", objective: "O4", notYet: "Ìwé ìtọ́sọ́nà náà jẹ́ nípa aláìsàn kan pàtó tàbí a kò sàmì sí i fún àyẹ̀wò.", meets: "Kókó gbogbogbò, ọ̀rọ̀ tó rọrùn, a kọ \"Fún àyẹ̀wò oníṣègùn\" sí i, pẹ̀lú ìlà ìkànsí àti àkíyèsí 911.", exceeds: "Ó kọ àwọn òtítọ́ tí oníṣègùn yẹ kí ó ṣàyẹ̀wò sílẹ̀." },
      { name: "Òfin AI fún òṣìṣẹ́", objective: "O6", notYet: "Òfin náà kò ní òfin kò-sí-PHI tàbí bí a ṣe ń ròyìn àṣìṣe.", meets: "Òfin márùn-ún sí méje, pẹ̀lú kò sí PHI láìsí BAA, irinṣẹ́ tí a fọwọ́ sí, ìròyìn àti àtúnyẹ̀wò ọdọọdún.", exceeds: "Olùdarí ìpamọ́ tàbí ìtẹ̀lé òfin ti fọwọ́ sí i, pẹ̀lú ètò ìdánilẹ́kọ̀ọ́ òṣìṣẹ́." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn ilé ìwòsàn tí wọ́n gba òfin AI kíkọ fún òṣìṣẹ́ láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn ilé ìwòsàn tí wọ́n sọ pé kò sí PHI tí ó wọ inú irinṣẹ́ AI gbogbogbò lẹ́yìn ìdánilẹ́kọ̀ọ́",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ òwò kékeré Koach Learn míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí fóònù pẹ̀lú íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI gbogbogbò ọ̀fẹ́, fún iṣẹ́ tí kò ní PHI nìkan",
      "Àwọn òfin ilé ìwòsàn rẹ lọ́wọ́lọ́wọ́ àti irú ìpè tí ó wọ́pọ̀, tàbí àpẹẹrẹ wọn",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, ìdánrawò, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Lo ìsọfúnni àhùsọ tàbí àpẹẹrẹ nìkan ní kíláàsì; má ṣe tẹ àlàyé aláìsàn gidi sínú irinṣẹ́ AI láéláé.",
      "Pe olùdarí ìpamọ́ tàbí ìtẹ̀lé òfin ilé ìwòsàn sí ìpàdé nípa òfin AI fún òṣìṣẹ́.",
      "Jẹ́ kí oníṣègùn tí ó ní ìwé àṣẹ ṣàyẹ̀wò gbogbo ìwé ìtọ́sọ́nà àti ọ̀rọ̀ ìpè tí ó kan ìtọ́jú kí a tó lò wọ́n.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé ẹ̀kọ́ yìí kì í ṣe ìmọ̀ràn òfin tàbí ti ìtẹ̀lé òfin, ó sì ń tọ́ka sí ìtọ́sọ́nà HHS àti olùdámọ̀ràn wọn.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
