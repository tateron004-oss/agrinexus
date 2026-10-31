"use strict";

// Koach Learn course (Yoruba translation of shared/youth-first-job.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const SRC = {
  youthRules: { name: "Ẹ̀ka Iṣẹ́ US (US Department of Labor): YouthRules!", url: "https://www.dol.gov/agencies/whd/youthrules" },
  fs43: { name: "Ẹ̀ka Iṣẹ́ US: Fact Sheet 43, òfin iṣẹ́ ọmọdé fún iṣẹ́ tí kì í ṣe oko", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
  childLabor: { name: "Ẹ̀ka Iṣẹ́ US: Iṣẹ́ ọmọdé (Child labor)", url: "https://www.dol.gov/agencies/whd/child-labor" },
  stateChildLabor: { name: "Ẹ̀ka Iṣẹ́ US: Òfin iṣẹ́ ọmọdé ti ìpínlẹ̀ kọ̀ọ̀kan", url: "https://www.dol.gov/agencies/whd/state/child-labor" },
  minWage: { name: "Ẹ̀ka Iṣẹ́ US: Owó-iṣẹ́ tó kéré jù (Minimum wage)", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
  stateMinWage: { name: "Ẹ̀ka Iṣẹ́ US: Òfin owó-iṣẹ́ tó kéré jù ti ìpínlẹ̀ kọ̀ọ̀kan", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
  i9: { name: "USCIS: Form I-9, Ìjẹ́rìísí pé o lẹ́tọ̀ọ́ láti ṣiṣẹ́", url: "https://www.uscis.gov/i-9" },
  w4: { name: "IRS: Nípa Form W-4", url: "https://www.irs.gov/forms-pubs/about-form-w-4" },
  irs751: { name: "IRS: Topic 751, ìwọ̀n owó-orí Social Security àti Medicare tí a ń yọ", url: "https://www.irs.gov/taxtopics/tc751" },
  oshaYoung: { name: "OSHA: Àwọn òṣìṣẹ́ ọ̀dọ́", url: "https://www.osha.gov/young-workers" },
  ftcJobScams: { name: "FTC: Jìbìtì iṣẹ́", url: "https://consumer.ftc.gov/articles/job-scams" }
};

module.exports = {
  id: "youth-first-job-yo",
  lang: "yo",
  translationOf: "youth-first-job",
  category: "Workforce Development",
  name: "Iṣẹ́ Àkọ́kọ́ Rẹ: Ìwé Àṣẹ Iṣẹ́, Owó-iṣẹ́ àti Ohun tí Ọ̀gá ń Retí",
  skills: "Ṣíṣàyẹ̀wò òfin iṣẹ́ ọ̀dọ́, Mímúra ìwé iṣẹ́ sílẹ̀, Kíka ìwé ìsanwó, Kíkọ wákàtí iṣẹ́ sílẹ̀, Ṣíṣe ohun tí ọ̀gá ń retí, Sísọ̀rọ̀ sókè nípa ààbò",
  outcome: "bẹ̀rẹ̀ iṣẹ́ àkọ́kọ́ rẹ ní ìmúrasílẹ̀: ṣàyẹ̀wò pé iṣẹ́ náà àti wákàtí rẹ̀ bófin mu fún ọjọ́ orí rẹ, kó ìwé iṣẹ́ rẹ jọ, ka ìwé ìsanwó rẹ kí o sì ṣàyẹ̀wò rẹ̀, hùwà bí ọ̀gá ṣe ń retí, kí o sì sọ̀rọ̀ sókè tí nǹkan kan kò bá láàbò tàbí kò tọ́.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn ọ̀dọ́ tí ń múra sílẹ̀ fún iṣẹ́ àkọ́kọ́, bí iṣẹ́ ní ṣọ́ọ̀bù, ilé oúnjẹ, àgọ́ ìsinmi ọ̀dọ́ (summer camp), ilé sinimá tàbí ọ́fíìsì. Ó tún ń ran àwọn òbí, olùtọ́nisọ́nà àti àwọn ètò iṣẹ́ ọ̀dọ́ lọ́wọ́.",
    "O máa ṣàyẹ̀wò òfin fún ọjọ́ orí rẹ, múra ìwé rẹ sílẹ̀, ka ìwé ìsanwó kí o sì fi wé wákàtí rẹ, kọ́ ohun tí ọ̀gá ń retí ní ọ̀sẹ̀ àkọ́kọ́, kí o sì kọ́ ẹ̀tọ́ rẹ àti ohun tí o máa ṣe tí iṣẹ́ kan kò bá láàbò.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" lórí ìwé tàbí fóònù. Ní ìparí, o máa ṣe Ìwé Ìbẹ̀rẹ̀ Iṣẹ́ Àkọ́kọ́ tìrẹ. Ẹ̀kọ́ yìí ń kọ́ni ní òfin; kò rọ́pò ọ́fíìsì iṣẹ́ ìpínlẹ̀ rẹ. Máa ṣàyẹ̀wò ojú-òpó ìpínlẹ̀ rẹ fúnra rẹ̀ nígbà gbogbo."
  ],
  finalTask: "Ṣe Ìwé Ìbẹ̀rẹ̀ Iṣẹ́ Àkọ́kọ́ ojú-ewé kan fún iṣẹ́ gidi tàbí èyí tí o ń gbèrò: (1) ọjọ́ orí rẹ, iṣẹ́ náà, àti wákàtí tí o lè ṣiṣẹ́ lábẹ́ òfin ìjọba àpapọ̀ (federal) àti ti ìpínlẹ̀ rẹ, pẹ̀lú ojú-òpó ìjọba tí o ṣàyẹ̀wò; (2) àkọsílẹ̀ ìwé tí o nílò (ìwé àṣẹ iṣẹ́ tí ìpínlẹ̀ rẹ bá béèrè rẹ̀, ìwé ìdánimọ̀ fún Form I-9, Form W-4) àti ibi tí o ti máa rí ọ̀kọ̀ọ̀kan; (3) àṣeṣe ṣíṣàyẹ̀wò ìwé ìsanwó: láti inú ìwé ìsanwó àròsọ, kọ owó-iṣẹ́ lápapọ̀, owó kọ̀ọ̀kan tí a yọ àti owó tí ó dé ọwọ́ rẹ, kí o sì ṣàyẹ̀wò ìṣirò náà; (4) ìwà rere mẹ́ta tí o máa fi hàn ọ̀gá rẹ ní ọ̀sẹ̀ méjì àkọ́kọ́; (5) ètò rẹ tí nǹkan kan kò bá láàbò: ẹni tí o máa kọ́kọ́ sọ fún àti nọ́mbà fóònù ìjọba tí o máa pè.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ (nǹkan bí ọmọ ọdún 14 sí 19) àti àwọn ọ̀dọ́ àgbà tí ń wá iṣẹ́ àkọ́kọ́, pẹ̀lú àwọn akẹ́kọ̀ọ́ nínú ètò iṣẹ́ ọ̀dọ́ ìgbà ẹ̀ẹ̀rùn, àwọn ọ̀dọ́ tí ń gbé lọ́dọ̀ alágbàtọ́ (foster youth) àti àwọn ọ̀dọ́ nínú ètò ìdánilẹ́kọ̀ọ́ iṣẹ́. Àwọn kan ni ẹni àkọ́kọ́ nínú ẹbí wọn tí yóò ṣiṣẹ́ ní ibi iṣẹ́ ní US.",
    startingPoint: "Wọ́n lè lo fóònù kí wọ́n sì kún fọ́ọ̀mù tó rọrùn. Ọ̀pọ̀ jù lọ kò tíì rí ìwé ìsanwó, Form W-4 tàbí ìwé àṣẹ iṣẹ́ rí, wọn kò sì mọ òfin iṣẹ́ ọmọdé tàbí ẹ̀tọ́ wọn níbi iṣẹ́.",
    gap: "Wọ́n sábà máa ń fún àwọn òṣìṣẹ́ ọ̀dọ́ ní wákàtí tàbí iṣẹ́ tí òfin kò gbà fún ọjọ́ orí wọn; wọn kò dá wọn lójú nípa ìwé tí wọ́n nílò; wọn kò lè mọ̀ bóyá owó-iṣẹ́ wọn tọ́; ẹ̀rù sì ń bà wọ́n láti sọ̀rọ̀ nípa ààbò. Mímọ òfin àti ìwà tí ọ̀gá ń retí ń ràn wọ́n lọ́wọ́ láti rí iṣẹ́, láti pa iṣẹ́ mọ́, kí wọ́n sì wà láìléwu.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú (nǹkan bí kíláàsì 6 sí 8)",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìwé tàbí ilé-ìkàwé; ìwé àti gègé tó fún gbogbo iṣẹ́",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6",
      "Òfin yàtọ̀ láti ìpínlẹ̀ dé ìpínlẹ̀; òfin ìjọba àpapọ̀ ni ìpìlẹ̀, òfin tí ó le jù ló sì máa ń ṣiṣẹ́, nítorí náà ẹ̀kọ́ kọ̀ọ̀kan ń tọ́ka sí ojú-òpó ìjọba",
      "Ìsọfúnni àdáni: a kò pín nọ́mbà Social Security gidi, ìsọfúnni báńkì tàbí ìwé ìsanwó gidi nínú kíláàsì; àṣeṣe ń lo nọ́mbà àròsọ"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí ó fẹ́ ìrànlọ́wọ́ pẹ̀lú résumé àti ìfọ̀rọ̀wánilẹ́nuwò lè ṣe \"Resumes, LinkedIn and Interviews\" pẹ̀lú."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní ọjọ́ orí rẹ àti iṣẹ́ kan pẹ̀lú àkókò iṣẹ́ rẹ̀", action: "ṣàyẹ̀wò bóyá òfin ìjọba àpapọ̀ àti ti ìpínlẹ̀ gba iṣẹ́ àti wákàtí náà láàyè fún ọjọ́ orí rẹ", standard: "kí o sì dárúkọ ojú-òpó ìjọba tí o lò" },
    { id: "O2", condition: "Fún iṣẹ́ kan ní ìpínlẹ̀ rẹ", action: "kọ àwọn ìwé tí o nílò láti bẹ̀rẹ̀ iṣẹ́ sílẹ̀ àti ibi tí o ti máa rí ọ̀kọ̀ọ̀kan", standard: "pẹ̀lú ìwé àṣẹ iṣẹ́ tí ìpínlẹ̀ rẹ bá béèrè rẹ̀, ìwé ìdánimọ̀ fún Form I-9 àti Form W-4" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìwé ìsanwó àti àkọsílẹ̀ wákàtí tìrẹ", action: "wá owó-iṣẹ́ lápapọ̀, owó kọ̀ọ̀kan tí a yọ àti owó tí ó dé ọwọ́ rẹ, kí o sì fi wọ́n wé wákàtí rẹ", standard: "kí ìṣirò náà sì tọ́ dé kọ́bọ̀ (cent)" },
    { id: "O4", condition: "Tí a bá fún ọ ní ìṣẹ̀lẹ̀ kan níbi iṣẹ́ ní ọ̀sẹ̀ àkọ́kọ́ rẹ", action: "yan ìwà tó yẹ òṣìṣẹ́ tí ọ̀gá ń retí, kí o sì ṣàlàyé rẹ̀", standard: "kí o sì gba ó kéré tán 4 nínú ìṣẹ̀lẹ̀ 5 tọ̀nà" },
    { id: "O5", condition: "Tí ìṣẹ̀lẹ̀ kan níbi iṣẹ́ kò bá láàbò tàbí kò tọ́", action: "ṣàlàyé àwọn ìgbésẹ̀ láti sọ̀rọ̀ sókè àti láti fi ẹjọ́ rẹ̀ sùn", standard: "kí o sì dárúkọ ẹni tí o máa kọ́kọ́ sọ fún àti àjọ ìjọba tí o máa pè tí wọn kò bá tún un ṣe" }
  ],
  chapters: [
    {
      name: "Orí 1: Mímúra sílẹ̀ fún iṣẹ́",
      lessons: [
        {
          title: "Iṣẹ́ àti wákàtí wo ló bófin mu fún ọjọ́ orí rẹ",
          objectives: ["O1"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò bóyá òfin gba iṣẹ́ àti wákàtí kan láàyè fún ọjọ́ orí rẹ.",
          text: [
            "Ní US, òfin ìjọba àpapọ̀ (federal) lórí iṣẹ́ ọmọdé ni Fair Labor Standards Act (FLSA). Àwọn ìpínlẹ̀ náà ní òfin iṣẹ́ ọmọdé tiwọn. Tí àwọn méjèèjì bá yàtọ̀, òfin tí ó le jù ló máa ń ṣiṣẹ́.",
            "Lábẹ́ òfin ìjọba àpapọ̀ fún ọ̀pọ̀ jù lọ iṣẹ́ tí kì í ṣe oko: tí o kò bá tíì pé ọmọ ọdún 14, o kò lè ṣiṣẹ́ ní gbogbo gbòò (àwọn àyàfi díẹ̀ wà lórí ojú-òpó ìjọba). Ní ọmọ ọdún 14 àti 15, o lè ṣiṣẹ́ lẹ́yìn àkókò ilé-ìwé, ṣùgbọ́n wákàtí 3 péré ní ọjọ́ ilé-ìwé (Ọjọ́ Ẹtì náà), wákàtí 18 ní ọ̀sẹ̀ ilé-ìwé, wákàtí 8 ní ọjọ́ tí kò sí ilé-ìwé àti wákàtí 40 ní ọ̀sẹ̀ tí kò sí ilé-ìwé, àti láàárín 7 a.m. sí 7 p.m. nìkan. Láti June 1 dé Labor Day, ààlà alẹ́ di 9 p.m.",
            "Ní ọmọ ọdún 16 àti 17, òfin ìjọba àpapọ̀ kò fi ààlà sí wákàtí rẹ, ṣùgbọ́n o kò gbọ́dọ̀ ṣe iṣẹ́ tí Ẹ̀ka Iṣẹ́ (Department of Labor) pè ní iṣẹ́ eléwu. Àpẹẹrẹ: wíwakọ̀ lójú ọ̀nà gbangba gẹ́gẹ́ bí apá kan iṣẹ́ (àyàfi tóóró kan wà fún ọmọ ọdún 17), wíwa forklift tàbí ẹ̀rọ agbéròkè míì tí ń lo agbára iná, àti ọ̀pọ̀ jù lọ ẹ̀rọ iṣẹ́ igi tí ń lo agbára iná. Ìpínlẹ̀ rẹ lè fi ààlà míì kún un.",
            "Tí o kò bá tíì pé ọmọ ọdún 18, tí àkókò iṣẹ́ tàbí iṣẹ́ kan bá dàbí pé ó lòdì sí àwọn òfin yìí, o kò ní ẹ̀bi kankan: àwọn òfin wà láti dáàbò bò ọ́, agbanisíṣẹ́ ló sì gbọ́dọ̀ tẹ̀lé wọn."
          ],
          steps: ["Kọ ọjọ́ orí rẹ, iṣẹ́ náà àti wákàtí rẹ̀ sílẹ̀.", "Ka òfin ìjọba àpapọ̀ lórí YouthRules tàbí Fact Sheet 43 ti Ẹ̀ka Iṣẹ́.", "Ṣí ojú-òpó òfin iṣẹ́ ọmọdé ti ìpínlẹ̀ rẹ (Ẹ̀ka Iṣẹ́ ṣe àkọsílẹ̀ gbogbo ìpínlẹ̀).", "Lo òfin tí ó le jù. Fa òbírí yí wákàtí tàbí iṣẹ́ èyíkéyìí tí òfin kò gbà."],
          words: [["FLSA", "Fair Labor Standards Act, òfin ìjọba àpapọ̀ lórí owó-iṣẹ́ tó kéré jù, iṣẹ́ àfikún (overtime) àti iṣẹ́ ọmọdé."], ["Òfin iṣẹ́ ọmọdé", "àwọn òfin nípa iṣẹ́ àti wákàtí tí a gbà láàyè fún òṣìṣẹ́ tí kò tíì pé ọmọ ọdún 18."], ["Iṣẹ́ eléwu", "iṣẹ́ tí Ẹ̀ka Iṣẹ́ sọ pé ó léwu jù fún òṣìṣẹ́ tí kò tíì pé ọmọ ọdún 18, bí wíwakọ̀ tàbí wíwa forklift."], ["Ọ̀sẹ̀ ilé-ìwé", "ọ̀sẹ̀ tí ilé-ìwé ń lọ fún ó kéré tán ọjọ́ kan."]],
          slides: [
            { title: "Oríṣi òfin méjì", bullets: ["Òfin ìjọba àpapọ̀ (FLSA) àti òfin ìpínlẹ̀ rẹ", "Tí wọ́n bá yàtọ̀, òfin tí ó le jù ló ń ṣiṣẹ́"] },
            { title: "Ọmọ ọdún 14 àti 15 (federal)", bullets: ["Wákàtí 3 ní ọjọ́ ilé-ìwé, wákàtí 18 ní ọ̀sẹ̀ ilé-ìwé", "Wákàtí 8 ní ọjọ́ tí kò sí ilé-ìwé, 40 ní ọ̀sẹ̀ tí kò sí ilé-ìwé", "7 a.m. sí 7 p.m.; 9 p.m. láti June 1 dé Labor Day"] },
            { title: "Ọmọ ọdún 16 àti 17 (federal)", bullets: ["Kò sí ààlà wákàtí ti ìjọba àpapọ̀", "Kò sí iṣẹ́ eléwu: wíwakọ̀, forklift, ọ̀pọ̀ ẹ̀rọ agbára", "Ìpínlẹ̀ rẹ lè fi ààlà kún un"] },
            { title: "Bí o ṣe máa ṣàyẹ̀wò", bullets: ["Kọ ọjọ́ orí rẹ, iṣẹ́ àti wákàtí", "Ka YouthRules àti ojú-òpó ìpínlẹ̀ rẹ", "Fa òbírí yí ohun tí òfin kò gbà"] }
          ],
          sources: [SRC.youthRules, SRC.fs43, SRC.stateChildLabor],
          tryIt: "Wọ́n fún ọmọ ọdún 15 kan ní iṣẹ́ ní ṣọ́ọ̀bù oúnjẹ ní Ọjọ́ Ìṣẹ́gun àti Ọjọ́bọ̀ láti 4 sí 8 p.m. ní oṣù October, àti Ọjọ́ Àbámẹ́ta láti 9 a.m. sí 3 p.m. Lórí ìwé, ṣàyẹ̀wò àkókò iṣẹ́ kọ̀ọ̀kan pẹ̀lú òfin ìjọba àpapọ̀. Lẹ́yìn náà ṣí ojú-òpó òfin iṣẹ́ ọmọdé ti ìpínlẹ̀ rẹ, kí o sì kọ òfin kan tí ó fi kún un.",
          youCanNow: "ṣàyẹ̀wò bóyá iṣẹ́ àti wákàtí kan bófin mu fún ọjọ́ orí rẹ, nípa lílo òfin ìjọba àpapọ̀ àti ojú-òpó ìpínlẹ̀ rẹ.",
          quickCheck: [
            { objective: "O1", q: "O jẹ́ ọmọ ọdún 15. Oṣù October ni. Ọ̀gá rẹ fi ọ́ sí iṣẹ́ títí di 8 p.m. ní alẹ́ ọjọ́ ilé-ìwé. Kí ni òótọ́ lábẹ́ òfin ìjọba àpapọ̀?", options: ["Kò burú nítorí pé kò tó wákàtí 3", "Ó ti pẹ́ jù: ọmọ ọdún 14 àti 15 gbọ́dọ̀ dúró ní 7 p.m. lẹ́yìn ìgbà ẹ̀ẹ̀rùn", "Kò burú tí òbí rẹ bá gbà", "Ìpínlẹ̀ nìkan ló lè pinnu"], answer: 1, why: "Lẹ́yìn àkókò June 1 sí Labor Day, ọmọ ọdún 14 àti 15 lè ṣiṣẹ́ láàárín 7 a.m. sí 7 p.m. nìkan." },
            { objective: "O1", q: "Òfin ìpínlẹ̀ rẹ le ju òfin ìjọba àpapọ̀ lọ. Èwo ni o máa tẹ̀lé?", options: ["Òfin ìjọba àpapọ̀, nígbà gbogbo", "Èyí tí ọ̀gá rẹ bá yàn", "Kò sí èyíkéyìí; wọ́n pa ara wọn rẹ́", "Òfin ìpínlẹ̀ tí ó le jù"], answer: 3, why: "Tí òfin iṣẹ́ ọmọdé ti ìjọba àpapọ̀ àti ti ìpínlẹ̀ bá yàtọ̀, òfin tí ó le jù ló ń ṣiṣẹ́." }
          ]
        },
        {
          title: "Ìwé àṣẹ iṣẹ́ àti ìwé ọjọ́ àkọ́kọ́",
          objectives: ["O2"],
          minutes: 5,
          goal: "Kọ àwọn ìwé tí o nílò láti bẹ̀rẹ̀ iṣẹ́ rẹ sílẹ̀ àti ibi tí o ti máa rí ọ̀kọ̀ọ̀kan.",
          text: [
            "Òfin ìjọba àpapọ̀ kò béèrè ìwé àṣẹ iṣẹ́ (work permit), ṣùgbọ́n ọ̀pọ̀ ìpínlẹ̀ ń béèrè rẹ̀ fún òṣìṣẹ́ tí kò tíì pé ọmọ ọdún 18. Wọ́n tún máa ń pè é ní working papers tàbí employment certificate. Ní ìbámu pẹ̀lú ìpínlẹ̀ rẹ, o lè gbà á láti ilé-ìwé rẹ, ọ́fíìsì iṣẹ́ ìpínlẹ̀ tàbí lórí ayélujára, ó sì lè nílò ìbuwọ́lù òbí. Ṣàyẹ̀wò ojú-òpó ìpínlẹ̀ rẹ láti mọ̀ bóyá o nílò rẹ̀ àti bí o ṣe máa gbà á.",
            "Ní ọjọ́ àkọ́kọ́ rẹ tàbí ṣáájú rẹ̀, gbogbo agbanisíṣẹ́ ní US máa ní kí o kún Form I-9. Ó fi hàn pé o lẹ́tọ̀ọ́ láti ṣiṣẹ́ ní US. O máa fi ìwé ìdánimọ̀ ojúlówó láti inú àkọsílẹ̀ tó wà lórí fọ́ọ̀mù náà hàn, fún àpẹẹrẹ ìwé ìrìnnà (passport) US, tàbí káàdì ìdánimọ̀ ilé-ìwé tàbí ti ìpínlẹ̀ pẹ̀lú káàdì Social Security tàbí ìwé ẹ̀rí ìbí.",
            "O tún máa kún Form W-4. Ó sọ fún agbanisíṣẹ́ rẹ iye owó-orí owó-wọlé (income tax) ti ìjọba àpapọ̀ tí ó máa yọ nínú owó-iṣẹ́ rẹ kọ̀ọ̀kan. Ìpínlẹ̀ rẹ náà lè ní fọ́ọ̀mù owó-orí tirẹ̀. Béèrè lọ́wọ́ ọ̀gá rẹ tàbí òbí rẹ tí ìbéèrè kan bá rú ọ lójú.",
            "Wà láìléwu: fi nọ́mbà Social Security rẹ fúnni lórí ìwé ìgbanisíṣẹ́ gidi nìkan, lẹ́yìn tí wọ́n bá ti gbà ọ́ síṣẹ́. Agbanisíṣẹ́ gidi kò ní ní kí o san owó láti rí iṣẹ́ tàbí kí o ra gift card láé. Jìbìtì nìyẹn."
          ],
          steps: ["Ṣàyẹ̀wò ojú-òpó òfin iṣẹ́ ọmọdé ti ìpínlẹ̀ rẹ: ṣé o nílò ìwé àṣẹ iṣẹ́? Ta ló ń fún ni?", "Wá ìwé ìdánimọ̀ ojúlówó rẹ fún Form I-9 (wo àkọsílẹ̀ tó wà lórí fọ́ọ̀mù náà).", "Ka Form W-4 ṣáájú ọjọ́ àkọ́kọ́ rẹ kí o lè mọ ohun tí ó ń béèrè.", "Fi ẹ̀dà ìwé rẹ sínú fáìlì kan. Pa àwọn ojúlówó mọ́ láìléwu nílé."],
          words: [["Ìwé àṣẹ iṣẹ́ (work permit)", "ìwé tí àwọn ìpínlẹ̀ kan ń béèrè kí ẹni tí kò tíì pé ọmọ ọdún 18 tó lè ṣiṣẹ́; wọ́n tún ń pè é ní working papers tàbí employment certificate."], ["Form I-9", "fọ́ọ̀mù ìjọba àpapọ̀ tí ó fi hàn pé o lẹ́tọ̀ọ́ láti ṣiṣẹ́ ní US; o máa fi ìwé ìdánimọ̀ hàn fún un."], ["Form W-4", "fọ́ọ̀mù ìjọba àpapọ̀ tí ó sọ fún agbanisíṣẹ́ rẹ iye owó-orí owó-wọlé tí ó máa yọ nínú owó-iṣẹ́ rẹ."], ["Ìwé ojúlówó", "ìwé tàbí káàdì gidi, kì í ṣe fọ́tò tàbí ẹ̀dà."]],
          slides: [
            { title: "Ìwé àṣẹ iṣẹ́", bullets: ["Òfin ìjọba àpapọ̀ kò béèrè rẹ̀", "Ọ̀pọ̀ ìpínlẹ̀ ń béèrè rẹ̀ fún ẹni tí kò tíì pé 18", "Ojú-òpó ìpínlẹ̀ rẹ sọ ẹni tí ó ń fún ni"] },
            { title: "Form I-9", bullets: ["Ó fi hàn pé o lè ṣiṣẹ́ ní US", "Mú ìwé ìdánimọ̀ ojúlówó láti inú àkọsílẹ̀ fọ́ọ̀mù náà wá"] },
            { title: "Form W-4", bullets: ["Ó sọ fún agbanisíṣẹ́ iye owó-orí tí ó máa yọ", "Ìpínlẹ̀ rẹ lè ní fọ́ọ̀mù tirẹ̀"] },
            { title: "Wà láìléwu", bullets: ["Fi nọ́mbà Social Security rẹ sí ìwé ìgbanisíṣẹ́ gidi nìkan", "Má ṣe san owó láti rí iṣẹ́ láé"] }
          ],
          sources: [SRC.fs43, SRC.stateChildLabor, SRC.i9, SRC.w4, SRC.ftcJobScams],
          tryIt: "Ṣe àkọsílẹ̀ \"Ìwé Ọjọ́ Àkọ́kọ́\" lórí ìwé. Fún ìpínlẹ̀ rẹ, kọ: ṣé mo nílò ìwé àṣẹ iṣẹ́, ibo ni mo sì ti máa gbà á? Ìwé ìdánimọ̀ méjì wo ni màá mú wá fún Form I-9? Ta ló lè ràn mí lọ́wọ́ pẹ̀lú Form W-4?",
          youCanNow: "kọ àwọn ìwé tí o nílò láti bẹ̀rẹ̀ iṣẹ́ sílẹ̀, ibi tí o ti máa rí ọ̀kọ̀ọ̀kan, àti bí o ṣe máa pa nọ́mbà àdáni rẹ mọ́ láìléwu.",
          quickCheck: [
            { objective: "O2", q: "Fọ́ọ̀mù wo ló fi hàn agbanisíṣẹ́ rẹ pé o lẹ́tọ̀ọ́ láti ṣiṣẹ́ ní US?", options: ["Form I-9", "Form W-4", "Káàdì èsì ilé-ìwé", "Ìwé ìsanwó"], answer: 0, why: "Form I-9 ń ṣàyẹ̀wò pé o lẹ́tọ̀ọ́ láti ṣiṣẹ́ ní US; o máa fi ìwé ìdánimọ̀ ojúlówó hàn fún un." },
            { objective: "O2", q: "Ẹnì kan sọ pé òun máa fún ọ ní iṣẹ́ tí o bá kọ́kọ́ san $50 fún \"ohun èlò ìdánilẹ́kọ̀ọ́\". Kí ni èyí ṣeé ṣe kí ó jẹ́ jù?", options: ["Owó ọjọ́ àkọ́kọ́ tó wọ́pọ̀", "Owó Form W-4", "Jìbìtì: agbanisíṣẹ́ gidi kò ní gba owó lọ́wọ́ rẹ kí o tó rí iṣẹ́", "Owó ìwé àṣẹ iṣẹ́ láti ìpínlẹ̀ rẹ"], answer: 2, why: "Bíbéèrè pé kí o sanwó láti rí iṣẹ́ jẹ́ àmì jìbìtì iṣẹ́ tó wọ́pọ̀." }
          ]
        },
        {
          title: "Ohun tí ọ̀gá ń retí ní ọ̀sẹ̀ àkọ́kọ́ rẹ",
          objectives: ["O4"],
          minutes: 5,
          goal: "Yan ìwà tó yẹ òṣìṣẹ́ tí ọ̀gá ń retí nínú àwọn ìṣẹ̀lẹ̀ tó wọ́pọ̀ ní iṣẹ́ àkọ́kọ́.",
          text: [
            "Ọ̀pọ̀ ọ̀gá iṣẹ́ àkọ́kọ́ kò fi bẹ́ẹ̀ bìkítà nípa ìrírí; ìwà ni wọ́n ń wò jù: dídé lásìkò, mímúra láti ṣiṣẹ́, títẹ̀lé ìtọ́ni, níní ọ̀wọ̀ sí oníbàárà àti alábàáṣiṣẹ́, àti sísọ fún wọn ní kùtùkùtù tí nǹkan kan bá ṣẹlẹ̀.",
            "Dídé lásìkò túmọ̀ sí pé o ti múra láti ṣiṣẹ́ nígbà tí àkókò iṣẹ́ rẹ (shift) bá bẹ̀rẹ̀, kì í ṣe pé o ṣẹ̀ṣẹ̀ ń wọlé. Tí ara rẹ kò bá yá tàbí tí o máa pẹ́, sọ fún ọ̀gá rẹ ní kùtùkùtù bí o ti lè ṣe tó, ní ọ̀nà tí ibi iṣẹ́ rẹ ń béèrè (ó sábà máa ń jẹ́ ìpè, kì í ṣe ọ̀rọ̀ ìránṣẹ́ nìkan). Má kàn yẹra fún iṣẹ́ láìsọ nǹkan kan.",
            "Pa fóònù rẹ tì nígbà tí o bá ń ṣiṣẹ́, àyàfi tí iṣẹ́ rẹ bá gbà á láàyè. Tí o kò bá mọ bí a ṣe ń ṣe nǹkan kan, béèrè. Tún ìtọ́ni sọ padà kí o lè rí i dájú pé o gbọ́ ọ yé. Gba ìmọ̀ràn (feedback) ní ìfọ̀kànbalẹ̀ kí o sì dúpẹ́; ó túmọ̀ sí pé ọ̀gá rẹ fẹ́ kí o ṣe dáadáa.",
            "Máa ka àkókò iṣẹ́ rẹ ní ọ̀sẹ̀ kọ̀ọ̀kan, kí o sì tètè béèrè fún ìsinmi. Jíjẹ́ ẹni tí a lè gbẹ́kẹ̀ lé ló ń mú kí o rí wákàtí púpọ̀ sí i, ẹni tí yóò jẹ́rìí rere nípa rẹ, àti iṣẹ́ rẹ tó kàn."
          ],
          steps: ["Dé ní ìṣẹ́jú díẹ̀ ṣáájú, kí o ti múra láti ṣiṣẹ́.", "Tí o bá máa pẹ́ tàbí tí ara rẹ kò bá yá, sọ fún ọ̀gá rẹ ní kùtùkùtù bí o ti lè ṣe tó, ní ọ̀nà tí wọ́n béèrè.", "Pa fóònù rẹ tì àyàfi tí iṣẹ́ náà bá gbà á láàyè.", "Béèrè nígbà tí kò bá dá ọ lójú; tún ìtọ́ni sọ padà.", "Gba ìmọ̀ràn ní ìfọ̀kànbalẹ̀ kí o sì lò ó."],
          words: [["Shift (àkókò iṣẹ́)", "àkókò tí wọ́n fi ọ́ sí láti ṣiṣẹ́."], ["Call out", "sísọ fún ọ̀gá rẹ ṣáájú pé o kò ní lè wá sí iṣẹ́ kan."], ["Reference (ẹlẹ́rìí)", "ẹnì kan, tí ó sábà máa ń jẹ́ ọ̀gá rẹ àtijọ́, tí ó ń sọ fún agbanisíṣẹ́ tuntun irú òṣìṣẹ́ tí o jẹ́."], ["Feedback (ìmọ̀ràn)", "ọ̀rọ̀ nípa bí o ṣe ń ṣe àti bí o ṣe lè ṣe dáadáa sí i."]],
          slides: [
            { title: "Ìwà tí ọ̀gá ń wá", bullets: ["Dídé lásìkò àti mímúra láti ṣiṣẹ́", "Títẹ̀lé ìtọ́ni", "Ọ̀wọ̀ sí oníbàárà àti alábàáṣiṣẹ́"] },
            { title: "O máa pẹ́ tàbí ara rẹ kò yá?", bullets: ["Sọ fún ọ̀gá rẹ ní kùtùkùtù bí o ti lè ṣe tó", "Lo ọ̀nà tí ibi iṣẹ́ rẹ ń béèrè", "Má kàn yẹra fún iṣẹ́ láé"] },
            { title: "Níbi iṣẹ́", bullets: ["Pa fóònù tì àyàfi tí wọ́n bá gbà á", "Béèrè tí kò bá dá ọ lójú; tún ìtọ́ni sọ", "Gba ìmọ̀ràn ní ìfọ̀kànbalẹ̀"] },
            { title: "Ìdí tí ó fi ṣe pàtàkì", bullets: ["Wákàtí púpọ̀ sí i", "Ẹlẹ́rìí rere", "Iṣẹ́ rẹ tó kàn"] }
          ],
          tryIt: "Kọ ohun tí o máa sọ nínú ìṣẹ̀lẹ̀ méjì: (1) o jí, ara rẹ kò sì yá ní wákàtí méjì ṣáájú àkókò iṣẹ́ rẹ; (2) alábòójútó rẹ sọ fún ọ pé o tò ẹrù sórí pẹpẹ lọ́nà tí kò tọ́. Sọ méjèèjì sókè bí ẹni pé o ń bá ọ̀gá rẹ sọ̀rọ̀.",
          youCanNow: "yan ohun tí ọ̀gá ń retí kí o sì ṣàlàyé rẹ̀ nígbà tí o bá máa pẹ́ tàbí tí ara rẹ kò yá, tí o kò mọ ohun tí o máa ṣe, tàbí tí o ń gba ìmọ̀ràn.",
          quickCheck: [
            { objective: "O4", q: "Àkókò iṣẹ́ rẹ bẹ̀rẹ̀ ní 4 p.m. Kí ni \"dídé lásìkò\" túmọ̀ sí?", options: ["Wíwọlé ní 4:00 gẹ́lẹ́", "Dídé kí ó tó di 4:15", "Mímúra láti ṣiṣẹ́ ní 4:00, nítorí náà dídé ní ìṣẹ́jú díẹ̀ ṣáájú", "Ìgbàkígbà ṣáájú ìsinmi rẹ"], answer: 2, why: "Dídé lásìkò túmọ̀ sí pé o ti múra láti bẹ̀rẹ̀ iṣẹ́ nígbà tí àkókò iṣẹ́ bá bẹ̀rẹ̀." },
            { objective: "O4", q: "Kò dá ọ lójú bí a ṣe ń lo ẹ̀rọ ìgbowó (cash register). Kí ni ohun tó dára jù láti ṣe?", options: ["Fojú dá a kí o sì retí pé yóò ṣiṣẹ́", "Dúró títí oníbàárà kan yóò fi ráhùn", "Wá a lórí fóònù rẹ nígbà iṣẹ́", "Ní kí alábòójútó rẹ fi hàn ọ́, lẹ́yìn náà tún un sọ padà"], answer: 3, why: "Bíbéèrè àti títún ìtọ́ni sọ padà fi hàn pé o bìkítà, ó sì ń dènà àṣìṣe." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Mímúra sílẹ̀ fún iṣẹ́",
        questions: [
          { objective: "O1", q: "O jẹ́ ọmọ ọdún 14. Ọ̀sẹ̀ ilé-ìwé ni. Wákàtí mélòó lápapọ̀ ni o lè ṣiṣẹ́ ní ọ̀sẹ̀ yẹn lábẹ́ òfin ìjọba àpapọ̀?", options: ["18", "40", "Kò sí ààlà", "8"], answer: 0, why: "Òfin ìjọba àpapọ̀ gba ọmọ ọdún 14 àti 15 láàyè láti ṣiṣẹ́ tó wákàtí 18 ní ọ̀sẹ̀ tí ilé-ìwé ń lọ." },
          { objective: "O1", q: "O jẹ́ ọmọ ọdún 16. Ọ̀gá rẹ ní kí o wa ọkọ̀ àyọ́kẹ́lẹ́ ṣọ́ọ̀bù (van) láti kó ọjà lọ fún àwọn oníbàárà. Kí ni òótọ́ lábẹ́ òfin ìjọba àpapọ̀?", options: ["Ẹnikẹ́ni tí ó ní ìwé àṣẹ ìwakọ̀ lè ṣe é", "Wíwakọ̀ lójú ọ̀nà gbangba gẹ́gẹ́ bí apá kan iṣẹ́ jẹ́ iṣẹ́ eléwu tí a kà léèwọ̀ fún ẹni tí kò tíì pé 17, pẹ̀lú àyàfi tóóró kan ní 17", "Kò burú ní òpin ọ̀sẹ̀", "Kò burú tí wọ́n bá san owó púpọ̀ sí i fún ọ"], answer: 1, why: "Òfin iṣẹ́ eléwu ti ìjọba àpapọ̀ ka wíwakọ̀ níbi iṣẹ́ léèwọ̀ fún ẹni tí kò tíì pé 17, ó sì gba wíwakọ̀ tóóró láàyè nìkan ní 17." },
          { objective: "O2", q: "Ṣé òfin ìjọba àpapọ̀ béèrè ìwé àṣẹ iṣẹ́ fún ọmọ ọdún 15?", options: ["Bẹ́ẹ̀ ni, nígbà gbogbo", "Ní ìgbà ẹ̀ẹ̀rùn nìkan", "Rárá, ṣùgbọ́n ọ̀pọ̀ ìpínlẹ̀ ń béèrè rẹ̀, nítorí náà ṣàyẹ̀wò ojú-òpó ìpínlẹ̀ rẹ", "Fún iṣẹ́ ilé oúnjẹ nìkan"], answer: 2, why: "Òfin ìjọba àpapọ̀ kò béèrè ìwé àṣẹ iṣẹ́, ṣùgbọ́n ọ̀pọ̀ ìpínlẹ̀ ń béèrè rẹ̀." },
          { objective: "O2", q: "Kí ni Form W-4 ń ṣe?", options: ["Ó fi hàn pé o lẹ́tọ̀ọ́ láti ṣiṣẹ́ ní US", "Ó fún ọ ní ìwé àṣẹ iṣẹ́", "Ó kọ wákàtí rẹ sílẹ̀", "Ó sọ fún agbanisíṣẹ́ rẹ iye owó-orí owó-wọlé ti ìjọba àpapọ̀ tí ó máa yọ"], answer: 3, why: "Form W-4 ló ń pinnu iye owó-orí owó-wọlé ti ìjọba àpapọ̀ tí a máa yọ nínú owó-iṣẹ́ rẹ." },
          { objective: "O4", q: "O máa pẹ́ ní ìṣẹ́jú 20 nítorí pé bọ́ọ̀sì bàjẹ́. Kí ni o máa ṣe?", options: ["Sọ fún ọ̀gá rẹ lójú ẹsẹ̀, ní ọ̀nà tí ibi iṣẹ́ rẹ ń béèrè", "Má sọ nǹkan kan, kí o sì wọlé pẹ́", "Yẹra fún iṣẹ́ ọjọ́ náà", "Kọ nípa rẹ̀ sórí ayélujára"], answer: 0, why: "Sísọ fún ọ̀gá rẹ ní kùtùkùtù, ní ọ̀nà tí wọ́n béèrè, fi hàn pé a lè gbẹ́kẹ̀ lé ọ." }
        ]
      }
    },
    {
      name: "Orí 2: Owó-iṣẹ́ rẹ, ẹ̀tọ́ rẹ àti ààbò rẹ",
      lessons: [
        {
          title: "Kíka ìwé ìsanwó àkọ́kọ́ rẹ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Wá owó-iṣẹ́ lápapọ̀, owó kọ̀ọ̀kan tí a yọ àti owó tí ó dé ọwọ́ rẹ lórí ìwé ìsanwó.",
          text: [
            "Ìwé ìsanwó (paystub tàbí pay statement) máa ń wá pẹ̀lú owó-iṣẹ́ kọ̀ọ̀kan, yálà ṣẹ́ẹ̀kì tàbí owó tí a fi sínú báńkì tààrà (direct deposit). Ó fi àkókò ìsanwó hàn, wákàtí rẹ, iye owó fún wákàtí kan, owó-iṣẹ́ lápapọ̀, owó kọ̀ọ̀kan tí a yọ àti owó tí ó dé ọwọ́ rẹ.",
            "Owó-iṣẹ́ lápapọ̀ (gross pay) ni wákàtí lọ́nà iye owó wákàtí kan, kí a tó yọ nǹkan kan. Owó tí a yọ (deductions) ni iye tí a yọ kúrò. Àwọn tó wọ́pọ̀: owó-orí owó-wọlé ti ìjọba àpapọ̀ (láti inú Form W-4 rẹ), Social Security (6.2 percent owó-iṣẹ́ rẹ) àti Medicare (1.45 percent), tí wọ́n sábà máa ń kọ papọ̀ bí FICA, àti ní ọ̀pọ̀ ìpínlẹ̀, owó-orí owó-wọlé ti ìpínlẹ̀. Owó tí ó dé ọwọ́ rẹ (net pay tàbí take-home pay) ni ohun tí ó kù.",
            "Àṣeṣe nìkan, nọ́mbà àròsọ: wákàtí 20 ní $12.00 fún wákàtí kan = $240.00 lápapọ̀. Social Security: 240 x 0.062 = $14.88. Medicare: 240 x 0.0145 = $3.48. Owó-orí owó-wọlé ìjọba àpapọ̀: $6.00. Owó-orí ìpínlẹ̀: $3.00. Gbogbo owó tí a yọ jẹ́ $27.36, nítorí náà owó tí ó dé ọwọ́ rẹ = $240.00 - $27.36 = $212.64.",
            "Owó-iṣẹ́ tó kéré jù (minimum wage) ti ìjọba àpapọ̀ jẹ́ $7.25 fún wákàtí kan. Ọ̀pọ̀ ìpínlẹ̀ àti ìlú ní èyí tí ó ga jù, èyí tí ó ga jù ló sì kàn ọ́. Ṣàyẹ̀wò ojú-òpó ìpínlẹ̀ rẹ kí o lè mọ̀ pé iye owó rẹ bófin mu."
          ],
          steps: ["Wá ọjọ́ àkókò ìsanwó àti wákàtí rẹ.", "Ṣàyẹ̀wò owó-iṣẹ́ lápapọ̀: wákàtí x iye owó.", "Kọ owó kọ̀ọ̀kan tí a yọ sílẹ̀ kí o sì ṣírò gbogbo rẹ̀ pọ̀.", "Ṣàyẹ̀wò owó tí ó dé ọwọ́ rẹ: owó-iṣẹ́ lápapọ̀ yọ gbogbo owó tí a yọ.", "Tí nǹkan kan kò bá bára mu, béèrè lọ́wọ́ ẹ̀ka ìsanwó (payroll) tàbí ọ̀gá rẹ pẹ̀lú ọ̀wọ̀."],
          words: [["Owó-iṣẹ́ lápapọ̀ (gross pay)", "owó-iṣẹ́ rẹ kí a tó yọ nǹkan kan: wákàtí x iye owó."], ["Owó tí a yọ (deduction)", "iye tí a yọ kúrò nínú owó-iṣẹ́ rẹ, bí owó-orí."], ["Owó tí ó dé ọwọ́ rẹ (net pay)", "owó tí o máa gbé lọ sílé: owó-iṣẹ́ lápapọ̀ yọ owó tí a yọ."], ["FICA", "owó-orí Social Security àti Medicare tí a yọ nínú owó-iṣẹ́ rẹ."], ["Àkókò ìsanwó (pay period)", "àwọn ọjọ́ iṣẹ́ tí owó-iṣẹ́ kan ń san fún."]],
          slides: [
            { title: "Ohun tí ó wà lórí ìwé ìsanwó", bullets: ["Àkókò ìsanwó, wákàtí àti iye owó", "Owó-iṣẹ́ lápapọ̀ àti owó kọ̀ọ̀kan tí a yọ", "Owó tí ó dé ọwọ́ rẹ (net pay)"] },
            { title: "Owó tí a sábà máa ń yọ", bullets: ["Owó-orí owó-wọlé ìjọba àpapọ̀ (láti W-4 rẹ)", "Social Security 6.2% àti Medicare 1.45% (FICA)", "Owó-orí owó-wọlé ìpínlẹ̀ ní ọ̀pọ̀ ìpínlẹ̀"] },
            { title: "Àṣeṣe: nọ́mbà àròsọ", bullets: ["Wákàtí 20 x $12.00 = $240.00 lápapọ̀", "Owó tí a yọ: $14.88 + $3.48 + $6.00 + $3.00 = $27.36", "Owó tí ó dé ọwọ́: $240.00 - $27.36 = $212.64"] },
            { title: "Owó-iṣẹ́ tó kéré jù", bullets: ["Ìjọba àpapọ̀: $7.25 fún wákàtí kan", "Ọ̀pọ̀ ìpínlẹ̀ àti ìlú ń san jù bẹ́ẹ̀ lọ; èyí tí ó ga jù ló kàn ọ́"] }
          ],
          sources: [SRC.irs751, SRC.minWage, SRC.stateMinWage, SRC.w4],
          tryIt: "Àṣeṣe nìkan: o ṣiṣẹ́ wákàtí 15 ní $13.00 fún wákàtí kan. Owó-orí owó-wọlé ìjọba àpapọ̀ jẹ́ $5.00, owó-orí ìpínlẹ̀ sì jẹ́ $2.00. Lórí ìwé, ṣírò owó-iṣẹ́ lápapọ̀, Social Security, Medicare, gbogbo owó tí a yọ àti owó tí ó dé ọwọ́ rẹ. (Ìdáhùn: $195.00 lápapọ̀, $12.09, $2.83, $21.92 lápapọ̀ owó tí a yọ, $173.08 tí ó dé ọwọ́.)",
          youCanNow: "ka ìwé ìsanwó, wá owó-iṣẹ́ lápapọ̀, owó kọ̀ọ̀kan tí a yọ àti owó tí ó dé ọwọ́ rẹ, kí o sì ṣàyẹ̀wò ìṣirò náà.",
          quickCheck: [
            { objective: "O3", q: "O ṣiṣẹ́ wákàtí 10 ní $14.00 fún wákàtí kan. Kí ni owó-iṣẹ́ rẹ lápapọ̀?", options: ["$14.00", "$124.00", "$104.00", "$140.00"], answer: 3, why: "Owó-iṣẹ́ lápapọ̀ ni wákàtí lọ́nà iye owó: 10 x $14.00 = $140.00." },
            { objective: "O3", q: "Owó-iṣẹ́ lápapọ̀ jẹ́ $300.00, gbogbo owó tí a yọ sì jẹ́ $35.00. Kí ni owó tí ó dé ọwọ́ rẹ?", options: ["$265.00", "$335.00", "$300.00", "$35.00"], answer: 0, why: "Owó tí ó dé ọwọ́ ni owó-iṣẹ́ lápapọ̀ yọ owó tí a yọ: $300.00 - $35.00 = $265.00." }
          ]
        },
        {
          title: "Kíkọ wákàtí rẹ sílẹ̀ kí owó-iṣẹ́ rẹ lè tọ́",
          objectives: ["O3"],
          minutes: 5,
          goal: "Pa àkọsílẹ̀ wákàtí tìrẹ mọ́ kí o sì fi wé ìwé ìsanwó rẹ.",
          text: [
            "Àṣìṣe máa ń ṣẹlẹ̀ nínú owó-iṣẹ́. Ààbò tó dára jù ni àkọsílẹ̀ tìrẹ. Ní àkókò iṣẹ́ kọ̀ọ̀kan, kọ ọjọ́, àkókò tí o bẹ̀rẹ̀, ìgbà tí ìsinmi rẹ bẹ̀rẹ̀ àti tí ó parí, àti àkókò tí o parí iṣẹ́. Ẹ̀ka Iṣẹ́ ní app ọ̀fẹ́ fún kíkọ wákàtí (timesheet), tàbí o lè lo ìwé àkọsílẹ̀ tàbí notes lórí fóònù rẹ.",
            "Ṣírò wákàtí àkókò ìsanwó náà pọ̀. Rántí láti yọ àkókò ìsinmi oúnjẹ tí a kò san owó fún. Lẹ́yìn náà fi àpapọ̀ rẹ wé wákàtí tí ó wà lórí ìwé ìsanwó rẹ.",
            "Tí nọ́mbà kò bá bára mu, má ṣe bẹ̀rù, má sì ṣe fẹ̀sùn kan ẹnikẹ́ni. Mú àkọsílẹ̀ rẹ lọ bá ọ̀gá rẹ tàbí ẹ̀ka ìsanwó kí o sì béèrè pé: \"Àkọsílẹ̀ mi fi wákàtí 22 hàn, ìwé ìsanwó mi sì fi 19 hàn. Ṣé ẹ lè bá mi ṣàyẹ̀wò?\" Bí a ṣe ń tún ọ̀pọ̀ àṣìṣe ṣe nìyẹn.",
            "Tí wọn kò bá san owó fún wákàtí tí o ṣiṣẹ́, tí wọn kò sì tún un ṣe, Wage and Hour Division ti Ẹ̀ka Iṣẹ́ ń gba ẹ̀sùn. Ọ̀fẹ́ ni, wọ́n sì ń pa á mọ́ ní àṣírí."
          ],
          steps: ["Ní àkókò iṣẹ́ kọ̀ọ̀kan: kọ ọjọ́, àkókò ìbẹ̀rẹ̀, àkókò ìsinmi àti àkókò ìparí.", "Ní òpin àkókò ìsanwó, ṣírò wákàtí rẹ pọ̀ (yọ ìsinmi tí a kò san owó fún).", "Fi àpapọ̀ rẹ wé wákàtí tí ó wà lórí ìwé ìsanwó rẹ.", "Tí wọ́n bá yàtọ̀, mú àkọsílẹ̀ rẹ wá kí o sì béèrè pẹ̀lú ọ̀wọ̀ pé kí wọ́n ṣàyẹ̀wò.", "Tí wọn kò bá tún un ṣe, kàn sí Wage and Hour Division."],
          words: [["Timesheet (àkọsílẹ̀ wákàtí)", "àkọsílẹ̀ ọjọ́ àti wákàtí tí o ṣiṣẹ́."], ["Ìsinmi tí a kò san owó fún", "ìsinmi oúnjẹ tí o kò ṣiṣẹ́ rárá, tí a kò sì san owó fún."], ["Payroll (ẹ̀ka ìsanwó)", "ẹni tàbí àwùjọ tí ó ń san owó fún àwọn òṣìṣẹ́."], ["Wage and Hour Division", "apá kan Ẹ̀ka Iṣẹ́ US tí ó ń mú kí àwọn èèyàn tẹ̀lé òfin owó-iṣẹ́ àti iṣẹ́ ọmọdé."]],
          slides: [
            { title: "Pa àkọsílẹ̀ tìrẹ mọ́", bullets: ["Ọjọ́, àkókò ìbẹ̀rẹ̀, ìsinmi àti ìparí", "Ìwé àkọsílẹ̀, notes fóònù tàbí app timesheet ọ̀fẹ́ ti DOL"] },
            { title: "Fi wé ara ní àkókò ìsanwó kọ̀ọ̀kan", bullets: ["Ṣírò wákàtí rẹ pọ̀, yọ ìsinmi tí a kò san fún", "Fi wé ìwé ìsanwó"] },
            { title: "Tí kò bá bára mu", bullets: ["Mú àkọsílẹ̀ rẹ wá kí o sì béèrè pẹ̀lú ọ̀wọ̀", "\"Ṣé ẹ lè bá mi ṣàyẹ̀wò?\""] },
            { title: "Wọn kò tíì tún un ṣe?", bullets: ["Wage and Hour Division: ọ̀fẹ́ àti àṣírí", "1-866-487-9243 (1-866-4-US-WAGE)"] }
          ],
          sources: [SRC.youthRules, SRC.childLabor],
          tryIt: "Àṣeṣe nìkan: Ọjọ́ Ajé 3:30 sí 7:00 p.m., Ọjọ́rú 3:30 sí 7:00 p.m., Ọjọ́ Àbámẹ́ta 9:00 a.m. sí 3:00 p.m. pẹ̀lú ìsinmi oúnjẹ ọ̀sán ìṣẹ́jú 30 tí a kò san owó fún. Ṣírò wákàtí náà pọ̀. Ìwé ìsanwó rẹ sọ pé wákàtí 11. Kọ ohun tí o máa sọ fún ọ̀gá rẹ. (Ìdáhùn: 3.5 + 3.5 + 5.5 = wákàtí 12.5.)",
          youCanNow: "pa àkọsílẹ̀ wákàtí rẹ mọ́, fi wé ìwé ìsanwó rẹ, kí o sì béèrè pẹ̀lú ọ̀wọ̀ pé kí wọ́n tún àṣìṣe ṣe.",
          quickCheck: [
            { objective: "O3", q: "O ṣiṣẹ́ láti 9 a.m. sí 2 p.m. pẹ̀lú ìsinmi oúnjẹ ọ̀sán ìṣẹ́jú 30 tí a kò san owó fún. Wákàtí mélòó ni wọ́n máa san owó fún?", options: ["5", "5.5", "4.5", "4"], answer: 2, why: "9 a.m. sí 2 p.m. jẹ́ wákàtí 5; yọ ìsinmi ìṣẹ́jú 30 tí a kò san fún, ó di wákàtí 4.5." },
            { objective: "O3", q: "Àkọsílẹ̀ rẹ fi wákàtí 22 hàn, ṣùgbọ́n ìwé ìsanwó rẹ fi 19 hàn. Kí ni o máa kọ́kọ́ ṣe?", options: ["Fi iṣẹ́ sílẹ̀ lójú ẹsẹ̀", "Mú àkọsílẹ̀ rẹ lọ bá ọ̀gá rẹ tàbí ẹ̀ka ìsanwó kí o sì béèrè pẹ̀lú ọ̀wọ̀ pé kí wọ́n ṣàyẹ̀wò", "Má sọ nǹkan kan", "Fi ìwé ìsanwó náà sórí ayélujára"], answer: 1, why: "A máa ń tún ọ̀pọ̀ àṣìṣe owó-iṣẹ́ ṣe nípa fífi àkọsílẹ̀ rẹ hàn àti bíbéèrè pẹ̀lú ọ̀wọ̀." }
          ]
        },
        {
          title: "Ẹ̀tọ́ àti ààbò rẹ: sísọ̀rọ̀ sókè",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣàlàyé àwọn ìgbésẹ̀ láti sọ̀rọ̀ sókè àti láti fi ẹjọ́ ìṣẹ̀lẹ̀ tí kò láàbò tàbí tí kò tọ́ sùn.",
          text: [
            "Gbogbo òṣìṣẹ́, títí kan àwọn ọ̀dọ́, ní ẹ̀tọ́. Agbanisíṣẹ́ rẹ gbọ́dọ̀ fún ọ ní ibi iṣẹ́ tí ó láàbò, kí ó sì san ó kéré tán owó-iṣẹ́ tó kéré jù tí òfin fàyè gbà fún gbogbo wákàtí tí o ṣiṣẹ́. Ó yẹ kí o gba ìdánilẹ́kọ̀ọ́ kí o tó ṣe iṣẹ́ kan, o sì lè béèrè ìbéèrè. Agbanisíṣẹ́ rẹ kò lè fìyà jẹ ọ́ nítorí pé o béèrè nípa ẹ̀tọ́ rẹ tàbí o fi ẹ̀sùn sùn.",
            "Àwọn òṣìṣẹ́ ọ̀dọ́ máa ń farapa jù nígbà tí wọ́n jẹ́ tuntun, tí wọ́n ń kánjú, tàbí tí wọn kò gba ìdánilẹ́kọ̀ọ́. Àwọn àmì ìkìlọ̀: wọ́n ní kí o lo ẹ̀rọ tí o kò gba ìdánilẹ́kọ̀ọ́ lé lórí, iṣẹ́ tí a kà léèwọ̀ fún ọjọ́ orí rẹ, kò sí ohun èlò ààbò, ilẹ̀ tí ń yọ̀, epo gbígbóná, tàbí wọ́n fi ọ́ sílẹ̀ nìkan ní òru.",
            "Ìgbésẹ̀ láti sọ̀rọ̀ sókè: dúró tí o bá wà nínú ewu. Sọ ìṣòro náà fún alábòójútó rẹ ní ìfọ̀kànbalẹ̀. Tí wọn kò bá tún un ṣe, sọ fún alábòójútó míì àti òbí, olùkọ́ tàbí òṣìṣẹ́ ètò iṣẹ́ ọ̀dọ́. Tí wọn kò bá tíì tún un ṣe, kàn sí ìjọba: OSHA (1-800-321-6742) fún ààbò, tàbí Wage and Hour Division (1-866-487-9243) fún ìṣòro owó-iṣẹ́, wákàtí tàbí iṣẹ́ ọmọdé.",
            "Tí ẹnì kan bá farapa gidigidi, kọ́kọ́ pe 911 (tàbí nọ́mbà pàjáwìrì ibi tí o wà)."
          ],
          steps: ["Tí o bá wà nínú ewu, dúró kí o sì kúrò níbẹ̀.", "Sọ ohun tí kò tọ́ fún alábòójútó rẹ ní ìfọ̀kànbalẹ̀.", "Tí wọn kò bá tún un ṣe, sọ fún alábòójútó míì àti àgbàlagbà kan tí o gbẹ́kẹ̀ lé.", "Wọn kò tíì tún un ṣe: pe OSHA fún ààbò tàbí Wage and Hour Division fún owó-iṣẹ́, wákàtí tàbí iṣẹ́ ọmọdé.", "Pàjáwìrì: kọ́kọ́ pe 911."],
          words: [["OSHA", "Occupational Safety and Health Administration, àjọ ìjọba àpapọ̀ fún ààbò níbi iṣẹ́."], ["Retaliation (ìgbẹ̀san)", "fífìyà jẹ òṣìṣẹ́ nítorí pé ó sọ̀rọ̀ sókè tàbí ó fi ẹ̀sùn sùn; òfin kò gbà á."], ["Ohun èlò ààbò", "àwọn nǹkan bí ìbọ̀wọ́, gíláàsì ààbò ojú tàbí bàtà tí kì í yọ̀, tí ó ń dáàbò bò ọ́."]],
          slides: [
            { title: "Ẹ̀tọ́ rẹ", bullets: ["Ibi iṣẹ́ tí ó láàbò", "Ó kéré tán owó-iṣẹ́ tó kéré jù tí òfin gbà fún wákàtí kọ̀ọ̀kan", "Ìdánilẹ́kọ̀ọ́, ìbéèrè, àti pé kò sí ìyà fún sísọ̀rọ̀ sókè"] },
            { title: "Àwọn àmì ìkìlọ̀", bullets: ["Ẹ̀rọ tí o kò gba ìdánilẹ́kọ̀ọ́ lé lórí", "Iṣẹ́ tí a kà léèwọ̀ fún ọjọ́ orí rẹ", "Kò sí ohun èlò ààbò, epo gbígbóná, ilẹ̀ tí ń yọ̀"] },
            { title: "Sọ̀rọ̀ sókè ní ìgbésẹ̀-ìgbésẹ̀", bullets: ["Dúró tí o bá wà nínú ewu", "Sọ fún alábòójútó rẹ, lẹ́yìn náà alábòójútó míì àti àgbàlagbà tí o gbẹ́kẹ̀ lé", "Wọn kò tún un ṣe: OSHA tàbí Wage and Hour Division"] },
            { title: "Nọ́mbà tí o yẹ kí o mọ̀", bullets: ["Pàjáwìrì: kọ́kọ́ pe 911", "OSHA: 1-800-321-6742", "Wage and Hour: 1-866-487-9243"] }
          ],
          sources: [SRC.oshaYoung, SRC.youthRules, SRC.fs43],
          tryIt: "O jẹ́ ọmọ ọdún 16. Alábòójútó rẹ ní kí o lo ẹ̀rọ gígé ẹran (meat slicer) ní ṣọ́ọ̀bù oúnjẹ (deli), o kò sì tíì gba ìdánilẹ́kọ̀ọ́ kankan. Kọ ọ̀rọ̀ tí o máa sọ fún alábòójútó rẹ, àti ẹni tí o máa sọ fún lẹ́yìn náà tí ó bá ń tẹnu mọ́ ọn. Fi nọ́mbà OSHA àti Wage and Hour pamọ́ sínú fóònù rẹ.",
          youCanNow: "dá ìṣẹ̀lẹ̀ tí kò láàbò tàbí tí kò tọ́ mọ̀ kí o sì sọ̀rọ̀ sókè ní ìgbésẹ̀-ìgbésẹ̀: alábòójútó rẹ, àgbàlagbà tí o gbẹ́kẹ̀ lé, lẹ́yìn náà àjọ ìjọba.",
          quickCheck: [
            { objective: "O5", q: "Ọ̀gá rẹ ní kí o fọ ìkòkò dín-nǹkan (fryer) tí epo gbígbóná wà nínú rẹ̀, kò sì fún ọ ní ìbọ̀wọ́ tàbí ìdánilẹ́kọ̀ọ́. Kí ni o máa kọ́kọ́ ṣe?", options: ["Sọ fún alábòójútó rẹ ní ìfọ̀kànbalẹ̀ pé o nílò ìdánilẹ́kọ̀ọ́ àti ohun èlò ààbò kí o tó ṣe é", "Ṣe é kíákíá kí o má bàa kó sínú wàhálà", "Pe 911", "Fi iṣẹ́ sílẹ̀ láìsọ ìdí"], answer: 0, why: "Sísọ fún alábòójútó rẹ ni ìgbésẹ̀ àkọ́kọ́ tó wọ́pọ̀ nígbà tí ẹnikẹ́ni kò tíì farapa." },
            { objective: "O5", q: "O ti sọ fún alábòójútó méjì nípa ìṣòro owó-iṣẹ́, kò sì sí ìyípadà. Ta ni o lè kàn sí?", options: ["Kò sí ẹnìkan; o gbọ́dọ̀ gbà á bẹ́ẹ̀", "Àjèjì kan lórí ayélujára", "Wage and Hour Division ti Ẹ̀ka Iṣẹ́ US", "Olùkọ́ eré ìdárayá ilé-ìwé rẹ nìkan"], answer: 2, why: "Wage and Hour Division ń gba ẹ̀sùn ọ̀fẹ́ àti àṣírí nípa owó-iṣẹ́, wákàtí àti iṣẹ́ ọmọdé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Owó-iṣẹ́ rẹ, ẹ̀tọ́ rẹ àti ààbò rẹ",
        questions: [
          { objective: "O3", q: "Lórí ìwé ìsanwó, kí ni owó tí ó dé ọwọ́ rẹ (net pay)?", options: ["Owó-iṣẹ́ kí a tó yọ owó-orí", "Iye owó rẹ fún wákàtí kan", "Owó tí o máa gbé lọ sílé lẹ́yìn tí a yọ gbogbo owó tí a yọ", "Gbogbo owó-orí tí a yọ"], answer: 2, why: "Owó tí ó dé ọwọ́ rẹ ni ohun tí ó kù lẹ́yìn tí a yọ gbogbo owó tí a yọ nínú owó-iṣẹ́ lápapọ̀." },
          { objective: "O3", q: "Àṣeṣe nìkan: owó-iṣẹ́ lápapọ̀ jẹ́ $200.00. Kí ni owó Social Security tí a máa yọ ní 6.2 percent?", options: ["$6.20", "$2.90", "$15.30", "$12.40"], answer: 3, why: "$200.00 x 0.062 = $12.40." },
          { objective: "O3", q: "Kí ló dé tí o fi gbọ́dọ̀ pa àkọsílẹ̀ wákàtí tìrẹ mọ́?", options: ["Kí o lè fi wé ìwé ìsanwó rẹ kí o sì rí àṣìṣe", "Nítorí pé òfin sọ pé ìwọ nìkan ló lè kọ wákàtí", "Kí o lè fo ìsinmi", "Kí o má bàa nílò ìwé ìsanwó"], answer: 0, why: "Àkọsílẹ̀ tìrẹ ń jẹ́ kí o ṣàyẹ̀wò pé wọ́n san owó fún gbogbo wákàtí tí o ṣiṣẹ́." },
          { objective: "O5", q: "Iná jó alábàáṣiṣẹ́ rẹ kan gidigidi. Kí ni o máa kọ́kọ́ ṣe?", options: ["Parí iṣẹ́ rẹ", "Pe 911 (tàbí nọ́mbà pàjáwìrì ibi tí o wà)", "Pe OSHA", "Fi ọ̀rọ̀ ránṣẹ́ sí àwọn ọ̀rẹ́ rẹ"], answer: 1, why: "Ní pàjáwìrì, kọ́kọ́ pe 911; fífi ẹjọ́ sùn sí àwọn àjọ máa wá lẹ́yìn." },
          { objective: "O5", q: "Ṣé agbanisíṣẹ́ rẹ lè fìyà jẹ ọ́ nítorí pé o fi ẹ̀sùn nípa ààbò tàbí owó-iṣẹ́ sùn?", options: ["Bẹ́ẹ̀ ni, tí o kò bá tíì pé 18", "Bẹ́ẹ̀ ni, tí ẹ̀sùn náà kò bá tọ́", "Rárá, òfin kò gba ìgbẹ̀san nítorí sísọ̀rọ̀ sókè", "Ní oṣù àkọ́kọ́ rẹ nìkan"], answer: 2, why: "Òfin ń dáàbò bo òṣìṣẹ́ lọ́wọ́ ìgbẹ̀san nítorí bíbéèrè nípa ẹ̀tọ́ wọn tàbí fífi ẹ̀sùn sùn." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Iṣẹ́ Àkọ́kọ́ Rẹ: Ìwé Àṣẹ Iṣẹ́, Owó-iṣẹ́ àti Ohun tí Ọ̀gá ń Retí",
    questions: [
      { objective: "O1", q: "O jẹ́ ọmọ ọdún 15, ilé-ìwé sì ti parí fún ìgbà ẹ̀ẹ̀rùn ní oṣù July. Títí di aago mélòó ni o lè ṣiṣẹ́ lábẹ́ òfin ìjọba àpapọ̀?", options: ["7 p.m.", "9 p.m.", "11 p.m.", "Ìgbàkígbà"], answer: 1, why: "Láti June 1 dé Labor Day, ààlà alẹ́ fún ọmọ ọdún 14 àti 15 di 9 p.m." },
      { objective: "O2", q: "Àwọn ìwé wo ni gbogbo òṣìṣẹ́ tuntun máa ń kún, ní ọjọ́ orí èyíkéyìí?", options: ["Form I-9 àti Form W-4", "Ìwé àṣẹ iṣẹ́ àti káàdì èsì ilé-ìwé", "Ìwé ìsanwó àti timesheet", "Ìdánwò ìwé àṣẹ ìwakọ̀"], answer: 0, why: "Gbogbo òṣìṣẹ́ tuntun ń kún Form I-9 àti Form W-4; ìwé àṣẹ iṣẹ́ dá lórí ọjọ́ orí àti ìpínlẹ̀." },
      { objective: "O3", q: "Àṣeṣe nìkan: wákàtí 18 ní $12.50 fún wákàtí kan. Kí ni owó-iṣẹ́ lápapọ̀?", options: ["$215.00", "$250.00", "$225.00", "$180.00"], answer: 2, why: "18 x $12.50 = $225.00." },
      { objective: "O4", q: "O jí, ara rẹ kò sì yá ní wákàtí méjì ṣáájú àkókò iṣẹ́ rẹ. Kí ni ìwà tó yẹ òṣìṣẹ́?", options: ["Lọ síṣẹ́ pẹ̀lú àìsàn láìsọ nǹkan kan", "Yẹra fún iṣẹ́ kí o sì ṣàlàyé ní ọ̀sẹ̀ tó ń bọ̀", "Ní kí ọ̀rẹ́ rẹ lọ dípò rẹ láìsọ fún ẹnikẹ́ni", "Sọ fún ọ̀gá rẹ lójú ẹsẹ̀, ní ọ̀nà tí ibi iṣẹ́ rẹ ń béèrè"], answer: 3, why: "Sísọ fún ọ̀gá rẹ ní kùtùkùtù, ní ọ̀nà tí wọ́n béèrè, ń jẹ́ kí wọ́n wá ẹni tí yóò rọ́pò rẹ, ó sì fi hàn pé a lè gbẹ́kẹ̀ lé ọ." },
      { objective: "O5", q: "Àjọ wo ló ń gba ẹ̀sùn nípa ààbò níbi iṣẹ́?", options: ["IRS", "OSHA", "Ilé ifiránṣẹ́ (post office)", "Àgbègbè ilé-ìwé rẹ (school district)"], answer: 1, why: "OSHA ni àjọ ìjọba àpapọ̀ fún ààbò àti ìlera níbi iṣẹ́." },
      { objective: "O1", q: "O jẹ́ ọmọ ọdún 14. Ní ọjọ́ ilé-ìwé, wákàtí mélòó ni o lè ṣiṣẹ́ lábẹ́ òfin ìjọba àpapọ̀?", options: ["3", "5", "8", "Kò sí ààlà"], answer: 0, why: "Ọmọ ọdún 14 àti 15 lè ṣiṣẹ́ tó wákàtí 3 ní ọjọ́ ilé-ìwé, títí kan Ọjọ́ Ẹtì." },
      { objective: "O1", q: "O jẹ́ ọmọ ọdún 17. Iṣẹ́ wo ni a kà léèwọ̀ fún ọ lábẹ́ òfin iṣẹ́ eléwu ti ìjọba àpapọ̀?", options: ["Kíkó ọjà sínú àpò", "Dídáhùn fóònù", "Títò ẹrù sórí pẹpẹ pẹ̀lú ọwọ́", "Wíwa forklift"], answer: 3, why: "Wíwa ẹ̀rọ agbéròkè tí ń lo agbára iná bí forklift jẹ́ iṣẹ́ eléwu tí a kà léèwọ̀ fún ẹni tí kò tíì pé 18." },
      { objective: "O2", q: "Ibo ni o ti lè mọ̀ bóyá ìpínlẹ̀ rẹ ń béèrè ìwé àṣẹ iṣẹ́?", options: ["Ojú-òpó òfin iṣẹ́ ọmọdé ti ìpínlẹ̀ rẹ (Ẹ̀ka Iṣẹ́ ṣe àkọsílẹ̀ wọn)", "Ọ̀rọ̀ kan lórí ìkànnì àjọlò (social media)", "Ojú-òpó iṣẹ́ èyíkéyìí", "Ẹ̀yìn ìwé ìsanwó"], answer: 0, why: "Ìwé àṣẹ iṣẹ́ jẹ́ òfin ìpínlẹ̀, nítorí náà ojú-òpó ìjọba ìpínlẹ̀ ni ibi tí o ti máa ṣàyẹ̀wò." },
      { objective: "O2", q: "Ọ̀gá tuntun kan fi ọ̀rọ̀ ránṣẹ́ sí ọ kí ìfọ̀rọ̀wánilẹ́nuwò kankan tó wáyé, ó ń béèrè ọ̀rọ̀ aṣínà báńkì rẹ (bank login) \"láti ṣètò owó-iṣẹ́\". Kí ni èyí?", options: ["Ó wọ́pọ̀ fún direct deposit", "Apá kan Form W-4", "Àmì ìkìlọ̀ jìbìtì; má ṣe fi ọ̀rọ̀ aṣínà rẹ fún ẹnikẹ́ni láé", "Apá kan Form I-9"], answer: 2, why: "Agbanisíṣẹ́ gidi kò nílò ọ̀rọ̀ aṣínà báńkì rẹ láé; bíbéèrè rẹ̀ jẹ́ àmì jìbìtì." },
      { objective: "O3", q: "Owó wo tí a yọ ló dá lórí ohun tí o kọ sórí Form W-4?", options: ["Medicare", "Social Security", "Iye owó rẹ fún wákàtí kan", "Owó-orí owó-wọlé ìjọba àpapọ̀"], answer: 3, why: "Form W-4 ló sọ fún agbanisíṣẹ́ rẹ iye owó-orí owó-wọlé ìjọba àpapọ̀ tí ó máa yọ." },
      { objective: "O3", q: "Àṣeṣe nìkan: owó-iṣẹ́ lápapọ̀ $240.00, owó tí a yọ $27.36. Kí ni owó tí ó dé ọwọ́ rẹ?", options: ["$212.64", "$267.36", "$222.64", "$213.64"], answer: 0, why: "$240.00 - $27.36 = $212.64." },
      { objective: "O3", q: "Owó-iṣẹ́ tó kéré jù ti ìjọba àpapọ̀ jẹ́ $7.25, ṣùgbọ́n ti ìlú rẹ ga jù bẹ́ẹ̀ lọ. Èwo ló kàn ọ́?", options: ["$7.25 ti ìjọba àpapọ̀", "Èyí tí ọ̀gá rẹ bá yàn", "Èyí tí ó ga jù", "Èyí tí ó kéré jù"], answer: 2, why: "Tí owó-iṣẹ́ tó kéré jù ti ìpínlẹ̀ tàbí ìlú bá ga ju ti ìjọba àpapọ̀ lọ, èyí tí ó ga jù ló kàn ọ́." },
      { objective: "O4", q: "Alábòójútó rẹ sọ pé o tò ẹrù sórí pẹpẹ lọ́nà tí kò tọ́. Kí ni ìdáhùn tó dára jù?", options: ["Jiyàn pé kò burú", "Sọ pé \"O ṣé tí o sọ fún mi. Ṣé o lè fi ọ̀nà tó tọ́ hàn mí?\"", "Má kà á sí", "Ráhùn sí àwọn oníbàárà"], answer: 1, why: "Gbígba ìmọ̀ràn ní ìfọ̀kànbalẹ̀ àti bíbéèrè bí o ṣe máa tún un ṣe ni ohun tí ọ̀gá ń retí." },
      { objective: "O4", q: "Ìgbà wo ló dára láti lo fóònù rẹ nígbà iṣẹ́?", options: ["Nígbàkígbà tí iṣẹ́ kò bá pọ̀", "Nígbà tí iṣẹ́ náà bá gbà á láàyè nìkan", "Nígbàkígbà tí oníbàárà kò bá ń wò", "Ìgbàkígbà tí o bá ṣì ń ṣiṣẹ́"], answer: 1, why: "Pa fóònù rẹ tì nígbà iṣẹ́ àyàfi tí ibi iṣẹ́ rẹ bá gbà á láàyè." },
      { objective: "O4", q: "O nílò ìsinmi ní Ọjọ́ Àbámẹ́ta kan fún ayẹyẹ ẹbí ní oṣù tó ń bọ̀. Kí ni o máa ṣe?", options: ["Tètè béèrè lọ́wọ́ ọ̀gá rẹ, ní ọ̀nà tí ibi iṣẹ́ rẹ ń béèrè", "Kàn má wá síṣẹ́", "Sọ fún alábàáṣiṣẹ́ kan nìkan", "Béèrè ní alẹ́ ọjọ́ tó ṣáájú"], answer: 0, why: "Bíbéèrè fún ìsinmi ní kùtùkùtù ń fún ọ̀gá rẹ ní àkókò láti ṣètò." },
      { objective: "O5", q: "O jẹ́ ọmọ ọdún 16, wọ́n sì ní kí o lo ẹ̀rọ gígé ẹran (meat slicer). Kí ló yẹ kí o mọ̀?", options: ["Kò burú lẹ́yìn ìgbìyànjú kan", "Kò burú tí oníbàárà kankan kò bá rí ọ", "Ìpinnu tìrẹ ni", "Ẹ̀rọ gígé ẹran tí ń lo agbára iná jẹ́ iṣẹ́ eléwu tí a kà léèwọ̀ fún ẹni tí kò tíì pé 18, nítorí náà sọ̀rọ̀ sókè"], answer: 3, why: "Òfin iṣẹ́ eléwu ti ìjọba àpapọ̀ kà á léèwọ̀ fún òṣìṣẹ́ tí kò tíì pé 18 láti lo ẹ̀rọ gígé ẹran tí ń lo agbára iná." },
      { objective: "O5", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ tó wọ́pọ̀ nígbà tí nǹkan kan níbi iṣẹ́ kò láàbò ṣùgbọ́n ẹnikẹ́ni kò tíì farapa?", options: ["Pe àwọn oníròyìn", "Fi sórí ayélujára", "Sọ fún alábòójútó rẹ ní ìfọ̀kànbalẹ̀", "Fi iṣẹ́ sílẹ̀ láìsọ nǹkan kan"], answer: 2, why: "Sísọ fún alábòójútó rẹ fún wọn ní àǹfààní láti tún un ṣe; lẹ́yìn náà lọ sókè tí wọn kò bá tún un ṣe." },
      { objective: "O1", q: "O jẹ́ ọmọ ọdún 16. Wákàtí mélòó ní ọ̀sẹ̀ ni o lè ṣiṣẹ́ lábẹ́ òfin ìjọba àpapọ̀?", options: ["18", "40", "Kò sí ààlà ti ìjọba àpapọ̀, ṣùgbọ́n ṣàyẹ̀wò ìpínlẹ̀ rẹ", "8"], answer: 2, why: "Òfin ìjọba àpapọ̀ kò fi ààlà sí wákàtí ní ọmọ ọdún 16 àti 17, ṣùgbọ́n ìpínlẹ̀ rẹ lè ṣe bẹ́ẹ̀." },
      { objective: "O4", q: "Kí ni ọ̀gá sábà máa ń bìkítà nípa rẹ̀ jù nínú òṣìṣẹ́ iṣẹ́ àkọ́kọ́?", options: ["Aṣọ olówó iyebíye", "Ọ̀pọ̀ ọdún ìrírí", "Mímọ olówó ilé-iṣẹ́", "Dídé lásìkò àti jíjẹ́ ẹni tí a lè gbẹ́kẹ̀ lé"], answer: 3, why: "Ọ̀gá iṣẹ́ àkọ́kọ́ máa ń wá ìwà tí a lè gbẹ́kẹ̀ lé jù, bí dídé lásìkò àti títẹ̀lé ìtọ́ni." },
      { objective: "O5", q: "Owó-iṣẹ́ rẹ kò tọ́, alábòójútó méjì kò sì tún un ṣe. Nọ́mbà wo ni o lè pè?", options: ["Wage and Hour Division, 1-866-487-9243", "OSHA nìkan", "911", "IRS"], answer: 0, why: "Wage and Hour Division ń bójú tó ẹ̀sùn nípa owó-iṣẹ́, wákàtí àti iṣẹ́ ọmọdé." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 1, 2, 3, 4, 6, 9, 15] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Wákàtí àti iṣẹ́ ti di ṣíṣàyẹ̀wò", objective: "O1", notYet: "Kò kọ òfin ọjọ́ orí sílẹ̀, tàbí kò ṣàkíyèsí àkókò iṣẹ́ tàbí iṣẹ́ tí ó lòdì sí òfin.", meets: "Ó ṣàyẹ̀wò àkókò iṣẹ́ àti iṣẹ́ kọ̀ọ̀kan pẹ̀lú òfin ìjọba àpapọ̀ àti ti ìpínlẹ̀, ó sì dárúkọ ojú-òpó ìjọba náà.", exceeds: "Ó tún kọ òfin ìpínlẹ̀ kan tí ó le ju ti ìjọba àpapọ̀ lọ àti bí ó ṣe yí àkókò iṣẹ́ padà." },
      { name: "Ìwé ti wà ní sẹpẹ́", objective: "O2", notYet: "Àkọsílẹ̀ náà kò ní Form I-9, Form W-4 tàbí ìbéèrè nípa ìwé àṣẹ iṣẹ́ ìpínlẹ̀.", meets: "Ó kọ ìwé àṣẹ iṣẹ́ (tí ó bá pọndandan), ìwé ìdánimọ̀ fún Form I-9 àti Form W-4, àti ibi tí a ti máa rí ọ̀kọ̀ọ̀kan.", exceeds: "Ó tún kọ bí a ṣe ń pa nọ́mbà àdáni mọ́ láìléwu àti àmì jìbìtì iṣẹ́ kan." },
      { name: "Ìwé ìsanwó ti di ṣíṣàyẹ̀wò", objective: "O3", notYet: "Owó-iṣẹ́ lápapọ̀, owó tí a yọ tàbí owó tí ó dé ọwọ́ kò sí, tàbí ìṣirò náà kò tọ́.", meets: "Ó kọ owó-iṣẹ́ lápapọ̀, owó kọ̀ọ̀kan tí a yọ àti owó tí ó dé ọwọ́, ìṣirò náà sì tọ́ dé kọ́bọ̀ (cent).", exceeds: "Ó tún fi wákàtí ìwé ìsanwó wé timesheet tí a kọ sílẹ̀, ó sì sọ ohun tí a máa ṣe tí wọ́n bá yàtọ̀." },
      { name: "Ohun tí ọ̀gá ń retí", objective: "O4", notYet: "Ìwà tí ó kọ kò ṣe kedere, bí \"jẹ́ ọmọ rere\".", meets: "Ìwà mẹ́ta tí ó ṣe kedere, bí dídé ní kùtùkùtù, sísọ ṣáájú tí o kò bá lè wá, àti bíbéèrè tí kò bá dá ọ lójú.", exceeds: "Ìwà kọ̀ọ̀kan ní ọ̀rọ̀ kúkúrú tí akẹ́kọ̀ọ́ máa sọ." },
      { name: "Ètò ààbò", objective: "O5", notYet: "Kò sí ètò, tàbí ètò náà fo sísọ fún alábòójútó tàbí dídárúkọ àjọ ìjọba.", meets: "Ó dárúkọ ẹni tí a máa kọ́kọ́ sọ fún, àgbàlagbà tí a gbẹ́kẹ̀ lé, àti OSHA tàbí Wage and Hour Division pẹ̀lú nọ́mbà fóònù.", exceeds: "Ó tún sọ pé kí a kọ́kọ́ pe 911 ní pàjáwìrì, ó sì kọ àwọn àmì ìkìlọ̀ fún iṣẹ́ akẹ́kọ̀ọ́ fúnra rẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ iṣẹ́, ìkọ́ṣẹ́ (internship) tàbí iṣẹ́ ọ̀dọ́ ìgbà ẹ̀ẹ̀rùn láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé tàbí àkọsílẹ̀ ètò)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì wà nínú iṣẹ́ náà lẹ́yìn ọjọ́ 60, àti iye àwọn tí wọ́n rí ẹlẹ́rìí rere",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ti fi ìwé ìsanwó wé wákàtí tiwọn ní ó kéré tán ẹ̀ẹ̀kan (àtẹ̀lé ọjọ́ 30)",
      "Àwọn ètò ọ̀dọ́ àti agbanisíṣẹ́ ń ròyìn pé ìṣòro àkókò iṣẹ́ tàbí iṣẹ́ tí ó lòdì sí òfin iṣẹ́ ọmọdé ti dín kù"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì láti ṣí ojú-òpó Ẹ̀ka Iṣẹ́ àti ti ìpínlẹ̀, tàbí ẹ̀dà tí a tẹ̀ jáde ti ojú-òpó òfin iṣẹ́ ọmọdé ìpínlẹ̀",
      "Ìwé, gègé àti ẹ̀rọ ìṣírò (calculator fóònù náà ṣiṣẹ́)",
      "Form W-4 àti Form I-9 òfìfo tí a tẹ̀ jáde láti irs.gov àti uscis.gov láti wò (má ṣe kọ nọ́mbà gidi sí i nínú kíláàsì)",
      "Ìwé ìsanwó àpẹẹrẹ àròsọ fún àṣeṣe",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ṣáájú ẹ̀kọ́ náà, wá ojú-òpó òfin iṣẹ́ ọmọdé àti owó-iṣẹ́ tó kéré jù ti ìpínlẹ̀ rẹ, kí o sì tẹ àwọn òfin pàtàkì jáde; wọ́n yàtọ̀ láti ìpínlẹ̀ dé ìpínlẹ̀, wọ́n sì máa ń yí padà.",
      "Nínú ètò iṣẹ́ ọ̀dọ́ ìgbà ẹ̀ẹ̀rùn: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan, kí ẹ sì ṣe àwọn iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" ní méjì-méjì.",
      "Má ṣe gba nọ́mbà Social Security gidi, ẹ̀dà ìwé ìdánimọ̀ tàbí ìwé ìsanwó gidi láé; lo àpẹẹrẹ àròsọ.",
      "Ẹ ṣe eré ìṣe (role-play) ọ̀rọ̀ sísọ ṣáájú tí o kò bá lè wá àti ti gbígba ìmọ̀ràn ní Ẹ̀kọ́ 3, àti àwọn ìgbésẹ̀ sísọ̀rọ̀ sókè ní Ẹ̀kọ́ 6.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan.",
      "Tí akẹ́kọ̀ọ́ kan bá ṣàlàyé iṣẹ́ gidi kan tí kò láàbò tàbí tí ó lòdì sí òfin, ràn án lọ́wọ́ láti tẹ̀lé àwọn ìgbésẹ̀ ní Ẹ̀kọ́ 6, kí o sì mú òbí tàbí alágbàtọ́ rẹ̀ wọlé."
    ]
  }
};
