"use strict";

// Koach Learn course (Yoruba translation of athletes/athletes-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-tools-yo",
  lang: "yo",
  translationOf: "athletes-ai-tools",
  category: "Athletes",
  name: "Àwọn Irinṣẹ́ AI fún Àwọn Eléré Ìdárayá",
  skills: "Yíyan irinṣẹ́ AI tó tọ́ fún iṣẹ́ kan, Lílo olùrànlọ́wọ́ AI fún ètò, Ṣíṣe àwòrán pẹ̀lú Canva, Kíkọ àkọsílẹ̀ ìṣirò eré sínú Google Sheets, Ṣíṣàyẹ̀wò ààbò ìsọfúnni àti owó irinṣẹ́ kan",
  outcome: "yan irinṣẹ́ AI ọ̀fẹ́ mẹ́ta kí o sì lò wọ́n fún iṣẹ́ gidi eléré ìdárayá: olùṣètò, irinṣẹ́ àwòrán àti ìwé ìṣirò eré, kí o sì mọ̀ bóyá app tuntun kò léwu tí ó sì yẹ kí o lò ó kí o tó forúkọ sílẹ̀.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn eléré ìdárayá àti àwọn olùkọ́ eré (coach) tí wọ́n ń gbọ́ nípa àwọn app AI ní gbogbo ìgbà, tí wọ́n sì fẹ́ mọ àwọn tó wúlò gan-an, àti bí a ṣe ń lò wọ́n.",
    "O máa kó àpò irinṣẹ́ ọ̀fẹ́ kékeré kan jọ: olùrànlọ́wọ́ AI fún ètò àti kíkọ̀wé, irinṣẹ́ àwòrán fún àwọn àwòrán ìpolówó, àti ìwé ìṣirò (spreadsheet) fún títọ́jú àwọn nọ́mbà rẹ. O tún máa kọ́ àyẹ̀wò kíákíá fún app tuntun èyíkéyìí kí o tó fún un ní ìsọfúnni rẹ tàbí owó rẹ.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ ọwọ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ kan wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kó àpò irinṣẹ́ eléré ìdárayá rẹ jọ: lo olùrànlọ́wọ́ AI láti ṣètò ọ̀sẹ̀ tó ń bọ̀, ṣe àwòrán ọjọ́ ìdíje kan nínú Canva, kí o sì ṣètò Google Sheet kan tó ń tọ́jú ìṣirò eré kan ní ìgbà ìdánrawò márùn-ún. Lẹ́yìn náà, ṣe àyẹ̀wò app ìbéèrè márùn-ún lórí app eré ìdárayá tuntun kan, kí o sì kọ ọ́ sílẹ̀ bóyá o máa lò ó.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn eléré ìdárayá ní ilé-ìwé gíga (high school), yunifásítì àti ẹgbẹ́ eré (club), àti àwọn olùkọ́ eré tí ń bá wọn ṣiṣẹ́, tí wọ́n ń gbọ́ nípa àwọn app AI, tí wọ́n sì fẹ́ mọ àwọn tó wúlò gan-an.",
    startingPoint: "Wọ́n ń lo smartphone lójoojúmọ́ fún ọ̀rọ̀ ìránṣẹ́, ìkànnì àjọlò (social media) àti fídíò. Ọ̀pọ̀ ti gbìyànjú olùrànlọ́wọ́ AI lẹ́ẹ̀kan tàbí lẹ́ẹ̀mejì, ṣùgbọ́n díẹ̀ ni wọ́n ń lo irinṣẹ́ àwòrán, ìwé ìṣirò tàbí àyẹ̀wò ààbò ìsọfúnni ní ìmọ̀ọ́mọ̀.",
    gap: "Wọ́n ń ta ọ̀pọ̀ app tó ń ṣèlérí èsì fún àwọn eléré ìdárayá, wọ́n sì máa ń fi ìsọfúnni ara wọn tàbí owó sílẹ̀ láìṣàyẹ̀wò. Àpò irinṣẹ́ ọ̀fẹ́ kékeré tí a lò dáadáa ń dín àkókò kù fún ètò, ìpolówó àti títọ́jú nọ́mbà, àyẹ̀wò app kíákíá sì ń dáàbò bo ìsọfúnni wọn, owó wọn àti ẹ̀tọ́ wọn láti kópa nínú eré (eligibility).",
    constraints: [
      "Ọ̀rọ̀ tó rọrùn ní nǹkan bí ìpele kíkàwé kíláàsì 7",
      "Fóònù tàbí kọ̀mpútà tó ní íńtánẹ́ẹ̀tì; ẹ̀yà ọ̀fẹ́ àwọn irinṣẹ́ nìkan",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní ẹ̀kọ́ kúkúrú tó bá àkókò ìdánrawò àti kíláàsì mu",
      "Àwọn òfin ilé-ìwé, ẹgbẹ́ ìdíje (league) àti olùkọ́ eré lórí àmì ìdánimọ̀ (logo), ìyípadà ìdánrawò àti ìmọ̀ràn ìlera ló kọ́kọ́ ṣe pàtàkì",
      "Ìsọfúnni ara, ìlera àti ibi tí o wà jẹ́ àdáni, o sì gbọ́dọ̀ pín in nípa yíyàn rẹ nìkan"
    ],
    prerequisites: "Kò sí"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ àwọn iṣẹ́ tí eléré ìdárayá tàbí olùkọ́ eré sábà máa ń ṣe", action: "dá irú irinṣẹ́ tó bá iṣẹ́ kọ̀ọ̀kan mu mọ̀: olùrànlọ́wọ́ AI, irinṣẹ́ àwòrán, ìwé ìṣirò tàbí ẹ̀rọ ìtọpinpin (tracker)", standard: "kí o sì gba ó kéré tán 4 nínú iṣẹ́ 5 tọ̀nà" },
    { id: "O2", condition: "Pẹ̀lú olùrànlọ́wọ́ AI ọ̀fẹ́ àti ìṣètò àkókò rẹ gidi", action: "ṣe ètò ọ̀sẹ̀ kan sínú tábìlì kí o sì mú un dára sí i pẹ̀lú àwọn ìbéèrè àtẹ̀lé", standard: "tí gbogbo àkókò tí kò yí padà wà nínú rẹ̀, tí ìdánrawò tí olùkọ́ eré ṣètò kò sì yí padà" },
    { id: "O3", condition: "Pẹ̀lú àwòṣe (template) Canva ọ̀fẹ́", action: "ṣe àwòrán ọjọ́ ìdíje tó fi ta ni, ìgbà wo àti ibo hàn pẹ̀lú fọ́tò alágbára kan", standard: "tí a lè kà lórí fóònù láàárín ìṣẹ́jú-àáyá méjì, tí ó sì lo fọ́tò àti logo tí o ní àṣẹ láti lò nìkan" },
    { id: "O4", condition: "Pẹ̀lú Google Sheets", action: "ṣètò ìwé kan tó ń tọ́jú ìṣirò eré kan ní ọjọ́ kọ̀ọ̀kan kí o sì fi àwòrán àtẹ (chart) fi ìlọsíwájú rẹ̀ hàn", standard: "pẹ̀lú ó kéré tán ìgbà ìdánrawò mẹ́ta nínú rẹ̀, ìṣirò náà tí a wọ̀n lọ́nà kan náà nígbà gbogbo, tí o sì pín ìwé náà fún àwọn ènìyàn tí o yàn nìkan" },
    { id: "O5", condition: "Tí a bá fún ọ ní app eré ìdárayá tàbí app AI tuntun kan", action: "ṣàyẹ̀wò ẹni tó ṣe é, ìsọfúnni tó ń gbà, owó rẹ̀, bí ó ṣe bá ẹgbẹ́ rẹ mu àti àwọn ìlérí rẹ̀ pẹ̀lú àyẹ̀wò app ìbéèrè márùn-ún", standard: "kí o dáhùn gbogbo ìbéèrè márùn-ún kí o sì kọ ìpinnu tó yé sílẹ̀: lò ó, gbìyànjú rẹ̀ pẹ̀lú ìṣọ́ra, tàbí fi í sílẹ̀" },
    { id: "O6", condition: "Fún ọ̀sẹ̀ gidi kan", action: "ṣètò ìlànà ọ̀sẹ̀ kan tó ń lo olùṣètò rẹ, irinṣẹ́ àwòrán rẹ àti ìwé ìṣirò eré rẹ papọ̀", standard: "tí irinṣẹ́ kọ̀ọ̀kan ní ọjọ́ tàbí àkókò tirẹ̀, tí o sì pín ìsọfúnni ẹgbẹ́ fún àwọn òṣìṣẹ́ tó nílò rẹ̀ nìkan" }
  ],
  chapters: [
    {
      name: "Orí 1: Àpò irinṣẹ́ AI ọ̀fẹ́ rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣe irinṣẹ́ àti iṣẹ́ ní ìbámu",
          minutes: 4,
          goal: "Pín àwọn iṣẹ́ eléré ìdárayá sí irú irinṣẹ́ tó tọ́ fún wọn.",
          text: [
            "Ọgọ́rọ̀ọ̀rún app AI ló wà, ṣùgbọ́n ọ̀pọ̀ jù lọ bọ́ sí irú díẹ̀. Àwọn olùrànlọ́wọ́ AI (ChatGPT, Microsoft Copilot, Google Gemini) ń kọ̀wé, ń ṣàlàyé, wọ́n sì ń ṣètò. Àwọn irinṣẹ́ àwòrán (bíi Canva) ń ṣe àwòrán àti fídíò kúkúrú. Àwọn ìwé ìṣirò (Google Sheets, Microsoft Excel) ń tọ́jú àwọn nọ́mbà rẹ, wọ́n sì ń fi wọ́n hàn ní àwòrán àtẹ. Àwọn ẹ̀rọ ìtọpinpin ìlera ara àti app fídíò ẹgbẹ́ ń gba ìsọfúnni láti ara rẹ tàbí láti inú eré rẹ.",
            "Bẹ̀rẹ̀ pẹ̀lú iṣẹ́ náà, kì í ṣe app náà. \"Mo nílò ètò ọ̀sẹ̀ kan\" tọ́ka sí olùrànlọ́wọ́. \"Mo nílò ìpolówó ọjọ́ ìdíje\" tọ́ka sí irinṣẹ́ àwòrán. \"Mo fẹ́ mọ̀ bóyá ìyára eré sísá mi ń dára sí i\" tọ́ka sí ìwé ìṣirò.",
            "Ẹ̀yà ọ̀fẹ́ sábà máa ń tó láti bẹ̀rẹ̀. Kọ́ irinṣẹ́ kan nínú irú kọ̀ọ̀kan dáadáa kí o tó fi òmíràn kún un."
          ],
          words: [["Olùrànlọ́wọ́ AI", "ètò AI tí o ń bá sọ̀rọ̀ láti kọ̀wé, ṣàlàyé tàbí ṣètò."], ["Ìwé ìṣirò (spreadsheet)", "àtẹ ìlà àti ọ̀wọ̀n fún títọ́jú àwọn nọ́mbà àti fífi wọ́n hàn ní àwòrán àtẹ."]],
          slides: [
            { title: "Irú irinṣẹ́ mẹ́rin", bullets: ["Olùrànlọ́wọ́ AI: kọ̀wé, ṣàlàyé, ṣètò", "Irinṣẹ́ àwòrán: àwòrán àti fídíò kúkúrú", "Ìwé ìṣirò: tọ́jú nọ́mbà, fi wọ́n hàn ní àwòrán àtẹ", "Ẹ̀rọ ìtọpinpin àti app fídíò: gba ìsọfúnni"] },
            { title: "Bẹ̀rẹ̀ pẹ̀lú iṣẹ́ náà", bullets: ["Ètò ọ̀sẹ̀ -> olùrànlọ́wọ́", "Ìpolówó ọjọ́ ìdíje -> irinṣẹ́ àwòrán", "Ṣé ìyára mi ń dára sí i? -> ìwé ìṣirò"] },
            { title: "Jẹ́ kí ó rọrùn", bullets: ["Ẹ̀yà ọ̀fẹ́ tó láti bẹ̀rẹ̀", "Kọ́ irinṣẹ́ kan nínú irú kọ̀ọ̀kan dáadáa"] }
          ],
          tryIt: "Kọ iṣẹ́ márùn-ún tí o ń ṣe gẹ́gẹ́ bí eléré ìdárayá tàbí olùkọ́ eré ní ọ̀sẹ̀ kọ̀ọ̀kan sílẹ̀ (fún àpẹẹrẹ ṣètò ìdánrawò, fi nǹkan sórí ìkànnì àjọlò, tọ́jú ìṣirò eré kan). Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ irú irinṣẹ́ tó bá a mu.",
          youCanNow: "so iṣẹ́ eléré ìdárayá kan pọ̀ mọ́ irú irinṣẹ́ AI tó tọ́ fún un.",
          quickCheck: [
            { objective: "O1", q: "Irú irinṣẹ́ wo ló ń tọ́jú àwọn nọ́mbà rẹ, tí ó sì ń sọ wọ́n di àwòrán àtẹ?", options: ["Olùrànlọ́wọ́ AI", "Ìwé ìṣirò (spreadsheet)", "Irinṣẹ́ àwòrán", "Ẹ̀rọ ìtọpinpin ìlera ara"], answer: 1, why: "Àwọn ìwé ìṣirò bíi Google Sheets àti Excel ń tọ́jú nọ́mbà, wọ́n sì ń fi wọ́n hàn ní àwòrán àtẹ." },
            { objective: "O1", q: "Ọmọ ẹgbẹ́ rẹ kan fẹ́ gbìyànjú app tuntun márùn-ún ní ọ̀sẹ̀ yìí. Kí ni o máa dábàá?", options: ["Gba gbogbo márààrún lónìí", "San owó fún èyí tó wọ́n jù", "Bẹ̀rẹ̀ pẹ̀lú iṣẹ́ náà, lẹ́yìn náà kọ́ irinṣẹ́ ọ̀fẹ́ kan nínú irú yẹn dáadáa", "Yẹra fún gbogbo irinṣẹ́"], answer: 2, why: "Ẹ̀kọ́ náà sọ pé kí o bẹ̀rẹ̀ pẹ̀lú iṣẹ́ náà, kí o sì kọ́kọ́ kọ́ irinṣẹ́ kan nínú irú kọ̀ọ̀kan dáadáa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Olùrànlọ́wọ́ AI gẹ́gẹ́ bí olùṣètò rẹ",
          minutes: 5,
          goal: "Lo olùrànlọ́wọ́ AI láti sọ ìṣètò àkókò rẹ di ètò ọ̀sẹ̀ tó yé.",
          text: [
            "Olùrànlọ́wọ́ AI mọ̀ọ́ ṣe dáadáa nínú sísọ àkọsílẹ̀ tó rí wúruwùru di ètò. Fún un ní àkókò ìdánrawò rẹ, ìdíje, kíláàsì àti àkókò iṣẹ́ rẹ, kí o sì béèrè ètò ọ̀sẹ̀ kan nínú tábìlì.",
            "Sọ ọ́ ní kedere: \"Mo jẹ́ eléré volleyball ní yunifásítì. Ìdánrawò wà láti 2 sí 5 ìrọ̀lẹ́ láti Ọjọ́ Ajé sí Ọjọ́ Ẹtì, ìdíje ní Ọjọ́ Àbámẹ́ta. Kíláàsì wà láti 9 sí 12. Ṣe tábìlì ọ̀sẹ̀ kan pẹ̀lú àkókò ìkẹ́kọ̀ọ́, oúnjẹ àti oorun.\" Lẹ́yìn náà, mú un dára sí i pẹ̀lú ìbéèrè àtẹ̀lé bíi \"Fi ìṣẹ́jú 30 kún un fún wíwo fídíò eré ní Ọjọ́rú.\"",
            "Olùrànlọ́wọ́ ń ṣètò; olùkọ́ eré rẹ ló ń ṣètò ìdánrawò. Má ṣe ní kí ó yí ìdánrawò tí olùkọ́ eré rẹ kọ padà, kí o sì béèrè ohunkóhun nípa ìlera tàbí ìsinmi lọ́wọ́ olùtọ́jú eléré ìdárayá (athletic trainer) rẹ."
          ],
          steps: ["Kọ àwọn àkókò rẹ tí kò yí padà sílẹ̀: ìdánrawò, ìdíje, kíláàsì, iṣẹ́.", "Béèrè ètò ọ̀sẹ̀ kan nínú tábìlì.", "Béèrè ìyípadà kan lẹ́ẹ̀kan.", "Da ètò ìkẹyìn kọ sínú kàlẹ́ńdà tàbí ìwé àkọsílẹ̀ rẹ."],
          words: [["Ìbéèrè àtẹ̀lé (follow-up)", "ìbéèrè kejì tó ń yí ìdáhùn padà tàbí tó ń kọ́lé lé e lórí."]],
          slides: [
            { title: "Fún un ní àwọn àkókò rẹ tí kò yí padà", bullets: ["Ìdánrawò àti ìdíje", "Kíláàsì àti àkókò iṣẹ́", "Àwọn ọjọ́ ìrìn-àjò"] },
            { title: "Béèrè tábìlì", bullets: ["Àkókò ìkẹ́kọ̀ọ́, oúnjẹ, oorun", "Lẹ́yìn náà ìyípadà kan lẹ́ẹ̀kan"] },
            { title: "Ta ló ń pinnu kí ni", bullets: ["AI ń ṣètò ọ̀sẹ̀ rẹ", "Olùkọ́ eré ń ṣètò ìdánrawò", "Olùtọ́jú eléré ìdárayá fún ìlera àti ìsinmi"] }
          ],
          tryIt: "Tẹ àwọn àkókò rẹ gidi tí kò yí padà fún ọ̀sẹ̀ tó ń bọ̀ sínú olùrànlọ́wọ́ AI kan, kí o sì béèrè ètò ọ̀sẹ̀ kan nínú tábìlì. Béèrè àtúnṣe kan.",
          youCanNow: "sọ ìṣètò àkókò rẹ di ètò ọ̀sẹ̀ kan pẹ̀lú olùrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O2", q: "Kí ló ń jẹ́ kí ìbéèrè ètò sí olùrànlọ́wọ́ AI ṣiṣẹ́ dáadáa?", options: ["Sísọ eré rẹ àti àwọn àkókò rẹ tí kò yí padà ní kedere", "Lílo ọ̀rọ̀ kan ṣoṣo", "Bíbéèrè pé kí ó tún ìdánrawò olùkọ́ eré rẹ kọ", "Fífi àwọn kíláàsì rẹ sílẹ̀"], answer: 0, why: "Àlàyé kedere nípa ìṣètò àkókò rẹ ń fúnni ní ètò tó bá ọ̀sẹ̀ rẹ gidi mu." },
            { objective: "O2", q: "Ètò rẹ nílò ìṣẹ́jú 30 fún wíwo fídíò eré ní Ọjọ́rú. Kí ni o máa ṣe?", options: ["Bẹ̀rẹ̀ ìjíròrò tuntun láti ìbẹ̀rẹ̀", "Pa gbogbo ètò náà rẹ́", "Ní kí olùtọ́jú eléré ìdárayá rẹ kọ ọ́", "Béèrè ìyípadà kan yẹn lọ́wọ́ olùrànlọ́wọ́ gẹ́gẹ́ bí ìbéèrè àtẹ̀lé"], answer: 3, why: "Àwọn ìbéèrè àtẹ̀lé tó ń béèrè ìyípadà kan lẹ́ẹ̀kan ń mú ètò náà dára sí i." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe àwòrán ọjọ́ ìdíje pẹ̀lú Canva",
          minutes: 5,
          goal: "Ṣe àwòrán ọjọ́ ìdíje tó rọrùn pẹ̀lú àwòṣe ọ̀fẹ́.",
          text: [
            "Canva jẹ́ irinṣẹ́ àwòrán ọ̀fẹ́ lórí wẹ́ẹ̀bù àti gẹ́gẹ́ bí app. Ó ní àwọn àwòṣe tí a ti ṣe tán fún ìpolówó lórí ìkànnì àjọlò, ìwé ìkéde (flyer) àti story, ó sì ní àwọn ẹ̀yà AI tó lè dábàá ọ̀rọ̀ tàbí àwòrán.",
            "Àwòrán ọjọ́ ìdíje tó mọ́ ní nǹkan mẹ́rin: ta ló ń ṣeré, ìgbà wo, ibo, àti fọ́tò alágbára kan. Lo àwọ̀ ẹgbẹ́ rẹ, ọ̀rọ̀ ńlá tó ṣeé kà, kò sì sí ohun mìíràn.",
            "Lo fọ́tò tí o yà fúnra rẹ tàbí tí o ní àṣẹ láti lò nìkan. Ọ̀pọ̀ ilé-ìwé ní òfin nípa lílo logo àti orúkọ ilé-ìwé, nítorí náà béèrè lọ́wọ́ ẹ̀ka eré ìdárayá ilé-ìwé rẹ (athletic department) kí o tó fi àwòrán tó ní logo ìjọba ilé-ìwé síta."
          ],
          steps: ["Ṣí Canva kí o sì wá àwòṣe \"game day\".", "Yan àwòṣe tí ìwọ̀n rẹ̀ bá ìkànnì tí o ń lò mu.", "Yí ọ̀rọ̀ padà: alátakò, ọjọ́, àkókò, ibi.", "Fi fọ́tò tìrẹ àti àwọ̀ ẹgbẹ́ rẹ rọ́pò wọn.", "Gba á sílẹ̀ (download) kí o sì yẹ̀ ẹ́ wò lórí fóònù rẹ kí o tó fi í síta."],
          words: [["Àwòṣe (template)", "àwòrán tí a ti ṣe tán tí o ń yí padà láti sọ ọ́ di tìrẹ."], ["Àṣẹ (permission)", "\"bẹ́ẹ̀ ni\" láti ọ̀dọ̀ ẹni tó ni fọ́tò, logo tàbí orúkọ kan pé kí o lò ó."]],
          slides: [
            { title: "Canva ní ìlà kan", bullets: ["Irinṣẹ́ àwòrán ọ̀fẹ́ pẹ̀lú àwòṣe tí a ti ṣe tán", "Lórí wẹ́ẹ̀bù àti app fóònù"] },
            { title: "Àwòrán ọjọ́ ìdíje tó mọ́", bullets: ["Ta ni, ìgbà wo, ibo", "Fọ́tò alágbára kan", "Àwọ̀ ẹgbẹ́, ọ̀rọ̀ ńlá"] },
            { title: "Dúró nínú òfin", bullets: ["Lo fọ́tò tìrẹ tàbí èyí tí o ní àṣẹ láti lò", "Béèrè kí o tó lo logo ilé-ìwé"] }
          ],
          tryIt: "Ṣe àwòrán ọjọ́ ìdíje kan nínú Canva fún ìdíje tàbí ìdánrawò rẹ tó ń bọ̀. Yẹ̀ ẹ́ wò lórí fóònù rẹ: ṣé o lè ka àkókò àti ibi láàárín ìṣẹ́jú-àáyá méjì?",
          youCanNow: "ṣe àwòrán ọjọ́ ìdíje tó mọ́ láti inú àwòṣe kan, kí o sì lo fọ́tò àti logo lọ́nà tó tọ́.",
          quickCheck: [
            { objective: "O3", q: "Kí ni Canva?", options: ["Irinṣẹ́ àwòrán ọ̀fẹ́ pẹ̀lú àwòṣe fún ìpolówó àti ìwé ìkéde", "Ìwé ìṣirò eré", "Ẹ̀rọ ìtọpinpin ìlera ara", "Òfin ilé-ìwé nípa logo"], answer: 0, why: "Canva jẹ́ irinṣẹ́ àwòrán ọ̀fẹ́ lórí wẹ́ẹ̀bù àti gẹ́gẹ́ bí app, pẹ̀lú àwọn àwòṣe tí a ti ṣe tán." },
            { objective: "O3", q: "O ti parí àwòrán rẹ. Kí ni o yẹ kí o ṣe kí o tó fi í síta?", options: ["Fi ọ̀rọ̀ àti àwọ̀ míì kún un", "Fi í síta lẹ́sẹ̀kẹsẹ̀", "Gba á sílẹ̀ kí o sì yẹ̀ ẹ́ wò lórí fóònù rẹ", "Fi fọ́tò tí o rí lórí íńtánẹ́ẹ̀tì rọ́pò rẹ̀"], answer: 2, why: "Yíyẹ̀ ẹ́ wò lórí fóònù ń fi hàn bóyá a lè ka àkókò àti ibi kíákíá." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àpò irinṣẹ́ AI ọ̀fẹ́ rẹ",
        questions: [
          { objective: "O1", q: "O fẹ́ mọ̀ bóyá ìyára eré sísá rẹ ń dára sí i. Irú irinṣẹ́ wo ló bá a mu jù?", options: ["Irinṣẹ́ àwòrán", "App orin", "Ìwé ìṣirò (spreadsheet)", "Àlẹ̀mọ́ fọ́tò (filter)"], answer: 2, why: "Àwọn ìwé ìṣirò ń tọ́jú nọ́mbà, wọ́n sì ń fi wọ́n hàn ní àwòrán àtẹ bí àkókò ti ń lọ." },
          { objective: "O1", q: "Kí ni o yẹ kí o fi bẹ̀rẹ̀ nígbà tí o bá ń yan irinṣẹ́?", options: ["Iṣẹ́ tí o fẹ́ ṣe", "App tí ó gbajúmọ̀ jù", "App tí ó wọ́n jù", "Ohunkóhun tí àjèjì kan bá dábàá"], answer: 0, why: "Bẹ̀rẹ̀ pẹ̀lú iṣẹ́ náà, lẹ́yìn náà yan irú irinṣẹ́ tó bá a mu." },
          { objective: "O2", q: "Olùrànlọ́wọ́ AI dábàá pé kí o yí ìdánrawò tí olùkọ́ eré rẹ kọ padà. Kí ni o máa ṣe?", options: ["Tẹ̀lé AI", "Má lọ sí ìdánrawò", "Kọ nípa rẹ̀ sórí ìkànnì àjọlò", "Pa ìdánrawò olùkọ́ eré mọ́, kí o sì béèrè lọ́wọ́ olùkọ́ eré rẹ tí o bá ní ìbéèrè"], answer: 3, why: "AI ń ṣètò ọ̀sẹ̀ rẹ; olùkọ́ eré rẹ ló ń ṣètò ìdánrawò." },
          { objective: "O3", q: "Nǹkan mẹ́rin wo ló yẹ kí ó wà lórí àwòrán ọjọ́ ìdíje?", options: ["Ọ̀rọ̀ aṣínà rẹ, àdírẹ́sì, fóònù, email", "Ta ni, ìgbà wo, ibo, fọ́tò alágbára kan", "Fọ́tò mẹ́wàá àti irú lẹ́tà márùn-ún", "Logo nìkan"], answer: 1, why: "Àlàyé tó yé àti fọ́tò alágbára kan ń jẹ́ kí àwòrán ṣeé kà." },
          { objective: "O3", q: "O fẹ́ lo logo ilé-ìwé rẹ lórí ìpolówó kan. Kí ni o yẹ kí o kọ́kọ́ ṣe?", options: ["Dà á kọ láti ojú-òpó wẹ́ẹ̀bù", "Béèrè lọ́wọ́ ẹ̀ka eré ìdárayá ilé-ìwé rẹ", "Yí àwọ̀ rẹ̀ padà", "Lò ó kí o sì retí pé kò sí wàhálà"], answer: 1, why: "Ọ̀pọ̀ ilé-ìwé ní òfin nípa logo wọn, nítorí náà kọ́kọ́ béèrè." }
        ]
      }
    },
    {
      name: "Orí 2: Títọ́jú nọ́mbà, ṣíṣàyẹ̀wò app àti kíkó àpò irinṣẹ́ rẹ jọ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Títọ́jú ìṣirò eré kan nínú Google Sheets",
          minutes: 5,
          goal: "Ṣètò ìwé kan tó ń tọ́jú ìṣirò eré kan tí ó sì ń fi í hàn ní àwòrán àtẹ.",
          text: [
            "Yan ìṣirò eré kan tó ṣe pàtàkì sí ọ, tí o lè wọ̀n lọ́nà kan náà nígbà gbogbo: iye bọ́ọ̀lù free-throw tó wọlé nínú 20, àkókò eré sísá 40-yard, àkókò máìlì kan, tàbí bí serve rẹ ṣe péye tó.",
            "Nínú Google Sheets, ṣe ọ̀wọ̀n méjì: Ọjọ́ àti ìṣirò rẹ. Fi ìlà kan kún un lẹ́yìn ìdánrawò kọ̀ọ̀kan. Nígbà tí o bá ní ìlà díẹ̀, yan ọ̀wọ̀n méjèèjì kí o sì fi àwòrán àtẹ (chart) sí i láti rí ìlọsíwájú rẹ.",
            "O lè ní kí olùrànlọ́wọ́ AI ṣàlàyé àwọn ìgbésẹ̀ ìwé ìṣirò tàbí formula kan, bí o ṣe lè rí ìpíndọ́gba (average) rẹ. Pa ìwé náà mọ́ ní àdáni àyàfi tí o bá yàn láti pín in fún olùkọ́ eré rẹ."
          ],
          steps: ["Ṣí Google Sheets kí o sì bẹ̀rẹ̀ ìwé òfìfo kan.", "Tẹ \"Date\" sínú A1 àti ìṣirò rẹ sínú B1.", "Fi ìlà kan kún un lẹ́yìn ìdánrawò kọ̀ọ̀kan.", "Yan ọ̀wọ̀n méjèèjì kí o sì fi àwòrán àtẹ sí i.", "Pín in fún olùkọ́ eré rẹ nìkan tí o bá fẹ́ èsì."],
          words: [["Ìlọsíwájú (trend)", "ọ̀nà tí àwọn nọ́mbà rẹ ń lọ bí àkókò ti ń lọ: sókè, sísàlẹ̀ tàbí kò yí padà."], ["Formula", "ìtọ́ni kúkúrú nínú àpótí kan (cell) tó ń ṣe ìṣirò, bí ìpíndọ́gba."]],
          slides: [
            { title: "Yan ìṣirò eré kan", bullets: ["Tí a wọ̀n lọ́nà kan náà nígbà gbogbo", "Àpẹẹrẹ: free-throw tó wọlé nínú 20, àkókò máìlì kan"] },
            { title: "Ṣètò ìwé náà", bullets: ["Ọ̀wọ̀n A: Ọjọ́", "Ọ̀wọ̀n B: ìṣirò rẹ", "Ìlà kan fún ìdánrawò kọ̀ọ̀kan"] },
            { title: "Wo ìlọsíwájú rẹ", bullets: ["Yan ọ̀wọ̀n méjèèjì kí o sì fi àwòrán àtẹ sí i", "Ní kí AI ṣàlàyé formula tí ó bá rú ọ lójú"] }
          ],
          tryIt: "Ṣètò Google Sheet kan fún ìṣirò eré kan. Kọ ó kéré tán ìgbà ìdánrawò mẹ́ta tó ti kọjá (tàbí nọ́mbà ìdánrawò) sínú rẹ̀, kí o sì fi àwòrán àtẹ sí i.",
          youCanNow: "tọ́jú ìṣirò eré kan sínú ìwé ìṣirò, kí o sì fi í hàn ní àwòrán àtẹ láti rí ìlọsíwájú rẹ.",
          quickCheck: [
            { objective: "O4", q: "Ọ̀wọ̀n méjì wo ni ìwé ìṣirò eré rẹ fi bẹ̀rẹ̀?", options: ["Orúkọ àti ẹgbẹ́", "Alátakò àti àmì ayò", "Olùkọ́ eré àti ipò eré", "Ọjọ́ àti ìṣirò rẹ"], answer: 3, why: "Ọjọ́ nínú ọ̀wọ̀n A àti ìṣirò nínú ọ̀wọ̀n B ń jẹ́ kí o rí ìlọsíwájú bí àkókò ti ń lọ." },
            { objective: "O4", q: "O fẹ́ èsì lórí ìwé ìṣirò eré rẹ. Kí ni o máa ṣe?", options: ["Fi link rẹ̀ síta fún gbogbo ènìyàn", "Pín in fún olùkọ́ eré rẹ nìkan", "Fi í ránṣẹ́ sí ẹgbẹ́ kejì", "Tẹ̀ ẹ́ jáde fún ògiri yàrá ìpààrọ̀ aṣọ"], answer: 1, why: "Pa ìwé náà mọ́ ní àdáni, kí o sì pín in fún àwọn tí o yàn nìkan, bí olùkọ́ eré rẹ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Àyẹ̀wò app ìbéèrè márùn-ún",
          minutes: 5,
          goal: "Ṣàyẹ̀wò app eré ìdárayá tàbí app AI tuntun kí o tó fún un ní ìsọfúnni tàbí owó.",
          text: [
            "Àwọn app tuntun ń ṣèlérí láti jẹ́ kí o yára sí i, kí wọ́n gbà ọ́ sí ẹgbẹ́ gíga (recruited), tàbí kí àwọn tó ń tẹ̀lé ọ pọ̀ sí i. Kí o tó forúkọ sílẹ̀, ṣe àyẹ̀wò ìbéèrè márùn-ún kíákíá.",
            "1. Ta ló ṣe é, ṣé ó sì wà nínú ilé ìtajà app gidi? 2. Ìsọfúnni wo ló ń gbà, ṣé o sì lè pa á rẹ́? (Ka àkópọ̀ ìlànà ààbò ìsọfúnni rẹ̀.) 3. Èló ni lẹ́yìn ìgbà ìdánwò ọ̀fẹ́? 4. Ṣé olùkọ́ eré rẹ tàbí ilé-ìwé rẹ ti ń lo irú rẹ̀ tẹ́lẹ̀? 5. Ṣé ó ń ṣèlérí èsì tó dára jù láti jẹ́ òótọ́, bí ẹ̀bùn ìkẹ́kọ̀ọ́ (scholarship) tí ó dájú?",
            "Ìsọfúnni ara àti ìlera, bí ìlù ọkàn, oorun àti ibi tí o wà, jẹ́ àdáni. Pín in fún àwọn app tí o gbẹ́kẹ̀lé nìkan, kí o sì pa pípín ibi tí o wà tí o kò nílò."
          ],
          steps: ["Ṣàyẹ̀wò ẹni tó ṣe é, àti pé ó wà nínú ilé ìtajà gidi.", "Ka ìsọfúnni tí ó ń gbà àti bí o ṣe lè pa á rẹ́.", "Wá iye owó rẹ̀ lẹ́yìn ìgbà ìdánwò ọ̀fẹ́ èyíkéyìí.", "Béèrè lọ́wọ́ olùkọ́ eré rẹ ohun tí ẹgbẹ́ ti ń lò tẹ́lẹ̀.", "Fi àwọn èsì tí wọ́n ní ó dájú sílẹ̀."],
          words: [["Ìlànà ààbò ìsọfúnni (privacy policy)", "àlàyé app náà nípa ìsọfúnni tí ó ń gbà àti ohun tí ó ń fi í ṣe."], ["Ìgbà ìdánwò ọ̀fẹ́ (free trial)", "àkókò ọ̀fẹ́ kúkúrú kí app náà tó bẹ̀rẹ̀ sí í gba owó."]],
          slides: [
            { title: "Kí o tó forúkọ sílẹ̀", bullets: ["Ta ló ṣe é? Ṣé ó wà nínú ilé ìtajà gidi?", "Ìsọfúnni wo ló ń gbà?", "Èló ni lẹ́yìn ìgbà ìdánwò ọ̀fẹ́?"] },
            { title: "Ìbéèrè méjì sí i", bullets: ["Ṣé ẹgbẹ́ mi ti ń lo nǹkan báyìí tẹ́lẹ̀?", "Ṣé ó ń ṣèlérí jù?"] },
            { title: "Dáàbò bo ìsọfúnni ara rẹ", bullets: ["Ìlù ọkàn, oorun, ibi tí o wà jẹ́ àdáni", "Pa pípín ibi tí o wà tí o kò nílò"] }
          ],
          tryIt: "Yan app eré ìdárayá tàbí app AI kan tí o ti rí ìpolówó rẹ̀. Dáhùn ìbéèrè márùn-ún nípa rẹ̀ nínú ìwé àkọsílẹ̀ kan, kí o sì pinnu: lò ó, gbìyànjú rẹ̀ pẹ̀lú ìṣọ́ra, tàbí fi í sílẹ̀.",
          youCanNow: "ṣàyẹ̀wò ẹni tó ṣe app tuntun kan, ìsọfúnni tó ń gbà, owó rẹ̀ àti àwọn ìlérí rẹ̀ kí o tó forúkọ sílẹ̀.",
          quickCheck: [
            { objective: "O5", q: "Èwo nínú ìwọ̀nyí ni ọ̀kan lára ìbéèrè márùn-ún àyẹ̀wò app?", options: ["Àwọ̀ wo ni logo rẹ̀?", "Ìpolówó mélòó ló ń fi hàn?", "Èló ni lẹ́yìn ìgbà ìdánwò ọ̀fẹ́?", "Ṣé ó ní dark mode?"], answer: 2, why: "Owó lẹ́yìn ìgbà ìdánwò ni ìbéèrè 3 nínú àyẹ̀wò ìbéèrè márùn-ún." },
            { objective: "O5", q: "App ìdánrawò kan ń béèrè láti máa pín ibi tí o wà ní gbogbo ìgbà, ṣùgbọ́n kò nílò rẹ̀. Kí ni o máa ṣe?", options: ["Pa pípín ibi tí o wà", "Gbà á kí app náà lè yára", "Pín ìlù ọkàn rẹ pẹ̀lú", "Fún un ní ọ̀rọ̀ aṣínà rẹ"], answer: 0, why: "Ibi tí o wà jẹ́ ìsọfúnni àdáni, nítorí náà pa pípín tí o kò nílò." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kíkó àpò irinṣẹ́ rẹ papọ̀",
          minutes: 5,
          goal: "Lo irinṣẹ́ mẹ́tẹ̀ẹ̀ta papọ̀ fún ọ̀sẹ̀ gidi kan.",
          text: [
            "Àpò irinṣẹ́ rẹ ń ṣiṣẹ́ dáadáa jù gẹ́gẹ́ bí ìlànà ọ̀sẹ̀. Ọjọ́ Àìkú: lo olùrànlọ́wọ́ AI rẹ láti ṣètò ọ̀sẹ̀ náà. Kí ìdíje tó dé: ṣe àwòrán náà. Lẹ́yìn ìdánrawò kọ̀ọ̀kan: fi ìṣirò rẹ kún ìwé náà.",
            "Kọ àkọsílẹ̀ kúkúrú ti àwọn irinṣẹ́ rẹ àti ohun tí ọ̀kọ̀ọ̀kan wà fún, kí o má baà máa gbìyànjú app tuntun ní gbogbo ọ̀sẹ̀. Fi irinṣẹ́ tuntun kún un nìkan nígbà tí o bá ní iṣẹ́ tí àpò rẹ kò lè ṣe.",
            "Àwọn olùkọ́ eré lè lo àpò kan náà fún ẹgbẹ́: ètò ọ̀sẹ̀ fún àwọn òṣìṣẹ́, àwòrán kan fún ìdíje kọ̀ọ̀kan, àti ìwé àjọlò fún ìṣirò ẹgbẹ́. Pín ìwé ẹgbẹ́ fún àwọn òṣìṣẹ́ tó nílò rẹ̀ nìkan."
          ],
          steps: ["Kọ àkọsílẹ̀ irinṣẹ́ rẹ: olùṣètò, àwòrán, ìwé ìṣirò.", "Ọjọ́ Àìkú: ṣètò ọ̀sẹ̀ pẹ̀lú olùrànlọ́wọ́.", "Ọ̀sẹ̀ ìdíje: ṣe àwòrán kan.", "Lẹ́yìn ìdánrawò kọ̀ọ̀kan: fi ìṣirò rẹ kún un.", "Wo àwòrán àtẹ pẹ̀lú olùkọ́ eré rẹ ní ọ̀sẹ̀ díẹ̀ díẹ̀."],
          words: [["Ìlànà (routine)", "àwọn ìgbésẹ̀ tí o ń tún ṣe ní àkókò kan náà ní ọ̀sẹ̀ kọ̀ọ̀kan."], ["Àpò irinṣẹ́ (toolkit)", "àwọn irinṣẹ́ díẹ̀ tí o ń lò léraléra."]],
          slides: [
            { title: "Ìlànà ọ̀sẹ̀ rẹ", bullets: ["Ọjọ́ Àìkú: ṣètò ọ̀sẹ̀", "Ọ̀sẹ̀ ìdíje: àwòrán kan", "Lẹ́yìn ìdánrawò kọ̀ọ̀kan: fi ìṣirò rẹ kún un"] },
            { title: "Jẹ́ kí àpò náà kéré", bullets: ["Kọ ohun tí irinṣẹ́ kọ̀ọ̀kan wà fún", "Fi irinṣẹ́ kún un fún iṣẹ́ tuntun nìkan"] },
            { title: "Fún àwọn olùkọ́ eré", bullets: ["Ètò ọ̀sẹ̀ fún àwọn òṣìṣẹ́", "Àwòrán kan fún ìdíje kọ̀ọ̀kan", "Ìwé ìṣirò àjọlò fún àwọn òṣìṣẹ́ nìkan"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣètò ọ̀sẹ̀ tó ń bọ̀ pẹ̀lú olùrànlọ́wọ́ AI, ṣe àwòrán ọjọ́ ìdíje kan nínú Canva, ṣètò ìwé kan tó ń tọ́jú ìṣirò eré kan, kí o sì ṣe àyẹ̀wò ìbéèrè márùn-ún lórí app tuntun kan.",
          youCanNow: "lo àwọn irinṣẹ́ AI ọ̀fẹ́ díẹ̀ papọ̀ gẹ́gẹ́ bí ìlànà ọ̀sẹ̀.",
          quickCheck: [
            { objective: "O6", q: "Nínú ìlànà ọ̀sẹ̀, ìgbà wo ni o máa fi ìṣirò rẹ kún ìwé náà?", options: ["Lẹ́ẹ̀kan ní sáà eré kan", "Kí ìdíje tó bẹ̀rẹ̀ nìkan", "Nígbà tí o bá ṣe àṣeyọrí tuntun nìkan", "Lẹ́yìn ìdánrawò kọ̀ọ̀kan"], answer: 3, why: "Fífi ìṣirò kún un lẹ́yìn ìdánrawò kọ̀ọ̀kan ń jẹ́ kí ìlọsíwájú náà pé." },
            { objective: "O6", q: "O ní iṣẹ́ kan tí àpò irinṣẹ́ rẹ báyìí kò lè ṣe. Kí ni o máa ṣe?", options: ["Máa gbìyànjú app tuntun ní gbogbo ọ̀sẹ̀ bákan náà", "Fi irinṣẹ́ tuntun kan kún un fún iṣẹ́ yẹn kí o sì ṣe àyẹ̀wò app", "Fi iṣẹ́ náà sílẹ̀", "Pààrọ̀ gbogbo àpò rẹ"], answer: 1, why: "Fi irinṣẹ́ tuntun kún un nìkan nígbà tí o bá ní iṣẹ́ tí àpò rẹ kò lè ṣe, kí o sì kọ́kọ́ ṣàyẹ̀wò rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Títọ́jú nọ́mbà, ṣíṣàyẹ̀wò app àti kíkó àpò irinṣẹ́ rẹ jọ",
        questions: [
          { objective: "O4", q: "Kí ló ń jẹ́ kí ìṣirò eré dára fún títọ́jú?", options: ["Ọ̀nà tí a ń gbà wọ̀n ọ́n ń yí padà ní ọ̀sẹ̀ kọ̀ọ̀kan", "Olùkọ́ eré rẹ nìkan ló lè rí i", "Àròjinlẹ̀ lásán ni", "O lè wọ̀n ọ́n lọ́nà kan náà nígbà gbogbo"], answer: 3, why: "Wíwọ̀n lọ́nà kan náà ń jẹ́ kí ìlọsíwájú náà ní ìtumọ̀." },
          { objective: "O4", q: "Nínú ìwé rẹ, kí ló ń lọ sínú ọ̀wọ̀n A?", options: ["Ọjọ́", "Ọ̀rọ̀ aṣínà rẹ", "Orúkọ alátakò rẹ", "Àdírẹ́sì ilé rẹ"], answer: 0, why: "Ọjọ́ nínú ọ̀wọ̀n A àti ìṣirò nínú ọ̀wọ̀n B ń jẹ́ kí o fi ìlọsíwájú hàn ní àwòrán àtẹ." },
          { objective: "O5", q: "App kan ṣèlérí ẹ̀bùn ìkẹ́kọ̀ọ́ tí ó dájú tí o bá sanwó. Kí ni àyẹ̀wò app sọ?", options: ["Sanwó lẹ́sẹ̀kẹsẹ̀", "Pín ibi tí o wà", "Ó ń ṣèlérí jù, nítorí náà fi í sílẹ̀", "Fún un ní kóòdù ìwọlé rẹ"], answer: 2, why: "Èsì tí wọ́n ní ó dájú jẹ́ àmì ìkìlọ̀." },
          { objective: "O5", q: "Èwo ni ìsọfúnni ara àdáni?", options: ["Àwọ̀ aṣọ eré rẹ", "Orúkọ ẹgbẹ́ rẹ", "Ìdánrawò tí o fẹ́ràn jù", "Ìlù ọkàn rẹ àti oorun rẹ"], answer: 3, why: "Ìlù ọkàn, oorun àti ibi tí o wà jẹ́ ìsọfúnni àdáni." },
          { objective: "O6", q: "Ìgbà wo ni o yẹ kí o fi irinṣẹ́ tuntun kún àpò rẹ?", options: ["Ní gbogbo ọ̀sẹ̀", "Nígbà tí o bá ní iṣẹ́ tí àpò rẹ kò lè ṣe", "Nígbà tí ọ̀rẹ́ kan bá kọ nípa ọ̀kan", "Láéláé"], answer: 1, why: "Àpò kékeré tí o mọ̀ dáadáa sàn ju ọ̀pọ̀ app tí o kò fi bẹ́ẹ̀ lò lọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Àwọn Irinṣẹ́ AI fún Àwọn Eléré Ìdárayá",
    questions: [
      { objective: "O1", q: "Irú irinṣẹ́ wo ló ń kọ̀wé, ń ṣàlàyé, tí ó sì ń ṣètò?", options: ["Aago ìdíwọ̀n àkókò (stopwatch)", "Ìwé ìṣirò nìkan", "Olùrànlọ́wọ́ AI", "Kámẹ́rà"], answer: 2, why: "Àwọn olùrànlọ́wọ́ AI bíi ChatGPT, Copilot àti Gemini ń kọ̀wé, wọ́n sì ń ṣètò." },
      { objective: "O1", q: "Èwo ni irinṣẹ́ àwòrán ọ̀fẹ́ tó ní àwòṣe?", options: ["Canva", "Ẹ̀rọ ìṣirò (calculator)", "Pátákó àmì ayò", "Ìwé ọgbọ́n eré (playbook)"], answer: 0, why: "Canva ní àwọn àwòṣe ọ̀fẹ́ fún ìpolówó àti ìwé ìkéde." },
      { objective: "O1", q: "\"Mo nílò ìpolówó ọjọ́ ìdíje\" tọ́ka sí:", options: ["Irinṣẹ́ àwòrán", "Ìwé ìṣirò", "Ẹ̀rọ ìtọpinpin ìlera ara", "Ẹ̀rọ ìwọ̀n ìlù ọkàn"], answer: 0, why: "Àwòrán jẹ́ iṣẹ́ irinṣẹ́ àwòrán." },
      { objective: "O1", q: "Irinṣẹ́ mélòó nínú irú kọ̀ọ̀kan ni o yẹ kí o kọ́kọ́ kọ́?", options: ["Márùn-ún", "Bí ó ti pọ̀ tó", "Ọ̀kan, dáadáa", "Kò sí"], answer: 2, why: "Kíkọ́ ọ̀kan nínú irú kọ̀ọ̀kan dáadáa ni ọ̀nà tó yára jù láti bẹ̀rẹ̀." },
      { objective: "O2", q: "Kí ni o yẹ kí o fún olùrànlọ́wọ́ AI láti ṣe ètò ọ̀sẹ̀?", options: ["Ọ̀rọ̀ aṣínà rẹ", "Àwọn àkókò rẹ tí kò yí padà: ìdánrawò, ìdíje, kíláàsì", "Àkọsílẹ̀ ìlera rẹ", "Nọ́mbà báńkì rẹ"], answer: 1, why: "Àwọn àkókò tí kò yí padà ń jẹ́ kí ó kọ́ ètò náà yí ọ̀sẹ̀ rẹ ká." },
      { objective: "O2", q: "Ta ló ń ṣètò ìdánrawò rẹ?", options: ["AI", "Ìpolówó kan", "App èyíkéyìí", "Olùkọ́ eré rẹ"], answer: 3, why: "Olùrànlọ́wọ́ ń ṣètò; olùkọ́ eré ló ń ṣètò ìdánrawò." },
      { objective: "O2", q: "Ọ̀nà tó dára jù láti mú ètò AI dára sí i ni:", options: ["Gba èyí àkọ́kọ́", "Tẹ ọ̀rọ̀ aṣínà rẹ", "Ìyípadà kan lẹ́ẹ̀kan", "Bá a jà"], answer: 2, why: "Ìyípadà kan tó yé lẹ́ẹ̀kan ń jẹ́ kí ó dúró lójú ọ̀nà." },
      { objective: "O3", q: "Àwòrán ọjọ́ ìdíje tó ṣeé kà ní:", options: ["Ọ̀rọ̀ kékeré àti fọ́tò mẹ́wàá", "Emoji nìkan", "Nọ́mbà fóònù rẹ", "Ta ni, ìgbà wo, ibo àti fọ́tò alágbára kan"], answer: 3, why: "Àlàyé tó yé àti fọ́tò kan rọrùn láti kà kíákíá." },
      { objective: "O3", q: "Àwọn fọ́tò wo ni o lè lò nínú àwòrán rẹ?", options: ["Fọ́tò tìrẹ tàbí èyí tí o ní àṣẹ láti lò", "Fọ́tò èyíkéyìí lórí íńtánẹ́ẹ̀tì", "Fọ́tò láti ojú-ìwé ẹgbẹ́ alátakò", "Fọ́tò àwọn àjèjì"], answer: 0, why: "Lo fọ́tò tí o ni tàbí tí o ní àṣẹ láti lò." },
      { objective: "O3", q: "Kí o tó lo logo ilé-ìwé rẹ, o yẹ kí o:", options: ["Tún un yà", "Béèrè lọ́wọ́ ẹ̀ka eré ìdárayá ilé-ìwé rẹ", "Lò ó bákan náà", "Rà á lórí íńtánẹ́ẹ̀tì"], answer: 1, why: "Àwọn ilé-ìwé sábà máa ń ní òfin nípa logo." },
      { objective: "O4", q: "Ìṣirò eré wo ló rọrùn láti tọ́jú lọ́nà kan náà nígbà gbogbo?", options: ["Bí ìrìn-àjò bọ́ọ̀sì ṣe rí lára rẹ", "Ohun tí àwọn òǹwòran rò", "Free-throw tó wọlé nínú 20", "Ìṣesí alátakò rẹ"], answer: 2, why: "Ìdánwò tí kò yí padà bí iye tó wọlé nínú 20 jẹ́ déédéé." },
      { objective: "O4", q: "Báwo ni o ṣe lè rí ìlọsíwájú rẹ nínú Google Sheets?", options: ["Yan àwọn ọ̀wọ̀n kí o sì fi àwòrán àtẹ sí i", "Tẹ̀ ẹ́ jáde", "Pa àwọn ìlà àtijọ́ rẹ́", "Fi í ránṣẹ́ sí àjèjì nípa email"], answer: 0, why: "Àwòrán àtẹ ń fi ọ̀nà tí àwọn nọ́mbà rẹ ń lọ hàn." },
      { objective: "O4", q: "Formula fún ìpíndọ́gba rẹ rú ọ lójú. Ìgbésẹ̀ tó dára ni:", options: ["Dá títọ́jú nọ́mbà dúró", "Fojú dá nọ́mbà náà", "Pín ọ̀rọ̀ aṣínà rẹ", "Ní kí olùrànlọ́wọ́ AI ṣàlàyé formula náà"], answer: 3, why: "Àwọn olùrànlọ́wọ́ AI mọ̀ọ́ ṣàlàyé àwọn ìgbésẹ̀ ìwé ìṣirò dáadáa." },
      { objective: "O4", q: "Ta ló yẹ kí ó rí ìwé ìṣirò eré àdáni rẹ?", options: ["Gbogbo ènìyàn lórí íńtánẹ́ẹ̀tì", "Àwọn tí o yàn nìkan, bí olùkọ́ eré rẹ", "Àwọn ẹgbẹ́ alátakò", "Àwọn àjèjì"], answer: 1, why: "Pa á mọ́ ní àdáni, kí o sì pín in nípa yíyàn rẹ nìkan." },
      { objective: "O5", q: "Kí ni ìlànà ààbò ìsọfúnni (privacy policy) ń sọ fún ọ?", options: ["Àwọn àwọ̀ app náà", "Ìsọfúnni tí app náà ń gbà àti ohun tí ó ń fi í ṣe", "Ìdánrawò rẹ", "Àmì ayò ìdíje"], answer: 1, why: "Ó ń ṣàlàyé bí app náà ṣe ń bójú tó ìsọfúnni rẹ." },
      { objective: "O5", q: "Kí o tó bẹ̀rẹ̀ ìgbà ìdánwò ọ̀fẹ́, o yẹ kí o ṣàyẹ̀wò:", options: ["Logo app náà", "App alátakò rẹ", "Kò sí nǹkan kan", "Iye owó lẹ́yìn tí ìgbà ìdánwò bá parí"], answer: 3, why: "Ọ̀pọ̀ app ń bẹ̀rẹ̀ sí í gba owó lẹ́yìn ìgbà ìdánwò." },
      { objective: "O5", q: "Ìlérí app wo ni àmì ìkìlọ̀?", options: ["\"Ẹ̀bùn ìkẹ́kọ̀ọ́ tí ó dájú\"", "\"Tọ́jú eré sísá rẹ\"", "\"Ṣe àwòrán\"", "\"Àwòṣe ọ̀fẹ́\""], answer: 0, why: "Kò sí ẹni tó lè fi dájú pé o máa rí ẹ̀bùn ìkẹ́kọ̀ọ́." },
      { objective: "O5", q: "Pípín ibi tí o wà tí o kò nílò yẹ kí ó jẹ́:", options: ["Pípín fún gbogbo ènìyàn", "Fífi síta lórí íńtánẹ́ẹ̀tì", "Pípa", "Fífi sílẹ̀ ní títàn títí láé"], answer: 2, why: "Ibi tí o wà jẹ́ ìsọfúnni àdáni; pín in nígbà tí ó bá pọndandan nìkan." },
      { objective: "O6", q: "Nínú ìlànà ọ̀sẹ̀, ìgbà wo ni o máa ṣètò ọ̀sẹ̀ náà?", options: ["Lẹ́yìn sáà eré", "Láéláé", "Nígbà ìdíje", "Ọjọ́ Àìkú, pẹ̀lú olùrànlọ́wọ́ AI rẹ"], answer: 3, why: "Ṣíṣètò ní ìbẹ̀rẹ̀ ọ̀sẹ̀ ń pèsè ohun gbogbo yòókù sílẹ̀." },
      { objective: "O6", q: "Olùkọ́ eré kan pín ìwé ìṣirò ẹgbẹ́ kan. Ta ló yẹ kí ó lè wọlé sí i?", options: ["Ẹnikẹ́ni tó ní link lórí íńtánẹ́ẹ̀tì", "Àwọn òṣìṣẹ́ tó nílò rẹ̀ nìkan", "Àwọn olùkọ́ eré alátakò", "Àwọn olólùfẹ́ ẹgbẹ́ (fans)"], answer: 1, why: "Ìsọfúnni ẹgbẹ́ gbọ́dọ̀ lọ sọ́dọ̀ àwọn tó nílò rẹ̀ nìkan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      4,
      7,
      10,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ètò ọ̀sẹ̀",
        objective: "O2",
        notYet: "Àwọn àkókò tí kò yí padà kò sí nínú ètò náà, tàbí ó yí ìdánrawò olùkọ́ eré padà.",
        meets: "Tábìlì ọ̀sẹ̀ kan pẹ̀lú gbogbo àkókò tí kò yí padà, ìkẹ́kọ̀ọ́, oúnjẹ àti oorun, tí a mú dára sí i pẹ̀lú ó kéré tán ìbéèrè àtẹ̀lé kan.",
        exceeds: "A da ètò náà kọ sínú kàlẹ́ńdà, a sì kọ àwọn ìbéèrè nípa ìlera tàbí ìsinmi sílẹ̀ fún olùtọ́jú eléré ìdárayá."
      },
      {
        name: "Àwòrán ọjọ́ ìdíje",
        objective: "O3",
        notYet: "Ta ni, ìgbà wo tàbí ibo kò sí, ó ṣòro láti kà lórí fóònù, tàbí ó lo fọ́tò tàbí logo láìní àṣẹ.",
        meets: "Ó fi ta ni, ìgbà wo, ibo àti fọ́tò alágbára kan hàn, a lè kà á lórí fóònù láàárín ìṣẹ́jú-àáyá méjì, ó sì lo àwòrán tí a gbà láàyè nìkan.",
        exceeds: "Ó lo àwọ̀ ẹgbẹ́, ìwọ̀n rẹ̀ bá ìkànnì tó tọ́ mu, ẹ̀ka eré ìdárayá ilé-ìwé sì ti fọwọ́ sí lílo logo."
      },
      {
        name: "Ìwé ìṣirò eré",
        objective: "O4",
        notYet: "Kò sí ọjọ́, ìgbà ìdánrawò kò tó mẹ́ta, tàbí kò sí àwòrán àtẹ.",
        meets: "Ọ̀wọ̀n ọjọ́ àti ìṣirò, ó kéré tán ìgbà ìdánrawò mẹ́ta tí a wọ̀n lọ́nà kan náà, àti àwòrán àtẹ ìlọsíwájú.",
        exceeds: "Ìgbà ìdánrawò márùn-ún wà nínú rẹ̀, a fi ìpíndọ́gba kún un, a sì pín ìwé náà fún olùkọ́ eré nìkan fún èsì."
      },
      {
        name: "Àyẹ̀wò app",
        objective: "O5",
        notYet: "A kò dáhùn díẹ̀ lára ìbéèrè márùn-ún, tàbí kò sí ìpinnu.",
        meets: "A dáhùn gbogbo ìbéèrè márùn-ún, ìpinnu tó yé sì wà: lò ó, gbìyànjú rẹ̀ pẹ̀lú ìṣọ́ra, tàbí fi í sílẹ̀.",
        exceeds: "Ìpinnu náà fúnni ní ìdí láti inú ìlànà ààbò ìsọfúnni àti owó, a sì pa pípín ìsọfúnni tí kò pọndandan."
      },
      {
        name: "Ìlànà àpò irinṣẹ́",
        objective: "O6",
        notYet: "Kò sí àkọsílẹ̀ irinṣẹ́, tàbí kò sí àkókò tí a yàn fún irinṣẹ́ kọ̀ọ̀kan.",
        meets: "Àkọsílẹ̀ irinṣẹ́ tí a kọ sílẹ̀ pẹ̀lú ọjọ́ tàbí àkókò tí a yàn fún ètò, àwòrán àti ìṣirò eré.",
        exceeds: "Ìlànà náà ní àkókò déédéé láti wo àwòrán àtẹ pẹ̀lú olùkọ́ eré, àti òfin fún ìgbà tí a máa fi irinṣẹ́ tuntun kún un."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí iṣẹ́ ìkẹyìn tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì ń lo ètò ọ̀sẹ̀ àti ìwé ìṣirò eré ní ọjọ́ 30 lẹ́yìn náà (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn fi app kan sílẹ̀ tàbí pa á rẹ́, tàbí pa pípín ìsọfúnni, lẹ́yìn tí wọ́n ṣe àyẹ̀wò app",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gba ẹ̀kọ́ Athletes míì, bíi AI fún Ìdánrawò àti Ìṣesí Eré Ìdárayá"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini)",
      "Àkáǹtì Canva ọ̀fẹ́",
      "Àkáǹtì Google ọ̀fẹ́ fún Google Sheets",
      "Ìṣètò àkókò rẹ fún ọ̀sẹ̀ tó ń bọ̀ àti ìṣirò eré kan tí o lè wọ̀n",
      "Nǹkan bí ìṣẹ́jú 60, tí a pín sí ọjọ́ díẹ̀"
    ],
    facilitatorNotes: [
      "Ṣe é gẹ́gẹ́ bí ìpàdé ẹgbẹ́: kí gbogbo ènìyàn lo irinṣẹ́ ọ̀fẹ́ mẹ́ta kan náà kí àwọn eléré ìdárayá lè ran ara wọn lọ́wọ́.",
      "Rán àwọn eléré ìdárayá létí pé olùrànlọ́wọ́ ń ṣètò ọ̀sẹ̀ ṣùgbọ́n olùkọ́ eré ló ń ṣètò ìdánrawò; fi àwọn ìbéèrè nípa ìlera àti ìsinmi ránṣẹ́ sí olùtọ́jú eléré ìdárayá.",
      "Ṣàyẹ̀wò òfin ilé-ìwé tàbí ẹgbẹ́ ìdíje nípa logo àti ohun tí eléré ìdárayá ń fi síta kí ẹ̀kọ́ àwòrán tó bẹ̀rẹ̀.",
      "Má ṣe gba ìsọfúnni ara tàbí ìlera àwọn eléré ìdárayá fúnra rẹ; ìwé ìṣirò eré máa wà ní àdáni àyàfi tí eléré ìdárayá bá yàn láti pín in.",
      "Jẹ́ kí àwọn eléré ìdárayá tètè bẹ̀rẹ̀ ìwé ìṣirò eré kí wọ́n lè ní ìgbà ìdánrawò mẹ́ta sí márùn-ún nígbà iṣẹ́ ìkẹyìn."
    ]
  }
};
