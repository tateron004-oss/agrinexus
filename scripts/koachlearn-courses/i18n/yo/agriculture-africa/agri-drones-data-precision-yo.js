"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-drones-data-precision.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_EO = { name: "FAO GIEWS Earth Observation (NDVI àti àwọn àmì ewéko láti sátẹ́láìtì)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const QGIS = { name: "QGIS (ètò GIS ọ̀fẹ́, orísun ṣíṣí)", url: "https://qgis.org/" };
const ODM = { name: "OpenDroneMap (ètò ọ̀fẹ́ fún ṣíṣe máàpù drone)", url: "https://www.opendronemap.org/" };
const FAO_ITU_DRONES = { name: "FAO àti ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO àti WHO: Ìtọ́sọ́nà fún fífọ́n oògùn kòkòrò láti inú afẹ́fẹ́ (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-data-precision-yo",
  lang: "yo",
  translationOf: "agri-drones-data-precision",
  category: "Agriculture (Africa)",
  name: "Drone fún Iṣẹ́ Àgbẹ̀: Ìtúpalẹ̀ Dátà àti Iṣẹ́ Àgbẹ̀ Ìpéye",
  skills: "Ṣíṣàyẹ̀wò ìpéye máàpù drone, Yíyan àmì ewéko tó tọ́, Ṣíṣe ìṣirò agbègbè àti kíka ọ̀gbìn nínú QGIS, Ṣíṣe máàpù ìlànà iṣẹ́, Ṣíṣírò bóyá iṣẹ́ àgbẹ̀ ìpéye ń mówó wá, Sísọ èsì fún àwọn àgbẹ̀",
  outcome: "yí dátà drone padà sí ìtúpalẹ̀ tí a ti ṣàyẹ̀wò, tó péye, pẹ̀lú ìṣirò agbègbè kọ̀ọ̀kan àti máàpù ìlànà iṣẹ́, ṣírò bóyá ṣíṣe iṣẹ́ lé e lórí ń mówó wá, kí o sì fi èsì náà fún àgbẹ̀ tàbí alákòóso oko ńlá ní ọ̀nà tí ó lè tẹ̀lé.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn olùtúpalẹ̀ dátà drone, àwọn onímọ̀ ọ̀gbìn (agronomist), àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ (extension), àwọn alákòóso iṣẹ́ àgbẹ̀ àti oko ńlá (estate), àti àwọn ilé-iṣẹ́ tó ń ṣe iṣẹ́ drone ní Kenya, Nigeria àti káàkiri Áfíríkà. O gbọ́dọ̀ ti mọ bí a ṣe ń so àwòrán drone pọ̀ di máàpù kan àti bí a ṣe ń ṣe máàpù NDVI ìpìlẹ̀ (wo ọ̀wọ́ ìmójútó, Ẹ̀kọ́ 3).",
    "Orí 1 jẹ́ nípa ìtúpalẹ̀: rírí i dájú pé máàpù péye tó láti ṣiṣẹ́ lé e lórí, yíyan láàrín àwọn àmì ewéko, àti wíwọn agbègbè àti kíka ọ̀gbìn tàbí igi nínú QGIS. Orí 2 jẹ́ nípa iṣẹ́ àgbẹ̀ ìpéye: ṣíṣe máàpù ìlànà iṣẹ́ láti inú ìtúpalẹ̀ rẹ, ṣíṣàyẹ̀wò ọ̀rọ̀ owó pẹ̀lú ìṣirò ìnáwó apá kan tó rọrùn, àti fífi èsì hàn kí àwọn àgbẹ̀ lè ṣe nǹkan lé e lórí.",
    "Àwọn àpẹẹrẹ lo àgbàdo àti ẹ̀wà, tíì, kọfí, píà (avocado) àti ẹ̀gẹ́. Ìwọ̀n ajílẹ̀ àti irúgbìn nínú ẹ̀kọ́ yìí jẹ́ àpẹẹrẹ lásán: ìwọ̀n gidi ń wá láti inú àyẹ̀wò ilẹ̀, ìwádìí agbègbè àti ìmọ̀ràn àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀. Ìdánwò ìmọ̀ kan wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Lo dátà drone oko gidi kan tàbí àpẹẹrẹ ọ̀fẹ́: sọ bí máàpù náà ṣe péye tó àti bí o ṣe ṣàyẹ̀wò rẹ̀; yan àmì ewéko kan kí o sì sọ ìdí; pín oko náà sí agbègbè kí o sì sọ ìṣirò agbègbè kọ̀ọ̀kan (ààyè àti ìpíndọ́gba àmì) àti iye ọ̀gbìn tàbí igi; ṣe máàpù ìlànà iṣẹ́ pẹ̀lú ìwọ̀n tàbí iṣẹ́ fún agbègbè kọ̀ọ̀kan (lo ìwọ̀n tí a dámọ̀ràn ní agbègbè rẹ); ṣe ìṣirò ìnáwó apá kan tó rọrùn tó fi hàn bóyá ó ń mówó wá; kí o sì kọ èsì ojú-ewé kan fún àgbẹ̀ ní ọ̀rọ̀ tó rọrùn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olùtúpalẹ̀ dátà drone, àwọn onímọ̀ ọ̀gbìn, àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, àwọn alákòóso iṣẹ́ àgbẹ̀ àti oko ńlá, àti àwọn ilé-iṣẹ́ iṣẹ́ drone ní Kenya, Nigeria àti káàkiri Áfíríkà tí wọ́n ń ṣiṣẹ́ lórí ọ̀gbìn bí àgbàdo àti ẹ̀wà, tíì, kọfí, píà àti ẹ̀gẹ́.",
    startingPoint: "Àwọn akẹ́kọ̀ọ́ ti mọ bí a ṣe ń so máàpù drone pọ̀ àti bí a ṣe ń ṣe máàpù NDVI ìpìlẹ̀. Díẹ̀ ló ń ṣàyẹ̀wò ìpéye ipò máàpù, yan àmì tó bá ọ̀gbìn àti ìpele rẹ̀ mu, yí máàpù padà sí ìṣirò agbègbè, ṣe máàpù ìlànà iṣẹ́, dán an wò bóyá ó ń mówó wá, tàbí fi èsì hàn ní ọ̀nà tí àgbẹ̀ máa fi ṣiṣẹ́ lé e lórí.",
    gap: "Máàpù aláwọ̀ nìkan kì í sábà yí ohun tí ń ṣẹlẹ̀ nínú oko padà, máàpù tí kò péye tàbí àmì tí kò tọ́ sì lè rán òṣìṣẹ́ àti ohun èlò lọ sí ibi tí kò tọ́. Yíyí dátà drone padà sí nọ́mbà tí a ti ṣàyẹ̀wò, ìlànà iṣẹ́ tó ṣeé ṣe àti ìṣirò ìnáwó apá kan tó jẹ́ òótọ́ ń jẹ́ kí àgbẹ̀ àti oko ńlá ná owó ohun èlò sí ibi tí ó ti ń mówó wá, kí wọ́n sì gbẹ́kẹ̀lé iṣẹ́ drone náà.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a ṣàlàyé gbogbo àmì àti ọ̀rọ̀ máàpù",
      "Ẹ̀rọ: kọ̀ǹpútà alágbèéká (laptop) pẹ̀lú QGIS ọ̀fẹ́ àti dátà drone tàbí àpẹẹrẹ dátà ọ̀fẹ́",
      "Ìwọ̀n jẹ́ àpẹẹrẹ lásán: ìwọ̀n ajílẹ̀ àti irúgbìn gidi ń wá láti àyẹ̀wò ilẹ̀, ìwádìí agbègbè àti òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀",
      "Fífọ́n oògùn tàbí ajílẹ̀ pẹ̀lú drone nílò ìyọ̀ǹda ọkọ̀ òfuurufú àti ti oògùn kòkòrò",
      "Dátà àgbẹ̀ jẹ́ àdáni, a sì ń pín in pẹ̀lú àṣẹ wọn nìkan"
    ],
    prerequisites: "\"Drone fún Ìmójútó Iṣẹ́ Àgbẹ̀ 3: Ìlera Ọ̀gbìn, Kòkòrò àti Ṣíṣe Dátà\" (sísọ máàpù pọ̀ àti ṣíṣe máàpù NDVI)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní máàpù drone tí a ti so pọ̀ àti ìròyìn ṣíṣe rẹ̀", action: "ṣàyẹ̀wò ìpéye ipò máàpù náà àti dídára àwòrán rẹ̀, kí o sì sọ iye àṣìṣe", standard: "ní lílo àwọn àmì àyẹ̀wò (check point) tàbí ọ̀nà kan tí o sọ, kí o tó ṣe ìtúpalẹ̀ kankan" },
    { id: "O2", condition: "Tí a bá fún ọ ní ọ̀gbìn kan, ìpele ìdàgbàsókè rẹ̀ àti kámẹ́rà tí a lò", action: "yan àmì ewéko kan kí o sì ṣàlàyé ìdí tí ó fi bá a mu", standard: "kí o sì fìdí rẹ̀ múlẹ̀ pẹ̀lú máàpù àwọ̀ gidi àti lórí ilẹ̀" },
    { id: "O3", condition: "Ní lílo QGIS àti máàpù àmì kan", action: "ṣe àwọn agbègbè kí o sì sọ ààyè àti ìpíndọ́gba àmì agbègbè kọ̀ọ̀kan, kí o sì ka ọ̀gbìn tàbí igi", standard: "pẹ̀lú iye tí a ti ṣàyẹ̀wò lórí àpẹẹrẹ ilẹ̀ àti iye àṣìṣe tí a sọ" },
    { id: "O4", condition: "Tí a bá fún ọ ní àwọn agbègbè àti ohun tó fà á tí a ti ṣàyẹ̀wò lórí ilẹ̀", action: "ṣe máàpù ìlànà iṣẹ́ pẹ̀lú ìwọ̀n tàbí iṣẹ́ fún agbègbè kọ̀ọ̀kan", standard: "ní lílo ìwọ̀n méjì sí mẹ́rin láti inú àyẹ̀wò ilẹ̀ tàbí ìmọ̀ràn agbègbè" },
    { id: "O5", condition: "Fún iṣẹ́ àgbẹ̀ ìpéye kan tí a dábàá", action: "ṣe ìṣirò ìnáwó apá kan pẹ̀lú ìṣirò ìṣọ́ra àti ìṣirò tó ṣeé ṣe jù", standard: "ní kíka ohun tó yí padà nìkan, kí o sì sọ òtítọ́ tí kò bá mówó wá" },
    { id: "O6", condition: "Fún àgbẹ̀ tàbí alákòóso oko ńlá", action: "kọ èsì kúkúrú tí ó bẹ̀rẹ̀ pẹ̀lú ohun tí wọ́n máa ṣe, ní èdè àti ìwọ̀n tiwọn", standard: "kí o sì fi hàn bí ó ṣe dá ọ lójú tó àti ohun tí a ṣàyẹ̀wò lórí ilẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìtúpalẹ̀ dátà",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣé máàpù náà péye tó láti ṣiṣẹ́ lé e lórí?",
          minutes: 6,
          goal: "Ṣàyẹ̀wò ìpéye ipò àti dídára àwòrán máàpù drone kí o tó túpalẹ̀ rẹ̀.",
          text: [
            "Kí o tó rán òṣìṣẹ́ lọ sí agbègbè kan, o gbọ́dọ̀ gbẹ́kẹ̀lé pé máàpù náà fi nǹkan sí ipò tó tọ́. GNSS (ẹ̀rọ ìdámọ̀ ipò bíi GPS) lásán ti drone lè yí máàpù sí ẹ̀gbẹ́ ní mítà díẹ̀. Ìyẹn dára fún wíwá igun oko tí omi pọ̀ sí, ṣùgbọ́n kò tó fún títọ́ iṣẹ́ sí ìlà ọ̀gbìn kọ̀ọ̀kan tàbí fífi máàpù ọjọ́ ọ̀tọ̀ọ̀tọ̀ wé ara wọn.",
            "Ọ̀nà mẹ́ta láti mú ìpéye dára sí i àti láti ṣàyẹ̀wò rẹ̀: àwọn àmì ìdarí ilẹ̀ (GCP), àmì tí a fi sí ilẹ̀ tí a wọn ipò rẹ̀ pẹ̀lú ẹ̀rọ GNSS tó péye tí a sì lò nígbà ṣíṣe máàpù; drone tó ní RTK tàbí PPK, tí ó ń tún ipò ṣe nígbà ìfò tàbí lẹ́yìn rẹ̀; àti àwọn àmì àyẹ̀wò (check point), àmì míì tí a wọn ṣùgbọ́n tí a kò lò nígbà ṣíṣe máàpù, láti dán máàpù ìkẹyìn wò. Sọ iye àṣìṣe tí o wọ̀n.",
            "Tún ṣàyẹ̀wò dídára: ìròyìn ṣíṣe máàpù (iye àwòrán tí a lò, ìkìlọ̀ èyíkéyìí), bí àwòrán ṣe kún fún àlàyé tó (GSD), ìdàrúdàpọ̀ àwòrán (blur), ihò àti àṣìṣe ìsopọ̀. Fún máàpù tí o máa fi wé ara wọn nígbà tó ń lọ, lo ọ̀nà kan náà ní gbogbo ìgbà, kí o sì rí i dájú pé wọ́n bá ara wọn mu nígbà tí o bá gbé wọn lé ara wọn."
          ],
          steps: ["Ka ìròyìn ṣíṣe máàpù: àwòrán tí a lò, ìkìlọ̀, GSD.", "Wá àwòrán tó dàrú, ihò àti àṣìṣe ìsopọ̀.", "Wọn àṣìṣe ipò ní àwọn àmì àyẹ̀wò (tàbí fi wé àwọn nǹkan tí a mọ̀).", "Pinnu bóyá ìpéye náà bá ìpinnu tí o fẹ́ ṣe mu.", "Fún máàpù ọjọ́ ọ̀tọ̀ọ̀tọ̀, ṣàyẹ̀wò pé wọ́n bá ara wọn mu."],
          words: [["Àmì ìdarí ilẹ̀ (GCP)", "àmì tí a fi sí ilẹ̀ tí a wọn ipò rẹ̀ dáadáa, tí a fi ń tún ipò máàpù ṣe."], ["RTK / PPK", "ọ̀nà tí ó ń tún ipò drone ṣe nígbà ìfò (RTK) tàbí lẹ́yìn ìfò (PPK) fún ìpéye gíga."], ["Àmì àyẹ̀wò (check point)", "àmì tí a wọ̀n tí a fi ń dán ìpéye máàpù wò nìkan."], ["Ìròyìn ṣíṣe máàpù", "àkópọ̀ tí ètò ìsopọ̀ máàpù ń ṣe nípa dídára máàpù náà."]],
          slides: [
            { title: "Gbẹ́kẹ̀lé máàpù kí o tó ṣiṣẹ́", bullets: ["GNSS lásán: ó lè yàtọ̀ ní mítà díẹ̀", "Ó dára fún agbègbè, kì í ṣe fún ìlà kọ̀ọ̀kan", "Máàpù ọjọ́ ọ̀tọ̀ọ̀tọ̀ gbọ́dọ̀ bá ara wọn mu"] },
            { title: "Mú ìpéye dára sí i", bullets: ["Àwọn àmì ìdarí ilẹ̀ (GCP)", "Drone tó ní RTK tàbí PPK", "Àwọn àmì àyẹ̀wò láti dán èsì wò"] },
            { title: "Ṣàyẹ̀wò dídára", bullets: ["Ìròyìn ṣíṣe máàpù àti ìkìlọ̀", "GSD gidi, àwòrán tó dàrú, ihò", "Ọ̀nà kan náà ní gbogbo ọjọ́"] }
          ],
          sources: [ODM],
          tryIt: "Ṣí ìròyìn ṣíṣe máàpù tí o ṣe (tàbí ìròyìn àpẹẹrẹ dátà kan). Kọ iye àwòrán tí a lò, GSD, ìkìlọ̀ èyíkéyìí sílẹ̀, kí o sì pinnu bóyá máàpù náà péye tó láti (a) wá ibi tí omi pọ̀ sí, (b) tọ́ àtúngbìn ìlà kọ̀ọ̀kan.",
          youCanNow: "ṣàyẹ̀wò ìpéye àti dídára máàpù drone, kí o sì pinnu bóyá ó bá ìpinnu náà mu.",
          quickCheck: [
            { objective: "O1", q: "Kí ni a fi àwọn àmì àyẹ̀wò (check point) ṣe?", options: ["Láti dán ìpéye máàpù ìkẹyìn wò, nítorí a kò lò wọ́n nígbà ṣíṣe máàpù", "Láti mú drone balẹ̀ láìléwu", "Láti gba agbára bátìrì nínú oko", "Láti sàmì sí ibi tí òṣìṣẹ́ ti máa bẹ̀rẹ̀"], answer: 0, why: "Àmì àyẹ̀wò jẹ́ àmì míì tí a wọ̀n tí a kò lò nígbà ṣíṣe máàpù, kí o lè wọn àṣìṣe gidi máàpù náà." },
            { objective: "O1", q: "O máa fi máàpù oṣù yìí wé ti oṣù tó kọjá láti tọ́ iṣẹ́ ní ìlà kọ̀ọ̀kan. Kí ni o kọ́kọ́ ṣàyẹ̀wò?", options: ["Àwọn àwọ̀ nìkan", "Ìlera bátìrì drone", "Pé máàpù méjèèjì péye, wọ́n sì bá ara wọn mu nígbà tí a gbé wọn lé ara wọn", "Kò sí nǹkan; GNSS lásán máa ń tó nígbà gbogbo"], answer: 2, why: "GNSS lásán lè yàtọ̀ ní mítà díẹ̀, nítorí náà máàpù fún ìlà tàbí fún àkókò gbọ́dọ̀ péye kí wọ́n sì bá ara wọn mu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yíyan àmì ewéko tó tọ́",
          minutes: 6,
          goal: "Yan àmì ewéko tí ó bá ọ̀gbìn, ìpele rẹ̀ àti kámẹ́rà mu.",
          text: [
            "NDVI = (NIR - Red) / (NIR + Red) ni àmì tí a mọ̀ jù; FAO ń lò ó láti sátẹ́láìtì láti tọpinpin ewéko káàkiri Áfíríkà. Ṣùgbọ́n NDVI máa ń kún (saturate) nínú ewé tó pọ̀ tó sì ní ìlera, bí àgbàdo tó ti dàgbà, tíì tàbí kọfí: àwọn iye máa ń kóra jọ sókè, ìyàtọ̀ kékeré sì máa ń pòórá.",
            "NDRE ń lo ìlà red-edge dípò red: (NIR - RedEdge) / (NIR + RedEdge). Ó máa ń ní ìmọ̀lára nínú ewé tó pọ̀, ó sì sábà máa ń fi ìyàtọ̀ nitrogen àti chlorophyll hàn nígbà tí àsìkò bá lọ síwájú. Tí o bá ní kámẹ́rà àwọ̀ nìkan, àwọn àmì bíi VARI, (Green - Red) / (Green + Red - Blue), tàbí Excess Green, 2 x Green - Red - Blue, máa ń ya ọ̀gbìn àwọ̀ ewé sọ́tọ̀ kúrò lára ilẹ̀, wọ́n sì ń fi agbára ìdàgbà hàn díẹ̀; wọ́n wúlò fún iye ọ̀gbìn tó hù àti èpò, ṣùgbọ́n wọn kò ṣeé gbẹ́kẹ̀lé tó fún ìṣòro ọ̀gbìn.",
            "Yan gẹ́gẹ́ bí ìbéèrè rẹ ṣe rí: ọ̀gbìn tó hù àti èpò ní ìbẹ̀rẹ̀ àsìkò, àmì RGB tàbí NDVI; agbára ìdàgbà ní àárín àsìkò fún ọ̀gbìn tí kò pọ̀ jù, NDVI; ewé tó pọ̀ àti nitrogen, NDRE. Èyíkéyìí tí o bá yàn, wo máàpù àwọ̀ gidi pẹ̀lú, kí o sì fìdí rẹ̀ múlẹ̀ lórí ilẹ̀."
          ],
          words: [["Kíkún (saturation)", "nígbà tí àmì kò yí padà mọ́ bó tilẹ̀ jẹ́ pé ọ̀gbìn ṣì yàtọ̀ síra, bí NDVI ṣe ń ṣe nínú ewé tó pọ̀."], ["Red edge", "ìlà ìmọ́lẹ̀ tóóró kan láàrín red àti near-infrared, tí ó ń ní ìmọ̀lára sí chlorophyll."], ["NDRE", "àmì Normalized Difference Red Edge, tí ó ní ìmọ̀lára ju NDVI lọ nínú ewé tó pọ̀."], ["VARI", "Visible Atmospherically Resistant Index, àmì ewéko láti ìlà RGB nìkan."]],
          slides: [
            { title: "NDVI àti ibi tí agbára rẹ̀ mọ", bullets: ["(NIR - Red) / (NIR + Red)", "A ń lò ó káàkiri, FAO náà ń lò ó", "Ó máa ń kún nínú ewé tó pọ̀"] },
            { title: "Àwọn àmì míì", bullets: ["NDRE: (NIR - RedEdge) / (NIR + RedEdge)", "VARI: (G - R) / (G + R - B)", "Excess Green: 2G - R - B"] },
            { title: "Yan gẹ́gẹ́ bí ìbéèrè ṣe rí", bullets: ["Ọ̀gbìn tó hù àti èpò: àmì RGB tàbí NDVI", "Ọ̀gbìn tí kò pọ̀ jù ní àárín àsìkò: NDVI", "Ewé tó pọ̀ àti nitrogen: NDRE"] }
          ],
          sources: [FAO_EO, QGIS],
          tryIt: "Fún ìṣẹ̀lẹ̀ kọ̀ọ̀kan, yan àmì kan kí o sì kọ ìdí: (a) kíka àgbàdo ọlọ́sẹ̀ 3 pẹ̀lú drone RGB, (b) ìyàtọ̀ nitrogen nínú tíì tí ewé rẹ̀ ti bo ilẹ̀ pẹ̀lú drone multispectral, (c) agbára ìdàgbà ẹ̀gẹ́ ní àárín àsìkò pẹ̀lú drone multispectral.",
          youCanNow: "yan àmì ewéko tí ó bá ọ̀gbìn, ìpele rẹ̀ àti kámẹ́rà mu.",
          quickCheck: [
            { objective: "O2", q: "Kí ló dé tí NDVI fi lè pàdánù ìyàtọ̀ kékeré nínú àgbàdo tó ti dàgbà, tíì tàbí kọfí?", options: ["Ní òru nìkan ló ń ṣiṣẹ́", "Ó máa ń kún nínú ewé tó pọ̀ tó sì ní ìlera", "Ó nílò kámẹ́rà ooru (thermal)", "Kò ka ìlà near-infrared sí"], answer: 1, why: "Nínú ewé tó pọ̀ tó sì ní ìlera, iye NDVI máa ń kóra jọ sókè, ìyàtọ̀ kékeré sì máa ń pòórá." },
            { objective: "O2", q: "O ní kámẹ́rà RGB nìkan, o sì fẹ́ rí ọ̀gbìn tó hù ní ìbẹ̀rẹ̀ àsìkò. Àmì wo ni o máa yàn?", options: ["NDRE", "Àmì ooru (thermal)", "Kò sí; RGB kò lè ṣèrànwọ́", "Àmì RGB bíi VARI tàbí Excess Green"], answer: 3, why: "Àwọn àmì RGB máa ń ya ọ̀gbìn àwọ̀ ewé sọ́tọ̀ kúrò lára ilẹ̀, wọ́n sì bá ọ̀gbìn tó hù àti èpò ìbẹ̀rẹ̀ àsìkò mu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ìṣirò agbègbè àti kíka nínú QGIS",
          minutes: 6,
          goal: "Wọn ààyè àti ìpíndọ́gba àmì agbègbè kọ̀ọ̀kan, kí o sì ka ọ̀gbìn tàbí igi.",
          text: [
            "Ìtúpalẹ̀ ń yí máàpù aláwọ̀ padà sí nọ́mbà tí àwọn ènìyàn lè ṣiṣẹ́ lé lórí. Lákọ̀ọ́kọ́, ṣe àwọn agbègbè: pín máàpù àmì sí ẹgbẹ́ (fún àpẹẹrẹ kékeré, àárín, gíga), lẹ́yìn náà yí wọn padà sí polygon kí o sì pa àwọn ègé kékeré rẹ́; tàbí ya agbègbè pẹ̀lú ọwọ́ ní lílo ìmọ̀ àgbẹ̀. Ṣírò ààyè agbègbè kọ̀ọ̀kan.",
            "Lẹ́yìn náà lo Zonal Statistics nínú QGIS láti ṣírò, fún agbègbè kọ̀ọ̀kan, ìpíndọ́gba, ìwọ̀n tó kéré jù, èyí tó ga jù àti bí iye ṣe tàn ká. Fi àwọn agbègbè wé ara wọn, kí o sì fi agbègbè kan náà wé ara rẹ̀ ní ọjọ́ ọ̀tọ̀ọ̀tọ̀. Tábìlì bíi Agbègbè A: 3.2 ha, ìpíndọ́gba NDVI 0.71; Agbègbè C: 0.8 ha, ìpíndọ́gba NDVI 0.48 rọrùn láti ṣiṣẹ́ lé lórí ju àwòrán lọ.",
            "Kíka: fún ọ̀gbìn igi (píà, máńgòrò, kọfí), orí igi sábà máa ń hàn kedere lórí máàpù RGB tó kún fún àlàyé, a sì lè kà wọ́n pẹ̀lú ọwọ́ ní lílo àmì ojú-àmì (point), tàbí pẹ̀lú plugin àti script. Fún ọ̀gbìn onílà, ka nínú àwọn ìdá àpẹẹrẹ (sample plot) kí o sì ṣírò fún gbogbo oko. Máa ṣàyẹ̀wò àpẹẹrẹ kíka lórí ilẹ̀ nígbà gbogbo, kí o sì sọ iye àṣìṣe."
          ],
          steps: ["Pín máàpù àmì sí ẹgbẹ́ díẹ̀, tàbí ya agbègbè pẹ̀lú àgbẹ̀.", "Yí ẹgbẹ́ padà sí polygon; pa àwọn ègé kékeré rẹ́; ṣírò ààyè.", "Lo Zonal Statistics fún ìpíndọ́gba, èyí tó kéré jù, èyí tó ga jù àti bí ó ṣe tàn ká fún agbègbè kọ̀ọ̀kan.", "Ka igi tàbí ọ̀gbìn (àmì point, plugin tàbí ìdá àpẹẹrẹ).", "Ṣàyẹ̀wò iye tí o kà lórí ilẹ̀, kí o sì sọ iye àṣìṣe."],
          words: [["Zonal statistics (ìṣirò agbègbè)", "àwọn nọ́mbà (bí ìpíndọ́gba) tí a ṣírò fún àwọn pixel inú agbègbè kọ̀ọ̀kan."], ["Polygon", "àwòrán tí ó tì pa lórí máàpù, bí agbègbè tàbí ààlà oko."], ["Pín sí ẹgbẹ́ (classify)", "kó àwọn iye pixel jọ sí ẹgbẹ́ díẹ̀, bí kékeré, àárín àti gíga."]],
          slides: [
            { title: "Láti àwọ̀ sí nọ́mbà", bullets: ["Pín máàpù àmì sí ẹgbẹ́", "Yí i padà sí polygon agbègbè, pa ègé kékeré rẹ́", "Ṣírò ààyè agbègbè kọ̀ọ̀kan"] },
            { title: "Zonal Statistics", bullets: ["Ìpíndọ́gba, èyí tó kéré jù, èyí tó ga jù, bí ó ṣe tàn ká", "Fi agbègbè àti ọjọ́ wé ara wọn", "Agbègbè A: 3.2 ha, ìpíndọ́gba NDVI 0.71"] },
            { title: "Kíka", bullets: ["Orí igi lórí máàpù RGB tó kún fún àlàyé", "Ọ̀gbìn onílà: ìdá àpẹẹrẹ, lẹ́yìn náà ṣírò fún gbogbo oko", "Ṣàyẹ̀wò lórí ilẹ̀ kí o sì sọ àṣìṣe"] }
          ],
          sources: [QGIS],
          tryIt: "Nínú QGIS pẹ̀lú máàpù rẹ tàbí àpẹẹrẹ kan: ya tàbí pín agbègbè mẹ́ta, ṣírò ààyè wọn, lo Zonal Statistics lórí àmì náà, kí o sì ṣe tábìlì agbègbè, ààyè àti ìpíndọ́gba iye. Tí ó bá jẹ́ ọ̀gbìn igi, ka igi nínú agbègbè kan.",
          youCanNow: "wọn agbègbè kí o sì ka ọ̀gbìn tàbí igi nínú QGIS, kí o sì fi èsì hàn bí tábìlì.",
          quickCheck: [
            { objective: "O3", q: "Kí ni tábìlì ìṣirò agbègbè máa ń fún ọ?", options: ["Àwòrán tó rẹwà jù", "Àkókò ìfò drone", "Ìwé owó oníbàárà", "Nọ́mbà bí ààyè àti ìpíndọ́gba àmì agbègbè kọ̀ọ̀kan"], answer: 3, why: "Ìṣirò agbègbè ń yí máàpù aláwọ̀ padà sí nọ́mbà tí àwọn ènìyàn lè ṣiṣẹ́ lé lórí." },
            { objective: "O3", q: "Ètò rẹ ka igi píà 1,240. Kí ni o máa ṣe kí o tó ròyìn rẹ̀?", options: ["Sọ ọ́ di 1,000", "Ṣàyẹ̀wò àpẹẹrẹ kíka lórí ilẹ̀ kí o sì sọ iye àṣìṣe", "Fi 10% kún un fún ààbò", "Ròyìn rẹ̀ láìṣàyẹ̀wò"], answer: 1, why: "A máa ń ṣàyẹ̀wò iye tí a kà lórí àpẹẹrẹ ilẹ̀, a sì máa ń sọ iye àṣìṣe." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìtúpalẹ̀ dátà",
        questions: [
          { objective: "O1", q: "Kí ni a fi àmì àyẹ̀wò (check point) ṣe?", options: ["Láti tún máàpù ṣe nígbà ṣíṣe rẹ̀", "Láti dán ìpéye máàpù ìkẹyìn wò", "Láti gba agbára bátìrì", "Láti mú drone balẹ̀"], answer: 1, why: "A wọn àmì àyẹ̀wò ṣùgbọ́n a kò lò wọ́n nígbà ṣíṣe máàpù, nítorí náà wọ́n ń dán èsì wò." },
          { objective: "O1", q: "Máàpù kan yàtọ̀ ní nǹkan bí mítà 3. Ó péye tó láti:", options: ["Tọ́ àtúngbìn ìlà kọ̀ọ̀kan", "Wọn ọ̀gbìn kọ̀ọ̀kan", "Wá igun oko tí omi pọ̀ sí", "Kò tó fún nǹkan kan rárá"], answer: 2, why: "Àṣìṣe mítà díẹ̀ dára fún nǹkan ńlá, kì í ṣe fún ìlà." },
          { objective: "O2", q: "Kí ló dé tí NDVI fi lè fi ìyàtọ̀ díẹ̀ hàn nínú tíì tó ti dàgbà tí ewé rẹ̀ pọ̀?", options: ["NDVI máa ń kún nínú ewé tó pọ̀", "Tíì kò ní ewé", "Drone fò ní ìsàlẹ̀ jù", "Lórí ilẹ̀ nìkan ni NDVI ti ń ṣiṣẹ́"], answer: 0, why: "Iye máa ń kóra jọ sókè nínú ewéko tó pọ̀." },
          { objective: "O2", q: "Àmì wo ni a lè ṣírò láti kámẹ́rà RGB nìkan?", options: ["NDRE", "NDVI", "Kò sí", "VARI"], answer: 3, why: "VARI ń lo ìlà green, red àti blue nìkan." },
          { objective: "O3", q: "Zonal Statistics nínú QGIS ń fún ọ ní:", options: ["Àsọtẹ́lẹ̀ ojú ọjọ́", "Nọ́mbà bí ìpíndọ́gba àmì fún agbègbè kọ̀ọ̀kan", "Ìwé àṣẹ awakọ̀ drone", "Iye owó irúgbìn"], answer: 1, why: "Ó ń ṣe àkópọ̀ iye pixel inú agbègbè kọ̀ọ̀kan." }
        ]
      }
    },
    {
      name: "Orí 2: Iṣẹ́ àgbẹ̀ ìpéye",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe máàpù ìlànà iṣẹ́",
          minutes: 6,
          goal: "Yí àwọn agbègbè padà sí máàpù ìlànà iṣẹ́ pẹ̀lú ìwọ̀n tàbí iṣẹ́ fún agbègbè kọ̀ọ̀kan.",
          text: [
            "Máàpù ìlànà iṣẹ́ (prescription map) ń sọ fún ẹ̀rọ tàbí òṣìṣẹ́ ohun tí wọ́n máa ṣe ní agbègbè kọ̀ọ̀kan. Bẹ̀rẹ̀ láti ohun tó fà á, kì í ṣe láti àwọ̀: lo àyẹ̀wò lórí ilẹ̀ àti, níbi tí ó bá ṣeé ṣe, àyẹ̀wò ilẹ̀ láti mọ ìdí tí agbègbè kọ̀ọ̀kan fi yàtọ̀. Lẹ́yìn náà yan iṣẹ́ kan fún agbègbè kọ̀ọ̀kan: ajílẹ̀ tó pọ̀ sí i tàbí tó dín kù, ìwọ̀n irúgbìn mìíràn, àtúngbìn, ṣíṣe ọ̀nà omi, pípa èpò, tàbí kò sí ìyípadà.",
            "Ìwọ̀n ń wá láti ìmọ̀ ọ̀gbìn, kì í ṣe láti drone. Lo èsì àyẹ̀wò ilẹ̀ àti ìmọ̀ràn agbègbè láti ilé-ẹ̀kọ́ ìwádìí orílẹ̀-èdè rẹ tàbí iṣẹ́ ìtọ́sọ́nà àgbẹ̀ fún ọ̀gbìn àti agbègbè náà. Máàpù náà ń sọ ibi tí ìwọ̀n kọ̀ọ̀kan ń lọ nìkan. Jẹ́ kí iye ìwọ̀n kéré (méjì sí mẹ́rin) kí ó lè ṣeé ṣe.",
            "Fún ẹ̀rọ, gbé àwọn agbègbè jáde bí shapefile tàbí irú fáìlì tí ẹ̀rọ ìdarí (controller) gbà. Fún iṣẹ́ ọwọ́, tẹ̀ tàbí pín máàpù agbègbè tó rọrùn pẹ̀lú ìtọ́ni agbègbè kọ̀ọ̀kan ní gíráàmù fún ihò ọ̀gbìn kọ̀ọ̀kan tàbí àpò fún agbègbè kọ̀ọ̀kan, kí o sì sàmì sí àwọn agbègbè nínú oko. Ìlànà fífọ́n oògùn tàbí ajílẹ̀ tí drone máa ṣe nílò ìyọ̀ǹda ọkọ̀ òfuurufú àti ti oògùn kòkòrò tí orílẹ̀-èdè rẹ ń béèrè."
          ],
          steps: ["Fìdí ohun tó fà á múlẹ̀ ní agbègbè kọ̀ọ̀kan (àyẹ̀wò lórí ilẹ̀, àyẹ̀wò ilẹ̀).", "Yan iṣẹ́ kan fún agbègbè kọ̀ọ̀kan.", "Mú ìwọ̀n láti àyẹ̀wò ilẹ̀ àti ìmọ̀ràn agbègbè.", "Lo ìwọ̀n méjì sí mẹ́rin.", "Gbé e jáde fún ẹ̀rọ, tàbí ṣe máàpù agbègbè tí a tẹ̀ pẹ̀lú ìtọ́ni fún òṣìṣẹ́."],
          words: [["Máàpù ìlànà iṣẹ́ (prescription map)", "máàpù tí ó ń sọ fún ẹ̀rọ tàbí òṣìṣẹ́ iye tí wọ́n máa fi sí, tàbí ohun tí wọ́n máa ṣe, ní agbègbè kọ̀ọ̀kan."], ["Shapefile", "irú fáìlì GIS tí a sábà ń lò fún agbègbè àti ààlà."], ["Àyẹ̀wò ilẹ̀", "àyẹ̀wò ní ilé-ìwádìí (laboratory) fún oúnjẹ ọ̀gbìn inú ilẹ̀ àti bí ilẹ̀ ṣe kan tó (acidity)."]],
          slides: [
            { title: "Bẹ̀rẹ̀ láti ohun tó fà á", bullets: ["Ṣàyẹ̀wò agbègbè kọ̀ọ̀kan lórí ilẹ̀", "Àyẹ̀wò ilẹ̀ níbi tí ó bá ṣeé ṣe", "Lẹ́yìn náà yan iṣẹ́ kan"] },
            { title: "Ìwọ̀n ń wá láti ìmọ̀ ọ̀gbìn", bullets: ["Àyẹ̀wò ilẹ̀ àti ìmọ̀ràn agbègbè", "Máàpù ń sọ ibi, kì í ṣe iye", "Ìwọ̀n méjì sí mẹ́rin"] },
            { title: "Fi í jíṣẹ́", bullets: ["Ẹ̀rọ: shapefile tàbí fáìlì ẹ̀rọ ìdarí", "Iṣẹ́ ọwọ́: máàpù tí a tẹ̀, gíráàmù fún ihò kọ̀ọ̀kan", "Fífọ́n pẹ̀lú drone: ìyọ̀ǹda pọndandan"] }
          ],
          sources: [FAO_WHO_AERIAL, QGIS],
          tryIt: "Lo agbègbè mẹ́ta rẹ láti Ẹ̀kọ́ 3 láti kọ tábìlì ìlànà iṣẹ́: agbègbè, ààyè, ohun tó ṣeé ṣe kó fà á, iṣẹ́, ìwọ̀n (kọ \"láti ìmọ̀ràn agbègbè\" tí o kò bá ní ọ̀kan), àti bí òṣìṣẹ́ ṣe máa rí agbègbè náà.",
          youCanNow: "ṣe máàpù ìlànà iṣẹ́ tó ṣeé ṣe pẹ̀lú ìwọ̀n tàbí iṣẹ́ fún agbègbè kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O4", q: "Kí ni máàpù ìlànà iṣẹ́ ń fi hàn?", options: ["Àwọ̀ NDVI nìkan", "Ààlà oko", "Ohun tí a máa fi sí tàbí ṣe ní agbègbè kọ̀ọ̀kan", "Ọ̀nà ìfò drone"], answer: 2, why: "Máàpù ìlànà iṣẹ́ ń sọ fún ẹ̀rọ tàbí òṣìṣẹ́ ohun tí wọ́n máa ṣe ní agbègbè kọ̀ọ̀kan." },
            { objective: "O4", q: "Agbègbè kan dà bí aláìlágbára lórí máàpù. Kí ni o máa ṣe kí o tó yan iṣẹ́?", options: ["Wá ohun tó fà á nípa àyẹ̀wò lórí ilẹ̀ àti, níbi tí ó bá ṣeé ṣe, àyẹ̀wò ilẹ̀", "Fi ajílẹ̀ ìlọ́po méjì síbẹ̀", "Tún un gbìn lẹ́sẹ̀kẹsẹ̀", "Má ṣe kà á sí"], answer: 0, why: "Bẹ̀rẹ̀ láti ohun tó fà á, kì í ṣe láti àwọ̀; iṣẹ́ náà dá lórí ìdí tí agbègbè náà fi yàtọ̀." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣé ó ń mówó wá? Ìṣirò ìnáwó apá kan tó rọrùn",
          minutes: 6,
          goal: "Ṣírò bóyá iṣẹ́ àgbẹ̀ ìpéye kan ń mówó wá ní lílo ìṣirò ìnáwó apá kan.",
          text: [
            "Ìṣirò ìnáwó apá kan (partial budget) ń fi ohun tó yí padà nìkan wé ara wọn. Ní ẹ̀gbẹ́ kan: owó tó wọlé sí i (èso púpọ̀ sí i tí a tà) àti owó tí a pamọ́ (ajílẹ̀ tó dín kù níbi tí ó ti ń ṣòfò). Ní ẹ̀gbẹ́ kejì: ìnáwó tó pọ̀ sí i (iṣẹ́ drone, ohun èlò púpọ̀ sí i ní àwọn agbègbè kan, owó òṣìṣẹ́) àti owó tí a pàdánù. Tí ẹ̀gbẹ́ àkọ́kọ́ bá tóbi jù, ìyípadà náà ń mówó wá.",
            "Àpẹẹrẹ pẹ̀lú nọ́mbà àpẹẹrẹ ní owó shilling Kenya: oko àgbàdo hẹ́kítà 4 san KSh 6,000 fún ṣíṣe máàpù. Ìlànà iṣẹ́ náà gbé àpò ajílẹ̀ 2 kúrò ní agbègbè hẹ́kítà 1 tí omi ti bò, níbi tí ó ti ń ṣòfò, lọ sí agbègbè àárín hẹ́kítà 2, nítorí náà a kò ra ajílẹ̀ míì, àgbẹ̀ sì retí àpò àgbàdo 5 sí i láti agbègbè yẹn. Èrè: àpò 5 x iye owó àpò kan ní ọjà agbègbè. Ìnáwó: KSh 6,000 fún máàpù + owó òṣìṣẹ́ láti gbẹ́ ọ̀nà omi pẹ̀lú ọwọ́. Lo iye owó agbègbè gidi àti ìfojúsùn èso ìṣọ́ra.",
            "Fi ààlà hàn, nítorí èso àti iye owó máa ń yàtọ̀: ìṣirò ìṣọ́ra àti ìṣirò tó ṣeé ṣe jù. Tún ka àwọn èrè tí ó ṣòro láti díye lé, bí ìkìlọ̀ kùtùkùtù nípa kòkòrò fall armyworm (kòkòrò tó ń jẹ àgbàdo). Sọ òtítọ́ tí nọ́mbà kò bá mówó wá lórí oko kékeré; ẹgbẹ́ alájọṣepọ̀ (cooperative) tàbí iṣẹ́ àjọlò lè yí ìdáhùn padà."
          ],
          steps: ["Kọ owó tó wọlé sí i àti owó tí a pamọ́ sílẹ̀.", "Kọ ìnáwó tó pọ̀ sí i àti owó tí a pàdánù sílẹ̀.", "Lo iye owó agbègbè àti ìfojúsùn èso ìṣọ́ra.", "Ṣírò ìṣirò ìṣọ́ra àti ìṣirò tó ṣeé ṣe jù.", "Kọ ìdáhùn ní òtítọ́, pẹ̀lú ohun tí ó lè yí i padà."],
          words: [["Ìṣirò ìnáwó apá kan (partial budget)", "ìfiwéra tó rọrùn ti ìnáwó àti èrè tí ó yí padà nìkan nígbà tí o bá yí nǹkan kan padà."], ["Ibi tí kò sí èrè, kò sí àdánù (break-even)", "ibi tí èrè tó pọ̀ sí i dọ́gba pẹ̀lú ìnáwó tó pọ̀ sí i gẹ́lẹ́."]],
          slides: [
            { title: "Ohun tó yí padà nìkan", bullets: ["Àfikún: owó tó wọlé sí i, owó tí a pamọ́", "Àyọkúrò: ìnáwó tó pọ̀ sí i, owó tí a pàdánù", "Àfikún tóbi ju àyọkúrò lọ = ó ń mówó wá"] },
            { title: "Lo nọ́mbà gidi", bullets: ["Iye owó agbègbè fún àpò tàbí kg", "Ìfojúsùn èso ìṣọ́ra", "Iṣẹ́ drone, ohun èlò, owó òṣìṣẹ́"] },
            { title: "Sọ òtítọ́", bullets: ["Ìṣirò ìṣọ́ra àti èyí tó ṣeé ṣe jù", "Ka èrè tó ṣòro láti díye lé", "Oko kékeré? Iṣẹ́ àjọlò lè ṣèrànwọ́"] }
          ],
          tryIt: "Ṣe ìṣirò ìnáwó apá kan fún àpẹẹrẹ náà ní lílo iye owó gidi láti ọjà agbègbè rẹ (iye owó àpò àgbàdo, iye owó àpò ajílẹ̀, owó òṣìṣẹ́ lójúmọ́). Ṣírò ìṣirò ìṣọ́ra (àpò 3 sí i) àti ìṣirò tó ṣeé ṣe jù (àpò 5 sí i). Ṣé ó ń mówó wá?",
          youCanNow: "lo ìṣirò ìnáwó apá kan láti fi hàn bóyá iṣẹ́ àgbẹ̀ ìpéye kan ń mówó wá.",
          quickCheck: [
            { objective: "O5", q: "Nínú ìṣirò ìnáwó apá kan, èwo ni ìnáwó?", options: ["Owó iṣẹ́ ṣíṣe máàpù drone", "Èso púpọ̀ sí i tí a tà", "Owó ajílẹ̀ tí a pamọ́", "Iye owó tó ga jù fún ìkórè"], answer: 0, why: "Ìnáwó tó pọ̀ sí i bí iṣẹ́ drone àti owó òṣìṣẹ́ ń lọ sí ẹ̀gbẹ́ ìnáwó." },
            { objective: "O5", q: "Ìṣirò tó ṣeé ṣe jù rẹ ń mówó wá, ṣùgbọ́n ìṣirò ìṣọ́ra rẹ ń pàdánù owó. Kí ni o máa sọ fún àgbẹ̀?", options: ["Ìṣirò tó ṣeé ṣe jù nìkan", "Pé ó máa ń mówó wá nígbà gbogbo", "Àwọn ìṣirò méjèèjì ní òtítọ́, pẹ̀lú ohun tó fa ìyàtọ̀ náà", "Kò sí nǹkan nípa owó"], answer: 2, why: "Èso àti iye owó máa ń yàtọ̀, nítorí náà o máa fi ààlà hàn, o sì máa sọ òtítọ́ nígbà tí nọ́mbà bá súnmọ́ ara wọn." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sísọ èsì kí àwọn àgbẹ̀ lè ṣiṣẹ́ lé e lórí",
          minutes: 5,
          goal: "Fi èsì ìtúpalẹ̀ hàn ní ọ̀nà kúkúrú, tó yé, tí àgbẹ̀ máa ṣiṣẹ́ lé lórí.",
          text: [
            "Ìtúpalẹ̀ tó dára jù máa ṣòfò tí àgbẹ̀ kò bá lóye rẹ̀ tàbí tí kò bá gbẹ́kẹ̀lé e. Bẹ̀rẹ̀ pẹ̀lú ìdáhùn àti ohun tí a máa ṣe: \"Agbègbè C (igun ìsàlẹ̀ lẹ́gbẹ̀ẹ́ ọ̀nà, nǹkan bí éékà 2) ti kún fún omi. Gbẹ́ ọ̀nà omi kí o tó fi ajílẹ̀ kejì sí i. Má ṣe fi ajílẹ̀ síbẹ̀ ní àsìkò yìí.\" Lẹ́yìn náà fi máàpù hàn pẹ̀lú àwọn agbègbè ní àwọ̀ tó rọrùn àti àwọn àmì ilẹ̀ tí wọ́n mọ̀.",
            "Lo ọ̀nà àti èdè tí àgbẹ̀ ń lò: ojú-ewé tí a tẹ̀, àwòrán àti ọ̀rọ̀ kúkúrú lórí WhatsApp tàbí SMS, tàbí ọ̀rọ̀ ohùn (voice note) ní Kiswahili, Hausa, Yorùbá, Igbo tàbí èdè ìbílẹ̀ míì. Lo ìwọ̀n agbègbè (éékà, àpò, debe) pẹ̀lú hẹ́kítà àti kìlógíráàmù. Jẹ́ kí nọ́mbà kéré.",
            "Fi hàn bí ó ṣe dá ọ lójú tó, àti ohun tí a ti fìdí rẹ̀ múlẹ̀ lórí ilẹ̀. Sọ pé ẹ lè jọ rìn yí oko ká. Ẹ fohùn ṣọ̀kan lórí ohun tí ẹ máa ṣàyẹ̀wò nígbà míì, kí o sì kọ ohun tí àgbẹ̀ ṣe sílẹ̀, kí ìtúpalẹ̀ tó kàn lè fi hàn bóyá ó ṣiṣẹ́. Pa dátà àgbẹ̀ mọ́ ní àdáni, kí o sì pín in pẹ̀lú àṣẹ wọn nìkan."
          ],
          steps: ["Kọ ìdáhùn àti ohun tí a máa ṣe ní àkọ́kọ́, agbègbè kan lẹ́yìn èkejì.", "Fi máàpù tó rọrùn hàn pẹ̀lú àwọn àmì ilẹ̀.", "Lo ọ̀nà, èdè àti ìwọ̀n àgbẹ̀.", "Sọ bí ó ṣe dá ọ lójú tó àti ohun tí a fìdí rẹ̀ múlẹ̀.", "Ẹ fohùn ṣọ̀kan lórí àyẹ̀wò àtẹ̀lé, kí o sì kọ ohun tí àgbẹ̀ ṣe sílẹ̀."],
          words: [["Àmì ilẹ̀ (landmark)", "nǹkan tí àwọn ènìyàn mọ̀, bí ọ̀nà, igi, ṣọ́ọ̀bù tàbí odò, tí a fi ń wá ibi kan."], ["Àyẹ̀wò àtẹ̀lé (follow-up)", "àyẹ̀wò lẹ́yìn náà láti rí bóyá iṣẹ́ náà ṣiṣẹ́."]],
          slides: [
            { title: "Ìdáhùn àti iṣẹ́ ní àkọ́kọ́", bullets: ["Agbègbè C, igun ìsàlẹ̀ lẹ́gbẹ̀ẹ́ ọ̀nà", "Gbẹ́ ọ̀nà omi kí o tó fi ajílẹ̀ kejì sí i", "Lẹ́yìn náà máàpù"] },
            { title: "Ọ̀nà tiwọn, èdè tiwọn", bullets: ["Ojú-ewé tí a tẹ̀, WhatsApp, SMS, ọ̀rọ̀ ohùn", "Kiswahili, Hausa, Yorùbá, Igbo àti àwọn míì", "Éékà, àpò, debe pẹ̀lú hẹ́kítà"] },
            { title: "Kọ́ ìgbẹ́kẹ̀lé", bullets: ["Sọ bí ó ṣe dá ọ lójú tó", "Ẹ jọ rìn yí oko ká", "Ẹ fohùn ṣọ̀kan lórí àyẹ̀wò àtẹ̀lé; pa dátà mọ́ ní àdáni"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ìtúpalẹ̀ rẹ kí o sì kọ èsì ojú-ewé kan fún àgbẹ̀: ìpéye àti bí a ṣe ṣàyẹ̀wò rẹ̀, àmì náà àti ìdí, tábìlì agbègbè àti iye tí a kà, máàpù ìlànà iṣẹ́, ìṣirò ìnáwó apá kan, àti àwọn iṣẹ́ ní ọ̀rọ̀ tó rọrùn pẹ̀lú ọjọ́ àyẹ̀wò àtẹ̀lé.",
          youCanNow: "fi ìtúpalẹ̀ drone jíṣẹ́ bí iṣẹ́ tó yé, tí a gbẹ́kẹ̀lé, tí àgbẹ̀ lè tẹ̀lé.",
          quickCheck: [
            { objective: "O6", q: "Báwo ni èsì fún àgbẹ̀ ṣe yẹ kí ó bẹ̀rẹ̀?", options: ["Pẹ̀lú ìlànà ìṣirò àmì", "Pẹ̀lú ìdáhùn àti ohun tí wọ́n máa ṣe", "Pẹ̀lú irú drone tí a lò", "Pẹ̀lú tábìlì gígùn"], answer: 1, why: "Bíbẹ̀rẹ̀ pẹ̀lú ìdáhùn àti ohun tí a máa ṣe ń ran àgbẹ̀ lọ́wọ́ láti ṣiṣẹ́ lé e lórí." },
            { objective: "O6", q: "Àgbẹ̀ náà ń ka Kiswahili, ó sì ń lo WhatsApp. Báwo ni o ṣe máa fi èsì ránṣẹ́?", options: ["PDF gígùn ní èdè Gẹ̀ẹ́sì nípa email", "Fáìlì dátà tí a kò tíì ṣe", "Kò sí; sọ fún ọ́fíìsì oko ńlá nìkan", "Àwòrán máàpù agbègbè pẹ̀lú ọ̀rọ̀ kúkúrú tàbí ọ̀rọ̀ ohùn ní Kiswahili"], answer: 3, why: "Lo ọ̀nà àti èdè tí àgbẹ̀ ń lò, pẹ̀lú nọ́mbà díẹ̀ àti ìwọ̀n agbègbè." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Iṣẹ́ àgbẹ̀ ìpéye",
        questions: [
          { objective: "O4", q: "Níbo ni ìwọ̀n ajílẹ̀ nínú máàpù ìlànà iṣẹ́ ti yẹ kí ó wá?", options: ["Láti àwọ̀ máàpù drone nìkan", "Láti àyẹ̀wò ilẹ̀ àti ìmọ̀ràn ìmọ̀ ọ̀gbìn agbègbè", "Láti àfojúdá", "Láti ilé-iṣẹ́ tó ṣe drone"], answer: 1, why: "Máàpù ń fi ibi hàn; ìmọ̀ ọ̀gbìn ló ń sọ iye." },
          { objective: "O4", q: "Ìwọ̀n mélòó ló ṣeé ṣe nínú ọ̀pọ̀ máàpù ìlànà iṣẹ́?", options: ["Méjì sí mẹ́rin", "Àádọ́ta", "Ọ̀kan fún ọ̀gbìn kọ̀ọ̀kan", "Kò sí"], answer: 0, why: "Ìwọ̀n díẹ̀ rọrùn fún òṣìṣẹ́ àti ẹ̀rọ láti lò." },
          { objective: "O5", q: "Ìṣirò ìnáwó apá kan ń fi àwọn wọ̀nyí wé ara wọn:", options: ["Gbogbo ìnáwó oko fún ọdún mẹ́wàá", "Ìnáwó àti èrè tí ó yí padà nìkan", "Iye owó drone nìkan", "Iye owó ọ̀gbìn nìkan"], answer: 1, why: "Ó dá lórí ohun tí ìyípadà náà fi kún tàbí yọ kúrò." },
          { objective: "O6", q: "Èwo ni gbólóhùn ìbẹ̀rẹ̀ tó dára jù fún èsì àgbẹ̀?", options: ["Ìpíndọ́gba NDRE polygon 3 jẹ́ 0.31", "Ìròyìn ṣíṣe máàpù ní àwòrán 412", "A lo QGIS 3", "Agbègbè C lẹ́gbẹ̀ẹ́ ọ̀nà ti kún fún omi: gbẹ́ ọ̀nà omi kí o tó fi ajílẹ̀ kejì sí i"], answer: 3, why: "Bẹ̀rẹ̀ pẹ̀lú ìdáhùn àti ohun tí a máa ṣe ní ọ̀rọ̀ tí wọ́n mọ̀." },
          { objective: "O5", q: "Ìṣirò ìnáwó apá kan fi hàn pé ìyípadà náà kò mówó wá lórí oko éékà 1. O yẹ kí o:", options: ["Yí nọ́mbà padà", "Fi èsì náà pamọ́", "Sọ ọ́ ní òtítọ́ kí o sì ronú nípa iṣẹ́ àjọlò tàbí ti ẹgbẹ́ alájọṣepọ̀", "Fi iye owó ṣe ìlọ́po méjì"], answer: 2, why: "Èsì tó jẹ́ òtítọ́ ń kọ́ ìgbẹ́kẹ̀lé; àjọlò lè yí ọ̀rọ̀ owó padà." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Drone fún Iṣẹ́ Àgbẹ̀: Ìtúpalẹ̀ Dátà àti Iṣẹ́ Àgbẹ̀ Ìpéye",
    questions: [
      { objective: "O1", q: "GNSS lásán ti drone sábà máa ń fi máàpù sí:", options: ["Ipò tó péye pátápátá", "Ipò tó yàtọ̀ ní mítà díẹ̀", "Ipò tó yàtọ̀ ní kìlómítà", "Ipò tó dojú dé"], answer: 1, why: "Láìsí àtúnṣe, àṣìṣe ipò jẹ́ mítà díẹ̀." },
      { objective: "O1", q: "Àwọn àmì ìdarí ilẹ̀ (GCP) ni:", options: ["Bátìrì drone", "Òṣìṣẹ́ oko", "Àmì tí a fi sí ilẹ̀ tí a wọn ipò rẹ̀ dáadáa", "Irú àmì ewéko kan"], answer: 2, why: "GCP ń tún ipò máàpù ṣe nígbà ṣíṣe máàpù." },
      { objective: "O1", q: "RTK àti PPK ni:", options: ["Ọ̀nà tí ó ń tún ipò drone ṣe fún ìpéye gíga", "Àrùn ọ̀gbìn", "Irú ajílẹ̀", "Orúkọ ilé-iṣẹ́ kámẹ́rà"], answer: 0, why: "Wọ́n ń tún ipò GNSS ṣe nígbà ìfò tàbí lẹ́yìn rẹ̀." },
      { objective: "O1", q: "Kí ló dé tí máàpù ọjọ́ ọ̀tọ̀ọ̀tọ̀ fi gbọ́dọ̀ bá ara wọn mu?", options: ["Fún àwọ̀", "Láti dín ààyè ìpamọ́ kù", "Ètò náà ló béèrè fún un", "Láti fi ibi kan náà wé ara rẹ̀ bí àkókò ṣe ń lọ"], answer: 3, why: "Máàpù tí kò bá ara wọn mu máa ń fi ìyípadà èké hàn." },
      { objective: "O1", q: "Ìròyìn ṣíṣe máàpù ń sọ fún ọ:", options: ["Iye owó ọ̀gbìn", "Àwòrán tí a lò, ìkìlọ̀ àti GSD", "Orúkọ àgbẹ̀", "Ojú ọjọ́"], answer: 1, why: "Ó ń ṣe àkópọ̀ dídára máàpù tí a so pọ̀." },
      { objective: "O2", q: "Kíkún (saturation) NDVI túmọ̀ sí:", options: ["Àmì náà kò fi ìyàtọ̀ hàn mọ́ nínú ewé tó pọ̀", "Kámẹ́rà ti rin", "Bátìrì ti kún", "Máàpù ní ihò"], answer: 0, why: "Iye máa ń kóra jọ sókè nínú ewéko tó pọ̀." },
      { objective: "O2", q: "Ìlà wo ni NDRE ń lò dípò red?", options: ["Blue", "Thermal (ooru)", "Red edge", "Green"], answer: 2, why: "NDRE = (NIR - RedEdge) / (NIR + RedEdge)." },
      { objective: "O2", q: "Excess Green (2G - R - B) wúlò fún:", options: ["Wíwọn pH ilẹ̀", "Àsọtẹ́lẹ̀ ojú ọjọ́", "Kíka owó", "Yíya ọ̀gbìn àwọ̀ ewé sọ́tọ̀ kúrò lára ilẹ̀ nínú àwòrán RGB"], answer: 3, why: "Ó ń fi ewéko àwọ̀ ewé hàn kedere ju ilẹ̀ lọ." },
      { objective: "O2", q: "Fún ìyàtọ̀ nitrogen nínú kọfí tí ewé rẹ̀ pọ̀, yan:", options: ["Excess Green", "NDRE", "Kò sí àmì kankan", "Thermal nìkan"], answer: 1, why: "NDRE ṣì ní ìmọ̀lára níbi tí NDVI ti kún." },
      { objective: "O2", q: "Àmì yòówù tí o bá lò, o tún yẹ kí o:", options: ["Wo máàpù àwọ̀ gidi kí o sì fìdí rẹ̀ múlẹ̀ lórí ilẹ̀", "Pa àwọn àwòrán àkọ́kọ́ rẹ́", "Má ṣe ka àgbẹ̀ sí", "Lo ọjọ́ kan ṣoṣo títí láé"], answer: 0, why: "Àmì jẹ́ ìtọ́ka; àyẹ̀wò lórí ilẹ̀ ló ń fìdí rẹ̀ múlẹ̀." },
      { objective: "O3", q: "Yíyí pixel tí a ti pín sí ẹgbẹ́ padà sí agbègbè máa ń ṣe:", options: ["Bátìrì", "Àmì point nìkan", "Polygon", "Fídíò"], answer: 2, why: "Agbègbè jẹ́ àwòrán polygon tí ó ní ààyè." },
      { objective: "O3", q: "Kí ló dé tí a fi ń pa àwọn ègé kékeré rẹ́ kúrò nínú agbègbè?", options: ["Láti yí ọ̀gbìn padà", "Fún àwọ̀", "Láti lo ààyè ìpamọ́ púpọ̀ sí i", "Òṣìṣẹ́ kò lè ṣe iṣẹ́ lórí ègé kékeré"], answer: 3, why: "Agbègbè tó ṣeé ṣe gbọ́dọ̀ tóbi tó láti ṣiṣẹ́ lé lórí." },
      { objective: "O3", q: "Iye igi tí a kà láti máàpù drone yẹ kí ó jẹ́:", options: ["Èyí tí a ti ṣàyẹ̀wò lórí àpẹẹrẹ ilẹ̀, pẹ̀lú iye àṣìṣe tí a sọ", "Èyí tí a gbẹ́kẹ̀lé láìṣàyẹ̀wò", "Ìlọ́po méjì", "Àṣírí"], answer: 0, why: "Àyẹ̀wò lórí ilẹ̀ ń fi hàn bí iye náà ṣe péye tó." },
      { objective: "O4", q: "Máàpù ìlànà iṣẹ́ ń sọ:", options: ["Drone tí o máa rà", "Ohun tí a máa fi sí tàbí ṣe ní agbègbè kọ̀ọ̀kan", "Ojú ọjọ́", "Owó tí àgbẹ̀ ń wọlé"], answer: 1, why: "Ó ń tọ́ òṣìṣẹ́ tàbí ẹ̀rọ ní agbègbè kan lẹ́yìn èkejì." },
      { objective: "O4", q: "Kí o tó yan iṣẹ́ fún agbègbè aláìlágbára, o yẹ kí o:", options: ["Fọ́n oògùn síbẹ̀", "Fi ajílẹ̀ tó pọ̀ jù lọ síbẹ̀", "Fìdí ohun tó fà á múlẹ̀ nípa àyẹ̀wò lórí ilẹ̀ àti àyẹ̀wò ilẹ̀", "Yọ ọ́ kúrò lórí máàpù"], answer: 2, why: "Iṣẹ́ náà gbọ́dọ̀ tún ohun gidi tó fà á ṣe." },
      { objective: "O4", q: "Fún iṣẹ́ ọwọ́, ọ̀nà tó dára jù láti fúnni ní ìlànà iṣẹ́ ni:", options: ["Shapefile nìkan", "Àkọsílẹ̀ iye pixel", "Spreadsheet ipò (coordinate) nìkan", "Máàpù agbègbè tó rọrùn pẹ̀lú gíráàmù fún ihò kọ̀ọ̀kan tàbí àpò fún agbègbè kọ̀ọ̀kan"], answer: 3, why: "Òṣìṣẹ́ nílò ìtọ́ni tó rọrùn tó sì ṣeé ṣe." },
      { objective: "O5", q: "Nínú ìṣirò ìnáwó apá kan, owó ajílẹ̀ tí a pamọ́ jẹ́:", options: ["Èrè", "Ìnáwó", "Kò jẹ́ nǹkan kan", "Owó tí a pàdánù"], answer: 0, why: "Owó tí a pamọ́ wà ní ẹ̀gbẹ́ èrè." },
      { objective: "O5", q: "Kí ló dé tí a fi ń ṣírò ìṣirò ìṣọ́ra àti èyí tó ṣeé ṣe jù?", options: ["Láti da àgbẹ̀ láàmú", "Nítorí èso àti iye owó máa ń yàtọ̀", "Òfin ló béèrè fún un", "Láti lo ìwé púpọ̀ sí i"], answer: 1, why: "Ààlà ń fi ewu hàn ní òtítọ́." },
      { objective: "O6", q: "Ìwọ̀n wo ló ń ran ọ̀pọ̀ àgbẹ̀ kékeré lọ́wọ́ láti lóye èsì?", options: ["Kìlómítà onígun mẹ́rin nìkan", "Pixel nìkan", "Éékà, àpò àti debe pẹ̀lú hẹ́kítà", "Ìkọ̀wé sáyẹ́ǹsì nìkan"], answer: 2, why: "Ìwọ̀n tí wọ́n mọ̀ ń jẹ́ kí èsì wúlò." },
      { objective: "O6", q: "Kí ló dé tí o fi máa kọ ohun tí àgbẹ̀ ṣe sílẹ̀ lẹ́yìn ìmọ̀ràn rẹ?", options: ["Láti ta dátà wọn", "Láti kún fọ́ọ̀mù kan", "Kò wúlò", "Kí ìtúpalẹ̀ tó kàn lè fi hàn bóyá ó ṣiṣẹ́"], answer: 3, why: "Àyẹ̀wò àtẹ̀lé ń pa ìyípo náà dé, ó sì ń mú ìmọ̀ràn dára sí i." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      1,
      5,
      8,
      10,
      12,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá ìtúpalẹ̀ yẹn ṣe kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      {
        name: "Ìpéye máàpù",
        objective: "O1",
        notYet: "Kò sọ ìpéye, tàbí kò ṣàyẹ̀wò dídára.",
        meets: "Ó sọ ìpéye máàpù àti bí a ṣe ṣàyẹ̀wò rẹ̀, ó sì ṣàyẹ̀wò dídára àwòrán nínú ìròyìn ṣíṣe máàpù.",
        exceeds: "Ó lo àwọn àmì àyẹ̀wò, ó sì sọ iye àṣìṣe tí ó wọ̀n."
      },
      {
        name: "Yíyan àmì",
        objective: "O2",
        notYet: "Kò sọ ìdí àmì náà, tàbí kò bá ọ̀gbìn tàbí kámẹ́rà mu.",
        meets: "Àmì náà bá ọ̀gbìn, ìpele àti kámẹ́rà mu, pẹ̀lú ìdí kúkúrú.",
        exceeds: "Ó fi àmì méjì wé ara wọn, ó sì fi hàn ìdí tí ó fi yan ọ̀kan."
      },
      {
        name: "Agbègbè àti kíka",
        objective: "O3",
        notYet: "Kò sí ìṣirò agbègbè, tàbí a kò ṣàyẹ̀wò iye tí a kà.",
        meets: "Ààyè àti ìpíndọ́gba àmì agbègbè kọ̀ọ̀kan, àti iye ọ̀gbìn tàbí igi tí a ṣàyẹ̀wò lórí àpẹẹrẹ ilẹ̀.",
        exceeds: "Ó fi agbègbè kan náà wé ara rẹ̀ ní ọjọ́ méjì."
      },
      {
        name: "Máàpù ìlànà iṣẹ́",
        objective: "O4",
        notYet: "Ìwọ̀n jẹ́ àfojúdá tàbí ìwọ̀n pọ̀ jù.",
        meets: "Ìwọ̀n tàbí iṣẹ́ méjì sí mẹ́rin fún agbègbè, láti ìmọ̀ràn agbègbè, tí ó so mọ́ ohun tó fà á tí a ṣàyẹ̀wò lórí ilẹ̀.",
        exceeds: "A gbé e jáde ní irú fáìlì tí ẹ̀rọ tàbí òṣìṣẹ́ lè lò."
      },
      {
        name: "Ìṣirò ìnáwó apá kan",
        objective: "O5",
        notYet: "Kò sí ìṣirò, tàbí ó ka àwọn nǹkan tí kò yí padà.",
        meets: "Ìṣirò ìnáwó apá kan pẹ̀lú ìṣirò ìṣọ́ra àti èyí tó ṣeé ṣe jù ní lílo iye owó agbègbè.",
        exceeds: "Ó sọ àwọn èrè tí ó ṣòro láti díye lé àti ìgbà tí iṣẹ́ àjọlò máa ṣèrànwọ́."
      },
      {
        name: "Èsì fún àgbẹ̀",
        objective: "O6",
        notYet: "Ó gùn ju ojú-ewé kan lọ tàbí ó bẹ̀rẹ̀ pẹ̀lú àlàyé ìmọ̀ ẹ̀rọ.",
        meets: "Ojú-ewé kan tí ó bẹ̀rẹ̀ pẹ̀lú iṣẹ́, ní ọ̀rọ̀ tó rọrùn àti ìwọ̀n agbègbè, pẹ̀lú bí ó ṣe dá ọ lójú tó.",
        exceeds: "A pèsè rẹ̀ ní èdè àti ọ̀nà tí àgbẹ̀ fúnra rẹ̀ ń lò, a sì fohùn ṣọ̀kan lórí àyẹ̀wò àtẹ̀lé."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ìtúpalẹ̀ náà",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn fi máàpù ìlànà iṣẹ́ tàbí ìròyìn agbègbè fún àgbẹ̀ tàbí oko ńlá kan láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Àwọn àgbẹ̀ tàbí oko ńlá tí wọ́n sọ pé àwọn ṣiṣẹ́ lé èsì drone lórí tí wọ́n sì kọ èsì rẹ̀ sílẹ̀",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gba ẹ̀kọ́ drone tàbí iṣẹ́ àgbẹ̀ ìpéye míì"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀ǹpútà alágbèéká (laptop) tí a ti fi QGIS ọ̀fẹ́ sí",
      "Dátà drone láti oko gidi, tàbí àpẹẹrẹ dátà ọ̀fẹ́",
      "Ìwọ̀n tí a dámọ̀ràn ní agbègbè láti iṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí ìwádìí, àti iye owó ohun èlò àti ọ̀gbìn ní agbègbè",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti parí ìtúpalẹ̀ àti èsì fún àgbẹ̀"
    ],
    facilitatorNotes: [
      "Ẹ jọ ṣe ìdánwò ṣáájú, lẹ́yìn náà ẹ ṣe ìgbésẹ̀ ìṣirò agbègbè ní tààrà nínú QGIS lórí àpẹẹrẹ dátà kan tí gbogbo yín ń lò.",
      "Má ṣe fúnni ní ìwọ̀n ajílẹ̀ tàbí irúgbìn fúnra rẹ; mú ìwọ̀n wá láti iṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí ìwádìí fún ọ̀gbìn agbègbè.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé ìlànà fífọ́n oògùn tàbí ajílẹ̀ pẹ̀lú drone nílò ìyọ̀ǹda ọkọ̀ òfuurufú àti ti oògùn kòkòrò.",
      "Lo dátà oko tí àgbẹ̀ ti gbà láti pín nìkan, kí o sì yọ orúkọ kúrò nínú àpẹẹrẹ kíláàsì.",
      "Fi rubric ṣe àmì fún ìtúpalẹ̀ náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
