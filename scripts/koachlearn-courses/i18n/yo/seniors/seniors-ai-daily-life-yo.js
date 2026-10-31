"use strict";

// Koach Learn course (Yoruba translation of seniors/seniors-ai-daily-life.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-daily-life-yo",
  lang: "yo",
  translationOf: "seniors-ai-daily-life",
  category: "Seniors and Technology",
  name: "AI fún Ìgbésí Ayé Ojoojúmọ́",
  skills: "Ṣíṣe àkọsílẹ̀ ohun tí a ó rà pẹ̀lú AI, Ṣíṣètò oúnjẹ tó rọrùn, Ṣíṣe ìránnilétí pẹ̀lú ohùn, Fífi àdéhùn sínú kàlẹ́ńdà, Òye lẹ́tà tó rúni lójú",
  outcome: "lo olùrànlọ́wọ́ AI àti olùrànlọ́wọ́ ohùn fóònù rẹ láti ṣètò oúnjẹ tó rọrùn fún ọ̀sẹ̀ kan, yí i padà sí àkọsílẹ̀ ohun tí o ó rà, ṣe ìránnilétí kan, kí o sì jẹ́ kí wọ́n ṣàlàyé lẹ́tà tó rú ọ lójú ní ọ̀rọ̀ tó rọrùn.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbàlagbà tí wọ́n fẹ́ kí ẹ̀rọ ìgbàlódé mú iṣẹ́ ojoojúmọ́ rọrùn díẹ̀: rírajà, oúnjẹ sísè, rírántí àdéhùn àti òye lẹ́tà tí ó dé.",
    "O máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ bí ChatGPT, Microsoft Copilot tàbí Google Gemini, àti olùrànlọ́wọ́ ohùn tí ó ti wà lórí fóònù rẹ (Siri lórí iPhone, tàbí Google Assistant tàbí Gemini lórí Android), láti ṣètò oúnjẹ, ṣe àkọsílẹ̀, ṣe ìránnilétí, kí o sì lóye lẹ́tà.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Lọ díẹ̀díẹ̀, tún ohun tí o bá nílò ṣe, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" nígbà kọ̀ọ̀kan. Ìdánwò ìmọ̀ kúkúrú wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́."
  ],
  finalTask: "Ṣètò oúnjẹ alẹ́ mẹ́ta tó rọrùn fún ọ̀sẹ̀ tó ń bọ̀ pẹ̀lú olùrànlọ́wọ́ AI, ní kí ó ṣe àkọsílẹ̀ ohun tí o ó rà kan ṣoṣo fún gbogbo mẹ́ta, ṣe ìránnilétí lórí fóònù láti lọ rajà, kí o sì fi àdéhùn gidi kan sínú kàlẹ́ńdà fóònù rẹ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà, ọ̀pọ̀ ń dá gbé tàbí ń gbé pẹ̀lú ọkọ tàbí aya wọn, tí wọ́n ń bójú tó oúnjẹ, rírajà, àdéhùn àti lẹ́tà wọn fúnra wọn, tí wọ́n sì fẹ́ kí iṣẹ́ ojoojúmọ́ má gba agbára púpọ̀.",
    startingPoint: "Wọ́n ní smartphone, wọ́n sì lè pe ènìyàn àti fi ọ̀rọ̀ ránṣẹ́ (text). Ọ̀pọ̀ kò tíì lo olùrànlọ́wọ́ AI tàbí olùrànlọ́wọ́ ohùn fóònù wọn, ìkìlọ̀ kàlẹ́ńdà tàbí app Notes rí.",
    gap: "Ṣíṣètò oúnjẹ, rírántí àdéhùn àti òye lẹ́tà láti ilé-iṣẹ́ ìbánigbófò tàbí ọ́fíìsì lè rẹni, ó sì lè dààmú ẹni. Lílo olùrànlọ́wọ́ AI àti àwọn irinṣẹ́ tí ó wà nínú fóònù fún iṣẹ́ wọ̀nyí ń dín agbára kù, ó sì ń ran àwọn àgbàlagbà lọ́wọ́ láti máa dá ṣe nǹkan fúnra wọn, níwọ̀n ìgbà tí ìsọfúnni àdáni kò bá wọ inú rẹ̀, tí wọ́n sì ń fìdí lẹ́tà pàtàkì múlẹ̀ lọ́dọ̀ ẹni tó fi ránṣẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn, gbólóhùn kúkúrú àti ìgbésẹ̀ ńlá tó rọrùn",
      "Ẹ̀rọ: smartphone tí ó ní olùrànlọ́wọ́ ohùn àti app Calendar; àwọn àṣàyàn iPhone àti Android yàtọ̀ síra",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan ní ìrọ̀rùn, pẹ̀lú àkókò láti ṣe àṣeṣe",
      "Oúnjẹ pàtàkì (diet) ń wá láti ọ̀dọ̀ dókítà akẹ́kọ̀ọ́, kì í ṣe láti ọ̀dọ̀ AI",
      "Ìsọfúnni àdáni: kò sí orúkọ, nọ́mbà àkáǹtì, Medicare tàbí Social Security nínú prompt tàbí àwòrán lẹ́tà"
    ],
    prerequisites: "\"AI fún Àwọn Àgbàlagbà: Lílo Olùrànlọ́wọ́ AI\" wúlò láti kọ́kọ́ ṣe, ṣùgbọ́n kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú olùrànlọ́wọ́ AI ọ̀fẹ́", action: "béèrè èrò oúnjẹ tó rọrùn tí ó sọ iye ènìyàn tí o ń sè fún, àkókò rẹ, ohun tí o fẹ́ àti ohun tí o gbọ́dọ̀ yẹra fún", standard: "tí o sì rí èrò mẹ́ta tí ó bá ohun tí o nílò àti ìmọ̀ràn dókítà rẹ mu" },
    { id: "O2", condition: "Tí o bá ní èrò oúnjẹ díẹ̀", action: "gba àkọsílẹ̀ ohun tí o ó rà kan ṣoṣo tí a pín gẹ́gẹ́ bí apá ilé ìtajà, láìsí ohun tí o ti ní", standard: "tí o fi pamọ́ sínú Notes, tẹ̀ jáde tàbí kọ sílẹ̀" },
    { id: "O3", condition: "Pẹ̀lú olùrànlọ́wọ́ ohùn fóònù rẹ", action: "ṣe ìránnilétí tàbí aago ìkàsí (timer) nípa sísọ̀rọ̀, pẹ̀lú ọjọ́ àti àkókò", standard: "kí o sì wò ó lójú fóònù pé ó ti wà" },
    { id: "O4", condition: "Tí o bá ní àdéhùn gidi kan", action: "fi í sínú kàlẹ́ńdà fóònù rẹ pẹ̀lú ìkìlọ̀ (alert)", standard: "pẹ̀lú orúkọ, ọjọ́ àti àkókò tó tọ́, àti ìkìlọ̀ ṣáájú rẹ̀" },
    { id: "O5", condition: "Tí o bá ní lẹ́tà tó rúni lójú láti ilé-iṣẹ́ ìbánigbófò, ilé-iṣẹ́ iná/omi tàbí ọ́fíìsì", action: "jẹ́ kí wọ́n ṣàlàyé rẹ̀ ní ọ̀rọ̀ tó rọrùn láìsí ìsọfúnni àdáni kankan nínú rẹ̀", standard: "kí o sì fìdí ohun tí o máa ṣe múlẹ̀ nípa pípe nọ́mbà tí a tẹ̀ sórí lẹ́tà náà" }
  ],
  chapters: [
    {
      name: "Orí 1: Àkọsílẹ̀, oúnjẹ àti rírajà",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣètò oúnjẹ tó rọrùn pẹ̀lú AI",
          minutes: 5,
          goal: "Béèrè èrò oúnjẹ tó rọrùn díẹ̀ lọ́wọ́ olùrànlọ́wọ́ AI tí ó bá ohun tí o nílò mu.",
          text: [
            "Ríronú ohun tí o máa sè lójoojúmọ́ lè rẹni, pàápàá nígbà tí o bá ń sè fún ẹnìkan tàbí ènìyàn méjì. Olùrànlọ́wọ́ AI lè fún ọ ní èrò láàárín ìṣẹ́jú-àáyá díẹ̀.",
            "Sọ ohun tí o fẹ́ fún un, iye ènìyàn tí o ń sè fún, àkókò àti agbára tí o fẹ́ lò, àti ohunkóhun tí o gbọ́dọ̀ yẹra fún. Fún àpẹẹrẹ: \"Mo ń sè fún ẹnìkan. Dábàá oúnjẹ alẹ́ mẹ́ta tó rọrùn tí kò ní gba ju ìṣẹ́jú 30 lọ, tí ó ní èròjà díẹ̀, tí iyọ̀ inú rẹ̀ sì kéré.\"",
            "Tí dókítà rẹ bá ti fún ọ ní oúnjẹ pàtàkì (diet), tẹ̀lé ìmọ̀ràn dókítà rẹ. Olùrànlọ́wọ́ náà lè fún ọ ní èrò, ṣùgbọ́n kò mọ ìlera rẹ."
          ],
          steps: ["Ṣí olùrànlọ́wọ́ AI rẹ.", "Sọ iye ènìyàn tí o ń sè fún.", "Sọ iye àkókò tí o ní àti ohun tí o fẹ́.", "Sọ ohunkóhun tí o gbọ́dọ̀ yẹra fún, bí iyọ̀ tàbí ṣúgà tó pọ̀ jù.", "Béèrè èrò mẹ́ta."],
          words: [["Èròjà", "ọ̀kan lára àwọn oúnjẹ tí a fi ń se oúnjẹ kan (ingredient)."]],
          slides: [
            { title: "Jẹ́ kí AI dábàá oúnjẹ", bullets: ["Èrò láàárín ìṣẹ́jú-àáyá díẹ̀", "Ó dára nígbà tí o bá ń sè fún ẹnìkan tàbí méjì"] },
            { title: "Sọ fún un", bullets: ["Iye ènìyàn", "Iye àkókò", "Ohun tí o fẹ́ àti ohun tí o gbọ́dọ̀ yẹra fún"] },
            { title: "Dókítà rẹ ló ṣáájú", bullets: ["Tẹ̀lé oúnjẹ pàtàkì tí dókítà rẹ fún ọ", "AI kò mọ ìlera rẹ"] }
          ],
          tryIt: "Béèrè oúnjẹ alẹ́ mẹ́ta tó rọrùn fún ọ̀sẹ̀ tó ń bọ̀ lọ́wọ́ olùrànlọ́wọ́ AI, tí ó bá bí o ṣe fẹ́ jẹun mu. Kọ àwọn mẹ́ta tí o fẹ́ jù sílẹ̀.",
          youCanNow: "béèrè èrò oúnjẹ tí ó bá ohun tí o nílò mu lọ́wọ́ olùrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O1", q: "Ta ló ń pinnu oúnjẹ pàtàkì (diet) rẹ tí o bá ní ọ̀kan?", options: ["Olùrànlọ́wọ́ AI", "Dókítà rẹ", "Ilé ìtajà oúnjẹ", "Ètò ìdáná lórí tẹlifíṣọ̀n"], answer: 1, why: "Olùrànlọ́wọ́ náà ń fúnni ní èrò ṣùgbọ́n kò mọ ìlera rẹ; tẹ̀lé ìmọ̀ràn dókítà rẹ." },
            { objective: "O1", q: "O ń sè fún ènìyàn méjì, agbára rẹ kò sì pọ̀ ní ìrọ̀lẹ́. Kí ni o máa fi kún ìbéèrè oúnjẹ rẹ?", options: ["\"Jẹ́ kí ó yára kí ó sì rọrùn, fún ènìyàn méjì.\"", "Kò sí nǹkan; sọ \"oúnjẹ\" nìkan", "Nọ́mbà Medicare rẹ", "\"Jẹ́ kí ó jẹ́ oúnjẹ olówó ńlá.\""], answer: 0, why: "Sísọ iye ènìyàn àti iye àkókò àti agbára tí o fẹ́ lò ń mú èrò tó bá ọ mu wá." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yíyí oúnjẹ padà sí àkọsílẹ̀ ohun tí a ó rà",
          minutes: 4,
          goal: "Gba àkọsílẹ̀ ohun tí o ó rà kan tó wà létòlétò fún oúnjẹ púpọ̀.",
          text: [
            "Nígbà tí o bá ti ní èrò oúnjẹ, ní kí olùrànlọ́wọ́ náà ṣe àkọsílẹ̀ ohun tí o ó rà kan ṣoṣo fún gbogbo wọn. Èyí kò ní jẹ́ kí o kọ oúnjẹ kọ̀ọ̀kan sílẹ̀ lọ́kọ̀ọ̀kan.",
            "Ní kí ó pín àkọsílẹ̀ náà gẹ́gẹ́ bí apá ilé ìtajà, bí èso àti ẹ̀fọ́, wàrà àti ohun tí a fi wàrà ṣe, àti oúnjẹ inú agolo, kí o lè rin ilé ìtajà lẹ́ẹ̀kan ṣoṣo. Lẹ́yìn náà, sọ ohun tí o ti ní nílé fún un kí ó lè yọ wọ́n kúrò.",
            "O lè tẹ àkọsílẹ̀ náà jáde, da á kọ sínú app Notes lórí fóònù rẹ, tàbí kọ ọ́ sórí ìwé lásán. Lo èyí tí ó rọrùn jù fún ọ."
          ],
          steps: ["Béèrè: \"Ṣe àkọsílẹ̀ ohun tí mo máa rà kan ṣoṣo fún oúnjẹ alẹ́ mẹ́ta wọ̀nyí.\"", "Ní kí ó pín àkọsílẹ̀ náà gẹ́gẹ́ bí apá ilé ìtajà.", "Sọ ohun tí o ti ní fún un.", "Da àkọsílẹ̀ náà kọ sínú Notes, tẹ̀ ẹ́ jáde, tàbí kọ ọ́ sílẹ̀."],
          words: [["App Notes", "app lórí fóònù rẹ fún kíkọ àti fífi àkọsílẹ̀ kúkúrú pamọ́."]],
          slides: [
            { title: "Àkọsílẹ̀ kan fún gbogbo oúnjẹ", bullets: ["\"Ṣe àkọsílẹ̀ ohun tí mo máa rà kan ṣoṣo fún oúnjẹ alẹ́ mẹ́ta wọ̀nyí.\""] },
            { title: "Jẹ́ kí rírajà rọrùn", bullets: ["Pín in gẹ́gẹ́ bí apá ilé ìtajà", "Yọ ohun tí o ti ní kúrò"] },
            { title: "Fi àkọsílẹ̀ rẹ pamọ́", bullets: ["Da á kọ sínú app Notes", "Tẹ̀ ẹ́ jáde", "Tàbí kọ ọ́ sórí ìwé"] }
          ],
          tryIt: "Béèrè àkọsílẹ̀ ohun tí o ó rà kan ṣoṣo fún oúnjẹ alẹ́ mẹ́ta rẹ lọ́wọ́ olùrànlọ́wọ́ náà, tí a pín gẹ́gẹ́ bí apá ilé ìtajà. Sọ nǹkan méjì tí o ti ní fún un, kí o sì fi àkọsílẹ̀ ìkẹyìn pamọ́.",
          youCanNow: "yí èrò oúnjẹ padà sí àkọsílẹ̀ ohun tí o ó rà kan ṣoṣo tí ó bá ilé ìdáná rẹ mu.",
          quickCheck: [
            { objective: "O2", q: "Kí ni pínpín àkọsílẹ̀ gẹ́gẹ́ bí apá ilé ìtajà túmọ̀ sí?", options: ["Tító nǹkan láti èyí tí ó wọ́n jù lọ sí èyí tí kò wọ́n", "Kíkọ àkọsílẹ̀ náà lẹ́ẹ̀mejì", "Kíkó nǹkan pọ̀ gẹ́gẹ́ bí ibi tí wọ́n wà, bí wàrà tàbí oúnjẹ inú agolo", "Kíkọ oúnjẹ kan ṣoṣo sílẹ̀"], answer: 2, why: "Pínpín gẹ́gẹ́ bí apá ilé ìtajà ń jẹ́ kí o rin ilé ìtajà lẹ́ẹ̀kan ṣoṣo." },
            { objective: "O2", q: "O ti ní ìrẹsì àti ẹyin nílé. Kí ni o máa sọ fún olùrànlọ́wọ́ náà?", options: ["Kò sí nǹkan", "Kí ó fi ìrẹsì àti ẹyin kún un", "Kí ó ṣe ètò oúnjẹ tuntun", "Pé o ti ní ìrẹsì àti ẹyin, kí ó lè yọ wọ́n kúrò"], answer: 3, why: "Sísọ ohun tí o ní fún un ń yọ àwọn nǹkan wọ̀nyẹn kúrò nínú àkọsílẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Lílo olùrànlọ́wọ́ ohùn fóònù rẹ fún ìránnilétí",
          minutes: 6,
          goal: "Ṣe ìránnilétí tàbí aago ìkàsí (timer) nípa bíbá fóònù rẹ sọ̀rọ̀.",
          text: [
            "Ọ̀pọ̀ fóònù ní olùrànlọ́wọ́ ohùn nínú wọn: Siri lórí iPhone, àti Google Assistant tàbí Gemini lórí ọ̀pọ̀ fóònù Android. O sọ̀rọ̀, fóònù sì ṣe iṣẹ́ kékeré kan, bí ṣíṣe ìránnilétí, aago ìkàsí tàbí aago ìjíde (alarm).",
            "Láti bẹ̀rẹ̀ rẹ̀, o sábà máa ń sọ \"Hey Siri\" tàbí \"Hey Google\", tàbí kí o tẹ bọ́tìnnì ẹ̀gbẹ́ tàbí bọ́tìnnì ilé mọ́lẹ̀ fún ìgbà díẹ̀. Tí kò bá tíì ṣí, ní kí ẹnìkan nínú ẹbí rẹ ràn ọ́ lọ́wọ́ láti tàn án nínú Settings.",
            "Lẹ́yìn náà sọ̀rọ̀ ketekete. Ọ̀pọ̀ fóònù ń gbọ́ Gẹ̀ẹ́sì: \"Remind me to go grocery shopping on Thursday at 10 am.\" (rán mi létí láti lọ rajà ní Ọjọ́bọ̀ ní agogo 10 àárọ̀). \"Set a timer for 20 minutes.\" (ka ìṣẹ́jú 20). \"Remind me to call Ruth tomorrow at 5 pm.\" (rán mi létí láti pe Ruth lọ́la ní agogo 5 ìrọ̀lẹ́). Fóònù máa sọ fún ọ tàbí fi hàn ọ́ pé ó ti ṣe é."
          ],
          steps: ["Sọ \"Hey Siri\" tàbí \"Hey Google\", tàbí tẹ bọ́tìnnì ẹ̀gbẹ́ tàbí bọ́tìnnì ilé mọ́lẹ̀.", "Dúró de ìró tàbí ìmọ́lẹ̀ lójú fóònù.", "Sọ ohun tí o fẹ́, pẹ̀lú ọjọ́ àti àkókò.", "Wo ojú fóònù láti rí i pé ó ti wà."],
          words: [["Olùrànlọ́wọ́ ohùn", "olùrànlọ́wọ́ tí ó wà nínú fóònù rẹ tí ó ń ṣe iṣẹ́ kékeré nígbà tí o bá bá a sọ̀rọ̀."], ["Ìránnilétí", "ọ̀rọ̀ tí fóònù rẹ ń fi hàn ọ́ ní àkókò tí o yàn (reminder)."]],
          slides: [
            { title: "Fóònù rẹ lè gbọ́ ọ", bullets: ["Siri lórí iPhone", "Google Assistant tàbí Gemini lórí Android"] },
            { title: "Jí i", bullets: ["Sọ \"Hey Siri\" tàbí \"Hey Google\"", "Tàbí tẹ bọ́tìnnì ẹ̀gbẹ́ tàbí bọ́tìnnì ilé mọ́lẹ̀"] },
            { title: "Sọ ohun tí o nílò", bullets: ["\"Remind me to shop Thursday at 10 am.\" (rajà ní Ọjọ́bọ̀, agogo 10 àárọ̀)", "\"Set a timer for 20 minutes.\" (ka ìṣẹ́jú 20)", "Wo ojú fóònù láti rí i pé ó ti wà"] }
          ],
          tryIt: "Lo olùrànlọ́wọ́ ohùn fóònù rẹ láti ṣe ìránnilétí láti lọ rajà oúnjẹ ní ọjọ́ àti àkókò tí ó bá ọ mu. Wò ó pé ó hàn lójú fóònù.",
          youCanNow: "ṣe ìránnilétí tàbí aago ìkàsí nípa bíbá fóònù rẹ sọ̀rọ̀.",
          quickCheck: [
            { objective: "O3", q: "Kí ni olùrànlọ́wọ́ ohùn lórí fóònù?", options: ["Ènìyàn tí ó ń pè ọ́ padà", "Olùrànlọ́wọ́ inú fóònù tí o ń bá sọ̀rọ̀, bí Siri tàbí Google Assistant", "Ẹ̀rọ ìgbọ́rọ̀ fún etí", "App ọ̀rọ̀ ìránṣẹ́ (text)"], answer: 1, why: "Siri àti Google Assistant ń ṣe iṣẹ́ kékeré, bí ìránnilétí àti aago ìkàsí, nígbà tí o bá sọ̀rọ̀." },
            { objective: "O3", q: "O fẹ́ rántí láti pe ẹ̀gbọ́n tàbí àbúrò rẹ obìnrin ní ìrọ̀lẹ́ ọ̀la. Kí ni o máa sọ?", options: ["\"Call.\"", "\"Sister.\"", "\"Remind me to call my sister tomorrow at 6 pm.\" (rán mi létí láti pe arábìnrin mi lọ́la ní agogo 6 ìrọ̀lẹ́)", "\"Tomorrow.\""], answer: 2, why: "Ìbéèrè tó yé, pẹ̀lú iṣẹ́ náà, ọjọ́ àti àkókò, ń ṣe ìránnilétí tó wúlò." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àkọsílẹ̀, oúnjẹ àti rírajà",
        questions: [
          { objective: "O1", q: "Kí ni o yẹ kí o sọ fún olùrànlọ́wọ́ AI nígbà tí o bá ń béèrè èrò oúnjẹ?", options: ["Nọ́mbà báńkì rẹ", "\"Oúnjẹ\" nìkan", "Iye ènìyàn, àkókò rẹ, ohun tí o fẹ́ àti ohun tí o gbọ́dọ̀ yẹra fún", "Ọ̀rọ̀ aṣínà dókítà rẹ"], answer: 2, why: "Àwọn nǹkan wọ̀nyí ń ràn án lọ́wọ́ láti dábàá oúnjẹ tí ó bá ọ mu." },
          { objective: "O1", q: "Dókítà rẹ ní kí o má jẹ iyọ̀ púpọ̀, ṣùgbọ́n AI dábàá oúnjẹ tí iyọ̀ rẹ̀ pọ̀. Kí ni o máa ṣe?", options: ["Tẹ̀lé ìmọ̀ràn dókítà rẹ", "Tẹ̀lé AI", "Dẹ́kun jíjẹun", "Má fetí sí èyíkéyìí"], answer: 0, why: "Dókítà rẹ mọ ìlera rẹ; AI kò mọ̀ ọ́n." },
          { objective: "O2", q: "Kí ló dé tí o fi máa ní kí olùrànlọ́wọ́ pín àkọsílẹ̀ rẹ gẹ́gẹ́ bí apá ilé ìtajà?", options: ["Ó ń mú kí oúnjẹ dín owó kù", "Ó pọn dandan", "Kí ó lè tẹ̀ jáde ní àwọ̀", "Kí o lè rin ilé ìtajà lẹ́ẹ̀kan ṣoṣo"], answer: 3, why: "Pínpín gẹ́gẹ́ bí apá ilé ìtajà ń mú kí rírajà yára." },
          { objective: "O3", q: "Èwo ni olùrànlọ́wọ́ ohùn tí ó wà nínú ọ̀pọ̀ fóònù?", options: ["Ẹ̀rọ ìṣirò (Calculator)", "Siri", "Kámẹ́rà", "Iná fóònù (Flashlight)"], answer: 1, why: "Siri lórí iPhone àti Google Assistant tàbí Gemini lórí Android ń gbọ́ ìbéèrè tí a sọ jáde." },
          { objective: "O3", q: "Ìbéèrè ohùn wo ni yóò ṣe ìránnilétí tó wúlò?", options: ["\"Shopping.\"", "\"Remind me to go shopping Thursday at 10 am.\" (lọ rajà ní Ọjọ́bọ̀, agogo 10 àárọ̀)", "\"Hello.\"", "\"Phone.\""], answer: 1, why: "Ó sọ ohun tí a ó rántí, ọjọ́ àti àkókò." }
        ]
      }
    },
    {
      name: "Orí 2: Àdéhùn àti ìwé",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fífi àdéhùn sínú kàlẹ́ńdà fóònù rẹ",
          minutes: 6,
          goal: "Fi àdéhùn dókítà sínú kàlẹ́ńdà fóònù rẹ pẹ̀lú ìkìlọ̀.",
          text: [
            "Fóònù rẹ ní app Calendar (kàlẹ́ńdà) tí ó lè gba gbogbo àdéhùn rẹ, kí ó sì kìlọ̀ fún ọ ṣáájú ọ̀kọ̀ọ̀kan. Èyí wúlò fún lílọ sọ́dọ̀ dókítà, gígẹ irun àti ọjọ́ ìbí àwọn ẹbí.",
            "Ọ̀nà tí ó rọrùn jù ni láti sọ fún olùrànlọ́wọ́ ohùn rẹ: \"Add an appointment with Dr. Lee on May 12 at 2 pm.\" (fi àdéhùn pẹ̀lú Dókítà Lee sí May 12 ní agogo 2 ọ̀sán). O tún lè ṣí app Calendar, tẹ àmì àfikún (+), tẹ orúkọ, yan ọjọ́ àti àkókò, kí o sì tẹ Add tàbí Save.",
            "Ṣe ìkìlọ̀ (alert) kí fóònù lè rán ọ létí ṣáájú àkókò, bí ọjọ́ kan ṣáájú àti wákàtí kan ṣáájú. Wá àṣàyàn tí a pè ní Alert tàbí Notification nígbà tí o bá ń fi àdéhùn náà kún un."
          ],
          steps: ["Ṣí app Calendar, tàbí sọ fún olùrànlọ́wọ́ ohùn rẹ.", "Tẹ àmì àfikún (+) láti fi àdéhùn kún un.", "Tẹ orúkọ, bí \"Àyẹ̀wò Dókítà Lee\".", "Yan ọjọ́ àti àkókò.", "Yan ìkìlọ̀, bí ọjọ́ 1 ṣáájú.", "Tẹ Add tàbí Save."],
          words: [["App Calendar", "app lórí fóònù rẹ tí ó ń tọ́jú àwọn àdéhùn rẹ gẹ́gẹ́ bí ọjọ́ (kàlẹ́ńdà)."], ["Ìkìlọ̀ (Alert)", "ìró tàbí ọ̀rọ̀ tí fóònù ń fún ọ ṣáájú àdéhùn."]],
          slides: [
            { title: "Kàlẹ́ńdà fóònù rẹ", bullets: ["Ó ń tọ́jú gbogbo àdéhùn rẹ", "Ó ń kìlọ̀ fún ọ ṣáájú ọ̀kọ̀ọ̀kan"] },
            { title: "Ọ̀nà méjì láti fi kún un", bullets: ["Sọ fún olùrànlọ́wọ́ ohùn rẹ", "Tàbí ṣí Calendar kí o sì tẹ +"] },
            { title: "Kún un", bullets: ["Orúkọ, ọjọ́ àti àkókò", "Yan ìkìlọ̀, bí ọjọ́ 1 ṣáájú", "Tẹ Add tàbí Save"] }
          ],
          tryIt: "Fi àdéhùn gidi kan tàbí ọjọ́ ìbí ẹnìkan nínú ẹbí rẹ sínú kàlẹ́ńdà fóònù rẹ pẹ̀lú ìkìlọ̀ ọjọ́ kan ṣáájú. Wò ó pé ó hàn ní ọjọ́ tó tọ́.",
          youCanNow: "fi àdéhùn sínú kàlẹ́ńdà fóònù rẹ, kí o sì gba ìránnilétí ṣáájú rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ìkìlọ̀ lórí àdéhùn kàlẹ́ńdà ń ṣe?", options: ["Ó ń jẹ́ kí fóònù rán ọ létí ṣáájú àdéhùn", "Ó ń fagi lé àdéhùn náà", "Ó ń pe dókítà fún ọ", "Ó ń fi hàn àwọn àjèjì"], answer: 0, why: "Ìkìlọ̀ ń kìlọ̀ fún ọ ṣáájú àkókò, bí ọjọ́ kan tàbí wákàtí kan ṣáájú." },
            { objective: "O4", q: "O ṣẹ̀ṣẹ̀ ṣe àdéhùn àyẹ̀wò fún Ọjọ́ Ìṣẹ́gun tó ń bọ̀. Kí ni ìgbésẹ̀ àkọ́kọ́ láti fi í sínú app Calendar?", options: ["Pa fóònù rẹ", "Pa àwọn àdéhùn àtijọ́ rẹ́", "Kọ ọ́ sínú ọ̀rọ̀ ìránṣẹ́ sí ara rẹ", "Tẹ àmì àfikún (+) láti fi àdéhùn kún un"], answer: 3, why: "Tẹ àmì àfikún, lẹ́yìn náà tẹ orúkọ kí o sì yan ọjọ́, àkókò àti ìkìlọ̀." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Jíjẹ́ kí wọ́n ṣàlàyé lẹ́tà tó rúni lójú",
          minutes: 5,
          goal: "Ní kí olùrànlọ́wọ́ AI ṣàlàyé lẹ́tà tó rúni lójú ní ọ̀rọ̀ tó rọrùn, láìfi ìsọfúnni àdáni hàn.",
          text: [
            "Lẹ́tà láti ilé-iṣẹ́ ìbánigbófò, ilé-iṣẹ́ iná tàbí omi, tàbí ọ́fíìsì lè kún fún ọ̀rọ̀ líle. Olùrànlọ́wọ́ AI lè ṣàlàyé wọn ní èdè tó rọrùn.",
            "Lákọ̀ọ́kọ́, bò tàbí yọ ìsọfúnni àdáni kúrò: orúkọ, nọ́mbà àkáǹtì, nọ́mbà Medicare tàbí Social Security, àti àdírẹ́sì rẹ. Lẹ́yìn náà tẹ apá tó rú ọ lójú, tàbí ṣàpèjúwe rẹ̀, kí o sì béèrè: \"Ṣàlàyé èyí ní ọ̀rọ̀ tó rọrùn. Ṣé ohun kan wà tí mo gbọ́dọ̀ ṣe?\"",
            "Àwọn olùrànlọ́wọ́ kan jẹ́ kí o ya fọ́tò ojú-ìwé kan. Tí o bá ṣe èyí, bo ìsọfúnni àdáni kí o tó ya fọ́tò náà. Fún ohunkóhun nípa owó, àǹfààní ìjọba (benefits) tàbí ìlera, fìdí ohun tí o máa ṣe múlẹ̀ nípa pípe nọ́mbà tí a tẹ̀ sórí lẹ́tà náà fúnra rẹ̀, tàbí béèrè lọ́wọ́ ẹnìkan nínú ẹbí tí o fọkàn tán."
          ],
          steps: ["Bò tàbí yọ orúkọ, nọ́mbà àti àdírẹ́sì rẹ kúrò.", "Tẹ tàbí ṣàpèjúwe apá tó rú ọ lójú nìkan.", "Béèrè: \"Ṣàlàyé èyí ní ọ̀rọ̀ tó rọrùn. Kí ni mo gbọ́dọ̀ ṣe?\"", "Fìdí rẹ̀ múlẹ̀ nípa pípe nọ́mbà tí a tẹ̀ sórí lẹ́tà náà."],
          words: [["Èdè tó rọrùn", "ọ̀rọ̀ ojoojúmọ́ tó rọrùn tí ó yé ènìyàn dáadáa (plain language)."], ["Nọ́mbà àkáǹtì", "nọ́mbà àdáni tí ilé-iṣẹ́ kan ń lò fún àkáǹtì rẹ; má ṣe fi í fún AI láé."]],
          slides: [
            { title: "Lẹ́tà líle, ọ̀rọ̀ tó rọrùn", bullets: ["Ìbánigbófò, iná àti omi, ọ́fíìsì", "AI lè ṣàlàyé wọn ní ìrọ̀rùn"] },
            { title: "Kọ́kọ́ dáàbò bo ara rẹ", bullets: ["Bo orúkọ àti nọ́mbà àkáǹtì", "Yọ nọ́mbà Medicare àti Social Security kúrò", "Yọ àdírẹ́sì rẹ kúrò"] },
            { title: "Béèrè kí o sì fìdí rẹ̀ múlẹ̀", bullets: ["\"Ṣàlàyé ní ọ̀rọ̀ tó rọrùn. Kí ni mo gbọ́dọ̀ ṣe?\"", "Pe nọ́mbà tí a tẹ̀ sórí lẹ́tà náà láti fìdí rẹ̀ múlẹ̀"] }
          ],
          tryIt: "Wá lẹ́tà tàbí ìwé owó (bill) kan tí gbólóhùn kan nínú rẹ̀ kò yé ọ dáadáa. Yọ gbogbo ìsọfúnni àdáni kúrò, tẹ gbólóhùn yẹn nìkan sínú olùrànlọ́wọ́ kan, kí o sì ní kí ó ṣàlàyé rẹ̀ ní ọ̀rọ̀ tó rọrùn.",
          youCanNow: "jẹ́ kí wọ́n ṣàlàyé lẹ́tà tó rú ọ lójú ní ọ̀rọ̀ tó rọrùn, nígbà tí o ń pa ìsọfúnni àdáni rẹ mọ́.",
          quickCheck: [
            { objective: "O5", q: "Kí ni èdè tó rọrùn?", options: ["Ọ̀rọ̀ ojoojúmọ́ tó rọrùn", "Ọ̀rọ̀ òfin", "Èdè àjèjì", "Kóòdù kúkúrú gan-an"], answer: 0, why: "Èdè tó rọrùn ni ọ̀rọ̀ ojoojúmọ́ tó rọrùn tí ó yé ènìyàn dáadáa." },
            { objective: "O5", q: "O fẹ́ ya fọ́tò lẹ́tà ìbánigbófò fún AI. Kí ni o máa kọ́kọ́ ṣe?", options: ["Mú fọ́tò náà tóbi sí i", "Bo orúkọ rẹ, àdírẹ́sì àti nọ́mbà àkáǹtì", "Fi nọ́mbà Medicare rẹ kún un kí ó lè ṣàyẹ̀wò", "Fi ránṣẹ́ sí ọ̀rẹ́ kan"], answer: 1, why: "Bo ìsọfúnni àdáni kí o tó ya fọ́tò náà." }
          ]
        },
        {
          objectives: ["O1","O2","O3"],
          title: "Ṣíṣe gbogbo rẹ̀ pọ̀: ọ̀sẹ̀ rẹ, tí ó rọrùn sí i",
          minutes: 5,
          goal: "Lo AI àti fóònù rẹ pọ̀ láti ṣètò ọ̀sẹ̀ kan.",
          text: [
            "O ti ní ọ̀pọ̀ ọgbọ́n kékeré báyìí: bíbéèrè èrò oúnjẹ, ṣíṣe àkọsílẹ̀, ṣíṣe ìránnilétí àti fífi àdéhùn kún kàlẹ́ńdà. Tí o bá lò wọ́n pọ̀, wọ́n lè ṣètò odindi ọ̀sẹ̀ kan.",
            "Ìṣe tó rọrùn kan: ní Ọjọ́ Àìkú, béèrè oúnjẹ alẹ́ mẹ́ta àti àkọsílẹ̀ ohun tí o ó rà kan lọ́wọ́ olùrànlọ́wọ́ náà. Ṣe ìránnilétí fún ọjọ́ tí o máa lọ rajà. Wo kàlẹ́ńdà rẹ láti rí àwọn àdéhùn ọ̀sẹ̀ náà, kí o sì fi ohun tuntun kún un.",
            "Jẹ́ kí ó rọrùn. Lo àwọn irinṣẹ́ tí ó ń ràn ọ́ lọ́wọ́, kí o sì fi àwọn tí kò ràn ọ́ lọ́wọ́ sílẹ̀. Àkọsílẹ̀ lórí ìwé ṣì ń ṣiṣẹ́ dáadáa, bíbéèrè ìrànlọ́wọ́ lọ́wọ́ ẹnìkan nínú ẹbí sì dára nígbà gbogbo."
          ],
          steps: ["Béèrè oúnjẹ alẹ́ mẹ́ta lọ́wọ́ olùrànlọ́wọ́ AI.", "Béèrè àkọsílẹ̀ ohun tí o ó rà kan.", "Ṣe ìránnilétí fún ọjọ́ tí o máa lọ rajà.", "Wo kàlẹ́ńdà rẹ kí o sì fi àdéhùn tuntun kún un."],
          words: [["Ìṣe déédéé", "àwọn ìgbésẹ̀ tí o ń ṣe lọ́nà kan náà nígbà gbogbo (routine)."]],
          slides: [
            { title: "Ìṣe Ọjọ́ Àìkú tó rọrùn", bullets: ["Oúnjẹ alẹ́ mẹ́ta láti ọ̀dọ̀ AI", "Àkọsílẹ̀ ohun tí o ó rà kan", "Ìránnilétí fún rírajà"] },
            { title: "Ṣàyẹ̀wò ọ̀sẹ̀ rẹ", bullets: ["Wo kàlẹ́ńdà rẹ", "Fi ohun tuntun kún un pẹ̀lú ìkìlọ̀"] },
            { title: "Jẹ́ kí ó rọrùn", bullets: ["Lo ohun tí ó ń ràn ọ́ lọ́wọ́", "Àkọsílẹ̀ lórí ìwé ṣì ń ṣiṣẹ́", "Béèrè ìrànlọ́wọ́ lọ́wọ́ ẹbí nígbàkígbà"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣètò oúnjẹ alẹ́ mẹ́ta tó rọrùn fún ọ̀sẹ̀ tó ń bọ̀ pẹ̀lú olùrànlọ́wọ́ AI, béèrè àkọsílẹ̀ ohun tí o ó rà kan, ṣe ìránnilétí lórí fóònù fún ọjọ́ tí o máa lọ rajà, kí o sì fi àdéhùn gidi kan sínú kàlẹ́ńdà rẹ.",
          youCanNow: "lo AI àti fóònù rẹ pọ̀ láti ṣètò oúnjẹ, rajà, kí o sì máa tọ́jú àwọn àdéhùn rẹ.",
          quickCheck: [
            { objective: "O1", q: "Àwọn irinṣẹ́ wo ni ó lè jọ ṣètò ọ̀sẹ̀ rẹ?", options: ["Kàlẹ́ńdà ìwé nìkan", "Olùrànlọ́wọ́ AI nìkan", "Èrò oúnjẹ, àkọsílẹ̀ ohun tí o ó rà, ìránnilétí àti kàlẹ́ńdà rẹ", "Kò sí; ó le jù"], answer: 2, why: "Àwọn ọgbọ́n kékeré láti inú ẹ̀kọ́ yìí ń ṣiṣẹ́ pọ̀ láti ṣètò odindi ọ̀sẹ̀ kan." },
            { objective: "O1", q: "Ọjọ́ Àìkú ni. Kí ni ìgbésẹ̀ àkọ́kọ́ tó rọrùn láti ṣètò ọ̀sẹ̀ rẹ?", options: ["Ra gbogbo nǹkan inú ilé ìtajà", "Pa gbogbo ìránnilétí", "Ka àwọn lẹ́tà àtijọ́", "Béèrè oúnjẹ alẹ́ mẹ́ta àti àkọsílẹ̀ ohun tí o ó rà kan lọ́wọ́ olùrànlọ́wọ́ náà"], answer: 3, why: "Ìṣe náà bẹ̀rẹ̀ pẹ̀lú oúnjẹ alẹ́ mẹ́ta àti àkọsílẹ̀ kan, lẹ́yìn náà ìránnilétí àti wíwo kàlẹ́ńdà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àdéhùn àti ìwé",
        questions: [
          { objective: "O4", q: "Nínú app Calendar, kí ni o máa tẹ láti fi àdéhùn kún un?", options: ["Bọ́tìnnì ohùn (volume)", "Kámẹ́rà", "Àmì bátìrì", "Àmì àfikún (+)"], answer: 3, why: "Àmì àfikún ń fi àdéhùn tuntun kún un." },
          { objective: "O4", q: "Kí ló dé tí o fi máa ṣe ìkìlọ̀ lórí àdéhùn?", options: ["Kí fóònù lè rán ọ létí ṣáájú rẹ̀", "Kí ó lè dín owó kù", "Kí dókítà lè pè ọ́", "Ó ń pa àdéhùn náà rẹ́"], answer: 0, why: "Ìkìlọ̀ ń kìlọ̀ fún ọ ṣáájú àkókò." },
          { objective: "O5", q: "Kí o tó béèrè lọ́wọ́ AI nípa lẹ́tà kan, o yẹ kí o:", options: ["Tẹ nọ́mbà àkáǹtì rẹ", "Fi gbogbo lẹ́tà náà pẹ̀lú orúkọ rẹ ránṣẹ́", "Bo tàbí yọ ìsọfúnni àdáni kúrò", "Fi nọ́mbà Medicare rẹ hàn"], answer: 2, why: "Ìsọfúnni àdáni kò gbọ́dọ̀ wọ inú olùrànlọ́wọ́ AI láé." },
          { objective: "O5", q: "AI ṣàlàyé lẹ́tà kan nípa àǹfààní ìjọba (benefits) rẹ. Báwo ni o ṣe máa fìdí ohun tí o máa ṣe múlẹ̀?", options: ["Gba AI gbọ́ pátápátá", "Má ṣe nǹkan kan", "Béèrè lọ́wọ́ àjèjì lórí ayélujára", "Pe nọ́mbà tí a tẹ̀ sórí lẹ́tà náà"], answer: 3, why: "Ọ́fíìsì tí ó fi lẹ́tà náà ránṣẹ́ ni orísun òṣìṣẹ́." },
          { objective: "O2", q: "Kí ni ìṣe Ọjọ́ Àìkú tó dára láti inú ẹ̀kọ́ yìí?", options: ["Pa kàlẹ́ńdà rẹ rẹ́", "Fi ọ̀rọ̀ aṣínà rẹ hàn", "Ṣètò oúnjẹ alẹ́, ṣe àkọsílẹ̀, ṣe ìránnilétí rírajà, wo kàlẹ́ńdà rẹ", "Ra fóònù tuntun"], answer: 2, why: "Ó da àwọn ọgbọ́n láti inú gbogbo ẹ̀kọ́ pọ̀." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Ìgbésí Ayé Ojoojúmọ́",
    questions: [
      { objective: "O1", q: "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ pẹ̀lú oúnjẹ nípa:", options: ["Síse oúnjẹ náà", "Dídábàá èrò tó rọrùn tí ó bá ọ mu", "Rírajà oúnjẹ fún ọ", "Mímọ oúnjẹ pàtàkì rẹ láti ọ̀dọ̀ dókítà rẹ"], answer: 1, why: "Ó ń dábàá èrò nígbà tí o bá sọ ohun tí o nílò fún un." },
      { objective: "O1", q: "Ìbéèrè oúnjẹ wo ló yé jù?", options: ["\"Mo ń sè fún ẹnìkan. Dábàá oúnjẹ alẹ́ mẹ́ta tó rọrùn, tí iyọ̀ rẹ̀ kéré, tí kò ju ìṣẹ́jú 30 lọ.\"", "\"oúnjẹ\"", "\"oúnjẹ alẹ́?\"", "\"jẹun\""], answer: 0, why: "Ó sọ iye ènìyàn, àkókò, àti ohun tí a ó yẹra fún." },
      { objective: "O1", q: "Tí oúnjẹ pàtàkì dókítà rẹ àti èrò AI kò bá bára mu, tẹ̀lé:", options: ["Dókítà rẹ", "AI", "Èyí tí ó bá rọrùn jù", "Kò sí èyíkéyìí"], answer: 0, why: "Dókítà rẹ mọ ìlera rẹ." },
      { objective: "O2", q: "Èròjà ni:", options: ["Irinṣẹ́ ilé ìdáná", "Ọ̀kan lára àwọn oúnjẹ tí a fi ń se oúnjẹ kan", "Ilé ìtajà", "App kan"], answer: 1, why: "Èròjà ni àwọn oúnjẹ tí a fi ń se oúnjẹ kan." },
      { objective: "O2", q: "Láti gba àkọsílẹ̀ kan fún oúnjẹ mẹ́ta, o máa béèrè:", options: ["\"Kí ni ọ̀rọ̀ aṣínà mi?\"", "\"Pa àwọn oúnjẹ náà rẹ́.\"", "\"Ṣe àkọsílẹ̀ ohun tí mo máa rà kan ṣoṣo fún oúnjẹ alẹ́ mẹ́ta wọ̀nyí.\"", "\"Pe ilé ìtajà.\""], answer: 2, why: "Olùrànlọ́wọ́ náà ń kó àwọn èròjà pọ̀ sínú àkọsílẹ̀ kan." },
      { objective: "O2", q: "Sísọ ohun tí o ti ní nílé fún olùrànlọ́wọ́ náà ń ràn án lọ́wọ́ láti:", options: ["Tẹ̀ jáde ní àwọ̀", "Gba owó díẹ̀ lọ́wọ́ rẹ", "Pe àwọn ẹbí rẹ", "Yọ àwọn nǹkan wọ̀nyẹn kúrò nínú àkọsílẹ̀"], answer: 3, why: "Ó ń yọ àwọn nǹkan tí o kò nílò láti rà kúrò." },
      { objective: "O2", q: "App Notes wà fún:", options: ["Yíya fọ́tò", "Pípe ènìyàn", "Kíkọ àti fífi àkọsílẹ̀ kúkúrú pamọ́", "Gbígbọ́ orin"], answer: 2, why: "Notes ń tọ́jú àkọsílẹ̀ sórí fóònù rẹ." },
      { objective: "O3", q: "Siri àti Google Assistant jẹ́:", options: ["Olùrànlọ́wọ́ ohùn tí ó wà nínú fóònù", "Ilé ìtajà oúnjẹ", "Dókítà", "Àdírẹ́sì ímeèlì"], answer: 0, why: "Wọ́n ń ṣe iṣẹ́ kékeré nígbà tí o bá sọ̀rọ̀." },
      { objective: "O3", q: "Ọ̀nà kan láti jí olùrànlọ́wọ́ ohùn ni láti:", options: ["Mi fóònù", "Ṣí kámẹ́rà", "Pa fóònù", "Sọ \"Hey Siri\" tàbí \"Hey Google\""], answer: 3, why: "Ọ̀rọ̀ ìjí tàbí títẹ bọ́tìnnì ẹ̀gbẹ́ tàbí bọ́tìnnì ilé mọ́lẹ̀ ń bẹ̀rẹ̀ rẹ̀." },
      { objective: "O3", q: "Ìbéèrè ohùn wo ni ó ń ṣe aago ìkàsí (timer)?", options: ["\"Timer.\"", "\"Set a timer for 20 minutes.\" (ka ìṣẹ́jú 20)", "\"Hello phone.\"", "\"Cooking.\""], answer: 1, why: "Ó sọ ohun tí a ó ṣe àti fún ìgbà mélòó." },
      { objective: "O3", q: "Lẹ́yìn tí o bá ṣe ìránnilétí pẹ̀lú ohùn, o yẹ kí o:", options: ["Pa fóònù", "Wo ojú fóònù láti rí i pé ó ti wà", "Pa app náà rẹ́", "Má ṣe nǹkan kan"], answer: 1, why: "Wíwò ń fìdí rẹ̀ múlẹ̀ pé ó ti wà dáadáa." },
      { objective: "O4", q: "App Calendar ń ràn ọ́ lọ́wọ́ láti:", options: ["Ṣe eré", "Ya fọ́tò", "Fi owó ránṣẹ́", "Tọ́jú àdéhùn kí o sì gba ìránnilétí"], answer: 3, why: "Ó ń tọ́jú àdéhùn gẹ́gẹ́ bí ọjọ́, ó sì lè kìlọ̀ fún ọ." },
      { objective: "O4", q: "Nígbà tí o bá ń fi àdéhùn kún un, kí ni o máa kọ sí i?", options: ["Orúkọ, ọjọ́ àti àkókò", "Nọ́mbà báńkì rẹ", "Ọ̀rọ̀ aṣínà rẹ", "Nọ́mbà Medicare rẹ"], answer: 0, why: "Orúkọ, ọjọ́ àti àkókò ni kàlẹ́ńdà nílò." },
      { objective: "O4", q: "Ìkìlọ̀ ọjọ́ kan ṣáájú àdéhùn túmọ̀ sí:", options: ["A ti fagi lé àdéhùn náà", "Dókítà máa pè ọ́", "Fóònù rẹ máa rán ọ létí ní ọjọ́ tó ṣáájú rẹ̀", "Àdéhùn náà máa yí padà"], answer: 2, why: "Ìkìlọ̀ ń kìlọ̀ fún ọ ṣáájú àkókò." },
      { objective: "O4", q: "O tún lè fi àdéhùn kún un nípa:", options: ["Ṣíṣí kámẹ́rà", "Fífi lẹ́tà ránṣẹ́ nípasẹ̀ ilé ifiwéránṣẹ́", "Pípa fóònù", "Sísọ fún olùrànlọ́wọ́ ohùn rẹ"], answer: 3, why: "Olùrànlọ́wọ́ ohùn lè fi àdéhùn kún kàlẹ́ńdà." },
      { objective: "O5", q: "Kí o tó tẹ apá kan lẹ́tà sínú AI, yọ:", options: ["Ọ̀rọ̀ líle", "Ọjọ́ náà", "Orúkọ, nọ́mbà àkáǹtì àti àdírẹ́sì rẹ", "Kò sí nǹkan"], answer: 2, why: "Ìsọfúnni àdáni kò gbọ́dọ̀ wọ inú AI láé." },
      { objective: "O5", q: "Tí o bá ya fọ́tò lẹ́tà fún AI, o yẹ kí o kọ́kọ́:", options: ["Tan iná kámẹ́rà (flash)", "Bo ìsọfúnni àdáni", "Fi ọ̀rọ̀ aṣínà rẹ kún un", "Kọ nọ́mbà Social Security rẹ sórí rẹ̀"], answer: 1, why: "Bíbo ìsọfúnni ń dáàbò bo ìpamọ́ rẹ." },
      { objective: "O5", q: "\"Èdè tó rọrùn\" túmọ̀ sí:", options: ["Ọ̀rọ̀ ojoojúmọ́ tó rọrùn", "Èdè àjèjì", "Ọ̀rọ̀ òfin", "Kóòdù kọ̀mpútà"], answer: 0, why: "Èdè tó rọrùn ń yé ènìyàn dáadáa." },
      { objective: "O5", q: "Láti fìdí ohun tí lẹ́tà àǹfààní ìjọba fẹ́ kí o ṣe múlẹ̀, o máa:", options: ["Pe nọ́mbà tí a tẹ̀ sórí lẹ́tà náà", "Gba AI gbọ́", "Gbé e sórí ayélujára", "Má fiyè sí i"], answer: 0, why: "Ẹni tí ó fi ránṣẹ́ ni orísun òṣìṣẹ́." },
      { objective: "O2", q: "Tí irinṣẹ́ kan kò bá ràn ọ́ lọ́wọ́, ẹ̀kọ́ yìí dábàá pé kí o:", options: ["Ra fóònù tuntun", "Fi í sílẹ̀ kí o sì lo ohun tí ó ń ṣiṣẹ́, kódà ìwé", "Dẹ́kun ṣíṣètò", "Fi ọ̀rọ̀ aṣínà rẹ hàn"], answer: 1, why: "Jẹ́ kí ó rọrùn kí o sì lo ohun tí ó ń ràn ọ́ lọ́wọ́." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      1,
      2,
      4,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Èrò oúnjẹ tó bá ọ mu",
        objective: "O1",
        notYet: "Ìbéèrè náà kò yé, tàbí àwọn oúnjẹ náà kò bá ohun tí o nílò mu.",
        meets: "Oúnjẹ alẹ́ mẹ́ta tí ó bá iye ènìyàn, àkókò rẹ, ohun tí o fẹ́ àti ohun tí o gbọ́dọ̀ yẹra fún mu.",
        exceeds: "Àwọn oúnjẹ náà tún tẹ̀lé oúnjẹ pàtàkì èyíkéyìí tí dókítà rẹ fún ọ."
      },
      {
        name: "Àkọsílẹ̀ ohun tí a ó rà kan",
        objective: "O2",
        notYet: "Kò sí àkọsílẹ̀, tàbí àkọsílẹ̀ ọ̀tọ̀ọ̀tọ̀ fún oúnjẹ kọ̀ọ̀kan.",
        meets: "Àkọsílẹ̀ kan fún gbogbo oúnjẹ alẹ́ mẹ́ta, tí a fi pamọ́ sínú Notes, tẹ̀ jáde tàbí kọ sílẹ̀.",
        exceeds: "A pín in gẹ́gẹ́ bí apá ilé ìtajà, a sì yọ àwọn nǹkan tí o ti ní kúrò."
      },
      {
        name: "Ìránnilétí rírajà",
        objective: "O3",
        notYet: "Kò sí ìránnilétí, tàbí kò ní ọjọ́ tàbí àkókò.",
        meets: "Ìránnilétí tí ó ní ọjọ́ àti àkókò, tí a wò lójú fóònù.",
        exceeds: "A ṣe é nípa bíbá olùrànlọ́wọ́ ohùn sọ̀rọ̀."
      },
      {
        name: "Àdéhùn nínú kàlẹ́ńdà",
        objective: "O4",
        notYet: "Kò sí àdéhùn, tàbí ọjọ́ tàbí àkókò kò tọ́.",
        meets: "Àdéhùn gidi kan pẹ̀lú orúkọ, ọjọ́ àti àkókò tó tọ́.",
        exceeds: "Ó ní ìkìlọ̀, bí ọjọ́ kan ṣáájú."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé wọ́n ń lo ìránnilétí tàbí ìkìlọ̀ kàlẹ́ńdà fún àdéhùn láàárín ọjọ́ 30 (ìwádìí lẹ́yìn ẹ̀kọ́)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé wọ́n ń pàdánù àdéhùn díẹ̀ sí i, tàbí pé oúnjẹ àti rírajà kò dààmú wọn tó tẹ́lẹ̀ mọ́",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Seniors and Technology míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tí ó ní olùrànlọ́wọ́ ohùn (Siri, Google Assistant tàbí Gemini) àti app Calendar",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: ChatGPT, Microsoft Copilot tàbí Google Gemini",
      "Lẹ́tà àpẹẹrẹ tí kò ní ìsọfúnni àdáni gidi kankan, fún àṣeṣe lẹ́tà",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní ìpàdé kúkúrú tó rọrùn: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ran àwọn akẹ́kọ̀ọ́ lọ́wọ́ láti tan olùrànlọ́wọ́ ohùn wọn nínú Settings ṣáájú Ẹ̀kọ́ 3; ó sábà máa ń wà ní pípa.",
      "Pín àwọn akẹ́kọ̀ọ́ sí ẹgbẹ́ gẹ́gẹ́ bí irú fóònù (iPhone tàbí Android) kí ìgbésẹ̀ lójú fóònù lè bára mu.",
      "Lo lẹ́tà àpẹẹrẹ fún àṣeṣe; má ṣe ní kí àwọn akẹ́kọ̀ọ́ fi nọ́mbà àkáǹtì tàbí Medicare gidi hàn láé.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé oúnjẹ pàtàkì ń wá láti ọ̀dọ̀ dókítà wọn, àti pé ìbéèrè nípa àǹfààní ìjọba ń lọ sí nọ́mbà tí ó wà lórí lẹ́tà.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
