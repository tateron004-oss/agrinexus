"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-drones-flight-imaging.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA, àjọ ìjọba tó ń ṣàkóso ìrìnàjò òfurufú ní Nàìjíríà): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA, àjọ ìjọba tó ń ṣàkóso ìrìnàjò òfurufú ní Kẹ́ńyà): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const FAO_ITU_DRONES = { name: "FAO àti ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-flight-imaging-yo",
  lang: "yo",
  translationOf: "agri-drones-flight-imaging",
  category: "Agriculture (Africa)",
  name: "Drone fún Ìmójútó Oko 2: Fífò, Yíya Àwòrán àti Àwọn Sensor",
  skills: "Ṣíṣe àyẹ̀wò ṣáájú fífò, Fífò níbi tí ojú rẹ ti ń rí i, Ṣíṣètò fífò àyàwòrán aládàáṣe, Yíyan gíga àti overlap, Yíyan sensor tó tọ́, Yíya àwòrán tó mọ́lẹ̀ tí ìmọ́lẹ̀ rẹ̀ dọ́gba",
  outcome: "ṣètò kí o sì múra fífò àyàwòrán lórí oko kan: yan sensor, gíga, overlap àti àkókò ọjọ́, ṣe àwọn àyẹ̀wò ṣáájú fífò, kí o sì ya gbogbo àwòrán tó mọ́lẹ̀, tí ìmọ́lẹ̀ rẹ̀ dọ́gba, tí a lè so pọ̀ di àwòrán ilẹ̀ kan.",
  about: [
    "Èyí ni Ẹ̀kọ́ 2 nínú ọ̀wọ́ ẹ̀kọ́ drone fún ìmójútó oko, fún àwọn àgbẹ̀, òṣìṣẹ́ ìtẹ̀síwájú iṣẹ́ àgbẹ̀ (extension officers), òṣìṣẹ́ ilé-iṣẹ́ okòwò àgbẹ̀ àti àwọn ọ̀dọ́ tó ń ṣe iṣẹ́ drone ní Kẹ́ńyà, Nàìjíríà àti káàkiri Áfíríkà. Kọ́kọ́ ṣe Ẹ̀kọ́ 1, tàbí rí i dájú pé o ti mọ òfin drone orílẹ̀-èdè rẹ, o sì ti ní ìforúkọsílẹ̀, ìwé àṣẹ àti ìyọ̀ǹda tí wọ́n ń béèrè.",
    "Ní Orí 1, o máa kọ́ bí a ṣe ń múra drone sílẹ̀, bí a ṣe ń fò ó láìléwu níbi tí ojú rẹ ti ń rí i, àti bí a ṣe ń ṣètò fífò àyàwòrán aládàáṣe pẹ̀lú gíga àti overlap tó tọ́. Ní Orí 2, o máa kọ́ ohun tí sensor kọ̀ọ̀kan ń fi hàn (àwọ̀, multispectral, thermal), àti bí ìmọ́lẹ̀, afẹ́fẹ́ àti àkókò ṣe ń pinnu bóyá àwòrán ilẹ̀ máa wúlò tàbí kò ní wúlò.",
    "Àwọn àpẹẹrẹ wá láti inú iṣẹ́ oko gidi: oko àgbàdo 2 hẹ́kítà, oko tíì, oko ẹ̀gẹ́, ilé ìgbin ẹ̀fọ́ (greenhouse). Ẹ̀kọ́ kọ̀ọ̀kan parí pẹ̀lú iṣẹ́ àṣeṣe kúkúrú. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò fífò àyàwòrán kíkún fún oko àgbàdo 2 hẹ́kítà (gidi tàbí àpẹẹrẹ): ète fífò náà, sensor, gíga fífò àti bí àwòrán ṣe máa mọ́lẹ̀ tó gẹ́gẹ́ bí app fífò rẹ ṣe fi hàn, overlap iwájú àti ti ẹ̀gbẹ́, ìyára fífò, iye bátìrì, àkókò ọjọ́, òdiwọ̀n ojú ọjọ́, ibi tí o ti máa gbéra, àti àkọsílẹ̀ àyẹ̀wò ṣáájú fífò. Tí o bá ní drone àti ìyọ̀ǹda tí wọ́n ń béèrè, fò ó kí o sì ṣàyẹ̀wò gbogbo àwòrán kí o tó kúrò ní oko.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀, òṣìṣẹ́ ìtẹ̀síwájú iṣẹ́ àgbẹ̀, òṣìṣẹ́ ilé-iṣẹ́ okòwò àgbẹ̀ àti àwọn ọ̀dọ́ tó ń ṣe iṣẹ́ drone ní Kẹ́ńyà, Nàìjíríà àti káàkiri Áfíríkà, tí wọ́n ń ṣe Ẹ̀kọ́ 2 nínú ọ̀wọ́ ẹ̀kọ́ drone fún ìmójútó oko.",
    startingPoint: "Àwọn akẹ́kọ̀ọ́ mọ ohun tí drone lè ṣe lórí oko àti bí wọ́n ṣe lè rí òfin drone orílẹ̀-èdè wọn (Ẹ̀kọ́ 1). Díẹ̀ nínú wọn ló ti ṣe àyẹ̀wò ṣáájú fífò tí a kọ sílẹ̀, tí wọ́n ti fò fífò àyàwòrán tí a ṣètò, tí wọ́n ti yan gíga àti overlap fún bí àwòrán ṣe gbọ́dọ̀ mọ́lẹ̀ tó, tàbí tí wọ́n mọ sensor àti ìmọ́lẹ̀ tó ń fúnni ní àwòrán ilẹ̀ tó wúlò.",
    gap: "Fífò tí a kò múra sílẹ̀ dáadáa ń fa jàǹbá, fífò tí a kò ṣètò dáadáa tàbí tí a kò fò ní àkókò tó tọ́ sì ń fúnni ní àwòrán tí kò mọ́lẹ̀, tí kò pé, tí a kò lè so pọ̀ tàbí fi wéra, èyí sì ń fi bátìrì, àkókò àti owó àwọn oníbàárà ṣòfò. Ṣíṣètò àti mímúra fífò àyàwòrán dáadáa ń fúnni ní gbogbo àwòrán tó mọ́lẹ̀ ní ìgbà àkọ́kọ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a ṣàlàyé gbogbo ọ̀rọ̀ fífò àti yíya àwòrán",
      "Ẹ̀rọ: fóònù tàbí tablet tó ní app àyàwòrán ilẹ̀ wúlò; drone ṣe pàtàkì fún fífò àṣàyàn nìkan",
      "Òfin: fífò wà fún ẹni tó ní ìforúkọsílẹ̀, ìwé àṣẹ àti ìyọ̀ǹda tí orílẹ̀-èdè ń béèrè nìkan",
      "Ipò oko: afẹ́fẹ́, ooru, ìkùukùu tó ń kọjá, àti àìsí nẹ́tíwọ̀ọ̀kì fóònù ní ọ̀pọ̀ oko",
      "Àkókò: ẹ̀kọ́ kúkúrú, pẹ̀lú àkókò láti kọ ètò fífò"
    ],
    prerequisites: "\"Drone fún Àbójútó Oko 1: Ìfihàn, Òfin àti Ààbò\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Kí o tó fò nígbà kọ̀ọ̀kan", action: "ṣe àyẹ̀wò ṣáájú fífò kíkún lórí drone, bátìrì, controller, ètò (settings) àti àwọn ìwé", standard: "láìfo ohunkóhun nínú àkọsílẹ̀ àyẹ̀wò" },
    { id: "O2", condition: "Nígbà fífò àṣeṣe tàbí fífò tí a fọwọ́ sí", action: "gbéra, fò ní ọ̀nà tó rọrùn kí o sì balẹ̀ nígbà tí ojú rẹ ń rí drone náà", standard: "láàárín òdiwọ̀n gíga tí òfin gbà, kí o sì balẹ̀ pẹ̀lú bátìrì tó ṣẹ́kù" },
    { id: "O3", condition: "Fún oko tí a fẹ́ ya àwòrán ilẹ̀ rẹ̀", action: "ṣètò fífò àyàwòrán ní ìlà (grid) pẹ̀lú gíga, bí àwòrán ṣe mọ́lẹ̀ tó, overlap, ìyára àti bátìrì", standard: "pẹ̀lú overlap tó tó nǹkan bí 70 sí 80 nínú ọgọ́rùn-ún níwájú àti 60 sí 70 nínú ọgọ́rùn-ún ní ẹ̀gbẹ́" },
    { id: "O4", condition: "Tí a bá fún ọ ní àwòrán àwọ̀ drone tó mọ́lẹ̀ gan-an", action: "tọ́ka sí àlàfo, èpò, omi, irè tó wó lulẹ̀ àti ìbàjẹ́", standard: "kí o sì sàmì sí ibi kọ̀ọ̀kan láti lọ yẹ̀ wò ní ẹsẹ̀" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìbéèrè kan nípa oko", action: "yan láàárín sensor RGB, multispectral àti thermal", standard: "pẹ̀lú ìdí tó bá ìbéèrè náà àti iye owó mu" },
    { id: "O6", condition: "Ní ọjọ́ fífò àyàwòrán", action: "yan àkókò, ìmọ́lẹ̀ àti òdiwọ̀n afẹ́fẹ́, kí o sì ṣàyẹ̀wò gbogbo àwòrán kí o tó kúrò ní oko", standard: "kí àwọn àwòrán lè mọ́lẹ̀, kí ìmọ́lẹ̀ wọn dọ́gba, kí wọ́n sì pé" }
  ],
  chapters: [
    {
      name: "Orí 1: Fífò drone",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mímúra drone sílẹ̀: àyẹ̀wò ṣáájú fífò",
          minutes: 5,
          goal: "Ṣe àyẹ̀wò ṣáájú fífò kíkún lórí drone kí o tó fò nígbà kọ̀ọ̀kan.",
          text: [
            "Ọ̀pọ̀ jàǹbá drone ló ń bẹ̀rẹ̀ lórí ilẹ̀: àbẹ̀bẹ̀ (propeller) tó ti sán, bátìrì tí a gba agbára rẹ̀ ní ìdajì, àwòrán ilẹ̀ àtijọ́ nínú app, tàbí kọ́ńpáàsì tí a kò tún ṣe (calibrate). Àkọsílẹ̀ àyẹ̀wò tí a kọ sílẹ̀, tí a ń lò nígbà gbogbo, ń dènà ọ̀pọ̀ nínú wọn.",
            "Ṣàyẹ̀wò drone fúnra rẹ̀ (ara rẹ̀, àwọn apá rẹ̀, àwọn àbẹ̀bẹ̀ tó le dáadáa tí kò bàjẹ́, kámẹ́rà tó mọ́ tó sì dúró gbọn-in), àwọn bátìrì (agbára kún, kò wú, ojú ìsopọ̀ mọ́), controller àti fóònù tàbí tablet (agbára kún, o ti ṣe àtúnṣe app kí o tó kúrò nílé, o ti gba àwòrán ilẹ̀ offline tí kò bá sí nẹ́tíwọ̀ọ̀kì ní oko), àti ètò (gíga return-to-home ga ju igi tàbí òpó tó ga jù lọ, a ti kọ home point sílẹ̀).",
            "Ṣe àyẹ̀wò ìwé náà: ìforúkọsílẹ̀, ìwé àṣẹ awakọ̀ drone, àti ìyọ̀ǹda fífò èyíkéyìí tí àjọ ìjọba rẹ ń béèrè fún ibi yìí, tí o gbé dání tàbí tí ó wà lórí fóònù rẹ."
          ],
          steps: ["Àyẹ̀wò ìwé: ìforúkọsílẹ̀, ìwé àṣẹ, ìyọ̀ǹda fún ibi yìí.", "Drone: ara rẹ̀, àwọn apá, àwọn àbẹ̀bẹ̀, kámẹ́rà.", "Bátìrì: agbára kún, kò wú, ojú ìsopọ̀ mọ́.", "Controller àti fóònù tàbí tablet: agbára kún, app ti di tuntun, àwòrán ilẹ̀ offline ti wà.", "Ètò: gíga return-to-home, home point, ṣíṣe kọ́ńpáàsì (calibrate) tí app bá béèrè.", "Wo àyíká: ènìyàn, ẹranko, afẹ́fẹ́, lẹ́yìn náà bẹ̀rẹ̀."],
          words: [["Àyẹ̀wò ṣáájú fífò (pre-flight check)", "àkọsílẹ̀ àwọn nǹkan tí a ń ṣàyẹ̀wò kí a tó fò nígbà kọ̀ọ̀kan."], ["Return-to-home (RTH)", "ètò tó ń jẹ́ kí drone fò padà sí ibi tí ó ti gbéra fúnra rẹ̀, fún àpẹẹrẹ nígbà tí bátìrì bá ti lọ sílẹ̀ tàbí tí àmì ìsopọ̀ bá sọnù."], ["Home point", "ibi tí drone máa padà sí, èyí tí ó sábà máa ń jẹ́ ibi tí ó ti gbéra."]],
          slides: [
            { title: "Jàǹbá ń bẹ̀rẹ̀ lórí ilẹ̀", bullets: ["Àbẹ̀bẹ̀ tó ti sán, bátìrì tí kò lágbára", "Àwòrán ilẹ̀ àtijọ́ nínú app, kọ́ńpáàsì tí a kò ṣe", "Àkọsílẹ̀ àyẹ̀wò nígbà gbogbo ń dènà ọ̀pọ̀ jù lọ"] },
            { title: "Ṣàyẹ̀wò àwọn ohun èlò", bullets: ["Ara, àwọn apá, àbẹ̀bẹ̀, kámẹ́rà", "Bátìrì tí agbára kún, tí kò wú", "Controller, fóònù, app tuntun, àwòrán ilẹ̀ offline"] },
            { title: "Ṣàyẹ̀wò àwọn ètò (settings)", bullets: ["Gíga return-to-home ga ju ohun tó ga jù lọ", "A ti kọ home point sílẹ̀", "Ṣe kọ́ńpáàsì (calibrate) tí app bá béèrè"] },
            { title: "Ṣàyẹ̀wò àwọn ìwé", bullets: ["Ìforúkọsílẹ̀ àti ìwé àṣẹ awakọ̀", "Ìyọ̀ǹda fún ibi yìí", "Gbé wọn dání"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Kọ àkọsílẹ̀ àyẹ̀wò ṣáájú fífò tìrẹ, tí ó ní ó kéré tán nǹkan 12 lábẹ́ àkòrí mẹ́rin: ìwé, drone, bátìrì àti controller, ètò. Fi í pamọ́ sórí fóònù rẹ.",
          youCanNow: "múra drone sílẹ̀ pẹ̀lú àyẹ̀wò ṣáájú fífò kíkún tí ó kan ìwé, drone, bátìrì, controller àti ètò.",
          quickCheck: [
            { objective: "O1", q: "Kí ni home point?", options: ["Ilé awakọ̀ drone", "Ibi tí drone máa padà sí fúnra rẹ̀ nígbà return-to-home", "Ibi tó ga jù lọ lórí oko", "Ṣọ́ọ̀bù drone"], answer: 1, why: "A ń kọ home point sílẹ̀ kí a tó gbéra, kí return-to-home lè mú drone padà síbẹ̀." },
            { objective: "O1", q: "O ń lọ sí oko tí kò ní nẹ́tíwọ̀ọ̀kì fóònù. Kí ni o máa ṣe kí o tó kúrò nílé?", options: ["Kò sí nǹkan; app máa ṣiṣẹ́ bẹ́ẹ̀", "Ṣètò láti ṣe àtúnṣe app ní oko", "Fi àwọn bátìrì sílẹ̀ láìgba agbára", "Gba àwòrán ilẹ̀ offline kí o sì ṣe àtúnṣe app"], answer: 3, why: "Ó yẹ kí o ṣe àtúnṣe app kí o sì gba àwòrán ilẹ̀ offline kí o tó kúrò, nítorí ó lè má sí nẹ́tíwọ̀ọ̀kì ní oko." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fífò láìléwu níbi tí ojú rẹ ti ń rí drone",
          minutes: 5,
          goal: "Gbéra, fò ní ọ̀nà tó rọrùn kí o sì balẹ̀ nígbà tí ojú rẹ ń rí drone náà.",
          text: [
            "Visual line of sight (VLOS) túmọ̀ sí pé ìwọ, tàbí olùṣọ́ rẹ, lè fi ojú ara yín rí drone náà, láìlo awò-ìwòna-jínjìn (binoculars), ní gbogbo ìgbà. Ọ̀pọ̀ fífò oko tí àwọn àgbẹ̀ kékeré àti àwọn awakọ̀ tuntun ń ṣe jẹ́ VLOS. Fífò kọjá ibi tí ojú ti ń rí nílò ìyọ̀ǹda pàtàkì. Fún àpẹẹrẹ, Part 21 ti Nàìjíríà ń béèrè VLOS fún àwọn drone kékeré, ó sì fi gíga tó pọ̀ jù lọ sí mítà 120 (ẹsẹ̀ bàtà 400) lókè ilẹ̀ fún ọ̀pọ̀ iṣẹ́; ṣàyẹ̀wò òdiwọ̀n orílẹ̀-èdè rẹ.",
            "Gbéra láti ibi tó mọ́ tí o yàn, gòkè dé gíga tí kò léwu lókè àwọn igi, kí o sì dúró lójú kan (hover) fún ìṣẹ́jú-àáyá díẹ̀ láti rí i pé drone náà dúró dáadáa. Fò díẹ̀díẹ̀. Jẹ́ kí drone wà níwájú rẹ, kì í ṣe lórí rẹ tàbí lẹ́yìn rẹ, kí o má baà gbàgbé ọ̀nà tí ó dojú kọ.",
            "Máa wo bátìrì àti afẹ́fẹ́. Balẹ̀ nígbà tí bátìrì ṣì tó fún ìbalẹ̀ láìléwu, má ṣe dúró dé ìdá kan tó kẹ́yìn láéláé. Tí afẹ́fẹ́ bá ń gbé drone lọ gidigidi, mú un padà kí o sì balẹ̀."
          ],
          steps: ["Dúró ní ibi ìgbéra rẹ pẹ̀lú olùṣọ́ rẹ.", "Gbéra kí o sì gòkè ju àwọn igi lọ; dúró lójú kan kí o sì rí i pé ó dúró dáadáa.", "Fò díẹ̀díẹ̀ ní ìrísí onígun mẹ́rin níwájú rẹ, kí ojú rẹ máa rí i.", "Máa wo bátìrì àti afẹ́fẹ́ lórí ojú-iboju.", "Padà, sọ̀kalẹ̀ díẹ̀díẹ̀ kí o sì balẹ̀ pẹ̀lú bátìrì tó ṣẹ́kù."],
          words: [["VLOS", "visual line of sight: o lè fi ojú ara rẹ rí drone ní gbogbo ìgbà tí ó ń fò."], ["BVLOS", "beyond visual line of sight: fífò kọjá ibi tí ojú rẹ ti ń rí; ó nílò ìyọ̀ǹda pàtàkì."], ["AGL", "above ground level: gíga tí a wọ̀n láti ilẹ̀ tó wà nísàlẹ̀ drone."]],
          slides: [
            { title: "Níbi tí ojú ti ń rí i (VLOS)", bullets: ["Ìwọ tàbí olùṣọ́ rẹ máa ń rí drone nígbà gbogbo", "Kò sí awò-ìwòna-jínjìn", "Fífò kọjá ibi tí ojú ti ń rí nílò ìyọ̀ǹda pàtàkì"] },
            { title: "Mọ òdiwọ̀n gíga", bullets: ["Part 21 ti Nàìjíríà: 120 m (400 ft) AGL fún ọ̀pọ̀ fífò", "Ṣàyẹ̀wò òdiwọ̀n orílẹ̀-èdè rẹ"] },
            { title: "Fò ó dáadáa", bullets: ["Gòkè ju igi lọ, dúró lójú kan, rí i pé ó dúró", "Fò díẹ̀díẹ̀, jẹ́ kí ó wà níwájú rẹ", "Máa wo bátìrì àti afẹ́fẹ́"] },
            { title: "Balẹ̀ pẹ̀lú bátìrì tó ṣẹ́kù", bullets: ["Má ṣe dúró dé ìdá kan tó kẹ́yìn láéláé", "Afẹ́fẹ́ ń gbé e lọ gidigidi: mú un padà kí o sì balẹ̀"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Tí o bá ní drone àti ìyọ̀ǹda, fò ó díẹ̀díẹ̀ ní ìrísí onígun mẹ́rin níwájú rẹ kí o sì balẹ̀ pẹ̀lú bátìrì tó ṣẹ́kù. Tí o kò bá ní, lo app ìfarawé fífò drone (simulator) ọ̀fẹ́ tàbí wo fídíò ìdánilẹ́kọ̀ọ́ kan kí o sì kọ àwọn ìgbésẹ̀ tí o rí sílẹ̀.",
          youCanNow: "gbéra, fò ní ọ̀nà tó rọrùn níbi tí ojú rẹ ti ń rí drone, kí o sì balẹ̀ láìléwu pẹ̀lú bátìrì tó ṣẹ́kù.",
          quickCheck: [
            { objective: "O2", q: "Kí ni jíjẹ́ kí drone wà \"níwájú rẹ\" ń ràn ọ́ lọ́wọ́ láti ṣe?", options: ["Gba agbára bátìrì", "Mú kí fọ́tò mọ́lẹ̀ sí i", "Mọ ọ̀nà tí drone dojú kọ", "Fò kọjá ibi tí ojú ti ń rí"], answer: 2, why: "Jíjẹ́ kí drone wà níwájú rẹ, kì í ṣe lórí rẹ tàbí lẹ́yìn rẹ, ń jẹ́ kí o mọ ọ̀nà tí ó dojú kọ." },
            { objective: "O2", q: "Ní kété lẹ́yìn ìgbéra, afẹ́fẹ́ ń gbé drone lọ gidigidi. Kí ni o máa ṣe?", options: ["Mú un padà kí o sì balẹ̀", "Gòkè sí i láti sá fún afẹ́fẹ́", "Fò kíákíá kí o lè parí", "Wo ibòmíì kí o sì jẹ́ kí ó máa fò"], answer: 0, why: "Tí afẹ́fẹ́ bá ń gbé drone lọ gidigidi, mú un padà kí o sì balẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣètò fífò àyàwòrán aládàáṣe",
          minutes: 6,
          goal: "Ṣètò fífò àyàwòrán ní ìlà (grid) pẹ̀lú gíga, overlap àti ìyára tó tọ́.",
          text: [
            "Láti ya àwòrán ilẹ̀ oko kan, drone máa ń fò lọ fò bọ̀ ní ìlà títọ́ (grid, tí a tún ń pè ní lawnmower pattern, bí ẹ̀rọ ìgé koríko ṣe ń lọ), ó sì ń ya fọ́tò tí ó ń bo ara wọn díẹ̀. Àwọn app àyàwòrán ilẹ̀ ń jẹ́ kí o fa ààlà oko náà, lẹ́yìn náà wọ́n ń ṣètò àwọn ìlà fún ọ.",
            "Gíga ló ń pinnu bí àwòrán ṣe máa mọ́lẹ̀ tó. Bí o bá ṣe ń fò ga sí i, bẹ́ẹ̀ ni pixel kọ̀ọ̀kan ń bo ilẹ̀ tó pọ̀ sí i, àwòrán kò sì ní mọ́lẹ̀ tó, ṣùgbọ́n o máa yára parí. App náà ń fi èyí hàn gẹ́gẹ́ bí ground sampling distance (GSD), fún àpẹẹrẹ 2 cm fún pixel kan. Láti ka àwọn igi àgbàdo, o nílò àwòrán tó mọ́lẹ̀ gan-an; láti rí ibi tí omi ti kún jù, àwòrán tí kò mọ́lẹ̀ tó bẹ́ẹ̀ tó. Má ṣe ṣètò fífò ju òdiwọ̀n gíga tí òfin gbà láéláé.",
            "Overlap ni iye tí fọ́tò kọ̀ọ̀kan pín pẹ̀lú èyí tó tẹ̀lé e. Software nílò overlap púpọ̀ láti so fọ́tò pọ̀ di àwòrán ilẹ̀ kan; ọ̀pọ̀ ìwé ìtọ́sọ́nà àyàwòrán ilẹ̀ dábàá nǹkan bí 70 sí 80 nínú ọgọ́rùn-ún níwájú àti 60 sí 70 nínú ọgọ́rùn-ún ní ẹ̀gbẹ́, kí ó sì pọ̀ sí i lórí irè tó ga tí ó rí bákan náà bí àgbàdo tàbí tíì. Fò díẹ̀díẹ̀ tó kí fọ́tò lè mọ́lẹ̀, kí o sì ṣètò bátìrì tó tó láti parí."
          ],
          steps: ["Fa ààlà oko náà nínú app àyàwòrán ilẹ̀.", "Yan gíga: ṣàyẹ̀wò GSD tí ó fún ọ, kí o sì dúró nísàlẹ̀ òdiwọ̀n tí òfin gbà.", "Ṣètò overlap iwájú àti ti ẹ̀gbẹ́ (fún àpẹẹrẹ 75 àti 65 nínú ọgọ́rùn-ún).", "Ṣàyẹ̀wò àkókò fífò àti iye bátìrì.", "Fi ètò náà pamọ́ kí o sì tún un wò kí o tó lọ sí oko."],
          words: [["Fífò ní ìlà (grid flight)", "fífò lọ fò bọ̀ ní ìlà títọ́ tí ó bo gbogbo oko."], ["Overlap", "iye tí fọ́tò kọ̀ọ̀kan pín pẹ̀lú èyí tó tẹ̀lé e, nínú ọgọ́rùn-ún."], ["GSD", "ground sampling distance: iye ilẹ̀ tí pixel kan ń bo, bí 2 cm."], ["Orthomosaic", "àwòrán ńlá kan tó péye bí àwòrán ilẹ̀, tí a so pọ̀ láti inú ọ̀pọ̀ fọ́tò tó bo ara wọn."]],
          slides: [
            { title: "Fífò àyàwòrán ilẹ̀", bullets: ["Ìlà títọ́ tí a ń fò lọ fò bọ̀", "Àwọn fọ́tò bo ara wọn (overlap)", "Software so wọ́n pọ̀ di àwòrán ilẹ̀ kan"] },
            { title: "Gíga ló ń pinnu bí àwòrán ṣe mọ́lẹ̀ tó", bullets: ["Ga sí i = kò mọ́lẹ̀ tó, ó yára", "Rẹlẹ̀ sí i = ó mọ́lẹ̀ sí i, bátìrì púpọ̀ sí i", "Dúró nísàlẹ̀ òdiwọ̀n gíga tí òfin gbà"] },
            { title: "Overlap ló ń jẹ́ kí síso pọ̀ ṣiṣẹ́", bullets: ["Nǹkan bí 70-80% níwájú, 60-70% ní ẹ̀gbẹ́ ló wọ́pọ̀", "Púpọ̀ sí i lórí irè tó ga tí ó rí bákan náà"] },
            { title: "Kí o tó lọ", bullets: ["Ṣàyẹ̀wò GSD, àkókò fífò, bátìrì", "Fi ètò pamọ́ kí o sì tún un wò"] }
          ],
          tryIt: "Ṣí app àyàwòrán ilẹ̀ tàbí app ìṣètò fífò ọ̀fẹ́ kan (tàbí ibi ìṣètò fífò nínú app drone rẹ) kí o sì fa oko 2 hẹ́kítà. Gbìyànjú gíga mẹ́ta kí o sì kọ GSD àti àkókò fífò fún ọ̀kọ̀ọ̀kan sílẹ̀.",
          youCanNow: "ṣètò fífò àyàwòrán ní ìlà kí o sì yan gíga, overlap àti ìyára tó bá iṣẹ́ náà mu.",
          quickCheck: [
            { objective: "O3", q: "Kí ni grid tàbí lawnmower pattern?", options: ["Ìlà títọ́ tí a ń fò lọ fò bọ̀ lórí oko", "Fífò yípo igi kan", "Fọ́tò kan ṣoṣo láti òkè gíga gan-an", "Fífò lẹ́gbẹ̀ẹ́ ọ̀nà"], answer: 0, why: "Fífò àyàwòrán ilẹ̀ máa ń lọ ní ìlà títọ́ lọ àti bọ̀ kí fọ́tò lè bo gbogbo oko pẹ̀lú overlap." },
            { objective: "O3", q: "O fẹ́ ka àwọn igi àgbàdo ṣùgbọ́n ètò rẹ kò fún ọ ní àwòrán tó mọ́lẹ̀ tó. Kí ni o máa yí padà?", options: ["Fò kíákíá sí i", "Dín overlap kù", "Fò rẹlẹ̀ sí i fún GSD tó kéré sí i, láàárín òdiwọ̀n òfin", "Fò ní ìrọ̀lẹ́"], answer: 2, why: "Fífò rẹlẹ̀ sí i ń jẹ́ kí pixel kọ̀ọ̀kan mọ́lẹ̀ sí i, ṣùgbọ́n má ṣe kọjá òdiwọ̀n òfin rẹ láéláé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Fífò drone",
        questions: [
          { objective: "O1", q: "Kí ló dé tí a fi ń lo àkọsílẹ̀ àyẹ̀wò ṣáájú fífò tí a kọ sílẹ̀ nígbà gbogbo?", options: ["Ó ń jẹ́ kí a dà bí akọ́ṣẹ́mọṣẹ́", "Ọ̀pọ̀ jàǹbá ló ń bẹ̀rẹ̀ pẹ̀lú nǹkan tí a gbàgbé lórí ilẹ̀", "Drone nílò rẹ̀ kí ó tó bẹ̀rẹ̀", "Ó rọ́pò ìwé àṣẹ"], answer: 1, why: "Àkọsílẹ̀ àyẹ̀wò ń mú àbẹ̀bẹ̀ tó sán, bátìrì tí kò lágbára àti ètò tí kò tọ́." },
          { objective: "O1", q: "Gíga wo ni ó yẹ kí return-to-home jẹ́?", options: ["Kí ó rẹlẹ̀ bí ó ti lè ṣe tó", "Nísàlẹ̀ igi tó ga jù lọ", "Ju igi tàbí òpó tó ga jù lọ ní ibẹ̀ lọ", "Kò jámọ́ nǹkan"], answer: 2, why: "Drone gbọ́dọ̀ kọjá gbogbo ohun ìdènà nígbà tí ó bá ń fò padà fúnra rẹ̀." },
          { objective: "O2", q: "Kí ni VLOS túmọ̀ sí?", options: ["O lè fi ojú ara rẹ rí drone ní gbogbo ìgbà tí ó ń fò", "Drone ń rí ọ", "Drone ń fò ní alẹ́", "Drone ń fò kọjá ojú ọ̀run"], answer: 0, why: "Visual line of sight túmọ̀ sí rírí drone pẹ̀lú ojú lásán ní gbogbo ìgbà." },
          { objective: "O3", q: "O fò ga sí i nígbà fífò àyàwòrán ilẹ̀. Kí ló ṣẹlẹ̀?", options: ["Pixel kọ̀ọ̀kan mọ́lẹ̀ sí i", "Àwọn fọ́tò kò bo ara wọn mọ́", "Kò sí ohun tó yí padà", "Pixel kọ̀ọ̀kan ń bo ilẹ̀ tó pọ̀ sí i, o sì yára parí"], answer: 3, why: "Fífò ga sí i ń fúnni ní GSD tí kò mọ́lẹ̀ tó, ṣùgbọ́n ó ń bo oko kíákíá." },
          { objective: "O3", q: "Kí ló dé tí fọ́tò àyàwòrán ilẹ̀ fi nílò overlap púpọ̀?", options: ["Láti lo bátìrì púpọ̀", "Kí software lè so wọ́n pọ̀ di àwòrán ilẹ̀ kan", "Láti mú kí fọ́tò mọ́lẹ̀ sí i", "Nítorí òfin sọ pé 100 nínú ọgọ́rùn-ún"], answer: 1, why: "Software ìsopọ̀ ń wá àwọn nǹkan tí ó wà nínú àwọn fọ́tò tó bo ara wọn láti so wọ́n pọ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Yíya àwòrán láti òfurufú àti àwọn sensor",
      lessons: [
        {
          objectives: ["O4"],
          title: "Àwòrán àwọ̀ (RGB): ohun tí o lè rí",
          minutes: 5,
          goal: "Ka àwòrán àwọ̀ drone tó mọ́lẹ̀ gan-an láti rí àlàfo, èpò, omi àti ìbàjẹ́.",
          text: [
            "Kámẹ́rà àwọ̀ lásán (RGB) ni sensor tó wúlò jù lọ fún ọ̀pọ̀ oko, ó sì máa ń wà pẹ̀lú fẹ́rẹ̀ẹ́ gbogbo drone. Ní sẹ̀ńtímítà díẹ̀ fún pixel kan, o lè rí igi àgbàdo, ẹ̀wà tàbí ẹ̀gẹ́ kọ̀ọ̀kan.",
            "Nínú àwòrán àwọ̀, wá: àlàfo nínú ìlà (irúgbìn tí kò hù dáadáa tàbí irè tí kòkòrò jẹ), èpò tó pọ̀ láàárín ìlà, omi tó dúró àti ilẹ̀ tí kò ní nǹkan lórí, àgbàdo tàbí ọkà bàbà tó ti wó lulẹ̀ (lodging), ìbàjẹ́ láti yìnyín tàbí afẹ́fẹ́, màlúù tàbí ewúrẹ́ ní ibi tí kò yẹ, àti ọ̀nà omi tó dí tàbí ọgbà tó ti fọ́.",
            "Àwòrán àwọ̀ tún lè fi àmì àìtó oúnjẹ ilẹ̀ (nutrients) tàbí àrùn hàn (ewé tó ń pọ́n, àwọ̀ ewé tí kò dọ́gba), ṣùgbọ́n ó ń fi hàn pẹ́ ju ojú ẹni tó wà lórí ilẹ̀ tàbí kámẹ́rà multispectral lọ. Máa sàmì sí ibẹ̀ nígbà gbogbo kí o sì lọ yẹ̀ ẹ́ wò ní ẹsẹ̀."
          ],
          steps: ["Ṣí àwòrán tàbí àwòrán ilẹ̀ náà kí o sì sún un sẹ́yìn láti rí gbogbo oko.", "Wá ohunkóhun tí kò dọ́gba: àlàfo, àwọ̀ tó yí padà, omi, ilẹ̀ tí kò ní nǹkan lórí.", "Sún mọ́ ọ̀kọ̀ọ̀kan (zoom in).", "Sàmì sí ibi kọ̀ọ̀kan pẹ̀lú nọ́mbà àti àkọsílẹ̀ kúkúrú.", "Rìn lọ sí àwọn ibẹ̀ láti yẹ̀ wọ́n wò."],
          words: [["Àwòrán tó mọ́lẹ̀ gan-an (high-resolution)", "àwòrán tí ó ní àlàyé púpọ̀, níbi tí pixel kọ̀ọ̀kan ti ń bo ilẹ̀ kékeré."], ["Lodging (wíwó lulẹ̀)", "nígbà tí igi àgbàdo, ọkà bàbà tàbí àlìkámà bá tẹ̀ tàbí wó lulẹ̀."]],
          slides: [
            { title: "RGB: sensor tó ń ṣe iṣẹ́ jù", bullets: ["Ó ń wà pẹ̀lú fẹ́rẹ̀ẹ́ gbogbo drone", "Ó ń fi igi kọ̀ọ̀kan hàn ní cm díẹ̀ fún pixel kan"] },
            { title: "Ohun tí o máa wá", bullets: ["Àlàfo nínú ìlà, èpò tó pọ̀", "Omi tó dúró, ilẹ̀ tí kò ní nǹkan lórí", "Àgbàdo tó wó lulẹ̀, ìbàjẹ́ yìnyín tàbí afẹ́fẹ́", "Ẹranko, ọgbà tó fọ́, ọ̀nà omi tó dí"] },
            { title: "Ibi tí agbára rẹ̀ mọ", bullets: ["Ó ń fi àrùn àti àìtó oúnjẹ ilẹ̀ hàn pẹ́", "Máa lọ yẹ àwọn ibẹ̀ wò ní ẹsẹ̀ nígbà gbogbo"] }
          ],
          tryIt: "Wá fọ́tò drone tàbí àwòrán sátẹ́láìtì oko kan lórí ayélujára (tàbí lo tìrẹ). Kọ nǹkan márùn-ún tí o rí sílẹ̀, sàmì sí ibi tí ọ̀kọ̀ọ̀kan wà, kí o sì sọ ohun tí o máa lọ yẹ̀ wò lórí ilẹ̀.",
          youCanNow: "ka àwòrán àwọ̀ drone kí o sì sàmì sí àlàfo, èpò, omi àti ìbàjẹ́ láti lọ yẹ̀ wò lórí ilẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Nínú àwòrán àwọ̀, kí ni àlàfo nínú ìlà lè fi hàn?", options: ["Ajílẹ̀ tó pọ̀ jù", "Bátìrì tó lágbára", "Ìkórè tó dára", "Irúgbìn tí kò hù dáadáa tàbí irè tí kòkòrò jẹ"], answer: 3, why: "Àlàfo nínú ìlà sábà máa ń túmọ̀ sí pé irúgbìn kò hù tàbí pé nǹkan jẹ irè náà." },
            { objective: "O4", q: "Àwòrán fi ibi kan tí àwọ̀ rẹ̀ kò dọ́gba, tí ó ń pọ́n, hàn nínú oko ẹ̀wà. Kí ni o máa ṣe?", options: ["Fín oògùn sí gbogbo oko", "Sàmì sí ibẹ̀ kí o sì lọ yẹ̀ ẹ́ wò ní ẹsẹ̀", "Má ṣe kà á sí", "Pa àwòrán náà rẹ́"], answer: 1, why: "Àwòrán àwọ̀ lè fi àmì ìṣòro hàn, ṣùgbọ́n a gbọ́dọ̀ lọ yẹ ibẹ̀ wò lórí ilẹ̀." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Àwọn sensor multispectral àti thermal",
          minutes: 6,
          goal: "Yan láàárín sensor RGB, multispectral àti thermal fún ìbéèrè kan nípa oko.",
          text: [
            "Ewé tútù tó ní ìlera máa ń dá ìmọ́lẹ̀ near-infrared púpọ̀ padà, ìmọ́lẹ̀ tí ojú kò lè rí. Ewé tí ìdààmú bá tàbí tí ó ń ṣàìsàn máa ń dá díẹ̀ padà. Kámẹ́rà multispectral ń wọn oríṣiríṣi ìpín ìmọ́lẹ̀ (bands), títí kan near-infrared àti red edge, kí software lè ṣírò àwọn vegetation index bí NDVI tí ó ń fi agbára àwọn irè hàn. FAO ń lo NDVI láti inú sátẹ́láìtì láti máa wo ìlera ewéko káàkiri Áfíríkà; drone ń ṣe ohun kan náà lórí oko kan.",
            "Kámẹ́rà thermal ń wọn ìgbóná ojú nǹkan. Irè tí kò rí omi tó máa ń pa ihò kékeré ewé rẹ̀ dé, ó sì máa ń gbóná sí i, nítorí náà àwòrán thermal lè fi àìtó omi àti páìpù ìrigeson tó dí hàn. Thermal tún dára fún wíwá ẹranko ní alẹ́ tàbí ní àfẹ̀mọ́jú.",
            "Àwọn sensor wọ̀nyí wọ́n jù, wọ́n sì nílò ìṣọ́ra (calibration, àkókò ọjọ́ tó tọ́). Yàn wọ́n nígbà tí ìbéèrè náà bá nílò wọn: wíwá ìdààmú ní kùtùkùtù nínú oko tíì ńlá tàbí ẹ̀fọ́ tí a ń bomi rin, bẹ́ẹ̀ni; kíka àlàfo nínú oko ẹ̀wà 1 éékà, rárá, àwọ̀ ti tó."
          ],
          words: [["Near-infrared (NIR)", "ìmọ́lẹ̀ tó wà kọjá pupa díẹ̀ tí ènìyàn kò lè rí; ewé tó ní ìlera máa ń dá púpọ̀ rẹ̀ padà."], ["Vegetation index", "nọ́mbà tí a ṣírò láti inú ìpín ìmọ́lẹ̀ tí ó ń fi bí ewéko ṣe tutù tó tí ó sì lágbára tó hàn."], ["NDVI", "Normalized Difference Vegetation Index: vegetation index tó wọ́pọ̀ láti inú ìmọ́lẹ̀ pupa àti near-infrared, láti -1 sí +1; èyí tó ga sábà máa ń túmọ̀ sí ewéko tútù tó pọ̀ tó sì ní ìlera."]],
          slides: [
            { title: "Multispectral", bullets: ["Ó ń wọn pupa, red edge, near-infrared àti míì", "Software ń ṣe àwòrán ilẹ̀ vegetation index bí NDVI", "Ó ń fi ìdààmú irè hàn ṣáájú àwọ̀"] },
            { title: "Thermal", bullets: ["Ó ń wọn ìgbóná ojú nǹkan", "Irè tí kò rí omi tó máa ń gbóná sí i", "Ó ń rí páìpù ìrigeson tó dí àti ẹranko ní àfẹ̀mọ́jú"] },
            { title: "Yàn gẹ́gẹ́ bí ìbéèrè", bullets: ["Àlàfo àti èpò: RGB", "Ìdààmú ní kùtùkùtù nínú irè olówó ńlá: multispectral", "Àìtó omi tàbí ẹranko: thermal"] }
          ],
          sources: [{ name: "FAO GIEWS Earth Observation (NDVI àti àwọn àmì ìlera ewéko)", url: "https://www.fao.org/giews/earthobservation/index.jsp" }, FAO_ITU_DRONES],
          tryIt: "Fún ìbéèrè kọ̀ọ̀kan, yan RGB, multispectral tàbí thermal kí o sì kọ ìdí: (a) Ṣé páìpù omi drip mi ti dí? (b) Níbo ni ẹ̀wà kò ti hù? (c) Ṣé apá kan nínú oko tíì wà nínú ìdààmú kí àwọ̀ ewé tó yí padà?",
          youCanNow: "sọ ohun tí sensor multispectral àti thermal ń fi hàn, kí o sì yan sensor tó tọ́ fún ìbéèrè kan nípa oko.",
          quickCheck: [
            { objective: "O5", q: "Kí ni kámẹ́rà thermal ń wọn?", options: ["Gíga irè", "Ìgbóná ojú nǹkan", "Oúnjẹ inú ilẹ̀", "Òjò"], answer: 1, why: "Kámẹ́rà thermal ń wọn ìgbóná ojú nǹkan, èyí tí ó lè fi àìtó omi hàn." },
            { objective: "O5", q: "Oko tíì ńlá kan fẹ́ rí ìdààmú ní kùtùkùtù káàkiri gbogbo apá rẹ̀. Sensor wo ni o máa dábàá?", options: ["Kò sí", "Kámẹ́rà thermal fún ẹranko nìkan", "Kámẹ́rà fóònù", "Kámẹ́rà multispectral"], answer: 3, why: "Kámẹ́rà multispectral ń wọn near-infrared àti red edge, tí ó ń fi ìdààmú irè hàn ní kùtùkùtù." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yíya àwòrán tó dára: ìmọ́lẹ̀, afẹ́fẹ́ àti àkókò",
          minutes: 5,
          goal: "Múra fífò sílẹ̀ kí gbogbo àwòrán lè mọ́lẹ̀, kí ìmọ́lẹ̀ wọn dọ́gba, kí wọ́n sì wúlò.",
          text: [
            "Àwòrán tí a yà ní ọ̀sẹ̀ mélòó kan síra lè ṣeé fi wéra kìkì tí a bá yà wọ́n ní ọ̀nà kan náà. Fò ní àyíká ọ̀sán gangan, nígbà tí òjìji kúrú, nínú ìmọ́lẹ̀ tí kò yí padà: yálà oòrùn kíkún tàbí ìkùukùu tó bo gbogbo ojú ọ̀run bákan náà, kì í ṣe ìkùukùu tó ń kọjá lórí oko ní ẹ̀lẹ́ẹ̀kan. Fò ní gíga àti ètò kan náà ní gbogbo ìgbà.",
            "Afẹ́fẹ́ ń mi drone, ó sì ń mi ewé, èyí sì ń jẹ́ kí àwòrán má mọ́lẹ̀, ó sì ń ba síso pọ̀ jẹ́. Fò díẹ̀díẹ̀ sí i nígbà tí afẹ́fẹ́ kò lágbára, má sì fò rárá nígbà tí afẹ́fẹ́ bá lágbára. Rí i dájú pé awò kámẹ́rà (lens) mọ́, àti pé a ṣètò kámẹ́rà láti rí nǹkan kedere (focus); ọ̀pọ̀ app àyàwòrán ilẹ̀ máa ń ṣètò kámẹ́rà fún ọ.",
            "Fún kámẹ́rà multispectral, ya fọ́tò calibration panel (káàdì tí a mọ bí ó ṣe ń dá ìmọ́lẹ̀ padà tó, tí ó wá pẹ̀lú sensor) ṣáájú àti lẹ́yìn fífò, kí software lè ṣàtúnṣe fún ìmọ́lẹ̀. Kí o tó kúrò ní oko, wo àwọn fọ́tò: tí àwọn kan kò bá mọ́lẹ̀, tí wọ́n ṣókùnkùn tàbí tí wọ́n sọnù, tún fò apá yẹn nígbà tí o ṣì wà níbẹ̀."
          ],
          steps: ["Ṣètò láti fò nítòsí ọ̀sán gangan nínú ìmọ́lẹ̀ tí kò yí padà.", "Ṣàyẹ̀wò afẹ́fẹ́; fò díẹ̀díẹ̀ nínú afẹ́fẹ́ tí kò lágbára, fagilé nínú afẹ́fẹ́ tó lágbára.", "Nu awò kámẹ́rà; ṣàyẹ̀wò ètò kámẹ́rà.", "Multispectral: ya fọ́tò calibration panel ṣáájú àti lẹ́yìn.", "Kí o tó lọ, ṣàyẹ̀wò àwọn fọ́tò kí o sì tún fò apá èyíkéyìí tí kò dára."],
          words: [["Calibration panel", "káàdì tí a mọ bí ó ṣe mọ́lẹ̀ tó, tí a ń yà fọ́tò rẹ̀ ṣáájú àti lẹ́yìn fífò multispectral láti ṣàtúnṣe fún ìmọ́lẹ̀."], ["Àìmọ́lẹ̀ (blur)", "nígbà tí àwòrán kò mọ́lẹ̀ nítorí pé kámẹ́rà tàbí irè mì."]],
          slides: [
            { title: "Ọ̀nà kan náà, nígbà gbogbo", bullets: ["Fò nítòsí ọ̀sán gangan: òjìji kúrú", "Ìmọ́lẹ̀ tí kò yí padà: oòrùn kíkún tàbí ìkùukùu tó dọ́gba", "Gíga àti ètò kan náà ní fífò kọ̀ọ̀kan"] },
            { title: "Dènà àìmọ́lẹ̀", bullets: ["Fò díẹ̀díẹ̀ nínú afẹ́fẹ́ tí kò lágbára", "Fagilé nínú afẹ́fẹ́ tó lágbára", "Awò kámẹ́rà mímọ́, ètò kámẹ́rà tó tọ́"] },
            { title: "Àfikún fún multispectral", bullets: ["Ya fọ́tò calibration panel", "ṢÁÁJÚ ÀTI LẸ́YÌN fífò"] },
            { title: "Ṣàyẹ̀wò kí o tó lọ", bullets: ["Wo gbogbo àwọn fọ́tò", "Tún fò apá tí kò mọ́lẹ̀, tó ṣókùnkùn tàbí tó sọnù"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò fífò àyàwòrán kíkún rẹ fún oko àgbàdo 2 hẹ́kítà: ète, sensor, gíga àti GSD, overlap, ìyára, bátìrì, àkókò ọjọ́, òdiwọ̀n ojú ọjọ́, ibi ìgbéra àti àkọsílẹ̀ àyẹ̀wò. Tí o bá ní drone àti ìyọ̀ǹda tí wọ́n ń béèrè, fò ó kí o sì ṣàyẹ̀wò gbogbo àwòrán kí o tó lọ.",
          youCanNow: "ṣètò kí o sì ya àwọn àwòrán tó mọ́lẹ̀, tí ìmọ́lẹ̀ wọn dọ́gba, tí a lè so pọ̀ di àwòrán ilẹ̀ oko, tí a sì lè fi wéra bí àkókò ti ń lọ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni calibration panel?", options: ["Àbẹ̀bẹ̀ àfikún", "Àpò bátìrì", "Káàdì tí a mọ bí ó ṣe ń dá ìmọ́lẹ̀ padà tó, tí a ń yà ṣáájú àti lẹ́yìn fífò multispectral", "Ojú-iboju controller"], answer: 2, why: "Yíya fọ́tò calibration panel ń jẹ́ kí software ṣàtúnṣe fún ìmọ́lẹ̀ ọjọ́ náà." },
            { objective: "O6", q: "Ìkùukùu ń kọjá lórí oko kíákíá ní ọ̀sán gangan. Kí ni o máa ṣe?", options: ["Dúró de oòrùn kíkún tàbí ìkùukùu tó dọ́gba kí o tó fò", "Fò báyìí kí o sì retí pé yóò dára", "Fò ní ìrọ̀lẹ́ dípò rẹ̀", "Fò ga sí i kí o lè kọjá ìkùukùu"], answer: 0, why: "Ìmọ́lẹ̀ tí kò yí padà, yálà oòrùn kíkún tàbí ìkùukùu tó dọ́gba, ń fúnni ní àwòrán tí ìmọ́lẹ̀ rẹ̀ dọ́gba tí a lè fi wéra." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Yíya àwòrán láti òfurufú àti àwọn sensor",
        questions: [
          { objective: "O4", q: "Sensor wo ló tó láti wá àlàfo nínú oko ẹ̀wà 1 éékà?", options: ["Thermal nìkan", "Multispectral nìkan", "Kámẹ́rà àwọ̀ lásán (RGB)", "Kò sí sensor tó lè ṣe èyí"], answer: 2, why: "Àlàfo rọrùn láti rí nínú àwòrán àwọ̀ ní sẹ̀ńtímítà díẹ̀ fún pixel kan." },
          { objective: "O5", q: "Ewé tútù tó ní ìlera máa ń dá púpọ̀ nínú èwo padà?", options: ["Ìmọ́lẹ̀ near-infrared", "Ohùn", "Ooru nìkan", "Ìgbì rédíò"], answer: 0, why: "Ìṣètò ewé tó ní ìlera ń dá near-infrared padà gidigidi; vegetation index ń lo èyí." },
          { objective: "O5", q: "Àwòrán thermal fi hàn pé apá kan nínú oko tòmátì gbóná ju ìyókù lọ gan-an. Ohun tó ṣeé ṣe kí ó fà á tí o máa yẹ̀ wò ni:", options: ["Àwọ̀ ajílẹ̀ tó pọ̀ jù", "Drone ga jù", "Apá náà tutù ju", "Àìtó omi tàbí páìpù drip tó dí"], answer: 3, why: "Irè tí kò rí omi tó máa ń gbóná nítorí pé wọ́n ń pa ihò kékeré ewé wọn dé." },
          { objective: "O6", q: "Ìgbà wo ló dára jù láti fò fún àwòrán tí a lè fi wéra?", options: ["Ní àfẹ̀mọ́jú ọ̀sẹ̀ kan àti ní ìwọ̀ oòrùn ọ̀sẹ̀ tó kàn", "Nítòsí ọ̀sán gangan, nínú ìmọ́lẹ̀ tí kò yí padà, ní ọ̀nà kan náà nígbà gbogbo", "Nínú ìkùukùu tó ń kọjá", "Ní alẹ́"], answer: 1, why: "Òjìji kúkúrú àti ìmọ́lẹ̀ tí kò yí padà ń jẹ́ kí a lè fi àwòrán wéra." },
          { objective: "O6", q: "Àwọn fọ́tò kan kò mọ́lẹ̀ nígbà tí o ṣàyẹ̀wò wọn ní oko. O yẹ kí o:", options: ["Tún fò apá yẹn kí o tó lọ", "Lọ sílé kí o sì retí pé síso pọ̀ máa ṣiṣẹ́", "Pa gbogbo wọn rẹ́", "Fò kíákíá sí i nígbà míì"], answer: 0, why: "Títún un ṣe níbẹ̀ ń dá ìrìnàjò míì sí, ó sì ń fúnni ní àwòrán ilẹ̀ tó pé." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Drone fún Ìmójútó Oko 2: Fífò, Yíya Àwòrán àti Àwọn Sensor",
    questions: [
      { objective: "O1", q: "Níbo ni ọ̀pọ̀ jàǹbá drone ti ń bẹ̀rẹ̀?", options: ["Ní òfurufú nìkan", "Lórí ilẹ̀, pẹ̀lú nǹkan tí a gbàgbé nígbà ìmúrasílẹ̀", "Ní ọ́fíìsì", "Nínú software lẹ́yìn ìbalẹ̀"], answer: 1, why: "Àbẹ̀bẹ̀ tó sán, bátìrì tí kò lágbára àti ètò tí kò tọ́ ń fa ọ̀pọ̀ jàǹbá." },
      { objective: "O1", q: "Èwo ló jẹ́ apá kan àyẹ̀wò ìwé?", options: ["Bí àbẹ̀bẹ̀ ṣe le tó", "Nínu awò kámẹ́rà", "Ìforúkọsílẹ̀, ìwé àṣẹ àti ìyọ̀ǹda fún ibi náà", "Wíwú bátìrì"], answer: 2, why: "Àyẹ̀wò ìwé ń fìdí rẹ̀ múlẹ̀ pé a gbà ọ́ láàyè láti fò níbẹ̀." },
      { objective: "O1", q: "Bátìrì kan dà bí ẹni pé ó ti wú. O yẹ kí o:", options: ["Má ṣe lò ó", "Lò ó fún fífò kúkúrú", "Tẹ̀ ẹ́ kí ó tẹ́jú", "Gba agbára rẹ̀ sí i"], answer: 0, why: "Bátìrì tó wú lè dáwọ́ iṣẹ́ dúró tàbí gbiná; má ṣe fò pẹ̀lú rẹ̀." },
      { objective: "O1", q: "Kí ló dé tí a fi ń gba àwòrán ilẹ̀ offline kí a tó lọ sí oko ní ìgbèríko?", options: ["Láti fi owó epo pamọ́", "Láti mú kí drone yára sí i", "Nítorí òfin béèrè rẹ̀", "Ó lè má sí nẹ́tíwọ̀ọ̀kì fóònù ní oko"], answer: 3, why: "Láìsí nẹ́tíwọ̀ọ̀kì, app lè má lè ṣí àwòrán ilẹ̀ tí ó nílò." },
      { objective: "O1", q: "Return-to-home ni:", options: ["Ètò tó ń mú drone fò padà sí ibi tí ó ti gbéra fúnra rẹ̀", "Bọ́tìnnì tó ń pa ẹ̀rọ (motor)", "Ọ̀nà kan tí kámẹ́rà ń gbà ṣiṣẹ́", "Irú bátìrì kan"], answer: 0, why: "RTH ń mú drone padà sílé nígbà tí bátìrì bá lọ sílẹ̀ tàbí tí àmì ìsopọ̀ bá sọnù." },
      { objective: "O2", q: "Fífò kọjá ibi tí ojú ti ń rí:", options: ["Wà ní ìyọ̀ǹda nígbà gbogbo", "Nílò ìyọ̀ǹda pàtàkì", "Pọn dandan fún àyàwòrán ilẹ̀", "Kò léwu jù"], answer: 1, why: "BVLOS ní ewu tó ga jù, ó sì nílò àṣẹ." },
      { objective: "O2", q: "Part 21 ti Nàìjíríà fi gíga tó pọ̀ jù lọ tó wọ́pọ̀ sí:", options: ["Mítà 10", "Mítà 1,000", "Mítà 120 (ẹsẹ̀ bàtà 400) lókè ilẹ̀", "Kò sí òdiwọ̀n"], answer: 2, why: "Part 21 ń lo 120 m (400 ft) AGL fún ọ̀pọ̀ iṣẹ́; ṣàyẹ̀wò òdiwọ̀n orílẹ̀-èdè rẹ." },
      { objective: "O2", q: "Nígbà fífò, níbo ni o yẹ kí drone wà?", options: ["Lẹ́yìn rẹ", "Lórí rẹ gan-an", "Níbi tí o kò ti lè rí i", "Níwájú rẹ, níbi tí o ti ń rí i"], answer: 3, why: "Tí ó bá wà níwájú rẹ tí o sì ń rí i, o lè mọ ọ̀nà tí ó dojú kọ." },
      { objective: "O2", q: "Ìgbà wo ni o yẹ kí o balẹ̀?", options: ["Nígbà tí bátìrì ṣì kù", "Ní 0 nínú ọgọ́rùn-ún", "Nígbà tí drone bá balẹ̀ fúnra rẹ̀ nìkan", "Nígbà tí fóònù bá kún"], answer: 0, why: "Fi bátìrì tó tó sílẹ̀ fún sísọ̀kalẹ̀ àti ìbalẹ̀ láìléwu." },
      { objective: "O3", q: "Fífò àyàwòrán ilẹ̀ máa ń lọ:", options: ["Yípo", "Ní ìlà títọ́ lọ àti bọ̀", "Láìní ètò", "Sókè àti sísàlẹ̀ tààrà"], answer: 1, why: "Ìrísí grid ń bo gbogbo oko pẹ̀lú fọ́tò tó bo ara wọn." },
      { objective: "O3", q: "GSD túmọ̀ sí:", options: ["Ìyára drone lórí ilẹ̀", "Ìjìnnà ààbò àgbáyé", "Iye ilẹ̀ tí pixel kan ń bo", "Ìtóbi bátìrì"], answer: 2, why: "Ground sampling distance ni bí àwòrán ṣe mọ́lẹ̀ tó, bí 2 cm fún pixel kan." },
      { objective: "O3", q: "Láti ka igi àgbàdo kọ̀ọ̀kan, o yẹ kí o:", options: ["Fò ga bí ó ti lè ṣe tó", "Lo sátẹ́láìtì nìkan", "Fò ní alẹ́", "Fò rẹlẹ̀ sí i fún àwòrán tó mọ́lẹ̀ sí i, láàárín òdiwọ̀n òfin"], answer: 3, why: "GSD tó kéré sí i ń fi igi kọ̀ọ̀kan hàn; dúró nísàlẹ̀ òdiwọ̀n gíga." },
      { objective: "O3", q: "Overlap iwájú tó wọ́pọ̀ fún àyàwòrán ilẹ̀ jẹ́ nǹkan bí:", options: ["70 sí 80 nínú ọgọ́rùn-ún", "5 nínú ọgọ́rùn-ún", "0 nínú ọgọ́rùn-ún", "100 nínú ọgọ́rùn-ún gan-an"], answer: 0, why: "Overlap púpọ̀ ń jẹ́ kí software so fọ́tò pọ̀." },
      { objective: "O4", q: "Lodging nínú àwòrán àwọ̀ túmọ̀ sí:", options: ["Irè tí ó tutù jù", "Igi irè tí ó ti tẹ̀ tàbí wó lulẹ̀", "Èpò láàárín ìlà", "Omi lórí ilẹ̀"], answer: 1, why: "Àgbàdo tàbí ọkà bàbà tó wó lulẹ̀ máa ń dùbúlẹ̀, ó sì rọrùn láti rí láti òkè." },
      { objective: "O4", q: "Àwòrán àwọ̀ fi ibi kan tí ó ń pọ́n hàn. Ìgbésẹ̀ tó dára jù tó kàn ni:", options: ["Fín oògùn sí i", "Má ṣe kà á sí", "Sàmì sí i kí o sì lọ yẹ̀ ẹ́ wò ní ẹsẹ̀", "Fò ga sí i"], answer: 2, why: "Àwòrán ń fi ibi tí ó wà hàn; ìwọ ni o máa fìdí ohun tó fà á múlẹ̀ lórí ilẹ̀." },
      { objective: "O5", q: "A ń ṣírò NDVI láti inú:", options: ["Ohùn àti ooru", "Ìmọ́lẹ̀ búlúù nìkan", "Àpẹẹrẹ ilẹ̀", "Ìmọ́lẹ̀ pupa àti near-infrared"], answer: 3, why: "NDVI ń fi ìmọ́lẹ̀ pupa àti near-infrared tí ewé dá padà wéra." },
      { objective: "O5", q: "Iye NDVI tó ga sábà máa ń túmọ̀ sí:", options: ["Ewéko tútù tó pọ̀ tó sì ní ìlera", "Ilẹ̀ tí kò ní nǹkan lórí", "Omi", "Kámẹ́rà tó bàjẹ́"], answer: 0, why: "FAO ṣàpèjúwe NDVI tó ga gẹ́gẹ́ bí ewéko tó pọ̀ tó sì ní ìlera." },
      { objective: "O5", q: "Kámẹ́rà thermal jẹ́ àṣàyàn tó dára láti:", options: ["Ka nọ́mbà ọkọ̀", "Rí àìtó omi àti ẹranko ní àfẹ̀mọ́jú", "Ka irúgbìn nínú àpò", "Rí àwọ̀ kedere sí i"], answer: 1, why: "Thermal ń wọn ooru, tí ó jẹ mọ́ àìtó omi àti ẹranko tí ara wọn gbóná." },
      { objective: "O6", q: "Kí ló dé tí a fi ń ya fọ́tò calibration panel pẹ̀lú kámẹ́rà multispectral?", options: ["Ohun ìrántí ni", "Láti dán àwọn àbẹ̀bẹ̀ wò", "Kí software lè ṣàtúnṣe fún ìmọ́lẹ̀ ọjọ́ náà", "Láti wọn afẹ́fẹ́"], answer: 2, why: "Bí a ṣe mọ ìmọ́lẹ̀ tí panel náà ń dá padà ń jẹ́ kí software ṣàtúnṣe àwọn ìwọ̀n." },
      { objective: "O6", q: "Afẹ́fẹ́ líle tó ń fẹ́ lọ́nà òjijì ní ọjọ́ fífò àyàwòrán ilẹ̀ túmọ̀ sí:", options: ["Fò kíákíá sí i", "Fò ga sí i", "Yọ àwọn àbẹ̀bẹ̀ kúrò", "Má ṣe fò; yí ọjọ́ padà"], answer: 3, why: "Afẹ́fẹ́ líle lè gba ìdarí lọ́wọ́ rẹ, ó sì ń ba àwòrán jẹ́." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 1, 5, 6, 10, 12, 13, 15, 17, 18]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", ṣàtúnṣe apá yẹn nínú ètò náà kí o sì tún un ṣàyẹ̀wò.",
    criteria: [
      {
        name: "Ète àti sensor",
        objective: "O5",
        notYet: "Kò sí ète, tàbí sensor náà kò bá ète mu.",
        meets: "Ète fífò tó yé àti sensor tó bá a mu, pẹ̀lú ìdí.",
        exceeds: "Ó ṣàlàyé ìdí tí a kò fi yan sensor tó dín owó tàbí tó wọ́n jù."
      },
      {
        name: "Gíga, bí àwòrán ṣe mọ́lẹ̀ tó àti overlap",
        objective: "O3",
        notYet: "Gíga, GSD tàbí overlap kò sí, tàbí ó ga ju òdiwọ̀n gíga tí òfin gbà.",
        meets: "Gíga àti GSD tí app fi hàn, overlap iwájú àti ti ẹ̀gbẹ́, ìyára àti iye bátìrì.",
        exceeds: "Ó fi hàn bí àwòrán ṣe mọ́lẹ̀ tó ṣe bá iṣẹ́ náà mu, bí kíka irè."
      },
      {
        name: "Ìmọ́lẹ̀, afẹ́fẹ́ àti àkókò",
        objective: "O6",
        notYet: "Kò sí àkókò ọjọ́ tàbí òdiwọ̀n ojú ọjọ́.",
        meets: "Àkókò ọjọ́, ìmọ́lẹ̀, òdiwọ̀n afẹ́fẹ́ àti ètò láti ṣàyẹ̀wò gbogbo àwòrán kí ó tó kúrò.",
        exceeds: "Ó ní àwọn ìgbésẹ̀ calibration panel tàbí ọjọ́ àfidípò."
      },
      {
        name: "Àkọsílẹ̀ àyẹ̀wò ṣáájú fífò",
        objective: "O1",
        notYet: "Àkọsílẹ̀ àyẹ̀wò kò ní drone, bátìrì, ètò tàbí ìwé.",
        meets: "Ó kan drone, bátìrì, controller àti app, ètò return-to-home àti àwọn ìwé.",
        exceeds: "Ó fi ibi ìgbéra kún un àti bí ojú ṣe máa máa rí drone."
      },
      {
        name: "Fífò láìléwu",
        objective: "O2",
        notYet: "Kò sí ibi ìgbéra, tàbí fífò kọjá ibi tí ojú ti ń rí láìsí ìyọ̀ǹda.",
        meets: "Ibi ìgbéra tó yé, fífò níbi tí ojú ti ń rí i àti láàárín gíga tí òfin gbà, àti ìbalẹ̀ pẹ̀lú bátìrì tó ṣẹ́kù.",
        exceeds: "Ó dárúkọ olùṣọ́ kan àti àwọn ìgbésẹ̀ tí afẹ́fẹ́ bá le sí i."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ètò fífò",
      "Àwọn akẹ́kọ̀ọ́ tó ní ìyọ̀ǹda tí wọ́n sọ pé àwọn fò fífò àyàwòrán tí a ṣètò, tí wọ́n sì rí gbogbo àwòrán láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí Ẹ̀kọ́ 3 nínú ọ̀wọ́ ẹ̀kọ́ drone",
      "Àwọn tó ń ṣe iṣẹ́ drone tí wọ́n sọ pé títún fò tàbí jàǹbá ti dín kù lẹ́yìn ìdánilẹ́kọ̀ọ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí tablet tó ní app àyàwòrán ilẹ̀ drone, tàbí àwòrán ojú-iboju (screenshot) rẹ̀",
      "Ìwé àkọsílẹ̀ tàbí àkọsílẹ̀ àyẹ̀wò tí a tẹ̀ jáde",
      "Drone pẹ̀lú ìforúkọsílẹ̀, ìwé àṣẹ àti ìyọ̀ǹda rẹ̀, fún fífò àṣeṣe àṣàyàn nìkan",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti kọ ètò fífò"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣètò fífò àyàwòrán àpẹẹrẹ kan lórí ojú-iboju kí gbogbo ènìyàn lè rí bí gíga, GSD àti overlap ṣe ń yí padà.",
      "Fífò àṣeṣe èyíkéyìí gbọ́dọ̀ tẹ̀lé òfin orílẹ̀-èdè, pẹ̀lú awakọ̀ tó ní ìwé àṣẹ àti ìyọ̀ǹda tó wà ní ipò, kí àwọn òǹwòran sì wà ní ọ̀nà jíjìn.",
      "Ka àkọsílẹ̀ àyẹ̀wò ṣáájú fífò sókè lórí drone gidi tàbí àwòrán rẹ̀, má sì ṣe lo bátìrì tó ti wú.",
      "Lo àwọn àwòrán àpẹẹrẹ tí kò bá sí drone, kí àwọn akẹ́kọ̀ọ́ lè fi kíka àwòrán àwọ̀, multispectral àti thermal dánra wò.",
      "Fi rubric ṣe àmì fún ètò fífò, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
