"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-data-technology.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KMD = { name: "Kenya Meteorological Department (àsọtẹ́lẹ̀ ojú-ọjọ́ àti ìwé ìròyìn ojú-ọjọ́ fún àgbẹ̀)", url: "https://meteo.go.ke" };
const NIMET = { name: "Nigerian Meteorological Agency (NiMet)", url: "https://nimet.gov.ng" };
const COPERNICUS = { name: "Copernicus Browser (àwòrán satẹ́láìtì Sentinel ọ̀fẹ́)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_EO = { name: "FAO GIEWS Earth Observation (máàpù òjò, NDVI àti ìnira oko)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO)", url: "https://www.kalro.org" };
const KOBO = { name: "KoboToolbox (fọ́ọ̀mù ọ̀fẹ́ fún gbígba ìsọfúnni)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Office of the Data Protection Commissioner (Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-data-technology-yo",
  lang: "yo",
  translationOf: "agri-data-technology",
  category: "Agriculture (Africa)",
  name: "Ìsọfúnni àti Ẹ̀rọ Ìgbàlódé fún Iṣẹ́ Àgbẹ̀",
  skills: "Wíwá àti ṣíṣàyẹ̀wò ìmọ̀ràn oko tí a lè gbẹ́kẹ̀ lé, Gbígba ìsọfúnni oko sórí fóònù, Lílo ìsọfúnni ojú-ọjọ́ àti satẹ́láìtì ọ̀fẹ́, Ṣíṣe ìtúpalẹ̀ àkọsílẹ̀ oko nínú spreadsheet, Lílo olùrànlọ́wọ́ AI fún ìbéèrè oko lọ́nà tó tọ́, Dídáàbò bo ìsọfúnni oko rẹ",
  outcome: "lo smartphone olówó pọ́ọ́kú láti kọ ìsọfúnni oko rẹ sílẹ̀, fi ìsọfúnni ojú-ọjọ́ àti satẹ́láìtì ọ̀fẹ́ kún un, ṣe ìtúpalẹ̀ rẹ̀ nínú spreadsheet láti ṣe ìpinnu oko tó dára jù, ṣàyẹ̀wò ìmọ̀ràn láti inú app àti AI pẹ̀lú orísun tí a gbẹ́kẹ̀ lé, kí o sì pa ìsọfúnni rẹ mọ́ láìléwu.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀, àwọn ọ̀dọ́ oníṣòwò oko, àwọn olórí ẹgbẹ́ àgbẹ̀ àti àjọ àjùmọ̀ṣe (cooperative), àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nigeria àti káàkiri Áfíríkà tí wọ́n ní smartphone (kódà olówó pọ́ọ́kú), tí wọ́n sì fẹ́ fi ṣe iṣẹ́ oko dáadáa sí i. O kò nílò kọ̀mpútà, ṣùgbọ́n ó máa ràn ọ́ lọ́wọ́ ní Orí 2.",
    "Orí 1 ń sọ nípa gbígba ìsọfúnni: wíwá ìmọ̀ràn oko tí a lè gbẹ́kẹ̀ lé àti yíyẹra fún jìbìtì, kíkọ ìsọfúnni oko rẹ fúnra rẹ sórí fóònù, àti lílo àsọtẹ́lẹ̀ ojú-ọjọ́ àti máàpù satẹ́láìtì ọ̀fẹ́. Orí 2 ń sọ nípa lílo ìsọfúnni: ṣíṣe ìtúpalẹ̀ àkọsílẹ̀ rẹ nínú spreadsheet ọ̀fẹ́, bíbéèrè ìbéèrè oko tó dára lọ́wọ́ olùrànlọ́wọ́ AI àti ṣíṣàyẹ̀wò ìdáhùn wọn, àti dídáàbò bo ìsọfúnni rẹ.",
    "Irinṣẹ́ ọ̀fẹ́ la ń lò jákèjádò: Google Sheets tàbí ẹ̀dà wẹ́ẹ̀bù ọ̀fẹ́ ti Microsoft Excel, irinṣẹ́ fọ́ọ̀mù ọ̀fẹ́, iléeṣẹ́ ojú-ọjọ́ orílẹ̀-èdè, máàpù satẹ́láìtì FAO, àti olùrànlọ́wọ́ AI ọ̀fẹ́. Ẹ̀kọ́ kọ̀ọ̀kan parí pẹ̀lú iṣẹ́ kan. Ìdánwò ìmọ̀ kan wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣètò ìwé ìsọfúnni oko fún àsìkò oko kan (àwọn ilẹ̀ oko, ohun ọ̀gbìn, irú èso, ọjọ́ gbígbìn, ohun èlò oko àti owó, àkọsílẹ̀ òjò tàbí àsọtẹ́lẹ̀, àkọsílẹ̀ àbẹ̀wò oko, ìkórè àti títà), fi ìsọfúnni gidi tàbí àpẹẹrẹ kún un fún ó kéré tán ilẹ̀ oko mẹ́ta, ṣe chart kan tí ó fi àwọn ilẹ̀ oko wé ara wọn, kọ ìpinnu kan tí o máa ṣe ní àsìkò tó ń bọ̀ nítorí rẹ̀, kí o sì kọ àwọn orísun tí o ṣàyẹ̀wò àti bí o ṣe ń pa ìsọfúnni náà mọ́ láìléwu.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀, àwọn ọ̀dọ́ oníṣòwò oko, àwọn olórí ẹgbẹ́ àgbẹ̀ àti àjọ àjùmọ̀ṣe, àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nigeria àti káàkiri Áfíríkà tí wọ́n ní smartphone, kódà olówó pọ́ọ́kú, tí wọ́n sì fẹ́ fi ṣe iṣẹ́ oko dáadáa sí i.",
    startingPoint: "Ọ̀pọ̀ ń lo fóònù fún ìpè, owó orí fóònù (mobile money), WhatsApp àti Facebook, wọ́n sì ń gba ìmọ̀ràn oko lọ́wọ́ aládùúgbò, ilé ìtajà ohun èlò oko (agrovet), rédíò àti ẹgbẹ́ orí ẹ̀rọ ayélujára. Díẹ̀ ló ń kọ àkọsílẹ̀ oko, ń lo spreadsheet, ń ka àsọtẹ́lẹ̀ ìjọba tàbí máàpù satẹ́láìtì, tàbí ń ṣàyẹ̀wò ìmọ̀ràn AI àti app pẹ̀lú orísun tí a gbẹ́kẹ̀ lé.",
    gap: "Láìsí àkọsílẹ̀ tiwọn, àwọn àgbẹ̀ kò lè rí ilẹ̀ oko, irú èso tàbí ọ̀nà iṣẹ́ tí ó ń mówó wá gan-an, ìmọ̀ràn tí kò tọ́, ohun èlò oko ayédèrú àti jìbìtì ìsọfúnni sì ń ná wọn lówó. Kíkọ, ṣíṣe ìtúpalẹ̀ àti ṣíṣàyẹ̀wò ìsọfúnni lórí fóònù tí wọ́n ti ní ń ràn wọ́n lọ́wọ́ láti ṣe ìpinnu tó dára jù, fi iṣẹ́ wọn hàn àwọn ayánilówó àti olùrà, kí wọ́n sì pa ìsọfúnni wọn mọ́ láìléwu.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ ẹ̀rọ ìgbàlódé",
      "Ẹ̀rọ: smartphone olówó pọ́ọ́kú tí data rẹ̀ kò pọ̀; kọ̀mpútà ń ràn lọ́wọ́ ní Orí 2 nìkan",
      "Nẹ́tíwọ́ọ̀kì: kò dúró dáadáa ní ìgbèríko, nítorí náà fọ́ọ̀mù tí ó ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì àti ìwé tí a fi pamọ́ ṣe pàtàkì",
      "Àkókò: ẹ̀kọ́ kúkúrú tí ó bá iṣẹ́ oko mu",
      "Ìkọ̀kọ̀ àti jìbìtì: má ṣe tẹ PIN, nọ́mbà ìdánimọ̀ tàbí ìsọfúnni báńkì sínú app, spreadsheet tàbí irinṣẹ́ AI láéláé"
    ],
    prerequisites: "Kò sí. Àwọn tí wọ́n ṣẹ̀ṣẹ̀ ń lo smartphone gbọ́dọ̀ kọ́kọ́ mọ bí a ṣe ń ṣí app àti bí a ṣe ń tẹ ọ̀rọ̀."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá gba ìmọ̀ràn oko kan láti inú ọ̀rọ̀ ìránṣẹ́, app tàbí lọ́dọ̀ aládùúgbò", action: "ṣàyẹ̀wò ẹni tí ó sọ ọ́, bóyá ó bá agbègbè àti ohun ọ̀gbìn rẹ mu, bóyá ó jẹ́ tuntun àti bóyá wọ́n ń ta nǹkan", standard: "kí o tó ná owó, kí o sì dá àmì jìbìtì èyíkéyìí mọ̀" },
    { id: "O2", condition: "Pẹ̀lú app spreadsheet tàbí fọ́ọ̀mù ọ̀fẹ́ lórí fóònù rẹ", action: "ṣètò ìwé ìsọfúnni oko tí ó ní ìlà kan fún ìṣẹ̀lẹ̀ kọ̀ọ̀kan àti orúkọ kan tí kì í yí padà fún ilẹ̀ oko kọ̀ọ̀kan", standard: "tí ó ní ó kéré tán ọ̀wọ̀n ọjọ́, ilẹ̀ oko, iṣẹ́, iye àti owó" },
    { id: "O3", condition: "Fún agbègbè àti àsìkò oko rẹ", action: "wá àsọtẹ́lẹ̀ ojú-ọjọ́ ìjọba àti máàpù satẹ́láìtì tàbí òjò ọ̀fẹ́, kí o sì kọ ohun tí wọ́n fi hàn sínú ìwé oko rẹ", standard: "pẹ̀lú orísun àti ọjọ́" },
    { id: "O4", condition: "Tí o bá ní àkọsílẹ̀ fún ó kéré tán ilẹ̀ oko mẹ́ta", action: "ṣírò èso àti èrè fún éékà kọ̀ọ̀kan pẹ̀lú àgbékalẹ̀ (formula), ṣe bar chart kí o sì kọ ìpinnu kan fún àsìkò tó ń bọ̀", standard: "pẹ̀lú ìṣirò tó tọ́ àti ìpinnu tí ó tan mọ́ àwọn nọ́mbà" },
    { id: "O5", condition: "Pẹ̀lú olùrànlọ́wọ́ AI ọ̀fẹ́", action: "kọ ìbéèrè oko tó yé, kí o sì ṣàyẹ̀wò ìdáhùn pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà, agrovet tàbí àkọlé ọjà", standard: "kí o tó ṣe nǹkan kan, láìtẹ ìsọfúnni àdáni kankan" },
    { id: "O6", condition: "Nígbà tí app, olùrà tàbí ẹgbẹ́ kan bá béèrè ìsọfúnni oko", action: "pinnu ohun tí o máa pín, ẹni tí o máa pín in fún àti ìdí rẹ̀, kí o sì dáàbò bo ìyókù", standard: "ní títẹ̀lé ẹ̀tọ́ ìdáàbòbò ìsọfúnni ní orílẹ̀-èdè rẹ, kí o sì gba àṣẹ lọ́wọ́ àwọn ẹlòmíì" }
  ],
  chapters: [
    {
      name: "Orí 1: Gbígba ìsọfúnni tó dára",
      lessons: [
        {
          objectives: ["O1"],
          title: "Wíwá ìmọ̀ràn oko tí a lè gbẹ́kẹ̀ lé",
          minutes: 5,
          goal: "Mọ̀ bóyá ìmọ̀ràn oko kan ṣeé gbẹ́kẹ̀ lé kí o tó ṣe ohun tí ó sọ.",
          text: [
            "Àwọn àgbẹ̀ ń gba ìmọ̀ràn láti ibi púpọ̀: òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, iléeṣẹ́ ìwádìí bí KALRO ní Kenya, ètò ìdàgbàsókè iṣẹ́ àgbẹ̀ ní àwọn ìpínlẹ̀ Nigeria, FAO àti àwọn ibùdó CGIAR, agrovet, ètò rédíò àti tẹlifíṣọ̀n, iṣẹ́ SMS àti app, ẹgbẹ́ WhatsApp àti Facebook, àti àwọn aládùúgbò. Àwọn kan dára gan-an; àwọn kan kò tọ́, wọ́n ti di àtijọ́, tàbí wọ́n ń gbìyànjú láti ta nǹkan fún ọ.",
            "Béèrè ìbéèrè mẹ́rin nípa ìmọ̀ràn èyíkéyìí: Ta ló sọ ọ́, ṣé ó sì mọ̀ (iléeṣẹ́ ìwádìí tàbí òṣìṣẹ́ tí a kọ́, tàbí àkáǹtì tí a kò mọ̀)? Ṣé ó wà fún agbègbè àti ohun ọ̀gbìn mi? Ṣé ó jẹ́ tuntun? Ṣé wọ́n ń ta nǹkan? Ṣàyẹ̀wò ìmọ̀ràn pàtàkì pẹ̀lú orísun kejì tí a gbẹ́kẹ̀ lé kí o tó ná owó.",
            "Ṣọ́ra fún jìbìtì: irúgbìn àti ajílẹ̀ ayédèrú, ọjà \"iṣẹ́ ìyanu\", iṣẹ́ tàbí ẹ̀bùn owó (grant) ayédèrú tí ó ń béèrè owó, àti ọ̀rọ̀ tí ó ń ṣe bí ẹni pé ètò ìjọba ni, tí ó sì ń béèrè PIN owó orí fóònù rẹ. Ra ohun èlò oko lọ́wọ́ oníṣòwò tí a forúkọ rẹ̀ sílẹ̀, kí o sì fi ẹjọ́ ọjà ayédèrú sun àjọ tó yẹ."
          ],
          steps: ["Béèrè: ta ló sọ ọ́, ṣé ó sì mọ̀?", "Béèrè: ṣé ó wà fún agbègbè àti ohun ọ̀gbìn mi, ṣé ó sì jẹ́ tuntun?", "Béèrè: ṣé wọ́n ń ta nǹkan?", "Ṣàyẹ̀wò pẹ̀lú orísun kejì tí a gbẹ́kẹ̀ lé kí o tó ná owó.", "Ra ohun èlò oko lọ́wọ́ oníṣòwò tí a forúkọ rẹ̀ sílẹ̀; má ṣe pín PIN rẹ láéláé."],
          words: [["Òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ (extension officer)", "olùdámọ̀ràn tí a kọ́ láti ọ̀dọ̀ ìjọba tàbí iṣẹ́ àkànṣe kan, tí ó ń ran àwọn àgbẹ̀ lọ́wọ́."], ["Iléeṣẹ́ ìwádìí", "àjọ tí ó ń dán ọ̀nà iṣẹ́ àgbẹ̀ àti irú èso wò, tí ó sì ń ṣe wọ́n, bí KALRO."], ["Jìbìtì", "ẹ̀tàn láti gba owó tàbí ìsọfúnni rẹ."]],
          slides: [
            { title: "Orísun púpọ̀", bullets: ["Òṣìṣẹ́ ìtọ́sọ́nà, iléeṣẹ́ ìwádìí, FAO, CGIAR", "Agrovet, rédíò, SMS àti app", "Ẹgbẹ́ orí ẹ̀rọ ayélujára àti aládùúgbò"] },
            { title: "Ìbéèrè mẹ́rin", bullets: ["Ta ló sọ ọ́, ṣé ó sì mọ̀?", "Fún agbègbè àti ohun ọ̀gbìn mi?", "Ṣé ó jẹ́ tuntun?", "Ṣé wọ́n ń ta nǹkan?"] },
            { title: "Ṣọ́ra fún jìbìtì", bullets: ["Irúgbìn àti ajílẹ̀ ayédèrú, ọjà iṣẹ́ ìyanu", "Ẹ̀bùn owó tàbí iṣẹ́ tí ó ń béèrè owó", "Má ṣe pín PIN rẹ láéláé"] }
          ],
          sources: [KALRO],
          tryIt: "Wá ìmọ̀ràn oko kan tí o rí láìpẹ́ (lórí rédíò, WhatsApp tàbí lọ́dọ̀ oníṣòwò). Dáhùn ìbéèrè mẹ́rin náà nípa rẹ̀, kí o sì ṣàyẹ̀wò rẹ̀ pẹ̀lú orísun kejì tí a gbẹ́kẹ̀ lé. Kọ bóyá o máa ṣe ohun tí ó sọ.",
          youCanNow: "mọ̀ bóyá ìmọ̀ràn oko ṣeé gbẹ́kẹ̀ lé, kí o sì dá àwọn jìbìtì tí ó wọ́pọ̀ mọ̀.",
          quickCheck: [
            { objective: "O1", q: "Ìbéèrè wo ló ń ràn ọ́ lọ́wọ́ láti mọ̀ bóyá ìmọ̀ràn oko dára?", options: ["Èèyàn mélòó ló fẹ́ràn ọ̀rọ̀ náà?", "Ṣé ó wà fún agbègbè àti ohun ọ̀gbìn mi, ṣé ó sì jẹ́ tuntun?", "Ṣé ọ̀rọ̀ náà gùn?", "Ṣé ó ní àwòrán púpọ̀?"], answer: 1, why: "Ṣíṣàyẹ̀wò ẹni tó sọ ọ́, bóyá ó bá agbègbè àti ohun ọ̀gbìn rẹ mu, àti bóyá ó jẹ́ tuntun ń fi hàn bóyá ìmọ̀ràn ṣeé gbẹ́kẹ̀ lé." },
            { objective: "O1", q: "Ọ̀rọ̀ kan sọ pé o ti jẹ ẹ̀bùn owó oko, ó sì béèrè PIN owó orí fóònù rẹ. Kí ni o máa ṣe?", options: ["Fi PIN náà ránṣẹ́ kíákíá", "Kọ́kọ́ san owó kékeré kan", "Kà á sí jìbìtì, má sì pín PIN náà", "Fi í ránṣẹ́ sí ẹgbẹ́ rẹ kí wọ́n lè forúkọ sílẹ̀"], answer: 2, why: "Ètò gidi kì í béèrè PIN rẹ tàbí owó kí wọ́n tó fún ọ ní ẹ̀bùn owó." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ìsọfúnni oko rẹ sórí fóònù",
          minutes: 6,
          goal: "Ṣètò ọ̀nà tó rọrùn lórí fóònù láti kọ ilẹ̀ oko, ohun èlò oko, àbẹ̀wò oko àti ìkórè sílẹ̀.",
          text: [
            "Àkọsílẹ̀ tìrẹ ni ìsọfúnni tí ó níye lórí jù tí o ní, nítorí pé nípa oko rẹ ni. App spreadsheet (Google Sheets tàbí Microsoft Excel, tí méjèèjì jẹ́ ọ̀fẹ́ lórí fóònù) ń ṣiṣẹ́ dáadáa: ìlà kan fún ìṣẹ̀lẹ̀ kọ̀ọ̀kan, pẹ̀lú ọ̀wọ̀n bí ọjọ́, ilẹ̀ oko, ohun ọ̀gbìn, iṣẹ́, iye, owó àti àkọsílẹ̀.",
            "Fún ilẹ̀ oko kọ̀ọ̀kan ní orúkọ kúkúrú tàbí nọ́mbà kan, kí o má sì yí i padà. Kọ GPS pin tàbí ààlà ilẹ̀ oko kọ̀ọ̀kan ní ìwọ̀n (ọ̀pọ̀ app máàpù ń jẹ́ kí o fi pin sí ibì kan kí o sì pín coordinates rẹ̀). Ya fọ́tò ìṣòro, kí o sì fi ọjọ́ àti orúkọ ilẹ̀ oko sọ wọ́n lórúkọ. Fún ẹgbẹ́ àti àjọ àjùmọ̀ṣe, irinṣẹ́ fọ́ọ̀mù ọ̀fẹ́ bí KoboToolbox ń jẹ́ kí ọ̀pọ̀ ọmọ ẹgbẹ́ kún fọ́ọ̀mù kan náà lórí fóònù wọn, kódà láìsí íńtánẹ́ẹ̀tì, kí wọ́n sì fi ránṣẹ́ nígbà tí nẹ́tíwọ́ọ̀kì bá dé.",
            "Jẹ́ kí ó rọrùn tó láti máa ṣe ní gbogbo ìgbà. Ọ̀wọ̀n márùn-ún tí o ń kún ní gbogbo ọ̀sẹ̀ níye lórí ju ọ̀wọ̀n ogún tí o kún lẹ́ẹ̀kan ṣoṣo lọ. Ṣe ẹ̀dà ìpamọ́ (backup) ìwé náà (ọ̀pọ̀ spreadsheet orí ayélujára ń fi pamọ́ fúnra wọn), má sì fi nọ́mbà àdáni bí PIN tàbí nọ́mbà ìdánimọ̀ sínú rẹ̀."
          ],
          steps: ["Ṣí app spreadsheet ọ̀fẹ́ kí o sì ṣe ọ̀wọ̀n: ọjọ́, ilẹ̀ oko, ohun ọ̀gbìn, iṣẹ́, iye, owó, àkọsílẹ̀.", "Sọ ilẹ̀ oko kọ̀ọ̀kan lórúkọ kí o sì kọ GPS pin rẹ̀.", "Fi ìlà kan kún un nígbàkúgbà tí o bá gbìn, lo ohun èlò oko, bẹ oko wò, kórè tàbí tà.", "Fi ọjọ́ àti orúkọ ilẹ̀ oko sọ fọ́tò lórúkọ.", "Fún ẹgbẹ́: ronú nípa fọ́ọ̀mù àjọlò tí ó ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì."],
          words: [["Spreadsheet", "tábìlì ìlà àti ọ̀wọ̀n lórí fóònù tàbí kọ̀mpútà fún kíkọ nǹkan sílẹ̀ àti ṣíṣírò."], ["GPS pin", "ibì kan tí a fi pamọ́ sórí máàpù pẹ̀lú coordinates rẹ̀."], ["Láìsí íńtánẹ́ẹ̀tì (offline)", "ṣíṣiṣẹ́ láìní ìsopọ̀ íńtánẹ́ẹ̀tì."]],
          slides: [
            { title: "Ìsọfúnni tìrẹ dà bí wúrà", bullets: ["Nípa oko TÌRẸ ni", "Ìlà kan fún ìṣẹ̀lẹ̀ kọ̀ọ̀kan"] },
            { title: "Ọ̀wọ̀n láti bẹ̀rẹ̀", bullets: ["Ọjọ́, ilẹ̀ oko, ohun ọ̀gbìn, iṣẹ́", "Iye, owó, àkọsílẹ̀"] },
            { title: "Àṣà tó dára", bullets: ["Orúkọ ilẹ̀ oko kan náà ní gbogbo ìgbà", "GPS pin fún ilẹ̀ oko kọ̀ọ̀kan, fọ́tò tí ó ní ọjọ́", "Ó rọrùn tó láti ṣe ní gbogbo ọ̀sẹ̀"] },
            { title: "Ẹgbẹ́ àti ààbò", bullets: ["Fọ́ọ̀mù àjọlò láìsí íńtánẹ́ẹ̀tì, bí KoboToolbox", "Ṣe backup; kò sí PIN tàbí nọ́mbà ìdánimọ̀"] }
          ],
          sources: [KOBO],
          tryIt: "Ṣe ìwé oko rẹ lórí fóònù pẹ̀lú ọ̀wọ̀n méje náà. Fi àwọn ilẹ̀ oko rẹ kún un àti ó kéré tán ìlà márùn-ún ti iṣẹ́ gidi láti àsìkò yìí. Fi GPS pin sí ilẹ̀ oko kan kí o sì kọ coordinates rẹ̀ sínú àkọsílẹ̀.",
          youCanNow: "kọ iṣẹ́ oko rẹ, ohun èlò oko àti ìkórè sórí fóònù ní ọ̀nà kan náà ní gbogbo ìgbà.",
          quickCheck: [
            { objective: "O2", q: "Nínú ìwé ìsọfúnni oko, kí ni ìlà kan?", options: ["Ìṣẹ̀lẹ̀ kan, bí gbígbìn tàbí títà", "Àsìkò oko kan látòkè délẹ̀", "Ohun ọ̀gbìn kan fún gbogbo ọdún", "Nọ́mbà fóònù kan"], answer: 0, why: "Ìlà kan fún ìṣẹ̀lẹ̀ kọ̀ọ̀kan, pẹ̀lú ọjọ́, ilẹ̀ oko, iṣẹ́, iye àti owó, ń jẹ́ kí àkọsílẹ̀ rọrùn láti ṣírò." },
            { objective: "O2", q: "Ẹgbẹ́ àgbẹ̀ rẹ fẹ́ kí àwọn ọmọ ẹgbẹ́ fi ìròyìn àbẹ̀wò oko ránṣẹ́ láti ibi tí nẹ́tíwọ́ọ̀kì kò ti dára. Kí ni o lè lò?", options: ["Ìpè fóònù gígùn ní ọ̀sẹ̀ kọ̀ọ̀kan", "Àkọsílẹ̀ orí ìwé tí ó wà nílé", "App ọ̀tọ̀ fún ọmọ ẹgbẹ́ kọ̀ọ̀kan", "Irinṣẹ́ fọ́ọ̀mù àjọlò bí KoboToolbox tí ó ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì"], answer: 3, why: "Irinṣẹ́ fọ́ọ̀mù bí KoboToolbox ń jẹ́ kí ọ̀pọ̀ ọmọ ẹgbẹ́ kún fọ́ọ̀mù kan náà láìsí íńtánẹ́ẹ̀tì, kí wọ́n sì fi ránṣẹ́ nígbà tí nẹ́tíwọ́ọ̀kì bá dé." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Lílo ìsọfúnni ojú-ọjọ́ àti satẹ́láìtì ọ̀fẹ́",
          minutes: 6,
          goal: "Lo àsọtẹ́lẹ̀ ìjọba àti máàpù satẹ́láìtì ọ̀fẹ́ láti ṣe ìpinnu oko.",
          text: [
            "Àwọn iléeṣẹ́ ojú-ọjọ́ orílẹ̀-èdè ń gbé àsọtẹ́lẹ̀ jáde fún àwọn àgbẹ̀: ní Kenya, Kenya Meteorological Department (KMD) ń gbé àsọtẹ́lẹ̀ àsìkò àti ìwé ìròyìn ojú-ọjọ́ fún àgbẹ̀ jáde; ní Nigeria, NiMet ń gbé àsọtẹ́lẹ̀ ojú-ọjọ́ àsìkò àti àsọtẹ́lẹ̀ míì jáde. Kọ ohun tí wọ́n sọ fún agbègbè rẹ sínú ìwé oko rẹ, pẹ̀lú ọjọ́, kí o lè rí i lẹ́yìn náà bí ó ṣe bá àsìkò oko rẹ mu.",
            "Ìsọfúnni satẹ́láìtì ọ̀fẹ́ náà ń ràn lọ́wọ́. Àwọn ojú-ewé earth observation ti FAO ń fi máàpù òjò, ewéko (NDVI) àti ìnira oko hàn fún orílẹ̀-èdè àti agbègbè, èyí wúlò láti mọ̀ bóyá ọ̀dá kan wà ní agbègbè rẹ nìkan tàbí ó tàn káàkiri. Copernicus Browser ń fi àwòrán satẹ́láìtì Sentinel-2 ọ̀fẹ́ hàn ní ọjọ́ díẹ̀ díẹ̀, ní nǹkan bí mítà 10 fún pixel kọ̀ọ̀kan; èyí tó láti rí bí oko ṣe rí àti bóyá oko ńlá kan ti tutù yọ̀yọ̀ sí i tàbí ti gbẹ ju oṣù tó kọjá lọ.",
            "Tí o bá lè ṣe é, wọn òjò fúnra rẹ pẹ̀lú ìwọ̀n òjò (rain gauge) tó rọrùn, kí o sì kọ ọ́ sílẹ̀ lójoojúmọ́. Àkọsílẹ̀ òjò tìrẹ, lẹ́gbẹ̀ẹ́ ọjọ́ gbígbìn àti èso rẹ, máa fi ohun tí ó ń ṣiṣẹ́ lórí oko rẹ hàn kíákíá."
          ],
          steps: ["Wá àsọtẹ́lẹ̀ iléeṣẹ́ ojú-ọjọ́ orílẹ̀-èdè rẹ fún agbègbè rẹ.", "Kọ ọ́ sínú ìwé oko rẹ pẹ̀lú ọjọ́.", "Wo máàpù earth observation ti FAO fún orílẹ̀-èdè rẹ.", "Wá oko rẹ nínú Copernicus Browser kí o sì fi ọjọ́ méjì wé ara wọn.", "Kọ òjò ojoojúmọ́ pẹ̀lú ìwọ̀n òjò tó rọrùn tí o bá lè ṣe é."],
          words: [["Ìwé ìròyìn ojú-ọjọ́ fún àgbẹ̀ (agrometeorological bulletin)", "ìròyìn ojú-ọjọ́ tí a kọ fún àwọn àgbẹ̀."], ["Àwòrán satẹ́láìtì", "àwòrán ilẹ̀ ayé tí a yà láti òfuurufú."], ["Ìwọ̀n òjò (rain gauge)", "ohun èlò tó rọrùn tí ó ní ìwọ̀n lára, tí ó ń wọn iye òjò tó rọ̀."]],
          slides: [
            { title: "Àsọtẹ́lẹ̀ ìjọba", bullets: ["Kenya: àsọtẹ́lẹ̀ àsìkò KMD, ìwé ìròyìn ojú-ọjọ́ fún àgbẹ̀", "Nigeria: NiMet", "Kọ wọ́n sínú ìwé rẹ pẹ̀lú ọjọ́"] },
            { title: "Ìsọfúnni satẹ́láìtì ọ̀fẹ́", bullets: ["FAO: máàpù òjò, NDVI àti ìnira oko", "Copernicus Browser: Sentinel-2, nǹkan bí mítà 10", "Ṣé ọ̀dá wà ní agbègbè rẹ nìkan tàbí káàkiri?"] },
            { title: "Ìwọ̀n òjò tìrẹ", bullets: ["Kọ òjò sílẹ̀ lójoojúmọ́", "Fi wé ọjọ́ gbígbìn àti èso"] }
          ],
          sources: [KMD, NIMET, FAO_EO, COPERNICUS],
          tryIt: "Wá àsọtẹ́lẹ̀ àsìkò yìí fún agbègbè rẹ kí o sì kọ ọ́ sínú ìwé oko rẹ. Lẹ́yìn náà wá agbègbè rẹ nínú máàpù earth observation ti FAO tàbí Copernicus Browser, kí o sì kọ nǹkan kan tí o kíyèsí.",
          youCanNow: "lo àsọtẹ́lẹ̀ ìjọba àti máàpù satẹ́láìtì ọ̀fẹ́ pẹ̀lú àkọsílẹ̀ oko rẹ.",
          quickCheck: [
            { objective: "O3", q: "Níbo ni àsọtẹ́lẹ̀ àsìkò ìjọba fún àwọn àgbẹ̀ ní Nigeria ti ń wá?", options: ["Ojú-ewé Facebook kan", "Iléeṣẹ́ irúgbìn kan", "Aládùúgbò kan", "NiMet"], answer: 3, why: "NiMet ló ń gbé àsọtẹ́lẹ̀ ojú-ọjọ́ àsìkò àti àsọtẹ́lẹ̀ míì jáde fún Nigeria." },
            { objective: "O3", q: "O fẹ́ mọ̀ bóyá ọ̀dá wà lórí oko rẹ nìkan tàbí káàkiri agbègbè. Kí ni o máa wò?", options: ["Iye agbára bátìrì fóònù rẹ", "Máàpù òjò àti ewéko earth observation ti FAO", "Ìpolówó rédíò kan", "Pákò irúgbìn ọdún tó kọjá"], answer: 1, why: "Máàpù earth observation ti FAO ń fi òjò, ewéko àti ìnira oko hàn fún orílẹ̀-èdè àti agbègbè." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Gbígba ìsọfúnni tó dára",
        questions: [
          { objective: "O1", q: "Ọ̀rọ̀ WhatsApp kan ń polówó \"ajílẹ̀ iṣẹ́ ìyanu\" láti ọ̀dọ̀ oníṣòwò tí a kò mọ̀. O yẹ kí o:", options: ["Rà á kíákíá kí ó tó tán", "Ṣàyẹ̀wò pẹ̀lú orísun tí a gbẹ́kẹ̀ lé bí òṣìṣẹ́ ìtọ́sọ́nà kí o tó ná owó", "Fi í ránṣẹ́ sí gbogbo ènìyàn", "Fi PIN rẹ ránṣẹ́ láti rà á"], answer: 1, why: "Oníṣòwò tí a kò mọ̀ àti ọ̀rọ̀ iṣẹ́ ìyanu jẹ́ àmì ìkìlọ̀." },
          { objective: "O2", q: "Ọ̀wọ̀n wo ló wúlò nínú ìwé ìsọfúnni oko?", options: ["PIN owó orí fóònù rẹ", "Nọ́mbà ìdánimọ̀ rẹ", "Ọjọ́, ilẹ̀ oko àti iṣẹ́", "Ọ̀rọ̀ aṣínà rẹ"], answer: 2, why: "Àkọsílẹ̀ nílò ìṣẹ̀lẹ̀, kì í ṣe nọ́mbà àdáni." },
          { objective: "O2", q: "Kí ló dé tí a fi ń fún ilẹ̀ oko kọ̀ọ̀kan ní orúkọ tí kì í yí padà?", options: ["Kí a lè fi àkọsílẹ̀ wé ara wọn bí àkókò ti ń lọ", "Ó dára lójú", "Fóònù ló béèrè fún un", "Kò wúlò"], answer: 0, why: "Orúkọ tí kì í yí padà ń jẹ́ kí o ṣírò àti fi àwọn ilẹ̀ oko wé ara wọn." },
          { objective: "O3", q: "Kí ni àwòrán Sentinel-2 ọ̀fẹ́ nínú Copernicus Browser ń fi hàn?", options: ["Kòkòrò kan ṣoṣo", "Owó tí ó wà nínú àkáǹtì báńkì rẹ", "Ojú-ọjọ́ ọdún tó ń bọ̀", "Oko ní nǹkan bí mítà 10 fún pixel kọ̀ọ̀kan ní ọjọ́ díẹ̀ díẹ̀"], answer: 3, why: "Wọ́n jẹ́ ọ̀fẹ́, wọ́n ń wá lóòrèkóòrè, ṣùgbọ́n wọn kò fi nǹkan kékeré hàn." },
          { objective: "O3", q: "Kí ló dé tí a fi ń kọ àsọtẹ́lẹ̀ sínú ìwé oko pẹ̀lú ọjọ́?", options: ["Láti fi wé ohun tí ó ṣẹlẹ̀ gan-an lórí oko rẹ lẹ́yìn náà", "Iléeṣẹ́ ojú-ọjọ́ ló béèrè fún un", "Láti pín in fún àwọn olùrà", "Láti kún àyè"], answer: 0, why: "Bí àsìkò ti ń lọ, o máa kọ́ bí àsọtẹ́lẹ̀ ṣe bá oko rẹ mu." }
        ]
      }
    },
    {
      name: "Orí 2: Lílo ìsọfúnni láti ṣe ìpinnu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe ìtúpalẹ̀ àkọsílẹ̀ rẹ nínú spreadsheet",
          minutes: 6,
          goal: "Ṣírò èso àti èrè fún ilẹ̀ oko kọ̀ọ̀kan kí o sì ṣe chart láti fi wọ́n wé ara wọn.",
          text: [
            "Àkọsílẹ̀ máa ń wúlò nígbà tí o bá ṣírò wọn pọ̀. Nínú spreadsheet rẹ, ṣe tábìlì àkópọ̀: ìlà kan fún ilẹ̀ oko kọ̀ọ̀kan pẹ̀lú ìtóbi rẹ̀, àpapọ̀ owó tí o ná, ìkórè, owó tí ó wọlé, lẹ́yìn náà èso fún éékà kan àti èrè fún éékà kan. Spreadsheet ń ṣe ìṣirò pẹ̀lú àgbékalẹ̀ (formula) tó rọrùn, fún àpẹẹrẹ =SUM láti ṣírò owó pọ̀ àti pínpín láti rí èso fún éékà kan.",
            "Lẹ́yìn náà ṣe chart. Yan orúkọ àwọn ilẹ̀ oko àti èso fún éékà kan (tàbí èrè fún éékà kan), kí o sì fi bar chart sí i. Chart ń jẹ́ kí ìyàtọ̀ rọrùn láti rí àti láti ṣàlàyé fún ẹbí, ẹgbẹ́ tàbí ayánilówó.",
            "Wá ìdí: ṣé ilẹ̀ oko tó dára jù gba ìgbẹ́ ẹran (manure), ṣé a gbìn ín ṣáájú, ṣé irú èso ọ̀tọ̀ ni, tàbí ṣé òjò pọ̀ sí i níbẹ̀? Ṣé ilẹ̀ oko tó burú jù ní kòkòrò tàbí omi tí ó dúró sí i? Kọ ìpinnu kan fún àsìkò tó ń bọ̀, kí o sì máa kọ àkọsílẹ̀ lọ kí o lè dán an wò."
          ],
          steps: ["Ṣe tábìlì àkópọ̀: ilẹ̀ oko, ìtóbi, àpapọ̀ owó tí o ná, ìkórè, owó tí ó wọlé.", "Lo =SUM fún àpapọ̀, kí o sì pín láti rí èso àti èrè fún éékà kan.", "Yan orúkọ ilẹ̀ oko àti èso fún éékà kan; fi bar chart sí i.", "Wá ìdí nínú àkọsílẹ̀ rẹ.", "Kọ ìpinnu kan fún àsìkò tó ń bọ̀."],
          words: [["Àgbékalẹ̀ (formula)", "ìtọ́sọ́nà nínú àpótí spreadsheet tí ó ń ṣírò nǹkan, bí =SUM(B2:B10)."], ["Èso fún éékà kan", "iye tí ilẹ̀ oko kan mú jáde, tí a pín sí ìtóbi rẹ̀."], ["Bar chart", "chart tí ó ní ọ̀pá tí ó ń fi iye wé ara wọn."]],
          slides: [
            { title: "Ṣírò wọn pọ̀", bullets: ["Ìlà kan fún ilẹ̀ oko kọ̀ọ̀kan", "Ìtóbi, owó tí o ná, ìkórè, owó tí ó wọlé", "Èso àti èrè fún éékà kan"] },
            { title: "Jẹ́ kí spreadsheet ṣe ìṣirò", bullets: ["=SUM fún àpapọ̀", "Pín láti rí iye fún éékà kan"] },
            { title: "Ṣe chart", bullets: ["Orúkọ ilẹ̀ oko + èso fún éékà kan", "Fi bar chart sí i", "Ó rọrùn láti ṣàlàyé fún àwọn ẹlòmíì"] },
            { title: "Wá ìdí, ṣe ìpinnu", bullets: ["Ìgbẹ́ ẹran, àkókò, irú èso, òjò, kòkòrò?", "Ìpinnu kan fún àsìkò tó ń bọ̀"] }
          ],
          tryIt: "Ṣe tábìlì àkópọ̀ fún ó kéré tán ilẹ̀ oko mẹ́ta (nọ́mbà gidi tàbí àpẹẹrẹ), ṣírò èso àti èrè fún éékà kan pẹ̀lú àgbékalẹ̀, fi bar chart sí i, kí o sì kọ ìpinnu kan fún àsìkò tó ń bọ̀.",
          youCanNow: "ṣe ìtúpalẹ̀ àkọsílẹ̀ oko nínú spreadsheet, kí o sì lo chart láti fi àwọn ilẹ̀ oko wé ara wọn àti láti ṣe ìpinnu.",
          quickCheck: [
            { objective: "O4", q: "Kí ni èrè fún éékà kan?", options: ["Àpapọ̀ ìkórè nìkan", "Àpapọ̀ owó tí o ná nìkan", "Owó tí ó wọlé yọ owó tí o ná kúrò, tí a pín sí ìtóbi ilẹ̀ oko ní éékà", "Iye owó àpò kan"], answer: 2, why: "Èrè fún éékà kan ń yọ owó tí o ná kúrò nínú owó tí ó wọlé, ó sì ń pín in sí ìtóbi ilẹ̀ oko, kí a lè fi ilẹ̀ oko tí ìtóbi wọn yàtọ̀ wé ara wọn." },
            { objective: "O4", q: "Tábìlì àkópọ̀ rẹ fi hàn pé ilẹ̀ oko kan mú àgbàdo púpọ̀ jáde jù. Kí ni o máa ṣe tẹ̀lé e?", options: ["Wá ìdí bí ìgbẹ́ ẹran tàbí ọjọ́ gbígbìn, kí o sì kọ ìpinnu kan", "Pa àwọn ilẹ̀ oko yòókù rẹ́ kúrò nínú ìwé náà", "Dá kíkọ àkọsílẹ̀ dúró", "Gbìn ilẹ̀ oko yẹn nìkan títí láé láìṣàyẹ̀wò"], answer: 0, why: "Wíwá ìdí àti kíkọ ìpinnu kan tí o lè dán wò ní àsìkò tó ń bọ̀ ló ń sọ àkọsílẹ̀ di iṣẹ́ oko tó dára jù." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Lílo olùrànlọ́wọ́ AI fún ìbéèrè oko, lọ́nà tó tọ́",
          minutes: 5,
          goal: "Béèrè ìbéèrè oko tó yé lọ́wọ́ olùrànlọ́wọ́ AI, kí o sì ṣàyẹ̀wò ìdáhùn kí o tó ṣe nǹkan.",
          text: [
            "Àwọn olùrànlọ́wọ́ AI ọ̀fẹ́ bí ChatGPT, Microsoft Copilot àti Google Gemini lè ṣàlàyé èrò iṣẹ́ àgbẹ̀, ràn ọ́ lọ́wọ́ láti ṣètò àsìkò oko, kọ àkọ́pẹrẹ ọ̀rọ̀ sí olùrà, túmọ̀ èdè, tàbí ràn ọ́ lọ́wọ́ láti kọ àgbékalẹ̀ spreadsheet. Béèrè lọ́nà tó yé: sọ ohun ọ̀gbìn rẹ, agbègbè, àsìkò, ìtóbi oko àti ohun tí o fẹ́, fún àpẹẹrẹ: \"Mo ń gbin àgbàdo lórí éékà 2 ní Bungoma. Òjò kúkúrú ń bẹ̀rẹ̀ ní October. Ṣe àkọsílẹ̀ iṣẹ́ ọ̀sẹ̀-sí-ọ̀sẹ̀ tó rọrùn fún mi láti ìgbà títún ilẹ̀ ṣe títí di ìkórè. Lo gbólóhùn kúkúrú.\"",
            "AI lè ṣàṣìṣe, ó lè ti di àtijọ́, tàbí kí ó fún ọ ní ìmọ̀ràn fún orílẹ̀-èdè míì. Ó lè dárúkọ ọjà tí a kò forúkọ rẹ̀ sílẹ̀ ní orílẹ̀-èdè rẹ tàbí ìwọ̀n tí kò tọ́. Má ṣe tẹ̀lé ìmọ̀ràn AI nípa oògùn kòkòrò, ìwọ̀n ajílẹ̀, oògùn ẹran ọ̀sìn tàbí owó láìṣàyẹ̀wò pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà rẹ, agrovet, àkọlé ọjà náà tàbí orísun míì tí a gbẹ́kẹ̀ lé.",
            "Má ṣe tẹ ìsọfúnni àdáni sínú olùrànlọ́wọ́ AI: nọ́mbà ìdánimọ̀ rẹ, PIN owó orí fóònù, ìsọfúnni báńkì tàbí ìsọfúnni àdáni àwọn ẹlòmíì. Lo AI bí ìbẹ̀rẹ̀ tí ó wúlò, kì í ṣe ọ̀rọ̀ ìkẹyìn."
          ],
          steps: ["Sọ ohun ọ̀gbìn rẹ, agbègbè, àsìkò, ìtóbi oko àti ohun tí o fẹ́.", "Béèrè fún gbólóhùn kúkúrú tàbí àkọsílẹ̀ iṣẹ́ (checklist).", "Béèrè ìbéèrè àtẹ̀lé láti mú ìdáhùn dára sí i.", "Ṣàyẹ̀wò ìmọ̀ràn nípa oògùn kòkòrò, ajílẹ̀, oògùn ẹran àti owó pẹ̀lú orísun tí a gbẹ́kẹ̀ lé.", "Má ṣe tẹ PIN, nọ́mbà ìdánimọ̀ tàbí ìsọfúnni báńkì láéláé."],
          words: [["Olùrànlọ́wọ́ AI", "ètò kọ̀mpútà tí o ń bá sọ̀rọ̀ ní èdè ojoojúmọ́, tí ó sì ń kọ ìdáhùn."], ["Prompt", "ohun tí o tẹ tàbí sọ sí olùrànlọ́wọ́ AI."]],
          slides: [
            { title: "Ohun tí AI lè ràn lọ́wọ́", bullets: ["Ṣàlàyé èrò, ṣètò àsìkò oko", "Kọ àkọ́pẹrẹ ọ̀rọ̀, túmọ̀ èdè", "Kọ àgbékalẹ̀ spreadsheet"] },
            { title: "Béèrè lọ́nà tó yé", bullets: ["Ohun ọ̀gbìn, agbègbè, àsìkò, ìtóbi oko", "Ohun tí o fẹ́ àti bí o ṣe fẹ́ ẹ", "Gbólóhùn kúkúrú, àkọsílẹ̀ iṣẹ́"] },
            { title: "Ṣàyẹ̀wò kí o tó ṣe é", bullets: ["Oògùn kòkòrò, ìwọ̀n, oògùn ẹran, owó", "Òṣìṣẹ́ ìtọ́sọ́nà, agrovet, àkọlé ọjà", "AI lè ṣàṣìṣe tàbí jẹ́ ti orílẹ̀-èdè míì"] },
            { title: "Má fi ìsọfúnni àdáni sínú rẹ̀", bullets: ["Kò sí PIN, nọ́mbà ìdánimọ̀ tàbí ti báńkì", "Kò sí ìsọfúnni àwọn ẹlòmíì"] }
          ],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI ọ̀fẹ́ fún àkọsílẹ̀ iṣẹ́ ọ̀sẹ̀-sí-ọ̀sẹ̀ fún ohun ọ̀gbìn pàtàkì rẹ ní àsìkò yìí, ní lílo ọ̀nà prompt láti inú ẹ̀kọ́ yìí. Sàmì sí gbogbo nǹkan tí ó nílò àyẹ̀wò pẹ̀lú orísun tí a gbẹ́kẹ̀ lé, kí o sì ṣàyẹ̀wò ọ̀kan lára wọn.",
          youCanNow: "béèrè ìbéèrè oko tó yé lọ́wọ́ olùrànlọ́wọ́ AI, kí o sì ṣàyẹ̀wò ìdáhùn rẹ̀ kí o tó ṣe nǹkan.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni ìbéèrè oko tó yé fún olùrànlọ́wọ́ AI?", options: ["\"Mo ń gbin ẹ̀wà lórí éékà 1 ní Kakamega. Òjò gígùn ń bẹ̀rẹ̀ ní March. Fún mi ní àkọsílẹ̀ iṣẹ́ gbígbìn kúkúrú.\"", "\"iṣẹ́ àgbẹ̀\"", "\"Sọ gbogbo nǹkan nípa ohun ọ̀gbìn fún mi.\"", "\"ẹ̀wà?\""], answer: 0, why: "Ó sọ ohun ọ̀gbìn, agbègbè, àsìkò, ìtóbi oko àti ohun tí o fẹ́." },
            { objective: "O5", q: "Olùrànlọ́wọ́ AI fún ọ ní ìwọ̀n ajílẹ̀ fún ohun ọ̀gbìn rẹ. Kí ni o máa ṣe?", options: ["Lò ó lónìí", "Ṣe é ní ìlọ́po méjì kí ó lè dájú", "Ṣàyẹ̀wò rẹ̀ pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà rẹ, agrovet tàbí àkọlé ọjà", "Fi í sínú ẹgbẹ́ rẹ bí òtítọ́"], answer: 2, why: "AI lè fúnni ní ìwọ̀n tí kò tọ́ tàbí ìmọ̀ràn fún orílẹ̀-èdè míì, nítorí náà a gbọ́dọ̀ kọ́kọ́ ṣàyẹ̀wò ìwọ̀n." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dídáàbò bo àti pínpín ìsọfúnni oko rẹ",
          minutes: 5,
          goal: "Pinnu ìsọfúnni oko tí o máa pín àti ẹni tí o máa pín in fún, kí o sì pa ìyókù mọ́ láìléwu.",
          text: [
            "Ìsọfúnni oko rẹ níye lórí: àwọn olùrà, ayánilówó, iléeṣẹ́ ìbánigbófò (insurance), iléeṣẹ́ ohun èlò oko àti àwọn app lè fẹ́ ẹ. Pínpín in lè ràn ọ́ lọ́wọ́ láti rí owó yíyá, ìbánigbófò tàbí àdéhùn iṣẹ́, ṣùgbọ́n o gbọ́dọ̀ mọ ohun tí o ń pín, ìdí rẹ̀ àti ẹni tí o ń pín in fún. Ka ohun tí app tàbí ètò kan sọ pé òun máa fi ìsọfúnni rẹ ṣe, kí o sì sọ pé rárá tí kò bá tẹ́ ọ lọ́rùn.",
            "Òfin ìdáàbòbò ìsọfúnni fún ọ ní ẹ̀tọ́ lórí ìsọfúnni àdáni rẹ. Ní Kenya, Office of the Data Protection Commissioner (ODPC) ló ń bójú tó Data Protection Act 2019; ní Nigeria, Nigeria Data Protection Commission (NDPC) ló ń bójú tó Nigeria Data Protection Act 2023. Tí o bá ń gba ìsọfúnni lọ́wọ́ àwọn àgbẹ̀ míì, fún àpẹẹrẹ gẹ́gẹ́ bí olórí ẹgbẹ́, o tún gbọ́dọ̀ bọ̀wọ̀ fún ẹ̀tọ́ wọn: gba àṣẹ wọn, kí o sì pa ìsọfúnni náà mọ́ láìléwu.",
            "Pa fóònù àti ìwé rẹ mọ́ láìléwu: títì ojú-iboju (screen lock), ọ̀rọ̀ aṣínà tó lágbára lórí àwọn àkáǹtì rẹ, backup, àti ìṣọ́ra pẹ̀lú fóònù àjọlò. Pín àkópọ̀ (bí èso fún éékà kan) dípò gbogbo nǹkan nígbà tí ìyẹn bá tó."
          ],
          steps: ["Kí o tó pín nǹkan, béèrè: kí ni, kí ló dé, fún ta ni, kí ni màá sì rí gbà?", "Ka àwọn òfin ìsọfúnni app tàbí ètò náà.", "Gba àṣẹ lọ́wọ́ àwọn àgbẹ̀ míì kí o tó gba ìsọfúnni wọn.", "Ti fóònù rẹ pa; lo ọ̀rọ̀ aṣínà tó lágbára; ṣe backup.", "Pín àkópọ̀ dípò gbogbo àlàyé nígbà tí ó bá ṣeé ṣe."],
          words: [["Ìsọfúnni àdáni", "ìsọfúnni nípa ènìyàn kan tí a lè dá mọ̀."], ["Àṣẹ (consent)", "bẹ́ẹ̀ni tó ṣe kedere lẹ́yìn tí ènìyàn ti mọ ohun tí a máa fi ìsọfúnni náà ṣe."], ["Òfin ìdáàbòbò ìsọfúnni", "òfin tí ó ń darí bí a ṣe lè gba ìsọfúnni àdáni àti bí a ṣe lè lò ó."]],
          slides: [
            { title: "Ìsọfúnni rẹ níye lórí", bullets: ["Olùrà, ayánilówó, ìbánigbófò àti app ń fẹ́ ẹ", "Pínpín lè ràn lọ́wọ́: owó yíyá, ìbánigbófò, àdéhùn", "Mọ ohun tí o ń pín, ìdí àti fún ta ni"] },
            { title: "Ẹ̀tọ́ rẹ", bullets: ["Kenya: Data Protection Act 2019, ODPC", "Nigeria: Data Protection Act 2023, NDPC", "Bọ̀wọ̀ fún ìsọfúnni àwọn àgbẹ̀ míì náà"] },
            { title: "Pa á mọ́ láìléwu", bullets: ["Títì ojú-iboju, ọ̀rọ̀ aṣínà tó lágbára, backup", "Ṣọ́ra pẹ̀lú fóònù àjọlò", "Pín àkópọ̀ nígbà tí ó bá tó"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ìwé ìsọfúnni oko àsìkò rẹ fún ó kéré tán ilẹ̀ oko mẹ́ta, ṣe chart ìfiwéra kan, kọ ìpinnu kan fún àsìkò tó ń bọ̀, kọ àwọn orísun tí o ṣàyẹ̀wò, kí o sì kọ ìgbésẹ̀ mẹ́ta tí o ń gbé láti pa ìsọfúnni náà mọ́ láìléwu.",
          youCanNow: "gba, ṣe ìtúpalẹ̀, pín àti dáàbò bo ìsọfúnni oko rẹ láti ṣe ìpinnu tó dára jù.",
          quickCheck: [
            { objective: "O6", q: "Àjọ wo ló ń bójú tó ìdáàbòbò ìsọfúnni ní Kenya?", options: ["Kenya Meteorological Department", "Office of the Data Protection Commissioner (ODPC)", "KALRO", "Iléeṣẹ́ nẹ́tíwọ́ọ̀kì fóònù rẹ"], answer: 1, why: "ODPC ló ń bójú tó Data Protection Act 2019 ti Kenya." },
            { objective: "O6", q: "Ayánilówó kan fẹ́ rí bí oko rẹ ṣe ń ṣe. Kí ni o máa pín?", options: ["Ọ̀rọ̀ aṣínà fóònù rẹ", "PIN owó orí fóònù rẹ", "Gbogbo ìsọfúnni àdáni àwọn ọmọ ẹgbẹ́", "Àkópọ̀ bí èso fún éékà kan, lẹ́yìn tí o ti ka bí wọ́n ṣe máa lò ó"], answer: 3, why: "Àkópọ̀ sábà máa ń tó, o sì gbọ́dọ̀ mọ ohun tí o ń pín, ìdí rẹ̀ àti ẹni tí o ń pín in fún." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Lílo ìsọfúnni láti ṣe ìpinnu",
        questions: [
          { objective: "O4", q: "Àgbékalẹ̀ spreadsheet wo ló ń ṣírò ọ̀wọ̀n owó pọ̀?", options: ["=SUM", "=PIN", "=PHOTO", "=RAIN"], answer: 0, why: "=SUM ń ṣírò àwọn àpótí pọ̀." },
          { objective: "O4", q: "Ilẹ̀ oko A mú 900 kg jáde lórí ìdajì éékà. Èso rẹ̀ fún éékà kan ni:", options: ["90 kg", "450 kg", "900 kg", "1,800 kg"], answer: 3, why: "900 tí a pín sí éékà 0.5 jẹ́ 1,800 kg fún éékà kan." },
          { objective: "O5", q: "Olùrànlọ́wọ́ AI dábàá oògùn kòkòrò kan àti ìwọ̀n rẹ̀. O yẹ kí o:", options: ["Fín in lẹ́sẹ̀kẹsẹ̀", "Ṣe ìwọ̀n náà ní ìlọ́po méjì kí ó lè dájú", "Pín PIN rẹ pẹ̀lú rẹ̀", "Ṣàyẹ̀wò ìforúkọsílẹ̀ àti ìwọ̀n pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà, agrovet tàbí àkọlé ọjà"], answer: 3, why: "AI lè dárúkọ ọjà tí kò tọ́ tàbí tí a kò forúkọ rẹ̀ sílẹ̀, àti ìwọ̀n tí kò tọ́." },
          { objective: "O5", q: "Èwo ni KÒ léwu láti tẹ sínú olùrànlọ́wọ́ AI?", options: ["Ohun ọ̀gbìn àti agbègbè rẹ", "PIN owó orí fóònù rẹ", "Ọjọ́ àsìkò oko rẹ", "Ìtóbi oko rẹ"], answer: 1, why: "PIN àti nọ́mbà ìdánimọ̀ gbọ́dọ̀ wà ní ìkọ̀kọ̀." },
          { objective: "O6", q: "Gẹ́gẹ́ bí olórí ẹgbẹ́ tí ó ń gba ìsọfúnni oko àwọn ọmọ ẹgbẹ́, o gbọ́dọ̀:", options: ["Gba àṣẹ wọn kí o sì pa á mọ́ láìléwu", "Tà á fún àwọn olùrà", "Gbé e sórí ayélujára", "Gba èyí tí ó pọ̀ jù tí o bá lè gbà"], answer: 0, why: "Òfin ìdáàbòbò ìsọfúnni ń dáàbò bo ìsọfúnni àdáni àwọn ẹlòmíì." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìsọfúnni àti Ẹ̀rọ Ìgbàlódé fún Iṣẹ́ Àgbẹ̀",
    questions: [
      { objective: "O1", q: "Èwo ló sábà máa ń jẹ́ orísun ìmọ̀ràn oko tí a lè gbẹ́kẹ̀ lé?", options: ["Àkáǹtì tí a kò mọ̀ tí ó ń ta ọjà iṣẹ́ ìyanu", "Iléeṣẹ́ ìwádìí bí KALRO tàbí òṣìṣẹ́ ìtọ́sọ́nà tí a kọ́", "Ọ̀rọ̀ tí wọ́n ń fi ránṣẹ́ kiri", "Ìpolówó tí ó yọ jáde lójijì"], answer: 1, why: "Orísun tí a kọ́, tí ó sì ń jíhìn iṣẹ́ rẹ̀, ṣeé gbẹ́kẹ̀ lé jù." },
      { objective: "O1", q: "Kí o tó ná owó lórí ìmọ̀ràn tuntun, o yẹ kí o:", options: ["Ṣe é lẹ́sẹ̀kẹsẹ̀", "Béèrè lọ́wọ́ àjèjì kan", "Ṣàyẹ̀wò pẹ̀lú orísun kejì tí a gbẹ́kẹ̀ lé", "Má ṣe gba ìmọ̀ràn kankan"], answer: 2, why: "Orísun kejì ń mú àṣìṣe àti jìbìtì." },
      { objective: "O1", q: "Ọ̀rọ̀ kan sọ pé ẹ̀bùn owó ìjọba nílò owó àti PIN rẹ. Ó jẹ́:", options: ["Jìbìtì, ó ṣeé ṣe jù", "Ohun tó wọ́pọ̀", "Ohun tí òfin béèrè", "Owó yíyá"], answer: 0, why: "Ètò gidi kì í béèrè PIN rẹ." },
      { objective: "O2", q: "Ìsọfúnni oko tí ó níye lórí jù tí o ní sábà máa ń jẹ́:", options: ["Ìsọfúnni nípa orílẹ̀-èdè míì", "Ìpolówó", "Ìròyìn gbajúmọ̀", "Àkọsílẹ̀ oko tìrẹ"], answer: 3, why: "Nípa ilẹ̀ oko rẹ, ohun èlò oko rẹ àti èsì rẹ ni." },
      { objective: "O2", q: "Ìwé oko tó dára ní:", options: ["Ọ̀wọ̀n kan ṣoṣo", "Ìlà kan fún ìṣẹ̀lẹ̀ kọ̀ọ̀kan pẹ̀lú ọjọ́, ilẹ̀ oko, iṣẹ́, iye, owó, àkọsílẹ̀", "Fọ́tò nìkan", "Ọ̀rọ̀ aṣínà"], answer: 1, why: "Ìlà àti ọ̀wọ̀n tí kì í yí padà ń jẹ́ kí ìtúpalẹ̀ ṣeé ṣe." },
      { objective: "O2", q: "GPS pin ń kọ:", options: ["Òjò", "Iye owó ohun ọ̀gbìn", "Coordinates ibì kan", "pH ilẹ̀"], answer: 2, why: "Pin ń fi ibì kan pamọ́ sórí máàpù." },
      { objective: "O2", q: "KoboToolbox ń ran àwọn ẹgbẹ́ lọ́wọ́ láti:", options: ["Kún fọ́ọ̀mù kan náà lórí fóònù, kódà láìsí íńtánẹ́ẹ̀tì", "Fò drone", "San owó yíyá", "Gbin irúgbìn"], answer: 0, why: "Fọ́ọ̀mù àjọlò láìsí íńtánẹ́ẹ̀tì ń jẹ́ kí ẹgbẹ́ gba ìsọfúnni lọ́nà tó rọrùn." },
      { objective: "O2", q: "Ọ̀wọ̀n márùn-ún tí a ń kún ní gbogbo ọ̀sẹ̀:", options: ["Kò dára tó ọ̀wọ̀n ogún tí a kún lẹ́ẹ̀kan", "Kò wúlò", "Lòdì sí òfin", "Níye lórí ju ọ̀wọ̀n ogún tí a kún lẹ́ẹ̀kan lọ"], answer: 3, why: "Àkọsílẹ̀ tó rọrùn tí a ń ṣe déédéé ló wúlò." },
      { objective: "O3", q: "Ìwé ìròyìn ojú-ọjọ́ fún àgbẹ̀ ti ìjọba Kenya ń wá láti:", options: ["KCAA", "Kenya Meteorological Department", "Iléeṣẹ́ irúgbìn kan", "ODPC"], answer: 1, why: "KMD ló ń gbé àsọtẹ́lẹ̀ àti ìwé ìròyìn ojú-ọjọ́ fún àgbẹ̀ jáde." },
      { objective: "O3", q: "Máàpù earth observation ti FAO lè fi hàn:", options: ["Owó tí ó wà nínú àkáǹtì báńkì rẹ", "Iye owó ọjà nìkan", "Òjò, ewéko àti ìnira oko", "Orúkọ kòkòrò"], answer: 2, why: "FAO GIEWS ń ṣe máàpù òjò, NDVI àti àmì ìnira oko." },
      { objective: "O3", q: "Ìwọ̀n òjò tó rọrùn ń jẹ́ kí o:", options: ["Kọ òjò ojoojúmọ́ tìrẹ sílẹ̀", "Sọ àsọtẹ́lẹ̀ ọdún tó ń bọ̀", "Wọn pH ilẹ̀", "Ka iye ohun ọ̀gbìn"], answer: 0, why: "Àkọsílẹ̀ òjò tìrẹ ń so ojú-ọjọ́ pọ̀ mọ́ èso rẹ." },
      { objective: "O4", q: "Èso fún éékà kan ni:", options: ["Ìkórè lọ́nà iye owó", "Owó tí o ná tí a pín sí owó tí ó wọlé", "Ìtóbi ilẹ̀ oko lọ́nà òjò", "Ìkórè tí a pín sí ìtóbi ilẹ̀ oko"], answer: 3, why: "Ó ń jẹ́ kí a lè fi ilẹ̀ oko tí ìtóbi wọn yàtọ̀ wé ara wọn." },
      { objective: "O4", q: "Bar chart ń ràn ọ́ lọ́wọ́ láti:", options: ["Fi nọ́mbà pamọ́", "Rí àti ṣàlàyé ìyàtọ̀ láàárín àwọn ilẹ̀ oko", "Fi fọ́tò pamọ́", "Fi owó ránṣẹ́"], answer: 1, why: "Ọ̀pá ń jẹ́ kí ìfiwéra rọrùn láti rí." },
      { objective: "O4", q: "Lẹ́yìn tí o bá rí ilẹ̀ oko tó dára jù, ìgbésẹ̀ tó kàn ni láti:", options: ["Pa àkọsílẹ̀ rẹ́", "Dá kíkọ àkọsílẹ̀ dúró", "Wá ìdí kí o sì kọ ìpinnu kan fún àsìkò tó ń bọ̀", "Ta fóònù náà"], answer: 2, why: "Ìtúpalẹ̀ gbọ́dọ̀ yọrí sí ìpinnu tí o lè dán wò." },
      { objective: "O5", q: "Prompt AI tó yé fún iṣẹ́ àgbẹ̀ ní:", options: ["Ohun ọ̀gbìn, agbègbè, àsìkò, ìtóbi oko àti ohun tí o fẹ́", "Nọ́mbà ìdánimọ̀ rẹ", "Ọ̀rọ̀ kan ṣoṣo", "Ìsọfúnni báńkì rẹ"], answer: 0, why: "Àlàyé nípa ipò rẹ ń ran olùrànlọ́wọ́ náà lọ́wọ́ láti fúnni ní ìdáhùn tó wúlò." },
      { objective: "O5", q: "Ìmọ̀ràn AI nípa oògùn ẹran ọ̀sìn gbọ́dọ̀ jẹ́:", options: ["Èyí tí a tẹ̀lé bí ó ti rí gan-an", "Èyí tí a pa tì pátápátá", "Èyí tí a pín káàkiri", "Èyí tí a ṣàyẹ̀wò pẹ̀lú dókítà ẹranko tàbí orísun tí a gbẹ́kẹ̀ lé kí a tó ṣe é"], answer: 3, why: "AI lè ṣàṣìṣe; oògùn nílò ìmọ̀ràn akọ́ṣẹ́mọṣẹ́." },
      { objective: "O6", q: "Ní Nigeria, àjọ tí ó ń bójú tó ìdáàbòbò ìsọfúnni ni:", options: ["NCAA", "Nigeria Data Protection Commission (NDPC)", "NiMet", "NAFDAC"], answer: 1, why: "NDPC ló ń bójú tó Nigeria Data Protection Act 2023." },
      { objective: "O6", q: "Kí app kan tó gba ìsọfúnni oko rẹ, o yẹ kí o:", options: ["Má ka nǹkan kankan láéláé", "Fún un ní gbogbo ìsọfúnni", "Ka ohun tí ó máa fi ìsọfúnni náà ṣe kí o sì pinnu", "Pín PIN rẹ"], answer: 2, why: "Mọ ohun tí o ń pín, ìdí rẹ̀ àti ẹni tí o ń pín in fún." },
      { objective: "O6", q: "Pínpín àkópọ̀ bí èso fún éékà kan dípò gbogbo àlàyé:", options: ["Lè tó, ó sì ń dáàbò bo ìkọ̀kọ̀ rẹ", "Kò gbà láéláé", "Jẹ́ jìbìtì", "Kò wúlò"], answer: 0, why: "Pín ohun tí a nílò nìkan." },
      { objective: "O6", q: "Èwo ló ń pa ìsọfúnni fóònù rẹ mọ́ láìléwu jù?", options: ["Kò sí títì ojú-iboju", "Pínpín ọ̀rọ̀ aṣínà", "Kò ṣe backup rí", "Títì ojú-iboju, ọ̀rọ̀ aṣínà tó lágbára àti backup"], answer: 3, why: "Ìgbésẹ̀ ìpìlẹ̀ wọ̀nyí ń dáàbò bo àkọsílẹ̀ rẹ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      4,
      8,
      9,
      11,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe nínú ìwé náà kí o sì tún un ṣàyẹ̀wò.",
    criteria: [
      {
        name: "Ìwé ìsọfúnni oko",
        objective: "O2",
        notYet: "Ọ̀wọ̀n kan sọnù, tàbí a sọ ilẹ̀ oko kan náà lórúkọ ọ̀tọ̀ọ̀tọ̀ ní ìlà ọ̀tọ̀ọ̀tọ̀.",
        meets: "Ìlà kan fún ìṣẹ̀lẹ̀ kọ̀ọ̀kan pẹ̀lú ọjọ́, ilẹ̀ oko, iṣẹ́, iye àti owó, àti orúkọ ilẹ̀ oko tí kì í yí padà, fún ó kéré tán ilẹ̀ oko mẹ́ta.",
        exceeds: "Ó tún ní àkọsílẹ̀ àbẹ̀wò oko, fọ́tò tàbí GPS pin tí ó so mọ́ àwọn ilẹ̀ oko."
      },
      {
        name: "Àkọsílẹ̀ ojú-ọjọ́ àti satẹ́láìtì",
        objective: "O3",
        notYet: "Kò sí àsọtẹ́lẹ̀ tàbí ìsọfúnni òjò.",
        meets: "A kọ àsọtẹ́lẹ̀ ìjọba tàbí máàpù satẹ́láìtì tàbí òjò sílẹ̀ pẹ̀lú orísun àti ọjọ́ rẹ̀.",
        exceeds: "Ó ní àkọsílẹ̀ ìwọ̀n òjò ti akẹ́kọ̀ọ́ fúnra rẹ̀ lẹ́gbẹ̀ẹ́ àsọtẹ́lẹ̀."
      },
      {
        name: "Ìtúpalẹ̀ àti chart",
        objective: "O4",
        notYet: "Kò sí tábìlì àkópọ̀, tàbí ìṣirò kò tọ́.",
        meets: "Èso àti èrè fún éékà kan tọ́ fún ilẹ̀ oko kọ̀ọ̀kan, a sì fi wọ́n hàn nínú bar chart.",
        exceeds: "A ṣàlàyé chart náà ní gbólóhùn kan tàbí méjì fún ẹgbẹ́ tàbí ayánilówó."
      },
      {
        name: "Ìpinnu fún àsìkò tó ń bọ̀",
        objective: "O4",
        notYet: "Kò sí ìpinnu, tàbí kò tẹ̀lé ohun tí àwọn nọ́mbà fi hàn.",
        meets: "Ìpinnu kan tó ṣe kedere tí ó tan mọ́ ohun tí ìwé náà fi hàn.",
        exceeds: "Ó sọ bí àkọsílẹ̀ àsìkò tó ń bọ̀ ṣe máa dán ìpinnu náà wò."
      },
      {
        name: "Àwọn orísun tí a ṣàyẹ̀wò",
        objective: "O1",
        notYet: "A lo ìmọ̀ràn láti inú app, AI tàbí ẹ̀rọ ayélujára láìṣàyẹ̀wò.",
        meets: "Ó kọ àwọn orísun tí a gbẹ́kẹ̀ lé tí a fi ṣàyẹ̀wò ìmọ̀ràn, títí kan ìdáhùn AI èyíkéyìí.",
        exceeds: "Ó dárúkọ orísun kejì fún ìmọ̀ràn pàtàkì kọ̀ọ̀kan."
      },
      {
        name: "A pa ìsọfúnni mọ́ láìléwu",
        objective: "O6",
        notYet: "Ìwé náà ní PIN, nọ́mbà ìdánimọ̀ tàbí ìsọfúnni àwọn ẹlòmíì láìsí àṣẹ wọn.",
        meets: "Kò sí nọ́mbà àdáni; àkọsílẹ̀ kan wà nípa backup, títì ojú-iboju àti ohun tí a pín fún ta ni.",
        exceeds: "Ó fi àkópọ̀ kúkúrú tí a pèsè fún pínpín hàn dípò gbogbo ìwé náà."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ìwé ìsọfúnni oko",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì ń kọ ìsọfúnni oko sórí fóònù wọn lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ṣe ìpinnu oko láti inú àkọsílẹ̀ tiwọn tàbí ṣàyẹ̀wò ìmọ̀ràn kí wọ́n tó ra ohun èlò oko",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn yẹra fún ohun èlò oko ayédèrú, ẹ̀bùn owó ayédèrú tàbí jìbìtì PIN"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tí ó ní íńtánẹ́ẹ̀tì, kódà olówó pọ́ọ́kú; kọ̀mpútà ń ràn lọ́wọ́ ní Orí 2",
      "Irinṣẹ́ ọ̀fẹ́: Google Sheets tàbí ẹ̀dà wẹ́ẹ̀bù ọ̀fẹ́ ti Microsoft Excel, app máàpù, àti olùrànlọ́wọ́ AI ọ̀fẹ́",
      "Àkọsílẹ̀ oko gidi tàbí àpẹẹrẹ fún ó kéré tán ilẹ̀ oko mẹ́ta; ìwọ̀n òjò tó rọrùn tí ó bá wà",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti kún ìwé ìsọfúnni oko"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́ àgbẹ̀ tàbí ìpàdé ìtọ́sọ́nà: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ṣètò ìwé àpẹẹrẹ àjọlò kan lórí fóònù kí gbogbo ènìyàn lè rí àwọn ọ̀wọ̀n.",
      "Pèsè ìsọfúnni àpẹẹrẹ fún àwọn akẹ́kọ̀ọ́ tí kò tíì ní àkọsílẹ̀, kí gbogbo ènìyàn lè ṣe àṣeṣe àgbékalẹ̀ àti chart.",
      "Má ṣe ní kí akẹ́kọ̀ọ́ tẹ PIN, nọ́mbà ìdánimọ̀ tàbí ìsọfúnni báńkì sínú ìwé, fọ́ọ̀mù tàbí irinṣẹ́ AI láéláé; lo àmì ìdúrópò.",
      "Nígbà tí ẹgbẹ́ kan bá ń gba ìsọfúnni àwọn ọmọ ẹgbẹ́, ṣàlàyé àṣẹ (consent), kí ẹ sì fẹnu kò lórí ẹni tí ó lè rí ìwé náà.",
      "Fi rubric ṣe àmì fún ìwé ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
