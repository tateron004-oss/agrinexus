"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-mechanization.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_HIRE = { name: "FAO: Iṣẹ́ ìyálò ẹ̀rọ bí òwò (lílo ẹ̀rọ oko tó ṣeé tẹ̀síwájú)", url: "https://www.fao.org/sustainable-agricultural-mechanization/hire-services-as-a-business/hire-services/en/" };
const FAO_HIRE_MANUAL = { name: "FAO: Iṣẹ́ ìyálò ẹ̀rọ bí ilé-iṣẹ́ òwò (ìwé ìdánilẹ́kọ̀ọ́)", url: "https://www.fao.org/documents/card/en/c/I9207EN" };
const FAO_SAMA = { name: "FAO àti African Union Commission: Sustainable Agricultural Mechanization: A Framework for Africa (2018), ìlànà lílo ẹ̀rọ oko fún Áfíríkà", url: "https://www.fao.org/documents/card/en/c/ca1136en" };
const FAO_MECH = { name: "FAO: Lílo ẹ̀rọ oko tó ṣeé tẹ̀síwájú (láti irinṣẹ́ ọwọ́ dé ẹ̀rọ olóńjìnnì)", url: "https://www.fao.org/sustainable-agricultural-mechanization/en" };
const HELLO = { name: "Hello Tractor: yíyá tírákítọ̀ nípasẹ̀ app, wẹ́ẹ̀bù tàbí aṣojú ìforúkọsílẹ̀; títọpa tírákítọ̀; san-bí-o-ṣe-ń-lò láti ní tírákítọ̀", url: "https://hellotractor.com/" };
const ILO_TRACTORS = { name: "ILO: Kíkọ́ àti lílo tírákítọ̀ láìléwu (ìlànà iṣẹ́)", url: "https://www.ilo.org/resource/safe-construction-and-operation-tractors" };
const PCPB = { name: "Pest Control Products Board (Kenya): àwọn oògùn apakòkòrò tí a forúkọ wọn sílẹ̀", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nàìjíríà)", url: "https://www.nafdac.gov.ng" };

module.exports = {
  id: "agri-mechanization-yo",
  lang: "yo",
  translationOf: "agri-mechanization",
  category: "Agriculture (Africa)",
  name: "Ẹ̀rọ Oko àti Iṣẹ́ Ìyálò Ẹ̀rọ",
  skills: "Yíyan iṣẹ́ tí ó yẹ kí ẹ̀rọ ṣe, Fífi owó yíyá ẹ̀rọ wé owó níní ẹ̀rọ, Yíyá tírákítọ̀ àti ṣíṣàyẹ̀wò iṣẹ́ rẹ̀, Yíyan ẹ̀rọ kékeré, Ṣíṣiṣẹ́ láìléwu àti kíkọ ìwé àkọsílẹ̀ ìtọ́jú ẹ̀rọ, Ṣíṣètò òwò ìyálò ẹ̀rọ",
  outcome: "pinnu, pẹ̀lú ìṣirò, bóyá kí o yá ẹ̀rọ tàbí kí o rà á fún iṣẹ́ kan lórí oko: yan àwọn iṣẹ́ tí ẹ̀rọ máa mérè wá fún, fi owó yíyá wé owó níní ẹ̀rọ, yá iṣẹ́ ẹ̀rọ kí o sì ṣàyẹ̀wò rẹ̀, yan ẹ̀rọ kékeré tó yẹ, lò ó láìléwu pẹ̀lú ìwé àkọsílẹ̀ ìtọ́jú, kí o sì ṣètò iṣẹ́ ìyálò fún àwọn aládùúgbò rẹ tí níní ẹ̀rọ bá lè mérè wá ní ọ̀nà yẹn nìkan.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ tó ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Nàìjíríà, Ghana, Kenya, Senegal, Burkina Faso àti káàkiri Áfíríkà. Ọwọ́ ni a ṣì fi ń ṣe ọ̀pọ̀ jù lọ iṣẹ́ oko ní Áfíríkà. Ẹ̀rọ lè gbìn lásìkò, dín iṣẹ́ líle kù, kí ó sì dín àdánù kù, ṣùgbọ́n ẹ̀rọ tí ó dúró láìṣiṣẹ́ fún ọ̀pọ̀ jù lọ ọdún lè kó oko sínú gbèsè.",
    "Orí 1 jẹ́ nípa ìpinnu: àwọn iṣẹ́ tí ẹ̀rọ máa mérè wá fún, yíyá ẹ̀rọ àti níní ẹ̀rọ pẹ̀lú àpẹẹrẹ ìṣirò owó, àti yíyá iṣẹ́ tírákítọ̀, pẹ̀lú àwọn tí a ń yá nípasẹ̀ app bí Hello Tractor. Orí 2 jẹ́ nípa lílo ẹ̀rọ: ẹ̀rọ kékeré bí tírákítọ̀ oníkẹ̀kẹ́ méjì, ẹ̀rọ ìyọ-àgbàdo, ẹ̀rọ ìpakà àti ẹ̀rọ ìfọ́n oògùn olóńjìnnì; ààbò àti ìwé àkọsílẹ̀ ìtọ́jú; àti bíbẹ̀rẹ̀ òwò iṣẹ́ ẹ̀rọ fún àwọn aládùúgbò rẹ. Lílo ẹ̀rọ papọ̀ gẹ́gẹ́ bí ẹgbẹ́ wà nínú ẹ̀kọ́ \"Ìkójọpọ̀ Àwùjọ: Pínpín Ẹ̀rọ Oko àti Ìdúnàádúrà fún Ohun Èlò Ọ̀gbìn\".",
    "Àpẹẹrẹ lásán ni àwọn iye owó inú ẹ̀kọ́ yìí; lo iye owó gidi láti ọ̀dọ̀ àwọn olùtajà ẹ̀rọ, iṣẹ́ ìyálò àti àwọn ayánilówó. Ẹ̀kọ́ yìí ṣàlàyé bí owó àyáwó àti àdéhùn ìyálò (lease) ṣe ń ṣiṣẹ́, ṣùgbọ́n kò fúnni ní ìmọ̀ràn ìdókòwò: ka gbogbo àdéhùn tán kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o gbẹ́kẹ̀ lé. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan fún oko rẹ. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣe ìwé ìpinnu yíyá-tàbí-rírà fún ẹ̀rọ kan àti iṣẹ́ kan lórí oko rẹ (tàbí àpẹẹrẹ bí tírákítọ̀ fún títúlẹ̀ hẹ́kítà 10 àgbàdo ní Kaduna, tàbí ẹ̀rọ ìyọ-àgbàdo fún ẹgbẹ́ àgbẹ̀ kan nítòsí Tamale): iṣẹ́ náà àti ìdí tí ẹ̀rọ fi máa mérè wá fún un; owó ọdọọdún níní ẹ̀rọ (owó tí kì í yí padà àti owó fún hẹ́kítà kọ̀ọ̀kan); owó yíyá; iye hẹ́kítà ìdọ́gba; ìpinnu rẹ; àti àwọn òfin ààbò àti ìwé àkọsílẹ̀ ìtọ́jú tí o máa lò. Tí o bá pinnu láti rà á, fi ètò ojú-ewé kan kún un láti máa yá ẹ̀rọ náà fún àwọn aládùúgbò: àwọn iṣẹ́, àwọn oníbàárà àti hẹ́kítà, iye owó, ìnáwó, ìdọ́gba, ìforúkọsílẹ̀ àti ìsanwó, àti àwọn ewu pàtàkì.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ tó ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn olórí ẹgbẹ́ àgbẹ̀, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Nàìjíríà, Ghana, Kenya, àwọn orílẹ̀-èdè Ìwọ̀-Oòrùn Áfíríkà tí ń sọ Faransé àti ibòmíì ní Áfíríkà, tí wọ́n ń yá tírákítọ̀ tàbí ẹ̀rọ kékeré, tàbí tí wọ́n ń ronú láti rà á.",
    startingPoint: "Ọwọ́ tàbí màlúù ni wọ́n fi ń ṣe ọ̀pọ̀ jù lọ iṣẹ́, nígbà míì wọ́n sì máa ń yá tírákítọ̀ nípasẹ̀ alágbàtà. Díẹ̀ ló ti fi gbogbo owó níní ẹ̀rọ wé owó yíyá, tí ó ti ṣàyẹ̀wò iṣẹ́ tí wọ́n sanwó fún, tàbí tí ó ti kọ ìwé àkọsílẹ̀ ìtọ́jú. Àwọn ọ̀dọ́ kan rí ìyálò ẹ̀rọ bí òwò ṣùgbọ́n wọn kò tíì ṣírò owó rẹ̀.",
    gap: "Àwọn àgbẹ̀ ń ra ẹ̀rọ tí wọn kì í lò tó, tí ó sì wọ́n láti lò, tàbí wọ́n ń dúró de tírákítọ̀ tí ó pẹ́ dé, wọ́n sì ń gbìn pẹ́. Wọ́n nílò láti yan àwọn iṣẹ́ tí ẹ̀rọ máa mérè wá fún, fi yíyá wé níní pẹ̀lú iye owó gidi, yá iṣẹ́ ẹ̀rọ kí wọ́n sì ṣàyẹ̀wò rẹ̀, lo ẹ̀rọ láìléwu, àti, tí wọ́n bá rà á, kí wọ́n máa rí owó láti inú iṣẹ́ oko àwọn aládùúgbò.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ẹ̀kọ́ náà tún wà ní èdè Spanish, Faransé àti Lárúbáwá",
      "Ẹ̀rọ: fóònù lásán tàbí smartphone àti ẹ̀rọ ìṣirò (calculator); app ìforúkọsílẹ̀ nílò smartphone tàbí aṣojú ìforúkọsílẹ̀",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá àkókò iṣẹ́ oko mu",
      "Àpẹẹrẹ ni àwọn iye owó; iye owó, èlé àti owó ìyálò yàtọ̀ láti ibì kan sí ibòmíì, wọ́n sì ń yí padà",
      "Owó: ṣàlàyé owó àyáwó àti àdéhùn ìyálò àti ewu wọn; kò sí ìmọ̀ràn ìdókòwò",
      "Ààbò: ẹ̀rọ lè pa ènìyàn; kò sí iṣẹ́ ọmọdé nítòsí ẹ̀rọ; ẹ̀rọ ìfọ́n oògùn pẹ̀lú oògùn apakòkòrò tí a forúkọ rẹ̀ sílẹ̀ nìkan, bí àmì ìdánimọ̀ rẹ̀ ṣe sọ"
    ],
    prerequisites: "Kò sí. \"Iṣẹ́ Àgbẹ̀ Bí Òwò àti Ìṣàkóso Oko\" máa ràn ọ́ lọ́wọ́ nínú ìṣirò owó."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn iṣẹ́ tí ó wà lórí oko rẹ", action: "dá àwọn iṣẹ́ tí ẹ̀rọ máa mérè wá fún mọ̀", standard: "kí o sì fúnni ní ìdí fún ọ̀kọ̀ọ̀kan: àsìkò, òṣìṣẹ́, àdánù tàbí iye iṣẹ́" },
    { id: "O2", condition: "Tí a bá fún ọ ní iye owó ẹ̀rọ kan, owó ìṣiṣẹ́ rẹ̀ àti owó ìyálò rẹ̀", action: "ṣírò owó ọdọọdún níní ẹ̀rọ, owó yíyá àti iye hẹ́kítà ìdọ́gba", standard: "kí ìṣirò náà tọ̀nà, kí ìpinnu yíyá tàbí rírà sì yé" },
    { id: "O3", condition: "Nígbà tí o bá ń yá tírákítọ̀ tàbí iṣẹ́ ẹ̀rọ", action: "fohùn ṣọ̀kan lórí iye owó, ilẹ̀, ọjọ́ àti bí iṣẹ́ ṣe máa dára ṣáájú, kí o sì ṣàyẹ̀wò iṣẹ́ náà kí o tó sanwó", standard: "nípa wíwọn oko àti gbígba ìwé ẹ̀rí ìsanwó" },
    { id: "O4", condition: "Tí a bá fún ọ ní iṣẹ́ oko kan àti ọjà agbègbè rẹ", action: "yan ẹ̀rọ kékeré tí ó bá iṣẹ́ náà mu, iye iṣẹ́ tó wà, àti àwọn ẹ̀yà ẹ̀rọ àti ẹlẹ́rọ tó wà nítòsí", standard: "kí o sì kọ ó kéré tán àyẹ̀wò mẹ́rin sílẹ̀ kí o tó rà á" },
    { id: "O5", condition: "Ṣáájú àti lẹ́yìn lílo ẹ̀rọ kọ̀ọ̀kan", action: "ṣe àwọn àyẹ̀wò ààbò kí o sì kọ iṣẹ́ àti ìtọ́jú sínú ìwé àkọsílẹ̀", standard: "láìfo òfin ààbò kankan, pẹ̀lú ọjọ́ lórí gbogbo àkọsílẹ̀" },
    { id: "O6", condition: "Tí a bá fún ọ ní ẹ̀rọ kan àti àwọn oko tó yí ọ ká", action: "kọ ètò ojú-ewé kan fún iṣẹ́ ìyálò ẹ̀rọ", standard: "pẹ̀lú àwọn iṣẹ́, àwọn oníbàárà, iye owó, ìnáwó, ìdọ́gba àti àwọn ewu" }
  ],
  chapters: [
    {
      name: "Orí 1: Yá tàbí rà?",
      lessons: [
        {
          title: "Àwọn iṣẹ́ tí ẹ̀rọ máa mérè wá fún",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dá àwọn iṣẹ́ lórí oko rẹ tí ẹ̀rọ máa mérè wá fún mọ̀.",
          text: [
            "Lílo ẹ̀rọ nínú iṣẹ́ oko túmọ̀ sí lílo irinṣẹ́ àti ẹ̀rọ láti ṣe iṣẹ́ oko, láti irinṣẹ́ ọwọ́ tí a mú dára sí i àti ẹranko tí ń fa ohun èlò, dé tírákítọ̀ àti ẹ̀rọ olóńjìnnì. FAO (àjọ oúnjẹ àti iṣẹ́ àgbẹ̀ ti Àjọ Àgbáyé) tẹnu mọ́ yíyan ohun tí ó bá oko, àwọn ènìyàn àti ibẹ̀ mu. Ẹ̀rọ máa ń mérè wá nígbà tí ohun tí ó mú wọlé tàbí tí ó dá sí bá ju ohun tí ó ná lọ.",
            "Àwọn iṣẹ́ tí ó sábà máa ń mérè wá: ìpalẹ̀mọ́ ilẹ̀, nígbà tí títúlẹ̀ tàbí ṣíṣí ilẹ̀ lásìkò lẹ́yìn òjò àkọ́kọ́ jẹ́ kí o gbìn lásìkò; ìpakà àti yíyọ àgbàdo, níbi tí ẹ̀rọ ti ń ṣe ní wákàtí díẹ̀ ohun tí ọ̀pọ̀ ènìyàn máa ń ṣe fún ọjọ́ púpọ̀, tí ọkà díẹ̀ sì ń sọnù sílẹ̀; gbígbé ìkórè àti ohun èlò oko; fífa omi; àti ṣíṣe ọjà bí kíkun ẹ̀gẹ́ tàbí lílọ ọkà. Àwọn iṣẹ́ tí kì í mérè wá tó: oko kékeré, iṣẹ́ tí kò wọ́n tí ó sì yá tí a bá fi ọwọ́ ṣe, tàbí iṣẹ́ tí o ń ṣe lẹ́ẹ̀kan lọ́dún fún wákàtí díẹ̀.",
            "Béèrè ìbéèrè mẹ́rin nípa iṣẹ́ kọ̀ọ̀kan. Àsìkò: ṣé ṣíṣe é pẹ́ máa dín ìkórè kù? Òṣìṣẹ́: ṣé òṣìṣẹ́ kò tó tàbí ṣé owó wọn ga ní àsìkò yẹn? Àdánù: ṣé ṣíṣe é pẹ̀lú ọwọ́ ń mú kí irè oko sọnù? Iye iṣẹ́: ṣé iṣẹ́ tó láti jẹ́ kí ẹ̀rọ máa ṣiṣẹ́ lọ? Lẹ́yìn náà fi owó iṣẹ́ ọwọ́ wé ti ẹ̀rọ. Àpẹẹrẹ (àpẹẹrẹ lásán ni àwọn iye owó yìí): títúlẹ̀ hẹ́kítà 1 pẹ̀lú ọwọ́ gba ọjọ́-iṣẹ́ 25 ní GHS 50 = GHS 1,250, nígbà tí yíyá tírákítọ̀ jẹ́ GHS 600 fún hẹ́kítà kan."
          ],
          steps: ["Kọ gbogbo iṣẹ́ ńlá tí ó wà lórí oko rẹ jálẹ̀ ọdún sílẹ̀.", "Fún ọ̀kọ̀ọ̀kan, béèrè: àsìkò, òṣìṣẹ́, àdánù, iye iṣẹ́.", "Ṣírò owó iṣẹ́ ọwọ́: ọjọ́-iṣẹ́ x owó iṣẹ́ ọjọ́ kan.", "Wá owó iṣẹ́ ẹ̀rọ: owó ìyálò x hẹ́kítà.", "Sàmì sí àwọn iṣẹ́ tí ẹ̀rọ ti wọ́n díẹ̀ jù tàbí tí ó ń mú èrè púpọ̀ wá."],
          words: [["Lílo ẹ̀rọ nínú iṣẹ́ oko (mechanization)", "lílo irinṣẹ́ àti ẹ̀rọ, láti irinṣẹ́ ọwọ́ tó dára jù dé tírákítọ̀, láti ṣe iṣẹ́ oko."], ["Àsìkò", "ṣíṣe iṣẹ́ ní àkókò tó tọ́, bí gbígbìn ní kété tí òjò bá bẹ̀rẹ̀."], ["Ọjọ́-iṣẹ́ (person-day)", "iṣẹ́ tí ènìyàn kan ń ṣe ní ọjọ́ kan."]],
          slides: [
            { title: "Ìgbà tí ẹ̀rọ máa ń mérè wá", bullets: ["Ohun tí ó mú wọlé tàbí tí ó dá sí ju ohun tí ó ná lọ", "Láti irinṣẹ́ ọwọ́ tó dára jù dé tírákítọ̀", "Ó gbọ́dọ̀ bá oko, àwọn ènìyàn àti ibẹ̀ mu"] },
            { title: "Àwọn iṣẹ́ tí ó sábà máa ń mérè wá", bullets: ["Ìpalẹ̀mọ́ ilẹ̀ lásìkò", "Ìpakà àti yíyọ àgbàdo: kíákíá, àdánù díẹ̀", "Gbígbé ẹrù, fífa omi, ṣíṣe ọjà"] },
            { title: "Ìbéèrè mẹ́rin", bullets: ["Àsìkò: ṣé pípẹ́ ń dín ìkórè kù?", "Òṣìṣẹ́: wọn kò tó tàbí owó wọn ga?", "Àdánù? Iye iṣẹ́?"] },
            { title: "Fi owó wé ara wọn", bullets: ["Iṣẹ́ ọwọ́: ọjọ́-iṣẹ́ x owó iṣẹ́", "Àpẹẹrẹ: ọjọ́ 25 x GHS 50 = GHS 1,250 fún hẹ́kítà kan", "Àpẹẹrẹ yíyá ẹ̀rọ: GHS 600 fún hẹ́kítà kan"] }
          ],
          sources: [FAO_MECH, FAO_SAMA],
          tryIt: "Kọ iṣẹ́ ńlá márùn-ún lórí oko rẹ sílẹ̀. Fún ọ̀kọ̀ọ̀kan, dáhùn ìbéèrè mẹ́rin náà (àsìkò, òṣìṣẹ́, àdánù, iye iṣẹ́) kí o sì fi owó iṣẹ́ ọwọ́ wé owó iṣẹ́ ẹ̀rọ. Fa àyíká yí iṣẹ́ méjì tí ẹ̀rọ máa mérè wá fún jù.",
          youCanNow: "yan àwọn iṣẹ́ lórí oko rẹ tí ẹ̀rọ máa mérè wá fún, kí o sì sọ ìdí rẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Kí ló dé tí títúlẹ̀ lásìkò fi sábà máa ń mérè wá?", options: ["Tírákítọ̀ máa ń wọ́n díẹ̀ ní ẹ̀ẹ̀rùn", "Gbígbìn lásìkò lẹ́yìn òjò lè mú kí ìkórè pọ̀ sí i", "Títúlẹ̀ pẹ́ máa ń pa koríko dáadáa jù", "Ó máa ń jẹ́ kí oko rí mọ́"], answer: 1, why: "Àsìkò ṣe pàtàkì: gbígbìn pẹ́ sábà máa ń dín ìkórè kù." },
            { objective: "O1", q: "Yíyọ tọ́ọ̀nù 2 àgbàdo pẹ̀lú ọwọ́ gba ọjọ́-iṣẹ́ 20 ní NGN 4,000. Iṣẹ́ ẹ̀rọ ìyọ-àgbàdo jẹ́ NGN 50,000. Èwo ló wọ́n díẹ̀ jù?", options: ["Iṣẹ́ ẹ̀rọ ìyọ-àgbàdo", "Yíyọ pẹ̀lú ọwọ́", "Owó wọn dọ́gba", "O kò lè mọ̀"], answer: 0, why: "Yíyọ pẹ̀lú ọwọ́ jẹ́ 20 x 4,000 = NGN 80,000, ó ju NGN 50,000 lọ." }
          ]
        },
        {
          title: "Yíyá àti níní ẹ̀rọ: àpẹẹrẹ ìṣirò owó",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣírò owó níní ẹ̀rọ àti owó yíyá, kí o sì wá iye hẹ́kítà ìdọ́gba.",
          text: [
            "Níní ẹ̀rọ ní owó tí kì í yí padà tí o máa ń san lọ́dọọdún kódà tí ẹ̀rọ náà kò bá gbéra rárá: iye tí ẹ̀rọ ń pàdánù bí ó ti ń gbó (ìdínkù iye), èlé owó àyáwó tàbí èrè tí owó náà ìbá ti mú wá níbòmíì, owó ìbánigbófò (insurance), àti ilé ìpamọ́ ẹ̀rọ. Ó tún ní owó ìṣiṣẹ́ fún hẹ́kítà kọ̀ọ̀kan: epo, òróró ẹ̀rọ, àtúnṣe àti awakọ̀ ẹ̀rọ. Yíyá ní owó kan ṣoṣo: owó ìyálò fún hẹ́kítà kọ̀ọ̀kan.",
            "Àpẹẹrẹ ìṣirò fún tírákítọ̀ àti ohun ìtúlẹ̀ ní Nàìjíríà (àpẹẹrẹ lásán ni gbogbo iye owó yìí; lo iye owó gidi àti èlé gidi ti ayánilówó rẹ): iye owó NGN 30,000,000, iye rẹ̀ máa jẹ́ NGN 6,000,000 lẹ́yìn ọdún 10, nítorí náà ìdínkù iye = (30,000,000 - 6,000,000) / 10 = NGN 2,400,000 lọ́dún. Èlé owó àyáwó (àpẹẹrẹ) NGN 1,800,000 lọ́dún, ìbánigbófò àti ilé ìpamọ́ NGN 600,000. Owó tí kì í yí padà = NGN 4,800,000 lọ́dún. Owó ìṣiṣẹ́ = NGN 25,000 fún hẹ́kítà kan. Owó ìyálò = NGN 60,000 fún hẹ́kítà kan.",
            "Hẹ́kítà kọ̀ọ̀kan tí o bá fi tírákítọ̀ tìrẹ túlẹ̀ ń dá 60,000 - 25,000 = NGN 35,000 sí ọ, tí a bá fi wé yíyá. Iye hẹ́kítà ìdọ́gba = owó tí kì í yí padà / owó tí o ń dá sí fún hẹ́kítà kan = 4,800,000 / 35,000 = nǹkan bí hẹ́kítà 137 lọ́dún. Àgbẹ̀ tí ó ní hẹ́kítà 10 gbọ́dọ̀ yá; níní tírákítọ̀ máa mérè wá kìkì tí tírákítọ̀ náà bá tún ń ṣiṣẹ́ lórí oko àwọn aládùúgbò. Tún ro ohun tí ìṣirò kò fi hàn: níní ẹ̀rọ túmọ̀ sí pé o máa túlẹ̀ lásìkò, nígbà tí yíyá túmọ̀ sí pé kò sí owó àyáwó, kò sí àtúnṣe. Àdéhùn ìyálò (lease) àti san-bí-o-ṣe-ń-lò jẹ́ ọ̀nà míì; ka gbogbo àdéhùn tán kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o gbẹ́kẹ̀ lé."
          ],
          steps: ["Ìdínkù iye lọ́dún = (iye owó - iye rẹ̀ ní ìparí) / ọdún ìlò.", "Fi èlé, ìbánigbófò àti ilé ìpamọ́ kún un: èyí ni owó tí kì í yí padà lọ́dún.", "Fi epo, òróró ẹ̀rọ, àtúnṣe àti awakọ̀ fún hẹ́kítà kan kún un: owó ìṣiṣẹ́.", "Owó tí o ń dá sí fún hẹ́kítà kan = owó ìyálò - owó ìṣiṣẹ́.", "Iye hẹ́kítà ìdọ́gba = owó tí kì í yí padà / owó tí o ń dá sí fún hẹ́kítà kan.", "Fi wé hẹ́kítà tìrẹ kí o sì pinnu; kọ àsìkò àti ewu sílẹ̀."],
          words: [["Ìdínkù iye (depreciation)", "iye tí ẹ̀rọ ń pàdánù lọ́dọọdún bí ó ti ń gbó."], ["Owó tí kì í yí padà (fixed costs)", "owó tí o ń san lọ́dọọdún bóyá ẹ̀rọ náà ṣiṣẹ́ tàbí kò ṣiṣẹ́."], ["Iye hẹ́kítà ìdọ́gba (break-even area)", "iye hẹ́kítà lọ́dún tí owó níní ẹ̀rọ àti owó yíyá ti dọ́gba."]],
          slides: [
            { title: "Owó níní ẹ̀rọ", bullets: ["Tí kì í yí padà: ìdínkù iye, èlé, ìbánigbófò, ilé ìpamọ́", "Ìṣiṣẹ́ fún hẹ́kítà kan: epo, òróró ẹ̀rọ, àtúnṣe, awakọ̀", "Yíyá: owó ìyálò kan ṣoṣo fún hẹ́kítà kan"] },
            { title: "Àpẹẹrẹ: tírákítọ̀ ní Nàìjíríà", bullets: ["Ìdínkù iye (30M - 6M) / 10 = NGN 2.4M lọ́dún", "Gbogbo owó tí kì í yí padà: NGN 4.8M lọ́dún", "Ìṣiṣẹ́ NGN 25,000 fún hẹ́kítà kan; ìyálò NGN 60,000 fún hẹ́kítà kan"] },
            { title: "Iye hẹ́kítà ìdọ́gba", bullets: ["Owó tí o ń dá sí fún hẹ́kítà kan: 60,000 - 25,000 = 35,000", "4,800,000 / 35,000 = nǹkan bí hẹ́kítà 137 lọ́dún", "Oko hẹ́kítà 10: yá a. Àpẹẹrẹ lásán ni"] },
            { title: "Ohun tí ìṣirò kò fi hàn", bullets: ["Níní ẹ̀rọ: o máa túlẹ̀ lásìkò", "Yíyá: kò sí owó àyáwó, kò sí àtúnṣe", "Ìyálò àti owó àyáwó: ka gbogbo rẹ̀, béèrè lọ́wọ́ olùdámọ̀ràn"] }
          ],
          sources: [FAO_HIRE, FAO_SAMA],
          tryIt: "Gba iye owó gidi fún ẹ̀rọ kan tí o ń ronú nípa rẹ̀ (iye owó, iye ọdún tí ó máa lò àti iye rẹ̀ ní ìparí, owó ìṣiṣẹ́ àti owó ìyálò ní agbègbè rẹ). Ṣírò owó tí kì í yí padà lọ́dún, owó tí o ń dá sí fún hẹ́kítà kan àti iye hẹ́kítà ìdọ́gba, kí o sì kọ bóyá o yẹ kí o yá a tàbí kí o rà á.",
          youCanNow: "fi owó níní ẹ̀rọ wé owó yíyá rẹ̀, kí o sì wá iye hẹ́kítà ìdọ́gba.",
          quickCheck: [
            { objective: "O2", q: "Ẹ̀rọ ìyọ-àgbàdo kan jẹ́ GHS 20,000, iye rẹ̀ sì máa jẹ́ GHS 4,000 lẹ́yìn ọdún 8. Kí ni ìdínkù iye rẹ̀ lọ́dún?", options: ["GHS 1,500", "GHS 2,500", "GHS 2,000", "GHS 3,000"], answer: 2, why: "(20,000 - 4,000) / 8 = 2,000 lọ́dún." },
            { objective: "O2", q: "Owó tí kì í yí padà jẹ́ KES 300,000 lọ́dún, níní ẹ̀rọ sì ń dá KES 6,000 sí ọ fún hẹ́kítà kan. Kí ni iye hẹ́kítà ìdọ́gba?", options: ["Hẹ́kítà 30", "Hẹ́kítà 40", "Hẹ́kítà 60", "Hẹ́kítà 50"], answer: 3, why: "300,000 / 6,000 = hẹ́kítà 50 lọ́dún." }
          ]
        },
        {
          title: "Iṣẹ́ ìyálò tírákítọ̀ àti èyí tí a ń yá nípasẹ̀ app",
          objectives: ["O3"],
          minutes: 5,
          goal: "Yá iṣẹ́ ẹ̀rọ kí o sì ṣàyẹ̀wò iṣẹ́ náà kí o tó sanwó.",
          text: [
            "O lè yá ẹ̀rọ lọ́wọ́ aládùúgbò tàbí ẹni tí ó ní tírákítọ̀, ẹgbẹ́ alájọṣe tàbí ẹgbẹ́ àgbẹ̀, ibùdó ìyálò ti ìjọba tàbí ti aládàáni, tàbí iṣẹ́ tí a ń yá nípasẹ̀ app. Hello Tractor jẹ́ àpẹẹrẹ kan: àwọn àgbẹ̀ ń yá iṣẹ́ tírákítọ̀ nípasẹ̀ app fóònù rẹ̀ tàbí app wẹ́ẹ̀bù rẹ̀, tàbí nípasẹ̀ àwọn aṣojú ìforúkọsílẹ̀ (àwọn òṣìṣẹ́ ìtọ́sọ́nà àti òṣìṣẹ́ pápá tí wọ́n ń bá àwọn àgbẹ̀ forúkọ sílẹ̀), àwọn tí ó ní tírákítọ̀ sì ń lò ó láti tọpa tírákítọ̀ àti epo wọn pẹ̀lú GPS. Ó tún ní ètò san-bí-o-ṣe-ń-lò láti ran àwọn ènìyàn lọ́wọ́ láti ní tírákítọ̀. Ilé-iṣẹ́ náà sọ pé òun ń ṣiṣẹ́ ní orílẹ̀-èdè tó ju 20 lọ ní Áfíríkà, títí kan Nàìjíríà; ṣàyẹ̀wò ohun tí ó wà ní agbègbè rẹ.",
            "Tírákítọ̀ máa ń kọ́kọ́ lọ síbi tí iṣẹ́ púpọ̀ wà ní ibì kan. Yíyá rẹ̀ papọ̀ pẹ̀lú àwọn aládùúgbò, kí tírákítọ̀ lè ṣe oko púpọ̀ ní ìrìn-àjò kan, máa ń mú kí ó ṣeé ṣe jù pé yóò dé lásìkò.",
            "Kí iṣẹ́ tó bẹ̀rẹ̀, fohùn ṣọ̀kan ní kíkọ tàbí nípasẹ̀ ọ̀rọ̀ ìránṣẹ́: iye owó fún éékà tàbí hẹ́kítà kan, bí wọ́n ṣe máa wọn ilẹ̀ náà, ọjọ́ náà, ìjìn àti irú iṣẹ́ náà, àti ẹni tí ó máa san owó epo. Wọn oko náà fúnra rẹ, pẹ̀lú téèpù tàbí app GPS lórí fóònù. Lẹ́yìn iṣẹ́ náà, ṣàyẹ̀wò rẹ̀: ìjìn tó tọ́, kò sí ìlà tí wọ́n fò, gbogbo oko ni wọ́n ṣe. Sanwó lẹ́yìn àyẹ̀wò nìkan, nípasẹ̀ app gidi, owó orí fóònù (mobile money) tàbí pẹ̀lú ìwé ẹ̀rí ìsanwó. Má ṣe san owó ṣáájú fún àjèjì lẹ́yìn app gidi láéláé, má sì ṣe pín PIN tàbí kóòdù láéláé."
          ],
          steps: ["Yan iṣẹ́ ìyálò: aládùúgbò, ẹgbẹ́, ibùdó ìyálò tàbí app (fún àpẹẹrẹ Hello Tractor).", "Forúkọ sílẹ̀ ní kùtùkùtù, papọ̀ pẹ̀lú àwọn aládùúgbò tí o bá lè ṣe é.", "Fohùn ṣọ̀kan lórí iye owó, bí a ṣe máa wọn ilẹ̀, ọjọ́, ìjìn àti epo ṣáájú.", "Wọn oko náà fúnra rẹ.", "Ṣàyẹ̀wò iṣẹ́ náà: ìjìn, kò sí ìlà tí wọ́n fò, gbogbo oko.", "Sanwó lẹ́yìn àyẹ̀wò; gba ìwé ẹ̀rí tàbí àkọsílẹ̀ app; má ṣe pín PIN láéláé."],
          words: [["Aṣojú ìforúkọsílẹ̀ (booking agent)", "ẹni tí ó ń bá àwọn àgbẹ̀ yá iṣẹ́ ẹ̀rọ, tí ó sábà máa ń lo app."], ["San-bí-o-ṣe-ń-lò (PAYG)", "sísan owó nǹkan díẹ̀díẹ̀ bí o ṣe ń lò ó, títí yóò fi di tìrẹ."], ["Owó ìyálò", "owó tí iṣẹ́ ìyálò ń gbà, tí ó sábà máa ń jẹ́ fún éékà tàbí hẹ́kítà kan."]],
          slides: [
            { title: "Ibi tí o ti lè yá ẹ̀rọ", bullets: ["Àwọn aládùúgbò, ẹgbẹ́, ibùdó ìyálò", "App bí Hello Tractor: app, wẹ́ẹ̀bù tàbí aṣojú ìforúkọsílẹ̀", "Ṣàyẹ̀wò ohun tí ó ń ṣiṣẹ́ ní agbègbè rẹ"] },
            { title: "Jẹ́ kí tírákítọ̀ dé lásìkò", bullets: ["Forúkọ sílẹ̀ ní kùtùkùtù", "Forúkọ sílẹ̀ papọ̀ pẹ̀lú àwọn aládùúgbò", "Oko púpọ̀ ní ìrìn-àjò kan"] },
            { title: "Fohùn ṣọ̀kan kí iṣẹ́ tó bẹ̀rẹ̀", bullets: ["Iye owó fún éékà tàbí hẹ́kítà; bí a ṣe máa wọn ilẹ̀", "Ọjọ́, ìjìn, irú iṣẹ́, epo", "Ní kíkọ tàbí nípasẹ̀ ọ̀rọ̀ ìránṣẹ́"] },
            { title: "Ṣàyẹ̀wò, lẹ́yìn náà sanwó", bullets: ["Wọn oko náà fúnra rẹ", "Ìjìn tó tọ́; kò sí ìlà tí wọ́n fò", "Sanwó nípasẹ̀ app, mobile money tàbí ìwé ẹ̀rí; má pín PIN"] }
          ],
          sources: [HELLO, FAO_HIRE],
          tryIt: "Wá iṣẹ́ ìyálò méjì nítòsí rẹ (ẹni tí ó ní tírákítọ̀, ẹgbẹ́ kan, ibùdó ìyálò tàbí app). Béèrè lọ́wọ́ ọ̀kọ̀ọ̀kan iye owó fún hẹ́kítà kan, bí wọ́n ṣe ń wọn ilẹ̀, ìgbà tí wọ́n lè wá, àti bí o ṣe máa sanwó. Kọ ọ̀rọ̀ ìforúkọsílẹ̀ kúkúrú tí ó ní gbogbo àdéhùn náà.",
          youCanNow: "yá tírákítọ̀ tàbí iṣẹ́ ẹ̀rọ pẹ̀lú àdéhùn tó yé, kí o sì ṣàyẹ̀wò iṣẹ́ náà kí o tó sanwó.",
          quickCheck: [
            { objective: "O3", q: "Ìgbà wo ni o yẹ kí o sanwó fún títúlẹ̀ pẹ̀lú tírákítọ̀?", options: ["Lẹ́yìn tí o ti ṣàyẹ̀wò iṣẹ́ náà àti ilẹ̀ náà, pẹ̀lú ìwé ẹ̀rí tàbí àkọsílẹ̀ app", "Kí tírákítọ̀ tó dé, ní owó ọwọ́ fún ẹnikẹ́ni tí ó bá pè", "Ìdajì fún àjèjì nípasẹ̀ text", "Láéláé"], answer: 0, why: "Ṣíṣàyẹ̀wò ní àkọ́kọ́ àti gbígba àkọsílẹ̀ ń dáàbò bò ọ́ lọ́wọ́ iṣẹ́ tí kò dára àti jìbìtì." },
            { objective: "O3", q: "Báwo ni o ṣe lè mú kí ó ṣeé ṣe jù pé tírákítọ̀ tí o yá máa dé lásìkò?", options: ["Forúkọ sílẹ̀ ní ìṣẹ́jú ìkẹyìn", "Forúkọ sílẹ̀ níkan fún oko kékeré kan", "Forúkọ sílẹ̀ ní kùtùkùtù, papọ̀ pẹ̀lú àwọn aládùúgbò", "San owó àfikún fún àjèjì ṣáájú"], answer: 2, why: "Oko púpọ̀ ní ibì kan máa ń jẹ́ kí ìrìn-àjò náà ṣe àǹfààní fún ẹni tí ó ní tírákítọ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Yá tàbí rà?",
        questions: [
          { objective: "O1", q: "Iṣẹ́ wo ni ẹ̀rọ sábà máa ń mérè wá fún JÙ LỌ DÍẸ̀?", options: ["Títúlẹ̀ hẹ́kítà 20 lásìkò", "Pípa ìkórè ìrẹsì ńlá", "Iṣẹ́ wákàtí kan lẹ́ẹ̀kan lọ́dún lórí oko kékeré gan-an", "Gbígbé ìkórè lọ sí ọjà"], answer: 2, why: "Ẹ̀rọ fún iṣẹ́ kékeré tí kì í sábà wáyé máa ń ná ju ohun tí ó ń dá sí lọ." },
          { objective: "O1", q: "Ìbéèrè wo ló ń ṣàyẹ̀wò àsìkò?", options: ["Ṣé ẹ̀rọ náà pupa?", "Ṣé ṣíṣe iṣẹ́ náà pẹ́ máa dín ìkórè kù?", "Ṣé olùtajà náà ní ọ̀yàyà?", "Ọmọ ọdún mélòó ni àgbẹ̀ náà?"], answer: 1, why: "Àsìkò jẹ́ nípa bóyá ṣíṣe iṣẹ́ náà pẹ́ máa dín ìkórè kù." },
          { objective: "O2", q: "Èwo ni owó tí kì í yí padà nínú níní tírákítọ̀?", options: ["Ìbánigbófò", "Epo fún hẹ́kítà kan", "Owó awakọ̀ fún hẹ́kítà kan", "Òróró ẹ̀rọ fún wákàtí kan"], answer: 0, why: "A máa ń san ìbánigbófò lọ́dọọdún bóyá tírákítọ̀ ṣiṣẹ́ tàbí kò ṣiṣẹ́." },
          { objective: "O2", q: "Iye hẹ́kítà ìdọ́gba jẹ́ hẹ́kítà 137 lọ́dún, ìwọ sì ń ro hẹ́kítà 10. Kí ni o yẹ kí o ṣe?", options: ["Rà á lẹ́sẹ̀kẹsẹ̀", "Ra tírákítọ̀ méjì", "Dẹ́kun iṣẹ́ àgbẹ̀", "Yá a, tàbí rà á kìkì tí o bá tún lè ṣiṣẹ́ fún àwọn aládùúgbò"], answer: 3, why: "Nígbà tí o bá wà ní ìsàlẹ̀ ìdọ́gba gan-an, níní ẹ̀rọ máa ná ju yíyá lọ àyàfi tí ẹ̀rọ náà bá tún ń ṣiṣẹ́ níbòmíì." },
          { objective: "O3", q: "Kí tírákítọ̀ tí o yá tó bẹ̀rẹ̀ iṣẹ́, kí ni o yẹ kí ẹ fohùn ṣọ̀kan lé lórí?", options: ["Orúkọ awakọ̀ nìkan", "Iye owó fún hẹ́kítà kan, bí a ṣe máa wọn ilẹ̀, ọjọ́, ìjìn àti epo", "Kò sí nǹkan; gbẹ́kẹ̀ lé wọn", "PIN mobile money rẹ"], answer: 1, why: "Àdéhùn tó yé ń dènà ìjà àti iṣẹ́ tí kò dára; a kì í pín PIN láéláé." }
        ]
      }
    },
    {
      name: "Orí 2: Lílo ẹ̀rọ àti òwò iṣẹ́ ẹ̀rọ",
      lessons: [
        {
          title: "Ẹ̀rọ kékeré fún àwọn àgbẹ̀ kékeré",
          objectives: ["O4"],
          minutes: 5,
          goal: "Yan ẹ̀rọ kékeré tí ó bá iṣẹ́ rẹ àti agbègbè rẹ mu.",
          text: [
            "Kì í ṣe gbogbo oko ló nílò tírákítọ̀ oníkẹ̀kẹ́ mẹ́rin. Tírákítọ̀ oníkẹ̀kẹ́ méjì (power tiller) lè túlẹ̀, rò ilẹ̀ (rotavate), fa omi, kí ó sì wọ́ kẹ̀kẹ́ ẹrù lórí oko kékeré. Ẹ̀rọ ìyọ-àgbàdo olóńjìnnì tàbí ẹ̀rọ ìpakà fún oríṣiríṣi irè oko (fún ìrẹsì, ọkà bàbà, jéró, ẹ̀wà tàbí sóyà) ń dá iṣẹ́ ọjọ́ púpọ̀ sí, ọkà díẹ̀ ló sì ń sọnù. Ẹ̀rọ ìfọ́n oògùn olóńjìnnì tí a ń gbé sẹ́yìn tàbí mistblower ń bo ilẹ̀ púpọ̀ ju ẹ̀rọ ìfọ́n ọwọ́ lọ. Àpẹẹrẹ míì ni ẹ̀rọ ìkun-ẹ̀gẹ́, ẹ̀rọ ìkórè ìrẹsì àti ẹ̀rọ ìgé koríko fún oúnjẹ ẹran.",
            "Kí o tó rà á, ṣàyẹ̀wò: Ṣé iṣẹ́ tó wà, lórí oko rẹ àti ti àwọn aládùúgbò, láti jẹ́ kí ó máa ṣiṣẹ́? Ṣé ẹlẹ́rọ kan wà nítòsí tí ó lè tún un ṣe, ṣé wọ́n sì ń ta ẹ̀yà ẹ̀rọ (spare parts) nítòsí rẹ? Ṣé olùtajà máa kọ́ ọ ní ìlò rẹ̀, ṣé ó sì máa fún ọ ní ìdánilójú (warranty)? Ṣé a lè gbé e láti oko kan sí òmíì? Ṣé àwọn tí ó máa lò ó, títí kan àwọn obìnrin àti àwọn ọ̀dọ́, lè lò ó láìléwu? FAO ti tẹ ìwé àkójọ ẹ̀rọ tí ó bá àwọn àgbẹ̀ obìnrin mu jáde.",
            "Ẹ̀rọ ìfọ́n oògùn: lo oògùn apakòkòrò tí a forúkọ rẹ̀ sílẹ̀ ní orílẹ̀-èdè rẹ nìkan, bí àmì ìdánimọ̀ (label) rẹ̀ ṣe sọ, pẹ̀lú aṣọ àti ohun èlò ààbò. Ní Kenya, ṣàyẹ̀wò àkọsílẹ̀ Pest Control Products Board; ní Nàìjíríà, NAFDAC. Ẹ̀rọ ìfọ́n olóńjìnnì máa ń fọ́n kẹ́míkà púpọ̀ sí i ní kíákíá, nítorí náà ṣe ìwọ̀n rẹ̀ (calibrate) bí ìwé ìtọ́sọ́nà rẹ̀ ṣe sọ kí àsìkò kọ̀ọ̀kan tó bẹ̀rẹ̀."
          ],
          steps: ["Dárúkọ iṣẹ́ náà àti iye hẹ́kítà tàbí tọ́ọ̀nù lọ́dún.", "Yan irú ẹ̀rọ fún iṣẹ́ náà.", "Ṣàyẹ̀wò ẹ̀yà ẹ̀rọ àti ẹlẹ́rọ nítòsí rẹ.", "Béèrè lọ́wọ́ olùtajà nípa ìdánilẹ́kọ̀ọ́ àti ìdánilójú (warranty).", "Ṣàyẹ̀wò pé a lè gbé e, àti pé àwọn awakọ̀ rẹ lè lò ó láìléwu.", "Fún ẹ̀rọ ìfọ́n: oògùn tí a forúkọ rẹ̀ sílẹ̀ nìkan, àmì ìdánimọ̀ àti ohun èlò ààbò."],
          words: [["Tírákítọ̀ oníkẹ̀kẹ́ méjì", "tírákítọ̀ kékeré tí a ń rìn tẹ̀lé lẹ́yìn, tí a tún ń pè ní power tiller, tí ó ń fa irinṣẹ́ tí ó sì ń wa ẹ̀rọ ìfami."], ["Ẹ̀rọ ìpakà (thresher)", "ẹ̀rọ tí ó ń ya ọkà kúrò lára igi tàbí pòpórò rẹ̀."], ["Ṣíṣe ìwọ̀n ẹ̀rọ (calibrate)", "ṣíṣètò ẹ̀rọ ìfọ́n kí ó lè fọ́n iye tó tọ́, bí ìwé ìtọ́sọ́nà rẹ̀ àti àmì ìdánimọ̀ oògùn náà ṣe sọ."]],
          slides: [
            { title: "Ẹ̀rọ kékeré", bullets: ["Tírákítọ̀ oníkẹ̀kẹ́ méjì: títúlẹ̀, fífa omi, kẹ̀kẹ́ ẹrù", "Ẹ̀rọ ìyọ-àgbàdo; ẹ̀rọ ìpakà fún oríṣiríṣi irè oko", "Ẹ̀rọ ìfọ́n olóńjìnnì; ẹ̀rọ ìkun-ẹ̀gẹ́; ẹ̀rọ ìgé koríko"] },
            { title: "Kí o tó rà á", bullets: ["Iṣẹ́ tó láti jẹ́ kí ó máa ṣiṣẹ́?", "Ẹ̀yà ẹ̀rọ àti ẹlẹ́rọ nítòsí?", "Ìdánilẹ́kọ̀ọ́, warranty, ó rọrùn láti gbé?"] },
            { title: "Ta ló máa lò ó?", bullets: ["Ó gbọ́dọ̀ jẹ́ àìléwu fún àwọn awakọ̀ rẹ", "Àwọn obìnrin àti ọ̀dọ́ náà", "Ìwé àkójọ FAO ti ẹ̀rọ fún àwọn àgbẹ̀ obìnrin"] },
            { title: "Ẹ̀rọ ìfọ́n oògùn", bullets: ["Oògùn tí a forúkọ rẹ̀ sílẹ̀ nìkan, bí àmì ìdánimọ̀ ṣe sọ", "Kenya: àkọsílẹ̀ PCPB. Nàìjíríà: NAFDAC", "Ohun èlò ààbò; ṣe ìwọ̀n ẹ̀rọ (calibrate) ní àkọ́kọ́"] }
          ],
          sources: [FAO_MECH, PCPB, NAFDAC],
          tryIt: "Mú iṣẹ́ kan láti Ẹ̀kọ́ 1. Yan ẹ̀rọ kékeré kan fún un, kí o sì lọ sọ́dọ̀ olùtajà tàbí pè é. Béèrè iye owó, ibi tí ẹ̀yà ẹ̀rọ àti àtúnṣe wà, ìdánilẹ́kọ̀ọ́ àti warranty tí wọ́n ń fúnni, àti iye iṣẹ́ tí ó lè ṣe lọ́jọ́ kan. Kọ àwọn ìdáhùn náà sílẹ̀.",
          youCanNow: "yan ẹ̀rọ kékeré tí ó bá iṣẹ́ rẹ, agbègbè rẹ àti àwọn tí ó máa lò ó mu.",
          quickCheck: [
            { objective: "O4", q: "Ẹ̀rọ wo ló bá títúlẹ̀ àti fífa omi lórí oko kékeré mu?", options: ["Ẹ̀rọ ìkórè ńlá (combine harvester)", "Tírákítọ̀ oníkẹ̀kẹ́ méjì (power tiller)", "Ẹ̀rọ ìyọ-àgbàdo", "Ẹ̀rọ ìgé koríko"], answer: 1, why: "Power tiller ń túlẹ̀ oko kékeré, ó sì lè wa ẹ̀rọ ìfami." },
            { objective: "O4", q: "Ẹ̀rọ ìyọ-àgbàdo tí ó wọ́n díẹ̀ jù kò ní ẹ̀yà ẹ̀rọ tàbí ẹlẹ́rọ láàárín kìlómítà 200. Kí ni ewu rẹ̀?", options: ["Kò sí; ẹ̀rọ kì í bàjẹ́ láéláé", "Ó máa yọ àgbàdo kíákíá jù", "Tí ó bá bàjẹ́, ó lè dúró láìṣiṣẹ́ fún ọ̀sẹ̀ púpọ̀", "Ó máa lo epo díẹ̀ jù"], answer: 2, why: "Ẹ̀rọ tí kò ní ẹ̀yà ẹ̀rọ tàbí àtúnṣe nítòsí lè dúró láìṣiṣẹ́ nígbà tí o nílò rẹ̀ jù." }
          ]
        },
        {
          title: "Ààbò àti ìwé àkọsílẹ̀ ìtọ́jú ẹ̀rọ",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lo ẹ̀rọ láìléwu kí o sì máa kọ ìwé àkọsílẹ̀ ìtọ́jú rẹ̀.",
          text: [
            "Ẹ̀rọ lè pa ènìyàn tàbí sọ ọ́ di aláàbọ̀ ara ní ìṣẹ́jú-àáyá kan. Tírákítọ̀ tí ó yí po, ènìyàn tí ó ṣubú sí abẹ́ kẹ̀kẹ́, àti aṣọ tí ọ̀pá tí ń yí mú jẹ́ àwọn ohun tí ó sábà máa ń fa ikú lórí oko. ILO (àjọ iṣẹ́ àgbáyé) tẹ ìlànà iṣẹ́ jáde lórí lílo tírákítọ̀ láìléwu. Àwọn òfin pàtàkì: àwọn àgbàlagbà tí a ti kọ́ nìkan ló lè wa ẹ̀rọ; kò sí ọmọdé nítòsí ẹ̀rọ tí ń ṣiṣẹ́; kò sí èrò lórí tírákítọ̀ tàbí lórí irinṣẹ́ rẹ̀; lo férémù ààbò ìyípo àti bẹ́líìtì ìjókòó níbi tí wọ́n bá wà; rìn díẹ̀díẹ̀ àti ní tààrà lórí ilẹ̀ tí ó dagun, kí o sì yẹra fún kòtò; jẹ́ kí gbogbo ìbòjú ààbò wà ní àyè wọn, pàápàá lórí ọ̀pá PTO (power take-off); kí o sì wọ aṣọ tí ó fún ara, pẹ̀lú irun tí a so.",
            "Ẹ̀rọ ìpakà àti ẹ̀rọ ìyọ-àgbàdo: má ṣe ti ọwọ́ bọ ẹnu ibi tí a ń fi irè oko sí tàbí ibi tí nǹkan há sí láéláé. Pa ẹ́ńjìnnì kí o sì dúró kí gbogbo ẹ̀yà rẹ̀ dúró kí o tó tú u. Dáàbò bo etí àti ẹ̀dọ̀fóró rẹ lọ́wọ́ ariwo àti eruku. Bu epo sí i kìkì nígbà tí ẹ́ńjìnnì ti kú tí ó sì ti tutù, láìmu sìgá. Jẹ́ kí àpótí ìtọ́jú pàjáwìrì àti fóònù wà nítòsí.",
            "Ẹ̀rọ tí a ń tọ́jú máa ń pẹ́ jù, kì í sì í bàjẹ́ tó ní àsìkò iṣẹ́ púpọ̀. Ṣe àyẹ̀wò ojoojúmọ́ kí iṣẹ́ tó bẹ̀rẹ̀: òróró ẹ́ńjìnnì, epo, omi tàbí omi ìtútù (coolant), àlẹ̀mọ́ afẹ́fẹ́ (air filter), táyà, nọ́ọ̀tì àti bóòtù tí ó ti tú, àti ibi ìfi gírísì. Tọ́jú rẹ̀ (service) gẹ́gẹ́ bí iye wákàtí lórí mítà rẹ̀ bí ìwé ìtọ́sọ́nà ṣe sọ. Máa kọ ìwé àkọsílẹ̀ pẹ̀lú: ọjọ́, wákàtí, iṣẹ́ àti hẹ́kítà tàbí tọ́ọ̀nù, epo, àtúnṣe àti ẹ̀yà ẹ̀rọ, owó, àti orúkọ awakọ̀. Ìwé àkọsílẹ̀ náà ń fi owó ìṣiṣẹ́ gidi fún hẹ́kítà kan hàn."
          ],
          steps: ["Awakọ̀ àgbàlagbà tí a ti kọ́ nìkan; kò sí ọmọdé, kò sí èrò.", "Ìbòjú ààbò wà ní àyè wọn; lo férémù ààbò ìyípo àti bẹ́líìtì ìjókòó níbi tí wọ́n bá wà.", "Rìn díẹ̀díẹ̀ lórí ilẹ̀ tí ó dagun; yẹra fún kòtò.", "Pa ẹ́ńjìnnì kí o sì dúró kí o tó tú ohunkóhun tí ó há.", "Àyẹ̀wò ojoojúmọ́: òróró ẹ̀rọ, epo, omi ìtútù, àlẹ̀mọ́ afẹ́fẹ́, táyà, bóòtù, gírísì.", "Kọ iṣẹ́ ọjọ́ kọ̀ọ̀kan, epo, àtúnṣe àti owó sínú ìwé àkọsílẹ̀."],
          words: [["Ọ̀pá PTO (power take-off)", "ọ̀pá tí ń yí lórí tírákítọ̀ tí ó ń wa irinṣẹ́; ó lè mú aṣọ kí ó sì pa ènìyàn."], ["Férémù ààbò ìyípo (roll-over protection)", "férémù lórí ìjókòó awakọ̀ tí ó ń dáàbò bò ó tí tírákítọ̀ bá yí po."], ["Ìwé àkọsílẹ̀ ẹ̀rọ (logbook)", "ìwé tí o ń kọ gbogbo iṣẹ́, epo, àtúnṣe àti owó ẹ̀rọ kan sí."]],
          slides: [
            { title: "Ènìyàn ní àkọ́kọ́", bullets: ["Àgbàlagbà tí a ti kọ́ nìkan; kò sí ọmọdé nítòsí", "Kò sí èrò", "Férémù ààbò ìyípo àti bẹ́líìtì ìjókòó"] },
            { title: "Àwọn ibi ewu", bullets: ["Ilẹ̀ tí ó dagun àti kòtò: rìn díẹ̀díẹ̀", "Ọ̀pá PTO: ìbòjú ààbò wà; aṣọ tí ó fún ara, irun tí a so", "Ohun tí ó há: pa ẹ́ńjìnnì, dúró, lẹ́yìn náà tú u"] },
            { title: "Àyẹ̀wò ojoojúmọ́", bullets: ["Òróró ẹ̀rọ, epo, omi ìtútù, àlẹ̀mọ́ afẹ́fẹ́", "Táyà, nọ́ọ̀tì àti bóòtù, gírísì", "Tọ́jú rẹ̀ gẹ́gẹ́ bí wákàtí, bí ìwé ìtọ́sọ́nà ṣe sọ"] },
            { title: "Ìwé àkọsílẹ̀ ẹ̀rọ", bullets: ["Ọjọ́, wákàtí, iṣẹ́, hẹ́kítà tàbí tọ́ọ̀nù", "Epo, àtúnṣe, ẹ̀yà ẹ̀rọ, owó, awakọ̀", "Ó ń fi owó gidi fún hẹ́kítà kan hàn"] }
          ],
          sources: [ILO_TRACTORS],
          tryIt: "Ṣe àkọsílẹ̀ àyẹ̀wò ààbò ojú-ewé kan fún ẹ̀rọ kan tí o ń lò tàbí tí o ń yá, àti ojú-ewé ìwé àkọsílẹ̀ ẹ̀rọ tí ó ní ọ̀wọ̀n fún ọjọ́, wákàtí, iṣẹ́, hẹ́kítà tàbí tọ́ọ̀nù, epo, àtúnṣe àti ẹ̀yà ẹ̀rọ, owó, àti awakọ̀. Kọ ìlà kan láti inú iṣẹ́ gidi tàbí àpẹẹrẹ.",
          youCanNow: "lo ẹ̀rọ pẹ̀lú àwọn òfin ààbò pàtàkì, kí o sì máa kọ ìwé àkọsílẹ̀ ìtọ́jú tí ó ń fi owó ìṣiṣẹ́ gidi rẹ̀ hàn.",
          quickCheck: [
            { objective: "O5", q: "Nǹkan há sínú ẹ̀rọ ìpakà. Kí ni o máa ṣe?", options: ["Fi ọwọ́ ti irè oko wọlé nígbà tí ó ń ṣiṣẹ́", "Ní kí ọmọdé kan fà á jáde", "Gbá ẹ̀rọ náà ní ẹsẹ̀", "Pa ẹ́ńjìnnì, dúró kí gbogbo ẹ̀yà rẹ̀ dúró, lẹ́yìn náà tú u"], answer: 3, why: "Ẹ̀yà tí ń yí lè gé ọwọ́ ní ìṣẹ́jú-àáyá kan; ẹ̀rọ tí ó ti dúró nìkan ni kí o tú." },
            { objective: "O5", q: "Èwo ló yẹ kí ó wà nínú ìwé àkọsílẹ̀ ẹ̀rọ?", options: ["Ọjọ́, wákàtí, iṣẹ́, epo, àtúnṣe àti owó", "PIN mobile money awakọ̀", "Àwọ̀ ẹ̀rọ náà nìkan", "Kò sí nǹkan; ìrántí ti tó"], answer: 0, why: "Àwọn àkọsílẹ̀ wọ̀nyí ń fi owó ìṣiṣẹ́ gidi hàn àti ìgbà tí ìtọ́jú tó." }
          ]
        },
        {
          title: "Bíbẹ̀rẹ̀ òwò iṣẹ́ ẹ̀rọ",
          objectives: ["O6"],
          minutes: 6,
          goal: "Kọ ètò ojú-ewé kan fún iṣẹ́ ìyálò ẹ̀rọ.",
          text: [
            "Ọ̀pọ̀ iṣẹ́ ìyálò ẹ̀rọ ni àwọn àgbẹ̀ tí wọ́n ra ẹ̀rọ fún oko tiwọn ń ṣe, tí wọ́n sì ń fi í ṣiṣẹ́ fún àwọn aládùúgbò, fún owó tàbí ní pàṣípààrọ̀ fún iṣẹ́ míì tàbí irè oko. Ìlànà FAO àti African Union fún lílo ẹ̀rọ oko ní Áfíríkà rí àwọn ọ̀dọ́ tí ń ṣe iṣẹ́ ìyálò ẹ̀rọ bí ọ̀nà pàtàkì láti mú ẹ̀rọ dé ọ̀dọ̀ àwọn àgbẹ̀ kékeré. FAO tún tẹ ìwé ìdánilẹ́kọ̀ọ́ jáde lórí iṣẹ́ ìyálò ẹ̀rọ bí òwò.",
            "Ètò ojú-ewé kan máa ń dáhùn: Àwọn iṣẹ́ wo, ní àsìkò wo (títúlẹ̀, yíyọ àgbàdo, ìpakà, gbígbé ẹrù, fífa omi)? Ta ni àwọn oníbàárà, hẹ́kítà tàbí tọ́ọ̀nù mélòó ni lápapọ̀? Iye owó wo, báwo ló sì ṣe rí lẹ́gbẹ̀ẹ́ àwọn iṣẹ́ míì? Kí ni ìnáwó (tí kì í yí padà lọ́dún àti ìṣiṣẹ́ fún hẹ́kítà kan, láti Ẹ̀kọ́ 2 àti 5)? Kí ni ìdọ́gba? Báwo ni o ṣe máa gba ìforúkọsílẹ̀ àti ìsanwó (owó ìdógò, mobile money, ìwé ẹ̀rí)? Ta ni awakọ̀, ṣé a sì ti kọ́ ọ? Kí ni àwọn ewu: ẹ̀rọ bíbàjẹ́ ní àsìkò iṣẹ́ púpọ̀, iṣẹ́ tí a kò sanwó fún, ìjàǹbá, olè? Báwo ni o ṣe máa dín wọn kù (ìtọ́jú ẹ̀rọ, àdéhùn ní kíkọ, ìbánigbófò, ẹ̀rọ ìtọpa GPS)?",
            "Àpẹẹrẹ fún iṣẹ́ power tiller ní Senegal tàbí Burkina Faso (àpẹẹrẹ lásán ni gbogbo iye owó yìí): owó tí kì í yí padà XOF 600,000 lọ́dún, owó ìṣiṣẹ́ XOF 15,000 fún hẹ́kítà kan, iye owó iṣẹ́ XOF 35,000 fún hẹ́kítà kan. Ìdọ́gba = 600,000 / (35,000 - 15,000) = hẹ́kítà 30. Tí a bá forúkọ hẹ́kítà 50 sílẹ̀, èrè = 50 x 20,000 - 600,000 = XOF 400,000. Kó àwọn oko tí ó wà nítòsí ara wọn jọ láti dín ìrìn-àjò kù, kí o sì fi iṣẹ́ ẹ̀yìn àsìkò kún un bí yíyọ àgbàdo àti gbígbé ẹrù. Ọ̀nà láti rí owó ni owó àyáwó, àdéhùn ìyálò (lease) àti san-bí-o-ṣe-ń-lò: ka gbogbo àdéhùn tán kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o gbẹ́kẹ̀ lé."
          ],
          steps: ["Kọ àwọn iṣẹ́ rẹ àti àsìkò wọn sílẹ̀.", "Kọ àwọn oníbàárà àti gbogbo hẹ́kítà tàbí tọ́ọ̀nù sílẹ̀.", "Fi iye owó tí ó bo ìnáwó fún hẹ́kítà kan pẹ̀lú èrè lélẹ̀; fi wé ti àwọn míì.", "Ṣírò ìdọ́gba: owó tí kì í yí padà / (iye owó - owó ìṣiṣẹ́ fún hẹ́kítà kan).", "Ṣètò ìforúkọsílẹ̀, awakọ̀, ìsanwó àti àkọsílẹ̀.", "Kọ àwọn ewu sílẹ̀ àti bí o ṣe máa dín ọ̀kọ̀ọ̀kan kù."],
          words: [["Iṣẹ́ ìyálò ẹ̀rọ (hire service)", "òwò tí ó ń fi ẹ̀rọ rẹ̀ ṣe iṣẹ́ oko fún àwọn àgbẹ̀ míì, fún owó."], ["Èrè (margin)", "apá iye owó tí ó kù lẹ́yìn ìnáwó."], ["Iṣẹ́ ẹ̀yìn àsìkò", "iṣẹ́ tí ẹ̀rọ lè ṣe lẹ́yìn àsìkò iṣẹ́ pàtàkì, bí gbígbé ẹrù tàbí yíyọ àgbàdo."]],
          slides: [
            { title: "Iṣẹ́ ìyálò ẹ̀rọ", bullets: ["Àwọn àgbẹ̀ ń ṣiṣẹ́ fún aládùúgbò fún owó", "Ọ̀nà pàtàkì láti mú ẹ̀rọ dé ọ̀dọ̀ àwọn àgbẹ̀ kékeré", "Ìwé ìdánilẹ́kọ̀ọ́ FAO: iṣẹ́ ìyálò ẹ̀rọ bí òwò"] },
            { title: "Ètò ojú-ewé kan", bullets: ["Iṣẹ́, àsìkò, oníbàárà, hẹ́kítà", "Iye owó, ìnáwó, ìdọ́gba", "Ìforúkọsílẹ̀, awakọ̀, ìsanwó, ewu"] },
            { title: "Àpẹẹrẹ: power tiller (XOF)", bullets: ["Tí kì í yí padà 600,000; ìṣiṣẹ́ 15,000 fún hẹ́kítà kan; iye owó 35,000", "Ìdọ́gba 600,000 / 20,000 = hẹ́kítà 30", "Hẹ́kítà 50: èrè XOF 400,000. Àpẹẹrẹ lásán ni"] },
            { title: "Jẹ́ kí ó ṣiṣẹ́", bullets: ["Kó àwọn oko tí ó wà nítòsí jọ; dín ìrìn-àjò kù", "Fi iṣẹ́ ẹ̀yìn àsìkò kún un", "Owó àyáwó àti ìyálò: ka gbogbo rẹ̀, béèrè lọ́wọ́ olùdámọ̀ràn"] }
          ],
          sources: [FAO_HIRE, FAO_HIRE_MANUAL, FAO_SAMA, HELLO],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe ìwé ìpinnu yíyá-tàbí-rírà rẹ fún ẹ̀rọ kan àti iṣẹ́ kan. Tí níní ẹ̀rọ bá máa mérè wá kìkì pẹ̀lú iṣẹ́ àwọn aládùúgbò, fi ètò iṣẹ́ ìyálò ojú-ewé kan kún un: àwọn iṣẹ́, àwọn oníbàárà àti hẹ́kítà, iye owó, ìnáwó, ìdọ́gba, ìforúkọsílẹ̀ àti ìsanwó, àti àwọn ewu pàtàkì.",
          youCanNow: "ṣètò iṣẹ́ ìyálò ẹ̀rọ pẹ̀lú iye owó, ìnáwó, ìdọ́gba àti àwọn ewu.",
          quickCheck: [
            { objective: "O6", q: "Owó tí kì í yí padà jẹ́ XOF 400,000 lọ́dún, owó ìṣiṣẹ́ jẹ́ XOF 10,000 fún hẹ́kítà kan, iye owó iṣẹ́ sì jẹ́ XOF 30,000 fún hẹ́kítà kan. Kí ni iye hẹ́kítà ìdọ́gba?", options: ["Hẹ́kítà 10", "Hẹ́kítà 13", "Hẹ́kítà 40", "Hẹ́kítà 20"], answer: 3, why: "400,000 / (30,000 - 10,000) = hẹ́kítà 20." },
            { objective: "O6", q: "Ìgbésẹ̀ wo ló ń dín owó ìrìn-àjò iṣẹ́ ìyálò tírákítọ̀ kù?", options: ["Kíkó ìforúkọsílẹ̀ àwọn oko tí ó wà nítòsí ara wọn jọ", "Gbígba iṣẹ́ tí ó jìnnà síra ní ọjọ́ kan náà", "Kíkọ oko kékeré", "Àìṣètò ìforúkọsílẹ̀ rárá"], answer: 0, why: "Ṣíṣe àwọn oko tí ó wà nítòsí papọ̀ ń dá epo àti àkókò lójú ọ̀nà sí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Lílo ẹ̀rọ àti òwò iṣẹ́ ẹ̀rọ",
        questions: [
          { objective: "O4", q: "Kí o tó ra ẹ̀rọ kékeré, àyẹ̀wò wo ló ṣe pàtàkì jù láti jẹ́ kí ó máa ṣiṣẹ́?", options: ["Àwọ̀ rẹ̀", "Ẹ̀yà ẹ̀rọ àti ẹlẹ́rọ nítòsí rẹ", "Iye tí aládùúgbò san", "Àmì orúkọ ilé-iṣẹ́ lára rẹ̀"], answer: 1, why: "Láìsí ẹ̀yà ẹ̀rọ àti àtúnṣe nítòsí, ẹ̀rọ tí ó bàjẹ́ máa dúró láìṣiṣẹ́." },
          { objective: "O4", q: "O máa lo ẹ̀rọ ìfọ́n oògùn olóńjìnnì. Èwo ló tọ́?", options: ["Oògùn apakòkòrò èyíkéyìí láti ọjà", "Po oògùn méjì pọ̀ láti dá àkókò sí", "Oògùn tí a forúkọ rẹ̀ sílẹ̀ nìkan, bí àmì ìdánimọ̀ ṣe sọ, pẹ̀lú ohun èlò ààbò", "Fọ́n láìṣe ìwọ̀n ẹ̀rọ"], answer: 2, why: "Oògùn tí a forúkọ rẹ̀ sílẹ̀ nìkan, tí a lò bí àmì ìdánimọ̀ ṣe sọ, ló jẹ́ àìléwu tí ó sì bófin mu." },
          { objective: "O5", q: "Èwo ni òfin ààbò tírákítọ̀?", options: ["Kò sí èrò lórí tírákítọ̀ tàbí irinṣẹ́ rẹ̀", "Àwọn ọmọdé lè gùn ún tí wọ́n bá ṣọ́ra", "Yọ ìbòjú ààbò PTO kúrò láti ṣiṣẹ́ kíákíá", "Wa ọkọ̀ kíákíá lórí ilẹ̀ tí ó dagun"], answer: 0, why: "Èrò máa ń ṣubú sí abẹ́ kẹ̀kẹ́; èyí jẹ́ ohun tí ó sábà máa ń fa ikú lórí oko." },
          { objective: "O5", q: "Kí ló dé tí a fi ń kọ ìwé àkọsílẹ̀ ẹ̀rọ?", options: ["Fún báńkì nìkan ni", "Láti fi àwọ̀ ẹ̀rọ náà hàn", "Láti jẹ́ kí awakọ̀ ṣiṣẹ́ díẹ̀díẹ̀", "Láti rí owó gidi fún hẹ́kítà kan àti ìgbà tí ìtọ́jú tó"], answer: 3, why: "Kíkọ iṣẹ́, epo àti àtúnṣe sílẹ̀ ń fi owó gidi àti àkókò ìtọ́jú hàn." },
          { objective: "O6", q: "Èwo ló yẹ kí ó wà nínú ètò iṣẹ́ ìyálò ẹ̀rọ?", options: ["Iye owó ẹ̀rọ nìkan", "Àwọn iṣẹ́, oníbàárà, iye owó, ìnáwó, ìdọ́gba àti ewu", "PIN ẹni tí ó ni ín", "Àmì ìdánimọ̀ (logo) nìkan"], answer: 1, why: "Ètò ń fi hàn bóyá iṣẹ́ náà ń mú owó wọlé ju ìnáwó rẹ̀ lọ àti bí a ṣe ń kojú ewu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ẹ̀rọ Oko àti Iṣẹ́ Ìyálò Ẹ̀rọ",
    questions: [
      { objective: "O1", q: "Lílo ẹ̀rọ nínú iṣẹ́ oko ní:", options: ["Tírákítọ̀ ńlá nìkan", "Ẹ̀rọ tí a kó wọlé láti òkè-òkun nìkan", "Irinṣẹ́ àti ẹ̀rọ láti irinṣẹ́ ọwọ́ tó dára jù dé tírákítọ̀", "Drone nìkan"], answer: 2, why: "FAO ka gbogbo ìpele, láti irinṣẹ́ ọwọ́ dé ẹ̀rọ olóńjìnnì." },
      { objective: "O1", q: "Èwo ni ìdí tó lágbára láti lo ẹ̀rọ fún ìpakà?", options: ["Ó ń ṣe ní wákàtí díẹ̀ ohun tí ọ̀pọ̀ ènìyàn máa ń ṣe fún ọjọ́ púpọ̀, ọkà díẹ̀ ló sì ń sọnù", "Ẹ̀rọ máa ń rí bí ti ìgbàlódé", "Ìpakà pẹ̀lú ọwọ́ lòdì sí òfin", "Àwọn aládùúgbò ní ẹ̀rọ"], answer: 0, why: "Àkókò tí a dá sí àti àdánù tí ó dín kù ń jẹ́ kí ìpakà jẹ́ iṣẹ́ tó dára fún ẹ̀rọ." },
      { objective: "O1", q: "Pípa koríko hẹ́kítà 1 pẹ̀lú ọwọ́ jẹ́ KES 6,000, iṣẹ́ ẹ̀rọ sì jẹ́ KES 9,000. Tí a bá wo owó nìkan:", options: ["Ẹ̀rọ ló wọ́n díẹ̀ jù", "Wọ́n dọ́gba", "O kò lè fi wọ́n wé ara wọn", "Pípa koríko pẹ̀lú ọwọ́ ló wọ́n díẹ̀ jù"], answer: 3, why: "KES 6,000 kéré ju KES 9,000 lọ, nítorí náà ẹ̀rọ kò mérè wá tí a bá wo owó nìkan." },
      { objective: "O2", q: "Ìdínkù iye (depreciation) ni:", options: ["Epo tí ẹ̀rọ ń lò", "Iye tí ẹ̀rọ ń pàdánù lọ́dọọdún", "Owó ìyálò", "Owó iṣẹ́ awakọ̀"], answer: 1, why: "Ìdínkù iye ń pín àdánù iye ẹ̀rọ sí gbogbo ọdún ìlò rẹ̀." },
      { objective: "O2", q: "Èwo ni owó ìṣiṣẹ́ fún hẹ́kítà kan?", options: ["Ìbánigbófò", "Ilé ìpamọ́ ẹ̀rọ", "Epo", "Èlé owó àyáwó lọ́dún"], answer: 2, why: "Epo ń pọ̀ sí i pẹ̀lú hẹ́kítà kọ̀ọ̀kan tí a ṣiṣẹ́; àwọn yòókù kì í yí padà." },
      { objective: "O2", q: "Owó tí kì í yí padà NGN 2,000,000 lọ́dún; owó ìyálò NGN 50,000 fún hẹ́kítà kan; owó ìṣiṣẹ́ NGN 25,000 fún hẹ́kítà kan. Iye hẹ́kítà ìdọ́gba?", options: ["Hẹ́kítà 80", "Hẹ́kítà 40", "Hẹ́kítà 50", "Hẹ́kítà 100"], answer: 0, why: "2,000,000 / (50,000 - 25,000) = hẹ́kítà 80." },
      { objective: "O2", q: "Àǹfààní wo nínú níní ẹ̀rọ ni ìṣirò owó sábà máa ń fò?", options: ["Sísan èlé púpọ̀ sí i", "Títúlẹ̀ lásìkò láìdúró de tírákítọ̀ tí a yá", "Ìbánigbófò tí ó ga jù", "Àtúnṣe púpọ̀ sí i"], answer: 1, why: "Àsìkò ní iye tirẹ̀ kódà nígbà tí yíyá wọ́n díẹ̀ jù lórí ìwé." },
      { objective: "O3", q: "Hello Tractor ń jẹ́ kí àwọn àgbẹ̀ yá iṣẹ́ tírákítọ̀:", options: ["Nípasẹ̀ lẹ́tà ilé-ifiwéránṣẹ́ nìkan", "Ní báńkì nìkan", "Ní ilé-iṣẹ́ ẹ̀rọ fúnra rẹ̀ nìkan", "Nípasẹ̀ app fóònù, app wẹ́ẹ̀bù tàbí àwọn aṣojú ìforúkọsílẹ̀"], answer: 3, why: "Hello Tractor sọ pé àwọn àgbẹ̀ ń yá iṣẹ́ nípasẹ̀ àwọn app rẹ̀ tàbí àwọn aṣojú ìforúkọsílẹ̀." },
      { objective: "O3", q: "Báwo ni o ṣe yẹ kí o wọn oko fún iṣẹ́ ìyálò?", options: ["Gbẹ́kẹ̀ lé ìfojúdíwọ̀n awakọ̀", "Wọn ọ́n fúnra rẹ pẹ̀lú téèpù tàbí app GPS lórí fóònù", "Ka àwọn igi", "Má ṣe wọn ọ́n"], answer: 1, why: "Ìwọ̀n tìrẹ ń dáàbò bò ọ́ kí o má sanwó fún ilẹ̀ tí ó ju èyí tí wọ́n ṣiṣẹ́ lé lọ." },
      { objective: "O3", q: "Ẹnì kan pè, ó sọ pé aṣojú tírákítọ̀ ni òun, ó sì béèrè gbogbo owó ṣáájú nípasẹ̀ mobile money. Ìwọ:", options: ["Sanwó lẹ́sẹ̀kẹsẹ̀", "Fi PIN rẹ ránṣẹ́", "Forúkọ sílẹ̀ nípasẹ̀ app gidi tàbí aṣojú tí o mọ̀, kí o sì sanwó lẹ́yìn tí o ti ṣàyẹ̀wò iṣẹ́ náà", "San ìlọ́po méjì kí ó lè dájú"], answer: 2, why: "Àwọn olùpè tí a kò mọ̀ tí ń béèrè owó ṣáájú jẹ́ jìbìtì tí ó wọ́pọ̀." },
      { objective: "O4", q: "Ẹ̀rọ ìpakà fún oríṣiríṣi irè oko lè pa:", options: ["Ìrẹsì, ọkà bàbà, jéró, ẹ̀wà tàbí sóyà", "Ẹ̀gẹ́ nìkan", "Kọfí nìkan", "Koríko nìkan"], answer: 0, why: "Ẹ̀rọ ìpakà fún oríṣiríṣi irè oko ń ṣiṣẹ́ pẹ̀lú ọ̀pọ̀ ọkà àti ẹ̀wà." },
      { objective: "O4", q: "Èwo ni KÌ Í ṢE àyẹ̀wò pàtàkì kí o tó ra ẹ̀rọ kékeré?", options: ["Ẹ̀yà ẹ̀rọ nítòsí", "Ìdánilẹ́kọ̀ọ́ àti warranty láti ọ̀dọ̀ olùtajà", "Iṣẹ́ tó láti jẹ́ kí ó máa ṣiṣẹ́", "Àwọ̀ kùn rẹ̀"], answer: 3, why: "Ẹ̀yà ẹ̀rọ, ìdánilẹ́kọ̀ọ́ àti ìlò ló ń pinnu iye rẹ̀; àwọ̀ kùn kò ṣe bẹ́ẹ̀." },
      { objective: "O4", q: "Ní Kenya, àkọsílẹ̀ àjọ wo ló ń fi oògùn apakòkòrò tí a forúkọ rẹ̀ sílẹ̀ fún ẹ̀rọ ìfọ́n hàn?", options: ["Kenya Dairy Board", "Kenya Fisheries Service", "Pest Control Products Board", "Kenya Wildlife Service"], answer: 2, why: "Pest Control Products Board ló ń forúkọ oògùn apakòkòrò sílẹ̀ ní Kenya." },
      { objective: "O5", q: "Ta ló lè wa tírákítọ̀?", options: ["Ọmọdé èyíkéyìí tí ó ṣọ́ra", "Àgbàlagbà tí a ti kọ́", "Ẹnikẹ́ni tí ó ní fóònù", "Èrò"], answer: 1, why: "Àwọn àgbàlagbà tí a ti kọ́ nìkan ló yẹ kí ó máa wa ẹ̀rọ." },
      { objective: "O5", q: "Kí ló dé tí ìbòjú ààbò gbọ́dọ̀ wà lórí ọ̀pá PTO?", options: ["Ọ̀pá tí ń yí lè mú aṣọ kí ó sì pa ènìyàn", "Wọ́n ń jẹ́ kí tírákítọ̀ yára sí i", "Ọ̀ṣọ́ lásán ni wọ́n", "Wọ́n ń dá epo sí"], answer: 0, why: "Kí ọ̀pá PTO mú ènìyàn jẹ́ ohun tí ó sábà máa ń fa ìpalára ńlá àti ikú lórí oko." },
      { objective: "O5", q: "Ìgbà wo ni o yẹ kí o bu epo sí ẹ̀rọ?", options: ["Nígbà tí ó ń ṣiṣẹ́", "Nígbà tí o ń mu sìgá", "Nítòsí iná tí ń jó", "Nígbà tí ẹ́ńjìnnì ti kú tí ó sì ti tutù, láìmu sìgá"], answer: 3, why: "Epo lórí ẹ́ńjìnnì gbígbóná tàbí nítòsí iná lè gbiná." },
      { objective: "O5", q: "Ìgbà mélòó ni o yẹ kí o ṣe àwọn àyẹ̀wò ìpìlẹ̀ (òróró ẹ̀rọ, epo, omi ìtútù, táyà, bóòtù)?", options: ["Lẹ́ẹ̀kan lọ́dún", "Kìkì nígbà tí ó bá bàjẹ́", "Ojoojúmọ́ kí iṣẹ́ tó bẹ̀rẹ̀", "Láéláé"], answer: 2, why: "Àyẹ̀wò ojoojúmọ́ ń rí ìṣòro kékeré kí wọ́n tó dá ẹ̀rọ dúró ní àsìkò iṣẹ́ púpọ̀." },
      { objective: "O6", q: "Owó tí kì í yí padà XOF 500,000 lọ́dún; owó ìṣiṣẹ́ XOF 15,000 fún hẹ́kítà kan; iye owó iṣẹ́ XOF 40,000 fún hẹ́kítà kan. Iye hẹ́kítà ìdọ́gba?", options: ["Hẹ́kítà 12", "Hẹ́kítà 20", "Hẹ́kítà 25", "Hẹ́kítà 33"], answer: 1, why: "500,000 / (40,000 - 15,000) = hẹ́kítà 20." },
      { objective: "O6", q: "Kí ló ń dín ewu kí ẹ̀rọ bàjẹ́ ní àsìkò iṣẹ́ púpọ̀ kù?", options: ["Fífo ìtọ́jú ẹ̀rọ láti dá owó sí", "Yíyá a fún ẹlòmíì láìsí ìwé àkọsílẹ̀", "Ìtọ́jú déédéé àti níní ẹ̀yà ẹ̀rọ ní ìpamọ́", "Lílò ó tọ̀sán-tòru láìṣe àyẹ̀wò"], answer: 2, why: "Ìtọ́jú àti ẹ̀yà ẹ̀rọ ní ìpamọ́ ń jẹ́ kí ẹ̀rọ máa ṣiṣẹ́ nígbà tí àwọn oníbàárà nílò rẹ̀ jù." },
      { objective: "O6", q: "Kí o tó fọwọ́ sí àdéhùn ìyálò (lease) tàbí owó àyáwó fún ẹ̀rọ, o yẹ kí o:", options: ["Ka gbogbo àdéhùn náà tán kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o gbẹ́kẹ̀ lé", "Fọwọ́ sí i kíákíá kí ìfilọ̀ náà tó parí", "Ka ojú-ewé àkọ́kọ́ nìkan", "Jẹ́ kí olùtajà kọ ọ́ fún ọ"], answer: 0, why: "Àdéhùn ní owó àti ewu nínú; ka gbogbo rẹ̀ kí o sì gba ìmọ̀ràn." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 3, 5, 8, 9, 11, 14, 15, 17, 19] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Yíyan iṣẹ́", objective: "O1", notYet: "Kò sí ìdí kankan fún lílo ẹ̀rọ fún iṣẹ́ náà.", meets: "A yan iṣẹ́ náà pẹ̀lú ìdí (àsìkò, òṣìṣẹ́, àdánù tàbí iye iṣẹ́) àti owó iṣẹ́ ọwọ́.", exceeds: "Ó fi iṣẹ́ méjì tàbí jù bẹ́ẹ̀ lọ wé ara wọn, ó sì ṣàlàyé ìdí tí ẹ̀rọ fi máa mérè wá jù fún èyí." },
      { name: "Ìfiwéra owó", objective: "O2", notYet: "Owó tí kì í yí padà tàbí owó ìṣiṣẹ́ kò sí, tàbí ìṣirò kò tọ̀nà.", meets: "Ìdínkù iye, owó tí kì í yí padà, owó ìṣiṣẹ́, owó yíyá àti iye hẹ́kítà ìdọ́gba tọ̀nà, pẹ̀lú ìpinnu tó yé.", exceeds: "Ó lo iye owó gidi, ó sì kọ àsìkò àti ewu sí ẹ̀gbẹ́ ìṣirò." },
      { name: "Àyẹ̀wò ẹ̀rọ àti ìyálò", objective: "O4", notYet: "Kò sí àyẹ̀wò lórí ẹ̀yà ẹ̀rọ, àtúnṣe tàbí iṣẹ́ ìyálò.", meets: "Ó kọ àyẹ̀wò lórí ẹ̀yà ẹ̀rọ, ẹlẹ́rọ, ìdánilẹ́kọ̀ọ́ àti warranty sílẹ̀, tàbí lórí àdéhùn iṣẹ́ ìyálò.", exceeds: "Ó ti béèrè lọ́wọ́ olùtajà tàbí iṣẹ́ ìyálò kan, ó sì kọ àwọn ìdáhùn sílẹ̀." },
      { name: "Ààbò àti ìtọ́jú", objective: "O5", notYet: "Kò sí òfin ààbò tàbí kò sí ìwé àkọsílẹ̀.", meets: "Àwọn òfin ààbò pàtàkì àti ìwé àkọsílẹ̀ pẹ̀lú ọjọ́, wákàtí, iṣẹ́, epo, àtúnṣe àti owó.", exceeds: "Ó dárúkọ ẹni tí a ti kọ́ láti wa ẹ̀rọ àti ìgbà tí ìtọ́jú àkọ́kọ́ tó." },
      { name: "Ìpinnu àti ètò òwò", objective: "O6", notYet: "Kò sí ìpinnu, tàbí ìpinnu láti rà á láìsí ètò láti jẹ́ kí ẹ̀rọ máa ṣiṣẹ́.", meets: "Ìpinnu tó yé; tí ó bá jẹ́ rírà, ètò iṣẹ́ ìyálò ojú-ewé kan pẹ̀lú iṣẹ́, oníbàárà, iye owó, ìnáwó, ìdọ́gba àti ewu.", exceeds: "Ó fi hàn pé ètò náà ṣì ń ṣiṣẹ́ tí hẹ́kítà tí a forúkọ sílẹ̀ bá dín kù ní 20%, tàbí ó sọ ohun tí yóò yí padà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe ìpinnu yíyá tàbí rírà pẹ̀lú ìwé ìpinnu náà láàárín oṣù 3 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn gbìn lásìkò nítorí ẹ̀rọ tí wọ́n yá tàbí tí wọ́n ní ní àsìkò tó tẹ̀lé e",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ tàbí mú iṣẹ́ ìyálò ẹ̀rọ gbòòrò sí i, àti iye hẹ́kítà tí wọ́n ṣiṣẹ́ fún, láàárín oṣù 12",
      "Ìpalára tí ẹ̀rọ fà tí àwọn akẹ́kọ̀ọ́ ròyìn (àfojúsùn: kò sí rárá)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀ àti gègé, tàbí fóònù tí ó ní app spreadsheet tàbí app àkọsílẹ̀",
      "Ẹ̀rọ ìṣirò (calculator); ti orí fóònù náà dára",
      "Téèpù ìwọ̀n tàbí fóònù tí ó ní app GPS fún wíwọn ilẹ̀",
      "Iye owó gidi láti ọ̀dọ̀ olùtajà ẹ̀rọ àti iṣẹ́ ìyálò ní agbègbè rẹ, tí a kó jọ nígbà ẹ̀kọ́ náà",
      "Nǹkan bí ìṣẹ́jú 75 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú ìbẹ̀wò sí ibi tí ẹ̀rọ wà"
    ],
    facilitatorNotes: [
      "Ṣètò àṣefihàn pẹ̀lú iṣẹ́ ìyálò tàbí olùtajà ẹ̀rọ ní agbègbè: àyẹ̀wò ojoojúmọ́, ìbòjú ààbò, àti títú ẹ̀rọ ìyọ-àgbàdo tàbí ẹ̀rọ ìpakà tí ó há láìléwu nígbà tí ẹ́ńjìnnì ti kú.",
      "Fi iye owó gidi ti agbègbè rọ́pò àwọn iye owó àpẹẹrẹ kí Ẹ̀kọ́ 2 àti 6 tó bẹ̀rẹ̀, kí o sì sọ ní kedere pé àpẹẹrẹ ni wọ́n.",
      "Ṣàlàyé owó àyáwó, àdéhùn ìyálò àti san-bí-o-ṣe-ń-lò àti ewu wọn, ṣùgbọ́n má ṣe fúnni ní ìmọ̀ràn ìdókòwò; tọ́ àwọn akẹ́kọ̀ọ́ sọ́dọ̀ olùdámọ̀ràn tí wọ́n gbẹ́kẹ̀ lé.",
      "Jẹ́ kí àwọn ọmọdé jìnnà sí gbogbo àṣefihàn ẹ̀rọ.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan.",
      "Darí àwọn ẹgbẹ́ tí wọ́n fẹ́ lo ẹ̀rọ papọ̀ sí \"Ìkójọpọ̀ Àwùjọ: Pínpín Ẹ̀rọ Oko àti Ìdúnàádúrà fún Ohun Èlò Ọ̀gbìn\"."
    ]
  }
};
