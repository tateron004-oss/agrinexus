"use strict";

// Koach Learn course (Yoruba translation of shared/forklift-operator.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Àwọn ọkọ̀ ilé-iṣẹ́ tí ẹ̀rọ ń wà (òfin forklift ti ìjọba àpapọ̀ Amẹ́ríkà)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const OSHA_ETOOL = { name: "OSHA eTool: Àwọn ọkọ̀ ilé-iṣẹ́ tí ẹ̀rọ ń wà (forklift)", url: "https://www.osha.gov/etools/powered-industrial-trucks" };
const OSHA_TYPES = { name: "OSHA eTool: Àwọn irú forklift (Kíláàsì I sí VII)", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/types" };
const OSHA_PARTS = { name: "OSHA eTool: Àwọn ẹ̀yà forklift", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/parts" };
const OSHA_PREOP = { name: "OSHA eTool: Àyẹ̀wò kí o tó lo ọkọ̀", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/pre-operation" };
const OSHA_LOAD = { name: "OSHA eTool: Bí a ṣe ń gbé ẹrù", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/load-handling" };
const OSHA_TRAVEL = { name: "OSHA eTool: Wíwakọ̀ àti yíyí ọkọ̀ padà", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/traveling-maneuvering" };
const OSHA_DOCKS = { name: "OSHA eTool: Ibi ìkẹ́rù sókè àti ìsọ̀kalẹ̀ (loading dock)", url: "https://www.osha.gov/etools/powered-industrial-trucks/workplace/loading-docks" };
const OSHA_TRAINING = { name: "OSHA eTool: Ìdánilẹ́kọ̀ọ́ awakọ̀", url: "https://www.osha.gov/etools/powered-industrial-trucks/training" };
const AGE_RULE = { name: "29 CFR 570.58: Òṣìṣẹ́ tí kò tíì pé ọmọ ọdún 18 kò gbọdọ̀ wa forklift (òfin Ẹ̀ka Iṣẹ́ Amẹ́ríkà, ẹ̀dà Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/29/570.58" };

module.exports = {
  id: "forklift-operator-yo",
  lang: "yo",
  translationOf: "forklift-operator",
  category: "Workforce Development",
  name: "Ìpìlẹ̀ Iṣẹ́ Awakọ̀ Forklift",
  skills: "Mímọ àwọn irú forklift àti ẹ̀yà rẹ̀, Ṣíṣe àyẹ̀wò kí iṣẹ́ tó bẹ̀rẹ̀, Kíka àwo ìsọfúnni (data plate), Gbígbé ẹrù láìléwu, Wíwakọ̀ láìléwu láàárín ènìyàn àti ní ibi ìkẹ́rù",
  outcome: "dárúkọ àwọn irú forklift àti àwọn ẹ̀yà rẹ̀ pàtàkì, ṣe àyẹ̀wò kíkún kí iṣẹ́ tó bẹ̀rẹ̀ kí o sì dá ọkọ̀ tí kò dára dúró kúrò lẹ́nu iṣẹ́, lo àwo ìsọfúnni (data plate) láti pinnu bóyá ẹrù kan kò léwu láti gbé, yan ohun tó tọ́ láti ṣe nígbà tí o bá ń wakọ̀, tò ẹrù, ṣiṣẹ́ ní ibi ìkẹ́rù àti gbé ọkọ̀ sí, kí o sì ṣe ètò láti gba ìdánilẹ́kọ̀ọ́ àti àyẹ̀wò lọ́dọ̀ agbanisíṣẹ́.",
  about: [
    "Àwọn awakọ̀ forklift (ọkọ̀ tí ó ń gbé ẹrù sókè) ń kó ọjà ní ilé ìkẹ́rùsí, ṣọ́ọ̀bù ńlá, ilé-iṣẹ́, oko àti ibi ìkọ́lé. Ẹ̀kọ́ yìí wà fún àwọn tí ń wá iṣẹ́, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àwọn ọmọ ogun tẹ́lẹ̀ àti ẹnikẹ́ni tí ó fẹ́ bẹ̀rẹ̀ iṣẹ́ yìí.",
    "O máa kọ́ àwọn irú forklift àti àwọn ẹ̀yà rẹ̀, àyẹ̀wò ojoojúmọ́, bí o ṣe lè ka àwo ìsọfúnni kí o sì díwọ̀n ẹrù, àwọn òfin wíwakọ̀ láàárín ènìyàn, lórí ibi gẹ̀rẹ́gẹ̀rẹ́ (ramp) àti ní ibi ìkẹ́rù, àti bí o ṣe lè gbé ọkọ̀ sí láìléwu.",
    "Pàtàkì: ẹ̀kọ́ yìí ń mú ọ múra sílẹ̀, ṣùgbọ́n kò fún ọ ní ìwé-ẹ̀rí. Lábẹ́ òfin forklift OSHA (àjọ ìjọba Amẹ́ríkà fún ààbò ibi iṣẹ́), 29 CFR 1910.178, agbanisíṣẹ́ rẹ gbọ́dọ̀ kọ́ ọ, wo bí o ṣe ń wa ọkọ̀ wọn ní ibi iṣẹ́ wọn, kí wọ́n sì ṣàyẹ̀wò rẹ kí o tó ṣiṣẹ́ fúnra rẹ. Ẹ̀kọ́ orí ayélujára tàbí káàdì nìkan kò tó. O gbọ́dọ̀ ti pé ọmọ ọdún 18 ó kéré tán. Má ṣe wa forklift láti fi ṣe àṣeṣe títí o fi wà nínú ìdánilẹ́kọ̀ọ́ tí ẹnìkan ń bójú tó.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" lórí ìwé. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe àpò ìmúrasílẹ̀ forklift: àkọsílẹ̀ àyẹ̀wò kí iṣẹ́ tó bẹ̀rẹ̀ fún irú forklift kan, ìpinnu mẹ́ta nípa ẹrù láti inú àwo ìsọfúnni àṣeṣe pẹ̀lú ìdí rẹ fún ọ̀kọ̀ọ̀kan, káàdì àpò tí ó ní ìgbésẹ̀ gbígbé ọkọ̀ sí àti ti ibi ìkẹ́rù, àti ètò láti gba ìdánilẹ́kọ̀ọ́ àti àyẹ̀wò lọ́dọ̀ agbanisíṣẹ́ pẹ̀lú ìlà òtítọ́ kan fún résumé rẹ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí ń wá iṣẹ́ ní ilé ìkẹ́rùsí, ibùdó ìpínkiri ọjà, yàrá ọjà ṣọ́ọ̀bù tàbí ilé-iṣẹ́: àwọn tí ń wá iṣẹ́, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àwọn ọmọ ogun tẹ́lẹ̀ àti àwọn ọ̀dọ́ tí ó ti pé ọmọ ọdún 18 sókè. Àwọn kan ti wa forklift láìsí ìdánilẹ́kọ̀ọ́ ìjọba; ọ̀pọ̀ jù lọ kò tíì wà á rí.",
    startingPoint: "Wọ́n lè wa mọ́tò tàbí gun kẹ̀kẹ́, wọ́n sì lè tẹ̀lé àkọsílẹ̀ àyẹ̀wò. Wọn kò fi bẹ́ẹ̀ mọ àwọn ẹ̀yà forklift, ìdúróṣinṣin rẹ̀, ìwọ̀n ẹrù tí ó lè gbé tàbí àwọn òfin OSHA. Àwọn kan gbà pé káàdì orí ayélujára nìkan ti sọ wọ́n di ẹni tí ó ní ìwé-ẹ̀rí.",
    gap: "Forklift ló wà lẹ́yìn ọ̀pọ̀ ìfarapa ńlá ní ilé ìkẹ́rùsí, bí ọkọ̀ tí ó ṣubú, ènìyàn tí ọkọ̀ kọlù àti ìṣubú láti etí ibi ìkẹ́rù. Agbanisíṣẹ́ gbọ́dọ̀ kọ́ gbogbo awakọ̀ kí wọ́n sì ṣàyẹ̀wò wọn, wọ́n sì ń gba àwọn tí ó ti mọ àyẹ̀wò ọkọ̀, òfin ẹrù àti àṣà ààbò síṣẹ́. Àwọn akẹ́kọ̀ọ́ nílò ìmọ̀ yẹn, àti òye tòótọ́ nípa bí ìwé-ẹ̀rí ṣe ń ṣiṣẹ́, kí wọ́n lè múra sílẹ̀ fún ìdánilẹ́kọ̀ọ́ agbanisíṣẹ́, kí wọ́n má sì sanwó fún \"ìwé-ẹ̀rí lójú ẹsẹ̀\" tí ó ń tanni jẹ.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ iṣẹ́",
      "Kò sí wíwa forklift nínú ẹ̀kọ́ yìí: àṣeṣe pẹ̀lú ọwọ́ ń wáyé nínú ìdánilẹ́kọ̀ọ́ agbanisíṣẹ́ tí ẹnìkan ń bójú tó nìkan",
      "Akẹ́kọ̀ọ́ gbọ́dọ̀ ti pé ọmọ ọdún 18 ó kéré tán láti wa forklift fún iṣẹ́",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìkàwé fún àwọn ojú-ewé OSHA; ìwé fún àwọn àkọsílẹ̀ àyẹ̀wò",
      "Òfin OSHA ti ìjọba àpapọ̀ ni a kọ́ níbí; àwọn ìpínlẹ̀ kan ní ètò OSHA tiwọn tí òfin rẹ̀ le tó bẹ́ẹ̀ tàbí jù bẹ́ẹ̀ lọ"
    ],
    prerequisites: "Kò sí. \"Ìpìlẹ̀ Ààbò Níbi Iṣẹ́ (OSHA)\" jẹ́ ẹ̀kọ́ ẹlẹgbẹ́ tí ó wúlò."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwòrán tàbí àpèjúwe forklift", action: "dá irú forklift náà mọ̀ kí o sì tọ́ka sí àwọn ẹ̀yà rẹ̀ pàtàkì", standard: "kí o sì dárúkọ ó kéré tán ẹ̀yà 6 àti iṣẹ́ ọ̀kọ̀ọ̀kan" },
    { id: "O2", condition: "Pẹ̀lú àkọsílẹ̀ àyẹ̀wò", action: "parí àyẹ̀wò kí iṣẹ́ tó bẹ̀rẹ̀ kí o sì pinnu bóyá a lè lo ọkọ̀ náà", standard: "kí o ṣàyẹ̀wò gbogbo nǹkan kí o sì dá ọkọ̀ tí kò dára dúró kúrò lẹ́nu iṣẹ́" },
    { id: "O3", condition: "Tí a bá fún ọ ní àwo ìsọfúnni àti àpèjúwe ẹrù kan", action: "pinnu bóyá ẹrù náà kò léwu láti gbé kí o sì ṣàlàyé ìdí", standard: "kí o sì gba ó kéré tán 4 nínú ìpinnu ẹrù 5 tọ̀nà" },
    { id: "O4", condition: "Tí a bá fún ọ ní ipò kan nípa wíwakọ̀, títo ẹrù, ibi ìkẹ́rù tàbí gbígbé ọkọ̀ sí", action: "yan ohun tí kò léwu láti ṣe gẹ́gẹ́ bí òfin OSHA", standard: "kí o sì gba ó kéré tán 4 nínú ipò 5 tọ̀nà" },
    { id: "O5", condition: "Pẹ̀lú ohun tí OSHA ń béèrè lọ́wọ́ agbanisíṣẹ́", action: "kọ ètò láti gba ìdánilẹ́kọ̀ọ́ àti àyẹ̀wò, àti ìlà òtítọ́ kan fún résumé", standard: "tí ó dárúkọ ipa agbanisíṣẹ́, tí kò sì sọ pé o ní ìwé-ẹ̀rí tí o kò ní" }
  ],
  chapters: [
    {
      name: "Orí 1: Iṣẹ́ náà, ọkọ̀ náà àti àyẹ̀wò ojoojúmọ́",
      lessons: [
        {
          title: "Iṣẹ́ awakọ̀ forklift àti òfin ìdánilẹ́kọ̀ọ́ OSHA",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ṣàlàyé ẹni tí ó ń kọ́ awakọ̀ forklift tí ó sì ń fún un ní ìwé-ẹ̀rí, àti ìgbà tí ó nílò ìdánilẹ́kọ̀ọ́ tuntun.",
          text: [
            "OSHA ń pe forklift ní \"powered industrial trucks\" (ọkọ̀ ilé-iṣẹ́ tí ẹ̀rọ ń wà). Òfin rẹ̀, 29 CFR 1910.178, sọ pé agbanisíṣẹ́ gbọ́dọ̀ rí i dájú pé gbogbo awakọ̀ mọ iṣẹ́ náà dáadáa. Èyí túmọ̀ sí ìdánilẹ́kọ̀ọ́ (kíláàsì àti àṣeṣe pẹ̀lú ọwọ́ lábẹ́ olùkọ́ tó kúnjú ìwọ̀n) àti àyẹ̀wò bí o ṣe ń wakọ̀ ní ibi iṣẹ́ gidi.",
            "Lẹ́yìn náà, agbanisíṣẹ́ máa jẹ́rìí pé a ti kọ́ ọ, a sì ti ṣàyẹ̀wò rẹ. Àkọsílẹ̀ náà ní orúkọ rẹ, ọjọ́ ìdánilẹ́kọ̀ọ́ àti ti àyẹ̀wò, àti ẹni tí ó ṣe wọ́n. A gbọ́dọ̀ tún àyẹ̀wò rẹ ṣe ó kéré tán lẹ́ẹ̀kan ní gbogbo ọdún mẹ́ta.",
            "O tún máa gba ìdánilẹ́kọ̀ọ́ ìtúnṣe (refresher) tí a bá rí ọ tí o ń wakọ̀ lọ́nà tí ó léwu, tí ìjàǹbá tàbí ìjàǹbá-tí-ó-fẹ́rẹ̀ẹ́-ṣẹlẹ̀ bá wáyé, tí àyẹ̀wò rẹ kò bá dára, tí a bá gbé ọ sí irú ọkọ̀ míì, tàbí tí ibi iṣẹ́ bá yí padà lọ́nà tí ó kan ààbò.",
            "Òfin iṣẹ́ ti ìjọba àpapọ̀ kò gba ẹnikẹ́ni tí kò tíì pé ọmọ ọdún 18 láàyè láti wa forklift níbi iṣẹ́. Ẹ̀kọ́ orí ayélujára tàbí káàdì àpò nìkan kò sì sọ ọ́ di ẹni tí ó ní ìwé-ẹ̀rí: ìdánilẹ́kọ̀ọ́ àti àyẹ̀wò agbanisíṣẹ́ rẹ nìkan ló ń ṣe bẹ́ẹ̀."
          ],
          words: [["OSHA", "Occupational Safety and Health Administration, àjọ ìjọba Amẹ́ríkà tí ó ń bójú tó ààbò ibi iṣẹ́."], ["Powered industrial truck", "orúkọ tí OSHA ń pe forklift àti àwọn ẹ̀rọ bíi rẹ̀ tí ó ń gbé ẹrù sókè tí ó sì ń kó o."], ["Àyẹ̀wò (evaluation)", "ẹni tó kúnjú ìwọ̀n ń wò ọ́ bí o ṣe ń wakọ̀ ní ibi iṣẹ́ láti mọ̀ bóyá o wà láìléwu."], ["Ìdánilẹ́kọ̀ọ́ ìtúnṣe (refresher)", "ìdánilẹ́kọ̀ọ́ àfikún láti tún ìṣòro kan ṣe tàbí láti mú ọ múra fún ọkọ̀ tàbí ibi iṣẹ́ tuntun."], ["Ìjàǹbá-tí-ó-fẹ́rẹ̀ẹ́-ṣẹlẹ̀ (near miss)", "ìṣẹ̀lẹ̀ tí kò pa ẹnikẹ́ni lára, ṣùgbọ́n tí ó lè ti pa ẹnìkan lára."]],
          slides: [
            { title: "Ta ló ń fún ọ ní ìwé-ẹ̀rí?", bullets: ["Agbanisíṣẹ́ rẹ, kì í ṣe ojú-òpó wẹ́ẹ̀bù", "Ìdánilẹ́kọ̀ọ́: kíláàsì àti àṣeṣe pẹ̀lú ọwọ́ lábẹ́ olùkọ́", "Àyẹ̀wò: ìwọ ń wakọ̀ ní ibi iṣẹ́ gidi"] },
            { title: "Àkọsílẹ̀ náà", bullets: ["Orúkọ rẹ", "Ọjọ́ ìdánilẹ́kọ̀ọ́ àti ti àyẹ̀wò", "Ẹni tí ó kọ́ ọ tí ó sì ṣàyẹ̀wò rẹ"] },
            { title: "Ìgbà tí o máa tún kẹ́kọ̀ọ́", bullets: ["Ó kéré tán ní gbogbo ọdún mẹ́ta: àyẹ̀wò tuntun", "Lẹ́yìn ìjàǹbá, near miss tàbí wíwakọ̀ tí ó léwu", "Irú ọkọ̀ tuntun tàbí ibi iṣẹ́ tí ó ti yí padà"] },
            { title: "Kí o tó bẹ̀rẹ̀", bullets: ["O gbọ́dọ̀ ti pé ọmọ ọdún 18 ó kéré tán", "Kò sí àṣeṣe wíwakọ̀ láìsí olùkọ́"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING, AGE_RULE],
          tryIt: "Lórí ìwé, kọ gbólóhùn mẹ́ta ní ọ̀rọ̀ ara rẹ: ẹni tí ó ń kọ́ awakọ̀ forklift tí ó sì ń ṣàyẹ̀wò rẹ̀, ìgbà mélòó ni a ń tún àyẹ̀wò ṣe, àti ìṣẹ̀lẹ̀ méjì tí ó túmọ̀ sí pé o nílò ìdánilẹ́kọ̀ọ́ ìtúnṣe.",
          youCanNow: "ṣàlàyé ẹni tí ó ń kọ́ awakọ̀ forklift tí ó sì ń fún un ní ìwé-ẹ̀rí, ìgbà mélòó ni a ń ṣàyẹ̀wò rẹ, àti ìgbà tí o nílò ìdánilẹ́kọ̀ọ́ ìtúnṣe.",
          quickCheck: [
            { objective: "O5", q: "Ta ló gbọ́dọ̀ kọ́ ọ kí ó sì ṣàyẹ̀wò rẹ kí o tó wa forklift níbi iṣẹ́?", options: ["Ojú-òpó wẹ́ẹ̀bù èyíkéyìí tí ó ń ta káàdì", "Agbanisíṣẹ́ rẹ, ní ibi iṣẹ́ rẹ", "Ọ̀rẹ́ kan tí ó ń wa forklift", "Kò sí ẹnìkan"], answer: 1, why: "Òfin OSHA gbé ìdánilẹ́kọ̀ọ́ àti àyẹ̀wò lé agbanisíṣẹ́ lọ́wọ́, ní ibi iṣẹ́ gidi." },
            { objective: "O5", q: "Forklift rẹ gbá àgbékalẹ̀ ẹrù (rack) kan. Kò pa ẹnikẹ́ni lára. Kí ni òótọ́?", options: ["Kò sí nǹkan tí ó yẹ kí ó ṣẹlẹ̀", "O máa pàdánù iṣẹ́ rẹ lẹ́sẹ̀kẹsẹ̀", "O gbọ́dọ̀ ra káàdì tuntun lórí ayélujára", "Ó jẹ́ ìdí fún ìdánilẹ́kọ̀ọ́ ìtúnṣe"], answer: 3, why: "Ìjàǹbá tàbí near miss jẹ́ ọ̀kan lára àwọn ìdí tí OSHA fi ń béèrè ìdánilẹ́kọ̀ọ́ ìtúnṣe." }
          ]
        },
        {
          title: "Àwọn irú forklift àti àwọn ẹ̀yà rẹ̀",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dá irú forklift mọ̀ kí o sì dárúkọ àwọn ẹ̀yà rẹ̀ pàtàkì.",
          text: [
            "OSHA pín forklift sí kíláàsì méje. Kíláàsì I: ọkọ̀ iná mànàmáná tí a ń jókòó tàbí dúró lé. Kíláàsì II: ọkọ̀ iná mànàmáná fún ọ̀nà tóóró. Kíláàsì III: ọkọ̀ ọwọ́ iná mànàmáná, pẹ̀lú pallet jack tí a ń rìn tẹ̀lé. Kíláàsì IV àti V: ọkọ̀ tí ẹ́ńjìnnì ń wà, pẹ̀lú táyà líle fún ilẹ̀ dídán nínú ilé (IV) tàbí táyà afẹ́fẹ́ fún ìta (V). Kíláàsì VI: tírákítọ̀ tí ó ń fà nǹkan. Kíláàsì VII: forklift fún ilẹ̀ gbágungbàgun ní ibi ìkọ́lé àti oko.",
            "Ọ̀pọ̀ forklift counterbalance ní àwọn ẹ̀yà pàtàkì kan náà. Àwọn ẹ̀ka (forks) ló ń gbé ẹrù. Àwọn ẹ̀ka náà so mọ́ carriage, tí ó ń gòkè tí ó sì ń sọ̀kalẹ̀ lórí mast. Load backrest ń dá ẹrù dúró kí ó má ṣubú sẹ́yìn sí ọ. Overhead guard ń dáàbò bò ọ́ lọ́wọ́ nǹkan tí ó ń jábọ́. Counterweight (ìwúwo ìdọ́gba) ní ẹ̀yìn ń dọ́gba ẹrù náà.",
            "Níbi ìjókòó, o ní ìdarí (steering), ìdarí ìtọ́sọ́nà (síwájú àti sẹ́yìn), àwọn ọ̀pá gbígbé sókè àti títẹ̀ (tilt), fèrè (horn), bíréèkì àti bẹ́líìtì ìjókòó. Àwo ìsọfúnni (data plate, tí a tún ń pè ní capacity plate tàbí nameplate) ń sọ ìwọ̀n ẹrù tí ọkọ̀ náà lè gbé fún ọ."
          ],
          words: [["Mast", "férémù ìdúró tí àwọn ẹ̀ka ń gòkè tí wọ́n sì ń sọ̀kalẹ̀ lé lórí."], ["Carriage", "àwo tí ó wà lórí mast tí ó di àwọn ẹ̀ka mú."], ["Load backrest", "férémù lókè àwọn ẹ̀ka tí ó ń dá ẹrù dúró kí ó má ṣubú sẹ́yìn sí awakọ̀."], ["Overhead guard", "férémù òrùlé tí ó ń dáàbò bo awakọ̀ lọ́wọ́ nǹkan tí ó ń jábọ́."], ["Counterweight", "ìwúwo líle ní ẹ̀yìn ọkọ̀ tí ó ń dọ́gba ẹrù."], ["Àwo ìsọfúnni (data plate)", "àwo lára ọkọ̀ tí ó fi irú ọkọ̀ náà hàn àti ìwọ̀n ẹrù tí ó lè gbé."]],
          slides: [
            { title: "Kíláàsì méje", bullets: ["I, II, III: iná mànàmáná (àjókòó, ọ̀nà tóóró, ọkọ̀ ọwọ́)", "IV, V: ọkọ̀ ẹ́ńjìnnì fún inú ilé tàbí ìta", "VI: tírákítọ̀ tí ó ń fà nǹkan; VII: ilẹ̀ gbágungbàgun"] },
            { title: "Àwọn ẹ̀yà tí ó ń gbé ẹrù", bullets: ["Àwọn ẹ̀ka (forks) lórí carriage", "Carriage ń rìn lórí mast", "Load backrest ń pa ẹrù mọ́ kúrò lára rẹ"] },
            { title: "Àwọn ẹ̀yà tí ó ń dáàbò bò ọ́", bullets: ["Overhead guard lókè orí rẹ", "Counterweight ní ẹ̀yìn", "Bẹ́líìtì ìjókòó, fèrè àti iná"] },
            { title: "Àwo ìsọfúnni (data plate)", bullets: ["Ó fi irú ọkọ̀ náà hàn", "Ó fi ìwọ̀n ẹrù tí ó lè gbé hàn", "Ó gbọ́dọ̀ wà níbẹ̀, kí ó sì ṣeé kà"] }
          ],
          sources: [OSHA_TYPES, OSHA_PARTS],
          tryIt: "Ya àwòrán ẹ̀gbẹ́ forklift tí a ń jókòó lé ní ọ̀nà tó rọrùn (àpótí àti ìlà dára). Kọ orúkọ ẹ̀yà mẹ́fà ó kéré tán: forks, carriage, mast, load backrest, overhead guard, counterweight. Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ ìlà kan nípa iṣẹ́ rẹ̀.",
          youCanNow: "sọ kíláàsì tí forklift kan wà, kí o sì dárúkọ àwọn ẹ̀yà rẹ̀ pàtàkì àti iṣẹ́ wọn.",
          quickCheck: [
            { objective: "O1", q: "Ẹ̀yà wo ló ń dá ẹrù dúró kí ó má ṣubú sẹ́yìn sí awakọ̀?", options: ["Load backrest", "Counterweight", "Àwọn táyà", "Fèrè"], answer: 0, why: "Load backrest wà lókè àwọn ẹ̀ka, ó sì ń dá ẹrù dúró kí ó má ṣubú sí ọ." },
            { objective: "O1", q: "Forklift tí a ṣe fún ilẹ̀ gbágungbàgun ní ibi ìkọ́lé wà ní kíláàsì wo?", options: ["Kíláàsì I", "Kíláàsì III", "Kíláàsì VII", "Kíláàsì IV"], answer: 2, why: "Kíláàsì VII ni forklift fún ilẹ̀ gbágungbàgun ní ìta." }
          ]
        },
        {
          title: "Àyẹ̀wò kí iṣẹ́ tó bẹ̀rẹ̀",
          objectives: ["O2"],
          minutes: 6,
          goal: "Parí àkọsílẹ̀ àyẹ̀wò kí iṣẹ́ tó bẹ̀rẹ̀ kí o sì pinnu bóyá ọkọ̀ náà kò léwu láti lò.",
          text: [
            "OSHA ń béèrè pé kí a ṣàyẹ̀wò gbogbo forklift kí a tó lò ó, ó kéré tán lẹ́ẹ̀kan lójúmọ́; tí àwọn ọkọ̀ bá ń ṣiṣẹ́ tọ̀sán-tòru, lẹ́yìn ìyípo iṣẹ́ (shift) kọ̀ọ̀kan. Tí ohunkóhun bá mú ọkọ̀ náà léwu, a máa dá a dúró kúrò lẹ́nu iṣẹ́ títí a ó fi tún un ṣe.",
            "Bẹ̀rẹ̀ nígbà tí kọ́kọ́rọ́ wà ní pípa. Wo ìwọ̀n epo àti omi inú ẹ̀rọ, kí o sì wá ibi tí ó ń jò, ibi tí ó ti là, àti páìpù tàbí ṣẹ́ẹ̀nì mast tí ó ti bàjẹ́ (má ṣe ki ọwọ́ bọ inú mast láéláé). Ṣàyẹ̀wò àwọn táyà, àwọn ẹ̀ka, load backrest, overhead guard, kí o sì rí i pé àwo ìsọfúnni àti àwọn àmì ìkìlọ̀ wà níbẹ̀, wọ́n sì ṣeé kà. Ṣàyẹ̀wò bẹ́líìtì ìjókòó.",
            "Ọkọ̀ iná mànàmáná: wo àwọn wáyà, ibi tí wọ́n ti so pọ̀ àti ohun tí ó di bátìrì mú. Ọkọ̀ gáàsì propane: rí i pé a gbé táǹkì kalẹ̀ dáadáa, pé relief valve kọjú sókè, àti pé kò sí ibi tí ó ń jò.",
            "Lẹ́yìn náà, nígbà tí ọkọ̀ ń ṣiṣẹ́, dán bíréèkì, ìdarí, síwájú àti sẹ́yìn, gbígbé sókè, sísọ̀kalẹ̀, títẹ̀, fèrè, iná àti àlààmù ìpadàsẹ́yìn wò. Tí nǹkan kan bá ṣàìtọ́: má ṣe lo ọkọ̀ náà, fi àmì (tag) sí i tàbí ròyìn rẹ̀, kọ ọ́ sórí àkọsílẹ̀ àyẹ̀wò, kí o sì sọ fún ọ̀gá rẹ. Àwọn tí a kọ́ tí a sì fún ní àṣẹ nìkan ló ń tún ọkọ̀ ṣe."
          ],
          steps: ["Kọ́kọ́rọ́ pa: epo àti omi, ibi tí ó ń jò, páìpù àti ṣẹ́ẹ̀nì (wò ó, má ki ọwọ́ bọ inú).", "Táyà, àwọn ẹ̀ka, load backrest, overhead guard.", "Àwo ìsọfúnni àti àmì ìkìlọ̀ wà níbẹ̀, wọ́n sì ṣeé kà; bẹ́líìtì ìjókòó ń ṣiṣẹ́.", "Kọ́kọ́rọ́ tàn: bíréèkì, ìdarí, síwájú àti sẹ́yìn.", "Gbígbé sókè, sísọ̀kalẹ̀, títẹ̀, fèrè, iná, àlààmù ìpadàsẹ́yìn.", "Fọwọ́ sí àkọsílẹ̀ àyẹ̀wò; ròyìn àbùkù èyíkéyìí, fi àmì sí i, má sì lo ọkọ̀ náà."],
          words: [["Àyẹ̀wò kí iṣẹ́ tó bẹ̀rẹ̀ (pre-shift inspection)", "àyẹ̀wò forklift kí a tó lò ó fún ìyípo iṣẹ́ náà."], ["Kúrò lẹ́nu iṣẹ́ (out of service)", "a kò gbọdọ̀ lò ó títí a ó fi tún un ṣe; a sábà máa ń fi àmì (tag) sí i."], ["Ṣẹ́ẹ̀nì mast (mast chains)", "àwọn ṣẹ́ẹ̀nì tí ó ń gbé carriage àti àwọn ẹ̀ka sókè lórí mast."]],
          slides: [
            { title: "Ìgbà tí o máa ṣàyẹ̀wò", bullets: ["Kí o tó lò ó, ó kéré tán lójoojúmọ́", "Lẹ́yìn ìyípo iṣẹ́ kọ̀ọ̀kan tí ọkọ̀ bá ń ṣiṣẹ́ tọ̀sán-tòru"] },
            { title: "Kọ́kọ́rọ́ pa", bullets: ["Epo àti omi, ibi tí ó ń jò, páìpù, ṣẹ́ẹ̀nì: wò ó, má ki ọwọ́ bọ̀ ọ́", "Táyà, àwọn ẹ̀ka, backrest, overhead guard", "Àwo ìsọfúnni, àmì ìkìlọ̀, bẹ́líìtì ìjókòó"] },
            { title: "Kọ́kọ́rọ́ tàn", bullets: ["Bíréèkì, ìdarí, síwájú àti sẹ́yìn", "Gbígbé sókè, sísọ̀kalẹ̀, títẹ̀", "Fèrè, iná, àlààmù ìpadàsẹ́yìn"] },
            { title: "O rí ìṣòro kan?", bullets: ["Má ṣe lo ọkọ̀ náà", "Fi àmì sí i, kọ ọ́ sílẹ̀, sọ fún ọ̀gá rẹ", "Àwọn tí a fún ní àṣẹ nìkan ló ń tún un ṣe"] }
          ],
          sources: [OSHA_PREOP, OSHA_178],
          tryIt: "Kọ àkọsílẹ̀ àyẹ̀wò kí iṣẹ́ tó bẹ̀rẹ̀ tìrẹ pẹ̀lú òpó méjì, \"Kọ́kọ́rọ́ pa\" àti \"Kọ́kọ́rọ́ tàn\", pẹ̀lú ìrànlọ́wọ́ ojú-ewé OSHA nípa àyẹ̀wò kí o tó lo ọkọ̀. Lẹ́yìn náà ka ìṣẹ̀lẹ̀ àṣeṣe yìí: fèrè kò ṣiṣẹ́, ẹ̀ka kan sì ti là. Kọ ohun tí o máa ṣe, ní ìgbésẹ̀ kọ̀ọ̀kan.",
          youCanNow: "parí àkọsílẹ̀ àyẹ̀wò kí iṣẹ́ tó bẹ̀rẹ̀, kí o sì dá ọkọ̀ tí ó léwu dúró kúrò lẹ́nu iṣẹ́.",
          quickCheck: [
            { objective: "O2", q: "Ìgbà mélòó ni a gbọ́dọ̀ ṣàyẹ̀wò forklift kí a tó lò ó?", options: ["Lẹ́ẹ̀kan lóṣù", "Lẹ́ẹ̀kan lọ́dún", "Nígbà tí ó bá bàjẹ́ nìkan", "Ó kéré tán lójoojúmọ́, kí a tó lò ó"], answer: 3, why: "OSHA ń béèrè àyẹ̀wò kí a tó lò ó, ó kéré tán lójoojúmọ́, àti lẹ́yìn ìyípo iṣẹ́ kọ̀ọ̀kan fún ọkọ̀ tí ó ń ṣiṣẹ́ tọ̀sán-tòru." },
            { objective: "O2", q: "Nígbà àyẹ̀wò rẹ, bíréèkì kò lágbára tó. Kí ni o máa ṣe?", options: ["Lò ó pẹ̀lú ìṣọ́ra lónìí", "Ròyìn rẹ̀, fi àmì dá a dúró kúrò lẹ́nu iṣẹ́, má sì lò ó", "Tún bíréèkì ṣe fúnra rẹ", "Sọ fún alábàáṣiṣẹ́ kan pé kí ó lò ó"], answer: 1, why: "A máa ń dá ọkọ̀ tí ó léwu dúró kúrò lẹ́nu iṣẹ́ kí a sì ròyìn rẹ̀; àwọn tí a fún ní àṣẹ nìkan ló ń tún un ṣe." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Iṣẹ́ náà, ọkọ̀ náà àti àyẹ̀wò ojoojúmọ́",
        questions: [
          { objective: "O5", q: "O ṣe ẹ̀kọ́ forklift lórí ayélujára, o sì gba káàdì. Ṣé o lè wa forklift èyíkéyìí ní iṣẹ́ tuntun báyìí?", options: ["Rárá; agbanisíṣẹ́ gbọ́dọ̀ kọ́ ọ kí ó sì ṣàyẹ̀wò rẹ lórí ọkọ̀ àti ibi iṣẹ́ rẹ̀", "Bẹ́ẹ̀ ni, káàdì náà nìkan ni o nílò", "Bẹ́ẹ̀ ni, tí wọ́n bá ti fi ike bo káàdì náà", "Ní òpin ọ̀sẹ̀ nìkan"], answer: 0, why: "OSHA ń béèrè pé kí agbanisíṣẹ́ kọ́ awakọ̀ kọ̀ọ̀kan kí ó sì ṣàyẹ̀wò rẹ̀ ní ibi iṣẹ́." },
          { objective: "O5", q: "Ó kéré tán, ìgbà mélòó ni a gbọ́dọ̀ tún àyẹ̀wò awakọ̀ ṣe?", options: ["Lóṣooṣù", "Ní gbogbo ọdún mẹ́wàá", "Lẹ́ẹ̀kan ní gbogbo ọdún mẹ́ta", "Láéláé"], answer: 2, why: "OSHA sọ pé a máa ń ṣàyẹ̀wò awakọ̀ kọ̀ọ̀kan ó kéré tán lẹ́ẹ̀kan ní gbogbo ọdún mẹ́ta." },
          { objective: "O1", q: "Kí ni counterweight ń ṣe?", options: ["Ó ń gbé àwọn ẹ̀ka sókè", "Ó di fèrè mú", "Ó ń dáàbò bo orí rẹ", "Ó ń dọ́gba ẹrù tí ó wà níwájú"], answer: 3, why: "Counterweight líle ní ẹ̀yìn ń dọ́gba ìwúwo tí ó wà lórí àwọn ẹ̀ka." },
          { objective: "O1", q: "Níbo ni o ti máa rí ìwọ̀n ẹrù tí forklift lè gbé?", options: ["Lára àwọn táyà", "Lórí àwo ìsọfúnni (data plate)", "Lára fèrè", "Lórí ìjókòó"], answer: 1, why: "Àwo ìsọfúnni ló ń fi ìwọ̀n ẹrù tí ọkọ̀ náà lè gbé hàn." },
          { objective: "O2", q: "Àyẹ̀wò wo ni a ń ṣe nígbà tí ọkọ̀ ń ṣiṣẹ́?", options: ["Dídán bíréèkì, ìdarí, gbígbé sókè àti títẹ̀ wò", "Wíwo àwọn táyà", "Kíka àwọn àmì ìkìlọ̀", "Ṣíṣàyẹ̀wò ìwọ̀n epo àti omi"], answer: 0, why: "Bíréèkì, ìdarí, gbígbé sókè àti títẹ̀ jẹ́ àyẹ̀wò iṣẹ́ tí a ń ṣe nígbà tí ọkọ̀ ń ṣiṣẹ́." }
        ]
      }
    },
    {
      name: "Orí 2: Ẹrù, wíwakọ̀ àti gbígba iṣẹ́",
      lessons: [
        {
          title: "Kíka àwo ìsọfúnni àti dídíwọ̀n ẹrù",
          objectives: ["O3"],
          minutes: 6,
          goal: "Lo àwo ìsọfúnni àti load center láti pinnu bóyá ẹrù kan kò léwu láti gbé.",
          text: [
            "Àwo ìsọfúnni ń fi ìwọ̀n ẹrù tí ó pọ̀ jù tí ọkọ̀ náà lè gbé hàn ní load center kan pàtó. Load center ni jíjìn láti iwájú àwọn ẹ̀ka dé àárín ẹrù náà (ibi tí ìwúwo rẹ̀ dọ́gba sí). Ọ̀pọ̀ forklift ni a díwọ̀n fún load center 24-inch. Tí àárín ẹrù bá jìnnà ju ìyẹn lọ, tàbí tí ọkọ̀ náà bá ní ohun àfikún (attachment), ìwọ̀n tí kò léwu máa dín kù: wo àwo náà kí o sì béèrè lọ́wọ́ ọ̀gá rẹ.",
            "Forklift máa ń dọ́gba bí ọmọdé tí ń ṣeré gbẹ̀rẹ̀gẹ̀dẹ̀ (seesaw) lórí àwọn táyà iwájú rẹ̀. Ẹrù orí àwọn ẹ̀ka wà ní apá kan; ọkọ̀ àti counterweight wà ní apá kejì. Ìwúwo tí ó pọ̀ jù, ẹrù tí ó jìnnà jù síwájú, tàbí ẹrù tí a gbé sókè tí a sì tẹ̀ síwájú lè mú ọkọ̀ náà ṣubú síwájú. Yíyí ọkọ̀ padà ní eré jù lè mú un ṣubú sí ẹ̀gbẹ́.",
            "Gbé ẹrù tí ó dúró ṣinṣin tí kò kọjá ìwọ̀n nìkan. Fi ẹrù sí àárín àwọn ẹ̀ka, kí o sì ti àwọn ẹ̀ka bọ abẹ́ rẹ̀ ó kéré tán ìdá méjì nínú mẹ́ta gígùn ẹrù náà. Gbé e sókè díẹ̀, tẹ mast sẹ́yìn díẹ̀ kí ẹrù lè fara ti backrest, kí o sì jẹ́ kí ó wà nísàlẹ̀."
          ],
          steps: ["Wá ìwúwo ẹrù náà (lórí àmì, nínú ìwé, tàbí béèrè).", "Ka àwo ìsọfúnni: ìwọ̀n ẹrù àti load center.", "Ṣé àárín ẹrù wà nínú load center? Ṣé ìwúwo rẹ̀ kò kọjá ìwọ̀n?", "Ṣé ẹrù náà dúró ṣinṣin, ṣé a dì í, ṣé kò bàjẹ́?", "Tí ó bá rí bẹ́ẹ̀: fi sí àárín, ẹ̀ka ó kéré tán ìdá méjì nínú mẹ́ta lábẹ́, gbé díẹ̀, tẹ̀ sẹ́yìn. Tí kò bá rí bẹ́ẹ̀ tàbí o kò dá ọ lójú: dúró kí o sì béèrè."],
          words: [["Ìwọ̀n ẹrù (capacity)", "ìwúwo tí ó pọ̀ jù tí forklift lè gbé láìléwu, tí ó wà lórí àwo ìsọfúnni."], ["Load center", "jíjìn láti iwájú àwọn ẹ̀ka dé àárín ẹrù."], ["Ibi ìdọ́gba ìwúwo (center of gravity)", "ibi tí ìwúwo nǹkan kan ti dọ́gba."], ["Ìṣubú ọkọ̀ (tipover)", "nígbà tí forklift bá ṣubú síwájú tàbí sí ẹ̀gbẹ́."]],
          slides: [
            { title: "Ohun tí àwo ìsọfúnni ń sọ", bullets: ["Ìwọ̀n ẹrù: èyí tí ó pọ̀ jù tí ọkọ̀ lè gbé", "Ní load center kan, tí ó sábà jẹ́ 24 inches", "Ẹrù tí ó jìnnà síwájú = ohun tí ó lè gbé dín kù"] },
            { title: "Bí gbẹ̀rẹ̀gẹ̀dẹ̀ (seesaw)", bullets: ["Àwọn táyà iwájú ni ìdí ìyípo", "Ẹrù ní apá kan, counterweight ní apá kejì", "Ó wúwo jù tàbí ó jìnnà jù: ó máa ṣubú"] },
            { title: "Gbé e lọ́nà tó tọ́", bullets: ["Ẹrù tí ó dúró ṣinṣin, tí kò kọjá ìwọ̀n", "Ní àárín, ẹ̀ka ìdá méjì nínú mẹ́ta lábẹ́", "Gbé díẹ̀, tẹ̀ sẹ́yìn, jẹ́ kí ó wà nísàlẹ̀"] },
            { title: "Kò dá ọ lójú? Dúró kí o sì béèrè", bullets: ["Ìwúwo tí a kò mọ̀", "Ẹrù tí ó ti bàjẹ́ tàbí tí ó ń fì", "Attachment ń yí ìwọ̀n ẹrù padà"] }
          ],
          sources: [OSHA_LOAD, OSHA_178],
          tryIt: "Àṣeṣe nìkan ni, nọ́mbà àhùsọ ni wọ́n. Àwo ọkọ̀ kan sọ pé 4,000 lb ní load center 24-inch. Pinnu bẹ́ẹ̀ ni tàbí bẹ́ẹ̀ kọ́, pẹ̀lú ìdí: (1) pallet 3,200 lb tí ó wà ní àárín tí a sì dì; (2) àpótí 4,600 lb; (3) ẹrù 2,500 lb tí ó ń fì tí ó sì ti ya; (4) ẹrù 3,000 lb tí àárín rẹ̀ jìnnà púpọ̀ kọjá 24 inches. Kọ ohun tí o máa ṣe fún ọ̀kọ̀ọ̀kan.",
          youCanNow: "ka àwo ìsọfúnni, kí o sì pinnu bóyá ẹrù kan kò léwu láti gbé, kí o sì sọ ìdí.",
          quickCheck: [
            { objective: "O3", q: "Àwo náà sọ pé 5,000 lb ní 24 inches. Ẹrù náà jẹ́ 5,800 lb. Kí ni o máa ṣe?", options: ["Gbé e díẹ̀díẹ̀", "Jẹ́ kí ènìyàn kan jókòó sí ẹ̀yìn bí ìwúwo àfikún", "Má ṣe gbé e; sọ fún ọ̀gá rẹ", "Gbé e sókè gan-an kí ó lè dọ́gba"], answer: 2, why: "Má ṣe gbé ju ìwọ̀n tí a kọ sílẹ̀ lọ láéláé; a kì í gba ẹni tí ó ń gun ọkọ̀ láàyè láéláé." },
            { objective: "O3", q: "Báwo ni àwọn ẹ̀ka ṣe gbọ́dọ̀ wọ abẹ́ ẹrù tó?", options: ["Orí ẹ̀ka nìkan", "Ó kéré tán ìdá méjì nínú mẹ́ta gígùn ẹrù náà", "Títí dé pallet tí ó wà lẹ́yìn rẹ̀", "Kò ṣe pàtàkì"], answer: 1, why: "Ìtọ́ni OSHA ni ó kéré tán ìdá méjì nínú mẹ́ta gígùn ẹrù, láìgbá ẹrù tí ó wà lẹ́yìn rẹ̀." }
          ]
        },
        {
          title: "Wíwakọ̀, ibi ìkẹ́rù àti gbígbé ọkọ̀ sí láìléwu",
          objectives: ["O4"],
          minutes: 6,
          goal: "Yan ohun tí kò léwu láti ṣe nígbà tí o bá ń wakọ̀, ní ibi ìkẹ́rù àti nígbà tí o bá ń gbé ọkọ̀ sí.",
          text: [
            "Máa rìn pẹ̀lú ẹrù nísàlẹ̀ tí a tẹ̀ sẹ́yìn, má ṣe gbé e sókè tàbí tẹ̀ ẹ́ síwájú láéláé. Wakọ̀ ní eré tí ó jẹ́ kí o lè dúró láìléwu, kí o sì dín eré kù lórí ilẹ̀ tí ó tutù, ní ibi yíyí àti ní ibi tí ọ̀nà méjì ti pàdé (cross aisle). Fun fèrè ní cross aisle àti ní igun tí o kò ti lè ríran. Wo ibi tí o ń lọ. Tí ẹrù bá dí ojú rẹ, wakọ̀ sẹ́yìn. Jẹ́ kí àyè tó nǹkan bí gígùn ọkọ̀ mẹ́ta wà láàárín ìwọ àti ọkọ̀ míì.",
            "Ènìyàn: kò sí ẹni tí ó gbọdọ̀ dúró tàbí rìn lábẹ́ àwọn ẹ̀ka tí a gbé sókè, yálà ẹrù wà lórí wọn tàbí kò sí. Kò sí ẹni tí ó gbọdọ̀ gun ọkọ̀ àyàfi tí ọkọ̀ náà bá ní ibi tí kò léwu fún wọn tí a sì gbà wọ́n láàyè. Má ṣe wakọ̀ lọ sí ọ̀dọ̀ ẹnìkan tí ó dúró níwájú ògiri tàbí àgbékalẹ̀ ẹrù láéláé.",
            "Ramp (ibi gẹ̀rẹ́gẹ̀rẹ́): lọ díẹ̀díẹ̀. Pẹ̀lú ẹrù, jẹ́ kí ẹrù wà ní apá òkè: wakọ̀ síwájú nígbà tí o bá ń gòkè, kí o sì wakọ̀ sẹ́yìn nígbà tí o bá ń sọ̀kalẹ̀. Má ṣe yí ọkọ̀ padà lórí ramp láéláé. Ibi ìkẹ́rù (dock): kí o tó wakọ̀ wọ inú trailer (ẹ̀yìn ọkọ̀ akẹ́rù), a gbọ́dọ̀ ti fa bíréèkì trailer náà kí a sì ti fi wedge (chock) dí àwọn táyà ẹ̀yìn rẹ̀; ṣàyẹ̀wò ilẹ̀ trailer fún ibi tí ó ti fọ́ tàbí tí kò lágbára; má ṣe sún mọ́ etí ibi ìkẹ́rù.",
            "Gbígbé ọkọ̀ sí: tí o bá fi ọkọ̀ sílẹ̀ (tàbí o jìnnà sí i tó 25 feet tàbí jù bẹ́ẹ̀ lọ, tàbí o kò rí i mọ́), sọ àwọn ẹ̀ka kalẹ̀ pátápátá, fi àwọn ìdarí sí neutral, pa ọkọ̀, kí o sì fa bíréèkì; dí àwọn táyà tí ó bá wà lórí ilẹ̀ gẹ̀rẹ́gẹ̀rẹ́. Tí forklift àjókòó bá bẹ̀rẹ̀ sí ní ṣubú: má ṣe fò jáde. Dúró lórí ìjókòó pẹ̀lú bẹ́líìtì, di ìdarí mú, fi ẹsẹ̀ tì í dáadáa, kí o sì tẹ̀ kúrò ní apá tí ó ń ṣubú sí."
          ],
          steps: ["Ẹrù nísàlẹ̀, tẹ̀ sẹ́yìn; fèrè ní cross aisle; wo ibi tí o ń wakọ̀ lọ.", "Ẹrù dí ojú rẹ: wakọ̀ sẹ́yìn.", "Ramp: ẹrù ní apá òkè, má yí ọkọ̀ padà lórí ramp.", "Ibi ìkẹ́rù: bíréèkì trailer ti fà, wedge ti dí táyà, a ti ṣàyẹ̀wò ilẹ̀.", "Gbígbé ọkọ̀ sí: ẹ̀ka nísàlẹ̀, neutral, pa ọkọ̀, fa bíréèkì.", "Ọkọ̀ ń ṣubú: dúró nínú rẹ̀, bẹ́líìtì wà, di í mú, tẹ̀ kúrò."],
          words: [["Cross aisle", "ibi tí ọ̀nà méjì nínú ilé ìkẹ́rùsí ti pàdé, bí oríta."], ["Wedge táyà (wheel chock)", "igi tàbí ohun onígun tí a fi dí táyà kí trailer má lè yí lọ."], ["Etí ibi ìkẹ́rù (dock edge)", "etí ibi ìkẹ́rù níbi tí ilẹ̀ ti já sílẹ̀."], ["Ọkọ̀ tí a fi sílẹ̀ (unattended)", "ọkọ̀ tí a fi sílẹ̀ láìsí ẹnìkan: o jìnnà sí i tó 25 feet tàbí jù bẹ́ẹ̀ lọ, tàbí o kò rí i mọ́."]],
          slides: [
            { title: "Wíwakọ̀", bullets: ["Ẹrù nísàlẹ̀, tí a tẹ̀ sẹ́yìn", "Fèrè ní cross aisle àti ibi tí o kò ti ríran", "O kò ríran kọjá ẹrù? Wakọ̀ sẹ́yìn"] },
            { title: "Ènìyàn", bullets: ["Kò sí ẹnìkan lábẹ́ ẹ̀ka tí a gbé sókè", "Kò sí ẹni tí ó gun ọkọ̀", "Má ṣe há ẹnìkan mọ́ ògiri tàbí àgbékalẹ̀ ẹrù láéláé"] },
            { title: "Ramp àti ibi ìkẹ́rù", bullets: ["Ẹrù ní apá òkè; kò sí yíyí padà lórí ramp", "Bíréèkì trailer ti fà, wedge ti dí táyà", "Ṣàyẹ̀wò ilẹ̀ trailer; má sún mọ́ etí rẹ̀"] },
            { title: "Gbígbé ọkọ̀ sí àti ìṣubú ọkọ̀", bullets: ["Ẹ̀ka nísàlẹ̀, neutral, pa ọkọ̀, fa bíréèkì", "Ọkọ̀ ń ṣubú: dúró nínú rẹ̀, bẹ́líìtì wà, tẹ̀ kúrò"] }
          ],
          sources: [OSHA_TRAVEL, OSHA_DOCKS, OSHA_178],
          tryIt: "Ṣe káàdì àpò kan pẹ̀lú àkọsílẹ̀ méjì: \"Kí n tó wakọ̀ wọ inú trailer\" àti \"Nígbà tí mo bá gbé ọkọ̀ sí\". Lẹ́yìn náà dáhùn ìṣẹ̀lẹ̀ àṣeṣe yìí ní kíkọ: o ń gbé ẹrù gíga tí ó dí ojú rẹ, o sì gbọ́dọ̀ sọ̀kalẹ̀ lórí ramp. Kí ni o máa ṣe?",
          youCanNow: "yan ohun tí kò léwu láti ṣe nígbà tí o bá ń wakọ̀, ní ibi ìkẹ́rù, lórí ramp, nígbà tí o bá ń gbé ọkọ̀ sí, àti tí ọkọ̀ bá bẹ̀rẹ̀ sí ní ṣubú.",
          quickCheck: [
            { objective: "O4", q: "Alábàáṣiṣẹ́ kan fẹ́ dúró lábẹ́ àwọn ẹ̀ka tí o gbé sókè láti tún àmì kan ṣe. Kí ni o máa sọ?", options: ["\"Ó dáa, yára o.\"", "\"Tí kò bá sí ẹrù lórí ẹ̀ka nìkan.\"", "\"Tí o bá dé fìlà líle nìkan.\"", "\"Rárá. Kò sí ẹni tí ó ń lọ sábẹ́ ẹ̀ka tí a gbé sókè. Màá kọ́kọ́ sọ wọ́n kalẹ̀.\""], answer: 3, why: "OSHA kò gba ẹnikẹ́ni láàyè láti dúró tàbí kọjá lábẹ́ ẹ̀ka tí a gbé sókè, yálà ẹrù wà lórí wọn tàbí kò sí." },
            { objective: "O4", q: "Forklift àjókòó rẹ bẹ̀rẹ̀ sí ní ṣubú. Kí ni o máa ṣe?", options: ["Dúró lórí ìjókòó, bẹ́líìtì wà, di ìdarí mú kí o sì tẹ̀ kúrò", "Fò jáde kíákíá", "Di mast mú", "Gbé àwọn ẹ̀ka sókè"], answer: 0, why: "Lórí ọkọ̀ àjókòó, dídúró nínú rẹ̀ pẹ̀lú bẹ́líìtì ni ọ̀nà tí ọkọ̀ kò fi ní tẹ̀ ọ́ pa." }
          ]
        },
        {
          title: "Gbígba ìdánilẹ́kọ̀ọ́ àti iṣẹ́ gẹ́gẹ́ bí awakọ̀ forklift",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kọ ètò láti gba ìdánilẹ́kọ̀ọ́ àti àyẹ̀wò, àti ìlà òtítọ́ kan fún résumé.",
          text: [
            "Ọ̀pọ̀ agbanisíṣẹ́ ní ilé ìkẹ́rùsí, ibùdó ìpínkiri ọjà àti ṣọ́ọ̀bù ńlá máa ń gba ènìyàn fún iṣẹ́ ilé ìkẹ́rùsí gbogbogbò, lẹ́yìn náà wọ́n á kọ́ wọn ní forklift. Àwọn ilé-iṣẹ́ tí ń wá òṣìṣẹ́ fún àwọn míì (staffing agency), ibùdó ìrànlọ́wọ́ iṣẹ́ àti kọ́lẹ́ẹ̀jì àdúgbò kan náà ń ṣe ìdánilẹ́kọ̀ọ́ forklift pẹ̀lú àṣeṣe ọwọ́. Béèrè bóyá ó ní wíwakọ̀ lábẹ́ olùkọ́ àti àyẹ̀wò iṣẹ́ gidi.",
            "Rántí: ibikíbi tí o bá ti kẹ́kọ̀ọ́, agbanisíṣẹ́ tuntun kọ̀ọ̀kan gbọ́dọ̀ rí i dájú pé a ti kọ́ ọ tí a sì ti ṣàyẹ̀wò rẹ fún ọkọ̀ rẹ̀ àti ibi iṣẹ́ rẹ̀ kí o tó wakọ̀ fúnra rẹ. Ìdánilẹ́kọ̀ọ́ tí o ti ní tẹ́lẹ̀ ń ṣèrànwọ́, agbanisíṣẹ́ sì lè má nílò láti tún kọ́ ọ ní àwọn kókó tí o ti kọ́ tí a sì ti ṣàyẹ̀wò rẹ lé lórí.",
            "Lórí résumé rẹ, sọ òtítọ́. Tí o bá parí ẹ̀kọ́ yìí, kọ pé o parí ìdánilẹ́kọ̀ọ́ ìmọ̀ ààbò forklift. Tí agbanisíṣẹ́ bá kọ́ ọ tí ó sì ṣàyẹ̀wò rẹ, kọ àwọn irú ọkọ̀ àti ọdún náà. Má ṣe kọ \"certified\" (ẹni tí ó ní ìwé-ẹ̀rí) láéláé tí o kò bá ní i.",
            "Nígbà ìfọ̀rọ̀wánilẹ́nuwò, sọ̀rọ̀ nípa àyẹ̀wò kí iṣẹ́ tó bẹ̀rẹ̀, àwo ìsọfúnni àti ààbò àwọn tí ń rìn lẹ́sẹ̀. Àwọn agbanisíṣẹ́ fẹ́ awakọ̀ tí ó kọ́kọ́ ń ṣọ́ra, kí ó tó yára."
          ],
          steps: ["Kọ agbanisíṣẹ́ tàbí ètò mẹ́ta ní àdúgbò rẹ tí ó ń kọ́ awakọ̀ forklift (ojú-òpó iṣẹ́, ibùdó ìrànlọ́wọ́ iṣẹ́, kọ́lẹ́ẹ̀jì àdúgbò).", "Béèrè lọ́wọ́ ọ̀kọ̀ọ̀kan: ṣé ó ní wíwakọ̀ lábẹ́ olùkọ́ àti àyẹ̀wò?", "Kọ ìlà òtítọ́ kan fún résumé nípa ohun tí o ti ṣe títí di báyìí.", "Ṣe àṣeṣe ìdáhùn ìṣẹ́jú-àáyá 30: \"Báwo ni o ṣe ń pa ara rẹ mọ́ láìléwu lórí forklift?\""],
          words: [["Staffing agency", "ilé-iṣẹ́ tí ó ń fi òṣìṣẹ́ sí iṣẹ́ ní àwọn ilé-iṣẹ́ míì."], ["Ibùdó ìrànlọ́wọ́ iṣẹ́ (workforce center)", "ọ́fíìsì ìjọba (tí a sábà ń pè ní American Job Center) tí ó ń ran àwọn ènìyàn lọ́wọ́ láti rí iṣẹ́ àti ìdánilẹ́kọ̀ọ́."]],
          slides: [
            { title: "Ibi tí ìdánilẹ́kọ̀ọ́ ti ń wáyé", bullets: ["Agbanisíṣẹ́ tí ó ń gbani síṣẹ́ tí ó sì ń kọ́ni", "Ibùdó ìrànlọ́wọ́ iṣẹ́ àti kọ́lẹ́ẹ̀jì àdúgbò", "Béèrè: wíwakọ̀ lábẹ́ olùkọ́ àti àyẹ̀wò?"] },
            { title: "Agbanisíṣẹ́ kọ̀ọ̀kan ń ṣàyẹ̀wò rẹ", bullets: ["Fún ọkọ̀ rẹ̀ àti ibi iṣẹ́ rẹ̀", "Kí o tó wakọ̀ fúnra rẹ"] },
            { title: "Sọ òtítọ́ lórí résumé rẹ", bullets: ["Ẹ̀kọ́: ìdánilẹ́kọ̀ọ́ ìmọ̀ ààbò forklift", "Agbanisíṣẹ́ kọ́ ọ: àwọn irú ọkọ̀ àti ọdún", "Má ṣe sọ pé o jẹ́ \"certified\" láéláé tí o kò bá jẹ́"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING],
          tryIt: "Kọ ètò rẹ: ibi mẹ́ta tí ó lè kọ́ ọ, ìbéèrè tí o máa béèrè lọ́wọ́ ọ̀kọ̀ọ̀kan, ìlà òtítọ́ kan fún résumé, àti ìdáhùn ìṣẹ́jú-àáyá 30 rẹ sí \"Báwo ni o ṣe ń pa ara rẹ mọ́ láìléwu lórí forklift?\" Ka ìdáhùn náà sókè.",
          youCanNow: "kọ ètò láti gba ìdánilẹ́kọ̀ọ́ àti àyẹ̀wò forklift, kí o sì ṣàpèjúwe ìdánilẹ́kọ̀ọ́ rẹ lọ́nà òtítọ́ lórí résumé.",
          quickCheck: [
            { objective: "O5", q: "O parí ẹ̀kọ́ yìí ṣùgbọ́n kò sí agbanisíṣẹ́ tí ó tíì ṣàyẹ̀wò rẹ. Ìlà résumé wo ló jẹ́ òtítọ́?", options: ["\"Awakọ̀ forklift tí ó ní ìwé-ẹ̀rí, gbogbo kíláàsì\"", "\"Mo parí ìdánilẹ́kọ̀ọ́ ìmọ̀ ààbò forklift (Koach Learn), 2026\"", "\"Awakọ̀ forklift tí OSHA fún ní ìwé àṣẹ\"", "\"Ọ̀jọ̀gbọ́n forklift, ọdún 10\""], answer: 1, why: "Ó sọ gẹ́lẹ́ ohun tí o ṣe, láìsọ pé o ní ìwé-ẹ̀rí tí o kò ní." },
            { objective: "O5", q: "Kí ni o yẹ kí o béèrè lọ́wọ́ ètò ìdánilẹ́kọ̀ọ́ forklift?", options: ["Bóyá ó ní wíwakọ̀ lábẹ́ olùkọ́ àti àyẹ̀wò iṣẹ́ gidi", "Bóyá ó ń fúnni ní káàdì tó lẹ́wà", "Bóyá o lè fo apá àṣeṣe ọwọ́", "Bóyá òun ló dín owó jù lórí ayélujára"], answer: 0, why: "Ìdánilẹ́kọ̀ọ́ OSHA ní àṣeṣe ọwọ́ àti àyẹ̀wò, nítorí náà rí i dájú pé ètò náà ní wọn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ẹrù, wíwakọ̀ àti gbígba iṣẹ́",
        questions: [
          { objective: "O3", q: "Kí ni load center?", options: ["Àárín ilé ìkẹ́rùsí", "Àárín kẹ̀kẹ́ ìdarí", "Jíjìn láti iwájú ẹ̀ka dé àárín ẹrù", "Gíga mast"], answer: 2, why: "A ń wọn load center láti iwájú àwọn ẹ̀ka dé ibi ìdọ́gba ìwúwo ẹrù." },
          { objective: "O3", q: "Ẹrù kan ń fì, ọ̀rá tí a fi dì í sì ti ya. Kí ni o máa ṣe?", options: ["Gbé e kíákíá", "Gbé e sókè kí o lè ríran", "Fi àwọn ẹ̀ka tì í", "Má ṣe gbé e; ròyìn rẹ̀ kí a lè tún un ṣe tàbí tún un tò"], answer: 3, why: "Ẹrù tí ó dúró ṣinṣin tí a tò dáadáa nìkan ni a gbọ́dọ̀ gbé." },
          { objective: "O4", q: "Ẹrù rẹ dí ojú rẹ níwájú. Báwo ni o ṣe máa rìn?", options: ["Sẹ́yìn, kí o máa wo ibi tí o ń lọ", "Síwájú, pẹ̀lú ẹrù ní òkè", "Síwájú, ní eré sí i", "Pẹ̀lú alábàáṣiṣẹ́ kan tí ó gun orí ẹ̀ka"], answer: 0, why: "Tí ẹrù bá dí ojú rẹ, rìn pẹ̀lú ẹrù lẹ́yìn (wakọ̀ sẹ́yìn)." },
          { objective: "O4", q: "Kí o tó wakọ̀ wọ inú trailer ní ibi ìkẹ́rù, kí ni a gbọ́dọ̀ ṣe?", options: ["Kò sí nǹkan", "Ṣí fèrèsé ẹ̀yìn trailer", "Fa bíréèkì trailer, fi wedge dí táyà rẹ̀, kí o sì ṣàyẹ̀wò ilẹ̀ rẹ̀", "Fun fèrè lẹ́ẹ̀mẹta"], answer: 2, why: "OSHA ń béèrè pé kí bíréèkì ti fà, kí wedge ti dí táyà, kí a sì ti ṣàyẹ̀wò ilẹ̀ trailer kí a tó wakọ̀ wọ inú rẹ̀." },
          { objective: "O5", q: "O lọ sí iṣẹ́ tí ó ń lo irú forklift míì. Kí ni òótọ́?", options: ["O nílò ìdánilẹ́kọ̀ọ́ àti àyẹ̀wò fún irú tuntun náà", "Káàdì àtijọ́ rẹ bo gbogbo nǹkan", "O lè kọ́ ọ fúnra rẹ lẹ́yìn àkókò iṣẹ́", "Kò sí ohun tí ó yí padà"], answer: 0, why: "Irú ọkọ̀ míì jẹ́ ìdí fún ìdánilẹ́kọ̀ọ́ àti àyẹ̀wò lórí ọkọ̀ náà." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìpìlẹ̀ Iṣẹ́ Awakọ̀ Forklift",
    questions: [
      { objective: "O5", q: "Lábẹ́ òfin OSHA, ta ló ń jẹ́rìí pé a ti kọ́ awakọ̀ forklift tí a sì ti ṣàyẹ̀wò rẹ̀?", options: ["Awakọ̀ náà", "Ojú-òpó wẹ́ẹ̀bù kan", "Agbanisíṣẹ́", "Ilé-iṣẹ́ tí ó ṣe forklift"], answer: 2, why: "Agbanisíṣẹ́ ló ń jẹ́rìí ìdánilẹ́kọ̀ọ́ àti àyẹ̀wò awakọ̀." },
      { objective: "O5", q: "Kí ni ọjọ́ orí tí ó kéré jù láti wa forklift níbi iṣẹ́?", options: ["16", "18", "14", "21"], answer: 1, why: "Òfin iṣẹ́ ti ìjọba àpapọ̀ kò gba òṣìṣẹ́ tí kò tíì pé ọmọ ọdún 18 láàyè láti wa forklift." },
      { objective: "O5", q: "Èwo ni ìdí fún ìdánilẹ́kọ̀ọ́ ìtúnṣe?", options: ["Near miss pẹ̀lú ẹni tí ń rìn lẹ́sẹ̀", "Aṣọ iṣẹ́ tuntun", "Àlékún owó oṣù", "Ọjọ́ ìsinmi"], answer: 0, why: "Ìjàǹbá tàbí near miss jẹ́ ọ̀kan lára àwọn ìdí ìdánilẹ́kọ̀ọ́ ìtúnṣe OSHA." },
      { objective: "O1", q: "Kí ni overhead guard ń ṣe?", options: ["Ó di ẹrù mú", "Ó ń dọ́gba ọkọ̀", "Ó ń darí ọkọ̀", "Ó ń dáàbò bo awakọ̀ lọ́wọ́ nǹkan tí ó ń jábọ́"], answer: 3, why: "Overhead guard ń dáàbò bo awakọ̀ lọ́wọ́ nǹkan tí ó ń jábọ́ láti òkè." },
      { objective: "O1", q: "Ẹ̀yà wo ni àwọn ẹ̀ka so mọ́?", options: ["Counterweight", "Carriage", "Àwọn táyà", "Ìjókòó"], answer: 1, why: "Àwọn ẹ̀ka so mọ́ carriage, tí ó ń gòkè tí ó sì ń sọ̀kalẹ̀ lórí mast." },
      { objective: "O1", q: "Pallet jack iná mànàmáná tí a ń rìn tẹ̀lé wà ní kíláàsì wo?", options: ["Kíláàsì VII", "Kíláàsì V", "Kíláàsì III", "Kíláàsì VI"], answer: 2, why: "Kíláàsì III ni ọkọ̀ ọwọ́ iná mànàmáná, pẹ̀lú àwọn tí a ń rìn tẹ̀lé." },
      { objective: "O2", q: "Ìgbà wo ni a gbọ́dọ̀ ṣàyẹ̀wò forklift?", options: ["Kí a tó lò ó, ó kéré tán lójoojúmọ́", "Lẹ́ẹ̀kan lọ́dún", "Lẹ́yìn ìjàǹbá nìkan", "Nígbà tí ó ṣì jẹ́ tuntun nìkan"], answer: 0, why: "OSHA ń béèrè àyẹ̀wò kí a tó lò ó, ó kéré tán lójoojúmọ́." },
      { objective: "O2", q: "Kí ló dé tí o kò fi gbọdọ̀ ki ọwọ́ bọ inú mast láti ṣàyẹ̀wò àwọn ṣẹ́ẹ̀nì?", options: ["Ó dọ̀tí", "Kò sí lára àyẹ̀wò náà", "Ọ̀gá ló ń ṣe é", "Mast lè gbéra kí ó sì tẹ ọwọ́ rẹ fọ́"], answer: 3, why: "Àwọn ẹ̀yà mast tí ó ń gbéra lè tẹ ọwọ́ fọ́; ìtọ́ni OSHA ni láti wò ó, tàbí lo igi láti dán bí ṣẹ́ẹ̀nì ṣe le tó wò." },
      { objective: "O2", q: "Àwo ìsọfúnni kò sí lára forklift kan. Kí ni o máa ṣe?", options: ["Méfò ìwọ̀n ẹrù rẹ̀", "Ròyìn rẹ̀; àwo náà gbọ́dọ̀ wà níbẹ̀ kí ó sì ṣeé kà", "Lo fọ́tò àwo ọkọ̀ míì lórí fóònù", "Fojú fò ó"], answer: 1, why: "Àwo orúkọ àti àwọn àmì gbọ́dọ̀ wà níbẹ̀ kí wọ́n sì ṣeé kà; ròyìn rẹ̀ kí o tó lo ọkọ̀ náà." },
      { objective: "O2", q: "Ta ló lè tún forklift ṣe?", options: ["Àwọn tí a kọ́ tí a sì fún ní àṣẹ nìkan", "Awakọ̀ èyíkéyìí", "Ẹnikẹ́ni tí ó ní irinṣẹ́", "Òṣìṣẹ́ tí ó ṣẹ̀ṣẹ̀ dé jù"], answer: 0, why: "Àwọn tí a fún ní àṣẹ tí a sì kọ́ nìkan ló yẹ kí ó tún ọkọ̀ ṣe." },
      { objective: "O3", q: "Àwo náà sọ pé 3,000 lb ní 24 inches. Ẹrù wo ni o lè gbé (àṣeṣe nìkan)?", options: ["Àpótí 3,500 lb", "Ẹrù 3,000 lb tí àárín rẹ̀ jìnnà tó 40 inches", "Ẹrù 1,000 lb tí ó ti ya tí ó sì ń fì", "Pallet 2,400 lb tí a dì, tí ó wà ní àárín"], answer: 3, why: "Kò kọjá ìwọ̀n, ó dúró ṣinṣin, ó sì wà ní àárín nínú load center tí a díwọ̀n." },
      { objective: "O3", q: "Kí ló máa ń ṣẹlẹ̀ tí àárín ẹrù bá jìnnà ju load center tí a díwọ̀n lọ?", options: ["Ọkọ̀ náà lè gbé púpọ̀ sí i", "Ìwọ̀n tí kò léwu máa dín kù", "Kò sí ohun tí ó yí padà", "Ọkọ̀ náà máa yára sí i"], answer: 1, why: "Load center tí ó gùn sí i máa ń mú kí ọkọ̀ má dúró ṣinṣin tó, nítorí náà ìwọ̀n tí ó lè gbé máa dín kù." },
      { objective: "O3", q: "Lẹ́yìn tí o gbé ẹrù sókè díẹ̀, kí ni o máa ṣe kí o tó rìn?", options: ["Tẹ mast sẹ́yìn díẹ̀ kí ẹrù lè fara ti backrest", "Tẹ̀ ẹ́ síwájú", "Gbé e sókè bí o ti lè ṣe tó", "Jẹ́ kí ẹnìkan dì í mú"], answer: 0, why: "Títẹ̀ sẹ́yìn díẹ̀ ń mú ẹrù dúró ṣinṣin mọ́ backrest." },
      { objective: "O4", q: "Báwo ni o ṣe gbọ́dọ̀ gbé ẹrù nígbà tí o bá ń wakọ̀?", options: ["Ní òkè, kí o lè ríran", "Tí a tẹ̀ síwájú", "Nísàlẹ̀, tí a tẹ̀ sẹ́yìn", "Pẹ̀lú ẹnìkan tí ó dì í mú"], answer: 2, why: "Ẹrù nísàlẹ̀ tí a tẹ̀ sẹ́yìn ń mú ọkọ̀ dúró ṣinṣin; má ṣe rìn pẹ̀lú ẹrù ní òkè tàbí tí a tẹ̀ síwájú láéláé." },
      { objective: "O4", q: "O dé cross aisle kan níbi tí o kò ti lè rí igun kejì. Kí ni o máa ṣe?", options: ["Yára sí i kí o lè kọjá kíákíá", "Dín eré kù kí o sì fun fèrè", "Gbé àwọn ẹ̀ka sókè", "Di ojú rẹ kí o sì lọ"], answer: 1, why: "OSHA sọ pé kí o dín eré kù kí o sì fun fèrè níbi tí ohun kan ti dí ojú rẹ." },
      { objective: "O4", q: "O ń wa forklift tí ó ru ẹrù sọ̀kalẹ̀ lórí ramp. Ọ̀nà wo?", options: ["Síwájú, ẹrù ló kọ́kọ́ lọ", "Ní ẹ̀gbẹ́", "Yí padà ní àárín ramp", "Sẹ́yìn, kí ẹrù lè wà ní apá òkè"], answer: 3, why: "Jẹ́ kí ẹrù wà ní apá òkè: síwájú nígbà tí o bá ń gòkè, sẹ́yìn nígbà tí o bá ń sọ̀kalẹ̀, má sì yí padà lórí ramp láéláé." },
      { objective: "O4", q: "O fi forklift rẹ sílẹ̀ láti lọ sinmi. Kí ni o gbọ́dọ̀ ṣe?", options: ["Sọ àwọn ẹ̀ka kalẹ̀, fi sí neutral, pa ọkọ̀, kí o sì fa bíréèkì", "Fi í sílẹ̀ kí ó máa ṣiṣẹ́ kí ó lè ṣetán", "Fi àwọn ẹ̀ka sílẹ̀ ní òkè", "Ní kí alábàáṣiṣẹ́ kan máa ṣọ́ ọ"], answer: 0, why: "Ọkọ̀ tí a fi sílẹ̀ gbọ́dọ̀ ní ẹ̀ka nísàlẹ̀, ìdarí ní neutral, ẹ̀rọ ní pípa àti bíréèkì ní fífà." },
      { objective: "O4", q: "Báwo ni o ṣe gbọ́dọ̀ jìnnà sí forklift míì tí ó wà níwájú rẹ tó?", options: ["Ẹsẹ̀ bàtà kan (1 foot)", "Bí o ti lè sún mọ́ ọn tó", "Nǹkan bí gígùn ọkọ̀ mẹ́ta", "Kò ṣe pàtàkì"], answer: 2, why: "OSHA ń béèrè àyè tó nǹkan bí gígùn ọkọ̀ mẹ́ta láàárín ọkọ̀." },
      { objective: "O5", q: "Ojú-òpó wẹ́ẹ̀bù kan sọ pé fídíò orí ayélujára rẹ̀ máa sọ ọ́ di \"OSHA certified\" ní ìṣẹ́jú 20. Kí ni òótọ́?", options: ["Ó rọ́pò ìdánilẹ́kọ̀ọ́ agbanisíṣẹ́", "OSHA ló ń ta káàdì náà", "Ó tó fún gbogbo iṣẹ́", "A ṣì nílò ìdánilẹ́kọ̀ọ́ ọwọ́ àti àyẹ̀wò láti ọ̀dọ̀ agbanisíṣẹ́"], answer: 3, why: "Ìdánilẹ́kọ̀ọ́ àti àyẹ̀wò agbanisíṣẹ́ ní ibi iṣẹ́ nìkan ló bá òfin OSHA mu." },
      { objective: "O1", q: "Kí ni àwo ìsọfúnni ń fi hàn?", options: ["Irú ọkọ̀ náà àti ìwọ̀n ẹrù tí ó lè gbé", "Orúkọ awakọ̀", "Àdírẹ́sì ilé ìkẹ́rùsí", "Owó epo"], answer: 0, why: "Àwo ìsọfúnni ń fi ìsọfúnni nípa irú ọkọ̀ àti ìwọ̀n ẹrù hàn." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 6, 8, 10, 11, 13, 15, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún ṣàyẹ̀wò.",
    criteria: [
      { name: "Àkọsílẹ̀ àyẹ̀wò", objective: "O2", notYet: "Àyẹ̀wò kọ́kọ́rọ́ pa tàbí kọ́kọ́rọ́ tàn kù, tàbí kò sí ìgbésẹ̀ fún ọkọ̀ tí ó léwu.", meets: "Ó bo gbogbo nǹkan kọ́kọ́rọ́ pa àti kọ́kọ́rọ́ tàn fún irú ọkọ̀ tí a yàn, ó sì sọ ohun tí a máa ṣe pẹ̀lú àbùkù.", exceeds: "Ó fi àwọn àyẹ̀wò àfikún fún ọkọ̀ iná mànàmáná tàbí propane kún un." },
      { name: "Àwọn ẹ̀yà tí a dárúkọ", objective: "O1", notYet: "Ẹ̀yà tí a dárúkọ kò tó mẹ́fà, tàbí iṣẹ́ wọn kò tọ́.", meets: "Ó dárúkọ ẹ̀yà mẹ́fà ó kéré tán pẹ̀lú iṣẹ́ ọ̀kọ̀ọ̀kan, àti kíláàsì ọkọ̀ náà.", exceeds: "Ó ṣàlàyé bí counterweight àti load backrest ṣe ń pa awakọ̀ mọ́ láìléwu." },
      { name: "Ìpinnu nípa ẹrù", objective: "O3", notYet: "A sọ pé ẹrù tí ó kọjá ìwọ̀n tàbí tí kò dúró ṣinṣin kò léwu.", meets: "Gbogbo ìpinnu ẹrù mẹ́ta tọ̀nà, pẹ̀lú ìdí tí ó lo àwo ìsọfúnni.", exceeds: "Ó kọ ìgbà tí a máa béèrè lọ́wọ́ ọ̀gá, bí ìwúwo tí a kò mọ̀ tàbí attachment." },
      { name: "Káàdì wíwakọ̀, ibi ìkẹ́rù àti gbígbé ọkọ̀ sí", objective: "O4", notYet: "Àyẹ̀wò ibi ìkẹ́rù tàbí ìgbésẹ̀ gbígbé ọkọ̀ sí kan kù.", meets: "Ó kọ àwọn ìgbésẹ̀ ibi ìkẹ́rù (bíréèkì, wedge, ilẹ̀) àti gbogbo ìgbésẹ̀ mẹ́rin gbígbé ọkọ̀ sí.", exceeds: "Ó fi òfin ramp, ti àwọn tí ń rìn lẹ́sẹ̀ àti ti ìṣubú ọkọ̀ kún un." },
      { name: "Ètò ìdánilẹ́kọ̀ọ́ àti ìlà résumé", objective: "O5", notYet: "Ó sọ pé òun ní ìwé-ẹ̀rí, tàbí pé a kò nílò ìdánilẹ́kọ̀ọ́ agbanisíṣẹ́.", meets: "Ó dárúkọ ibi mẹ́ta láti kẹ́kọ̀ọ́, ó sọ pé agbanisíṣẹ́ gbọ́dọ̀ ṣàyẹ̀wò, ó sì fún ní ìlà résumé tí ó jẹ́ òtítọ́.", exceeds: "Ó ní ìdáhùn ààbò ìṣẹ́jú-àáyá 30 tí ó ti ṣe àṣeṣe rẹ̀ fún ìfọ̀rọ̀wánilẹ́nuwò." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà àti àpò ìmúrasílẹ̀ tí ó yege rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ìdánilẹ́kọ̀ọ́ forklift lọ́dọ̀ agbanisíṣẹ́ tàbí ètò kan láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí a gbà síṣẹ́ ní ilé ìkẹ́rùsí tàbí gẹ́gẹ́ bí awakọ̀ forklift (ìròyìn alábàáṣiṣẹ́ àti ìwádìí àtẹ̀lé)",
      "Àwọn agbanisíṣẹ́ alábàáṣiṣẹ́ ròyìn pé àwọn òṣìṣẹ́ tuntun yege àyẹ̀wò iṣẹ́ gidi wọn ní ìgbà àkọ́kọ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì fún àwọn ojú-ewé OSHA eTool",
      "Ìwé àti gègé fún àwòrán, àkọsílẹ̀ àyẹ̀wò àti káàdì àpò",
      "Àṣàyàn: àwòrán forklift tí a tẹ̀ jáde àti àwo ìsọfúnni àpẹẹrẹ",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀"
    ],
    facilitatorNotes: [
      "Ṣàlàyé rẹ̀ kedere ní ìbẹ̀rẹ̀: ẹ̀kọ́ yìí kò fún ẹnikẹ́ni ní ìwé-ẹ̀rí; agbanisíṣẹ́ ló ń kọ́ni tí ó sì ń ṣàyẹ̀wò.",
      "Má ṣe jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣe àṣeṣe lórí forklift gidi gẹ́gẹ́ bí apá kan ẹ̀kọ́ yìí. Tí ètò rẹ bá ní ọkọ̀ ìdánilẹ́kọ̀ọ́, àṣeṣe ọwọ́ máa wáyé pẹ̀lú olùkọ́ tó kúnjú ìwọ̀n nìkan.",
      "Lo àwo ìsọfúnni tí a tẹ̀ jáde pẹ̀lú nọ́mbà àhùsọ fún àṣeṣe ẹrù.",
      "Ṣọ́ra fún àwọn akẹ́kọ̀ọ́ tí kò tíì pé ọmọ ọdún 18; wọ́n lè ṣe ẹ̀kọ́ náà ṣùgbọ́n wọn kò lè wa forklift níbi iṣẹ́.",
      "Fi rubric ṣe àmì fún àpò ìmúrasílẹ̀, kí o sì ṣàtúnyẹ̀wò ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
