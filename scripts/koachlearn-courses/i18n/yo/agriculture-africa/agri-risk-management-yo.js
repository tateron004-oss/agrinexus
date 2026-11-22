"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-risk-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KAMIS = { name: "Kenya Agricultural Market Information System (KAMIS), Ilé-iṣẹ́ Ètò Ọ̀gbìn Kenya: iye owó ọjà", url: "https://kamis.kilimo.go.ke" };
const NBS = { name: "National Bureau of Statistics, Nàìjíríà (ìròyìn oṣooṣù Selected Food Prices Watch àti ọ̀wọ́ngógó)", url: "https://nigerianstat.gov.ng" };
const CI_COCOA = { name: "Financial Afrik (5 March 2026): Côte d'Ivoire fi iye owó kòkó ní oko sí 1,200 FCFA/kg fún àsìkò àárín", url: "https://www.financialafrik.com/2026/03/05/cote-divoire-le-prix-de-la-campagne-intermediaire-de-cacao-fixe-a-1-200-fcfa-kg/" };
const PICS = { name: "Purdue University: àpò hermetic Purdue Improved Crop Storage (PICS)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const NCX = { name: "Nigeria Commodity Exchange (NCX): nípa wa (Securities and Exchange Commission ló fún un ní ìwé àṣẹ)", url: "https://ncx.com.ng/about-us/" };
const GCX = { name: "Ghana Commodity Exchange (GCX), ojú-òpó wẹ́ẹ̀bù rẹ̀", url: "https://www.gcx.com.gh" };
const GCX_FIRST = { name: "MyJoyOnline: Ghana Commodity Exchange ṣe òwò orí ẹ̀rọ àkọ́kọ́ (àdéhùn spot fún àgbàdo, 2018)", url: "https://www.myjoyonline.com/ghana-commodity-exchange-executes-first-electronic-trade/" };
const ACRE = { name: "ACRE Africa: ìbánigbófò onídíwọ̀n ojú ọjọ́ (alágbàtà ìbánigbófò tó ní àṣẹ)", url: "https://acreafrica.com/crop-insurance/weather-index-insurance/" };
const IBLI = { name: "ILRI: Index-Based Livestock Insurance (IBLI) àti Kenya Livestock Insurance Programme (KLIP)", url: "https://ibli.ilri.org/" };
const ILRI_KLIP = { name: "ILRI: Ojú ní ojú ọ̀run: ìjọba Kenya ń fún àwọn darandaran ní ìbánigbófò ẹran nípasẹ̀ àwòrán sátẹ́láìtì", url: "https://www.ilri.org/news/eyes-sky-kenyas-government-provides-pastoralists-livestock-insurance-through-satellite-imagery" };
const CNAAS = { name: "CNAAS, Compagnie Nationale d'Assurance Agricole du Sénégal (ilé-iṣẹ́ ìbánigbófò àgbẹ̀ orílẹ̀-èdè Senegal)", url: "https://www.cnaas.sn" };
const BCEAO = { name: "BCEAO, Báńkì Àpapọ̀ àwọn Orílẹ̀-èdè Ìwọ̀-oòrùn Áfíríkà: àwọn àmì pàtàkì, pẹ̀lú ọ̀wọ́ngógó", url: "https://www.bceao.int/fr/content/principaux-indicateurs-et-taux-directeurs" };
const CBK = { name: "Central Bank of Kenya, Báńkì Àpapọ̀ Kenya (ọ̀wọ́ngógó àti àwọn ilé-iṣẹ́ tó ní ìwé àṣẹ)", url: "https://www.centralbank.go.ke" };
const SASRA = { name: "SASRA, Kenya: àkọsílẹ̀ àwọn SACCO tó ní ìwé àṣẹ láti gba owó ìfipamọ́", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };

module.exports = {
  id: "agri-risk-management-yo",
  lang: "yo",
  translationOf: "agri-risk-management",
  category: "Agriculture (Africa)",
  name: "Ìṣàkóso Ewu Oko: Iye Owó, Ojú Ọjọ́ àti Ìbánigbófò",
  skills: "Títo àwọn ewu oko lẹ́sẹẹsẹ nínú ìwé àkọsílẹ̀ ewu, Kíkọ iye owó sílẹ̀ àti kíka ọ̀nà tí iye owó ń lọ, Pípín ewu ká pẹ̀lú oríṣiríṣi iṣẹ́, títà ní ìpele-ìpele àti ìpamọ́, Ṣíṣe ìdájọ́ àdéhùn títà ṣáájú àti hedging, Ṣíṣàyẹ̀wò ìfilọ̀ ìbánigbófò onídíwọ̀n, Dídáàbò bo owó ìfipamọ́ lọ́wọ́ ọ̀wọ́ngógó",
  outcome: "kọ àwọn ewu tí oko rẹ ń dojú kọ sílẹ̀ kí o sì to wọn lẹ́sẹẹsẹ, kọ iye owó sílẹ̀ kí o sì ka ọ̀nà tí ó ń lọ, pinnu ìgbà tí ìpamọ́ àti títà ní ìpele-ìpele máa mú èrè wá, ṣàyẹ̀wò àdéhùn iye owó tí kò yí padà àti ìfilọ̀ ìbánigbófò onídíwọ̀n kí o tó fọwọ́ sí i, kí o sì dáàbò bo owó ìfipamọ́ rẹ lọ́wọ́ ọ̀wọ́ngógó, gbogbo rẹ̀ nínú ètò ewu oko ojú-ewé kan.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tí ń dàgbà, àwọn darandaran, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn olórí ẹgbẹ́ alájọṣe àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nàìjíríà, Ghana, Senegal, Côte d'Ivoire àti káàkiri Áfíríkà. Ojú ọjọ́ búburú, iye owó tí ń wálẹ̀, ẹran tí ń ṣàìsàn àti ìnáwó tí ń gòkè lè ba iṣẹ́ ọdún kan jẹ́. O kò lè mú ewu kúrò pátápátá, ṣùgbọ́n o lè rí i bí ó ti ń bọ̀, o lè pín in ká, o sì lè gbé apá kan rẹ̀ fún àwọn ẹlòmíì.",
    "Orí 1 dá lórí rírí ewu àti pípín in ká: oríṣi ewu oko àti ìwé àkọsílẹ̀ ewu, bí iye owó ṣe ń gòkè-wálẹ̀ àti ọ̀nà tí ọjà ń lọ, àti pípín ewu ká pẹ̀lú oríṣiríṣi iṣẹ́, títà ní ìpele-ìpele àti ìpamọ́. Orí 2 dá lórí gbígbé ewu fún àwọn ẹlòmíì àti dídáàbò bo owó rẹ: àdéhùn títà ṣáájú àti àdéhùn iye owó tí kò yí padà, ohun tí hedging lórí ọjà pàṣípààrọ̀ (commodity exchange) túmọ̀ sí, ìbánigbófò onídíwọ̀n fún ohun ọ̀gbìn àti ẹran, àti ọ̀wọ́ngógó àti owó ìfipamọ́.",
    "Ẹ̀kọ́ yìí ṣàlàyé bí àdéhùn, ọjà pàṣípààrọ̀, ìbánigbófò àti owó ìfipamọ́ ṣe ń ṣiṣẹ́, àti ewu wọn. Kò fúnni ní ìmọ̀ràn ìdókòwò, kò sì gbà ọ́ níyànjú láti ṣòwò lórí ọjà pàṣípààrọ̀ kankan. Ka gbogbo àdéhùn àti ìwé ìbánigbófò dé òpin, rí i dájú pé ilé-iṣẹ́ náà ní ìwé àṣẹ, kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o fọkàn tán, bí ẹgbẹ́ alájọṣe rẹ, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí agbẹjọ́rò, kí o tó fọwọ́ sí i. Àpẹẹrẹ ni gbogbo iye owó àyàfi tí a bá dárúkọ orísun rẹ̀."
  ],
  finalTask: "Kọ ètò ewu ojú-ewé kan fún oko rẹ (tàbí oko àpẹẹrẹ kan): ewu márùn-ún tó ga jù, tí o tò lẹ́sẹẹsẹ nípa bí wọ́n ṣe ṣeé ṣe tó àti ìpalára wọn, pẹ̀lú ohun kan tí o máa ṣe fún ọ̀kọ̀ọ̀kan; àkọsílẹ̀ iye owó ọ̀sẹ̀ mẹ́rin fún irè oko tàbí ẹran pàtàkì rẹ láti orísun méjì ó kéré tán, pẹ̀lú ọ̀nà tí o rí i pé iye owó ń lọ; ètò títà tí ó sọ iye tí o máa tà nígbà ìkórè àti iye tí o máa pamọ́, pẹ̀lú iye owó ìdọ́gba ìpamọ́; àwọn ìbéèrè tí o máa béèrè kí o tó fọwọ́ sí àdéhùn iye owó tí kò yí padà tàbí kí o tó ra ìbánigbófò onídíwọ̀n; àti bí o ṣe máa dáàbò bo owó ìfipamọ́ rẹ lọ́wọ́ ọ̀wọ́ngógó.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tí ń dàgbà, àwọn darandaran, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn olórí ẹgbẹ́ alájọṣe àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti àwọn orílẹ̀-èdè Ìwọ̀-oòrùn Áfíríkà tí ń sọ Faransé, tí wọ́n ń gbin ohun ọ̀gbìn bí àgbàdo, ìrẹsì, ọkà bàbà, ẹ̀wà, ẹ̀pà, tòmátì, kọfí àti kòkó, tàbí tí wọ́n ń sin màálù, ewúrẹ́, ẹlẹ́dẹ̀, adìẹ tàbí ẹja.",
    startingPoint: "Wọ́n mọ̀ láti ìrírí pé ojú ọjọ́, iye owó àti àrùn lè ba àsìkò oko jẹ́. Ọ̀pọ̀ jù lọ ń tà fún olùrà àkọ́kọ́ nígbà ìkórè, wọ́n ń pa owó ìfipamọ́ mọ́ ní owó lọ́wọ́, ní ẹran tàbí ní ọkà, wọn kò sì tíì ka ìwé ìbánigbófò tàbí àdéhùn iye owó tí kò yí padà rí. Àwọn kan ti gbọ́ nípa ọjà pàṣípààrọ̀ tàbí ìbánigbófò onídíwọ̀n ṣùgbọ́n wọn kò mọ bí wọ́n ṣe ń ṣiṣẹ́.",
    gap: "Láìsí ètò, ọ̀gbẹlẹ̀ kan, iye owó tí ó wó lulẹ̀ tàbí àrùn tí ó jà lè fipá mú àwọn àgbẹ̀ láti ta ẹran àti ilẹ̀, láti yá owó tí èlé rẹ̀ ga, tàbí láti fi iṣẹ́ àgbẹ̀ sílẹ̀. Àwọn àgbẹ̀ tí ń kọ iye owó sílẹ̀, tí ń pín ewu ká, tí ń ka àdéhùn àti òfin ìbánigbófò, tí wọ́n sì ń dáàbò bo owó ìfipamọ́ wọn máa ń gbérí kíákíá, àwọn olùrà àti ayánilówó sì máa ń fọkàn tán wọn jù.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ owó",
      "Ẹ̀rọ: fóònù lásán fún iye owó lórí SMS, rédíò tàbí ìpè; ìwé àkọsílẹ̀ fún àkọsílẹ̀ iye owó",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5 sí 6 tí ó bá iṣẹ́ oko mu",
      "Ìbánigbófò, ọjà pàṣípààrọ̀ àti àwọn ètò yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, wọ́n sì ń yí padà; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ìfilọ̀ tí ó wà báyìí àti àjọ alábòójútó",
      "Kò sí ìmọ̀ràn ìdókòwò, kò sì sí ìgbaniníyànjú láti ṣòwò; àwọn akẹ́kọ̀ọ́ ń béèrè lọ́wọ́ olùdámọ̀ràn tí wọ́n fọkàn tán kí wọ́n tó fọwọ́ sí ohunkóhun"
    ],
    prerequisites: "Kò sí. \"Iṣẹ́ Àgbẹ̀ Bí Òwò àti Ìṣàkóso Oko\" àti \"Ìṣirò Owó Oko àti Ìṣàkóso Ìdókòwò\" (iye owó ìdọ́gba) ń ṣèrànwọ́ fún àwọn ìṣirò."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá ń ronú nípa oko àti ilé rẹ", action: "kọ àwọn ewu pàtàkì tí o ń dojú kọ sílẹ̀ kí o sì to wọn lẹ́sẹẹsẹ nínú ìwé àkọsílẹ̀ ewu nípa bí wọ́n ṣe ṣeé ṣe tó àti bí ìpalára wọn ṣe máa pọ̀ tó", standard: "pẹ̀lú ó kéré tán ewu kan nínú oríṣi kọ̀ọ̀kan (ìmújáde, ọjà, owó, òfin àti ènìyàn) àti ohun kan tí o máa ṣe fún ọ̀kọ̀ọ̀kan nínú márùn-ún tó ga jù" },
    { id: "O2", condition: "Fún irè oko tàbí ẹran pàtàkì rẹ, fún ọ̀sẹ̀ mẹ́rin", action: "kọ iye owó sílẹ̀ lọ́sẹ̀ọ̀sẹ̀ láti orísun méjì ó kéré tán, pẹ̀lú iṣẹ́ ìsọfúnni ọjà ti ìjọba níbi tí ó bá wà, kí o sì ṣàpèjúwe ọ̀nà tí iye owó ń lọ", standard: "pẹ̀lú ọjà kan náà, ìpele kan náà àti ìwọ̀n kan náà ní ọ̀sẹ̀ kọ̀ọ̀kan" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìkórè kan, iye owó òní, iye owó tí o retí lẹ́yìn náà àti ìnáwó ìpamọ́", action: "ṣírò iye owó ìdọ́gba ìpamọ́ kí o sì kọ ètò láti tà ní ìpele-ìpele àti láti pín ewu ká", standard: "pẹ̀lú ìṣirò tó tọ́, tí owó tí o nílò nígbà ìkórè sì wà níbẹ̀" },
    { id: "O4", condition: "Tí a bá fún ọ ní ìfilọ̀ àdéhùn títà ṣáájú tàbí àdéhùn iye owó tí kò yí padà", action: "kọ àwọn òfin àdéhùn tí o gbọ́dọ̀ ṣàyẹ̀wò sílẹ̀ kí o sì ṣàlàyé ohun tí o máa jèrè àti ohun tí o máa fi sílẹ̀, pẹ̀lú bí hedging lórí ọjà pàṣípààrọ̀ ṣe ń ṣiṣẹ́", standard: "kí o dárúkọ ó kéré tán òfin márùn-ún, àti èrè kan àti ewu kan" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìfilọ̀ ìbánigbófò onídíwọ̀n fún ohun ọ̀gbìn tàbí ẹran", action: "ṣàyẹ̀wò atọ́ka (index), ìpele ìsanwó (trigger), owó ìbánigbófò (premium), basis risk àti ìwé àṣẹ ilé-iṣẹ́ ìbánigbófò náà", standard: "kí o tó sanwó, kí o sì kọ ìdáhùn ọ̀kọ̀ọ̀kan sílẹ̀" },
    { id: "O6", condition: "Tí o bá mọ owó ìfipamọ́ rẹ àti ìwọ̀n ọ̀wọ́ngógó ti báyìí", action: "fi ó kéré tán ọ̀nà mẹ́ta láti fi owó pamọ́ wé ara wọn kí o sì yan àdàpọ̀ tí ó dáàbò bò ó lọ́wọ́ ọ̀wọ́ngógó àti olè", standard: "kí o dárúkọ ewu kan fún ọ̀nà kọ̀ọ̀kan, kí o sì ṣàyẹ̀wò pé SACCO, báńkì tàbí ilé-iṣẹ́ microfinance èyíkéyìí ní ìwé àṣẹ" }
  ],
  chapters: [
    {
      name: "Orí 1: Rírí ewu àti pípín in ká",
      lessons: [
        {
          title: "Oríṣi ewu oko àti ìwé àkọsílẹ̀ ewu",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọ àwọn ewu pàtàkì oko rẹ sílẹ̀ kí o sì to wọn lẹ́sẹẹsẹ nínú ìwé àkọsílẹ̀ ewu tó rọrùn.",
          text: [
            "Ewu oko pín sí oríṣi márùn-ún. Ewu ìmújáde: ọ̀gbẹlẹ̀, ìkún omi, kòkòrò bí fall armyworm (kòkòrò tí ń jẹ àgbàdo), àrùn ohun ọ̀gbìn àti ẹran, olè. Ewu ọjà: iye owó tí ń wálẹ̀, olùrà tí kò sanwó tàbí tí kò wá kó ọjà, iye owó ohun èlò oko tí ń gòkè. Ewu owó: gbèsè tí o kò lè san, pípàdánù owó ìfipamọ́, ọ̀wọ́ngógó (inflation), iye owó pàṣípààrọ̀ fún ọjà tí a ń kó lọ sí òkèèrè bí kọfí àti kòkó. Ewu òfin: owó-orí tuntun, ìfòfindè kíkó ọjà jáde, ìyípadà nínú òfin ilẹ̀ tàbí òfin ọjà. Ewu ènìyàn: àìsàn, ìfarapa tàbí ikú nínú ẹbí, tàbí pípàdánù òṣìṣẹ́ pàtàkì kan.",
            "Ìwé àkọsílẹ̀ ewu (risk register) jẹ́ tábìlì tí ó ní ìlà kan fún ewu kọ̀ọ̀kan. Fún ọ̀kọ̀ọ̀kan, fún un ní àmì fún bí ó ṣe ṣeé ṣe tó kí ó ṣẹlẹ̀ (1 kéré, 2 àárín, 3 ga) àti bí ìpalára rẹ̀ ṣe máa pọ̀ tó (1 kékeré, 2 àárín, 3 ńlá). Fi àmì méjèèjì lọ́ ara wọn (multiply) láti rí àmì láti 1 sí 9. Àwọn àmì tó ga jù ló máa kọ́kọ́ wà.",
            "Fún ewu tó ga jù kọ̀ọ̀kan, yan ohun tí o máa ṣe: yẹra fún un (má ṣe gbin tòmátì ní oṣù tí òjò pọ̀ jù), dín in kù (irúgbìn tí ó lè fara da ọ̀gbẹlẹ̀, abẹ́rẹ́ àjẹsára bí oníṣègùn ẹranko ṣe gbà ọ́ nímọ̀ràn, ìpamọ́), pín in tàbí gbé e fún ẹlòmíì (ìbánigbófò, àdéhùn, ẹgbẹ́ alájọṣe), tàbí gbà á kí o sì fi owó pamọ́ dè é. Ṣàyẹ̀wò ìwé àkọsílẹ̀ náà ṣáájú àsìkò oko kọ̀ọ̀kan."
          ],
          steps: ["Kọ àwọn ewu oríṣi kọ̀ọ̀kan sílẹ̀: ìmújáde, ọjà, owó, òfin, ènìyàn.", "Fún ọ̀kọ̀ọ̀kan ní àmì bí ó ṣe ṣeé ṣe tó: 1, 2 tàbí 3.", "Fún ọ̀kọ̀ọ̀kan ní àmì ìpalára rẹ̀: 1, 2 tàbí 3.", "Fi àmì méjèèjì lọ́ ara wọn kí o sì to àwọn ewu lẹ́sẹẹsẹ.", "Fún márùn-ún tó ga jù, yan yẹra, dín kù, pín tàbí gbà, àti ohun kan tí o máa ṣe.", "Ṣàyẹ̀wò rẹ̀ ṣáájú àsìkò oko kọ̀ọ̀kan."],
          words: [["Ewu (risk)", "ohun tí ó lè ṣẹlẹ̀ tí ó sì lè pa oko tàbí owó tí o ń rí lára."], ["Ìwé àkọsílẹ̀ ewu (risk register)", "tábìlì tí ó ní àwọn ewu rẹ, bí ọ̀kọ̀ọ̀kan ṣe ṣeé ṣe tó àti bí ìpalára rẹ̀ ṣe pọ̀ tó, àti ohun tí o máa ṣe."], ["Ìṣeéṣe (likelihood)", "bí ó ṣe ṣeé ṣe tó pé nǹkan kan máa ṣẹlẹ̀."], ["Ìpalára (impact)", "bí ìbàjẹ́ ṣe máa pọ̀ tó tí nǹkan náà bá ṣẹlẹ̀."]],
          slides: [
            { title: "Oríṣi ewu oko márùn-ún", bullets: ["Ìmújáde: ojú ọjọ́, kòkòrò, àrùn, olè", "Ọjà: iye owó, olùrà, iye owó ohun èlò oko", "Ewu owó, òfin àti ènìyàn"] },
            { title: "Fún ewu kọ̀ọ̀kan ní àmì", bullets: ["Ìṣeéṣe 1-3 x ìpalára 1-3 = àmì 1-9", "Àwọn àmì tó ga jù ló kọ́kọ́ wà"] },
            { title: "Ọ̀nà mẹ́rin láti dáhùn", bullets: ["Yẹra fún un", "Dín in kù", "Pín in tàbí gbé e fún ẹlòmíì: ìbánigbófò, àdéhùn, ẹgbẹ́", "Gbà á kí o sì fi owó pamọ́ dè é"] }
          ],
          tryIt: "Kọ ìwé àkọsílẹ̀ ewu fún oko rẹ tí ó ní ó kéré tán ewu mẹ́jọ láti inú gbogbo oríṣi márùn-ún. Fún ọ̀kọ̀ọ̀kan ní àmì, tò wọ́n lẹ́sẹẹsẹ, kí o sì kọ ohun tí o máa ṣe (yẹra, dín kù, pín tàbí gbà) fún márùn-ún tó ga jù.",
          youCanNow: "kọ àwọn ewu oko rẹ sílẹ̀, to wọn lẹ́sẹẹsẹ, kí o sì yan ohun tí o máa ṣe fún àwọn tó le jù.",
          quickCheck: [
            { objective: "O1", q: "Iye owó àgbàdo wálẹ̀ ní ìdajì nígbà ìkórè. Irú ewu wo nìyí?", options: ["Ewu ìmújáde", "Ewu ènìyàn", "Ewu ọjà", "Ewu òfin"], answer: 2, why: "Ìyípadà iye owó jẹ́ ewu ọjà." },
            { objective: "O1", q: "Ewu kan ní ìṣeéṣe 3 àti ìpalára 2. Kí ni àmì rẹ̀?", options: ["6", "5", "1", "9"], answer: 0, why: "3 x 2 = 6." }
          ]
        },
        {
          title: "Bí iye owó ṣe ń gòkè-wálẹ̀ àti kíka ọ̀nà tí ọjà ń lọ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kọ iye owó sílẹ̀ lọ́sẹ̀ọ̀sẹ̀ láti orísun méjì ó kéré tán kí o sì ṣàpèjúwe ọ̀nà tí ó ń lọ.",
          text: [
            "Iye owó ohun ọ̀gbìn àti ẹran ń gòkè, ó sì ń wálẹ̀ nítorí àsìkò, ojú ọjọ́, ọjà tí a ń kó wọlé àti èyí tí a ń kó jáde, iye owó epo àti bí àwọn ènìyàn ṣe ń fẹ́ ọjà náà tó. Iye owó ọ̀pọ̀ oúnjẹ pàtàkì máa ń kéré jù nígbà ìkórè, nígbà tí gbogbo ènìyàn ń tà, ó sì máa ń ga ní àwọn oṣù tí ó ṣáájú ìkórè tó kàn. Kódà iye owó tí ìjọba fi lélẹ̀ lè yí padà gan-an láti àsìkò kan sí òmíràn: ní Côte d'Ivoire, iye owó kòkó tí ìjọba ṣe ìdánilójú rẹ̀ ní oko jẹ́ 2,800 CFA franc fún kg kan ní àsìkò ńlá 2025-2026, ìjọba sì fi í sí 1,200 fún kg kan fún àsìkò àárín láti March 2026, lẹ́yìn tí iye owó kòkó lágbàáyé wálẹ̀.",
            "Lo iṣẹ́ ìsọfúnni ọjà ti ìjọba níbi tí wọ́n bá wà. Ní Kenya, KAMIS ti Ilé-iṣẹ́ Ètò Ọ̀gbìn ń tẹ iye owó ọjà jáde. Ní Nàìjíríà, National Bureau of Statistics (ọ́fíìsì ìṣirò orílẹ̀-èdè) ń tẹ ìròyìn oṣooṣù iye owó oúnjẹ jáde ní ìpínlẹ̀ kọ̀ọ̀kan. Ní Ghana, Ghana Commodity Exchange ń tẹ iye owó òwò rẹ̀ jáde. Fi ìròyìn ọjà lórí rédíò, ẹgbẹ́ alájọṣe rẹ àti ó kéré tán olùrà méjì kún un.",
            "Kọ àkọsílẹ̀ iye owó: ní ọ̀sẹ̀ kọ̀ọ̀kan, kọ ọjọ́, ọjà tàbí orísun, irè oko náà, ìpele (grade) àti ìwọ̀n (unit) rẹ̀ (fún àpẹẹrẹ àpò àgbàdo gbígbẹ 90 kg), àti iye owó. Lẹ́yìn ọ̀sẹ̀ mẹ́rin tàbí jù bẹ́ẹ̀ lọ, wo ọ̀nà tí ó ń lọ: ó ń gòkè, ó ń wálẹ̀ tàbí ó dúró. Fi wé àwọn oṣù kan náà ní ọdún tó kọjá tí o bá lè ṣe é. Ọ̀nà tí iye owó ń lọ jẹ́ ìtọ́sọ́nà, kì í ṣe ìlérí: iye owó lè yí padà kíákíá."
          ],
          steps: ["Yan irè oko pàtàkì rẹ, ìpele rẹ̀ àti ìwọ̀n rẹ̀.", "Yan ó kéré tán orísun méjì, pẹ̀lú iṣẹ́ ti ìjọba níbi tí ó bá wà.", "Ní ọ̀sẹ̀ kọ̀ọ̀kan kọ: ọjọ́, orísun, irè oko, ìpele, ìwọ̀n, iye owó.", "Lẹ́yìn ọ̀sẹ̀ mẹ́rin, sàmì sí ọ̀nà tí ó ń lọ: ó ń gòkè, ó ń wálẹ̀ tàbí ó dúró.", "Fi wé àwọn oṣù kan náà ní ọdún tó kọjá.", "Pín àkọsílẹ̀ náà pẹ̀lú ẹgbẹ́ rẹ."],
          words: [["Iṣẹ́ ìsọfúnni ọjà", "iṣẹ́ tí ń kó iye owó jọ láti àwọn ọjà tí ó sì ń pín in, lórí wẹ́ẹ̀bù, SMS tàbí rédíò."], ["Ọ̀nà tí iye owó ń lọ (trend)", "ibi tí iye owó ń lọ ní gbogbogbò láàárín ọ̀sẹ̀ tàbí oṣù mélòó kan."], ["Iye owó ní oko (farmgate price)", "iye owó tí a san fún àgbẹ̀ ní oko, kí a tó gbé e lọ sí ọjà."]],
          slides: [
            { title: "Ìdí tí iye owó fi ń gòkè-wálẹ̀", bullets: ["Àsìkò, ojú ọjọ́, ọjà tí a ń kó wọlé àti jáde", "Iye owó epo àti bí a ṣe ń fẹ́ ọjà náà tó", "Ó sábà máa ń kéré jù nígbà ìkórè"] },
            { title: "Kódà iye owó tí a fi lélẹ̀ ń yí padà", bullets: ["Kòkó Côte d'Ivoire: 2,800 CFA/kg, àsìkò ńlá 2025-26", "Wọ́n fi í sí 1,200 CFA/kg láti March 2026", "Lẹ́yìn tí iye owó lágbàáyé wálẹ̀"] },
            { title: "Ibi tí o ti lè rí iye owó", bullets: ["Kenya: KAMIS", "Nàìjíríà: iye owó oúnjẹ oṣooṣù ti NBS", "Ghana: òwò Commodity Exchange; rédíò; olùrà"] },
            { title: "Àkọsílẹ̀ iye owó ọ̀sẹ̀ rẹ", bullets: ["Ọjọ́, orísun, irè oko, ìpele, ìwọ̀n, iye owó", "Lẹ́yìn ọ̀sẹ̀ 4: ó ń gòkè, ó ń wálẹ̀ tàbí ó dúró?", "Ọ̀nà tí ó ń lọ jẹ́ ìtọ́sọ́nà, kì í ṣe ìlérí"] }
          ],
          sources: [KAMIS, NBS, GCX, CI_COCOA],
          tryIt: "Bẹ̀rẹ̀ àkọsílẹ̀ iye owó fún irè oko tàbí ẹran pàtàkì rẹ lónìí. Kọ iye owó ọ̀sẹ̀ yìí láti orísun méjì, pẹ̀lú irè oko, ìpele àti ìwọ̀n, kí o sì ṣètò ìrántí lórí fóònù rẹ fún ọjọ́ kan náà ní ọ̀sẹ̀ kọ̀ọ̀kan.",
          youCanNow: "kọ iye owó sílẹ̀ lọ́sẹ̀ọ̀sẹ̀ láti orísun ìjọba àti ti àdúgbò, kí o sì ṣàpèjúwe ọ̀nà tí iye owó ń lọ.",
          quickCheck: [
            { objective: "O2", q: "Kí ló dé tí o fi gbọ́dọ̀ kọ ìpele àti ìwọ̀n pẹ̀lú iye owó kọ̀ọ̀kan nínú àkọsílẹ̀ rẹ?", options: ["Kí àkọsílẹ̀ náà lè dà bí ti ìjọba", "Àwọn olùrà fẹ́ rí i", "Kò pọn dandan", "Kí o lè fi nǹkan kan náà wé ara wọn ní ọ̀sẹ̀ kọ̀ọ̀kan"], answer: 3, why: "A kò lè fi iye owó àpò àgbàdo tútù 50 kg wé àpò àgbàdo gbígbẹ 90 kg." },
            { objective: "O2", q: "Láàárín ọ̀sẹ̀ márùn-ún, iye owó tòmátì ní ọjà kan jẹ́ 400, 420, 450, 470, 500 fún apẹ̀rẹ̀ kan. Ọ̀nà wo ni iye owó ń lọ?", options: ["Ó ń wálẹ̀", "Ó ń gòkè", "Ó dúró", "A kò lè mọ̀"], answer: 1, why: "Ní ọ̀sẹ̀ kọ̀ọ̀kan, iye owó ga ju ti ọ̀sẹ̀ tó ṣáájú lọ." }
          ]
        },
        {
          title: "Pípín ewu ká: oríṣiríṣi iṣẹ́, títà ní ìpele-ìpele àti ìpamọ́",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ṣírò bóyá ìpamọ́ máa mú èrè wá kí o sì kọ ètò láti tà ní ìpele-ìpele.",
          text: [
            "Oríṣiríṣi iṣẹ́ (diversification) túmọ̀ sí pé o kò kó gbogbo ẹyin sínú agbọ̀n kan: ohun ọ̀gbìn méjì tàbí jù bẹ́ẹ̀ lọ tí àsìkò tàbí ọjà wọn yàtọ̀, ewúrẹ́ tàbí adìẹ díẹ̀, ẹja, igi, tàbí owó tí ó ń wọlé láti ibòmíì yàtọ̀ sí oko. Tí ọ̀kan bá kùnà, òmíràn ṣì lè mú owó wá. Má ṣe pín ara rẹ ká débi pé o kò lè ṣe ọ̀kankan nínú wọn dáadáa.",
            "Títà ní ìpele-ìpele túmọ̀ sí títa apá kan ìkórè ní àwọn àkókò ọ̀tọ̀ọ̀tọ̀ dípò títa gbogbo rẹ̀ lẹ́ẹ̀kan. Fún àpẹẹrẹ, ta ìdá mẹ́ta nígbà ìkórè láti san owó ilé-ìwé àti gbèsè, ìdá mẹ́ta lẹ́yìn oṣù méjì, àti ìdá mẹ́ta lẹ́yìn oṣù mẹ́rin. O kò ní ta gbogbo rẹ̀ ní iye owó tó kéré jù, o kò sì ní fi gbogbo rẹ̀ ta tẹ́tẹ́ lórí iye owó gíga tí ó lè má dé.",
            "Ìpamọ́ máa ń mú èrè wá nìkan tí iye owó ìgbà tó ń bọ̀ bá bo ìnáwó ìpamọ́ àti àdánù. Iye owó ìdọ́gba ìpamọ́ = (iye owó ìkórè x àpò + ìnáwó ìpamọ́) / àpò tí o máa tà lẹ́yìn náà. Àpẹẹrẹ (nọ́mbà àròsọ ní shilling Kenya): àpò àgbàdo 10, iye owó ìkórè 3,000 fún àpò kan, ìnáwó ìpamọ́ 3,000 fún oṣù mẹ́rin (àpò hermetic, ilé ìpamọ́, àyẹ̀wò). Iye owó ìdọ́gba = (30,000 + 3,000) / 10 = 3,300 fún àpò kan. Tí iye owó bá dé 4,200 o jèrè; tí ó bá dé 3,200 nìkan o pàdánù. Pa ọkà tí ó mọ́ tí ó sì gbẹ nìkan mọ́ sínú àpò hermetic tàbí ilé ìkẹ́rùsí tí a fọwọ́ sí, kí o sì máa ṣàyẹ̀wò rẹ̀ fún kòkòrò àti èbú."
          ],
          steps: ["Kọ ohun mìíràn tí o lè gbìn, sìn tàbí ṣe láti rí owó sílẹ̀, kí ìkùnà kan má ba ọ jẹ́.", "Ṣírò iye owó tí o nílò lọ́wọ́ nígbà ìkórè.", "Ṣètò láti ta tó láti rí owó yẹn nígbà ìkórè, kí o sì pa èyí tó kù mọ́ láti tà ní ìpele-ìpele.", "Iye owó ìdọ́gba ìpamọ́ = (iye owó ìkórè x àpò + ìnáwó ìpamọ́) / àpò.", "Fi wé ọ̀nà tí iye owó ń lọ nínú àkọsílẹ̀ rẹ.", "Pa irè oko tí ó mọ́ tí ó sì gbẹ nìkan mọ́ láìléwu, kí o sì máa ṣàyẹ̀wò rẹ̀."],
          words: [["Oríṣiríṣi iṣẹ́ (diversification)", "pípín iṣẹ́ oko àti owó tí ó ń wọlé sí ọ̀pọ̀ iṣẹ́, kí ìkùnà kan má ba ọ jẹ́."], ["Títà ní ìpele-ìpele", "títa ìkórè ní apá-apá ní àwọn àkókò ọ̀tọ̀ọ̀tọ̀ dípò títa gbogbo rẹ̀ lẹ́ẹ̀kan."], ["Iye owó ìdọ́gba ìpamọ́ (storage break-even price)", "iye owó ìgbà tó ń bọ̀ tí o nílò láti bo iye owó ìkórè tí o kò gbà pẹ̀lú ìnáwó ìpamọ́."], ["Àpò hermetic", "àpò ìpamọ́ tí afẹ́fẹ́ kò lè wọ̀, tí ó ń dá èémí kòkòrò dúró, kí ọkà lè wà láìléwu láìsí oògùn kẹ́míkà."]],
          slides: [
            { title: "Ṣe oríṣiríṣi iṣẹ́", bullets: ["Ohun ọ̀gbìn tí àsìkò tàbí ọjà wọn yàtọ̀", "Ẹran kékeré, ẹja, igi, owó láti ibòmíì", "Kì í ṣe èyí tí ó pọ̀ débi pé o kò lè bójú tó wọn"] },
            { title: "Tà ní ìpele-ìpele", bullets: ["Ìdá mẹ́ta nígbà ìkórè fún owó tí o nílò", "Ìdá mẹ́ta lẹ́yìn oṣù 2, ìdá mẹ́ta lẹ́yìn oṣù 4", "O kò fi gbogbo rẹ̀ ta tẹ́tẹ́ lórí iye owó"] },
            { title: "Ṣé ìpamọ́ máa mú èrè wá? (àpẹẹrẹ KES)", bullets: ["(3,000 x 10 + 3,000) / 10 = 3,300 fún àpò kan", "Iye owó 4,200: èrè; iye owó 3,200: àdánù", "Fi wé àkọsílẹ̀ iye owó rẹ"] },
            { title: "Pa á mọ́ láìléwu", bullets: ["Ọkà tí ó mọ́ tí ó sì gbẹ nìkan", "Àpò hermetic tàbí ilé ìkẹ́rùsí tí a fọwọ́ sí", "Ṣàyẹ̀wò fún kòkòrò àti èbú"] }
          ],
          sources: [PICS],
          tryIt: "Fún irè oko pàtàkì rẹ, kọ iye àpò tàbí kg tí o retí, iye owó tí o nílò lọ́wọ́ nígbà ìkórè, àti iye tí o máa tà nígbà ìkórè, lẹ́yìn oṣù méjì àti lẹ́yìn oṣù mẹ́rin. Ṣírò iye owó ìdọ́gba ìpamọ́ fún apá tí o máa pamọ́.",
          youCanNow: "ṣírò bóyá ìpamọ́ máa mú èrè wá, ṣètò láti tà ní ìpele-ìpele, kí o sì pín ewu ká sí ju iṣẹ́ kan lọ.",
          quickCheck: [
            { objective: "O3", q: "Iye owó ìkórè jẹ́ 5,000 fún àpò kan, àpò 20, ìnáwó ìpamọ́ 10,000. Kí ni iye owó ìdọ́gba ìpamọ́?", options: ["5,000", "10,500", "5,500", "500"], answer: 2, why: "(5,000 x 20 + 10,000) / 20 = 110,000 / 20 = 5,500 fún àpò kan." },
            { objective: "O3", q: "Kí ni àǹfààní pàtàkì títà ní ìpele-ìpele?", options: ["O kò ní ta gbogbo rẹ̀ ní iye owó tó kéré jù, o kò sì ní fi gbogbo rẹ̀ ta tẹ́tẹ́ lórí iye owó gíga", "Àwọn olùrà máa ń san jù fún ọjà kékeré nígbà gbogbo", "O kò ní nílò ìpamọ́ láéláé", "Ó mú gbogbo ewu iye owó kúrò"], answer: 0, why: "Títà ní apá-apá ń pín ewu iye owó ká sí ọjọ́ mélòó kan." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Rírí ewu àti pípín in ká",
        questions: [
          { objective: "O1", q: "Èwo ni ewu ìmújáde?", options: ["Owó-orí tuntun lórí kíkó ọjà jáde", "Olùrà tí ó ń pẹ́ kí ó tó sanwó", "Ọ̀wọ́ngógó", "Fall armyworm nínú àgbàdo rẹ"], answer: 3, why: "Kòkòrò àti ojú ọjọ́ ń nípa lórí ohun tí o ń mú jáde, nítorí náà ewu ìmújáde ni wọ́n." },
          { objective: "O1", q: "Rírà ìbánigbófò onídíwọ̀n fún ọ̀gbẹlẹ̀ jẹ́ ọ̀nà wo láti dáhùn sí ewu?", options: ["Yẹra fún un", "Pín in tàbí gbé e fún ẹlòmíì", "Gbà á", "Ṣàìka á sí"], answer: 1, why: "Ìbánigbófò ń gbé apá kan àdánù fún ilé-iṣẹ́ ìbánigbófò." },
          { objective: "O2", q: "Èwo ni iṣẹ́ iye owó ọjà ti ìjọba ní Kenya?", options: ["KAMIS láti Ilé-iṣẹ́ Ètò Ọ̀gbìn", "WhatsApp status oníṣòwò kan", "Àméfò aládùúgbò kan", "Ìwé ẹ̀rí ìsanwó ti ọdún tó kọjá"], answer: 0, why: "KAMIS ni ètò ìsọfúnni ọjà ti Ilé-iṣẹ́ Ètò Ọ̀gbìn." },
          { objective: "O3", q: "Iye owó ìkórè jẹ́ 2,000 fún àpò kan, àpò 10, ìnáwó ìpamọ́ 4,000. Iye owó lẹ́yìn náà jẹ́ 2,300. Ṣé ìpamọ́ mú èrè wá?", options: ["Bẹ́ẹ̀ ni, nítorí 2,300 ju 2,000 lọ", "Bẹ́ẹ̀ ni, ìpamọ́ máa ń mú èrè wá nígbà gbogbo", "Rárá, iye owó ìdọ́gba jẹ́ 2,400, nítorí náà àdánù ni", "A kò lè ṣírò rẹ̀"], answer: 2, why: "(2,000 x 10 + 4,000) / 10 = 2,400; 2,300 kéré sí i." },
          { objective: "O3", q: "Àgbẹ̀ kan ń gbin tòmátì nìkan fún olùrà kan ṣoṣo. Kí ló máa pín ewu náà ká?", options: ["Gbígbin tòmátì sí i fún olùrà kan náà", "Fífi ohun ọ̀gbìn tí àsìkò rẹ̀ yàtọ̀ kún un àti wíwá olùrà kejì", "Títa gbogbo rẹ̀ ní ọjọ́ ìkórè", "Dídá kíkọ àkọsílẹ̀ dúró"], answer: 1, why: "Ohun ọ̀gbìn kejì àti olùrà kejì túmọ̀ sí pé ìkùnà kan kò ní gba gbogbo nǹkan." }
        ]
      }
    },
    {
      name: "Orí 2: Gbígbé ewu fún ẹlòmíì àti dídáàbò bo owó rẹ",
      lessons: [
        {
          title: "Àdéhùn iye owó tí kò yí padà, hedging àti ọjà pàṣípààrọ̀",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kọ àwọn òfin tí o gbọ́dọ̀ ṣàyẹ̀wò nínú àdéhùn iye owó tí kò yí padà sílẹ̀ kí o sì ṣàlàyé ohun tí hedging túmọ̀ sí.",
          text: [
            "Àdéhùn títà ṣáájú (forward contract) tàbí àdéhùn iye owó tí kò yí padà jẹ́ àdéhùn tí o ṣe báyìí láti ta iye kan àti ìpele kan ní iye owó kan ní ọjọ́ kan tó ń bọ̀. O jèrè ìdánilójú: o mọ iye owó rẹ kí ìkórè tó dé, èyí sì ń ràn ọ́ lọ́wọ́ láti ṣètò àti láti yá owó. O fi nǹkan kan sílẹ̀: tí iye owó ọjà bá gòkè, iye owó tí ẹ fohùn ṣọ̀kan lé lórí ni wàá ṣì gbà. Tí ìkórè rẹ bá kùnà tàbí tí o bá tà fún ẹlòmíì (side-selling), o lè ba àdéhùn náà jẹ́ kí o sì jẹ owó ìtanràn. Kí o tó fọwọ́ sí i, ṣàyẹ̀wò: irè oko àti ìpele rẹ̀, iye rẹ̀, iye owó tàbí bí a ṣe máa pinnu rẹ̀, ọjọ́ àti ibi ìfijíṣẹ́, ẹni tí ó máa san owó ọkọ̀, àyẹ̀wò dídára àti kíkọ ọjà, ọjọ́ àti ọ̀nà ìsanwó, àti ohun tí ó máa ṣẹlẹ̀ tí ìkórè bá kùnà tàbí tí olùrà kò bá wá kó ọjà.",
            "Hedging túmọ̀ sí dídi ipò kan mú tí ó máa jèrè nígbà tí iye ohun ọ̀gbìn rẹ bá wálẹ̀, kí àwọn méjèèjì lè dọ́gba. Lórí ọjà pàṣípààrọ̀, àwọn oníṣòwò ńlá àti àwọn ilé-iṣẹ́ tí ń ṣe ọjà ń ṣe èyí pẹ̀lú futures: àdéhùn tí a ti ṣètò láti rà tàbí láti tà lẹ́yìn náà ní iye owó tí a fohùn ṣọ̀kan lé lórí lónìí. Tí iye owó bá wálẹ̀, ipò futures máa jèrè nígbà tí ohun ọ̀gbìn ń mú owó díẹ̀ wá; tí iye owó bá gòkè, ipò futures máa pàdánù nígbà tí ohun ọ̀gbìn ń mú owó púpọ̀ wá. Ó nílò alágbàtà (broker), owó ìdógò tí a ń pè ní margin tí wọ́n lè béèrè lójijì, àti òye. Ó lè pàdánù owó, kò sì yẹ kí o gbìyànjú rẹ̀ láìsí ìdálẹ́kọ̀ọ́ àti ìmọ̀ràn.",
            "Ní Áfíríkà, Securities and Exchange Commission (àjọ alábòójútó ọjà owó) ti Nàìjíríà ló fún Nigeria Commodity Exchange (NCX) ní ìwé àṣẹ, NCX sì ń pèsè òwò, ìpinnu iye owó, ìpamọ́ àti ìdíwọ̀n ìpele ọjà oko. Ghana Commodity Exchange (GCX), tí Securities and Exchange Commission ti Ghana ń bójú tó, bẹ̀rẹ̀ òwò spot àgbàdo orí ẹ̀rọ ní 2018, ó sì ń so àwọn àgbẹ̀ pọ̀ mọ́ àwọn ilé ìkẹ́rùsí tí a fọwọ́ sí. Ọ̀pọ̀ àgbẹ̀ kékeré ń dé ọjà pàṣípààrọ̀ nípasẹ̀ ẹgbẹ́ alájọṣe, olùkójọ ọjà tàbí ilé ìkẹ́rùsí tí a fọwọ́ sí, kì í ṣe nípa ṣíṣòwò fúnra wọn. Ẹ̀kọ́ yìí kò gbà ọ́ níyànjú láti ṣòwò. Ẹnikẹ́ni tí ó bá ṣèlérí èrè fún ọ láti inú òwò ọjà oko lè jẹ́ onjìbìtì: ṣàyẹ̀wò pẹ̀lú àjọ alábòójútó ọjà owó."
          ],
          steps: ["Ka gbogbo àdéhùn náà, sókè pẹ̀lú ẹgbẹ́ rẹ tí ó bá ṣeé ṣe.", "Ṣàyẹ̀wò irè oko, ìpele, iye, iye owó, ọjọ́ àti ibi ìfijíṣẹ́, àti ọkọ̀.", "Ṣàyẹ̀wò àyẹ̀wò dídára, kíkọ ọjà, ọjọ́ àti ọ̀nà ìsanwó.", "Béèrè ohun tí ó máa ṣẹlẹ̀ tí ìkórè bá kùnà tàbí tí olùrà kò bá wá kó ọjà.", "Fi iye owó tí kò yí padà wé iye owó ìdọ́gba rẹ àti àkọsílẹ̀ iye owó rẹ.", "Béèrè lọ́wọ́ ẹgbẹ́ alájọṣe rẹ, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí agbẹjọ́rò kí o tó fọwọ́ sí i."],
          words: [["Àdéhùn títà ṣáájú (forward contract)", "àdéhùn tí a ṣe báyìí láti ta iye kan ní iye owó kan ní ọjọ́ kan tó ń bọ̀."], ["Hedging", "dídi ipò kan mú tí ó máa jèrè nígbà tí iye ohun ọ̀gbìn rẹ bá wálẹ̀, kí àdánù lè dọ́gba."], ["Futures", "àdéhùn tí a ti ṣètò, tí a ń tà lórí ọjà pàṣípààrọ̀, láti rà tàbí ta ọjà oko lẹ́yìn náà ní iye owó tí a fohùn ṣọ̀kan lé lórí báyìí."], ["Ọjà pàṣípààrọ̀ (commodity exchange)", "ọjà tí àjọ ìjọba ń bójú tó, níbi tí olùrà àti olùtà ti ń ṣòwò ohun ọ̀gbìn àti ọjà mìíràn pẹ̀lú ìpele àti òfin tí a fohùn ṣọ̀kan lé lórí."], ["Side-selling", "títa ọjà tí o ti ṣèlérí fún olùrà kan fún ẹlòmíì."]],
          slides: [
            { title: "Àdéhùn iye owó tí kò yí padà", bullets: ["Iye, ìpele àti iye owó tí a fi lélẹ̀ fún ọjọ́ iwájú", "Èrè: iye owó tí o mọ̀ láti ṣètò àti láti yá owó", "Ohun tí o fi sílẹ̀: owó àfikún tí iye owó bá gòkè"] },
            { title: "Ṣàyẹ̀wò gbogbo òfin", bullets: ["Irè oko, ìpele, iye, iye owó", "Ọjọ́ ìfijíṣẹ́, ibi, ọkọ̀", "Àyẹ̀wò dídára, kíkọ ọjà, ìsanwó", "Ìkórè tí ó kùnà; olùrà tí kò wá kó ọjà"] },
            { title: "Ohun tí hedging túmọ̀ sí", bullets: ["Ipò tí ó ń jèrè nígbà tí iye ohun ọ̀gbìn rẹ bá wálẹ̀", "Futures nílò alágbàtà, margin àti òye", "Ó lè pàdánù owó: kì í ṣe fún olùbẹ̀rẹ̀"] },
            { title: "Ọjà pàṣípààrọ̀ ní Áfíríkà", bullets: ["Nàìjíríà: NCX, SEC ló fún un ní ìwé àṣẹ", "Ghana: GCX, òwò spot àgbàdo láti 2018", "Ọ̀pọ̀ àgbẹ̀ ń wọlé nípasẹ̀ ẹgbẹ́ alájọṣe tàbí ilé ìkẹ́rùsí"] }
          ],
          sources: [NCX, GCX, GCX_FIRST],
          tryIt: "Mú àdéhùn olùrà gidi tàbí àpẹẹrẹ kan. Kọ ọ̀kọ̀ọ̀kan nínú òfin mẹ́jọ tí ó wà nínú àwọn ìgbésẹ̀ àti ohun tí àdéhùn náà sọ (tàbí \"kò sí\"). Lẹ́yìn náà kọ ohun kan tí o máa jèrè àti ewu kan tí o máa gbà tí o bá fọwọ́ sí i.",
          youCanNow: "ṣàyẹ̀wò àdéhùn iye owó tí kò yí padà ní òfin kọ̀ọ̀kan, kí o sì ṣàlàyé ohun tí hedging lórí ọjà pàṣípààrọ̀ túmọ̀ sí àti ìdí tí ó fi ní ewu.",
          quickCheck: [
            { objective: "O4", q: "O fọwọ́ sí iye owó tí kò yí padà ti 30,000 fún àpò kan. Ní ọjọ́ ìfijíṣẹ́, iye owó ọjà jẹ́ 36,000. Kí ni wàá gbà?", options: ["36,000 fún àpò kan", "33,000 fún àpò kan", "Kò sí nǹkan", "30,000 fún àpò kan, iye owó tí ẹ fohùn ṣọ̀kan lé lórí"], answer: 3, why: "Àdéhùn iye owó tí kò yí padà ń san iye owó tí ẹ fohùn ṣọ̀kan lé lórí kódà tí iye owó ọjà bá gòkè." },
            { objective: "O4", q: "Àjèjì kan fẹ́ bá ọ ṣòwò futures ọjà oko pẹ̀lú \"èrè tí ó dájú\". Kí ni o yẹ kí o ṣe?", options: ["Kọ̀ ọ́ kí o sì ṣàyẹ̀wò ilé-iṣẹ́ náà pẹ̀lú àjọ alábòójútó ọjà owó", "Fi owó ìdógò kékeré ránṣẹ́ láti dán an wò", "Fún wọn ní PIN owó orí fóònù rẹ kí wọ́n lè ṣòwò", "Fọwọ́ sí i kíákíá kí ìfilọ̀ náà tó parí"], answer: 0, why: "Kò sí ẹni tí ó lè ṣe ìdánilójú èrè òwò; àmì jìbìtì ni." }
          ]
        },
        {
          title: "Ìbánigbófò onídíwọ̀n fún ohun ọ̀gbìn àti ẹran",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò atọ́ka, ìpele ìsanwó, owó ìbánigbófò, basis risk àti ìwé àṣẹ ìfilọ̀ ìbánigbófò onídíwọ̀n.",
          text: [
            "Ìbánigbófò lásán ń rán ẹnìkan wá láti wọn àdánù lórí oko rẹ. Ìbánigbófò onídíwọ̀n (index insurance) ń sanwó nígbà tí atọ́ka (index) kan bá kọjá ìpele kan tí a fi lélẹ̀, tí a ń pè ní trigger (ìpele ìsanwó): fún àpẹẹrẹ, òjò tí sátẹ́láìtì tàbí ibùdó ojú ọjọ́ wọ̀n bá kéré ju bí ó ti máa ń rí, èso àpapọ̀ ní agbègbè rẹ bá wálẹ̀, tàbí àwòrán sátẹ́láìtì bá fi hàn pé koríko pápá ẹran ń gbẹ. Kò sí ẹni tí ó máa wá sí oko rẹ, nítorí náà ó lè dín owó kù kí ó sì sanwó kíákíá.",
            "Àpẹẹrẹ: ACRE Africa, alágbàtà ìbánigbófò tó ní àṣẹ tí ó wà ní Kenya, ń bá àwọn ilé-iṣẹ́ ìbánigbófò àdúgbò ṣiṣẹ́ láti pèsè ìbánigbófò onídíwọ̀n ojú ọjọ́, ti èso àpapọ̀ agbègbè àti ti ẹran, tí wọ́n sábà máa ń tà nípasẹ̀ ẹgbẹ́ àgbẹ̀, tí wọ́n sì ń san nípasẹ̀ owó orí fóònù. Ìjọba Kenya ń ṣe Kenya Livestock Insurance Programme (KLIP), tí wọ́n bẹ̀rẹ̀ ní 2015, tí ó ń lo ìbánigbófò ẹran onídíwọ̀n tí a ṣe pẹ̀lú ILRI: ìjọba ń san owó ìbánigbófò fún àwọn darandaran aláìní tí wọ́n forúkọ sílẹ̀, ìsanwó sì ń wá nígbà tí àwòrán sátẹ́láìtì bá fi hàn pé pápá ẹran ń kùnà, kí àwọn darandaran lè rí owó láti pa ẹran wọn mọ́ láàyè. Ní Senegal, CNAAS, ilé-iṣẹ́ ìbánigbófò àgbẹ̀ ti orílẹ̀-èdè, ń bá ohun ọ̀gbìn àti ẹran ṣe ìbánigbófò, ó sì ń pèsè ìbánigbófò onídíwọ̀n.",
            "Àìlera ńlá rẹ̀ ni basis risk: atọ́ka náà lè má bá ti oko rẹ mu. Ohun ọ̀gbìn rẹ lè bàjẹ́ nítorí yìnyín àdúgbò nígbà tí òjò agbègbè náà dà bí ó ti máa ń rí, nítorí náà kò sí ìsanwó, tàbí atọ́ka lè fa ìsanwó nígbà tí oko rẹ ṣe dáadáa. Kí o tó sanwó, béèrè: ewu wo ni ó bò, atọ́ka wo ni àti ibo ni wọ́n ti ń wọ̀n ọ́n, kí ni ìpele ìsanwó, iye owó wo ni ìsanwó, kí ni owó ìbánigbófò àti ọjọ́ ìkẹyìn láti rà á, báwo àti ìgbà wo ni ó máa sanwó, àti ṣé ilé-iṣẹ́ ìbánigbófò náà ní ìwé àṣẹ (Kenya: Insurance Regulatory Authority; Nàìjíríà: NAICOM; Ghana: National Insurance Commission; àwọn orílẹ̀-èdè CFA franc: CIMA àti ọ́fíìsì ìbánigbófò orílẹ̀-èdè náà)."
          ],
          steps: ["Béèrè ewu tí ó bò: ọ̀gbẹlẹ̀, òjò tí ó pọ̀ jù, àdánù èso agbègbè tàbí ìkùnà pápá ẹran.", "Béèrè kí ni atọ́ka náà àti ibi tí wọ́n ti ń wọ̀n ọ́n.", "Béèrè ìpele ìsanwó àti iye owó ìsanwó.", "Béèrè owó ìbánigbófò, ọjọ́ ìkẹyìn láti rà á àti bí ìsanwó ṣe máa dé ọ̀dọ̀ rẹ.", "Ronú nípa basis risk: ṣé atọ́ka náà máa bá ti oko rẹ mu?", "Ṣàyẹ̀wò pé àjọ alábòójútó ìbánigbófò ti fún ilé-iṣẹ́ tàbí aṣojú náà ní ìwé àṣẹ."],
          words: [["Ìbánigbófò onídíwọ̀n (index insurance)", "ìbánigbófò tí ó ń sanwó nígbà tí atọ́ka tí a wọ̀n, bí òjò tàbí pápá ẹran, bá kọjá ìpele tí a fi lélẹ̀, kì í ṣe lẹ́yìn ìbẹ̀wò sí oko rẹ."], ["Ìpele ìsanwó (trigger)", "ìpele atọ́ka tí ó ń mú kí ilé-iṣẹ́ ìbánigbófò sanwó."], ["Owó ìbánigbófò (premium)", "owó tí o ń san fún ààbò ìbánigbófò."], ["Basis risk", "ewu pé atọ́ka náà kò bá ohun tí ó ṣẹlẹ̀ gan-an lórí oko rẹ mu."]],
          slides: [
            { title: "Bí ìbánigbófò onídíwọ̀n ṣe ń ṣiṣẹ́", bullets: ["Ó ń sanwó nígbà tí atọ́ka bá kọjá ìpele ìsanwó", "Òjò, èso agbègbè tàbí pápá ẹran láti sátẹ́láìtì", "Kò sí ìbẹ̀wò sí oko: ó dín owó kù, ó sì yára"] },
            { title: "Àpẹẹrẹ", bullets: ["ACRE Africa: atọ́ka ojú ọjọ́, èso agbègbè, ẹran", "KLIP Kenya: ìjọba ń san owó ìbánigbófò fún darandaran", "Senegal: ìbánigbófò ohun ọ̀gbìn àti ẹran CNAAS"] },
            { title: "Basis risk", bullets: ["Atọ́ka lè má bá ti oko rẹ mu", "Yìnyín àdúgbò: àdánù ṣùgbọ́n kò sí ìsanwó", "Béèrè bí ibi ìwọ̀n ṣe sún mọ́ ọ tó"] },
            { title: "Béèrè kí o tó sanwó", bullets: ["Ewu, atọ́ka, ìpele ìsanwó, ìsanwó", "Owó ìbánigbófò, ọjọ́ ìkẹyìn, bí ó ṣe ń sanwó", "Ìwé àṣẹ? IRA, NAICOM, NIC, CIMA"] }
          ],
          sources: [ACRE, IBLI, ILRI_KLIP, CNAAS],
          tryIt: "Béèrè lọ́wọ́ ẹgbẹ́ alájọṣe rẹ, olùtà ohun èlò oko tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ nípa ìbánigbófò onídíwọ̀n kan nítòsí rẹ (tàbí lo àpẹẹrẹ kan). Kọ ìdáhùn sí ìbéèrè mẹ́jọ tí ó wà nínú àwọn ìgbésẹ̀, kí o sì kọ ọ̀nà kan tí basis risk lè gbà kan oko rẹ.",
          youCanNow: "ṣàyẹ̀wò atọ́ka, ìpele ìsanwó, owó ìbánigbófò, basis risk àti ìwé àṣẹ ìfilọ̀ ìbánigbófò onídíwọ̀n kí o tó sanwó.",
          quickCheck: [
            { objective: "O5", q: "Kí ló ń mú kí ìbánigbófò onídíwọ̀n sanwó?", options: ["Ilé-iṣẹ́ ìbánigbófò tí ó wá sí oko rẹ", "Atọ́ka tí ó kọjá ìpele ìsanwó", "Ìwọ tí o béèrè ìsanwó", "Àdánù èyíkéyìí tí o ròyìn"], answer: 1, why: "Ìbánigbófò onídíwọ̀n ń sanwó gẹ́gẹ́ bí atọ́ka tí a wọ̀n, kì í ṣe lẹ́yìn ìbẹ̀wò sí oko." },
            { objective: "O5", q: "Yìnyín àdúgbò ba àgbàdo rẹ jẹ́, ṣùgbọ́n atọ́ka òjò agbègbè dà bí ó ti máa ń rí. Kí ni a ń pe èyí?", options: ["Owó ìbánigbófò (premium)", "Ìpele ìsanwó (trigger)", "Basis risk", "Hedging"], answer: 2, why: "Basis risk ni nígbà tí atọ́ka kò bá ohun tí ó ṣẹlẹ̀ lórí oko rẹ mu." }
          ]
        },
        {
          title: "Ọ̀wọ́ngógó àti pípa owó ìfipamọ́ rẹ mọ́",
          objectives: ["O6"],
          minutes: 5,
          goal: "Fi àwọn ọ̀nà láti fi owó pamọ́ wé ara wọn kí o sì yan àdàpọ̀ tí ó dáàbò bò ó lọ́wọ́ ọ̀wọ́ngógó àti olè.",
          text: [
            "Ọ̀wọ́ngógó (inflation) túmọ̀ sí pé iye owó nǹkan ń gòkè ní gbogbogbò, nítorí náà owó kan náà ń ra nǹkan díẹ̀. Àpẹẹrẹ: tí iye owó bá gòkè ní 10% láàárín ọdún kan, 10,000 tí o fi pamọ́ sínú agolo nílé máa ra ohun tí nǹkan bí 9,100 ń rà lónìí nìkan. Wá ìwọ̀n ọ̀wọ́ngógó ti báyìí láti báńkì àpapọ̀ tàbí ọ́fíìsì ìṣirò orílẹ̀-èdè rẹ (Kenya: Central Bank of Kenya; Nàìjíríà: National Bureau of Statistics; àwọn orílẹ̀-èdè CFA franc ní Ìwọ̀-oòrùn Áfíríkà: BCEAO).",
            "Ọ̀nà kọ̀ọ̀kan láti fi owó pamọ́ ní ewu tirẹ̀. Owó lọ́wọ́ nílé: ó rọrùn láti rí, ṣùgbọ́n ọ̀wọ́ngógó ń dín iye rẹ̀ kù, olè sì lè jí i. Ẹgbẹ́ ìfowópamọ́ tàbí VSLA: ó ń kọ́ni ní àṣà ìfowópamọ́, ó sì lè pín owó fúnni, ṣùgbọ́n ó gbára lé àkọsílẹ̀ olóòótọ́. Àkáǹtì SACCO, báńkì tàbí microfinance tó ní ìwé àṣẹ: ó dáàbò bò ó jù, ó sì lè san èlé, ṣùgbọ́n fi èlé náà wé ọ̀wọ́ngógó kí o sì ṣàyẹ̀wò owó àsansílẹ̀. Ẹran: iye rẹ̀ lè pọ̀ sí i, ṣùgbọ́n ó lè kú nítorí ọ̀gbẹlẹ̀ tàbí àrùn. Ọkà tí a pamọ́: iye owó rẹ̀ lè gòkè, ṣùgbọ́n ó lè bàjẹ́ tàbí kí iye owó rẹ̀ wálẹ̀. Rírà ohun èlò oko pàtàkì ní kùtùkùtù: ó ń yẹra fún ìgòkè iye owó, ṣùgbọ́n ó nílò ibi ìpamọ́ tí kò léwu.",
            "Pín owó ìfipamọ́ rẹ ká sí ju ọ̀nà kan lọ. Ní owó pàjáwìrì tí o lè rí kíákíá. Ṣàyẹ̀wò pé SACCO, báńkì tàbí ilé-iṣẹ́ microfinance èyíkéyìí ní ìwé àṣẹ (ní Kenya, SASRA ń tẹ àkọsílẹ̀ àwọn SACCO tó ní ìwé àṣẹ láti gba owó ìfipamọ́ jáde). Ṣọ́ra gidigidi fún ètò èyíkéyìí tí ó ṣèlérí èrè púpọ̀ ní kíákíá: jìbìtì ni ó sábà máa ń jẹ́. Ẹ̀kọ́ yìí ṣàlàyé bí ìfowópamọ́ ṣe ń ṣiṣẹ́; kì í ṣe ìmọ̀ràn ìdókòwò. Béèrè lọ́wọ́ olùdámọ̀ràn tí o fọkàn tán fún ipò tìrẹ."
          ],
          steps: ["Wá ìwọ̀n ọ̀wọ́ngógó ti báyìí láti báńkì àpapọ̀ tàbí ọ́fíìsì ìṣirò.", "Kọ ibi tí owó ìfipamọ́ rẹ wà báyìí: owó lọ́wọ́, ẹgbẹ́, SACCO, báńkì, ẹran, ọkà.", "Kọ ewu kan fún ọ̀kọ̀ọ̀kan.", "Yan àdàpọ̀ ó kéré tán mẹ́ta, pẹ̀lú owó pàjáwìrì tí o lè rí kíákíá.", "Ṣàyẹ̀wò pé gbogbo SACCO, báńkì tàbí ilé-iṣẹ́ microfinance ní ìwé àṣẹ.", "Kọ àwọn ètò tí ó ṣèlérí èrè púpọ̀ ní kíákíá."],
          words: [["Ọ̀wọ́ngógó (inflation)", "ìgòkè iye owó nǹkan ní gbogbogbò, tí ó mú kí owó kan náà ra nǹkan díẹ̀."], ["Èlé (interest)", "owó tí báńkì tàbí SACCO ń san fún ọ fún fífi owó rẹ pamọ́ sọ́dọ̀ wọn, tàbí tí o ń san láti yá owó."], ["Owó pàjáwìrì", "owó tí a fi pamọ́ fún ìṣòro òjijì, bí àìsàn tàbí ìkórè tí ó kùnà, tí o lè rí kíákíá."], ["VSLA", "village savings and loan association: ẹgbẹ́ tí ń fi owó pamọ́ pọ̀, tí ń yá àwọn ọmọ ẹgbẹ́ lówó, tí ó sì ń pín owó ìfipamọ́ àti èrè fúnni."]],
          slides: [
            { title: "Ọ̀wọ́ngógó ń jẹ owó lọ́wọ́", bullets: ["Iye owó gòkè 10%: 10,000 ń ra ohun tí nǹkan bí 9,100 ń rà báyìí", "Wá ìwọ̀n rẹ̀: báńkì àpapọ̀ tàbí ọ́fíìsì ìṣirò"] },
            { title: "Ọ̀nà ìfowópamọ́ kọ̀ọ̀kan ní ewu", bullets: ["Owó lọ́wọ́: ọ̀wọ́ngógó àti olè", "Ẹgbẹ́, SACCO, báńkì: àkọsílẹ̀, owó àsansílẹ̀, èlé sí ọ̀wọ́ngógó", "Ẹran àti ọkà: àrùn, ìbàjẹ́, iye owó"] },
            { title: "Dáàbò bo owó ìfipamọ́ rẹ", bullets: ["Pín in ká sí ó kéré tán ọ̀nà mẹ́ta", "Ní owó pàjáwìrì tí o lè rí", "Ṣàyẹ̀wò ìwé àṣẹ (Kenya: àkọsílẹ̀ SASRA)", "Èrè púpọ̀ ní kíákíá? Jìbìtì ni ó sábà máa ń jẹ́"] }
          ],
          sources: [CBK, NBS, BCEAO, SASRA],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ewu oko ojú-ewé kan rẹ: ewu márùn-ún tó ga jù pẹ̀lú ohun tí o máa ṣe, àkọsílẹ̀ iye owó ọ̀sẹ̀ mẹ́rin àti ọ̀nà tí ó ń lọ, ètò títà àti ìpamọ́ rẹ pẹ̀lú iye owó ìdọ́gba ìpamọ́, àwọn ìbéèrè rẹ fún àdéhùn àti fún ìbánigbófò onídíwọ̀n, àti àdàpọ̀ owó ìfipamọ́ rẹ lòdì sí ọ̀wọ́ngógó.",
          youCanNow: "dáàbò bo owó ìfipamọ́ rẹ lọ́wọ́ ọ̀wọ́ngógó pẹ̀lú àdàpọ̀ tí ó ní ìwé àṣẹ tí o sì pín ká, kí o sì kó gbogbo irinṣẹ́ ewu rẹ jọ sínú ètò kan.",
          quickCheck: [
            { objective: "O6", q: "Iye owó gòkè 10% lọ́dún yìí. Kí ló ṣẹlẹ̀ sí 10,000 tí o fi pamọ́ sínú agolo nílé?", options: ["Ó ń ra nǹkan díẹ̀ ju ti ọdún kan sẹ́yìn lọ", "Ó ń ra nǹkan púpọ̀ ju ti tẹ́lẹ̀ lọ", "Ó di 11,000", "Kò sí ohun tí ó yí padà"], answer: 0, why: "Owó kan náà ń ra nǹkan díẹ̀ nígbà tí iye owó bá gòkè." },
            { objective: "O6", q: "Ẹgbẹ́ kan ṣèlérí láti sọ owó ìfipamọ́ rẹ di ìlọ́po méjì láàárín oṣù mẹ́ta. Kí ni èyí ṣeé ṣe jù kí ó fi hàn?", options: ["SACCO tó dára", "Ìfilọ̀ báńkì lásán", "Ìrànlọ́wọ́ ìjọba", "Jìbìtì tí ó ṣeé ṣe: èrè púpọ̀ ní kíákíá jẹ́ àmì ìkìlọ̀"], answer: 3, why: "Ìlérí èrè púpọ̀ ní kíákíá jẹ́ àmì jìbìtì tí ó wọ́pọ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Gbígbé ewu fún ẹlòmíì àti dídáàbò bo owó rẹ",
        questions: [
          { objective: "O4", q: "Kí ni o fi sílẹ̀ nígbà tí o bá fọwọ́ sí àdéhùn iye owó tí kò yí padà?", options: ["Owó àfikún tí iye owó ọjà bá gòkè", "Ilẹ̀ rẹ", "Gbogbo ohun ọ̀gbìn rẹ yòókù", "Kò sí nǹkan rárá"], answer: 0, why: "Iye owó ti dúró, nítorí náà o kò ní jèrè tí iye owó ọjà bá gòkè sí i." },
          { objective: "O4", q: "Àjọ wo ló fún Nigeria Commodity Exchange ní ìwé àṣẹ?", options: ["Nigerian Meteorological Agency", "Securities and Exchange Commission", "NAFDAC", "Central Bank of Kenya"], answer: 1, why: "NCX sọ pé Securities and Exchange Commission ló fún òun ní ìwé àṣẹ." },
          { objective: "O5", q: "Kí ni KLIP ní Kenya ń lò láti pinnu ìgbà tí ó máa san owó fún àwọn darandaran?", options: ["Ìbẹ̀wò oníṣègùn ẹranko sí agbo ẹran kọ̀ọ̀kan", "Iye owó màálù ní ọjà", "Àwòrán sátẹ́láìtì tí ó fi hàn pé pápá ẹran ń kùnà", "Iye ẹran tí a tà"], answer: 2, why: "KLIP jẹ́ onídíwọ̀n: ìwọ̀n pápá ẹran láti sátẹ́láìtì ló ń fa ìsanwó." },
          { objective: "O5", q: "Ìbéèrè wo ló ń ṣàyẹ̀wò basis risk?", options: ["Àwọ̀ wo ni ìwé ìbánigbófò náà?", "Báwo ni aṣojú náà ṣe yára tó?", "Ta ni ó tún rà á?", "Ibo ni wọ́n ti ń wọ̀n atọ́ka náà, báwo ló sì ṣe sún mọ́ oko mi tó?"], answer: 3, why: "Bí ibi ìwọ̀n ṣe jìnnà tó, bẹ́ẹ̀ ni atọ́ka lè yàtọ̀ sí ti oko rẹ tó." },
          { objective: "O6", q: "Èwo ni ọ̀nà tó bọ́gbọ́n mu láti dáàbò bo owó ìfipamọ́?", options: ["Pín in ká sí àkáǹtì tó ní ìwé àṣẹ, ẹgbẹ́ àti ọ̀nà mìíràn, pẹ̀lú owó pàjáwìrì", "Pa gbogbo owó mọ́ sínú agolo kan", "Fi gbogbo rẹ̀ sínú ètò tí ó ṣèlérí èrè tó ga jù", "Yá àjèjì kan ní gbogbo rẹ̀"], answer: 0, why: "Pípín owó ìfipamọ́ ká sí àwọn ibi tí a ti ṣàyẹ̀wò ń dín ìpalára àdánù kan kù." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìṣàkóso Ewu Oko: Iye Owó, Ojú Ọjọ́ àti Ìbánigbófò",
    questions: [
      { objective: "O1", q: "Àìsàn nínú ẹbí tí ó dá iṣẹ́ oko dúró jẹ́ irú ewu wo?", options: ["Ewu ọjà", "Ewu òfin", "Ewu ènìyàn", "Ewu ìmújáde"], answer: 2, why: "Ewu tí ó kan àwọn ènìyàn tí ń ṣiṣẹ́ oko jẹ́ ewu ènìyàn." },
      { objective: "O1", q: "Ìṣeéṣe 2 àti ìpalára 3 fún ewu ní àmì:", options: ["6", "5", "1", "9"], answer: 0, why: "2 x 3 = 6." },
      { objective: "O1", q: "Pípinnu láti má gbin tòmátì ní oṣù tí òjò pọ̀ jù jẹ́ ọ̀nà wo láti dáhùn?", options: ["Pín in", "Gbà á", "Ṣàìka á sí", "Yẹra fún un"], answer: 3, why: "O yẹra fún ewu náà nípa àìgbé e lé ara rẹ." },
      { objective: "O1", q: "Ìgbà wo ni o yẹ kí o ṣàyẹ̀wò ìwé àkọsílẹ̀ ewu rẹ?", options: ["Láéláé", "Ṣáájú àsìkò oko kọ̀ọ̀kan", "Lẹ́yìn àjálù nìkan", "Ní ọdún mẹ́wàá-mẹ́wàá"], answer: 1, why: "Ewu ń yí padà, nítorí náà ṣàyẹ̀wò ṣáájú àwọn ìpinnu àsìkò kọ̀ọ̀kan." },
      { objective: "O2", q: "Iye owó ọ̀pọ̀ oúnjẹ pàtàkì sábà máa ń kéré jù:", options: ["Kí a tó gbìn", "Ní àwọn oṣù ìyàn", "Lẹ́sẹ̀kẹsẹ̀ lẹ́yìn ìkórè", "Wọn kì í yí padà"], answer: 2, why: "Nígbà ìkórè, ọ̀pọ̀ àgbẹ̀ ń tà lẹ́ẹ̀kan náà, èyí sì ń mú iye owó wálẹ̀." },
      { objective: "O2", q: "Ní Nàìjíríà, àjọ wo ló ń tẹ ìròyìn oṣooṣù iye owó oúnjẹ ní ìpínlẹ̀ kọ̀ọ̀kan jáde?", options: ["National Bureau of Statistics", "Nigerian Meteorological Agency", "NAFDAC", "Securities and Exchange Commission"], answer: 0, why: "NBS ń tẹ Selected Food Prices Watch jáde lóṣooṣù." },
      { objective: "O2", q: "Kí ni ìyípadà iye owó kòkó Côte d'Ivoire láti 2,800 sí 1,200 CFA franc fún kg kan fi hàn?", options: ["Iye owó tí a fi lélẹ̀ kì í yí padà láéláé", "Kòkó kò ní ewu", "Àwọn oníṣòwò nìkan ló ń dojú kọ ewu iye owó", "Kódà iye owó tí ìjọba fi lélẹ̀ lè yí padà gan-an láti àsìkò kan sí òmíràn"], answer: 3, why: "Wọ́n dín iye owó ní oko kù lẹ́yìn tí iye owó kòkó lágbàáyé wálẹ̀." },
      { objective: "O2", q: "Ọ̀nà tí iye owó ń lọ (trend) ni a lè ṣàpèjúwe dáadáa jù bí:", options: ["Ìlérí iye owó oṣù tó ń bọ̀", "Ibi tí iye owó ń lọ ní gbogbogbò láàárín ọ̀sẹ̀ tàbí oṣù", "Ìfilọ̀ olùrà kan", "Iye owó ìjọba"], answer: 1, why: "Ọ̀nà tí iye owó ń lọ jẹ́ ìtọ́sọ́nà láti iye owó àtẹ̀yìnwá, kì í ṣe ìlérí." },
      { objective: "O3", q: "Oríṣiríṣi iṣẹ́ (diversification) túmọ̀ sí:", options: ["Gbígbin ohun ọ̀gbìn tó dára jù rẹ nìkan", "Títa gbogbo rẹ̀ nígbà ìkórè", "Pípín iṣẹ́ oko àti owó tí ó ń wọlé sí ọ̀pọ̀ iṣẹ́", "Yíyá owó sí i"], answer: 2, why: "Ọ̀pọ̀ iṣẹ́ túmọ̀ sí pé ìkùnà kan kò ní ba ọ jẹ́." },
      { objective: "O3", q: "Iye owó ìkórè jẹ́ 4,000 fún àpò kan, àpò 10, ìnáwó ìpamọ́ 2,000. Kí ni iye owó ìdọ́gba ìpamọ́?", options: ["4,200", "4,000", "2,000", "6,000"], answer: 0, why: "(4,000 x 10 + 2,000) / 10 = 4,200 fún àpò kan." },
      { objective: "O3", q: "Kí o tó pa ọkà mọ́ láti tà á lẹ́yìn náà, o gbọ́dọ̀ kọ́kọ́:", options: ["Pa á mọ́ ní tútù kí ìwọ̀n rẹ̀ má dín kù", "Dà á pọ̀ mọ́ ọkà ọdún tó kọjá", "Ta èyí tí o nílò fún owó nígbà ìkórè kí o sì pa ọkà tí ó mọ́ tí ó sì gbẹ nìkan mọ́ láìléwu", "Pa gbogbo rẹ̀ mọ́, kódà tí o bá nílò owó báyìí"], answer: 2, why: "Bíbo owó tí o nílò àti pípa ọkà tí ó mọ́ tí ó gbẹ nìkan mọ́ ń dènà títà tipátipá àti ìbàjẹ́." },
      { objective: "O4", q: "Àdéhùn títà ṣáájú (forward contract) jẹ́:", options: ["Owó tí a yá láti báńkì", "Àdéhùn tí a ṣe báyìí láti ta iye kan ní iye owó kan lẹ́yìn náà", "Ìwé ìbánigbófò", "Àkáǹtì ìfowópamọ́"], answer: 1, why: "Ó fi iye àti iye owó lélẹ̀ lónìí fún títà ọjọ́ iwájú." },
      { objective: "O4", q: "Òfin wo ni àdéhùn iye owó tí kò yí padà gbọ́dọ̀ ní?", options: ["Ohun ọ̀gbìn tí olùrà fẹ́ràn jù", "Àwọ̀ àwọn àpò nìkan", "Iye ènìyàn inú ẹbí rẹ", "Ohun tí ó máa ṣẹlẹ̀ tí ìkórè bá kùnà tàbí tí olùrà kò bá wá kó ọjà"], answer: 3, why: "Àwọn ipò wọ̀nyí ló ń pinnu ẹni tí ó máa ru àdánù nígbà tí nǹkan bá dàrú." },
      { objective: "O4", q: "Kí ló dé tí hedging pẹ̀lú futures kò fi yẹ fún olùbẹ̀rẹ̀?", options: ["Ó nílò alágbàtà, owó ìdógò margin àti òye, ó sì lè pàdánù owó", "Ó lòdì sí òfin ní Áfíríkà", "Kòkó nìkan ni ó ń ṣiṣẹ́ fún", "Ó máa ń mú èrè wá nígbà gbogbo"], answer: 0, why: "Ipò futures lè pàdánù owó, ó sì nílò owó ìdógò tí wọ́n lè béèrè lójijì." },
      { objective: "O4", q: "Báwo ni ọ̀pọ̀ àgbẹ̀ kékeré ṣe ń dé ọjà pàṣípààrọ̀ bí GCX?", options: ["Nípa ṣíṣòwò futures lórí fóònù wọn", "Nípasẹ̀ ẹgbẹ́ alájọṣe, olùkójọ ọjà tàbí ilé ìkẹ́rùsí tí a fọwọ́ sí", "Nípa lílọ sí ọjà pàṣípààrọ̀ lójoojúmọ́", "Wọn kò lè lò ó rárá"], answer: 1, why: "Àwọn ẹgbẹ́ àti ilé ìkẹ́rùsí ń gbé ọjà àwọn àgbẹ̀ lọ sí ọjà pàṣípààrọ̀." },
      { objective: "O5", q: "Ìbánigbófò onídíwọ̀n ń sanwó nígbà tí:", options: ["O bá ròyìn àdánù", "Aṣojú kan bá wá sí oko rẹ", "Atọ́ka tí a wọ̀n bá kọjá ìpele ìsanwó", "A bá san owó ìbánigbófò"], answer: 2, why: "Ìsanwó ń tẹ̀lé atọ́ka, kì í ṣe ìbẹ̀wò sí oko." },
      { objective: "O5", q: "Ta ni ó ń san owó ìbánigbófò nínú KLIP ti Kenya fún àwọn darandaran aláìní tí wọ́n forúkọ sílẹ̀?", options: ["Àwọn darandaran fúnra wọn", "Ẹni tí ó ń ra ẹran", "Báńkì", "Ìjọba"], answer: 3, why: "KLIP jẹ́ ètò ìjọba tí ó ń ra ààbò náà fún wọn." },
      { objective: "O5", q: "Kí o tó ra ìbánigbófò onídíwọ̀n, ṣàyẹ̀wò pé ilé-iṣẹ́ ìbánigbófò náà ní ìwé àṣẹ. Ní Nàìjíríà, àjọ alábòójútó ni:", options: ["NAICOM", "NAFDAC", "NiMet", "NBS"], answer: 0, why: "NAICOM, National Insurance Commission, ló ń bójú tó àwọn ilé-iṣẹ́ ìbánigbófò ní Nàìjíríà." },
      { objective: "O6", q: "Níbo ni o ti lè rí ìwọ̀n ọ̀wọ́ngógó ti báyìí?", options: ["Lọ́dọ̀ oníṣòwò kan ní ọjà", "Báńkì àpapọ̀ tàbí ọ́fíìsì ìṣirò orílẹ̀-èdè rẹ", "Ọ̀rọ̀ kan lórí ìkànnì àjọlò", "Aṣojú ìbánigbófò"], answer: 1, why: "Àwọn báńkì àpapọ̀ àti ọ́fíìsì ìṣirò ń tẹ ìwọ̀n ọ̀wọ́ngógó ti ìjọba jáde." },
      { objective: "O6", q: "Kí ni ewu fífi owó ìfipamọ́ pamọ́ ní ẹran?", options: ["Iye ẹran kì í yí padà láéláé", "Àwọn báńkì kò ní gbà wọ́n", "Wọ́n lè kú nítorí ọ̀gbẹlẹ̀ tàbí àrùn", "Kò sí ewu kankan"], answer: 2, why: "Ọ̀gbẹlẹ̀ àti àrùn lè pa owó ìfipamọ́ tí ó wà ní ẹran rẹ́." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 1, 5, 7, 9, 11, 13, 15, 16, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      { name: "Ìwé àkọsílẹ̀ ewu", objective: "O1", notYet: "Ewu tí kò tó márùn-ún, tàbí ewu tí kò ní àmì tàbí tí kò ní ohun tí a máa ṣe.", meets: "Ó kéré tán ewu mẹ́jọ láti inú gbogbo oríṣi márùn-ún, tí a fún ní àmì tí a sì tò lẹ́sẹẹsẹ, pẹ̀lú ohun tí a máa ṣe fún ọ̀kọ̀ọ̀kan nínú márùn-ún tó ga jù.", exceeds: "Àwọn ohun tí a máa ṣe ní ọjọ́ àti iye owó, ètò náà sì sọ ìgbà tí a máa ṣàyẹ̀wò ìwé àkọsílẹ̀ náà." },
      { name: "Àkọsílẹ̀ iye owó àti ọ̀nà tí ó ń lọ", objective: "O2", notYet: "Kò tó ọ̀sẹ̀ mẹ́rin, orísun kan ṣoṣo, tàbí ìwọ̀n àti ìpele dàrú.", meets: "Ọ̀sẹ̀ mẹ́rin láti orísun méjì ó kéré tán, irè oko kan náà, ìpele kan náà àti ìwọ̀n kan náà, pẹ̀lú àpèjúwe ọ̀nà tí iye owó ń lọ.", exceeds: "Ó ní iṣẹ́ ti ìjọba àti àwọn oṣù kan náà ní ọdún tó kọjá, ó sì sọ ohun tí ọ̀nà tí ó ń lọ túmọ̀ sí fún títà." },
      { name: "Ètò títà àti ìpamọ́", objective: "O3", notYet: "Kò sí iye owó ìdọ́gba ìpamọ́, tàbí a kò ka owó tí a nílò nígbà ìkórè sí.", meets: "Iye owó ìdọ́gba ìpamọ́ tó tọ́, owó tí a nílò nígbà ìkórè wà níbẹ̀, a sì ṣètò títà ní ìpele-ìpele.", exceeds: "Ó tún fi iṣẹ́ kejì tàbí ọjà kejì kún un láti pín ewu ká, àti àwọn ìgbésẹ̀ ìpamọ́ tí kò léwu." },
      { name: "Ìbéèrè fún àdéhùn àti ìbánigbófò", objective: "O4", notYet: "Òfin àdéhùn tí kò tó márùn-ún, tàbí kò sí ìbéèrè ìbánigbófò.", meets: "Ó kéré tán òfin àdéhùn mẹ́jọ pẹ̀lú èrè kan àti ewu kan, àti ohun tí hedging túmọ̀ sí ní gbólóhùn kan.", exceeds: "Ó fi iye owó tí kò yí padà wé iye owó ìdọ́gba àti àkọsílẹ̀ iye owó." },
      { name: "Àyẹ̀wò ìbánigbófò onídíwọ̀n", objective: "O5", notYet: "Atọ́ka, ìpele ìsanwó, owó ìbánigbófò tàbí basis risk kò sí níbẹ̀.", meets: "A dáhùn gbogbo rẹ̀: atọ́ka, ìpele ìsanwó, ìsanwó, owó ìbánigbófò, ọjọ́ ìkẹyìn, basis risk àti àyẹ̀wò ìwé àṣẹ.", exceeds: "Àwọn ìdáhùn wá láti inú ìfilọ̀ gidi kan nítòsí oko náà, a sì dárúkọ àjọ alábòójútó." },
      { name: "Owó ìfipamọ́ lòdì sí ọ̀wọ́ngógó", objective: "O6", notYet: "Ọ̀nà ìfowópamọ́ kan ṣoṣo, tàbí a kò dárúkọ ewu kankan.", meets: "Ó kéré tán ọ̀nà mẹ́ta tí a fi wé ara wọn, ọ̀kọ̀ọ̀kan pẹ̀lú ewu kan, a kọ ìwọ̀n ọ̀wọ́ngógó sílẹ̀, a sì ṣàyẹ̀wò ìwé àṣẹ.", exceeds: "Ó ní iye owó pàjáwìrì àti ọjọ́ tí a máa ṣàyẹ̀wò àdàpọ̀ náà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ètò ewu oko",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì ń kọ iye owó sílẹ̀ lọ́sẹ̀ọ̀sẹ̀ ní ọjọ́ 30 lẹ́yìn náà (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń tà ní ìpele-ìpele tàbí ń pa ọjà mọ́ láìléwu dípò títa gbogbo rẹ̀ nígbà ìkórè",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ka àdéhùn tàbí ìfilọ̀ ìbánigbófò ní òfin kọ̀ọ̀kan, tàbí pé àwọn kọ ayánilówó, ilé-iṣẹ́ ìbánigbófò tàbí ètò òwò tí kò ní ìwé àṣẹ",
      "Àwọn ẹgbẹ́ alájọṣe alábàáṣiṣẹ́ ròyìn pé iye àwọn ọmọ ẹgbẹ́ tí a fipá mú láti ta ẹran tàbí ilẹ̀ lẹ́yìn àsìkò búburú ti dín kù"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀ àti gègé, àti fóònù lásán fún iye owó lórí SMS, ìpè tàbí rédíò",
      "Ẹ̀rọ ìṣirò orí fóònù",
      "Àdéhùn olùrà gidi tàbí àpẹẹrẹ àti ìwé ìpolówó ìbánigbófò onídíwọ̀n láti agbègbè náà, tí ó bá wà",
      "Nǹkan bí ìṣẹ́jú 80 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú ọ̀sẹ̀ mẹ́rin kíkọ iye owó sílẹ̀ fún iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́ àgbẹ̀ tàbí ìpàdé ìtọ́sọ́nà àgbẹ̀: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà orí kan ní ìpàdé kọ̀ọ̀kan; ẹ kọ́kọ́ ṣe ìwé àkọsílẹ̀ ewu ní ẹgbẹ́ kékeré.",
      "Ní kí àwọn akẹ́kọ̀ọ́ bẹ̀rẹ̀ àkọsílẹ̀ iye owó lẹ́yìn Ẹ̀kọ́ 2 kí wọ́n lè ní ọ̀sẹ̀ mẹ́rin fún iṣẹ́ ìkẹyìn; ẹ kó iye owó jọ gẹ́gẹ́ bí ẹgbẹ́ kí ẹ sì pín in.",
      "Pe ilé-iṣẹ́ ìbánigbófò tó ní ìwé àṣẹ, ẹgbẹ́ alájọṣe tàbí olùṣàkóso ilé ìkẹ́rùsí láti ṣàlàyé ọjà gidi kan, ṣùgbọ́n má ṣe gbè sẹ́yìn ilé-iṣẹ́ kankan; jẹ́ kí àwọn akẹ́kọ̀ọ́ béèrè àwọn ìbéèrè inú ẹ̀kọ́ náà.",
      "Má ṣe gba ẹnikẹ́ni níyànjú láti ṣòwò lórí ọjà pàṣípààrọ̀ kankan tàbí láti ra ọjà owó kankan; sọ kedere pé ẹ̀kọ́ náà ṣàlàyé bí nǹkan ṣe ń ṣiṣẹ́ àti ewu wọn.",
      "Fi rubric ṣe àmì fún ètò ewu náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
