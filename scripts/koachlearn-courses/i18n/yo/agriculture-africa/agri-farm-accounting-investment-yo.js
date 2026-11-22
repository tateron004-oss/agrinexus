"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-farm-accounting-investment.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CBK = { name: "Central Bank of Kenya, Báńkì Àpapọ̀ Kenya (àwọn báńkì, báńkì kékeré àti olùpèsè gbèsè orí fóònù tó ní ìwé àṣẹ)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria, Báńkì Àpapọ̀ Nàìjíríà (àwọn báńkì àti báńkì kékeré tó ní ìwé àṣẹ)", url: "https://www.cbn.gov.ng" };
const BCEAO = { name: "BCEAO, Báńkì Àpapọ̀ àwọn Orílẹ̀-èdè Ìwọ̀-Oòrùn Áfíríkà (òfin fún báńkì àti báńkì kékeré ní àwọn orílẹ̀-èdè XOF)", url: "https://www.bceao.int" };

module.exports = {
  id: "agri-farm-accounting-investment-yo",
  lang: "yo",
  translationOf: "agri-farm-accounting-investment",
  category: "Agriculture (Africa)",
  name: "Ìṣirò Owó Oko àti Ìṣàkóso Ìdókòwò",
  skills: "Pípín ìnáwó sí èyí tí kì í yí padà àti èyí tó ń yí padà, Ṣíṣírò ìnáwó lórí kìlógíráàmù, àpò tàbí lítà kan, Kíkọ ìwé àkọsílẹ̀ ìnáwó, Ṣíṣètò ìṣàn owó oṣooṣù, Wíwá iye owó break-even, Ṣíṣàyẹ̀wò ìdókòwò pẹ̀lú àkókò ìdápadà owó àti èrè ọdọọdún",
  outcome: "mọ iye tí ó ń ná ọ gan-an láti ṣe kìlógíráàmù, àpò tàbí lítà kan, kọ gbogbo ìnáwó sílẹ̀, ṣètò owó rẹ lóṣooṣù, wá iye owó tó kéré jù tí o lè tà láìpàdánù, kí o sì ṣàyẹ̀wò bóyá ìdókòwò bí ẹ̀rọ fífa omi oníná oòrùn, ilé ọ̀gbìn (greenhouse) tàbí màálù púpọ̀ sí i máa dá owó rẹ̀ padà.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tó ń dàgbà, àwọn alákòóso oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nàìjíríà, Ghana, Senegal, Côte d'Ivoire àti káàkiri Áfíríkà, tí wọ́n ti ń kọ àkọsílẹ̀ díẹ̀ tẹ́lẹ̀, tí wọ́n sì fẹ́ ṣe ìpinnu owó tó mọ́yán lórí jù.",
    "Ó kọ́ lé ẹ̀kọ́ \"Iṣẹ́ Àgbẹ̀ Bí Òwò àti Ìṣàkóso Oko\", tí ó kọ́ni ní àkọsílẹ̀ tó rọrùn àti èrè àkọ́kọ́ (gross margin). Níbí, o máa lọ jìnnà sí i. Orí 1 dá lórí mímọ ìnáwó rẹ: ìnáwó tí kì í yí padà àti èyí tó ń yí padà, iye tí ó ń ná ọ láti ṣe ẹyọ kan, àti ìwé àkọsílẹ̀ ìnáwó. Orí 2 dá lórí ètò àti ìdókòwò: ètò ìṣàn owó oṣooṣù, iye owó break-even, àti ṣíṣàyẹ̀wò ìdókòwò pẹ̀lú àkókò ìdápadà owó rẹ̀ àti èrè ọdọọdún rẹ̀ (simple return).",
    "Gbogbo àpẹẹrẹ owó jẹ́ nọ́mbà àròsọ ní KES, NGN, GHS àti XOF láti fi ọ̀nà náà hàn; lo iye owó tìrẹ. Ẹ̀kọ́ yìí kò fúnni ní ìmọ̀ràn ìdókòwò. Kí o tó ra nǹkan ńlá tàbí yá owó, fi àwọn ìfilọ̀ wé ara wọn, ka gbogbo ìwé àdéhùn tán, kí o sì bá olùdámọ̀ràn tí o fọkàn tán sọ̀rọ̀, bí ẹgbẹ́ alájọṣe rẹ, SACCO, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí oníṣirò owó (accountant). Ẹ̀kọ́ kọ̀ọ̀kan parí pẹ̀lú iṣẹ́ àṣeṣe kúkúrú àti ìdánwò kíákíá ìbéèrè 2, orí kọ̀ọ̀kan parí pẹ̀lú ìdánwò ìmọ̀, ẹ̀kọ́ náà sì parí pẹ̀lú ìdánwò ìbéèrè 20."
  ],
  finalTask: "Ṣe ìwé ìnáwó àti ìdókòwò oko fún iṣẹ́ oko kan lórí oko rẹ (tàbí oko àpẹẹrẹ): àkọsílẹ̀ ìnáwó tí kì í yí padà àti èyí tó ń yí padà fún sáà kan, ìnáwó lórí kìlógíráàmù, àpò, lítà tàbí ẹyin kan, àkọsílẹ̀ ìnáwó oṣù kan, ètò ìṣàn owó oṣù 12 pẹ̀lú owó tó kù lóṣooṣù àti àmì sí àwọn oṣù àìtó owó, iye owó break-even àti ìkórè break-even tí o fi wé iye owó tí o retí, àti àkókò ìdápadà owó àti èrè ọdọọdún fún ìdókòwò kan tí ò ń ronú nípa rẹ̀, pẹ̀lú ìpinnu rẹ àti ìdí rẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tó ń dàgbà, àwọn alákòóso oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn olórí ẹgbẹ́ alájọṣe àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti àwọn orílẹ̀-èdè Ìwọ̀-Oòrùn Áfíríkà tí ń sọ èdè Faransé. Ọ̀pọ̀ ń gbin àgbàdo, ẹ̀gẹ́, ìrẹsì, ẹ̀wà, ẹ̀fọ́, kọfí tàbí kòkó, tàbí wọ́n ń sin màálù ọlọ́mú, ewúrẹ́, ẹlẹ́dẹ̀, adìẹ tàbí ẹja.",
    startingPoint: "Wọ́n lè ṣe àròpọ̀, àyọkúrò, ìsọdipúpọ̀ àti pínpín pẹ̀lú ẹ̀rọ ìṣirò fóònù. Ọ̀pọ̀ ń kọ àkọsílẹ̀ díẹ̀, wọ́n sì mọ ohun tí wọ́n ń ná àti ohun tí wọ́n ń rí ní ìwọ̀nba; àwọn kan ti ṣe ẹ̀kọ́ èrè àkọ́kọ́ (gross margin) nínú \"Iṣẹ́ Àgbẹ̀ Bí Òwò àti Ìṣàkóso Oko\". Díẹ̀ ló mọ ìnáwó wọn lórí kìlógíráàmù tàbí lítà kan, iye owó break-even wọn, tàbí bí a ṣe ń ṣàyẹ̀wò bóyá ẹ̀rọ kan máa dá owó rẹ̀ padà.",
    gap: "Àwọn àgbẹ̀ sábà máa ń tà ní iye tí ó kéré sí ohun tí wọ́n ná láti ṣe é, owó máa ń tán lọ́wọ́ wọn kí ìkórè tó dé kódà ní ọdún tó dára, tàbí wọ́n ń ra ẹ̀rọ àti ẹran tí kò dá owó wọn padà láéláé. Mímọ ìnáwó lórí ẹyọ kan, break-even àti àkókò ìdápadà owó ń jẹ́ kí wọ́n kọ iye owó búburú, ṣètò owó, kí wọ́n sì ṣe ìdókòwò tó ń mérè wá, ó sì ń fún àwọn ayánilówó àti olùrà ní nọ́mbà tí wọ́n lè gbẹ́kẹ̀ lé.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ owó",
      "Ẹ̀rọ: ẹ̀rọ ìṣirò fóònù lásán àti ìwé àkọsílẹ̀ ti tó; spreadsheet lórí fóònù kò pọn dandan",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5 sí 6 tí ó bá iṣẹ́ oko mu",
      "Owó: gbogbo nọ́mbà jẹ́ àpẹẹrẹ; iye owó, èlé àti ìrànlọ́wọ́ ìjọba (subsidy) ń yí padà, wọ́n sì gbọ́dọ̀ wá láti agbègbè akẹ́kọ̀ọ́ fúnra rẹ̀",
      "Kò sí ìmọ̀ràn ìdókòwò: àwọn akẹ́kọ̀ọ́ ń fi àwọn ọ̀nà wé ara wọn, wọ́n sì ń béèrè lọ́wọ́ olùdámọ̀ràn tí wọ́n fọkàn tán kí wọ́n tó ṣe ìpinnu ńlá"
    ],
    prerequisites: "Kò sí, ṣùgbọ́n \"Iṣẹ́ Àgbẹ̀ Bí Òwò àti Ìṣàkóso Oko\" (àkọsílẹ̀ àti èrè àkọ́kọ́) jẹ́ ìgbésẹ̀ àkọ́kọ́ tó wúlò."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ ìnáwó iṣẹ́ oko kan fún sáà kan àti ìkórè rẹ̀", action: "pín àwọn ìnáwó sí èyí tí kì í yí padà àti èyí tó ń yí padà, kí o sì ṣírò iye tí ó ń ná ọ láti ṣe kìlógíráàmù, àpò, lítà tàbí ẹyin kan", standard: "pẹ̀lú gbogbo ìnáwó nínú ẹgbẹ́ tó tọ́, àti ìnáwó lórí ẹyọ kan tó tọ̀nà dé ẹyọ owó odidi tó súnmọ́ jù" },
    { id: "O2", condition: "Pẹ̀lú ìwé àkọsílẹ̀ tàbí spreadsheet lórí fóònù", action: "kọ gbogbo ìnáwó oko fún oṣù kan sílẹ̀ pẹ̀lú ọjọ́, ẹ̀ka àti iṣẹ́ oko, kí o sì ṣírò àròpọ̀ ẹ̀ka kọ̀ọ̀kan", standard: "láìsí ọjọ́ kankan tó sọnù, pẹ̀lú àròpọ̀ tó bá àkọsílẹ̀ owó ọwọ́ àti owó orí fóònù rẹ mu" },
    { id: "O3", condition: "Tí a bá fún ọ ní owó tí a retí pé yóò wọlé àti èyí tí yóò jáde ní oṣù kọ̀ọ̀kan ọdún kan", action: "ṣe ètò ìṣàn owó oṣooṣù pẹ̀lú owó ìbẹ̀rẹ̀ àti owó ìparí oṣù, kí o sì sàmì sí àwọn oṣù àìtó owó", standard: "pẹ̀lú owó ìparí oṣù kọ̀ọ̀kan tí a gbé lọ sí oṣù tó kàn, àti ó kéré tán ìgbésẹ̀ kan tí a ṣètò fún oṣù àìtó owó kọ̀ọ̀kan" },
    { id: "O4", condition: "Tí a bá fún ọ ní àpapọ̀ ìnáwó, ìkórè tí a retí àti iye owó olùrà", action: "ṣírò iye owó break-even àti ìkórè break-even, kí o sì pinnu bóyá ìfilọ̀ náà bo ìnáwó rẹ", standard: "tó tọ̀nà dé ẹyọ owó odidi tàbí ẹyọ ìkórè tó súnmọ́ jù" },
    { id: "O5", condition: "Tí a bá fún ọ ní iye owó ìdókòwò kan àti owó àfikún àti ìnáwó àfikún tí ó yẹ kí ó mú wá", action: "ṣírò àkókò ìdápadà owó rẹ̀ àti èrè ọdọọdún rẹ̀ (simple return), kí o sì kọ ìpinnu pẹ̀lú àwọn ìdí rẹ", standard: "pẹ̀lú nọ́mbà tó tọ̀nà àti ó kéré tán ewu méjì tí a ṣàyẹ̀wò (ọjọ́ ayé nǹkan náà, iye owó gbèsè tàbí ìkórè tó dín kù)" }
  ],
  chapters: [
    {
      name: "Orí 1: Mímọ ìnáwó rẹ",
      lessons: [
        {
          title: "Ìnáwó tí kì í yí padà àti èyí tó ń yí padà",
          objectives: ["O1"],
          minutes: 5,
          goal: "Pín ìnáwó iṣẹ́ oko kan sí èyí tí kì í yí padà àti èyí tó ń yí padà, pẹ̀lú iye tí irinṣẹ́ àti ilé ń ná ọ lọ́dún.",
          text: [
            "Ìnáwó tó ń yí padà (variable cost) ń gòkè tàbí sọ̀kalẹ̀ pẹ̀lú iye tí o ń ṣe: irúgbìn, ajílẹ̀, oúnjẹ ẹran, owó òṣìṣẹ́ ojúmọ́, iṣẹ́ dókítà ẹranko, àpò, epo àti ìrìnnà. Tí o bá gbin ìdajì ilẹ̀ tàbí sin ìdajì àwọn ẹyẹ, àwọn ìnáwó wọ̀nyí máa dín kù.",
            "Ìnáwó tí kì í yí padà (fixed cost) máa ń wà ní ìwọ̀n kan náà bí o ti wù kí o ṣe tó ní sáà náà: owó ìyálò ilẹ̀, owó oṣù òṣìṣẹ́ àdáyé, ìwé àṣẹ omi, ìbánigbófò (insurance), àti bí irinṣẹ́, ẹ̀rọ fífa omi, ilé ẹran àti ọgbà ṣe ń gbó. Gbígbó yẹn la ń pè ní depreciation. Ọ̀nà tó rọrùn láti ṣírò rẹ̀: (iye tí o rà á - iye tó kù ní ìparí) / iye ọdún tí yóò lò. Àpẹẹrẹ (nọ́mbà àròsọ ní ṣílè Kenya): ẹ̀rọ ìfọ́nká oògùn ẹ̀yìn (knapsack sprayer) jẹ́ 6,000, yóò lò ọdún 5, kò sì ní níye kankan ní ìparí, nítorí náà ó ń ná oko ní 1,200 lọ́dún.",
            "Tí irinṣẹ́ tàbí ilé kan bá ń ṣiṣẹ́ fún iṣẹ́ oko púpọ̀, pín iye tí ó ń ná lọ́dún láàárín wọn, fún àpẹẹrẹ gẹ́gẹ́ bí ilẹ̀ tàbí àkókò tí ọ̀kọ̀ọ̀kan ń lò. Ka iṣẹ́ àwọn ẹbí rẹ náà, ní iye owó òṣìṣẹ́ ojúmọ́ ní agbègbè rẹ, kí o lè rí iye gidi àkókò rẹ."
          ],
          steps: ["Yan iṣẹ́ oko kan, bí àgbàdo, ẹja tilapia tàbí màálù ọlọ́mú kan.", "Kọ gbogbo ìnáwó fún sáà kan tàbí ọdún kan sílẹ̀.", "Sàmì sí ọ̀kọ̀ọ̀kan V (variable: ó ń yí padà pẹ̀lú iye tí o ń ṣe) tàbí F (fixed: kì í yí padà).", "Fún irinṣẹ́, ẹ̀rọ fífa omi àti ilé, ṣírò depreciation: (iye owó - iye tó kù) / ọdún ayé rẹ̀.", "Pín ìnáwó tí kì í yí padà láàárín àwọn iṣẹ́ oko tí ń lo nǹkan kan náà."],
          words: [["Ìnáwó tó ń yí padà (variable cost)", "ìnáwó tí ó ń gòkè tàbí sọ̀kalẹ̀ pẹ̀lú iye tí o ń ṣe, bí irúgbìn tàbí oúnjẹ ẹran."], ["Ìnáwó tí kì í yí padà (fixed cost)", "ìnáwó tí ó wà ní ìwọ̀n kan náà bí o ti wù kí o ṣe tó ní sáà náà, bí owó ìyálò ilẹ̀."], ["Depreciation", "apá kan nínú iye owó irinṣẹ́ tàbí ilé tí a ń lò tán lọ́dọọdún bí ó ṣe ń gbó."], ["Iṣẹ́ oko (enterprise)", "iṣẹ́ kan lórí oko, bí àgbàdo, adìẹ tàbí màálù ọlọ́mú."]],
          slides: [
            { title: "Ìnáwó tó ń yí padà", bullets: ["Ó ń yí padà pẹ̀lú iye tí o ń ṣe", "Irúgbìn, ajílẹ̀, oúnjẹ ẹran, òṣìṣẹ́ ojúmọ́, dókítà ẹranko, àpò, epo", "Tí o bá ṣe díẹ̀, wọ́n máa dín kù"] },
            { title: "Ìnáwó tí kì í yí padà", bullets: ["Ó wà ní ìwọ̀n kan náà bí o ti wù kí o ṣe tó", "Owó ìyálò, owó oṣù òṣìṣẹ́ àdáyé, ìwé àṣẹ, ìbánigbófò", "Gbígbó irinṣẹ́ àti ilé"] },
            { title: "Depreciation", bullets: ["(Iye owó - iye tó kù) / ọdún ayé rẹ̀", "Sprayer 6,000 KES, ọdún 5: 1,200 lọ́dún (àpẹẹrẹ)", "Pín in láàárín àwọn iṣẹ́ oko tí ń lò ó"] },
            { title: "Má ṣe gbàgbé", bullets: ["Iṣẹ́ ẹbí ní iye owó òṣìṣẹ́ ojúmọ́ ní agbègbè rẹ", "Ìnáwó kékeré: àpò, káàdì ìpè fún olùrà, ìrìnnà"] }
          ],
          tryIt: "Yan iṣẹ́ oko kan lórí oko rẹ. Kọ ó kéré tán ìnáwó mẹ́jọ láti sáà tó kọjá sílẹ̀, sàmì V tàbí F sí ọ̀kọ̀ọ̀kan, kí o sì ṣírò depreciation ọdọọdún irinṣẹ́ tàbí ilé kan tí o ń lò fún un.",
          youCanNow: "pín ìnáwó iṣẹ́ oko kan sí èyí tí kì í yí padà àti èyí tó ń yí padà, kí o sì ṣírò iye tí irinṣẹ́ àti ilé rẹ ń ná ọ lọ́dún.",
          quickCheck: [
            { objective: "O1", q: "Èwo nínú ìwọ̀nyí ni ìnáwó tó ń yí padà fún iṣẹ́ adìẹ?", options: ["Gbígbó ilé adìẹ lọ́dọọdún", "Owó ìyálò ilẹ̀ tí ilé náà wà lórí rẹ̀", "Oúnjẹ fún àwọn ẹyẹ", "Owó oṣù òṣìṣẹ́ àdáyé"], answer: 2, why: "Oúnjẹ ń gòkè, ó sì ń sọ̀kalẹ̀ pẹ̀lú iye ẹyẹ tí o ń sìn, nítorí náà ó ń yí padà." },
            { objective: "O1", q: "Ẹ̀rọ fífa omi kan jẹ́ 50,000, yóò lò ọdún 10, yóò sì jẹ́ 0 ní ìparí. Depreciation rẹ̀ ni:", options: ["5,000 lọ́dún", "50,000 lọ́dún", "500 lọ́dún", "10,000 lọ́dún"], answer: 0, why: "(50,000 - 0) / ọdún 10 = 5,000 lọ́dún." }
          ]
        },
        {
          title: "Iye tí ó ń ná ọ láti ṣe kìlógíráàmù, àpò tàbí lítà kan",
          objectives: ["O1"],
          minutes: 6,
          goal: "Ṣírò iye tí ó ń ná ọ láti ṣe kìlógíráàmù, àpò, lítà tàbí ẹyin kan fún iṣẹ́ oko kan.",
          text: [
            "Ìnáwó lórí ẹyọ kan = àpapọ̀ ìnáwó fún sáà náà / iye ẹyọ tí o ṣe ní sáà yẹn. Àpapọ̀ ìnáwó ni ìnáwó tó ń yí padà pẹ̀lú ìpín ìnáwó tí kì í yí padà tó jẹ́ ti iṣẹ́ oko yìí. Ẹyọ ni ohun tí o fi ń tà: kìlógíráàmù tòmátì kan, àpò àgbàdo 100 kg kan, lítà wàrà kan, páálí ẹyin kan, kìlógíráàmù ẹja tilapia kan.",
            "Àpẹẹrẹ (nọ́mbà àròsọ ní ṣílè Kenya), màálù ọlọ́mú kan fún oṣù kan: oúnjẹ 9,500, iṣẹ́ dókítà ẹranko àti ìbísí 1,000, òṣìṣẹ́ 3,000, ìpín ìnáwó tí kì í yí padà (ilé màálù, ẹ̀rọ gígé koríko, omi) 1,500. Àpapọ̀ 15,000. Màálù náà fúnni ní lítà 300. Ìnáwó lórí lítà kan = 15,000 / 300 = ṣílè 50. Tí olùrà wàrà bá san kéré ju 50 lọ, gbogbo lítà ló ń pàdánù owó.",
            "Àpẹẹrẹ (nọ́mbà àròsọ ní náírà), hẹ́kítà àgbàdo kan ní Nàìjíríà: ìnáwó tó ń yí padà 600,000, ìpín ìnáwó tí kì í yí padà 150,000, àpapọ̀ 750,000, ìkórè àpò 30 tó jẹ́ 100 kg ọ̀kọ̀ọ̀kan. Ìnáwó lórí àpò kan = 750,000 / 30 = 25,000, èyí tó jẹ́ náírà 250 lórí kìlógíráàmù kan. Ṣírò rẹ̀ ní gbogbo sáà: tí ìkórè bá dín kù tàbí tí iye owó ohun èlò oko bá gòkè, ìnáwó lórí ẹyọ kan náà máa gòkè."
          ],
          steps: ["Yan ẹyọ tí o fi ń tà: kìlógíráàmù, àpò, lítà, ẹyin tàbí páálí.", "Ṣírò àròpọ̀ ìnáwó tó ń yí padà fún sáà náà.", "Fi ìpín ìnáwó tí kì í yí padà ti iṣẹ́ oko yìí kún un.", "Ka iye ẹyọ tí o ṣe ní sáà kan náà.", "Ìnáwó lórí ẹyọ kan = àpapọ̀ ìnáwó / iye ẹyọ tí o ṣe.", "Fi wé iye owó tí àwọn olùrà ń san."],
          words: [["Ìnáwó lórí ẹyọ kan (cost per unit)", "iye tí ó ń ná ọ láti ṣe kìlógíráàmù, àpò, lítà tàbí ẹyin kan: àpapọ̀ ìnáwó pín sí iye ẹyọ tí o ṣe."], ["Ẹyọ (unit)", "ìwọ̀n tí o fi ń tà, bí kìlógíráàmù kan, àpò 100 kg kan tàbí lítà kan."]],
          slides: [
            { title: "Ọ̀nà ìṣirò náà", bullets: ["Ìnáwó lórí ẹyọ kan = àpapọ̀ ìnáwó / iye ẹyọ tí o ṣe", "Àpapọ̀ ìnáwó = èyí tó ń yí padà + ìpín èyí tí kì í yí padà", "Lo ẹyọ tí o fi ń tà"] },
            { title: "Màálù ọlọ́mú, oṣù kan (àpẹẹrẹ KES)", bullets: ["Oúnjẹ 9,500 + dókítà 1,000 + òṣìṣẹ́ 3,000 + àdáyé 1,500 = 15,000", "Lítà 300: 15,000 / 300 = 50 lórí lítà kan", "Olùrà tó ń san kéré ju 50 lọ = àdánù lórí lítà kọ̀ọ̀kan"] },
            { title: "Àgbàdo, hẹ́kítà kan (àpẹẹrẹ NGN)", bullets: ["Àpapọ̀ ìnáwó 750,000; ìkórè àpò 30", "750,000 / 30 = 25,000 lórí àpò kan = 250 lórí kìlógíráàmù kan"] },
            { title: "Ṣírò rẹ̀ ní gbogbo sáà", bullets: ["Ìkórè tó dín kù = ìnáwó tó ga jù lórí ẹyọ kan", "Ohun èlò tó wọ́n jù = ìnáwó tó ga jù lórí ẹyọ kan"] }
          ],
          tryIt: "Lo àwọn ìnáwó láti Ẹ̀kọ́ 1. Ṣírò àròpọ̀ wọn, pín in sí iye ẹyọ tí o ṣe, kí o sì kọ ìnáwó rẹ lórí kìlógíráàmù, àpò, lítà tàbí ẹyin kan. Lẹ́yìn náà kọ iye owó tí olùrà fi lọ̀ ọ́ kẹ́yìn sí ẹ̀gbẹ́ rẹ̀.",
          youCanNow: "ṣírò iye tí ó ń ná ọ láti ṣe ẹyọ kan nínú ohun tí o ń tà, kí o sì fi wé iye owó tí wọ́n fi lọ̀ ọ́.",
          quickCheck: [
            { objective: "O1", q: "Àpapọ̀ ìnáwó oko tòmátì kan jẹ́ 40,000, ó sì mú 800 kg wá. Kí ni ìnáwó lórí kìlógíráàmù kan?", options: ["800", "40", "500", "50"], answer: 3, why: "40,000 / 800 kg = 50 lórí kìlógíráàmù kan." },
            { objective: "O1", q: "Ìkórè rẹ dín kù ṣùgbọ́n ìnáwó rẹ kò yí padà. Kí ló ń ṣẹlẹ̀ sí ìnáwó rẹ lórí ẹyọ kan?", options: ["Kò yí padà", "Ó gòkè", "Ó dín kù", "Ó di òdo"], answer: 1, why: "Ìnáwó kan náà tí a pín sí ẹyọ díẹ̀ ń mú kí ìnáwó lórí ẹyọ kọ̀ọ̀kan ga sí i." }
          ]
        },
        {
          title: "Ìwé àkọsílẹ̀ ìnáwó tí o lè máa kọ",
          objectives: ["O2"],
          minutes: 5,
          goal: "Ṣètò ìwé àkọsílẹ̀ ìnáwó kí o sì kọ gbogbo ìnáwó oko sílẹ̀ fún oṣù kan.",
          text: [
            "Ìwé àkọsílẹ̀ ìnáwó (expense tracker) jẹ́ àkọsílẹ̀ gbogbo owó tí o san lórí oko, pẹ̀lú àwọn ọ̀wọ̀n kan náà ní gbogbo ìgbà: ọjọ́, ohun tí o rà, ẹ̀ka (irúgbìn, ajílẹ̀, oúnjẹ ẹran, òṣìṣẹ́, dókítà ẹranko, epo, ìrìnnà, àtúnṣe, owó ìyálò), iṣẹ́ oko wo, F tàbí V, iye owó, bí o ṣe san án (owó ọwọ́ tàbí owó orí fóònù) àti bóyá o pa ìwé ẹ̀rí ìsanwó mọ́.",
            "Kọ ìnáwó kọ̀ọ̀kan ní ọjọ́ kan náà. Ní ìparí oṣù, ṣírò àròpọ̀ ẹ̀ka kọ̀ọ̀kan àti iṣẹ́ oko kọ̀ọ̀kan. Kíákíá ni o máa rí ibi tí owó ń lọ. Àpẹẹrẹ (nọ́mbà àròsọ ní sídì Ghana), oko adìẹ olẹ́yin ní oṣù kan: oúnjẹ 4,200, òṣìṣẹ́ 1,200, dókítà ẹranko àti abẹ́rẹ́ àjẹsára 400, ìrìnnà 300, àtúnṣe 150, àpapọ̀ 6,250. Oúnjẹ jẹ́ ìdá méjì nínú mẹ́ta ìnáwó náà, nítorí náà oúnjẹ ni ibi tí o ti lè fi owó pamọ́ jù.",
            "Ìwé àkọsílẹ̀ lásán ń ṣiṣẹ́ dáadáa. Lórí fóònù, spreadsheet ọ̀fẹ́ bí Google Sheets tàbí Microsoft Excel lè ṣírò àròpọ̀ ẹ̀ka kọ̀ọ̀kan fún ọ pẹ̀lú fọ́múlà SUMIF. Fi àkọsílẹ̀ náà wé ìwé ìṣirò owó ọwọ́ àti owó orí fóònù rẹ ní ọ̀sẹ̀ kọ̀ọ̀kan, kí ohunkóhun má bàa sọnù."
          ],
          steps: ["Ṣe àwọn ọ̀wọ̀n: ọjọ́, ohun tí o rà, ẹ̀ka, iṣẹ́ oko, F tàbí V, iye owó, bí o ṣe san án, ìwé ẹ̀rí.", "Kọ ìnáwó kọ̀ọ̀kan ní ọjọ́ kan náà.", "Ní ọ̀sẹ̀ kọ̀ọ̀kan, fi wé ìwé ìṣirò owó ọwọ́ àti owó orí fóònù rẹ.", "Ní ìparí oṣù, ṣírò àròpọ̀ ẹ̀ka kọ̀ọ̀kan àti iṣẹ́ oko kọ̀ọ̀kan.", "Wá ẹ̀ka tó tóbi jù àti ọ̀nà kan láti dín in kù."],
          words: [["Ìwé àkọsílẹ̀ ìnáwó (expense tracker)", "àkọsílẹ̀ gbogbo owó tí o san lórí oko pẹ̀lú àwọn ọ̀wọ̀n kan náà, kí o lè ṣírò àròpọ̀ rẹ̀ ní ẹ̀ka-ẹ̀ka."], ["Ẹ̀ka (category)", "ẹgbẹ́ àwọn ìnáwó tó jọra, bí oúnjẹ ẹran, òṣìṣẹ́ tàbí ìrìnnà."], ["Ìwé ẹ̀rí ìsanwó (receipt)", "ìwé tàbí ọ̀rọ̀ ìránṣẹ́ tó fi hàn pé o ti sanwó."]],
          slides: [
            { title: "Àwọn ọ̀wọ̀n kan náà ní gbogbo ìgbà", bullets: ["Ọjọ́, ohun tí o rà, ẹ̀ka, iṣẹ́ oko", "Tí kì í yí padà tàbí tó ń yí padà, iye owó", "Owó ọwọ́ tàbí owó orí fóònù, ṣé o pa ìwé ẹ̀rí mọ́?"] },
            { title: "Àròpọ̀ ìparí oṣù (àpẹẹrẹ GHS, adìẹ olẹ́yin)", bullets: ["Oúnjẹ 4,200, òṣìṣẹ́ 1,200, dókítà ẹranko 400", "Ìrìnnà 300, àtúnṣe 150: àpapọ̀ 6,250", "Oúnjẹ jẹ́ ìdá méjì nínú mẹ́ta: bẹ̀rẹ̀ ìfowópamọ́ níbẹ̀"] },
            { title: "Jẹ́ olóòótọ́ nínú rẹ̀", bullets: ["Kọ ọ́ ní ọjọ́ kan náà", "Fi wé ìwé ìṣirò owó orí fóònù ní ọ̀sẹ̀ kọ̀ọ̀kan", "Ìwé àkọsílẹ̀ tàbí spreadsheet lórí fóònù (SUMIF)"] }
          ],
          tryIt: "Ṣètò ìwé àkọsílẹ̀ rẹ lónìí pẹ̀lú gbogbo ọ̀wọ̀n mẹ́jọ. Kọ gbogbo ìnáwó oko láti ọjọ́ méje sẹ́yìn sínú rẹ̀ pẹ̀lú ohun tí o rántí, àwọn ìwé ẹ̀rí ìsanwó àti ìwé ìṣirò owó orí fóònù rẹ, lẹ́yìn náà ṣírò àròpọ̀ wọn ní ẹ̀ka-ẹ̀ka.",
          youCanNow: "máa kọ ìwé àkọsílẹ̀ ìnáwó, ṣírò àròpọ̀ rẹ̀ ní ẹ̀ka-ẹ̀ka àti ní iṣẹ́ oko kọ̀ọ̀kan, kí o sì rí ibi tí owó rẹ ń lọ.",
          quickCheck: [
            { objective: "O2", q: "Kí ló dé tí a fi ń fi ọ̀wọ̀n kan kún un fún iṣẹ́ oko tí ìnáwó kọ̀ọ̀kan jẹ́ tirẹ̀?", options: ["Kí o lè rí iye tí iṣẹ́ oko kọ̀ọ̀kan ń ná gan-an", "Nítorí pé báńkì ń béèrè rẹ̀ lójoojúmọ́", "Kí àkọsílẹ̀ náà lè gùn sí i", "Kí o má bàa nílò ìwé ẹ̀rí ìsanwó"], answer: 0, why: "Àròpọ̀ iṣẹ́ oko kọ̀ọ̀kan ló ń bọ́ sínú ìnáwó lórí ẹyọ kan fún ọ̀kọ̀ọ̀kan wọn." },
            { objective: "O2", q: "Àròpọ̀ inú ìwé àkọsílẹ̀ rẹ kéré ju owó tó jáde nínú àpò owó orí fóònù rẹ lóṣù yìí. Kí ni o máa ṣe?", options: ["Fojú fò ó; àlàfo kékeré kò ṣe nǹkan", "Pa ìwé àkọsílẹ̀ rẹ́ kí o sì tún bẹ̀rẹ̀ lọ́dún tó ń bọ̀", "Ṣàyẹ̀wò ìwé ìṣirò náà kí o sì fi àwọn ìnáwó tó sọnù kún un", "Fi nọ́mbà àhùsọ kún un kí wọ́n lè bára mu"], answer: 2, why: "Ìwé ìṣirò náà fi ohun tí o san gan-an hàn, nítorí náà ó ń ràn ọ́ lọ́wọ́ láti rí àwọn ohun tó sọnù kí o sì kọ wọ́n." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Mímọ ìnáwó rẹ",
        questions: [
          { objective: "O1", q: "Èwo ni ìnáwó tí kì í yí padà fún oko àgbàdo?", options: ["Irúgbìn", "Ajílẹ̀", "Owó òṣìṣẹ́ ojúmọ́ fún pípa èpò", "Owó ìyálò ilẹ̀ lọ́dọọdún"], answer: 3, why: "Owó ìyálò wà ní ìwọ̀n kan náà bí o ti wù kí o gbìn sórí ilẹ̀ náà, nítorí náà ìnáwó tí kì í yí padà ni." },
          { objective: "O1", q: "Ẹ̀rọ gígé koríko (chaff cutter) kan jẹ́ 30,000, yóò lò ọdún 6, yóò sì jẹ́ 0 ní ìparí. Kí ni depreciation rẹ̀ lọ́dọọdún?", options: ["5,000", "6,000", "30,000", "180,000"], answer: 0, why: "(30,000 - 0) / ọdún 6 = 5,000 lọ́dún." },
          { objective: "O1", q: "Àpapọ̀ ìnáwó iṣẹ́ ẹlẹ́dẹ̀ kan jẹ́ 90,000, o sì ta ẹran ẹlẹ́dẹ̀ 600 kg. Kí ni ìnáwó lórí kìlógíráàmù kan?", options: ["600", "150", "90", "1,500"], answer: 1, why: "90,000 / 600 kg = 150 lórí kìlógíráàmù kan." },
          { objective: "O2", q: "Ìgbà wo ni o yẹ kí o kọ ìnáwó kan sínú ìwé àkọsílẹ̀?", options: ["Ní ìparí sáà", "Nígbà tí o bá ní ìwé ẹ̀rí ìsanwó nìkan", "Ní ọjọ́ kan náà tí o san án", "Fún owó ńlá nìkan"], answer: 2, why: "Àkọsílẹ̀ ọjọ́ kan náà máa ń pé, ó sì máa ń tọ̀nà." },
          { objective: "O2", q: "Lẹ́yìn oṣù kan tí o ti ń kọ ọ́, oúnjẹ ẹran jẹ́ 65% ìnáwó. Kí ni ìgbésẹ̀ tó wúlò jù tó kàn?", options: ["Kọ́kọ́ wá ọ̀nà láti dín ìnáwó oúnjẹ tàbí ìfiṣòfò rẹ̀ kù", "Dẹ́kun kíkọ ọ́ nítorí ìdáhùn ti hàn", "Kọ́kọ́ dín ẹ̀ka tó kéré jù kù", "Ra oúnjẹ púpọ̀ sí i láti rí ẹ̀dínwó, bí iye owó ti wù kí ó rí"], answer: 0, why: "Ẹ̀ka tó tóbi jù ni ibi tí ìfowópamọ́ ti máa ṣe ìyàtọ̀ jù." }
        ]
      }
    },
    {
      name: "Orí 2: Ètò àti ìdókòwò",
      lessons: [
        {
          title: "Ètò ìṣàn owó oṣooṣù pẹ̀lú owó tó kù",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ṣe ètò ìṣàn owó oṣù 12 pẹ̀lú owó ìbẹ̀rẹ̀ àti owó ìparí oṣù, kí o sì sàmì sí àwọn oṣù àìtó owó.",
          text: [
            "Ètò ìṣàn owó (cash-flow plan) ń fi hàn, ní oṣù-oṣù, iye owó tí o retí pé o máa ní. Fún oṣù kọ̀ọ̀kan: owó ìbẹ̀rẹ̀ (owó tí o fi bẹ̀rẹ̀ oṣù) + owó tó wọlé - owó tó jáde = owó ìparí. Owó ìparí oṣù yìí ló máa di owó ìbẹ̀rẹ̀ oṣù tó kàn.",
            "Àpẹẹrẹ (nọ́mbà àròsọ ní sídì Ghana), oko àgbàdo àti adìẹ. Oṣù Kẹta (March): ìbẹ̀rẹ̀ 3,000 + wọlé 500 - jáde 2,000 = ìparí 1,500. Oṣù Kẹrin (April): ìbẹ̀rẹ̀ 1,500 + wọlé 500 - jáde 2,500 = ìparí -500. Owó ìparí tó jẹ́ àyọkúrò (minus) jẹ́ àìtó owó: o kò ní lè san gbogbo nǹkan ní oṣù yẹn àyàfi tí o bá ṣètò.",
            "Fún oṣù àìtó owó kọ̀ọ̀kan, ṣètò ìgbésẹ̀ kan kí ó tó dé: fi owó pamọ́ láti ìkórè tó kọjá, sún ríra nǹkan kan síwájú sí oṣù míì, ta irè oko ní ìpele-ìpele, fi iṣẹ́ oko kékeré kan kún un tó ń mówó wá ní oṣù yẹn (ẹyin, ẹ̀fọ́, ẹja), ṣètò àwìn ohun èlò oko (input credit), tàbí ṣe àdéhùn gbèsè kékeré ṣáájú pẹ̀lú ìsanpadà lẹ́yìn ìkórè. Ṣe àtúnṣe ètò náà lóṣooṣù pẹ̀lú ohun tó ṣẹlẹ̀ gan-an."
          ],
          steps: ["Ṣe ọ̀wọ̀n oṣù 12 àti ìlà mẹ́rin: ìbẹ̀rẹ̀, owó tó wọlé, owó tó jáde, ìparí.", "Fi owó tí o ní báyìí sí owó ìbẹ̀rẹ̀ àkọ́kọ́.", "Kọ owó tí o retí pé yóò wọlé àti èyí tí yóò jáde fún oṣù kọ̀ọ̀kan.", "Ìparí = ìbẹ̀rẹ̀ + owó tó wọlé - owó tó jáde; gbé e lọ sí ìbẹ̀rẹ̀ oṣù tó kàn.", "Fa àyíká yí gbogbo owó ìparí tó jẹ́ àyọkúrò (minus) ká.", "Kọ ìgbésẹ̀ kan fún oṣù kọ̀ọ̀kan tí o fa àyíká yí ká, kí o sì máa ṣe àtúnṣe lóṣooṣù."],
          words: [["Owó ìbẹ̀rẹ̀ (opening balance)", "owó tí o ní ní ìbẹ̀rẹ̀ oṣù kan."], ["Owó ìparí (closing balance)", "owó tí o retí ní ìparí oṣù kan: owó ìbẹ̀rẹ̀ + owó tó wọlé - owó tó jáde."], ["Àìtó owó (shortfall)", "oṣù tí owó tó ń jáde pọ̀ ju owó tí o ní lọ."]],
          slides: [
            { title: "Ìṣirò ìlà kan ṣoṣo", bullets: ["Ìbẹ̀rẹ̀ + owó tó wọlé - owó tó jáde = ìparí", "Ìparí di ìbẹ̀rẹ̀ oṣù tó kàn"] },
            { title: "Àpẹẹrẹ (GHS, àròsọ)", bullets: ["Oṣù Kẹta: 3,000 + 500 - 2,000 = 1,500", "Oṣù Kẹrin: 1,500 + 500 - 2,500 = -500", "Àyọkúrò = àìtó owó: ṣètò fún un báyìí"] },
            { title: "Bí a ṣe ń yanjú àìtó owó", bullets: ["Fi owó pamọ́ láti ìkórè; sún ríra nǹkan síwájú", "Tà ní ìpele-ìpele; fi iṣẹ́ oko tó ń mówó wá nígbà yẹn kún un", "Àwìn ohun èlò oko tàbí gbèsè kékeré tí a ṣe àdéhùn rẹ̀ ṣáájú"] },
            { title: "Máa lò ó nìṣó", bullets: ["Kọ ohun tó ṣẹlẹ̀ gan-an ní oṣù kọ̀ọ̀kan", "Ṣe àtúnṣe àwọn oṣù tó ń bọ̀"] }
          ],
          tryIt: "Ṣe ètò ìṣàn owó oṣù 12 rẹ, bẹ̀rẹ̀ pẹ̀lú owó tí o ní lónìí. Ṣírò gbogbo owó ìparí oṣù, fa àyíká yí àwọn oṣù àìtó owó ká, kí o sì kọ ìgbésẹ̀ kan fún ọ̀kọ̀ọ̀kan.",
          youCanNow: "ṣe ètò ìṣàn owó oṣooṣù pẹ̀lú owó tó kù lóṣù kọ̀ọ̀kan, rí àwọn oṣù àìtó owó ní kùtùkùtù, kí o sì ṣètò ohun tí o máa ṣe nípa wọn.",
          quickCheck: [
            { objective: "O3", q: "Owó ìbẹ̀rẹ̀ 2,000, owó tó wọlé 1,000, owó tó jáde 2,500. Kí ni owó ìparí?", options: ["5,500", "-500", "3,000", "500"], answer: 3, why: "2,000 + 1,000 - 2,500 = 500." },
            { objective: "O3", q: "Ètò rẹ fi àìtó owó hàn ní oṣù Kẹjọ (August). Ìgbà wo ni o yẹ kí o ṣètò ohun tí o máa ṣe?", options: ["Báyìí, oṣù púpọ̀ ṣáájú oṣù Kẹjọ", "Ní oṣù Kẹjọ, nígbà tí àwọn owó tí a fẹ́ san bá dé", "Lẹ́yìn ìkórè", "Kò sí ìgbà kankan; ó máa yanjú ara rẹ̀"], answer: 0, why: "Ṣíṣètò ní kùtùkùtù ń fún ọ ní àkókò láti fi owó pamọ́, sún ríra nǹkan síwájú, tàbí ṣètò àwìn lórí àdéhùn tó dára." }
          ]
        },
        {
          title: "Iye owó break-even àti ìkórè break-even",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ṣírò iye owó break-even àti ìkórè break-even, kí o sì lò wọ́n láti ṣàyẹ̀wò iye tí olùrà fi lọ̀ ọ́.",
          text: [
            "Break-even ni ibi tí owó tó wọlé ti bo àpapọ̀ ìnáwó gẹ́lẹ́: kò sí èrè, kò sí àdánù. Iye owó break-even = àpapọ̀ ìnáwó / ìkórè tí a retí. Òun ni iye owó tó kéré jù tí o lè gbà láìpàdánù owó. Ìkórè break-even = àpapọ̀ ìnáwó / iye owó tí o retí. Òun ni ìkórè tó kéré jù tó máa bo ìnáwó rẹ ní iye owó yẹn.",
            "Àpẹẹrẹ (nọ́mbà àròsọ ní náírà), hẹ́kítà àgbàdo láti Ẹ̀kọ́ 2: àpapọ̀ ìnáwó 750,000, ìkórè tí a retí àpò 30. Iye owó break-even = 750,000 / 30 = 25,000 lórí àpò kan. Olùrà kan fi 28,000 lọ̀ ọ́: o máa jèrè 3,000 lórí àpò kan, tàbí 90,000 lórí àpò 30. Ìkórè break-even ní 28,000 = 750,000 / 28,000 = àpò 26.8, nítorí náà o nílò ó kéré tán àpò 27. Tí ọ̀gbẹlẹ̀ bá dín ìkórè rẹ kù sí àpò 25, o máa pàdánù owó kódà ní iye owó yẹn.",
            "Lo break-even kí o tó gbìn (ṣé irè oko yìí tọ́ sí i ní iye owó tó ṣeé ṣe?) àti nígbà tí olùrà bá fi iye owó kan lọ̀ ọ́ (ṣé ó bo ìnáwó mi?). Àlàfo tó wà láàárín iye owó tí o retí àti iye owó break-even rẹ ni àlàfo ààbò rẹ (safety margin): bí ó ṣe tóbi tó ni o ṣe lè fara da sáà búburú tàbí ìdínkù iye owó tó."
          ],
          steps: ["Ṣírò àpapọ̀ ìnáwó iṣẹ́ oko náà (èyí tó ń yí padà + ìpín èyí tí kì í yí padà).", "Iye owó break-even = àpapọ̀ ìnáwó / ìkórè tí a retí.", "Ìkórè break-even = àpapọ̀ ìnáwó / iye owó tí a retí.", "Fi wé iye tí olùrà fi lọ̀ ọ́ àti ìkórè tí ó ṣeé ṣe kí o ní.", "Kọ àlàfo ààbò rẹ: iye owó tí a retí - iye owó break-even."],
          words: [["Break-even", "ibi tí owó tó wọlé ti bo àpapọ̀ ìnáwó gẹ́lẹ́: kò sí èrè, kò sí àdánù."], ["Iye owó break-even", "iye owó tó kéré jù lórí ẹyọ kan tó bo ìnáwó rẹ: àpapọ̀ ìnáwó / ìkórè."], ["Ìkórè break-even", "ìkórè tó kéré jù tó bo ìnáwó rẹ ní iye owó kan: àpapọ̀ ìnáwó / iye owó."], ["Àlàfo ààbò (safety margin)", "iye tí iye owó tàbí ìkórè lè dín kù tó kí o tó bẹ̀rẹ̀ sí í pàdánù."]],
          slides: [
            { title: "Nọ́mbà break-even méjì", bullets: ["Iye owó break-even = àpapọ̀ ìnáwó / ìkórè", "Ìkórè break-even = àpapọ̀ ìnáwó / iye owó"] },
            { title: "Àpẹẹrẹ àgbàdo (NGN, àròsọ)", bullets: ["750,000 / àpò 30 = 25,000 lórí àpò kan", "Ìfilọ̀ 28,000: èrè 3,000 lórí àpò kan, 90,000 lápapọ̀", "Ìkórè break-even ní 28,000: nǹkan bí àpò 27"] },
            { title: "Ìgbà tí o máa lò ó", bullets: ["Kí o tó gbìn: ṣé ó tọ́ sí i?", "Nígbà tí olùrà bá fi iye owó lọ̀ ọ́: ṣé ó bo ìnáwó?", "Àlàfo ààbò tó tóbi = àyè púpọ̀ fún sáà búburú"] }
          ],
          tryIt: "Lo àpapọ̀ ìnáwó iṣẹ́ oko rẹ àti ìkórè tí o retí. Ṣírò iye owó break-even àti ìkórè break-even ní iye owó ti òde òní, kí o sì kọ àlàfo ààbò rẹ. Ṣé o máa gba ìfilọ̀ tó kẹ́yìn tí o rí?",
          youCanNow: "ṣírò iye owó break-even àti ìkórè break-even fún iṣẹ́ oko kan, kí o sì lò wọ́n láti gba tàbí kọ ìfilọ̀ kan.",
          quickCheck: [
            { objective: "O4", q: "Àpapọ̀ ìnáwó 120,000, ìkórè tí a retí àpò 40. Kí ni iye owó break-even?", options: ["4,000 lórí àpò kan", "40 lórí àpò kan", "3,000 lórí àpò kan", "160,000 lórí àpò kan"], answer: 2, why: "120,000 / àpò 40 = 3,000 lórí àpò kan." },
            { objective: "O4", q: "Iye owó break-even rẹ fún wàrà jẹ́ 50 lórí lítà kan. Olùrà kan fi 45 lọ̀ ọ́. Kí ni èyí túmọ̀ sí?", options: ["O máa jèrè 5 lórí lítà kọ̀ọ̀kan", "O máa pàdánù nǹkan bí 5 lórí lítà kọ̀ọ̀kan àyàfi tí o bá dín ìnáwó kù tàbí rí olùrà tó dára jù", "Ìfilọ̀ náà dára nítorí ó súnmọ́ ọn", "Break-even kò ṣe pàtàkì fún wàrà"], answer: 1, why: "Iye owó tó kéré sí break-even túmọ̀ sí pé gbogbo lítà tí o tà ló ń pàdánù owó." }
          ]
        },
        {
          title: "Ṣíṣàyẹ̀wò ìdókòwò: àkókò ìdápadà owó àti èrè ọdọọdún",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣírò àkókò ìdápadà owó àti èrè ọdọọdún (simple return) ìdókòwò kan, kí o sì pinnu bóyá ó bọ́gbọ́n mu.",
          text: [
            "Ìdókòwò (investment) ni owó tí a ná báyìí láti rí owó púpọ̀ sí i lẹ́yìn: ẹ̀rọ fífa omi oníná oòrùn, ilé ọ̀gbìn (greenhouse), ilé ìtọ́jú tútù (cold store), ilé ẹlẹ́dẹ̀ tàbí màálù púpọ̀ sí i. Kọ́kọ́ ṣírò èrè àfikún lọ́dọọdún (extra net income): owó àfikún tí ó mú wọlé yọ ìnáwó àfikún láti máa lò ó (epo, àtúnṣe, oúnjẹ ẹran, òṣìṣẹ́, ẹ̀yà ìpààrọ̀). Lẹ́yìn náà: àkókò ìdápadà owó = iye owó ìdókòwò / èrè àfikún lọ́dọọdún. Èrè ọdọọdún (simple return) = èrè àfikún lọ́dọọdún / iye owó ìdókòwò x 100.",
            "Àpẹẹrẹ (nọ́mbà àròsọ ní ṣílè Kenya), ẹ̀rọ fífa omi oníná oòrùn tí ó jẹ́ kí o lè gbin tòmátì ní ẹ̀ẹ̀rùn: iye owó 120,000; owó àfikún 55,000 lọ́dún yọ ìnáwó àfikún 15,000 = èrè àfikún 40,000. Àkókò ìdápadà owó = 120,000 / 40,000 = ọdún 3. Èrè ọdọọdún = 40,000 / 120,000 x 100 = nǹkan bí 33% lọ́dún. Àpẹẹrẹ (nọ́mbà àròsọ ní fáráǹkì CFA), ilé ọ̀gbìn ní Senegal: iye owó 3,000,000; èrè àfikún 600,000 lọ́dún. Àkókò ìdápadà owó = ọdún 5; èrè ọdọọdún = 20% lọ́dún.",
            "Lẹ́yìn náà ṣàyẹ̀wò àwọn ewu. Ṣé yóò pẹ́ ju àkókò ìdápadà owó lọ (ike ilé ọ̀gbìn àti ẹ̀yà ẹ̀rọ fífa omi máa ń gbó)? Tí o bá yá owó, ṣé iye tí gbèsè náà ń ná lọ́dún kéré ju èrè náà lọ, ṣé o sì lè san án padà kí nǹkan náà tó dá owó rẹ̀ padà? Bí ìkórè tàbí iye owó bá fi 20% kéré sí ohun tí o retí ńkọ́? Lo nọ́mbà tí kò ga jù, béèrè lọ́wọ́ olùtajà fún àwọn àgbẹ̀ tí wọ́n ti ń lò ó, kí o sì bá olùdámọ̀ràn tí o fọkàn tán sọ̀rọ̀ kí o tó rà á. Ẹ̀kọ́ yìí ń ṣàlàyé ọ̀nà ìṣirò náà; kò sọ ohun tí o máa rà fún ọ."
          ],
          steps: ["Kọ gbogbo iye owó rẹ̀: nǹkan náà, gbígbé e dé, ṣíṣe ìkànsí rẹ̀ (installation), ìdánilẹ́kọ̀ọ́.", "Ṣírò owó àfikún lọ́dọọdún, pẹ̀lú ìkórè àti iye owó tí kò ga jù.", "Yọ ìnáwó àfikún láti máa lò ó kúrò láti rí èrè àfikún lọ́dọọdún.", "Àkókò ìdápadà owó = iye owó / èrè àfikún lọ́dọọdún.", "Èrè ọdọọdún = èrè àfikún / iye owó x 100.", "Ṣàyẹ̀wò ọjọ́ ayé nǹkan náà, iye owó gbèsè àti ìṣẹ̀lẹ̀ tó burú ní 20%; kọ ìpinnu rẹ."],
          words: [["Ìdókòwò (investment)", "owó tí a ná báyìí lórí nǹkan tí ó yẹ kí ó mówó púpọ̀ sí i wá lẹ́yìn."], ["Èrè àfikún (extra net income)", "owó àfikún tí ìdókòwò kan ń mú wọlé lọ́dọọdún yọ ìnáwó àfikún láti máa lò ó."], ["Àkókò ìdápadà owó (payback period)", "iye ọdún tí yóò gbà kí èrè àfikún tó dá owó tí o ná padà: iye owó / èrè àfikún lọ́dọọdún."], ["Èrè ọdọọdún (simple return)", "èrè àfikún lọ́dọọdún gẹ́gẹ́ bí ìpín nínú ọgọ́rùn-ún (%) iye owó náà."]],
          slides: [
            { title: "Nọ́mbà méjì láti ṣàyẹ̀wò ìdókòwò", bullets: ["Ìdápadà owó = iye owó / èrè àfikún lọ́dọọdún", "Èrè ọdọọdún = èrè àfikún / iye owó x 100", "Èrè àfikún = owó àfikún - ìnáwó àfikún"] },
            { title: "Ẹ̀rọ fífa omi oníná oòrùn (àpẹẹrẹ KES)", bullets: ["Iye owó 120,000; èrè àfikún 40,000 lọ́dún", "Ìdápadà owó ọdún 3; èrè ọdọọdún nǹkan bí 33%"] },
            { title: "Ilé ọ̀gbìn ní Senegal (àpẹẹrẹ XOF)", bullets: ["Iye owó 3,000,000; èrè àfikún 600,000 lọ́dún", "Ìdápadà owó ọdún 5; èrè ọdọọdún 20%"] },
            { title: "Ṣàyẹ̀wò kí o tó rà á", bullets: ["Ṣé yóò pẹ́ ju àkókò ìdápadà owó lọ?", "Ṣé iye owó gbèsè kéré ju èrè lọ?", "Ṣé ó ṣì ṣiṣẹ́ tí ìkórè tàbí iye owó bá fi 20% dín kù?", "Bá àwọn tó ń lò ó àti olùdámọ̀ràn tí o fọkàn tán sọ̀rọ̀"] }
          ],
          sources: [CBK, CBN, BCEAO],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe ìwé ìnáwó àti ìdókòwò oko rẹ. Fún iṣẹ́ oko kan, fi ìnáwó tí kì í yí padà àti èyí tó ń yí padà, ìnáwó lórí ẹyọ kan, àkọsílẹ̀ ìnáwó oṣù kan, ètò ìṣàn owó oṣù 12 pẹ̀lú àmì sí àwọn oṣù àìtó owó, iye owó àti ìkórè break-even, àti àkókò ìdápadà owó àti èrè ọdọọdún ìdókòwò kan sínú rẹ̀, pẹ̀lú ìpinnu rẹ àti ìdí rẹ̀.",
          youCanNow: "ṣàyẹ̀wò bóyá ìdókòwò kan máa dá owó rẹ̀ padà, pẹ̀lú àkókò ìdápadà owó, èrè ọdọọdún àti àyẹ̀wò àwọn ewu.",
          quickCheck: [
            { objective: "O5", q: "Ilé ìtọ́jú tútù kan jẹ́ 200,000, ó sì ń mú èrè àfikún 50,000 wá lọ́dún. Kí ni àkókò ìdápadà owó?", options: ["Ọdún 2", "Ọdún 25", "Ọdún 5", "Ọdún 4"], answer: 3, why: "200,000 / 50,000 = ọdún 4." },
            { objective: "O5", q: "Nǹkan kan máa dá owó rẹ̀ padà ní ọdún 6, ṣùgbọ́n olùtajà sọ pé yóò lò nǹkan bí ọdún 4. Kí ni èyí sọ fún ọ?", options: ["Yóò gbó kí ó tó dá owó rẹ̀ padà, nítorí náà ó ṣeé ṣe kí ó jẹ́ àdánù", "Ìdókòwò tó dára gan-an ni", "Àkókò ìdápadà owó kò ṣe pàtàkì tí nǹkan náà bá jẹ́ tuntun", "O yẹ kí o yá owó púpọ̀ sí i láti ra méjì"], answer: 0, why: "Tí nǹkan náà bá gbó kí ó tó dá owó padà, owó àfikún rẹ̀ kò ní bo iye owó rẹ̀ láéláé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ètò àti ìdókòwò",
        questions: [
          { objective: "O3", q: "Nínú ètò ìṣàn owó, kí ni owó ìbẹ̀rẹ̀ oṣù tó kàn?", options: ["Òdo nígbà gbogbo", "Owó ìparí oṣù yìí", "Owó tó máa wọlé ní oṣù tó kàn", "Èrè ọdún"], answer: 1, why: "Oṣù kọ̀ọ̀kan ń bẹ̀rẹ̀ pẹ̀lú owó tí oṣù tó kọjá fi parí." },
          { objective: "O3", q: "Èwo ni ìgbésẹ̀ tó bọ́gbọ́n mu fún oṣù àìtó owó tí o rí pé ó ń bọ̀?", options: ["Dúró kí o sì retí", "Ta gbogbo ìkórè ní ọjọ́ àkọ́kọ́", "Sún ríra nǹkan síwájú sí oṣù míì tàbí fi owó pamọ́ láti ìkórè fún un", "Gba gbèsè èyíkéyìí tí wọ́n fi lọ̀ ọ́ nínú text"], answer: 2, why: "Sísún ìnáwó síwájú tàbí fífi owó pamọ́ ṣáájú ń dí àlàfo náà láìsí gbèsè tó léwu." },
          { objective: "O4", q: "Àpapọ̀ ìnáwó 300,000; olùrà ń san 6,000 lórí àpò kan. Kí ni ìkórè break-even?", options: ["Àpò 50", "Àpò 60", "Àpò 5", "Àpò 1,800"], answer: 0, why: "300,000 / 6,000 = àpò 50." },
          { objective: "O5", q: "Èrè àfikún 30,000 lọ́dún lórí ìdókòwò 150,000. Kí ni èrè ọdọọdún?", options: ["5%", "50%", "30%", "20%"], answer: 3, why: "30,000 / 150,000 x 100 = 20% lọ́dún." },
          { objective: "O5", q: "Báwo ni o ṣe ń ṣírò èrè àfikún fún ẹ̀rọ fífa omi oníná oòrùn tuntun?", options: ["Ka owó àfikún nìkan", "Yọ iye owó ẹ̀rọ náà kúrò nínú ìkórè kan", "Owó àfikún tí ó mú wọlé yọ ìnáwó àfikún láti máa lò ó", "Ní kí olùtajà sọ èrè náà fún ọ"], answer: 2, why: "Ìnáwó láti máa lò ó, bí àtúnṣe àti òṣìṣẹ́, ń dín ohun tí ẹ̀rọ náà ń mówó wá gan-an kù." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìṣirò Owó Oko àti Ìṣàkóso Ìdókòwò",
    questions: [
      { objective: "O1", q: "Ìnáwó wo ló ń yí padà pẹ̀lú iye tí o ń ṣe?", options: ["Ìnáwó tó ń yí padà, bí oúnjẹ ẹran", "Ìnáwó tí kì í yí padà, bí owó ìyálò ilẹ̀", "Depreciation ilé ẹran", "Ìwé àṣẹ omi"], answer: 0, why: "Ìnáwó tó ń yí padà ń gòkè, ó sì ń sọ̀kalẹ̀ pẹ̀lú iye tí a ń ṣe." },
      { objective: "O1", q: "Ọgbà kan jẹ́ 40,000, yóò lò ọdún 8, yóò sì jẹ́ 0 ní ìparí. Kí ni depreciation rẹ̀ lọ́dọọdún?", options: ["8,000", "320,000", "40,000", "5,000"], answer: 3, why: "(40,000 - 0) / 8 = 5,000 lọ́dún." },
      { objective: "O1", q: "Kí ló dé tí a fi ń ka iṣẹ́ ẹbí ní iye owó òṣìṣẹ́ ojúmọ́ ní agbègbè?", options: ["Nítorí ọ́fíìsì owó orí ń béèrè rẹ̀", "Kí o lè rí iye gidi tí ó ń ná ọ láti ṣe ẹyọ kọ̀ọ̀kan", "Kí oko náà lè dà bí ẹni pé ó tòṣì jù", "Kò pọn dandan"], answer: 1, why: "Àkókò ẹbí rẹ níye lórí; fífi í sílẹ̀ ń bo ìnáwó gidi mọ́lẹ̀." },
      { objective: "O1", q: "Àpapọ̀ ìnáwó adágún ẹja tilapia kan jẹ́ 60,000, o sì kórè 300 kg. Kí ni ìnáwó lórí kìlógíráàmù kan?", options: ["300", "2,000", "200", "20"], answer: 2, why: "60,000 / 300 kg = 200 lórí kìlógíráàmù kan." },
      { objective: "O1", q: "Iye owó ohun èlò oko gòkè ṣùgbọ́n ìkórè rẹ kò yí padà. Ìnáwó rẹ lórí ẹyọ kan:", options: ["Ó gòkè", "Ó dín kù", "Kò yí padà", "A kò lè ṣírò rẹ̀"], answer: 0, why: "Àpapọ̀ ìnáwó tó pọ̀ sí i tí a pín sí iye ẹyọ kan náà ń mú kí ìnáwó lórí ẹyọ kan ga sí i." },
      { objective: "O2", q: "Àwọn ọ̀wọ̀n wo ló ń ṣe ìwé àkọsílẹ̀ ìnáwó tó wúlò?", options: ["Iye owó nìkan", "Ohun tí o rà àti àwọ̀ rẹ̀", "Orúkọ olùrà àti iye owó", "Ọjọ́, ohun tí o rà, ẹ̀ka, iṣẹ́ oko, F tàbí V, iye owó, bí o ṣe san án, ìwé ẹ̀rí"], answer: 3, why: "Àwọn ọ̀wọ̀n wọ̀nyí ń jẹ́ kí o ṣírò àròpọ̀ ìnáwó ní ẹ̀ka-ẹ̀ka àti ní iṣẹ́ oko kọ̀ọ̀kan, kí o sì ṣàyẹ̀wò wọn." },
      { objective: "O2", q: "Ìgbà mélòó ni o yẹ kí o fi ìwé àkọsílẹ̀ rẹ wé ìwé ìṣirò owó orí fóònù rẹ?", options: ["Ẹ̀ẹ̀kan lọ́dún", "Ní ọ̀sẹ̀ kọ̀ọ̀kan", "Kò sí ìgbà kankan", "Nígbà tí ayánilówó bá béèrè nìkan"], answer: 1, why: "Àyẹ̀wò ọ̀sẹ̀-ọ̀sẹ̀ ń rí àwọn ìnáwó tó sọnù nígbà tí o ṣì rántí wọn." },
      { objective: "O2", q: "Fọ́múlà spreadsheet wo ló lè ṣírò àròpọ̀ gbogbo ìnáwó inú ẹ̀ka kan?", options: ["SUMIF", "LEN", "TODAY", "UPPER"], answer: 0, why: "SUMIF ń ṣírò àròpọ̀ àwọn iye tó bá ìlànà kan mu, bí ẹ̀ka \"oúnjẹ ẹran\"." },
      { objective: "O3", q: "Báwo la ṣe ń ṣírò owó ìparí?", options: ["Owó tó wọlé - owó tó jáde nìkan", "Owó ìbẹ̀rẹ̀ x owó tó wọlé", "Owó ìbẹ̀rẹ̀ + owó tó wọlé - owó tó jáde", "Owó tó jáde - owó ìbẹ̀rẹ̀"], answer: 2, why: "O máa bẹ̀rẹ̀ pẹ̀lú owó ìbẹ̀rẹ̀, fi owó tó wọlé kún un, kí o sì yọ owó tó jáde kúrò." },
      { objective: "O3", q: "Ìbẹ̀rẹ̀ 4,000, wọlé 0, jáde 5,000. Kí ni owó ìparí sọ fún ọ?", options: ["O ní 9,000", "O máa ní àìtó owó 1,000", "O ní 1,000 tó ṣẹ́kù", "Kò sọ nǹkan tó wúlò"], answer: 1, why: "4,000 + 0 - 5,000 = -1,000, àìtó owó ni." },
      { objective: "O3", q: "Kí ló ń ṣèrànwọ́ jù fún oṣù àìtó owó ṣáájú ìkórè?", options: ["Fífojú fò ó títí yóò fi dé", "Níná owó púpọ̀ sí i ní oṣù tó ṣáájú", "Yíyá owó lọ́wọ́ ayánilówó tí o kò ṣàyẹ̀wò", "Iṣẹ́ oko kékeré tó ń mówó wá ní oṣù yẹn, bí ẹyin tàbí ẹ̀fọ́"], answer: 3, why: "Owó tó ń wọlé ní oṣù ìyàn ń dí àlàfo náà láìsí gbèsè tó léwu." },
      { objective: "O3", q: "Kí ló dé tí a fi ń ṣe àtúnṣe ètò ìṣàn owó lóṣooṣù?", options: ["Kí ó lè bá ohun tó ṣẹlẹ̀ gan-an mu, kí o sì lè rí àwọn oṣù tó ń bọ̀ dáadáa", "Nítorí báńkì ń yí i padà", "Kí àwọn nọ́mbà lè dà bí ẹni pé wọ́n pọ̀ sí i", "O kò gbọdọ̀ ṣe àtúnṣe rẹ̀"], answer: 0, why: "Ètò tó ń tẹ̀lé ohun tó ń ṣẹlẹ̀ gan-an ń kìlọ̀ fún ọ ní kùtùkùtù nípa àlàfo tuntun." },
      { objective: "O4", q: "Iye owó break-even ni:", options: ["Àpapọ̀ ìnáwó / ìkórè tí a retí", "Ìkórè tí a retí / àpapọ̀ ìnáwó", "Iye owó x ìkórè", "Owó tó wọlé - àpapọ̀ ìnáwó"], answer: 0, why: "Pípín àpapọ̀ ìnáwó sí iye ẹyọ tí o retí ń fún ọ ní iye owó tó kéré jù tó bo ìnáwó." },
      { objective: "O4", q: "Àpapọ̀ ìnáwó 200,000; ìkórè tí a retí àpò 50. Olùrà kan fi 3,500 lórí àpò kan lọ̀ ọ́. Ṣé o yẹ kí o gbà á tí a bá wo ìnáwó?", options: ["Bẹ́ẹ̀ ni, 3,500 bo ìnáwó náà", "Bẹ́ẹ̀ ni, ìfilọ̀ èyíkéyìí dára", "Rárá, iye owó break-even jẹ́ 4,000 lórí àpò kan", "A kò lè mọ̀"], answer: 2, why: "200,000 / 50 = 4,000 lórí àpò kan, nítorí náà 3,500 máa pàdánù 500 lórí àpò kan." },
      { objective: "O4", q: "Ìkórè break-even ń sọ fún ọ:", options: ["Iye owó tó dára jù tí o lè rí", "Ìkórè tó kéré jù tó bo ìnáwó rẹ ní iye owó kan", "Iye ajílẹ̀ tí o máa lò", "Èrè rẹ lọ́dọọdún"], answer: 1, why: "Àpapọ̀ ìnáwó pín sí iye owó ni: ìkórè tí o nílò kí o má bàa pàdánù." },
      { objective: "O4", q: "Iye owó tí a retí 30,000 lórí àpò kan, iye owó break-even 25,000 lórí àpò kan. Àlàfo ààbò rẹ ni:", options: ["55,000 lórí àpò kan", "25,000 lórí àpò kan", "30,000 lórí àpò kan", "5,000 lórí àpò kan"], answer: 3, why: "30,000 - 25,000 = 5,000 lórí àpò kan kí o tó bẹ̀rẹ̀ sí í pàdánù." },
      { objective: "O5", q: "Àkókò ìdápadà owó ni:", options: ["Iye owó ìdókòwò / èrè àfikún lọ́dọọdún", "Èrè àfikún / iye owó x 100", "Èlé gbèsè x iye ọdún", "Iye owó - owó tó wọlé lọ́dún"], answer: 0, why: "Ó ń fi iye ọdún èrè àfikún tí yóò dá iye owó náà padà hàn." },
      { objective: "O5", q: "Màálù ọlọ́mú mẹ́ta sí i jẹ́ 450,000, wọ́n sì ń mú èrè àfikún 150,000 wá lọ́dún. Kí ni èrè ọdọọdún?", options: ["3%", "15%", "33%", "300%"], answer: 2, why: "150,000 / 450,000 x 100 = nǹkan bí 33% lọ́dún." },
      { objective: "O5", q: "O máa yá owó láti kọ́ ilé ọ̀gbìn. Àyẹ̀wò wo ló ṣe pàtàkì jù?", options: ["Àwọ̀ ilé ọ̀gbìn náà", "Bóyá iye tí gbèsè náà ń ná lọ́dún kéré ju èrè lọ, àti bóyá ìsanpadà bá ìṣàn owó rẹ mu", "Bóyá àwọn aládùúgbò ní ọ̀kan", "Kò sí nǹkan, tí olùtajà bá jẹ́ onínúure"], answer: 1, why: "Gbèsè tó ń ná ju èrè lọ, tàbí tí o kò lè san padà lásìkò, ń sọ ìdókòwò di àdánù." },
      { objective: "O5", q: "Olùtajà kan ṣèlérí pé ẹ̀rọ fífa omi kan máa sọ owó tó ń wọlé fún ọ di ìlọ́po méjì. Kí ni o máa ṣe?", options: ["Rà á lẹ́sẹ̀kẹsẹ̀", "Lo nọ́mbà olùtajà gẹ́gẹ́ bí ìṣirò rẹ", "San owó ìdógò kí o tó béèrè ohunkóhun", "Lo nọ́mbà tí kò ga jù, bá àwọn àgbẹ̀ tó ń lò ó sọ̀rọ̀, kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o fọkàn tán"], answer: 3, why: "Nọ́mbà tí kò ga jù àti ìrírí àwọn tó ń lò ó gan-an ń dáàbò bò ọ́ lọ́wọ́ ọ̀rọ̀ ìpolówó tó ga jù." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 5, 8, 9, 12, 13, 16, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe nínú ìwé náà kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      { name: "Pípín ìnáwó àti ìnáwó lórí ẹyọ kan", objective: "O1", notYet: "Àwọn ìnáwó kan sọnù tàbí wọ́n dàrú, tàbí ìnáwó lórí ẹyọ kan kò tọ̀nà tàbí kò sí.", meets: "A sàmì sí gbogbo ìnáwó bí èyí tí kì í yí padà tàbí èyí tó ń yí padà, depreciation wà nínú rẹ̀, ìnáwó lórí ẹyọ kan sì tọ̀nà.", exceeds: "A pín ìnáwó tí kì í yí padà lọ́nà tó tọ́ láàárín àwọn iṣẹ́ oko, a sì ka iṣẹ́ ẹbí ní iye owó òṣìṣẹ́ ojúmọ́ ní agbègbè." },
      { name: "Ìwé àkọsílẹ̀ ìnáwó", objective: "O2", notYet: "Kò tó ìdajì àwọn ọjọ́ tí a kọ sílẹ̀, tàbí kò sí àròpọ̀ ẹ̀ka.", meets: "Ìnáwó oṣù kan pẹ̀lú gbogbo ọ̀wọ̀n, tí a ṣírò àròpọ̀ rẹ̀ ní ẹ̀ka-ẹ̀ka àti ní iṣẹ́ oko kọ̀ọ̀kan, tó sì bá owó ọwọ́ àti owó orí fóònù mu.", exceeds: "Ó tún dárúkọ ẹ̀ka tó tóbi jù àti ọ̀nà kan tó ṣeé ṣe láti dín in kù." },
      { name: "Ètò ìṣàn owó", objective: "O3", notYet: "Àwọn oṣù kan kò sí, tàbí a kò gbé owó ìparí lọ sí oṣù tó kàn.", meets: "Oṣù méjìlá pẹ̀lú owó ìbẹ̀rẹ̀ àti owó ìparí tó tọ̀nà, àyíká yí àwọn oṣù àìtó owó ká, àti ìgbésẹ̀ kan fún ọ̀kọ̀ọ̀kan.", exceeds: "Àwọn ìgbésẹ̀ ní ọjọ́ àti iye owó, a sì ti ṣe àtúnṣe ètò náà pẹ̀lú oṣù gidi kan." },
      { name: "Break-even", objective: "O4", notYet: "Iye owó break-even tàbí ìkórè break-even kò sí tàbí kò tọ̀nà.", meets: "Iye owó àti ìkórè break-even tọ̀nà, a sì fi wọ́n wé iye owó àti ìkórè tí a retí.", exceeds: "Ó tún fi àlàfo ààbò hàn àti ohun tó máa ṣẹlẹ̀ tí ìkórè bá fi 20% dín kù." },
      { name: "Ìpinnu ìdókòwò", objective: "O5", notYet: "Kò sí àkókò ìdápadà owó tàbí èrè, tàbí ìpinnu náà kò ní ìdí.", meets: "Àkókò ìdápadà owó àti èrè ọdọọdún tọ̀nà, ìpinnu náà sì dárúkọ ó kéré tán ewu méjì tí a ṣàyẹ̀wò.", exceeds: "Ó ní ìṣẹ̀lẹ̀ tó burú ní 20%, ọjọ́ ayé nǹkan náà àti iye owó gbèsè èyíkéyìí, pẹ̀lú ìdáhùn tó ṣe kedere: bẹ́ẹ̀ ni, rárá tàbí dúró ná." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ìwé ìnáwó àti ìdókòwò",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì ń kọ ìwé àkọsílẹ̀ ìnáwó lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn kọ iye owó tó kéré sí iye owó break-even àwọn, tàbí pé àwọn yí ọ̀nà ìtajà kan padà nítorí rẹ̀",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn sún ìpinnu ìdókòwò kan síwájú, yí i padà tàbí ṣe é nípa lílo àkókò ìdápadà owó àti èrè ọdọọdún",
      "Àwọn ẹgbẹ́ alájọṣe tàbí ayánilówó tí a ń bá ṣiṣẹ́ ń ròyìn pé àwọn ọmọ ẹgbẹ́ púpọ̀ sí i ń mú nọ́mbà ìnáwó àti ìṣàn owó wá sí ìjíròrò gbèsè tàbí àdéhùn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀ àti gègé, tàbí fóònù pẹ̀lú app spreadsheet ọ̀fẹ́ (Google Sheets tàbí Microsoft Excel)",
      "Ẹ̀rọ ìṣirò fóònù",
      "Ìnáwó, ìwé ẹ̀rí ìsanwó àti ìwé ìṣirò owó orí fóònù akẹ́kọ̀ọ́ fúnra rẹ̀ fún iṣẹ́ oko kan, tàbí àwọn nọ́mbà àpẹẹrẹ inú ẹ̀kọ́ náà",
      "Nǹkan bí ìṣẹ́jú 75 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú oṣù kan àkọsílẹ̀ ìnáwó fún iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́ àgbẹ̀ tàbí ìpàdé ìtọ́sọ́nà àgbẹ̀: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan, kí ẹ sì ṣe àwọn iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" ní méjì-méjì.",
      "Mú ìṣirò ìnáwó iṣẹ́ oko gidi tàbí ti àpẹẹrẹ wá kí àwọn akẹ́kọ̀ọ́ tí kò ní àkọsílẹ̀ lè ṣe àṣeṣe; rí i dájú pé gbogbo ènìyàn ṣàyẹ̀wò ìṣirò náà lórí ẹ̀rọ ìṣirò.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé àpẹẹrẹ ni gbogbo nọ́mbà inú ẹ̀kọ́ náà; ní kí wọ́n lo iye owó láti ọjà àti àwọn olùtajà tiwọn.",
      "Má ṣe dámọ̀ràn ẹ̀rọ, ayánilówó tàbí olùtajà kan pàtó; ní kí àwọn akẹ́kọ̀ọ́ fi àwọn ìfilọ̀ wé ara wọn kí wọ́n sì bá olùdámọ̀ràn tí wọ́n fọkàn tán sọ̀rọ̀.",
      "Ní kí àwọn akẹ́kọ̀ọ́ bẹ̀rẹ̀ ìwé àkọsílẹ̀ ìnáwó lẹ́yìn Ẹ̀kọ́ 3 kí wọ́n lè ní oṣù kan pé fún iṣẹ́ ìkẹyìn; fi rubric ṣe àmì fún ìwé náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
