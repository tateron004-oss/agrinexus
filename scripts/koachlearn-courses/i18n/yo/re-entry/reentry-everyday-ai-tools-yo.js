"use strict";

// Koach Learn course (Yoruba translation of re-entry/reentry-everyday-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-everyday-ai-tools-yo",
  lang: "yo",
  translationOf: "reentry-everyday-ai-tools",
  category: "Re-Entry",
  name: "Àwọn Irinṣẹ́ AI fún Ojoojúmọ́",
  skills: "Ṣíṣe ìrántí pẹ̀lú ohùn, Wíwá ọ̀nà ọkọ̀ èrò, Kíkà àti títúmọ̀ pẹ̀lú kámẹ́rà, Wíwá ìrànlọ́wọ́ àdúgbò, Kíkọ ọ̀rọ̀ ìránṣẹ́ ojoojúmọ́ pẹ̀lú AI, Ṣíṣe àkọsílẹ̀ ìwé tí o nílò",
  outcome: "lo àwọn irinṣẹ́ AI ọ̀fẹ́ lórí smartphone láti dé ìpàdé ní àkókò: wá ọ̀nà bọ́ọ̀sì tàbí ọkọ̀ ojú-irin, ṣe ìrántí, ṣe àkọsílẹ̀ ohun tí o máa mú lọ, kí o sì kọ ọ̀rọ̀ kúkúrú tí o bá ń pẹ́.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tí ń padà sílé tí wọ́n fẹ́ lo smartphone fún ayé ojoojúmọ́: ìpàdé, rírìnrìn àjò, kíkà fọ́ọ̀mù, wíwá ìrànlọ́wọ́ àti bíbá àwọn ènìyàn sọ̀rọ̀.",
    "O máa lo àwọn irinṣẹ́ ọ̀fẹ́ tí ó ti wà lórí ọ̀pọ̀ fóònù: olùrànlọ́wọ́ ohùn, maapu, irinṣẹ́ kíkà ti kámẹ́rà, àti olùrànlọ́wọ́ AI bí ChatGPT, Microsoft Copilot tàbí Google Gemini. Gbogbo àpẹẹrẹ wá láti ayé gidi lẹ́yìn ìtúsílẹ̀: ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́, ọ́fíìsì káàdì ìdánimọ̀, ìpàdé ilé gbígbé àti ẹbí.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Kà á, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. O kò nílò láti tẹ nọ́mbà ẹjọ́, nọ́mbà ìdánimọ̀ tàbí ìsọfúnni àdáni kankan láti ṣe àwọn iṣẹ́ wọ̀nyí."
  ],
  finalTask: "Ṣètò bí o ṣe máa dé ìpàdé gidi kan (ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́, ọ́fíìsì káàdì ìdánimọ̀ tàbí ìbẹ̀wò ilé gbígbé): wá ọ̀nà ọkọ̀ èrò tàbí ti ẹsẹ̀, ṣe ìrántí fún ìgbà tí o máa kúrò nílé, ní kí AI ṣe àkọsílẹ̀ ohun tí o máa mú lọ, kí AI sì ràn ọ́ lọ́wọ́ láti kọ text kúkúrú tó ní ọ̀wọ̀ tí o lè fi ránṣẹ́ tí o bá ń pẹ́.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí wọ́n ń padà sílé láti ẹ̀wọ̀n (ìpadàbọ̀ sí àwùjọ) tí wọ́n ní smartphone, tí wọ́n sì nílò láti bójú tó ìpàdé, ìrìnàjò, fọ́ọ̀mù àti ọ̀rọ̀ ìránṣẹ́ fúnra wọn. Ọ̀pọ̀ kò sí nílé nígbà tí fóònù àti àwọn irinṣẹ́ AI ń yí padà.",
    startingPoint: "Wọ́n lè pe ènìyàn kí wọ́n sì fi text ránṣẹ́. Wọn kò fi bẹ́ẹ̀ lo olùrànlọ́wọ́ ohùn, maapu, irinṣẹ́ kíkà ti kámẹ́rà tàbí olùrànlọ́wọ́ AI. Àwọn kan kò ní ìgboyà nínú kíkàwé tàbí lílo ẹ̀rọ.",
    gap: "Pípàdánù ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́, ìpàdé káàdì ìdánimọ̀ tàbí ìbẹ̀wò ilé gbígbé lè fa gbogbo ètò ìpadàbọ̀ sẹ́yìn. Àwọn akẹ́kọ̀ọ́ nílò láti lo irinṣẹ́ fóònù ọ̀fẹ́ láti dé ibi ní àkókò, ka ìwé tí a tẹ̀, wá ìrànlọ́wọ́ àdúgbò, kí wọ́n sì fi ọ̀rọ̀ tó ní ọ̀wọ̀ ránṣẹ́, láìpín ìsọfúnni àdáni.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú (nǹkan bí kíláàsì 5 sí 6)",
      "Ẹ̀rọ: smartphone, nígbà míì pẹ̀lú data díẹ̀ tàbí fóònù àtijọ́",
      "Àkókò: ẹ̀kọ́ nǹkan bí ìṣẹ́jú 5 tí ó bá àkókò ìpàdé àti iṣẹ́ mu",
      "Àwọn òfin parole tàbí probation kan ń dín lílo íńtánẹ́ẹ̀tì kù; akẹ́kọ̀ọ́ kọ̀ọ̀kan ń tẹ̀lé àwọn òfin tirẹ̀",
      "Ìsọfúnni àdáni: kò sí nọ́mbà ẹjọ́, nọ́mbà ìdánimọ̀ tàbí ìsọfúnni àdáni míì nínú irinṣẹ́ AI tàbí ìrántí kankan"
    ],
    prerequisites: "\"Ìfihàn sí AI àti Ìgboyà lórí Ẹ̀rọ Ayélujára\" wúlò, ṣùgbọ́n kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú olùrànlọ́wọ́ ohùn fóònù rẹ", action: "ṣe ìrántí fún ìpàdé kan àti ìrántí kejì fún ìgbà tí o máa kúrò nílé", standard: "pẹ̀lú ohùn, pẹ̀lú àkọlé gbogbogbò láìsí ìsọfúnni àdáni" },
    { id: "O2", condition: "Tí a bá fún ọ ní àdírẹ́sì ibi gidi kan", action: "wá ọ̀nà bọ́ọ̀sì, ọkọ̀ ojú-irin tàbí ti ẹsẹ̀ nínú app maapu, kí o sì mọ ìgbà tí o máa kúrò nílé", standard: "pẹ̀lú àkókò ìdé tí o ṣètò sí ìṣẹ́jú 10 sí 15 ṣáájú" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìwé ìpolówó, àmì tàbí ìkéde iṣẹ́ tí a tẹ̀", action: "lo kámẹ́rà fóònù rẹ láti kà, dà kọ tàbí túmọ̀ ọ̀rọ̀ inú rẹ̀", standard: "nípa dída nọ́mbà fóònù tàbí àdírẹ́sì kọ sínú àkọsílẹ̀ tàbí olùbásọ̀rọ̀ láìtún un tẹ̀" },
    { id: "O4", condition: "Pẹ̀lú olùrànlọ́wọ́ AI àti 211", action: "wá iṣẹ́ ìrànlọ́wọ́ àdúgbò fún ilé gbígbé, oúnjẹ, iṣẹ́ tàbí ọkọ̀", standard: "pẹ̀lú ètò kan tí o kọ sílẹ̀, tí o sì ti fìdí rẹ̀ múlẹ̀ nípasẹ̀ 211 tàbí ojú-òpó ìjọba" },
    { id: "O5", condition: "Tí ipò ojoojúmọ́ gidi kan bá wà", action: "kọ ọ̀rọ̀ kúkúrú tó ní ọ̀wọ̀ pẹ̀lú ìrànlọ́wọ́ AI", standard: "tí ó jẹ́ òótọ́, tí kò ní ìsọfúnni àdáni, tí ó sì dún bí ìwọ" },
    { id: "O6", condition: "Tí ìpàdé gidi kan bá wà", action: "ṣe àkọsílẹ̀ ohun tí o máa mú lọ pẹ̀lú ìrànlọ́wọ́ AI, kí o sì fìdí rẹ̀ múlẹ̀ lọ́dọ̀ ọ́fíìsì náà", standard: "tí ó ní orúkọ ìwé nìkan, tí o sì ti ṣàyẹ̀wò lórí ojú-òpó ìjọba tàbí lórí fóònù" }
  ],
  chapters: [
    {
      name: "Orí 1: Fóònù rẹ bí olùrànlọ́wọ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ìrántí àti aago ìjí pẹ̀lú ohùn",
          minutes: 5,
          goal: "Ṣe ìrántí fún ìpàdé kan nípa bíbá fóònù rẹ sọ̀rọ̀.",
          text: [
            "Pípàdánù ìpàdé lè gbà ọ́ ní ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́, àyè ilé gbígbé tàbí ìpàdé àyẹ̀wò. Fóònù rẹ lè rántí fún ọ.",
            "Ọ̀pọ̀ fóònù ní olùrànlọ́wọ́ ohùn: Siri lórí iPhone, àti Google Assistant tàbí Gemini lórí Android. Jí i nípa sísọ \"Hey Siri\" tàbí \"Hey Google\", tàbí nípa títẹ bọ́tìnnì ẹ̀gbẹ́ tàbí ti ilé mọ́lẹ̀. Lẹ́yìn náà sọ pé: \"Rán mi létí ìfọ̀rọ̀wánilẹ́nuwò mi ní Fresh Foods ní ọjọ́ Ìṣẹ́gun ní agogo 9 àárọ̀.\" \"Ṣètò aago ìjí fún agogo 6:30 àárọ̀ ọ̀la.\"",
            "Ṣe ìrántí méjì fún ohunkóhun tó ṣe pàtàkì: ọ̀kan ní ọjọ́ tó ṣáájú, àti ọ̀kan nígbà tí ó tó àkókò láti kúrò nílé. Jẹ́ kí àkọlé ìrántí jẹ́ gbogbogbò; o kò nílò láti fi ìsọfúnni àdáni sínú rẹ̀."
          ],
          steps: ["Jí olùrànlọ́wọ́ ohùn.", "Sọ ohun náà, ọjọ́ àti àkókò.", "Fi ìrántí kejì kún un fún ìgbà tí o máa kúrò nílé.", "Wo ojú-iboju láti rí i dájú pé ó ti wà."],
          words: [["Olùrànlọ́wọ́ ohùn", "olùrànlọ́wọ́ tí ó wà nínú fóònù rẹ tí ó ń ṣe iṣẹ́ kékeré nígbà tí o bá sọ̀rọ̀."], ["Ìrántí", "ọ̀rọ̀ tí fóònù rẹ fi hàn ọ́ ní àkókò tí o yàn."]],
          slides: [
            { title: "Fóònù rẹ lè rántí fún ọ", bullets: ["Ìfọ̀rọ̀wánilẹ́nuwò, ọ́fíìsì káàdì ìdánimọ̀, ìbẹ̀wò ilé gbígbé", "Siri, Google Assistant tàbí Gemini"] },
            { title: "Sọ ọ́", bullets: ["\"Rán mi létí ìfọ̀rọ̀wánilẹ́nuwò mi ọjọ́ Ìṣẹ́gun ní agogo 9 àárọ̀.\"", "\"Ṣètò aago ìjí fún agogo 6:30 àárọ̀ ọ̀la.\""] },
            { title: "Ìrántí méjì fún nǹkan ńlá", bullets: ["Ọ̀kan ní ọjọ́ tó ṣáájú", "Ọ̀kan nígbà tí ó tó àkókò láti kúrò nílé", "Jẹ́ kí àkọlé jẹ́ gbogbogbò"] }
          ],
          tryIt: "Ṣe ìrántí pẹ̀lú ohùn fún ìpàdé gidi kan, tàbí ti àṣeṣe, àti ìrántí kejì fún ìgbà tí o nílò láti kúrò nílé.",
          youCanNow: "ṣe ìrántí ìpàdé àti aago ìjí pẹ̀lú ohùn.",
          quickCheck: [
            { objective: "O1", q: "Kí ni àkọlé tó dára fún ìrántí nípa ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́?", options: ["Orúkọ rẹ ní kíkún àti ọjọ́ ìbí rẹ", "Ìfọ̀rọ̀wánilẹ́nuwò ní agogo 9 àárọ̀", "Nọ́mbà ẹjọ́ rẹ", "Àdírẹ́sì ilé rẹ"], answer: 1, why: "Àkọlé ìrántí gbọ́dọ̀ jẹ́ gbogbogbò, láìsí ìsọfúnni àdáni." },
            { objective: "O1", q: "Ìfọ̀rọ̀wánilẹ́nuwò rẹ jẹ́ ọ̀la ní agogo 9 àárọ̀, bọ́ọ̀sì sì ń gba ìṣẹ́jú 40. Kí ni o máa ṣe?", options: ["Ṣe ìrántí kan fún agogo 9 àárọ̀", "Retí pé o máa rántí ní àárọ̀", "Ṣe ìrántí kan fún alẹ́ yìí àti ọ̀kan fún ìgbà tí o máa kúrò nílé", "Kọ ọ́ sí ọwọ́ rẹ"], answer: 2, why: "Ìrántí méjì, ní ọjọ́ tó ṣáájú àti nígbà tí o máa kúrò nílé, ń ràn ọ́ lọ́wọ́ láti dé ní àkókò." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rírìnrìn àjò pẹ̀lú maapu àti ọkọ̀ èrò",
          minutes: 6,
          goal: "Wá ọ̀nà bọ́ọ̀sì, ọkọ̀ ojú-irin tàbí ti ẹsẹ̀, kí o sì mọ ìgbà tí o máa kúrò nílé.",
          text: [
            "Àwọn app maapu bí Google Maps àti Apple Maps ń fi bí o ṣe lè dé ibikíbi hàn, pẹ̀lú bọ́ọ̀sì, ọkọ̀ ojú-irin, ẹsẹ̀ tàbí mọ́tò, àti bí yóò ṣe pẹ́ tó.",
            "Ṣí app maapu, tẹ àdírẹ́sì sínú àpótí ìwádìí, kí o sì tẹ Directions. Yan àmì bọ́ọ̀sì tàbí ọkọ̀ ojú-irin fún ọkọ̀ èrò, tàbí àmì ẹni tó ń rìn. O máa rí bọ́ọ̀sì tí o máa wọ̀, ibi tí o ti máa wọ̀ ọ́, àti ìgbà tí yóò dé. O tún lè ṣètò àkókò tí o nílò láti dé, app náà sì máa fi ìgbà tí o máa kúrò nílé hàn.",
            "Ṣètò láti dé ní ìṣẹ́jú 10 sí 15 ṣáájú. Bọ́ọ̀sì lè pẹ́. Fi àwọn àdírẹ́sì tí o máa ń lọ pamọ́, bí ilé rẹ tàbí ibi iṣẹ́, kí wọ́n lè wà ní ìtẹ̀ kan ṣoṣo. Àwọn ilé-iṣẹ́ ọkọ̀ èrò kan tún ní app tiwọn tí ó ń fi àkókò bọ́ọ̀sì hàn ní ìṣẹ́jú-ààyá yẹn."
          ],
          steps: ["Ṣí app maapu rẹ.", "Tẹ àdírẹ́sì kí o sì tẹ Directions.", "Yan ọkọ̀ èrò (bọ́ọ̀sì tàbí ọkọ̀ ojú-irin) tàbí ti ẹsẹ̀.", "Ṣètò àkókò ìdé rẹ láti rí ìgbà tí o máa kúrò nílé.", "Ṣètò láti dé ní ìṣẹ́jú 10 sí 15 ṣáájú."],
          words: [["Ọkọ̀ èrò (transit)", "ọkọ̀ ìrìnàjò gbogbogbò bí bọ́ọ̀sì àti ọkọ̀ ojú-irin."], ["Àkókò ìdé", "àkókò tí o nílò láti wà níbẹ̀."]],
          slides: [
            { title: "Maapu mọ ọ̀nà", bullets: ["Google Maps tàbí Apple Maps", "Bọ́ọ̀sì, ọkọ̀ ojú-irin, ẹsẹ̀ tàbí mọ́tò"] },
            { title: "Wá ọ̀nà", bullets: ["Tẹ àdírẹ́sì, tẹ Directions", "Yan ọkọ̀ èrò tàbí ti ẹsẹ̀", "Wo bọ́ọ̀sì wo àti ìgbà wo"] },
            { title: "Dé ní àkókò", bullets: ["Ṣètò àkókò ìdé rẹ", "Dé ní ìṣẹ́jú 10 sí 15 ṣáájú", "Fi àwọn àdírẹ́sì tí o máa ń lò pamọ́"] }
          ],
          tryIt: "Wá ọ̀nà ọkọ̀ èrò tàbí ti ẹsẹ̀ sí ibi gidi kan tí o nílò láti lọ, bí American Job Center (ibùdó ìrànlọ́wọ́ iṣẹ́), DMV (ọ́fíìsì ìwé ìwakọ̀ àti káàdì ìdánimọ̀) tàbí ilé-ìkàwé. Ṣètò àkókò ìdé kí o sì kọ ìgbà tí o gbọ́dọ̀ kúrò nílé sílẹ̀.",
          youCanNow: "wá ọ̀nà ọkọ̀ èrò àti ti ẹsẹ̀, kí o sì mọ ìgbà tí o máa kúrò nílé.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ṣíṣètò àkókò ìdé rẹ nínú app maapu ń fi hàn ọ́?", options: ["Ìgbà tí o nílò láti kúrò nílé", "Iye owó bọ́ọ̀sì", "Àwọn tí ó tún ń lọ", "Ojú ọjọ́ ọ̀la"], answer: 0, why: "Tí o bá ṣètò àkókò ìdé, app náà máa ṣírò ìgbà tí o nílò láti kúrò nílé." },
            { objective: "O2", q: "O nílò láti dé DMV pẹ̀lú bọ́ọ̀sì fún ìbẹ̀wò agogo 10 àárọ̀. Kí ni o máa ṣe?", options: ["Kúrò nílé ní agogo 10 àárọ̀", "Wá ọ̀nà ọkọ̀ èrò kí o sì ṣètò ìdé fún nǹkan bí agogo 9:45", "Yan ọ̀nà ti ẹsẹ̀ nìkan", "Béèrè lọ́wọ́ àjèjì ní ibùdókọ̀"], answer: 1, why: "Ọ̀nà ọkọ̀ èrò pẹ̀lú àkókò ìdé tó tètè ń ràn ọ́ lọ́wọ́ láti dé ní ìṣẹ́jú 10 sí 15 ṣáájú." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kíkà àti títúmọ̀ pẹ̀lú kámẹ́rà rẹ",
          minutes: 5,
          goal: "Lo kámẹ́rà fóònù rẹ láti kà, dà kọ tàbí túmọ̀ ọ̀rọ̀ tí a tẹ̀.",
          text: [
            "Kámẹ́rà fóònù rẹ lè ka ọ̀rọ̀ tí a tẹ̀. Pẹ̀lú Google Lens (nínú app Google àti lórí ọ̀pọ̀ fóònù Android) tàbí irinṣẹ́ ọ̀rọ̀ ti kámẹ́rà iPhone, o lè dojú rẹ̀ kọ ìwé ìpolówó, àmì tàbí fọ́ọ̀mù, kí o sì dà ọ̀rọ̀ náà kọ, wá a, tàbí túmọ̀ rẹ̀.",
            "Ṣí kámẹ́rà tàbí Google Lens kí o sì dojú rẹ̀ kọ àwọn ọ̀rọ̀ náà. Tẹ bọ́tìnnì ọ̀rọ̀ tàbí ọ̀rọ̀ tí ó tàn, lẹ́yìn náà yan Copy (dà kọ), Listen (gbọ́), Translate (túmọ̀) tàbí Search (wá). Èyí wúlò fún dída nọ́mbà fóònù kọ láti inú ìwé ìpolówó tàbí kíkà ìlànà ní èdè míì.",
            "Má ṣe fi ìwé tí ó ní nọ́mbà àdáni sínú irinṣẹ́ AI, bí káàdì Social Security rẹ (nọ́mbà ìdánimọ̀ ìjọba US) tàbí ìwé ilé-ẹjọ́. Lo àwọn irinṣẹ́ wọ̀nyí fún nǹkan gbogbogbò bí ìwé ìpolówó, àmì àti ìkéde iṣẹ́."
          ],
          steps: ["Ṣí kámẹ́rà tàbí Google Lens.", "Dojú rẹ̀ kọ àwọn ọ̀rọ̀ tí a tẹ̀.", "Tẹ bọ́tìnnì ọ̀rọ̀ tàbí àwọn ọ̀rọ̀ tí ó tàn.", "Yan Copy, Listen, Translate tàbí Search.", "Má ṣe ya ìwé àdáni."],
          words: [["Google Lens", "irinṣẹ́ ọ̀fẹ́ ti Google tí ó ń lo kámẹ́rà rẹ láti kà, túmọ̀ àti wá ohun tí ó rí."], ["Túmọ̀", "yí ọ̀rọ̀ padà láti èdè kan sí èdè míì."]],
          slides: [
            { title: "Kámẹ́rà lè kàwé", bullets: ["Google Lens tàbí kámẹ́rà iPhone", "Ìwé ìpolówó, àmì, ìkéde iṣẹ́"] },
            { title: "Ohun tí o lè ṣe", bullets: ["Dà nọ́mbà fóònù kọ", "Gbọ́ tí wọ́n ń ka ọ̀rọ̀ náà sókè", "Túmọ̀ tàbí wá a"] },
            { title: "Jẹ́ kí ó jẹ́ gbogbogbò", bullets: ["Kò sí káàdì Social Security", "Kò sí ìwé ilé-ẹjọ́ tàbí fọ́ọ̀mù àdáni"] }
          ],
          tryIt: "Dojú kámẹ́rà rẹ tàbí Google Lens kọ ìwé ìpolówó, àmì tàbí ìkéde iṣẹ́. Dà nọ́mbà fóònù tàbí àdírẹ́sì kan kọ láti inú rẹ̀ sínú àkọsílẹ̀ tàbí sínú àwọn olùbásọ̀rọ̀ rẹ.",
          youCanNow: "lo kámẹ́rà rẹ láti dà kọ, gbọ́ tàbí túmọ̀ ọ̀rọ̀ tí a tẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Kí ni irinṣẹ́ ọ̀rọ̀ ti kámẹ́rà fóònù rẹ lè ṣe pẹ̀lú ìwé ìpolówó iṣẹ́ tí a tẹ̀?", options: ["Béèrè iṣẹ́ náà fún ọ", "Tẹ ẹ̀dà tuntun jáde", "Pe agbanisíṣẹ́ fúnra rẹ̀", "Kà, dà kọ tàbí túmọ̀ ọ̀rọ̀ náà"], answer: 3, why: "Irinṣẹ́ ọ̀rọ̀ ti kámẹ́rà lè kà, dà kọ àti túmọ̀ ọ̀rọ̀ tí a tẹ̀." },
            { objective: "O3", q: "O fẹ́ ya ìwé tí ó ní nọ́mbà Social Security rẹ sínú irinṣẹ́ AI. Kí ni o máa ṣe?", options: ["Yà á kí AI lè ṣàlàyé rẹ̀", "Má ṣe yà á; pa nọ́mbà àdáni mọ́ kúrò nínú irinṣẹ́ AI", "Ya ìdajì rẹ̀ nìkan", "Fi í sórí ayélujára fún ìrànlọ́wọ́"], answer: 1, why: "Nọ́mbà àdáni bí nọ́mbà Social Security rẹ kò gbọ́dọ̀ wọ inú irinṣẹ́ AI láéláé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Fóònù rẹ bí olùrànlọ́wọ́",
        questions: [
          { objective: "O1", q: "Kí ni ọ̀nà tó dára jù láti má ṣe pàdánù ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́?", options: ["Kọ ọ́ sí ọwọ́ rẹ", "Retí pé o máa rántí", "Ṣe ìrántí kan ní ọjọ́ tó ṣáájú àti ọ̀kan fún ìgbà tí o máa kúrò nílé", "Ní kí àjèjì kan rán ọ létí"], answer: 2, why: "Ìrántí méjì ń bo ìmúrasílẹ̀ àti kíkúrò nílé ní àkókò." },
          { objective: "O2", q: "Nínú app maapu, àṣàyàn wo ló ń fi ọ̀nà bọ́ọ̀sì àti ọkọ̀ ojú-irin hàn?", options: ["Transit", "Satellite", "Traffic", "Settings"], answer: 0, why: "Transit ń fi ọkọ̀ èrò gbogbogbò hàn." },
          { objective: "O2", q: "Báwo ni o ṣe yẹ kí o ṣètò láti tètè dé ìpàdé tó?", options: ["Wákàtí kan lẹ́yìn àkókò", "Gẹ́lẹ́ ní àkókò", "Ìṣẹ́jú 5 lẹ́yìn àkókò", "Ìṣẹ́jú 10 sí 15 ṣáájú"], answer: 3, why: "Bọ́ọ̀sì lè pẹ́; títètè dé kò léwu tó." },
          { objective: "O3", q: "Kí ni Google Lens lè ṣe pẹ̀lú ìwé ìpolówó?", options: ["Tẹ owó jáde", "Dà kọ, kà sókè tàbí túmọ̀ ọ̀rọ̀ inú rẹ̀", "Pe ẹbí rẹ", "Fọwọ́ sí fọ́ọ̀mù fún ọ"], answer: 1, why: "Lens ń ka ọ̀rọ̀ tí kámẹ́rà rí." },
          { objective: "O3", q: "Èwo ni o KÒ gbọ́dọ̀ yà sínú irinṣẹ́ AI?", options: ["Ìwé ìpolówó iṣẹ́", "Káàdì Social Security rẹ", "Àmì ojú pópó", "Àkókò ìrìn bọ́ọ̀sì"], answer: 1, why: "Ìwé àdáni kò gbọ́dọ̀ wọ inú irinṣẹ́ AI." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe àwọn nǹkan parí",
      lessons: [
        {
          objectives: ["O4"],
          title: "Wíwá ìrànlọ́wọ́ àdúgbò",
          minutes: 5,
          goal: "Wá iṣẹ́ ìrànlọ́wọ́ àdúgbò fún ilé gbígbé, oúnjẹ, iṣẹ́ tàbí ọkọ̀.",
          text: [
            "Ìrànlọ́wọ́ wà, ṣùgbọ́n wíwá a lè ṣòro. 211 jẹ́ iṣẹ́ kan káàkiri United States (Amẹ́ríkà) tí ó ń so ọ́ pọ̀ mọ́ ìrànlọ́wọ́ àdúgbò fún ilé gbígbé, oúnjẹ, ọkọ̀, ìtọ́jú ìlera àti àwọn míì. Pe 211, tàbí wá 211 àdúgbò rẹ ní 211.org. Ìpè jẹ́ àṣírí, o sì lè má dárúkọ ara rẹ.",
            "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ láti múra sílẹ̀: \"Mo ṣẹ̀ṣẹ̀ padà sílé, mo sì ń gbé ní Columbus, Ohio. Irú àwọn iṣẹ́ ìrànlọ́wọ́ àdúgbò wo ló lè ràn mí lọ́wọ́ pẹ̀lú ilé gbígbé, oúnjẹ àti ìdánilẹ́kọ̀ọ́ iṣẹ́? Àwọn ìbéèrè wo ni mo yẹ kí n béèrè nígbà tí mo bá pe 211?\"",
            "AI lè dárúkọ àwọn ètò tí ó ti tì tàbí fún ọ ní nọ́mbà fóònù tí kò tọ́. Máa fìdí rẹ̀ múlẹ̀ nígbà gbogbo pẹ̀lú 211, ojú-òpó wẹ́ẹ̀bù ètò náà fúnra rẹ̀, tàbí case manager ìpadàbọ̀ rẹ kí o tó lọ."
          ],
          steps: ["Béèrè lọ́wọ́ AI irú ìrànlọ́wọ́ tí o máa wá àti ohun tí o máa béèrè.", "Pe 211 tàbí wá a ní 211.org.", "Kọ àwọn ètò, nọ́mbà àti àkókò iṣẹ́ wọn sílẹ̀.", "Fìdí rẹ̀ múlẹ̀ lórí ojú-òpó ìjọba tàbí lórí fóònù kí o tó lọ."],
          words: [["211", "nọ́mbà fóònù àti ojú-òpó wẹ́ẹ̀bù tí ó ń so ọ́ pọ̀ mọ́ ìrànlọ́wọ́ àdúgbò."], ["Case manager", "ẹni tí ó ń ràn ọ́ lọ́wọ́ láti ṣètò àti láti wá àwọn iṣẹ́ ìrànlọ́wọ́."]],
          slides: [
            { title: "Ìrànlọ́wọ́ wà", bullets: ["Ilé gbígbé, oúnjẹ, ọkọ̀, ìtọ́jú ìlera", "Pe 211 tàbí lọ sí 211.org", "Àṣírí ni; o lè má dárúkọ ara rẹ"] },
            { title: "Múra sílẹ̀ pẹ̀lú AI", bullets: ["Irú ìrànlọ́wọ́ tí o máa wá", "Àwọn ìbéèrè tí o máa béèrè"] },
            { title: "Fìdí rẹ̀ múlẹ̀ kí o tó lọ", bullets: ["AI lè dárúkọ ètò tí ó ti tì", "Ṣàyẹ̀wò pẹ̀lú 211 tàbí ojú-òpó ìjọba", "Béèrè lọ́wọ́ case manager rẹ"] }
          ],
          sources: [{ name: "211: About us", url: "https://www.211.org/about-us" }],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI irú àwọn iṣẹ́ ìrànlọ́wọ́ àdúgbò tí ó lè ràn ọ́ lọ́wọ́ báyìí àti ohun tí o máa béèrè nígbà tí o bá pè. Lẹ́yìn náà wá 211 àdúgbò rẹ ní 211.org kí o sì kọ ètò kan tí o máa kàn sí sílẹ̀.",
          youCanNow: "wá ìrànlọ́wọ́ àdúgbò, kí o sì fìdí rẹ̀ múlẹ̀ kí o tó lọ.",
          quickCheck: [
            { objective: "O4", q: "Kí ni 211 lè ràn ọ́ lọ́wọ́ láti rí?", options: ["Ìrànlọ́wọ́ ọlọ́pàá pàjáwìrì nìkan", "Àyè iṣẹ́ ní ilé-iṣẹ́ ńlá nìkan", "Ìrànlọ́wọ́ àdúgbò fún ilé gbígbé, oúnjẹ àti àwọn míì", "Àkọsílẹ̀ ẹ̀ṣẹ̀ rẹ"], answer: 2, why: "211 ń so àwọn ènìyàn pọ̀ mọ́ iṣẹ́ ìrànlọ́wọ́ àdúgbò bí ilé gbígbé àti oúnjẹ." },
            { objective: "O4", q: "Olùrànlọ́wọ́ AI fún ọ ní nọ́mbà fóònù ilé ìpínnúoúnjẹ (food bank). Kí ni o máa ṣe?", options: ["Fìdí nọ́mbà náà múlẹ̀ pẹ̀lú 211 tàbí ojú-òpó ìjọba", "Wakọ̀ lọ síbẹ̀ lẹ́sẹ̀kẹsẹ̀", "Pín in fún àwọn ọ̀rẹ́ láìṣàyẹ̀wò", "Béèrè lọ́wọ́ AI bóyá ó dá a lójú"], answer: 0, why: "AI lè ṣàṣìṣe, nítorí náà o máa fìdí ìsọfúnni múlẹ̀ pẹ̀lú 211 tàbí orísun ìjọba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kíkọ ọ̀rọ̀ ìránṣẹ́ ojoojúmọ́ pẹ̀lú AI",
          minutes: 5,
          goal: "Lo AI láti kọ ọ̀rọ̀ kúkúrú tó ní ọ̀wọ̀ fún ipò gidi kan.",
          text: [
            "Ọ̀pọ̀ ipò ojoojúmọ́ ló nílò ọ̀rọ̀ ìránṣẹ́: sísọ fún agbanisíṣẹ́ pé o máa pẹ́, bíbéèrè lọ́wọ́ onílé nípa ilé kan, dídúpẹ́ lọ́wọ́ ẹnìkan fún ìfọ̀rọ̀wánilẹ́nuwò, tàbí kíkàn sí ẹbí.",
            "Sọ fún AI ẹni tí ó wà fún, ohun tí o nílò láti sọ, àti bí ó ṣe yẹ kí ó dún: \"Kọ text kúkúrú tó ní ọ̀wọ̀ sí ẹni tó ń gba òṣìṣẹ́. Bọ́ọ̀sì mi ti pẹ́ ní ìṣẹ́jú 10 fún ìfọ̀rọ̀wánilẹ́nuwò mi ti agogo 9 àárọ̀. Ẹ jọ̀ọ́ ẹ má bínú, iṣẹ́ náà ṣì wù mí gan-an.\"",
            "Kà á sókè kí o sì yí ohunkóhun tí kò dún bí ìwọ padà. Jẹ́ kí ó kúrú, kí ó sì jẹ́ òótọ́. O kò nílò láti ṣàlàyé ìtàn rẹ àtẹ̀yìnwá nínú ọ̀rọ̀ ojoojúmọ́."
          ],
          steps: ["Sọ ẹni tí ó wà fún.", "Sọ ohun tí o nílò láti sọ.", "Sọ bí ó ṣe yẹ kí ó dún: ọ̀wọ̀, kúkúrú, ọ̀rẹ́.", "Kà á sókè kí o sì jẹ́ kí ó dún bí ìwọ."],
          words: [["Ọ̀wọ̀", "bíbọ̀wọ̀ fún ẹni tí o ń bá sọ̀rọ̀ àti sísọ̀rọ̀ jẹ́jẹ́."], ["Àkọ́pẹrẹ (draft)", "ẹ̀dà àkọ́kọ́ tí o lè yí padà."]],
          slides: [
            { title: "Ọ̀rọ̀ ìránṣẹ́ ojoojúmọ́", bullets: ["O ń pẹ́", "Bíbéèrè nípa ilé kan", "Dídúpẹ́ lọ́wọ́ ẹni tó fọ̀rọ̀ wá ọ lẹ́nu wò"] },
            { title: "Sọ nǹkan mẹ́ta fún AI", bullets: ["Ẹni tí ó wà fún", "Ohun tí o nílò láti sọ", "Bí ó ṣe yẹ kí ó dún"] },
            { title: "Jẹ́ kí ó jẹ́ tìrẹ", bullets: ["Kà á sókè", "Kúkúrú àti òótọ́", "O kò nílò láti ṣàlàyé ìtàn rẹ àtẹ̀yìnwá"] }
          ],
          tryIt: "Ní kí olùrànlọ́wọ́ AI kọ text kúkúrú tó ní ọ̀wọ̀ tí ó sọ fún ẹni tó fẹ́ fọ̀rọ̀ wá ọ lẹ́nu wò pé bọ́ọ̀sì rẹ ń pẹ́. Yí nǹkan kan padà kí ó lè dún bí ìwọ.",
          youCanNow: "kọ ọ̀rọ̀ ìránṣẹ́ ojoojúmọ́ tó yé, tó sì ní ọ̀wọ̀, pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O5", q: "Kí ló ń jẹ́ kí ọ̀rọ̀ ìránṣẹ́ ojoojúmọ́ dára?", options: ["Ó gùn, ó sì kún fún ìsọfúnni nípa ìtàn rẹ àtẹ̀yìnwá", "Ó kúrú, ó ní ọ̀wọ̀, ó sì jẹ́ òótọ́", "A kọ ọ́ ní lẹ́tà ńlá pátá", "A fi ránṣẹ́ láìkà á tẹ́lẹ̀"], answer: 1, why: "Ọ̀rọ̀ kúkúrú tó ní ọ̀wọ̀ tí ó sì jẹ́ òótọ́ rọrùn láti kà, ó sì fi ọ̀wọ̀ hàn." },
            { objective: "O5", q: "AI kọ text nípa pípẹ́ tí ó lo ọ̀rọ̀ tí o kò jẹ́ sọ láéláé. Kí ni o máa ṣe?", options: ["Fi ránṣẹ́ bẹ́ẹ̀", "Ní kí AI jẹ́ kí ó gùn sí i", "Pa á rẹ́ kí o má sì fi nǹkan kan ránṣẹ́", "Yí àwọn ọ̀rọ̀ náà padà kí ó dún bí ìwọ, lẹ́yìn náà fi ránṣẹ́"], answer: 3, why: "O máa ń ka àkọ́pẹrẹ AI, o sì máa ń yí wọn padà kí wọ́n lè dún bí ìwọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Àkọsílẹ̀ fún ìpàdé àti ìwé",
          minutes: 5,
          goal: "Ní kí AI ṣe àkọsílẹ̀ ohun tí o máa mú lọ, lẹ́yìn náà fìdí rẹ̀ múlẹ̀ lọ́dọ̀ ọ́fíìsì náà.",
          text: [
            "Dídé láìsí ìwé tí ó tọ́ lè túmọ̀ sí ìrìnàjò kejì. Ní kí AI ṣe àkọsílẹ̀: \"Mo ń lọ sí DMV ìpínlẹ̀ mi láti gba káàdì ìdánimọ̀ ìpínlẹ̀ (state ID). Àwọn ìwé wo ni àwọn ènìyàn sábà máa ń mú lọ? Ṣe àkọsílẹ̀ kúkúrú.\"",
            "Lẹ́yìn náà fìdí rẹ̀ múlẹ̀ lọ́dọ̀ ọ́fíìsì náà fúnra rẹ̀. Òfin yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀, ó sì ń yí padà, nítorí náà ojú-òpó ìjọba (tí ó sábà máa ń parí sí .gov) tàbí ìpè fóònù ni ọ̀rọ̀ ìkẹyìn. Ètò ìpadàbọ̀ rẹ tàbí case manager rẹ tún lè ràn ọ́ lọ́wọ́ láti gba ìwé bí ìwé-ẹ̀rí ìbí.",
            "Pa àkọsílẹ̀ náà mọ́ sínú àkọsílẹ̀ (notes) fóònù rẹ tàbí sórí ìwé. Má ṣe tẹ nọ́mbà ìdánimọ̀ rẹ gidi, nọ́mbà ẹjọ́ tàbí nọ́mbà Social Security sínú AI láéláé; àkọsílẹ̀ náà nílò orúkọ àwọn ìwé nìkan."
          ],
          steps: ["Béèrè lọ́wọ́ AI ohun tí wọ́n sábà máa ń béèrè.", "Béèrè fún àkọsílẹ̀ kúkúrú.", "Fìdí rẹ̀ múlẹ̀ lórí ojú-òpó ìjọba ọ́fíìsì náà tàbí lórí fóònù.", "Kó àwọn ìwé jọ kí o sì sàmì sí wọn bí o ṣe ń rí wọn.", "Má ṣe tẹ nọ́mbà rẹ gidi sínú AI láéláé."],
          words: [["Àkọsílẹ̀ àyẹ̀wò (checklist)", "àkọsílẹ̀ nǹkan tí o ń sàmì sí ní ọ̀kọ̀ọ̀kan."], ["State ID", "káàdì ìdánimọ̀ olóyè tí ó ní fọ́tò láti ìpínlẹ̀ rẹ, fún àwọn tí kò wakọ̀."]],
          slides: [
            { title: "Yẹra fún ìrìnàjò kejì", bullets: ["Ní kí AI ṣe àkọsílẹ̀", "\"Kí ni àwọn ènìyàn sábà máa ń mú lọ láti gba state ID?\""] },
            { title: "Fìdí rẹ̀ múlẹ̀ lọ́dọ̀ ọ́fíìsì", bullets: ["Òfin yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀", "Ojú-òpó ìjọba, tí ó sábà máa ń parí sí .gov, tàbí pè wọ́n", "Béèrè ìrànlọ́wọ́ lọ́wọ́ case manager rẹ"] },
            { title: "Pa nọ́mbà mọ́ ní àṣírí", bullets: ["Àkọsílẹ̀ náà nílò orúkọ ìwé nìkan", "Má ṣe tẹ nọ́mbà ìdánimọ̀ tàbí nọ́mbà ẹjọ́ sínú AI láéláé"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: yan ìpàdé gidi kan. Wá ọ̀nà ọkọ̀ èrò tàbí ti ẹsẹ̀, ṣe ìrántí fún ìgbà tí o máa kúrò nílé, ní kí AI ṣe àkọsílẹ̀ ohun tí o máa mú lọ (lẹ́yìn náà fìdí rẹ̀ múlẹ̀ lórí ojú-òpó ìjọba), kí AI sì ràn ọ́ lọ́wọ́ láti kọ text kúkúrú tí o lè fi ránṣẹ́ tí o bá ń pẹ́.",
          youCanNow: "lo àwọn irinṣẹ́ AI ojoojúmọ́ láti ṣètò, múra sílẹ̀ fún, àti dé ìpàdé ní àkókò.",
          quickCheck: [
            { objective: "O6", q: "Kí ni àkọsílẹ̀ ìwé yẹ kí ó ní?", options: ["Orúkọ àwọn ìwé tí o nílò", "Nọ́mbà ìdánimọ̀ àti Social Security rẹ", "Àwọn ọ̀rọ̀ aṣínà rẹ", "Àdírẹ́sì ilé ọ̀gá parole rẹ"], answer: 0, why: "Àkọsílẹ̀ nílò orúkọ ìwé, kì í ṣe nọ́mbà àdáni rẹ." },
            { objective: "O6", q: "Àkọsílẹ̀ AI fún ìbẹ̀wò state ID dà bí ó ti pé. Kí ni o máa ṣe tẹ̀lé e?", options: ["Gbà á gbọ́ kí o sì lọ", "Má ṣe mú nǹkan kan kún un", "Fìdí àkọsílẹ̀ náà múlẹ̀ lórí ojú-òpó ìjọba ọ́fíìsì náà tàbí lórí fóònù", "Béèrè lọ́wọ́ ọ̀rẹ́ kan ohun tí ó mú lọ ní ọdún púpọ̀ sẹ́yìn"], answer: 2, why: "Ọ́fíìsì náà ló ní ọ̀rọ̀ ìkẹyìn lórí ohun tí o máa mú lọ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe àwọn nǹkan parí",
        questions: [
          { objective: "O4", q: "Nọ́mbà wo ló ń so ọ́ pọ̀ mọ́ ìrànlọ́wọ́ àdúgbò fún ilé gbígbé, oúnjẹ àti àwọn míì?", options: ["611", "411", "311 níbi gbogbo", "211"], answer: 3, why: "211 ń so àwọn ènìyàn pọ̀ mọ́ iṣẹ́ ìrànlọ́wọ́ àdúgbò." },
          { objective: "O4", q: "AI fún ọ ní nọ́mbà fóònù ètò kan. Kí ni o máa ṣe?", options: ["Fìdí rẹ̀ múlẹ̀ pẹ̀lú 211 tàbí ojú-òpó ìjọba", "Gbà á gbọ́ pátápátá", "Fi í sórí ayélujára", "Fún un ní nọ́mbà ẹjọ́ rẹ"], answer: 0, why: "AI lè dárúkọ ètò tí ó ti tì tàbí nọ́mbà tí kò tọ́." },
          { objective: "O5", q: "Prompt wo ló máa mú text \"mo ń pẹ́\" tó dára wá?", options: ["\"pẹ́\"", "\"text\"", "\"Kọ text kúkúrú tó ní ọ̀wọ̀ sí ẹni tó ń gba òṣìṣẹ́. Bọ́ọ̀sì mi ti pẹ́ ní ìṣẹ́jú 10 fún ìfọ̀rọ̀wánilẹ́nuwò mi ti agogo 9 àárọ̀.\"", "\"bọ́ọ̀sì\""], answer: 2, why: "Ó sọ ẹni tí ó wà fún, ohun tí o fẹ́ sọ àti bí ó ṣe yẹ kí ó dún." },
          { objective: "O5", q: "Ṣé o nílò láti ṣàlàyé ìtàn rẹ àtẹ̀yìnwá nínú ọ̀rọ̀ ojoojúmọ́?", options: ["Nínú ímeèlì nìkan", "Bẹ́ẹ̀ ni, nígbà gbogbo", "Fún àwọn onílé nìkan", "Rárá; jẹ́ kí ó kúrú, kí ó sì jẹ́ òótọ́"], answer: 3, why: "Ọ̀rọ̀ ojoojúmọ́ nílò kókó ọ̀rọ̀ nìkan." },
          { objective: "O6", q: "Ta ló ní ọ̀rọ̀ ìkẹyìn lórí àwọn ìwé tí o máa mú lọ?", options: ["Ọ̀rẹ́ kan", "AI", "Ọ́fíìsì náà fúnra rẹ̀", "Ọ̀rọ̀ kan lórí ìkànnì àjọlò"], answer: 2, why: "Òfin yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀; ọ́fíìsì náà ló ń pinnu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Àwọn Irinṣẹ́ AI fún Ojoojúmọ́",
    questions: [
      { objective: "O1", q: "Siri àti Google Assistant jẹ́:", options: ["Ojú-òpó wẹ́ẹ̀bù iṣẹ́", "Olùrànlọ́wọ́ ohùn lórí fóònù", "Ilé-iṣẹ́ bọ́ọ̀sì", "Báńkì"], answer: 1, why: "Wọ́n ń ṣe iṣẹ́ kékeré nígbà tí o bá sọ̀rọ̀." },
      { objective: "O1", q: "Ìbéèrè ohùn wo ló ń ṣe ìrántí tó wúlò?", options: ["\"Rán mi létí ìfọ̀rọ̀wánilẹ́nuwò mi ọjọ́ Ìṣẹ́gun ní agogo 9 àárọ̀.\"", "\"Ìfọ̀rọ̀wánilẹ́nuwò.\"", "\"Ọjọ́ Ìṣẹ́gun.\"", "\"Ẹ kú àárọ̀.\""], answer: 0, why: "Ó sọ ohun náà, ọjọ́ àti àkókò." },
      { objective: "O1", q: "Fún ìpàdé pàtàkì, ṣe:", options: ["Ìrántí méjì: ní ọjọ́ tó ṣáájú àti nígbà tí o máa kúrò nílé", "Kò sí", "Ọ̀kan lẹ́yìn oṣù kan", "Aago ìjí mẹ́wàá láìsí ètò"], answer: 0, why: "Ìrántí méjì ń bo ìmúrasílẹ̀ àti kíkúrò nílé." },
      { objective: "O1", q: "Àkọlé ìrántí yẹ kí ó jẹ́:", options: ["Èyí tí ó kún fún nọ́mbà ìdánimọ̀", "Gbogbogbò, láìsí ìsọfúnni àdáni", "Nọ́mbà ẹjọ́ rẹ", "Ọ̀rọ̀ aṣínà rẹ"], answer: 1, why: "O kò nílò ìsọfúnni àdáni nínú ìrántí." },
      { objective: "O2", q: "Nínú app maapu, lẹ́yìn tí o bá tẹ àdírẹ́sì, o máa tẹ:", options: ["Camera", "Delete", "Directions", "Pín ọ̀rọ̀ aṣínà"], answer: 2, why: "Directions ń fi bí o ṣe máa dé ibẹ̀ hàn." },
      { objective: "O2", q: "\"Transit\" túmọ̀ sí:", options: ["Fífò nínú bàálù", "Rírìn ẹsẹ̀ nìkan", "Takisí nìkan", "Bọ́ọ̀sì àti ọkọ̀ ojú-irin"], answer: 3, why: "Transit ni ọkọ̀ èrò gbogbogbò." },
      { objective: "O2", q: "Ṣíṣètò àkókò ìdé rẹ nínú app maapu ń fi hàn:", options: ["Nọ́mbà ìdánimọ̀ rẹ", "Iye owó inú báńkì rẹ", "Ìgbà tí o nílò láti kúrò nílé", "Ojú ọjọ́ nìkan"], answer: 2, why: "Ó ń ṣírò padà sẹ́yìn láti àkókò ìdé rẹ." },
      { objective: "O2", q: "Fífi àwọn àdírẹ́sì tí o máa ń lò pamọ́ ń jẹ́ kí wọ́n:", options: ["Wà ní ìtẹ̀ kan ṣoṣo", "Di nọ́mbà àdáni", "Pòórá", "Gbówólórí"], answer: 0, why: "Ó rọrùn láti dé àwọn ibi tí o fi pamọ́." },
      { objective: "O3", q: "Google Lens lè:", options: ["Pe ọ̀gá parole rẹ", "Rọ́pò káàdì ìdánimọ̀ rẹ", "San owó ilé rẹ", "Kà, dà kọ àti túmọ̀ ọ̀rọ̀ tí a tẹ̀"], answer: 3, why: "Lens ń ka ohun tí kámẹ́rà rí." },
      { objective: "O3", q: "Ìlò tó dára fún irinṣẹ́ ọ̀rọ̀ ti kámẹ́rà ni:", options: ["Yíya káàdì Social Security rẹ sínú AI", "Dída nọ́mbà fóònù kọ láti inú ìwé ìpolówó iṣẹ́", "Yíya ìwé ilé-ẹjọ́ sínú AI", "Yíya fọ́tò káàdì báńkì rẹ fún AI"], answer: 1, why: "Ọ̀rọ̀ gbogbogbò nìkan; pa ìwé àdáni mọ́ kúrò." },
      { objective: "O4", q: "Ìpè 211:", options: ["Wọ́n ń gbà á sílẹ̀ fún gbogbo ènìyàn", "Jẹ́ àṣírí, o sì lè má dárúkọ ara rẹ", "Wà fún pàjáwìrì nìkan", "Wà fún ilé-iṣẹ́ òwò nìkan"], answer: 1, why: "Ìpè 211 jẹ́ àṣírí." },
      { objective: "O4", q: "AI lè ràn ọ́ lọ́wọ́ kí o tó pe 211 nípa:", options: ["Ṣíṣe ìlérí ibùsùn fún ọ", "Mímọ ìtàn ẹjọ́ rẹ", "Fífi orúkọ rẹ sílẹ̀ fúnra rẹ̀", "Dídábàá irú ìrànlọ́wọ́ tí o lè béèrè nípa rẹ̀"], answer: 3, why: "Ó ń ràn ọ́ lọ́wọ́ láti múra ìbéèrè sílẹ̀." },
      { objective: "O4", q: "Case manager jẹ́:", options: ["Ẹni tí ó ń ràn ọ́ lọ́wọ́ láti ṣètò àti láti wá iṣẹ́ ìrànlọ́wọ́", "App fóònù kan", "Awakọ̀ bọ́ọ̀sì", "Ojú-òpó wẹ́ẹ̀bù kan"], answer: 0, why: "Àwọn case manager ń ṣèrànwọ́ pẹ̀lú ètò ìpadàbọ̀." },
      { objective: "O5", q: "Nígbà tí AI bá kọ ọ̀rọ̀ fún ọ, o yẹ kí o:", options: ["Fi nọ́mbà Social Security rẹ kún un", "Fi ránṣẹ́ láìkà á", "Kà á sókè kí o sì jẹ́ kí ó dún bí ìwọ", "Jẹ́ kí ó gùn gan-an"], answer: 2, why: "Ọ̀rọ̀ rẹ yẹ kí ó dún bí ìwọ." },
      { objective: "O5", q: "Ọ̀rọ̀ ojoojúmọ́ tó dára jẹ́:", options: ["Èyí tí ó kún fún ìsọfúnni àdáni", "Èyí tí ó gùn, tí ó sì kún fún àwáwí", "Èyí tí kò ní ọ̀wọ̀", "Kúkúrú, ọ̀wọ̀ àti òótọ́"], answer: 3, why: "Kúkúrú àti òótọ́ ló dára jù." },
      { objective: "O5", q: "\"Àkọ́pẹrẹ\" (draft) jẹ́:", options: ["Káàdì bọ́ọ̀sì", "Ẹ̀dà ìkẹyìn", "Ẹ̀dà àkọ́kọ́ tí o lè yí padà", "Káàdì ìdánimọ̀"], answer: 2, why: "O máa ń tún àkọ́pẹrẹ ṣe kí o tó fi ránṣẹ́." },
      { objective: "O6", q: "Kí o tó lọ gba state ID, o yẹ kí o:", options: ["Gbẹ́kẹ̀ lé AI nìkan", "Fìdí àkọsílẹ̀ ìwé múlẹ̀ lórí ojú-òpó ìjọba tàbí lórí fóònù", "Má ṣe mú nǹkan kan lọ", "Béèrè lọ́wọ́ àjèjì"], answer: 1, why: "Òfin yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀." },
      { objective: "O6", q: "Àwọn ojú-òpó wẹ́ẹ̀bù ìjọba US sábà máa ń parí sí:", options: [".gov", ".win", ".gift", ".xyz"], answer: 0, why: "Àwọn ọ́fíìsì ìjọba ló ń lo .gov." },
      { objective: "O6", q: "Kí ni àkọsílẹ̀ ìwé nílò?", options: ["Orúkọ àwọn ìwé, kì í ṣe nọ́mbà rẹ", "Nọ́mbà ìdánimọ̀ rẹ gidi", "Nọ́mbà ẹjọ́ rẹ", "Nọ́mbà Social Security rẹ"], answer: 0, why: "Orúkọ àwọn ìwé ti tó." },
      { objective: "O6", q: "State ID jẹ́:", options: ["Tíkẹ́ẹ̀tì bọ́ọ̀sì", "Káàdì ìdánimọ̀ olóyè tí ó ní fọ́tò láti ìpínlẹ̀ rẹ", "Káàdì ilé-ìkàwé", "App fóònù kan"], answer: 1, why: "Ó jẹ́ káàdì ìdánimọ̀ olóyè tí ó ní fọ́tò fún àwọn tí kò wakọ̀ àti àwọn míì." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 3, 4, 6, 8, 10, 13, 16, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ọ̀nà ìrìnàjò", objective: "O2", notYet: "Kò sí ọ̀nà, tàbí kò mọ ìgbà tí yóò kúrò nílé.", meets: "Ọ̀nà ọkọ̀ èrò tàbí ti ẹsẹ̀ pẹ̀lú àkókò ìdé tí ó tètè, tí ó sì kọ àkókò ìkúrò nílé sílẹ̀.", exceeds: "Ó tún ní ọ̀nà míì, tàbí ó ti fi àdírẹ́sì pamọ́ fún ìtẹ̀ kan ṣoṣo." },
      { name: "Ìrántí láti kúrò nílé", objective: "O1", notYet: "Kò sí ìrántí, tàbí ìrántí tí ó ní ìsọfúnni àdáni nínú àkọlé.", meets: "Ìrántí fún ìgbà tí yóò kúrò nílé, pẹ̀lú àkọlé gbogbogbò.", exceeds: "Ó tún ṣe ìrántí ní ọjọ́ tó ṣáájú." },
      { name: "Àkọsílẹ̀ tí a fìdí rẹ̀ múlẹ̀", objective: "O6", notYet: "Kò sí àkọsílẹ̀, tàbí àkọsílẹ̀ tí ó ní nọ́mbà àdáni, tàbí kò fìdí rẹ̀ múlẹ̀.", meets: "Àkọsílẹ̀ orúkọ ìwé, tí a fìdí rẹ̀ múlẹ̀ lórí ojú-òpó ìjọba tàbí lórí fóònù.", exceeds: "Ó lè sọ ibi tí ó ti fìdí rẹ̀ múlẹ̀ àti ohun tí ó yàtọ̀ sí àkọsílẹ̀ AI." },
      { name: "Text \"mo ń pẹ́\"", objective: "O5", notYet: "Kò sí text, tàbí text tí ó gùn, tí kò ní ọ̀wọ̀ tàbí tí ó ní ìsọfúnni àdáni.", meets: "Text kúkúrú, tó ní ọ̀wọ̀, tí ó sì jẹ́ òótọ́, tí ó ṣetán láti fi ránṣẹ́.", exceeds: "Akẹ́kọ̀ọ́ yí àwọn ọ̀rọ̀ kan padà kí ó lè dún bí òun." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn dé ìpàdé ní àkókò pẹ̀lú àwọn irinṣẹ́ wọ̀nyí láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n kàn sí iṣẹ́ ìrànlọ́wọ́ àdúgbò tí wọ́n rí nípasẹ̀ 211 láàárín ọjọ́ 30",
      "Àwọn alábàáṣiṣẹ́ ìpadàbọ̀ sí àwùjọ ń ròyìn pé ìpàdé tí a pàdánù ti dín kù"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tí ó ní íńtánẹ́ẹ̀tì àti app maapu",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: Microsoft Copilot, ChatGPT tàbí Google Gemini",
      "Ìwé ìpolówó tàbí ìkéde iṣẹ́ tí a tẹ̀ láti fi kámẹ́rà ṣe àṣeṣe",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ní kí àwọn akẹ́kọ̀ọ́ mú ìpàdé gidi kan tí ó ń bọ̀ wá, kí iṣẹ́ ìkẹyìn lè wúlò lẹ́sẹ̀kẹsẹ̀.",
      "Má ṣe ní kí akẹ́kọ̀ọ́ tẹ tàbí ya nọ́mbà ìdánimọ̀, nọ́mbà ẹjọ́ tàbí nọ́mbà Social Security gidi láéláé; lo orúkọ ìwé nìkan.",
      "Ẹ jọ wo 211.org pọ̀ kí gbogbo ènìyàn lè rí 211 àdúgbò wọn.",
      "Rán àwọn akẹ́kọ̀ọ́ tí ó wà lábẹ́ parole tàbí probation létí láti tẹ̀lé òfin èyíkéyìí nípa lílo íńtánẹ́ẹ̀tì tàbí fóònù.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
