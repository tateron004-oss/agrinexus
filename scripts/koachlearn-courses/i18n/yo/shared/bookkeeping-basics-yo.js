"use strict";

// Koach Learn course (Yoruba translation of shared/bookkeeping-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "bookkeeping-basics-yo",
  lang: "yo",
  translationOf: "bookkeeping-basics",
  category: "Entrepreneurs",
  name: "Ìpìlẹ̀ Ìṣírò Owó Iṣẹ́ (Bookkeeping)",
  skills: "Kíkọ owó tó wọlé àti owó tó jáde sílẹ̀, Pípa ìwé ẹ̀rí ìsanwó mọ́, Yíya owó iṣẹ́ sọ́tọ̀ kúrò lára owó àdáni, Ṣíṣe ìwé àkọsílẹ̀ owó lórí spreadsheet, Ṣíṣàyẹ̀wò àkọsílẹ̀ rẹ pẹ̀lú ti báńkì, Kíka ìwé èrè àti àdánù",
  outcome: "ṣe ìwé àkọsílẹ̀ owó (ledger) tó rọrùn lórí spreadsheet fún owó tó wọlé àti owó tó jáde nínú iṣẹ́ rẹ, pẹ̀lú ìwé ẹ̀rí ìsanwó tó ń fi hàn pé òótọ́ ni, ṣàyẹ̀wò rẹ̀ pẹ̀lú ìwé àkọsílẹ̀ báńkì tàbí mobile money rẹ, kí o sì ka ìwé èrè àti àdánù oṣù kan láti mọ̀ bóyá o jèrè.",
  about: [
    "Ẹ̀kọ́ yìí wà fún ẹnikẹ́ni tí ó ń ṣe nǹkan tí owó ń wọlé tí ó sì ń jáde: onídìrí, ẹni tó ń ta oúnjẹ, iṣẹ́ ìmọ́tótó, ṣọ́ọ̀ṣì tàbí àjọ àìlérè fún ọ̀dọ́, àgbẹ̀ tó ń ta ẹyin tàbí ẹ̀fọ́, tàbí ẹni tó ní iṣẹ́ ẹ̀gbẹ́ lórí ayélujára.",
    "O máa kọ́ láti kọ gbogbo ọjà tí o tà àti gbogbo owó tí o ná sílẹ̀, láti pa ìwé ẹ̀rí tó ń fi wọ́n hàn mọ́, láti ya owó iṣẹ́ sọ́tọ̀ kúrò lára owó àdáni, láti ṣe ìwé àkọsílẹ̀ owó tó rọrùn lórí spreadsheet ọ̀fẹ́, láti ṣàyẹ̀wò rẹ̀ lóṣooṣù, àti láti ka ìwé èrè àti àdánù ìpìlẹ̀.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" tí o máa fi nọ́mbà tìrẹ tàbí àpẹẹrẹ ṣe. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Ìṣírò owó iṣẹ́ ni àkọsílẹ̀. Fún ọ̀rọ̀ owó orí (tax) àti òfin, bá akọ̀wé owó (accountant) tàbí ọ̀jọ̀gbọ́n owó orí sọ̀rọ̀."
  ],
  finalTask: "Ṣe ìwé àkọsílẹ̀ owó lórí spreadsheet, kí o sì kọ ìṣòwò oṣù kan sínú rẹ̀, ti gidi tàbí àpẹẹrẹ (ó kéré tán 10), ọ̀kọ̀ọ̀kan pẹ̀lú ọjọ́, àpèjúwe, ẹ̀ka, iye owó àti nọ́mbà ìwé ẹ̀rí. Ṣàyẹ̀wò ìwé àkọsílẹ̀ náà pẹ̀lú ìwé àkọsílẹ̀ báńkì tàbí mobile money rẹ, lẹ́yìn náà ṣe ìwé èrè àti àdánù oṣù kan tó fi gbogbo owó tó wọlé hàn, owó tí o ná ní ẹ̀ka kọ̀ọ̀kan, àti èrè tàbí àdánù.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí ó ń ṣe nǹkan tí owó ń wọlé tí ó sì ń jáde: àwọn olóṣòwò kékeré, àwọn tó ń tajà lọ́jà, àwọn àgbẹ̀ tó ń ta ohun oko, àwọn tó ní iṣẹ́ ẹ̀gbẹ́ lórí ayélujára, àti àwọn akápò ṣọ́ọ̀ṣì tàbí àjọ àìlérè kékeré. Ọ̀pọ̀ ń kọ owó sí orí lásán, sínú àpótí owó, tàbí sínú àkáǹtì àdáni kan ṣoṣo.",
    startingPoint: "Wọ́n lè bójú tó owó lọ́wọ́ àti mobile money tàbí àkáǹtì báńkì, wọ́n sì lè ṣí fóònù tàbí kọ̀mpútà. Díẹ̀ ló ń kọ àkọsílẹ̀ sílẹ̀, ọ̀pọ̀ kò sì tíì lo formula spreadsheet rí.",
    gap: "Láìsí àkọsílẹ̀, wọn kò lè mọ̀ bóyá iṣẹ́ náà ń mówó wọlé, ọjà wo ló ń mérè wá, tàbí ohun tí wọ́n máa fi hàn ẹni tó ń yáni lówó, ẹni tó ń fúnni ní ẹ̀bùn owó (grant) tàbí ọ́fíìsì owó orí. Ìwé àkọsílẹ̀ owó tó rọrùn pẹ̀lú ìwé ẹ̀rí, àyẹ̀wò lóṣooṣù pẹ̀lú ìwé àkọsílẹ̀ báńkì, àti ìwé èrè àti àdánù oṣù kan ló ń dí àlàfo yẹn.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; nọ́mbà tó rọrùn",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà àjọlò pẹ̀lú spreadsheet ọ̀fẹ́ (Google Sheets tàbí Excel)",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan, pẹ̀lú àṣeṣe lórí nọ́mbà tiwọn tàbí àpẹẹrẹ",
      "Ìsọfúnni àdáni: kò sí nọ́mbà àkáǹtì báńkì tàbí ìsọfúnni àdáni oníbàárà nínú irinṣẹ́ AI",
      "Òfin owó orí yàtọ̀ láti orílẹ̀-èdè sí orílẹ̀-èdè; ẹ̀kọ́ yìí ń kọ́ni ní àkọsílẹ̀, ó sì ń rán ìbéèrè owó orí sí akọ̀wé owó"
    ],
    prerequisites: "Kò sí. Àwọn tí wọ́n jẹ́ tuntun sí spreadsheet lè kọ́kọ́ ṣe \"Excel àti Spreadsheet\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ owó tó ń wọlé àti owó tó ń jáde nínú iṣẹ́ tàbí àjọ àìlérè kan", action: "mọ èwo ló jẹ́ owó tó wọlé (income) àti èwo ló jẹ́ owó tí a ná (expense)", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O2", condition: "Tí a bá fún ọ ní ọjà tí o tà àti ohun tí o rà fún ọ̀sẹ̀ kan", action: "pa ìwé ẹ̀rí ìsanwó, invoice tàbí ìwé ọjà ojoojúmọ́ tó ní nọ́mbà mọ́ fún ìṣòwò kọ̀ọ̀kan", standard: "kí gbogbo ìlà nínú ìwé àkọsílẹ̀ owó ní nọ́mbà ìwé ẹ̀rí tí o lè rí" },
    { id: "O3", condition: "Pẹ̀lú àkáǹtì iṣẹ́ tó dá dúró, till mobile money tàbí wallet", action: "ya owó iṣẹ́ sọ́tọ̀ kúrò lára owó àdáni, kí o sì kọ owó tí o san fún ara rẹ sílẹ̀ gẹ́gẹ́ bí owó tí olówó gbà (owner's draw)", standard: "láìsí ìnáwó àdáni kankan tó dàpọ̀ mọ́ àkọsílẹ̀ iṣẹ́" },
    { id: "O4", condition: "Pẹ̀lú spreadsheet ọ̀fẹ́ bí Google Sheets tàbí Excel", action: "ṣe ìwé àkọsílẹ̀ owó tó ní òpó méje, àwọn ẹ̀ka tí kò yí padà, àti formula owó tó kù (running balance)", standard: "kí owó tó kù lè yí padà dáadáa lẹ́yìn ìlà kọ̀ọ̀kan" },
    { id: "O5", condition: "Tí o bá ní ìwé àkọsílẹ̀ owó rẹ àti ìwé àkọsílẹ̀ báńkì tàbí mobile money oṣù kan", action: "ṣe àyẹ̀wò ìbámu (reconcile) láàárín ìwé àkọsílẹ̀ rẹ àti ìwé àkọsílẹ̀ báńkì, kí o sì tún ìyàtọ̀ èyíkéyìí ṣe", standard: "títí owó tó kù fi bára mu, pẹ̀lú àyè fún owó lọ́wọ́ àti ìsanwó tí kò tíì wọlé" },
    { id: "O6", condition: "Tí o bá ní àkọsílẹ̀ oṣù kan nínú ìwé àkọsílẹ̀ owó", action: "ṣe ìwé èrè àti àdánù pẹ̀lú SUMIF, kí o sì ṣàlàyé ohun tí ó fi hàn", standard: "pẹ̀lú àpapọ̀ tó tọ̀nà àti gbólóhùn òótọ́ méjì nípa èsì rẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Pa àkọsílẹ̀ tó dára mọ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí ìṣírò owó iṣẹ́ jẹ́ àti ìdí tí ó fi ṣe pàtàkì",
          minutes: 4,
          goal: "Ṣàlàyé ohun tí ìṣírò owó iṣẹ́ ń kọ sílẹ̀, kí o sì dárúkọ irú owó méjì tí ó ń tọpinpin.",
          text: [
            "Ìṣírò owó iṣẹ́ (bookkeeping) ni kíkọ sílẹ̀ ní gbogbo ìgbà tí owó bá wọlé tàbí jáde nínú iṣẹ́ rẹ, ní ibì kan, ní ìtẹ̀léra. Kì í ṣe ìṣirò líle. Àṣà ni.",
            "Owó tó wọlé ni income: ọjà tí o tà, owó láti ọ̀dọ̀ oníbàárà, owó iṣẹ́, àti fún àjọ àìlérè, ọrẹ àti ẹ̀bùn owó (grant). Owó tó jáde ni expense: ohun èlò, owó ilé, epo, irúgbìn, fóònù, ìpolówó, owó oṣù òṣìṣẹ́.",
            "IRS (ilé-iṣẹ́ owó orí ìjọba Amẹ́ríkà) sọ pé àkọsílẹ̀ tó dára ń ràn ọ́ lọ́wọ́ láti máa wo bí iṣẹ́ rẹ ṣe ń tẹ̀síwájú àti láti múra ìwé owó orí rẹ sílẹ̀. Ó tún ń fi àwọn ìnáwó tí o lè yọ kúrò (deduct) hàn. Àkọsílẹ̀ tó mọ́ ń ràn ọ́ lọ́wọ́ láti rí owó yá, láti béèrè grant, láti dáhùn ìbéèrè ọ́fíìsì owó orí, àti láti rí ọjà tàbí iṣẹ́ tó ń mówó wọlé gan-an.",
            "Àpẹẹrẹ: obìnrin kan ń ta àkàrà òyìnbó àti kéèkì ní ọjà òpin ọ̀sẹ̀. Ó rò pé òun ń ṣe dáadáa nítorí àpótí owó kún. Nígbà tí ó kọ ìyẹ̀fun, bọ́tà, páálí àti owó ọjà sílẹ̀, ó rí i pé kéèkì kékeré (cupcake) ń mérè wá, ṣùgbọ́n búrẹ́dì kò fi bẹ́ẹ̀ san owó tí ó ná lé e. Báyìí ó lè pinnu ohun tí òun máa sè."
          ],
          words: [["Bookkeeping (ìṣírò owó iṣẹ́)", "kíkọ gbogbo owó tó ń wọlé àti tó ń jáde nínú iṣẹ́ sílẹ̀."], ["Income (owó tó wọlé)", "owó tó ń wọlé: ọjà tí a tà, owó iṣẹ́, ọrẹ, grant."], ["Expense (ìnáwó)", "owó tí a ná láti ṣe iṣẹ́ náà, bí ohun èlò, owó ilé àti epo."], ["Deduct (yọ kúrò)", "yíyọ ìnáwó iṣẹ́ tí òfin gbà láyè kúrò nígbà tí o bá ń ṣírò owó orí tí o jẹ."]],
          slides: [
            { title: "Ìṣírò owó iṣẹ́ jẹ́ àṣà", bullets: ["Kọ gbogbo owó tó wọlé àti tó jáde sílẹ̀", "Ní ibì kan, ní ìtẹ̀léra", "Kì í ṣe ìṣirò líle"] },
            { title: "Irú owó méjì", bullets: ["Owó tó wọlé: ọjà tí a tà, owó iṣẹ́, ọrẹ, grant", "Ìnáwó: ohun èlò, owó ilé, epo, irúgbìn, owó oṣù"] },
            { title: "Ìdí tí ó fi ṣe pàtàkì", bullets: ["Rí bí iṣẹ́ náà ṣe ń lọ gan-an", "Múra owó orí sílẹ̀ kí o sì fi àwọn ìyọkúrò hàn", "Rí owó yá àti grant; dáhùn ìbéèrè"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Ronú nípa iṣẹ́ rẹ, tàbí èyí tí o fẹ́ bẹ̀rẹ̀. Kọ irú owó márùn-ún tó máa wọlé àti irú ìnáwó mẹ́jọ tó máa jáde nínú rẹ̀ sílẹ̀.",
          youCanNow: "sọ ohun tí ìṣírò owó iṣẹ́ jẹ́, pín owó sí owó tó wọlé àti ìnáwó, kí o sì ṣàlàyé ìdí tí àkọsílẹ̀ fi ṣe pàtàkì.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ìṣírò owó iṣẹ́ (bookkeeping)?", options: ["Kíkọ sílẹ̀ ní gbogbo ìgbà tí owó bá wọlé tàbí jáde, ní ibì kan, ní ìtẹ̀léra", "Ṣíṣe ìṣirò líle lẹ́ẹ̀kan lọ́dún", "Fífi ìwé owó orí rẹ sílẹ̀", "Kíka owó inú àpótí ní alẹ́"], answer: 0, why: "Ẹ̀kọ́ náà sọ pé ìṣírò owó iṣẹ́ jẹ́ àṣà kíkọ gbogbo owó tó wọlé àti tó jáde sílẹ̀, ní ìtẹ̀léra." },
            { objective: "O1", q: "Obìnrin kan tó ń ta kéèkì rò pé òun ń ṣe dáadáa nítorí àpótí owó kún. Kí ló máa fi ọjà tó ń mérè wá gan-an hàn án?", options: ["Kíka owó náà lẹ́ẹ̀kan sí i", "Bíbéèrè ohun tí àwọn oníbàárà fẹ́ràn", "Kíkọ ìnáwó rẹ̀, bí ìyẹ̀fun, páálí àti owó ọjà, sílẹ̀ lẹ́gbẹ̀ẹ́ ọjà tí ó tà", "Gbígbé gbogbo iye owó sókè"], answer: 2, why: "Kíkọ ìnáwó sílẹ̀ lẹ́gbẹ̀ẹ́ ọjà tí ó tà fi hàn pé cupcake ń mérè wá, ṣùgbọ́n búrẹ́dì kò fi bẹ́ẹ̀ san owó tí ó ná lé e." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pípa ìwé ẹ̀rí ìsanwó àti ẹ̀rí míì mọ́",
          minutes: 5,
          goal: "Ṣètò ọ̀nà tó rọrùn láti pa gbogbo ìwé ẹ̀rí ìsanwó àti invoice mọ́.",
          text: [
            "Gbogbo ìlà nínú àkọsílẹ̀ rẹ gbọ́dọ̀ ní ẹ̀rí lẹ́yìn rẹ̀. IRS pè wọ́n ní ìwé àtìlẹ́yìn (supporting documents). Fún ọjà tí o tà, wọ́n ní ìwé ẹ̀rí ìsanwó, invoice, ìwé ẹ̀rọ owó (register tapes) àti àkọsílẹ̀ owó tí o fi sí báńkì. Fún ohun tí o rà àti ìnáwó, wọ́n ní ìwé ẹ̀rí ìsanwó, invoice, ìwé àkọsílẹ̀ káàdì àti àkọsílẹ̀ ìsanwó lórí ẹ̀rọ.",
            "Ìwé ẹ̀rí ìsanwó onípépà máa ń parẹ́, ó sì máa ń sọnù. Ọ̀nà tó rọrùn: ya fọ́tò ìwé ẹ̀rí kọ̀ọ̀kan ní ọjọ́ kan náà, fún un ní nọ́mbà, kí o sì fi pamọ́ sínú fódà oṣù náà, bí 2026-10. Fi pépà náà sínú àpò ìwé tí orúkọ oṣù kan náà wà lórí rẹ̀. Kọ nọ́mbà ìwé ẹ̀rí náà sínú ìwé àkọsílẹ̀ owó rẹ, kí o lè rí ẹ̀rí ìlà èyíkéyìí.",
            "Bí ó ti pẹ́ tó láti pa àkọsílẹ̀ mọ́: IRS sọ pé kí o pa wọ́n mọ́ níwọ̀n ìgbà tí o bá lè nílò láti fi owó tó wọlé tàbí ìyọkúrò hàn lórí ìwé owó orí. Fún ọ̀pọ̀ ìwé owó orí US, ọdún 3 ni, ṣùgbọ́n àwọn ọ̀rọ̀ kan gùn jù bẹ́ẹ̀ lọ, bí ó kéré tán ọdún 4 fún àkọsílẹ̀ owó orí òṣìṣẹ́. Wo ojú-ìwé IRS fún ọ̀rọ̀ tìrẹ. Lẹ́yìn òde US, wo ilé-iṣẹ́ owó orí orílẹ̀-èdè rẹ, bí Kenya Revenue Authority, tàbí béèrè lọ́wọ́ akọ̀wé owó.",
            "Fún ọjà tí o tà ní owó lọ́wọ́ láìsí ìwé ẹ̀rí, bí ẹyin tí o tà ní ẹnu oko, kọ ìwé ọjà ojoojúmọ́ tó rọrùn: ọjọ́, ohun tí o tà, iye mélòó, àti àpapọ̀. Ìwé yẹn ni ẹ̀rí rẹ."
          ],
          steps: ["Ṣe fódà kan fún oṣù kọ̀ọ̀kan lórí fóònù tàbí kọ̀mpútà rẹ, àti àpò ìwé kan fún oṣù kọ̀ọ̀kan fún pépà.", "Ya fọ́tò gbogbo ìwé ẹ̀rí ìsanwó ní ọjọ́ kan náà.", "Fún ìwé ẹ̀rí kọ̀ọ̀kan ní nọ́mbà, kí o sì kọ ọ́ sórí pépà náà.", "Kọ ọjà tí o tà ní owó lọ́wọ́ sínú ìwé ọjà ojoojúmọ́.", "Pa àkọsílẹ̀ mọ́ níwọ̀n ìgbà tí ilé-iṣẹ́ owó orí rẹ bá sọ, tàbí béèrè lọ́wọ́ akọ̀wé owó."],
          words: [["Receipt (ìwé ẹ̀rí ìsanwó)", "àkọsílẹ̀ lórí pépà tàbí lórí ẹ̀rọ pé o sanwó tàbí pé wọ́n san owó fún ọ."], ["Invoice", "ìwé owó tí o fi ránṣẹ́ sí oníbàárà, tàbí tí o gbà láti ọ̀dọ̀ olùpèsè, tí ó ń fi ohun tí a tà àti iye owó rẹ̀ hàn."], ["Ìwé àtìlẹ́yìn (supporting document)", "ẹ̀rí lẹ́yìn àkọsílẹ̀ kan nínú ìwé rẹ, bí ìwé ẹ̀rí ìsanwó, invoice tàbí ìwé àkọsílẹ̀ báńkì."]],
          slides: [
            { title: "Gbogbo ìlà nílò ẹ̀rí", bullets: ["Ọjà tí a tà: invoice, ìwé ẹ̀rí ìsanwó, àkọsílẹ̀ owó sí báńkì", "Ìnáwó: ìwé ẹ̀rí ìsanwó, invoice, ìwé àkọsílẹ̀ káàdì"] },
            { title: "Ọ̀nà tó rọrùn fún ìwé ẹ̀rí", bullets: ["Ya fọ́tò rẹ̀ ní ọjọ́ kan náà", "Fún un ní nọ́mbà, kí o sì to o sí ti oṣù rẹ̀", "Kọ nọ́mbà náà sínú ìwé àkọsílẹ̀ owó rẹ"] },
            { title: "Ọjà owó lọ́wọ́ láìsí ìwé ẹ̀rí", bullets: ["Pa ìwé ọjà ojoojúmọ́ mọ́", "Ọjọ́, ohun tí o tà, iye mélòó, àpapọ̀"] },
            { title: "Bí ó ti pẹ́ tó láti pa àkọsílẹ̀ mọ́", bullets: ["US: ọ̀pọ̀ ìgbà ọdún 3, àwọn ọ̀rọ̀ kan gùn jù bẹ́ẹ̀ lọ", "Àkọsílẹ̀ owó orí òṣìṣẹ́: ó kéré tán ọdún 4", "Wo irs.gov, ilé-iṣẹ́ owó orí rẹ tàbí akọ̀wé owó"] }
          ],
          sources: [
            { name: "IRS: What kind of records should I keep", url: "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep" },
            { name: "IRS: How long should I keep records?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }
          ],
          tryIt: "Ṣe fódà ìwé ẹ̀rí oṣù yìí lórí fóònù tàbí kọ̀mpútà rẹ. Ya fọ́tò ìwé ẹ̀rí mẹ́ta tí o ní (ti iṣẹ́, tàbí ti ojoojúmọ́ fún àṣeṣe), fún wọn ní nọ́mbà 1, 2 àti 3, kí o sì fi wọ́n pamọ́ sínú fódà náà.",
          youCanNow: "pa ìwé ẹ̀rí ìsanwó mọ́, fún wọn ní nọ́mbà, kí o sì tò wọ́n, kí gbogbo àkọsílẹ̀ nínú ìwé rẹ ní ẹ̀rí lẹ́yìn rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Kí ni IRS pe ìwé ẹ̀rí ìsanwó, invoice àti àkọsílẹ̀ owó sí báńkì?", options: ["Ìwé owó orí", "Ìwé àtìlẹ́yìn (supporting documents)", "Ìwé àkọsílẹ̀ owó (ledger)", "Ìwé èrè àti àdánù"], answer: 1, why: "IRS pe àwọn ìwé tó ń fi àkọsílẹ̀ kọ̀ọ̀kan hàn ní ìwé àtìlẹ́yìn." },
            { objective: "O2", q: "O ṣẹ̀ṣẹ̀ san owó ohun èlò, wọ́n sì fún ọ ní ìwé ẹ̀rí onípépà. Kí ni o máa ṣe ní ọjọ́ kan náà?", options: ["Fi í sínú àpò ṣòkòtò fún ìgbà míì", "Jù ú nù nígbà tí o bá ti rántí iye owó náà", "Kọ iye owó náà sí ọwọ́ rẹ", "Ya fọ́tò rẹ̀, fún un ní nọ́mbà, kí o sì fi í pamọ́ sínú fódà oṣù yìí"], answer: 3, why: "Yíya fọ́tò ìwé ẹ̀rí àti fífún un ní nọ́mbà ní ọjọ́ kan náà ń dá a dúró láti parẹ́ tàbí sọnù." }
          ]
        },
        {
          objectives: ["O1","O3"],
          title: "Yíya owó iṣẹ́ sọ́tọ̀ kúrò lára owó àdáni",
          minutes: 5,
          goal: "Ṣètò ibi tó dá dúró fún owó iṣẹ́, kí o sì máa san owó fún ara rẹ lọ́nà tí o ti pinnu.",
          text: [
            "Nígbà tí owó iṣẹ́ àti owó àdáni bá dàpọ̀ nínú àkáǹtì kan tàbí wallet kan, o kò lè mọ̀ bóyá iṣẹ́ náà ń mówó wọlé. Oúnjẹ ọ̀sán fún iṣẹ́, ọjà ilé fún ẹbí àti ohun èlò fún iṣẹ́ máa jọ ara wọn.",
            "Ṣí àkáǹtì tó dá dúró fún iṣẹ́ náà: àkáǹtì iṣẹ́ ní báńkì tàbí credit union, tàbí àkáǹtì mobile money tàbí till tó dá dúró tí o ń lò fún iṣẹ́ nìkan. Fi gbogbo owó ọjà sínú rẹ̀. San gbogbo ìnáwó iṣẹ́ láti inú rẹ̀.",
            "Nígbà tí o bá nílò owó fún ara rẹ, gbé iye kan tí o ti pinnu láti àkáǹtì iṣẹ́ lọ sí àkáǹtì àdáni rẹ, kí o sì kọ ọ́ sílẹ̀ gẹ́gẹ́ bí owner's draw (owó tí olówó gbà) tàbí owó oṣù rẹ. Èyí kì í ṣe ìnáwó iṣẹ́; ìwọ ló ń mú lára èrè. Tí o bá fi owó àdáni san ìnáwó iṣẹ́ nígbà kan, kọ ọ́ sínú ìwé àkọsílẹ̀ owó, kí o sì pa ìwé ẹ̀rí náà mọ́.",
            "Àwọn àjọ àìlérè ní ìgbésẹ̀ kan sí i: tí olùfúnni bá fún wọn lówó fún ohun kan pàtó, bí ètò eré ìdárayá fún ọ̀dọ́, ẹ tọpinpin rẹ̀ kí ẹ lè ná an fún ohun náà. Òpó kan tàbí ẹ̀ka kan fún un ti tó láti bẹ̀rẹ̀."
          ],
          steps: ["Ṣí àkáǹtì iṣẹ́ tó dá dúró, till mobile money tàbí wallet.", "Fi gbogbo owó ọjà àti ọrẹ sínú rẹ̀.", "San gbogbo ìnáwó iṣẹ́ láti inú rẹ̀.", "San owó fún ara rẹ nípa gbígbé iye kan tí o ti pinnu, kí o sì kọ ọ́ sílẹ̀ gẹ́gẹ́ bí owner's draw.", "Tí o bá lo owó àdáni fún iṣẹ́, kọ ọ́ sílẹ̀ kí o sì pa ìwé ẹ̀rí mọ́."],
          words: [["Owner's draw (owó tí olówó gbà)", "owó tí olówó iṣẹ́ mú jáde nínú iṣẹ́ fún lílò ara rẹ̀. Kì í ṣe ìnáwó iṣẹ́."], ["Commingling (dídàpọ̀ owó)", "dída owó iṣẹ́ àti owó àdáni pọ̀ sínú àkáǹtì kan náà."], ["Ọrẹ tí a pààlà sí (restricted donation)", "ẹ̀bùn tí olùfúnni sọ pé a gbọ́dọ̀ lò fún ohun kan pàtó."]],
          slides: [
            { title: "Owó tó dàpọ̀ ń bo òtítọ́ mọ́lẹ̀", bullets: ["O kò lè mọ̀ bóyá iṣẹ́ náà ń mówó wọlé", "Ìnáwó àdáni àti ti iṣẹ́ jọ ara wọn"] },
            { title: "Fún iṣẹ́ náà ní owó tirẹ̀", bullets: ["Àkáǹtì báńkì, credit union tàbí mobile money tó dá dúró", "Gbogbo owó ọjà wọlé, gbogbo ìnáwó iṣẹ́ jáde"] },
            { title: "San owó fún ara rẹ lọ́nà tí o ti pinnu", bullets: ["Gbé iye kan tí o ti pinnu lọ sí àkáǹtì àdáni rẹ", "Kọ ọ́ sílẹ̀ gẹ́gẹ́ bí owner's draw, kì í ṣe ìnáwó"] },
            { title: "Àwọn àjọ àìlérè", bullets: ["Tọpinpin ẹ̀bùn tí a fún fún ohun kan pàtó", "Ná wọn fún ohun náà"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Wo ìsanwó 10 tó kẹ́yìn láti àkáǹtì tàbí wallet tí o ń lò fún iṣẹ́ rẹ (tàbí ti àdáni rẹ, fún àṣeṣe). Sàmì sí ọ̀kọ̀ọ̀kan B fún iṣẹ́ (business) tàbí P fún àdáni (personal). Kọ bí o ṣe máa yà wọ́n sọ́tọ̀ láti ìsinsìnyí lọ sílẹ̀.",
          youCanNow: "ya owó iṣẹ́ sọ́tọ̀ kúrò lára owó àdáni, kí o sì san owó fún ara rẹ lọ́nà tí o lè tọpinpin.",
          quickCheck: [
            { objective: "O1", q: "Kí ni owner's draw?", options: ["Ìnáwó iṣẹ́", "Owó tí a yá láti báńkì", "Owó tí o gbé láti iṣẹ́ wá sọ́dọ̀ ara rẹ, tí a mú lára èrè", "Ọrẹ fún iṣẹ́ náà"], answer: 2, why: "Owner's draw ni ìwọ tí ó ń mú lára èrè; kì í ṣe ìnáwó iṣẹ́." },
            { objective: "O1", q: "O ń ṣe iṣẹ́ rẹ láti inú àkáǹtì àdáni rẹ, o kò sì lè mọ̀ bóyá ó ń mówó wọlé. Kí ni àtúnṣe àkọ́kọ́?", options: ["Ṣí àkáǹtì tó dá dúró tàbí till mobile money fún iṣẹ́ nìkan", "Dín owó oúnjẹ ilé kù", "Dáwọ́ pípa ìwé ẹ̀rí mọ́ dúró", "Lo owó lọ́wọ́ nìkan"], answer: 0, why: "Àkáǹtì tó dá dúró ń ya owó iṣẹ́ sọ́tọ̀, kí o lè rí ohun tí iṣẹ́ náà ń rí àti ohun tí ó ń ná." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Pa àkọsílẹ̀ tó dára mọ́",
        questions: [
          { objective: "O1", q: "Èwo ni ìnáwó fún oko kékeré kan?", options: ["Owó láti títa tòmátì", "Grant láti ọ̀dọ̀ olùfúnni", "Ìsanwó oníbàárà", "Irúgbìn àti ajílẹ̀"], answer: 3, why: "Ìnáwó ni owó tí a ná láti ṣe iṣẹ́ náà, bí irúgbìn àti ajílẹ̀." },
          { objective: "O1", q: "Gẹ́gẹ́ bí IRS ti sọ, àkọsílẹ̀ tó dára ń ràn ọ́ lọ́wọ́ láti:", options: ["Má ṣe san owó orí láéláé", "Wo bí iṣẹ́ rẹ ṣe ń tẹ̀síwájú kí o sì múra ìwé owó orí sílẹ̀", "Má kọ ìwé ẹ̀rí ìsanwó mọ́", "Rí ohun èlò lọ́fẹ̀ẹ́"], answer: 1, why: "IRS sọ pé àkọsílẹ̀ ń ràn ọ́ lọ́wọ́ láti máa wo iṣẹ́ rẹ àti láti múra ìwé owó orí rẹ sílẹ̀." },
          { objective: "O2", q: "O ń ta ẹyin ní owó lọ́wọ́ láìsí ìwé ẹ̀rí. Kí ni ẹ̀rí rẹ?", options: ["Ìwé ọjà ojoojúmọ́ pẹ̀lú ọjọ́, ohun tí o tà, iye mélòó àti àpapọ̀", "Ohun tí o rántí", "Kò sí ohun tí a nílò", "Fọ́tò àwọn adìyẹ rẹ"], answer: 0, why: "Ìwé ọjà ojoojúmọ́ tí a kọ sílẹ̀ ń ṣe àkọsílẹ̀ ọjà owó lọ́wọ́." },
          { objective: "O2", q: "Kí ló dé tí o fi máa kọ nọ́mbà ìwé ẹ̀rí sínú ìwé àkọsílẹ̀ owó rẹ?", options: ["Ó ń jẹ́ kí ìwé náà gùn sí i", "Báńkì ló ní kí o ṣe bẹ́ẹ̀", "Kí o lè rí ẹ̀rí ìlà èyíkéyìí", "Ó ń yí àpapọ̀ padà"], answer: 2, why: "Nọ́mbà ń so àkọsílẹ̀ kọ̀ọ̀kan mọ́ ẹ̀rí rẹ̀." },
          { objective: "O3", q: "O gbé owó láti àkáǹtì iṣẹ́ lọ sí àkáǹtì àdáni rẹ láti san owó fún ara rẹ. Báwo ni o ṣe máa kọ ọ́ sílẹ̀?", options: ["Gẹ́gẹ́ bí ìnáwó iṣẹ́", "Gẹ́gẹ́ bí owner's draw", "Gẹ́gẹ́ bí ọjà tí o tà", "O kò ní kọ ọ́ sílẹ̀"], answer: 1, why: "Owó tí olówó mú jáde jẹ́ owner's draw, kì í ṣe ìnáwó iṣẹ́." }
        ]
      }
    },
    {
      name: "Orí 2: Ìwé àkọsílẹ̀ owó rẹ àti èrè rẹ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe ìwé àkọsílẹ̀ owó tó rọrùn lórí spreadsheet",
          minutes: 6,
          goal: "Ṣe ìwé àkọsílẹ̀ owó lórí spreadsheet ọ̀fẹ́ pẹ̀lú àwọn òpó tó tọ́ àti owó tó kù (running balance).",
          text: [
            "Ìwé àkọsílẹ̀ owó (ledger) jẹ́ àkọsílẹ̀ gbogbo owó tó wọlé àti tó jáde, ìlà kan fún ìṣòwò kọ̀ọ̀kan. Spreadsheet ọ̀fẹ́ bí Google Sheets tàbí Microsoft Excel ń ṣiṣẹ́ dáadáa, ó sì ń ṣírò àpapọ̀ fún ọ.",
            "Lo òpó méje: Date (ọjọ́), Description (àpèjúwe), Category (ẹ̀ka), Money in (owó tó wọlé), Money out (owó tó jáde), Balance (owó tó kù), Receipt number (nọ́mbà ìwé ẹ̀rí). Fi owó tí o fi bẹ̀rẹ̀ sí ìlà àkọ́kọ́. Nínú àpótí Balance ìlà tó kàn, tẹ formula tí ó mú owó tó kù lókè, tí ó fi owó tó wọlé kún un, tí ó sì yọ owó tó jáde kúrò. Fún àpẹẹrẹ, tí Balance bá jẹ́ òpó F, Money in jẹ́ D, Money out sì jẹ́ E, ìlà 3 máa jẹ́ =F2+D3-E3. Da formula yẹn kọ sísàlẹ̀.",
            "Yan àkọsílẹ̀ ẹ̀ka kúkúrú kan, kí o sì máa lo ọ̀rọ̀ kan náà ní gbogbo ìgbà, fún àpẹẹrẹ: Sales (ọjà tí a tà), Donations (ọrẹ), Supplies (ohun èlò), Rent (owó ilé), Fuel (epo), Phone (fóònù), Advertising (ìpolówó), Wages (owó oṣù), Owner's draw. Ọ̀rọ̀ kan náà ń jẹ́ kí ó rọrùn láti ṣírò àpapọ̀ ẹ̀ka kọ̀ọ̀kan lẹ́yìn náà.",
            "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ láti ṣètò spreadsheet náà: ní kí ó ṣàlàyé formula kan tàbí kí ó dábàá àwọn ẹ̀ka fún irú iṣẹ́ rẹ. Má ṣe fi nọ́mbà àkáǹtì báńkì tàbí ìsọfúnni àdáni oníbàárà sínú rẹ̀."
          ],
          steps: ["Ṣí spreadsheet tuntun òfìfo, fún un ní orúkọ, fún àpẹẹrẹ \"2026 Ledger\", kí o sì pe tab àkọ́kọ́ ní Ledger.", "Tẹ orúkọ àwọn òpó: Date, Description, Category, Money in, Money out, Balance, Receipt #.", "Fi owó tí o fi bẹ̀rẹ̀ sínú òpó Balance ní ìlà 2.", "Ní ìlà 3 òpó Balance, tẹ =F2+D3-E3 kí o sì da á kọ sísàlẹ̀.", "Kọ àkọsílẹ̀ ẹ̀ka rẹ sí igun kan tàbí sí tab kejì, kí o sì máa lo ọ̀rọ̀ wọ̀nyẹn nìkan."],
          words: [["Ledger (ìwé àkọsílẹ̀ owó)", "àkọsílẹ̀ gbogbo owó tó wọlé àti tó jáde, ìlà kan fún ìṣòwò kọ̀ọ̀kan."], ["Transaction (ìṣòwò)", "ìgbà kan tí owó gbé: ọjà tí a tà, ìsanwó, ohun tí a rà."], ["Formula", "ìṣirò nínú àpótí spreadsheet tí ó bẹ̀rẹ̀ pẹ̀lú =."], ["Category (ẹ̀ka)", "orúkọ tí ó ń kó owó tó jọra pọ̀, bí Fuel tàbí Supplies."]],
          slides: [
            { title: "Ledger: ìlà kan fún ìṣòwò kọ̀ọ̀kan", bullets: ["Gbogbo owó tó wọlé àti tó jáde", "Spreadsheet ọ̀fẹ́ ló ń ṣe ìṣirò àpapọ̀"] },
            { title: "Òpó méje", bullets: ["Date, Description, Category", "Money in, Money out", "Balance, Receipt #"] },
            { title: "Owó tó kù (running balance)", bullets: ["Bẹ̀rẹ̀ pẹ̀lú owó tí o fi bẹ̀rẹ̀", "Ìlà tó kàn: =F2+D3-E3", "Da formula náà kọ sísàlẹ̀"] },
            { title: "Ọ̀rọ̀ ẹ̀ka kan náà ní gbogbo ìgbà", bullets: ["Sales, Donations, Supplies, Rent, Fuel", "Phone, Advertising, Wages, Owner's draw"] }
          ],
          tryIt: "Ṣe ìwé àkọsílẹ̀ owó náà báyìí lórí Google Sheets tàbí Excel pẹ̀lú òpó méje, owó tí o fi bẹ̀rẹ̀ àti formula owó tó kù. Kọ ìṣòwò mẹ́ta láti ọ̀sẹ̀ yìí sínú rẹ̀, ti gidi tàbí àpẹẹrẹ, kí o sì ṣàyẹ̀wò pé owó tó kù ń yí padà dáadáa.",
          youCanNow: "ṣe ìwé àkọsílẹ̀ owó lórí spreadsheet pẹ̀lú àwọn ẹ̀ka àti owó tó kù.",
          quickCheck: [
            { objective: "O4", q: "Nínú ìwé àkọsílẹ̀ owó, kí ni ìlà kọ̀ọ̀kan ní?", options: ["Oṣù kan lódindi", "Ìṣòwò kan", "Orúkọ àti àdírẹ́sì oníbàárà kan", "Àpapọ̀ ẹ̀ka kan"], answer: 1, why: "Ìwé àkọsílẹ̀ owó ń kọ gbogbo owó tó wọlé àti tó jáde sílẹ̀, ìlà kan fún ìṣòwò kọ̀ọ̀kan." },
            { objective: "O4", q: "O tẹ \"supplies\" ní ọ̀sẹ̀ kan àti \"materials\" ní ọ̀sẹ̀ tó tẹ̀lé e fún ìnáwó kan náà. Kí ló yẹ kí o ṣe?", options: ["Pa ọ̀rọ̀ méjèèjì mọ́", "Pa àwọn ìlà yẹn rẹ́", "Yí wọn padà sí ọ̀rọ̀ ẹ̀ka kan, kí o sì máa lo ọ̀rọ̀ yẹn nìkan láti ìsinsìnyí lọ", "Fi òpó tuntun kún un fún ọ̀rọ̀ kọ̀ọ̀kan"], answer: 2, why: "Lílo ọ̀rọ̀ ẹ̀ka kan náà ní gbogbo ìgbà ń jẹ́ kí ó rọrùn láti ṣírò àpapọ̀ ẹ̀ka kọ̀ọ̀kan lẹ́yìn náà." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kíkọ àkọsílẹ̀ lọ́sọ̀ọ̀sẹ̀ àti ṣíṣàyẹ̀wò rẹ̀ pẹ̀lú ti báńkì",
          minutes: 5,
          goal: "Jẹ́ kí ìwé àkọsílẹ̀ owó máa wà ní ìmúdójúìwọ̀n, kí o sì ṣàyẹ̀wò rẹ̀ pẹ̀lú ìwé àkọsílẹ̀ báńkì tàbí mobile money rẹ.",
          text: [
            "Ìṣírò owó iṣẹ́ ń ṣiṣẹ́ jù bí àṣà kékeré ọ̀sọ̀ọ̀sẹ̀, fún àpẹẹrẹ ìṣẹ́jú 20 ní gbogbo òwúrọ̀ ọjọ́ Ajé. Kó ìwé ẹ̀rí, ìwé ọjà àti invoice ọ̀sẹ̀ náà jọ, kí o sì kọ ọ̀kọ̀ọ̀kan sínú ìwé àkọsílẹ̀ owó bí ìlà kan pẹ̀lú ẹ̀ka rẹ̀ àti nọ́mbà ìwé ẹ̀rí rẹ̀.",
            "Lẹ́ẹ̀kan lóṣù, ṣàyẹ̀wò ìwé àkọsílẹ̀ owó rẹ pẹ̀lú ìwé àkọsílẹ̀ (statement) báńkì, credit union tàbí mobile money rẹ. A ń pe èyí ní reconciling (àyẹ̀wò ìbámu). Sàmì sí ìlà kọ̀ọ̀kan lórí statement tí ó bá ìlà kan nínú ìwé àkọsílẹ̀ rẹ mu. Ohunkóhun tó wà lórí statement tí kò sí nínú ìwé àkọsílẹ̀ rẹ, bí owó tí báńkì gbà tàbí ìsanwó oníbàárà tí o gbàgbé, fi kún un. Ohunkóhun tó wà nínú ìwé àkọsílẹ̀ rẹ tí kò sí lórí statement lè jẹ́ owó lọ́wọ́, tàbí àṣìṣe tí o gbọ́dọ̀ tún ṣe.",
            "Ní ìparí, owó tó kù nínú ìwé àkọsílẹ̀ rẹ gbọ́dọ̀ bá owó tó kù lórí statement mu, lẹ́yìn tí o bá ti ṣírò owó tó wà lọ́wọ́ rẹ àti ìsanwó tí kò tíì wọlé. Tí kò bá bára mu, wá ìlà tó sọnù, nọ́mbà tí a tẹ lẹ́ẹ̀mejì, tàbí àwọn díjíìtì tí ó yípo, bí 54 tí a tẹ bí 45.",
            "Àpẹẹrẹ: ìwé àkọsílẹ̀ owó àjọ àìlérè bọ́ọ̀lù ọ̀dọ́ kan kéré sí ti báńkì ní 15 dollar. Akápò rí ọrẹ 15 dollar tí ó wọlé láti app fóònù tí wọn kò kọ sílẹ̀, ó fi kún un, báyìí wọ́n bára mu."
          ],
          steps: ["Yan àkókò kan lọ́sọ̀ọ̀sẹ̀ láti ṣe ìmúdójúìwọ̀n ìwé àkọsílẹ̀ owó.", "Kọ ìwé ẹ̀rí, ìwé ọjà àti invoice kọ̀ọ̀kan sílẹ̀ pẹ̀lú ẹ̀ka àti nọ́mbà ìwé ẹ̀rí.", "Lẹ́ẹ̀kan lóṣù, gba statement báńkì tàbí mobile money rẹ.", "Sàmì sí ìlà statement kọ̀ọ̀kan tí ó bá ìwé àkọsílẹ̀ mu; fi èyí tí ó sọnù kún un.", "Fi owó tó kù wé ara wọn. Tí wọ́n bá yàtọ̀, wá ìlà tó sọnù, èyí tí a kọ lẹ́ẹ̀mejì tàbí àwọn díjíìtì tí ó yípo."],
          words: [["Reconcile (àyẹ̀wò ìbámu)", "ṣíṣàyẹ̀wò àkọsílẹ̀ rẹ pẹ̀lú statement báńkì tàbí mobile money kí o sì tún ìyàtọ̀ ṣe."], ["Statement", "àkọsílẹ̀ ìṣòwò tí báńkì tàbí ilé-iṣẹ́ mobile money rẹ fún ọ fún àkókò kan."], ["Cleared (ti wọlé)", "nígbà tí ìsanwó kan ti kọjá, tí ó sì hàn lórí statement."]],
          slides: [
            { title: "Àṣà ọ̀sọ̀ọ̀sẹ̀", bullets: ["Nǹkan bí ìṣẹ́jú 20, ọjọ́ kan náà lọ́sọ̀ọ̀sẹ̀", "Kọ ìwé ẹ̀rí, ìwé ọjà àti invoice sílẹ̀"] },
            { title: "Ṣe àyẹ̀wò ìbámu lẹ́ẹ̀kan lóṣù", bullets: ["Gba statement báńkì tàbí mobile money", "Sàmì sí ìlà kọ̀ọ̀kan tó bára mu", "Fi èyí tó sọnù kún un, bí owó tí báńkì gbà"] },
            { title: "Nígbà tí kò bá bára mu", bullets: ["Ìlà kan tó sọnù", "Nọ́mbà tí a tẹ lẹ́ẹ̀mejì", "Díjíìtì tí ó yípo: 54 tí a tẹ bí 45"] }
          ],
          tryIt: "Gba tàbí ṣí statement oṣù tó kọjá fún àkáǹtì iṣẹ́ rẹ tàbí mobile money (tàbí ti àdáni rẹ, fún àṣeṣe). Yan ìlà márùn-ún lórí statement, kí o sì ṣàyẹ̀wò pé ọ̀kọ̀ọ̀kan wà nínú ìwé àkọsílẹ̀ owó rẹ. Fi èyí tí ó sọnù kún un.",
          youCanNow: "jẹ́ kí ìwé àkọsílẹ̀ owó rẹ wà ní ìmúdójúìwọ̀n lọ́sọ̀ọ̀sẹ̀, kí o sì ṣe àyẹ̀wò ìbámu rẹ̀ pẹ̀lú statement rẹ lóṣooṣù.",
          quickCheck: [
            { objective: "O5", q: "Kí ni reconciling (àyẹ̀wò ìbámu) túmọ̀ sí?", options: ["Ṣíṣe ètò owó fún oṣù tó ń bọ̀", "Sísan gbogbo gbèsè rẹ", "Kíkọ ìwé àkọsílẹ̀ owó tuntun", "Ṣíṣàyẹ̀wò ìwé àkọsílẹ̀ owó rẹ pẹ̀lú statement báńkì tàbí mobile money rẹ"], answer: 3, why: "Àyẹ̀wò ìbámu ni sísàmì sí ìlà statement kọ̀ọ̀kan pẹ̀lú ìwé àkọsílẹ̀ rẹ àti títún ohun tó sọnù ṣe." },
            { objective: "O5", q: "Ìsanwó oníbàárà kan wà lórí statement rẹ ṣùgbọ́n kò sí nínú ìwé àkọsílẹ̀ owó rẹ. Kí ni o máa ṣe?", options: ["Fi í kún ìwé àkọsílẹ̀ owó", "Fojú fò ó", "Pa á rẹ́ lórí statement", "Dúró di ọdún tó ń bọ̀"], answer: 0, why: "Ohunkóhun tó wà lórí statement tí kò sí nínú ìwé àkọsílẹ̀ owó, a máa fi kún un." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kíka ìwé èrè àti àdánù ìpìlẹ̀",
          minutes: 6,
          goal: "Ṣe ìwé èrè àti àdánù oṣù kan láti inú ìwé àkọsílẹ̀ owó rẹ, kí o sì sọ ohun tí ó ń sọ fún ọ.",
          text: [
            "Ìwé èrè àti àdánù (profit-and-loss), tí a tún ń pè ní P&L tàbí income statement, jẹ́ àkópọ̀ kúkúrú fún àkókò kan bí oṣù kan. Ó ń fi àpapọ̀ owó tó wọlé hàn, àpapọ̀ ìnáwó ní ẹ̀ka kọ̀ọ̀kan, àti ìyàtọ̀ wọn. Owó tó wọlé yọ ìnáwó kúrò ni èrè. Tí ìnáwó bá pọ̀ jù, àdánù ni.",
            "O lè ṣe é láti inú ìwé àkọsílẹ̀ owó rẹ. Lórí tab tuntun, kọ ẹ̀ka kọ̀ọ̀kan sílẹ̀. Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, lo formula SUMIF láti ṣírò àpapọ̀ ẹ̀ka náà. Fún àpẹẹrẹ, =SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E) ń ṣírò gbogbo owó Money out tí ẹ̀ka rẹ̀ jẹ́ Supplies, tí orúkọ tab ìwé àkọsílẹ̀ owó rẹ bá jẹ́ Ledger (òpó C ni Category, òpó E sì ni Money out). Ṣírò àpapọ̀ àwọn ẹ̀ka owó tó wọlé, ṣírò àpapọ̀ àwọn ẹ̀ka ìnáwó, kí o sì yọ ọ̀kan kúrò lára èkejì. Owner's draw kì í ṣe ìnáwó, nítorí náà fi í sílẹ̀ kúrò nínú ìnáwó.",
            "Lẹ́yìn náà, kà á. Ṣé o jèrè? Ìnáwó wo ló pọ̀ jù? Ṣé ó pọ̀ sí i láti oṣù tó kọjá? Fún oko, ṣé oṣù ìkórè bo àwọn oṣù tí kò sí iṣẹ́ púpọ̀? Fún àjọ àìlérè, ṣé owó ètò kò kọjá iye grant?",
            "P&L ń sọ fún ọ bí iṣẹ́ náà ṣe ń lọ. Kì í ṣe ìwé owó orí rẹ. Òfin owó orí ló ń pinnu ohun tó kà àti ìgbà tí ó kà, wọ́n sì yàtọ̀ láti orílẹ̀-èdè sí orílẹ̀-èdè. Gbé ìwé àkọsílẹ̀ owó, ìwé ẹ̀rí àti P&L rẹ lọ sọ́dọ̀ akọ̀wé owó tàbí ọ̀jọ̀gbọ́n owó orí fún owó orí."
          ],
          steps: ["Fi tab tuntun tí a pè ní P&L kún un, kí o sì kọ àwọn ẹ̀ka rẹ sílẹ̀.", "Lẹ́gbẹ̀ẹ́ ẹ̀ka kọ̀ọ̀kan, lo SUMIF láti ṣírò àpapọ̀ rẹ̀ láti inú ìwé àkọsílẹ̀ owó.", "Ṣírò àpapọ̀ àwọn ẹ̀ka owó tó wọlé àti àwọn ẹ̀ka ìnáwó (fi owner's draw sílẹ̀).", "Yọ kúrò: owó tó wọlé yọ ìnáwó = èrè tàbí àdánù.", "Kọ gbólóhùn méjì nípa ohun tí àwọn nọ́mbà náà ń sọ fún ọ."],
          words: [["Profit-and-loss (P&L)", "àkópọ̀ owó tó wọlé, ìnáwó àti èrè tàbí àdánù fún àkókò kan."], ["Profit (èrè)", "ohun tó kù nígbà tí owó tó wọlé bá pọ̀ ju ìnáwó lọ."], ["Loss (àdánù)", "nígbà tí ìnáwó bá pọ̀ ju owó tó wọlé lọ."], ["SUMIF", "formula spreadsheet tí ó ń ṣírò àpapọ̀ àwọn ìlà tí ó bá orúkọ kan mu nìkan."]],
          slides: [
            { title: "Èrè àti àdánù ní ìlà kan", bullets: ["Owó tó wọlé yọ ìnáwó = èrè", "Ìnáwó pọ̀ jù? Àdánù ni yẹn"] },
            { title: "Ṣe é láti inú ìwé àkọsílẹ̀ owó rẹ", bullets: ["Kọ àwọn ẹ̀ka sórí tab tuntun", "Lo SUMIF láti ṣírò ọ̀kọ̀ọ̀kan", "Fi owner's draw sílẹ̀ kúrò nínú ìnáwó"] },
            { title: "Kà á", bullets: ["Èrè tàbí àdánù?", "Ìnáwó tó pọ̀ jù? Ṣé ó ń pọ̀ sí i?", "Ṣé àwọn oṣù tó dára bo àwọn oṣù tí kò sí iṣẹ́ púpọ̀?"] },
            { title: "Kì í ṣe ìwé owó orí", bullets: ["Òfin owó orí ló ń pinnu ohun tó kà", "Gbé àkọsílẹ̀ rẹ lọ sọ́dọ̀ akọ̀wé owó"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ó kéré tán ìṣòwò 10, ti gidi tàbí àpẹẹrẹ, fún oṣù kan sínú ìwé àkọsílẹ̀ owó rẹ, pẹ̀lú ẹ̀ka àti nọ́mbà ìwé ẹ̀rí, kí o sì ṣàyẹ̀wò wọn pẹ̀lú statement kan. Lẹ́yìn náà ṣe tab P&L pẹ̀lú SUMIF, wá èrè tàbí àdánù rẹ, kí o sì kọ gbólóhùn méjì nípa ohun tí ó ń sọ fún ọ.",
          youCanNow: "ṣe ìwé èrè àti àdánù oṣù kan láti inú ìwé àkọsílẹ̀ owó tìrẹ, kí o sì kà á.",
          quickCheck: [
            { objective: "O6", q: "Kí ni a ń pe owó tó wọlé yọ ìnáwó nígbà tí owó tó wọlé bá pọ̀ jù?", options: ["Owner's draw", "Àdánù", "Èrè", "Owó tó kù (balance)"], answer: 2, why: "Owó tó wọlé yọ ìnáwó ni èrè; tí ìnáwó bá pọ̀ jù, àdánù ni." },
            { objective: "O6", q: "O ń ṣe P&L rẹ. Ibo ni owner's draw ń lọ?", options: ["Sínú ẹ̀ka ìnáwó tó pọ̀ jù", "Sínú owó tó wọlé", "Sínú Supplies", "Fi í sílẹ̀ kúrò nínú ìnáwó"], answer: 3, why: "Owner's draw kì í ṣe ìnáwó iṣẹ́, nítorí náà kò sí nínú ìnáwó lórí P&L." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìwé àkọsílẹ̀ owó rẹ àti èrè rẹ",
        questions: [
          { objective: "O4", q: "Àwọn òpó wo ló ń ṣe ìwé àkọsílẹ̀ owó tó rọrùn tó dára?", options: ["Date, Description, Category, Money in, Money out, Balance, Receipt #", "Orúkọ, Ọjọ́ ìbí, Eré tí ó fẹ́ràn", "Àpapọ̀ nìkan", "Ọ̀rọ̀ aṣínà àti nọ́mbà káàdì oníbàárà"], answer: 0, why: "Àwọn òpó wọ̀nyí ń kọ ìṣòwò kọ̀ọ̀kan sílẹ̀, wọ́n sì ń so ó mọ́ ẹ̀rí rẹ̀." },
          { objective: "O4", q: "Kí ló dé tí o fi máa lo ọ̀rọ̀ ẹ̀ka kan náà ní gbogbo ìgbà?", options: ["Spreadsheet náà kò ní ṣí tí o kò bá ṣe bẹ́ẹ̀", "Láti jẹ́ kí ìwé náà ní àwọ̀ púpọ̀", "Kí o lè ṣírò àpapọ̀ ẹ̀ka kọ̀ọ̀kan lẹ́yìn náà", "Nítorí báńkì ló ní kí o ṣe bẹ́ẹ̀"], answer: 2, why: "Ọ̀rọ̀ tó bára mu ń jẹ́ kí SUMIF ṣírò àpapọ̀ ẹ̀ka kọ̀ọ̀kan dáadáa." },
          { objective: "O5", q: "Ìwé àkọsílẹ̀ owó rẹ kéré sí statement báńkì ní 15 dollar. Kí ni o máa kọ́kọ́ wá?", options: ["Báńkì tuntun", "App spreadsheet tuntun", "Kò sí nǹkan; ìyàtọ̀ kékeré kò jámọ́ nǹkan", "Owó tí a fi sí báńkì tàbí ìsanwó tó wà lórí statement ṣùgbọ́n tí kò sí nínú ìwé àkọsílẹ̀ owó"], answer: 3, why: "Ìyàtọ̀ sábà máa ń túmọ̀ sí ìlà tó sọnù, tí a kọ lẹ́ẹ̀mejì tàbí tí a tẹ ní àṣìṣe." },
          { objective: "O6", q: "Owó tó wọlé jẹ́ 2,000, ìnáwó jẹ́ 1,500, owner's draw sì jẹ́ 300. Èló ni èrè?", options: ["200", "500", "3,800", "1,500"], answer: 1, why: "Èrè ni owó tó wọlé yọ ìnáwó: 2,000 - 1,500 = 500. Owner's draw kì í ṣe ìnáwó." },
          { objective: "O6", q: "Ta ni o yẹ kí o bá sọ̀rọ̀ nípa owó orí rẹ?", options: ["Akọ̀wé owó tàbí ọ̀jọ̀gbọ́n owó orí", "Àjèjì kan nínú ọ̀rọ̀ lórí ayélujára", "Kò sí ẹnìkan; P&L ni ìwé owó orí rẹ", "Àwọn oníbàárà rẹ"], answer: 0, why: "P&L kì í ṣe ìwé owó orí; akọ̀wé owó mọ òfin owó orí." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìpìlẹ̀ Ìṣírò Owó Iṣẹ́ (Bookkeeping)",
    questions: [
      { objective: "O1", q: "Ìṣírò owó iṣẹ́ (bookkeeping) túmọ̀ sí:", options: ["Kíka ìwé nípa iṣẹ́ òwò", "Fífojú díwọ̀n èrè rẹ ní òpin ọdún", "Kíkọ gbogbo owó tó ń wọlé àti tó ń jáde sílẹ̀", "Kíkọ ìwé ìrántí ojoojúmọ́"], answer: 2, why: "Ìṣírò owó iṣẹ́ ń kọ gbogbo owó tó wọlé àti tó jáde sílẹ̀." },
      { objective: "O1", q: "Fún àjọ àìlérè, èwo ni owó tó wọlé?", options: ["Ọrẹ", "Owó ilé ọ́fíìsì", "Ìpanu fún àwọn olùyọ̀ǹda", "Ọ̀dà ẹ̀rọ ìtẹ̀wé"], answer: 0, why: "Ọrẹ àti grant jẹ́ owó tó ń wọlé." },
      { objective: "O2", q: "Èwo ni àpẹẹrẹ ìwé àtìlẹ́yìn fún ìnáwó?", options: ["Text láti ọ̀dọ̀ ọ̀rẹ́", "Káàdì iṣẹ́ (business card)", "Àkọsílẹ̀ ohun tí o máa ṣe", "Ìwé ẹ̀rí ìsanwó tàbí invoice"], answer: 3, why: "IRS ka ìwé ẹ̀rí ìsanwó, invoice àti statement sí ẹ̀rí ìnáwó." },
      { objective: "O2", q: "Kí ni ọ̀nà tó rọrùn jù láti dá ìwé ẹ̀rí onípépà dúró láti parẹ́ tàbí sọnù?", options: ["Fi wọ́n sínú àpò ṣòkòtò", "Ya fọ́tò wọn kí o sì tò wọ́n ní ọjọ́ kan náà", "Jù wọ́n nù lẹ́yìn ọ̀sẹ̀ kan", "Fún àwọn oníbàárà ní wọn"], answer: 1, why: "Fọ́tò ọjọ́ kan náà, tí a tò sí ti oṣù rẹ̀, ń pa ẹ̀rí mọ́." },
      { objective: "O2", q: "Fún ọ̀pọ̀ ìwé owó orí US, òfin ìpìlẹ̀ IRS ni láti pa àkọsílẹ̀ mọ́ fún:", options: ["Ọ̀sẹ̀ 1", "Ọdún 3, ó gùn jù bẹ́ẹ̀ lọ nínú àwọn ọ̀rọ̀ kan", "Oṣù 1", "Láéláé; a kò nílò àkọsílẹ̀"], answer: 1, why: "IRS sọ ọdún 3 ní ọ̀pọ̀ ìgbà, pẹ̀lú àkókò tó gùn jù nínú àwọn ọ̀rọ̀ kan." },
      { objective: "O2", q: "Àkọsílẹ̀ owó orí òṣìṣẹ́ gbọ́dọ̀ wà ní ìpamọ́ fún ó kéré tán:", options: ["Oṣù 1", "Ọdún 1", "Ọdún 4", "Ọjọ́ 10"], answer: 2, why: "IRS sọ ó kéré tán ọdún 4 lẹ́yìn tí owó orí náà bá yẹ láti san tàbí tí a bá ti san án." },
      { objective: "O3", q: "Kí ló dé tí o fi máa pa owó iṣẹ́ mọ́ sínú àkáǹtì tàbí wallet tirẹ̀?", options: ["Kí o lè mọ̀ bóyá iṣẹ́ náà ń mówó wọlé", "Nítorí dída owó pọ̀ dùn", "Kí o má baà kọ ìwé ẹ̀rí", "Láti fi ọjà tí o tà pamọ́"], answer: 0, why: "Owó tó dàpọ̀ ń bo bí iṣẹ́ náà ṣe ń lọ gan-an mọ́lẹ̀." },
      { objective: "O3", q: "O fi káàdì àdáni rẹ san owó ohun èlò iṣẹ́. Kí ni o máa ṣe?", options: ["Gbàgbé rẹ̀", "Kọ ọ́ sílẹ̀ bí ọjà tí o tà", "Jù ìwé ẹ̀rí náà nù", "Kọ ọ́ sínú ìwé àkọsílẹ̀ owó kí o sì pa ìwé ẹ̀rí mọ́"], answer: 3, why: "Kíkọ ọ́ sílẹ̀ ń jẹ́ kí àkọsílẹ̀ pé, kí ẹ̀rí sì wà ní ààbò." },
      { objective: "O3", q: "Olùfúnni kan fúnni lówó fún ètò eré ìdárayá ọ̀dọ́ nìkan. Àjọ àìlérè náà gbọ́dọ̀:", options: ["Ná an fún ohunkóhun", "Dá a padà lójú ẹsẹ̀", "Má ṣe kọ ọ́ sílẹ̀", "Tọpinpin rẹ̀ kí wọ́n lè ná an fún ètò yẹn"], answer: 3, why: "A gbọ́dọ̀ tọpinpin ẹ̀bùn tí a pààlà sí, kí a sì lò wọ́n fún ohun tí a fi fúnni." },
      { objective: "O4", q: "Ìwé àkọsílẹ̀ owó ní:", options: ["Ojú-ìwé kan fún oníbàárà kọ̀ọ̀kan", "Ìlà kan fún ìṣòwò kọ̀ọ̀kan", "Àpapọ̀ ọdún nìkan", "Ìnáwó nìkan"], answer: 1, why: "Ọjà tí a tà, ìsanwó tàbí ohun tí a rà kọ̀ọ̀kan ní ìlà tirẹ̀." },
      { objective: "O4", q: "Nínú spreadsheet, formula ń bẹ̀rẹ̀ pẹ̀lú:", options: ["#", "$", "=", "?"], answer: 2, why: "Àwọn formula spreadsheet ń bẹ̀rẹ̀ pẹ̀lú àmì ìdọ́gba (=)." },
      { objective: "O4", q: "Balance ni òpó F, Money in ni D, Money out ni E. Owó tó kù ní ìlà 3 ni:", options: ["=F2+D3-E3", "=D3*E3", "=F2-D3-E3", "=E3"], answer: 0, why: "Mú owó tó kù lókè, fi owó tó wọlé kún un, kí o sì yọ owó tó jáde kúrò." },
      { objective: "O5", q: "Kí ni àṣà tó dára fún mímú àkọsílẹ̀ wà ní ìmúdójúìwọ̀n?", options: ["Ṣe ìmúdójúìwọ̀n lẹ́ẹ̀kan lọ́sọ̀ọ̀sẹ̀ ní àkókò kan pàtó", "Ṣe ìmúdójúìwọ̀n nígbà tí ọ́fíìsì owó orí bá kọ̀wé nìkan", "Ṣe ìmúdójúìwọ̀n lẹ́ẹ̀kan ní ọdún mélòó kan", "Má ṣe ìmúdójúìwọ̀n láéláé"], answer: 0, why: "Àṣà kúkúrú ọ̀sọ̀ọ̀sẹ̀ ń jẹ́ kí àkọsílẹ̀ pé, kí ó sì rọrùn." },
      { objective: "O5", q: "Reconciling (àyẹ̀wò ìbámu) túmọ̀ sí:", options: ["Pípadà rẹ́ pẹ̀lú oníbàárà", "Pípa ìwé ẹ̀rí àtijọ́ rẹ́", "Ṣíṣàyẹ̀wò ìwé àkọsílẹ̀ owó rẹ pẹ̀lú statement báńkì tàbí mobile money", "Ṣíṣí àkáǹtì tuntun"], answer: 2, why: "Àyẹ̀wò ìbámu ń wá ìyàtọ̀ láàárín àkọsílẹ̀ rẹ àti statement, ó sì ń tún wọn ṣe." },
      { objective: "O5", q: "Owó tí báńkì gbà (bank fee) wà lórí statement ṣùgbọ́n kò sí nínú ìwé àkọsílẹ̀ owó rẹ. O yẹ kí o:", options: ["Fojú fò ó", "Fi í kún ìwé àkọsílẹ̀ owó", "Ti àkáǹtì náà pa", "Pa statement náà rẹ́"], answer: 1, why: "Ohunkóhun gidi tó wà lórí statement gbọ́dọ̀ wà nínú ìwé àkọsílẹ̀ owó." },
      { objective: "O5", q: "O tẹ 45 dípò 54. Irú àṣìṣe yìí ni:", options: ["Ìlà tó sọnù", "Àkọsílẹ̀ lẹ́ẹ̀mejì", "Ẹ̀ka tuntun", "Díjíìtì tí ó yípo"], answer: 3, why: "Díjíìtì tí ó yípo jẹ́ ìdí tó wọ́pọ̀ tí àkọsílẹ̀ kì í fi í bára mu." },
      { objective: "O6", q: "Ìwé èrè àti àdánù ń fi hàn:", options: ["Owó tó kù ní báńkì nìkan", "Orúkọ àwọn oníbàárà rẹ", "Owó tó wọlé, ìnáwó àti ìyàtọ̀ wọn fún àkókò kan", "Credit score rẹ"], answer: 2, why: "P&L ń ṣe àkópọ̀ owó tó wọlé, ìnáwó àti èrè tàbí àdánù." },
      { objective: "O6", q: "Formula wo ló ń ṣírò àpapọ̀ gbogbo owó Supplies láti inú ìwé àkọsílẹ̀ owó?", options: ["=SUM(Supplies)", "=Supplies+1", "=AVERAGE(C:C)", "=SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E)"], answer: 3, why: "SUMIF ń ṣírò àwọn ìlà tí ẹ̀ka wọn jẹ́ Supplies nìkan." },
      { objective: "O6", q: "Ìnáwó pọ̀ ju owó tó wọlé lọ ní oṣù yìí. Ìyẹn jẹ́:", options: ["Àdánù", "Èrè", "Owner's draw", "Ìwé ẹ̀rí ìsanwó"], answer: 0, why: "Nígbà tí ìnáwó bá pọ̀ ju owó tó wọlé lọ, àdánù ni èsì rẹ̀." },
      { objective: "O6", q: "P&L rẹ ti ṣetán. Ṣé òun ni ìwé owó orí rẹ?", options: ["Bẹ́ẹ̀ni, fi í ránṣẹ́ sí ọ́fíìsì owó orí bí ó ti rí", "Rárá; gbé àkọsílẹ̀ rẹ lọ sọ́dọ̀ akọ̀wé owó fún owó orí", "Bẹ́ẹ̀ni, tí ó bá fi èrè hàn", "Fún àwọn àjọ àìlérè nìkan"], answer: 1, why: "Òfin owó orí ló ń pinnu ohun tó kà; akọ̀wé owó lè ṣe owó orí rẹ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 1, 2, 6, 9, 11, 13, 16, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ìwé àkọsílẹ̀ owó ti ṣetán", objective: "O4", notYet: "Àwọn òpó kan kò sí, tàbí owó tó kù kò yí padà.", meets: "Gbogbo òpó méje, owó tí a fi bẹ̀rẹ̀, àti owó tó kù tí ó tọ̀nà lẹ́yìn ìlà kọ̀ọ̀kan.", exceeds: "Ó tún ní àkọsílẹ̀ ẹ̀ka tí kò yí padà lórí tab tirẹ̀, tí a ń lò pẹ̀lú ọ̀rọ̀ kan náà ní gbogbo ìgbà." },
      { name: "Owó tó wọlé àti ìnáwó ti wà létòlétò", objective: "O1", notYet: "Àwọn ìlà kan wà ní ẹ̀ka tí kò tọ́ tàbí kò ní ẹ̀ka.", meets: "Ó kéré tán ìṣòwò 10, ọ̀kọ̀ọ̀kan pẹ̀lú ẹ̀ka owó tó wọlé tàbí ìnáwó tó tọ́.", exceeds: "Owner's draw àti owó àdáni èyíkéyìí tí a lò fún iṣẹ́ ni a kọ sílẹ̀ lọ́nà tó tọ́." },
      { name: "Ẹ̀rí fún gbogbo ìlà", objective: "O2", notYet: "Àwọn ìlà kan kò ní nọ́mbà ìwé ẹ̀rí tàbí ẹ̀rí.", meets: "Gbogbo ìlà ní nọ́mbà ìwé ẹ̀rí tí ó bá ìwé ẹ̀rí tàbí ìwé ọjà tí a fi pamọ́ mu.", exceeds: "Ìwé ẹ̀rí wà nínú fódà oṣù náà, pépà náà sì wà nínú àpò ìwé tí ó bá a mu." },
      { name: "Ó ti ṣàyẹ̀wò rẹ̀ pẹ̀lú statement", objective: "O5", notYet: "A kò fi ìwé àkọsílẹ̀ owó wé statement.", meets: "A sàmì sí ìlà statement, a fi ìlà tó sọnù kún un, owó tó kù sì bára mu tàbí a ṣàlàyé ìyàtọ̀.", exceeds: "Ó lè dárúkọ ìyàtọ̀ kọ̀ọ̀kan tí ó rí àti bí ó ṣe tún un ṣe." },
      { name: "Ó ka èrè àti àdánù", objective: "O6", notYet: "Kò sí P&L, tàbí àpapọ̀ kò tọ̀nà.", meets: "P&L pẹ̀lú àpapọ̀ SUMIF, owner's draw kò sí nínú rẹ̀, èrè tàbí àdánù sì hàn.", exceeds: "Gbólóhùn méjì tó yé ń sọ ohun tí àwọn nọ́mbà náà túmọ̀ sí àti ohun kan láti yí padà ní oṣù tó ń bọ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì ń ṣe ìmúdójúìwọ̀n ìwé àkọsílẹ̀ owó wọn lọ́sọ̀ọ̀sẹ̀, tí wọ́n sì ń ṣe àyẹ̀wò ìbámu lóṣooṣù ní ìwádìí àtẹ̀lé ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n lo àkọsílẹ̀ wọn láti béèrè owó yíyá tàbí grant, tàbí tí wọ́n gbé e lọ sọ́dọ̀ akọ̀wé owó ní àkókò owó orí",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ iṣẹ́ òwò Koach Learn míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà pẹ̀lú spreadsheet ọ̀fẹ́: Google Sheets tàbí Microsoft Excel",
      "Ìwé ẹ̀rí ìsanwó oṣù kan, ti gidi tàbí àpẹẹrẹ, àti statement báńkì tàbí mobile money (tàbí àpẹẹrẹ kan)",
      "Kámẹ́rà fóònù fún fọ́tò ìwé ẹ̀rí, àti àpò ìwé fún ìwé ẹ̀rí onípépà",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ní ìṣòwò oṣù kan àti statement àpẹẹrẹ nílẹ̀ fún àwọn akẹ́kọ̀ọ́ tí kò fẹ́ lo nọ́mbà tiwọn.",
      "Ẹ ṣe ìwé àkọsílẹ̀ owó àti formula owó tó kù pọ̀ lórí ojú-iboju kan, lẹ́yìn náà jẹ́ kí àwọn akẹ́kọ̀ọ́ dà á kọ.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé kí wọ́n má ṣe fi nọ́mbà àkáǹtì tàbí ìsọfúnni oníbàárà sínú irinṣẹ́ AI tàbí ojú-iboju àjọlò.",
      "Má ṣe fúnni ní ìmọ̀ràn owó orí; rán ìbéèrè owó orí sí akọ̀wé owó tàbí ilé-iṣẹ́ owó orí.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
