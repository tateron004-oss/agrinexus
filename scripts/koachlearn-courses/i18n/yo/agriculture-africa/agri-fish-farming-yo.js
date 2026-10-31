"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-fish-farming.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_OXYGEN = { name: "FAO, Ibùdó Ọ̀sìn Ẹja ti Ẹkùn Áfíríkà (Kutty, 1987): oxygen inú omi adágún ẹja", url: "https://www.fao.org/4/AC175E/AC175E04.htm" };
const GHANA_MANUAL = { name: "Ìwé ìtọ́sọ́nà àgbẹ̀ fún ọ̀sìn ẹja tilapia kékeré nínú adágún ní Ghana (Agyakwah àti àwọn míì, 2020; CGIAR)", url: "https://hdl.handle.net/10568/143338" };
const WORLDFISH_NG = { name: "WorldFish: ọ̀sìn ẹja tilapia GIFT ní Nàìjíríà (hatchery, ìdàgbàsókè, ọjà), 2025", url: "https://worldfishcenter.org/impact-story/tilapia-farming-more-lucrative-catfish-inside-nigerias-aquaculture-shift" };
const ALR_CI = { name: "Aquatic Living Resources (2001): ẹja tó pọ̀ jù nínú adágún ń dín èso tilapia kù ní Côte d'Ivoire", url: "https://www.alr-journal.org/articles/alr/abs/2001/05/alr1120/alr1120.html" };
const GHANA_FC = { name: "Fisheries Commission (Ghana): ìwé àṣẹ àti láìsẹ́ǹsì, pẹ̀lú ti ọ̀sìn ẹja", url: "https://www.fishcom.gov.gh/" };
const KENYA_ACT = { name: "Kenya: Fisheries Management and Development Act, 2016 (ìforúkọsílẹ̀ àti láìsẹ́ǹsì ọ̀sìn ẹja), lórí FAOLEX", url: "https://faolex.fao.org/docs/pdf/ken160880.pdf" };

module.exports = {
  id: "agri-fish-farming-yo",
  lang: "yo",
  translationOf: "agri-fish-farming",
  category: "Agriculture (Africa)",
  name: "Ìpìlẹ̀ Ọ̀sìn Ẹja (Aquaculture)",
  skills: "Yíyan tilapia tàbí ẹja àrọ̀, Yíyan ibi àti kíkọ́ adágún ẹja, Ṣíṣàyẹ̀wò omi, Rírà àti kíkó ọmọ ẹja tó dára sínú adágún, Fífún ẹja ní oúnjẹ àti ṣíṣírò FCR, Ṣíṣírò ìnáwó ìyípo ọ̀sìn kan",
  outcome: "ṣètò kí o sì ṣe ìyípo ọ̀sìn kan ti tilapia tàbí ẹja àrọ̀ (African catfish) nínú adágún tàbí tánkì: yan irú ẹja àti ibi, ṣàyẹ̀wò àwọn ìwé àṣẹ, ṣàyẹ̀wò omi pẹ̀lú irinṣẹ́ tó rọrùn, kó ọmọ ẹja tó dára sínú rẹ̀ ní iye tí kò pọ̀ jù, fún wọn ní oúnjẹ dáadáa kí o sì máa tọpa FCR, yanjú àwọn ìṣòro tó wọ́pọ̀, kí o sì kórè kí o sì tà ní èrè tí o ti ṣírò ṣáájú.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tó ṣẹ̀ṣẹ̀ ń sin ẹja àti àwọn tó ń sin ín ní kékeré, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Ghana, Nàìjíríà, Kenya, Côte d'Ivoire àti káàkiri Áfíríkà tí wọ́n fẹ́ sin tilapia tàbí ẹja àrọ̀ nínú adágún tàbí tánkì. Ọ̀sìn ẹja lè mówó wọlé dáadáa kí ó sì bọ́ ẹbí, ṣùgbọ́n ọ̀pọ̀ adágún àkọ́kọ́ ló ń kùnà nítorí ọmọ ẹja tí kò dára, omi burúkú, àti oúnjẹ tí owó rẹ̀ ju owó tí wọ́n ta ẹja lọ.",
    "Orí 1 ṣètò oko ẹja: yíyan irú ẹja, yíyan ibi àti kíkọ́ adágún tàbí tánkì pẹ̀lú ṣíṣàyẹ̀wò ìwé àṣẹ, àti mímú omi wà ní ipò tó dára pẹ̀lú àyẹ̀wò tó rọrùn. Orí 2 dá lórí sísin àti títa ẹja: ọmọ ẹja tó dára àti iye ẹja nínú adágún, oúnjẹ àti FCR pẹ̀lú àwọn ìṣòro tó wọ́pọ̀, àti ìkórè, títà àti ìṣirò owó ìyípo kan.",
    "Àwọn òfin àti ìwé àṣẹ fún oko ẹja yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, wọ́n sì ń yí padà; ẹ̀kọ́ yìí dárúkọ àwọn àjọ tí o máa béèrè lọ́wọ́ wọn. Kò sọ iye oògùn tàbí kẹ́míkà kankan: tí ẹja bá ń ṣàìsàn, pe òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ fún ẹja tàbí dókítà ẹranko. Àpẹẹrẹ lásán ni àwọn iye owó; lo iye owó tí wọ́n sọ fún ọ ní agbègbè rẹ. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan fún oko rẹ. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò ìnáwó fún ìyípo kan ti adágún (tàbí tánkì) kan lórí oko rẹ, tàbí fún àpẹẹrẹ bí adágún tilapia onímítà onígun mẹ́rin 300 nítòsí Kumasi tàbí tánkì ẹja àrọ̀ nítòsí Ìbàdàn: irú ẹja àti ìdí rẹ̀; ibi, orísun omi àti ìwé àṣẹ tí o ṣàyẹ̀wò; àwọn àyẹ̀wò omi àti bí o ṣe máa ń ṣe wọ́n tó; iye ọmọ ẹja, iye ẹja lórí ìwọ̀n ilẹ̀ (density) àti hatchery tí ìjọba fọwọ́ sí tí o máa rà lọ́wọ́ rẹ̀; iye ẹja tí o retí pé yóò yè, ìwọ̀n wọn nígbà ìkórè àti oúnjẹ tí o nílò pẹ̀lú FCR tí o retí; gbogbo ìnáwó; owó títà tí o retí; èrè tàbí àdánù; àti iye owó ìdọ́gba (break-even) fún kìlógíráàmù kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tó ṣẹ̀ṣẹ̀ ń sin ẹja àti àwọn tó ń sin ín ní kékeré, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Ghana, Nàìjíríà, Kenya, àwọn orílẹ̀-èdè Ìwọ̀-oòrùn Áfíríkà tó ń sọ èdè Faransé àti ibòmíì ní Áfíríkà, tí wọ́n ń ṣètò tàbí tí wọ́n ń ṣiṣẹ́ adágún ilẹ̀ kan tàbí díẹ̀, adágún tí a tẹ́ ọ̀rá sí, tàbí tánkì tilapia tàbí ẹja àrọ̀.",
    startingPoint: "Wọ́n mọ̀ pé a lè sin ẹja, àwọn kan sì lè ní orísun omi àti ilẹ̀ díẹ̀. Ọ̀pọ̀ kò tíì ṣàyẹ̀wò omi rí, wọ́n ń ra ọmọ ẹja lọ́wọ́ ẹnikẹ́ni, wọ́n ń fún ẹja ní oúnjẹ láìmọ iye, wọn kò sì tíì ṣírò ìnáwó ìyípo kan kí wọ́n tó bẹ̀rẹ̀.",
    gap: "Àwọn ohun tó sábà máa ń mú kí oko ẹja kùnà ni ọmọ ẹja tí kò dára tàbí tí akọ àti abo wà pọ̀, ẹja tó pọ̀ jù nínú adágún, oxygen tó ń wálẹ̀ ní àfẹ̀mọ́jú, fífún ẹja ní oúnjẹ jù, àti oúnjẹ tí owó rẹ̀ ju owó títà ẹja lọ. Àwọn àgbẹ̀ nílò láti kọ ètò ìyípo kan sórí ìwé, mú omi wà ní ìlera pẹ̀lú àyẹ̀wò tó rọrùn, kó iye ọmọ ẹja tó dára tó tọ́ sínú adágún, kí wọ́n sì máa fi oúnjẹ wé ìdàgbàsókè ẹja, kí wọ́n lè mọ̀ ṣáájú ìkórè bóyá wọn yóò jèrè.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ẹ̀kọ́ náà tún wà ní èdè Spanish, French àti Arabic",
      "Ẹ̀rọ: fóònù lásán tàbí smartphone, ẹ̀rọ ìṣirò, àti irinṣẹ́ àyẹ̀wò olówó pọ́ọ́kú (tẹ́mómítà, ìwé pH, Secchi disk tí a fọwọ́ ṣe)",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá iṣẹ́ oko mu",
      "Ìwé àṣẹ àti òfin irú ẹja yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn; akẹ́kọ̀ọ́ gbọ́dọ̀ béèrè lọ́wọ́ ọ́fíìsì ẹja ti orílẹ̀-èdè tàbí ti county wọn",
      "Kò sí iye oògùn tàbí kẹ́míkà kankan; ẹja tó ń ṣàìsàn máa lọ sọ́dọ̀ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí dókítà ẹranko",
      "Àpẹẹrẹ ni àwọn iye owó; owó oúnjẹ àti owó ẹja yàtọ̀ gan-an láti ibì kan sí òmíràn àti láti ìgbà kan sí òmíràn"
    ],
    prerequisites: "Kò sí. Àwọn èrò \"Farm Records and Gross Margin\" (àkọsílẹ̀ oko àti èrè gbogbogbò) láti inú ẹ̀kọ́ \"Agribusiness and Farm Management\" ń ṣèrànwọ́ fún ìṣirò ìnáwó ní Ẹ̀kọ́ 6."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú omi, ilẹ̀, owó àti ọjà tí o ní ní agbègbè rẹ", action: "yan tilapia tàbí ẹja àrọ̀ (African catfish) àti ètò adágún tàbí tánkì", standard: "pẹ̀lú ó kéré tán ìdí mẹ́ta tó jẹ mọ́ ibi oko rẹ àti àwọn olùrà rẹ" },
    { id: "O2", condition: "Tí o bá ní ibi kan tí o lè lò", action: "yẹ ibi náà wò fún omi, ilẹ̀, bí ilẹ̀ ṣe dagẹ̀rẹ́ àti omíyalé, kí o sì kọ àwọn ìwé àṣẹ tí o máa béèrè nípa wọn sílẹ̀", standard: "kí o sì dárúkọ àjọ ẹja ní orílẹ̀-èdè rẹ tí o máa kàn sí" },
    { id: "O3", condition: "Pẹ̀lú tẹ́mómítà, ìwé pH àti Secchi disk", action: "ṣàyẹ̀wò omi adágún, kí o sì sọ ohun tí o máa ṣe tí oxygen, ìgbóná omi tàbí pH kò bá tọ́", standard: "kí o sì kọ àyẹ̀wò kọ̀ọ̀kan sílẹ̀ pẹ̀lú ọjọ́ àti àkókò" },
    { id: "O4", condition: "Tí o bá mọ ìwọ̀n adágún tàbí tánkì kan", action: "ṣírò iye ọmọ ẹja tí o máa kó sínú rẹ̀, kí o sì kọ àwọn ohun tí o máa yẹ̀ wò nínú hatchery tí ìjọba fọwọ́ sí sílẹ̀", standard: "pẹ̀lú ìṣirò tó tọ́, àti iye ẹja lórí ìwọ̀n ilẹ̀ (density) tí ìwọ àti òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí hatchery fohùn ṣọ̀kan lé lórí" },
    { id: "O5", condition: "Tí o bá ní àkọsílẹ̀ oúnjẹ àti ìwọ̀n àwọn ẹja àyẹ̀wò", action: "ṣírò FCR (ìwọ̀n bí oúnjẹ ṣe ń di ẹja), kí o sì tètè rí àwọn ìṣòro tó wọ́pọ̀", standard: "tó tọ́ dé díjíìtì kan lẹ́yìn àmì ìdá (bí 1.6)" },
    { id: "O6", condition: "Tí o bá mọ ìnáwó, iye ẹja tí o retí pé yóò yè, ìwọ̀n wọn nígbà ìkórè àti iye owó títà", action: "kọ ètò ìnáwó fún ìyípo kan pẹ̀lú èrè àti iye owó ìdọ́gba (break-even)", standard: "pẹ̀lú gbogbo ìnáwó nínú rẹ̀ àti ìṣirò tó tọ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣètò oko ẹja",
      lessons: [
        {
          title: "Yíyan irú ẹja àti ètò",
          objectives: ["O1"],
          minutes: 5,
          goal: "Yan tilapia tàbí ẹja àrọ̀ àti ètò adágún tàbí tánkì fún oko rẹ.",
          text: [
            "Ẹja méjì ni wọ́n ń sin jù ní Áfíríkà. Nile tilapia gbajúmọ̀ ní Ghana, Kenya, Côte d'Ivoire àti Egypt. Ó ń jẹ oúnjẹ pellet àti oúnjẹ àdánidá inú omi aláwọ̀ ewé, wọ́n sì ń tà á ní tútù, dídín tàbí yíyan. Tilapia tí akọ àti abo wà pọ̀ máa ń bímọ nínú adágún, wọ́n sì máa ń kún un fún ẹja kéékèèké, nítorí náà àwọn àgbẹ̀ ń ra ọmọ ẹja mono-sex (tí ó jẹ́ akọ jù lọ). Àwọn irú tí a ti mú dára sí i bí GIFT máa ń dàgbà kíákíá; WorldFish ròyìn pé àwọn àgbẹ̀ ní Nàìjíríà ń dé nǹkan bí 600 g láàárín oṣù mẹ́fà pẹ̀lú GIFT àti oúnjẹ tó dára.",
            "Ẹja àrọ̀ Áfíríkà (African catfish, Clarias) ni ẹja tí wọ́n ń sin jù ní Nàìjíríà, wọ́n sì fẹ́ràn rẹ̀ ní tútù àti ní yíyan lórí èéfín. Ó lè mí afẹ́fẹ́ lókè omi, nítorí náà ó máa ń yè dáadáa nígbà tí oxygen bá kéré, a sì lè kó púpọ̀ rẹ̀ pọ̀, nígbà púpọ̀ nínú tánkì. Ṣùgbọ́n ó nílò oúnjẹ tí ó ní protein púpọ̀, àwọn ẹja ńlá sì máa ń jẹ àwọn kékeré, nítorí náà o máa ya wọ́n sọ́tọ̀ gẹ́gẹ́ bí ìwọ̀n wọn.",
            "Yan ètò: adágún ilẹ̀ kò wọ́n láti ṣiṣẹ́ níbi tí ilẹ̀ ti ń di omi mú; adágún tí a tẹ́ ọ̀rá sí tàbí tánkì kọnkéré tàbí ike ń ṣiṣẹ́ lórí ilẹ̀ oníyanrìn tàbí ilẹ̀ kékeré, ṣùgbọ́n ó wọ́n jù láti kọ́, ó sì nílò yíyí omi padà léraléra. Ohun tó ṣe pàtàkì jù: kí o tó yan, béèrè lọ́wọ́ àwọn olùrà irú ẹja àti ìwọ̀n tí wọ́n fẹ́, àti iye owó tí wọ́n máa san."
          ],
          steps: ["Béèrè lọ́wọ́ olùrà mẹ́ta (àwọn oníṣòwò ọjà, ilé ìtura, àwọn tó ń yan ẹja) irú ẹja, ìwọ̀n àti iye owó tí wọ́n fẹ́.", "Yẹ omi rẹ wò: ó tó? Ó wà ní gbogbo ọdún? Ó mọ́?", "Yẹ ilẹ̀ rẹ wò: ṣé ó ń di omi mú?", "Yan irú ẹja tí àwọn olùrà fẹ́ tí omi rẹ sì lè gbé.", "Yan adágún tàbí tánkì gẹ́gẹ́ bí ilẹ̀, ààyè àti owó rẹ."],
          words: [["Aquaculture", "ọ̀sìn ẹja àti àwọn ẹranko omi míì."], ["Ọmọ ẹja (fingerling)", "ẹja kékeré, tó tó ìka ọwọ́, tí a ń rà láti kó sínú adágún."], ["Mono-sex", "ọmọ ẹja tí ó fẹ́rẹ̀ẹ́ jẹ́ irú kan náà (tilapia akọ), kí wọ́n lè dàgbà dípò bíbímọ."], ["GIFT", "Genetically Improved Farmed Tilapia: irú tilapia tó ń dàgbà kíákíá tí WorldFish ṣe."]],
          slides: [
            { title: "Nile tilapia", bullets: ["Gbajúmọ̀ ní Ghana, Kenya, Côte d'Ivoire", "Ó ń jẹ pellet àti oúnjẹ inú omi aláwọ̀ ewé", "Ra ọmọ ẹja mono-sex; GIFT ń dàgbà kíákíá"] },
            { title: "Ẹja àrọ̀ Áfíríkà", bullets: ["Ẹja tí wọ́n ń sin jù ní Nàìjíríà; tútù tàbí yíyan", "Ó ń mí afẹ́fẹ́; a lè kó púpọ̀ pọ̀, nínú tánkì", "Ó nílò oúnjẹ protein púpọ̀; ya wọ́n sọ́tọ̀ nípa ìwọ̀n"] },
            { title: "Adágún tàbí tánkì", bullets: ["Adágún ilẹ̀: kò wọ́n níbi tí ilẹ̀ ti ń di omi mú", "Adágún ọ̀rá tàbí tánkì: ilẹ̀ oníyanrìn, ilẹ̀ kékeré", "Tánkì wọ́n jù, ó sì nílò yíyí omi padà léraléra"] },
            { title: "Bẹ̀rẹ̀ pẹ̀lú olùrà", bullets: ["Ẹja wo? Ìwọ̀n wo? Owó mélòó?", "Béèrè lọ́wọ́ olùrà mẹ́ta ó kéré tán", "Lẹ́yìn náà yan irú ẹja àti ètò"] }
          ],
          sources: [WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Béèrè lọ́wọ́ olùrà mẹ́ta ó kéré tán nítòsí rẹ irú ẹja tí wọ́n fẹ́, ìwọ̀n wo àti owó mélòó. Kọ ìdáhùn wọn sílẹ̀, lẹ́yìn náà yan tilapia tàbí ẹja àrọ̀ àti adágún tàbí tánkì, pẹ̀lú ìdí mẹ́ta láti ibi oko rẹ àti àwọn olùrà rẹ.",
          youCanNow: "yan láàárín tilapia àti ẹja àrọ̀, àti láàárín adágún àti tánkì, nípa wíwo omi, ilẹ̀ àti àwọn olùrà rẹ.",
          quickCheck: [
            { objective: "O1", q: "Kí ló dé tí àwọn tó ń sin tilapia fi ń ra ọmọ ẹja mono-sex?", options: ["Wọ́n kò wọ́n tó", "Kí ẹja lè dàgbà dípò bíbímọ àti kíkún adágún fún ẹja kéékèèké", "Wọn kò nílò oúnjẹ", "Wọ́n dùn jù"], answer: 1, why: "Tilapia tí akọ àti abo wà pọ̀ máa ń bímọ nínú adágún, wọn kì í sì í dàgbà tó." },
            { objective: "O1", q: "Ilẹ̀ rẹ jẹ́ oníyanrìn, kò sì di omi mú. Ètò wo ló bá a mu jù?", options: ["Adágún ilẹ̀ tí kò ní ọ̀rá", "Kò ṣeé ṣe láti sin ẹja", "Adágún ní etí odò", "Adágún tí a tẹ́ ọ̀rá sí tàbí tánkì"], answer: 3, why: "Ọ̀rá tàbí tánkì máa ń di omi mú níbi tí ilẹ̀ kò ti lè dì í mú." }
          ]
        },
        {
          title: "Yíyan ibi, kíkọ́ adágún, àti ìwé àṣẹ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Yẹ ibi adágún wò kí o sì kọ àwọn ìwé àṣẹ tí o máa béèrè nípa wọn sílẹ̀.",
          text: [
            "Ibi adágún tó dára ní: omi ní gbogbo ọdún, tí ó mọ́, tí ilé-iṣẹ́, ibi ìwakùsà tàbí oko tí wọ́n fín oògùn sí kò sọ di ẹlẹ́gbin; ilẹ̀ tí ó ní amọ̀ tó tó láti di omi mú (fún ìkúnwọ́ ilẹ̀ tútù: tí ó bá dúró bí o ṣe fún un, àmì rere ni); ilẹ̀ tó dagẹ̀rẹ́ díẹ̀ kí omi lè wọ inú adágún kí ó sì ṣàn jáde fúnra rẹ̀; kò sí omíyalé; ó sì súnmọ́ ọ tó láti máa ṣọ́ ọ lọ́wọ́ olè àti ẹranko tó ń pa ẹja jẹ.",
            "Kọ́ adágún pẹ̀lú bèbè (dike) tó le, tó dagẹ̀rẹ́, tí a gbin koríko sí láti dènà ìbàjẹ́ ilẹ̀, ojú omi ìwọlé (inlet) tí ó ní àwọ̀n kí ẹja inú igbó má lè wọlé, àti ojú omi ìjáde (outlet) tàbí páìpù kí o lè sọ adágún di òfo fún ìkórè. Adágún tí ó tó ọgọ́rùn-ún mélòó kan mítà onígun mẹ́rin rọrùn fún ẹni tó ṣẹ̀ṣẹ̀ bẹ̀rẹ̀ láti ṣàkóso. Ṣe ọgbà yí i ká tí o bá lè ṣe é, kí o sì pa ẹran ọ̀sìn àti ọmọdé mọ́ kúrò níbẹ̀. Pèsè adágún sílẹ̀ kí o tó kó ẹja sínú rẹ̀: jẹ́ kí ó gbẹ, kó ẹrẹ̀ àti ẹja inú igbó kúrò, kí o sì fi ẹfun (lime) àti ajílẹ̀ sí i tí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ bá gbà ọ́ nímọ̀ràn.",
            "Oko ẹja sábà máa ń nílò ìforúkọsílẹ̀ tàbí ìwé àṣẹ, nígbà míì ó sì nílò àṣẹ fún lílo omi tàbí àṣẹ àyíká. Ní Kenya, òfin Fisheries Management and Development Act, 2016 ní kí wọ́n forúkọ ọ̀sìn ẹja sílẹ̀ kí wọ́n sì gba láìsẹ́ǹsì lọ́wọ́ Kenya Fisheries Service. Ní Ghana, Fisheries Commission ló ń fúnni ní ìwé àṣẹ ọ̀sìn ẹja. Ní Nàìjíríà, béèrè lọ́wọ́ Federal Department of Fisheries and Aquaculture àti iléeṣẹ́ ìjọba ìpínlẹ̀ rẹ; ní Côte d'Ivoire, iléeṣẹ́ ìjọba tó ń bójú tó ẹja. Àwọn agbègbè kan gba irú ẹja kan nìkan láàyè. Òfin ń yí padà, nítorí náà ṣàyẹ̀wò kí o tó gbẹ́ ilẹ̀."
          ],
          steps: ["Yẹ orísun omi wò: ó tó ní gbogbo ọdún, ó sì mọ́.", "Ṣe àyẹ̀wò ìfúnpọ̀ ilẹ̀; ní kí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ fìdí rẹ̀ múlẹ̀.", "Yan ilẹ̀ tó dagẹ̀rẹ́ díẹ̀ lókè ibi tí omi ń yalé, nítòsí ibi tí o lè máa ṣọ́ ọ.", "Ṣètò bèbè tó le, ojú omi ìwọlé tí ó ní àwọ̀n, àti ojú omi ìjáde láti fa omi kúrò.", "Kàn sí ọ́fíìsì ẹja: ìforúkọsílẹ̀, ìwé àṣẹ, lílo omi, irú ẹja tí wọ́n gbà láàyè.", "Pèsè adágún sílẹ̀ kí o tó kó ẹja sínú rẹ̀, bí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ ṣe gbà ọ́ nímọ̀ràn."],
          words: [["Bèbè (dike)", "ògiri ilẹ̀ tó yí adágún ká."], ["Ojú omi ìwọlé àti ìjáde (inlet àti outlet)", "páìpù tàbí ọ̀nà tí omi ń gbà wọ inú adágún àti tí ó ń gbà jáde."], ["Ìwé àṣẹ (permit)", "àṣẹ ìjọba tí o nílò kí o tó bẹ̀rẹ̀ tàbí kí o tó máa ṣiṣẹ́ oko náà."]],
          slides: [
            { title: "Ibi tó dára", bullets: ["Omi mímọ́ ní gbogbo ọdún", "Ilẹ̀ amọ̀ tí ó ń di omi mú", "Ilẹ̀ tó dagẹ̀rẹ́ díẹ̀; kò sí omíyalé; ó rọrùn láti ṣọ́"] },
            { title: "Kọ́ ọ dáadáa", bullets: ["Bèbè tó le, tí koríko wà lórí rẹ̀", "Ojú omi ìwọlé pẹ̀lú àwọ̀n; ojú omi ìjáde", "Ọgbà; pa ẹran ọ̀sìn àti ọmọdé mọ́ kúrò"] },
            { title: "Ìwé àṣẹ: kọ́kọ́ ṣàyẹ̀wò", bullets: ["Kenya: forúkọ sílẹ̀, gba láìsẹ́ǹsì lọ́wọ́ Kenya Fisheries Service", "Ghana: ìwé àṣẹ ọ̀sìn ẹja láti Fisheries Commission", "Nàìjíríà àti Côte d'Ivoire: ọ́fíìsì ẹja ti orílẹ̀-èdè àti ìpínlẹ̀"] },
            { title: "Kí o tó gbẹ́ ilẹ̀", bullets: ["Béèrè nípa òfin lílo omi àti àyíká", "Béèrè irú ẹja tí wọ́n gbà láàyè", "Òfin ń yí padà: béèrè lọ́wọ́ ọ́fíìsì"] }
          ],
          sources: [GHANA_MANUAL, KENYA_ACT, GHANA_FC],
          tryIt: "Rìn yí ibi tí o fẹ́ lò ká. Kọ orísun omi sílẹ̀, èsì àyẹ̀wò ìfúnpọ̀ ilẹ̀, bí ilẹ̀ ṣe dagẹ̀rẹ́, ewu omíyalé èyíkéyìí, àti bí o ṣe máa ṣọ́ ọ. Lẹ́yìn náà wá nọ́mbà fóònù tàbí ọ́fíìsì àjọ ẹja ní agbègbè rẹ, kí o sì kọ ìbéèrè mẹ́ta tí o máa béèrè nípa ìwé àṣẹ àti irú ẹja.",
          youCanNow: "mọ̀ bóyá ibi kan dára fún adágún ẹja, ṣètò àwọn apá pàtàkì rẹ̀, kí o sì mọ ọ́fíìsì ẹja tí o máa béèrè lọ́wọ́ rẹ̀ nípa ìwé àṣẹ.",
          quickCheck: [
            { objective: "O2", q: "O fún ilẹ̀ tútù pọ̀, ó sì dúró bí o ṣe fún un. Kí ni èyí fi hàn?", options: ["Ilẹ̀ náà ní amọ̀, ó sì lè di omi mú", "Iyanrìn ti pọ̀ jù nínú ilẹ̀ náà", "Omi máa ya ibi náà", "Omi náà ti di ẹlẹ́gbin"], answer: 0, why: "Ilẹ̀ amọ̀ tí ó dúró bí o ṣe fún un sábà máa ń di omi adágún mú; ní kí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ fìdí rẹ̀ múlẹ̀." },
            { objective: "O2", q: "Kí o tó gbẹ́ adágún ẹja ní Ghana, ta ni o máa béèrè lọ́wọ́ rẹ̀ nípa ìwé àṣẹ?", options: ["Báńkì nìkan", "Kò sí ẹnìkan; adágún ẹja kò nílò ìwé àṣẹ", "Fisheries Commission", "Àjọ tó ń ṣàkóso kòkòrò"], answer: 2, why: "Fisheries Commission ti Ghana ló ń fúnni ní ìwé àṣẹ ọ̀sìn ẹja." }
          ]
        },
        {
          title: "Ṣíṣàyẹ̀wò omi pẹ̀lú àyẹ̀wò tó rọrùn",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò omi adágún kí o sì gbé ìgbésẹ̀ nígbà tí nǹkan bá dàrú.",
          text: [
            "Inú omi ni ẹja ń gbé, nítorí náà omi burúkú máa ń pa wọ́n kíákíá. Máa wo nǹkan mẹ́ta. Oxygen: nínú adágún aláwọ̀ ewé, ó máa ń ga jù ní ọ̀sán, ó sì máa ń kéré jù ní àfẹ̀mọ́jú, nítorí pé àwọn ewéko àti ewéko omi (algae) ń lo oxygen ní alẹ́. Ọjọ́ tí ìkùukùu bò, algae tó pọ̀ jù, oúnjẹ tó ń jẹrà àti ìgbẹ́ ẹran ń mú kí ó burú sí i. Ìwé FAO kan sọ pé tilapia máa ń dẹwọ́ gan-an nígbà tí oxygen bá wálẹ̀ dé nǹkan bí 1 sí 2 mg nínú lítà kan. Ìgbóná omi: tilapia àti ẹja àrọ̀ jẹ́ ẹja omi gbígbóná; wọ́n máa ń jẹun, wọ́n sì máa ń dàgbà díẹ̀díẹ̀ nínú omi tútù, bí ní àwọn agbègbè orí òkè tàbí ní ìgbà òtútù. pH (bí omi ṣe kan tó): omi tí ó kan jù tàbí tí ó ní alkali jù máa ń fi ìnira bá ẹja.",
            "Àwọn àyẹ̀wò tó rọrùn: tẹ́mómítà fún ìgbóná omi; ìwé pH tàbí kit pH; Secchi disk (àwo funfun àti dúdú lórí igi tí a sàmì sí) láti rí bí omi ṣe ní àwọ̀ ewé tó; àti ojú rẹ ní àfẹ̀mọ́jú. Tí ẹja bá ń mí hẹlẹhẹlẹ lójú omi ní àfẹ̀mọ́jú, oxygen ti kéré. Tí o bá ní owó, kit àyẹ̀wò oxygen tàbí mítà oxygen máa fún ọ ní nọ́mbà.",
            "Tí oxygen bá kéré: dá oúnjẹ dúró tàbí dín in kù títí ẹja yóò fi gbádùn, fi omi tuntun kún un, ta omi sókè tàbí fi ẹ̀rọ fa omi láti da afẹ́fẹ́ pọ̀ mọ́ ọn, kí o sì kó ẹja tó kú kúrò. Tí omi bá ní àwọ̀ ewé jù, dín ajílẹ̀ kù. Tí pH kò bá tọ́, béèrè lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ nípa fífi ẹfun sí i. Kọ gbogbo àyẹ̀wò sílẹ̀ pẹ̀lú ọjọ́ àti àkókò."
          ],
          steps: ["Yẹ adágún wò ní àfẹ̀mọ́jú: ṣé ẹja ń mí hẹlẹhẹlẹ lójú omi?", "Wọn ìgbóná omi pẹ̀lú tẹ́mómítà.", "Ṣàyẹ̀wò pH pẹ̀lú ìwé pH tàbí kit lẹ́ẹ̀kan lọ́sẹ̀.", "Ti Secchi disk sísàlẹ̀ títí kò fi ní hàn mọ́; kọ jíjìn rẹ̀ sílẹ̀.", "Oxygen kéré: dá oúnjẹ dúró, fi omi tuntun kún un, ta omi sókè tàbí fi afẹ́fẹ́ sí i, kó ẹja tó kú kúrò.", "Kọ gbogbo èsì sílẹ̀ pẹ̀lú ọjọ́ àti àkókò."],
          words: [["Oxygen inú omi (dissolved oxygen)", "oxygen tí ó dà pọ̀ mọ́ omi, tí ẹja ń mí láti ẹ̀yà ìmí wọn (gills)."], ["pH", "nọ́mbà tí ó fi hàn bí omi ṣe kan tó tàbí bí ó ṣe ní alkali tó."], ["Secchi disk", "àwo dúdú àti funfun tí a ń ti sínú omi láti rí bí omi ṣe mọ́ tàbí bí ó ṣe ní àwọ̀ ewé tó."], ["Fífi afẹ́fẹ́ sí omi (aeration)", "dída afẹ́fẹ́ pọ̀ mọ́ omi, pẹ̀lú ẹ̀rọ, àjẹ̀ tàbí nípa títa omi sókè."]],
          slides: [
            { title: "Oxygen", bullets: ["Ó ga jù ní ọ̀sán, ó kéré jù ní àfẹ̀mọ́jú", "Ó burú jù ní ọjọ́ ìkùukùu, pẹ̀lú oúnjẹ tó ń jẹrà", "Tilapia ń dẹwọ́ nítòsí 1 sí 2 mg nínú lítà kan"] },
            { title: "Ìgbóná omi àti pH", bullets: ["Omi gbígbóná: ìdàgbà kíákíá; omi tútù: díẹ̀díẹ̀", "Omi tó kan jù tàbí alkali jù ń fi ìnira bá ẹja", "Béèrè lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ nípa ẹfun"] },
            { title: "Àwọn àyẹ̀wò tó rọrùn", bullets: ["Tẹ́mómítà; ìwé pH", "Secchi disk: báwo ni omi ṣe ní àwọ̀ ewé tó?", "Àyẹ̀wò àfẹ̀mọ́jú: ẹja tó ń mí hẹlẹhẹlẹ = oxygen kéré"] },
            { title: "Oxygen kéré: ṣe nǹkan báyìí", bullets: ["Dá oúnjẹ dúró tàbí dín in kù", "Fi omi tuntun kún un; ta omi sókè tàbí fi afẹ́fẹ́ sí i", "Kó ẹja tó kú kúrò; kọ ọ́ sílẹ̀"] }
          ],
          sources: [FAO_OXYGEN, GHANA_MANUAL],
          tryIt: "Ṣe Secchi disk láti inú àwo funfun tí o kun apá méjì rẹ̀ ní dúdú, tí o so mọ́ igi tí o sàmì sí ní gbogbo 5 cm. Lẹ́yìn náà ṣe ìwé àkọsílẹ̀ àyẹ̀wò omi pẹ̀lú àwọn ọ̀wọ̀n fún ọjọ́, àkókò, ìgbóná omi, pH, jíjìn Secchi, ìṣesí ẹja àti ìgbésẹ̀ tí o gbé, kí o sì kọ ìlà kan láti adágún tàbí orísun omi kan nítòsí rẹ.",
          youCanNow: "ṣàyẹ̀wò oxygen, ìgbóná omi, pH àti àwọ̀ ewé omi pẹ̀lú irinṣẹ́ tó rọrùn, kí o sì gbé ìgbésẹ̀ kíákíá nígbà tí omi bá bàjẹ́.",
          quickCheck: [
            { objective: "O3", q: "Ìgbà wo ni oxygen sábà máa ń kéré jù nínú adágún ẹja aláwọ̀ ewé?", options: ["Ní ọ̀sán gangan", "Ní ọ̀sán", "Ní àfẹ̀mọ́jú", "Kì í yí padà"], answer: 2, why: "Ní alẹ́, àwọn ewéko àti algae ń lo oxygen láìṣe èyíkéyìí, nítorí náà ó ń wálẹ̀ títí di àfẹ̀mọ́jú." },
            { objective: "O3", q: "Ní àfẹ̀mọ́jú, o rí ẹja tí ó ń mí hẹlẹhẹlẹ lójú omi. Kí ni o máa kọ́kọ́ ṣe?", options: ["Fún wọn ní oúnjẹ sí i", "Dá oúnjẹ dúró, fi omi tuntun kún un, kí o sì ta omi sókè tàbí fi afẹ́fẹ́ sí i", "Fi ajílẹ̀ sí i", "Dúró di ọ̀la"], answer: 1, why: "Mímí hẹlẹhẹlẹ túmọ̀ sí pé oxygen kéré; oúnjẹ díẹ̀ àti omi tuntun tí a dà pọ̀ máa mú un padà sókè." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣètò oko ẹja",
        questions: [
          { objective: "O1", q: "Èwo ló jẹ́ òótọ́ nípa ẹja àrọ̀ Áfíríkà?", options: ["Ó lè mí afẹ́fẹ́, ó sì ń yè dáadáa nígbà tí oxygen bá kéré", "Koríko nìkan ló ń jẹ", "Ó máa ń bímọ, ó sì máa ń kún adágún bí tilapia tí akọ àti abo wà pọ̀", "A kò lè sin ín nínú tánkì"], answer: 0, why: "Ẹja àrọ̀ ní ẹ̀yà ara tí ó fi ń mí afẹ́fẹ́, nítorí náà ó lè fara da oxygen kékeré àti tánkì." },
          { objective: "O1", q: "Kí ni o yẹ kí o kọ́kọ́ mọ̀ kí o tó yan ẹja?", options: ["Àwọ̀ ẹja náà", "Ẹja tí ìbátan rẹ ń sin", "Ẹja tí ó tóbi jù tí ó ṣeé ṣe", "Irú ẹja, ìwọ̀n àti iye owó tí àwọn olùrà rẹ fẹ́"], answer: 3, why: "Ẹja tí o kò lè tà ní owó tó dára jẹ́ àdánù, bí ó ti wù kí ó dàgbà tó." },
          { objective: "O2", q: "Kí ló dé tí adágún fi nílò ojú omi ìjáde tàbí ọ̀nà ìfàmi?", options: ["Láti jẹ́ kí ẹja inú igbó wọlé", "Kí o lè sọ ọ́ di òfo fún ìkórè àti ìmọ́tótó", "Láti jẹ́ kí omi gbóná", "Kò nílò rẹ̀"], answer: 1, why: "Fífa omi kúrò ń mú kí ìkórè àti pípèsè adágún rọrùn." },
          { objective: "O2", q: "Ní Kenya, ọ̀sìn ẹja gbọ́dọ̀ forúkọ sílẹ̀ kí ó sì gba láìsẹ́ǹsì lọ́wọ́:", options: ["Kenya Dairy Board", "Kenya Wildlife Service", "Kenya Fisheries Service", "Ọ́fíìsì ọ̀nà ti county"], answer: 2, why: "Òfin Fisheries Management and Development Act, 2016 ní kí wọ́n forúkọ sílẹ̀ kí wọ́n sì gba láìsẹ́ǹsì lọ́wọ́ Kenya Fisheries Service." },
          { objective: "O3", q: "Kí ni Secchi disk ń fi hàn?", options: ["Bí omi ṣe ní àwọ̀ ewé tàbí bí ó ṣe mọ́ tó", "Ìwọ̀n ẹja", "pH adágún", "Oxygen ní mg nínú lítà kan"], answer: 0, why: "Jíjìn tí disk náà ti pòórá ń fi iye algae inú omi hàn." }
        ]
      }
    },
    {
      name: "Orí 2: Sísin àti títa ẹja",
      lessons: [
        {
          title: "Ọmọ ẹja tó dára àti iye ẹja nínú adágún",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ṣírò iye ọmọ ẹja tí o máa kó sínú adágún kí o sì yẹ hatchery wò.",
          text: [
            "Ọmọ ẹja tó dára ni ìdajì iṣẹ́ náà. Ra lọ́wọ́ hatchery tí àjọ ẹja ìjọba ti forúkọ rẹ̀ sílẹ̀ tàbí fọwọ́ sí, tàbí èyí tí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ dábàá. Béèrè pé: Ṣé tilapia náà jẹ́ mono-sex, irú wo sì ni? Ṣé gbogbo ọmọ ẹja náà fẹ́rẹ̀ẹ́ tóbi bákan náà? Mélòó ló máa ń kú ní ọ̀sẹ̀ àkọ́kọ́, ṣé wọ́n á sì fi òmíràn rọ́pò wọn? Ṣé o lè wo hatchery náà? Ọmọ ẹja tó ní ìlera máa ń lúwẹ̀ẹ́ dáadáa, kò ní egbò, ó sì tóbi bákan náà. Ẹja tí a pa nínú odò tàbí ẹja tí ìwọ̀n wọn yàtọ̀ síra máa ń mú àrùn wá, wọ́n máa ń bímọ, wọ́n sì máa ń jẹ ara wọn.",
            "Iye ẹja nínú adágún (stocking density) ni iye ẹja lórí mítà onígun mẹ́rin kan (adágún) tàbí lórí mítà kíúbù kan (tánkì). Ẹja tó pọ̀ jù túmọ̀ sí oxygen kékeré, ìdàgbà tó lọ́ra àti ẹja kékeré. Ìwádìí kan lórí adágún tilapia ní Côte d'Ivoire tí wọ́n fi ajílẹ̀ nìkan bọ́ rí i pé ẹja 2 sí 3 lórí mítà onígun mẹ́rin kan ti dín èso kù. Pẹ̀lú oúnjẹ pellet tó dára, a lè kó ẹja púpọ̀ sí i, àti púpọ̀ jù bẹ́ẹ̀ lọ nínú tánkì tí omi ń ṣàn nínú rẹ̀ tàbí tí a ń fi afẹ́fẹ́ sí, pàápàá fún ẹja àrọ̀. Fohùn ṣọ̀kan lórí iye ẹja pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí hatchery fún ètò rẹ.",
            "Àpẹẹrẹ (àpẹẹrẹ lásán ni àwọn nọ́mbà yìí): adágún 20 m ní 15 m jẹ́ mítà onígun mẹ́rin 300. Pẹ̀lú àpẹẹrẹ ẹja 3 lórí mítà onígun mẹ́rin kan, o máa kó ọmọ ẹja 900. Gbé ọmọ ẹja ní ìtutù òwúrọ̀, nínú àpò tí ó ní oxygen tàbí omi mímọ́, kí o sì jẹ́ kí àpò náà léfòó lórí adágún fún ìgbà díẹ̀ kí ìgbóná omi lè dọ́gba kí o tó tú wọn sílẹ̀."
          ],
          steps: ["Wọn adágún: gígùn x fífẹ̀ = ìwọ̀n ilẹ̀ ní mítà onígun mẹ́rin.", "Fohùn ṣọ̀kan lórí iye ẹja pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí hatchery.", "Ìwọ̀n ilẹ̀ x iye ẹja = iye ọmọ ẹja.", "Yan hatchery tí a forúkọ rẹ̀ sílẹ̀ tàbí tí wọ́n dábàá; béèrè nípa irú, mono-sex, ìwọ̀n àti iye tó ń kú.", "Yẹ ọmọ ẹja wò: wọ́n ń lúwẹ̀ẹ́ dáadáa, kò sí egbò, wọ́n tóbi bákan náà.", "Gbé wọn ní ìtutù òwúrọ̀; jẹ́ kí àpò léfòó kí ìgbóná omi lè dọ́gba kí o tó tú wọn sílẹ̀."],
          words: [["Iye ẹja nínú adágún (stocking density)", "iye ẹja lórí mítà onígun mẹ́rin kan ti adágún, tàbí lórí mítà kíúbù kan ti omi tánkì."], ["Hatchery", "oko tí wọ́n ti ń pa ẹyin ẹja tí wọ́n sì ń tọ́ ọmọ ẹja láti tà."], ["Jíjẹ ara wọn (cannibalism)", "ẹja tó ń jẹ ẹja irú tirẹ̀, ó wọ́pọ̀ láàárín ẹja àrọ̀ tí ìwọ̀n wọn yàtọ̀ síra."]],
          slides: [
            { title: "Ọmọ ẹja tó dára", bullets: ["Hatchery tí a forúkọ rẹ̀ sílẹ̀ tàbí tí wọ́n dábàá", "Tilapia: mono-sex, irú tí a mọ̀", "Ń lúwẹ̀ẹ́ dáadáa, kò sí egbò, wọ́n tóbi bákan náà"] },
            { title: "Iye ẹja ṣe pàtàkì", bullets: ["Ó pọ̀ jù: oxygen kékeré, ìdàgbà lọ́ra, ẹja kékeré", "Ìwádìí Côte d'Ivoire: 2-3 lórí m2 ti pọ̀ jù pẹ̀lú ajílẹ̀ nìkan", "Fohùn ṣọ̀kan pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí hatchery"] },
            { title: "Àpẹẹrẹ ìṣirò", bullets: ["20 m x 15 m = 300 m2", "300 m2 x ẹja 3 lórí m2 = ọmọ ẹja 900", "Àpẹẹrẹ lásán ni àwọn nọ́mbà yìí"] },
            { title: "Ọjọ́ kíkó ẹja sínú adágún", bullets: ["Ìtutù òwúrọ̀", "Àpò tí ó ní oxygen tàbí omi mímọ́", "Jẹ́ kí àpò léfòó kí ìgbóná omi lè dọ́gba"] }
          ],
          sources: [ALR_CI, WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Wọn adágún tàbí tánkì rẹ (tàbí lo 20 m ní 15 m). Béèrè lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí hatchery fún iye ẹja tó bá ètò rẹ mu, kí o sì ṣírò iye ọmọ ẹja tí o máa rà. Lẹ́yìn náà kọ ìbéèrè márùn-ún tí o máa béèrè lọ́wọ́ hatchery kí o tó sanwó.",
          youCanNow: "ṣírò iye ọmọ ẹja fún adágún kan, kí o sì yan hatchery tó ń ta ẹja tó dára.",
          quickCheck: [
            { objective: "O4", q: "Adágún kan jẹ́ 25 m ní 10 m, iye ẹja tí a fohùn ṣọ̀kan lé lórí sì jẹ́ ẹja 2 lórí mítà onígun mẹ́rin kan. Ọmọ ẹja mélòó?", options: ["250", "350", "500", "700"], answer: 2, why: "25 x 10 = mítà onígun mẹ́rin 250, 250 x 2 = ọmọ ẹja 500." },
            { objective: "O4", q: "Ọmọ ẹja àrọ̀ wo ni o yẹ kí o kọ̀?", options: ["Ẹja tó ń lúwẹ̀ẹ́ dáadáa, tí wọ́n tóbi bákan náà", "Ẹja láti hatchery tí a forúkọ rẹ̀ sílẹ̀", "Ẹja tí kò ní egbò", "Ẹja tí ìwọ̀n wọn yàtọ̀ síra gan-an"], answer: 3, why: "Ìwọ̀n tó yàtọ̀ síra máa ń mú kí wọ́n jẹ ara wọn, nítorí ẹja àrọ̀ ńlá máa ń jẹ àwọn kékeré." }
          ]
        },
        {
          title: "Oúnjẹ ẹja, FCR àti àwọn ìṣòro tó wọ́pọ̀",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣírò FCR kí o sì tètè rí àwọn ìṣòro.",
          text: [
            "Oúnjẹ ni ìnáwó tó tóbi jù nínú ọ̀sìn ẹja. Lo oúnjẹ tó dára tí ìwọ̀n pellet rẹ̀ bá ẹnu ẹja mu; pellet tí ó ń léfòó jẹ́ kí o rí iye tí wọ́n jẹ. Fún wọn ní oúnjẹ ní àkókò kan náà lójoojúmọ́, kí o sì fún wọn ní iye tí wọ́n lè jẹ tán láàárín ìṣẹ́jú díẹ̀ nìkan; oúnjẹ tí wọn kò jẹ máa ń jẹrà, ó sì máa ń lo oxygen tán. Iye oúnjẹ ń pọ̀ sí i bí ẹja ṣe ń dàgbà: ní gbogbo ọ̀sẹ̀ méjì sí mẹ́rin, fi àwọ̀n mú díẹ̀ lára ẹja kí o sì wọ̀n wọ́n, ṣírò ìwọ̀n àárín wọn, kí o sì ṣe àtúnṣe oúnjẹ pẹ̀lú àtẹ ti ẹni tó ṣe oúnjẹ náà tàbí ti òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀. Tọ́jú oúnjẹ sí ibi gbígbẹ, kí ó má kan ilẹ̀; oúnjẹ tó ti hu èbu jẹ́ májèlé.",
            "FCR (feed conversion ratio) ń fi hàn bí oúnjẹ ṣe ń di ẹja dáadáa tó: FCR = oúnjẹ tí a fún wọn / ìwọ̀n tí wọ́n fi kún. Àpẹẹrẹ: o fún wọn ní oúnjẹ 400 kg, ẹja sì fi 250 kg kún ìwọ̀n wọn, nítorí náà FCR = 400 / 250 = 1.6. FCR tí ó kéré túmọ̀ sí oúnjẹ díẹ̀ fún kìlógíráàmù ẹja kan. FCR máa ń lọ sókè pẹ̀lú oúnjẹ tó pọ̀ jù, oúnjẹ tí kò dára, omi burúkú àti ẹja tó ń ṣàìsàn.",
            "Àwọn ìṣòro tó wọ́pọ̀: oxygen kékeré ní àfẹ̀mọ́jú; ẹranko tó ń pa ẹja jẹ bí ẹyẹ, ejò àti otter (ẹranko omi), àti olè; tilapia tó ń bímọ nígbà tí ọmọ ẹja jẹ́ akọ àti abo; ẹja àrọ̀ tó ń jẹ ara wọn nígbà tí ìwọ̀n wọn yàtọ̀ síra (ya wọ́n sọ́tọ̀); omíyalé tó ń gbé ẹja lọ; àti àrùn. Àmì ẹja tó ń ṣàìsàn ni pé wọn kò jẹun, wọ́n ní egbò, wọ́n ń lúwẹ̀ẹ́ lọ́nà àjèjì, tàbí ọ̀pọ̀ ń kú. Kó ẹja tó kú kúrò, dá oúnjẹ dúró, yẹ omi wò, kí o sì pe òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ fún ẹja tàbí dókítà ẹranko; má ṣe lo oògùn tàbí kẹ́míkà láìsí ìmọ̀ràn wọn."
          ],
          steps: ["Fún wọn ní oúnjẹ tó dára tí ìwọ̀n rẹ̀ tọ́ ní àkókò tí a yàn.", "Fún wọn ní iye tí wọ́n lè jẹ tán láàárín ìṣẹ́jú díẹ̀ nìkan.", "Ní gbogbo ọ̀sẹ̀ 2 sí 4, wọn àwọn ẹja àyẹ̀wò kí o sì ṣe àtúnṣe oúnjẹ pẹ̀lú àtẹ.", "Kọ gbogbo oúnjẹ tí o fún wọn sílẹ̀.", "FCR = oúnjẹ tí a fún wọn / ìwọ̀n tí wọ́n fi kún.", "Máa wo ìṣòro lójoojúmọ́; pe òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí dókítà ẹranko fún ẹja tó ń ṣàìsàn."],
          words: [["FCR (feed conversion ratio)", "iye kìlógíráàmù oúnjẹ tí a lò láti sin kìlógíráàmù ẹja kan."], ["Wíwọn ẹja àyẹ̀wò", "fífi àwọ̀n mú díẹ̀ lára ẹja àti wíwọn wọn láti rí ìwọ̀n àárín wọn."], ["Ẹranko tó ń pa ẹja jẹ (predator)", "ẹranko tó ń jẹ ẹja, bí àwọn ẹyẹ kan, ejò àti otter."]],
          slides: [
            { title: "Fún wọn ní oúnjẹ dáadáa", bullets: ["Oúnjẹ tó dára, ìwọ̀n pellet tó tọ́", "Àkókò kan náà; iye tí wọ́n jẹ tán láàárín ìṣẹ́jú díẹ̀", "Wọn àwọn ẹja àyẹ̀wò ní gbogbo ọ̀sẹ̀ 2 sí 4"] },
            { title: "FCR (feed conversion ratio)", bullets: ["FCR = oúnjẹ tí a fún wọn / ìwọ̀n tí wọ́n fi kún", "Oúnjẹ 400 kg / ìwọ̀n 250 kg = 1.6", "Èyí tó kéré dára jù"] },
            { title: "Àwọn ìṣòro tó wọ́pọ̀", bullets: ["Oxygen kékeré; ẹranko tó ń pa ẹja jẹ àti olè", "Tilapia tó ń bímọ; ẹja àrọ̀ tó ń jẹ ara wọn", "Omíyalé; àrùn"] },
            { title: "Ẹja tó ń ṣàìsàn", bullets: ["Kò jẹun, egbò, lílúwẹ̀ẹ́ àjèjì, ikú", "Kó ẹja tó kú kúrò; dá oúnjẹ dúró; yẹ omi wò", "Pe òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí dókítà ẹranko; kò sí oògùn láìsí ìmọ̀ràn"] }
          ],
          sources: [GHANA_MANUAL, FAO_OXYGEN],
          tryIt: "Ṣe ìwé àkọsílẹ̀ oúnjẹ pẹ̀lú àwọn ọ̀wọ̀n fún ọjọ́, oúnjẹ tí o fún wọn (kg), ìwọ̀n àárín ẹja àyẹ̀wò àti àkíyèsí. Lẹ́yìn náà ṣírò FCR fún àpẹẹrẹ yìí: oúnjẹ 300 kg ni a fún wọn, ẹja sì fi 200 kg kún ìwọ̀n wọn. Kọ ọ̀nà kan láti dín in kù.",
          youCanNow: "fún ẹja ní oúnjẹ dáadáa, ṣírò FCR, kí o sì tètè rí àwọn ìṣòro tó wọ́pọ̀.",
          quickCheck: [
            { objective: "O5", q: "O fún ẹja ní oúnjẹ 450 kg, wọ́n sì fi 300 kg kún ìwọ̀n wọn. Kí ni FCR?", options: ["0.7", "1.2", "1.5", "2.0"], answer: 2, why: "450 pín sí 300 jẹ́ 1.5." },
            { objective: "O5", q: "Kí ló dé tí o fi máa fún ẹja ní iye tí wọ́n lè jẹ tán láàárín ìṣẹ́jú díẹ̀ nìkan?", options: ["Oúnjẹ tí wọn kò jẹ máa ń jẹrà, ó ń lo oxygen tán, ó sì ń fi owó ṣòfò", "Ẹja kò fẹ́ràn oúnjẹ", "Oúnjẹ jẹ́ ọ̀fẹ́", "Ó ń mú kí omi mọ́ fún lílúwẹ̀ẹ́"], answer: 0, why: "Oúnjẹ tí wọn kò jẹ jẹ́ owó tí ó ṣòfò, ó sì ń ba omi jẹ́." }
          ]
        },
        {
          title: "Ìkórè, títà àti ìṣirò owó ìyípo kan",
          objectives: ["O6"],
          minutes: 6,
          goal: "Kọ ètò ìnáwó fún ìyípo kan pẹ̀lú èrè àti iye owó ìdọ́gba.",
          text: [
            "Ṣètò títà kí o tó kó ẹja sínú adágún. Fohùn ṣọ̀kan pẹ̀lú àwọn olùrà lórí ìwọ̀n, ọjọ́ àti iye owó, kí o sì kórè ní ìtutù òwúrọ̀. Dá oúnjẹ dúró ní ọjọ́ kan ṣáájú kí ẹja lè rìnrìn àjò dáadáa. Fa díẹ̀ lára omi adágún kúrò kí o sì fi àwọ̀n mú ẹja, tàbí fa gbogbo omi kúrò fún ìkórè pátápátá. Jẹ́ kí ẹja tutù kí ó sì mọ́ lórí yìnyín tàbí ní ibòji, kí o sì tà á kíákíá: ẹja tútù máa ń bàjẹ́ láàárín wákàtí díẹ̀ nínú ooru. Yíyan ẹja lórí èéfín tàbí gbígbẹ ẹ́, tí ó wọ́pọ̀ fún ẹja àrọ̀ ní Nàìjíríà, ń fi iye kún un, ó sì ń fún ọ ní àkókò láti tà á. Kíkórè àwọn ẹja tó tóbi jù díẹ̀díẹ̀ lè pín títà sí ọ̀sẹ̀ mélòó kan.",
            "Kọ́kọ́ ṣírò ìnáwó ìyípo kan sórí ìwé. Àpẹẹrẹ fún adágún tilapia onímítà onígun mẹ́rin 300 ní Ghana (àpẹẹrẹ lásán ni gbogbo nọ́mbà yìí; lo iye owó tí wọ́n sọ fún ọ): ọmọ ẹja 900 ní GHS 1.50 = GHS 1,350; oúnjẹ: ìkórè tí a retí jẹ́ ẹja 720 (80% yè) x 0.35 kg = 252 kg, àti pẹ̀lú FCR 1.6 tí a retí, ó nílò nǹkan bí oúnjẹ 400 kg ní GHS 12 = GHS 4,800; pípèsè adágún GHS 300; owó iṣẹ́ àti ààbò GHS 1,200; ìkórè àti ọkọ̀ GHS 300. Àpapọ̀ ìnáwó GHS 7,950.",
            "Títà: 252 kg ní GHS 40 fún kg kan = GHS 10,080. Èrè = 10,080 - 7,950 = GHS 2,130. Iye owó ìdọ́gba (break-even) = àpapọ̀ ìnáwó / kg tí a kórè = 7,950 / 252 = nǹkan bí GHS 31.50 fún kg kan. Tí iye owó tí olùrà ń san bá súnmọ́ iye owó ìdọ́gba rẹ, yí ètò padà: ọmọ ẹja tó dára jù, oúnjẹ tí kò ṣòfò, tàbí olùrà tó dára jù."
          ],
          steps: ["Fohùn ṣọ̀kan lórí ìwọ̀n, ọjọ́ àti iye owó pẹ̀lú àwọn olùrà kí o tó kó ẹja sínú adágún.", "Kọ gbogbo ìnáwó sílẹ̀: ọmọ ẹja, oúnjẹ, pípèsè adágún, owó iṣẹ́, ààbò, ìkórè, ọkọ̀.", "Ìkórè tí a retí = ọmọ ẹja x ìpín tó yè x ìwọ̀n nígbà ìkórè.", "Oúnjẹ tí a nílò = ìwọ̀n tí wọ́n fi kún x FCR tí a retí.", "Èrè = owó títà - àpapọ̀ ìnáwó.", "Iye owó ìdọ́gba = àpapọ̀ ìnáwó / kg tí a kórè."],
          words: [["Ìpín tó yè (survival rate)", "ìpín ẹja tí a kó sínú adágún tí ó ṣì wà láàyè nígbà ìkórè."], ["Iye owó ìdọ́gba (break-even price)", "iye owó fún kg kan tí owó títà fi bo gbogbo ìnáwó gẹ́lẹ́."], ["Ìkórè díẹ̀díẹ̀ (partial harvest)", "kíkó àwọn ẹja tó tóbi jù jáde àti fífi àwọn yòókù sílẹ̀ kí wọ́n máa dàgbà."]],
          slides: [
            { title: "Kórè kí o sì tà", bullets: ["Kọ́kọ́ fohùn ṣọ̀kan lórí olùrà, ìwọ̀n, ọjọ́ àti owó", "Ìtutù òwúrọ̀; dá oúnjẹ dúró ní ọjọ́ kan ṣáájú", "Yìnyín tàbí ibòji; tà kíákíá, tàbí yan án tàbí gbẹ ẹ́"] },
            { title: "Àpẹẹrẹ ìnáwó (GHS)", bullets: ["Ọmọ ẹja 1,350; oúnjẹ 4,800", "Pípèsè adágún 300; owó iṣẹ́, ààbò 1,200; ìkórè 300", "Àpapọ̀ 7,950. Àpẹẹrẹ lásán"] },
            { title: "Àpẹẹrẹ èsì", bullets: ["Ẹja 720 x 0.35 kg = 252 kg", "252 kg x GHS 40 = GHS 10,080", "Èrè nǹkan bí GHS 2,130"] },
            { title: "Iye owó ìdọ́gba (break-even)", bullets: ["Àpapọ̀ ìnáwó / kg tí a kórè", "7,950 / 252 = nǹkan bí GHS 31.50 fún kg kan", "Ó súnmọ́ iye owó ìdọ́gba? Yí ètò padà"] }
          ],
          sources: [GHANA_MANUAL, WORLDFISH_NG],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ìnáwó fún ìyípo kan ti adágún tàbí tánkì rẹ (tàbí ti àpẹẹrẹ náà): irú ẹja, ibi àti ìwé àṣẹ tí o ṣàyẹ̀wò, àyẹ̀wò omi, ọmọ ẹja àti hatchery, iye tí o retí pé yóò yè, ìwọ̀n nígbà ìkórè àti oúnjẹ, gbogbo ìnáwó, owó títà tí o retí, èrè àti iye owó ìdọ́gba fún kg kan.",
          youCanNow: "ṣètò ìkórè àti títà, kí o sì ṣírò èrè àti iye owó ìdọ́gba ìyípo ọ̀sìn ẹja kan.",
          quickCheck: [
            { objective: "O6", q: "Àpapọ̀ ìnáwó jẹ́ NGN 900,000, o sì retí láti kórè ẹja àrọ̀ 600 kg. Kí ni iye owó ìdọ́gba?", options: ["NGN 600 fún kg kan", "NGN 1,000 fún kg kan", "NGN 1,200 fún kg kan", "NGN 1,500 fún kg kan"], answer: 3, why: "900,000 pín sí 600 jẹ́ 1,500 fún kg kan." },
            { objective: "O6", q: "Ìgbà wo ni o yẹ kí o fohùn ṣọ̀kan lórí títà pẹ̀lú àwọn olùrà?", options: ["Lẹ́yìn ìkórè, nígbà tí ẹja wà lórí yìnyín", "Kí o tó kó ẹja sínú adágún, kí o sì tún fìdí rẹ̀ múlẹ̀ ṣáájú ìkórè", "Láéláé; tà á ní etí ọ̀nà", "Tí ẹja bá ṣẹ́kù nìkan"], answer: 1, why: "Ẹja tútù máa ń bàjẹ́ kíákíá; olùrà tí o ti bá sọ̀rọ̀ ní kùtùkùtù ń dènà títà ní owó pọ́ọ́kú nítorí ìpọ́njú." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Sísin àti títa ẹja",
        questions: [
          { objective: "O4", q: "Níbo ni o yẹ kí o ti ra ọmọ ẹja?", options: ["Lọ́wọ́ hatchery tí a forúkọ rẹ̀ sílẹ̀ tàbí tí wọ́n dábàá", "Láti inú odò kan nítòsí rẹ", "Lọ́wọ́ ẹni tí owó rẹ̀ kéré jù", "Lọ́wọ́ oníṣòwò èyíkéyìí tó ń kọjá"], answer: 0, why: "Hatchery tí a forúkọ rẹ̀ sílẹ̀ tàbí tí wọ́n dábàá ń fúnni ní irú tí a mọ̀, tilapia mono-sex àti ẹja tó ní ìlera." },
          { objective: "O4", q: "Adágún 30 m ní 10 m pẹ̀lú ẹja 2 lórí mítà onígun mẹ́rin kan nílò ọmọ ẹja mélòó?", options: ["300", "400", "500", "600"], answer: 3, why: "30 x 10 = mítà onígun mẹ́rin 300, 300 x 2 = 600." },
          { objective: "O5", q: "Ẹja kò jẹun, wọ́n ní egbò, àwọn kan sì ń kú. Kí ni o máa ṣe?", options: ["Fún wọn ní oúnjẹ sí i", "Ra oògùn ní ọjà kí o sì dà á sí i", "Kó ẹja tó kú kúrò, dá oúnjẹ dúró, yẹ omi wò kí o sì pe òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí dókítà ẹranko", "Fi ọmọ ẹja míì kún un"], answer: 2, why: "Ẹja tó ń ṣàìsàn nílò ìmọ̀ràn òṣìṣẹ́ tàbí dókítà ẹranko; oògùn láìsí ìmọ̀ràn lè pa ẹja àti àwọn olùrà lára." },
          { objective: "O5", q: "FCR tí ó ń wálẹ̀ nígbà ìyípo sábà máa ń túmọ̀ sí pé:", options: ["Oúnjẹ ń ṣòfò", "Oúnjẹ ń di ẹja dáadáa sí i", "Ẹja ń ṣàìsàn", "Adágún ti ní àwọ̀ ewé jù"], answer: 1, why: "Oúnjẹ díẹ̀ fún kg ìwọ̀n kan túmọ̀ sí pé oúnjẹ ń di ẹja dáadáa sí i." },
          { objective: "O6", q: "Owó títà jẹ́ GHS 12,000, àpapọ̀ ìnáwó sì jẹ́ GHS 9,500. Kí ni èrè?", options: ["GHS 1,500", "GHS 2,000", "GHS 2,500", "GHS 21,500"], answer: 2, why: "12,000 yọ 9,500 kúrò jẹ́ 2,500." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìpìlẹ̀ Ọ̀sìn Ẹja (Aquaculture)",
    questions: [
      { objective: "O1", q: "Ẹja wo ni wọ́n ń sin jù ní Nàìjíríà?", options: ["Ẹja àrọ̀ Áfíríkà (African catfish)", "Salmon", "Trout", "Carp"], answer: 0, why: "Ẹja àrọ̀ Áfíríkà ni ẹja tí wọ́n ń sin jù ní Nàìjíríà, wọ́n ń tà á ní tútù àti ní yíyan." },
      { objective: "O1", q: "Tilapia tí akọ àti abo wà pọ̀ nínú adágún sábà máa ń fa:", options: ["Ẹja tó tóbi jù", "Títà kíákíá", "Ọ̀pọ̀ ẹja kékeré tí kò dàgbà nítorí bíbímọ", "Oúnjẹ díẹ̀"], answer: 2, why: "Tilapia máa ń bímọ nínú adágún, wọ́n sì máa ń kún un fún ẹja kékeré." },
      { objective: "O1", q: "Kí ni GIFT tilapia?", options: ["Ẹ̀bùn ọ̀fẹ́ láti ọ̀dọ̀ àwọn olùrà", "Àrùn ẹja kan", "Ọ̀nà kíkọ́ adágún kan", "Irú tilapia tí a mú dára sí i, tó ń dàgbà kíákíá, láti WorldFish"], answer: 3, why: "GIFT túmọ̀ sí Genetically Improved Farmed Tilapia." },
      { objective: "O2", q: "Ibi wo ló dára jù fún adágún ilẹ̀?", options: ["Ilẹ̀ oníyanrìn ní pẹ̀tẹ́lẹ̀ etí odò tí omi ń yalé", "Ilẹ̀ amọ̀ tó dagẹ̀rẹ́ díẹ̀ lókè ibi tí omi ń yalé, pẹ̀lú omi mímọ́ ní gbogbo ọdún", "Orí òkè olókùúta tí kò ní omi", "Ẹ̀gbẹ́ ibi tí omi ibi ìwakùsà ń ṣàn jáde"], answer: 1, why: "Amọ̀ ń di omi mú, ilẹ̀ tó dagẹ̀rẹ́ ń jẹ́ kí o kún un kí o sì fa omi kúrò, omi mímọ́ sì ń jẹ́ kí ẹja wà láàyè." },
      { objective: "O2", q: "Kí ló dé tí a fi ń fi àwọ̀n sí ojú omi ìwọlé adágún?", options: ["Láti dí ẹja inú igbó àti ẹranko tó ń pa ẹja jẹ lọ́nà", "Láti mú omi gbóná", "Láti bọ́ ẹja", "Láti mú ìkórè lọ́ra"], answer: 0, why: "Ẹja inú igbó ń bá ẹja rẹ du oúnjẹ, wọ́n ń mú àrùn wá, wọ́n sì ń jẹ ọmọ ẹja." },
      { objective: "O2", q: "Kí o tó kọ́ adágún ẹja, o yẹ kí o:", options: ["Bẹ̀rẹ̀ sí í gbẹ́ ilẹ̀ kí o sì béèrè lẹ́yìn náà", "Béèrè lọ́wọ́ àwọn aládùúgbò rẹ nìkan", "Béèrè lọ́wọ́ ọ́fíìsì ẹja ti orílẹ̀-èdè tàbí ti county rẹ nípa ìwé àṣẹ àti irú ẹja tí wọ́n gbà láàyè", "Rò pé kò sí òfin kankan"], answer: 2, why: "Ọ̀pọ̀ orílẹ̀-èdè ní kí o forúkọ sílẹ̀ tàbí gba ìwé àṣẹ, àwọn kan sì ń ṣe òdiwọ̀n irú ẹja." },
      { objective: "O3", q: "Kí ló ń mú kí oxygen kékeré ní àfẹ̀mọ́jú burú sí i?", options: ["Ọjọ́ tí oòrùn mú àti algae díẹ̀", "Ọjọ́ ìkùukùu, algae tó pọ̀ jù àti oúnjẹ tó ń jẹrà", "Omi tó mọ́, tó jẹ́ tuntun", "Ẹja díẹ̀"], answer: 1, why: "Àwọn wọ̀nyí ń dín oxygen tí a ń ṣe kù tàbí wọ́n ń lò ó tán ní alẹ́." },
      { objective: "O3", q: "Tilapia àti ẹja àrọ̀ máa ń dàgbà díẹ̀díẹ̀ nígbà tí omi bá:", options: ["Tutù", "Gbóná", "Mọ́", "Ní àwọ̀ ewé"], answer: 0, why: "Ẹja omi gbígbóná ni méjèèjì; omi tútù ń dín jíjẹun àti ìdàgbà wọn kù." },
      { objective: "O3", q: "Irinṣẹ́ wo ló ń wọn bí omi adágún ṣe kan tó?", options: ["Secchi disk", "Tẹ́mómítà", "Àwọ̀n ẹja", "Ìwé pH tàbí kit pH"], answer: 3, why: "Ìwé pH tàbí kit pH ń fi bí omi ṣe kan tó tàbí bí ó ṣe ní alkali tó hàn." },
      { objective: "O3", q: "Tí oxygen bá kéré, ìgbésẹ̀ wo ni KÒ tọ́?", options: ["Fífi omi tuntun kún un", "Títa omi sókè tàbí fífi afẹ́fẹ́ sí i", "Fífún ẹja ní oúnjẹ ju ti tẹ́lẹ̀ lọ", "Kíkó ẹja tó kú kúrò"], answer: 2, why: "Oúnjẹ àfikún máa ń jẹrà, ó sì máa ń lo oxygen púpọ̀ sí i tán." },
      { objective: "O4", q: "Iye ẹja nínú adágún (stocking density) túmọ̀ sí:", options: ["Ìwọ̀n oúnjẹ lójúmọ́", "Iye ẹja lórí mítà onígun mẹ́rin kan tàbí mítà kíúbù kan", "Jíjìn adágún", "Iye owó ọmọ ẹja kan"], answer: 1, why: "Density ni iye ẹja tí ó ń pín ààyè kọ̀ọ̀kan." },
      { objective: "O4", q: "Adágún onímítà onígun mẹ́rin 400 pẹ̀lú ẹja 2.5 lórí mítà onígun mẹ́rin kan nílò:", options: ["Ọmọ ẹja 600", "Ọmọ ẹja 800", "Ọmọ ẹja 1,000", "Ọmọ ẹja 1,600"], answer: 2, why: "400 x 2.5 = 1,000." },
      { objective: "O4", q: "Kí ló dé tí a fi ń jẹ́ kí àpò ọmọ ẹja léfòó lórí adágún kí a tó tú wọn sílẹ̀?", options: ["Kí ìgbóná omi lè dọ́gba", "Láti ka ẹja", "Láti bọ́ wọn", "Láti fọ àpò"], answer: 0, why: "Ìyípadà òjijì nínú ìgbóná omi máa ń da ọmọ ẹja láàmú, ó sì lè pa wọ́n." },
      { objective: "O5", q: "Bí a ṣe ń ṣírò FCR ni:", options: ["Ẹja tí a tà / ẹja tí a kó sínú adágún", "Iye owó títà / ìnáwó", "Ìwọ̀n adágún x iye ẹja", "Oúnjẹ tí a fún wọn / ìwọ̀n tí wọ́n fi kún"], answer: 3, why: "Ó ń fi iye kg oúnjẹ tí ó ń sin kg ẹja kan hàn." },
      { objective: "O5", q: "O fún wọn ní oúnjẹ 600 kg, ẹja sì fi 400 kg kún ìwọ̀n wọn. FCR?", options: ["1.5", "0.7", "2.4", "1.0"], answer: 0, why: "600 pín sí 400 jẹ́ 1.5." },
      { objective: "O5", q: "Ìgbà mélòó ni o yẹ kí o wọn àwọn ẹja àyẹ̀wò láti ṣe àtúnṣe oúnjẹ?", options: ["Láéláé", "Nígbà ìkórè nìkan", "Ní gbogbo ọ̀sẹ̀ 2 sí 4", "Ní gbogbo wákàtí"], answer: 2, why: "Wíwọn ẹja àyẹ̀wò déédéé ń fi ìdàgbà hàn kí oúnjẹ lè tẹ̀lé e." },
      { objective: "O5", q: "Ẹja àrọ̀ tí ìwọ̀n wọn yàtọ̀ síra gan-an nínú adágún kan lè fa:", options: ["Ìdàgbà kíákíá fún gbogbo wọn", "Jíjẹ ara wọn (cannibalism)", "Omi tó mọ́ sí i", "Ìnáwó oúnjẹ tó kéré"], answer: 1, why: "Ẹja àrọ̀ ńlá máa ń jẹ àwọn kékeré, nítorí náà àwọn àgbẹ̀ ń yà wọ́n sọ́tọ̀ nípa ìwọ̀n." },
      { objective: "O6", q: "Bí a ṣe ń rí ìwọ̀n ìkórè tí a retí ni:", options: ["Oúnjẹ x iye owó", "Ìwọ̀n adágún x jíjìn", "Ọmọ ẹja x ìpín tó yè x ìwọ̀n nígbà ìkórè", "Ìnáwó / iye owó"], answer: 2, why: "Ẹja tó yè nìkan ló kà, ní ìwọ̀n tí a retí." },
      { objective: "O6", q: "Iye owó ìdọ́gba fún kg kan ni:", options: ["Iye owó tó ga jù lọ́jà", "Àpapọ̀ ìnáwó / kg tí a kórè", "Owó oúnjẹ nìkan", "Owó ọmọ ẹja"], answer: 1, why: "Ní iye owó yìí, owó títà bo gbogbo ìnáwó gẹ́lẹ́." },
      { objective: "O6", q: "Kí ni ìnáwó tó sábà máa ń tóbi jù nínú ìyípo ọ̀sìn ẹja?", options: ["Àwọ̀n", "Àmì orúkọ adágún", "Àyẹ̀wò omi", "Oúnjẹ"], answer: 3, why: "Oúnjẹ ló sábà máa ń gba ìpín tó pọ̀ jù nínú ìnáwó, nítorí náà FCR ṣe pàtàkì." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 3, 5, 6, 9, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Irú ẹja àti ibi", objective: "O1", notYet: "Kò sí ìdí fún irú ẹja tí ó yàn, tàbí kò béèrè lọ́wọ́ olùrà kankan.", meets: "Ó yan irú ẹja àti ètò pẹ̀lú ìdí mẹ́ta láti ibi oko àti àwọn olùrà.", exceeds: "Ó dárúkọ àwọn olùrà, ìwọ̀n tí wọ́n fẹ́ àti iye owó tí wọ́n sọ." },
      { name: "Ibi àti ìwé àṣẹ", objective: "O2", notYet: "Kò yẹ ibi wò tàbí kò dárúkọ àjọ ẹja kankan.", meets: "Ó yẹ omi, ilẹ̀, bí ilẹ̀ ṣe dagẹ̀rẹ́ àti omíyalé wò; ó kọ àjọ ẹja àti àwọn ìbéèrè nípa ìwé àṣẹ sílẹ̀.", exceeds: "Ó ti kàn sí ọ́fíìsì ẹja, ó sì kọ ìdáhùn wọn sílẹ̀." },
      { name: "Ètò ìdára omi", objective: "O3", notYet: "Kò sí àyẹ̀wò omi nínú ètò náà.", meets: "Àyẹ̀wò àfẹ̀mọ́jú, ìgbóná omi, pH àti Secchi, pẹ̀lú bí ó ṣe máa ń ṣe wọ́n tó àti ohun tí ó máa ṣe tí nǹkan kò bá tọ́.", exceeds: "Ó fi ìwé àkọsílẹ̀ àyẹ̀wò tí ó ti kọ nǹkan sí àti ètò pàjáwìrì fún oxygen kékeré kún un." },
      { name: "Ọmọ ẹja àti kíkó wọn sínú adágún", objective: "O4", notYet: "Iye ọmọ ẹja kò sí tàbí kò tọ́, tàbí kò dárúkọ hatchery kankan.", meets: "Iye tó tọ́ láti ìwọ̀n ilẹ̀ àti iye ẹja tí wọ́n fohùn ṣọ̀kan lé lórí; ó dárúkọ hatchery tí a forúkọ rẹ̀ sílẹ̀ tàbí tí wọ́n dábàá pẹ̀lú àwọn àyẹ̀wò.", exceeds: "Ó kọ irú ẹja, bóyá wọ́n jẹ́ mono-sex, àti òfin hatchery nípa rírọ́pò ẹja tó kú." },
      { name: "Ìnáwó, èrè àti iye owó ìdọ́gba", objective: "O6", notYet: "Àwọn ìnáwó kan kò sí, oúnjẹ kò so mọ́ FCR, tàbí ìṣirò kò tọ́.", meets: "Gbogbo ìnáwó, oúnjẹ láti ìwọ̀n tí a retí pé wọ́n máa fi kún x FCR, èrè àti iye owó ìdọ́gba, gbogbo rẹ̀ tọ́.", exceeds: "Ó fi àpẹẹrẹ kejì hàn pẹ̀lú ìpín tó yè tó kéré sí i tàbí iye owó tó kéré sí i, àti ohun tí àgbẹ̀ náà máa ṣe." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ra ọmọ ẹja lọ́wọ́ hatchery tí a forúkọ rẹ̀ sílẹ̀ tàbí tí wọ́n dábàá láàárín oṣù 6 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n kọ àkọsílẹ̀ àyẹ̀wò omi àti oúnjẹ títí ìyípo kan fi parí (ìwádìí àtẹ̀lé)",
      "Ìpín tó yè àti FCR tí wọ́n ròyìn nígbà ìkórè, ní ìfiwéra pẹ̀lú ètò",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n jèrè ní ìyípo àkọ́kọ́ wọn, níbi tí àkọsílẹ̀ bá wà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀ àti gègé, tàbí fóònù tí ó ní app spreadsheet tàbí app àkọsílẹ̀",
      "Ẹ̀rọ ìṣirò (ẹ̀rọ ìṣirò fóònù dára)",
      "Tẹ́mómítà, ìwé pH àti Secchi disk tí a fọwọ́ ṣe (àwo funfun, ọ̀dà, igi)",
      "Téèpù ìwọ̀n fún adágún",
      "Nǹkan bí ìṣẹ́jú 75 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àṣeṣe ní adágún kan"
    ],
    facilitatorNotes: [
      "Ẹ ṣe Ẹ̀kọ́ 3 àti 4 ní adágún tí wọ́n ń lò: ẹ jọ ṣe àyẹ̀wò àfẹ̀mọ́jú, àyẹ̀wò Secchi àti pH, àti wíwọn àwọn ẹja àyẹ̀wò.",
      "Pe òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ fún ẹja láti ṣàlàyé àwọn ìwé àṣẹ àti àwọn hatchery tí a forúkọ wọn sílẹ̀ ní orílẹ̀-èdè tàbí county yín.",
      "Má ṣe sọ iye oògùn tàbí kẹ́míkà láéláé; rán àwọn akẹ́kọ̀ọ́ tí ẹja wọn ń ṣàìsàn sí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí dókítà ẹranko wọn.",
      "Fi iye owó ọmọ ẹja, oúnjẹ àti ẹja ní agbègbè yín rọ́pò àwọn iye owó àpẹẹrẹ kí ẹ̀kọ́ ìṣirò ìnáwó tó bẹ̀rẹ̀, kí o sì sọ ní kedere pé àpẹẹrẹ ni wọ́n.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
