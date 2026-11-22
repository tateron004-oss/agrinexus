"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-irrigation-water.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_WATERNEEDS = { name: "FAO: Ìwé ìdálẹ́kọ̀ọ́ No. 3 lórí ìṣàkóso omi ìbomirin: Iye omi tí irè oko nílò", url: "https://www.fao.org/4/s2022e/s2022e00.htm" };
const FAO_HARVEST = { name: "FAO: Ìwé ìtọ́sọ́nà lórí bí a ṣe ń kó omi òjò jọ fún irè oko (Water Harvesting)", url: "https://www.fao.org/4/u3160e/u3160e00.htm" };
const FAO_DRIP = { name: "FAO: Ìwé ọgbọ́n ìbomirin onífúnpá (pẹ̀lú àwọn ẹ̀rọ drip olówó pọ́ọ́kú fún ìdílé)", url: "https://www.fao.org/4/a1336e/a1336e.pdf" };
const FAO_SOLAR = { name: "FAO: Ìrètí rere fún ìbomirin tí ń lo agbára oòrùn", url: "https://www.fao.org/newsroom/detail/Positive-prospects-for-solar-powered-irrigation-systems/en" };
const FAO_SALINITY = { name: "FAO: Dídára omi fún iṣẹ́ àgbẹ̀ (iyọ̀ nínú ilẹ̀, fífọ iyọ̀ jáde àti ọ̀nà omi)", url: "https://www.fao.org/4/t0234e/t0234e03.htm" };
const WRA = { name: "Water Resources Authority, Kenya (ìwé àṣẹ lílo omi)", url: "https://wra.go.ke" };

module.exports = {
  id: "agri-irrigation-water-yo",
  lang: "yo",
  translationOf: "agri-irrigation-water",
  category: "Agriculture (Africa)",
  name: "Ìbomirin Oko àti Ìṣàkóso Omi",
  skills: "Mímọ ìgbà tí irè oko nílò omi, Kíkó omi òjò jọ, Pípa omi mọ́ láìléwu, Ṣíṣe ẹ̀rọ drip olówó pọ́ọ́kú, Ṣíṣètò ìbomirin láìsí omi tó pọ̀ jù tàbí iyọ̀ nínú ilẹ̀, Yíyan ẹ̀rọ fífa omi pẹ̀lú ti agbára oòrùn",
  outcome: "ṣètò ìbomirin fún oko kékeré: mọ ìgbà tí irè oko rẹ nílò omi jù, kó omi òjò jọ kí o sì pa á mọ́, ṣe ẹ̀rọ drip olówó pọ́ọ́kú kí o sì máa lò ó ní àkókò tí o ti ṣètò, dènà omi tó kún ilẹ̀ jù àti iyọ̀ tó ń kó jọ sínú ilẹ̀, kí o sì yan ẹ̀rọ fífa omi tó bá a mu.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn tí oko wọn ń dàgbà, àwọn òṣìṣẹ́ oko àti àwọn ọ̀dọ́ àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti káàkiri Áfíríkà, tí wọ́n fẹ́ máa gbin nǹkan nígbà ọ̀dá, gbin irè oko kejì ní ẹ̀rùn, tàbí lo omi tí wọ́n ní lọ́nà ọgbọ́n. Ó dá lórí àwọn ọ̀nà tí kò wọ́n tí o lè bẹ̀rẹ̀ lórí ilẹ̀ kékeré, bí ọgbà ilé tí a gbin tòmátì àti ewébẹ̀ kale sí, tàbí ibi tí a ti ń tọ́ irúgbìn kọfí kékeré.",
    "Orí 1 sọ̀rọ̀ nípa ibi tí omi ti ń wá: iye omi tí irè oko nílò àti ìgbà tí ó nílò rẹ̀, kíkó omi òjò jọ láti orí òrùlé àti láti inú oko, àti pípa á mọ́ láìléwu. Orí 2 sọ̀rọ̀ nípa fífi omi fún irè oko: ìbomirin drip olówó pọ́ọ́kú, ṣíṣètò ìbomirin láìsí omi tó pọ̀ jù tàbí iyọ̀, àti yíyan ẹ̀rọ fífa omi, pẹ̀lú èyí tí ń lo agbára oòrùn.",
    "Òfin omi àti ìwé àṣẹ yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, nítorí náà béèrè lọ́wọ́ àjọ tó ń bójú tó omi àti òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ (extension officer) kí o tó gbẹ́ kànga ẹ̀rọ (borehole), fa omi láti odò tàbí kọ́ adágún omi ńlá. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan lórí oko rẹ. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò ìbomirin ojú-ewé kan fún oko kékeré (tìrẹ, tàbí oko àpẹẹrẹ bí mítà onígun mẹ́rin 200 tòmátì nítòsí Nakuru, tàbí mítà onígun mẹ́rin 500 àlùbọ́sà àti ata nítòsí Kano): irè oko náà àti àwọn ìpele ìdàgbà tí ó nílò omi jù, ibi tí omi máa ti wá àti iye tí o lè pa mọ́, ẹ̀rọ drip tàbí ọ̀nà míì tí o máa lò, ètò ìbomirin ọ̀sẹ̀ kọ̀ọ̀kan pẹ̀lú bí o ṣe máa ṣàyẹ̀wò ilẹ̀, bí o ṣe máa dènà omi tó kún ilẹ̀ jù àti iyọ̀, àti ẹ̀rọ fífa omi tí o máa yàn àti ìdí rẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn tí oko wọn ń dàgbà, àwọn òṣìṣẹ́ oko àti àwọn ọ̀dọ́ àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti káàkiri Áfíríkà tí wọ́n fẹ́ máa gbin nǹkan nígbà ọ̀dá, gbin irè oko ẹ̀rùn, tàbí lo omi wọn lọ́nà ọgbọ́n lórí ilẹ̀ kékeré ti ewébẹ̀, àgbàdo tàbí irúgbìn kékeré.",
    startingPoint: "Òjò ni ọ̀pọ̀ nínú wọn gbẹ́kẹ̀ lé, wọ́n sì ń fi ọwọ́ bomi rin pẹ̀lú ìkòkò ìbomirin tàbí garawa nígbà tí wọ́n bá lè ṣe é. Díẹ̀ ló ń ṣàyẹ̀wò ọ̀rinrin ilẹ̀ níbi tí gbòǹgbò wà, tí ó mọ ìpele tí irè oko wọn nílò omi jù, tí ó ń kó omi òjò láti orí òrùlé tàbí láti inú oko, tí ó ń lo ẹ̀rọ drip, tàbí tí ó mọ bí a ṣe ń yan ìwọ̀n ẹ̀rọ fífa omi.",
    gap: "Ọ̀dá nígbà tí irè oko ń yọ òdòdó àti nígbà tí ó ń so èso ló ń dín ìkórè kù jù, omi tí a fi ṣòfò, omi ẹlẹ́gbin tàbí omi tí a kò ṣàkóso dáadáa sì ń mú àrùn, omi tó kún ilẹ̀ jù àti ilẹ̀ oníyọ̀ wá. Ṣíṣètò omi fún oko kékeré ń jẹ́ kí àgbẹ̀ kórè sí i, gbin nǹkan ní ẹ̀rùn, kí ó sì ná owó díẹ̀ lórí omi àti epo.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé ọ̀rọ̀ omi kọ̀ọ̀kan",
      "Ẹ̀rọ: fóònù lásán àti ìwé àkọsílẹ̀; ilẹ̀ kékeré láti fi ṣe àṣeṣe",
      "Owó: àwọn ọ̀nà tí kò wọ́n ni a kọ́kọ́ ń lò; akẹ́kọ̀ọ́ fúnra wọn ń fi iye owó àwọn olùtajà wéra",
      "Òfin omi àti ìwé àṣẹ yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn: béèrè lọ́wọ́ àjọ tó ń bójú tó omi kí o tó gbẹ́ ilẹ̀, dí odò tàbí fa omi",
      "Ààbò: a máa ń bo adágún omi àti táǹkì, a sì máa ń ṣe ọgbà yí wọn ká; omi mímu nílò ìmọ̀ràn ìtọ́jú láti ọ́fíìsì ìlera"
    ],
    prerequisites: "Kò sí. \"Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀\" ń ṣèrànwọ́ fún ìbòlẹ̀ (mulch) àti ọ̀nà tí omi ń gbà kúrò nínú ilẹ̀."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún irè oko pàtàkì rẹ", action: "dárúkọ àwọn ìpele ìdàgbà tí ó nílò omi jù, kí o sì fi ọwọ́ ṣàyẹ̀wò ọ̀rinrin ilẹ̀ níbi tí gbòǹgbò wà", standard: "kí o sì pinnu dáadáa bóyá kí o bomi rin tàbí kí o dúró" },
    { id: "O2", condition: "Fún òrùlé àti ilẹ̀ rẹ", action: "ṣírò iye omi òjò tí òrùlé kan lè kó jọ, kí o sì yan ọ̀nà kan nínú oko láti jẹ́ kí òjò dúró sórí ilẹ̀ rẹ", standard: "ní lílo nǹkan bí lítà 1 fún mítà onígun mẹ́rin kọ̀ọ̀kan fún mìlímítà òjò kọ̀ọ̀kan, kí o sì ṣètò fún èyí tó kéré sí i" },
    { id: "O3", condition: "Fún omi tí o kó jọ", action: "yan ibi ìpamọ́ omi kí o sì jẹ́ kí ó mọ́, kí ó wà ní bíbò, kí ó sì bá òfin mu", standard: "pẹ̀lú ibi ìpamọ́ náà ní bíbò tàbí ọgbà yí i ká, àti ìwé àṣẹ èyíkéyìí tí a ti ṣàyẹ̀wò" },
    { id: "O4", condition: "Fún oko tí ó tó nǹkan bí mítà onígun mẹ́rin 100 sí 500", action: "ṣe ẹ̀rọ drip tí ìwúwo omi ń tì, kí o sì máa tọ́jú rẹ̀", standard: "pẹ̀lú dọ́ọ̀mù tí ó ga ó kéré tán mítà 1, àsẹ́ tó mọ́, àti láìsí ihò ẹ̀kán tó dí" },
    { id: "O5", condition: "Jálẹ̀ àsìkò ọ̀gbìn kan", action: "ṣe ètò ìbomirin ọ̀sẹ̀ kọ̀ọ̀kan kí o sì tètè rí omi tó kún ilẹ̀ jù àti iyọ̀ tó ń kó jọ", standard: "ní ṣíṣàyẹ̀wò ilẹ̀ kí o tó bomi rin nígbàkúùgbà" },
    { id: "O6", condition: "Nígbà tí o bá gbọ́dọ̀ gbé omi sókè tàbí gbé e lọ sí ibòmíràn", action: "fi ẹ̀rọ fífa omi ẹlẹ́sẹ̀, ti epo àti ti agbára oòrùn wéra, kí o sì kọ ohun tí o máa béèrè lọ́wọ́ olùtajà sílẹ̀", standard: "ní sísọ iye omi tí o nílò lójúmọ́, bí ó ṣe ga tó àti bí ó ṣe jìnnà tó, àti fífa omi tí irè oko nílò nìkan" }
  ],
  chapters: [
    {
      name: "Orí 1: Wíwá omi àti pípa á mọ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Omi mélòó ni irè oko rẹ nílò, ìgbà wo sì ni?",
          minutes: 5,
          goal: "Dárúkọ àwọn ìpele ìdàgbà tí irè oko rẹ nílò omi jù, kí o sì fi ọwọ́ ṣàyẹ̀wò ọ̀rinrin ilẹ̀.",
          text: [
            "Ìwé ìdálẹ́kọ̀ọ́ FAO (Àjọ Oúnjẹ àti Iṣẹ́ Àgbẹ̀ ti Àjọ Àgbáyé) lórí iye omi ìbomirin ṣàlàyé pé iye omi tí irè oko nílò dá lórí nǹkan mẹ́ta: ojú-ọjọ́, irú irè oko, àti ìpele ìdàgbà rẹ̀. Ọjọ́ tí ó gbóná, tí oòrùn mú, tí ó gbẹ, tí afẹ́fẹ́ sì ń fẹ́ ń jẹ́ kí irè oko lo omi púpọ̀; ọjọ́ tí ó tutù, tí ìkùukùu bò, tí afẹ́fẹ́ kò sì fẹ́ ń jẹ́ kí ó lo díẹ̀. Irè oko gíga tí ewé rẹ̀ pọ̀ ń lo omi ju àwọn kékeré lọ.",
            "Ìpele ìdàgbà ló ṣe pàtàkì jù fún ètò. Irè oko nílò omi díẹ̀ nígbà tí ó kéré, ó nílò jù lọ nígbà tí ó ń yọ òdòdó àti nígbà tí ọkà tàbí èso ń wọ̀ ọ́, ó sì nílò díẹ̀ nígbà tí ó ń pọ́n. Ọ̀dá ń pa àgbàdo lára jù nígbà tí ó ń yọ òdòdó orí (tassel) àti irun (silk); tòmátì nígbà tí ó ń yọ òdòdó àti nígbà tí èso ń sọ; ẹ̀wà nígbà tí ó ń yọ òdòdó àti nígbà tí pàkó rẹ̀ ń kún. Ọ̀dá ní àwọn ìpele wọ̀nyí ló ń dín ìkórè kù jù.",
            "Ṣàyẹ̀wò ilẹ̀, kì í ṣe orí ilẹ̀ nìkan. Ki ìka tàbí igi kékeré bọ inú ilẹ̀ nítòsí gbòǹgbò, ní nǹkan bí cm 10 sí 15 ní ìsàlẹ̀, tàbí gbẹ́ ihò kékeré kí o sì fún ẹ̀kúnwọ́ ilẹ̀ kan. Tí ó bá lẹ̀ mọ́ra tí ó sì rin, dúró. Tí ó bá rún wómúwómú tí ó sì gbẹ níbi tí gbòǹgbò wà, àkókò ti tó láti bomi rin. Apá kan nínú òjò tó rọ̀ ń ṣàn lọ tàbí ń wọ ilẹ̀ jìn jù; apá tí irè oko lè lò ni a ń pè ní òjò tó wúlò (effective rainfall)."
          ],
          steps: ["Kọ irè oko rẹ àti iye ọjọ́ láti ìgbà gbígbìn dé ìkórè.", "Sàmì sí àwọn ìpele tí ó nílò omi jù (fún àpẹẹrẹ àgbàdo: òdòdó orí àti irun).", "Ní ọ̀sẹ̀ kọ̀ọ̀kan, ṣàyẹ̀wò ilẹ̀ níbi tí gbòǹgbò wà pẹ̀lú ìka, igi tàbí ihò.", "Kọ ojú-ọjọ́ sílẹ̀: ọjọ́ gbígbóná, afẹ́fẹ́ àti ọ̀gbẹlẹ̀ túmọ̀ sí lílo omi púpọ̀.", "Bomi rin kí ilẹ̀ níbi tí gbòǹgbò wà tó gbẹ, pàápàá ní àwọn ìpele tí ó nílò omi jù."],
          words: [["Iye omi tí irè oko nílò", "iye omi tí irè oko ń lò láti dàgbà dáadáa."], ["Ìpele ìdàgbà", "àkókò kan nínú ayé irè oko, bí ìgbà tí ó ṣẹ̀ṣẹ̀ hù, ìgbà tí ó ń yọ òdòdó tàbí ìgbà tí ó ń pọ́n."], ["Òjò tó wúlò (effective rainfall)", "apá òjò tí ó dúró sí ibi tí gbòǹgbò wà, tí irè oko sì lè lò."], ["Ibi tí gbòǹgbò wà (root zone)", "ìpele ilẹ̀ tí ọ̀pọ̀ jù lọ gbòǹgbò irè oko wà."]],
          slides: [
            { title: "Nǹkan mẹ́ta ló ń pinnu iye omi (FAO)", bullets: ["Ojú-ọjọ́: gbígbóná, oòrùn, ọ̀gbẹlẹ̀, afẹ́fẹ́ = omi púpọ̀", "Irú irè oko: gíga tí ewé pọ̀ = omi púpọ̀", "Ìpele ìdàgbà: jù lọ nígbà òdòdó àti nígbà tí èso/ọkà ń wọ̀ ọ́"] },
            { title: "Ìpele tí ó nílò omi jù", bullets: ["Àgbàdo: òdòdó orí (tassel) àti irun (silk)", "Tòmátì: òdòdó àti sísọ èso", "Ẹ̀wà: òdòdó àti kíkún pàkó"] },
            { title: "Ṣàyẹ̀wò ilẹ̀, kì í ṣe orí rẹ̀", bullets: ["Ìka tàbí igi, cm 10 sí 15 ní ìsàlẹ̀ nítòsí gbòǹgbò", "Ó lẹ̀ mọ́ra, ó sì rin: dúró", "Ó rún, ó sì gbẹ: àkókò ti tó láti bomi rin"] }
          ],
          sources: [FAO_WATERNEEDS],
          tryIt: "Fún irè oko kan tí o ń gbìn, kọ àwọn ọ̀sẹ̀ lẹ́yìn gbígbìn tí ó máa dé àwọn ìpele tí ó nílò omi jù. Lẹ́yìn náà ṣàyẹ̀wò ilẹ̀ rẹ níbi tí gbòǹgbò wà lónìí pẹ̀lú ìka, igi tàbí ihò kékeré, kí o sì kọ: ó rin tàbí ó gbẹ.",
          youCanNow: "sọ ìgbà tí irè oko rẹ nílò omi jù, kí o sì ṣàyẹ̀wò ọ̀rinrin ilẹ̀ níbi tí gbòǹgbò wà.",
          quickCheck: [
            { objective: "O1", q: "Ìgbà wo ni ẹ̀wà nílò omi jù?", options: ["Lẹ́yìn ìkórè gan-an", "Nígbà òdòdó àti nígbà tí pàkó ń kún", "Nígbà tí ó ṣì jẹ́ irúgbìn nìkan", "Nígbà tí pàkó ti gbẹ"], answer: 1, why: "Ọ̀dá ń pa ẹ̀wà lára jù nígbà òdòdó àti nígbà tí pàkó ń kún." },
            { objective: "O1", q: "O gbẹ́ ihò kékeré nítòsí gbòǹgbò. Ilẹ̀ náà rún, ó sì gbẹ níbẹ̀. Kí ni o máa ṣe?", options: ["Dúró fún ọ̀sẹ̀ kan sí i", "Bomi rin ewé nìkan", "Fi ajílẹ̀ sí i dípò rẹ̀", "Bomi rin irè oko náà báyìí"], answer: 3, why: "Tí ilẹ̀ bá rún tí ó sì gbẹ níbi tí gbòǹgbò wà, àkókò ti tó láti bomi rin." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkó omi òjò jọ láti orí òrùlé àti láti inú oko",
          minutes: 5,
          goal: "Ṣírò iye òjò tí òrùlé rẹ lè kó jọ, kí o sì yan ọ̀nà kan nínú oko láti jẹ́ kí òjò dúró sórí ilẹ̀ rẹ.",
          text: [
            "Kíkó omi jọ túmọ̀ sí gbígba òjò níbi tí ó ti rọ̀ tàbí tí ó ti ń ṣàn, kí a sì pa á mọ́ fún irè oko, ẹran ọ̀sìn tàbí ilé. Ìwé ìtọ́sọ́nà FAO lórí kíkó omi jọ ṣàpèjúwe ọ̀pọ̀ ọ̀nà inú oko tí a ń lò ní àwọn agbègbè gbígbẹ: kòtò gbígbìn (bí kòtò zai), bèbè ilẹ̀ onídajì òṣùpá, ebè tó tẹ̀lé ìtẹ̀ ilẹ̀ (contour ridges), àwọn ibi ìkómi kékeré onígun dáyámọ́ǹdì yí igi ká (negarim), àti bèbè òkúta.",
            "Kíkó omi láti orí òrùlé ni ìbẹ̀rẹ̀ tó rọrùn jù. Mìlímítà 1 òjò lórí mítà onígun mẹ́rin 1 òrùlé ń fún ọ ní nǹkan bí lítà 1 omi. Òrùlé tí ó tó mítà onígun mẹ́rin 50 ní ibi tí òjò mm 600 ń rọ̀ lọ́dún lè fún ọ ní tó lítà 30,000 lọ́dún, ṣùgbọ́n díẹ̀ máa ń sọnù nígbà gbogbo, nítorí náà ṣètò fún èyí tó kéré sí i. Fi gọ́tà (gutter) sí i, àti páìpù first-flush tí ó ń da omi ẹlẹ́gbin àkọ́kọ́ nù, àti táǹkì tí a bò.",
            "Omi tí ń ṣàn láti ojú ọ̀nà, ọ̀nà ẹsẹ̀ àti ilẹ̀ tó tẹ̀ lè ṣàn lọ sínú kòtò omi (water pan) tàbí adágún omi oko tí a tẹ́ nǹkan sí. Kòtò gbígbìn tí a fi compost tàbí ìgbẹ́ ẹran kún ń gba òjò sí ìdí gbòǹgbò àgbàdo, ọkà bàbà tàbí igi eléso kékeré. Bẹ̀rẹ̀ kékeré, kí o sì wo ibi tí omi ń ṣàn gbà lórí ilẹ̀ rẹ nígbà òjò ńlá tó kàn."
          ],
          steps: ["Wọn òrùlé rẹ: gígùn lọ́nà ìbú ní mítà.", "Wá iye òjò ọdún kan láti ọ̀dọ̀ àjọ ojú-ọjọ́ tàbí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀.", "Fi ìwọ̀n òrùlé lọ́nà iye òjò ní mm láti rí lítà, lẹ́yìn náà ṣètò fún èyí tó kéré sí i nítorí èyí tó ń sọnù.", "Fi gọ́tà, páìpù first-flush àti táǹkì tí a bò sí i.", "Yan ọ̀nà kan nínú oko (kòtò, bèbè tàbí ebè contour) fún ilẹ̀ kan."],
          words: [["Kíkó omi jọ", "gbígba omi òjò tàbí omi tí ń ṣàn kí a sì pa á mọ́ fún ìlò ọjọ́ iwájú."], ["Kíkó omi láti orí òrùlé", "gbígba òjò láti orí òrùlé gba inú gọ́tà lọ sínú táǹkì."], ["First flush", "páìpù tí ó ń da òjò àkọ́kọ́ tí ó dọ̀tí jù láti orí òrùlé nù."], ["Kòtò zai", "kòtò gbígbìn kékeré tí a fi ìgbẹ́ ẹran kún, tí ó ń gba òjò sí ìdí gbòǹgbò."]],
          slides: [
            { title: "Gba òjò níbi tí ó ti rọ̀", bullets: ["Kòtò gbígbìn (zai), bèbè onídajì òṣùpá", "Ebè contour, bèbè òkúta", "Ibi ìkómi negarim yí igi ká (FAO)"] },
            { title: "Ìṣirò òrùlé", bullets: ["Òjò mm 1 lórí m2 1 = nǹkan bí lítà 1", "Òrùlé m2 50 x mm 600 = tó lítà 30,000 lọ́dún", "Ṣètò fún èyí tó kéré: díẹ̀ máa ń sọnù nígbà gbogbo"] },
            { title: "Ṣe é sílẹ̀", bullets: ["Gọ́tà àti páìpù first-flush", "Táǹkì tí a bò", "Darí omi ojú ọ̀nà sínú kòtò omi tí a tẹ́ nǹkan sí"] }
          ],
          sources: [FAO_HARVEST],
          tryIt: "Wọn òrùlé ilé rẹ tàbí ti ilé ìkẹ́rùsí rẹ, kí o sì wá iye òjò ọdún kan. Ṣírò iye lítà tí ó lè kó jọ lọ́dún. Lo ẹ̀rọ ìṣirò fóònù rẹ, tàbí ní kí olùrànlọ́wọ́ AI lórí fóònù ṣàyẹ̀wò ìṣirò rẹ.",
          youCanNow: "ṣírò iye omi òjò tí o lè kó jọ, kí o sì yan ọ̀nà kan nínú oko láti jẹ́ kí òjò dúró sórí ilẹ̀ rẹ.",
          quickCheck: [
            { objective: "O2", q: "Èwo ni ọ̀nà inú oko tí ó ń jẹ́ kí òjò dúró sórí ilẹ̀ rẹ?", options: ["Kòtò gbígbìn tàbí ebè contour", "Sísun koríko", "Títúlẹ̀ lókè-nísàlẹ̀ ilẹ̀ tó tẹ̀", "Fífi ilẹ̀ sílẹ̀ láìbò"], answer: 0, why: "Kòtò gbígbìn, bèbè àti ebè contour ń gba òjò níbi tí ó ti rọ̀." },
            { objective: "O2", q: "Nígbà òjò ńlá tó kàn, omi ń sáré gba ojú ọ̀nà oko rẹ. Kí ni o lè ṣe pẹ̀lú rẹ̀?", options: ["Jẹ́ kí ó ṣàn lọ sínú odò", "Dí ọ̀nà náà pa", "Darí rẹ̀ sínú kòtò omi tàbí adágún omi oko tí a tẹ́ nǹkan sí", "Gbẹ́ ihò sí àárín ọ̀nà náà"], answer: 2, why: "Omi tí ń ṣàn láti ojú ọ̀nà lè ṣàn lọ sínú kòtò omi tàbí adágún tí a tẹ́ nǹkan sí fún ìlò ọjọ́ iwájú." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pípa omi mọ́ láìléwu",
          minutes: 4,
          goal: "Yan ibi ìpamọ́ omi kí o sì jẹ́ kí ó mọ́, kí ó wà ní bíbò, kí ó sì bá òfin mu.",
          text: [
            "Àwọn ibi ìpamọ́ tí ó wọ́pọ̀ ni táǹkì ọ̀rá (plastic) tàbí ti sìmẹ́ńtì àti irin (ferro-cement), táǹkì abẹ́lẹ̀, àti kòtò omi tàbí adágún omi oko. Adágún máa ń pàdánù omi púpọ̀ sínú ilẹ̀ àyàfi tí a bá tẹ́ nǹkan sí i (fún àpẹẹrẹ ọ̀rá dam liner), ó sì máa ń pàdánù púpọ̀ sí oòrùn àyàfi tí a bá ṣe ibòji fún un tàbí bò ó.",
            "Jẹ́ kí omi tí o pa mọ́ wà ní mímọ́ àti láìléwu. Bo táǹkì àti adágún láti dá ìdọ̀tí, ẹran àti àwọn ọmọdé dúró, àti láti dènà ẹ̀fọn láti máa yé ẹyin níbẹ̀. Ṣe ọgbà yí adágún ká. Fọ gọ́tà àti táǹkì kí òjò tó dé. Omi mímu nílò ìtọ́jú ju omi fún irè oko lọ; béèrè lọ́wọ́ ọ́fíìsì ìlera bí o ṣe lè tọ́jú rẹ̀.",
            "Lílo omi tó pọ̀ lè nílò ìwé àṣẹ. Ní Kenya, Water Resources Authority (WRA, àjọ ìjọba tó ń bójú tó omi) ló ń ṣàkóso lílo omi tí ó sì ń fúnni ní ìwé àṣẹ, fún àpẹẹrẹ fún kànga ẹ̀rọ àti fífa omi láti odò. Àwọn orílẹ̀-èdè míì ní àjọ omi tiwọn. Ṣàyẹ̀wò kí o tó gbẹ́ ilẹ̀, dí odò tàbí fa omi."
          ],
          steps: ["Pinnu ohun tí omi náà wà fún: irè oko, ẹran ọ̀sìn tàbí ilé.", "Yan ibi ìpamọ́: táǹkì, táǹkì abẹ́lẹ̀, tàbí adágún tí a tẹ́ nǹkan sí.", "Bò ó, kí o sì ṣe ọgbà yí adágún ká.", "Fọ gọ́tà àti táǹkì kí àsìkò òjò kọ̀ọ̀kan tó dé.", "Kí o tó gbẹ́ kànga ẹ̀rọ tàbí fa omi láti odò, béèrè lọ́wọ́ àjọ tó ń bójú tó omi."],
          words: [["Kòtò omi (water pan)", "adágún tí a gbẹ́ tí ó ń gba omi tí ń ṣàn."], ["Dam liner", "ọ̀rá líle tí ó ń dá adágún dúró kí omi má bàa jò sínú ilẹ̀."], ["Ìwé àṣẹ", "àṣẹ ìjọba láti lo omi tàbí láti gbà á."]],
          slides: [
            { title: "Ibi ìpamọ́", bullets: ["Táǹkì ọ̀rá tàbí ti ferro-cement", "Táǹkì abẹ́lẹ̀", "Kòtò omi àti adágún oko tí a tẹ́ nǹkan sí"] },
            { title: "Jẹ́ kí ó wà láìléwu", bullets: ["Bò ó: ìdọ̀tí, ẹran, ẹ̀fọn", "Ṣe ọgbà yí adágún ká; àwọn ọmọdé ń rì sínú adágún", "Fọ gọ́tà àti táǹkì kí òjò tó dé"] },
            { title: "Ṣàyẹ̀wò òfin", bullets: ["Kenya: Water Resources Authority (WRA)", "Àwọn orílẹ̀-èdè míì: àjọ omi orílẹ̀-èdè rẹ", "Béèrè kí o tó gbẹ́ ilẹ̀, dí odò tàbí fa omi"] }
          ],
          sources: [WRA],
          tryIt: "Kọ ibi ìpamọ́ tí ó bá oko rẹ àti owó rẹ mu, bí o ṣe máa bò ó àti bí o ṣe máa ṣe ọgbà yí i ká, àti orúkọ ọ́fíìsì ní orílẹ̀-èdè rẹ tí o máa béèrè lọ́wọ́ rẹ̀ kí o tó gbẹ́ ilẹ̀ tàbí fa omi.",
          youCanNow: "yan ibi ìpamọ́ omi, jẹ́ kí ó wà láìléwu, kí o sì mọ ìgbà tí o nílò ìwé àṣẹ.",
          quickCheck: [
            { objective: "O3", q: "Ibi ìpamọ́ wo ló máa ń pàdánù omi jù àyàfi tí a bá tẹ́ nǹkan sí i tí a sì bò ó?", options: ["Táǹkì ọ̀rá tí a bò", "Táǹkì ferro-cement", "Táǹkì abẹ́lẹ̀", "Adágún oko tí ó ṣí sílẹ̀, tí a kò tẹ́ nǹkan sí"], answer: 3, why: "Adágún máa ń pàdánù omi sínú ilẹ̀ àyàfi tí a bá tẹ́ nǹkan sí i, àti sí oòrùn àyàfi tí a bá ṣe ibòji tàbí bò ó." },
            { objective: "O3", q: "O fẹ́ lo díẹ̀ nínú omi òjò tí o pa mọ́ fún mímu. Kí ni o máa ṣe?", options: ["Mu ú tààrà láti inú adágún", "Béèrè lọ́wọ́ ọ́fíìsì ìlera bí o ṣe lè tọ́jú rẹ̀", "Fi ajílẹ̀ sí i láti fọ̀ ọ́ mọ́", "Lo omi first-flush"], answer: 1, why: "Omi mímu nílò ìtọ́jú ju omi fún irè oko lọ; béèrè lọ́wọ́ ọ́fíìsì ìlera bí o ṣe lè tọ́jú rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Wíwá omi àti pípa á mọ́",
        questions: [
          { objective: "O1", q: "Ìgbà wo ni ọ̀dá ń pa àgbàdo lára jù?", options: ["Nígbà tí ó ń yọ òdòdó orí (tassel) àti irun (silk)", "Lẹ́yìn ìkórè gan-an", "Kí a tó gbìn ín", "Nígbà tí ṣuku àgbàdo ti gbẹ"], answer: 0, why: "Àwọn ìpele òdòdó ló ṣe ẹlẹgẹ́ jù; ọ̀dá nígbà náà ló ń dín ìkórè kù jù." },
          { objective: "O1", q: "Báwo ni o ṣe máa mọ̀ bóyá irè oko nílò omi?", options: ["Wo orí ilẹ̀ nìkan", "Dúró títí ewé á fi kú", "Ṣàyẹ̀wò ọ̀rinrin níbi tí gbòǹgbò wà pẹ̀lú ìka, igi tàbí ihò kékeré", "Bomi rin ní wákàtí kọ̀ọ̀kan"], answer: 2, why: "Gbòǹgbò ń mọ ilẹ̀ tí ó wà nísàlẹ̀ orí ilẹ̀, nítorí náà ibẹ̀ ni kí o ti ṣàyẹ̀wò." },
          { objective: "O2", q: "Òrùlé kan tó mítà onígun mẹ́rin 40, ó sì ń gba òjò mm 500 lọ́dún. Nǹkan bí iye wo ni ó lè kó jọ jù lọ?", options: ["Lítà 200", "Lítà 2,000", "Lítà 540", "Lítà 20,000"], answer: 3, why: "40 x 500 = lítà 20,000; iye tí a máa kó jọ gan-an máa kéré díẹ̀ sí i." },
          { objective: "O2", q: "Kí ni páìpù first-flush ń ṣe?", options: ["Ó ń fa omi gòkè", "Ó ń da òjò àkọ́kọ́ tí ó dọ̀tí jù láti orí òrùlé nù", "Ó ń mú omi gbóná", "Ó ń wọn iye òjò"], answer: 1, why: "Ó ń dá eruku àti ìgbẹ́ ẹyẹ dúró kúrò nínú táǹkì." },
          { objective: "O3", q: "Kí ló dé tí a fi ń bo táǹkì omi tàbí adágún?", options: ["Láti dá ìdọ̀tí àti ẹran dúró, kí ẹ̀fọn má sì yé ẹyin síbẹ̀", "Láti mú omi gbóná sí i", "Láti mú un wúwo sí i", "Ìbòrí kò wúlò"], answer: 0, why: "Bíbò ó ń jẹ́ kí omi wà ní mímọ́ àti láìléwu." }
        ]
      }
    },
    {
      name: "Orí 2: Fífi omi fún irè oko",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ìbomirin drip olówó pọ́ọ́kú",
          minutes: 6,
          goal: "Ṣe ẹ̀rọ drip garawa tàbí dọ́ọ̀mù fún oko kékeré, kí o sì máa tọ́jú rẹ̀.",
          text: [
            "Ìbomirin drip ń fi omi sí ìdí ọ̀gbìn kọ̀ọ̀kan díẹ̀díẹ̀, gba inú páìpù tín-ín-rín tí ó ní ihò kékeré (emitter). Omi díẹ̀ ló ń sọnù sí oòrùn àti afẹ́fẹ́, ewé máa ń gbẹ, nítorí náà àrùn máa ń dín kù, èpò láàárín ìlà sì máa ń rí omi díẹ̀.",
            "Ìwé FAO lórí ìbomirin onífúnpá ṣàpèjúwe àwọn ẹ̀rọ drip olówó pọ́ọ́kú fún ìdílé, fún oko tí ó tó nǹkan bí mítà onígun mẹ́rin 100 sí 500: garawa tàbí dọ́ọ̀mù tí a gbé sókè ó kéré tán mítà 1 lókè ebè ń fi omi ránṣẹ́ sí àsẹ́ (filter), páìpù ńlá àti àwọn páìpù drip lẹ́gbẹ̀ẹ́ ìlà kọ̀ọ̀kan. Ìwúwo omi ló ń fúnni ní agbára, nítorí náà kò nílò ẹ̀rọ fífa omi. Àwọn olùtajà ohun èlò oko (agro-dealer) àti olùtajà ohun èlò ìbomirin ń ta àwọn ẹ̀rọ wọ̀nyí; fi iye owó wọn wéra, kí o sì béèrè fún àwọn ẹ̀yà ìpààrọ̀.",
            "Dídí ni ìṣòro pàtàkì. Lo omi mímọ́, jẹ́ kí àsẹ́ wà ní ààyè rẹ̀ kí o sì máa fọ̀ ọ́ léraléra, kí o sì máa ṣan ìparí àwọn páìpù drip déédéé. Fi ìbòlẹ̀ (mulch) bo ilẹ̀ lórí àwọn páìpù drip láti dín omi tí oòrùn ń fà kù sí i. Ṣàyẹ̀wò pé emitter kọ̀ọ̀kan ń kán omi; ọ̀gbìn tí ó gbẹ sábà máa ń túmọ̀ sí ihò tí ó dí."
          ],
          steps: ["Tẹ́ ebè dọ́gba kí o sì tẹ́ páìpù drip lẹ́gbẹ̀ẹ́ ìlà ọ̀gbìn kọ̀ọ̀kan.", "Gbé garawa tàbí dọ́ọ̀mù sórí àkàbà ó kéré tán mítà 1 lókè ebè.", "So dọ́ọ̀mù, ẹnu omi (tap), àsẹ́, páìpù ńlá àti páìpù drip pọ̀; dí ìparí àwọn páìpù.", "Bu omi mímọ́ kún un, ṣí ẹnu omi, kí o sì ṣàyẹ̀wò pé gbogbo emitter ń kán omi.", "Fi ìbòlẹ̀ bo orí àwọn páìpù.", "Fọ àsẹ́ kí o sì ṣan ìparí páìpù ní ọ̀sẹ̀ kan tàbí méjì."],
          words: [["Ìbomirin drip", "fífún ọ̀gbìn ní omi ní ẹ̀kán-ẹ̀kán ní ìdí gbòǹgbò gba inú páìpù tín-ín-rín."], ["Emitter", "ihò kékeré tàbí ohun tí ń kán omi jáde nítòsí ọ̀gbìn kọ̀ọ̀kan."], ["Àsẹ́ (filter)", "àwọ̀n tí ó ń dá ìdọ̀tí dúró kí ó má bàa dí àwọn emitter."], ["Tí ìwúwo omi ń tì (gravity-fed)", "omi tí gíga táǹkì ń tì, kì í ṣe ẹ̀rọ fífa omi."]],
          slides: [
            { title: "Ìdí tí a fi ń lo drip", bullets: ["Omi ń lọ sí ìdí gbòǹgbò", "Díẹ̀ ló ń sọnù sí oòrùn àti afẹ́fẹ́", "Ewé gbígbẹ, àrùn díẹ̀ àti èpò díẹ̀"] },
            { title: "Ẹ̀rọ drip ìdílé (FAO)", bullets: ["Fún oko tí ó tó nǹkan bí mítà onígun mẹ́rin 100 sí 500", "Garawa tàbí dọ́ọ̀mù ó kéré tán m 1 lókè ebè", "Àsẹ́, páìpù ńlá, páìpù drip lẹ́gbẹ̀ẹ́ ìlà"] },
            { title: "Jẹ́ kí ó máa ṣiṣẹ́", bullets: ["Omi mímọ́ àti àsẹ́ tó mọ́", "Máa ṣan ìparí páìpù déédéé", "Ṣàyẹ̀wò emitter kọ̀ọ̀kan; fi ìbòlẹ̀ bo àwọn páìpù"] }
          ],
          sources: [FAO_DRIP],
          tryIt: "Ya àwòrán ètò drip fún oko kékeré kan: ibi tí dọ́ọ̀mù máa wà (ó kéré tán m 1 ní gíga), àsẹ́, páìpù ńlá àti páìpù drip kọ̀ọ̀kan. Lẹ́yìn náà béèrè iye owó ẹ̀rọ fún ìwọ̀n yẹn lọ́wọ́ olùtajà méjì tàbí agro-dealer méjì, kí o sì kọ méjèèjì sílẹ̀.",
          youCanNow: "ṣe ẹ̀rọ drip olówó pọ́ọ́kú tí ìwúwo omi ń tì, kí o máa lò ó, kí o sì máa tọ́jú rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ni emitter lórí páìpù drip?", options: ["Táǹkì omi", "Ẹ̀rọ fífa omi", "Ihò kékeré tàbí ohun tí ń kán omi jáde ní ọ̀gbìn kọ̀ọ̀kan", "Àsẹ́"], answer: 2, why: "Emitter ni àwọn ihò kékeré tí ń kán omi sí ìdí ọ̀gbìn kọ̀ọ̀kan." },
            { objective: "O4", q: "Omi rẹ ń wá láti inú adágún ẹlẹ́rẹ̀. Báwo ni o ṣe máa dáàbò bo ẹ̀rọ drip rẹ?", options: ["Jẹ́ kí àsẹ́ wà ní ààyè rẹ̀, máa fọ̀ ọ́ léraléra, kí o sì máa ṣan ìparí páìpù", "Yọ àsẹ́ kúrò kí omi lè yára ṣàn", "Má ṣe ṣàyẹ̀wò àwọn emitter láéláé", "Lo ẹ̀rọ náà ní ọ̀sán gangan nìkan"], answer: 0, why: "Omi mímọ́, àsẹ́ tó mọ́ àti ṣíṣan páìpù déédéé ń dènà dídí, ìṣòro pàtàkì drip." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ètò ìbomirin: láìsí omi tó pọ̀ jù tàbí iyọ̀",
          minutes: 5,
          goal: "Ṣe ètò ìbomirin ọ̀sẹ̀ kọ̀ọ̀kan, kí o sì tètè rí omi tó kún ilẹ̀ jù àti iyọ̀ tó ń kó jọ.",
          text: [
            "Ètò ìbomirin ń dáhùn ìbéèrè méjì: ìgbà wo ni kí a bomi rin, omi mélòó sì ni. Bomi rin ní àárọ̀ kùtùkùtù tàbí ní ìrọ̀lẹ́, nígbà tí omi díẹ̀ ń sọnù sí oòrùn. Máa bomi rin léraléra nígbà ooru àti afẹ́fẹ́, àti ní àwọn ìpele tí irè oko nílò omi jù, kí o sì fi ìbomirin sílẹ̀ lẹ́yìn òjò tó dára. Máa ṣàyẹ̀wò ilẹ̀ níbi tí gbòǹgbò wà; ètò jẹ́ ìtọ́sọ́nà, ilẹ̀ ló ní ọ̀rọ̀ ìkẹyìn.",
            "Omi tó pọ̀ jù ń ṣe ìpalára bíi omi tí kò tó. Ilẹ̀ tí omi kún jù kò ní afẹ́fẹ́ fún gbòǹgbò: ọ̀gbìn máa pọ́n, ó sì máa rọ bó tilẹ̀ jẹ́ pé ilẹ̀ rin, gbòǹgbò sì máa jẹrà. Àwọn àmì rẹ̀ ni omi tí ó dúró lórí ilẹ̀, òórùn kíkan àti pípọ́n ewé. Dín omi kù, la ọ̀nà omi, kí o sì lo ebè gíga tàbí ebè ní ilẹ̀ amọ̀ líle.",
            "FAO ṣàlàyé pé iyọ̀ máa ń kó jọ nígbà tí omi ìbomirin bá mú iyọ̀ wọlé ju èyí tí ó ń ṣàn jáde lọ, àti pé bíbomi rin jù àti ọ̀nà omi tí kò dára ló sábà máa ń fà á. Ṣọ́ra fún èèpo funfun lórí ilẹ̀, etí ewé tí ó jóná, àti ìdàgbà tí kò dára. Ọ̀nà omi tó dára, ìbòlẹ̀ àti omi tó tó (tí kò pọ̀ jù) ń ṣèrànwọ́. Tí o bá rí àwọn àmì wọ̀nyí, tàbí tí o bá ń lo omi kànga ẹ̀rọ ní agbègbè gbígbẹ, ní kí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí ilé ìwádìí ilẹ̀ ṣàyẹ̀wò omi àti ilẹ̀ rẹ."
          ],
          steps: ["Kọ ètò ọ̀sẹ̀ kan: àwọn ọjọ́ wo, àárọ̀ tàbí ìrọ̀lẹ́, fún ìgbà mélòó.", "Bomi rin sí i ní àwọn ìpele tí ó nílò omi jù àti ní ọ̀sẹ̀ ooru àti afẹ́fẹ́.", "Fi ìbomirin sílẹ̀ lẹ́yìn òjò tó dára.", "Ṣàyẹ̀wò ilẹ̀ níbi tí gbòǹgbò wà kí o tó bomi rin nígbàkúùgbà.", "Wá omi tí ó dúró, òórùn kíkan àti pípọ́n ewé (omi tó kún ilẹ̀ jù).", "Wá èèpo funfun àti etí ewé tí ó jóná (iyọ̀); béèrè fún àyẹ̀wò omi àti ilẹ̀."],
          words: [["Ètò ìbomirin", "ètò fún ìgbà tí a máa bomi rin àti iye omi."], ["Omi tó kún ilẹ̀ jù (waterlogging)", "ilẹ̀ tí omi kún débi pé gbòǹgbò kò rí afẹ́fẹ́."], ["Iyọ̀ nínú ilẹ̀ (salinity)", "iyọ̀ tó pọ̀ jù nínú ilẹ̀ tàbí omi, tí ó ń ṣe ìpalára fún irè oko."], ["Ọ̀nà omi (drainage)", "ọ̀nà tí omi tó pọ̀ jù ń gbà kúrò nínú ilẹ̀."]],
          slides: [
            { title: "Ìgbà wo àti omi mélòó", bullets: ["Bomi rin ní àárọ̀ kùtùkùtù tàbí ìrọ̀lẹ́", "Sí i ní ìpele tí ó nílò omi jù àti ọ̀sẹ̀ ooru àti afẹ́fẹ́", "Fi sílẹ̀ lẹ́yìn òjò tó dára; ilẹ̀ ló ń pinnu"] },
            { title: "Omi tó kún ilẹ̀ jù", bullets: ["Omi tí ó dúró, òórùn kíkan, ọ̀gbìn tí ó pọ́n tí ó sì rọ", "Dín omi kù kí o sì la ọ̀nà omi", "Ebè gíga tàbí ebè ní ilẹ̀ amọ̀ líle"] },
            { title: "Iyọ̀ tó ń kó jọ (FAO)", bullets: ["Bíbomi rin jù àti ọ̀nà omi tí kò dára ló ń fà á", "Èèpo funfun, etí ewé tí ó jóná, ìdàgbà tí kò dára", "Ọ̀nà omi tó dára, ìbòlẹ̀, àyẹ̀wò omi àti ilẹ̀"] }
          ],
          sources: [FAO_WATERNEEDS, FAO_SALINITY],
          tryIt: "Kọ ètò ìbomirin ọ̀sẹ̀ kan fún irè oko kan: àwọn ọjọ́, àkókò ọjọ́ àti fún ìgbà mélòó. Lẹ́gbẹ̀ẹ́ rẹ̀, kọ àmì ìkìlọ̀ méjì ti omi tó kún ilẹ̀ jù àti méjì ti iyọ̀ tó ń kó jọ tí o máa wá nígbàkúùgbà tí o bá bomi rin.",
          youCanNow: "ṣètò ìbomirin, kí o sì rí omi tó kún ilẹ̀ jù àti iyọ̀ tó ń kó jọ kí wọ́n tó ba irè oko jẹ́.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ètò ìbomirin ń pinnu?", options: ["Irúgbìn tí a máa rà", "Ìgbà tí a máa bomi rin àti omi mélòó", "Ibi tí a máa tà sí", "Ẹ̀rọ fífa omi tí a máa rà"], answer: 1, why: "Ètò ń dáhùn ìgbà tí a máa bomi rin àti omi mélòó, àyẹ̀wò ilẹ̀ sì ní ọ̀rọ̀ ìkẹyìn." },
            { objective: "O5", q: "O ń fi omi kànga ẹ̀rọ bomi rin ní agbègbè gbígbẹ, ìdàgbà sì ń burú sí i ní àsìkò kọ̀ọ̀kan. Kí ni o máa ṣe?", options: ["Bomi rin ní ìlọ́po méjì", "Dá gbogbo ìbomirin dúró", "Fi ajílẹ̀ sí i", "Ní kí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí ilé ìwádìí ilẹ̀ ṣàyẹ̀wò omi àti ilẹ̀"], answer: 3, why: "Omi kànga ẹ̀rọ ní agbègbè gbígbẹ lè mú iyọ̀ wá; àyẹ̀wò omi àti ilẹ̀ ń fi ohun tí kò dára hàn." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yíyan ẹ̀rọ fífa omi, pẹ̀lú ti agbára oòrùn",
          minutes: 5,
          goal: "Fi ẹ̀rọ fífa omi ẹlẹ́sẹ̀, ti epo àti ti agbára oòrùn wéra, kí o sì kọ ohun tí o máa béèrè lọ́wọ́ olùtajà sílẹ̀.",
          text: [
            "Tí omi bá wà nísàlẹ̀ oko rẹ tàbí tí ó jìnnà sí i, o nílò ẹ̀rọ fífa omi (pump). Ẹ̀rọ ẹlẹ́sẹ̀ (treadle) àti ẹ̀rọ ọwọ́ kò wọ́n, agbára ara rẹ ni wọ́n sì ń lò; wọ́n dára fún oko kékeré nítòsí omi tí kò jìn. Ẹ̀rọ epo bẹntiróòlù àti dísù kò wọ́n láti rà, wọ́n sì rọrùn láti gbé kiri, ṣùgbọ́n epo àti àtúnṣe ń ná owó ní ọ̀sẹ̀ kọ̀ọ̀kan. Ẹ̀rọ agbára oòrùn wọ́n láti rà, ṣùgbọ́n oòrùn ọ̀fẹ́ ni wọ́n ń lò, nítorí náà owó lílò wọn kéré gan-an.",
            "Láti yàn, mọ nǹkan mẹ́ta: iye omi tí o nílò lójúmọ́, bí omi náà ṣe gbọ́dọ̀ ga tó (láti orí omi dé táǹkì tàbí oko), àti bí ó ṣe gbọ́dọ̀ jìnnà tó. Olùtajà nílò ìwọ̀nyí láti yan ìwọ̀n ẹ̀rọ. Ẹ̀rọ tí ó kéré jù kò ní fúnni ní omi tó tó; èyí tí ó tóbi jù ń fi owó ṣòfò.",
            "FAO tọ́ka sí ewu kan pẹ̀lú ẹ̀rọ agbára oòrùn: nítorí pé wákàtí kọ̀ọ̀kan tí a fi kún fífa omi jẹ́ ọ̀fẹ́, àwọn àgbẹ̀ lè fa omi ju èyí tí odò tàbí omi abẹ́lẹ̀ lè fara dà lọ. Fa omi tí irè oko rẹ nílò nìkan, pín omi lọ́nà òdodo pẹ̀lú àwọn aládùúgbò, kí o sì tẹ̀lé òfin àjọ tó ń bójú tó omi. Jẹ́ kí pánẹ́ẹ̀lì oòrùn wà ní mímọ́ àti láìléwu, kí o sì béèrè fún ìdánilójú (warranty), àwọn ẹ̀yà ìpààrọ̀ àti iṣẹ́ lẹ́yìn títà ní kíkọ sílẹ̀. Àwọn olùtajà kan ń fúnni ní ètò ìsanwó díẹ̀díẹ̀ (pay-as-you-go); kọ́kọ́ ka iye owó lápapọ̀ àti àwọn àdéhùn."
          ],
          steps: ["Ṣírò omi tí oko rẹ nílò lójúmọ́.", "Wọn gíga: láti orí omi dé táǹkì tàbí oko.", "Wọn jíjìnnà láti orísun omi dé oko.", "Fi ẹ̀rọ ẹlẹ́sẹ̀, ti epo àti ti oòrùn wéra lórí owó rírà, owó lílò àti iṣẹ́ ọwọ́.", "Béèrè lọ́wọ́ olùtajà fún ìwọ̀n ẹ̀rọ, warranty, ẹ̀yà ìpààrọ̀ àti iṣẹ́ ní kíkọ sílẹ̀.", "Ṣàyẹ̀wò ìwé àṣẹ omi kí o tó fa omi láti odò tàbí kànga ẹ̀rọ."],
          words: [["Ẹ̀rọ ẹlẹ́sẹ̀ (treadle pump)", "ẹ̀rọ tí a fi ẹsẹ̀ tẹ̀ láti fa omi láti orísun tí kò jìn."], ["Ẹ̀rọ agbára oòrùn (solar pump)", "ẹ̀rọ fífa omi tí pánẹ́ẹ̀lì oòrùn ń fún ní agbára."], ["Gíga (lift tàbí head)", "bí ẹ̀rọ ṣe gbọ́dọ̀ gbé omi ga tó."], ["Fífa omi jù (over-abstraction)", "gbígba omi láti odò tàbí abẹ́lẹ̀ ju èyí tí ìṣẹ̀dá ń dá padà lọ."]],
          slides: [
            { title: "Irú ẹ̀rọ fífa omi", bullets: ["Ẹlẹ́sẹ̀ tàbí ọwọ́: kò wọ́n, agbára ara rẹ", "Bẹntiróòlù tàbí dísù: kò wọ́n láti rà, ó wọ́n láti lò", "Oòrùn: ó wọ́n láti rà, owó lílò kéré gan-an"] },
            { title: "Yan ìwọ̀n tó tọ́", bullets: ["Omi tí o nílò lójúmọ́", "Gíga: bí ó ṣe ga tó", "Jíjìnnà: bí ó ṣe jìnnà tó"] },
            { title: "Oòrùn: lò ó lọ́nà ọgbọ́n (FAO)", bullets: ["Fífa omi lọ́fẹ̀ẹ́ lè yọrí sí fífa omi jù", "Fa omi tí irè oko nílò nìkan", "Tẹ̀lé òfin àjọ tó ń bójú tó omi"] },
            { title: "Béèrè lọ́wọ́ olùtajà", bullets: ["Ìwọ̀n ẹ̀rọ fún gíga àti jíjìnnà rẹ", "Warranty, ẹ̀yà ìpààrọ̀ àti iṣẹ́ ní kíkọ sílẹ̀", "Iye owó lápapọ̀ àti àdéhùn ètò pay-as-you-go èyíkéyìí"] }
          ],
          sources: [FAO_SOLAR, WRA],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ìbomirin ojú-ewé kan rẹ. Fi àwọn ìpele tí irè oko rẹ nílò omi jù sí i, orísun omi àti ibi ìpamọ́ rẹ, ẹ̀rọ drip tàbí ọ̀nà míì, ètò ọ̀sẹ̀ kọ̀ọ̀kan, bí o ṣe máa dènà omi tó kún ilẹ̀ jù àti iyọ̀, àti ẹ̀rọ fífa omi tí o máa yàn pẹ̀lú gíga, jíjìnnà àti omi tí o nílò lójúmọ́.",
          youCanNow: "yan irú ẹ̀rọ fífa omi tó tọ́, kí o sì kọ ètò ìbomirin pípé fún oko kékeré.",
          quickCheck: [
            { objective: "O6", q: "Ẹ̀rọ fífa omi wo ló ń lo agbára ara rẹ, tí ó sì bá oko kékeré nítòsí omi tí kò jìn mu?", options: ["Ẹ̀rọ ẹlẹ́sẹ̀ tàbí ẹ̀rọ ọwọ́", "Ẹ̀rọ dísù ńlá", "Ẹ̀rọ oòrùn ńlá", "Kò sí ẹ̀rọ rárá"], answer: 0, why: "Ẹ̀rọ ẹlẹ́sẹ̀ àti ẹ̀rọ ọwọ́ kò wọ́n, wọ́n sì bá oko kékeré nítòsí omi tí kò jìn mu." },
            { objective: "O6", q: "Ẹ̀rọ oòrùn tuntun rẹ lè ṣiṣẹ́ ní gbogbo ọjọ́ lọ́fẹ̀ẹ́, ṣùgbọ́n omi odò ń fà. Kí ni o máa ṣe?", options: ["Fa omi ní gbogbo ọjọ́ nítorí ọ̀fẹ́ ni", "Ta omi tó ṣẹ́kù", "Fa omi tí irè oko nílò nìkan, kí o sì pín omi lọ́nà òdodo pẹ̀lú àwọn aládùúgbò", "Gbé ẹ̀rọ náà lọ sí òkè odò"], answer: 2, why: "Fífa omi lọ́fẹ̀ẹ́ lè gba omi jù; fa omi tí irè oko nílò nìkan kí o sì tẹ̀lé òfin àjọ tó ń bójú tó omi." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Fífi omi fún irè oko",
        questions: [
          { objective: "O4", q: "Kí ni ìṣòro pàtàkì tí a gbọ́dọ̀ dènà pẹ̀lú ẹ̀rọ drip?", options: ["Agbára omi tó pọ̀ jù", "Emitter tí ó dí", "Ọ̀gbìn tí ó pọ̀ jù", "Ewé tí ó rin"], answer: 1, why: "Ìdọ̀tí ń dí emitter; àsẹ́ tó mọ́ àti ṣíṣan páìpù ń dènà rẹ̀." },
          { objective: "O4", q: "Báwo ni dọ́ọ̀mù ẹ̀rọ drip tí ìwúwo omi ń tì ṣe gbọ́dọ̀ ga tó?", options: ["Lórí ilẹ̀", "Tí a rì mọ́lẹ̀ nísàlẹ̀ ebè", "Ó kéré tán mítà 1 lókè ebè", "Kò ṣe pàtàkì"], answer: 2, why: "FAO sọ pé kí a gbé dọ́ọ̀mù sókè ó kéré tán mítà 1 kí ó lè ní agbára tó tó." },
          { objective: "O5", q: "Ọ̀gbìn ti pọ́n, wọ́n sì ń rọ, ilẹ̀ ń rùn kíkan, omi sì dúró lórí ilẹ̀. Kí ló ṣẹlẹ̀?", options: ["Omi kò tó", "Oòrùn ti pọ̀ jù", "Iyọ̀ wà nínú afẹ́fẹ́", "Omi ti kún ilẹ̀ jù"], answer: 3, why: "Omi tí ó dúró àti òórùn kíkan túmọ̀ sí pé gbòǹgbò kò rí afẹ́fẹ́." },
          { objective: "O5", q: "O rí èèpo funfun lórí ilẹ̀ àti etí ewé tí ó jóná. Kí ni o yẹ kí o ṣe?", options: ["Béèrè fún àyẹ̀wò omi àti ilẹ̀ kí o sì mú ọ̀nà omi dára sí i", "Bomi rin púpọ̀ sí i lójoojúmọ́", "Fi iyọ̀ sí i", "Má ṣe kà á sí"], answer: 0, why: "Àmì iyọ̀ tó ń kó jọ nìwọ̀nyí; FAO so ó mọ́ bíbomi rin jù àti ọ̀nà omi tí kò dára." },
          { objective: "O6", q: "Kí ló dé tí FAO fi kìlọ̀ nípa ẹ̀rọ fífa omi agbára oòrùn?", options: ["Wọn kì í ṣiṣẹ́ rárá", "Wọ́n ń pariwo jù", "Fífa omi lọ́fẹ̀ẹ́ lè yọrí sí gbígba omi jù", "Wọ́n nílò bẹntiróòlù"], answer: 2, why: "Nítorí pé owó lílò wọn kò fẹ́rẹ̀ẹ́ sí, àwọn àgbẹ̀ lè fa omi jù láti odò àti abẹ́lẹ̀." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìbomirin Oko àti Ìṣàkóso Omi",
    questions: [
      { objective: "O1", q: "Gẹ́gẹ́ bí FAO ṣe sọ, iye omi tí irè oko nílò dá lórí:", options: ["Iye owó omi nìkan", "Ojú-ọjọ́, irú irè oko àti ìpele ìdàgbà", "Àwọ̀ irè oko", "Ọjọ́ ọ̀sẹ̀"], answer: 1, why: "FAO dárúkọ ojú-ọjọ́, irú irè oko àti ìpele ìdàgbà." },
      { objective: "O1", q: "Ojú-ọjọ́ wo ló ń jẹ́ kí irè oko lo omi jù?", options: ["Ó tutù, ìkùukùu sì bò ó", "Afẹ́fẹ́ kò fẹ́, ìrì sì ṣú", "Ó gbóná, oòrùn mú, ó gbẹ, afẹ́fẹ́ sì ń fẹ́", "Ó tutù, ó sì rin"], answer: 2, why: "Ooru, oòrùn, afẹ́fẹ́ gbígbẹ àti atẹ́gùn ń mú kí lílo omi pọ̀ sí i." },
      { objective: "O1", q: "Ìgbà wo ni àìtó omi ń pa tòmátì lára jù?", options: ["Nígbà òdòdó àti sísọ èso", "Nígbà rírà irúgbìn", "Lẹ́yìn ìkórè ìkẹyìn", "Nígbà tí oko kò ní nǹkan"], answer: 0, why: "Ìgbà òdòdó àti sísọ èso ni àwọn ìpele tí ó nílò omi jù." },
      { objective: "O1", q: "Òjò tó wúlò (effective rainfall) ni:", options: ["Gbogbo òjò tí ó rọ̀", "Òjò tí ó rọ̀ ní alẹ́", "Òjò tí rédíò wọ̀n", "Apá òjò tí irè oko lè lò gan-an"], answer: 3, why: "Díẹ̀ nínú òjò ń ṣàn lọ tàbí ń wọ ilẹ̀ jìn jù; èyí tó kù ni ó wúlò." },
      { objective: "O2", q: "Nǹkan bí omi mélòó ni òjò mm 1 ń fúnni lórí mítà onígun mẹ́rin 1 òrùlé?", options: ["Lítà 1", "Lítà 10", "Lítà 100", "Lítà 1,000"], answer: 0, why: "Mm 1 lórí mítà onígun mẹ́rin 1 jẹ́ nǹkan bí lítà 1." },
      { objective: "O2", q: "Kòtò zai ni:", options: ["Kànga ẹ̀rọ (borehole)", "Kòtò gbígbìn kékeré tí ìgbẹ́ ẹran wà nínú rẹ̀, tí ó ń gba òjò sí ìdí gbòǹgbò", "Irú ẹ̀rọ fífa omi kan", "Táǹkì omi"], answer: 1, why: "Kòtò zai ń kó òjò àti oúnjẹ ọ̀gbìn jọ sí ìdí ọ̀gbìn." },
      { objective: "O3", q: "Kí ló dé tí a fi ń tẹ́ nǹkan sí adágún omi oko?", options: ["Láti mú omi ní iyọ̀", "Láti fa ẹran mọ́ra", "Láti dá omi dúró kí ó má bàa jò sínú ilẹ̀", "A kò nílò láti tẹ́ nǹkan sí i láéláé"], answer: 2, why: "Adágún tí a kò tẹ́ nǹkan sí ń pàdánù omi púpọ̀ sínú ilẹ̀." },
      { objective: "O3", q: "Kí ló dé tí a fi gbọ́dọ̀ ṣe ọgbà yí adágún oko ká?", options: ["Láti dáàbò bo àwọn ọmọdé àti ẹran", "Láti jẹ́ kí wọ́n jìn sí i", "Láti dá òjò dúró", "Láti mú omi gbóná"], answer: 0, why: "Adágún tí ó ṣí sílẹ̀ lè mú kí ènìyàn rì." },
      { objective: "O3", q: "Ní Kenya, àjọ wo ló ń fúnni ní ìwé àṣẹ lílo omi, fún àpẹẹrẹ fún kànga ẹ̀rọ?", options: ["Kenya Bureau of Standards", "Kenya Revenue Authority", "Kenya Power", "Water Resources Authority (WRA)"], answer: 3, why: "WRA ló ń ṣàkóso lílo omi tí ó sì ń fúnni ní ìwé àṣẹ." },
      { objective: "O4", q: "Àǹfààní pàtàkì kan ti ìbomirin drip ni:", options: ["Ó ń mú ewé rin", "Omi ń lọ sí gbòǹgbò, díẹ̀ ló sì ń sọnù", "Kò nílò omi", "Ó ń jẹ́ kí èpò yára dàgbà"], answer: 1, why: "Drip ń mú omi dé gbòǹgbò láìfi púpọ̀ ṣòfò." },
      { objective: "O4", q: "FAO ṣàpèjúwe ẹ̀rọ drip ìdílé gẹ́gẹ́ bí èyí tó bá oko tí ó tó nǹkan bí:", options: ["Mítà onígun mẹ́rin 1 sí 5", "Hẹ́kítà 100", "Ìwọ̀n èyíkéyìí tí ó tó odindi ìjọba ìbílẹ̀", "Mítà onígun mẹ́rin 100 sí 500"], answer: 3, why: "Ìwé FAO sọ̀rọ̀ nípa drip ìdílé tí ó rọrùn fún nǹkan bí mítà onígun mẹ́rin 100 sí 500." },
      { objective: "O4", q: "Ọ̀gbìn kan lórí páìpù drip rẹ ti gbẹ. Ohun tí ó ṣeé ṣe jù kí ó fà á ni:", options: ["Emitter tí ó dí", "Oòrùn tó pọ̀ jù lórí dọ́ọ̀mù", "Ọ̀gbìn náà ti ní àwọ̀ ewé jù", "Àsẹ́ ti mọ́ jù"], answer: 0, why: "Ọ̀gbìn tí ó gbẹ sábà máa ń túmọ̀ sí pé emitter rẹ̀ ti dí." },
      { objective: "O4", q: "Kí ló dé tí a fi ń fi ìbòlẹ̀ (mulch) bo orí páìpù drip?", options: ["Láti fi wọ́n pamọ́ fún oòrùn nìkan", "Láti mú omi gbóná sí i", "Láti dí àwọn emitter", "Láti dín omi tí oòrùn ń fà láti inú ilẹ̀ kù"], answer: 3, why: "Ìbòlẹ̀ ń dá ọ̀rinrin ilẹ̀ dúró kí oòrùn má fà á lọ." },
      { objective: "O5", q: "Àkókò ọjọ́ tó dára jù láti bomi rin sábà máa ń jẹ́:", options: ["Ọ̀sán gangan nígbà tí oòrùn mú", "Àárọ̀ kùtùkùtù tàbí ìrọ̀lẹ́", "Ọ̀gànjọ́ òru nìkan", "Ìgbàkígbà; kò yàtọ̀"], answer: 1, why: "Omi díẹ̀ ló ń sọnù sí oòrùn ní àwọn àkókò tí ó tutù nínú ọjọ́." },
      { objective: "O5", q: "Òjò rọ̀ dáadáa ní alẹ́ àná. Ètò rẹ sọ pé kí o bomi rin lónìí. Kí ni o máa ṣe?", options: ["Bomi rin ní ìlọ́po méjì", "Bomi rin bí o ti ṣètò bẹ́ẹ̀ náà", "Ṣàyẹ̀wò ilẹ̀; fi sílẹ̀ tí ó bá rin níbi tí gbòǹgbò wà", "Ṣan omi kúrò nínú oko"], answer: 2, why: "Ilẹ̀ ló ní ọ̀rọ̀ ìkẹyìn; fi ìbomirin sílẹ̀ lẹ́yìn òjò tó dára." },
      { objective: "O5", q: "Ní ilẹ̀ amọ̀ líle tí omi tètè ń kún, ìṣe tó dára ni:", options: ["Mú omi kún oko", "Fi omi kún un sí i", "Gbìn sí ibi kòtò", "Ebè gíga tàbí ebè àti ọ̀nà omi tí ó ṣí sílẹ̀"], answer: 3, why: "Ebè gíga àti ọ̀nà omi ń jẹ́ kí omi tó pọ̀ jù kúrò." },
      { objective: "O5", q: "Gẹ́gẹ́ bí FAO ṣe sọ, ohun tí ó sábà máa ń fa iyọ̀ tó ń kó jọ sínú ilẹ̀ tí a ń bomi rin ni:", options: ["Fífi ìbòlẹ̀ bo ilẹ̀", "Gbígbin ẹ̀wà àti irú rẹ̀", "Bíbomi rin jù àti ọ̀nà omi tí kò dára", "Lílo àsẹ́"], answer: 2, why: "Iyọ̀ tí ó ń wọlé ń pọ̀ ju èyí tí ó ń ṣàn jáde nígbà tí omi bá pọ̀ jù tí ọ̀nà omi kò sì dára." },
      { objective: "O6", q: "Láti yan ìwọ̀n ẹ̀rọ fífa omi, olùtajà nílò láti mọ̀:", options: ["Àwọ̀ tí o fẹ́ràn jù", "Omi tí o nílò lójúmọ́, gíga àti jíjìnnà", "Owó tí o ní nìkan", "PIN báńkì rẹ"], answer: 1, why: "Omi tí o nílò, gíga àti jíjìnnà ló ń pinnu ẹ̀rọ tó tọ́." },
      { objective: "O6", q: "Tí a bá fi wé ẹ̀rọ bẹntiróòlù, ẹ̀rọ oòrùn sábà máa ń:", options: ["Wọ́n láti rà ṣùgbọ́n owó lílò rẹ̀ kéré gan-an", "Kò wọ́n láti rà ṣùgbọ́n ó wọ́n láti lò", "Nílò dísù", "Ṣiṣẹ́ ní alẹ́ nìkan"], answer: 0, why: "Ẹ̀rọ oòrùn wọ́n láti rà ṣùgbọ́n oòrùn ọ̀fẹ́ ni ó ń lò." },
      { objective: "O6", q: "Olùtajà kan fún ọ ní ẹ̀rọ oòrùn tí a ń san díẹ̀díẹ̀ (pay-as-you-go). Kí ni o máa kọ́kọ́ ṣe?", options: ["Fọwọ́ sí i lẹ́sẹ̀kẹsẹ̀", "Fún wọn ní PIN rẹ", "Ka iye owó lápapọ̀, àdéhùn, warranty àti iṣẹ́ ní kíkọ sílẹ̀", "Ra méjì"], answer: 2, why: "Mọ iye owó lápapọ̀ àti ìrànlọ́wọ́ tí o máa rí kí o tó fọwọ́ sí i." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      4,
      6,
      8,
      9,
      11,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún un ṣàyẹ̀wò.",
    criteria: [
      {
        name: "Irè oko àti ìpele tí ó nílò omi jù",
        objective: "O1",
        notYet: "Àwọn ìpele tí irè oko nílò omi jù kò sí níbẹ̀, tàbí wọn kò tọ́.",
        meets: "Ó dárúkọ irè oko náà àti àwọn ìpele ìdàgbà tí ó nílò omi jù, pẹ̀lú bí a ṣe máa ṣàyẹ̀wò ilẹ̀.",
        exceeds: "Ó kọ ọjọ́ gbígbìn sílẹ̀ kí àwọn ìpele tí ó nílò omi jù lè wà lórí kàlẹ́ńdà."
      },
      {
        name: "Orísun omi àti ibi ìpamọ́",
        objective: "O2",
        notYet: "Kò sí orísun omi, tàbí kò sí ìṣirò iye omi tí a lè pa mọ́.",
        meets: "Orísun omi, ìṣirò omi òrùlé tàbí omi tí ń ṣàn, àti ibi ìpamọ́ tí a bò, pẹ̀lú ìwé àṣẹ èyíkéyìí tí a ti ṣàyẹ̀wò.",
        exceeds: "Ó fi ọ̀nà inú oko kan bí kòtò gbígbìn kún un láti jẹ́ kí òjò dúró sórí ilẹ̀."
      },
      {
        name: "Ọ̀nà ìbomirin",
        objective: "O4",
        notYet: "Kò sí ọ̀nà ìbomirin, tàbí kò sí ètò láti dènà dídí.",
        meets: "Ẹ̀rọ drip tàbí ọ̀nà míì tí ó bá oko náà mu, pẹ̀lú gíga dọ́ọ̀mù, àsẹ́ àti ṣíṣan páìpù.",
        exceeds: "Ó fi ìbòlẹ̀ lórí àwọn páìpù kún un, àti àkọsílẹ̀ àwọn ẹ̀yà ìpààrọ̀."
      },
      {
        name: "Ètò ìbomirin àti àyẹ̀wò ilẹ̀",
        objective: "O5",
        notYet: "Kò sí ètò, tàbí ó ń bomi rin ní ọ̀sán gangan láìṣàyẹ̀wò ilẹ̀.",
        meets: "Ètò ọ̀sẹ̀ kọ̀ọ̀kan pẹ̀lú àkókò ọjọ́, omi púpọ̀ sí i ní ìpele tí ó nílò omi jù, àti àyẹ̀wò ilẹ̀ kí a tó bomi rin.",
        exceeds: "Ó sọ ohun tí a máa ṣe lẹ́yìn òjò tó dára àti ní ọ̀sẹ̀ ooru àti afẹ́fẹ́."
      },
      {
        name: "Omi tó kún ilẹ̀ jù àti iyọ̀",
        objective: "O5",
        notYet: "Kò sí ètò fún omi tó kún ilẹ̀ jù tàbí iyọ̀.",
        meets: "Àwọn àmì tí a máa ṣọ́ àti àwọn ìgbésẹ̀ bí ọ̀nà omi, ebè gíga àti àìbomi rin jù.",
        exceeds: "Ó ṣètò àyẹ̀wò omi àti ilẹ̀ tí ó bá ń lo omi kànga ẹ̀rọ ní agbègbè gbígbẹ."
      },
      {
        name: "Yíyan ẹ̀rọ fífa omi",
        objective: "O6",
        notYet: "Kò yan ẹ̀rọ fífa omi, tàbí kò sí ìdí.",
        meets: "Irú ẹ̀rọ kan pẹ̀lú ìdí rẹ̀, omi tí a nílò lójúmọ́, gíga àti jíjìnnà.",
        exceeds: "Ó kọ warranty, ẹ̀yà ìpààrọ̀ àti iṣẹ́ tí a máa béèrè ní kíkọ sílẹ̀."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ètò ìbomirin",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ṣe ibi ìpamọ́ omi òjò tàbí ẹ̀rọ drip láàárín àsìkò kan (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn gbin irè oko ẹ̀rùn tàbí pé ìkórè tí ó sọnù nígbà ọ̀dá ti dín kù",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ iṣẹ́ àgbẹ̀ Koach Learn míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀, gègé àti fóònù lásán tí ó ní ẹ̀rọ ìṣirò",
      "Ilẹ̀ kékeré láti fi ṣe àṣeṣe àyẹ̀wò ọ̀rinrin ilẹ̀",
      "Ẹ̀rọ drip olówó pọ́ọ́kú tàbí garawa, tí ó bá wà, fún ìfihàn",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti kọ ètò ìbomirin"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́ àgbẹ̀ tàbí ilé ìwé oko (field school): ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣàyẹ̀wò ọ̀rinrin ilẹ̀ nínú oko gidi.",
      "Ẹ ṣírò omi òrùlé kan pọ̀ ní lílo òrùlé gidi kan níbẹ̀.",
      "Ẹ ṣe ẹ̀rọ drip garawa tàbí dọ́ọ̀mù gẹ́gẹ́ bí ẹgbẹ́, kí ẹ sì ṣe àṣeṣe fífọ àsẹ́ àti ṣíṣan páìpù.",
      "Rán àwọn akẹ́kọ̀ọ́ létí láti béèrè nípa ìwé àṣẹ omi lọ́wọ́ àjọ tó ń bójú tó omi, àti láti ṣe ọgbà yí adágún àti táǹkì ká kí wọ́n sì bò wọ́n.",
      "Fi rubric ṣe àmì fún ètò ìbomirin, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
