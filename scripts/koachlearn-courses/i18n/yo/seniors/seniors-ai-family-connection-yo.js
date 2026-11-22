"use strict";

// Koach Learn course (Yoruba translation of seniors/seniors-ai-family-connection.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-family-connection-yo",
  lang: "yo",
  translationOf: "seniors-ai-family-connection",
  category: "Seniors and Technology",
  name: "AI fún Ìbánisọ̀rọ̀ àti Ìsúnmọ́ Ẹbí",
  skills: "Kíkọ ọ̀rọ̀ ìfẹ́ pẹ̀lú ìrànlọ́wọ́ AI, Fífi ọ̀rọ̀ ránṣẹ́ (text tàbí email), Dídarapọ̀ mọ́ ìpè fídíò, Fífi àwòrán ránṣẹ́, Wíwà láìléwu nínú ọ̀rọ̀ ẹbí",
  outcome: "lo olùrànlọ́wọ́ AI láti ràn ọ́ lọ́wọ́ kọ ọ̀rọ̀ ìfẹ́ sí ẹnìkan nínú ẹbí rẹ, fi í ránṣẹ́ ní text tàbí email, kí o sì ṣètò ìpè fídíò pẹ̀lú wọn, kí o sì darapọ̀ mọ́ ọn.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn bàbá àgbà àti ìyá àgbà, òbí, àǹtí, àǹkù àti ọ̀rẹ́ tí wọ́n fẹ́ wà ní ìsúnmọ́ àwọn tí wọ́n fẹ́ràn, kódà tí wọ́n bá ń gbé ní ọ̀nà jíjìn.",
    "O máa lo olùrànlọ́wọ́ AI láti rí ọ̀rọ̀ tó yẹ fún ọjọ́ ìbí, ọ̀rọ̀ \"kí ara rẹ yá\" tàbí ìkíni lásán. Lẹ́yìn náà o máa fi ọ̀rọ̀ rẹ ránṣẹ́, fi àwòrán ránṣẹ́, kí o sì darapọ̀ mọ́ ìpè fídíò kí o lè rí ojú àwọn ẹbí rẹ.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ń lọ ní ìgbésẹ̀ kan lẹ́ẹ̀kan. Ka ẹ̀kọ́ náà, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ó dára láti fi kọ́ṣe pẹ̀lú ẹnìkan nínú ẹbí tí ó ti ń lo àwọn irinṣẹ́ yìí. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́."
  ],
  finalTask: "Lo olùrànlọ́wọ́ AI láti ràn ọ́ lọ́wọ́ kọ ọ̀rọ̀ ìfẹ́ kúkúrú tí ó pe ẹnìkan nínú ẹbí rẹ sí ìpè fídíò. Ṣe ìyípadà kan kí ó lè dún bí ìwọ, fi í ránṣẹ́ ní text tàbí email, lẹ́yìn náà darapọ̀ mọ́ ìpè náà ní àkókò tí ẹ fohùn ṣọ̀kan lé, kí o sì kí wọn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí wọ́n fẹ́ wà ní ìsúnmọ́ àwọn ọmọ, ọmọ-ọmọ àti àwọn ẹbí míì tí wọ́n ń gbé ní ọ̀nà jíjìn tàbí tí ọwọ́ wọn dí. Ọ̀pọ̀ lára wọn ń rò pé a fi àwọn sílẹ̀ nígbà tí ẹbí bá ń sọ̀rọ̀ ní text, fídíò àti àwòrán.",
    startingPoint: "Wọ́n lè pe ènìyàn, wọ́n sì lè fi text kékeré ránṣẹ́. Àwọn kan ní smartphone tàbí tablet, ṣùgbọ́n wọn kò tíì lo olùrànlọ́wọ́ AI, ṣe copy àti paste, darapọ̀ mọ́ ìpè fídíò tàbí fi àwòrán ránṣẹ́ rí.",
    gap: "Lónìí, ìgbésí ayé ẹbí ń ṣẹlẹ̀ nípasẹ̀ text, ìpè fídíò àti fífi àwòrán ránṣẹ́. Àwọn àgbàlagbà tí wọ́n lè kọ ọ̀rọ̀ ìfẹ́ pẹ̀lú ìrànlọ́wọ́ AI, fi í ránṣẹ́, darapọ̀ mọ́ ìpè fídíò kí wọ́n sì fi àwòrán ránṣẹ́ máa ń wà ní ìsúnmọ́ ẹbí, ìdánìkanwà wọn sì máa ń dín kù. Àwọn tí wọ́n lè dá ọ̀rọ̀ \"ìṣòro ẹbí\" èké mọ̀ ń dáàbò bo owó tí wọ́n ti tọ́jú.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn, gbólóhùn kúkúrú àti ìgbésẹ̀ tó tóbi, tó sì rọrùn",
      "Ẹ̀rọ: smartphone, tablet tàbí kọ̀mpútà tí ó ní kámẹ́rà; bọ́tìnnì kékeré lè ṣòro láti tẹ̀",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan láìkánjú, pẹ̀lú ìpè ìdánrawò kan pẹ̀lú ẹbí",
      "Àwọn ẹbí ń lo àwọn app tó yàtọ̀ síra; akẹ́kọ̀ọ́ máa lo èyí tí ẹbí rẹ̀ ti ń lò tẹ́lẹ̀",
      "Ewu jìbìtì ga: má ṣe fi owó tàbí kóòdù ránṣẹ́ láìkọ́kọ́ pe ẹbí rẹ lórí nọ́mbà tí o mọ̀"
    ],
    prerequisites: "Ẹ̀kọ́ \"AI fún Àwọn Àgbàlagbà: Lílo Olùrànlọ́wọ́ AI\" wúlò láti kọ́kọ́ ṣe, ṣùgbọ́n kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú olùrànlọ́wọ́ AI ọ̀fẹ́", action: "béèrè àkọ́pẹrẹ ọ̀rọ̀ ẹbí tí ó sọ ẹni tí ó wà fún, ohun tí ó dá lé, bí ó ṣe yẹ kí ó dún àti bí ó ṣe gùn tó", standard: "kí àkọ́pẹrẹ àkọ́kọ́ lè bá ẹni náà mu" },
    { id: "O2", condition: "Tí a bá fún ọ ní àkọ́pẹrẹ AI", action: "yí àkọ́pẹrẹ náà padà kí ó dún bí ìwọ, kí o sì fi nǹkan àdáni kan kún un", standard: "kí ó dún lọ́nà àdánidá nígbà tí o bá kà á sókè" },
    { id: "O3", condition: "Tí ọ̀rọ̀ tí o ti parí bá wà nínú app AI", action: "ṣe copy rẹ̀, ṣe paste rẹ̀ sínú text tàbí email, kí o sì fi í ránṣẹ́", standard: "sí ẹni tó tọ́, lẹ́yìn tí o ti ṣàyẹ̀wò rẹ̀ kí o tó tẹ Send" },
    { id: "O4", condition: "Tí ẹnìkan nínú ẹbí bá pè ọ́ lórí fídíò tàbí fi link ránṣẹ́", action: "darapọ̀ mọ́ ìpè náà kí o sì tan máíkì àti kámẹ́rà", standard: "kí wọ́n lè rí ojú rẹ dáadáa, kí wọ́n sì gbọ́ ohùn rẹ" },
    { id: "O5", condition: "Pẹ̀lú kámẹ́rà fóònù tàbí tablet rẹ", action: "ya àwòrán kí o sì fi ránṣẹ́ sí ẹnìkan nínú ẹbí pẹ̀lú àkọlé kúkúrú", standard: "láìsí ìrànlọ́wọ́" },
    { id: "O6", condition: "Nígbà tí ọ̀rọ̀ tàbí ìpè kan bá sọ pé ẹnìkan nínú ẹbí wà nínú wàhálà, ó sì nílò owó", action: "dá àwọn àmì ìkìlọ̀ jìbìtì \"ìṣòro ẹbí\" mọ̀, kí o sì ṣàyẹ̀wò nípa pípe nọ́mbà tí o ti ní tẹ́lẹ̀", standard: "láìfi owó tàbí kóòdù kankan ránṣẹ́ kí o tó ṣàyẹ̀wò" }
  ],
  chapters: [
    {
      name: "Orí 1: Wíwá ọ̀rọ̀ tó yẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lílo AI láti kọ ọ̀rọ̀ sí ẹbí",
          minutes: 5,
          goal: "Ní kí olùrànlọ́wọ́ AI kọ àkọ́pẹrẹ ọ̀rọ̀ kúkúrú sí ẹnìkan nínú ẹbí rẹ.",
          text: [
            "Nígbà míì, apá tó le jù nínú bíbá ẹbí sọ̀rọ̀ ni mímọ ohun tí o máa sọ. Olùrànlọ́wọ́ AI bí ChatGPT, Microsoft Copilot tàbí Google Gemini lè kọ àkọ́pẹrẹ àkọ́kọ́ fún ọ láàárín ìṣẹ́jú-àáyá díẹ̀.",
            "Sọ fún un ẹni tí ọ̀rọ̀ náà wà fún, ohun tí ó dá lé, àti bí o ṣe fẹ́ kí ó dún. Fún àpẹẹrẹ: \"Kọ text kúkúrú tó kún fún ayọ̀ sí ọmọ-ọmọ mi Leo, tí ó ṣẹ̀ṣẹ̀ parí ọ̀sẹ̀ àkọ́kọ́ rẹ̀ ní yunifásítì. Inú mi dùn sí i. Kí ó má ju ọ̀rọ̀ 40 lọ.\"",
            "Àkọ́pẹrẹ jẹ́ ìbẹ̀rẹ̀, kì í ṣe ọ̀rọ̀ ìkẹyìn. Ìwọ lo mọ ẹbí rẹ; olùrànlọ́wọ́ náà kò mọ̀ wọ́n."
          ],
          steps: ["Ṣí olùrànlọ́wọ́ AI rẹ.", "Sọ ẹni tí ọ̀rọ̀ náà wà fún àti ohun tí ó dá lé.", "Sọ bí ó ṣe yẹ kí ó dún: pẹ̀lú ayọ̀, pẹ̀lú ìrẹ̀lẹ̀, pẹ̀lú àwàdà tàbí lásán.", "Sọ bí ó ṣe yẹ kí ó gùn tó."],
          words: [["Àkọ́pẹrẹ (draft)", "ẹ̀dà àkọ́kọ́ ọ̀rọ̀ kan tí o lè yí padà kí o tó fi í ránṣẹ́."], ["Ohùn ọ̀rọ̀ (tone)", "bí ọ̀rọ̀ kan ṣe ń dún, bí ti ìfẹ́, ti àwàdà tàbí ti ìṣọ́ra."]],
          slides: [
            { title: "Ọ̀rọ̀ ò wá sí ọ lọ́kàn?", bullets: ["Olùrànlọ́wọ́ AI lè kọ àkọ́pẹrẹ àkọ́kọ́", "Ìṣẹ́jú-àáyá díẹ̀ péré ni ó máa gbà"] },
            { title: "Sọ nǹkan mẹ́rin fún un", bullets: ["Ẹni tí ó wà fún", "Ohun tí ó dá lé", "Bí ó ṣe yẹ kí ó dún", "Bí ó ṣe yẹ kí ó gùn tó"] },
            { title: "Rántí", bullets: ["Àkọ́pẹrẹ jẹ́ ìbẹ̀rẹ̀ lásán", "Ìwọ lo mọ ẹbí rẹ jù"] }
          ],
          tryIt: "Ronú nípa ẹnìkan nínú ẹbí rẹ tí o fẹ́ gbọ́ láti ọ̀dọ̀ rẹ̀. Ní kí olùrànlọ́wọ́ kan kọ ọ̀rọ̀ ìfẹ́ kúkúrú sí i nípa nǹkan gidi, bí ọjọ́ ìbí, iṣẹ́ tuntun tàbí ìkíni lásán.",
          youCanNow: "ní kí olùrànlọ́wọ́ AI kọ àkọ́pẹrẹ ọ̀rọ̀ kúkúrú sí ẹni tí o fẹ́ràn.",
          quickCheck: [
            { objective: "O1", q: "Kí ni àkọ́pẹrẹ ọ̀rọ̀ tí AI kọ?", options: ["Ọ̀rọ̀ ìkẹyìn tí AI máa fi ránṣẹ́ fún ọ", "Ọ̀rọ̀ láti ọ̀dọ̀ ẹbí rẹ", "Ìbẹ̀rẹ̀ tí o lè yí padà", "Kóòdù àṣírí"], answer: 2, why: "Àkọ́pẹrẹ jẹ́ ìbẹ̀rẹ̀; ìwọ lo mọ ẹbí rẹ, olùrànlọ́wọ́ náà kò mọ̀ wọ́n." },
            { objective: "O1", q: "O fẹ́ ọ̀rọ̀ fún ọjọ́ ìbí ọmọ-ọmọ rẹ obìnrin. Kí ni o máa sọ fún olùrànlọ́wọ́ náà?", options: ["Ẹni tí ó wà fún, ohun tí ó dá lé, bí ó ṣe yẹ kí ó dún àti bí ó ṣe gùn tó", "Ọ̀rọ̀ náà \"ọjọ́ ìbí\" nìkan", "Àdírẹ́sì ilé rẹ̀ àti nọ́mbà fóònù rẹ̀", "Kò sí nǹkan; ó máa fojú inú wò ó"], answer: 0, why: "Sísọ ẹni tí ó wà fún, ohun tí ó dá lé, ohùn rẹ̀ àti gígùn rẹ̀ ń mú àkọ́pẹrẹ tó bá a mu wá." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mímú kí ọ̀rọ̀ náà dún bí ìwọ",
          minutes: 4,
          goal: "Yí àkọ́pẹrẹ AI padà kí ó dún bí ohùn ara rẹ.",
          text: [
            "Àkọ́pẹrẹ AI lè dún bí ẹni tí ó le díẹ̀ tàbí tí ó ga jù. Ẹbí rẹ máa kíyèsí tí kò bá dún bí ìwọ, nítorí náà sọ ọ́ di tìrẹ.",
            "O lè sọ fún olùrànlọ́wọ́ náà pé: \"Jẹ́ kí ó dún bí ọ̀rọ̀ ojoojúmọ́.\" \"Lo ọ̀rọ̀ tó kúrú jù.\" \"Fi kún un pé màá se páì ápù tí ó fẹ́ràn jù nígbà tí ó bá wá.\" Tàbí kí ìwọ fúnra rẹ yí àwọn ọ̀rọ̀ náà padà.",
            "Fi nǹkan kan kún un tí ìwọ nìkan mọ̀: orúkọ ìfẹ́, ìrántí kan, tàbí àwàdà tí ẹ̀yin méjèèjì nìkan yé. Èyí ló ń mú kí ọ̀rọ̀ dà bí tìrẹ gan-an."
          ],
          steps: ["Ka àkọ́pẹrẹ náà sókè.", "Sàmì sí ọ̀rọ̀ èyíkéyìí tí o kò jẹ́ sọ láéláé.", "Béèrè ìyípadà, tàbí kí o yí àwọn ọ̀rọ̀ náà padà fúnra rẹ.", "Fi nǹkan àdáni kan tí ìwọ nìkan mọ̀ kún un."],
          words: [["Nǹkan àdáni", "nǹkan pàtó láàárín ìwọ àti ẹni náà, bí ìrántí kan tàbí orúkọ ìfẹ́."]],
          slides: [
            { title: "Sọ ọ́ di tìrẹ", bullets: ["Ka àkọ́pẹrẹ náà sókè", "Yí ọ̀rọ̀ tí o kò jẹ́ sọ láéláé padà"] },
            { title: "Béèrè ìyípadà", bullets: ["\"Jẹ́ kí ó dún bí ọ̀rọ̀ ojoojúmọ́.\"", "\"Lo ọ̀rọ̀ tó kúrú jù.\"", "\"Fi kún un pé mo ń se páì tí ó fẹ́ràn jù.\""] },
            { title: "Fi ìfọwọ́kan àdáni kún un", bullets: ["Orúkọ ìfẹ́", "Ìrántí tí ẹ jọ ní", "Àwàdà tí ẹ̀yin nìkan yé"] }
          ],
          tryIt: "Mú àkọ́pẹrẹ rẹ láti Ẹ̀kọ́ 1. Kà á sókè, ṣe ìyípadà kan kí ó lè dún bí ìwọ, kí o sì fi nǹkan àdáni kan kún un.",
          youCanNow: "sọ àkọ́pẹrẹ AI di ọ̀rọ̀ tí ó dún bí ìwọ.",
          quickCheck: [
            { objective: "O2", q: "Kí ló dé tí o fi máa yí àkọ́pẹrẹ AI padà kí o tó fi í ránṣẹ́?", options: ["AI máa ń jẹ́ kí gbogbo ọ̀rọ̀ kúrú jù", "Kí ó lè dún bí ìwọ, nítorí ẹbí rẹ máa kíyèsí tí kò bá dún bẹ́ẹ̀", "Nítorí àkọ́pẹrẹ AI kì í ní ọ̀wọ̀ rárá", "Nítorí text gbọ́dọ̀ gùn"], answer: 1, why: "Àkọ́pẹrẹ AI lè dún bí ẹni tí ó le; sísọ ọ́ di tìrẹ ń jẹ́ kí ó jẹ́ àdáni." },
            { objective: "O2", q: "Àkọ́pẹrẹ rẹ dára ṣùgbọ́n ó rí lásán. Kí ni o máa fi kún un?", options: ["Ewì gígùn", "Ìsọfúnni báńkì rẹ", "Nǹkan tí ìwọ nìkan mọ̀, bí orúkọ ìfẹ́ tàbí ìrántí", "Ọ̀pọ̀ ọ̀rọ̀ gíga"], answer: 2, why: "Orúkọ ìfẹ́, ìrántí tàbí àwàdà tí ẹ̀yin nìkan yé ń mú kí ọ̀rọ̀ jẹ́ àdáni." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fífi ọ̀rọ̀ rẹ ránṣẹ́ ní text tàbí email",
          minutes: 6,
          goal: "Ṣe copy ọ̀rọ̀ rẹ kí o sì fi í ránṣẹ́ ní text tàbí email.",
          text: [
            "Nígbà tí ọ̀rọ̀ rẹ bá ti ṣe tán, o nílò láti gbé e láti inú olùrànlọ́wọ́ AI lọ sí app text tàbí email rẹ. O máa ṣe èyí nípa copy àti paste.",
            "Láti ṣe copy lórí fóònù tàbí tablet: fi ìka rẹ tẹ ọ̀rọ̀ náà mọ́lẹ̀ títí àkójọ (menu) kan yóò fi yọ, lẹ́yìn náà tẹ Copy. Ọ̀pọ̀ app AI tún ní bọ́tìnnì copy kékeré lábẹ́ ìdáhùn. Lórí kọ̀mpútà, fi máòsì yan ọ̀rọ̀ náà, tẹ bọ́tìnnì ọ̀tún máòsì, kí o sì yan Copy.",
            "Lẹ́yìn náà ṣí app Messages tàbí email rẹ, bẹ̀rẹ̀ ọ̀rọ̀ tuntun sí ẹni náà nínú ẹbí rẹ, tẹ àpótí ọ̀rọ̀ mọ́lẹ̀ kí o sì tẹ Paste (lórí kọ̀mpútà, tẹ bọ́tìnnì ọ̀tún máòsì kí o sì yan Paste). Kà á lẹ́ẹ̀kan sí i, kí o sì fi í ránṣẹ́."
          ],
          steps: ["Ṣe copy ọ̀rọ̀ náà: tẹ ẹ́ mọ́lẹ̀, lẹ́yìn náà tẹ Copy, tàbí lo bọ́tìnnì copy.", "Ṣí app Messages tàbí email rẹ.", "Bẹ̀rẹ̀ ọ̀rọ̀ tuntun sí ẹni náà nínú ẹbí rẹ.", "Tẹ àpótí ọ̀rọ̀ mọ́lẹ̀ kí o sì tẹ Paste.", "Kà á lẹ́ẹ̀kan sí i, lẹ́yìn náà tẹ Send."],
          words: [["Copy àti paste", "gbígbé ọ̀rọ̀ láti ibì kan àti fífi sí ibòmíì, láìtún un tẹ̀."], ["Text", "ọ̀rọ̀ kíkọ kúkúrú tí a fi ránṣẹ́ láti fóònù kan sí òmíì."]],
          slides: [
            { title: "Ṣe copy ọ̀rọ̀ náà", bullets: ["Tẹ ọ̀rọ̀ náà mọ́lẹ̀, lẹ́yìn náà tẹ Copy", "Tàbí tẹ bọ́tìnnì copy lábẹ́ ìdáhùn", "Kọ̀mpútà: tẹ bọ́tìnnì ọ̀tún máòsì, lẹ́yìn náà Copy"] },
            { title: "Ṣe paste rẹ̀", bullets: ["Ṣí Messages tàbí email", "Bẹ̀rẹ̀ ọ̀rọ̀ tuntun", "Tẹ mọ́lẹ̀, lẹ́yìn náà tẹ Paste"] },
            { title: "Kí o tó fi ránṣẹ́", bullets: ["Ṣàyẹ̀wò orúkọ ẹni náà", "Kà á lẹ́ẹ̀kan sí i", "Tẹ Send"] }
          ],
          tryIt: "Ṣe copy ọ̀rọ̀ tí o ti parí láti Ẹ̀kọ́ 2, kí o sì fi í ránṣẹ́ sí ẹni náà nínú ẹbí rẹ ní text tàbí email.",
          youCanNow: "ṣe copy ọ̀rọ̀ láti inú olùrànlọ́wọ́ AI kí o sì fi í ránṣẹ́ ní text tàbí email.",
          quickCheck: [
            { objective: "O3", q: "Kí ni paste ń ṣe?", options: ["Ó ń fi ọ̀rọ̀ tí o ṣe copy sí ibi tuntun", "Ó ń pa ọ̀rọ̀ rẹ rẹ́", "Ó ń fi ọ̀rọ̀ náà ránṣẹ́ lẹ́sẹ̀kẹsẹ̀", "Ó ń ya àwòrán"], answer: 0, why: "O máa ṣe copy ọ̀rọ̀ nínú app kan, o sì máa ṣe paste rẹ̀ sínú àpótí ọ̀rọ̀ app míì." },
            { objective: "O3", q: "O ti ṣe copy ọ̀rọ̀ rẹ láti inú app AI. Kí ni o máa ṣe tẹ̀lé e?", options: ["Pa fóònù rẹ", "Tún un ṣe copy", "Pe ẹni náà nínú ẹbí rẹ", "Ṣí Messages tàbí email, bẹ̀rẹ̀ ọ̀rọ̀ sí wọn kí o sì ṣe paste rẹ̀ sínú rẹ̀"], answer: 3, why: "Ṣí app Messages tàbí email, bẹ̀rẹ̀ ọ̀rọ̀ tuntun kí o sì ṣe paste ọ̀rọ̀ náà sínú rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Wíwá ọ̀rọ̀ tó yẹ",
        questions: [
          { objective: "O1", q: "Kí ni o yẹ kí o sọ fún olùrànlọ́wọ́ AI nígbà tí o bá ń béèrè ọ̀rọ̀ fún ẹbí?", options: ["Nọ́mbà báńkì rẹ", "Ọ̀rọ̀ kan ṣoṣo", "Ẹni tí ó wà fún, ohun tí ó dá lé, ohùn rẹ̀ àti gígùn rẹ̀", "Ọ̀rọ̀ aṣínà rẹ"], answer: 2, why: "Nǹkan mẹ́rin yìí ń ran olùrànlọ́wọ́ náà lọ́wọ́ láti kọ àkọ́pẹrẹ tó wúlò." },
          { objective: "O2", q: "Àkọ́pẹrẹ náà dún bí ẹni tí ó ga jù. Kí ni o máa ṣe?", options: ["Ní kí ó dún bí ọ̀rọ̀ ojoojúmọ́ tàbí kí o yí àwọn ọ̀rọ̀ náà padà fúnra rẹ", "Pa app náà rẹ́", "Fi í ránṣẹ́ bẹ́ẹ̀ náà", "Jọ̀wọ́ rẹ̀ sílẹ̀"], answer: 0, why: "O lè béèrè ìyípadà tàbí ṣàtúnṣe rẹ̀ kí ó lè dún bí ìwọ." },
          { objective: "O2", q: "Kí ló ń mú kí ọ̀rọ̀ jẹ́ àdáni?", options: ["Dídà ọ̀rọ̀ káàdì láti ṣọ́ọ̀bù kọ", "Ọ̀rọ̀ gígùn púpọ̀", "Ọ̀pọ̀ àmì ìyanu (!)", "Nǹkan tí ìwọ nìkan mọ̀, bí ìrántí kan"], answer: 3, why: "Ìrántí tí ẹ jọ ní tàbí orúkọ ìfẹ́ ń sọ ọ́ di tìrẹ." },
          { objective: "O3", q: "Lórí fóònù, báwo lo ṣe máa ń ṣe copy ọ̀rọ̀?", options: ["Mi fóònù náà", "Tẹ ọ̀rọ̀ náà mọ́lẹ̀, lẹ́yìn náà tẹ Copy", "Pa fóònù náà", "Ya àwòrán rẹ̀"], answer: 1, why: "Títẹ̀ mọ́lẹ̀ ń ṣí àkójọ tí Copy wà nínú rẹ̀." },
          { objective: "O3", q: "Kí ni o yẹ kí o ṣàyẹ̀wò kí o tó tẹ Send?", options: ["Agbára bátìrì nìkan", "Pé ó ń lọ sọ́dọ̀ ẹni tó tọ́", "Kò sí nǹkan", "Ojú ọjọ́"], answer: 1, why: "Ṣíṣàyẹ̀wò orúkọ ń dènà fífi ọ̀rọ̀ rẹ ránṣẹ́ sí ẹni tí kò tọ́." }
        ]
      }
    },
    {
      name: "Orí 2: Rírí ẹbí àti pínpín nǹkan pẹ̀lú wọn",
      lessons: [
        {
          objectives: ["O4"],
          title: "Dídarapọ̀ mọ́ ìpè fídíò",
          minutes: 6,
          goal: "Darapọ̀ mọ́ ìpè fídíò pẹ̀lú ẹnìkan nínú ẹbí rẹ kí o sì lo kámẹ́rà àti máíkì.",
          text: [
            "Ìpè fídíò ń jẹ́ kí o rí ẹnìkan kí o sì gbọ́ ohùn rẹ̀ ní àkókò kan náà, láti ibikíbi. Àwọn app ọ̀fẹ́ tí a mọ̀ ni FaceTime (lórí iPhone àti iPad), WhatsApp, Google Meet àti Zoom. Àwọn ẹbí sábà máa ń yan èyí tí ọ̀pọ̀ nínú wọn ti ń lò tẹ́lẹ̀.",
            "Ọ̀nà tó rọrùn jù láti bẹ̀rẹ̀ ni kí ẹnìkan nínú ẹbí pè ọ́. Nígbà tí ìpè náà bá dé, tẹ bọ́tìnnì àwọ̀ ewé tàbí Accept. Tí wọ́n bá fi link ránṣẹ́ sí ọ, tẹ link náà ní àkókò tí ẹ fohùn ṣọ̀kan lé, lẹ́yìn náà tẹ Join.",
            "Nígbà tí o bá ti wọ ìpè náà, wá bọ́tìnnì máíkì àti ti kámẹ́rà. Tí ìlà bá gba orí bọ́tìnnì kan kọjá, ó ti pa; tẹ ẹ́ láti tàn án. Gbé ẹ̀rọ náà sókè dé ìpele ojú rẹ, kí ìmọ́lẹ̀ wà níwájú rẹ, kì í ṣe lẹ́yìn rẹ, kí wọ́n lè rí ojú rẹ."
          ],
          steps: ["Fohùn ṣọ̀kan lórí àkókò àti app pẹ̀lú ẹni náà nínú ẹbí rẹ.", "Nígbà tí ìpè bá dé, tẹ Accept, tàbí tẹ link tí wọ́n fi ránṣẹ́ kí o sì tẹ Join.", "Ṣàyẹ̀wò pé máíkì àti kámẹ́rà wà ní títàn.", "Gbé ẹ̀rọ náà dé ìpele ojú rẹ, kí ìmọ́lẹ̀ wà níwájú rẹ.", "Tẹ bọ́tìnnì pupa láti parí ìpè náà."],
          words: [["Ìpè fídíò", "ìpè tí ẹ ti lè rí ara yín kí ẹ sì gbọ́ ohùn ara yín lórí ojú-iboju."], ["Link", "ọ̀rọ̀ aláwọ̀ búlúù tàbí tí a fa ìlà sí nísàlẹ̀, tí o lè tẹ láti lọ sí ibì kan, bí ìpè."], ["Mute", "pípa máíkì rẹ kí àwọn míì má lè gbọ́ ohùn rẹ."]],
          slides: [
            { title: "Àwọn app ìpè fídíò ọ̀fẹ́", bullets: ["FaceTime lórí iPhone àti iPad", "WhatsApp, Google Meet, Zoom", "Lo èyí tí ẹbí rẹ ń lò"] },
            { title: "Dídarapọ̀", bullets: ["Tẹ Accept nígbà tí wọ́n bá pè ọ́", "Tàbí tẹ link wọn, lẹ́yìn náà Join", "Darapọ̀ ní àkókò tí ẹ fohùn ṣọ̀kan lé"] },
            { title: "Nínú ìpè", bullets: ["Ìlà tí ó gba orí bọ́tìnnì kọjá túmọ̀ sí pé ó ti pa", "Tan máíkì àti kámẹ́rà", "Bọ́tìnnì pupa ń parí ìpè"] },
            { title: "Jẹ́ kí wọ́n rí ọ dáadáa", bullets: ["Ẹ̀rọ ní ìpele ojú", "Ìmọ́lẹ̀ níwájú rẹ, kì í ṣe lẹ́yìn rẹ"] }
          ],
          tryIt: "Ní kí ẹnìkan nínú ẹbí rẹ pè ọ́ lórí app tí wọ́n ń lò. Gbé ìpè náà, ṣàyẹ̀wò pé kámẹ́rà àti máíkì rẹ wà ní títàn, kí wọn, lẹ́yìn náà parí ìpè náà pẹ̀lú bọ́tìnnì pupa.",
          youCanNow: "darapọ̀ mọ́ ìpè fídíò, tan kámẹ́rà àti máíkì rẹ kí o sì pa wọ́n, kí o sì parí ìpè náà.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ìpè fídíò?", options: ["Fíìmù tí a ti gbà sílẹ̀", "Ìpè tí ẹ ti ń rí ara yín tí ẹ sì ń gbọ́ ohùn ara yín ní àkókò kan náà", "Ọ̀rọ̀ ohùn tí a gbà sílẹ̀", "Àkójọ àwòrán"], answer: 1, why: "Ìpè fídíò ń jẹ́ kí o rí ẹnìkan kí o sì gbọ́ ohùn rẹ̀ ní àkókò kan náà, láti ibikíbi." },
            { objective: "O4", q: "Nínú ìpè fídíò, ẹbí rẹ sọ pé àwọn kò rí ojú rẹ dáadáa. Kí ni o máa yí padà?", options: ["Gbé ohùn sókè", "Parí ìpè náà", "Jókòó kí fèrèsé tó mọ́lẹ̀ wà lẹ́yìn rẹ", "Gbé ẹ̀rọ náà dé ìpele ojú rẹ, kí ìmọ́lẹ̀ wà níwájú rẹ"], answer: 3, why: "Ìpele ojú àti ìmọ́lẹ̀ níwájú rẹ ń jẹ́ kí wọ́n rí ojú rẹ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fífi àwòrán ránṣẹ́ sí ẹbí",
          minutes: 5,
          goal: "Ya àwòrán kí o sì fi ránṣẹ́ sí ẹnìkan nínú ẹbí rẹ.",
          text: [
            "Fífi àwòrán ránṣẹ́ jẹ́ ọ̀kan lára ọ̀nà tó dára jù láti wà ní ìsúnmọ́ ẹbí. O lè fi àwòrán ọgbà rẹ, oúnjẹ tí o sè, tàbí ojú-ìwé kan láti inú ìwé àwòrán àtijọ́ ránṣẹ́.",
            "Ṣí app Camera, dojú kọ ohun tí o fẹ́ yà, kí o sì tẹ bọ́tìnnì ribiti ńlá. Láti fi ránṣẹ́, ṣí app Photos tàbí Gallery, tẹ àwòrán náà, lẹ́yìn náà tẹ bọ́tìnnì Share (ó sábà máa ń jẹ́ àpótí onígun mẹ́rin pẹ̀lú ọfà, tàbí àmì mẹ́ta tí ìlà so pọ̀). Yan Messages, email tàbí WhatsApp, lẹ́yìn náà yan ẹni náà nínú ẹbí rẹ.",
            "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ kọ àkọlé, fún àpẹẹrẹ: \"Kọ àkọlé kúkúrú tó dùn fún àwòrán tòmátì àkọ́kọ́ tí ó pọ́n nínú ọgbà mi ní ìgbà ẹ̀rùn yìí.\""
          ],
          steps: ["Ṣí app Camera kí o sì tẹ bọ́tìnnì ribiti.", "Ṣí Photos tàbí Gallery kí o sì tẹ àwòrán náà.", "Tẹ bọ́tìnnì Share.", "Yan Messages, email tàbí WhatsApp, lẹ́yìn náà ẹni náà nínú ẹbí rẹ.", "Fi ọ̀rọ̀ díẹ̀ kún un kí o sì fi ránṣẹ́."],
          words: [["Bọ́tìnnì Share", "bọ́tìnnì tí ó ń fi àwòrán tàbí ojú-ìwé ránṣẹ́ sí ẹlòmíì."], ["Àkọlé (caption)", "ìlà ọ̀rọ̀ kúkúrú tí ó ń bá àwòrán lọ."]],
          slides: [
            { title: "Ya àwòrán náà", bullets: ["Ṣí app Camera", "Tẹ bọ́tìnnì ribiti ńlá"] },
            { title: "Fi àwòrán náà ránṣẹ́", bullets: ["Ṣí Photos tàbí Gallery", "Tẹ àwòrán náà, lẹ́yìn náà bọ́tìnnì Share", "Yan app kan, lẹ́yìn náà ẹni náà nínú ẹbí rẹ"] },
            { title: "Fi àkọlé kún un", bullets: ["Kọ ọ̀rọ̀ díẹ̀ fúnra rẹ", "Tàbí ní kí AI kọ àkọlé kúkúrú tó dùn"] }
          ],
          tryIt: "Ya àwòrán nǹkan kan tí inú rẹ dùn sí. Ní kí olùrànlọ́wọ́ AI kọ àkọlé kúkúrú, lẹ́yìn náà fi àwòrán náà àti àkọlé rẹ̀ ránṣẹ́ sí ẹnìkan nínú ẹbí rẹ.",
          youCanNow: "ya àwòrán, fi àkọlé kún un, kí o sì fi ránṣẹ́ sí ẹbí.",
          quickCheck: [
            { objective: "O5", q: "Kí ni bọ́tìnnì Share ń ṣe nínú app Photos?", options: ["Ó ń pa àwòrán rẹ́", "Ó ń jẹ́ kí àwòrán tóbi sí i", "Ó ń jẹ́ kí o fi àwòrán ránṣẹ́ ní Messages, email tàbí WhatsApp", "Ó ń ya àwòrán tuntun"], answer: 2, why: "Tẹ àwòrán náà, tẹ Share, lẹ́yìn náà yan bí o ṣe máa fi ránṣẹ́ àti ẹni tí o máa fi ránṣẹ́ sí." },
            { objective: "O5", q: "O fẹ́ ọ̀rọ̀ díẹ̀ tó dùn láti bá àwòrán ọgbà rẹ lọ. Kí ni o lè ṣe?", options: ["Ní kí olùrànlọ́wọ́ AI kọ àkọlé kúkúrú", "Má ṣe fi ọ̀rọ̀ kankan sí àwòrán láéláé", "Fi í ránṣẹ́ sí àwọn àjèjì", "Ya àwòrán mẹ́wàá míì"], answer: 0, why: "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ kọ àkọlé kúkúrú fún àwòrán." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Wíwà láìléwu nínú ọ̀rọ̀ ẹbí",
          minutes: 5,
          goal: "Dá ọ̀rọ̀ \"ìṣòro ẹbí\" èké mọ̀ kí o sì ṣàyẹ̀wò rẹ̀ láìléwu.",
          text: [
            "Àwọn jìbìtì máa ń díbọ́n nígbà míì pé àwọn ni ọmọ-ọmọ tàbí ẹbí kan tí ó wà nínú wàhálà. Wọ́n lè fi text ránṣẹ́ láti nọ́mbà tuntun (\"Ẹ n lẹ́ o, Màmá àgbà, fóònù mi ti sọnù\") tàbí kódà lo AI láti fara wé ohùn ẹnìkan lórí fóònù. Wọ́n sábà máa ń béèrè owó ní kíákíá, nígbà púpọ̀ ní gift card, wire transfer tàbí app ìsanwó, wọ́n sì ń ní kí o pa á mọ́ ní àṣírí.",
            "Ẹbí gidi lè dúró fún ìṣẹ́jú díẹ̀ nígbà tí o bá ń ṣàyẹ̀wò. Gbé fóònù sílẹ̀ tàbí dá ìdáhùn dúró, lẹ́yìn náà pe ẹni náà nínú ẹbí rẹ, tàbí òbí rẹ̀, lórí nọ́mbà tí o ti fi pamọ́ tẹ́lẹ̀.",
            "Àwọn ẹbí kan máa ń fohùn ṣọ̀kan lórí ọ̀rọ̀ àṣírí ẹbí tí àwọn nìkan mọ̀, láti lò nígbà pàjáwìrì. Má ṣe fi owó ránṣẹ́ láéláé títí o fi bá ẹni náà sọ̀rọ̀ lórí nọ́mbà tí o fọkàn tán. O lè fi ẹjọ́ jìbìtì sùn sí Federal Trade Commission (àjọ ìjọba Amẹ́ríkà tí ó ń dáàbò bo àwọn oníbàárà) ní ReportFraud.ftc.gov."
          ],
          steps: ["Kíyèsí àwọn àmì: nọ́mbà tuntun, ìkánjú, ìbéèrè owó, \"pa á mọ́ ní àṣírí\".", "Dá ìdáhùn dúró tàbí gbé fóònù sílẹ̀.", "Pe ẹni náà nínú ẹbí rẹ lórí nọ́mbà tí o ti ní tẹ́lẹ̀.", "Fohùn ṣọ̀kan lórí ọ̀rọ̀ àṣírí ẹbí fún ìgbà pàjáwìrì.", "Fi ẹjọ́ jìbìtì sùn ní ReportFraud.ftc.gov."],
          words: [["Jìbìtì ọmọ-ọmọ (grandparent scam)", "ẹ̀tàn tí ẹnìkan ti ń díbọ́n pé òun ni ọmọ-ọmọ tí ó wà nínú wàhálà láti gba owó."], ["Ọ̀rọ̀ àṣírí ẹbí (code word)", "ọ̀rọ̀ àṣírí tí ẹbí rẹ fohùn ṣọ̀kan lé láti fi hàn ẹni tí ó ń pè gan-an."]],
          slides: [
            { title: "Ìṣòro èké", bullets: ["\"Ẹ n lẹ́ o, Màmá àgbà, fóònù mi ti sọnù\"", "Ohùn tí a fara wé lórí fóònù", "Ó ń béèrè owó ní kíákíá àti ní àṣírí"] },
            { title: "Ohun tí o máa ṣe", bullets: ["Dá ìdáhùn dúró tàbí gbé fóònù sílẹ̀", "Pè wọ́n lórí nọ́mbà tí o ti ní tẹ́lẹ̀", "Má ṣe fi owó ránṣẹ́ títí ó fi dá ọ lójú"] },
            { title: "Múra sílẹ̀", bullets: ["Fohùn ṣọ̀kan lórí ọ̀rọ̀ àṣírí ẹbí", "Fi ẹjọ́ jìbìtì sùn ní ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Bí a ṣe lè yẹra fún jìbìtì", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Fi ẹjọ́ jìbìtì sùn", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Iṣẹ́ ìkẹyìn: ní kí olùrànlọ́wọ́ AI ràn ọ́ lọ́wọ́ kọ ọ̀rọ̀ ìfẹ́ kúkúrú tí ó pe ẹnìkan nínú ẹbí rẹ sí ìpè fídíò. Jẹ́ kí ó dún bí ìwọ, fi í ránṣẹ́ ní text tàbí email, kí o sì darapọ̀ mọ́ ìpè náà ní àkókò tí ẹ fohùn ṣọ̀kan lé. Nígbà tí ẹ bá ń sọ̀rọ̀, ẹ fohùn ṣọ̀kan lórí ọ̀rọ̀ àṣírí ẹbí.",
          youCanNow: "bá ẹbí rẹ sọ̀rọ̀ nípasẹ̀ ọ̀rọ̀ kíkọ, àwòrán àti ìpè fídíò, kí o sì ṣàyẹ̀wò ọ̀rọ̀ \"ẹbí\" tí ó fura sí láìléwu.",
          quickCheck: [
            { objective: "O6", q: "Kí ni ọ̀rọ̀ àṣírí ẹbí?", options: ["Ọ̀rọ̀ aṣínà fóònù rẹ", "Ọ̀rọ̀ kan tí ẹbí rẹ nìkan mọ̀, láti fi hàn ẹni tí ó ń pè nígbà pàjáwìrì", "Orúkọ app fídíò rẹ", "Ọ̀rọ̀ kan tí o fi sórí íńtánẹ́ẹ̀tì"], answer: 1, why: "Àwọn ẹbí kan máa ń fohùn ṣọ̀kan lórí ọ̀rọ̀ àṣírí láti ṣàyẹ̀wò ẹni tí ó ń pè gan-an." },
            { objective: "O6", q: "Ohùn kan tí ó dún bí ti ọmọ-ọmọ rẹ ọkùnrin ní kí o fi owó ránṣẹ́ ní kíákíá kí o sì pa á mọ́ ní àṣírí. Kí ni o máa kọ́kọ́ ṣe?", options: ["Fi owó náà ránṣẹ́ kí o tó béèrè ìbéèrè", "Pa á mọ́ ní àṣírí bí wọ́n ṣe ní", "Dúró kí o sì pe ọmọ-ọmọ rẹ tàbí òbí rẹ̀ lórí nọ́mbà tí o ti ní tẹ́lẹ̀", "Fún wọn ní kóòdù tí ó wà lórí fóònù rẹ"], answer: 2, why: "Ìkánjú, àṣírí àti ìbéèrè owó jẹ́ àmì jìbìtì; pè padà lórí nọ́mbà tí o fọkàn tán." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Rírí ẹbí àti pínpín nǹkan pẹ̀lú wọn",
        questions: [
          { objective: "O4", q: "Ẹnìkan nínú ẹbí rẹ fi link ìpè fídíò ránṣẹ́ sí ọ. Kí ni o máa ṣe ní àkókò tí ẹ fohùn ṣọ̀kan lé?", options: ["Pa á rẹ́", "Pa fóònù rẹ", "Fi í ránṣẹ́ sí àwọn àjèjì", "Tẹ link náà, lẹ́yìn náà tẹ Join"], answer: 3, why: "Títẹ link náà àti Join ń mú ọ wọ inú ìpè náà." },
          { objective: "O4", q: "Ìlà kan gba orí bọ́tìnnì máíkì kọjá. Kí ni ìyẹn túmọ̀ sí?", options: ["Máíkì rẹ ti pa", "Ìpè náà ti parí", "Bátìrì ti lọ sílẹ̀", "Kámẹ́rà rẹ ti bàjẹ́"], answer: 0, why: "Ìlà tí ó gba orí bọ́tìnnì kọjá túmọ̀ sí pé ó ti pa." },
          { objective: "O4", q: "Níbo ni ìmọ́lẹ̀ yẹ kí ó wà nígbà ìpè fídíò?", options: ["Lẹ́yìn rẹ", "Kò yẹ kí ìmọ́lẹ̀ wà", "Níwájú rẹ", "Lábẹ́ tábìlì"], answer: 2, why: "Ìmọ́lẹ̀ níwájú rẹ ń jẹ́ kí ẹbí rẹ rí ojú rẹ." },
          { objective: "O5", q: "Báwo lo ṣe máa fi àwòrán ránṣẹ́ láti inú app Photos rẹ?", options: ["Yí fóònù dorí kodò", "Ya àwòrán bátìrì", "Pa àwòrán náà rẹ́", "Tẹ àwòrán náà, lẹ́yìn náà bọ́tìnnì Share, lẹ́yìn náà yan ẹnìkan"], answer: 3, why: "Bọ́tìnnì Share ń fi àwòrán ránṣẹ́ sí app àti ẹni tí o yàn." },
          { objective: "O6", q: "Text láti nọ́mbà tuntun sọ pé: \"Bàbá àgbà, mo wà nínú wàhálà, fi gift card ránṣẹ́, má sì sọ fún Màmá.\" Kí ni o máa ṣe?", options: ["Ra àwọn gift card náà", "Fi nọ́mbà báńkì rẹ dá a lóhùn", "Pe ọmọ-ọmọ rẹ tàbí òbí rẹ̀ lórí nọ́mbà tí o ti ní tẹ́lẹ̀", "Pa á mọ́ ní àṣírí"], answer: 2, why: "Ìkánjú, àṣírí àti gift card jẹ́ àmì jìbìtì; ṣàyẹ̀wò lórí nọ́mbà tí o fọkàn tán." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Ìbánisọ̀rọ̀ àti Ìsúnmọ́ Ẹbí",
    questions: [
      { objective: "O1", q: "Báwo ni olùrànlọ́wọ́ AI ṣe lè ràn ọ́ lọ́wọ́ láti máa bá ẹbí sọ̀rọ̀?", options: ["Ó lè lọ kí wọn dípò rẹ", "Ó lè kọ àkọ́pẹrẹ àkọ́kọ́ ọ̀rọ̀ kan", "Ó mọ nọ́mbà fóònù wọn", "Ó ń fi owó ránṣẹ́ fún ọ"], answer: 1, why: "Kíkọ àkọ́pẹrẹ ọ̀rọ̀ jẹ́ ọ̀kan lára ohun tí olùrànlọ́wọ́ AI mọ̀ ṣe dáadáa." },
      { objective: "O1", q: "Prompt wo ló máa mú ọ̀rọ̀ ẹbí tó dára jù wá?", options: ["\"Kọ text kúkúrú tó kún fún ayọ̀ sí ọmọ-ọmọ mi Ava, tí ẹgbẹ́ bọ́ọ̀lù rẹ̀ borí. Kí ó má ju ọ̀rọ̀ 40 lọ.\"", "\"ọ̀rọ̀\"", "\"text\"", "\"ẹ n lẹ́\""], answer: 0, why: "Ó sọ ẹni tí ó wà fún, ohun tí ó dá lé, ohùn rẹ̀ àti gígùn rẹ̀." },
      { objective: "O1", q: "Kí ni àkọ́pẹrẹ?", options: ["Ẹ̀dà àkọ́kọ́ tí o lè yí padà", "Afẹ́fẹ́ tútù", "Ẹ̀dà ìkẹyìn", "Irú app kan"], answer: 0, why: "Àkọ́pẹrẹ jẹ́ ìbẹ̀rẹ̀ tí o lè mú dára sí i." },
      { objective: "O1", q: "Kí ni \"ohùn ọ̀rọ̀\" (tone) túmọ̀ sí nínú ọ̀rọ̀ kan?", options: ["Ohùn agogo fóònù", "Bí ọ̀rọ̀ náà ṣe ń dún, bí ti ìfẹ́ tàbí ti àwàdà", "Ìtóbi lẹ́tà", "Nọ́mbà fóònù"], answer: 1, why: "Ohùn ọ̀rọ̀ ni bí ọ̀rọ̀ náà ṣe ń rí lára ẹni tí ó ń kà á." },
      { objective: "O2", q: "Ọ̀nà tó dára láti mọ̀ bóyá àkọ́pẹrẹ dún bí ìwọ ni láti:", options: ["Fi í ránṣẹ́ láìkà á", "Jẹ́ kí ó gùn sí i", "Kà á sókè", "Fi ọ̀rọ̀ gíga kún un"], answer: 2, why: "Kíkà á sókè ń fi ọ̀rọ̀ tí o kò jẹ́ sọ láéláé hàn." },
      { objective: "O2", q: "Kí ló ń mú kí ọ̀rọ̀ jẹ́ àdáni?", options: ["Ọ̀rọ̀ gíga", "Kíkọ gbogbo rẹ̀ ní lẹ́tà ńlá", "Dídà á kọ láti inú káàdì", "Ìrántí tí ẹ jọ ní tàbí orúkọ ìfẹ́"], answer: 3, why: "Nǹkan tí ìwọ nìkan mọ̀ ń sọ ọ́ di tìrẹ." },
      { objective: "O3", q: "Láti ṣe copy ọ̀rọ̀ lórí fóònù, o sábà máa ń:", options: ["Tẹ kámẹ́rà", "Mi fóònù náà", "Tẹ ẹ́ mọ́lẹ̀, lẹ́yìn náà tẹ Copy", "Gbé ohùn sókè"], answer: 2, why: "Títẹ̀ mọ́lẹ̀ ń ṣí àkójọ Copy." },
      { objective: "O3", q: "Lẹ́yìn tí o bá ti ṣe copy, báwo lo ṣe máa fi ọ̀rọ̀ náà sínú text?", options: ["Tẹ àpótí ọ̀rọ̀ mọ́lẹ̀ kí o sì tẹ Paste", "Tún gbogbo ọ̀rọ̀ tẹ̀", "Ya àwòrán", "Pe ẹni náà"], answer: 0, why: "Paste ń fi ọ̀rọ̀ tí o ṣe copy sínú àpótí ọ̀rọ̀." },
      { objective: "O3", q: "Kí ni o yẹ kí o ṣàyẹ̀wò kí o tó tẹ Send?", options: ["Kò sí nǹkan", "Ojú ọjọ́", "Ọ̀rọ̀ aṣínà rẹ", "Orúkọ ẹni náà"], answer: 3, why: "Ṣíṣàyẹ̀wò orúkọ ń dènà fífi ránṣẹ́ sí ẹni tí kò tọ́." },
      { objective: "O4", q: "Èwo nínú ìwọ̀nyí ni app ìpè fídíò?", options: ["Calculator", "FaceTime", "Clock", "Flashlight"], answer: 1, why: "FaceTime, WhatsApp, Google Meet àti Zoom ń pèsè ìpè fídíò." },
      { objective: "O4", q: "Nígbà tí ẹnìkan nínú ẹbí rẹ bá pè ọ́ lórí fídíò, o máa tẹ:", options: ["Bọ́tìnnì pupa", "Bọ́tìnnì àwọ̀ ewé tàbí Accept", "Àkójọ àwòrán", "Settings"], answer: 1, why: "Àwọ̀ ewé tàbí Accept ń gbé ìpè; pupa ń parí rẹ̀." },
      { objective: "O4", q: "Bọ́tìnnì tí ìlà gba orí rẹ̀ kọjá:", options: ["Wà ní títàn", "Ń gba nǹkan sílẹ̀", "Ti bàjẹ́", "Ti pa"], answer: 3, why: "Ìlà tí ó gba orí rẹ̀ kọjá túmọ̀ sí pé ó ti pa." },
      { objective: "O4", q: "Láti parí ìpè fídíò, o sábà máa ń tẹ:", options: ["Bọ́tìnnì pupa", "Bọ́tìnnì àwọ̀ ewé", "Bọ́tìnnì ohùn", "Máíkì"], answer: 0, why: "Bọ́tìnnì pupa ń parí ìpè." },
      { objective: "O4", q: "Níbo ni o yẹ kí o gbé ẹ̀rọ náà sí nígbà ìpè fídíò?", options: ["Nítòsí ilẹ̀", "Lẹ́yìn orí rẹ", "Ní ìpele ojú rẹ", "Nínú àpò rẹ"], answer: 2, why: "Ìpele ojú ń jẹ́ kí ẹbí rẹ rí ojú rẹ." },
      { objective: "O5", q: "Bọ́tìnnì Share wà fún:", options: ["Pípa àwòrán rẹ́", "Pípa fóònù", "Yíya àwòrán", "Fífi àwòrán ránṣẹ́ sí ẹnìkan"], answer: 3, why: "Share ń fi àwòrán ránṣẹ́ nípasẹ̀ app tí o yàn." },
      { objective: "O5", q: "Àkọlé (caption) ni:", options: ["Nọ́mbà fóònù", "Irú kámẹ́rà kan", "Ìlà ọ̀rọ̀ kúkúrú tí ó ń bá àwòrán lọ", "Ọ̀rọ̀ aṣínà"], answer: 2, why: "Àkọlé ń ṣàlàyé àwòrán náà." },
      { objective: "O6", q: "Ọ̀rọ̀ kan láti nọ́mbà tuntun sọ pé ọmọ-ọmọ rẹ ni, ó sì nílò owó ní kíákíá. Ohun àkọ́kọ́ tí o máa ṣe ni:", options: ["Fi owó ránṣẹ́", "Dúró kí o sì pe ọmọ-ọmọ rẹ lórí nọ́mbà tí o ti ní tẹ́lẹ̀", "Fi ìsọfúnni báńkì rẹ ránṣẹ́", "Pa á mọ́ ní àṣírí"], answer: 1, why: "Ṣíṣàyẹ̀wò lórí nọ́mbà tí o mọ̀ ń dá jìbìtì yìí dúró." },
      { objective: "O6", q: "Àwọn jìbìtì lè lo AI láti:", options: ["Fara wé ohùn ẹnìkan nínú ẹbí rẹ", "Tún fóònù rẹ ṣe", "Fi lẹ́tà láti báńkì ránṣẹ́ sí ọ", "Wá sí ilé rẹ"], answer: 0, why: "A ń lo AI láti fara wé ohùn nínú jìbìtì \"ìṣòro ẹbí\"." },
      { objective: "O6", q: "Kí ni ọ̀rọ̀ àṣírí ẹbí lè ràn ọ́ lọ́wọ́ nínú rẹ̀?", options: ["Láti fi hàn ẹni tí ó ń pè gan-an nígbà pàjáwìrì", "Láti ṣí fóònù rẹ", "Láti jẹ́ kí ìpè fídíò mọ́ kedere sí i", "Láti san owó ìnáwó"], answer: 0, why: "Ẹbí rẹ gidi nìkan ló mọ ọ̀rọ̀ àṣírí náà." },
      { objective: "O6", q: "Níbo ni o lè fi ẹjọ́ jìbìtì sùn sí ní Amẹ́ríkà (United States)?", options: ["Ìpolówó tí ó yọ sórí ojú-iboju", "ReportFraud.ftc.gov", "Nọ́mbà ẹni tí ó pè", "Ọ̀rọ̀ ìdáhùn lórí ìkànnì àjọlò"], answer: 1, why: "Federal Trade Commission ń gba ẹjọ́ jìbìtì ní ReportFraud.ftc.gov." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      4,
      6,
      9,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ìbéèrè tó yé sí AI",
        objective: "O1",
        notYet: "Prompt náà sọ \"kọ ọ̀rọ̀ kan\" nìkan.",
        meets: "Prompt náà sọ ẹni tí ó wà fún, pé ìpè sí ìpè fídíò ni, ohùn rẹ̀ àti gígùn rẹ̀.",
        exceeds: "Àkọ́pẹrẹ àkọ́kọ́ kò fẹ́rẹ̀ẹ́ nílò ìyípadà kankan."
      },
      {
        name: "Ó dún bí ìwọ",
        objective: "O2",
        notYet: "Ó fi àkọ́pẹrẹ AI ránṣẹ́ gẹ́gẹ́ bí ó ṣe wà.",
        meets: "Ó ṣe ìyípadà kan ó kéré tán kí ó lè dún bí ìwọ.",
        exceeds: "Ó fi nǹkan àdáni tí ìwọ nìkan mọ̀ kún un, bí orúkọ ìfẹ́ tàbí ìrántí."
      },
      {
        name: "Ó lọ sọ́dọ̀ ẹni tó tọ́",
        objective: "O3",
        notYet: "A kò fi ọ̀rọ̀ náà ránṣẹ́, tàbí ó lọ sọ́dọ̀ ẹni tí kò tọ́.",
        meets: "Ó ṣe copy, paste, ó sì fi ọ̀rọ̀ náà ránṣẹ́ ní text tàbí email sí ẹni tó tọ́.",
        exceeds: "Ó tún ṣàyẹ̀wò orúkọ àti ọ̀rọ̀ náà lẹ́ẹ̀kan sí i kí ó tó fi ránṣẹ́."
      },
      {
        name: "Ó darapọ̀ mọ́ ìpè náà",
        objective: "O4",
        notYet: "Kò lè darapọ̀, tàbí máíkì tàbí kámẹ́rà wà ní pípa.",
        meets: "Ó darapọ̀ ní àkókò tí wọ́n fohùn ṣọ̀kan lé pẹ̀lú máíkì àti kámẹ́rà ní títàn, ó sì kí wọn.",
        exceeds: "Ó gbé ẹ̀rọ náà dé ìpele ojú pẹ̀lú ìmọ́lẹ̀ tó dára, ó sì parí ìpè náà pẹ̀lú bọ́tìnnì pupa."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege nínú iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ròyìn ìpè fídíò tàbí àwòrán tí wọ́n fi ránṣẹ́ sí ẹbí láàárín ọjọ́ 30 (ìwádìí ìtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí ẹbí wọn fohùn ṣọ̀kan lórí ọ̀rọ̀ àṣírí ẹbí, tí wọ́n sì ròyìn pé wọ́n ṣàyẹ̀wò ọ̀rọ̀ ẹbí kan tí wọ́n fura sí",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Seniors and Technology míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone, tablet tàbí kọ̀mpútà tí ó ní kámẹ́rà àti íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini) àti app ìpè fídíò tí ẹbí ń lò",
      "Ẹnìkan nínú ẹbí tàbí olùrànlọ́wọ́ tí ó gbà láti kópa nínú ìpè fídíò ìdánrawò",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú láìkánjú: ẹ̀kọ́, ìdánrawò, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Kí ẹ̀kọ́ tó bẹ̀rẹ̀, béèrè lọ́wọ́ àwọn akẹ́kọ̀ọ́ app fídíò tí ẹbí wọn ti ń lò, kí ẹ sì fi èyí ṣe ìdánrawò.",
      "Ṣètò ìpè fídíò ìdánrawò láàárín àwọn akẹ́kọ̀ọ́ nínú yàrá kí wọ́n tó pe ẹbí.",
      "Fi ìgbésẹ̀ copy àti paste hàn lórí ẹ̀rọ akẹ́kọ̀ọ́ kọ̀ọ̀kan; àkójọ (menu) máa ń yàtọ̀ lórí àwọn fóònù tó yàtọ̀ síra.",
      "Ẹ jíròrò jìbìtì \"ìṣòro ẹbí\" nípa ṣíṣe eré ìdánrawò, kí ẹ sì gba àwọn akẹ́kọ̀ọ́ níyànjú láti fohùn ṣọ̀kan lórí ọ̀rọ̀ àṣírí ẹbí.",
      "Fi rubric ṣe àmì iṣẹ́ ìkẹyìn, kí o sì fún wọn ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
