"use strict";

// Koach Learn course (Yoruba translation of seniors/seniors-ai-smart-homes.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// No prices or exact menu names are given: they change often. Students are told to check the product's own app and help pages.

module.exports = {
  id: "seniors-ai-smart-homes-yo",
  lang: "yo",
  translationOf: "seniors-ai-smart-homes",
  category: "Seniors and Technology",
  name: "AI àti Ilé Ọlọ́gbọ́n",
  skills: "Mímọ àwọn ẹ̀rọ ilé ọlọ́gbọ́n, Fífún sípíkà ọlọ́gbọ́n ní àṣẹ ohùn tó yé, Ṣíṣètò ìlànà ojoojúmọ́ tó rọrùn, Yíyan ẹ̀rọ fún ààbò àti ìtùnú, Dídáàbò bo ìkọ̀kọ̀ rẹ nílé",
  outcome: "lo sípíkà ọlọ́gbọ́n tàbí olùrànlọ́wọ́ ohùn fóònù rẹ láti fún un ní àṣẹ tó yé ní ẹnu, ṣètò tàbí gbé ìlànà ojoojúmọ́ kan tó rọrùn kalẹ̀ (bí ìránnilétí àárọ̀ àti ojú ọjọ́), kí o sì dáàbò bo ìkọ̀kọ̀ rẹ nípa pípa máíkì (microphone) àti ṣíṣàyẹ̀wò àwọn ètò.",
  about: [
    "Ilé ọlọ́gbọ́n ni ilé tí ó ní àwọn ẹ̀rọ tí o lè darí pẹ̀lú ohùn rẹ tàbí láti orí fóònù rẹ: sípíkà tí ó ń dáhùn ìbéèrè, iná tí ó ń tan fúnra rẹ̀, plọ́ọ̀gù tí ó ń tan àti pa fìtílà, àti agogo ilẹ̀kùn tí ó ní kámẹ́rà. Fún àwọn àgbàlagbà, wọ̀nyí lè mú ayé ojoojúmọ́ rọrùn kí ó sì ní ààbò sí i, pàápàá fún ẹni tí ó ń dá gbé.",
    "O máa kọ́ ohun tí àwọn ẹ̀rọ tí ó wọ́pọ̀ jù ń ṣe, bí o ṣe lè bá sípíkà ọlọ́gbọ́n bí Amazon Echo (Alexa) tàbí Google Nest (Google Assistant) sọ̀rọ̀, bí o ṣe lè ṣètò ìlànà ojoojúmọ́ tó rọrùn, àti bí o ṣe lè dáàbò bo ilé rẹ àti ìkọ̀kọ̀ rẹ.",
    "O kò nílò láti ní ẹ̀rọ ọlọ́gbọ́n kankan kí o tó ṣe ẹ̀kọ́ yìí: o lè fi olùrànlọ́wọ́ tí ó ti wà lórí fóònù rẹ ṣe àṣeṣe ohùn. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣètò ìlànà ojoojúmọ́ kan fún ilé rẹ, bí \"Ẹ káàárọ̀\": sípíkà tàbí fóònù sọ ojú ọjọ́ fún ọ, ó rán ọ létí oògùn àárọ̀ rẹ, ó sì tan fìtílà kan. Kọ ọ́ sílẹ̀, gbé e kalẹ̀ dé ibi tí àwọn ẹ̀rọ rẹ bá gbà, kí o sì fi ohùn ṣe àṣeṣe rẹ̀. Lẹ́yìn náà wá bọ́tìnnì tàbí ètò tí ó ń pa máíkì kí o sì lò ó.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà, ọ̀pọ̀ nínú wọn ń dá gbé, tí wọ́n ní tàbí tí wọ́n ń ronú láti ní sípíkà ọlọ́gbọ́n, iná ọlọ́gbọ́n tàbí agogo ilẹ̀kùn oní fídíò (video doorbell), tí ó sábà máa ń jẹ́ ẹ̀bùn láti ọ̀dọ̀ ẹbí, tí wọ́n sì fẹ́ kí ó ràn wọ́n lọ́wọ́ pẹ̀lú ìránnilétí, ààbò àti pípe ènìyàn.",
    startingPoint: "Wọ́n ń lo fóònù fún ìpè àti text, wọ́n sì ní Wi-Fi nílé. Ọ̀pọ̀ ní sípíkà ọlọ́gbọ́n ṣùgbọ́n wọ́n ń lò ó fún ojú ọjọ́ tàbí orin nìkan, wọn kò sì dá a lójú bí ìlànà ojoojúmọ́ (routine) tàbí ètò ìkọ̀kọ̀ ṣe ń ṣiṣẹ́.",
    gap: "Àwọn ẹ̀rọ ilé ọlọ́gbọ́n lè ran àwọn àgbàlagbà lọ́wọ́ láti gbé láìléwu àti láìgbára lé ẹnìkan, pẹ̀lú ìránnilétí, iná tí ó ń dènà ìṣubú àti pípe ènìyàn pẹ̀lú ohùn, ṣùgbọ́n ọ̀pọ̀ wà láìlò tàbí wọ́n ń kó àníyàn bá àwọn akẹ́kọ̀ọ́ nípa ìkọ̀kọ̀. Àṣẹ tó yé, ìlànà ojoojúmọ́ kan tó rọrùn àti mímọ bí a ṣe ń pa máíkì àti ṣàyẹ̀wò ètò ń sọ wọ́n di ìrànlọ́wọ́ ojoojúmọ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn, gbólóhùn kúkúrú àti ìgbésẹ̀ ńlá tó rọrùn",
      "Ẹ̀rọ: Amazon Echo tàbí Google Nest, tàbí olùrànlọ́wọ́ ohùn fóònù; àwọn àkójọ (menu) inú app máa ń yí padà",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan, láìkánjú",
      "Àwọn ẹ̀yà pàjáwìrì yàtọ̀ láti ọjà kan sí òmíràn àti láti orílẹ̀-èdè kan sí òmíràn; kì í ṣe gbogbo sípíkà ló lè pe 911",
      "Ìkọ̀kọ̀: sípíkà àti kámẹ́rà máa ń gba nǹkan sílẹ̀; má ṣe pín kóòdù tí wọ́n fi text ránṣẹ́ sí ọ pẹ̀lú ẹni tí ó pè ọ́"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí kò ní sípíkà ọlọ́gbọ́n lè tẹ̀lé e pẹ̀lú olùrànlọ́wọ́ ohùn fóònù wọn."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn ẹ̀rọ ilé ọlọ́gbọ́n tí ó wọ́pọ̀", action: "sọ ohun tí sípíkà ọlọ́gbọ́n, plọ́ọ̀gù ọlọ́gbọ́n, gílóòbù ọlọ́gbọ́n àti agogo ilẹ̀kùn oní fídíò kọ̀ọ̀kan lè ṣe", standard: "kí o sì gba ó kéré tán 3 nínú 4 tọ̀nà" },
    { id: "O2", condition: "Pẹ̀lú sípíkà ọlọ́gbọ́n tàbí olùrànlọ́wọ́ ohùn fóònù rẹ", action: "fún un ní àṣẹ tó yé ní ẹnu tí ó bẹ̀rẹ̀ pẹ̀lú ọ̀rọ̀ ìjí (wake word)", standard: "tí ẹ̀rọ náà fi ṣe ohun tí o béèrè, kí o sì gbìyànjú ọ̀rọ̀ tó rọrùn jù tí ó bá pọndandan" },
    { id: "O3", condition: "Pẹ̀lú app Alexa tàbí app Google Home", action: "ṣètò kí o sì gbé ìlànà ojoojúmọ́ kalẹ̀ tí ó ń ṣe nǹkan púpọ̀ pẹ̀lú gbólóhùn kan", standard: "pẹ̀lú iṣẹ́ méjì tàbí mẹ́ta, tí o ti fi ohùn ṣe àṣeṣe rẹ̀" },
    { id: "O4", condition: "Tí o bá mọ àwọn ìṣòro ààbò tí o fẹ́ yanjú nílé", action: "yan àwọn ẹ̀yà ọlọ́gbọ́n tí ó bá wọn mu, kí o sì ṣàyẹ̀wò ohun tí ọjà náà lè ṣe àti ohun tí kò lè ṣe", standard: "kí o tó rà á tàbí gbẹ́kẹ̀ lé e" },
    { id: "O5", condition: "Nígbà tí o bá fẹ́ ìkọ̀kọ̀ nílé", action: "pa máíkì kí o sì ṣàyẹ̀wò ètò ìkọ̀kọ̀ àti ohùn tí a gbà sílẹ̀", standard: "láìpín kóòdù tí wọ́n fi text ránṣẹ́ tàbí ọ̀rọ̀ aṣínà pẹ̀lú ẹni tí ó pè ọ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìfaramọ̀ ilé ọlọ́gbọ́n",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí àwọn ẹ̀rọ ilé ọlọ́gbọ́n ń ṣe",
          minutes: 5,
          goal: "Dárúkọ àwọn ẹ̀rọ ilé ọlọ́gbọ́n tí ó wọ́pọ̀ àti ohun tí ọ̀kọ̀ọ̀kan lè ṣe fún ọ.",
          text: [
            "Àwọn ẹ̀rọ ilé ọlọ́gbọ́n máa ń sopọ̀ mọ́ Wi-Fi ilé rẹ kí o lè darí wọn pẹ̀lú ohùn rẹ tàbí pẹ̀lú app lórí fóònù rẹ.",
            "Àwọn tí ó wọ́pọ̀: sípíkà ọlọ́gbọ́n, bí Amazon Echo pẹ̀lú Alexa tàbí Google Nest pẹ̀lú Google Assistant, máa ń dáhùn ìbéèrè, kọ orin àti rédíò, ṣètò aago ìkàkókò àti ìránnilétí, ó sì ń pe ènìyàn. Plọ́ọ̀gù ọlọ́gbọ́n jẹ́ kí o tan tàbí pa fìtílà tàbí fáànù pẹ̀lú ohùn tàbí ní àkókò tí o ti ṣètò. Gílóòbù ọlọ́gbọ́n lè yí bí iná ṣe mọ́lẹ̀ tó padà. Agogo ilẹ̀kùn oní fídíò jẹ́ kí o rí ẹni tí ó wà lẹ́nu ọ̀nà lórí fóònù rẹ kí o tó ṣí i.",
            "Fún àwọn àgbàlagbà tí ó ń dá gbé, àwọn tí ó wúlò jù ni sípíkà fún ìránnilétí àti ìpè, iná ọlọ́gbọ́n kí o má baà wọ yàrá òkùnkùn láéláé, àti agogo ilẹ̀kùn oní fídíò fún ààbò."
          ],
          words: [["Ẹ̀rọ ọlọ́gbọ́n (smart device)", "ẹ̀rọ tí ó ń sopọ̀ mọ́ íńtánẹ́ẹ̀tì kí o lè darí rẹ̀ pẹ̀lú ohùn tàbí fóònù."], ["Wi-Fi", "íńtánẹ́ẹ̀tì aláìlókùn nínú ilé rẹ."], ["Plọ́ọ̀gù ọlọ́gbọ́n (smart plug)", "ohun tí a ń fi sínú sọ́kẹ́ẹ̀tì tí ó ń jẹ́ kí o tan tàbí pa fìtílà tàbí ẹ̀rọ ilé pẹ̀lú ohùn tàbí app."]],
          slides: [
            { title: "Àwọn ẹ̀rọ ọlọ́gbọ́n ń sopọ̀ mọ́ Wi-Fi", bullets: ["Darí wọn pẹ̀lú ohùn rẹ", "Tàbí pẹ̀lú app lórí fóònù rẹ"] },
            { title: "Àwọn ẹ̀rọ tí ó wọ́pọ̀", bullets: ["Sípíkà ọlọ́gbọ́n: ìbéèrè, orin, ìránnilétí, ìpè", "Plọ́ọ̀gù àti gílóòbù ọlọ́gbọ́n: tan iná, pa iná", "Agogo ilẹ̀kùn oní fídíò: rí ẹni tí ó wà lẹ́nu ọ̀nà"] },
            { title: "Ohun tí ó wúlò jù fún ẹni tí ó ń dá gbé", bullets: ["Ìránnilétí àti ìpè pẹ̀lú ohùn", "Kò sí yàrá òkùnkùn mọ́", "Rí àlejò kí o tó ṣí ilẹ̀kùn"] }
          ],
          tryIt: "Rìn yí ilé rẹ ká kí o sì kọ iṣẹ́ ojoojúmọ́ méjì sílẹ̀ tí ẹ̀rọ ọlọ́gbọ́n lè mú rọrùn, bí títan fìtílà tí ó ṣòro láti dé tàbí rírí ẹni tí ó wà lẹ́nu ọ̀nà.",
          youCanNow: "dárúkọ àwọn ẹ̀rọ ilé ọlọ́gbọ́n tí ó wọ́pọ̀ àti bí wọ́n ṣe lè ràn ọ́ lọ́wọ́.",
          quickCheck: [
            { objective: "O1", q: "Kí ni plọ́ọ̀gù ọlọ́gbọ́n ń ṣe?", options: ["Ó ń gba agbára fóònù rẹ kíákíá", "Ó ń jẹ́ kí o tan tàbí pa fìtílà tàbí fáànù pẹ̀lú ohùn tàbí ní àkókò tí o ṣètò", "Ó ń gba fídíò sílẹ̀", "Ó ń pe ènìyàn lórí fóònù"], answer: 1, why: "Plọ́ọ̀gù ọlọ́gbọ́n ń darí ohunkóhun tí a bá so mọ́ ọn, pẹ̀lú ohùn tàbí àkókò tí a ṣètò." },
            { objective: "O1", q: "O ń dá gbé, o sì ń ṣàníyàn nípa ẹni tí ó ń kan ilẹ̀kùn ní alẹ́. Ẹ̀rọ wo ló máa ràn ọ́ lọ́wọ́ jù?", options: ["Gílóòbù ọlọ́gbọ́n", "Plọ́ọ̀gù ọlọ́gbọ́n", "Agogo ilẹ̀kùn oní fídíò", "Sípíkà orin"], answer: 2, why: "Agogo ilẹ̀kùn oní fídíò jẹ́ kí o rí ẹni tí ó wà lẹ́nu ọ̀nà lórí fóònù rẹ kí o tó ṣí i." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bíbá sípíkà ọlọ́gbọ́n sọ̀rọ̀",
          minutes: 5,
          goal: "Fún sípíkà ọlọ́gbọ́n tàbí olùrànlọ́wọ́ fóònù rẹ ní àṣẹ tó yé ní ẹnu.",
          text: [
            "O máa ń jí sípíkà ọlọ́gbọ́n pẹ̀lú ọ̀rọ̀ ìjí rẹ̀: \"Alexa\" fún Amazon Echo, tàbí \"Hey Google\" fún Google Nest. Iná kan máa fi hàn pé ó ń gbọ́ ọ. Olùrànlọ́wọ́ ohùn fóònù rẹ ń ṣiṣẹ́ bákan náà pẹ̀lú \"Hey Siri\" tàbí \"Hey Google\".",
            "Sọ̀rọ̀ ketekete, ní ìwọ̀n ìyára tó wọ́pọ̀, kí o sì sọ ohun tí o fẹ́ gan-an: \"Alexa, báwo ni ojú ọjọ́ ṣe rí lónìí?\" \"Hey Google, ṣètò aago ìkàkókò fún ìṣẹ́jú 15.\" \"Alexa, kọ rédíò orin kíláàsíkà.\" \"Hey Google, pe Margaret.\"",
            "Tí kò bá yé e, tún un sọ pẹ̀lú ọ̀rọ̀ tó rọrùn jù. Àwọn sípíkà tuntun ń lo AI láti lóye ìbéèrè tí a sọ bí ọ̀rọ̀ ojoojúmọ́, ṣùgbọ́n àṣẹ kúkúrú tó yé ṣì ń ṣiṣẹ́ jù."
          ],
          steps: ["Sọ ọ̀rọ̀ ìjí: \"Alexa\" tàbí \"Hey Google\".", "Dúró de iná náà.", "Sọ ohun tí o fẹ́ gan-an, ketekete.", "Tí kò bá yé e, tún gbìyànjú pẹ̀lú ọ̀rọ̀ tó rọrùn jù."],
          words: [["Ọ̀rọ̀ ìjí (wake word)", "ọ̀rọ̀ tí ó ń sọ fún sípíkà ọlọ́gbọ́n pé kí ó bẹ̀rẹ̀ sí í gbọ́, bí \"Alexa\"."], ["Àṣẹ (command)", "ìtọ́ni kúkúrú tí a sọ ní ẹnu, bí \"ṣètò aago ìkàkókò fún ìṣẹ́jú 15\"."]],
          slides: [
            { title: "Jí i", bullets: ["\"Alexa\" fún Amazon Echo", "\"Hey Google\" fún Google Nest", "Iná kan fi hàn pé ó ń gbọ́"] },
            { title: "Àṣẹ tó yé", bullets: ["\"Báwo ni ojú ọjọ́ ṣe rí lónìí?\"", "\"Ṣètò aago ìkàkókò fún ìṣẹ́jú 15.\"", "\"Pe Margaret.\""] },
            { title: "Kò yé e?", bullets: ["Tún un sọ pẹ̀lú ọ̀rọ̀ tó rọrùn jù", "Àṣẹ kúkúrú ló ń ṣiṣẹ́ jù"] }
          ],
          tryIt: "Pẹ̀lú sípíkà ọlọ́gbọ́n tàbí olùrànlọ́wọ́ fóònù rẹ, fún un ní àṣẹ mẹ́ta: béèrè ojú ọjọ́ òní, ṣètò aago ìkàkókò ìṣẹ́jú 5, kí o sì béèrè ìránnilétí fún ọ̀la ní agogo 9 àárọ̀.",
          youCanNow: "fún sípíkà ọlọ́gbọ́n tàbí olùrànlọ́wọ́ ohùn ní àṣẹ tó yé ní ẹnu.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ọ̀rọ̀ ìjí fún Amazon Echo?", options: ["\"Alexa\"", "\"Hello\"", "\"Hey Siri\"", "\"Start\""], answer: 0, why: "Amazon Echo ń gbọ́ \"Alexa\"; Google Nest ń gbọ́ \"Hey Google\"." },
            { objective: "O2", q: "O béèrè ìbéèrè gígùn, sípíkà náà sì ṣì í gbọ́. Kí ni o máa ṣe?", options: ["Yọ ọ́ kúrò lára iná", "Pariwo sí i", "Má ṣe lò ó mọ́", "Tún un sọ pẹ̀lú ọ̀rọ̀ tó kúrú tó sì rọrùn jù"], answer: 3, why: "Àṣẹ kúkúrú tó yé ṣì ń ṣiṣẹ́ jù; tún gbìyànjú pẹ̀lú ọ̀rọ̀ tó rọrùn jù." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣètò ìlànà ojoojúmọ́ tó rọrùn",
          minutes: 6,
          goal: "Ṣètò ìlànà tí ó ń ṣe nǹkan púpọ̀ pẹ̀lú gbólóhùn kan.",
          text: [
            "Ìlànà ojoojúmọ́ (routine) ń jẹ́ kí gbólóhùn kan ṣe nǹkan púpọ̀. Fún àpẹẹrẹ, sísọ \"Ẹ káàárọ̀\" lè tan fìtílà kan, sọ ojú ọjọ́ fún ọ, kí ó sì rán ọ létí láti lo oògùn rẹ.",
            "A máa ń gbé ìlànà kalẹ̀ nínú app ẹ̀rọ náà lórí fóònù: app Alexa fún Echo, tàbí app Google Home fún Nest. Wá apá tí wọ́n pè ní Routines, tẹ ẹ́ láti fi tuntun kún un, yan gbólóhùn tí ó máa bẹ̀rẹ̀ rẹ̀, lẹ́yìn náà fi àwọn iṣẹ́ kún un. Àwọn àkójọ (menu) máa ń yí padà láti ìgbà dé ìgbà, nítorí náà tí o kò bá rí i, wo àwọn ojú-ewé ìrànlọ́wọ́ app náà tàbí béèrè lọ́wọ́ ẹnìkan nínú ẹbí rẹ.",
            "Bẹ̀rẹ̀ pẹ̀lú ìlànà kan tó rọrùn. O lè ní kí olùrànlọ́wọ́ AI ràn ọ́ lọ́wọ́ láti ṣètò rẹ̀: \"Ràn mí lọ́wọ́ láti ṣètò ìlànà àárọ̀ fún sípíkà ọlọ́gbọ́n mi. Mo fẹ́ ojú ọjọ́, ìránnilétí oògùn, kí fìtílà mi sì tan.\""
          ],
          steps: ["Kọ gbólóhùn náà àti àwọn iṣẹ́ sórí ìwé.", "Ṣí app Alexa tàbí app Google Home.", "Wá Routines kí o sì fi tuntun kún un.", "Yan gbólóhùn tí ó máa bẹ̀rẹ̀ rẹ̀.", "Fi iṣẹ́ kọ̀ọ̀kan kún un, fi pamọ́ (save), kí o sì fi ohùn gbìyànjú rẹ̀."],
          words: [["Ìlànà ojoojúmọ́ (routine)", "gbólóhùn kan tàbí àkókò kan tí ó ń mú kí ẹ̀rọ ṣe nǹkan púpọ̀ tẹ̀léra."], ["App alábàáṣiṣẹ́ (companion app)", "app fóònù tí a fi ń gbé ẹ̀rọ ọlọ́gbọ́n kalẹ̀ tí a sì fi ń darí rẹ̀."]],
          slides: [
            { title: "Gbólóhùn kan, iṣẹ́ púpọ̀", bullets: ["\"Ẹ káàárọ̀\" lè...", "Tan fìtílà kan", "Sọ ojú ọjọ́, kí ó sì rán ọ létí oògùn"] },
            { title: "Ibi tí o ti máa gbé e kalẹ̀", bullets: ["App Alexa tàbí app Google Home", "Wá Routines, fi tuntun kún un", "Yan gbólóhùn, fi iṣẹ́ kún un, fi pamọ́"] },
            { title: "Bẹ̀rẹ̀ pẹ̀lú èyí tó rọrùn", bullets: ["Kọ́kọ́ ṣètò rẹ̀ sórí ìwé", "Ní kí AI ràn ọ́ lọ́wọ́ láti ṣètò", "Béèrè lọ́wọ́ ẹbí tí àkójọ kan bá ṣòro láti rí"] }
          ],
          tryIt: "Kọ ìlànà \"Ẹ káàárọ̀\" tàbí \"Ó dàárọ̀\" sílẹ̀, pẹ̀lú gbólóhùn kan àti iṣẹ́ méjì tàbí mẹ́ta. Ní kí olùrànlọ́wọ́ AI ṣàyẹ̀wò ètò rẹ kí ó sì dámọ̀ràn ohun kan tí ó lè mú un dára sí i.",
          youCanNow: "ṣètò ìlànà ilé ọlọ́gbọ́n tó rọrùn kí o sì mọ ibi tí o ti máa gbé e kalẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìlànà ojoojúmọ́ (routine) lórí sípíkà ọlọ́gbọ́n?", options: ["Ìrìn ojoojúmọ́", "Gbólóhùn kan tí ó ń mú kí ẹ̀rọ náà ṣe nǹkan púpọ̀", "Àkọsílẹ̀ orin", "Ọ̀rọ̀ aṣínà"], answer: 1, why: "Ìlànà ń jẹ́ kí gbólóhùn kan, bí \"Ẹ káàárọ̀\", ṣe iṣẹ́ púpọ̀." },
            { objective: "O3", q: "O kò rí Routines nínú app nítorí pé àkójọ ti yí padà. Kí ni o máa ṣe?", options: ["Jáwọ́ nínú ìlànà", "Ra sípíkà tuntun", "Wo àwọn ojú-ewé ìrànlọ́wọ́ app náà tàbí béèrè lọ́wọ́ ẹnìkan nínú ẹbí rẹ", "Dá sípíkà náà padà sí bí ó ṣe wà níbẹ̀rẹ̀ (reset)"], answer: 2, why: "Àwọn àkójọ máa ń yí padà láti ìgbà dé ìgbà; ojú-ewé ìrànlọ́wọ́ tàbí ẹnìkan nínú ẹbí lè fi ibi tí ó wà hàn ọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìfaramọ̀ ilé ọlọ́gbọ́n",
        questions: [
          { objective: "O1", q: "Kí ni àwọn ẹ̀rọ ilé ọlọ́gbọ́n ń sopọ̀ mọ́?", options: ["Àpótí lẹ́tà", "Àwọn páìpù omi", "Wi-Fi ilé rẹ", "Ẹ̀rọ ìgbàná bátìrì nìkan"], answer: 2, why: "Wọ́n ń lo Wi-Fi kí o lè darí wọn." },
          { objective: "O1", q: "Ẹ̀rọ wo ló ń jẹ́ kí o rí ẹni tí ó wà lẹ́nu ọ̀nà lórí fóònù rẹ?", options: ["Agogo ilẹ̀kùn oní fídíò", "Plọ́ọ̀gù ọlọ́gbọ́n", "Gílóòbù ọlọ́gbọ́n", "Ẹ̀rọ yíyan búrẹ́dì"], answer: 0, why: "Agogo ilẹ̀kùn oní fídíò ń fi àwọn àlejò hàn lórí fóònù rẹ." },
          { objective: "O2", q: "Kí ni ọ̀rọ̀ ìjí (wake word)?", options: ["Káàdì ìkíni àárọ̀", "Ìró aago ìjí", "Ọ̀rọ̀ aṣínà", "Ọ̀rọ̀ tí ó ń mú kí sípíkà bẹ̀rẹ̀ sí í gbọ́"], answer: 3, why: "\"Alexa\" tàbí \"Hey Google\" ló ń jí sípíkà náà." },
          { objective: "O2", q: "Sípíkà náà kò lóye rẹ. Kí ni o yẹ kí o gbìyànjú?", options: ["Pariwo", "Tún un sọ pẹ̀lú ọ̀rọ̀ tó rọrùn jù", "Yọ ọ́ kúrò lára iná títí láé", "Fún un ní ọ̀rọ̀ aṣínà rẹ"], answer: 1, why: "Àṣẹ kúkúrú tó yé ló ń ṣiṣẹ́ jù." },
          { objective: "O3", q: "Níbo ni o ti máa gbé ìlànà kalẹ̀ fún sípíkà Google Nest?", options: ["Nínú Calculator", "Nínú app Google Home", "Lórí rìmóòtù TV", "Nínú app Camera"], answer: 1, why: "App alábàáṣiṣẹ́ ni Routines wà." }
        ]
      }
    },
    {
      name: "Orí 2: Ààbò, ìtùnú àti ìkọ̀kọ̀",
      lessons: [
        {
          objectives: ["O4","O1"],
          title: "Àwọn ẹ̀rọ ọlọ́gbọ́n fún ààbò",
          minutes: 5,
          goal: "Yan àwọn ẹ̀yà ilé ọlọ́gbọ́n tí ó ń mú kí dídá gbé ní ààbò sí i.",
          text: [
            "Àwọn ẹ̀rọ ọlọ́gbọ́n lè jẹ́ kí ara rẹ balẹ̀ sí i nílé. Iná tí a ṣètò àkókò rẹ̀ tàbí tí ó ní ẹ̀rọ tí ń mọ ìṣípòpadà (motion sensor) túmọ̀ sí pé o kò ní wọ yàrá òkùnkùn ní alẹ́ láéláé, èyí sì lè ràn ọ́ lọ́wọ́ láti má ṣubú. Agogo ilẹ̀kùn oní fídíò jẹ́ kí o rí àlejò kí o sì bá wọn sọ̀rọ̀ láìṣí ilẹ̀kùn.",
            "Sípíkà ọlọ́gbọ́n lè pe ẹnìkan nínú ẹbí rẹ pẹ̀lú ohùn tí ọwọ́ rẹ kò bá tó fóònù rẹ. Àwọn sípíkà àti iṣẹ́ kan ní àwọn ẹ̀yà pàjáwìrì, ṣùgbọ́n wọ̀nyí yàtọ̀ láti ọjà kan sí òmíràn àti láti orílẹ̀-èdè kan sí òmíràn, kì í sì í ṣe gbogbo wọn ló lè pe 911. Wo àwọn ojú-ewé ìrànlọ́wọ́ ọjà náà fúnra rẹ̀ kí o lè mọ ohun tí tìrẹ lè ṣe àti ohun tí kò lè ṣe gan-an. Bọ́tìnnì ìkìlọ̀ ìlera (medical alert device) tí a ṣe fún pàjáwìrì jẹ́ ọ̀rọ̀ mìíràn tí o lè jíròrò pẹ̀lú ẹbí rẹ.",
            "Kí o tó rà, kọ àwọn ìṣòro tí o fẹ́ yanjú sílẹ̀, kí o sì béèrè lọ́wọ́ ẹnìkan nínú ẹbí rẹ tàbí olùrànlọ́wọ́ ní ṣọ́ọ̀bù ẹ̀rọ wo ló bá a mu. O kò nílò gbogbo nǹkan."
          ],
          steps: ["Kọ àwọn ìṣòro ààbò tí o fẹ́ yanjú sílẹ̀.", "So ọ̀kọ̀ọ̀kan pọ̀ mọ́ ẹ̀rọ kan: iná, agogo ilẹ̀kùn tàbí sípíkà.", "Wo àwọn ojú-ewé ìrànlọ́wọ́ ọjà náà fún ohun tí ó lè ṣe àti ohun tí kò lè ṣe.", "Béèrè lọ́wọ́ ẹbí tàbí olùrànlọ́wọ́ ní ṣọ́ọ̀bù kí o tó rà á."],
          words: [["Ẹ̀rọ tí ń mọ ìṣípòpadà (motion sensor)", "ẹ̀rọ tí ó ń kíyè sí ìṣípòpadà tí ó sì lè tan iná."], ["Bọ́tìnnì ìkìlọ̀ ìlera (medical alert device)", "bọ́tìnnì tí a ń wọ̀ sára, tí a ṣe láti pe ìrànlọ́wọ́ nígbà pàjáwìrì."]],
          slides: [
            { title: "Ààbò sí i nílé", bullets: ["Iná tí a ṣètò tàbí tí ń mọ ìṣípòpadà ń dènà ìṣubú", "Agogo ilẹ̀kùn oní fídíò: kọ́kọ́ rí àlejò", "Pe ẹbí pẹ̀lú ohùn"] },
            { title: "Mọ ẹ̀rọ rẹ", bullets: ["Àwọn ẹ̀yà pàjáwìrì yàtọ̀ síra", "Kì í ṣe gbogbo wọn ló lè pe 911", "Wo àwọn ojú-ewé ìrànlọ́wọ́ ọjà náà"] },
            { title: "Ra nǹkan pẹ̀lú ètò", bullets: ["Kọ́kọ́ kọ àwọn ìṣòro sílẹ̀", "So ẹ̀rọ kan mọ́ ọ̀kọ̀ọ̀kan", "O kò nílò gbogbo nǹkan"] }
          ],
          tryIt: "Kọ àníyàn ààbò kan tí o ní nílé sílẹ̀, bí ọ̀dẹ̀dẹ̀ òkùnkùn ní alẹ́, àti ẹ̀rọ ọlọ́gbọ́n tí ó lè ràn ọ́ lọ́wọ́. Béèrè lọ́wọ́ olùrànlọ́wọ́ AI àwọn ìbéèrè tí o yẹ kí o béèrè kí o tó rà á.",
          youCanNow: "yan àwọn ẹ̀yà ilé ọlọ́gbọ́n tí ó bá ohun tí o nílò fún ààbò mu.",
          quickCheck: [
            { objective: "O4", q: "Báwo ni iná tí ó ní ẹ̀rọ tí ń mọ ìṣípòpadà ṣe lè ràn ọ́ lọ́wọ́ láti wà láìléwu?", options: ["Ó ń ti àwọn ilẹ̀kùn rẹ", "Ó ń pe 911", "Ó ń tan kí o má baà wọ yàrá òkùnkùn", "Ó ń kọ orin"], answer: 2, why: "Iná tí ó ń tan fúnra rẹ̀ lè ràn ọ́ lọ́wọ́ láti má ṣubú ní alẹ́." },
            { objective: "O4", q: "O fẹ́ sípíkà tí ó lè pe fún ìrànlọ́wọ́ nígbà pàjáwìrì. Kí ni o máa ṣe kí o tó gbẹ́kẹ̀ lé e?", options: ["Wo àwọn ojú-ewé ìrànlọ́wọ́ ọjà náà fún ohun tí ó lè ṣe àti ohun tí kò lè ṣe", "Rò pé gbogbo sípíkà ló lè pe 911", "Ní kí sípíkà náà ṣèlérí", "Pa máíkì rẹ̀"], answer: 0, why: "Àwọn ẹ̀yà pàjáwìrì yàtọ̀ láti ọjà kan sí òmíràn àti láti orílẹ̀-èdè kan sí òmíràn; ṣàyẹ̀wò ohun tí tìrẹ lè ṣe gan-an." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dídáàbò bo ìkọ̀kọ̀ rẹ nílé",
          minutes: 5,
          goal: "Lo bọ́tìnnì ìpanu (mute) àti ètò ìkọ̀kọ̀ lórí ẹ̀rọ ọlọ́gbọ́n.",
          text: [
            "Àwọn sípíkà ọlọ́gbọ́n máa ń gbọ́ fún ọ̀rọ̀ ìjí wọn. Nígbà míì wọ́n lè ṣì ọ̀rọ̀ mìíràn gbọ́ bí ọ̀rọ̀ ìjí, kí wọ́n sì gba díẹ̀ sílẹ̀. Àwọn kámẹ́rà máa ń gba fídíò sílẹ̀. Nítorí náà, ọgbọ́n ni láti mọ bí a ṣe ń darí wọn.",
            "Gbogbo sípíkà ọlọ́gbọ́n ní bọ́tìnnì tí ó ń pa máíkì (mute); nígbà tí a bá pa á, iná kan (tí ó sábà máa ń jẹ́ pupa) máa fi hàn pé kò gbọ́ mọ́. Lò ó nígbà ìjíròrò àṣírí. Àwọn kámẹ́rà sábà máa ń ní ipò ìkọ̀kọ̀ (privacy mode) tàbí ìbòrí. Nínú app ẹ̀rọ náà, wá ètò ìkọ̀kọ̀ (Privacy settings), níbi tí o ti sábà máa ń lè ṣàyẹ̀wò ohùn tí a gbà sílẹ̀ kí o sì pa wọ́n rẹ́.",
            "Lo ọ̀rọ̀ aṣínà tó lágbára fún Wi-Fi rẹ àti fún àwọn àkáǹtì ẹ̀rọ náà, má sì ṣe pín kóòdù tí wọ́n fi text ránṣẹ́ sí ọ pẹ̀lú ẹnikẹ́ni tí ó pè ọ́ nípa àwọn ẹ̀rọ rẹ láéláé."
          ],
          steps: ["Wá bọ́tìnnì tí ó ń pa máíkì lórí sípíkà rẹ.", "Tẹ̀ ẹ́ nígbà ìjíròrò àṣírí; wo iná aláwọ̀ náà.", "Ṣí app ẹ̀rọ náà kí o sì wá ètò ìkọ̀kọ̀.", "Ṣàyẹ̀wò ohùn tí a gbà sílẹ̀ kí o sì pa wọ́n rẹ́ tí o bá fẹ́.", "Lo ọ̀rọ̀ aṣínà tó lágbára, má sì ṣe pín kóòdù tí wọ́n fi text ránṣẹ́ láéláé."],
          words: [["Pa máíkì (mute)", "láti pa máíkì kí ó má lè gbọ́ nǹkan."], ["Ètò ìkọ̀kọ̀ (privacy settings)", "àwọn àṣàyàn nínú app nípa ohun tí a ń gbà sílẹ̀, tí a ń fi pamọ́ àti tí a ń pín."]],
          slides: [
            { title: "Sípíkà ń gbọ́, kámẹ́rà ń rí", bullets: ["Sípíkà ń dúró de ọ̀rọ̀ ìjí", "Nígbà míì wọ́n lè ṣì gbọ́", "Kámẹ́rà ń gba fídíò sílẹ̀"] },
            { title: "Gba àkóso", bullets: ["Bọ́tìnnì mute: iná fi hàn pé ó ti pa", "Ipò ìkọ̀kọ̀ tàbí ìbòrí kámẹ́rà", "Ṣàyẹ̀wò ohùn tí a gbà sílẹ̀ kí o sì pa wọ́n rẹ́ nínú app"] },
            { title: "Dáàbò bo àwọn àkáǹtì", bullets: ["Ọ̀rọ̀ aṣínà tó lágbára fún Wi-Fi àti àkáǹtì", "Má ṣe pín kóòdù tí wọ́n fi text ránṣẹ́ láéláé"] }
          ],
          tryIt: "Wá bọ́tìnnì tàbí ètò mute lórí sípíkà ọlọ́gbọ́n, tàbí ètò máíkì lórí olùrànlọ́wọ́ fóònù rẹ. Pa á, kí o sì tún tàn án, kí o sì kíyè sí bí o ṣe lè mọ̀ pé ó ti dákẹ́.",
          youCanNow: "pa máíkì ẹ̀rọ ọlọ́gbọ́n kí o sì wá ètò ìkọ̀kọ̀ rẹ̀.",
          quickCheck: [
            { objective: "O5", q: "Kí ló dé tí sípíkà ọlọ́gbọ́n fi lè ṣèèṣì gba díẹ̀ sílẹ̀?", options: ["Ó ń gba gbogbo nǹkan sílẹ̀ nígbà gbogbo", "Ó lè ṣì ọ̀rọ̀ mìíràn gbọ́ bí ọ̀rọ̀ ìjí rẹ̀", "Ó ti bàjẹ́", "Orin nìkan ló ń gbà sílẹ̀"], answer: 1, why: "Sípíkà ń gbọ́ fún ọ̀rọ̀ ìjí, nígbà míì ó sì lè ṣì ọ̀rọ̀ mìíràn gbọ́ bí i." },
            { objective: "O5", q: "Ẹbí rẹ wá kí ọ, o sì fẹ́ sọ̀rọ̀ nípa ọ̀rọ̀ owó àṣírí. Kí ni o máa ṣe sí sípíkà náà?", options: ["Gbé orin sókè", "Ní kí ó dákẹ́ gbígbọ́", "Yọ router Wi-Fi kúrò lára iná", "Tẹ bọ́tìnnì tí ó ń pa máíkì kí o sì wo iná náà"], answer: 3, why: "Bọ́tìnnì mute ń dá máíkì dúró; iná kan, tí ó sábà máa ń jẹ́ pupa, fi hàn pé kò gbọ́ mọ́." }
          ]
        },
        {
          objectives: ["O3","O2"],
          title: "Fífi ilé ọlọ́gbọ́n rẹ ṣiṣẹ́",
          minutes: 5,
          goal: "Ṣètò ìlànà ojoojúmọ́ kan tó pé kí o sì ṣe àṣeṣe rẹ̀.",
          text: [
            "Báyìí, so gbogbo rẹ̀ pọ̀. Ìlànà àkọ́kọ́ tó dára rọrùn, ó wúlò lójoojúmọ́, ó sì rọrùn láti sọ.",
            "Àpẹẹrẹ: \"Ẹ káàárọ̀\" ń tan fìtílà yàrá ìsùn, ó ń sọ ojú ọjọ́ àti kàlẹ́ńdà rẹ fún ọ, ó sì ń rán ọ létí láti lo oògùn àárọ̀ rẹ. \"Ó dàárọ̀\" ń pa àwọn fìtílà, ó sì ń ṣètò aago ìjí rẹ.",
            "Ṣe àṣeṣe sísọ ìlànà rẹ ní ìgbà díẹ̀. Tí nǹkan kan kò bá ṣiṣẹ́, ṣàyẹ̀wò iṣẹ́ kan lẹ́ẹ̀kan nínú app, tàbí ní kí ẹnìkan nínú ẹbí rẹ bá ọ wò ó. Fi àkọsílẹ̀ àwọn àṣẹ rẹ sí ẹ̀gbẹ́ sípíkà títí wọn yóò fi di àṣà."
          ],
          steps: ["Yan gbólóhùn tí o máa rántí.", "Yan iṣẹ́ méjì tàbí mẹ́ta tó wúlò.", "Gbé e kalẹ̀ nínú app, dé ibi tí àwọn ẹ̀rọ rẹ bá gbà.", "Fi ohùn ṣe àṣeṣe rẹ̀ ní ìgbà mélòó kan.", "Fi àkọsílẹ̀ àwọn àṣẹ rẹ sí ẹ̀gbẹ́ sípíkà."],
          words: [["Àṣà (habit)", "ohun tí o ń ṣe léraléra débi pé o kò ní láti ronú nípa rẹ̀ mọ́."]],
          slides: [
            { title: "Ìlànà àkọ́kọ́ tó dára", bullets: ["Rọrùn", "Wúlò lójoojúmọ́", "Rọrùn láti sọ"] },
            { title: "Àpẹẹrẹ", bullets: ["\"Ẹ káàárọ̀\": fìtílà tan, ojú ọjọ́, kàlẹ́ńdà, ìránnilétí oògùn", "\"Ó dàárọ̀\": fìtílà kú, aago ìjí ṣètò"] },
            { title: "Jẹ́ kí ó di àṣà", bullets: ["Ṣe àṣeṣe ní ìgbà díẹ̀", "Tún iṣẹ́ kan ṣe lẹ́ẹ̀kan", "Fi àkọsílẹ̀ sí ẹ̀gbẹ́ sípíkà"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ìlànà \"Ẹ káàárọ̀\" rẹ sílẹ̀, gbé e kalẹ̀ dé ibi tí àwọn ẹ̀rọ rẹ bá gbà, kí o sì fi ohùn ṣe àṣeṣe rẹ̀. Lẹ́yìn náà wá bọ́tìnnì tàbí ètò tí ó ń pa máíkì kí o sì lò ó.",
          youCanNow: "lo àṣẹ ohùn àti ìlànà tó rọrùn láti mú kí ilé rẹ rọrùn kí ó sì ní ààbò sí i, nígbà tí o ń dáàbò bo ìkọ̀kọ̀ rẹ.",
          quickCheck: [
            { objective: "O3", q: "Kí ló ń mú kí ìlànà àkọ́kọ́ dára?", options: ["Ó rọrùn, ó wúlò lójoojúmọ́, ó sì rọrùn láti sọ", "Iṣẹ́ púpọ̀ bí ó bá ti lè ṣeé ṣe tó", "Gbólóhùn gígùn", "Orin nìkan"], answer: 0, why: "Bẹ̀rẹ̀ pẹ̀lú èyí tó rọrùn: gbólóhùn tí o máa rántí pẹ̀lú iṣẹ́ méjì tàbí mẹ́ta tó wúlò." },
            { objective: "O3", q: "Ìlànà \"Ó dàárọ̀\" tuntun rẹ pa àwọn fìtílà ṣùgbọ́n kò ṣètò aago ìjí. Kí ni o máa ṣe?", options: ["Pa gbogbo ìlànà náà rẹ́", "Má ṣe lo ìlànà mọ́ láéláé", "Sọ ọ́ sókè jù", "Ṣàyẹ̀wò iṣẹ́ kan yẹn nínú app, tàbí bá ẹnìkan nínú ẹbí rẹ wò ó"], answer: 3, why: "Tí nǹkan kan kò bá ṣiṣẹ́, ṣàyẹ̀wò iṣẹ́ kan lẹ́ẹ̀kan nínú app." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ààbò, ìtùnú àti ìkọ̀kọ̀",
        questions: [
          { objective: "O4", q: "Báwo ni iná ọlọ́gbọ́n ṣe lè dènà ìṣubú?", options: ["Wọ́n ń ti ilẹ̀kùn", "Wọ́n wúwo jù", "Wọ́n ń pe dókítà", "Wọ́n ń tan kí o má baà wọ yàrá òkùnkùn"], answer: 3, why: "Yàrá tí iná wà ní alẹ́ ń ràn ọ́ lọ́wọ́ láti má ṣubú." },
          { objective: "O4", q: "Ṣé gbogbo sípíkà ọlọ́gbọ́n ló lè pe 911?", options: ["Rárá; ṣàyẹ̀wò ohun tí ọjà rẹ lè ṣe àti ohun tí kò lè ṣe", "Bẹ́ẹ̀ ni, gbogbo wọn", "Àwọn pupa nìkan", "Ní òpin ọ̀sẹ̀ nìkan"], answer: 0, why: "Àwọn ẹ̀yà pàjáwìrì yàtọ̀ láti ọjà kan sí òmíràn àti láti orílẹ̀-èdè kan sí òmíràn." },
          { objective: "O5", q: "Iná sípíkà di pupa lẹ́yìn tí o tẹ bọ́tìnnì mute. Èyí túmọ̀ sí:", options: ["Ó ń pe 911", "Ó ti bàjẹ́", "Máíkì ti kú", "Ó ń gba nǹkan sílẹ̀ sí i"], answer: 2, why: "Iná aláwọ̀ náà fi hàn pé ó ti dákẹ́." },
          { objective: "O5", q: "Níbo ni o ti sábà máa ń lè ṣàyẹ̀wò ohùn tí a gbà sílẹ̀ kí o sì pa wọ́n rẹ́?", options: ["Ìpolówó tí ó yọ jáde lójijì", "Ẹ̀rọ máìkírówéèfù", "Ìwé ètò TV", "Ètò ìkọ̀kọ̀ nínú app ẹ̀rọ náà"], answer: 3, why: "Ètò ìkọ̀kọ̀ app náà ló ń darí ohùn tí a gbà sílẹ̀." },
          { objective: "O5", q: "Ẹnìkan pè ọ́, ó sọ pé òun wá láti ilé-iṣẹ́ sípíkà, ó sì béèrè kóòdù tí wọ́n fi text ránṣẹ́ sí ọ. Ìwọ:", options: ["Fi text rẹ̀ ránṣẹ́ sí wọn", "Kà á fún wọn", "Má ṣe pín in láéláé, kí o sì gé ìpè náà", "Fi í sórí ayélujára"], answer: 2, why: "Kóòdù tí wọ́n fi text ránṣẹ́ ń dáàbò bo àkáǹtì rẹ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI àti Ilé Ọlọ́gbọ́n",
    questions: [
      { objective: "O1", q: "Ẹ̀rọ ọlọ́gbọ́n ni:", options: ["Fìtílà àtijọ́ èyíkéyìí", "Ẹ̀rọ tí o lè darí pẹ̀lú ohùn tàbí fóònù lórí íńtánẹ́ẹ̀tì", "Kàlẹ́ńdà ìwé", "Fóònù orí ilé (landline)"], answer: 1, why: "Àwọn ẹ̀rọ ọlọ́gbọ́n ń sopọ̀ mọ́ íńtánẹ́ẹ̀tì." },
      { objective: "O1", q: "Olùrànlọ́wọ́ ohùn wo ni Amazon Echo ń lò?", options: ["Alexa", "Siri", "Cortana", "Bixby"], answer: 0, why: "Àwọn sípíkà Echo ń lo Alexa." },
      { objective: "O1", q: "Plọ́ọ̀gù ọlọ́gbọ́n ń jẹ́ kí o:", options: ["Tan tàbí pa fìtílà pẹ̀lú ohùn tàbí àkókò tí o ṣètò", "Gba agbára mọ́tò", "Pe ènìyàn lórí fóònù", "Ti ilẹ̀kùn"], answer: 0, why: "Ó ń tan tàbí pa ohun tí a so mọ́ ọn." },
      { objective: "O2", q: "Ọ̀rọ̀ wo ló ń jí sípíkà Google Nest?", options: ["\"Hello phone\"", "\"Hey Google\"", "\"Computer\"", "\"Start\""], answer: 1, why: "\"Hey Google\" ni ọ̀rọ̀ ìjí rẹ̀." },
      { objective: "O2", q: "Èwo ni àṣẹ tó yé?", options: ["\"Nǹkan aago.\"", "\"Ẹ̀m, bóyá, nǹkan yẹn?\"", "\"Ṣètò aago ìkàkókò fún ìṣẹ́jú 15.\"", "\"O mọ̀ ọ́n.\""], answer: 2, why: "Àṣẹ tó yé ń sọ ohun tí o fẹ́ gan-an." },
      { objective: "O2", q: "Iná kan lórí sípíkà sábà máa ń fi hàn pé:", options: ["Ó ti kú títí láé", "Ó ti bàjẹ́", "Ó nílò kíkun", "Ó ń gbọ́"], answer: 3, why: "Iná náà fi hàn pé ó gbọ́ ọ̀rọ̀ ìjí." },
      { objective: "O3", q: "Ìlànà ojoojúmọ́ (routine) ni:", options: ["Ọ̀rọ̀ aṣínà", "Irú plọ́ọ̀gù kan", "Gbólóhùn kan tí ó ń mú kí ẹ̀rọ ṣe nǹkan púpọ̀", "Ètò orí TV"], answer: 2, why: "Ìlànà ń kó àwọn iṣẹ́ pọ̀." },
      { objective: "O3", q: "A máa ń gbé ìlànà fún Amazon Echo kalẹ̀ nínú:", options: ["App Alexa", "Calculator", "Camera", "TV"], answer: 0, why: "App Alexa ló ń darí ìlànà Echo." },
      { objective: "O3", q: "Ọ̀nà tó dára láti ṣètò ìlànà kí o tó gbé e kalẹ̀:", options: ["Fò ètò síṣe", "Méfò", "Kọ́kọ́ ra ọ̀pọ̀ ẹ̀rọ", "Kọ ọ́ sórí ìwé tàbí ní kí AI ṣàyẹ̀wò ètò rẹ"], answer: 3, why: "Ṣíṣètò ń mú kí gbígbé e kalẹ̀ rọrùn." },
      { objective: "O3", q: "Tí àkójọ kan nínú app bá ṣòro láti rí, o lè:", options: ["Jáwọ́", "Wo àwọn ojú-ewé ìrànlọ́wọ́ app náà tàbí béèrè lọ́wọ́ ẹbí", "Fún àjèjì ní ọ̀rọ̀ aṣínà rẹ", "Pa Wi-Fi rẹ rẹ́"], answer: 1, why: "Àwọn àkójọ máa ń yí padà; ojú-ewé ìrànlọ́wọ́ àti ẹbí lè tọ́ ọ sọ́nà." },
      { objective: "O4", q: "Agogo ilẹ̀kùn oní fídíò ń ràn ọ́ lọ́wọ́ láti:", options: ["Se oúnjẹ alẹ́", "Rí àlejò kí o tó ṣí ilẹ̀kùn", "Fọ aṣọ", "San owó ìnáwó"], answer: 1, why: "Ó ń fi ẹni tí ó wà lẹ́nu ọ̀nà hàn." },
      { objective: "O4", q: "Iná tí ó ní ẹ̀rọ tí ń mọ ìṣípòpadà:", options: ["Ń ti ilẹ̀kùn", "Ń kọ orin", "Ń pe ẹbí", "Ń tan nígbà tí ó bá kíyè sí ìṣípòpadà"], answer: 3, why: "Ó ń dáhùn sí ìṣípòpadà." },
      { objective: "O4", q: "Kí o tó ra ẹ̀rọ ọlọ́gbọ́n, o yẹ kí o:", options: ["Kọ àwọn ìṣòro tí o fẹ́ yanjú sílẹ̀", "Ra gbogbo nǹkan", "Pín àwọn ọ̀rọ̀ aṣínà rẹ", "Fojú fo àwọn àyẹ̀wò àti ojú-ewé ìrànlọ́wọ́"], answer: 0, why: "Àkọsílẹ̀ ń ràn ọ́ lọ́wọ́ láti ra ohun tí o nílò nìkan." },
      { objective: "O4", q: "Bọ́tìnnì ìkìlọ̀ ìlera (medical alert device) ni:", options: ["Sípíkà orin", "Gílóòbù ọlọ́gbọ́n", "Bọ́tìnnì tí a ń wọ̀ sára, tí a ṣe láti pe ìrànlọ́wọ́", "Rìmóòtù TV"], answer: 2, why: "A ṣe é fún pàjáwìrì." },
      { objective: "O5", q: "Nígbà ìjíròrò àṣírí, o lè:", options: ["Ṣí kámẹ́rà", "Gbé ohùn sókè", "Sọ ọ̀rọ̀ ìjí", "Tẹ bọ́tìnnì mute sípíkà"], answer: 3, why: "Pípa máíkì ń dá a dúró láti gbọ́." },
      { objective: "O5", q: "Ètò ìkọ̀kọ̀ ń jẹ́ kí o:", options: ["Pe oúnjẹ", "Yí ojú ọjọ́ padà", "Ṣàyẹ̀wò ohùn tí a gbà sílẹ̀ kí o sì pa wọ́n rẹ́", "Mú Wi-Fi yára"], answer: 2, why: "Wọ́n ń darí ohun tí a ń fi pamọ́." },
      { objective: "O5", q: "A lè dáàbò bo ìkọ̀kọ̀ kámẹ́rà pẹ̀lú:", options: ["Títan iná sí i", "Ipò ìkọ̀kọ̀ tàbí ìbòrí", "Gbígbé e súnmọ́ sí i", "Gbígbé ohùn sókè"], answer: 1, why: "Ipò ìkọ̀kọ̀ tàbí ìbòrí ń dá gbígbà sílẹ̀ dúró." },
      { objective: "O5", q: "Ó yẹ kí a lo ọ̀rọ̀ aṣínà tó lágbára fún:", options: ["Wi-Fi rẹ àti àwọn àkáǹtì ẹ̀rọ", "Kò sí nǹkan kan", "Ímeèlì nìkan", "TV rẹ nìkan"], answer: 0, why: "Wọ́n ń dá àwọn ẹlòmíì dúró kúrò nínú àwọn ẹ̀rọ rẹ." },
      { objective: "O3", q: "Ìlànà àkọ́kọ́ tó dára:", options: ["Rọrùn, wúlò lójoojúmọ́, ó sì rọrùn láti sọ", "Gùn, ó sì díjú", "A ń lò ó lẹ́ẹ̀kan lọ́dún", "Ó ṣòro láti rántí"], answer: 0, why: "Ìlànà tó rọrùn ló ń di àṣà." },
      { objective: "O3", q: "Fífi àkọsílẹ̀ àwọn àṣẹ rẹ sí ẹ̀gbẹ́ sípíkà ń ràn ọ́ lọ́wọ́ láti:", options: ["Fi wọ́n pamọ́", "Rántí wọn títí wọn yóò fi di àṣà", "Pín ọ̀rọ̀ aṣínà", "Pa máíkì sípíkà"], answer: 1, why: "Àkọsílẹ̀ jẹ́ ìránnilétí tí ó wà nítòsí." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      6,
      10,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ó ṣètò ìlànà",
        objective: "O3",
        notYet: "Kò sí ètò tí a kọ sílẹ̀, tàbí kò sí gbólóhùn ìbẹ̀rẹ̀.",
        meets: "Ìlànà tí a kọ sílẹ̀ pẹ̀lú gbólóhùn ìbẹ̀rẹ̀ àti iṣẹ́ méjì tàbí mẹ́ta tó wúlò, bí ojú ọjọ́, ìránnilétí oògùn àti fìtílà.",
        exceeds: "Ètò náà tún ní ìlànà \"Ó dàárọ̀\"."
      },
      {
        name: "Ó gbé ìlànà kalẹ̀",
        objective: "O3",
        notYet: "Kò sí ohun tí a gbé kalẹ̀ lórí ẹ̀rọ tàbí fóònù.",
        meets: "Ó gbé ìlànà náà kalẹ̀ dé ibi tí àwọn ẹ̀rọ bá gbà.",
        exceeds: "Ó lè sọ àwọn iṣẹ́ tí àwọn ẹ̀rọ kò lè ṣe àti ohun tí ó lè lò dípò wọn."
      },
      {
        name: "Àṣẹ ohùn tó yé",
        objective: "O2",
        notYet: "Ẹ̀rọ náà kò dáhùn sí àwọn àṣẹ náà.",
        meets: "Ó fi ohùn ṣe àṣeṣe ìlànà náà, ó bẹ̀rẹ̀ pẹ̀lú ọ̀rọ̀ ìjí, ó sì ṣiṣẹ́.",
        exceeds: "Ó kọ àwọn àṣẹ náà sórí ìwé kékeré ní ẹ̀gbẹ́ sípíkà."
      },
      {
        name: "Ó pa máíkì",
        objective: "O5",
        notYet: "Kò rí bọ́tìnnì tàbí ètò mute.",
        meets: "Ó rí bọ́tìnnì tàbí ètò mute, ó lò ó, ó sì rí i tí iná yí padà.",
        exceeds: "Ó tún rí ibi tí a ti ń ṣàyẹ̀wò ohùn tí a gbà sílẹ̀ nínú app."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ń lo ìlànà ojoojúmọ́ tàbí ìránnilétí ohùn nígbà ìwádìí àtẹ̀lé ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé ara àwọn balẹ̀ sí i nílé, bí lílo iná ní alẹ́ tàbí agogo ilẹ̀kùn oní fídíò",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Seniors and Technology míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Sípíkà ọlọ́gbọ́n (Amazon Echo tàbí Google Nest) tàbí smartphone tí ó ní olùrànlọ́wọ́ ohùn",
      "App Alexa tàbí app Google Home lórí fóònù, pẹ̀lú Wi-Fi ilé",
      "Ìwé àti gègé fún ṣíṣètò ìlànà àti kíkọ àwọn àṣẹ sílẹ̀",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú láìkánjú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Mú sípíkà àpẹẹrẹ kan wá kí àwọn akẹ́kọ̀ọ́ tí kò ní ẹ̀rọ lè ṣe àṣeṣe àwọn àṣẹ.",
      "Àwọn àkójọ app máa ń yí padà; ṣàyẹ̀wò àkójọ Routines àti Privacy tí ó wà báyìí kí ìpàdé tó bẹ̀rẹ̀.",
      "Má ṣe ṣèlérí pé sípíkà èyíkéyìí lè pe 911; sọ fún àwọn akẹ́kọ̀ọ́ pé kí wọ́n ṣàyẹ̀wò ọjà tiwọn.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé kí wọ́n má ṣe pín kóòdù tí wọ́n fi text ránṣẹ́ pẹ̀lú ẹnikẹ́ni tí ó pè wọ́n nípa àwọn ẹ̀rọ wọn láéláé.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
