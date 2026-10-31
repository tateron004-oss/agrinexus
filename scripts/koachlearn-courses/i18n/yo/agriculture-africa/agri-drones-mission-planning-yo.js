"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-drones-mission-planning.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA, àjọ ìrìnàjò òfuurufú Kenya): Unmanned Aircraft Systems (drone)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Ètò orí ayélujára KCAA fún drone (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA, àjọ ìrìnàjò òfuurufú Nàìjíríà): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems (drone)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KMD = { name: "Kenya Meteorological Department (àjọ ojú-ọjọ́ Kenya)", url: "https://meteo.go.ke" };
const NIMET = { name: "Nigerian Meteorological Agency (NiMet, àjọ ojú-ọjọ́ Nàìjíríà)", url: "https://nimet.gov.ng" };

module.exports = {
  id: "agri-drones-mission-planning-yo",
  lang: "yo",
  translationOf: "agri-drones-mission-planning",
  category: "Agriculture (Africa)",
  name: "Drone fún Iṣẹ́ Àgbẹ̀: Ṣíṣètò Iṣẹ́ àti Ìṣiṣẹ́ Fífò",
  skills: "Yíyí ìbéèrè oníbàárà padà sí ààlà iṣẹ́, Ṣíṣàyẹ̀wò ibi iṣẹ́ àti ṣíṣàyẹ̀wò òfuurufú àti àwọn ìyọ̀ǹda, Kíkọ àyẹ̀wò ewu, Ṣíṣe ètò fífò pẹ̀lú ètò ìpàjáwìrì, Ṣíṣáájú ìpàdé ìtọ́sọ́nà àwọn òṣìṣẹ́ àti fífo iṣẹ́ náà, Ṣíṣe àyẹ̀wò lẹ́yìn fífò àti ìròyìn ìjàǹbá",
  outcome: "ṣètò kí o sì ṣe iṣẹ́ drone àgbẹ̀ ti akọ́ṣẹ́mọṣẹ́ láti ìbéèrè oníbàárà títí dé fífi data lé e lọ́wọ́, pẹ̀lú àpò ìwé iṣẹ́ (mission pack) tó pé: ààlà iṣẹ́, àyẹ̀wò ibi iṣẹ́, àyẹ̀wò òfuurufú àti ìyọ̀ǹda, àyẹ̀wò ewu, ètò fífò, ìpàdé ìtọ́sọ́nà òṣìṣẹ́, ètò ìpàjáwìrì àti àkọsílẹ̀ lẹ́yìn fífò.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn awakọ̀ drone (remote pilot), àwọn ilé-iṣẹ́ tí ń ṣe iṣẹ́ drone, àwọn ẹgbẹ́ drone ní oko ńlá àti ilé-iṣẹ́ àgbẹ̀, àti àwọn ètò ìdánilẹ́kọ̀ọ́ àgbẹ̀ (extension) ní Kenya, Nàìjíríà àti káàkiri Áfíríkà tí wọ́n ń fò drone fún àwọn ẹlòmíì. Ó retí pé o ti mọ ìpìlẹ̀ fífò àti yíya máàpù, àti òfin drone orílẹ̀-èdè rẹ (wo ẹ̀kọ́ àbójútó àti ẹ̀kọ́ òfin).",
    "Orí 1 jẹ́ nípa ṣíṣètò: fífohùn ṣọ̀kan lórí ohun tí oníbàárà nílò gan-an, ṣíṣàyẹ̀wò ibi iṣẹ́, ṣíṣàyẹ̀wò òfuurufú àti ìyọ̀ǹda, ṣíṣàyẹ̀wò ewu, àti ṣíṣe ètò fífò pẹ̀lú gíga, ìbòrí (overlap), bátìrì àti àkókò. Orí 2 jẹ́ nípa iṣẹ́ gidi: iṣẹ́ òṣìṣẹ́ kọ̀ọ̀kan àti ìpàdé ìtọ́sọ́nà, fífò àti ṣíṣọ́ iṣẹ́ náà, bíbójútó ohun tí kò lọ dáadáa, àti píparí iṣẹ́ pẹ̀lú àyẹ̀wò data, ìwé àkọsílẹ̀ (log) àti ìròyìn ìjàǹbá èyíkéyìí.",
    "Àwọn àpẹẹrẹ jẹ́ irú iṣẹ́ gidi: yíya máàpù hẹ́kítà 40 ti píà (avocado) fún olùtajà sí òkèèrè ní Murang'a, kíka iye ewéko lórí oko ẹ̀gẹ́ (cassava) 25 ti àwọn àgbẹ̀ alábàáṣiṣẹ́ ní Ìpínlẹ̀ Ọ̀yọ́, ṣíṣàyẹ̀wò ìrigéṣọ̀n lórí oko ọgbà nítòsí Naivasha. Má ṣe fò iṣẹ́ kankan láìní ìforúkọsílẹ̀, ìwé àṣẹ, ìwé ẹ̀rí olùṣiṣẹ́ (operator certificate) àti àwọn ìyọ̀ǹda tí orílẹ̀-èdè rẹ ń béèrè. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣe àpò ìwé iṣẹ́ (mission pack) tó pé fún iṣẹ́ drone àgbẹ̀ kan (gidi tàbí àpẹẹrẹ, bí yíya máàpù hẹ́kítà 40 ti píà fún olùtajà sí òkèèrè): ààlà iṣẹ́ tí o fohùn ṣọ̀kan lé lórí pẹ̀lú oníbàárà, àyẹ̀wò ibi iṣẹ́ pẹ̀lú àwọn ewu àti máàpù àfọwọ́yà, àyẹ̀wò òfuurufú àti ìyọ̀ǹda pẹ̀lú orísun wọn, tábìlì àyẹ̀wò ewu, ètò fífò (agbègbè, gíga, bí àwòrán ṣe kún tó, ìbòrí, ìyára, bátìrì, àkókò, ààlà ojú-ọjọ́), iṣẹ́ òṣìṣẹ́ kọ̀ọ̀kan àti àkọsílẹ̀ ìpàdé ìtọ́sọ́nà, ètò ìpàjáwìrì, àti àkọsílẹ̀ àyẹ̀wò lẹ́yìn fífò àti ìwé àkọsílẹ̀ tí o máa kọ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn awakọ̀ drone, àwọn ilé-iṣẹ́ tí ń ṣe iṣẹ́ drone, àwọn ẹgbẹ́ drone ní oko ńlá àti ilé-iṣẹ́ àgbẹ̀, àti àwọn ètò ìdánilẹ́kọ̀ọ́ àgbẹ̀ ní Kenya, Nàìjíríà àti káàkiri Áfíríkà tí wọ́n ń fò drone àgbẹ̀ fún àwọn oníbàárà.",
    startingPoint: "Àwọn akẹ́kọ̀ọ́ ti lè fò drone, ṣe fífò yíya máàpù ìpìlẹ̀, wọ́n sì mọ òfin drone orílẹ̀-èdè wọn. Díẹ̀ lára wọn ló ń yí ìbéèrè oníbàárà padà sí ààlà iṣẹ́ tí a kọ sílẹ̀, kọ àyẹ̀wò ewu àti ètò ìpàjáwìrì, ṣe ìpàdé ìtọ́sọ́nà fún òṣìṣẹ́, tàbí parí iṣẹ́ pẹ̀lú àyẹ̀wò data, ìwé àkọsílẹ̀ àti ìròyìn ìjàǹbá.",
    gap: "Iṣẹ́ tí kò ní ààlà tó yé máa ń fa ìjà, iṣẹ́ tí kò ní àyẹ̀wò ibi iṣẹ́, àyẹ̀wò ewu àti ìpàdé ìtọ́sọ́nà sì máa ń fa ìjàǹbá, data tí wọn kò gbà àti oníbàárà tí ó sọnù. Àpò ìwé iṣẹ́ tó pé ń jẹ́ kí ẹgbẹ́ drone fún oníbàárà ní ohun tí ó nílò láìléwu, ní ìbámu pẹ̀lú òfin àti ní àkókò, ó sì ń fi hàn àwọn oníbàárà àti ìjọba pé akọ́ṣẹ́mọṣẹ́ ni ilé-iṣẹ́ náà.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a ń ṣàlàyé àwọn ọ̀rọ̀ drone àti ààbò",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà alágbèérìn (laptop) tí ó ní app máàpù; drone àti app ìṣètò ń ṣèrànwọ́ ṣùgbọ́n kò pọn dandan",
      "Òfin: iṣẹ́ kọ̀ọ̀kan nílò ìforúkọsílẹ̀, ìwé àṣẹ, ìwé ẹ̀rí olùṣiṣẹ́ àti àwọn ìyọ̀ǹda tí orílẹ̀-èdè ń béèrè",
      "Ipò oko: ooru, afẹ́fẹ́, òjò, íńtánẹ́ẹ̀tì tí kò dára àti àwọn òǹwòran lórí oko ní Áfíríkà",
      "Àkókò: ẹ̀kọ́ kúkúrú, pẹ̀lú àkókò láti ṣe àpò ìwé iṣẹ́ náà"
    ],
    prerequisites: "\"Drone fún Iṣẹ́ Àgbẹ̀ ní Áfíríkà: Òfin Ìrìnàjò Òfuurufú àti Ìwé Àṣẹ\" àti ẹ̀kọ́ \"Drone fún Àbójútó Oko\", tàbí ìrírí fífò tí ó dọ́gba pẹ̀lú wọn."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí oníbàárà bá béèrè iṣẹ́ drone lọ́wọ́ rẹ", action: "kọ ààlà iṣẹ́ pẹ̀lú ìpinnu, agbègbè, ohun tí o máa fà lé e lọ́wọ́, ọjọ́, ẹni tí a ó máa bá sọ̀rọ̀, iye owó àti bí a ó ṣe pín data", standard: "pẹ̀lú ohun tí drone kò lè ṣe" },
    { id: "O2", condition: "Fún ibi iṣẹ́ kan", action: "ṣe àyẹ̀wò lórí máàpù àti lórí ilẹ̀, kí o sì fìdí ààlà òfuurufú àti gbogbo ìyọ̀ǹda múlẹ̀", standard: "tí a kọ sílẹ̀ pẹ̀lú ọjọ́ àti orísun kí fífò tó bẹ̀rẹ̀" },
    { id: "O3", condition: "Fún iṣẹ́ tí a ti ṣètò", action: "kọ àyẹ̀wò ewu, ètò fífò àti ètò ìpàjáwìrì", standard: "pẹ̀lú ìdènà fún ewu kọ̀ọ̀kan àti ààlà ojú-ọjọ́ tí a ti fi lélẹ̀" },
    { id: "O4", condition: "Kí fífò àkọ́kọ́ iṣẹ́ kan tó bẹ̀rẹ̀", action: "pín iṣẹ́ fún àwọn òṣìṣẹ́ kí o sì ṣáájú ìpàdé ìtọ́sọ́nà", standard: "tí ó sọ nípa ewu, ààlà, ètò ìpàjáwìrì, ọ̀rọ̀ àṣẹ tí a fohùn ṣọ̀kan lé, àti ẹni tí ó lè pè pé kí a dúró" },
    { id: "O5", condition: "Nígbà iṣẹ́ náà", action: "ṣọ́ fífò àti telemetry kí o sì ṣe ìpinnu bóyá kí a fò tàbí kí a má fò", standard: "kí o dúró tàbí balẹ̀ nígbàkígbà tí ààlà kan bá kọjá" },
    { id: "O6", condition: "Ní ìparí iṣẹ́ náà", action: "ṣàyẹ̀wò data, parí àwọn ìwé àkọsílẹ̀, kí o sì ròyìn ìjàǹbá èyíkéyìí", standard: "kí o tó kúrò ní ibi iṣẹ́, pẹ̀lú àwọn àlàfo tí a tún fò àti data tí a ti ṣe ẹ̀dà rẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣètò iṣẹ́ náà",
      lessons: [
        {
          objectives: ["O1"],
          title: "Láti ìbéèrè oníbàárà dé ààlà iṣẹ́",
          minutes: 5,
          goal: "Yí ìbéèrè oníbàárà padà sí ààlà iṣẹ́ tó yé tí a kọ sílẹ̀.",
          text: [
            "Àwọn oníbàárà sábà máa ń béèrè \"fífò drone\" nígbà tí ohun tí wọ́n nílò gan-an ni ìdáhùn: Àwọn apá oko wo ni ewéko kò hù dáadáa sí? Níbo ni omi ìrigéṣọ̀n ti ń jò? Igi mélòó ni a ní? Bẹ̀rẹ̀ nípa bíbéèrè ìpinnu tí wọ́n fẹ́ ṣe àti ohun tí wọ́n máa fi èsì náà ṣe.",
            "Lẹ́yìn náà, fohùn ṣọ̀kan lórí ààlà iṣẹ́ ní kíkọ: agbègbè náà (pẹ̀lú máàpù tàbí fáìlì ààlà), ìbéèrè náà àti ohun tí o máa fà lé wọn lọ́wọ́ (fún àpẹẹrẹ orthomosaic, máàpù NDVI, iye igi, ìròyìn ojú-ewé kan), bí àwòrán ṣe gbọ́dọ̀ kún tó, ìgbà tí a ó ṣe é, bí a ó ṣe wọ oko, ẹni tí a ó máa bá sọ̀rọ̀ ní oko, iye owó àti ọ̀nà ìsanwó (bí owó orí fóònù nígbà tí a bá fà á lé wọn lọ́wọ́), àti bí a ó ṣe pín data àti ibi tí a ó tọ́jú rẹ̀ sí.",
            "Sọ kedere ohun tí drone kò lè ṣe. Máàpù lè fi hàn ibi tí igi ti ń ní ìṣòro; kò lè dá nìkan sọ irú àrùn tí ó jẹ́. Ààlà iṣẹ́ tó yé ń dáàbò bo ìwọ àti oníbàárà lọ́wọ́ ìjákulẹ̀ àti ìjà."
          ],
          steps: ["Béèrè ìpinnu tí oníbàárà fẹ́ ṣe.", "Fohùn ṣọ̀kan lórí agbègbè náà kí o sì gba ààlà tàbí máàpù àfọwọ́yà.", "Fohùn ṣọ̀kan lórí ohun tí o máa fà lé wọn lọ́wọ́, bí ó ṣe kún tó, ọjọ́ àti ẹni tí a ó máa bá sọ̀rọ̀.", "Fohùn ṣọ̀kan lórí iye owó, ìsanwó àti pípín data.", "Sọ ààlà ohun tí drone lè fi hàn.", "Kọ ọ́ sílẹ̀ kí ẹ̀yin méjèèjì sì fọwọ́ sí i."],
          words: [["Ààlà iṣẹ́ (mission scope)", "àdéhùn tí a kọ sílẹ̀ nípa ohun tí iṣẹ́ drone máa bò àti ohun tí ó máa fà lé oníbàárà lọ́wọ́."], ["Ohun tí a ó fà lé lọ́wọ́ (deliverable)", "ohun tí oníbàárà máa gbà, bí máàpù tàbí ìròyìn."]],
          slides: [
            { title: "Wá ìbéèrè gidi náà", bullets: ["Ìpinnu wo ni oníbàárà máa ṣe?", "Kí ni wọ́n máa fi èsì náà ṣe?"] },
            { title: "Fohùn ṣọ̀kan ní kíkọ", bullets: ["Agbègbè àti ààlà rẹ̀", "Ohun tí a ó fà lé lọ́wọ́ àti bí ó ṣe kún tó", "Ọjọ́, bí a ó ṣe wọ oko, ẹni tí a ó bá sọ̀rọ̀ ní oko", "Iye owó, ìsanwó, pípín data"] },
            { title: "Sọ ààlà drone", bullets: ["Máàpù ń fi ibi hàn, kì í ṣe ìdí nígbà gbogbo", "Ààlà iṣẹ́ tó yé ń dènà ìjà"] }
          ],
          tryIt: "Olùtajà píà sí òkèèrè kan sọ pé: \"Ẹ fò hẹ́kítà 40 wa ní ọ̀sẹ̀ tó ń bọ̀.\" Kọ ìbéèrè márùn-ún tí o máa béèrè, lẹ́yìn náà kọ ààlà iṣẹ́ ní ìpínrọ̀ kan pẹ̀lú agbègbè, ohun tí a ó fà lé lọ́wọ́, ọjọ́, ẹni tí a ó bá sọ̀rọ̀, àyè fún iye owó, àti ààlà drone.",
          youCanNow: "yí ìbéèrè oníbàárà tí kò yé padà sí ààlà iṣẹ́ tó yé tí a kọ sílẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Kí ni \"ohun tí a ó fà lé lọ́wọ́\" (deliverable) nínú ààlà iṣẹ́?", options: ["Bátìrì drone náà", "Nọ́mbà fóònù oníbàárà", "Gíga fífò", "Ohun tí oníbàárà máa gbà, bí máàpù tàbí ìròyìn"], answer: 3, why: "Ohun tí a ó fà lé lọ́wọ́ ni ohun tí o máa fún wọn, bí orthomosaic, máàpù NDVI, iye igi tàbí ìròyìn." },
            { objective: "O1", q: "Oníbàárà kan fẹ́ kí máàpù NDVI rẹ dárúkọ àrùn tí ó wà lára igi píà wọn. Kí ni o máa kọ sínú ààlà iṣẹ́?", options: ["Pé máàpù náà máa dárúkọ gbogbo àrùn", "Pé máàpù náà ń fi igi tí ó ní ìṣòro hàn, ṣùgbọ́n a gbọ́dọ̀ dá àrùn mọ̀ lórí ilẹ̀", "Kò sí nǹkan nípa rẹ̀", "Pé o máa fín oògùn sí àwọn igi náà pẹ̀lú"], answer: 1, why: "Máàpù lè fi ibi tí igi ti ní ìṣòro hàn, ṣùgbọ́n kò lè dá nìkan sọ irú àrùn tí ó jẹ́." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Àyẹ̀wò ibi iṣẹ́, òfuurufú àti ìyọ̀ǹda",
          minutes: 6,
          goal: "Ṣàyẹ̀wò ibi iṣẹ́ kí o sì fìdí ààlà òfuurufú àti gbogbo ìyọ̀ǹda múlẹ̀ kí fífò tó bẹ̀rẹ̀.",
          text: [
            "Kọ́kọ́ ṣe àyẹ̀wò lórí tábìlì (desk survey): wo agbègbè náà lórí app máàpù àti àwòrán satẹlaiti fún pápá ọkọ̀ òfuurufú kékeré, pápá ọkọ̀ òfuurufú, ọ̀nà, ìlú, wáyà iná, òpó ẹ̀rọ ìbánisọ̀rọ̀, odò, agbègbè ààbò àti ibi ààbò ìjọba. Lẹ́yìn náà ṣàyẹ̀wò òfin àti máàpù àjọ ìrìnàjò òfuurufú rẹ fún agbègbè tí a kà léèwọ̀ àti ìjìnnà sí pápá ọkọ̀ òfuurufú, àti bóyá iṣẹ́ náà nílò ìyọ̀ǹda iṣẹ́ pàtó. Fi àkókò sílẹ̀ kí ìyọ̀ǹda èyíkéyìí lè jáde.",
            "Lẹ́yìn náà ṣàyẹ̀wò lórí ilẹ̀ tí o bá lè ṣe é, tàbí ní kí ẹni tí o ń bá sọ̀rọ̀ ní oko fi àwòrán ránṣẹ́: ibi tí drone ti máa gbéra àti ibi tí ó ti máa balẹ̀, àwọn ìdíwọ́ àti gíga wọn, ènìyàn àti ẹranko, ilé àwọn ará oko, ọ̀nà wíwọlé, bí íńtánẹ́ẹ̀tì fóònù ṣe wà, àti ibi tí àwọn òṣìṣẹ́ ti lè sá fún oòrùn àti òjò.",
            "Fìdí àwọn ìyọ̀ǹda múlẹ̀: ti onílẹ̀ tàbí alábòójútó ní kíkọ, ti àwọn aládùúgbò tí o bá máa fò kọjá lórí ilẹ̀ wọn, ti àwọn olórí àwùjọ níbi tí wọ́n bá retí rẹ̀, àti ti àjọ ìrìnàjò òfuurufú gẹ́gẹ́ bí ó ti yẹ. Kọ gbogbo rẹ̀ sínú àpò ìwé iṣẹ́ pẹ̀lú ọjọ́ àti orísun."
          ],
          steps: ["Àyẹ̀wò lórí tábìlì: máàpù àti àwòrán satẹlaiti agbègbè náà.", "Ṣàyẹ̀wò òfin ìrìnàjò òfuurufú: agbègbè tí a kà léèwọ̀, ìjìnnà sí pápá ọkọ̀ òfuurufú, ìyọ̀ǹda.", "Àyẹ̀wò lórí ilẹ̀ tàbí àwòrán láti oko: ibi gbígbéra, ìdíwọ́, ènìyàn, íńtánẹ́ẹ̀tì.", "Gba ìyọ̀ǹda onílẹ̀ àti aládùúgbò ní kíkọ.", "Kọ gbogbo àyẹ̀wò sílẹ̀ pẹ̀lú ọjọ́ àti orísun."],
          words: [["Àyẹ̀wò lórí tábìlì (desk survey)", "ṣíṣàyẹ̀wò ibi iṣẹ́ pẹ̀lú máàpù àti ìwé kí o tó lọ síbẹ̀."], ["Agbègbè tí a kà léèwọ̀ (restricted area)", "òfuurufú tí fífò ti ní ààlà tàbí tí ó nílò ìyọ̀ǹda pàtàkì."], ["Ìyọ̀ǹda iṣẹ́ (operation authorisation)", "àṣẹ láti ọ̀dọ̀ àjọ ìrìnàjò òfuurufú fún irú iṣẹ́ kan pàtó."]],
          slides: [
            { title: "Àyẹ̀wò lórí tábìlì", bullets: ["Máàpù àti àwòrán satẹlaiti", "Pápá ọkọ̀ òfuurufú, ọ̀nà, ìlú, wáyà iná, òpó", "Agbègbè ààbò àti ibi ààbò ìjọba"] },
            { title: "Òfuurufú àti ìyọ̀ǹda", bullets: ["Agbègbè tí a kà léèwọ̀ àti ìjìnnà sí pápá ọkọ̀ òfuurufú", "Ṣé a nílò ìyọ̀ǹda iṣẹ́ pàtó?", "Fi àkókò sílẹ̀ fún ìyọ̀ǹda"] },
            { title: "Àyẹ̀wò lórí ilẹ̀", bullets: ["Ibi gbígbéra, ìdíwọ́, gíga wọn", "Ènìyàn, ẹranko, ilé, íńtánẹ́ẹ̀tì", "Ibi ààbò fún àwọn òṣìṣẹ́"] },
            { title: "Ìyọ̀ǹda ní kíkọ", bullets: ["Onílẹ̀ tàbí alábòójútó", "Aládùúgbò, olórí àwùjọ", "Àjọ ìrìnàjò òfuurufú gẹ́gẹ́ bí ó ti yẹ"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Fún oko kan tí o lè rí lórí app máàpù, ṣe àyẹ̀wò lórí tábìlì: kọ gbogbo pápá ọkọ̀ òfuurufú, ọ̀nà, wáyà iná, ibi tí ènìyàn ń gbé àti agbègbè ààbò láàárín kìlómítà díẹ̀, kí o sì kọ àwọn òfin ìrìnàjò òfuurufú tí o gbọ́dọ̀ ṣàyẹ̀wò àti àwọn ìyọ̀ǹda tí o nílò.",
          youCanNow: "ṣàyẹ̀wò ibi iṣẹ́, ṣàyẹ̀wò ààlà òfuurufú, kí o sì gba gbogbo ìyọ̀ǹda kí iṣẹ́ tó bẹ̀rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Kí ni àyẹ̀wò lórí tábìlì (desk survey)?", options: ["Ìpàdé ní tábìlì oníbàárà", "Fífò ìdánwò", "Wíwo máàpù àti àwòrán satẹlaiti fún ewu àti agbègbè tí a kà léèwọ̀ kí o tó lọ sí ibi iṣẹ́", "Kíka iye òṣìṣẹ́"], answer: 2, why: "Àyẹ̀wò lórí tábìlì ń ṣàyẹ̀wò máàpù, àwòrán satẹlaiti àti òfin àjọ ìrìnàjò òfuurufú kí o tó lọ sí ibi iṣẹ́." },
            { objective: "O2", q: "Ọ̀nà fífò rẹ máa kọjá lórí ilẹ̀ aládùúgbò kan. Kí ni o máa ṣe kí fífò tó bẹ̀rẹ̀?", options: ["Gba ìyọ̀ǹda aládùúgbò náà kí o sì kọ ọ́ sínú àpò ìwé iṣẹ́", "Fò ga kí wọ́n má baà kíyèsí", "Fò ní àárọ̀ kùtùkùtù nìkan", "Ní kí oníbàárà sọ fún wọn lẹ́yìn náà"], answer: 0, why: "A máa ń fìdí ìyọ̀ǹda onílẹ̀ àti aládùúgbò múlẹ̀, a sì ń kọ wọ́n sílẹ̀ kí fífò tó bẹ̀rẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Àyẹ̀wò ewu àti ètò fífò",
          minutes: 6,
          goal: "Kọ àyẹ̀wò ewu àti ètò fífò tó pé pẹ̀lú ètò ìpàjáwìrì.",
          text: [
            "Àyẹ̀wò ewu ń kọ ohun tí ó lè ṣẹlẹ̀ tí kò dára, bí ó ṣe lè ṣẹlẹ̀ tó àti bí ó ṣe le tó, àti ohun tí o máa ṣe láti dín in kù. Fún àpẹẹrẹ: ewu, wáyà iná ní ààlà àríwá; ohun tí ó lè ṣẹlẹ̀, kíkọlù ú; ìdènà, ṣètò ọ̀nà fífò ní mítà 30 sí i, kí o sì ṣètò gíga return-to-home (padà sílé) ga ju u lọ. Àwọn ewu míì tí ó wọ́pọ̀: ènìyàn tí ń rìn wọ agbègbè náà, ẹran ọ̀sìn, ẹyẹ ajẹran, afẹ́fẹ́ líle ní ọ̀sán, ooru, ìsopọ̀ tí ó já lẹ́yìn òkè, àti pápá ọkọ̀ òfuurufú kékeré nítòsí.",
            "Ètò fífò ń fi àwọn nǹkan wọ̀nyí lélẹ̀: pínpín agbègbè náà sí àwọn fífò tí ọ̀kọ̀ọ̀kan bá bátìrì kan mu; gíga àti bí àwòrán ṣe máa kún tó níbẹ̀ (láàárín ààlà gíga tí òfin fàyè gbà); ìbòrí (overlap); ìyára; iye bátìrì, pẹ̀lú àfikún; ibi gbígbéra àti ibi ìbalẹ̀; àkókò iṣẹ́ (fún àpẹẹrẹ 10:00 sí 14:00 fún ìmọ́lẹ̀ tí ó dọ́gba); àti ààlà ojú-ọjọ́ (afẹ́fẹ́ tí ó ga jù, kò sí òjò, bí a ṣe ń ríran sí). Ṣàyẹ̀wò àsọtẹ́lẹ̀ ojú-ọjọ́ láti ọ̀dọ̀ àjọ ojú-ọjọ́ orílẹ̀-èdè rẹ ní ọjọ́ tó ṣáájú àti ní àárọ̀ ọjọ́ iṣẹ́ náà.",
            "Ètò ìpàjáwìrì ń sọ ohun tí o máa ṣe tí nǹkan bá yí padà: afẹ́fẹ́ kọjá ààlà rẹ, nítorí náà dúró; òjò, nítorí náà kó ẹrù kí o sì padà wá ní ọjọ́ àfipamọ́; ènìyàn wọ agbègbè náà, nítorí náà dúró sí ojú kan tàbí balẹ̀; ìsopọ̀ já, nítorí náà return-to-home ti wà ní ṣíṣètò; bátìrì ní àṣìṣe, nítorí náà balẹ̀ sí ibi ìbalẹ̀ míì tí a ti yàn."
          ],
          steps: ["Kọ àwọn ewu; wọ̀n bí ó ṣe lè ṣẹlẹ̀ tó àti bí ó ṣe le tó; kọ ìdènà fún ọ̀kọ̀ọ̀kan.", "Pín agbègbè náà sí àwọn fífò bátìrì kan.", "Ṣètò gíga, bí àwòrán ṣe kún tó, ìbòrí, ìyára àti bátìrì pẹ̀lú àfikún.", "Ṣètò àkókò iṣẹ́ àti ààlà ojú-ọjọ́; ṣàyẹ̀wò àsọtẹ́lẹ̀ ojú-ọjọ́.", "Kọ ètò ìpàjáwìrì àti àwọn ibi ìbalẹ̀ míì."],
          words: [["Àyẹ̀wò ewu (risk assessment)", "àyẹ̀wò tí a kọ sílẹ̀ nípa ohun tí ó lè ṣẹlẹ̀ tí kò dára àti bí o ṣe máa dín ewu kù."], ["Ìdènà (control)", "ìgbésẹ̀ tí ó ń dín ewu kù."], ["Ètò ìpàjáwìrì (contingency)", "ìgbésẹ̀ tí a ti ṣètò tẹ́lẹ̀ tí nǹkan bá yí padà tàbí tí nǹkan bá bàjẹ́."]],
          slides: [
            { title: "Àyẹ̀wò ewu", bullets: ["Ewu, bí ó ṣe lè ṣẹlẹ̀ tó, bí ó ṣe le tó, ìdènà", "Wáyà iná, ènìyàn, ẹran ọ̀sìn, ẹyẹ", "Afẹ́fẹ́, ooru, ìsopọ̀ tí ó já, pápá ọkọ̀ òfuurufú"] },
            { title: "Ètò fífò", bullets: ["Fífò bátìrì kan, bátìrì àfikún", "Gíga, bí àwòrán ṣe kún tó, ìbòrí, ìyára", "Ibi gbígbéra, ibi ìbalẹ̀, àkókò iṣẹ́"] },
            { title: "Ojú-ọjọ́", bullets: ["Fi ààlà lélẹ̀: afẹ́fẹ́, òjò, bí a ṣe ń ríran sí", "Ṣàyẹ̀wò àsọtẹ́lẹ̀ orílẹ̀-èdè ní ọjọ́ tó ṣáájú àti àárọ̀ ọjọ́ náà"] },
            { title: "Ètò ìpàjáwìrì", bullets: ["Afẹ́fẹ́: dúró. Òjò: ọjọ́ àfipamọ́", "Ènìyàn wọlé: dúró sí ojú kan tàbí balẹ̀", "Ìsopọ̀ já: RTH ti wà. Àṣìṣe: ibi ìbalẹ̀ míì"] }
          ],
          sources: [KMD, NIMET, NCAA_P21],
          tryIt: "Kọ tábìlì àyẹ̀wò ewu tí ó ní ó kéré tán ewu mẹ́fà fún iṣẹ́ píà hẹ́kítà 40 náà, lẹ́yìn náà kọ ètò fífò rẹ̀ àti ètò ìpàjáwìrì márùn-ún.",
          youCanNow: "kọ àyẹ̀wò ewu àti ètò fífò tó pé pẹ̀lú ètò ìpàjáwìrì.",
          quickCheck: [
            { objective: "O3", q: "Nínú àyẹ̀wò ewu, kí ni ewu (hazard)?", options: ["Ohun tí ó lè ṣe ìpalára, bí wáyà iná", "Owó tí oníbàárà san", "Ohun tí fífò máa fà lé lọ́wọ́", "Àwọ̀ drone náà"], answer: 0, why: "Ewu ni ohun tí ó lè fa ìṣòro; àyẹ̀wò ewu ń fi bí ó ṣe lè ṣẹlẹ̀ tó, bí ó ṣe le tó àti ìdènà kún un." },
            { objective: "O3", q: "Ètò rẹ fi ààlà afẹ́fẹ́ lélẹ̀. Àsọtẹ́lẹ̀ àárọ̀ fi hàn pé afẹ́fẹ́ máa kọjá ààlà náà ní gbogbo ọjọ́. Kí ni o máa ṣe?", options: ["Fò bẹ́ẹ̀ kí o sì retí ohun rere", "Yọ ààlà afẹ́fẹ́ kúrò nínú ètò", "Fò apá ọ̀hún oko nìkan", "Lo ọjọ́ àfipamọ́ tí ó wà nínú ètò ìpàjáwìrì"], answer: 3, why: "Ètò ìpàjáwìrì ń sọ ohun tí a ó ṣe nígbà tí ipò bá kọjá ààlà, bí padà wá ní ọjọ́ àfipamọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣètò iṣẹ́ náà",
        questions: [
          { objective: "O1", q: "Oníbàárà kan béèrè \"fífò drone\". Ìbéèrè àkọ́kọ́ rẹ gbọ́dọ̀ jẹ́:", options: ["Àwọ̀ drone wo ni ẹ fẹ́?", "Ìpinnu wo ni ẹ fẹ́ fi èsì náà ṣe?", "Ṣé mo lè fò lónìí?", "Ṣé ẹ ní drone?"], answer: 1, why: "Ìpinnu náà ló ń sọ data àti ohun tí a ó fà lé lọ́wọ́ tí a nílò." },
          { objective: "O1", q: "Èwo ló yẹ kí ó wà nínú ààlà iṣẹ́ tí a kọ sílẹ̀?", options: ["Orin tí awakọ̀ fẹ́ràn jù", "Iye owó nìkan", "Kò sí nǹkan; ẹ fohùn ṣọ̀kan lórí fóònù", "Agbègbè, ohun tí a ó fà lé lọ́wọ́, ọjọ́, ẹni tí a ó bá sọ̀rọ̀, iye owó àti pípín data"], answer: 3, why: "Ààlà iṣẹ́ tó yé tí a kọ sílẹ̀ ń dènà ìjà." },
          { objective: "O2", q: "Nígbà àyẹ̀wò lórí tábìlì, o rí pápá ọkọ̀ òfuurufú kékeré kan ní kìlómítà 3 sí ibẹ̀. O yẹ kí o:", options: ["Ṣàyẹ̀wò òfin ìjìnnà sí pápá ọkọ̀ òfuurufú àti ìyọ̀ǹda tí a nílò", "Fojú fò ó", "Fò ní àárọ̀ nìkan", "Fò ga sí i"], answer: 0, why: "Ọ̀pọ̀ òfin ń fi ààlà sí drone nítòsí pápá ọkọ̀ òfuurufú." },
          { objective: "O3", q: "Nínú àyẹ̀wò ewu, ìdènà (control) ni:", options: ["Ẹ̀rọ ìdarí drone (remote controller)", "Ìgbésẹ̀ tí ó ń dín ewu kù", "Ẹ̀sùn oníbàárà", "Bátìrì"], answer: 1, why: "Ìdènà ń dín bí ewu ṣe lè ṣẹlẹ̀ tó tàbí bí ó ṣe le tó kù." },
          { objective: "O3", q: "Àsọtẹ́lẹ̀ fi afẹ́fẹ́ líle hàn ní ọ̀sán. Ètò tí ó bọ́gbọ́n mu ni:", options: ["Fò ní ọ̀sán bẹ́ẹ̀", "Fagi lé iṣẹ́ náà títí láé", "Ṣètò àkókò iṣẹ́ sí wákàtí tí afẹ́fẹ́ bá rọlẹ̀ kí o sì ní ọjọ́ àfipamọ́", "Yọ àwọn abẹ̀bẹ̀ (propeller) kúrò"], answer: 2, why: "Ṣètò iṣẹ́ ní àyíká ààlà ojú-ọjọ́ pẹ̀lú ọjọ́ àfipamọ́." }
        ]
      }
    },
    {
      name: "Orí 2: Fífò iṣẹ́ náà",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iṣẹ́ òṣìṣẹ́ kọ̀ọ̀kan àti ìpàdé ìtọ́sọ́nà",
          minutes: 5,
          goal: "Pín iṣẹ́ fún àwọn òṣìṣẹ́ kí o sì ṣáájú ìpàdé ìtọ́sọ́nà tó yé kí iṣẹ́ tó bẹ̀rẹ̀.",
          text: [
            "Kódà iṣẹ́ kékeré máa ń lọ dáadáa jù tí iṣẹ́ ẹnì kọ̀ọ̀kan bá yé. Awakọ̀ olórí (pilot in command) ló ń dáhùn fún ààbò fífò, òun ló sì ní ọ̀rọ̀ ìkẹyìn. Olùwòye (observer) ń wo drone àti ojú ọ̀run, ó sì ń kìlọ̀ nípa ọkọ̀ òfuurufú, ẹyẹ, ènìyàn àti ẹranko. Olùṣiṣẹ́ ilẹ̀ tàbí ti kámẹ́rà lè bójútó bátìrì, kámẹ́rà, ibi ìbalẹ̀ àti oníbàárà.",
            "Kí fífò àkọ́kọ́ tó bẹ̀rẹ̀, awakọ̀ olórí ń tọ́ gbogbo ènìyàn sọ́nà, títí kan ẹni tí a ń bá sọ̀rọ̀ ní oko: agbègbè àti ọ̀nà fífò, gíga, àkókò lórí bátìrì kọ̀ọ̀kan, ibi gbígbéra àti ibi ìbalẹ̀, ewu àti ìdènà láti inú àyẹ̀wò ewu, ààlà ojú-ọjọ́, ètò ìpàjáwìrì, àwọn ọ̀rọ̀ tí ẹ máa lò (fún àpẹẹrẹ \"dúró\", \"balẹ̀ báyìí\"), àti ẹni tí ó lè pè pé kí a dúró. Ẹnikẹ́ni lè pè pé kí a dúró nítorí ààbò.",
            "Ṣàyẹ̀wò pé òṣìṣẹ́ kọ̀ọ̀kan ní omi, ààbò lọ́wọ́ oòrùn àti ohun èlò ààbò bí aṣọ àwọ̀lékè tí ń tàn (high-visibility vest), àti pé a ti sàmì sí ibi gbígbéra, a sì ń pa àwọn òǹwòran mọ́ kúrò níbẹ̀."
          ],
          steps: ["Yan awakọ̀ olórí, olùwòye àti olùṣiṣẹ́ ilẹ̀ tàbí ti kámẹ́rà.", "Ìtọ́sọ́nà: agbègbè, gíga, bátìrì, ibi gbígbéra àti ìbalẹ̀, ewu, ààlà ojú-ọjọ́.", "Fohùn ṣọ̀kan lórí ètò ìpàjáwìrì àti ọ̀rọ̀ àṣẹ (dúró, balẹ̀ báyìí).", "Fìdí rẹ̀ múlẹ̀ pé ẹnikẹ́ni lè pè pé kí a dúró.", "Sàmì sí ibi gbígbéra; ṣàyẹ̀wò omi, ààbò oòrùn àti aṣọ àwọ̀lékè."],
          words: [["Awakọ̀ olórí (pilot in command)", "awakọ̀ drone tí ó ń dáhùn fún ààbò fífò, tí ó sì ní ọ̀rọ̀ ìkẹyìn."], ["Ọ̀rọ̀ àṣẹ (standard calls)", "ọ̀rọ̀ kúkúrú tí a ti fohùn ṣọ̀kan lé tí àwọn òṣìṣẹ́ ń lò kí gbogbo ènìyàn lè yé lẹ́sẹ̀kẹsẹ̀."]],
          slides: [
            { title: "Iṣẹ́ òṣìṣẹ́ kọ̀ọ̀kan", bullets: ["Awakọ̀ olórí: ọ̀rọ̀ ìkẹyìn lórí ààbò", "Olùwòye: drone, ojú ọ̀run, ènìyàn, ẹranko", "Olùṣiṣẹ́ ilẹ̀ tàbí kámẹ́rà: bátìrì, kámẹ́rà, oníbàárà"] },
            { title: "Ìpàdé ìtọ́sọ́nà", bullets: ["Agbègbè, gíga, bátìrì, ibi gbígbéra, ibi ìbalẹ̀", "Ewu, ààlà ojú-ọjọ́, ètò ìpàjáwìrì", "Ọ̀rọ̀ àṣẹ: dúró, balẹ̀ báyìí"] },
            { title: "Bójútó àwọn òṣìṣẹ́", bullets: ["Ẹnikẹ́ni lè pè pé kí a dúró", "Omi, ààbò oòrùn, aṣọ àwọ̀lékè", "Ibi gbígbéra ní àmì, kò sí òǹwòran níbẹ̀"] }
          ],
          tryIt: "Kọ ìwé ìtọ́sọ́nà ojú-ewé kan fún iṣẹ́ píà náà tí awakọ̀ olórí lè kà sókè láàárín ìṣẹ́jú mẹ́ta, tí ó sọ nípa gbogbo nǹkan inú ẹ̀kọ́ yìí.",
          youCanNow: "pín iṣẹ́ fún àwọn òṣìṣẹ́ kí o sì ṣáájú ìpàdé ìtọ́sọ́nà tó yé kí iṣẹ́ tó bẹ̀rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ni olùwòye (observer) ń ṣe?", options: ["Ó ń san owó àwọn òṣìṣẹ́", "Ó ń wo drone, ojú ọ̀run àti ilẹ̀, ó sì ń kìlọ̀ fún awakọ̀", "Ó ń kọ ìròyìn oníbàárà", "Ó ń gba owó lọ́wọ́ oníbàárà"], answer: 1, why: "Olùwòye ń ṣọ́ ọkọ̀ òfuurufú, ẹyẹ, ènìyàn àti ẹranko, ó sì ń kìlọ̀ fún awakọ̀." },
            { objective: "O4", q: "Ẹni tí a ń bá sọ̀rọ̀ ní oko máa dúró nítòsí ibi gbígbéra. Kí ni o máa ṣe nínú ìpàdé ìtọ́sọ́nà?", options: ["Má ṣe fi í kún ìpàdé ìtọ́sọ́nà", "Sọ fún un pé kí ó dákẹ́", "Fi í kún un, ṣàlàyé ewu àti ọ̀rọ̀ àṣẹ fún un, kí o sì sọ pé ẹnikẹ́ni lè pè pé kí a dúró", "Ní kí ó fò drone náà"], answer: 2, why: "Ìpàdé ìtọ́sọ́nà ní gbogbo ẹni tí ó wà níbẹ̀ nínú, títí kan ẹni tí a ń bá sọ̀rọ̀ ní oko, ẹnikẹ́ni sì lè pè pé kí a dúró nítorí ààbò." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣe iṣẹ́ náà àti ṣíṣọ́ ọ",
          minutes: 5,
          goal: "Fò iṣẹ́ tí a ti ṣètò, ṣọ́ ọ, kí o sì ṣe ìpinnu bóyá kí a fò tàbí kí a má fò.",
          text: [
            "Kí fífò kọ̀ọ̀kan tó bẹ̀rẹ̀, lọ nípasẹ̀ àkọsílẹ̀ àyẹ̀wò ṣáájú fífò (pre-flight checklist) kí o sì fìdí rẹ̀ múlẹ̀ pé ipò wà láàárín ààlà. Gbé ọ̀nà tí a ṣètò sókè tàbí ṣàyẹ̀wò rẹ̀, fìdí ibi ilé (home point) àti gíga return-to-home múlẹ̀, kí o sì rí i dájú pé olùwòye wà ní ipò rẹ̀.",
            "Nígbà fífò, awakọ̀ ń wo drone àti telemetry (bátìrì, àmì ìsopọ̀, satẹlaiti, ìkìlọ̀ afẹ́fẹ́, gíga, bí ó ṣe ń tẹ̀síwájú lórí ọ̀nà). Olùwòye ń wo ojú ọ̀run àti ilẹ̀. Múra láti gba ìdarí pẹ̀lú ọwọ́ nígbàkígbà. Pààrọ̀ bátìrì láàárín fífò gẹ́gẹ́ bí ìlànà bátìrì rẹ, kí o sì sàmì sí àwọn ọ̀nà tí a ti parí.",
            "Ṣe ìpinnu bóyá kí a fò tàbí kí a má fò ní gbogbo ọjọ́. Tí afẹ́fẹ́ bá ga ju ààlà rẹ lọ, tí ènìyàn bá rìn wọ agbègbè náà, tí ìjì bá ń kó jọ, tàbí tí ìkìlọ̀ kan bá ń tún ara rẹ̀ ṣe, dúró tàbí balẹ̀. Píparí lọ́la sàn ju ìjàǹbá lónìí lọ. Máa sọ bí iṣẹ́ ṣe ń lọ àti ìyípadà èyíkéyìí fún oníbàárà."
          ],
          steps: ["Àkọsílẹ̀ àyẹ̀wò ṣáájú fífò; ṣé ipò wà láàárín ààlà?", "Ṣàyẹ̀wò ọ̀nà, ibi ilé àti gíga return-to-home.", "Fò; awakọ̀ ń wo drone àti telemetry, olùwòye ń wo ojú ọ̀run àti ilẹ̀.", "Pààrọ̀ bátìrì láìléwu; sàmì sí ọ̀nà tí a ti parí.", "Dúró tàbí balẹ̀ tí ààlà bá kọjá; sọ fún oníbàárà."],
          words: [["Telemetry", "data tí drone ń fi ránṣẹ́ sí ẹ̀rọ ìdarí ní àkókò yẹn gan-an: bátìrì, gíga, ipò, àmì ìsopọ̀, ìkìlọ̀."], ["Fò / má fò (go / no-go)", "ìpinnu bóyá ó ní ààbò láti fò tàbí láti máa bá a lọ."]],
          slides: [
            { title: "Kí fífò kọ̀ọ̀kan tó bẹ̀rẹ̀", bullets: ["Àkọsílẹ̀ àyẹ̀wò àti ààlà", "Ọ̀nà, ibi ilé, gíga RTH", "Olùwòye wà ní ipò rẹ̀"] },
            { title: "Nígbà fífò", bullets: ["Awakọ̀: drone àti telemetry", "Olùwòye: ojú ọ̀run àti ilẹ̀", "Múra fún ìdarí pẹ̀lú ọwọ́"] },
            { title: "Fò tàbí má fò, ní gbogbo ọjọ́", bullets: ["Afẹ́fẹ́, ènìyàn, ìjì, ìkìlọ̀ tí ń tún ṣẹlẹ̀", "Dúró tàbí balẹ̀", "Lọ́la sàn ju ìjàǹbá lọ"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Kọ káàdì fò / má fò fún iṣẹ́ rẹ: ipò márùn-ún tí ó túmọ̀ sí fò, àti márùn-ún tí ó túmọ̀ sí dúró tàbí balẹ̀, ní ọ̀rọ̀ kúkúrú tí àwọn òṣìṣẹ́ lè kà ní oko.",
          youCanNow: "fò kí o sì ṣọ́ iṣẹ́ tí a ti ṣètò, kí o sì ṣe ìpinnu tó tọ́ bóyá kí a fò tàbí kí a má fò.",
          quickCheck: [
            { objective: "O5", q: "Kí ni telemetry?", options: ["Àdéhùn oníbàárà", "Àsọtẹ́lẹ̀ ojú-ọjọ́", "Data fífò ní àkókò yẹn gan-an bí bátìrì, gíga, àmì ìsopọ̀ àti ìkìlọ̀", "Àkọsílẹ̀ orúkọ òṣìṣẹ́"], answer: 2, why: "Telemetry ni data ìsinsìnyí tí awakọ̀ ń wò nígbà fífò." },
            { objective: "O5", q: "Ìjì ń kó jọ, a sì ti parí ìdajì àwọn ọ̀nà. Kí ni o máa ṣe?", options: ["Balẹ̀, kí o sì parí èyí tó kù nígbà míì", "Fò yára sí i láti parí", "Pa àwọn ìkìlọ̀", "Jẹ́ kí olùwòye fò nígbà tí ò ń kó ẹrù"], answer: 0, why: "Píparí lọ́la sàn ju ìjàǹbá lónìí lọ; dúró tàbí balẹ̀ nígbà tí ipò bá di ewu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Píparí iṣẹ́ náà: àyẹ̀wò data, ìwé àkọsílẹ̀ àti ìjàǹbá",
          minutes: 5,
          goal: "Ṣàyẹ̀wò data, parí ìwé àkọsílẹ̀ kí o sì bójútó ìròyìn ìjàǹbá kí o tó kúrò ní ibi iṣẹ́.",
          text: [
            "Kí o tó kúrò ní ibi iṣẹ́, ṣàyẹ̀wò data: ka iye àwòrán fún fífò kọ̀ọ̀kan, wo díẹ̀ lára wọn fún ìrújú àti ìmọ́lẹ̀, ṣàyẹ̀wò fún àlàfo níbi tí àwòrán kò bò, tí ó bá sì ṣeé ṣe, so àwọn àwòrán pọ̀ kíákíá ní ìpele kékeré (quick stitch) lórí laptop. Tún fò àwọn àlàfo nígbà tí òṣìṣẹ́ àti ipò ṣì wà níbẹ̀. Ṣe ẹ̀dà data sí ẹ̀rọ kejì.",
            "Parí àwọn àkọsílẹ̀: ìwé àkọsílẹ̀ fífò fún fífò kọ̀ọ̀kan (àkókò, bátìrì, awakọ̀, ìṣòro), àkọsílẹ̀ bátìrì àti àtúnṣe ẹ̀rọ, àti ipò gidi tí ó wà nínú àpò ìwé iṣẹ́. Dúpẹ́ lọ́wọ́ ẹni tí ẹ ń bá sọ̀rọ̀ ní oko kí o sì fìdí ìgbà tí wọ́n máa gba ohun tí a ó fà lé wọn lọ́wọ́ múlẹ̀.",
            "Tí nǹkan kan bá ṣẹlẹ̀ tí kò dára (drone já lulẹ̀, ó fẹ́rẹ̀ẹ́ kọlu ọkọ̀ òfuurufú, ẹnìkan farapa, dúkìá bàjẹ́, drone fò lọ láìsí ìdarí), kọ́kọ́ jẹ́ kí agbègbè náà wà láìléwu, lẹ́yìn náà kọ ohun tí ó ṣẹlẹ̀ sílẹ̀ kí o sì ròyìn rẹ̀ fún àjọ ìrìnàjò òfuurufú rẹ gẹ́gẹ́ bí òfin rẹ̀ ti béèrè, àti fún ilé-iṣẹ́ ìdánilójú (insurance) rẹ. Ṣàyẹ̀wò ìjàǹbá náà pẹ̀lú àwọn òṣìṣẹ́ kí o sì ṣe àtúnṣe sí ìlànà yín kí ó má baà ṣẹlẹ̀ mọ́."
          ],
          steps: ["Ka àwòrán, wo díẹ̀ fún ìrújú, ṣàyẹ̀wò fún àlàfo.", "Tún fò àwọn àlàfo; ṣe ẹ̀dà data sí ẹ̀rọ kejì.", "Parí ìwé àkọsílẹ̀ fífò, bátìrì àti àtúnṣe ẹ̀rọ.", "Fìdí ọjọ́ ìfàlélọ́wọ́ múlẹ̀ pẹ̀lú oníbàárà.", "Fún ìjàǹbá èyíkéyìí: jẹ́ kí ó wà láìléwu, kọ ọ́ sílẹ̀, ròyìn rẹ̀ bí ó ti yẹ, ṣàyẹ̀wò rẹ̀ kí o sì tún ìlànà ṣe."],
          words: [["Ó fẹ́rẹ̀ẹ́ ṣẹlẹ̀ (near miss)", "ìṣẹ̀lẹ̀ kan tí ìjàǹbá fẹ́rẹ̀ẹ́ ṣẹlẹ̀ níbẹ̀."], ["Àlàfo àwòrán (coverage gap)", "agbègbè tí kò ní àwòrán tàbí tí àwòrán rẹ̀ kò dára."]],
          slides: [
            { title: "Ṣàyẹ̀wò data ní ibi iṣẹ́", bullets: ["Ka àwòrán, wo díẹ̀ fún ìrújú", "Wá àlàfo; so wọ́n pọ̀ kíákíá", "Tún fò àwọn àlàfo, ṣe ẹ̀dà sí ẹ̀rọ kejì"] },
            { title: "Parí àwọn àkọsílẹ̀", bullets: ["Ìwé àkọsílẹ̀ fífò, bátìrì àti àtúnṣe", "Ipò gidi nínú àpò ìwé iṣẹ́", "Fìdí ọjọ́ ìfàlélọ́wọ́ múlẹ̀"] },
            { title: "Tí nǹkan kan bá bàjẹ́", bullets: ["Jẹ́ kí agbègbè náà wà láìléwu", "Kọ ọ́ sílẹ̀, ròyìn rẹ̀ bí ó ti yẹ; sọ fún ilé-iṣẹ́ ìdánilójú", "Ṣàyẹ̀wò rẹ̀ kí o sì tún ìlànà ṣe"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Iṣẹ́ ìkẹyìn: kó àpò ìwé iṣẹ́ rẹ tó pé jọ: ààlà iṣẹ́, àyẹ̀wò ibi iṣẹ́ àti máàpù àfọwọ́yà, àyẹ̀wò òfuurufú àti ìyọ̀ǹda pẹ̀lú orísun, àyẹ̀wò ewu, ètò fífò, iṣẹ́ òṣìṣẹ́ àti ìpàdé ìtọ́sọ́nà, ètò ìpàjáwìrì, káàdì fò / má fò, àti àkọsílẹ̀ àyẹ̀wò lẹ́yìn fífò àti àpẹẹrẹ ìwé àkọsílẹ̀.",
          youCanNow: "parí iṣẹ́ bí akọ́ṣẹ́mọṣẹ́ pẹ̀lú àyẹ̀wò data, ìwé àkọsílẹ̀ tó pé, àti bíbójútó ìjàǹbá lọ́nà tó tọ́.",
          quickCheck: [
            { objective: "O6", q: "Kí ni ìdí fún sísopọ̀ àwòrán kíákíá ní ìpele kékeré (quick stitch)?", options: ["Láti ṣe ìròyìn ìkẹyìn", "Láti gba agbára bátìrì", "Láti fi ìwé owó ránṣẹ́", "Láti ṣàyẹ̀wò àlàfo àwòrán kí o tó kúrò ní ibi iṣẹ́"], answer: 3, why: "Sísopọ̀ kíákíá ń fi àlàfo hàn nígbà tí òṣìṣẹ́ àti ipò ṣì wà níbẹ̀ láti tún fò wọ́n." },
            { objective: "O6", q: "Drone rẹ kọlu òpó ọgbà, abẹ̀bẹ̀ (propeller) kan sì ṣẹ́. Kí ni o máa kọ́kọ́ ṣe?", options: ["Ròyìn rẹ̀ ní oṣù tó ń bọ̀", "Jẹ́ kí agbègbè náà wà láìléwu, lẹ́yìn náà kọ ọ́ sílẹ̀ kí o sì ròyìn rẹ̀ bí òfin ti béèrè", "Fi ìbàjẹ́ náà pa mọ́ fún oníbàárà", "Fò iṣẹ́ tó kàn pẹ̀lú abẹ̀bẹ̀ kan náà"], answer: 1, why: "Kọ́kọ́ jẹ́ kí agbègbè wà láìléwu, lẹ́yìn náà kọ ìjàǹbá sílẹ̀ kí o sì ròyìn rẹ̀ fún àjọ ìrìnàjò òfuurufú àti ilé-iṣẹ́ ìdánilójú bí ó ti yẹ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Fífò iṣẹ́ náà",
        questions: [
          { objective: "O4", q: "Ta ló ní ọ̀rọ̀ ìkẹyìn lórí ààbò fífò?", options: ["Oníbàárà", "Olùwòye", "Awakọ̀ olórí", "Ilé-iṣẹ́ tí ó ṣe drone"], answer: 2, why: "Awakọ̀ olórí ló ń dáhùn fún ààbò fífò." },
          { objective: "O4", q: "Ta ló lè pè pé kí a dúró nítorí ààbò nígbà iṣẹ́?", options: ["Ẹnikẹ́ni nínú àwọn òṣìṣẹ́", "Oníbàárà nìkan", "Olùwòye nìkan", "Kò sí ẹnìkan nígbà tí drone bá ti ń fò"], answer: 0, why: "Ẹnikẹ́ni tí ó bá rí ewu lè pè pé kí a dúró." },
          { objective: "O5", q: "Telemetry fi hàn pé afẹ́fẹ́ ti kọjá ààlà rẹ báyìí. O yẹ kí o:", options: ["Fò yára sí i láti parí", "Pa àwọn ìkìlọ̀", "Gòkè ga sí i", "Dúró tàbí balẹ̀"], answer: 3, why: "Kíkọjá ààlà túmọ̀ sí dúró; parí rẹ̀ nígbà míì." },
          { objective: "O6", q: "Kí o tó kúrò ní ibi iṣẹ́, o yẹ kí o:", options: ["Pa àwòrán rẹ́ láti ní àyè", "Ṣàyẹ̀wò àwòrán fún ìrújú àti àlàfo, kí o sì tún fò àwọn àlàfo", "Lọ láìsọ fún oníbàárà", "Pa gbogbo nǹkan inú káàdì ìrántí (memory card) rẹ́"], answer: 1, why: "Títún àlàfo ṣe ní ibi iṣẹ́ ń gbà ọ́ lọ́wọ́ ìrìnàjò kejì." },
          { objective: "O6", q: "Drone rẹ fẹ́rẹ̀ẹ́ kọlu ọkọ̀ òfuurufú kékeré kan. Lẹ́yìn tí o ti jẹ́ kí nǹkan wà láìléwu, o yẹ kí o:", options: ["Kọ ọ́ sílẹ̀ kí o sì ròyìn rẹ̀ bí àjọ ìrìnàjò òfuurufú rẹ ti béèrè", "Fi í pa mọ́", "Fò lọ kíákíá", "Dá ẹ̀bi fún ọkọ̀ òfuurufú náà"], answer: 0, why: "Ìròyìn ń ṣèrànwọ́ fún ààbò, òfin sì sábà máa ń béèrè rẹ̀." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Drone fún Iṣẹ́ Àgbẹ̀: Ṣíṣètò Iṣẹ́ àti Ìṣiṣẹ́ Fífò",
    questions: [
      { objective: "O1", q: "Ààlà iṣẹ́ (mission scope) ni:", options: ["Kámẹ́rà drone", "Àdéhùn tí a kọ sílẹ̀ nípa ohun tí iṣẹ́ kan máa bò àti ohun tí ó máa fà lé lọ́wọ́", "Ìròyìn ojú-ọjọ́", "Ìwé àkọsílẹ̀ fífò"], answer: 1, why: "Ó ń fi agbègbè, ohun tí a ó fà lé lọ́wọ́, ọjọ́, iye owó àti ààlà lélẹ̀." },
      { objective: "O1", q: "Èwo ni ohun tí a ó fà lé lọ́wọ́ (deliverable)?", options: ["Ìwé àṣẹ awakọ̀", "Bátìrì", "Máàpù NDVI àti ìròyìn ojú-ewé kan", "Abẹ̀bẹ̀ (propeller)"], answer: 2, why: "Ohun tí a ó fà lé lọ́wọ́ ni ohun tí oníbàárà máa gbà." },
      { objective: "O1", q: "Kí ló dé tí a fi ń sọ ààlà máàpù drone nínú ààlà iṣẹ́?", options: ["Láti yẹra fún ìjákulẹ̀ àti ìjà", "Láti gba owó púpọ̀ sí i", "Láti dà oníbàárà rú", "Kò pọn dandan"], answer: 0, why: "Ààlà tó yé ń jẹ́ kí ohun tí a retí jẹ́ òótọ́." },
      { objective: "O2", q: "Àyẹ̀wò lórí tábìlì (desk survey) ń lo:", options: ["Ṣọ́bìrì nìkan", "Drone nígbà tí ó ń fò", "Tírakítọ̀", "Máàpù àti àwòrán satẹlaiti kí o tó lọ sí ibi iṣẹ́"], answer: 3, why: "Àyẹ̀wò lórí tábìlì ń rí ewu àti ìṣòro òfuurufú ní kùtùkùtù." },
      { objective: "O2", q: "Èwo ni o gbọ́dọ̀ fìdí rẹ̀ múlẹ̀ ní kíkọ kí o tó fò lórí oko oníbàárà?", options: ["Ìwọ̀n bàtà awakọ̀", "Ìyọ̀ǹda onílẹ̀ tàbí alábòójútó", "Iye owó irè oko", "Kò sí nǹkan"], answer: 1, why: "Ìyọ̀ǹda ní kíkọ ń dáàbò bo gbogbo ènìyàn." },
      { objective: "O2", q: "Kí ló dé tí a fi ń ṣàyẹ̀wò íńtánẹ́ẹ̀tì fóònù nígbà àyẹ̀wò lórí ilẹ̀?", options: ["Fún orin", "Fún ìkànnì àjọlò (social media)", "Àwọn app, máàpù àti ìbánisọ̀rọ̀ lè nílò rẹ̀", "Kò wúlò"], answer: 2, why: "Àìsí íńtánẹ́ẹ̀tì lè ní ipa lórí máàpù, ìṣètò iṣẹ́ àti ìpàjáwìrì." },
      { objective: "O3", q: "Àyẹ̀wò ewu ń kọ:", options: ["Ewu, bí ó ṣe lè ṣẹlẹ̀ tó, bí ó ṣe le tó àti ìdènà", "Iye owó nìkan", "Orúkọ àwọn oníbàárà", "Irú ohun ọ̀gbìn"], answer: 0, why: "Ó ń fi ohun tí ó lè ṣẹlẹ̀ tí kò dára àti bí a ṣe lè dín in kù hàn." },
      { objective: "O3", q: "Wáyà iná kan gba etí oko kọjá. Ìdènà tí ó dára ni:", options: ["Fò sún mọ́ ọn fún àwòrán tó dára jù", "Fojú fò ó", "Fò ní alẹ́", "Pa ọ̀nà fífò mọ́ jìnnà sí i kí o sì ṣètò gíga RTH ga ju u lọ"], answer: 3, why: "Ìjìnnà àti gíga RTH tí ó láàbò ń dín ewu kíkọlù kù." },
      { objective: "O3", q: "Kí ló dé tí a fi ń pín agbègbè ńlá sí àwọn fífò bátìrì kan?", options: ["Láti lo àwòrán díẹ̀", "Kí fífò kọ̀ọ̀kan lè parí láìléwu lórí bátìrì kan", "Láti dà software rú", "Nítorí pé ìbòrí (overlap) ń béèrè rẹ̀"], answer: 1, why: "Ṣíṣètò ní ìbámu pẹ̀lú bátìrì ń dènà ìpàjáwìrì bátìrì tí ó ti lọ sílẹ̀." },
      { objective: "O3", q: "Níbo ni o yẹ kí o ti gba àsọtẹ́lẹ̀ ojú-ọjọ́?", options: ["Ìméfò", "Èrò ọ̀rẹ́ kan", "Àjọ ojú-ọjọ́ orílẹ̀-èdè rẹ, ní ọjọ́ tó ṣáájú àti ní àárọ̀ ọjọ́ náà", "Ìwé ìrántí ọdún tó kọjá"], answer: 2, why: "Àsọtẹ́lẹ̀ ìjọba ni a lè gbẹ́kẹ̀ lé jù." },
      { objective: "O3", q: "Ètò ìpàjáwìrì (contingency) ni:", options: ["Ìgbésẹ̀ tí a ti ṣètò tẹ́lẹ̀ tí nǹkan bá yí padà tàbí bàjẹ́", "Ètò kámẹ́rà", "Ìsanwó", "Apá kan drone"], answer: 0, why: "Ètò ìpàjáwìrì ń jẹ́ kí àwọn òṣìṣẹ́ ṣiṣẹ́ kíákíá láìléwu." },
      { objective: "O4", q: "Iṣẹ́ pàtàkì olùwòye (observer) ni láti:", options: ["Ṣiṣẹ́ lórí data", "San owó àwọn òṣìṣẹ́", "Fò drone náà", "Wo drone, ojú ọ̀run àti ilẹ̀ kí ó sì kìlọ̀ fún awakọ̀"], answer: 3, why: "Olùwòye ń ṣọ́ ewu." },
      { objective: "O4", q: "Ọ̀rọ̀ àṣẹ bí \"dúró\" àti \"balẹ̀ báyìí\" wúlò nítorí pé:", options: ["Wọ́n dún bí ti akọ́ṣẹ́mọṣẹ́", "Gbogbo ènìyàn ń yé wọn lẹ́sẹ̀kẹsẹ̀", "Drone ń béèrè wọn", "Wọ́n ń dín lílo bátìrì kù"], answer: 1, why: "Ọ̀rọ̀ kúkúrú tí a ti fohùn ṣọ̀kan lé ń dín ìdàrúdàpọ̀ kù nígbà kánjúkánjú." },
      { objective: "O5", q: "Telemetry ní:", options: ["Iye owó irè oko", "Orúkọ àwọn àgbẹ̀", "Bátìrì, gíga, ipò, àmì ìsopọ̀ àti ìkìlọ̀", "Ojú-ọjọ́ oṣù tó ń bọ̀"], answer: 2, why: "Telemetry ni data fífò ní àkókò yẹn gan-an." },
      { objective: "O5", q: "Ènìyàn kan rìn wọ agbègbè fífò. Àwọn òṣìṣẹ́ gbọ́dọ̀:", options: ["Mú drone dúró sí ojú kan tàbí balẹ̀", "Fò rẹlẹ̀ sí i lórí wọn", "Máa fò àwọn ọ̀nà lọ", "Ní kí wọ́n sáré"], answer: 0, why: "Ènìyàn ní agbègbè náà ń mú ewu pọ̀ sí i; dúró tàbí balẹ̀." },
      { objective: "O5", q: "\"Píparí lọ́la sàn ju ìjàǹbá lónìí lọ\" túmọ̀ sí:", options: ["Máa fò ní pẹ́ nígbà gbogbo", "Má ṣe parí iṣẹ́ láéláé", "Gba owó àfikún fún ìdádúró", "Dúró nígbà tí ipò kò bá láàbò, kódà tí iṣẹ́ kò bá tíì parí"], answer: 3, why: "Ààbò ló ṣáájú àkókò iṣẹ́." },
      { objective: "O6", q: "Kí ló dé tí a fi ń ṣe ẹ̀dà data sí ẹ̀rọ kejì kí a tó lọ?", options: ["Láti kún àyè ìpamọ́", "Kí data lè wà tí ẹ̀rọ kan bá bàjẹ́ tàbí sọnù", "Nítorí pé drone ń béèrè rẹ̀", "Láti pín in fún àwọn àjèjì"], answer: 1, why: "Ẹ̀dà kejì ń dáàbò bo data oníbàárà àti iṣẹ́ rẹ." },
      { objective: "O6", q: "Ìwé àkọsílẹ̀ fífò lẹ́yìn iṣẹ́ ń kọ:", options: ["Orúkọ oníbàárà nìkan", "Iye owó nìkan", "Àkókò, bátìrì, awakọ̀ àti ìṣòro fún fífò kọ̀ọ̀kan", "Kò sí nǹkan"], answer: 2, why: "Ìwé àkọsílẹ̀ ń ṣèrànwọ́ fún ààbò, àtúnṣe ẹ̀rọ àti títẹ̀lé òfin." },
      { objective: "O6", q: "Lẹ́yìn ìjàǹbá, ohun àkọ́kọ́ ni láti:", options: ["Jẹ́ kí agbègbè náà wà láìléwu", "Fi àwòrán sórí ayélujára", "Lọ kíákíá", "Pa ìwé àkọsílẹ̀ rẹ́"], answer: 0, why: "Ènìyàn àti dúkìá ló ṣáájú." },
      { objective: "O6", q: "Kí ló dé tí a fi ń ṣàyẹ̀wò ìjàǹbá pẹ̀lú àwọn òṣìṣẹ́?", options: ["Láti dá ẹ̀bi fún ẹnìkan", "Láti lo àkókò", "Kò wúlò", "Láti tún ìlànà ṣe kí ó má baà ṣẹlẹ̀ mọ́"], answer: 3, why: "Kíkẹ́kọ̀ọ́ láti inú ìjàǹbá ń mú ààbò dára sí i." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 1, 3, 4, 6, 10, 11, 13, 16, 18]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú àpò ìwé iṣẹ́ ṣe kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      { name: "Ààlà iṣẹ́", objective: "O1", notYet: "Ìpinnu oníbàárà, agbègbè tàbí ohun tí a ó fà lé lọ́wọ́ kò sí.", meets: "A kọ ìpinnu, agbègbè, ohun tí a ó fà lé lọ́wọ́, bí ó ṣe kún tó, ọjọ́, ẹni tí a ó bá sọ̀rọ̀, iye owó àti pípín data sílẹ̀, pẹ̀lú ohun tí drone kò lè ṣe.", exceeds: "Oníbàárà fọwọ́ sí i tàbí fìdí rẹ̀ múlẹ̀ ní kíkọ." },
      { name: "Àyẹ̀wò ibi iṣẹ́ àti ìyọ̀ǹda", objective: "O2", notYet: "Kò sí àyẹ̀wò, tàbí àyẹ̀wò ìyọ̀ǹda àti òfuurufú kò sí.", meets: "Àyẹ̀wò lórí tábìlì àti lórí ilẹ̀ pẹ̀lú máàpù àfọwọ́yà tí ó fi ewu hàn, àyẹ̀wò òfuurufú pẹ̀lú orísun, àti ìyọ̀ǹda ní kíkọ.", exceeds: "Ó ní íńtánẹ́ẹ̀tì fóònù, ibi ààbò fún òṣìṣẹ́ àti ọjọ́ fún àyẹ̀wò kọ̀ọ̀kan." },
      { name: "Àyẹ̀wò ewu", objective: "O3", notYet: "A kọ àwọn ewu láìsí ìdènà.", meets: "Tábìlì tí ó ní ewu, bí ó ṣe lè ṣẹlẹ̀ tó, bí ó ṣe le tó àti ìdènà fún ewu pàtàkì kọ̀ọ̀kan.", exceeds: "Ó sọ nípa ooru, afẹ́fẹ́, òǹwòran, ìsopọ̀ tí ó já àti pápá ọkọ̀ òfuurufú èyíkéyìí nítòsí." },
      { name: "Ètò fífò àti ètò ìpàjáwìrì", objective: "O3", notYet: "Gíga, ìbòrí, bátìrì tàbí ààlà ojú-ọjọ́ kò sí.", meets: "Agbègbè tí a pín sí fífò, gíga, bí àwòrán ṣe kún tó, ìbòrí, ìyára, bátìrì pẹ̀lú àfikún, àkókò, ààlà ojú-ọjọ́ àti ètò ìpàjáwìrì.", exceeds: "Ó fi bí a ṣe ṣírò iye bátìrì hàn àti ọjọ́ àfipamọ́." },
      { name: "Òṣìṣẹ́ àti ìpàdé ìtọ́sọ́nà", objective: "O4", notYet: "Kò sí iṣẹ́ òṣìṣẹ́ tàbí àkọsílẹ̀ ìtọ́sọ́nà.", meets: "Iṣẹ́ òṣìṣẹ́ pẹ̀lú orúkọ àti àkọsílẹ̀ ìtọ́sọ́nà pẹ̀lú ewu, ààlà, ètò ìpàjáwìrì àti ọ̀rọ̀ àṣẹ.", exceeds: "Ó ní ohun èlò ààbò, omi àti bí a ṣe ń pa àwọn òǹwòran mọ́ kúrò." },
      { name: "Píparí iṣẹ́ náà", objective: "O6", notYet: "Kò sí àkọsílẹ̀ àyẹ̀wò lẹ́yìn fífò tàbí ìwé àkọsílẹ̀.", meets: "Àkọsílẹ̀ àyẹ̀wò lẹ́yìn fífò pẹ̀lú àyẹ̀wò data, ẹ̀dà data, ìwé àkọsílẹ̀ fífò àti àwọn ìgbésẹ̀ ìròyìn ìjàǹbá.", exceeds: "Ó ní bí ẹ̀kọ́ láti inú ìjàǹbá ṣe ń tún ìlànà ṣe." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric àpò ìwé iṣẹ́",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn lo àpò ìwé iṣẹ́ tí a kọ sílẹ̀ fún iṣẹ́ oníbàárà gidi láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Àwọn ilé-iṣẹ́ drone tí wọ́n sọ pé títún fò, ìjà tàbí ìjàǹbá ti dín kù lẹ́yìn ìdánilẹ́kọ̀ọ́",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe ẹ̀kọ́ drone míì tàbí tí oníbàárà kan padà wá sọ́dọ̀ wọn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí laptop tí ó ní app máàpù àti àwòrán satẹlaiti",
      "Àpẹẹrẹ ìwé tàbí ìwé àkọsílẹ̀ fún ààlà iṣẹ́, àyẹ̀wò ewu, ètò fífò àti ìwé àkọsílẹ̀ fífò",
      "Drone àti app ìṣètò rẹ̀, tí ó bá wà, fún iṣẹ́ àṣeṣe",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti ṣe àpò ìwé iṣẹ́"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe àpẹẹrẹ àpò ìwé iṣẹ́ kan pọ̀ gẹ́gẹ́ bí ẹgbẹ́ kí àwọn akẹ́kọ̀ọ́ tó ṣe tiwọn.",
      "Ẹ ṣe eré ìpàdé ìtọ́sọ́nà pẹ̀lú awakọ̀, olùwòye àti ẹni tí a ń bá sọ̀rọ̀ ní oko, kí ẹ sì máa ṣe àṣeṣe ọ̀rọ̀ àṣẹ.",
      "Fífò àṣeṣe èyíkéyìí gbọ́dọ̀ tẹ̀lé òfin drone orílẹ̀-èdè náà, pẹ̀lú awakọ̀ tí ó ní ìwé àṣẹ àti àwọn ìyọ̀ǹda tí ó wà ní ipò.",
      "Lo àwọn àpẹẹrẹ iṣẹ́ inú ẹ̀kọ́ yìí tí akẹ́kọ̀ọ́ kò bá tíì ní oníbàárà.",
      "Fi rubric ṣe àmì fún àpò ìwé iṣẹ́, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
