"use strict";

// Koach Learn course (Yoruba translation of shared/ai-automation-workflows.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-automation-workflows-yo",
  lang: "yo",
  translationOf: "ai-automation-workflows",
  category: "Small Business",
  name: "Iṣẹ́ Aládàáṣe pẹ̀lú AI àti Ọ̀nà Iṣẹ́ Ọlọ́gbọ́n",
  skills: "Yíya àwòrán ọ̀nà iṣẹ́, Rírí iṣẹ́ tí ẹ̀rọ lè ṣe, Ṣíṣe ètò trigger àti ìgbésẹ̀, Fífi ìgbésẹ̀ AI kún un, Kíkọ́ àti dídán iṣẹ́ aládàáṣe wò, Ṣíṣọ́ àti títún un ṣe",
  outcome: "ya àwòrán iṣẹ́ kan tí o máa ń tún ṣe, ṣe ètò iṣẹ́ aládàáṣe pẹ̀lú trigger, àwọn ìgbésẹ̀ àti ìgbésẹ̀ AI, kọ́ ọ nínú irinṣẹ́ no-code, dán an wò pẹ̀lú ìsọfúnni àpẹẹrẹ, kí o sì jẹ́ kí ènìyàn máa ṣàyẹ̀wò níbi tí àṣìṣe ti lè ṣe ìpalára.",
  about: [
    "Iṣẹ́ aládàáṣe (automation) túmọ̀ sí pé ẹ̀rọ kọ̀mpútà ń ṣe àwọn ìgbésẹ̀ tí ó súni fún ọ: dída ìdáhùn fọ́ọ̀mù kọ sínú spreadsheet, fífi email ìjẹ́rìísí ránṣẹ́, fífi ìwé owó (receipt) pamọ́, rírán ẹnìkan létí ọjọ́ ìparí iṣẹ́. Tí o bá fi AI kún un, iṣẹ́ aládàáṣe náà tún lè kàwé, ṣètò nǹkan kí ó sì kọ̀wé, fún àpẹẹrẹ kí ó ṣàkópọ̀ ìbéèrè kan tàbí kí ó kọ àkọ́pẹrẹ èsì.",
    "Ẹ̀kọ́ yìí wà fún àwọn tó ni iléeṣẹ́ kékeré, òṣìṣẹ́ àti olùyọ̀ǹda ara-ẹni ní àwọn àjọ aláìlérè (nonprofit), àti àwọn òṣìṣẹ́ tí wọ́n fẹ́ ọgbọ́n tí àwọn agbanisíṣẹ́ ń wá. Àpẹẹrẹ ni iléeṣẹ́ ìmọ́tótó tí ó ń gba ìbéèrè fún iye owó, àjọ aláìlérè tí ó ń forúkọ àwọn olùyọ̀ǹda sílẹ̀, àti olùrànlọ́wọ́ ọ́fíìsì tí ó ń ṣiṣẹ́ lórí ìwé owó (invoice).",
    "O máa ya àwòrán iṣẹ́ gidi kan, o máa ṣe ètò iṣẹ́ aládàáṣe náà sórí ìwé, lẹ́yìn náà o máa kọ́ ọ nínú irinṣẹ́ no-code bí Zapier, Microsoft Power Automate tàbí Make, tàbí pẹ̀lú ohun tí ó ti wà nínú Google Forms àti Sheets. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Kọ́ iṣẹ́ aládàáṣe kan tí ó ń ṣiṣẹ́ fún àjọ gidi tàbí àjọ àṣeṣe: fún àpẹẹrẹ, fọ́ọ̀mù ìbéèrè tí ó ń fi ìdáhùn kọ̀ọ̀kan pamọ́ sínú spreadsheet, tí ó ń lo ìgbésẹ̀ AI láti ṣàkópọ̀ ìbéèrè náà kí ó sì ṣètò rẹ̀, tí ó sì ń fi àkọ́pẹrẹ èsì ránṣẹ́ sí òṣìṣẹ́ kan nípasẹ̀ email fún ìfọwọ́sí. Kọ àwòrán ọ̀nà iṣẹ́ náà sílẹ̀, trigger àti àwọn ìgbésẹ̀, ìdánwò márùn-ún pẹ̀lú èsì wọn, àti ẹni tí ó ń ṣàyẹ̀wò ohun tí ó jáde.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tó ni iléeṣẹ́ kékeré, àwọn alákòóso ọ́fíìsì àti òṣìṣẹ́, àti àwọn olùṣètò ní àjọ aláìlérè tàbí ṣọ́ọ̀ṣì tí wọ́n ń ṣe fọ́ọ̀mù, email, ìforúkọsílẹ̀ àti ìránnilétí kan náà lọ́sẹ̀ọ̀sẹ̀.",
    startingPoint: "Wọ́n ń lo email, spreadsheet àti fọ́ọ̀mù orí ayélujára, àwọn kan sì ti gbìyànjú olùrànlọ́wọ́ AI. Ọ̀pọ̀ kò tíì kọ́ iṣẹ́ aládàáṣe rí, tàbí so app méjì pọ̀, wọn kò sì ní ìrírí kóòdù.",
    gap: "Ọ̀pọ̀ wákàtí ń lọ sí dída nǹkan kọ, fífi nǹkan pamọ́, rírán ènìyàn létí àti ìjẹ́rìísí pẹ̀lú ọwọ́, àwọn nǹkan kan sì ń bọ́ sílẹ̀. Àwọn akẹ́kọ̀ọ́ nílò láti ṣe ètò kí wọ́n sì kọ́ iṣẹ́ aládàáṣe no-code tí kò léwu pẹ̀lú ìgbésẹ̀ AI, kí wọ́n dán an wò, kí wọ́n sì jẹ́ kí ènìyàn máa darí rẹ̀ níbi tí àṣìṣe ti lè ṣe ìpalára, kí wọ́n lè fi àkókò pamọ́ láìfi ọ̀rọ̀ tí kò tọ́ ránṣẹ́ tàbí jẹ́ kí ìsọfúnni jò.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; kò sí kóòdù",
      "Ẹ̀rọ: a nílò kọ̀mpútà láti kọ́ iṣẹ́ aládàáṣe náà",
      "Owó: àwọn ètò ọ̀fẹ́ àti ìgbìyànjú (trial) ní òdiwọ̀n; irinṣẹ́ àti iye owó ń yí padà, nítorí náà akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ojú-ewé iye owó kọ̀ọ̀kan",
      "Ìsọfúnni àdáni: kò sí nọ́mbà káàdì, nọ́mbà Social Security, ìsọfúnni ìlera tàbí ọ̀rọ̀ aṣínà nínú ìgbésẹ̀ AI; ìsọfúnni àròsọ nìkan ni a fi ń dánwò",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5, nǹkan bí ìṣẹ́jú 60 lápapọ̀, pẹ̀lú àkókò fún kíkọ́ àti dídánwò"
    ],
    prerequisites: "Kò sí. Ó máa ràn ọ́ lọ́wọ́ tí o bá ti mọ Google Forms tàbí Microsoft Forms àti spreadsheet lò."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní iṣẹ́ aládàáṣe ojoojúmọ́ kan", action: "dá trigger rẹ̀ mọ̀, àwọn ìgbésẹ̀ rẹ̀, àti ibi tí ìgbésẹ̀ AI ti bá a mu", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O2", condition: "Fún iṣẹ́ tí a ń ṣe ó kéré tán lẹ́ẹ̀kan lọ́sẹ̀", action: "ya àwòrán ìgbésẹ̀ kọ̀ọ̀kan pẹ̀lú ẹni tó ń ṣe é, irinṣẹ́ tí ó ń lò àti àkókò tí ó ń gbà, kí o sì sàmì sí ìgbésẹ̀ kọ̀ọ̀kan: ẹ̀rọ ṣe é, AI kọ àkọ́pẹrẹ kí ènìyàn ṣàyẹ̀wò, tàbí ènìyàn ṣe é", standard: "pẹ̀lú ìṣirò àkókò tí o máa fi pamọ́ lọ́sẹ̀" },
    { id: "O3", condition: "Kí o tó lo irinṣẹ́ kankan", action: "kọ ètò iṣẹ́ aládàáṣe pẹ̀lú trigger, àwọn ìgbésẹ̀, prompt AI, ibi àyẹ̀wò ènìyàn àti òfin ìsọfúnni", standard: "pẹ̀lú ìfọwọ́sí ènìyàn níbikíbi tí àṣìṣe ti lè ṣe ìpalára" },
    { id: "O4", condition: "Ní lílo fọ́ọ̀mù, spreadsheet àti irinṣẹ́ no-code", action: "kọ́ iṣẹ́ aládàáṣe tí ó ń fi ìdáhùn pamọ́, tí ó ń ṣe ìgbésẹ̀ AI, tí ó sì ń fi àkọ́pẹrẹ ránṣẹ́ fún ìfọwọ́sí", standard: "kí ọ̀nà ìpìlẹ̀ ti ṣiṣẹ́ kí o tó fi ìgbésẹ̀ AI kún un" },
    { id: "O5", condition: "Tí o bá ti kọ́ iṣẹ́ aládàáṣe rẹ", action: "dán an wò pẹ̀lú àpẹẹrẹ márùn-ún, títí kan àwọn tó le, kí o sì tún ohun tó bàjẹ́ ṣe", standard: "pẹ̀lú ìsọfúnni àròsọ nìkan, kí o tún gbogbo àṣìṣe ṣe kí o sì tún un dán wò" },
    { id: "O6", condition: "Nígbà tí iṣẹ́ aládàáṣe náà bá bẹ̀rẹ̀ iṣẹ́ gidi", action: "máa wo ìtàn ìṣiṣẹ́ rẹ̀ (run history), ṣètò ìkìlọ̀ àṣìṣe, yan ẹni tó ni ín, kí o sì kọ ìwé ìtọ́sọ́nà ojú-ewé kan", standard: "kí ẹlòmíì lè máa lò ó tàbí pa á" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣe ètò ọ̀nà iṣẹ́ ọlọ́gbọ́n",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí iṣẹ́ aládàáṣe àti ọ̀nà iṣẹ́ AI jẹ́",
          minutes: 4,
          goal: "Ṣàlàyé trigger, àwọn ìgbésẹ̀ àti ibi tí ìgbésẹ̀ AI ti bá a mu.",
          text: [
            "Gbogbo iṣẹ́ aládàáṣe ní ìrísí kan náà. Trigger ni ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ rẹ̀: ẹnìkan fi fọ́ọ̀mù ránṣẹ́, email kan dé, ọjọ́ kan pé. Àwọn ìgbésẹ̀ (actions) ni ohun tí ó ń ṣẹlẹ̀ lẹ́yìn náà: fi ìlà kan kún spreadsheet, fi email ránṣẹ́, ṣẹ̀dá iṣẹ́ kan.",
            "Iṣẹ́ aládàáṣe lásán ń tẹ̀lé òfin tí kò yí padà: tí fọ́ọ̀mù bá dé, da á kọ sínú sheet. Ìgbésẹ̀ AI ń fi iṣẹ́ tí ó jọ ìdájọ́ kún un: ka ọ̀rọ̀ kan kí o sì pinnu bóyá àròyé ni, ìbéèrè ni, tàbí oníbàárà tuntun; ṣàkópọ̀ rẹ̀ ní gbólóhùn méjì; kọ àkọ́pẹrẹ èsì tó ní ọ̀wọ̀.",
            "Àwọn irinṣẹ́ ọ̀tọ̀ọ̀tọ̀ ń lo orúkọ ọ̀tọ̀ọ̀tọ̀. Zapier ń pe iṣẹ́ aládàáṣe ní Zap, Power Automate ń pè é ní flow, Make sì ń pè é ní scenario. Èrò kan náà ni: tí èyí bá ṣẹlẹ̀, ṣe ìyẹn."
          ],
          words: [["Iṣẹ́ aládàáṣe (automation)", "ẹ̀rọ kọ̀mpútà tí ó ń ṣe àwọn ìgbésẹ̀ fún ọ láìsí pé ènìyàn ń ṣe é nígbà gbogbo."], ["Trigger", "ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ iṣẹ́ aládàáṣe."], ["Ìgbésẹ̀ (action)", "ohun tí iṣẹ́ aládàáṣe ń ṣe lẹ́yìn trigger."], ["Ọ̀nà iṣẹ́ (workflow)", "àwọn ìgbésẹ̀ tí a ń tẹ̀lé láti parí iṣẹ́ kan."]],
          slides: [
            { title: "Tí èyí bá ṣẹlẹ̀, ṣe ìyẹn", bullets: ["Trigger: ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ rẹ̀", "Àwọn ìgbésẹ̀: ohun tí ó ń ṣẹlẹ̀ lẹ́yìn náà"] },
            { title: "Fífi ìgbésẹ̀ AI kún un", bullets: ["Ṣètò: àròyé, ìbéèrè tàbí oníbàárà tuntun", "Ṣàkópọ̀ ní gbólóhùn méjì", "Kọ àkọ́pẹrẹ èsì fún ènìyàn láti ṣàyẹ̀wò"] },
            { title: "Èrò kan náà, orúkọ ọ̀tọ̀ọ̀tọ̀", bullets: ["Zapier: Zap", "Power Automate: flow", "Make: scenario"] }
          ],
          tryIt: "Kọ iṣẹ́ aládàáṣe mẹ́ta \"tí èyí bá ṣẹlẹ̀, ṣe ìyẹn\" tí o fẹ́ kí o ní níbi iṣẹ́, nílé, tàbí nínú ẹgbẹ́ kan tí o wà. Fa òbìrí yí èyí tí ó lè lo ìgbésẹ̀ AI ká.",
          youCanNow: "ṣàlàyé iṣẹ́ aládàáṣe èyíkéyìí gẹ́gẹ́ bí trigger àti àwọn ìgbésẹ̀, kí o sì sọ ibi tí AI ti lè ṣèrànwọ́.",
          quickCheck: [
            { objective: "O1", q: "Kí ni Power Automate ń pe iṣẹ́ aládàáṣe?", options: ["Zap", "Scenario", "Flow", "Macro"], answer: 2, why: "Power Automate ń pè é ní flow; Zapier ń pè é ní Zap, Make sì ń pè é ní scenario." },
            { objective: "O1", q: "O fẹ́ kí a ṣètò ọ̀rọ̀ tuntun kọ̀ọ̀kan sí àròyé, ìbéèrè tàbí oníbàárà tuntun. Apá wo ló ń ṣe ìyẹn?", options: ["Ìgbésẹ̀ AI", "Trigger", "Ìlà kan nínú spreadsheet", "Àdírẹ́sì email"], answer: 0, why: "Kíka ọ̀rọ̀ kí a sì ṣètò rẹ̀ jẹ́ iṣẹ́ tí ó jọ ìdájọ́, iṣẹ́ ìgbésẹ̀ AI ni." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yíya àwòrán ọ̀nà iṣẹ́ àti rírí ohun tí ẹ̀rọ lè ṣe",
          minutes: 5,
          goal: "Ya àwòrán iṣẹ́ tí a ń tún ṣe ní ìgbésẹ̀ kọ̀ọ̀kan, kí o sì yan àwọn ìgbésẹ̀ tí ẹ̀rọ máa ṣe.",
          text: [
            "Kí o tó kọ́ nǹkan, ya àwòrán iṣẹ́ náà bí a ṣe ń ṣe é lónìí. Kọ ìgbésẹ̀ kọ̀ọ̀kan, ẹni tó ń ṣe é, irinṣẹ́ tí ó ń lò àti àkókò tí ó ń gbà. Ìforúkọsílẹ̀ olùyọ̀ǹda lè rí báyìí: ka email náà, da àlàyé kọ sínú spreadsheet, ṣàyẹ̀wò ètò àkókò, fi email ìkíni káàbọ̀ ránṣẹ́, fi ìránnilétí sínú kàlẹ́ńdà.",
            "Àwọn ìgbésẹ̀ tí ó dára fún ẹ̀rọ ni àwọn tí a ń tún ṣe, tí ó ní òfin, tí ó sì súni: dída nǹkan kọ, fífi nǹkan pamọ́, rírán ènìyàn létí, ìjẹ́rìísí. Àwọn ìgbésẹ̀ tí ó nílò ìdájọ́, inú rere, tàbí ìpinnu nípa ayé ẹnìkan gbọ́dọ̀ wà lọ́wọ́ ènìyàn, tàbí kí AI kọ àkọ́pẹrẹ nìkan.",
            "Sàmì sí ìgbésẹ̀ kọ̀ọ̀kan: ẹ̀rọ ṣe é, AI kọ àkọ́pẹrẹ kí ènìyàn ṣàyẹ̀wò, tàbí ènìyàn ṣe é. Àwòrán tí o ti sàmì sí yẹn ni ètò rẹ."
          ],
          steps: ["Yan iṣẹ́ tí a ń ṣe ó kéré tán lẹ́ẹ̀kan lọ́sẹ̀.", "Kọ ìgbésẹ̀ kọ̀ọ̀kan ní ìtẹ̀léra, pẹ̀lú ẹni tó ń ṣe é, irinṣẹ́ àti àkókò.", "Sàmì sí ìgbésẹ̀ kọ̀ọ̀kan: ẹ̀rọ ṣe é, AI kọ àkọ́pẹrẹ kí ènìyàn ṣàyẹ̀wò, tàbí ènìyàn ṣe é.", "Ṣírò àkókò tí o máa fi pamọ́ lọ́sẹ̀."],
          words: [["Àwòrán ọ̀nà iṣẹ́ (workflow map)", "àkọsílẹ̀ tàbí àwòrán ìgbésẹ̀-sí-ìgbésẹ̀ bí a ṣe ń ṣe iṣẹ́ kan."], ["Ènìyàn nínú ìlà (human in the loop)", "ènìyàn kan ń ṣàyẹ̀wò tàbí fọwọ́ sí i kí iṣẹ́ aládàáṣe tó tẹ̀síwájú."]],
          slides: [
            { title: "Kọ́kọ́ ya àwòrán rẹ̀", bullets: ["Ìgbésẹ̀ kọ̀ọ̀kan ní ìtẹ̀léra", "Ta ló ń ṣe é, irinṣẹ́ wo, àkókò mélòó"] },
            { title: "Ó dára fún ẹ̀rọ", bullets: ["Dída nǹkan kọ àti fífi pamọ́", "Ìránnilétí àti ìjẹ́rìísí", "Ìgbésẹ̀ tí a ń tún ṣe, tí ó ní òfin"] },
            { title: "Sàmì sí gbogbo ìgbésẹ̀", bullets: ["Ẹ̀rọ ṣe é", "AI kọ àkọ́pẹrẹ kí ènìyàn ṣàyẹ̀wò", "Ènìyàn ṣe é"] }
          ],
          tryIt: "Ya àwòrán iṣẹ́ kan tí o máa ń tún ṣe, tí ó ní ó kéré tán ìgbésẹ̀ márùn-ún. Sàmì sí ìgbésẹ̀ kọ̀ọ̀kan: ẹ̀rọ ṣe é, AI kọ àkọ́pẹrẹ kí ènìyàn ṣàyẹ̀wò, tàbí ènìyàn ṣe é, kí o sì ṣírò àkókò tí o máa fi pamọ́ lọ́sẹ̀.",
          youCanNow: "ya àwòrán ọ̀nà iṣẹ́ kí o sì pinnu àwọn ìgbésẹ̀ tí ẹ̀rọ máa ṣe, èyí tí AI lè kọ àkọ́pẹrẹ rẹ̀ àti èyí tí ó máa wà lọ́wọ́ ènìyàn.",
          quickCheck: [
            { objective: "O2", q: "Ìgbésẹ̀ wo ló dára jù kí ẹ̀rọ ṣe pátápátá?", options: ["Pípinnu ẹni tí ó máa gba ẹ̀bùn ẹ̀kọ́ (scholarship)", "Títu olùyọ̀ǹda tí inú rẹ̀ bàjẹ́ nínú", "Yíyan òṣìṣẹ́ tuntun", "Fífi ìránnilétí sínú kàlẹ́ńdà lẹ́yìn ìforúkọsílẹ̀"], answer: 3, why: "Àwọn ìgbésẹ̀ tí a ń tún ṣe, tí ó ní òfin, bí ìránnilétí, dára fún ẹ̀rọ." },
            { objective: "O2", q: "Àwòrán rẹ ní \"fèsì sí ìdílé kan tí ó ń béèrè ìrànlọ́wọ́ fún owó ilé\". Báwo lo ṣe máa sàmì sí i?", options: ["Ẹ̀rọ ṣe é pátápátá", "AI kọ àkọ́pẹrẹ kí ènìyàn ṣàyẹ̀wò, tàbí ènìyàn ṣe é", "Pa ìgbésẹ̀ náà rẹ́", "Má fèsì rárá"], answer: 1, why: "Àwọn ìgbésẹ̀ tí ó nílò inú rere tàbí tí ó kan ayé ẹnìkan máa ń wà lọ́wọ́ ènìyàn, tàbí kí AI kọ àkọ́pẹrẹ nìkan." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe ètò iṣẹ́ aládàáṣe sórí ìwé",
          minutes: 5,
          goal: "Kọ ètò iṣẹ́ aládàáṣe pípé: trigger, àwọn ìgbésẹ̀, prompt AI, àyẹ̀wò àti òfin ìsọfúnni.",
          text: [
            "Ṣe ètò sórí ìwé kí o tó fọwọ́ kan irinṣẹ́ kankan. Kọ trigger, ìgbésẹ̀ kọ̀ọ̀kan ní ìtẹ̀léra, àti prompt AI gangan tí ìgbésẹ̀ AI bá wà, fún àpẹẹrẹ: \"Ka ìbéèrè yìí. Fi ọ̀rọ̀ kan ṣoṣo dáhùn: Iye owó, Ìbéèrè tàbí Àròyé. Lẹ́yìn náà kọ àkópọ̀ gbólóhùn méjì.\"",
            "Fi ibi àyẹ̀wò ènìyàn sí ibikíbi tí àṣìṣe ti lè ṣe ìpalára: ohunkóhun tí a ń fi ránṣẹ́ sí oníbàárà, owó tí a ń gbé kiri, tàbí ìpinnu nípa ènìyàn kan. Iṣẹ́ aládàáṣe náà lè kọ àkọ́pẹrẹ, kí ó sì dúró de ìfọwọ́sí.",
            "Kọ òfin ìsọfúnni: ìsọfúnni wo ló ń kọjá nínú iṣẹ́ aládàáṣe náà, ibo ni a ń fi pamọ́ sí, àti ohun tí kò gbọdọ̀ kọjá nínú ìgbésẹ̀ AI láé, bí nọ́mbà káàdì, nọ́mbà Social Security, ìsọfúnni ìlera tàbí ọ̀rọ̀ aṣínà. Ṣàyẹ̀wò ohun tí irinṣẹ́ kọ̀ọ̀kan tí o so pọ̀ ń ṣe pẹ̀lú ìsọfúnni rẹ."
          ],
          steps: ["Kọ trigger.", "Kọ ìgbésẹ̀ kọ̀ọ̀kan ní ìtẹ̀léra.", "Kọ prompt AI gangan fún ìgbésẹ̀ AI kọ̀ọ̀kan.", "Fi ìfọwọ́sí ènìyàn sí ibi tí àṣìṣe ti lè ṣe ìpalára.", "Kọ òfin ìsọfúnni: ohun tí ó ń kọjá, ibi tí a ń fi pamọ́ sí, ohun tí kò gbọdọ̀ kọjá nínú AI láé."],
          words: [["Prompt", "ìtọ́ni tí o ń fún ìgbésẹ̀ AI."], ["Ibi àyẹ̀wò (checkpoint)", "ibi tí ènìyàn ti ń ṣàyẹ̀wò kí iṣẹ́ aládàáṣe tó tẹ̀síwájú."]],
          slides: [
            { title: "Ṣe ètò kí o tó kọ́ ọ", bullets: ["Trigger àti àwọn ìgbésẹ̀ ní ìtẹ̀léra", "Prompt AI gangan"] },
            { title: "Ibi àyẹ̀wò ènìyàn", bullets: ["Ohunkóhun tí a ń fi ránṣẹ́ sí oníbàárà", "Owó tí a ń gbé kiri", "Ìpinnu nípa ènìyàn"] },
            { title: "Òfin ìsọfúnni", bullets: ["Ohun tí ó ń kọjá àti ibi tí a ń fi pamọ́ sí", "Kò sí káàdì, SSN, ìsọfúnni ìlera tàbí ọ̀rọ̀ aṣínà nínú AI láé"] }
          ],
          tryIt: "Kọ ètò ojú-ewé kan fún iṣẹ́ aládàáṣe rẹ: trigger, àwọn ìgbésẹ̀, prompt AI, ibi àyẹ̀wò ènìyàn àti òfin ìsọfúnni.",
          youCanNow: "ṣe ètò iṣẹ́ aládàáṣe pẹ̀lú ìgbésẹ̀ AI, ibi àyẹ̀wò ènìyàn àti òfin ìsọfúnni tí kò léwu.",
          quickCheck: [
            { objective: "O3", q: "Kí ni òfin ìsọfúnni inú ètò ń sọ?", options: ["Irú lẹ́tà (font) tí email ń lò", "Ohun tí ó ń kọjá, ibi tí a ń fi pamọ́ sí àti ohun tí kò gbọdọ̀ kọjá nínú AI láé", "Bí kọ̀mpútà ṣe yára tó", "Ẹni tí ó ṣe àmì-ìdámọ̀ (logo)"], answer: 1, why: "Òfin ìsọfúnni ń sọ ìsọfúnni tí ó ń kọjá, ibi tí a ń fi pamọ́ sí àti ohun tí kò gbọdọ̀ kọjá nínú AI láé." },
            { objective: "O3", q: "Iṣẹ́ aládàáṣe rẹ máa fi èsì ránṣẹ́ sí àwọn oníbàárà. Ibo ni o máa fi ibi àyẹ̀wò ènìyàn sí?", options: ["Kò sí ibì kankan; ó ń fi àkókò pamọ́", "Lẹ́ẹ̀kan lọ́dún nìkan", "Lẹ́yìn tí a ti fi èsì náà ránṣẹ́", "Kí a tó fi èsì náà ránṣẹ́, kí ènìyàn lè fọwọ́ sí àkọ́pẹrẹ náà"], answer: 3, why: "Ohunkóhun tí a ń fi ránṣẹ́ sí oníbàárà gbọdọ̀ dúró de ìfọwọ́sí ènìyàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣe ètò ọ̀nà iṣẹ́ ọlọ́gbọ́n",
        questions: [
          { objective: "O1", q: "Nínú \"Tí ẹnìkan bá fi fọ́ọ̀mù ránṣẹ́, fi ìlà kan kún spreadsheet\", kí ni trigger?", options: ["Fi ìlà kan kún un", "Spreadsheet náà", "Ẹnìkan fi fọ́ọ̀mù ránṣẹ́", "Email náà"], answer: 2, why: "Trigger ni ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ rẹ̀." },
          { objective: "O1", q: "Kí ni ìgbésẹ̀ AI ń fi kún iṣẹ́ aládàáṣe?", options: ["Agbára láti kàwé, ṣètò, ṣàkópọ̀ tàbí kọ àkọ́pẹrẹ", "Iná mànàmáná ọ̀fẹ́", "Sísan owó fún ẹnikẹ́ni láìfọwọ́ ẹni", "Kò sí nǹkan kan"], answer: 0, why: "Ìgbésẹ̀ AI ń ṣe iṣẹ́ èdè bí ṣíṣètò àti kíkọ àkọ́pẹrẹ." },
          { objective: "O2", q: "Ìgbésẹ̀ wo ló dára jù kí ẹ̀rọ ṣe pátápátá?", options: ["Pípinnu bóyá a máa fọwọ́ sí ìbéèrè ilé ẹnìkan", "Títu oníbàárà tí inú rẹ̀ bàjẹ́ nínú", "Lílé òṣìṣẹ́ kúrò lẹ́nu iṣẹ́", "Dída ìdáhùn fọ́ọ̀mù kọ sínú spreadsheet"], answer: 3, why: "Dída nǹkan kọ tí a ń tún ṣe, tí ó ní òfin, dára jù fún ẹ̀rọ." },
          { objective: "O3", q: "Kí ni \"ènìyàn nínú ìlà\" (human in the loop) túmọ̀ sí?", options: ["Ènìyàn kan há sínú ìlà", "Ènìyàn kan ń ṣàyẹ̀wò tàbí fọwọ́ sí i kí iṣẹ́ aládàáṣe tó tẹ̀síwájú", "Iṣẹ́ aládàáṣe ń ṣiṣẹ́ láìsí ènìyàn kankan", "Irú trigger kan"], answer: 1, why: "Ó ń jẹ́ kí ènìyàn máa darí rẹ̀ níbi tí àṣìṣe ti ṣe pàtàkì." },
          { objective: "O3", q: "Èwo ni kò gbọdọ̀ kọjá nínú ìgbésẹ̀ AI láé?", options: ["Àkópọ̀ ìbéèrè gbogbogbò", "Nọ́mbà káàdì oníbàárà", "Ọ̀rọ̀ náà \"Ìbéèrè\"", "Àkókò iṣẹ́ iléeṣẹ́"], answer: 1, why: "Ìsọfúnni ìsanwó jẹ́ àdáni, ó sì léwu." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkọ́, dídánwò àti lílò ó",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkọ́ iṣẹ́ aládàáṣe àkọ́kọ́ rẹ",
          minutes: 6,
          goal: "Kọ́ iṣẹ́ aládàáṣe tó rọrùn láti fọ́ọ̀mù sí spreadsheet sí email.",
          text: [
            "Bẹ̀rẹ̀ pẹ̀lú ẹ̀yà tó rọrùn jù tí ó ń ṣiṣẹ́. Google Forms lè fi gbogbo ìdáhùn pamọ́ sínú Google Sheet láìsí irinṣẹ́ míì, Microsoft Forms sì lè fi ìdáhùn ránṣẹ́ sí Excel. Ìyẹn nìkan ti jẹ́ iṣẹ́ aládàáṣe.",
            "Láti fi àwọn ìgbésẹ̀ kún un, lo irinṣẹ́ no-code bí Zapier, Power Automate tàbí Make. Ọ̀pọ̀ nínú wọn ní ètò ọ̀fẹ́ tàbí ìgbìyànjú (trial) tí ó ní òdiwọ̀n; ṣàyẹ̀wò ojú-ewé iye owó irinṣẹ́ kọ̀ọ̀kan, nítorí pé àwọn ètò ń yí padà. So àwọn àkáǹtì rẹ pọ̀, yan trigger (ìdáhùn fọ́ọ̀mù tuntun tàbí ìlà spreadsheet tuntun), lẹ́yìn náà fi àwọn ìgbésẹ̀ kún un (fi email ránṣẹ́, ṣẹ̀dá iṣẹ́ kan).",
            "Fi ìgbésẹ̀ AI kún un kẹ́yìn, nígbà tí ọ̀nà ìpìlẹ̀ bá ti ṣiṣẹ́. Ọ̀pọ̀ irinṣẹ́ ní ìgbésẹ̀ AI nínú wọn tàbí wọ́n ń so pọ̀ mọ́ iṣẹ́ AI kan. Lẹ prompt láti inú ètò rẹ sí i, kí o sì fi èsì rẹ̀ ránṣẹ́ sí ìgbésẹ̀ tó kàn, bí àkọ́pẹrẹ email tí ó ń dúró de ìfọwọ́sí ènìyàn."
          ],
          steps: ["Ṣe fọ́ọ̀mù pẹ̀lú àwọn àpótí ìbéèrè tí o nílò.", "So ó pọ̀ mọ́ spreadsheet.", "Nínú irinṣẹ́ no-code, yan trigger: ìdáhùn tuntun tàbí ìlà tuntun.", "Fi ìgbésẹ̀ kan kún un: fi email ránṣẹ́ tàbí ṣẹ̀dá iṣẹ́ kan.", "Fi ìgbésẹ̀ AI kún un pẹ̀lú prompt rẹ, kí èsì rẹ̀ lọ sí àkọ́pẹrẹ fún ìfọwọ́sí."],
          words: [["Irinṣẹ́ no-code", "ẹ̀rọ àìrí (software) tí ó jẹ́ kí o kọ́ nǹkan láìkọ kóòdù."], ["So pọ̀ (connect)", "fún app kan ní àṣẹ láti ṣiṣẹ́ pẹ̀lú app míì."], ["Àpótí ìbéèrè (field)", "ìbéèrè kan tàbí àpótí kan nínú fọ́ọ̀mù."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú èyí tó rọrùn", bullets: ["Google Forms ń fi pamọ́ sínú Sheets", "Microsoft Forms lè fi ránṣẹ́ sí Excel"] },
            { title: "Fi àwọn ìgbésẹ̀ kún un", bullets: ["Zapier, Power Automate tàbí Make", "Ètò ọ̀fẹ́ àti ìgbìyànjú ní òdiwọ̀n", "Ṣàyẹ̀wò ojú-ewé iye owó kọ̀ọ̀kan"] },
            { title: "Fi AI kún un kẹ́yìn", bullets: ["Nígbà tí ọ̀nà ìpìlẹ̀ bá ti ṣiṣẹ́", "Lẹ prompt rẹ sí i", "Èsì lọ sí àkọ́pẹrẹ fún ìfọwọ́sí"] }
          ],
          sources: [{ name: "Zapier", url: "https://zapier.com/" }, { name: "Microsoft Power Automate", url: "https://www.microsoft.com/power-platform/products/power-automate" }, { name: "Make", url: "https://www.make.com/" }],
          tryIt: "Kọ́ apá àkọ́kọ́ iṣẹ́ aládàáṣe rẹ: fọ́ọ̀mù tí a so pọ̀ mọ́ spreadsheet. Tí o bá lè ṣe é, fi ìgbésẹ̀ kan kún un nínú irinṣẹ́ no-code, bí email sí ara rẹ fún ìdáhùn tuntun kọ̀ọ̀kan.",
          youCanNow: "kọ́ iṣẹ́ aládàáṣe ìpìlẹ̀ láti fọ́ọ̀mù sí spreadsheet sí email nínú irinṣẹ́ no-code.",
          quickCheck: [
            { objective: "O4", q: "Ètò tó rọrùn wo ló ti jẹ́ iṣẹ́ aládàáṣe láìsí irinṣẹ́ míì?", options: ["Microsoft Forms tí ó ń fi ìdáhùn ránṣẹ́ sí Excel", "Títẹ ìdáhùn fọ́ọ̀mù sínú sheet pẹ̀lú ọwọ́", "Títẹ̀ ìdáhùn kọ̀ọ̀kan jáde sórí ìwé", "Kíka ìdáhùn lórí fóònù rẹ"], answer: 0, why: "Microsoft Forms lè fi ìdáhùn ránṣẹ́ sí Excel fúnra rẹ̀." },
            { objective: "O4", q: "Ọ̀nà ìpìlẹ̀ láti fọ́ọ̀mù sí email ti ń ṣiṣẹ́. Kí lo máa fi kún un tẹ̀lé e?", options: ["App márùn-ún míì lẹ́ẹ̀kan náà", "Nọ́mbà káàdì gidi ti oníbàárà", "Ìgbésẹ̀ AI pẹ̀lú prompt láti inú ètò rẹ", "Kò sí; pa ọ̀nà náà rẹ́"], answer: 2, why: "Fi ìgbésẹ̀ AI kún un kẹ́yìn, nígbà tí ọ̀nà ìpìlẹ̀ bá ti ṣiṣẹ́." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dídánwò pẹ̀lú ìsọfúnni àpẹẹrẹ",
          minutes: 5,
          goal: "Dán iṣẹ́ aládàáṣe wò pẹ̀lú àpẹẹrẹ lásán àti àwọn tó le, kí o sì tún ohun tó bàjẹ́ ṣe.",
          text: [
            "Má ṣe tan iṣẹ́ aládàáṣe fún àwọn ènìyàn gidi títí yóò fi yege àwọn ìdánwò. Lo àpẹẹrẹ àròsọ, kì í ṣe ìsọfúnni oníbàárà gidi.",
            "Dán àpẹẹrẹ márùn-ún wò: ìdáhùn lásán kan, àpótí ìbéèrè kan tí ó ṣófo, ọ̀rọ̀ tí ó gùn gan-an, ìdáhùn tí a kọ lọ́nà àìtọ́ tàbí tí ó ṣàjèjì, àti ọ̀kan tí ìgbésẹ̀ AI lè ṣètò lọ́nà àìtọ́. Ṣàyẹ̀wò ìgbésẹ̀ kọ̀ọ̀kan: ṣé ìlà náà yọ, ṣé email lọ sí ibi tó tọ́, ṣé AI ṣètò ó, ṣé ó sì ṣàkópọ̀ rẹ̀ dáadáa?",
            "Kọ àkọsílẹ̀ ìdánwò (test log): ohun tí ó wọlé, èsì tí a retí, èsì tí ó jáde, yege tàbí kùnà, àtúnṣe. Àwọn àtúnṣe tí ó wọ́pọ̀: jẹ́ kí àpótí ìbéèrè kan jẹ́ dandan, mú prompt AI le kí ó ṣe kedere (\"Fi ọ̀rọ̀ kan ṣoṣo gangan dáhùn\"), tàbí fi àlẹ̀mọ́ (filter) kún un kí àwọn ìdáhùn kan nìkan lè tẹ̀síwájú."
          ],
          steps: ["Kọ àpẹẹrẹ márùn-ún, títí kan àwọn tó le.", "Fi ọ̀kọ̀ọ̀kan ránṣẹ́ gba inú iṣẹ́ aládàáṣe náà.", "Ṣàyẹ̀wò èsì ìgbésẹ̀ kọ̀ọ̀kan.", "Kọ yege tàbí kùnà sínú àkọsílẹ̀ ìdánwò.", "Tún àwọn tí ó kùnà ṣe kí o sì tún wọn dán wò."],
          words: [["Àpẹẹrẹ ìdánwò (test case)", "ohun àpẹẹrẹ kan tí a fi ń ṣàyẹ̀wò pé nǹkan ń ṣiṣẹ́."], ["Àlẹ̀mọ́ (filter)", "òfin tí ó ń jẹ́ kí àwọn nǹkan kan nìkan tẹ̀síwájú nínú iṣẹ́ aládàáṣe."]],
          slides: [
            { title: "Dánwò kí o tó bẹ̀rẹ̀ iṣẹ́ gidi", bullets: ["Àpẹẹrẹ àròsọ nìkan", "Kò sí ìsọfúnni oníbàárà gidi fún ìdánwò láé"] },
            { title: "Àpẹẹrẹ ìdánwò márùn-ún", bullets: ["Lásán, àpótí tí ó ṣófo, tí ó gùn gan-an", "Tí a kọ lọ́nà àìtọ́ tàbí tí ó ṣàjèjì", "Ọ̀kan tí AI lè ṣètò lọ́nà àìtọ́"] },
            { title: "Kọ ọ́ sílẹ̀ kí o sì tún un ṣe", bullets: ["Àpótí dandan àti àlẹ̀mọ́", "Prompt AI tí ó ṣe kedere sí i", "Tún un dánwò lẹ́yìn àtúnṣe kọ̀ọ̀kan"] }
          ],
          tryIt: "Fi àpẹẹrẹ márùn-ún ránṣẹ́ gba inú iṣẹ́ aládàáṣe rẹ, títí kan ó kéré tán méjì tí ó le. Kọ àkọsílẹ̀ ìdánwò kí o sì tún ìṣòro kan ṣe.",
          youCanNow: "dán iṣẹ́ aládàáṣe wò pẹ̀lú ìsọfúnni àpẹẹrẹ, kọ èsì sílẹ̀ kí o sì tún ohun tí ó kùnà ṣe.",
          quickCheck: [
            { objective: "O5", q: "Kí ló wà nínú àkọsílẹ̀ ìdánwò iṣẹ́ aládàáṣe?", options: ["Ìsọfúnni gidi ti àwọn oníbàárà", "Àwọn ìdánwò tí ó yege nìkan", "Iye owó irinṣẹ́ náà", "Ohun tí ó wọlé, èsì tí a retí, èsì tí ó jáde, yege tàbí kùnà, àti àtúnṣe"], answer: 3, why: "Àkọsílẹ̀ ìdánwò ń kọ ohun tí ó wọlé, ohun tí ó yẹ kí ó ṣẹlẹ̀, ohun tí ó ṣẹlẹ̀, àti àtúnṣe." },
            { objective: "O5", q: "Àpẹẹrẹ ìdánwò kan tí àpótí email rẹ̀ ṣófo ba ọ̀nà náà jẹ́. Kí ni àtúnṣe tí ó wọ́pọ̀?", options: ["Jẹ́ kí àpótí email jẹ́ dandan nínú fọ́ọ̀mù", "Tan iṣẹ́ aládàáṣe náà bẹ́ẹ̀ náà", "Yọ ìgbésẹ̀ email kúrò", "Lo ìsọfúnni oníbàárà gidi láti dánwò"], answer: 0, why: "Tí àpótí náà bá jẹ́ dandan, ìdáhùn tí ó ṣófo kò ní ba ọ̀nà náà jẹ́ mọ́." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lílò, ṣíṣọ́ àti mímú un dára sí i",
          minutes: 5,
          goal: "Tan iṣẹ́ aládàáṣe láìléwu, máa ṣọ́ ọ, kí o sì mọ ohun tí o máa ṣe tí ó bá kùnà.",
          text: [
            "Kọ́kọ́ tàn án fún ẹgbẹ́ kékeré kan, bí fọ́ọ̀mù kan tàbí ọ̀sẹ̀ kan. Máa ṣàyẹ̀wò èsì rẹ̀ lójoojúmọ́ ní ìbẹ̀rẹ̀. Ọ̀pọ̀ irinṣẹ́ ní ìtàn ìṣiṣẹ́ (run history) tí ó ń fi ìgbà kọ̀ọ̀kan tí ó ṣiṣẹ́ hàn, àti bóyá ó yọrí sí rere.",
            "Iṣẹ́ aládàáṣe máa ń bàjẹ́: ọ̀rọ̀ aṣínà yí padà, a yí orúkọ àpótí ìbéèrè padà, ètò ọ̀fẹ́ dé òdiwọ̀n rẹ̀, tàbí ìgbésẹ̀ AI bẹ̀rẹ̀ sí ní ṣètò nǹkan lọ́nà àjèjì. Ṣètò ìkìlọ̀ àṣìṣe sí email rẹ, kí o sì yan ẹni tó ni ín, tí ó máa ń ṣàyẹ̀wò rẹ̀.",
            "Kọ ìwé ìtọ́sọ́nà ojú-ewé kan: ohun tí iṣẹ́ aládàáṣe náà ń ṣe, ibi tí ó wà, ẹni tó ni ín àti bí a ṣe ń pa á. Tí ẹni tó ni ín bá kúrò, ẹlòmíì lè máa lò ó nìṣó. Ṣàyẹ̀wò rẹ̀ ní gbogbo oṣù díẹ̀ kí o sì béèrè pé: ṣé ó ṣì ń fi àkókò pamọ́?"
          ],
          steps: ["Tàn án fún ẹgbẹ́ kékeré tàbí ọ̀sẹ̀ kan.", "Ṣàyẹ̀wò ìtàn ìṣiṣẹ́ lójoojúmọ́ ní ìbẹ̀rẹ̀.", "Ṣètò ìkìlọ̀ àṣìṣe kí o sì yan ẹni tó ni ín.", "Kọ ìwé ìtọ́sọ́nà ojú-ewé kan.", "Ṣàyẹ̀wò rẹ̀ ní gbogbo oṣù díẹ̀."],
          words: [["Ìtàn ìṣiṣẹ́ (run history)", "àkọsílẹ̀ ìgbà kọ̀ọ̀kan tí iṣẹ́ aládàáṣe ṣiṣẹ́ àti bóyá ó yọrí sí rere."], ["Ìkìlọ̀ àṣìṣe (error alert)", "ọ̀rọ̀ tí ó ń sọ fún ọ pé iṣẹ́ aládàáṣe kan kùnà."]],
          slides: [
            { title: "Bẹ̀rẹ̀ ní kékeré", bullets: ["Fọ́ọ̀mù kan tàbí ọ̀sẹ̀ kan", "Ṣàyẹ̀wò èsì lójoojúmọ́ ní ìbẹ̀rẹ̀"] },
            { title: "Ìdí tí iṣẹ́ aládàáṣe fi ń bàjẹ́", bullets: ["Ọ̀rọ̀ aṣínà tàbí orúkọ àpótí yí padà", "Ètò dé òdiwọ̀n rẹ̀", "Ìṣètò AI ń yẹ̀ díẹ̀díẹ̀"] },
            { title: "Jẹ́ kí ó wà ní àlàáfíà", bullets: ["Ìkìlọ̀ àṣìṣe àti ẹni tó ni ín", "Ìwé ìtọ́sọ́nà ojú-ewé kan", "Ṣàyẹ̀wò rẹ̀ ní gbogbo oṣù díẹ̀"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí iṣẹ́ aládàáṣe rẹ pẹ̀lú ìgbésẹ̀ AI àti ìfọwọ́sí ènìyàn, ṣe ìdánwò márùn-ún, lẹ́yìn náà kọ ìwé ìtọ́sọ́nà ojú-ewé kan pẹ̀lú àwòrán ọ̀nà iṣẹ́, trigger àti àwọn ìgbésẹ̀, èsì ìdánwò àti ẹni tó ni ín.",
          youCanNow: "ṣe ètò, kọ́, dánwò kí o sì lo iṣẹ́ aládàáṣe tí AI ń ràn lọ́wọ́, pẹ̀lú ènìyàn tí ó ń darí rẹ̀.",
          quickCheck: [
            { objective: "O6", q: "Kí ni ìkìlọ̀ àṣìṣe ń ṣe?", options: ["Ó ń mú iṣẹ́ aládàáṣe yára sí i", "Ó ń fi email ránṣẹ́ sí ẹni tó ni ín nígbà tí ìṣiṣẹ́ kan bá kùnà", "Ó ń pa àwọn ìṣiṣẹ́ àtijọ́ rẹ́", "Ó ń yí ọ̀rọ̀ aṣínà rẹ padà"], answer: 1, why: "Ìkìlọ̀ àṣìṣe ń sọ fún ẹni tó ni ín lẹ́sẹ̀kẹsẹ̀ nígbà tí nǹkan bá bàjẹ́." },
            { objective: "O6", q: "Ẹni tí ó kọ́ iṣẹ́ aládàáṣe rẹ ń lọ. Kí ló máa jẹ́ kí ó máa ṣiṣẹ́ nìṣó?", options: ["Ká máa retí pé kò sí nǹkan tí yóò bàjẹ́", "Pípa á títí láé", "Ìwé ìtọ́sọ́nà ojú-ewé kan àti ẹni tuntun tó ni ín, tí ó ń wo àwọn ìkìlọ̀", "Yíyí gbogbo ọ̀rọ̀ aṣínà padà láìsọ fún ẹnikẹ́ni"], answer: 2, why: "Ìwé ìtọ́sọ́nà àti ẹni tí a yàn láti ni ín ń jẹ́ kí ẹlòmíì lè máa lò ó tàbí pa á." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkọ́, dídánwò àti lílò ó",
        questions: [
          { objective: "O4", q: "Kí ni iṣẹ́ aládàáṣe tó rọrùn jù tí o lè kọ́ láìsí irinṣẹ́ míì?", options: ["Apá roboti", "App fóònù àdáni", "Server tí a ń sanwó fún", "Google Forms tí ó ń fi ìdáhùn pamọ́ sínú Google Sheet"], answer: 3, why: "Fọ́ọ̀mù lè fi ìdáhùn pamọ́ sínú spreadsheet fúnra rẹ̀." },
          { objective: "O4", q: "Ìgbà wo ni o yẹ kí o fi ìgbésẹ̀ AI kún un?", options: ["Lẹ́yìn tí ọ̀nà ìpìlẹ̀ bá ti ṣiṣẹ́", "Ṣáájú ohunkóhun míì", "Kò yẹ kí a fi kún un rárá", "Ní òpin ọ̀sẹ̀ nìkan"], answer: 0, why: "Kọ́kọ́ kọ́ èyí tó rọrùn, lẹ́yìn náà fi AI kún un." },
          { objective: "O5", q: "Ìsọfúnni wo ló yẹ kí o lò fún ìdánwò?", options: ["Nọ́mbà káàdì gidi ti àwọn oníbàárà", "Àkọsílẹ̀ gidi ti àwọn aláìsàn", "Àpẹẹrẹ àròsọ", "Ọ̀rọ̀ aṣínà"], answer: 2, why: "Dánwò pẹ̀lú ìsọfúnni àpẹẹrẹ láti dáàbò bo àwọn ènìyàn gidi." },
          { objective: "O5", q: "Ìgbésẹ̀ AI ń dá gbólóhùn gígùn padà nígbà tí o fẹ́ ọ̀rọ̀ kan ṣoṣo. Kí ni àtúnṣe?", options: ["Pa iṣẹ́ aládàáṣe náà rẹ́", "Fojú fò ó", "Fi fọ́ọ̀mù kejì kún un", "Mú prompt náà ṣe kedere sí i: \"Fi ọ̀rọ̀ kan ṣoṣo gangan dáhùn\""], answer: 3, why: "Prompt tí ó ṣe kedere sí i ń mú kí ohun tí AI ń dá padà ṣeé retí." },
          { objective: "O6", q: "Kí ló dé tí a fi ń kọ ìwé ìtọ́sọ́nà ojú-ewé kan?", options: ["Kí ó lè lọ́ra sí i", "Òfin ló ní kí a ṣe é", "Kí ẹlòmíì lè máa lo iṣẹ́ aládàáṣe náà tàbí pa á", "Láti pín ọ̀rọ̀ aṣínà"], answer: 2, why: "Ó ń jẹ́ kí iṣẹ́ aládàáṣe máa ṣiṣẹ́ nìṣó tí ẹni tó ni ín bá kúrò." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Iṣẹ́ Aládàáṣe pẹ̀lú AI àti Ọ̀nà Iṣẹ́ Ọlọ́gbọ́n",
    questions: [
      { objective: "O1", q: "Iṣẹ́ aládàáṣe túmọ̀ sí:", options: ["Gbígba òṣìṣẹ́ púpọ̀ sí i", "Ẹ̀rọ kọ̀mpútà tí ó ń ṣe àwọn ìgbésẹ̀ fún ọ láìsí pé ènìyàn ń ṣe é nígbà gbogbo", "Ṣíṣiṣẹ́ fún wákàtí púpọ̀ sí i", "Rírà roboti"], answer: 1, why: "Iṣẹ́ aládàáṣe ń ṣe àwọn ìgbésẹ̀ fúnra rẹ̀." },
      { objective: "O1", q: "Email tí ó dé, tí ó sì bẹ̀rẹ̀ iṣẹ́ aládàáṣe, ni:", options: ["Trigger", "Àlẹ̀mọ́ (filter)", "Àpótí ìbéèrè (field)", "Ìtàn ìṣiṣẹ́"], answer: 0, why: "Ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ rẹ̀ ni trigger." },
      { objective: "O1", q: "\"Fi email ìjẹ́rìísí ránṣẹ́\" nínú iṣẹ́ aládàáṣe jẹ́:", options: ["Trigger", "Prompt", "Ìgbésẹ̀ (action)", "Ẹni tó ni ín"], answer: 2, why: "Àwọn ìgbésẹ̀ ni ohun tí ó ń ṣẹlẹ̀ lẹ́yìn trigger." },
      { objective: "O1", q: "Zapier ń pe iṣẹ́ aládàáṣe ní:", options: ["Zap", "Flow", "Scenario", "Káàdì ìlànà oúnjẹ"], answer: 0, why: "Orúkọ tí Zapier ń lò ni Zap." },
      { objective: "O2", q: "Iṣẹ́ wo ló dára jù kí a fi sílẹ̀ fún ènìyàn?", options: ["Fífi ìwé owó (receipt) pamọ́", "Fífi ìránnilétí ránṣẹ́", "Dída ìsọfúnni fọ́ọ̀mù kọ", "Pípinnu bóyá ẹnìkan yẹ fún ìrànlọ́wọ́"], answer: 3, why: "Ìpinnu nípa ènìyàn nílò ìdájọ́ ènìyàn." },
      { objective: "O2", q: "Àwòrán ọ̀nà iṣẹ́ ń ṣe àkọsílẹ̀:", options: ["Èsì ìkẹyìn nìkan", "Ìgbésẹ̀ kọ̀ọ̀kan, ẹni tó ń ṣe é, irinṣẹ́ àti àkókò", "Owó oṣù àwọn òṣìṣẹ́", "Àdírẹ́sì ọ́fíìsì"], answer: 1, why: "Ó ń fi bí a ṣe ń ṣe iṣẹ́ náà lónìí hàn." },
      { objective: "O2", q: "\"AI kọ àkọ́pẹrẹ kí ènìyàn ṣàyẹ̀wò\" bá ìgbésẹ̀ wo mu?", options: ["Fífi ìlà kan kún sheet", "Kíkọ èsì sí oníbàárà", "Fífi fáìlì pamọ́", "Bíbẹ̀rẹ̀ iṣẹ́ aládàáṣe"], answer: 1, why: "Ó yẹ kí a ṣàyẹ̀wò ọ̀rọ̀ sí oníbàárà kí a tó fi ránṣẹ́." },
      { objective: "O3", q: "Prompt AI tí ó dára nínú iṣẹ́ aládàáṣe jẹ́:", options: ["Èyí tí kò ṣe kedere, bí \"ṣe nǹkan kan\"", "Òfo", "Ọ̀rọ̀ aṣínà", "Èyí tí ó ṣe kedere gangan, bí \"Fi ọ̀rọ̀ kan dáhùn: Iye owó, Ìbéèrè tàbí Àròyé\""], answer: 3, why: "Prompt tí ó ṣe kedere ń mú kí èsì ṣeé retí." },
      { objective: "O3", q: "Ibo ni o yẹ kí o fi ibi àyẹ̀wò ènìyàn sí?", options: ["Ibikíbi tí àṣìṣe ti lè ṣe ìpalára, bí ọ̀rọ̀ sí oníbàárà", "Kò sí ibì kankan", "Ní trigger nìkan", "Lẹ́yìn tí a ti pa iṣẹ́ aládàáṣe rẹ́ nìkan"], answer: 0, why: "Ibi àyẹ̀wò ń mú àṣìṣe tí ó lè náni ní owó púpọ̀." },
      { objective: "O3", q: "Òfin ìsọfúnni nínú ètò rẹ ń sọ:", options: ["Irú lẹ́tà (font) tí a máa lò", "Ẹni tí ó máa gba owó àjẹmọ́nú", "Ohun tí ó ń kọjá, ibi tí a ń fi pamọ́ sí àti ohun tí kò gbọdọ̀ kọjá nínú AI láé", "Kò sí nǹkan kan"], answer: 2, why: "Wọ́n ń dáàbò bo ìsọfúnni àdáni." },
      { objective: "O4", q: "Ìbéèrè kan tàbí àpótí kan nínú fọ́ọ̀mù ni a ń pè ní:", options: ["Trigger", "Zap", "Àlẹ̀mọ́ (filter)", "Àpótí ìbéèrè (field)"], answer: 3, why: "Àpótí kọ̀ọ̀kan jẹ́ field." },
      { objective: "O4", q: "Ètò ọ̀fẹ́ ti àwọn irinṣẹ́ no-code:", options: ["Kò ní òdiwọ̀n títí láé", "Máa ń náni ní $1,000 nígbà gbogbo", "Ní òdiwọ̀n; ṣàyẹ̀wò ojú-ewé iye owó", "Kò sí rárá"], answer: 2, why: "Àwọn ètò ń yí padà, nítorí náà ṣàyẹ̀wò ojú-ewé iye owó gidi." },
      { objective: "O4", q: "Sísọ àwọn app pọ̀ nínú irinṣẹ́ iṣẹ́ aládàáṣe túmọ̀ sí:", options: ["Fífi wáyà sí i", "Fífún app kan ní àṣẹ láti ṣiṣẹ́ pẹ̀lú app míì", "Pínpín ọ̀rọ̀ aṣínà rẹ ní gbangba", "Rírà kọ̀mpútà tuntun"], answer: 1, why: "Ìsopọ̀ jẹ́ àṣẹ láàárín àwọn app." },
      { objective: "O5", q: "Àpẹẹrẹ ìdánwò mélòó ni ẹ̀kọ́ yìí dábàá ó kéré tán?", options: ["Márùn-ún", "Ọ̀kan", "Òdo", "Ẹgbẹ̀ta (500)"], answer: 0, why: "Àpẹẹrẹ márùn-ún bo ohun tí ó wọ́pọ̀ àti èyí tí ó le." },
      { objective: "O5", q: "Èwo ni àpẹẹrẹ ìdánwò tí ó le?", options: ["Ìdáhùn lásán pátápátá nìkan", "Kò sí ìdáhùn rárá, a kò dán an wò láé", "Fọ́ọ̀mù tí àpótí kan nínú rẹ̀ ṣófo", "Ọ̀rọ̀ aṣínà rẹ"], answer: 2, why: "Àpótí tí ó ṣófo máa ń ba iṣẹ́ aládàáṣe jẹ́ nígbà púpọ̀." },
      { objective: "O5", q: "Àlẹ̀mọ́ (filter) nínú iṣẹ́ aládàáṣe:", options: ["Ń jẹ́ kí àwọn nǹkan kan nìkan tẹ̀síwájú", "Ń nu ojú-iboju", "Ń pa spreadsheet rẹ́", "Ń bẹ̀rẹ̀ iṣẹ́ aládàáṣe"], answer: 0, why: "Àlẹ̀mọ́ ń darí àwọn nǹkan tí ó máa tẹ̀síwájú." },
      { objective: "O6", q: "Nígbà tí o bá kọ́kọ́ bẹ̀rẹ̀ iṣẹ́ gidi, ó yẹ kí o:", options: ["Tàn án fún gbogbo ènìyàn kí o má sì ṣàyẹ̀wò rẹ̀ láé", "Pa àkọsílẹ̀ ìdánwò rẹ́", "Yọ ibi àyẹ̀wò ènìyàn kúrò", "Bẹ̀rẹ̀ ní kékeré kí o sì máa ṣàyẹ̀wò èsì lójoojúmọ́"], answer: 3, why: "Bíbẹ̀rẹ̀ ní kékeré ń dín ìpalára tí ìṣòro lè ṣe kù." },
      { objective: "O6", q: "Ìtàn ìṣiṣẹ́ (run history) ń fi hàn:", options: ["Ìtàn ojú-òpó wẹ́ẹ̀bù tí o ti ṣí", "Ìgbà kọ̀ọ̀kan tí iṣẹ́ aládàáṣe ṣiṣẹ́ àti bóyá ó yọrí sí rere", "Wákàtí iṣẹ́ àwọn òṣìṣẹ́", "Ọ̀rọ̀ aṣínà àwọn oníbàárà"], answer: 1, why: "Ó ń ràn ọ́ lọ́wọ́ láti rí ibi tí ó ti kùnà." },
      { objective: "O6", q: "Èwo ni ìdí tí ó wọ́pọ̀ tí iṣẹ́ aládàáṣe fi ń bàjẹ́?", options: ["Oòrùn wọ̀", "Ọ̀rọ̀ aṣínà tàbí orúkọ àpótí ìbéèrè yí padà", "Àwọn oníbàárà tí inú wọn dùn pọ̀ jù", "Àwọ̀ àmì-ìdámọ̀ (logo) yí padà"], answer: 1, why: "Ìyípadà nínú àwọn app tí a so pọ̀ ń ba iṣẹ́ aládàáṣe jẹ́." },
      { objective: "O6", q: "Gbogbo iṣẹ́ aládàáṣe gbọdọ̀ ní:", options: ["Kò sí ẹni tí ó ń bójú tó o", "Àṣẹ láti wọ gbogbo ìsọfúnni láìní òdiwọ̀n", "Ibi ìkọ̀kọ̀ kan", "Ẹni tó ni ín, tí ó ń wo àwọn ìkìlọ̀ àṣìṣe"], answer: 3, why: "Ẹni tó ni ín ń jẹ́ kí ó wà ní àlàáfíà." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      1,
      2,
      4,
      6,
      8,
      9,
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Àwòrán ọ̀nà iṣẹ́",
        objective: "O2",
        notYet: "Àwọn ìgbésẹ̀ kan kò sí, tàbí a kò sàmì sí ìgbésẹ̀ kankan.",
        meets: "Ìgbésẹ̀ kọ̀ọ̀kan pẹ̀lú ẹni tó ń ṣe é, irinṣẹ́ àti àkókò, tí a sàmì sí: ẹ̀rọ ṣe é, AI kọ àkọ́pẹrẹ kí ènìyàn ṣàyẹ̀wò, tàbí ènìyàn ṣe é.",
        exceeds: "Ó ní ìṣirò àkókò tí a máa fi pamọ́ lọ́sẹ̀."
      },
      {
        name: "Trigger, àwọn ìgbésẹ̀ àti ìgbésẹ̀ AI",
        objective: "O4",
        notYet: "Iṣẹ́ aládàáṣe náà kò bẹ̀rẹ̀ láti trigger rẹ̀, tàbí ìgbésẹ̀ AI kò sí.",
        meets: "Trigger tí ó ń ṣiṣẹ́, àwọn ìgbésẹ̀ ní ìtẹ̀léra, àti ìgbésẹ̀ AI tí ó ń ṣàkópọ̀ ìbéèrè náà tí ó sì ń ṣètò rẹ̀.",
        exceeds: "Ó lo àlẹ̀mọ́ (filter) tàbí prompt ọ̀rọ̀-kan tí ó ṣe kedere kí èsì lè dúró déédéé."
      },
      {
        name: "Àyẹ̀wò ènìyàn àti òfin ìsọfúnni",
        objective: "O3",
        notYet: "Èsì ń jáde láìsí ìfọwọ́sí, tàbí ìsọfúnni àdáni ń kọjá nínú ìgbésẹ̀ AI.",
        meets: "Ènìyàn kan ń fọwọ́ sí àkọ́pẹrẹ èsì, òfin ìsọfúnni sì sọ ohun tí kò gbọdọ̀ kọjá nínú AI láé.",
        exceeds: "Ó kọ ohun tí irinṣẹ́ kọ̀ọ̀kan tí a so pọ̀ ń ṣe pẹ̀lú ìsọfúnni náà sílẹ̀."
      },
      {
        name: "Ìdánwò márùn-ún",
        objective: "O5",
        notYet: "Ìdánwò kò tó márùn-ún, a lo ìsọfúnni gidi, tàbí a kò tún àwọn àṣìṣe ṣe.",
        meets: "Àpẹẹrẹ àròsọ márùn-ún, títí kan àwọn tó le, tí a kọ sílẹ̀ pẹ̀lú yege tàbí kùnà àti àtúnṣe.",
        exceeds: "A tún gbogbo àṣìṣe dánwò, gbogbo wọn sì yege."
      },
      {
        name: "Ẹni tó ni ín àti ìtọ́sọ́nà",
        objective: "O6",
        notYet: "Kò sí ẹni tí a yàn láti ni ín, kò sì sí ìtọ́sọ́nà.",
        meets: "Ẹni tí a yàn láti ni ín, ìkìlọ̀ àṣìṣe àti ìwé ìtọ́sọ́nà ojú-ewé kan.",
        exceeds: "Ìwé náà sọ bí a ṣe ń pa á àti ìgbà tí a máa ṣàyẹ̀wò rẹ̀."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Iṣẹ́ aládàáṣe tí ó ṣì ń ṣiṣẹ́, tí ó sì ní ẹni tó ni ín lẹ́yìn ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Wákàtí tí a fi pamọ́ lọ́sẹ̀ lórí iṣẹ́ tí ẹ̀rọ ń ṣe, gẹ́gẹ́ bí àjọ náà ṣe ròyìn",
      "Àwọn àjọ tí wọ́n ròyìn pé iṣẹ́ aládàáṣe náà kò fi ọ̀rọ̀ tí kò tọ́ ránṣẹ́, kò sì jẹ́ kí ìsọfúnni àdáni jò"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Google Forms àti Sheets, tàbí Microsoft Forms àti Excel",
      "Irinṣẹ́ iṣẹ́ aládàáṣe no-code bí Zapier, Power Automate tàbí Make (ṣàyẹ̀wò òdiwọ̀n ètò ọ̀fẹ́ lọ́wọ́lọ́wọ́)",
      "Ìwé tàbí fáìlì fún àwòrán ọ̀nà iṣẹ́, ètò àti àkọsílẹ̀ ìdánwò",
      "Nǹkan bí ìṣẹ́jú 60 fún ẹ̀kọ́ àti ìdánwò, pẹ̀lú àkókò láti kọ́ ọ àti láti dán an wò"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan; ẹ kọ́ ọ̀nà láti fọ́ọ̀mù sí sheet lójú ẹsẹ̀ lórí ojú-iboju tí gbogbo ènìyàn ń wò.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣe ètò sórí ìwé, kí wọ́n sì jẹ́ kí alábàáṣiṣẹ́ kan ṣàyẹ̀wò rẹ̀ kí wọ́n tó ṣí irinṣẹ́ kankan.",
      "Àpẹẹrẹ àròsọ nìkan ni kí ẹ lò fún ìdánwò; kò sí ìsọfúnni gidi ti oníbàárà, oníbàárà iṣẹ́ ìrànlọ́wọ́ tàbí olùtọrẹ láé.",
      "Ṣàyẹ̀wò pé gbogbo iṣẹ́ aládàáṣe tí ó ń fi ọ̀rọ̀ ránṣẹ́ sí ènìyàn ní ìgbésẹ̀ ìfọwọ́sí ènìyàn.",
      "Fi rubric ṣe àmì iṣẹ́ ìkẹyìn, kí o sì fún wọn ní èsì lórí ìlà \"Kò tíì dé\" kan ní àkókò kan."
    ]
  }
};
