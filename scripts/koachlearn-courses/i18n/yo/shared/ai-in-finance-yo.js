"use strict";

// Koach Learn course (Yoruba translation of shared/ai-in-finance.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-in-finance-yo",
  lang: "yo",
  translationOf: "ai-in-finance",
  category: "Small Business",
  name: "AI nínú Ìṣàkóso Owó",
  skills: "Dídáàbò bo ìsọfúnni owó nígbà tí o bá ń lo AI, Pípín owó tó wọlé àti owó tó jáde sí ìsọ̀rí, Ṣíṣe ètò ìnáwó oṣù, Fífi ètò ìnáwó wé ohun tó ṣẹlẹ̀ gan-an, Ṣíṣe àsọtẹ́lẹ̀ owó tó ń wọlé àti tó ń jáde, Ṣíṣàlàyé àwọn nọ́mbà",
  outcome: "lo olùrànlọ́wọ́ AI àti spreadsheet láti pín owó tó wọlé àti owó tó jáde nínú oṣù kan sí ìsọ̀rí, ṣe ètò ìnáwó kí o sì fi wé ohun tó ṣẹlẹ̀ gan-an, ṣe àsọtẹ́lẹ̀ owó fún ọ̀sẹ̀ 13, kí o sì ṣàlàyé èsì rẹ̀ ní ọ̀rọ̀ tó rọrùn, láìfi ìsọfúnni owó àdáni hàn.",
  about: [
    "Ìbéèrè nípa owó máa ń da àwọn olówò àti àwọn olórí àjọ aláìlérè láàmú lóru: Ṣé a máa lè san owó oṣù òṣìṣẹ́? Ibo ni owó lọ? Ṣé a lè gba òṣìṣẹ́ tuntun tàbí bẹ̀rẹ̀ ètò tuntun? Àwọn irinṣẹ́ AI lè ràn ọ́ lọ́wọ́ láti to àwọn nọ́mbà, ṣe spreadsheet, kí o sì ṣàlàyé ìtumọ̀ wọn.",
    "Ẹ̀kọ́ yìí wà fún àwọn olówò kékeré, àwọn olùdarí àjọ aláìlérè, àwọn akápò àti àwọn tí ń kọ́ iṣẹ́ ìṣirò owó (bookkeeping). Àwọn àpẹẹrẹ ni ọkọ̀ ìtajà oúnjẹ, ilé-iṣẹ́ ìmọ́tótó, àjọ aláìlérè eré ìdárayá fún ọ̀dọ́, àti ètò oúnjẹ ìjọ kan.",
    "O máa lo àwọn irinṣẹ́ ọ̀fẹ́ bí Google Sheets tàbí Excel pẹ̀lú ChatGPT, Microsoft Copilot tàbí Google Gemini. O máa fi nọ́mbà àpẹẹrẹ tàbí nọ́mbà tí a ti fọ̀ mọ́ ṣe àṣeṣe, kì í ṣe nọ́mbà àkáǹtì láéláé. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\", ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Ẹ̀kọ́ yìí kì í ṣe ìmọ̀ràn nípa owó-orí, òfin tàbí ìdókòwò; fún ìyẹn, lọ bá ọ̀jọ̀gbọ́n tó ní ìwé àṣẹ kí o sì wo irs.gov."
  ],
  finalTask: "Mú àkọsílẹ̀ owó oṣù kan, gidi tàbí àpẹẹrẹ, tí o ti yọ gbogbo nọ́mbà àkáǹtì àti orúkọ kúrò nínú rẹ̀. Ṣe spreadsheet tí ó pín owó tó wọlé àti owó tó jáde sí ìsọ̀rí, tábìlì ètò ìnáwó àti ohun tó ṣẹlẹ̀ gan-an tí ó ṣàlàyé ìyàtọ̀ mẹ́ta tó tóbi jù, àti àsọtẹ́lẹ̀ owó fún ọ̀sẹ̀ 13 tí o ti sàmì sí ọ̀sẹ̀ tí owó kéré jù. Lẹ́yìn náà, kọ ìròyìn owó gbólóhùn márùn-ún ní ọ̀rọ̀ tó rọrùn fún olówó, alájọṣe tàbí ìgbìmọ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olówò kékeré, àwọn olùṣirò owó, àwọn alákòóso ọ́fíìsì, àti àwọn akápò tàbí òṣìṣẹ́ àjọ aláìlérè tí ń bójú tó owó ṣùgbọ́n tí wọn kì í ṣe akọ̀wé-owó (accountant) tí a kọ́ ní iṣẹ́ náà.",
    startingPoint: "Wọ́n lè ka ìwé àkọsílẹ̀ báńkì, wọ́n sì lè lo fóònù tàbí kọ̀mpútà; àwọn kan ń kọ àkọsílẹ̀ sínú spreadsheet tàbí app ìṣirò owó. Díẹ̀ ni wọ́n ń ṣe ètò ìnáwó, àsọtẹ́lẹ̀ owó tàbí fọ́múlà, ọ̀pọ̀ kò sì tíì lo AI fún iṣẹ́ owó láìléwu.",
    gap: "Ọ̀pọ̀ àjọ kékeré máa ń mọ̀ pé owó ti fẹ́ tán nígbà tí ó ti pẹ́ jù, wọn kì í rí owó tí a san lẹ́ẹ̀mejì tàbí jìbìtì, ó sì máa ń ṣòro fún wọn láti ṣàlàyé àwọn nọ́mbà wọn fún alájọṣe tàbí ìgbìmọ̀. Àwọn akẹ́kọ̀ọ́ nílò láti lo AI àti spreadsheet láti to owó, ṣe ètò, ṣe àsọtẹ́lẹ̀ àti ṣàlàyé owó, kí wọ́n má fi ìsọfúnni owó àdáni sínú irinṣẹ́ AI, kí wọ́n sì ṣàyẹ̀wò gbogbo nọ́mbà.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a ṣàlàyé ọ̀rọ̀ owó ní ìgbà àkọ́kọ́",
      "Ẹ̀rọ: kọ̀mpútà dára jù fún spreadsheet; ó ṣòro láti ṣe iṣẹ́ yìí lórí fóònù",
      "Ìsọfúnni àdáni: kò sí nọ́mbà àkáǹtì, routing, káàdì, Social Security tàbí nọ́mbà owó-orí, ọ̀rọ̀ aṣínà tàbí orúkọ ènìyàn nínú irinṣẹ́ AI",
      "Kò sí ìmọ̀ràn nípa owó-orí, owó oṣù òṣìṣẹ́, òfin tàbí ìdókòwò: ṣàyẹ̀wò pẹ̀lú irs.gov, àjọ owó-orí ìpínlẹ̀ tàbí ọ̀jọ̀gbọ́n tó ní ìwé àṣẹ",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5, nǹkan bí ìṣẹ́jú 60 lápapọ̀ pẹ̀lú àkókò láti ṣe spreadsheet"
    ],
    prerequisites: "Kò sí. Àṣeṣe spreadsheet ìpìlẹ̀ (títẹ nǹkan sínú àpótí, SUM tó rọrùn) máa ràn ọ́ lọ́wọ́."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ owó oṣù kan tí o gbé jáde láti báńkì", action: "pèsè ìsọfúnni náà fún AI nípa yíyọ nọ́mbà àkáǹtì kúrò àti fífi àmì rọ́pò orúkọ", standard: "láìsí ìsọfúnni owó àdáni kankan tó kù, kí o sì ṣàyẹ̀wò ìṣirò AI nínú spreadsheet" },
    { id: "O2", condition: "Tí o bá ní àkọsílẹ̀ owó tí o ti fọ̀ mọ́ àti àkójọ ìsọ̀rí", action: "fi ìsọ̀rí kan sí owó kọ̀ọ̀kan kí o sì ṣírò àpapọ̀ ìsọ̀rí kọ̀ọ̀kan pẹ̀lú SUMIF", standard: "tí àpapọ̀ gbogbo ìsọ̀rí fi dọ́gba pẹ̀lú àpapọ̀ gbogbo owó" },
    { id: "O3", condition: "Tí o bá ní ètò ìnáwó oṣù àti àpapọ̀ ohun tó ṣẹlẹ̀ gan-an", action: "ṣe tábìlì ètò ìnáwó àti ohun tó ṣẹlẹ̀ gan-an pẹ̀lú ìyàtọ̀ (variance) àti ìpín ọgọ́rùn-ún ìyàtọ̀", standard: "kí o sì ṣàlàyé ìyàtọ̀ mẹ́ta tó tóbi jù ní gbólóhùn kan ọ̀kọ̀ọ̀kan" },
    { id: "O4", condition: "Tí o bá mọ owó tó wà lọ́wọ́ lónìí àti owó tí o retí pé yóò wọlé àti jáde", action: "ṣe àsọtẹ́lẹ̀ owó fún ọ̀sẹ̀ 13 kí o sì sàmì sí ọ̀sẹ̀ tí owó kéré jù", standard: "tí owó ìparí ọ̀sẹ̀ kọ̀ọ̀kan fi lọ sí ọ̀sẹ̀ tó tẹ̀lé e" },
    { id: "O5", condition: "Tí o bá ní àkọsílẹ̀ owó oṣù kan tí o ti fọ̀ mọ́ àti àwọn ìbéèrè fún sísan owó", action: "dá owó tí a lè ti san lẹ́ẹ̀mejì, ìnáwó àjèjì àti jìbìtì ìsanwó mọ̀", standard: "kí o sì ṣàyẹ̀wò ìyípadà àlàyé báńkì èyíkéyìí nípa pípe nọ́mbà tí o ti mọ̀ tẹ́lẹ̀" },
    { id: "O6", condition: "Tí o bá ní èsì spreadsheet rẹ", action: "kọ ìròyìn owó gbólóhùn márùn-ún ní ọ̀rọ̀ tó rọrùn kí o sì ṣètò bí ó ṣe pẹ́ tó tí o máa tọ́jú àwọn àkọsílẹ̀", standard: "kí o sì ṣàyẹ̀wò gbogbo nọ́mbà pẹ̀lú spreadsheet" }
  ],
  chapters: [
    {
      name: "Orí 1: Títo owó lẹ́sẹẹsẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lílo AI fún owó láìléwu",
          minutes: 5,
          goal: "Pèsè ìsọfúnni owó kí o lè rí ìrànlọ́wọ́ AI láìfi ìsọfúnni àdáni hàn.",
          text: [
            "Olùrànlọ́wọ́ AI mọ̀ dáadáa nípa fọ́múlà spreadsheet, títo nǹkan lẹ́sẹẹsẹ, rírí àpẹẹrẹ tí ó ń tún ara rẹ̀ ṣe, àti ṣíṣàlàyé ọ̀rọ̀ bí \"accrual\" tàbí \"gross margin\". Wọn kì í ṣe akọ̀wé-owó, wọ́n lè ṣe àṣìṣe nínú ìṣirò, wọn kò sì mọ òfin owó-orí fún ipò rẹ gan-an.",
            "Má ṣe fi nọ́mbà báńkì tàbí káàdì, nọ́mbà routing, ọ̀rọ̀ aṣínà, nọ́mbà Social Security tàbí nọ́mbà owó-orí, tàbí orúkọ àwọn oníbàárà, olùfúnni-lẹ́bùn tàbí òṣìṣẹ́ sínú irinṣẹ́ AI gbogbogbò láéláé. Dípò bẹ́ẹ̀, gbé àkọsílẹ̀ owó jáde sínú spreadsheet, pa àwọn òpó yẹn rẹ́, kí o sì fi àmì gbogbogbò bí \"Oníbàárà A\" tàbí \"Olùpèsè 1\" rọ́pò orúkọ.",
            "Fi spreadsheet fúnra rẹ̀ ṣàyẹ̀wò ìṣirò AI. Béèrè fọ́múlà lọ́wọ́ AI, jẹ́ kí spreadsheet ṣe ìṣirò náà, kí o sì fi ọwọ́ ṣàyẹ̀wò àpapọ̀ díẹ̀. Fún ìbéèrè nípa owó-orí, owó oṣù òṣìṣẹ́ àti òfin, ṣàyẹ̀wò pẹ̀lú irs.gov, àjọ owó-orí ìpínlẹ̀ rẹ tàbí akọ̀wé-owó tó ní ìwé àṣẹ."
          ],
          steps: ["Gbé àkọsílẹ̀ owó jáde láti báńkì tàbí irinṣẹ́ ìṣirò owó rẹ sínú spreadsheet.", "Pa nọ́mbà àkáǹtì àti nọ́mbà ìdánimọ̀ èyíkéyìí rẹ́.", "Fi àmì bí \"Oníbàárà A\" rọ́pò orúkọ àwọn ènìyàn.", "Lo AI fún fọ́múlà àti àlàyé, kì í ṣe fún ìdáhùn ìkẹyìn nípa owó-orí.", "Fi spreadsheet ṣàyẹ̀wò ìṣirò AI díẹ̀."],
          words: [["Gbígbé jáde (export)", "fífi ìsọfúnni láti inú ètò kan pamọ́ sínú fáìlì tí ètò míì lè ṣí."], ["Ìdúnàádúrà (transaction)", "owó kan tó wọlé tàbí tó jáde, bí ọjà tí a tà tàbí owó tí a san."]],
          slides: [
            { title: "AI mọ̀ dáadáa nípa", bullets: ["Fọ́múlà spreadsheet àti títo nǹkan lẹ́sẹẹsẹ", "Rírí àpẹẹrẹ", "Ṣíṣàlàyé ọ̀rọ̀ owó"] },
            { title: "Má ṣe fi wọ̀nyí sínú AI láéláé", bullets: ["Nọ́mbà báńkì, káàdì tàbí routing", "Ọ̀rọ̀ aṣínà, SSN, nọ́mbà owó-orí", "Orúkọ oníbàárà, olùfúnni-lẹ́bùn tàbí òṣìṣẹ́"] },
            { title: "Fọ̀ ọ́ mọ́, lẹ́yìn náà ṣàyẹ̀wò", bullets: ["Pa nọ́mbà rẹ́, fi àmì sí orúkọ", "Jẹ́ kí spreadsheet ṣe ìṣirò", "Ìbéèrè owó-orí: irs.gov tàbí akọ̀wé-owó"] }
          ],
          tryIt: "Gbé àkọsílẹ̀ owó 20 jáde tàbí tẹ wọ́n láti inú oṣù gidi tàbí oṣù àpẹẹrẹ sínú spreadsheet. Yọ gbogbo nọ́mbà àkáǹtì kúrò kí o sì fi àmì rọ́pò orúkọ.",
          youCanNow: "pèsè ìsọfúnni owó fún ìrànlọ́wọ́ AI láìfi ìsọfúnni àdáni hàn.",
          quickCheck: [
            { objective: "O1", q: "Òpó wo ni o yẹ kí o pa rẹ́ kí o tó fi àkọsílẹ̀ owó sínú irinṣẹ́ AI?", options: ["Ọjọ́", "Iye owó", "Àpèjúwe ohun tí a rà", "Nọ́mbà àkáǹtì"], answer: 3, why: "Nọ́mbà àkáǹtì jẹ́ àdáni, kò sì gbọdọ̀ wọ inú irinṣẹ́ AI gbogbogbò láéláé." },
            { objective: "O1", q: "Àkọsílẹ̀ owó rẹ ní orúkọ oníbàárà kan, \"Maria Lopez\". Kí ni o máa ṣe kí o tó béèrè ìrànlọ́wọ́ AI?", options: ["Fi orúkọ náà sílẹ̀; AI máa pa á mọ́", "Fi àmì bí \"Oníbàárà A\" rọ́pò rẹ̀", "Fi nọ́mbà fóònù rẹ̀ kún un", "Pa gbogbo ìdúnàádúrà náà rẹ́"], answer: 1, why: "Fífi àmì rọ́pò orúkọ ń dáàbò bo ìsọfúnni àdáni, AI sì ṣì ń ràn ọ́ lọ́wọ́." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pípín owó tó wọlé àti owó tó jáde sí ìsọ̀rí",
          minutes: 5,
          goal: "Lo AI láti dábàá ìsọ̀rí, kí o sì lo spreadsheet láti ṣírò àpapọ̀ ọ̀kọ̀ọ̀kan.",
          text: [
            "Ìsọ̀rí ń sọ àkọsílẹ̀ owó gígùn di àwòrán tó yé. Àwọn ìsọ̀rí iṣẹ́ òwò tó wọ́pọ̀: owó ọjà tí a tà, iye owó ọjà (èròjà, nǹkan tí a fi ń ṣe ọjà), owó ilé, owó oṣù òṣìṣẹ́, ìpolówó, software, ọkọ̀ àti epo, ìbánigbófò àti owó iṣẹ́ báńkì. Àwọn àjọ aláìlérè sábà máa ń fi ẹ̀bùn, owó ìrànwọ́ (grant), owó ètò àti owó ìkówójọ kún un.",
            "Fi òpó àpèjúwe àti iye owó tí o ti fọ̀ mọ́ sínú olùrànlọ́wọ́ AI kí o sì béèrè pé: \"Dábàá ìsọ̀rí kan fún ìlà kọ̀ọ̀kan láti inú àkójọ yìí: [àwọn ìsọ̀rí rẹ]. Dá tábìlì padà.\" Lẹ́yìn náà, da tábìlì náà padà sínú spreadsheet rẹ kí o sì tún èyí tí kò tọ́ ṣe.",
            "Béèrè lọ́wọ́ AI fún fọ́múlà láti ṣírò àpapọ̀ ìsọ̀rí kọ̀ọ̀kan. Nínú Google Sheets àti Excel, SUMIF ń ṣírò àpapọ̀ iye owó tí ó bá àmì kan mu, fún àpẹẹrẹ =SUMIF(C:C, \"Rent\", D:D)."
          ],
          steps: ["Kọ àkójọ ìsọ̀rí rẹ.", "Ní kí AI dábàá ìsọ̀rí kan fún ìdúnàádúrà kọ̀ọ̀kan tí o ti fọ̀ mọ́.", "Fi àwọn ìsọ̀rí náà sínú spreadsheet rẹ kí o sì tún àṣìṣe ṣe.", "Lo SUMIF láti ṣírò àpapọ̀ ìsọ̀rí kọ̀ọ̀kan.", "Ṣàyẹ̀wò pé àpapọ̀ àwọn ìsọ̀rí dọ́gba pẹ̀lú àpapọ̀ gbogbo owó."],
          words: [["Ìsọ̀rí (category)", "àkójọ ìdúnàádúrà tí ó jọra, bí owó ilé tàbí ìpolówó."], ["SUMIF", "fọ́múlà spreadsheet tí ó ń ṣírò àpapọ̀ iye owó tí ó bá ìlànà kan mu."], ["Iye owó ọjà (cost of goods)", "owó tí o ná láti ṣe tàbí ra ọjà tí o ń tà."]],
          slides: [
            { title: "Àwọn ìsọ̀rí tó wọ́pọ̀", bullets: ["Owó ọjà tí a tà, iye owó ọjà, owó ilé, owó oṣù", "Ìpolówó, software, epo, ìbánigbófò", "Àjọ aláìlérè: ẹ̀bùn, owó ìrànwọ́, ètò"] },
            { title: "Jẹ́ kí AI dábàá, kí o tún un ṣe", bullets: ["Fi àpèjúwe àti iye owó tí o ti fọ̀ mọ́ sínú rẹ̀", "Béèrè ìsọ̀rí láti inú àkójọ rẹ", "Tún èyí tí kò tọ́ ṣe"] },
            { title: "Ṣírò àpapọ̀ pẹ̀lú SUMIF", bullets: ["=SUMIF(C:C, \"Rent\", D:D)", "Àpapọ̀ ìsọ̀rí gbọdọ̀ dọ́gba pẹ̀lú àpapọ̀ gbogbo owó"] }
          ],
          tryIt: "Ní kí AI dábàá ìsọ̀rí fún ìdúnàádúrà 20 tí o ti fọ̀ mọ́, tún wọn ṣe, kí o sì ṣírò àpapọ̀ ìsọ̀rí kọ̀ọ̀kan pẹ̀lú SUMIF. Rí i dájú pé àwọn àpapọ̀ náà bá àpapọ̀ gbogbo owó mu.",
          youCanNow: "pín ìdúnàádúrà sí ìsọ̀rí kí o sì ṣírò àpapọ̀ wọn pẹ̀lú fọ́múlà spreadsheet.",
          quickCheck: [
            { objective: "O2", q: "Kí ni SUMIF ń ṣe nínú spreadsheet?", options: ["Ó ń ṣírò àpapọ̀ iye owó tí ó bá àmì kan mu", "Ó ń to àwọn ìlà lẹ́sẹẹsẹ ní ti ọjọ́", "Ó ń pa àwọn àpótí òfìfo rẹ́", "Ó ń ka iye òpó"], answer: 0, why: "SUMIF ń ṣírò àpapọ̀ iye owó tí àmì rẹ̀ bá mu, bí gbogbo ìlà owó ilé (Rent)." },
            { objective: "O2", q: "Àpapọ̀ àwọn ìsọ̀rí rẹ jẹ́ $4,800, ṣùgbọ́n àpapọ̀ gbogbo owó jẹ́ $5,000. Kí ni o máa ṣe?", options: ["Má ka ìyàtọ̀ náà sí", "Yí àpapọ̀ gbogbo owó padà sí $4,800", "Wá àwọn ìdúnàádúrà tí kò ní ìsọ̀rí tàbí tí ó ní àmì tí kò tọ́", "Ní kí AI mú kí àwọn nọ́mbà náà bára mu"], answer: 2, why: "Àpapọ̀ àwọn ìsọ̀rí gbọdọ̀ dọ́gba pẹ̀lú àpapọ̀ gbogbo owó, nítorí náà wá àwọn ìlà tí ó sọnù tàbí tí àmì wọn kò tọ́." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe ètò ìnáwó àti fífi wé ohun tó ṣẹlẹ̀ gan-an",
          minutes: 6,
          goal: "Ṣe ètò ìnáwó oṣù àti tábìlì ètò ìnáwó àti ohun tó ṣẹlẹ̀ gan-an tí ó fi ibi tí o ti yà kúrò hàn.",
          text: [
            "Ètò ìnáwó (budget) ni ètò rẹ fún owó tí yóò wọlé àti tí yóò jáde fún àkókò kan. Ètò ìnáwó àti ohun tó ṣẹlẹ̀ gan-an (budget versus actual) ń fi ètò náà wé ohun tó ṣẹlẹ̀ gan-an. Ìyàtọ̀ tó wà láàárín wọn ni à ń pè ní variance.",
            "Ṣe àwọn òpó wọ̀nyí: ìsọ̀rí, ètò ìnáwó, ohun tó ṣẹlẹ̀ gan-an, ìyàtọ̀ (ohun tó ṣẹlẹ̀ gan-an yọ ètò ìnáwó kúrò) àti ìpín ọgọ́rùn-ún ìyàtọ̀. Béèrè lọ́wọ́ AI pé: \"Fún mi ní fọ́múlà Google Sheets fún ìyàtọ̀ àti ìpín ọgọ́rùn-ún ìyàtọ̀.\" Lẹ́yìn náà, wá àwọn ìyàtọ̀ tó tóbi jù, ní dọ́là àti ní ìpín ọgọ́rùn-ún.",
            "Ṣàlàyé ìyàtọ̀ ńlá kọ̀ọ̀kan ní gbólóhùn kan. \"Epo fi $300 kọjá ètò ìnáwó nítorí pé a fi ọ̀nà ìfijíṣẹ́ kejì kún un.\" AI lè ràn ọ́ lọ́wọ́ láti to ọ̀rọ̀ àlàyé, ṣùgbọ́n ìwọ nìkan ló mọ ìdí gidi."
          ],
          steps: ["Kọ àwọn ìsọ̀rí pẹ̀lú iye owó ètò ìnáwó fún ọ̀kọ̀ọ̀kan.", "Mú àpapọ̀ ohun tó ṣẹlẹ̀ gan-an láti Ẹ̀kọ́ 2 wá.", "Fi ìyàtọ̀ kún un = ohun tó ṣẹlẹ̀ gan-an yọ ètò ìnáwó kúrò.", "Fi ìpín ọgọ́rùn-ún ìyàtọ̀ kún un = ìyàtọ̀ pín sí ètò ìnáwó.", "Ṣàlàyé ìyàtọ̀ mẹ́ta tó tóbi jù ní gbólóhùn kan ọ̀kọ̀ọ̀kan."],
          words: [["Ètò ìnáwó (budget)", "ètò fún owó tí ń wọlé àti owó tí ń jáde."], ["Ìyàtọ̀ (variance)", "ìyàtọ̀ láàárín ètò ìnáwó àti ohun tó ṣẹlẹ̀ gan-an."]],
          slides: [
            { title: "Ètò ìnáwó àti ohun tó ṣẹlẹ̀ gan-an", bullets: ["Ètò ìnáwó: ètò náà", "Ohun tó ṣẹlẹ̀ gan-an: ohun tó ṣẹlẹ̀", "Ìyàtọ̀ (variance): ìyàtọ̀ láàárín wọn"] },
            { title: "Ṣe tábìlì náà", bullets: ["Ìsọ̀rí, ètò ìnáwó, ohun tó ṣẹlẹ̀ gan-an", "Ìyàtọ̀ àti ìpín ọgọ́rùn-ún ìyàtọ̀"] },
            { title: "Ṣàlàyé àwọn tó tóbi", bullets: ["Ìyàtọ̀ mẹ́ta tó tóbi jù", "Gbólóhùn kan fún ọ̀kọ̀ọ̀kan pẹ̀lú ìdí gidi"] }
          ],
          tryIt: "Ṣe tábìlì ètò ìnáwó àti ohun tó ṣẹlẹ̀ gan-an fún oṣù rẹ pẹ̀lú ìyàtọ̀ àti ìpín ọgọ́rùn-ún ìyàtọ̀. Ṣàlàyé ìyàtọ̀ mẹ́ta tó tóbi jù ní gbólóhùn kan ọ̀kọ̀ọ̀kan.",
          youCanNow: "ṣe ètò ìnáwó, fi wé ohun tó ṣẹlẹ̀ gan-an, kí o sì ṣàlàyé àwọn ìyàtọ̀.",
          quickCheck: [
            { objective: "O3", q: "Nínú ètò ìnáwó àti ohun tó ṣẹlẹ̀ gan-an, báwo ni a ṣe ń ṣírò ìyàtọ̀ nínú ẹ̀kọ́ yìí?", options: ["Ètò ìnáwó fi kún ohun tó ṣẹlẹ̀ gan-an", "Ètò ìnáwó pín sí ohun tó ṣẹlẹ̀ gan-an", "Ohun tó ṣẹlẹ̀ gan-an yọ ètò ìnáwó kúrò", "Ohun tó ṣẹlẹ̀ gan-an ní ìlọ́po ètò ìnáwó"], answer: 2, why: "Ìyàtọ̀ ni ohun tó ṣẹlẹ̀ gan-an yọ ètò ìnáwó kúrò." },
            { objective: "O3", q: "Owó nǹkan èlò fi $200 kọjá ètò ìnáwó. AI dábàá pé \"iye owó ọjà gòkè\", ṣùgbọ́n o mọ̀ pé o ra àfikún fún ayẹyẹ kan. Kí ni o máa kọ?", options: ["Ìdí gidi: àfikún nǹkan èlò tí a rà fún ayẹyẹ náà", "Ìdí tí AI fún ọ, nítorí ó dún dáadáa", "Kò sí ìdí kankan", "Pé ètò ìnáwó náà kò tọ́"], answer: 0, why: "Ìwọ nìkan ló mọ ìdí gidi; AI lè ràn ọ́ lọ́wọ́ pẹ̀lú ọ̀rọ̀, kì í ṣe pẹ̀lú òtítọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Títo owó lẹ́sẹẹsẹ",
        questions: [
          { objective: "O1", q: "Èwo ni o KÒ gbọdọ̀ fi sínú irinṣẹ́ AI gbogbogbò LÁÉLÁÉ?", options: ["Àkójọ ìsọ̀rí", "Tábìlì iye owó tí a ti fọ̀ mọ́", "Nọ́mbà àkáǹtì báńkì àti nọ́mbà routing rẹ", "Ìbéèrè nípa ìtumọ̀ \"variance\""], answer: 2, why: "Nọ́mbà àkáǹtì jẹ́ ìsọfúnni owó àdáni." },
          { objective: "O1", q: "AI fún ọ ní àpapọ̀ kan tí ó dà bí ẹni pé kò tọ́. Kí ni o yẹ kí o ṣe?", options: ["Jẹ́ kí spreadsheet ṣe ìṣirò kí o sì fi ọwọ́ ṣàyẹ̀wò díẹ̀", "Gbẹ́kẹ̀lé AI", "Pa ìsọfúnni náà rẹ́", "Fi í ránṣẹ́ sí ìgbìmọ̀"], answer: 0, why: "AI lè ṣe àṣìṣe ìṣirò; spreadsheet àti àyẹ̀wò ọwọ́ ló ń fìdí rẹ̀ múlẹ̀." },
          { objective: "O2", q: "Kí ni =SUMIF(C:C, \"Rent\", D:D) ń ṣe?", options: ["Ó ń pa àwọn ìlà owó ilé rẹ́", "Ó ń ka àwọn oníbàárà", "Ó ń to nǹkan lẹ́sẹẹsẹ ní ti ọjọ́", "Ó ń ṣírò àpapọ̀ iye owó nínú òpó D níbi tí òpó C ti sọ Rent"], answer: 3, why: "SUMIF ń ṣírò àpapọ̀ iye owó tí ó bá ìlànà kan mu." },
          { objective: "O3", q: "Ètò ìnáwó fún epo jẹ́ $500; ohun tó ṣẹlẹ̀ gan-an jẹ́ $800. Kí ni ìyàtọ̀ náà?", options: ["$1,300", "$300 kọjá", "$300 kò dé", "$500"], answer: 1, why: "Ohun tó ṣẹlẹ̀ gan-an yọ ètò ìnáwó kúrò = 800 - 500 = 300 kọjá." },
          { objective: "O3", q: "Ta ló yẹ kí ó ṣàlàyé ìdí tí ìyàtọ̀ kan fi ṣẹlẹ̀?", options: ["AI nìkan", "Ìwọ, pẹ̀lú ohun tó ṣẹlẹ̀ gan-an", "Kò sí ẹnì kankan", "Ojú-òpó wẹ́ẹ̀bù èyíkéyìí"], answer: 1, why: "Ìwọ nìkan ló mọ ìdí gidi lẹ́yìn àwọn nọ́mbà náà." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe ètò àti ṣíṣàlàyé",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe àsọtẹ́lẹ̀ owó fún ọ̀sẹ̀ 13 tó ń bọ̀",
          minutes: 6,
          goal: "Ṣe àsọtẹ́lẹ̀ owó fún ọ̀sẹ̀ 13 kí o sì wá ọ̀sẹ̀ tí owó máa há jù.",
          text: [
            "Èrè àti owó lọ́wọ́ kì í ṣe ohun kan náà. O lè jèrè lórí ìwé kí owó ṣì tán lọ́wọ́ rẹ tí àwọn oníbàárà bá pẹ́ kí wọ́n tó sanwó tàbí tí owó ńlá kan bá tó àkókò sísan. Àsọtẹ́lẹ̀ owó (cash flow forecast) ń fi ìgbà tí owó ń wọlé àti ìgbà tí ó ń jáde hàn, ọ̀sẹ̀ dé ọ̀sẹ̀.",
            "Àsọtẹ́lẹ̀ ọ̀sẹ̀ 13 (nǹkan bí oṣù mẹ́ta) jẹ́ irinṣẹ́ tó wọ́pọ̀. Àwọn ìlà rẹ̀: owó ìbẹ̀rẹ̀, owó tó ń wọlé (ọjà tí a tà, owó tí a gbà, ẹ̀bùn, owó ìrànwọ́), owó tó ń jáde (owó oṣù òṣìṣẹ́, owó ilé, olùpèsè, sísan owó-yíyá), àti owó ìparí. Owó ìparí ọ̀sẹ̀ kọ̀ọ̀kan ló ń di owó ìbẹ̀rẹ̀ ọ̀sẹ̀ tó tẹ̀lé e.",
            "Ní kí AI ṣe àwòṣe náà: \"Ṣe tábìlì àsọtẹ́lẹ̀ owó ọ̀sẹ̀ 13 fún Google Sheets pẹ̀lú fọ́múlà tí owó ìparí ọ̀sẹ̀ kọ̀ọ̀kan fi di owó ìbẹ̀rẹ̀ ọ̀sẹ̀ tó tẹ̀lé e.\" Kọ àwọn nọ́mbà tí o retí sínú rẹ̀, lẹ́yìn náà wá ọ̀sẹ̀ tí owó kéré jù. Ìgbà yẹn ni o lè nílò láti sún ríra nǹkan síwájú, lépa owó tí wọ́n jẹ ọ́, tàbí ṣètò owó-yíyá tí báńkì ti yà sọ́tọ̀ (line of credit)."
          ],
          steps: ["Béèrè lọ́wọ́ AI fún àwòṣe àsọtẹ́lẹ̀ owó ọ̀sẹ̀ 13 pẹ̀lú fọ́múlà.", "Kọ owó tó wà nínú àkáǹtì lónìí bí owó ìbẹ̀rẹ̀ ọ̀sẹ̀ 1.", "Kọ owó tí o retí pé yóò wọlé àti jáde fún ọ̀sẹ̀ kọ̀ọ̀kan.", "Ṣàyẹ̀wò pé owó ìparí ń lọ sí ọ̀sẹ̀ tó tẹ̀lé e.", "Sàmì sí ọ̀sẹ̀ tí owó kéré jù kí o sì ṣètò fún un."],
          words: [["Ìṣàn owó (cash flow)", "àkókò tí owó ń wọlé àti tí ó ń jáde."], ["Àsọtẹ́lẹ̀ (forecast)", "ìfojúsùn tó dára jù nípa àwọn nọ́mbà ọjọ́ iwájú."], ["Line of credit", "iye owó kan tí báńkì gbà kí o yá nígbà tí o bá nílò rẹ̀."]],
          slides: [
            { title: "Èrè kì í ṣe owó lọ́wọ́", bullets: ["Owó tí wọ́n pẹ́ san àti owó ńlá tí a gbọdọ̀ san", "Owó lè há ọ lọ́wọ́ bí o tilẹ̀ ń jèrè"] },
            { title: "Àwọn ìlà àsọtẹ́lẹ̀ ọ̀sẹ̀ 13", bullets: ["Owó ìbẹ̀rẹ̀", "Owó tó ń wọlé àti owó tó ń jáde", "Owó ìparí ń lọ sí ọ̀sẹ̀ tó tẹ̀lé e"] },
            { title: "Wá ọ̀sẹ̀ tí owó kéré jù", bullets: ["Sún ríra nǹkan síwájú", "Lépa owó tí wọ́n jẹ ọ́", "Ṣètò owó-yíyá ní kùtùkùtù"] }
          ],
          tryIt: "Ṣe àsọtẹ́lẹ̀ owó ọ̀sẹ̀ 13 pẹ̀lú ìrànlọ́wọ́ AI. Kọ nọ́mbà gidi tàbí nọ́mbà àpẹẹrẹ sínú rẹ̀, kí o sì sàmì sí ọ̀sẹ̀ tí owó kéré jù pẹ̀lú ohun kan tí o máa ṣe.",
          youCanNow: "ṣe àsọtẹ́lẹ̀ owó fún ọ̀sẹ̀ 13 kí o sì ṣètò fún ọ̀sẹ̀ tí owó máa há jù.",
          quickCheck: [
            { objective: "O4", q: "Kí ni àsọtẹ́lẹ̀ owó (cash flow forecast) ń fi hàn?", options: ["Èrè rẹ ní ọdún tó kọjá", "Ìgbà tí owó ń wọlé àti tí ó ń jáde, ọ̀sẹ̀ dé ọ̀sẹ̀", "Àmì ìgbẹ́kẹ̀lé owó-yíyá rẹ (credit score)", "Owó-orí tí o jẹ"], answer: 1, why: "Àsọtẹ́lẹ̀ owó ń fi owó tó ń wọlé àti tó ń jáde hàn ọ̀sẹ̀ dé ọ̀sẹ̀." },
            { objective: "O4", q: "Àsọtẹ́lẹ̀ rẹ fi hàn pé owó máa wà nísàlẹ̀ òdo ní ọ̀sẹ̀ 7. Kí ni o lè ṣe?", options: ["Kò sí nǹkan; àsọtẹ́lẹ̀ lásán ni", "Fi ọ̀sẹ̀ 7 pamọ́ fún ìgbìmọ̀", "Ná owó sí i ní ọ̀sẹ̀ 6", "Sún ríra nǹkan síwájú, lépa owó tí wọ́n jẹ ọ́ tàbí ṣètò line of credit"], answer: 3, why: "Ọ̀sẹ̀ tí owó kéré jù ni ìgbà tí o máa ṣètò ṣáájú láti bo àlàfo náà." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rírí ìṣòro àti jìbìtì pẹ̀lú AI",
          minutes: 5,
          goal: "Lo AI àti àyẹ̀wò tó rọrùn láti rí ìnáwó àjèjì, owó tí a san lẹ́ẹ̀mejì àti jìbìtì.",
          text: [
            "AI àti spreadsheet lè fi àwọn nǹkan tí ẹni tí ọwọ́ rẹ̀ dí lè má rí hàn: owó tí a san lẹ́ẹ̀mejì, owó ìforúkọsílẹ̀ oṣooṣù (subscription) tí o ti gbàgbé, ìsọ̀rí kan tí owó rẹ̀ gòkè lójijì, tàbí olùtajà tí o kò mọ̀.",
            "Béèrè pé: \"Wo tábìlì tí a ti fọ̀ mọ́ yìí. Kọ àwọn owó tí ó lè jẹ́ pé a san lẹ́ẹ̀mejì, iye owó àjèjì, àti àwọn ìsọ̀rí tí ó yí padà púpọ̀ láti oṣù tó kọjá.\" Lẹ́yìn náà, ṣe ìwádìí ọ̀kọ̀ọ̀kan fúnra rẹ.",
            "Ṣọ́ra fún jìbìtì tí wọ́n ń dá sí àwọn ilé-iṣẹ́ òwò àti àjọ aláìlérè: ìwé owó (invoice) èké, ímeèlì tí ń ní kí o yí àlàyé báńkì olùtajà kan padà, àti ìbéèrè owó kíákíá tí ó dà bí ẹni pé ó wá láti ọ̀dọ̀ ọ̀gá. Máa ṣàyẹ̀wò nígbà gbogbo nípa pípe nọ́mbà fóònù tí o ti mọ̀ tẹ́lẹ̀. Ròyìn jìbìtì ní ReportFraud.ftc.gov."
          ],
          steps: ["Ní kí AI kọ àwọn owó tí ó lè jẹ́ pé a san lẹ́ẹ̀mejì àti iye owó àjèjì.", "Fi àwọn ìsọ̀rí wé ti oṣù tó kọjá.", "Ṣe ìwádìí àmì kọ̀ọ̀kan fúnra rẹ.", "Ṣàyẹ̀wò ìyípadà àlàyé báńkì èyíkéyìí nípa pípe nọ́mbà tí o mọ̀.", "Ròyìn jìbìtì fún FTC."],
          words: [["Owó tí a san lẹ́ẹ̀mejì", "sísan owó kan náà lẹ́ẹ̀mejì."], ["Ìwé owó (invoice)", "ìwé tí ń béèrè pé kí o sanwó."], ["Jìbìtì ìsanwó", "títan ènìyàn jẹ láti fi owó ránṣẹ́ sí ibi tí kò tọ́."]],
          slides: [
            { title: "Ohun tí AI lè fi hàn", bullets: ["Owó tí a san lẹ́ẹ̀mejì", "Subscription tí o ti gbàgbé", "Ìgòkè lójijì tàbí olùtajà tí o kò mọ̀"] },
            { title: "Jìbìtì sí àwọn ilé-iṣẹ́", bullets: ["Invoice èké", "\"Jọ̀wọ́ yí àlàyé báńkì wa padà\"", "Ìbéèrè kíákíá tí ó dà bí ẹni pé ó wá láti ọ̀dọ̀ ọ̀gá"] },
            { title: "Dáàbò bo owó náà", bullets: ["Pe nọ́mbà tí o ti mọ̀ tẹ́lẹ̀", "Ṣe ìwádìí gbogbo àmì", "Ròyìn ní ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: Bí o ṣe lè dá jìbìtì phishing mọ̀ kí o sì yẹra fún un", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Ní kí AI yẹ àkọsílẹ̀ owó rẹ tí o ti fọ̀ mọ́ wò fún owó tí a san lẹ́ẹ̀mejì àti iye owó àjèjì. Ṣe ìwádìí àmì kọ̀ọ̀kan kí o sì kọ ohun tí o rí.",
          youCanNow: "lo AI àti àyẹ̀wò tó rọrùn láti rí ìnáwó àjèjì àti jìbìtì ìsanwó.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni jìbìtì tó wọ́pọ̀ tí wọ́n ń dá sí àwọn ilé-iṣẹ́ òwò àti àjọ aláìlérè?", options: ["Oníbàárà tí ó sanwó lásìkò", "Owó ilé oṣooṣù", "Ìwé àkọsílẹ̀ báńkì tí ó dé nípasẹ̀ ifiranṣẹ́ ìwé", "Ímeèlì tí ń ní kí o yí àlàyé báńkì olùtajà kan padà"], answer: 3, why: "Ìbéèrè láti yí àlàyé báńkì olùtajà padà jẹ́ jìbìtì tó wọ́pọ̀." },
            { objective: "O5", q: "AI fi owó méjì tí ó dọ́gba sí olùtajà kan náà ní ọjọ́ kan náà hàn. Kí ni o máa ṣe?", options: ["Gbà pé AI tọ̀nà kí o sì fagi lé méjèèjì", "Ṣe ìwádìí fúnra rẹ, bí ṣíṣàyẹ̀wò àwọn invoice", "Má ka á sí", "San owó fún olùtajà náà lẹ́ẹ̀kẹta"], answer: 1, why: "AI ń fi ìṣòro tí ó ṣeé ṣe hàn; ìwọ ló máa ṣe ìwádìí ọ̀kọ̀ọ̀kan fúnra rẹ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣàlàyé àwọn nọ́mbà àti títọ́jú àkọsílẹ̀ dáadáa",
          minutes: 5,
          goal: "Kọ ìròyìn owó ní ọ̀rọ̀ tó rọrùn kí o sì mọ bí ó ṣe pẹ́ tó tí o máa tọ́jú àkọsílẹ̀.",
          text: [
            "Àwọn olówó, alájọṣe àti ìgbìmọ̀ nílò ìròyìn kúkúrú tó yé, kì í ṣe spreadsheet ńlá. Ìròyìn tó dára ní gbólóhùn márùn-ún: iye owó tó wọlé, iye owó tó jáde, ìyàtọ̀ tó tóbi jù àti ìdí rẹ̀, bí owó ṣe máa rí láti inú àsọtẹ́lẹ̀ rẹ, àti ìpinnu tàbí ìgbésẹ̀ kan tí a nílò.",
            "Ní kí AI sọ àwọn nọ́mbà rẹ di àkọpẹrẹ, lẹ́yìn náà ṣàyẹ̀wò gbogbo nọ́mbà pẹ̀lú spreadsheet. Yọ ohunkóhun tí AI fi kún un tí kì í ṣe òtítọ́ kúrò.",
            "Tọ́jú àkọsílẹ̀. IRS sọ pé kí o tọ́jú àkọsílẹ̀ tí ó ṣe àtìlẹ́yìn fún owó tó wọlé àti ohun tí o yọ kúrò nínú owó-orí títí àkókò òdiwọ̀n (period of limitations) fún ìwé owó-orí náà yóò fi parí, ní gbogbogbò ọdún 3, pẹ̀lú àkókò tó gùn jù ní àwọn ipò kan, àti ó kéré tán ọdún 4 fún àkọsílẹ̀ owó-orí òṣìṣẹ́. Wo irs.gov tàbí bá akọ̀wé-owó sọ̀rọ̀ fún ipò rẹ."
          ],
          steps: ["Kọ gbólóhùn márùn-ún: owó tó wọlé, owó tó jáde, ìyàtọ̀ tó tóbi jù, bí owó ṣe máa rí, ìpinnu tí a nílò.", "Ní kí AI tún ọ̀rọ̀ náà ṣe dáadáa.", "Ṣàyẹ̀wò gbogbo nọ́mbà pẹ̀lú spreadsheet.", "Fi spreadsheet àti ìwé ẹ̀rí ìsanwó pamọ́ sínú fódà tó ní ààbò tí ó ní ẹ̀dà àfipamọ́.", "Wo irs.gov fún bí ó ṣe pẹ́ tó tí o máa tọ́jú wọn."],
          words: [["Ìgbìmọ̀ (board)", "àwọn ènìyàn tí ń bójú tó àjọ aláìlérè tàbí ilé-iṣẹ́."], ["Àkókò òdiwọ̀n (period of limitations)", "àkókò tí IRS ní láti yẹ ìwé owó-orí wò tàbí láti yí i padà."]],
          slides: [
            { title: "Ìròyìn gbólóhùn márùn-ún", bullets: ["Owó tó wọlé àti owó tó jáde", "Ìyàtọ̀ tó tóbi jù àti ìdí rẹ̀", "Bí owó ṣe máa rí àti ìpinnu tí a nílò"] },
            { title: "AI ń kọ àkọpẹrẹ, ìwọ ń ṣàyẹ̀wò", bullets: ["Ṣàyẹ̀wò gbogbo nọ́mbà", "Yọ ohunkóhun tí kì í ṣe òtítọ́ kúrò"] },
            { title: "Tọ́jú àkọsílẹ̀ (IRS)", bullets: ["Ní gbogbogbò ọdún 3; ó gùn jù ní àwọn ipò kan", "Ó kéré tán ọdún 4 fún àkọsílẹ̀ owó-orí òṣìṣẹ́", "Wo irs.gov tàbí bá akọ̀wé-owó sọ̀rọ̀"] }
          ],
          sources: [{ name: "IRS: Báwo ni ó ṣe yẹ kí n tọ́jú àkọsílẹ̀ pẹ́ tó?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ìròyìn owó gbólóhùn márùn-ún láti inú oṣù tí o ti pín sí ìsọ̀rí, tábìlì ètò ìnáwó àti ohun tó ṣẹlẹ̀ gan-an, àti àsọtẹ́lẹ̀ ọ̀sẹ̀ 13 rẹ. Ṣàyẹ̀wò gbogbo nọ́mbà, lẹ́yìn náà fi gbogbo fáìlì pamọ́ sínú fódà tí ó ní ẹ̀dà àfipamọ́.",
          youCanNow: "to owó àjọ kan lẹ́sẹẹsẹ, ṣe ètò rẹ̀ kí o sì ṣàlàyé rẹ̀ pẹ̀lú ìrànlọ́wọ́ AI, kí o sì dáàbò bo ìsọfúnni náà.",
          quickCheck: [
            { objective: "O6", q: "Èwo ló yẹ kí ó wà nínú ìròyìn owó gbólóhùn márùn-ún?", options: ["Bí owó ṣe máa rí láti inú àsọtẹ́lẹ̀ rẹ", "Gbogbo ìdúnàádúrà oṣù náà", "Nọ́mbà àkáǹtì báńkì", "Àdírẹ́sì ilé àwọn òṣìṣẹ́"], answer: 0, why: "Ìròyìn náà sọ nípa owó tó wọlé, owó tó jáde, ìyàtọ̀ tó tóbi jù, bí owó ṣe máa rí àti ìpinnu tí a nílò." },
            { objective: "O6", q: "Àkọpẹrẹ ìròyìn AI sọ pé owó tó wọlé gòkè ní 20%, ṣùgbọ́n spreadsheet rẹ fi 12% hàn. Kí ni o máa ṣe?", options: ["Fi í ránṣẹ́; ó súnmọ́ ọ", "Sọ ọ́ di 15%", "Tún un ṣe kí ó bá spreadsheet mu kí o tó fi í ránṣẹ́", "Yọ gbogbo nọ́mbà kúrò"], answer: 2, why: "Ṣàyẹ̀wò gbogbo nọ́mbà pẹ̀lú spreadsheet kí o sì yọ ohunkóhun tí kì í ṣe òtítọ́ kúrò." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe ètò àti ṣíṣàlàyé",
        questions: [
          { objective: "O4", q: "Kí ló fà á tí owó fi lè tán lọ́wọ́ iṣẹ́ òwò tí ó ń jèrè?", options: ["Èrè máa ń dọ́gba pẹ̀lú owó lọ́wọ́ nígbà gbogbo", "Báńkì ń di gbogbo èrè mú", "Kò lè ṣẹlẹ̀", "Owó ń pẹ́ wọlé nígbà tí àkókò sísan owó ti tó"], answer: 3, why: "Àkókò tí owó ń wọlé àti tí ó ń jáde ṣe pàtàkì." },
          { objective: "O4", q: "Nínú àsọtẹ́lẹ̀ owó, owó ìbẹ̀rẹ̀ ọ̀sẹ̀ tó ń bọ̀ dọ́gba pẹ̀lú:", options: ["Owó ìparí ọ̀sẹ̀ yìí", "Èrè ọdún tó kọjá", "Ètò ìnáwó", "Òdo"], answer: 0, why: "Ọ̀sẹ̀ kọ̀ọ̀kan ń gbé owó lọ sí èyí tó tẹ̀lé e." },
          { objective: "O5", q: "Ímeèlì kan láti ọ̀dọ̀ olùpèsè kan ní kí o máa fi owó ránṣẹ́ sí àkáǹtì báńkì tuntun láti ìsinsìnyí lọ. Kí ni o máa ṣe?", options: ["Yí i padà lójú ẹsẹ̀", "Fi ọ̀rọ̀ aṣínà báńkì rẹ dá a lóhùn", "Pe olùpèsè náà lórí nọ́mbà tí o ti mọ̀ tẹ́lẹ̀ láti ṣàyẹ̀wò", "Fi í ránṣẹ́ sí gbogbo òṣìṣẹ́"], answer: 2, why: "Ìbéèrè láti yí àlàyé báńkì padà jẹ́ jìbìtì tó wọ́pọ̀." },
          { objective: "O6", q: "Kí ni IRS sọ pé ó jẹ́ àkókò gbogbogbò láti tọ́jú àkọsílẹ̀ tí ó ṣe àtìlẹ́yìn fún ìwé owó-orí?", options: ["Ọ̀sẹ̀ kan", "Má ṣe tọ́jú wọn rárá", "Ọdún 50 gan-an", "Ní gbogbogbò ọdún 3, ó gùn jù ní àwọn ipò kan"], answer: 3, why: "Ìtọ́sọ́nà IRS fún ní ọdún 3 bí àkókò gbogbogbò, pẹ̀lú àwọn ìyàtọ̀." },
          { objective: "O6", q: "AI kọ àkọpẹrẹ ìròyìn owó fún ìgbìmọ̀. Kí ni o gbọdọ̀ ṣe kí o tó fi í ránṣẹ́?", options: ["Fi í ránṣẹ́ láìkà á", "Fi àfikún nọ́mbà kún un kí ó lè dára lójú", "Ṣàyẹ̀wò gbogbo nọ́mbà pẹ̀lú spreadsheet", "Pa spreadsheet náà rẹ́"], answer: 2, why: "AI lè ṣe àṣìṣe nínú nọ́mbà; ìwọ ló máa ṣàyẹ̀wò." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI nínú Ìṣàkóso Owó",
    questions: [
      { objective: "O1", q: "Èwo ni AI mọ̀ dáadáa nínú iṣẹ́ owó?", options: ["Fífún ni ní ìdájọ́ ìkẹyìn lórí owó-orí", "Kíkọ fọ́múlà spreadsheet àti ṣíṣàlàyé ọ̀rọ̀", "Ṣíṣe ìlérí èrè ìdókòwò", "Fífi ọwọ́ sí ìwé báńkì"], answer: 1, why: "AI ń ràn ọ́ lọ́wọ́ pẹ̀lú fọ́múlà àti àlàyé, kì í ṣe ìdáhùn ìkẹyìn nípa owó-orí tàbí òfin." },
      { objective: "O1", q: "Kí o tó fi àkọsílẹ̀ owó sínú AI, o yẹ kí o:", options: ["Yọ nọ́mbà àkáǹtì kúrò kí o sì fi àmì rọ́pò orúkọ", "Fi ọ̀rọ̀ aṣínà rẹ kún un", "Fi nọ́mbà fóònù àwọn olùfúnni-lẹ́bùn sínú rẹ̀", "Fi nọ́mbà Social Security kún un"], answer: 0, why: "Ìsọfúnni tí a ti fọ̀ mọ́ ń dáàbò bo ìsọfúnni àdáni." },
      { objective: "O1", q: "\"Oníbàárà A\" dípò orúkọ gidi jẹ́:", options: ["Àṣìṣe ìtẹ̀wé", "Ìsọ̀rí", "Àmì tí ó ń dáàbò bo ìsọfúnni àdáni", "Ìyàtọ̀ (variance)"], answer: 2, why: "Àmì ń fi orúkọ àdáni pamọ́." },
      { objective: "O1", q: "Ibo ni o yẹ kí o ti ṣàyẹ̀wò ìbéèrè nípa owó-orí?", options: ["irs.gov, àjọ owó-orí ìpínlẹ̀ rẹ tàbí akọ̀wé-owó tó ní ìwé àṣẹ", "Ọ̀rọ̀ kan lórí ìkànnì àjọlò", "Ìjíròrò AI nìkan", "Àfojúdá ọ̀rẹ́ kan"], answer: 0, why: "Àwọn orísun ìjọba àti ọ̀jọ̀gbọ́n ló ń fúnni ní ìdáhùn owó-orí tí a lè gbẹ́kẹ̀lé." },
      { objective: "O2", q: "Èwo ni ìsọ̀rí owó tó ń wọlé tó wọ́pọ̀ fún àjọ aláìlérè?", options: ["Iye owó ọjà", "Epo", "Owó ilé", "Owó ìrànwọ́ (grant)"], answer: 3, why: "Owó ìrànwọ́ àti ẹ̀bùn jẹ́ owó tó ń wọlé fún àjọ aláìlérè." },
      { objective: "O2", q: "Kí ni ìdúnàádúrà (transaction)?", options: ["Irú ètò ìnáwó kan", "Owó kan tó wọlé tàbí tó jáde", "Fọ́ọ̀mù owó-orí", "Ọ̀rọ̀ aṣínà báńkì"], answer: 1, why: "Ọjà kọ̀ọ̀kan tí a tà tàbí owó kọ̀ọ̀kan tí a san jẹ́ ìdúnàádúrà kan." },
      { objective: "O2", q: "Lẹ́yìn tí AI bá dábàá ìsọ̀rí, o yẹ kí o:", options: ["Gba gbogbo wọn", "Tún èyí tí kò tọ́ ṣe", "Pa spreadsheet náà rẹ́", "Fi wọ́n ránṣẹ́ sí àwọn oníbàárà nípasẹ̀ ímeèlì"], answer: 1, why: "Àbá AI nílò àyẹ̀wò." },
      { objective: "O2", q: "Àpapọ̀ àwọn ìsọ̀rí gbọdọ̀:", options: ["Tóbi ju àpapọ̀ gbogbo owó lọ", "Jẹ́ èyíkéyìí", "Wà ní òfìfo", "Dọ́gba pẹ̀lú àpapọ̀ gbogbo owó"], answer: 3, why: "Àyẹ̀wò yìí ń rí ìlà tí ó sọnù tàbí tí a kà lẹ́ẹ̀mejì." },
      { objective: "O3", q: "Ètò ìnáwó (budget) jẹ́:", options: ["Ètò fún owó tí ń wọlé àti tí ń jáde", "Àkáǹtì báńkì", "Ìwé owó-orí", "Owó-yíyá"], answer: 0, why: "Òun ni ètò owó fún àkókò kan." },
      { objective: "O3", q: "Ètò ìnáwó $1,000 fún ìpolówó; ohun tó ṣẹlẹ̀ gan-an $700. Ìyàtọ̀ náà ni:", options: ["$300 kọjá ètò ìnáwó", "$1,700", "$300 kò dé ètò ìnáwó", "$700"], answer: 2, why: "700 - 1,000 = -300, nítorí náà $300 kò dé." },
      { objective: "O3", q: "Kí ló dé tí a fi ń ṣàlàyé ìyàtọ̀ ńlá kọ̀ọ̀kan?", options: ["Láti mú kí ìròyìn gùn sí i", "Kò pọn dandan rárá", "Láti fi àṣìṣe pamọ́", "Kí àwọn tí ń ṣe ìpinnu lè mọ ohun tó ṣẹlẹ̀ àti ìdí rẹ̀"], answer: 3, why: "Àlàyé ń sọ àwọn nọ́mbà di ìpinnu." },
      { objective: "O4", q: "Ọ̀sẹ̀ mélòó ni àsọtẹ́lẹ̀ owó inú ẹ̀kọ́ yìí bò?", options: ["2", "13", "52", "100"], answer: 1, why: "Àsọtẹ́lẹ̀ ọ̀sẹ̀ 13 bo nǹkan bí oṣù mẹ́ta." },
      { objective: "O4", q: "Ọ̀sẹ̀ tí owó kéré jù nínú àsọtẹ́lẹ̀ rẹ ń sọ fún ọ:", options: ["Gbogbo èrè rẹ", "Ìgbà tí owó máa há jù, kí o lè ṣètò", "Owó-orí tí o jẹ", "Kò sí ohun tó wúlò"], answer: 1, why: "Ó ń fi ìgbà tí o yẹ kí o gbé ìgbésẹ̀ ní kùtùkùtù hàn." },
      { objective: "O4", q: "Line of credit jẹ́:", options: ["Iye owó kan tí báńkì gbà kí o yá nígbà tí o bá nílò rẹ̀", "Ìlà kan nínú spreadsheet", "Irú ẹ̀bùn kan", "Ohun tí a yọ kúrò nínú owó-orí"], answer: 0, why: "Ó lè bo àlàfo owó fún ìgbà kúkúrú." },
      { objective: "O5", q: "Èwo ni AI lè ràn ọ́ lọ́wọ́ láti fi hàn nínú àkọsílẹ̀ owó rẹ?", options: ["Lọ́tìrì tí o máa jẹ ní ọjọ́ iwájú", "Owó-orí tí o jẹ gan-an", "Owó tí ó lè jẹ́ pé a san lẹ́ẹ̀mejì", "Ọ̀rọ̀ aṣínà àwọn oníbàárà"], answer: 2, why: "AI lè rí àpẹẹrẹ bí owó tí a san lẹ́ẹ̀mejì." },
      { objective: "O5", q: "Ímeèlì kíákíá kan tí ó dà bí ẹni pé ó wá láti ọ̀dọ̀ ọ̀gá rẹ ní kí o fi owó ránṣẹ́ (wire) lónìí. O yẹ kí o:", options: ["Ṣàyẹ̀wò nípa pípe nọ́mbà fóònù tí o ti mọ̀ tẹ́lẹ̀", "Fi owó náà ránṣẹ́ lójú ẹsẹ̀", "Fi àlàyé báńkì dá a lóhùn", "Má ka ọ̀gá náà sí mọ́ láéláé"], answer: 0, why: "Ìbéèrè owó kíákíá jẹ́ jìbìtì tó wọ́pọ̀." },
      { objective: "O5", q: "Ibo ni o ti lè ròyìn jìbìtì ní U.S.?", options: ["Ìkànnì ìjíròrò èyíkéyìí", "Ímeèlì ẹlẹ́tàn náà", "Kò sí ibì kankan", "ReportFraud.ftc.gov"], answer: 3, why: "FTC ń gba ìròyìn jìbìtì." },
      { objective: "O6", q: "Ìròyìn owó tó dára fún ìgbìmọ̀ jẹ́:", options: ["Spreadsheet bí ó ti rí nìkan", "Gbólóhùn márùn-ún tó yé pẹ̀lú àwọn nọ́mbà pàtàkì àti ìpinnu kan", "Ìròyìn ojú-ìwé 40", "Kò sí nọ́mbà kankan"], answer: 1, why: "Ìròyìn kúkúrú tó yé ń ran àwọn ènìyàn lọ́wọ́ láti ṣe ìpinnu." },
      { objective: "O6", q: "Gẹ́gẹ́ bí IRS ti sọ, ó yẹ kí a tọ́jú àkọsílẹ̀ owó-orí òṣìṣẹ́ fún ó kéré tán:", options: ["Oṣù 1", "Ọdún 4", "Ọdún 1", "Kò sí àkókò kankan"], answer: 1, why: "IRS sọ pé ó kéré tán ọdún 4 fún àkọsílẹ̀ owó-orí òṣìṣẹ́." },
      { objective: "O1", q: "Ẹ̀kọ́ yìí ń fúnni ní ìmọ̀ràn ìdókòwò.", options: ["Òtítọ́: ra ohun tí AI bá dábàá", "Òtítọ́: máa dókòwò owó ìrànwọ́ nígbà gbogbo", "Òtítọ́: AI ń yan ọjà ìdókòwò (stocks)", "Irọ́: lọ bá ọ̀jọ̀gbọ́n tó ní ìwé àṣẹ fún ìyẹn"], answer: 3, why: "Ẹ̀kọ́ yìí ń kọ́ni ní ìṣàkóso owó, kì í ṣe ìmọ̀ràn ìdókòwò." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 3, 6, 7, 9, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "A ti yọ ìsọfúnni àdáni kúrò", objective: "O1", notYet: "Ìsọfúnni náà ṣì ní nọ́mbà àkáǹtì, nọ́mbà ìdánimọ̀ tàbí orúkọ gidi.", meets: "A ti yọ gbogbo nọ́mbà àkáǹtì àti nọ́mbà ìdánimọ̀ kúrò, a sì ti fi àmì rọ́pò orúkọ.", exceeds: "Ó lè fi bí a ṣe ṣàyẹ̀wò ìṣirò AI nínú spreadsheet hàn." },
      { name: "Ìsọ̀rí àti àpapọ̀", objective: "O2", notYet: "A kò pín àwọn ìdúnàádúrà sí ìsọ̀rí, tàbí àpapọ̀ kò bá àpapọ̀ gbogbo owó mu.", meets: "Ìdúnàádúrà kọ̀ọ̀kan ní ìsọ̀rí, SUMIF ṣírò àpapọ̀ ọ̀kọ̀ọ̀kan, wọ́n sì dọ́gba pẹ̀lú àpapọ̀ gbogbo owó.", exceeds: "A rí ìsọ̀rí tí AI ṣe àṣìṣe sí, a tún wọn ṣe, a sì kọ àkọsílẹ̀ àwọn èyí tí ó jẹ́." },
      { name: "Ètò ìnáwó àti ohun tó ṣẹlẹ̀ gan-an", objective: "O3", notYet: "Kò sí òpó ìyàtọ̀, tàbí a kò ṣàlàyé àwọn ìyàtọ̀ ńlá.", meets: "Ìyàtọ̀ àti ìpín ọgọ́rùn-ún ìyàtọ̀ fún ìsọ̀rí kọ̀ọ̀kan, a sì ṣàlàyé mẹ́ta tó tóbi jù ní gbólóhùn kan ọ̀kọ̀ọ̀kan.", exceeds: "Àlàyé kọ̀ọ̀kan sọ ohun tí a máa ṣe nípa rẹ̀ ní oṣù tó ń bọ̀." },
      { name: "Àsọtẹ́lẹ̀ ọ̀sẹ̀ 13", objective: "O4", notYet: "Owó ìparí kò lọ sí ọ̀sẹ̀ tó tẹ̀lé e, tàbí a kò sàmì sí ọ̀sẹ̀ tí owó kéré jù.", meets: "Ọ̀sẹ̀ 13 pẹ̀lú owó tó ń wọlé, owó tó ń jáde àti owó ìparí tí ó ń lọ síwájú, a sì sàmì sí ọ̀sẹ̀ tí owó kéré jù.", exceeds: "Ó ní ètò fún ọ̀sẹ̀ tí owó kéré jù." },
      { name: "Ìròyìn owó", objective: "O6", notYet: "Kò sí, ó gùn ju bí ó ti yẹ lọ, tàbí ó ní nọ́mbà tí kò bá spreadsheet mu.", meets: "Gbólóhùn márùn-ún: owó tó wọlé, owó tó jáde, ìyàtọ̀ tó tóbi jù, bí owó ṣe máa rí àti ìpinnu kan, gbogbo rẹ̀ sì bá spreadsheet mu.", exceeds: "Ó yé dáadáa fún ẹni tí kò ní ìmọ̀ owó rárá, ó sì sọ ibi tí a tọ́jú àkọsílẹ̀ sí." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn àjọ tí wọ́n ń ṣe àtúnṣe tábìlì ètò ìnáwó àti ohun tó ṣẹlẹ̀ gan-an àti àsọtẹ́lẹ̀ ọ̀sẹ̀ 13 lóṣooṣù fún oṣù mẹ́ta (ìwádìí àtẹ̀lé)",
      "Owó tí a gbà lẹ́ẹ̀mejì, subscription tí a gbàgbé tàbí jìbìtì tí a rí tí a sì dá dúró láàárín ọjọ́ 60",
      "Àwọn olówó tàbí ìgbìmọ̀ tí wọ́n sọ pé àwọn ń gba ìròyìn owó oṣooṣù tó yé"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní Google Sheets tàbí Excel",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini)",
      "Àkọsílẹ̀ owó oṣù kan tí a gbé jáde láti báńkì tàbí irinṣẹ́ ìṣirò owó, tàbí ìsọfúnni àpẹẹrẹ ẹ̀kọ́ náà",
      "Nǹkan bí ìṣẹ́jú 60 fún ẹ̀kọ́ àti ìdánwò, pẹ̀lú àkókò láti ṣe spreadsheet"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan; ẹ kọ fọ́múlà SUMIF àti ti àsọtẹ́lẹ̀ lójú ìbòjú tí gbogbo ènìyàn ń wò.",
      "Fún àwọn akẹ́kọ̀ọ́ tí kò fẹ́ lo ìsọfúnni gidi ní oṣù àpẹẹrẹ tí ó ní ìdúnàádúrà àròsọ.",
      "Rí i dájú pé gbogbo akẹ́kọ̀ọ́ ti yọ nọ́mbà àkáǹtì àti orúkọ kúrò kí wọ́n tó fi ohunkóhun sínú AI.",
      "Má ṣe fúnni ní ìmọ̀ràn nípa owó-orí, owó oṣù òṣìṣẹ́, òfin tàbí ìdókòwò; darí irú ìbéèrè bẹ́ẹ̀ sí irs.gov, àjọ owó-orí ìpínlẹ̀ tàbí ọ̀jọ̀gbọ́n tó ní ìwé àṣẹ.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
