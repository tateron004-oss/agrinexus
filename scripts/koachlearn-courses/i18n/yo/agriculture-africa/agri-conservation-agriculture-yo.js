"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-conservation-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_CA = { name: "FAO: Iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ (Conservation Agriculture): ìtumọ̀ àti àwọn ìlànà mẹ́ta", url: "https://www.fao.org/conservation-agriculture/en/" };
const WOCAT_ZAI = { name: "WOCAT: Kòtò ọ̀gbìn zai tàbí tassa (Niger)", url: "https://qcat.wocat.net/en/wocat/technologies/view/permalink/1220" };
const ZIM_CA = { name: "Ipa iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ lórí ìkórè àgbàdo ní àwọn agbègbè gbígbẹ ní Zimbabwe (Experimental Agriculture)", url: "https://www.cambridge.org/core/product/36E50D9D434ADE25762F6D8E4E185FB7" };
const CIMMYT_ZM = { name: "CIMMYT: Àdánwò iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ lórí oko ní Zambia (kòtò ọ̀gbìn, ripping, gbígbin tààrà àti títúlẹ̀, 2006-2015)", url: "https://hdl.handle.net/11529/10825" };
const PCPB = { name: "Pest Control Products Board, Kenya (àwọn ọjà tí a forúkọ wọn sílẹ̀)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC, Nàìjíríà (àwọn kẹ́míkà oko tí a forúkọ wọn sílẹ̀)", url: "https://www.nafdac.gov.ng" };
const EPA_GH = { name: "Environmental Protection Agency, Ghana (ìforúkọsílẹ̀ oògùn kòkòrò àti èpò)", url: "https://www.epa.gov.gh" };
const FAO_SOM = { name: "FAO: Pàtàkì ohun alààyè tó ti jẹrà nínú ilẹ̀ (soil organic matter)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };

module.exports = {
  id: "agri-conservation-agriculture-yo",
  lang: "yo",
  translationOf: "agri-conservation-agriculture",
  category: "Agriculture (Africa)",
  name: "Iṣẹ́ Àgbẹ̀ Ìpamọ́ Ilẹ̀ fún Àwọn Àsìkò Gbígbẹ",
  skills: "Lílo àwọn ìlànà mẹ́ta iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀, Gbígbẹ́ kòtò ọ̀gbìn àti kòtò zai, Yíyan ripping tàbí gbígbin tààrà, Ṣíṣàkóso ìbora ilẹ̀, Pípa èpò láìtúlẹ̀, Ṣíṣètò àsìkò àti àsìkò ìyípadà",
  outcome: "ṣètò àsìkò kan iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ lórí oko kan kí o sì bẹ̀rẹ̀ rẹ̀: bí o ṣe máa pèsè ilẹ̀ láìtúlẹ̀, bí o ṣe máa bò ó, bí o ṣe máa yí irè oko padà, bí o ṣe máa pa èpò, àti irinṣẹ́ àti ọjọ́ tí o máa lò, pẹ̀lú ilẹ̀ ìfiwéra láti tọ́pa èsì jálẹ̀ àwọn ọdún ìyípadà.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tó ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ (extension officer) ní àwọn apá gbígbẹ ní Kenya, Nàìjíríà, Ghana, Burkina Faso, Senegal àti káàkiri Áfíríkà, níbi tí òjò kì í pẹ́, tí ọ̀dá sì wọ́pọ̀, tí títúlẹ̀ sì ń fi ilẹ̀ sílẹ̀ ní ìhòòhò, ní líle àti ní gbígbẹ.",
    "Orí 1 ń ṣàlàyé àwọn ìlànà mẹ́ta iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ bí FAO ṣe ṣàlàyé wọn, ó sì ń fi bí a ṣe ń pèsè ilẹ̀ láìtúlẹ̀ hàn: kòtò ọ̀gbìn, kòtò zai, ripping àti gbígbin tààrà. Orí 2 dá lórí bíbo ilẹ̀ pẹ̀lú ìbora (mulch), pípa èpò láìtúlẹ̀, irinṣẹ́ àti àkókò fún àsìkò kan, ohun tí o lè retí ní ọdún ọ̀dá, àti bí o ṣe lè la àwọn àsìkò àkọ́kọ́ kọjá.",
    "Omi bíbomirin oko àti kíkó omi òjò wà nínú \"Ìbomirin Oko àti Ìṣàkóso Omi\", ajílẹ̀ kómpóòsì àti ìbora ilẹ̀ ìpìlẹ̀ sì wà nínú \"Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀\"; ẹ̀kọ́ yìí kò tún wọn sọ. Bẹ̀rẹ̀ lórí oko kan, kí o sì fi ilẹ̀ kan tí a túlẹ̀ sílẹ̀ lẹ́gbẹ̀ẹ́ rẹ̀ láti fi wéra. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan lórí ilẹ̀ rẹ."
  ],
  finalTask: "Kọ ètò iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ fún àsìkò kan lórí oko kan (tàbí àpẹẹrẹ: éékà 1 àgbàdo àti ẹ̀wà (cowpea) ní Machakos, hẹ́kítà 2 ọkà bàbà ní àríwá Ghana, tàbí hẹ́kítà 1 jéró àti ẹ̀pà ní Central Plateau ní Burkina Faso): àwòrán oko náà; bí o ṣe máa pèsè rẹ̀ láìtúlẹ̀ (kòtò ọ̀gbìn, kòtò zai, ripping tàbí gbígbin tààrà) àti ìdí rẹ̀; bí o ṣe máa bo ó kéré tán ìdá 30 nínú ọgọ́rùn-ún ilẹ̀ náà; irè oko àti bí o ṣe máa yí wọn padà tàbí gbìn wọ́n pọ̀; ètò èpò rẹ; kàlẹ́ńdà oṣù dé oṣù fún iṣẹ́, irinṣẹ́ àti owó; àti bí o ṣe máa fi wé ilẹ̀ tí a túlẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tó ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ ní àwọn agbègbè oko gbígbẹ káàkiri Áfíríkà (Kenya, Nàìjíríà, Ghana àti àwọn orílẹ̀-èdè Sahel tí ń sọ Faransé), tí wọ́n ń gbin àgbàdo, ọkà bàbà, jéró, ẹ̀wà (cowpea), ẹ̀wà míì àti ẹ̀pà, tí wọ́n sì sábà máa ń ní màlúù tàbí ewúrẹ́ tí ń jẹ àṣẹ́kù irè oko.",
    startingPoint: "Wọ́n ń pèsè ilẹ̀ nípa títúlẹ̀ pẹ̀lú akọ màlúù, tírakító tàbí ọkọ́, wọ́n sì sábà máa ń sun àṣẹ́kù irè oko tàbí jẹ́ kí ẹran jẹ ẹ́. Ọ̀pọ̀ ti gbọ́ nípa kòtò zai tàbí kòtò ọ̀gbìn, ṣùgbọ́n wọn kò tíì ṣe àsìkò kan pípé ti iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀, tàbí ṣètò fún èpò àti ìdíje lórí àṣẹ́kù irè oko tí ó ń bá a wá.",
    gap: "Títúlẹ̀ àti ilẹ̀ ìhòòhò ń fi òjò tí kò pọ̀ ṣòfò, wọ́n ń fa ìwọlẹ̀ (erosion), títúlẹ̀ tí ó pẹ́ sì ń jẹ́ kí gbígbin pẹ́. Àwọn akẹ́kọ̀ọ́ nílò ọ̀nà tí ó ṣeé ṣe láti ṣe iṣẹ́ àgbẹ̀ pẹ̀lú ìdàrú ilẹ̀ tí ó kéré, ìbora tí ó pọ̀ àti yíyí irè oko padà, láti ṣètò irinṣẹ́, òṣìṣẹ́ àti àkókò, kí wọ́n sì dúró ti í jálẹ̀ àwọn àsìkò àkọ́kọ́ nígbà tí èpò pọ̀ tí èsì kò sì dọ́gba.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ẹ̀kọ́ náà tún wà ní èdè Spanish, Faransé àti Lárúbáwá",
      "Òṣìṣẹ́ àti irinṣẹ́: ọkọ́ ọwọ́, akọ màlúù tàbí tírakító tí a yá; gbígbẹ́ kòtò jẹ́ iṣẹ́ líle",
      "Àṣẹ́kù irè oko: ẹran máa ń jẹ oko lẹ́yìn ìkórè gẹ́gẹ́ bí àṣà ìbílẹ̀",
      "Ààbò oògùn: oògùn apa èpò nìkan tí a forúkọ rẹ̀ sílẹ̀ ní orílẹ̀-èdè, tí a lò bí àmì ọjà (label) ti sọ, pẹ̀lú aṣọ àti ohun ààbò",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6; èsì máa ń dàgbà lórí ọ̀pọ̀ àsìkò"
    ],
    prerequisites: "Kò sí. \"Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀\" àti \"Iṣẹ́ Àgbẹ̀ Tó Bá Ojú-ọjọ́ Mu\" wúlò gẹ́gẹ́ bí ìmọ̀ ìpìlẹ̀."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Nígbà tí o bá ń wo oko kan tàbí àpèjúwe rẹ̀", action: "mọ̀ bóyá ó tẹ̀lé ọ̀kọ̀ọ̀kan nínú àwọn ìlànà mẹ́ta iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀", standard: "nípa dídárúkọ gbogbo mẹ́tẹ̀ẹ̀ta bí FAO ṣe ṣàlàyé wọn, pẹ̀lú ìbora ilẹ̀ tí ó kéré tán ìdá 30 nínú ọgọ́rùn-ún" },
    { id: "O2", condition: "Lórí oko kan ṣáájú òjò", action: "sàmì sí, kí o sì gbẹ́ kòtò ọ̀gbìn tàbí kòtò zai pẹ̀lú ìgbẹ́ ẹran tàbí kómpóòsì nínú ọ̀kọ̀ọ̀kan", standard: "ní ìlà tí ó gba ìbú ìtẹ̀ ilẹ̀, tí a gbẹ́ ní ẹ̀ẹ̀rùn" },
    { id: "O3", condition: "Pẹ̀lú ilẹ̀ rẹ, òṣìṣẹ́ rẹ, agbára ẹran tàbí ẹ̀rọ fífà àti òjò ibẹ̀", action: "yan láàárín kòtò ọ̀gbìn, ripping àti gbígbin tààrà fún oko kan", standard: "pẹ̀lú ó kéré tán ìdí méjì fún yíyàn náà" },
    { id: "O4", condition: "Fún oko tí ó wà lábẹ́ iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀", action: "ṣètò bí o ṣe máa bo ilẹ̀ náà àti bí o ṣe máa pa èpò láìtúlẹ̀", standard: "pẹ̀lú ìbora tí ó kéré tán ìdá 30 nínú ọgọ́rùn-ún, àti oògùn apa èpò tí a forúkọ rẹ̀ sílẹ̀ nìkan bí àmì ọjà ti sọ, tí o bá lò ó" },
    { id: "O5", condition: "Fún àsìkò kan lórí oko kan", action: "kọ kàlẹ́ńdà gbogbo iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ pẹ̀lú oṣù, irinṣẹ́ àti owó ọ̀kọ̀ọ̀kan", standard: "láti ìpalẹ̀mọ́ ẹ̀ẹ̀rùn dé ìkórè àti ìtọ́jú àṣẹ́kù irè oko" },
    { id: "O6", condition: "Jálẹ̀ àwọn àsìkò àkọ́kọ́ iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀", action: "fi ilẹ̀ iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ wé ilẹ̀ tí a túlẹ̀", standard: "nípa kíkọ ìkórè, ọjọ́ iṣẹ́ àti owó fún méjèèjì ní àsìkò kọ̀ọ̀kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Àwọn ìlànà àti pípèsè ilẹ̀ láìtúlẹ̀",
      lessons: [
        {
          title: "Àwọn ìlànà mẹ́ta iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀",
          objectives: ["O1"],
          minutes: 5,
          goal: "Mọ̀ bóyá oko kan tẹ̀lé ọ̀kọ̀ọ̀kan nínú àwọn ìlànà mẹ́ta iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀.",
          text: [
            "Iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ (CA) jẹ́ ọ̀nà iṣẹ́ àgbẹ̀ tí ó ń dáàbò bo ilẹ̀ kí ó lè di púpọ̀ sí i mú nínú òjò díẹ̀ tí ó bá rọ̀. FAO ṣàlàyé ìlànà mẹ́ta tí ó ń ṣiṣẹ́ pọ̀.",
            "1. Ìdàrú ilẹ̀ tí ó kéré jù: kò sí títúlẹ̀. Irúgbìn àti ajílẹ̀ máa ń wọ inú ilẹ̀ láti inú ihò kékeré, kòtò tàbí ìlà tóóró tí ripper là, a sì fi ìyókù ilẹ̀ sílẹ̀ bí ó ti wà. 2. Ìbora ilẹ̀ títí lọ: fi àṣẹ́kù irè oko tàbí irè ìbora (cover crop) sílẹ̀ lórí ilẹ̀, kí ó bo ó kéré tán ìdá 30 nínú ọgọ́rùn-ún ilẹ̀ náà, jálẹ̀ ọdún. 3. Oríṣiríṣi irè oko: yí irè oko padà tàbí gbìn wọ́n pọ̀, ó kéré tán irè oko mẹ́ta tí ó yàtọ̀ síra bí àkókò ti ń lọ, fún àpẹẹrẹ àgbàdo, ẹ̀wà (cowpea) àti ọkà bàbà, kì í ṣe àgbàdo lọ́dọọdún.",
            "Ṣíṣe ọ̀kan nìkan ń ràn lọ́wọ́ díẹ̀; ṣíṣe mẹ́tẹ̀ẹ̀ta pọ̀ ló ń mú àǹfààní gidi wá. Títúlẹ̀ láìsí ìbora ń gbẹ ilẹ̀; ìbora láìsí yíyí irè oko padà ń jẹ́ kí kòkòrò pọ̀ sí i; àìtúlẹ̀ pẹ̀lú ilẹ̀ ìhòòhò ń jẹ́ kí èèpo líle ṣẹ̀dá, kí omi òjò sì ṣàn lọ. Ní àwọn agbègbè gbígbẹ, èrè ńlá ni omi: ilẹ̀ tí a bò tí a kò sì dà rú ń jẹ́ kí òjò rì wọlé, oòrùn kò sì ní gbà á tó bẹ́ẹ̀."
          ],
          words: [["Iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ (Conservation agriculture, CA)", "iṣẹ́ àgbẹ̀ pẹ̀lú ìdàrú ilẹ̀ tí ó kéré jù, ìbora ilẹ̀ títí lọ àti oríṣiríṣi irè oko."], ["Títúlẹ̀ (tillage)", "yíyí ilẹ̀ padà tàbí fífọ́ ọ, fún àpẹẹrẹ nípa títúlẹ̀ pẹ̀lú ẹ̀rọ tàbí gbígbẹ́."], ["Àṣẹ́kù irè oko", "igi, ewé àti èèpo tí ó kù lẹ́yìn ìkórè."], ["Èèpo líle (crust)", "awọ líle tí ó máa ń ṣẹ̀dá lórí ilẹ̀ ìhòòhò lẹ́yìn òjò, tí kò sì jẹ́ kí omi rì wọlé."]],
          slides: [
            { title: "Ìlànà mẹ́ta (FAO)", bullets: ["1. Ìdàrú ilẹ̀ tí ó kéré jù: kò sí títúlẹ̀", "2. Ìbora ilẹ̀ títí lọ: ó kéré tán ìdá 30 nínú ọgọ́rùn-ún", "3. Oríṣiríṣi irè oko: ó kéré tán irè oko mẹ́ta"] },
            { title: "Dà ilẹ̀ rú níbi tí o ti ń gbìn nìkan", bullets: ["Ihò kékeré, kòtò tàbí ìlà ripper", "Fi ìyókù ilẹ̀ sílẹ̀ bí ó ti wà"] },
            { title: "Bo ilẹ̀, kí o sì yí irè oko padà", bullets: ["Àṣẹ́kù irè oko tàbí irè ìbora lórí ilẹ̀, jálẹ̀ ọdún", "Fún àpẹẹrẹ: àgbàdo, lẹ́yìn náà ẹ̀wà, lẹ́yìn náà ọkà bàbà"] },
            { title: "Mẹ́tẹ̀ẹ̀ta pọ̀", bullets: ["Ọ̀kan nìkan ń ràn lọ́wọ́ díẹ̀", "Pọ̀: òjò púpọ̀ sí i ń rì wọlé, ó sì ń dúró", "Èrè ńlá ní àwọn agbègbè gbígbẹ ni omi"] }
          ],
          sources: [FAO_CA],
          tryIt: "Rìn yí ọ̀kan lára oko rẹ ká. Fún ìlànà kọ̀ọ̀kan, kọ bẹ́ẹ̀ni, díẹ̀ tàbí rárá: Ṣé a túlẹ̀ rẹ̀? Báwo ni ilẹ̀ tí a bò ṣe pọ̀ tó (fojú díwọ̀n rẹ̀ ní ìdá nínú ọgọ́rùn-ún)? Irè oko mélòó ló yàtọ̀ síra tí ó hù níbẹ̀ ní àsìkò mẹ́ta tó kọjá? Fa òrùka yí ìlànà tí ó ṣe aláìlágbára jù lọ ká.",
          youCanNow: "dárúkọ àwọn ìlànà mẹ́ta iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀, kí o sì yẹ oko kan wò fún ọ̀kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O1", q: "Èwo ni ọ̀kan lára àwọn ìlànà mẹ́ta iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ ti FAO?", options: ["Títúlẹ̀ jíjìn ní àsìkò kọ̀ọ̀kan", "Sísun àṣẹ́kù irè oko láti fọ oko mọ́", "Ìbora ilẹ̀ títí lọ tí ó kéré tán ìdá 30 nínú ọgọ́rùn-ún", "Gbígbin irè oko kan náà lọ́dọọdún"], answer: 2, why: "FAO dárúkọ ìdàrú ilẹ̀ tí ó kéré jù, ìbora ilẹ̀ títí lọ (ó kéré tán ìdá 30 nínú ọgọ́rùn-ún) àti oríṣiríṣi irè oko." },
            { objective: "O1", q: "Àgbẹ̀ kan ti dẹ́kun títúlẹ̀, ṣùgbọ́n ó ń fi ilẹ̀ sílẹ̀ ní ìhòòhò, ó sì ń gbin àgbàdo lọ́dọọdún. Kí ló kù?", options: ["Ìbora ilẹ̀ àti oríṣiríṣi irè oko", "Kò sí nǹkan; CA pípé ni", "Títúlẹ̀ púpọ̀ sí i", "Sísun púpọ̀ sí i"], answer: 0, why: "Láìsí ìbora àti yíyí irè oko padà, àìtúlẹ̀ nìkan kò mú àǹfààní púpọ̀ wá." }
          ]
        },
        {
          title: "Kòtò ọ̀gbìn àti kòtò zai",
          objectives: ["O2"],
          minutes: 6,
          goal: "Sàmì sí, kí o sì gbẹ́ kòtò ọ̀gbìn tàbí kòtò zai pẹ̀lú ìgbẹ́ ẹran nínú ọ̀kọ̀ọ̀kan, ṣáájú òjò.",
          text: [
            "Kòtò ọ̀gbìn àti kòtò zai jẹ́ ihò kékeré tí a fi ọwọ́ gbẹ́ níbi tí a ti ń gbin irè oko. Kòtò nìkan ni a dà rú; a fi ilẹ̀ tí ó wà láàárín wọn sílẹ̀ ní bíbò. Kòtò kọ̀ọ̀kan ń gba òjò, ó sì ń di ìgbẹ́ ẹran tàbí kómpóòsì mú ní ibi tí gbòǹgbò wà gan-an.",
            "Kòtò zai wá láti ọ̀dọ̀ àwọn àgbẹ̀ ní Burkina Faso àti Niger, tí wọ́n fi wọ́n sọ ilẹ̀ líle tí ó ní èèpo di ilẹ̀ jéró àti ọkà bàbà padà. WOCAT ṣàpèjúwe kòtò tí fífẹ̀ wọn jẹ́ nǹkan bí 30 sí 40 cm, tí jíjìn wọn sì jẹ́ 10 sí 15 cm, ní ìlà tí ó yí sí ara wọn (staggered) ní ìbú ìtẹ̀ ilẹ̀, nǹkan bí 10,000 ní hẹ́kítà kan, pẹ̀lú ìgbẹ́ ẹran tàbí kómpóòsì nínú ọ̀kọ̀ọ̀kan. Kòtò ọ̀gbìn tí a ń lò ní gúúsù àti ìlà-oòrùn Áfíríkà jọ ọ́: ihò kékeré, déédéé, ní ìlà, tí a ń gbẹ́ ní àyè kan náà lọ́dọọdún kí o lè padà sí ibì kan náà.",
            "Gbẹ́ wọn ní ẹ̀ẹ̀rùn lẹ́yìn ìkórè, nígbà tí iṣẹ́ míì kò pọ̀, kí o lè gbìn pẹ̀lú òjò àkọ́kọ́ tó dára dípò kí o máa dúró de títúlẹ̀. Kó erùpẹ̀ inú kòtò sí ẹ̀gbẹ́ ìsàlẹ̀ rẹ̀ láti gba omi púpọ̀ sí i. Fi ẹ̀kúnwọ́ kan tàbí méjì ìgbẹ́ ẹran tàbí kómpóòsì sínú kòtò kọ̀ọ̀kan, kí o sì bò ó díẹ̀. Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ àyè tí a ń lò fún irè oko rẹ ní agbègbè rẹ.",
            "Iṣẹ́ líle ni, pàápàá ní ọdún àkọ́kọ́. Gbẹ́ apá kan oko lọ́sọ̀ọ̀sẹ̀, ẹ pín iṣẹ́ nínú ẹgbẹ́, kí o sì tún àwọn kòtò kan náà lò ní àwọn àsìkò tó ń bọ̀, èyí tí ó yára jù bẹ́ẹ̀ lọ."
          ],
          steps: ["Yan oko náà, kí o sì sàmì sí ìlà ní ìbú ìtẹ̀ ilẹ̀ pẹ̀lú okùn tàbí igi.", "Sàmì sí ibi kòtò ní àyè tí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ dámọ̀ràn fún irè oko rẹ.", "Gbẹ́ ní ẹ̀ẹ̀rùn; kó erùpẹ̀ sí ẹ̀gbẹ́ ìsàlẹ̀.", "Fi ìgbẹ́ ẹran tàbí kómpóòsì sínú kòtò kọ̀ọ̀kan, kí o sì bò ó díẹ̀.", "Fi ilẹ̀ tí ó wà láàárín kòtò sílẹ̀ ní bíbò.", "Gbìn sínú kòtò pẹ̀lú òjò àkọ́kọ́ tó dára."],
          words: [["Kòtò ọ̀gbìn (planting basin)", "ihò kékeré tí a fi ọwọ́ gbẹ́ níbi tí irúgbìn àti ìgbẹ́ ẹran ń lọ, tí a sì fi ìyókù ilẹ̀ sílẹ̀ láìdà á rú."], ["Kòtò zai", "kòtò ọ̀gbìn tí a fi ìgbẹ́ ẹran tàbí kómpóòsì kún, tí àwọn àgbẹ̀ ní Burkina Faso àti Niger kọ́kọ́ lò láti tún ilẹ̀ olèèpo líle ṣe."], ["Ní ìbú ìtẹ̀ ilẹ̀ (across the slope)", "tẹ̀lé ìlà ìpele kan náà (contour), kí ìlà lè gba omi dípò kí ó máa darí rẹ̀ sísàlẹ̀."]],
          slides: [
            { title: "Ihò kékeré, èrè ńlá", bullets: ["Kòtò nìkan ni a ń dà rú", "Ó ń gba òjò níbi tí gbòǹgbò wà", "Ó ń di ìgbẹ́ ẹran mú nítòsí irè oko"] },
            { title: "Kòtò zai (Burkina Faso, Niger)", bullets: ["Fífẹ̀ nǹkan bí 30-40 cm, jíjìn 10-15 cm (WOCAT)", "Ìlà tí ó yí sí ara wọn ní ìbú ìtẹ̀ ilẹ̀", "Ìgbẹ́ ẹran tàbí kómpóòsì nínú ọ̀kọ̀ọ̀kan"] },
            { title: "Àkókò", bullets: ["Gbẹ́ ní ẹ̀ẹ̀rùn lẹ́yìn ìkórè", "Gbìn pẹ̀lú òjò àkọ́kọ́ tó dára", "Kò sí dídúró de títúlẹ̀"] },
            { title: "Mú iṣẹ́ náà fúyẹ́", bullets: ["Apá kan oko lọ́sọ̀ọ̀sẹ̀", "Ẹ pín iṣẹ́ nínú ẹgbẹ́", "Tún àwọn kòtò kan náà lò ní àsìkò tó ń bọ̀"] }
          ],
          sources: [WOCAT_ZAI, FAO_CA],
          tryIt: "Lórí apá kékeré kan oko (fún àpẹẹrẹ 10 m ní 10 m), sàmì sí ìlà ní ìbú ìtẹ̀ ilẹ̀, kí o sì gbẹ́ kòtò ọ̀gbìn tàbí kòtò zai márùn-ún. Wọn àkókò tí ọ̀kọ̀ọ̀kan gbà, fi ìgbẹ́ ẹran sí i, kí o sì ṣírò iye ọjọ́ tí gbogbo oko náà máa gbà.",
          youCanNow: "sàmì sí, kí o sì gbẹ́ kòtò ọ̀gbìn tàbí kòtò zai pẹ̀lú ìgbẹ́ ẹran, ní ìbú ìtẹ̀ ilẹ̀, ṣáájú òjò.",
          quickCheck: [
            { objective: "O2", q: "Ìgbà wo ló yẹ kí o gbẹ́ kòtò ọ̀gbìn tàbí kòtò zai?", options: ["Lẹ́yìn tí irè oko ti hù jáde", "Nígbà tí òjò bá ń rọ̀ gidigidi nìkan", "Ní àkókò ìkórè, lórí irè oko", "Ní ẹ̀ẹ̀rùn ṣáájú òjò"], answer: 3, why: "Gbígbẹ́ ní kùtùkùtù ń jẹ́ kí o gbìn pẹ̀lú òjò àkọ́kọ́ tó dára, ó sì ń pín iṣẹ́ náà." },
            { objective: "O2", q: "Ibo ni erùpẹ̀ inú kòtò zai yẹ kí ó lọ?", options: ["Kí a dà á sí ọ̀nà jíjìn", "Sí ẹ̀gbẹ́ ìsàlẹ̀ kòtò náà, láti gba omi púpọ̀ sí i", "Padà sínú kòtò lẹ́sẹ̀kẹsẹ̀", "Sí ojú ọ̀nà"], answer: 1, why: "Ebè kékeré ní ẹ̀gbẹ́ ìsàlẹ̀ ń ran kòtò kọ̀ọ̀kan lọ́wọ́ láti gba omi tí ń ṣàn, kí ó sì dì í mú." }
          ]
        },
        {
          title: "Ripping àti gbígbin tààrà",
          objectives: ["O3"],
          minutes: 5,
          goal: "Yan láàárín kòtò ọ̀gbìn, ripping àti gbígbin tààrà fún ọ̀kan lára oko rẹ.",
          text: [
            "Kòtò ọ̀gbìn bá àwọn àgbẹ̀ tí ń lo ọkọ́ ọwọ́ lórí ilẹ̀ kékeré mu. Tí o bá ní akọ màlúù tàbí tí o lè yá tírakító, ripper tàbí ẹ̀rọ gbígbin tààrà lè ṣe ilẹ̀ púpọ̀ sí i pẹ̀lú òṣìṣẹ́ díẹ̀.",
            "Ripper jẹ́ ẹyín irin tóóró kan, tí a sábà máa ń dè mọ́ igi ẹ̀rọ ìtúlẹ̀ màlúù dípò abẹ ìtúlẹ̀ (mouldboard), tí ó ń la ihò tóóró kan (ìlà ripper) fún irúgbìn àti ajílẹ̀, tí ó sì ń fi ilẹ̀ láàárín ìlà sílẹ̀ ní bíbò. Ripping ní ẹ̀ẹ̀rùn tún lè fọ́ ìpele líle kan lábẹ́ ojú ilẹ̀ (plough pan) kí gbòǹgbò àti omi lè lọ jìn sí i. Gbígbin tààrà ń fi irúgbìn sínú ilẹ̀ tààrà láàárín àṣẹ́kù irè oko pẹ̀lú jab planter (irinṣẹ́ ọwọ́) tàbí ẹ̀rọ gbígbin tí ẹran tàbí tírakító ń fà, láìla ìlà kankan rárá.",
            "Èwo ni kí o yàn? Ronú nípa òṣìṣẹ́ rẹ (kòtò ọ̀gbìn ló ń gba iṣẹ́ jù), agbára fífà (ripping nílò akọ màlúù tàbí tírakító), ilẹ̀ (ilẹ̀ líle tí ó ní èèpo ń jàǹfààní láti kòtò ọ̀gbìn tàbí ripping), àti bí oko ṣe tóbi tó. Àdánwò káàkiri Zambia láti 2006 sí 2015 fi kòtò ọ̀gbìn, ripping àti gbígbin tààrà wé títúlẹ̀ pẹ̀lú abẹ ìtúlẹ̀ lórí oko gidi. Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí iṣẹ́ àkànṣe CA ibi tí o ti lè rí àwọn irinṣẹ́ wọ̀nyí tí wọ́n ń ṣiṣẹ́, àti bóyá a lè yá wọn."
          ],
          steps: ["Kọ bí oko rẹ ṣe tóbi tó, òṣìṣẹ́ rẹ, àti bóyá o lè rí akọ màlúù tàbí tírakító.", "Yẹ ilẹ̀ wò: ṣé ìpele líle tàbí èèpo wà níbẹ̀?", "Ilẹ̀ kékeré àti iṣẹ́ ọwọ́: kòtò ọ̀gbìn.", "Akọ màlúù tàbí tírakító àti ilẹ̀ líle: ripping.", "Àṣẹ́kù irè oko tó dára àti ẹ̀rọ gbígbin tí ó wà: gbígbin tààrà.", "Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ ibi tí o ti lè rí irinṣẹ́ náà àti yá a."],
          words: [["Ripper", "ẹyín irin tóóró tí akọ màlúù tàbí tírakító ń fà, tí ó ń la ihò fún irúgbìn láìyí ilẹ̀ padà."], ["Plough pan", "ìpele líle kan ní ìsàlẹ̀ ibi tí títúlẹ̀ dé, tí ó ń dí gbòǹgbò àti omi lọ́wọ́."], ["Jab planter", "irinṣẹ́ ọwọ́ tí a ń tì bọ inú ilẹ̀ láti fi irúgbìn (àti nígbà míì ajílẹ̀) sí i láàárín àṣẹ́kù irè oko."], ["Gbígbin tààrà (direct seeding)", "gbígbin tààrà sínú ilẹ̀ àti àṣẹ́kù irè oko tí a kò dà rú."]],
          slides: [
            { title: "Ọ̀nà mẹ́ta láìtúlẹ̀", bullets: ["Kòtò ọ̀gbìn: ọkọ́ ọwọ́, ilẹ̀ kékeré", "Ripping: akọ màlúù tàbí tírakító ń la ìlà", "Gbígbin tààrà: jab planter tàbí ẹ̀rọ gbígbin"] },
            { title: "Ripping", bullets: ["Ẹyín irin tóóró lórí igi ẹ̀rọ ìtúlẹ̀", "Ó lè fọ́ plough pan líle", "Ilẹ̀ láàárín ìlà ṣì wà ní bíbò"] },
            { title: "Bí o ṣe lè yàn", bullets: ["Òṣìṣẹ́: kòtò ọ̀gbìn ló ń gba iṣẹ́ jù", "Agbára fífà: akọ màlúù tàbí tírakító?", "Bí ilẹ̀ ṣe le tó àti bí oko ṣe tóbi tó"] },
            { title: "Kọ́kọ́ rí i", bullets: ["Àdánwò Zambia: kòtò ọ̀gbìn, ripping, gbígbin tààrà", "Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ ibi tí o ti lè rí irinṣẹ́", "Ṣé o lè yá wọn?"] }
          ],
          sources: [CIMMYT_ZM, FAO_CA],
          tryIt: "Fún oko tí o yàn, kọ bí ó ṣe tóbi tó, òṣìṣẹ́ rẹ, bóyá o lè rí akọ màlúù tàbí tírakító, àti bí ilẹ̀ ṣe le tó. Yan kòtò ọ̀gbìn, ripping tàbí gbígbin tààrà, kí o sì kọ ìdí méjì fún yíyàn rẹ.",
          youCanNow: "yan láàárín kòtò ọ̀gbìn, ripping àti gbígbin tààrà fún oko kan, pẹ̀lú ìdí.",
          quickCheck: [
            { objective: "O3", q: "Àgbẹ̀ kan ní hẹ́kítà 3, akọ màlúù méjì àti ilẹ̀ líle. Ọ̀nà wo ló bá a mu jù?", options: ["Ripping pẹ̀lú ripper tí akọ màlúù ń fà", "Kòtò ọ̀gbìn tí a fi ọwọ́ gbẹ́ lórí gbogbo hẹ́kítà 3 láàárín ọ̀sẹ̀ kan", "Títúlẹ̀ jíjìn lẹ́ẹ̀mejì", "Kí ó má gbìn rárá"], answer: 0, why: "Akọ màlúù àti ilẹ̀ líle bá ripping mu, èyí tí ó ń ṣe ilẹ̀ púpọ̀ ju kòtò ọwọ́ lọ." },
            { objective: "O3", q: "Kí ni jab planter?", options: ["Ẹ̀rọ ìtúlẹ̀ tírakító", "Irinṣẹ́ ọwọ́ tí ó ń fi irúgbìn sí ilẹ̀ láàárín àṣẹ́kù irè oko", "Ẹ̀rọ fífa omi", "Irú ajílẹ̀ kan"], answer: 1, why: "Jab planter ń jẹ́ kí o gbìn tààrà sínú ilẹ̀ tí a bò tí a kò sì dà rú." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àwọn ìlànà àti pípèsè ilẹ̀ láìtúlẹ̀",
        questions: [
          { objective: "O1", q: "Gẹ́gẹ́ bí FAO ti sọ, irè oko mélòó ló yẹ kí ó wà nínú yíyí irè oko padà tàbí gbígbìn pọ̀ ní CA?", options: ["Ọ̀kan", "Méjì ní púpọ̀ jù", "Ó kéré tán mẹ́ta", "Kò sí"], answer: 2, why: "Ìlànà oríṣiríṣi irè oko ti FAO tọ́ka sí ó kéré tán irè oko mẹ́ta tí ó yàtọ̀ síra." },
          { objective: "O1", q: "Kí ló dé tí ilẹ̀ tí a bò tí a kò sì dà rú fi wúlò gan-an ní àwọn agbègbè gbígbẹ?", options: ["Ó ń jẹ́ kí ilẹ̀ tutù ní ìgbà òtútù", "Òjò púpọ̀ sí i ń rì wọlé, oòrùn kò sì gbà á tó bẹ́ẹ̀", "Ó ń dá gbogbo èpò dúró títí láé", "Kò nílò irúgbìn"], answer: 1, why: "Ìbora àti àìtúlẹ̀ ń jẹ́ kí omi rì wọlé dáadáa, wọ́n sì ń dín gbígbẹ omi kù." },
          { objective: "O2", q: "Ní àwọn orílẹ̀-èdè wo ni kòtò zai ti kọ́kọ́ tàn ká láàárín àwọn àgbẹ̀?", options: ["Burkina Faso àti Niger", "Egypt àti Libya", "South Africa àti Namibia", "Kenya àti Uganda nìkan"], answer: 0, why: "Kòtò zai wá láti ọ̀dọ̀ àwọn àgbẹ̀ ní Sahel, pàápàá Burkina Faso àti Niger." },
          { objective: "O2", q: "Kí ló ń lọ sínú kòtò zai tàbí kòtò ọ̀gbìn kọ̀ọ̀kan ṣáájú gbígbin?", options: ["Kò sí nǹkan", "Ọ̀rá (plastic)", "Eérú àṣẹ́kù irè oko tí a sun nìkan", "Ìgbẹ́ ẹran tàbí kómpóòsì"], answer: 3, why: "Ìgbẹ́ ẹran tàbí kómpóòsì nínú kòtò ń bọ́ irè oko ní ibi gbòǹgbò gan-an." },
          { objective: "O3", q: "Kí ni ripping ní ẹ̀ẹ̀rùn lè ṣe yàtọ̀ sí líla ìlà?", options: ["Bomi rin irè oko", "Fọ́ plough pan líle kí gbòǹgbò àti omi lè lọ jìn sí i", "Pa gbogbo kòkòrò", "Dípò ajílẹ̀"], answer: 1, why: "Ripper lè fọ́ ìpele líle tí títúlẹ̀ sábà máa ń fi sílẹ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Àsìkò oko àti àsìkò ìyípadà",
      lessons: [
        {
          title: "Ṣíṣàkóso ìbora ilẹ̀ àti àṣẹ́kù irè oko",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ṣètò bí o ṣe máa bo ó kéré tán ìdá 30 nínú ọgọ́rùn-ún oko kan jálẹ̀ ọdún.",
          text: [
            "Ìbora ni ìlànà tí ó ṣòro jù fún àwọn àgbẹ̀, nítorí àṣẹ́kù irè oko ní ìlò míì: ẹran máa ń jẹ oko lẹ́yìn ìkórè, a sì ń lo igi irè oko fún igi ìdáná, ọgbà àti ilé kíkọ́. Ní àwọn agbègbè gbígbẹ, ikán náà lè jẹ àṣẹ́kù irè oko tí ó wà lórí ilẹ̀.",
            "Ṣètò fún un. Pinnu iye àṣẹ́kù irè oko tí yóò dúró sórí oko àti iye tí yóò lọ fún ẹran. Gé pòpórò díẹ̀ kí o sì kó o pamọ́ fún oúnjẹ ẹran ní ẹ̀ẹ̀rùn, kí a má bàa jẹ́ kí ẹran wọ oko CA. Bá àwọn aládùúgbò àti àwọn darandaran sọ̀rọ̀ nípa oko náà: àwọn àdúgbò kan gbà pé a kì í jẹ́ kí ẹran jẹ oko CA tí a sàmì sí, tàbí àgbẹ̀ máa ń fi ọgbà igi alààyè tàbí ẹ̀ka ẹ̀gún yí oko kékeré ká. Wá ìbora láti ibòmíì: ẹ̀wà (cowpea) tàbí lablab tí a gbìn pọ̀, koríko láti etí oko, tàbí ẹ̀ka igi tí a rẹ́.",
            "Láti yẹ ìbora wò, wo ìlà mítà kan níbi púpọ̀ láti òkè tààrà, kí o sì fojú díwọ̀n iye ilẹ̀ tí o kò lè rí. O fẹ́ kí ó kéré tán ìdá 30 nínú ọgọ́rùn-ún wà ní bíbò (FAO); tí ó bá ju bẹ́ẹ̀ lọ, ó dára jù. Tẹ́ àṣẹ́kù irè oko déédéé, kì í ṣe ní òkìtì, kí o sì fi wọ́n sílẹ̀ lórí ilẹ̀ dípò kí o bò wọ́n mọ́lẹ̀.",
            "Má ṣe sun àṣẹ́kù irè oko lórí oko CA láéláé. Sísun ń mú ìbora àti ohun alààyè tó ti jẹrà tí o ń kọ́ jọ kúrò."
          ],
          steps: ["Pinnu ìpín àṣẹ́kù irè oko fún ìbora àti fún oúnjẹ ẹran.", "Gé oúnjẹ ẹran kí o sì kó o pamọ́ kí ẹran má wọ oko CA.", "Bá àwọn aládùúgbò àti àwọn darandaran fohùn ṣọ̀kan, tàbí ṣe ọgbà yí oko ká.", "Fi ìbora kún un láti irè oko tí a gbìn pọ̀, koríko etí oko tàbí ẹ̀ka igi tí a rẹ́.", "Yẹ ìbora wò: wo ìlà mítà kan níbi púpọ̀ láti òkè.", "Tẹ́ ẹ déédéé; má ṣe sun ún láéláé."],
          words: [["Ìbora ilẹ̀ (mulch)", "ohun tí a tẹ́ sórí ilẹ̀ láti bò ó kí ó sì dáàbò bò ó."], ["Pòpórò (stover)", "igi àti ewé gbígbẹ àgbàdo tàbí ọkà bàbà lẹ́yìn ìkórè."], ["Ọgbà igi alààyè (live fence)", "ìlà igi kékeré tàbí igi tí a gbìn sún mọ́ ara wọn láti dí ẹran lọ́wọ́."]],
          slides: [
            { title: "Ìbora ń bá ìlò míì díje", bullets: ["Ẹran ń jẹ oko lẹ́yìn ìkórè", "Igi ìdáná, ọgbà, ilé kíkọ́", "Ikán ní àwọn agbègbè gbígbẹ"] },
            { title: "Ṣètò àṣẹ́kù irè oko", bullets: ["Ìpín fún ìbora àti fún oúnjẹ ẹran", "Kó oúnjẹ ẹran pamọ́; jẹ́ kí ẹran má wọlé", "Fohùn ṣọ̀kan pẹ̀lú darandaran tàbí ṣe ọgbà"] },
            { title: "Wá ìbora púpọ̀ sí i", bullets: ["Ẹ̀wà (cowpea) tàbí lablab tí a gbìn pọ̀", "Koríko láti etí oko", "Ẹ̀ka igi tí a rẹ́"] },
            { title: "Yẹ̀ ẹ́ wò: ó kéré tán ìdá 30 nínú ọgọ́rùn-ún", bullets: ["Wo ìlà mítà kan láti òkè", "Tẹ́ ẹ déédéé, fi í sílẹ̀ lórí ilẹ̀", "Má ṣe sun ún lórí oko CA láéláé"] }
          ],
          sources: [FAO_CA, FAO_SOM],
          tryIt: "Fojú díwọ̀n ìbora lórí oko tí o yàn lónìí ní ibi mẹ́ta. Kọ ibi tí ìbora àfikún máa ti wá, iye pòpórò tí yóò lọ fún ẹran, àti bí o ṣe máa dí ẹran lọ́wọ́ kúrò nínú oko náà (àdéhùn, ọgbà tàbí oúnjẹ ẹran tí a kó pamọ́).",
          youCanNow: "ṣètò bí o ṣe máa bo ó kéré tán ìdá 30 nínú ọgọ́rùn-ún oko CA, nígbà tí o ṣì ń bọ́ àwọn ẹran rẹ.",
          quickCheck: [
            { objective: "O4", q: "Màlúù àwọn aládùúgbò ń jẹ gbogbo àṣẹ́kù irè oko kúrò lórí oko CA rẹ ní gbogbo ẹ̀ẹ̀rùn. Kí ló lè ràn ọ́ lọ́wọ́?", options: ["Kọ́kọ́ sun àṣẹ́kù irè oko", "Túlẹ̀ oko náà", "Fohùn ṣọ̀kan pẹ̀lú àwọn darandaran, ṣe ọgbà yí oko ká, tàbí kó oúnjẹ ẹran pamọ́ kí ẹran má wọlé", "Pa ìbora tì"], answer: 2, why: "Àdéhùn àdúgbò, ọgbà àti oúnjẹ ẹran tí a kó pamọ́ ń dáàbò bo ìbora." },
            { objective: "O4", q: "Báwo ni o ṣe lè mọ̀ bóyá ìbora tó lórí oko kan?", options: ["Ka iye màlúù", "Wo ìlà mítà kan níbi púpọ̀ láti òkè, kí o sì fojú díwọ̀n ìpín ilẹ̀ tí a kò rí", "Wọn ìwúwo ìkórè", "Wọn òjò"], answer: 1, why: "Fífojú díwọ̀n kíákíá ní ibi púpọ̀ ń fi hàn bóyá ìbora dé ìdá 30 nínú ọgọ́rùn-ún." }
          ]
        },
        {
          title: "Pípa èpò láìtúlẹ̀",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ṣètò bí o ṣe máa pa èpò lórí oko CA láìtúlẹ̀.",
          text: [
            "Títúlẹ̀ ń bo èpò mọ́lẹ̀; láìsí i, èpò lè pọ̀ gan-an ní àwọn àsìkò àkọ́kọ́. Èyí ni ìdí pàtàkì tí àwọn àgbẹ̀ fi ń pa CA tì, nítorí náà ṣètò pípa èpò láti ìbẹ̀rẹ̀.",
            "Pa èpò ní kùtùkùtù àti léraléra: àwọn ọ̀sẹ̀ àkọ́kọ́ lẹ́yìn tí irè oko hù jáde ló ṣe pàtàkì jù. Lo ọkọ́ díẹ̀díẹ̀, kí o máa ha a ní ìsàlẹ̀ ojú ilẹ̀ díẹ̀ dípò kí o yí ilẹ̀ padà, tàbí kí o fi ọwọ́ fà á tu. Má ṣe jẹ́ kí èpò so irúgbìn láéláé; èpò kọ̀ọ̀kan tí ó bá so irúgbìn ń fi ẹgbẹẹgbẹ̀rún kún un fún ọdún tó ń bọ̀. Ìbora àti irè ìbora ń ṣíji bo ilẹ̀, wọ́n sì ń dá ọ̀pọ̀ èpò dúró, irè oko tí a gbìn pọ̀ tí ó ṣú dùdù sì ń fi àyè díẹ̀ sílẹ̀. Lẹ́yìn ọ̀pọ̀ àsìkò ti pípa èpò ṣáájú kí ó tó so irúgbìn, irúgbìn èpò inú ilẹ̀ ń dín kù, pípa èpò sì ń rọrùn sí i.",
            "Àwọn àgbẹ̀ CA kan tún ń lo oògùn apa èpò. Tí o bá lò ó, lo àwọn ọjà tí a forúkọ wọn sílẹ̀ ní orílẹ̀-èdè rẹ nìkan (ní Kenya, yẹ àkọsílẹ̀ Pest Control Products Board wò; ní Nàìjíríà, NAFDAC; ní Ghana, Environmental Protection Agency), rà á lọ́wọ́ olùtajà tí ó ní ìwé àṣẹ, kí o sì tẹ̀lé àmì ọjà (label) gẹ́lẹ́ fún irè oko, àkókò àti iye. Wọ aṣọ ààbò, ìbọ̀wọ́ àti bàtà orúnkún, jẹ́ kí àwọn ọmọdé àti ẹran jìnnà, má sì ṣe fín in nítòsí omi láéláé. Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ kí o tó bẹ̀rẹ̀."
          ],
          steps: ["Pa èpò ní kùtùkùtù: àwọn ọ̀sẹ̀ àkọ́kọ́ lẹ́yìn tí irè oko hù.", "Ro díẹ̀díẹ̀ pẹ̀lú ọkọ́ tàbí fi ọwọ́ fà á; má ṣe yí ilẹ̀ padà.", "Má ṣe jẹ́ kí èpò so irúgbìn láéláé.", "Lo ìbora, irè ìbora àti irè oko tí a gbìn pọ̀ tí ó ṣú láti ṣíji bo èpò.", "Tí o bá ń lo oògùn apa èpò: ọjà tí a forúkọ rẹ̀ sílẹ̀, àmì ọjà, ohun ààbò.", "Ṣètò òṣìṣẹ́ fún pípa èpò kí àsìkò tó bẹ̀rẹ̀."],
          words: [["Irúgbìn èpò inú ilẹ̀ (weed seed bank)", "àwọn irúgbìn èpò tí ó wà nínú ilẹ̀, tí ń dúró láti hù."], ["Oògùn apa èpò (herbicide)", "kẹ́míkà tí ó ń pa èpò."], ["Ọjà tí a forúkọ rẹ̀ sílẹ̀", "oògùn kòkòrò tàbí oògùn apa èpò tí àjọ ìjọba orílẹ̀-èdè fọwọ́ sí fún lílò."]],
          slides: [
            { title: "Èpò ni àdánwò ńlá", bullets: ["Ó pọ̀ jù ní àwọn àsìkò àkọ́kọ́", "Ìdí pàtàkì tí àwọn àgbẹ̀ fi ń jáwọ́", "Ṣètò pípa èpò láti ìbẹ̀rẹ̀"] },
            { title: "Pa èpò láìtúlẹ̀", bullets: ["Ní kùtùkùtù àti léraléra lẹ́yìn tí irè oko hù", "Ríro díẹ̀díẹ̀ tàbí fífi ọwọ́ fà á", "Má ṣe jẹ́ kí èpò so irúgbìn láéláé"] },
            { title: "Jẹ́ kí ìbora ṣiṣẹ́ náà", bullets: ["Ìbora àti irè ìbora ń ṣíji bo èpò", "Irè oko tí a gbìn pọ̀ tí ó ṣú ń fi àyè díẹ̀ sílẹ̀", "Irúgbìn èpò inú ilẹ̀ ń dín kù lórí àwọn àsìkò"] },
            { title: "Oògùn apa èpò? Láìléwu nìkan", bullets: ["Tí a forúkọ rẹ̀ sílẹ̀: PCPB (KE), NAFDAC (NG), EPA (GH)", "Tẹ̀lé àmì ọjà gẹ́lẹ́", "Ohun ààbò; jìnnà sí omi àti àwọn ọmọdé"] }
          ],
          sources: [PCPB, NAFDAC, EPA_GH, FAO_CA],
          tryIt: "Kọ ètò èpò fún oko rẹ: ìgbà tí o máa pa èpò (ọ̀sẹ̀ mélòó lẹ́yìn gbígbin), pẹ̀lú irinṣẹ́ wo, ta ló máa ṣe é àti ọjọ́ mélòó ni yóò gbà, àti bí ìbora tàbí irè oko tí a gbìn pọ̀ ṣe máa ràn lọ́wọ́. Tí o bá ń ronú nípa oògùn apa èpò, kọ ibi tí o ti máa yẹ̀ ẹ́ wò pé a ti forúkọ rẹ̀ sílẹ̀.",
          youCanNow: "ṣètò bí o ṣe máa pa èpò lórí oko CA láìtúlẹ̀, kí o sì lo oògùn apa èpò láìléwu àti lọ́nà òfin nìkan, tí o bá lò ó rárá.",
          quickCheck: [
            { objective: "O4", q: "Kí ló dé tí o kò fi gbọ́dọ̀ jẹ́ kí èpò so irúgbìn lórí oko CA láéláé?", options: ["Irúgbìn ń jẹ́ kí irè oko ní ìtọ́wò burúkú", "Irúgbìn èpò jẹ́ ajílẹ̀ tó dára", "Ó lòdì sí òfin", "Èpò kọ̀ọ̀kan tí ó bá so irúgbìn ń fi ẹgbẹẹgbẹ̀rún irúgbìn kún un fún ọdún tó ń bọ̀"], answer: 3, why: "Dídá èpò dúró kí ó má so irúgbìn ń dín irúgbìn èpò inú ilẹ̀ kù lórí àwọn àsìkò." },
            { objective: "O4", q: "Àgbẹ̀ obìnrin kan ní Kenya fẹ́ lo oògùn apa èpò lórí àgbàdo CA rẹ̀. Kí ló yẹ kí ó kọ́kọ́ yẹ̀ wò?", options: ["Pé Pest Control Products Board ti forúkọ rẹ̀ sílẹ̀, àti bí àmì ọjà ṣe sọ pé kí a lò ó", "Pé ìgò rẹ̀ ló wọ́n jù", "Pé aládùúgbò kan fẹ́ràn rẹ̀", "Pé kò ní àmì ọjà"], answer: 0, why: "Ọjà tí a forúkọ rẹ̀ sílẹ̀ nìkan, tí a lò bí àmì ọjà ti sọ, pẹ̀lú ohun ààbò, ló jẹ́ àìléwu àti ti òfin." }
          ]
        },
        {
          title: "Irinṣẹ́, àkókò, ọdún ọ̀dá àti àsìkò ìyípadà",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Kọ kàlẹ́ńdà àsìkò fún iṣẹ́ CA, irinṣẹ́ àti owó, kí o sì ṣètò ilẹ̀ ìfiwéra.",
          text: [
            "Àsìkò CA ń bẹ̀rẹ̀ ní ẹ̀ẹ̀rùn, kì í ṣe nígbà tí òjò bá dé. Kàlẹ́ńdà tí ó wọ́pọ̀: lẹ́yìn ìkórè, fi àṣẹ́kù irè oko sílẹ̀, kí ẹ sì fohùn ṣọ̀kan lórí jíjẹ ẹran; ní ẹ̀ẹ̀rùn, gbẹ́ kòtò ọ̀gbìn tàbí tún wọn lò, tàbí ṣe ripping, kí o sì fi ìgbẹ́ ẹran sí i; nígbà òjò àkọ́kọ́ tó dára, gbìn lẹ́sẹ̀kẹsẹ̀ (kò sí dídúró de títúlẹ̀); ní àwọn ọ̀sẹ̀ àkọ́kọ́, pa èpò ní kùtùkùtù àti léraléra; láàárín àsìkò, fi irè oko tí a gbìn pọ̀ tàbí irè ìbora kún un; nígbà ìkórè, fi àṣẹ́kù irè oko sílẹ̀ sórí oko, kí o sì ṣètò yíyí irè oko padà fún àsìkò tó ń bọ̀. Lẹ́gbẹ̀ẹ́ iṣẹ́ kọ̀ọ̀kan, kọ irinṣẹ́ (ọkọ́, ripper, jab planter, ẹ̀rọ ìfín oògùn àti ohun ààbò) àti owó rẹ̀, bóyá o ní i, o yá a tàbí o yá a lọ́wọ́ ẹnìkan lọ́fẹ̀ẹ́.",
            "Ní ọdún ọ̀dá, àǹfààní pàtàkì CA máa ń hàn. Kòtò ọ̀gbìn àti ìbora ń gba omi púpọ̀ sí i, wọ́n sì ń dì í mú, gbígbin ní àkókò sì ń lo òjò àkọ́kọ́. Àtúnyẹ̀wò ọ̀pọ̀ àdánwò ní àwọn agbègbè gbígbẹ ní Zimbabwe rí i pé kòtò ọ̀gbìn mú àgbàdo púpọ̀ ju títúlẹ̀ lọ ní ohun tí ó ju ìdajì àwọn àdánwò náà lọ. Ṣùgbọ́n CA kì í borí títúlẹ̀ lọ́dọọdún, kò sì lè dípò òjò tí kò rọ̀ rárá.",
            "Retí àsìkò ìyípadà. Ìkórè lè dúró bí ó ti wà tàbí kódà kí ó dín kù ní àsìkò àkọ́kọ́ kan tàbí méjì nígbà tí èpò pọ̀ tí ilẹ̀ sì ń mú ara bá a mu; àǹfààní sábà máa ń dàgbà lórí ọ̀pọ̀ àsìkò bí ìbora àti ohun alààyè tó ti jẹrà ṣe ń pọ̀ sí i. Bẹ̀rẹ̀ lórí oko kan, fi ilẹ̀ tí a túlẹ̀ sílẹ̀ lẹ́gbẹ̀ẹ́ rẹ̀, kí o sì kọ ìkórè, ọjọ́ iṣẹ́ àti owó fún méjèèjì ní àsìkò kọ̀ọ̀kan. Ṣèdájọ́ CA lẹ́yìn àsìkò mẹ́ta, kì í ṣe ọ̀kan."
          ],
          steps: ["Kọ gbogbo iṣẹ́ láti ìkórè dé ìkórè.", "Fi ọ̀kọ̀ọ̀kan sínú oṣù kan.", "Fi irinṣẹ́ kún un, àti bóyá o ní i, o yá a tàbí o yá a lọ́fẹ̀ẹ́.", "Fi owó àti ọjọ́ iṣẹ́ kún un.", "Sàmì sí ilẹ̀ ìfiwéra tí a túlẹ̀, tí ó tóbi bákan náà.", "Kọ ìkórè, iṣẹ́ àti owó fún méjèèjì ní àsìkò kọ̀ọ̀kan; ṣèdájọ́ lẹ́yìn àsìkò mẹ́ta."],
          words: [["Àsìkò ìyípadà (transition period)", "àwọn àsìkò àkọ́kọ́ lẹ́yìn tí o yí padà sí CA, nígbà tí èpò pọ̀ tí àǹfààní sì ṣì ń dàgbà."], ["Ilẹ̀ ìfiwéra (comparison plot)", "ilẹ̀ tí a ṣe ní ọ̀nà àtijọ́ lẹ́gbẹ̀ẹ́ ilẹ̀ CA, kí a lè fi èsì wéra lọ́nà tí ó tọ́."], ["Ọjọ́ iṣẹ́ (labour day)", "ènìyàn kan tí ó ṣiṣẹ́ fún ọjọ́ kan; a fi ń wọn iye iṣẹ́ tí iṣẹ́ kan ń gbà."]],
          slides: [
            { title: "Àsìkò ń bẹ̀rẹ̀ ní ẹ̀ẹ̀rùn", bullets: ["Lẹ́yìn ìkórè: fi àṣẹ́kù irè oko sílẹ̀, fohùn ṣọ̀kan lórí jíjẹ ẹran", "Ẹ̀ẹ̀rùn: kòtò ọ̀gbìn tàbí ripping, ìgbẹ́ ẹran", "Òjò àkọ́kọ́ tó dára: gbìn lẹ́sẹ̀kẹsẹ̀"] },
            { title: "Kàlẹ́ńdà pẹ̀lú irinṣẹ́ àti owó", bullets: ["Ọkọ́, ripper, jab planter, ohun ààbò", "Ṣé o ní i, o yá a tàbí o yá a lọ́fẹ̀ẹ́?", "Owó àti ọjọ́ iṣẹ́ fún iṣẹ́ kọ̀ọ̀kan"] },
            { title: "Ọdún ọ̀dá", bullets: ["Kòtò ọ̀gbìn àti ìbora ń di omi púpọ̀ sí i mú", "Zimbabwe: kòtò ọ̀gbìn borí títúlẹ̀ ní ohun tí ó ju ìdajì àdánwò lọ", "Kì í ṣe lọ́dọọdún; kò sí òjò = kò sí irè oko"] },
            { title: "Lílà àsìkò ìyípadà kọjá", bullets: ["Ìkórè lè dín kù ní àsìkò 1 sí 2", "Fi ilẹ̀ tí a túlẹ̀ sílẹ̀ láti fi wéra", "Kọ ìkórè, iṣẹ́, owó; ṣèdájọ́ lẹ́yìn àsìkò 3"] }
          ],
          sources: [ZIM_CA, CIMMYT_ZM, FAO_CA],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò CA rẹ fún àsìkò kan lórí oko kan, pẹ̀lú àwòrán, ọ̀nà pípèsè ilẹ̀ àti ìdí rẹ̀, ètò ìbora àti èpò, irè oko àti yíyí wọn padà, kàlẹ́ńdà oṣù dé oṣù fún iṣẹ́, irinṣẹ́ àti owó, àti ibi tí ilẹ̀ ìfiwéra tí a túlẹ̀ máa wà.",
          youCanNow: "ṣètò àsìkò CA pípé pẹ̀lú irinṣẹ́, àkókò àti owó, kí o sì fi wé títúlẹ̀ lọ́nà tí ó tọ́ jálẹ̀ àwọn ọdún ìyípadà.",
          quickCheck: [
            { objective: "O5", q: "Ìgbà wo ni iṣẹ́ fún àsìkò CA ń bẹ̀rẹ̀?", options: ["Nígbà tí irè oko bá ń yọ òdòdó", "Ní ẹ̀ẹ̀rùn, lẹ́yìn ìkórè tó kọjá", "Nígbà òjò àkọ́kọ́, pẹ̀lú títúlẹ̀", "Nígbà ìkórè irè oko tó kàn"], answer: 1, why: "A ń ṣe kòtò ọ̀gbìn, ripping, ìgbẹ́ ẹran àti ètò àṣẹ́kù irè oko ní ẹ̀ẹ̀rùn kí o lè gbìn pẹ̀lú òjò àkọ́kọ́." },
            { objective: "O6", q: "Ilẹ̀ CA rẹ mú ìkórè kan náà bí ilẹ̀ tí a túlẹ̀ ní àsìkò àkọ́kọ́. Kí ló yẹ kí o ṣe?", options: ["Pa CA tì", "Túlẹ̀ ilẹ̀ CA náà", "Sun àṣẹ́kù irè oko", "Máa kọ ọ́ sílẹ̀ fún ó kéré tán àsìkò mẹ́ta kí o tó ṣèdájọ́"], answer: 3, why: "Àǹfààní ń dàgbà lórí ọ̀pọ̀ àsìkò; àsìkò kan ti tètè jù láti ṣèdájọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àsìkò oko àti àsìkò ìyípadà",
        questions: [
          { objective: "O4", q: "Kí ni o kò gbọ́dọ̀ ṣe sí àṣẹ́kù irè oko lórí oko CA láéláé?", options: ["Tẹ́ wọn déédéé", "Fi wọ́n sílẹ̀ lórí ilẹ̀", "Sun wọ́n", "Fi òmíràn kún un láti etí oko"], answer: 2, why: "Sísun ń mú ìbora àti ohun alààyè tó ti jẹrà tí CA gbára lé kúrò." },
          { objective: "O4", q: "Ọ̀nà pípa èpò wo ló bá CA mu?", options: ["Títúlẹ̀ èpò mọ́lẹ̀", "Sísun gbogbo oko", "Pípa èpò nígbà ìkórè nìkan", "Ríro díẹ̀díẹ̀ pẹ̀lú ọkọ́ tàbí fífi ọwọ́ fà á ní kùtùkùtù àti léraléra"], answer: 3, why: "Pípa èpò ní orí ilẹ̀ láìyí ilẹ̀ padà ń jẹ́ kí ìdàrú ilẹ̀ kéré jù." },
          { objective: "O5", q: "Èwo ló yẹ kí ó wà nínú kàlẹ́ńdà àsìkò CA?", options: ["Gbígbẹ́ kòtò ọ̀gbìn tàbí títún wọn lò ní ẹ̀ẹ̀rùn, pẹ̀lú irinṣẹ́ àti owó", "Títúlẹ̀ lẹ́ẹ̀mejì ṣáájú gbígbin", "Sísun àṣẹ́kù irè oko lẹ́yìn ìkórè", "Gbígbin ní oṣù kan lẹ́yìn tí òjò bẹ̀rẹ̀"], answer: 0, why: "Kàlẹ́ńdà CA ń kọ iṣẹ́ kọ̀ọ̀kan pẹ̀lú oṣù, irinṣẹ́ àti owó rẹ̀." },
          { objective: "O5", q: "Kí ló dé tí CA sábà máa ń jẹ́ kí o gbìn ní kùtùkùtù?", options: ["Irúgbìn ń hù yára jù", "Òjò ń rọ̀ púpọ̀ sí i lórí oko CA", "A ń pèsè ilẹ̀ ní ẹ̀ẹ̀rùn, nítorí náà o ń gbìn pẹ̀lú òjò àkọ́kọ́ tó dára", "Irúgbìn kò wọ́n tó bẹ́ẹ̀"], answer: 2, why: "Láìdúró de títúlẹ̀, o lè gbìn ní àkókò." },
          { objective: "O6", q: "Nǹkan mẹ́ta wo ló yẹ kí o kọ sílẹ̀ fún ilẹ̀ CA àti ilẹ̀ tí a túlẹ̀?", options: ["Àwọ̀, òórùn àti ìtọ́wò", "Òjò nìkan", "Ìkórè, ọjọ́ iṣẹ́ àti owó", "Iye àwọn àlejò"], answer: 2, why: "Ìkórè, iṣẹ́ àti owó ń fi hàn bóyá CA ń mú èrè wá lórí oko rẹ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Iṣẹ́ Àgbẹ̀ Ìpamọ́ Ilẹ̀ fún Àwọn Àsìkò Gbígbẹ",
    questions: [
      { objective: "O1", q: "Àkọsílẹ̀ wo ló fún wa ní àwọn ìlànà mẹ́ta iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ ti FAO?", options: ["Títúlẹ̀, sísun, gbígbin irè oko kan ṣoṣo", "Ìdàrú ilẹ̀ tí ó kéré jù, ìbora ilẹ̀ títí lọ, oríṣiríṣi irè oko", "Bíbomirin oko, ajílẹ̀, oògùn kòkòrò", "Títúlẹ̀ jíjìn, ilẹ̀ ìhòòhò, irè oko kan"], answer: 1, why: "Ìwọ̀nyí ni ìlànà mẹ́ta tí FAO ṣàlàyé." },
      { objective: "O1", q: "Gẹ́gẹ́ bí FAO ti sọ, ó kéré tán iye wo nínú ilẹ̀ ló yẹ kí a bò lábẹ́ CA?", options: ["Ìdá 5 nínú ọgọ́rùn-ún", "Ìdá 10 nínú ọgọ́rùn-ún", "Ìdá 30 nínú ọgọ́rùn-ún", "Ìdá 100 nínú ọgọ́rùn-ún ní gbogbo ìgbà"], answer: 2, why: "FAO tọ́ka sí ìbora ohun alààyè títí lọ tí ó kéré tán ìdá 30 nínú ọgọ́rùn-ún." },
      { objective: "O1", q: "Kí ni ìdàrú ilẹ̀ tí ó kéré jù túmọ̀ sí?", options: ["Dídà ilẹ̀ rú níbi tí irúgbìn àti ajílẹ̀ ń lọ nìkan", "Títúlẹ̀ lẹ́ẹ̀kan dípò lẹ́ẹ̀mejì", "Àìgbìn rárá", "Fífi ọwọ́ gbẹ́ gbogbo oko"], answer: 0, why: "Ibi gbígbin, kòtò tàbí ìlà ripper nìkan ni a ń dà rú." },
      { objective: "O1", q: "Yíyí irè oko padà wo ló fi oríṣiríṣi irè oko hàn?", options: ["Àgbàdo, àgbàdo, àgbàdo", "Ilẹ̀ ìhòòhò tí a fi sílẹ̀ lọ́dọọdún", "Ọkà bàbà nìkan", "Àgbàdo, lẹ́yìn náà ẹ̀wà (cowpea), lẹ́yìn náà ọkà bàbà"], answer: 3, why: "Irè oko mẹ́ta tí ó yàtọ̀ síra bí àkókò ti ń lọ ni oríṣiríṣi irè oko." },
      { objective: "O2", q: "Kí ni kòtò zai?", options: ["Adágún ẹja", "Kòtò ọ̀gbìn pẹ̀lú ìgbẹ́ ẹran tàbí kómpóòsì tí ó ń gba òjò", "Ilé ìkó ọkà sí", "Kànga fún bíbomirin oko"], answer: 1, why: "Kòtò zai ń kó omi àti oúnjẹ ilẹ̀ jọ sí ibi tí irè oko wà." },
      { objective: "O2", q: "Ìlà kòtò ọ̀gbìn yẹ kí ó lọ:", options: ["Sókè àti sísàlẹ̀ ìtẹ̀ ilẹ̀", "Ní òbìrìkìtì", "Ní ìbú ìtẹ̀ ilẹ̀, tẹ̀lé ìlà ìpele kan náà (contour)", "Ní ọ̀nà èyíkéyìí"], answer: 2, why: "Ìlà tí ó gba ìbú ìtẹ̀ ilẹ̀ ń gba omi dípò kí ó máa darí rẹ̀ sísàlẹ̀." },
      { objective: "O2", q: "Kí ló dé tí a fi ń tún àwọn kòtò kan náà lò ní àwọn àsìkò tó ń bọ̀?", options: ["Ó ń dín iṣẹ́ kù púpọ̀, ó sì ń mú ilẹ̀ dára sí i ní ibi kan náà", "A kò lè gbẹ́ kòtò lẹ́ẹ̀mejì", "Òfin ló pa á láṣẹ", "Kòtò tuntun ń fa kòkòrò mọ́ra"], answer: 0, why: "Títún kòtò lò yára jù bẹ́ẹ̀ lọ, ó sì ń kó àtúnṣe jọ sí ibì kan." },
      { objective: "O3", q: "Àgbẹ̀ wo ni kòtò ọ̀gbìn tí a fi ọwọ́ gbẹ́ bá mu jù?", options: ["Àgbẹ̀ tí ó ní hẹ́kítà 20 àti tírakító", "Àgbẹ̀ tí kò ní òṣìṣẹ́ rárá", "Àgbẹ̀ tí ó fẹ́ túlẹ̀", "Àgbẹ̀ tí ń lo ọkọ́ ọwọ́ lórí ilẹ̀ kékeré"], answer: 3, why: "Kòtò ọ̀gbìn bá ilẹ̀ kékeré tí a ń fi ọwọ́ ṣe mu." },
      { objective: "O3", q: "Kí ni plough pan?", options: ["Ìkòkò ìdáná", "Irú irúgbìn kan", "Adágún omi tí kò jìn", "Ìpele líle ní ìsàlẹ̀ ibi tí títúlẹ̀ dé, tí ó ń dí gbòǹgbò àti omi lọ́wọ́"], answer: 3, why: "Títúlẹ̀ léraléra lè ṣẹ̀dá ìpele líle tí ripper lè fọ́." },
      { objective: "O3", q: "Kí ni gbígbin tààrà túmọ̀ sí?", options: ["Gbígbin tààrà sínú ilẹ̀ àti àṣẹ́kù irè oko tí a kò dà rú", "Fífọ́n irúgbìn ká pẹ̀lú ọwọ́ sórí ilẹ̀ tí a túlẹ̀", "Gbígbin ọmọ irè oko láti inú nọ́ọ̀sírì", "Ríra irúgbìn tààrà lọ́wọ́ ilé-iṣẹ́"], answer: 0, why: "Gbígbin tààrà ń fi irúgbìn sílẹ̀ láìṣí ilẹ̀ kọjá ibi gbígbin." },
      { objective: "O4", q: "Ibo ni ìbora ilẹ̀ àfikún lè ti wá tí ẹran bá jẹ ọ̀pọ̀ àṣẹ́kù irè oko?", options: ["Sísun", "Títúlẹ̀", "Ẹ̀wà (cowpea) tàbí lablab tí a gbìn pọ̀, koríko etí oko tàbí ẹ̀ka igi tí a rẹ́", "Ọ̀rá (plastic)"], answer: 2, why: "Irè oko tí a gbìn pọ̀, koríko àti ẹ̀ka igi ń fi ìbora kún un láìgba gbogbo oúnjẹ ẹran." },
      { objective: "O4", q: "Ní Nàìjíríà, àjọ wo ló ń forúkọ àwọn kẹ́míkà oko bí oògùn apa èpò sílẹ̀?", options: ["NAFDAC", "Iléeṣẹ́ ojú-ọjọ́", "Báńkì àpapọ̀", "Àjọ bọ́ọ̀lù àfẹsẹ̀gbá"], answer: 0, why: "NAFDAC ló ń forúkọ àwọn kẹ́míkà oko sílẹ̀ ní Nàìjíríà; yẹ àkọsílẹ̀ rẹ̀ wò." },
      { objective: "O4", q: "Ìgbà wo ni pípa èpò ṣe pàtàkì jù nínú irè oko CA?", options: ["Nígbà ìkórè nìkan", "Láéláé", "Lẹ́yìn tí ó bá yọ òdòdó nìkan", "Ní àwọn ọ̀sẹ̀ àkọ́kọ́ lẹ́yìn tí irè oko hù jáde"], answer: 3, why: "Èpò àkọ́kọ́ ló ń bá irè oko ọ̀dọ́ díje jù." },
      { objective: "O4", q: "Tí o bá ń lo oògùn apa èpò, kí ni o gbọ́dọ̀ ṣe?", options: ["Po oògùn tìrẹ tí ó le jù", "Lo ọjà tí a forúkọ rẹ̀ sílẹ̀, tẹ̀lé àmì ọjà gẹ́lẹ́, kí o sì wọ ohun ààbò", "Fín in nítòsí kànga", "Jẹ́ kí àwọn ọmọdé ràn ọ́ lọ́wọ́ láti fín in"], answer: 1, why: "Ọjà tí a forúkọ rẹ̀ sílẹ̀ nìkan tí a lò bí àmì ọjà ti sọ, pẹ̀lú ààbò, ló jẹ́ àìléwu àti ti òfin." },
      { objective: "O5", q: "Irinṣẹ́ wo ló ń fi ọwọ́ gbin irúgbìn sí ilẹ̀ láàárín àṣẹ́kù irè oko?", options: ["Ẹ̀rọ ìtúlẹ̀ abẹ ìtúlẹ̀ (mouldboard plough)", "Ìkòkò ìbomirin", "Jab planter", "Ẹ̀rọ ìfọ́ erùpẹ̀ (harrow)"], answer: 2, why: "Jab planter jẹ́ irinṣẹ́ ọwọ́ fún gbígbin tààrà." },
      { objective: "O5", q: "Kí ló yẹ kí ó wà nínú ìlà kọ̀ọ̀kan kàlẹ́ńdà CA rẹ?", options: ["Iṣẹ́ náà, oṣù, irinṣẹ́ àti owó", "Orúkọ irè oko nìkan", "Òjò nìkan", "Orúkọ aládùúgbò"], answer: 0, why: "Iṣẹ́, oṣù, irinṣẹ́ àti owó ló ń jẹ́ kí kàlẹ́ńdà wúlò." },
      { objective: "O5", q: "Ìgbà wo ni a ń gbẹ́ kòtò ọ̀gbìn tàbí tún wọn lò, tí a sì ń fi ìgbẹ́ ẹran sí i?", options: ["Nígbà tí ó bá ń yọ òdòdó", "Ní ẹ̀ẹ̀rùn ṣáájú òjò", "Nígbà ìkórè", "Lẹ́yìn tí òjò bá dáwọ́ dúró"], answer: 1, why: "Ìpalẹ̀mọ́ ẹ̀ẹ̀rùn ń jẹ́ kí o gbìn nígbà òjò àkọ́kọ́ tó dára." },
      { objective: "O6", q: "Ní ọdún ọ̀dá, kí ló dé tí CA sábà máa ń ṣe dáadáa ju títúlẹ̀ lọ?", options: ["Ó ń mú kí òjò rọ̀", "Kò nílò irúgbìn", "Ó ń dá gbogbo kòkòrò dúró", "Kòtò ọ̀gbìn àti ìbora ń gba omi púpọ̀ sí i, wọ́n sì ń dì í mú"], answer: 3, why: "Omi púpọ̀ sí i ń rì wọlé, díẹ̀ ló sì ń gbẹ lọ lábẹ́ ìbora." },
      { objective: "O6", q: "Kí ló lè ṣẹlẹ̀ sí ìkórè ní àsìkò CA àkọ́kọ́ kan tàbí méjì?", options: ["Ó máa ń di ìlọ́po méjì nígbà gbogbo", "Ó lè dúró bí ó ti wà tàbí dín kù díẹ̀ nígbà tí èpò pọ̀ tí ilẹ̀ sì ń mú ara bá a mu", "Ó máa ń dín kù dé òdo nígbà gbogbo", "A kò lè mọ nǹkan kan"], answer: 1, why: "Àsìkò ìyípadà lè le; àǹfààní ń dàgbà lórí ọ̀pọ̀ àsìkò." },
      { objective: "O6", q: "Kí ló dé tí o fi máa fi ilẹ̀ tí a túlẹ̀ sílẹ̀ lẹ́gbẹ̀ẹ́ ilẹ̀ CA rẹ?", options: ["Láti fi ìkórè, iṣẹ́ àti owó wéra lọ́nà tí ó tọ́", "Láti bọ́ àwọn màlúù", "Nítorí òfin CA pa á láṣẹ", "Láti gbin èpò"], answer: 0, why: "Ilẹ̀ ìfiwéra ń fi ohun tí CA ń ṣe gan-an lórí oko rẹ hàn." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 1, 4, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ìlànà mẹ́ta", objective: "O1", notYet: "Ètò náà ṣì ń túlẹ̀, ó ń fi ilẹ̀ sílẹ̀ ní ìhòòhò, tàbí ó ń gbin irè oko kan ṣoṣo.", meets: "Ètò náà fi ìdàrú ilẹ̀ tí ó kéré jù, ìbora àti yíyí irè oko padà tàbí gbígbìn pọ̀ pẹ̀lú ó kéré tán irè oko mẹ́ta bí àkókò ti ń lọ hàn.", exceeds: "Ó ṣàlàyé bí àwọn ìlànà mẹ́ta ṣe ń ran ara wọn lọ́wọ́ lórí oko yìí." },
      { name: "Pípèsè ilẹ̀", objective: "O3", notYet: "Kò yan ọ̀nà kankan, tàbí kò sí ìdí.", meets: "Ó yan kòtò ọ̀gbìn, kòtò zai, ripping tàbí gbígbin tààrà pẹ̀lú ó kéré tán ìdí méjì (òṣìṣẹ́, agbára fífà, ilẹ̀, bí oko ṣe tóbi tó).", exceeds: "Ó sọ ibi tí irinṣẹ́ máa ti wá, ó sì ti rí ọ̀nà náà tàbí dán an wò." },
      { name: "Bí a ṣe to kòtò", objective: "O2", notYet: "Kòtò kò gba ìbú ìtẹ̀ ilẹ̀, tàbí kò sí ètò ìgbẹ́ ẹran.", meets: "Ìlà ní ìbú ìtẹ̀ ilẹ̀, ọjọ́ gbígbẹ́ ní ẹ̀ẹ̀rùn àti ìgbẹ́ ẹran tàbí kómpóòsì nínú kòtò kọ̀ọ̀kan (tí a bá ń lo kòtò ọ̀gbìn tàbí kòtò zai).", exceeds: "Ó ti gbẹ́ apá ìdánwò kan, ó wọn àkókò rẹ̀, ó sì ṣírò iṣẹ́ fún gbogbo oko." },
      { name: "Ìbora àti èpò", objective: "O4", notYet: "Kò sí ètò fún àṣẹ́kù irè oko, jíjẹ ẹran tàbí èpò.", meets: "Ó ń bo ó kéré tán ìdá 30 nínú ọgọ́rùn-ún, ó yanjú ọ̀rọ̀ jíjẹ ẹran, ó sì ní ètò pípa èpò; oògùn apa èpò èyíkéyìí ti forúkọ sílẹ̀, a sì ń lò ó bí àmì ọjà ti sọ pẹ̀lú ohun ààbò.", exceeds: "Ó fi irè ìbora tàbí irè oko tí a gbìn pọ̀ kún un, àti ètò láti dá èpò dúró kí ó má so irúgbìn." },
      { name: "Kàlẹ́ńdà àsìkò", objective: "O5", notYet: "Àwọn iṣẹ́ kan kò sí, tàbí wọn kò ní ọjọ́.", meets: "Gbogbo iṣẹ́ láti ìpalẹ̀mọ́ ẹ̀ẹ̀rùn dé ìkórè, pẹ̀lú oṣù, irinṣẹ́ àti owó.", exceeds: "Ó ní ọjọ́ iṣẹ́ àti ẹni tí ó máa ṣe iṣẹ́ kọ̀ọ̀kan." },
      { name: "Ìfiwéra jálẹ̀ àsìkò ìyípadà", objective: "O6", notYet: "Kò sí ilẹ̀ ìfiwéra tàbí àkọsílẹ̀.", meets: "Ilẹ̀ ìfiwéra tí a túlẹ̀, pẹ̀lú ìkórè, ọjọ́ iṣẹ́ àti owó láti kọ sílẹ̀ ní àsìkò kọ̀ọ̀kan.", exceeds: "Ó pinnu láti ṣèdájọ́ lẹ́yìn àsìkò mẹ́ta, ó sì kọ ohun tí yóò mú kí ó yí ètò náà padà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe àsìkò CA kan lórí ó kéré tán oko kan pẹ̀lú ilẹ̀ ìfiwéra (ìwádìí àtẹ̀lé)",
      "Ìkórè, ọjọ́ iṣẹ́ àti owó lórí ilẹ̀ CA àti ilẹ̀ tí a túlẹ̀ fún àsìkò mẹ́ta, pàápàá ní ọdún gbígbẹ (àkọsílẹ̀ akẹ́kọ̀ọ́)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì ń ṣe CA lẹ́yìn àsìkò mẹ́ta, àti bí ilẹ̀ tí wọ́n ń ṣe lábẹ́ CA ṣe tóbi tó",
      "Àwọn aládùúgbò tàbí ọmọ ẹgbẹ́ tí wọ́n gba CA (ìròyìn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àti gègé fún àwòrán oko àti kàlẹ́ńdà",
      "Ọkọ́, okùn tàbí igi àti téèpù ìwọ̀n tàbí igi tí a ti wọ̀n fún títo kòtò",
      "Ìgbẹ́ ẹran tàbí kómpóòsì fún kòtò ìdánwò",
      "Iye owó ní agbègbè tàbí owó yíyá ripper, jab planter àti òṣìṣẹ́ (tàbí iye àpẹẹrẹ)",
      "Nǹkan bí ìṣẹ́jú 90 lápapọ̀, pẹ̀lú àkókò lórí oko fún ìdánwò kòtò"
    ],
    facilitatorNotes: [
      "Ẹ ṣe Ẹ̀kọ́ 2 lórí oko: ẹ jọ to kòtò ọ̀gbìn tàbí kòtò zai díẹ̀, kí ẹ gbẹ́ wọn, kí ẹ sì wọn àkókò iṣẹ́ náà.",
      "Pe àgbẹ̀ kan tí ó ti ń ṣe CA, tàbí ṣètò ìbẹ̀wò sí ilẹ̀ àfihàn kan, kí àwọn akẹ́kọ̀ọ́ lè rí ripping tàbí gbígbin tààrà tí ó ń ṣiṣẹ́.",
      "Ẹ sọ̀rọ̀ ní gbangba nípa àṣà jíjẹ ẹran; mú àwọn darandaran tàbí àwọn olórí àdúgbò wá sínú ìjíròrò tí ó bá ṣeé ṣe.",
      "Má ṣe dámọ̀ràn oògùn apa èpò kan pàtó; darí àwọn akẹ́kọ̀ọ́ sí àkọsílẹ̀ ìforúkọsílẹ̀ orílẹ̀-èdè àti òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀, kí o sì tẹnu mọ́ àmì ọjà àti ohun ààbò.",
      "Fún wọn ní ìrètí tí ó jẹ́ òótọ́ nípa àsìkò ìyípadà: ìkórè lè má pọ̀ sí i ní àwọn àsìkò àkọ́kọ́.",
      "Fi rubric ṣe àmì fún ètò ìkẹyìn, kí o sì tẹ̀lé wọn lẹ́yìn àsìkò kọ̀ọ̀kan láti fi àwọn ilẹ̀ wéra."
    ]
  }
};
