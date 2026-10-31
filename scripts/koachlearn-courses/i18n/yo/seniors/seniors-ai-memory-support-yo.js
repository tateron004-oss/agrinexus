"use strict";

// Koach Learn course (Yoruba translation of seniors/seniors-ai-memory-support.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Not medical advice: the course says worrying memory changes are for a doctor, and points to MedlinePlus for trusted health information.
// Voice commands stay in English inside quotes (most phone assistants do not yet understand Yoruba), with the meaning given in Yoruba.

module.exports = {
  id: "seniors-ai-memory-support-yo",
  lang: "yo",
  translationOf: "seniors-ai-memory-support",
  category: "Seniors and Technology",
  name: "AI fún Ìrànlọ́wọ́ Ìrántí",
  skills: "Kíkọ ìránnilétí àti àkọsílẹ̀ pẹ̀lú ohùn, Lílo àwòrán láti rántí nǹkan, Ṣíṣe àkọsílẹ̀ àyẹ̀wò pẹ̀lú AI, Ṣíṣe àkópọ̀ ìpàdé àti ìpè, Ṣíṣe ìlànà ìrántí ojoojúmọ́",
  outcome: "ṣètò àpò irinṣẹ́ ìrántí tó rọrùn lórí fóònù rẹ: ìránnilétí ohùn, àkọsílẹ̀ nǹkan láti rántí, àwòrán ìrántí àti àkọsílẹ̀ àyẹ̀wò tí AI ṣe, kí o sì máa lò ó lójoojúmọ́.",
  about: [
    "Gbogbo ènìyàn ló máa ń gbàgbé nǹkan: ibi tí wọ́n gbé mọ́tò sí, bóyá wọ́n ti pa iná ìdáná, ohun tí dókítà sọ. Ẹ̀kọ́ yìí wà fún àwọn àgbàlagbà, àti àwọn ẹbí tó ń ràn wọ́n lọ́wọ́, tí wọ́n fẹ́ irinṣẹ́ tó rọrùn láti máa rántí àwọn nǹkan ojoojúmọ́.",
    "O máa lo olùrànlọ́wọ́ ohùn fóònù rẹ, àkọsílẹ̀ (Notes), kámẹ́rà àti olùrànlọ́wọ́ AI ọ̀fẹ́ bí ChatGPT, Microsoft Copilot tàbí Google Gemini láti kọ ìránnilétí sílẹ̀, láti tọ́jú àkọsílẹ̀, láti ṣe àkọsílẹ̀ àyẹ̀wò, àti láti ṣe àkópọ̀ ohun tí wọ́n sọ níbi ìpàdé.",
    "Àwọn irinṣẹ́ yìí ń ran ìrántí lọ́wọ́; wọn kì í ṣàyẹ̀wò àìsàn, wọn kì í sì í wo àìsàn sàn. Tí ìyípadà nínú ìrántí bá ń da ìwọ tàbí ẹbí rẹ láàmú, bá dókítà rẹ sọ̀rọ̀. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ìdánwò ìmọ̀ wà ní òpin orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣe àpò irinṣẹ́ ìrántí rẹ: ṣètò ìránnilétí ohùn méjì tó ń tún ara wọn ṣe, bẹ̀rẹ̀ àkọsílẹ̀ \"Àwọn nǹkan láti rántí\", ya àwòrán ìrántí kan (bí ibi tí o gbé mọ́tò sí tàbí àmì orúkọ ọjà tí o nílò), béèrè lọ́wọ́ AI fún àkọsílẹ̀ àyẹ̀wò \"kí n tó jáde nílé\", kí o sì lo gbogbo rẹ̀ fún odindi ọjọ́ kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí wọ́n ń ṣàkíyèsí ìgbàgbé ojoojúmọ́, bí àkókò ìpàdé, orúkọ, ibi tí wọ́n gbé mọ́tò sí tàbí ohun tí dókítà sọ, tí wọ́n sì fẹ́ irinṣẹ́ tó rọrùn láti wà létòlétò kí wọ́n sì dá dúró fúnra wọn. Àwọn ẹbí tó ń tọ́jú wọn ń ran àwọn kan lọ́wọ́.",
    startingPoint: "Wọ́n ní smartphone, wọ́n sì ń pe ènìyàn, wọ́n ń fi ọ̀rọ̀ ránṣẹ́ (text). Ọ̀pọ̀ ń lo àkọsílẹ̀ orí ìwé tàbí orí wọn nìkan, wọn kò sì tíì lo ìránnilétí ohùn, àkọsílẹ̀ tí a pinni sókè, àwọn àkójọ àwòrán tàbí àkọsílẹ̀ àyẹ̀wò AI rí.",
    gap: "Gbígbàgbé àkókò ìpàdé, oògùn tàbí ohun tí wọ́n sọ níbi ìbẹ̀wò ń fa ìdààmú, ó sì lè kan ìlera àti ààbò. Àpò irinṣẹ́ fóònù tó rọrùn tí a ń lò lójoojúmọ́ ń ran àwọn àgbàlagbà lọ́wọ́ láti rántí sí i kí wọ́n sì dá dúró fúnra wọn, nígbà tí nọ́mbà àdáni kò sí nínú àkọsílẹ̀ àti àwòrán, tí ìyípadà ìrántí tó ń dani láàmú sì ń lọ sọ́dọ̀ dókítà.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn, gbólóhùn kúkúrú àti ìgbésẹ̀ ńlá tó rọrùn",
      "Ẹ̀rọ: smartphone tó ní olùrànlọ́wọ́ ohùn, Notes tàbí Google Keep, àti kámẹ́rà",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan láìkánjú, lẹ́yìn náà odindi ọjọ́ kan ti àṣeṣe",
      "Ìlera: ẹ̀kọ́ náà ń ran ìrántí ojoojúmọ́ lọ́wọ́; ìyípadà tó ń dani láàmú ń lọ sọ́dọ̀ dókítà",
      "Ìsọfúnni àdáni: kò sí ọ̀rọ̀ aṣínà, nọ́mbà báńkì tàbí Social Security nínú àkọsílẹ̀, àwòrán tàbí prompt AI"
    ],
    prerequisites: "Kò sí. \"AI fún Ìgbésí Ayé Ojoojúmọ́\" jẹ́ ẹ̀kọ́ míì tó máa ràn ọ́ lọ́wọ́ pẹ̀lú èyí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ní kété tí o bá rántí nǹkan tí o fẹ́ ṣe", action: "kọ ìránnilétí ohùn tó sọ ohun tí o máa ṣe àti ìgbà tí o máa ṣe é, kí o sì lo \"every\" (ní gbogbo) fún èyí tó ń tún ara rẹ̀ ṣe", standard: "kí o sì sàmì sí i pé o ti ṣe é nígbà tí o bá parí" },
    { id: "O2", condition: "Pẹ̀lú Notes tàbí Google Keep", action: "tọ́jú àkọsílẹ̀ \"Àwọn nǹkan láti rántí\" tí a pinni sókè, kí o sì máa fi kún un nípa títẹ̀ tàbí pẹ̀lú ohùn", standard: "láìsí ọ̀rọ̀ aṣínà tàbí nọ́mbà àdáni kankan nínú rẹ̀" },
    { id: "O3", condition: "Tí nǹkan kan bá wà tí o nílò láti rántí, bí ibi tí o gbé mọ́tò sí", action: "ya àwòrán ìrántí, kí o sì tún rí i nínú àwọn àwòrán tuntun rẹ tàbí nínú àkójọ àwòrán kan", standard: "láìya àwòrán káàdì tàbí ìwé àdáni" },
    { id: "O4", condition: "Tí iṣẹ́ kan bá wà tí o máa ń ṣe lọ́pọ̀ ìgbà", action: "béèrè lọ́wọ́ AI fún àkọsílẹ̀ àyẹ̀wò kúkúrú, tún un ṣe kí ó bá ayé rẹ mu, kí o sì fi sí ibi tí o máa rí i", standard: "pẹ̀lú nǹkan tí kò ju mẹ́jọ lọ, tí ó rọrùn" },
    { id: "O5", condition: "Lẹ́yìn ìpàdé tàbí ìpè pàtàkì kan", action: "yí àkọsílẹ̀ rẹ padà sí àkópọ̀ kúkúrú àti àkọsílẹ̀ ohun tí o máa ṣe pẹ̀lú ìrànlọ́wọ́ AI", standard: "láìsí ìsọfúnni àdáni nínú rẹ̀, kí o sì ṣàyẹ̀wò ohunkóhun tí kò yé ọ pẹ̀lú ọ́fíìsì náà" },
    { id: "O6", condition: "Lójoojúmọ́", action: "tẹ̀lé ìlànà ìrántí tó rọrùn ti àyẹ̀wò òwúrọ̀ àti ti ìrọ̀lẹ́", standard: "kí o sì bá dókítà rẹ sọ̀rọ̀ nípa ìyípadà ìrántí tó ń dà ọ́ láàmú" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíkọ ohun tí o nílò láti rántí sílẹ̀",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ìránnilétí ohùn ní kété tí o bá rántí",
          minutes: 5,
          goal: "Kọ ìránnilétí sílẹ̀ pẹ̀lú ohùn kí o tó gbàgbé rẹ̀.",
          text: [
            "Àkókò tó dára jù láti kọ ìránnilétí sílẹ̀ ni ní kété tí o bá rántí rẹ̀. Olùrànlọ́wọ́ ohùn fóònù rẹ (Siri lórí iPhone, Google Assistant tàbí Gemini lórí Android) ń mú èyí yára: kò sí títẹ̀, kò sí wíwá gègé.",
            "Ọ̀pọ̀ olùrànlọ́wọ́ ohùn kò tíì gbọ́ Yorùbá, nítorí náà sọ ọ́ ní Gẹ̀ẹ́sì. Sọ pé: \"Remind me to call the pharmacy tomorrow at 10 am.\" (Rán mi létí láti pe ilé oògùn ní ọ̀la ní agogo 10 òwúrọ̀.) \"Remind me to water the plants every Monday.\" (Rán mi létí láti bomi rin àwọn ewéko ní gbogbo ọjọ́ Ajé.) Lórí àwọn fóònù kan, \"Remind me to take my umbrella when I leave home\" ń ṣiṣẹ́, nítorí wọ́n lè rán ọ létí gẹ́gẹ́ bí ibi tí o wà.",
            "Nígbà tí ìránnilétí bá yọ, ṣe nǹkan náà tàbí tẹ̀ ẹ́ láti sún un síwájú (snooze). Sàmì sí i pé o ti ṣe é nígbà tí o bá parí, kí àkọsílẹ̀ rẹ lè máa mọ́."
          ],
          steps: ["Jí olùrànlọ́wọ́ ohùn rẹ.", "Sọ \"Remind me to...\" pẹ̀lú ohun tí o máa ṣe àti ìgbà.", "Lo \"every\" (ní gbogbo) fún ìránnilétí tó ń tún ara rẹ̀ ṣe.", "Nígbà tí ó bá yọ, ṣe é tàbí sún un síwájú.", "Sàmì sí i pé o ti ṣe é."],
          words: [["Snooze (sún síwájú)", "láti dá ìránnilétí dúró díẹ̀ kí ó lè padà wá lẹ́yìn ìgbà díẹ̀."], ["Ìránnilétí tó ń tún ara rẹ̀ ṣe", "ìránnilétí tó ń padà wá ní àkókò kan náà, bí ní gbogbo ọjọ́ Ajé."]],
          slides: [
            { title: "Kọ ọ́ sílẹ̀ lẹ́sẹ̀kẹsẹ̀", bullets: ["Ní kété tí o bá rántí rẹ̀", "Kò sí títẹ̀, kò sí gègé"] },
            { title: "Sọ ọ́ (ní Gẹ̀ẹ́sì)", bullets: ["\"Remind me to call the pharmacy at 10 am.\"", "\"Remind me to water plants every Monday.\""] },
            { title: "Nígbà tí ó bá yọ", bullets: ["Ṣe é, tàbí sún un síwájú", "Sàmì sí i pé o ti ṣe é"] }
          ],
          tryIt: "Ṣètò ìránnilétí méjì pẹ̀lú ohùn: ọ̀kan fún ọ̀la, àti ọ̀kan tó ń tún ara rẹ̀ ṣe ní gbogbo ọ̀sẹ̀.",
          youCanNow: "kọ ìránnilétí ẹ̀ẹ̀kan àti èyí tó ń tún ara rẹ̀ ṣe sílẹ̀ pẹ̀lú ohùn.",
          quickCheck: [
            { objective: "O1", q: "Kí ni sísún ìránnilétí síwájú (snooze) ń ṣe?", options: ["Ó ń pa á rẹ́", "Ó ń dá a dúró díẹ̀ kí ó lè padà wá", "Ó ń sàmì sí i pé o ti ṣe é", "Ó ń fi ránṣẹ́ sí ẹbí"], answer: 1, why: "Snooze ń dá ìránnilétí dúró díẹ̀; sàmì sí i pé o ti ṣe é nígbà tí o bá parí." },
            { objective: "O1", q: "Nígbà tí o ń se oúnjẹ, o rántí pé o gbọ́dọ̀ pe báńkì ní ọ̀la. Kí ni o máa ṣe?", options: ["Retí pé o máa rántí", "Kọ ọ́ sórí aṣọ ìnujú lẹ́yìn náà", "Sọ fún fóònù rẹ: \"Remind me to call the bank tomorrow at 10 am.\"", "Pe báńkì nísinsìnyí ní òru"], answer: 2, why: "Kọ ìránnilétí sílẹ̀ ní kété tí o bá rántí rẹ̀, pẹ̀lú ohùn, pẹ̀lú ohun tí o máa ṣe àti ìgbà." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Àkọsílẹ̀ àwọn nǹkan láti rántí",
          minutes: 5,
          goal: "Tọ́jú àkọsílẹ̀ \"Àwọn nǹkan láti rántí\" sórí fóònù rẹ, kí o sì máa fi kún un pẹ̀lú ohùn.",
          text: [
            "Àwọn nǹkan kan kò so mọ́ àkókò kankan: orúkọ aládùúgbò tuntun, ìwé tí ọ̀rẹ́ kan sọ pé kí o kà, ibi tí o fi kọ́kọ́rọ́ àfikún sí. Inú àkọsílẹ̀ ni irú nǹkan bẹ́ẹ̀ yẹ kí ó wà.",
            "Ṣí app Notes (tàbí Google Keep lórí ọ̀pọ̀ fóònù Android), kí o sì ṣe àkọsílẹ̀ kan tí orúkọ rẹ̀ jẹ́ \"Àwọn nǹkan láti rántí\". Pinni rẹ̀ sókè tí app rẹ bá gbà á láàyè. O lè fi kún un nípa títẹ̀, tàbí nípa títẹ gbohùngbohùn (microphone) orí kíbọ́ọ̀dù kí o sì sọ̀rọ̀.",
            "Jẹ́ kí àkọsílẹ̀ náà rọrùn: ìlà kan fún nǹkan kan, èyí tó jẹ́ tuntun jù ní òkè. Má ṣe tọ́jú ọ̀rọ̀ aṣínà, nọ́mbà báńkì tàbí nọ́mbà Social Security sínú àkọsílẹ̀ lásán láéláé."
          ],
          steps: ["Ṣí Notes tàbí Google Keep.", "Ṣe àkọsílẹ̀ tí orúkọ rẹ̀ jẹ́ \"Àwọn nǹkan láti rántí\".", "Pinni rẹ̀ sókè tí o bá lè ṣe é.", "Fi nǹkan kún un nípa títẹ̀ tàbí pẹ̀lú gbohùngbohùn kíbọ́ọ̀dù.", "Pa àwọn nọ́mbà àdáni mọ́ kúrò nínú rẹ̀."],
          words: [["App Notes", "app fún kíkọ àti fífi àkọsílẹ̀ pamọ́ sórí fóònù rẹ."], ["Pinni (pin)", "láti jẹ́ kí nǹkan kan wà ní òkè àkọsílẹ̀ kí ó lè rọrùn láti rí."]],
          slides: [
            { title: "Kò so mọ́ àkókò?", bullets: ["Orúkọ aládùúgbò", "Ìwé láti kà", "Ibi tí kọ́kọ́rọ́ àfikún wà"] },
            { title: "Ṣe àkọsílẹ̀ rẹ", bullets: ["Notes tàbí Google Keep", "Pe é ní \"Àwọn nǹkan láti rántí\"", "Pinni rẹ̀ sókè"] },
            { title: "Jẹ́ kí ó rọrùn kí ó sì láàbò", bullets: ["Ìlà kan fún nǹkan kan", "Lo gbohùngbohùn kíbọ́ọ̀dù", "Kò sí ọ̀rọ̀ aṣínà tàbí nọ́mbà báńkì"] }
          ],
          tryIt: "Ṣe àkọsílẹ̀ \"Àwọn nǹkan láti rántí\" kí o sì fi nǹkan mẹ́ta kún un, ó kéré tán ọ̀kan nípa sísọ̀rọ̀ sí gbohùngbohùn kíbọ́ọ̀dù.",
          youCanNow: "tọ́jú àkọsílẹ̀ àwọn nǹkan tí o fẹ́ rántí, kí o sì fi kún un pẹ̀lú ohùn.",
          quickCheck: [
            { objective: "O2", q: "Kí ni pípinni àkọsílẹ̀ ń ṣe?", options: ["Ó ń jẹ́ kí ó wà ní òkè àwọn àkọsílẹ̀ rẹ", "Ó ń fi ọ̀rọ̀ aṣínà tì í pa", "Ó ń pa á rẹ́ lẹ́yìn ọjọ́ kan", "Ó ń pín in fún ẹbí"], answer: 0, why: "Pípinni ń jẹ́ kí àkọsílẹ̀ \"Àwọn nǹkan láti rántí\" wà ní òkè, níbi tí o ti lè rí i." },
            { objective: "O2", q: "Ọ̀rẹ́ kan sọ ìwé kan fún ọ nígbà tí o wà níta. Ibo ni ó yẹ kí ó lọ?", options: ["Sínú ìránnilétí tí ó ní àkókò", "Sínú app báńkì rẹ", "Kò sí ibì kankan; o máa rántí", "Sínú àkọsílẹ̀ \"Àwọn nǹkan láti rántí\""], answer: 3, why: "Àwọn nǹkan tí kò so mọ́ àkókò, bí orúkọ ìwé, yẹ kí ó wà nínú àkọsílẹ̀ rẹ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Àwòrán gẹ́gẹ́ bí ohun ìrántí",
          minutes: 4,
          goal: "Lo kámẹ́rà rẹ láti rántí ibi tí nǹkan wà àti ohun tí wọ́n kọ sí i.",
          text: [
            "Àwòrán kíákíá lè bá ọ rántí nǹkan. Ya àwòrán àmì ibi ìgbọ́kọ̀sí tàbí nọ́mbà ilẹ̀ rẹ̀, inú fìríìjì kí o tó lọ rajà, àmì orúkọ gílóòbù iná tí o fẹ́ pààrọ̀, tàbí àwọn bọ́tìnnì iná ìdáná tí o ti pa kí o tó jáde.",
            "Láti rí wọn lẹ́yìn náà, ṣe àkójọ àwòrán (album) kan tí orúkọ rẹ̀ jẹ́ \"Àwòrán ìrántí\" nínú app àwòrán rẹ, tàbí kí o kàn wo àwọn àwòrán tuntun rẹ. Pa wọ́n rẹ́ nígbà tí o kò bá nílò wọn mọ́.",
            "Má ṣe ya àwòrán ìwé àdáni bí káàdì báńkì tàbí káàdì Social Security rẹ fún ìdí yìí; tí fóònù rẹ bá sọnù, àwọn ènìyàn lè ṣi àwòrán náà lò."
          ],
          steps: ["Ya àwòrán kíákíá ti nǹkan tí o fẹ́ rántí.", "Wo àwọn àwòrán tuntun, tàbí tọ́jú àkójọ \"Àwòrán ìrántí\".", "Pa àwòrán ìrántí rẹ́ nígbà tí o bá parí.", "Má ṣe ya àwòrán káàdì tàbí ìwé àdáni."],
          words: [["Ohun ìrántí", "ohunkóhun tó ń ràn ọ́ lọ́wọ́ láti rántí, bí àkọsílẹ̀, aago ìkìlọ̀ tàbí àwòrán."]],
          slides: [
            { title: "Jẹ́ kí kámẹ́rà bá ọ rántí", bullets: ["Ibi ìgbọ́kọ̀sí", "Inú fìríìjì", "Àmì orúkọ tí o nílò", "Iná ìdáná tí o ti pa"] },
            { title: "Rí wọn lẹ́yìn náà", bullets: ["Wo àwọn àwòrán tuntun", "Tàbí àkójọ \"Àwòrán ìrántí\"", "Pa wọ́n rẹ́ nígbà tí o bá parí"] },
            { title: "Jẹ́ kí ó láàbò", bullets: ["Kò sí àwòrán káàdì báńkì tàbí káàdì ìdánimọ̀"] }
          ],
          tryIt: "Ya àwòrán ìrántí kan lónìí, bí inú fìríìjì rẹ tàbí ibi tí o gbé mọ́tò sí. Tún rí i nínú àwọn àwòrán rẹ lẹ́yìn wákàtí kan.",
          youCanNow: "lo àwòrán láti rántí ibi tí nǹkan wà àti ohun tí wọ́n kọ sí i.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí kò fi yẹ kí o tọ́jú àwòrán káàdì báńkì rẹ gẹ́gẹ́ bí ohun ìrántí?", options: ["Àwòrán káàdì kì í hàn kedere", "Tí fóònù rẹ bá sọnù, àwọn ènìyàn lè ṣi àwòrán náà lò", "Ó ń gba àyè púpọ̀ jù", "Báńkì kò gbà kí a ya àwòrán"], answer: 1, why: "Àwọn ènìyàn lè ṣi àwòrán káàdì àdáni lò tí fóònù bá sọnù." },
            { objective: "O3", q: "O gbé mọ́tò sí ilẹ̀ kẹta ilé ìgbọ́kọ̀sí ńlá kan. Ọ̀nà kíákíá wo ni o lè fi rántí?", options: ["Ya àwòrán àmì nọ́mbà ilẹ̀ náà", "Kọ ọ́ sínú ọ̀rọ̀ sí àjèjì", "Ka àwọn mọ́tò", "Fi mọ́tò sílẹ̀ láìtì"], answer: 0, why: "Àwòrán kíákíá ti àmì ibi ìgbọ́kọ̀sí ń bá ọ rántí rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíkọ ohun tí o nílò láti rántí sílẹ̀",
        questions: [
          { objective: "O1", q: "Ìgbà wo ni ó dára jù láti kọ ìránnilétí sílẹ̀?", options: ["Ní ọjọ́ Àìkú nìkan", "Ní ọ̀sẹ̀ tó ń bọ̀", "Ní kété tí o bá rántí rẹ̀", "Láéláé"], answer: 2, why: "Kíkọ ọ́ sílẹ̀ lẹ́sẹ̀kẹsẹ̀ ń dènà ìgbàgbé." },
          { objective: "O1", q: "Ìbéèrè ohùn wo ló ń ṣe ìránnilétí ọlọ́sẹ̀ọ̀sẹ̀?", options: ["\"Remind me to water the plants every Monday.\"", "\"Plants.\"", "\"Monday.\"", "\"Water.\""], answer: 0, why: "\"Every\" (ní gbogbo) ló ń mú kí ó tún ara rẹ̀ ṣe." },
          { objective: "O2", q: "Ibo ni orúkọ aládùúgbò tuntun yẹ kí ó lọ?", options: ["Sínú ọ̀rọ̀ sí àwọn àjèjì", "Sínú àyè ọ̀rọ̀ aṣínà", "Kò sí ibì kankan", "Sínú àkọsílẹ̀ \"Àwọn nǹkan láti rántí\""], answer: 3, why: "Àkọsílẹ̀ ló ń gbé àwọn nǹkan tí kò so mọ́ àkókò." },
          { objective: "O2", q: "Kí ni kò gbọ́dọ̀ wọ inú àkọsílẹ̀ lásán LÁÉLÁÉ?", options: ["Orúkọ ìwé kan", "Ọ̀rọ̀ aṣínà àti nọ́mbà báńkì", "Orúkọ aládùúgbò", "Ìlànà oúnjẹ"], answer: 1, why: "Àkọsílẹ̀ lásán kò láàbò fún nọ́mbà àdáni." },
          { objective: "O3", q: "Èwo ni àwòrán ìrántí tó dára?", options: ["Káàdì báńkì rẹ", "Àmì nọ́mbà ilẹ̀ ibi ìgbọ́kọ̀sí", "Káàdì Social Security rẹ", "Ọ̀rọ̀ aṣínà rẹ"], answer: 1, why: "Kò yẹ kí a ya àwòrán káàdì àdáni fún ìránnilétí." }
        ]
      }
    },
    {
      name: "Orí 2: Ìlànà ojoojúmọ́ àti àwọn olùrànlọ́wọ́ AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Àkọsílẹ̀ àyẹ̀wò tí AI ṣe",
          minutes: 5,
          goal: "Béèrè lọ́wọ́ AI fún àkọsílẹ̀ àyẹ̀wò kúkúrú fún iṣẹ́ tí o máa ń ṣe lọ́pọ̀ ìgbà.",
          text: [
            "Àkọsílẹ̀ àyẹ̀wò (checklist) ń ran gbogbo ènìyàn lọ́wọ́, láti orí awakọ̀ òfuurufú dé orí dókítà. Olùrànlọ́wọ́ AI lè ṣe ọ̀kan fún iṣẹ́ ojoojúmọ́ èyíkéyìí: jíjáde nílé, mímúra sílẹ̀ fún ìrìn-àjò, tàbí alẹ́ ọjọ́ kí ìpàdé kan tó dé.",
            "Béèrè pé: \"Ṣe àkọsílẹ̀ àyẹ̀wò kúkúrú fún mi fún jíjáde nílé: kí ó má ju nǹkan mẹ́jọ lọ, ní ọ̀rọ̀ tó rọrùn.\" Lẹ́yìn náà, tún un ṣe kí ó bá ilé rẹ mu: \"Fi kún un: ṣàyẹ̀wò ilẹ̀kùn ẹ̀yìn. Yọ ọ́ kúrò: fún ológbò lóúnjẹ.\"",
            "Tẹ̀ ẹ́ jáde kí o sì lẹ̀ ẹ́ mọ́ ẹ̀gbẹ́ ilẹ̀kùn, tàbí fi pamọ́ sínú Notes. Àkọsílẹ̀ àyẹ̀wò máa ń ṣèrànwọ́ kìkì tí ó bá wà níbi tí o ti máa rí i ní àkókò tó tọ́."
          ],
          steps: ["Yan iṣẹ́ kan tí o máa ń ṣe lọ́pọ̀ ìgbà.", "Béèrè lọ́wọ́ AI fún àkọsílẹ̀ àyẹ̀wò kúkúrú ní ọ̀rọ̀ tó rọrùn.", "Fi nǹkan kún un tàbí yọ ọ́ kúrò kí ó bá ayé rẹ mu.", "Fi sí ibi tí o máa rí i ní àkókò tó tọ́."],
          words: [["Àkọsílẹ̀ àyẹ̀wò (checklist)", "àkọsílẹ̀ àwọn ìgbésẹ̀ tí o ń sàmì sí ní ọ̀kọ̀ọ̀kan."]],
          slides: [
            { title: "Àkọsílẹ̀ àyẹ̀wò ń ran gbogbo ènìyàn lọ́wọ́", bullets: ["Jíjáde nílé", "Mímúra sílẹ̀ fún ìrìn-àjò", "Alẹ́ ọjọ́ kí ìpàdé tó dé"] },
            { title: "Béèrè lọ́wọ́ AI", bullets: ["\"Àkọsílẹ̀ àyẹ̀wò kúkúrú, kí ó má ju nǹkan mẹ́jọ lọ\"", "Lẹ́yìn náà fi nǹkan kún un tàbí yọ ọ́ kúrò"] },
            { title: "Fi sí ibi tó tọ́", bullets: ["Lẹ̀ ẹ́ mọ́ ẹ̀gbẹ́ ilẹ̀kùn", "Tàbí fi pamọ́ sínú Notes"] }
          ],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún àkọsílẹ̀ àyẹ̀wò \"kí n tó jáde nílé\" tí kò ju nǹkan mẹ́jọ lọ. Yí i padà kí ó bá ilé rẹ mu, kí o sì tẹ̀ ẹ́ jáde tàbí fi pamọ́.",
          youCanNow: "ṣe àkọsílẹ̀ àyẹ̀wò tìrẹ pẹ̀lú AI, kí o sì fi sí ibi tí ó ti máa ṣèrànwọ́.",
          quickCheck: [
            { objective: "O4", q: "Ìgbà wo ni àkọsílẹ̀ àyẹ̀wò ń ṣèrànwọ́ jù?", options: ["Nígbà tí ó wà níbi tí o kì í wò", "Nígbà tí ó gùn gan-an", "Nígbà tí ó wà níbi tí o máa rí i ní àkókò tó tọ́", "Nígbà tí AI nìkan ló lè kà á"], answer: 2, why: "Àkọsílẹ̀ àyẹ̀wò ń ṣèrànwọ́ kìkì tí o bá rí i ní àkókò tó tọ́, bí ní ẹ̀gbẹ́ ilẹ̀kùn." },
            { objective: "O4", q: "Àkọsílẹ̀ àyẹ̀wò AI sọ pé \"fún ológbò lóúnjẹ\", ṣùgbọ́n o kò ní ológbò. Kí ni o máa ṣe?", options: ["Ra ológbò", "Béèrè àkọsílẹ̀ tuntun lójoojúmọ́", "Pa gbogbo àkọsílẹ̀ náà tì", "Yọ nǹkan yẹn kúrò kí o sì fi èyí tí o nílò kún un"], answer: 3, why: "Tún àkọsílẹ̀ àyẹ̀wò ṣe kí ó bá ilé rẹ mu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rírántí ohun tí wọ́n sọ níbi ìpàdé",
          minutes: 5,
          goal: "Kọ àwọn kókó pàtàkì ìpàdé tàbí ìpè sílẹ̀, kí o sì yí wọn padà sí àkópọ̀ tó yé.",
          text: [
            "Ó rọrùn láti gbàgbé ohun tí dókítà, agbẹjọ́rò tàbí oníṣẹ́ àtúnṣe sọ. Mú àkọsílẹ̀ àwọn ìbéèrè rẹ dání, kí o sì kọ àwọn ìdáhùn sílẹ̀, tàbí kí o ní kí ẹnì kan nínú ẹbí rẹ bá ọ lọ kí ó sì kọ àkọsílẹ̀.",
            "Lẹ́yìn náà, tẹ àkọsílẹ̀ rẹ sínú olùrànlọ́wọ́ AI, láìsí orúkọ, ọjọ́ ìbí tàbí nọ́mbà àkáǹtì, kí o sì béèrè pé: \"Yí àwọn àkọsílẹ̀ yìí padà sí àkópọ̀ kúkúrú pẹ̀lú àkọsílẹ̀ àwọn nǹkan tí mo gbọ́dọ̀ ṣe.\" Fi àkópọ̀ náà pamọ́ sínú Notes.",
            "Tí nǹkan kan kò bá yé ọ, pe ọ́fíìsì náà láti ṣàyẹ̀wò. Ọ̀pọ̀ ọ́fíìsì dókítà tún máa ń fi àkópọ̀ ìbẹ̀wò sínú patient portal wọn. Àwọn kan máa ń béèrè bóyá wọ́n lè ka ìbẹ̀wò sílẹ̀ (record) lórí fóònù wọn; máa béèrè ìyọ̀nda kí o tó ṣe é nígbà gbogbo."
          ],
          steps: ["Mú àkọsílẹ̀ ìbéèrè dání kí o sì kọ ìdáhùn sílẹ̀.", "Mú ẹnì kan nínú ẹbí rẹ dání tí o bá lè ṣe é.", "Tẹ àkọsílẹ̀ rẹ sínú AI láìsí ìsọfúnni àdáni.", "Béèrè àkópọ̀ àti àkọsílẹ̀ ohun tí o máa ṣe.", "Ṣàyẹ̀wò ohunkóhun tí kò yé ọ pẹ̀lú ọ́fíìsì náà."],
          words: [["Àkópọ̀", "ẹ̀dà kúkúrú àwọn kókó pàtàkì."], ["Patient portal", "ojú-òpó wẹ́ẹ̀bù tàbí app tí ọ́fíìsì dókítà rẹ ti ń pín àkọsílẹ̀ ìbẹ̀wò àti èsì àyẹ̀wò."]],
          slides: [
            { title: "Kọ ọ́ sílẹ̀ ní àkókò náà", bullets: ["Mú ìbéèrè dání, kọ ìdáhùn sílẹ̀", "Mú ẹnì kan nínú ẹbí dání"] },
            { title: "Jẹ́ kí AI tò ó", bullets: ["Tẹ àkọsílẹ̀ láìsí ìsọfúnni àdáni", "Béèrè àkópọ̀ àti àkọsílẹ̀ ohun tí o máa ṣe", "Fi pamọ́ sínú Notes"] },
            { title: "Ṣàyẹ̀wò", bullets: ["Pe ọ́fíìsì tí kò bá yé ọ", "Wo patient portal", "Béèrè kí o tó ka ẹnikẹ́ni sílẹ̀"] }
          ],
          tryIt: "Kọ àkọsílẹ̀ mẹ́ta láti inú ìpè tàbí ìpàdé kan láìpẹ́ yìí (fi orúkọ àti nọ́mbà sílẹ̀). Ní kí olùrànlọ́wọ́ AI yí wọn padà sí àkópọ̀ kúkúrú pẹ̀lú àkọsílẹ̀ ohun tí o máa ṣe, kí o sì fi pamọ́.",
          youCanNow: "kọ ohun tí wọ́n sọ níbi ìpàdé tàbí ìpè sílẹ̀, kí o sì ṣe àkópọ̀ rẹ̀.",
          quickCheck: [
            { objective: "O5", q: "Kí ni patient portal?", options: ["Ilẹ̀kùn ilé ìwòsàn", "Ojú-òpó wẹ́ẹ̀bù tàbí app tí ọ́fíìsì dókítà rẹ ti lè pín àkọsílẹ̀ ìbẹ̀wò", "Ilé oògùn", "Olùrànlọ́wọ́ AI"], answer: 1, why: "Ọ̀pọ̀ ọ́fíìsì dókítà máa ń fi àkópọ̀ ìbẹ̀wò sínú patient portal wọn." },
            { objective: "O5", q: "O fẹ́ ka ohun tí dókítà ń sọ sílẹ̀ lórí fóònù rẹ. Kí ni o máa kọ́kọ́ ṣe?", options: ["Béèrè ìyọ̀nda", "Fi fóònù pamọ́", "Ka á sílẹ̀ láìsọ nǹkan kan", "Fi ohùn tí o kà sílẹ̀ sórí ayélujára"], answer: 0, why: "Máa béèrè ìyọ̀nda kí o tó ka ìbẹ̀wò sílẹ̀ nígbà gbogbo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ìlànà ìrántí ojoojúmọ́",
          minutes: 5,
          goal: "Kó àwọn irinṣẹ́ ìrántí rẹ papọ̀ sínú ìlànà ojoojúmọ́ tó rọrùn.",
          text: [
            "Irinṣẹ́ ń ṣiṣẹ́ jù nígbà tí ó bá di àṣà. Ìlànà ojoojúmọ́ tó rọrùn: ní òwúrọ̀, wo àwọn ìránnilétí àti kàlẹ́ńdà ti òní. Ní ọ̀sán, kọ ìránnilétí àti àkọsílẹ̀ sílẹ̀ ní kété tí o bá rántí wọn. Kí o tó sùn, wo àwọn ìránnilétí ti ọ̀la àti àkọsílẹ̀ \"Àwọn nǹkan láti rántí\" rẹ.",
            "Máa fi àwọn nǹkan sí ibì kan náà lójoojúmọ́: kọ́kọ́rọ́, gíláàsì ojú àti fóònù nínú abọ́ kan ní ẹ̀gbẹ́ ilẹ̀kùn. Àmì ìtọpinpin (tracking tag) lára kọ́kọ́rọ́ rẹ (bí Apple AirTag tàbí Tile) lè ràn ọ́ lọ́wọ́ láti fi fóònù rẹ rí wọn.",
            "Ṣàánú ara rẹ. Gbígbàgbé àwọn nǹkan kan jẹ́ ohun tó wọ́pọ̀. Tí ìwọ tàbí ẹbí rẹ bá ṣàkíyèsí ìyípadà ìrántí tó ń dani láàmú, bí sísọnù ní ibi tí o mọ̀ dáadáa tàbí ìṣòro pẹ̀lú iṣẹ́ ojoojúmọ́, bá dókítà rẹ sọ̀rọ̀. MedlinePlus (medlineplus.gov) ní ìsọfúnni tó ṣeé gbẹ́kẹ̀lé nípa ìrántí."
          ],
          steps: ["Òwúrọ̀: wo ìránnilétí àti kàlẹ́ńdà.", "Ọ̀sán: kọ ìránnilétí àti àkọsílẹ̀ sílẹ̀ lẹ́sẹ̀kẹsẹ̀.", "Ìrọ̀lẹ́: wo ti ọ̀la àti àkọsílẹ̀ rẹ.", "Fi kọ́kọ́rọ́, gíláàsì ojú àti fóònù sí ibì kan.", "Bá dókítà rẹ sọ̀rọ̀ nípa ìyípadà tó ń dani láàmú."],
          words: [["Àmì ìtọpinpin (tracking tag)", "ẹ̀rọ kékeré lára kọ́kọ́rọ́ tàbí àpò tí fóònù rẹ lè rí."]],
          slides: [
            { title: "Ìlànà ojoojúmọ́ tó rọrùn", bullets: ["Òwúrọ̀: wo ìránnilétí àti kàlẹ́ńdà", "Ọ̀sán: kọ ọ́ sílẹ̀ lẹ́sẹ̀kẹsẹ̀", "Ìrọ̀lẹ́: wo ti ọ̀la"] },
            { title: "Ibì kan náà lójoojúmọ́", bullets: ["Kọ́kọ́rọ́, gíláàsì ojú, fóònù nínú abọ́ kan", "Àmì ìtọpinpin lè ràn ọ́ lọ́wọ́ láti rí kọ́kọ́rọ́"] },
            { title: "Ṣàánú ara rẹ", bullets: ["Gbígbàgbé díẹ̀ jẹ́ ohun tó wọ́pọ̀", "Ó ń dà ọ́ láàmú? Bá dókítà rẹ sọ̀rọ̀", "MedlinePlus ní ìsọfúnni tó ṣeé gbẹ́kẹ̀lé"] }
          ],
          sources: [{ name: "MedlinePlus (National Library of Medicine)", url: "https://medlineplus.gov/" }],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe àpò irinṣẹ́ ìrántí rẹ (ìránnilétí ohùn méjì tó ń tún ara wọn ṣe, àkọsílẹ̀ \"Àwọn nǹkan láti rántí\", àwòrán ìrántí kan, àti àkọsílẹ̀ àyẹ̀wò \"kí n tó jáde nílé\" tí AI ṣe), kí o sì lo gbogbo rẹ̀ fún odindi ọjọ́ kan pẹ̀lú àyẹ̀wò òwúrọ̀ àti ti ìrọ̀lẹ́.",
          youCanNow: "lo ìránnilétí, àkọsílẹ̀, àwòrán, àkọsílẹ̀ àyẹ̀wò àti àkópọ̀ AI nínú ìlànà ojoojúmọ́ tó ń ran ìrántí rẹ lọ́wọ́.",
          quickCheck: [
            { objective: "O6", q: "Kí ni àṣà ìrántí ìrọ̀lẹ́ tó dára?", options: ["Pa gbogbo ìránnilétí rẹ́", "Pa fóònù rẹ fún ọ̀sẹ̀ kan", "Wo àwọn ìránnilétí ti ọ̀la àti àkọsílẹ̀ \"Àwọn nǹkan láti rántí\" rẹ", "Kọ àkọsílẹ̀ àyẹ̀wò tuntun ní alẹ́ kọ̀ọ̀kan"], answer: 2, why: "Kí o tó sùn, wo àwọn ìránnilétí ti ọ̀la àti àkọsílẹ̀ rẹ." },
            { objective: "O6", q: "Gíláàsì ojú rẹ máa ń sọnù nínú ilé. Àṣà tó rọrùn wo ló lè ṣèrànwọ́?", options: ["Ra gíláàsì tuntun ní ọ̀sẹ̀ kọ̀ọ̀kan", "Fi kọ́kọ́rọ́, gíláàsì ojú àti fóònù sínú abọ́ kan ní ẹ̀gbẹ́ ilẹ̀kùn", "Má wọ gíláàsì mọ́", "Béèrè lọ́wọ́ AI ibi tí wọ́n wà"], answer: 1, why: "Fífi nǹkan sí ibì kan náà lójoojúmọ́ túmọ̀ sí pé o máa mọ ibi tí wọ́n wà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìlànà ojoojúmọ́ àti àwọn olùrànlọ́wọ́ AI",
        questions: [
          { objective: "O4", q: "Ibo ni àkọsílẹ̀ àyẹ̀wò \"jíjáde nílé\" yẹ kí ó wà?", options: ["Kò sí ibì kankan", "Nínú àpótí", "Nínú ẹ̀yìn mọ́tò", "Ní ẹ̀gbẹ́ ilẹ̀kùn níbi tí o máa rí i"], answer: 3, why: "Àkọsílẹ̀ àyẹ̀wò ń ṣèrànwọ́ nígbà tí o bá rí i ní àkókò tó tọ́." },
          { objective: "O5", q: "Kí o tó tẹ àkọsílẹ̀ ìpàdé sínú AI, yọ:", options: ["Orúkọ, ọjọ́ ìbí àti nọ́mbà àkáǹtì", "Àwọn nǹkan tí o máa ṣe", "Ọ̀rọ̀ náà \"dókítà\"", "Kò sí nǹkan kan"], answer: 0, why: "Ìsọfúnni àdáni kò gbọ́dọ̀ wọ inú AI." },
          { objective: "O5", q: "Kí o tó ka ọ̀rọ̀ sílẹ̀ níbi ìpàdé, o yẹ kí o:", options: ["Ka á sílẹ̀ ní ìkọ̀kọ̀", "Fi fóònù pamọ́", "Béèrè ìyọ̀nda", "Fi sórí ayélujára"], answer: 2, why: "Máa béèrè kí o tó ka ẹnikẹ́ni sílẹ̀ nígbà gbogbo." },
          { objective: "O6", q: "Àṣà ìrọ̀lẹ́ tó dára ni láti:", options: ["Pín ọ̀rọ̀ aṣínà rẹ", "Pa gbogbo ìránnilétí rẹ́", "Pa fóònù fún ọ̀sẹ̀ kan", "Wo àwọn ìránnilétí ti ọ̀la àti àkọsílẹ̀ rẹ"], answer: 3, why: "Ó ń múra rẹ sílẹ̀ fún ọjọ́ kejì." },
          { objective: "O6", q: "O ṣàkíyèsí pé o sọnù ní ibi tí o mọ̀ dáadáa. Kí ni o yẹ kí o ṣe?", options: ["Pa á tì", "Béèrè lọ́wọ́ AI pé kí ó sọ àìsàn tí o ní", "Bá dókítà rẹ sọ̀rọ̀", "Ra oògùn àfikún lórí ayélujára"], answer: 2, why: "Dókítà ló yẹ kí ó ṣàyẹ̀wò ìyípadà ìrántí tó ń dani láàmú." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Ìrànlọ́wọ́ Ìrántí",
    questions: [
      { objective: "O1", q: "Kí ló dé tí o fi yẹ kí o kọ ìránnilétí sílẹ̀ lẹ́sẹ̀kẹsẹ̀?", options: ["Ó ń dá bátìrì sí", "Kí o má baà gbàgbé rẹ̀", "Ó pọndandan", "Ó dín owó kù"], answer: 1, why: "Àkókò náà máa ń kọjá kíákíá." },
      { objective: "O1", q: "\"Snooze\" túmọ̀ sí:", options: ["Dá ìránnilétí dúró díẹ̀", "Pa á rẹ́", "Pín in", "Tẹ̀ ẹ́ jáde"], answer: 0, why: "Snooze ń mú un padà wá lẹ́yìn náà." },
      { objective: "O1", q: "Ọ̀rọ̀ wo ló ń mú kí ìránnilétí tún ara rẹ̀ ṣe?", options: ["\"every\"", "\"maybe\"", "\"once\"", "\"never\""], answer: 0, why: "\"Every Monday\" (ní gbogbo ọjọ́ Ajé) ń tún ara rẹ̀ ṣe lọ́sọ̀ọ̀sẹ̀." },
      { objective: "O1", q: "Nígbà tí o bá parí ohun tí ìránnilétí sọ, o yẹ kí o:", options: ["Fi sílẹ̀ títí láé", "Sàmì sí i pé o ti ṣe é", "Tún un ṣètò", "Pa app náà rẹ́"], answer: 1, why: "Sísàmì pé o ti ṣe é ń jẹ́ kí àkọsílẹ̀ rẹ mọ́." },
      { objective: "O2", q: "Àkọsílẹ̀ nǹkan láti rántí dára jù fún:", options: ["Nọ́mbà báńkì", "Ọ̀rọ̀ aṣínà", "Àwọn nǹkan tí kò so mọ́ àkókò", "Nọ́mbà Social Security"], answer: 2, why: "Àkọsílẹ̀ ń gbé orúkọ, èrò àti ibi tí nǹkan wà." },
      { objective: "O2", q: "Pípinni àkọsílẹ̀:", options: ["Ń ti fóònù rẹ pa", "Ń pa á rẹ́", "Ń pín in fún gbogbo ènìyàn", "Ń jẹ́ kí ó wà ní òkè"], answer: 3, why: "Àkọsílẹ̀ tí a pinni rọrùn láti rí." },
      { objective: "O2", q: "Láti fi kún àkọsílẹ̀ láìtẹ̀ ọ̀rọ̀, lo:", options: ["Bọ́tìnnì ohùn", "Kámẹ́rà", "Gbohùngbohùn kíbọ́ọ̀dù", "Iná fóònù"], answer: 2, why: "Gbohùngbohùn ń tẹ ohun tí o sọ." },
      { objective: "O3", q: "Àwòrán ìrántí tó dára ni:", options: ["Inú fìríìjì rẹ kí o tó lọ rajà", "Káàdì báńkì rẹ", "Ojú-ewé ìwé ìrìnnà (passport) rẹ", "PIN rẹ"], answer: 0, why: "Kò yẹ kí a ya àwòrán ìwé àdáni fún ìránnilétí." },
      { objective: "O3", q: "Nígbà tí o kò bá nílò àwòrán ìrántí mọ́:", options: ["Fi ránṣẹ́ sí àwọn àjèjì lórí ímeèlì", "Fi wọ́n sórí ayélujára", "Tẹ gbogbo wọn jáde", "Pa wọ́n rẹ́"], answer: 3, why: "Pípa wọ́n rẹ́ ń jẹ́ kí àwòrán rẹ wà létòlétò kí ó sì jẹ́ àdáni." },
      { objective: "O4", q: "Àkọsílẹ̀ àyẹ̀wò ni:", options: ["Ìwé ìṣirò báńkì", "Àkọsílẹ̀ àwọn ìgbésẹ̀ tí o ń sàmì sí", "Ọ̀rọ̀ aṣínà", "Fóònù"], answer: 1, why: "Àkọsílẹ̀ àyẹ̀wò ń darí iṣẹ́ ojoojúmọ́." },
      { objective: "O4", q: "Ìbéèrè tó dára fún àkọsílẹ̀ àyẹ̀wò AI ni:", options: ["\"àkọsílẹ̀\"", "\"Àkọsílẹ̀ àyẹ̀wò kúkúrú fún jíjáde nílé, kí ó má ju nǹkan mẹ́jọ lọ, ọ̀rọ̀ tó rọrùn.\"", "\"nǹkan\"", "\"ràn mí lọ́wọ́\""], answer: 1, why: "Ó sọ iṣẹ́ náà, gígùn rẹ̀ àti irú ọ̀rọ̀." },
      { objective: "O4", q: "Lẹ́yìn tí AI bá ṣe àkọsílẹ̀ àyẹ̀wò, o yẹ kí o:", options: ["Pín ọ̀rọ̀ aṣínà rẹ", "Lò ó bí ó ti rí láìka ohunkóhun sí", "Pa á rẹ́", "Tún un ṣe kí ó bá ilé rẹ mu"], answer: 3, why: "Ilé rẹ yàtọ̀ sí ti gbogbo ènìyàn." },
      { objective: "O5", q: "Níbi ìpàdé dókítà, ẹnì kan nínú ẹbí lè ṣèrànwọ́ nípa:", options: ["Kíkọ àkọsílẹ̀", "Dídáhùn fún ọ láìbéèrè", "Pínpín ọ̀rọ̀ aṣínà rẹ", "Kíka ọ̀rọ̀ sílẹ̀ ní ìkọ̀kọ̀"], answer: 0, why: "Olùgbọ́ kejì máa ń gbọ́ nǹkan púpọ̀ sí i." },
      { objective: "O5", q: "AI lè yí àkọsílẹ̀ rẹ padà sí:", options: ["Ìwé oògùn dókítà", "Ìdámọ̀ àìsàn", "Àkópọ̀ kúkúrú pẹ̀lú àkọsílẹ̀ ohun tí o máa ṣe", "Ìdájọ́ ilé-ẹjọ́"], answer: 2, why: "Ṣíṣe àkópọ̀ ni agbára rẹ̀; ṣíṣe ìdámọ̀ àìsàn kọ́." },
      { objective: "O5", q: "Patient portal ni:", options: ["Báńkì", "Ilẹ̀kùn ilé ìwòsàn", "Ibùdókọ̀ bọ́ọ̀sì", "Ojú-òpó wẹ́ẹ̀bù tàbí app tí dókítà rẹ ti ń pín àkọsílẹ̀ ìbẹ̀wò"], answer: 3, why: "Portal ń pín àkópọ̀ ìbẹ̀wò àti èsì àyẹ̀wò." },
      { objective: "O5", q: "Tí àkópọ̀ kan kò bá yé ọ, o yẹ kí o:", options: ["Pa á tì", "Fojú inú wò ó", "Pe ọ́fíìsì náà láti ṣàyẹ̀wò", "Béèrè lọ́wọ́ àjèjì lórí ayélujára"], answer: 2, why: "Ọ́fíìsì náà ni orísun tó ṣeé gbẹ́kẹ̀lé." },
      { objective: "O6", q: "Àyẹ̀wò ìlànà òwúrọ̀ ní nínú:", options: ["Yíyí ọ̀rọ̀ aṣínà padà", "Àwọn ìránnilétí àti kàlẹ́ńdà ti òní", "Pípa àkọsílẹ̀ rẹ́", "Rírà fóònù tuntun"], answer: 1, why: "Ó ń ṣètò ọjọ́ rẹ sílẹ̀." },
      { objective: "O6", q: "Fífi kọ́kọ́rọ́, gíláàsì ojú àti fóònù sínú abọ́ kan ń ṣèrànwọ́ nítorí pé:", options: ["O máa ń mọ ibi tí wọ́n wà nígbà gbogbo", "Ó ń dára lójú", "Ó ń gba agbára sí wọn", "Ó pọndandan"], answer: 0, why: "Ibì kan náà, wíwá díẹ̀." },
      { objective: "O6", q: "Àmì ìtọpinpin lára kọ́kọ́rọ́ ń jẹ́ kí o:", options: ["Fi fóònù rẹ rí wọn", "Ṣí ilẹ̀kùn èyíkéyìí", "Tan mọ́tò láti ọ̀nà jíjìn", "San owó ìnáwó"], answer: 0, why: "Fóònù rẹ lè rí ibi tí àmì náà wà." },
      { objective: "O6", q: "Ibo ni o ti lè rí ìsọfúnni tó ṣeé gbẹ́kẹ̀lé nípa ìrántí?", options: ["Ìpolówó tó ń yọ jáde lójijì", "MedlinePlus (medlineplus.gov) àti dókítà rẹ", "Olùtajà oògùn àfikún", "Àhesọ orí ìkànnì àjọlò"], answer: 1, why: "MedlinePlus jẹ́ ojú-òpó ìlera ọ̀fẹ́ ti ìjọba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 4, 7, 10, 13, 16, 19] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ìránnilétí ohùn", objective: "O1", notYet: "Ìránnilétí kò tó méjì, tàbí wọn kò tún ara wọn ṣe.", meets: "Ìránnilétí méjì tó ń tún ara wọn ṣe, tí a ṣètò pẹ̀lú ohùn, ọ̀kọ̀ọ̀kan pẹ̀lú ohun tí o máa ṣe àti ìgbà.", exceeds: "Ó sàmì sí wọn pé òun ti ṣe wọ́n tàbí ó sún wọn síwájú bí wọ́n ṣe ń yọ ní ọjọ́ náà." },
      { name: "Àkọsílẹ̀ àwọn nǹkan láti rántí", objective: "O2", notYet: "Kò sí àkọsílẹ̀, tàbí ó ní ọ̀rọ̀ aṣínà tàbí nọ́mbà àdáni nínú.", meets: "Àkọsílẹ̀ \"Àwọn nǹkan láti rántí\" tí ó ní ó kéré tán nǹkan kan, láìsí nọ́mbà àdáni.", exceeds: "A pinni àkọsílẹ̀ náà sókè, a sì fi nǹkan kan kún un pẹ̀lú ohùn." },
      { name: "Àwòrán ìrántí", objective: "O3", notYet: "Kò sí àwòrán, tàbí àwòrán káàdì tàbí ìwé àdáni ni.", meets: "Àwòrán ìrántí kan tó wúlò, bí ibi tí o gbé mọ́tò sí tàbí àmì orúkọ ọjà.", exceeds: "Ó fi pamọ́ sínú àkójọ \"Àwòrán ìrántí\", ó sì pa á rẹ́ nígbà tí kò nílò rẹ̀ mọ́." },
      { name: "Àkọsílẹ̀ àyẹ̀wò jíjáde nílé", objective: "O4", notYet: "Kò sí àkọsílẹ̀ àyẹ̀wò, tàbí kò bá ilé rẹ mu.", meets: "Àkọsílẹ̀ àyẹ̀wò AI kúkúrú tí a tún ṣe kí ó bá ilé rẹ mu, tí a sì fi sí ibi tí o máa rí i.", exceeds: "Ó lo àkọsílẹ̀ àyẹ̀wò náà ní gbogbo ìgbà tí ó jáde nílé ní ọjọ́ náà." },
      { name: "Lílò fún odindi ọjọ́ kan", objective: "O6", notYet: "A ṣètò àwọn irinṣẹ́ náà ṣùgbọ́n a kò lò wọ́n.", meets: "Ó lo àpò irinṣẹ́ náà fún odindi ọjọ́ kan, pẹ̀lú àyẹ̀wò òwúrọ̀ àti ti ìrọ̀lẹ́.", exceeds: "Ó lè sọ irinṣẹ́ tó ṣèrànwọ́ jù àti ohun tí òun máa yí padà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì ń lo ìlànà ìrántí àti ìránnilétí wọn ní àyẹ̀wò àtẹ̀lé ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn kò fi bẹ́ẹ̀ pàdánù ìpàdé mọ́, tàbí pé ìgbàgbé kò fi bẹ́ẹ̀ da àwọn láàmú mọ́",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Seniors and Technology míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tó ní olùrànlọ́wọ́ ohùn, Notes tàbí Google Keep, àti kámẹ́rà",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini)",
      "Ẹ̀rọ ìtẹ̀wé tàbí ìwé àti téèpù fún àkọsílẹ̀ àyẹ̀wò (kò pọndandan)",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú láìkánjú, pẹ̀lú odindi ọjọ́ kan ti àṣeṣe"
    ],
    facilitatorNotes: [
      "Jẹ́ kí ohùn rẹ jẹ́ ti ìfẹ́ àti ti ìlò gidi; gbígbàgbé àwọn nǹkan kan jẹ́ ohun tó wọ́pọ̀, kì í sì í ṣe ohun ìtìjú.",
      "Ran àwọn akẹ́kọ̀ọ́ lọ́wọ́ láti tan olùrànlọ́wọ́ ohùn wọn àti láti rí gbohùngbohùn kíbọ́ọ̀dù kí Ẹ̀kọ́ 1 tó bẹ̀rẹ̀.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé kí wọ́n má fi ọ̀rọ̀ aṣínà tàbí nọ́mbà àdáni sínú àkọsílẹ̀, àwòrán tàbí prompt AI láéláé.",
      "Má ṣe ṣàyẹ̀wò ìlera ìrántí ẹnikẹ́ni; gba àwọn akẹ́kọ̀ọ́ tàbí ẹbí tó ní àníyàn níyànjú láti bá dókítà sọ̀rọ̀.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
