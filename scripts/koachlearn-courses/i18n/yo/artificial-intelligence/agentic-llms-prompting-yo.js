"use strict";

// Koach Learn course (Yoruba translation of artificial-intelligence/agentic-llms-prompting.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-llms-prompting-yo",
  lang: "yo",
  translationOf: "agentic-llms-prompting",
  category: "Artificial Intelligence",
  name: "Òye LLM àti Ọgbọ́n Kíkọ Prompt",
  skills: "Ṣíṣàlàyé token àti context, Kíkọ system prompt, Lílo àpẹẹrẹ, Gbígba ìdáhùn JSON tó ní ètò, Pípe LLM láti inú Python, Ṣíṣàyẹ̀wò prompt",
  outcome: "kọ system prompt tó ṣeé gbẹ́kẹ̀lé fún agent kan kí o sì ṣàyẹ̀wò rẹ̀: ó sọ ipa, iṣẹ́, àwọn òfin àti bí ìdáhùn ṣe máa rí pẹ̀lú àpẹẹrẹ, ó dá JSON tó mọ́ padà, o sì ti dán an wò lórí ohun ìdánwò márùn-ún nínú notebook Python kúkúrú.",
  about: [
    "Èyí ni ẹ̀kọ́ kejì nínú Design, Build, and Deploy Autonomous AI Agents. Ẹ̀rọ tó wà nínú gbogbo agent ni large language model (LLM), bí o sì ṣe ń fún un ní ìtọ́ni ló ń pinnu bóyá agent náà máa ṣe dáadáa. Ẹ̀kọ́ yìí kọ́ ọ bí LLM ṣe ń ṣiṣẹ́ ní ọ̀rọ̀ tó rọrùn, àti bí o ṣe lè fún un ní ìtọ́ni tó dára.",
    "Orí 1 sọ nípa bí model náà ṣe ń ṣiṣẹ́ àti bí o ṣe lè kọ prompt tó lágbára nínú chatbot ọ̀fẹ́. Orí 2 lọ sí Python nínú Google Colab, notebook ọ̀fẹ́ nínú browser rẹ, níbi tí o ti máa pe model láti inú kóòdù, béèrè fún JSON, kí o sì ṣàyẹ̀wò prompt rẹ bí onímọ̀ ẹ̀rọ.",
    "Kóòdù máa hàn bí ìlà kúkúrú nínú ọ̀rọ̀ ẹ̀kọ́. O lè dà wọ́n kọ sínú Colab. Tí o kò bá tíì kọ kóòdù rí, máa tẹ̀lé e; ẹ̀kọ́ \"Ìfihàn sí Kíkọ Ètò Kọ̀mpútà pẹ̀lú Python\" jẹ́ alábàárìn tó dára. Ìdánwò ìmọ̀ kan wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́."
  ],
  finalTask: "Kọ system prompt fún iṣẹ́ kan nínú agent rẹ láti ẹ̀kọ́ 1 (fún àpẹẹrẹ, \"pín ọ̀rọ̀ tó wọlé sí: ìbéèrè, ẹ̀sùn, ọjà tí a fẹ́ rà, òmíràn\"). Ó gbọ́dọ̀ ní ipa, iṣẹ́ náà, òfin mẹ́ta, bí JSON ìdáhùn ṣe máa rí gẹ́lẹ́, àti àpẹẹrẹ kan. Ṣiṣẹ́ rẹ̀ láti inú notebook Colab lórí ohun ìdánwò márùn-ún, pẹ̀lú ọ̀kan tó ní ẹ̀tàn, kọ ọ́ sílẹ̀ bóyá ìdáhùn kọ̀ọ̀kan jẹ́ JSON tó tọ́ tí ó sì pé, kí o sì yí prompt náà padà lẹ́ẹ̀kan láti tún àṣìṣe kan ṣe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí wọ́n ń kọ́ AI agent wọn àkọ́kọ́ nínú ètò Design, Build, and Deploy Autonomous AI Agents: àwọn oníṣòwò kékeré, àwọn tí ń yí iṣẹ́ padà, àwọn akẹ́kọ̀ọ́ àti òṣìṣẹ́ tí wọ́n ti parí ẹ̀kọ́ 1, tí wọ́n sì ti ṣètò iṣẹ́ agent kan.",
    startingPoint: "Wọ́n ti lo chatbot ọ̀fẹ́, wọ́n sì ti ṣètò agent kan sórí ìwé nínú ẹ̀kọ́ 1. Ọ̀pọ̀ jù lọ kò ní ìrírí kóòdù tàbí ó kéré, wọn kò sì tíì pe model láti inú kóòdù rí.",
    gap: "Agent kò lè ṣeé gbẹ́kẹ̀lé ju ìtọ́ni tí model rẹ̀ gbà lọ. Àwọn akẹ́kọ̀ọ́ nílò láti kọ system prompt tó yé, gba ìdáhùn tí ètò kọ̀mpútà lè kà, kí wọ́n sì máa ṣàyẹ̀wò prompt ní mímọ̀ọ́mọ̀, bí bẹ́ẹ̀ kọ́ agent wọn máa ṣe ohun tí a kò retí, ó sì máa bàjẹ́ lórí ohun tí kò wọ́pọ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; kóòdù bí ìlà kúkúrú láti dà kọ",
      "Ẹ̀rọ: kọ̀mpútà tó ní browser; Google Colab jẹ́ ọ̀fẹ́ ṣùgbọ́n kò sí ìdánilójú fún ohun èlò rẹ̀",
      "Ìpele API ọ̀fẹ́ ní òdiwọ̀n, wọ́n sì lè lo ìsọfúnni, nítorí náà kò sí ìsọfúnni àdáni tàbí ti oníbàárà nínú iṣẹ́ àṣeṣe",
      "API key gbọ́dọ̀ wà ní àṣírí, kí ó má sì sí nínú notebook tàbí àwòrán ojú-iboju (screenshot)",
      "Àkókò: ẹ̀kọ́ kúkúrú pẹ̀lú iṣẹ́ àṣeṣe kan nínú ọ̀kọ̀ọ̀kan"
    ],
    prerequisites: "Ẹ̀kọ́ àkọ́kọ́ nínú Design, Build, and Deploy Autonomous AI Agents. \"Ìfihàn sí Kíkọ Ètò Kọ̀mpútà pẹ̀lú Python\" jẹ́ alábàárìn tó wúlò."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí chatbot bá fún ọ ní ìdáhùn tí kò tọ́ ṣùgbọ́n tó dún bí ó dá a lójú", action: "ṣàlàyé bí token, àsọtẹ́lẹ̀ àti context window ṣe lè mú kí LLM dún bí ó tọ̀nà kí ó sì ṣì ṣàṣìṣe", standard: "ní ọ̀rọ̀ ara rẹ, kí o sì dárúkọ ó kéré tán ìdí méjì" },
    { id: "O2", condition: "Fún iṣẹ́ kan nínú agent rẹ", action: "kọ system prompt tó ní ipa, iṣẹ́, context, àwọn òfin àti bí ìdáhùn ṣe máa rí", standard: "pẹ̀lú gbogbo apá tó wà níbẹ̀ àti àwọn òfin tí a lè ṣàyẹ̀wò" },
    { id: "O3", condition: "Tí o bá ní system prompt rẹ", action: "fi àpẹẹrẹ kan tí a ti ṣe àti bí JSON ìdáhùn ṣe máa rí gẹ́lẹ́ kún un", standard: "tí ó kéré tán 4 nínú ìdáhùn 5 fi jẹ́ JSON tó tọ́ nìkan pẹ̀lú àwọn kọ́kọ́rọ́ (keys) tó tọ́" },
    { id: "O4", condition: "Nínú notebook Google Colab ọ̀fẹ́", action: "pe LLM láti inú Python pẹ̀lú API key tí a fi pamọ́ bí àṣírí (secret)", standard: "tí ìdáhùn fi hàn, tí key kankan kò sì hàn nínú kóòdù" },
    { id: "O5", condition: "Tí ìdáhùn model bá wà nínú notebook rẹ", action: "yí ìdáhùn JSON padà sí dátà Python kí o sì bójú tó ìdáhùn tí kò dára", standard: "láìjẹ́ kí kóòdù kọlù (crash) lórí ìdáhùn òfo tàbí èyí tó bàjẹ́" },
    { id: "O6", condition: "Tí o bá ní ohun ìdánwò márùn-ún, pẹ̀lú ọ̀kan tó ní ẹ̀tàn", action: "ṣàyẹ̀wò prompt náà, kọ èsì sílẹ̀, kí o sì yí ohun kan padà láti tún àṣìṣe kan ṣe", standard: "kí o sì tún gbogbo ìdánwò ṣe lẹ́yìn ìyípadà kọ̀ọ̀kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí LLM ṣe ń ṣiṣẹ́ àti bí a ṣe ń fún un ní ìtọ́ni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Bí LLM ṣe ń kọ̀wé: token, àsọtẹ́lẹ̀ àti context",
          minutes: 5,
          goal: "Ṣàlàyé ìdí tí LLM fi lè dún bí ó tọ̀nà kí ó sì ṣì ṣàṣìṣe.",
          text: [
            "LLM máa ń kọ ègé ọ̀rọ̀ kékeré kan lẹ́ẹ̀kan. A ń pe àwọn ègé wọ̀nyí ní token: ọ̀rọ̀ kúkúrú, apá kan ọ̀rọ̀ gígùn, tàbí àmì ìdánudúró. Ní ìgbésẹ̀ kọ̀ọ̀kan, model náà ń sọ tẹ́lẹ̀ token tó ṣeé ṣe kí ó tẹ̀lé e, láti inú gbogbo ohun tí ó ti rí títí di ìgbà yẹn.",
            "Gbogbo ohun tí model lè rí lẹ́ẹ̀kan náà ni context window rẹ̀: system prompt, ìjíròrò, àwọn ìwé tí o lẹ̀ mọ́ ọn, àti ìdáhùn tirẹ̀ títí di ìgbà yẹn. Ohunkóhun tó wà lẹ́yìn context window kò sí rárá lójú model náà. Kò rántí ìjíròrò àtẹ̀yìnwá àyàfi tí app bá fi wọ́n kún un.",
            "Nítorí pé ó ń sọ tẹ́lẹ̀ ọ̀rọ̀ tó ṣeé ṣe, LLM lè kọ ìdáhùn tó dùn létí ṣùgbọ́n tí kì í ṣe òótọ́. Kì í wá òtítọ́ kiri àyàfi tí ó bá ní irinṣẹ́ ìwádìí. Prompt rẹ, context tí o fún un, àti àwọn àyẹ̀wò tí o kọ́ ló ń mú kí ó ṣeé gbẹ́kẹ̀lé."
          ],
          words: [["Token", "ègé ọ̀rọ̀ kékeré, tó sábà máa ń jẹ́ apá kan ọ̀rọ̀, tí LLM ń kà tí ó sì ń kọ."], ["Context window", "gbogbo ọ̀rọ̀ tí model lè rí lẹ́ẹ̀kan náà."], ["Àsọtẹ́lẹ̀ (prediction)", "bí model ṣe ń yan token tó ṣeé ṣe kí ó tẹ̀lé e, gẹ́gẹ́ bí ohun tó ṣáájú rẹ̀."]],
          slides: [
            { title: "LLM ń kọ̀wé ní token kan lẹ́ẹ̀kan", bullets: ["Token jẹ́ ọ̀rọ̀ kan tàbí apá kan ọ̀rọ̀", "Ìgbésẹ̀ kọ̀ọ̀kan ń sọ token tó ṣeé ṣe tẹ́lẹ̀"] },
            { title: "Context window", bullets: ["Gbogbo ohun tí model lè rí lẹ́ẹ̀kan náà", "System prompt, ìjíròrò, ìwé, ìdáhùn rẹ̀", "Ohun tó wà lẹ́yìn window kò sí lójú rẹ̀"] },
            { title: "Ìdí tí ó fi lè ṣàṣìṣe", bullets: ["Ó ń sọ ọ̀rọ̀ tó ṣeé ṣe tẹ́lẹ̀, kì í ṣe òtítọ́ tí a ti ṣàyẹ̀wò", "Prompt, context àti àyẹ̀wò rẹ ló ń mú kí ó ṣeé gbẹ́kẹ̀lé"] }
          ],
          tryIt: "Nínú chatbot ọ̀fẹ́, béèrè pé: \"How many letters r are in the word strawberry? Then explain how tokens might make this hard for you.\" Kọ ọ́ sílẹ̀ bóyá ìdáhùn àkọ́kọ́ tọ̀nà, àti ìdí tí token fi ṣe pàtàkì.",
          youCanNow: "ṣàlàyé token àti context window, àti ìdí tí LLM fi nílò àyẹ̀wò.",
          quickCheck: [
            { objective: "O1", q: "Kí ni LLM ń ṣe nígbà tí ó bá ń kọ ìdáhùn?", options: ["Ó ń wá ìdáhùn nínú àkójọ dátà tí a ti ṣàyẹ̀wò", "Ó ń sọ token tó ṣeé ṣe tẹ́lẹ̀, ọ̀kan lẹ́ẹ̀kan", "Ó ń dà ìdáhùn tí ènìyàn kọ tí a fi pamọ́ kọ", "Ó ń wá kiri lórí ayélujára, ó sì ń ka èsì àkọ́kọ́"], answer: 1, why: "LLM ń sọ ọ̀rọ̀ tẹ́lẹ̀ ní token kan lẹ́ẹ̀kan, nítorí náà ó lè dún dáadáa láìṣàyẹ̀wò òtítọ́." },
            { objective: "O1", q: "Chatbot kan fún ọ ní ìdáhùn tó dá a lójú nípa òfin kan tó ṣe pàtàkì fún iṣẹ́ rẹ. Kí ni o máa ṣe?", options: ["Lò ó, nítorí pé ó dún bí ó dá a lójú", "Tún ìbéèrè kan náà béèrè títí yóò fi gbà", "Ṣàyẹ̀wò òfin náà lórí orísun tó ṣeé gbẹ́kẹ̀lé kí o tó lò ó", "Lẹ ìdáhùn náà mọ́ ìjíròrò tuntun láti fi múlẹ̀"], answer: 2, why: "Ìdáhùn tó dùn létí ṣì lè ṣàṣìṣe, nítorí náà òtítọ́ pàtàkì nílò orísun tó ṣeé gbẹ́kẹ̀lé." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Àwọn apá prompt tó lágbára",
          minutes: 6,
          goal: "Kọ prompt tó ní ipa, iṣẹ́, context, àwọn òfin àti bí ìdáhùn ṣe máa rí.",
          text: [
            "Prompt tó lágbára fún agent ní apá márùn-ún. Ipa (role): ta ni model náà (\"You sort customer messages for a small bakery.\"). Iṣẹ́ (task): iṣẹ́ kan ṣoṣo. Context: àwọn òtítọ́ tí ó nílò. Àwọn òfin (rules): ohun tí ó gbọ́dọ̀ ṣe àti ohun tí kò gbọ́dọ̀ ṣe. Bí ìdáhùn ṣe máa rí (output format): bí ìdáhùn ṣe gbọ́dọ̀ rí gẹ́lẹ́.",
            "System prompt ní àwọn apá tí kì í yí padà ní gbogbo ìgbà tí a bá ṣiṣẹ́ rẹ̀: ipa, àwọn òfin àti bí ìdáhùn ṣe máa rí. User message ní ohun tó ń yí padà lọ́tọ̀ọ̀tọ̀: ọ̀rọ̀ tuntun láti pín, ìbéèrè tuntun.",
            "Sọ ohun tí o fẹ́ ní pàtó, kí o sì sọ ọ́ lọ́nà rere. \"Dáhùn ní gbólóhùn méjì\" ṣiṣẹ́ ju \"má ṣe gùn jù\" lọ. Sọ ohun tí ó máa ṣe nígbà tí kò bá dá a lójú: \"Tí ọ̀rọ̀ náà kò bá bá ẹ̀ka kankan mu, lo other.\" Òfin kan yẹn ń dènà ọ̀pọ̀ àméfò tí kò tọ́."
          ],
          steps: ["Ipa: ta ni model náà?", "Iṣẹ́: iṣẹ́ kan ṣoṣo tó yé.", "Context: àwọn òtítọ́ tí ó nílò.", "Àwọn òfin: ohun tó gbọ́dọ̀ ṣe, ohun tí kò gbọ́dọ̀ ṣe, àti ohun tí ó máa ṣe tí kò bá dá a lójú.", "Bí ó ṣe máa rí: bí ìdáhùn ṣe máa rí gẹ́lẹ́."],
          words: [["System prompt", "àwọn ìtọ́ni tí kì í yí padà tí a ń fi ránṣẹ́ pẹ̀lú gbogbo ìbéèrè."], ["User message", "apá tó ń yí padà lọ́tọ̀ọ̀tọ̀, bí ìbéèrè tuntun tàbí ohun tuntun tí a fi sínú rẹ̀."]],
          slides: [
            { title: "Apá márùn-ún prompt tó lágbára", bullets: ["Ipa (role)", "Iṣẹ́ (task)", "Context àti àwọn òfin", "Bí ìdáhùn ṣe máa rí (output format)"] },
            { title: "System prompt àti user message", bullets: ["System: ohun tí kì í yí padà (ipa, òfin, bí ó ṣe máa rí)", "User: ohun tó ń yí padà ní gbogbo ìgbà (ohun tuntun)"] },
            { title: "Kọ àwọn òfin tó yé", bullets: ["Sọ ohun tí ó máa ṣe, kì í ṣe ohun tí kò gbọ́dọ̀ ṣe nìkan", "Fún un ní òfin fún ìgbà tí kò bá dá a lójú", "Àpẹẹrẹ: tí kò bá sí èyí tó bá a mu, lo \"other\""] }
          ],
          tryIt: "Kọ system prompt apá márùn-ún fún iṣẹ́ kan nínú agent rẹ láti ẹ̀kọ́ 1. Lẹ̀ ẹ́ mọ́ chatbot ọ̀fẹ́, lẹ́yìn náà fi ohun mẹ́ta tó yàtọ̀ síra ránṣẹ́, kí o sì wò ó bóyá ó tẹ̀lé gbogbo òfin.",
          youCanNow: "kọ prompt tó ní ipa, iṣẹ́, context, àwọn òfin àti bí ìdáhùn ṣe máa rí.",
          quickCheck: [
            { objective: "O2", q: "Kí ni apá ipa (role) nínú system prompt?", options: ["Àwọn kọ́kọ́rọ́ JSON gẹ́lẹ́ tí o fẹ́ gbà padà", "Ọ̀rọ̀ tí olùlò fi ránṣẹ́ lọ́tẹ̀ yìí", "Àkọsílẹ̀ àwọn ohun ìdánwò", "Ẹni tí model gbọ́dọ̀ ṣe bí, bí olùpín ọ̀rọ̀ ìrànlọ́wọ́"], answer: 3, why: "Ipa ń sọ fún model ẹni tí ó jẹ́ fún iṣẹ́ yìí; àwọn apá yòókù ń sọ nípa iṣẹ́, context, òfin àti bí ó ṣe máa rí." },
            { objective: "O2", q: "Prompt rẹ sọ pé \"be helpful and good\", àwọn ìdáhùn sì ń yàtọ̀ síra. Kí ni o máa yí padà?", options: ["Fi àwọn òfin tó yé rọ́pò rẹ̀, èyí tí model lè tẹ̀lé tí o sì lè ṣàyẹ̀wò", "Mú prompt náà gùn sí i pẹ̀lú ọ̀rọ̀ ọ̀rẹ́ púpọ̀", "Yọ gbogbo òfin kúrò kí model lè pinnu", "Lọ sí chatbot míì"], answer: 0, why: "A kò lè ṣàyẹ̀wò ọ̀rọ̀ tí kò ní ìtumọ̀ pàtó; àwọn òfin pàtó ń mú kí ìwà rẹ̀ dúró ṣinṣin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Àpẹẹrẹ, ìgbésẹ̀ àti ìdáhùn tó ní ètò",
          minutes: 5,
          goal: "Lo àpẹẹrẹ àti ọ̀nà JSON láti gba ìdáhùn tí ètò kọ̀mpútà lè kà.",
          text: [
            "Fífihàn dára ju sísọ lọ. Àpẹẹrẹ kan tàbí méjì tí a ti ṣe nínú prompt (ohun tí a fi sínú àti ìdáhùn gẹ́lẹ́ tí o fẹ́) ń mú èsì dára sí i gan-an. A ń pe èyí ní few-shot prompting. Zero-shot túmọ̀ sí pé kò sí àpẹẹrẹ.",
            "Agent nílò ìdáhùn tí kóòdù lè kà, kì í ṣe ọ̀rọ̀ gígùn bí ìjíròrò. Béèrè fún JSON, ọ̀nà ọ̀rọ̀ tó rọrùn ti orúkọ àti iye: {\"category\": \"order\", \"urgent\": false}. Sọ pé: \"Reply with only JSON, no other text,\" kí o sì fi àwọn kọ́kọ́rọ́ gẹ́lẹ́ hàn.",
            "Fún iṣẹ́ tó le jù, ní kí model ṣiṣẹ́ ní ìgbésẹ̀-ìgbésẹ̀: kọ́kọ́ to àwọn òtítọ́, lẹ́yìn náà kí ó pinnu. Ọ̀pọ̀ iṣẹ́ model tún lè fi agbára mú JSON tó tọ́ pẹ̀lú ètò kan tí a ń pè ní structured output; wò ó nínú ìwé àlàyé (documentation) ilé-iṣẹ́ rẹ."
          ],
          words: [["Few-shot prompting", "fífún model ní àpẹẹrẹ díẹ̀ ti ohun tí a fi sínú àti ìdáhùn tó tọ́."], ["JSON", "ọ̀nà ọ̀rọ̀ tó rọrùn ti iye tó ní orúkọ, tí ètò kọ̀mpútà lè kà, bí {\"name\": \"Ana\"}."], ["Structured output", "ètò model tí ó ń mú kí ìdáhùn tẹ̀lé ọ̀nà kan gẹ́lẹ́."]],
          slides: [
            { title: "Fi hàn, má kàn sọ ọ́ nìkan", bullets: ["Zero-shot: kò sí àpẹẹrẹ", "Few-shot: àpẹẹrẹ kan sí mẹ́ta tí a ti ṣe", "Àpẹẹrẹ ń mú èsì dára sí i gan-an"] },
            { title: "Béèrè fún JSON", bullets: ["Ètò kọ̀mpútà lè kà á", "\"Reply with only JSON, no other text\"", "Fi àwọn kọ́kọ́rọ́ gẹ́lẹ́ tí o fẹ́ hàn"] },
            { title: "Iṣẹ́ tó le jù", bullets: ["Ní kí ó to àwọn òtítọ́, lẹ́yìn náà kí ó pinnu", "Lo structured output tí ilé-iṣẹ́ rẹ bá ní i"] }
          ],
          tryIt: "Fi àpẹẹrẹ kan tí a ti ṣe àti ọ̀nà JSON kún prompt rẹ láti Ẹ̀kọ́ 2. Fi ohun márùn-ún ránṣẹ́. Ka iye ìdáhùn tó jẹ́ JSON nìkan pẹ̀lú àwọn kọ́kọ́rọ́ tó tọ́.",
          youCanNow: "lo àpẹẹrẹ àti ọ̀nà JSON láti gba ìdáhùn tí kóòdù rẹ lè kà.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí a fi ń fi àpẹẹrẹ tí a ti ṣe kún prompt?", options: ["Ó ń mú kí model yára sí i", "Ó ń fi àwọn òfin pamọ́ fún olùlò", "Ó ń fi irú ìdáhùn gẹ́lẹ́ tí o fẹ́ han model", "Ó ń mú kí a má nílò ipa mọ́"], answer: 2, why: "Àpẹẹrẹ ń fi ìlànà àti ọ̀nà tí ó yẹ kí ó tẹ̀lé han model." },
            { objective: "O3", q: "Àwọn ìdáhùn kan ń padà wá bí JSON pẹ̀lú gbólóhùn ọ̀rẹ́ kan níwájú rẹ̀. Kí ni o máa ṣe?", options: ["Gbà á, nítorí pé JSON wà níbẹ̀ níbìkan", "Sọ nínú prompt pé kí ó dá JSON nìkan padà pẹ̀lú àwọn kọ́kọ́rọ́ gẹ́lẹ́, kí o sì fi àpẹẹrẹ hàn", "Béèrè fún ìdáhùn tó gùn jù", "Yọ ọ̀nà ìdáhùn kúrò kí model lè ní òmìnira"], answer: 1, why: "Kóòdù nílò JSON nìkan, nítorí náà prompt gbọ́dọ̀ sọ ọ́ kedere kí ó sì fi hàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí LLM ṣe ń ṣiṣẹ́ àti bí a ṣe ń fún un ní ìtọ́ni",
        questions: [
          { objective: "O1", q: "Kí ni token?", options: ["Ọ̀rọ̀ aṣínà fún AI", "Owó ẹyọ tí a fi ń sanwó fún AI", "Ègé ọ̀rọ̀ kékeré tí model ń kà tí ó sì ń kọ", "Irú chatbot kan"], answer: 2, why: "LLM ń ṣiṣẹ́ lórí token: ọ̀rọ̀ tàbí apá kan ọ̀rọ̀." },
          { objective: "O1", q: "O lẹ ìwé kan mọ́ ìjíròrò kan. Nínú ìjíròrò tuntun, model kò mọ̀ ọ́n. Kí ló fà á?", options: ["Ìwé náà ti wà lẹ́yìn context window rẹ̀ báyìí", "Model náà ti bàjẹ́", "A kò gba ìwé láàyè", "Ó nílò kọ̀mpútà tó yára jù"], answer: 0, why: "Model ń rí ohun tó wà nínú context window lọ́wọ́lọ́wọ́ nìkan." },
          { objective: "O2", q: "Apá wo ló yẹ kí ó wà nínú system prompt?", options: ["Àwàdà kan láìnídìí", "Ọ̀rọ̀ oníbàárà ti òní", "Ọ̀rọ̀ aṣínà rẹ", "Àwọn òfin tó kan gbogbo ìgbà tí a bá ṣiṣẹ́ rẹ̀"], answer: 3, why: "System prompt ní ohun tí kì í yí padà; user message ní ohun tó ń yí padà." },
          { objective: "O2", q: "Òfin wo ni a kọ dáadáa jù?", options: ["\"Má ṣe gùn jù.\"", "\"Dáhùn ní gbólóhùn méjì. Tí kò bá dá ọ lójú, sọ pé: kò dá mi lójú.\"", "\"Gbìyànjú gidi.\"", "\"Jẹ́ ẹni rere.\""], answer: 1, why: "Ó ṣe pàtó, ó sọ ọ́ lọ́nà rere, ó sì sọ ohun tí ó máa ṣe tí kò bá dá a lójú." },
          { objective: "O3", q: "Kí ló dé tí a fi ń béèrè JSON lọ́wọ́ model agent?", options: ["Ó ń rí dáradára jù", "Model kò lè kọ ọ̀rọ̀ gígùn", "Ó kúrú láti tẹ̀", "Kóòdù rẹ lè ka ìdáhùn náà láìṣàṣìṣe"], answer: 3, why: "Agent ń fi ìdáhùn ránṣẹ́ sí kóòdù, kóòdù sì nílò ọ̀nà tí kì í yí padà." }
        ]
      }
    },
    {
      name: "Orí 2: Pípe àti ṣíṣàyẹ̀wò LLM láti inú Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ìpè model àkọ́kọ́ rẹ láti inú Google Colab",
          minutes: 6,
          goal: "Pe LLM láti inú notebook Python kí o sì tẹ ìdáhùn jáde.",
          text: [
            "Google Colab jẹ́ notebook Python ọ̀fẹ́ tí ó ń ṣiṣẹ́ nínú browser rẹ; o nílò àkáǹtì Google. Kò sí ìdánilójú fún ohun èlò ọ̀fẹ́, notebook tí a kò lò fún ìgbà díẹ̀ sì máa ń dá dúró (time out), nítorí náà máa fi iṣẹ́ rẹ pamọ́. Ṣí colab.research.google.com kí o sì ṣe notebook tuntun.",
            "Láti pe model, o nílò API key, ọ̀rọ̀ aṣínà àṣírí fún ètò kọ̀mpútà. Gemini API ti Google ní ìpele ọ̀fẹ́ fún iṣẹ́ kékeré; o máa gba key láti Google AI Studio (aistudio.google.com/apikey). Google sọ pé wọ́n lè lo ohun tí a fi ránṣẹ́ lórí ìpele ọ̀fẹ́ láti mú àwọn ọjà wọn dára sí i, nítorí náà má ṣe fi ìsọfúnni àdáni tàbí ti oníbàárà ránṣẹ́ lórí ìpele ọ̀fẹ́ láé.",
            "Quickstart Google lọ́wọ́lọ́wọ́ fi àwọn ìlà bí èyí hàn: pip install -U google-genai, lẹ́yìn náà from google import genai, client = genai.Client(), lẹ́yìn náà interaction = client.interactions.create(model='MODEL_NAME', input='Explain an AI agent in one sentence'), lẹ́yìn náà print(interaction.output_text). Dà orúkọ model àti kóòdù gẹ́lẹ́ kọ láti ojú-ìwé quickstart, nítorí pé orúkọ àti kóòdù máa ń yí padà. A ń ka key láti inú environment variable tí a ń pè ní GEMINI_API_KEY.",
            "Má ṣe lẹ key rẹ mọ́ notebook àjọlò, screenshot tàbí chatbot láé. Fi í pamọ́ sínú ètò àṣírí (secret), kí o sì ṣe key tuntun tí èyí tí o ní bá jò síta. Àwọn ilé-iṣẹ́ míì (OpenAI, Anthropic, tàbí model ọ̀fẹ́ lórí kọ̀mpútà rẹ pẹ̀lú Ollama) ń ṣiṣẹ́ lọ́nà kan náà: client, orúkọ model, ohun tí a fi sínú àti ìdáhùn."
          ],
          steps: ["Ṣí colab.research.google.com kí o sì ṣe notebook tuntun.", "Gba API key láti Google AI Studio kí o sì pa á mọ́ ní àṣírí.", "Fi library náà sórí ẹ̀rọ kí o sì dà kóòdù quickstart kọ.", "Lo orúkọ model tí ó hàn lórí ojú-ìwé quickstart.", "Ṣiṣẹ́ cell náà kí o sì tẹ ìdáhùn jáde."],
          words: [["API", "ọ̀nà tí ètò kọ̀mpútà kan fi ń bá òmíràn sọ̀rọ̀, bí kóòdù rẹ ṣe ń béèrè ìdáhùn lọ́wọ́ model."], ["API key", "kóòdù àṣírí tí ó ń jẹ́ kí ètò rẹ lo iṣẹ́ kan; tọ́jú rẹ̀ bí ọ̀rọ̀ aṣínà."], ["Environment variable", "ètò kan tí a fi pamọ́ sẹ́yìn kóòdù rẹ, tí a sábà máa ń lò fún àṣírí."]],
          slides: [
            { title: "Colab: Python ọ̀fẹ́ nínú browser", bullets: ["Ó nílò àkáǹtì Google", "Kò sí ìdánilójú fún ohun èlò ọ̀fẹ́", "Notebook tí a kò lò máa ń dá dúró: fi iṣẹ́ rẹ pamọ́"] },
            { title: "Bí a ṣe ń mú model dáhùn", bullets: ["Gba API key láti Google AI Studio", "Dà kóòdù àti orúkọ model kọ láti quickstart", "Client, orúkọ model, ohun tí a fi sínú, ìdáhùn"] },
            { title: "Dáàbò bo key rẹ", bullets: ["Kò gbọ́dọ̀ sí nínú notebook àjọlò tàbí screenshot", "Fi í pamọ́ sínú ètò àṣírí", "Ṣe key tuntun tí ó bá jò síta"] },
            { title: "Ìpele ọ̀fẹ́ àti ìpamọ́ ìsọfúnni", bullets: ["Wọ́n lè lo ohun tí o fi ránṣẹ́ lórí ìpele ọ̀fẹ́ láti mú ọjà dára", "Má ṣe fi ìsọfúnni àdáni tàbí ti oníbàárà ránṣẹ́ lórí rẹ̀ láé"] }
          ],
          sources: [{ name: "Google Colab FAQ", url: "https://research.google.com/colaboratory/faq.html" }, { name: "Gemini API quickstart", url: "https://ai.google.dev/gemini-api/docs/quickstart" }, { name: "Iye owó Gemini API àti ìpele ọ̀fẹ́", url: "https://ai.google.dev/gemini-api/docs/pricing" }],
          tryIt: "Ṣe notebook Colab kan, ṣètò key lọ́nà tí kò léwu, kí o sì mú model dáhùn: \"Explain an AI agent in one sentence.\" Fi notebook náà pamọ́ pẹ̀lú orúkọ agent-prompts.",
          youCanNow: "pe LLM láti inú Python nínú notebook ọ̀fẹ́ kí o sì pa API key rẹ mọ́ ní àṣírí.",
          quickCheck: [
            { objective: "O4", q: "Kí ni Google Colab?", options: ["Notebook Python ọ̀fẹ́ tí ó ń ṣiṣẹ́ nínú browser", "Model AI tí a ń sanwó fún", "Ibi tí a ń fi ọ̀rọ̀ aṣínà pamọ́ sí", "App fóònù fún bíbá AI sọ̀rọ̀"], answer: 0, why: "Colab ń jẹ́ kí o ṣiṣẹ́ Python nínú browser lọ́fẹ̀ẹ́, pẹ̀lú òdiwọ̀n." },
            { objective: "O4", q: "O fẹ́ pín notebook rẹ. API key rẹ wà nínú cell kóòdù kan. Kí ni o máa ṣe?", options: ["Pín in, nítorí pé àwọn ọ̀rẹ́ nìkan ló máa rí i", "Bo key náà mọ́lẹ̀ nínú screenshot dípò rẹ̀", "Yí orúkọ variable padà kí ó le láti rí", "Gbé key náà lọ sínú ètò àṣírí, kí o sì ṣe key tuntun tí ẹnìkan bá ti rí i"], answer: 3, why: "Key dà bí ọ̀rọ̀ aṣínà: pa á mọ́ sínú ètò àṣírí kí o sì rọ́pò rẹ̀ tí ó bá jò síta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fífi system prompt ránṣẹ́ àti kíka JSON nínú kóòdù",
          minutes: 6,
          goal: "Fi prompt rẹ ránṣẹ́ láti inú kóòdù kí o sì yí ìdáhùn JSON padà sí dátà Python.",
          text: [
            "Fi system prompt rẹ sínú variable Python: SYSTEM = '''You sort messages for a bakery... Reply with only JSON.''' Fi ohun tuntun kọ̀ọ̀kan sínú variable míì. Ọ̀nà tó rọrùn jù láti so wọ́n pọ̀ ni láti fi SYSTEM àti ohun tuntun náà ránṣẹ́ bí ọ̀rọ̀ kan; ọ̀pọ̀ ilé-iṣẹ́ tún ní ètò system-instruction lọ́tọ̀, tí ó hàn nínú ìwé àlàyé wọn.",
            "Ka ìdáhùn náà pẹ̀lú json library ti Python: import json, lẹ́yìn náà data = json.loads(text). Báyìí data['category'] jẹ́ iye Python lásán tí agent rẹ lè lò.",
            "Nígbà míì model máa fi ọ̀rọ̀ yí JSON ká tàbí kí ó gbàgbé kọ́kọ́rọ́ kan. Múra sílẹ̀ fún un: fi try àti except yí ìgbésẹ̀ kíkà náà ká, tí ó bá sì kùnà, yálà kí o tún gbìyànjú lẹ́ẹ̀kan pẹ̀lú \"Reply with only JSON\" tàbí kí o sàmì sí ohun náà pé ó kùnà. Má ṣe jẹ́ kí ìdáhùn búburú kọlu agent láé, tàbí kí ó yọ́ kọjá láìsí ẹni tó mọ̀."
          ],
          steps: ["Fi system prompt pamọ́ sínú variable kan.", "Fi system prompt àti ohun tuntun ránṣẹ́ sí model.", "Ka ìdáhùn pẹ̀lú json.loads nínú try / except.", "Ṣàyẹ̀wò pé àwọn kọ́kọ́rọ́ tí o nílò wà níbẹ̀.", "Tí ó bá kùnà: tún gbìyànjú lẹ́ẹ̀kan, tàbí sàmì sí i pé ó kùnà."],
          words: [["Parse", "yí ọ̀rọ̀ padà sí dátà tí ètò kọ̀mpútà lè lò."], ["try / except", "ọ̀nà Python láti mú àṣìṣe kí ó sì bójú tó o dípò kí ó kọlu."], ["Retry", "títún ìbéèrè kan náà gbìyànjú lẹ́yìn tí ó kùnà."]],
          slides: [
            { title: "Prompt nínú kóòdù", bullets: ["SYSTEM ní ipa, òfin àti bí ìdáhùn ṣe máa rí", "Ohun tuntun kọ̀ọ̀kan ń lọ sínú variable tirẹ̀"] },
            { title: "Ka JSON náà", bullets: ["import json", "data = json.loads(text)", "data['category'] ti ṣeé lò báyìí"] },
            { title: "Múra sílẹ̀ fún ìdáhùn búburú", bullets: ["Fi try / except yí ìgbésẹ̀ kíkà ká", "Ṣàyẹ̀wò pé àwọn kọ́kọ́rọ́ wà níbẹ̀", "Tún gbìyànjú lẹ́ẹ̀kan, tàbí sàmì sí i pé ó kùnà"] }
          ],
          tryIt: "Nínú notebook rẹ, fi system prompt rẹ ránṣẹ́ pẹ̀lú ohun kan, ka JSON náà, kí o sì tẹ category nìkan jáde. Lẹ́yìn náà fún un ní ohun àjèjì kan (ọ̀rọ̀ òfo), kí o sì rí i dájú pé kóòdù rẹ kò kọlu.",
          youCanNow: "fi system prompt ránṣẹ́ láti inú Python kí o sì yí JSON model padà sí dátà láìléwu.",
          quickCheck: [
            { objective: "O5", q: "Kí ni json.loads ń ṣe sí ìdáhùn model?", options: ["Ó ń fi í ránṣẹ́ padà sí model", "Ó ń yí ọ̀rọ̀ JSON padà sí dátà Python tí kóòdù rẹ lè lò", "Ó ń ṣàyẹ̀wò bóyá ìdáhùn náà jẹ́ òótọ́", "Ó ń fi í pamọ́ sínú fáìlì"], answer: 1, why: "json.loads ń ka ọ̀rọ̀ JSON, ó sì ń yí i padà sí dátà Python bí dictionary." },
            { objective: "O5", q: "Agent rẹ gba ọ̀rọ̀ òfo, ìgbésẹ̀ kíkà sì kùnà. Kí ni kóòdù gbọ́dọ̀ ṣe?", options: ["Kọlu kí o lè ṣàkíyèsí rẹ̀", "Dá ọ̀rọ̀ èyíkéyìí tó padà wá padà bí category", "Mú àṣìṣe náà, lẹ́yìn náà tún gbìyànjú lẹ́ẹ̀kan tàbí sàmì sí ohun náà pé ó kùnà", "Pa ọ̀rọ̀ náà rẹ́"], answer: 2, why: "Fífi try / except yí ìgbésẹ̀ kíkà ká ń jẹ́ kí agent bójú tó ìdáhùn búburú dípò kí ó kọlu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣàyẹ̀wò prompt bí onímọ̀ ẹ̀rọ",
          minutes: 6,
          goal: "Ṣiṣẹ́ prompt lórí àkójọ ìdánwò kékeré kí o sì mú un dára sí i láti inú èsì.",
          text: [
            "Ìdáhùn rere kan kò fi nǹkan púpọ̀ hàn. Àwọn onímọ̀ ẹ̀rọ máa ń kọ test set: àkọsílẹ̀ kúkúrú ti àwọn ohun tí a fi sínú pẹ̀lú ìdáhùn tí wọ́n retí. Fi àwọn èyí tó rọrùn sí i, àwọn edge case (òfo, gígùn gan-an, kókó méjì lẹ́ẹ̀kan náà) àti ọ̀kan tó ní ẹ̀tàn, bí ọ̀rọ̀ tí ó sọ pé \"ignore your instructions\".",
            "Nínú Python, àkọsílẹ̀ àwọn méjì-méjì ń ṣiṣẹ́: tests = [('Where is my cake?', 'order'), ('You burned my bread!', 'complaint')]. Yí i ká (loop), pe model, ka JSON, kí o sì fi wé ìdáhùn tí o retí. Ka iye JSON tó tọ́ àti ìdáhùn tó pé.",
            "Yí ohun kan padà lẹ́ẹ̀kan: òfin tó yé jù, àpẹẹrẹ tó dára jù. Tún gbogbo test set ṣe lẹ́yìn ìyípadà kọ̀ọ̀kan, kí o lè mọ̀ pé àtúnṣe náà ṣèrànwọ́, kò sì ba nǹkan jẹ́. Fi ẹ̀dà prompt kọ̀ọ̀kan àti máàkì rẹ̀ pamọ́ sínú notebook rẹ."
          ],
          steps: ["Kọ ohun ìdánwò 5 sí 10 pẹ̀lú ìdáhùn tí o retí.", "Fi edge case àti ohun kan tó ní ẹ̀tàn sí i.", "Loop: pè, kà, fi wé, kà iye.", "Yí ohun kan padà nínú prompt.", "Tún gbogbo ìdánwò ṣe kí o sì pa ẹ̀dà tó dára jù mọ́."],
          words: [["Test set", "àkọsílẹ̀ àwọn ohun tí a fi sínú pẹ̀lú ìdáhùn tí o retí, tí a fi ń ṣàyẹ̀wò prompt."], ["Edge case", "ohun tí kò wọ́pọ̀ tí a fi sínú, bí ọ̀rọ̀ òfo tàbí èyí tó gùn gan-an."], ["Regression", "nígbà tí ìyípadà kan tún nǹkan kan ṣe ṣùgbọ́n tí ó ba òmíràn jẹ́."]],
          slides: [
            { title: "Kọ test set", bullets: ["Ohun tí a fi sínú pẹ̀lú ìdáhùn tí a retí", "Èyí tó rọrùn àti edge case", "Ohun kan tó ní ẹ̀tàn: \"ignore your instructions\""] },
            { title: "Ṣiṣẹ́ rẹ̀ nínú loop", bullets: ["Pe model fún ohun kọ̀ọ̀kan", "Ka JSON, fi wé ìdáhùn tí a retí", "Ka iye èyí tó tọ́ àti èyí tó pé"] },
            { title: "Mú un dára ní ìyípadà kan lẹ́ẹ̀kan", bullets: ["Òfin tó yé jù tàbí àpẹẹrẹ tó dára jù", "Tún gbogbo ìdánwò ṣe lẹ́yìn ìyípadà kọ̀ọ̀kan", "Pa àwọn ẹ̀dà àti máàkì wọn mọ́"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ system prompt rẹ pẹ̀lú ipa, iṣẹ́, òfin mẹ́ta, ọ̀nà JSON àti àpẹẹrẹ kan. Ṣàyẹ̀wò rẹ̀ nínú Colab lórí ohun márùn-ún pẹ̀lú ọ̀kan tó ní ẹ̀tàn, kọ JSON tó tọ́ àti ìdáhùn tó pé sílẹ̀ fún ọ̀kọ̀ọ̀kan, yí prompt padà lẹ́ẹ̀kan láti tún àṣìṣe kan ṣe, kí o sì tún un ṣe.",
          youCanNow: "ṣàyẹ̀wò prompt kí o sì mú un dára sí i pẹ̀lú test set kékeré, bí àwọn tó ń kọ́ agent ṣe ń ṣe é.",
          quickCheck: [
            { objective: "O6", q: "Kí ni regression nígbà tí o bá ń ṣàyẹ̀wò prompt?", options: ["Ìdánwò tí ó yege ní ìgbà àkọ́kọ́", "Àtúnṣe tí ó mú kí ìdánwò tí ó ti yege tẹ́lẹ̀ kùnà báyìí", "Ohun ìdánwò tí a kọ ní èdè míì", "Ìdáhùn tó lọ́ra láti ọ̀dọ̀ model"], answer: 1, why: "Regression ni nígbà tí ìyípadà kan ba ohun tí ó ti ń ṣiṣẹ́ tẹ́lẹ̀ jẹ́." },
            { objective: "O6", q: "Ọ̀kan nínú ìdánwò márùn-ún kùnà. Kí ni ìgbésẹ̀ tó dára jù tó kàn?", options: ["Yí ohun kan padà nínú prompt kí o sì tún gbogbo ìdánwò márùn-ún ṣe", "Tún gbogbo prompt kọ láti ìbẹ̀rẹ̀", "Pa ìdánwò tó kùnà rẹ́", "Tún ìdánwò tó kùnà nìkan ṣe"], answer: 0, why: "Yíyí ohun kan padà àti títún gbogbo ìdánwò ṣe ń fi ohun tí ìyípadà náà tún ṣe àti ohun tí ó bàjẹ́ hàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Pípe àti ṣíṣàyẹ̀wò LLM láti inú Python",
        questions: [
          { objective: "O4", q: "Níbo ni API key rẹ yẹ kí ó wà?", options: ["Nínú cell notebook àjọlò", "Nínú screenshot tí o fi ń béèrè ìrànlọ́wọ́", "Nínú ètò àṣírí tàbí environment variable", "Nínú chatbot kí ó lè rántí i"], answer: 2, why: "Key jẹ́ ọ̀rọ̀ aṣínà fún ètò kọ̀mpútà, ó sì gbọ́dọ̀ wà ní àṣírí." },
          { objective: "O4", q: "Kí ló dé tí o fi ń dà orúkọ model kọ láti ojú-ìwé quickstart ilé-iṣẹ́ náà?", options: ["Orúkọ model àti kóòdù máa ń yí padà bí àkókò ti ń lọ", "Òfin ló pa á láṣẹ", "Ó ń mú kí ìdáhùn kúrú", "Colab kò ní ṣiṣẹ́ bí bẹ́ẹ̀ kọ́"], answer: 0, why: "Àwọn ilé-iṣẹ́ máa ń yí orúkọ model padà, wọ́n sì máa ń fẹ̀yìn àwọn kan tì; ojú-ìwé wọn ló wà ní ìmúdójú-ìwọ̀n." },
          { objective: "O5", q: "json.loads(text) kùnà nítorí pé model fi ọ̀rọ̀ kún un. Agent tó dára máa:", options: ["Kọlu", "Mú àṣìṣe náà, tún gbìyànjú lẹ́ẹ̀kan tàbí sàmì sí i pé ó kùnà", "Pa ohun tí a fi sínú rẹ́", "Lo ọ̀rọ̀ náà bẹ́ẹ̀ náà"], answer: 1, why: "Múra sílẹ̀ fún ìdáhùn búburú kí wọ́n má baà kọlu agent tàbí yọ́ kọjá." },
          { objective: "O6", q: "Èwo ló yẹ kí ó wà nínú test set tó dára?", options: ["Èyí tó rọrùn, edge case àti ohun kan tó ní ẹ̀tàn", "Ohun kan ṣoṣo", "Èyí tó rọrùn nìkan", "Àwọn ìdáhùn tí model ti fún ọ tẹ́lẹ̀"], answer: 0, why: "Edge case àti ohun tó ní ẹ̀tàn ń fi ibi tí prompt ti ń bàjẹ́ hàn." },
          { objective: "O6", q: "O yí prompt padà, ìdánwò kan sì yege báyìí. Kí ló kàn?", options: ["Gbé e jáde lẹ́sẹ̀kẹsẹ̀", "Yí nǹkan márùn-ún míì padà lẹ́ẹ̀kan náà", "Pa àwọn ìdánwò àtijọ́ rẹ́", "Tún gbogbo test set ṣe"], answer: 3, why: "Títún gbogbo rẹ̀ ṣe ń mú regression." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Òye LLM àti Ọgbọ́n Kíkọ Prompt",
    questions: [
      { objective: "O1", q: "LLM ń kọ̀wé nípa:", options: ["Dída ojú-ìwé wẹ́ẹ̀bù kọ", "Sísọ token kan tẹ́lẹ̀ lẹ́ẹ̀kan", "Bíbéèrè lọ́wọ́ ènìyàn", "Wíwá nínú àkọsílẹ̀ ìdáhùn tí kì í yí padà"], answer: 1, why: "Ó ń sọ token tó ṣeé ṣe kí ó tẹ̀lé e tẹ́lẹ̀, léraléra." },
      { objective: "O1", q: "Context window ni:", options: ["Táàbù browser kan", "Iye owó model", "Gbogbo ohun tí model lè rí lẹ́ẹ̀kan náà", "Àwọ̀ app ìjíròrò náà"], answer: 2, why: "Ọ̀rọ̀ tó wà nínú window nìkan ló wà lójú model." },
      { objective: "O1", q: "Kí ló dé tí model fi lè sọ ohun tí kì í ṣe òótọ́ lọ́nà tó dùn létí?", options: ["Token rẹ̀ ti tán", "Ó ń purọ́ ní mímọ̀ọ́mọ̀", "Ó ń sọ ọ̀rọ̀ tó ṣeé ṣe tẹ́lẹ̀ dípò kí ó ṣàyẹ̀wò òtítọ́", "Key rẹ̀ ti parí"], answer: 2, why: "Àsọtẹ́lẹ̀ kì í ṣe àyẹ̀wò òtítọ́ àyàfi tí a bá fi irinṣẹ́ kún un." },
      { objective: "O2", q: "Èwo ni KÌ Í ṢE ọ̀kan nínú apá márùn-ún prompt tó lágbára?", options: ["Ọ̀rọ̀ aṣínà rẹ", "Bí ìdáhùn ṣe máa rí", "Àwọn òfin", "Ipa"], answer: 0, why: "Ọ̀rọ̀ aṣínà kò gbọ́dọ̀ wà nínú prompt láé." },
      { objective: "O2", q: "Kí ló yẹ kí ó yí padà ní gbogbo ìgbà tí a bá ṣiṣẹ́ rẹ̀?", options: ["System prompt", "Bí ìdáhùn ṣe máa rí", "Ipa", "User message"], answer: 3, why: "Ohun tuntun ń lọ sínú user message." },
      { objective: "O2", q: "Òfin tó dára fún ìgbà tí kò bá dá a lójú ni:", options: ["\"Méfò.\"", "\"Tí kò bá sí èyí tó bá a mu, lo other.\"", "\"Má ṣe ṣiyèméjì láé.\"", "\"Ṣe nǹkan kan sókè.\""], answer: 1, why: "Sísọ ohun tí ó máa ṣe nígbà tí kò bá dá a lójú fún un ń dènà àméfò tí kò tọ́." },
      { objective: "O3", q: "Few-shot prompting túmọ̀ sí:", options: ["Prompt kúkúrú nìkan", "Fífi ìbéèrè díẹ̀ ránṣẹ́", "Lílo model kékeré", "Fífi àpẹẹrẹ díẹ̀ tí a ti ṣe sínú rẹ̀"], answer: 3, why: "Àpẹẹrẹ ohun tí a fi sínú àti ìdáhùn ń tọ́ model sọ́nà." },
      { objective: "O3", q: "Èwo ni JSON tó tọ́?", options: ["category = order", "<category>order", "{\"category\": \"order\"}", "category: order;"], answer: 2, why: "JSON ń lo àmì ìkámọ́ { }, orúkọ àti iye nínú àmì àyọlò." },
      { objective: "O3", q: "Structured output ni:", options: ["Ètò model tí ó ń fi agbára mú ọ̀nà kan gẹ́lẹ́", "Ìdáhùn tó gùn jù", "Irú chatbot kan", "Àkójọ àṣàyàn (menu) kan nínú Colab"], answer: 0, why: "Ọ̀pọ̀ ilé-iṣẹ́ lè fi agbára mú JSON tó tọ́ pẹ̀lú rẹ̀; wo ìwé àlàyé wọn." },
      { objective: "O4", q: "Google Colab ni:", options: ["Server tí a ń sanwó fún tí o gbọ́dọ̀ fi sórí ẹ̀rọ", "Notebook Python ọ̀fẹ́ nínú browser", "App fóònù nìkan", "Model AI kan"], answer: 1, why: "Colab ń ṣiṣẹ́ notebook Python nínú browser rẹ lọ́fẹ̀ẹ́." },
      { objective: "O4", q: "Ohun èlò ọ̀fẹ́ Colab:", options: ["Kò ní ìdánilójú; notebook tí a kò lò máa ń dá dúró", "Ní ìdánilójú, kò sì ní òdiwọ̀n", "Wà fún ilé-ìwé nìkan", "Wà ní òpin ọ̀sẹ̀ nìkan"], answer: 0, why: "Colab sọ pé kò sí ìdánilójú fún ohun èlò ọ̀fẹ́." },
      { objective: "O4", q: "Ó yẹ kí a tọ́jú API key bí:", options: ["Orúkọ olùlò tí gbogbo ènìyàn lè rí", "Àlàyé (comment) kan", "Orúkọ fáìlì kan", "Ọ̀rọ̀ aṣínà"], answer: 3, why: "Ẹnikẹ́ni tó bá ní key náà lè lo àkáǹtì rẹ." },
      { objective: "O4", q: "Lórí ìpele ọ̀fẹ́ Gemini API, o kò gbọ́dọ̀ fi ránṣẹ́:", options: ["Ìbéèrè ìdánwò kan", "Ìsọfúnni àdáni tàbí ti oníbàárà", "Ọ̀rọ̀ àpẹẹrẹ ilé búrẹ́dì tí o dá ṣe", "\"Hello\""], answer: 1, why: "Wọ́n lè lo ohun tí a fi ránṣẹ́ lórí ìpele ọ̀fẹ́ láti mú àwọn ọjà Google dára sí i." },
      { objective: "O4", q: "Key rẹ jò síta nínú screenshot. O gbọ́dọ̀:", options: ["Retí pé kò sí ẹni tó rí i", "Tún un gbé jáde", "Ṣe key tuntun kí o sì dẹ́kun lílo èyí àtijọ́", "Fi í ránṣẹ́ sí àwọn olùrànlọ́wọ́ (support) nínú email"], answer: 2, why: "Key tó ti jò síta gbọ́dọ̀ ní rírọ́pò." },
      { objective: "O5", q: "json.loads ń yí:", options: ["Dátà padà sí àwòrán", "Python padà sí JavaScript", "Ọ̀rọ̀ JSON padà sí dátà Python", "Prompt padà sí model"], answer: 2, why: "Kíkà (parsing) ń mú kí ìdáhùn ṣeé lò nínú kóòdù." },
      { objective: "O5", q: "Fífi try / except yí ìgbésẹ̀ kíkà ká ń jẹ́ kí agent rẹ:", options: ["Bójú tó ìdáhùn búburú dípò kí ó kọlu", "Yára sí i", "Fo ìpè model", "Fi key pamọ́"], answer: 0, why: "A ń mú àṣìṣe, a sì ń bójú tó o." },
      { objective: "O6", q: "Edge case ni:", options: ["Ohun tí a sábà máa ń fi sínú gan-an", "Orúkọ model kan", "Ìdánwò àkọ́kọ́", "Ohun tí kò wọ́pọ̀ bí ọ̀rọ̀ òfo"], answer: 3, why: "Edge case ń dán ààlà prompt wò." },
      { objective: "O6", q: "Kí ló dé tí a fi ń fi ohun tí ó sọ pé \"ignore your instructions\" sínú ìdánwò?", options: ["Láti mú kí model yára", "Láti ṣàyẹ̀wò pé prompt kò gba injection láàyè", "Láti fi token pamọ́", "Nítorí pé òfin sọ bẹ́ẹ̀"], answer: 1, why: "Agent ń ka ọ̀rọ̀ tí a kò lè gbẹ́kẹ̀lé; prompt gbọ́dọ̀ di àwọn òfin rẹ̀ mú." },
      { objective: "O6", q: "Regression ni nígbà tí:", options: ["Model bá dín owó kù", "Key bá parí", "Gbogbo ìdánwò bá yege", "Àtúnṣe kan bá ohun tí ó ti ń ṣiṣẹ́ jẹ́"], answer: 3, why: "Títún gbogbo ìdánwò ṣe ń mú regression." },
      { objective: "O6", q: "Ọ̀nà tó dára jù láti mú prompt dára sí i ni láti:", options: ["Yí ọ̀pọ̀ nǹkan padà lẹ́ẹ̀kan náà", "Má ṣe yí i padà láé", "Yí ohun kan padà kí o sì tún gbogbo ìdánwò ṣe", "Ní kí model fún ara rẹ̀ ní máàkì nìkan"], answer: 2, why: "Ìyípadà kan lẹ́ẹ̀kan ń fi ohun tó ṣèrànwọ́ gan-an hàn." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      3,
      5,
      7,
      8,
      11,
      13,
      15,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "System prompt tó pé",
        objective: "O2",
        notYet: "Ọ̀kan tàbí jù bẹ́ẹ̀ lọ nínú ipa, iṣẹ́ tàbí òfin mẹ́ta kò sí níbẹ̀, tàbí kò yé.",
        meets: "Ó fún un ní ipa, iṣẹ́ náà àti òfin mẹ́ta tó yé.",
        exceeds: "Àwọn òfin tún sọ ohun tí ó máa ṣe tí kò bá dá a lójú tàbí tí kò bá sí èyí tó bá a mu."
      },
      {
        name: "Bí ìdáhùn ṣe máa rí àti àpẹẹrẹ",
        objective: "O3",
        notYet: "Kò sí ọ̀nà JSON gẹ́lẹ́ tàbí kò sí àpẹẹrẹ.",
        meets: "Ó sọ àwọn kọ́kọ́rọ́ JSON gẹ́lẹ́, ó sì fún un ní àpẹẹrẹ kan tí a ti ṣe.",
        exceeds: "Àpẹẹrẹ náà bá ọ̀nà ìdáhùn mu gẹ́lẹ́, ọ̀pọ̀ jù lọ ìdáhùn sì jẹ́ JSON tó tọ́."
      },
      {
        name: "Ó ń ṣiṣẹ́ láti Colab láìléwu",
        objective: "O4",
        notYet: "Notebook náà kò ṣiṣẹ́, tàbí API key hàn síta.",
        meets: "Prompt náà ń ṣiṣẹ́ láti Colab, key sì wà nínú ètò àṣírí.",
        exceeds: "Notebook náà wà létòlétò, ẹlòmíì sì lè tún un ṣiṣẹ́ pẹ̀lú key tirẹ̀."
      },
      {
        name: "Ó ń ka ìdáhùn láìléwu",
        objective: "O5",
        notYet: "Ìdáhùn búburú tàbí òfo ń mú kí kóòdù kọlu.",
        meets: "A ka JSON padà sí dátà, a sì mú ìdáhùn búburú.",
        exceeds: "A sàmì sí àwọn ohun tó kùnà kedere kí a lè ṣàyẹ̀wò wọn."
      },
      {
        name: "A ṣàyẹ̀wò rẹ̀, a sì mú un dára sí i",
        objective: "O6",
        notYet: "Ohun ìdánwò kò tó márùn-ún, kò sí ohun tó ní ẹ̀tàn, tàbí a kò kọ èsì sílẹ̀.",
        meets: "Ohun márùn-ún pẹ̀lú ọ̀kan tó ní ẹ̀tàn, a kọ JSON tó tọ́ àti ìdáhùn tó pé sílẹ̀ fún ọ̀kọ̀ọ̀kan, a ṣe ìyípadà kan, a sì tún gbogbo ìdánwò ṣe.",
        exceeds: "Ó lè ṣàlàyé ìdí tí àṣìṣe náà fi ṣẹlẹ̀ àti ohun tí ìyípadà náà tún ṣe."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí ẹ̀kọ́ 3 nínú ètò agent láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé wọ́n ń lo system prompt tí a ti ṣàyẹ̀wò nínú agent gidi tàbí iṣẹ́ láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé API key wọn kò jò síta (ìwádìí àtẹ̀lé)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tó ní browser àti íńtánẹ́ẹ̀tì",
      "Àkáǹtì Google ọ̀fẹ́ fún Google Colab",
      "API key model AI ọ̀fẹ́ láti ojú-òpó wẹ́ẹ̀bù gidi ilé-iṣẹ́ náà",
      "Ètò agent láti ẹ̀kọ́ 1",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, iṣẹ́ àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ẹ jọ ṣe ìdánwò ṣáájú, lẹ́yìn náà ẹ ṣe Orí 1 nínú chatbot ọ̀fẹ́ kí ẹnikẹ́ni tó ṣí Colab.",
      "Fi bí a ṣe ń fi API key pamọ́ bí àṣírí han gbogbo ẹgbẹ́, kí o sì ṣàyẹ̀wò pé kò sí key kankan tó hàn lórí ojú-iboju tàbí nínú notebook àjọlò.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé kí wọ́n má fi ìsọfúnni àdáni tàbí ti oníbàárà ránṣẹ́ lórí ìpele API ọ̀fẹ́.",
      "So àwọn akẹ́kọ̀ọ́ tí kò tíì kọ kóòdù rí pọ̀ mọ́ ẹni tí ó ti kọ ọ́ rí, kí wọ́n sì dà àwọn ìlà kóòdù kọ gẹ́lẹ́.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì ní kí akẹ́kọ̀ọ́ kọ̀ọ̀kan fi èsì ìdánwò márùn-ún wọn hàn."
    ]
  }
};
