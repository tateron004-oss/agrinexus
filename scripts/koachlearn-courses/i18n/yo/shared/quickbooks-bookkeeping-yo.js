"use strict";

// Koach Learn course (Yoruba translation of shared/quickbooks-bookkeeping.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CERTIPORT = { name: "Certiport (Pearson VUE): Intuit certifications, including QuickBooks Certified User and Intuit Certified Bookkeeping Professional", url: "https://certiport.pearsonvue.com/Certifications/QuickBooks/Certified-User/Overview" };
const ACADEMY = { name: "Intuit Academy (Intuit's training and certification site)", url: "https://academy.intuit.com/" };
const TESTDRIVE = { name: "Intuit QuickBooks help: Test drive and practice using QuickBooks Online", url: "https://quickbooks.intuit.com/learn-support/en-us/help-article/small-business-processes/test-drive-quickbooks-online/L9C12ODlA_US_en_US" };
const PROADVISOR = { name: "QuickBooks ProAdvisor training and certification (for accountants)", url: "https://quickbooks.intuit.com/accountants/training-certification/" };

module.exports = {
  id: "quickbooks-bookkeeping-yo",
  lang: "yo",
  translationOf: "quickbooks-bookkeeping",
  category: "Workforce Development",
  name: "Ìṣírò Owó Iṣẹ́ pẹ̀lú QuickBooks",
  skills: "Ṣíṣe àkọsílẹ̀ àwọn àkáǹtì, Kíkọ ìwé owó (invoice) àti ìsanwó sílẹ̀, Kíkọ bill àti ìnáwó sílẹ̀, Ṣíṣàyẹ̀wò àkáǹtì báńkì (reconcile), Kíka àwọn ìròyìn pàtàkì, Ṣíṣe ètò fún ìwé-ẹ̀rí QuickBooks",
  outcome: "ṣe ìṣírò owó iṣẹ́ kékeré kan nínú QuickBooks Online fún oṣù kan: pín owó sí àkáǹtì tó tọ́, kọ ọjà tí a tà, ìsanwó, bill àti ìnáwó sílẹ̀, so àkọsílẹ̀ pọ̀ mọ́ ti báńkì kí o sì ṣàyẹ̀wò rẹ̀ (reconcile), ṣe àwọn ìròyìn pàtàkì, kí o sì tẹ̀lé ètò kan láti gba ìwé-ẹ̀rí QuickBooks.",
  about: [
    "Ó fẹ́rẹ̀ẹ́ jẹ́ pé gbogbo iṣẹ́ kékeré, ṣọ́ọ̀ṣì àti àjọ àìlérè ló nílò ẹnì kan tí ó máa ṣe ìṣírò owó wọn, ọ̀pọ̀ nínú wọn sì ń lo QuickBooks. Ìṣírò owó iṣẹ́ (bookkeeping) lè jẹ́ iṣẹ́ ojoojúmọ́, iṣẹ́ àbọ̀ọ̀ṣẹ́ tí o ń ṣe nílé, tàbí iṣẹ́ ẹ̀gbẹ́ tí o ń ṣe fún oníbàárà púpọ̀. Ẹ̀kọ́ yìí wà fún àwọn tó ń wá iṣẹ́, àwọn òṣìṣẹ́ ọ́fíìsì tó fẹ́ ipò tó dára jù, àwọn olóṣòwò kékeré àti àwọn olùyọ̀ǹda ní àjọ àìlérè.",
    "O máa ṣe iṣẹ́ gidi náà: àkọsílẹ̀ àwọn àkáǹtì, ìwé owó (invoice) àti ìsanwó oníbàárà, bill àti ìnáwó, bank feed, ṣíṣàyẹ̀wò àkáǹtì báńkì (reconciliation), ìwé èrè àti àdánù àti balance sheet, àti àkọsílẹ̀ ohun tí a ń ṣe ní òpin oṣù. O máa fi QuickBooks Online test drive ti Intuit ṣe àṣeṣe: iṣẹ́ àpẹẹrẹ kan tí o lè ṣí nínú browser, níbi tí kò sí ohun tí o ṣe tí a máa fi pamọ́. Tí o kò bá ní kọ̀mpútà, o lè ṣe é lórí ìwé.",
    "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀ fún iṣẹ́ ìṣírò owó àti fún àwọn ìwé-ẹ̀rí Intuit bí QuickBooks Certified User àti Intuit Certified Bookkeeping Professional, tí Certiport ń ṣe ìdánwò wọn. Kò fún ọ ní ìwé-ẹ̀rí kankan; o máa gbà á nípa yíyege ìdánwò gidi. Wo àwọn ojú-ewé gidi fún àlàyé àti owó ìdánwò ti ìsinsìnyí.",
    "Tí o bá ti ṣe \"Ìpìlẹ̀ Ìṣírò Owó Iṣẹ́ (Bookkeeping)\", èyí ni ìgbésẹ̀ tó kàn. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" àti ìdánwò kékeré ìbéèrè méjì. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 wà ní ìparí, àti iṣẹ́ ìkẹyìn tí o lè fi hàn agbanisíṣẹ́ tàbí oníbàárà."
  ],
  finalTask: "Ṣe àkójọ ìwé òpin oṣù QuickBooks rẹ fún iṣẹ́ àpẹẹrẹ kan (iṣẹ́ ìmọ́tótó, ọkọ̀ oúnjẹ (food truck) tàbí àjọ àìlérè kékeré): (1) àkọsílẹ̀ àwọn àkáǹtì tí ó ní ó kéré tán àkáǹtì 12, ọ̀kọ̀ọ̀kan pẹ̀lú irú rẹ̀: owó tó wọlé, ìnáwó, dúkìá, gbèsè tàbí ìpín olówó; (2) àkọsílẹ̀ ó kéré tán ìṣòwò 10 tí o kọ sínú QuickBooks Online test drive tàbí sórí ìwé (ó kéré tán ìwé owó 3, ìsanwó oníbàárà 2, àti bill tàbí ìnáwó 4), ọ̀kọ̀ọ̀kan pẹ̀lú ọjọ́, oníbàárà tàbí olùtajà, àkáǹtì àti iye owó; (3) ìṣàyẹ̀wò báńkì (reconciliation) fún oṣù náà tí ó parí pẹ̀lú ìyàtọ̀ òdo, tàbí àkọsílẹ̀ ohun tí kò tíì tọ́ àti ìdí rẹ̀; (4) àkópọ̀ ìpínrọ̀ kan nípa èrè àti àdánù oṣù náà; àti (5) ètò ọjọ́ 60 fún ìwé-ẹ̀rí pẹ̀lú àwọn ọjọ́: ìwé-ẹ̀rí Intuit wo ni o máa múra sílẹ̀ fún, ìgbà wo ni o máa wo ojú-ewé gidi rẹ̀, àti ìgbà wo ni o máa ṣe ìdánwò àṣeṣe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà àti ọ̀dọ́ tí wọ́n fẹ́ iṣẹ́ ọ́fíìsì tàbí iṣẹ́ ìṣírò owó: àwọn tó ń wá iṣẹ́, àwọn òṣìṣẹ́ ọ́fíìsì àti ilé ìtajà tó fẹ́ gòkè, àwọn tó ń padà sílé láti ẹ̀wọ̀n, àwọn aṣíkiri tí wọ́n ní ìrírí iṣẹ́ òwò, àwọn olóṣòwò kékeré tó ń ṣe ìṣírò owó ara wọn, àti àwọn olùyọ̀ǹda ní àjọ àìlérè tí wọ́n ń bójú tó owó.",
    startingPoint: "Wọ́n lè lo browser, wọ́n sì lè ṣe ìṣírò ojoojúmọ́ pẹ̀lú ẹ̀rọ ìṣirò. Àwọn kan ti kọ owó sílẹ̀ lórí ìwé tàbí spreadsheet rí. Ọ̀pọ̀ jù lọ kò tíì lo QuickBooks rí, wọn kò sì tíì gbọ́ nípa àkọsílẹ̀ àwọn àkáǹtì, reconciliation tàbí balance sheet.",
    gap: "Àwọn agbanisíṣẹ́ àti oníbàárà fẹ́ olùṣírò owó tí ó ti mọ bí QuickBooks ṣe ń kọ ọjà tí a tà, bill àti ìṣòwò báńkì sílẹ̀, tí ó sì lè mú kí àkọsílẹ̀ bá ti báńkì mu lóṣooṣù. Láìsí èyí, àṣìṣe kékeré máa ń kó jọ di owó orí tí kò tọ́, bill tí a kò san àti ìwé owó tí a kò gba owó rẹ̀. Kíkọ́ àwọn ìgbésẹ̀ àti àwọn ìròyìn, àti níní ètò láti gba ìwé-ẹ̀rí Intuit, ń mú kí ó rọrùn láti gba akẹ́kọ̀ọ́ síṣẹ́, ó sì ń jẹ́ kí ó lè sin oníbàárà tirẹ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú (nǹkan bí kíláàsì 7 sí 8); a ṣàlàyé gbogbo ọ̀rọ̀ ìṣírò owó",
      "Ẹ̀rọ: kọ̀mpútà tàbí tablet tí ó ní browser fún test drive; gbogbo àṣeṣe tún ṣeé ṣe lórí ìwé",
      "Owó: test drive ń ṣí nínú browser láìjẹ́ pé o ra QuickBooks; kò fi àyípadà pamọ́, nítorí náà àwọn akẹ́kọ̀ọ́ ń kọ àkọsílẹ̀",
      "QuickBooks máa ń yí ojú-iboju rẹ̀ padà léraléra, nítorí náà ẹ̀kọ́ náà ń kọ́ni ní iṣẹ́ àti orúkọ ìròyìn, kì í ṣe ọ̀nà mẹ́nù gangan",
      "Ìkọ̀kọ̀: àṣeṣe ń lo iṣẹ́ àpẹẹrẹ tàbí nọ́mbà àhùsọ, kì í ṣe ọ̀rọ̀ aṣínà báńkì gidi tàbí nọ́mbà àkáǹtì gidi láéláé",
      "Òfin owó orí ń yí padà, ó sì yàtọ̀ láti ibì kan sí ibòmíì: àwọn ẹ̀kọ́ ń tọ́ka sí irs.gov tàbí ọ̀jọ̀gbọ́n owó orí, wọn kò sì fúnni ní ìmọ̀ràn owó orí"
    ],
    prerequisites: "Kò sí, ṣùgbọ́n \"Ìpìlẹ̀ Ìṣírò Owó Iṣẹ́ (Bookkeeping)\" tàbí \"Excel àti Spreadsheet fún Iṣẹ́\" ń ran àwọn akẹ́kọ̀ọ́ tí kò tíì kọ owó tó wọlé àti tó jáde sílẹ̀ rí lọ́wọ́."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní ìpolówó iṣẹ́ ìṣírò owó tàbí ìbéèrè oníbàárà kan", action: "ka àwọn iṣẹ́ pàtàkì olùṣírò owó QuickBooks, kí o sì dárúkọ ìwé-ẹ̀rí Intuit tí ó bá iṣẹ́ náà mu", standard: "kí o dárúkọ ó kéré tán iṣẹ́ mẹ́rin àti ojú-ewé gidi tí a ti ń ṣàyẹ̀wò ìwé-ẹ̀rí náà" },
    { id: "O2", condition: "Tí a bá fún ọ ní àkọsílẹ̀ bí owó ṣe ń wọlé àti jáde nínú iṣẹ́ kékeré kan", action: "pín nǹkan kọ̀ọ̀kan sí irú àkáǹtì tó tọ́ nínú àkọsílẹ̀ àwọn àkáǹtì", standard: "kí o fi ó kéré tán 9 nínú 10 sí irú àkáǹtì tó tọ́" },
    { id: "O3", condition: "Tí a bá fún ọ ní ọjà tí a tà, oníbàárà kan àti ìsanwó kan", action: "kọ ìwé owó (invoice) tàbí ìwé ẹ̀rí ọjà tí a tà (sales receipt) àti ìsanwó oníbàárà sínú QuickBooks", standard: "pẹ̀lú oníbàárà, ọjọ́, iye owó àti àkáǹtì owó tó wọlé tó tọ́, láìsí ìwé owó tí ó ṣì ṣí sílẹ̀ lẹ́yìn tí a ti san án" },
    { id: "O4", condition: "Tí a bá fún ọ ní bill kan, ìwé ẹ̀rí ìsanwó kan àti olùtajà kan", action: "kọ bill náà, ìnáwó náà àti ìsanwó bill náà sínú QuickBooks", standard: "pẹ̀lú olùtajà, ọjọ́, iye owó àti àkáǹtì ìnáwó tó tọ́, pẹ̀lú ìwé ẹ̀rí tí a so mọ́ ọn tàbí tí a kọ nọ́mbà rẹ̀ sílẹ̀" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìṣòwò báńkì oṣù kan àti ìwé àkọsílẹ̀ báńkì (bank statement)", action: "so bank feed pọ̀ mọ́ àkọsílẹ̀ rẹ kí o sì ṣàyẹ̀wò àkáǹtì báńkì náà (reconcile)", standard: "kí ó parí pẹ̀lú ìyàtọ̀ òdo, tàbí àkọsílẹ̀ ohun tí kò tíì tọ́" },
    { id: "O6", condition: "Ní òpin oṣù kan", action: "ṣe ìwé èrè àti àdánù, balance sheet àti ìròyìn ìwé owó tí a kò tíì san, kí o sì ṣàlàyé wọn", standard: "kí o sọ èrè tàbí àdánù oṣù náà àti àwọn tí wọ́n ṣì jẹ owó" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìbẹ̀rẹ̀ àti kíkọ ọjà tí a tà sílẹ̀",
      lessons: [
        {
          title: "Iṣẹ́ olùṣírò owó QuickBooks àti ọ̀nà tí ó lọ síbẹ̀",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ka àwọn iṣẹ́ pàtàkì olùṣírò owó QuickBooks, kí o sì dárúkọ ìwé-ẹ̀rí kan tí ó lè ràn ọ́ lọ́wọ́ láti ríṣẹ́.",
          text: [
            "Olùṣírò owó (bookkeeper) ń kọ owó iṣẹ́ kan sílẹ̀ kí ẹni tó ni iṣẹ́ náà lè mọ ipò rẹ̀ nígbà gbogbo. Nínú QuickBooks, èyí túmọ̀ sí: fífi ìwé owó (invoice) ránṣẹ́ àti kíkọ ìsanwó oníbàárà sílẹ̀, kíkọ bill àti ìnáwó sílẹ̀, ṣíṣàyẹ̀wò bank feed, ṣíṣàyẹ̀wò àkáǹtì báńkì (reconcile) lóṣooṣù, ṣíṣe àwọn ìròyìn, àti pípa ìwé ẹ̀rí ìsanwó mọ́. Àwọn olùṣírò owó ń ṣiṣẹ́ fún ilé-iṣẹ́ kan, fún ilé-iṣẹ́ akọ̀wé owó, tàbí fún oníbàárà kékeré púpọ̀ gẹ́gẹ́ bí iṣẹ́ ara wọn. Àwọn ṣọ́ọ̀ṣì àti àjọ àìlérè náà nílò wọn.",
            "QuickBooks Online ni ẹ̀dà Intuit tí a ń lò nínú browser. QuickBooks Desktop ni a ń fi sórí kọ̀mpútà. Ọ̀pọ̀ jù lọ àwọn oníbàárà iṣẹ́ kékeré tuntun ń lo QuickBooks Online, nítorí náà ẹ̀kọ́ yìí ń lò ó, ṣùgbọ́n èrò inú méjèèjì jẹ́ ọ̀kan náà.",
            "Ìwé-ẹ̀rí Intuit méjì ló bá ẹ̀kọ́ yìí mu. QuickBooks Certified User ń fi hàn pé o lè lo QuickBooks. Intuit Certified Bookkeeping Professional ń fi hàn pé o mọ ìpìlẹ̀ ìṣírò owó iṣẹ́. Certiport, ilé-iṣẹ́ Pearson VUE, ló ń ṣe ìdánwò méjèèjì, Intuit Academy sì ń kọ́ni. Àwọn akọ̀wé owó (accountant) tún lè gba ìwé-ẹ̀rí QuickBooks ProAdvisor. Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀; kò fún ọ ní ìwé-ẹ̀rí kankan. Owó ìdánwò, ẹ̀tọ́ láti ṣe é àti àlàyé ìdánwò ń yí padà, nítorí náà wo àwọn ojú-ewé gidi.",
            "Olùṣírò owó kì í ṣe olùṣe owó orí (tax preparer) tàbí akọ̀wé owó tí a fọwọ́ sí (CPA). Ìwọ ń pa àkọsílẹ̀ mọ́ ní mímọ́; ìbéèrè nípa owó orí ń lọ sọ́dọ̀ ọ̀jọ̀gbọ́n owó orí tàbí irs.gov."
          ],
          words: [["Olùṣírò owó (bookkeeper)", "ẹni tí ó ń kọ owó tó wọlé àti owó tó jáde nínú iṣẹ́ kan sílẹ̀, tí ó sì ń rí i pé àkọsílẹ̀ náà tọ́."], ["QuickBooks Online", "ètò ìṣírò owó ti Intuit tí ó ń ṣiṣẹ́ nínú browser."], ["Ìwé-ẹ̀rí (credential)", "ìwé tí ó ń fi hàn pé o yege ìdánwò gidi kan."], ["Certiport", "ilé-iṣẹ́ Pearson VUE tí ó ń ṣe ìdánwò ìwé-ẹ̀rí Intuit."], ["CPA", "certified public accountant: akọ̀wé owó tí ó ní ìwé àṣẹ, tí ó lè ṣe iṣẹ́ tí olùṣírò owó kò lè ṣe, bí ṣíṣàyẹ̀wò ìwé owó ilé-iṣẹ́ (audit)."]],
          slides: [
            { title: "Ohun tí olùṣírò owó QuickBooks ń ṣe", bullets: ["Ìwé owó (invoice) àti ìsanwó oníbàárà", "Bill àti ìnáwó", "Bank feed àti ìṣàyẹ̀wò báńkì lóṣooṣù", "Àwọn ìròyìn àti ìwé ẹ̀rí ìsanwó"] },
            { title: "Ibi tí olùṣírò owó ń ṣiṣẹ́", bullets: ["Ilé-iṣẹ́ kan tàbí ilé-iṣẹ́ akọ̀wé owó", "Oníbàárà kékeré púpọ̀, gẹ́gẹ́ bí iṣẹ́ ara rẹ", "Àwọn ṣọ́ọ̀ṣì àti àjọ àìlérè"] },
            { title: "Ìwé-ẹ̀rí tí ó lè ràn ọ́ lọ́wọ́", bullets: ["QuickBooks Certified User", "Intuit Certified Bookkeeping Professional", "Certiport ló ń ṣe ìdánwò; wo ojú-ewé gidi"] },
            { title: "Mọ ipa tìrẹ", bullets: ["Ìwọ ń pa àkọsílẹ̀ mọ́ ní mímọ́", "Ìbéèrè owó orí ń lọ sọ́dọ̀ ọ̀jọ̀gbọ́n owó orí tàbí irs.gov", "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀; ìdánwò ló ń fúnni ní ìwé-ẹ̀rí"] }
          ],
          sources: [CERTIPORT, ACADEMY, PROADVISOR],
          tryIt: "Wá ìpolówó iṣẹ́ ìṣírò owó kan lórí ayélujára (wá \"bookkeeper QuickBooks\" lórí ojú-òpó iṣẹ́ kan). Kọ iṣẹ́ mẹ́rin tí ó kà sílẹ̀, àti bóyá ó béèrè ìwé-ẹ̀rí QuickBooks. Lẹ́yìn náà ṣí ojú-ewé Certiport nínú àwọn orísun, kí o sì kọ orúkọ ìwé-ẹ̀rí Intuit méjì tí ó bá a mu.",
          youCanNow: "ka ohun tí olùṣírò owó QuickBooks ń ṣe, kí o sì dárúkọ ìwé-ẹ̀rí kan tí ó bá iṣẹ́ náà mu.",
          quickCheck: [
            { objective: "O1", q: "Iṣẹ́ wo ló jẹ́ apá kan iṣẹ́ olùṣírò owó lóṣooṣù?", options: ["Fífọwọ́ sí ìwé owó orí ilé-iṣẹ́ gẹ́gẹ́ bí CPA", "Ṣíṣàyẹ̀wò àkáǹtì báńkì (reconcile)", "Ṣíṣàyẹ̀wò ìwé owó ilé-iṣẹ́ míì (audit)", "Fífúnni ní ìmọ̀ràn ìdókòwò"], answer: 1, why: "Ṣíṣàyẹ̀wò báńkì lóṣooṣù jẹ́ iṣẹ́ pàtàkì olùṣírò owó." },
            { objective: "O1", q: "Ta ló ń ṣe ìdánwò QuickBooks Certified User?", options: ["IRS", "Ọ́fíìsì iṣẹ́ ìpínlẹ̀ rẹ", "Ẹnikẹ́ni tí ó ń lo QuickBooks", "Certiport, fún Intuit"], answer: 3, why: "Certiport, ilé-iṣẹ́ Pearson VUE, ló ń ṣe ìdánwò ìwé-ẹ̀rí Intuit." }
          ]
        },
        {
          title: "Àkọsílẹ̀ àwọn àkáǹtì àti àkọsílẹ̀ ẹ̀gbẹ́ méjì",
          objectives: ["O2"],
          minutes: 6,
          goal: "Pín bí owó ṣe ń wọlé àti jáde nínú iṣẹ́ kan sí irú àkáǹtì márùn-ún.",
          text: [
            "Àkọsílẹ̀ àwọn àkáǹtì (chart of accounts) ni àkọsílẹ̀ gbogbo ibi tí a lè pín owó sí nínú QuickBooks. Àkáǹtì kọ̀ọ̀kan jẹ́ ọ̀kan nínú irú márùn-ún. Owó tó wọlé (income): owó tí a rí, bí owó ọjà tí a tà tàbí ẹ̀bùn owó. Ìnáwó (expenses): owó tí a ná láti ṣe iṣẹ́ náà, bí ohun èlò, owó ilé àti epo. Dúkìá (assets): ohun tí iṣẹ́ náà ní tàbí tí wọ́n jẹ ẹ́, bí àkáǹtì báńkì, ẹ̀rọ àti owó tí oníbàárà ṣì jẹ. Gbèsè (liabilities): owó tí iṣẹ́ náà jẹ, bí owó tí a yá, káàdì ìyáwó (credit card) tàbí bill tí a kò tíì san. Ìpín olówó (equity): ìpín ẹni tó ni iṣẹ́, pẹ̀lú owó tí ó fi sínú rẹ̀ tàbí tí ó mú jáde.",
            "Gbogbo àkọsílẹ̀ ló ń kan ó kéré tán àkáǹtì méjì. Èyí la ń pè ní double-entry bookkeeping (ìṣírò ẹ̀gbẹ́ méjì). Nígbà tí o bá fi ìwé owó $200 ránṣẹ́, owó tó wọlé ń gòkè, owó tí oníbàárà jẹ ọ́ (accounts receivable) náà sì ń gòkè. Nígbà tí oníbàárà bá sanwó, accounts receivable ń lọ sílẹ̀, owó báńkì sì ń gòkè. QuickBooks ń ṣe ẹ̀gbẹ́ kejì fún ọ tí o bá lo fọ́ọ̀mù tó tọ́, ìdí nìyí tí yíyan fọ́ọ̀mù àti àkáǹtì tó tọ́ fi ṣe pàtàkì.",
            "QuickBooks ń fún gbogbo ilé-iṣẹ́ tuntun ní àkọsílẹ̀ àwọn àkáǹtì ìbẹ̀rẹ̀ tí ó bá irú iṣẹ́ wọn mu. Olùṣírò owó ń tún un ṣe: ó ń fi àwọn àkáǹtì tí iṣẹ́ náà ń lò gan-an kún un, ó ń yí orúkọ àwọn tí kò yé padà, ó sì ń jẹ́ kí orúkọ wọn wà bákan náà lóṣooṣù. Àjọ àìlérè kan lè fi àkáǹtì bí Donations (ẹ̀bùn owó), Grants (owó ìrànlọ́wọ́) àti Program supplies (ohun èlò ètò) kún un.",
            "Nínú test drive, wá \"chart of accounts\" láti ṣí àkọsílẹ̀ náà kí o sì rí irú àkáǹtì kọ̀ọ̀kan."
          ],
          steps: ["Ṣí àkọsílẹ̀ àwọn àkáǹtì (wá a tí o kò bá rí i).", "Ka irú àkáǹtì kọ̀ọ̀kan: owó tó wọlé, ìnáwó, dúkìá, gbèsè tàbí ìpín olówó.", "Fi àwọn àkáǹtì tí iṣẹ́ náà ń lò gan-an kún un.", "Yí orúkọ àwọn àkáǹtì tí kò yé padà kí ẹnikẹ́ni lè lóye wọn.", "Lo àkáǹtì kan náà nígbà gbogbo fún irú owó kan náà."],
          words: [["Àkọsílẹ̀ àwọn àkáǹtì (chart of accounts)", "àkọsílẹ̀ gbogbo àkáǹtì tí a lè pín owó sí."], ["Dúkìá (asset)", "ohun tí iṣẹ́ náà ní tàbí tí wọ́n jẹ ẹ́, bí owó nínú báńkì tàbí ẹ̀rọ."], ["Gbèsè (liability)", "owó tí iṣẹ́ náà jẹ, bí owó tí a yá tàbí bill tí a kò tíì san."], ["Ìpín olówó (equity)", "ìpín ẹni tó ni iṣẹ́ náà."], ["Accounts receivable (A/R)", "owó tí àwọn oníbàárà jẹ iṣẹ́ náà."], ["Accounts payable (A/P)", "owó tí iṣẹ́ náà jẹ àwọn olùtajà fún bill tí a kò tíì san."], ["Double-entry (ẹ̀gbẹ́ méjì)", "gbogbo àkọsílẹ̀ ń yí ó kéré tán àkáǹtì méjì padà kí ìṣírò lè wà ní ìwọ̀ntúnwọ̀nsì."]],
          slides: [
            { title: "Irú àkáǹtì márùn-ún", bullets: ["Owó tó wọlé àti ìnáwó", "Dúkìá àti gbèsè", "Ìpín olówó: ìpín ẹni tó ni iṣẹ́"] },
            { title: "Gbogbo àkọsílẹ̀ ní ẹ̀gbẹ́ méjì", bullets: ["Ìwé owó: owó tó wọlé ń gòkè, A/R ń gòkè", "Ìsanwó: A/R ń lọ sílẹ̀, báńkì ń gòkè", "Fọ́ọ̀mù tó tọ́ ń jẹ́ kí QuickBooks ṣe méjèèjì"] },
            { title: "Tún àkọsílẹ̀ náà ṣe", bullets: ["Fi àwọn àkáǹtì tí iṣẹ́ náà ń lò kún un", "Yí orúkọ àwọn àkáǹtì tí kò yé padà", "Àkáǹtì kan náà fún irú owó kan náà"] },
            { title: "Àpẹẹrẹ àjọ àìlérè", bullets: ["Owó tó wọlé: Donations, Grants", "Ìnáwó: Program supplies, Rent"] }
          ],
          tryIt: "Lórí ìwé, ṣe ọ̀wọ̀n méjì: Nǹkan àti Irú àkáǹtì. Pín nǹkan mẹ́wàá wọ̀nyí: ohun èlò ìmọ́tótó, owó nínú àkáǹtì báńkì iṣẹ́ náà, oníbàárà tí ó jẹ $150, owó tí a yá fún ọkọ̀ akẹ́rù, owó iṣẹ́ ìmọ́tótó tí a tà, $500 tí ẹni tó ni iṣẹ́ fi sínú rẹ̀ láti bẹ̀rẹ̀, owó ilé, gbèsè lórí káàdì ìyáwó, owó ìrànlọ́wọ́ (grant) tí a gbà (fún àjọ àìlérè), àti ẹ̀rọ ìgbálẹ̀ (vacuum) tuntun kan. Lẹ́yìn náà ṣí àkọsílẹ̀ àwọn àkáǹtì nínú test drive kí o sì wo bí iṣẹ́ àpẹẹrẹ náà ṣe pín àwọn nǹkan tí ó jọ wọ́n.",
          youCanNow: "pín owó tó ń wọlé àti tó ń jáde sí àkáǹtì owó tó wọlé, ìnáwó, dúkìá, gbèsè àti ìpín olówó.",
          quickCheck: [
            { objective: "O2", q: "Iṣẹ́ kan jẹ $3,000 lórí owó tí wọ́n yá fún ọkọ̀ akẹ́rù. Irú àkáǹtì wo ni owó tí wọ́n yá náà?", options: ["Gbèsè (liability)", "Owó tó wọlé", "Ìnáwó", "Ìpín olówó"], answer: 0, why: "Owó tí iṣẹ́ náà jẹ jẹ́ gbèsè." },
            { objective: "O2", q: "Owó tí àwọn oníbàárà ṣì jẹ iṣẹ́ náà ni a ń kọ sínú:", options: ["Accounts payable", "Ìnáwó owó ilé", "Accounts receivable", "Ìpín olówó"], answer: 2, why: "Accounts receivable (A/R) ni owó tí àwọn oníbàárà jẹ." }
          ]
        },
        {
          title: "Ìwé owó, ìwé ẹ̀rí ọjà tí a tà àti ìsanwó oníbàárà",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kọ ìwé owó (invoice), ìwé ẹ̀rí ọjà tí a tà (sales receipt) àti ìsanwó oníbàárà sínú QuickBooks.",
          text: [
            "Lo ìwé owó (invoice) nígbà tí oníbàárà máa sanwó lẹ́yìn náà. Ìwé owó náà ń kọ oníbàárà, ọjọ́, ọjà tàbí iṣẹ́, iye owó àti ọjọ́ tí ó yẹ kí wọ́n san án. Lo ìwé ẹ̀rí ọjà tí a tà (sales receipt) nígbà tí oníbàárà bá sanwó lásìkò tí ó rà á, bí ọjà ọkọ̀ oúnjẹ. Méjèèjì ń kọ owó tó wọlé sílẹ̀; ìwé owó nìkan ló ń ṣẹ̀dá owó tí wọ́n jẹ (accounts receivable).",
            "Nígbà tí wọ́n bá san ìwé owó kan, kọ ìsanwó náà sí ara ìwé owó yẹn. Má ṣe ṣe ọjà tuntun, bí bẹ́ẹ̀ kọ́ a máa ka owó tó wọlé lẹ́ẹ̀mejì. QuickBooks yóò wá sàmì sí ìwé owó náà pé a ti san án. Tí oníbàárà bá sanwó lọ́wọ́ tàbí pẹ̀lú ṣẹ́ẹ̀kì, QuickBooks lè di ìsanwó náà mú títí o fi kọ owó tí o fi sí báńkì (deposit) sílẹ̀, kí deposit náà lè bá ohun tí báńkì fi hàn mu.",
            "Ṣe oníbàárà kọ̀ọ̀kan lẹ́ẹ̀kan pẹ̀lú orúkọ àti ọ̀nà tí a fi lè kàn sí wọn, kí o sì ṣe ọjà tàbí iṣẹ́ kọ̀ọ̀kan lẹ́ẹ̀kan pẹ̀lú iye owó rẹ̀ àti àkáǹtì owó tó wọlé rẹ̀. Nígbà náà gbogbo ìwé owó yóò máa lo àwọn àkáǹtì kan náà.",
            "Nínú QuickBooks Online, àwọn fọ́ọ̀mù tuntun bí ìwé owó, ìwé ẹ̀rí ọjà tí a tà àti ìsanwó ń bẹ̀rẹ̀ láti bọ́tìnnì New (+). Nínú test drive, kò sí ohun tí a fi pamọ́, nítorí náà kọ ohun tí o tẹ sílẹ̀."
          ],
          steps: ["Yan fọ́ọ̀mù: ìwé owó (wọ́n máa sanwó lẹ́yìn náà) tàbí ìwé ẹ̀rí ọjà tí a tà (wọ́n ti sanwó báyìí).", "Yan oníbàárà, tàbí fi tuntun kún un.", "Tẹ ọjọ́, ọjà tàbí iṣẹ́, iye owó àti ọjọ́ tí ó yẹ kí wọ́n san án.", "Fi fọ́ọ̀mù náà pamọ́.", "Nígbà tí oníbàárà bá san ìwé owó kan, kọ ìsanwó náà sí ara ìwé owó yẹn.", "Kọ owó tí o fi sí báńkì (deposit) sílẹ̀ tí QuickBooks bá di ìsanwó náà mú.", "Ṣàyẹ̀wò pé ìwé owó náà fi hàn báyìí pé a ti san án."],
          words: [["Ìwé owó (invoice)", "ìwé tí o fi ránṣẹ́ sí oníbàárà tí yóò sanwó lẹ́yìn náà."], ["Ìwé ẹ̀rí ọjà tí a tà (sales receipt)", "àkọsílẹ̀ ọjà tí wọ́n sanwó rẹ̀ lásìkò tí wọ́n rà á."], ["Ìsanwó oníbàárà", "àkọsílẹ̀ pé oníbàárà ti san ìwé owó kan."], ["Deposit", "owó tí a fi sí báńkì, tí ó yẹ kí ó bá ìwé àkọsílẹ̀ báńkì mu."]],
          slides: [
            { title: "Ìwé owó tàbí ìwé ẹ̀rí ọjà tí a tà?", bullets: ["Ìwé owó: oníbàárà máa sanwó lẹ́yìn náà", "Ìwé ẹ̀rí ọjà tí a tà: wọ́n sanwó lásìkò tí wọ́n rà á", "Ìwé owó nìkan ló ń ṣẹ̀dá A/R"] },
            { title: "Kọ ìsanwó sí ara ìwé owó náà", bullets: ["Má ṣe ṣe ọjà kejì fún un láéláé", "Bí bẹ́ẹ̀ kọ́, a máa ka owó tó wọlé lẹ́ẹ̀mejì", "Ìwé owó náà yóò wá fi hàn pé a ti san án"] },
            { title: "Ṣe é lẹ́ẹ̀kan, lò ó nígbà gbogbo", bullets: ["Àwọn oníbàárà pẹ̀lú ọ̀nà tí a fi lè kàn sí wọn", "Ọjà àti iṣẹ́ pẹ̀lú iye owó àti àkáǹtì owó tó wọlé"] },
            { title: "Deposit gbọ́dọ̀ bá ti báńkì mu", bullets: ["Owó lọ́wọ́ àti ṣẹ́ẹ̀kì lè dúró kí a tó fi wọ́n sí báńkì", "Kọ deposit náà kí ó lè bá ìwé àkọsílẹ̀ báńkì mu"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Ṣí QuickBooks Online test drive (link wà nínú àwọn orísun; ṣí i nínú fèrèsé browser àdáni (private window)). Ṣe ìwé owó $250 fún iṣẹ́ ọgbà (landscaping) sí oníbàárà àpẹẹrẹ kan, tí wọ́n máa san láàárín ọjọ́ 30. Lẹ́yìn náà gba ìsanwó fún ìwé owó yẹn, kí o sì ṣàyẹ̀wò pé ìwé owó náà fi hàn pé a ti san án. Kọ oníbàárà, ọjọ́, iye owó àti àkáǹtì owó tó wọlé sórí ìwé, nítorí test drive kò fi nǹkan pamọ́. O kò ní kọ̀mpútà? Ya ìwé owó àti ìsanwó náà sórí ìwé.",
          youCanNow: "kọ ìwé owó, ìwé ẹ̀rí ọjà tí a tà àti ìsanwó oníbàárà sílẹ̀ kí a lè ka owó tó wọlé lẹ́ẹ̀kan ṣoṣo.",
          quickCheck: [
            { objective: "O3", q: "Oníbàárà ọkọ̀ oúnjẹ kan sanwó ní fèrèsé. Fọ́ọ̀mù wo ni o máa lò?", options: ["Ìwé owó (invoice)", "Bill", "Ìwé ìbéèrè ọjà (purchase order)", "Ìwé ẹ̀rí ọjà tí a tà (sales receipt)"], answer: 3, why: "Ìwé ẹ̀rí ọjà tí a tà ń kọ ọjà tí wọ́n sanwó rẹ̀ lásìkò tí wọ́n rà á sílẹ̀." },
            { objective: "O3", q: "Oníbàárà kan san ìwé owó $250. Kí ni o máa kọ sílẹ̀?", options: ["Ìwé ẹ̀rí ọjà tí a tà tuntun fún $250", "Ìsanwó sí ara ìwé owó yẹn", "Bill fún $250", "Kò sí nǹkan; QuickBooks ti mọ̀"], answer: 1, why: "Kíkọ ìsanwó sí ara ìwé owó náà ń pa á dé láìka owó tó wọlé lẹ́ẹ̀mejì." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìbẹ̀rẹ̀ àti kíkọ ọjà tí a tà sílẹ̀",
        questions: [
          { objective: "O1", q: "Gbólóhùn wo nípa ẹ̀kọ́ yìí ló jẹ́ òótọ́?", options: ["Ó ń múra rẹ sílẹ̀; ìdánwò gidi ló ń fúnni ní ìwé-ẹ̀rí", "Ó ń fún ọ ní QuickBooks Certified User", "Ó ń sọ ọ́ di CPA", "Ó ń rọ́pò olùṣe owó orí"], answer: 0, why: "Ẹ̀kọ́ náà ń múra rẹ sílẹ̀; Certiport ló ń ṣe ìdánwò tí ó ń fúnni ní ìwé-ẹ̀rí." },
          { objective: "O2", q: "Owó ilé tí a san fún ṣọ́ọ̀bù jẹ́ irú àkáǹtì wo?", options: ["Dúkìá", "Gbèsè", "Ìnáwó", "Owó tó wọlé"], answer: 2, why: "Owó ilé jẹ́ owó tí a ná láti ṣe iṣẹ́ náà, nítorí náà ìnáwó ni." },
          { objective: "O2", q: "Ẹni tó ni iṣẹ́ fi $500 owó ara rẹ̀ sínú iṣẹ́ náà. Ibo ni ó ń lọ?", options: ["Owó ọjà tí a tà", "Ìpín olówó (equity)", "Accounts payable", "Ìnáwó ohun èlò"], answer: 1, why: "Owó tí ẹni tó ni iṣẹ́ fi sínú rẹ̀ jẹ́ apá kan ìpín olówó, kì í ṣe owó tó wọlé." },
          { objective: "O3", q: "Oníbàárà iṣẹ́ ìmọ́tótó kan máa sanwó láàárín ọjọ́ 30. Fọ́ọ̀mù wo ni o máa ṣe?", options: ["Ìwé ẹ̀rí ọjà tí a tà", "Bill", "Deposit", "Ìwé owó (invoice)"], answer: 3, why: "Ìwé owó wà fún oníbàárà tí yóò sanwó lẹ́yìn náà." },
          { objective: "O3", q: "Olùṣírò owó kan ṣe ọjà tuntun fún ìsanwó oníbàárà dípò kí ó kọ ìsanwó náà sí ara ìwé owó. Kí ló máa bàjẹ́?", options: ["A máa ka owó tó wọlé lẹ́ẹ̀mejì, ìwé owó náà sì máa wà ní ṣíṣí", "Kò sí ohun tí yóò bàjẹ́", "Owó báńkì máa lọ sílẹ̀", "Wọ́n máa gba owó ìtanràn lọ́wọ́ oníbàárà"], answer: 0, why: "Ìwé owó àti ọjà tuntun náà ni a máa kà sí owó tó wọlé, ìwé owó náà yóò sì ṣì dà bí ẹni pé a kò tíì san án." }
        ]
      }
    },
    {
      name: "Orí 2: Bill, báńkì àti òpin oṣù",
      lessons: [
        {
          title: "Bill, ìnáwó àti àwọn olùtajà",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kọ bill, ìnáwó àti ìsanwó bill sílẹ̀ pẹ̀lú olùtajà àti àkáǹtì tó tọ́.",
          text: [
            "Olùtajà (vendor) ni ẹnikẹ́ni tí iṣẹ́ náà ń rà nǹkan lọ́wọ́ rẹ̀: ṣọ́ọ̀bù ohun èlò, onílé, ilé-iṣẹ́ fóònù. Ṣe olùtajà kọ̀ọ̀kan lẹ́ẹ̀kan.",
            "Lo bill nígbà tí iṣẹ́ náà máa sanwó lẹ́yìn náà, bí ìwé owó olùpèsè tí ó yẹ kí a san láàárín ọjọ́ 30. Bill náà ń lọ sínú accounts payable. Nígbà tí o bá san án, kọ ìsanwó bill (bill payment) sí ara bill yẹn kí a má baà kà á lẹ́ẹ̀mejì. Lo ìnáwó (expense) nígbà tí iṣẹ́ náà bá sanwó lẹ́sẹ̀kẹsẹ̀, bí rírà nǹkan pẹ̀lú káàdì ní ṣọ́ọ̀bù irin iṣẹ́.",
            "Yan àkáǹtì ìnáwó tí ó bá ohun tí a rà mu: Supplies (ohun èlò), Fuel (epo), Rent (owó ilé), Phone (fóònù). So fọ́tò ìwé ẹ̀rí ìsanwó mọ́ ọn nínú QuickBooks, tàbí kọ nọ́mbà ìwé ẹ̀rí náà sínú memo. Ìwé ẹ̀rí ìsanwó ń ṣe ẹ̀rí fún gbogbo ìnáwó tí ẹnikẹ́ni bá béèrè lẹ́yìn náà.",
            "Tí iṣẹ́ náà bá ń san owó fún àwọn alágbàṣe (contractor), gba Form W-9 lọ́wọ́ ẹnì kọ̀ọ̀kan kí o tó sanwó, kí o sì sàmì sí wọn gẹ́gẹ́ bí alágbàṣe, nítorí pé àwọn iṣẹ́ kan gbọ́dọ̀ fi ìròyìn ránṣẹ́ nípa wọn. Àwọn òfin àti iye owó ń yí padà, nítorí náà wo irs.gov tàbí bá ọ̀jọ̀gbọ́n owó orí sọ̀rọ̀."
          ],
          steps: ["Yan olùtajà, tàbí fi tuntun kún un.", "Yan bill (sanwó lẹ́yìn náà) tàbí ìnáwó (a ti san án báyìí).", "Tẹ ọjọ́, iye owó àti àkáǹtì ìnáwó tí ó bá a mu.", "So ìwé ẹ̀rí ìsanwó mọ́ ọn tàbí kọ nọ́mbà rẹ̀ sílẹ̀.", "Nígbà tí o bá san bill kan, kọ ìsanwó bill sí ara bill yẹn.", "Ṣàyẹ̀wò pé bill náà fi hàn báyìí pé a ti san án."],
          words: [["Olùtajà (vendor)", "ẹni tàbí ilé-iṣẹ́ tí iṣẹ́ náà ń rà nǹkan lọ́wọ́ rẹ̀."], ["Bill", "àkọsílẹ̀ nǹkan tí iṣẹ́ náà máa sanwó rẹ̀ lẹ́yìn náà."], ["Ìnáwó (expense)", "àkọsílẹ̀ nǹkan tí iṣẹ́ náà ti sanwó rẹ̀ lẹ́sẹ̀kẹsẹ̀."], ["Ìsanwó bill (bill payment)", "àkọsílẹ̀ pé a ti san bill kan."], ["Form W-9", "fọ́ọ̀mù IRS tí alágbàṣe ń kún pẹ̀lú orúkọ àti nọ́mbà owó orí rẹ̀ fún àkọsílẹ̀ iṣẹ́ náà."]],
          slides: [
            { title: "Bill tàbí ìnáwó?", bullets: ["Bill: sanwó lẹ́yìn náà, ó ń lọ sínú A/P", "Ìnáwó: a sanwó lẹ́sẹ̀kẹsẹ̀", "Fi ìsanwó bill san bill, kì í ṣe ìnáwó tuntun"] },
            { title: "Yan àkáǹtì tó tọ́", bullets: ["Supplies, Fuel, Rent, Phone", "Àkáǹtì kan náà nígbà gbogbo"] },
            { title: "Ẹ̀rí fún gbogbo ìnáwó", bullets: ["So fọ́tò ìwé ẹ̀rí ìsanwó mọ́ ọn", "Tàbí kọ nọ́mbà ìwé ẹ̀rí náà sínú memo"] },
            { title: "Sísan owó fún alágbàṣe", bullets: ["Gba Form W-9 kí o tó sanwó", "Sàmì sí wọn gẹ́gẹ́ bí alágbàṣe", "Wo irs.gov fún òfin ìfiránṣẹ́ ìròyìn ti ìsinsìnyí"] }
          ],
          sources: [{ name: "IRS: About Form W-9", url: "https://www.irs.gov/forms-pubs/about-form-w-9" }, TESTDRIVE],
          tryIt: "Nínú test drive tàbí lórí ìwé, kọ nǹkan mẹ́ta sílẹ̀: bill ohun èlò $120 tí a máa san láàárín ọjọ́ 30, epo $45 tí a fi káàdì san lónìí, àti ìsanwó bill $120 náà ní ọ̀sẹ̀ méjì lẹ́yìn náà. Fún ọ̀kọ̀ọ̀kan, kọ olùtajà, fọ́ọ̀mù tí o lò, àkáǹtì àti iye owó. Lẹ́yìn náà ṣàlàyé ní gbólóhùn kan ìdí tí ìsanwó bill kì í fi í ṣe ìnáwó tuntun.",
          youCanNow: "kọ bill, ìnáwó àti ìsanwó bill sílẹ̀ pẹ̀lú olùtajà, àkáǹtì àti ìwé ẹ̀rí ìsanwó tó tọ́.",
          quickCheck: [
            { objective: "O4", q: "Olùpèsè kan fi bill ránṣẹ́ tí ó yẹ kí a san láàárín ọjọ́ 30. Kí ni o máa kọ sílẹ̀ lónìí?", options: ["Ìnáwó", "Bill", "Ìwé owó (invoice)", "Ìwé ẹ̀rí ọjà tí a tà"], answer: 1, why: "Bill ń kọ nǹkan tí iṣẹ́ náà máa sanwó rẹ̀ lẹ́yìn náà sílẹ̀." },
            { objective: "O4", q: "O san bill yẹn ní ọ̀sẹ̀ méjì lẹ́yìn náà. Kí ni o máa kọ sílẹ̀?", options: ["Ìnáwó tuntun fún iye owó kan náà", "Deposit", "Ìsanwó bill sí ara bill yẹn", "Kò sí nǹkan"], answer: 2, why: "Ìsanwó bill ń pa bill náà dé láìka owó náà lẹ́ẹ̀mejì." }
          ]
        },
        {
          title: "Bank feed àti ìṣàyẹ̀wò àkáǹtì báńkì",
          objectives: ["O5"],
          minutes: 6,
          goal: "So àwọn ìlà bank feed pọ̀ mọ́ àkọsílẹ̀ rẹ, kí o sì ṣàyẹ̀wò àkáǹtì báńkì títí ìyàtọ̀ yóò fi jẹ́ òdo.",
          text: [
            "QuickBooks lè so mọ́ báńkì iṣẹ́ náà kí ó sì gba ìṣòwò rẹ̀ sílẹ̀. Èyí ni bank feed. Ìlà kọ̀ọ̀kan tí ó wọlé ń dúró dè ọ́ láti ṣàyẹ̀wò rẹ̀. Tí o bá ti kọ ọ́ sílẹ̀ tẹ́lẹ̀, so ó pọ̀ mọ́ àkọsílẹ̀ yẹn (match). Tí o kò bá tíì kọ ọ́, fi í kún un pẹ̀lú ẹni tí a san fún àti àkáǹtì tó tọ́. Má ṣe fi ìlà tí o ti kọ sílẹ̀ kún un láéláé, bí bẹ́ẹ̀ kọ́ a máa kà á lẹ́ẹ̀mejì. Ẹni tó ni iṣẹ́ ló ń so báńkì pọ̀; olùṣírò owó kì í béèrè ọ̀rọ̀ aṣínà báńkì ẹni tó ni iṣẹ́ láéláé.",
            "Ìṣàyẹ̀wò báńkì (bank reconciliation) ń fi hàn pé QuickBooks bá ìwé àkọsílẹ̀ báńkì (bank statement) mu. Lẹ́ẹ̀kan lóṣù, mú ìwé àkọsílẹ̀ báńkì, tẹ iye owó ìparí rẹ̀ àti ọjọ́ rẹ̀, kí o sì sàmì sí deposit àti ìsanwó kọ̀ọ̀kan nínú QuickBooks tí ó wà lórí ìwé àkọsílẹ̀ báńkì náà. Nígbà tí ìyàtọ̀ bá jẹ́ òdo, parí ìṣàyẹ̀wò náà.",
            "Tí ìyàtọ̀ kò bá jẹ́ òdo, wá àwọn ohun tó sábà máa ń fà á: owó ìtọ́jú báńkì (bank fee) tàbí èlé tí a kò kọ sílẹ̀, àkọsílẹ̀ tí a tẹ iye owó tí kò tọ́ sí, àkọsílẹ̀ tí ó wà lẹ́ẹ̀mejì, tàbí àkọsílẹ̀ tí ó wà ní oṣù tí kò tọ́. Àwọn ṣẹ́ẹ̀kì tí báńkì kò tíì san máa ń wà láìsí àmì; wọn yóò kọjá ní oṣù tó ń bọ̀.",
            "Má ṣe fi tipátipá mú ìṣàyẹ̀wò dé òdo nípa ṣíṣe àkọsílẹ̀ àhùsọ láéláé. Tí o kò bá rí ìṣòro náà, kọ àkọsílẹ̀ kan kí o sì béèrè lọ́wọ́ ẹni tó ni iṣẹ́ tàbí akọ̀wé owó."
          ],
          steps: ["Ṣàyẹ̀wò ìlà tuntun kọ̀ọ̀kan nínú bank feed.", "So ó pọ̀ mọ́ àkọsílẹ̀ tí ó ti wà, tàbí fi í kún un pẹ̀lú ẹni tí a san fún àti àkáǹtì tó tọ́.", "Gba ìwé àkọsílẹ̀ báńkì oṣù náà.", "Bẹ̀rẹ̀ ìṣàyẹ̀wò kí o sì tẹ ọjọ́ ìparí àti iye owó ìparí ìwé àkọsílẹ̀ báńkì náà.", "Sàmì sí àkọsílẹ̀ kọ̀ọ̀kan tí ó wà lórí ìwé àkọsílẹ̀ báńkì.", "Wá ohunkóhun tí kò jẹ́ kí ìyàtọ̀ jẹ́ òdo kí o sì tún un ṣe.", "Parí nígbà tí ìyàtọ̀ bá jẹ́ òdo, tàbí kọ àkọsílẹ̀ kí o sì béèrè ìrànlọ́wọ́."],
          words: [["Bank feed", "ìṣòwò báńkì tí QuickBooks gbà sílẹ̀ fún ọ láti ṣàyẹ̀wò."], ["Match (so pọ̀)", "síso ìlà báńkì tí ó wọlé pọ̀ mọ́ àkọsílẹ̀ tí ó ti wà nínú QuickBooks."], ["Reconcile (ṣàyẹ̀wò báńkì)", "ṣàyẹ̀wò pé àkọsílẹ̀ rẹ bá ìwé àkọsílẹ̀ báńkì mu, ìlà kan lẹ́yìn òmíràn."], ["Ìyàtọ̀ (difference)", "àlàfo láàárín QuickBooks àti ìwé àkọsílẹ̀ báńkì nígbà ìṣàyẹ̀wò; ó yẹ kí ó jẹ́ òdo."], ["Ṣẹ́ẹ̀kì tí kò tíì kọjá (uncleared check)", "ṣẹ́ẹ̀kì tí o kọ tí báńkì kò tíì san."]],
          slides: [
            { title: "Ṣàyẹ̀wò bank feed", bullets: ["O ti kọ ọ́ sílẹ̀? So ó pọ̀ (match)", "O kò tíì kọ ọ́? Fi í kún un pẹ̀lú àkáǹtì tó tọ́", "Má ṣe fi ìlà kan kún un lẹ́ẹ̀mejì láéláé"] },
            { title: "Ṣàyẹ̀wò báńkì lẹ́ẹ̀kan lóṣù", bullets: ["Tẹ ọjọ́ ìparí àti iye owó ìparí ìwé àkọsílẹ̀ báńkì", "Sàmì sí ìlà kọ̀ọ̀kan tí ó wà lórí ìwé àkọsílẹ̀ báńkì", "Parí nígbà tí ìyàtọ̀ bá jẹ́ òdo"] },
            { title: "Nígbà tí kò bá bára mu", bullets: ["Owó ìtọ́jú báńkì tàbí èlé tí ó sọnù", "Iye owó tí kò tọ́, àkọsílẹ̀ ẹlẹ́ẹ̀mejì tàbí oṣù tí kò tọ́", "Ṣẹ́ẹ̀kì tí kò tíì kọjá ń dúró de oṣù tó ń bọ̀"] },
            { title: "Jẹ́ olóòótọ́ kí o sì wà láìléwu", bullets: ["Má ṣe fi àkọsílẹ̀ àhùsọ fi tipátipá mú un dé òdo", "Kọ àkọsílẹ̀ kí o sì béèrè ìrànlọ́wọ́", "Má ṣe béèrè ọ̀rọ̀ aṣínà báńkì ẹni tó ni iṣẹ́ láéláé"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Ṣe ìwé àkọsílẹ̀ báńkì àṣeṣe sórí ìwé: owó ìbẹ̀rẹ̀ $1,000; deposit $250 àti $400; ìsanwó $120, $45 àti $60; owó ìtọ́jú báńkì $5; owó ìparí $1,420. Àkọsílẹ̀ rẹ ní gbogbo ìlà àyàfi owó ìtọ́jú báńkì náà, ó sì tún ní ṣẹ́ẹ̀kì $75 tí kò tíì kọjá. Sàmì sí àwọn ìlà tí ó bára mu, wá ohun tí kò jẹ́ kí ìyàtọ̀ jẹ́ òdo, kí o sì kọ ohun tí o máa kọ sínú àkọsílẹ̀. Nínú test drive, ṣí ojú-ewé banking kí o sì wo bí àwọn ìlà tí ó wọlé ṣe ń dúró kí a so wọ́n pọ̀ tàbí kí a fi wọ́n kún un.",
          youCanNow: "so bank feed pọ̀ kí o sì ṣàyẹ̀wò àkáǹtì báńkì títí ìyàtọ̀ yóò fi jẹ́ òdo, tàbí kọ ohun tí kò tíì tọ́ sílẹ̀.",
          quickCheck: [
            { objective: "O5", q: "Ìlà kan nínú bank feed jẹ́ ìsanwó tí o ti kọ sílẹ̀ gẹ́gẹ́ bí ìsanwó bill. Kí ni o máa ṣe?", options: ["So ó pọ̀ mọ́ ìsanwó bill yẹn (match)", "Fi í kún un gẹ́gẹ́ bí ìnáwó tuntun", "Pa bill náà rẹ́", "Fi í sílẹ̀ títí láé"], answer: 0, why: "Síso pọ̀ ń so ìlà báńkì mọ́ àkọsílẹ̀ rẹ láìka á lẹ́ẹ̀mejì." },
            { objective: "O5", q: "Ìṣàyẹ̀wò rẹ yàtọ̀ ní $5, ìwé àkọsílẹ̀ báńkì sì fi owó ìtọ́jú báńkì $5 hàn. Kí ni ìgbésẹ̀ tó dára jù?", options: ["Ṣe àkọsílẹ̀ àhùsọ fún iye owó èyíkéyìí", "Fo ìṣàyẹ̀wò oṣù yìí", "Yí iye owó ìwé àkọsílẹ̀ báńkì padà", "Kọ owó ìtọ́jú báńkì $5 náà sílẹ̀ gẹ́gẹ́ bí ìnáwó"], answer: 3, why: "Owó ìtọ́jú báńkì tí ó sọnù máa ń fà á; kíkọ ọ́ sílẹ̀ ń tún ìyàtọ̀ náà ṣe lọ́nà òtítọ́." }
          ]
        },
        {
          title: "Àwọn ìròyìn àti pípa oṣù dé",
          objectives: ["O6"],
          minutes: 6,
          goal: "Ṣe ìwé èrè àti àdánù, balance sheet àti ìròyìn ìwé owó tí a kò tíì san, kí o sì ṣàlàyé wọn.",
          text: [
            "Ìwé èrè àti àdánù (profit and loss, P&L) ń fi owó tó wọlé yọ ìnáwó hàn fún àkókò kan, bí oṣù kan. Tí owó tó wọlé bá pọ̀ jù, iṣẹ́ náà jèrè; tí ìnáwó bá pọ̀ jù, ó pàdánù. Balance sheet ń fi hàn, ní ọjọ́ kan, ohun tí iṣẹ́ náà ní (dúkìá), ohun tí ó jẹ (gbèsè) àti ìpín ẹni tó ni iṣẹ́ (ìpín olówó).",
            "Ìròyìn accounts receivable aging ń fi àwọn oníbàárà tí wọ́n ṣì jẹ owó hàn àti bí wọ́n ṣe pẹ́ tó. Ìròyìn accounts payable aging ń fi àwọn bill tí iṣẹ́ náà ṣì jẹ hàn. Ìròyìn méjèèjì yìí ń sọ fún ẹni tó ni iṣẹ́ ẹni tí ó máa pè àti ohun tí ó máa san tẹ̀lé e.",
            "Pípa oṣù dé (month-end close) ni àkọsílẹ̀ ohun tí olùṣírò owó ń tẹ̀lé lóṣooṣù: gbogbo ọjà tí a tà, ìsanwó, bill àti ìnáwó ti wọlé; a ti ṣàyẹ̀wò bank feed; a ti ṣàyẹ̀wò gbogbo àkáǹtì báńkì àti káàdì ìyáwó; a ti so ìwé ẹ̀rí ìsanwó mọ́ wọn; a ti ṣe àwọn ìròyìn, a sì ti fi wọ́n ránṣẹ́ sí ẹni tó ni iṣẹ́ pẹ̀lú àkọsílẹ̀ kúkúrú. Àwọn àjọ àìlérè tún lè ṣe ìròyìn fún ètò kọ̀ọ̀kan tàbí owó ìrànlọ́wọ́ (grant) kọ̀ọ̀kan.",
            "Ṣe àwọn ìròyìn láti apá Reports; wá ìròyìn náà pẹ̀lú orúkọ rẹ̀. Ìròyìn kan dára tó àwọn àkọsílẹ̀ tí ó wà lẹ́yìn rẹ̀ nìkan, nítorí náà kọ́kọ́ ṣàyẹ̀wò báńkì."
          ],
          steps: ["Parí kíkọ ọjà tí a tà, ìsanwó, bill àti ìnáwó oṣù náà.", "Ṣàyẹ̀wò bank feed kí o sì ṣàyẹ̀wò gbogbo àkáǹtì báńkì àti káàdì.", "Ṣe ìwé èrè àti àdánù fún oṣù náà.", "Ṣe balance sheet fún ọjọ́ ìkẹyìn oṣù náà.", "Ṣe ìròyìn accounts receivable aging.", "Kọ àkọsílẹ̀ kúkúrú sí ẹni tó ni iṣẹ́: èrè tàbí àdánù, àwọn tí ó jẹ owó àti bill tí ó máa tó yẹ kí a san."],
          words: [["Ìwé èrè àti àdánù (P&L)", "ìròyìn owó tó wọlé yọ ìnáwó fún àkókò kan; a tún ń pè é ní income statement."], ["Balance sheet", "ìròyìn dúkìá, gbèsè àti ìpín olówó ní ọjọ́ kan."], ["Aging report", "ìròyìn owó tí wọ́n jẹ, tí a tò lẹ́sẹẹsẹ bí ọjọ́ tí ó ti pẹ́ ṣe pọ̀ tó."], ["Pípa oṣù dé (month-end close)", "àkọsílẹ̀ ohun tí a ń ṣe láti parí ìṣírò owó oṣù kan."]],
          slides: [
            { title: "Ìwé èrè àti àdánù", bullets: ["Owó tó wọlé yọ ìnáwó fún àkókò kan", "Èrè tàbí àdánù oṣù náà"] },
            { title: "Balance sheet", bullets: ["Ní ọjọ́ kan", "Dúkìá, gbèsè àti ìpín olówó"] },
            { title: "Ta ló jẹ kí ni", bullets: ["A/R aging: àwọn oníbàárà tí wọ́n jẹ iṣẹ́ náà", "A/P aging: bill tí iṣẹ́ náà jẹ"] },
            { title: "Àkọsílẹ̀ òpin oṣù", bullets: ["Gbogbo nǹkan ti wọlé, a ti ṣàyẹ̀wò bank feed", "A ti ṣàyẹ̀wò gbogbo àkáǹtì báńkì àti káàdì", "A ti ṣe àwọn ìròyìn, àkọsílẹ̀ kúkúrú sí ẹni tó ni iṣẹ́"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Nínú test drive, ṣe ìwé èrè àti àdánù fún oṣù tó kọjá àti ìròyìn accounts receivable aging. Kọ gbólóhùn mẹ́ta fún ẹni tó ni iṣẹ́: àpapọ̀ owó tó wọlé àti àpapọ̀ ìnáwó oṣù náà, bóyá èrè tàbí àdánù wà, àti oníbàárà tí ó jẹ owó jù. O kò ní kọ̀mpútà? Lo iṣẹ́ rẹ láti inú àwọn ẹ̀kọ́ tó ṣáájú kí o sì kọ àkọsílẹ̀ kan náà sórí ìwé.",
          youCanNow: "ṣe àwọn ìròyìn pàtàkì, ṣàlàyé wọn fún ẹni tó ni iṣẹ́, kí o sì pa oṣù kan dé.",
          quickCheck: [
            { objective: "O6", q: "Ìròyìn wo ló ń fi hàn bóyá iṣẹ́ náà jèrè ní oṣù tó kọjá?", options: ["Balance sheet", "Ìwé èrè àti àdánù", "Àkọsílẹ̀ àwọn olùtajà", "Àkọsílẹ̀ àwọn àkáǹtì"], answer: 1, why: "Ìwé èrè àti àdánù ń fi owó tó wọlé yọ ìnáwó hàn fún àkókò kan." },
            { objective: "O6", q: "Ẹni tó ni iṣẹ́ béèrè àwọn oníbàárà tí wọ́n ti pẹ́ kí wọ́n tó sanwó. Ìròyìn wo ni o máa ṣe?", options: ["Accounts payable aging", "Ìwé èrè àti àdánù", "Accounts receivable aging", "Balance sheet"], answer: 2, why: "Ìròyìn A/R aging ń ka àwọn oníbàárà tí wọ́n jẹ owó àti bí wọ́n ṣe pẹ́ tó." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Bill, báńkì àti òpin oṣù",
        questions: [
          { objective: "O4", q: "O san $45 fún epo pẹ̀lú káàdì iṣẹ́ lónìí. Fọ́ọ̀mù wo ló bá a mu?", options: ["Bill", "Ìwé owó (invoice)", "Ìnáwó (expense)", "Ìwé ẹ̀rí ọjà tí a tà"], answer: 2, why: "Ìnáwó ń kọ nǹkan tí a sanwó rẹ̀ lẹ́sẹ̀kẹsẹ̀ sílẹ̀." },
          { objective: "O4", q: "Kí ó tó san owó fún alágbàṣe tuntun, olùṣírò owó tí ó ṣọ́ra máa:", options: ["Gba Form W-9 kí ó sì wo irs.gov fún òfin ìfiránṣẹ́ ìròyìn", "Sanwó lọ́wọ́ láìsí àkọsílẹ̀", "Kọ ìsanwó náà gẹ́gẹ́ bí owó tó wọlé", "Béèrè ọ̀rọ̀ aṣínà báńkì alágbàṣe náà"], answer: 0, why: "W-9 ń fún iṣẹ́ náà ní àlàyé alágbàṣe fún àkọsílẹ̀ àti ìròyìn rẹ̀." },
          { objective: "O5", q: "Ìṣàyẹ̀wò báńkì kò dé òdo, o kò sì rí ìdí rẹ̀. Kí ni o máa ṣe?", options: ["Fi àkọsílẹ̀ àhùsọ kún un láti fi tipátipá mú un dé òdo", "Pa àwọn àkọsílẹ̀ àtijọ́ rẹ́", "Yí iye owó ìwé àkọsílẹ̀ báńkì padà", "Kọ àkọsílẹ̀ kan kí o sì béèrè lọ́wọ́ ẹni tó ni iṣẹ́ tàbí akọ̀wé owó"], answer: 3, why: "Fífi tipátipá ṣe é ń bo ìṣòro gidi mọ́lẹ̀; àkọsílẹ̀ àti ìbéèrè ń jẹ́ kí ìṣírò wà lọ́nà òtítọ́." },
          { objective: "O5", q: "Ṣẹ́ẹ̀kì $75 tí o kọ kò sí lórí ìwé àkọsílẹ̀ báńkì oṣù yìí. Nínú ìṣàyẹ̀wò, o máa:", options: ["Pa ṣẹ́ẹ̀kì náà rẹ́", "Fi í sílẹ̀ láìsí àmì; ó yẹ kí ó kọjá lẹ́yìn náà", "Tún un kọ sílẹ̀", "Sàmì sí i gẹ́gẹ́ bí owó tó wọlé"], answer: 1, why: "Ṣẹ́ẹ̀kì tí kò tíì kọjá máa wà láìsí àmì títí yóò fi hàn lórí ìwé àkọsílẹ̀ báńkì." },
          { objective: "O6", q: "Balance sheet ń fi hàn:", options: ["Dúkìá, gbèsè àti ìpín olówó ní ọjọ́ kan", "Ọjà tí a tà ní oṣù tó kọjá nìkan", "Nọ́mbà fóònù oníbàárà kọ̀ọ̀kan", "Àwọn ìlà bank feed"], answer: 0, why: "Balance sheet jẹ́ àwòrán dúkìá, gbèsè àti ìpín olówó ní ọjọ́ kan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìṣírò Owó Iṣẹ́ pẹ̀lú QuickBooks",
    questions: [
      { objective: "O1", q: "Èwo ni iṣẹ́ pàtàkì olùṣírò owó QuickBooks?", options: ["Fífúnni ní ìmọ̀ràn òfin", "Kíkọ ìwé owó, bill àti ìṣòwò báńkì sílẹ̀", "Fífọwọ́ sí audit gẹ́gẹ́ bí CPA", "Yíyan ìdókòwò fún ẹni tó ni iṣẹ́"], answer: 1, why: "Kíkọ ọjà tí a tà, bill àti ìṣòwò báńkì sílẹ̀ lọ́nà tó tọ́ ni kókó iṣẹ́ náà." },
      { objective: "O1", q: "Níbo ni o ti yẹ kí o wo àlàyé àti owó ìdánwò QuickBooks Certified User ti ìsinsìnyí?", options: ["Ọ̀rọ̀ kan lórí ẹ̀rọ ayélujára àjọlò (social media)", "Àkọsílẹ̀ àtijọ́ ọ̀rẹ́ kan", "Ojú-òpó ìjíròrò èyíkéyìí lórí ayélujára", "Ojú-ewé Certiport gidi fún ìwé-ẹ̀rí Intuit"], answer: 3, why: "Owó àti àlàyé ìdánwò ń yí padà, nítorí náà ojú-ewé gidi ni ibi tí a ti ń wò ó." },
      { objective: "O1", q: "Oníbàárà kan béèrè bí ó ṣe lè dín owó orí rẹ̀ kù. Gẹ́gẹ́ bí olùṣírò owó, o máa:", options: ["Rán an lọ sọ́dọ̀ ọ̀jọ̀gbọ́n owó orí tàbí irs.gov", "Méfò ìdáhùn kan", "Yí nọ́mbà rẹ̀ padà", "Sọ fún un pé owó orí kì í ṣe dandan"], answer: 0, why: "Olùṣírò owó ń pa àkọsílẹ̀ mọ́; ìmọ̀ràn owó orí ń wá láti ọ̀dọ̀ ọ̀jọ̀gbọ́n owó orí tàbí IRS." },
      { objective: "O2", q: "Ẹ̀rọ ìgbálẹ̀ (vacuum) tuntun tí iṣẹ́ ìmọ́tótó náà ní jẹ́ irú àkáǹtì wo?", options: ["Owó tó wọlé", "Ìnáwó", "Dúkìá", "Gbèsè"], answer: 2, why: "Ẹ̀rọ tí iṣẹ́ náà ní jẹ́ dúkìá." },
      { objective: "O2", q: "Gbèsè lórí káàdì ìyáwó (credit card) iṣẹ́ náà jẹ́:", options: ["Gbèsè (liability)", "Dúkìá", "Owó tó wọlé", "Ìpín olówó"], answer: 0, why: "Owó tí iṣẹ́ náà jẹ lórí káàdì jẹ́ gbèsè." },
      { objective: "O2", q: "Kí ni double-entry bookkeeping (ìṣírò ẹ̀gbẹ́ méjì) túmọ̀ sí?", options: ["O ń tẹ àkọsílẹ̀ kọ̀ọ̀kan lẹ́ẹ̀mejì", "Ènìyàn méjì gbọ́dọ̀ fọwọ́ sí àkọsílẹ̀ kọ̀ọ̀kan", "Owó tó wọlé nìkan ni a ń kọ sílẹ̀", "Gbogbo àkọsílẹ̀ ń yí ó kéré tán àkáǹtì méjì padà"], answer: 3, why: "Àkọsílẹ̀ kọ̀ọ̀kan ní ẹ̀gbẹ́ méjì, èyí sì ń jẹ́ kí ìṣírò wà ní ìwọ̀ntúnwọ̀nsì." },
      { objective: "O3", q: "Ìgbà wo ni olùṣírò owó ń lo ìwé owó (invoice)?", options: ["Nígbà tí oníbàárà ti sanwó lásìkò tí ó rà á", "Nígbà tí oníbàárà máa sanwó lẹ́yìn náà", "Nígbà tí iṣẹ́ náà ń ra ohun èlò", "Nígbà tí báńkì gba owó ìtọ́jú"], answer: 1, why: "Ìwé owó wà fún oníbàárà tí yóò sanwó lẹ́yìn náà." },
      { objective: "O3", q: "Fífi ìwé owó $200 ránṣẹ́ ń mú owó tó wọlé gòkè, ó sì ń mú èwo gòkè?", options: ["Accounts payable", "Owó báńkì", "Accounts receivable", "Ìnáwó owó ilé"], answer: 2, why: "Ìwé owó ń ṣẹ̀dá owó tí oníbàárà jẹ: accounts receivable." },
      { objective: "O3", q: "Oníbàárà kan san ìwé owó tí ó ṣí sílẹ̀ pẹ̀lú ṣẹ́ẹ̀kì. Kí ni o máa kọ sílẹ̀?", options: ["Ìsanwó sí ara ìwé owó yẹn, lẹ́yìn náà deposit báńkì", "Ìwé ẹ̀rí ọjà tí a tà tuntun", "Bill", "Ìwé owó tuntun"], answer: 0, why: "Kíkọ ìsanwó sí ara ìwé owó náà ń pa á dé, deposit náà sì ń bá ti báńkì mu." },
      { objective: "O4", q: "Ta ni olùtajà (vendor)?", options: ["Oníbàárà tí ó jẹ owó", "Ẹni tó ni iṣẹ́", "Ìlà kan nínú bank feed", "Ilé-iṣẹ́ tí o ń rà nǹkan lọ́wọ́ rẹ̀, bí ṣọ́ọ̀bù ohun èlò"], answer: 3, why: "Olùtajà ni ẹnikẹ́ni tí iṣẹ́ náà ń rà nǹkan lọ́wọ́ rẹ̀." },
      { objective: "O4", q: "Bill olùpèsè kan yẹ kí a san láàárín ọjọ́ 30. Nígbà tí a bá kọ ọ́ sílẹ̀, ó ń lọ sínú:", options: ["Accounts receivable", "Accounts payable", "Owó ọjà tí a tà", "Ìpín olówó"], answer: 1, why: "Bill tí a kò tíì san jẹ́ owó tí iṣẹ́ náà jẹ: accounts payable." },
      { objective: "O4", q: "Kí ló ń ṣe ẹ̀rí fún gbogbo ìnáwó tí ẹnikẹ́ni bá béèrè lẹ́yìn náà?", options: ["Ìméfò iye owó náà", "Nọ́mbà fóònù olùtajà", "Ìwé ẹ̀rí ìsanwó tí a so mọ́ ọn tàbí tí a kọ nọ́mbà rẹ̀", "Ìrántí ẹni tó ni iṣẹ́"], answer: 2, why: "Ìwé ẹ̀rí ìsanwó ni ẹ̀rí tí ó wà lẹ́yìn ìnáwó kọ̀ọ̀kan." },
      { objective: "O5", q: "Kí ni bank feed?", options: ["Ìṣòwò báńkì tí QuickBooks gbà sílẹ̀ fún ọ láti ṣàyẹ̀wò", "Owó ìtọ́jú tí báńkì ń gbà", "Àkọsílẹ̀ àwọn oníbàárà", "Ọ̀rọ̀ aṣínà báńkì ẹni tó ni iṣẹ́"], answer: 0, why: "Bank feed ń mú àwọn ìlà báńkì wọlé kí o lè so wọ́n pọ̀ tàbí fi wọ́n kún un." },
      { objective: "O5", q: "Ìṣàyẹ̀wò báńkì ti parí nígbà tí:", options: ["O ti sàmì sí ìdajì àwọn ìlà", "Inú ẹni tó ni iṣẹ́ dùn", "Oṣù ti parí", "Ìyàtọ̀ jẹ́ òdo"], answer: 3, why: "Ìyàtọ̀ òdo ń fi hàn pé QuickBooks bá ìwé àkọsílẹ̀ báńkì mu." },
      { objective: "O5", q: "Ìlà báńkì kan tí ó wọlé ti wà nínú QuickBooks tẹ́lẹ̀. Fífi í kún un lẹ́ẹ̀kan sí i máa:", options: ["Tún ìṣàyẹ̀wò ṣe", "Kà á lẹ́ẹ̀mejì", "Pa oṣù dé", "San owó fún olùtajà"], answer: 1, why: "Fífi ìlà tí ó ti wà kún un lẹ́ẹ̀kan sí i ń ṣẹ̀dá àkọsílẹ̀ ẹlẹ́ẹ̀mejì; so ó pọ̀ dípò bẹ́ẹ̀." },
      { objective: "O6", q: "Owó tó wọlé jẹ́ $4,000, ìnáwó sì jẹ́ $3,100 fún oṣù náà. Ìwé èrè àti àdánù fi hàn:", options: ["Àdánù $900", "Èrè $7,100", "Èrè $900", "Kò sí àyípadà"], answer: 2, why: "Owó tó wọlé yọ ìnáwó: $4,000 yọ $3,100 jẹ́ èrè $900." },
      { objective: "O6", q: "Kí ó tó ṣe àwọn ìròyìn òpin oṣù, olùṣírò owó gbọ́dọ̀ kọ́kọ́:", options: ["Ṣàyẹ̀wò gbogbo àkáǹtì báńkì àti káàdì", "Pa àwọn ìwé owó àtijọ́ rẹ́", "Fi àwọn ìròyìn ránṣẹ́ láìṣàyẹ̀wò", "Yí àkọsílẹ̀ àwọn àkáǹtì padà"], answer: 0, why: "Ìròyìn dára tó àwọn àkọsílẹ̀ tí ó wà lẹ́yìn rẹ̀ nìkan, nítorí náà kọ́kọ́ ṣàyẹ̀wò báńkì." },
      { objective: "O6", q: "Ìròyìn wo ló ń fi àwọn bill tí iṣẹ́ náà ṣì jẹ hàn?", options: ["Ìwé èrè àti àdánù", "Accounts receivable aging", "Àkọsílẹ̀ àwọn àkáǹtì", "Accounts payable aging"], answer: 3, why: "Ìròyìn A/P aging ń ka àwọn bill tí a kò tíì san àti bí wọ́n ṣe pẹ́ tó." },
      { objective: "O2", q: "Kí ló dé tí olùṣírò owó fi gbọ́dọ̀ lo àkáǹtì kan náà nígbà gbogbo fún irú ìnáwó kan náà?", options: ["QuickBooks ń gba owó fún àkáǹtì tuntun", "Kí àwọn ìròyìn lè fi oṣù kan wé òmíràn lọ́nà tó tọ́", "Nítorí a kò lè yí orúkọ àkáǹtì padà", "Kí bank feed lè dúró"], answer: 1, why: "Àkáǹtì tí kò yí padà ń jẹ́ kí ìròyìn tọ́, kí a sì lè fi wọ́n wé ara wọn." },
      { objective: "O5", q: "Oníbàárà kan fẹ́ fún ọ ní ọ̀rọ̀ aṣínà báńkì ayélujára rẹ̀ kí o lè so bank feed pọ̀. Kí ni o máa ṣe?", options: ["Gbà á kí o sì fi pamọ́ sínú àkọsílẹ̀ kan", "Fi í ránṣẹ́ sí ara rẹ nínú text", "Kọ̀ ọ́; ẹni tó ni iṣẹ́ ló máa so báńkì pọ̀ tàbí fún ọ ní ààyè olùlò tìrẹ", "Fi í sínú fódà àjọlò"], answer: 2, why: "Olùṣírò owó kì í gba ọ̀rọ̀ aṣínà báńkì ẹni tó ni iṣẹ́ láéláé; ẹni tó ni iṣẹ́ ló máa so báńkì pọ̀ tàbí fi ọ́ kún un gẹ́gẹ́ bí olùlò." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 5, 6, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Àkọsílẹ̀ àwọn àkáǹtì", objective: "O2", notYet: "Àkáǹtì kò tó 12, tàbí a sàmì sí ọ̀pọ̀ nínú wọn pẹ̀lú irú tí kò tọ́.", meets: "Ó kéré tán àkáǹtì 12, ọ̀kọ̀ọ̀kan pẹ̀lú irú tó tọ́ àti orúkọ tó yé.", exceeds: "Ó tún ṣàlàyé ìdí tí iṣẹ́ yìí fi nílò àkáǹtì kọ̀ọ̀kan, pẹ̀lú àkáǹtì àjọ àìlérè tàbí ti irú iṣẹ́ náà." },
      { name: "Ọjà tí a tà àti ìsanwó", objective: "O3", notYet: "A kọ ìsanwó kan sílẹ̀ gẹ́gẹ́ bí ọjà tuntun, tàbí ìwé owó kan kò ní oníbàárà, ọjọ́ tàbí iye owó.", meets: "Ó kéré tán ìwé owó 3 àti ìsanwó 2, ọ̀kọ̀ọ̀kan pẹ̀lú oníbàárà, ọjọ́, iye owó àti àkáǹtì owó tó wọlé; àwọn ìwé owó tí a ti san fi hàn pé a ti san wọ́n.", exceeds: "Ó tún kọ deposit báńkì fún ìsanwó kọ̀ọ̀kan sílẹ̀, ó sì kọ àwọn ìwé owó tí ó ṣì ṣí sílẹ̀." },
      { name: "Bill àti ìnáwó", objective: "O4", notYet: "A fi ìnáwó tuntun san bill kan, tàbí àwọn àkọsílẹ̀ kò ní àkáǹtì tàbí ìwé ẹ̀rí ìsanwó.", meets: "Ó kéré tán bill tàbí ìnáwó 4 pẹ̀lú olùtajà, ọjọ́, iye owó, àkáǹtì àti ìwé ẹ̀rí ìsanwó tí a kọ sílẹ̀.", exceeds: "Ó tún fi ìsanwó bill kan hàn àti alágbàṣe kan tí a ṣe pẹ̀lú àkọsílẹ̀ W-9." },
      { name: "Ìṣàyẹ̀wò báńkì", objective: "O5", notYet: "Kò sí ìṣàyẹ̀wò, tàbí a fi àkọsílẹ̀ àhùsọ fi tipátipá mú un dé òdo.", meets: "Ìṣàyẹ̀wò parí pẹ̀lú ìyàtọ̀ òdo, tàbí ó ní àkọsílẹ̀ òtítọ́ nípa ohun tí kò tíì tọ́.", exceeds: "Ó tún ka ohun tí ó fa ìyàtọ̀ kọ̀ọ̀kan (owó ìtọ́jú báńkì, àṣìṣe títẹ̀, àkọsílẹ̀ ẹlẹ́ẹ̀mejì, ṣẹ́ẹ̀kì tí kò tíì kọjá) àti bí a ṣe tún un ṣe." },
      { name: "Àkópọ̀ ìròyìn", objective: "O6", notYet: "Àkópọ̀ náà kò ní èrè tàbí àdánù, tàbí àwọn nọ́mbà kò bá àwọn àkọsílẹ̀ mu.", meets: "Ó sọ àpapọ̀ owó tó wọlé, àpapọ̀ ìnáwó àti èrè tàbí àdánù, àti àwọn tí wọ́n ṣì jẹ owó.", exceeds: "Ó tún dárúkọ bill tí ó máa tó yẹ kí a san àti ohun kan tí ẹni tó ni iṣẹ́ lè ṣe." },
      { name: "Ètò ìwé-ẹ̀rí", objective: "O1", notYet: "Kò dárúkọ ìwé-ẹ̀rí kankan, tàbí kò sí ọjọ́.", meets: "Ó dárúkọ ìwé-ẹ̀rí Intuit kan, ojú-ewé gidi tí a máa wò, àti ọjọ́ fún wíwò ó àti fún ìdánwò àṣeṣe.", exceeds: "Ó tún ka agbanisíṣẹ́ tàbí oníbàárà mẹ́ta tí ó máa kàn sí àti ọjọ́ láti kàn sí ọ̀kọ̀ọ̀kan." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe ìdánwò ìwé-ẹ̀rí Intuit QuickBooks tàbí ìṣírò owó láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n rí iṣẹ́ ìṣírò owó, ipò ọ́fíìsì tí ó ń lo QuickBooks tàbí oníbàárà ìṣírò owó tí ó ń sanwó láàárín oṣù 6",
      "Àwọn olóṣòwò kékeré àti àjọ àìlérè nínú ẹ̀kọ́ náà tí wọ́n ń ṣàyẹ̀wò báńkì ara wọn lóṣooṣù (àtẹ̀lé ọjọ́ 30)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí tablet tí ó ní browser fún QuickBooks Online test drive ọ̀fẹ́ (tí a ṣí nínú fèrèsé àdáni); ojú-iboju fóònù kéré jù fún ọ̀pọ̀ àṣeṣe",
      "Ìwé, gègé àti ẹ̀rọ ìṣirò fún àkọsílẹ̀ \"Gbìyànjú rẹ̀ báyìí\", nítorí test drive kò fi nǹkan pamọ́",
      "Ẹ̀dà tí a tẹ̀ jáde ti ìwé àkọsílẹ̀ báńkì àṣeṣe àti àkọsílẹ̀ ìṣòwò fún àwọn ẹgbẹ́ tí kò ní kọ̀mpútà",
      "Nǹkan bí ìṣẹ́jú 75 sí 90 lápapọ̀, ní àwọn ìpàdé kúkúrú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Nínú yàrá kọ̀mpútà tàbí kíláàsì: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan pẹ̀lú test drive tí ó ṣí sílẹ̀ lórí ojú-iboju kọ̀ọ̀kan.",
      "Test drive máa ń padà sí bí ó ti wà, kò sì fi nǹkan pamọ́; rán àwọn akẹ́kọ̀ọ́ létí láti kọ àkọsílẹ̀ kọ̀ọ̀kan sílẹ̀ fún iṣẹ́ ìkẹyìn.",
      "Ojú-iboju àti orúkọ mẹ́nù ń yí padà; tí akẹ́kọ̀ọ́ kò bá rí nǹkan kan, fi àpótí ìwádìí (search) hàn án dípò ọ̀nà mẹ́nù kan pàtó.",
      "Má ṣe jẹ́ kí àwọn akẹ́kọ̀ọ́ tẹ ọ̀rọ̀ aṣínà báńkì gidi, nọ́mbà àkáǹtì gidi tàbí ìsọfúnni oníbàárà gidi nígbà àṣeṣe láéláé; lo iṣẹ́ àpẹẹrẹ tàbí nọ́mbà àhùsọ.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan.",
      "Kí àwọn akẹ́kọ̀ọ́ tó ṣe ètò fún ìwé-ẹ̀rí, jẹ́ kí wọ́n fúnra wọn ṣí àwọn ojú-ewé Certiport àti Intuit Academy gidi láti wo owó ìdánwò àti ẹ̀tọ́ láti ṣe é ti ìsinsìnyí."
    ]
  }
};
