"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-drones-crop-health.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_EO = { name: "FAO GIEWS: Wíwo ayé láti òkè (NDVI àti àwọn àmì ewéko)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const FAO_FAMEWS = { name: "FAO: app fóònù láti ṣèrànwọ́ nínú ìjà sí ìdin ológun (Fall Armyworm) ní Áfíríkà (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ODM = { name: "OpenDroneMap (sọ́fítíwẹ́ẹ̀ ọ̀fẹ́ fún ṣíṣe máàpù láti fọ́tò drone)", url: "https://www.opendronemap.org/" };
const QGIS = { name: "QGIS (sọ́fítíwẹ́ẹ̀ GIS ọ̀fẹ́)", url: "https://qgis.org/" };

module.exports = {
  id: "agri-drones-crop-health-yo",
  lang: "yo",
  translationOf: "agri-drones-crop-health",
  category: "Agriculture (Africa)",
  name: "Drone fún Àbójútó Oko 3: Ìlera Irè Oko, Kòkòrò àti Ṣíṣe Iṣẹ́ Dátà",
  skills: "Kíka máàpù ìlera irè oko NDVI, Rírí àmì kòkòrò, àrùn àti ìnira ní kùtùkùtù, Ṣíṣàyẹ̀wò àwọn agbègbè ìṣòro lórí ilẹ̀, Sísopọ̀ fọ́tò drone di máàpù kan, Ṣíṣe máàpù NDVI nínú QGIS, Kíkọ ìròyìn ìgbésẹ̀ fún oko",
  outcome: "sọ àwọn fọ́tò drone oko kan di máàpù ìlera irè oko, wá àwọn agbègbè ìṣòro, ṣàyẹ̀wò wọn lórí ilẹ̀, kí o sì kọ ìròyìn ìgbésẹ̀ kúkúrú tí àgbẹ̀ lè lò.",
  about: [
    "Èyí ni Ẹ̀kọ́ 3 nínú ọ̀wọ́ ẹ̀kọ́ àbójútó oko pẹ̀lú drone, fún àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ (extension officer), onímọ̀ ọ̀gbìn, alákòóso oko àti àwọn ọ̀dọ́ tí ń pèsè iṣẹ́ drone ní Kẹ́ńyà, Nàìjíríà àti káàkiri Áfíríkà. O yẹ kí o mọ bí a ṣe ń ya fọ́tò drone tí ó bò ara wọn (Ẹ̀kọ́ 2), tàbí kí o ní irú fọ́tò bẹ́ẹ̀ láti fi ṣiṣẹ́; àwọn àpẹẹrẹ dátà ọ̀fẹ́ wà lórí ayélujára.",
    "Orí 1 ń kọ́ ọ bí o ṣe lè ka máàpù ìlera irè oko, kí o sì dá àwọn àmì tí kòkòrò, àrùn, omi àti àìtó oúnjẹ ilẹ̀ ń fi sílẹ̀ ní kùtùkùtù mọ̀ lórí àgbàdo, ẹ̀gẹ́, ẹ̀wà, tíì àti kọfí, àti bí o ṣe lè fìdí wọn múlẹ̀ lórí ilẹ̀. Orí 2 ń kọ́ ọ bí o ṣe lè so fọ́tò pọ̀ di máàpù pẹ̀lú sọ́fítíwẹ́ẹ̀ ọ̀fẹ́, ṣe máàpù NDVI nínú QGIS, kí o sì kọ ìròyìn tí ó máa yọrí sí ìgbésẹ̀.",
    "Máàpù drone kò lè rọ́pò ojú àgbẹ̀ tàbí àyẹ̀wò òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ láéláé. Ó ń fi ibi tí o yẹ kí o kọ́kọ́ wò hàn, kí àkókò àti owó tí kò pọ̀ lè lọ sí ibi tó tọ́. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún pẹ̀lú iṣẹ́ àṣeṣe kan; ìdánwò ìmọ̀ kúkúrú wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Lo máàpù drone oko gidi kan tàbí àpẹẹrẹ dátà ọ̀fẹ́: ṣe máàpù NDVI tàbí máàpù àwọ̀, sàmì sí ó kéré tán agbègbè ìṣòro mẹ́ta, kọ ètò àyẹ̀wò lórí ilẹ̀ (ohun tí o máa wá ní agbègbè kọ̀ọ̀kan), kí o sì kọ ìròyìn ìgbésẹ̀ ojú-ewé kan fún àgbẹ̀ tí ó ní àwòrán máàpù, ohun tí o rí tàbí tí o fura sí, ìgbésẹ̀ tó kàn fún agbègbè kọ̀ọ̀kan, àti ẹni tí wọ́n máa kàn sí fún ìfìdímúlẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, onímọ̀ ọ̀gbìn, alákòóso oko àti àwọn ọ̀dọ́ tí ń pèsè iṣẹ́ drone ní Kẹ́ńyà, Nàìjíríà àti káàkiri Áfíríkà tí wọ́n ń ṣe Ẹ̀kọ́ 3 nínú ọ̀wọ́ ẹ̀kọ́ àbójútó pẹ̀lú drone, tí wọ́n ń ṣiṣẹ́ lórí irè oko bí àgbàdo, ẹ̀gẹ́, ẹ̀wà, tíì àti kọfí.",
    startingPoint: "Àwọn akẹ́kọ̀ọ́ lè ya fọ́tò drone tí ó bò ara wọn (Ẹ̀kọ́ 2) tàbí wọ́n ní àpẹẹrẹ dátà. Díẹ̀ nínú wọn ló ti so fọ́tò pọ̀ di máàpù rí, ṣe máàpù NDVI nínú QGIS, ka àmì kòkòrò, àrùn àti ìnira lórí máàpù, ṣàyẹ̀wò agbègbè lórí ilẹ̀, tàbí kọ ìròyìn tí àgbẹ̀ ṣiṣẹ́ lé lórí.",
    gap: "Fọ́tò drone wúlò nìkan nígbà tí ó bá di máàpù, tí a bá fẹsẹ̀ rìn lọ ṣàyẹ̀wò àwọn agbègbè aláìlágbára, tí àgbẹ̀ sì gba ìgbésẹ̀ tó kàn tí ó yé. Láìsí èyí, a máa rí ìṣòro pẹ́, a máa méfò ìtọ́jú, owó sì máa ṣòfò. Yíyí fọ́tò padà sí ìròyìn ìgbésẹ̀ tí a ti ṣàyẹ̀wò ń darí àkókò àti owó tí kò pọ̀ sí ibi tó tọ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a ṣàlàyé gbogbo ọ̀rọ̀ máàpù àti GIS",
      "Ẹ̀rọ: kọ̀mpútà tí ó lè lo QGIS àti OpenDroneMap ọ̀fẹ́, àti fóònù tí ó ní GPS fún àyẹ̀wò lórí ilẹ̀",
      "Dátà: dátà drone gidi tàbí àpẹẹrẹ dátà ọ̀fẹ́; ṣíṣe iṣẹ́ dátà lè gba wákàtí kan tàbí jù bẹ́ẹ̀ lọ",
      "Máàpù drone kò lè rọ́pò ojú àgbẹ̀ tàbí àyẹ̀wò onímọ̀ láéláé; kò sí ìmọ̀ràn oògùn apakòkòrò láti inú máàpù",
      "A máa ń pín dátà àti máàpù àwọn àgbẹ̀ nìkan pẹ̀lú àṣẹ wọn"
    ],
    prerequisites: "\"Drone fún Àbójútó Oko 2: Fífò, Yíya Fọ́tò àti Àwọn Sensọ̀\", tàbí àwọn fọ́tò drone tí ó bò ara wọn láti fi ṣiṣẹ́."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní máàpù ìlera irè oko NDVI tàbí máàpù àwọ̀", action: "ka àlàyé àwọ̀ (legend) kí o sì wá àwọn agbègbè aláìlágbára àti alágbára", standard: "nípa fífi ibì kan wé ibòmíì nínú oko àti fífi wé àwọn máàpù àtẹ̀yìnwá" },
    { id: "O2", condition: "Tí a bá fún ọ ní àwọn àmì lórí máàpù oko kan", action: "ṣàlàyé ohun tí àmì kọ̀ọ̀kan lè tọ́ka sí, bí kòkòrò, àrùn, omi, ẹ̀rọ tàbí oúnjẹ ilẹ̀", standard: "kí o sì ka àmì kọ̀ọ̀kan sí ìtọ́kasí tí a gbọ́dọ̀ fìdí rẹ̀ múlẹ̀, kì í ṣe àyẹ̀wò àrùn" },
    { id: "O3", condition: "Fún agbègbè ìṣòro kọ̀ọ̀kan lórí máàpù", action: "kọ ètò àyẹ̀wò lórí ilẹ̀ kí o sì kọ ohun tí o rí níbẹ̀ sílẹ̀", standard: "pẹ̀lú nọ́mbà agbègbè, kòórdínétì, ohun tí o rí, ohun tó ṣeé ṣe kó fà á, bí ó ṣe dá ọ lójú tó, àti fọ́tò" },
    { id: "O4", condition: "Tí a bá fún ọ ní àwọn fọ́tò drone tí ó bò ara wọn", action: "so wọ́n pọ̀ di orthomosaic pẹ̀lú sọ́fítíwẹ́ẹ̀ ọ̀fẹ́ kí o sì ṣàyẹ̀wò rẹ̀ fún ihò àti ìbàjẹ́ àwòrán", standard: "pẹ̀lú orúkọ tó yẹ fún fọ́tò, ẹ̀dà ìpamọ́ (backup), àti àyẹ̀wò èsì" },
    { id: "O5", condition: "Nípa lílo QGIS àti orthomosaic multispectral", action: "ṣírò máàpù NDVI kí o sì fi àwọ̀ sí i, pẹ̀lú ààlà oko àti àwọn ojúàmì àyẹ̀wò ilẹ̀ lórí rẹ̀", standard: "pẹ̀lú àgbékalẹ̀ (NIR - Red) / (NIR + Red)" },
    { id: "O6", condition: "Lẹ́yìn àyẹ̀wò lórí ilẹ̀", action: "kọ ìròyìn ìgbésẹ̀ oko ojú-ewé kan fún àgbẹ̀", standard: "pẹ̀lú àwòrán máàpù, ohun tí o rí, ìgbésẹ̀ tó kàn fún agbègbè kọ̀ọ̀kan àti ẹni tí wọ́n máa kàn sí, láìsí ìmọ̀ràn oògùn apakòkòrò láti inú máàpù" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíka ìlera irè oko",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kíka máàpù ìlera irè oko NDVI",
          minutes: 5,
          goal: "Ka máàpù NDVI pẹ̀lú ìwọ̀n àwọ̀ rẹ̀ kí o sì wá àwọn agbègbè aláìlágbára àti alágbára.",
          text: [
            "NDVI (Normalized Difference Vegetation Index, ìwọ̀n ewéko) ń fi ìmọ́lẹ̀ near-infrared (NIR) àti ìmọ́lẹ̀ pupa tí ewéko ń dá padà wé ara wọn. Iye rẹ̀ wà láàárín -1 sí +1. FAO ṣàlàyé pé iye gíga tí ó jẹ́ pọ́sítíìfù fi ewéko tí ó pọ̀ tí ó sì ní ìlera hàn, nígbà tí iye kékeré tàbí nẹ́gétíìfù fi ewéko díẹ̀, ilẹ̀ òfìfo tàbí omi hàn.",
            "Lórí máàpù NDVI drone, pixel kọ̀ọ̀kan gba àwọ̀ láti inú ìwọ̀n àwọ̀ kan, tí ó sábà máa ń jẹ́ pupa fún iye kékeré sí àwọ̀ ewé fún iye gíga. Máa ka àlàyé àwọ̀ (legend) nígbà gbogbo: àwọ̀ wà ní ìbámu pẹ̀lú máàpù yẹn nìkan. Oko tí ó pupa látòkèdélẹ̀ ní ìbẹ̀rẹ̀ àsìkò lè jẹ́ pé ewéko kéékèèké àti ilẹ̀ òfìfo ló wà níbẹ̀.",
            "Wá ìyàtọ̀ nínú oko, má wo àwọ̀ nìkan. Agbègbè kékeré aláìlágbára nínú oko àgbàdo tí ó dọ́gba níbòmíì yẹ fún ìbẹ̀wò. Fi wé àwọn máàpù àtẹ̀yìnwá ti oko kan náà: agbègbè tí ó ń tóbi sí i lọ́sẹ̀ọ̀sẹ̀ ṣe pàtàkì ju èyí tí ó dúró bákan náà."
          ],
          steps: ["Ka àlàyé àwọ̀: àwọ̀ wo ni iye kékeré, àwọ̀ wo sì ni iye gíga?", "Kọ irè oko àti ìpele ìdàgbàsókè rẹ̀ sílẹ̀: irè oko tí ó ṣì kéré ń fi ilẹ̀ púpọ̀ hàn.", "Wá àwọn agbègbè tí ó yàtọ̀ sí ìyókù oko.", "Fi wé máàpù àtẹ̀yìnwá: ṣé agbègbè náà tuntun ni, tàbí ó ń tóbi sí i?", "Sàmì sí àwọn agbègbè tí o máa bẹ̀ wò."],
          words: [["NDVI", "ìwọ̀n ewéko láti -1 sí +1; iye gíga sábà máa ń túmọ̀ sí ewéko àwọ̀ ewé tí ó pọ̀ tí ó sì ní ìlera."], ["Àlàyé àwọ̀ (legend)", "kọ́kọ́rọ́ tí ó fi ohun tí àwọ̀ kọ̀ọ̀kan lórí máàpù túmọ̀ sí hàn."], ["Ìpele ìdàgbàsókè", "bí irè oko ti dàgbà tó, láti ọmọ ewéko títí di ìkórè."]],
          slides: [
            { title: "NDVI ní ìlà kan", bullets: ["Ó ń fi ìmọ́lẹ̀ near-infrared àti pupa wé ara wọn", "Láti -1 sí +1", "Gíga = ewéko tó pọ̀, tó ní ìlera; kékeré = ewéko díẹ̀, ilẹ̀ tàbí omi"] },
            { title: "Kọ́kọ́ ka àlàyé àwọ̀", bullets: ["Àwọ̀ wà ní ìbámu pẹ̀lú máàpù yẹn nìkan", "Irè oko tí ó ṣì kéré ń fi ilẹ̀ púpọ̀ hàn"] },
            { title: "Wá ìyàtọ̀", bullets: ["Àwọn agbègbè tí ó yàtọ̀ sí ìyókù", "Agbègbè tuntun tàbí tí ó ń tóbi sí i ló ṣe pàtàkì jù", "Sàmì sí àwọn agbègbè tí o máa bẹ̀ wò"] }
          ],
          sources: [FAO_EO],
          tryIt: "Wá àpẹẹrẹ máàpù NDVI lórí ayélujára (wá \"NDVI map maize field\") tàbí lo ọ̀kan tìrẹ. Ka àlàyé àwọ̀, sàmì sí agbègbè aláìlágbára méjì àti agbègbè alágbára kan, kí o sì kọ ìpele ìdàgbàsókè tí irè oko náà lè wà.",
          youCanNow: "ka àlàyé àwọ̀ máàpù NDVI kí o sì wá àwọn agbègbè aláìlágbára àti alágbára tí ó yẹ fún ìbẹ̀wò.",
          quickCheck: [
            { objective: "O1", q: "Kí ni iye NDVI gíga tí ó jẹ́ pọ́sítíìfù ń fi hàn?", options: ["Ilẹ̀ òfìfo", "Omi", "Drone tí ó ti bàjẹ́", "Ewéko tí ó pọ̀ tí ó sì ní ìlera"], answer: 3, why: "Iye NDVI gíga fi ewéko tí ó pọ̀ tí ó sì ní ìlera hàn; iye kékeré fi ewéko díẹ̀, ilẹ̀ tàbí omi hàn." },
            { objective: "O1", q: "Oko àgbàdo kan jẹ́ àwọ̀ ewé dọ́gba àyàfi agbègbè kékeré kan tí ó lọ sílẹ̀. Kí ni o máa ṣe?", options: ["Sàmì sí agbègbè náà láti bẹ̀ ẹ́ wò kí o sì fi wé àwọn máàpù àtẹ̀yìnwá", "Fojú fò ó dá nítorí pé èyí tó pọ̀ jù nínú oko jẹ́ àwọ̀ ewé", "Fín oògùn sí gbogbo oko", "Pa máàpù náà rẹ́"], answer: 0, why: "Agbègbè aláìlágbára nínú oko tí ó dọ́gba yẹ fún ìbẹ̀wò, àwọn máàpù àtẹ̀yìnwá sì ń fi hàn bóyá ó ń tóbi sí i." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rírí àmì kòkòrò, àrùn àti ìnira ní kùtùkùtù",
          minutes: 6,
          goal: "Dá àwọn àmì máàpù tí ó tọ́ka sí kòkòrò, àrùn, omi tàbí àìtó oúnjẹ ilẹ̀ mọ̀.",
          text: [
            "Ìṣòro kọ̀ọ̀kan ń fi ìrísí tirẹ̀ sílẹ̀ lórí máàpù. Agbègbè tí ó bẹ̀rẹ̀ ní kékeré tí ó sì ń tàn kálẹ̀ láàárín ọ̀sẹ̀ díẹ̀ lè tọ́ka sí kòkòrò tàbí àrùn, bí ìdin ológun (fall armyworm) nínú àgbàdo tàbí àrùn kòkòrò àìfojúrí (virus) nínú ẹ̀gẹ́. Ìṣòro tí ó wà lẹ́gbẹ̀ẹ́ ẹ̀gbẹ́ kan lè wá láti oko aládùúgbò, ọ̀nà tàbí afẹ́fẹ́. Ìlà títọ́ sábà máa ń tẹ̀lé ènìyàn tàbí ẹ̀rọ: ìlà tí wọ́n fò nígbà tí wọ́n ń fi ajílẹ̀ sí, ọ̀pá omi ìrigeson tí ó dí, tàbí àṣìṣe ẹ̀rọ gbìngbìn.",
            "Àwọn igun àti kòtò ilẹ̀ tí ó rẹlẹ̀ tí ó sì tutù ń tọ́ka sí omi tí ó pọ̀ jù (waterlogging); ilẹ̀ gíga, oníyanrìn tàbí ilẹ̀ tí ó dagun ń tọ́ka sí àìtó omi, pàápàá lórí àwòrán thermal (ooru) ní ọ̀sán. Pípọ́n dọ́gba káàkiri gbogbo oko lè tọ́ka sí àìtó oúnjẹ ilẹ̀ bí nitrogen, ṣùgbọ́n ó tún lè jẹ́ ọ̀gbẹlẹ̀.",
            "Àmì jẹ́ ìtọ́kasí, kì í ṣe àyẹ̀wò àrùn. Kòkòrò àti àrùn jọra wọn láti òkè, ìtọ́jú wọn sì yàtọ̀ gan-an. A lè kọ ìdin ológun tí a rí sílẹ̀ nínú app FAMEWS ti FAO níbi tí wọ́n bá ti ń lò ó; fìdí kòkòrò tàbí àrùn èyíkéyìí tí o fura sí múlẹ̀ pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí ilé-ìwòsàn ohun ọ̀gbìn kí o tó ṣe nǹkan kan."
          ],
          words: [["Àmì (pattern)", "ìrísí àti ìtànkálẹ̀ ìṣòro lórí máàpù: agbègbè, ẹ̀gbẹ́, ìlà, ibi tí ó rẹlẹ̀."], ["Ìdin ológun (fall armyworm)", "ìdin kòkòrò tí ń jẹ àgbàdo àti àwọn irè oko míì; ó tàn káàkiri Áfíríkà láti ọdún 2016."], ["Ilé-ìwòsàn ohun ọ̀gbìn (plant clinic)", "ibi tí àwọn òṣìṣẹ́ tí a kọ́ ti ń ṣàyẹ̀wò ìṣòro ohun ọ̀gbìn tí àwọn àgbẹ̀ mú wá."]],
          slides: [
            { title: "Ìrísí ń sọ ìtàn", bullets: ["Agbègbè tí ó ń tàn kálẹ̀: kòkòrò tàbí àrùn?", "Ẹ̀gbẹ́ kan: aládùúgbò, ọ̀nà tàbí afẹ́fẹ́?", "Ìlà títọ́: ẹ̀rọ, ajílẹ̀ tàbí ọ̀pá omi ìrigeson"] },
            { title: "Omi àti oúnjẹ ilẹ̀", bullets: ["Kòtò tí ó rẹlẹ̀ tí ó tutù: omi tí ó pọ̀ jù", "Ilẹ̀ gíga oníyanrìn tí ó dagun: àìtó omi", "Pípọ́n dọ́gba: oúnjẹ ilẹ̀ tàbí ọ̀gbẹlẹ̀"] },
            { title: "Ìtọ́kasí ni, kì í ṣe àyẹ̀wò àrùn", bullets: ["Kòkòrò àti àrùn jọra wọn láti òkè", "Ìtọ́jú wọn yàtọ̀ gan-an", "Fìdí rẹ̀ múlẹ̀ pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà tàbí ilé-ìwòsàn ohun ọ̀gbìn"] }
          ],
          sources: [FAO_FAMEWS],
          tryIt: "Ya àwòrán kékeré mẹ́rin ti oko kan: ọ̀kan pẹ̀lú agbègbè tí ó ń tàn kálẹ̀, ọ̀kan pẹ̀lú ìṣòro lẹ́gbẹ̀ẹ́ ẹ̀gbẹ́ kan, ọ̀kan pẹ̀lú ìlà, ọ̀kan pẹ̀lú igun tí ó rẹlẹ̀ tí ó sì tutù. Lábẹ́ ọ̀kọ̀ọ̀kan, kọ ohun méjì tí ó lè fà á.",
          youCanNow: "dá àwọn àmì ìṣòro tí ó wọ́pọ̀ lórí máàpù irè oko mọ̀, kí o sì to àwọn ohun tí ó ṣeé ṣe kó fà á tí o máa ṣàyẹ̀wò.",
          quickCheck: [
            { objective: "O2", q: "Kí ni agbègbè tí ó bẹ̀rẹ̀ ní kékeré tí ó sì ń tàn kálẹ̀ láàárín ọ̀sẹ̀ díẹ̀ lè tọ́ka sí?", options: ["Àṣìṣe ẹ̀rọ gbìngbìn", "Kòkòrò tàbí àrùn", "Ọ̀nà kan", "Ihò omi tí ó dí nìkan"], answer: 1, why: "Agbègbè tí ó ń tàn kálẹ̀ láàárín ọ̀sẹ̀ díẹ̀ lè tọ́ka sí kòkòrò tàbí àrùn bí ìdin ológun tàbí àrùn virus ẹ̀gẹ́." },
            { objective: "O2", q: "Máàpù fi irè oko aláìlágbára hàn ní apá gíga oníyanrìn oko náà ní ọ̀sán tí ooru mú. Kí ni o kọ́kọ́ fura sí?", options: ["Omi tí ó pọ̀ jù", "Ajílẹ̀ tí ó pọ̀ jù", "Àìtó omi", "Ìlà gbìngbìn tí wọ́n fò"], answer: 2, why: "Ilẹ̀ gíga, oníyanrìn tàbí ilẹ̀ tí ó dagun sábà máa ń fi àìtó omi hàn, pàápàá lórí àwòrán thermal ọ̀sán." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Àyẹ̀wò lórí ilẹ̀: fífẹsẹ̀ rìn lọ ṣàyẹ̀wò àwọn agbègbè",
          minutes: 5,
          goal: "Bẹ agbègbè ìṣòro kọ̀ọ̀kan wò pẹ̀lú ètò kí o sì kọ ohun tí o rí sílẹ̀.",
          text: [
            "Àyẹ̀wò lórí ilẹ̀ (ground-truthing) túmọ̀ sí lílọ sí ibi gangan tí ó wà lórí máàpù láti wo ohun tí ó wà níbẹ̀ ní tòótọ́. Gbé máàpù náà sórí fóònù rẹ tí ó ní GPS (ọ̀pọ̀ app máàpù àti GIS ọ̀fẹ́ lè fi ibi tí o wà hàn lórí máàpù drone), tàbí kọ kòórdínétì agbègbè kọ̀ọ̀kan sílẹ̀.",
            "Ní agbègbè kọ̀ọ̀kan, wo àwọn ohun ọ̀gbìn, ewé (òkè àti abẹ́ rẹ̀), igi ọ̀gbìn àti gbòǹgbò, ilẹ̀ àti ọ̀rinrin rẹ̀, àti àwọn kòkòrò. Fi wé àwọn ohun ọ̀gbìn tí ó ní ìlera ní mítà díẹ̀ sí i ní agbègbè alágbára. Ya fọ́tò tí ó ṣe kedere kí o sì kọ àkọsílẹ̀ kúkúrú.",
            "Kọ ohun tí o rí sílẹ̀ ní ọ̀nà kan náà nígbà gbogbo: nọ́mbà agbègbè, kòórdínétì, irè oko àti ìpele rẹ̀, ohun tí o rí, ohun tó ṣeé ṣe kó fà á, bí ó ṣe dá ọ lójú tó, àti nọ́mbà fọ́tò. Àkọsílẹ̀ tó dára ń jẹ́ kí máàpù tó kàn rọrùn láti kà, ó sì ń ran onímọ̀ tí ó máa fìdí ohun tó fà á múlẹ̀ lọ́wọ́."
          ],
          steps: ["Fún agbègbè kọ̀ọ̀kan ní nọ́mbà kí o sì kọ kòórdínétì rẹ̀ sílẹ̀.", "Rìn lọ síbẹ̀ pẹ̀lú máàpù GPS lórí fóònù rẹ.", "Ṣàyẹ̀wò ohun ọ̀gbìn, ewé, igi ọ̀gbìn, gbòǹgbò, ilẹ̀, ọ̀rinrin àti kòkòrò.", "Fi wé ibì kan tí ó ní ìlera nítòsí.", "Kọ agbègbè, kòórdínétì, ohun tí o rí, ohun tó ṣeé ṣe kó fà á, bí ó ṣe dá ọ lójú tó àti nọ́mbà fọ́tò sílẹ̀."],
          words: [["Àyẹ̀wò lórí ilẹ̀ (ground-truthing)", "ṣíṣàyẹ̀wò lórí ilẹ̀ ohun tí máàpù tàbí àwòrán fi hàn."], ["Kòórdínétì (coordinates)", "àwọn nọ́mbà latitude àti longitude tí ó fi ibi gangan hàn."]],
          slides: [
            { title: "Lọ sí ibi gangan", bullets: ["Máàpù pẹ̀lú GPS lórí fóònù rẹ", "Tàbí kọ kòórdínétì agbègbè kọ̀ọ̀kan sílẹ̀"] },
            { title: "Wò ó dáadáa", bullets: ["Òkè àti abẹ́ ewé, igi ọ̀gbìn, gbòǹgbò", "Ilẹ̀ àti ọ̀rinrin, kòkòrò", "Fi wé ibì kan tí ó ní ìlera nítòsí"] },
            { title: "Kọ sílẹ̀ ní ọ̀nà kan náà nígbà gbogbo", bullets: ["Agbègbè, kòórdínétì, irè oko àti ìpele", "Ohun tí o rí, ohun tó ṣeé ṣe kó fà á, bí ó ṣe dá ọ lójú tó", "Nọ́mbà fọ́tò"] }
          ],
          tryIt: "Ṣe fọ́ọ̀mù àyẹ̀wò lórí ilẹ̀ (lórí ìwé tàbí nínú spreadsheet lórí fóònù) pẹ̀lú àwọn ọ̀wọ̀n wọ̀nyí: agbègbè, kòórdínétì, irè oko àti ìpele, ohun tí mo rí, ohun tó ṣeé ṣe kó fà á, bí ó ṣe dá mi lójú tó, fọ́tò. Kún ìlà kan fún agbègbè gidi tàbí àpẹẹrẹ.",
          youCanNow: "ṣètò ìbẹ̀wò àyẹ̀wò lórí ilẹ̀ kí o sì ṣe é, kí o sì kọ ohun tí o rí sínú fọ́ọ̀mù tí ó ṣe kedere.",
          quickCheck: [
            { objective: "O3", q: "Báwo ni o ṣe lè rí ibi gangan tí agbègbè kan wà lórí máàpù nígbà tí o bá wà nínú oko?", options: ["Méfò láti inú àwọ̀ irè oko", "Béèrè lọ́wọ́ aládùúgbò", "Gbé máàpù sórí fóònù tí ó ní GPS, tàbí kọ kòórdínétì agbègbè náà sílẹ̀", "Máa rìn títí ohun ọ̀gbìn yóò fi dà bí ẹni pé ó ti bàjẹ́"], answer: 2, why: "Fóònù tí ó fi ibi tí o wà hàn lórí máàpù drone, tàbí kòórdínétì agbègbè náà, ń mú ọ dé ibi gangan." },
            { objective: "O3", q: "O dé agbègbè 2, o sì rí àgbàdo tí ó ń rọ. Kí ni o máa kọ sílẹ̀?", options: ["\"Ohun ọ̀gbìn tí kò dára\" nìkan", "Kò sí nǹkan; o máa rántí", "Fọ́tò kan láìsí àkọsílẹ̀", "Nọ́mbà agbègbè, kòórdínétì, ìpele irè oko, ohun tí o rí, ohun tó ṣeé ṣe kó fà á, bí ó ṣe dá ọ lójú tó àti nọ́mbà fọ́tò"], answer: 3, why: "Kíkọ àwọn nǹkan kan náà sílẹ̀ nígbà gbogbo ń jẹ́ kí a lè fi àkọsílẹ̀ wé ara wọn, ó sì ń ran onímọ̀ lọ́wọ́ láti fìdí ohun tó fà á múlẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíka ìlera irè oko",
        questions: [
          { objective: "O1", q: "Máàpù NDVI oko kan pupa ní èyí tó pọ̀ jù ní ìbẹ̀rẹ̀ àsìkò. Ìdí tó ṣeé ṣe jù ni:", options: ["Drone náà ti bàjẹ́", "Ewéko kéékèèké àti ilẹ̀ òfìfo púpọ̀", "Gbogbo nǹkan ti kú", "Òjò rọ̀"], answer: 1, why: "Irè oko tí ó ṣì kéré bo ilẹ̀ díẹ̀, nítorí náà ilẹ̀ ń mú iye náà lọ sílẹ̀." },
          { objective: "O1", q: "Agbègbè wo ni o yẹ kí o kọ́kọ́ bẹ̀ wò?", options: ["Agbègbè tí ó rí bákan náà bí ti oṣù tó kọjá", "Agbègbè àwọ̀ ewé tí ó lágbára jù", "Agbègbè aláìlágbára tí ó ti tóbi sí i láti máàpù tó kọjá", "Ààlà oko tí koríko wà"], answer: 2, why: "Agbègbè tí ó ń tóbi sí i fi ìṣòro tí ó ń ṣiṣẹ́ tí ó sì ń tàn kálẹ̀ hàn." },
          { objective: "O2", q: "Ìlà títọ́ ti irè oko aláìlágbára nínú oko sábà máa ń tọ́ka sí:", options: ["Ẹ̀rọ, ajílẹ̀ tàbí ọ̀pá omi ìrigeson", "Virus tí ó ń tàn láti ara ohun ọ̀gbìn kan", "Afẹ́fẹ́ láti ẹ̀gbẹ́ kan", "Kò sí nǹkan"], answer: 0, why: "Ìlà títọ́ ń tẹ̀lé bí ènìyàn àti ẹ̀rọ ṣe ń ṣiṣẹ́ nínú oko." },
          { objective: "O2", q: "Máàpù drone fi hàn gbangba pé àrùn lè wà. Kí o tó fín oògùn, o yẹ kí o:", options: ["Fín oògùn tí ó lágbára jù", "Fi máàpù náà sórí ayélujára", "Fín oògùn sí gbogbo oko", "Fìdí ohun tó fà á múlẹ̀ pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí ilé-ìwòsàn ohun ọ̀gbìn"], answer: 3, why: "Kòkòrò àti àrùn jọra wọn láti òkè, wọ́n sì nílò ìtọ́jú tí ó yàtọ̀." },
          { objective: "O3", q: "Kí ló dé tí a fi ń fi agbègbè aláìlágbára wé àwọn ohun ọ̀gbìn tí ó ní ìlera ní mítà díẹ̀ sí i?", options: ["Láti rí ohun tí ó yàtọ̀", "Láti fi bátìrì pamọ́", "Nítorí pé òfin sọ bẹ́ẹ̀", "Láti rí ìsopọ̀ fóònù tí ó dára jù"], answer: 0, why: "Fífi wọ́n wé ara wọn lẹ́gbẹ̀ẹ́ ara wọn ń fi ohun tí ó ṣe àwọn ohun ọ̀gbìn aláìlágbára hàn." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe iṣẹ́ dátà drone",
      lessons: [
        {
          objectives: ["O4"],
          title: "Sísopọ̀ fọ́tò di máàpù kan",
          minutes: 6,
          goal: "Sọ àwọn fọ́tò drone tí ó bò ara wọn di máàpù orthomosaic kan.",
          text: [
            "Sọ́fítíwẹ́ẹ̀ ìsopọ̀ fọ́tò ń wá àwọn nǹkan tí ó hàn nínú fọ́tò tí ó bò ara wọn, ó ń ṣírò ibi tí a ti ya fọ́tò kọ̀ọ̀kan, ó sì ń kọ́ àwòrán kan tí ó péye bí máàpù tí a ń pè ní orthomosaic. Ó tún lè ṣe elevation model (máàpù gíga ilẹ̀ àti irè oko).",
            "Àwọn ọ̀nà ọ̀fẹ́ wà. OpenDroneMap jẹ́ sọ́fítíwẹ́ẹ̀ ọ̀fẹ́ tí ẹnikẹ́ni lè rí kóòdù rẹ̀ (open source), WebODM rẹ̀ sì jẹ́ kí o gbé fọ́tò sókè nínú browser lórí kọ̀mpútà tìrẹ. Àwọn iṣẹ́ cloud tí a ń sanwó fún àti app ti ilé-iṣẹ́ tí ó ṣe drone náà wà pẹ̀lú; ṣàyẹ̀wò iye owó wọn lọ́wọ́lọ́wọ́ àti ibi tí wọ́n ń pa dátà rẹ mọ́ sí.",
            "Iṣẹ́ yìí nílò kọ̀mpútà tí ó lágbára díẹ̀ àti àkókò: fọ́tò ọgọ́rùn-ún díẹ̀ lè gba wákàtí kan tàbí jù bẹ́ẹ̀ lọ. Da àwọn fọ́tò kúrò lórí drone sínú fódà tí a fi orúkọ oko, apá oko àti ọjọ́ sọ, ṣe ẹ̀dà ìpamọ́ (backup) wọn, lẹ́yìn náà ṣe iṣẹ́ náà. Ṣàyẹ̀wò èsì: ihò, ibi tí kò hàn kedere tàbí ìlà tí ó wọ́ fi hàn pé fọ́tò kò bò ara wọn tó tàbí pé fọ́tò kò dára."
          ],
          steps: ["Da àwọn fọ́tò sínú fódà tí a pè ní oko_apá_ọjọ́ (fún àpẹẹrẹ Kitale_Block3_2026-11-04).", "Ṣe ẹ̀dà ìpamọ́ (backup) fódà náà.", "Ṣí sọ́fítíwẹ́ẹ̀ ìsopọ̀ kí o sì ṣẹ̀dá iṣẹ́ tuntun.", "Fi àwọn fọ́tò kún un kí o sì bẹ̀rẹ̀ iṣẹ́ náà.", "Ṣàyẹ̀wò orthomosaic fún ihò, ibi tí kò hàn kedere àti ìlà tí ó wọ́.", "Gbé e jáde bí GeoTIFF (àwòrán máàpù tí ibi tí ó wà ti wà nínú rẹ̀)."],
          words: [["Orthomosaic", "àwòrán ńlá kan tí ó péye bí máàpù, tí a so pọ̀ láti inú ọ̀pọ̀ fọ́tò tí ó bò ara wọn."], ["GeoTIFF", "fáìlì àwòrán tí ó gbé ibi tí ó wà lórí ilẹ̀ ayé dání, kí sọ́fítíwẹ́ẹ̀ máàpù lè gbé e sí ibi tó tọ́."], ["Elevation model", "máàpù gíga ilẹ̀ tàbí ojú irè oko."]],
          slides: [
            { title: "Fọ́tò di máàpù", bullets: ["Sọ́fítíwẹ́ẹ̀ ń bá fọ́tò tí ó bò ara wọn mu", "Ó ń kọ́ orthomosaic kan", "Ó tún lè kọ́ elevation model"] },
            { title: "Irinṣẹ́ ọ̀fẹ́ àti ti owó", bullets: ["OpenDroneMap / WebODM: ọ̀fẹ́, open source", "Iṣẹ́ cloud ti owó àti app ilé-iṣẹ́ drone", "Ṣàyẹ̀wò iye owó àti ibi tí wọ́n ń pa dátà rẹ mọ́"] },
            { title: "Àṣà tó dára", bullets: ["Fódà tí a pè ní oko_apá_ọjọ́", "Ṣe backup kí o tó ṣe iṣẹ́ náà", "Ṣàyẹ̀wò fún ihò, ibi tí kò hàn kedere, ìlà tí ó wọ́", "Gbé e jáde bí GeoTIFF"] }
          ],
          sources: [ODM],
          tryIt: "Gba àpẹẹrẹ dátà drone ọ̀fẹ́ sílẹ̀ (OpenDroneMap ní link sí àwọn àpẹẹrẹ dátà) tàbí lo fọ́tò tìrẹ. Fún fódà náà ní orúkọ kí o sì ṣe backup rẹ̀, tí kọ̀mpútà rẹ bá sì lè ṣe é, sọ ọ́ di orthomosaic. Tí kò bá lè ṣe é, kọ ìgbésẹ̀ kọ̀ọ̀kan tí o máa tẹ̀lé sílẹ̀.",
          youCanNow: "ṣètò àwọn fọ́tò drone kí o sì so wọ́n pọ̀ di máàpù orthomosaic pẹ̀lú sọ́fítíwẹ́ẹ̀ ọ̀fẹ́.",
          quickCheck: [
            { objective: "O4", q: "Yàtọ̀ sí orthomosaic, kí ni ohun míì tí sọ́fítíwẹ́ẹ̀ ìsopọ̀ lè ṣe?", options: ["Elevation model tí ó fi gíga ilẹ̀ àti irè oko hàn", "Ìwé àlàyé oògùn apakòkòrò", "Àsọtẹ́lẹ̀ ojú ọjọ́", "Àyẹ̀wò ilẹ̀"], answer: 0, why: "Sọ́fítíwẹ́ẹ̀ ìsopọ̀ tún lè ṣe elevation model tí ó fi gíga ilẹ̀ àti irè oko hàn." },
            { objective: "O4", q: "O ṣẹ̀ṣẹ̀ balẹ̀ pẹ̀lú fọ́tò 400. Kí ni o máa ṣe kí o tó bẹ̀rẹ̀ iṣẹ́ lórí wọn?", options: ["Pa àwọn tí kò hàn kedere rẹ́ lórí drone nìkan", "Da wọ́n sínú fódà tí a fi orúkọ oko, apá oko àti ọjọ́ sọ, kí o sì ṣe backup wọn", "Ṣe iṣẹ́ lórí wọn tààrà láti inú káàdì drone", "Fi wọ́n ránṣẹ́ sí àgbẹ̀ nípasẹ̀ ímeèlì"], answer: 1, why: "Fífún fódà ní orúkọ àti ṣíṣe backup fọ́tò kí o tó bẹ̀rẹ̀ ń dáàbò bo dátà náà." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣe máàpù NDVI nínú QGIS",
          minutes: 6,
          goal: "Ṣírò máàpù NDVI láti orthomosaic multispectral nínú QGIS kí o sì fi àwọ̀ sí i.",
          text: [
            "QGIS jẹ́ sọ́fítíwẹ́ẹ̀ GIS ọ̀fẹ́ tí ó jẹ́ open source, tí àwọn ìjọba, yunifásítì àti àwọn àjọ aládàáni (NGO) ń lò káàkiri Áfíríkà. Ó lè ṣí GeoTIFF rẹ, ó sì lè ṣe ìṣirò lórí àwọn band rẹ̀.",
            "Tí orthomosaic rẹ bá ní band pupa àti band near-infrared, lo Raster Calculator láti ṣírò NDVI = (NIR - Red) / (NIR + Red). Lẹ́yìn náà fi àwọ̀ tí ó ń yí padà (colour ramp, fún àpẹẹrẹ láti pupa sí àwọ̀ ewé) sí èsì náà, kí o sì ṣètò ààlà iye rẹ̀ kí ìyàtọ̀ inú oko lè hàn gbangba.",
            "Ṣé kámẹ́rà àwọ̀ nìkan lo ní? O ṣì lè ṣe ìwọ̀n àwọ̀ ewé tí kò péye láti band pupa, àwọ̀ ewé àti búlúù, ṣùgbọ́n kò ṣeé gbẹ́kẹ̀lé tó NDVI; kà á sí ìtọ́sọ́nà nìkan. Fi ààlà oko àti àwọn ojúàmì àyẹ̀wò ilẹ̀ rẹ kún un bí layer, kí máàpù náà lè fi ibi gangan tí àwọn agbègbè wà hàn."
          ],
          steps: ["Ṣí QGIS kí o sì fi GeoTIFF orthomosaic rẹ kún un.", "Wo band wo ni pupa àti band wo ni near-infrared.", "Ṣí Raster Calculator kí o sì tẹ (NIR - Red) / (NIR + Red) pẹ̀lú àwọn band yẹn.", "Fi colour ramp láti pupa sí àwọ̀ ewé sí layer tuntun náà.", "Fi ààlà oko àti àwọn ojúàmì àyẹ̀wò ilẹ̀ kún un.", "Gbé àwòrán máàpù náà jáde fún ìròyìn rẹ."],
          words: [["GIS", "geographic information system: sọ́fítíwẹ́ẹ̀ fún ṣíṣe máàpù àti ṣíṣe ìtúpalẹ̀ wọn."], ["Band", "ìpele ìmọ́lẹ̀ kan nínú àwòrán, bí pupa, àwọ̀ ewé, búlúù tàbí near-infrared."], ["Raster", "àwòrán tí a fi pixel ṣe, tí ọ̀kọ̀ọ̀kan ní iye tirẹ̀, bí máàpù drone."], ["Layer", "àkójọ dátà máàpù kan, bí ààlà oko tàbí ojúàmì, tí a fi hàn lórí àwọn míì."]],
          slides: [
            { title: "QGIS", bullets: ["Sọ́fítíwẹ́ẹ̀ GIS ọ̀fẹ́, open source", "Ó ń ṣí GeoTIFF rẹ", "Ó ń ṣe ìṣirò lórí band àwòrán"] },
            { title: "Àgbékalẹ̀ NDVI", bullets: ["NDVI = (NIR - Red) / (NIR + Red)", "Lo Raster Calculator", "Fi àwọ̀ láti pupa sí àwọ̀ ewé sí i"] },
            { title: "Kámẹ́rà àwọ̀ nìkan?", bullets: ["Ìwọ̀n àwọ̀ ewé tí kò péye láti band RGB", "Kò ṣeé gbẹ́kẹ̀lé tó NDVI: ìtọ́sọ́nà nìkan ni"] },
            { title: "Parí máàpù náà", bullets: ["Fi ààlà oko àti ojúàmì agbègbè kún un", "Gbé àwòrán jáde fún ìròyìn"] }
          ],
          sources: [QGIS, FAO_EO],
          tryIt: "Fi QGIS (ọ̀fẹ́) sórí kọ̀mpútà rẹ kí o sì ṣí orthomosaic rẹ tàbí àpẹẹrẹ àwòrán multispectral. Ṣírò NDVI pẹ̀lú Raster Calculator, fi àwọ̀ sí i, kí o sì sàmì sí agbègbè mẹ́ta bí ojúàmì.",
          youCanNow: "ṣe máàpù NDVI aláwọ̀ nínú QGIS kí o sì fi àwọn agbègbè àti ààlà oko kún un.",
          quickCheck: [
            { objective: "O5", q: "Kí ni Raster Calculator nínú QGIS lè ṣe?", options: ["So fọ́tò pọ̀", "Fò drone", "Fi ìròyìn ránṣẹ́", "Ṣe ìṣirò lórí band àwòrán, bí ṣíṣírò NDVI"], answer: 3, why: "Raster Calculator ń ṣe ìṣirò lórí band, bí (NIR - Red) / (NIR + Red)." },
            { objective: "O5", q: "Máàpù NDVI rẹ jẹ́ àwọ̀ kan ṣoṣo látòkèdélẹ̀. Kí ni o máa yí padà?", options: ["Tún fò ní alẹ́", "Pa band near-infrared rẹ́", "Ṣètò ààlà iye colour ramp kí ìyàtọ̀ inú oko lè hàn gbangba", "Lo oko míì"], answer: 2, why: "Fífi colour ramp sí i àti ṣíṣètò ààlà iye rẹ̀ ń jẹ́ kí ìyàtọ̀ inú oko hàn." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kíkọ ìròyìn ìgbésẹ̀ fún oko",
          minutes: 5,
          goal: "Kọ ìròyìn ojú-ewé kan tí ó sọ ohun tí a rí àti ohun tí àgbẹ̀ máa ṣe tẹ̀lé e fún un.",
          text: [
            "Máàpù nìkan kò ran àgbẹ̀ tí ọwọ́ rẹ̀ dí lọ́wọ́. Ìròyìn kúkúrú ló ń sọ ọ́ di ìgbésẹ̀. Jẹ́ kí ó jẹ́ ojú-ewé kan, ní ọ̀rọ̀ tó rọrùn, ní èdè tí àgbẹ̀ fẹ́ràn. Ọ̀pọ̀ àgbẹ̀ máa kà á lórí smartphone lásán, nítorí náà àwòrán kan àti ìlà díẹ̀ dára ju ìwé gígùn lọ.",
            "Fi wọ̀nyí sínú rẹ̀: oko, apá oko, ọjọ́ àti ìpele irè oko; àwòrán máàpù pẹ̀lú àwọn agbègbè tí a fún ní nọ́mbà; fún agbègbè kọ̀ọ̀kan, ohun tí o rí lórí ilẹ̀, ohun tó ṣeé ṣe kó fà á àti bí ó ṣe dá ọ lójú tó; ìgbésẹ̀ tó kàn (fún àpẹẹrẹ: tún gbìn sí ibi tí ó ṣófo, la ihò omi, ní kí ilé-ìwòsàn ohun ọ̀gbìn fìdí àrùn kan múlẹ̀, ṣàyẹ̀wò ọ̀pá omi ìrigeson); àti ẹni tí wọ́n máa kàn sí.",
            "Má ṣe dábàá oògùn apakòkòrò tàbí ìwọ̀n rẹ̀ láti inú máàpù drone láéláé. Darí àgbẹ̀ sí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, agrovet tàbí ilé-ìwòsàn ohun ọ̀gbìn fún ìmọ̀ràn oògùn èyíkéyìí, àti sí ìwé àlàyé (label) oògùn fún lílò rẹ̀ láìléwu. Ẹ fohùn ṣọ̀kan lórí ìgbà tí ẹ máa tún fò láti rí i bóyá ìgbésẹ̀ náà ṣiṣẹ́."
          ],
          steps: ["Orí ìròyìn: oko, apá oko, ọjọ́, irè oko àti ìpele rẹ̀.", "Àwòrán máàpù pẹ̀lú àwọn agbègbè tí a fún ní nọ́mbà.", "Fún agbègbè kọ̀ọ̀kan: ohun tí o rí, ohun tó ṣeé ṣe kó fà á, bí ó ṣe dá ọ lójú tó.", "Ìgbésẹ̀ tó kàn fún agbègbè kọ̀ọ̀kan àti ẹni tí wọ́n máa kàn sí.", "Ọjọ́ fún fífò tó kàn láti ṣàyẹ̀wò èsì."],
          words: [["Ìròyìn ìgbésẹ̀ (action report)", "ìròyìn kúkúrú tí ó sọ ohun tí a rí àti ohun tí a máa ṣe."], ["Agrovet", "ṣọ́ọ̀bù tí ó ń ta ohun èlò oko bí irúgbìn, ajílẹ̀ àti oògùn ẹranko, tí wọ́n sábà máa ń fúnni ní ìmọ̀ràn pẹ̀lú."]],
          slides: [
            { title: "Máàpù nìkan kò tó", bullets: ["Ojú-ewé kan, ọ̀rọ̀ tó rọrùn", "Èdè tí àgbẹ̀ fẹ́ràn", "Àwòrán pẹ̀lú ìlà díẹ̀"] },
            { title: "Ohun tí ó máa wà nínú rẹ̀", bullets: ["Oko, apá oko, ọjọ́, ìpele irè oko", "Máàpù pẹ̀lú àwọn agbègbè tí a fún ní nọ́mbà", "Ohun tí a rí, ohun tó ṣeé ṣe kó fà á, bí ó ṣe dá ọ lójú tó, ìgbésẹ̀ tó kàn"] },
            { title: "Jẹ́ olóòótọ́, má ṣe fa ewu", bullets: ["Kò sí oògùn apakòkòrò tàbí ìwọ̀n láti inú máàpù", "Darí wọn sí òṣìṣẹ́ ìtọ́sọ́nà, agrovet tàbí ilé-ìwòsàn ohun ọ̀gbìn", "Ẹ fohùn ṣọ̀kan lórí ìgbà tí ẹ máa tún fò"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: lo máàpù rẹ àti fọ́ọ̀mù àyẹ̀wò lórí ilẹ̀ rẹ láti kọ ìròyìn ìgbésẹ̀ ojú-ewé kan fún àgbẹ̀: orí ìròyìn, àwòrán máàpù pẹ̀lú ó kéré tán agbègbè mẹ́ta tí a fún ní nọ́mbà, ohun tí a rí àti ohun tó ṣeé ṣe kó fà á fún ọ̀kọ̀ọ̀kan, ìgbésẹ̀ tó kàn, àwọn tí wọ́n máa kàn sí àti ọjọ́ fífò tó kàn.",
          youCanNow: "sọ dátà drone di ìròyìn ìgbésẹ̀ ojú-ewé kan tí ó ṣe kedere tí àgbẹ̀ lè lò.",
          quickCheck: [
            { objective: "O6", q: "Báwo ni ìròyìn ìgbésẹ̀ oko ṣe yẹ kí ó gùn tó?", options: ["Ojú-ewé mẹ́wàá", "Ojú-ewé kan", "Máàpù nìkan láìsí ọ̀rọ̀ kankan", "Bí ó ṣe lè gùn tó"], answer: 1, why: "Ìròyìn ojú-ewé kan ní ọ̀rọ̀ tó rọrùn, pẹ̀lú máàpù àti ìgbésẹ̀ tó kàn, ni àgbẹ̀ tí ọwọ́ rẹ̀ dí lè lò." },
            { objective: "O6", q: "Máàpù rẹ àti àyẹ̀wò ilẹ̀ fi hàn pé àrùn lè wà ní agbègbè 3. Ìgbésẹ̀ tó kàn wo ni o máa kọ?", options: ["Ní kí ilé-ìwòsàn ohun ọ̀gbìn tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ fìdí àrùn náà múlẹ̀", "Fín oògùn olu (fungicide) tí ó lágbára ní ìwọ̀n ìlọ́po méjì", "Fa gbogbo oko tu", "Dúró fún ọdún kan"], answer: 0, why: "Má ṣe dábàá oògùn apakòkòrò tàbí ìwọ̀n láti inú máàpù láéláé; kọ́kọ́ darí àgbẹ̀ sí onímọ̀ láti fìdí rẹ̀ múlẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe iṣẹ́ dátà drone",
        questions: [
          { objective: "O4", q: "Kí ni orthomosaic?", options: ["Fọ́tò kan ṣoṣo", "Irú drone kan", "Àwòrán kan tí ó péye bí máàpù, tí a so pọ̀ láti inú ọ̀pọ̀ fọ́tò", "Kòkòrò kan"], answer: 2, why: "Sọ́fítíwẹ́ẹ̀ ìsopọ̀ ń kọ́ máàpù kan láti inú fọ́tò tí ó bò ara wọn." },
          { objective: "O4", q: "Máàpù tí o so pọ̀ ní ihò àti ìlà tí ó wọ́. Ìdí tó ṣeé ṣe jù ni:", options: ["Fọ́tò kò bò ara wọn tó, tàbí fọ́tò kò dára", "Bátìrì tí ó pọ̀ jù", "Fóònù àgbẹ̀", "Oòrùn tí ó pọ̀ jù lórí ojú-iboju"], answer: 0, why: "Ìsopọ̀ nílò ọ̀pọ̀ fọ́tò tí ó ṣe kedere tí ó sì bò ara wọn." },
          { objective: "O5", q: "Èwo ni àgbékalẹ̀ NDVI?", options: ["(Red + Blue) / 2", "NIR x Red", "Green - Blue", "(NIR - Red) / (NIR + Red)"], answer: 3, why: "NDVI ń fi ìmọ́lẹ̀ near-infrared àti pupa wé ara wọn." },
          { objective: "O5", q: "Kí ni QGIS?", options: ["Drone tí a ń sanwó fún", "Sọ́fítíwẹ́ẹ̀ GIS ọ̀fẹ́, open source, fún máàpù", "Oògùn apakòkòrò", "Nẹ́tíwọ́ọ̀kì fóònù"], answer: 1, why: "QGIS jẹ́ sọ́fítíwẹ́ẹ̀ ọ̀fẹ́ fún ṣíṣe máàpù àti ṣíṣe ìtúpalẹ̀ wọn." },
          { objective: "O6", q: "Lórí ìròyìn rẹ, àgbẹ̀ kan béèrè oògùn apakòkòrò tí òun máa fín sí agbègbè 2. O yẹ kí o:", options: ["Méfò ọ̀kan láti inú máàpù", "Darí rẹ̀ sí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, agrovet tàbí ilé-ìwòsàn ohun ọ̀gbìn àti sí ìwé àlàyé oògùn", "Sọ fún un pé kí ó fín ìlọ́po méjì", "Má sọ nǹkan kan"], answer: 1, why: "Ìmọ̀ràn oògùn nílò àyẹ̀wò àrùn tí a ti fìdí rẹ̀ múlẹ̀ àti ìmọ̀ràn láti ọ̀dọ̀ ẹni tí ó kúnjú ìwọ̀n." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Drone fún Àbójútó Oko 3: Ìlera Irè Oko, Kòkòrò àti Ṣíṣe Iṣẹ́ Dátà",
    questions: [
      { objective: "O1", q: "Iye NDVI wà láàárín:", options: ["-100 sí 0", "-1 sí +1", "0 sí 100", "1 sí 10"], answer: 1, why: "NDVI jẹ́ ìpín tí ó wà láàárín -1 sí +1." },
      { objective: "O1", q: "Lórí máàpù NDVI, ohun àkọ́kọ́ tí o máa kà ni:", options: ["Ìwọ̀n fáìlì", "Àlàyé àwọ̀ (legend)", "Orúkọ drone", "Ojú ọjọ́"], answer: 1, why: "Àlàyé àwọ̀ ló ń sọ àwọ̀ tí ó túmọ̀ sí iye kékeré àti iye gíga." },
      { objective: "O1", q: "Agbègbè kan ti rí bákan náà lórí máàpù mẹ́ta. Agbègbè tuntun kan ń tàn kálẹ̀. Èwo ló ṣe pàtàkì jù?", options: ["Agbègbè àtijọ́", "Kò sí èyí tó ṣe pàtàkì", "Agbègbè tí ó ń tàn kálẹ̀", "Àwọn méjèèjì kánjú bákan náà"], answer: 2, why: "Agbègbè tí ó ń tàn kálẹ̀ fi ìṣòro tí ó ń ṣiṣẹ́ hàn." },
      { objective: "O2", q: "Irè oko aláìlágbára lẹ́gbẹ̀ẹ́ ẹ̀gbẹ́ kan tí ó súnmọ́ oko aládùúgbò lè wá láti:", options: ["Fọ́tò tí ó bò ara wọn jù", "Àlàyé àwọ̀", "Bátìrì drone", "Kòkòrò tàbí oògùn tí afẹ́fẹ́ gbé wá láti ẹ̀gbẹ́ yẹn"], answer: 3, why: "Àmì ẹ̀gbẹ́ sábà máa ń tọ́ka sí nǹkan tí ó wá láti òde oko." },
      { objective: "O2", q: "Kòtò tí ó rẹlẹ̀ tí ó tutù pẹ̀lú irè oko aláìlágbára ṣeé ṣe jù kí ó fi hàn:", options: ["Omi tí ó pọ̀ jù (waterlogging)", "Oòrùn tí ó pọ̀ jù", "Ìkórè tí ó dára", "Kámẹ́rà tí ó bàjẹ́"], answer: 0, why: "Omi máa ń kó jọ sínú kòtò, ó sì ń ba gbòǹgbò jẹ́." },
      { objective: "O2", q: "Àmì lórí máàpù drone jẹ́:", options: ["Àyẹ̀wò àrùn ìkẹyìn", "Ìtọ́kasí tí ó nílò àyẹ̀wò lórí ilẹ̀", "Kòkòrò ni nígbà gbogbo", "Àrùn ni nígbà gbogbo"], answer: 1, why: "Àmì ń fi ibi tí a máa wò hàn; àyẹ̀wò lórí ilẹ̀ ló ń rí ohun tó fà á." },
      { objective: "O2", q: "Wọ́n ṣe app FAMEWS ti FAO láti kọ sílẹ̀:", options: ["Iye òjò", "Iye owó ọjà", "Ìdin ológun tí a rí", "Fífò drone"], answer: 2, why: "FAMEWS ni ètò FAO fún àbójútó àti ìkìlọ̀ kùtùkùtù nípa ìdin ológun (Fall Armyworm)." },
      { objective: "O3", q: "Àyẹ̀wò lórí ilẹ̀ (ground-truthing) túmọ̀ sí:", options: ["Fífò ní ìsàlẹ̀ sí i", "Rírà sọ́fítíwẹ́ẹ̀ tuntun", "Nínu gíláàsì kámẹ́rà", "Ṣíṣàyẹ̀wò lórí ilẹ̀ ohun tí máàpù fi hàn"], answer: 3, why: "O máa lọ sí ibẹ̀ láti rí ohun tí ó wà níbẹ̀ ní tòótọ́." },
      { objective: "O3", q: "Nígbà àyẹ̀wò lórí ilẹ̀, o yẹ kí o wo:", options: ["Òkè àti abẹ́ ewé, igi ọ̀gbìn, gbòǹgbò, ilẹ̀ àti kòkòrò", "Òkè ewé kan ṣoṣo nìkan", "Ojú ọ̀run nìkan", "Drone nìkan"], answer: 0, why: "Àyẹ̀wò kíkún ń rí kòkòrò, àrùn àti ìṣòro ilẹ̀." },
      { objective: "O3", q: "Kí ló dé tí a fi ń kọ ohun tí a rí sílẹ̀ ní ọ̀nà kan náà nígbà gbogbo?", options: ["Drone ló ní kí a ṣe bẹ́ẹ̀", "Ó ń jẹ́ kí a lè fi àkọsílẹ̀ wé ara wọn, ó sì ń ran àwọn onímọ̀ lọ́wọ́", "Láti fi àkókò ṣòfò", "Ó ń jẹ́ kí fọ́tò hàn kedere sí i"], answer: 1, why: "Àkọsílẹ̀ tí ó dọ́gba ń ṣèrànwọ́ láti fi wé ara wọn àti láti fìdí ohun tó fà á múlẹ̀." },
      { objective: "O3", q: "Kòórdínétì ni:", options: ["Àwọ̀ lórí máàpù", "Ìyára drone", "Àwọn nọ́mbà latitude àti longitude fún ibi gangan", "Irú irè oko kan"], answer: 2, why: "Wọ́n ń jẹ́ kí o tún rí agbègbè gangan náà." },
      { objective: "O4", q: "OpenDroneMap jẹ́:", options: ["Orúkọ ilé-iṣẹ́ drone kan", "Oògùn apakòkòrò", "Sátẹ́láìtì", "Sọ́fítíwẹ́ẹ̀ ọ̀fẹ́, open source, fún sísopọ̀ fọ́tò drone"], answer: 3, why: "OpenDroneMap àti WebODM ń sọ fọ́tò di máàpù lọ́fẹ̀ẹ́." },
      { objective: "O4", q: "Kí o tó ṣe iṣẹ́ lórí fọ́tò, o yẹ kí o:", options: ["Fún fódà ní orúkọ kí o sì ṣe backup rẹ̀", "Pa ìdajì fọ́tò rẹ́", "Fi ọwọ́ yí orúkọ fọ́tò kọ̀ọ̀kan padà", "Pa kọ̀mpútà"], answer: 0, why: "Orúkọ tó dára àti backup ń dènà pípàdánù dátà." },
      { objective: "O5", q: "GeoTIFF jẹ́:", options: ["Irú fáìlì fídíò kan", "Àwòrán tí ó gbé ibi tí ó wà lórí ilẹ̀ ayé dání", "Apá kan drone", "Ọ̀rọ̀ text"], answer: 1, why: "Sọ́fítíwẹ́ẹ̀ máàpù ń lo ibi tí ó wà nínú rẹ̀ láti gbé e sí ibi tó tọ́." },
      { objective: "O5", q: "Nínú QGIS, a ń ṣírò NDVI pẹ̀lú:", options: ["Irinṣẹ́ ìtẹ̀wé", "Bọ́tìnnì ímeèlì", "Raster Calculator", "Bọ́tìnnì ohùn"], answer: 2, why: "Raster Calculator ń ṣe ìṣirò lórí band àwòrán." },
      { objective: "O5", q: "Pẹ̀lú kámẹ́rà àwọ̀ nìkan, ìwọ̀n àwọ̀ ewé jẹ́:", options: ["Bákan náà gẹ́lẹ́ bí NDVI", "Kò ṣeé ṣe", "Ó dára ju NDVI lọ", "Ìtọ́sọ́nà tí kò péye, tí kò ṣeé gbẹ́kẹ̀lé tó NDVI"], answer: 3, why: "Ìwọ̀n RGB kò ní near-infrared, nítorí náà ìtọ́sọ́nà tí kò péye ni." },
      { objective: "O5", q: "Layer nínú GIS jẹ́:", options: ["Àkójọ dátà máàpù kan tí a fi hàn lórí àwọn míì", "Bátìrì drone", "Àrùn irè oko", "Ìwé òfin"], answer: 0, why: "Ààlà, ojúàmì àti àwòrán jẹ́ layer ọ̀kọ̀ọ̀kan." },
      { objective: "O6", q: "Ìròyìn ìgbésẹ̀ oko tó dára jẹ́:", options: ["Ojú-ewé ogún tí ó kún fún nọ́mbà", "Ojú-ewé kan, ọ̀rọ̀ tó rọrùn, pẹ̀lú máàpù àti ìgbésẹ̀ tó kàn", "Fọ́tò àìṣàtúnṣe nìkan", "Àgbékalẹ̀ NDVI nìkan"], answer: 1, why: "Àgbẹ̀ tí ọwọ́ rẹ̀ dí nílò ètò kúkúrú tí ó ṣe kedere." },
      { objective: "O6", q: "Èwo ni KÒ yẹ kí ó wà nínú ìròyìn rẹ?", options: ["Ọjọ́ àti ìpele irè oko", "Àwọn agbègbè tí a fún ní nọ́mbà", "Oògùn apakòkòrò àti ìwọ̀n tí a yàn láti inú máàpù nìkan", "Ẹni tí wọ́n máa kàn sí"], answer: 2, why: "Ìmọ̀ràn oògùn nílò àyẹ̀wò àrùn tí a ti fìdí rẹ̀ múlẹ̀ láti ọ̀dọ̀ orísun tí ó kúnjú ìwọ̀n." },
      { objective: "O6", q: "Kí ló dé tí ẹ fi ń fohùn ṣọ̀kan lórí ọjọ́ fífò tó kàn?", options: ["Láti lo bátìrì tán", "Nítorí pé òfin sọ pé lọ́sẹ̀ọ̀sẹ̀", "Láti ta fífò púpọ̀ sí i", "Láti rí i bóyá ìgbésẹ̀ náà ṣiṣẹ́"], answer: 3, why: "Máàpù àtẹ̀lé ń fi hàn bóyá a ti yanjú ìṣòro náà." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      1,
      3,
      5,
      7,
      8,
      11,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún un ṣàyẹ̀wò.",
    criteria: [
      {
        name: "Máàpù ìlera irè oko",
        objective: "O5",
        notYet: "Kò sí máàpù, tàbí kò sí àlàyé àwọ̀ àti ààlà oko.",
        meets: "Máàpù NDVI tàbí máàpù àwọ̀ tí ó ní àlàyé àwọ̀, ààlà iye àwọ̀ tí ó fi ìyàtọ̀ hàn, àti ààlà oko.",
        exceeds: "Ó kọ àgbékalẹ̀ NDVI tàbí ìwọ̀n tí ó lò sílẹ̀, àti àwọn ààlà agbára rẹ̀."
      },
      {
        name: "Àwọn agbègbè ìṣòro",
        objective: "O1",
        notYet: "Agbègbè tí kò tó mẹ́ta, tàbí agbègbè tí a yàn nípa àwọ̀ nìkan.",
        meets: "Ó kéré tán agbègbè ìṣòro mẹ́ta tí a fún ní nọ́mbà, tí a yàn nípa ìyàtọ̀ inú oko.",
        exceeds: "Ó fi àwọn agbègbè náà wé máàpù àtẹ̀yìnwá ti oko kan náà."
      },
      {
        name: "Ètò àyẹ̀wò lórí ilẹ̀",
        objective: "O3",
        notYet: "Kò sí ètò, tàbí \"lọ wò ó\" nìkan.",
        meets: "Fún agbègbè kọ̀ọ̀kan, ohun tí a máa wá, pẹ̀lú kòórdínétì àti bí a ṣe máa kọ ohun tí a rí sílẹ̀.",
        exceeds: "Ó dárúkọ àwọn ohun tó ṣeé ṣe kó fà á tí a máa ṣàyẹ̀wò ní agbègbè kọ̀ọ̀kan láti inú àmì máàpù rẹ̀."
      },
      {
        name: "Ìròyìn ìgbésẹ̀",
        objective: "O6",
        notYet: "Ó gùn ju ojú-ewé kan lọ, tàbí kò sí ìgbésẹ̀ tó kàn.",
        meets: "Ojú-ewé kan pẹ̀lú máàpù, ohun tí a rí, ohun tó ṣeé ṣe kó fà á, bí ó ṣe dá ọ lójú tó, ìgbésẹ̀ tó kàn fún agbègbè kọ̀ọ̀kan àti ẹni tí wọ́n máa kàn sí.",
        exceeds: "A kọ ọ́ ní èdè àgbẹ̀, ó sì fohùn ṣọ̀kan lórí ìgbà tí a máa tún fò."
      },
      {
        name: "Ìmọ̀ràn tí kò léwu",
        objective: "O2",
        notYet: "Ó dábàá oògùn apakòkòrò tàbí ìwọ̀n láti inú máàpù.",
        meets: "Ó ka àwọn àmì sí ìtọ́kasí, ó sì darí ìbéèrè nípa oògùn sí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, agrovet tàbí ilé-ìwòsàn ohun ọ̀gbìn.",
        exceeds: "Ó ṣàlàyé fún àgbẹ̀ ìdí tí àmì náà fi nílò ìfìdímúlẹ̀."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ti fi ìròyìn ìgbésẹ̀ oko fún àgbẹ̀ kan láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Àwọn àgbẹ̀ tí wọ́n sọ pé àwọn ṣiṣẹ́ lórí ìròyìn kan, tí wọ́n sì bá onímọ̀ sọ̀rọ̀ kí wọ́n tó fín oògùn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí Ẹ̀kọ́ 4 nínú ọ̀wọ́ ẹ̀kọ́ drone"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí a ti fi QGIS àti OpenDroneMap (WebODM) ọ̀fẹ́ sí",
      "Dátà drone láti oko gidi, tàbí àpẹẹrẹ dátà ọ̀fẹ́",
      "Fóònù tí ó ní GPS àti app máàpù fún àyẹ̀wò lórí ilẹ̀",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò fún ṣíṣe iṣẹ́ dátà àti kíkọ ìròyìn"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ṣe iṣẹ́ lórí àpẹẹrẹ dátà kan tí gbogbo yín máa lò kí kíláàsì tó bẹ̀rẹ̀, nítorí sísopọ̀ fọ́tò lè gba wákàtí kan tàbí jù bẹ́ẹ̀ lọ.",
      "Ṣe ìgbésẹ̀ NDVI lójú ẹsẹ̀ nínú QGIS kí àwọn akẹ́kọ̀ọ́ lè rí Raster Calculator àti colour ramp.",
      "Tí ó bá ṣeé ṣe, ẹ jọ rìn lọ sí oko gidi kan láti ṣàyẹ̀wò agbègbè méjì lórí ilẹ̀.",
      "Má ṣe jẹ́ kí àwọn akẹ́kọ̀ọ́ dábàá oògùn apakòkòrò tàbí ìwọ̀n láti inú máàpù láéláé; pe òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí ilé-ìwòsàn ohun ọ̀gbìn fún àyẹ̀wò àrùn.",
      "Fi rubric ṣe àmì fún ìròyìn náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
