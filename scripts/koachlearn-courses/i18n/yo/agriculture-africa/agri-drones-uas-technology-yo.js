"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-drones-uas-technology.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Àwọn ẹ̀rọ òfuurufú aláìní-awakọ̀ (Unmanned Aircraft Systems)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Apá 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO àti ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-uas-technology-yo",
  lang: "yo",
  translationOf: "agri-drones-uas-technology",
  category: "Agriculture (Africa)",
  name: "Drone fún Iṣẹ́ Àgbẹ̀: Ẹ̀rọ UAS àti Ìtọ́jú Rẹ̀",
  skills: "Dídárúkọ àwọn apá ètò drone àti iṣẹ́ ọ̀kọ̀ọ̀kan, Títọ́jú bátìrì lithium-polymer láìléwu, Yíyan àti bíbójútó ẹrù (payload), Ṣíṣe àyẹ̀wò ṣáájú àti lẹ́yìn ìfò, Títẹ̀lé ètò ìtọ́jú àti àkọsílẹ̀, Wíwá ohun tó fa àwọn àṣìṣe tí ó wọ́pọ̀",
  outcome: "ṣàlàyé bí apá kọ̀ọ̀kan ètò drone iṣẹ́ àgbẹ̀ ṣe ń ṣiṣẹ́, tọ́jú àwọn bátìrì àti ẹrù rẹ̀ láìléwu, kí o sì ṣe ètò ìtọ́jú tí ó ní àyẹ̀wò, ìṣètò àkókò, ìgbésẹ̀ wíwá àṣìṣe àti àkọsílẹ̀ pípé fún drone kan.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn awakọ̀ drone, àwọn oníṣẹ́-ọwọ́ (technician), àwọn iléeṣẹ́ tí ń pèsè iṣẹ́ drone, òṣìṣẹ́ iléeṣẹ́ àgbẹ̀ àti oko ńlá, àti àwọn ọ̀dọ́ tí wọ́n fẹ́ kí drone iṣẹ́ àgbẹ̀ máa fò láìléwu ní Kenya, Nàìjíríà àti káàkiri Áfíríkà.",
    "Orí 1 ṣí ètò drone sílẹ̀: ara rẹ̀ (airframe), mọ́tò àti fáànù (propeller), olùdarí ìfò àti àwọn sensọ̀, ìsopọ̀ rédíò àti ibùdó ilẹ̀, bátìrì àti ẹrù bí kámẹ́rà àti ẹ̀rọ ìfọ́n oògùn. Orí 2 jẹ́ nípa ìtọ́jú: àyẹ̀wò ojoojúmọ́, ìtọ́jú tí a ṣètò, títún àwọn àṣìṣe tí ó wọ́pọ̀ ṣe, ìmúdójúìwọ̀n firmware, àkọsílẹ̀, àti bí a ṣe ń jẹ́ kí drone máa ṣiṣẹ́ nínú eruku, ooru, òjò àti níbi tí iná mànàmáná kò ti dúró.",
    "Máa kọ́kọ́ tẹ̀lé ìwé ìtọ́sọ́nà olùṣe drone náà àti ìwé ìtọ́sọ́nà iṣẹ́ rẹ (operations manual); ẹ̀kọ́ yìí ń kọ́ni ní ọgbọ́n gbogbogbò tí ó wà lẹ́yìn wọn. Àwọn aláṣẹ ọkọ̀ òfuurufú ń retí pé kí àwọn olùlò tọ́jú ẹ̀rọ wọn kí wọ́n sì máa ṣe àkọsílẹ̀, nítorí náà ìtọ́jú tó dára jẹ́ ààbò àti ìgbọràn sí òfin. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò ìtọ́jú fún drone iṣẹ́ àgbẹ̀ kan (gidi tàbí àpẹẹrẹ, bí drone olóríṣiríṣi fáànù tí ẹgbẹ́ àjùmọ̀ṣe kan ń lò fún yíya máàpù): àkọsílẹ̀ àwọn apá pẹ̀lú iṣẹ́ ọ̀kọ̀ọ̀kan, ìlànà ìtọ́jú àti gbígba agbára bátìrì, àkọsílẹ̀ àyẹ̀wò ṣáájú àti lẹ́yìn ìfò, ìṣètò ìtọ́jú nípa wákàtí ìfò àti nípa kàlẹ́ńdà, tábìlì wíwá àṣìṣe fún ó kéré tán àṣìṣe márùn-ún tí ó wọ́pọ̀, àti fọ́ọ̀mù ìwé àkọsílẹ̀ ìtọ́jú pẹ̀lú àpẹẹrẹ àkọsílẹ̀ méjì.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn awakọ̀ drone, oníṣẹ́-ọwọ́, iléeṣẹ́ tí ń pèsè iṣẹ́ drone, òṣìṣẹ́ iléeṣẹ́ àgbẹ̀ àti oko ńlá, àti àwọn ọ̀dọ́ ní Kenya, Nàìjíríà àti káàkiri Áfíríkà tí wọ́n fẹ́ kí drone iṣẹ́ àgbẹ̀ máa fò láìléwu.",
    startingPoint: "Ọ̀pọ̀ jù lọ ti rí tàbí fò drone iṣẹ́ àgbẹ̀ rí, wọ́n sì lè gba agbára bátìrì kí wọ́n sì gbéra pẹ̀lú app. Díẹ̀ ló lè dárúkọ gbogbo apá ètò náà àti iṣẹ́ wọn, tẹ̀lé àkọsílẹ̀ àyẹ̀wò tí a kọ sílẹ̀, ṣètò ìtọ́jú nípa wákàtí ìfò, tàbí máa kọ ìwé àkọsílẹ̀ ìtọ́jú.",
    gap: "Drone wọ́n, wọ́n sì máa ń tètè bàjẹ́ nínú eruku, ooru àti òjò, bátìrì lithium tí a kò bójú tó dáadáa sì lè gbiná. Drone tí ó jábọ́ tàbí tí a dá dúró máa ń pàdánù oníbàárà àti owó, àwọn aláṣẹ, oníbàárà àti iléeṣẹ́ ìdánilójú (insurance) sì ń retí àkọsílẹ̀ ìtọ́jú. Mímọ ètò náà àti ṣíṣe ètò ìtọ́jú ń jẹ́ kí drone wà láìléwu, kí ó máa ṣiṣẹ́, kí ó sì bá òfin mu.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a ṣàlàyé gbogbo ọ̀rọ̀ ìmọ̀-ẹ̀rọ",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà fún ẹ̀kọ́ náà; drone gidi ń ṣèrànwọ́ ṣùgbọ́n kò pọn dandan",
      "Ààbò: bátìrì lithium lè gbiná; kò sí àtúnṣe nínú bátìrì tàbí ẹ̀rọ itanna",
      "Ìwé ìtọ́sọ́nà olùṣe àti ìwé ìtọ́sọ́nà iṣẹ́ ló ṣáájú; ẹ̀kọ́ náà ń kọ́ni ní ọgbọ́n gbogbogbò tí ó wà lẹ́yìn wọn",
      "Ipò oko: eruku, ooru, òjò àti iná mànàmáná tí kò dúró ní ọ̀pọ̀ agbègbè"
    ],
    prerequisites: "A dámọ̀ràn pé kí o kọ́kọ́ ṣe \"Drone fún Àbójútó Oko 1: Ìfihàn, Òfin àti Ààbò\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní ètò drone iṣẹ́ àgbẹ̀ kan", action: "dárúkọ apá pàtàkì kọ̀ọ̀kan ti ẹ̀rọ òfuurufú náà àti ti ètò ilẹ̀, kí o sì ṣàlàyé iṣẹ́ rẹ̀", standard: "pẹ̀lú olùdarí ìfò, àwọn sensọ̀, ìsopọ̀ C2 àti ẹrù" },
    { id: "O2", condition: "Pẹ̀lú àwọn bátìrì drone", action: "ṣàlàyé bí a ṣe ń gba agbára wọn, tọ́jú wọn pamọ́, gbé wọn rìnrìn àjò, àti bí a ṣe ń fẹ̀yìn wọn tì láìléwu", standard: "ní títẹ̀lé gbogbo ìgbésẹ̀ ààbò, láìlo bátìrì kankan tí ó wú tàbí tí ó bàjẹ́" },
    { id: "O3", condition: "Tí a bá fún ọ ní kámẹ́rà, sensọ̀ tàbí ẹ̀rọ ìfọ́n oògùn", action: "ṣàlàyé bí a ṣe ń gbé e kalẹ̀, nù ún, kí a sì ṣàyẹ̀wò rẹ̀", standard: "pẹ̀lú ẹrù tí ó dì mọ́ṣinṣin, lẹ́ńsì tí ó mọ́, àti àwọn apá ìfọ́n tí a ṣàyẹ̀wò fún gbígbó" },
    { id: "O4", condition: "Ṣáájú àti lẹ́yìn ìfò kọ̀ọ̀kan", action: "ṣe àyẹ̀wò ṣáájú ìfò àti lẹ́yìn ìfò, kí o sì kọ ohun tí o rí sílẹ̀", standard: "ní ṣíṣàyẹ̀wò gbogbo nǹkan inú àkọsílẹ̀ àyẹ̀wò" },
    { id: "O5", condition: "Fún drone kan", action: "kọ ìṣètò ìtọ́jú nípa wákàtí ìfò àti kàlẹ́ńdà, ìlànà ìmúdójúìwọ̀n firmware àti ìwé àkọsílẹ̀ ìtọ́jú", standard: "pẹ̀lú àlàfo àkókò \"èyí tí ó bá kọ́kọ́ dé\" àti gbogbo àyè inú ìwé àkọsílẹ̀ tí a kún" },
    { id: "O6", condition: "Tí àṣìṣe kan bá wáyé tàbí tí ipò oko bá le", action: "wá ohun tó fà á ní ìgbésẹ̀ kọ̀ọ̀kan, kí o sì dáàbò bo drone lọ́wọ́ eruku, ooru, òjò àti ìpakúpa iná", standard: "ní dídá drone dúró tí àṣìṣe ààbò bá ń padà wá" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí ètò drone oko ṣe ń ṣiṣẹ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Àwọn apá ètò drone",
          minutes: 6,
          goal: "Dárúkọ àwọn apá pàtàkì ètò drone kí o sì ṣàlàyé iṣẹ́ ọ̀kọ̀ọ̀kan.",
          text: [
            "Àwọn aláṣẹ ń pe drone ní ètò (UAS tàbí RPAS) nítorí pé ẹ̀rọ òfuurufú náà jẹ́ apá kan ṣoṣo. Ètò náà ní ẹ̀rọ òfuurufú, ibùdó ilẹ̀ (ẹ̀rọ ìdarí, fóònù tàbí tablet, sọ́fítíwià), ìsopọ̀ rédíò láàárín wọn (tí a sábà ń pè ní ìsopọ̀ àṣẹ àti ìdarí, tàbí C2), bátìrì àti ẹ̀rọ ìgbàgbára, àti ẹrù (kámẹ́rà, sensọ̀ tàbí ẹ̀rọ ìfọ́n oògùn).",
            "Lórí ẹ̀rọ òfuurufú: ara rẹ̀ (airframe: ara àti apá, tàbí ìyẹ́); mọ́tò àti fáànù tí ń gbé e sókè; àwọn ESC (electronic speed controller) tí ń sọ fún mọ́tò kọ̀ọ̀kan bí yóò ṣe yí tó; olùdarí ìfò (flight controller), ọpọlọ drone náà; àti àwọn sensọ̀: GNSS (ìdánimọ̀ ipò láti sátẹ́láìtì bí GPS), kọ́ńpáàsì, IMU tí ń mọ ìtẹ̀sí àti ìrìn, barometer fún gíga, àti nígbà púpọ̀ sensọ̀ tí ń rí ìdènà.",
            "Olùdarí ìfò ń ka àwọn sensọ̀ ní ọgọ́rọ̀ọ̀rún ìgbà láàárín ìṣẹ́jú-àáyá kan, ó sì ń ṣàtúnṣe mọ́tò kọ̀ọ̀kan kí drone lè dúró dáadáa kí ó sì máa lọ ní ọ̀nà rẹ̀. Tí sensọ̀ kan bá fúnni ní ìsọfúnni tí kò tọ́, bí kọ́ńpáàsì tí ó wà nítòsí irin, gbogbo drone náà lè máa ṣe bákan. Ìdí nìyẹn tí calibration àti yíyan ibi ìgbéra dáadáa fi ṣe pàtàkì."
          ],
          words: [["Airframe", "ara, apá tàbí ìyẹ́ drone."], ["ESC", "electronic speed controller: ó ń darí bí mọ́tò kọ̀ọ̀kan ṣe ń yí tó."], ["Olùdarí ìfò (flight controller)", "kọ̀mpútà inú drone tí ń jẹ́ kí ó dúró dáadáa kí ó sì máa lọ ní ọ̀nà rẹ̀."], ["GNSS", "àwọn ètò sátẹ́láìtì fún wíwá ipò, bí GPS."], ["IMU", "inertial measurement unit: ó ń mọ ìtẹ̀sí, yíyí àti ìrìn."], ["Ìsopọ̀ C2", "ìsopọ̀ àṣẹ àti ìdarí: ìsopọ̀ rédíò láàárín ẹ̀rọ ìdarí àti drone."]],
          slides: [
            { title: "Ètò ni, kì í ṣe ẹ̀rọ òfuurufú nìkan", bullets: ["Ẹ̀rọ òfuurufú", "Ibùdó ilẹ̀: ẹ̀rọ ìdarí, fóònù, sọ́fítíwià", "Ìsopọ̀ rédíò C2", "Bátìrì àti ẹrù"] },
            { title: "Lórí ẹ̀rọ òfuurufú", bullets: ["Ara (airframe), mọ́tò, fáànù", "ESC ń darí mọ́tò kọ̀ọ̀kan", "Olùdarí ìfò: ọpọlọ rẹ̀"] },
            { title: "Àwọn sensọ̀", bullets: ["GNSS fún ipò, kọ́ńpáàsì fún ìhà", "IMU fún ìtẹ̀sí àti ìrìn", "Barometer fún gíga, sensọ̀ ìdènà"] },
            { title: "Ìdí tí ó fi ṣe pàtàkì", bullets: ["Ìsọfúnni sensọ̀ tí kò tọ́ = ìhùwàsí àjèjì", "Ṣe calibration, yan ibi ìgbéra dáadáa"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Mú drone kan (tàbí fọ́tò tàbí àwòrán rẹ̀ tí ó hàn kedere), kí o sì sàmì sí ó kéré tán apá mẹ́jọ: ara, mọ́tò, fáànù, ibi tí olùdarí ìfò wà, GNSS, kámẹ́rà tàbí ẹrù, bátìrì, ẹ̀rọ ìdarí. Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ iṣẹ́ rẹ̀ ní ìlà kan.",
          youCanNow: "dárúkọ àwọn apá ètò drone kí o sì sọ iṣẹ́ ọ̀kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O1", q: "Kí ni olùdarí ìfò (flight controller)?", options: ["Ẹ̀rọ ìdarí tí awakọ̀ ń mú lọ́wọ́", "Ọpọlọ drone tí ń ka sensọ̀ tí ó sì ń ṣàtúnṣe mọ́tò", "Ẹ̀rọ ìgbàgbára bátìrì", "Ibi tí a gbé kámẹ́rà kalẹ̀ sí"], answer: 1, why: "Olùdarí ìfò ń ka sensọ̀ ní ọ̀pọ̀ ìgbà láàárín ìṣẹ́jú-àáyá kan, ó sì ń ṣàtúnṣe mọ́tò kọ̀ọ̀kan kí drone lè dúró dáadáa." },
            { objective: "O1", q: "O fẹ́ gbéra lẹ́gbẹ̀ẹ́ táǹkì omi onírin, drone náà sì ń yà lọ́nà àjèjì. Kí ló ṣeé ṣe kó fà á?", options: ["Fáànù ti tuntun jù", "Ẹrù ti mọ́ jù", "Bátìrì ti kún jù", "Ìsọfúnni kọ́ńpáàsì tí kò tọ́ nítorí irin tí ó wà nítòsí"], answer: 3, why: "Kọ́ńpáàsì tí ó wà nítòsí irin máa ń fúnni ní ìsọfúnni tí kò tọ́, gbogbo drone náà sì lè máa ṣe bákan." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bátìrì: apá tí ó nílò ìtọ́jú jù lọ",
          minutes: 6,
          goal: "Gba agbára, tọ́jú pamọ́, gbé rìnrìn àjò, kí o sì fẹ̀yìn bátìrì drone tì láìléwu.",
          text: [
            "Ọ̀pọ̀ drone ń lo bátìrì lithium-polymer (LiPo) tàbí irú bátìrì lithium mìíràn. Wọ́n ní agbára púpọ̀ fún ìwúwo wọn, ìdí nìyẹn tí wọ́n fi lè gbiná tí wọ́n bá bàjẹ́, tí a bá gba agbára wọn jù, tí a bá lò wọ́n tán pátápátá, tàbí tí wọ́n bá gbóná jù. Ìtọ́jú bátìrì ni iṣẹ́ ìtọ́jú tí ó ṣe pàtàkì jù lọ.",
            "Gba agbára pẹ̀lú ẹ̀rọ ìgbàgbára tí ó tọ́ nìkan, lórí ohun tí kò lè gbiná, má ṣe fi í sílẹ̀ láìsí ẹni tí ń wò ó, má sì gba agbára bátìrì tí ó wú, tí ó ní ihò tàbí tí ó gbóná láéláé. Jẹ́ kí bátìrì tutù lẹ́yìn ìfò kí o tó gba agbára rẹ̀, kí o sì jẹ́ kí ó tutù tàbí kí ó móoru dé ìwọ̀n ìgbóná déédé kí o tó fò. Má ṣe fi bátìrì sílẹ̀ nínú mọ́tò tí ó gbóná tàbí nínú oòrùn tààrà ní oko.",
            "Tí o bá fẹ́ tọ́jú rẹ̀ pamọ́ ju ọjọ́ díẹ̀ lọ, jẹ́ kí bátìrì wà ní ìwọ̀n agbára ìtọ́jú (storage charge: agbára díẹ̀, kò kún, kò sì tán; ọ̀pọ̀ bátìrì olóye ń ṣe èyí fúnra wọn), ní ibi tí ó tutù tí ó sì gbẹ, ó dára jù nínú àpò tàbí àpótí tí iná kò lè jó. Máa ka iye ìgbà tí a ti gba agbára bátìrì kọ̀ọ̀kan (charge cycle) àti ipò rẹ̀. Fẹ̀yìn bátìrì tí ó wú tàbí tí ó bàjẹ́ tì, kí o sì kó o lọ sí ibi tí wọ́n ti ń gba ẹ̀rọ itanna àlòkù (e-waste) tàbí bátìrì, kì í ṣe sínú iná tàbí sínú ààtàn lásán. Gbígbé bátìrì sínú ọkọ̀ òfuurufú ní òfin tirẹ̀ láti ọ̀dọ̀ iléeṣẹ́ ọkọ̀ òfuurufú."
          ],
          steps: ["Fún bátìrì kọ̀ọ̀kan ní nọ́mbà, kí o sì kọ iye cycle rẹ̀ sílẹ̀.", "Gba agbára pẹ̀lú ẹ̀rọ ìgbàgbára tí ó tọ́, lórí ohun tí kò lè gbiná, pẹ̀lú ẹni tí ń wò ó.", "Má ṣe gba agbára tàbí fò pẹ̀lú bátìrì tí ó wú, tí ó ní ihò tàbí tí ó gbóná láéláé.", "Pa bátìrì mọ́ kúrò nínú mọ́tò tí ó gbóná àti oòrùn tààrà.", "Tọ́jú u ní ìwọ̀n agbára ìtọ́jú nínú àpótí tí ó tutù, tí ó gbẹ, tí iná kò lè jó.", "Kó bátìrì tí ó bàjẹ́ lọ sí ibi ìgbàlà tí ó tọ́."],
          words: [["LiPo", "bátìrì lithium-polymer: ó fúyẹ́, ó lágbára, ṣùgbọ́n ó lè gbiná tí a kò bá bójú tó o dáadáa."], ["Charge cycle", "lílo gbogbo agbára bátìrì lẹ́ẹ̀kan, láti kíkún sí lílò tán àti padà."], ["Storage charge", "ìwọ̀n agbára díẹ̀ tí ń jẹ́ kí bátìrì lithium wà ní àlàáfíà nígbà tí a kò lò ó."], ["E-waste", "ẹ̀rọ itanna àlòkù, tí ó nílò ibi ìgbàlà àti àtúnlò pàtàkì."]],
          slides: [
            { title: "Agbára pẹ̀lú ewu", bullets: ["LiPo: agbára púpọ̀ fún ìwúwo rẹ̀", "Ó lè gbiná tí ó bá bàjẹ́ tàbí tí a kò bójú tó o", "Ìtọ́jú bátìrì ni iṣẹ́ àkọ́kọ́"] },
            { title: "Òfin gbígba agbára", bullets: ["Ẹ̀rọ ìgbàgbára tí ó tọ́, ohun tí kò lè gbiná", "Kò gbọdọ̀ wà láìsí ẹni tí ń wò ó", "Kò gbọdọ̀ wú, ní ihò tàbí gbóná"] },
            { title: "Ooru àti ìtọ́jú pamọ́", bullets: ["Kò sí mọ́tò gbígbóná tàbí oòrùn tààrà", "Storage charge, ibi tí ó tutù tí ó gbẹ", "Àpò tàbí àpótí tí iná kò lè jó"] },
            { title: "Kíkà àti fífẹ̀yìn tì", bullets: ["Fún bátìrì ní nọ́mbà, kọ cycle sílẹ̀", "Fẹ̀yìn èyí tí ó wú tàbí bàjẹ́ tì", "Kó o lọ sí ibi ìgbàlà tí ó tọ́"] }
          ],
          tryIt: "Kọ ìlànà bátìrì ojú-ewé kan fún ẹgbẹ́ drone kan: fífún ní nọ́mbà, gbígba agbára, bíbójútó nínú ooru ní oko, ìtọ́jú pamọ́, ìwé àkọsílẹ̀ cycle àti fífẹ̀yìn tì. Fi tábìlì ìwé àkọsílẹ̀ bátìrì kún un, pẹ̀lú àwọn ọwọ̀n fún nọ́mbà bátìrì, ọjọ́, cycle, ipò àti àkíyèsí.",
          youCanNow: "gba agbára, tọ́jú pamọ́, gbé rìnrìn àjò, kí o sì fẹ̀yìn bátìrì drone tì láìléwu, kí o sì máa kọ ìwé àkọsílẹ̀ bátìrì.",
          quickCheck: [
            { objective: "O2", q: "Kí ni storage charge?", options: ["Agbára díẹ̀, kò kún kò sì tán, fún ìtọ́jú pamọ́ tí ó ju ọjọ́ díẹ̀ lọ", "Agbára tí ó kún pátápátá", "Agbára tí ó tán pátápátá", "Gbígba agbára nínú mọ́tò tí ó gbóná"], answer: 0, why: "Bátìrì tí a fẹ́ tọ́jú pamọ́ ju ọjọ́ díẹ̀ lọ máa ń wà ní agbára díẹ̀ ní ibi tí ó tutù tí ó sì gbẹ." },
            { objective: "O2", q: "O ṣẹ̀ṣẹ̀ balẹ̀, o sì fẹ́ tún fò láìpẹ́. Bátìrì náà gbóná. Kí ni o máa ṣe?", options: ["Gba agbára rẹ̀ lẹ́sẹ̀kẹsẹ̀ nínú oòrùn", "Gba agbára rẹ̀ nínú mọ́tò kí o sì kúrò níbẹ̀", "Jẹ́ kí ó tutù kí o tó gba agbára rẹ̀, kí o sì gba á lórí ohun tí kò lè gbiná pẹ̀lú ẹni tí ń wò ó", "Fi í sínú firísà"], answer: 2, why: "Gbígba agbára bátìrì tí ó gbóná tàbí láìsí ẹni tí ń wò ó ń mú ewu iná pọ̀ sí i." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ẹrù (payload): kámẹ́rà, sensọ̀ àti ẹ̀rọ ìfọ́n oògùn",
          minutes: 5,
          goal: "Bójú tó, gbé kalẹ̀, kí o sì tọ́jú àwọn ẹrù pàtàkì ti drone iṣẹ́ àgbẹ̀.",
          text: [
            "Ẹrù (payload) ni ohun tí drone ń gbé láti ṣe iṣẹ́ náà. Drone yíya máàpù ń gbé kámẹ́rà RGB, tí ó sábà wà lórí gimbal tí ń mú un dúró sán-ún. Drone ìlera ohun ọ̀gbìn lè gbé kámẹ́rà multispectral pẹ̀lú sensọ̀ ìmọ́lẹ̀ oòrùn àti pátákó calibration. Kámẹ́rà thermal ń wọn ooru. Drone ìfọ́n oògùn ń gbé táǹkì, pọ́ǹpù, páìpù rọ́bà àti nozzle, àwọn kan sì ń fọ́n hóró tàbí irúgbìn.",
            "Tọ́jú àwọn lẹ́ńsì: jẹ́ kí lẹ́ńsì àti sensọ̀ ìmọ́lẹ̀ oòrùn mọ́ pẹ̀lú aṣọ lẹ́ńsì rírọ̀, fi ìbòrí dáàbò bò wọ́n, kí o sì pa kámẹ́rà mọ́ kúrò nínú eruku àti ọ̀rinrin. Ṣàyẹ̀wò pé gimbal ń yí láìsí ìdíwọ́, àti pé a dé ẹrù mọ́ṣinṣin; ẹrù tí kò dì dáadáa ń da ìwọ̀ntúnwọ̀nsì drone rú, ó sì ń da olùdarí ìfò láàmú.",
            "Ẹ̀rọ ìfọ́n oògùn nílò ìtọ́jú àfikún: lẹ́yìn lílò kọ̀ọ̀kan, a máa ń fi omi fọ̀ ọ́ kí a sì nù ún gẹ́gẹ́ bí olùṣe àti àmì-ìwé oògùn apakòkòrò ṣe béèrè, a máa ń ṣàyẹ̀wò nozzle fún gbígbó àti dídí, a sì máa ń ṣe calibration gbogbo ẹ̀rọ náà kí ó lè fọ́n ìwọ̀n tí ó tọ́. Rántí pé fífọ́n oògùn pẹ̀lú drone nílò ìyọ̀ǹda ọkọ̀ òfuurufú àti ti oògùn apakòkòrò; ìtọ́jú kò rọ́pò wọn."
          ],
          words: [["Ẹrù (payload)", "ẹ̀rọ tí drone ń gbé láti ṣe iṣẹ́ náà, bí kámẹ́rà tàbí táǹkì ìfọ́n."], ["Gimbal", "ìdìmú oní-mọ́tò tí ń mú kámẹ́rà dúró sán-ún."], ["Sensọ̀ ìmọ́lẹ̀ oòrùn", "sensọ̀ kékeré lórí àwọn drone multispectral kan tí ń wọn ìmọ́lẹ̀ tí ń wọlé láti ṣàtúnṣe ìwọ̀n."], ["Nozzle", "ẹnu tí ń sọ omi di ìkán ìfọ́n."]],
          slides: [
            { title: "Àwọn ẹrù tí ó wọ́pọ̀", bullets: ["Kámẹ́rà RGB lórí gimbal", "Multispectral pẹ̀lú sensọ̀ ìmọ́lẹ̀ oòrùn", "Kámẹ́rà thermal", "Táǹkì ìfọ́n, pọ́ǹpù, nozzle; ẹ̀rọ ìfọ́nká"] },
            { title: "Títọ́jú lẹ́ńsì", bullets: ["Nu lẹ́ńsì àti sensọ̀ pẹ̀lú aṣọ rírọ̀", "Ìbòrí wà lórí, kúrò nínú eruku àti ọ̀rinrin", "Gimbal ń yí dáadáa, ìdìmú le"] },
            { title: "Ẹ̀rọ ìfọ́n oògùn", bullets: ["Fọ̀ ọ́ kí o sì nù ún bí olùṣe àti àmì-ìwé ṣe béèrè", "Ṣàyẹ̀wò nozzle fún gbígbó àti dídí", "Ṣe calibration ìwọ̀n; ìyọ̀ǹda ṣì pọn dandan"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Yan ẹrù kan (kámẹ́rà RGB, kámẹ́rà multispectral tàbí ẹ̀rọ ìfọ́n oògùn). Kọ àkọsílẹ̀ ìtọ́jú tí ó ní ó kéré tán nǹkan mẹ́fà fún ṣáájú àti lẹ́yìn lílò kọ̀ọ̀kan.",
          youCanNow: "gbé àwọn ẹrù pàtàkì drone iṣẹ́ àgbẹ̀ kalẹ̀, nù wọ́n, kí o sì ṣàyẹ̀wò wọn.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ẹrù (payload) lórí drone iṣẹ́ àgbẹ̀?", options: ["Bátìrì", "Ibùdó ilẹ̀", "Ohun tí drone ń gbé láti ṣe iṣẹ́ náà, bí kámẹ́rà tàbí ẹ̀rọ ìfọ́n oògùn", "Ìsopọ̀ rédíò"], answer: 2, why: "Ẹrù ni kámẹ́rà, sensọ̀, ẹ̀rọ ìfọ́n tàbí ẹ̀rọ ìfọ́nká tí ń ṣe iṣẹ́ náà." },
            { objective: "O3", q: "Lẹ́yìn iṣẹ́ ìfọ́n oògùn, kí ni o máa ṣe sí ẹ̀rọ ìfọ́n náà?", options: ["Fọ̀ ọ́ kí o sì nù ún bí olùṣe àti àmì-ìwé ṣe béèrè, kí o sì ṣàyẹ̀wò nozzle", "Fi oògùn tí ó ṣẹ́kù sílẹ̀ nínú táǹkì", "Fi omi oníkíkan-agbára fọ gbogbo drone", "Tọ́jú u ní títutù nínú oòrùn"], answer: 0, why: "A máa ń fọ ẹ̀rọ ìfọ́n kí a sì nù ún lẹ́yìn lílò kọ̀ọ̀kan, a sì ń ṣàyẹ̀wò nozzle fún gbígbó àti dídí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí ètò drone oko ṣe ń ṣiṣẹ́",
        questions: [
          { objective: "O1", q: "Kí ló dé tí a fi ń pe drone ní ètò (UAS tàbí RPAS)?", options: ["Ó dún dáadáa jù", "Ó ní ẹ̀rọ òfuurufú, ibùdó ilẹ̀, ìsopọ̀ rédíò, bátìrì àti ẹrù", "Ó ní fáànù púpọ̀", "Iléeṣẹ́ ló ṣe é"], answer: 1, why: "Gbogbo apá pa pọ̀ ló ń jẹ́ kí drone ṣiṣẹ́." },
          { objective: "O1", q: "Kí ni IMU ń mọ̀?", options: ["Ìtẹ̀sí, yíyí àti ìrìn", "Ọ̀rinrin ilẹ̀", "Iye owó ohun ọ̀gbìn", "Àwọ̀ bátìrì"], answer: 0, why: "IMU ń mọ ìrìn drone kí olùdarí ìfò lè mú un dúró dáadáa." },
          { objective: "O2", q: "Bátìrì kan wú díẹ̀ lẹ́yìn ìfò. O yẹ kí o:", options: ["Gba agbára rẹ̀ kíákíá", "Tẹ̀ ẹ́ kí ó tẹ́jú", "Fò pẹ̀lú rẹ̀ lẹ́ẹ̀kan sí i", "Dẹ́kun lílò rẹ̀ kí o sì fẹ̀yìn rẹ̀ tì láìléwu"], answer: 3, why: "Wíwú jẹ́ àmì ìbàjẹ́ àti ewu iná." },
          { objective: "O2", q: "Níbo ni a gbọdọ̀ tọ́jú bátìrì drone sí fún ìsinmi gígùn?", options: ["Ní kíkún nínú mọ́tò tí ó gbóná", "Ní òfo nínú oòrùn tààrà", "Ní storage charge nínú àpótí tí ó tutù, tí ó gbẹ, tí iná kò lè jó", "Nínú iná ilé ìdáná"], answer: 2, why: "Storage charge àti ibi tí ó tutù ń jẹ́ kí bátìrì lithium wà láìléwu àti ní àlàáfíà." },
          { objective: "O3", q: "Kí ni gimbal ń ṣe?", options: ["Ó ń mú kámẹ́rà dúró sán-ún", "Ó ń gba agbára bátìrì", "Ó ń fọ́n oògùn apakòkòrò", "Ó ń wọn gíga"], answer: 0, why: "Gimbal ń mú kámẹ́rà dúró kí àwòrán lè hàn kedere." }
        ]
      }
    },
    {
      name: "Orí 2: Ìtọ́jú ní oko àti ní ibi iṣẹ́ (workshop)",
      lessons: [
        {
          objectives: ["O4"],
          title: "Àyẹ̀wò ṣáájú àti lẹ́yìn ìfò kọ̀ọ̀kan",
          minutes: 5,
          goal: "Ṣe àyẹ̀wò ṣáájú ìfò àti lẹ́yìn ìfò, kí o sì kọ ohun tí o rí sílẹ̀.",
          text: [
            "Àyẹ̀wò ń mú ìṣòro kékeré kí ó tó fa jàǹbá. Àyẹ̀wò ṣáájú ìfò ń ṣàyẹ̀wò pé drone yẹ láti fò báyìí; àyẹ̀wò lẹ́yìn ìfò ń wá ìbàjẹ́ tàbí gbígbó láti ìfò tí a ṣẹ̀ṣẹ̀ ṣe, ó sì ń múra sílẹ̀ fún ọjọ́ kejì.",
            "Ṣáájú ìfò: ara àti apá kò ní ìsàn, apá ti tì pa; fáànù mọ́, ó le, kò sì ní ègé tàbí ìsàn; mọ́tò ń yí láìsí ìhó; ẹrù dì mọ́ṣinṣin, lẹ́ńsì sì mọ́; bátìrì jókòó dáadáa, ó sì ti tì; sensọ̀ àti fèrèsé ìríran mọ́; ẹ̀rọ ìdarí àti app ti ṣetán; a ti ṣàyẹ̀wò ipò firmware kí a tó kúrò ní ibùdó.",
            "Lẹ́yìn ìfò: jẹ́ kí mọ́tò àti bátìrì tutù; ṣàyẹ̀wò ooru mọ́tò (mọ́tò tí ó gbóná ju bí ó ti yẹ lọ lè máa bàjẹ́ lọ); wá ìbàjẹ́ tuntun, eruku tàbí koríko nínú mọ́tò àti ihò afẹ́fẹ́; nu drone pẹ̀lú búrọ́ọ̀ṣì rírọ̀ tàbí aṣọ gbígbẹ (kò sí omi oníkíkan-agbára lórí ẹ̀rọ itanna); kọ àkókò ìfò, ìṣòro àti ìkìlọ̀ èyíkéyìí sínú ìwé àkọsílẹ̀."
          ],
          steps: ["Ṣáájú ìfò: ara, apá, fáànù, mọ́tò, ẹrù, bátìrì, sensọ̀, ẹ̀rọ ìdarí.", "Fò nìkan tí gbogbo nǹkan bá yege.", "Lẹ́yìn ìfò: jẹ́ kí ó tutù, ṣàyẹ̀wò ooru mọ́tò, wá ìbàjẹ́ àti ìdọ̀tí.", "Nu ún pẹ̀lú búrọ́ọ̀ṣì rírọ̀ tàbí aṣọ gbígbẹ.", "Kọ àkókò ìfò, ìṣòro àti ìkìlọ̀ sílẹ̀."],
          words: [["Àyẹ̀wò (inspection)", "wíwò fínnífínní fún ìbàjẹ́, gbígbó tàbí àṣìṣe."], ["Firmware", "sọ́fítíwià tí a kọ́ sínú drone, ẹ̀rọ ìdarí àti bátìrì."]],
          slides: [
            { title: "Àyẹ̀wò méjì", bullets: ["Ṣáájú ìfò: ṣé ó yẹ láti fò báyìí?", "Lẹ́yìn ìfò: ṣé ìbàjẹ́ tàbí gbígbó wà láti òní?"] },
            { title: "Ṣáájú ìfò", bullets: ["Ara, apá ti tì pa, fáànù kò bàjẹ́", "Mọ́tò ń yí dáadáa, ẹrù dì mọ́ṣinṣin", "Bátìrì ti tì, sensọ̀ mọ́, app ti ṣetán"] },
            { title: "Lẹ́yìn ìfò", bullets: ["Jẹ́ kí ó tutù; ṣàyẹ̀wò ooru mọ́tò", "Ìbàjẹ́, eruku, koríko nínú mọ́tò àti ihò afẹ́fẹ́", "Nu ún ní gbígbẹ, kọ àkókò, ìṣòro, ìkìlọ̀"] }
          ],
          tryIt: "Kọ àkọsílẹ̀ àyẹ̀wò ṣáájú ìfò àti lẹ́yìn ìfò, tí ọ̀kọ̀ọ̀kan ní ó kéré tán nǹkan mẹ́jọ, fún drone yíya máàpù. Tí o bá ní drone, lò wọ́n lẹ́ẹ̀kan kí o sì kọ èsì rẹ̀ sílẹ̀.",
          youCanNow: "ṣàyẹ̀wò drone ṣáájú àti lẹ́yìn ìfò kọ̀ọ̀kan, kí o sì kọ ohun tí o rí sílẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ni àyẹ̀wò ṣáájú ìfò wà fún?", options: ["Wíwá ìbàjẹ́ láti ìfò tó kọjá nìkan", "Gbígba agbára bátìrì", "Ìmúdójúìwọ̀n firmware ní oko", "Ṣíṣàyẹ̀wò pé drone yẹ láti fò báyìí"], answer: 3, why: "Àyẹ̀wò ṣáájú ìfò ń ṣàyẹ̀wò pé drone yẹ láti fò kí ó tó gbéra." },
            { objective: "O4", q: "Nígbà àyẹ̀wò ṣáájú ìfò, mọ́tò kan ń hó kàràkàrà nígbà tí o yí i. Kí ni o máa ṣe?", options: ["Fò pẹ̀lú ìṣọ́ra", "Má ṣe fò; ṣàyẹ̀wò mọ́tò fún yanrìn, koríko tàbí ìbàjẹ́", "Fi epo sí fáànù", "Fò iṣẹ́ kúkúrú"], answer: 1, why: "Mọ́tò gbọdọ̀ máa yí dáadáa; ìhó kàràkàrà túmọ̀ sí ìṣòro tí a gbọdọ̀ tún ṣe kí a tó fò." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ìtọ́jú tí a ṣètò, firmware àti àkọsílẹ̀",
          minutes: 5,
          goal: "Ṣètò ìtọ́jú nípa wákàtí ìfò àti kàlẹ́ńdà, kí o sì máa ṣe àkọsílẹ̀ ìtọ́jú.",
          text: [
            "Àwọn apá kan máa ń gbó bí a ṣe ń lò wọ́n. Fáànù, mọ́tò, bearing, gimbal, ẹsẹ̀ ìbalẹ̀, àti pọ́ǹpù àti nozzle ìfọ́n nílò àyípadà ní àkókò tí a ṣètò. Ìwé ìtọ́sọ́nà olùṣe ló ń fúnni ní àlàfo àkókò; ìwé ìtọ́sọ́nà iṣẹ́ rẹ ló ń ṣètò tìrẹ. Ṣètò nípa wákàtí ìfò (fún àpẹẹrẹ ní gbogbo wákàtí 50) àti nípa kàlẹ́ńdà (fún àpẹẹrẹ ní gbogbo oṣù mẹ́ta), èyí tí ó bá kọ́kọ́ dé.",
            "Ìmúdójúìwọ̀n firmware ń tún àṣìṣe ṣe, ó sì ń fi àwọn ohun ààbò kún un, ṣùgbọ́n ìmúdójúìwọ̀n tún lè yí ìhùwàsí padà. Ka release notes, ṣe ìmúdójúìwọ̀n kí o tó kúrò ní ibùdó (kì í ṣe ní oko), ṣe é fún drone, ẹ̀rọ ìdarí àti bátìrì pa pọ̀, kí o sì fi ìfò kúkúrú dán an wò kí o tó ṣe iṣẹ́ gidi.",
            "Máa kọ ìwé àkọsílẹ̀ ìtọ́jú fún drone kọ̀ọ̀kan: ọjọ́, wákàtí ìfò, ohun tí a ṣàyẹ̀wò, tí a pààrọ̀ tàbí tí a tún ṣe, àwọn apá tí a lò, ẹ̀yà firmware, ẹni tí ó ṣe é, àti èsì. Àwọn aláṣẹ ń retí pé kí àwọn olùlò tọ́jú ẹ̀rọ wọn kí wọ́n sì máa ṣe àkọsílẹ̀; oníbàárà àti iléeṣẹ́ ìdánilójú lè béèrè fún wọn pẹ̀lú."
          ],
          steps: ["Ka àlàfo àkókò ìtọ́jú tí olùṣe fúnni.", "Kọ ìṣètò rẹ nípa wákàtí ìfò àti kàlẹ́ńdà.", "Ṣètò ìmúdójúìwọ̀n firmware ní ibùdó, lẹ́yìn kíka release notes, pẹ̀lú ìfò ìdánwò.", "Máa kọ ìwé àkọsílẹ̀ ìtọ́jú fún drone kọ̀ọ̀kan.", "Máa ní fáànù àfikún àti àwọn apá tí ó wọ́pọ̀ nípamọ́."],
          words: [["Ìtọ́jú tí a ṣètò", "àyẹ̀wò àti àyípadà apá tí a ṣètò ní àlàfo àkókò kan pàtó."], ["Ìwé àkọsílẹ̀ ìtọ́jú", "àkọsílẹ̀ gbogbo ìtọ́jú tí a ṣe fún drone kan."], ["Release notes", "àlàyé olùṣe nípa ohun tí ìmúdójúìwọ̀n sọ́fítíwià kan yí padà."]],
          slides: [
            { title: "Àwọn apá máa ń gbó", bullets: ["Fáànù, mọ́tò, bearing, gimbal", "Ẹsẹ̀ ìbalẹ̀, pọ́ǹpù, nozzle", "Pààrọ̀ wọn ní àkókò tí a ṣètò"] },
            { title: "Wákàtí àti kàlẹ́ńdà", bullets: ["Fún àpẹẹrẹ ní gbogbo wákàtí 50 tàbí oṣù 3", "Èyí tí ó bá kọ́kọ́ dé", "Tẹ̀lé ìwé ìtọ́sọ́nà olùṣe"] },
            { title: "Firmware láìléwu", bullets: ["Ka release notes", "Ṣe é ní ibùdó, gbogbo apá pa pọ̀", "Ìfò ìdánwò kí o tó ṣe iṣẹ́ gidi"] },
            { title: "Ìwé àkọsílẹ̀ ìtọ́jú", bullets: ["Ọjọ́, wákàtí, iṣẹ́ tí a ṣe, apá, firmware", "Ẹni tí ó ṣe é àti èsì", "Fún ààbò, aláṣẹ, oníbàárà, iléeṣẹ́ ìdánilójú"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Ṣe tábìlì ìṣètò ìtọ́jú fún drone kan tí ó ní ó kéré tán nǹkan mẹ́fà (fáànù, mọ́tò, gimbal, ẹsẹ̀ ìbalẹ̀, bátìrì, firmware), ọ̀kọ̀ọ̀kan pẹ̀lú àlàfo àkókò ní wákàtí àti ní oṣù, kí o sì bẹ̀rẹ̀ ìwé àkọsílẹ̀ ìtọ́jú pẹ̀lú àpẹẹrẹ àkọsílẹ̀ kan.",
          youCanNow: "ṣètò ìtọ́jú àti ìmúdójúìwọ̀n firmware, kí o sì máa kọ ìwé àkọsílẹ̀ ìtọ́jú tí ó péye.",
          quickCheck: [
            { objective: "O5", q: "Kí ni \"èyí tí ó bá kọ́kọ́ dé\" túmọ̀ sí nínú ìṣètò ìtọ́jú?", options: ["Ṣe iṣẹ́ náà ní gbogbo oṣù mẹ́ta nìkan", "Ṣe iṣẹ́ náà nígbà tí wákàtí ìfò bá pé tàbí tí ọjọ́ kàlẹ́ńdà bá dé, èyí tí ó bá kọ́kọ́ dé", "Fò iṣẹ́ náà sílẹ̀ tí drone bá ń fò dáadáa", "Ṣe iṣẹ́ náà lẹ́yìn jàǹbá nìkan"], answer: 1, why: "Ṣíṣètò nípa wákàtí ìfò àti kàlẹ́ńdà, èyí tí ó bá kọ́kọ́ dé, ń dá àwọn apá dúró kí wọ́n má gbó tán." },
            { objective: "O5", q: "Ìmúdójúìwọ̀n firmware yọ jáde nígbà tí o wà ní oko oníbàárà. Kí ni o máa ṣe?", options: ["Fi í sí i lẹ́sẹ̀kẹsẹ̀ ní oko", "Ṣe é fún drone nìkan, kì í ṣe fún ẹ̀rọ ìdarí", "Pa gbogbo ìmúdójúìwọ̀n títí láé", "Dúró, lẹ́yìn náà ṣe é ní ibùdó lẹ́yìn kíka release notes, kí o sì fi ìfò kúkúrú dán an wò"], answer: 3, why: "Ìmúdójúìwọ̀n lè yí ìhùwàsí padà, nítorí náà a máa ń ṣe é ní ibùdó, gbogbo rẹ̀ pa pọ̀, a sì ń dán an wò kí a tó ṣe iṣẹ́ gidi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Wíwá àṣìṣe àti ipò oko ní Áfíríkà",
          minutes: 6,
          goal: "Wá ohun tó fa àwọn àṣìṣe tí ó wọ́pọ̀ ní ìgbésẹ̀ kọ̀ọ̀kan, kí o sì dáàbò bo drone lọ́wọ́ eruku, ooru, òjò àti ìpakúpa iná.",
          text: [
            "Wá àṣìṣe ní ìgbésẹ̀ kan lẹ́ẹ̀kan: ka ìkìlọ̀ inú app, ṣàyẹ̀wò àwọn ohun tí ó rọrùn jù lọ tí ó lè fà á ní àkọ́kọ́, yí ohun kan padà, kí o sì dán an wò. Àwọn àṣìṣe tí ó wọ́pọ̀: àṣìṣe kọ́ńpáàsì (kúrò nítòsí irin, ọkọ̀ àti wáyà iná, lẹ́yìn náà ṣe calibration tí ó bá béèrè); GNSS tí kò lágbára (dúró de sátẹ́láìtì púpọ̀ sí i, kúrò nítòsí igi gíga); mímì tàbí gbígbọ̀n (ṣàyẹ̀wò fáànù tí ó bàjẹ́ tàbí tí kò le, tàbí apá tí ó tẹ̀); àṣìṣe mọ́tò (ṣàyẹ̀wò koríko, yanrìn tàbí mọ́tò tí ó bàjẹ́); àkókò ìfò kúkúrú (bátìrì tí ó ti gbó, ooru tàbí ẹrù tí ó wúwo).",
            "Eruku àti yanrìn máa ń wọ inú mọ́tò àti gimbal: gbéra láti orí ẹní tàbí tapolí, nu ún lẹ́yìn ìfò, kí o sì tọ́jú u sínú àpótí títì. Ooru ń dín ẹ̀mí bátìrì kù, ó sì lè mú ẹ̀rọ itanna gbóná jù: fi ibòji bo bátìrì àti ẹ̀rọ ìdarí, fò ní àkókò tí ó tutù, kí o sì fún drone ní ìsinmi láàárín ìfò. Òjò àti ọ̀rinrin ń ba ẹ̀rọ itanna jẹ́ àyàfi tí a bá ṣe drone fún wọn: má ṣe fò nínú òjò, gbẹ àwọn ẹ̀rọ, kí o sì tọ́jú wọn pẹ̀lú àpò kékeré tí ń fa ọ̀rinrin.",
            "Níbi tí iná mànàmáná kò ti dúró, ṣètò gbígba agbára: inverter inú ọkọ̀ tàbí ohun èlò ìgbàgbára oòrùn (solar), bátìrì tí ó tó fún ọjọ́ náà, àti gbígba agbára ní òru ní ibùdó. Mọ ìgbà tí o gbọdọ̀ dúró: tí àṣìṣe kan bá ń padà wá tàbí tí ó kan ààbò, dá drone dúró (grounded) kí o sì fi í ránṣẹ́ sí ibùdó àtúnṣe olùṣe tàbí sí oníṣẹ́-ọwọ́ tí ó kúnjú ìwọ̀n."
          ],
          steps: ["Ka ìkìlọ̀ náà gan-an bí ó ti rí.", "Ṣàyẹ̀wò àwọn ohun tí ó rọrùn jù lọ ní àkọ́kọ́.", "Yí ohun kan padà lẹ́ẹ̀kan, lẹ́yìn náà dán an wò.", "Lo ẹní ìbalẹ̀; nu drone kí o sì fi sínú àpótí lẹ́yìn iṣẹ́ eruku.", "Fi ibòji bo bátìrì; fò ní àkókò tí ó tutù; má fò nínú òjò àyàfi tí a bá ṣe é fún un.", "Dá drone dúró tí àṣìṣe ààbò bá ń padà wá."],
          words: [["Wíwá àṣìṣe (troubleshooting)", "wíwá ohun tó fa àṣìṣe ní ìgbésẹ̀ kọ̀ọ̀kan."], ["Calibration", "ìlànà tí ń tún sensọ̀ ṣe, bí kọ́ńpáàsì, kí ó lè máa kà dáadáa."], ["Grounded (a dá a dúró)", "a kò gbà á láàyè láti fò títí a ó fi tún un ṣe."]],
          slides: [
            { title: "Wá àṣìṣe ní ìgbésẹ̀ kọ̀ọ̀kan", bullets: ["Ka ìkìlọ̀ náà", "Àwọn ohun tí ó rọrùn jù ní àkọ́kọ́", "Yí ohun kan padà, lẹ́yìn náà dán an wò"] },
            { title: "Àwọn àṣìṣe tí ó wọ́pọ̀", bullets: ["Àṣìṣe kọ́ńpáàsì: kúrò nítòsí irin, ṣe calibration", "Gbígbọ̀n: fáànù tàbí apá", "Ìfò kúkúrú: bátìrì àtijọ́, ooru, ẹrù wúwo"] },
            { title: "Eruku, ooru àti òjò", bullets: ["Ẹní ìbalẹ̀, nu ún, àpótí títì", "Ibòji fún bátìrì, fò ní àkókò tí ó tutù", "Kò sí òjò àyàfi tí a ṣe é fún un; gbẹ ẹ́, tọ́jú u dáadáa"] },
            { title: "Iná àti òdiwọ̀n", bullets: ["Ìgbàgbára ọkọ̀ tàbí solar, bátìrì àfikún", "Dá drone dúró tí àṣìṣe ààbò bá ń padà wá"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ìtọ́jú fún drone kan: àkọsílẹ̀ àwọn apá pẹ̀lú iṣẹ́ wọn, ìlànà bátìrì, àkọsílẹ̀ àyẹ̀wò ṣáájú àti lẹ́yìn ìfò, ìṣètò nípa wákàtí àti kàlẹ́ńdà, tábìlì wíwá àṣìṣe fún ó kéré tán àṣìṣe márùn-ún, àti fọ́ọ̀mù ìwé àkọsílẹ̀ ìtọ́jú pẹ̀lú àpẹẹrẹ àkọsílẹ̀ méjì.",
          youCanNow: "wá ohun tó fa àwọn àṣìṣe drone tí ó wọ́pọ̀, dáàbò bo drone nínú ipò oko ní Áfíríkà, kí o sì ṣe ètò ìtọ́jú pípé.",
          quickCheck: [
            { objective: "O6", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ nínú wíwá àṣìṣe?", options: ["Ka ìkìlọ̀ náà kí o sì ṣàyẹ̀wò àwọn ohun tí ó rọrùn jù lọ ní àkọ́kọ́", "Pààrọ̀ ọ̀pọ̀ apá lẹ́ẹ̀kan náà", "Ṣí bátìrì", "Fò sókè sí i láti dán an wò"], answer: 0, why: "Ka ìkìlọ̀, ṣàyẹ̀wò àwọn ohun tí ó rọrùn ní àkọ́kọ́, yí ohun kan padà kí o sì dán an wò." },
            { objective: "O6", q: "O máa fò láti àárọ̀ di alẹ́ ní oko tí ó gbóná, tí eruku pọ̀, tí kò sì ní iná. Kí ni o máa ṣètò?", options: ["Bátìrì kan àti gbígbéra láti orí yanrìn lásán", "Fi bátìrì sílẹ̀ nínú oòrùn kí wọ́n lè móoru", "Ẹní fún ìgbéra, ibòji fún bátìrì, àkókò tí ó tutù, àti bátìrì tí ó tó tí a ti gba agbára wọn tàbí ìgbàgbára solar tàbí ti ọkọ̀", "Fò láìjẹ́ kí drone sinmi"], answer: 2, why: "Ẹní ń dí eruku, ibòji àti àkókò tí ó tutù ń dáàbò bo bátìrì, a sì gbọdọ̀ ṣètò gbígba agbára níbi tí iná kò ti dúró." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìtọ́jú ní oko àti ní ibi iṣẹ́ (workshop)",
        questions: [
          { objective: "O4", q: "Fáànù kan ní ègé kékeré ní etí rẹ̀. O yẹ kí o:", options: ["Fò pẹ̀lú ìṣọ́ra", "Fi téèpù lẹ̀ ẹ́", "Pààrọ̀ rẹ̀ kí o tó fò", "Fi ìwé yanrìn dán an kí o sì fò"], answer: 2, why: "Fáànù tí ó bàjẹ́ ń fa gbígbọ̀n, ó sì lè já nígbà ìfò." },
          { objective: "O4", q: "Lẹ́yìn ìfò, mọ́tò kan gbóná ju àwọn yòókù lọ gan-an. Èyí lè túmọ̀ sí:", options: ["Mọ́tò náà ń bàjẹ́ lọ tàbí ohun kan dí i", "Drone fò dáadáa", "Kámẹ́rà ti dọ̀tí", "Bátìrì jẹ́ tuntun"], answer: 0, why: "Ooru tí kò wọ́pọ̀ lè fi hàn pé bearing ti bàjẹ́, ìdọ̀tí wà níbẹ̀, tàbí mọ́tò ń bàjẹ́ lọ." },
          { objective: "O5", q: "Ìgbà wo ni o yẹ kí o fi ìmúdójúìwọ̀n firmware sí i?", options: ["Ní àárín oko oníbàárà", "Nígbà ìfò", "Láéláé", "Ní ibùdó, lẹ́yìn kíka release notes, lẹ́yìn náà fò láti dán an wò"], answer: 3, why: "Ìmúdójúìwọ̀n lè yí ìhùwàsí padà; dán an wò kí o tó ṣe iṣẹ́ gidi." },
          { objective: "O6", q: "App fi àṣìṣe kọ́ńpáàsì hàn nígbà ìgbéra. Ìgbésẹ̀ àkọ́kọ́ tó dára ni:", options: ["Gbéra bẹ́ẹ̀ náà", "Kúrò nítòsí irin, ọkọ̀ àti wáyà iná, kí o sì ṣe calibration tí ó bá béèrè", "Yọ kọ́ńpáàsì kúrò", "Fò ní sport mode"], answer: 1, why: "Irin àti ohun olófà-mànàmáná (magnet) ń da kọ́ńpáàsì láàmú." },
          { objective: "O6", q: "Báwo ni o ṣe ń dáàbò bo drone lọ́wọ́ eruku ní oko gbígbẹ?", options: ["Gbéra láti orí ẹní, nu ún lẹ́yìn ìfò, tọ́jú u sínú àpótí títì", "Fi páìpù omi fọ̀ ọ́", "Fò súnmọ́ ilẹ̀ sí i", "Fi í sílẹ̀ láìbò"], answer: 0, why: "Eruku ń ba mọ́tò àti gimbal jẹ́; ẹní, nínù àti àpótí ń ṣèrànwọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Drone fún Iṣẹ́ Àgbẹ̀: Ẹ̀rọ UAS àti Ìtọ́jú Rẹ̀",
    questions: [
      { objective: "O1", q: "Ìsopọ̀ C2 ni:", options: ["Irú bátìrì kan", "Ìsopọ̀ rédíò láàárín ẹ̀rọ ìdarí àti drone", "Ìwọ̀n fáànù kan", "Lẹ́ńsì kámẹ́rà"], answer: 1, why: "Ìsopọ̀ àṣẹ àti ìdarí ń gbé àṣẹ àti ìsọfúnni." },
      { objective: "O1", q: "Àwọn ESC ń darí:", options: ["Sísún kámẹ́rà mọ́ (zoom)", "Ìtọ́jú bátìrì pamọ́", "Bí mọ́tò kọ̀ọ̀kan ṣe ń yí tó", "Sátẹ́láìtì GPS"], answer: 2, why: "Electronic speed controller ló ń wakọ̀ àwọn mọ́tò." },
      { objective: "O1", q: "Olùdarí ìfò ni:", options: ["Ọpọlọ inú drone tí ń jẹ́ kí ó dúró dáadáa", "Ẹni tí ń fò ó", "Àpótí ìdarí láti ọ̀nà jíjìn", "Pápá ìbalẹ̀"], answer: 0, why: "Ó ń ka sensọ̀, ó sì ń ṣàtúnṣe mọ́tò ní ọ̀pọ̀ ìgbà láàárín ìṣẹ́jú-àáyá kan." },
      { objective: "O1", q: "GNSS ń fún drone ní:", options: ["Àwọ̀ rẹ̀", "Ìwọ̀n ooru rẹ̀", "Ìwọ̀n agbára bátìrì rẹ̀", "Ipò rẹ̀ láti sátẹ́láìtì"], answer: 3, why: "GNSS, bí GPS, ń fúnni ní ipò." },
      { objective: "O1", q: "Barometer lórí drone ń wọn:", options: ["Ìhà tí afẹ́fẹ́ ń fẹ́ sí", "Ìtẹ̀wọ̀n afẹ́fẹ́, tí a fi ń mọ gíga", "Ìlera ohun ọ̀gbìn", "Cycle bátìrì"], answer: 1, why: "Ìtẹ̀wọ̀n afẹ́fẹ́ ń yí padà bí gíga ṣe ń yí padà." },
      { objective: "O2", q: "Kí ló dé tí bátìrì LiPo fi lè léwu?", options: ["Wọ́n wúwo", "Wọ́n ń pariwo", "Wọ́n lè gbiná tí wọ́n bá bàjẹ́, tí a gba agbára wọn jù, tàbí tí wọ́n gbóná jù", "Wọn kì í gba agbára rárá"], answer: 2, why: "Agbára púpọ̀ nínú wọn túmọ̀ sí ewu ńlá tí a kò bá bójú tó wọn." },
      { objective: "O2", q: "A gbọdọ̀ gba agbára bátìrì:", options: ["Pẹ̀lú ẹ̀rọ ìgbàgbára tí ó tọ́, pẹ̀lú ẹni tí ń wò ó, lórí ohun tí kò lè gbiná", "Ní gbogbo òru lórí bẹ́ẹ̀dì", "Nínú mọ́tò tí ó gbóná", "Pẹ̀lú ẹ̀rọ ìgbàgbára èyíkéyìí tí ó bá wọ̀ ọ́"], answer: 0, why: "Àwọn ìgbésẹ̀ wọ̀nyí ń dín ewu iná kù." },
      { objective: "O2", q: "Charge cycle ni:", options: ["Apá kan kẹ̀kẹ́", "Ètò ìfò", "Ìlànà ojú ọjọ́", "Lílo gbogbo agbára bátìrì lẹ́ẹ̀kan"], answer: 3, why: "Kíkọ cycle sílẹ̀ ń fi bí bátìrì ṣe ń gbó hàn." },
      { objective: "O2", q: "Bátìrì drone tí ó bàjẹ́ tí a fẹ̀yìn rẹ̀ tì gbọdọ̀ lọ sí:", options: ["Iná ìdáná", "Ibi ìgbàlà e-waste tàbí bátìrì tí ó tọ́", "Ààtàn lásán", "Odò"], answer: 1, why: "Bátìrì lithium nílò ibi ìgbàlà àti àtúnlò tí kò léwu." },
      { objective: "O3", q: "Sensọ̀ ìmọ́lẹ̀ oòrùn ti drone multispectral:", options: ["Ń gba agbára bátìrì", "Ń wọn afẹ́fẹ́", "Ń wọn ìmọ́lẹ̀ tí ń wọlé láti ṣàtúnṣe ìwọ̀n", "Ń fọ́n omi"], answer: 2, why: "Ó ń ṣèrànwọ́ láti ṣàtúnṣe fún ìmọ́lẹ̀ tí ń yí padà." },
      { objective: "O3", q: "Ẹrù tí kò dì dáadáa lè:", options: ["Da ìwọ̀ntúnwọ̀nsì àti ìdarí drone rú", "Mú fọ́tò dára sí i", "Mú drone fúyẹ́ sí i", "Gba agbára kíákíá"], answer: 0, why: "Olùdarí ìfò ń retí ẹrù tí ó dì mọ́ṣinṣin tí ó sì wà ní ìwọ̀ntúnwọ̀nsì." },
      { objective: "O3", q: "A gbọdọ̀ ṣàyẹ̀wò nozzle ìfọ́n fún:", options: ["Àwọ̀", "Àmì orúkọ ọjà", "Orin", "Gbígbó àti dídí"], answer: 3, why: "Nozzle tí ó gbó tàbí tí ó dí ń fọ́n ìwọ̀n tí kò tọ́." },
      { objective: "O3", q: "Ṣé ìtọ́jú ẹ̀rọ ìfọ́n tí ó dára ń rọ́pò ìyọ̀ǹda fífọ́n oògùn?", options: ["Bẹ́ẹ̀ ni", "Rárá; ìyọ̀ǹda ọkọ̀ òfuurufú àti ti oògùn apakòkòrò ṣì pọn dandan", "Ní oko kékeré nìkan", "Ní òru nìkan"], answer: 1, why: "Ìtọ́jú àti ìyọ̀ǹda òfin jẹ́ ohun méjì ọ̀tọ̀ọ̀tọ̀ tí a nílò." },
      { objective: "O4", q: "A máa ń ṣe àyẹ̀wò lẹ́yìn ìfò láti:", options: ["Gba agbára ẹ̀rọ ìdarí", "Ṣètò oníbàárà tó kàn", "Wá ìbàjẹ́ tàbí gbígbó láti ìfò tí a ṣẹ̀ṣẹ̀ ṣe", "Ṣàtúnṣe fọ́tò"], answer: 2, why: "Ó ń mú ìṣòro kí ìfò tó kàn tó dé." },
      { objective: "O4", q: "Báwo ni o ṣe máa nu drone lẹ́yìn ìfò inú eruku?", options: ["Búrọ́ọ̀ṣì rírọ̀ tàbí aṣọ gbígbẹ", "Omi oníkíkan-agbára", "Ìwé yanrìn", "Pẹ́tírọ́ọ̀lù"], answer: 0, why: "Omi àti kẹ́míkà lè ba ẹ̀rọ itanna jẹ́." },
      { objective: "O5", q: "A máa ń ṣètò ìtọ́jú nípa:", options: ["Àwọ̀ nìkan", "Ojú ọjọ́ nìkan", "Oníbàárà nìkan", "Wákàtí ìfò àti kàlẹ́ńdà, èyí tí ó bá kọ́kọ́ dé"], answer: 3, why: "Àwọn apá máa ń gbó nípa lílò àti nípa àkókò." },
      { objective: "O5", q: "Ìwé àkọsílẹ̀ ìtọ́jú ń kọ sílẹ̀:", options: ["Iye owó drone nìkan", "Ọjọ́, wákàtí, iṣẹ́ tí a ṣe, apá, firmware, ẹni tí ó ṣe é, èsì", "Nọ́mbà fóònù àwọn àgbẹ̀", "Iye owó ohun ọ̀gbìn"], answer: 1, why: "Àkọsílẹ̀ pípé ń ṣe àtìlẹ́yìn fún ààbò àti ìgbọràn sí òfin." },
      { objective: "O6", q: "Drone ń mì nígbà ìfò. Kọ́kọ́ ṣàyẹ̀wò:", options: ["Máàpù oníbàárà", "Àsọtẹ́lẹ̀ ojú ọjọ́ fún oṣù tó ń bọ̀", "Fáànù àti apá fún ìbàjẹ́ tàbí àìle", "Káàdì ìrántí (memory card)"], answer: 2, why: "Fáànù tí ó bàjẹ́ àti apá tí ó tẹ̀ ń fa gbígbọ̀n." },
      { objective: "O6", q: "Nínú ojú ọjọ́ tí ó gbóná gan-an, o yẹ kí o:", options: ["Fi ibòji bo bátìrì kí o sì fò ní àkókò tí ó tutù", "Fi bátìrì sílẹ̀ nínú oòrùn", "Máa fò láìdúró láìsinmi", "Gba agbára bátìrì nígbà tí wọ́n gbóná"], answer: 0, why: "Ooru ń dín ẹ̀mí bátìrì kù, ó sì ń ni ẹ̀rọ itanna lára." },
      { objective: "O6", q: "Àṣìṣe ààbò kan ń padà wá lẹ́yìn àtúnṣe rẹ. O yẹ kí o:", options: ["Máa fò bẹ́ẹ̀ náà", "Fi pamọ́ fún oníbàárà", "Bo ìkìlọ̀ náà mọ́lẹ̀", "Dá drone dúró kí o sì fi í ránṣẹ́ sí oníṣẹ́-ọwọ́ tí ó kúnjú ìwọ̀n"], answer: 3, why: "Àṣìṣe ààbò tí ń padà wá nílò àtúnṣe ọ̀jọ̀gbọ́n kí a tó fò." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 2, 5, 6, 9, 12, 13, 15, 17, 19]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún un ṣàyẹ̀wò.",
    criteria: [
      { name: "Àkọsílẹ̀ àwọn apá", objective: "O1", notYet: "Àwọn apá pàtàkì kò sí, tàbí a kò ṣàlàyé iṣẹ́ wọn.", meets: "A kọ gbogbo apá pàtàkì ẹ̀rọ òfuurufú àti ètò ilẹ̀ sílẹ̀ pẹ̀lú iṣẹ́ wọn.", exceeds: "Ó sọ àwọn apá tí ó máa ń gbó àti àwọn tí ó nílò calibration." },
      { name: "Ìtọ́jú bátìrì", objective: "O2", notYet: "Ìgbésẹ̀ gbígba agbára, ìtọ́jú pamọ́ tàbí fífẹ̀yìn tì kò sí tàbí wọ́n léwu.", meets: "Ìgbésẹ̀ gbígba agbára láìléwu, títutù, storage charge, gbígbé rìnrìn àjò àti fífẹ̀yìn tì, pẹ̀lú kíka cycle.", exceeds: "Ó ní ètò ìdáhùn sí iná fún ibi gbígba agbára." },
      { name: "Àkọsílẹ̀ àyẹ̀wò", objective: "O4", notYet: "Kò sí àkọsílẹ̀ àyẹ̀wò, tàbí àwọn nǹkan pàtàkì bí fáànù àti títì bátìrì kò sí.", meets: "Àkọsílẹ̀ àyẹ̀wò ṣáájú àti lẹ́yìn ìfò ní ara, fáànù, mọ́tò, ẹrù, bátìrì, sensọ̀ àti àkíyèsí ìwé àkọsílẹ̀.", exceeds: "Àyẹ̀wò ẹrù bá iṣẹ́ gidi drone náà mu, bí yíya máàpù tàbí fífọ́n oògùn." },
      { name: "Ìṣètò àti ìwé àkọsílẹ̀", objective: "O5", notYet: "Kò sí àlàfo àkókò, tàbí ìwé àkọsílẹ̀ kò ní gbogbo àyè rẹ̀.", meets: "Ìṣètò nípa wákàtí ìfò àti kàlẹ́ńdà, ìlànà firmware, àti fọ́ọ̀mù ìwé àkọsílẹ̀ pẹ̀lú àpẹẹrẹ àkọsílẹ̀ méjì.", exceeds: "A mú àlàfo àkókò láti inú ìwé ìtọ́sọ́nà olùṣe, a sì kọ orísun rẹ̀ sílẹ̀." },
      { name: "Tábìlì wíwá àṣìṣe", objective: "O6", notYet: "Àṣìṣe tí kò tó márùn-ún, tàbí kò sí ìgbésẹ̀.", meets: "Ó kéré tán àṣìṣe márùn-ún tí ó wọ́pọ̀, ọ̀kọ̀ọ̀kan pẹ̀lú àyẹ̀wò àkọ́kọ́ tí ó rọrùn àti ìgbà tí a ó dá drone dúró.", exceeds: "Ó fi ìgbésẹ̀ fún eruku, ooru, òjò àti ìpakúpa iná ní oko akẹ́kọ̀ọ́ fúnra rẹ̀ kún un." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ti ètò ìtọ́jú",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń lo àkọsílẹ̀ àyẹ̀wò tí a kọ sílẹ̀ àti ìwé àkọsílẹ̀ ìtọ́jú lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn iléeṣẹ́ drone tàbí ẹgbẹ́ àjùmọ̀ṣe tí wọ́n ròyìn pé jàǹbá, ìṣẹ̀lẹ̀ bátìrì tàbí ọjọ́ tí a dá drone dúró ti dín kù lẹ́yìn ìdánilẹ́kọ̀ọ́",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe ẹ̀kọ́ drone tó kàn tàbí ìdánilẹ́kọ̀ọ́ oníṣẹ́-ọwọ́ ti olùṣe drone"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà fún àwọn ẹ̀kọ́; drone iṣẹ́ àgbẹ̀ gidi, tàbí fọ́tò rẹ̀ tí ó hàn kedere, fún àṣeṣe",
      "Ìwé ìtọ́sọ́nà olùṣe drone náà, tí ó bá wà",
      "Ìwé àkọsílẹ̀ tàbí spreadsheet fún àkọsílẹ̀ àyẹ̀wò, ìṣètò àti ìwé àkọsílẹ̀ ìtọ́jú",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti kọ ètò ìtọ́jú náà"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ rìn yí drone gidi kan ká (tí a ti pa, tí a sì ti yọ fáànù rẹ̀) láti dárúkọ apá kọ̀ọ̀kan.",
      "Ẹ bójú tó bátìrì lórí ohun tí kò lè gbiná nìkan, ẹ má sì gba agbára, lu ihò sí tàbí ṣí bátìrì tí ó wú nínú kíláàsì láéláé.",
      "Ẹ lo ìwé ìtọ́sọ́nà drone náà fúnra rẹ̀ fún àlàfo àkókò àti ìlànà; ẹ̀kọ́ náà ń fúnni ní ọ̀nà gbogbogbò nìkan.",
      "Ẹ má ṣe lo ẹ̀rọ ìfọ́n pẹ̀lú oògùn apakòkòrò nínú kíláàsì; ẹ ṣe àṣeṣe àyẹ̀wò pẹ̀lú omi mímọ́ tàbí láìsí omi kankan.",
      "Ẹ fi rubric ṣe àmì fún ètò ìtọ́jú náà, kí ẹ sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
