"use strict";

// Koach Learn course (Yoruba translation of artificial-intelligence/agentic-multi-agent.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-multi-agent-yo",
  lang: "yo",
  translationOf: "agentic-multi-agent",
  category: "Artificial Intelligence",
  name: "Àwọn Ètò Agent Púpọ̀ (Multi-Agent Systems)",
  skills: "Mímọ ìgbà tí agent kan tó, Yíyan àpẹẹrẹ: pipeline, olùdarí, olùṣàyẹ̀wò, Kíkọ ipa àti handoff, Pípín ipò iṣẹ́ láìléwu, Dídá ìyípo àyẹ̀wò dúró, Fífi wé agent kan ṣoṣo",
  outcome: "ṣe ètò àti kọ́ ètò agent púpọ̀ kékeré kan nínú Python, agent olùkọ̀wé àti agent olùṣàyẹ̀wò tí ipa wọn yé, pẹ̀lú handoff tí a kọ sílẹ̀, ipò àjọlò kan àti òdiwọ̀n ìyípo, kí o sì fi ìdánwò rírọrùn hàn bóyá ó ju agent kan ṣoṣo lọ.",
  about: [
    "Èyí ni ẹ̀kọ́ 5 nínú ètò \"Design, Build, and Deploy Autonomous AI Agents\" (Ṣe Ètò, Kọ́, kí o sì Lo Àwọn Agent AI Tó Ń Dá Ṣiṣẹ́). Ètò agent púpọ̀ ń pín iṣẹ́ kan sáàárín agent mélòó kan, ọ̀kọ̀ọ̀kan pẹ̀lú ipa, ìtọ́ni àti irinṣẹ́ tirẹ̀, bí ẹgbẹ́ ṣe ń pín iṣẹ́. Tí a bá ṣe é dáadáa, ó lè mú kí iṣẹ́ dára sí i. Tí a kò bá ṣe é dáadáa, ó ń sọ owó, ìdàrúdàpọ̀ àti àṣìṣe di púpọ̀.",
    "Orí 1 jẹ́ nípa ètò: ìgbà tí a lè lo ju agent kan lọ, àwọn àpẹẹrẹ tí a sábà máa ń lò (pipeline, olùdarí àti àwọn òṣìṣẹ́, olùkọ̀wé àti olùṣàyẹ̀wò), àti bí a ṣe ń kọ ipa àti handoff. Orí 2 jẹ́ nípa kíkọ́: ipò àjọlò, dídá ìjiyàn tí kò lópin dúró, fífi ènìyàn sí ipò ọ̀gá, àti ṣíṣe ìdánwò bóyá ẹgbẹ́ náà ju agent kan lọ ní tòótọ́.",
    "O máa tún lo ìyípo (loop) Python rẹ àti ohun èlò ask_model láti ẹ̀kọ́ 3. A fi kóòdù hàn ní ìlà kúkúrú nínú àwọn ẹ̀kọ́. Ìdánwò ìmọ̀ kan wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ́ ètò agent méjì nínú Python: agent olùkọ̀wé kọ àlàyé ọjà ní ìpínrọ̀ kan láti inú ìwé òtítọ́ kúkúrú kan, agent olùṣàyẹ̀wò sì ṣàyẹ̀wò rẹ̀ pẹ̀lú àkọsílẹ̀ àyẹ̀wò tí a kọ sílẹ̀ (ó lo òtítọ́ láti inú ìwé náà nìkan, kò tó ọ̀rọ̀ 80, kò sí ọ̀rọ̀ bí \"tó dára jù lọ\" tàbí \"ó dájú pátápátá\"), ó sì dá JSON padà: approve (gbà á) tàbí revise (tún un ṣe) pẹ̀lú ìdí. Gbé iṣẹ́ náà kọjá nínú dictionary ipò àjọlò kan, dúró lẹ́yìn ìyípo 3 ní púpọ̀ jù, kí o sì tẹ gbogbo àkọsílẹ̀ iṣẹ́ (log) jáde. Lẹ́yìn náà, fi ìwé òtítọ́ 3 kan náà ránṣẹ́ sí agent kan ṣoṣo, kí o sì kọ èyí tí ó ṣe dáadáa jù àti ìdí rẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà nínú ètò Design, Build, and Deploy Autonomous AI Agents tí wọ́n ti parí ẹ̀kọ́ 1 sí 4: àwọn tó ní iṣẹ́ òwò kékeré, àwọn tó ń yí iṣẹ́ padà, àwọn akẹ́kọ̀ọ́ àti àwọn òṣìṣẹ́ tí wọ́n fẹ́ mọ ìgbà àti bí wọ́n ṣe lè lo ẹgbẹ́ agent.",
    startingPoint: "Wọ́n lè kọ́ agent kan nínú Python pẹ̀lú irinṣẹ́, àyẹ̀wò àwọn àlàyé (arguments), òdiwọ̀n ìgbésẹ̀, àkọsílẹ̀ iṣẹ́ (log) àti ìfọwọ́sí ènìyàn kí iṣẹ́ kíkọ tó ṣẹlẹ̀. Wọn kò tíì pín iṣẹ́ kan sáàárín agent púpọ̀ rí.",
    gap: "Àwọn ètò agent púpọ̀ gbajúmọ̀, ṣùgbọ́n tí a kò bá ṣe wọ́n dáadáa, wọ́n ń sọ owó, ìdàrúdàpọ̀ àti àṣìṣe di púpọ̀. Àwọn akẹ́kọ̀ọ́ nílò láti pinnu ìgbà tí ẹgbẹ́ yẹ, ṣe ètò ipa àti handoff tó yé, dá ìyípo tí kò lópin dúró, fi ènìyàn sí ipò ọ̀gá, kí wọ́n sì fi ìdánwò fi hàn bóyá ẹgbẹ́ náà ju agent kan lọ.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a fi kóòdù hàn ní ìlà kúkúrú láti dà kọ",
      "Ẹ̀rọ: kọ̀mpútà tí ó ní browser; ìpele API ọ̀fẹ́ ń dín iye ìpè model tí o lè ṣe kù",
      "Ìwé òtítọ́ àtọwọ́dá nìkan la ń lò fún àṣeṣe",
      "Ìyípo kọ̀ọ̀kan ní òdiwọ̀n ìyípo, ó sì ń gbé iṣẹ́ tí kò yanjú lọ sọ́dọ̀ ènìyàn",
      "Àkókò: ẹ̀kọ́ kúkúrú pẹ̀lú iṣẹ́ àṣeṣe kan ní ọ̀kọ̀ọ̀kan"
    ],
    prerequisites: "Ẹ̀kọ́ 3 àti 4 nínú Design, Build, and Deploy Autonomous AI Agents (\"Building AI Agents\" àti \"AI Agent Tool Use and Automation\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní iṣẹ́ kan tí o lè fi ẹ̀rọ ṣe", action: "pinnu bóyá ó nílò agent kan tàbí ẹgbẹ́ kan, nípa lílo ìdánwò ìgbanisíṣẹ́", standard: "pẹ̀lú ìdí gbólóhùn kan fún iṣẹ́ kọ̀ọ̀kan" },
    { id: "O2", condition: "Tí a bá fún ọ ní iṣẹ́ kan tí ó nílò ẹgbẹ́", action: "yan àpẹẹrẹ kan (pipeline, olùdarí àti òṣìṣẹ́, tàbí olùkọ̀wé àti olùṣàyẹ̀wò) kí o sì ya bí iṣẹ́ ṣe ń kọjá láàárín àwọn agent", standard: "kí o sì kọ ohun tí ń kọjá lórí ọfà kọ̀ọ̀kan" },
    { id: "O3", condition: "Fún agent kọ̀ọ̀kan nínú ẹgbẹ́ náà", action: "kọ prompt ipa àti ìlànà handoff JSON", standard: "pẹ̀lú iṣẹ́ kan fún agent kọ̀ọ̀kan àti àkọsílẹ̀ àyẹ̀wò olùṣàyẹ̀wò tí a lè ṣàyẹ̀wò" },
    { id: "O4", condition: "Nínú kóòdù Python rẹ", action: "pa iṣẹ́ ẹgbẹ́ náà mọ́ sínú ipò àjọlò kan tí kóòdù rẹ nìkan ń ṣe àtúnṣe sí", standard: "kí o sì kọ ipò náà sínú log lẹ́yìn ìgbésẹ̀ kọ̀ọ̀kan" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìyípo olùkọ̀wé àti olùṣàyẹ̀wò", action: "fi òdiwọ̀n ìyípo kún un kí o sì gbé iṣẹ́ tí kò yanjú lọ sọ́dọ̀ ènìyàn", standard: "kí ó dúró pẹ̀lú needs_human lẹ́yìn ìyípo 3 ní púpọ̀ jù" },
    { id: "O6", condition: "Pẹ̀lú àwọn ohun ìdánwò kan náà", action: "fi ẹgbẹ́ náà wé agent kan ṣoṣo (baseline) lórí dídára iṣẹ́ àti iye ìpè model", standard: "kí o fi àkọsílẹ̀ àyẹ̀wò kan náà ṣe àmì fún méjèèjì, kí o sì yan èyí tó rọrùn jù tí àmì wọn bá dọ́gba" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣe ètò ẹgbẹ́ agent",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ìgbà tí agent kan tó, àti ìgbà tí kò tó",
          minutes: 5,
          goal: "Pinnu bóyá iṣẹ́ kan nílò ju agent kan lọ.",
          text: [
            "Bẹ̀rẹ̀ pẹ̀lú agent kan. Agent àfikún kọ̀ọ̀kan ń mú ìpè model wá (owó àti àkókò), handoff (ibi tí ìsọfúnni ti lè sọnù) àti àwọn nǹkan púpọ̀ sí i láti dán wò. Ọ̀pọ̀ iṣẹ́ tí ó dà bí ẹni pé wọ́n nílò ẹgbẹ́ máa ń ṣiṣẹ́ dáadáa pẹ̀lú agent kan tí a fún ní prompt tó dára àti irinṣẹ́ tó dára.",
            "Ronú nípa ju agent kan lọ nígbà tí: iṣẹ́ náà ní àwọn ọgbọ́n tó yàtọ̀ síra gan-an (ìwádìí, lẹ́yìn náà kíkọ̀wé, lẹ́yìn náà àyẹ̀wò); prompt kan ti ń gùn jù tí ó sì ń dàrú; o fẹ́ àyẹ̀wò láti ọ̀dọ̀ ẹlòmíì, nítorí pé olùṣàyẹ̀wò tí ó ní ìtọ́ni tuntun máa ń rí àṣìṣe tí olùkọ̀wé kò rí; tàbí àwọn apá kan lè ṣiṣẹ́ ní àkókò kan náà.",
            "Ìdánwò tó wúlò: tí o bá máa gba ènìyàn méjì tó yàtọ̀ síra síṣẹ́ fún un, agent méjì lè ṣèrànwọ́. Tí ènìyàn kan bá lè ṣe é pẹ̀lú àkọsílẹ̀ àyẹ̀wò, agent kan pẹ̀lú àkọsílẹ̀ àyẹ̀wò ṣeé ṣe kí ó dára jù."
          ],
          words: [["Ètò agent púpọ̀ (multi-agent system)", "agent AI mélòó kan, ọ̀kọ̀ọ̀kan pẹ̀lú ipa tirẹ̀, tí wọ́n ń ṣiṣẹ́ pọ̀ lórí iṣẹ́ kan."], ["Handoff", "fífi iṣẹ́ àti ìsọfúnni lé agent míì lọ́wọ́ láti ọ̀dọ̀ agent kan."], ["Ẹrù àfikún (overhead)", "owó àti ìsapá àfikún tí ètò kan ń mú wá."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú agent kan", bullets: ["Agent àfikún kọ̀ọ̀kan ń fi owó àti àkókò kún un", "Handoff kọ̀ọ̀kan lè mú kí ìsọfúnni sọnù", "Àwọn apá púpọ̀ sí i láti dán wò"] },
            { title: "Ronú nípa ẹgbẹ́ nígbà tí", bullets: ["Iṣẹ́ náà nílò àwọn ọgbọ́n tó yàtọ̀ síra gan-an", "Prompt kan ti gùn jù, ó sì ń dàrú", "O fẹ́ àyẹ̀wò láti ọ̀dọ̀ ẹlòmíì", "Àwọn apá kan lè ṣiṣẹ́ ní àkókò kan náà"] },
            { title: "Ìdánwò ìgbanisíṣẹ́", bullets: ["Ènìyàn méjì tó yàtọ̀ síra? Bóyá agent méjì", "Ènìyàn kan pẹ̀lú àkọsílẹ̀ àyẹ̀wò? Agent kan"] }
          ],
          tryIt: "Kọ iṣẹ́ mẹ́ta tí o lè fi ẹ̀rọ ṣe sílẹ̀. Fún ọ̀kọ̀ọ̀kan, kọ \"agent kan\" tàbí \"ẹgbẹ́\" àti gbólóhùn kan nípa ìdí rẹ̀, nípa lílo ìdánwò ìgbanisíṣẹ́.",
          youCanNow: "pinnu ìgbà tí iṣẹ́ kan nílò ju agent kan lọ ní tòótọ́.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ìdánwò ìgbanisíṣẹ́?", options: ["Bíbéèrè bóyá ènìyàn kan máa yege ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́", "Dídán wò bóyá ilé-iṣẹ́ kan lè gba model síṣẹ́", "Bíbéèrè bóyá o máa gba ènìyàn méjì tó yàtọ̀ síra síṣẹ́ fún iṣẹ́ yìí", "Kíka iye irinṣẹ́ tí iṣẹ́ kan nílò"], answer: 2, why: "Tí o kò bá ní gba ènìyàn méjì, agent kan sábà máa ń tó." },
            { objective: "O1", q: "Iṣẹ́ kan ni pípín àwọn ọ̀rọ̀ ìránṣẹ́ sí ẹ̀ka mẹ́rin pẹ̀lú àkọsílẹ̀ àyẹ̀wò. Kí ni o máa kọ́?", options: ["Agent kan pẹ̀lú ìtọ́ni tó yé", "Ẹgbẹ́ agent mẹ́rin, ọ̀kan fún ẹ̀ka kọ̀ọ̀kan", "Olùdarí pẹ̀lú àwọn òṣìṣẹ́", "Olùkọ̀wé àti olùṣàyẹ̀wò"], answer: 0, why: "Iṣẹ́ tó rọrùn tí ó sì yé kò nílò owó àfikún àti handoff ẹgbẹ́." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Àwọn àpẹẹrẹ tí a sábà ń lò: pipeline, olùdarí, olùṣàyẹ̀wò",
          minutes: 6,
          goal: "Yan àpẹẹrẹ agent púpọ̀ tí ó bá iṣẹ́ kan mu.",
          text: [
            "Pipeline: àwọn agent ń ṣiṣẹ́ ní ìtẹ̀léra kan tí kò yí padà, ọ̀kọ̀ọ̀kan ń gbé ohun tí ó ṣe fún èyí tó kàn, bí ìlà iṣẹ́ ní ilé-iṣẹ́: ìwádìí, lẹ́yìn náà kíkọ̀wé, lẹ́yìn náà ìṣètò. Ó rọrùn láti kọ́ àti láti wá àṣìṣe nínú rẹ̀, nítorí pé o máa ń mọ ẹni tó kàn nígbà gbogbo.",
            "Olùdarí àti àwọn òṣìṣẹ́: agent kan (olùdarí, orchestrator) ń pín àfojúsùn sí apá púpọ̀, ó ń fi apá kọ̀ọ̀kan lé agent òṣìṣẹ́ kan lọ́wọ́, lẹ́yìn náà ó ń da àwọn èsì pọ̀. Ó rọ̀ dáadáa, ṣùgbọ́n olùdarí lè pín iṣẹ́ náà lọ́nà tí kò dára, òmìnira púpọ̀ sì túmọ̀ sí ohun púpọ̀ láti ṣàyẹ̀wò.",
            "Olùkọ̀wé àti olùṣàyẹ̀wò: agent kan ń ṣe iṣẹ́ náà, agent kejì ń dá a lẹ́jọ́ pẹ̀lú àkọsílẹ̀ àyẹ̀wò, ó sì lè gbà á tàbí dá a padà pẹ̀lú ìdí. Èyí ni àpẹẹrẹ tó wúlò jù fún àwọn olùbẹ̀rẹ̀, nítorí pé ó ń fi àyẹ̀wò dídára láti ọ̀dọ̀ ẹlòmíì kún un. Ó nílò òdiwọ̀n ìyípo kí àwọn méjèèjì má baà jiyàn títí láé."
          ],
          words: [["Pipeline", "àwọn agent tí ń ṣiṣẹ́ ní ìtẹ̀léra kan tí kò yí padà, ọ̀kọ̀ọ̀kan ń gbé iṣẹ́ fún èyí tó kàn."], ["Olùdarí (orchestrator)", "agent tí ó ń pín àfojúsùn sí àwọn iṣẹ́ kékeré, tí ó sì ń fi wọ́n lé àwọn agent míì lọ́wọ́."], ["Agent olùṣàyẹ̀wò (reviewer agent)", "agent tí ó ń ṣàyẹ̀wò iṣẹ́ agent míì pẹ̀lú àwọn òfin tó yé."]],
          slides: [
            { title: "Pipeline", bullets: ["Ìtẹ̀léra tí kò yí padà: ìwádìí, kíkọ̀wé, ìṣètò", "Ó rọrùn láti kọ́ àti láti wá àṣìṣe"] },
            { title: "Olùdarí àti àwọn òṣìṣẹ́", bullets: ["Agent kan ń pín àfojúsùn", "Àwọn òṣìṣẹ́ ń ṣe àwọn apá náà", "Ó rọ̀, ṣùgbọ́n ó le jù láti ṣàyẹ̀wò"] },
            { title: "Olùkọ̀wé àti olùṣàyẹ̀wò", bullets: ["Ọ̀kan ń ṣe iṣẹ́, ọ̀kan ń dá a lẹ́jọ́ pẹ̀lú àkọsílẹ̀ àyẹ̀wò", "Gbà á, tàbí dá a padà pẹ̀lú ìdí", "Ó nílò òdiwọ̀n ìyípo"] }
          ],
          tryIt: "Fún iṣẹ́ \"ẹgbẹ́\" láti Ẹ̀kọ́ 1, ya àwọn agent bí àpótí pẹ̀lú ọfà (lórí ìwé kò burú). Kọ irú àpẹẹrẹ tí ó jẹ́ àti ohun tí ń kọjá lórí ọfà kọ̀ọ̀kan.",
          youCanNow: "yan láàárín pipeline, olùdarí pẹ̀lú àwọn òṣìṣẹ́, àti olùkọ̀wé pẹ̀lú olùṣàyẹ̀wò.",
          quickCheck: [
            { objective: "O2", q: "Kí ni olùdarí ń ṣe nínú àpẹẹrẹ olùdarí àti àwọn òṣìṣẹ́?", options: ["Ó ń ṣàyẹ̀wò gbogbo àkọ́pẹrẹ pẹ̀lú àkọsílẹ̀ àyẹ̀wò", "Ó ń pín àfojúsùn, ó sì ń fi àwọn apá lé àwọn òṣìṣẹ́ lọ́wọ́", "Ó ń fi fáìlì pamọ́ sórí disk", "Ó ń ṣiṣẹ́ ní ìparí nìkan"], answer: 1, why: "Olùdarí ń pín iṣẹ́ náà, ó sì ń fi àwọn apá lé àwọn agent òṣìṣẹ́ lọ́wọ́." },
            { objective: "O2", q: "Iṣẹ́ rẹ máa ń lọ báyìí nígbà gbogbo: ìwádìí, lẹ́yìn náà kíkọ̀wé, lẹ́yìn náà ìṣètò. Àpẹẹrẹ wo ló bá a mu?", options: ["Olùkọ̀wé àti olùṣàyẹ̀wò", "Olùdarí àti àwọn òṣìṣẹ́", "Kò sí àpẹẹrẹ; lo chatbot mẹ́ta", "Pipeline"], answer: 3, why: "Ìtẹ̀léra ìgbésẹ̀ tí kò yí padà ni pipeline, ó sì tún rọrùn láti wá àṣìṣe nínú rẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kíkọ ipa àti handoff",
          minutes: 5,
          goal: "Kọ prompt ipa fún agent kọ̀ọ̀kan àti ìlànà handoff láàárín wọn.",
          text: [
            "Agent kọ̀ọ̀kan ní system prompt kúkúrú tirẹ̀: ẹni tí ó jẹ́, iṣẹ́ kan ṣoṣo tí ó ń ṣe, àwọn irinṣẹ́ rẹ̀ (ohun tí ó nílò nìkan), àti bí èsì rẹ̀ ṣe máa rí. Olùkọ̀wé kò nílò gbogbo àkọsílẹ̀ àyẹ̀wò olùṣàyẹ̀wò; olùṣàyẹ̀wò kò sì nílò irinṣẹ́ kíkọ̀wé rárá.",
            "Handoff ni ọ̀rọ̀ tí ń kọjá láàárín àwọn agent. Jẹ́ kí ó ní ìlànà, má ṣe jẹ́ kí ó jẹ́ ọ̀rọ̀ àsọyé lásán: {\"draft\": \"...\", \"facts_used\": [...]} láti ọ̀dọ̀ olùkọ̀wé sí olùṣàyẹ̀wò, àti {\"decision\": \"approve\" or \"revise\", \"reasons\": [...]} padà. Handoff tí ó ní ìlànà ń jẹ́ kí ó hàn kedere ohun tí a gbé kọjá, ó sì rọrùn fún kóòdù láti ṣàyẹ̀wò rẹ̀.",
            "Fún olùṣàyẹ̀wò ní àkọsílẹ̀ àyẹ̀wò, kì í ṣe ìmọ̀lára. \"Ṣé ó dára?\" máa ń mú ìfọwọ́sí wá. \"Ṣé gbogbo òtítọ́ wà nínú ìwé òtítọ́ náà? Ṣé kò tó ọ̀rọ̀ 80? Ṣé ó yẹra fún ọ̀rọ̀ bí 'tó dára jù lọ' àti 'ó dájú pátápátá'?\" máa ń mú àyẹ̀wò gidi wá."
          ],
          steps: ["Kọ prompt ipa fún agent kọ̀ọ̀kan: ipa, iṣẹ́ kan, irinṣẹ́, bí èsì ṣe máa rí.", "Fún agent kọ̀ọ̀kan ní irinṣẹ́ tí ó nílò nìkan.", "Ṣe ìlànà handoff ní JSON pẹ̀lú àwọn kọ́kọ́rọ́ (keys) tí kò yí padà.", "Kọ àkọsílẹ̀ àyẹ̀wò olùṣàyẹ̀wò bí ìbéèrè bẹ́ẹ̀ni/bẹ́ẹ̀kọ́."],
          words: [["Prompt ipa (role prompt)", "system prompt tí ó ń fún agent kan ní iṣẹ́ àti òfin rẹ̀."], ["Àkọsílẹ̀ àyẹ̀wò (checklist)", "àkọsílẹ̀ àwọn àyẹ̀wò bẹ́ẹ̀ni/bẹ́ẹ̀kọ́ pàtó tí a fi ń dá iṣẹ́ lẹ́jọ́."]],
          slides: [
            { title: "Prompt ipa kan fún agent kọ̀ọ̀kan", bullets: ["Ẹni tí ó jẹ́ àti iṣẹ́ kan ṣoṣo rẹ̀", "Irinṣẹ́ tí ó nílò nìkan", "Bí èsì rẹ̀ ṣe máa rí"] },
            { title: "Handoff tí ó ní ìlànà", bullets: ["Olùkọ̀wé -> olùṣàyẹ̀wò: àkọ́pẹrẹ àti òtítọ́ tí a lò", "Olùṣàyẹ̀wò -> olùkọ̀wé: ìpinnu àti ìdí", "Kóòdù lè ṣàyẹ̀wò gbogbo handoff"] },
            { title: "Fún olùṣàyẹ̀wò ní àkọsílẹ̀ àyẹ̀wò", bullets: ["\"Ṣé ó dára?\" máa ń mú ìfọwọ́sí tó rọrùn wá", "Àyẹ̀wò bẹ́ẹ̀ni/bẹ́ẹ̀kọ́ máa ń mú àyẹ̀wò gidi wá"] }
          ],
          tryIt: "Kọ prompt ipa olùkọ̀wé, prompt ipa olùṣàyẹ̀wò pẹ̀lú àkọsílẹ̀ àyẹ̀wò ohun 3, àti ìlànà handoff JSON méjèèjì fún ètò iṣẹ́ ìkẹyìn.",
          youCanNow: "kọ prompt ipa àti handoff tí ó ní ìlànà fún ẹgbẹ́ agent.",
          quickCheck: [
            { objective: "O3", q: "Kí ló yẹ kí ó wà nínú prompt ipa?", options: ["Iṣẹ́ kan ṣoṣo agent náà, irinṣẹ́ rẹ̀ àti bí èsì rẹ̀ ṣe máa rí", "Ìtọ́ni gbogbo agent míì", "Kọ́kọ́rọ́ API rẹ", "Àkọsílẹ̀ gbogbo ìgbà tí ó ti ṣiṣẹ́ rí"], answer: 0, why: "Prompt ipa ń jẹ́ kí agent kọ̀ọ̀kan dojú kọ iṣẹ́ àti ìlànà èsì tirẹ̀." },
            { objective: "O3", q: "A sọ fún olùṣàyẹ̀wò rẹ pé \"Ṣàyẹ̀wò bóyá àkọ́pẹrẹ náà dára.\" Kí ni o máa yí padà?", options: ["Kò sí nǹkan, ó kúrú", "Fún un ní irinṣẹ́ kíkọ̀wé kí ó lè tún àkọ́pẹrẹ ṣe", "Fi àkọsílẹ̀ àyẹ̀wò ìbéèrè pàtó tí ó lè dáhùn bẹ́ẹ̀ni tàbí bẹ́ẹ̀kọ́ rọ́pò rẹ̀", "Jẹ́ kí ó yan òfin tirẹ̀"], answer: 2, why: "Ìbéèrè àyẹ̀wò tí kò yé máa ń jẹ́ kí ó gbà ní ìrọ̀rùn jù; àkọsílẹ̀ àyẹ̀wò ń mú àyẹ̀wò gidi wá." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣe ètò ẹgbẹ́ agent",
        questions: [
          { objective: "O1", q: "Kí ni ibi ìbẹ̀rẹ̀ tó dára jù fún ọ̀pọ̀ iṣẹ́ agent tuntun?", options: ["Agent márùn-ún", "Olùdarí pẹ̀lú òṣìṣẹ́ mẹ́wàá", "Agent kan pẹ̀lú irinṣẹ́ tó dára", "Kò sí agent kankan"], answer: 2, why: "Agent àfikún ń fi owó àti ìdíjú kún un; bẹ̀rẹ̀ ní ìrọ̀rùn." },
          { objective: "O1", q: "Èwo ni ìdí tó dára láti fi agent olùṣàyẹ̀wò kún un?", options: ["Láti rí àyẹ̀wò láti ọ̀dọ̀ ẹlòmíì pẹ̀lú àwọn òfin tó yé", "Láti jẹ́ kí iṣẹ́ náà dà bí ẹni pé ó tóbi", "Láti lo token púpọ̀ sí i", "Nítorí pé méjì máa ń dára jù nígbà gbogbo"], answer: 0, why: "Ìtọ́ni tuntun àti àkọsílẹ̀ àyẹ̀wò máa ń rí àṣìṣe tí olùkọ̀wé kò rí." },
          { objective: "O2", q: "Ìwádìí, lẹ́yìn náà kíkọ̀wé, lẹ́yìn náà ìṣètò, ní ìtẹ̀léra tí kò yí padà, jẹ́:", options: ["Schema", "Olùdarí", "Trigger", "Pipeline"], answer: 3, why: "Pipeline ń gbé iṣẹ́ kọjá ní ìtẹ̀léra tí kò yí padà." },
          { objective: "O3", q: "Handoff wo ló rọrùn jù fún kóòdù láti ṣàyẹ̀wò?", options: ["\"Ohun tí mo rò nìyí, mo nírètí pé ó ràn ọ́ lọ́wọ́!\"", "{\"decision\": \"revise\", \"reasons\": [\"over 80 words\"]}", "Ìpínrọ̀ gígùn kan", "Àwòrán kan"], answer: 1, why: "JSON tí ó ní ìlànà ní àwọn kọ́kọ́rọ́ tí kò yí padà tí kóòdù lè kà." },
          { objective: "O3", q: "Ìtọ́ni olùṣàyẹ̀wò wo ló ń mú àyẹ̀wò gidi jù wá?", options: ["\"Ṣé ó dára?\"", "\"Ṣe lámèyítọ́.\"", "\"Ṣé o fẹ́ràn rẹ̀?\"", "\"Ṣé gbogbo òtítọ́ wà nínú ìwé òtítọ́ náà, ṣé kò sì tó ọ̀rọ̀ 80?\""], answer: 3, why: "Àyẹ̀wò bẹ́ẹ̀ni/bẹ́ẹ̀kọ́ pàtó ń dènà ìfọwọ́sí tó rọrùn jù." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkọ́ àti dídán ẹgbẹ́ náà wò",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ipò àjọlò: ibi kan fún iṣẹ́ náà",
          minutes: 5,
          goal: "Pa iṣẹ́ ẹgbẹ́ mọ́ sínú ipò àjọlò kan tí gbogbo agent ń kà láti inú rẹ̀.",
          text: [
            "Ipò àjọlò (shared state) ni ibi kan ṣoṣo tí iṣẹ́ ẹgbẹ́ náà wà, tí kóòdù rẹ ni ó ni í, kì í ṣe agent kankan. Nínú Python, dictionary kan ń ṣiṣẹ́: state = {'facts': FACTS, 'draft': None, 'reviews': [], 'round': 0, 'status': 'drafting'}.",
            "Agent kọ̀ọ̀kan ń gba àwọn apá tí ó nílò nìkan, ó sì ń dá handoff padà; kóòdù rẹ ń ṣàyẹ̀wò handoff náà, ó sì ń ṣe àtúnṣe sí state. Olùkọ̀wé ń ka òtítọ́ àti àyẹ̀wò tó kẹ́yìn; olùṣàyẹ̀wò ń ka òtítọ́ àti àkọ́pẹrẹ. Kò sí agent tí ó ń yí state padà fúnra rẹ̀.",
            "Èyí ń pa òtítọ́ mọ́ sí ibi kan, ó ń jẹ́ kí log rọrùn (fi state pamọ́ lẹ́yìn ìgbésẹ̀ kọ̀ọ̀kan), ó sì ń dá àwọn agent dúró láti máa gbé ẹ̀dà tí ó ń yapa síra kiri. Tí èsì agent kan bá burú, kóòdù rẹ lè kọ̀ ọ́ kí ó tó dé ọ̀dọ̀ agent tó kàn."
          ],
          steps: ["Ṣe dictionary state pẹ̀lú gbogbo apá (field) tí ẹgbẹ́ náà nílò.", "Fún agent kọ̀ọ̀kan ní àwọn apá tí ó nílò nìkan.", "Ṣàyẹ̀wò handoff kọ̀ọ̀kan nínú kóòdù kí o tó ṣe àtúnṣe sí state.", "Fi ẹ̀dà state pamọ́ sínú log lẹ́yìn ìgbésẹ̀ kọ̀ọ̀kan."],
          words: [["Ipò àjọlò (shared state)", "àkọsílẹ̀ kan ṣoṣo ti iṣẹ́ ẹgbẹ́ tí kóòdù ń pa mọ́, tí gbogbo agent sì ń kà láti inú rẹ̀."], ["Ìyapa (drift)", "nígbà tí àwọn ẹ̀dà ìsọfúnni kan náà bá ń di ohun tó yàtọ̀ síra díẹ̀díẹ̀."]],
          slides: [
            { title: "Ibi kan fún iṣẹ́ náà", bullets: ["state = {facts, draft, reviews, round, status}", "Kóòdù rẹ ló ni í, kì í ṣe agent kankan"] },
            { title: "Àwọn agent ń kà, kóòdù ń kọ", bullets: ["Agent kọ̀ọ̀kan ń gba àwọn apá tí ó nílò nìkan", "Kóòdù ń ṣàyẹ̀wò handoff, lẹ́yìn náà ó ń ṣe àtúnṣe sí state"] },
            { title: "Ìdí tí ó fi wúlò", bullets: ["Òtítọ́ kan, kò sí ẹ̀dà tí ń yapa", "Log rọrùn: fi state pamọ́ ní ìgbésẹ̀ kọ̀ọ̀kan", "A dá èsì búburú dúró kí ó tó dé agent tó kàn"] }
          ],
          tryIt: "Ṣe dictionary state fún iṣẹ́ ìkẹyìn. Kọ function méjì, run_writer(state) àti run_reviewer(state), tí ọ̀kọ̀ọ̀kan ń pe ask_model pẹ̀lú prompt ipa rẹ̀, tí ó sì ń dá JSON tí a ti tú padà, láìyí state padà fúnra wọn.",
          youCanNow: "pa iṣẹ́ ètò agent púpọ̀ mọ́ sínú ipò àjọlò kan tí kóòdù rẹ ń darí.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ipò àjọlò nínú ètò agent púpọ̀?", options: ["Àkọsílẹ̀ àdáni agent kọ̀ọ̀kan", "Ibi kan, tí kóòdù rẹ ni, tí ó ń mú iṣẹ́ ẹgbẹ́ náà dání", "Ìrántí model láti ọjọ́ dé ọjọ́", "Ọ̀rọ̀ aṣínà àjọlò"], answer: 1, why: "Ipò àjọlò kan tí kóòdù rẹ ń ṣe àtúnṣe sí ń jẹ́ kí gbogbo agent ṣiṣẹ́ láti inú òtítọ́ kan náà." },
            { objective: "O4", q: "Olùkọ̀wé àti olùṣàyẹ̀wò ọ̀kọ̀ọ̀kan ní ẹ̀dà àkọ́pẹrẹ tirẹ̀, àwọn ẹ̀dà náà sì ń yàtọ̀ síra. Kí ni o máa ṣe?", options: ["Jẹ́ kí agent kọ̀ọ̀kan ṣe àtúnṣe sí state fúnra rẹ̀", "Fi agent kẹta kún un láti da wọ́n pọ̀", "Fi sílẹ̀ tí ìdáhùn ìkẹyìn bá dà bí ẹni pé ó dára", "Ní ipò àjọlò kan tí kóòdù rẹ nìkan ń ṣe àtúnṣe sí lẹ́yìn tí ó bá ti ṣàyẹ̀wò handoff kọ̀ọ̀kan"], answer: 3, why: "Ẹ̀dà tí ó dá wà máa ń yapa; ipò àjọlò kan tí a ṣàyẹ̀wò ń dènà rẹ̀." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dídá ìyípo dúró àti fífi ènìyàn sí ipò ọ̀gá",
          minutes: 5,
          goal: "Fi òdiwọ̀n ìyípo àti gbígbé iṣẹ́ lọ sọ́dọ̀ ènìyàn kún ìyípo olùkọ̀wé àti olùṣàyẹ̀wò.",
          text: [
            "Agent méjì lè máa yí po títí láé: olùṣàyẹ̀wò máa ń rí nǹkan kan nígbà gbogbo, olùkọ̀wé sì máa ń yí nǹkan kan padà nígbà gbogbo. Ṣètò MAX_ROUNDS = 3. Tí olùṣàyẹ̀wò kò bá tíì gbà á nígbà yẹn, dúró pẹ̀lú status 'needs_human', kí o sì fi àkọ́pẹrẹ tó kẹ́yìn àti àwọn ìdí hàn.",
            "Ṣọ́ra fún ìkùnà ẹgbẹ́ méjì míì. Ìfọwọ́sí láìwò (rubber-stamping): olùṣàyẹ̀wò ń gba gbogbo nǹkan, ó sábà máa ń jẹ́ nítorí pé àkọsílẹ̀ àyẹ̀wò rẹ̀ kò yé. Ping-pong: olùkọ̀wé tún ìṣòro kan ṣe, ó sì mú ìṣòro àtijọ́ kan padà. Ka log náà láti rí méjèèjì.",
            "Fi ènìyàn sí ipò ọ̀gá lórí èsì náà. Ẹgbẹ́ náà ń ṣe àkọ́pẹrẹ àti àyẹ̀wò; ènìyàn ni ó ń fọwọ́ sí ohunkóhun tí a máa tẹ̀ jáde, fi ránṣẹ́ tàbí lò láti ṣe ìpinnu. Agent púpọ̀ sí i kò mú àìní fún ibi àyẹ̀wò yẹn kúrò; wọ́n ń jẹ́ kí ó ṣe pàtàkì sí i."
          ],
          steps: ["Ṣètò MAX_ROUNDS.", "Ìyípo: olùkọ̀wé ṣe àkọ́pẹrẹ, olùṣàyẹ̀wò pinnu.", "Tí ó bá jẹ́ approve: status 'approved', dúró.", "Tí ó bá jẹ́ revise: gbé àwọn ìdí padà fún olùkọ̀wé.", "Ní òdiwọ̀n: status 'needs_human', fi àkọ́pẹrẹ àti àwọn ìdí hàn."],
          words: [["Ìyípo (round)", "àkókò kan ti kíkọ àkọ́pẹrẹ àti àyẹ̀wò."], ["Ìfọwọ́sí láìwò (rubber-stamping)", "gbígba gbogbo nǹkan láìṣàyẹ̀wò ní tòótọ́."], ["Gbígbé lọ sọ́dọ̀ ènìyàn (escalation)", "fífi ìṣòro lé ènìyàn lọ́wọ́ nígbà tí ètò náà kò bá lè yanjú rẹ̀."]],
          slides: [
            { title: "Agent méjì lè máa yí po títí láé", bullets: ["MAX_ROUNDS = 3", "Kò sí ìfọwọ́sí nígbà yẹn: 'needs_human'"] },
            { title: "Ìkùnà ẹgbẹ́ méjì", bullets: ["Ìfọwọ́sí láìwò: ó ń gba gbogbo nǹkan", "Ping-pong: àwọn ìṣòro àtijọ́ ń padà wá", "Ka log náà láti rí méjèèjì"] },
            { title: "Ènìyàn ṣì ni ọ̀gá", bullets: ["Ẹgbẹ́ náà ń ṣe àkọ́pẹrẹ àti àyẹ̀wò", "Ènìyàn ń fọwọ́ sí ohun tí a tẹ̀ jáde tàbí fi ránṣẹ́"] }
          ],
          tryIt: "Kọ ìyípo olùkọ̀wé àti olùṣàyẹ̀wò pẹ̀lú MAX_ROUNDS = 3. Dán an wò pẹ̀lú ìwé òtítọ́ kan tí olùkọ̀wé ṣeé ṣe kí ó sọ àsọdùn nínú rẹ̀. Lẹ́yìn náà, dán òdiwọ̀n náà wò nípa ṣíṣe àkọsílẹ̀ àyẹ̀wò olùṣàyẹ̀wò tí kò ṣeé ṣe (\"kò tó ọ̀rọ̀ 5\") kí o sì rí i dájú pé ó dúró pẹ̀lú needs_human.",
          youCanNow: "dá ping-pong agent dúró pẹ̀lú òdiwọ̀n ìyípo kí o sì gbé iṣẹ́ tí kò yanjú lọ sọ́dọ̀ ènìyàn.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ping-pong nínú ìyípo olùkọ̀wé àti olùṣàyẹ̀wò?", options: ["Títún ìṣòro kan ṣe ń mú ìṣòro àtijọ́ padà, ìyípo lẹ́yìn ìyípo", "Olùṣàyẹ̀wò ń gba gbogbo àkọ́pẹrẹ", "Agent méjì ń ṣiṣẹ́ ní àkókò kan náà", "Ìyípo kíákíá tí ó parí ní ìyípo kan"], answer: 0, why: "Ping-pong jẹ́ lọ-àti-bọ̀ tí kò lópin, ìdí nìyí tí ìyípo náà fi nílò òdiwọ̀n ìyípo." },
            { objective: "O5", q: "Olùṣàyẹ̀wò kò tíì gbà á lẹ́yìn ìyípo 3. Kí ló yẹ kí ètò náà ṣe?", options: ["Gba àkọ́pẹrẹ tó kẹ́yìn bẹ́ẹ̀ náà", "Tún bẹ̀rẹ̀ láti ìyípo 1", "Dúró pẹ̀lú needs_human kí o sì fi àkọ́pẹrẹ àti àwọn ìdí hàn", "Gbé òdiwọ̀n sókè sí ìyípo 10"], answer: 2, why: "Iṣẹ́ tí kò yanjú ń lọ sọ́dọ̀ ènìyàn pẹ̀lú gbogbo ohun tí ó nílò láti pinnu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣé ẹgbẹ́ náà ju agent kan lọ? Dídán an wò",
          minutes: 6,
          goal: "Fi ètò agent púpọ̀ wé agent kan ṣoṣo lórí àwọn ìdánwò kan náà.",
          text: [
            "Ẹgbẹ́ yẹ nìkan tí ó bá ṣe dáadáa jù. Dán an wò bí o ṣe dán prompt wò nínú ẹ̀kọ́ 2: àwọn ohun ìdánwò kan náà, àmì tó yé, àti ìfiwéra. Ṣe ìwé òtítọ́ mẹ́ta, fi wọ́n ránṣẹ́ sí ẹgbẹ́ náà àti sí agent kan ṣoṣo tí àkọsílẹ̀ àyẹ̀wò wà nínú prompt tirẹ̀.",
            "Ìwọ fúnra rẹ ni kí o fi àkọsílẹ̀ àyẹ̀wò olùṣàyẹ̀wò ṣe àmì fún èsì kọ̀ọ̀kan (kì í ṣe agent olùṣàyẹ̀wò), kí o sì ka iye ìpè model fún ọ̀nà kọ̀ọ̀kan. Ìpè model dúró fún owó àti àkókò.",
            "Kọ èsì náà ní òtítọ́. Tí agent kan ṣoṣo bá gba àmì kan náà pẹ̀lú ìdá mẹ́ta àwọn ìpè, lo agent kan ṣoṣo. Tí ẹgbẹ́ náà bá rí àṣìṣe gidi tí agent kan ṣoṣo kò rí, àwọn ìpè àfikún ti ra dídára iṣẹ́ fún ọ. Ìdáhùn méjèèjì jẹ́ èsì ìmọ̀ ẹ̀rọ tó dára."
          ],
          steps: ["Ṣe ìwé òtítọ́ ìdánwò mẹ́ta.", "Fi ọ̀kọ̀ọ̀kan ránṣẹ́ sí ẹgbẹ́ náà àti sí agent kan ṣoṣo.", "Ìwọ fúnra rẹ fi àkọsílẹ̀ àyẹ̀wò ṣe àmì fún gbogbo èsì.", "Ka iye ìpè model fún ọ̀nà kọ̀ọ̀kan.", "Kọ ọ̀nà tí ó borí àti ìdí rẹ̀."],
          words: [["Baseline", "ẹ̀yà tó rọrùn tí o fi ń wéra, níbí agent kan ṣoṣo."], ["Ìpè model (model call)", "ìbéèrè kan sí model; ìpè púpọ̀ sí i túmọ̀ sí owó àti àkókò púpọ̀ sí i."]],
          slides: [
            { title: "Ẹgbẹ́ gbọ́dọ̀ fi hàn pé ó yẹ", bullets: ["Àwọn ohun ìdánwò kan náà, àmì tó yé, ìfiwéra", "Baseline: agent kan pẹ̀lú àkọsílẹ̀ àyẹ̀wò"] },
            { title: "Wọn nǹkan méjì", bullets: ["Dídára: ìwọ fúnra rẹ fi àkọsílẹ̀ àyẹ̀wò ṣe àmì", "Owó: ka iye ìpè model"] },
            { title: "Ròyìn ní òtítọ́", bullets: ["Àmì kan náà, ìpè díẹ̀? Lo agent kan", "Ó rí àṣìṣe gidi? Ẹgbẹ́ náà yẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ètò olùkọ̀wé àti olùṣàyẹ̀wò pẹ̀lú ipò àjọlò, handoff tí ó ní ìlànà àti MAX_ROUNDS = 3, lò ó lórí ìwé òtítọ́ mẹ́ta, lo baseline agent kan ṣoṣo lórí àwọn ìwé kan náà, kí o sì kọ ìfiwéra kúkúrú nípa dídára iṣẹ́ àti iye ìpè model.",
          youCanNow: "kọ́ ètò agent púpọ̀ kékeré kan kí o sì fi hàn bóyá ó ju agent kan ṣoṣo lọ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni baseline nínú ẹ̀kọ́ yìí?", options: ["Àkọ́pẹrẹ àkọ́kọ́ tí olùkọ̀wé ṣe", "Agent kan ṣoṣo tí o fi ẹgbẹ́ náà wé", "Àmì tó kéré jù tí a gbà láàyè", "Òdiwọ̀n ìyípo"], answer: 1, why: "Fífi wé agent kan ṣoṣo ń fi hàn bóyá ẹgbẹ́ náà yẹ fún owó àfikún rẹ̀." },
            { objective: "O6", q: "Ẹgbẹ́ náà gba àmì tó ga díẹ̀ ju agent kan lọ ṣùgbọ́n ó lo ìpè model ní ìlọ́po mẹ́ta. Kí ni o máa ṣe?", options: ["Yan ẹgbẹ́ nígbà gbogbo, nítorí pé ẹgbẹ́ dára jù", "Dá ìdánwò dúró", "Fi agent púpọ̀ sí i kún un láti gbé àmì sókè", "Wọn bóyá èrè kékeré náà tó owó àti àkókò àfikún, kí o sì kọ ìdí rẹ̀ sílẹ̀"], answer: 3, why: "Ìpè model dúró fún owó àti àkókò, nítorí náà ìpinnu náà ń wọn dídára iṣẹ́ pẹ̀lú wọn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkọ́ àti dídán ẹgbẹ́ náà wò",
        questions: [
          { objective: "O4", q: "Ta ló yẹ kí ó ṣe àtúnṣe sí ipò àjọlò?", options: ["Agent èyíkéyìí, nígbàkígbà tí ó bá fẹ́", "Olùṣàyẹ̀wò nìkan", "Kóòdù rẹ, lẹ́yìn tí ó bá ti ṣàyẹ̀wò handoff kọ̀ọ̀kan", "Kò sí ẹnìkan"], answer: 2, why: "State tí kóòdù ni ń pa òtítọ́ kan mọ́, ó sì ń dí èsì búburú lọ́nà." },
          { objective: "O5", q: "Olùṣàyẹ̀wò kò tíì gbà á lẹ́yìn ìyípo 3. Kí ló yẹ kí ó ṣẹlẹ̀?", options: ["Dúró pẹ̀lú 'needs_human' kí o sì fi àkọ́pẹrẹ àti àwọn ìdí hàn", "Gbà á láìfọwọ́ ènìyàn", "Máa bá a lọ títí tí yóò fi gbà á", "Pa àkọ́pẹrẹ náà rẹ́"], answer: 0, why: "Gbé e lọ sọ́dọ̀ ènìyàn dípò kí o máa yí po." },
          { objective: "O5", q: "Olùṣàyẹ̀wò ń gba gbogbo àkọ́pẹrẹ, kódà àwọn tí kò dára. Èyí ni:", options: ["Ping-pong", "Ìfọwọ́sí láìwò (rubber-stamping)", "Pipeline", "Ipò àjọlò"], answer: 1, why: "Àkọsílẹ̀ àyẹ̀wò tí kò yé máa ń yọrí sí gbígba gbogbo nǹkan." },
          { objective: "O6", q: "Báwo ló ṣe yẹ kí o ṣe àmì fún èsì ẹgbẹ́ àti ti agent kan ṣoṣo?", options: ["Ìwọ fúnra rẹ fi àkọsílẹ̀ àyẹ̀wò kan náà ṣe àmì fún wọn", "Béèrè lọ́wọ́ agent olùṣàyẹ̀wò", "Yan èyí tó gùn jù", "Ka iye ọ̀rọ̀ nìkan"], answer: 0, why: "Àmì tí ó dá dúró, tí ó sì dúró ṣinṣin ń jẹ́ kí ìfiwéra náà tọ́." },
          { objective: "O6", q: "Agent kan ṣoṣo gba àmì kan náà pẹ̀lú ẹgbẹ́ náà pẹ̀lú ìdá mẹ́ta ìpè model. Kí ló yẹ kí o ṣe?", options: ["Lo ẹgbẹ́ náà bẹ́ẹ̀ náà", "Fi agent púpọ̀ sí i kún un", "Dá ìdánwò dúró", "Lo agent kan ṣoṣo"], answer: 3, why: "Dídára kan náà pẹ̀lú owó díẹ̀ túmọ̀ sí pé ètò tó rọrùn jù ló borí." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Àwọn Ètò Agent Púpọ̀",
    questions: [
      { objective: "O1", q: "Ètò agent púpọ̀ jẹ́:", options: ["Agent kan pẹ̀lú prompt gígùn", "Agent mélòó kan pẹ̀lú ipa tirẹ̀ tí wọ́n ń ṣiṣẹ́ lórí iṣẹ́ kan", "Chatbot pẹ̀lú ọ̀pọ̀ olùlò", "Database kan"], answer: 1, why: "Agent kọ̀ọ̀kan ní ipa, ìtọ́ni àti irinṣẹ́ tirẹ̀." },
      { objective: "O1", q: "Agent àfikún kọ̀ọ̀kan ń fi kún un:", options: ["Dídára ọ̀fẹ́", "Kò sí nǹkan", "Owó, handoff àti iṣẹ́ ìdánwò", "Àkókò díẹ̀"], answer: 2, why: "Agent púpọ̀ sí i túmọ̀ sí ìpè púpọ̀ sí i àti ohun púpọ̀ sí i láti ṣàyẹ̀wò." },
      { objective: "O1", q: "Ìdánwò ìgbanisíṣẹ́ ń béèrè pé:", options: ["Ṣé agent náà ní ìwà rere?", "Elo ni model náà ń náni?", "Ṣé o máa gba ènìyàn méjì tó yàtọ̀ síra síṣẹ́ fún iṣẹ́ yìí?", "Ṣé prompt náà gùn?"], answer: 2, why: "Àwọn ọgbọ́n tó yàtọ̀ síra gan-an ń tọ́ka sí agent tó dá wà." },
      { objective: "O1", q: "Iṣẹ́ wo ló ṣeé ṣe jù kí ó nílò agent kan ṣoṣo?", options: ["Pípín àwọn ọ̀rọ̀ ìránṣẹ́ sí ẹ̀ka mẹ́rin pẹ̀lú àkọsílẹ̀ àyẹ̀wò", "Ṣíṣe ìwádìí, kíkọ àti ṣíṣàyẹ̀wò òtítọ́ ìròyìn gígùn kan", "Ṣíṣe ìwádìí mẹ́wàá lẹ́ẹ̀kan náà", "Kíkọ ìpolówó àti ṣíṣàyẹ̀wò rẹ̀ láti ọ̀dọ̀ ẹlòmíì"], answer: 0, why: "Ènìyàn kan pẹ̀lú àkọsílẹ̀ àyẹ̀wò lè ṣe é." },
      { objective: "O2", q: "Nínú àpẹẹrẹ olùdarí, olùdarí:", options: ["Ń fọwọ́ sí iṣẹ́ tirẹ̀", "Ń ṣètò ọ̀rọ̀ nìkan", "Ń pa kọ́kọ́rọ́ API mọ́", "Ń pín àfojúsùn, ó sì ń fi àwọn apá lé àwọn òṣìṣẹ́ lọ́wọ́"], answer: 3, why: "Ó ń ṣètò, ó ń pín iṣẹ́ fúnni, lẹ́yìn náà ó ń da àwọn èsì pọ̀." },
      { objective: "O2", q: "Kí ló dé tí olùkọ̀wé àti olùṣàyẹ̀wò fi dára fún àwọn olùbẹ̀rẹ̀?", options: ["Kò nílò òdiwọ̀n kankan", "Ó ń fi àyẹ̀wò dídára láti ọ̀dọ̀ ẹlòmíì kún un", "Kò lo model kankan", "Kò yí po rí"], answer: 1, why: "Agent kejì pẹ̀lú àkọsílẹ̀ àyẹ̀wò máa ń rí àṣìṣe." },
      { objective: "O2", q: "Ó rọrùn láti wá àṣìṣe nínú pipeline nítorí pé:", options: ["Ó ń ṣiṣẹ́ ní ìkọ̀kọ̀", "Kò ní agent kankan", "Kò kùnà rí", "O máa ń mọ agent tó kàn nígbà gbogbo"], answer: 3, why: "Ìtẹ̀léra tí kò yí padà ń jẹ́ kí ìgbésẹ̀ kọ̀ọ̀kan yé." },
      { objective: "O3", q: "Prompt ipa yẹ kí ó ní:", options: ["Ọ̀rọ̀ aṣínà rẹ", "Gbogbo prompt agent míì", "Iṣẹ́ kan ṣoṣo agent náà, irinṣẹ́ àti bí èsì ṣe máa rí", "Àwàdà kan"], answer: 2, why: "Agent kọ̀ọ̀kan nílò ipa àti òfin tirẹ̀ nìkan." },
      { objective: "O3", q: "Ṣé ó yẹ kí agent olùṣàyẹ̀wò ní irinṣẹ́ kíkọ̀wé?", options: ["Rárá, ohun tí ó nílò láti ṣàyẹ̀wò nìkan", "Bẹ́ẹ̀ni, gbogbo irinṣẹ́", "Irinṣẹ́ email nìkan", "Ó yẹ kí ó ní kọ́kọ́rọ́ API"], answer: 0, why: "Òfin àṣẹ tó kéré jù (least privilege) kan gbogbo agent." },
      { objective: "O3", q: "Handoff tí ó ní ìlànà wúlò nítorí pé:", options: ["Wọ́n gùn jù", "Kóòdù lè ṣàyẹ̀wò ohun tí a gbé kọjá", "Wọ́n ń fi ìsọfúnni pamọ́", "Àwọn model kò lè ka ọ̀rọ̀"], answer: 1, why: "Àwọn kọ́kọ́rọ́ tí kò yí padà ń jẹ́ kí a lè ṣàyẹ̀wò handoff." },
      { objective: "O3", q: "Olùṣàyẹ̀wò tí a béèrè lọ́wọ́ rẹ̀ pé \"Ṣé ó dára?\" ṣeé ṣe jù kí ó:", options: ["Gbà ní ìrọ̀rùn jù", "Ṣàyẹ̀wò gbogbo òtítọ́", "Kọ̀ láti dáhùn", "Ka iye ọ̀rọ̀ dáadáa"], answer: 0, why: "Ìbéèrè tí kò yé ń mú ìfọwọ́sí tí kò yé wá." },
      { objective: "O4", q: "Ta ló ni ipò àjọlò?", options: ["Browser olùlò", "Agent olùkọ̀wé", "Ilé-iṣẹ́ tí ó ni model", "Kóòdù rẹ"], answer: 3, why: "Kóòdù ń pa orísun òtítọ́ kan ṣoṣo mọ́." },
      { objective: "O4", q: "Ìyapa (drift) túmọ̀ sí:", options: ["Model tí ń yára sí i", "Àwọn ẹ̀dà ìsọfúnni tí ń di ohun tó yàtọ̀ síra díẹ̀díẹ̀", "Òdiwọ̀n ìyípo", "Trigger kan"], answer: 1, why: "Ipò àjọlò ń dènà ẹ̀dà tí ń yapa." },
      { objective: "O4", q: "Kí ló dé tí a fi ń fi state pamọ́ sínú log lẹ́yìn ìgbésẹ̀ kọ̀ọ̀kan?", options: ["Láti fo ìyípo", "Láti jẹ́ kí model gbọ́n sí i", "Láti rí bí iṣẹ́ náà ṣe yí padà gan-an", "Láti pín kọ́kọ́rọ́ rẹ"], answer: 2, why: "Log ń fi àyípadà kọ̀ọ̀kan hàn fún wíwá àṣìṣe." },
      { objective: "O5", q: "MAX_ROUNDS ń dènà:", options: ["Gbogbo ìpè model pátápátá", "Àkọ́pẹrẹ tó dára", "Lọ-àti-bọ̀ tí kò lópin láàárín àwọn agent", "Kíkọ log"], answer: 2, why: "Òdiwọ̀n ìyípo ń fòpin sí ping-pong." },
      { objective: "O5", q: "Ping-pong nínú ìyípo olùkọ̀wé àti olùṣàyẹ̀wò ni nígbà tí:", options: ["Títún ìṣòro kan ṣe ń mú ìṣòro àtijọ́ padà", "Olùṣàyẹ̀wò ń gba gbogbo nǹkan", "Àkọ́pẹrẹ náà pé", "A ti fi state pamọ́"], answer: 0, why: "Àwọn agent ń ju àwọn ìṣòro kan náà sí ara wọn." },
      { objective: "O5", q: "Gbígbé lọ sọ́dọ̀ ènìyàn (escalation) túmọ̀ sí:", options: ["Pípa log rẹ́", "Fífi agent púpọ̀ sí i kún un", "Gbígbé òdiwọ̀n ìyípo sókè títí láé", "Fífi iṣẹ́ tí kò yanjú lé ènìyàn lọ́wọ́"], answer: 3, why: "Ènìyàn ń yanjú ohun tí ètò náà kò lè yanjú." },
      { objective: "O5", q: "Pẹ̀lú agent púpọ̀ sí i, ibi àyẹ̀wò ènìyàn máa ń di:", options: ["Èyí tí a kò nílò", "Èyí tí ó ṣe pàtàkì sí i", "Èyí tí ó ń ṣiṣẹ́ fúnra rẹ̀", "Èyí tí kò bófin mu"], answer: 1, why: "Àwọn apá púpọ̀ sí i túmọ̀ sí ọ̀nà púpọ̀ sí i tí nǹkan lè gbà bàjẹ́." },
      { objective: "O6", q: "Baseline nínú ẹ̀kọ́ yìí ni:", options: ["Èsì tó gùn jù", "Àkọ́pẹrẹ àkọ́kọ́", "Kọ́kọ́rọ́ API", "Agent kan ṣoṣo tí o fi ẹgbẹ́ náà wé"], answer: 3, why: "O ń fi ẹgbẹ́ náà wé ọ̀nà tó rọrùn." },
      { objective: "O6", q: "A ń ka iye ìpè model nítorí pé wọ́n dúró fún:", options: ["Iye ọ̀rọ̀", "Dídára", "Owó àti àkókò", "Iye olùlò"], answer: 2, why: "Ìpè púpọ̀ sí i ń náni ní owó púpọ̀ sí i, ó sì ń gba àkókò púpọ̀ sí i." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      4,
      7,
      9,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ipa àti àkọsílẹ̀ àyẹ̀wò tó yé",
        objective: "O3",
        notYet: "Àwọn ipa ń wọnú ara wọn, tàbí olùṣàyẹ̀wò ń béèrè bóyá àkọ́pẹrẹ náà dára nìkan.",
        meets: "Olùkọ̀wé àti olùṣàyẹ̀wò ọ̀kọ̀ọ̀kan ní iṣẹ́ kan; olùṣàyẹ̀wò ń ṣàyẹ̀wò òtítọ́ láti inú ìwé náà, pé kò tó ọ̀rọ̀ 80 àti pé kò sí ọ̀rọ̀ bí \"tó dára jù lọ\".",
        exceeds: "Olùṣàyẹ̀wò kò ní irinṣẹ́ kíkọ̀wé, ó sì ń fúnni ní ìdí fún gbogbo revise."
      },
      {
        name: "Handoff tí ó ní ìlànà",
        objective: "O3",
        notYet: "Àwọn agent ń gbé ọ̀rọ̀ àsọyé lásán kọjá tí kóòdù kò lè ṣàyẹ̀wò.",
        meets: "Olùṣàyẹ̀wò ń dá JSON padà pẹ̀lú approve tàbí revise àti àwọn ìdí.",
        exceeds: "Kóòdù ń ṣàyẹ̀wò handoff kọ̀ọ̀kan kí ó tó lò ó."
      },
      {
        name: "Ipò àjọlò",
        objective: "O4",
        notYet: "Àwọn agent ń pa ẹ̀dà iṣẹ́ náà mọ́ lọ́tọ̀ọ̀tọ̀.",
        meets: "Iṣẹ́ náà ń kọjá nínú dictionary state kan tí kóòdù ń ṣe àtúnṣe sí.",
        exceeds: "A ń kọ state náà sínú log lẹ́yìn gbogbo ìgbésẹ̀."
      },
      {
        name: "Òdiwọ̀n ìyípo àti gbígbé lọ sọ́dọ̀ ènìyàn",
        objective: "O5",
        notYet: "Kò sí òdiwọ̀n ìyípo, tàbí ìyípo náà lè máa lọ títí láé.",
        meets: "Ó ń dúró lẹ́yìn ìyípo 3 ní púpọ̀ jù, ó sì ń tẹ gbogbo log jáde.",
        exceeds: "Iṣẹ́ tí kò yanjú ń dúró pẹ̀lú needs_human, ó sì ń fi àkọ́pẹrẹ àti àwọn ìdí hàn."
      },
      {
        name: "Ìfiwéra tó tọ́",
        objective: "O6",
        notYet: "Kò sí baseline agent kan ṣoṣo, tàbí a lo àwọn ohun ìdánwò tó yàtọ̀.",
        meets: "A fi ìwé òtítọ́ 3 kan náà ránṣẹ́ sí méjèèjì, pẹ̀lú àkọsílẹ̀ nípa èyí tí ó ṣe dáadáa jù àti ìdí rẹ̀.",
        exceeds: "A fi àkọsílẹ̀ àyẹ̀wò kan náà ṣe àmì fún méjèèjì, a sì ka iye ìpè model."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí ẹ̀kọ́ 6 nínú ètò agent náà láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn yan agent kan tàbí ẹgbẹ́ nípa ìdánwò dípò àfojúdá (ìwádìí àtẹ̀lé)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní browser àti íńtánẹ́ẹ̀tì; Colab tàbí Python lórí kọ̀mpútà tìrẹ",
      "Ìyípo agent rẹ àti ohun èlò ask_model láti ẹ̀kọ́ 3, àti kọ́kọ́rọ́ API model kan",
      "Ìwé òtítọ́ ọjà àtọwọ́dá kúkúrú mẹ́ta",
      "Ìwé láti ya àwọn àpẹẹrẹ agent",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà jẹ́ kí ẹgbẹ́ náà lo ìdánwò ìgbanisíṣẹ́ lórí iṣẹ́ gidi kí ẹnikẹ́ni tó kọ kóòdù.",
      "Fún gbogbo ènìyàn ní ìwé òtítọ́ mẹ́ta kan náà kí a lè fi èsì ẹgbẹ́ àti ti agent kan ṣoṣo wéra káàkiri ẹgbẹ́.",
      "Ṣọ́ iye ìpè model lórí ìpele ọ̀fẹ́; jẹ́ kí òdiwọ̀n ìyípo wà ní 3.",
      "Ní kí àwọn akẹ́kọ̀ọ́ fi ìgbà kan tí ó dúró pẹ̀lú needs_human hàn, kí ẹ sì jíròrò ohun tí ènìyàn náà máa pinnu.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì gba \"agent kan ṣe dáadáa bákan náà\" gẹ́gẹ́ bí èsì tó dára nígbà tí ìdánwò bá fi hàn bẹ́ẹ̀."
    ]
  }
};
