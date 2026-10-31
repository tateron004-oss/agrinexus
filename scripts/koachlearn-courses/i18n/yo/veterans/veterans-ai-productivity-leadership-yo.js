"use strict";

// Koach Learn course (Yoruba translation of veterans/veterans-ai-productivity-leadership.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-productivity-leadership-yo",
  lang: "yo",
  translationOf: "veterans-ai-productivity-leadership",
  category: "Veterans (military)",
  name: "AI fún Iṣẹ́ Ṣíṣe àti Aṣáájú",
  skills: "Ṣíṣe ètò ọ̀sẹ̀ ẹgbẹ́ pẹ̀lú AI, Kíkọ ímeèlì BLUF, Yíyí àkọsílẹ̀ ìpàdé padà sí iṣẹ́ tí a ó ṣe, Fífúnni ní èsì tó yé, Fífi iṣẹ́ léni lọ́wọ́ pẹ̀lú àkọsílẹ̀ àyẹ̀wò, Lílo AI lọ́nà tó tọ́ pẹ̀lú ìsọfúnni ẹgbẹ́",
  outcome: "lo olùrànlọ́wọ́ AI láti ṣe ètò ọ̀sẹ̀ fún ẹgbẹ́ kékeré, kọ ímeèlì ìròyìn tó yé tí kókó ọ̀rọ̀ wà ní ìbẹ̀rẹ̀ (BLUF), kí o sì yí àkọsílẹ̀ ìpàdé padà sí iṣẹ́ tí a ó ṣe tí ó ní ẹni tó ni ín àti ọjọ́ ìparí, láìfi ìsọfúnni àdáni àwọn ọmọ ẹgbẹ́ sínú irinṣẹ́ AI gbogbogbò.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tí wọ́n ti sìn nínú iṣẹ́ ológun, tí wọ́n jẹ́ aṣáájú nígbà tí wọ́n wà nínú aṣọ ológun (NCO, petty officer, officer tàbí olórí ẹgbẹ́), tí wọ́n sì ń darí tàbí fẹ́ darí ẹgbẹ́ ní ibi iṣẹ́ aráàlú báyìí. Àṣà aṣáájú rẹ ṣì wúlò; àwọn ọ̀rọ̀ àti irinṣẹ́ nìkan ló yàtọ̀ díẹ̀.",
    "O máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti ṣe ètò ọ̀sẹ̀ ẹgbẹ́, kọ ìròyìn kúkúrú tó yé, yí àkọsílẹ̀ ìpàdé tí kò wà létòlétò padà sí iṣẹ́ tí a ó ṣe, múra èsì sílẹ̀, kí o sì fi iṣẹ́ léni lọ́wọ́ dáadáa. O tún máa kọ́ àwọn òfin fún lílo AI lọ́nà tó tọ́ pẹ̀lú ìsọfúnni àwọn ẹlòmíì.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún: kà á, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Fún ẹgbẹ́ gidi tàbí ti àṣeṣe tí ó ní ènìyàn mẹ́ta sí mẹ́fà: lo olùrànlọ́wọ́ AI láti ṣe ètò ọ̀sẹ̀ kan tí ó ní ohun tó ṣáájú àti ẹni tó ni iṣẹ́ kọ̀ọ̀kan, kọ ímeèlì ìròyìn BLUF sí ọ̀gá rẹ, kí o sì yí àkọsílẹ̀ ìpàdé kúkúrú padà sí tábìlì iṣẹ́ tí a ó ṣe tí ó ní ẹni tó ni ín àti ọjọ́ ìparí. Lo orúkọ ipò iṣẹ́ dípò orúkọ ènìyàn, má sì fi ìsọfúnni àdáni kankan sínú rẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí wọ́n ti sìn nínú iṣẹ́ ológun, tí wọ́n jẹ́ aṣáájú nínú aṣọ ológun (NCO, petty officer, officer tàbí olórí ẹgbẹ́), tí wọ́n sì ń darí tàbí fẹ́ darí ẹgbẹ́ kékeré ní ibi iṣẹ́ aráàlú báyìí.",
    startingPoint: "Wọ́n mọ̀ọ́ ṣe dáadáa nínú ṣíṣe ètò, fífúnni ní àlàyé ṣókí (briefing), àyẹ̀wò lẹ́yìn iṣẹ́ àti títọ́jú àwọn ènìyàn. Wọ́n lè lo ímeèlì àti kọ̀mpútà. Wọn kò fi bẹ́ẹ̀ lo olùrànlọ́wọ́ AI fún iṣẹ́ aṣáájú, ọ̀rọ̀ ológun sì lè dún bí ẹni pé ó le jù sí etí aráàlú.",
    gap: "Àwọn ẹgbẹ́ aráàlú ń retí ètò, ímeèlì àti èsì ní ọ̀rọ̀ aráàlú, ọ̀pọ̀ ibi iṣẹ́ sì ń lo irinṣẹ́ AI báyìí. Àwọn akẹ́kọ̀ọ́ nílò láti lo olùrànlọ́wọ́ AI láti fi àkókò pamọ́ nínú ètò, ìròyìn, àkọsílẹ̀ ìpàdé, èsì àti fífi iṣẹ́ léni lọ́wọ́, láìfi ìsọfúnni àdáni àwọn ọmọ ẹgbẹ́ sínú rẹ̀, kí wọ́n sì ṣì jẹ́ ẹni tó ń dáhùn fún iṣẹ́ ìkẹyìn.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú",
      "Ẹ̀rọ: kọ̀mpútà tàbí smartphone tí ó ní íńtánẹ́ẹ̀tì àti olùrànlọ́wọ́ AI ọ̀fẹ́",
      "Ìsọfúnni àdáni àti ìlànà: orúkọ ipò iṣẹ́ dípò orúkọ ènìyàn, kò sí owó oṣù, ìlera tàbí ọ̀rọ̀ òṣìṣẹ́ nínú irinṣẹ́ AI gbogbogbò, ìlànà AI ti agbanisíṣẹ́ ló sì ṣáájú",
      "Àkókò: ẹ̀kọ́ tí ó tó nǹkan bí ìṣẹ́jú 5 tí ó bá ọjọ́ iṣẹ́ mu",
      "Àṣeṣe ń lo ẹgbẹ́ gidi tàbí ti àṣeṣe tí ó ní ènìyàn mẹ́ta sí mẹ́fà"
    ],
    prerequisites: "Kò sí. Àwọn tí kò tíì lo olùrànlọ́wọ́ AI rí lè kọ́kọ́ ṣe \"Introduction to AI and the Future Workforce\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ iṣẹ́ ẹgbẹ́ kan fún ọ̀sẹ̀ náà", action: "lo olùrànlọ́wọ́ AI láti ṣe ètò ọ̀sẹ̀ tí ó tò iṣẹ́ lẹ́sẹẹsẹ bí wọ́n ṣe ṣe pàtàkì tó, pẹ̀lú ẹni tó ni iṣẹ́ kọ̀ọ̀kan", standard: "kí o sì fi ìdájọ́ ara rẹ tún ohunkóhun tí ó ṣì ṣe" },
    { id: "O2", condition: "Tí a bá fún ọ ní ọ̀rọ̀ tí kò wà létòlétò sí ọ̀gá kan", action: "kọ ímeèlì tí kókó ọ̀rọ̀ wà ní ìbẹ̀rẹ̀ (BLUF) pẹ̀lú ìrànlọ́wọ́ AI", standard: "pẹ̀lú kókó ọ̀rọ̀ nínú gbólóhùn àkọ́kọ́ àti ohùn tó ní ọ̀rẹ́, tó sì bá iṣẹ́ mu" },
    { id: "O3", condition: "Tí a bá fún ọ ní àkọsílẹ̀ ìpàdé kúkúrú", action: "yí àkọsílẹ̀ náà padà sí ìpinnu, iṣẹ́ tí a ó ṣe àti ìbéèrè tí kò tíì ní ìdáhùn pẹ̀lú AI", standard: "pẹ̀lú ẹni kan tó ni ín àti ọjọ́ ìparí lórí iṣẹ́ kọ̀ọ̀kan tí a ó ṣe" },
    { id: "O4", condition: "Tí a bá fún ọ ní ohun kan tí ọmọ ẹgbẹ́ kan ṣe", action: "kọ àkọ́pẹrẹ èsì ní ọ̀nà ipò-ìwà-ipa (SBI), kí o sì tún un kọ ní ọ̀rọ̀ ara rẹ", standard: "tí ó ṣàpèjúwe ìwà tí o rí nìkan" },
    { id: "O5", condition: "Tí o bá ní iṣẹ́ kan tí o lè fi lé ẹlòmíì lọ́wọ́", action: "ṣe àkọsílẹ̀ àyẹ̀wò fún fífi iṣẹ́ léni lọ́wọ́ tí ó ní ète, ìpele tí a fẹ́, ọjọ́ ìparí, ohun èlò àti àkókò àyẹ̀wò", standard: "pẹ̀lú gbogbo apá tí a nílò" },
    { id: "O6", condition: "Nígbàkígbà tí o bá ń lo AI pẹ̀lú ìsọfúnni ẹgbẹ́ tàbí ilé-iṣẹ́", action: "tẹ̀lé ìlànà AI ti agbanisíṣẹ́ rẹ, lo orúkọ ipò iṣẹ́ dípò orúkọ ènìyàn, kí o sì pa ìsọfúnni àdáni mọ́ kúrò nínú rẹ̀", standard: "láìsí ìsọfúnni àdáni kankan nínú prompt kankan, kí ìwọ sì jẹ́ ẹni tó ń dáhùn fún iṣẹ́ ìkẹyìn" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣe iṣẹ́ náà parí",
      lessons: [
        {
          objectives: ["O1"],
          title: "Láti ètò iṣẹ́ ológun sí ètò ọ̀sẹ̀ ẹgbẹ́",
          minutes: 5,
          goal: "Lo AI láti yí àkọsílẹ̀ iṣẹ́ padà sí ètò ọ̀sẹ̀ tí ó tò lẹ́sẹẹsẹ, pẹ̀lú ẹni tó ni iṣẹ́ kọ̀ọ̀kan.",
          text: [
            "Nínú iṣẹ́ ológun, o máa ń ṣe ètò láti inú iṣẹ́ àṣẹ (mission): kí ló gbọdọ̀ parí, nígbà wo, pẹ̀lú àwọn wo àti pẹ̀lú ohun èlò wo. Àwọn ẹgbẹ́ aráàlú nílò ohun kan náà; wọ́n sábà máa ń pè é ní ètò iṣẹ́ (work plan) tàbí ètò iṣẹ́ àkànṣe (project plan).",
            "Fún olùrànlọ́wọ́ AI ní àkọsílẹ̀ iṣẹ́ rẹ, ọjọ́ ìparí wọn àti àwọn ipò iṣẹ́ inú ẹgbẹ́, kí o sì ní kí ó tò wọ́n bí wọ́n ṣe ṣe pàtàkì tó, kí ó sì ṣe ètò ọ̀sẹ̀. Àpẹẹrẹ: \"Iṣẹ́ 8 nìyí fún ẹgbẹ́ ilé ìkẹ́rùsí mi tí ó ní ènìyàn 5 ní ọ̀sẹ̀ yìí, pẹ̀lú ọjọ́ ìparí wọn. Tò wọ́n bí wọ́n ṣe jẹ́ kánjúkánjú àti pàtàkì tó, kí o sì ṣe tábìlì láti Ọjọ́ Ajé sí Ọjọ́ Ẹtì pẹ̀lú ipò iṣẹ́ ẹni tó ni iṣẹ́ kọ̀ọ̀kan.\"",
            "Lo orúkọ ipò iṣẹ́, kì í ṣe orúkọ ènìyàn (\"Olórí ìyípo A\", \"Awakọ̀ forklift 2\"). Lẹ́yìn náà lo ìdájọ́ rẹ: AI kò mọ̀ pé ẹnì kan wà ní ìsinmi, tàbí pé oníbàárà kan ṣe pàtàkì jù. Ìwọ lo máa ṣàtúnṣe ètò náà, ìwọ ló sì máa fọwọ́ sí i."
          ],
          steps: ["Kọ àwọn iṣẹ́ ọ̀sẹ̀ náà àti ọjọ́ ìparí wọn sílẹ̀.", "Kọ àwọn ipò iṣẹ́ inú ẹgbẹ́ sílẹ̀, kì í ṣe orúkọ ènìyàn.", "Ní kí AI tò wọ́n bí wọ́n ṣe jẹ́ kánjúkánjú àti pàtàkì tó, kí ó sì ṣe tábìlì ọ̀sẹ̀.", "Ṣàtúnṣe fún ohun tí AI kò mọ̀: ìsinmi, ọgbọ́n ènìyàn, àwọn oníbàárà pàtàkì.", "Pín ètò ìkẹyìn pẹ̀lú ẹgbẹ́ náà."],
          words: [["Ètò iṣẹ́ (work plan)", "àkọsílẹ̀ iṣẹ́ pẹ̀lú ẹni tó ni wọ́n àti ọjọ́; ẹ̀yà aráàlú ti ètò iṣẹ́ ológun (operations plan)."], ["Kánjúkánjú àti pàtàkì", "kánjúkánjú túmọ̀ sí pé ó nílò ìgbésẹ̀ báyìí; pàtàkì túmọ̀ sí pé ó ṣe pàtàkì jù sí àfojúsùn. Wọn kì í fìgbà gbogbo jẹ́ ọ̀kan náà."]],
          slides: [
            { title: "Ọgbọ́n kan náà, ọ̀rọ̀ tuntun", bullets: ["Ètò iṣẹ́ ológun = ètò iṣẹ́ (work plan)", "Kí ni, nígbà wo, ta ni, pẹ̀lú kí ni"] },
            { title: "Jẹ́ kí AI tò ó, kí ó sì ṣètò rẹ̀", bullets: ["Fún un ní iṣẹ́, ọjọ́ ìparí àti ipò iṣẹ́", "Béèrè ìtòlẹ́sẹẹsẹ bí wọ́n ṣe ṣe pàtàkì tó àti tábìlì ọ̀sẹ̀"] },
            { title: "Ìwọ lo máa fọwọ́ sí ètò náà", bullets: ["Lo orúkọ ipò iṣẹ́, kì í ṣe orúkọ ènìyàn", "Ṣàtúnṣe fún ìsinmi, ọgbọ́n ènìyàn àti oníbàárà pàtàkì", "Pín ètò ìkẹyìn"] }
          ],
          tryIt: "Kọ iṣẹ́ mẹ́fà tí ẹgbẹ́ rẹ (gidi tàbí ti àṣeṣe) gbọdọ̀ ṣe ní ọ̀sẹ̀ yìí. Ní kí olùrànlọ́wọ́ AI tò wọ́n bí wọ́n ṣe jẹ́ kánjúkánjú àti pàtàkì tó, kí ó sì ṣe tábìlì láti Ọjọ́ Ajé sí Ọjọ́ Ẹtì pẹ̀lú ipò iṣẹ́ ẹni tó ni iṣẹ́ kọ̀ọ̀kan. Yí ohun kan tí ó ṣì ṣe padà.",
          youCanNow: "yí àkọsílẹ̀ iṣẹ́ padà sí ètò ọ̀sẹ̀ ẹgbẹ́ tí ó tò lẹ́sẹẹsẹ pẹ̀lú AI, kí o sì fi ìdájọ́ rẹ tún un ṣe.",
          quickCheck: [
            { objective: "O1", q: "Kí ni títo iṣẹ́ bí wọ́n ṣe jẹ́ kánjúkánjú àti pàtàkì tó túmọ̀ sí?", options: ["Ṣe àwọn iṣẹ́ tó rọrùn jù ní àkọ́kọ́", "Pinnu àwọn iṣẹ́ tí a gbọdọ̀ ṣe láìpẹ́ àti àwọn tí ó ṣe pàtàkì jù", "Fún ẹnì kan ṣoṣo ní gbogbo iṣẹ́", "Ṣe iṣẹ́ ní ìtòlẹ́sẹẹsẹ álífábẹ́ẹ̀tì"], answer: 1, why: "Kánjúkánjú àti pàtàkì yàtọ̀ síra, nítorí náà títo wọ́n pẹ̀lú méjèèjì ń fi ohun tí o máa kọ́kọ́ ṣe hàn." },
            { objective: "O1", q: "Ètò ọ̀sẹ̀ tí AI ṣe fún ẹnì kan náà ní gbogbo iṣẹ́ mẹ́fà. Kí ni o máa ṣe?", options: ["Gbà á nítorí pé AI ló pinnu", "Pa ètò náà rẹ́ kí o sì ṣe gbogbo rẹ̀ fúnra rẹ", "Ní kí AI fi iṣẹ́ míì kún un", "Lo ìdájọ́ rẹ láti pín iṣẹ́ náà, kí o sì tún ètò náà ṣe"], answer: 3, why: "AI ló kọ àkọ́pẹrẹ ètò náà, ṣùgbọ́n ìwọ lo mọ ẹgbẹ́ rẹ, ìwọ ló sì máa fọwọ́ sí ẹ̀yà ìkẹyìn." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ímeèlì àti ìròyìn BLUF",
          minutes: 5,
          goal: "Kọ ímeèlì kúkúrú tí kókó ọ̀rọ̀ wà ní ìbẹ̀rẹ̀ pẹ̀lú ìrànlọ́wọ́ AI.",
          text: [
            "BLUF (bottom line up front: kókó ọ̀rọ̀ ní ìbẹ̀rẹ̀) ń ṣiṣẹ́ ní ọ́fíìsì aráàlú náà, kódà tí àwọn ènìyàn kò bá lo ọ̀rọ̀ náà. Fi kókó ọ̀rọ̀ tàbí ìpinnu tí o nílò sínú gbólóhùn àkọ́kọ́. Lẹ́yìn náà fúnni ní ìdí kúkúrú àti ìgbésẹ̀ tó kàn.",
            "Ní kí AI tún àkọ́pẹrẹ gígùn kọ: \"Tún èyí kọ bí ímeèlì kúkúrú sí ọ̀gá mi. Fi kókó ọ̀rọ̀ sínú gbólóhùn àkọ́kọ́, lẹ́yìn náà kókó mẹ́ta, lẹ́yìn náà ìgbésẹ̀ tó kàn. Ohùn tó ní ọ̀rẹ́, tó sì bá iṣẹ́ mu. Kò sí ọ̀rọ̀ ológun.\"",
            "Ṣàyẹ̀wò ohùn rẹ̀. Ọ̀rọ̀ ológun lè dún bí ẹni pé ó le jù sí etí aráàlú. Ọ̀rọ̀ rírọrùn bí \"O ṣé\" tàbí \"Inú mi máa dùn láti jíròrò rẹ̀\" ń ṣèrànwọ́. Kà á lẹ́ẹ̀kan bí ẹni tí ó máa gbà á."
          ],
          steps: ["Kọ ohun tí o fẹ́ sọ, kódà tí kò bá wà létòlétò.", "Ní kí AI fi kókó ọ̀rọ̀ sí ìbẹ̀rẹ̀, lẹ́yìn náà kókó díẹ̀, lẹ́yìn náà ìgbésẹ̀ tó kàn.", "Ní kí ó yọ ọ̀rọ̀ ológun kúrò, kí ó sì lo ohùn tó ní ọ̀rẹ́, tó sì bá iṣẹ́ mu.", "Kà á bí ẹni tí ó máa gbà á, kí o sì tún ohunkóhun tí kò yé ṣe."],
          words: [["BLUF", "bottom line up front: kókó ọ̀rọ̀ tàbí ohun tí o ń béèrè ló máa ń kọ́kọ́ wá."], ["Ohùn", "bí ọ̀rọ̀ rẹ ṣe ń dún sí ẹni tí ó ń kà á: ó ní ọ̀rẹ́, ó le, tàbí ó ní ìlànà."]],
          slides: [
            { title: "BLUF ń ṣiṣẹ́ níbi gbogbo", bullets: ["Kókó ọ̀rọ̀ tàbí ohun tí o ń béèrè ní àkọ́kọ́", "Ìdí kúkúrú ló tẹ̀lé e", "Ìgbésẹ̀ tó kàn ní ìparí"] },
            { title: "Ní kí AI tún un kọ", bullets: ["\"Kókó ọ̀rọ̀ nínú gbólóhùn àkọ́kọ́\"", "\"Kókó mẹ́ta, lẹ́yìn náà ìgbésẹ̀ tó kàn\"", "\"Ó ní ọ̀rẹ́, ó bá iṣẹ́ mu, kò sí ọ̀rọ̀ ológun\""] },
            { title: "Ṣàyẹ̀wò ohùn rẹ̀", bullets: ["Ọ̀rọ̀ ológun lè dún bí ẹni pé ó le jù", "Fi \"O ṣé\" tàbí \"Inú mi máa dùn láti jíròrò rẹ̀\" kún un", "Kà á bí ẹni tí ó máa gbà á"] }
          ],
          tryIt: "Kọ ọ̀rọ̀ tí kò wà létòlétò sí ọ̀gá kan nípa ìdádúró lórí iṣẹ́ kan. Ní kí olùrànlọ́wọ́ AI tún un kọ bí ímeèlì BLUF pẹ̀lú kókó mẹ́ta àti ìgbésẹ̀ tó kàn, ní ohùn tó ní ọ̀rẹ́, tó sì bá iṣẹ́ mu.",
          youCanNow: "kọ ímeèlì kúkúrú, tó yé, tí kókó ọ̀rọ̀ wà ní ìbẹ̀rẹ̀, tí ó sì bá ibi iṣẹ́ aráàlú mu.",
          quickCheck: [
            { objective: "O2", q: "Nínú ímeèlì BLUF, kí ló máa ń kọ́kọ́ wá?", options: ["Kókó ọ̀rọ̀ tàbí ohun tí o ń béèrè", "Ìtàn ìpìlẹ̀ gígùn", "Orúkọ àti ìbuwọ́lù rẹ", "Àkọsílẹ̀ gbogbo àwọn tí ó ṣèrànwọ́"], answer: 0, why: "Kókó ọ̀rọ̀ ní ìbẹ̀rẹ̀ túmọ̀ sí pé ẹni tí ó ń kà á rí kókó ọ̀rọ̀ tàbí ohun tí o ń béèrè lẹ́sẹ̀kẹsẹ̀." },
            { objective: "O2", q: "Ímeèlì tí AI kọ dún kúkúrú, ó sì le jù. Kí ni o máa ṣe kí o tó fi ránṣẹ́?", options: ["Fi ránṣẹ́ bí ó ti rí", "Jẹ́ kí ó gùn ní ìlọ́po méjì", "Fi gbólóhùn tó ní ọ̀rẹ́ kún un, kí o sì kà á bí ẹni tí ó máa gbà á", "Yọ kókó ọ̀rọ̀ kúrò"], answer: 2, why: "Gbólóhùn tó ní ọ̀rẹ́ àti kíkà á bí ẹni tí ó máa gbà á ń jẹ́ kí ó yé, kí ó sì bá iṣẹ́ mu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yíyí àkọsílẹ̀ ìpàdé padà sí iṣẹ́ tí a ó ṣe",
          minutes: 5,
          goal: "Lo AI láti yí àkọsílẹ̀ ìpàdé padà sí tábìlì iṣẹ́ tí a ó ṣe pẹ̀lú ẹni tó ni wọ́n àti ọjọ́ ìparí.",
          text: [
            "Ìpàdé máa ń fi àkókò ṣòfò tí kò bá sí ẹni tí ó kúrò níbẹ̀ tí ó mọ ẹni tí yóò ṣe kí ni. Àṣà àyẹ̀wò lẹ́yìn iṣẹ́ (after-action) ń yanjú èyí: kí la pinnu, ta ló ni iṣẹ́ kọ̀ọ̀kan, àti ìgbà wo ló gbọdọ̀ parí.",
            "Lẹ àkọsílẹ̀ rẹ (pẹ̀lú orúkọ ipò iṣẹ́ dípò orúkọ ènìyàn, láìsí ìsọfúnni àdáni) kí o sì béèrè: \"Yí àkọsílẹ̀ yìí padà sí: 1) àwọn ìpinnu tí a ṣe, 2) tábìlì iṣẹ́ tí a ó ṣe pẹ̀lú ẹni tó ni ín àti ọjọ́ ìparí, 3) àwọn ìbéèrè tí kò tíì ní ìdáhùn.\" Tí iṣẹ́ kan kò bá ní ẹni tó ni ín tàbí ọjọ́, kí AI fi àmì sí i.",
            "Ọ̀pọ̀ irinṣẹ́ ibi iṣẹ́, bí Microsoft Teams pẹ̀lú Copilot tàbí Google Meet pẹ̀lú Gemini, lè ṣe àkópọ̀ ìpàdé tí agbanisíṣẹ́ rẹ bá ti tàn án. Tẹ̀lé òfin agbanisíṣẹ́ rẹ nípa gbígba ohùn sílẹ̀ àti AI, kí o sì sọ fún àwọn ènìyàn nígbà tí a bá ń gba ìpàdé sílẹ̀ tàbí ń ṣe àkópọ̀ rẹ̀."
          ],
          steps: ["Kọ àkọsílẹ̀ kúkúrú nígbà ìpàdé.", "Fi orúkọ ipò iṣẹ́ rọ́pò orúkọ ènìyàn, kí o sì yọ ìsọfúnni àdáni kúrò.", "Béèrè lọ́wọ́ AI fún àwọn ìpinnu, tábìlì iṣẹ́ pẹ̀lú ẹni tó ni ín àti ọjọ́ ìparí, àti àwọn ìbéèrè tí kò tíì ní ìdáhùn.", "Kọ ẹni tó ni ín tàbí ọjọ́ tí ó bá kù sí i.", "Fi àkópọ̀ náà ránṣẹ́ sí ẹgbẹ́ ní ọjọ́ kan náà."],
          words: [["Iṣẹ́ tí a ó ṣe (action item)", "iṣẹ́ kan láti inú ìpàdé tí ó ní ẹni kan tó ni ín àti ọjọ́ ìparí."], ["Àyẹ̀wò lẹ́yìn iṣẹ́ (after-action review)", "wíwo ẹ̀yìn ní ṣókí: kí ló ṣẹlẹ̀, kí ló ṣiṣẹ́, kí la máa yí padà."]],
          slides: [
            { title: "Gbogbo ìpàdé gbọdọ̀ parí pẹ̀lú", bullets: ["Àwọn ìpinnu tí a ṣe", "Iṣẹ́ tí a ó ṣe: ẹni tó ni ín + ọjọ́ ìparí", "Àwọn ìbéèrè tí kò tíì ní ìdáhùn"] },
            { title: "Ní kí AI tò àkọsílẹ̀ náà", bullets: ["Lẹ àkọsílẹ̀ pẹ̀lú ipò iṣẹ́, kì í ṣe orúkọ", "Béèrè ìpinnu, iṣẹ́ tí a ó ṣe, ìbéèrè", "Jẹ́ kí ó fi àmì sí ibi tí ẹni tó ni ín tàbí ọjọ́ kò sí"] },
            { title: "Tẹ̀lé òfin ibi iṣẹ́", bullets: ["Lo irinṣẹ́ ìpàdé AI tí wọ́n bá gbà á láàyè nìkan", "Sọ fún àwọn ènìyàn tí o bá ń gbà á sílẹ̀ tàbí ń ṣe àkópọ̀", "Fi àkópọ̀ ránṣẹ́ ní ọjọ́ kan náà"] }
          ],
          tryIt: "Kọ ìlà márùn-ún ti àkọsílẹ̀ ìpàdé àṣeṣe. Ní kí olùrànlọ́wọ́ AI yí wọn padà sí ìpinnu, tábìlì iṣẹ́ tí a ó ṣe pẹ̀lú ipò iṣẹ́ ẹni tó ni ín àti ọjọ́ ìparí, àti àwọn ìbéèrè tí kò tíì ní ìdáhùn.",
          youCanNow: "yí àkọsílẹ̀ ìpàdé padà sí tábìlì iṣẹ́ tí a ó ṣe tó yé, pẹ̀lú ẹni tó ni wọ́n àti ọjọ́.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìbéèrè tí kò tíì ní ìdáhùn nínú àkópọ̀ ìpàdé?", options: ["Iṣẹ́ tí ó ní ẹni tó ni ín", "Ìpinnu tí ẹgbẹ́ ṣe", "Ìbéèrè tí ẹnikẹ́ni kò gbọdọ̀ béèrè", "Ohun tí a kò tíì pinnu tí ó nílò ìdáhùn lẹ́yìn náà"], answer: 3, why: "Ìbéèrè tí kò tíì ní ìdáhùn jẹ́ ọ̀rọ̀ tí ìpàdé kò yanjú, a kọ wọ́n sílẹ̀ kí a má bàa gbàgbé wọn." },
            { objective: "O3", q: "Tábìlì iṣẹ́ tí AI ṣe ní \"Pàṣẹ àwọn ẹ̀yà ẹ̀rọ\" láìsí ẹni tó ni ín. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ bẹ́ẹ̀; ẹnì kan máa ṣe é", "Fún un ní ẹni kan tó ni ín àti ọjọ́ ìparí", "Fún gbogbo ènìyàn", "Pa á rẹ́"], answer: 1, why: "Iṣẹ́ tí a ó ṣe kò pé àfi tí ó bá ní ẹni kan tó ni ín àti ọjọ́ ìparí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣe iṣẹ́ náà parí",
        questions: [
          { objective: "O1", q: "Orúkọ aráàlú wo ni a sábà máa ń lò fún ètò iṣẹ́ ológun (mission tàbí operations plan)?", options: ["Ètò iṣẹ́ tàbí ètò iṣẹ́ àkànṣe", "Résumé", "Ìṣúná owó (budget)", "Tábìlì ìfiwéra ọgbọ́n (crosswalk)"], answer: 0, why: "Àwọn ẹgbẹ́ aráàlú sábà máa ń pè é ní ètò iṣẹ́ (work plan) tàbí ètò iṣẹ́ àkànṣe (project plan)." },
          { objective: "O6", q: "Kí nìdí tí a fi ń lo ipò iṣẹ́ bí \"Olórí ìyípo A\" dípò orúkọ nínú prompt AI?", options: ["AI kò lè ka orúkọ", "Láti pa ìsọfúnni àwọn ọmọ ẹgbẹ́ mọ́", "Orúkọ ń jẹ́ kí ìdáhùn gùn", "Ó yára láti tẹ"], answer: 1, why: "Ipò iṣẹ́ ń fún AI ní ohun tí ó nílò láìpín ìsọfúnni àwọn ènìyàn." },
          { objective: "O1", q: "Ètò AI fi iṣẹ́ ńlá sí ọjọ́ tí ẹnì kan wà ní ìsinmi. Ìwọ:", options: ["Pa ètò AI mọ́ bí ó ti rí", "Fagi lé iṣẹ́ náà", "Ṣàtúnṣe ètò náà pẹ̀lú ìdájọ́ rẹ", "Ní kí ẹni náà fi ìsinmi rẹ̀ sílẹ̀"], answer: 2, why: "O mọ àwọn nǹkan tí AI kò mọ̀; ìwọ ló máa fọwọ́ sí ètò ìkẹyìn." },
          { objective: "O2", q: "Kí ló máa ń wà nínú gbólóhùn àkọ́kọ́ ímeèlì BLUF?", options: ["Ìkíni gígùn", "Ìtàn ìpìlẹ̀", "Àwàdà", "Kókó ọ̀rọ̀ tàbí ohun tí o ń béèrè"], answer: 3, why: "Kókó ọ̀rọ̀ ní ìbẹ̀rẹ̀: kókó ọ̀rọ̀ ló máa ń kọ́kọ́ wá." },
          { objective: "O3", q: "Kí ló ń jẹ́ kí iṣẹ́ tí a ó ṣe pé?", options: ["Ẹni kan tó ni ín àti ọjọ́ ìparí", "Àlàyé gígùn", "Gbogbo ènìyàn ló ni ín", "Kò sí ọjọ́, kí ó lè rọ̀"], answer: 0, why: "Iṣẹ́ tí a ó ṣe nílò ẹni kan tó ni ín ní kedere àti ọjọ́ ìparí." }
        ]
      }
    },
    {
      name: "Orí 2: Dídarí ènìyàn pẹ̀lú AI bí olùrànlọ́wọ́ rẹ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mímúra èsì tó yé, tó sì tọ́ sílẹ̀",
          minutes: 5,
          goal: "Lo AI láti kọ àkọ́pẹrẹ èsì ní ọ̀nà ipò-ìwà-ipa (SBI), lẹ́yìn náà sọ ọ́ di tìrẹ.",
          text: [
            "Èsì tó dára máa ń ṣe pàtó, ó sì máa ń sọ nípa ìwà, kì í ṣe nípa irú ènìyàn tí ẹnì kan jẹ́. Ọ̀nà kan tó rọrùn ni ipò, ìwà, ipa (SBI: situation, behavior, impact): \"Nígbà ìfiṣẹ́lélọ́wọ́ ìyípo ọjọ́ Ìṣẹ́gun (ipò), o ṣàlàyé gbogbo àṣẹ ọjà tí kò tíì parí (ìwà), ìyípo tó tẹ̀lé e sì bẹ̀rẹ̀ láìsí ìdádúró kankan (ipa).\" Ó ń ṣiṣẹ́ fún ìyìn àti fún àtúnṣe.",
            "AI lè ràn ọ́ lọ́wọ́ láti múra sílẹ̀: \"Ràn mí lọ́wọ́ láti kọ èsì SBI fún ọmọ ẹgbẹ́ kan tí ó ti pẹ́ dé ìpàdé àárọ̀ ní ìgbà mẹ́ta ní oṣù yìí. Jẹ́ kí ó ní ọ̀wọ̀, kí ó sì parí pẹ̀lú ìbéèrè tí ó pè é láti sọ tirẹ̀.\" Lo ipò iṣẹ́, kì í ṣe orúkọ.",
            "Fúnra rẹ ni kí o fún un ní èsì náà, lójúkojú tàbí lórí ìpè, kí o sì fetí sílẹ̀. AI ń ràn ọ́ lọ́wọ́ láti múra ọ̀rọ̀ sílẹ̀; ìgbẹ́kẹ̀lé láàárín ìwọ àti àwọn ènìyàn rẹ ń wá láti ọ̀dọ̀ rẹ."
          ],
          steps: ["Yan ipò pàtó kan.", "Ṣàpèjúwe ìwà tí o rí, kì í ṣe ìwà ẹ̀dá ẹni náà.", "Sọ ipa rẹ̀ lórí ẹgbẹ́ tàbí iṣẹ́ náà.", "Ní kí AI ràn ọ́ lọ́wọ́ láti sọ ọ́ pẹ̀lú ọ̀wọ̀, ní lílo ipò iṣẹ́ dípò orúkọ.", "Fúnra rẹ fún un ní èsì náà, kí o sì fetí sílẹ̀."],
          words: [["SBI", "ipò, ìwà, ipa (situation, behavior, impact): ọ̀nà tó rọrùn láti fúnni ní èsì tó yé."], ["Ìwà", "ohun tí ẹnì kan ṣe tàbí sọ, tí o lè rí tàbí gbọ́."]],
          slides: [
            { title: "Èsì SBI", bullets: ["Ipò: nígbà wo àti níbo", "Ìwà: ohun tí wọ́n ṣe", "Ipa: ohun tí ó yọrí sí fún ẹgbẹ́ tàbí iṣẹ́"] },
            { title: "Jẹ́ kí AI ràn ọ́ lọ́wọ́ láti múra", bullets: ["Lo ipò iṣẹ́, kì í ṣe orúkọ", "Béèrè ọ̀rọ̀ tó ní ọ̀wọ̀", "Parí pẹ̀lú ìbéèrè kí wọ́n lè sọ tiwọn"] },
            { title: "Ìwọ lo máa fún wọn", bullets: ["Lójúkojú tàbí lórí ìpè", "Fetí sílẹ̀", "Ìgbẹ́kẹ̀lé ń wá láti ọ̀dọ̀ rẹ, kì í ṣe láti inú irinṣẹ́"] }
          ],
          tryIt: "Ronú nípa ohun kan tí ọmọ ẹgbẹ́ kan ṣe dáadáa láìpẹ́ yìí. Ní kí olùrànlọ́wọ́ AI ràn ọ́ lọ́wọ́ láti kọ ìyìn SBI fún un, ní lílo ipò iṣẹ́ dípò orúkọ. Lẹ́yìn náà tún un kọ ní ọ̀rọ̀ ara rẹ.",
          youCanNow: "múra èsì ipò-ìwà-ipa tó yé, tó sì tọ́ sílẹ̀ pẹ̀lú ìrànlọ́wọ́ AI, kí o sì fúnra rẹ fún ẹni náà.",
          quickCheck: [
            { objective: "O4", q: "Nínú èsì SBI, kí ni apá ìwà?", options: ["Èrò rẹ nípa ìhùwàsí ẹni náà", "Ọjọ́ ìpàdé náà", "Ohun tí ẹni náà ṣe tí o rí tàbí gbọ́", "Ipa rẹ̀ lórí ìmọ̀lára rẹ"], answer: 2, why: "Ìwà ni ìgbésẹ̀ pàtó tí o rí, kì í ṣe ìdájọ́ nípa ẹni náà." },
            { objective: "O4", q: "AI kọ àkọ́pẹrẹ ìyìn fún ọmọ ẹgbẹ́ kan tí ó dún bí ẹni pé kò ní ẹ̀mí. Kí ni o máa ṣe?", options: ["Tún un kọ ní ọ̀rọ̀ ara rẹ, kí o sì fúnra rẹ fún un", "Fi ọ̀rọ̀ AI ránṣẹ́ ní ímeèlì bí ó ti rí", "Jẹ́ kí AI fi í ránṣẹ́", "Fi ìyìn náà sílẹ̀"], answer: 0, why: "AI lè ràn ọ́ lọ́wọ́ láti múra, ṣùgbọ́n èsì gbọdọ̀ wà ní ọ̀rọ̀ rẹ, kí ó sì wá láti ọ̀dọ̀ rẹ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fífi iṣẹ́ léni lọ́wọ́ pẹ̀lú àkọsílẹ̀ àyẹ̀wò tó yé",
          minutes: 5,
          goal: "Lo AI láti ṣe àkọsílẹ̀ àyẹ̀wò fún fífi iṣẹ́ léni lọ́wọ́ tí ó sọ iṣẹ́ náà, ìpele tí a fẹ́, ọjọ́ ìparí àti àkókò àyẹ̀wò.",
          text: [
            "O mọ èrò ọ̀gá ológun (commander's intent): sọ ète àti ibi tí iṣẹ́ náà gbọdọ̀ dé fún àwọn ènìyàn, kì í ṣe àwọn ìgbésẹ̀ nìkan, kí wọ́n lè ṣàtúnṣe bí nǹkan bá yí padà. Fífi iṣẹ́ léni lọ́wọ́ láàárín aráàlú ń ṣiṣẹ́ bákan náà.",
            "Fífi iṣẹ́ léni lọ́wọ́ tó dára ní: iṣẹ́ náà, ìdí tí ó fi ṣe pàtàkì (èrò), bí iṣẹ́ tí ó parí ṣe máa rí (ìpele tí a fẹ́), ọjọ́ ìparí, ohun èlò àti àṣẹ tí wọ́n ní, àti ìgbà tí o máa ṣàyẹ̀wò. Béèrè lọ́wọ́ AI: \"Ṣe àkọsílẹ̀ àyẹ̀wò ojú-ìwé kan fún fífi ìròyìn ọjà ọ̀sẹ̀-ọ̀sẹ̀ lé ọmọ ẹgbẹ́ tuntun kan lọ́wọ́. Fi ète, ìpele tí a fẹ́, ọjọ́ ìparí, ohun èlò àti àkókò àyẹ̀wò sínú rẹ̀.\"",
            "Lẹ́yìn náà fi lé e lọ́wọ́ lójúkojú, ní kí ó ṣàlàyé rẹ̀ padà fún ọ, kí o sì yàgò fún un. Ṣàyẹ̀wò ní àwọn àkókò tí ẹ fohùn ṣọ̀kan lé, dípò kí o máa dúró tì í ní gbogbo ìgbà."
          ],
          steps: ["Dárúkọ iṣẹ́ náà àti ìdí tí ó fi ṣe pàtàkì.", "Ṣàpèjúwe bí iṣẹ́ tí ó parí ṣe máa rí.", "Fi ọjọ́ ìparí, ohun èlò àti àṣẹ lélẹ̀.", "Ní kí AI sọ èyí di àkọsílẹ̀ àyẹ̀wò ojú-ìwé kan.", "Fi lé e lọ́wọ́, ní kí ó ṣàlàyé rẹ̀ padà, kí o sì ṣàyẹ̀wò bí ẹ ṣe fohùn ṣọ̀kan."],
          words: [["Fífi iṣẹ́ léni lọ́wọ́ (delegate)", "fífún ẹlòmíì ní iṣẹ́ kan àti àṣẹ láti ṣe é."], ["Èrò (intent)", "ète àti ibi tí iṣẹ́ kan gbọdọ̀ dé, kí àwọn ènìyàn lè ṣàtúnṣe nígbà tí nǹkan bá yí padà."]],
          slides: [
            { title: "Èrò ọ̀gá ológun, ní ọ̀nà aráàlú", bullets: ["Ète àti ibi tí iṣẹ́ gbọdọ̀ dé", "Kì í ṣe àwọn ìgbésẹ̀ nìkan", "Kí àwọn ènìyàn lè ṣàtúnṣe"] },
            { title: "Fífi iṣẹ́ léni lọ́wọ́ tó dára ní", bullets: ["Iṣẹ́ náà àti ìdí tí ó fi ṣe pàtàkì", "Ìpele tí a fẹ́ àti ọjọ́ ìparí", "Ohun èlò, àṣẹ àti àkókò àyẹ̀wò"] },
            { title: "Lẹ́yìn náà, yàgò díẹ̀", bullets: ["Ní kí wọ́n ṣàlàyé rẹ̀ padà", "Ṣàyẹ̀wò ní àwọn àkókò tí ẹ fohùn ṣọ̀kan lé", "Má ṣe máa dúró tì wọ́n ní gbogbo ìgbà"] }
          ],
          tryIt: "Yan iṣẹ́ kan tí o lè fi lé ẹlòmíì lọ́wọ́. Ní kí olùrànlọ́wọ́ AI ṣe àkọsílẹ̀ àyẹ̀wò ojú-ìwé kan fún fífi iṣẹ́ léni lọ́wọ́, tí ó ní ète, ìpele tí a fẹ́, ọjọ́ ìparí, ohun èlò àti àkókò àyẹ̀wò.",
          youCanNow: "fi iṣẹ́ kan léni lọ́wọ́ pẹ̀lú àkọsílẹ̀ àyẹ̀wò tó yé tí ó fúnni ní ète, ìpele tí a fẹ́, ọjọ́ ìparí àti àkókò àyẹ̀wò.",
          quickCheck: [
            { objective: "O5", q: "Kí nìdí tí o fi máa sọ ète iṣẹ́ nígbà tí o bá ń fi lé ẹlòmíì lọ́wọ́?", options: ["Kí ẹni náà má lè yí ohunkóhun padà", "Kí ẹni náà lè ṣàtúnṣe bí nǹkan bá yí padà", "Kí o má nílò láti ṣàyẹ̀wò láéláé", "Kí iṣẹ́ náà lè pẹ́ jù"], answer: 1, why: "Mímọ ète àti ibi tí iṣẹ́ gbọdọ̀ dé ń jẹ́ kí àwọn ènìyàn ṣe ìpinnu tó dára nígbà tí ètò bá yí padà." },
            { objective: "O5", q: "O fi ìròyìn kan tí ó gbọdọ̀ parí ní Ọjọ́ Ẹtì lé ẹnì kan lọ́wọ́. Kí ni o máa ṣe tẹ̀lé e?", options: ["Dúró títí di Ọjọ́ Ẹtì kí o sì máa retí", "Gba iṣẹ́ náà padà lẹ́sẹ̀kẹsẹ̀", "Tún un ṣe fúnra rẹ láìbéèrè", "Ṣàyẹ̀wò ní àwọn àkókò tí ẹ fohùn ṣọ̀kan lé"], answer: 3, why: "Àyẹ̀wò tí ẹ fohùn ṣọ̀kan lé ń jẹ́ kí o rí ìṣòro ní kùtùkùtù láìdúró tì wọ́n jù." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lílo AI lọ́nà tó tọ́ gẹ́gẹ́ bí aṣáájú",
          minutes: 5,
          goal: "Lo òfin mẹ́ta fún lílo AI lọ́nà tó tọ́ pẹ̀lú ìsọfúnni ẹgbẹ́ àti ilé-iṣẹ́.",
          text: [
            "Gẹ́gẹ́ bí aṣáájú, ìwọ lo máa fi àpẹẹrẹ lélẹ̀. Òfin 1: tẹ̀lé ìlànà AI ti agbanisíṣẹ́ rẹ. Ọ̀pọ̀ ilé-iṣẹ́ ń sọ irinṣẹ́ AI tí wọ́n fọwọ́ sí àti ìsọfúnni tí a lè fi sínú wọn. Tí kò bá sí ìlànà, béèrè.",
            "Òfin 2: pa ìsọfúnni àdáni àwọn ènìyàn mọ́ kúrò nínú irinṣẹ́ AI gbogbogbò: ìṣòro iṣẹ́ ẹnì kan pẹ̀lú orúkọ rẹ̀, ìlera, owó oṣù, àdírẹ́sì ilé, tàbí ohunkóhun tí wọ́n sọ fún ọ ní àṣírí. Pa àṣírí oníbàárà àti ti ilé-iṣẹ́ mọ́ kúrò níbẹ̀ pẹ̀lú. Lo ipò iṣẹ́ àti àpèjúwe gbogbogbò.",
            "Òfin 3: ìwọ lo ni èsì iṣẹ́ náà. Ṣàyẹ̀wò òtítọ́, nọ́mbà àti ohùn kí ohunkóhun tó jáde. Tí AI bá ràn ọ́ lọ́wọ́ láti kọ ohun pàtàkì kan, ka gbogbo ọ̀rọ̀ inú rẹ̀. Sísọ fún ẹgbẹ́ rẹ bí o ṣe ń lo AI, àti bí àwọn náà ṣe lè lò ó, ń mú ìgbẹ́kẹ̀lé dàgbà."
          ],
          steps: ["Wá ìlànà AI ti agbanisíṣẹ́ rẹ kí o sì kà á, tàbí béèrè lọ́wọ́ ọ̀gá rẹ.", "Lo irinṣẹ́ tí wọ́n fọwọ́ sí nìkan fún ìsọfúnni iṣẹ́.", "Pa ìsọfúnni àdáni àti ti àṣírí mọ́ kúrò nínú AI gbogbogbò.", "Ṣàyẹ̀wò gbogbo ohun tí AI kọ kí ó tó jáde.", "Sọ fún ẹgbẹ́ rẹ bí wọ́n ṣe lè lo AI."],
          words: [["Ìlànà AI (AI policy)", "àwọn òfin agbanisíṣẹ́ nípa irinṣẹ́ AI tí a lè lò àti ìsọfúnni tí a lè fi sínú wọn."], ["Àṣírí (confidential)", "ìsọfúnni tí a gbọdọ̀ pa mọ́ láàárín ẹgbẹ́ kan tàbí ilé-iṣẹ́ kan."]],
          slides: [
            { title: "Òfin 1: Tẹ̀lé ìlànà", bullets: ["Lo irinṣẹ́ AI tí wọ́n fọwọ́ sí", "Kò sí ìlànà? Béèrè"] },
            { title: "Òfin 2: Dáàbò bo àwọn ènìyàn", bullets: ["Kò sí orúkọ pẹ̀lú ọ̀rọ̀ iṣẹ́ ṣíṣe, ìlera tàbí owó oṣù", "Kò sí àṣírí oníbàárà tàbí ti ilé-iṣẹ́", "Lo ipò iṣẹ́ àti ọ̀rọ̀ gbogbogbò"] },
            { title: "Òfin 3: Ìwọ lo ni èsì náà", bullets: ["Ṣàyẹ̀wò òtítọ́, nọ́mbà àti ohùn", "Ka gbogbo ọ̀rọ̀ inú iṣẹ́ pàtàkì", "Sọ òótọ́ fún ẹgbẹ́ rẹ nípa AI"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: fún ẹgbẹ́ tí ó ní ènìyàn mẹ́ta sí mẹ́fà, lo olùrànlọ́wọ́ AI láti ṣe ètò ọ̀sẹ̀ kan pẹ̀lú ẹni tó ni iṣẹ́ kọ̀ọ̀kan, kọ ímeèlì ìròyìn BLUF, kí o sì yí àkọsílẹ̀ ìpàdé kúkúrú padà sí tábìlì iṣẹ́ tí a ó ṣe. Lo orúkọ ipò iṣẹ́ dípò orúkọ ènìyàn, kí o sì ṣàyẹ̀wò pé kò sí ìsọfúnni àdáni nínú èyíkéyìí nínú wọn.",
          youCanNow: "lo AI gẹ́gẹ́ bí aṣáájú ní ọ̀nà tí ó tẹ̀lé ìlànà, tí ó dáàbò bo àwọn ènìyàn rẹ, tí ìwọ sì ń dáhùn fún iṣẹ́ náà.",
          quickCheck: [
            { objective: "O6", q: "Òfin wo ló ṣáájú nígbà tí o bá ń lo AI níbi iṣẹ́?", options: ["Tẹ̀lé ìlànà AI ti agbanisíṣẹ́ rẹ", "Lo irinṣẹ́ èyíkéyìí tí o bá fẹ́", "Lẹ gbogbo nǹkan sínú rẹ̀ kí AI lè mọ ipò náà", "Jẹ́ kí AI ṣe ìpinnu ìkẹyìn"], answer: 0, why: "Ìlànà agbanisíṣẹ́ rẹ ló ń pinnu irinṣẹ́ àti ìsọfúnni tí o lè lò." },
            { objective: "O6", q: "O fẹ́ ìrànlọ́wọ́ AI pẹ̀lú ọ̀rọ̀ kan nípa ìṣòro owó oṣù ọmọ ẹgbẹ́ kan. Kí ni o máa ṣe?", options: ["Lẹ orúkọ rẹ̀ àti ìsọfúnni owó oṣù rẹ̀ sínú rẹ̀", "Lẹ gbogbo fáìlì rẹ̀", "Fi ìsọfúnni àdáni sílẹ̀, kí o sì ṣàpèjúwe ọ̀rọ̀ náà pẹ̀lú ipò iṣẹ́", "Fi í sínú ibi ìjíròrò gbogbogbò"], answer: 2, why: "Owó oṣù àti ìsọfúnni ara ẹni kì í wọ inú irinṣẹ́ AI gbogbogbò; ipò iṣẹ́ ń pa ẹni náà mọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídarí ènìyàn pẹ̀lú AI bí olùrànlọ́wọ́ rẹ",
        questions: [
          { objective: "O4", q: "Kí ni SBI dúró fún?", options: ["Ipò, ìwà, ipa (situation, behavior, impact)", "Òṣìṣẹ́, ìṣúná owó, ọjà (staff, budget, inventory)", "Ìyára, ìwọ̀ntúnwọ̀nsì, èrò (speed, balance, intent)", "Ààbò, àlàyé ṣókí, àyẹ̀wò (safety, briefing, inspection)"], answer: 0, why: "SBI jẹ́ ọ̀nà tó rọrùn fún èsì tó yé." },
          { objective: "O4", q: "Èwo ni èsì tí ó dá lórí ìwà?", options: ["\"O ya ọ̀lẹ.\"", "\"O dé ní ìṣẹ́jú 15 lẹ́yìn àkókò sí ìpàdé mẹ́ta ní oṣù yìí.\"", "\"Ìhùwàsí rẹ kò dára.\"", "\"Ìwọ ni ẹni tó burú jù.\""], answer: 1, why: "Ó ṣàpèjúwe ohun tí ẹni náà ṣe, èyí tí o lè rí." },
          { objective: "O5", q: "Nínú fífi iṣẹ́ léni lọ́wọ́, \"èrò\" (intent) túmọ̀ sí:", options: ["Àwọn ìgbésẹ̀ gan-an nìkan", "Ọjọ́ ìparí nìkan", "Ète àti ibi tí iṣẹ́ gbọdọ̀ dé, kí àwọn ènìyàn lè ṣàtúnṣe", "Ìmọ̀lára rẹ nípa iṣẹ́ náà"], answer: 2, why: "Èrò ń jẹ́ kí àwọn ènìyàn ṣàtúnṣe nígbà tí nǹkan bá yí padà." },
          { objective: "O6", q: "Ilé-iṣẹ́ rẹ kò ní ìlànà AI. Kí ni o máa ṣe?", options: ["Lo irinṣẹ́ èyíkéyìí pẹ̀lú ìsọfúnni èyíkéyìí", "Fúnra rẹ fòfin de AI fún gbogbo ènìyàn", "Lẹ ìsọfúnni oníbàárà sínú chatbot gbogbogbò", "Béèrè lọ́wọ́ ọ̀gá rẹ kí o tó lo AI pẹ̀lú ìsọfúnni iṣẹ́"], answer: 3, why: "Tí kò bá sí ìlànà, béèrè kí o tó fi ìsọfúnni iṣẹ́ sínú AI." },
          { objective: "O6", q: "Èwo ló dára láti fi sínú prompt AI gbogbogbò?", options: ["\"Ọmọ ẹgbẹ́ kan ti pẹ́ dé ìpàdé mẹ́ta\"", "Ìṣòro ìlera òṣìṣẹ́ kan pẹ̀lú orúkọ rẹ̀", "Nọ́mbà àkáǹtì oníbàárà", "Àdírẹ́sì ilé àwọn ọmọ ẹgbẹ́ rẹ"], answer: 0, why: "Àpèjúwe gbogbogbò tí ó lo ipò iṣẹ́ ń pa ìsọfúnni àwọn ènìyàn mọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Iṣẹ́ Ṣíṣe àti Aṣáájú",
    questions: [
      { objective: "O1", q: "Ètò iṣẹ́ aráàlú ní:", options: ["Ẹni tí ó wà nídìí rẹ̀ nìkan", "Kí ni, nígbà wo, ta ni àti pẹ̀lú kí ni", "Ìṣúná owó nìkan", "Àkókò ìpàdé nìkan"], answer: 1, why: "Bí ètò iṣẹ́ ológun, ó ní iṣẹ́, ọjọ́, ènìyàn àti ohun èlò." },
      { objective: "O1", q: "Nígbà tí o bá ń ní kí AI tò iṣẹ́, ó dára láti béèrè fún:", options: ["Ìtòlẹ́sẹẹsẹ láìnídìí", "Ìtòlẹ́sẹẹsẹ álífábẹ́ẹ̀tì", "Ìtòlẹ́sẹẹsẹ bí wọ́n ṣe jẹ́ kánjúkánjú àti pàtàkì tó", "Iṣẹ́ tó gùn jù ní àkọ́kọ́"], answer: 2, why: "Kánjúkánjú àti pàtàkì ń fúnni ní ìtòlẹ́sẹẹsẹ tó wúlò." },
      { objective: "O1", q: "Kánjúkánjú àti pàtàkì:", options: ["Jẹ́ ọ̀kan náà nígbà gbogbo", "Jẹ́ ọ̀rọ̀ méjì fún \"rọrùn\"", "Jẹ́ ọ̀rọ̀ ológun nìkan", "Kì í fìgbà gbogbo jẹ́ ohun kan náà"], answer: 3, why: "Kánjúkánjú túmọ̀ sí báyìí; pàtàkì túmọ̀ sí pé ó ṣe pàtàkì jù sí àfojúsùn." },
      { objective: "O1", q: "Ta ló máa fọwọ́ sí ètò ìkẹyìn ẹgbẹ́?", options: ["Ìwọ, aṣáájú", "AI", "Ọmọ ẹgbẹ́ tuntun jù", "Kò sí ẹnì kankan"], answer: 0, why: "O ń lo ìdájọ́ tí AI kò ní." },
      { objective: "O2", q: "BLUF dúró fún:", options: ["Briefing, lesson, update, follow-up", "Bottom line up front (kókó ọ̀rọ̀ ní ìbẹ̀rẹ̀)", "Basic leadership under fire", "Best last unit file"], answer: 1, why: "Fi kókó ọ̀rọ̀ sí ìbẹ̀rẹ̀." },
      { objective: "O2", q: "Ọ̀rọ̀ ológun lè dún bí ẹni pé ó le jù sí etí aráàlú. Àtúnṣe tó dára ni:", options: ["Jẹ́ kí ó gùn sí i", "Fi ìkékúrú púpọ̀ sí i kún un", "Fi gbólóhùn tó ní ọ̀rẹ́ bí \"Inú mi máa dùn láti jíròrò rẹ̀\" kún un", "Kọ ọ́ ní lẹ́tà ńlá pátá"], answer: 2, why: "Ohùn tó ní ọ̀rẹ́, tó sì bá iṣẹ́ mu ń ran àwọn òǹkàwé aráàlú lọ́wọ́." },
      { objective: "O2", q: "Kí o tó fi ímeèlì tí AI kọ ránṣẹ́, o yẹ kí o:", options: ["Fi ránṣẹ́ láìkà á", "Fi ọ̀rọ̀ ológun kún un", "Jẹ́ kí ó gùn sí i", "Kà á bí ẹni tí ó máa gbà á, kí o sì tún ohunkóhun tí kò yé ṣe"], answer: 3, why: "Ìwọ lo ni ohun tí o fi ránṣẹ́." },
      { objective: "O3", q: "Àkópọ̀ ìpàdé gbọdọ̀ ní:", options: ["Àwọn ìpinnu, iṣẹ́ tí a ó ṣe pẹ̀lú ẹni tó ni ín àti ọjọ́, àti àwọn ìbéèrè tí kò tíì ní ìdáhùn", "Àwọn tí ó wá síbẹ̀ nìkan", "Àwàdà nìkan", "Àkókò ìbẹ̀rẹ̀ nìkan"], answer: 0, why: "Èyí ń sọ fún gbogbo ènìyàn ẹni tí yóò ṣe kí ni àti nígbà wo." },
      { objective: "O6", q: "Kí o tó lẹ àkọsílẹ̀ ìpàdé sínú AI gbogbogbò, o yẹ kí o:", options: ["Fi nọ́mbà fóònù gbogbo ènìyàn kún un", "Fi orúkọ ipò iṣẹ́ rọ́pò orúkọ ènìyàn, kí o sì yọ ìsọfúnni àdáni kúrò", "Fi àṣírí ilé-iṣẹ́ kún un", "Má ṣe ohunkóhun"], answer: 1, why: "Kọ́kọ́ dáàbò bo ìsọfúnni àwọn ènìyàn." },
      { objective: "O6", q: "Lílo irinṣẹ́ AI fún àkópọ̀ ìpàdé níbi iṣẹ́ dára nígbà tí:", options: ["Kò sí ẹni tí ó mọ̀ nípa rẹ̀", "O ń lo àkáǹtì ti ara rẹ pẹ̀lú ìsọfúnni ilé-iṣẹ́", "Agbanisíṣẹ́ rẹ gbà á láàyè, a sì sọ fún àwọn ènìyàn", "Nígbà gbogbo, láìka òfin sí"], answer: 2, why: "Tẹ̀lé òfin agbanisíṣẹ́ rẹ, kí o sì sọ òótọ́ nípa gbígba ìpàdé sílẹ̀." },
      { objective: "O3", q: "Iṣẹ́ tí a ó ṣe tí kò ní ẹni tó ni ín gbọdọ̀:", options: ["Di ohun tí a pa tì", "Di ti gbogbo ènìyàn", "Di ohun tí a pa rẹ́", "Ní ẹni kan tó ni ín àti ọjọ́ ìparí"], answer: 3, why: "Iṣẹ́ tí gbogbo ènìyàn jọ ni sábà máa ń túmọ̀ sí pé kò sí ẹni tí yóò ṣe é." },
      { objective: "O4", q: "Èsì tó dára máa ń sọ nípa:", options: ["Ìwà tí o rí", "Irú ènìyàn tí ẹni náà jẹ́", "Àhesọ ọ̀rọ̀", "Ìmọ̀lára rẹ"], answer: 0, why: "Ìwà jẹ́ pàtó, ó sì tọ́." },
      { objective: "O4", q: "Nínú èsì SBI, \"ipa\" ni:", options: ["Ipò ológun ẹni náà", "Ohun tí ó yọrí sí fún ẹgbẹ́ tàbí iṣẹ́ náà", "Ìjìyà", "Ọjọ́"], answer: 1, why: "Ipa ń ṣàlàyé ìdí tí ìwà náà fi ṣe pàtàkì." },
      { objective: "O4", q: "Ta ló yẹ kí ó fúnni ní èsì tí AI ràn lọ́wọ́ láti múra?", options: ["AI, ní ímeèlì", "Alábàáṣiṣẹ́ kan", "Ìwọ, lójúkojú tàbí lórí ìpè", "Kò sí ẹnì kankan"], answer: 2, why: "Ìgbẹ́kẹ̀lé ń wá láti ọ̀dọ̀ rẹ, kì í ṣe láti inú irinṣẹ́." },
      { objective: "O5", q: "Nígbà tí o bá ń fi iṣẹ́ léni lọ́wọ́, lẹ́yìn tí o bá ti fi lé e lọ́wọ́, o yẹ kí o:", options: ["Ṣe é fúnra rẹ bákan náà", "Máa dúró ti gbogbo ìgbésẹ̀", "Má ṣe ṣàyẹ̀wò mọ́ láéláé", "Ṣàyẹ̀wò ní àwọn àkókò tí ẹ fohùn ṣọ̀kan lé"], answer: 3, why: "Àyẹ̀wò tí ẹ fohùn ṣọ̀kan lé ń mú ìgbẹ́kẹ̀lé àti ojúṣe dọ́gba." },
      { objective: "O5", q: "Fífi iṣẹ́ léni lọ́wọ́ tó dára ní:", options: ["Ète, ìpele tí a fẹ́, ọjọ́ ìparí, ohun èlò àti àkókò àyẹ̀wò", "Ọjọ́ ìparí nìkan", "\"Ṣe é\" nìkan", "Ọ̀rọ̀ aṣínà rẹ"], answer: 0, why: "Àwọn apá wọ̀nyí ń jẹ́ kí ẹni náà ṣàṣeyọrí." },
      { objective: "O5", q: "Bíbéèrè pé kí ẹni náà ṣàlàyé iṣẹ́ náà padà fún ọ ń ràn ọ́ lọ́wọ́ láti:", options: ["Fi àkókò ṣòfò", "Rí i dájú pé ó yé e", "Dán ìrántí rẹ̀ wò fún eré", "Yẹra fún sísọ èrò"], answer: 1, why: "Ó ń mú àìgbọ́ra-ẹni-yé jáde ní kùtùkùtù." },
      { objective: "O6", q: "Òfin 1 fún lílo AI gẹ́gẹ́ bí aṣáájú ni:", options: ["Lo irinṣẹ́ ọ̀fẹ́ èyíkéyìí fún gbogbo nǹkan", "Má ṣe lo AI láéláé", "Tẹ̀lé ìlànà AI ti agbanisíṣẹ́ rẹ", "Jẹ́ kí ẹgbẹ́ pinnu fúnra wọn"], answer: 2, why: "Ìlànà ń sọ irinṣẹ́ àti ìsọfúnni tí a gbà láàyè." },
      { objective: "O6", q: "Èwo ni kò gbọdọ̀ wọ inú irinṣẹ́ AI gbogbogbò láéláé?", options: ["\"Ṣe ètò ọ̀sẹ̀ mi\"", "\"Tún ímeèlì yìí kọ\"", "Àkọsílẹ̀ orúkọ àwọn iṣẹ́", "Ìsọfúnni owó oṣù àti ìlera òṣìṣẹ́ kan pẹ̀lú orúkọ rẹ̀"], answer: 3, why: "Ìyẹn jẹ́ ìsọfúnni àdáni àti àṣírí." },
      { objective: "O6", q: "Tí AI bá ràn ọ́ lọ́wọ́ láti kọ ìròyìn pàtàkì kan, ta ló ń dáhùn fún un?", options: ["Ìwọ", "Ilé-iṣẹ́ AI náà", "Ẹni tí ó ń kà á", "Kò sí ẹnì kankan"], answer: 0, why: "Ìwọ lo ni èsì iṣẹ́ náà, nítorí náà ṣàyẹ̀wò gbogbo ọ̀rọ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 4, 7, 8, 10, 12, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ètò ọ̀sẹ̀", objective: "O1", notYet: "Àwọn iṣẹ́ kò tò lẹ́sẹẹsẹ bí wọ́n ṣe ṣe pàtàkì tó, tàbí àwọn kan kò ní ẹni tó ni wọ́n.", meets: "Ètò ọ̀sẹ̀ kan pẹ̀lú ohun tó ṣáájú àti ipò iṣẹ́ ẹni tó ni iṣẹ́ kọ̀ọ̀kan.", exceeds: "Akẹ́kọ̀ọ́ yí ohun kan tí AI ṣì ṣe padà, ó sì lè sọ ìdí rẹ̀." },
      { name: "Ímeèlì ìròyìn BLUF", objective: "O2", notYet: "Kókó ọ̀rọ̀ fara sin, tàbí ohùn rẹ̀ le jù.", meets: "Gbólóhùn àkọ́kọ́ sọ kókó ọ̀rọ̀, pẹ̀lú kókó kúkúrú àti ìgbésẹ̀ tó kàn ní ohùn tó bá iṣẹ́ mu.", exceeds: "A ka ímeèlì náà bí ẹni tí ó máa gbà á ṣe máa kà á, a sì dín in kù sí ọ̀rọ̀ tó kéré jù." },
      { name: "Iṣẹ́ tí a ó ṣe", objective: "O3", notYet: "Àwọn iṣẹ́ kan kò ní ẹni tó ni wọ́n tàbí ọjọ́ ìparí.", meets: "Àwọn ìpinnu, iṣẹ́ tí a ó ṣe tí ọ̀kọ̀ọ̀kan ní ẹni kan tó ni ín àti ọjọ́ ìparí, àti àwọn ìbéèrè tí kò tíì ní ìdáhùn.", exceeds: "Ọjọ́ ìparí bá ètò ọ̀sẹ̀ mu, ìbéèrè tí kò tíì ní ìdáhùn kọ̀ọ̀kan sì ní ẹni tí yóò dáhùn rẹ̀." },
      { name: "Ìsọfúnni àdáni àti ìlànà", objective: "O6", notYet: "Orúkọ tàbí ìsọfúnni àdáni kan wà nínú prompt tàbí iṣẹ́ náà.", meets: "Orúkọ ipò iṣẹ́ dípò orúkọ ènìyàn, kò sì sí ìsọfúnni àdáni níbì kankan.", exceeds: "Akẹ́kọ̀ọ́ dárúkọ ìlànà AI ti agbanisíṣẹ́ rẹ̀, tàbí ìbéèrè tí òun máa béèrè lọ́wọ́ ọ̀gá rẹ̀ nípa rẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn lo ètò ọ̀sẹ̀, ímeèlì BLUF tàbí tábìlì iṣẹ́ tí a ó ṣe níbi iṣẹ́ láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gba ipò olórí ẹgbẹ́, alábòójútó tàbí ọ̀gá aráàlú, tàbí tí wọ́n pa á mọ́, láàárín oṣù 6",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Koach Learn míì fún àwọn tí wọ́n ti sìn nínú iṣẹ́ ológun tàbí nípa aṣáájú láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí smartphone tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: ChatGPT, Microsoft Copilot tàbí Google Gemini, tàbí irinṣẹ́ tí agbanisíṣẹ́ rẹ fọwọ́ sí",
      "Àkọsílẹ̀ iṣẹ́ àti àkọsílẹ̀ ìpàdé àṣeṣe tí ó lo orúkọ ipò iṣẹ́, kì í ṣe orúkọ ènìyàn",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Pèsè ipò ẹgbẹ́ àṣeṣe pẹ̀lú orúkọ ipò iṣẹ́ bí \"Olórí ìyípo A\" kí ẹnikẹ́ni má lo orúkọ tàbí ìsọfúnni àwọn alábàáṣiṣẹ́ gidi.",
      "Ní kí àwọn akẹ́kọ̀ọ́ ṣàyẹ̀wò ìlànà AI ti agbanisíṣẹ́ wọn kí wọ́n tó lo AI pẹ̀lú ìsọfúnni iṣẹ́ gidi.",
      "Pín àwọn akẹ́kọ̀ọ́ ní méjì-méjì kí wọ́n ka ímeèlì BLUF ara wọn bí ẹni tí ó máa gbà á, kí wọ́n sì fúnni ní àbá kan.",
      "Ẹ ṣe àṣeṣe èsì SBI sókè ní méjì-méjì lẹ́yìn àkọ́pẹrẹ AI, kí àwọn akẹ́kọ̀ọ́ lè sọ ọ́ di tiwọn.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
