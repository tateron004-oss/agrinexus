"use strict";

// Koach Learn course (Yoruba translation of shared/ai-project-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-project-management-yo",
  lang: "yo",
  translationOf: "ai-project-management",
  category: "Veterans (military)",
  name: "Ìṣàkóso Iṣẹ́ Àkànṣe pẹ̀lú AI",
  skills: "Kíkọ ìwé àṣẹ iṣẹ́ àkànṣe (charter) pẹ̀lú AI, Pínpín iṣẹ́ sí WBS, Ṣíṣe ètò àkókò pẹ̀lú àwọn milestone, Pínpín ojúṣe pẹ̀lú àtẹ RACI, Ṣíṣe àkọsílẹ̀ ewu, Kíkọ ìròyìn ipò iṣẹ́ àti ẹ̀kọ́ tí a kọ́",
  outcome: "lo olùrànlọ́wọ́ AI láti ṣètò àti darí iṣẹ́ àkànṣe kékeré láti ìbẹ̀rẹ̀ dé òpin: charter ojú-ìwé kan, ìpínsísọ̀rí iṣẹ́ (WBS), ètò àkókò pẹ̀lú àwọn milestone, àtẹ RACI, àkọsílẹ̀ ewu, ìròyìn ipò iṣẹ́ ọ̀sọ̀ọ̀sẹ̀ àti ìparí pẹ̀lú ẹ̀kọ́ tí a kọ́, kí o sì ṣàyẹ̀wò gbogbo àkọ́pẹrẹ AI fúnra rẹ.",
  about: [
    "Àwọn alákòóso iṣẹ́ àkànṣe ń ṣètò iṣẹ́, wọ́n ń kó àwọn ènìyàn jọ, wọ́n sì ń sọ fún gbogbo ènìyàn bí nǹkan ṣe ń lọ títí iṣẹ́ yóò fi parí. Àwọn olùrànlọ́wọ́ AI bí ChatGPT, Microsoft Copilot àti Google Gemini lè kọ àkọ́pẹrẹ àwọn ìwé náà láàárín ìṣẹ́jú díẹ̀, kí o lè lo àkókò rẹ fún ìpinnu àti fún àwọn ènìyàn.",
    "Ẹ̀kọ́ yìí wà fún àwọn ọmọ ogun tẹ́lẹ̀ tí wọ́n ń lọ sí iṣẹ́ àkànṣe ní ìgbésí ayé aráàlú (ọ̀pọ̀ ti darí iṣẹ́ ológun, ètò ìpèsè ẹrù àti ẹgbẹ́ rí), àwọn tí wọ́n wà nínú ètò ìdánilẹ́kọ̀ọ́ iṣẹ́ tí wọ́n ń wá iṣẹ́ olùṣètò (coordinator) tàbí olùrànlọ́wọ́ iṣẹ́ àkànṣe, àti ẹnikẹ́ni tí ó ń darí iṣẹ́ àkànṣe níbi iṣẹ́ tàbí ní àdúgbò.",
    "O máa ṣètò iṣẹ́ àkànṣe gidi kan tàbí ti àṣeṣe láti charter dé ìparí. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣètò iṣẹ́ àkànṣe gidi kan tàbí ti àṣeṣe tí ó máa gba ọ̀sẹ̀ mẹ́rin sí méjìlá (fún àpẹẹrẹ ìpàtẹ iṣẹ́ àdúgbò, kíkó ọ́fíìsì lọ sí ibòmíì, tàbí ṣíṣí ojú-òpó wẹ́ẹ̀bù) pẹ̀lú ìrànlọ́wọ́ AI: charter ojú-ìwé kan, ìpínsísọ̀rí iṣẹ́ (WBS), ètò àkókò pẹ̀lú ó kéré tán milestone mẹ́rin, àtẹ RACI, àkọsílẹ̀ ewu pẹ̀lú ewu márùn-ún, ìròyìn ipò iṣẹ́ ọ̀sẹ̀ kan àti àpẹẹrẹ fọ́ọ̀mù ẹ̀kọ́ tí a kọ́. Sàmì sí gbogbo ibi tí o ti tún ohun tí AI kọ ṣe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọmọ ogun tẹ́lẹ̀ tí wọ́n ń lọ sí iṣẹ́ àkànṣe ní ìgbésí ayé aráàlú, àwọn tí wọ́n wà nínú ètò ìdánilẹ́kọ̀ọ́ iṣẹ́ tí wọ́n ń wá iṣẹ́ olùṣètò tàbí olùrànlọ́wọ́ iṣẹ́ àkànṣe, àti ẹnikẹ́ni tí ó ń darí iṣẹ́ àkànṣe níbi iṣẹ́ tàbí ní àdúgbò.",
    startingPoint: "Ọ̀pọ̀ ti darí iṣẹ́ ológun, ètò ìpèsè ẹrù tàbí ẹgbẹ́, wọ́n sì mọ bí a ṣe ń ṣètò ènìyàn àti iṣẹ́. Ọ̀pọ̀ jù lọ kò tíì lo àwọn ìwé iṣẹ́ àkànṣe ti aráàlú bí charter, àtẹ RACI tàbí àkọsílẹ̀ ewu, wọn kò sì tíì lo AI láti kọ àkọ́pẹrẹ wọn.",
    gap: "Àwọn agbanisíṣẹ́ aráàlú ń retí pé kí òṣìṣẹ́ iṣẹ́ àkànṣe lè ṣe àwọn ìwé ìṣètò tí a mọ̀ àti ìròyìn ipò iṣẹ́ tó yé. Àwọn akẹ́kọ̀ọ́ nílò láti ṣètò iṣẹ́ àkànṣe láti charter dé ìparí pẹ̀lú àkọ́pẹrẹ AI tí wọ́n ṣàyẹ̀wò fúnra wọn, kí wọ́n lè fi ọgbọ́n iṣẹ́ àkànṣe hàn níbi ìfọ̀rọ̀wánilẹ́nuwò àti lẹ́nu iṣẹ́.",
    constraints: [
      "Àkókò: ẹ̀kọ́ tí ó gba nǹkan bí ìṣẹ́jú márùn-ún pẹ̀lú iṣẹ́ àṣeṣe kúkúrú",
      "Ẹ̀rọ: kọ̀mpútà tàbí fóònù tí ó ní olùrànlọ́wọ́ AI ọ̀fẹ́ àti spreadsheet",
      "Kò sí ìsọfúnni àṣírí ti agbanisíṣẹ́ tàbí ti ológun nínú prompt AI",
      "A gbọ́dọ̀ ṣàyẹ̀wò ìfojúbù àti àwọn nọ́mbà AI; òfin àti owó ìwé-ẹ̀rí wá láti pmi.org",
      "Ọ̀rọ̀ aráàlú tó rọrùn; a máa ń ṣàlàyé ọ̀rọ̀ ológun, a kì í rò pé gbogbo ènìyàn mọ̀ ọ́n"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣẹ̀ṣẹ̀ ń lo irinṣẹ́ AI lè kọ́kọ́ ṣe \"Ìfihàn sí AI àti Ìgboyà lórí Ẹ̀rọ Ayélujára\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn òtítọ́ pàtàkì nípa iṣẹ́ àkànṣe gidi kan tàbí ti àṣeṣe", action: "kọ charter ojú-ìwé kan tí ó sọ àfojúsùn, ààlà iṣẹ́, onígbọ̀wọ́, owó, ọjọ́ ìparí àti bí a ó ṣe mọ̀ pé ó yọrí sí rere", standard: "pẹ̀lú gbogbo àṣìṣe AI tí a tún ṣe àti àkọsílẹ̀ pé onígbọ̀wọ́ ti fọwọ́ sí i" },
    { id: "O2", condition: "Láti inú charter rẹ", action: "ṣe ìpínsísọ̀rí iṣẹ́ (WBS) àti ètò àkókò pẹ̀lú gígùn iṣẹ́, ìgbẹ́kẹ̀lé àti àwọn milestone", standard: "pẹ̀lú ó kéré tán milestone mẹ́rin àti ìfojúbù àkókò AI tí a ti ṣàyẹ̀wò" },
    { id: "O3", condition: "Tí a bá fún ọ ní àwọn iṣẹ́ pàtàkì iṣẹ́ àkànṣe náà", action: "ṣe àtẹ RACI tí ó fi ẹni tí ó jẹ́ Responsible, Accountable, Consulted àti Informed hàn", standard: "pẹ̀lú ẹnì kan ṣoṣo tí ó jẹ́ Accountable fún iṣẹ́ kọ̀ọ̀kan àti iṣẹ́ tí a pín dọ́gba" },
    { id: "O4", condition: "Tí AI bá ti dábàá àwọn ewu iṣẹ́ àkànṣe", action: "díwọ̀n ewu márùn-ún tí ó jẹ́ gidi jù, kí o sì yan ìdáhùn àti ẹni tí ó máa ṣọ́ ewu kọ̀ọ̀kan", standard: "ní lílo yàgò fún, dín kù, gbé lé ẹlòmíì tàbí gbà á lọ́nà tó tọ́" },
    { id: "O5", condition: "Fún ọ̀sẹ̀ kan nínú iṣẹ́ àkànṣe náà", action: "kọ ìròyìn ipò iṣẹ́ ìdajì ojú-ìwé pẹ̀lú àwọ̀ ipò pupa, ìyeyè tàbí àwọ̀ ewé tí ó jẹ́ òtítọ́, àti àwọn ìpinnu tí a nílò", standard: "pẹ̀lú gbogbo ọjọ́ àti nọ́mbà tí a ti ṣàyẹ̀wò" },
    { id: "O6", condition: "Ní ìparí iṣẹ́ àkànṣe kan", action: "ṣe àyẹ̀wò ẹ̀kọ́ tí a kọ́ láìdá ẹnikẹ́ni lẹ́bi, kí o sì pa iṣẹ́ àkànṣe náà dé ní ìfiwéra pẹ̀lú charter", standard: "ní dídáhùn gbogbo ìbéèrè àyẹ̀wò mẹ́rẹ̀ẹ̀rin àti fífi àwọn fáìlì pamọ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣètò iṣẹ́ àkànṣe",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kíkọ charter iṣẹ́ àkànṣe pẹ̀lú AI",
          minutes: 5,
          goal: "Kọ charter ojú-ìwé kan tí ó sọ àfojúsùn, ààlà iṣẹ́ àti àṣeyọrí iṣẹ́ àkànṣe náà.",
          text: [
            "Charter iṣẹ́ àkànṣe dàbí ìwé-ẹ̀rí ìbí iṣẹ́ àkànṣe náà. Ó sọ ìdí tí iṣẹ́ àkànṣe náà fi wà, ohun tí ó máa ṣe jáde, ohun tí ó wà nínú ààlà iṣẹ́ àti èyí tí kò sí, ẹni tí ó jẹ́ onígbọ̀wọ́, ìfojúbù owó àti ọjọ́ ìparí, àti bí o ṣe máa mọ̀ pé ó yọrí sí rere. Ó dàbí àṣẹ iṣẹ́ ológun (mission order): ìdí, ibi tí a fẹ́ dé, àti àwọn ààlà.",
            "Fún AI ní àwọn òtítọ́, kí o sì jẹ́ kí ó kọ àkọ́pẹrẹ: \"Kọ charter iṣẹ́ àkànṣe ojú-ìwé kan. Iṣẹ́ àkànṣe: ìpàtẹ iṣẹ́ fún àwọn ọmọ ogun tẹ́lẹ̀ ní gbọ̀ngàn àdúgbò ní March 15. Àfojúsùn: agbanisíṣẹ́ 30, olùkópa 200. Owó: $3,000. Onígbọ̀wọ́: olùdarí gbọ̀ngàn náà. Kò sí nínú ààlà iṣẹ́: oúnjẹ yàtọ̀ sí kọfí.\"",
            "Lẹ́yìn náà, tún un ṣe. AI lè hùmọ̀ nọ́mbà, àwọn tí ọ̀rọ̀ kàn tàbí àfojúsùn. Gbogbo òtítọ́ gbọ́dọ̀ jẹ́ tìrẹ. Jẹ́ kí onígbọ̀wọ́ fọwọ́ sí charter náà kí iṣẹ́ tó bẹ̀rẹ̀; èyí máa dènà àríyànjiyàn lẹ́yìn náà nípa ohun tí iṣẹ́ àkànṣe náà yẹ kí ó ṣe."
          ],
          steps: ["Kọ ìdí, àfojúsùn, ọjọ́ ìparí, owó àti onígbọ̀wọ́.", "Kọ ohun tí ó wà nínú ààlà iṣẹ́ àti èyí tí kò sí.", "Ní kí AI kọ àkọ́pẹrẹ charter ojú-ìwé kan.", "Tún ohunkóhun tí AI hùmọ̀ ṣe.", "Gba ìfọwọ́sí onígbọ̀wọ́."],
          words: [["Charter iṣẹ́ àkànṣe (project charter)", "ìwé kúkúrú tí ó fún iṣẹ́ àkànṣe ní àṣẹ, tí ó sì sọ àfojúsùn, ààlà iṣẹ́ àti òdiwọ̀n rẹ̀."], ["Ààlà iṣẹ́ (scope)", "iṣẹ́ tí iṣẹ́ àkànṣe náà máa ṣe àti èyí tí kò ní ṣe."], ["Onígbọ̀wọ́ (sponsor)", "ẹni tí ó ń ṣe àtìlẹ́yìn fún iṣẹ́ àkànṣe náà, tí ó sì ń fọwọ́ sí i."], ["Ẹni tí ọ̀rọ̀ kàn (stakeholder)", "ẹnikẹ́ni tí iṣẹ́ àkànṣe náà kàn, tàbí tí ó wà nínú rẹ̀."]],
          slides: [
            { title: "Charter ni àṣẹ iṣẹ́ (mission order)", bullets: ["Ìdí àti àfojúsùn", "Ààlà iṣẹ́: ohun tí ó wà nínú àti èyí tí kò sí", "Onígbọ̀wọ́, owó, ọjọ́ ìparí, àṣeyọrí"] },
            { title: "AI ń kọ àkọ́pẹrẹ láti inú òtítọ́ rẹ", bullets: ["Fún un ní àwọn nọ́mbà gidi", "Béèrè fún ojú-ìwé kan"] },
            { title: "Tún un ṣe, kí o sì gba ìfọwọ́sí", bullets: ["Yọ àwọn òtítọ́ tí AI hùmọ̀ kúrò", "Onígbọ̀wọ́ fọwọ́ sí i kí iṣẹ́ tó bẹ̀rẹ̀"] }
          ],
          tryIt: "Yan iṣẹ́ àkànṣe gidi kan tàbí ti àṣeṣe. Kọ àwọn òtítọ́ pàtàkì rẹ̀, jẹ́ kí AI kọ àkọ́pẹrẹ charter ojú-ìwé kan, kí o sì sàmì sí gbogbo ohun tí o tún ṣe.",
          youCanNow: "kọ charter iṣẹ́ àkànṣe ojú-ìwé kan pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ààlà iṣẹ́ (scope) túmọ̀ sí nínú charter iṣẹ́ àkànṣe?", options: ["Iye owó tí iṣẹ́ àkànṣe náà máa ná", "Ohun tí iṣẹ́ àkànṣe náà máa ṣe àti èyí tí kò ní ṣe", "Àwọn tí wọ́n wà nínú ẹgbẹ́", "Ọjọ́ tí iṣẹ́ àkànṣe náà máa parí"], answer: 1, why: "Ààlà iṣẹ́ ń sọ ẹ̀gbẹ́ iṣẹ́ àkànṣe náà: ohun tí ó wà nínú àti èyí tí kò sí." },
            { objective: "O1", q: "Àkọ́pẹrẹ charter AI ní owó kan tí o kò fún un rí. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ nítorí ó dún bí ẹni pé ó tọ̀nà", "Pa ìlà owó rẹ́ kúrò nínú gbogbo ìwé", "Fi owó gidi láti ọ̀dọ̀ onígbọ̀wọ́ rọ́pò rẹ̀, kí o sì sàmì sí àtúnṣe náà", "Ní kí ẹgbẹ́ dìbò lórí owó"], answer: 2, why: "AI máa ń fi àmọ̀ràn kún àlàfo; owó gidi wá láti ọ̀dọ̀ onígbọ̀wọ́." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pínpín iṣẹ́ sí wẹ́wẹ́ àti ṣíṣe ètò àkókò rẹ̀",
          minutes: 6,
          goal: "Sọ charter di ìpínsísọ̀rí iṣẹ́ (WBS) àti ètò àkókò pẹ̀lú àwọn milestone.",
          text: [
            "Ìpínsísọ̀rí iṣẹ́ (work breakdown structure, WBS) ń pín gbogbo iṣẹ́ àkànṣe sí apá kékeré títí apá kọ̀ọ̀kan yóò fi jẹ́ iṣẹ́ tí ẹnì kan lè ṣe láàárín ọjọ́ díẹ̀. Fún ìpàtẹ iṣẹ́: ibi ìpàdé, agbanisíṣẹ́, ìpolówó, àwọn olùyọ̀ǹda, ètò ọjọ́ náà, àti ìtẹ̀lé lẹ́yìn rẹ̀; a pín ọ̀kọ̀ọ̀kan sí iṣẹ́ kékeré.",
            "Béèrè lọ́wọ́ AI: \"Láti inú charter yìí, ṣe WBS pẹ̀lú àwọn ìpele àti iṣẹ́. Lẹ́yìn náà, fojú bù bí iṣẹ́ kọ̀ọ̀kan ṣe máa pẹ́ tó, kí o sì kọ àwọn iṣẹ́ tí ó gbára lé àwọn míì.\" Ìgbẹ́kẹ̀lé ṣe pàtàkì: o kò lè tẹ ìwé ìpolówó (flyer) títí a ó fi fìdí ibi ìpàdé àti ọjọ́ múlẹ̀.",
            "Sọ ọ́ di ètò àkókò nínú spreadsheet tàbí irinṣẹ́ ọ̀fẹ́, kí o máa ṣiṣẹ́ padà sẹ́yìn láti ọjọ́ ìparí. Sàmì sí àwọn milestone, ìyẹn àwọn ibi àyẹ̀wò ńlá bí \"a ti gba ibi ìpàdé\" tàbí \"agbanisíṣẹ́ 20 ti fìdí múlẹ̀\". Fi ìrírí rẹ ṣàyẹ̀wò ìfojúbù àkókò AI; ó máa ń rò pé nǹkan máa yá ju bí ó ṣe máa rí lọ."
          ],
          steps: ["Béèrè WBS pẹ̀lú àwọn ìpele àti iṣẹ́ lọ́wọ́ AI.", "Pín iṣẹ́ èyíkéyìí tí ó ju ọjọ́ díẹ̀ lọ.", "Fi gígùn iṣẹ́ àti ìgbẹ́kẹ̀lé kún un.", "Ṣe ètò àkókò padà sẹ́yìn láti ọjọ́ ìparí.", "Sàmì sí ó kéré tán milestone mẹ́rin."],
          words: [["WBS", "work breakdown structure (ìpínsísọ̀rí iṣẹ́): gbogbo iṣẹ́ àkànṣe tí a pín sí iṣẹ́ kékeré."], ["Ìgbẹ́kẹ̀lé (dependency)", "iṣẹ́ tí kò lè bẹ̀rẹ̀ títí iṣẹ́ míì yóò fi parí."], ["Milestone", "ibi àyẹ̀wò pàtàkì kan nínú iṣẹ́ àkànṣe."]],
          slides: [
            { title: "Ìpínsísọ̀rí iṣẹ́ (WBS)", bullets: ["Gbogbo iṣẹ́ àkànṣe, sí ìpele, sí iṣẹ́", "Iṣẹ́ kọ̀ọ̀kan: ẹnì kan, ọjọ́ díẹ̀"] },
            { title: "Gígùn iṣẹ́ àti ìgbẹ́kẹ̀lé", bullets: ["Bí iṣẹ́ kọ̀ọ̀kan ṣe máa pẹ́ tó", "Ohun tí ó gbọ́dọ̀ kọ́kọ́ parí"] },
            { title: "Ètò àkókò àti milestone", bullets: ["Ṣiṣẹ́ padà sẹ́yìn láti ọjọ́ ìparí", "Sàmì sí àwọn ibi àyẹ̀wò pàtàkì", "Ìfojúbù AI máa ń kéré jù"] }
          ],
          tryIt: "Lo AI láti ṣe WBS fún iṣẹ́ àkànṣe rẹ, lẹ́yìn náà ṣe ètò àkókò tó rọrùn nínú spreadsheet pẹ̀lú gígùn iṣẹ́, ìgbẹ́kẹ̀lé àti ó kéré tán milestone mẹ́rin.",
          youCanNow: "pín iṣẹ́ àkànṣe sí iṣẹ́ kékeré, kí o sì ṣe ètò àkókò wọn pẹ̀lú àwọn milestone.",
          quickCheck: [
            { objective: "O2", q: "Kí ni milestone?", options: ["Ibi pàtàkì tí ó fi hàn pé apá ńlá kan ti parí", "Iṣẹ́ tí ó gùn jù nínú ètò àkókò", "Ìpàdé pẹ̀lú onígbọ̀wọ́", "Ewu tí ó ti ṣẹlẹ̀"], answer: 0, why: "Milestone ń sàmì sí èsì pàtàkì kan, bí \"a ti gba ibi ìpàdé\"." },
            { objective: "O2", q: "WBS rẹ ní iṣẹ́ kan tí a pè ní \"Ṣètò ayẹyẹ náà\" tí ó máa gba ọ̀sẹ̀ mẹ́fà. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ bí iṣẹ́ kan", "Yọ ọ́ kúrò nínú ètò", "Fún onígbọ̀wọ́ ní i", "Pín in sí iṣẹ́ kékeré tí ẹnì kan lè ṣe láàárín ọjọ́ díẹ̀"], answer: 3, why: "Iṣẹ́ WBS gbọ́dọ̀ kéré tó fún ẹnì kan láti ṣe láàárín ọjọ́ díẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pínpín ojúṣe pẹ̀lú àtẹ RACI",
          minutes: 5,
          goal: "Ṣe àtẹ RACI kí gbogbo ènìyàn lè mọ ẹni tí ó ń ṣe iṣẹ́, ẹni tí ó ń pinnu, àti ẹni tí a ń sọ fún.",
          text: [
            "Ìdàrúdàpọ̀ nípa ẹni tí ó ń ṣe kí ni máa ń ba iṣẹ́ àkànṣe jẹ́. Àtẹ RACI ń kọ àwọn iṣẹ́ sí ẹ̀gbẹ́, àwọn ènìyàn sí òkè, ó sì ń sàmì sí àpótí kọ̀ọ̀kan: R fún Responsible (ẹni tí ó ń ṣe iṣẹ́ náà), A fún Accountable (ẹni tí èsì jẹ́ tirẹ̀, tí ó sì ń fọwọ́ sí i; ẹnì kan ṣoṣo fún iṣẹ́ kọ̀ọ̀kan), C fún Consulted (ẹni tí a ń béèrè èrò rẹ̀) àti I fún Informed (ẹni tí a ń sọ fún bí nǹkan ṣe ń lọ).",
            "Béèrè lọ́wọ́ AI: \"Ṣe àtẹ RACI fún àwọn iṣẹ́ àti ojúṣe wọ̀nyí: [àwọn iṣẹ́], [àwọn ènìyàn tàbí ojúṣe].\" Lẹ́yìn náà, ṣàyẹ̀wò: ṣé iṣẹ́ kọ̀ọ̀kan ní A kan ṣoṣo? Ṣé ẹnì kan ní R tí ó pọ̀ jù? Ṣé ẹnì kan wà tí a ń béèrè èrò rẹ̀ (Consulted) lórí gbogbo nǹkan, tí ó sì ń dá iṣẹ́ dúró?",
            "Pín àtẹ RACI náà pẹ̀lú ẹgbẹ́ àti onígbọ̀wọ́. Nígbà tí ìbéèrè bá dìde, bí ẹni tí ó máa fọwọ́ sí flyer, tọ́ka sí àtẹ náà."
          ],
          steps: ["Kọ àwọn iṣẹ́ pàtàkì àti àwọn ènìyàn tàbí ojúṣe.", "Ní kí AI kọ àkọ́pẹrẹ àtẹ RACI.", "Ṣàyẹ̀wò pé iṣẹ́ kọ̀ọ̀kan ní A kan ṣoṣo.", "Pín R dọ́gba kí iṣẹ́ má pọ̀ jù lórí ẹnì kan.", "Pín in pẹ̀lú ẹgbẹ́ àti onígbọ̀wọ́."],
          words: [["Àtẹ RACI (RACI chart)", "tábìlì tí ó ń fi ẹni tí ó jẹ́ Responsible, Accountable, Consulted àti Informed hàn fún iṣẹ́ kọ̀ọ̀kan."], ["Accountable", "ẹnì kan ṣoṣo tí èsì jẹ́ tirẹ̀, tí ó sì ń fọwọ́ sí i."]],
          slides: [
            { title: "RACI", bullets: ["R: Responsible, ó ń ṣe iṣẹ́ náà", "A: Accountable, èsì jẹ́ tirẹ̀; ẹnì kan ṣoṣo", "C: Consulted (a béèrè èrò rẹ̀); I: Informed (a sọ fún un)"] },
            { title: "Ṣàyẹ̀wò àtẹ náà", bullets: ["A kan ṣoṣo fún iṣẹ́ kọ̀ọ̀kan", "Kò sí ẹni tí R pọ̀ jù fún", "A kò béèrè èrò gbogbo ènìyàn lórí gbogbo nǹkan"] },
            { title: "Lò ó", bullets: ["Pín in pẹ̀lú ẹgbẹ́ àti onígbọ̀wọ́", "Tọ́ka sí i nígbà tí ìbéèrè bá dìde"] }
          ],
          tryIt: "Jẹ́ kí AI kọ àkọ́pẹrẹ àtẹ RACI fún àwọn iṣẹ́ pàtàkì iṣẹ́ àkànṣe rẹ. Tún un ṣe kí iṣẹ́ kọ̀ọ̀kan ní A kan ṣoṣo, kí iṣẹ́ sì pín dọ́gba.",
          youCanNow: "ṣe àtẹ RACI tí ó mú ojúṣe ṣe kedere, kí o sì ṣàyẹ̀wò rẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Nínú àtẹ RACI, kí ni \"C\" túmọ̀ sí?", options: ["Completed (ó ti parí)", "Consulted: a béèrè èrò rẹ̀ kí a tó pinnu", "Controlled: ó ń ṣe gbogbo iṣẹ́", "Cancelled (a ti fagi lé e)"], answer: 1, why: "Àwọn tí a ń béèrè èrò wọn (Consulted) ń fúnni ní èrò kí iṣẹ́ tàbí ìpinnu tó wáyé." },
            { objective: "O3", q: "A sàmì sí ènìyàn méjì gẹ́gẹ́ bí Accountable fún iṣẹ́ kan náà. Kí ni o máa ṣe?", options: ["Yan ẹnì kan láti jẹ́ Accountable", "Fi àwọn méjèèjì sílẹ̀ kí iṣẹ́ lè parí", "Sàmì sí àwọn méjèèjì gẹ́gẹ́ bí Informed", "Yọ iṣẹ́ náà kúrò"], answer: 0, why: "Iṣẹ́ kọ̀ọ̀kan nílò ẹnì kan ṣoṣo tí ó jẹ́ Accountable, tí èsì jẹ́ tirẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣètò iṣẹ́ àkànṣe",
        questions: [
          { objective: "O1", q: "Kí ni charter iṣẹ́ àkànṣe ń sọ?", options: ["Oúnjẹ ọ̀sán ẹgbẹ́ nìkan", "Ìwé owó orí ilé-iṣẹ́", "Ìdí, ààlà iṣẹ́, onígbọ̀wọ́, owó, ọjọ́ ìparí àti àṣeyọrí iṣẹ́ àkànṣe náà", "Gbogbo iṣẹ́ ní kíkún"], answer: 2, why: "Charter ni ìpìlẹ̀ iṣẹ́ àkànṣe." },
          { objective: "O1", q: "AI fi àfojúsùn \"agbanisíṣẹ́ 100\" kún charter rẹ, ṣùgbọ́n 30 ni o sọ. Kí ni o máa ṣe?", options: ["Tún un ṣe sí àfojúsùn gidi rẹ", "Fi í sílẹ̀", "Wá ààrin wọn", "Pa charter náà rẹ́"], answer: 0, why: "Gbogbo òtítọ́ inú charter gbọ́dọ̀ jẹ́ tìrẹ." },
          { objective: "O2", q: "Ìgbẹ́kẹ̀lé (dependency) ni:", options: ["Ọmọ ẹgbẹ́ kan", "Ìlà owó kan", "Milestone kan", "Iṣẹ́ tí kò lè bẹ̀rẹ̀ títí iṣẹ́ míì yóò fi parí"], answer: 3, why: "Ìgbẹ́kẹ̀lé ń pinnu ìtẹ̀léra iṣẹ́." },
          { objective: "O3", q: "Ènìyàn mélòó ló yẹ kí ó jẹ́ Accountable (A) fún iṣẹ́ kan nínú àtẹ RACI?", options: ["Gbogbo ènìyàn", "Ẹnì kan ṣoṣo", "Kò sí ẹnìkan", "Ó kéré tán márùn-ún"], answer: 1, why: "Ẹnì kan tí iṣẹ́ jẹ́ tirẹ̀ ń dènà ìdàrúdàpọ̀." },
          { objective: "O2", q: "AI fojú bù pé gbígba ibi ìpàdé máa gba wákàtí kan. Gẹ́gẹ́ bí ẹ̀kọ́ yìí, o yẹ kí o:", options: ["Gbà á bẹ́ẹ̀", "Fi ìrírí rẹ ṣàyẹ̀wò rẹ̀; ìfojúbù AI máa ń kéré jù", "Sọ ọ́ di òdo", "Fò ètò àkókò"], answer: 1, why: "Lo òye tìrẹ fún gígùn iṣẹ́." }
        ]
      }
    },
    {
      name: "Orí 2: Dídarí àti pípa iṣẹ́ àkànṣe dé",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe àkọsílẹ̀ ewu (risk register)",
          minutes: 5,
          goal: "Dá àwọn ewu iṣẹ́ àkànṣe mọ̀, díwọ̀n wọn, kí o sì ṣètò ìdáhùn sí wọn pẹ̀lú ìrànlọ́wọ́ AI.",
          text: [
            "Ewu jẹ́ nǹkan tí ó lè ṣẹlẹ̀, tí ó sì máa kan iṣẹ́ àkànṣe náà. Àkọsílẹ̀ ewu (risk register) ń kọ ewu kọ̀ọ̀kan sílẹ̀, bí ó ṣe ṣeé ṣe tó kí ó ṣẹlẹ̀, bí ipa rẹ̀ ṣe máa burú tó, ètò ìdáhùn, àti ẹni tí ó ń ṣọ́ ọ.",
            "Béèrè lọ́wọ́ AI: \"Kọ ewu mẹ́wàá fún iṣẹ́ àkànṣe yìí [lẹ charter síbí], díwọ̀n bí ó ṣe ṣeé ṣe tó àti ipa rẹ̀ gẹ́gẹ́ bí kékeré, àárín tàbí gíga, kí o sì dábàá ìdáhùn fún ọ̀kọ̀ọ̀kan.\" Àwọn ìdáhùn: yàgò fún un (avoid), dín in kù (reduce), gbé e lé ẹlòmíì (transfer, fún àpẹẹrẹ, ìbánigbófò tàbí àdéhùn), tàbí gbà á (accept) pẹ̀lú ètò ìpamọ́.",
            "Pa àwọn ewu tí ó jẹ́ gidi fún iṣẹ́ àkànṣe rẹ nìkan mọ́, fi èyí tí AI kò rí kún un, kí o sì máa ṣàyẹ̀wò àkọsílẹ̀ náà ní ọ̀sọ̀ọ̀sẹ̀. Àwọn olùṣètò ológun ń pè é ní ríronú nípa ẹ̀ka àti àtẹ̀lé (branches and sequels); àwọn aráàlú ń pè é ní ìṣàkóso ewu."
          ],
          steps: ["Ní kí AI dábàá àwọn ewu láti inú charter rẹ.", "Díwọ̀n bí ó ṣe ṣeé ṣe tó àti ipa rẹ̀.", "Yan ìdáhùn: yàgò fún, dín kù, gbé lé ẹlòmíì tàbí gbà á.", "Fún ewu kọ̀ọ̀kan ní ẹni tí ó máa ṣọ́ ọ.", "Ṣàyẹ̀wò àkọsílẹ̀ náà ní ọ̀sọ̀ọ̀sẹ̀."],
          words: [["Ewu (risk)", "nǹkan tí ó lè ṣẹlẹ̀, tí ó sì lè kan iṣẹ́ àkànṣe náà."], ["Àkọsílẹ̀ ewu (risk register)", "àkọsílẹ̀ àwọn ewu pẹ̀lú ìdíwọ̀n, ìdáhùn àti ẹni tí ó ń ṣọ́ ọ̀kọ̀ọ̀kan."], ["Ìdínkù ewu (mitigation)", "àwọn ìgbésẹ̀ láti dín àǹfààní tàbí ipa ewu kù."]],
          slides: [
            { title: "Àwọn ọ̀wọ̀n àkọsílẹ̀ ewu", bullets: ["Ewu, bí ó ṣe ṣeé ṣe tó, ipa rẹ̀", "Ìdáhùn àti ẹni tí ó ń ṣọ́ ọ"] },
            { title: "Ìdáhùn mẹ́rin", bullets: ["Yàgò fún un tàbí dín in kù", "Gbé e lé ẹlòmíì (ìbánigbófò, àdéhùn)", "Gbà á pẹ̀lú ètò ìpamọ́"] },
            { title: "Jẹ́ kí ó jẹ́ gidi", bullets: ["Yọ ewu tí kò kàn ọ́ kúrò", "Fi ohun tí AI kò rí kún un", "Ṣàyẹ̀wò rẹ̀ ní ọ̀sọ̀ọ̀sẹ̀"] }
          ],
          tryIt: "Jẹ́ kí AI dábàá àwọn ewu fún iṣẹ́ àkànṣe rẹ. Pa márùn-ún tí ó jẹ́ gidi jù mọ́, díwọ̀n wọn, yan ìdáhùn, kí o sì yan ẹni tí ó máa ṣọ́ ọ̀kọ̀ọ̀kan.",
          youCanNow: "ṣe àkọsílẹ̀ ewu, kí o sì máa tọ́jú rẹ̀ pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O4", q: "Ìdáhùn ewu wo ló túmọ̀ sí mímú kí ewu má ṣeé ṣe tó tàbí kí ó má ṣe ìpalára tó?", options: ["Yàgò fún (avoid)", "Gbé lé ẹlòmíì (transfer)", "Dín kù (reduce)", "Gbà á (accept)"], answer: 2, why: "Dídín kù ń dín àǹfààní tàbí ìbàjẹ́ ewu kù." },
            { objective: "O4", q: "AI kọ ewu 25 tí ó ṣeé ṣe fún ìpàtẹ iṣẹ́ rẹ. Kí ni o máa ṣe?", options: ["Fi gbogbo 25 sínú àkọsílẹ̀ náà", "Fojú fo gbogbo wọn", "Yan èyí tí AI kọ́kọ́ kọ", "Pa márùn-ún tí ó jẹ́ gidi jù mọ́, díwọ̀n wọn, kí o sì yan ẹni tí ó máa ṣọ́ wọn"], answer: 3, why: "Àkọsílẹ̀ tí ó wúlò ń dojú kọ àwọn ewu gidi jù, ọ̀kọ̀ọ̀kan pẹ̀lú ìdáhùn àti ẹni tí ó ń ṣọ́ ọ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kíkọ ìròyìn ipò iṣẹ́ tí àwọn ènìyàn máa kà",
          minutes: 5,
          goal: "Kọ ìròyìn ipò iṣẹ́ ọ̀sọ̀ọ̀sẹ̀ kúkúrú pẹ̀lú àwọ̀ ipò pupa, ìyeyè tàbí àwọ̀ ewé tó yé.",
          text: [
            "Ìròyìn ipò iṣẹ́ (status report) ń jẹ́ kí onígbọ̀wọ́ àti ẹgbẹ́ mọ bí nǹkan ṣe ń lọ. Jẹ́ kí ó jẹ́ ìdajì ojú-ìwé: ipò gbogbo rẹ̀ (àwọ̀ ewé: ó ń lọ dáadáa; ìyeyè: ewu wà; pupa: ó ti yà kúrò lójú ọ̀nà), ohun tí a ṣe ní ọ̀sẹ̀ yìí, ohun tó kàn, ewu àti ìṣòro, àti àwọn ìpinnu tí a nílò láti ọ̀dọ̀ onígbọ̀wọ́.",
            "Lẹ àwọn àyípadà ètò àkókò àti àkọsílẹ̀ rẹ sínú AI, kí o sì béèrè: \"Kọ ìròyìn ipò iṣẹ́ ọ̀sọ̀ọ̀sẹ̀ ìdajì ojú-ìwé pẹ̀lú àwọ̀ ipò gbogbo rẹ̀, ohun tí a ṣe, ìgbésẹ̀ tó kàn, ewu àti ìṣòro, àti àwọn ìpinnu tí a nílò. Sọ ọ́ ní tààrà.\"",
            "Sọ òtítọ́ nípa ìyeyè àti pupa. Ìròyìn búburú ní kùtùkùtù jẹ́ ẹ̀bùn: ó ń fún onígbọ̀wọ́ ní àkókò láti ṣèrànwọ́. Fífi ìṣòro pamọ́ títí di ọjọ́ ìparí ni ọ̀nà tí ó yára jù láti pàdánù ìgbẹ́kẹ̀lé. Ṣàyẹ̀wò gbogbo ọjọ́ àti nọ́mbà tí AI kọ."
          ],
          steps: ["Ṣe àtúnṣe ètò àkókò àti àkọsílẹ̀ ewu.", "Lẹ àwọn àkọsílẹ̀ àti àyípadà sínú AI.", "Béèrè ìròyìn ìdajì ojú-ìwé pẹ̀lú àwọ̀ ipò.", "Ṣàyẹ̀wò gbogbo ọjọ́ àti nọ́mbà.", "Fi í ránṣẹ́ ní ọjọ́ kan náà ní ọ̀sọ̀ọ̀sẹ̀."],
          words: [["Ìròyìn ipò iṣẹ́ (status report)", "ìròyìn déédéé nípa ìlọsíwájú, ewu àti àìní iṣẹ́ àkànṣe."], ["Ìṣòro (issue)", "ìṣòro tí ó ń ṣẹlẹ̀ báyìí, yàtọ̀ sí ewu tí ó lè ṣẹlẹ̀."], ["Ipò RAG (RAG status)", "red, amber (ìyeyè) tàbí green: àmì kíákíá nípa bí iṣẹ́ àkànṣe ṣe wà."]],
          slides: [
            { title: "Ìdajì ojú-ìwé", bullets: ["Àwọ̀ ipò: àwọ̀ ewé, ìyeyè, pupa", "Ohun tí a ṣe ní ọ̀sẹ̀ yìí àti ìgbésẹ̀ tó kàn", "Ewu, ìṣòro, àwọn ìpinnu tí a nílò"] },
            { title: "AI ń kọ àkọ́pẹrẹ láti inú àkọsílẹ̀ rẹ", bullets: ["Lẹ àwọn àyípadà ètò àkókò síbẹ̀", "Béèrè ọ̀rọ̀ tí ó tààrà", "Ṣàyẹ̀wò ọjọ́ àti nọ́mbà"] },
            { title: "Ìròyìn búburú ní kùtùkùtù", bullets: ["Ó ń fún onígbọ̀wọ́ ní àkókò láti ṣèrànwọ́", "Fífi ìṣòro pamọ́ ń ba ìgbẹ́kẹ̀lé jẹ́"] }
          ],
          tryIt: "Kọ ìròyìn ipò iṣẹ́ ọ̀sọ̀ọ̀sẹ̀ fún iṣẹ́ àkànṣe rẹ (ọ̀sẹ̀ 3 gidi tàbí ti àròjinlẹ̀) pẹ̀lú ìrànlọ́wọ́ AI. Fi àwọ̀ ipò tí ó jẹ́ òtítọ́ àti ó kéré tán ìpinnu kan tí a nílò sí i.",
          youCanNow: "kọ ìròyìn ipò iṣẹ́ ọ̀sọ̀ọ̀sẹ̀ tó yé, tí ó sì jẹ́ òtítọ́, pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ipò ìyeyè sábà máa ń túmọ̀ sí?", options: ["Iṣẹ́ àkànṣe náà ti parí", "Ìṣòro kan wà tí ó lè kan ètò náà tí a kò bá yanjú rẹ̀", "Gbogbo nǹkan ń lọ dáadáa", "A ti fagi lé iṣẹ́ àkànṣe náà"], answer: 1, why: "Ìyeyè jẹ́ ìkìlọ̀: ewu wà, ṣùgbọ́n a ṣì lè tún un ṣe." },
            { objective: "O5", q: "O nílò kí onígbọ̀wọ́ fọwọ́ sí owó àfikún ní ọ̀sẹ̀ yìí. Kí ni o máa ṣe nínú ìròyìn ipò iṣẹ́?", options: ["Fi í sílẹ̀ kí ìròyìn náà lè wà ní àwọ̀ ewé", "Fi í sí ojú-ìwé kẹta", "Sọ ọ́ lójúkojú nìkan ní oṣù tó ń bọ̀", "Kọ ọ́ kedere sábẹ́ àwọn ìpinnu tí a nílò"], answer: 3, why: "Àwọn ìpinnu tí a nílò gbọ́dọ̀ rọrùn láti rí kí onígbọ̀wọ́ lè gbé ìgbésẹ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Pípa iṣẹ́ àkànṣe dé àti kíkọ ẹ̀kọ́ tí a kọ́ sílẹ̀",
          minutes: 5,
          goal: "Pa iṣẹ́ àkànṣe dé lọ́nà tó tọ́, kí o sì ṣe àyẹ̀wò ẹ̀kọ́ tí a kọ́.",
          text: [
            "Ọ̀pọ̀ iṣẹ́ àkànṣe kàn máa ń parẹ́ lọ díẹ̀díẹ̀. Pípa iṣẹ́ àkànṣe dé lọ́nà tó tọ́ ń fìdí rẹ̀ múlẹ̀ pé a dé àwọn àfojúsùn (fi wé charter), ó ń gbé iṣẹ́ tí ó ń bá a lọ lé ẹlòmíì lọ́wọ́, ó ń san àwọn owó tí ó kù, ó ń dúpẹ́ lọ́wọ́ ẹgbẹ́, ó sì ń fi àwọn fáìlì pamọ́ síbi tí àwọn míì ti lè rí wọn.",
            "Àyẹ̀wò ẹ̀kọ́ tí a kọ́, bí àyẹ̀wò lẹ́yìn iṣẹ́ (after-action review), ń béèrè pé: kí ni a ṣètò, kí ló ṣẹlẹ̀, kí ló fà á, kí ni ó yẹ kí a ṣe lọ́nà mìíràn nígbà tó ń bọ̀? Gba èrò gbogbo ènìyàn, títí kan ohun tí ó lọ dáadáa.",
            "AI lè to àwọn èrò náà: \"Kó àwọn èrò ẹ̀kọ́ tí a kọ́ wọ̀nyí jọ sí àwọn àkòrí, kí o sì kọ àbá mẹ́ta fún iṣẹ́ àkànṣe ọjọ́ iwájú.\" Má ṣe dá ẹnikẹ́ni lẹ́bi, dojú kọ ọ̀nà ìṣiṣẹ́, kí o sì ṣàyẹ̀wò pé àkópọ̀ náà tọ́. Tí o bá fẹ́ dàgbà nínú ìṣàkóso iṣẹ́ àkànṣe, Project Management Institute (PMI) ní ìwé-ẹ̀rí bí CAPM, PMP àti PMI-CPMAI tí ó dá lórí AI; ṣàyẹ̀wò pmi.org fún àwọn ohun tí wọ́n ń béèrè àti owó lọ́wọ́lọ́wọ́."
          ],
          steps: ["Fi èsì wé àwọn àfojúsùn inú charter.", "Gbé iṣẹ́ tí ó ń bá a lọ lé ẹlòmíì lọ́wọ́, kí o sì san owó tí ó kù.", "Ṣe àyẹ̀wò ẹ̀kọ́ tí a kọ́ láìdá ẹnikẹ́ni lẹ́bi.", "Lo AI láti kó àwọn èrò jọ, kí o sì kọ àkọ́pẹrẹ àbá.", "Fi gbogbo fáìlì pamọ́, kí o sì dúpẹ́ lọ́wọ́ ẹgbẹ́."],
          words: [["Pípa iṣẹ́ dé (closeout)", "òpin iṣẹ́ àkànṣe ní ìlànà."], ["Ẹ̀kọ́ tí a kọ́ (lessons learned)", "ohun tí ẹgbẹ́ kọ́ tí ó yẹ kí ó yí bí a ṣe ń darí iṣẹ́ àkànṣe ọjọ́ iwájú padà."], ["Àyẹ̀wò lẹ́yìn iṣẹ́ (after-action review)", "wíwo ẹ̀yìn ní ìlànà: ohun tí a ṣètò, ohun tí ó ṣẹlẹ̀, ìdí rẹ̀, ohun tí a máa yí padà."]],
          slides: [
            { title: "Pa á dé lọ́nà tó tọ́", bullets: ["Fi èsì wé charter", "Gbé iṣẹ́ lé ẹlòmíì lọ́wọ́, san owó, fi fáìlì pamọ́", "Dúpẹ́ lọ́wọ́ ẹgbẹ́"] },
            { title: "Ẹ̀kọ́ tí a kọ́", bullets: ["Ohun tí a ṣètò, ohun tí ó ṣẹlẹ̀, ìdí, ohun tí a máa yí padà", "Ohun tí ó lọ dáadáa náà", "Láìdá ẹnikẹ́ni lẹ́bi"] },
            { title: "Mú iṣẹ́ rẹ dàgbà", bullets: ["Ìwé-ẹ̀rí PMI: CAPM, PMP, PMI-CPMAI", "Ṣàyẹ̀wò pmi.org fún òfin àti owó lọ́wọ́lọ́wọ́"] }
          ],
          sources: [{ name: "Project Management Institute: certifications", url: "https://www.pmi.org/certifications" }],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ètò iṣẹ́ àkànṣe rẹ pẹ̀lú charter, WBS, ètò àkókò pẹ̀lú milestone, RACI, àkọsílẹ̀ ewu àti ìròyìn ipò iṣẹ́ kan, lẹ́yìn náà kọ àpẹẹrẹ fọ́ọ̀mù ẹ̀kọ́ tí a kọ́ pẹ̀lú ìbéèrè àyẹ̀wò mẹ́rin náà. Sàmì sí gbogbo ibi tí o ti tún ohun tí AI kọ ṣe.",
          youCanNow: "ṣètò, darí, kí o sì pa iṣẹ́ àkànṣe dé ní lílo AI láti kọ àkọ́pẹrẹ ìwé, nígbà tí ìwọ ń ṣe àwọn ìpinnu.",
          quickCheck: [
            { objective: "O6", q: "Kí ni ìdí àyẹ̀wò ẹ̀kọ́ tí a kọ́?", options: ["Láti wá ẹni tí a máa dá lẹ́bi", "Láti mú ọ̀nà ìṣiṣẹ́ dára sí i fún iṣẹ́ àkànṣe tó kàn", "Láti parí iṣẹ́ àkànṣe láìsí ìwé kankan", "Láti pín ẹ̀bùn"], answer: 1, why: "Ẹ̀kọ́ tí a kọ́ kì í dá ẹnikẹ́ni lẹ́bi; ó dojú kọ ohun tí a máa yí padà nígbà tó ń bọ̀." },
            { objective: "O6", q: "Iṣẹ́ àkànṣe náà ti parí. Kí ni o máa ṣe kí o tó pè é ní èyí tí a ti pa dé?", options: ["Pa àwọn fáìlì iṣẹ́ àkànṣe rẹ́", "Bẹ̀rẹ̀ iṣẹ́ àkànṣe tó kàn lẹ́sẹ̀kẹsẹ̀", "Fi èsì wé charter, kí o sì fi àwọn fáìlì pamọ́", "Fi ọ̀rọ̀ ìdúpẹ́ ránṣẹ́ nìkan"], answer: 2, why: "Pípa iṣẹ́ dé ń fi èsì wé charter, ó sì ń fi àwọn àkọsílẹ̀ pamọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídarí àti pípa iṣẹ́ àkànṣe dé",
        questions: [
          { objective: "O4", q: "Kí ni ìyàtọ̀ láàárín ewu (risk) àti ìṣòro (issue)?", options: ["Kò sí ìyàtọ̀", "Ìṣòro máa ń dára nígbà gbogbo", "Ewu jẹ́ nípa owó nìkan", "Ewu lè ṣẹlẹ̀; ìṣòro ń ṣẹlẹ̀ báyìí"], answer: 3, why: "Ewu jẹ́ ohun tí ó ṣeé ṣe; ìṣòro jẹ́ ìṣòro tí ó wà báyìí." },
          { objective: "O4", q: "Rírà ìbánigbófò láti dáàbò bo ara rẹ lọ́wọ́ àdánù tí ó ṣeé ṣe jẹ́ ìdáhùn ewu wo?", options: ["Gbé lé ẹlòmíì (transfer)", "Yàgò fún (avoid)", "Gbà á (accept)", "Fojú fo (ignore)"], answer: 0, why: "Ìbánigbófò ń gbé ipa ewu náà lé ẹlòmíì." },
          { objective: "O5", q: "Ó ṣeé ṣe kí iṣẹ́ àkànṣe rẹ kùnà láti dé milestone kan. Ipò wo ni ìròyìn rẹ yẹ kí ó fi hàn?", options: ["Àwọ̀ ewé kí ẹnikẹ́ni má baà dààmú", "Kò sí ipò", "Ìyeyè tàbí pupa, ní òtítọ́", "Àwọ̀ àlùkò"], answer: 2, why: "Ìròyìn búburú ní kùtùkùtù ń jẹ́ kí onígbọ̀wọ́ ṣèrànwọ́." },
          { objective: "O6", q: "Àyẹ̀wò ẹ̀kọ́ tí a kọ́ yẹ kí ó jẹ́:", options: ["Wíwá ẹni tí a máa lé kúrò níbi iṣẹ́", "Ohun tí a fò", "Nípa ohun tí kò lọ dáadáa nìkan", "Láìdá ẹnikẹ́ni lẹ́bi, kí ó sì dojú kọ ọ̀nà ìṣiṣẹ́"], answer: 3, why: "Àyẹ̀wò tí kò dá ẹnikẹ́ni lẹ́bi ń mú èrò òtítọ́ jáde." },
          { objective: "O6", q: "Níbo ni o yẹ kí o ti ṣàyẹ̀wò àwọn ohun tí PMI ń béèrè fún ìwé-ẹ̀rí àti owó rẹ̀ lọ́wọ́lọ́wọ́?", options: ["Ojú-òpó ìjíròrò èyíkéyìí", "Àmọ̀ràn AI", "pmi.org", "Ìwé ìpolówó kan"], answer: 2, why: "Àwọn ohun tí PMI ń béèrè ní ìlànà ń yí padà; ṣàyẹ̀wò orísun rẹ̀ gan-an." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìṣàkóso Iṣẹ́ Àkànṣe pẹ̀lú AI",
    questions: [
      { objective: "O1", q: "Iṣẹ́ pàtàkì alákòóso iṣẹ́ àkànṣe ni láti:", options: ["Ṣe gbogbo iṣẹ́ nìkan", "Ṣètò iṣẹ́, kó àwọn ènìyàn jọ, kí ó sì máa sọ fún gbogbo ènìyàn bí nǹkan ṣe ń lọ", "Fọwọ́ sí owó nìkan", "Kọ kóòdù"], answer: 1, why: "Alákòóso iṣẹ́ àkànṣe ń ṣètò, ó ń ṣàkóso, ó sì ń bá ènìyàn sọ̀rọ̀." },
      { objective: "O1", q: "Nínú ẹ̀kọ́ yìí, iṣẹ́ AI ni láti:", options: ["Kọ àkọ́pẹrẹ ìwé nígbà tí ìwọ ń ṣe ìpinnu", "Ṣe gbogbo ìpinnu", "Rọ́pò onígbọ̀wọ́", "Fọwọ́ sí owó"], answer: 0, why: "AI ń kọ àkọ́pẹrẹ; alákòóso iṣẹ́ àkànṣe ló ń pinnu." },
      { objective: "O1", q: "Charter jọ ìwé ológun wo jù?", options: ["Fọ́ọ̀mù ìsinmi", "Àkọsílẹ̀ àyẹ̀wò aṣọ ológun", "Àṣẹ iṣẹ́ (mission order)", "Ìwé owó oṣù"], answer: 2, why: "Àwọn méjèèjì ń sọ ìdí, ibi tí a fẹ́ dé àti àwọn ààlà." },
      { objective: "O1", q: "Tí a bá kọ \"oúnjẹ yàtọ̀ sí kọfí\" sí ohun tí kò sí nínú ààlà iṣẹ́, ó túmọ̀ sí pé:", options: ["Iṣẹ́ àkànṣe náà kò ní pèsè rẹ̀", "Òun ni àfojúsùn pàtàkì", "Ewu ni", "Milestone ni"], answer: 0, why: "Iṣẹ́ tí kò sí nínú ààlà iṣẹ́ kì í ṣe apá iṣẹ́ àkànṣe náà." },
      { objective: "O1", q: "Ta ló yẹ kí ó fọwọ́ sí charter kí iṣẹ́ tó bẹ̀rẹ̀?", options: ["Kò sí ẹnìkan", "AI nìkan", "Òṣìṣẹ́ èyíkéyìí", "Onígbọ̀wọ́"], answer: 3, why: "Ìfọwọ́sí onígbọ̀wọ́ ń dènà àríyànjiyàn lẹ́yìn náà." },
      { objective: "O2", q: "WBS ń pín iṣẹ́ àkànṣe sí:", options: ["Ìlà owó nìkan", "Iṣẹ́ kékeré tí ẹnì kan lè ṣe láàárín ọjọ́ díẹ̀", "Fọ́tò ẹgbẹ́", "Yàrá ọ́fíìsì"], answer: 1, why: "Iṣẹ́ kékeré rọrùn láti ṣètò àti láti tọpa." },
      { objective: "O2", q: "O kò lè tẹ flyer títí a ó fi fìdí ibi ìpàdé múlẹ̀. Èyí jẹ́:", options: ["Milestone", "Ìgbẹ́kẹ̀lé (dependency)", "Onígbọ̀wọ́", "Ìdáhùn ewu"], answer: 1, why: "Iṣẹ́ kan gbára lé ìparí iṣẹ́ míì." },
      { objective: "O2", q: "\"Agbanisíṣẹ́ 20 ti fìdí múlẹ̀\" jẹ́ àpẹẹrẹ rere ti:", options: ["Gígùn iṣẹ́", "Ojúṣe RACI", "Àwọ̀ ipò", "Milestone"], answer: 3, why: "Milestone jẹ́ ibi àyẹ̀wò pàtàkì." },
      { objective: "O2", q: "Ọ̀nà tí ó dára jù láti ṣe ètò àkókò sábà máa ń jẹ́:", options: ["Ṣíṣiṣẹ́ padà sẹ́yìn láti ọjọ́ ìparí", "Fífojú bù láìronú", "Bíbẹ̀rẹ̀ pẹ̀lú iṣẹ́ ìkẹyìn nìkan", "Fífo àwọn ọjọ́"], answer: 0, why: "Ṣíṣiṣẹ́ padà sẹ́yìn ń fi ìgbà tí iṣẹ́ kọ̀ọ̀kan gbọ́dọ̀ bẹ̀rẹ̀ hàn." },
      { objective: "O3", q: "Nínú RACI, \"R\" túmọ̀ sí:", options: ["Retired (ó ti fẹ̀yìn tì)", "Reviewer nìkan (olùyẹ̀wò)", "Responsible: ó ń ṣe iṣẹ́ náà", "Rejected (a kọ̀ ọ́)"], answer: 2, why: "R ni ẹni tí ó ń ṣe iṣẹ́ náà." },
      { objective: "O3", q: "Nínú RACI, \"I\" túmọ̀ sí:", options: ["In charge (ẹni tí ó ń darí)", "Inspector (olùbẹ̀wò)", "Ignored (a fojú fo)", "Informed: a ń sọ fún un bí nǹkan ṣe ń lọ"], answer: 3, why: "Àwọn tí a ń sọ fún (Informed) ń gba ìròyìn." },
      { objective: "O3", q: "Àtẹ RACI fi hàn pé ẹnì kan ní R lórí iṣẹ́ 15. O yẹ kí o:", options: ["Fi R míì kún tirẹ̀", "Yọ àtẹ náà kúrò", "Tún iṣẹ́ náà pín dọ́gba", "Fojú fo ó"], answer: 2, why: "Ẹni tí iṣẹ́ pọ̀ jù fún ń dá iṣẹ́ àkànṣe dúró." },
      { objective: "O4", q: "Àkọsílẹ̀ ewu ní:", options: ["Owó nìkan", "Ewu, bí ó ṣe ṣeé ṣe tó, ipa rẹ̀, ìdáhùn àti ẹni tí ó ń ṣọ́ ọ", "Ọjọ́ ìbí ẹgbẹ́", "Èrò àwọn oníbàárà"], answer: 1, why: "Àwọn ọ̀wọ̀n wọ̀nyí ń jẹ́ kí a lè ṣàkóso ewu." },
      { objective: "O4", q: "Yíyí ètò padà kí ewu kan má lè ṣẹlẹ̀ rárá jẹ́ ìdáhùn wo?", options: ["Yàgò fún (avoid)", "Gbé lé ẹlòmíì (transfer)", "Gbà á (accept)", "Ròyìn (report)"], answer: 0, why: "Yíyàgò fún ewu ń mú un kúrò." },
      { objective: "O4", q: "Ìgbà mélòó ló yẹ kí a máa ṣàyẹ̀wò àkọsílẹ̀ ewu?", options: ["Rárá", "Ẹ̀ẹ̀kan ní ìparí", "Ní ọ̀sọ̀ọ̀sẹ̀", "Ní ọdún mẹ́wàá mẹ́wàá"], answer: 2, why: "Ewu ń yí padà bí iṣẹ́ àkànṣe ṣe ń lọ." },
      { objective: "O5", q: "Ìròyìn ipò iṣẹ́ yẹ kí ó gùn tó:", options: ["Ìdajì ojú-ìwé", "Ojú-ìwé àádọ́ta", "Ọ̀rọ̀ kan", "Bí ó ṣe lè gùn tó"], answer: 0, why: "Àwọn ènìyàn máa ń ka ìròyìn kúkúrú." },
      { objective: "O5", q: "Ipò àwọ̀ ewé túmọ̀ sí:", options: ["Ó ti yà kúrò lójú ọ̀nà", "A ti fagi lé e", "A kò mọ̀", "Ó ń lọ dáadáa"], answer: 3, why: "Àwọ̀ ewé fi hàn pé iṣẹ́ àkànṣe náà ń lọ dáadáa." },
      { objective: "O5", q: "Kí o tó fi ìròyìn ipò iṣẹ́ tí AI kọ ránṣẹ́, o gbọ́dọ̀:", options: ["Fi àwọ̀ míì kún un", "Ṣàyẹ̀wò gbogbo ọjọ́ àti nọ́mbà", "Yọ apá àwọn ìpinnu kúrò", "Fi í ránṣẹ́ láìkà á"], answer: 1, why: "AI lè ṣàṣìṣe nínú àwọn ẹ̀kúnrẹ́rẹ́." },
      { objective: "O6", q: "Àyẹ̀wò ẹ̀kọ́ tí a kọ́ ń béèrè:", options: ["Ẹni tí a máa dá lẹ́bi", "Ohun tí a ṣètò, ohun tí ó ṣẹlẹ̀, ìdí rẹ̀, àti ohun tí a máa yí padà", "Bí a ṣe lè fi àṣìṣe pamọ́", "Kò béèrè nǹkankan"], answer: 1, why: "Ó jọ àyẹ̀wò lẹ́yìn iṣẹ́ (after-action review)." },
      { objective: "O6", q: "Pípa iṣẹ́ àkànṣe dé lọ́nà tó tọ́ ní:", options: ["Kíkúrò níbẹ̀ lásán", "Pípa gbogbo àkọsílẹ̀ rẹ́", "Bíbẹ̀rẹ̀ iṣẹ́ àkànṣe tuntun láìsí àyẹ̀wò", "Fífi èsì wé charter àti fífi àwọn fáìlì pamọ́"], answer: 3, why: "Pípa iṣẹ́ dé lọ́nà tó tọ́ ń pa iye àti ẹ̀kọ́ mọ́." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      2,
      5,
      7,
      9,
      11,
      12,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Charter",
        objective: "O1",
        notYet: "Àfojúsùn, ààlà iṣẹ́, onígbọ̀wọ́, ọjọ́ ìparí tàbí ìdíwọ̀n àṣeyọrí kò sí, tàbí àmọ̀ràn AI ṣì wà nínú rẹ̀.",
        meets: "Ojú-ìwé kan pẹ̀lú gbogbo apá, àti gbogbo àtúnṣe AI tí a sàmì sí.",
        exceeds: "Ó tún kọ ohun tí kò sí nínú ààlà iṣẹ́ àti bí a ó ṣe díwọ̀n àṣeyọrí."
      },
      {
        name: "WBS àti ètò àkókò",
        objective: "O2",
        notYet: "Àwọn iṣẹ́ tóbi jù, tàbí milestone kò tó mẹ́rin.",
        meets: "Iṣẹ́ kékeré, ìgbẹ́kẹ̀lé àti ó kéré tán milestone mẹ́rin, pẹ̀lú ìfojúbù AI tí a ti ṣàyẹ̀wò.",
        exceeds: "A ṣe ètò àkókò padà sẹ́yìn láti ọjọ́ ìparí pẹ̀lú àkókò ìpamọ́ díẹ̀."
      },
      {
        name: "Àtẹ RACI",
        objective: "O3",
        notYet: "Iṣẹ́ kan kò ní ẹni tí ó jẹ́ Accountable, tàbí ó ní ju ẹnì kan lọ.",
        meets: "A kan ṣoṣo fún iṣẹ́ kọ̀ọ̀kan, a sì pín iṣẹ́ lọ́nà tí ó tọ́.",
        exceeds: "Ó kọ àwọn tí a gbọ́dọ̀ béèrè èrò wọn kí a tó ṣe àwọn ìpinnu pàtàkì."
      },
      {
        name: "Àkọsílẹ̀ ewu",
        objective: "O4",
        notYet: "Ewu kò tó márùn-ún, tàbí kò sí ìdáhùn tàbí ẹni tí ó ń ṣọ́ wọn.",
        meets: "Ewu gidi márùn-ún tí a díwọ̀n, ọ̀kọ̀ọ̀kan pẹ̀lú ìdáhùn àti ẹni tí ó ń ṣọ́ ọ.",
        exceeds: "Ó fi ìgbà tí a máa ṣàyẹ̀wò ewu kọ̀ọ̀kan hàn àti ohun tí ó máa mú kí a gbé ìgbésẹ̀."
      },
      {
        name: "Ìròyìn ipò iṣẹ́",
        objective: "O5",
        notYet: "Àwọ̀ ipò kì í ṣe òtítọ́, tàbí a kò ṣàyẹ̀wò ọjọ́ àti nọ́mbà.",
        meets: "Ìdajì ojú-ìwé pẹ̀lú àwọ̀ tí ó jẹ́ òtítọ́, ìlọsíwájú, ìgbésẹ̀ tó kàn àti àwọn ìpinnu tí a nílò.",
        exceeds: "Onígbọ̀wọ́ tí ọwọ́ rẹ̀ dí lè gbé ìgbésẹ̀ lé e lórí láàárín ìṣẹ́jú kan."
      },
      {
        name: "Pípa iṣẹ́ dé àti ẹ̀kọ́ tí a kọ́",
        objective: "O6",
        notYet: "Kò sí àpẹẹrẹ fọ́ọ̀mù ẹ̀kọ́ tí a kọ́, tàbí ó ń dá àwọn ènìyàn lẹ́bi.",
        meets: "Àpẹẹrẹ fọ́ọ̀mù tí kò dá ẹnikẹ́ni lẹ́bi pẹ̀lú ìbéèrè àyẹ̀wò mẹ́rin náà.",
        exceeds: "Ó tún ṣètò bí a ó ṣe fi èsì wé charter àti ibi tí a ó fi àwọn fáìlì pamọ́ sí."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n lo ètò náà láti darí iṣẹ́ àkànṣe gidi níbi iṣẹ́ tàbí ní àdúgbò (ìwádìí ìtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n béèrè fún iṣẹ́ olùṣètò tàbí olùrànlọ́wọ́ iṣẹ́ àkànṣe láàárín ọjọ́ 90",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ọ̀nà ìwé-ẹ̀rí ìṣàkóso iṣẹ́ àkànṣe tàbí ẹ̀kọ́ Koach Learn míì láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n yege iṣẹ́ ìkẹyìn pẹ̀lú rubric"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí fóònù tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ bí ChatGPT, Microsoft Copilot tàbí Google Gemini",
      "Spreadsheet ọ̀fẹ́ bí Google Sheets tàbí Microsoft Excel",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, pẹ̀lú àkókò láti parí ètò iṣẹ́ àkànṣe náà"
    ],
    facilitatorNotes: [
      "Ní kí akẹ́kọ̀ọ́ kọ̀ọ̀kan yan iṣẹ́ àkànṣe gidi tàbí ti àdúgbò ní kùtùkùtù, kí gbogbo iṣẹ́ lè máa kọ́ lé ètò kan náà.",
      "Ran àwọn ọmọ ogun tẹ́lẹ̀ lọ́wọ́ láti sọ ìrírí ológun (àṣẹ iṣẹ́, ètò ìpèsè ẹrù) di ọ̀rọ̀ iṣẹ́ àkànṣe ti aráàlú.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé wọn kò gbọ́dọ̀ fi ìsọfúnni àṣírí ti agbanisíṣẹ́ tàbí ti ológun sínú irinṣẹ́ AI.",
      "Ṣàyẹ̀wò pé àwọn akẹ́kọ̀ọ́ sàmì sí ibi tí wọ́n ti tún ohun tí AI kọ ṣe; èyí ni ọgbọ́n pàtàkì tí àwọn agbanisíṣẹ́ fẹ́ rí.",
      "Fi rubric ṣe àmì fún ètò ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
