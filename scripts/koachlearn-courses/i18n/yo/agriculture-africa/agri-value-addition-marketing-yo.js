"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-value-addition-marketing.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const NAFDAC_FOOD = { name: "NAFDAC (Nàìjíríà): Ìforúkọsílẹ̀ oúnjẹ, Ẹ̀ka Oúnjẹ Made in Nigeria (fún olùṣe kékeré àti alábọ́ọ́dé/ńlá)", url: "https://www.nafdac.gov.ng/food/food-registration/" };
const GH_FDA_REG = { name: "Àjọ Oúnjẹ àti Oògùn Ghana (Ghana FDA): Ìforúkọsílẹ̀ ọjà", url: "https://fdaghana.gov.gh/services-2/product-registration/" };
const GH_FDA_PLS = { name: "Ghana FDA: Ètò Ìwé Àṣẹ Onípele (Progressive Licensing Scheme) fún olùṣe kékeré (Pink, Yellow, Green)", url: "https://fdaghana.gov.gh/programmes/progressive-licensing-scheme-2/" };
const KEBS = { name: "Kenya Bureau of Standards (KEBS): Àmì Standardization (ìfọwọ́sí ọjà) àti àwọn àmì dídára", url: "https://www.kebs.org" };
const CODEX_HYGIENE = { name: "Codex Alimentarius (FAO/WHO): Ìgbìmọ̀ lórí Ìmọ́tótó Oúnjẹ àti Àwọn Ìlànà Gbogbogbò fún Ìmọ́tótó Oúnjẹ (CXC 1-1969)", url: "https://codex.fao.org/codex-committees/general-subject-committees/CCFH" };
const FAO_ZECC = { name: "FAO TECA/STI: Yàrá ìtutù tí kò lo iná (Zero Energy Cooling Chamber) fún ẹ̀fọ́", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-value-addition-marketing-yo",
  lang: "yo",
  translationOf: "agri-value-addition-marketing",
  category: "Agriculture (Africa)",
  name: "Àfikún Iye, Ìdìpọ̀ àti Ìtajà Ohun Ọ̀gbìn",
  skills: "Yíyan ọjà àfikún iye, Ṣíṣírò iye owó àti iye títà ọjà, Ṣíṣe ọjà pẹ̀lú ìmọ́tótó, Ìdìpọ̀ àti lílẹ àmì ọjà, Pípa ọjà mọ́ láìléwu lójú ọ̀nà, Títà tààrà fún àwọn olùrà",
  outcome: "sọ irè oko kan tàbí wàrà láti oko rẹ di ọjà tí a dì, tí ó sì ní àmì (label): yàn án, ṣírò iye owó rẹ̀, ṣe é pẹ̀lú ìmọ́tótó, mọ ìforúkọsílẹ̀ tí ó nílò, kí o sì fi lọ ṣọ́ọ̀bù, ilé-ìwé, ilé ìtura tàbí olùrà lórí ayélujára tààrà ní iye tí ó mú èrè wá.",
  about: [
    "Irè oko tútù sábà máa ń tà ní owó pọ́ọ́kú ní àsìkò ìkórè, nígbà tí gbogbo ènìyàn ń ta ohun kan náà. Tí o bá sọ ọ́ di ọjà bí màngòrò gbígbẹ, ìyẹ̀fun ẹ̀gẹ́, ẹ̀pà lílọ̀ (groundnut paste) tàbí yogọ́ọ̀tì, ó lè mú owó púpọ̀ sí i wá, kí ó pẹ́ sí i, kí ó sì dé ọ̀dọ̀ àwọn olùrà tuntun. Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré, ẹgbẹ́ obìnrin àti ẹgbẹ́ ọ̀dọ́, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ ní Kenya, Nàìjíríà, Ghana, àwọn orílẹ̀-èdè Ìwọ̀-oòrùn Áfíríkà tí ń sọ Faransé àti káàkiri Áfíríkà.",
    "O máa yan ọjà kan tí ó bá oko rẹ àti olùrà gidi kan mu, ṣírò iye owó ìdìpọ̀ kan àti iye tí o máa tà á, ṣètò ọ̀nà ṣíṣe ọjà pẹ̀lú ìmọ́tótó, ya àmì ọjà, wá àjọ orílẹ̀-èdè tí ó gbọ́dọ̀ fọwọ́ sí i, ṣètò bí ó ṣe máa wà láìléwu lójú ọ̀nà dé ọ̀dọ̀ olùrà, kí o sì múra ọ̀rọ̀ ìpolówó sílẹ̀ láti tà á tààrà.",
    "Ó tẹ̀lé àwọn ẹ̀kọ́ \"Ìtọ́jú àti Ìpamọ́ Irè Lẹ́yìn Ìkórè\" àti \"Ẹgbẹ́ Alájọṣe Àgbẹ̀ àti Bí A Ṣe Ń Dé Ọjà\", nítorí náà kò tún ìpamọ́, gbígbẹ tàbí títà gẹ́gẹ́ bí ẹgbẹ́ kọ́ni mọ́. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" fún oko rẹ. Gbogbo iye owó inú ẹ̀kọ́ yìí jẹ́ àpẹẹrẹ, kì í ṣe iye gidi."
  ],
  finalTask: "Kọ ètò ọjà ojú-ewé kan fún ọjà àfikún iye kan láti oko rẹ: ọjà náà àti olùrà rẹ̀, ìwé ìṣírò iye owó pẹ̀lú iye owó àti iye títà ìdìpọ̀ kan, àkọsílẹ̀ ìmọ́tótó fún ṣíṣe é, àkọ́pẹrẹ àmì ọjà pẹ̀lú àjọ orílẹ̀-èdè tí o gbọ́dọ̀ bá sọ̀rọ̀, bí o ṣe máa pa á mọ́ láìléwu lójú ọ̀nà, àti ọ̀rọ̀ ìpolówó kúkúrú sí olùrà tààrà kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn tí oko wọn ń dàgbà, àwọn òṣìṣẹ́ oko, ẹgbẹ́ obìnrin àti ẹgbẹ́ ọ̀dọ́, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ ní Kenya, Nàìjíríà, Ghana, Ìwọ̀-oòrùn Áfíríkà tí ń sọ Faransé àti káàkiri Áfíríkà. Ọ̀pọ̀ ti ń ta irè oko tútù ní ẹnu oko tàbí ní ọjà àdúgbò, wọ́n sì fẹ́ iye tó dára jù.",
    startingPoint: "Wọ́n lè gbin irè oko kí wọ́n sì kórè rẹ̀ tàbí kí wọ́n fún wàrà, wọ́n sì lè pa á mọ́ kí wọ́n sì sá a gbẹ dáadáa (wo \"Ìtọ́jú àti Ìpamọ́ Irè Lẹ́yìn Ìkórè\"). Àwọn kan ti ń ṣe ọjà díẹ̀díẹ̀ fún ẹbí tàbí aládùúgbò, láìṣírò iye owó, láìsí àmì ọjà tàbí ìforúkọsílẹ̀.",
    gap: "Ọ̀pọ̀ ọjà oko ni a ń fi àfojúdá dá iye wọn, a ń ṣe wọ́n láìsí ìlànà ìmọ́tótó, a ń tà wọ́n láìsí àmì ọjà tó yẹ, a sì ń fi wọ́n lé àwọn alárinà lọ́wọ́ tí wọ́n ń sanwó pẹ́ tàbí tí wọ́n ń san díẹ̀. Àwọn àgbẹ̀ nílò láti yan ọjà tí olùrà fẹ́ ní tòótọ́, ṣírò iye owó rẹ̀, ṣe é láìléwu, lẹ àmì sí i, mọ ìfọwọ́sí orílẹ̀-èdè tí ó nílò, kí wọ́n sì tà á tààrà, kí àfikún iye lè mú owó wá dípò kí ó sọ owó nù.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń lo Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì",
      "Ẹ̀rọ: fóònù lásán tàbí smartphone, tí a sábà máa ń jọ lò; ẹ̀rọ ìṣírò; ìwé",
      "Owó: owó kò pọ̀; bẹ̀rẹ̀ pẹ̀lú ìwọ̀n kékeré àti ohun èlò tí kò wọ́n",
      "Òfin: òfin ìforúkọsílẹ̀ àti àmì oúnjẹ yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, wọ́n sì ń yí padà; akẹ́kọ̀ọ́ ń bá àjọ orílẹ̀-èdè wọn ṣàyẹ̀wò",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá àkókò iṣẹ́ oko mu"
    ],
    prerequisites: "Ó wúlò: \"Ìtọ́jú àti Ìpamọ́ Irè Lẹ́yìn Ìkórè\", àti \"Ẹgbẹ́ Alájọṣe Àgbẹ̀ àti Bí A Ṣe Ń Dé Ọjà\". Ìṣírò ìpìlẹ̀: àròpọ̀, ìsọdipúpọ̀ àti pínpín."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá mọ àwọn irè oko pàtàkì tàbí wàrà oko rẹ àti ohun tí àwọn olùrà nítòsí rẹ ń béèrè fún", action: "yan ọjà àfikún iye kan tí o máa ṣe àti olùrà tí o máa tà á fún", standard: "lẹ́yìn tí o bá fi ó kéré tán àṣàyàn méjì wé ara wọn lórí ìbéèrè ọjà, ohun èlò àkọ́kọ́, ẹ̀rọ àti òfin" },
    { id: "O2", condition: "Tí o bá mọ iye owó ìpele ọjà (batch) kan", action: "ṣírò iye owó ìdìpọ̀ kan kí o sì dá iye títà rẹ̀", standard: "ní kíka ohun èlò àkọ́kọ́, ìdìpọ̀, agbára iná, iṣẹ́ ọwọ́, ọkọ̀ àti àdánù, pẹ̀lú iye tí ó bo gbogbo iye owó pẹ̀lú èrè" },
    { id: "O3", condition: "Fún ọjà tí o yàn, láti ìgbà tí o ń ṣe é títí dé ọ̀dọ̀ olùrà", action: "kọ àkọsílẹ̀ ìmọ́tótó àti ìtọ́jú òtútù (cold chain)", standard: "tí ó bo ọwọ́, omi, ojú ibi iṣẹ́, ohun èlò àkọ́kọ́, ìdìpọ̀ àti pípa ọjà mọ́ láìléwu nínú ìpamọ́ àti lójú ọ̀nà" },
    { id: "O4", condition: "Tí o bá mọ ọjà rẹ àti orílẹ̀-èdè rẹ", action: "ya àkọ́pẹrẹ àmì ọjà kí o sì dárúkọ àjọ orílẹ̀-èdè tí ó gbọ́dọ̀ fọwọ́ sí ọjà náà", standard: "pẹ̀lú orúkọ ọjà, àwọn èròjà, ìwọ̀n àpapọ̀ (net weight), olùṣe àti ọ̀nà ìkànsí, nọ́mbà ìpele àti àwọn ọjọ́, àti àkíyèsí láti ṣàyẹ̀wò òfin lọ́wọ́lọ́wọ́ ti àjọ náà" },
    { id: "O5", condition: "Tí o bá ní ṣọ́ọ̀bù, ilé-ìwé, ilé ìtura tàbí olùrà orí ayélujára kan", action: "múra ọ̀rọ̀ ìpolówó fún títà tààrà sílẹ̀ pẹ̀lú àdéhùn tí a kọ sílẹ̀", standard: "tí ó sọ ọjà náà, iye owó, iye ọjà, ìfijíṣẹ́, ọjọ́ ìsanwó àti bí a ṣe máa yanjú ẹ̀sùn" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣe ọjà tí ó mú èrè wá",
      lessons: [
        {
          title: "Yíyan ọjà àfikún iye",
          objectives: ["O1"],
          minutes: 5,
          goal: "Fi ọjà àfikún iye méjì wé ara wọn fún oko rẹ, kí o sì yan èyí tí ó ní olùrà gidi.",
          text: [
            "Àfikún iye túmọ̀ sí ṣíṣe nǹkan sí irè oko rẹ tí yóò jẹ́ kí olùrà san owó púpọ̀ sí i: sísá a gbẹ, lílọ̀ ọ́, yíyan án, gígún un, mímú un kan (fermenting), fífọ̀ ọ́ mọ́, títò ó sínú ìdìpọ̀ tàbí dídì í dáadáa. Màngòrò tútù tí ó ń jẹrà láàárín ọ̀sẹ̀ kan lè di màngòrò gbígbẹ tí ó pẹ́ fún oṣù púpọ̀. Ẹ̀gẹ́ lè di ìyẹ̀fun tàbí gaàrí, ẹ̀pà lè di ẹ̀pà lílọ̀, wàrà sì lè di yogọ́ọ̀tì.",
            "Bẹ̀rẹ̀ láti ọ̀dọ̀ olùrà, kì í ṣe láti ọ̀dọ̀ ẹ̀rọ. Béèrè lọ́wọ́ àwọn ṣọ́ọ̀bù, àwọn olùse oúnjẹ ilé-ìwé, ilé ìtura àti àwọn oníṣòwò ọjà nítòsí rẹ ohun tí wọ́n ń rà, iye tí wọ́n ń rà, ìgbà mélòó, ìwọ̀n ìdìpọ̀ wo àti ní iye owó wo. Ọjà tí ẹnikẹ́ni nítòsí kò béèrè fún jẹ́ ewu.",
            "Lẹ́yìn náà ṣàyẹ̀wò nǹkan mẹ́rin: ìbéèrè ọjà (ta ló máa rà á, mélòó), ohun èlò àkọ́kọ́ (ṣé ìwọ tàbí àwọn aládùúgbò rẹ ní tó, jálẹ̀ ọdún tàbí ní àsìkò rẹ̀ nìkan), ẹ̀rọ àti ọgbọ́n (ṣé o lè bẹ̀rẹ̀ kékeré, fún àpẹẹrẹ pẹ̀lú ẹ̀rọ ìsá-nǹkan-gbẹ oníná oòrùn tàbí ẹ̀rọ ìlọ̀ tí o yá), àti òfin (ọjà wàrà àti ẹran ní ewu jù, wọ́n sì sábà máa ń nílò ìfọwọ́sí púpọ̀ ju ìyẹ̀fun gbígbẹ lọ). Fi ó kéré tán àṣàyàn méjì wé ara wọn kí o tó yàn."
          ],
          steps: ["Kọ ọjà méjì tàbí mẹ́ta tí o lè ṣe láti inú irè oko tàbí wàrà rẹ sílẹ̀.", "Béèrè lọ́wọ́ ó kéré tán olùrà mẹ́ta ohun tí wọ́n ń rà, mélòó àti ní iye owó wo.", "Fún ọjà kọ̀ọ̀kan ní máàkì lórí ìbéèrè ọjà, ohun èlò àkọ́kọ́, ẹ̀rọ àti ọgbọ́n, àti òfin.", "Yan èyí tí ó ní máàkì tó ga jù àti olùrà tí o mọ orúkọ rẹ̀."],
          words: [["Àfikún iye (value addition)", "yíyí irè oko rẹ padà tàbí dídì í kí olùrà lè san owó púpọ̀ sí i fún un."], ["Ìgbà tí ọjà ń pẹ́ (shelf life)", "bí ọjà ṣe máa pẹ́ tó tí ó sì ṣì wà láìléwu, tí ó sì dára láti jẹ."], ["Ọjà tí ń bàjẹ́ kíákíá (perishable)", "ọjà tí ó máa ń bàjẹ́ kíákíá, bí wàrà, yogọ́ọ̀tì tàbí tòmátò tútù."]],
          slides: [
            { title: "Ohun tí àfikún iye túmọ̀ sí", bullets: ["Sá a gbẹ, lọ̀ ọ́, yan án, mú un kan tàbí dì í", "Màngòrò di màngòrò gbígbẹ; ẹ̀gẹ́ di ìyẹ̀fun tàbí gaàrí", "Ẹ̀pà di ẹ̀pà lílọ̀; wàrà di yogọ́ọ̀tì"] },
            { title: "Bẹ̀rẹ̀ láti ọ̀dọ̀ olùrà", bullets: ["Béèrè lọ́wọ́ ṣọ́ọ̀bù, olùse oúnjẹ ilé-ìwé, ilé ìtura, oníṣòwò", "Ohun tí wọ́n ń rà, mélòó, ìgbà mélòó", "Ìwọ̀n ìdìpọ̀ àti iye tí wọ́n ń san"] },
            { title: "Fún àṣàyàn kọ̀ọ̀kan ní máàkì", bullets: ["Ìbéèrè ọjà: ta ló ń rà, mélòó", "Ohun èlò àkọ́kọ́: ṣé ó tó, ní oṣù wo", "Ẹ̀rọ àti ọgbọ́n; òfin (wàrà ní ewu jù)"] }
          ],
          tryIt: "Mú ọjà méjì tí o lè ṣe. Béèrè lọ́wọ́ olùrà mẹ́ta nítòsí rẹ nípa ọ̀kọ̀ọ̀kan, lẹ́yìn náà fún méjèèjì ní máàkì lórí ìbéèrè ọjà, ohun èlò àkọ́kọ́, ẹ̀rọ àti òfin. Kọ ọjà tí o yàn àti olùrà tí o máa dojú kọ sílẹ̀.",
          youCanNow: "fi àwọn ọjà àfikún iye wé ara wọn lórí ìbéèrè ọjà, ohun èlò àkọ́kọ́, ẹ̀rọ àti òfin, kí o sì yan èyí tí ó ní olùrà gidi.",
          quickCheck: [
            { objective: "O1", q: "O fẹ́ fi àfikún iye kún màngòrò rẹ. Kí ni o kọ́kọ́ máa ṣe?", options: ["Ra ẹ̀rọ ìsá-nǹkan-gbẹ ńlá ní àwìn", "Ṣe ohun tí aládùúgbò rẹ ń ṣe", "Béèrè lọ́wọ́ àwọn olùrà nítòsí rẹ ohun tí wọ́n ń rà àti ní iye wo", "Ṣe púpọ̀ bí o ṣe lè ṣe tó, kí o wá olùrà lẹ́yìn náà"], answer: 2, why: "Bíbẹ̀rẹ̀ pẹ̀lú àwọn olùrà gidi ń fi hàn bóyá ìbéèrè wà kí o tó ná owó." },
            { objective: "O1", q: "Ọjà wo ló sábà máa ń nílò ìfọwọ́sí àti ìṣọ́ra PÚPỌ̀ SÍ I láti ṣe é láìléwu?", options: ["Yogọ́ọ̀tì tí a fi wàrà ṣe", "Ìyẹ̀fun ẹ̀gẹ́", "Màngòrò gbígbẹ tí a gé", "Ẹ̀wà tí a fọ̀ mọ́, tí a tò sínú ìdìpọ̀"], answer: 0, why: "Ọjà wàrà máa ń bàjẹ́ kíákíá, ó sì lè gbé kòkòrò àrùn, nítorí náà ewu rẹ̀ pọ̀ jù, òfin rẹ̀ sì sábà máa ń le jù." }
          ]
        },
        {
          title: "Ṣíṣírò iye owó àti dídá iye títà ọjà rẹ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣírò iye owó ìdìpọ̀ kan kí o sì dá iye tí ó bo gbogbo iye owó pẹ̀lú èrè.",
          text: [
            "Ọ̀pọ̀ olùṣe ọjà kékeré ń pàdánù owó láìmọ̀, nítorí pé ohun èlò àkọ́kọ́ nìkan ni wọ́n ń kà. Ka gbogbo iye owó ìpele kan: ohun èlò àkọ́kọ́, ìdìpọ̀ àti àmì ọjà, agbára iná (epo, èédú, iná mànàmáná, owó ẹ̀rọ ìlọ̀), omi, iṣẹ́ ọwọ́ (pẹ̀lú àkókò tìrẹ), ọkọ̀, àti owó bí ti ìforúkọsílẹ̀ tàbí owó ọjà tí a pín sí gbogbo ọdún.",
            "Lẹ́yìn náà ka àdánù: àwọn kan máa ń bàjẹ́, wọ́n máa ń dà nù tàbí a máa ń fi wọ́n ṣe àpẹẹrẹ ọ̀fẹ́. Pín àpapọ̀ iye owó ìpele náà sí iye ìdìpọ̀ tí o lè tà ní tòótọ́. Àpẹẹrẹ (àpẹẹrẹ nìkan ni àwọn iye wọ̀nyí): ẹgbẹ́ kan ní Ghana ń ṣe ẹ̀pà lílọ̀. Ẹ̀pà GHS 400, ìgò àti àmì ọjà GHS 150, ẹ̀rọ ìlọ̀ àti epo GHS 50, iṣẹ́ ọwọ́ GHS 100, ọkọ̀ GHS 50: àpapọ̀ GHS 750. Wọ́n kún ìgò 50 ṣùgbọ́n wọ́n retí láti ta 48, nítorí náà ìgò kọ̀ọ̀kan ná wọn nǹkan bí GHS 15.60.",
            "Iye títà rẹ gbọ́dọ̀ bo iye owó ìdìpọ̀ kọ̀ọ̀kan pẹ̀lú èrè fún ìfowópamọ́ àti àtúnṣe. Lẹ́yìn náà fi iye náà wé ti àwọn ọjà tí ó jọ ọ́ ní ṣọ́ọ̀bù. Tí iye tìrẹ bá ga jù wọ́n lọ púpọ̀, wá ọ̀nà tí kò wọ́n láti ṣe é, ìdìpọ̀ tí ó kéré, tàbí olùrà tí ó ń sanwó fún dídára. Ọ̀nà kan náà yìí ń ṣiṣẹ́ fún màngòrò gbígbẹ ní KES, gaàrí ní NGN tàbí yogọ́ọ̀tì ní XOF."
          ],
          steps: ["Kọ gbogbo iye owó ìpele kan sílẹ̀, pẹ̀lú iṣẹ́ ọwọ́ tìrẹ.", "Ka iye ìdìpọ̀ tí o lè tà ní tòótọ́ lẹ́yìn àdánù.", "Pín àpapọ̀ iye owó sí iye ìdìpọ̀ tí o lè tà: ìyẹn ni iye owó ìdìpọ̀ kan.", "Fi èrè kún un láti rí iye títà rẹ.", "Fi wé ti àwọn ọjà tí ó jọ ọ́ ní ṣọ́ọ̀bù, kí o sì ṣàtúnṣe ètò rẹ tí ó bá yẹ."],
          words: [["Iye owó ẹyọ kan (cost per unit)", "iye tí ó ná ọ láti ṣe ìdìpọ̀ kan."], ["Èrè (margin)", "owó tí ó kù láti inú títà kọ̀ọ̀kan lẹ́yìn tí o bá ti san gbogbo iye owó."], ["Ìpele (batch)", "ìgbà kan tí o ṣe ọjà náà, fún àpẹẹrẹ ìgò 50 tí a ṣe ní ọjọ́ kan."]],
          slides: [
            { title: "Ka gbogbo iye owó ìpele kan", bullets: ["Ohun èlò àkọ́kọ́, ìdìpọ̀, àmì ọjà", "Epo, iná mànàmáná, ẹ̀rọ ìlọ̀, omi", "Iṣẹ́ ọwọ́ (tìrẹ náà), ọkọ̀, owó ìforúkọsílẹ̀"] },
            { title: "Iye owó ìdìpọ̀ kan", bullets: ["Àpapọ̀ iye owó ìpele / ìdìpọ̀ tí o lè tà ní tòótọ́", "Àpẹẹrẹ: GHS 750 / ìgò 48 = nǹkan bí GHS 15.60", "Àpẹẹrẹ nìkan ni àwọn iye wọ̀nyí"] },
            { title: "Dá iye títà", bullets: ["Iye owó ìdìpọ̀ kan + èrè = iye títà", "Ṣàyẹ̀wò àwọn ọjà tí ó jọ ọ́ ní ṣọ́ọ̀bù", "Ó ga jù? Ọ̀nà tí kò wọ́n, ìdìpọ̀ kékeré tàbí olùrà míì"] }
          ],
          tryIt: "Ṣe ìwé ìṣírò iye owó fún ìpele kan ọjà tí o yàn. Kọ gbogbo iye owó, iye ìdìpọ̀ tí o retí láti tà, iye owó ìdìpọ̀ kan àti iye tí o máa tà á. Fi wé ọjà kan tí ó jọ ọ́ ní ṣọ́ọ̀bù.",
          youCanNow: "ṣe ìwé ìṣírò iye owó, ṣírò iye owó ìdìpọ̀ kan, kí o sì dá iye títà tí ó bò ó pẹ̀lú èrè.",
          quickCheck: [
            { objective: "O2", q: "Iye owó wo ni àwọn olùṣe ọjà kékeré máa ń gbàgbé JÙ?", options: ["Ohun èlò àkọ́kọ́", "Iṣẹ́ ọwọ́ tiwọn àti àdánù", "Iye owó ní ṣọ́ọ̀bù", "Orúkọ ọjà náà"], answer: 1, why: "Àkókò tìrẹ àti ìdìpọ̀ tí ó bàjẹ́ tàbí tí o fi ṣe àpẹẹrẹ jẹ́ iye owó gidi; tí o bá fi wọ́n sílẹ̀, àdánù máa farapamọ́." },
            { objective: "O2", q: "Ìpele kan ná KES 6,000, o sì lè ta ìdìpọ̀ 40. Kí ni iye owó ìdìpọ̀ kan?", options: ["KES 240", "KES 600", "KES 1,500", "KES 150"], answer: 3, why: "Iye owó ìdìpọ̀ kan ni àpapọ̀ iye owó ìpele tí a pín sí ìdìpọ̀ tí a tà: 6,000 / 40 = KES 150." }
          ]
        },
        {
          title: "Ìmọ́tótó àti ààbò oúnjẹ nígbà tí o ń ṣe ọjà",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kọ àkọsílẹ̀ ìmọ́tótó tí ó ń pa ọjà rẹ mọ́ láìléwu nígbà tí o ń ṣe é.",
          text: [
            "Olùrà kò ní padà wá, àjọ ìjọba sì lè dá títà rẹ dúró, tí ọjà rẹ bá mú ẹnikẹ́ni ṣàìsàn. Àwọn Ìlànà Gbogbogbò fún Ìmọ́tótó Oúnjẹ ti Codex Alimentarius àgbáyé bo gbogbo ọ̀nà, láti oko títí dé ọ̀dọ̀ ẹni tí ó jẹ oúnjẹ náà. Àjọ oúnjẹ orílẹ̀-èdè rẹ ń lo èrò bí ìwọ̀nyí nígbà tí ó bá ń ṣàyẹ̀wò rẹ.",
            "Àwọn ìpìlẹ̀: omi tí ó mọ́, tí kò léwu; fífọ ọwọ́ pẹ̀lú ọṣẹ kí o tó bẹ̀rẹ̀ iṣẹ́ àti lẹ́yìn ilé ìgbọ̀nsẹ̀; kò sí iṣẹ́ nígbà tí o bá ń ṣàìsàn; bíbo irun àti ojú ọgbẹ́; ojú ibi iṣẹ́, irinṣẹ́ àti àwọn àpótí tí ó mọ́; yíya ohun èlò àkọ́kọ́ sọ́tọ̀ kúrò lára ọjà tí a ti parí; dídá ẹranko, kòkòrò àti eku dúró kí wọ́n má wọlé; àti ibi tí ó mọ́, tí ó gbẹ láti pa àwọn ìdìpọ̀ mọ́ sí.",
            "Bẹ̀rẹ̀ pẹ̀lú ohun èlò àkọ́kọ́ tí ó mọ́. Má ṣe lo ẹ̀pà tàbí ọkà tí ó ti hu ẹ̀fun (mould) láéláé, nítorí ó lè ní májèlé aflatoxin (wo \"Ìtọ́jú àti Ìpamọ́ Irè Lẹ́yìn Ìkórè\"). Wàrà fún yogọ́ọ̀tì gbọ́dọ̀ jẹ́ gbígbóná, kí a sì tọ́jú rẹ̀ ní ọ̀nà tí a ti dán wò láti ọ̀dọ̀ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ ẹran ọ̀sìn wàrà tàbí àjọ ìlànà, kí a sì pa á mọ́ ní òtútù. Kọ àwọn ìgbésẹ̀ rẹ sílẹ̀ kí gbogbo ìpele lè jẹ́ ṣíṣe ní ọ̀nà kan náà, kí o sì fún ìpele kọ̀ọ̀kan ní nọ́mbà àti ọjọ́."
          ],
          steps: ["Kọ àwọn ìgbésẹ̀ ṣíṣe ọjà rẹ sílẹ̀ láti ohun èlò àkọ́kọ́ títí dé ìdìpọ̀ tí a dì pa.", "Fún ìgbésẹ̀ kọ̀ọ̀kan, kọ ohun tí ó lè mú un léwu (ìdọ̀tí, kòkòrò àrùn, ẹ̀fun, kòkòrò).", "Kọ òfin ìmọ́tótó tí ó dá a dúró.", "Fún ìpele kọ̀ọ̀kan ní nọ́mbà àti ọjọ́, kí o sì kọ ẹni tí ó ṣe é sílẹ̀."],
          words: [["Ààbò oúnjẹ (food safety)", "pípa oúnjẹ mọ́ láìsí kòkòrò àrùn, májèlé àti ìdọ̀tí tí ó lè mú ènìyàn ṣàìsàn."], ["Ìbàjẹ́ (contamination)", "nígbà tí ìdọ̀tí, kòkòrò àrùn tàbí kẹ́míkà bá wọ inú oúnjẹ."], ["Nọ́mbà ìpele (batch number)", "kóòdù lórí ìdìpọ̀ kọ̀ọ̀kan tí ó sọ ìgbà àti bí a ṣe ṣe é, kí o lè tọpa ìṣòro kan."]],
          slides: [
            { title: "Ìdí tí ìmọ́tótó fi ṣe pàtàkì", bullets: ["Oníbàárà kan tí ó ṣàìsàn lè pa òwò rẹ run", "Ìlànà ìmọ́tótó Codex: láti oko dé orí àwo", "Àwọn olùṣàyẹ̀wò ń wo àwọn ìpìlẹ̀ wọ̀nyí"] },
            { title: "Àwọn ìpìlẹ̀", bullets: ["Omi tí kò léwu; fi ọṣẹ fọ ọwọ́", "Má ṣiṣẹ́ nígbà àìsàn; bo irun àti ọgbẹ́", "Irinṣẹ́ tí ó mọ́; ya ohun àkọ́kọ́ sọ́tọ̀ kúrò lára ọjà tí a parí"] },
            { title: "Bẹ̀rẹ̀ ní mímọ́, kọ ọ́ sílẹ̀", bullets: ["Má ṣe lo ọkà tàbí ẹ̀pà tí ó hu ẹ̀fun láéláé", "Wàrà: ọ̀nà tí a dán wò, pa á mọ́ ní òtútù", "Ìgbésẹ̀ kan náà ní gbogbo ìpele; nọ́mbà ìpele àti ọjọ́"] }
          ],
          sources: [CODEX_HYGIENE],
          tryIt: "Kọ àwọn ìgbésẹ̀ ṣíṣe ọjà rẹ sílẹ̀. Lẹ́gbẹ̀ẹ́ ìgbésẹ̀ kọ̀ọ̀kan, kọ ohun kan tí ó lè mú un léwu àti òfin tí ó dènà rẹ̀. Èyí ni àkọsílẹ̀ ìmọ́tótó rẹ.",
          youCanNow: "kọ àkọsílẹ̀ ìmọ́tótó fún ọjà rẹ, kí o sì fún gbogbo ìpele ní nọ́mbà àti ọjọ́.",
          quickCheck: [
            { objective: "O3", q: "Òṣìṣẹ́ kan ń ṣu gbuuru ní ọjọ́ tí ẹ ń ṣe ọjà. Kí ló yẹ kí ó ṣẹlẹ̀?", options: ["Kí ó jìnnà sí ibi iṣẹ́ títí tí ara rẹ̀ yóò fi yá", "Kí ó ṣiṣẹ́ ṣùgbọ́n kí ó fọ ọwọ́ lẹ́ẹ̀kan", "Kí ó ṣiṣẹ́ pẹ̀lú ìbọ̀wọ́ nìkan", "Kí ó dì ọjà dípò kí ó po ó"], answer: 0, why: "Òṣìṣẹ́ tí ń ṣàìsàn lè kó kòkòrò àrùn sínú oúnjẹ, nítorí náà kò yẹ kí ó fọwọ́ kàn án títí ara rẹ̀ yóò fi yá." },
            { objective: "O3", q: "Àwọn ẹ̀pà kan nínú àpò dà bí ẹni pé wọ́n ti hu ẹ̀fun. Kí ni o máa ṣe?", options: ["Yan wọ́n pẹ́ sí i láti pa ẹ̀fun náà", "Pò wọ́n mọ́ ẹ̀pà tí ó dára", "Yọ wọ́n kúrò, má sì lò wọ́n fún ẹ̀pà lílọ̀", "Tà wọ́n ní owó pọ́ọ́kú"], answer: 2, why: "Ẹ̀fun lè ní aflatoxin, èyí tí sísè kò lè yọ kúrò, nítorí náà a kò gbọ́dọ̀ lo ẹ̀pà tí ó hu ẹ̀fun." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣe ọjà tí ó mú èrè wá",
        questions: [
          { objective: "O1", q: "Èwo ni àpẹẹrẹ àfikún iye?", options: ["Títa ẹ̀gẹ́ tútù ní ẹnu oko", "Lílọ̀ ẹ̀gẹ́ di ìyẹ̀fun àti dídì í", "Gbígbin ẹ̀gẹ́ púpọ̀ sí i", "Fífi ẹ̀gẹ́ sílẹ̀ nínú ilẹ̀ pẹ́ sí i"], answer: 1, why: "Lílọ̀ àti dídì ń yí irè oko padà sí ọjà tí olùrà ń san owó púpọ̀ sí i fún." },
          { objective: "O1", q: "Ní àsìkò òjò nìkan ni o ní wàrà. Àyẹ̀wò wo ló ṣe pàtàkì jù kí o tó yan yogọ́ọ̀tì?", options: ["Àwọ̀ àmì ọjà", "Orúkọ ọjà rẹ", "Ohun tí àwọn ọ̀rẹ́ rẹ fẹ́ràn", "Bóyá o ní ohun èlò àkọ́kọ́ tó jálẹ̀ ọdún àti olùrà fún un"], answer: 3, why: "Ìpèsè ohun èlò àkọ́kọ́ àti ìbéèrè ọjà ló ń pinnu bóyá ọjà náà lè di olùrà mú." },
          { objective: "O2", q: "Kí ni iye owó ìdìpọ̀ kan?", options: ["Àpapọ̀ iye owó ìpele tí a pín sí ìdìpọ̀ tí o lè tà ní tòótọ́", "Iye owó ní ṣọ́ọ̀bù, tí a yọ iṣẹ́ ọwọ́ rẹ kúrò", "Iye owó ohun èlò àkọ́kọ́ nìkan", "Ohunkóhun tí aládùúgbò rẹ ń gbà"], answer: 0, why: "Pínpín gbogbo iye owó ìpele sí ìdìpọ̀ tí a lè tà ń fún ọ ní iye owó gidi ìdìpọ̀ kan." },
          { objective: "O3", q: "Èwo ni òfin ìmọ́tótó ìpìlẹ̀ fún ṣíṣe ọjà?", options: ["Jẹ́ kí adìyẹ máa rìn ní ibi iṣẹ́", "Lo omi èyíkéyìí tí o bá ní", "Fi ọṣẹ fọ ọwọ́ kí o tó bẹ̀rẹ̀ iṣẹ́ àti lẹ́yìn ilé ìgbọ̀nsẹ̀", "Pa ohun èlò àkọ́kọ́ àti ọjà tí a parí mọ́ pọ̀"], answer: 2, why: "Fífi ọṣẹ fọ ọwọ́ ń dá kòkòrò àrùn láti ọwọ́ dúró kí wọ́n má wọ inú oúnjẹ." },
          { objective: "O3", q: "Kí ló dé tí a fi ń fún ìpele kọ̀ọ̀kan ní nọ́mbà àti ọjọ́?", options: ["Kí ìdìpọ̀ lè rẹwà", "Láti tọpa ìṣòro kí a sì ṣàtúnṣe rẹ̀ tí ìpele kan bá bàjẹ́", "Nítorí pé àwọn olùrà fẹ́ràn nọ́mbà", "Láti gbé iye owó sókè"], answer: 1, why: "Nọ́mbà ìpele ń jẹ́ kí o mọ àwọn ìdìpọ̀ tí ó wá láti ìpele tí ó ní ìṣòro àti ìgbà tí a ṣe é." }
        ]
      }
    },
    {
      name: "Orí 2: Ìdìpọ̀, àmì ọjà àti títà tààrà",
      lessons: [
        {
          title: "Ìdìpọ̀, àmì ọjà, orúkọ ọjà (brand) àti ìforúkọsílẹ̀",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ya àkọ́pẹrẹ àmì fún ọjà rẹ, kí o sì wá àjọ orílẹ̀-èdè tí ó gbọ́dọ̀ fọwọ́ sí i.",
          text: [
            "Ìdìpọ̀ tó dára ń pa ọjà mọ́ láìléwu, ó sì ń jẹ́ kí olùrà gbẹ́kẹ̀lé e. Yan ìdìpọ̀ tí a fọwọ́ sí fún oúnjẹ (food-grade) tí ó ń dá afẹ́fẹ́, omi àti kòkòrò dúró: àpò tí a dì pa fún màngòrò gbígbẹ àti ìyẹ̀fun, ìgò tí ó mọ́ pẹ̀lú ìdérí tí ó há fún ẹ̀pà lílọ̀, àti ife tí ó mọ́, tí a dì pa fún yogọ́ọ̀tì. Brand rẹ ni orúkọ, àmì (logo) àti ìlérí rẹ, fún àpẹẹrẹ 'mọ́, ti àdúgbò, kò ní ṣúgà àfikún'. Jẹ́ kí ó rọrùn, kí ó sì jẹ́ ọ̀kan náà lórí gbogbo ìdìpọ̀.",
            "Àmì ọjà sábà máa ń fi hàn: orúkọ ọjà, àwọn èròjà, ìwọ̀n àpapọ̀ tàbí iye, orúkọ olùṣe àti ọ̀nà ìkànsí, nọ́mbà ìpele, ọjọ́ tí a ṣe é àti ọjọ́ tí ó yẹ kí a lò ó kí ó tó (use-by tàbí best-before), bí a ṣe máa pa á mọ́, àti nọ́mbà ìforúkọsílẹ̀ tàbí àmì èyíkéyìí. Orílẹ̀-èdè rẹ lè béèrè fún púpọ̀ sí i, nítorí náà ṣàyẹ̀wò kí o tó tẹ àmì púpọ̀ jáde.",
            "Ọ̀pọ̀ oúnjẹ tí a dì ló nílò ìfọwọ́sí kí a tó tà wọ́n ní ṣọ́ọ̀bù. Ní Kenya, KEBS ló ń fún ọjà tí ó bá Ìlànà Kenya mu ní Àmì Standardization. Ní Nàìjíríà, NAFDAC ń forúkọ oúnjẹ tí a ṣe ní orílẹ̀-èdè sílẹ̀ nípasẹ̀ Ẹ̀ka Oúnjẹ Made in Nigeria rẹ̀, pẹ̀lú ọ̀nà fún olùṣe kékeré àti fún alábọ́ọ́dé àti ńlá. Ní Ghana, Àjọ Oúnjẹ àti Oògùn (FDA) ń forúkọ ọjà sílẹ̀, Ètò Ìwé Àṣẹ Onípele (Progressive Licensing Scheme) rẹ̀ sì ń jẹ́ kí olùṣe kékeré gan-an (ènìyàn kan sí márùn-ún) tẹ̀lé òfin ní ìpele-ìpele. Ní Côte d'Ivoire, bá àjọ ìlànà orílẹ̀-èdè CODINORM sọ̀rọ̀; àwọn orílẹ̀-èdè míì ní àjọ tiwọn. Òfin, fọ́ọ̀mù àti owó ń yí padà, nítorí náà kàn sí àjọ náà kí o tó bẹ̀rẹ̀."
          ],
          steps: ["Yan ìdìpọ̀ food-grade tí ó ń dá afẹ́fẹ́, omi àti kòkòrò dúró.", "Kọ orúkọ brand rẹ àti ìlérí ìlà kan.", "Ya àkọ́pẹrẹ àmì ọjà: orúkọ, èròjà, ìwọ̀n àpapọ̀, olùṣe àti ọ̀nà ìkànsí, nọ́mbà ìpele, àwọn ọjọ́, bí a ṣe ń pa á mọ́.", "Wá àjọ orílẹ̀-èdè rẹ (KEBS, NAFDAC, Ghana FDA, CODINORM tàbí òmíràn), kí o sì béèrè ohun tí ọjà rẹ nílò.", "Tẹ àmì ọjà jáde lẹ́yìn tí o bá ti mọ òfin nìkan."],
          words: [["Brand", "orúkọ, àmì (logo) àti ìlérí tí ó ń jẹ́ kí àwọn olùrà dá ọjà rẹ mọ̀ kí wọ́n sì gbẹ́kẹ̀lé e."], ["Ìwọ̀n àpapọ̀ (net weight)", "ìwúwo oúnjẹ tí ó wà nínú ìdìpọ̀, láìka ìdìpọ̀ náà mọ́ ọn."], ["Ìforúkọsílẹ̀ (registration)", "ìfọwọ́sí láti ọ̀dọ̀ àjọ orílẹ̀-èdè pé a lè ta oúnjẹ kan."], ["Ọjọ́ best-before", "ọjọ́ tí ọjà náà máa fi dára jù lọ, tí a bá pa á mọ́ bí àmì ọjà ṣe sọ."]],
          slides: [
            { title: "Ìdìpọ̀ tí ó ń dáàbò bo ọjà", bullets: ["Food-grade; ó ń dá afẹ́fẹ́, omi àti kòkòrò dúró", "Àpò tí a dì pa, ìgò tí ó mọ́, ife tí a dì pa", "Brand kan náà tí ó rọrùn lórí gbogbo ìdìpọ̀"] },
            { title: "Ohun tí àmì ọjà sábà máa ń fi hàn", bullets: ["Orúkọ, èròjà, ìwọ̀n àpapọ̀", "Orúkọ olùṣe àti ọ̀nà ìkànsí", "Nọ́mbà ìpele, ọjọ́ tí a ṣe é, best-before tàbí use-by", "Bí a ṣe ń pa á mọ́; nọ́mbà ìforúkọsílẹ̀ tàbí àmì"] },
            { title: "Ta ló ń fọwọ́ sí i (ṣàyẹ̀wò òfin lọ́wọ́lọ́wọ́)", bullets: ["Kenya: Àmì Standardization ti KEBS", "Nàìjíríà: ìforúkọsílẹ̀ NAFDAC (ọ̀nà fún olùṣe kékeré náà wà)", "Ghana: FDA; Ètò Ìwé Àṣẹ Onípele fún olùṣe kékeré gan-an"] },
            { title: "Kí o tó tẹ̀ ẹ́ jáde", bullets: ["Côte d'Ivoire: CODINORM; orílẹ̀-èdè míì: àjọ tiwọn", "Òfin, fọ́ọ̀mù àti owó ń yí padà", "Kọ́kọ́ béèrè lọ́wọ́ àjọ náà, lẹ́yìn náà tẹ àmì jáde"] }
          ],
          sources: [KEBS, NAFDAC_FOOD, GH_FDA_REG, GH_FDA_PLS],
          tryIt: "Ya àkọ́pẹrẹ àmì ọjà rẹ sórí ìwé tàbí pẹ̀lú irinṣẹ́ ọ̀fẹ́ bí Canva. Lẹ́yìn náà wá ojú-òpó wẹ́ẹ̀bù tàbí ọ́fíìsì àjọ oúnjẹ orílẹ̀-èdè rẹ, kí o sì kọ àwọn ìbéèrè tí o máa béèrè nípa ìforúkọsílẹ̀ àti àmì ọjà sílẹ̀.",
          youCanNow: "ya àkọ́pẹrẹ àmì ọjà, kí o sì dárúkọ àjọ orílẹ̀-èdè tí o máa bá ṣàyẹ̀wò kí o tó tà ní ṣọ́ọ̀bù.",
          quickCheck: [
            { objective: "O4", q: "Nǹkan wo ni àmì oúnjẹ sábà máa ń nílò?", options: ["PIN báńkì àgbẹ̀ náà", "Iye owó ẹ̀pà tútù", "Fọ́tò oko", "Nọ́mbà ìpele àti ọjọ́ best-before"], answer: 3, why: "Nọ́mbà ìpele àti àwọn ọjọ́ ń jẹ́ kí olùrà àti olùṣàyẹ̀wò mọ ìgbà tí a ṣe é àti bí ó ṣe máa pẹ́ tó." },
            { objective: "O4", q: "Olùṣe ọjà kékeré kan ní Ghana tí ó ní òṣìṣẹ́ mẹ́ta fẹ́ ìfọwọ́sí FDA. Ètò wo ló lè ràn án lọ́wọ́ láti tẹ̀lé òfin ní ìpele-ìpele?", options: ["Àmì Standardization", "Ètò Ìwé Àṣẹ Onípele (Progressive Licensing Scheme)", "GLOBALG.A.P.", "Ẹ̀ka Oúnjẹ Made in Nigeria"], answer: 1, why: "Ètò Ìwé Àṣẹ Onípele ti Ghana FDA wà fún olùṣe kékeré tí ó ní ènìyàn kan sí márùn-ún." }
          ]
        },
        {
          title: "Pípa ọjà mọ́ láìléwu lójú ọ̀nà: ìtọ́jú òtútù àti ọkọ̀",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ṣètò bí ọjà rẹ ṣe máa wà láìléwu, láìbàjẹ́, láti ibi ìpamọ́ rẹ dé ọ̀dọ̀ olùrà.",
          text: [
            "A lè ṣe ọjà dáadáa pátápátá, kí ó sì bàjẹ́ lójú ọ̀nà. Ọjà tí ń bàjẹ́ kíákíá bí yogọ́ọ̀tì àti omi èso tútù nílò ìtọ́jú òtútù (cold chain): wọ́n gbọ́dọ̀ wà ní òtútù ní gbogbo ìgbésẹ̀, láti ìgbà tí a ṣe wọ́n títí dé fìríjì olùrà. Tí wọ́n bá gbóná lójú ọ̀nà, kòkòrò àrùn máa ń pọ̀ sí i, ọjà náà sì lè mú ènìyàn ṣàìsàn, kódà tí ó bá dà bí ẹni pé kò sí nǹkan.",
            "Fún ìrìn àjò kúkúrú, lo àpótí ìtutù (cool box) tí ó mọ́ pẹ̀lú àpò yìnyín, kí o sì fi ọjà jíṣẹ́ ní àárọ̀ kùtù. Bá olùrà ṣàdéhùn pé yóò fi í sínú fìríjì lẹ́sẹ̀kẹsẹ̀. Má ṣe tún yogọ́ọ̀tì tí ó ti gbóná dì sínú yìnyín tàbí tún un tà láéláé. Ọjà gbígbẹ bí ìyẹ̀fun ẹ̀gẹ́, màngòrò gbígbẹ àti ẹ̀pà lílọ̀ kò nílò òtútù, ṣùgbọ́n wọ́n gbọ́dọ̀ wà ní gbígbẹ, ní dídì pa, ní ibòji, kí wọ́n sì jìnnà sí epo, kẹ́míkà àti kòkòrò.",
            "Ṣètò ìrìn àjò náà: ta ló máa gbé e, pẹ̀lú kí ni (alùpùpù, matatu, ọ̀kadà, bọ́ọ̀sì tàbí ọkọ̀ akẹ́rù), báwo ló ṣe máa pẹ́ tó, àti bí a ṣe máa dáàbò bo àwọn ìdìpọ̀ kúrò lọ́wọ́ fífọ́, oòrùn àti òjò. Ìtutù tí kò wọ́n bí yàrá ìtutù tí kò lo iná (zero energy cooling chamber) ti FAO lè jẹ́ kí irè oko tutù díẹ̀ kí o tó ṣe ọjà. Kọ àwọn ìgbésẹ̀ ìtọ́jú òtútù àti ọkọ̀ rẹ kún àkọsílẹ̀ ìmọ́tótó rẹ."
          ],
          steps: ["Pinnu bóyá ọjà rẹ ń bàjẹ́ kíákíá (ó nílò òtútù) tàbí ó gbẹ (ó nílò kí ó gbẹ kí a sì dì í pa).", "Fún ọjà tí ó nílò òtútù: àpótí ìtutù, àpò yìnyín, ìfijíṣẹ́ àárọ̀ kùtù, fìríjì olùrà lẹ́sẹ̀kẹsẹ̀.", "Fún ọjà gbígbẹ: dì í pa, fi sí ibòji, jìnnà sí kẹ́míkà àti kòkòrò.", "Ṣètò ẹni tí ó máa gbé e, bí, bí ó ṣe máa pẹ́ tó, àti bí a ṣe máa dáàbò bo ìdìpọ̀.", "Fi àwọn ìgbésẹ̀ wọ̀nyí kún àkọsílẹ̀ ìmọ́tótó rẹ."],
          words: [["Ìtọ́jú òtútù (cold chain)", "pípa ọjà mọ́ ní òtútù ní gbogbo ìgbésẹ̀ láti ìgbà tí a ṣe é títí dé ìgbà tí a tà á."], ["Àpótí ìtutù (cool box)", "àpótí tí kò jẹ́ kí ooru wọlé, tí ó ń pa nǹkan mọ́ ní òtútù pẹ̀lú yìnyín tàbí àpò yìnyín."]],
          slides: [
            { title: "Ìtọ́jú òtútù fún ọjà tí ń bàjẹ́ kíákíá", bullets: ["Yogọ́ọ̀tì àti omi èso gbọ́dọ̀ wà ní òtútù ní gbogbo ọ̀nà", "Ó gbóná lójú ọ̀nà = kòkòrò àrùn ń pọ̀, kódà tí ó dà bí ẹni pé ó dára", "Má tún yogọ́ọ̀tì tí ó ti gbóná tà láéláé"] },
            { title: "Ìrìn àjò kúkúrú, owó díẹ̀", bullets: ["Àpótí ìtutù tí ó mọ́ pẹ̀lú àpò yìnyín", "Fi jíṣẹ́ ní àárọ̀ kùtù", "Olùrà fi í sínú fìríjì lẹ́sẹ̀kẹsẹ̀"] },
            { title: "Ọjà gbígbẹ", bullets: ["Jẹ́ kí ó gbẹ, kí a dì í pa, kí ó wà ní ibòji", "Jìnnà sí epo, kẹ́míkà àti kòkòrò", "Dáàbò bo ìdìpọ̀ kúrò lọ́wọ́ fífọ́ àti òjò"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Kọ ìrìn àjò ọjà rẹ láti ibi ìpamọ́ rẹ dé ọ̀dọ̀ olùrà rẹ: ta ló máa gbé e, bí, báwo ló ṣe máa pẹ́ tó, àti ohun tí ó máa jẹ́ kí ó wà ní òtútù tàbí ní gbígbẹ láìbàjẹ́. Fi kún àkọsílẹ̀ ìmọ́tótó rẹ.",
          youCanNow: "ṣètò ìtọ́jú òtútù tàbí ọ̀nà ìrìn àjò ọjà gbígbẹ tí ó ń pa ọjà rẹ mọ́ láìléwu títí ó fi dé ọwọ́ olùrà.",
          quickCheck: [
            { objective: "O3", q: "Yogọ́ọ̀tì rẹ wà nínú oòrùn fún wákàtí mẹ́ta nínú bọ́ọ̀sì tí ó pẹ́. Kí ni o máa ṣe?", options: ["Tà á kíákíá ní owó ẹ̀dínwó", "Fi í padà sínú fìríjì kí o tà á lọ́la", "Má tà á; kò sí láìléwu mọ́", "Tọ́ ọ wò kí o tà á tí ó bá dà bí ẹni pé ó dára"], answer: 2, why: "Yogọ́ọ̀tì tí ó ti gbóná lè ní kòkòrò àrùn tí o kò lè rí tàbí tọ́ wò, nítorí náà kò yẹ kí a tà á." },
            { objective: "O3", q: "Kí ni màngòrò gbígbẹ nílò jù lójú ọ̀nà dé ọ̀dọ̀ olùrà?", options: ["Kí ó wà ní gbígbẹ, ní dídì pa, ní ibòji", "Kí ó wà ní dídì sínú yìnyín", "Kí ó wà ní gbangba nínú afẹ́fẹ́", "Kí ó wà lẹ́gbẹ̀ẹ́ kẹ́ẹ̀gì epo"], answer: 0, why: "Ọjà gbígbẹ ń bàjẹ́ nígbà tí ó bá rin, tí ó gbóná jù tàbí tí ó súnmọ́ kẹ́míkà, kì í ṣe nítorí pé kò tutù." }
          ]
        },
        {
          title: "Títà tààrà: ṣọ́ọ̀bù, ilé-ìwé, ilé ìtura àti orí ayélujára",
          objectives: ["O5"],
          minutes: 6,
          goal: "Múra ọ̀rọ̀ ìpolówó àti àdéhùn tí a kọ sílẹ̀ láti ta ọjà rẹ tààrà fún olùrà kan.",
          text: [
            "Kì í ṣe gbogbo alárinà ló burú: àwọn oníṣòwò kan ń sanwó tó tọ́, wọ́n sì ń gbé irè oko tí o kò lè gbé. Ṣùgbọ́n ṣọ́ àwọn àmì ìkìlọ̀ ìrẹ́jẹ: òṣùwọ̀n tí wọ́n ti ṣe màgòmágó sí, iye owó tí wọ́n yí padà lẹ́yìn ìfijíṣẹ́, ìsanwó tí ó ń pẹ́ fún oṣù púpọ̀ tàbí tí kò dé rárá, àti 'rà báyìí, sanwó lẹ́yìn' láti ọ̀dọ̀ àjèjì tí wọ́n wá pòórá. Títà tààrà lè fún ọ ní iye tó dára jù àti oníbàárà tí ó dúró.",
            "Olùrà kọ̀ọ̀kan fẹ́ nǹkan ọ̀tọ̀. Ṣọ́ọ̀bù àdúgbò àti ṣọ́ọ̀bù ńlá (supermarket) fẹ́ àmì ọjà, ìpèsè tí ó dúró, wọ́n sì máa ń gba ọjà nígbà míì lórí consignment (wọ́n á sanwó lẹ́yìn tí ọjà bá tà nìkan), èyí tí ó jẹ́ ewu. Ilé-ìwé àti ilé ìwòsàn ń rà púpọ̀ lẹ́ẹ̀kan ní àkókò tí a ṣètò, wọ́n sì sábà máa ń nílò ìdíyelé (quote), ìwé ìbéèrè owó (invoice) àti ìforúkọsílẹ̀ nígbà míì. Ilé ìtura àti ilé oúnjẹ fẹ́ dídára kan náà ní gbogbo ìgbà. Olùrà orí ayélujára lórí WhatsApp, Facebook tàbí ọjà orí ayélujára fẹ́ fọ́tò tí ó ṣe kedere, iye owó àti ìfijíṣẹ́ kíákíá.",
            "Ọ̀rọ̀ ìpolówó tó dára kúrú: kí ni ọjà náà, ìdí tí ó fi dára (mọ́, ti àdúgbò, tútù), iye owó, ìwọ̀n ìdìpọ̀, iye tí o lè pèsè àti ìgbà mélòó, àti ìfijíṣẹ́. Lẹ́yìn náà ṣe àdéhùn ní kíkọ, kódà nínú ọ̀rọ̀ ìránṣẹ́ tó rọrùn: iye ọjà, iye owó, ọjọ́ ìfijíṣẹ́, ọjọ́ ìsanwó àti ọ̀nà (fún àpẹẹrẹ owó orí fóònù), àti ohun tí yóò ṣẹlẹ̀ tí ìdìpọ̀ kan bá bàjẹ́. Pa ẹ̀dà kan mọ́. Má ṣe fi PIN tàbí ọ̀rọ̀ aṣínà fún olùrà kankan láéláé. Fún àdéhùn ńlá tàbí èyí tí ó gùn, ní kí olùdámọ̀ràn tí o gbẹ́kẹ̀lé kọ́kọ́ kà á."
          ],
          steps: ["Yan olùrà kan: ṣọ́ọ̀bù, ilé-ìwé, ilé ìtura tàbí àwọn oníbàárà orí ayélujára.", "Kọ ọ̀rọ̀ ìpolówó kúkúrú: ọjà, ìdí tí ó fi dára, iye owó, ìwọ̀n ìdìpọ̀, ìpèsè, ìfijíṣẹ́.", "Mú àpẹẹrẹ ọjà àti àmì ọjà rẹ dání.", "Ṣe àdéhùn ní kíkọ: iye ọjà, iye owó, ìfijíṣẹ́, ọjọ́ àti ọ̀nà ìsanwó, ìdìpọ̀ tí ó bàjẹ́.", "Pa ẹ̀dà kan mọ́, kí o sì kọ gbogbo ìfijíṣẹ́ àti ìsanwó sílẹ̀."],
          words: [["Alárinà (middleman)", "oníṣòwò tí ó ń rà lọ́wọ́ àgbẹ̀, tí ó sì ń tà á fún àwọn míì."], ["Consignment", "ṣọ́ọ̀bù gba ọjà rẹ, ó sì máa san owó fún ọ lẹ́yìn tí wọ́n bá tà á nìkan."], ["Ọ̀rọ̀ ìpolówó (pitch)", "ìfilọ̀ kúkúrú, tí ó ṣe kedere, sí olùrà."], ["Invoice", "ìwé ìbéèrè owó tí ó ní kí olùrà sanwó fún ọjà tí a ti fi jíṣẹ́."]],
          slides: [
            { title: "Ṣọ́ra fún ìrẹ́jẹ", bullets: ["Òṣùwọ̀n màgòmágó; iye owó yí padà lẹ́yìn ìfijíṣẹ́", "Ìsanwó tí ó pẹ́ fún oṣù tàbí tí kò dé", "Àjèjì tí ó ní 'màá sanwó lẹ́yìn' tí wọ́n wá pòórá"] },
            { title: "Ohun tí olùrà kọ̀ọ̀kan fẹ́", bullets: ["Ṣọ́ọ̀bù: àmì ọjà, ìpèsè tí ó dúró; ewu consignment", "Ilé-ìwé: púpọ̀ lẹ́ẹ̀kan, àkókò tí a ṣètò, quote àti invoice", "Ilé ìtura: dídára kan náà nígbà gbogbo; orí ayélujára: fọ́tò, ìfijíṣẹ́ kíákíá"] },
            { title: "Ọ̀rọ̀ ìpolówó kúkúrú", bullets: ["Kí ni ọjà náà àti ìdí tí ó fi dára", "Iye owó, ìwọ̀n ìdìpọ̀, mélòó àti ìgbà mélòó", "Ìfijíṣẹ́; mú àpẹẹrẹ ọjà àti àmì ọjà dání"] },
            { title: "Kọ àdéhùn sílẹ̀", bullets: ["Iye ọjà, iye owó, ọjọ́ ìfijíṣẹ́", "Ọjọ́ àti ọ̀nà ìsanwó; ìdìpọ̀ tí ó bàjẹ́", "Pa ẹ̀dà mọ́; má fi PIN fún ẹnikẹ́ni láéláé"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ọjà ojú-ewé kan rẹ. Fi ọjà àti olùrà, ìwé ìṣírò iye owó àti iye títà rẹ, àkọsílẹ̀ ìmọ́tótó àti ìtọ́jú òtútù rẹ, àkọ́pẹrẹ àmì ọjà àti àjọ orílẹ̀-èdè rẹ, àti ọ̀rọ̀ ìpolówó kúkúrú pẹ̀lú àdéhùn tí o máa ní kí olùrà gbà ní kíkọ sínú rẹ̀.",
          youCanNow: "polówó ọjà rẹ fún olùrà tààrà, kí o sì ṣe àdéhùn tí ó ṣe kedere ní kíkọ lórí iye owó, ìfijíṣẹ́ àti ìsanwó.",
          quickCheck: [
            { objective: "O5", q: "Ṣọ́ọ̀bù kan fẹ́ gba ẹ̀pà lílọ̀ rẹ lórí consignment. Kí ni ewu rẹ̀?", options: ["O gbọ́dọ̀ kọ́kọ́ san owó fún ṣọ́ọ̀bù náà", "Wọ́n á sanwó fún ọ lẹ́yìn tí ó bá tà nìkan, ìdìpọ̀ tí kò tà sì lè padà wá", "Ṣọ́ọ̀bù náà máa yí àmì ọjà rẹ padà", "Kò sí ewu rárá"], answer: 1, why: "Lórí consignment, ìwọ ló ń ru ewu títí ọjà yóò fi tà, nítorí náà ṣàdéhùn bí yóò ṣe pẹ́ tó àti ohun tí yóò ṣẹlẹ̀ sí ìdìpọ̀ tí kò tà." },
            { objective: "O5", q: "Ilé ìtura kan gbà láti máa ra yogọ́ọ̀tì lọ́sọ̀ọ̀sẹ̀. Kí ló yẹ kí ẹ ṣàdéhùn rẹ̀ ní kíkọ?", options: ["Orúkọ ilé ìtura nìkan", "PIN owó orí fóònù rẹ", "Kò sí nǹkan; bíbọ ọwọ́ ti tó", "Iye ọjà, iye owó, ọjọ́ ìfijíṣẹ́, ọjọ́ ìsanwó àti ohun tí yóò ṣẹlẹ̀ sí ìdìpọ̀ tí ó bàjẹ́"], answer: 3, why: "Àdéhùn tí a kọ sílẹ̀ lórí iye ọjà, iye owó, ìfijíṣẹ́ àti ìsanwó ń dènà èdè-àìyédè lọ́jọ́ iwájú." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìdìpọ̀, àmì ọjà àti títà tààrà",
        questions: [
          { objective: "O4", q: "Àjọ wo ló ń fún ọjà ní Àmì Standardization ní Kenya?", options: ["NAFDAC", "Ghana FDA", "KEBS", "CODINORM"], answer: 2, why: "KEBS, Kenya Bureau of Standards, ló ń fúnni ní Àmì Standardization." },
          { objective: "O4", q: "Ìgbà wo ló yẹ kí o tẹ àmì ọjà púpọ̀ jáde?", options: ["Lẹ́yìn tí o bá ti ṣàyẹ̀wò ohun tí àjọ orílẹ̀-èdè rẹ ń béèrè", "Kí o tó yan ọjà náà", "Kí o tó bá olùrà kankan sọ̀rọ̀", "Lẹ́yìn tí olùrà bá ráhùn nìkan"], answer: 0, why: "Òfin àmì ọjà yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, ó sì ń yí padà, nítorí náà kọ́kọ́ ṣàyẹ̀wò kí o má bàa fi àmì ṣòfò." },
          { objective: "O3", q: "Ọjà wo ló nílò ìtọ́jú òtútù?", options: ["Ìyẹ̀fun ẹ̀gẹ́", "Màngòrò gbígbẹ", "Ẹ̀pà lílọ̀ nínú ìgò tí a dì pa", "Yogọ́ọ̀tì"], answer: 3, why: "Yogọ́ọ̀tì ń bàjẹ́ kíákíá, ó sì gbọ́dọ̀ wà ní òtútù láti ìgbà tí a ṣe é títí dé ọ̀dọ̀ olùrà." },
          { objective: "O5", q: "Èwo ni àmì ìkìlọ̀ alárinà tí ń rẹ́ni jẹ?", options: ["Sísanwó ní ọjọ́ tí a ṣàdéhùn", "Yíyí iye owó padà lẹ́yìn tí o bá ti fi ọjà jíṣẹ́", "Wíwọn ọjà níwájú rẹ", "Fífún ọ ní ìwé ẹ̀rí ìsanwó"], answer: 1, why: "Yíyí iye owó padà lẹ́yìn ìfijíṣẹ́ ń gbé àdánù wá sórí rẹ, ó sì ń ba ìgbẹ́kẹ̀lé jẹ́." },
          { objective: "O5", q: "Kí ló yẹ kí ó wà nínú ọ̀rọ̀ ìpolówó kúkúrú sí olùse oúnjẹ ilé-ìwé?", options: ["Ìtàn ayé rẹ", "Iye owó aládùúgbò rẹ", "Ọjà, iye owó, ìwọ̀n ìdìpọ̀, ìpèsè àti ìfijíṣẹ́", "PIN báńkì rẹ"], answer: 2, why: "Olùrà nílò láti mọ ohun tí o ń tà, ní iye wo, mélòó àti bí ó ṣe máa dé." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Àfikún Iye, Ìdìpọ̀ àti Ìtajà Ohun Ọ̀gbìn",
    questions: [
      { objective: "O1", q: "Kí ni àfikún iye túmọ̀ sí?", options: ["Yíyí irè oko padà tàbí dídì í kí olùrà lè san owó púpọ̀ sí i", "Gbígbin irè oko tuntun", "Títà ní ẹnu oko", "Yíyá owó fún irúgbìn"], answer: 0, why: "Sísá a gbẹ, lílọ̀, ṣíṣe é di ọjà tàbí dídì í dáadáa lè mú iye tó ga jù wá." },
      { objective: "O1", q: "Kí ló yẹ kí ó kọ́kọ́ tọ́ ọ sọ́nà nínú yíyan ọjà?", options: ["Ẹ̀rọ tí ó wọ́n jù lọ tí o lè rí", "Ohun tí ó máa rẹwà lórí àmì ọjà", "Ohun tí àwọn olùrà nítòsí rẹ ń rà ní tòótọ́", "Ohun tí ó gbajúmọ̀ lórí tẹlifíṣọ̀n"], answer: 2, why: "Ọjà tí ó ní olùrà gidi kò léwu tó èyí tí a ṣe pẹ̀lú ìrètí lásán." },
      { objective: "O1", q: "Nǹkan mẹ́rin wo ló yẹ kí o fi fún àṣàyàn ọjà kọ̀ọ̀kan ní máàkì?", options: ["Àwọ̀, adùn, òórùn, ìtóbi", "Ìbéèrè ọjà, ohun èlò àkọ́kọ́, ẹ̀rọ àti ọgbọ́n, òfin", "Iye owó, brand, logo, ọ̀rọ̀ àmì", "Òjò, oòrùn, afẹ́fẹ́, ilẹ̀"], answer: 1, why: "Àwọn mẹ́rin yìí ń fi hàn bóyá o lè ṣe é, tà á, kí o sì ṣe bẹ́ẹ̀ lọ́nà òfin." },
      { objective: "O1", q: "Igi màngòrò rẹ ń so fún oṣù méjì lọ́dún. Kí ni èyí túmọ̀ sí fún màngòrò gbígbẹ?", options: ["O kò lè ṣe màngòrò gbígbẹ", "O gbọ́dọ̀ ta gbogbo rẹ̀ ní tútù", "Iye owó kò ṣe pàtàkì", "Ṣètò ohun èlò àkọ́kọ́: rà lọ́wọ́ aládùúgbò tàbí ṣe tó láti tà jálẹ̀ ọdún"], answer: 3, why: "Ohun èlò àkọ́kọ́ tí ó jẹ́ ti àsìkò ń nípa lórí bí o ṣe lè pèsè fún olùrà pẹ́ tó." },
      { objective: "O2", q: "Iye owó wo ló yẹ kí ó wà nínú ìwé ìṣírò iye owó rẹ?", options: ["Ohun èlò àkọ́kọ́ nìkan", "Àkókò iṣẹ́ ọwọ́ tìrẹ", "Owó ọkọ̀ olùrà padà sílé", "Owó ilé-ìwé ọmọ aládùúgbò rẹ"], answer: 1, why: "Iṣẹ́ ọwọ́ tìrẹ jẹ́ iye owó gidi; tí o bá fi sílẹ̀, kò ní hàn bóyá ọjà náà ń mú èrè wá." },
      { objective: "O2", q: "Ìpele gaàrí kan ná NGN 60,000, o sì lè ta àpò 120. Kí ni iye owó àpò kan?", options: ["NGN 500", "NGN 200", "NGN 1,200", "NGN 7,200"], answer: 0, why: "60,000 tí a pín sí àpò 120 jẹ́ NGN 500 fún àpò kan." },
      { objective: "O2", q: "Báwo ni o ṣe máa dá iye títà rẹ?", options: ["Ṣe ẹ̀dà iye tí ó kéré jù lọ ní ọjà", "Gba ohun tí olùrà àkọ́kọ́ bá fi lọ̀ ọ́", "Iye owó ìdìpọ̀ kan pẹ̀lú èrè, lẹ́yìn náà ṣàyẹ̀wò iye ní ṣọ́ọ̀bù", "Tà á ní iye kan náà pẹ̀lú irè oko tútù"], answer: 2, why: "Iye títà gbọ́dọ̀ bo gbogbo iye owó pẹ̀lú èrè, kí ó sì tún bọ́gbọ́n mu lójú àwọn olùrà." },
      { objective: "O2", q: "Iye títà rẹ ga ju ti àwọn ọjà tí ó jọ ọ́ ní ṣọ́ọ̀bù lọ púpọ̀. Kí ni ìgbésẹ̀ tó dára tí ó kàn?", options: ["Jáwọ́ lẹ́sẹ̀kẹsẹ̀", "Gbé iye náà sókè sí i", "Fi iye owó pamọ́", "Wá ọ̀nà tí kò wọ́n, ìdìpọ̀ tí ó kéré tàbí olùrà tí ó ń sanwó fún dídára"], answer: 3, why: "Yíyí iye owó ṣíṣe, ìwọ̀n ìdìpọ̀ tàbí olùrà padà lè jẹ́ kí ọjà náà lè bá àwọn míì díje." },
      { objective: "O3", q: "Èwo ló jẹ́ ara àkọsílẹ̀ ìmọ́tótó?", options: ["Fífi ọṣẹ fọ ọwọ́ kí a tó bẹ̀rẹ̀ iṣẹ́", "Jíjẹ́ kí ẹranko wọ ibi iṣẹ́", "Pípa ohun èlò àkọ́kọ́ àti ọjà tí a parí mọ́ pọ̀", "Omi èyíkéyìí tí o bá rí"], answer: 0, why: "Fífi ọṣẹ fọ ọwọ́ ń dá kòkòrò àrùn dúró kí wọ́n má wọ inú oúnjẹ." },
      { objective: "O3", q: "Kí ló dé tí o kò fi gbọ́dọ̀ lo ẹ̀pà tí ó hu ẹ̀fun fún ẹ̀pà lílọ̀ láéláé?", options: ["Wọ́n wúwo jù", "Wọ́n lè ní aflatoxin, èyí tí sísè kò lè yọ kúrò", "Wọ́n máa ń sọ ìgò di ìdọ̀tí", "Àwọn olùrà kò fẹ́ràn àwọ̀ wọn"], answer: 1, why: "Aflatoxin jẹ́ májèlé tí ó farapamọ́, tí yíyan kò lè pa run." },
      { objective: "O3", q: "A fi yogọ́ọ̀tì jíṣẹ́ nínú àpótí ìtutù pẹ̀lú àpò yìnyín ní àárọ̀ kùtù. Èyí jẹ́ àpẹẹrẹ:", options: ["Brand", "Consignment", "Ìtọ́jú òtútù (cold chain)", "Ìforúkọsílẹ̀"], answer: 2, why: "Pípa ọjà tí ń bàjẹ́ kíákíá mọ́ ní òtútù ní gbogbo ìgbésẹ̀ ni ìtọ́jú òtútù." },
      { objective: "O3", q: "Báwo ló ṣe yẹ kí ìyẹ̀fun ẹ̀gẹ́ rìn dé ọ̀dọ̀ olùrà?", options: ["Nínú àpò tí a kò dì nínú òjò", "Lẹ́gbẹ̀ẹ́ epo àti kẹ́míkà", "Ní dídì sínú yìnyín", "Ní gbígbẹ, ní dídì pa, ní ibòji, ní jíjìnnà sí kòkòrò"], answer: 3, why: "Ọjà gbígbẹ ń bàjẹ́ nígbà tí ó bá rin tàbí tí nǹkan bá bà á jẹ́, nítorí náà ó gbọ́dọ̀ gbẹ kí ó sì wà ní ààbò." },
      { objective: "O4", q: "Nǹkan wo ló sábà máa ń wà lórí àmì oúnjẹ?", options: ["Àwọn èròjà àti ìwọ̀n àpapọ̀", "PIN àgbẹ̀ náà", "Orúkọ olùrà", "Iye owó ajílẹ̀"], answer: 0, why: "Àwọn èròjà àti ìwọ̀n àpapọ̀ ń sọ fún olùrà ohun tí ó wà nínú rẹ̀ àti iye rẹ̀." },
      { objective: "O4", q: "Ní Nàìjíríà, àjọ wo ló ń forúkọ oúnjẹ tí a dì, tí a ṣe ní orílẹ̀-èdè, sílẹ̀?", options: ["KEBS", "Ghana FDA", "CODINORM", "NAFDAC"], answer: 3, why: "NAFDAC ń forúkọ oúnjẹ tí a ṣe ní Nàìjíríà sílẹ̀, títí kan ti olùṣe kékeré." },
      { objective: "O4", q: "Kí ni brand?", options: ["Irú ìgò kan", "Orúkọ, logo àti ìlérí tí àwọn olùrà dá mọ̀", "Ìwé àṣẹ ìjọba", "Nọ́mbà ìpele"], answer: 1, why: "Brand ń ran àwọn olùrà lọ́wọ́ láti dá ọjà rẹ mọ̀ kí wọ́n sì gbẹ́kẹ̀lé e." },
      { objective: "O4", q: "Òfin ìforúkọsílẹ̀ fún ọjà rẹ kò ṣe kedere. Kí ni o máa ṣe?", options: ["Tà á bẹ́ẹ̀ kí o sì dúró", "Béèrè èrò oníṣòwò kan", "Kàn sí àjọ oúnjẹ tàbí àjọ ìlànà orílẹ̀-èdè rẹ kí o sì ṣàyẹ̀wò òfin lọ́wọ́lọ́wọ́ rẹ̀", "Ṣe ẹ̀dà nọ́mbà ìforúkọsílẹ̀ brand míì"], answer: 2, why: "Àjọ orílẹ̀-èdè nìkan ló lè sọ ohun tí ọjà rẹ nílò; òfin àti owó ń yí padà." },
      { objective: "O5", q: "Èwo ni ìdí tó dára láti ta tààrà fún ilé-ìwé?", options: ["Ìbéèrè púpọ̀ lẹ́ẹ̀kan tí ó dúró ní àkókò tí a ṣètò", "Kò sí ìwé kankan láéláé", "Ilé-ìwé kì í sanwó pẹ́ láéláé", "Kò sí ìdí fún dídára"], answer: 0, why: "Ilé-ìwé sábà máa ń rà déédéé ní ọ̀pọ̀, ṣùgbọ́n wọ́n nílò quote, invoice àti dídára tí ó dúró." },
      { objective: "O5", q: "Kí ni ilé ìtura sábà máa ń bìkítà nípa rẹ̀ jù?", options: ["Àpẹẹrẹ ọ̀fẹ́ ní ọ̀sẹ̀ kọ̀ọ̀kan", "Àwọ̀ aṣọ rẹ", "Ìtóbi oko rẹ", "Dídára kan náà ní gbogbo ìgbà"], answer: 3, why: "Ilé ìtura ń ṣe ìránṣẹ́ fún àlejò lójoojúmọ́, wọ́n sì nílò dídára àti ìpèsè tí ó dúró." },
      { objective: "O5", q: "O ń ta màngòrò gbígbẹ lórí WhatsApp. Kí ló ń ran àwọn olùrà orí ayélujára lọ́wọ́?", options: ["Kíkọ̀ láti fi iye owó hàn", "Fọ́tò tí ó ṣe kedere, iye owó àti ìfijíṣẹ́ kíákíá", "Bíbéèrè PIN báńkì wọn", "Ọ̀rọ̀ ohùn (voice note) gígùn"], answer: 1, why: "Olùrà orí ayélujára ń pinnu láti inú fọ́tò àti iye owó tí ó ṣe kedere, wọ́n sì ń retí ìfijíṣẹ́ kíákíá." },
      { objective: "O5", q: "Olùrà kan gbà lórí fóònù láti máa ra ìgò 50 lọ́sọ̀ọ̀sẹ̀. Kí ni ìgbésẹ̀ tó dára jù tí ó kàn?", options: ["Fi jíṣẹ́ kí o sì retí pé wọ́n á sanwó", "Fi PIN owó orí fóònù rẹ ránṣẹ́ sí wọn", "Kọ iye ọjà, iye owó, ọjọ́ ìfijíṣẹ́ àti ọjọ́ ìsanwó sínú ọ̀rọ̀ ìránṣẹ́ kí o sì pa ẹ̀dà kan mọ́", "Dúró kí wọ́n dá àdéhùn lẹ́yìn"], answer: 2, why: "Àdéhùn tí a kọ sílẹ̀, kódà nínú ọ̀rọ̀ ìránṣẹ́, ń dáàbò bo ẹ̀gbẹ́ méjèèjì tí èdè-àìyédè bá wáyé." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò ọjà ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ọjà àti olùrà", objective: "O1", notYet: "A dárúkọ ọjà kan láìsí olùrà, tàbí a kò fi àṣàyàn náà wé òmíràn.", meets: "Ọjà kan àti olùrà kan tí a dárúkọ, tí a yàn lẹ́yìn fífi àṣàyàn méjì wé ara wọn lórí ìbéèrè ọjà, ohun èlò àkọ́kọ́, ẹ̀rọ àti òfin.", exceeds: "Ó tún fi hàn bí a ṣe máa rí ohun èlò àkọ́kọ́ jálẹ̀ ọdún, fún àpẹẹrẹ láti ọ̀dọ̀ aládùúgbò tàbí ẹgbẹ́." },
      { name: "Ìwé ìṣírò iye owó àti iye títà", objective: "O2", notYet: "Ohun èlò àkọ́kọ́ nìkan ni a kà, tàbí kò sí iye owó ìdìpọ̀ kan.", meets: "Gbogbo iye owó ìpele kan, pẹ̀lú iṣẹ́ ọwọ́ àti àdánù, fún wa ní iye owó ìdìpọ̀ kan àti iye títà pẹ̀lú èrè.", exceeds: "A fi iye títà wé iye ní ṣọ́ọ̀bù, ètò náà sì fi ohun tí a máa yí padà hàn tí ó bá ga jù." },
      { name: "Ìmọ́tótó àti ìtọ́jú òtútù", objective: "O3", notYet: "Kò sí ìgbésẹ̀ tí a kọ sílẹ̀, tàbí àwọn ewu pàtàkì bí fífọ ọwọ́, ẹ̀fun tàbí pípa á mọ́ ní òtútù kò sí níbẹ̀.", meets: "Àkọsílẹ̀ kan bo omi, ọwọ́, ojú ibi iṣẹ́, ohun èlò àkọ́kọ́, ìdìpọ̀, nọ́mbà ìpele àti ìrìn àjò láìléwu.", exceeds: "Ìgbésẹ̀ kọ̀ọ̀kan dárúkọ ewu àti òfin, ẹlòmíràn sì lè tẹ̀lé e láìsí ìrànlọ́wọ́." },
      { name: "Àmì ọjà àti ìforúkọsílẹ̀", objective: "O4", notYet: "Àmì ọjà kò ní àwọn èròjà, ìwọ̀n àpapọ̀, ọ̀nà ìkànsí tàbí àwọn ọjọ́, tàbí a kò dárúkọ àjọ orílẹ̀-èdè kankan.", meets: "Àmì ọjà fi orúkọ, èròjà, ìwọ̀n àpapọ̀, olùṣe àti ọ̀nà ìkànsí, nọ́mbà ìpele, àwọn ọjọ́ àti bí a ṣe ń pa á mọ́ hàn, ó sì dárúkọ àjọ tí a máa bá ṣàyẹ̀wò.", exceeds: "Akẹ́kọ̀ọ́ ti kàn sí àjọ náà, ó sì ti kọ ohun tí ó ń béèrè àti iye tí ó ń ná sílẹ̀." },
      { name: "Ọ̀rọ̀ ìpolówó àti àdéhùn", objective: "O5", notYet: "Kò sí ọ̀rọ̀ ìpolówó, tàbí kò sí àdéhùn tí a kọ sílẹ̀ fún iye owó, ìfijíṣẹ́ àti ìsanwó.", meets: "Ọ̀rọ̀ ìpolówó kúkúrú pẹ̀lú àdéhùn tí a kọ sílẹ̀: iye ọjà, iye owó, ọjọ́ ìfijíṣẹ́, ọjọ́ àti ọ̀nà ìsanwó, ìdìpọ̀ tí ó bàjẹ́.", exceeds: "A sọ ọ̀rọ̀ ìpolówó náà fún olùrà gidi kan, akẹ́kọ̀ọ́ sì kọ ìdáhùn rẹ̀ sílẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ta ó kéré tán ìpele kan ọjà àfikún iye láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé iye tí wọ́n rí fún kílò irè oko kan ga ju títà á ní tútù lọ (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n kàn sí tàbí forúkọ sílẹ̀ pẹ̀lú àjọ oúnjẹ tàbí àjọ ìlànà orílẹ̀-èdè wọn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àdánù wọn ní àsìkò ìkórè dín kù nítorí pé wọ́n sọ irè oko di ọjà dípò títà á ní owó pọ́ọ́kú"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù (smartphone ń ṣèrànwọ́) àti ẹ̀rọ ìṣírò",
      "Ìwé àti gègé fún ìwé ìṣírò iye owó, àkọsílẹ̀ ìmọ́tótó àti àmì ọjà",
      "Kò pọn dandan: irinṣẹ́ ìyàwòrán ọ̀fẹ́ bí Canva fún àmì ọjà",
      "Àpẹẹrẹ irè oko tútù rẹ àti ọjà kan tí ó jọ ọ́ láti ṣọ́ọ̀bù àdúgbò láti fi wé ara wọn",
      "Nǹkan bí ìṣẹ́jú 90 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti bẹ àwọn olùrà wò"
    ],
    facilitatorNotes: [
      "Pín àwọn akẹ́kọ̀ọ́ sí ẹgbẹ́ gẹ́gẹ́ bí ọjà wọn (fún àpẹẹrẹ màngòrò gbígbẹ, ìyẹ̀fun ẹ̀gẹ́, ẹ̀pà lílọ̀, yogọ́ọ̀tì) kí wọ́n lè pín ìwádìí olùrà àti iye owó.",
      "Ṣe ẹ̀kọ́ ìṣírò iye owó pẹ̀lú ìpele gidi tí ẹgbẹ́ náà ti ṣe, kí o sì jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣàyẹ̀wò ìṣírò ara wọn.",
      "Pe òṣìṣẹ́ kan láti àjọ oúnjẹ tàbí àjọ ìlànà orílẹ̀-èdè (KEBS, NAFDAC, Ghana FDA, CODINORM tàbí àjọ orílẹ̀-èdè rẹ) láti ṣàlàyé àwọn ìgbésẹ̀ ìforúkọsílẹ̀ lọ́wọ́lọ́wọ́; má ṣe sọ iye owó láti orí.",
      "Ṣe ìrìnkiri ìmọ́tótó ní ibi ṣíṣe ọjà gidi kan, kí o sì tẹnu mọ́ ọn pé ọjà wàrà nílò ọ̀nà tí a ti dán wò àti ìtọ́jú òtútù.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan; ṣe eré ìpolówó pẹ̀lú akẹ́kọ̀ọ́ kan gẹ́gẹ́ bí olùrà."
    ]
  }
};
