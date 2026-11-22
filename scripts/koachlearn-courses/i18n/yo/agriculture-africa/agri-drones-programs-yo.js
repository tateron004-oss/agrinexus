"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-drones-programs.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const ODPC = { name: "Office of the Data Protection Commissioner (ODPC, Kẹ́ńyà): ọ́fíìsì tó ń dáàbò bo dátà", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC): àjọ tó ń dáàbò bo dátà ní Nàìjíríà", url: "https://ndpc.gov.ng" };
const QGIS = { name: "QGIS (ètò GIS ọ̀fẹ́, open-source)", url: "https://qgis.org/" };
const COPERNICUS = { name: "Copernicus Browser (àwòrán sátẹ́láìtì Sentinel ọ̀fẹ́)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_ITU_DRONES = { name: "FAO àti ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems (òfin drone ní Kẹ́ńyà)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems (òfin drone ní Nàìjíríà)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-programs-yo",
  lang: "yo",
  translationOf: "agri-drones-programs",
  category: "Agriculture (Africa)",
  name: "Drone fún Àbójútó Oko 5: Ìṣọ̀kan Dátà, GIS àti Ṣíṣe Ètò",
  skills: "Ṣíṣètò dátà drone àti fífi ẹ̀dà rẹ̀ pamọ́, Pípa máàpù drone pọ̀ mọ́ àwọn ìpele GIS àti àwòrán sátẹ́láìtì, Dídáàbò bo dátà àwọn àgbẹ̀ àti gbígba ìyọ̀ǹda wọn, Ṣíṣàlàyé àfojúsùn ètò àbójútó àti àwọn tí ó ń lò ó, Ṣíṣètò ẹgbẹ́ iṣẹ́, ohun èlò, àkókò àti ìṣúná, Wíwọn èsì àti ríròyìn rẹ̀",
  outcome: "ṣe ètò àbójútó oko pẹ̀lú drone fún ẹgbẹ́ àwọn àgbẹ̀: àfojúsùn rẹ̀, àwọn tí ó ń lò ó, ètò dátà pẹ̀lú GIS àti ààbò dátà, ẹgbẹ́ iṣẹ́, àkókò, ìṣúná, bí ó ṣe máa san owó ara rẹ̀, àti bí o ṣe máa wọn èsì kí o sì ròyìn rẹ̀.",
  about: [
    "Èyí ni Ẹ̀kọ́ 5 nínú ọ̀wọ́ ẹ̀kọ́ àbójútó oko pẹ̀lú drone (ẹ̀rọ kékeré tí ń fò láìsí awakọ̀ nínú rẹ̀). Ó wà fún àwọn alákòóso iṣẹ́ ìdámọ̀ràn àgbẹ̀ (extension), àwọn olórí ẹgbẹ́ àjùmọ̀ṣe (cooperative) àti ẹgbẹ́ àgbẹ̀, òṣìṣẹ́ ọ̀gbìn ìjọba ìbílẹ̀ àti ìpínlẹ̀, àwọn olùṣàkóso ètò NGO, àwọn alákòóso ilé-iṣẹ́ ọ̀gbìn àti àwọn oníṣòwò drone ní Kẹ́ńyà, Nàìjíríà àti káàkiri Áfíríkà, tí wọ́n fẹ́ ṣe àbójútó pẹ̀lú drone fún ọ̀pọ̀ oko, kì í ṣe ọ̀kan ṣoṣo.",
    "Orí 1 jẹ́ nípa dátà: bí a ṣe ń sọ fáìlì lórúkọ, tọ́jú rẹ̀ àti fi ẹ̀dà rẹ̀ pamọ́; pípa máàpù drone pọ̀ mọ́ ààlà oko, àwòrán sátẹ́láìtì àti àkọsílẹ̀ oko nínú GIS; àti dídáàbò bo ìsọfúnni àdáni àwọn àgbẹ̀ lábẹ́ òfin bí Data Protection Act 2019 ti Kẹ́ńyà àti Nigeria Data Protection Act 2023. Orí 2 jẹ́ nípa ṣíṣe ètò: bíbẹ̀rẹ̀ láti ìṣòro gidi àti àwọn olùlò gidi, ṣíṣètò ènìyàn, ohun èlò, ìfò àti owó, àti fífi hàn pé ètò náà ń ṣiṣẹ́.",
    "Ní ìparí, o máa ní ètò tí o lè gbé kalẹ̀ níwájú ìgbìmọ̀ ẹgbẹ́ àjùmọ̀ṣe, ọ́fíìsì ìjọba ìbílẹ̀ tàbí ìpínlẹ̀, olùfowópamọ́ (donor) tàbí olùdókòwò. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò ojú-ewé méjì fún àbójútó pẹ̀lú drone fún ẹgbẹ́ àjùmọ̀ṣe tí ó ní àgbẹ̀ kékeré 200 (fún àpẹẹrẹ àgbàdo àti ẹ̀wà ní Trans Nzoia, kọfí ní Nyeri, tàbí ẹ̀gẹ́ ní Ìpínlẹ̀ Ògùn): ìṣòro àti àfojúsùn, àwọn olùlò àti ohun tí ọ̀kọ̀ọ̀kan máa rí gbà, ètò dátà (ibi ìpamọ́, ìpele GIS, lílo sátẹ́láìtì, ìyọ̀ǹda àti ààbò dátà), ẹgbẹ́ iṣẹ́ àti ohun èlò, àkókò ìfò fún ìgbà ọ̀gbìn kan, ìṣúná tó rọrùn pẹ̀lú bí a ṣe máa sanwó fún iṣẹ́ náà, àwọn òṣùwọ̀n àṣeyọrí, àti bí a ṣe máa ròyìn èsì.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn alákòóso iṣẹ́ ìdámọ̀ràn àgbẹ̀ (extension), àwọn olórí ẹgbẹ́ àjùmọ̀ṣe àti ẹgbẹ́ àgbẹ̀, òṣìṣẹ́ ọ̀gbìn ìjọba ìbílẹ̀ àti ìpínlẹ̀, àwọn olùṣàkóso ètò NGO, àwọn alákòóso ilé-iṣẹ́ ọ̀gbìn àti àwọn oníṣòwò drone ní Kẹ́ńyà, Nàìjíríà àti káàkiri Áfíríkà, tí wọ́n fẹ́ ṣe àbójútó pẹ̀lú drone fún ọ̀pọ̀ oko.",
    startingPoint: "Àwọn akẹ́kọ̀ọ́ lè ṣe máàpù drone kí wọ́n sì kà á, wọ́n sì ti rí iṣẹ́ drone lórí oko kan (Ẹ̀kọ́ 1 sí 4). Díẹ̀ ni ó ti ṣètò dátà láti ọgọ́rọ̀ọ̀rún oko, tí ó ti pa máàpù drone pọ̀ mọ́ àwòrán sátẹ́láìtì àti àkọsílẹ̀ nínú GIS, tí ó ti bójú tó ìsọfúnni àdáni àwọn àgbẹ̀ gẹ́gẹ́ bí òfin ṣe sọ, tàbí tí ó ti ṣètò àti ṣe ìṣúná fún ètò tí ó máa pẹ́ kọjá owó ìrànlọ́wọ́ (grant).",
    gap: "Ọ̀pọ̀ iṣẹ́ drone ń bẹ̀rẹ̀ láti drone dípò ìṣòro, wọ́n ń pàdánù dátà, wọ́n ń ṣi ìsọfúnni àdáni àwọn àgbẹ̀ lò, tàbí wọ́n ń dúró nígbà tí owó ìrànlọ́wọ́ bá tán. Ètò tó yé pẹ̀lú ètò dátà, ìyọ̀ǹda, ẹgbẹ́ iṣẹ́, àkókò, ìṣúná àti òṣùwọ̀n ń jẹ́ kí ẹgbẹ́ àjùmọ̀ṣe, ìjọba ìbílẹ̀ tàbí ilé-iṣẹ́ ṣe iṣẹ́ tí àwọn àgbẹ̀ gbẹ́kẹ̀ lé, tí ó sì ń san owó ara rẹ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a ṣàlàyé gbogbo ọ̀rọ̀ dátà àti GIS",
      "Ẹ̀rọ: kọ̀mpútà alágbèérìn (laptop) pẹ̀lú QGIS ọ̀fẹ́ àti spreadsheet; dátà drone àti sátẹ́láìtì tàbí àpẹẹrẹ wọn",
      "Òfin: àwọn òfin ààbò dátà ń ṣiṣẹ́ (Data Protection Act 2019 ti Kẹ́ńyà, Nigeria Data Protection Act 2023 tàbí òfin orílẹ̀-èdè akẹ́kọ̀ọ́ fúnra rẹ̀)",
      "Òfin ìrìn òfuurufú: àwọn awakọ̀ drone nílò ìwé àṣẹ, àjọ náà sì lè nílò ìwé ẹ̀rí olùṣiṣẹ́ (operator certificate)",
      "Iye owó àti owó iṣẹ́ yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, wọ́n sì ń yí padà: àwọn akẹ́kọ̀ọ́ ń lo iye owó gidi láti àdúgbò wọn"
    ],
    prerequisites: "\"Drone fún Àbójútó Oko 4: Iṣẹ́ Àgbẹ̀ Aláìtàsé, Ojú-ọjọ́ àti Ẹran-ọ̀sìn\", tàbí ìrírí tó jọ ọ́ pẹ̀lú máàpù drone."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún dátà drone láti ọ̀pọ̀ oko", action: "ṣètò àwọn fódà, òfin ìsọlórúkọ fáìlì, ìwé àkọsílẹ̀ ìfò àti ẹ̀dà ìpamọ́ 3-2-1", standard: "ní lílo Farm ID dípò orúkọ, àti ṣíṣàyẹ̀wò pé àwọn ẹ̀dà ìpamọ́ ń ṣí" },
    { id: "O2", condition: "Tí a bá fún ọ ní máàpù drone, ààlà oko, àwòrán sátẹ́láìtì àti àkọsílẹ̀ oko", action: "ṣètò iṣẹ́ GIS tí ó to wọ́n lé ara wọn, tí ó sì so àkọsílẹ̀ mọ́ oko kọ̀ọ̀kan pẹ̀lú ID", standard: "pẹ̀lú gbogbo ìpele ní ètò ipò (coordinate system) kan náà" },
    { id: "O3", condition: "Nígbà tí ètò kan bá ń gba ìsọfúnni àdáni àwọn àgbẹ̀", action: "kọ ọ̀rọ̀ ìyọ̀ǹda àti àwọn ìgbésẹ̀ ààbò dátà tí ó tẹ̀lé òfin", standard: "tí ó sọ ohun tí a ń gbà, ìdí rẹ̀, ẹni tí ó máa rí i, bí a ṣe máa pẹ́ tó tí a ó fi pa á mọ́, àti pé àgbẹ̀ lè kọ̀" },
    { id: "O4", condition: "Fún ẹgbẹ́ àwọn àgbẹ̀", action: "kọ àfojúsùn ètò tí ó ní nọ́mbà àti ọjọ́, kí o sì kọ àwọn olùlò àti ohun tí ọ̀kọ̀ọ̀kan máa rí gbà sílẹ̀", standard: "ní bíbẹ̀rẹ̀ láti ìṣòro tí àwọn olùlò bìkítà nípa rẹ̀, tí wọ́n sì lè ṣe nǹkan nípa rẹ̀" },
    { id: "O5", condition: "Fún ìgbà ọ̀gbìn kan nínú ètò náà", action: "ṣètò ẹgbẹ́ iṣẹ́, ohun èlò, àkókò ìfò àti ìṣúná, àti bí a ṣe máa sanwó fún iṣẹ́ náà", standard: "pẹ̀lú ìwé àṣẹ, owó ẹ̀ẹ̀kan àti owó tí ń tún wáyé, àti ètò fún ìgbà tí owó ìrànlọ́wọ́ bá tán" },
    { id: "O6", condition: "Ní ìparí ìgbà ọ̀gbìn kan", action: "yan àwọn òṣùwọ̀n àṣeyọrí kí o sì ròyìn èsì fún olùlò kọ̀ọ̀kan", standard: "ní fífi wé ìpìlẹ̀ ìfiwéra (baseline), àti sísọ òótọ́ nípa ohun tí kò ṣiṣẹ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìṣàkóso àti ìṣọ̀kan dátà",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣètò, títọ́jú àti fífi ẹ̀dà dátà drone pamọ́",
          minutes: 5,
          goal: "Ṣètò fódà, ìsọlórúkọ àti ẹ̀dà ìpamọ́ fún dátà drone láti ọ̀pọ̀ oko.",
          text: [
            "Ìfò kan láti ṣe máàpù lè mú ọgọ́rọ̀ọ̀rún fọ́tò àti máàpù ńlá mélòó kan jáde. Fún oko 200 ní gbogbo ìgbà ọ̀gbìn, ó di ẹgbẹẹgbẹ̀rún fáìlì. Láìsí ètò, dátà máa sọnù, ó máa dàpọ̀ mọ́ra, tàbí kí a kọ nǹkan míì lé e lórí, ètò náà á sì pàdánù ìgbẹ́kẹ̀lé.",
            "Lo ètò fódà kan tó yé àti òfin ìsọlórúkọ kan fún gbogbo ènìyàn: fún àpẹẹrẹ Program / Farm ID / Field ID / Date / raw, processed, reports. Lo nọ́mbà Farm ID dípò orúkọ àgbẹ̀ nínú orúkọ fáìlì. Ní ìwé àkọsílẹ̀ (register) tó rọrùn (spreadsheet) fún gbogbo ìfò: ọjọ́, Farm ID, oko, awakọ̀, drone, fáìlì, àti bóyá a ti ṣiṣẹ́ lórí rẹ̀ (bẹ́ẹ̀ ni tàbí bẹ́ẹ̀ kọ́).",
            "Tẹ̀lé èrò ẹ̀dà ìpamọ́ 3-2-1: ẹ̀dà mẹ́ta, lórí irú ibi ìpamọ́ méjì (fún àpẹẹrẹ laptop àti external drive), pẹ̀lú ẹ̀dà kan ní ibòmíì tàbí lórí iṣẹ́ cloud tí a gbẹ́kẹ̀ lé. Ṣàyẹ̀wò pé àwọn ẹ̀dà ìpamọ́ ń ṣí. Pinnu bí o ṣe máa pẹ́ tó tí o ó fi pa fọ́tò raw mọ́, nítorí wọ́n ń kún ibi ìpamọ́ kíákíá."
          ],
          steps: ["Ẹ fohùn ṣọ̀kan lórí ètò fódà kan àti òfin ìsọlórúkọ kan fún gbogbo ẹgbẹ́ iṣẹ́.", "Fún oko àti pápá kọ̀ọ̀kan ní nọ́mbà ID; má ṣe fi orúkọ sínú orúkọ fáìlì.", "Ní spreadsheet ìwé àkọsílẹ̀ ìfò.", "Fi ẹ̀dà pamọ́: ẹ̀dà mẹ́ta, irú ibi ìpamọ́ méjì, ọ̀kan ní ibòmíì.", "Pinnu bí a ṣe máa pẹ́ tó tí a ó fi pa fọ́tò raw mọ́."],
          words: [["Raw data (dátà raw)", "àwọn fọ́tò àti àkọsílẹ̀ àkọ́kọ́ tí ó wá tààrà láti drone."], ["Backup (ẹ̀dà ìpamọ́)", "ẹ̀dà dátà míì tí a pa mọ́ bí ti àkọ́kọ́ bá sọnù."], ["Register (ìwé àkọsílẹ̀)", "àkọsílẹ̀ tí ó kọ gbogbo ìfò àti àwọn fáìlì rẹ̀ sílẹ̀."]],
          slides: [
            { title: "Dátà ń pọ̀ sí i kíákíá", bullets: ["Ọgọ́rọ̀ọ̀rún fọ́tò nínú ìfò kan", "Ẹgbẹẹgbẹ̀rún fáìlì ní ìgbà ọ̀gbìn kan", "Dátà tó sọnù tàbí tó dàpọ̀ ń ba ìgbẹ́kẹ̀lé jẹ́"] },
            { title: "Ètò kan fún gbogbo ènìyàn", bullets: ["Program / Farm ID / Field ID / Date", "Raw, processed, reports", "ID, kì í ṣe orúkọ, nínú orúkọ fáìlì"] },
            { title: "Ní ìwé àkọsílẹ̀ ìfò", bullets: ["Ọjọ́, oko, pápá, awakọ̀, drone", "Fáìlì àti bóyá a ti ṣiṣẹ́ lórí wọn"] },
            { title: "Ẹ̀dà ìpamọ́ 3-2-1", bullets: ["Ẹ̀dà mẹ́ta", "Irú ibi ìpamọ́ méjì", "Ẹ̀dà kan ní ibòmíì"] }
          ],
          tryIt: "Ṣe ètò fódà náà sórí kọ̀mpútà tàbí fóònù rẹ fún ètò àpẹẹrẹ tí ó ní oko mẹ́ta, kí o sì bẹ̀rẹ̀ spreadsheet ìwé àkọsílẹ̀ ìfò pẹ̀lú àwọn ọ̀wọ̀n (columns) láti inú ẹ̀kọ́ yìí. Fi ìfò àpẹẹrẹ méjì kún un.",
          youCanNow: "ṣètò dátà drone, kọ ọ́ sílẹ̀, kí o sì fi ẹ̀dà rẹ̀ pamọ́ fún ètò tí ó ní ọ̀pọ̀ oko.",
          quickCheck: [
            { objective: "O1", q: "Kí ló dé tí a fi ń pinnu bí a ṣe máa pẹ́ tó tí a ó fi pa fọ́tò raw mọ́?", options: ["Kò bófin mu láti pa fọ́tò raw mọ́", "Àwọn àgbẹ̀ ń béèrè fún wọn lójoojúmọ́", "Fọ́tò raw ń kún ibi ìpamọ́ kíákíá", "A kò lè fi wọ́n ṣe máàpù"], answer: 2, why: "Fọ́tò raw ń kún ibi ìpamọ́ kíákíá, nítorí náà ètò náà ń pinnu bí a ṣe máa pẹ́ tó tí a ó fi pa wọ́n mọ́." },
            { objective: "O1", q: "Awakọ̀ drone méjì ń sọ fáìlì oko kan náà lórúkọ ní ọ̀nà tó yàtọ̀. Kí ni o máa ṣe?", options: ["Ẹ fohùn ṣọ̀kan lórí ètò fódà kan àti òfin ìsọlórúkọ kan fún gbogbo ènìyàn", "Jẹ́ kí awakọ̀ kọ̀ọ̀kan lo ètò tirẹ̀", "Lo orúkọ àgbẹ̀ nínú gbogbo fáìlì", "Pa àwọn fáìlì àtijọ́ rẹ́"], answer: 0, why: "Ètò fódà kan tó yé àti òfin ìsọlórúkọ kan fún gbogbo ènìyàn ń dá dátà dúró kí ó má sọnù tàbí dàpọ̀." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pípa máàpù drone pọ̀ mọ́ GIS, sátẹ́láìtì àti àkọsílẹ̀ oko",
          minutes: 6,
          goal: "Ṣe iṣẹ́ GIS tí ó to máàpù drone, ààlà oko, àwòrán sátẹ́láìtì àti àkọsílẹ̀ oko lé ara wọn.",
          text: [
            "GIS ń jẹ́ kí o to oríṣiríṣi dátà lé ara wọn lórí máàpù kan. Fún ètò kan, àwọn ìpele ìpìlẹ̀ ni ààlà oko (tí a fi GPS fóònù rìn yí ká tàbí tí a yà sórí máàpù drone) àti àmì ibi tí oko kọ̀ọ̀kan wà. Lórí wọn ni máàpù orthomosaic àti NDVI láti drone, àwòrán sátẹ́láìtì ọ̀fẹ́, àti àkọsílẹ̀ bí ọjọ́ gbígbìn, irúgbìn, ohun èlò ọ̀gbìn àti ìkórè máa ń wà.",
            "Àwòrán sátẹ́láìtì Sentinel-2 ọ̀fẹ́, tí o lè wò nínú Copernicus Browser, ń dé ní gbogbo ọjọ́ díẹ̀, ní nǹkan bí mítà 10 fún píksẹ́lì kan. Wọn kò péye tó láti rí ohun ọ̀gbìn kọ̀ọ̀kan, ṣùgbọ́n wọ́n dára fún wíwo gbogbo oko 200 láàárín ìfò drone. Lo sátẹ́láìtì láti pinnu oko tí ó nílò ìbẹ̀wò drone, kí o sì lo drone fún àlàyé kíkún.",
            "So àkọsílẹ̀ mọ́ oko pẹ̀lú Field ID, kí o lè béèrè ìbéèrè bíi: ṣé àwọn oko tí ó gba ìmọ̀ràn drone so èso jù? QGIS lè so spreadsheet mọ́ ìpele oko pẹ̀lú ID (join). Lo ètò ipò (coordinate system) kan náà fún gbogbo ìpele, bí bẹ́ẹ̀ kọ́ wọn kò ní bá ara wọn mu."
          ],
          steps: ["Ṣe ìpele ààlà oko pẹ̀lú Field ID fún oko kọ̀ọ̀kan.", "Fi máàpù drone ti àwọn oko tí o fò lé lórí kún un.", "Fi àwòrán sátẹ́láìtì ọ̀fẹ́ ti agbègbè náà fún àkókò kan náà kún un.", "So spreadsheet àkọsílẹ̀ rẹ mọ́ ìpele oko pẹ̀lú Field ID.", "Ṣàyẹ̀wò pé gbogbo ìpele bá ara wọn mu (ètò ipò kan náà)."],
          words: [["Ààlà oko (field boundary)", "àwòrán lórí máàpù tí ó yí oko kan ká."], ["Sentinel-2", "sátẹ́láìtì méjì ti Europe tí àwòrán wọn jẹ́ ọ̀fẹ́; nǹkan bí mítà 10 fún píksẹ́lì kan."], ["Join", "síso tábìlì mọ́ àwọn àwòrán oko lórí máàpù pẹ̀lú ID tí wọ́n jọ ní."], ["Ètò ipò (coordinate system)", "òfin tí máàpù ń lò láti fi nǹkan sí ipò rẹ̀ lórí ilẹ̀ ayé; àwọn ìpele gbọ́dọ̀ lo èyí kan náà kí wọ́n lè bá ara wọn mu."]],
          slides: [
            { title: "To àwọn ìpele rẹ lé ara wọn", bullets: ["Ààlà oko àti àmì ibi oko", "Máàpù drone àti NDVI", "Àwòrán sátẹ́láìtì", "Àkọsílẹ̀ gbígbìn, ohun èlò ọ̀gbìn, ìkórè"] },
            { title: "Sátẹ́láìtì pẹ̀lú drone", bullets: ["Sentinel-2: ọ̀fẹ́, ní gbogbo ọjọ́ díẹ̀, nǹkan bí mítà 10", "Wo gbogbo oko láàárín ìfò", "Rán drone lọ síbi tí a ti nílò àlàyé kíkún"] },
            { title: "So àkọsílẹ̀ pọ̀ pẹ̀lú Field ID", bullets: ["So spreadsheet mọ́ oko nínú QGIS", "Béèrè: ṣé oko tí ó gba ìmọ̀ràn so èso jù?", "Ètò ipò kan náà fún gbogbo ìpele"] }
          ],
          sources: [QGIS, COPERNICUS],
          tryIt: "Ṣí Copernicus Browser kí o sì wá agbègbè rẹ. Lẹ́yìn náà nínú QGIS, ya ààlà oko àpẹẹrẹ méjì, fún wọn ní Field ID, kí o sì so spreadsheet kékeré tí ó ní ọjọ́ gbígbìn àti irúgbìn fún ọ̀kọ̀ọ̀kan mọ́ wọn.",
          youCanNow: "pa máàpù drone, àwòrán sátẹ́láìtì, ààlà oko àti àkọsílẹ̀ oko pọ̀ nínú iṣẹ́ GIS kan.",
          quickCheck: [
            { objective: "O2", q: "Kí ni GIS ń jẹ́ kí o ṣe?", options: ["Fò drone fúnra rẹ̀", "To oríṣiríṣi dátà lé ara wọn lórí máàpù kan", "Gba bátìrì kíákíá", "San owó fún àgbẹ̀ pẹ̀lú mobile money"], answer: 1, why: "GIS ń to àwọn ìpele bí ààlà oko, máàpù drone, àwòrán sátẹ́láìtì àti àkọsílẹ̀ lé ara wọn lórí máàpù kan." },
            { objective: "O2", q: "Ẹgbẹ́ àjùmọ̀ṣe kan fẹ́ wo gbogbo oko 200 ní ọ̀sẹ̀ kọ̀ọ̀kan, ṣùgbọ́n drone kan ṣoṣo ni wọ́n ní. Kí ni o máa ṣètò?", options: ["Fò lórí gbogbo oko lójoojúmọ́", "Pa àbójútó tì", "Fò lórí oko alága nìkan", "Lo àwòrán sátẹ́láìtì ọ̀fẹ́ láti wo gbogbo oko, kí o sì rán drone lọ síbi tí wọ́n bá ti fi ìṣòro hàn"], answer: 3, why: "Sátẹ́láìtì ń wo gbogbo oko láàárín ìfò; drone ń fún ni ní àlàyé kíkún níbi tí a ti nílò rẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dídáàbò bo dátà àwọn àgbẹ̀ àti gbígba ìyọ̀ǹda wọn",
          minutes: 5,
          goal: "Gba dátà àwọn àgbẹ̀ kí o sì lò ó gẹ́gẹ́ bí òfin ṣe sọ, pẹ̀lú ìyọ̀ǹda tó yé àti ibi ìpamọ́ tí kò léwu.",
          text: [
            "Ètò àbójútó máa ń ní ìsọfúnni àdáni: orúkọ, nọ́mbà fóònù, nọ́mbà mobile money, ibi tí oko wà, ìkórè àti fọ́tò ilé àwọn àgbẹ̀. Àwọn òfin ààbò dátà ń ṣiṣẹ́ lórí rẹ̀. Ní Kẹ́ńyà, Office of the Data Protection Commissioner (ODPC) ló ń bójú tó Data Protection Act 2019, ó sì ń forúkọ àwọn data controller àti data processor sílẹ̀. Ní Nàìjíríà, Nigeria Data Protection Commission (NDPC) ló ń bójú tó Nigeria Data Protection Act 2023. Àwọn orílẹ̀-èdè míì ní òfin tiwọn. Ṣàyẹ̀wò bóyá àjọ rẹ gbọ́dọ̀ forúkọ sílẹ̀ àti ohun tí òfin béèrè.",
            "Gba ìyọ̀ǹda tó yé ní èdè àgbẹ̀ náà: ohun tí o ń gbà, ìdí rẹ̀, ẹni tí ó máa rí i, bí o ṣe máa pẹ́ tó tí o ó fi pa á mọ́, àti pé ó lè kọ̀ tàbí ní kí o pa á rẹ́. Gba ohun tí o nílò nìkan. Má ṣe pín dátà fún àwọn olùrà, àwọn tí ń yáni lówó tàbí àwọn míì láìsí àṣẹ.",
            "Pa dátà mọ́ láìléwu: ọ̀rọ̀ aṣínà lórí laptop àti fóònù, ìwọlé tí ó ní òdiwọ̀n, kí o sì tọ́jú ìsọfúnni àdáni lọ́tọ̀ sí máàpù níbi tí o bá ti lè ṣe bẹ́ẹ̀. Àwọn àgbẹ̀ gbọ́dọ̀ jèrè láti inú dátà tiwọn, bí máàpù àti ìròyìn tiwọn, kì í ṣe pé wọ́n kàn fún ni lásán."
          ],
          steps: ["Kọ ìsọfúnni àdáni tí ètò náà máa ní sílẹ̀.", "Ṣàyẹ̀wò òfin ààbò dátà orílẹ̀-èdè rẹ àti bóyá o gbọ́dọ̀ forúkọ sílẹ̀.", "Kọ ọ̀rọ̀ ìyọ̀ǹda kúkúrú ní èdè àgbẹ̀ náà.", "Gba ohun tí o nílò nìkan; tọ́jú rẹ̀ pẹ̀lú ọ̀rọ̀ aṣínà àti ìwọlé tí ó ní òdiwọ̀n.", "Fún àwọn àgbẹ̀ ní máàpù àti ìròyìn tiwọn."],
          words: [["Ìsọfúnni àdáni (personal data)", "ìsọfúnni nípa ẹni tí a lè dá mọ̀, bí orúkọ, nọ́mbà fóònù tàbí ibi tí oko rẹ̀ wà."], ["Ìyọ̀ǹda (consent)", "\"bẹ́ẹ̀ ni\" tó yé láti ọ̀dọ̀ ẹnìkan, lẹ́yìn tí ó ti mọ ohun tí a máa ṣe pẹ̀lú dátà rẹ̀."], ["Data controller", "àjọ tí ó ń pinnu ìdí àti bí a ṣe ń lo ìsọfúnni àdáni."]],
          slides: [
            { title: "Ètò rẹ ní ìsọfúnni àdáni", bullets: ["Orúkọ, fóònù, nọ́mbà mobile money", "Ibi tí oko wà, ìkórè, fọ́tò"] },
            { title: "Òfin ń ṣiṣẹ́ lórí rẹ̀", bullets: ["Kẹ́ńyà: Data Protection Act 2019, ODPC", "Nàìjíríà: Data Protection Act 2023, NDPC", "Àwọn orílẹ̀-èdè míì: òfin tiwọn"] },
            { title: "Ìyọ̀ǹda àti dátà tí ó kéré jù", bullets: ["Kí ni, kí ló dé, ta ló máa rí i, fún ìgbà mélòó", "Àgbẹ̀ lè kọ̀", "Gba ohun tí o nílò nìkan"] },
            { title: "Pa á mọ́ láìléwu àti lọ́nà òdodo", bullets: ["Ọ̀rọ̀ aṣínà, ìwọlé tí ó ní òdiwọ̀n", "Kò sí pínpín láìsí àṣẹ", "Àwọn àgbẹ̀ ń gba máàpù tiwọn"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Kọ ọ̀rọ̀ ìyọ̀ǹda tí ó ní gbólóhùn márùn-ún fún àwọn àgbẹ̀ tí ń dara pọ̀ mọ́ ètò àbójútó pẹ̀lú drone, ní ọ̀rọ̀ tó rọrùn (àti ní èdè ìbílẹ̀ tí o bá lè ṣe bẹ́ẹ̀): ohun tí o ń gbà, ìdí rẹ̀, ẹni tí ó máa rí i, bí o ṣe máa pẹ́ tó tí o ó fi pa á mọ́, àti bí wọ́n ṣe lè kọ̀.",
          youCanNow: "gba dátà àwọn àgbẹ̀ kí o sì bójú tó o pẹ̀lú ìyọ̀ǹda wọn, gẹ́gẹ́ bí òfin ààbò dátà orílẹ̀-èdè rẹ ṣe sọ.",
          quickCheck: [
            { objective: "O3", q: "Ní Kẹ́ńyà, ta ni ODPC ń forúkọ rẹ̀ sílẹ̀?", options: ["Àwọn awakọ̀ drone", "Àwọn tí ń ta irúgbìn", "Àwọn olùrà ọjà oko nìkan", "Àwọn data controller àti data processor"], answer: 3, why: "ODPC ti Kẹ́ńyà ń forúkọ àwọn data controller àti data processor sílẹ̀ lábẹ́ Data Protection Act 2019." },
            { objective: "O3", q: "Àgbẹ̀ obìnrin kan ní kí o yọ dátà òun kúrò nínú ètò náà. Kí ni o máa ṣe?", options: ["Kọ̀, nítorí dátà náà jẹ́ ti ètò náà", "Bọ̀wọ̀ fún ìbéèrè rẹ̀ kí o sì yọ ọ́ kúrò, bí ọ̀rọ̀ ìyọ̀ǹda ṣe sọ pé ó lè ṣe", "Tà á ná kí o tó yọ ọ́ kúrò", "Má ṣe kà ìbéèrè náà sí"], answer: 1, why: "Ìyọ̀ǹda ń sọ fún àwọn àgbẹ̀ pé wọ́n lè kọ̀ tàbí ní kí a yọ dátà wọn kúrò." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìṣàkóso àti ìṣọ̀kan dátà",
        questions: [
          { objective: "O1", q: "Kí ló dé tí a fi ń lo Farm ID dípò orúkọ àgbẹ̀ nínú orúkọ fáìlì?", options: ["Orúkọ gùn jù", "Ó ń dáàbò bo ìsọfúnni àdáni, ó sì ń jẹ́ kí ìsọlórúkọ dọ́gba", "Software kò lè ka orúkọ", "Drone ló béèrè rẹ̀"], answer: 1, why: "ID ń dáàbò bo ìsọfúnni àdáni, ó sì ń jẹ́ kí fáìlì wà létòlétò." },
          { objective: "O1", q: "Èrò ẹ̀dà ìpamọ́ 3-2-1 túmọ̀ sí:", options: ["Ẹ̀dà mẹ́ta, irú ibi ìpamọ́ méjì, ọ̀kan ní ibòmíì", "Drone mẹ́ta, awakọ̀ méjì, oko kan", "Fi ẹ̀dà pamọ́ lẹ́ẹ̀kan ní ọdún mẹ́ta", "Pa ẹ̀dà méjì rẹ́"], answer: 0, why: "Ẹ̀dà púpọ̀ ní ibi tó yàtọ̀ síra ń dáàbò bo dátà kí ó má sọnù." },
          { objective: "O2", q: "Nínú ètò kan, ọ̀nà tó dára jù láti lo àwòrán Sentinel-2 ọ̀fẹ́ ni láti:", options: ["Ka ohun ọ̀gbìn kọ̀ọ̀kan", "Rọ́pò gbogbo ìfò drone", "Ka orúkọ àwọn àgbẹ̀", "Wo gbogbo oko láàárín ìfò kí o sì yan ibi tí o máa rán drone lọ"], answer: 3, why: "Ní nǹkan bí mítà 10, wọ́n ń fi ìrísí gbogbogbò hàn, kì í ṣe ohun ọ̀gbìn kọ̀ọ̀kan." },
          { objective: "O2", q: "Ìpele máàpù méjì kò bá ara wọn mu. Ohun tí ó ṣeé ṣe kí ó fà á ni:", options: ["Ìbòrí ara (overlap) pọ̀ jù", "Fóònù àgbẹ̀ náà", "Ètò ipò (coordinate system) tó yàtọ̀", "Oko pọ̀ jù"], answer: 2, why: "Àwọn ìpele gbọ́dọ̀ lo ètò ipò kan náà kí wọ́n lè bá ara wọn mu." },
          { objective: "O3", q: "Ta ló ń bójú tó ààbò dátà ní Kẹ́ńyà?", options: ["Office of the Data Protection Commissioner (ODPC)", "KCAA", "Ẹni tí ó ta drone", "Ilé ìgbìmọ̀ aṣòfin ìjọba ìbílẹ̀ (county assembly)"], answer: 0, why: "ODPC ló ń bójú tó Data Protection Act 2019 ti Kẹ́ńyà." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe ètò àbójútó pẹ̀lú drone",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bẹ̀rẹ̀ láti ìṣòro àti àwọn olùlò",
          minutes: 5,
          goal: "Kọ àfojúsùn ètò tó yé, kí o sì kọ àwọn olùlò àti ohun tí ọ̀kọ̀ọ̀kan máa rí gbà sílẹ̀.",
          text: [
            "Ọ̀pọ̀ iṣẹ́ drone ń kùnà nítorí pé wọ́n ń bẹ̀rẹ̀ láti drone, kì í ṣe láti ìṣòro. Bẹ̀rẹ̀ láti ìṣòro tí àwọn àgbẹ̀ àti àwọn alábàáṣiṣẹ́ wọn bìkítà nípa rẹ̀, tí wọ́n sì lè ṣe nǹkan nípa rẹ̀: rírí kòkòrò fall armyworm pẹ́ jù nínú ẹgbẹ́ àjùmọ̀ṣe àgbàdo, dídára tíì tí kò dọ́gba láàárín oko ńlá, ohun ọ̀gbìn tí kò hù dáadáa lóko ẹ̀gẹ́ àwọn outgrower, tàbí ìbàjẹ́ omíyalé nínú oko ìrẹsì.",
            "Kọ gbólóhùn àfojúsùn kan tí ó ní nọ́mbà àti ọjọ́, fún àpẹẹrẹ: Ní ìparí òjò ńlá (long rains) 2027, rí ibi tí fall armyworm pọ̀ sí lórí oko ọmọ ẹgbẹ́ 200 láàárín ọ̀sẹ̀ kan lẹ́yìn ìbàjẹ́ àkọ́kọ́, kí o sì fi ìmọ̀ràn tí a ti fìdí rẹ̀ múlẹ̀ ránṣẹ́ sí àgbẹ̀ kọ̀ọ̀kan tí ó kàn láàárín ọjọ́ mẹ́ta.",
            "Kọ àwọn olùlò àti ohun tí ọ̀kọ̀ọ̀kan máa rí gbà: àwọn àgbẹ̀ (máàpù àti ìmọ̀ràn tó rọrùn lórí fóònù wọn), òṣìṣẹ́ ìdámọ̀ràn (ibi tí wọ́n máa kọ́kọ́ bẹ̀ wò), ìgbìmọ̀ ẹgbẹ́ àjùmọ̀ṣe (àkópọ̀ ìgbà ọ̀gbìn), àwọn olùrà tàbí ilé-iṣẹ́ ìṣe ọjà (iye ọjà tí wọ́n ń retí, láìsí ìsọfúnni àdáni àyàfi tí àwọn àgbẹ̀ bá gbà), àti ọ́fíìsì ọ̀gbìn ìjọba ìbílẹ̀ tàbí ìpínlẹ̀ tí ó bá jẹ́ alábàáṣiṣẹ́."
          ],
          steps: ["Dárúkọ ìṣòro náà ní gbólóhùn kan.", "Ṣàyẹ̀wò pé àwọn olùlò bìkítà nípa rẹ̀, wọ́n sì lè ṣe nǹkan nípa rẹ̀.", "Kọ àfojúsùn kan tí ó ní nọ́mbà àti ọjọ́.", "Kọ ẹgbẹ́ olùlò kọ̀ọ̀kan sílẹ̀, ohun tí ó máa rí gbà, àti ní ọ̀nà wo."],
          words: [["Ètò (program)", "iṣẹ́ tí a ṣètò tí ó ń lọ fún ìgbà pípẹ́ fún ọ̀pọ̀ ènìyàn, kì í ṣe ìfò kan ṣoṣo."], ["Olùlò (user)", "ẹnìkan tàbí ẹgbẹ́ tí ó ń gba èsì ètò náà, tí ó sì ń ṣe nǹkan pẹ̀lú rẹ̀."]],
          slides: [
            { title: "Ìṣòro ṣáájú, drone lẹ́yìn", bullets: ["Ìṣòro tí àwọn ènìyàn bìkítà nípa rẹ̀", "Tí wọ́n sì lè ṣe nǹkan nípa rẹ̀"] },
            { title: "Àfojúsùn tí ó ní nọ́mbà àti ọjọ́", bullets: ["Rí ibi tí FAW pọ̀ sí lórí oko 200", "Láàárín ọ̀sẹ̀ kan lẹ́yìn ìbàjẹ́ àkọ́kọ́", "Ìmọ̀ràn láàárín ọjọ́ mẹ́ta"] },
            { title: "Àwọn olùlò àti ohun tí wọ́n ń gbà", bullets: ["Àgbẹ̀: máàpù àti ìmọ̀ràn tó rọrùn lórí fóònù", "Òṣìṣẹ́ ìdámọ̀ràn: ibi tí wọ́n máa kọ́kọ́ bẹ̀ wò", "Ìgbìmọ̀ àti alábàáṣiṣẹ́: àkópọ̀ ìgbà ọ̀gbìn"] }
          ],
          tryIt: "Kọ ìṣòro náà, gbólóhùn àfojúsùn kan tí ó ní nọ́mbà àti ọjọ́, àti tábìlì tí ó ní ó kéré tán ẹgbẹ́ olùlò mẹ́rin àti ohun tí ọ̀kọ̀ọ̀kan máa rí gbà, fún ètò kan tí o lè ṣe.",
          youCanNow: "ṣàlàyé ìṣòro, àfojúsùn àti àwọn olùlò ètò drone kan dáadáa.",
          quickCheck: [
            { objective: "O4", q: "Kí ló ń jẹ́ kí àfojúsùn ètò yé?", options: ["Gbólóhùn kan tí ó ní nọ́mbà àti ọjọ́", "Àkọsílẹ̀ gígùn gbogbo ohun tí drone lè ṣe", "Orúkọ ilé-iṣẹ́ tí ó ṣe drone", "Fọ́tò oko"], answer: 0, why: "Àfojúsùn tó yé jẹ́ gbólóhùn kan tí ó ní nọ́mbà àti ọjọ́, kí o lè mọ ìgbà tí o bá dé ibẹ̀." },
            { objective: "O4", q: "Ọmọ ìgbìmọ̀ kan fẹ́ kọ́kọ́ ra drone, kí wọ́n tó wá ohun tí wọ́n máa fi ṣe. Kí ni ìmọ̀ràn rẹ?", options: ["Ra drone tí ó wọ́n jù", "Ra drone kí ẹ sì pinnu ní ọdún tó ń bọ̀", "Bẹ̀rẹ̀ láti ìṣòro tí àwọn àgbẹ̀ bìkítà nípa rẹ̀, tí wọ́n sì lè ṣe nǹkan nípa rẹ̀", "Béèrè lọ́wọ́ ẹni tí ń ta drone ohun tí ẹ máa ṣe"], answer: 2, why: "Ọ̀pọ̀ iṣẹ́ drone ń kùnà nítorí pé wọ́n ń bẹ̀rẹ̀ láti drone, kì í ṣe láti ìṣòro." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣètò ènìyàn, ohun èlò, àkókò àti owó",
          minutes: 6,
          goal: "Ṣètò ẹgbẹ́ iṣẹ́, ohun èlò, àkókò ìfò àti ìṣúná fún ìgbà ọ̀gbìn kan.",
          text: [
            "Ènìyàn: àwọn awakọ̀ drone (remote pilot) tí ó ní ìwé àṣẹ àti àwọn olùwòye (observer), ẹnìkan láti ṣiṣẹ́ lórí dátà àti ṣàyẹ̀wò rẹ̀, òṣìṣẹ́ ìdámọ̀ràn láti lọ fi ojú rí i lórí oko (ground-truth) àti láti gbani nímọ̀ràn, àti olùṣètò kan. Tí ètò rẹ bá ń fò fún àwọn ẹlòmíì tàbí fún owó, àjọ rẹ lè nílò ìwé ẹ̀rí olùṣiṣẹ́ (operator certificate) láti ọ̀dọ̀ àjọ ìrìn òfuurufú, awakọ̀ kọ̀ọ̀kan sì nílò ìwé àṣẹ tí òfin yín béèrè.",
            "Ohun èlò: drone (àti ọ̀kan sí i fún àfipamọ́), bátìrì tí ó tó fún odindi ọjọ́ kan, chaja (ọ̀nà láti gba agbára pẹ̀lú oòrùn (solar) tàbí ọkọ̀ níbi tí iná mànàmáná kò ti dúró), laptop tí ó lè ṣe máàpù, ibi ìpamọ́, fóònù tàbí tablet, ohun èlò ààbò àti ọkọ̀. Àkókò: ya kàlẹ́ńdà ohun ọ̀gbìn kí o sì pinnu iye ìfò fún oko kọ̀ọ̀kan ní ìgbà ọ̀gbìn kan; kó àwọn oko jọ ní agbègbè kí ẹgbẹ́ kan lè bo ọ̀pọ̀ oko ní ọjọ́ kan.",
            "Owó: kọ owó ẹ̀ẹ̀kan (drone, laptop, ìdánilẹ́kọ̀ọ́, ìwé àṣẹ àti ìwé ẹ̀rí) àti owó tí ń tún wáyé (òṣìṣẹ́, ọkọ̀, dátà íńtánẹ́ẹ̀tì, àtúnṣe, ìbánigbófò, owó iṣẹ́) sílẹ̀. Lẹ́yìn náà pinnu bí a ṣe máa sanwó rẹ̀: owó fún acre tàbí hectare kọ̀ọ̀kan tí a gbà pẹ̀lú mobile money, owó kékeré (levy) tí ẹgbẹ́ àjùmọ̀ṣe ń gbà lórí ọjà tí a kó wá, olùrà tàbí ilé-iṣẹ́ ìṣe ọjà tí ó ń jèrè, tàbí owó ìrànlọ́wọ́ ìjọba tàbí donor fún àkókò ìbẹ̀rẹ̀. Ṣètò fún ìgbà tí owó ìrànlọ́wọ́ bá tán."
          ],
          steps: ["Kọ àwọn ipa iṣẹ́ sílẹ̀ àti ìwé àṣẹ tàbí ìwé ẹ̀rí tí ọ̀kọ̀ọ̀kan nílò.", "Kọ ohun èlò sílẹ̀, pẹ̀lú àfipamọ́ àti ọ̀nà gbígba agbára.", "Ya àkókò ìgbà ọ̀gbìn láti inú kàlẹ́ńdà ohun ọ̀gbìn; kó àwọn oko jọ ní agbègbè.", "Kọ owó ẹ̀ẹ̀kan àti owó tí ń tún wáyé sílẹ̀.", "Yan bí a ṣe máa sanwó fún iṣẹ́ náà, àti bí ó ṣe máa tẹ̀síwájú lẹ́yìn tí owó ìrànlọ́wọ́ bá tán."],
          words: [["Owó ẹ̀ẹ̀kan (one-off cost)", "owó tí a ń san lẹ́ẹ̀kan, bí rírà drone."], ["Owó tí ń tún wáyé (running cost)", "owó tí a ń san léraléra, bí ọkọ̀ àti owó òṣìṣẹ́."], ["Levy", "owó kékeré tí a ń gbà lọ́wọ́ àwọn ọmọ ẹgbẹ́, fún àpẹẹrẹ fún kìlógíráàmù kọ̀ọ̀kan tí wọ́n kó wá."]],
          slides: [
            { title: "Ènìyàn", bullets: ["Awakọ̀ drone tí ó ní ìwé àṣẹ àti àwọn olùwòye", "Ẹni tí ń ṣiṣẹ́ lórí dátà àti ṣàyẹ̀wò rẹ̀", "Òṣìṣẹ́ ìdámọ̀ràn àti olùṣètò", "Ìwé ẹ̀rí olùṣiṣẹ́ tí òfin yín bá béèrè rẹ̀"] },
            { title: "Ohun èlò", bullets: ["Drone pẹ̀lú àfipamọ́ kan, bátìrì fún odindi ọjọ́", "Gbígba agbára pẹ̀lú solar tàbí ọkọ̀", "Laptop, ibi ìpamọ́, fóònù, ọkọ̀"] },
            { title: "Àkókò", bullets: ["Tẹ̀lé kàlẹ́ńdà ohun ọ̀gbìn", "Iye ìfò fún oko kọ̀ọ̀kan ní ìgbà ọ̀gbìn", "Kó àwọn oko jọ ní agbègbè"] },
            { title: "Owó", bullets: ["Owó ẹ̀ẹ̀kan àti owó tí ń tún wáyé", "Owó fún hectare pẹ̀lú mobile money, levy, olùrà, owó ìrànlọ́wọ́", "Ṣètò fún ìgbà tí owó ìrànlọ́wọ́ bá tán"] }
          ],
          sources: [KCAA_UAS, NCAA_P21, FAO_ITU_DRONES],
          tryIt: "Fún ètò rẹ láti Ẹ̀kọ́ 4, kọ àkọsílẹ̀ ẹgbẹ́ iṣẹ́, àkọsílẹ̀ ohun èlò, àkókò ìgbà ọ̀gbìn (ọ̀sẹ̀ wo ni o máa fò níbo) àti tábìlì ìṣúná tó rọrùn ti owó ẹ̀ẹ̀kan àti owó tí ń tún wáyé, pẹ̀lú bí a ṣe máa san ọ̀kọ̀ọ̀kan.",
          youCanNow: "ṣètò ẹgbẹ́ iṣẹ́, ohun èlò, àkókò àti ìṣúná ètò àbójútó pẹ̀lú drone.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni owó ẹ̀ẹ̀kan fún ètò drone?", options: ["Owó ọkọ̀ ọ̀sẹ̀ kọ̀ọ̀kan", "Dátà íńtánẹ́ẹ̀tì oṣù kọ̀ọ̀kan", "Rírà drone àti laptop", "Owó oṣù òṣìṣẹ́"], answer: 2, why: "Ohun èlò bí drone àti laptop jẹ́ owó ẹ̀ẹ̀kan; ọkọ̀, dátà àti owó oṣù jẹ́ owó tí ń tún wáyé." },
            { objective: "O5", q: "Olùyọ̀ǹda kan fẹ́ fò drone fún ètò náà, ṣùgbọ́n kò ní ìwé àṣẹ awakọ̀ drone. Kí ni o máa ṣe?", options: ["Má ṣe jẹ́ kí ó fò títí yóò fi ní ìwé àṣẹ tí òfin béèrè", "Jẹ́ kí ó fò lórí oko kékeré nìkan", "Jẹ́ kí ó fò tí olùṣètò bá ń wò ó", "Jẹ́ kí ó fò ní òpin ọ̀sẹ̀"], answer: 0, why: "Awakọ̀ kọ̀ọ̀kan nílò ìwé àṣẹ tí òfin orílẹ̀-èdè béèrè." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Wíwọn èsì àti ríròyìn",
          minutes: 5,
          goal: "Yan àwọn òṣùwọ̀n àṣeyọrí kí o sì ròyìn èsì lóòótọ́ fún àwọn àgbẹ̀ àti alábàáṣiṣẹ́.",
          text: [
            "Ètò kan yẹ láti máa bá a lọ kìkì tí ó bá ń mú ìyàtọ̀ wá. Yan òṣùwọ̀n díẹ̀ tí ó so mọ́ àfojúsùn rẹ: bí a ṣe yára rí ìṣòro tó, iye àgbẹ̀ tí ó gba ìmọ̀ràn ní àkókò, iye tí ó ṣe ohun tí ìmọ̀ràn sọ, ìkórè tàbí dídára ọjà ní ìfiwéra pẹ̀lú oko tàbí ìgbà ọ̀gbìn tí kò ní ètò náà, àti iye owó fún oko kọ̀ọ̀kan.",
            "Gba ìpìlẹ̀ ìfiwéra (baseline) kí o tó bẹ̀rẹ̀ (fún àpẹẹrẹ ìkórè ìgbà ọ̀gbìn tó kọjá tàbí bí ó ṣe pẹ́ tó kí a tó rí ìṣòro), kí o lè fi wé e. Béèrè lọ́wọ́ àwọn àgbẹ̀ náà: ṣé ìmọ̀ràn náà yé wọn, ṣé ó wúlò, ṣé wọ́n á sì sanwó fún un? Ìdáhùn wọn ṣe pàtàkì bí àwọn nọ́mbà.",
            "Ròyìn ní ọ̀nà tí olùlò kọ̀ọ̀kan lè lò: ọ̀rọ̀ kúkúrú sí àwọn àgbẹ̀, àkópọ̀ ojú-ewé kan pẹ̀lú máàpù fún ìgbìmọ̀, ìròyìn tí ó kún jù fún àwọn alábàáṣiṣẹ́. Sọ òótọ́ nípa ohun tí kò ṣiṣẹ́. Lẹ́yìn náà mú ètò náà dára sí i fún ìgbà ọ̀gbìn tó ń bọ̀."
          ],
          steps: ["Yan òṣùwọ̀n mẹ́ta sí márùn-ún tí ó so mọ́ àfojúsùn.", "Kọ ìpìlẹ̀ ìfiwéra sílẹ̀ kí ètò tó bẹ̀rẹ̀.", "Gba àwọn òṣùwọ̀n àti èrò àwọn àgbẹ̀ nígbà ìgbà ọ̀gbìn.", "Ròyìn ní ọ̀nà tó yẹ fún olùlò kọ̀ọ̀kan.", "Kọ ohun tí a máa mú dára sí i ní ìgbà ọ̀gbìn tó ń bọ̀ sílẹ̀."],
          words: [["Ìpìlẹ̀ ìfiwéra (baseline)", "bí nǹkan ṣe rí kí ètò tó bẹ̀rẹ̀, tí a ń lò fún ìfiwéra."], ["Òṣùwọ̀n àṣeyọrí", "nọ́mbà tí ó ń fi hàn bóyá ètò náà dé àfojúsùn rẹ̀."]],
          slides: [
            { title: "Wọn ohun tí ó ṣe pàtàkì", bullets: ["Bí a ṣe yára rí ìṣòro tó", "Àgbẹ̀ tí ó gba ìmọ̀ràn ní àkókò, àti àwọn tí ó ṣe é", "Ìkórè tàbí dídára ọjà ní ìfiwéra pẹ̀lú baseline", "Iye owó fún oko kọ̀ọ̀kan"] },
            { title: "Baseline àti èrò àwọn àgbẹ̀", bullets: ["Kọ ibi tí a ti bẹ̀rẹ̀ sílẹ̀", "Béèrè lọ́wọ́ àgbẹ̀: ṣé ó wúlò? ṣé ẹ á sanwó?"] },
            { title: "Ròyìn kí o sì mú un dára sí i", bullets: ["Ọ̀rọ̀ kúkúrú sí àwọn àgbẹ̀", "Ojú-ewé kan àti máàpù fún ìgbìmọ̀", "Sọ òótọ́; mú un dára sí i ní ìgbà ọ̀gbìn tó ń bọ̀"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ojú-ewé méjì rẹ fún ẹgbẹ́ àjùmọ̀ṣe tí ó ní àgbẹ̀ kékeré 200: ìṣòro àti àfojúsùn, àwọn olùlò, ètò dátà pẹ̀lú GIS àti ìyọ̀ǹda, ẹgbẹ́ iṣẹ́ àti ohun èlò, àkókò ìgbà ọ̀gbìn, ìṣúná àti ọ̀nà ìsanwó, àwọn òṣùwọ̀n àṣeyọrí pẹ̀lú baseline, àti ríròyìn.",
          youCanNow: "wọn èsì ètò àbójútó pẹ̀lú drone, ròyìn rẹ̀, mú un dára sí i, kí o sì gbé ètò kíkún kalẹ̀.",
          quickCheck: [
            { objective: "O6", q: "Èwo ni àpẹẹrẹ ìpìlẹ̀ ìfiwéra (baseline)?", options: ["Àfojúsùn ìgbà ọ̀gbìn tó ń bọ̀", "Ìkórè ìgbà ọ̀gbìn tó kọjá tàbí bí ó ṣe pẹ́ tó kí a tó rí ìṣòro, tí a kọ sílẹ̀ kí a tó bẹ̀rẹ̀", "Iye owó drone", "Ọjọ́ ìpàdé ìgbìmọ̀"], answer: 1, why: "Baseline ni bí nǹkan ṣe rí kí ètò tó bẹ̀rẹ̀, kí a lè fi èsì wé e." },
            { objective: "O6", q: "Àwọn àgbẹ̀ sọ pé máàpù péye, ṣùgbọ́n ìmọ̀ràn ṣòro láti yé. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ kúrò nínú ìròyìn", "Ròyìn máàpù tó péye nìkan", "Dá ètò náà dúró", "Ròyìn rẹ̀ lóòótọ́ kí o sì yí bí a ṣe ń fúnni ní ìmọ̀ràn padà ní ìgbà ọ̀gbìn tó ń bọ̀"], answer: 3, why: "Sọ òótọ́ nípa ohun tí kò ṣiṣẹ́, lẹ́yìn náà mú ètò náà dára sí i fún ìgbà ọ̀gbìn tó ń bọ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe ètò àbójútó pẹ̀lú drone",
        questions: [
          { objective: "O4", q: "Kí ló dé tí ọ̀pọ̀ iṣẹ́ drone fi ń kùnà?", options: ["Drone kéré jù", "Wọ́n ń bẹ̀rẹ̀ láti drone dípò ìṣòro gidi", "Àwọn àgbẹ̀ kò fẹ́ máàpù", "Bátìrì tóbi jù"], answer: 1, why: "Ètò ń ṣiṣẹ́ nígbà tí ó bá yanjú ìṣòro tí àwọn olùlò bìkítà nípa rẹ̀." },
          { objective: "O4", q: "Èwo ni àfojúsùn ètò tó dára jù?", options: ["Fò drone púpọ̀", "Lo ẹ̀rọ ìgbàlódé", "Rí ibi tí FAW pọ̀ sí lórí oko 200 láàárín ọ̀sẹ̀ kan lẹ́yìn ìbàjẹ́ àkọ́kọ́ ní ìparí òjò ńlá 2027", "Jẹ́ olùdásílẹ̀ nǹkan tuntun"], answer: 2, why: "Ó ní nọ́mbà tó yé, àkókò àti èsì." },
          { objective: "O5", q: "Ètò rẹ máa fò fún àwọn àgbẹ̀ tí ń sanwó. Kí ni o gbọ́dọ̀ ṣàyẹ̀wò?", options: ["Bóyá àjọ rẹ nílò ìwé ẹ̀rí olùṣiṣẹ́, àti pé àwọn awakọ̀ nílò ìwé àṣẹ", "Àwọ̀ drone nìkan", "Ojú-ọjọ́ nìkan", "Kò sí nǹkan; àwọn àgbẹ̀ ti gbà"], answer: 0, why: "Fífò fún owó sábà máa ń nílò ìwé ẹ̀rí olùṣiṣẹ́ àti awakọ̀ tí ó ní ìwé àṣẹ." },
          { objective: "O5", q: "Èwo ni owó tí ń tún wáyé?", options: ["Rírà drone àkọ́kọ́", "Rírà laptop", "Ìdánilẹ́kọ̀ọ́ àkọ́kọ́", "Ọkọ̀ lọ sí oko ní ọ̀sẹ̀ kọ̀ọ̀kan"], answer: 3, why: "Owó tí ń tún wáyé máa ń wáyé léraléra ní gbogbo ìgbà ètò náà." },
          { objective: "O6", q: "Kí ló dé tí a fi ń gba ìpìlẹ̀ ìfiwéra (baseline)?", options: ["Láti kún fọ́ọ̀mù kan", "Láti fi èsì wé bí nǹkan ṣe rí kí ètò tó bẹ̀rẹ̀", "Láti pa dátà àtijọ́ rẹ́", "Láti yan drone"], answer: 1, why: "Láìsí ibi tí a ti bẹ̀rẹ̀, o kò lè fi ìyípadà hàn." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Drone fún Àbójútó Oko 5: Ìṣọ̀kan Dátà, GIS àti Ṣíṣe Ètò",
    questions: [
      { objective: "O1", q: "Láìsí ètò dátà, ètò drone ńlá wà nínú ewu:", options: ["Fáìlì tí ó sọnù, tí ó dàpọ̀ tàbí tí a kọ nǹkan míì lé lórí", "Máàpù tó dára jù", "Ìfò tó yára jù", "Drone tí ó dín owó kù"], answer: 0, why: "Ẹgbẹẹgbẹ̀rún fáìlì nílò ètò tó yé." },
      { objective: "O1", q: "Ìwé àkọsílẹ̀ ìfò máa ń kọ:", options: ["Iye owó ọjà oko", "Ọjọ́, oko, pápá, awakọ̀, drone, fáìlì àti ipò iṣẹ́", "Ojú-ọjọ́ nìkan", "Ìsọfúnni báńkì àwọn àgbẹ̀"], answer: 1, why: "Ó ń tọpa gbogbo ìfò àti dátà rẹ̀." },
      { objective: "O1", q: "Èwo ni òfin fódà tó dára?", options: ["Orúkọ èyíkéyìí", "Orúkọ kíkún àgbẹ̀ àti nọ́mbà fóònù rẹ̀", "Program / Farm ID / Field ID / Date", "Gbogbo nǹkan nínú fódà kan"], answer: 2, why: "Ètò tó dọ́gba tí ó ń lo ID ń jẹ́ kí dátà wà létòlétò, kí ó sì jẹ́ àṣírí." },
      { objective: "O1", q: "Nínú òfin 3-2-1, 1 túmọ̀ sí:", options: ["Drone kan", "Àgbẹ̀ kan", "Ọjọ́ kan", "Ẹ̀dà kan ní ibòmíì"], answer: 3, why: "Ẹ̀dà tí ó wà ní ibòmíì máa ń là á já tí olè, iná tàbí ìbàjẹ́ bá ṣẹlẹ̀ ní ọ́fíìsì." },
      { objective: "O2", q: "Nínú GIS, àwọn ìpele ìpìlẹ̀ fún ètò kan sábà máa ń ní:", options: ["Ààlà oko àti àmì ibi oko", "Fáìlì orin", "Fọ́tò ẹgbẹ́ iṣẹ́ nìkan", "Ìwé owó (invoice)"], answer: 0, why: "Gbogbo nǹkan yòókù ni a ń gbé lé oko àti ibi oko." },
      { objective: "O2", q: "Àwòrán Sentinel-2 jẹ́ nǹkan bí mítà mélòó fún píksẹ́lì kan?", options: ["0.01", "10", "1,000", "100,000"], answer: 1, why: "Àwòrán Sentinel-2 ọ̀fẹ́ jẹ́ nǹkan bí mítà 10 fún píksẹ́lì kan." },
      { objective: "O2", q: "Láti so spreadsheet mọ́ ìpele oko, o nílò:", options: ["Àwọ̀ kan náà", "Drone kan", "ID tí wọ́n jọ ní, bí Field ID", "Ẹ̀rọ ìtẹ̀wé"], answer: 2, why: "ID náà ló ń so ìlà kọ̀ọ̀kan mọ́ oko rẹ̀." },
      { objective: "O2", q: "Ìbéèrè wo ni iṣẹ́ GIS tí a ti so pọ̀ lè ràn ọ́ lọ́wọ́ láti dáhùn?", options: ["Kí ni ọ̀rọ̀ aṣínà àgbẹ̀ náà?", "Àwọ̀ wo ni drone náà?", "Ta ló borí nínú ìdíje bọ́ọ̀lù?", "Ṣé àwọn oko tí ó gba ìmọ̀ràn drone so èso jù?"], answer: 3, why: "Síso àkọsílẹ̀ mọ́ oko ń jẹ́ kí irú ìfiwéra bẹ́ẹ̀ ṣeé ṣe." },
      { objective: "O3", q: "Ta ló ń bójú tó òfin ààbò dátà Nàìjíríà?", options: ["Nigeria Data Protection Commission (NDPC)", "NCAA", "Ilé-iṣẹ́ tí ó ṣe drone", "Ẹgbẹ́ àjùmọ̀ṣe kan"], answer: 0, why: "A dá NDPC sílẹ̀ lábẹ́ Nigeria Data Protection Act 2023." },
      { objective: "O3", q: "Ìyọ̀ǹda tó tọ́ túmọ̀ sí pé àgbẹ̀ náà:", options: ["Kò gbọ́ nǹkan kan", "Mọ ohun tí o ń gbà, ìdí rẹ̀, ẹni tí ó máa rí i, ó sì lè kọ̀", "Fọwọ́ sí i láìkà á", "Fún ọ ní PIN rẹ̀"], answer: 1, why: "Ìyọ̀ǹda gbọ́dọ̀ wá pẹ̀lú òye, kí a sì fún un ní òmìnira." },
      { objective: "O3", q: "Olùrà kan béèrè fún àkọsílẹ̀ orúkọ àwọn àgbẹ̀ àti ìkórè wọn. O yẹ kí o:", options: ["Fi ránṣẹ́ lẹ́sẹ̀kẹsẹ̀", "Gbé e jáde fún gbogbo ènìyàn", "Pín in kìkì pẹ̀lú àṣẹ àwọn àgbẹ̀", "Tà á"], answer: 2, why: "A kì í pín ìsọfúnni àdáni láìsí àṣẹ." },
      { objective: "O3", q: "Gbígba ohun tí o nílò nìkan ni a ń pè ní:", options: ["Data hoarding (kíkó dátà jọ)", "Backup", "Overlap", "Data minimisation (dídín dátà kù)"], answer: 3, why: "Dátà tí ó kéré túmọ̀ sí ewu tí ó kéré, ó sì jẹ́ ìlànà ààbò dátà." },
      { objective: "O4", q: "Ètò kan gbọ́dọ̀ bẹ̀rẹ̀ láti:", options: ["Ìṣòro tí àwọn olùlò bìkítà nípa rẹ̀, tí wọ́n sì lè ṣe nǹkan nípa rẹ̀", "Drone tuntun jù", "Àmì ìdánimọ̀ (logo)", "Ìkéde fún oníròyìn"], answer: 0, why: "Ètò tí ó bẹ̀rẹ̀ láti ìṣòro ló ń mú àǹfààní wá." },
      { objective: "O4", q: "Kí ni àwọn àgbẹ̀ nílò jù láti inú ètò náà?", options: ["Fáìlì fọ́tò raw", "Máàpù àti ìmọ̀ràn tó rọrùn lórí fóònù wọn", "Software GIS", "Ìwé àṣẹ awakọ̀ drone"], answer: 1, why: "Ìsọfúnni tó rọrùn, tí wọ́n lè fi ṣiṣẹ́, ń ran àwọn àgbẹ̀ lọ́wọ́ láti gbé ìgbésẹ̀." },
      { objective: "O5", q: "Níbi tí iná mànàmáná kò ti dúró, ṣètò fún:", options: ["Kò sí bátìrì", "Fífò ní alẹ́ nìkan", "Gbígba agbára pẹ̀lú solar tàbí ọkọ̀", "Ìfò kan ní ọdún"], answer: 2, why: "Ọ̀nà gbígba agbára ń jẹ́ kí ẹgbẹ́ iṣẹ́ máa fò ní odindi ọjọ́." },
      { objective: "O5", q: "Kíkó àwọn oko jọ ní agbègbè nínú àkókò ìfò ń ràn wá lọ́wọ́ láti:", options: ["Lo epo púpọ̀ sí i", "Jẹ́ kí máàpù ṣú", "Yẹra fún ìwé àṣẹ", "Bo ọ̀pọ̀ oko ní ọjọ́ kan"], answer: 3, why: "Ìrìnàjò tí ó dín kù túmọ̀ sí oko púpọ̀ sí i ní ọjọ́ kan àti owó tí ó dín kù." },
      { objective: "O5", q: "Ọ̀nà kan láti sanwó fún iṣẹ́ drone ẹgbẹ́ àjùmọ̀ṣe ni:", options: ["Owó kékeré fún hectare kọ̀ọ̀kan tí a san pẹ̀lú mobile money", "Ọ̀fẹ́ títí láé láìsí ètò", "Títa dátà àwọn àgbẹ̀", "Fífo àtúnṣe"], answer: 0, why: "Owó iṣẹ́, levy, olùrà tàbí owó ìrànlọ́wọ́ lè sanwó fún iṣẹ́ náà lọ́nà òtítọ́." },
      { objective: "O5", q: "Kí ló dé tí a fi ń ṣètò fún ìgbà tí owó ìrànlọ́wọ́ bá tán?", options: ["Owó ìrànlọ́wọ́ kì í tán láéláé", "Kí iṣẹ́ náà lè máa bá a lọ nígbà tí owó ìrànlọ́wọ́ bá dúró", "Láti ná owó kíákíá", "Kò pọn dandan"], answer: 1, why: "Àwọn ètò tí ó gbára lé owó ìrànlọ́wọ́ nìkan sábà máa ń dúró." },
      { objective: "O6", q: "Èwo ni òṣùwọ̀n àṣeyọrí?", options: ["Iye fọ́tò tí drone yà", "Àwọ̀ drone", "Àwọn àgbẹ̀ tí ó gba ìmọ̀ràn láàárín ọjọ́ mẹ́ta lẹ́yìn tí a rí ìṣòro", "Bí ọ́fíìsì ṣe tóbi tó"], answer: 2, why: "Ó ń wọn èsì tí àwọn olùlò bìkítà nípa rẹ̀." },
      { objective: "O6", q: "Nígbà tí o bá ń ròyìn, o yẹ kí o:", options: ["Fi ohun tí kò ṣiṣẹ́ pamọ́", "Fi ìròyìn ojú-ewé 50 kan náà ránṣẹ́ sí gbogbo ènìyàn", "Ròyìn fún donor nìkan", "Sọ òótọ́ kí o sì lo ọ̀nà tí olùlò kọ̀ọ̀kan lè lò"], answer: 3, why: "Ìròyìn òtítọ́ tí ó bá olùlò mu ń kọ́ ìgbẹ́kẹ̀lé, ó sì ń mú ìlọsíwájú wá." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 3, 4, 6, 9, 10, 12, 13, 16, 18]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe nínú ètò náà kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      {
        name: "Ìṣòro, àfojúsùn àti àwọn olùlò",
        objective: "O4",
        notYet: "Ó bẹ̀rẹ̀ láti drone, tàbí àfojúsùn kò ní nọ́mbà tàbí ọjọ́.",
        meets: "Ìṣòro gidi, àfojúsùn tí ó ní nọ́mbà àti ọjọ́, àti olùlò kọ̀ọ̀kan pẹ̀lú ohun tí ó máa rí gbà.",
        exceeds: "Ó fi hàn pé àwọn olùlò gbà pé ìṣòro náà wà, fún àpẹẹrẹ láti ìpàdé àwọn àgbẹ̀."
      },
      {
        name: "Ètò dátà",
        objective: "O1",
        notYet: "Kò sí ètò ibi ìpamọ́, ìsọlórúkọ tàbí ẹ̀dà ìpamọ́.",
        meets: "Ètò fódà, Farm ID, ìwé àkọsílẹ̀ ìfò àti ẹ̀dà ìpamọ́ 3-2-1.",
        exceeds: "Ó sọ bí a ṣe máa pẹ́ tó tí a ó fi pa fọ́tò raw mọ́ àti ẹni tí ó ń ṣàyẹ̀wò àwọn ẹ̀dà ìpamọ́."
      },
      {
        name: "Lílo GIS àti sátẹ́láìtì",
        objective: "O2",
        notYet: "Kò sí ìpele GIS tàbí lílo sátẹ́láìtì.",
        meets: "A kọ àwọn ìpele GIS sílẹ̀, a so àkọsílẹ̀ pọ̀ pẹ̀lú Field ID, a sì lo sátẹ́láìtì láti yan ibi tí a máa fò.",
        exceeds: "Ó dárúkọ ìbéèrè kan tí dátà tí a so pọ̀ máa dáhùn, bí ìkórè pẹ̀lú ìmọ̀ràn àti láìsí ìmọ̀ràn."
      },
      {
        name: "Ìyọ̀ǹda àti ààbò dátà",
        objective: "O3",
        notYet: "Kò sí ìyọ̀ǹda tàbí ìgbésẹ̀ ààbò dátà.",
        meets: "Ìyọ̀ǹda ní èdè àgbẹ̀, dídín dátà kù, ibi ìpamọ́ tí kò léwu, àti pé kò sí pínpín láìsí àṣẹ, lábẹ́ òfin tó tọ́.",
        exceeds: "Ó ṣàyẹ̀wò bóyá àjọ náà gbọ́dọ̀ forúkọ sílẹ̀ lọ́dọ̀ àjọ ààbò dátà."
      },
      {
        name: "Ẹgbẹ́ iṣẹ́, àkókò àti ìṣúná",
        objective: "O5",
        notYet: "Ìwé àṣẹ, àkókò tàbí bí a ṣe máa sanwó kò sí níbẹ̀.",
        meets: "Ẹgbẹ́ iṣẹ́ tí ó ní ìwé àṣẹ, ohun èlò, àkókò ìfò ìgbà ọ̀gbìn, owó ẹ̀ẹ̀kan àti owó tí ń tún wáyé, àti bí a ṣe máa sanwó fún iṣẹ́ náà.",
        exceeds: "Ó fi ètò hàn fún ìgbà tí owó ìrànlọ́wọ́ èyíkéyìí bá tán."
      },
      {
        name: "Òṣùwọ̀n àti ríròyìn",
        objective: "O6",
        notYet: "Kò sí òṣùwọ̀n tàbí baseline.",
        meets: "Òṣùwọ̀n díẹ̀ tí ó so mọ́ àfojúsùn, baseline, àti ọ̀nà ìròyìn fún olùlò kọ̀ọ̀kan.",
        exceeds: "Ó ní èrò àwọn àgbẹ̀ nípa bóyá ìmọ̀ràn náà wúlò, tí ó sì yẹ láti sanwó fún."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì gba \"Ó dé ìpele\" tàbí \"Ó kọjá ìpele\" ní gbogbo ìlà rubric fún ètò wọn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gbé ètò wọn kalẹ̀ níwájú ìgbìmọ̀ ẹgbẹ́ àjùmọ̀ṣe, ọ́fíìsì ìjọba ìbílẹ̀ tàbí ìpínlẹ̀, donor tàbí olùdókòwò láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé)",
      "Àwọn ètò tí a ṣe nínú ẹ̀kọ́ náà tí ó bẹ̀rẹ̀ ìgbà ọ̀gbìn àdánwò (pilot) pẹ̀lú ìyọ̀ǹda àwọn àgbẹ̀ ní kíkọ",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí Ẹ̀kọ́ 6 nínú ọ̀wọ́ ẹ̀kọ́ drone"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Laptop pẹ̀lú QGIS ọ̀fẹ́ àti spreadsheet",
      "Àpẹẹrẹ máàpù drone, ààlà oko àti àkọsílẹ̀ oko, tàbí ti akẹ́kọ̀ọ́ fúnra rẹ̀",
      "Iye owó láti àdúgbò fún drone, ọkọ̀, dátà àti ìbánigbófò, tí ó bá wà",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti kọ ètò ojú-ewé méjì"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣiṣẹ́ lórí ẹgbẹ́ àjùmọ̀ṣe àpẹẹrẹ kan pọ̀ gẹ́gẹ́ bí ẹgbẹ́ kí àwọn akẹ́kọ̀ọ́ tó kọ ètò tiwọn.",
      "Lo Farm ID, kì í ṣe orúkọ tàbí nọ́mbà àwọn àgbẹ̀ gidi, nínú gbogbo àpẹẹrẹ kíláàsì.",
      "Ní kí àwọn akẹ́kọ̀ọ́ ṣàyẹ̀wò ojú-òpó wẹ́ẹ̀bù àjọ ààbò dátà ní orílẹ̀-èdè wọn fún òfin ìforúkọsílẹ̀.",
      "Gba àwọn akẹ́kọ̀ọ́ níyànjú láti dán àfojúsùn àti ìṣúná wọn wò pẹ̀lú ẹgbẹ́ àjùmọ̀ṣe tàbí alábàáṣiṣẹ́ gidi kí wọ́n tó parí.",
      "Fi rubric ṣe àmì fún ètò náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
