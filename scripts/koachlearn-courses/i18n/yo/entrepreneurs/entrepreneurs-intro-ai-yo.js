"use strict";

// Koach Learn course (Yoruba translation of entrepreneurs/entrepreneurs-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-intro-ai-yo",
  lang: "yo",
  translationOf: "entrepreneurs-intro-ai",
  category: "Entrepreneurs",
  name: "Ìfihàn sí AI fún Àwọn Oníṣòwò",
  skills: "Dídá iṣẹ́ òwò tí AI lè ṣe mọ̀, Kíkọ prompt fún òwò, Mímú àkọ́pẹrẹ dára sí i, Ṣíṣàyẹ̀wò òtítọ́ àti nọ́mbà, Dídáàbò bo ìsọfúnni òwò àti ti oníbàárà",
  outcome: "yan iṣẹ́ gidi kan nínú òwò rẹ, lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti kọ àkọ́pẹrẹ rẹ̀, mú un dára sí i kí o sì ṣàyẹ̀wò rẹ̀, kí o má sì fi ìsọfúnni oníbàárà tàbí ti owó sínú ìjíròrò náà.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tí ń bẹ̀rẹ̀ òwò kékeré tàbí tí ń mú un gbòòrò: ọkọ̀ oúnjẹ, iṣẹ́ ìmọ́tótó, ṣọ́ọ̀bù irun, ṣọ́ọ̀bù orí ayélujára, iṣẹ́ ìgbaninímọ̀ràn, tàbí iṣẹ́ ẹ̀gbẹ́ tí o fẹ́ mú dàgbà.",
    "O máa kọ́ ohun tí olùrànlọ́wọ́ AI lè ṣe fún oníṣòwò, bí o ṣe lè wá àwọn iṣẹ́ inú ọ̀sẹ̀ rẹ tí AI lè mú yára, bí o ṣe lè kọ prompt òwò tó yé, bí o ṣe lè mú ohun tí AI fún ọ dára sí i kí o sì ṣàyẹ̀wò rẹ̀, àti bí o ṣe lè dáàbò bo ìsọfúnni àwọn oníbàárà rẹ.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ka ẹ̀kọ́ náà, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" pẹ̀lú òwò tìrẹ. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Yan iṣẹ́ gidi kan nínú òwò rẹ (fún àpẹẹrẹ ìwé iye owó ọjà, ìmeèlì ìkíni káàbọ̀ fún oníbàárà tuntun, tàbí ìfiránṣẹ́ ọ̀sẹ̀-ọ̀sẹ̀ lórí ìkànnì àjọlò). Lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti kọ àkọ́pẹrẹ rẹ̀ pẹ̀lú prompt òwò onípá mẹ́ta, béèrè ìyípadà méjì, ṣàyẹ̀wò gbogbo òtítọ́ àti nọ́mbà fúnra rẹ, yọ ìsọfúnni àdáni oníbàárà tàbí ti owó kúrò, kí o sì fi ẹ̀dà ìkẹyìn pamọ́ kí ó ṣe tán fún lílò.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí ń bẹ̀rẹ̀ òwò kékeré tàbí tí ń mú un gbòòrò, bí ọkọ̀ oúnjẹ, iṣẹ́ ìmọ́tótó, ṣọ́ọ̀bù irun, ṣọ́ọ̀bù orí ayélujára, iṣẹ́ ìgbaninímọ̀ràn tàbí iṣẹ́ ẹ̀gbẹ́. Ọ̀pọ̀ jù lọ ń ṣe gbogbo iṣẹ́ òwò náà fúnra wọn.",
    startingPoint: "Wọ́n ń fi ọwọ́ ṣe àwọn iṣẹ́ òwò wọn, wọ́n sì ń lo fóònù tàbí kọ̀mpútà lójoojúmọ́. Ọ̀pọ̀ ti gbọ́ nípa olùrànlọ́wọ́ AI ṣùgbọ́n wọn kò tíì lò ó fún iṣẹ́ òwò, tàbí wọ́n ti gbìyànjú rẹ̀ láìní ọ̀nà tó ṣe kedere.",
    gap: "Àwọn oníṣòwò ń pàdánù ọ̀pọ̀ wákàtí lọ́sẹ̀ lórí iṣẹ́ kíkọ̀wé àti ṣíṣètò tí olùrànlọ́wọ́ AI lè kọ àkọ́pẹrẹ rẹ̀ láàárín ìṣẹ́jú díẹ̀. Tí a bá lò ó láìṣọ́ra, AI lè fi iye owó tí kò tọ́, ọ̀rọ̀ ìpolówó èké tàbí ìsọfúnni àdáni oníbàárà sí orúkọ òwò náà. Àwọn oníṣòwò nílò ọ̀nà tí kò léwu, tí wọ́n lè tún ṣe, láti kọ àkọ́pẹrẹ, mú un dára sí i, kí wọ́n sì ṣàyẹ̀wò ìwé òwò pẹ̀lú AI.",
    constraints: [
      "Ọ̀rọ̀ tó rọrùn; kò nílò ìmọ̀ ẹ̀rọ kankan",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà tí ó ní olùrànlọ́wọ́ AI ọ̀fẹ́",
      "Àkókò: nǹkan bí ìṣẹ́jú márùn-ún fún ẹ̀kọ́ kọ̀ọ̀kan, tí ó bá iṣẹ́ òwò mu",
      "Ọ̀rọ̀ ìpolówó gbọ́dọ̀ jẹ́ òótọ́ kí ó sì ní ẹ̀rí; ìbéèrè nípa owó-orí àti ìwé-àṣẹ ń lọ sí orísun ìjọba tàbí akọ́ṣẹ́mọṣẹ́",
      "Kò sí nọ́mbà káàdì oníbàárà, ìsọfúnni báńkì tàbí ìsọfúnni àdáni míì nínú prompt kankan"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ní ọ̀rọ̀ ara rẹ", action: "ṣàlàyé ohun tí olùrànlọ́wọ́ AI lè ṣe àti ohun tí kò lè ṣe fún òwò", standard: "pẹ̀lú ìdí tí oníṣòwò fi ń ṣàyẹ̀wò ohun gbogbo kí ó tó jáde" },
    { id: "O2", condition: "Tí a bá fún ọ ní àkọsílẹ̀ iṣẹ́ mẹ́wàá láti inú ọ̀sẹ̀ rẹ", action: "pín àwọn iṣẹ́ òwò ọ̀sẹ̀ rẹ sí iṣẹ́ tí AI lè kọ àkọ́pẹrẹ rẹ̀, iṣẹ́ tí AI ń ràn ọ́ lọ́wọ́ láti ronú, àti iṣẹ́ tí o máa ṣe fúnra rẹ", standard: "kí o sì yan iṣẹ́ àkọ́kọ́ kan tí kò léwu, tí ó sì wúlò fún AI" },
    { id: "O3", condition: "Tí o bá ti yan iṣẹ́ rẹ", action: "kọ prompt òwò tí ó ní iṣẹ́, ipò àti ìrísí", standard: "tí àkọ́pẹrẹ àkọ́kọ́ fi sún mọ́ èyí tí o lè lò" },
    { id: "O4", condition: "Tí o bá ní àkọ́pẹrẹ àkọ́kọ́ láti ọ̀dọ̀ AI", action: "béèrè ìyípadà, ọ̀kan lẹ́ẹ̀kan, kí o sì fi ìsọfúnni gidi tìrẹ kún un", standard: "títí yóò fi dún bí òwò rẹ, láìju ìbéèrè ìyípadà mẹ́ta lọ" },
    { id: "O5", condition: "Tí o bá ní àkọ́pẹrẹ tí a ti mú dára sí i", action: "ṣàyẹ̀wò gbogbo òtítọ́, nọ́mbà àti ọ̀rọ̀ ìpolówó pẹ̀lú àkọsílẹ̀ tìrẹ tàbí orísun ìjọba", standard: "kí o sì yọ ọ̀rọ̀ ìpolówó èyíkéyìí tí o kò lè fi ẹ̀rí hàn kúrò" },
    { id: "O6", condition: "Nígbàkígbà tí o bá ń lo AI fún òwò", action: "pa ìsọfúnni àdáni oníbàárà àti ti owó mọ́ kúrò nínú prompt, kí o sì dá jìbìtì ìsanwó mọ̀", standard: "nípa lílo àmì ààyè, láìfi nọ́mbà káàdì, báńkì tàbí àkáǹtì kankan hàn" }
  ],
  chapters: [
    {
      name: "Orí 1: Ohun tí AI lè ṣe fún òwò rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí AI jẹ́, ní ọ̀nà òwò",
          minutes: 4,
          goal: "Ṣàlàyé ní ọ̀rọ̀ ara rẹ ohun tí olùrànlọ́wọ́ AI lè ṣe àti ohun tí kò lè ṣe fún òwò.",
          text: [
            "Olùrànlọ́wọ́ AI jẹ́ ètò kọ̀mpútà tí o lè kọ̀wé sí tàbí bá sọ̀rọ̀ ní èdè ojoojúmọ́. Àwọn ọ̀fẹ́ tí a mọ̀ dáadáa ni ChatGPT, Microsoft Copilot àti Google Gemini. O béèrè nǹkan, ó sì kọ àkọ́pẹrẹ láàárín ìṣẹ́jú-àáyá díẹ̀.",
            "Fún oníṣòwò, rò ó bí olùrànlọ́wọ́ tí ó yára kọ àkọ́pẹrẹ àkọ́kọ́. Ó mọ̀ dáadáa nípa kíkọ ìmeèlì, ìfiránṣẹ́ orí ìkànnì àjọlò àti àlàyé ọjà, yíyí àkọsílẹ̀ padà sí ètò, ṣíṣe àkópọ̀ ìwé gígùn, wíwá orúkọ àti èrò tuntun, àti ṣíṣàlàyé àwọn ọ̀rọ̀ òwò tí o kò mọ̀.",
            "Kì í ṣe akáùntáǹtì rẹ, agbẹjọ́rò rẹ tàbí oníbàárà rẹ. Kò mọ iye owó rẹ, àwọn oníbàárà rẹ tàbí òfin àdúgbò rẹ àyàfi tí o bá sọ fún un, ó sì lè ṣàṣìṣe nígbà tí ó dún bí ó dá a lójú. Ìwọ ni olówó òwò: ìwọ ló ń pinnu ohun tí ó máa jáde pẹ̀lú orúkọ òwò rẹ lórí rẹ̀."
          ],
          words: [["Olùrànlọ́wọ́ AI", "ètò kọ̀mpútà tí o ń bá sọ̀rọ̀ nípa títẹ̀ ọ̀rọ̀ tàbí sísọ̀rọ̀, tí ó ń kọ ìdáhùn àti àkọ́pẹrẹ."], ["Àkọ́pẹrẹ àkọ́kọ́", "ẹ̀dà àkọ́kọ́ ohun kan tí o máa ṣàyẹ̀wò, tí o sì máa mú dára sí i kí o tó lò ó."]],
          slides: [
            { title: "AI fún òwò = olùrànlọ́wọ́ àkọ́pẹrẹ tó yára", bullets: ["O béèrè ní èdè ojoojúmọ́", "Ó kọ àkọ́pẹrẹ láàárín ìṣẹ́jú-àáyá díẹ̀", "Àwọn ọ̀fẹ́: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Ó mọ̀ dáadáa nípa", bullets: ["Ìmeèlì, ìfiránṣẹ́ orí ìkànnì àjọlò, àlàyé ọjà", "Yíyí àkọsílẹ̀ padà sí ètò", "Àkópọ̀ àti wíwá èrò tuntun"] },
            { title: "Kì Í ṢE", bullets: ["Akáùntáǹtì tàbí agbẹjọ́rò rẹ", "Ẹni tí ó mọ iye owó tàbí oníbàárà rẹ àyàfi tí o bá sọ", "Ẹni tí ó máa ń tọ̀nà nígbà gbogbo, kódà tí ó bá dún bí ó dá a lójú"] }
          ],
          tryIt: "Kọ nǹkan mẹ́ta sílẹ̀ tí o ṣe fún òwò rẹ ní ọ̀sẹ̀ tó kọjá tí ó jẹ mọ́ kíkọ̀wé, ṣíṣètò tàbí ṣíṣàlàyé. Fa òrùka yí èyí tí ó gbà ọ́ ní àkókò jù lọ ká.",
          youCanNow: "sọ ohun tí olùrànlọ́wọ́ AI lè ṣe fún òwò, àti ìdí tí o fi ṣì ń ṣàyẹ̀wò ohun gbogbo kí ó tó jáde.",
          quickCheck: [
            { objective: "O1", q: "Kí ni olùrànlọ́wọ́ AI nílò lọ́wọ́ rẹ láti kọ̀wé nípa òwò rẹ?", options: ["Iye owó, àkókò iṣẹ́ àti ìsọfúnni gidi rẹ", "Kò nílò nǹkan kan; ó ti mọ òwò rẹ tẹ́lẹ̀", "Ọ̀rọ̀ aṣínà báńkì rẹ", "Ètò tí a ń sanwó fún"], answer: 0, why: "AI kò mọ òwò rẹ àyàfi tí o bá sọ fún un." },
            { objective: "O1", q: "AI kọ ìwé ìpolówó fún ṣọ́ọ̀bù irun rẹ. Kí ni o máa ṣe kí o tó tẹ̀ ẹ́ jáde?", options: ["Tẹ̀ ẹ́ jáde lẹ́sẹ̀kẹsẹ̀", "Kà á kí o sì ṣàyẹ̀wò rẹ̀, nítorí pé orúkọ rẹ ló máa jáde lé e lórí", "Jẹ́ kí AI tẹ̀ ẹ́ jáde", "Kọ́kọ́ fi ránṣẹ́ sí àwọn oníbàárà"], answer: 1, why: "Olówó òwò ló ń dáhùn fún ohunkóhun tí orúkọ òwò náà wà lórí rẹ̀." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Wíwá àwọn iṣẹ́ tí AI lè mú yára",
          minutes: 5,
          goal: "Kọ àwọn iṣẹ́ inú ọ̀sẹ̀ rẹ tí ó dára fún AI sílẹ̀, àti àwọn tí kò dára fún un.",
          text: [
            "Iṣẹ́ àkọ́kọ́ tí ó dára jù lọ fún AI ni èyí tí o ń tún ṣe, tí ó jẹ mọ́ ọ̀rọ̀, tí ó sì rọrùn láti rí àṣìṣe rẹ̀ kí ẹnikẹ́ni tó rí i. Àpẹẹrẹ: dídáhùn àwọn ìbéèrè tí àwọn oníbàárà máa ń béèrè, kíkọ ìfiránṣẹ́ ọ̀sẹ̀-ọ̀sẹ̀, kíkọ àkọ́pẹrẹ ìwé ìpolówó, ṣíṣe àkọsílẹ̀ àyẹ̀wò fún olùrànlọ́wọ́ tuntun, tàbí ṣíṣe àkópọ̀ ìmeèlì gígùn láti ọ̀dọ̀ olùpèsè ọjà.",
            "Àwọn iṣẹ́ tí KÒ dára láti fi lé AI lọ́wọ́ nìkan: ohunkóhun tí ó ń fi owó ránṣẹ́, tí ó ń fọwọ́ sí àdéhùn, tí ó ń pinnu ọ̀rọ̀ òfin tàbí owó-orí, tàbí tí ó ń ṣèlérí fún oníbàárà láìjẹ́ pé o kọ́kọ́ kà á. AI lè ràn ọ́ lọ́wọ́ láti múra sílẹ̀, ṣùgbọ́n ìwọ lo máa ṣe ìpinnu ìkẹyìn.",
            "Ọ̀nà tó rọrùn láti pín wọn: kọ iṣẹ́ kọ̀ọ̀kan sí ìlà kan, kí o sì sàmì sí i \"AI kọ àkọ́pẹrẹ, mo ṣàyẹ̀wò\", \"AI ràn mí lọ́wọ́ láti ronú\" tàbí \"Mo máa ṣe é fúnra mi\"."
          ],
          steps: ["Kọ iṣẹ́ mẹ́wàá tí o ṣe ní ọ̀sẹ̀ méjì tó kọjá sílẹ̀.", "Sàmì sí ọ̀kọ̀ọ̀kan: AI kọ àkọ́pẹrẹ / AI ràn mí lọ́wọ́ láti ronú / Mo máa ṣe é fúnra mi.", "Yan iṣẹ́ \"AI kọ àkọ́pẹrẹ\" tí ó ń gba àkókò rẹ jù lọ.", "Èyí ni iṣẹ́ AI àkọ́kọ́ rẹ."],
          words: [["Iṣẹ́ àtúnṣe", "iṣẹ́ tí o ń ṣe léraléra, bíi dídáhùn ìbéèrè kan náà tí àwọn oníbàárà máa ń béèrè."]],
          slides: [
            { title: "Iṣẹ́ AI àkọ́kọ́ tí ó dára", bullets: ["O máa ń tún wọn ṣe", "Ọ̀rọ̀ ni ó pọ̀ jù nínú wọn", "Ó rọrùn láti rí àṣìṣe kí ẹnikẹ́ni tó rí i"] },
            { title: "Àpẹẹrẹ", bullets: ["Ìdáhùn sí ìbéèrè tí oníbàárà máa ń béèrè", "Ìfiránṣẹ́ ọ̀sẹ̀-ọ̀sẹ̀ tàbí ìwé ìpolówó", "Àkọsílẹ̀ àyẹ̀wò fún olùrànlọ́wọ́ tuntun"] },
            { title: "Ṣe é fúnra rẹ", bullets: ["Fífi owó ránṣẹ́", "Fífọwọ́ sí àdéhùn, ìpinnu owó-orí àti òfin", "Ìlérí fún oníbàárà tí o kò tíì kà"] },
            { title: "Pín àwọn iṣẹ́ rẹ", bullets: ["AI kọ àkọ́pẹrẹ, mo ṣàyẹ̀wò", "AI ràn mí lọ́wọ́ láti ronú", "Mo máa ṣe é fúnra mi"] }
          ],
          tryIt: "Kọ iṣẹ́ mẹ́wàá rẹ sílẹ̀ kí o sì pín wọn sí ẹgbẹ́ mẹ́ta. Yan iṣẹ́ \"AI kọ àkọ́pẹrẹ, mo ṣàyẹ̀wò\" kan tí o máa lò fún ìyókù ẹ̀kọ́ yìí.",
          youCanNow: "pín àwọn iṣẹ́ òwò rẹ kí o sì yan iṣẹ́ àkọ́kọ́ kan tí kò léwu, tí ó sì wúlò fún AI.",
          quickCheck: [
            { objective: "O2", q: "Kí ló mú kí iṣẹ́ kan dára gẹ́gẹ́ bí iṣẹ́ àkọ́kọ́ fún AI?", options: ["Ó ń gbé owó", "Ó nílò ìfọwọ́sí", "Ó ń tún ṣe, ọ̀rọ̀ ló pọ̀ jù nínú rẹ̀, ó sì rọrùn láti ṣàyẹ̀wò", "Ó ní ìsọfúnni àdáni oníbàárà"], answer: 2, why: "Iṣẹ́ kíkọ̀wé tí o ń tún ṣe, tí ó rọrùn láti ṣàyẹ̀wò, kò léwu, ó sì ń ṣe àǹfààní." },
            { objective: "O2", q: "Iṣẹ́ kan nínú àkọsílẹ̀ rẹ ni fífọwọ́ sí ìsanwó fún olùpèsè ọjà. Ẹgbẹ́ wo ni o máa fi sí?", options: ["AI kọ àkọ́pẹrẹ, mo ṣàyẹ̀wò", "AI ṣe é nìkan", "AI ràn mí lọ́wọ́ láti ronú", "Mo máa ṣe é fúnra mi"], answer: 3, why: "Ìpinnu owó wà lọ́wọ́ olówó òwò." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kíkọ prompt òwò tó yé",
          minutes: 5,
          goal: "Kọ prompt òwò onípá mẹ́ta tí ó máa mú àkọ́pẹrẹ tó wúlò wá ní ìgbà àkọ́kọ́.",
          text: [
            "Ohun tí o tẹ̀ sí olùrànlọ́wọ́ AI ni a ń pè ní prompt. Prompt òwò ń ṣiṣẹ́ jù lọ pẹ̀lú apá mẹ́ta: iṣẹ́ náà, ipò òwò rẹ, àti ìrísí tí o fẹ́.",
            "Àpẹẹrẹ: \"Kọ ìmeèlì ìkíni káàbọ̀ kúkúrú fún àwọn oníbàárà tuntun iṣẹ́ ìmọ́tótó ilé mi ní Atlanta. A ń fọ ilé lẹ́ẹ̀kan ní ọ̀sẹ̀ méjì, àwọn oníbàárà sì lè fi ọ̀rọ̀ ránṣẹ́ sí wa láti yí ọjọ́ padà. Jẹ́ kí ó ní ọ̀rẹ́, kí ó má ju ọ̀rọ̀ 120 lọ, kí ó sì ní àkọlé (subject) tó ṣe kedere.\"",
            "Prompt aláìlágbára bíi \"kọ ìmeèlì\" ń mú olùrànlọ́wọ́ náà méfò. Kò mọ òwò rẹ, oníbàárà rẹ tàbí ohùn rẹ, nítorí náà àkọ́pẹrẹ náà máa jẹ́ gbogbogbò. Má ṣe fi orúkọ oníbàárà, nọ́mbà fóònù, nọ́mbà káàdì tàbí ọ̀rọ̀ aṣínà sínú prompt; o lè fi wọ́n kún un fúnra rẹ lẹ́yìn náà."
          ],
          steps: ["Iṣẹ́: sọ pàtó ohun tí o fẹ́ kí ó kọ tàbí ṣètò.", "Ipò: ohun tí o ń tà, ta ni oníbàárà, ibi tí o wà, ohùn rẹ.", "Ìrísí: gígùn, àkọsílẹ̀ tàbí ìpínrọ̀, àkọlé, ìpele kíkàwé.", "Ka prompt náà láti wá ìsọfúnni àdáni, kí o sì yọ wọ́n kúrò kí o tó fi ránṣẹ́."],
          words: [["Prompt", "ohun tí o tẹ̀ tàbí sọ sí olùrànlọ́wọ́ AI láti béèrè nǹkan."], ["Ipò (context)", "àwọn òtítọ́ ìpìlẹ̀ tí AI nílò, bí ohun tí o ń tà àti àwọn tí o ń tà fún."]],
          slides: [
            { title: "Apá mẹ́ta prompt òwò", bullets: ["1. Iṣẹ́: ohun tí o fẹ́", "2. Ipò: òwò rẹ àti oníbàárà rẹ", "3. Ìrísí: gígùn, ọ̀nà kíkọ, ètò"] },
            { title: "Aláìlágbára àti èyí tó yé", bullets: ["Aláìlágbára: \"kọ ìmeèlì\"", "Èyí tó yé: ìmeèlì ìkíni káàbọ̀, iṣẹ́ ìmọ́tótó, Atlanta,", "ní ọ̀rẹ́, kò ju ọ̀rọ̀ 120 lọ, pẹ̀lú àkọlé"] },
            { title: "Má ṣe fi wọ́n sínú prompt", bullets: ["Orúkọ oníbàárà àti nọ́mbà fóònù", "Nọ́mbà káàdì àti báńkì", "Ọ̀rọ̀ aṣínà"] }
          ],
          tryIt: "Kọ prompt onípá mẹ́ta fún iṣẹ́ tí o yàn ní Ẹ̀kọ́ 2. Fi ránṣẹ́ sí olùrànlọ́wọ́ AI ọ̀fẹ́ kí o sì fi àkọ́pẹrẹ àkọ́kọ́ pamọ́.",
          youCanNow: "kọ prompt òwò tí ó ní iṣẹ́, ipò àti ìrísí, kí o sì fi ìsọfúnni àdáni sílẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Apá wo nínú prompt òwò ni ìrísí?", options: ["\"Kò ju ọ̀rọ̀ 100 lọ, pẹ̀lú àkọlé\"", "\"Kọ ìmeèlì ìkíni káàbọ̀\"", "\"A jẹ́ ṣọ́ọ̀bù ìtọ́jú ẹranko ọ̀sìn ní Phoenix\"", "\"O ṣé fún ìrànlọ́wọ́ rẹ\""], answer: 0, why: "Ìrísí ń sọ bí o ṣe fẹ́ ìdáhùn: gígùn, ètò tàbí ọ̀nà kíkọ." },
            { objective: "O3", q: "Prompt rẹ sọ \"kọ ìfiránṣẹ́\" nìkan. Kí ni o máa fi kún un?", options: ["Kò sí nǹkan míì", "Òwò rẹ, àwọn oníbàárà rẹ, àti bí ó ṣe gùn tó àti ọ̀nà tí o fẹ́ kí ó gbà", "Àkọsílẹ̀ àwọn oníbàárà rẹ", "Iye owó tí ó wà ní báńkì rẹ"], answer: 1, why: "Ipò àti ìrísí ń sọ ìbéèrè tí kò ṣe kedere di àkọ́pẹrẹ tó wúlò." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ohun tí AI lè ṣe fún òwò rẹ",
        questions: [
          { objective: "O1", q: "Kí ni ọ̀nà tí ó dára jù lọ láti ronú nípa olùrànlọ́wọ́ AI nínú òwò rẹ?", options: ["Akáùntáǹtì rẹ", "Ohun tí ó rọ́pò ìdájọ́ rẹ", "Olùrànlọ́wọ́ tí ó yára kọ àkọ́pẹrẹ àkọ́kọ́, tí o máa ṣàyẹ̀wò", "Oníbàárà kan"], answer: 2, why: "AI ń yára kọ àkọ́pẹrẹ, ṣùgbọ́n ìwọ lo máa ṣàyẹ̀wò, tí o sì máa pinnu ohun tí ó máa jáde." },
          { objective: "O2", q: "Iṣẹ́ wo ni ó dára láti kọ́kọ́ fún olùrànlọ́wọ́ AI?", options: ["Kíkọ àkọ́pẹrẹ ìfiránṣẹ́ ọ̀sẹ̀-ọ̀sẹ̀ tí o máa kọ́kọ́ kà", "Sísan owó fún olùpèsè ọjà", "Fífọwọ́ sí ìwé ìyálé", "Yíyan ọ̀nà tí o máa gbà san owó-orí"], answer: 0, why: "Ó ń tún ṣe, ọ̀rọ̀ ló pọ̀ jù nínú rẹ̀, ó sì rọrùn láti rí àṣìṣe kí ẹnikẹ́ni tó rí i." },
          { objective: "O3", q: "Èwo ni prompt òwò onípá mẹ́ta?", options: ["\"kọ ìmeèlì\"", "\"ràn mí lọ́wọ́\"", "\"nǹkan òwò\"", "\"Ìmeèlì ìkíni káàbọ̀ fún àwọn oníbàárà ìmọ́tótó tuntun ní Atlanta; a ń fọ ilé lẹ́ẹ̀kan ní ọ̀sẹ̀ méjì; ní ọ̀rẹ́, kò ju ọ̀rọ̀ 120 lọ, pẹ̀lú àkọlé.\""], answer: 3, why: "Ó fún un ní iṣẹ́ náà, ipò òwò àti ìrísí." },
          { objective: "O6", q: "Kí ni o gbọ́dọ̀ fi sílẹ̀ kúrò nínú prompt?", options: ["Irú òwò rẹ", "Nọ́mbà káàdì oníbàárà kan", "Ohùn tí o fẹ́", "Gígùn tí o fẹ́"], answer: 1, why: "Nọ́mbà káàdì àti àwọn ìsọfúnni àdáni míì kò gbọ́dọ̀ wọ inú ìjíròrò AI láé." },
          { objective: "O1", q: "Àkọ́pẹrẹ AI kan ní orúkọ òwò rẹ lórí. Ta ló ń dáhùn fún un?", options: ["Ilé-iṣẹ́ AI náà", "Ìwọ, olówó òwò", "Kò sí ẹnìkan", "Oníbàárà"], answer: 1, why: "Ìwọ lo ń pinnu ohun tí ó máa jáde pẹ̀lú orúkọ òwò rẹ lórí rẹ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Lílo AI láìléwu àti dáadáa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mímú àkọ́pẹrẹ dára sí i pẹ̀lú ìbéèrè àtẹ̀lé",
          minutes: 4,
          goal: "Yí àkọ́pẹrẹ àkọ́kọ́ padà sí ẹ̀dà tí o máa lò gan-an, pẹ̀lú ìbéèrè àtẹ̀lé.",
          text: [
            "Ìdáhùn àkọ́kọ́ jẹ́ àkọ́pẹrẹ. Olùrànlọ́wọ́ náà ń rántí àwọn ọ̀rọ̀ tí ó ti kọjá nínú ìjíròrò kan náà, nítorí náà o lè ní kí ó yí nǹkan kan padà lẹ́ẹ̀kan.",
            "Ìbéèrè àtẹ̀lé tó wúlò fún kíkọ̀wé òwò: \"Jẹ́ kí ó dún bí òwò kékeré àdúgbò.\" \"Gé e kù sí ọ̀rọ̀ 80.\" \"Fi ìgbésẹ̀ tó kàn tó ṣe kedere kún un fún oníbàárà.\" \"Fún mi ní àkọlé mẹ́ta láti yàn nínú rẹ̀.\" \"Kọ ọ́ ní ìpele kíkàwé tó rọrùn.\"",
            "Fi àwọn òtítọ́ tí ìwọ nìkan mọ̀ kún un: àkókò iṣẹ́ gidi rẹ, iye owó gidi àti òfin gidi òwò rẹ. Lẹ́yìn náà, kà á sókè. Tí kò bá dún bí ìwọ, béèrè ìyípadà tàbí tún un ṣe fúnra rẹ."
          ],
          steps: ["Ka àkọ́pẹrẹ àkọ́kọ́.", "Yan nǹkan kan tí o fẹ́ yí padà jù lọ.", "Béèrè ìyípadà yẹn.", "Fi àwọn òtítọ́ gidi rẹ kún un.", "Kà á sókè kí o sì tún ṣe tí ó bá yẹ."],
          words: [["Ìbéèrè àtẹ̀lé", "ìbéèrè kejì nínú ìjíròrò kan náà tí ó ń yí ìdáhùn padà tàbí tí ó ń kọ́ lé e lórí."], ["Ìpè sí ìṣe (call to action)", "ìgbésẹ̀ tó kàn tó ṣe kedere tí o fẹ́ kí oníbàárà gbé, bíi \"Fi ọ̀rọ̀ ránṣẹ́ sí wa láti gba àyè\"."]],
          slides: [
            { title: "Ìdáhùn àkọ́kọ́ jẹ́ àkọ́pẹrẹ", bullets: ["Béèrè ìyípadà kan lẹ́ẹ̀kan", "Ìjíròrò náà ń rántí ohun tí o sọ"] },
            { title: "Ìbéèrè àtẹ̀lé fún òwò", bullets: ["\"Jẹ́ kí ó dún bí òwò kékeré àdúgbò.\"", "\"Gé e kù sí ọ̀rọ̀ 80.\"", "\"Fi ìgbésẹ̀ tó kàn tó ṣe kedere kún un fún oníbàárà.\""] },
            { title: "Sọ ọ́ di tìrẹ", bullets: ["Fi àkókò iṣẹ́, iye owó àti òfin gidi rẹ kún un", "Kà á sókè", "Tún un ṣe títí yóò fi dún bí ìwọ"] }
          ],
          tryIt: "Mú àkọ́pẹrẹ rẹ láti Ẹ̀kọ́ 3. Béèrè ìyípadà méjì, ọ̀kan lẹ́ẹ̀kan, lẹ́yìn náà fi ìsọfúnni gidi tìrẹ kún un. Fi ẹ̀dà àkọ́kọ́ wé ẹ̀dà ìkẹyìn.",
          youCanNow: "mú àkọ́pẹrẹ AI dára sí i pẹ̀lú ìbéèrè àtẹ̀lé, kí o sì jẹ́ kí ó dún bí òwò rẹ.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ìbéèrè àtẹ̀lé?", options: ["Ìjíròrò tuntun nípa nǹkan míì", "Ìránnilétí ìsanwó", "Ìbéèrè kejì nínú ìjíròrò kan náà tí ó ń yí ìdáhùn padà", "Èrò oníbàárà nípa òwò"], answer: 2, why: "Ìbéèrè àtẹ̀lé ń mú àkọ́pẹrẹ tí o ti ní dára sí i." },
            { objective: "O4", q: "Àkọ́pẹrẹ náà dára ṣùgbọ́n ó gùn jù. Kí ni o máa béèrè tẹ̀lé e?", options: ["Bẹ̀rẹ̀ ìjíròrò tuntun", "Béèrè ẹ̀dà márùn-ún míì lẹ́ẹ̀kan náà", "Gbà á bí ó ṣe rí", "\"Jẹ́ kí ó kúrú, kí ó má ju ọ̀rọ̀ 80 lọ\""], answer: 3, why: "Ìyípadà kan tó ṣe kedere lẹ́ẹ̀kan ń mú àkọ́pẹrẹ dára sí i." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣàyẹ̀wò òtítọ́, nọ́mbà àti ọ̀rọ̀ ìpolówó",
          minutes: 5,
          goal: "Ṣàyẹ̀wò àkọ́pẹrẹ AI fún òtítọ́ tí kò tọ́, nọ́mbà tí kò tọ́ àti ìlérí tí o kò lè mú ṣẹ.",
          text: [
            "AI lè hùmọ̀ nǹkan: iye owó tí o kò fi lélẹ̀ rí, òfin tí kò sí, àpapọ̀ tí kò tọ́, tàbí ọ̀rọ̀ bíi \"èyí tí ó dára jù lọ nínú ìlú\" tí o kò lè fi ẹ̀rí hàn. Híhùmọ̀ nǹkan báyìí ni a máa ń pè ní hallucination nígbà míì.",
            "Kí ohunkóhun tó dé ọ̀dọ̀ oníbàárà, ṣàyẹ̀wò nǹkan mẹ́ta. Òtítọ́: àkókò iṣẹ́, iye owó, àdírẹ́sì, òfin òwò. Nọ́mbà: ṣé àpapọ̀ àti ìdá-ọgọ́rùn-ún tọ̀nà? Ṣe ìṣirò náà fúnra rẹ tàbí nínú spreadsheet. Ọ̀rọ̀ ìpolówó: ṣé o lè fi ẹ̀rí hàn? Ní United States, FTC sọ pé ìpolówó gbọ́dọ̀ jẹ́ òótọ́, kò gbọ́dọ̀ ṣini lọ́nà, ó sì gbọ́dọ̀ ní ẹ̀rí lẹ́yìn rẹ̀.",
            "Fún ìbéèrè owó-orí, òfin, ìwé-àṣẹ tàbí owó, lo AI láti lóye àwọn ọ̀rọ̀ náà nìkan, lẹ́yìn náà jẹ́rìí rẹ̀ pẹ̀lú orísun ìjọba (tí ó sábà máa ń jẹ́ ojú-òpó .gov) tàbí akọ́ṣẹ́mọṣẹ́ bí akáùntáǹtì tàbí agbẹjọ́rò."
          ],
          steps: ["Sàmì sí gbogbo òtítọ́, nọ́mbà àti ọ̀rọ̀ ìpolówó inú àkọ́pẹrẹ náà.", "Ṣàyẹ̀wò òtítọ́ pẹ̀lú àkọsílẹ̀ tìrẹ.", "Tún ìṣirò èyíkéyìí ṣe fúnra rẹ.", "Yọ ọ̀rọ̀ ìpolówó èyíkéyìí tí o kò lè fi ẹ̀rí hàn kúrò, tàbí rọ̀ ọ́ sílẹ̀.", "Jẹ́rìí ọ̀rọ̀ owó-orí, òfin tàbí ìwé-àṣẹ pẹ̀lú orísun ìjọba tàbí akọ́ṣẹ́mọṣẹ́."],
          words: [["Hallucination", "nígbà tí AI bá kọ nǹkan tí ó dún bí òótọ́ ṣùgbọ́n tí ó jẹ́ àhesọ."], ["Ọ̀rọ̀ ìpolówó (claim)", "nǹkan tí òwò rẹ sọ pé ó jẹ́ òótọ́, bíi \"iṣẹ́ ní ọjọ́ kan náà\"."], ["FTC", "Federal Trade Commission, àjọ ìjọba US tí ó ń mú òfin òtítọ́ nínú ìpolówó ṣẹ."]],
          slides: [
            { title: "AI lè hùmọ̀ nǹkan", bullets: ["Iye owó tí o kò fi lélẹ̀ rí", "Òfin tí kò sí", "Àpapọ̀ tí kò tọ́"] },
            { title: "Ṣàyẹ̀wò nǹkan mẹ́ta", bullets: ["Òtítọ́: àkókò iṣẹ́, iye owó, òfin òwò", "Nọ́mbà: tún ìṣirò ṣe", "Ọ̀rọ̀ ìpolówó: ṣé o lè fi ẹ̀rí hàn?"] },
            { title: "Òtítọ́ nínú ìpolówó", bullets: ["FTC: ìpolówó gbọ́dọ̀ jẹ́ òótọ́, kò sì gbọ́dọ̀ ṣini lọ́nà", "Ọ̀rọ̀ ìpolówó nílò ẹ̀rí lẹ́yìn rẹ̀"] },
            { title: "Owó-orí, òfin, ìwé-àṣẹ", bullets: ["Lo AI láti lóye àwọn ọ̀rọ̀ náà", "Jẹ́rìí rẹ̀ lórí ojú-òpó .gov ti ìjọba", "Tàbí béèrè lọ́wọ́ akáùntáǹtì tàbí agbẹjọ́rò"] }
          ],
          sources: [{ name: "FTC: Ìpìlẹ̀ Ìpolówó àti Ìtajà (Advertising and Marketing Basics)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Sàmì sí gbogbo òtítọ́, nọ́mbà àti ọ̀rọ̀ ìpolówó inú àkọ́pẹrẹ tí o ti mú dára sí i. Ṣàyẹ̀wò ọ̀kọ̀ọ̀kan, tún èyí tí kò tọ́ ṣe, kí o sì yọ ọ̀rọ̀ ìpolówó èyíkéyìí tí o kò lè fi ẹ̀rí hàn kúrò.",
          youCanNow: "ṣàyẹ̀wò àkọ́pẹrẹ AI fún òtítọ́ tí kò tọ́, nọ́mbà tí kò tọ́ àti ọ̀rọ̀ ìpolówó tí o kò lè fi ẹ̀rí tì lẹ́yìn.",
          quickCheck: [
            { objective: "O5", q: "Kí ni hallucination AI?", options: ["Nǹkan tí ó dún bí òótọ́ ṣùgbọ́n tí ó jẹ́ àhesọ", "Irú ìpolówó kan", "Íńtánẹ́ẹ̀tì tí ó lọ́ra", "Ẹ̀sùn oníbàárà"], answer: 0, why: "AI lè kọ òtítọ́ àhesọ tí ó dún bí ó dá a lójú." },
            { objective: "O5", q: "Àkọ́pẹrẹ náà sọ pé \"ipò kìíní nínú ìlú\". O kò ní ẹ̀rí. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀; ó dún dáadáa", "Yọ ọ́ kúrò tàbí yí i padà sí nǹkan tí ó jẹ́ òótọ́", "Fi \"bóyá\" kún un", "Béèrè lọ́wọ́ AI bóyá òótọ́ ni"], answer: 1, why: "Ọ̀rọ̀ ìpolówó gbọ́dọ̀ jẹ́ òótọ́ kí ó sì ní ẹ̀rí lẹ́yìn rẹ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dídáàbò bo ìsọfúnni oníbàárà àti ti òwò",
          minutes: 5,
          goal: "Lo AI fún iṣẹ́ òwò láìfi ìsọfúnni àdáni oníbàárà tàbí ti owó hàn.",
          text: [
            "Ilé-iṣẹ́ tí ó ni ìjíròrò AI lè fi ohun tí o tẹ̀ sínú rẹ̀ pamọ́, àti lórí àwọn ètò ọ̀fẹ́ kan, wọ́n lè lò ó láti mú AI wọn dára sí i. Ka ètò ìpamọ́ (privacy settings) irinṣẹ́ náà, kí o sì rò pé ẹlòmíì lè rí ohunkóhun tí o bá tẹ̀.",
            "Má ṣe tẹ àwọn nǹkan wọ̀nyí sínú ìjíròrò AI láé: orúkọ oníbàárà pẹ̀lú nọ́mbà fóònù tàbí àdírẹ́sì, nọ́mbà káàdì tàbí báńkì, ọ̀rọ̀ aṣínà, nọ́mbà Social Security tàbí nọ́mbà owó-orí, tàbí ìsọfúnni àdáni nípa ìlera. Lo àmì ààyè bíi \"[orúkọ oníbàárà]\" kí o sì fi ìsọfúnni gidi kún un fúnra rẹ lẹ́yìn náà.",
            "Ṣọ́ra fún jìbìtì tí ó ń lo AI láti dojú kọ àwọn òwò: ìwé ìsanwó (invoice) èké, ìmeèlì tí ó ń fara wé ọ̀nà kíkọ olùpèsè ọjà, àti ìpè pẹ̀lú ohùn tí ó dún bí ẹnìkan tí o mọ̀ tí ó ń béèrè ìsanwó kánjúkánjú. Kí o tó sanwó, pe padà sí nọ́mbà tí o ti mọ̀ tẹ́lẹ̀ pé ó jẹ́ òótọ́."
          ],
          steps: ["Kí o tó fi prompt ránṣẹ́, kà á láti wá ìsọfúnni àdáni.", "Fi àmì ààyè bíi \"[orúkọ oníbàárà]\" rọ́pò wọn.", "Ṣàyẹ̀wò ètò ìpamọ́ tàbí ètò ìsọfúnni irinṣẹ́ náà.", "Jẹ́rìí ìbéèrè ìsanwó kánjúkánjú èyíkéyìí nípa pípe nọ́mbà tí o ti mọ̀ tẹ́lẹ̀."],
          words: [["Àmì ààyè (placeholder)", "ohun tí ó dúró dípò nǹkan, bíi \"[orúkọ oníbàárà]\", tí o máa fi ìsọfúnni gidi rọ́pò lẹ́yìn náà, lóde ìjíròrò AI."], ["Jìbìtì invoice", "ìwé ìsanwó èké tí a ṣe kí ó dà bí ẹni pé ó wá láti ọ̀dọ̀ olùpèsè ọjà gidi."]],
          slides: [
            { title: "Rò pé ẹlòmíì lè rí i", bullets: ["Wọ́n lè fi ìjíròrò pamọ́", "Ètò ọ̀fẹ́ lè lo ìjíròrò láti mú AI dára sí i", "Ṣàyẹ̀wò ètò ìpamọ́"] },
            { title: "Má ṣe tẹ̀ wọ́n sínú AI láé", bullets: ["Nọ́mbà fóònù àti àdírẹ́sì oníbàárà", "Nọ́mbà káàdì, báńkì àti nọ́mbà owó-orí", "Ọ̀rọ̀ aṣínà àti ìsọfúnni ìlera"] },
            { title: "Lo àmì ààyè", bullets: ["\"[orúkọ oníbàárà]\", \"[àpapọ̀ owó ọjà]\"", "Fi ìsọfúnni gidi kún un fúnra rẹ lẹ́yìn náà"] },
            { title: "Jìbìtì tí ó ń dojú kọ òwò", bullets: ["Invoice èké tí ó dà bí òótọ́", "Ìpè ìsanwó kánjúkánjú pẹ̀lú ohùn tí o mọ̀", "Pe padà sí nọ́mbà tí o mọ̀"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí iṣẹ́ òwò tí o yàn. Rí i dájú pé prompt àti ẹ̀dà ìkẹyìn kò ní ìsọfúnni àdáni oníbàárà tàbí ti owó, ṣàyẹ̀wò gbogbo òtítọ́, nọ́mbà àti ọ̀rọ̀ ìpolówó, kí o sì fi í pamọ́ kí ó ṣe tán fún lílò.",
          youCanNow: "lo AI fún iṣẹ́ òwò gidi nígbà tí o ń dáàbò bo àwọn oníbàárà rẹ, owó rẹ àti orúkọ rẹ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni àmì ààyè nínú prompt?", options: ["Nọ́mbà fóònù gidi oníbàárà", "Ọ̀rọ̀ aṣínà", "Àmì bíi [orúkọ oníbàárà] dípò ìsọfúnni gidi", "Ojú-ìwé òfìfo"], answer: 2, why: "Àmì ààyè ń jẹ́ kí o rí ìrànlọ́wọ́ láìfi ìsọfúnni àdáni hàn." },
            { objective: "O6", q: "Ọ̀rọ̀ kan láti ọ̀dọ̀ \"báńkì\" rẹ ní kí o fi nọ́mbà àkáǹtì rẹ ránṣẹ́ padà láti jẹ́rìí rẹ̀. Kí ni o máa ṣe?", options: ["Fi nọ́mbà náà ránṣẹ́ padà", "Ní kí AI dáhùn fún ọ", "Fi í ránṣẹ́ sí àwọn oníbàárà", "Kàn sí báńkì náà nípa nọ́mbà tí o ti mọ̀ tẹ́lẹ̀"], answer: 3, why: "Lo ọ̀nà ìkànsí tí o ti gbẹ́kẹ̀lé tẹ́lẹ̀, kì í ṣe èyí tí ó wà nínú ọ̀rọ̀ kánjúkánjú." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Lílo AI láìléwu àti dáadáa",
        questions: [
          { objective: "O4", q: "Àkọ́pẹrẹ AI náà dún bí ìwé ìjọba jù fún ṣọ́ọ̀bù kékeré rẹ. Kí ni o máa ṣe?", options: ["Lò ó bẹ́ẹ̀", "Pa app AI náà rẹ́", "Fi í ránṣẹ́ sí agbẹjọ́rò", "Béèrè pé: \"Jẹ́ kí ó dún bí òwò kékeré àdúgbò.\""], answer: 3, why: "Ìbéèrè àtẹ̀lé ń ní kí olùrànlọ́wọ́ náà yí ohùn rẹ̀ padà." },
          { objective: "O5", q: "Àkọ́pẹrẹ AI kan sọ pé \"a ṣí títí di aago 9 alẹ́\" ṣùgbọ́n o máa ń tì ní aago 7. Kí ni èyí fi hàn?", options: ["AI lè hùmọ̀ òtítọ́, nítorí náà o máa ṣàyẹ̀wò wọn", "AI máa ń tọ̀nà nígbà gbogbo", "Àkókò iṣẹ́ rẹ ni kò tọ́", "Oníbàárà kò ní kíyè sí i"], answer: 0, why: "AI lè hùmọ̀ òtítọ́; ìwọ lo máa ṣàyẹ̀wò wọn pẹ̀lú àkọsílẹ̀ tìrẹ." },
          { objective: "O5", q: "Àkọ́pẹrẹ náà sọ pé \"èyí tí ó wọ́n jù lọ nínú ìpínlẹ̀\". O kò tíì fi iye owó wéra. Kí ni o yẹ kí o ṣe?", options: ["Fi í sílẹ̀, ó dún dáadáa", "Jẹ́ kí ó tóbi sí i", "Yọ ọ́ kúrò tàbí yí i padà sí nǹkan tí o lè fi ẹ̀rí hàn", "Fi \"a ṣe ìdánilójú\" kún un"], answer: 2, why: "Ìpolówó gbọ́dọ̀ jẹ́ òótọ́ kí ó sì ní ẹ̀rí lẹ́yìn rẹ̀." },
          { objective: "O6", q: "Báwo ni o ṣe yẹ kí o fi orúkọ oníbàárà sínú prompt AI?", options: ["Tẹ orúkọ kíkún àti nọ́mbà fóònù", "Tẹ nọ́mbà káàdì wọn pẹ̀lú", "Béèrè ọ̀rọ̀ aṣínà lọ́wọ́ oníbàárà", "Lo àmì ààyè bíi \"[orúkọ oníbàárà]\""], answer: 3, why: "Àmì ààyè ń pa ìsọfúnni àdáni mọ́ kúrò nínú ìjíròrò náà." },
          { objective: "O6", q: "Ìpè kánjúkánjú kan dé pẹ̀lú ohùn olùpèsè ọjà rẹ, tí ó ní kí o sanwó sí àkáǹtì tuntun lónìí. Kí ni o máa ṣe?", options: ["Sanwó lẹ́sẹ̀kẹsẹ̀", "Fi ìsọfúnni ìwọlé báńkì rẹ ránṣẹ́", "Pe olùpèsè ọjà náà padà sí nọ́mbà tí o ti mọ̀ tẹ́lẹ̀", "Fi kóòdù tí ó wà lórí fóònù rẹ dáhùn"], answer: 2, why: "AI lè fara wé ohùn; jẹ́rìí rẹ̀ lórí nọ́mbà tí o mọ̀ kí o tó sanwó." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí AI fún Àwọn Oníṣòwò",
    questions: [
      { objective: "O1", q: "Ọ̀nà tí ó dára jù lọ láti lo olùrànlọ́wọ́ AI nínú òwò rẹ ni bí:", options: ["Agbẹjọ́rò rẹ", "Olùrànlọ́wọ́ tí ó yára kọ àkọ́pẹrẹ àkọ́kọ́", "Báńkì rẹ", "Ẹni tí ó ń ṣe ìpinnu ìkẹyìn"], answer: 1, why: "Ó ń kọ àkọ́pẹrẹ; ìwọ lo máa ṣàyẹ̀wò, tí o sì máa pinnu." },
      { objective: "O1", q: "Èwo ni olùrànlọ́wọ́ AI ọ̀fẹ́ tí a mọ̀ dáadáa?", options: ["Google Gemini", "Ẹ̀rọ ìgbowó (cash register)", "Ẹ̀rọ ìtẹ̀wé", "Àpótí kan nínú spreadsheet"], answer: 0, why: "Gemini, ChatGPT àti Copilot jẹ́ olùrànlọ́wọ́ AI tí a mọ̀ dáadáa." },
      { objective: "O1", q: "Èwo nínú ìwọ̀nyí ni olùrànlọ́wọ́ AI KÒ mọ̀ àyàfi tí o bá sọ fún un?", options: ["Ohun tí ètò òwò (business plan) jẹ́", "Bí a ṣe ń kọ àkọsílẹ̀", "Iye owó gidi rẹ", "Àwọn ọ̀rọ̀ òwò tí gbogbo ènìyàn mọ̀"], answer: 2, why: "Kò mọ iye owó rẹ, àwọn oníbàárà rẹ tàbí òfin òwò rẹ àyàfi tí o bá fún un." },
      { objective: "O2", q: "Iṣẹ́ AI àkọ́kọ́ tí ó dára ni àwọn tí:", options: ["Ó ń tún ṣe, ọ̀rọ̀ ló pọ̀ jù nínú wọn, ó sì rọrùn láti ṣàyẹ̀wò", "Ó ń fi owó ránṣẹ́", "Ó ń fọwọ́ sí àdéhùn", "Ó ń pinnu ọ̀rọ̀ owó-orí rẹ"], answer: 0, why: "Wọ̀nyí kò léwu púpọ̀, wọ́n sì ń fi àkókò pamọ́." },
      { objective: "O2", q: "Iṣẹ́ wo ni o yẹ kí o ṣe fúnra rẹ?", options: ["Wíwá orúkọ fún ṣọ́ọ̀bù", "Kíkọ àkọ́pẹrẹ ìwé ìpolówó", "Ṣíṣe àkọsílẹ̀ àyẹ̀wò", "Fífọwọ́ sí ìsanwó fún olùpèsè ọjà"], answer: 3, why: "Ìpinnu owó wà lọ́wọ́ rẹ." },
      { objective: "O2", q: "Nígbà tí o bá ń pín iṣẹ́, \"AI ràn mí lọ́wọ́ láti ronú\" túmọ̀ sí:", options: ["AI ló ń ṣe ìpinnu", "O ń lo AI láti wá èrò tàbí ṣàlàyé, lẹ́yìn náà ìwọ fúnra rẹ ló ń pinnu", "O kò lo AI rí", "AI ló ń fi í ránṣẹ́ fún ọ"], answer: 1, why: "AI ń ran èrò rẹ lọ́wọ́; ìwọ lo ń pinnu." },
      { objective: "O3", q: "Apá mẹ́ta prompt òwò ni:", options: ["Orúkọ, ọ̀rọ̀ aṣínà, àdírẹ́sì", "Iṣẹ́, ipò, ìrísí", "Pẹ̀lẹ́ o, jọ̀wọ́, o ṣé", "Iye owó, owó-orí, àpapọ̀"], answer: 1, why: "Iṣẹ́, ipò àti ìrísí ń fún AI ní ohun tí ó nílò." },
      { objective: "O3", q: "Èwo ni ipò òwò?", options: ["\"Kò ju ọ̀rọ̀ 100 lọ\"", "\"Kọ ìmeèlì\"", "\"O ṣé\"", "\"A jẹ́ iṣẹ́ ìfọkọ̀ alágbèérìn ní Dallas tí ó ń sin àwọn òbí tí ọwọ́ wọn dí\""], answer: 3, why: "Ipò ń ṣàlàyé òwò rẹ àti oníbàárà rẹ." },
      { objective: "O3", q: "Èwo ni ìtọ́sọ́nà ìrísí?", options: ["\"Fún mi ní àkọsílẹ̀ kókó kúkúrú 5\"", "\"A ń ta àkàrà òyìnbó (cake)\"", "\"Akẹ́kọ̀ọ́ ni àwọn oníbàárà wa\"", "\"A wà ní Lagos\""], answer: 0, why: "Ìrísí ń sọ bí ìdáhùn ṣe yẹ kí ó rí." },
      { objective: "O4", q: "Ìbéèrè àtẹ̀lé ni:", options: ["App tuntun", "Èrò oníbàárà nípa òwò", "Ìbéèrè kejì nínú ìjíròrò kan náà tí ó ń yí ìdáhùn padà", "Irú invoice kan"], answer: 2, why: "Ìbéèrè àtẹ̀lé ń mú àkọ́pẹrẹ dára sí i ní ìgbésẹ̀-ìgbésẹ̀." },
      { objective: "O4", q: "Ìbéèrè àtẹ̀lé wo ló ń fi ìpè sí ìṣe kún un?", options: ["\"Jẹ́ kí ó gùn sí i láìnídìí.\"", "\"Yọ gbogbo ìsọfúnni kúrò.\"", "\"Fi ọ̀rọ̀ aṣínà mi kún un.\"", "\"Fi ìgbésẹ̀ tó kàn tó ṣe kedere kún un, bíi Fi ọ̀rọ̀ ránṣẹ́ sí wa láti gba àyè.\""], answer: 3, why: "Ìpè sí ìṣe ń sọ ohun tí oníbàárà máa ṣe tẹ̀lé e fún un." },
      { objective: "O4", q: "Kí ló dé tí o fi máa ka àkọ́pẹrẹ sókè?", options: ["Láti mú AI yára sí i", "Láti fi agbára bátìrì pamọ́", "Láti ṣàyẹ̀wò pé ó dún bí ìwọ", "Òfin ló pàṣẹ rẹ̀"], answer: 2, why: "Gbígbọ́ rẹ̀ ń ràn ọ́ lọ́wọ́ láti rí ohùn tí kò bá a mu àti àṣìṣe." },
      { objective: "O5", q: "\"Hallucination\" AI ni:", options: ["Ìdáhùn tí ó lọ́ra", "Nǹkan tí ó dún bí òótọ́ ṣùgbọ́n tí ó jẹ́ àhesọ", "Irú àmì òwò (logo) kan", "Ẹ̀sùn oníbàárà"], answer: 1, why: "AI lè hùmọ̀ òtítọ́ tí ó dún bí òótọ́." },
      { objective: "O5", q: "AI ṣírò àpapọ̀ àkọsílẹ̀ iye owó rẹ ní àṣìṣe. Kí ni ẹ̀kọ́ ibẹ̀?", options: ["Tún ìṣirò náà ṣe fúnra rẹ tàbí nínú spreadsheet", "Gbẹ́kẹ̀lé ìṣirò AI", "Gbé iye owó rẹ sókè", "Dá títà dúró"], answer: 0, why: "Ṣàyẹ̀wò nọ́mbà nígbà gbogbo kí o tó lò wọ́n." },
      { objective: "O5", q: "Gẹ́gẹ́ bí FTC ṣe sọ, ọ̀rọ̀ ìpolówó gbọ́dọ̀:", options: ["Pa ẹ̀rín", "Jẹ́ èyí tí AI kọ", "Jẹ́ òótọ́, kò gbọ́dọ̀ ṣini lọ́nà, kí ó sì ní ẹ̀rí", "Kúrú"], answer: 2, why: "Òfin òtítọ́ nínú ìpolówó ti FTC ló pàṣẹ èyí." },
      { objective: "O5", q: "Fún ìbéèrè owó-orí tàbí ìwé-àṣẹ, ọ̀nà tí ó dára jù lọ láti lo AI ni:", options: ["Láti lóye àwọn ọ̀rọ̀ náà kí o tó ṣàyẹ̀wò orísun ìjọba tàbí béèrè lọ́wọ́ akọ́ṣẹ́mọṣẹ́", "Láti ṣe ìpinnu ìkẹyìn", "Láti fi ìwé ránṣẹ́ fún ọ", "Láti rọ́pò akáùntáǹtì rẹ"], answer: 0, why: "Jẹ́rìí ọ̀rọ̀ owó-orí àti òfin pẹ̀lú orísun ìjọba tàbí akọ́ṣẹ́mọṣẹ́." },
      { objective: "O6", q: "Èwo ni kò gbọ́dọ̀ wọ inú ìjíròrò AI LÁÉ?", options: ["\"Jẹ́ kí ó ní ọ̀rẹ́ sí i\"", "Irú òwò rẹ", "Ohùn tí o fẹ́", "Nọ́mbà káàdì oníbàárà kan"], answer: 3, why: "Nọ́mbà káàdì jẹ́ ìsọfúnni owó àdáni." },
      { objective: "O6", q: "Àmì ààyè bíi \"[orúkọ oníbàárà]\" ń jẹ́ kí o:", options: ["Fi iye owó pamọ́ fún àwọn oníbàárà", "Rí ìrànlọ́wọ́ láìfi ìsọfúnni àdáni hàn", "Fo àyẹ̀wò", "Sanwó kíákíá"], answer: 1, why: "O máa fi ìsọfúnni gidi kún un fúnra rẹ lẹ́yìn náà." },
      { objective: "O6", q: "Lórí àwọn ètò AI ọ̀fẹ́ kan, ìjíròrò rẹ lè:", options: ["Pòórá kí o tó kà wọ́n", "Wà ní ìpamọ́, kí wọ́n sì lò ó láti mú AI dára sí i", "Lọ sọ́dọ̀ àwọn oníbàárà rẹ", "Jẹ́ títẹ̀ jáde"], answer: 1, why: "Ìdí nìyẹn tí o fi ń ṣàyẹ̀wò ètò ìpamọ́, tí o sì ń pa ìsọfúnni àdáni mọ́ kúrò." },
      { objective: "O6", q: "Ìmeèlì kan tí ó dà bí ti olùpèsè ọjà rẹ ní kí o sanwó sí àkáǹtì báńkì tuntun ní kánjúkánjú. Kí ni ìgbésẹ̀ tí ó dára jù lọ?", options: ["Sanwó báyìí", "Fi ìsọfúnni ìwọlé báńkì rẹ dáhùn", "Fi í ránṣẹ́ sí gbogbo oníbàárà", "Pe olùpèsè ọjà náà lórí nọ́mbà tí o ti mọ̀ tẹ́lẹ̀"], answer: 3, why: "Invoice èké wọ́pọ̀; jẹ́rìí rẹ̀ lórí nọ́mbà tí o mọ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 6, 8, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Prompt òwò",
        objective: "O3",
        notYet: "Prompt náà kò ṣe kedere, fún àpẹẹrẹ \"kọ ìmeèlì\".",
        meets: "Prompt náà ní iṣẹ́, ipò nípa òwò náà àti ìrísí.",
        exceeds: "Ó tún dárúkọ oníbàárà àti èrò ìlépa, àkọ́pẹrẹ àkọ́kọ́ sì ti fẹ́rẹ̀ẹ́ ṣe tán."
      },
      {
        name: "Àkọ́pẹrẹ tí a mú dára sí i",
        objective: "O4",
        notYet: "A lo àkọ́pẹrẹ àkọ́kọ́ bí ó ṣe rí.",
        meets: "A ṣe ìyípadà àtẹ̀lé méjì, ọ̀kan lẹ́ẹ̀kan, pẹ̀lú ìsọfúnni tìrẹ ti olówó òwò.",
        exceeds: "Ó lè sọ ohun tí ìyípadà kọ̀ọ̀kan tún ṣe, ẹ̀dà ìkẹyìn sì dún bí òwò náà."
      },
      {
        name: "A ṣàyẹ̀wò òtítọ́ àti ọ̀rọ̀ ìpolówó",
        objective: "O5",
        notYet: "A da iye owó, àkókò iṣẹ́, àpapọ̀ tàbí ọ̀rọ̀ ìpolówó kan kọ láìṣàyẹ̀wò rẹ̀.",
        meets: "A ṣàyẹ̀wò gbogbo òtítọ́ àti nọ́mbà; gbogbo ọ̀rọ̀ ìpolówó jẹ́ òótọ́, a sì lè fi ẹ̀rí hàn.",
        exceeds: "Ó kọ ibi tí a ti ṣàyẹ̀wò òtítọ́ kọ̀ọ̀kan sílẹ̀, a sì tún ìṣirò ṣe nínú spreadsheet."
      },
      {
        name: "A pa ìsọfúnni àdáni mọ́ kúrò",
        objective: "O6",
        notYet: "Prompt tàbí ẹ̀dà ìkẹyìn ní ìsọfúnni káàdì, báńkì tàbí ìsọfúnni àdáni oníbàárà.",
        meets: "Kò sí ìsọfúnni àdáni oníbàárà tàbí ti owó; a lo àmì ààyè níbi tí ó yẹ.",
        exceeds: "A tún ṣàyẹ̀wò ètò ìpamọ́ irinṣẹ́ AI náà fún fífi ìjíròrò pamọ́."
      },
      {
        name: "Ó ṣe tán fún lílò",
        objective: "O1",
        notYet: "Ẹ̀dà ìkẹyìn kò tíì parí tàbí a kò tíì fi í pamọ́.",
        meets: "A ti fi í pamọ́, a ti ṣàyẹ̀wò rẹ̀, ó sì ṣe tán fún iṣẹ́ tí a yàn.",
        exceeds: "A fi í pamọ́ bí àwòṣe tí olówó òwò lè tún lò nígbà míì."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn oníṣòwò tí ó parí ẹ̀kọ́ náà, tí wọ́n sì yege nínú iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn oníṣòwò tí ó lo àkọ́pẹrẹ AI fún iṣẹ́ òwò gidi láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn oníṣòwò tí ó sọ iye wákàtí tí wọ́n ń fi pamọ́ lọ́sẹ̀ lórí kíkọ̀wé àti ṣíṣètò",
      "Àwọn akẹ́kọ̀ọ́ tí ó bẹ̀rẹ̀ ẹ̀kọ́ Koach Learn míì fún oníṣòwò láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ bí ChatGPT, Microsoft Copilot tàbí Google Gemini",
      "Iye owó, àkókò iṣẹ́ àti ìsọfúnni òwò gidi rẹ fún ṣíṣàyẹ̀wò",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀ fún ẹ̀kọ́, ìdánrawò, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Nínú ìdánilẹ́kọ̀ọ́, jẹ́ kí oníṣòwò kọ̀ọ̀kan mú iṣẹ́ gidi kan wá, kí ó sì ṣiṣẹ́ lé e lórí jálẹ̀ ẹ̀kọ́ mẹ́fà náà.",
      "Rán àwọn oníṣòwò létí pé wọn kò gbọ́dọ̀ lẹ nọ́mbà káàdì, ìsọfúnni báńkì tàbí àkọsílẹ̀ oníbàárà sínú ìjíròrò AI láé.",
      "Pín àwọn oníṣòwò ní méjì-méjì láti ka àkọ́pẹrẹ ara wọn sókè, kí wọ́n sì wá ọ̀rọ̀ ìpolówó tí ó nílò ẹ̀rí.",
      "Darí ìbéèrè owó-orí àti ìwé-àṣẹ sí orísun ìjọba tàbí akọ́ṣẹ́mọṣẹ́, kì í ṣe AI.",
      "Fi rubric ṣe àmì iṣẹ́ ìkẹyìn, ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
