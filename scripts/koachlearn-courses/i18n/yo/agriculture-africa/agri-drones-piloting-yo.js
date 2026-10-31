"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-drones-piloting.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_UTO = { name: "KCAA: Unmanned Aircraft Systems Training Organizations (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_PORTAL = { name: "KCAA: ètò ayélujára fún drone (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-piloting-yo",
  lang: "yo",
  translationOf: "agri-drones-piloting",
  category: "Agriculture (Africa)",
  name: "Drone fún Àbójútó Oko 6: Ẹ̀kọ́ Fífo Drone lórí Ayélujára",
  skills: "Lílo àwọn ọ̀pá ìdarí, Ṣíṣe ìdánrawò fífò nínú simulator, Yíyan àti yíyí ọ̀nà fífò padà, Bíbójútó pàjáwìrì (àsopọ̀ já, bátìrì kéré, GPS sọnù), Kíkọ ìwé àkọsílẹ̀ fífò, Ṣíṣe ètò láti gba ìwé àṣẹ awakọ̀ drone",
  outcome: "fo àwọn ìdánrawò déédéé láìkọsẹ̀ nínú simulator drone, bójú tó àwọn pàjáwìrì pàtàkì pẹ̀lú ìfọkànbalẹ̀, kọ ìwé àkọsílẹ̀ fífò dáadáa, kí o sì tẹ̀lé ètò tirẹ tó yé láti gba ìwé àṣẹ awakọ̀ drone lọ́wọ́ àjọ ìjọba tó ń bójú tó ìrìn òfuurufú ní orílẹ̀-èdè rẹ.",
  about: [
    "Èyí ni ẹ̀kọ́ ìkẹyìn nínú ọ̀wọ́ ẹ̀kọ́ drone fún àbójútó oko, fún ẹnikẹ́ni ní Kenya, Nàìjíríà tàbí ibòmíì ní Áfíríkà tí ó fẹ́ di awakọ̀ drone tó mọṣẹ́, tó sì ní ìwé àṣẹ fún iṣẹ́ àgbẹ̀. A ṣe é láti ṣe lórí ayélujára: ọ̀pọ̀ àṣeṣe máa ń wáyé nínú simulator drone (ètò kọ̀mpútà tí ó ń ṣe bí ẹni pé o ń fo drone) tí ó jẹ́ ọ̀fẹ́ tàbí tí kò wọ́n, lórí kọ̀mpútà tàbí fóònù. Nítorí náà o lè ṣàṣìṣe láìfọ́ drone gidi, láìsì rú òfin kankan.",
    "Orí 1 ń kọ́ ọ ní àwọn ìdarí, àwọn ìdánrawò, àti àwọn ọ̀nà fífò tí drone rẹ lè ní. Orí 2 ń kọ́ ọ ní ohun tí o máa ṣe nígbà pàjáwìrì, bí o ṣe lè kọ ìwé àkọsílẹ̀ fífò, àti àwọn ìgbésẹ̀ láti gba ìwé àṣẹ awakọ̀ drone.",
    "Ó ṣe pàtàkì: ẹ̀kọ́ yìí kò fún ọ ní ìwé àṣẹ, kò sì fún ọ ní àṣẹ láti fo drone. Ní Kenya àti Nàìjíríà, bí ó ti rí ní ọ̀pọ̀ orílẹ̀-èdè, àjọ ìjọba tó ń bójú tó ìrìn òfuurufú ló ń fúnni ní ìwé àṣẹ awakọ̀ drone, lẹ́yìn ìdánilẹ́kọ̀ọ́ ní ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí àti yíyege àwọn ìdánwò rẹ̀. Má ṣe fo drone gidi láéláé láìsí ìforúkọsílẹ̀, ìwé àṣẹ àti àwọn ìyọ̀ǹda tí orílẹ̀-èdè rẹ ń béèrè."
  ],
  finalTask: "Nínú simulator drone, parí àwọn ìdánrawò márààrún inú ẹ̀kọ́ yìí (dídúró lójú kan, àpótí, nọ́mbà 8, yíyípo àti ìlà ẹ̀rọ gígé koríko) títí o fi lè fo ọ̀kọ̀ọ̀kan láìkọsẹ̀ ní ìgbà mẹ́ta tẹ̀léra, ṣe ìdánrawò pàjáwìrì mẹ́tẹ̀ẹ̀ta, kọ gbogbo ìgbà tí o ṣe àṣeṣe sínú ìwé àkọsílẹ̀ fífò, kí o sì kọ ètò ìwé àṣẹ tirẹ ní ojú-ewé kan: àjọ ìjọba orílẹ̀-èdè rẹ, àwọn ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí tí o rí, ìwé àṣẹ tí o nílò, àwọn ìgbésẹ̀, àwọn ìwé tí wọ́n máa béèrè, iye owó tí a fojú bù láti orísun ìjọba, àti àwọn ọjọ́ tí o fẹ́ parí wọn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ẹnikẹ́ni ní Kenya, Nàìjíríà tàbí ibòmíì ní Áfíríkà tí ó fẹ́ di awakọ̀ drone tó mọṣẹ́, tó sì ní ìwé àṣẹ fún iṣẹ́ àgbẹ̀, tí ó ń ṣe ẹ̀kọ́ ìkẹyìn nínú ọ̀wọ́ ẹ̀kọ́ drone fún àbójútó oko lórí ayélujára.",
    startingPoint: "Àwọn akẹ́kọ̀ọ́ mọ ohun tí drone ń ṣe lórí oko, àwọn òfin ìpìlẹ̀ àti bí a ṣe ń ya àwòrán ilẹ̀ (Ẹ̀kọ́ 1 sí 5). Ọ̀pọ̀ lára wọn kò tíì fi ọwọ́ di ọ̀pá ìdarí púpọ̀ tàbí rárá, wọn kò tíì ṣe àṣeṣe pàjáwìrì rí, wọn kò ní ìwé àkọsílẹ̀ fífò, wọn kò sì mọ àwọn ìgbésẹ̀, àwọn ìwé àti àwọn ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí fún ìwé àṣẹ awakọ̀ drone.",
    gap: "Àwọn awakọ̀ tuntun máa ń fọ́ drone nígbà tí ẹ̀rù bá bà wọ́n nígbà pàjáwìrì, nígbà tí GPS bá sọnù tàbí nígbà tí iwájú drone bá kọjú sí wọn; àwọn kan sì ń sanwó fún ilé-ẹ̀kọ́ tí wọn kò fọwọ́ sí tàbí ń fo láìní ìwé àṣẹ. Ṣíṣe ìdánrawò àti àṣeṣe pàjáwìrì nínú simulator, kíkọ ìwé àkọsílẹ̀ fífò, àti títẹ̀lé ètò ìwé àṣẹ tó yé ń jẹ́ kí àwọn akẹ́kọ̀ọ́ dé ìdánilẹ́kọ̀ọ́ tí wọ́n fọwọ́ sí ní ìmúrasílẹ̀ láti kọ́ ní kíákíá, kí wọ́n sì fo ní ìbámu pẹ̀lú òfin.",
    constraints: [
      "Ẹ̀rọ: kọ̀mpútà tàbí fóònù tí ó lè ṣí simulator drone ọ̀fẹ́ tàbí èyí tí kò wọ́n; controller (ẹ̀rọ ìdarí) máa ń ṣèrànwọ́",
      "Ẹ̀kọ́ yìí kò fúnni ní ìwé àṣẹ tàbí àṣẹ láti fo; àjọ ìjọba ìrìn òfuurufú ló ń fúnni ní ìwé àṣẹ lẹ́yìn ìdánilẹ́kọ̀ọ́ tí wọ́n fọwọ́ sí àti ìdánwò",
      "Má ṣe fo drone gidi láéláé láìsí ìforúkọsílẹ̀, ìwé àṣẹ àti àwọn ìyọ̀ǹda tí orílẹ̀-èdè náà ń béèrè",
      "Àkókò: àṣeṣe kúkúrú ojoojúmọ́ ti ìṣẹ́jú 15 sí 20",
      "Owó àti ìgbésẹ̀ máa ń yí padà: àwọn akẹ́kọ̀ọ́ máa ń ṣàyẹ̀wò ojú-ewé ìjọba àjọ náà"
    ],
    prerequisites: "\"Drone fún Àbójútó Oko 1: Ìfihàn, Òfin àti Ààbò\"; Ẹ̀kọ́ 2 sí 5 máa ń ṣèrànwọ́ ṣùgbọ́n wọn kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Nígbà tí o bá ń lo controller drone tàbí simulator", action: "sọ ohun tí ìṣípò ọ̀pá ìdarí kọ̀ọ̀kan ń ṣe, kí o sì ka àwọn nǹkan pàtàkì lójú-iboju fífò", standard: "kí o sì rí bọ́tìnnì padà-sílé àti bọ́tìnnì ìdádúró láìwò wọ́n" },
    { id: "O2", condition: "Nínú simulator drone", action: "fo ìdánrawò dídúró lójú kan, àpótí, nọ́mbà 8, yíyípo àti ìlà ẹ̀rọ gígé koríko, kí o sì kọ gbogbo ìgbà àṣeṣe sínú ìwé àkọsílẹ̀ fífò", standard: "kí o fo ìdánrawò kọ̀ọ̀kan láìkọsẹ̀ ní ìgbà mẹ́ta tẹ̀léra" },
    { id: "O3", condition: "Nígbà tí GPS bá lágbára tàbí tí kò lágbára", action: "ṣàlàyé àwọn ọ̀nà fífò pàtàkì, kí o sì fo pẹ̀lú ìfọkànbalẹ̀ nígbà tí drone bá bọ́ sí attitude mode", standard: "kí drone wà lójú rẹ, kí o sì gúnlẹ̀ láìléwu" },
    { id: "O4", condition: "Nínú àṣeṣe àsopọ̀ tí ó já, bátìrì tí ó kéré tàbí GPS tí ó sọnù", action: "tẹ̀lé àwọn ìgbésẹ̀ pàjáwìrì tó tọ́", standard: "pẹ̀lú ìfọkànbalẹ̀ àti ní ìtẹ̀léra tó tọ́, lẹ́yìn náà kí o kọ ìṣẹ̀lẹ̀ náà sílẹ̀" },
    { id: "O5", condition: "Fún orílẹ̀-èdè rẹ", action: "kọ ètò tirẹ láti gba ìwé àṣẹ awakọ̀ drone", standard: "pẹ̀lú àjọ ìjọba, àwọn ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí, àwọn ìgbésẹ̀, àwọn ìwé, owó láti orísun ìjọba àti àwọn ọjọ́ àfojúsùn" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíkọ́ bí a ṣe ń fo drone",
      lessons: [
        {
          objectives: ["O1"],
          title: "Àwọn ìdarí: ọ̀pá, bọ́tìnnì àti ojú-iboju",
          minutes: 5,
          goal: "Sọ ohun tí ìṣípò ọ̀pá ìdarí kọ̀ọ̀kan ń ṣe, kí o sì ka àwọn nǹkan pàtàkì lójú-iboju fífò.",
          text: [
            "Ọ̀pọ̀ controller drone ní ọ̀pá ìdarí méjì. Ní Mode 2, ètò tí ó wọ́pọ̀ jù, ọ̀pá òsì ń darí gíga (throttle: sókè láti gòkè, sísàlẹ̀ láti sọ̀kalẹ̀) àti yíyí padà ní ojú kan (yaw: òsì àti ọ̀tún). Ọ̀pá ọ̀tún ń gbé drone lọ síwájú àti sẹ́yìn (pitch) àti sí ẹ̀gbẹ́ (roll). Àwọn awakọ̀ kan ń lo mode míì; wo tìrẹ nínú settings app rẹ.",
            "Ìṣípò ọ̀pá kékeré tí ó rọra ń mú kí fífò rọra. Àwọn olùbẹ̀rẹ̀ máa ń tì í jìnnà jù, wọ́n sì ń yára jù. Ṣe àṣeṣe rírọra ṣí ọ̀pá, lẹ́yìn náà jẹ́ kí wọ́n padà sí àárín, níbi tí ọ̀pọ̀ drone ti máa ń dúró sí ojú kan.",
            "Ojú-iboju fífò ń fi bátìrì, agbára àsopọ̀ (signal), àwọn sátẹ́láìtì GPS, gíga, jíjìn sí ibi tí o ti gbéra (home) àti àwòrán kámẹ́rà hàn. Kọ́ láti wò ó díẹ̀, lẹ́yìn náà wo drone padà. Mọ ibi tí bọ́tìnnì padà-sílé (return-to-home) àti bọ́tìnnì ìdádúró (pause tàbí brake) wà láìwò wọ́n."
          ],
          words: [["Throttle", "ìṣípò sókè àti sísàlẹ̀ (gígòkè tàbí sísọ̀kalẹ̀)."], ["Yaw", "yíyí drone sí òsì tàbí ọ̀tún ní ojú kan."], ["Pitch", "lílọ síwájú tàbí sẹ́yìn."], ["Roll", "lílọ sí ẹ̀gbẹ́ òsì tàbí ọ̀tún."], ["Mode 2", "ètò ọ̀pá tí ó wọ́pọ̀ jù: ọ̀pá òsì fún throttle àti yaw, ọ̀pá ọ̀tún fún pitch àti roll."]],
          slides: [
            { title: "Àwọn ọ̀pá Mode 2", bullets: ["Ọ̀pá òsì: sókè/sísàlẹ̀ (throttle), yíyí (yaw)", "Ọ̀pá ọ̀tún: iwájú/ẹ̀yìn (pitch), ẹ̀gbẹ́ (roll)", "Wo mode rẹ nínú app"] },
            { title: "Ọwọ́ rírọ̀", bullets: ["Ìṣípò kékeré tí ó rọra", "Jẹ́ kí ọ̀pá padà sí àárín", "Ọ̀pọ̀ drone yóò dúró sí ojú kan"] },
            { title: "Ojú-iboju fífò", bullets: ["Bátìrì, signal, sátẹ́láìtì GPS", "Gíga, jíjìn sí home, àwòrán kámẹ́rà", "Wò ó díẹ̀, lẹ́yìn náà wo drone padà"] },
            { title: "Mọ àwọn bọ́tìnnì rẹ", bullets: ["Padà-sílé (return-to-home)", "Ìdádúró (pause tàbí brake)", "Rí wọn láìwò wọ́n"] }
          ],
          tryIt: "Fi simulator drone sórí kọ̀mpútà tàbí fóònù (wá drone flight simulator nínú ilé ìtajà app tàbí lórí kọ̀mpútà rẹ; àwọn ilé-iṣẹ́ drone kan ní ọ̀kan nínú app wọn). Wá ibi tí o ti ń yan mode ọ̀pá, yan Mode 2, kí o sì rọra ṣí ọ̀pá kọ̀ọ̀kan láti rí ohun tí ó ń ṣe.",
          youCanNow: "sọ ohun tí ọ̀pá kọ̀ọ̀kan ń ṣe ní Mode 2, ka ojú-iboju fífò, kí o sì rí àwọn bọ́tìnnì pàjáwìrì.",
          quickCheck: [
            { objective: "O1", q: "Kí ni pitch?", options: ["Yíyí padà ní ojú kan", "Gbígbé drone lọ síwájú àti sẹ́yìn", "Gígòkè", "Pípadà sílé"], answer: 1, why: "Pitch ń gbé drone lọ síwájú àti sẹ́yìn; ní Mode 2, ó wà lórí ọ̀pá ọ̀tún." },
            { objective: "O1", q: "Drone rẹ ń fò lọ sí ọ̀dọ̀ igi kan, o sì gbọ́dọ̀ dá a dúró kíákíá. Kí ni o yẹ kí o ti mọ̀ tẹ́lẹ̀?", options: ["Iye owó drone náà", "Nọ́mbà fóònù àgbẹ̀ náà", "Bí a ṣe ń yí àwọ̀ kámẹ́rà padà", "Ibi tí bọ́tìnnì ìdádúró wà, láìwò ó"], answer: 3, why: "Àwọn awakọ̀ ń kọ́ ibi tí bọ́tìnnì ìdádúró àti padà-sílé wà kí wọ́n lè ṣiṣẹ́ láìwò wọ́n." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Àwọn ìdánrawò nínú simulator",
          minutes: 6,
          goal: "Fo ìdánrawò déédéé márùn-ún láìkọsẹ̀ nínú simulator.",
          text: [
            "Àwọn awakọ̀ tó mọṣẹ́ ń kọ́ ọgbọ́n nípa ṣíṣe àwọn ìdánrawò kan náà ní ọ̀pọ̀ ìgbà. Ṣe ìdánrawò kọ̀ọ̀kan títí o fi lè fo ó láìkọsẹ̀ ní ìgbà mẹ́ta tẹ̀léra, lẹ́yìn náà lọ sí èyí tó kàn. Àṣeṣe kúkúrú ojoojúmọ́ ti ìṣẹ́jú 15 sí 20 dára ju àṣeṣe gígùn kan lọ́sẹ̀.",
            "Ìdánrawò 1, dídúró lójú kan (hover): gòkè sí gíga ojú rẹ, kí o sì jẹ́ kí drone dúró jẹ́ẹ́ fún ìṣẹ́jú kan. Ìdánrawò 2, àpótí (box): fo onígun mẹ́rin pẹ̀lú iwájú drone tí ó ń kọjú síwájú nígbà gbogbo, lẹ́yìn náà tún un ṣe pẹ̀lú iwájú tí ó ń yí ní igun kọ̀ọ̀kan. Ìdánrawò 3, nọ́mbà 8: fo bí nọ́mbà 8 láìkọsẹ̀. Ìdánrawò 4, yíyípo (orbit): yí ojú kan ká (bí igi kan) nígbà tí kámẹ́rà ń wò ó. Ìdánrawò 5, ìlà ẹ̀rọ gígé koríko (lawnmower): fo àwọn ìlà tààrà tí ó tẹ̀lé ara wọn kọjá oko, bí fífò fún yíya àwòrán ilẹ̀, pẹ̀lú ọwọ́ rẹ.",
            "Tún ṣe àṣeṣe nígbà tí iwájú drone bá kọjú sí ọ (nose-in), nígbà tí òsì àti ọ̀tún máa ń dà bí ẹni pé wọ́n ti yí padà. Ibí ni ọ̀pọ̀ olùbẹ̀rẹ̀ ti ń fọ́ drone. Lẹ́yìn àṣeṣe kọ̀ọ̀kan, kọ ohun tí ó lọ dáadáa àti ohun tí o máa tún ṣe dáadáa sí i."
          ],
          steps: ["Dúró lójú kan ní gíga ojú rẹ fún ìṣẹ́jú kan.", "Àpótí: iwájú síwájú, lẹ́yìn náà iwájú tí ó ń yí ní igun.", "Nọ́mbà 8, láìkọsẹ̀ àti ní gíga kan náà.", "Yí igi kan ká pẹ̀lú kámẹ́rà lórí rẹ̀.", "Ìlà ẹ̀rọ gígé koríko kọjá oko.", "Tún ọ̀kọ̀ọ̀kan ṣe ní nose-in."],
          words: [["Ìdánrawò (drill)", "iṣẹ́ kúkúrú tí a ń tún ṣe láti kọ́ ọgbọ́n kan."], ["Nose-in", "fífò nígbà tí iwájú drone kọjú sí ọ, tí ìdarí sì dà bí ẹni pé ó ti yí padà."], ["Yíyípo (orbit)", "fífò yípo ojú kan."]],
          slides: [
            { title: "Bí o ṣe máa ṣe àṣeṣe", bullets: ["Ìdánrawò kan náà, ní ọ̀pọ̀ ìgbà", "Ìgbà mẹ́ta láìkọsẹ̀ tẹ̀léra, lẹ́yìn náà tẹ̀síwájú", "Ìṣẹ́jú 15-20 lójoojúmọ́ dára ju àṣeṣe gígùn kan lọ"] },
            { title: "Ìdánrawò márùn-ún", bullets: ["1 Dídúró lójú kan  2 Àpótí  3 Nọ́mbà 8", "4 Yíyí igi ká  5 Ìlà ẹ̀rọ gígé koríko"] },
            { title: "Èyí tó le: nose-in", bullets: ["Òsì àti ọ̀tún dà bí ẹni pé wọ́n ti yí padà", "Ibí ni ọ̀pọ̀ olùbẹ̀rẹ̀ ti ń fọ́ drone", "Ṣe gbogbo ìdánrawò ní nose-in pẹ̀lú"] }
          ],
          tryIt: "Nínú simulator rẹ, fo ìdánrawò 1 àti 2 lónìí. Kọ sínú ìwé kékeré: ọjọ́, ìṣẹ́jú, àwọn ìdánrawò wo, iye ìgbà tí o fo láìkọsẹ̀, àti ohun kan láti ṣe dáadáa sí i.",
          youCanNow: "ṣe ìdánrawò déédéé márùn-ún nínú simulator, kí o sì máa tọpa bí o ṣe ń tẹ̀síwájú.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ìdánrawò àpótí (box)?", options: ["Fífo onígun mẹ́rin, kọ́kọ́ pẹ̀lú iwájú síwájú, lẹ́yìn náà pẹ̀lú yíyí ní igun kọ̀ọ̀kan", "Dídúró ní ojú kan", "Yíyí igi ká", "Fífo bí nọ́mbà 8"], answer: 0, why: "Ìdánrawò àpótí ń fo onígun mẹ́rin pẹ̀lú iwájú síwájú, lẹ́yìn náà pẹ̀lú iwájú tí ó ń yí ní igun kọ̀ọ̀kan." },
            { objective: "O2", q: "O ti fo ìdánrawò dídúró lójú kan láìkọsẹ̀ lẹ́ẹ̀kan. Kí ni o máa ṣe tẹ̀lé e?", options: ["Lọ tààrà sí fífo drone gidi", "Dẹ́kun àṣeṣe dídúró lójú kan títí láé", "Máa ṣe àṣeṣe títí yóò fi lọ láìkọsẹ̀ ní ìgbà mẹ́ta tẹ̀léra, lẹ́yìn náà tẹ̀síwájú", "Fò lọ sí ìdánrawò tó le jù"], answer: 2, why: "Ṣe ìdánrawò kọ̀ọ̀kan títí o fi lè fo ó láìkọsẹ̀ ní ìgbà mẹ́ta tẹ̀léra." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Àwọn ọ̀nà fífò àti ìgbà tí a ń lò wọ́n",
          minutes: 5,
          goal: "Ṣàlàyé àwọn ọ̀nà fífò pàtàkì, kí o sì yí padà láìléwu nígbà tí GPS kò bá lágbára.",
          text: [
            "Ọ̀pọ̀ drone onikámẹ́rà máa ń fò ní positioning mode tàbí GPS mode. Drone ń lo sátẹ́láìtì àti àwọn sensọ̀ láti dúró sí ojú kan nígbà tí o bá fi ọ̀pá sílẹ̀. Èyí ń mú kí fífò rọrùn, ó sì ń jẹ́ kí padà-sílé àti yíya àwòrán ilẹ̀ fúnra rẹ̀ ṣeé ṣe.",
            "Àwọn drone kan tún ní attitude mode (àwọn ilé-iṣẹ́ kan ń pè é ní ATTI). Drone ń dúró ní gíga rẹ̀ ṣùgbọ́n kì í dúró sí ojú kan, nítorí náà afẹ́fẹ́ ń gbé e lọ bí ọkọ̀ ojú-omi lórí odò. Drone lè bọ́ sí mode yìí fúnra rẹ̀ nígbà tí GPS kò bá lágbára, fún àpẹẹrẹ nítòsí ilé irin gíga, lábẹ́ igi tí ó pọ̀, tàbí nínú àfonífojì jíjìn. Àwọn awakọ̀ tí wọ́n ti ṣe àṣeṣe rẹ̀ máa ń fọkàn balẹ̀; àwọn tí kò tíì ṣe é sábà máa ń fọ́ drone.",
            "Àwọn mode míì ni sport (yára jù, ààbò kéré), tripod tàbí cine (lọ́ra, ó sì rọra fún yíya fídíò) àti iṣẹ́ aládàáṣe (automatic missions). Ọ̀pọ̀ simulator ń jẹ́ kí o fò láìsí ìrànlọ́wọ́ GPS. Ṣe àṣeṣe rẹ̀ kí lílọ fúnra rẹ̀ (drift) má bàa yà ọ́ lẹ́nu."
          ],
          words: [["GPS mode", "ọ̀nà fífò tí drone ti ń lo sátẹ́láìtì láti dúró sí ojú kan."], ["Attitude mode (ATTI)", "ọ̀nà fífò tí drone ti ń dúró ní gíga ṣùgbọ́n tí afẹ́fẹ́ ń gbé e lọ."], ["Drift", "nígbà tí drone bá ń lọ fúnra rẹ̀, sábà pẹ̀lú afẹ́fẹ́."]],
          slides: [
            { title: "GPS / positioning mode", bullets: ["Ó ń dúró sí ojú kan nígbà tí o bá fi ọ̀pá sílẹ̀", "Ó ń jẹ́ kí padà-sílé àti yíya àwòrán ilẹ̀ ṣeé ṣe", "Mode déédéé fún iṣẹ́ oko"] },
            { title: "Attitude mode (ATTI)", bullets: ["Ó ń dúró ní gíga, kì í ṣe ní ojú kan", "Afẹ́fẹ́ ń gbé e lọ", "Ó lè bẹ̀rẹ̀ fúnra rẹ̀ nígbà tí GPS kò bá lágbára"] },
            { title: "Àwọn mode míì", bullets: ["Sport: yára, ààbò kéré", "Tripod / cine: lọ́ra, ó sì rọra", "Ṣe àṣeṣe fífò láìsí ìrànlọ́wọ́ GPS"] }
          ],
          tryIt: "Nínú simulator rẹ, pa ìrànlọ́wọ́ GPS tàbí yan attitude mode, fi afẹ́fẹ́ díẹ̀ kún un, kí o sì jẹ́ kí drone dúró lójú kan fún ìṣẹ́jú-àáyá 30 nípa títún drift ṣe. Lẹ́yìn náà fo ìdánrawò àpótí ní mode yìí.",
          youCanNow: "ṣàlàyé àwọn ọ̀nà fífò pàtàkì, kí o sì máa darí drone nígbà tí ó bá ń lọ fúnra rẹ̀ láìsí GPS.",
          quickCheck: [
            { objective: "O3", q: "Kí ni tripod tàbí cine mode ń ṣe?", options: ["Ó ń fò ní ìyára tó ga jù", "Ó ń pa ẹ̀rọ ìyípo (motor)", "Ó ń ya àwòrán ilẹ̀ fúnra rẹ̀", "Ó ń fò lọ́ra, ó sì rọra fún yíya fídíò"], answer: 3, why: "Tripod tàbí cine mode lọ́ra, ó sì rọra, fún yíya fídíò." },
            { objective: "O3", q: "O máa ya àwòrán oko kan tí ó wà lẹ́gbẹ̀ẹ́ àká irin gíga. Kí ni o máa múra sílẹ̀ fún?", options: ["Kò sí nǹkan; GPS máa ń ṣiṣẹ́ nígbà gbogbo", "Kí drone bọ́ sí attitude mode kí ó sì máa lọ fúnra rẹ̀, nítorí náà o ṣe àṣeṣe fífò láìsí ìrànlọ́wọ́ GPS", "Fífò ní sport mode", "Fífò ní nose-in nìkan"], answer: 1, why: "Nítòsí ilé irin gíga, GPS lè má lágbára, drone sì lè máa lọ fúnra rẹ̀ ní attitude mode." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíkọ́ bí a ṣe ń fo drone",
        questions: [
          { objective: "O1", q: "Ní Mode 2, kí ni títì ọ̀pá òsì sókè ń ṣe?", options: ["Ó ń lọ síwájú", "Ó ń yí sí ọ̀tún", "Ó ń gòkè", "Ó ń lọ sí ẹ̀gbẹ́"], answer: 2, why: "Ní Mode 2, ọ̀pá òsì ń darí throttle (gíga) àti yaw." },
          { objective: "O1", q: "Kí ni yaw?", options: ["Yíyí drone sí òsì tàbí ọ̀tún ní ojú kan", "Gígòkè", "Gígúnlẹ̀", "Yíya fọ́tò"], answer: 0, why: "Yaw ń yí drone ká ní àárín ara rẹ̀." },
          { objective: "O2", q: "Ètò àṣeṣe wo ló ń kọ́ ọgbọ́n jù?", options: ["Àṣeṣe wákàtí mẹ́ta kan lóṣù", "Àṣeṣe kúkúrú ojoojúmọ́ ti àwọn ìdánrawò kan náà", "Wíwo fídíò nìkan", "Fífo drone gidi láìsí ìdánilẹ́kọ̀ọ́"], answer: 1, why: "Títún nǹkan ṣe ní kúkúrú àti déédéé ń kọ́ ìdarí tí ó rọra." },
          { objective: "O2", q: "Kí ló dé tí a fi ń ṣe àṣeṣe fífò ní nose-in?", options: ["Ó yára jù", "Ó ń dín lílo bátìrì kù", "Simulator ń béèrè fún un", "Ìdarí dà bí ẹni pé ó ti yí padà, ibẹ̀ sì ni ọ̀pọ̀ olùbẹ̀rẹ̀ ti ń fọ́ drone"], answer: 3, why: "Ṣíṣe àṣeṣe rẹ̀ ń jẹ́ kí ìmọ̀lára ìyípadà yìí mọ́ ọ lára." },
          { objective: "O3", q: "Ní attitude mode (ATTI), drone:", options: ["Ń dúró ní gíga ṣùgbọ́n afẹ́fẹ́ ń gbé e lọ", "Ń gúnlẹ̀ fúnra rẹ̀", "Ń dúró sí ojú kan dáadáa", "Kò lè ṣí"], answer: 0, why: "Láìsí ipò GPS, ó ń dúró ní gíga ṣùgbọ́n kì í ṣe ní ojú kan." }
        ]
      }
    },
    {
      name: "Orí 2: Dídi awakọ̀ tó ní ìwé àṣẹ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Àṣeṣe pàjáwìrì: àsopọ̀ já, bátìrì kéré, GPS sọnù",
          minutes: 6,
          goal: "Tẹ̀lé àwọn ìgbésẹ̀ tó tọ́ nínú pàjáwìrì mẹ́ta tí ó wọ́pọ̀.",
          text: [
            "Pàjáwìrì kì í sábà ṣẹlẹ̀, ṣùgbọ́n ó máa ń yára. Àwọn awakọ̀ ń bójú tó o dáadáa nítorí pé wọ́n ti ṣe àṣeṣe àwọn ìgbésẹ̀ náà títí wọ́n fi di ohun tí ọwọ́ ń ṣe fúnra rẹ̀. Kí o tó fo drone gidi nígbàkúgbà, rí i dájú pé gíga padà-sílé àti ohun tí drone máa ṣe nígbà tí àsopọ̀ bá já wà ní ètò tó tọ́.",
            "Àsopọ̀ já (controller pàdánù signal): fọkàn balẹ̀, darí àwọn eriali controller sí drone, kí o sì lọ sí ibi gíga tí ó bá léwu. Ọ̀pọ̀ drone máa ń bẹ̀rẹ̀ padà-sílé lẹ́yìn ìṣẹ́jú-àáyá díẹ̀; wo ojú ọ̀run, kí o sì múra láti gba ìdarí padà nígbà tí àsopọ̀ bá padà. Bátìrì kéré: dá iṣẹ́ dúró kí o sì fò tààrà padà sílé, tàbí gúnlẹ̀ sí ibi tí kò léwu tí ó súnmọ́ jù; má ṣe gbìyànjú láti parí ìlà kan sí i láéláé.",
            "GPS sọnù tàbí drone ń lọ lójijì: yí ọkàn rẹ sí fífò ní attitude, jẹ́ kí drone wà lójú rẹ, rọra fò ó padà sọ́dọ̀ rẹ ní òdì kejì afẹ́fẹ́, kí o sì gúnlẹ̀ ní kété tí kò bá léwu. Lẹ́yìn pàjáwìrì tàbí jàǹbá èyíkéyìí, mú kí ibẹ̀ wà láìléwu, ṣàyẹ̀wò ìbàjẹ́, kọ ọ́ sínú ìwé àkọsílẹ̀ fífò rẹ, kí o sì fi tó àjọ ìjọba létí tí òfin rẹ bá béèrè bẹ́ẹ̀."
          ],
          steps: ["Àsopọ̀ já: fọkàn balẹ̀, darí eriali, lọ sí ibi gíga tí kò bá léwu, wo padà-sílé.", "Bátìrì kéré: dá iṣẹ́ dúró, fò padà sílé tàbí gúnlẹ̀ sí ibi tí kò léwu tó súnmọ́ jù.", "GPS sọnù: rọra fò pẹ̀lú ọwọ́, ní òdì kejì afẹ́fẹ́, gúnlẹ̀ láìpẹ́.", "Lẹ́yìn ìṣẹ̀lẹ̀ èyíkéyìí: mú kí ó wà láìléwu, ṣàyẹ̀wò ìbàjẹ́, kọ ọ́ sílẹ̀, fi tó wọn létí tí ó bá pọn dandan."],
          words: [["Àsopọ̀ já (lost link)", "nígbà tí drone àti controller bá pàdánù àsopọ̀ rédíò wọn."], ["Fly-away", "nígbà tí drone bá fò lọ kúrò ní ìdarí awakọ̀."], ["Ìṣẹ̀lẹ̀ (incident)", "ohun tí a kò retí tí ó fa ìpalára tàbí ìbàjẹ́, tàbí tí ó lè fà á."]],
          slides: [
            { title: "Ṣe àṣeṣe títí yóò fi mọ́ ọ lọ́wọ́", bullets: ["Pàjáwìrì kì í sábà ṣẹlẹ̀, ṣùgbọ́n ó ń yára", "Kọ́kọ́ ṣàyẹ̀wò gíga RTH àti ohun tí ó máa ṣe tí signal bá sọnù"] },
            { title: "Àsopọ̀ já", bullets: ["Fọkàn balẹ̀, darí àwọn eriali", "Lọ sí ibi gíga tí kò bá léwu", "Wo padà-sílé"] },
            { title: "Bátìrì kéré àti GPS sọnù", bullets: ["Bátìrì kéré: dúró, padà sílé tàbí gúnlẹ̀ báyìí", "GPS sọnù: fò pẹ̀lú ọwọ́, ní òdì kejì afẹ́fẹ́, gúnlẹ̀ láìpẹ́"] },
            { title: "Lẹ́yìn ìṣẹ̀lẹ̀ èyíkéyìí", bullets: ["Mú kí ibẹ̀ wà láìléwu", "Ṣàyẹ̀wò ìbàjẹ́, kọ ọ́ sílẹ̀", "Fi tó wọn létí tí òfin rẹ bá béèrè"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Nínú simulator rẹ, ṣe àṣeṣe pàjáwìrì kọ̀ọ̀kan: ṣètò ìkìlọ̀ bátìrì kéré kí o sì fò padà sílé, pa GPS ní àárín fífò kí o sì gúnlẹ̀ pẹ̀lú ọwọ́, àti (tí simulator bá gbà á) mú kí signal sọnù kí o sì wo padà-sílé. Lẹ́yìn náà kọ àwọn ìgbésẹ̀ náà sílẹ̀ láti inú ìrántí rẹ.",
          youCanNow: "tẹ̀lé àwọn ìgbésẹ̀ tó tọ́ fún àsopọ̀ tí ó já, bátìrì tí ó kéré àti GPS tí ó sọnù.",
          quickCheck: [
            { objective: "O4", q: "Kí o tó fo drone gidi nígbàkúgbà, kí ni o máa ṣàyẹ̀wò láti múra sílẹ̀ fún àsopọ̀ tí ó já?", options: ["Ètò àwọ̀ kámẹ́rà", "Àdírẹ́sì àgbẹ̀ náà", "Pé gíga padà-sílé àti ohun tí ó máa ṣe tí signal bá sọnù wà ní ètò tó tọ́", "Ojú-ewé ìkẹyìn ìwé àkọsílẹ̀ fífò"], answer: 2, why: "Gíga padà-sílé àti ètò signal sísọnù tó tọ́ ń jẹ́ kí drone padà sílé láìléwu tí àsopọ̀ bá já." },
            { objective: "O4", q: "Lẹ́yìn tí drone gidi gúnlẹ̀ líle, ó dà bí ẹni pé kò sí nǹkan. Kí ni o máa ṣe?", options: ["Ṣàyẹ̀wò rẹ̀ fún ìbàjẹ́ kí o sì kọ ọ́ sínú ìwé àkọsílẹ̀ fífò", "Tún fò lẹ́sẹ̀kẹsẹ̀ láìṣàyẹ̀wò", "Gbàgbé rẹ̀", "Fi pamọ́ fún olùkọ́ rẹ"], answer: 0, why: "Lẹ́yìn pàjáwìrì tàbí jàǹbá èyíkéyìí, ṣàyẹ̀wò ìbàjẹ́ kí o sì kọ ọ́ sílẹ̀; fi tó wọn létí tí òfin bá béèrè." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ìwé àkọsílẹ̀ fífò",
          minutes: 4,
          goal: "Kọ gbogbo fífò nínú simulator àti fífò gidi sínú ìwé àkọsílẹ̀ fífò.",
          text: [
            "Ìwé àkọsílẹ̀ fífò (log book) ni àkọsílẹ̀ gbogbo fífò rẹ. Àwọn ilé-ẹ̀kọ́ ìdánilẹ́kọ̀ọ́ àti àwọn àjọ ìjọba ìrìn òfuurufú ń lo àkọsílẹ̀ fífò láti ṣàyẹ̀wò ìrírí, àwọn agbanisíṣẹ́ àti àwọn oníbàárà sì ń gbẹ́kẹ̀ lé àwọn awakọ̀ tí wọ́n ń kọ ọ́. Kọ àkókò simulator àti àkókò fífò gidi sí ọ̀wọ̀n ọ̀tọ̀ọ̀tọ̀.",
            "Fún àṣeṣe kọ̀ọ̀kan, kọ: ọjọ́, ibi (tàbí simulator), orúkọ drone tàbí simulator, àpapọ̀ ìṣẹ́jú, irú fífò (ìdánrawò, yíya àwòrán ilẹ̀, àyẹ̀wò), ojú ọjọ́ (afẹ́fẹ́, ìmọ́lẹ̀), ìṣòro tàbí ìṣẹ̀lẹ̀ èyíkéyìí, àti ohun tí o kọ́. Fún fífò gidi, tún kọ nọ́mbà ìforúkọsílẹ̀ drone àti ìyọ̀ǹda èyíkéyìí tí o lò.",
            "Lo ìwé kékeré, spreadsheet tàbí app àkọsílẹ̀, ṣùgbọ́n kọ ọ́ nígbà gbogbo, kí o sì ní ẹ̀dà rẹ̀ míì (backup). Béèrè lọ́wọ́ ilé-ẹ̀kọ́ ìdánilẹ́kọ̀ọ́ rẹ irú àkọsílẹ̀ tí wọ́n ń gbà fún ìbéèrè ìwé àṣẹ."
          ],
          steps: ["Yan ìwé, spreadsheet tàbí app, kí o sì ní ẹ̀dà rẹ̀ míì.", "Ọ̀wọ̀n ọ̀tọ̀ọ̀tọ̀ fún simulator àti fífò gidi.", "Kọ ọjọ́, ibi, ẹ̀rọ, ìṣẹ́jú, irú fífò, ojú ọjọ́, ìṣòro, ẹ̀kọ́.", "Fún fífò gidi, fi ìforúkọsílẹ̀ àti ìyọ̀ǹda tí o lò kún un.", "Béèrè lọ́wọ́ ilé-ẹ̀kọ́ rẹ irú àkọsílẹ̀ tí wọ́n ń gbà."],
          words: [["Ìwé àkọsílẹ̀ fífò (log book)", "àkọsílẹ̀ gbogbo fífò tí awakọ̀ kan ṣe."], ["Àkókò fífò (flight time)", "àwọn ìṣẹ́jú tàbí wákàtí tí awakọ̀ kan ti lò ní fífò."]],
          slides: [
            { title: "Ìdí tí a fi ń kọ àkọsílẹ̀", bullets: ["Ó ń fi ìrírí rẹ hàn", "Àwọn ilé-ẹ̀kọ́ àti àjọ ìjọba ń lò ó", "Ó ń jẹ́ kí àwọn oníbàárà gbẹ́kẹ̀ lé ọ"] },
            { title: "Ohun tí o máa kọ", bullets: ["Ọjọ́, ibi, drone tàbí simulator", "Ìṣẹ́jú, irú fífò, ojú ọjọ́", "Ìṣòro, ìṣẹ̀lẹ̀, ẹ̀kọ́"] },
            { title: "Tọ́jú rẹ̀ dáadáa", bullets: ["Gbogbo àṣeṣe, pẹ̀lú ẹ̀dà míì", "Simulator àti fífò gidi lọ́tọ̀ọ̀tọ̀", "Lo irú tí olùkọ́ rẹ ń gbà"] }
          ],
          tryIt: "Bẹ̀rẹ̀ ìwé àkọsílẹ̀ fífò rẹ báyìí gẹ́gẹ́ bí spreadsheet pẹ̀lú àwọn ọ̀wọ̀n inú ẹ̀kọ́ yìí, kí o sì kọ gbogbo àṣeṣe simulator tí o ti ṣe nínú ẹ̀kọ́ yìí títí di báyìí sínú rẹ̀.",
          youCanNow: "kọ ìwé àkọsílẹ̀ fífò tó pé fún simulator àti fífò gidi.",
          quickCheck: [
            { objective: "O2", q: "Kí ló dé tí àwọn ilé-ẹ̀kọ́ ìdánilẹ́kọ̀ọ́ àti àjọ ìjọba fi ń wo àkọsílẹ̀ fífò?", options: ["Láti dá iye owó drone", "Láti ṣàyẹ̀wò ìrírí awakọ̀", "Láti yan ojú ọjọ́", "Láti yí mode ọ̀pá padà"], answer: 1, why: "Àkọsílẹ̀ fífò ń fi ìrírí awakọ̀ hàn fún ilé-ẹ̀kọ́, àjọ ìjọba, agbanisíṣẹ́ àti oníbàárà." },
            { objective: "O2", q: "O fo drone gidi lónìí lábẹ́ ìyọ̀ǹda kan. Kí ni o máa fi kún àkọsílẹ̀ náà?", options: ["Kò sí nǹkan ju ọjọ́ lọ", "Ojú ọjọ́ ọ̀sẹ̀ tó ń bọ̀", "Ìsọfúnni báńkì rẹ", "Nọ́mbà ìforúkọsílẹ̀ drone àti ìyọ̀ǹda tí o lò"], answer: 3, why: "Fún fífò gidi, tún kọ nọ́mbà ìforúkọsílẹ̀ drone àti ìyọ̀ǹda èyíkéyìí tí o lò." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ọ̀nà rẹ sí ìwé àṣẹ awakọ̀ drone",
          minutes: 6,
          goal: "Kọ ètò tirẹ láti gba ìwé àṣẹ awakọ̀ drone ní orílẹ̀-èdè rẹ.",
          text: [
            "Orílẹ̀-èdè kọ̀ọ̀kan ló ń pinnu bí a ṣe ń fún awakọ̀ drone ní ìwé àṣẹ. Ní Kenya, KCAA (àjọ ìjọba ìrìn òfuurufú Kenya) ń fọwọ́ sí àwọn Unmanned Aircraft Systems Training Organizations (UTO), ó sì ń kọ wọ́n sí ojú-òpó wẹ́ẹ̀bù rẹ̀; àkọsílẹ̀ owó rẹ̀ ní ìwé àṣẹ akẹ́kọ̀ọ́ awakọ̀ drone, ìwé àṣẹ awakọ̀ drone (RPL) àti àwọn àṣẹ àfikún (rating) bí fífò kọjá ibi tí ojú lè rí. Ètò ayélujára KCAA fún drone ni a fi ń béèrè. Ní Nàìjíríà, Part 21 ti NCAA (àjọ ìjọba ìrìn òfuurufú Nàìjíríà) ló ṣàlàyé ìwé àṣẹ awakọ̀ drone àti àwọn ohun míì tí RPAS nílò. Àwọn orílẹ̀-èdè míì ní òfin tiwọn.",
            "Ọ̀nà tí ó wọ́pọ̀: yan ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí; kọ́ ẹ̀kọ́ ìmọ̀ (òfin ìrìn òfuurufú, ojú òfuurufú àti máàpù, ojú ọjọ́, ẹ̀rọ náà, ìwà ènìyàn, ohun tí a ń ṣe nígbà pàjáwìrì); ṣe ẹ̀kọ́ fífò àti ìdánwò ìṣe; yege àwọn ohun tí àjọ ìjọba ń béèrè; béèrè fún ìwé àṣẹ; kí o sì máa sọ ọ́ dọ̀tun bí wọ́n ṣe ń béèrè.",
            "Ṣàyẹ̀wò gbogbo ìgbésẹ̀, ìwé àti owó lórí ojú-ewé ìjọba àjọ náà tàbí nípa pípè wọ́n, kí o sì ṣàyẹ̀wò pé ilé-ẹ̀kọ́ kan wà lórí àkọsílẹ̀ àwọn tí àjọ náà fọwọ́ sí kí o tó sanwó. Àkọsílẹ̀ simulator rẹ ń fi hàn pé o ti múra láti kọ́ ní kíákíá, ṣùgbọ́n kò rọ́pò ìdánilẹ́kọ̀ọ́ tí wọ́n fọwọ́ sí."
          ],
          steps: ["Wá àwọn ojú-ewé drone ti àjọ ìjọba ìrìn òfuurufú rẹ.", "Wá àkọsílẹ̀ àwọn ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí; yan méjì láti kàn sí.", "Béèrè lọ́wọ́ ọ̀kọ̀ọ̀kan: gígùn ẹ̀kọ́, ẹ̀kọ́ ìmọ̀ àti ti ìṣe, owó, ìdánwò, ìwé tí wọ́n nílò.", "Ṣàyẹ̀wò owó ìwé àṣẹ lórí àkọsílẹ̀ owó ìjọba.", "Kọ àwọn ọjọ́ àfojúsùn fún ìdánilẹ́kọ̀ọ́, ìdánwò àti ìbéèrè."],
          words: [["Ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí", "ilé-ẹ̀kọ́ drone tí àjọ ìjọba ìrìn òfuurufú fọwọ́ sí láti kọ́ àwọn awakọ̀ fún ìwé àṣẹ (KCAA ń pè wọ́n ní UTO)."], ["Rating", "àṣẹ àfikún lórí ìwé àṣẹ fún irú fífò kan, bí fífò kọjá ibi tí ojú lè rí."], ["Òfin ìrìn òfuurufú (air law)", "àwọn òfin nípa fífò àti ojú òfuurufú."]],
          slides: [
            { title: "Orílẹ̀-èdè kọ̀ọ̀kan ń fún awakọ̀ rẹ̀ ní ìwé àṣẹ", bullets: ["Kenya: KCAA ń fọwọ́ sí UTO; RPL nípasẹ̀ ètò ayélujára", "Nàìjíríà: Part 21 ti NCAA ló ń bójú tó ìwé àṣẹ awakọ̀ drone", "Àwọn míì: àjọ ìjọba tiwọn"] },
            { title: "Ọ̀nà tí ó wọ́pọ̀", bullets: ["Ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí", "Ẹ̀kọ́ ìmọ̀: òfin ìrìn òfuurufú, ojú òfuurufú, ojú ọjọ́, ẹ̀rọ", "Ìdánilẹ́kọ̀ọ́ ìṣe àti ìdánwò", "Béèrè, lẹ́yìn náà sọ ọ́ dọ̀tun"] },
            { title: "Ṣàyẹ̀wò kí o tó sanwó", bullets: ["Ṣé ilé-ẹ̀kọ́ wà lórí àkọsílẹ̀ àjọ ìjọba?", "Owó láti àkọsílẹ̀ owó ìjọba", "Àkókò simulator ń ṣèrànwọ́, ṣùgbọ́n kì í ṣe ìwé àṣẹ"] }
          ],
          sources: [KCAA_UTO, KCAA_PORTAL, KCAA_UAS, NCAA_P21],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ìdánrawò márààrún àti ìdánrawò pàjáwìrì mẹ́tẹ̀ẹ̀ta nínú simulator rẹ, kọ gbogbo àṣeṣe sínú ìwé àkọsílẹ̀ fífò rẹ, kí o sì kọ ètò ìwé àṣẹ rẹ ní ojú-ewé kan: àjọ ìjọba, àwọn ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí tí o rí, ìwé àṣẹ tí o nílò, àwọn ìgbésẹ̀, àwọn ìwé, owó láti orísun ìjọba, àti àwọn ọjọ́ àfojúsùn.",
          youCanNow: "fo àwọn ìdánrawò déédéé àti ìgbésẹ̀ pàjáwìrì nínú simulator, kọ ìwé àkọsílẹ̀ fífò, kí o sì tẹ̀lé ètò tó yé sí ìwé àṣẹ awakọ̀ drone ti ìjọba.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni ìgbésẹ̀ tí ó wọ́pọ̀ lójú ọ̀nà sí ìwé àṣẹ awakọ̀ drone?", options: ["Ìdánilẹ́kọ̀ọ́ ní ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí, lẹ́yìn náà ìdánwò ìṣe", "Rírà drone tó tóbi jù", "Píparí ẹ̀kọ́ ayélujára nìkan", "Fífò fún oníbàárà kọ́kọ́"], answer: 0, why: "Ọ̀nà tí ó wọ́pọ̀ ni ìdánilẹ́kọ̀ọ́ tí wọ́n fọwọ́ sí, ẹ̀kọ́ ìmọ̀, ẹ̀kọ́ fífò àti ìdánwò, lẹ́yìn náà ìbéèrè fún ìwé àṣẹ." },
            { objective: "O5", q: "Ojú-òpó wẹ́ẹ̀bù kan ń fúnni ní ìwé àṣẹ awakọ̀ drone lórí ayélujára ní ọjọ́ kan láìsí ìdánwò, fún owó kan. Kí ni o máa ṣe?", options: ["Sanwó kíákíá kí àǹfààní náà tó parí", "San ìdajì báyìí", "Ṣàyẹ̀wò ojú-ewé ìjọba àjọ náà àti àkọsílẹ̀ àwọn tí wọ́n fọwọ́ sí kí o tó san owó kankan", "Pín in fún àwọn ọ̀rẹ́"], answer: 2, why: "Àjọ ìjọba ìrìn òfuurufú ló ń fúnni ní ìwé àṣẹ; ṣàyẹ̀wò pé ilé-ẹ̀kọ́ kan wà lórí àkọsílẹ̀ wọn kí o tó sanwó." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídi awakọ̀ tó ní ìwé àṣẹ",
        questions: [
          { objective: "O4", q: "Controller pàdánù signal pẹ̀lú drone. Ìgbésẹ̀ àkọ́kọ́ tó dára ni:", options: ["Pa controller", "Sá tẹ̀lé drone", "Fọkàn balẹ̀, darí eriali sí drone, kí o sì wo padà-sílé", "Pa ẹ̀rọ ìyípo (motor) drone"], answer: 2, why: "Ọ̀pọ̀ drone máa ń padà sílé lẹ́yìn tí àsopọ̀ bá já; dídarí eriali dáadáa lè dá a padà." },
          { objective: "O4", q: "Ìkìlọ̀ bátìrì kéré dún nígbà tí ìlà yíya àwòrán ilẹ̀ kan ṣì kù. O yẹ kí o:", options: ["Fo ìlà ìkẹyìn kíákíá", "Dá iṣẹ́ dúró kí o sì fò padà sílé tàbí gúnlẹ̀ láìléwu", "Gòkè sí i", "Má kà á sí"], answer: 1, why: "Má ṣe fi agbára mú bátìrì tí ó kéré láéláé; gúnlẹ̀ láìléwu kí o sì parí rẹ̀ lẹ́yìn náà." },
          { objective: "O2", q: "Kí ni ìwé àkọsílẹ̀ fífò awakọ̀ yẹ kí ó ní?", options: ["Ọjọ́, ibi, ẹ̀rọ, ìṣẹ́jú, irú fífò, ojú ọjọ́, ìṣòro, ẹ̀kọ́", "Jàǹbá nìkan", "Iye owó drone nìkan", "Kò sí nǹkan; kò pọn dandan"], answer: 0, why: "Àkọsílẹ̀ tó pé ń fi ìrírí hàn, ó sì ń fi àwọn àpẹẹrẹ hàn." },
          { objective: "O5", q: "Ṣé píparí ẹ̀kọ́ ayélujára yìí ń fún ọ ní ìwé àṣẹ?", options: ["Bẹ́ẹ̀ ni, lẹ́sẹ̀kẹsẹ̀", "Bẹ́ẹ̀ ni, lẹ́yìn ìdánwò", "Ní Nàìjíríà nìkan", "Rárá; àjọ ìjọba ìrìn òfuurufú ló ń fúnni ní ìwé àṣẹ lẹ́yìn ìdánilẹ́kọ̀ọ́ tí wọ́n fọwọ́ sí àti ìdánwò"], answer: 3, why: "Àjọ ìjọba orílẹ̀-èdè nìkan ló ń fúnni ní ìwé àṣẹ awakọ̀ drone." },
          { objective: "O5", q: "Kí o tó sanwó fún ilé-ẹ̀kọ́ drone, o yẹ kí o:", options: ["Ṣàyẹ̀wò pé ó wà lórí àkọsílẹ̀ àwọn tí àjọ ìjọba ìrìn òfuurufú fọwọ́ sí", "Gba ìpolówó rẹ̀ gbọ́", "Béèrè lọ́wọ́ ọ̀rẹ́ kan nìkan", "San owó lọ́wọ́ láti fi àkókò pamọ́"], answer: 0, why: "Ìdánilẹ́kọ̀ọ́ tí wọ́n fọwọ́ sí nìkan ló ń kà fún ìwé àṣẹ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Drone fún Àbójútó Oko 6: Ẹ̀kọ́ Fífo Drone lórí Ayélujára",
    questions: [
      { objective: "O1", q: "Ní Mode 2, ọ̀pá ọ̀tún ń darí:", options: ["Gíga àti yíyí", "Iwájú/ẹ̀yìn àti ẹ̀gbẹ́", "Sísún kámẹ́rà mọ́ (zoom)", "Padà-sílé"], answer: 1, why: "Ní Mode 2, ọ̀pá ọ̀tún ń darí pitch àti roll." },
      { objective: "O1", q: "Throttle ń darí:", options: ["Yíyí", "Lílọ sí ẹ̀gbẹ́", "Gígòkè àti sísọ̀kalẹ̀", "Kámẹ́rà"], answer: 2, why: "Throttle ń gbé drone sókè àti sísàlẹ̀." },
      { objective: "O1", q: "Fífò tí ó rọra ń wá láti:", options: ["Ìṣípò ọ̀pá kékeré tí ó rọra", "Títì ọ̀pá dé òpin nígbà gbogbo", "Fífò kíákíá", "Fífò lálẹ́"], answer: 0, why: "Ìṣípò rírọ̀ ń mú kí fífò rọra, kí ó sì wà lábẹ́ ìdarí." },
      { objective: "O1", q: "Èwo ni KÌ Í sábà wà lójú-iboju fífò?", options: ["Ìpele bátìrì", "Àwọn sátẹ́láìtì GPS", "Gíga", "Owó tí àgbẹ̀ ní ní báńkì"], answer: 3, why: "Ojú-iboju ń fi ìsọfúnni fífò hàn, kì í ṣe owó ẹnikẹ́ni." },
      { objective: "O2", q: "Kí ló dé tí a fi ń kọ́kọ́ ṣe àṣeṣe nínú simulator?", options: ["Òfin ni níbi gbogbo", "Àṣìṣe kò ná owó kankan, kò sì rú òfin kankan", "Ó ń fún ọ ní ìwé àṣẹ", "Drone gidi kò lè dúró lójú kan"], answer: 1, why: "Simulator ń jẹ́ kí o kọ́ láìléwu kí o tó fo drone gidi." },
      { objective: "O2", q: "Báwo ni àṣeṣe ojoojúmọ́ tó dára ṣe yẹ kí ó gùn tó?", options: ["Nǹkan bí ìṣẹ́jú 15 sí 20", "Wákàtí márùn-ún", "Ìṣẹ́jú kan", "Lẹ́ẹ̀kan lọ́dún nìkan"], answer: 0, why: "Àṣeṣe kúkúrú àti déédéé ló ń kọ́ ọgbọ́n jù." },
      { objective: "O2", q: "Ìdánrawò ìlà ẹ̀rọ gígé koríko (lawnmower) ń kọ́ni ní:", options: ["Gígé koríko", "Gígúnlẹ̀", "Àwọn ìlà tààrà tí ó tẹ̀lé ara wọn bí fífò fún yíya àwòrán ilẹ̀", "Yíya fọ́tò ara ẹni"], answer: 2, why: "Ó ń kọ́ ìdarí tí a ń lò nínú ètò yíya àwòrán ilẹ̀." },
      { objective: "O2", q: "Ìdánrawò yíyípo (orbit) túmọ̀ sí:", options: ["Fífò tààrà sókè", "Dídúró lójú kan", "Gígúnlẹ̀ sórí igi", "Yíyí ojú kan ká pẹ̀lú kámẹ́rà lórí rẹ̀"], answer: 3, why: "Yíyípo ń jẹ́ kí kámẹ́rà wà lórí ohun kan nígbà tí ó ń yí i ká." },
      { objective: "O2", q: "Nígbà tí o bá ń fò ní nose-in, ìdarí máa ń dà bí:", options: ["Ẹni pé òsì àti ọ̀tún ti yí padà", "Ó rí bákan náà gẹ́lẹ́", "Ó lọ́ra jù", "Ó ti dí"], answer: 0, why: "Drone kọjú sí ọ, nítorí náà òsì àti ọ̀tún ti pààrọ̀ ní ojú rẹ." },
      { objective: "O3", q: "Ní GPS mode, nígbà tí o bá fi ọ̀pá sílẹ̀, drone:", options: ["Ń jábọ́", "Ń dúró sí ojú kan", "Ń fò padà sílé", "Ń yí po"], answer: 1, why: "Ipò sátẹ́láìtì ń jẹ́ kí drone dúró sí ojú kan." },
      { objective: "O3", q: "Drone lè bọ́ sí attitude mode nígbà tí:", options: ["Bátìrì kún", "Ojú ọ̀run mọ́", "GPS kò lágbára, fún àpẹẹrẹ lábẹ́ igi tí ó pọ̀ tàbí nítòsí ilé irin", "O ya fọ́tò"], answer: 2, why: "Signal sátẹ́láìtì tí kò lágbára ń mú kí ó pàdánù dídúró sí ojú kan." },
      { objective: "O3", q: "Ní attitude mode nínú afẹ́fẹ́, drone máa:", options: ["Dúró jẹ́ẹ́ dáadáa", "Gúnlẹ̀ fúnra rẹ̀", "Máa gòkè títí láé", "Lọ pẹ̀lú afẹ́fẹ́"], answer: 3, why: "Ó ń dúró ní gíga ṣùgbọ́n kì í ṣe ní ojú kan." },
      { objective: "O3", q: "Sport mode sábà máa ń túmọ̀ sí:", options: ["Fífò kíákíá pẹ̀lú ààbò tí ó kéré", "Yíya fídíò lọ́ra àti rírọ̀", "Gígúnlẹ̀ fúnra rẹ̀", "Kò sí kámẹ́rà"], answer: 0, why: "Sport mode ń fi àwọn ohun ààbò sílẹ̀ fún ìyára." },
      { objective: "O4", q: "Lẹ́yìn jàǹbá tàbí ìṣẹ̀lẹ̀ ńlá èyíkéyìí, o yẹ kí o:", options: ["Fi í pamọ́", "Mú kí ibẹ̀ wà láìléwu, ṣàyẹ̀wò ìbàjẹ́, kọ ọ́ sílẹ̀, kí o sì fi tó wọn létí tí ó bá pọn dandan", "Tún fò lẹ́sẹ̀kẹsẹ̀ láìṣàyẹ̀wò", "Pa àkọsílẹ̀ rẹ́"], answer: 1, why: "Ààbò lákọ̀ọ́kọ́, lẹ́yìn náà àkọsílẹ̀ àti ìròyìn èyíkéyìí tí ó pọn dandan." },
      { objective: "O4", q: "Nígbà tí GPS bá sọnù, ètò tí kò léwu jù ni láti:", options: ["Fò lọ jìnnà sí i", "Gòkè ga jù bí ó ti ṣeé ṣe", "Rọra fò padà pẹ̀lú ọwọ́ ní òdì kejì afẹ́fẹ́, kí o sì gúnlẹ̀ láìpẹ́", "Fi ọ̀pá sílẹ̀ kí o sì dúró"], answer: 2, why: "Ìdarí pẹ̀lú ọwọ́ àti gígúnlẹ̀ ní kùtùkùtù ń dènà fly-away." },
      { objective: "O4", q: "Fly-away ni:", options: ["Fífò déédéé fún yíya àwòrán ilẹ̀", "Irú abẹ̀bẹ̀ (propeller) kan", "Ibi ìgúnlẹ̀", "Drone tí ó fò lọ kúrò ní ìdarí awakọ̀"], answer: 3, why: "Ó jẹ́ pípàdánù ìdarí, sábà lẹ́yìn ìṣòro GPS tàbí àsopọ̀." },
      { objective: "O2", q: "Nínú ìwé àkọsílẹ̀ fífò, àkókò simulator àti àkókò fífò gidi yẹ kí ó:", options: ["Wà ní ọ̀wọ̀n ọ̀tọ̀ọ̀tọ̀", "Wà pa pọ̀ láìsí àmì", "Má ṣe kọ wọ́n sílẹ̀", "Kọ wọ́n sílẹ̀ tí ó bá ju wákàtí kan lọ nìkan"], answer: 0, why: "Àwọn àjọ ìjọba àti olùkọ́ nílò láti rí irú kọ̀ọ̀kan lọ́tọ̀." },
      { objective: "O5", q: "Ní Kenya, a ń pe àwọn ilé-ẹ̀kọ́ drone tí wọ́n fọwọ́ sí ní:", options: ["Ẹgbẹ́ drone", "Unmanned Aircraft Systems Training Organizations (UTO)", "Ilé ìtajà oògùn oko (agrovet)", "Ilé ìwòsàn ewéko"], answer: 1, why: "KCAA ń fọwọ́ sí UTO, ó sì ń kọ wọ́n sílẹ̀." },
      { objective: "O5", q: "Kókó wo ló jẹ́ apá kan ẹ̀kọ́ ìmọ̀ awakọ̀ drone?", options: ["Oúnjẹ sísè", "Òfin bọ́ọ̀lù", "Òfin ìrìn òfuurufú, ojú òfuurufú àti ojú ọjọ́", "Orin"], answer: 2, why: "Àwọn awakọ̀ gbọ́dọ̀ mọ òfin ìrìn òfuurufú, ojú òfuurufú, ojú ọjọ́ àti ẹ̀rọ wọn." },
      { objective: "O5", q: "Níbo ni o yẹ kí o ti ṣàyẹ̀wò owó ìwé àṣẹ?", options: ["Ọ̀rọ̀ kan lórí ìkànnì àjọlò", "Ìpolówó olùtajà kan", "Ìrántí ọ̀rẹ́ àtijọ́ kan", "Àkọsílẹ̀ owó ìjọba ti àjọ ìrìn òfuurufú"], answer: 3, why: "Owó máa ń yí padà; àkọsílẹ̀ ìjọba nìkan ló ṣeé gbẹ́kẹ̀ lé." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 1, 4, 8, 9, 11, 13, 14, 16, 17]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", ṣe àṣeṣe tàbí tún apá yẹn ṣe, kí o sì tún un ṣàyẹ̀wò.",
    criteria: [
      {
        name: "Ìdánrawò márùn-ún",
        objective: "O2",
        notYet: "Ìdánrawò kan tàbí jù bẹ́ẹ̀ lọ kò tíì lọ láìkọsẹ̀ ní ìgbà mẹ́ta tẹ̀léra.",
        meets: "Dídúró lójú kan, àpótí, nọ́mbà 8, yíyípo àti ìlà ẹ̀rọ gígé koríko, ọ̀kọ̀ọ̀kan lọ láìkọsẹ̀ ní ìgbà mẹ́ta tẹ̀léra.",
        exceeds: "Ó tún fo àpótí àti nọ́mbà 8 láìkọsẹ̀ ní nose-in."
      },
      {
        name: "Ìdánrawò pàjáwìrì",
        objective: "O4",
        notYet: "Ẹ̀rù ń bà á tàbí ó ń fo ìgbésẹ̀ kan sílẹ̀ nínú ìdánrawò pàjáwìrì.",
        meets: "Ó ń tẹ̀lé àwọn ìgbésẹ̀ tó tọ́ fún àsopọ̀ tí ó já, bátìrì tí ó kéré àti GPS tí ó sọnù.",
        exceeds: "Ó ń gúnlẹ̀ láìléwu láti attitude mode ní òdì kejì afẹ́fẹ́ láìsí ìrànlọ́wọ́."
      },
      {
        name: "Ìwé àkọsílẹ̀ fífò",
        objective: "O2",
        notYet: "Àwọn àṣeṣe kan kò sí nínú rẹ̀, tàbí àwọn àkọsílẹ̀ kò ní àwọn nǹkan pàtàkì.",
        meets: "Gbogbo àṣeṣe wà nínú rẹ̀ pẹ̀lú ọjọ́, simulator, ìṣẹ́jú, irú fífò, ojú ọjọ́, ìṣòro àti ẹ̀kọ́.",
        exceeds: "Àkókò simulator àti ti fífò gidi wà ní ọ̀wọ̀n ọ̀tọ̀ọ̀tọ̀, ẹ̀dà míì àkọsílẹ̀ náà sì wà."
      },
      {
        name: "Ètò ìwé àṣẹ",
        objective: "O5",
        notYet: "Àjọ ìjọba, ìwé àṣẹ tàbí àwọn ìgbésẹ̀ kò sí nínú rẹ̀, tàbí wọ́n méfò owó.",
        meets: "Àjọ ìjọba, àwọn ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí tí ó rí, ìwé àṣẹ tí ó nílò, àwọn ìgbésẹ̀, àwọn ìwé, owó láti orísun ìjọba àti àwọn ọjọ́ àfojúsùn.",
        exceeds: "Ó ti kàn sí ilé-ẹ̀kọ́ kan tí ó wà lórí àkọsílẹ̀ àwọn tí wọ́n fọwọ́ sí, ó sì kọ ọjọ́ tí ó ṣàyẹ̀wò sílẹ̀."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ sílẹ̀ ní ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gba ìwé àṣẹ awakọ̀ drone láàárín ọdún kan",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń fò pẹ̀lú ìforúkọsílẹ̀, ìwé àṣẹ àti ìyọ̀ǹda tí orílẹ̀-èdè wọn ń béèrè nìkan"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí fóònù tí ó ní simulator drone ọ̀fẹ́ tàbí èyí tí kò wọ́n; controller tí ó bá wà",
      "Ìwé àkọsílẹ̀ fífò lórí ìwé, spreadsheet tàbí app àkọsílẹ̀",
      "Íńtánẹ́ẹ̀tì láti wo ojú-ewé àjọ ìjọba ìrìn òfuurufú àti àkọsílẹ̀ àwọn ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí",
      "Nǹkan bí ìṣẹ́jú 60 ti ẹ̀kọ́, pẹ̀lú àṣeṣe simulator kúkúrú ojoojúmọ́ ti ìṣẹ́jú 15 sí 20 fún ọ̀sẹ̀ mélòó kan"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe àwọn ìdánrawò àkọ́kọ́ lórí ojú-iboju tí gbogbo ènìyàn ń wò kí àwọn akẹ́kọ̀ọ́ lè rí ìṣípò ọ̀pá.",
      "Jẹ́ kí ó yé wọn pé ẹ̀kọ́ yìí kò fúnni ní ìwé àṣẹ tàbí àṣẹ láti fo drone gidi.",
      "Ṣe àyẹ̀wò ìdánrawò kúkúrú níbi tí àwọn akẹ́kọ̀ọ́ ti ń fi ìdánrawò kọ̀ọ̀kan hàn ní ìgbà mẹ́ta tẹ̀léra.",
      "Ẹ jọ ṣàyẹ̀wò àkọsílẹ̀ àwọn ilé-ẹ̀kọ́ tí wọ́n fọwọ́ sí, kí o sì kìlọ̀ fún wọn láti má ṣe sanwó fún ilé-ẹ̀kọ́ tí kò sí lórí àkọsílẹ̀.",
      "Fi rubric ṣe àmì fún àwọn ìdánrawò, ìwé àkọsílẹ̀ fífò àti ètò ìwé àṣẹ, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
