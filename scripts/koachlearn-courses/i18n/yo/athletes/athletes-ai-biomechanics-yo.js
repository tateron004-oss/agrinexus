"use strict";

// Koach Learn course (Yoruba translation of athletes/athletes-ai-biomechanics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-biomechanics-yo",
  lang: "yo",
  translationOf: "athletes-ai-biomechanics",
  category: "Athletes",
  name: "Biomechanics pẹ̀lú AI",
  skills: "Ṣíṣàlàyé àwọn ọ̀rọ̀ ìpìlẹ̀ biomechanics, Yíya fídíò ìgbésẹ̀ ara fún ìtúpalẹ̀, Pípín ọgbọ́n eré sí ìpele, Lílo àwọn irinṣẹ́ pose estimation àti wíwo fídíò àwòrán-sí-àwòrán, Fífi ọ̀nà eré ṣáájú àti lẹ́yìn wéra pẹ̀lú kóòṣì rẹ",
  outcome: "ya fídíò ìgbésẹ̀ eré kan láti àwọn igun tó tọ́, pín in sí ìpele, lo wíwo àwòrán-sí-àwòrán (àti, tí o bá fẹ́, irinṣẹ́ pose estimation ọ̀fẹ́) láti ṣàlàyé ohun kan nínú ọ̀nà eré rẹ, kí o sì ṣe àfiwé ṣáájú àti lẹ́yìn láti wò pẹ̀lú kóòṣì rẹ.",
  about: [
    "Biomechanics ni ẹ̀kọ́ nípa bí ara ṣe ń gbé. Ẹ̀kọ́ yìí wà fún àwọn eléré ìdárayá àti àwọn kóòṣì tí wọ́n fẹ́ lóye ọ̀nà eré (technique) dáadáa pẹ̀lú kámẹ́rà fóònù àti àwọn irinṣẹ́ AI, nínú eré bí sísáré, fífò, jíju nǹkan, títa bọ́ọ̀lù sí àwọ̀n, fífi nǹkan gbá bọ́ọ̀lù àti gbígbá bọ́ọ̀lù.",
    "O máa kọ́ àwọn ọ̀rọ̀ pàtàkì díẹ̀, ya fídíò ìgbésẹ̀ ara dáadáa, pín in sí ìpele, kí o sì lo fídíò onílọ̀ọ́ra (slow motion), wíwo àwòrán-sí-àwòrán àti àwọn irinṣẹ́ AI tó ń wá ipò ara láti rí ohun tó ń ṣẹlẹ̀. Lẹ́yìn náà, o máa fi ṣáájú àti lẹ́yìn wéra pẹ̀lú kóòṣì rẹ.",
    "Ẹ̀kọ́ gbogbogbò ni èyí. Kóòṣì rẹ ló yẹ kó sọ ìyípadà ọ̀nà eré, ìbéèrè nípa ìrora, ìpalára tàbí ìgbà tí o lè padà sí eré sì yẹ kó lọ sọ́dọ̀ athletic trainer rẹ, physical therapist tàbí dókítà. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Yan ìgbésẹ̀ eré kan láti inú eré rẹ. Ya fídíò rẹ̀ láti ẹ̀gbẹ́ àti láti iwájú, pín in sí ìpele, lo wíwo àwòrán-sí-àwòrán láti ṣàlàyé ohun kan nínú ọ̀nà eré rẹ pẹ̀lú screenshot, fohùn ṣọ̀kan lórí cue kan pẹ̀lú kóòṣì rẹ, dánrawò rẹ̀, kí o sì tún ya fídíò lẹ́yìn ọ̀sẹ̀ méjì fún àfiwé ṣáájú àti lẹ́yìn ní ẹ̀gbẹ́ ara wọn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn eléré ìdárayá àti kóòṣì nínú eré bí sísáré, fífò, jíju nǹkan, títa bọ́ọ̀lù sí àwọ̀n, fífi nǹkan gbá bọ́ọ̀lù àti gbígbá bọ́ọ̀lù, tí wọ́n fẹ́ rí ọ̀nà eré kedere pẹ̀lú kámẹ́rà fóònù àti àwọn irinṣẹ́ AI ọ̀fẹ́.",
    startingPoint: "Wọ́n lè ya fídíò lórí fóònù kí wọ́n sì wò ó padà. Ọ̀pọ̀ nínú wọn kò tíì ya fídíò fún ìtúpalẹ̀ rí, pín ọgbọ́n eré sí ìpele, tàbí lo irinṣẹ́ pose estimation.",
    gap: "Ó ṣòro láti rí ọ̀nà eré nígbà tí ara ń yára, fídíò tí a kò yà dáadáa tàbí gbígbẹ́kẹ̀lé nọ́mbà app jù sì ń mú ká parí èrò tí kò tọ́. Àwọn akẹ́kọ̀ọ́ nílò láti ya fídíò dáadáa, ṣàlàyé ohun kan pẹ̀lú ẹ̀rí, kí wọ́n sì ṣàyẹ̀wò ìyípadà pẹ̀lú kóòṣì wọn, kí àkókò ìdánrawò lè lọ sí àtúnṣe tó tọ́.",
    constraints: [
      "Ọ̀rọ̀ tó rọrùn; a máa ṣàlàyé àwọn ọ̀rọ̀ ìmọ̀ díẹ̀ ní ìgbà àkọ́kọ́ tí a bá lò wọ́n",
      "Ẹ̀rọ: fóònù tó ní slow motion; app pose ọ̀fẹ́ kò pọn dandan",
      "Àkókò: nǹkan bí ìṣẹ́jú márùn-ún fún ẹ̀kọ́ kọ̀ọ̀kan, pẹ̀lú yíya fídíò níbi ìdánrawò",
      "A nílò àṣẹ kí a tó ya fídíò àwọn ọmọ ẹgbẹ́ tàbí àwọn ọmọdé, a sì gbọ́dọ̀ ṣàyẹ̀wò ìpamọ́ ìsọfúnni àwọn app pose",
      "Ẹ̀kọ́ gbogbogbò nìkan: kóòṣì ló ń sọ ìyípadà ọ̀nà eré, ìrora tàbí ìpalára sì ń lọ sọ́dọ̀ athletic trainer, physical therapist tàbí dókítà"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí kò tíì lo olùrànlọ́wọ́ AI rí lè kọ́kọ́ ṣe ẹ̀kọ́ ìfihàn sí AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú ìgbésẹ̀ eré kan láti inú eré rẹ", action: "ṣàlàyé àwọn ọ̀rọ̀ ìpìlẹ̀ biomechanics bí kinetic chain, range of motion àti center of mass", standard: "pẹ̀lú àpẹẹrẹ tó tọ́ fún ọ̀rọ̀ kọ̀ọ̀kan" },
    { id: "O2", condition: "Pẹ̀lú fóònù níbi ìdánrawò", action: "ya fídíò ìgbésẹ̀ eré láti ẹ̀gbẹ́ àti láti iwájú, pẹ̀lú ibi kámẹ́rà tí a ti sàmì sí àti slow motion", standard: "pẹ̀lú ó kéré tán ìgbà mẹ́ta fún ìwò kọ̀ọ̀kan àti àṣẹ ẹnikẹ́ni tí o yà" },
    { id: "O3", condition: "Pẹ̀lú fídíò ìgbésẹ̀ eré tí o ti yà", action: "pín ọgbọ́n eré náà sí ìpele, kí o sì mú àwòrán pàtàkì kan tí o fi orúkọ sí fún ìpele kọ̀ọ̀kan", standard: "kí kóòṣì rẹ sì fọwọ́ sí àwọn ìpele náà" },
    { id: "O4", condition: "Pẹ̀lú irinṣẹ́ pose estimation tàbí ohun tó ṣe jáde", action: "ṣàlàyé ohun tí pose estimation ń fi hàn, kí o sì dárúkọ ohun tó lè mú kó ṣe àṣìṣe", standard: "kí o sì ka àwọn igun rẹ̀ sí ìfojúdíwọ̀n, kì í ṣe ìwọ̀n láti ilé ìwádìí" },
    { id: "O5", condition: "Pẹ̀lú àwọn àwòrán pàtàkì rẹ", action: "ṣàlàyé ohun kan nínú ọ̀nà eré pẹ̀lú ọ̀rọ̀ àìdájọ́ àti screenshot, kí o sì yí i padà sí ìbéèrè fún kóòṣì rẹ", standard: "kí o sì máa ṣiṣẹ́ lórí ohun kan ṣoṣo ní àkókò kan" },
    { id: "O6", condition: "Lẹ́yìn tí o bá ti dánrawò cue kóòṣì fún nǹkan bí ọ̀sẹ̀ méjì", action: "ṣe àfiwé ṣáájú àti lẹ́yìn ní ẹ̀gbẹ́ ara wọn, tí a yà ní ọ̀nà kan náà", standard: "kí o sì dúró kí o wá ìrànlọ́wọ́ tí ìyípadà náà bá fa ìrora" }
  ],
  chapters: [
    {
      name: "Orí 1: Rírí ìgbésẹ̀ ara",
      lessons: [
        {
          objectives: ["O1"],
          title: "Biomechanics ní ọ̀rọ̀ tó rọrùn",
          minutes: 5,
          goal: "Ṣàlàyé ọ̀rọ̀ ìpìlẹ̀ biomechanics márùn-ún pẹ̀lú àpẹẹrẹ láti inú eré rẹ.",
          text: [
            "Biomechanics ń wo bí agbára àti ipò ara ṣe ń mú ìgbésẹ̀ wá. Àwọn kóòṣì ń lò ó láti mú ọ̀nà eré ṣiṣẹ́ dáadáa sí i àti láti dín ewu ìpalára kù.",
            "Ọ̀rọ̀ márùn-ún tó wúlò: Joint angle (igun oríkèé, bí orúnkún, ìbàdí tàbí ìgbọ̀nwọ́). Range of motion (bí oríkèé ṣe lè lọ jìnnà tó). Center of mass (ojú ìwọ̀ntúnwọ̀nsì ara rẹ). Kinetic chain (bí agbára ṣe ń kọjá láti ilẹ̀ gba ẹsẹ̀, ìbàdí, ara àti apá). Ground reaction force (bí ilẹ̀ ṣe ń tì ọ́ padà nígbà tí o bá tẹ̀ ẹ́).",
            "Àpẹẹrẹ: nínú jump shot (bí a ṣe ń fò sókè ta bọ́ọ̀lù sí àwọ̀n), agbára bẹ̀rẹ̀ láti ẹsẹ̀ rẹ, ó kọjá gba ìbàdí àti ara rẹ, ó sì parí sí apá àti ọrùn-ọwọ́ rẹ. Ìyẹn ni kinetic chain. Olùrànlọ́wọ́ AI lè ṣàlàyé ọ̀rọ̀ èyíkéyìí pẹ̀lú àpẹẹrẹ láti inú eré rẹ."
          ],
          words: [["Biomechanics", "ẹ̀kọ́ nípa bí agbára àti ipò ara ṣe ń mú ìgbésẹ̀ wá."], ["Kinetic chain", "bí agbára ṣe ń kọjá láti apá ara kan sí èkejì, bí ẹsẹ̀ sí ìbàdí sí apá."], ["Center of mass", "ojú ìwọ̀ntúnwọ̀nsì ara rẹ."]],
          slides: [
            { title: "Biomechanics", bullets: ["Bí agbára àti ipò ara ṣe ń mú ìgbésẹ̀ wá", "Ọ̀nà eré tó ṣiṣẹ́ dáadáa sí i", "Ewu ìpalára tó kéré sí i"] },
            { title: "Ọ̀rọ̀ pàtàkì márùn-ún", bullets: ["Joint angle, range of motion", "Center of mass", "Kinetic chain, ground reaction force"] },
            { title: "Àpẹẹrẹ jump shot", bullets: ["Ẹsẹ̀ -> ìbàdí -> ara -> apá -> ọrùn-ọwọ́", "Ìyẹn ni kinetic chain"] }
          ],
          tryIt: "Yan ìgbésẹ̀ eré kan láti inú eré rẹ. Ní kí olùrànlọ́wọ́ AI ṣàlàyé kinetic chain inú rẹ̀ ní ọ̀rọ̀ tó rọrùn. Kọ ọ́ ní ọ̀rọ̀ ara rẹ ní gbólóhùn mẹ́ta.",
          youCanNow: "ṣàlàyé àwọn ọ̀rọ̀ ìpìlẹ̀ biomechanics pẹ̀lú àpẹẹrẹ láti inú eré rẹ.",
          quickCheck: [
            { objective: "O1", q: "Kí ni range of motion ń ṣàlàyé?", options: ["Bí oríkèé ṣe lè lọ jìnnà tó", "Bí o ṣe ń sáré yára tó", "Bí o ṣe wúwo tó", "Bí o ṣe ń dánrawò pẹ́ tó"], answer: 0, why: "Range of motion ni bí oríkèé ṣe lè lọ jìnnà tó." },
            { objective: "O1", q: "O fẹ́ ṣàlàyé kinetic chain nínú jump shot rẹ. Kí ni o máa ṣàlàyé?", options: ["Bí o ṣe ń yí ọrùn-ọwọ́ nìkan", "Bí agbára ṣe ń kọjá láti ẹsẹ̀ gòkè gba ara lọ sí bọ́ọ̀lù", "Àwọ̀ bọ́ọ̀lù", "Bí ariwo àwọn òǹwòran ṣe pọ̀ tó"], answer: 1, why: "Kinetic chain ni bí agbára ṣe ń kọjá láti apá ara kan sí èkejì." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yíya fídíò ìgbésẹ̀ ara fún ìtúpalẹ̀",
          minutes: 5,
          goal: "Ya fídíò ìgbésẹ̀ eré láti àwọn igun tó tọ́ kí a lè túpalẹ̀ rẹ̀.",
          text: [
            "Ìtúpalẹ̀ nílò fídíò tó dára. Yà á láti ẹ̀gbẹ́ (láti rí igun oríkèé síwájú àti sẹ́yìn) àti láti iwájú tàbí ẹ̀yìn (láti rí orúnkún tó ń wọ inú, ìbàdí tó ń lọ sílẹ̀ tàbí apá tó ń kọjá ara wọn). Jẹ́ kí kámẹ́rà wà ní nǹkan bí gíga ìbàdí, kí ó dúró ṣinṣin, kí ó sì jìnnà tó láti rí gbogbo ara.",
            "Lo slow motion fóònù rẹ àti ìmọ́lẹ̀ tó dára. Wọ aṣọ tó ń fi ìrísí ara hàn, kí o sì fi tape sàmì sí ilẹ̀ kí o lè yà á láti ibi kan náà nígbà míì.",
            "Ya ọ̀pọ̀ ìgbà (rep), kì í ṣe ẹ̀ẹ̀kan ṣoṣo, kí o sì yà á lẹ́yìn tí ara rẹ bá ti gbóná. Gba àṣẹ kí o tó ya fídíò àwọn ẹlòmíì, kí o sì tẹ̀lé òfin ẹgbẹ́ rẹ."
          ],
          steps: ["Gbé fóònù sí gíga ìbàdí lórí tripod tàbí ìdúró.", "Yà á láti ẹ̀gbẹ́.", "Yà á láti iwájú tàbí ẹ̀yìn.", "Lo slow motion àti ìmọ́lẹ̀ tó dára.", "Sàmì sí ibi kámẹ́rà àti ibi eléré fún ìgbà míì.", "Ya ìgbà mẹ́ta sí márùn-ún."],
          words: [["Sagittal view", "ìwò láti ẹ̀gbẹ́, tó ń fi ìgbésẹ̀ síwájú àti sẹ́yìn hàn."], ["Frontal view", "ìwò láti iwájú tàbí ẹ̀yìn, tó ń fi ìgbésẹ̀ ẹ̀gbẹ́-sí-ẹ̀gbẹ́ hàn."]],
          slides: [
            { title: "Igun méjì", bullets: ["Ẹ̀gbẹ́: igun oríkèé", "Iwájú tàbí ẹ̀yìn: orúnkún, ìbàdí, apá"] },
            { title: "Ṣíṣètò kámẹ́rà", bullets: ["Gíga ìbàdí, ó dúró ṣinṣin", "Gbogbo ara hàn nínú fídíò", "Slow motion, ìmọ́lẹ̀ tó dára"] },
            { title: "Ohun tí o lè tún ṣe", bullets: ["Sàmì sí ibi kámẹ́rà àti ibi eléré", "Ìgbà mẹ́ta sí márùn-ún lẹ́yìn tí ara bá gbóná"] }
          ],
          tryIt: "Ya fídíò ìgbésẹ̀ eré kan láti ẹ̀gbẹ́ àti láti iwájú, ìgbà mẹ́ta fún ọ̀kọ̀ọ̀kan, pẹ̀lú fóònù ní gíga ìbàdí àti slow motion. Sàmì sí àwọn ibi náà.",
          youCanNow: "ya fídíò ìgbésẹ̀ eré dáadáa fún ìtúpalẹ̀ biomechanics.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ìwò láti ẹ̀gbẹ́ ń fi hàn jù?", options: ["Orúnkún tó ń wọ inú", "Àwọn òǹwòran", "Ìgbésẹ̀ síwájú àti sẹ́yìn àti igun oríkèé", "Orúkọ ilé-iṣẹ́ bàtà rẹ"], answer: 2, why: "Ìwò láti ẹ̀gbẹ́ ń fi ìgbésẹ̀ síwájú àti sẹ́yìn àti igun oríkèé hàn kedere." },
            { objective: "O2", q: "O fẹ́ ya fídíò ìbẹ̀rẹ̀ eré sísáré ọmọ ẹgbẹ́ rẹ kan. Kí ni o máa kọ́kọ́ ṣe?", options: ["Yà á láìbéèrè", "Fi í sórí ayélujára lẹ́sẹ̀kẹsẹ̀", "Lo zoom láti ọ̀nà jíjìn", "Béèrè àṣẹ rẹ̀"], answer: 3, why: "Máa gba àṣẹ nígbà gbogbo kí o tó ya fídíò àwọn ẹlòmíì." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pípín ọgbọ́n eré sí ìpele",
          minutes: 5,
          goal: "Pín ìgbésẹ̀ eré rẹ sí ìpele, kí o sì wá àwọn ipò pàtàkì.",
          text: [
            "Ọ̀pọ̀ ọgbọ́n eré ní ìpele. Jíju nǹkan: wind-up (ìmúra), ìgbésẹ̀ ẹsẹ̀, fífa apá sẹ́yìn, yíyára, jíjù sílẹ̀ (release), ìparí ìgbésẹ̀. Ìbẹ̀rẹ̀ sísáré: ìmúra (set), títì sílẹ̀, wíwakọ̀ síwájú, ìyípadà. Fífò: sísún mọ́, gbígbé ẹsẹ̀ lélẹ̀, fífò sókè, wíwà ní afẹ́fẹ́, bíbalẹ̀.",
            "Fún ìpele kọ̀ọ̀kan, àwọn ipò pàtàkì wà tí àwọn kóòṣì ń wò: ibi tí ẹsẹ̀ bá balẹ̀ sí, igun orúnkún nígbà fífò sókè, igun ara nígbà release. Kóòṣì rẹ lè sọ èyí tó ṣe pàtàkì jù fún ọ.",
            "Lo wíwo àwòrán-sí-àwòrán nínú app fídíò fóònù rẹ tàbí irinṣẹ́ fídíò ọ̀fẹ́. Dá a dúró lórí àwòrán pàtàkì fún ìpele kọ̀ọ̀kan, kí o sì ya screenshot. Ní kí olùrànlọ́wọ́ AI to àwọn ìpele tó wọ́pọ̀ nínú ọgbọ́n eré rẹ, lẹ́yìn náà jẹ́ kí kóòṣì rẹ fọwọ́ sí wọn."
          ],
          steps: ["Ní kí AI fún ọ ní àwọn ìpele tó wọ́pọ̀ nínú ọgbọ́n eré rẹ.", "Jẹ́ kí kóòṣì rẹ fọwọ́ sí àwọn ìpele náà.", "Wo fídíò rẹ ní àwòrán-sí-àwòrán.", "Ya screenshot àwòrán pàtàkì fún ìpele kọ̀ọ̀kan.", "Fi orúkọ sí screenshot kọ̀ọ̀kan."],
          words: [["Ìpele (phase)", "apá kan nínú ìgbésẹ̀ eré, bí wind-up tàbí release."], ["Ipò pàtàkì", "ipò ara tó ṣe pàtàkì ní àkókò kan pàtó."], ["Àwòrán-sí-àwòrán (frame by frame)", "wíwo fídíò ní àwòrán kan lẹ́ẹ̀kan."]],
          slides: [
            { title: "Ọgbọ́n eré ní ìpele", bullets: ["Jíju nǹkan: láti wind-up dé ìparí ìgbésẹ̀", "Ìbẹ̀rẹ̀ sísáré: láti set dé ìyípadà", "Fífò: láti sísún mọ́ dé bíbalẹ̀"] },
            { title: "Àwọn ipò pàtàkì", bullets: ["Ibi tí ẹsẹ̀ balẹ̀ sí", "Igun orúnkún nígbà fífò sókè", "Igun ara nígbà release"] },
            { title: "Àwòrán-sí-àwòrán", bullets: ["Dá a dúró lórí àwòrán pàtàkì kọ̀ọ̀kan", "Ya screenshot kí o sì fi orúkọ sí i", "Jẹ́ kí kóòṣì rẹ fọwọ́ sí àwọn ìpele"] }
          ],
          tryIt: "Pín ìgbésẹ̀ eré tí o yà sí ìpele. Ya screenshot àwòrán pàtàkì kan fún ìpele kọ̀ọ̀kan, kí o sì fi orúkọ sí i.",
          youCanNow: "pín ọgbọ́n eré sí ìpele kí o sì mú àwọn ipò pàtàkì rẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Kí ni àwòrán pàtàkì (key frame)?", options: ["Àwòrán kan tó fi ipò pàtàkì nínú ìpele kan hàn", "Ìṣẹ́jú-àáyá àkọ́kọ́ fídíò èyíkéyìí", "Àlẹ̀mọ́ fídíò (filter)", "Ètò ìdánrawò"], answer: 0, why: "Àwòrán pàtàkì ń mú ipò pàtàkì ìpele kan." },
            { objective: "O3", q: "AI dábàá ìpele mẹ́rin fún jíju nǹkan rẹ. Kí ni o máa ṣe tẹ̀lé?", options: ["Lò wọ́n láìṣàyẹ̀wò", "Jẹ́ kí kóòṣì rẹ fọwọ́ sí wọn", "Pa fídíò rẹ rẹ́", "Fi ìpele mẹ́wàá míì kún un"], answer: 1, why: "Kóòṣì rẹ ló ń fọwọ́ sí àwọn ìpele àti ipò pàtàkì fún eré rẹ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Rírí ìgbésẹ̀ ara",
        questions: [
          { objective: "O1", q: "Kí ni kinetic chain?", options: ["Apá kan nínú kẹ̀kẹ́", "Ẹ̀rọ gbígbé irin", "Bí agbára ṣe ń kọjá láti apá ara kan sí èkejì", "Irú bàtà kan"], answer: 2, why: "Agbára ń ṣàn láti ẹsẹ̀ sí ìbàdí sí ara sí apá." },
          { objective: "O2", q: "Ìwò kámẹ́rà wo ló ń fi orúnkún tó ń wọ inú hàn jù?", options: ["Ìwò láti iwájú tàbí ẹ̀yìn", "Ìwò láti ẹ̀gbẹ́ nìkan", "Láti òkè nìkan", "Àwòrán ojú lásán"], answer: 0, why: "Ìgbésẹ̀ ẹ̀gbẹ́-sí-ẹ̀gbẹ́ máa ń hàn jù láti iwájú tàbí ẹ̀yìn." },
          { objective: "O2", q: "Gíga wo ni kámẹ́rà yẹ kó wà?", options: ["Lórí ilẹ̀", "Lókè orí rẹ", "Ibikíbi", "Nǹkan bí gíga ìbàdí"], answer: 3, why: "Gíga ìbàdí ń dín yíyí ìrísí ara kù." },
          { objective: "O2", q: "Kí nìdí tí o fi yẹ kí o ya ọ̀pọ̀ ìgbà (rep)?", options: ["Láti kún ààyè ìpamọ́", "Ìgbà kan lè má jẹ́ bí o ṣe máa ń ṣe é", "Òfin ni", "Láti mú un gùn sí i"], answer: 1, why: "Ọ̀pọ̀ ìgbà ń fi bí o ṣe máa ń ṣe é gan-an hàn." },
          { objective: "O3", q: "Ta ló yẹ kó fọwọ́ sí àwọn ìpele àti ipò pàtàkì fún ọ?", options: ["Fídíò èyíkéyìí", "Kóòṣì rẹ", "Olùfẹ́ eré kan", "Kò sí ẹnìkan"], answer: 1, why: "Kóòṣì rẹ mọ ohun tó ṣe pàtàkì fún ọ̀nà eré rẹ." }
        ]
      }
    },
    {
      name: "Orí 2: Àwọn irinṣẹ́ AI àti ìyípadà tòótọ́",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pose estimation: AI tó ń wá àwọn oríkèé rẹ",
          minutes: 5,
          goal: "Ṣàlàyé ohun tí pose estimation ń ṣe àti ibi tí agbára rẹ̀ mọ.",
          text: [
            "Pose estimation ni AI tó ń wá àwọn ojú ara, bí èjìká, ìgbọ̀nwọ́, ìbàdí, orúnkún àti kókósẹ̀, nínú fọ́tò tàbí fídíò, tó sì ń so wọ́n pọ̀ di àwòrán igi (stick figure). Àwọn app kan tún máa ń fojú díwọ̀n igun oríkèé.",
            "Àwọn irinṣẹ́ yìí wúlò láti rí ipò ara àti láti fi àwọn ìgbà wéra, ṣùgbọ́n wọ́n máa ń ṣe àṣìṣe: aṣọ tó tú, ìgbésẹ̀ tó yára, fídíò tí kò mọ́, ìmọ́lẹ̀ tí kò tó, ẹlòmíì nínú fídíò tàbí apá ara tó farapamọ́ lẹ́yìn òmíràn lè dà wọ́n rú. Igun láti fídíò 2D fóònù jẹ́ ìfojúdíwọ̀n, kì í ṣe ìwọ̀n láti ilé ìwádìí.",
            "Tí o bá gbìyànjú app pose, ka òfin ìpamọ́ ìsọfúnni (privacy policy) rẹ̀, nítorí fídíò ara rẹ jẹ́ ìsọfúnni àdáni. Fún àwọn ọmọdé, òbí yẹ kó fọwọ́ sí i. Máa fi àwòrán igi wé fídíò gidi kí o tó gbẹ́kẹ̀lé nọ́mbà kankan."
          ],
          steps: ["Yan fídíò kúkúrú tó mọ́, tí ìmọ́lẹ̀ rẹ̀ dára.", "Tí o bá ń lo app pose, kọ́kọ́ ka privacy policy rẹ̀.", "Fi fídíò náà sínú rẹ̀, kí o sì wo àwòrán igi.", "Ṣàyẹ̀wò pé ó bá ara gidi mu nínú àwòrán pàtàkì kọ̀ọ̀kan.", "Ka àwọn igun sí ìfojúdíwọ̀n."],
          words: [["Pose estimation", "AI tó ń wá àwọn ojú ara nínú fídíò, tó sì ń ya àwòrán igi."], ["Fídíò 2D", "fídíò pẹlẹbẹ láti kámẹ́rà kan; kò lè wọn jíjìn dáadáa pátápátá."]],
          slides: [
            { title: "Pose estimation", bullets: ["AI ń wá èjìká, ìbàdí, orúnkún, kókósẹ̀", "Ó ń ya àwòrán igi", "Àwọn app kan ń fojú díwọ̀n igun"] },
            { title: "Ibi tí agbára rẹ̀ mọ", bullets: ["Fídíò tí kò mọ́, aṣọ tó tú, ìmọ́lẹ̀ tí kò tó", "Apá ara tó farapamọ́", "Igun 2D jẹ́ ìfojúdíwọ̀n"] },
            { title: "Lò ó láìléwu", bullets: ["Ka privacy policy", "Àwọn ọmọdé: òbí ló ń fọwọ́ sí i", "Fi wé fídíò gidi"] }
          ],
          tryIt: "Ní kí olùrànlọ́wọ́ AI ṣàlàyé bí pose estimation ṣe ń ṣiṣẹ́ àti ọ̀nà mẹ́ta tó lè gbà ṣe àṣìṣe. Lẹ́yìn náà wo àwọn àwòrán pàtàkì rẹ, kí o sì kọ ibi tí irinṣẹ́ pose ti lè ní ìṣòro.",
          youCanNow: "ṣàlàyé ohun tí pose estimation ń ṣe àti ìdí tí a fi gbọ́dọ̀ ṣàyẹ̀wò àwọn nọ́mbà rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ni irinṣẹ́ pose estimation ń yà sórí fídíò?", options: ["Àwòrán ìlù ọkàn", "Màápù ojú ọjọ́", "Àwòrán igi lórí àwọn oríkèé ara", "Àmì ayò ìdíje"], answer: 2, why: "Pose estimation ń wá àwọn ojú ara, ó sì ń so wọ́n pọ̀ bí àwòrán igi." },
            { objective: "O4", q: "App pose kan sọ pé igun orúnkún rẹ jẹ́ 143 degrees nínú fídíò tí kò mọ́. Kí ni o máa ṣe?", options: ["Gbẹ́kẹ̀lé e gẹ́gẹ́ bó ṣe wà", "Pín in bí èsì ilé ìwádìí", "Yí ọ̀nà eré rẹ padà lẹ́sẹ̀kẹsẹ̀", "Kà á sí ìfojúdíwọ̀n, kí o sì ṣàyẹ̀wò àwòrán náà fúnra rẹ"], answer: 3, why: "Fídíò tí kò mọ́ àti fídíò fóònù kan ń sọ igun di ìfojúdíwọ̀n, kì í ṣe ìwọ̀n gidi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣàlàyé ohun kan nínú ọ̀nà eré",
          minutes: 5,
          goal: "Ṣàlàyé ohun kan nínú ọ̀nà eré kedere pẹ̀lú àwọn screenshot rẹ.",
          text: [
            "Yan ohun kan láti wò, kì í ṣe mẹ́wàá. Fún àpẹẹrẹ: \"Nígbà fífò sókè, orúnkún ẹsẹ̀ òsì mi kò tẹ̀ tó ti ọ̀tún.\" tàbí \"Nígbà release, ìgbọ̀nwọ́ mi wà nísàlẹ̀ èjìká mi.\"",
            "Ṣàlàyé rẹ̀ pẹ̀lú ẹ̀rí: ìpele náà, screenshot, àti ohun tí o rí ní àfiwé pẹ̀lú ìgbà míì tàbí àpẹẹrẹ tí kóòṣì rẹ fún ọ. Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ láti kọ àlàyé tó yé, tí kò dájọ́: \"Ràn mí lọ́wọ́ láti ṣàlàyé ohun tí mo rí nínú àwòrán pàtàkì méjì yìí ní ọ̀rọ̀ tó rọrùn, tí kò dájọ́.\" Má ṣe ní kí ó sọ àrùn tàbí ìwòsàn fún ìrora.",
            "Gbé e lọ bá kóòṣì rẹ bí ìbéèrè: \"Mo kíyèsí èyí. Ṣé ó yẹ ká ṣiṣẹ́ lé e lórí? Cue wo ni kí n lò?\""
          ],
          steps: ["Yan ohun kan nínú ọ̀nà eré.", "Yan àwọn screenshot tó fi í hàn.", "Kọ àlàyé tí kò dájọ́ pẹ̀lú ìpele náà.", "Béèrè lọ́wọ́ kóòṣì rẹ bóyá ó ṣe pàtàkì àti cue tí o máa lò."],
          words: [["Cue", "ìtọ́ni kúkúrú tó ń ràn ọ́ lọ́wọ́ láti yí ìgbésẹ̀ padà, bí \"gbé àyà sókè\"."], ["Àlàyé àìdájọ́", "sísọ ohun tí o rí láìdájọ́ tàbí láìsọ àrùn."]],
          slides: [
            { title: "Ohun kan, kì í ṣe mẹ́wàá", bullets: ["Àpẹẹrẹ: orúnkún òsì kò tẹ̀ tó nígbà fífò sókè"] },
            { title: "Fi ẹ̀rí hàn", bullets: ["Ìpele àti screenshot", "Àfiwé pẹ̀lú ìgbà míì tàbí àpẹẹrẹ", "Ọ̀rọ̀ àìdájọ́; kò sí sísọ àrùn"] },
            { title: "Béèrè lọ́wọ́ kóòṣì rẹ", bullets: ["\"Ṣé ó yẹ ká ṣiṣẹ́ lé èyí lórí?\"", "\"Cue wo ni kí n lò?\""] }
          ],
          tryIt: "Kọ ohun kan nínú ọ̀nà eré ní gbólóhùn àìdájọ́ méjì pẹ̀lú ìpele náà àti àwọn screenshot. Lo AI láti mú un ṣe kedere sí i, lẹ́yìn náà gbé e lọ bá kóòṣì rẹ.",
          youCanNow: "ṣàlàyé ohun kan nínú ọ̀nà eré pẹ̀lú ẹ̀rí, kí o sì yí i padà sí ìbéèrè fún kóòṣì rẹ.",
          quickCheck: [
            { objective: "O5", q: "Kí ni àlàyé àìdájọ́ nípa ọ̀nà eré?", options: ["Sísọ ohun tí o rí láìsọ àrùn", "Dídárúkọ ìpalára kan", "Sísọ pé eléré náà kò dára", "Fífojú díwọ̀n ohun tó fa ìrora"], answer: 0, why: "Àlàyé àìdájọ́ ń sọ ohun tó hàn, kò sì sọ àrùn." },
            { objective: "O5", q: "O rí nǹkan mẹ́ta tí o fẹ́ tún ṣe. Kí ni o máa gbé lọ bá kóòṣì rẹ?", options: ["Gbogbo mẹ́tàẹ̀ta lẹ́ẹ̀kan", "Ohun kan pẹ̀lú ìpele rẹ̀ àti àwọn screenshot", "Kò sí nǹkan títí sáà eré yóò fi parí", "Ètò ìdánrawò tuntun láti ọ̀dọ̀ AI"], answer: 1, why: "Ṣíṣiṣẹ́ lórí ohun kan ṣoṣo nínú ọ̀nà eré ní àkókò kan ń mú ìyípadà ṣe kedere." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣáájú àti lẹ́yìn: ṣé ó yí padà?",
          minutes: 5,
          goal: "Ṣe àfiwé ní ẹ̀gbẹ́ ara wọn láti rí bóyá ọ̀nà eré yí padà.",
          text: [
            "Lẹ́yìn tí o bá ti dánrawò cue kóòṣì rẹ fún ọ̀sẹ̀ díẹ̀, tún ya fídíò láti àwọn ibi kan náà tí o sàmì sí, igun kan náà, ìmọ́lẹ̀ kan náà. Fi àwòrán pàtàkì ṣáájú àti lẹ́yìn sí ẹ̀gbẹ́ ara wọn nínú slide tàbí Canva (app ọ̀fẹ́ fún ṣíṣe àwòrán).",
            "Wo ipò pàtàkì kan náà nínú ọ̀kọ̀ọ̀kan. Ṣé ìyípadà náà wà níbẹ̀? Ṣé ó wà ní gbogbo ìgbà tàbí ní àwọn kan nìkan? Ìyípadà ń gba ọ̀pọ̀ àtúnṣe; ìtẹ̀síwájú kékeré ṣì jẹ́ ìtẹ̀síwájú.",
            "Tí ìyípadà kan bá fa ìrora, tàbí tí ìgbésẹ̀ kan bá ń dùn ọ́, dúró kí o sì sọ fún athletic trainer rẹ, physical therapist tàbí dókítà. Iṣẹ́ ọ̀nà eré kò gbọ́dọ̀ tẹ̀síwájú nínú ìrora láé."
          ],
          steps: ["Tún ya fídíò láti àwọn ibi àti igun kan náà.", "Yan àwọn àwòrán pàtàkì kan náà.", "Fi ṣáájú àti lẹ́yìn sí ẹ̀gbẹ́ ara wọn.", "Kọ ohun tó yí padà àti ní ìgbà mélòó.", "Ṣàyẹ̀wò rẹ̀ pẹ̀lú kóòṣì rẹ; sọ ìrora èyíkéyìí."],
          words: [["Ní ẹ̀gbẹ́ ara wọn (side-by-side)", "àwòrán tàbí fídíò méjì tí a gbé sí ẹ̀gbẹ́ ara wọn láti fi wéra."], ["Physical therapist", "akọ́ṣẹ́mọṣẹ́ tó ní ìwé àṣẹ, tó ń ran àwọn ènìyàn lọ́wọ́ láti tún rìn àti gbé ara dáadáa lẹ́yìn ìpalára."]],
          slides: [
            { title: "Ìṣètò kan náà", bullets: ["Àwọn ibi kan náà tí a sàmì sí", "Igun àti ìmọ́lẹ̀ kan náà"] },
            { title: "Fi wéra", bullets: ["Àwòrán pàtàkì kan náà, ní ẹ̀gbẹ́ ara wọn", "Gbogbo ìgbà tàbí àwọn kan nìkan?", "Ìtẹ̀síwájú kékeré náà ka"] },
            { title: "Ààbò", bullets: ["Ìrora? Dúró", "Sọ fún athletic trainer, PT tàbí dókítà rẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: dánrawò cue kóòṣì rẹ, tún ya fídíò lẹ́yìn ọ̀sẹ̀ méjì láti àwọn ibi kan náà, kí o sì ṣe àfiwé ṣáájú àti lẹ́yìn ní ẹ̀gbẹ́ ara wọn láti wò pẹ̀lú kóòṣì rẹ.",
          youCanNow: "fi ọ̀nà eré ṣáájú àti lẹ́yìn wéra lọ́nà tó tọ́, kí o sì mọ ìgbà tí o gbọ́dọ̀ dúró nítorí ìrora.",
          quickCheck: [
            { objective: "O6", q: "Kí ló ń mú àfiwé ṣáájú àti lẹ́yìn tọ́?", options: ["Yíya fídíò láti igun tuntun ní gbogbo ìgbà", "Lílo ìmọ́lẹ̀ tó yàtọ̀", "Yíya fídíò láti àwọn ibi, igun àti ìmọ́lẹ̀ kan náà", "Lílo ìgbà tó dára jù nìkan"], answer: 2, why: "Ọ̀nà eré nìkan ló yẹ kó yàtọ̀ láàárín fídíò méjèèjì." },
            { objective: "O6", q: "Cue tuntun náà bẹ̀rẹ̀ sí ní mú èjìká rẹ dùn ọ́. Kí ni o máa ṣe?", options: ["Tẹ̀síwájú nínú ìrora", "Ní kí AI sọ àrùn náà", "Dánrawò rẹ̀ ní ìlọ́po méjì", "Dúró kí o sì sọ fún athletic trainer rẹ, physical therapist tàbí dókítà"], answer: 3, why: "Ìrora jẹ́ ìdí láti dúró kí o sì rí akọ́ṣẹ́mọṣẹ́ tó kọ́ṣẹ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àwọn irinṣẹ́ AI àti ìyípadà tòótọ́",
        questions: [
          { objective: "O4", q: "Kí ni pose estimation ń ṣe?", options: ["Ó ń sọ àrùn ìpalára", "Ó ń kọ ètò ìdánrawò", "Ó ń ka àwọn olùtẹ̀lé", "Ó ń wá àwọn ojú ara nínú fídíò, ó sì ń ya àwòrán igi"], answer: 3, why: "Ó ń wá ibi tí àwọn oríkèé wà nínú àwòrán." },
          { objective: "O4", q: "Èwo ló lè mú irinṣẹ́ pose ṣe àṣìṣe?", options: ["Fídíò tí kò mọ́ àti aṣọ tó tú", "Ìmọ́lẹ̀ tó dára", "Aṣọ tó há ara", "Ẹ̀yìn fídíò tó mọ́ kedere"], answer: 0, why: "Fídíò tí kò mọ́ àti aṣọ tó tú ń bo ibi tí oríkèé wà." },
          { objective: "O4", q: "Igun láti fídíò fóònù kan jẹ́:", options: ["Pípé", "Àyẹ̀wò àrùn ti dókítà", "Ìfojúdíwọ̀n, kì í ṣe ìwọ̀n láti ilé ìwádìí", "Àìwúlò"], answer: 2, why: "Fídíò 2D kò lè wọn jíjìn dáadáa pátápátá." },
          { objective: "O5", q: "Kí ni o yẹ kí o béèrè lọ́wọ́ AI nígbà tí o bá ń ṣàlàyé ọ̀nà eré rẹ?", options: ["Kí ó sọ àrùn orúnkún rẹ", "Kí ó kọ ìwòsàn fún ọ", "Kí ó kọjá ọ̀rọ̀ kóòṣì rẹ", "Ìrànlọ́wọ́ láti ṣàlàyé ohun tí o rí ní ọ̀rọ̀ àìdájọ́"], answer: 3, why: "Sísọ àrùn àti ìwòsàn jẹ́ iṣẹ́ àwọn akọ́ṣẹ́mọṣẹ́." },
          { objective: "O6", q: "Ọ̀nà eré tuntun kan ń fa ìrora. O máa:", options: ["Tẹ̀síwájú nínú ìrora", "Dúró kí o sì sọ fún athletic trainer, PT tàbí dókítà rẹ", "Fojú fò ó", "Béèrè oògùn ìrora lọ́wọ́ AI"], answer: 1, why: "Má ṣe tẹ̀síwájú nínú ìrora láé." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Biomechanics pẹ̀lú AI",
    questions: [
      { objective: "O1", q: "Biomechanics ń kọ́ nípa:", options: ["Owó ẹgbẹ́", "Ìkànnì àjọlò (social media)", "Bí agbára àti ipò ara ṣe ń mú ìgbésẹ̀ wá", "Bí a ṣe ń kọ́ pápá ìṣeré"], answer: 2, why: "Ó jẹ́ sáyẹ́ǹsì ìgbésẹ̀ ara." },
      { objective: "O1", q: "Range of motion ni:", options: ["Bí oríkèé ṣe lè lọ jìnnà tó", "Bí o ṣe sáré jìnnà tó", "Pátákó àmì ayò", "Irú ìdánrawò kan"], answer: 0, why: "Ó ń ṣàlàyé ìgbésẹ̀ oríkèé." },
      { objective: "O1", q: "Center of mass ni:", options: ["Ojú ìwọ̀ntúnwọ̀nsì ara rẹ", "Àárín pápá", "Ilé ìdárayá (gym)", "Iṣan ara kan"], answer: 0, why: "Ibẹ̀ ni ìwúwo rẹ ti dọ́gba." },
      { objective: "O1", q: "Ground reaction force ni:", options: ["Afẹ́fẹ́", "Ìjìyà nínú eré", "Bí ilẹ̀ ṣe ń tì ọ́ padà", "Òfin ẹgbẹ́"], answer: 2, why: "O tẹ ilẹ̀, ilẹ̀ sì tì ọ́ padà." },
      { objective: "O1", q: "Nínú jump shot, agbára bẹ̀rẹ̀ láti:", options: ["Ọrùn-ọwọ́", "Ẹsẹ̀", "Ojú", "Bọ́ọ̀lù"], answer: 1, why: "Kinetic chain bẹ̀rẹ̀ láti ilẹ̀ gòkè." },
      { objective: "O2", q: "Ìwò láti ẹ̀gbẹ́ ń fi hàn:", options: ["Ojú nìkan", "Kò sí ohun tó wúlò", "Àwọn òǹwòran nìkan", "Ìgbésẹ̀ síwájú àti sẹ́yìn àti igun oríkèé"], answer: 3, why: "Ìyẹn ni sagittal view." },
      { objective: "O2", q: "Kí nìdí tí o fi ń sàmì sí ibi kámẹ́rà lórí ilẹ̀?", options: ["Fún ẹwà", "Òfin ni", "Láti yà á ní ọ̀nà kan náà nígbà míì", "Láti da àwọn ẹlòmíì rú"], answer: 2, why: "Ìṣètò kan náà ń mú àfiwé tọ́." },
      { objective: "O2", q: "Slow motion ń ràn ọ́ lọ́wọ́ láti:", options: ["Fi bátìrì pamọ́", "Bo àṣìṣe mọ́lẹ̀", "Fi orin kún un", "Rí ìgbésẹ̀ tó yára kedere"], answer: 3, why: "Ó ń fi kúlẹ̀kúlẹ̀ hàn." },
      { objective: "O2", q: "Kí o tó ya fídíò àwọn ọmọ ẹgbẹ́ rẹ, o yẹ kí o:", options: ["Gba àṣẹ", "Kọ́kọ́ fi í sórí ayélujára", "Yà á ní ìkọ̀kọ̀", "Fò ó sílẹ̀"], answer: 0, why: "Bọ̀wọ̀ fún ìpamọ́ ìsọfúnni àti òfin ẹgbẹ́." },
      { objective: "O3", q: "Ìpele (phase) ni:", options: ["Apá kan nínú àkókò ìdíje", "Apá kan nínú ìgbésẹ̀ eré", "Ẹgbẹ́ kan", "Fóònù kan"], answer: 1, why: "A máa ń pín ọgbọ́n eré sí ìpele." },
      { objective: "O3", q: "Èwo ni ìpele kan nínú jíju nǹkan?", options: ["Ìsinmi àárín eré", "Timeout", "Release", "Sísáré ìtutù ara"], answer: 2, why: "Release jẹ́ ìpele nínú jíju nǹkan." },
      { objective: "O3", q: "Wíwo àwòrán-sí-àwòrán túmọ̀ sí:", options: ["Wíwo fídíò ní àwòrán kan lẹ́ẹ̀kan", "Wíwò ó ní ìlọ́po méjì ìyára", "Fífò lọ sí ìparí", "Pípa àwọn àwòrán rẹ́"], answer: 0, why: "Ó ń jẹ́ kí o rí àwọn ipò pàtàkì." },
      { objective: "O3", q: "AI to àwọn ìpele ọgbọ́n eré rẹ. Lẹ́yìn náà o máa:", options: ["Gbẹ́kẹ̀lé wọn pátápátá", "Fi wọ́n sórí ayélujára", "Fojú fo kóòṣì rẹ", "Jẹ́ kí kóòṣì rẹ fọwọ́ sí wọn"], answer: 3, why: "Àwọn kóòṣì ló ń fọwọ́ sí ohun tó ṣe pàtàkì." },
      { objective: "O4", q: "Pose estimation ń yà:", options: ["Àmì ilé-iṣẹ́ (logo)", "Àwòrán igi sórí ara rẹ", "Màápù", "Àtẹ àwọn olùtẹ̀lé"], answer: 1, why: "Ó ń so àwọn ojú ara tí ó rí pọ̀." },
      { objective: "O4", q: "Kí o tó lo app pose, ṣàyẹ̀wò:", options: ["Àwọ̀ rẹ̀", "Privacy policy rẹ̀", "Logo rẹ̀", "Kò sí nǹkan kan"], answer: 1, why: "Fídíò ara jẹ́ ìsọfúnni àdáni." },
      { objective: "O5", q: "Ohun mélòó nínú ọ̀nà eré ni o yẹ kí o ṣiṣẹ́ lé lórí lẹ́ẹ̀kan?", options: ["Ọ̀kan", "Mẹ́wàá", "Gbogbo wọn", "Kò sí"], answer: 0, why: "Ohun kan ṣoṣo rọrùn láti yí padà." },
      { objective: "O5", q: "Cue ni:", options: ["Ìtọ́ni kúkúrú láti yí ìgbésẹ̀ padà", "Igi tí a fi ń gbá bọ́ọ̀lù pool", "Àmì ayò", "App fídíò"], answer: 0, why: "Cue ń tọ́ àwọn ìyípadà ọ̀nà eré sọ́nà." },
      { objective: "O5", q: "Àlàyé àìdájọ́:", options: ["Ń dájọ́ líle", "Ń sọ àrùn ìpalára", "Ń sọ ohun tí o rí láìsọ àrùn", "Ń fojú fo ẹ̀rí"], answer: 2, why: "Dúró lórí ohun tí o rí." },
      { objective: "O6", q: "Fídíò ṣáájú àti lẹ́yìn yẹ kí wọ́n lo:", options: ["Igun tó yàtọ̀ ní gbogbo ìgbà", "Ìṣètò èyíkéyìí", "Kò sí fídíò", "Àwọn ibi, igun àti ìmọ́lẹ̀ kan náà"], answer: 3, why: "Ìṣètò kan náà ń mú àfiwé tọ́." },
      { objective: "O6", q: "Ta ló ń ran àwọn ènìyàn lọ́wọ́ láti tún gbé ara dáadáa lẹ́yìn ìpalára?", options: ["Olùfẹ́ eré kan", "Physical therapist", "App AI", "Adájọ́ eré (referee)"], answer: 1, why: "Àwọn physical therapist ní ìwé àṣẹ fún èyí." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      5,
      8,
      9,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ó tó tàbí ó ju bẹ́ẹ̀ lọ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì tó\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Yíya fídíò",
        objective: "O2",
        notYet: "Ìwò kan ṣoṣo, tàbí kámẹ́rà mì, tàbí ó ga jù tàbí ó kéré jù.",
        meets: "Ìwò láti ẹ̀gbẹ́ àti iwájú ní gíga ìbàdí láti àwọn ibi tí a sàmì sí, ìgbà mẹ́ta fún ọ̀kọ̀ọ̀kan.",
        exceeds: "Ó tún kọ àwọn ibi náà, ètò slow motion àti ìmọ́lẹ̀ sílẹ̀ kí ẹnikẹ́ni lè tún un ṣe."
      },
      {
        name: "Ìpele àti àwòrán pàtàkì",
        objective: "O3",
        notYet: "Àwọn ìpele kò sí, tàbí a kò fi orúkọ sí wọn.",
        meets: "Ìpele kọ̀ọ̀kan ní àwòrán pàtàkì tí a fi orúkọ sí, tí kóòṣì ti fọwọ́ sí.",
        exceeds: "Àwọn àwòrán pàtàkì láti ọ̀pọ̀ ìgbà fi ipò kan náà hàn ní gbogbo ìgbà."
      },
      {
        name: "Ohun kan nínú ọ̀nà eré",
        objective: "O5",
        notYet: "Ọ̀pọ̀ nǹkan lẹ́ẹ̀kan, tàbí ọ̀rọ̀ tó ń sọ àrùn tàbí tó ń dájọ́.",
        meets: "Ohun kan ní gbólóhùn àìdájọ́ méjì pẹ̀lú ìpele rẹ̀ àti àwọn screenshot.",
        exceeds: "Ó tún yí i padà sí ìbéèrè tó yé, tí kóòṣì dáhùn pẹ̀lú cue kan."
      },
      {
        name: "Lílo irinṣẹ́",
        objective: "O4",
        notYet: "A ka nọ́mbà app sí ìwọ̀n pípé.",
        meets: "A pe igun èyíkéyìí láti irinṣẹ́ pose ní ìfojúdíwọ̀n, a sì fi wé àwòrán náà.",
        exceeds: "Ó lè dárúkọ ohun tó wà nínú fídíò tó lè mú irinṣẹ́ náà ṣe àṣìṣe."
      },
      {
        name: "Ṣáájú àti lẹ́yìn",
        objective: "O6",
        notYet: "A ya fídíò kejì ní ọ̀nà míì, tàbí a kò ṣe àfiwé kankan.",
        meets: "Àfiwé ní ẹ̀gbẹ́ ara wọn láti àwọn ibi, igun àti ìmọ́lẹ̀ kan náà.",
        exceeds: "Ó tún kọ ohun tó yí padà, ohun tí kò yí padà, àti ìrora èyíkéyìí tí a sọ fún ẹni tó yẹ."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn eléré ìdárayá tó parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn eléré ìdárayá tó fi àfiwé ṣáájú àti lẹ́yìn wọn han kóòṣì láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn kóòṣì tó sọ pé ìjíròrò nípa ọ̀nà eré ti ṣe kedere sí i pẹ̀lú àwọn eléré tó ṣe ẹ̀kọ́ náà",
      "Àwọn akẹ́kọ̀ọ́ tó bẹ̀rẹ̀ ẹ̀kọ́ eléré ìdárayá míì lórí Koach Learn láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tó ní kámẹ́rà àti slow motion",
      "Tape tàbí cone láti sàmì sí ibi kámẹ́rà",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́; app pose estimation ọ̀fẹ́ kò pọn dandan",
      "Nǹkan bí ìṣẹ́jú 60 fún àwọn ẹ̀kọ́, àwọn ìdánwò ìmọ̀ àti ìdánwò ìkẹyìn, pẹ̀lú ìgbà méjì láti ya fídíò, ọ̀sẹ̀ méjì síra"
    ],
    facilitatorNotes: [
      "Ṣe yíya fídíò bí ìdánrawò ẹgbẹ́: eléré kan ń ṣe ìgbésẹ̀, ẹnìkan ń yà á, ẹnìkan ń ṣàyẹ̀wò gíga kámẹ́rà àti ibi rẹ̀.",
      "Gba àṣẹ tí a kọ sílẹ̀ kí o tó ya fídíò àwọn ọmọdé, kí o sì pa fídíò wọn mọ́ kúrò lórí àwọn app gbangba.",
      "Jẹ́ kí kóòṣì fọwọ́ sí àwọn ìpele àti cue; ẹ̀kọ́ yìí kò rọ́pò iṣẹ́ kóòṣì.",
      "Eléré èyíkéyìí tó bá sọ pé ara ń dùn òun yóò dá ìdánrawò dúró, a ó sì rán an lọ sọ́dọ̀ athletic trainer, physical therapist tàbí dókítà.",
      "Fi rubric ṣe àmì fún àfiwé ìkẹyìn, ìlà \"Kò tíì tó\" kan lẹ́ẹ̀kan."
    ]
  }
};
