"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-farm-finance.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const VSLA = { name: "VSL Associates: ọ̀nà VSLA (ìpín, owó àyáwó, owó àjọṣe, ìyípo ọdún kan, pínpín owó)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya: àkọsílẹ̀ àwọn SACCO tó ń gba owó ìfipamọ́ tí wọ́n ní ìwé àṣẹ", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: òfin fún àwọn ilé-iṣẹ́ microfinance (systemes financiers decentralises) ní àwọn orílẹ̀-èdè XOF", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Central Bank of Nigeria, Báńkì Àpapọ̀ Nàìjíríà: àwọn báńkì microfinance", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const NIRSAL = { name: "NIRSAL Plc, Nàìjíríà: àkópọ̀ (ìdúró fún ewu gbèsè nínú yíyá owó fún iṣẹ́ àgbẹ̀)", url: "https://nirsal.com/who-we-are/overview/" };
const GIRSAL = { name: "Graphic Online, Ghana: GIRSAL dá àwọn ilé-iṣẹ́ owó tó ń yá àgbẹ̀ lówó lọ́lá", url: "https://www.graphic.com.gh/news/general-news/increasing-lending-support-for-agriculture-sector-girsal-honours-11-financial-institutions-individuals.html" };
const WRSC = { name: "Warehouse Receipt System Council, Kenya (ilé ìkẹ́rùsí tí a fọwọ́ sí àti ìwé ẹ̀rí ilé ìkẹ́rùsí)", url: "https://www.wrsc.go.ke" };
const GCX_EWR = { name: "MyJoyOnline (31 October 2019): GCX àti ARB Apex Bank bẹ̀rẹ̀ owó àyáwó lórí ìwé ẹ̀rí ilé ìkẹ́rùsí ẹ̀rọ ayélujára", url: "https://www.myjoyonline.com/gcx-arb-apex-bank-launch-gha%C2%A250m-support-for-ghanaian-smallholder-farmers/" };
const GCX_ADEHYEMAN = { name: "Ghana News Agency (June 2023): Adehyeman Savings and Loans àti Ghana Commodity Exchange darapọ̀ láti ran àwọn àgbẹ̀ lọ́wọ́", url: "https://gna.org.gh/2023/06/adehyeman-ghana-commodity-exchange-partner-to-support-farmers/" };
const OAF = { name: "One Acre Fund: nípa wa (owó àyáwó, ohun èlò oko àti ìdánilẹ́kọ̀ọ́; àwọn orílẹ̀-èdè)", url: "https://oneacrefund.org/about-us" };
const ENABLE = { name: "IITA: Sudan bẹ̀rẹ̀ ENABLE Youth Program (ètò African Development Bank fún àwọn ọ̀dọ́ oníṣòwò àgbẹ̀)", url: "https://iita.org/news-item/sudan-launches-enable-youth-program/" };
const YEDF = { name: "Youth Enterprise Development Fund, Kenya (owó àyáwó fún òwò àwọn ọ̀dọ́, pẹ̀lú Agri-Biz loan)", url: "https://www.youthfund.go.ke" };
const DERFJ = { name: "DER/FJ, Senegal: Delegation generale a l'Entrepreneuriat rapide des Femmes et des Jeunes", url: "https://der.sn" };
const FCCPC = { name: "FCCPC, Nàìjíríà: ipò ìforúkọsílẹ̀ àwọn ayánilówó ẹ̀rọ ayélujára (app àyáwó tí a fọwọ́ sí)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const CBK_DCP = { name: "Central Bank of Kenya, Báńkì Àpapọ̀ Kenya: àbójútó báńkì, pẹ̀lú àkọsílẹ̀ àwọn olùpèsè gbèsè ẹ̀rọ ayélujára tó ní ìwé àṣẹ", url: "https://www.centralbank.go.ke/bank-supervision/" };

module.exports = {
  id: "agri-farm-finance-yo",
  lang: "yo",
  translationOf: "agri-farm-finance",
  category: "Agriculture (Africa)",
  name: "Wíwá Owó fún Oko Rẹ: Owó Àyáwó, Owó Ẹ̀bùn àti Olùdókòwò",
  skills: "Ṣíṣírò iye owó tí o nílò, Lílo ẹgbẹ́ ìfowópamọ́, VSLA àti SACCO, Fífi owó àyáwó oko àti ètò ìsanpadà wé ara wọn, Lílo ìwé ẹ̀rí ilé ìkẹ́rùsí àti ohun èlò oko lórí àwìn, Wíwá owó ẹ̀bùn gidi àti yíyẹra fún jìbìtì, Kíkọ ìbéèrè owó ojú-ewé kan",
  outcome: "ṣírò iye owó gan-an tí oko rẹ nílò àti ìgbà tí o nílò rẹ̀, fi ẹgbẹ́ ìfowópamọ́, SACCO, owó àyáwó, ìwé ẹ̀rí ilé ìkẹ́rùsí, ohun èlò oko lórí àwìn àti owó ẹ̀bùn wé ara wọn, dá jìbìtì owó àyáwó tàbí owó ẹ̀bùn mọ̀, kí o sì kọ ìbéèrè owó ojú-ewé kan tí ayánilówó, ètò ìrànlọ́wọ́ tàbí olùdókòwò lè gbà.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tó ń dàgbà, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn ẹgbẹ́ obìnrin àti ọ̀dọ́, àwọn olórí ẹgbẹ́ alájọṣe àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nàìjíríà, Ghana, Senegal, Cote d'Ivoire àti káàkiri Áfíríkà, tí wọ́n nílò owó láti bẹ̀rẹ̀, láti máa bá a lọ tàbí láti dàgbà.",
    "Orí 1 dá lórí owó tó sún mọ́ ọ jù: ṣíṣírò iye tí o nílò àti ohun tí o fẹ́ fi ṣe, ẹgbẹ́ ìfowópamọ́, VSLA àti SACCO, àti owó àyáwó microfinance àti ti báńkì fún iṣẹ́ àgbẹ̀. Orí 2 dá lórí àwọn ọ̀nà míì: owó àyáwó lórí ìwé ẹ̀rí ilé ìkẹ́rùsí àti ohun èlò oko lórí àwìn láti ọ̀dọ̀ olùrà àti ètò àdéhùn, owó ẹ̀bùn àti ètò àwọn ọ̀dọ́ àti bí o ṣe lè yẹra fún jìbìtì, àti kíkọ ìbéèrè owó ojú-ewé kan. Ó kọ́ lé \"Agribusiness and Farm Management\" (Iṣẹ́ Àgbẹ̀ Bí Òwò àti Ìṣàkóso Oko), tí ó fi bí a ṣe ń ṣírò iye owó gbèsè lápapọ̀ hàn.",
    "Gbogbo àpẹẹrẹ owó jẹ́ nọ́mbà àròsọ; èlé, owó iṣẹ́ àti àwọn ètò ìrànlọ́wọ́ máa ń yí padà, nítorí náà ṣàyẹ̀wò ìfilọ̀ ti ìsinsìnyí. Ẹ̀kọ́ yìí ṣàlàyé bí irú owó kọ̀ọ̀kan ṣe ń ṣiṣẹ́ àti ewu rẹ̀. Kò fúnni ní ìmọ̀ràn yíyá owó tàbí ìdókòwò. Yá iye tí ètò rẹ nílò nìkan, ka gbogbo àdéhùn tán, rí i dájú pé ayánilówó náà ní ìwé àṣẹ, kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o fọkàn tán, bí ẹgbẹ́ alájọṣe rẹ, SACCO, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí agbẹjọ́rò, kí o tó fọwọ́ sí i."
  ],
  finalTask: "Kọ ìbéèrè owó ojú-ewé kan fún oko rẹ (tàbí oko àpẹẹrẹ kan): ta ni ọ́ àti oko rẹ; ohun tí owó náà wà fún gan-an, iye rẹ̀ lápapọ̀, iye tí o fi sí i fúnra rẹ àti àlàfo tí o ń béèrè; bí owó náà ṣe máa mú èrè wá (iye owó lórí ẹyọ kan, èrè àkọ́kọ́ tàbí ìgbà tí owó máa padà); irú owó tí o ń béèrè àti ìdí tí ó fi bá ọ mu; ètò ìsanpadà tí ó bá ìgbà tí owó rẹ ń wọlé mu; ohun ìdúró tàbí onídùúró rẹ; àwọn ewu pàtàkì rẹ àti bí o ṣe ń ṣàkóso wọn; àti àkọsílẹ̀ rẹ tàbí ohun tí o ti ṣe sẹ́yìn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tó ń dàgbà, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn ẹgbẹ́ obìnrin àti ọ̀dọ́, àwọn olórí ẹgbẹ́ alájọṣe àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti Ìwọ̀-Oòrùn Áfíríkà tó ń sọ èdè Faransé, tí wọ́n ń gbin irè oko tàbí sin ẹran àti ẹja, tí wọ́n sì fẹ́ owó láti bẹ̀rẹ̀, láti fẹ̀ sí i tàbí láti la àsìkò oko kọjá.",
    startingPoint: "Ọ̀pọ̀ ti yá owó lọ́wọ́ ẹbí, chama tàbí ẹgbẹ́ ìfowópamọ́ (bí àjọ tàbí èsúsú), ṣọ́ọ̀bù tàbí app àyáwó lórí fóònù. Díẹ̀ ni wọ́n ti kọ ìnáwó sílẹ̀ fún owó àyáwó, tí wọ́n ti fi ìfilọ̀ wé ara wọn nípa iye owó lápapọ̀ àti ọjọ́ ìsanpadà, tí wọ́n ti lo ìwé ẹ̀rí ilé ìkẹ́rùsí tàbí tí wọ́n ti ṣàyẹ̀wò bóyá ayánilówó tàbí ètò kan jẹ́ gidi. Àwọn ìfilọ̀ owó ẹ̀bùn àti owó àyáwó ayédèrú ti dojú kọ àwọn kan.",
    gap: "Àwọn àgbẹ̀ sábà máa ń yá iye tí kò tọ́, ní àkókò tí kò tọ́, lọ́wọ́ ayánilówó tí kò tọ́, pẹ̀lú ìsanpadà tí ó dé ṣáájú ìkórè, tàbí kí wọ́n pàdánù owó sí owó ẹ̀bùn ayédèrú àti app àyáwó tí kò ní ìwé àṣẹ. Mímọ àlàfo owó wọn gidi àti àwọn ọ̀nà tó bá wọn mu ń jẹ́ kí wọ́n yá owó díẹ̀ lọ́nà tó dára jù, kí wọ́n lo ìfowópamọ́ ẹgbẹ́ àti gbèsè tí a so mọ́ ìkórè, kí wọ́n sì gbé ìbéèrè tó yé kalẹ̀ tí àwọn ayánilówó àti ètò ìrànlọ́wọ́ máa kà sí pàtàkì.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ owó",
      "Ẹ̀rọ: fóònù lásán àti ẹ̀rọ ìṣirò; ìwé àkọsílẹ̀ fún ìnáwó àti ìbéèrè",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5 sí 6 tí ó bá iṣẹ́ oko mu",
      "Èlé, owó iṣẹ́ àti ètò máa ń yí padà, wọ́n sì yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn: a kò fúnni ní èlé tàbí ọjọ́ ìparí kankan; akẹ́kọ̀ọ́ máa ṣàyẹ̀wò ìfilọ̀ ti ìsinsìnyí àti àjọ alábòójútó",
      "Kò sí ìmọ̀ràn yíyá owó tàbí ìdókòwò; má ṣe tẹ PIN, ọ̀rọ̀ aṣínà tàbí ìsọfúnni báńkì sínú app tàbí irinṣẹ́ AI fún àṣeṣe láéláé"
    ],
    prerequisites: "Kò sí. \"Agribusiness and Farm Management\" (àkọsílẹ̀, ìṣàn owó, iye owó gbèsè) àti \"Farm Accounting and Investment Management\" (iye owó lórí ẹyọ kan, ìgbà tí owó máa padà) ń ṣèrànwọ́ fún ìṣirò."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní ètò oko pẹ̀lú àwọn ìnáwó rẹ̀", action: "ṣírò iye owó tí o nílò lápapọ̀, iye tí o máa fi sí i fúnra rẹ àti àlàfo owó, pín sí owó iṣẹ́ (working capital) àti ohun èlò, pẹ̀lú oṣù tí o nílò ọ̀kọ̀ọ̀kan", standard: "pẹ̀lú ìṣirò tó tọ́ àti láìdàpọ̀ mọ́ ìnáwó ilé" },
    { id: "O2", condition: "Tí a bá fún ọ ní ẹgbẹ́ ìfowópamọ́, VSLA tàbí SACCO tí o lè darapọ̀ mọ́", action: "ṣàlàyé bí ìfowópamọ́, yíyá owó, onídùúró àti pínpín owó ṣe ń ṣiṣẹ́ nínú rẹ̀ kí o sì kọ àwọn ewu rẹ̀ sílẹ̀", standard: "kí o sì dárúkọ ó kéré tán òfin mẹ́ta tí o máa ṣàyẹ̀wò kí o tó darapọ̀" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìfilọ̀ owó àyáwó méjì", action: "fi iye owó wọn lápapọ̀, ohun ìdúró àti ọjọ́ ìsanpadà wé ara wọn kí o sì yan èyí tí ó bá ìkórè rẹ mu", standard: "pẹ̀lú iye tí o máa san padà lápapọ̀ fún ọ̀kọ̀ọ̀kan àti oṣù ìsanpadà tí o ti fi wé ìṣàn owó rẹ" },
    { id: "O4", condition: "Tí a bá fún ọ ní ìfilọ̀ ìwé ẹ̀rí ilé ìkẹ́rùsí tàbí ohun èlò oko lórí àwìn", action: "kọ iye owó rẹ̀, ohun tí o gbọ́dọ̀ ṣe àti ohun tí ó máa ṣẹlẹ̀ tí iye owó ọjà tàbí ìkórè bá lọ sílẹ̀", standard: "kí o sì dárúkọ ó kéré tán àdéhùn mẹ́rin àti ewu méjì" },
    { id: "O5", condition: "Tí a bá fún ọ ní owó ẹ̀bùn, ètò àwọn ọ̀dọ́ tàbí ìfilọ̀ owó àyáwó", action: "ṣàyẹ̀wò rẹ̀ lórí ojú-òpó wẹ́ẹ̀bù ìjọba tàbí àkọsílẹ̀ àjọ alábòójútó kí o sì dá àwọn àmì ìkìlọ̀ jìbìtì mọ̀", standard: "kí o tó sanwó, fi ìsọfúnni hàn tàbí kọ̀wé béèrè" },
    { id: "O6", condition: "Ní lílo àwọn nọ́mbà oko rẹ fúnra rẹ", action: "kọ ìbéèrè owó ojú-ewé kan tí ayánilówó, ètò ìrànlọ́wọ́ tàbí olùdókòwò lè ṣàyẹ̀wò", standard: "tí ó sọ ohun tí owó wà fún, iye rẹ̀, owó tìrẹ, bí ó ṣe máa mú èrè wá, ìsanpadà, ohun ìdúró àti ewu" }
  ],
  chapters: [
    {
      name: "Orí 1: Ohun tí o nílò àti owó tó sún mọ́ ọ jù",
      lessons: [
        {
          title: "Iye owó tí o nílò, àti ohun tí o fẹ́ fi ṣe",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ṣírò iye owó tí o nílò lápapọ̀, owó tìrẹ àti àlàfo owó, ní oṣù kọ̀ọ̀kan.",
          text: [
            "Kí o tó wá owó, kọ ohun tí o fẹ́ fi ṣe gan-an sílẹ̀. Owó iṣẹ́ (working capital) ń san fún ìyípo iṣẹ́ kan: irúgbìn, ajílẹ̀, oúnjẹ ẹran, ọmọ adìẹ tàbí ọmọ ẹja, owó òṣìṣẹ́, iṣẹ́ dókítà ẹran àti ọkọ̀. Ó máa ń padà nígbà tí o bá tà. Ohun èlò àti ilé (ẹ̀rọ ìfami, ilé ẹran, ilé ìkẹ́rùsí) máa ń pẹ́ fún ọ̀pọ̀ ọdún, owó wọn sì máa ń padà díẹ̀díẹ̀. Àwọn ayánilówó sábà máa ń ṣe wọ́n lọ́nà ọ̀tọ̀, pẹ̀lú gígùn owó àyáwó tó yàtọ̀, nítorí náà kọ wọ́n sílẹ̀ lọ́tọ̀ọ̀tọ̀.",
            "Àpẹẹrẹ (nọ́mbà àròsọ ní naira), adìẹ ẹlẹ́ran (broiler) kan ní Nàìjíríà: ọmọ adìẹ, oúnjẹ, iṣẹ́ dókítà ẹran àti owó òṣìṣẹ́ 1,200,000 (owó iṣẹ́); ohun ìmumi, ohun ìjẹun àti àtúnṣe ilé adìẹ 300,000 (ohun èlò). Lápapọ̀ 1,500,000. O ti fi 500,000 pamọ́. Àlàfo owó = 1,500,000 - 500,000 = 1,000,000. Àlàfo yẹn, kì í ṣe iye lápapọ̀, ni ohun tí o máa béèrè.",
            "Lẹ́yìn náà fi ìnáwó kọ̀ọ̀kan sí oṣù tí o máa nílò rẹ̀, ní lílo ètò ìṣàn owó rẹ, kí o lè béèrè owó nígbà tí o nílò rẹ̀, kí o má sì san èlé lórí owó tí ó jókòó lásán. Fi owó díẹ̀ sílẹ̀ fún ìgbà tí iye owó bá gòkè. Má ṣe da ìnáwó ilé bí owó ilé-ìwé mọ́ ọn: yá owó fún oko nìkan, iye tí oko lè san padà."
          ],
          steps: ["Kọ gbogbo ìnáwó inú ètò rẹ sílẹ̀.", "Sàmì sí ọ̀kọ̀ọ̀kan pé ó jẹ́ owó iṣẹ́ tàbí ohun èlò.", "Ṣe àròpọ̀ wọn fún iye tí o nílò lápapọ̀.", "Yọ owó tí o máa fi sí i fúnra rẹ kúrò.", "Ohun tó kù ni àlàfo owó rẹ.", "Fi ìnáwó kọ̀ọ̀kan sí oṣù tí o nílò rẹ̀, kí o sì fi owó díẹ̀ sílẹ̀ fún ìpamọ́."],
          words: [["Owó iṣẹ́ (working capital)", "owó tí ó ń san fún ìyípo iṣẹ́ kan, tí ó sì máa ń padà nígbà tí o bá tà."], ["Àlàfo owó (funding gap)", "owó tí o ṣì nílò lẹ́yìn owó tìrẹ: iye tí o nílò lápapọ̀ - owó tìrẹ."], ["Owó tìrẹ", "owó tàbí ẹrù tí o fi sínú ètò náà fúnra rẹ."]],
          slides: [
            { title: "Oríṣi ohun tí a nílò méjì", bullets: ["Owó iṣẹ́: ìyípo kan, ó ń padà nígbà tí o bá tà", "Ohun èlò àti ilé: ń pẹ́ fún ọdún, owó ń padà díẹ̀díẹ̀", "Kọ wọ́n sílẹ̀ lọ́tọ̀ọ̀tọ̀"] },
            { title: "Àpẹẹrẹ adìẹ ẹlẹ́ran (NGN, àròsọ)", bullets: ["Owó iṣẹ́ 1,200,000 + ohun èlò 300,000 = 1,500,000", "Owó tìrẹ 500,000", "Àlàfo owó 1,000,000: èyí ni kí o béèrè"] },
            { title: "Àkókò àti ìkóra-ẹni-níjàánu", bullets: ["Fi ìnáwó kọ̀ọ̀kan sí oṣù rẹ̀", "Owó díẹ̀ fún ìgbà tí iye owó bá gòkè", "Kò sí ìnáwó ilé nínú owó àyáwó oko"] }
          ],
          tryIt: "Fún ètò kan lórí oko rẹ, kọ gbogbo ìnáwó sílẹ̀, sàmì sí wọn pé owó iṣẹ́ ni tàbí ohun èlò, ṣe àròpọ̀ wọn, yọ owó tìrẹ kúrò, kí o sì kọ àlàfo owó àti oṣù tí o nílò apá kọ̀ọ̀kan.",
          youCanNow: "ṣírò iye owó gan-an tí ètò oko rẹ nílò, ohun tí ó wà fún àti ìgbà tí o nílò rẹ̀, àti àlàfo tí o ní láti wá owó fún.",
          quickCheck: [
            { objective: "O1", q: "Ètò kan ná 800,000, o sì ní 300,000 tìrẹ. Èló ni àlàfo owó?", options: ["1,100,000", "800,000", "500,000", "300,000"], answer: 2, why: "800,000 - 300,000 = 500,000." },
            { objective: "O1", q: "Èwo ni owó iṣẹ́ fún adágún ẹja?", options: ["Ọmọ ẹja àti oúnjẹ fún ìyípo kan", "Gbígbẹ́ adágún", "Ẹ̀rọ ìfami", "Ọgbà ààbò"], answer: 0, why: "Ọmọ ẹja àti oúnjẹ ni a ń lò tán nínú ìyípo kan, owó wọn sì ń padà nígbà tí a bá ta ẹja." }
          ]
        },
        {
          title: "Ẹgbẹ́ ìfowópamọ́, VSLA àti SACCO",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣàlàyé bí VSLA àti SACCO ṣe ń ṣiṣẹ́, kí o sì kọ àwọn òfin tí o máa ṣàyẹ̀wò kí o tó darapọ̀ sílẹ̀.",
          text: [
            "Ẹgbẹ́ ìfowópamọ́ àti àyáwó abúlé (VSLA) jẹ́ ẹgbẹ́ kan, tí ó sábà máa ń ní ọmọ ẹgbẹ́ 10 sí 25, tí wọ́n ń pàdé lọ́sẹ̀ọ̀sẹ̀. Ní ìpàdé kọ̀ọ̀kan, ọmọ ẹgbẹ́ máa ń ra ìpín 1 sí 5 ní iye owó ìpín tí ẹgbẹ́ fi lélẹ̀ fún ọdún náà. Owó ìfipamọ́ ń lọ sínú owó àyáwó ẹgbẹ́. Ọmọ ẹgbẹ́ sábà máa ń lè yá tó ìlọ́po mẹ́ta owó ìfipamọ́ wọn fún tó oṣù mẹ́ta, wọ́n á sì san owó iṣẹ́ tí ẹgbẹ́ fi lélẹ̀. Ọ̀pọ̀ ẹgbẹ́ tún máa ń ní owó àjọṣe kékeré fún pàjáwìrì. Lẹ́yìn nǹkan bí ọdún kan, a máa san gbogbo owó àyáwó padà, a sì máa pín owó náà, pẹ̀lú owó iṣẹ́, gẹ́gẹ́ bí iye tí ọmọ ẹgbẹ́ kọ̀ọ̀kan fi pamọ́.",
            "SACCO (ẹgbẹ́ alájọṣe ìfowópamọ́ àti àyáwó; ní Ìwọ̀-Oòrùn Áfíríkà tó ń sọ Faransé, mutuelle tàbí caisse) jẹ́ ẹgbẹ́ alájọṣe owó tí àwọn ọmọ ẹgbẹ́ ni, tí ó sábà máa ń tóbi jù, tí ó sì ní ìlànà jù. O máa ń fowó pamọ́ déédéé, owó àyáwó sì sábà máa ń so mọ́ iye tí o ti fi pamọ́, ó sì nílò onídùúró: àwọn ọmọ ẹgbẹ́ tí wọ́n ṣèlérí láti san án padà tí o kò bá san. Ní Kenya, SASRA ló ń fún àwọn SACCO tó ń gba owó ìfipamọ́ ní ìwé àṣẹ, ó sì ń tẹ àkọsílẹ̀ wọn jáde. Ní àwọn orílẹ̀-èdè CFA franc, àwọn ilé-iṣẹ́ microfinance àti ẹgbẹ́ àyáwó ń tẹ̀lé òfin BCEAO.",
            "Kí o tó darapọ̀, ṣàyẹ̀wò: ìwé òfin tàbí ìlànà ẹgbẹ́ tí a kọ sílẹ̀, iye owó ìpín tàbí iye ìfowópamọ́, òfin àyáwó àti owó iṣẹ́, bí a ṣe ń pa owó mọ́ láìléwu (àpótí owó tí ó ní àgádágodo tàbí àkáǹtì tó ní ìwé àṣẹ), bí a ṣe ń kọ àkọsílẹ̀ tí a sì ń kà á sókè, àti ohun tí jíjẹ́ onídùúró túmọ̀ sí. Tí o bá dúró fún owó àyáwó ọ̀rẹ́ rẹ tí kò sì san án, o lè ní láti san án."
          ],
          steps: ["Béèrè láti rí òfin ẹgbẹ́ tí a kọ sílẹ̀.", "Ṣàyẹ̀wò iye owó ìpín tàbí iye ìfowópamọ́ àti ọjọ́ ìpàdé.", "Ṣàyẹ̀wò iye owó àyáwó, gígùn rẹ̀ àti owó iṣẹ́.", "Ṣàyẹ̀wò bí a ṣe ń pa owó àti àkọsílẹ̀ mọ́ láìléwu.", "Béèrè ohun tí jíjẹ́ onídùúró túmọ̀ sí fún ọ.", "Fún SACCO, ṣàyẹ̀wò pé ó ti forúkọ sílẹ̀ tàbí ó ní ìwé àṣẹ."],
          words: [["VSLA", "ẹgbẹ́ ìfowópamọ́ àti àyáwó abúlé: ẹgbẹ́ tí ó ń fowó pamọ́ lọ́sẹ̀ọ̀sẹ̀, tí ó ń yá ọmọ ẹgbẹ́ lówó, tí ó sì ń pín owó ní ìparí ìyípo."], ["Pínpín owó (share-out)", "ọjọ́ tí ẹgbẹ́ ń san gbogbo owó ìfipamọ́ àti èrè fún ọmọ ẹgbẹ́ gẹ́gẹ́ bí iye tí wọ́n fi pamọ́."], ["SACCO", "ẹgbẹ́ alájọṣe ìfowópamọ́ àti àyáwó: ẹgbẹ́ tí àwọn ọmọ ẹgbẹ́ ni, tí ó ń gba owó ìfipamọ́, tí ó sì ń yáni lówó."], ["Onídùúró (guarantor)", "ẹni tí ó ṣèlérí láti san owó àyáwó padà tí ẹni tó yá a kò bá san."]],
          slides: [
            { title: "VSLA: bí ó ṣe ń ṣiṣẹ́", bullets: ["Ọmọ ẹgbẹ́ 10-25 ń pàdé lọ́sẹ̀ọ̀sẹ̀; wọ́n ń ra ìpín 1-5", "Yá tó ìlọ́po 3 owó ìfipamọ́ fún tó oṣù 3", "Pínpín owó lẹ́yìn nǹkan bí ọdún kan"] },
            { title: "SACCO", bullets: ["Ẹgbẹ́ alájọṣe ìfowópamọ́ àti àyáwó tí ọmọ ẹgbẹ́ ni", "Owó àyáwó so mọ́ ìfowópamọ́; onídùúró", "Kenya: ṣàyẹ̀wò àkọsílẹ̀ SASRA"] },
            { title: "Ṣàyẹ̀wò kí o tó darapọ̀", bullets: ["Òfin tí a kọ sílẹ̀; iye ìfowópamọ́", "Iye owó àyáwó, gígùn rẹ̀, owó iṣẹ́", "Owó àti àkọsílẹ̀ tó wà láìléwu; iṣẹ́ onídùúró"] }
          ],
          sources: [VSLA, SASRA, BCEAO_SFD],
          tryIt: "Béèrè òfin lọ́wọ́ ẹgbẹ́ ìfowópamọ́, VSLA tàbí SACCO kan nítòsí rẹ (tàbí lo àpẹẹrẹ). Kọ iye ìfowópamọ́, iye owó àyáwó, gígùn rẹ̀, owó iṣẹ́, bí a ṣe ń pa owó mọ́ láìléwu, àti ohun tí onídùúró gbọ́dọ̀ ṣe.",
          youCanNow: "ṣàlàyé bí ẹgbẹ́ ìfowópamọ́, VSLA àti SACCO ṣe ń ṣiṣẹ́, kí o sì ṣàyẹ̀wò òfin wọn kí o tó darapọ̀ tàbí dúró fún owó àyáwó ẹnìkan.",
          quickCheck: [
            { objective: "O2", q: "Nínú VSLA, báwo ni a ṣe ń pín owó ní ìparí ìyípo?", options: ["Bákan náà fún gbogbo ènìyàn, láìka iye tí wọ́n fi pamọ́ sí", "Fún alága", "Fún ẹni tó yá owó jù", "Gẹ́gẹ́ bí iye tí ọmọ ẹgbẹ́ kọ̀ọ̀kan fi pamọ́"], answer: 3, why: "Àwọn ọmọ ẹgbẹ́ tí wọ́n ra ìpín púpọ̀ jù máa ń gba ìpín tó pọ̀ jù nínú owó lápapọ̀." },
            { objective: "O2", q: "O dúró fún owó àyáwó SACCO ọ̀rẹ́ rẹ, ó sì dẹ́kun sísan án. Kí ló lè ṣẹlẹ̀?", options: ["Kò sí nǹkan; ìdúró jẹ́ ìlànà lásán", "O lè ní láti san apá kan tàbí gbogbo rẹ̀", "SACCO máa fagi lé owó àyáwó náà", "Ẹbí ọ̀rẹ́ rẹ máa san án fúnra wọn"], answer: 1, why: "Onídùúró ṣèlérí láti san án padà tí ẹni tó yá a kò bá san." }
          ]
        },
        {
          title: "Owó àyáwó microfinance àti ti báńkì fún iṣẹ́ àgbẹ̀",
          objectives: ["O3"],
          minutes: 6,
          goal: "Fi ìfilọ̀ owó àyáwó méjì wé ara wọn nípa iye owó lápapọ̀, ohun ìdúró àti bí ìsanpadà ṣe bá ìkórè rẹ mu.",
          text: [
            "Àwọn báńkì àti ilé-iṣẹ́ microfinance ń yáni ní owó tí kò pọ̀, nígbà púpọ̀ fún ẹgbẹ́; àwọn báńkì oníṣòwò àti báńkì iṣẹ́ àgbẹ̀ ń yáni ní owó tó pọ̀ jù, nígbà púpọ̀ pẹ̀lú ìdúró tó pọ̀ jù. Béèrè bóyá èlé náà jẹ́ ti oṣù kan tàbí ti ọdún kan, àti bóyá ó jẹ́ èlé alápapọ̀ (flat) tàbí èlé lórí ohun tó kù (reducing balance). Èlé alápapọ̀ ń gba èlé lórí gbogbo owó tí o yá fún gbogbo àkókò àyáwó; èlé lórí ohun tó kù ń gba èlé lórí ohun tí o ṣì jẹ nìkan, nítorí náà nọ́mbà kan náà máa ń ná ọ ní owó díẹ̀ jù. Ṣe àròpọ̀ gbogbo owó iṣẹ́ àti owó ìdánilójú (insurance) láti mọ iye tí o máa san padà lápapọ̀.",
            "Ohun ìdúró (collateral) ni ohun tí ayánilówó lè gbà tí o kò bá san padà: ìwé ẹ̀rí ilẹ̀, ọkọ̀, ohun èlò, owó ìfipamọ́ tí ayánilówó ń dì mú, ìdúró ẹgbẹ́, tàbí ìwé ẹ̀rí ilé ìkẹ́rùsí. Àwọn ìjọba kan ń dúró fún àwọn ayánilówó pẹ̀lú ìdúró gbèsè (credit guarantee), bí NIRSAL ní Nàìjíríà (tó 75% ìdúró fún àwọn ayánilówó) àti GIRSAL ní Ghana. Wọ̀nyí ń dáàbò bo ayánilówó, wọ́n sì lè mú kí àwọn báńkì túbọ̀ fẹ́ yá àwọn àgbẹ̀ lówó, ṣùgbọ́n o ṣì jẹ gbogbo owó àyáwó náà.",
            "Jẹ́ kí ìsanpadà bá ìkórè rẹ mu. Àpẹẹrẹ (nọ́mbà àròsọ ní shilling Kenya), yíyá 100,000 fún àsìkò àgbàdo kan: Ìfilọ̀ A jẹ́ 10,000 lóṣù fún oṣù 12 bẹ̀rẹ̀ láti oṣù tó ń bọ̀, lápapọ̀ 120,000. Ìfilọ̀ B jẹ́ ìsanwó kan ṣoṣo ti 112,000 ní oṣù 6, lẹ́yìn ìkórè. B kò wọ́n tó A, ó sì ń sanpadà nígbà tí owó rẹ ń wọlé; A ń béèrè ìsanpadà kí o tó ta ohunkóhun. Béèrè fún àkókò ìsinmi (grace period) tàbí ìsanpadà ní àkókò ìkórè, kí o sì ṣàyẹ̀wò pé báńkì àpapọ̀ ti fún ayánilówó náà ní ìwé àṣẹ."
          ],
          steps: ["Béèrè: èlé ti oṣù ni tàbí ti ọdún? Alápapọ̀ ni tàbí lórí ohun tó kù?", "Ṣe àròpọ̀ èlé, owó iṣẹ́ àti owó ìdánilójú láti rí iye tí o máa san padà lápapọ̀.", "Béèrè ohun ìdúró tàbí ìdúró tí wọ́n nílò.", "Fi ọjọ́ ìsanpadà sórí ètò ìṣàn owó rẹ.", "Béèrè fún àkókò ìsinmi tàbí ìsanpadà ní àkókò ìkórè tí ó bá pọn dandan.", "Ṣàyẹ̀wò pé ayánilówó náà ní ìwé àṣẹ; ka gbogbo àdéhùn tán."],
          words: [["Èlé alápapọ̀ (flat rate)", "èlé tí a ń gbà lórí gbogbo owó tí o yá fún gbogbo àkókò àyáwó, kódà bí o ṣe ń san án padà."], ["Èlé lórí ohun tó kù (reducing balance)", "èlé tí a ń gbà lórí iye tí o ṣì jẹ nìkan."], ["Ohun ìdúró (collateral)", "ohun tí ayánilówó lè gbà tí o kò bá san padà."], ["Àkókò ìsinmi (grace period)", "àkókò ní ìbẹ̀rẹ̀ owó àyáwó tí o kò ní láti sanpadà."], ["Ìdúró gbèsè (credit guarantee)", "ìlérí láti ọ̀dọ̀ ẹlòmíì láti bo apá kan àdánù ayánilówó tí ẹni tó yá owó kò bá san padà."]],
          slides: [
            { title: "Mọ èlé náà", bullets: ["Ti oṣù ni tàbí ti ọdún?", "Alápapọ̀: èlé lórí gbogbo owó ní gbogbo ìgbà", "Lórí ohun tó kù: lórí ohun tí o ṣì jẹ nìkan"] },
            { title: "Ohun ìdúró àti ìdúró gbèsè", bullets: ["Ìwé ẹ̀rí ilẹ̀, ohun èlò, owó ìfipamọ́, ìdúró ẹgbẹ́", "NIRSAL (Nàìjíríà), GIRSAL (Ghana) ń dúró fún ayánilówó", "O ṣì jẹ gbogbo owó àyáwó náà"] },
            { title: "Jẹ́ kí ìsanpadà bá ìkórè mu (àpẹẹrẹ KES)", bullets: ["A: 10,000 x 12 láti oṣù tó ń bọ̀ = 120,000", "B: 112,000 lẹ́ẹ̀kan ní oṣù 6, lẹ́yìn ìkórè", "B kò wọ́n tó, ó sì bá ìgbà tí owó ń wọlé mu"] }
          ],
          sources: [CBN_MFB, NIRSAL, GIRSAL],
          tryIt: "Mú ìfilọ̀ owó àyáwó méjì, gidi tàbí àpẹẹrẹ. Fún ọ̀kọ̀ọ̀kan, kọ iye owó, èlé (ti oṣù tàbí ti ọdún, alápapọ̀ tàbí lórí ohun tó kù), owó iṣẹ́, iye tí o máa san padà lápapọ̀, ohun ìdúró àti oṣù ìsanpadà. Sàmì sí oṣù ìsanpadà lórí ètò ìṣàn owó rẹ kí o sì yan èyí tí ó bá ọ mu jù.",
          youCanNow: "fi ìfilọ̀ owó àyáwó wé ara wọn nípa iye owó lápapọ̀, ohun ìdúró àti àkókò ìsanpadà, kí o sì yan èyí tí ó bá ìkórè rẹ mu.",
          quickCheck: [
            { objective: "O3", q: "Owó àyáwó méjì fi nọ́mbà kan náà hàn, 2% lóṣù. Ọ̀kan jẹ́ alápapọ̀, èkejì jẹ́ lórí ohun tó kù. Èwo ló sábà máa ń wọ́n díẹ̀?", options: ["Owó àyáwó alápapọ̀", "Wọ́n máa ń wọ́n bákan náà nígbà gbogbo", "Owó àyáwó tí èlé rẹ̀ jẹ́ lórí ohun tó kù", "Ó dá lórí àwọ̀ fọ́ọ̀mù náà"], answer: 2, why: "Èlé lórí ohun tó kù ń gba èlé lórí ohun tí o ṣì jẹ nìkan, nítorí náà èlé lápapọ̀ kéré sí i." },
            { objective: "O3", q: "Àgbàdo rẹ máa tà ní oṣù 6. Ètò ìsanpadà wo ló bá a mu jù?", options: ["Ìsanpadà lọ́sẹ̀ọ̀sẹ̀ láti ọ̀sẹ̀ 1", "Ìsanpadà lóṣooṣù láti oṣù tó ń bọ̀", "Ìsanpadà lójoojúmọ́", "Àkókò ìsinmi pẹ̀lú ìsanpadà lẹ́yìn ìkórè"], answer: 3, why: "Sísan án padà nígbà tí owó ìkórè rẹ bá wọlé ń dènà ìsanwó tí o pàdánù àti títà ọjà ní tipátipá." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ohun tí o nílò àti owó tó sún mọ́ ọ jù",
        questions: [
          { objective: "O1", q: "Kí ló dé tí a fi ń kọ owó iṣẹ́ àti ohun èlò sílẹ̀ lọ́tọ̀ọ̀tọ̀?", options: ["Àwọn ayánilówó lè ṣe wọ́n lọ́nà ọ̀tọ̀ nítorí pé owó wọn ń padà ní àkókò tó yàtọ̀", "Ó ń mú kí àkọsílẹ̀ gùn sí i", "Ohun èlò kì í nílò owó láéláé", "Kò sí ìdí kankan"], answer: 0, why: "Owó iṣẹ́ ń padà nínú ìyípo kan; owó ohun èlò ń padà fún ọ̀pọ̀ ọdún." },
          { objective: "O1", q: "Ṣé kí o fi owó ilé-ìwé kún ìbéèrè owó àyáwó oko?", options: ["Bẹ́ẹ̀ ni, nígbà gbogbo", "Bẹ́ẹ̀ ni, tí ayánilówó kò bá béèrè", "Rárá, yá owó fún oko nìkan, iye tí oko lè san padà", "Ní ìgbà ẹ̀rùn nìkan"], answer: 2, why: "Ìnáwó ilé kì í mú èrè wá, nítorí náà ó ń mú kí sísan owó àyáwó oko padà ṣòro." },
          { objective: "O2", q: "Nínú VSLA tó wọ́pọ̀, èló ni ọmọ ẹgbẹ́ sábà máa ń lè yá?", options: ["Iye èyíkéyìí", "Tó nǹkan bí ìlọ́po mẹ́ta owó ìfipamọ́ wọn", "Owó ìfipamọ́ tiwọn nìkan", "Ìlọ́po mẹ́wàá owó ìfipamọ́ wọn"], answer: 1, why: "Owó àyáwó VSLA sábà máa ń mọ níwọ̀n nǹkan bí ìlọ́po mẹ́ta owó ìfipamọ́ ọmọ ẹgbẹ́." },
          { objective: "O2", q: "Àjọ wo ní Kenya ló ń fún àwọn SACCO tó ń gba owó ìfipamọ́ ní ìwé àṣẹ?", options: ["KALRO", "KAMIS", "Kenya Meteorological Department", "SASRA"], answer: 3, why: "SASRA ń fún àwọn SACCO tó ń gba owó ìfipamọ́ ní ìwé àṣẹ, ó ń bójú tó wọn, ó sì ń tẹ àkọsílẹ̀ wọn jáde." },
          { objective: "O3", q: "Yá 50,000, san 5,000 lóṣù fún oṣù 12 pẹ̀lú owó iṣẹ́ 2,000. Èló ni iye owó àyáwó náà?", options: ["12,000", "60,000", "10,000", "2,000"], answer: 0, why: "O san 60,000 + 2,000 = 62,000 padà, èyí tí ó jẹ́ 12,000 ju ohun tí o yá lọ." }
        ]
      }
    },
    {
      name: "Orí 2: Àwọn ọ̀nà míì sí owó, àti bí a ṣe ń béèrè rẹ̀",
      lessons: [
        {
          title: "Ìwé ẹ̀rí ilé ìkẹ́rùsí àti ohun èlò oko lórí àwìn",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kọ iye owó, iṣẹ́ àti ewu owó àyáwó lórí ìwé ẹ̀rí ilé ìkẹ́rùsí àti ìfilọ̀ ohun èlò oko lórí àwìn sílẹ̀.",
          text: [
            "Owó àyáwó lórí ìwé ẹ̀rí ilé ìkẹ́rùsí: o máa kó irè oko tí ó mọ́, tí ó gbẹ, tí a sì ti tò lẹ́sẹẹsẹ ní ìpele dé ilé ìkẹ́rùsí tí a fọwọ́ sí. A máa wọ̀n ọ́n, a máa ṣàyẹ̀wò rẹ̀, o sì máa gba ìwé ẹ̀rí tí ó fi hàn pé ìwọ ni o ni iye àti ìpele yẹn. Báńkì alábàáṣiṣẹ́ lè yá ọ lówó lórí ìwé ẹ̀rí náà, nítorí náà o máa rí owó báyìí, o sì lè tà á lẹ́yìn náà nígbà tí iye owó lè dára jù; a máa san owó àyáwó náà padà láti inú owó títà. Ní Kenya, Warehouse Receipt System Council ló ń fọwọ́ sí àwọn ilé ìkẹ́rùsí. Ní Ghana, Ghana Commodity Exchange àti ARB Apex Bank bẹ̀rẹ̀ owó àyáwó lórí ìwé ẹ̀rí ilé ìkẹ́rùsí ẹ̀rọ ayélujára ní 2019, ní 2023 sì ni ilé-iṣẹ́ ìfowópamọ́ àti àyáwó kan darapọ̀ láti fúnni ní owó àyáwó lórí ọjà tí àwọn àgbẹ̀ máa san padà lẹ́yìn tí wọ́n bá tà. Béèrè lọ́wọ́ ayánilówó iye nínú iye owó irè oko náà tí ó máa yá ọ àti fún ìgbà mélòó.",
            "Iye owó àti ewu: owó ìkẹ́rùsí àti ìgbéṣẹ́, owó ìdánilójú (insurance), èlé àti ọkọ̀. Tí iye owó bá lọ sílẹ̀ dípò kí ó gòkè, owó títà lè má tó láti san owó àyáwó àti owó iṣẹ́. Irè oko gbọ́dọ̀ dé ìpele tí a fẹ́, nítorí náà gbígbẹ tàbí títò tí kò dára ń dín iye rẹ̀ kù. Ṣírò iye owó tí o nílò pẹ̀lú ọ̀nà \"storage break-even\" (iye owó tí ó máa bo ìnáwó ìkẹ́rùsí) láti inú ẹ̀kọ́ ìṣàkóso ewu.",
            "Ohun èlò oko lórí àwìn (input credit): olùrà, ilé-iṣẹ́ aṣèlọ́jà, ètò àgbẹ̀ alágbàṣe (outgrower scheme) tàbí àjọ kan ń fún ọ ní irúgbìn, ajílẹ̀ tàbí ọmọ adìẹ lórí àwìn, nígbà púpọ̀ pẹ̀lú ìdánilẹ́kọ̀ọ́, o sì máa san án padà díẹ̀díẹ̀ tàbí kí wọ́n yọ owó rẹ̀ kúrò nínú owó ìkórè rẹ. One Acre Fund ń ṣiṣẹ́ lọ́nà yìí pẹ̀lú àwọn àgbẹ̀ ní Kenya, Nàìjíríà àti àwọn orílẹ̀-èdè míì. Ṣàyẹ̀wò: iye owó ohun èlò fi wé iye owó tí o bá san lójú ẹsẹ̀, gbogbo owó iṣẹ́, iye tí wọ́n máa yọ ní ìkórè, bóyá ọ̀dọ̀ wọn nìkan ni o gbọ́dọ̀ tà sí, ohun tí ó máa ṣẹlẹ̀ tí ìkórè bá bàjẹ́, àti ìjìyà fún títà sí ẹlòmíì (side-selling)."
          ],
          steps: ["Ìwé ẹ̀rí ilé ìkẹ́rùsí: wá ilé ìkẹ́rùsí tí a fọwọ́ sí àti àwọn ayánilówó alábàáṣiṣẹ́ rẹ̀.", "Béèrè owó ìkẹ́rùsí, ìgbéṣẹ́, ìdánilójú àti owó àyáwó.", "Béèrè iye tí o lè yá lórí irè oko náà àti fún ìgbà mélòó.", "Ṣírò iye owó títà tí o nílò láti san gbogbo rẹ̀ padà.", "Ohun èlò lórí àwìn: fi iye owó ohun èlò wé iye owó lójú ẹsẹ̀ kí o sì kọ gbogbo owó iṣẹ́ sílẹ̀.", "Béèrè ohun tí ó máa ṣẹlẹ̀ tí ìkórè bá bàjẹ́ àti bóyá ọ̀dọ̀ wọn nìkan ni o gbọ́dọ̀ tà sí."],
          words: [["Ìwé ẹ̀rí ilé ìkẹ́rùsí (warehouse receipt)", "ìwé láti ilé ìkẹ́rùsí tí a fọwọ́ sí tí ó fi hàn pé ìwọ ni o ni irè oko tí a kó pamọ́, ti iye àti ìpele kan."], ["Ilé ìkẹ́rùsí tí a fọwọ́ sí", "ilé ìkẹ́rùsí tí a ti ṣàyẹ̀wò tí a sì fọwọ́ sí láti pa irè oko mọ́ láìléwu àti láti fúnni ní ìwé ẹ̀rí."], ["Ohun èlò oko lórí àwìn (input credit)", "irúgbìn, ajílẹ̀ tàbí ohun èlò míì tí a fún ọ báyìí, tí o máa sanwó rẹ̀ lẹ́yìn náà, nígbà púpọ̀ láti inú ìkórè."], ["Ètò àgbẹ̀ alágbàṣe (outgrower scheme)", "ètò tí ilé-iṣẹ́ kan ti ń fún àwọn àgbẹ̀ ní ohun èlò àti ìmọ̀ràn, tí ó sì ń ra irè oko wọn."]],
          slides: [
            { title: "Owó àyáwó lórí ìwé ẹ̀rí ilé ìkẹ́rùsí", bullets: ["Kó irè oko tí a tò ní ìpele lọ; gba ìwé ẹ̀rí", "Yá owó lórí rẹ̀; tà á lẹ́yìn náà", "Kenya: WRS Council; Ghana: ilé ìkẹ́rùsí GCX"] },
            { title: "Iye owó àti ewu", bullets: ["Ìkẹ́rùsí, ìgbéṣẹ́, ìdánilójú, èlé", "Iye owó lè lọ sílẹ̀ dípò kí ó gòkè", "Irè oko gbọ́dọ̀ dé ìpele tí a fẹ́"] },
            { title: "Ohun èlò oko lórí àwìn", bullets: ["Ohun èlò báyìí, sísan díẹ̀díẹ̀ tàbí ní ìkórè", "Olùrà, aṣèlọ́jà, ètò àgbẹ̀ alágbàṣe, One Acre Fund", "Fi wé iye owó lójú ẹsẹ̀; kọ gbogbo owó iṣẹ́ sílẹ̀"] },
            { title: "Béèrè kí o tó fọwọ́ sí i", bullets: ["Kí ni wọ́n máa yọ ní ìkórè?", "Ṣé ọ̀dọ̀ wọn nìkan ni o gbọ́dọ̀ tà sí?", "Tí ìkórè bá bàjẹ́ ńkọ́?"] }
          ],
          sources: [WRSC, GCX_EWR, GCX_ADEHYEMAN, OAF],
          tryIt: "Yan owó àyáwó lórí ìwé ẹ̀rí ilé ìkẹ́rùsí tàbí ìfilọ̀ ohun èlò oko lórí àwìn kan nítòsí rẹ (tàbí àpẹẹrẹ). Kọ ó kéré tán àdéhùn mẹ́rin (iye owó, iye àyáwó, gígùn rẹ̀, ohun tí wọ́n máa yọ tàbí òfin títà) àti ewu méjì, kí o sì sọ bóyá ó bá oko rẹ mu.",
          youCanNow: "ṣàlàyé bí owó àyáwó lórí ìwé ẹ̀rí ilé ìkẹ́rùsí àti ohun èlò oko lórí àwìn ṣe ń ṣiṣẹ́, kí o sì ṣàyẹ̀wò iye owó àti ewu wọn kí o tó fọwọ́ sí i.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ìwé ẹ̀rí ilé ìkẹ́rùsí ń fi hàn?", options: ["Pé ìwọ ni o ni iye àti ìpele irè oko kan tí a kó pamọ́", "Pé o ti san owó orí rẹ", "Pé iye owó máa gòkè", "Pé báńkì ti fọwọ́ sí owó àyáwó"], answer: 0, why: "Ìwé ẹ̀rí náà jẹ́ ẹ̀rí pé ìwọ ni o ni irè oko tí a tò ní ìpele tí a sì kó pamọ́, èyí tí ayánilówó lè gbà." },
            { objective: "O4", q: "Ètò ohun èlò lórí àwìn kan ń yọ owó ohun èlò kúrò nínú owó ìkórè rẹ. Kí ni o gbọ́dọ̀ ṣàyẹ̀wò?", options: ["Oríṣi irúgbìn nìkan", "Kò sí nǹkan; ilé-iṣẹ́ ló ń pinnu", "Iye owó ohun èlò fi wé iye owó lójú ẹsẹ̀, gbogbo owó iṣẹ́ àti ohun tí ó máa ṣẹlẹ̀ tí ìkórè bá bàjẹ́", "Ọjọ́ ìdánilẹ́kọ̀ọ́ nìkan"], answer: 2, why: "Àwọn àdéhùn wọ̀nyí ló ń pinnu iye tí o máa san gan-an àti ẹni tí ó máa ru àdánù tí ìkórè bá bàjẹ́." }
          ]
        },
        {
          title: "Owó ẹ̀bùn, ètò àwọn ọ̀dọ́ àti yíyẹra fún jìbìtì",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò owó ẹ̀bùn, ètò àwọn ọ̀dọ́ tàbí ìfilọ̀ owó àyáwó lórí orísun ìjọba kí o sì dá àwọn àmì jìbìtì mọ̀.",
          text: [
            "A kì í san owó ẹ̀bùn (grant) padà, ṣùgbọ́n ọ̀pọ̀ ènìyàn ló ń díje fún un, ó ní òfin nípa bí o ṣe máa ná owó náà, wọ́n sì máa béèrè ìròyìn. Ọ̀pọ̀ \"owó àwọn ọ̀dọ́\" jẹ́ owó àyáwó tàbí ìdánilẹ́kọ̀ọ́ ní tòótọ́. Àwọn àpẹẹrẹ tí o lè ṣàyẹ̀wò: ètò ENABLE Youth ti African Development Bank ń kọ́ àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, ó sì ń ràn wọ́n lọ́wọ́ ní ọ̀pọ̀ orílẹ̀-èdè Áfíríkà, pẹ̀lú àwọn alábàáṣiṣẹ́ bí IITA; Youth Enterprise Development Fund ti Kenya ń fún òwò àwọn ọ̀dọ́ ní owó àyáwó, pẹ̀lú Agri-Biz loan; DER/FJ ti Senegal ń fowó ṣe iṣẹ́ àwọn obìnrin àti ọ̀dọ́, pẹ̀lú iṣẹ́ àgbẹ̀, jù lọ nípasẹ̀ owó àyáwó. Àwọn ètò máa ń ṣí, wọ́n máa ń tì, wọ́n sì máa ń yí òfin wọn padà: máa ṣàyẹ̀wò lórí ojú-òpó wẹ́ẹ̀bù tàbí ọ́fíìsì ìjọba pé ìpè fún ìbéèrè wà ní ṣíṣí báyìí kí o tó kọ̀wé béèrè.",
            "Àwọn onjìbìtì ń da orúkọ àti àmì àwọn ètò gidi kọ lórí ìkànnì àjọlò àti WhatsApp. Àwọn àmì ìkìlọ̀: o gbọ́dọ̀ san owó \"processing\" tàbí \"registration\" kí o tó gba owó ẹ̀bùn tàbí owó àyáwó; wọ́n sọ pé ìfọwọ́sí \"dájú\"; wọ́n ń kán ọ lójú; wọ́n ń béèrè PIN rẹ, kóòdù ìgbà kan tàbí fọ́tò ìwé ìdánimọ̀ lórí chat; ẹni tí ó ń bá ọ sọ̀rọ̀ ń lo nọ́mbà tàbí email ti ara rẹ̀; tàbí app àyáwó kan fẹ́ wọlé sí gbogbo nọ́mbà inú fóònù rẹ. Àwọn ètò gidi kì í gba owó lọ́wọ́ rẹ láti kọ̀wé béèrè, wọn kì í sì í béèrè PIN rẹ láéláé.",
            "Ṣàyẹ̀wò gbogbo ayánilówó àti app àyáwó: ní Kenya, Central Bank of Kenya ń tẹ àkọsílẹ̀ àwọn olùpèsè gbèsè ẹ̀rọ ayélujára tó ní ìwé àṣẹ jáde, SASRA sì ń kọ àwọn SACCO tó ní ìwé àṣẹ sílẹ̀; ní Nàìjíríà, FCCPC ń tẹ àkọsílẹ̀ àwọn ayánilówó ẹ̀rọ ayélujára tí a fọwọ́ sí jáde, Central Bank of Nigeria sì ń fún àwọn báńkì microfinance ní ìwé àṣẹ; ní àwọn orílẹ̀-èdè CFA franc, ṣàyẹ̀wò pẹ̀lú BCEAO tàbí ọ́fíìsì microfinance ti orílẹ̀-èdè náà. Tí iyèméjì bá wà, béèrè lọ́wọ́ ẹgbẹ́ alájọṣe rẹ tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀."
          ],
          steps: ["Wá ètò náà lórí ojú-òpó wẹ́ẹ̀bù tàbí ọ́fíìsì ìjọba rẹ̀, kì í ṣe ọ̀rọ̀ orí ìkànnì àjọlò.", "Ṣàyẹ̀wò pé ìpè fún ìbéèrè wà ní ṣíṣí báyìí kí o sì ka òfin rẹ̀.", "Má ṣe san owó láti kọ̀wé béèrè tàbí láti gba owó ẹ̀bùn láéláé.", "Má ṣe fi PIN, kóòdù ìgbà kan tàbí ọ̀rọ̀ aṣínà rẹ hàn láéláé.", "Ṣàyẹ̀wò ayánilówó àti app àyáwó lórí àkọsílẹ̀ àjọ alábòójútó.", "Béèrè lọ́wọ́ ẹgbẹ́ alájọṣe rẹ tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tí kò bá dá ọ lójú."],
          words: [["Owó ẹ̀bùn (grant)", "owó tí a fúnni fún ète kan tí a kò ní san padà, tí ó sábà máa ń ní òfin àti ìròyìn."], ["Ìpè fún ìbéèrè", "ìkéde pé ètò kan ń gba ìbéèrè, pẹ̀lú ọjọ́ ìbẹ̀rẹ̀ àti ọjọ́ ìparí."], ["Jìbìtì", "ẹ̀tàn láti jí owó tàbí ìsọfúnni."], ["Àjọ alábòójútó (regulator)", "àjọ ìjọba tí ó ń fún àwọn ayánilówó, SACCO tàbí ilé-iṣẹ́ ìdánilójú ní ìwé àṣẹ, tí ó sì ń bójú tó wọn."]],
          slides: [
            { title: "Owó ẹ̀bùn àti ètò àwọn ọ̀dọ́", bullets: ["Owó ẹ̀bùn: a kì í san án padà, ṣùgbọ́n ìdíje wà, ó sì ní òfin", "Ọ̀pọ̀ owó àwọn ọ̀dọ́ jẹ́ owó àyáwó tàbí ìdánilẹ́kọ̀ọ́", "Ṣàyẹ̀wò pé ìpè wà ní ṣíṣí báyìí, lórí ojú-òpó ìjọba"] },
            { title: "Àwọn àpẹẹrẹ láti ṣàyẹ̀wò", bullets: ["AfDB ENABLE Youth (pẹ̀lú IITA)", "Kenya: owó àyáwó Youth Enterprise Development Fund", "Senegal: DER/FJ fún àwọn obìnrin àti ọ̀dọ́"] },
            { title: "Àwọn àmì ìkìlọ̀ jìbìtì", bullets: ["Owó láti kọ̀wé béèrè tàbí láti gba owó", "Ìfọwọ́sí \"dájú\"; wọ́n ń kán ọ lójú", "Wọ́n ń béèrè PIN, kóòdù tàbí fọ́tò ìwé ìdánimọ̀ lórí chat"] },
            { title: "Ṣàyẹ̀wò àjọ alábòójútó", bullets: ["Kenya: ayánilówó ẹ̀rọ ayélujára CBK; SACCO SASRA", "Nàìjíríà: app àyáwó FCCPC; microfinance CBN", "Orílẹ̀-èdè CFA: BCEAO tàbí ọ́fíìsì orílẹ̀-èdè"] }
          ],
          sources: [ENABLE, YEDF, DERFJ, CBK_DCP, FCCPC],
          tryIt: "Wá owó ẹ̀bùn, ètò àwọn ọ̀dọ́ tàbí app àyáwó kan tí o ti gbọ́ nípa rẹ̀. Ṣàyẹ̀wò rẹ̀ lórí ojú-òpó wẹ́ẹ̀bù ìjọba tàbí àkọsílẹ̀ àjọ alábòójútó, kí o sì kọ: ṣé gidi ni, ṣé ó wà ní ṣíṣí báyìí, ṣé owó ẹ̀bùn ni tàbí owó àyáwó, àti àmì ìkìlọ̀ èyíkéyìí tí o rí.",
          youCanNow: "ṣàyẹ̀wò bóyá owó ẹ̀bùn, ètò tàbí ayánilówó kan jẹ́ gidi tí ó sì wà ní ṣíṣí, kí o sì dá àwọn àmì ìkìlọ̀ jìbìtì mọ̀.",
          quickCheck: [
            { objective: "O5", q: "Ọ̀rọ̀ WhatsApp kan sọ pé o ti gba owó ẹ̀bùn oko, o sì gbọ́dọ̀ san owó processing 5,000. Kí ni èyí?", options: ["Ìgbésẹ̀ owó ẹ̀bùn lásán", "Àmì ìkìlọ̀ jìbìtì", "Òfin ìjọba", "Ìsanpadà owó àyáwó"], answer: 1, why: "Owó ẹ̀bùn gidi kì í gba owó lọ́wọ́ rẹ kí o tó gba owó." },
            { objective: "O5", q: "Ní Nàìjíríà, níbo ni o ti lè ṣàyẹ̀wò bóyá a ti fọwọ́ sí app àyáwó kan?", options: ["Ìpolówó app náà fúnra rẹ̀", "Èrò ọ̀rẹ́ kan", "Iye ènìyàn tí ó ti gbà á sórí fóònù", "Àkọsílẹ̀ àwọn ayánilówó ẹ̀rọ ayélujára FCCPC"], answer: 3, why: "FCCPC ń tẹ àkọsílẹ̀ àwọn ayánilówó ẹ̀rọ ayélujára tí a fọwọ́ sí jáde." }
          ]
        },
        {
          title: "Kíkọ ìbéèrè owó ojú-ewé kan",
          objectives: ["O6"],
          minutes: 6,
          goal: "Kọ ìbéèrè owó ojú-ewé kan fún oko rẹ.",
          text: [
            "Ìbéèrè owó ń sọ fún ayánilówó, ètò ìrànlọ́wọ́ tàbí olùdókòwò ohun tí o nílò, ìdí rẹ̀, àti bí a ṣe máa san án padà tàbí bí ó ṣe máa mú èrè wá. Jẹ́ kí ó jẹ́ ojú-ewé kan pẹ̀lú àkọlé tó yé: ta ni ọ́ àti oko rẹ (ibi tí ó wà, ilẹ̀, iṣẹ́ oko, ọdún tí o ti ń ṣe àgbẹ̀); ohun tí owó wà fún àti iye rẹ̀ (iye lápapọ̀, owó tìrẹ, àlàfo tí o ń béèrè, pín sí owó iṣẹ́ àti ohun èlò); bí ó ṣe máa mú èrè wá (iye owó lórí ẹyọ kan, èrè àkọ́kọ́ tàbí ìgbà tí owó máa padà láti inú àkọsílẹ̀ rẹ); irú owó tí o ń béèrè àti ìdí tí ó fi bá ọ mu; ètò ìsanpadà ní oṣù kọ̀ọ̀kan, tí ó bá ìṣàn owó rẹ mu; ohun ìdúró tàbí onídùúró; àwọn ewu àti bí o ṣe ń ṣàkóso wọn (ìdánilójú, àdéhùn, ṣíṣe oríṣiríṣi iṣẹ́, ìkẹ́rùsí); àti ohun tí o ti ṣe sẹ́yìn (àkọsílẹ̀ tí o ti kọ, owó àyáwó tí o ti san padà, jíjẹ́ ọmọ ẹgbẹ́).",
            "Olùdókòwò yàtọ̀ sí ayánilówó. Olùdókòwò ń fi owó sílẹ̀ fún ìpín nínú òwò náà àti èrè rẹ̀ lọ́jọ́ iwájú (equity), dípò kí a san án padà pẹ̀lú èlé. Àwọn olùdókòwò equity sábà máa ń wá òwò tó ń dàgbà bí ilé-iṣẹ́ aṣèlọ́jà tàbí oko ńlá tí ó ní àkọsílẹ̀ àti àwọn òṣìṣẹ́. O máa fi apá kan ìní òwò náà àti díẹ̀ nínú àṣẹ rẹ sílẹ̀, nítorí náà gba ìmọ̀ràn lọ́dọ̀ agbẹjọ́rò, má sì ṣe fọwọ́ sí ohun tí kò yé ọ láéláé.",
            "Kí o tó fi í ránṣẹ́, ṣàyẹ̀wò àwọn nọ́mbà lẹ́ẹ̀mejì, ní kí olórí ẹgbẹ́ alájọṣe, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí olùdámọ̀ràn kà á, kí o sì so àkọsílẹ̀ rẹ mọ́ ọn. Má ṣe fi ọ̀rọ̀ aṣínà, PIN tàbí gbogbo ìsọfúnni báńkì rẹ sínú ìbéèrè náà láéláé; fi wọ́n fúnni nípasẹ̀ ọ̀nà ìjọba ayánilówó nìkan."
          ],
          steps: ["Ta ni ọ́ àti oko rẹ.", "Ohun tí owó wà fún, iye lápapọ̀, owó tìrẹ àti àlàfo.", "Bí ó ṣe máa mú èrè wá: iye owó lórí ẹyọ kan, èrè tàbí ìgbà tí owó máa padà.", "Irú owó àti ètò ìsanpadà ní oṣù kọ̀ọ̀kan.", "Ohun ìdúró tàbí onídùúró; àwọn ewu àti bí o ṣe ń ṣàkóso wọn.", "Ohun tí o ti ṣe sẹ́yìn; ṣàyẹ̀wò àwọn nọ́mbà kí o sì ní kí olùdámọ̀ràn kà á."],
          words: [["Ìbéèrè owó (funding request)", "ìwé kúkúrú tí ó ń béèrè owó lọ́wọ́ ayánilówó, ètò ìrànlọ́wọ́ tàbí olùdókòwò, tí ó fi ohun tí owó wà fún, iye rẹ̀ àti ìsanpadà hàn."], ["Equity", "ìpín ìní nínú òwò kan tí olùdókòwò ń gbà fún owó rẹ̀."], ["Ohun tí o ti ṣe sẹ́yìn (track record)", "ẹ̀rí ohun tí o ti ṣe tẹ́lẹ̀, bí àkọsílẹ̀ tí o ti kọ àti owó àyáwó tí o ti san padà."]],
          slides: [
            { title: "Ojú-ewé kan, àkọlé tó yé", bullets: ["Ta ni ọ́ àti oko rẹ", "Ohun tí owó wà fún, iye lápapọ̀, owó tìrẹ, àlàfo", "Bí ó ṣe máa mú èrè wá: iye lórí ẹyọ kan, èrè, ìgbà tí owó máa padà"] },
            { title: "Ìsanpadà àti ìdúró", bullets: ["Ìsanpadà ní oṣù kọ̀ọ̀kan, tí ó bá ìṣàn owó mu", "Ohun ìdúró tàbí onídùúró", "Àwọn ewu àti bí o ṣe ń ṣàkóso wọn"] },
            { title: "Olùdókòwò yàtọ̀", bullets: ["Owó fún ìpín nínú òwò (equity)", "O máa fi apá kan ìní àti àṣẹ sílẹ̀", "Kọ́kọ́ gba ìmọ̀ràn agbẹjọ́rò"] },
            { title: "Kí o tó fi í ránṣẹ́", bullets: ["Ṣàyẹ̀wò nọ́mbà lẹ́ẹ̀mejì; so àkọsílẹ̀ mọ́ ọn", "Ní kí olùdámọ̀ràn kà á", "Kò sí PIN tàbí ọ̀rọ̀ aṣínà nínú ìbéèrè"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ìbéèrè owó ojú-ewé kan rẹ pẹ̀lú ohun tí owó wà fún, iye lápapọ̀, owó tìrẹ àti àlàfo, bí ó ṣe máa mú èrè wá, irú owó àti ìdí rẹ̀, ètò ìsanpadà ní oṣù kọ̀ọ̀kan, ohun ìdúró, àwọn ewu àti ohun tí o ti ṣe sẹ́yìn. Ní kí ẹnì kan tí o fọkàn tán kà á.",
          youCanNow: "kọ ìbéèrè owó ojú-ewé kan tó yé, tí àwọn nọ́mbà tìrẹ ń tì lẹ́yìn, tí ayánilówó, ètò ìrànlọ́wọ́ tàbí olùdókòwò lè ṣàyẹ̀wò.",
          quickCheck: [
            { objective: "O6", q: "Iye wo ni ìbéèrè rẹ yẹ kí ó béèrè?", options: ["Àlàfo owó lẹ́yìn owó tìrẹ", "Iye lápapọ̀, láìka owó tìrẹ sí", "Iye tí ayánilówó bá fẹ́ fúnni", "Ìlọ́po méjì iye lápapọ̀ kí ó lè dájú"], answer: 0, why: "Bíbéèrè àlàfo ń fi ìfọkànsìn rẹ hàn, ó sì ń jẹ́ kí owó àyáwó kéré bí ó ti ṣeé ṣe tó." },
            { objective: "O6", q: "Kí ni olùdókòwò equity ń gbà fún owó rẹ̀?", options: ["Èlé oṣooṣù tí kò yí padà nìkan", "Kò sí nǹkan", "Ìpín nínú òwò náà àti èrè rẹ̀ lọ́jọ́ iwájú", "Ìwé ẹ̀rí ilẹ̀ rẹ"], answer: 2, why: "Equity túmọ̀ sí níní apá kan òwò náà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àwọn ọ̀nà míì sí owó, àti bí a ṣe ń béèrè rẹ̀",
        questions: [
          { objective: "O4", q: "Pẹ̀lú owó àyáwó lórí ìwé ẹ̀rí ilé ìkẹ́rùsí, kí ló máa ṣẹlẹ̀ tí iye owó bá lọ sílẹ̀ dípò kí ó gòkè?", options: ["Báńkì máa fagi lé owó àyáwó náà", "Owó títà lè má tó láti san owó àyáwó àti owó iṣẹ́", "Ilé ìkẹ́rùsí máa san ìyàtọ̀ náà", "Kò sí ohun tó máa yí padà"], answer: 1, why: "O ṣì jẹ owó àyáwó àti owó iṣẹ́ láìka iye owó ọjà sí." },
          { objective: "O4", q: "Èwo ni òfin tó wọ́pọ̀ nínú ètò àgbẹ̀ alágbàṣe tàbí ohun èlò oko lórí àwìn?", options: ["O kò ní san padà láéláé", "O gbọ́dọ̀ tà fún ẹnikẹ́ni àyàfi àwọn", "Ohun èlò máa ń jẹ́ ọ̀fẹ́ nígbà gbogbo", "A máa yọ owó ohun èlò kúrò nínú owó ìkórè rẹ"], answer: 3, why: "Ọ̀pọ̀ ètò máa ń gba owó ohun èlò padà nígbà tí wọ́n bá ra irè oko rẹ." },
          { objective: "O5", q: "Kí o tó kọ̀wé béèrè fún ètò àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, o yẹ kí o kọ́kọ́:", options: ["Ṣàyẹ̀wò lórí ojú-òpó wẹ́ẹ̀bù ìjọba pé ìpè wà ní ṣíṣí báyìí", "San owó ìforúkọsílẹ̀", "Fi PIN rẹ ránṣẹ́ sí àwọn olùṣètò", "Pín in lórí ìkànnì àjọlò"], answer: 0, why: "Àwọn ètò máa ń ṣí wọ́n sì máa ń tì; ojú-òpó ìjọba ló ń fi ohun tí ó jẹ́ gidi àti ti ìsinsìnyí hàn." },
          { objective: "O5", q: "App àyáwó kan fẹ́ wọlé sí gbogbo nọ́mbà inú fóònù rẹ. Èyí jẹ́:", options: ["Òfin báńkì lásán", "Ohun tí òfin béèrè", "Àmì ìkìlọ̀; kọ́kọ́ ṣàyẹ̀wò pé app náà ní ìwé àṣẹ", "Àmì ayánilówó rere"], answer: 2, why: "Àwọn app tí kò ní ìwé àṣẹ ń lo nọ́mbà inú fóònù láti dójú ti àwọn tó yá owó; ṣàyẹ̀wò àkọsílẹ̀ àjọ alábòójútó." },
          { objective: "O6", q: "Èwo ló yẹ kí ó wà nínú ìbéèrè owó ojú-ewé kan?", options: ["PIN owó orí fóònù rẹ", "Ètò ìsanpadà ní oṣù kọ̀ọ̀kan tí ó bá ìṣàn owó rẹ mu", "Ojú-ewé mẹ́wàá fọ́tò nìkan", "Gbèsè àwọn aládùúgbò rẹ"], answer: 1, why: "Àwọn ayánilówó nílò láti rí bí o ṣe máa san án padà àti ìgbà tí o máa san án." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Wíwá Owó fún Oko Rẹ: Owó Àyáwó, Owó Ẹ̀bùn àti Olùdókòwò",
    questions: [
      { objective: "O1", q: "Iye tí o nílò lápapọ̀ 2,000,000; owó tìrẹ 600,000. Àlàfo owó ni:", options: ["2,600,000", "600,000", "1,400,000", "2,000,000"], answer: 2, why: "2,000,000 - 600,000 = 1,400,000." },
      { objective: "O1", q: "Owó iṣẹ́ (working capital) ni owó tí:", options: ["Ń san fún ìyípo iṣẹ́ kan tí ó sì ń padà nígbà tí o bá tà", "Ń ra ilẹ̀", "Ń san owó ilé-ìwé", "A kì í san padà láéláé"], answer: 0, why: "Ó ń san fún ohun èlò oko àti owó òṣìṣẹ́ fún ìyípo kan." },
      { objective: "O1", q: "Kí ló dé tí a fi ń fi ìnáwó kọ̀ọ̀kan sí oṣù tí a nílò rẹ̀?", options: ["Àwọn ayánilówó fẹ́ràn àkọsílẹ̀ gígùn", "Láti yá ju ohun tí o nílò lọ", "Kò yí nǹkan kan padà", "Kí o lè rí owó nígbà tí o nílò rẹ̀ kí o má sì san èlé lórí owó tí ó jókòó lásán"], answer: 3, why: "Àkókò tó dára ń jẹ́ kí àyáwó àti èlé kéré bí ó ti ṣeé ṣe tó." },
      { objective: "O2", q: "Ìgbà mélòó ni VSLA tó wọ́pọ̀ máa ń pàdé?", options: ["Lẹ́ẹ̀kan lọ́dún", "Lọ́sẹ̀ọ̀sẹ̀", "Ní ọjọ́ pínpín owó nìkan", "Láéláé"], answer: 1, why: "Ní ìpàdé ọ̀sẹ̀ ni ọmọ ẹgbẹ́ máa ń ra ìpín tí wọ́n sì ń san owó àyáwó padà." },
      { objective: "O2", q: "Kí ni owó àjọṣe VSLA wà fún?", options: ["Sísan owó fún alága", "Rírà ilẹ̀", "Pàjáwìrì àwọn ọmọ ẹgbẹ́", "Àríyá nìkan"], answer: 2, why: "Owó àjọṣe ń ran àwọn ọmọ ẹgbẹ́ lọ́wọ́ nígbà pàjáwìrì." },
      { objective: "O2", q: "Kí o tó darapọ̀ mọ́ ẹgbẹ́ ìfowópamọ́, kí ni o yẹ kí o ṣàyẹ̀wò?", options: ["Òfin rẹ̀ tí a kọ sílẹ̀, owó iṣẹ́ àyáwó àti bí a ṣe ń pa owó mọ́ láìléwu", "Ẹni tí ó jẹ́ alága nìkan", "Ibi ìpàdé nìkan", "Kò sí nǹkan"], answer: 0, why: "Òfin tó yé àti owó tí a pa mọ́ láìléwu ń dáàbò bo owó ìfipamọ́ rẹ." },
      { objective: "O3", q: "Èlé lórí ohun tó kù (reducing balance) ń gba èlé lórí:", options: ["Gbogbo owó fún gbogbo àkókò àyáwó", "Kò sí nǹkan", "Owó iṣẹ́ nìkan", "Iye tí o ṣì jẹ nìkan"], answer: 3, why: "Bí o ṣe ń san án padà, èlé ń dín kù." },
      { objective: "O3", q: "Kí ni ètò ìdúró gbèsè bí NIRSAL ń ṣe?", options: ["Ń fagi lé owó àyáwó àwọn àgbẹ̀", "Ń bo apá kan àdánù ayánilówó tí ẹni tó yá owó kò bá san padà", "Ń san èlé àwọn àgbẹ̀", "Ń fúnni ní owó ẹ̀bùn ọ̀fẹ́"], answer: 1, why: "Ó ń dáàbò bo àwọn ayánilówó kí wọ́n lè yáni lówó sí i; o ṣì jẹ gbogbo owó àyáwó náà." },
      { objective: "O3", q: "Èwo ni ohun ìdúró (collateral)?", options: ["Irè oko tí o fẹ́ràn jù", "Ìwé ẹ̀rí ilẹ̀ tàbí ohun èlò tí ayánilówó lè gbà tí o kò bá san padà", "Nọ́mbà fóònù rẹ", "Iye owó ọjà"], answer: 1, why: "Ohun ìdúró jẹ́ ààbò fún ayánilówó." },
      { objective: "O3", q: "Ìfilọ̀ A: san 120,000 padà lóṣooṣù láti oṣù tó ń bọ̀. Ìfilọ̀ B: san 112,000 lẹ́ẹ̀kan lẹ́yìn ìkórè. Fún àgbẹ̀ irè oko, B:", options: ["Wọ́n jù, kò sì bá a mu tó", "Lòdì sí òfin nígbà gbogbo", "Kò wọ́n tó, ó sì ń sanpadà nígbà tí owó ìkórè bá wọlé", "Bákan náà ni pẹ̀lú A"], answer: 2, why: "Iye B lápapọ̀ kéré jù, ó sì ń yẹ ní àkókò tí àgbẹ̀ ní owó." },
      { objective: "O4", q: "Níbo ni o ti máa kó irè oko sí láti gba ìwé ẹ̀rí ilé ìkẹ́rùsí?", options: ["Ṣọ́ọ̀bù èyíkéyìí", "Nílé", "Lọ́dọ̀ oníṣòwò tí o ṣẹ̀ṣẹ̀ pàdé", "Ilé ìkẹ́rùsí tí a fọwọ́ sí"], answer: 3, why: "Ilé ìkẹ́rùsí tí a fọwọ́ sí nìkan ló ń fúnni ní ìwé ẹ̀rí tí àwọn ayánilówó ń gbà." },
      { objective: "O4", q: "Ní Kenya, àjọ wo ló ń fọwọ́ sí àwọn ilé ìkẹ́rùsí fún ìwé ẹ̀rí ilé ìkẹ́rùsí?", options: ["Warehouse Receipt System Council", "KAMIS", "NAFDAC", "Kenya Meteorological Department"], answer: 0, why: "WRS Council ló ń fọwọ́ sí àwọn ilé ìkẹ́rùsí tí ó sì ń bójú tó wọn." },
      { objective: "O4", q: "Kí ni side-selling (títà sí ẹlòmíì)?", options: ["Títà ní ẹ̀gbẹ́ ọ̀nà", "Títa irè oko tí o ti ṣèlérí fún olùrà kan fún ẹlòmíì", "Títà fún ẹgbẹ́ alájọṣe", "Títà díẹ̀díẹ̀"], answer: 1, why: "Ó ń da àdéhùn ohun èlò oko lórí àwìn tàbí àdéhùn míì, ó sì lè mú ìjìyà wá." },
      { objective: "O5", q: "Ètò owó ẹ̀bùn gidi:", options: ["Ń béèrè owó kí ó tó san owó fún ọ", "Ń béèrè PIN rẹ", "Kì í gba owó lọ́wọ́ rẹ láti kọ̀wé béèrè", "Ń ṣèlérí ìfọwọ́sí fún gbogbo ènìyàn"], answer: 2, why: "Owó iṣẹ́, bíbéèrè PIN àti ìlérí ìfọwọ́sí jẹ́ àmì jìbìtì." },
      { objective: "O5", q: "Youth Enterprise Development Fund ti Kenya jù lọ ń fúnni ní:", options: ["Ilẹ̀ ọ̀fẹ́", "Owó àyáwó fún òwò àwọn ọ̀dọ́", "Ìdánilójú irè oko", "Àsọtẹ́lẹ̀ ojú ọjọ́"], answer: 1, why: "Ó ń fúnni ní owó àyáwó, pẹ̀lú Agri-Biz loan, àti ìrànlọ́wọ́ òwò." },
      { objective: "O5", q: "Níbo ni o ti yẹ kí o ṣàyẹ̀wò app àyáwó ẹ̀rọ ayélujára ti Kenya?", options: ["Ojú-ewé rẹ̀ lórí ìkànnì àjọlò", "Iye ìràwọ̀ rẹ̀", "Group chat ọ̀rẹ́ kan", "Àkọsílẹ̀ àwọn olùpèsè gbèsè ẹ̀rọ ayélujára tó ní ìwé àṣẹ ti Central Bank of Kenya"], answer: 3, why: "CBK ń fún àwọn olùpèsè gbèsè ẹ̀rọ ayélujára ní ìwé àṣẹ, ó sì ń tẹ àkọsílẹ̀ wọn jáde." },
      { objective: "O6", q: "Àkọlé wo ló ń fi han ayánilówó bí owó náà ṣe máa mú èrè wá?", options: ["Iye owó lórí ẹyọ kan, èrè àkọ́kọ́ tàbí ìgbà tí owó máa padà", "Àwọ̀ tí o fẹ́ràn jù", "Orúkọ àwọn aládùúgbò rẹ", "PIN rẹ"], answer: 0, why: "Àwọn nọ́mbà wọ̀nyí ń fi hàn pé owó náà máa mú owó wọlé láti fi sanpadà." },
      { objective: "O6", q: "Ohun tí o ti ṣe sẹ́yìn (track record) nínú ìbéèrè owó túmọ̀ sí:", options: ["Bí o ṣe ń sáré tó", "Ẹ̀rí ohun tí o ti ṣe, bí àkọsílẹ̀ tí o ti kọ àti owó àyáwó tí o ti san padà", "Nọ́mbà inú fóònù rẹ", "Àkọsílẹ̀ ohun tí o fẹ́"], answer: 1, why: "Iṣẹ́ tí o ti ṣe sẹ́yìn ń ran àwọn ayánilówó lọ́wọ́ láti gbẹ́kẹ̀ lé ètò rẹ." },
      { objective: "O6", q: "Kí o tó fi ìbéèrè owó ránṣẹ́, o yẹ kí o:", options: ["Fi PIN rẹ kún un kí ó lè yára", "Mú kí àwọn nọ́mbà tóbi sí i", "Ṣàyẹ̀wò àwọn nọ́mbà lẹ́ẹ̀mejì kí o sì ní kí olùdámọ̀ràn kà á", "Fi í ránṣẹ́ sí gbogbo nọ́mbà tí o rí lórí ayélujára"], answer: 2, why: "Nọ́mbà tí a ti ṣàyẹ̀wò àti ẹni kejì tí ó kà á ń mú kí ìbéèrè lágbára sí i kí ó sì wà láìléwu." },
      { objective: "O6", q: "Kí ni o máa fi sílẹ̀ nígbà tí o bá gba equity lọ́wọ́ olùdókòwò?", options: ["Kò sí nǹkan", "Jíjẹ́ ọmọ ẹgbẹ́ ìfowópamọ́ rẹ", "Gbogbo ilẹ̀ rẹ fúnra rẹ̀", "Apá kan ìní àti díẹ̀ nínú àṣẹ lórí òwò náà"], answer: 3, why: "Equity túmọ̀ sí pé olùdókòwò ni apá kan òwò náà." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 3, 5, 6, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ìbéèrè ṣe kí o sì tún un ṣàyẹ̀wò.",
    criteria: [
      { name: "Ohun tí a nílò àti àlàfo owó", objective: "O1", notYet: "Iye owó jẹ́ àfojúdá, tàbí a da ìnáwó ilé mọ́ ọn.", meets: "Iye tí a nílò lápapọ̀, owó tìrẹ àti àlàfo tọ̀nà, a pín wọn sí owó iṣẹ́ àti ohun èlò, pẹ̀lú oṣù.", exceeds: "Ó ní owó díẹ̀ fún ìpamọ́, ó sì fi ibi tí nọ́mbà ìnáwó kọ̀ọ̀kan ti wá hàn." },
      { name: "Irú owó tó tọ́", objective: "O2", notYet: "Kò sí ìdí fún irú owó tí a yàn.", meets: "Ó dárúkọ irú owó (ẹgbẹ́, SACCO, owó àyáwó, ìwé ẹ̀rí ilé ìkẹ́rùsí, ohun èlò lórí àwìn, owó ẹ̀bùn tàbí equity) àti ìdí tí ó fi bá a mu.", exceeds: "Ó fi ó kéré tán ọ̀nà méjì wé ara wọn, pẹ̀lú ìfowópamọ́ ẹgbẹ́, ó sì ṣàlàyé ohun tí ó yàn." },
      { name: "Ètò ìsanpadà", objective: "O3", notYet: "Kò sí ètò ìsanpadà, tàbí ìsanpadà dé ṣáájú kí owó kankan tó wọlé.", meets: "Ìsanpadà oṣooṣù pẹ̀lú iye owó lápapọ̀, tí ó bá ètò ìṣàn owó àti ìkórè mu.", exceeds: "Ó fi ohun tí ó máa ṣẹlẹ̀ ní àsìkò búburú hàn àti bí a ṣe ṣì máa san án padà." },
      { name: "Ìdúró àti àdéhùn", objective: "O4", notYet: "Ohun ìdúró, onídùúró tàbí àwọn àdéhùn pàtàkì kò sí níbẹ̀.", meets: "Ó dárúkọ ohun ìdúró tàbí onídùúró, pẹ̀lú àwọn àdéhùn pàtàkì àti ewu méjì.", exceeds: "Ó ṣàlàyé bí ìwé ẹ̀rí ilé ìkẹ́rùsí, àdéhùn tàbí ìdánilójú ṣe ń dín ewu ayánilówó kù." },
      { name: "A ti ṣàyẹ̀wò, ó sì wà láìléwu", objective: "O5", notYet: "A kò ṣàyẹ̀wò ayánilówó tàbí ètò náà, tàbí ìsọfúnni àdáni bí PIN wà nínú rẹ̀.", meets: "A ti ṣàyẹ̀wò ayánilówó tàbí ètò náà lórí ojú-òpó ìjọba tàbí àkọsílẹ̀ àjọ alábòójútó, kò sì sí kóòdù àdáni kankan nínú rẹ̀.", exceeds: "Ó kọ ọjọ́ tí a ṣàyẹ̀wò sílẹ̀ àti pé ìpè tàbí ìfilọ̀ náà wà ní ṣíṣí báyìí." },
      { name: "Ìbéèrè ojú-ewé kan tó yé", objective: "O6", notYet: "Ó gùn ju ojú-ewé kan lọ tàbí kò sọ ohun tí owó wà fún, iye rẹ̀ tàbí bí ó ṣe máa mú èrè wá.", meets: "Ojú-ewé kan tí ó sọ ohun tí owó wà fún, iye rẹ̀, owó tìrẹ, bí ó ṣe máa mú èrè wá, ìsanpadà, ohun ìdúró, ewu àti ohun tí o ti ṣe sẹ́yìn.", exceeds: "Olùdámọ̀ràn ti kà á, a so àkọsílẹ̀ mọ́ ọn, a sì ti ṣiṣẹ́ lórí ọ̀rọ̀ olùdámọ̀ràn." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ìbéèrè owó",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn darapọ̀ mọ́ ẹgbẹ́ ìfowópamọ́ tàbí SACCO, tàbí pé àwọn kọ̀wé béèrè owó pẹ̀lú ìbéèrè tí a kọ sílẹ̀, láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn yan owó àyáwó tí ìsanpadà rẹ̀ wà lẹ́yìn ìkórè, tàbí pé àwọn yá owó tí kò tó ohun tí àwọn kọ́kọ́ rò",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ṣàyẹ̀wò ayánilówó, app àyáwó tàbí ìfilọ̀ owó ẹ̀bùn lórí àkọsílẹ̀ ìjọba, tàbí pé àwọn kọ jìbìtì owó-fún-owó-ẹ̀bùn",
      "Àwọn ẹgbẹ́ alájọṣe tàbí ayánilówó alábàáṣiṣẹ́ ń ròyìn pé ìbéèrè tó pé pérépéré pọ̀ sí i, ìsanpadà tí a pàdánù sì dín kù láàárín àwọn tí wọ́n parí ẹ̀kọ́ náà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀ àti gègé, àti fóònù lásán tí ó ní ẹ̀rọ ìṣirò",
      "Ètò oko akẹ́kọ̀ọ́, àkọsílẹ̀ rẹ̀ àti ètò ìṣàn owó rẹ̀, tàbí àwọn nọ́mbà àpẹẹrẹ inú ẹ̀kọ́ náà",
      "Ìfilọ̀ owó àyáwó gidi tàbí àpẹẹrẹ, òfin ẹgbẹ́ ìfowópamọ́ àti ìwé ìpolówó ohun èlò lórí àwìn tàbí ìwé ẹ̀rí ilé ìkẹ́rùsí láti agbègbè, tí ó bá wà",
      "Nǹkan bí ìṣẹ́jú 80 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti kọ ìbéèrè owó"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́ àgbẹ̀ tàbí ìpàdé ìtọ́sọ́nà àgbẹ̀: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan pẹ̀lú àwọn iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" ní méjìméjì.",
      "Pe SACCO, VSLA tàbí ayánilówó tó ní ìwé àṣẹ láti ṣàlàyé òfin wọn, ṣùgbọ́n má ṣe gbè sẹ́yìn ayánilówó kankan; jẹ́ kí àwọn akẹ́kọ̀ọ́ béèrè àwọn ìbéèrè inú ẹ̀kọ́ náà.",
      "Kí o tó mẹ́nu kan owó ẹ̀bùn tàbí ètò àwọn ọ̀dọ́ èyíkéyìí, ṣàyẹ̀wò lórí ojú-òpó ìjọba rẹ̀ pé ó wà ní ṣíṣí; má ṣe tan link láti ìkànnì àjọlò kálẹ̀ láéláé.",
      "Má ṣe ní kí àwọn akẹ́kọ̀ọ́ fi PIN, ọ̀rọ̀ aṣínà, nọ́mbà ìdánimọ̀ tàbí ìsọfúnni báńkì hàn nígbà àṣeṣe láéláé; lo àmì ìdúrópò.",
      "Fi rubric ṣe àmì fún ìbéèrè owó, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan; gba àwọn akẹ́kọ̀ọ́ níyànjú láti fi í han ẹgbẹ́ alájọṣe tàbí ayánilówó wọn."
    ]
  }
};
