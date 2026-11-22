"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-precision-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COPERNICUS = { name: "Copernicus Data Space Ecosystem àti Copernicus Browser (dátà Sentinel ọ̀fẹ́ àti ṣíṣí)", url: "https://dataspace.copernicus.eu/" };
const ESA_S2 = { name: "European Space Agency: Sentinel-2 (píksẹ́lì 10 m, ó ń padà sí ibì kan náà ní ọjọ́ 5-5)", url: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2" };
const DEAFRICA = { name: "Digital Earth Africa (iṣẹ́ sátẹ́láìtì ọ̀fẹ́, pẹ̀lú máàpù NDVI àìbáradé àti máàpù ilẹ̀ oko)", url: "https://www.digitalearthafrica.org/" };
const GPS_ACC = { name: "GPS.gov: Ìpéye GPS (smartphone nǹkan bí 4.9 m lábẹ́ òfurufú tó ṣí sílẹ̀)", url: "https://archive.gps.gov/systems/gps/performance/accuracy/" };
const IFDC_KITS = { name: "IFDC: Àyẹ̀wò àwọn kit àyẹ̀wò ilẹ̀ tí a lè gbé kiri, ẹ̀kọ́ tí a kọ́", url: "https://hub.ifdc.org/handle/20.500.14297/2026" };
const EMBU = { name: "Àyẹ̀wò iṣẹ́ àwọn sensọ̀ tí a fi ń wọn ilẹ̀ ní ìtòsí, lórí oko kékeré ní Embu County, Kenya", url: "https://alliancebioversityciat.org/publications-data/performance-evaluation-proximal-sensors-soil-assessment-smallholder-farms-embu" };
const ISDA = { name: "iSDAsoil: máàpù ìwà ilẹ̀ fún gbogbo Áfíríkà ní 30 m (PLOS Biology, 2021)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8584968/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO, àjọ ìwádìí iṣẹ́ àgbẹ̀ àti ẹran ọ̀sìn Kenya)", url: "https://www.kalro.org" };

module.exports = {
  id: "agri-precision-agriculture-yo",
  lang: "yo",
  translationOf: "agri-precision-agriculture",
  category: "Agriculture (Africa)",
  name: "Iṣẹ́ Àgbẹ̀ Ìpéye: Ìmójútó pẹ̀lú Sátẹ́láìtì àti Sensọ̀ Ilẹ̀",
  skills: "Rírí ìyàtọ̀ láàárín oko kan, Kíka máàpù NDVI sátẹ́láìtì ọ̀fẹ́ pẹ̀lú ìṣọ́ra, Wíwọn oko pẹ̀lú GPS fóònù, Yíyan àyẹ̀wò ilẹ̀ àti sensọ̀ àti mímọ bí a ṣe lè gbẹ́kẹ̀lé wọn tó, Fífi owó tí a ná wé èrè, Ṣíṣe máàpù agbègbè oko pẹ̀lú ètò fún agbègbè kọ̀ọ̀kan",
  outcome: "pín ọ̀kan lára oko rẹ sí agbègbè ní lílo máàpù sátẹ́láìtì ọ̀fẹ́, GPS fóònù, àyẹ̀wò ilẹ̀ àti ojú àti àkọsílẹ̀ rẹ fúnra rẹ, kí o sì kọ ètò tí kò wọ́n fún agbègbè kọ̀ọ̀kan, èyí tí owó rẹ ká, tí o sì lè ṣàyẹ̀wò.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ oko kékeré àti àwọn àgbẹ̀ oníṣòwò tí oko wọn ń dàgbà, àwọn alákòóso oko, àwọn ọ̀dọ́ oníṣòwò iṣẹ́ àgbẹ̀ àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ (extension) tí wọ́n fẹ́ ṣe iṣẹ́ àgbẹ̀ \"ìpéye\" láìsí ẹ̀rọ ńlá. Iṣẹ́ àgbẹ̀ ìpéye túmọ̀ sí fífún apá kọ̀ọ̀kan nínú oko ní ohun tí ó nílò, dípò kí a ṣe gbogbo oko lọ́nà kan náà.",
    "O máa kọ́ bí a ṣe ń rí ìyàtọ̀ nínú oko, bí a ṣe ń ka máàpù ọ̀gbìn sátẹ́láìtì ọ̀fẹ́ (kí o sì mọ ibi tí agbára wọn mọ), bí a ṣe ń fi fóònù ya máàpù oko àti àwọn agbègbè rẹ̀, bí a ṣe ń yan àyẹ̀wò ilẹ̀ àti sensọ̀ kí a sì mọ bí a ṣe lè gbẹ́kẹ̀lé wọn tó, àti bí a ṣe ń pinnu bóyá irinṣẹ́ kan tọ́ sí owó rẹ̀. Ní ìparí, o máa ní máàpù agbègbè ti oko rẹ àti ètò fún agbègbè kọ̀ọ̀kan.",
    "O kò nílò drone. Tí o bá fẹ́ kọ́ bí a ṣe ń fi drone ya máàpù, àwọn ẹ̀kọ́ \"Drones for Agricultural Monitoring\" ń kọ́ni nípa rẹ̀. Àwọn iye owó jẹ́ àpẹẹrẹ lásán. Ẹ̀kọ́ kọ̀ọ̀kan parí pẹ̀lú iṣẹ́ kan nínú oko rẹ; ìdánwò ìmọ̀ kan parí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì parí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣe máàpù agbègbè fún ọ̀kan lára oko rẹ: rìn yí ààlà oko náà ká kí o sì fi app GPS fóònù kọ ọ́ sílẹ̀, pín oko náà sí agbègbè 2 sí 4 ní lílo ó kéré tán ẹ̀rí oríṣi méjì (NDVI sátẹ́láìtì ní ọjọ́ méjì, èsì àyẹ̀wò ilẹ̀ tàbí kit, èso tí oko ti mú wá tẹ́lẹ̀, ohun tí o rí), kọ ìwọ̀n ilẹ̀ àti ẹ̀rí sí agbègbè kọ̀ọ̀kan, kí o sì kọ ètò fún agbègbè kọ̀ọ̀kan (ohun tí o máa ṣe lọ́nà ọ̀tọ̀, iye owó rẹ̀ ní owó agbègbè rẹ gẹ́gẹ́ bí àpẹẹrẹ, àti bí o ṣe máa ṣàyẹ̀wò ní àsìkò tó ń bọ̀ bóyá ó ṣiṣẹ́).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ oko kékeré àti àwọn àgbẹ̀ oníṣòwò tí oko wọn ń dàgbà, àwọn alákòóso oko, àwọn ọ̀dọ́ oníṣòwò iṣẹ́ àgbẹ̀ àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nigeria, Ghana, Côte d'Ivoire, Senegal àti káàkiri Áfíríkà, tí wọ́n ń gbin àgbàdo, ìrẹsì, ọkà bàbà, ẹ̀gẹ́, ẹ̀wà, ẹ̀pà, tòmátì, kọfí àti kòkó lórí oko tí kò tó hẹ́kítà kan títí dé hẹ́kítà mélòó kan mẹ́wàá.",
    startingPoint: "Wọ́n mọ oko wọn dáadáa ní ojú, wọ́n sì ń lo smartphone. Ọ̀pọ̀ jù lọ ń ṣe gbogbo oko lọ́nà kan náà: ìwọ̀n ajílẹ̀ kan, ìwọ̀n irúgbìn kan. Díẹ̀ ló ti lo máàpù sátẹ́láìtì, irinṣẹ́ ìwọ̀n ilẹ̀ GPS lórí fóònù tàbí àyẹ̀wò ilẹ̀ rí, ọ̀pọ̀ sì ti gbọ́ ọ̀rọ̀ ńlá nípa àwọn sensọ̀ àti app.",
    gap: "Nínú oko kan ṣoṣo, ilẹ̀, omi àti èso lè yàtọ̀ síra gan-an, nítorí náà ìwọ̀n kan ṣoṣo ń fi ohun èlò ṣòfò ní àwọn apá kan, ó sì ń fi ebi pa àwọn apá míì. Àwọn akẹ́kọ̀ọ́ nílò láti rí ìyàtọ̀ wọ̀nyí pẹ̀lú irinṣẹ́ ọ̀fẹ́ àti èyí tí kò wọ́n, kí wọ́n mọ irinṣẹ́ tí a lè gbẹ́kẹ̀lé fún kí ni, kí wọ́n sì yí wọn padà sí ètò agbègbè tó rọrùn tí ó ń mówó wá lórí oko kékeré.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ẹ̀kọ́ náà tún wà ní èdè Spanish, French àti Arabic",
      "Ẹ̀rọ: smartphone; kọ̀mpútà ń ràn lọ́wọ́ fún wíwo máàpù sátẹ́láìtì ṣùgbọ́n kò pọn dandan",
      "Oko kékeré tí ó dàpọ̀: àwòrán sátẹ́láìtì ọ̀fẹ́ (píksẹ́lì nǹkan bí 10 m) kò ṣe kedere tó fún oko tí kò tó nǹkan bí ìdajì hẹ́kítà",
      "Ìkùukùu ní àsìkò òjò ń dí àwòrán sátẹ́láìtì lọ́wọ́",
      "Owó: irinṣẹ́ tí kò wọ́n ni a kọ́kọ́ lò; gbogbo iye owó jẹ́ àpẹẹrẹ; a kò gbé ọjà kankan lárugẹ",
      "Oògùn kòkòrò àti ajílẹ̀: ọjà tí a forúkọ rẹ̀ sílẹ̀ nìkan, tí a lò gẹ́gẹ́ bí ìwé ara rẹ̀ (label) ṣe sọ"
    ],
    prerequisites: "Kí o mọ bí a ṣe ń lo smartphone dáadáa. Ó dára kí o kọ́kọ́ ṣe \"Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀\" àti \"Ìsọfúnni àti Ẹ̀rọ Ìgbàlódé fún Iṣẹ́ Àgbẹ̀\"."
  },
  // ---- ADDIE: Design (objectives) ----
  objectives: [
    { id: "O1", condition: "Tí o bá ń rìn nínú ọ̀kan lára oko rẹ", action: "kọ àwọn ìyàtọ̀ nínú oko náà tí iṣẹ́ àgbẹ̀ ìpéye lè ṣe nǹkan nípa rẹ̀ sílẹ̀", standard: "kí o dárúkọ ó kéré tán ìyàtọ̀ mẹ́ta àti bí o ṣe rí ọ̀kọ̀ọ̀kan" },
    { id: "O2", condition: "Ní lílo ohun èlò ìwo máàpù sátẹ́láìtì ọ̀fẹ́ bí Copernicus Browser", action: "wá oko rẹ kí o sì fi NDVI rẹ̀ ní ọjọ́ méjì wé ara wọn", standard: "kí o sì sọ ohun kan tí máàpù náà fi hàn àti ohun kan tí kò lè fi hàn" },
    { id: "O3", condition: "Ní lílo app GPS lórí fóònù", action: "kọ ààlà oko kan àti etí àwọn agbègbè rẹ̀ sílẹ̀, kí o sì ka ìwọ̀n ilẹ̀ wọn", standard: "kí o sì fààyè gba àṣìṣe tí ó tó nǹkan bí mítà 5" },
    { id: "O4", condition: "Tí o bá lè yan láàárín àyẹ̀wò ilé-ìwádìí (lab), kit àyẹ̀wò tàbí sensọ̀ ọwọ́", action: "yan ọ̀nà àyẹ̀wò ilẹ̀ kan, mú àpẹẹrẹ ilẹ̀ láti agbègbè kọ̀ọ̀kan, kí o sì sọ bí o ṣe lè gbẹ́kẹ̀lé èsì kọ̀ọ̀kan tó", standard: "kí o gbẹ́kẹ̀lé pH ju èsì nitrogen, phosphorus àti potassium láti inú kit lọ" },
    { id: "O5", condition: "Tí a bá fún ọ ní irinṣẹ́ tàbí ọ̀nà iṣẹ́ àgbẹ̀ ìpéye kan àti àwọn nọ́mbà oko rẹ", action: "fi iye owó rẹ̀ wé èrè tí o retí, kí o sì pinnu bóyá o máa lò ó", standard: "ní lílo ìṣirò ìnáwó apá kan tó rọrùn ní owó agbègbè rẹ" },
    { id: "O6", condition: "Tí o bá ní ẹ̀rí láti ó kéré tán orísun méjì", action: "pín oko kan sí agbègbè ìṣàkóso 2 sí 4 kí o sì kọ ètò fún agbègbè kọ̀ọ̀kan", standard: "tí owó rẹ ká ètò kọ̀ọ̀kan, tí o sì lè ṣàyẹ̀wò rẹ̀ ní àsìkò tó ń bọ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Rírí oko rẹ ní apá-apá",
      lessons: [
        {
          title: "Ohun tí iṣẹ́ àgbẹ̀ ìpéye jẹ́ lórí oko kékeré",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọ àwọn ìyàtọ̀ nínú ọ̀kan lára oko rẹ tí o lè ṣàkóso lọ́tọ̀ọ̀tọ̀ sílẹ̀.",
          text: [
            "Iṣẹ́ àgbẹ̀ ìpéye túmọ̀ sí ṣíṣe àwọn apá oko lọ́nà ọ̀tọ̀ọ̀tọ̀, nítorí pé wọ́n yàtọ̀ síra. Igun kan nínú oko àgbàdo lè jẹ́ iyanrìn, kí ó sì gbẹ; ìsàlẹ̀ rẹ̀ lè kún fún omi; àárín rẹ̀ sì lè lọ́ràá nítorí pé wọ́n ti so màálù mọ́ ibẹ̀ rí. Ṣíṣe gbogbo oko lọ́nà kan náà ń fi ajílẹ̀ àti irúgbìn ṣòfò ní àwọn apá kan, ó sì ń fi ebi pa àwọn apá míì.",
            "Lórí oko ńlá, tírákítọ̀ tí ó ń yí ìwọ̀n padà fúnra rẹ̀ ni wọ́n fi ń ṣe èyí. Lórí oko kékeré, o lè ṣe ohun kan náà pẹ̀lú ọwọ́: ìgbẹ́ ẹran púpọ̀ sí i níbi tí ilẹ̀ kò ti lọ́ràá, ọ̀nà omi níbi tí omi ń dúró sí, irúgbìn ọ̀tọ̀ lórí òkè tí ó gbẹ, tàbí kí o má fi ajílẹ̀ síbi tí ọ̀gbìn kì í ti mówó wá rí. Èrò náà kan náà ni: wò ó, wọ̀n ọ́n, pinnu ní agbègbè-agbègbè, kí o sì ṣàyẹ̀wò èsì rẹ̀.",
            "O ti mọ ọ̀pọ̀ nǹkan ní ojú. Rìn nínú oko náà kí o sì kọ ibi tí ọ̀gbìn ti kúrú, tí ó pọ́n tàbí tí kò hù déédé, ibi tí omi ń dúró sí, ibi tí èpò bí Striga (èpò tí ó ń jẹ ọ̀gbìn) ti ń hù, àti ibi tí èso ti dára tàbí tí kò dára. Béèrè lọ́wọ́ àwọn òṣìṣẹ́ tí ó ń roko tí ó sì ń kórè: wọ́n ń rí gbogbo igun. Máàpù sátẹ́láìtì, GPS àti àyẹ̀wò ilẹ̀, nínú àwọn ẹ̀kọ́ tó tẹ̀lé e, ń ràn ọ́ lọ́wọ́ láti fìdí ohun tí o rí múlẹ̀ kí o sì wọ̀n ọ́n."
          ],
          steps: ["Rìn gbogbo oko náà, ní etí àti ní àárín.", "Kọ ibi tí ọ̀gbìn kò ti lágbára, ibi tí omi ń dúró sí, ibi tí èpò tàbí kòkòrò ti pọ̀ jù.", "Béèrè lọ́wọ́ àwọn òṣìṣẹ́ ibi tí èso ti dára tàbí tí kò dára.", "Kọ ìyàtọ̀ kọ̀ọ̀kan àti bí o ṣe rí i.", "Sàmì sí wọn lórí àwòrán oko tí o fọwọ́ yà."],
          words: [["Iṣẹ́ àgbẹ̀ ìpéye", "ṣíṣàkóso àwọn apá oko lọ́nà ọ̀tọ̀ọ̀tọ̀, gẹ́gẹ́ bí ohun tí a rí àti ohun tí a wọ̀n."], ["Ìyàtọ̀ (variability)", "bí ilẹ̀, omi tàbí ìdàgbà ọ̀gbìn ṣe ń yí padà tó láti apá kan oko sí apá míì."], ["Agbègbè ìṣàkóso", "apá kan oko tí a ń ṣàkóso bí ẹyọ kan nítorí pé ó ń hùwà lọ́nà kan náà."]],
          slides: [
            { title: "Oko kan, apá púpọ̀", bullets: ["Òkè iyanrìn, ìsàlẹ̀ olómi, ọgbà ẹran àtijọ́ tó lọ́ràá", "Ṣíṣe gbogbo rẹ̀ lọ́nà kan ń fi ohun èlò ṣòfò"] },
            { title: "Ìpéye pẹ̀lú ọwọ́", bullets: ["Ìgbẹ́ ẹran púpọ̀ síbi tí ilẹ̀ kò ti lọ́ràá", "Ọ̀nà omi níbi tí omi ń dúró sí", "Irúgbìn tó tọ́ fún apá kọ̀ọ̀kan"] },
            { title: "Wò ó, wọ̀n ọ́n, pinnu, ṣàyẹ̀wò", bullets: ["Ojú àti àkọsílẹ̀ rẹ ló ṣáájú", "Irinṣẹ́ ń fìdí rẹ̀ múlẹ̀, wọ́n sì ń wọ̀n ọ́n"] },
            { title: "Rìn kí o sì béèrè", bullets: ["Ọ̀gbìn tí kò lágbára, tó pọ́n tàbí tí kò hù déédé", "Omi tó ń dúró, èpò, kòkòrò", "Béèrè lọ́wọ́ àwọn òṣìṣẹ́"] }
          ],
          tryIt: "Rìn nínú ọ̀kan lára oko rẹ. Fọwọ́ ya àwòrán rẹ̀ kí o sì sàmì sí ó kéré tán ìyàtọ̀ mẹ́ta (fún àpẹẹrẹ apá tí kò lágbára, apá olómi, apá tí èpò pọ̀ sí). Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ bí o ṣe rí i: ní ojú, láti inú èso, tàbí láti ẹnu àwọn òṣìṣẹ́.",
          youCanNow: "rí oko kan bí àwọn apá tí ó yàtọ̀ síra, kí o sì kọ àwọn ìyàtọ̀ tí o lè ṣàkóso lọ́tọ̀ọ̀tọ̀ sílẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Kí ni èrò pàtàkì iṣẹ́ àgbẹ̀ ìpéye?", options: ["Rírà ẹ̀rọ tí ó wọ́n jù", "Lílo ìwọ̀n kan náà níbi gbogbo", "Ṣíṣàkóso àwọn apá oko lọ́nà ọ̀tọ̀ọ̀tọ̀", "Ṣíṣe iṣẹ́ àgbẹ̀ pẹ̀lú drone nìkan"], answer: 2, why: "Ó ń fún apá kọ̀ọ̀kan nínú oko ní ohun tí ó nílò." },
            { objective: "O1", q: "Ta ló lè sọ fún ọ kíákíá ibi tí èso kò ti dára nínú oko?", options: ["Àwọn òṣìṣẹ́ tí ó ń roko tí ó sì ń kórè níbẹ̀", "Ìpolówó sensọ̀ kan", "Olùrà kan ní ìlú ńlá", "Kò sí ẹnì kankan"], answer: 0, why: "Àwọn òṣìṣẹ́ ń rí gbogbo igun oko ní gbogbo àsìkò." }
          ]
        },
        {
          title: "Máàpù sátẹ́láìtì ọ̀fẹ́ àti ohun tí NDVI ń fi hàn",
          objectives: ["O2"],
          minutes: 6,
          goal: "Fi NDVI oko rẹ ní ọjọ́ méjì wé ara wọn nínú ohun èlò ìwo máàpù sátẹ́láìtì ọ̀fẹ́.",
          text: [
            "Àwọn sátẹ́láìtì Sentinel-2 ti Europe ń ya àwòrán gbogbo Áfíríkà ní nǹkan bí ọjọ́ 5-5, pẹ̀lú píksẹ́lì mítà 10 (píksẹ́lì kan jẹ́ onígun mẹ́rin 10 m x 10 m). Àwòrán wọ̀nyí jẹ́ ọ̀fẹ́ àti ṣíṣí. Copernicus Browser jẹ́ kí o wò wọ́n láìsanwó; o lè bẹ̀rẹ̀ láìní àkáǹtì, àkáǹtì ọ̀fẹ́ sì ń fúnni ní àǹfààní púpọ̀ sí i. Digital Earth Africa náà ń pèsè iṣẹ́ sátẹ́láìtì ọ̀fẹ́, bí máàpù NDVI àìbáradé (anomaly) àti máàpù ilẹ̀ oko, tí a ṣe fún Áfíríkà.",
            "NDVI (Normalised Difference Vegetation Index) jẹ́ nọ́mbà tí a ṣírò láti inú àwọ̀ tí ewéko ń tàn padà. Ewé tí ó ní ìlera, tí ó pọ̀, tí ó sì tutù yọ̀yọ̀ ń fúnni ní NDVI gíga; ilẹ̀ òfìfo, tàbí ọ̀gbìn tí ó gbẹ tàbí tí kò pọ̀, ń fúnni ní NDVI kékeré. Nínú ohun èlò ìwo máàpù náà, wá oko rẹ, yan ìwo NDVI, kí o sì fi ọjọ́ méjì wé ara wọn, fún àpẹẹrẹ ọ̀sẹ̀ mẹ́rin àti ọ̀sẹ̀ mẹ́jọ lẹ́yìn gbígbìn. Apá kan tí ó ń wà nísàlẹ̀ nígbà tí èyí tó kù ga ni ó yẹ kí o lọ rìn wò.",
            "Ohun tí NDVI KÒ fi hàn: ohun tó fà á. NDVI kékeré lè jẹ́ nítorí ọ̀dá, omi tí ó pọ̀ jù, àìtó nitrogen, kòkòrò, àrùn, èpò tàbí gbígbìn pẹ́. Kò lè rí ohun tí ó wà lábẹ́ ìkùukùu, ní àsìkò òjò sì o lè dúró fún ọ̀sẹ̀ mélòó kan kí o tó rí àwòrán tó mọ́. Lórí oko tí kò tó nǹkan bí ìdajì hẹ́kítà, tàbí oko gígùn tóóró, píksẹ́lì 10 m kò ṣe kedere, ó sì ń da ọ̀gbìn tàbí igi aládùúgbò pọ̀ mọ́ ọn. Èpò náà lè dà bí ewéko aláwọ̀ ewé tí ó ní ìlera. Nítorí náà, NDVI ń sọ ibi tí o máa wò fún ọ, ẹsẹ̀ rẹ ló sì ń sọ ìdí rẹ̀ fún ọ."
          ],
          steps: ["Ṣí Copernicus Browser lórí kọ̀mpútà tàbí browser fóònù.", "Wá agbègbè rẹ kí o sì sún mọ́ oko rẹ.", "Yan àwòrán tí ìkùukùu kò pọ̀ lórí rẹ̀ àti ìwo NDVI.", "Fi ọjọ́ méjì nínú àsìkò kan náà wé ara wọn.", "Sàmì sí àwọn apá tí NDVI wọn kéré lórí àwòrán oko rẹ, kí o sì lọ rìn wọ́n wò láti wá ohun tó fà á."],
          words: [["Sentinel-2", "sátẹ́láìtì méjì ti Europe tí ó ń ya àwòrán ilẹ̀ ayé lọ́fẹ̀ẹ́ ní nǹkan bí ọjọ́ 5-5, ní àlàyé 10 m."], ["NDVI", "nọ́mbà láti inú àwọ̀ sátẹ́láìtì tí ó ń fi hàn bí ewéko ṣe tutù yọ̀yọ̀ tó àti bí ó ṣe pọ̀ tó."], ["Píksẹ́lì (pixel)", "onígun mẹ́rin kan nínú àwòrán sátẹ́láìtì; fún Sentinel-2, 10 m x 10 m."]],
          slides: [
            { title: "Àwòrán sátẹ́láìtì ọ̀fẹ́", bullets: ["Sentinel-2: nǹkan bí ọjọ́ 5-5, píksẹ́lì 10 m", "Copernicus Browser: ọ̀fẹ́ láti wò", "Digital Earth Africa: iṣẹ́ ọ̀fẹ́ fún Áfíríkà"] },
            { title: "Ohun tí NDVI ń fi hàn", bullets: ["Gíga: ewéko tí ó pọ̀, tí ó tutù yọ̀yọ̀", "Kékeré: ilẹ̀ òfìfo, ọ̀gbìn tó gbẹ tàbí tí kò pọ̀", "Fi ọjọ́ méjì wé ara wọn"] },
            { title: "Ohun tí NDVI KÒ fi hàn", bullets: ["Ohun tó fa apá tí NDVI rẹ̀ kéré", "Ohunkóhun tí ó wà lábẹ́ ìkùukùu", "Àlàyé kíkún lórí oko tí kò tó nǹkan bí ìdajì hẹ́kítà"] },
            { title: "Máàpù ń sọ ibo, ẹsẹ̀ ń sọ ìdí", bullets: ["Sàmì sí àwọn apá tí NDVI wọn kéré", "Rìn wọ́n wò kí o sì wá ohun tó fà á"] }
          ],
          sources: [COPERNICUS, ESA_S2, DEAFRICA],
          tryIt: "Ṣí Copernicus Browser, wá ọ̀kan lára oko rẹ (tàbí oko kan nítòsí rẹ), kí o sì wo NDVI ní ọjọ́ méjì tí ojú ọjọ́ mọ́ ní àsìkò yìí. Sàmì sí apá èyíkéyìí tí NDVI rẹ̀ kéré lórí àwòrán oko rẹ, lẹ́yìn náà lọ rìn ín wò kí o sì kọ ohun tí o rò pé ó fà á.",
          youCanNow: "ka máàpù NDVI sátẹ́láìtì ọ̀fẹ́ ti oko rẹ kí o sì fi pinnu ibi tí o máa wò, kì í ṣe ohun tó fà á.",
          quickCheck: [
            { objective: "O2", q: "Apá kan nínú oko àgbàdo rẹ ní NDVI kékeré. Kí ni èyí sọ fún ọ?", options: ["Nitrogen kò tó níbẹ̀", "Kòkòrò fall armyworm wà níbẹ̀", "Ó nílò omi bíbomirin", "Ewéko ibẹ̀ kò tutù yọ̀yọ̀ tó tàbí kò pọ̀, nítorí náà lọ rìn ín wò kí o sì wá ìdí rẹ̀"], answer: 3, why: "NDVI ń fi ibi tí ìdàgbà kò ti lágbára hàn, kì í ṣe ohun tó fà á." },
            { objective: "O2", q: "Kí ló dé tí máàpù Sentinel-2 ọ̀fẹ́ fi lè ṣòro láti lò lórí oko 0.2 hẹ́kítà?", options: ["Píksẹ́lì 10 m kò ṣe kedere, wọ́n sì ń da ilẹ̀ aládùúgbò pọ̀ mọ́ ọn", "Àwòrán náà wà fún Europe nìkan", "Ó wọ́n jù", "NDVI kò ṣiṣẹ́ lórí àgbàdo"], answer: 0, why: "Oko 0.2 ha jẹ́ píksẹ́lì bí ogún mélòó kan péré, ọ̀pọ̀ nínú wọn sì dàpọ̀ mọ́ etí oko." }
          ]
        },
        {
          title: "Fífi GPS fóònù rẹ ya máàpù oko",
          objectives: ["O3"],
          minutes: 5,
          goal: "Fi app GPS fóònù kọ ààlà oko kan àti àwọn agbègbè rẹ̀ sílẹ̀, kí o sì ka ìwọ̀n ilẹ̀ wọn.",
          text: [
            "GPS fóònù lè ya máàpù oko rẹ. Ọ̀pọ̀ app ọ̀fẹ́ lè kọ ààlà tí o rìn yí ká sílẹ̀, tàbí jẹ́ kí o fi àmì sí àwọn ibi tí ó yí oko ká, lẹ́yìn náà kí wọ́n fi ìwọ̀n ilẹ̀ hàn. O tún lè fi àmì (pin) sórí app máàpù kí o sì pín àwọn nọ́mbà ipò rẹ̀ (coordinates). Mímọ ìwọ̀n gidi oko àti ti agbègbè kọ̀ọ̀kan ṣe pàtàkì: ajílẹ̀, irúgbìn, owó òṣìṣẹ́ àti èso fún éékà tàbí hẹ́kítà kọ̀ọ̀kan dá lórí rẹ̀, ọ̀pọ̀ àgbẹ̀ sì máa ń rí i pé oko wọn tóbi tàbí kéré ju bí wọ́n ṣe rò lọ.",
            "GPS kò péye pátápátá. Lábẹ́ òfurufú tó ṣí sílẹ̀, smartphone sábà máa ń péye dé nǹkan bí mítà 5, ó sì máa ń burú sí i nítòsí igi, ilé àti nínú àfonífojì. Lórí oko kékeré, àṣìṣe yẹn ṣe pàtàkì: rìn díẹ̀díẹ̀, dúró jẹ́ẹ́ fún ìṣẹ́jú-àáyá díẹ̀ ní igun kọ̀ọ̀kan, jẹ́ kí fóònù wà lábẹ́ òfurufú tó ṣí sílẹ̀, kí o sì rìn ààlà náà lẹ́ẹ̀mejì láti fi wé ara wọn. Tí ìwọ̀n méjèèjì bá yàtọ̀ síra púpọ̀, tún un rìn.",
            "Ya máàpù àwọn agbègbè náà pẹ̀lú. Rìn etí apá olómi tàbí òkè iyanrìn kí o sì fi pamọ́ bí àwòrán ọ̀tọ̀, tàbí fi àmì sí àwọn igun rẹ̀. Fún àwòrán kọ̀ọ̀kan ní orúkọ oko àti agbègbè (\"F2 Zone A wet\"), kí o sì fi fáìlì náà tàbí àwòrán ojú-iboju (screenshot) pẹ̀lú ìwọ̀n ilẹ̀ pamọ́. Àwọn àwòrán wọ̀nyí ló máa jẹ́ ìpìlẹ̀ máàpù agbègbè rẹ nínú Ẹ̀kọ́ 6."
          ],
          steps: ["Ṣí app GPS ìwọ̀n ilẹ̀ tàbí app máàpù níta, lábẹ́ òfurufú tó ṣí sílẹ̀.", "Rìn ààlà oko náà díẹ̀díẹ̀, kí o dúró ní igun kọ̀ọ̀kan.", "Ka ìwọ̀n ilẹ̀ náà kí o sì kọ ọ́ sílẹ̀; tún un rìn láti ṣàyẹ̀wò.", "Rìn tàbí fi àmì sí etí agbègbè kọ̀ọ̀kan, kí o sì fi ọ̀kọ̀ọ̀kan pamọ́ pẹ̀lú orúkọ.", "Fi fáìlì náà tàbí screenshot pẹ̀lú àwọn ìwọ̀n ilẹ̀ pamọ́."],
          words: [["GPS", "Global Positioning System: àwọn sátẹ́láìtì tí ó ń jẹ́ kí fóònù mọ ibi tí ó wà lórí ilẹ̀ ayé."], ["Ààlà", "etí oko."], ["Hẹ́kítà", "ilẹ̀ tí ó jẹ́ 100 m x 100 m, nǹkan bí éékà 2.5."]],
          slides: [
            { title: "Fóònù rẹ lè ya máàpù oko", bullets: ["Rìn ààlà rẹ̀ tàbí fi àmì sí àwọn igun", "Ka ìwọ̀n ilẹ̀", "Ìwọ̀n oko ló ń darí gbogbo nọ́mbà fún éékà kọ̀ọ̀kan"] },
            { title: "GPS kò péye pátápátá", bullets: ["Nǹkan bí 5 m lábẹ́ òfurufú tó ṣí sílẹ̀", "Ó burú sí i nítòsí igi, ilé, àfonífojì"] },
            { title: "Ìwọ̀n tó dára jù", bullets: ["Rìn díẹ̀díẹ̀, dúró ní àwọn igun", "Rìn lẹ́ẹ̀mejì kí o sì fi wé ara wọn"] },
            { title: "Ya máàpù àwọn agbègbè", bullets: ["Àwòrán kan tí a fi pamọ́ fún agbègbè kọ̀ọ̀kan", "Orúkọ: F2 Zone A wet", "Fi ìwọ̀n ilẹ̀ pamọ́"] }
          ],
          sources: [GPS_ACC],
          tryIt: "Lo app GPS fóònù láti rìn ààlà oko kan lẹ́ẹ̀mejì, kí o sì kọ ìwọ̀n ilẹ̀ méjèèjì sílẹ̀. Lẹ́yìn náà ya máàpù etí agbègbè kan tí o rí nínú Ẹ̀kọ́ 1, fún un ní orúkọ, kí o sì kọ ìwọ̀n ilẹ̀ rẹ̀.",
          youCanNow: "fi GPS fóònù ya máàpù oko àti àwọn agbègbè rẹ̀, kí o sì kọ ìwọ̀n ilẹ̀ wọn sílẹ̀, ní fífààyè gba àṣìṣe GPS.",
          quickCheck: [
            { objective: "O3", q: "O rìn ààlà oko kan lẹ́ẹ̀mejì, o sì rí éékà 0.9 àti éékà 1.4. Kí ni o máa ṣe?", options: ["Ṣírò ìpíndọ́gba wọn kí o sì dúró", "Tún un rìn díẹ̀díẹ̀, kí o dúró ní àwọn igun, lábẹ́ òfurufú tó ṣí sílẹ̀", "Lo nọ́mbà tó tóbi jù", "Pa GPS tì"], answer: 1, why: "Ìyàtọ̀ ńlá túmọ̀ sí pé ìwọ̀n náà kò dára; tún un rìn pẹ̀lú ìṣọ́ra." },
            { objective: "O3", q: "Níbo ni GPS fóònù kì í sábà péye jù?", options: ["Nínú oko tí ó ṣí sílẹ̀", "Ní ọjọ́ tí oòrùn mú", "Lórí ilẹ̀ pẹrẹsẹ", "Lábẹ́ igi àti nítòsí ilé"], answer: 3, why: "Igi àti ilé ń dí àmì sátẹ́láìtì lọ́nà, wọ́n sì ń tàn án padà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Rírí oko rẹ ní apá-apá",
        questions: [
          { objective: "O1", q: "Àgbẹ̀ oko kékeré kan fi ìgbẹ́ ẹran sí i sí apá iyanrìn tí kò lọ́ràá nínú oko rẹ̀ nìkan. Èyí jẹ́:", options: ["Ìfiṣòfò", "Iṣẹ́ àgbẹ̀ ìpéye pẹ̀lú ọwọ́", "Ohun tí ó lòdì sí òfin", "Ohun tí a lè ṣe pẹ̀lú tírákítọ̀ nìkan"], answer: 1, why: "Ṣíṣàkóso àwọn apá oko lọ́nà ọ̀tọ̀ọ̀tọ̀ ni kókó iṣẹ́ àgbẹ̀ ìpéye." },
          { objective: "O2", q: "Lẹ́ẹ̀mélòó ni àwọn sátẹ́láìtì Sentinel-2 máa ń ya àwòrán ibì kan náà?", options: ["Nǹkan bí ọjọ́ 5-5", "Lẹ́ẹ̀kan lọ́dún", "Ní wákàtí kọ̀ọ̀kan", "Tí a bá béèrè nìkan"], answer: 0, why: "Sátẹ́láìtì méjèèjì ń padà sí ibì kan náà ní nǹkan bí ọjọ́ 5-5; ìkùukùu lè bo àwọn àwòrán kan." },
          { objective: "O2", q: "Èwo ni ohun tí NDVI KÒ LÈ sọ fún ọ?", options: ["Ibi tí ọ̀gbìn ti tutù yọ̀yọ̀ jù", "Ibi tí ìdàgbà kò ti lágbára", "Ìdí tí apá kan kò fi lágbára", "Bí ọjọ́ méjì ṣe yàtọ̀ síra"], answer: 2, why: "Ọ̀pọ̀ nǹkan ló ń fa NDVI kékeré; o máa rìn apá náà wò láti mọ èyí tó jẹ́." },
          { objective: "O3", q: "Ìpéye GPS smartphone lábẹ́ òfurufú tó ṣí sílẹ̀ sábà máa ń jẹ́ nǹkan bí:", options: ["Sẹ̀ńtímítà 1", "Mítà 500", "Kìlómítà 5", "Mítà 5"], answer: 3, why: "Nǹkan bí 4.9 m lábẹ́ òfurufú tó ṣí sílẹ̀, ó sì burú sí i nítòsí igi àti ilé." },
          { objective: "O3", q: "Kí ló dé tí mímọ ìwọ̀n gidi oko fi ṣe pàtàkì?", options: ["Irúgbìn, ajílẹ̀, owó òṣìṣẹ́ àti èso fún éékà kọ̀ọ̀kan dá lórí rẹ̀", "Àwọn olùrà ń sanwó gẹ́gẹ́ bí ìwọ̀n ilẹ̀", "Àwọn app GPS nílò rẹ̀", "Kò ṣe pàtàkì"], answer: 0, why: "Ìwọ̀n ilẹ̀ tí kò tọ́ ń mú kí gbogbo nọ́mbà fún éékà kọ̀ọ̀kan jẹ́ àṣìṣe." }
        ]
      }
    },
    {
      name: "Orí 2: Wíwọn ilẹ̀ àti ṣíṣètò ní agbègbè-agbègbè",
      lessons: [
        {
          title: "Kit àyẹ̀wò ilẹ̀ àti sensọ̀: bí a ṣe lè gbẹ́kẹ̀lé wọn tó",
          objectives: ["O4"],
          minutes: 6,
          goal: "Yan ọ̀nà àyẹ̀wò ilẹ̀ fún agbègbè kọ̀ọ̀kan kí o sì sọ bí o ṣe lè gbẹ́kẹ̀lé èsì rẹ̀ tó.",
          text: [
            "Ọ̀nà pàtàkì mẹ́ta ló wà láti ṣàyẹ̀wò ilẹ̀. Àyẹ̀wò ilé-ìwádìí (lab) (láti ilé-iṣẹ́ ìwádìí orílẹ̀-èdè bíi KALRO, yunifásítì tàbí lab aládàáni tí a fọwọ́ sí) ló péye jù, ó ń gba ọjọ́ sí ọ̀sẹ̀ mélòó kan, ó sì wọ́n jù. Kit àyẹ̀wò oko (ìwé àwọ̀ tàbí kẹ́míkà nínú ọ̀pá ìgò) ń fúnni ní èsì kíákíá lójú ẹsẹ̀. Sensọ̀ tàbí mítà oníná tí a ń fi ọwọ́ mú ń fúnni ní èsì láàárín ìṣẹ́jú díẹ̀, wọ́n sì sábà máa ń tà á pẹ̀lú app.",
            "Àwọn àyẹ̀wò òmìnira lórí kit tí a lè gbé kiri, bí àyẹ̀wò tí IFDC ṣe, rí i pé wọ́n bá lab mu dáadáa fún pH ilẹ̀, ṣùgbọ́n èsì wọn fún nitrogen, phosphorus àti potassium kò dúró sójú kan. Ìwádìí ní Embu County, Kenya, rí i pé àwọn sensọ̀ ọwọ́ onípele gíga kan lè sọ ọ̀pọ̀ ìwà ilẹ̀ dáadáa, ṣùgbọ́n àwọn ẹ̀rọ yẹn wọ́n, wọ́n sì nílò ìtúnṣe ìwọ̀n (calibration) pẹ̀lú àpẹẹrẹ lab. Ṣọ́ra fún ọ̀pá ìwọ̀n olówó pọ́ọ́kú tí ó sọ pé òun ń ka NPK lójú ẹsẹ̀: iye ìpéye tí olùtajà fúnra rẹ̀ sọ kì í ṣe ẹ̀rí òmìnira.",
            "Ètò tí ó ṣeé ṣe: fi àpẹẹrẹ àdàlú kan tó dára láti agbègbè kọ̀ọ̀kan ránṣẹ́ sí lab ní ọdún mélòó kan-mélòó kan, kí o sì lo kit tàbí mítà láti ṣàyẹ̀wò pH kíákíá láàárín àwọn àyẹ̀wò lab. Mú àpẹẹrẹ kọ̀ọ̀kan lọ́nà kan náà (ọ̀pọ̀ ìkọ́ ilẹ̀ kékeré, tí a dà pọ̀, láti ìjìnlẹ̀ kan náà, láìmú láti ojú ọ̀nà tàbí òkìtì ìgbẹ́ ẹran). Máàpù iSDAsoil ọ̀fẹ́ ń ṣe àfojúdíwọ̀n ìwà ilẹ̀ káàkiri Áfíríkà ní 30 m, wọ́n sì wúlò láti rí àwòrán gbogbogbò, ṣùgbọ́n àfojúdíwọ̀n láti inú àwòṣe kọ̀mpútà ni wọ́n, kì í ṣe àyẹ̀wò oko rẹ."
          ],
          steps: ["Pinnu: lab, kit tàbí sensọ̀, fún ìbéèrè kọ̀ọ̀kan tí o ní.", "Mú àpẹẹrẹ àdàlú kan láti agbègbè kọ̀ọ̀kan: ọ̀pọ̀ ìkọ́ ilẹ̀, ìjìnlẹ̀ kan náà, tí a dà pọ̀.", "Fi àwọn àpẹẹrẹ ránṣẹ́ sí lab tí a fọwọ́ sí ní ọdún mélòó kan-mélòó kan.", "Lo kit tàbí mítà fún àyẹ̀wò pH kíákíá láàárín wọn.", "Kọ èsì kọ̀ọ̀kan sí ẹ̀gbẹ́ agbègbè rẹ̀, pẹ̀lú ọ̀nà tí o lò."],
          words: [["Àpẹẹrẹ àdàlú (composite sample)", "ọ̀pọ̀ ìkọ́ ilẹ̀ kékeré láti agbègbè kan tí a dà pọ̀ di àpẹẹrẹ kan."], ["Ìtúnṣe ìwọ̀n (calibration)", "ṣíṣàyẹ̀wò àti títún sensọ̀ ṣe pẹ̀lú èsì lab tí a gbẹ́kẹ̀lé."], ["pH", "ìwọ̀n bí ilẹ̀ ṣe kan (acid) tàbí bí ó ṣe ní alkali tó."]],
          slides: [
            { title: "Ọ̀nà mẹ́ta láti ṣàyẹ̀wò", bullets: ["Lab: ó péye jù, ó lọ́ra, ó wọ́n jù", "Kit oko: kíákíá, lójú ẹsẹ̀", "Sensọ̀ ọwọ́: ìṣẹ́jú díẹ̀, sábà pẹ̀lú app"] },
            { title: "Bí a ṣe lè gbẹ́kẹ̀lé wọn tó", bullets: ["Kit: ó dára fún pH", "Kit: kò dúró sójú kan fún N, P àti K", "Sensọ̀ onípele gíga nílò ìtúnṣe ìwọ̀n"] },
            { title: "Ètò tí ó ṣeé ṣe", bullets: ["Àpẹẹrẹ lab kan fún agbègbè kọ̀ọ̀kan ní ọdún mélòó kan-mélòó kan", "Kit tàbí mítà fún àyẹ̀wò pH kíákíá", "Ọ̀nà kan náà fún mímú àpẹẹrẹ ní gbogbo ìgbà"] },
            { title: "Máàpù ilẹ̀ ọ̀fẹ́", bullets: ["iSDAsoil: àfojúdíwọ̀n ní 30 m", "Àwòrán gbogbogbò, kì í ṣe àyẹ̀wò oko rẹ"] }
          ],
          sources: [IFDC_KITS, EMBU, ISDA, KALRO],
          tryIt: "Fún agbègbè kọ̀ọ̀kan lórí àwòrán oko rẹ, kọ àyẹ̀wò tí o máa lò (lab, kit tàbí sensọ̀) àti ìdí rẹ̀. Mú àpẹẹrẹ àdàlú kan láti agbègbè kọ̀ọ̀kan, tàbí ṣètò láti mú un, kí o sì kọ bí o ṣe máa gbẹ́kẹ̀lé èsì kit tó fún pH àti fún nitrogen.",
          youCanNow: "yan ọ̀nà àyẹ̀wò ilẹ̀ fún agbègbè kọ̀ọ̀kan kí o sì dájọ́ bí o ṣe lè gbẹ́kẹ̀lé èsì rẹ̀ tó.",
          quickCheck: [
            { objective: "O4", q: "Èsì wo ni kit àyẹ̀wò ilẹ̀ tí a lè gbé kiri ti ṣeé gbẹ́kẹ̀lé jù, tí a bá fi wé lab?", options: ["Nitrogen", "Potassium", "pH ilẹ̀", "Phosphorus"], answer: 2, why: "Àwọn àyẹ̀wò òmìnira rí i pé pH bá a mu dáadáa, ṣùgbọ́n N, P àti K kò dúró sójú kan." },
            { objective: "O4", q: "Olùtajà kan sọ pé ọ̀pá ìwọ̀n olówó pọ́ọ́kú rẹ̀ ń ka NPK lójú ẹsẹ̀ pẹ̀lú ìpéye 95 nínú ọgọ́rùn-ún. Ó yẹ kí o:", options: ["Béèrè fún èsì àyẹ̀wò òmìnira kí o sì fi àwọn èsì díẹ̀ wé ti lab", "Rà á lẹ́sẹ̀kẹsẹ̀", "Lò ó dípò gbogbo àyẹ̀wò lab", "Gbà á gbọ́ nítorí pé ó ní app"], answer: 0, why: "Iye tí olùtajà fúnra rẹ̀ sọ kì í ṣe ẹ̀rí òmìnira; fi wé ti lab." }
          ]
        },
        {
          title: "Owó tí a ná àti èrè, àti ìgbà tí drone ń ràn lọ́wọ́",
          objectives: ["O5"],
          minutes: 5,
          goal: "Fi iye owó irinṣẹ́ tàbí ọ̀nà iṣẹ́ àgbẹ̀ ìpéye kan wé èrè tí o retí.",
          text: [
            "Irinṣẹ́ ìpéye kan wúlò nìkan tí èrè rẹ̀ bá ju owó rẹ̀ lọ. Lo ìṣirò ìnáwó apá kan tó rọrùn: kí ni owó àfikún tí màá rí tàbí tí màá fi pamọ́ (èso púpọ̀ sí i, ajílẹ̀ tàbí irúgbìn tí kò ṣòfò mọ́), kí sì ni owó àfikún tí ó máa ná mi (àyẹ̀wò, sensọ̀, app, àkókò rẹ, owó òṣìṣẹ́)? Àpẹẹrẹ lásán: tí pínpín sí agbègbè bá fi àpò ajílẹ̀ 2 pamọ́ lórí agbègbè aláìlágbára tí kò mówó wá rí (2 x GHS 400 = GHS 800 tí a fi pamọ́), tí àyẹ̀wò lab sì ná GHS 300, ó ń mówó wá.",
            "Lórí oko kékeré, bẹ̀rẹ̀ pẹ̀lú ohun tí ó jẹ́ ọ̀fẹ́ tàbí tí kò wọ́n: ojú rẹ, àkọsílẹ̀ rẹ, GPS fóònù àti máàpù sátẹ́láìtì ọ̀fẹ́. Lẹ́yìn náà, ná owó lórí àyẹ̀wò lab fún agbègbè kọ̀ọ̀kan. Ra sensọ̀ ọwọ́ nìkan tí o bá máa lò ó lọ́pọ̀ ìgbà tí o sì lè fi wé ti lab. Ẹgbẹ́ lè pín owó náà: ẹgbẹ́ alájùmọ̀ṣepọ̀ (cooperative) kan ní Côte d'Ivoire tàbí ẹgbẹ́ àgbẹ̀ kan ní Nigeria lè ra mítà kan tàbí san owó àyẹ̀wò lab papọ̀.",
            "Drone ń fúnni ní àwòrán tí ó ṣe kedere dé sẹ̀ńtímítà díẹ̀ dípò mítà 10, ó ń fò lábẹ́ ìkùukùu, ó sì lè fò ní ọjọ́ tí o nílò rẹ̀. Ó ń ràn lọ́wọ́ lórí ọ̀gbìn olówó gíga, oko tí ó tóbi, tàbí fún ẹgbẹ́ tí ó ń ra iṣẹ́ papọ̀. Ó wọ́n jù púpọ̀, fífò ó sì nílò ìwé àṣẹ láti ọ̀dọ̀ àjọ tó ń ṣàkóso ìrìnàjò òfurufú (civil aviation authority). Tí o bá rò pé o nílò ọ̀kan, ṣe àwọn ẹ̀kọ́ \"Drones for Agricultural Monitoring\" àti \"Drone fún Iṣẹ́ Àgbẹ̀: Ìtúpalẹ̀ Dátà àti Iṣẹ́ Àgbẹ̀ Ìpéye\"; ẹ̀kọ́ yìí kò tún wọn ṣe."
          ],
          steps: ["Kọ ohun tí irinṣẹ́ tàbí ọ̀nà iṣẹ́ náà ń ná: owó, àkókò, òṣìṣẹ́.", "Kọ owó àfikún tàbí owó tí o retí láti fi pamọ́, pẹ̀lú nọ́mbà àpẹẹrẹ.", "Fi wé ara wọn: èrè yọ owó tí a ná kúrò.", "Bẹ̀rẹ̀ pẹ̀lú irinṣẹ́ ọ̀fẹ́; lẹ́yìn náà àyẹ̀wò lab fún agbègbè kọ̀ọ̀kan; lẹ́yìn náà sensọ̀ tàbí iṣẹ́ drone nìkan tí ó bá ń mówó wá.", "Ronú nípa pínpín owó pẹ̀lú ẹgbẹ́ kan."],
          words: [["Ìṣirò ìnáwó apá kan (partial budget)", "ìṣirò tó rọrùn ti owó àfikún àti èrè àfikún tí ìyípadà kan ṣoṣo mú wá nìkan."], ["Iṣẹ́ drone", "iṣẹ́ òwò tí ó ń fi drone fò lórí oko rẹ fún owó kan."], ["Èrè padà (return)", "ohun tí o rí padà fún ohun tí o ná."]],
          slides: [
            { title: "Èrè gbọ́dọ̀ ju owó lọ", bullets: ["Owó àfikún tí o rí tàbí tí o fi pamọ́", "Yọ owó àfikún tí o ná kúrò", "Àpẹẹrẹ lásán: GHS 800 tí a fi pamọ́ sí àyẹ̀wò GHS 300"] },
            { title: "Ná owó ní ìtẹ̀léra yìí", bullets: ["Ọ̀fẹ́: ojú, àkọsílẹ̀, GPS, sátẹ́láìtì", "Àyẹ̀wò lab fún agbègbè kọ̀ọ̀kan", "Sensọ̀ nìkan tí o bá ń lò ó lọ́pọ̀ ìgbà tí o sì ń ṣàyẹ̀wò rẹ̀"] },
            { title: "Pín owó náà", bullets: ["Ẹgbẹ́ àti ẹgbẹ́ alájùmọ̀ṣepọ̀", "Mítà kan tàbí ọ̀pọ̀ àyẹ̀wò lab papọ̀"] },
            { title: "Ìgbà tí drone ń ràn lọ́wọ́", bullets: ["Àlàyé dé sẹ̀ńtímítà, lábẹ́ ìkùukùu", "Ọ̀gbìn olówó gíga, oko tó tóbi, iṣẹ́ ẹgbẹ́", "Wo àwọn ẹ̀kọ́ drone; ìwé àṣẹ pọn dandan"] }
          ],
          tryIt: "Yan irinṣẹ́ tàbí ọ̀nà iṣẹ́ àgbẹ̀ ìpéye kan fún oko rẹ (àyẹ̀wò lab fún agbègbè kọ̀ọ̀kan, mítà ilẹ̀, iṣẹ́ drone, tàbí ajílẹ̀ ní agbègbè-agbègbè). Kọ ìṣirò ìnáwó apá kan pẹ̀lú nọ́mbà àpẹẹrẹ ní owó agbègbè rẹ: owó àfikún, èrè àfikún, àti ìpinnu rẹ.",
          youCanNow: "pinnu bóyá irinṣẹ́ ìpéye kan tọ́ sí owó rẹ̀ fún oko rẹ pẹ̀lú ìṣirò ìnáwó apá kan tó rọrùn.",
          quickCheck: [
            { objective: "O5", q: "Lórí oko kékeré, kí ni ó yẹ kí o sábà kọ́kọ́ gbìyànjú?", options: ["Drone", "Ọ̀pọ̀ sensọ̀ tí a so pọ̀", "Ìforúkọsílẹ̀ app olówó ńlá", "Ojú rẹ, àkọsílẹ̀ rẹ, GPS fóònù àti máàpù sátẹ́láìtì ọ̀fẹ́"], answer: 3, why: "Bẹ̀rẹ̀ pẹ̀lú irinṣẹ́ ọ̀fẹ́, kí o sì ná owó nìkan níbi tí ó ti ń mówó wá." },
            { objective: "O5", q: "Mítà ilẹ̀ kan wọ́n ju ohun tí o máa fi pamọ́ ní àsìkò márùn-ún lọ. Kí ni ìpinnu tó bọ́gbọ́n mu?", options: ["Rà á bẹ́ẹ̀ náà", "Pín owó rẹ̀ nínú ẹgbẹ́ kan, tàbí lo àyẹ̀wò lab dípò rẹ̀", "Yá owó láti ra méjì", "Dẹ́kun lílo ajílẹ̀"], answer: 1, why: "Tí èrè kò bá ju owó lọ fún ìwọ nìkan, pín in tàbí yan ọ̀nà tí kò wọ́n." }
          ]
        },
        {
          title: "Ṣíṣe máàpù agbègbè oko àti ètò fún agbègbè kọ̀ọ̀kan",
          objectives: ["O6", "O5"],
          minutes: 6,
          goal: "Pín oko kan sí agbègbè 2 sí 4 kí o sì kọ ètò fún agbègbè kọ̀ọ̀kan.",
          text: [
            "Ní báyìí, kó àwọn ẹ̀rí náà jọ. Gbé àwọn àwòrán GPS rẹ lé àwòrán oko tí o fọwọ́ yà. Fún apá kọ̀ọ̀kan nínú oko, kọ ohun tí o mọ̀: NDVI ní ọjọ́ méjì, èsì àyẹ̀wò ilẹ̀ tàbí kit, èso tí ó ti mú wá tẹ́lẹ̀, ohun tí ìwọ àti àwọn òṣìṣẹ́ rí. Agbègbè kan nílò ó kéré tán ẹ̀rí oríṣi méjì tí ó bá ara wọn mu, fún àpẹẹrẹ NDVI kékeré àti èsì pH kékeré, tàbí apá olómi tí a ń rí ní gbogbo àsìkò àti èso tí kò dára tí a kọ sílẹ̀.",
            "Jẹ́ kí ó rọrùn: agbègbè 2 sí 4 ti tó lórí oko kékeré. Fún wọn ní orúkọ gẹ́gẹ́ bí ohun tí wọ́n jẹ́: \"Agbègbè A ilẹ̀ tó dára\", \"Agbègbè B ilẹ̀ tó kan, tí kò lágbára\", \"Agbègbè C tí omi kún\". Kọ ìwọ̀n ilẹ̀ agbègbè kọ̀ọ̀kan láti inú máàpù GPS rẹ.",
            "Lẹ́yìn náà, kọ ètò fún agbègbè kọ̀ọ̀kan: ohun tí o máa ṣe lọ́nà ọ̀tọ̀ (compost àti lime púpọ̀ sí i níbi tí pH ti kéré, gẹ́gẹ́ bí lab ṣe gbà ọ́ nímọ̀ràn; ọ̀nà omi tàbí ìrẹsì tàbí ẹ̀fọ́ ní agbègbè olómi; ajílẹ̀ díẹ̀ níbi tí ọ̀gbìn kì í ti mówó wá rí), iye tí ó máa ná gẹ́gẹ́ bí àpẹẹrẹ ní owó agbègbè rẹ, àti bí o ṣe máa ṣàyẹ̀wò rẹ̀: kọ èso agbègbè kọ̀ọ̀kan sílẹ̀ nígbà ìkórè, kí o sì fi NDVI wé ara wọn ní àsìkò tó ń bọ̀. Lo ajílẹ̀ àti oògùn kòkòrò tí a forúkọ wọn sílẹ̀ nìkan, gẹ́gẹ́ bí label ṣe sọ. Ètò ìpéye tọ̀nà nìkan tí àkọsílẹ̀ àsìkò tó ń bọ̀ bá fi hàn pé ó ṣiṣẹ́."
          ],
          steps: ["Kó àwọn àwòrán GPS, àkọsílẹ̀ NDVI, èsì ilẹ̀ àti èso jọ sórí máàpù kan.", "Ya agbègbè 2 sí 4 níbi tí ẹ̀rí oríṣi méjì ti bá ara wọn mu.", "Fún agbègbè kọ̀ọ̀kan ní orúkọ kí o sì kọ ìwọ̀n ilẹ̀ rẹ̀.", "Kọ ètò, iye owó àti àyẹ̀wò fún agbègbè kọ̀ọ̀kan.", "Kọ èso agbègbè kọ̀ọ̀kan sílẹ̀ nígbà ìkórè, kí o sì fi wé ti àsìkò tó ń bọ̀."],
          words: [["Máàpù agbègbè", "máàpù oko tí a pín sí àwọn agbègbè ìṣàkóso."], ["Ẹ̀rí", "òtítọ́ tí o lè tọ́ka sí, bí èsì àyẹ̀wò, àwòrán NDVI tàbí àkọsílẹ̀ èso."], ["Lime (ẹfun ilẹ̀)", "ohun tí a fi ń tọ́jú ilẹ̀ tí ó ń jẹ́ kí ilẹ̀ tó kan (acid) dín kíkan rẹ̀ kù."]],
          slides: [
            { title: "Kó àwọn ẹ̀rí jọ", bullets: ["Àwòrán GPS àti àwòrán oko tí o fọwọ́ yà", "NDVI ní ọjọ́ méjì, èsì ilẹ̀", "Èso àti ohun tí o rí"] },
            { title: "Ya agbègbè 2 sí 4", bullets: ["Ẹ̀rí oríṣi méjì gbọ́dọ̀ bá ara wọn mu", "Fún wọn ní orúkọ gẹ́gẹ́ bí ohun tí wọ́n jẹ́", "Kọ ìwọ̀n ilẹ̀ ọ̀kọ̀ọ̀kan"] },
            { title: "Ètò fún agbègbè kọ̀ọ̀kan", bullets: ["Ohun tí ó yí padà", "Iye owó àpẹẹrẹ", "Bí o ṣe máa ṣàyẹ̀wò rẹ̀"] },
            { title: "Ṣàyẹ̀wò ní àsìkò tó ń bọ̀", bullets: ["Èso agbègbè kọ̀ọ̀kan nígbà ìkórè", "Fi NDVI wé ara wọn", "Ohun èlò tí a forúkọ wọn sílẹ̀, gẹ́gẹ́ bí label ṣe sọ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe máàpù agbègbè oko rẹ pẹ̀lú agbègbè 2 sí 4, kí ọ̀kọ̀ọ̀kan ní ìwọ̀n ilẹ̀ rẹ̀ àti ó kéré tán ẹ̀rí oríṣi méjì. Kọ ètò fún agbègbè kọ̀ọ̀kan: ìyípadà náà, iye owó àpẹẹrẹ ní owó agbègbè rẹ, àti bí o ṣe máa ṣàyẹ̀wò ní àsìkò tó ń bọ̀ bóyá ó ṣiṣẹ́.",
          youCanNow: "ṣe máàpù agbègbè oko láti inú ẹ̀rí oríṣiríṣi, kí o sì kọ ètò tí a lè ṣàyẹ̀wò fún agbègbè kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O6", q: "Èwo ni ẹ̀rí tí ó tó láti ya agbègbè kan?", options: ["NDVI kékeré ní ọjọ́ kan tí ìkùukùu bò", "Àfojúdá aládùúgbò kan", "NDVI kékeré ní ọjọ́ méjì àti èsì àyẹ̀wò ilẹ̀ tí pH rẹ̀ kéré", "Ìpolówó kan"], answer: 2, why: "Ẹ̀rí oríṣi méjì tí ó bá ara wọn mu ló ń jẹ́ kí agbègbè ṣeé gbẹ́kẹ̀lé." },
            { objective: "O6", q: "Báwo ni o ṣe máa mọ̀ pé ètò agbègbè kan ṣiṣẹ́?", options: ["Kọ èso agbègbè kọ̀ọ̀kan sílẹ̀ nígbà ìkórè kí o sì fi wé ti àsìkò tó ń bọ̀", "Ka á sí pé ó ṣiṣẹ́", "Béèrè lọ́wọ́ olùtajà ohun èlò", "Tún wo ètò náà"], answer: 0, why: "Àkọsílẹ̀ agbègbè-agbègbè nìkan ló ń fi hàn bóyá ìyípadà náà mówó wá." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Wíwọn ilẹ̀ àti ṣíṣètò ní agbègbè-agbègbè",
        questions: [
          { objective: "O4", q: "Kí ni àpẹẹrẹ ilẹ̀ àdàlú?", options: ["Ṣọ́bìrì ilẹ̀ kan láti àárín oko", "Ọ̀pọ̀ ìkọ́ ilẹ̀ kékeré láti agbègbè kan tí a dà pọ̀", "Ilẹ̀ láti òkìtì ìgbẹ́ ẹran", "Àpẹẹrẹ láti ojú ọ̀nà"], answer: 1, why: "Dída ọ̀pọ̀ ìkọ́ ilẹ̀ pọ̀ ń fúnni ní àwòrán tí ó tọ́ nípa agbègbè náà." },
          { objective: "O4", q: "Ọ̀nà tó dára jù láti lo máàpù iSDAsoil ọ̀fẹ́ ni láti:", options: ["Fi wọ́n rọ́pò gbogbo àyẹ̀wò ilẹ̀", "Pinnu ìwọ̀n oògùn kòkòrò", "Rí àwòrán gbogbogbò ilẹ̀ kí o tó ṣàyẹ̀wò oko rẹ", "Wọn omi inú ilẹ̀ ti òní"], answer: 2, why: "Àfojúdíwọ̀n àwòṣe kọ̀mpútà ni wọ́n, kì í ṣe àyẹ̀wò oko rẹ." },
          { objective: "O5", q: "Ìṣirò ìnáwó apá kan ń fi wé ara wọn:", options: ["Owó àfikún àti èrè àfikún ìyípadà kan", "Gbogbo owó oko fún ọdún mẹ́wàá", "Iye owó ọ̀gbìn nìkan", "Owó tí ó wà nínú báńkì rẹ"], answer: 0, why: "Ohun tí ó yí padà nìkan ló ń wò." },
          { objective: "O5", q: "Ìgbà wo ni iṣẹ́ drone lè bọ́gbọ́n mu?", options: ["Nígbà gbogbo, lórí gbogbo oko", "Láéláé ní Áfíríkà", "Láìní ìwé àṣẹ nìkan", "Lórí ọ̀gbìn olówó gíga tàbí oko tó tóbi, tàbí tí ẹgbẹ́ kan pín in, tí ó bá ń mówó wá"], answer: 3, why: "Drone wọ́n jù; ó ń ràn lọ́wọ́ níbi tí iye owó ọ̀gbìn ti ga tàbí tí a pín owó rẹ̀." },
          { objective: "O6", q: "Agbègbè mélòó ni ẹ̀kọ́ yìí dámọ̀ràn fún oko kékeré?", options: ["2 sí 4", "20 sí 40", "Ọ̀kan", "Ọ̀kan fún ọ̀gbìn kọ̀ọ̀kan"], answer: 0, why: "Agbègbè díẹ̀ ti tó láti ṣàkóso àti láti ṣàyẹ̀wò pẹ̀lú ọwọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Iṣẹ́ Àgbẹ̀ Ìpéye: Ìmójútó pẹ̀lú Sátẹ́láìtì àti Sensọ̀ Ilẹ̀",
    questions: [
      { objective: "O1", q: "Iṣẹ́ àgbẹ̀ ìpéye lórí oko kékeré túmọ̀ sí:", options: ["Rírà tírákítọ̀ tí ó ní sensọ̀", "Ṣíṣàkóso àwọn apá oko lọ́nà ọ̀tọ̀ọ̀tọ̀", "Lílo ìwọ̀n ajílẹ̀ kan náà níbi gbogbo", "Ṣíṣe iṣẹ́ àgbẹ̀ láìsí àkọsílẹ̀"], answer: 1, why: "Apá kọ̀ọ̀kan ń rí ohun tí ó nílò gbà." },
      { objective: "O1", q: "Èwo ni ìyàtọ̀ nínú oko tí o lè ṣe nǹkan nípa rẹ̀?", options: ["Àwọ̀ fóònù rẹ", "Iye owó ọjà", "Apá olómi ní ìsàlẹ̀ oko", "Ọ̀gbìn aládùúgbò rẹ"], answer: 2, why: "A lè la ọ̀nà omi fún apá olómi tàbí gbin nǹkan ọ̀tọ̀ síbẹ̀." },
      { objective: "O1", q: "Kí ló ṣáájú nínú iṣẹ́ àgbẹ̀ ìpéye lórí oko kékeré?", options: ["Rírìn oko náà àti kíkọ àwọn ìyàtọ̀ sílẹ̀", "Rírà sensọ̀", "Gbígba drone", "Yíyí gbogbo ohun èlò padà"], answer: 0, why: "Wíwò jẹ́ ọ̀fẹ́, ó sì ń tọ́ ohun gbogbo tó kù sọ́nà." },
      { objective: "O2", q: "Kí ni Sentinel-2 ń pèsè lọ́fẹ̀ẹ́?", options: ["Àwòrán tí ó ṣe kedere dé sẹ̀ńtímítà 1", "Àsọtẹ́lẹ̀ ojú ọjọ́", "Àyẹ̀wò ilẹ̀", "Àwòrán ní nǹkan bí ọjọ́ 5-5 pẹ̀lú píksẹ́lì 10 m"], answer: 3, why: "Dátà Sentinel-2 jẹ́ ọ̀fẹ́ àti ṣíṣí ní 10 m." },
      { objective: "O2", q: "NDVI gíga sábà máa ń túmọ̀ sí:", options: ["Ilẹ̀ òfìfo", "Ewéko tí ó pọ̀, tí ó tutù yọ̀yọ̀", "Omi tí ó dúró", "Ìkùukùu"], answer: 1, why: "Ewé tí ó ní ìlera ń tàn ìmọ́lẹ̀ padà lọ́nà tí ó ń fúnni ní NDVI gíga." },
      { objective: "O2", q: "Kí ló dé tí a fi ń fi NDVI ní ọjọ́ méjì wé ara wọn?", options: ["Láti rí àwọn apá tí kò lágbára síbẹ̀ nígbà tí àwọn míì ń dàgbà", "Nítorí pé àwòrán kan máa ń ṣàṣìṣe nígbà gbogbo", "Láti mú kí máàpù ní àwọ̀ púpọ̀", "Láti ka iye ọ̀gbìn"], answer: 0, why: "Apá tí NDVI rẹ̀ ń wà nísàlẹ̀ ní ọjọ́ méjèèjì ni ó yẹ kí o lọ rìn wò." },
      { objective: "O2", q: "Ní àsìkò òjò, o lè má rí àwòrán sátẹ́láìtì tó mọ́ nítorí pé:", options: ["Àwọn sátẹ́láìtì dúró", "NDVI ń ṣiṣẹ́ ní ẹ̀ẹ̀rùn nìkan", "Ìkùukùu ń bo ilẹ̀", "Ọ̀gbìn ti ga jù"], answer: 2, why: "Sentinel-2 kò lè ríran kọjá ìkùukùu." },
      { objective: "O3", q: "Hẹ́kítà kan jẹ́:", options: ["10 m x 10 m", "1 km x 1 km", "Ìdajì éékà", "100 m x 100 m, nǹkan bí éékà 2.5"], answer: 3, why: "Hẹ́kítà kan = mítà onígun mẹ́rin 10,000." },
      { objective: "O3", q: "Báwo ni o ṣe lè rí ìwọ̀n ilẹ̀ GPS tó dára jù?", options: ["Sá yí oko ká kíákíá", "Rìn díẹ̀díẹ̀ lábẹ́ òfurufú tó ṣí sílẹ̀, dúró ní àwọn igun, kí o sì rìn ín lẹ́ẹ̀mejì", "Fi fóònù sínú àpò rẹ", "Dúró lábẹ́ igi"], answer: 1, why: "Rírìn díẹ̀díẹ̀, dídúró àti òfurufú tó ṣí sílẹ̀ ń mú kí ó péye sí i." },
      { objective: "O3", q: "Kí ló dé tí a fi ń ya máàpù agbègbè kọ̀ọ̀kan bí àwòrán ọ̀tọ̀ tí ó ní orúkọ?", options: ["Kí o lè mọ ìwọ̀n ilẹ̀ agbègbè kọ̀ọ̀kan fún ètò àti àkọsílẹ̀", "Nítorí pé GPS ń béèrè fún un", "Láti pín in lórí ìkànnì àjọlò", "Kò wúlò"], answer: 0, why: "Ìwọ̀n ilẹ̀ agbègbè kọ̀ọ̀kan ló ń darí ohun èlò àti èso rẹ̀ fún éékà kọ̀ọ̀kan." },
      { objective: "O4", q: "Ọ̀nà àyẹ̀wò ilẹ̀ wo ló péye jù?", options: ["Ọ̀pá ìwọ̀n olówó pọ́ọ́kú", "Ṣíṣe àfojúdá nípa àwọ̀", "Àyẹ̀wò ilé-ìwádìí (lab) tí a fọwọ́ sí", "Fọ́tò WhatsApp"], answer: 2, why: "Lab ni òṣùwọ̀n tí a fi ń ṣàyẹ̀wò kit àti sensọ̀." },
      { objective: "O4", q: "Kit tí a lè gbé kiri fúnni ní èsì tí kò dúró sójú kan fún:", options: ["Àwọ̀ ilẹ̀", "Nitrogen, phosphorus àti potassium", "Ìwọ̀n oko", "Òjò"], answer: 1, why: "Àwọn àyẹ̀wò òmìnira rí i pé pH dára, ṣùgbọ́n N, P àti K kò dúró sójú kan." },
      { objective: "O4", q: "Láti gbẹ́kẹ̀lé sensọ̀ ọwọ́ sí i, ó yẹ kí o:", options: ["Lò ó ní òru nìkan", "Má ṣe fi wé ohunkóhun láéláé", "Ra òmíràn", "Fi díẹ̀ lára èsì rẹ̀ wé èsì lab"], answer: 3, why: "Ìtúnṣe ìwọ̀n pẹ̀lú lab ń fi hàn bí o ṣe lè gbẹ́kẹ̀lé e tó." },
      { objective: "O5", q: "Àpẹẹrẹ lásán: pínpín sí agbègbè fi ajílẹ̀ GHS 800 pamọ́, àyẹ̀wò lab sì ná GHS 300. Èsì rẹ̀ ni:", options: ["Àdánù GHS 500", "Kò sí ìyípadà", "Èrè GHS 500", "Èrè GHS 1,100"], answer: 2, why: "800 tí a fi pamọ́ yọ 300 tí a ná kúrò = 500 èrè." },
      { objective: "O5", q: "Ẹgbẹ́ àgbẹ̀ lè dín owó irinṣẹ́ ìpéye kù nípa:", options: ["Pínpín mítà kan tàbí sísan owó àyẹ̀wò lab papọ̀", "Kí ẹnì kọ̀ọ̀kan ra drone", "Fífi gbogbo àyẹ̀wò sílẹ̀", "Lílo ajílẹ̀ tí a kò forúkọ rẹ̀ sílẹ̀"], answer: 0, why: "Pínpín ń tan owó náà ká sórí ọ̀pọ̀ oko." },
      { objective: "O5", q: "Láti kọ́ bí a ṣe ń fi drone ya máàpù, ó yẹ kí o:", options: ["Fò ó láìní ìwé àṣẹ", "Ṣe àwọn ẹ̀kọ́ drone tí ó wà, kí o sì tẹ̀lé òfin ìrìnàjò òfurufú", "Lo ẹ̀kọ́ yìí nìkan", "Dà fídíò kan kọ láti orí íńtánẹ́ẹ̀tì"], answer: 1, why: "Àwọn ẹ̀kọ́ drone ń kọ́ni nípa rẹ̀; ìwé àṣẹ pọn dandan." },
      { objective: "O6", q: "Agbègbè kan gbọ́dọ̀ dá lórí:", options: ["Àwòrán kan tí ìkùukùu bò", "Ìmọ̀ràn olùtajà", "Bí inú rẹ ṣe rí", "Ó kéré tán ẹ̀rí oríṣi méjì tí ó bá ara wọn mu"], answer: 3, why: "Orísun méjì tí ó bá ara wọn mu ló ń jẹ́ kí agbègbè ṣeé gbẹ́kẹ̀lé." },
      { objective: "O6", q: "Èwo ni ètò tó dára fún agbègbè tí omi kún?", options: ["Fi ajílẹ̀ púpọ̀ sí i kí o sì retí", "Fi sílẹ̀ bẹ́ẹ̀", "Gbẹ́ ọ̀nà omi tàbí gbin ọ̀gbìn tí ó lè fara da ilẹ̀ olómi, kí o sì kọ èsì rẹ̀ sílẹ̀", "Gbin ohun kan náà tí o gbìn sórí òkè tó gbẹ"], answer: 2, why: "Ètò náà bá ohun tó fà á mu, a sì ń fi àkọsílẹ̀ ṣàyẹ̀wò rẹ̀." },
      { objective: "O6", q: "Ètò agbègbè kọ̀ọ̀kan gbọ́dọ̀ ní:", options: ["Ohun tí ó yí padà, iye owó àpẹẹrẹ rẹ̀ àti bí o ṣe máa ṣàyẹ̀wò rẹ̀", "Àwọ̀ agbègbè náà nìkan", "Iye owó ọ̀gbìn nìkan", "Kò sí nǹkan kan; máàpù nìkan ni agbègbè wà fún"], answer: 0, why: "Ètò tí o kò lè ṣírò owó rẹ̀ tàbí ṣàyẹ̀wò rẹ̀ kì í ṣe ètò." },
      { objective: "O6", q: "Ajílẹ̀ àti oògùn kòkòrò nínú ètò agbègbè gbọ́dọ̀ jẹ́:", options: ["Èyí tí ó rẹ̀ jù tí o rí", "Ọjà tí a forúkọ rẹ̀ sílẹ̀, tí a lò gẹ́gẹ́ bí label ṣe sọ", "Èyí tí a dà pọ̀ láìmọ ìwọ̀n", "Ìlọ́po méjì ní agbègbè tí kò lágbára"], answer: 1, why: "Ọjà tí a forúkọ rẹ̀ sílẹ̀ nìkan, tí a lò gẹ́gẹ́ bí label ṣe sọ, ló láìléwu tí ó sì bófin mu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 6, 7, 10, 11, 13, 16, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "A ya máàpù oko àti agbègbè", objective: "O3", notYet: "Kò sí ààlà, tàbí a fojú díwọ̀n ìwọ̀n ilẹ̀.", meets: "A fi GPS rìn ààlà, agbègbè kọ̀ọ̀kan sì ní àwòrán tí ó ní orúkọ àti ìwọ̀n ilẹ̀.", exceeds: "A rìn ààlà lẹ́ẹ̀mejì, ìwọ̀n ilẹ̀ méjèèjì sì fẹ́rẹ̀ẹ́ bá ara wọn mu." },
      { name: "A lo ẹ̀rí sátẹ́láìtì pẹ̀lú ìṣọ́ra", objective: "O2", notYet: "Kò sí ìwo sátẹ́láìtì, tàbí a ka NDVI sí ohun tó fà á.", meets: "A fi NDVI ní ọjọ́ méjì wé ara wọn, a sì rìn àwọn apá tí NDVI wọn kéré wò láti wá ohun tó fà á.", exceeds: "Ó kọ ohun tí máàpù náà kò lè fi hàn (ìkùukùu, oko kékeré, èpò) fún oko yìí." },
      { name: "Ẹ̀rí ilẹ̀", objective: "O4", notYet: "Kò sí ìsọfúnni nípa ilẹ̀, tàbí a ka èsì NPK kit sí èyí tí ó péye pátápátá.", meets: "A yan ọ̀nà àyẹ̀wò fún agbègbè kọ̀ọ̀kan pẹ̀lú bí a ṣe lè gbẹ́kẹ̀lé e tó.", exceeds: "Ó kéré tán èsì lab kan fún agbègbè kọ̀ọ̀kan, tàbí a fi èsì kit wé ti lab." },
      { name: "Agbègbè àti ètò", objective: "O6", notYet: "A ya agbègbè láti orísun kan ṣoṣo, tàbí kò sí ètò fún agbègbè kọ̀ọ̀kan.", meets: "Agbègbè 2 sí 4, ọ̀kọ̀ọ̀kan pẹ̀lú ẹ̀rí oríṣi méjì àti ètò, iye owó àti àyẹ̀wò.", exceeds: "Ètò kọ̀ọ̀kan dárúkọ àkọsílẹ̀ tí ó máa fi hàn bóyá ó ṣiṣẹ́ ní àsìkò tó ń bọ̀." },
      { name: "Ó tọ́ sí owó rẹ̀", objective: "O5", notYet: "A yan irinṣẹ́ láìṣírò owó.", meets: "Ìṣirò ìnáwó apá kan pẹ̀lú nọ́mbà àpẹẹrẹ ní owó agbègbè ń ti ètò náà lẹ́yìn.", exceeds: "Ó ronú nípa pínpín owó pẹ̀lú ẹgbẹ́, tàbí ọ̀nà tí kò wọ́n tí ó ń fúnni ní ìdáhùn kan náà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n lo ó kéré tán ètò agbègbè kan ní àsìkò tó tẹ̀lé e (ìwádìí àtẹ̀lé lẹ́yìn ọjọ́ 30 àti ní ìparí àsìkò)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n kọ èso agbègbè kọ̀ọ̀kan sílẹ̀ nígbà ìkórè",
      "Ohun èlò tí a ròyìn pé a fi pamọ́ tàbí ìyípadà èso ní agbègbè-agbègbè lẹ́yìn àsìkò kan",
      "Àwọn ẹgbẹ́ àgbẹ̀ tí wọ́n pín àyẹ̀wò ilẹ̀ tàbí irinṣẹ́ lẹ́yìn ẹ̀kọ́ náà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tí ó ní app GPS ìwọ̀n ilẹ̀ tàbí app máàpù ọ̀fẹ́",
      "Íńtánẹ́ẹ̀tì láti lo Copernicus Browser (kọ̀mpútà tàbí browser fóònù)",
      "Oko kan láti rìn, ìwé, gègé àti àwòrán oko tí a fọwọ́ yà",
      "Ohun èlò ìkọ́ ilẹ̀ (auger) tàbí ṣọ́bìrì àti bọ́kẹ́ẹ̀tì mímọ́ fún àpẹẹrẹ àdàlú; lab tàbí kit tí ó bá wà",
      "Nǹkan bí ìṣẹ́jú 90 lápapọ̀, pẹ̀lú àkókò nínú oko"
    ],
    facilitatorNotes: [
      "Ẹ ṣe Ẹ̀kọ́ 1 àti 3 nínú oko: ẹ rìn ààlà àti àwọn agbègbè papọ̀, kí ẹ sì fi ìwọ̀n ilẹ̀ GPS àwọn fóònù wé ara wọn.",
      "Ṣètò àwòrán Copernicus Browser tó mọ́ ti oko kan ní agbègbè yín ṣáájú; ìkùukùu àsìkò òjò lè dí ìfihàn ní tààràtà lọ́wọ́.",
      "Má ṣe ta sensọ̀ ilẹ̀ tàbí app kankan, má sì gbé e lárugẹ; tí olùtajà kan bá wá, béèrè fún èsì àyẹ̀wò òmìnira.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé NDVI ń fi ibo hàn, kì í ṣe ìdí, àti pé èsì NPK kit nílò àyẹ̀wò lab.",
      "Darí ìbéèrè nípa drone sí àwọn ẹ̀kọ́ drone; ẹ̀kọ́ yìí kò kọ́ni nípa fífò.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
