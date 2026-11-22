"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-drones-intro.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems (àwọn òfin drone ní Kenya)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Ètò ayélujára KCAA fún drone (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems (àwọn òfin drone ní Nàìjíríà)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO àti ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO àti WHO: Ìtọ́sọ́nà fún fífọ́n oògùn apakòkòrò láti inú afẹ́fẹ́ (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-intro-yo",
  lang: "yo",
  translationOf: "agri-drones-intro",
  category: "Agriculture (Africa)",
  name: "Drone fún Àbójútó Oko 1: Ìfihàn, Òfin àti Ààbò",
  skills: "Ṣíṣàlàyé ohun tí drone ń ṣe lórí oko, Yíyan irú drone fún iṣẹ́ kan, Wíwá òfin àjọ ìrìnnà ojú-òfuurufú, Ṣíṣàyẹ̀wò ewu ibi tí a ó ti fò, Ṣíṣe ìpàdé ààbò ṣáájú fífò",
  outcome: "pinnu bóyá drone ni irinṣẹ́ tó yẹ fún ìṣòro oko kan, dárúkọ àjọ ìrìnnà ojú-òfuurufú àti àwọn ìwé tí o nílò kí o tó fò, kí o sì kọ ètò lílo drone tó rọrùn pẹ̀lú àkọsílẹ̀ àyẹ̀wò ààbò fún oko kan.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀, àwọn òṣìṣẹ́ ìtọ́ni àgbẹ̀ (extension officer), àwọn olókòwò àgbẹ̀ àti àwọn ọ̀dọ́ ní Kenya, Nàìjíríà àti káàkiri Áfíríkà tí wọ́n fẹ́ bẹ̀rẹ̀ sí í lo drone láti máa bójú tó irè oko, ẹran ọ̀sìn àti ilẹ̀. O kò nílò láti ní drone báyìí.",
    "Ní Orí 1, o máa kọ́ ohun tí drone lè ṣe àti ohun tí kò lè ṣe lórí oko, àwọn irú drone pàtàkì, àti bí o ṣe lè mọ ìgbà tí drone yẹ fún owó rẹ̀ ju rírìn oko lọ tàbí lílo àwòrán sátẹ́láìtì ọ̀fẹ́. Ní Orí 2, o máa kọ́ ẹni tí ó ń ṣe òfin drone ní orílẹ̀-èdè rẹ, àwọn ìwé tí wọ́n sábà máa ń béèrè, àti bí o ṣe lè ṣàyẹ̀wò ibi tí o ti máa fò, kí o sì sọ ètò fún ẹgbẹ́ rẹ kí ẹnikẹ́ni má bàa farapa.",
    "Òfin ni òfin drone, wọ́n sì máa ń yí padà. Ẹ̀kọ́ yìí kò ní sọ fún ọ láéláé pé o lè fò: ó ń fi hàn ọ́ bí o ṣe lè wá òfin ìjọba orílẹ̀-èdè rẹ kí o sì tẹ̀lé e. Ẹ̀kọ́ 1 ni nínú ẹ̀kọ́ mẹ́fà; àwọn ẹ̀kọ́ tó kàn ń kọ́ni ní fífò, yíya àwòrán, ìlera irè oko, iṣẹ́ àgbẹ̀ tó péye àti ṣíṣe àkóso ètò drone.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún: ka á, wo àwọn àwòrán ìfihàn, lẹ́yìn náà ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò lílo drone ojú-ewé kan fún oko gidi kan tàbí oko àpẹẹrẹ (fún àpẹẹrẹ eka 3 ti àgbàdo àti ẹ̀wà ní Nakuru, tàbí hẹ́kítà 5 ti ẹ̀gẹ́ ní Ìpínlẹ̀ Ọ̀yọ́): ìṣòro tí drone máa ràn lọ́wọ́, irú drone àti ìdí, àjọ ìrìnnà ojú-òfuurufú àti àwọn ìwé tí o gbọ́dọ̀ ṣàyẹ̀wò tàbí gbà, àwọn ewu tí o rí níbi náà, àti àkọsílẹ̀ àyẹ̀wò ààbò ṣáájú fífò tí ó ní ó kéré tán nǹkan mẹ́jọ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀, àwọn òṣìṣẹ́ ìtọ́ni àgbẹ̀, àwọn olókòwò àgbẹ̀ àti àwọn ọ̀dọ́ ní Kenya, Nàìjíríà àti káàkiri Áfíríkà tí wọ́n fẹ́ bẹ̀rẹ̀ sí í lo drone láti máa bójú tó irè oko, ẹran ọ̀sìn àti ilẹ̀. Ọ̀pọ̀ jù lọ kò tíì ní drone.",
    startingPoint: "Ọ̀pọ̀ ti rí drone nínú fídíò tàbí níbi ìfihàn, wọ́n sì máa ń rìn oko wọn láti wo irè oko. Díẹ̀ ló mọ drone àti kámẹ́rà tó bá iṣẹ́ oko kọ̀ọ̀kan mu, ìgbà tí drone yẹ fún owó rẹ̀, ẹni tí ó ń ṣe òfin drone ní orílẹ̀-èdè wọn, tàbí bí a ṣe ń ṣàyẹ̀wò ibi kan kí a sì sọ ètò fún ẹgbẹ́ ṣáájú fífò.",
    gap: "Àwọn ènìyàn ń ra drone tí kò bá iṣẹ́ wọn mu, wọ́n ń fò láìsí ìforúkọsílẹ̀ àti ìwé àṣẹ tí òfin béèrè, tàbí wọ́n ń fi ènìyàn àti ọkọ̀ òfuurufú sínú ewu. Mímọ ohun tí drone lè ṣe àti ohun tí kò lè ṣe, àwọn òfin, àti ààbò ìpìlẹ̀ níbi fífò ń jẹ́ kí àwọn akẹ́kọ̀ọ́ pinnu pẹ̀lú ọgbọ́n, kí wọ́n sì bẹ̀rẹ̀ ẹ̀kọ́ drone lọ́nà tí kò léwu tí ó sì bá òfin mu.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ drone",
      "Ẹ̀rọ: fóònù tí ó ní íńtánẹ́ẹ̀tì láti wá ojú-ewé drone ti àjọ ìrìnnà ojú-òfuurufú; kò sí ìdí fún drone",
      "Òfin ni òfin, wọ́n sì ń yí padà: ẹ̀kọ́ náà kò sọ pé akẹ́kọ̀ọ́ lè fò láéláé; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò òfin ìjọba orílẹ̀-èdè wọn",
      "Àkókò: ẹ̀kọ́ tí ó gba nǹkan bí ìṣẹ́jú 5, tí ó bá iṣẹ́ oko mu",
      "Ààbò àti ìkọ̀kọ̀: kò sí fífò nínú ẹ̀kọ́ yìí; má ṣe ya fídíò ènìyàn tàbí ilé"
    ],
    prerequisites: "Kò sí. Èyí ni Ẹ̀kọ́ 1 nínú ẹ̀kọ́ drone mẹ́fà."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ àwọn ìṣòro oko", action: "dá àwọn tí drone lè ràn lọ́wọ́ mọ̀ àti àwọn tí kò lè ràn lọ́wọ́", standard: "kí o sì dárúkọ ó kéré tán iṣẹ́ mẹ́rin tí ó lè ràn lọ́wọ́ àti méjì tí kò lè ṣe" },
    { id: "O2", condition: "Tí a bá fún ọ ní iṣẹ́ oko kan àti ìwọ̀n oko náà", action: "yan irú drone àti kámẹ́rà tó bá iṣẹ́ náà mu", standard: "pẹ̀lú ìdí fún yíyàn kọ̀ọ̀kan" },
    { id: "O3", condition: "Fún ìṣòro oko kan", action: "fi drone, àwòrán sátẹ́láìtì ọ̀fẹ́ àti rírìn oko wé ara wọn kí o sì yan irinṣẹ́ tó dára jù", standard: "kí o ka gbogbo owó tí ó máa ná, àti ìpinnu tí àwọn àwòrán náà máa yí padà" },
    { id: "O4", condition: "Fún orílẹ̀-èdè rẹ", action: "wá àjọ ìrìnnà ojú-òfuurufú kí o sì kọ àwọn ìwé drone tí ó lè béèrè sílẹ̀", standard: "láti orí ojú-òpó wẹ́ẹ̀bù tàbí ọ́fíìsì àjọ náà fúnra rẹ̀ nìkan" },
    { id: "O5", condition: "Ṣáájú fífò èyíkéyìí lórí oko", action: "rìn yí ibi náà ká kí o sì sàmì sí àwọn ewu àti ibi tí a kò gbọdọ̀ fò sí", standard: "kí o sì sọ fún àgbẹ̀ náà àti àwọn aládùúgbò ìgbà tí o máa fò" },
    { id: "O6", condition: "Ṣáájú fífò àti nígbà fífò", action: "ṣe ìpàdé ṣáájú fífò àti àyẹ̀wò ààbò, kí o sì sọ àwọn ìgbésẹ̀ àkọ́kọ́ nígbà pàjáwìrì", standard: "pẹ̀lú ó kéré tán nǹkan mẹ́jọ nínú àkọsílẹ̀ àyẹ̀wò" }
  ],
  chapters: [
    {
      name: "Orí 1: Drone lórí oko",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí drone lè ṣe fún oko",
          minutes: 5,
          goal: "Dárúkọ iṣẹ́ oko mẹ́rin tí drone lè ràn lọ́wọ́, àti méjì tí kò lè ṣe.",
          text: [
            "Drone jẹ́ ọkọ̀ òfuurufú kékeré tí kò sí awakọ̀ nínú rẹ̀. Ènìyàn kan ń wà á láti ilẹ̀ pẹ̀lú ẹ̀rọ ìdarí (remote controller) tàbí fóònù, tàbí kí ó ṣètò rẹ̀ láti fò ọ̀nà kan tí a ti yàn fúnra rẹ̀. Àwọn àjọ ìrìnnà ojú-òfuurufú ń pè é ní unmanned aircraft system (UAS) tàbí remotely piloted aircraft system (RPAS).",
            "Lórí oko, ọ̀pọ̀ drone ló ń gbé kámẹ́rà. Láti òkè, o lè rí gbogbo oko lẹ́ẹ̀kan: àwọn àlàfo tí irúgbìn kò ti hù, àwọn ibi tí ó pọ́n tàbí tí ó ń rọ, igun tí omi ti kún, ilẹ̀ tí omi ń gbá lọ, ọgbà tí ó ti bàjẹ́, àti ẹran tí kò sí níbi tí ó yẹ. FAO àti ITU (àwọn àjọ United Nations) ka àbójútó irè oko, ìkìlọ̀ ní kùtùkùtù, àbójútó kòkòrò, títọpa ẹran àti àbójútó igbó mọ́ àwọn ìlò pàtàkì lórí oko.",
            "Àwọn drone ńlá kan ń fọ́n oògùn tàbí ń fọ́n irúgbìn àti ajílẹ̀. Fífọ́n oògùn apakòkòrò pẹ̀lú drone jẹ́ iṣẹ́ pàtàkì tí ewu rẹ̀ ga jù, tí ó nílò àṣẹ tirẹ̀ láti ọ̀dọ̀ àjọ ìrìnnà ojú-òfuurufú àti àjọ tí ó ń ṣàkóso oògùn apakòkòrò, nítorí náà àbójútó nìkan ni ẹ̀kọ́ yìí ń kọ́ni.",
            "Drone kò lè sọ fún ọ ÌDÍ tí ibì kan fi pọ́n. Ó ń fi IBI tí o máa wò hàn ọ́. O ṣì máa rìn lọ síbẹ̀, wo ewé, ilẹ̀ àti kòkòrò, kí o sì pinnu ohun tí o máa ṣe. Kò sì lè fò nínú òjò líle tàbí afẹ́fẹ́ líle, bátìrì rẹ̀ sì sábà máa ń tán ṣáájú wákàtí kan."
          ],
          words: [["Drone", "ọkọ̀ òfuurufú kékeré tí a ń wà láìsí awakọ̀ nínú rẹ̀."], ["UAS / RPAS", "àwọn orúkọ ìjọba: unmanned aircraft system, remotely piloted aircraft system. Ọkọ̀ náà pẹ̀lú ẹ̀rọ ìdarí rẹ̀ àti ìsopọ̀ wọn."], ["Ṣíṣe àyẹ̀wò oko (scouting)", "rírìn inú oko láti wá ìṣòro bí kòkòrò, àrùn tàbí èpò."]],
          slides: [
            { title: "Drone ni", bullets: ["Ọkọ̀ òfuurufú kékeré tí kò sí awakọ̀ nínú rẹ̀", "A ń wà á láti ilẹ̀, tàbí ó ń fò ọ̀nà tí a ti yàn", "Orúkọ ìjọba rẹ̀ ni UAS tàbí RPAS"] },
            { title: "Ohun tí ó ń ràn lọ́wọ́", bullets: ["Rírí gbogbo oko lẹ́ẹ̀kan", "Wíwá àlàfo, ibi tí ó pọ́n tàbí tí ó ń rọ", "Rírí omi tí ó kún, ilẹ̀ tí omi ń gbá lọ, ọgbà tí ó bàjẹ́", "Kíka ẹran àti wíwá wọn"] },
            { title: "Ohun tí kò lè ṣe", bullets: ["Sọ ÌDÍ tí ibì kan fi ṣàìsàn: o ṣì máa rìn lọ síbẹ̀", "Fò nínú òjò líle tàbí afẹ́fẹ́ líle", "Dúró lókè fún ọ̀pọ̀ wákàtí lórí bátìrì kan"] },
            { title: "Fífọ́n oògùn yàtọ̀", bullets: ["Drone tí ń fọ́n oògùn nílò àṣẹ àfikún", "Àjọ ìrìnnà ojú-òfuurufú ÀTI àjọ oògùn apakòkòrò", "Àbójútó nìkan ni ẹ̀kọ́ yìí ń kọ́ni"] }
          ],
          sources: [FAO_ITU_DRONES, FAO_WHO_AERIAL],
          tryIt: "Ronú nípa oko kan tí o mọ̀. Kọ ìṣòro mẹ́ta sílẹ̀ lórí oko náà tí o lè RÍ láti inú afẹ́fẹ́, àti ìṣòro kan tí drone kò lè ràn lọ́wọ́ (fún àpẹẹrẹ, owó ọjà tí ó lọ sílẹ̀).",
          youCanNow: "ṣàlàyé ohun tí drone oko ń ṣe, dárúkọ àwọn iṣẹ́ tí ó ń ràn lọ́wọ́, kí o sì sọ ìdí tí o fi ṣì ń rìn oko.",
          quickCheck: [
            { objective: "O1", q: "Kí ni drone tí ó ní kámẹ́rà lè fi han àgbẹ̀?", options: ["Ìdí tí ewéko kan fi ń ṣàìsàn", "Orúkọ àrùn náà gan-an", "Ibi tí àlàfo, ibi tí ó pọ́n tàbí igun tí omi kún wà", "Iye tí wọ́n máa ta irè oko"], answer: 2, why: "Drone ń fi ibi tí o máa wò hàn; o ṣì máa rìn lọ síbẹ̀ láti mọ ìdí." },
            { objective: "O1", q: "Àgbẹ̀ kan fẹ́ fò drone kámẹ́rà nínú òjò líle láti wo omi tí ó kún. Kí ni o máa sọ fún un?", options: ["Fò ga sí i nínú òjò", "Dúró; drone kò lè fò nínú òjò líle, nítorí náà wò ó lẹ́yìn tí òjò bá dá", "Fò títí bátìrì yóò fi tán", "Fọ́n oògùn sí oko ní àkókò kan náà"], answer: 1, why: "Drone kò lè fò nínú òjò líle tàbí afẹ́fẹ́ líle." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yíyan irú drone tó yẹ",
          minutes: 5,
          goal: "So irú drone àti kámẹ́rà pọ̀ mọ́ iṣẹ́ oko kan.",
          text: [
            "Irú drone oko mẹ́ta pàtàkì ló wà. Multirotor ní àjẹ̀ (propeller) mẹ́rin tàbí jù bẹ́ẹ̀ lọ, bí ọkọ̀ hẹlikópítà kékeré. Ó lè gbéra láti ibi kékeré, ó lè dúró sójú kan lókè, ó sì rọrùn láti kọ́, ṣùgbọ́n kò lè bo ilẹ̀ púpọ̀ lórí bátìrì kan. Ó dára fún oko kékeré, ilé ewéko (greenhouse) àti àyẹ̀wò kíákíá.",
            "Drone fixed-wing dà bí ọkọ̀ òfuurufú kékeré. Ó ń fò lọ ní pẹ̀lẹ́, nítorí náà ó ń bo ilẹ̀ ńlá bí oko tíì hẹ́kítà 200 tàbí oko ẹran ọ̀sìn ńlá, ṣùgbọ́n ó nílò àyè láti gbéra àti láti balẹ̀, ó sì ṣòro láti wà. Drone hybrid (VTOL) ń gbéra tààrà sókè bí multirotor, lẹ́yìn náà ó ń fò bí ọkọ̀ òfuurufú.",
            "Kámẹ́rà ṣe pàtàkì bí drone náà. Kámẹ́rà àwọ̀ lásán (RGB) tó láti rí àlàfo, èpò, omi tí ó kún àti ẹran. Kámẹ́rà multispectral ń wọn ìmọ́lẹ̀ tí ojú kò lè rí, ó sì ń ràn wá lọ́wọ́ láti rí wàhálà ewéko ní kùtùkùtù. Kámẹ́rà thermal ń fi ooru hàn: ó wúlò fún àìtó omi, omi tí ń jò láti ẹ̀rọ ìbomirin, àti wíwá ẹran.",
            "Bẹ̀rẹ̀ kékeré. Ọ̀pọ̀ òṣìṣẹ́ ìtọ́ni àgbẹ̀ àti àwọn ọ̀dọ́ tí ń pèsè iṣẹ́ drone máa ń bẹ̀rẹ̀ pẹ̀lú multirotor kékeré tí ó ní kámẹ́rà RGB, wọ́n á kọ́ ọ dáadáa, lẹ́yìn náà wọ́n á fi àwọn kámẹ́rà míì kún un."
          ],
          steps: ["Kọ iṣẹ́ náà sílẹ̀: kí ni o nílò láti rí, báwo sì ni ilẹ̀ náà ṣe tóbi tó?", "Ilẹ̀ kékeré tàbí o nílò láti dúró sójú kan lókè: multirotor. Ilẹ̀ ńlá: fixed-wing tàbí hybrid.", "Yan kámẹ́rà: RGB fún ọ̀pọ̀ iṣẹ́, multispectral fún wàhálà ewéko ní kùtùkùtù, thermal fún ooru àti omi.", "Ṣàyẹ̀wò pé wọ́n gba drone náà láàyè, tí ó sì ṣeé forúkọ sílẹ̀ ní orílẹ̀-èdè rẹ kí o tó rà á."],
          words: [["Multirotor", "drone tí ó ní àjẹ̀ mẹ́rin tàbí jù bẹ́ẹ̀ lọ, tí ó lè dúró sójú kan lókè."], ["Fixed-wing", "drone tí ó rí bí ọkọ̀ òfuurufú kékeré, tí ó ń fò lọ ní pẹ̀lẹ́ tí ó sì ń bo ilẹ̀ ńlá."], ["Kámẹ́rà RGB", "kámẹ́rà àwọ̀ lásán (pupa, ewé, búlúù)."], ["Kámẹ́rà multispectral", "kámẹ́rà tí ó tún ń wọn ìmọ́lẹ̀ tí ojú kò lè rí, bí near-infrared."]],
          slides: [
            { title: "Irú drone oko mẹ́ta", bullets: ["Multirotor: ó ń dúró sójú kan, àyè kékeré, ilẹ̀ kékeré", "Fixed-wing: ó ń fò lọ ní pẹ̀lẹ́, ilẹ̀ ńlá, ó nílò àyè láti gbéra", "Hybrid (VTOL): ó ń gbéra tààrà sókè, ó ń fò bí ọkọ̀ òfuurufú"] },
            { title: "Irú kámẹ́rà mẹ́ta", bullets: ["RGB: àwọ̀ lásán, ó tó fún ọ̀pọ̀ iṣẹ́", "Multispectral: ó ń fi wàhálà ewéko hàn ní kùtùkùtù", "Thermal: ó ń fi ooru, àìtó omi àti ẹran hàn"] },
            { title: "So drone pọ̀ mọ́ iṣẹ́", bullets: ["Oko àgbàdo eka 2: multirotor kékeré, RGB", "Oko tíì hẹ́kítà 200: fixed-wing tàbí hybrid", "Oko ẹran ní àfẹ̀mọ́jú: kámẹ́rà thermal láti wá màlúù"] },
            { title: "Bẹ̀rẹ̀ kékeré", bullets: ["Kọ́ ọ lórí multirotor kékeré tí ó ní RGB", "Fi kámẹ́rà míì kún un nígbà tí o bá nílò rẹ̀", "Ṣàyẹ̀wò òfin ìforúkọsílẹ̀ kí o tó rà á"] }
          ],
          tryIt: "Fún iṣẹ́ kọ̀ọ̀kan nínú ìwọ̀nyí, yan irú drone àti kámẹ́rà kí o sì kọ ìdí kan: (a) wíwo bí ẹ̀wà ṣe hù lórí eka 2, (b) yíya máàpù hẹ́kítà 150 ti ìrèké, (c) wíwá màlúù tí ó sọnù nínú igbó ní àfẹ̀mọ́jú.",
          youCanNow: "yan irú drone àti kámẹ́rà tó bá iṣẹ́ oko kan àti ìwọ̀n ilẹ̀ náà mu.",
          quickCheck: [
            { objective: "O2", q: "Kí ni drone multirotor?", options: ["Drone tí ó ní àjẹ̀ mẹ́rin tàbí jù bẹ́ẹ̀ lọ tí ó lè dúró sójú kan lókè", "Drone tí ó rí bí ọkọ̀ òfuurufú", "Sátẹ́láìtì", "Drone tí ó ń fọ́n oògùn nìkan"], answer: 0, why: "Multirotor ní àjẹ̀ mẹ́rin tàbí jù bẹ́ẹ̀ lọ, ó ń gbéra láti àyè kékeré, ó sì lè dúró sójú kan lókè." },
            { objective: "O2", q: "O fẹ́ wá ibi tí omi ti ń jò láti ẹ̀rọ ìbomirin lórí oko ẹ̀fọ́ àti èso. Kámẹ́rà wo ni o máa yàn?", options: ["Kámẹ́rà fóònù lásán lórí igi gígùn", "Kò sí kámẹ́rà", "Kámẹ́rà RGB nìkan ní alẹ́", "Kámẹ́rà thermal"], answer: 3, why: "Kámẹ́rà thermal ń fi ooru hàn, èyí tí ó wúlò fún àìtó omi àti omi tí ń jò láti ẹ̀rọ ìbomirin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣé drone yẹ fún owó rẹ̀? Drone, sátẹ́láìtì tàbí rírìn",
          minutes: 5,
          goal: "Pinnu bóyá drone, àwòrán sátẹ́láìtì ọ̀fẹ́ tàbí rírìn oko ni irinṣẹ́ tó dára jù fún ìṣòro oko kan.",
          text: [
            "Drone kì í ṣe irinṣẹ́ tó dára jù nígbà gbogbo. Fún ọgbà ẹ̀fọ́ ìdámẹ́rin eka, rírìn láàárín àwọn ìlà yára jù, ó sì jẹ́ ọ̀fẹ́. Fún gbogbo agbègbè ńlá kan, àwòrán sátẹ́láìtì ọ̀fẹ́ (fún àpẹẹrẹ láti àwọn sátẹ́láìtì Sentinel-2 ti Yúróòpù, tí a lè wò nínú àwọn irinṣẹ́ ayélujára ọ̀fẹ́) ń fi àwọn àpẹẹrẹ gbòòrò hàn ní ọjọ́ díẹ̀ díẹ̀, ṣùgbọ́n píksẹ́ẹ̀lì kọ̀ọ̀kan tó nǹkan bí mítà 10, ó ti tóbi jù láti rí ewéko kọ̀ọ̀kan.",
            "Drone wà láàárín méjèèjì. Ó ń rí nǹkan tí ó kéré tó sẹ̀ńtímítà díẹ̀, ní ọjọ́ tí o bá yàn, kódà lábẹ́ ìkùukùu tínrín. Ìyẹn ló jẹ́ kí ó dára fún oko àárín àti oko ńlá, fún ẹgbẹ́ àjùmọ̀ṣe (cooperative) tí ó ń pín drone kan láàárín oko ọ̀pọ̀ ọmọ ẹgbẹ́, àti fún irè oko olówó gíga bí tíì, kọfí, píà àti ẹ̀fọ́ àti èso.",
            "Ka gbogbo owó, kì í ṣe owó drone nìkan: owó ìforúkọsílẹ̀ àti ìwé àṣẹ, ìdánilẹ́kọ̀ọ́, bátìrì àti àjẹ̀ àfipamọ́, fóònù tàbí tablet, data, ìrìn-àjò àti àkókò rẹ. Lẹ́yìn náà béèrè: ìpinnu wo ni àwọn àwòrán náà máa yí padà, ṣé ìpinnu yẹn sì níye lórí ju owó náà lọ?"
          ],
          steps: ["Kọ ìpinnu tí o fẹ́ ṣe sílẹ̀ (fún àpẹẹrẹ: ibi tí o máa tún gbìn, tàbí apá oko wo ni o máa tọ́jú).", "Béèrè bí ilẹ̀ náà ṣe tóbi tó àti bí nǹkan tí o fẹ́ rí ṣe kéré tó.", "Fi rírìn, sátẹ́láìtì àti drone wé ara wọn fún ìwọ̀n àti àlàyé yẹn.", "Kọ gbogbo owó tí drone máa ná sílẹ̀, kí o sì fi wé iye ìpinnu tó dára jù."],
          words: [["Àwòrán sátẹ́láìtì", "àwòrán ilẹ̀ ayé tí a yà láti òfuurufú; àwọn ọ̀fẹ́ ń fi ilẹ̀ ńlá hàn ṣùgbọ́n àlàyé wọn kéré."], ["Resolution (ìkúnná àwòrán)", "bí nǹkan tí àwòrán lè fi hàn ṣe kéré tó; àwòrán drone lè fi sẹ̀ńtímítà díẹ̀ hàn, àwòrán sátẹ́láìtì ọ̀fẹ́ nǹkan bí mítà 10."]],
          slides: [
            { title: "Ọ̀nà mẹ́ta láti bójú tó oko", bullets: ["Rírìn: ọ̀fẹ́, ó dára jù fún oko kékeré, ó lọ́ra fún oko ńlá", "Sátẹ́láìtì: ọ̀fẹ́, ilẹ̀ ńlá, àlàyé nǹkan bí mítà 10", "Drone: àlàyé tó kéré tó sẹ̀ńtímítà, ní ọjọ́ tí o yàn"] },
            { title: "Ibi tí drone ti ń mérè wá", bullets: ["Oko àárín àti oko ńlá", "Ẹgbẹ́ àjùmọ̀ṣe tí ó ń pín drone kan", "Irè oko olówó gíga: tíì, kọfí, píà, ẹ̀fọ́"] },
            { title: "Ka gbogbo owó", bullets: ["Ìforúkọsílẹ̀, ìwé àṣẹ àti ìdánilẹ́kọ̀ọ́", "Bátìrì, àjẹ̀, fóònù tàbí tablet, data", "Ìrìn-àjò àti àkókò rẹ"] },
            { title: "Ìbéèrè pàtàkì", bullets: ["Ìpinnu wo ni àwọn àwòrán náà máa yí padà?", "Ṣé ìpinnu yẹn níye lórí ju owó náà lọ?"] }
          ],
          tryIt: "Mú ìṣòro oko kan láti Ẹ̀kọ́ 1. Kọ irinṣẹ́ tí o máa lò (rírìn, sátẹ́láìtì tàbí drone), ìdí rẹ̀, kí o sì kọ ó kéré tán owó márùn-ún tí ó máa ná tí o bá yan drone.",
          youCanNow: "pinnu bóyá drone yẹ fún owó rẹ̀ fún ìṣòro oko kan nípa fífi í wé rírìn àti àwòrán sátẹ́láìtì.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí àwòrán sátẹ́láìtì ọ̀fẹ́ kò fi kúnná tó láti rí ewéko kọ̀ọ̀kan?", options: ["Dúdú àti funfun nìkan ni wọ́n", "Ẹ̀ẹ̀kan lọ́dún ni wọ́n ń yà wọ́n", "Owó wọn pọ̀ jù", "Píksẹ́ẹ̀lì kọ̀ọ̀kan tó nǹkan bí mítà 10"], answer: 3, why: "Píksẹ́ẹ̀lì Sentinel-2 tó nǹkan bí mítà 10, nítorí náà wọ́n ń fi àpẹẹrẹ gbòòrò hàn, kì í ṣe ewéko kọ̀ọ̀kan." },
            { objective: "O3", q: "Àgbẹ̀ kan tí ó ní ọgbà ẹ̀fọ́ ìdámẹ́rin eka béèrè bóyá kí òun ra drone. Kí ni o máa dábàá?", options: ["Rìn láàárín àwọn ìlà; ó yára jù, ó sì jẹ́ ọ̀fẹ́ fún oko tí ó kéré tó bẹ́ẹ̀", "Ra drone fixed-wing tí ó tóbi jù", "Lo kámẹ́rà thermal lójoojúmọ́", "Gba drone tí ń fọ́n oògùn"], answer: 0, why: "Fún oko tí ó kéré gan-an, rírìn láàárín àwọn ìlà yára jù, kò sì náni lówó." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Drone lórí oko",
        questions: [
          { objective: "O1", q: "Máàpù drone fi ibì kan tí ó pọ́n hàn nínú oko àgbàdo. Kí ni o máa ṣe tẹ̀lé e?", options: ["Fọ́n oògùn sí gbogbo oko lẹ́ẹ̀kan", "Rìn lọ síbẹ̀ kí o sì wo ewéko, ilẹ̀ àti kòkòrò", "Pa á tì; máàpù drone máa ń ṣàṣìṣe nígbà gbogbo", "Tún fò títí ibẹ̀ yóò fi pòórá"], answer: 1, why: "Drone ń fi IBI tí o máa wò hàn; lórí ilẹ̀ ni o ti máa mọ ÌDÍ." },
          { objective: "O2", q: "Drone wo ló dára jù fún yíya máàpù oko tíì hẹ́kítà 200?", options: ["Drone ìṣeré ọmọdé", "Drone kékeré fún inú ilé", "Drone fixed-wing tàbí hybrid", "Kò sí drone tí ó lè ṣe èyí"], answer: 2, why: "Drone fixed-wing àti hybrid ń fò lọ ní pẹ̀lẹ́, wọ́n sì ń bo ilẹ̀ ńlá lórí bátìrì kan." },
          { objective: "O2", q: "Kámẹ́rà wo ló ràn lọ́wọ́ jù láti wá màlúù nínú igbó ní àfẹ̀mọ́jú?", options: ["Kámẹ́rà thermal", "Kámẹ́rà fóònù lásán nìkan", "Kámẹ́rà tí kò ní lẹ́ńsì", "Ẹnu ẹ̀rọ ìfọ́nnú oògùn"], answer: 0, why: "Kámẹ́rà thermal ń fi ooru ara ẹran hàn nígbà tí ìmọ́lẹ̀ kò tó." },
          { objective: "O4", q: "Fífọ́n oògùn apakòkòrò pẹ̀lú drone:", options: ["Kò nílò ìwé àfikún kankan", "Bákan náà ni pẹ̀lú yíya fọ́tò", "Nílò àṣẹ tirẹ̀ láti ọ̀dọ̀ àjọ ìrìnnà ojú-òfuurufú àti àjọ oògùn apakòkòrò", "Ó ṣeé ṣe níbikíbi tí oko bá jẹ́ tìrẹ"], answer: 2, why: "Fífọ́n oògùn jẹ́ iṣẹ́ pàtàkì tí ewu rẹ̀ ga jù, tí ó sì nílò àṣẹ àfikún." },
          { objective: "O3", q: "Fún ọgbà ẹ̀fọ́ ìdámẹ́rin eka, irinṣẹ́ tó dára jù sábà máa ń jẹ́:", options: ["Drone fixed-wing", "Drone multispectral", "Àwòrán sátẹ́láìtì", "Rírìn láàárín àwọn ìlà"], answer: 3, why: "Lórí oko tí ó kéré gan-an, rírìn yára jù, ó dín owó kù, ó sì ń fi nǹkan púpọ̀ hàn." }
        ]
      }
    },
    {
      name: "Orí 2: Òfin àti ààbò",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ẹni tí ó ń ṣe òfin drone ní orílẹ̀-èdè rẹ",
          minutes: 6,
          goal: "Wá àjọ ìrìnnà ojú-òfuurufú orílẹ̀-èdè rẹ kí o sì kọ àwọn ìwé drone tí ó lè béèrè sílẹ̀.",
          text: [
            "Orílẹ̀-èdè kọ̀ọ̀kan ló ń ṣàkóso ojú-òfuurufú tirẹ̀. Ní orílẹ̀-èdè kọ̀ọ̀kan, àjọ ìrìnnà ojú-òfuurufú (civil aviation authority) ló ń ṣe òfin drone tí ó sì ń mú kí wọ́n tẹ̀lé e. Ní Kenya, Kenya Civil Aviation Authority (KCAA) ni, lábẹ́ Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020. Ní Nàìjíríà, Nigeria Civil Aviation Authority (NCAA) ni, lábẹ́ Part 21 ti Nigeria Civil Aviation Regulations 2023. Àwọn orílẹ̀-èdè míì, bí Ghana, Rwanda, Uganda, Tanzania àti South Africa, ní àjọ tiwọn àti òfin tiwọn.",
            "Àwọn ìwé náà sábà máa ń ní: ìforúkọsílẹ̀ drone; ìwé àṣẹ láti kó o wọ orílẹ̀-èdè (import permit); ìwé àṣẹ awakọ̀ drone (remote pilot licence) fún ẹni tí ó ń fò ó (pàápàá fún iṣẹ́ owó tàbí iṣẹ́ tí ewu rẹ̀ ga); ìwé ẹ̀rí olùṣiṣẹ́ (operator certificate) fún ilé-iṣẹ́ tí ó ń fò fún owó (KCAA ń pè é ní Remote Air Operator Certificate, NCAA ń pè é ní RPAS Operator Certificate); àti àṣẹ fún àwọn irú fífò kan. KCAA àti NCAA méjèèjì ní ètò drone lórí ayélujára.",
            "Má ṣe gbára lé ọ̀rẹ́, ẹni tí ó ń ta drone tàbí ẹ̀rọ ayélujára alásopọ̀ (social media) fún òfin. Ka ojú-ewé drone ti àjọ náà fúnra rẹ̀, tàbí pe àjọ náà lórí fóònù tàbí fi ímeèlì ránṣẹ́ sí wọn. Owó àti ìgbésẹ̀ máa ń yí padà, nítorí náà ṣàyẹ̀wò wọn ní ọjọ́ tí o bá ń bẹ̀rẹ̀ ìbéèrè.",
            "Má ṣe fò láéláé kí o tó ní ìforúkọsílẹ̀, ìwé àṣẹ àti àwọn àṣẹ tí orílẹ̀-èdè rẹ béèrè fún fífò yẹn. Fífò láìsí wọn lè yọrí sí owó ìtanràn, gbígba drone lọ́wọ́ rẹ tàbí èyí tí ó burú jù, ó sì ń fi ènìyàn àti ọkọ̀ òfuurufú sínú ewu."
          ],
          steps: ["Wá àjọ ìrìnnà ojú-òfuurufú orílẹ̀-èdè rẹ kí o sì ṣí ojú-òpó wẹ́ẹ̀bù ìjọba rẹ̀.", "Wá ojú-ewé tí ó sọ̀rọ̀ nípa drone, UAS tàbí RPAS.", "Kọ sílẹ̀: ìforúkọsílẹ̀, ìwé àṣẹ ìkówọlé, ìwé àṣẹ awakọ̀, ìwé ẹ̀rí olùṣiṣẹ́, àti àṣẹ fífò: èwo ló kàn ọ́?", "Kọ owó àti ètò ayélujára náà sílẹ̀, àti ọjọ́ tí o ṣàyẹ̀wò.", "Tí nǹkan kan kò bá yé ọ, kàn sí àjọ náà fúnra rẹ̀."],
          words: [["Àjọ ìrìnnà ojú-òfuurufú (civil aviation authority)", "àjọ ìjọba tí ó ń ṣe òfin tí ó sì ń mú kí wọ́n tẹ̀lé e fún gbogbo ohun tí ó ń fò ní orílẹ̀-èdè kan."], ["Ìforúkọsílẹ̀", "kíkọ drone rẹ sílẹ̀ lọ́dọ̀ àjọ náà kí ó lè ní nọ́mbà ìjọba."], ["Ìwé àṣẹ awakọ̀ drone (RPL)", "ìwé àṣẹ ìjọba fún ẹni tí ó ń fò drone."], ["Ìwé ẹ̀rí olùṣiṣẹ́ (operator certificate)", "àṣẹ tí ilé-iṣẹ́ nílò láti fò drone fún owó."]],
          slides: [
            { title: "Orílẹ̀-èdè kọ̀ọ̀kan ní àjọ tirẹ̀", bullets: ["Kenya: KCAA, UAS Regulations 2020", "Nàìjíríà: NCAA, Nig.CARs 2023 Part 21", "Àwọn orílẹ̀-èdè míì: àjọ àti òfin tiwọn"] },
            { title: "Àwọn ìwé tí o lè nílò", bullets: ["Ìforúkọsílẹ̀ drone àti ìwé àṣẹ ìkówọlé", "Ìwé àṣẹ awakọ̀ fún ẹni tí ó ń fò ó", "Ìwé ẹ̀rí olùṣiṣẹ́ láti fò fún owó", "Àṣẹ fún àwọn irú fífò kan"] },
            { title: "Gba òfin láti orísun rẹ̀", bullets: ["Ka ojú-ewé drone ti àjọ náà fúnra rẹ̀", "Pe àjọ náà tàbí fi ímeèlì ránṣẹ́", "Ṣàyẹ̀wò owó àti ìgbésẹ̀ ní ọjọ́ tí o bá ń bẹ̀rẹ̀ ìbéèrè"] },
            { title: "Òfin wúrà", bullets: ["Kò sí ìforúkọsílẹ̀, ìwé àṣẹ tàbí àṣẹ: kò sí fífò", "Owó ìtanràn, gbígba drone, ewu fún ènìyàn àti ọkọ̀ òfuurufú"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Ṣí ojú-òpó wẹ́ẹ̀bù àjọ ìrìnnà ojú-òfuurufú orílẹ̀-èdè rẹ (KCAA, NCAA tàbí ti orílẹ̀-èdè rẹ). Wá ojú-ewé drone kí o sì kọ àwọn ìwé tí ó béèrè sílẹ̀, àdírẹ́sì ètò ayélujára rẹ̀, àti ọjọ́ òní.",
          youCanNow: "dárúkọ àjọ ìrìnnà ojú-òfuurufú rẹ, wá òfin drone rẹ̀, kí o sì kọ àwọn ìwé tí o gbọ́dọ̀ ní kí o tó fò sílẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ìwé àṣẹ awakọ̀ drone wà fún?", options: ["Drone fúnra rẹ̀", "Ẹni tí ó ń fò drone", "Ẹni tí ó ni oko", "Ṣọ́ọ̀bù tí ó ń ta drone"], answer: 1, why: "Ìwé àṣẹ awakọ̀ drone wà fún ẹni tí ó ń fò ó, pàápàá fún iṣẹ́ owó tàbí iṣẹ́ tí ewu rẹ̀ ga." },
            { objective: "O4", q: "Ẹni tí ó ń ta drone sọ pé o kò nílò ìwé kankan láti fò fún àwọn àgbẹ̀ tí ó ń sanwó. Kí ni o máa ṣe?", options: ["Gba ẹni tí ó ń tà á gbọ́", "Béèrè lórí social media", "Ṣàyẹ̀wò ojú-ewé drone ti àjọ ìrìnnà ojú-òfuurufú fúnra rẹ̀ tàbí kàn sí àjọ náà", "Fò kí o sì béèrè fún ìwé lẹ́yìn náà"], answer: 2, why: "Ojú-ewé tàbí ọ́fíìsì àjọ náà fúnra rẹ̀ nìkan ló ń fúnni ní òfin àti ìwé tí ó wà lọ́wọ́lọ́wọ́." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣàyẹ̀wò ewu ibi tí a ó ti fò",
          minutes: 5,
          goal: "Rìn yí oko ká kí o sì sàmì sí àwọn ewu àti ibi tí a kò gbọdọ̀ fò sí ṣáájú fífò èyíkéyìí.",
          text: [
            "Ṣáájú fífò èyíkéyìí, wo ibi náà lórí ilẹ̀ àti lórí máàpù. Ọ̀pọ̀ òfin ń pa drone mọ́ kúrò nítòsí pápákọ̀ òfuurufú àti ibi ìbalẹ̀ ọkọ̀ òfuurufú kékeré (airstrip), ibùdó ológun, ẹ̀wọ̀n, èrò púpọ̀ àti agbègbè ìjọba. Fún àpẹẹrẹ, Part 21 ti Nàìjíríà ní òfin ìjìnnà ní àyíká pápákọ̀ òfuurufú (aerodrome), àti òdiwọ̀n lórí fífò lórí ibi tí ènìyàn pọ̀ sí àti nítòsí àwọn ènìyàn tí kò sí lára iṣẹ́ náà. Òfin orílẹ̀-èdè rẹ ló ń sọ ìjìnnà gan-an; ṣàyẹ̀wò wọn.",
            "Lórí oko fúnra rẹ̀, wá wáyà iná mànàmáná, igi gíga, ọ̀pá ìbánisọ̀rọ̀ (telecom mast), ilé, ọ̀nà, ilé ìgbé, ilé-ìwé, ọjà àti ẹran tí ń jẹko. Wá ibi tí ó mọ́ tí ó sì tẹ́jú láti gbéra àti láti balẹ̀, tí ó jìnnà sí ènìyàn àti eruku.",
            "Bá àwọn ènìyàn sọ̀rọ̀: àgbẹ̀ náà, àwọn aládùúgbò àti ẹnikẹ́ni tí ó ń ṣiṣẹ́ nítòsí. Sọ fún wọn ìgbà tí o máa fò. Béèrè ṣáájú kí o tó fò lórí ilẹ̀ tàbí ilé ìgbé aládùúgbò. Bọ̀wọ̀ fún ìkọ̀kọ̀ àwọn ènìyàn: má ṣe ya fídíò ènìyàn tàbí ilé."
          ],
          steps: ["Ṣí app máàpù kí o sì wo agbègbè tí ó yí oko ká: ibi ìbalẹ̀ ọkọ̀ òfuurufú, ọ̀nà, ìlú, ibi pàtàkì.", "Ṣàyẹ̀wò òfin àjọ rẹ fún ìjìnnà sí pápákọ̀ òfuurufú àti sí ènìyàn.", "Rìn yí oko ká kí o sì sàmì sí wáyà iná, igi, ọ̀pá ìbánisọ̀rọ̀, ilé àti ẹran.", "Yan ibi tí ó mọ́ láti gbéra àti láti balẹ̀.", "Sọ fún àgbẹ̀ náà àti àwọn aládùúgbò ìgbà tí o máa fò, kí o sì béèrè kí o tó kọjá lórí ilẹ̀ wọn."],
          words: [["Ibi tí a kò gbọdọ̀ fò sí (no-fly zone)", "agbègbè tí wọn kò gba drone láàyè láìsí àṣẹ pàtàkì, bí nítòsí pápákọ̀ òfuurufú."], ["Ewu", "ohunkóhun tí ó lè fa ìpalára: wáyà iná, igi, ènìyàn, ẹran."], ["Aerodrome", "pápákọ̀ òfuurufú èyíkéyìí, ibi ìbalẹ̀ ọkọ̀ òfuurufú kékeré tàbí ibi ìbalẹ̀ hẹlikópítà."]],
          slides: [
            { title: "Wo ré kọjá oko", bullets: ["Pápákọ̀ òfuurufú, airstrip àti ibi ìbalẹ̀ hẹlikópítà", "Ibùdó ológun, ẹ̀wọ̀n, èrò púpọ̀", "Ṣàyẹ̀wò ìjìnnà gan-an ní orílẹ̀-èdè rẹ"] },
            { title: "Wo inú oko", bullets: ["Wáyà iná, igi gíga, ọ̀pá ìbánisọ̀rọ̀", "Ilé ìgbé, ọ̀nà, ilé-ìwé, ọjà", "Ẹran tí ń jẹko"] },
            { title: "Yan ibi tí kò léwu", bullets: ["Ibi tí ó mọ́, tí ó tẹ́jú láti gbéra àti láti balẹ̀", "Tí ó jìnnà sí ènìyàn àti eruku"] },
            { title: "Bá àwọn ènìyàn sọ̀rọ̀", bullets: ["Sọ fún àgbẹ̀ àti àwọn aládùúgbò ìgbà tí o máa fò", "Béèrè kí o tó kọjá lórí ilẹ̀ wọn", "Má ṣe ya fídíò ènìyàn tàbí ilé"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Ya máàpù oko kan ní ọ̀nà tó rọrùn. Sàmì sí ibi tí o máa ti gbéra, gbogbo ewu tí o rí, àwọn ilé tí ó wà nítòsí, ọ̀nà, àti airstrip èyíkéyìí láàárín kìlómítà díẹ̀ tí o lè rí lórí app máàpù.",
          youCanNow: "ṣàyẹ̀wò ibi kan fún ewu àti ibi tí a kò gbọdọ̀ fò sí, kí o sì yan ibi tí kò léwu láti gbéra.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni ewu tí o yẹ kí o wá lórí oko ṣáájú fífò?", options: ["Pápá tí ó mọ́ tí ó tẹ́jú", "Àgbàdo tí ó ní ìlera", "Ọ̀pá ìbánisọ̀rọ̀ tàbí igi gíga", "Òwúrọ̀ tí ó gbẹ tí oòrùn sì ràn"], answer: 2, why: "Ọ̀pá ìbánisọ̀rọ̀, igi, wáyà iná àti ilé jẹ́ ewu tí o máa sàmì sí ṣáájú fífò." },
            { objective: "O5", q: "Fífò tí o ṣètò máa kọjá lórí ilé ìgbé aládùúgbò kan. Kí ni o máa ṣe?", options: ["Kọ́kọ́ béèrè lọ́wọ́ aládùúgbò náà, má sì ṣe ya fídíò ènìyàn tàbí ilé", "Fò kíákíá kí wọ́n má bàa kíyè sí i", "Ya fídíò ilé náà fún ìròyìn", "Fò ní alẹ́"], answer: 0, why: "Béèrè kí o tó fò lórí ilẹ̀ tàbí ilé ìgbé aládùúgbò, kí o sì bọ̀wọ̀ fún ìkọ̀kọ̀ wọn." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ìpàdé ṣáájú fífò àti ohun tí o máa ṣe tí nǹkan bá bàjẹ́",
          minutes: 5,
          goal: "Ṣe ìpàdé ààbò ṣáájú fífò kí o sì mọ àwọn ìgbésẹ̀ àkọ́kọ́ nígbà pàjáwìrì.",
          text: [
            "Àwọn ẹgbẹ́ drone ọ̀jọ̀gbọ́n máa ń bẹ̀rẹ̀ fífò kọ̀ọ̀kan pẹ̀lú ìpàdé kúkúrú (briefing). Gbogbo ènìyàn ló ń gbọ́ ètò náà: ibi tí drone máa fò sí, bí ó ṣe máa ga tó, fún ìgbà mélòó, ta ni awakọ̀, ta ni olùṣọ́ (observer) tí ó ń wo ojú-ọ̀run àti drone, àti ibi tí ó máa balẹ̀ sí.",
            "Ṣàyẹ̀wò ojú-ọjọ́: kò sí fífò nínú òjò, ìjì àrá, afẹ́fẹ́ líle tàbí afẹ́fẹ́ tí ń jà lójijì, ìjì eruku tàbí ìmọ́lẹ̀ tí kò tó, àyàfi tí drone rẹ àti àwọn àṣẹ rẹ bá gbà á láàyè. Ṣàyẹ̀wò drone: bátìrì ti kún, àjẹ̀ kò bàjẹ́, kámẹ́rà mọ́, ẹ̀rọ ìdarí ti so pọ̀.",
            "Ẹ fohùn ṣọ̀kan lórí ohun tí ẹ máa ṣe tí nǹkan bá bàjẹ́: tí bátìrì bá ti fẹ́ tán, balẹ̀; tí ènìyàn tàbí ẹran bá rìn wá sábẹ́ drone, yí kúrò tàbí balẹ̀; tí ọkọ̀ òfuurufú tí ó ní awakọ̀ tàbí hẹlikópítà bá yọ, sọ̀kalẹ̀ kí o sì balẹ̀ lẹ́sẹ̀kẹsẹ̀. Tí drone bá sọnù tàbí jábọ́, jẹ́ kí agbègbè náà wà láìléwu, kí o sì ròyìn àwọn ìjàǹbá ńlá fún àjọ rẹ bí òfin rẹ̀ ṣe béèrè."
          ],
          steps: ["Sọ ètò fún ẹgbẹ́: agbègbè, gíga, àkókò, awakọ̀, olùṣọ́, ibi ìbalẹ̀.", "Ṣàyẹ̀wò ojú-ọjọ́: òjò, afẹ́fẹ́, eruku, ìmọ́lẹ̀.", "Ṣàyẹ̀wò drone: bátìrì, àjẹ̀, kámẹ́rà, ìsopọ̀ ẹ̀rọ ìdarí.", "Ẹ fohùn ṣọ̀kan lórí ètò pàjáwìrì: bátìrì tí ó fẹ́ tán, ènìyàn nísàlẹ̀, ọkọ̀ òfuurufú nítòsí, drone tí ó sọnù.", "Lẹ́yìn fífò, kọ ohun tí ó ṣẹlẹ̀ sínú ìwé àkọsílẹ̀ fífò (log book)."],
          words: [["Olùṣọ́ (observer)", "ọmọ ẹgbẹ́ tí ó ń wo drone àti ojú-ọ̀run, tí ó sì ń kìlọ̀ fún awakọ̀."], ["Ìpàdé ṣáájú fífò (briefing)", "ọ̀rọ̀ kúkúrú ṣáájú fífò kí gbogbo ènìyàn lè mọ ètò náà."], ["Ìwé àkọsílẹ̀ fífò (log book)", "àkọsílẹ̀ fífò kọ̀ọ̀kan: ọjọ́, ibi, àkókò, awakọ̀, ìṣòro."]],
          slides: [
            { title: "Sọ ètò fún ẹgbẹ́", bullets: ["Ibo, bí ó ṣe ga tó, fún ìgbà mélòó", "Ta ni awakọ̀, ta ni olùṣọ́", "Ibi tí ẹ máa balẹ̀ sí"] },
            { title: "Ṣàyẹ̀wò ojú-ọjọ́ àti drone", bullets: ["Kò sí òjò, ìjì, afẹ́fẹ́ líle tàbí eruku", "Bátìrì, àjẹ̀, kámẹ́rà, ẹ̀rọ ìdarí"] },
            { title: "Tí nǹkan bá bàjẹ́", bullets: ["Bátìrì fẹ́ tán: balẹ̀", "Ènìyàn tàbí ẹran nísàlẹ̀: yí kúrò tàbí balẹ̀", "Ọkọ̀ òfuurufú nítòsí: sọ̀kalẹ̀ kí o sì balẹ̀ lẹ́sẹ̀kẹsẹ̀"] },
            { title: "Lẹ́yìn fífò", bullets: ["Kọ ọ́ sínú ìwé àkọsílẹ̀ fífò", "Ròyìn àwọn ìjàǹbá ńlá bí òfin rẹ ṣe béèrè"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò lílo drone ojú-ewé kan fún oko kan: ìṣòro náà, irú drone àti kámẹ́rà, àjọ náà àti àwọn ìwé, àwọn ewu láti inú máàpù rẹ, àti àkọsílẹ̀ àyẹ̀wò ṣáájú fífò tí ó ní ó kéré tán nǹkan mẹ́jọ, pẹ̀lú ètò pàjáwìrì.",
          youCanNow: "sọ ètò fún ẹgbẹ́ ṣáájú fífò, ṣàyẹ̀wò ojú-ọjọ́ àti drone, kí o sì tẹ̀lé ètò pàjáwìrì tó rọrùn.",
          quickCheck: [
            { objective: "O6", q: "Kí ló ń ṣẹlẹ̀ nínú ìpàdé ṣáájú fífò?", options: ["Awakọ̀ ń gba owó lọ́wọ́ oníbàárà", "Ẹgbẹ́ ń kọ ìròyìn ìkẹyìn", "Wọ́n ń ta drone náà", "Gbogbo ènìyàn ń gbọ́ ibi tí drone máa fò sí, bí ó ṣe máa ga tó àti fún ìgbà mélòó, àti ẹni tí ó ń ṣe kí ni"], answer: 3, why: "Ìpàdé náà ń pín ètò, iṣẹ́ ẹnì kọ̀ọ̀kan àti ibi ìbalẹ̀ fún gbogbo ènìyàn." },
            { objective: "O6", q: "Hẹlikópítà kan yọ nígbà tí drone rẹ ń fò. Kí ni o máa ṣe?", options: ["Gòkè sí i láti rí i", "Sọ̀kalẹ̀ kí o sì balẹ̀ lẹ́sẹ̀kẹsẹ̀", "Máa ya fídíò lọ", "Fò lọ sọ́dọ̀ rẹ̀"], answer: 1, why: "Tí ọkọ̀ òfuurufú tí ó ní awakọ̀ tàbí hẹlikópítà bá yọ, drone máa sọ̀kalẹ̀ yóò sì balẹ̀ lẹ́sẹ̀kẹsẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Òfin àti ààbò",
        questions: [
          { objective: "O4", q: "Ta ni ó ń ṣe òfin drone tí ó sì ń mú kí wọ́n tẹ̀lé e ní Kenya?", options: ["Kenya Civil Aviation Authority (KCAA)", "Ọ́fíìsì iṣẹ́ àgbẹ̀ ti county", "Ẹni tí ó ń ta drone", "Olórí àdúgbò"], answer: 0, why: "KCAA ni àjọ ìrìnnà ojú-òfuurufú Kenya, òun ló sì ń ṣàkóso drone." },
          { objective: "O4", q: "Ọ̀rẹ́ kan sọ pé o lè fò drone tuntun lórí oko oníbàárà láìsí ìwé kankan. Kí ni o máa ṣe?", options: ["Fò; ọ̀rẹ́ rẹ ti ṣe é rí", "Ṣàyẹ̀wò òfin àjọ ìrìnnà ojú-òfuurufú ìjọba kí o sì gba ohun tí wọ́n béèrè kí o tó fò", "Fò ní kùtùkùtù kí ẹnikẹ́ni má bàa rí ọ", "Fò lórí ilẹ̀ oníbàárà nìkan"], answer: 1, why: "Òfin àjọ ìjọba nìkan ló kà; kò sí ìwé túmọ̀ sí kò sí fífò." },
          { objective: "O5", q: "Èwo ni ewu tí o máa sàmì sí ṣáájú fífò?", options: ["Ojú-ọ̀run tí ó mọ́", "Ibi gbígbẹ tí ó tẹ́jú láti gbéra", "Wáyà iná tí ó gba orí oko kọjá", "Bátìrì tí ó ti kún"], answer: 2, why: "Wáyà iná lè mú drone tàbí bà á jẹ́, ewu gidi sì ni." },
          { objective: "O6", q: "Nígbà fífò, ọkọ̀ òfuurufú kékeré kan yọ nítòsí. Kí ni awakọ̀ yẹ kí ó ṣe?", options: ["Gòkè sí i láti rí i dáadáa", "Máa ya fídíò lọ", "Fò lọ sọ́dọ̀ rẹ̀", "Sọ̀kalẹ̀ kí o sì balẹ̀ lẹ́sẹ̀kẹsẹ̀"], answer: 3, why: "Ọkọ̀ òfuurufú tí ó ní awakọ̀ ló máa ń ṣáájú nígbà gbogbo; mú drone sọ̀kalẹ̀ kí o sì kúrò lọ́nà rẹ̀." },
          { objective: "O6", q: "Kí ni iṣẹ́ olùṣọ́?", options: ["Wo drone àti ojú-ọ̀run kí o sì kìlọ̀ fún awakọ̀", "Fò drone náà", "Gba agbára sí bátìrì nìkan", "Ya fídíò àwọn aládùúgbò"], answer: 0, why: "Olùṣọ́ ń ṣọ́nà kí awakọ̀ lè gbájú mọ́ fífò láìléwu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Drone fún Àbójútó Oko 1: Ìfihàn, Òfin àti Ààbò",
    questions: [
      { objective: "O1", q: "Kí ni drone?", options: ["Ọkọ̀ òfuurufú kékeré tí kò sí awakọ̀ nínú rẹ̀", "Katakata (tractor)", "Sátẹ́láìtì ojú-ọjọ́", "App fóònù"], answer: 0, why: "A ń wa drone láti ilẹ̀ tàbí lórí ọ̀nà tí a ti yàn, kò sì sí ẹnikẹ́ni nínú rẹ̀." },
      { objective: "O1", q: "Iṣẹ́ oko wo ni drone kámẹ́rà lè ràn lọ́wọ́?", options: ["Gbígbé owó ọjà sókè", "Wíwá àlàfo tí irúgbìn kò ti hù", "Títún ẹ̀rọ ìfami tí ó bàjẹ́ ṣe", "Fífọwọ́ sí ìwé àdéhùn"], answer: 1, why: "Láti òkè, o lè rí àlàfo nínú irè oko kíákíá." },
      { objective: "O1", q: "Drone fi ibì kan tí ẹ̀gẹ́ ti ń rọ hàn. Drone náà ń sọ fún ọ:", options: ["Àrùn tí ó jẹ́ gan-an", "Oògùn apakòkòrò tí o máa rà", "Ibi tí o máa lọ wò", "Kò sí nǹkan tí ó wúlò"], answer: 2, why: "Ó ń fi ibi hàn; lórí ilẹ̀ ni o ti máa mọ ìdí." },
      { objective: "O2", q: "Drone wo ló lè dúró sójú kan lókè tí ó sì lè gbéra láti àyè kékeré?", options: ["Fixed-wing", "Ọkọ̀ ìwé tí a fi ń ṣeré", "Sátẹ́láìtì", "Multirotor"], answer: 3, why: "Multirotor ní ọ̀pọ̀ àjẹ̀, ó sì lè dúró sójú kan lókè." },
      { objective: "O2", q: "Kámẹ́rà multispectral wúlò nítorí pé ó:", options: ["Ń wọn ìmọ́lẹ̀ tí ojú kò lè rí, ó sì ń fi wàhálà ewéko hàn ní kùtùkùtù", "Ń ya fọ́tò dúdú àti funfun nìkan", "Ń jẹ́ kí drone fò yára sí i", "Ń fọ́n ajílẹ̀"], answer: 0, why: "Ó ń wọn near-infrared àti àwọn ìmọ́lẹ̀ míì tí ó so mọ́ ìlera ewéko." },
      { objective: "O2", q: "Kámẹ́rà thermal ń fi hàn:", options: ["Àwọ̀ nìkan", "Ooru", "Oúnjẹ inú ilẹ̀ tààrà", "Owó ọjà"], answer: 1, why: "Kámẹ́rà thermal ń wọn ooru, ó wúlò fún àìtó omi àti ẹran." },
      { objective: "O3", q: "Ẹgbẹ́ àjùmọ̀ṣe tí ó ní oko kékeré 300 fẹ́ bójú tó àgbàdo àwọn ọmọ ẹgbẹ́. Ọ̀nà tó dára ni:", options: ["Kí àgbẹ̀ kọ̀ọ̀kan ra drone fixed-wing", "Má ṣe lo drone láéláé", "Iṣẹ́ drone kan tí gbogbo ọmọ ẹgbẹ́ ń pín", "Ìpè fóònù nìkan"], answer: 2, why: "Pípín drone kan láàárín ọ̀pọ̀ oko ń pín owó náà ká." },
      { objective: "O3", q: "Àwòrán sátẹ́láìtì ọ̀fẹ́ kò wúlò tó fún ewéko kọ̀ọ̀kan nítorí pé:", options: ["Ìkùukùu máa ń bò wọ́n nígbà gbogbo", "Dúdú àti funfun ni wọ́n", "Owó wọn pọ̀", "Píksẹ́ẹ̀lì kọ̀ọ̀kan tó nǹkan bí mítà 10"], answer: 3, why: "Píksẹ́ẹ̀lì tí ó tóbi ń fi àpẹẹrẹ hàn lórí ilẹ̀ ńlá, kì í ṣe ewéko kọ̀ọ̀kan." },
      { objective: "O3", q: "Èwo ni owó tí lílo drone ń ná yàtọ̀ sí rírà á?", options: ["Bátìrì àti àjẹ̀ àfipamọ́", "Òjò ọ̀fẹ́", "Ìmọ́lẹ̀ oòrùn", "Kò sí nǹkan míì"], answer: 0, why: "Bátìrì, àjẹ̀, owó ìjọba, ìdánilẹ́kọ̀ọ́, data àti ìrìn-àjò ló ń náni lówó." },
      { objective: "O3", q: "Kí o tó ra drone, ìbéèrè pàtàkì ni:", options: ["Àwọ̀ wo ni?", "Ìpinnu wo ni àwọn àwòrán náà máa yí padà, ṣé ó sì yẹ fún owó náà?", "Ṣé òun ni èyí tó jáde kẹ́yìn?", "Ṣé àwọn ọ̀rẹ́ mi ní ọ̀kan?"], answer: 1, why: "Drone máa mérè wá nìkan tí ó bá mú ìpinnu dára sí i ju owó rẹ̀ lọ." },
      { objective: "O4", q: "Òfin drone Nàìjíríà wà nínú:", options: ["Ìwé ìpolówó ẹni tí ó ń tà á", "Ẹgbẹ́ kan lórí social media", "Nig.CARs 2023 Part 21 láti ọ̀dọ̀ NCAA", "Ìwé ìgbowó oko"], answer: 2, why: "Part 21 ti NCAA ń sọ̀rọ̀ nípa ìforúkọsílẹ̀, ìwé ẹ̀rí àti iṣẹ́ RPAS." },
      { objective: "O4", q: "Òfin drone Ghana, Rwanda àti Uganda:", options: ["Bákan náà ni pẹ̀lú ti Kenya gan-an", "Kò pọn dandan", "United Nations nìkan ló ń ṣe wọ́n", "Àjọ ìrìnnà ojú-òfuurufú orílẹ̀-èdè kọ̀ọ̀kan ló ń ṣe wọ́n"], answer: 3, why: "Orílẹ̀-èdè kọ̀ọ̀kan ló ń ṣàkóso ojú-òfuurufú tirẹ̀, ó sì ní òfin tirẹ̀." },
      { objective: "O4", q: "Ilé-iṣẹ́ tí ó ń fò drone fún àwọn àgbẹ̀ tí ó ń sanwó sábà máa ń nílò:", options: ["Ìwé ẹ̀rí olùṣiṣẹ́ láti ọ̀dọ̀ àjọ ìrìnnà ojú-òfuurufú", "Kò sí nǹkan àfikún", "Fóònù nìkan", "Káàdì iṣẹ́ nìkan"], answer: 0, why: "KCAA àti NCAA méjèèjì ní ìwé ẹ̀rí olùṣiṣẹ́ fún iṣẹ́ drone owó." },
      { objective: "O4", q: "Níbo ni o yẹ kí o ti ṣàyẹ̀wò owó drone tí ó wà lọ́wọ́lọ́wọ́?", options: ["Ìwé ìròyìn àtijọ́", "Ojú-ewé ìjọba ti àjọ ìrìnnà ojú-òfuurufú ní ọjọ́ tí o bá ń bẹ̀rẹ̀ ìbéèrè", "Àhesọ ọ̀rọ̀", "Páálí drone náà"], answer: 1, why: "Owó máa ń yí padà; ojú-ewé ìjọba ni orísun tí a lè gbẹ́kẹ̀ lé." },
      { objective: "O4", q: "Fífọ́n oògùn apakòkòrò pẹ̀lú drone nílò àṣẹ láti ọ̀dọ̀:", options: ["Àgbẹ̀ nìkan", "Ẹni tí ó ń tà á nìkan", "Àjọ ìrìnnà ojú-òfuurufú àti àjọ oògùn apakòkòrò", "Kò sí ẹnikẹ́ni"], answer: 2, why: "Fífọ́n oògùn jẹ́ iṣẹ́ pàtàkì tí òfin ìrìnnà ojú-òfuurufú àti òfin oògùn apakòkòrò ń ṣàkóso." },
      { objective: "O5", q: "Ibi wo ló sábà máa ń ní òdiwọ̀n drone ní àyíká rẹ̀?", options: ["Oko àgbàdo tí ó jìnnà sí ìlú", "Etí odò", "Oko ẹ̀wà", "Airstrip (ibi ìbalẹ̀ ọkọ̀ òfuurufú kékeré)"], answer: 3, why: "Òfin ń pa drone mọ́ kúrò nítòsí pápákọ̀ òfuurufú àti airstrip." },
      { objective: "O5", q: "Kí o tó fò lórí ilé ìgbé aládùúgbò, o yẹ kí o:", options: ["Kọ́kọ́ béèrè lọ́wọ́ wọn", "Fò sílẹ̀ láti yà wọ́n lẹ́nu", "Ya fídíò wọn", "Fò ní alẹ́"], answer: 0, why: "Bọ̀wọ̀ fún ilẹ̀ àti ìkọ̀kọ̀ àwọn ènìyàn; kọ́kọ́ béèrè." },
      { objective: "O6", q: "Ojú-ọjọ́ wo ló túmọ̀ sí pé kí o má fò drone kékeré?", options: ["Ìdákẹ́jẹ́ẹ́ àti ojú-ọ̀run tí ó mọ́", "Afẹ́fẹ́ líle tí ń jà lójijì tàbí ìjì àrá", "Ìkùukùu díẹ̀ láìsí afẹ́fẹ́", "Oòrùn òwúrọ̀"], answer: 1, why: "Afẹ́fẹ́, ìjì àti òjò lè mú kí drone bọ́ lọ́wọ́ rẹ." },
      { objective: "O6", q: "Ìkìlọ̀ bátìrì sọ pé ó ti fẹ́ tán nígbà fífò. O yẹ kí o:", options: ["Fò ìlà kan sí i", "Gòkè sí i", "Balẹ̀", "Pa ẹ̀rọ ìdarí"], answer: 2, why: "Bátìrì tí ó fẹ́ tán túmọ̀ sí pé kí o mú drone sọ̀kalẹ̀ láìléwu báyìí." },
      { objective: "O6", q: "Lẹ́yìn fífò kọ̀ọ̀kan, o yẹ kí o:", options: ["Pa gbogbo fọ́tò rẹ́", "Ta drone náà", "Gbàgbé rẹ̀", "Kọ fífò náà sínú ìwé àkọsílẹ̀ fífò"], answer: 3, why: "Ìwé àkọsílẹ̀ fífò ń kọ fífò kọ̀ọ̀kan àti ìṣòro èyíkéyìí sílẹ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      3,
      5,
      6,
      9,
      10,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún un ṣàyẹ̀wò.",
    criteria: [
      {
        name: "Ìṣòro oko",
        objective: "O1",
        notYet: "Ìṣòro náà kò yé, tàbí ó jẹ́ nǹkan tí drone kò lè ṣe.",
        meets: "Ó dárúkọ ìṣòro oko tó yé tí drone lè ràn lọ́wọ́, àti ohun tí a ṣì máa fi ẹsẹ̀ rìn lọ ṣàyẹ̀wò.",
        exceeds: "Ó sọ ìpinnu tí àwọn àwòrán náà máa yí padà."
      },
      {
        name: "Drone àti kámẹ́rà",
        objective: "O2",
        notYet: "Kò sí irú drone tàbí kámẹ́rà, tàbí kò sí ìdí.",
        meets: "Irú drone àti kámẹ́rà tó bá iṣẹ́ náà àti ìwọ̀n oko mu, pẹ̀lú ìdí.",
        exceeds: "Ó fi wé drone míì, àwòrán sátẹ́láìtì tàbí rírìn, ó sì ṣàlàyé owó rẹ̀."
      },
      {
        name: "Àjọ àti àwọn ìwé",
        objective: "O4",
        notYet: "Àjọ náà tàbí àwọn ìwé náà kò sí níbẹ̀.",
        meets: "Ó dárúkọ àjọ ìrìnnà ojú-òfuurufú orílẹ̀-èdè náà àti àwọn ìwé tí a máa ṣàyẹ̀wò tàbí gbà, láti orí ojú-òpó wẹ́ẹ̀bù rẹ̀ fúnra rẹ̀.",
        exceeds: "Ó ní link náà àti ọjọ́ tí a ṣàyẹ̀wò òfin náà."
      },
      {
        name: "Ewu níbi fífò",
        objective: "O5",
        notYet: "Kò kọ ewu kankan sílẹ̀.",
        meets: "Ó kọ àwọn ewu àti ibi tí a kò gbọdọ̀ fò sí tí ó rí sílẹ̀, àti àwọn tí a máa sọ fún nípa fífò náà.",
        exceeds: "Ó ní máàpù tó rọrùn tí ó fi ibi tí a ó ti gbéra hàn."
      },
      {
        name: "Àkọsílẹ̀ àyẹ̀wò ààbò",
        objective: "O6",
        notYet: "Nǹkan tí kò tó mẹ́jọ, tàbí kò sí ìgbésẹ̀ pàjáwìrì.",
        meets: "Ó kéré tán nǹkan mẹ́jọ ṣáájú fífò lórí ojú-ọjọ́, drone, ẹgbẹ́ àti ibi fífò, pẹ̀lú ìgbésẹ̀ pàjáwìrì.",
        exceeds: "Ó dárúkọ iṣẹ́ awakọ̀ àti olùṣọ́, àti bí a ṣe ń ròyìn ìjàǹbá."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ti ètò lílo drone",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n wá òfin drone ti àjọ ìrìnnà ojú-òfuurufú wọn láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí Ẹ̀kọ́ 2 nínú ẹ̀kọ́ drone",
      "Àwọn ètò alábàáṣiṣẹ́ tí wọ́n ròyìn pé àwọn olùlò drone ń forúkọ sílẹ̀ tí wọ́n sì ń gba ìwé àṣẹ kí wọ́n tó fò"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tí ó ní íńtánẹ́ẹ̀tì láti ṣí ojú-ewé drone ti àjọ ìrìnnà ojú-òfuurufú",
      "Ìwé àkọsílẹ̀ àti gègé fún ètò lílo drone àti àkọsílẹ̀ àyẹ̀wò",
      "Oko gidi tàbí oko àpẹẹrẹ láti rìn fún àyẹ̀wò ibi fífò",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti kọ ètò náà"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣí ojú-ewé drone ti àjọ náà lójú ẹsẹ̀ pẹ̀lú ẹgbẹ́ náà.",
      "Má ṣe fò drone gẹ́gẹ́ bí apá kan ẹ̀kọ́ yìí àyàfi tí awakọ̀, drone àti fífò náà bá ní gbogbo àṣẹ tí orílẹ̀-èdè náà béèrè.",
      "Ẹ jọ rìn yí oko gidi kan ká láti fi ṣe àṣeṣe rírí ewu, kí o sì rán àwọn akẹ́kọ̀ọ́ létí pé kí wọ́n má ṣe ya fídíò ènìyàn tàbí ilé.",
      "Ṣàyẹ̀wò ojú-òpó àjọ náà fún ìyípadà òfin ṣáájú ìgbà kọ̀ọ̀kan tí ẹ bá ń ṣe ẹ̀kọ́ náà.",
      "Fi rubric ṣe àmì fún ètò lílo drone, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
