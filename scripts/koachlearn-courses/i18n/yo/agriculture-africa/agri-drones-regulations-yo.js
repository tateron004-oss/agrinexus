"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-drones-regulations.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): àwọn ẹ̀rọ ọkọ̀ òfuurufú aláìní-awakọ̀ (UAS)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Ètò orí ayélujára KCAA fún drone (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const KCAA_FEES = { name: "KCAA: Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020 (L.N. 4 of 2021), àkọsílẹ̀ owó", url: "https://www.kcaa.or.ke/sites/default/files/docs/uas/UASCharges.pdf" };
const KCAA_ROC = { name: "KCAA: Remote Air Operator Certificate (ROC), ìwé-ẹ̀rí olùṣiṣẹ́ drone", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/roc" };
const KCAA_UTO = { name: "KCAA: àwọn ilé-ẹ̀kọ́ ìkọ́ni drone tí a fọwọ́ sí (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_REGS_2026 = { name: "KCAA: Kenya Civil Aviation Regulations 2026 (àwọn ìlànà tí a ṣẹ̀ṣẹ̀ tẹ̀ jáde)", url: "https://www.kcaa.or.ke/published-regs-2026" };
const KENYA_LAW_UAS = { name: "Kenya Law: The Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 (L.N. 42 of 2020)", url: "https://new.kenyalaw.org/akn/ke/act/ln/2020/42" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, ọkọ̀ òfuurufú tí a ń darí láti ọ̀nà jíjìn (RPAS)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_WHO_AERIAL = { name: "FAO àti WHO: ìtọ́sọ́nà fún fífọ́n oògùn apakòkòrò láti ojú òfuurufú (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const PCPB = { name: "Pest Control Products Board (PCPB, Kenya): àjọ tó ń ṣàkóso oògùn apakòkòrò", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nàìjíríà)", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Office of the Data Protection Commissioner (ODPC, Kenya): ààbò ìsọfúnni àdáni", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC): ààbò ìsọfúnni àdáni ní Nàìjíríà", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-drones-regulations-yo",
  lang: "yo",
  translationOf: "agri-drones-regulations",
  category: "Agriculture (Africa)",
  name: "Drone fún Iṣẹ́ Àgbẹ̀ ní Áfíríkà: Òfin Ìrìnnà Òfuurufú àti Ìwé-àṣẹ",
  skills: "Wíwá àti kíka òfin drone orílẹ̀-èdè, Pínpín drone àti iṣẹ́ sí ìpele ewu, Ṣíṣe àkọsílẹ̀ ìwé-àṣẹ àti ìwé-ẹ̀rí tí iṣẹ́ kan nílò, Bíbójútó iṣẹ́ àkànṣe (fífọ́n oògùn, BVLOS, nítòsí pápákọ̀ òfuurufú), Ṣíṣe fáìlì ìtẹ̀lé òfin, Títẹ̀lé ìyípadà òfin",
  outcome: "ka òfin drone orílẹ̀-èdè rẹ, mọ ìforúkọsílẹ̀, ìwé-àṣẹ, ìwé-ẹ̀rí àti àṣẹ tí iṣẹ́ drone oko kan nílò, kí o sì ṣe fáìlì ìtẹ̀lé òfin tó pé fún iṣẹ́ òwò drone.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tí wọ́n fẹ́ máa fò drone gẹ́gẹ́ bí iṣẹ́ nínú iṣẹ́ àgbẹ̀ ní Áfíríkà: àwọn oníṣòwò iṣẹ́ drone, àwọn alákòóso òwò oko àti oko ńlá (estate), àwọn olórí ẹgbẹ́ àjùmọ̀ṣe àti olùkọ́ àgbẹ̀, àti àwọn ọ̀dọ́ tí wọ́n ń kọ́ṣẹ́ awakọ̀ drone. Ó jinlẹ̀ ju àkópọ̀ tí ó wà nínú ọ̀wọ́ ẹ̀kọ́ àbójútó oko.",
    "Orí 1 ṣàlàyé bí a ṣe ń kọ́ òfin drone, lẹ́yìn náà ó ń ṣàlàyé òfin Kenya àti ti Nàìjíríà: Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 tí Kenya Civil Aviation Authority (KCAA) ń bójútó, àti Part 21 nínú Nigeria Civil Aviation Regulations 2023 tí Nigeria Civil Aviation Authority (NCAA) ń bójútó. Orí 2 sọ̀rọ̀ nípa ìwé-àṣẹ awakọ̀ àti ìwé-ẹ̀rí olùṣiṣẹ́, iṣẹ́ àkànṣe bí fífọ́n oògùn àti fífò nítòsí pápákọ̀ òfuurufú, àti bí a ṣe ń ṣe fáìlì ìtẹ̀lé òfin tí a sì ń tọ́jú rẹ̀.",
    "Ẹ̀kọ́ ni èyí, kì í ṣe ìmọ̀ràn òfin. Òfin ni àwọn ìlànà drone, wọ́n ń yí padà, àwọn orílẹ̀-èdè Áfíríkà míì sì ní àjọ àti òfin tiwọn. Ẹ̀kọ́ kọ̀ọ̀kan ń tọ́ka sí orísun ìjọba; ṣàyẹ̀wò gbogbo nǹkan níbẹ̀, tàbí lọ́dọ̀ àjọ náà tàbí agbẹjọ́rò, kí o tó ṣe ohunkóhun. Má ṣe fò láìsí ìforúkọsílẹ̀, ìwé-àṣẹ àti àṣẹ tí orílẹ̀-èdè rẹ ń béèrè láéláé."
  ],
  finalTask: "Ṣe fáìlì ìtẹ̀lé òfin fún iṣẹ́ òwò drone ní orílẹ̀-èdè rẹ tí yóò ya àwòrán-ilẹ̀ (map) oko fún àwọn àgbẹ̀ àti oko ńlá (àti, tí o bá ní in lọ́kàn, tí yóò fọ́n oògùn): àjọ àti àwọn òfin tó kàn án, pẹ̀lú link àti ọjọ́ tí o ṣàyẹ̀wò; ìpínsísọ̀rí drone rẹ àti ìpele ewu iṣẹ́ náà; gbogbo ìforúkọsílẹ̀, ìwé-ìyọ̀ǹda, ìwé-àṣẹ, ìwé-ẹ̀rí àti àṣẹ tí a nílò, ẹni tó ń fún ni, àti ipò rẹ̀; àwọn ìwé tí a nílò (ìwé-ìtọ́sọ́nà iṣẹ́, ìbánigbófò, àkọsílẹ̀ ìtọ́jú àti àkọsílẹ̀ ìfò); àwọn àṣẹ àfikún fún fífọ́n oògùn èyíkéyìí; àwọn ìgbésẹ̀ ààbò ìsọfúnni àdáni; àti ètò àkókò fún ṣíṣàyẹ̀wò ìyípadà òfin àti ìsọdọ̀tun.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí wọ́n fẹ́ máa fò drone gẹ́gẹ́ bí iṣẹ́ nínú iṣẹ́ àgbẹ̀ ní Áfíríkà: àwọn oníṣòwò iṣẹ́ drone, àwọn alákòóso òwò oko àti oko ńlá, àwọn olórí ẹgbẹ́ àjùmọ̀ṣe àti olùkọ́ àgbẹ̀, àti àwọn ọ̀dọ́ tí wọ́n ń kọ́ṣẹ́ awakọ̀ drone, pàápàá ní Kenya àti Nàìjíríà.",
    startingPoint: "Ọ̀pọ̀ jù lọ mọ ohun tí drone oko ń ṣe, àwọn kan sì lè ti fò kékeré kan. Díẹ̀ ló ti ka òfin drone orílẹ̀-èdè wọn, tí wọ́n mọ ìwé-àṣẹ àti ìwé-ẹ̀rí tí iṣẹ́ tí a ń sanwó fún nílò, tàbí tí wọ́n ń tọ́jú àwọn ìwé tí olùbẹ̀wò ìjọba, oníbàárà tàbí ilé-iṣẹ́ ìbánigbófò lè béèrè.",
    gap: "Fífò fún owó láìní ìforúkọsílẹ̀, ìwé-àṣẹ, ìwé-ẹ̀rí olùṣiṣẹ́ tàbí àṣẹ tó tọ́ lè fa owó ìtanràn, gbígba drone lọ́wọ́ ẹni, àti pípàdánù oníbàárà, fífọ́n oògùn láìsí àṣẹ ìrìnnà òfuurufú àti ti oògùn apakòkòrò sì ń fi ènìyàn àti irè oko sínú ewu. Mímọ bí a ṣe ń ka òfin àti bí a ṣe ń ṣe fáìlì ìtẹ̀lé òfin ń jẹ́ kí òwò drone ṣiṣẹ́ lọ́nà òfin, kí ó rí iṣẹ́ gbà, kí ó sì rí ìbánigbófò.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a ṣàlàyé gbogbo ọ̀rọ̀ òfin àti ti ìrìnnà òfuurufú",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì láti ṣí ojú-òpó wẹ́ẹ̀bù àjọ náà kí o sì gba òfin sílẹ̀ (download)",
      "Òfin, owó àti fọ́ọ̀mù ń yí padà: akẹ́kọ̀ọ́ ń ṣàyẹ̀wò gbogbo nǹkan lórí ojú-òpó ìjọba, lọ́dọ̀ àjọ náà tàbí agbẹjọ́rò",
      "Ẹ̀kọ́ ni èyí, kì í ṣe ìmọ̀ràn òfin; kò sí fífò tàbí fífọ́n oògùn kankan nínú ẹ̀kọ́ yìí",
      "Àwọn orílẹ̀-èdè Áfíríkà míì ní àjọ àti òfin tiwọn, nítorí náà akẹ́kọ̀ọ́ ń lo ọ̀nà yìí fún orílẹ̀-èdè tirẹ̀"
    ],
    prerequisites: "A gbà ọ́ níyànjú láti kọ́kọ́ ṣe \"Drone fún Àbójútó Oko 1: Ìfihàn, Òfin àti Ààbò\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún orílẹ̀-èdè tìrẹ", action: "wá òfin drone, àwọn ìlànà ìmúṣẹ àti àkọsílẹ̀ owó àjọ ìrìnnà òfuurufú, kí o sì dárúkọ ìpele kọ̀ọ̀kan nínú òfin drone", standard: "pẹ̀lú link àti ọjọ́ tí o ṣàyẹ̀wò" },
    { id: "O2", condition: "Tí a bá fún ọ ní iṣẹ́ drone oko fún owó ní Kenya", action: "ṣe àkọsílẹ̀ ìforúkọsílẹ̀, ìwé-àṣẹ, ìwé-ẹ̀rí àti àṣẹ KCAA tí ó ṣeé ṣe kí ó nílò", standard: "pẹ̀lú orúkọ òfin tí wọ́n ti wá, àti pé a gbọ́dọ̀ ṣàyẹ̀wò owó ìsinsìnyí àti òfin tuntun" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìwúwo drone kan àti iṣẹ́ tí a ń gbèrò ní Nàìjíríà", action: "pín drone náà àti ìpele ewu iṣẹ́ náà sí ìsọ̀rí lábẹ́ Part 21, kí o sì ṣe àkọsílẹ̀ òdiwọ̀n fífò tó kàn án", standard: "pẹ̀lú ìsọ̀rí ìwúwo àti ìpele ewu tó tọ́" },
    { id: "O4", condition: "Fún iṣẹ́ òwò drone kan", action: "gbèrò ìwé-àṣẹ awakọ̀ àti ìwé-ẹ̀rí olùṣiṣẹ́ tí ó nílò, àti àwọn ìwé tí ìwé-ẹ̀rí olùṣiṣẹ́ ń béèrè", standard: "kí o ya àṣẹ ẹni tó ń fò sọ́tọ̀ kúrò lára àṣẹ fún òwò náà" },
    { id: "O5", condition: "Tí iṣẹ́ kan bá ní fífọ́n oògùn, BVLOS, fífò lóru tàbí pápákọ̀ òfuurufú", action: "dá àwọn àṣẹ àfikún ti ìrìnnà òfuurufú àti ti oògùn apakòkòrò tí ó nílò mọ̀, àti ẹni tó ń fún ni", standard: "kí o tó fi iṣẹ́ náà lọ̀ ẹnikẹ́ni tàbí kí o tó gbèrò rẹ̀" },
    { id: "O6", condition: "Fún òwò drone rẹ", action: "ṣe fáìlì ìtẹ̀lé òfin àti ètò àkókò fún ìsọdọ̀tun àti ṣíṣàyẹ̀wò òfin", standard: "pẹ̀lú gbogbo ìwé tí a nílò ní àkọsílẹ̀ àti ipò ọ̀kọ̀ọ̀kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Òfin drone ní Áfíríkà",
      lessons: [
        {
          objectives: ["O1"],
          title: "Bí a ṣe ń kọ́ òfin drone",
          minutes: 5,
          goal: "Wá kí o sì dárúkọ àwọn ìpele òfin drone tó kan orílẹ̀-èdè rẹ.",
          text: [
            "Àwọn orílẹ̀-èdè ń gbé òfin ìrìnnà òfuurufú wọn ka ìlànà àgbáyé láti ọ̀dọ̀ ICAO, àjọ ìrìnnà òfuurufú àgbáyé ti Àjọ Ìṣọ̀kan Àgbáyé (UN), ṣùgbọ́n orílẹ̀-èdè kọ̀ọ̀kan ló ń kọ òfin drone tirẹ̀ tí ó sì ń mú un ṣẹ. Lọ́pọ̀ ìgbà, òfin ìrìnnà òfuurufú (act) wà tí ilé aṣòfin ṣe; àwọn ìlànà drone (regulations) tí a ṣe lábẹ́ òfin yẹn; ìlànà ìmúṣẹ tàbí ìwé-ìtọ́sọ́nà tí ó ní àlàyé ìmọ̀ ẹ̀rọ; àkọsílẹ̀ owó; àti ìkéde tàbí ìwé àṣẹ fún àwọn ọ̀ràn àkànṣe.",
            "Ọ̀pọ̀ òfin drone òde òní ń pín iṣẹ́ sí ìpele ewu. Fífò tí ewu rẹ̀ kéré (drone kékeré, tí ojú rí, tí kò ga, tí ó jìnnà sí ènìyàn àti pápákọ̀ òfuurufú) ní ohun tí a béèrè tó fúyẹ́ jù. Fífò tí ewu rẹ̀ ga (drone wíwúwo, tí ó kọjá ibi tí ojú rí, lórí ènìyàn, nítòsí pápákọ̀ òfuurufú, fífọ́n oògùn tàbí jíju nǹkan sílẹ̀) nílò jù bẹ́ẹ̀ lọ: àṣẹ, olùṣiṣẹ́ tí a fọwọ́ sí, awakọ̀ tí ó ní ìwé-àṣẹ, àti nígbà míì ọkọ̀ òfuurufú tí a fọwọ́ sí.",
            "Láti rí òfin orílẹ̀-èdè rẹ, lọ sí ojú-òpó wẹ́ẹ̀bù àjọ ìrìnnà òfuurufú, kí o sì wá apá tí wọ́n pè ní drones, UAS, RPAS tàbí unmanned aircraft. Gba àwọn òfin, àwọn ìlànà ìmúṣẹ àti àkọsílẹ̀ owó sílẹ̀, kí o sì kọ ọjọ́ sílẹ̀. Àpẹẹrẹ àwọn àjọ: KCAA (Kenya), NCAA (Nàìjíríà), àti àwọn àjọ ìrìnnà òfuurufú Ghana, Rwanda, Uganda, Tanzania àti South Africa."
          ],
          steps: ["Ṣí ojú-òpó wẹ́ẹ̀bù àjọ ìrìnnà òfuurufú orílẹ̀-èdè rẹ.", "Wá apá drones / UAS / RPAS.", "Gba àwọn òfin, ìlànà ìmúṣẹ àti àkọsílẹ̀ owó sílẹ̀.", "Kọ ọjọ́ àti ẹ̀dà (version) ọ̀kọ̀ọ̀kan sílẹ̀.", "Kọ bí òfin náà ṣe ń pín iṣẹ́ sí ìpele ewu sílẹ̀."],
          words: [["ICAO", "International Civil Aviation Organization, àjọ UN tí ó ń ṣe ìlànà ìrìnnà òfuurufú àgbáyé."], ["Òfin (regulations)", "àwọn ìlànà tí ó di dandan lábẹ́ òfin, tí a ṣe lábẹ́ òfin ilé aṣòfin (act)."], ["Ìlànà ìmúṣẹ (implementing standards)", "àwọn ìlànà ìmọ̀ ẹ̀rọ aláyè tí ó ṣàlàyé bí a ṣe ń tẹ̀lé òfin."], ["Ìpele ewu (risk category)", "àkójọpọ̀ iṣẹ́ tí ewu wọn jọra, tí ohun tí a béèrè fún wọn sì jọra."]],
          slides: [
            { title: "Àwọn ìpele òfin drone", bullets: ["Òfin ìrìnnà òfuurufú (act)", "Òfin drone lábẹ́ act náà", "Ìlànà ìmúṣẹ àti àkọsílẹ̀ owó", "Ìkéde àti ìwé àṣẹ àkànṣe"] },
            { title: "Òfin ń tẹ̀lé ewu", bullets: ["Ewu kékeré: kékeré, ojú rí i, kò ga, jìnnà sí ènìyàn", "Ewu ńlá: wíwúwo, kọjá ibi tí ojú rí, lórí ènìyàn", "Fífọ́n oògùn tàbí jíju nǹkan sílẹ̀: àṣẹ púpọ̀ sí i"] },
            { title: "Wá òfin tìrẹ", bullets: ["Ojú-òpó àjọ náà: drones, UAS tàbí RPAS", "Gba òfin, ìlànà àti àkọsílẹ̀ owó sílẹ̀", "Kọ ọjọ́ àti ẹ̀dà sílẹ̀"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Fún orílẹ̀-èdè rẹ, kọ orúkọ àjọ ìrìnnà òfuurufú, orúkọ àti ọdún òfin drone, bóyá ìlànà ìmúṣẹ àti àkọsílẹ̀ owó wà, àti ọjọ́ tí o ṣàyẹ̀wò. Fi gbogbo ìwé náà pamọ́ sínú fódà kan.",
          youCanNow: "wá àwọn ìpele òfin drone ní orílẹ̀-èdè rẹ, kí o sì rí bí wọ́n ṣe ń pín iṣẹ́ sí ìpele ewu.",
          quickCheck: [
            { objective: "O1", q: "Kí ni àkọsílẹ̀ owó (fee schedule) nínú òfin drone?", options: ["Ètò ìfò", "Àkọsílẹ̀ àwọn awakọ̀", "Àkọsílẹ̀ àwọn àṣẹ tí ó wà àti iye owó ọ̀kọ̀ọ̀kan", "Àsọtẹ́lẹ̀ ojú-ọjọ́"], answer: 2, why: "Àkọsílẹ̀ owó ń ka àwọn àṣẹ àti owó wọn, nítorí náà ó ń fi ohun tí ó wà hàn." },
            { objective: "O1", q: "O fẹ́ òfin drone orílẹ̀-èdè rẹ. Níbo ni o máa kọ́kọ́ wò?", options: ["Ojú-òpó wẹ́ẹ̀bù àjọ ìrìnnà òfuurufú, ní apá drones, UAS tàbí RPAS", "Ìpolówó ẹni tó ń ta drone", "Ẹgbẹ́ kan lórí ìkànnì àjọlò", "Fídíò láti orílẹ̀-èdè míì"], answer: 0, why: "Àjọ ìrìnnà òfuurufú orílẹ̀-èdè kọ̀ọ̀kan ló ń tẹ òfin drone, ìlànà àti owó tirẹ̀ jáde." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kenya: KCAA àti UAS Regulations 2020",
          minutes: 6,
          goal: "Ṣe àkọsílẹ̀ àwọn àṣẹ Kenya tí olùṣiṣẹ́ drone oko fún owó ṣeé ṣe kí ó nílò.",
          text: [
            "Ní Kenya, Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 ló ń ṣàkóso drone. A ṣe é lábẹ́ Civil Aviation Act, 2013, KCAA sì ń bójútó rẹ̀. Ojú-ewé drone KCAA tún ń tẹ Manual of Implementing Standards (ìwé ìlànà ìmúṣẹ) jáde, àti àkọsílẹ̀ owó, ìyẹn Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020.",
            "Àkọsílẹ̀ owó náà fi àwọn àṣẹ pàtàkì tí ó wà hàn: ìwé-ìyọ̀ǹda láti kó drone wọlé (import permit) àti ìforúkọsílẹ̀ drone; ìwé-ẹ̀rí pé ọkọ̀ dára láti fò (airworthiness); Remote Air Operator Certificate (ROC) fún àwọn olùṣiṣẹ́; àṣẹ iṣẹ́ fún Category A àti fún Category B àti C; ìwé-àṣẹ fún ènìyàn, títí kan ìwé-àṣẹ akẹ́kọ̀ọ́ awakọ̀ (SRPL), ìwé-àṣẹ awakọ̀ drone (RPL), àti àwọn ìpele àfikún (ratings) bí fífò kọjá ibi tí ojú rí; àti àṣẹ fún ilé-ẹ̀kọ́ ìkọ́ni àti fún àwọn tí ń ta drone. KCAA ń ṣe àkọsílẹ̀ àwọn tí ó ní ROC àti àwọn ilé-ẹ̀kọ́ tí a fọwọ́ sí lórí ojú-òpó rẹ̀, ìbéèrè sì ń lọ nípasẹ̀ ètò drone orí ayélujára rẹ̀.",
            "Ojú-òpó KCAA tún ń ṣe àkọsílẹ̀ Kenya Civil Aviation Regulations tuntun ti 2026. Ṣàyẹ̀wò bóyá èyíkéyìí nínú wọn yí òfin drone padà kí o tó gbẹ́kẹ̀ lé ẹ̀dà 2020, kí o sì ṣàyẹ̀wò owó ìsinsìnyí ní ọjọ́ tí o bá fi ìbéèrè sílẹ̀."
          ],
          words: [["KCAA", "Kenya Civil Aviation Authority, àjọ tí ó ń ṣàkóso drone ní Kenya."], ["ROC", "Remote Air Operator Certificate: àṣẹ KCAA fún ilé-iṣẹ́ kan láti máa ṣe iṣẹ́ drone."], ["SRPL / RPL", "ìwé-àṣẹ akẹ́kọ̀ọ́ awakọ̀ drone / ìwé-àṣẹ awakọ̀ drone."], ["Ìwé-ẹ̀rí airworthiness", "ìfìdímúlẹ̀ ìjọba pé ọkọ̀ òfuurufú dára, ó sì láìléwu láti fò."]],
          slides: [
            { title: "Òfin drone Kenya", bullets: ["Civil Aviation (UAS) Regulations, 2020", "A ṣe é lábẹ́ Civil Aviation Act, 2013", "KCAA ló ń bójútó o"] },
            { title: "Àwọn àṣẹ inú àkọsílẹ̀ owó", bullets: ["Ìwé-ìyọ̀ǹda ìkówọlé àti ìforúkọsílẹ̀", "ROC fún àwọn olùṣiṣẹ́", "Àṣẹ iṣẹ́: Category A; B àti C", "SRPL, RPL, BVLOS àti àwọn ìpele àfikún míì"] },
            { title: "Ibi tí o ti máa béèrè àti ṣàyẹ̀wò", bullets: ["Ètò drone orí ayélujára KCAA", "Àkọsílẹ̀ àwọn tí ó ní ROC àti ilé-ẹ̀kọ́ ìkọ́ni", "Ṣàyẹ̀wò òfin 2026 àti owó ìsinsìnyí"] }
          ],
          sources: [KCAA_UAS, KENYA_LAW_UAS, KCAA_FEES, KCAA_ROC, KCAA_UTO, KCAA_PORTAL, KCAA_REGS_2026],
          tryIt: "Ṣí ojú-ewé drone KCAA àti àkọsílẹ̀ owó. Ṣe tábìlì gbogbo àṣẹ tí òwò tí ó ń ya àwòrán-ilẹ̀ oko tíì fún owó máa nílò (drone, ènìyàn, ilé-iṣẹ́, iṣẹ́), pẹ̀lú ọ̀wọ̀n fún ibi tí a ti ń béèrè. Kọ \"ṣàyẹ̀wò lọ́jọ́ náà\" fún owó.",
          youCanNow: "ṣe àkọsílẹ̀ ìforúkọsílẹ̀, ìwé-àṣẹ, ìwé-ẹ̀rí àti àṣẹ Kenya tí olùṣiṣẹ́ drone oko fún owó ṣeé ṣe kí ó nílò, àti ibi tí a ti ń béèrè wọn.",
          quickCheck: [
            { objective: "O2", q: "Kí ni RPL ní Kenya?", options: ["Nọ́mbà ìforúkọsílẹ̀ drone", "Ìwé ẹ̀rí ìsanwó", "Ilé-ẹ̀kọ́ ìkọ́ni", "Ìwé-àṣẹ awakọ̀ drone fún ẹni tó ń fò"], answer: 3, why: "Ìwé-àṣẹ awakọ̀ drone (RPL) ni ìwé-àṣẹ fún ẹni tó ń fò." },
            { objective: "O2", q: "O fẹ́ fi ìbéèrè sílẹ̀ lọ́dọ̀ KCAA ní oṣù tó ń bọ̀ pẹ̀lú òfin 2020. Kí ni o máa kọ́kọ́ ṣàyẹ̀wò?", options: ["Kò sí nǹkan; òfin 2020 kì í yí padà láéláé", "Bóyá òfin tuntun tí KCAA ṣẹ̀ṣẹ̀ tẹ̀ jáde yí òfin drone padà, àti owó ìsinsìnyí", "Àwọ̀ drone nìkan", "Ìwé-àṣẹ àtijọ́ aládùúgbò kan"], answer: 1, why: "KCAA ń ṣe àkọsílẹ̀ òfin tuntun, a sì gbọ́dọ̀ ṣàyẹ̀wò owó ní ọjọ́ tí a bá fi ìbéèrè sílẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nàìjíríà: NCAA àti Nig.CARs Part 21",
          minutes: 6,
          goal: "Pín drone àti iṣẹ́ sí ìsọ̀rí lábẹ́ Part 21 Nàìjíríà, kí o sì ṣe àkọsílẹ̀ ohun tí ó ń béèrè.",
          text: [
            "Ní Nàìjíríà, Part 21 (Remotely Piloted Aircraft Systems) nínú Nigeria Civil Aviation Regulations 2023 ló bo drone, ìwé Nig.CARs/2023/021, tí ó bẹ̀rẹ̀ iṣẹ́ ní 17 May 2023, NCAA sì ń bójútó o. Ó bo ìfọwọ́sí, ìforúkọsílẹ̀, iṣẹ́ àti àbójútó RPAS.",
            "Part 21 ń pín ọkọ̀ sí ìsọ̀rí nípa ìwúwo: Nano (kò tó 250 g), Micro (250 g sí ìsàlẹ̀ 2 kg), Small (2 kg sí ìsàlẹ̀ 25 kg), Medium (25 kg sí 150 kg) àti Large (ju 150 kg lọ), ọ̀kọ̀ọ̀kan pẹ̀lú àwọn ipò àti àṣẹ ṣáájú láti ọ̀dọ̀ Àjọ náà. Ó tún ń lo ìpele ewu iṣẹ́ mẹ́ta: Open (ewu tó kéré jù, a gbọ́dọ̀ forúkọ sílẹ̀), Specific (ewu tó ga jù, ó nílò àṣẹ) àti Certified (a fọwọ́ sí ọkọ̀, olùṣiṣẹ́ àti awakọ̀, a sì ń ṣe é bí ọkọ̀ òfuurufú tí ènìyàn wà nínú rẹ̀). Ó ní ìwé-àṣẹ awakọ̀ drone àti ìwé-ẹ̀rí olùṣiṣẹ́ RPAS.",
            "Part 21 tún ń ṣe òdiwọ̀n fífò, fún àpẹẹrẹ fífò ní 120 m (400 ft) tàbí kí ó dín lókè ilẹ̀ ní ọ̀pọ̀ ìgbà, jíjìnnà 30 m ní ẹ̀gbẹ́ sí àwọn ènìyàn tí kò sí nínú iṣẹ́ náà, àìfò lórí ibi tí ènìyàn pọ̀ sí, àti jíjìnnà sí pápákọ̀ òfuurufú (bí láàárín 4 km sí ibi ìrìn ọkọ̀ pápákọ̀ tí a ń ṣàkóso, tàbí 10 km fún fífò àdáni àti ti eré) àyàfi tí a bá fún ọ ní àṣẹ. Ka gbogbo ọ̀rọ̀ òfin náà fún àwọn ipò tó kan iṣẹ́ rẹ."
          ],
          words: [["NCAA", "Nigeria Civil Aviation Authority, àjọ tí ó ń ṣàkóso drone ní Nàìjíríà."], ["Nig.CARs", "Nigeria Civil Aviation Regulations (òfin ìrìnnà òfuurufú Nàìjíríà)."], ["Open / Specific / Certified", "ìpele ewu iṣẹ́ mẹ́ta nínú Part 21, láti ewu tó kéré jù dé èyí tó ga jù."], ["Ibi ìrìn ọkọ̀ (movement area)", "apá pápákọ̀ òfuurufú tí ọkọ̀ ń lò láti gbéra, balẹ̀ àti rìn lórí ilẹ̀."]],
          slides: [
            { title: "Òfin drone Nàìjíríà", bullets: ["Nig.CARs 2023 Part 21: RPAS", "Ó bẹ̀rẹ̀ iṣẹ́ ní 17 May 2023", "NCAA ló ń bójútó o"] },
            { title: "Ìsọ̀rí nípa ìwúwo", bullets: ["Nano < 250 g; Micro 250 g sí < 2 kg", "Small 2 sí < 25 kg; Medium 25-150 kg", "Large > 150 kg"] },
            { title: "Ìpele ewu", bullets: ["Open: ewu tó kéré jù, a forúkọ sílẹ̀", "Specific: ó nílò àṣẹ", "Certified: a fọwọ́ sí ọkọ̀, olùṣiṣẹ́, awakọ̀"] },
            { title: "Àpẹẹrẹ òdiwọ̀n", bullets: ["120 m (400 ft) lókè ilẹ̀ ní ọ̀pọ̀ ìgbà", "30 m sí àwọn ènìyàn tí kò sí nínú iṣẹ́", "Jíjìnnà sí pápákọ̀ òfuurufú àyàfi pẹ̀lú àṣẹ"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Òwò oko kan ní Nàìjíríà fẹ́ ya àwòrán-ilẹ̀ oko ẹ̀gẹ́ ní Ìpínlẹ̀ Ògùn pẹ̀lú multirotor 1.2 kg, àti multirotor 15 kg fún fífọ́n oògùn. Pẹ̀lú Part 21, kọ ìsọ̀rí ìwúwo drone kọ̀ọ̀kan, ìpele ewu tí ó ṣeé ṣe fún iṣẹ́ kọ̀ọ̀kan, àti ìbéèrè mẹ́ta tí o máa béèrè lọ́wọ́ NCAA.",
          youCanNow: "pín drone àti iṣẹ́ sí ìsọ̀rí lábẹ́ Part 21 Nàìjíríà, kí o sì ṣe àkọsílẹ̀ ohun tí ó ń béèrè.",
          quickCheck: [
            { objective: "O3", q: "Lábẹ́ Part 21, ìpele wo ló nílò kí a fọwọ́ sí ọkọ̀, olùṣiṣẹ́ àti awakọ̀?", options: ["Certified", "Open", "Nano", "Micro"], answer: 0, why: "A ń ṣe ìpele Certified bí ọkọ̀ òfuurufú tí ènìyàn wà nínú rẹ̀, pẹ̀lú ọkọ̀, olùṣiṣẹ́ àti awakọ̀ tí a fọwọ́ sí." },
            { objective: "O3", q: "Àgbẹ̀ kan ní Nàìjíríà ní kí o fò ní 10 m sí àwọn ènìyàn ní ọjà abúlé tí kò sí nínú iṣẹ́ náà. Kí ni o máa ṣe?", options: ["Fò sísàlẹ̀ kí ó lè láìléwu", "Fò kíákíá kí o sì lọ", "Jìnnà ó kéré tán 30 m sí àwọn ènìyàn tí kò sí nínú iṣẹ́, kí o sì yẹra fún ibi tí ènìyàn pọ̀ sí àyàfi pẹ̀lú àṣẹ", "Ní kí àwọn ènìyàn náà wo ibòmíì"], answer: 2, why: "Part 21 ń jẹ́ kí ọ̀pọ̀ iṣẹ́ jìnnà 30 m sí àwọn ènìyàn tí kò sí nínú iṣẹ́, kí wọ́n sì jìnnà sí ibi tí ènìyàn pọ̀ sí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Òfin drone ní Áfíríkà",
        questions: [
          { objective: "O1", q: "Níbo ni òfin drone orílẹ̀-èdè ti ń rí agbára òfin rẹ̀?", options: ["Láti inú ìwé-ìtọ́sọ́nà olùṣe drone", "Láti inú òfin tí ilé aṣòfin ṣe (act), bí òfin ìrìnnà òfuurufú", "Láti orí ìkànnì àjọlò", "Láti ọ̀dọ̀ àgbẹ̀"], answer: 1, why: "A ń ṣe òfin drone (regulations) lábẹ́ òfin tí ilé aṣòfin ṣe." },
          { objective: "O1", q: "Iṣẹ́ wo ni ewu rẹ̀ sábà máa ń ga jù?", options: ["Drone kékeré tí ojú rí lórí pápá òfìfo", "Dídúró lókè ní mítà 5", "Drone wíwúwo tí ó ń fọ́n oògùn kọjá ibi tí ojú rí", "Fífò lórí ẹ̀rọ àfarawé (simulator)"], answer: 2, why: "Ìwúwo, BVLOS àti fífọ́n oògùn ń mú kí ewu àti ohun tí a béèrè pọ̀ sí i." },
          { objective: "O2", q: "Ní Kenya, ilé-iṣẹ́ tí ó ń ya àwòrán-ilẹ̀ oko ńlá fún owó nílò àṣẹ olùṣiṣẹ́ wo?", options: ["Remote Air Operator Certificate (ROC) láti ọ̀dọ̀ KCAA", "Káàdì òwò", "Ìwé-ìyọ̀ǹda county nìkan", "Kò sí nǹkan"], answer: 0, why: "KCAA ló ń fún àwọn olùṣiṣẹ́ drone ní ROC." },
          { objective: "O3", q: "Lábẹ́ Part 21 Nàìjíríà, drone 1.2 kg wà nínú ìsọ̀rí ìwúwo wo?", options: ["Nano", "Small", "Large", "Micro"], answer: 3, why: "Micro jẹ́ 250 g sí ìsàlẹ̀ 2 kg." },
          { objective: "O3", q: "Nínú Part 21, ìpele Specific túmọ̀ sí:", options: ["Kò sí òfin kankan", "Ewu tó ga jù; a nílò àṣẹ láti ṣiṣẹ́", "Fún ohun ìṣeré nìkan", "Fún ọkọ̀ òfuurufú tí ènìyàn ń wà nìkan"], answer: 1, why: "Iṣẹ́ Specific ní ewu púpọ̀ sí i, ó sì nílò àṣẹ." }
        ]
      }
    },
    {
      name: "Orí 2: Ìwé-àṣẹ, ìfọwọ́sí àti ìtẹ̀lé òfin",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ìwé-àṣẹ awakọ̀ àti ìwé-ẹ̀rí olùṣiṣẹ́",
          minutes: 5,
          goal: "Gbèrò àwọn àṣẹ fún ènìyàn àti fún ilé-iṣẹ́ nínú òwò iṣẹ́ drone.",
          text: [
            "Oríṣi àṣẹ méjì ló ṣe pàtàkì fún òwò. Ẹni tó ń fò nílò ìwé-àṣẹ awakọ̀ àti àwọn ìpele àfikún tí òfin béèrè; ní Kenya, ìwé-àṣẹ awakọ̀ drone (RPL), tí a kọ́ ní ilé-ẹ̀kọ́ ìkọ́ni tí KCAA fọwọ́ sí; ní Nàìjíríà, ìwé-àṣẹ awakọ̀ drone lábẹ́ Part 21. Ilé-iṣẹ́ tí ó ń ta iṣẹ́ drone sábà máa ń nílò ìwé-ẹ̀rí olùṣiṣẹ́: Remote Air Operator Certificate ti KCAA tàbí RPAS Operator Certificate ti NCAA.",
            "Ìfọwọ́sí olùṣiṣẹ́ sábà máa ń béèrè ẹ̀rí pé òwò náà lè ṣiṣẹ́ láìléwu: ìwé-ìtọ́sọ́nà iṣẹ́ (bí o ṣe ń gbèrò, fò, tọ́jú ẹ̀rọ àti ròyìn), orúkọ àwọn ẹni tó ń dáhùn fún nǹkan, àwọn awakọ̀ tí a kọ́ tí wọ́n sì ní ìwé-àṣẹ, drone tí a forúkọ sílẹ̀, ètò ìtọ́jú ẹ̀rọ, àkọsílẹ̀, àti ìbánigbófò. Fún àpẹẹrẹ, Part 21 ka ìwé-ẹ̀rí ìbánigbófò fún ìpalára sí ẹlòmíì mọ́ àwọn ìwé tí iṣẹ́ kan gbọ́dọ̀ gbé dání.",
            "Ya àkókò àti owó sọ́tọ̀ fún èyí. Béèrè àkọsílẹ̀ ohun tí a nílò àti owó ìsinsìnyí lọ́wọ́ àjọ náà, kí o sì béèrè lọ́wọ́ àwọn ilé-ẹ̀kọ́ ìkọ́ni tí a fọwọ́ sí bóyá wọ́n ń ràn ọ́ lọ́wọ́ pẹ̀lú ìwé-ìtọ́sọ́nà iṣẹ́."
          ],
          steps: ["Kọ gbogbo awakọ̀ sílẹ̀ àti ìwé-àṣẹ àti ìpele àfikún tí ọ̀kọ̀ọ̀kan nílò.", "Ṣàyẹ̀wò ìwé-ẹ̀rí olùṣiṣẹ́ tí òwò rẹ nílò.", "Gba àkọsílẹ̀ ohun tí a nílò fún ìbéèrè ìsinsìnyí lọ́wọ́ àjọ náà.", "Kọ ìwé-ìtọ́sọ́nà iṣẹ́ àkọ́kọ́: ìgbèrò, fífò, ìtọ́jú ẹ̀rọ, pàjáwìrì, ìròyìn.", "Ṣètò ìbánigbófò àti ètò àkọsílẹ̀."],
          words: [["Ìwé-ìtọ́sọ́nà iṣẹ́ (operations manual)", "òfin tí òwò kan kọ sílẹ̀ fún bí ó ṣe ń gbèrò, fò, tọ́jú drone, àti bí ó ṣe ń bójútó pàjáwìrì."], ["Ìbánigbófò fún ìpalára sí ẹlòmíì (third-party liability insurance)", "ìbánigbófò tí ó ń sanwó tí iṣẹ́ rẹ bá pa ènìyàn míì tàbí dúkìá wọn lára."]],
          slides: [
            { title: "Oríṣi àṣẹ méjì", bullets: ["Ẹni tó ń fò: ìwé-àṣẹ awakọ̀ drone àti ìpele àfikún", "Òwò náà: ìwé-ẹ̀rí olùṣiṣẹ́"] },
            { title: "Ìwé-ẹ̀rí olùṣiṣẹ́ ń béèrè", bullets: ["Ìwé-ìtọ́sọ́nà iṣẹ́", "Àwọn ẹni tó ń dáhùn, awakọ̀ tí ó ní ìwé-àṣẹ", "Drone tí a forúkọ sílẹ̀, ìtọ́jú ẹ̀rọ, àkọsílẹ̀", "Ìbánigbófò"] },
            { title: "Gbèrò fún un", bullets: ["Gba àkọsílẹ̀ ohun tí a nílò àti owó ìsinsìnyí", "Béèrè lọ́wọ́ ilé-ẹ̀kọ́ tí a fọwọ́ sí nípa ìwé-ìtọ́sọ́nà", "Fi àkókò sílẹ̀ kí o tó gba iṣẹ́ owó"] }
          ],
          sources: [KCAA_ROC, KCAA_UTO, NCAA_P21],
          tryIt: "Kọ àkọsílẹ̀ àwọn apá (table of contents) ìwé-ìtọ́sọ́nà iṣẹ́ fún òwò kékeré tí ó ń ya àwòrán-ilẹ̀ oko, pẹ̀lú ó kéré tán apá mẹ́jọ (fún àpẹẹrẹ: ètò ilé-iṣẹ́, ojúṣe, ìgbèrò ìfò, àyẹ̀wò ṣáájú ìfò, pàjáwìrì, ìtọ́jú ẹ̀rọ, àkọsílẹ̀, ìròyìn ìjàǹbá).",
          youCanNow: "gbèrò ìwé-àṣẹ awakọ̀ àti ìwé-ẹ̀rí olùṣiṣẹ́ tí òwò iṣẹ́ drone nílò, àti ohun tí ìwé-ìtọ́sọ́nà iṣẹ́ ń bò.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ìwé-ẹ̀rí olùṣiṣẹ́?", options: ["Ìwé-àṣẹ fún ẹni tó ń fò", "Àṣẹ fún ilé-iṣẹ́ tí ó ń ta iṣẹ́ drone", "Nọ́mbà ìdánimọ̀ drone (serial number)", "Àdéhùn oníbàárà"], answer: 1, why: "Ìwé-ẹ̀rí olùṣiṣẹ́, bí ROC ti KCAA tàbí RPAS Operator Certificate ti NCAA, jẹ́ fún òwò náà." },
            { objective: "O4", q: "O ń múra láti béèrè ìwé-ẹ̀rí olùṣiṣẹ́. Ìwé wo ni o máa kọ́kọ́ kọ?", options: ["Ọ̀rọ̀ fún ìkànnì àjọlò", "Àkọsílẹ̀ owó fún oníbàárà", "Àmì (logo) drone", "Ìwé-ìtọ́sọ́nà iṣẹ́ fún ìgbèrò, fífò, ìtọ́jú ẹ̀rọ àti ìròyìn"], answer: 3, why: "Ìfọwọ́sí olùṣiṣẹ́ sábà máa ń béèrè ìwé-ìtọ́sọ́nà iṣẹ́ tí ó fi hàn bí òwò náà ṣe ń ṣiṣẹ́ láìléwu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iṣẹ́ àkànṣe: fífọ́n oògùn, BVLOS àti pápákọ̀ òfuurufú",
          minutes: 6,
          goal: "Dá àwọn iṣẹ́ tí ó nílò àṣẹ àfikún mọ̀, àti ẹni tó ń fún ni ní àṣẹ náà.",
          text: [
            "Fífọ́n oògùn apakòkòrò tàbí jíju ohunkóhun sílẹ̀ láti drone jẹ́ iṣẹ́ àkànṣe. Fún àpẹẹrẹ, Part 21 kọ̀ jíju nǹkan sílẹ̀ tàbí títú nǹkan jáde lọ́nà tí ó lè fa ewu, ó sì ní òfin ọ̀tọ̀ fún ẹrù eléwu (dangerous goods), àkọsílẹ̀ owó Kenya sì ní àṣẹ ọ̀tọ̀ fún àwọn ìpele ewu tó ga jù. Ọ̀pọ̀ oògùn apakòkòrò ni a kà sí ẹrù eléwu. Retí pé o máa nílò àṣẹ ìrìnnà òfuurufú àkànṣe, ọkọ̀ tí ó wúwo jù tí a fọwọ́ sí, àti àwọn òṣìṣẹ́ tí a kọ́.",
            "Òfin oògùn apakòkòrò náà kan fífọ́n oògùn. Ní Kenya, Pest Control Products Board (PCPB) ló ń ṣàkóso oògùn apakòkòrò; ní Nàìjíríà, NAFDAC ló ń ṣàkóso kẹ́míkà oko. Béèrè lọ́wọ́ wọn bóyá a lè fọ́n oògùn náà láti ojú òfuurufú, àti ìkọ́ni àti aṣọ ààbò tí àwọn tí ń fọ́n ọ́n nílò. FAO àti WHO ti tẹ ìtọ́sọ́nà jáde fún fífọ́n oògùn apakòkòrò láti ojú òfuurufú. Má ṣe fọ́n oògùn, tàbí fi iṣẹ́ fífọ́n oògùn lọ̀ ẹnikẹ́ni, láìsí àṣẹ ìrìnnà òfuurufú ÀTI àṣẹ oògùn apakòkòrò láéláé.",
            "Àwọn iṣẹ́ àkànṣe míì ni fífò kọjá ibi tí ojú rí (BVLOS), lóru, nítòsí tàbí ní pápákọ̀ òfuurufú, lórí ènìyàn tàbí ọ̀nà, àti ní àwọn agbègbè tí a dí tàbí tí a ń dáàbò bò bí ọgbà ẹranko ìgbẹ́ orílẹ̀-èdè (national park). Ọ̀kọ̀ọ̀kan nílò àṣẹ àkànṣe. Oko ńlá nítòsí pápá ìbalẹ̀ ọkọ̀ kékeré (airstrip) wọ́pọ̀ ní Áfíríkà: ṣàyẹ̀wò ìjìnnà kí o sì béèrè kí o tó gbèrò."
          ],
          words: [["Ẹrù eléwu (dangerous goods)", "àwọn ohun tí ó lè ṣe ìlera, ààbò tàbí dúkìá léṣe nígbà ìrìnnà, bí ọ̀pọ̀ oògùn apakòkòrò."], ["Àjọ oògùn apakòkòrò", "àjọ ìjọba tí ó ń forúkọ oògùn apakòkòrò sílẹ̀, tí ó sì ń ṣàkóso bí a ṣe ń lò wọ́n."], ["BVLOS", "beyond visual line of sight: fífò kọjá ibi tí ojú awakọ̀ ti lè rí drone."]],
          slides: [
            { title: "Fífọ́n oògùn àti jíju nǹkan sílẹ̀", bullets: ["Iṣẹ́ àkànṣe tí ewu rẹ̀ ga jù", "Àṣẹ ìrìnnà òfuurufú, ọkọ̀ tí a fọwọ́ sí, òṣìṣẹ́ tí a kọ́", "Ọ̀pọ̀ oògùn apakòkòrò jẹ́ ẹrù eléwu"] },
            { title: "Òfin oògùn apakòkòrò náà", bullets: ["Kenya: Pest Control Products Board (PCPB)", "Nàìjíríà: NAFDAC", "Ìtọ́sọ́nà FAO/WHO fún fífọ́n láti òfuurufú"] },
            { title: "Àwọn iṣẹ́ àkànṣe míì", bullets: ["Kọjá ibi tí ojú rí, lóru", "Nítòsí pápákọ̀ òfuurufú, lórí ènìyàn tàbí ọ̀nà", "Ọgbà ẹranko ìgbẹ́ àti agbègbè tí a dí"] },
            { title: "Òfin náà", bullets: ["Kò sí fífọ́n oògùn láìsí àṣẹ ìrìnnà òfuurufú ÀTI ti oògùn", "Béèrè kí o tó gbèrò nítòsí airstrip"] }
          ],
          sources: [NCAA_P21, KCAA_FEES, PCPB, NAFDAC, FAO_WHO_AERIAL],
          tryIt: "Oko ìrèké ńlá kan tí ó jẹ́ 3 km sí airstrip ní kí o fi drone fọ́n oògùn apa-olú (fungicide). Kọ gbogbo àṣẹ àti àyẹ̀wò tí o máa nílò sílẹ̀ (ìrìnnà òfuurufú, oògùn apakòkòrò, onílẹ̀, pápákọ̀ òfuurufú), àti ẹni tí o máa kàn sí fún ọ̀kọ̀ọ̀kan.",
          youCanNow: "dá àwọn iṣẹ́ àkànṣe mọ̀, kí o sì ṣe àkọsílẹ̀ àṣẹ ìrìnnà òfuurufú àti ti oògùn apakòkòrò tí wọ́n nílò.",
          quickCheck: [
            { objective: "O5", q: "Àjọ wo ló ń ṣàkóso kẹ́míkà oko ní Nàìjíríà?", options: ["NCAA", "ODPC", "KCAA", "NAFDAC"], answer: 3, why: "Ní Nàìjíríà, NAFDAC ló ń ṣàkóso kẹ́míkà oko; àṣẹ ìrìnnà òfuurufú ń wá láti NCAA." },
            { objective: "O5", q: "Oko ńlá kan ní kí o fi drone fọ́n oògùn apa-olú ní ọ̀sẹ̀ tó ń bọ̀. Ìwé-àṣẹ awakọ̀ nìkan ni o ní. Kí ni o máa ṣe?", options: ["Má ṣe fi iṣẹ́ fífọ́n oògùn lọ̀ wọ́n títí o fi ní àṣẹ ìrìnnà òfuurufú àti ti oògùn apakòkòrò méjèèjì", "Fọ́n ọ́n ní àárọ̀ kùtùkùtù nígbà tí kò sí ẹnìkan", "Fọ́n ìdajì oko náà nìkan", "Lo drone tí ó fúyẹ́ jù kí o sì fọ́n ọ́n bẹ́ẹ̀"], answer: 0, why: "Fífọ́n oògùn nílò àṣẹ ìrìnnà òfuurufú àkànṣe àti àṣẹ oògùn apakòkòrò; má ṣe fọ́n láìsí méjèèjì láéláé." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣe fáìlì ìtẹ̀lé òfin àti títọ́jú rẹ̀",
          minutes: 5,
          goal: "Ṣe fáìlì ìtẹ̀lé òfin àti ètò àkókò láti jẹ́ kí ó wà lọ́jọ́.",
          text: [
            "Fáìlì ìtẹ̀lé òfin ní gbogbo ohun tí ó fi hàn pé iṣẹ́ rẹ bá òfin mu, ó sì láìléwu, ní ibì kan tí o lè fi hàn olùbẹ̀wò ìjọba, oníbàárà tàbí ilé-iṣẹ́ ìbánigbófò. Tọ́jú ẹ̀dà ìwé àti ẹ̀dà orí kọ̀mpútà tí o ti ṣe àfẹ̀yìntì (backup) rẹ̀.",
            "Fi wọ̀nyí sínú rẹ̀: àwọn òfin àti ìlànà tí o ń tẹ̀lé (pẹ̀lú ọjọ́ tí o ṣàyẹ̀wò); ìwé-ẹ̀rí ìforúkọsílẹ̀ drone kọ̀ọ̀kan; ìwé-ìyọ̀ǹda ìkówọlé; ìwé-àṣẹ awakọ̀ àti ìpele àfikún; ìwé-ẹ̀rí olùṣiṣẹ́; àṣẹ iṣẹ́; ìwé-ìtọ́sọ́nà iṣẹ́; ìwé-ẹ̀rí ìbánigbófò; àkọsílẹ̀ ìtọ́jú ẹ̀rọ; àkọsílẹ̀ ìfò; ìròyìn ìjàǹbá; àdéhùn oníbàárà àti ìyọ̀ǹda onílẹ̀; àti àwọn ìgbésẹ̀ ààbò ìsọfúnni àdáni rẹ (Kenya: ODPC; Nàìjíríà: NDPC) tí o bá ní ìsọfúnni àdáni àwọn àgbẹ̀.",
            "Òfin, owó àti fọ́ọ̀mù ń yí padà. Ní kàlẹ́ńdà ìsọdọ̀tun fún gbogbo ìwé-àṣẹ àti ìwé-ẹ̀rí, kí o sì máa ṣàyẹ̀wò ojú-òpó àjọ náà ní àkókò tí a ti yàn, fún àpẹẹrẹ lóṣooṣù, àti kí o tó bẹ̀rẹ̀ irú iṣẹ́ tuntun kọ̀ọ̀kan. Kọ ohun tí o ṣàyẹ̀wò àti ìgbà tí o ṣe é sílẹ̀."
          ],
          steps: ["Ṣe fáìlì náà: ti ìwé àti ti orí kọ̀mpútà pẹ̀lú àfẹ̀yìntì.", "Fi òfin, ìwé-ẹ̀rí, ìwé-àṣẹ, àṣẹ, ìwé-ìtọ́sọ́nà àti ìbánigbófò kún un.", "Fi àkọsílẹ̀ ìtọ́jú ẹ̀rọ, àkọsílẹ̀ ìfò, ìròyìn ìjàǹbá àti àdéhùn kún un.", "Fi ìforúkọsílẹ̀ tàbí ìgbésẹ̀ ààbò ìsọfúnni kún un tí o bá ní ìsọfúnni àdáni.", "Ṣe kàlẹ́ńdà ìsọdọ̀tun àti àyẹ̀wò òfin lóṣooṣù."],
          words: [["Ìtẹ̀lé òfin (compliance)", "títẹ̀lé àwọn òfin àti ìlànà tí ó kàn ọ́."], ["Ìsọdọ̀tun (renewal)", "bíbéèrè lẹ́ẹ̀kan sí i kí ìwé-àṣẹ tàbí ìwé-ẹ̀rí tó parí."]],
          slides: [
            { title: "Ibì kan fún gbogbo ẹ̀rí", bullets: ["Fún olùbẹ̀wò ìjọba, oníbàárà àti ilé-iṣẹ́ ìbánigbófò", "Ẹ̀dà ìwé àti ẹ̀dà orí kọ̀mpútà pẹ̀lú àfẹ̀yìntì"] },
            { title: "Ohun tí ó máa wà nínú rẹ̀", bullets: ["Òfin, ìforúkọsílẹ̀, ìwé-ìyọ̀ǹda", "Ìwé-àṣẹ, ìwé-ẹ̀rí olùṣiṣẹ́, àṣẹ iṣẹ́", "Ìwé-ìtọ́sọ́nà, ìbánigbófò, ìtọ́jú ẹ̀rọ, àkọsílẹ̀ ìfò, ìjàǹbá"] },
            { title: "Fi wọ̀nyí kún un pẹ̀lú", bullets: ["Àdéhùn oníbàárà àti onílẹ̀", "Ìgbésẹ̀ ààbò ìsọfúnni àdáni (ODPC, NDPC)"] },
            { title: "Jẹ́ kí ó wà lọ́jọ́", bullets: ["Kàlẹ́ńdà ìsọdọ̀tun", "Ṣàyẹ̀wò òfin lóṣooṣù àti ṣáájú irú iṣẹ́ tuntun", "Kọ ohun tí o ṣàyẹ̀wò àti ìgbà tí o ṣe é"] }
          ],
          sources: [KCAA_UAS, KCAA_REGS_2026, NCAA_P21, ODPC, NDPC],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe fáìlì ìtẹ̀lé òfin fún òwò iṣẹ́ drone ní orílẹ̀-èdè rẹ: àjọ àti òfin pẹ̀lú ọjọ́, ìsọ̀rí àti ìpele ewu, gbogbo àṣẹ àti ipò rẹ̀, àwọn ìwé tí a nílò, àṣẹ àfikún fún fífọ́n oògùn tí o bá gbèrò rẹ̀, ìgbésẹ̀ ààbò ìsọfúnni àdáni, àti kàlẹ́ńdà ìsọdọ̀tun àti àyẹ̀wò òfin.",
          youCanNow: "ṣe fáìlì ìtẹ̀lé òfin kí o sì tọ́jú rẹ̀, tí ó fi hàn pé iṣẹ́ drone rẹ bá òfin mu, ó sì láìléwu.",
          quickCheck: [
            { objective: "O6", q: "Kí ló yẹ kí ó wà nínú fáìlì ìtẹ̀lé òfin?", options: ["Ìwé ìrajà drone nìkan", "Àwòrán láti ìfò àtijọ́ nìkan", "Ìwé-àṣẹ, ìwé-ẹ̀rí, àṣẹ, ìwé-ìtọ́sọ́nà iṣẹ́, ìbánigbófò àti àkọsílẹ̀", "Owó tí oníbàárà san nìkan"], answer: 2, why: "Fáìlì ìtẹ̀lé òfin ní gbogbo ohun tí ó fi hàn pé iṣẹ́ rẹ bá òfin mu, ó sì láìléwu." },
            { objective: "O6", q: "Ìwé-àṣẹ awakọ̀ drone rẹ máa parí ní oṣù mẹ́ta. Kí ló máa dá ọ dúró kí o má gbàgbé rẹ̀?", options: ["Dídúró kí KCAA pè ọ́", "Kàlẹ́ńdà ìsọdọ̀tun tí ó ní ọjọ́ gbogbo ìwé-àṣẹ àti ìwé-ẹ̀rí", "Ṣíṣàyẹ̀wò nìkan nígbà tí oníbàárà bá béèrè", "Fífi ìwé-àṣẹ sínú àpótí drone"], answer: 1, why: "Kàlẹ́ńdà ìsọdọ̀tun àti àyẹ̀wò déédéé ń jẹ́ kí gbogbo ìwé-àṣẹ àti ìwé-ẹ̀rí wà lọ́jọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìwé-àṣẹ, ìfọwọ́sí àti ìtẹ̀lé òfin",
        questions: [
          { objective: "O4", q: "Ta ló sábà máa ń nílò ìwé-ẹ̀rí olùṣiṣẹ́?", options: ["Ilé-iṣẹ́ tí ó ń ta iṣẹ́ drone", "Gbogbo àgbẹ̀ tí a ya àwòrán-ilẹ̀ oko rẹ̀", "Ṣọ́ọ̀bù drone", "Kò sí ẹnìkan"], answer: 0, why: "Ìwé-ẹ̀rí olùṣiṣẹ́ ń fọwọ́ sí òwò tí ó ń ṣe iṣẹ́ náà." },
          { objective: "O4", q: "Kí ni ìwé-ìtọ́sọ́nà iṣẹ́?", options: ["Ìwé-ìtọ́sọ́nà olùlò drone", "Òfin tí òwò kan kọ sílẹ̀ fún ìgbèrò, fífò, ìtọ́jú ẹ̀rọ àti pàjáwìrì", "Ìwé ìpolówó", "Ìwé ẹ̀rí ìsanwó"], answer: 1, why: "Àwọn àjọ ń ní kí olùṣiṣẹ́ fi hàn bí wọ́n ṣe ń ṣiṣẹ́ láìléwu." },
          { objective: "O5", q: "Ní Kenya, àjọ wo ló ń ṣàkóso oògùn apakòkòrò?", options: ["KCAA", "ODPC", "Pest Control Products Board (PCPB)", "NDPC"], answer: 2, why: "PCPB ló ń ṣàkóso oògùn apakòkòrò; fífọ́n oògùn tún nílò àṣẹ ìrìnnà òfuurufú." },
          { objective: "O5", q: "Oníbàárà kan fẹ́ kí drone fọ́n oògùn nítòsí airstrip. Ìgbésẹ̀ àkọ́kọ́ rẹ ni:", options: ["Fọ́n ọ́n ní àárọ̀ kùtùkùtù", "Fọ́n ìdajì oko nìkan", "Má ka airstrip náà sí", "Ṣàyẹ̀wò àṣẹ ìrìnnà òfuurufú àti ti oògùn apakòkòrò, àti òfin ìjìnnà sí pápákọ̀ òfuurufú"], answer: 3, why: "Fífọ́n oògùn àti fífò nítòsí pápákọ̀ òfuurufú méjèèjì nílò àṣẹ àkànṣe." },
          { objective: "O6", q: "Ìgbà mélòó ló yẹ kí o máa ṣàyẹ̀wò ìyípadà òfin?", options: ["Ní àkókò tí a ti yàn, bí lóṣooṣù, àti ṣáájú irú iṣẹ́ tuntun", "Láéláé", "Nígbà tí wọ́n bá bù ọ́ ní owó ìtanràn nìkan", "Lẹ́ẹ̀kan ní ọdún mẹ́wàá"], answer: 0, why: "Òfin àti owó ń yí padà; ètò àkókò ń jẹ́ kí o wà lọ́jọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Drone fún Iṣẹ́ Àgbẹ̀ ní Áfíríkà: Òfin Ìrìnnà Òfuurufú àti Ìwé-àṣẹ",
    questions: [
      { objective: "O1", q: "ICAO ni:", options: ["Àjọ tí ó ń ṣàkóso drone ní Kenya", "International Civil Aviation Organization ti UN", "Orúkọ ilé-iṣẹ́ drone kan", "Oògùn apakòkòrò kan"], answer: 1, why: "ICAO ń ṣe ìlànà àgbáyé tí àwọn orílẹ̀-èdè ń kọ́ lé." },
      { objective: "O1", q: "Ta ló ń kọ òfin drone tí ó sì ń mú un ṣẹ ní orílẹ̀-èdè Áfíríkà kọ̀ọ̀kan?", options: ["ICAO fúnra rẹ̀", "Àwọn olùṣe drone", "Àjọ ìrìnnà òfuurufú orílẹ̀-èdè kọ̀ọ̀kan", "African Union nìkan"], answer: 2, why: "Orílẹ̀-èdè kọ̀ọ̀kan ló ń ṣàkóso ojú òfuurufú àti òfin drone tirẹ̀." },
      { objective: "O1", q: "Ìlànà ìmúṣẹ (implementing standards) ni:", options: ["Àwọn ìlànà ìmọ̀ ẹ̀rọ aláyè tí ó ṣàlàyé bí a ṣe ń tẹ̀lé òfin", "Ìlànà ìpolówó", "Oríṣi irè oko", "Ìwé ìbánigbófò"], answer: 0, why: "Wọ́n ní àlàyé ìmọ̀ ẹ̀rọ tí ó wà lẹ́yìn òfin." },
      { objective: "O2", q: "Òfin drone pàtàkì Kenya ni:", options: ["Nig.CARs Part 21", "Data Protection Act 2019", "Pest Control Products Act", "Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020"], answer: 3, why: "KCAA ló ń bójútó UAS Regulations, 2020." },
      { objective: "O2", q: "Àkọsílẹ̀ owó KCAA ní àṣẹ iṣẹ́ fún:", options: ["Category A, àti Category B àti C", "Ohun ìṣeré nìkan", "Ọkọ̀ òfuurufú tí ènìyàn ń wà nìkan", "Ìkówọlé nìkan"], answer: 0, why: "Kenya ń fún ni ní àṣẹ iṣẹ́ nípa ìpele ewu." },
      { objective: "O2", q: "Ní Kenya, ìbéèrè fún àṣẹ drone ń lọ nípasẹ̀:", options: ["Ọ́fíìsì county", "Ètò drone orí ayélujára KCAA", "Ṣọ́ọ̀bù drone", "Ìkànnì àjọlò"], answer: 1, why: "KCAA ní ètò RPAS orí ayélujára." },
      { objective: "O2", q: "Kí o tó gbẹ́kẹ̀ lé òfin drone 2020 ti Kenya, o tún gbọ́dọ̀ ṣàyẹ̀wò:", options: ["Ìwé ìròyìn àtijọ́", "Èrò ọ̀rẹ́ kan", "Òfin tuntun tí KCAA ṣẹ̀ṣẹ̀ tẹ̀ jáde àti owó ìsinsìnyí", "Kò sí nǹkan"], answer: 2, why: "Òfin àti owó lè yí padà; KCAA ń ṣe àkọsílẹ̀ òfin tuntun." },
      { objective: "O3", q: "Òfin drone Nàìjíríà wà nínú:", options: ["UAS Regulations ti Kenya", "Ìtọ́sọ́nà FAO", "Data Protection Act", "Nig.CARs 2023 Part 21"], answer: 3, why: "Part 21 ló bo RPAS ní Nàìjíríà." },
      { objective: "O3", q: "Lábẹ́ Part 21, drone 15 kg wà nínú ìsọ̀rí wo?", options: ["Small", "Nano", "Micro", "Large"], answer: 0, why: "Small jẹ́ 2 kg sí ìsàlẹ̀ 25 kg." },
      { objective: "O3", q: "Ìpele Open nínú Part 21:", options: ["Kò nílò ìforúkọsílẹ̀", "Ewu rẹ̀ kéré jù ṣùgbọ́n a gbọ́dọ̀ forúkọ drone sílẹ̀", "Wà fún drone fífọ́n oògùn tí ó wúwo", "Túmọ̀ sí fífò níbikíbi"], answer: 1, why: "Iṣẹ́ Open ní ewu kékeré, ṣùgbọ́n a ṣì ń forúkọ wọn sílẹ̀." },
      { objective: "O3", q: "Part 21 ń dín ọ̀pọ̀ iṣẹ́ mọ́:", options: ["1,000 m lókè ilẹ̀", "Kò sí òdiwọ̀n", "120 m (400 ft) lókè ilẹ̀", "10 m lókè ilẹ̀"], answer: 2, why: "120 m (400 ft) lókè ilẹ̀ jẹ́ òdiwọ̀n tí ó wọ́pọ̀ nínú Part 21." },
      { objective: "O3", q: "Part 21 ń jẹ́ kí ọ̀pọ̀ iṣẹ́ drone jìnnà ó kéré tán mélòó ní ẹ̀gbẹ́ sí àwọn ènìyàn tí kò sí nínú iṣẹ́?", options: ["1 m", "3 m", "30 m", "300 km"], answer: 2, why: "Part 21 ń lo 30 m sí àwọn ènìyàn tí kò ní nǹkan ṣe pẹ̀lú iṣẹ́ náà." },
      { objective: "O4", q: "Ìwé-àṣẹ awakọ̀ drone wà fún:", options: ["Ẹni tó ń fò", "Drone náà", "Oko náà", "Òwò náà"], answer: 0, why: "Ìwé-àṣẹ wà fún ènìyàn; ìwé-ẹ̀rí wà fún ilé-iṣẹ́ àti ọkọ̀." },
      { objective: "O4", q: "Ìbánigbófò fún ìpalára sí ẹlòmíì ń sanwó nígbà tí:", options: ["Wọ́n jí drone rẹ lọ́wọ́ rẹ", "Iṣẹ́ rẹ pa ènìyàn míì tàbí dúkìá wọn lára", "Owó irè oko bá wálẹ̀", "O bá yege ìdánwò"], answer: 1, why: "Ó ń bo ìpalára sí àwọn ẹlòmíì." },
      { objective: "O5", q: "Ní Nàìjíríà, ta ló ń ṣàkóso kẹ́míkà oko?", options: ["NCAA", "NDPC", "NAFDAC", "KCAA"], answer: 2, why: "NAFDAC ló ń ṣàkóso kẹ́míkà, títí kan kẹ́míkà oko." },
      { objective: "O5", q: "A kà ọ̀pọ̀ oògùn apakòkòrò sí:", options: ["Oúnjẹ", "Ohun ìṣeré", "Ẹ̀yà ara ẹ̀rọ", "Ẹrù eléwu"], answer: 3, why: "Òfin ẹrù eléwu kan gbígbé wọn ní ojú òfuurufú." },
      { objective: "O5", q: "Èwo ni iṣẹ́ àkànṣe tí ó nílò àṣẹ pàtàkì?", options: ["Fífò kọjá ibi tí ojú rí", "Fífò lórí ẹ̀rọ àfarawé (simulator)", "Kíka òfin", "Gbígba agbára bátìrì"], answer: 0, why: "BVLOS ní ewu tó ga jù, ó sì nílò àṣẹ." },
      { objective: "O6", q: "Fáìlì ìtẹ̀lé òfin ni:", options: ["Àkọsílẹ̀ oníbàárà nìkan", "Ibì kan tí ó ní gbogbo ẹ̀rí pé iṣẹ́ rẹ bá òfin mu, ó sì láìléwu", "Ẹ̀yà ara drone", "Àkọlé ara oògùn apakòkòrò"], answer: 1, why: "Ó ní ìwé-ẹ̀rí, ìwé-àṣẹ, ìwé-ìtọ́sọ́nà, àkọsílẹ̀ àti àwọn míì." },
      { objective: "O6", q: "Tí òwò rẹ bá ní nọ́mbà fóònù àwọn àgbẹ̀ ní Kenya, òfin wo ló tún kàn án?", options: ["Kò sí", "Nig.CARs Part 21", "Data Protection Act 2019, tí ODPC ń bójútó", "Ìwé-ìtọ́sọ́nà drone nìkan"], answer: 2, why: "Òfin ààbò ìsọfúnni àdáni Kenya ló bo ìsọfúnni àdáni." },
      { objective: "O1", q: "Ẹ̀kọ́ yìí jẹ́:", options: ["Ìmọ̀ràn òfin fún ọ̀ràn rẹ", "Ìwé-àṣẹ awakọ̀ drone", "Àṣẹ láti fò", "Ẹ̀kọ́; ṣàyẹ̀wò gbogbo nǹkan lọ́dọ̀ àjọ ìjọba"], answer: 3, why: "Òfin ń yí padà; orísun ìjọba àti àwọn akọ́ṣẹ́mọṣẹ́ ló ń pinnu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 3, 7, 8, 12, 14, 16, 17, 19]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú fáìlì ṣe kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      { name: "Àjọ àti òfin", objective: "O1", notYet: "Àjọ tàbí òfin kò sí níbẹ̀, tàbí kò sí link tàbí ọjọ́.", meets: "Àjọ, òfin, ìlànà ìmúṣẹ àti àkọsílẹ̀ owó wà ní àkọsílẹ̀ pẹ̀lú link àti ọjọ́ tí a ṣàyẹ̀wò.", exceeds: "Ó tún kọ òfin tuntun tí a ṣẹ̀ṣẹ̀ tẹ̀ jáde sílẹ̀, àti bí wọ́n ṣe yí iṣẹ́ náà padà." },
      { name: "Ìsọ̀rí àti ewu", objective: "O3", notYet: "Ìsọ̀rí drone tàbí ìpele ewu iṣẹ́ kò sí níbẹ̀ tàbí kò tọ́.", meets: "Ìsọ̀rí drone àti ìpele ewu iṣẹ́ tọ́ fún òfin orílẹ̀-èdè náà.", exceeds: "Ó ṣe àkọsílẹ̀ àwọn òdiwọ̀n fífò tó kàn án, bí gíga àti ìjìnnà sí ènìyàn." },
      { name: "Àwọn àṣẹ tí a nílò", objective: "O2", notYet: "Àwọn àṣẹ kan kò sí níbẹ̀, tàbí a kò dárúkọ ẹni tó ń fún ni.", meets: "Gbogbo ìforúkọsílẹ̀, ìwé-ìyọ̀ǹda, ìwé-àṣẹ, ìwé-ẹ̀rí àti àṣẹ wà ní àkọsílẹ̀ pẹ̀lú ẹni tó ń fún ni àti ipò rẹ̀.", exceeds: "Ó ní owó ìsinsìnyí àti ètò àkókò fún gbígba ọ̀kọ̀ọ̀kan." },
      { name: "Ìwé ènìyàn àti ti òwò", objective: "O4", notYet: "Ìwé-ìtọ́sọ́nà iṣẹ́, ìbánigbófò tàbí àkọsílẹ̀ kò sí níbẹ̀.", meets: "Ìwé-àṣẹ awakọ̀, ìwé-ẹ̀rí olùṣiṣẹ́, ìwé-ìtọ́sọ́nà iṣẹ́, ìbánigbófò, àkọsílẹ̀ ìtọ́jú ẹ̀rọ àti àkọsílẹ̀ ìfò wà ní àkọsílẹ̀.", exceeds: "Ó dárúkọ àwọn ẹni tó ń dáhùn fún nǹkan àti ibi tí a ń tọ́jú ìwé kọ̀ọ̀kan sí." },
      { name: "Fífọ́n oògùn àti iṣẹ́ àkànṣe", objective: "O5", notYet: "A gbèrò fífọ́n oògùn tàbí iṣẹ́ àkànṣe míì láìsí àṣẹ àfikún.", meets: "Àṣẹ àfikún ti ìrìnnà òfuurufú àti ti oògùn apakòkòrò fún iṣẹ́ àkànṣe kọ̀ọ̀kan wà ní àkọsílẹ̀ pẹ̀lú ẹni tó ń fún ni.", exceeds: "Ó ṣàlàyé bí ìjìnnà sí pápákọ̀ òfuurufú àti òfin ẹrù eléwu ṣe kan iṣẹ́ náà." },
      { name: "Jíjẹ́ kí ó wà lọ́jọ́", objective: "O6", notYet: "Kò sí ọjọ́ ìsọdọ̀tun tàbí ètò àyẹ̀wò òfin; kò sí ìgbésẹ̀ ààbò ìsọfúnni àdáni.", meets: "Kàlẹ́ńdà ìsọdọ̀tun, ètò àkókò fún àyẹ̀wò òfin, àti ìgbésẹ̀ ààbò ìsọfúnni àdáni àwọn àgbẹ̀ wà.", exceeds: "Ó ní àkọsílẹ̀ àwọn àyẹ̀wò àtẹ̀yìnwá àti ohun tí ó yí padà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric fáìlì ìtẹ̀lé òfin",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n béèrè ìforúkọsílẹ̀ drone, ìwé-àṣẹ awakọ̀ tàbí ìwé-ẹ̀rí olùṣiṣẹ́ láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé)",
      "Àwọn òwò drone tí àwọn tí ó parí ẹ̀kọ́ ń ṣe, tí wọ́n ní àṣẹ fún gbogbo irú iṣẹ́ tí wọ́n ń fi lọ̀ ènìyàn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe ẹ̀kọ́ drone tó kàn tàbí tí wọ́n bẹ̀rẹ̀ ìkọ́ṣẹ́ awakọ̀ drone tí a fọwọ́ sí"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì láti ṣí ojú-òpó wẹ́ẹ̀bù àjọ ìrìnnà òfuurufú",
      "Ẹ̀dà òfin drone, ìlànà ìmúṣẹ àti àkọsílẹ̀ owó orílẹ̀-èdè náà tí a ti gbà sílẹ̀",
      "Ìwé àkọsílẹ̀ tàbí fódà fún fáìlì ìtẹ̀lé òfin, pẹ̀lú ẹ̀dà orí kọ̀mpútà tí a ti ṣe àfẹ̀yìntì rẹ̀",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti ṣe fáìlì ìtẹ̀lé òfin"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ṣí ojú-ewé drone àjọ náà lójú ẹsẹ̀ kí àwọn akẹ́kọ̀ọ́ lè rí ibi tí a ń tọ́jú òfin sí.",
      "Ṣàyẹ̀wò ojú-òpó ìjọba fún ìyípadà òfin àti owó kí o tó kọ́ ẹ̀kọ́ náà nígbàkúùgbà; má ṣe kọ́ni láti inú àkọsílẹ̀ àtijọ́.",
      "Sọ ní kedere pé ẹ̀kọ́ ni èyí, kì í ṣe ìmọ̀ràn òfin, kí o sì darí ìbéèrè pàtó sí àjọ náà tàbí agbẹjọ́rò.",
      "Má ṣe fò tàbí fọ́n oògùn gẹ́gẹ́ bí apá kan ẹ̀kọ́ náà; má ṣe gba ẹnikẹ́ni níyànjú láti fọ́n oògùn láìsí àṣẹ ìrìnnà òfuurufú àti ti oògùn apakòkòrò méjèèjì láéláé.",
      "Fi rubric ṣe àmì fún fáìlì ìtẹ̀lé òfin, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
