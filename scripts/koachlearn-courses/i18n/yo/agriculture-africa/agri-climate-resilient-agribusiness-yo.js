"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-climate-resilient-agribusiness.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_CSA = { name: "FAO: Ìwé ìtọ́kasí iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu (Climate-Smart Agriculture Sourcebook)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const CGIAR_MAIZE = { name: "CGIAR: Àgbàdo tó bá ojú-ọjọ́ mu (tó lè fara da ọ̀gbẹlẹ̀)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const CBK = { name: "Central Bank of Kenya (àkọsílẹ̀ àwọn báńkì àti báńkì microfinance tó ní ìwé àṣẹ)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria (àwọn ilé-iṣẹ́ tó ní ìwé àṣẹ àti ààbò àwọn oníbàárà)", url: "https://www.cbn.gov.ng" };
const BOA = { name: "Bank of Agriculture, Nàìjíríà", url: "https://www.boanig.com" };
const ADB_GH = { name: "Agricultural Development Bank, Ghana", url: "https://agricbank.com" };
const GCF = { name: "Green Climate Fund (ó ń ṣiṣẹ́ nípasẹ̀ ìjọba, báńkì àti àwọn àjọ tí a fọwọ́ sí, kì í ṣe tààrà pẹ̀lú àgbẹ̀)", url: "https://www.greenclimate.fund" };
const IRA = { name: "Insurance Regulatory Authority, Kenya (ṣàyẹ̀wò pé ilé-iṣẹ́ ìdánilójú ní ìwé àṣẹ)", url: "https://www.ira.go.ke" };
const ABPP = { name: "SNV/Hivos: Ìwé ìsọfúnni Africa Biogas Partnership Programme (ẹ̀rọ biogas ilé àti bio-slurry)", url: "https://snv.org/assets/explore/download/20200526_-_abpp-4bf_factsheet.pdf" };
const FAO_AGROFOR = { name: "FAO: Gbígbin igi pọ̀ mọ́ irè oko (Agroforestry)", url: "https://www.fao.org/agroforestry/en/" };
const KE_CARBON = { name: "Kenya: The Climate Change (Carbon Markets) Regulations, 2024 (àkópọ̀ àti ọ̀rọ̀ kíkún)", url: "https://climate-laws.org/document/the-climate-change-carbon-markets-regulations-2024_e0fd" };
const VERRA = { name: "Àkọsílẹ̀ Verra (wá iṣẹ́ carbon kan pẹ̀lú orúkọ tàbí ID rẹ̀)", url: "https://registry.verra.org" };
const GOLD = { name: "Àkọsílẹ̀ Gold Standard (wá iṣẹ́ carbon kan pẹ̀lú orúkọ tàbí ID rẹ̀)", url: "https://registry.goldstandard.org" };

module.exports = {
  id: "agri-climate-resilient-agribusiness-yo",
  lang: "yo",
  translationOf: "agri-climate-resilient-agribusiness",
  category: "Agriculture (Africa)",
  name: "Iṣẹ́ Òwò Àgbẹ̀ Tó Lè Fara Da Ìyípadà Ojú-ọjọ́",
  skills: "Ṣíṣírò ewu ojú-ọjọ́ ní owó, Ṣíṣírò iye owó ìdókòwò ìmúra-sílẹ̀, Wíwá àti ṣíṣàyẹ̀wò owó ìrànlọ́wọ́ ojú-ọjọ́, Dídín owó ìnáwó àti èéfín kù pọ̀, Mímọ jìbìtì carbon credit, Kíkọ ètò ìfaradà ojú-ọjọ́",
  outcome: "kọ ètò ìfaradà ojú-ọjọ́ ojú-ewé kan fún iṣẹ́ òwò oko rẹ: àwọn ewu ojú-ọjọ́ tó ń ná ọ lówó jù, àwọn ìdókòwò ìmúra-sílẹ̀ tí o máa ṣe àti iye tí wọ́n máa ná, bí o ṣe máa san owó wọn, àwọn ọ̀nà ìfowópamọ́ tí o máa fi kún un, àti bí o ṣe máa ṣàyẹ̀wò ìfilọ̀ carbon credit èyíkéyìí.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tó ń dàgbà, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn olórí ẹgbẹ́ àgbẹ̀ àti àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ (extension officer) ní Kenya, Nàìjíríà, Ghana, Senegal, Côte d'Ivoire àti káàkiri Áfíríkà, tí wọ́n ti ń rí ìyípadà ojú-ọjọ́ lórí oko wọn, tí wọ́n sì fẹ́ kà á sí ìṣòro òwò tó nílò ètò òwò.",
    "Orí 1 ń sọ ewu ojú-ọjọ́ di owó: o máa ṣàyẹ̀wò àwọn ewu sí iṣẹ́ òwò oko rẹ, o máa yan ìdókòwò ìmúra-sílẹ̀ bí irúgbìn tó lè fara da ọ̀gbẹlẹ̀, ìkópamọ́ omi, igi ìbòji àti iṣẹ́ tuntun, o máa ṣírò iye owó wọn, o sì máa kọ́ nípa irú owó ìrànlọ́wọ́ ojú-ọjọ́ àti ẹ̀yáwó aláwọ̀ ewé (green loan) àti bí o ṣe lè ṣàyẹ̀wò wọn. Orí 2 dá lórí àwọn ọ̀nà tó ń dín èéfín àti owó ìnáwó kù lẹ́ẹ̀kan náà, àwọn ètò carbon credit àti bí o ṣe lè yẹra fún jìbìtì àti àdéhùn tí kò tọ́, àti fífi gbogbo èyí kún ètò òwò rẹ.",
    "Ẹ̀kọ́ \"Iṣẹ́ Àgbẹ̀ Tó Bá Ojú-ọjọ́ Mu\" ń kọ́ni nípa àsọtẹ́lẹ̀ àsìkò àti kàlẹ́ńdà ewu ojú-ọjọ́; kọ́kọ́ ṣe é tí o bá lè ṣe é. Àpẹẹrẹ tí a ṣe lásán ni gbogbo iye owó tó wà níbí: lo iye owó ní agbègbè rẹ. Ẹ̀kọ́ yìí ń ṣàlàyé bí owó ẹ̀yáwó àti àdéhùn ṣe ń ṣiṣẹ́; kò sọ ohun tí o máa dókòwò sí fún ọ. Ka àdéhùn kọ̀ọ̀kan dé òpin, kí o sì bá olùgbaninímọ̀ràn tí o fọkàn tán sọ̀rọ̀ kí o tó fọwọ́ sí i. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan fún oko tìrẹ."
  ],
  finalTask: "Kọ ètò ìfaradà ojú-ọjọ́ ojú-ewé kan fún iṣẹ́ òwò oko rẹ (tàbí oko àpẹẹrẹ bí éékà 3 àgbàdo àti ẹ̀wà pẹ̀lú ewúrẹ́ ìfúnwàrà 6 ní Makueni, hẹ́kítà 4 kòkó ní Western Region ní Ghana, tàbí hẹ́kítà 2 ìrẹsì àti ẹ̀pà nítòsí Kaolack, Senegal): ewu ojú-ọjọ́ mẹ́ta tó ga jù pẹ̀lú iye owó tí o fojú díwọ̀n fún ọ̀kọ̀ọ̀kan; ìdókòwò ìmúra-sílẹ̀ méjì tàbí mẹ́ta pẹ̀lú iye owó wọn, àǹfààní ọdọọdún àti àkókò tí owó yóò fi padà (payback); bí o ṣe máa san owó náà (owó ìfipamọ́, ẹgbẹ́, ẹ̀yáwó, owó ẹ̀bùn) pẹ̀lú àwọn ìbéèrè tí o máa béèrè lọ́wọ́ ẹni tó ń yáni lówó; ó kéré tán ọ̀nà méjì tó ń dín owó ìnáwó àti èéfín kù; àwọn òfin rẹ fún ṣíṣàyẹ̀wò ìfilọ̀ carbon credit èyíkéyìí; àti ọjọ́ tí o máa tún ètò náà yẹ̀wò.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tó ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ káàkiri Áfíríkà (Kenya, Nàìjíríà, Ghana àti àwọn orílẹ̀-èdè Ìwọ̀-oòrùn Áfíríkà tó ń sọ Faransé). Ọ̀pọ̀ nínú wọn ń ṣe oko àdàpọ̀ irè oko àti ẹran ọ̀sìn, wọ́n sì ń ta apá kan ohun tí wọ́n gbìn. Àwọn kan ń kọ àkọsílẹ̀ tó rọrùn; ọ̀pọ̀ kì í kọ.",
    startingPoint: "Wọ́n lè dárúkọ àwọn ìyípadà ojú-ọjọ́ tí wọ́n ń rí (òjò tó pẹ́, ọ̀dá àárín àsìkò, ooru, àkúnya omi), ọ̀pọ̀ nínú wọn sì mọ àwọn ọ̀nà iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu díẹ̀. Díẹ̀ ló ń fi owó díwọ̀n ewu ojú-ọjọ́, tí wọ́n ń fi àkókò tí owó yóò fi padà wé ìdókòwò ìmúra-sílẹ̀ pọ̀, tàbí tí wọ́n mọ bí a ṣe ń ṣàyẹ̀wò ẹ̀yáwó aláwọ̀ ewé tàbí àdéhùn carbon credit.",
    gap: "Ìjàǹbá ojú-ọjọ́ ń kọlu owó tó ń wọlé àti sísan ẹ̀yáwó padà, ṣùgbọ́n ọ̀pọ̀ àgbẹ̀ ń náwó sí ìmúra-sílẹ̀ láìṣírò iye rẹ̀, wọ́n ń yá owó láìfi gbogbo iye rẹ̀ wéra, tàbí wọ́n ń fọwọ́ sí àdéhùn carbon tí kò yé wọn. Àwọn akẹ́kọ̀ọ́ nílò láti ṣètò ìfaradà ojú-ọjọ́ gẹ́gẹ́ bí ìpinnu òwò, dáàbò bo ara wọn lọ́wọ́ jìbìtì, kí wọ́n sì gbé ètò tó ṣeé gbàgbọ́ kalẹ̀ fún àwọn ayánilówó, àwọn olùrà àti àwọn ètò ìrànlọ́wọ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń lo Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì, ẹ̀kọ́ náà sì wà ní èdè Sípáníìṣì, Faransé àti Lárúbáwá pẹ̀lú",
      "Ẹ̀rọ: fóònù lásán tàbí smartphone, ìwé àti ẹ̀rọ ìṣírò; íńtánẹ́ẹ̀tì lè lọ́ra tàbí kí ó wọ́n",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá iṣẹ́ oko mu",
      "Owó: àpẹẹrẹ ni gbogbo iye owó; a kò fi iye owó, èlé tàbí owó ìrànlọ́wọ́ ìjọba kankan hàn bí òtítọ́",
      "Ààbò owó: kò sí ìmọ̀ràn ìdókòwò; akẹ́kọ̀ọ́ kì í fi PIN, nọ́mbà ìdánimọ̀ tàbí nọ́mbà àkáǹtì hàn nínú iṣẹ́ àṣeṣe láéláé"
    ],
    prerequisites: "Àkọsílẹ̀ oko tó rọrùn àti èrè àkọ́kọ́ (gross margin) máa ràn ọ́ lọ́wọ́ (\"Iṣẹ́ Àgbẹ̀ Bí Òwò àti Ìṣàkóso Oko\"). A gbà ọ́ níyànjú láti kọ́kọ́ ṣe \"Iṣẹ́ Àgbẹ̀ Tó Bá Ojú-ọjọ́ Mu\" (àsọtẹ́lẹ̀ àsìkò àti kàlẹ́ńdà ewu ojú-ọjọ́)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn iṣẹ́ oko rẹ àti ohun tó ṣẹlẹ̀ ní àsìkò márùn-ún tó kọjá", action: "díwọ̀n àwọn ewu ojú-ọjọ́ pàtàkì sí iṣẹ́ òwò oko rẹ gẹ́gẹ́ bí ó ṣe ṣeé ṣe tó kí wọ́n ṣẹlẹ̀ àti iye owó tí wọ́n lè ná ọ", standard: "kí o sì kọ ó kéré tán ewu mẹ́ta, pẹ̀lú iye owó tí o fojú díwọ̀n fún ọ̀kọ̀ọ̀kan ní owó orílẹ̀-èdè rẹ" },
    { id: "O2", condition: "Tí a bá fún ọ ní ìdókòwò ìmúra-sílẹ̀ méjì tàbí mẹ́ta tó ṣeé ṣe", action: "ṣírò iye owó ìdókòwò kọ̀ọ̀kan kí o sì fi àǹfààní ọdọọdún rẹ̀ wé iye owó rẹ̀", standard: "pẹ̀lú iye owó ní agbègbè rẹ, kí o sì fi àkókò tí owó yóò fi padà hàn ní àsìkò tàbí ọdún" },
    { id: "O3", condition: "Kí o tó béèrè fún ẹ̀yáwó ojú-ọjọ́ tàbí ẹ̀yáwó aláwọ̀ ewé, owó ẹ̀bùn tàbí ètò ìrànlọ́wọ́", action: "kọ àwọn ìbéèrè tí o máa béèrè lọ́wọ́ ayánilówó sílẹ̀ kí o sì ṣàyẹ̀wò pé ó ní ìwé àṣẹ", standard: "tí ó bo gbogbo iye owó, ọjọ́ sísan padà, àwọn májẹ̀mú àti ẹni tó ń bójú tó o" },
    { id: "O4", condition: "Tí a bá fún ọ ní àwọn ọ̀nà tí o ń lò báyìí", action: "dá ọ̀nà méjì mọ̀ tó ń dín èéfín afẹ́fẹ́ ìgbóná-ayé kù, tí wọ́n sì ń dín owó ìnáwó rẹ kù pẹ̀lú", standard: "kí o sì dárúkọ ohun èlò tàbí owó tí ọ̀kọ̀ọ̀kan ń fi pamọ́" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìfilọ̀ tàbí àdéhùn carbon credit kan", action: "ṣàyẹ̀wò ìfilọ̀ náà fún àwọn àmì ìkìlọ̀ jìbìtì tàbí àdéhùn tí kò tọ́", standard: "kí o sì dáhùn ó kéré tán àyẹ̀wò mẹ́rin kí o tó fọwọ́ sí tàbí san owó kankan" },
    { id: "O6", condition: "Pẹ̀lú iṣẹ́ tí o ti ṣe nínú ẹ̀kọ́ yìí", action: "kọ ètò ìfaradà ojú-ọjọ́ ojú-ewé kan fún iṣẹ́ òwò oko rẹ", standard: "pẹ̀lú àwọn ewu, ìdókòwò, iye owó, owó ìnáwó, àwọn ọ̀nà ìfowópamọ́ àti ọjọ́ àtúnyẹ̀wò" }
  ],
  chapters: [
    {
      name: "Orí 1: Ewu ojú-ọjọ́ jẹ́ ewu òwò",
      lessons: [
        {
          title: "Àyẹ̀wò ewu ojú-ọjọ́ fún iṣẹ́ òwò oko rẹ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Díwọ̀n àwọn ewu ojú-ọjọ́ sí iṣẹ́ òwò oko rẹ gẹ́gẹ́ bí ó ṣe ṣeé ṣe tó kí wọ́n ṣẹlẹ̀ àti bí wọ́n ṣe kan owó rẹ.",
          text: [
            "Kàlẹ́ńdà ewu ojú-ọjọ́ ń fi ìgbà tí ojú-ọjọ́ ń pa oko rẹ lára hàn. Àyẹ̀wò ewu ojú-ọjọ́ lọ síwájú ní ìgbésẹ̀ kan: ó ń béèrè iye owó tí ewu kọ̀ọ̀kan lè ná iṣẹ́ òwò rẹ, kí o lè mọ àwọn tí o máa kọ́kọ́ náwó sí.",
            "Fún iṣẹ́ kọ̀ọ̀kan (àgbàdo, tòmátì, ewúrẹ́, kòkó, ẹja tilapia), kọ àwọn ewu ojú-ọjọ́ sílẹ̀: òjò tó pẹ́ bẹ̀rẹ̀, ọ̀dá nígbà tí irè oko ń yọ òdòdó, ìnira ooru fún ẹran, àkúnya omi, ìjì líle, kòkòrò tuntun. Béèrè ìbéèrè méjì nípa ọ̀kọ̀ọ̀kan: Báwo ló ṣe ṣeé ṣe tó kí ó ṣẹlẹ̀ ní àsìkò márùn-ún tó ń bọ̀ (kéré, àárín tàbí ga)? Tí ó bá sì ṣẹlẹ̀, èló ni owó tó máa sọnù? Lo àkọsílẹ̀ rẹ, kí o sì béèrè lọ́wọ́ àwọn àgbẹ̀ àgbà ohun tó ṣẹlẹ̀ ní àwọn ọdún burúkú tó ti kọjá.",
            "Lẹ́yìn náà, ronú nípa gbogbo iṣẹ́ òwò náà, kì í ṣe oko nìkan: Ṣé o ṣì lè san ẹ̀yáwó padà ní ọdún burúkú? Ṣé àwọn olùrà ṣì máa gba ọjà rẹ tí dídára rẹ̀ bá dín kù? Ṣé àwọn òṣìṣẹ́ lè dé oko nígbà àkúnya omi? Ọ̀dá tó dín àpò àgbàdo 40 kù sí 25 kì í ṣe ìṣòro ìkórè nìkan; ìṣòro ìṣàn owó (cash flow) ni pẹ̀lú.",
            "Kọ àwọn ewu náà sínú tábìlì tó rọrùn kí o sì tò wọ́n lẹ́sẹẹsẹ. Àwọn ewu tó ṣeé ṣe kí wọ́n ṣẹlẹ̀, tí wọ́n sì máa ná ọ lówó púpọ̀, ló máa wà lókè ètò rẹ."
          ],
          steps: ["Kọ àwọn iṣẹ́ oko rẹ sílẹ̀.", "Lábẹ́ ọ̀kọ̀ọ̀kan, kọ àwọn ewu ojú-ọjọ́ láti inú ìrírí rẹ àti kàlẹ́ńdà ewu rẹ.", "Sàmì sí bí ewu kọ̀ọ̀kan ṣe ṣeé ṣe tó: kéré, àárín tàbí ga.", "Fojú díwọ̀n owó tó máa sọnù tí ó bá ṣẹlẹ̀, ní owó orílẹ̀-èdè rẹ.", "Tò wọ́n: àwọn ewu tó ṣeé ṣe tí wọ́n sì wọ́n lówó ló kọ́kọ́ wá.", "Fi ipa wọn lórí òwò kún un: sísan ẹ̀yáwó padà, àdéhùn olùrà, òṣìṣẹ́, ìrìnnà."],
          words: [["Àyẹ̀wò ewu ojú-ọjọ́", "àkọsílẹ̀ àwọn ewu ojú-ọjọ́ tí iṣẹ́ òwò rẹ ń dojú kọ, bí ọ̀kọ̀ọ̀kan ṣe ṣeé ṣe tó, àti iye owó tí ó lè ná ọ."], ["Ewu (hazard)", "ìṣẹ̀lẹ̀ tó lè ṣe ìpalára, bí ọ̀gbẹlẹ̀, àkúnya omi tàbí ooru."], ["Bí ó ṣe ṣeé ṣe tó (likelihood)", "bí ó ti dájú tó pé nǹkan kan máa ṣẹlẹ̀."], ["Ipa (impact)", "iye ìbàjẹ́ tàbí owó tó sọnù tí ìṣẹ̀lẹ̀ kan fà."]],
          slides: [
            { title: "Láti kàlẹ́ńdà sí iye owó", bullets: ["Kàlẹ́ńdà: ìgbà tí ojú-ọjọ́ ń pani lára", "Àyẹ̀wò: iye tí ó ń ná iṣẹ́ òwò rẹ", "Kọ́kọ́ náwó sí àwọn ewu tó tóbi jù"] },
            { title: "Ìbéèrè méjì fún ewu kọ̀ọ̀kan", bullets: ["Báwo ló ṣe ṣeé ṣe tó ní àsìkò márùn-ún tó ń bọ̀?", "Èló ni owó tó máa sọnù tí ó bá ṣẹlẹ̀?", "Lo àkọsílẹ̀ rẹ àti ohun tí àwọn àgbẹ̀ àgbà rántí"] },
            { title: "Ronú kọjá oko", bullets: ["Sísan ẹ̀yáwó padà ní ọdún burúkú", "Àdéhùn olùrà àti dídára ọjà", "Òṣìṣẹ́, ìrìnnà, ìkópamọ́"] },
            { title: "Tò àwọn ewu lẹ́sẹẹsẹ", bullets: ["Ó ṣeé ṣe + ó wọ́n = òkè ètò rẹ", "Àpẹẹrẹ: ọ̀dá dín àpò 40 kù sí 25", "Ìṣòro ìṣàn owó ni èyí náà"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Ṣe tábìlì oníláìnì mẹ́rin: ewu, bí ó ṣe ṣeé ṣe tó (kéré, àárín, ga), owó tí o fojú díwọ̀n pé ó máa sọnù, àti ipa rẹ̀ lórí òwò. Kọ ó kéré tán ewu mẹ́ta fún oko tìrẹ, kí o sì yí ìlà ká èyí tó ga jù.",
          youCanNow: "díwọ̀n àwọn ewu ojú-ọjọ́ sí iṣẹ́ òwò oko rẹ gẹ́gẹ́ bí ó ṣe ṣeé ṣe tó kí wọ́n ṣẹlẹ̀ àti iye owó tí wọ́n lè ná ọ.",
          quickCheck: [
            { objective: "O1", q: "Ewu wo ló yẹ kí ó wà lókè ètò ewu ojú-ọjọ́ oko kan?", options: ["Èyí tí kò ṣeé ṣe tí kò sì wọ́n", "Èyí tó ṣeé ṣe kí ó ṣẹlẹ̀ tí ó sì máa ná owó púpọ̀", "Èyí tó kan aládùúgbò nìkan", "Èyí tó ṣẹlẹ̀ lẹ́ẹ̀kan ní ọdún 40 sẹ́yìn"], answer: 1, why: "Àwọn ewu tó ṣeé ṣe tí wọ́n sì wọ́n lówó ló ń ṣe iṣẹ́ òwò ní ìpalára jù, nítorí náà àwọn ló kọ́kọ́ wá." },
            { objective: "O1", q: "Ọ̀dá dín ìkórè àgbàdo àgbẹ̀ kan kù, kò sì lè san ẹ̀yáwó rẹ̀ padà lásìkò. Kí ni èyí fi hàn?", options: ["Ewu ojú-ọjọ́ kan ìkórè nìkan", "Ojú-ọjọ́ kì í kan ẹ̀yáwó láéláé", "Ewu ojú-ọjọ́ tún ń kọlu ìṣàn owó àti sísan ẹ̀yáwó padà", "Kí àgbẹ̀ náà dá kíkọ àkọsílẹ̀ dúró"], answer: 2, why: "Àyẹ̀wò ewu ojú-ọjọ́ ń wo gbogbo iṣẹ́ òwò náà, títí kan ìṣàn owó àti gbèsè." }
          ]
        },
        {
          title: "Yíyan ìdókòwò ìmúra-sílẹ̀ àti ṣíṣírò iye owó wọn",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣírò iye owó ìdókòwò ìmúra-sílẹ̀ méjì kí o sì fi àkókò tí owó wọn yóò fi padà wéra.",
          text: [
            "Ìdókòwò ìmúra-sílẹ̀ (adaptation investment) ni owó tàbí iṣẹ́ tí o ná báyìí kí o lè pàdánù díẹ̀ ní ọdún burúkú. Àwọn tó wọ́pọ̀ ní Áfíríkà ni irúgbìn tó lè fara da ọ̀gbẹlẹ̀ tàbí tó ń tètè gbó (àwọn ibùdó CGIAR bí CIMMYT ti ṣe àgbàdo tó lè fara da ọ̀gbẹlẹ̀), ìkópamọ́ omi (táǹkì, adágún omi tí a tẹ́ ọ̀rá sí), igi ìbòji fún kòkó, kọfí tàbí ẹran, ilé ẹran tó dára jù, àti oríṣiríṣi iṣẹ́ (diversification): fífi irè oko kejì, ewúrẹ́, adìẹ tàbí ẹja kún un kí àsìkò burúkú kan má bàa ba ọ́ jẹ́ pátápátá.",
            "Fún àṣàyàn kọ̀ọ̀kan, kọ iye owó rẹ̀ (rírà, kíkọ́, owó òṣìṣẹ́, ìtọ́jú) àti àǹfààní ọdọọdún rẹ̀ (ìkórè àfikún ní ọdún burúkú, oúnjẹ ẹran tí o kò ní rà mọ́, owó tuntun tó ń wọlé). Lẹ́yìn náà ṣírò àkókò tí owó yóò fi padà (payback): iye owó pín sí àǹfààní ọdọọdún ń fún ọ ní nǹkan bí iye ọdún kí ó tó san ara rẹ̀ padà. Rántí pé àwọn àǹfààní kan máa ń wá ní ọdún burúkú nìkan, nítorí náà pín wọn sí àsìkò púpọ̀.",
            "Àpẹẹrẹ pẹ̀lú iye owó tí a ṣe lásán: àgbẹ̀ kan ní Machakos fi táǹkì omi KES 60,000 tó ń fi nǹkan bí KES 20,000 pamọ́ lọ́dún nínú omi tí ó ń rà àti ẹ̀fọ́ tó ń bàjẹ́ (owó padà ní nǹkan bí ọdún 3) wé irúgbìn tó lè fara da ọ̀gbẹlẹ̀ tí ó wọ́n ju KES 2,000 lọ fún éékà kan, tí ó sì ń fi nǹkan bí KES 8,000 pamọ́ ní ọdún ọ̀dá tó ń wá lẹ́ẹ̀kan nínú ọdún méjì (ìpíndọ́gba KES 4,000 lọ́dún, owó padà ní àsìkò àkọ́kọ́). Àwọn méjèèjì lè yẹ ní ṣíṣe; irúgbìn ló rọrùn jù láti bẹ̀rẹ̀.",
            "Tún ṣàyẹ̀wò: Ṣé o lè tọ́jú rẹ̀? Ṣé ó bá òṣìṣẹ́ àti ilẹ̀ rẹ mu? Ṣé ó wúlò ní ọdún rere pẹ̀lú? Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ irú irúgbìn àti irú àwòṣe tó bá agbègbè rẹ mu."
          ],
          steps: ["Mú ewu tó ga jù láti Ẹ̀kọ́ 1.", "Kọ ìdókòwò méjì tàbí mẹ́ta tó ń dín in kù.", "Kọ gbogbo iye owó ọ̀kọ̀ọ̀kan: rírà, kíkọ́, owó òṣìṣẹ́, ìtọ́jú.", "Fojú díwọ̀n àǹfààní ọdọọdún, ìpíndọ́gba ọdún rere àti ọdún burúkú.", "Àkókò tí owó yóò fi padà = iye owó ÷ àǹfààní ọdọọdún.", "Ṣàyẹ̀wò òṣìṣẹ́, ìtọ́jú àti bí ó ṣe bá ìmọ̀ràn ìdálẹ́kọ̀ọ́ àgbẹ̀ mu."],
          words: [["Ìdókòwò ìmúra-sílẹ̀", "owó tàbí iṣẹ́ tí a ná báyìí kí o lè pàdánù díẹ̀ nígbà tí ojú-ọjọ́ bá kọlù."], ["Àkókò tí owó yóò fi padà (payback)", "bí ó ṣe pẹ́ tó kí owó tí ìdókòwò kan fi pamọ́ tàbí tí ó mú wọlé tó san iye owó rẹ̀."], ["Oríṣiríṣi iṣẹ́ (diversification)", "níní ju orísun owó kan lọ kí ìkùnà kan má bàa ba iṣẹ́ òwò jẹ́."]],
          slides: [
            { title: "Àwọn ìdókòwò ìmúra-sílẹ̀ tó wọ́pọ̀", bullets: ["Irúgbìn tó lè fara da ọ̀gbẹlẹ̀ tàbí tó ń tètè gbó", "Ìkópamọ́ omi: táǹkì, adágún omi tí a tẹ́ ọ̀rá sí", "Igi ìbòji, ilé ẹran tó dára jù", "Iṣẹ́ tuntun: ewúrẹ́, adìẹ, ẹja"] },
            { title: "Iye owó àti àǹfààní", bullets: ["Iye owó: rírà, kíkọ́, owó òṣìṣẹ́, ìtọ́jú", "Àǹfààní: àdánù tí a yẹra fún, owó tuntun", "Pín àǹfààní ọdún burúkú sí àsìkò púpọ̀"] },
            { title: "Owó padà (àpẹẹrẹ KES tí a ṣe lásán)", bullets: ["Táǹkì 60,000 ÷ 20,000 lọ́dún = nǹkan bí ọdún 3", "Irúgbìn +2,000 fún éékà ÷ 4,000 lọ́dún = àsìkò àkọ́kọ́", "Lo iye owó ní agbègbè rẹ"] },
            { title: "Kí o tó yan", bullets: ["Ṣé o lè tọ́jú rẹ̀?", "Ṣé ó bá ilẹ̀ àti òṣìṣẹ́ rẹ mu?", "Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ ohun tó bá agbègbè rẹ mu"] }
          ],
          sources: [CGIAR_MAIZE, FAO_CSA],
          tryIt: "Fún ewu tó ga jù lọ́dọ̀ rẹ, ṣírò iye owó ìdókòwò ìmúra-sílẹ̀ méjì pẹ̀lú iye owó ní agbègbè rẹ. Kọ iye owó, ìpíndọ́gba àǹfààní ọdọọdún àti àkókò tí owó yóò fi padà fún ọ̀kọ̀ọ̀kan, lẹ́yìn náà yí ìlà ká èyí tí o máa kọ́kọ́ ṣe kí o sì sọ ìdí rẹ̀.",
          youCanNow: "ṣírò iye owó ìdókòwò ìmúra-sílẹ̀ kí o sì fi wọ́n wéra pẹ̀lú àkókò tí owó wọn yóò fi padà.",
          quickCheck: [
            { objective: "O2", q: "Àwọ̀n ìbòji kan wọ́n GHS 3,000, ó sì ń fi nǹkan bí GHS 1,000 pamọ́ lọ́dún nínú tòmátì tó ń bàjẹ́. Nǹkan bí ìgbà wo ni owó rẹ̀ máa padà?", options: ["Oṣù 3", "Ọdún 1", "Ọdún 10", "Nǹkan bí ọdún 3"], answer: 3, why: "Àkókò tí owó yóò fi padà ni iye owó pín sí àǹfààní ọdọọdún: 3,000 ÷ 1,000 = nǹkan bí ọdún 3 (iye owó àpẹẹrẹ)." },
            { objective: "O2", q: "Irúgbìn tó lè fara da ọ̀gbẹlẹ̀ ń ṣèrànwọ́ ní ọdún ọ̀dá nìkan, tó ń wá nǹkan bí ẹ̀ẹ̀kan nínú ọdún mẹ́ta. Báwo ni o ṣe máa ka àǹfààní rẹ̀?", options: ["Pín owó tí ó fi pamọ́ ní ọdún ọ̀dá sí gbogbo àwọn ọdún", "Ka owó ọdún ọ̀dá náà ní gbogbo ọdún", "Má ṣe ka àǹfààní kankan", "Kà á ní ọdún òjò nìkan"], answer: 0, why: "Àwọn àǹfààní tó ń wá ní ọdún burúkú nìkan ni a gbọ́dọ̀ pín sí ọdún rere àti ọdún burúkú." }
          ]
        },
        {
          title: "Owó ìrànlọ́wọ́ ojú-ọjọ́ àti ẹ̀yáwó aláwọ̀ ewé",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kọ àwọn ìbéèrè tí o máa béèrè kí o tó gba ẹ̀yáwó ojú-ọjọ́ tàbí ẹ̀yáwó aláwọ̀ ewé, kí o sì ṣàyẹ̀wò pé ayánilówó ní ìwé àṣẹ.",
          text: [
            "Owó ìrànlọ́wọ́ ojú-ọjọ́ (climate finance) ni owó tí a yà sọ́tọ̀ fún mímúra sílẹ̀ de ìyípadà ojú-ọjọ́ tàbí dídín èéfín kù. Àwọn owó ńlá bí Green Climate Fund kì í yá àgbẹ̀ lówó tààrà; wọ́n ń ṣiṣẹ́ nípasẹ̀ ìjọba, báńkì àti àwọn àjọ. Ohun tó sábà máa ń dé ọ̀dọ̀ àgbẹ̀ ni: ẹ̀yáwó aláwọ̀ ewé tàbí ẹ̀yáwó ojú-ọjọ́ láti báńkì, báńkì microfinance àti SACCO (fún táǹkì, ẹ̀rọ fifa omi oòrùn, ohun èlò ìbomirin ẹ̀kán-ẹ̀kán, biogas); ètò san-díẹ̀díẹ̀ (pay-as-you-go) láti ọ̀dọ̀ àwọn tó ń ta ohun èlò; ètò ìjọba tàbí NGO tí wọ́n ń bá ọ san apá kan owó irúgbìn, táǹkì tàbí igi; àti owó ẹ̀bùn tàbí owó àfikún fún ẹgbẹ́ àti ẹgbẹ́ alájọṣe.",
            "Ibi tí o ti lè béèrè: báńkì rẹ tàbí SACCO rẹ, ẹgbẹ́ alájọṣe rẹ, ọ́fíìsì iṣẹ́ àgbẹ̀ ìpínlẹ̀ tàbí county rẹ àti òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀, àti àwọn báńkì iṣẹ́ àgbẹ̀ bí Bank of Agriculture ní Nàìjíríà tàbí Agricultural Development Bank ní Ghana. Àwọn ètò máa ń yí padà lóòrèkóòrè, nítorí náà béèrè èyí tó ṣí sílẹ̀ báyìí, kí o sì gba àlàyé rẹ̀ ní àkọsílẹ̀.",
            "Orúkọ \"aláwọ̀ ewé\" kò sọ ẹ̀yáwó di olówó pọ́ọ́kú tàbí aláìléwu. Fi gbogbo iye owó rẹ̀ wéra (èlé, owó ìsanwó míì, ìdánilójú), ìgbà tí o máa san án padà (ṣé ó bá ìkórè rẹ mu?), ohun tó máa ṣẹlẹ̀ tí ìkórè bá kùnà, àti àwọn májẹ̀mú èyíkéyìí (àwọn olùtajà tí a fọwọ́ sí, ìdálẹ́kọ̀ọ́, ìdánilójú). Ṣàyẹ̀wò pé ayánilówó ní ìwé àṣẹ: ní Kenya lórí àkọsílẹ̀ Central Bank of Kenya, ní Nàìjíríà lọ́dọ̀ Central Bank of Nigeria, níbòmíràn lọ́dọ̀ báńkì àpapọ̀ orílẹ̀-èdè rẹ tàbí àjọ tó ń bójú tó ẹgbẹ́ alájọṣe.",
            "Má ṣe san \"owó ìṣètò\" (processing fee) fún aṣojú kan láti rí owó ẹ̀bùn tàbí ẹ̀yáwó gbà láéláé, má sì ṣe fi PIN rẹ tàbí kóòdù owó orí fóònù (mobile money) rẹ hàn ẹnikẹ́ni."
          ],
          steps: ["Pinnu ohun tí owó náà máa rà àti àkókò tí owó rẹ̀ yóò fi padà (Ẹ̀kọ́ 2).", "Béèrè lọ́wọ́ báńkì, SACCO, ẹgbẹ́ alájọṣe àti ọ́fíìsì iṣẹ́ àgbẹ̀ ohun tó ṣí sílẹ̀ báyìí.", "Gba gbogbo iye owó, ọjọ́ sísan padà àti àwọn májẹ̀mú ní àkọsílẹ̀.", "Wá ayánilówó náà lórí àkọsílẹ̀ báńkì àpapọ̀ tàbí àjọ alábòójútó.", "Béèrè: kí ló máa ṣẹlẹ̀ tí ìkórè mi bá kùnà?", "Bá olùgbaninímọ̀ràn tí o fọkàn tán sọ̀rọ̀ kí o tó fọwọ́ sí i."],
          words: [["Owó ìrànlọ́wọ́ ojú-ọjọ́ (climate finance)", "owó fún mímúra sílẹ̀ de ìyípadà ojú-ọjọ́ tàbí dídín èéfín kù."], ["Ẹ̀yáwó aláwọ̀ ewé (green loan)", "ẹ̀yáwó fún nǹkan tó ń ran àyíká lọ́wọ́, bí ẹ̀rọ fifa omi oòrùn tàbí ẹ̀rọ biogas."], ["SACCO", "ẹgbẹ́ alájọṣe ìfipamọ́ àti ẹ̀yáwó tí àwọn ọmọ ẹgbẹ́ ní."], ["San-díẹ̀díẹ̀ (pay-as-you-go)", "sísan owó ohun èlò ní iye kékeré lóòrèkóòrè, nígbà púpọ̀ pẹ̀lú owó orí fóònù."]],
          slides: [
            { title: "Bí owó ojú-ọjọ́ ṣe ń dé ọ̀dọ̀ àgbẹ̀", bullets: ["Ẹ̀yáwó aláwọ̀ ewé: báńkì, microfinance, SACCO", "Ètò san-díẹ̀díẹ̀ fún ohun èlò", "Ètò àjọsan owó àti owó ẹ̀bùn fún ẹgbẹ́"] },
            { title: "Ibi tí o ti lè béèrè", bullets: ["Báńkì rẹ, SACCO tàbí ẹgbẹ́ alájọṣe", "Ọ́fíìsì iṣẹ́ àgbẹ̀ àti òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀", "Báńkì iṣẹ́ àgbẹ̀, bí Bank of Agriculture (NG), ADB (GH)"] },
            { title: "Aláwọ̀ ewé kò túmọ̀ sí olówó pọ́ọ́kú", bullets: ["Gbogbo iye owó: èlé + owó ìsanwó + ìdánilójú", "Ṣé sísan padà bá ìkórè rẹ mu?", "Tí ìkórè bá kùnà ńkọ́?"] },
            { title: "Dáàbò bo ara rẹ", bullets: ["Ṣé ayánilówó ní ìwé àṣẹ? Wo àkọsílẹ̀ báńkì àpapọ̀", "Má ṣe san \"owó ìṣètò\" fún aṣojú láéláé", "Má ṣe fi PIN tàbí kóòdù rẹ hàn láéláé"] }
          ],
          sources: [GCF, CBK, CBN, BOA, ADB_GH],
          tryIt: "Kọ ìbéèrè márùn-ún tí o máa béèrè lọ́wọ́ ayánilówó tàbí ètò ìrànlọ́wọ́ nípa ìdókòwò tí o yàn ní Ẹ̀kọ́ 2. Fi gbogbo iye owó, ọjọ́ sísan padà, àwọn májẹ̀mú, ohun tó máa ṣẹlẹ̀ tí ìkórè bá kùnà, àti bí o ṣe máa ṣàyẹ̀wò pé wọ́n ní ìwé àṣẹ kún un.",
          youCanNow: "kọ àwọn ìbéèrè tí o máa béèrè nípa ẹ̀yáwó ojú-ọjọ́ tàbí ẹ̀yáwó aláwọ̀ ewé kí o sì ṣàyẹ̀wò pé ayánilówó ní ìwé àṣẹ.",
          quickCheck: [
            { objective: "O3", q: "Aṣojú kan sọ pé o máa rí owó ẹ̀bùn ojú-ọjọ́ gbà tí o bá kọ́kọ́ fi KES 3,000 ránṣẹ́ gẹ́gẹ́ bí owó ìṣètò. Kí ni o máa ṣe?", options: ["San án kíákíá kí ètò náà tó parí", "Fi ìdajì ránṣẹ́ báyìí àti ìdajì lẹ́yìn náà", "Kọ̀ ọ́; àwọn ètò gidi kì í ní kí aṣojú gba owó báyìí", "Fún aṣojú náà ní PIN owó orí fóònù rẹ dípò rẹ̀"], answer: 2, why: "\"Owó ìṣètò\" tí a ń san fún aṣojú ṣáájú jẹ́ jìbìtì tó wọ́pọ̀; ṣàyẹ̀wò ètò náà lọ́dọ̀ ọ́fíìsì ìjọba." },
            { objective: "O3", q: "Ìbéèrè wo ló ṣe pàtàkì jù nígbà tí o bá ń fi ẹ̀yáwó aláwọ̀ ewé méjì fún ẹ̀rọ fifa omi oòrùn wéra?", options: ["Èwo ló ní àmì (logo) tó rẹwà jù", "Gbogbo iye owó àti bóyá sísan padà bá ìkórè rẹ mu", "Aṣojú wo ló ní ìwà rere jù", "Èwo ni wọ́n pè ní aláwọ̀ ewé"], answer: 1, why: "Gbogbo iye owó àti ìgbà sísan padà ló ń pinnu bóyá o lè san ẹ̀yáwó náà, ohunkóhun tí orúkọ rẹ̀ bá jẹ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ewu ojú-ọjọ́ jẹ́ ewu òwò",
        questions: [
          { objective: "O1", q: "Kí ni àyẹ̀wò ewu ojú-ọjọ́ fi kún kàlẹ́ńdà ewu ojú-ọjọ́?", options: ["Orúkọ àwọn oṣù", "Àsọtẹ́lẹ̀ òjò", "Bí ewu kọ̀ọ̀kan ṣe ṣeé ṣe tó àti iye owó tí ó lè ná iṣẹ́ òwò", "Àkọsílẹ̀ àwọn irè oko tí o máa dá gbígbìn dúró"], answer: 2, why: "Àyẹ̀wò náà ń fi bí ó ṣe ṣeé ṣe tó àti ipa owó sí ewu kọ̀ọ̀kan kí o lè tò wọ́n lẹ́sẹẹsẹ." },
          { objective: "O1", q: "Àkúnya omi ń dí ọ̀nà sí ọ̀dọ̀ olùrà rẹ fún ọ̀sẹ̀ méjì lọ́dọọdún. Níbo ni èyí máa wà?", options: ["Kò sí ibì kankan; kò kan ìkórè", "Nínú ipa lórí òwò nínú àyẹ̀wò ewu ojú-ọjọ́ rẹ", "Nínú ìwé ìrántí rẹ nìkan", "Nínú ètò olùrà, kì í ṣe tìrẹ"], answer: 1, why: "Àwọn ewu ojú-ọjọ́ sí ìrìnnà, olùrà àti òṣìṣẹ́ jẹ́ ewu òwò, wọ́n sì yẹ kí ó wà nínú àyẹ̀wò náà." },
          { objective: "O2", q: "Àgbẹ̀ ẹja tilapia kan ní Nàìjíríà ń wo ọ̀rá adágún omi NGN 400,000 tó ń fi NGN 200,000 pamọ́ lọ́dún. Ìgbà wo ni owó rẹ̀ máa padà?", options: ["Nǹkan bí ọdún 2", "Nǹkan bí ọdún 20", "Nǹkan bí oṣù 2", "Kò ní padà láéláé"], answer: 0, why: "400,000 ÷ 200,000 = nǹkan bí ọdún 2 (iye owó àpẹẹrẹ)." },
          { objective: "O2", q: "Èwo ni àpẹẹrẹ oríṣiríṣi iṣẹ́ (diversification) gẹ́gẹ́ bí ìdókòwò ìmúra-sílẹ̀?", options: ["Gbígbin irú àgbàdo kan náà sórí ilẹ̀ tó pọ̀ sí i", "Títa gbogbo ewúrẹ́ rẹ", "Yíyá owó sí i fún irè oko kan náà", "Fífi adìẹ kún oko àgbàdo kí àsìkò burúkú kan má bàa ba ọ́ jẹ́"], answer: 3, why: "Orísun owó kejì ń pín ewu ojú-ọjọ́ káàkiri iṣẹ́ òwò náà." },
          { objective: "O3", q: "Báwo ni àgbẹ̀ kan ní Kenya ṣe lè ṣàyẹ̀wò pé ayánilówó tó ń fúnni ní ẹ̀yáwó aláwọ̀ ewé ní ìwé àṣẹ?", options: ["Béèrè lọ́wọ́ aṣojú ayánilówó náà", "Wo àkọsílẹ̀ àwọn ilé-iṣẹ́ tó ní ìwé àṣẹ ti Central Bank of Kenya", "Wo iye \"like\" rẹ̀ lórí ẹ̀rọ ayélujára àwùjọ", "Gbà á gbọ́ tí ó bá sọ pé òun jẹ́ \"aláwọ̀ ewé\""], answer: 1, why: "Báńkì àpapọ̀ ń tẹ àkọsílẹ̀ àwọn báńkì àti báńkì microfinance tó ní ìwé àṣẹ jáde." }
        ]
      }
    },
    {
      name: "Orí 2: Dídín owó ìnáwó kù, carbon àti ṣíṣètò",
      lessons: [
        {
          title: "Ìdínkù èéfín tó tún ń fi owó pamọ́",
          objectives: ["O4"],
          minutes: 5,
          goal: "Dá ọ̀nà méjì mọ̀ lórí oko rẹ tó ń dín èéfín àti owó ìnáwó kù lẹ́ẹ̀kan náà.",
          text: [
            "Ìdínkù èéfín (mitigation) túmọ̀ sí dídín èéfín afẹ́fẹ́ ìgbóná-ayé (greenhouse gas) tí oko kan ń tú jáde kù, tàbí kíkó carbon púpọ̀ sí i pamọ́ sínú ilẹ̀ àti igi. Fún àgbẹ̀, ìdínkù èéfín tó dára jù ni èyí tó tún ń fi owó pamọ́, nítorí pé o jèrè kódà tí ẹnikẹ́ni kò bá sanwó fún ọ fún carbon náà.",
            "Ajílẹ̀ tí kò ṣòfò: ajílẹ̀ tí òjò, afẹ́fẹ́ tàbí àkókò tí kò tọ́ gbé lọ jẹ́ owó tó sọnù, ó sì tún ń tú èéfín jáde. Fífi í sí ẹ̀gbẹ́ gbòǹgbò ní àkókò tó tọ́, àti fífi ìgbẹ́ ẹran àti ajílẹ̀ àdàpọ̀ (compost) kún un, ń mú ìkórè púpọ̀ sí i wá láti inú àpò kọ̀ọ̀kan. Biogas: ẹ̀rọ biogas ilé (biodigester) ń sọ ìgbẹ́ màlúù tàbí ẹlẹ́dẹ̀ di gáàsì ìdáná, ó ń dín owó tí o ń ná lórí igi ìdáná tàbí èédú kù, omi tó kù (bio-slurry) sì jẹ́ ajílẹ̀. Africa Biogas Partnership Programme ti ṣèrànwọ́ láti kọ́ ẹ̀rọ biogas ilé ní Kenya, Burkina Faso àti àwọn orílẹ̀-èdè míì.",
            "Gbígbin igi pọ̀ mọ́ irè oko (agroforestry): igi lórí oko ń kó carbon pamọ́, wọ́n sì lè fúnni ní èso, oúnjẹ ẹran, igi ìdáná, pákó àti ìbòji (fún àpẹẹrẹ igi ìbòji nínú oko kòkó ní Côte d'Ivoire àti Ghana), èyí sì ń dín ohun tí o ń rà kù. Àwọn ọ̀nà ìfowópamọ́ míì: má ṣe dáná sun ìyókù irè oko (ó ń pa ìlera ilẹ̀ mọ́, ó sì ń fi ajílẹ̀ pamọ́), oúnjẹ tó dára jù fún ẹran (wàrà púpọ̀ sí i láti ara ẹran kọ̀ọ̀kan), àti ẹ̀rọ fifa omi oòrùn dípò dísù (owó ìnáwó tó kéré).",
            "Kọ owó tí o fi pamọ́ sílẹ̀. Tí ẹ̀rọ biogas bá wọ́n XOF 500,000, tí ó sì ń fi XOF 120,000 pamọ́ lọ́dún nínú èédú àti ajílẹ̀ (iye owó tí a ṣe lásán), o lè ṣírò àkókò tí owó rẹ̀ yóò fi padà bí ìdókòwò míì."
          ],
          steps: ["Kọ àwọn ohun èlò tí o ń rà jù sílẹ̀: ajílẹ̀, epo, oúnjẹ ẹran, igi ìdáná.", "Fún ọ̀kọ̀ọ̀kan, wá ọ̀nà tó ń lo díẹ̀ nínú rẹ̀ tàbí tó ń rọ́pò rẹ̀.", "Fojú díwọ̀n owó tí o máa fi pamọ́ lọ́dún.", "Ṣàyẹ̀wò iye owó àti àkókò tí owó yóò fi padà.", "Yan méjì láti bẹ̀rẹ̀."],
          words: [["Ìdínkù èéfín (mitigation)", "dídín èéfín afẹ́fẹ́ ìgbóná-ayé kù, tàbí kíkó carbon púpọ̀ sí i pamọ́ sínú ilẹ̀ àti igi."], ["Ẹ̀rọ biogas (biodigester)", "táǹkì tí a dí pa níbi tí ìgbẹ́ ẹran ti ń jẹrà tí ó sì ń ṣe gáàsì fún ìdáná tàbí iná."], ["Bio-slurry", "omi tó kù lẹ́yìn tí a ṣe biogas; a lè lò ó bí ajílẹ̀."], ["Gbígbin igi pọ̀ mọ́ irè oko (agroforestry)", "gbígbin igi pọ̀ mọ́ irè oko tàbí ẹran ọ̀sìn lórí ilẹ̀ kan náà."]],
          slides: [
            { title: "Ìdínkù èéfín tó ń mówó wá", bullets: ["Ó ń dín èéfín kù tàbí kó carbon pamọ́", "Ó tún ń dín owó ìnáwó rẹ kù", "O jèrè kódà láìsí owó carbon"] },
            { title: "Ọ̀nà mẹ́ta láti fi owó pamọ́", bullets: ["Ajílẹ̀ tí kò ṣòfò: ibi tó tọ́, àkókò tó tọ́", "Biogas: gáàsì ìdáná + ajílẹ̀ bio-slurry", "Gbígbin igi pọ̀ mọ́ irè oko: èso, oúnjẹ ẹran, igi ìdáná, ìbòji"] },
            { title: "Àwọn ọ̀nà míì", bullets: ["Má ṣe dáná sun ìyókù irè oko", "Oúnjẹ tó dára jù: wàrà púpọ̀ láti ara ẹran kọ̀ọ̀kan", "Ẹ̀rọ oòrùn dípò dísù fún fífa omi"] },
            { title: "Sọ ọ́ di owó", bullets: ["Àpẹẹrẹ: ẹ̀rọ biogas XOF 500,000", "Ó ń fi XOF 120,000 pamọ́ lọ́dún (a ṣe é lásán)", "Owó padà ní nǹkan bí ọdún 4"] }
          ],
          sources: [ABPP, FAO_AGROFOR, FAO_CSA],
          tryIt: "Kọ ohun èlò mẹ́ta tí o ń náwó lé lórí jù sílẹ̀. Fún ọ̀kọ̀ọ̀kan, kọ ọ̀nà kan tí yóò jẹ́ kí o lo díẹ̀ nínú rẹ̀, kí o sì fojú díwọ̀n owó tí o máa fi pamọ́ lọ́dún. Yan méjì láti fi sínú ètò rẹ.",
          youCanNow: "dá àwọn ọ̀nà tó ń dín èéfín àti owó ìnáwó kù mọ̀, kí o sì kọ owó tí wọ́n ń fi pamọ́ sílẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Ọ̀nà wo ló ń dín èéfín kù tí ó sì tún ń fi owó pamọ́ fún àgbẹ̀ ẹlẹ́dẹ̀?", options: ["Dídáná sun ìgbẹ́ ẹran ní gbangba", "Rírà èédú sí i", "Fífi ìgbẹ́ ẹran sílẹ̀ ní òkìtì lẹ́gbẹ̀ẹ́ odò", "Ẹ̀rọ biogas tó ń ṣe gáàsì ìdáná àti ajílẹ̀ bio-slurry"], answer: 3, why: "Biogas ń rọ́pò epo tí a ń rà, bio-slurry sì ń rọ́pò apá kan ajílẹ̀." },
            { objective: "O4", q: "Kí ló dé tí dídín ìṣòfò ajílẹ̀ kù fi jẹ́ àṣàyàn ìdínkù èéfín tó dára fún àgbẹ̀?", options: ["Ó ń fi owó pamọ́, ó sì ń dín èéfín kù", "Ó ń mú ilẹ̀ le sí i", "Ó túmọ̀ sí pé o kò ní nílò ajílẹ̀ mọ́ láéláé", "Gbogbo olùrà ló ń béèrè fún un"], answer: 0, why: "Ìṣòfò tó kéré túmọ̀ sí ìkórè púpọ̀ sí i láti àpò kọ̀ọ̀kan, nítorí náà àgbẹ̀ ń fi owó pamọ́, ó sì ń tú èéfín díẹ̀ jáde." }
          ]
        },
        {
          title: "Carbon credit: àǹfààní, jìbìtì àti àdéhùn tí kò tọ́",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò ìfilọ̀ carbon credit fún àwọn àmì ìkìlọ̀ kí o tó fọwọ́ sí tàbí san owó kankan.",
          text: [
            "Carbon credit jẹ́ ìwé ẹ̀rí tó sọ pé a dá tọ́ọ̀nù kan carbon dioxide dúró kí ó má wọ inú afẹ́fẹ́, tàbí pé a kó o pamọ́, fún àpẹẹrẹ nípa gbígbin igi, títún ilẹ̀ ṣe tàbí lílo ààrò ìdáná tí kò ní èéfín púpọ̀. Àwọn ilé-iṣẹ́ ló ń ra credit. Àwọn iṣẹ́ carbon kan ń sanwó fún àgbẹ̀ tàbí àwùjọ fún àwọn ọ̀nà tó ń kó carbon pamọ́. Àwọn iṣẹ́ carbon gidi ti forúkọ sílẹ̀ lọ́dọ̀ àjọ ìlànà bí Verra tàbí Gold Standard, a sì lè wá wọn pẹ̀lú orúkọ iṣẹ́ náà nínú àkọsílẹ̀ (registry) wọn.",
            "Ṣọ́ra gidigidi. Owó carbon sábà máa ń kéré, ó ń pẹ́ (nígbà míì ọdún púpọ̀ lẹ́yìn tí o bẹ̀rẹ̀), kò sì dájú, wọ́n sì máa ń kọ́kọ́ yọ owó ìdíwọ̀n àti àyẹ̀wò kúrò. Jìbìtì àti àdéhùn tí kò tọ́ wọ́pọ̀: àwọn tó ń béèrè owó lọ́wọ́ àgbẹ̀ láti \"darapọ̀\", tí wọ́n ń ṣèlérí owó ńlá kíákíá, tàbí tí wọ́n ń ní kí o fọwọ́ sí àdéhùn gígùn tó ń fi ẹ̀tọ́ lórí ilẹ̀, igi tàbí carbon rẹ fún wọn fún ọdún 20 tàbí jù bẹ́ẹ̀ lọ.",
            "Àwọn àmì ìkìlọ̀: o gbọ́dọ̀ sanwó láti darapọ̀; wọ́n ṣèlérí owó ńlá kíákíá; o kò lè gbé àdéhùn náà lọ sílé láti kà á; kò sí ní èdè tó yé ọ; ó ń fún ẹnìkan ní ẹ̀tọ́ lórí ilẹ̀ tàbí igi rẹ, tàbí ó ń dí ọ lọ́wọ́ láti gé wọn tàbí tà wọ́n; kò sọ iye tí o máa gbà, ìgbà tí o máa gbà á, àti ìpín tí olùdarí iṣẹ́ náà máa mú; iṣẹ́ náà kò sí nínú àkọsílẹ̀ kankan.",
            "Àwọn orílẹ̀-èdè kan ti ní òfin báyìí. Kenya's Climate Change (Carbon Markets) Regulations, 2024 ń béèrè pé kí a fọwọ́ sí àwọn iṣẹ́ carbon, àti pé fún iṣẹ́ lórí ilẹ̀ àwùjọ, kí àdéhùn ìdàgbàsókè àwùjọ (community development agreement) wà lórí bí a ṣe máa pín àǹfààní. Ṣàyẹ̀wò òfin orílẹ̀-èdè rẹ lọ́dọ̀ ilé-iṣẹ́ ìjọba tó ń bójú tó àyíká. Má ṣe fọwọ́ sí i lọ́jọ́ náà láéláé; ka gbogbo rẹ̀, béèrè lọ́wọ́ ẹgbẹ́ alájọṣe rẹ, agbẹjọ́rò tàbí olùgbaninímọ̀ràn tí o fọkàn tán, kí o sì pa ẹ̀dà kan mọ́."
          ],
          steps: ["Béèrè: kí ni orúkọ iṣẹ́ náà àti ID rẹ̀ nínú àkọsílẹ̀?", "Wá a nínú àkọsílẹ̀ (Verra, Gold Standard tàbí àwọn míì).", "Béèrè iye tí wọ́n máa san fún ọ, ìgbà tí wọ́n máa san án, àti ìpín tí olùdarí iṣẹ́ máa mú.", "Ka ẹ̀tọ́ wo lórí ilẹ̀, igi tàbí carbon ni o ń fún wọn, àti fún ìgbà mélòó.", "Kọ owó ìdarapọ̀ èyíkéyìí.", "Gbé àdéhùn náà lọ; gba ìmọ̀ràn kí o tó fọwọ́ sí i; pa ẹ̀dà kan mọ́."],
          words: [["Carbon credit", "ìwé ẹ̀rí fún tọ́ọ̀nù kan carbon dioxide tí a dá dúró kí ó má wọ inú afẹ́fẹ́ tàbí tí a kó pamọ́."], ["Olùdarí iṣẹ́ carbon (carbon project developer)", "ilé-iṣẹ́ tó ń darí iṣẹ́ carbon kan tí ó sì ń ta àwọn credit."], ["Àkọsílẹ̀ (registry)", "àkọsílẹ̀ gbogbogbò ti ìjọba tàbí àjọ ìlànà fún àwọn iṣẹ́ carbon àti àwọn credit wọn."], ["Pínpín àǹfààní (benefit sharing)", "bí a ṣe ń pín owó credit láàárín olùdarí iṣẹ́, àwọn àgbẹ̀ àti àwùjọ."]],
          slides: [
            { title: "Ohun tí carbon credit jẹ́", bullets: ["Tọ́ọ̀nù 1 CO2 tí a dá dúró kúrò nínú afẹ́fẹ́ tàbí tí a kó pamọ́", "Àwọn ilé-iṣẹ́ ló ń rà wọ́n", "Iṣẹ́ gidi wà nínú àkọsílẹ̀ (Verra, Gold Standard)"] },
            { title: "Òtítọ́ ọ̀rọ̀ náà", bullets: ["Owó sábà máa ń kéré, ó ń pẹ́, kò sì dájú", "Wọ́n ń kọ́kọ́ yọ owó ìdíwọ̀n kúrò", "Àwọn ìfilọ̀ kan jẹ́ jìbìtì"] },
            { title: "Àwọn àmì ìkìlọ̀", bullets: ["Owó ìdarapọ̀; ìlérí owó ńlá kíákíá", "O kò lè gbé àdéhùn lọ sílé láti kà á", "Ẹ̀tọ́ lórí ilẹ̀ tàbí igi rẹ fún ọ̀pọ̀ ọdún", "Kò sí ID àkọsílẹ̀; ìpín owó kò ṣe kedere"] },
            { title: "Dáàbò bo ara rẹ", bullets: ["Kenya: Carbon Markets Regulations 2024", "Ṣàyẹ̀wò lọ́dọ̀ ilé-iṣẹ́ ìjọba tó ń bójú tó àyíká", "Má ṣe fọwọ́ sí i lọ́jọ́ náà; gba ìmọ̀ràn; pa ẹ̀dà mọ́"] }
          ],
          sources: [VERRA, GOLD, KE_CARBON],
          tryIt: "Kọ àkọsílẹ̀ àyẹ̀wò tó ní ó kéré tán ìbéèrè márùn-ún tí o máa béèrè kí o tó darapọ̀ mọ́ ètò carbon credit èyíkéyìí. Lẹ́yìn náà, ronú pé aṣojú kan ṣèlérí XOF 50,000 fún àgbẹ̀ kọ̀ọ̀kan nínú ẹgbẹ́ rẹ tí ẹ bá fọwọ́ sí i lónìí tí ẹ sì san XOF 5,000 láti forúkọ sílẹ̀: sàmì sí àwọn àmì ìkìlọ̀ tí ìfilọ̀ yìí fi hàn.",
          youCanNow: "ṣàyẹ̀wò ìfilọ̀ carbon credit fún àwọn àmì ìkìlọ̀ jìbìtì tàbí àdéhùn tí kò tọ́.",
          quickCheck: [
            { objective: "O5", q: "Aṣojú carbon kan ní kí àgbẹ̀ kọ̀ọ̀kan san NGN 10,000 láti darapọ̀, ó sì ṣèlérí owó ní oṣù tó ń bọ̀. Kí ni èyí ṣeé ṣe kí ó jẹ́ jù?", options: ["Iṣẹ́ tó forúkọ sílẹ̀ bí ó ti yẹ", "Owó ìrànlọ́wọ́ ìjọba", "Jìbìtì tàbí ìfilọ̀ tí kò tọ́ rárá", "Ìdálẹ́kọ̀ọ́ ọ̀fẹ́"], answer: 2, why: "Owó ìdarapọ̀ àti ìlérí owó ńlá kíákíá jẹ́ àmì ìkìlọ̀ jìbìtì carbon tí a mọ̀ dáadáa." },
            { objective: "O5", q: "Kí ni o máa wá nínú àdéhùn carbon kí o tó fọwọ́ sí i?", options: ["Iye tí o máa gbà, ìgbà tí o máa gbà á, àti ẹ̀tọ́ lórí ilẹ̀ tàbí igi tí o ń fúnni àti fún ìgbà mélòó", "Àwọ̀ àmì (logo) nìkan", "Bóyá aṣojú náà ní ìwà rere", "Kò sí nǹkan kan, tí iṣẹ́ náà bá jẹ mọ́ igi"], answer: 0, why: "Owó, àkókò àti ẹ̀tọ́ lórí ilẹ̀ tàbí igi rẹ ló ń pinnu bóyá àdéhùn náà tọ́." }
          ]
        },
        {
          title: "Fífi ewu ojú-ọjọ́ kún ètò òwò rẹ",
          objectives: ["O6", "O1", "O2"],
          minutes: 5,
          goal: "Kọ ètò ìfaradà ojú-ọjọ́ ojú-ewé kan fún iṣẹ́ òwò oko rẹ.",
          text: [
            "Àwọn ayánilówó, àwọn olùrà àti àwọn ètò ìrànlọ́wọ́ ń béèrè sí i bí oko kan ṣe máa fara da ìjàǹbá ojú-ọjọ́. Apá kúkúrú nípa ojú-ọjọ́ nínú ètò òwò rẹ ń fi hàn pé o ti ronú nípa rẹ̀, ó sì ń ràn ọ́ lọ́wọ́ láti pinnu ibi tí owó tìrẹ máa kọ́kọ́ lọ.",
            "Ètò ojú-ewé kan rẹ ní apá mẹ́fà: 1. ewu ojú-ọjọ́ mẹ́ta tó ga jù pẹ̀lú bí wọ́n ṣe ṣeé ṣe tó àti iye owó wọn (Ẹ̀kọ́ 1); 2. ìdókòwò ìmúra-sílẹ̀ méjì tàbí mẹ́ta pẹ̀lú iye owó, àǹfààní àti àkókò tí owó yóò fi padà (Ẹ̀kọ́ 2); 3. bí o ṣe máa san án: owó ìfipamọ́, ẹgbẹ́, ẹ̀yáwó tàbí ètò ìrànlọ́wọ́, àti àwọn ìbéèrè rẹ fún ayánilówó (Ẹ̀kọ́ 3); 4. ọ̀nà méjì tó ń dín owó ìnáwó àti èéfín kù (Ẹ̀kọ́ 4); 5. àwọn òfin rẹ fún ìfilọ̀ carbon èyíkéyìí (Ẹ̀kọ́ 5); 6. ọjọ́ àtúnyẹ̀wò lẹ́yìn àsìkò kọ̀ọ̀kan.",
            "Fi ìlà \"ọdún burúkú\" kún ìṣàn owó rẹ: owó tí o retí pé ó máa wọlé tí ewu pàtàkì bá kọlù, àti bí o ṣe máa ṣì san ẹ̀yáwó, owó ilé-ìwé àti ohun èlò oko, fún àpẹẹrẹ láti owó ìfipamọ́, iṣẹ́ kejì tàbí ìdánilójú (insurance). Tí o bá ń lo ìdánilójú irè oko tàbí ẹran ọ̀sìn, ṣàyẹ̀wò pé ilé-iṣẹ́ ìdánilójú náà ní ìwé àṣẹ (ní Kenya lọ́dọ̀ Insurance Regulatory Authority), kí o sì ka ohun tó ń mú kí wọ́n sanwó (payout trigger).",
            "O lè ní kí olùrànlọ́wọ́ AI lórí fóònù sọ àkọsílẹ̀ rẹ di tábìlì tó mọ́, tàbí kí ó bi ọ́ ní ìbéèrè nípa àwọn àlàfo nínú ètò rẹ, ṣùgbọ́n àwọn nọ́mbà gbọ́dọ̀ wá láti inú àkọsílẹ̀ tìrẹ àti iye owó ní agbègbè rẹ. Má ṣe tẹ nọ́mbà ìdánimọ̀, nọ́mbà àkáǹtì tàbí PIN sínú rẹ̀."
          ],
          steps: ["Da tábìlì ewu rẹ láti Ẹ̀kọ́ 1 kọ: ewu mẹ́ta tó ga jù.", "Fi ìdókòwò méjì tàbí mẹ́ta tí o ti ṣírò iye wọn kún un.", "Kọ bí o ṣe máa sanwó àti àwọn ìbéèrè rẹ fún ayánilówó.", "Fi ọ̀nà ìdínkù èéfín méjì tó ń fi owó pamọ́ kún un.", "Kọ àwọn òfin rẹ fún ìfilọ̀ carbon.", "Fi ìlà ìṣàn owó ọdún burúkú àti ọjọ́ àtúnyẹ̀wò kún un."],
          words: [["Ètò òwò", "ètò kúkúrú tí a kọ sílẹ̀ nípa ohun tí oko rẹ ń ṣe, owó ìnáwó rẹ̀, owó tó ń wọlé àti àwọn àfojúsùn rẹ̀."], ["Ìṣẹ̀lẹ̀ ọdún burúkú (bad-year scenario)", "ètò fún ohun tó máa ṣẹlẹ̀ sí owó tó ń wọlé àti àwọn ìsanwó tí ewu pàtàkì bá kọlù."], ["Ohun tó ń mú ìsanwó ṣẹlẹ̀ (payout trigger)", "ìṣẹ̀lẹ̀ kan, bí òjò tó kéré tí ibùdó ìwọ̀n òjò kan wọ̀n, tó ń mú kí ìdánilójú sanwó."]],
          slides: [
            { title: "Ìdí tí ojú-ọjọ́ fi yẹ kí ó wà nínú ètò", bullets: ["Ayánilówó àti olùrà ń béèrè bí o ṣe máa fara dà á", "Ó ń fi ibi tí owó rẹ máa kọ́kọ́ lọ hàn"] },
            { title: "Apá mẹ́fà, ojú-ewé kan", bullets: ["Ewu, ìdókòwò àti àkókò tí owó yóò fi padà", "Bí o ṣe máa sanwó", "Ọ̀nà ìfowópamọ́, òfin carbon", "Ọjọ́ àtúnyẹ̀wò"] },
            { title: "Ṣètò fún ọdún burúkú", bullets: ["Owó tó máa wọlé tí ewu pàtàkì bá kọlù", "Bí o ṣe máa ṣì san ẹ̀yáwó àti owó ilé-ìwé", "Ìdánilójú: ilé-iṣẹ́ tó ní ìwé àṣẹ, ohun tó ń mú ìsanwó ṣẹlẹ̀ tó ṣe kedere"] },
            { title: "AI lè tò ó, kò lè pinnu", bullets: ["Ní kí ó ṣe tábìlì tàbí kí ó rí àwọn àlàfo", "Àwọn nọ́mbà ń wá láti inú àkọsílẹ̀ rẹ", "Kò sí nọ́mbà ìdánimọ̀, nọ́mbà àkáǹtì tàbí PIN"] }
          ],
          sources: [IRA, FAO_CSA],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ìfaradà ojú-ọjọ́ ojú-ewé kan rẹ pẹ̀lú gbogbo apá mẹ́fà àti ìlà ìṣàn owó ọdún burúkú. Kà á fún ẹnìkan nínú ẹbí rẹ, ọmọ ẹgbẹ́ rẹ tàbí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀, kí o sì ní kí wọ́n béèrè ìbéèrè kan tí o kò tíì dáhùn.",
          youCanNow: "kọ ètò ìfaradà ojú-ọjọ́ ojú-ewé kan fún iṣẹ́ òwò oko rẹ tí ayánilówó, olùrà tàbí ètò ìrànlọ́wọ́ lè kà.",
          quickCheck: [
            { objective: "O6", q: "Apá wo ló KÙ nínú ètò yìí: ewu, ìdókòwò tí a ṣírò iye wọn, bí a ṣe máa sanwó, ọ̀nà ìdínkù èéfín, òfin carbon?", options: ["Irè oko tí àgbẹ̀ náà fẹ́ràn jù", "Àkọsílẹ̀ àwọn aládùúgbò", "Ojú-ọjọ́ ọ̀la", "Ọjọ́ àtúnyẹ̀wò"], answer: 3, why: "Ètò nílò ọjọ́ àtúnyẹ̀wò kí a lè ṣe àtúnṣe rẹ̀ lẹ́yìn àsìkò kọ̀ọ̀kan." },
            { objective: "O6", q: "Kí ni ìlà ọdún burúkú nínú ìṣàn owó rẹ ń fi hàn?", options: ["Iye tí o máa rí ní ọdún tó dára jù", "Bí o ṣe máa ṣì san ẹ̀yáwó àti owó ìnáwó tí ewu pàtàkì bá kọlù", "Iye owó ajílẹ̀ ní ọdún tó kọjá", "Iye òṣìṣẹ́ tí o mọ̀"], answer: 1, why: "Ó ń dán wò bóyá iṣẹ́ òwò náà máa la ìjàǹbá tí o sọ pé ó ṣeé ṣe jù tí ó sì wọ́n jù já." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídín owó ìnáwó kù, carbon àti ṣíṣètò",
        questions: [
          { objective: "O4", q: "Àgbẹ̀ kọfí kan gbin igi ìbòji tó tún ń so èso tí ó sì ń fúnni ní igi ìdáná. Kí ni èyí?", options: ["Gbígbin igi pọ̀ mọ́ irè oko tó ń fi owó pamọ́ tí ó sì ń kó carbon pamọ́", "Dídáná sun ìyókù irè oko", "Jìbìtì carbon", "Lílo ajílẹ̀ jù"], answer: 0, why: "Igi pẹ̀lú irè oko ń kó carbon pamọ́, wọ́n sì ń fúnni ní ohun tí àgbẹ̀ ìbá rà." },
          { objective: "O4", q: "Èwo ni KÌ Í ṢE ọ̀nà ìdínkù èéfín tó ń fi owó pamọ́?", options: ["Fífi ajílẹ̀ sí ẹ̀gbẹ́ gbòǹgbò ní àkókò tó tọ́", "Dídáná sun ìyókù irè oko lẹ́yìn ìkórè", "Lílo ẹ̀rọ biogas fún gáàsì ìdáná", "Oúnjẹ tó dára jù fún wàrà púpọ̀ sí i láti ara màlúù kọ̀ọ̀kan"], answer: 1, why: "Dídáná sun ìyókù irè oko ń ṣòfò ìlera ilẹ̀, ó sì ń tú èéfín jáde; àwọn yòókù ń dín owó ìnáwó àti èéfín kù." },
          { objective: "O5", q: "Báwo ni o ṣe lè ṣàyẹ̀wò pé iṣẹ́ carbon kan jẹ́ gidi?", options: ["Béèrè lọ́wọ́ aṣojú bóyá ó jẹ́ gidi", "Ka iye ènìyàn tó wá sí ìpàdé", "Wá a pẹ̀lú orúkọ tàbí ID nínú àkọsílẹ̀ bí Verra tàbí Gold Standard", "Wo ọkọ̀ aṣojú náà"], answer: 2, why: "Àwọn iṣẹ́ gidi wà nínú àkọsílẹ̀ gbogbogbò tí àwọn àjọ ìlànà carbon ń tọ́jú." },
          { objective: "O5", q: "Àdéhùn carbon kan dí ọ lọ́wọ́ láti gé tàbí ta igi tìrẹ fún ọdún 30. Kí ni o máa ṣe?", options: ["Fọwọ́ sí i; igi jẹ́ owó ọ̀fẹ́", "Fọwọ́ sí i báyìí kí o sì kà á lẹ́yìn náà", "Ní kí aṣojú ka àwọn apá tó dára fún ọ", "Gbé e lọ, gba ìmọ̀ràn, kí o sì fọwọ́ sí i nìkan tí ó bá yé ọ tí o sì gba àwọn májẹ̀mú náà"], answer: 3, why: "Òdiwọ̀n gígùn lórí ilẹ̀ àti igi rẹ jẹ́ ọ̀rọ̀ pàtàkì; ka gbogbo rẹ̀ kí o sì kọ́kọ́ gba ìmọ̀ràn tí o fọkàn tán." },
          { objective: "O6", q: "Kí ló dé tí ètò ìfaradà ojú-ọjọ́ fi gbọ́dọ̀ ní ọjọ́ àtúnyẹ̀wò?", options: ["Àwọn ayánilówó fẹ́ràn ọjọ́", "Ewu, iye owó àti èsì ń yí padà, nítorí náà a máa ń ṣe àtúnṣe ètò náà ní àsìkò kọ̀ọ̀kan", "Ó ń mú ojú-ewé gùn sí i", "Òfin ló pa á láṣẹ"], answer: 1, why: "Àtúnyẹ̀wò lẹ́yìn àsìkò kọ̀ọ̀kan ń jẹ́ kí ètò náà bá ohun tó ṣẹlẹ̀ gan-an mu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Iṣẹ́ Òwò Àgbẹ̀ Tó Lè Fara Da Ìyípadà Ojú-ọjọ́",
    questions: [
      { objective: "O1", q: "Àyẹ̀wò ewu ojú-ọjọ́ ń béèrè ìbéèrè méjì nípa ewu kọ̀ọ̀kan. Àwọn méjì wo?", options: ["Báwo ló ṣe ṣeé ṣe tó, èló ló sì máa ná ọ?", "Ta ló fà á, ìgbà wo ló sì bẹ̀rẹ̀?", "Rédíò wo ló ròyìn rẹ̀, ní agogo mélòó?", "Ṣé ìròyìn rere ni, ṣé ó sì tọ́?"], answer: 0, why: "Bí ó ṣe ṣeé ṣe tó àti ipa owó ló ń jẹ́ kí o tò àwọn ewu lẹ́sẹẹsẹ." },
      { objective: "O1", q: "Níbo ni o ti lè rí àwọn àdánù tó ti kọjá láti fojú díwọ̀n iye owó ewu kan?", options: ["Lọ́dọ̀ aṣojú carbon nìkan", "Láti inú èsì tẹ́tẹ́", "Láti inú àkọsílẹ̀ oko rẹ àti ohun tí àwọn àgbẹ̀ àgbà rántí nípa àwọn ọdún burúkú", "Láti inú iye owó fóònù"], answer: 2, why: "Àkọsílẹ̀ àti ìrántí àdúgbò ń fi ohun tí àwọn ọdún burúkú ná gan-an hàn." },
      { objective: "O1", q: "Ìnira ooru ń dín iye ẹyin kù nínú ilé adìẹ ẹlẹ́yin rẹ ní ọ̀pọ̀ ọdún. Báwo ni o ṣe máa díwọ̀n rẹ̀?", options: ["Kò ṣeé ṣe, kò sì ná owó", "Kì í ṣe ewu ojú-ọjọ́", "Ìṣòro oúnjẹ adìẹ nìkan ni", "Ó ṣeé ṣe gan-an, ó sì ń ná owó nítorí ẹyin tó sọnù"], answer: 3, why: "Ó ń ṣẹlẹ̀ ní ọ̀pọ̀ ọdún, ó sì ń dín ẹyin kù, nítorí náà ó ṣeé ṣe, ó sì wọ́n." },
      { objective: "O2", q: "Kí ni àkókò tí owó yóò fi padà (payback)?", options: ["Èlé lórí ẹ̀yáwó", "Bí ó ṣe pẹ́ tó kí owó tí ìdókòwò kan fi pamọ́ tàbí tí ó mú wọlé tó san iye owó rẹ̀", "Iye owó irúgbìn", "Owó tí ṣọ́ọ̀bù dá padà"], answer: 1, why: "Àkókò tí owó yóò fi padà = iye owó ÷ àǹfààní ọdọọdún." },
      { objective: "O2", q: "Èwo ló jẹ́ apá kan iye owó táǹkì omi?", options: ["Rírà, kíkọ́, owó òṣìṣẹ́ àti ìtọ́jú", "Iye owó rẹ̀ ní ṣọ́ọ̀bù nìkan", "Owó ọkọ̀ nìkan", "Kò sí nǹkan, tí ó bá jẹ́ ẹ̀bùn"], answer: 0, why: "Gbogbo iye owó ní gbogbo ohun tí a nílò láti kọ́ ọ àti láti jẹ́ kí ó máa ṣiṣẹ́ nínú." },
      { objective: "O2", q: "Èwo ni ìdókòwò ìmúra-sílẹ̀ fún ọ̀dá àárín àsìkò?", options: ["Títa ẹ̀rọ fifa omi", "Gbígbìn pẹ́ ní gbogbo ọdún láìsí ìdí", "Irúgbìn tó lè fara da ọ̀gbẹlẹ̀ tàbí tó ń tètè gbó", "Dídáná sun ìyókù irè oko"], answer: 2, why: "Irú irúgbìn tó lè fara da ọ̀gbẹlẹ̀ àti èyí tó ń tètè gbó ń dín àdánù kù nígbà ọ̀dá." },
      { objective: "O2", q: "Ìdókòwò méjì ní àǹfààní kan náà. Ọ̀kan wọ́n díẹ̀, ó sì rọrùn láti tọ́jú. Èwo ni o sábà máa kọ́kọ́ ṣe?", options: ["Èyí tó wọ́n", "Kò sí ọ̀kankan", "Àwọn méjèèjì lẹ́ẹ̀kan náà pẹ̀lú ẹ̀yáwó", "Èyí tó wọ́n díẹ̀ tí o sì lè tọ́jú"], answer: 3, why: "Iye owó tó kéré àti ìtọ́jú tó rọrùn ń jẹ́ kí owó padà kíákíá láìléwu." },
      { objective: "O3", q: "Báwo ni àwọn owó ìrànlọ́wọ́ ojú-ọjọ́ ńlá ṣe sábà máa ń dé ọ̀dọ̀ àgbẹ̀?", options: ["Nípasẹ̀ báńkì, ìjọba àti àwọn àjọ, gẹ́gẹ́ bí ẹ̀yáwó àti ètò ìrànlọ́wọ́", "Nípa fífi owó ránṣẹ́ sí fóònù àgbẹ̀ kọ̀ọ̀kan", "Nípasẹ̀ àwọn aṣojú carbon tó ń gba owó", "Wọn kì í dé ọ̀dọ̀ àgbẹ̀ láéláé"], answer: 0, why: "Àwọn owó bí Green Climate Fund ń ṣiṣẹ́ nípasẹ̀ ìjọba, báńkì àti àwọn àjọ tí a fọwọ́ sí." },
      { objective: "O3", q: "Kí o tó gba ẹ̀yáwó aláwọ̀ ewé, ìbéèrè wo ló ṣe pàtàkì jù?", options: ["Ṣé òṣìṣẹ́ ẹ̀yáwó náà ní ìwà rere?", "Kí ni gbogbo iye owó rẹ̀, ṣé sísan padà sì bá ìkórè mi mu?", "Ṣé \"aláwọ̀ ewé\" wà nínú orúkọ rẹ̀?", "Ṣé ọ́fíìsì náà wà nítòsí ọjà?"], answer: 1, why: "Gbogbo iye owó àti ìgbà sísan padà ló ń pinnu bóyá o lè san án." },
      { objective: "O3", q: "Ní Nàìjíríà, níbo ni o ti lè ṣàyẹ̀wò pé ayánilówó kan ní ìwé àṣẹ?", options: ["Nínú ẹgbẹ́ WhatsApp kan", "Lọ́dọ̀ aṣojú ayánilówó náà", "Lọ́dọ̀ Central Bank of Nigeria", "Lórí àlẹ̀mọ́ kan ní ọjà"], answer: 2, why: "Central Bank of Nigeria ló ń bójú tó àwọn ilé-iṣẹ́ tó ní ìwé àṣẹ, ó sì ń kọ wọ́n sílẹ̀." },
      { objective: "O3", q: "Ẹnìkan fẹ́ \"mú kí owó ẹ̀bùn ojú-ọjọ́ rẹ yára\" tí o bá san owó sí nọ́mbà owó orí fóònù rẹ̀. Kí ni èyí?", options: ["Àmì ìkìlọ̀ jìbìtì", "Ìgbésẹ̀ tó wọ́pọ̀", "Òfin ìjọba", "Owó ẹgbẹ́ alájọṣe"], answer: 0, why: "Àwọn ètò gidi kì í ní kí o sanwó fún aṣojú láti mú owó ẹ̀bùn yára." },
      { objective: "O4", q: "Kí ni ìdínkù èéfín (mitigation)?", options: ["Kíkó lọ sí oko tuntun", "Ìdánilójú fún ọ̀gbẹlẹ̀", "Títa irè oko ní kùtùkùtù", "Dídín èéfín afẹ́fẹ́ ìgbóná-ayé kù tàbí kíkó carbon púpọ̀ sí i pamọ́"], answer: 3, why: "Ìdínkù èéfín ń dín èéfín kù tàbí ń kó carbon pamọ́ sínú ilẹ̀ àti igi." },
      { objective: "O4", q: "Kí ni bio-slurry?", options: ["Oògùn apakòkòrò", "Omi tó kù lẹ́yìn tí a ṣe biogas, tí a ń lò bí ajílẹ̀", "Irú epo kan tí wọ́n ń tà ní ṣọ́ọ̀bù", "Àrùn màlúù"], answer: 1, why: "Bio-slurry láti ẹ̀rọ biogas lè bọ́ ilẹ̀." },
      { objective: "O4", q: "Ọ̀nà wo ló ń fi owó pamọ́ TÍ Ó SÌ ń dín èéfín kù lórí oko màlúù ìfúnwàrà?", options: ["Oúnjẹ tó dára jù kí màlúù kọ̀ọ̀kan lè fúnni ní wàrà púpọ̀ sí i", "Dídáná sun ìgbẹ́ ẹran", "Rírà màlúù ju bí oúnjẹ ṣe tó lọ", "Fífi pápá oko sílẹ̀ láìsí koríko"], answer: 0, why: "Wàrà púpọ̀ sí i láti ara ẹran kọ̀ọ̀kan nítorí oúnjẹ tó dára túmọ̀ sí owó ìnáwó àti èéfín tó kéré fún lítà kọ̀ọ̀kan." },
      { objective: "O5", q: "Kí ni carbon credit?", options: ["Ẹ̀yáwó fún irúgbìn", "Ẹ̀dínwó lórí ajílẹ̀", "Ìwé ẹ̀rí fún tọ́ọ̀nù kan CO2 tí a dá dúró kúrò nínú afẹ́fẹ́ tàbí tí a kó pamọ́", "Ẹ̀bùn owó orí fóònù"], answer: 2, why: "Credit kọ̀ọ̀kan dúró fún tọ́ọ̀nù kan carbon dioxide tí a yẹra fún tàbí tí a kó pamọ́." },
      { objective: "O5", q: "Èwo ni àmì ìkìlọ̀ nínú ìfilọ̀ carbon?", options: ["Iṣẹ́ náà ní ID àkọsílẹ̀ tí o lè wá", "O lè gbé àdéhùn náà lọ sílé láti kà á", "Owó àti ìpín ti wà ní àkọsílẹ̀ kedere", "O gbọ́dọ̀ san owó láti darapọ̀"], answer: 3, why: "Owó ìdarapọ̀ jẹ́ àmì jìbìtì tí a mọ̀ dáadáa." },
      { objective: "O5", q: "Ní Kenya, kí ni àwọn iṣẹ́ carbon lórí ilẹ̀ àwùjọ nílò?", options: ["Kò sí nǹkan kan rárá", "Àdéhùn ìdàgbàsókè àwùjọ lórí bí a ṣe máa pín àǹfààní", "Ìlérí ẹnu nìkan", "Ẹ̀yáwó láti ọ̀dọ̀ aṣojú"], answer: 1, why: "Kenya's Carbon Markets Regulations, 2024 ń béèrè àdéhùn ìdàgbàsókè àwùjọ fún irú àwọn iṣẹ́ bẹ́ẹ̀." },
      { objective: "O6", q: "Kí ló yẹ kí ó wà nínú ètò ìfaradà ojú-ọjọ́ ojú-ewé kan?", options: ["Àwọn ewu tó ga jù, ìdókòwò tí a ṣírò iye wọn, bí a ṣe máa sanwó, àwọn ọ̀nà ìfowópamọ́, òfin carbon àti ọjọ́ àtúnyẹ̀wò", "Orúkọ oko nìkan", "PIN owó orí fóònù rẹ", "Àkọsílẹ̀ gbogbo ọjọ́ tí òjò rọ̀ ní ọdún tó kọjá"], answer: 0, why: "Àwọn apá mẹ́fà yẹn ló ń jẹ́ kí ètò náà pé, kí ó sì wúlò." },
      { objective: "O6", q: "Báwo ni olùrànlọ́wọ́ AI lórí fóònù ṣe lè ràn ọ́ lọ́wọ́ pẹ̀lú ètò rẹ?", options: ["Ó lè hùmọ̀ iye owó rẹ", "Ó yẹ kí ó máa tọ́jú PIN báńkì rẹ", "Ó lè to àkọsílẹ̀ rẹ sínú tábìlì kí ó sì tọ́ka sí àwọn àlàfo", "Ó ń fọwọ́ sí fọ́ọ̀mù ẹ̀yáwó fún ọ"], answer: 2, why: "AI lè tò nǹkan kí ó sì béèrè ìbéèrè, ṣùgbọ́n àwọn nọ́mbà ń wá láti inú àkọsílẹ̀ rẹ." },
      { objective: "O6", q: "Ètò rẹ fi hàn pé o kò ní lè san ẹ̀yáwó padà tí ọ̀dá bá dé. Kí ni o máa ṣe?", options: ["Fojú fò ó dá", "Fi pamọ́ fún ayánilówó", "Yá owó sí i", "Yí ètò náà padà: ẹ̀yáwó tó kéré, owó ìfipamọ́, iṣẹ́ kejì tàbí ìdánilójú"], answer: 3, why: "Ìlà ọdún burúkú wà níbẹ̀ láti yí ètò padà ṣáájú ìjàǹbá, kì í ṣe lẹ́yìn rẹ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 5, 8, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ewu ojú-ọjọ́ ní owó", objective: "O1", notYet: "A kọ àwọn ewu sílẹ̀ láìsí bí wọ́n ṣe ṣeé ṣe tó tàbí iye owó wọn, tàbí wọn kò tó mẹ́ta.", meets: "Ewu mẹ́ta, ọ̀kọ̀ọ̀kan pẹ̀lú bí ó ṣe ṣeé ṣe tó àti iye owó tí a fojú díwọ̀n ní owó orílẹ̀-èdè.", exceeds: "Ó tún fi ipa lórí òwò hàn (ẹ̀yáwó, olùrà, òṣìṣẹ́) àti ibi tí a ti rí ìdíwọ̀n náà." },
      { name: "Ìdókòwò tí a ṣírò iye wọn", objective: "O2", notYet: "A dárúkọ àwọn ìdókòwò ṣùgbọ́n a kò ṣírò iye owó wọn.", meets: "Ìdókòwò méjì tàbí mẹ́ta pẹ̀lú gbogbo iye owó, ìpíndọ́gba àǹfààní ọdọọdún àti àkókò tí owó yóò fi padà.", exceeds: "Ó lo iye owó gidi tí wọ́n sọ ní agbègbè, ó sì ṣàlàyé ìdí tí ó fi yan èyí tí ó máa kọ́kọ́ ṣe." },
      { name: "Owó ìnáwó àti àyẹ̀wò ayánilówó", objective: "O3", notYet: "Kò sí ètò fún bí a ṣe máa sanwó, tàbí ayánilówó tí a kò ṣàyẹ̀wò rárá.", meets: "Ó sọ bí a ṣe máa san án, ó sì kọ àwọn ìbéèrè nípa gbogbo iye owó, ọjọ́ sísan padà, àwọn májẹ̀mú àti ìwé àṣẹ.", exceeds: "Ó ti fi ọ̀nà owó méjì wéra, ó sì ti ṣàyẹ̀wò ayánilówó náà lórí àkọsílẹ̀ àjọ alábòójútó." },
      { name: "Àwọn ọ̀nà tó ń fi owó pamọ́", objective: "O4", notYet: "Kò sí ọ̀nà ìdínkù èéfín, tàbí ọ̀kan tí kò fi owó tí a fi pamọ́ hàn.", meets: "Ọ̀nà méjì tó ń dín èéfín kù, ọ̀kọ̀ọ̀kan pẹ̀lú ohun èlò tàbí owó tí ó ń fi pamọ́.", exceeds: "Ó fi àkókò tí owó yóò fi padà hàn fún ọ̀nà èyíkéyìí tó nílò ìnáwó, bí ẹ̀rọ biogas." },
      { name: "Òfin fún ìfilọ̀ carbon", objective: "O5", notYet: "Kò sí òfin, tàbí ó máa fọwọ́ sí i tàbí sanwó lọ́jọ́ náà.", meets: "Ó kéré tán àyẹ̀wò mẹ́rin: àkọsílẹ̀, owó àti ìpín, ẹ̀tọ́ lórí ilẹ̀ àti igi, kò sí owó ìdarapọ̀, ìmọ̀ràn kí a tó fọwọ́ sí i.", exceeds: "Ó dárúkọ òfin orílẹ̀-èdè tàbí ọ́fíìsì tí a máa ṣàyẹ̀wò lọ́dọ̀ rẹ̀, bí Kenya's Carbon Markets Regulations." },
      { name: "Ètò ojú-ewé kan tó pé", objective: "O6", notYet: "Àwọn apá kan kù, tàbí kò sí ọjọ́ àtúnyẹ̀wò.", meets: "Gbogbo apá mẹ́fà, ìlà ìṣàn owó ọdún burúkú àti ọjọ́ àtúnyẹ̀wò lórí ojú-ewé kan.", exceeds: "Ọmọ ẹgbẹ́, òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí olùgbaninímọ̀ràn ti kà á, a sì ti ṣe àtúnṣe rẹ̀ pẹ̀lú ìbéèrè wọn." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe ó kéré tán ìdókòwò ìmúra-sílẹ̀ kan tí wọ́n ti ṣírò iye rẹ̀ láàárín àsìkò tó ń bọ̀ (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tàbí ẹgbẹ́ tí wọ́n béèrè fún owó pẹ̀lú ètò tí a kọ sílẹ̀ àti àwọn ìbéèrè fún ayánilówó",
      "Jìbìtì carbon tàbí jìbìtì owó tí a ròyìn pé a yẹra fún, àti àdéhùn díẹ̀ tí a fọwọ́ sí láìgba ìmọ̀ràn (ìròyìn ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí ẹgbẹ́ alájọṣe)",
      "Àdánù owó ní àsìkò burúkú tó ń bọ̀ ní ìfiwéra pẹ̀lú àsìkò burúkú tó kọjá (ohun tí akẹ́kọ̀ọ́ fúnra rẹ̀ ròyìn, fún iṣẹ́ kọ̀ọ̀kan)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé, gègé àti ẹ̀rọ ìṣírò tó rọrùn (tàbí ẹ̀rọ ìṣírò fóònù)",
      "Àkọsílẹ̀ oko rẹ, tàbí oko àpẹẹrẹ láti inú iṣẹ́ ìkẹyìn",
      "Iye owó irúgbìn, táǹkì, ohun èlò oko àti epo ní agbègbè rẹ (láti ọ̀dọ̀ àwọn olùtajà ohun èlò oko tàbí ẹgbẹ́ alájọṣe)",
      "Fóònù fún wíwá ayánilówó àti àkọsílẹ̀ carbon (kò pọn dandan)",
      "Nǹkan bí ìṣẹ́jú 90 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Ó dára jù láti ṣe é pẹ̀lú ẹgbẹ́ àgbẹ̀, ẹgbẹ́ alájọṣe tàbí Farmer Business School: ẹ ṣe Ẹ̀kọ́ 1 àti 2 pẹ̀lú àkọsílẹ̀ gidi ti ọmọ ẹgbẹ́ méjì tàbí mẹ́ta.",
      "Gba iye owó gidi ní agbègbè kí ìpàdé tó bẹ̀rẹ̀; má ṣe fi iye owó àpẹẹrẹ hàn bí òtítọ́ láéláé.",
      "Pe òṣìṣẹ́ ẹ̀yáwó láti báńkì, báńkì microfinance tàbí SACCO tó ní ìwé àṣẹ láti dáhùn àwọn ìbéèrè Ẹ̀kọ́ 3, kí o sì ṣàyẹ̀wò ìwé àṣẹ wọn níwájú ẹgbẹ́.",
      "Fún Ẹ̀kọ́ 5, mú àpẹẹrẹ àdéhùn tàbí ìfilọ̀ carbon wá (láìsí orúkọ), kí ẹ sì jọ sàmì sí àwọn àmì ìkìlọ̀. Má ṣe gbè sẹ́yìn iṣẹ́ carbon kankan.",
      "Má ṣe fúnni ní ìmọ̀ràn ìdókòwò; rán àwọn akẹ́kọ̀ọ́ létí láti ka àdéhùn dé òpin kí wọ́n sì bá olùgbaninímọ̀ràn tí wọ́n fọkàn tán sọ̀rọ̀.",
      "Fi rubric ṣe àmì fún ètò ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
