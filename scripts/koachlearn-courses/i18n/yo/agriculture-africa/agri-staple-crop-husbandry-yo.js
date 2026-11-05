"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-staple-crop-husbandry.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KEPHIS = { name: "Kenya Plant Health Inspectorate Service (KEPHIS): ìfọwọ́sí irúgbìn àti National Crop Variety List (àkọsílẹ̀ oríṣi irè oko orílẹ̀-èdè Kenya)", url: "https://www.kephis.go.ke" };
const NASC = { name: "National Agricultural Seed Council (NASC, Nàìjíríà): ìfọwọ́sí irúgbìn", url: "https://seedcouncil.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO), àjọ ìwádìí iṣẹ́ àgbẹ̀ Kenya", url: "https://www.kalro.org" };
const IITA = { name: "International Institute of Tropical Agriculture (IITA), ilé-iṣẹ́ ìwádìí iṣẹ́ àgbẹ̀ ilẹ̀ olóoru", url: "https://www.iita.org" };
const AFRICARICE = { name: "AfricaRice (olú-ilé rẹ̀ wà ní Abidjan, Côte d'Ivoire)", url: "https://www.africarice.org" };
const IITA_CASSAVA_VIRUS = { name: "IITA: Akitiyan ẹgbẹ́ IITA láti ṣàkóso àwọn kòkòrò àrùn (virus) tó ń ba ẹ̀gẹ́ jẹ́ ní Áfíríkà (2017)", url: "https://iita.org/?p=16690" };
const CIMMYT_MLN = { name: "CIMMYT: Bí maize lethal necrosis (MLN) ṣe ń tàn kálẹ̀ nínú irúgbìn ní Áfíríkà, àti bí a ṣe lè dènà rẹ̀", url: "https://mln.cimmyt.org/understanding-and-preventing-seed-transmission-of-maize-lethal-necrosis-mln-in-africa" };
const JIRCAS_BLAST = { name: "JIRCAS pẹ̀lú AfricaRice: Ìyàtọ̀ nínú agbára ìrẹsì Ìwọ̀-Oòrùn Áfíríkà láti kọjú ìjà sí blast (2017)", url: "https://www.jircas.go.jp/en/publication/research_results/2017_b01" };
const PCPB = { name: "Pest Control Products Board (Kenya): àwọn oògùn oko tí a forúkọ wọn sílẹ̀", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nàìjíríà): àwọn kẹ́míkà oko tí a forúkọ wọn sílẹ̀", url: "https://www.nafdac.gov.ng" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: ìwé ìtọ́sọ́nà fún lílo ajílẹ̀ dáadáa", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-staple-crop-husbandry-yo",
  lang: "yo",
  translationOf: "agri-staple-crop-husbandry",
  category: "Agriculture (Africa)",
  name: "Ọ̀gbìn Òde Òní: Àgbàdo, Ìrẹsì, Ẹ̀gẹ́ àti Ẹ̀wà",
  skills: "Yíyan oríṣi àti irúgbìn tí a fọwọ́ sí, Ṣíṣírò iye ohun ọ̀gbìn àti irúgbìn tí o nílò láti inú àlàfo, Ṣíṣètò àkókò ìmúra ilẹ̀, ajílẹ̀ àti kíkọ èpò, Dídá maize lethal necrosis, àrùn ẹ̀gẹ́ àti rice blast mọ̀, Mímọ ìgbà ìkórè àti ṣíṣírò iye ìkórè lórí hẹ́kítà àti lórí éékà",
  outcome: "kọ ètò ọ̀gbìn ìgbà oko kan fún irè oko pàtàkì kan (àgbàdo, ìrẹsì, ẹ̀gẹ́ tàbí ẹ̀wà) lórí oko rẹ: oríṣi àti irúgbìn, iye ohun ọ̀gbìn àti irúgbìn tí o nílò, kàlẹ́ńdà tí ó ní ọjọ́ fún ìmúra ilẹ̀, gbígbìn, ajílẹ̀ àti kíkọ èpò, àwọn àrùn pàtàkì tí o máa ṣọ́ àti ohun tí o máa ṣe, àti iye ìkórè tí o ń fojú sí lórí hẹ́kítà àti lórí éékà.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ tó ń dàgbà sí oníṣòwò, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tí wọ́n ń gbin oúnjẹ pàtàkì tí ó ń bọ́ Áfíríkà: àgbàdo, ìrẹsì, ẹ̀gẹ́, ẹ̀wà, ẹ̀wà cowpea, ẹ̀pà àti sóyà. Àwọn àpẹẹrẹ wá láti Kenya, Nàìjíríà, Ghana àti Côte d'Ivoire.",
    "Orí 1 dá lórí bíbẹ̀rẹ̀ irè oko dáadáa: yíyan oríṣi láti ọ̀dọ̀ ilé-iṣẹ́ ìwádìí orílẹ̀-èdè rẹ àti ríra irúgbìn tí a fọwọ́ sí tàbí igi ẹ̀gẹ́ tí kò ní àrùn, mímúra ilẹ̀ sílẹ̀, ṣíṣírò iye ohun ọ̀gbìn tí o nílò àti iye irúgbìn tí o máa rà, àti ṣíṣètò àkókò ajílẹ̀ àti kíkọ èpò. Orí 2 dá lórí dídáàbò bo irè oko àti wíwọn rẹ̀: dídá maize lethal necrosis, cassava mosaic àti brown streak, àti rice blast mọ̀, mímọ ìgbà tí o máa kórè, àti ṣíṣírò iye ìkórè rẹ lórí hẹ́kítà àti lórí éékà.",
    "A kọ́ àyẹ̀wò ilẹ̀ àti ajílẹ̀ nínú \"Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀\", a sì kọ́ ìpamọ́ nínú \"Ìtọ́jú àti Ìpamọ́ Irè Lẹ́yìn Ìkórè\", nítorí náà ẹ̀kọ́ yìí ń tọ́ka sí wọn dípò kí ó tún wọn sọ. Oríṣi, àlàfo àti ìwọ̀n ajílẹ̀ yàtọ̀ láti agbègbè kan sí òmíràn, nítorí náà lo ẹ̀kọ́ yìí pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ àti ilé-iṣẹ́ ìwádìí. Ìdánwò kúkúrú wà lẹ́yìn ẹ̀kọ́ kọ̀ọ̀kan, ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò ọ̀gbìn fún irè oko pàtàkì kan lórí oko rẹ: ìtóbi oko ní hẹ́kítà àti éékà, oríṣi tí o yàn àti ibi tí o máa ra irúgbìn tí a fọwọ́ sí tàbí igi ẹ̀gẹ́ tí kò ní àrùn, àlàfo àti ìṣirò iye ohun ọ̀gbìn rẹ àti irúgbìn tàbí igi tí o nílò, kàlẹ́ńdà tí ó ní ọjọ́ (ìmúra ilẹ̀, gbígbìn, ajílẹ̀ bí àyẹ̀wò ilẹ̀ rẹ tàbí òṣìṣẹ́ ìtọ́sọ́nà ṣe dámọ̀ràn, kíkọ èpò kọ̀ọ̀kan), àwọn àrùn pàtàkì méjì tí o máa ṣọ́ àti ohun àkọ́kọ́ tí o máa ṣe fún ọ̀kọ̀ọ̀kan, bí o ṣe máa mọ ìgbà ìkórè, àti iye ìkórè tí o ń fojú sí lórí hẹ́kítà àti lórí éékà pẹ̀lú ìṣirò rẹ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ tó ń dàgbà sí oníṣòwò, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ káàkiri Áfíríkà tí wọ́n ń gbin àgbàdo, ìrẹsì, ẹ̀gẹ́ àti ẹ̀wà (ẹ̀wà, ẹ̀wà cowpea, ẹ̀pà, sóyà), láti ìdajì éékà sí hẹ́kítà díẹ̀.",
    startingPoint: "Wọ́n ti gbin irè oko náà fún ọ̀pọ̀ ọdún, nígbà púpọ̀ pẹ̀lú irúgbìn tí wọ́n tún ń lò tàbí igi ẹ̀gẹ́ tí wọ́n ń pín, wọ́n ń fọ́n irúgbìn tàbí gbìn ín láìní àlàfo tó dọ́gba, wọ́n ń pẹ́ kọ èpò, wọn kò sì fi bẹ́ẹ̀ kọ iye ìkórè sílẹ̀. Ọ̀pọ̀ kò mọ iye ohun ọ̀gbìn wọn, oríṣi tí wọ́n ní, tàbí bí a ṣe ń ṣírò iye ìkórè lórí hẹ́kítà tàbí lórí éékà.",
    gap: "Iye ìkórè oúnjẹ pàtàkì lórí ọ̀pọ̀ oko ní Áfíríkà kéré gan-an sí ohun tí oríṣi tí a mú dára sí i àti ọ̀gbìn tó dára lè mú wá. Àwọn akẹ́kọ̀ọ́ nílò láti yan oríṣi tó bá wọn mu àti irúgbìn tó mọ́, gbin iye ohun ọ̀gbìn tó tọ́, fi ajílẹ̀ sí i kí wọ́n sì kọ èpò lásìkò, dá àwọn àrùn tó ń pa irè oko run mọ̀, kórè ní àkókò tó tọ́, kí wọ́n sì wọn iye ìkórè wọn kí wọ́n lè rí ohun tó ń ṣiṣẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń lo èdè Gẹ̀ẹ́sì bí èdè kejì, ẹ̀kọ́ náà sì wà ní Yorùbá àti àwọn èdè míì",
      "Ìṣirò: ìsọdipúpọ̀ àti pínpín tó rọrùn pẹ̀lú ẹ̀rọ ìṣirò fóònù; a fi gbogbo ìṣirò hàn ní ìgbésẹ̀ kọ̀ọ̀kan",
      "Ẹ̀rọ: fóònù lásán tí ó ní ẹ̀rọ ìṣirò; téèpù ìwọ̀n tàbí okùn tí a sàmì sí àti òṣùwọ̀n máa ràn ọ́ lọ́wọ́",
      "Oríṣi, àlàfo àti ìwọ̀n ajílẹ̀ yàtọ̀ láti agbègbè kan sí òmíràn, wọ́n sì ń yí padà bí a ṣe ń tú oríṣi tuntun sílẹ̀; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò àkọsílẹ̀ oríṣi orílẹ̀-èdè àti òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ wọn",
      "A kọ́ ọ̀rá ilẹ̀ nínú \"Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀\"; ẹ̀kọ́ yìí kàn ń sọ ohun tó yàtọ̀ fún irè oko kọ̀ọ̀kan"
    ],
    prerequisites: "Kò sí, ṣùgbọ́n a dámọ̀ràn gidigidi pé kí o ṣe \"Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀\" ṣáájú ẹ̀kọ́ yìí tàbí pẹ̀lú rẹ̀."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún irè oko pàtàkì kan tí o máa gbìn ní ìgbà oko tó ń bọ̀", action: "yan oríṣi kan láti ọ̀dọ̀ ilé-iṣẹ́ ìwádìí orílẹ̀-èdè rẹ tàbí àkọsílẹ̀ oríṣi, kí o sì dárúkọ ibi tí a forúkọ rẹ̀ sílẹ̀ tí o ti lè ra irúgbìn tí a fọwọ́ sí tàbí igi ẹ̀gẹ́ tí kò ní àrùn", standard: "kí o sì ṣàyẹ̀wò àmì, ìdè tàbí orísun rẹ̀ kí o tó sanwó" },
    { id: "O2", condition: "Tí a bá fún ọ ní àlàfo àti ìtóbi oko rẹ", action: "ṣírò iye ohun ọ̀gbìn lórí hẹ́kítà àti lórí éékà, àti irúgbìn tàbí igi ẹ̀gẹ́ tí o nílò", standard: "kí o sì fi ìgbésẹ̀ kọ̀ọ̀kan ìṣirò náà hàn" },
    { id: "O3", condition: "Fún irè oko tí o yàn àti ọjọ́ tí o máa gbìn", action: "ṣètò ìmúra ilẹ̀, gbígbìn, ajílẹ̀ àti kíkọ èpò sórí kàlẹ́ńdà tí ó ní ọjọ́", standard: "kí kíkọ èpò sì wà nínú àwọn ọ̀sẹ̀ àkọ́kọ́ tó ṣe pàtàkì fún irè oko náà" },
    { id: "O4", condition: "Tí a bá fi àmì àrùn hàn ọ́ lára ohun ọ̀gbìn tàbí oko kan", action: "dá maize lethal necrosis, cassava mosaic, cassava brown streak tàbí rice blast mọ̀, kí o sì yan ohun àkọ́kọ́ tí o máa ṣe", standard: "kí o sì so àrùn kọ̀ọ̀kan mọ́ ìgbésẹ̀ àkọ́kọ́ tó tọ́" },
    { id: "O5", condition: "Ní ìparí ìgbà oko", action: "mọ ìgbà tí irè oko ti gbó, kí o sì ṣírò iye ìkórè lórí hẹ́kítà àti lórí éékà láti inú ìkórè tí o ti wọ̀n", standard: "kí o sì lo ìtóbi ilẹ̀ tó tọ́, kí o sì fi ìṣirò rẹ hàn" }
  ],
  chapters: [
    {
      name: "Orí 1: Bíbẹ̀rẹ̀ irè oko dáadáa",
      lessons: [
        {
          title: "Yíyan oríṣi àti ríra irúgbìn tí a fọwọ́ sí",
          objectives: ["O1"],
          minutes: 5,
          goal: "Yan oríṣi tó bá agbègbè rẹ mu, kí o sì dárúkọ ibi tí a forúkọ rẹ̀ sílẹ̀ tí o ti lè ra irúgbìn tí a fọwọ́ sí tàbí igi ẹ̀gẹ́ tí kò ní àrùn.",
          text: [
            "Oríṣi (variety) jẹ́ irú irè oko kan tí a ṣe fún àwọn ànímọ́ kan: kí ó tètè gbó tàbí kí ó pẹ́ gbó, kí ó fara da ọ̀gbẹlẹ̀, kí ó kọjú ìjà sí àrùn, àwọ̀ ọkà rẹ̀ tàbí bí ó ṣe ń dára tó nínú sísè. Àwọn ilé-iṣẹ́ ìwádìí orílẹ̀-èdè ń dán àwọn oríṣi wò, wọ́n sì ń tú wọn sílẹ̀ fún agbègbè kọ̀ọ̀kan: KALRO ní Kenya, àwọn ilé-iṣẹ́ ìwádìí Nàìjíríà tí wọ́n ń bá IITA ṣiṣẹ́, CSIR-Crops Research Institute ní Ghana, àti CNRA ní Côte d'Ivoire. IITA ń ṣiṣẹ́ lórí ẹ̀gẹ́, àgbàdo, ẹ̀wà cowpea àti sóyà, AfricaRice, tí ó wà ní Abidjan, sì ń ṣiṣẹ́ lórí ìrẹsì. Béèrè lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ àwọn oríṣi tí wọ́n dámọ̀ràn fún agbègbè rẹ, òjò ibẹ̀ àti ọjà rẹ.",
            "Yan èyí tó bá ipò rẹ mu: oríṣi tí ó tètè gbó fún òjò kúkúrú tàbí agbègbè gbígbẹ, oríṣi tí ó fara da àrùn tàbí tí ó kọjú ìjà sí i níbi tí àrùn kan ti wọ́pọ̀ (fún àpẹẹrẹ maize lethal necrosis tàbí cassava brown streak), àti ohun tí àwọn olùrà fẹ́ (àgbàdo funfun tàbí àgbàdo yẹ́lò, ìrẹsì fún parboiling, ẹ̀gẹ́ dídùn tàbí ẹ̀gẹ́ kíkorò).",
            "Irúgbìn tí a fọwọ́ sí (certified seed) ni irúgbìn tí àjọ ìjọba tó ń bójú tó irúgbìn ti yẹ̀ wò fún mímọ́ àti agbára híhù. Ní Kenya, KEPHIS ló ń fọwọ́ sí irúgbìn, ó sì ń tẹ National Crop Variety List jáde, àwọn àpò irúgbìn tí a fọwọ́ sí sì ní àmì KEPHIS tí o lè ṣàyẹ̀wò. Ní Nàìjíríà, National Agricultural Seed Council (NASC) ló ń fọwọ́ sí irúgbìn. Ra àpò tí a dì pa, tí ó ní àmì, lọ́wọ́ olùtajà tí a forúkọ rẹ̀ sílẹ̀. O gbọ́dọ̀ ra irúgbìn àgbàdo hybrid tuntun ní ìgbà oko kọ̀ọ̀kan, nítorí iye ìkórè máa ń dín kù tí o bá tún gbin ọkà rẹ̀. O lè tọ́jú irúgbìn àwọn oríṣi OPV àti ẹ̀wà fún ìgbà oko díẹ̀ tí o bá ṣà irúgbìn tó mọ́ láti ara ohun ọ̀gbìn tó ní ìlera. Fún ẹ̀gẹ́, gba igi ẹ̀gẹ́ tí kò ní àrùn lọ́wọ́ olùsọdipúpọ̀ tí a ti yẹ̀ wò tàbí láti oko tó ní ìlera, má ṣe gbà á láti oko tí mosaic tàbí brown streak wà láéláé. Fún sóyà, béèrè nípa inoculant (rhizobium) níbi tí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ bá dámọ̀ràn rẹ̀."
          ],
          steps: ["Béèrè lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ àwọn oríṣi tí wọ́n dámọ̀ràn fún agbègbè rẹ àti òjò ibẹ̀.", "Yan èyí tó dára fún àkókò gbígbó, agbára láti kọjú ìjà sí àrùn àti ohun tí àwọn olùrà fẹ́.", "Ṣàyẹ̀wò oríṣi náà nínú àkọsílẹ̀ orílẹ̀-èdè níbi tí ó bá wà (fún àpẹẹrẹ KEPHIS ní Kenya).", "Ra irúgbìn tí a fọwọ́ sí, tí a dì pa, tí ó ní àmì, lọ́wọ́ olùtajà tí a forúkọ rẹ̀ sílẹ̀; ṣàyẹ̀wò ọjọ́ àti àmì rẹ̀.", "Fún ẹ̀gẹ́, gba igi ẹ̀gẹ́ tí kò ní àrùn lọ́wọ́ olùsọdipúpọ̀ tí a ti yẹ̀ wò tàbí láti oko tó ní ìlera."],
          words: [["Oríṣi (variety)", "irú irè oko kan tí a ṣe fún àwọn ànímọ́ kan, bí títètè gbó tàbí kíkọjú ìjà sí àrùn."], ["Irúgbìn tí a fọwọ́ sí (certified seed)", "irúgbìn tí àjọ ìjọba tó ń bójú tó irúgbìn ti yẹ̀ wò fún mímọ́ àti agbára híhù."], ["Hybrid", "irúgbìn tí a rí láti inú pípa oríṣi òbí méjì pọ̀; ó ń so dáadáa, ṣùgbọ́n o gbọ́dọ̀ ra tuntun ní ìgbà oko kọ̀ọ̀kan."], ["OPV", "open-pollinated variety: irúgbìn tí o lè tọ́jú kí o sì tún gbìn fún ìgbà oko díẹ̀ tí o bá pa á mọ́ ní mímọ́."], ["Inoculant", "ohun tí ó ní àwọn bakitéríà olùrànlọ́wọ́ tí ó ń ran ẹ̀wà bí sóyà lọ́wọ́ láti mú nitrogen sínú ilẹ̀."]],
          slides: [
            { title: "Oríṣi ń wá láti ilé-iṣẹ́ ìwádìí", bullets: ["Kenya: KALRO; Ghana: CSIR-Crops Research Institute", "Côte d'Ivoire: CNRA; ìrẹsì: AfricaRice", "Ẹ̀gẹ́, ẹ̀wà cowpea, sóyà, àgbàdo: IITA"] },
            { title: "Yan èyí tó bá ipò rẹ mu", bullets: ["Oríṣi tí ó tètè gbó fún ìgbà òjò kúkúrú tàbí gbígbẹ", "Agbára láti kọjú ìjà sí àrùn agbègbè rẹ", "Ohun tí àwọn olùrà rẹ fẹ́"] },
            { title: "Irúgbìn tí a fọwọ́ sí", bullets: ["Kenya: àmì KEPHIS tí o lè ṣàyẹ̀wò", "Nàìjíríà: ìfọwọ́sí NASC", "Àpò tí a dì pa, tí ó ní àmì, olùtajà tí a forúkọ rẹ̀ sílẹ̀"] },
            { title: "Hybrid, OPV àti igi ẹ̀gẹ́", bullets: ["Àgbàdo hybrid: ra tuntun ní ìgbà oko kọ̀ọ̀kan", "OPV àti ẹ̀wà: tọ́jú irúgbìn tó mọ́ fún ìgbà oko díẹ̀", "Ẹ̀gẹ́: igi tí kò ní àrùn, má ṣe gbà á láti oko tí àrùn wà láéláé"] }
          ],
          sources: [KEPHIS, NASC, KALRO, IITA, AFRICARICE],
          tryIt: "Fún irè oko pàtàkì kan tí o máa gbìn ní ìgbà oko tó ń bọ̀, béèrè lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí olùtajà ohun èlò oko fún oríṣi méjì tí wọ́n dámọ̀ràn. Kọ àkókò gbígbó wọn, agbára wọn láti kọjú ìjà sí àrùn, àti ibi tí o ti lè ra irúgbìn tí a fọwọ́ sí tàbí igi ẹ̀gẹ́ tí kò ní àrùn sílẹ̀. Tí o bá wà ní Kenya, ṣàyẹ̀wò oríṣi náà àti olùtajà náà nínú àkọsílẹ̀ KEPHIS.",
          youCanNow: "yan oríṣi tó bá agbègbè rẹ mu, kí o sì ra irúgbìn tí a fọwọ́ sí tàbí igi ẹ̀gẹ́ tí kò ní àrùn láti ibi tí a forúkọ rẹ̀ sílẹ̀.",
          quickCheck: [
            { objective: "O1", q: "O gbin àgbàdo hybrid ní ìgbà oko tó kọjá. Ṣé o lè tún gbin ọkà tí o kórè?", options: ["Bẹ́ẹ̀ ni, yóò so bákan náà", "Bẹ́ẹ̀ ni, tí o bá gbìn ín súnmọ́ ara wọn", "Rárá, iye ìkórè máa dín kù; ra irúgbìn hybrid tuntun tí a fọwọ́ sí", "Tí o bá rẹ ẹ́ sínú omi nìkan"], answer: 2, why: "Irúgbìn hybrid máa ń pàdánù agbára rẹ̀ ní ìran tó tẹ̀lé e, nítorí náà o nílò irúgbìn tuntun ní ìgbà oko kọ̀ọ̀kan." },
            { objective: "O1", q: "Ewé ẹ̀gẹ́ aládùúgbò rẹ ní àmì mosaic yẹ́lò. Ó fẹ́ fún ọ ní igi ẹ̀gẹ́. Kí ni o máa ṣe?", options: ["Gbà á; igi ẹ̀gẹ́ jẹ́ ọ̀fẹ́", "Kọ̀ ọ́, kí o sì gba igi tí kò ní àrùn lọ́wọ́ olùsọdipúpọ̀ tí a ti yẹ̀ wò tàbí láti oko tó ní ìlera", "Gbà á kí o sì gbìn ín sẹ́gbẹ̀ẹ́ ọ̀nà", "Gba àwọn igi orí nìkan"], answer: 1, why: "Àwọn àrùn virus ẹ̀gẹ́ ń rìn nínú igi ẹ̀gẹ́, nítorí náà oko tí àrùn wà ń tàn án sí oko rẹ." }
          ]
        },
        {
          title: "Ìmúra ilẹ̀ àti iye ohun ọ̀gbìn",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣírò iye ohun ọ̀gbìn lórí hẹ́kítà àti lórí éékà láti inú àlàfo, àti irúgbìn tàbí igi ẹ̀gẹ́ tí o nílò.",
          text: [
            "Mú ilẹ̀ sílẹ̀ fún irè oko náà. Ṣán oko láìsun ún, kí o sì fi ìyókù ohun ọ̀gbìn sílẹ̀ bí ìbora ilẹ̀ níbi tí o bá ti lè ṣe é. Àgbàdo, ẹ̀wà àti ẹ̀pà nílò ilẹ̀ tó le dáadáa tí ó ní erùpẹ̀ kíkúnná yí irúgbìn ká; ọ̀nà ìtúlẹ̀ díẹ̀ (minimum tillage) tàbí kòtò gbígbìn ń ṣiṣẹ́ ní ọ̀pọ̀ agbègbè. Ní Nàìjíríà àti Ghana, a sábà máa ń gbin ẹ̀gẹ́ sórí ebè tàbí òkìtì tí omi ń ṣàn kúrò níbẹ̀ dáadáa. Ìrẹsì ilẹ̀ olómi nílò bèbè (bund), oko tí ó tẹ́jú, àti ìṣàkóso omi tó dára; a sábà máa ń ṣe puddling fún ìrẹsì tí a ń tún gbìn (transplant).",
            "Iye ohun ọ̀gbìn (plant population) ni iye ohun ọ̀gbìn lórí hẹ́kítà kan. Tí ohun ọ̀gbìn bá kéré jù, ilẹ̀ máa ṣòfò; tí wọ́n bá pọ̀ jù, wọ́n máa bá ara wọn du ìmọ́lẹ̀, omi àti oúnjẹ. Lo àlàfo tí ìwé ìtọ́sọ́nà àgbẹ̀ rẹ fún oríṣi àti agbègbè rẹ. Láti ṣírò: ilẹ̀ fún ohun ọ̀gbìn kan = àlàfo láàárín ìlà x àlàfo láàárín ohun ọ̀gbìn (ní mítà). Ohun ọ̀gbìn lórí hẹ́kítà = 10,000 m2 / ilẹ̀ fún ohun ọ̀gbìn kan. Ohun ọ̀gbìn lórí éékà = 4,047 m2 / ilẹ̀ fún ohun ọ̀gbìn kan (éékà kan jẹ́ nǹkan bí 4,047 m2, hẹ́kítà kan sì jẹ́ nǹkan bí 2.47 éékà).",
            "Àpẹẹrẹ ìṣirò, tí ìwé ìtọ́sọ́nà rẹ bá fún ọ ní àwọn àlàfo yìí: àgbàdo ní 75 cm x 25 cm, irúgbìn kan nínú ihò kọ̀ọ̀kan: 0.75 x 0.25 = 0.1875 m2, nítorí náà 10,000 / 0.1875 = nǹkan bí 53,300 ohun ọ̀gbìn lórí hẹ́kítà, tàbí 4,047 / 0.1875 = nǹkan bí 21,600 lórí éékà. Ẹ̀gẹ́ ní 1 m x 1 m: 10,000 ohun ọ̀gbìn lórí hẹ́kítà, nǹkan bí 4,000 lórí éékà. Ìrẹsì tí a tún gbìn ní 20 cm x 20 cm: 0.04 m2, nítorí náà 250,000 ìdì (hill) lórí hẹ́kítà. Ẹ̀wà ní 50 cm x 10 cm: 0.05 m2, nítorí náà 200,000 ohun ọ̀gbìn lórí hẹ́kítà.",
            "Irúgbìn tí o nílò: iye irúgbìn / iye irúgbìn nínú kg kan (ka irúgbìn 100 kí o sì wọ̀n wọ́n, tàbí ka á lórí àpò) = kg, pẹ̀lú nǹkan bí 10% fún àwọn àlàfo tó ṣófo. Fún ẹ̀gẹ́, ka iye igi (nígbà púpọ̀ nǹkan bí 20 sí 25 cm ní gígùn, láti ara igi tó ti gbó), pẹ̀lú díẹ̀ sí i. Lẹ́yìn náà, gbin sí àwọn àlàfo tó ṣófo láàárín ọ̀sẹ̀ kan tàbí méjì lẹ́yìn tí ohun ọ̀gbìn bá hù."
          ],
          steps: ["Wọn oko rẹ ní mítà; ìtóbi = gígùn x ìbú.", "Gba àlàfo tí wọ́n dámọ̀ràn fún oríṣi àti agbègbè rẹ.", "Ilẹ̀ fún ohun ọ̀gbìn kan = àlàfo ìlà x àlàfo ohun ọ̀gbìn (ní mítà).", "Ohun ọ̀gbìn lórí hẹ́kítà = 10,000 / ilẹ̀ fún ohun ọ̀gbìn kan; lórí éékà = 4,047 / ilẹ̀ fún ohun ọ̀gbìn kan.", "Ohun ọ̀gbìn lórí oko rẹ = ìtóbi oko / ilẹ̀ fún ohun ọ̀gbìn kan.", "Irúgbìn: iye ohun ọ̀gbìn / iye irúgbìn nínú kg kan, pẹ̀lú nǹkan bí 10%."],
          words: [["Iye ohun ọ̀gbìn (plant population)", "iye ohun ọ̀gbìn lórí hẹ́kítà kan tàbí lórí éékà kan."], ["Hẹ́kítà (ha)", "ilẹ̀ tí ó jẹ́ 10,000 mítà níbùú lóròó (m2), nǹkan bí 2.47 éékà."], ["Éékà (acre)", "ilẹ̀ tí ó jẹ́ nǹkan bí 4,047 mítà níbùú lóròó (m2), nǹkan bí 0.4 hẹ́kítà."], ["Bèbè (bund)", "ògiri erùpẹ̀ kékeré tí ó yí oko ìrẹsì ká, tí ó ń di omi mú."], ["Puddling", "títú ilẹ̀ tútù nínú oko ìrẹsì láti ṣe ẹrẹ̀ rírọ̀ tí ó ń di omi mú, tí ó sì ń dá èpò dúró."]],
          slides: [
            { title: "Mú ilẹ̀ sílẹ̀ fún irè oko náà", bullets: ["Má ṣe sun oko; fi ìyókù ohun ọ̀gbìn sílẹ̀ bí ìbora", "Ilẹ̀ kíkúnná fún àgbàdo, ẹ̀wà, ẹ̀pà", "Ebè tàbí òkìtì fún ẹ̀gẹ́; bèbè àti oko tí ó tẹ́jú fún ìrẹsì"] },
            { title: "Ìlànà ìṣirò iye ohun ọ̀gbìn", bullets: ["Ilẹ̀ fún ohun ọ̀gbìn kan = àlàfo ìlà x àlàfo ohun ọ̀gbìn (m)", "Lórí hẹ́kítà = 10,000 / ilẹ̀ fún ohun ọ̀gbìn kan", "Lórí éékà = 4,047 / ilẹ̀ fún ohun ọ̀gbìn kan"] },
            { title: "Àpẹẹrẹ ìṣirò", bullets: ["Àgbàdo 75 x 25 cm: nǹkan bí 53,300/ha, 21,600/éékà", "Ẹ̀gẹ́ 1 x 1 m: 10,000/ha", "Ìrẹsì 20 x 20 cm: 250,000 ìdì/ha"] },
            { title: "Irúgbìn mélòó ni o nílò?", bullets: ["Iye ohun ọ̀gbìn / iye irúgbìn nínú kg kan, pẹ̀lú nǹkan bí 10%", "Ka irúgbìn 100 kí o sì wọ̀n wọ́n tí àpò kò bá sọ", "Gbin sí àlàfo tó ṣófo láàárín ọ̀sẹ̀ kan tàbí méjì"] }
          ],
          sources: [KALRO, IITA],
          tryIt: "Wọn ọ̀kan lára oko rẹ (tàbí lo ìtóbi rẹ̀ ní éékà x 4,047 láti rí mítà níbùú lóròó). Gba àlàfo fún irè oko rẹ lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, lẹ́yìn náà ṣírò iye ohun ọ̀gbìn lórí hẹ́kítà, lórí éékà àti lórí oko rẹ, àti iye irúgbìn tàbí igi ẹ̀gẹ́ tí o máa rà.",
          youCanNow: "ṣírò iye ohun ọ̀gbìn lórí hẹ́kítà àti lórí éékà láti inú àlàfo, àti iye irúgbìn tàbí igi ẹ̀gẹ́ tí o nílò.",
          quickCheck: [
            { objective: "O2", q: "A gbin ẹ̀gẹ́ ní 1 m x 1 m. Ohun ọ̀gbìn mélòó ló wà lórí hẹ́kítà kan?", options: ["1,000", "4,047", "100,000", "10,000"], answer: 3, why: "Ohun ọ̀gbìn kọ̀ọ̀kan ń lo 1 m2, hẹ́kítà kan sì jẹ́ 10,000 m2." },
            { objective: "O2", q: "Oko kan jẹ́ hẹ́kítà 0.5, àgbàdo sì nílò nǹkan bí 53,300 ohun ọ̀gbìn lórí hẹ́kítà. Nǹkan bí ohun ọ̀gbìn mélòó ni o nílò?", options: ["26,650", "53,300", "106,600", "5,330"], answer: 0, why: "0.5 x 53,300 = 26,650 ohun ọ̀gbìn." }
          ]
        },
        {
          title: "Ajílẹ̀ àti kíkọ èpò lásìkò",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ṣètò gbígbìn, ajílẹ̀ àti kíkọ èpò sórí kàlẹ́ńdà tí ó ní ọjọ́ fún irè oko rẹ.",
          text: [
            "A kọ́ àyẹ̀wò ilẹ̀, ìgbẹ́ ẹran, compost àti ajílẹ̀ nínú \"Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀\"; lo àyẹ̀wò ilẹ̀ rẹ tàbí ìmọ̀ràn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ láti mọ ohun tí o máa lò àti iye rẹ̀. Ohun tó yàtọ̀ láti irè oko kan sí òmíràn ni ìgbà tí ọ̀kọ̀ọ̀kan nílò oúnjẹ àti oúnjẹ wo ló nílò jù. Àgbàdo fẹ́ nitrogen gan-an, ó sì nílò rẹ̀ ní kùtùkùtù àti lẹ́ẹ̀kan sí i bí ó ṣe ń dàgbà kíákíá. Ẹ̀wà àti irú rẹ̀ (ẹ̀wà, ẹ̀wà cowpea, ẹ̀pà, sóyà) ń ṣe ọ̀pọ̀ nitrogen tiwọn fúnra wọn nípasẹ̀ àwọn kókó gbòǹgbò (root nodules), nítorí náà wọ́n nílò phosphorus ju nitrogen lọ. Ẹ̀gẹ́ ń hù lórí ilẹ̀ tí kò lọ́ràá, ṣùgbọ́n ó ń fa ọ̀pọ̀ potassium kúrò nínú ilẹ̀ bí àkókò ti ń lọ. A sábà máa ń fún ìrẹsì ní nitrogen ní ìpín-ìpín; nitrogen tí ó pọ̀ jù máa ń mú rice blast burú sí i.",
            "Èpò ń jí omi, ìmọ́lẹ̀ àti oúnjẹ jù lọ ní àwọn ọ̀sẹ̀ àkọ́kọ́ lẹ́yìn tí irè oko bá hù. Èyí ni àkókò tó ṣe pàtàkì (critical period): nígbà yẹn ni èpò ń dín iye ìkórè kù jù, kíkọ èpò lẹ́yìn náà kò sì lè dá a padà. Ọ̀pọ̀ ìwé ìtọ́sọ́nà dámọ̀ràn kíkọ èpò àkọ́kọ́ ní nǹkan bí ọ̀sẹ̀ méjì sí mẹ́ta lẹ́yìn tí irè oko bá hù, àti èkejì ní ọ̀sẹ̀ díẹ̀ lẹ́yìn náà; ṣàyẹ̀wò ìwé ìtọ́sọ́nà agbègbè rẹ. Ẹ̀gẹ́ máa ń dàgbà díẹ̀díẹ̀ ní ìbẹ̀rẹ̀, a sì gbọ́dọ̀ pa á mọ́ láìní èpò fún nǹkan bí oṣù mẹ́ta àkọ́kọ́, títí ewé rẹ̀ yóò fi bo ilẹ̀. Nínú ìrẹsì ilẹ̀ olómi, títẹ́ ilẹ̀ dáadáa àti fífi omi sílẹ̀ lórí oko ń ràn lọ́wọ́ láti dá èpò dúró.",
            "Oògùn èpò (herbicide) lè dín iṣẹ́ ọwọ́ kù, ṣùgbọ́n a gbọ́dọ̀ ti forúkọ rẹ̀ sílẹ̀ fún irè oko rẹ (PCPB ní Kenya, NAFDAC ní Nàìjíríà), kí o sì lò ó bí àmì rẹ̀ ṣe sọ, pẹ̀lú aṣọ àti ohun èlò ààbò. Kọ gbogbo rẹ̀ sórí kàlẹ́ńdà tí o kà láti ọjọ́ gbígbìn, kí iṣẹ́ àti owó lè wà ní sẹpẹ́ lásìkò."
          ],
          steps: ["Kọ ọjọ́ tí o máa gbìn.", "Fi ìmúra ilẹ̀ kún un ní àwọn ọ̀sẹ̀ tó ṣáájú rẹ̀.", "Fi ajílẹ̀ kún un bí àyẹ̀wò ilẹ̀ rẹ tàbí òṣìṣẹ́ ìtọ́sọ́nà ṣe dámọ̀ràn, ní ìpele ìdàgbà tó tọ́.", "Fi kíkọ èpò àkọ́kọ́ kún un nínú àwọn ọ̀sẹ̀ àkọ́kọ́ tó ṣe pàtàkì, àti àwọn tó tẹ̀lé e.", "Kọ ìgbà tí o máa nílò òṣìṣẹ́, ohun èlò àti owó fún iṣẹ́ kọ̀ọ̀kan."],
          words: [["Àkókò tó ṣe pàtàkì (critical period)", "àwọn ọ̀sẹ̀ àkọ́kọ́ tí èpò ń dín iye ìkórè kù jù; o gbọ́dọ̀ kọ èpò nígbà náà."], ["Kókó gbòǹgbò (root nodules)", "àwọn ìwú kékeré lórí gbòǹgbò ẹ̀wà níbi tí bakitéríà ti ń sọ nitrogen inú afẹ́fẹ́ di oúnjẹ ohun ọ̀gbìn."], ["Ìpín-ìpín (split dose)", "fífún irè oko ní ajílẹ̀ ní apá méjì tàbí jù bẹ́ẹ̀ lọ ní ìpele ìdàgbà ọ̀tọ̀ọ̀tọ̀, dípò gbogbo rẹ̀ lẹ́ẹ̀kan."], ["Oògùn èpò (herbicide)", "kẹ́míkà tí ó ń pa èpò; a gbọ́dọ̀ ti forúkọ rẹ̀ sílẹ̀, kí a sì lò ó bí àmì rẹ̀ ṣe sọ."]],
          slides: [
            { title: "Ọ̀rá ilẹ̀: wo Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀", bullets: ["Lo àyẹ̀wò ilẹ̀ rẹ tàbí ìmọ̀ràn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀", "Ẹ̀kọ́ yìí: ohun tó yàtọ̀ láti irè oko kan sí òmíràn"] },
            { title: "Ohun tí irè oko kọ̀ọ̀kan nílò jù", bullets: ["Àgbàdo: nitrogen, ní kùtùkùtù àti bí ó ṣe ń dàgbà", "Ẹ̀wà: phosphorus; wọ́n ń ṣe nitrogen tiwọn", "Ẹ̀gẹ́: potassium bí àkókò ti ń lọ; ìrẹsì: nitrogen ní ìpín-ìpín"] },
            { title: "Kọ èpò ní àkókò tó ṣe pàtàkì", bullets: ["Àwọn ọ̀sẹ̀ àkọ́kọ́ lẹ́yìn híhù ló ṣe pàtàkì jù", "Kíkọ èpò àkọ́kọ́ sábà máa ń jẹ́ ní nǹkan bí ọ̀sẹ̀ 2 sí 3; ṣàyẹ̀wò ní agbègbè rẹ", "Ẹ̀gẹ́: pa á mọ́ láìní èpò fún nǹkan bí oṣù 3 àkọ́kọ́"] },
            { title: "Kọ ọ́ sórí kàlẹ́ńdà", bullets: ["Kà á láti ọjọ́ gbígbìn", "Òṣìṣẹ́, ohun èlò àti owó wà ní sẹpẹ́ lásìkò", "Oògùn èpò: tí a forúkọ rẹ̀ sílẹ̀, tẹ̀lé àmì, ohun èlò ààbò (PPE)"] }
          ],
          sources: [HANDBOOK_4R, PCPB, NAFDAC],
          tryIt: "Kọ kàlẹ́ńdà fún irè oko rẹ, bẹ̀rẹ̀ láti ọjọ́ tí o fẹ́ gbìn: ìmúra ilẹ̀, gbígbìn, ajílẹ̀ kọ̀ọ̀kan tí àyẹ̀wò ilẹ̀ rẹ tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ dámọ̀ràn, àti kíkọ èpò kọ̀ọ̀kan. Fi àwọ̀ ọ̀tọ̀ sàmì sí àkókò kíkọ èpò tó ṣe pàtàkì.",
          youCanNow: "ṣètò ajílẹ̀ àti kíkọ èpò sórí kàlẹ́ńdà tí ó ní ọjọ́, kí o lè ṣàkóso èpò ní àwọn ọ̀sẹ̀ àkọ́kọ́ tó ṣe pàtàkì.",
          quickCheck: [
            { objective: "O3", q: "Ìgbà wo ni èpò ń dín iye ìkórè kù jù?", options: ["Kí ìkórè tó dé díẹ̀", "Ní àwọn ọ̀sẹ̀ àkọ́kọ́ lẹ́yìn tí irè oko bá hù", "Lẹ́yìn ìkórè", "Ní ìgbà ẹ̀rùn nìkan"], answer: 1, why: "Àkókò tó ṣe pàtàkì ni àwọn ọ̀sẹ̀ àkọ́kọ́; kíkọ èpò lẹ́yìn náà kò lè dá iye ìkórè yẹn padà." },
            { objective: "O3", q: "Irè oko wo ló ń ṣe ọ̀pọ̀ nitrogen tirẹ̀ fúnra rẹ̀ nípasẹ̀ kókó gbòǹgbò?", options: ["Àgbàdo", "Ìrẹsì", "Ẹ̀gẹ́", "Ẹ̀wà"], answer: 3, why: "Ẹ̀wà àti irú rẹ̀ ń mú nitrogen pẹ̀lú ìrànlọ́wọ́ bakitéríà nínú kókó gbòǹgbò wọn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bíbẹ̀rẹ̀ irè oko dáadáa",
        questions: [
          { objective: "O1", q: "Ní Kenya, àjọ wo ló ń fọwọ́ sí irúgbìn, tí ó sì ń tẹ National Crop Variety List jáde?", options: ["KEPHIS", "Ọ́fíìsì ọ̀nà county", "Ọjà àdúgbò", "Báńkì"], answer: 0, why: "KEPHIS ló ń fọwọ́ sí irúgbìn, tí ó sì ń kọ àwọn oríṣi tí a ti tú sílẹ̀ sínú àkọsílẹ̀ ní Kenya." },
          { objective: "O1", q: "Òjò kúkúrú sábà máa ń rọ̀ ní agbègbè rẹ. Ànímọ́ oríṣi wo ló ṣe pàtàkì jù?", options: ["Pípẹ́ gbó", "Títètè gbó", "Igi gíga", "Ọkà pupa"], answer: 1, why: "Oríṣi tí ó tètè gbó máa ń parí kí òjò tó dá." },
          { objective: "O2", q: "Àgbàdo ní 75 cm x 25 cm ń lo ilẹ̀ tí ó tó mélòó fún ohun ọ̀gbìn kan?", options: ["1 m2", "0.25 m2", "0.1875 m2", "0.75 m2"], answer: 2, why: "0.75 m x 0.25 m = 0.1875 m2." },
          { objective: "O2", q: "Nǹkan bí mítà níbùú lóròó (m2) mélòó ló wà nínú éékà kan?", options: ["10,000", "1,000", "2,470", "4,047"], answer: 3, why: "Éékà kan jẹ́ nǹkan bí 4,047 m2; hẹ́kítà kan jẹ́ 10,000 m2." },
          { objective: "O3", q: "Níbo ni ẹ̀kọ́ yìí rán ọ lọ fún ìwọ̀n ajílẹ̀?", options: ["Àyẹ̀wò ilẹ̀ rẹ àti òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, bí ó ṣe wà nínú Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀", "Àpò tó tóbi jù nínú ṣọ́ọ̀bù", "Ohunkóhun tí aládùúgbò lò", "Iye kan náà fún gbogbo irè oko"], answer: 0, why: "Ìwọ̀n ajílẹ̀ dá lórí ilẹ̀ àti irè oko rẹ, nítorí náà ó ń wá láti inú àyẹ̀wò ilẹ̀ tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Dídáàbò bo irè oko àti wíwọn rẹ̀",
      lessons: [
        {
          title: "Àwọn àrùn pàtàkì: maize lethal necrosis, àrùn ẹ̀gẹ́ àti rice blast",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dá maize lethal necrosis, cassava mosaic, cassava brown streak àti rice blast mọ̀, kí o sì yan ohun àkọ́kọ́ tí o máa ṣe.",
          text: [
            "Maize lethal necrosis (MLN), àrùn tí ó ń pa àgbàdo, kọlu Kenya gidigidi láti ọdún 2011, ó sì tàn ká Ìlà-Oòrùn Áfíríkà. CIMMYT ṣàlàyé pé ó máa ń ṣẹlẹ̀ nígbà tí kòkòrò àrùn (virus) méjì bá kọlu àgbàdo pọ̀: maize chlorotic mottle virus àti potyvirus kan bí sugarcane mosaic virus. Ewé máa ń ní àmì yẹ́lò ṣákaṣàka, lẹ́yìn náà ó máa gbẹ láti etí wọnú; àárín ohun ọ̀gbìn náà lè kú, àwọn ṣẹ́ẹ̀rí àgbàdo sì máa kéré, ṣófo tàbí jẹrà. Àwọn kòkòrò bí thrips àti aphids ń tàn án kálẹ̀ nínú oko, irúgbìn tí ó ní àrùn sì lè gbé e lọ sí ọ̀nà jíjìn. Ohun tí o máa ṣe: gbin irúgbìn tí a fọwọ́ sí ti oríṣi tí ó fara da MLN, má ṣe gbin àgbàdo fún ìgbà oko kan pẹ̀lú àwọn aládùúgbò rẹ, fa àgbàdo tí ó hù fúnra rẹ̀ tu, kọ èpò, fa àwọn ohun ọ̀gbìn tí ó ní àrùn tu ní kùtùkùtù kí o sì pa wọ́n run, kí o sì sọ fún òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀.",
            "Cassava mosaic disease (CMD) máa ń mú kí ewé ẹ̀gẹ́ ní àbàwọ́n yẹ́lò àti ewé (mosaic), kí ó yí, kí ó sì kéré, ó sì máa ń dí ìdàgbà ohun ọ̀gbìn lọ́wọ́. Cassava brown streak disease (CBSD) máa ń fi àbàwọ́n yẹ́lò hàn lẹ́gbẹ̀ẹ́ iṣan ewé àgbà àti ìlà àwọ̀ ilẹ̀ lórí igi, ṣùgbọ́n ìbàjẹ́ tó burú jù ń farapamọ́: gbòǹgbò (isu) máa ń jẹrà, ó máa le, ó máa di àwọ̀ ilẹ̀, ó sì máa gbẹ, nígbà míì nígbà tí ewé ṣì dà bí ẹni pé ó ní ìlera. IITA fojú díwọ̀n pé àrùn méjì yìí ń ná Áfíríkà nǹkan bí US$1 billion lọ́dún. Kòkòrò whitefly ń tan àwọn méjèèjì kálẹ̀, ṣùgbọ́n ọ̀nà pàtàkì tí wọ́n fi ń rìn lọ sí ọ̀nà jíjìn ni àwọn àgbẹ̀ tí ń pín igi ẹ̀gẹ́ tí ó ní àrùn. Ohun tí o máa ṣe: gbin igi tí kò ní àrùn ti oríṣi tí ó fara dà á, fa àwọn ohun ọ̀gbìn tí ó ní àrùn tu ní kùtùkùtù kí o sì pa wọ́n run, má ṣe gba igi láti oko tí àrùn wà láéláé, àti ní Ìlà-Oòrùn Áfíríkà, wa isu díẹ̀ láti wo ìjẹrà àwọ̀ ilẹ̀ kí o tó kórè.",
            "Rice blast jẹ́ àrùn olu (fungus), ó sì jẹ́ ìṣòro ńlá ní Ìwọ̀-Oòrùn Áfíríkà. Lórí ewé, ó máa ń ṣe àbàwọ́n tí ó rí bí dáyámọ́ǹdì tàbí ojú, tí àárín rẹ̀ jẹ́ eérú, tí etí rẹ̀ sì jẹ́ àwọ̀ ilẹ̀. Tí ó bá kọlu ọrùn lábẹ́ orí ìrẹsì (panicle), orí náà máa di funfun, ó sì máa ṣófo. Ìwádìí pẹ̀lú AfricaRice rí i pé oríṣi tí ó kọjú ìjà sí i ni ọ̀nà ìṣàkóso tí ó wọ́n jù lọ fún àgbẹ̀ kékeré, ṣùgbọ́n olu náà lè borí agbára yẹn ní ọdún díẹ̀ lẹ́yìn tí ọ̀pọ̀ ènìyàn bá ti ń gbin oríṣi kan, nítorí náà oríṣi tuntun ṣe pàtàkì. Ohun tí o máa ṣe: gbin oríṣi tí wọ́n dámọ̀ràn pé ó kọjú ìjà sí i, má ṣe lo nitrogen jù, má ṣe jẹ́ kí ọ̀gbẹlẹ̀ kọlu ìrẹsì orí òkè, lo irúgbìn tó mọ́, kí o sì kó ìyókù ohun ọ̀gbìn tí ó ní àrùn kúrò. Lo oògùn olu (fungicide) kìkì tí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ bá dámọ̀ràn rẹ̀ tí a sì ti forúkọ rẹ̀ sílẹ̀ fún ìrẹsì."
          ],
          steps: ["Yẹ oko wò ní ọ̀sẹ̀ kọ̀ọ̀kan; fi ohun tí o rí wé àwọn àmì inú ẹ̀kọ́ yìí.", "Ya fọ́tò àwọn ohun ọ̀gbìn tí ó ní àrùn, kí o sì ní kí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí ilé ìwòsàn ohun ọ̀gbìn (plant clinic) fìdí rẹ̀ múlẹ̀.", "Fa àwọn ohun ọ̀gbìn tí ó ní àrùn tu ní kùtùkùtù kí o sì pa wọ́n run (MLN àti àrùn virus ẹ̀gẹ́).", "Ní ìgbà oko tó ń bọ̀: irúgbìn tí a fọwọ́ sí tàbí igi tí kò ní àrùn ti oríṣi tí ó fara da àrùn tàbí tí ó kọjú ìjà sí i.", "Bá àwọn aládùúgbò ṣètò yíyí irè oko padà àti ohun ọ̀gbìn tí kò ní àrùn pọ̀."],
          words: [["MLN", "maize lethal necrosis: àrùn tí ó ń wá láti inú virus méjì pa pọ̀, tí ó lè pa àgbàdo."], ["CMD", "cassava mosaic disease: àrùn virus tí ó ń mú kí ewé ẹ̀gẹ́ ní àbàwọ́n, kí ó yí, kí ó sì kéré."], ["CBSD", "cassava brown streak disease: àrùn virus tí ó ń mú kí isu ẹ̀gẹ́ jẹrà, kí ó di àwọ̀ ilẹ̀, kí ó sì gbẹ."], ["Rice blast", "àrùn olu ìrẹsì tí ó ń ṣe àbàwọ́n tí ó rí bí ojú lórí ewé, tí ó sì lè sọ orí ìrẹsì di funfun àti òfo."], ["Rogue (fífà tu)", "fífa àwọn ohun ọ̀gbìn tí ó ní àrùn tu àti pípa wọ́n run kí wọ́n má baà tan àrùn kálẹ̀."]],
          slides: [
            { title: "Maize lethal necrosis (MLN)", bullets: ["Virus méjì pa pọ̀ (CIMMYT)", "Àmì yẹ́lò ṣákaṣàka, ewé ń gbẹ láti etí", "Kòkòrò àti irúgbìn tí ó ní àrùn ló ń tàn án"] },
            { title: "Cassava mosaic àti brown streak", bullets: ["CMD: ewé tí ó ní àbàwọ́n, tí ó yí, tí ó kéré", "CBSD: iṣan ewé yẹ́lò, ìlà lórí igi, isu tí ó jẹrà", "Whitefly àti igi ẹ̀gẹ́ tí a pín ló ń tàn án"] },
            { title: "Rice blast", bullets: ["Àbàwọ́n bí ojú, àárín eérú, etí àwọ̀ ilẹ̀", "Blast ọrùn: orí ìrẹsì funfun, òfo", "Agbára oríṣi láti kọjú ìjà lè yẹ̀ lẹ́yìn ọdún díẹ̀"] },
            { title: "Ohun àkọ́kọ́ tí o máa ṣe", bullets: ["Fìdí rẹ̀ múlẹ̀ pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà tàbí plant clinic", "Fa ohun ọ̀gbìn tí ó ní àrùn tu ní kùtùkùtù", "Ìgbà oko tó ń bọ̀: irúgbìn tó mọ́, oríṣi tí ó fara dà á, yíyí irè oko padà"] }
          ],
          sources: [CIMMYT_MLN, IITA_CASSAVA_VIRUS, JIRCAS_BLAST, AFRICARICE],
          tryIt: "Rìn yí oko rẹ ká (tàbí ti aládùúgbò), kí o sì wá àwọn àmì àrùn tí ó ṣe pàtàkì jù fún irè oko rẹ. Kọ ohun tí o rí sílẹ̀, ya fọ́tò ohunkóhun tí o bá ṣiyèméjì nípa rẹ̀, kí o sì kọ ohun àkọ́kọ́ tí o máa ṣe fún àrùn náà.",
          youCanNow: "dá maize lethal necrosis, cassava mosaic, cassava brown streak àti rice blast mọ̀, kí o sì yan ohun àkọ́kọ́ tí o máa ṣe.",
          quickCheck: [
            { objective: "O4", q: "Ewé ẹ̀gẹ́ rẹ fẹ́rẹ̀ẹ́ dà bí ẹni pé ó ní ìlera, ṣùgbọ́n isu tí o wà jáde ti jẹrà, ó le, ó di àwọ̀ ilẹ̀, ó sì gbẹ. Ohun tí ó ṣeé ṣe jù pé ó fà á ni:", options: ["Cassava brown streak disease", "Òjò tí ó pọ̀ jù nígbà gbígbìn", "Fall armyworm", "Rice blast"], answer: 0, why: "CBSD máa ń mú kí isu jẹrà, nígbà míì pẹ̀lú àmì díẹ̀ lórí ewé." },
            { objective: "O4", q: "Ewé ìrẹsì ní àbàwọ́n tí ó rí bí ojú, tí àárín rẹ̀ jẹ́ eérú, tí etí rẹ̀ sì jẹ́ àwọ̀ ilẹ̀. Kí ni ohun tó dára láti ṣe?", options: ["Fi ajílẹ̀ nitrogen kún un sí i", "Tún gbin irúgbìn kan náà ní ìgbà oko tó ń bọ̀", "Ní kí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ fìdí blast múlẹ̀, kí o sì gbin oríṣi tí ó kọjú ìjà sí i ní ìgbà oko tó ń bọ̀", "Fi omi kún inú ilé"], answer: 2, why: "Àbàwọ́n blast nìyẹn; oríṣi tí ó kọjú ìjà sí i àti nitrogen tí ó wà níwọ̀ntúnwọ̀nsì ni ọ̀nà ìṣàkóso pàtàkì." }
          ]
        },
        {
          title: "Mímọ ìgbà tí o máa kórè",
          objectives: ["O5"],
          minutes: 4,
          goal: "Mọ ìgbà tí àgbàdo, ìrẹsì, ẹ̀gẹ́ tàbí ẹ̀wà rẹ ti ṣetán fún ìkórè.",
          text: [
            "Tí o bá kórè ní kùtùkùtù jù, ọkà máa fúyẹ́, ó sì máa tutù; tí o bá pẹ́ jù, ẹyẹ, eku, òjò, fífọ́nká àti ìjẹrà máa jẹ irè oko rẹ, ọkà sì máa ní ewu aflatoxin (májèlé olu) sí i. A kọ́ gbígbẹ àti ìpamọ́ nínú \"Ìtọ́jú àti Ìpamọ́ Irè Lẹ́yìn Ìkórè\".",
            "Àgbàdo ti gbó nígbà tí ìpele dúdú (black layer) bá hàn níbi tí ọkà ti so mọ́ ṣẹ́ẹ̀rí, tí èèpo rẹ̀ sì ti gbẹ; ṣí èèpo díẹ̀ kí o sì ṣẹ́ ọkà díẹ̀ láti wò ó. Lẹ́yìn náà, sá a gbẹ dáadáa kí o tó tọ́jú rẹ̀. Ìrẹsì ti ṣetán nígbà tí ọ̀pọ̀ jù lọ ọkà orí ìrẹsì bá ti di àwọ̀ wúrà tí wọ́n sì le; dídúró pẹ́ jù máa mú fífọ́nká àti àdánù sí ẹyẹ wá. Ẹ̀wà àti ẹ̀wà cowpea ti ṣetán nígbà tí ọ̀pọ̀ jù lọ pódì bá ti gbẹ tí wọ́n sì ń dún; ká wọn kí wọ́n tó bẹ́. Ẹ̀pà ti ṣetán nígbà tí ewé bá di yẹ́lò tí inú ọ̀pọ̀ jù lọ èèpo bá ti ṣókùnkùn; wa ohun ọ̀gbìn díẹ̀ láti wò ó.",
            "Ẹ̀gẹ́ kò ní ọjọ́ ìkórè kan ṣoṣo: oríṣi kọ̀ọ̀kan ní àkókò gbígbó tirẹ̀, isu sì lè dúró nínú ilẹ̀ fún ìgbà díẹ̀. Ṣùgbọ́n isu tí ó bá pẹ́ jù nínú ilẹ̀ lè le bí igi, àti níbi tí brown streak ti wọ́pọ̀, ìjẹrà máa burú sí i. Tí o bá ti wà á jáde, ẹ̀gẹ́ máa bàjẹ́ láàárín ọjọ́ díẹ̀, nítorí náà kórè ohun tí o lè tà tàbí ṣe kíákíá nìkan. Ní Ghana àti Nàìjíríà, ọ̀pọ̀ àgbẹ̀ ń ṣètò ìkórè wọn bí agbára àwọn tó ń ṣe gààrí tàbí fùfú ṣe tó."
          ],
          steps: ["Mọ àkókò gbígbó oríṣi rẹ láti ara àpò irúgbìn tàbí lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀.", "Yẹ ohun ọ̀gbìn díẹ̀ wò káàkiri oko, kì í ṣe ọ̀kan ṣoṣo.", "Àgbàdo: ìpele dúdú àti èèpo gbígbẹ; ìrẹsì: ọ̀pọ̀ jù lọ ọkà ti di wúrà, wọ́n sì le.", "Ẹ̀wà: pódì gbígbẹ tí ń dún; ẹ̀pà: inú èèpo ti ṣókùnkùn.", "Ẹ̀gẹ́: kórè ohun tí o lè tà tàbí ṣe láàárín ọjọ́ díẹ̀ nìkan."],
          words: [["Ìpele dúdú (black layer)", "àmì dúdú níbi tí ọkà àgbàdo ti so mọ́ ṣẹ́ẹ̀rí; ó fi hàn pé ọkà ti dẹ́kun kíkún."], ["Fífọ́nká (shattering)", "ọkà tàbí pódì tí ó ń jábọ́ tàbí bẹ́ sílẹ̀ nínú oko kí ìkórè tó dé."], ["Àkókò gbígbó (maturity period)", "bí ó ṣe pẹ́ tó láti ìgbà gbígbìn títí di ìgbà ìkórè fún oríṣi kan."]],
          slides: [
            { title: "Kíkórè ní kùtùkùtù tàbí pípẹ́ jù ń fa àdánù", bullets: ["Kùtùkùtù: ọkà fúyẹ́, ó sì tutù", "Pípẹ́: ẹyẹ, eku, òjò, fífọ́nká, ìjẹrà", "Gbígbẹ àti ìpamọ́: wo ẹ̀kọ́ Lẹ́yìn Ìkórè"] },
            { title: "Irè oko ọlọ́kà", bullets: ["Àgbàdo: ìpele dúdú, èèpo gbígbẹ", "Ìrẹsì: ọ̀pọ̀ jù lọ ọkà ti di wúrà, wọ́n sì le", "Yẹ ohun ọ̀gbìn púpọ̀ wò káàkiri oko"] },
            { title: "Ẹ̀wà àti ẹ̀gẹ́", bullets: ["Ẹ̀wà, ẹ̀wà cowpea: pódì gbígbẹ tí ń dún", "Ẹ̀pà: inú èèpo ń ṣókùnkùn", "Ẹ̀gẹ́: ó ń bàjẹ́ láàárín ọjọ́ díẹ̀ lẹ́yìn tí o bá wà á"] }
          ],
          tryIt: "Fún irè oko rẹ, kọ àkókò gbígbó oríṣi rẹ, àwọn àmì tí o máa wò, àti ọjọ́ tí o retí láti bẹ̀rẹ̀ sí í wò ó. Tí irè oko rẹ bá wà nínú oko báyìí, yẹ ohun ọ̀gbìn márùn-ún wò káàkiri oko, kí o sì kọ ohun tí o rí.",
          youCanNow: "mọ ìgbà tí irè oko pàtàkì rẹ ti ṣetán fún ìkórè.",
          quickCheck: [
            { objective: "O5", q: "Báwo ni o ṣe mọ̀ pé ọkà àgbàdo ti dẹ́kun kíkún?", options: ["Ewé ṣì jẹ́ àwọ̀ ewé", "Ìpele dúdú hàn níbi tí ọkà ti so mọ́ ṣẹ́ẹ̀rí", "Irun orí àgbàdo (tassel) yọ", "Òjò ti rọ̀ lẹ́ẹ̀mejì"], answer: 1, why: "Ìpele dúdú fi hàn pé ọkà ti gbó tán." },
            { objective: "O5", q: "Kí ló dé tí o fi gbọ́dọ̀ kórè ẹ̀gẹ́ tí o lè tà tàbí ṣe láàárín ọjọ́ díẹ̀ nìkan?", options: ["Isu ẹ̀gẹ́ máa ń bàjẹ́ kíákíá lẹ́yìn tí a bá wà á", "Isu ẹ̀gẹ́ máa ń tún hù lẹ́yìn tí a bá wà á", "Àwọn olùrà fẹ́ràn isu gbígbẹ", "Ewé ni ọjà pàtàkì"], answer: 0, why: "Isu ẹ̀gẹ́ tútù máa ń bàjẹ́ láàárín ọjọ́ díẹ̀ lẹ́yìn ìkórè." }
          ]
        },
        {
          title: "Ṣíṣírò iye ìkórè àti kíkọ ètò ọ̀gbìn rẹ",
          objectives: ["O5", "O2", "O3"],
          minutes: 6,
          goal: "Ṣírò iye ìkórè lórí hẹ́kítà àti lórí éékà, kí o sì kọ ètò ọ̀gbìn fún irè oko pàtàkì kan lórí oko rẹ.",
          text: [
            "Iye ìkórè (yield) ni ìwọ̀n irè oko tí o kórè lórí ilẹ̀ kan. Láti mọ̀ ọ́n, wọn ìkórè rẹ lẹ́yìn tí o bá ti sá a gbẹ, kí o sì mọ ìtóbi ilẹ̀ tí ó ti wá gan-an. Iye ìkórè lórí hẹ́kítà = kg tí o kórè / ìtóbi ilẹ̀ ní m2 x 10,000. Iye ìkórè lórí éékà = kg tí o kórè / ìtóbi ilẹ̀ ní m2 x 4,047. Tàbí láti hẹ́kítà sí éékà: pín in sí 2.47.",
            "Àpẹẹrẹ, àgbàdo ní Kenya: o kórè 1,350 kg ọkà gbígbẹ láti oko tí ó jẹ́ 3,000 m2. Lórí hẹ́kítà: 1,350 / 3,000 x 10,000 = 4,500 kg, tàbí tọ́ọ̀nù 4.5. Lórí éékà: 4,500 / 2.47 = nǹkan bí 1,820 kg, èyí tí ó jẹ́ nǹkan bí àpò 20 ti 90 kg. Ìfojúdíwọ̀n kíákíá kí ìkórè tó dé: sàmì sí igun mẹ́rin 10 m x 10 m (100 m2) ní apá oko tí ó dà bí gbogbo oko, kórè rẹ̀ kí o sì sá a gbẹ, wọ̀n ọ́n, kí o sì sọ ọ́ di púpọ̀ ní 100 láti rí kg lórí hẹ́kítà. Ṣe é ní ibi méjì tàbí mẹ́ta, kí o sì mú ìpíndọ́gba wọn.",
            "Báyìí, kó gbogbo ẹ̀kọ́ náà pọ̀ sínú ètò ọ̀gbìn fún irè oko pàtàkì kan lórí oko rẹ: ìtóbi oko, oríṣi àti orísun irúgbìn, àlàfo pẹ̀lú iye ohun ọ̀gbìn àti irúgbìn tí o nílò, kàlẹ́ńdà tí ó ní ọjọ́ fún ìmúra ilẹ̀, gbígbìn, ajílẹ̀ àti kíkọ èpò, àwọn àrùn pàtàkì àti ohun àkọ́kọ́ tí o máa ṣe, bí o ṣe máa mọ ìgbà ìkórè, àti iye ìkórè tí o ń fojú sí lórí hẹ́kítà àti lórí éékà. Lẹ́yìn ìkórè, fi iye ìkórè gidi wé èyí tí o fojú sí, kí o sì kọ ohun tí o máa yí padà. Àgbẹ̀ obìnrin kan ní Côte d'Ivoire tí ó ń kọ iye ìkórè ìrẹsì rẹ̀ sílẹ̀ ní gbogbo ìgbà oko lè fi ohun tí oko rẹ̀ ń mú jáde han olùrà, ẹgbẹ́ alájùmọ̀ṣe tàbí ẹni tí ó ń yáni lówó."
          ],
          steps: ["Wọn ìtóbi ilẹ̀ tí o kórè ní m2.", "Wọn ìkórè gbígbẹ ní kg.", "Lórí hẹ́kítà = kg / m2 x 10,000; lórí éékà = kg / m2 x 4,047.", "Tàbí kórè 100 m2 ní ibi 2 tàbí 3, wọ̀n ọ́n kí o sì sọ ọ́ di púpọ̀ ní 100 fún kg/ha.", "Kọ ètò náà: oríṣi, irúgbìn, iye ohun ọ̀gbìn, kàlẹ́ńdà, àrùn, ìkórè, iye ìkórè tí o ń fojú sí.", "Lẹ́yìn ìkórè, fi iye ìkórè gidi wé èyí tí o fojú sí."],
          words: [["Iye ìkórè (yield)", "iye irè oko tí a kórè lórí ilẹ̀ kan, bí kg lórí hẹ́kítà tàbí àpò lórí éékà."], ["Tọ́ọ̀nù (tonne)", "1,000 kìlógíráàmù."], ["Ilẹ̀ àpẹẹrẹ (sample plot)", "ilẹ̀ kékeré tí a sàmì sí, tí a kórè tí a sì wọ̀n láti fojú díwọ̀n iye ìkórè gbogbo oko."]],
          slides: [
            { title: "Ìlànà ìṣirò iye ìkórè", bullets: ["Lórí ha = kg / ìtóbi ilẹ̀ (m2) x 10,000", "Lórí éékà = kg / ìtóbi ilẹ̀ (m2) x 4,047", "Láti hẹ́kítà sí éékà: pín in sí 2.47"] },
            { title: "Àpẹẹrẹ ìṣirò: àgbàdo", bullets: ["1,350 kg láti 3,000 m2", "= 4,500 kg/ha (4.5 t/ha)", "= nǹkan bí 1,820 kg/éékà, nǹkan bí àpò 20 ti 90 kg"] },
            { title: "Ìfojúdíwọ̀n pẹ̀lú ilẹ̀ àpẹẹrẹ", bullets: ["Sàmì sí 10 m x 10 m (100 m2)", "Kórè, sá a gbẹ, wọ̀n ọ́n; x 100 = kg/ha", "Ṣe é ní ibi 2 tàbí 3 kí o sì mú ìpíndọ́gba"] },
            { title: "Ètò ọ̀gbìn rẹ", bullets: ["Oríṣi, irúgbìn, iye ohun ọ̀gbìn, kàlẹ́ńdà", "Àwọn àrùn àti ohun àkọ́kọ́ tí o máa ṣe", "Àmì ìkórè àti iye ìkórè tí o ń fojú sí lórí ha àti éékà"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ọ̀gbìn rẹ fún irè oko pàtàkì kan lórí oko rẹ: ìtóbi oko ní hẹ́kítà àti éékà, oríṣi àti orísun irúgbìn, àlàfo pẹ̀lú ìṣirò iye ohun ọ̀gbìn àti irúgbìn tí o nílò, kàlẹ́ńdà tí ó ní ọjọ́ (ìmúra ilẹ̀, gbígbìn, ajílẹ̀, kíkọ èpò), àwọn àrùn pàtàkì méjì àti ohun àkọ́kọ́ tí o máa ṣe fún ọ̀kọ̀ọ̀kan, àwọn àmì ìkórè, àti iye ìkórè tí o ń fojú sí lórí hẹ́kítà àti lórí éékà pẹ̀lú ìṣirò rẹ.",
          youCanNow: "ṣírò iye ìkórè lórí hẹ́kítà àti lórí éékà, kí o sì kọ ètò ọ̀gbìn fún irè oko pàtàkì kan lórí oko rẹ.",
          quickCheck: [
            { objective: "O5", q: "O kórè 900 kg ẹ̀wà gbígbẹ láti 4,047 m2. Kí ni iye ìkórè lórí éékà?", options: ["Nǹkan bí 450 kg", "Nǹkan bí 2,224 kg", "900 kg", "Nǹkan bí 4,047 kg"], answer: 2, why: "4,047 m2 jẹ́ éékà kan, nítorí náà iye ìkórè jẹ́ 900 kg lórí éékà." },
            { objective: "O5", q: "Ilẹ̀ àpẹẹrẹ 100 m2 mú 40 kg àgbàdo gbígbẹ wá. Kí ni ìfojúdíwọ̀n iye ìkórè lórí hẹ́kítà?", options: ["40 kg", "400 kg", "40,000 kg", "4,000 kg"], answer: 3, why: "Hẹ́kítà kan jẹ́ ìgbà 100 ti 100 m2, nítorí náà 40 x 100 = 4,000 kg lórí hẹ́kítà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídáàbò bo irè oko àti wíwọn rẹ̀",
        questions: [
          { objective: "O4", q: "Kí ló ń fa maize lethal necrosis?", options: ["Oòrùn tí ó pọ̀ jù", "Virus méjì tí ó kọlu ohun ọ̀gbìn pa pọ̀", "Àìní potassium", "Fall armyworm nìkan"], answer: 1, why: "CIMMYT ṣàlàyé MLN bí àkóràn virus méjì pa pọ̀." },
          { objective: "O4", q: "Kí ni ọ̀nà pàtàkì tí àrùn virus ẹ̀gẹ́ fi ń tàn lọ sí ọ̀nà jíjìn?", options: ["Atẹ́gùn tí ń fẹ́ ewé", "Òjò tí ń ta erùpẹ̀", "Pínpín igi ẹ̀gẹ́ tí ó ní àrùn", "Ìgbẹ́ ẹyẹ"], answer: 2, why: "Whitefly ń tàn wọ́n ní àdúgbò; igi ẹ̀gẹ́ tí ó ní àrùn ń gbé wọn lọ jìnnà." },
          { objective: "O4", q: "Àṣà wo ló ń mú rice blast burú sí i?", options: ["Ajílẹ̀ nitrogen tí ó pọ̀ jù", "Lílo irúgbìn tó mọ́", "Gbígbin oríṣi tí ó kọjú ìjà sí i", "Kíkó ìyókù ohun ọ̀gbìn tí ó ní àrùn kúrò"], answer: 0, why: "Nitrogen púpọ̀ máa ń mú kí blast rọrùn láti kọlu ìrẹsì." },
          { objective: "O5", q: "Ìrẹsì ti ṣetán fún ìkórè nígbà tí:", options: ["Òdòdó àkọ́kọ́ bá yọ", "Ewé bá jẹ́ àwọ̀ ewé dúdú", "Ó ti lo oṣù kan nínú oko", "Ọ̀pọ̀ jù lọ ọkà orí ìrẹsì ti di wúrà, tí wọ́n sì le"], answer: 3, why: "Ọkà wúrà tí ó le fi hàn pé irè oko ti gbó; kíkórè pẹ́ ń fa fífọ́nká àti àdánù sí ẹyẹ." },
          { objective: "O5", q: "O rí 4,940 kg lórí hẹ́kítà. Nǹkan bí mélòó ni ìyẹn lórí éékà?", options: ["2,000 kg", "12,200 kg", "4,940 kg", "494 kg"], answer: 0, why: "4,940 / 2.47 = 2,000 kg lórí éékà." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ọ̀gbìn Òde Òní: Àgbàdo, Ìrẹsì, Ẹ̀gẹ́ àti Ẹ̀wà",
    questions: [
      { objective: "O1", q: "Níbo ni o yẹ kí o kọ́kọ́ wò fún àwọn oríṣi tó bá agbègbè rẹ mu?", options: ["Ìpolówó lórí ìkànnì àjọlò", "Ilé-iṣẹ́ ìwádìí orílẹ̀-èdè rẹ àti òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀", "Irúgbìn tó wọ́n jù lọ ní ọjà", "Ilé ìpamọ́ ọkà ìgbà oko tó kọjá"], answer: 1, why: "Àwọn ilé-iṣẹ́ ìwádìí ń dán oríṣi wò, wọ́n sì ń tú wọn sílẹ̀ fún agbègbè kọ̀ọ̀kan." },
      { objective: "O1", q: "Àjọ wo ló ń fọwọ́ sí irúgbìn ní Nàìjíríà?", options: ["NAFDAC", "Báńkì àpapọ̀ (central bank)", "KEPHIS", "National Agricultural Seed Council (NASC)"], answer: 3, why: "NASC ló ń fọwọ́ sí irúgbìn ní Nàìjíríà." },
      { objective: "O1", q: "Kí ni o gbọ́dọ̀ ṣàyẹ̀wò kí o tó sanwó fún àpò irúgbìn tí a fọwọ́ sí?", options: ["Ìdè, àmì àti ọjọ́ rẹ̀", "Àwọ̀ àpò nìkan", "Iye owó nìkan", "Kò sí nǹkan"], answer: 0, why: "Àpò tí a dì pa, tí ó ní àmì àti ọjọ́, láti ọ̀dọ̀ olùtajà tí a forúkọ rẹ̀ sílẹ̀ ni ààbò rẹ lọ́wọ́ irúgbìn ayédèrú." },
      { objective: "O1", q: "Ilé-iṣẹ́ CGIAR wo ló ń ṣiṣẹ́ lórí ìrẹsì ní Áfíríkà?", options: ["IITA", "ICIPE", "AfricaRice", "WorldFish"], answer: 2, why: "AfricaRice, tí ó wà ní Abidjan, ló ń ṣiṣẹ́ lórí ìrẹsì." },
      { objective: "O2", q: "Mítà níbùú lóròó (m2) mélòó ló wà nínú hẹ́kítà kan?", options: ["4,047", "1,000", "100", "10,000"], answer: 3, why: "Hẹ́kítà kan jẹ́ 100 m x 100 m = 10,000 m2." },
      { objective: "O2", q: "Ìrẹsì tí a tún gbìn ní 20 cm x 20 cm máa ń fún ọ ní ìdì mélòó lórí hẹ́kítà?", options: ["25,000", "250,000", "2,500", "40,000"], answer: 1, why: "0.2 x 0.2 = 0.04 m2; 10,000 / 0.04 = 250,000." },
      { objective: "O2", q: "Ẹ̀wà ní 50 cm x 10 cm nílò nǹkan bí ohun ọ̀gbìn mélòó lórí éékà?", options: ["Nǹkan bí 80,900", "Nǹkan bí 200,000", "Nǹkan bí 8,090", "Nǹkan bí 40,470"], answer: 0, why: "0.5 x 0.1 = 0.05 m2; 4,047 / 0.05 = nǹkan bí 80,900." },
      { objective: "O2", q: "Kí ló dé tí o fi ń fi nǹkan bí 10% irúgbìn kún un?", options: ["Láti bọ́ àwọn ẹyẹ", "Láti mú àpò wúwo sí i", "Láti bo àwọn irúgbìn tí kò hù, kí o sì gbin sí àlàfo tó ṣófo", "Nítorí òfin sọ bẹ́ẹ̀"], answer: 2, why: "Àwọn irúgbìn kan kì í hù; irúgbìn àfikún ń jẹ́ kí o gbin sí àlàfo tó ṣófo." },
      { objective: "O3", q: "Kí ni ẹ̀wà nílò ju nitrogen lọ?", options: ["Iyọ̀", "Phosphorus", "Ṣúgà", "Ẹfun (lime) ní ọ̀sẹ̀ kọ̀ọ̀kan"], answer: 1, why: "Ẹ̀wà ń ṣe ọ̀pọ̀ nitrogen tirẹ̀, ṣùgbọ́n ó ṣì nílò phosphorus." },
      { objective: "O3", q: "Ìgbà wo ló yẹ kí kíkọ èpò àkọ́kọ́ sábà máa wáyé?", options: ["Kí ìkórè tó dé díẹ̀", "Kìkì tí èpò bá yọ òdòdó", "Lẹ́yìn tí irè oko bá ga dé orúnkún tí ó sì yọ irun orí", "Ní àwọn ọ̀sẹ̀ àkọ́kọ́ tó ṣe pàtàkì, nígbà púpọ̀ nǹkan bí ọ̀sẹ̀ 2 sí 3 lẹ́yìn tí irè oko bá hù"], answer: 3, why: "Èpò ń dín iye ìkórè kù jù ní àwọn ọ̀sẹ̀ àkọ́kọ́." },
      { objective: "O3", q: "Kí ló dé tí o fi gbọ́dọ̀ kọ ìgbà oko rẹ sórí kàlẹ́ńdà tí o kà láti ọjọ́ gbígbìn?", options: ["Kí òṣìṣẹ́, ohun èlò àti owó lè wà ní sẹpẹ́ lásìkò", "Láti wú àwọn àlejò lórí", "Nítorí irúgbìn ń ka kàlẹ́ńdà", "Kò wúlò"], answer: 0, why: "Kàlẹ́ńdà tí ó ní ọjọ́ ń rí i dájú pé iṣẹ́ kọ̀ọ̀kan wáyé ní ìpele ìdàgbà tó tọ́." },
      { objective: "O3", q: "Nǹkan bí ìgbà wo ni o gbọ́dọ̀ pa ẹ̀gẹ́ mọ́ láìní èpò?", options: ["Ọ̀sẹ̀ kan", "Lẹ́yìn ìkórè nìkan", "Nǹkan bí oṣù mẹ́ta àkọ́kọ́, títí ewé rẹ̀ yóò fi bo ilẹ̀", "Láéláé"], answer: 2, why: "Ẹ̀gẹ́ máa ń dàgbà díẹ̀díẹ̀ ní ìbẹ̀rẹ̀, ó sì nílò ìṣàkóso èpò ní kùtùkùtù títí ewé rẹ̀ yóò fi bo ilẹ̀." },
      { objective: "O4", q: "Àmì yẹ́lò ṣákaṣàka lórí ewé àgbàdo tí ó wá ń gbẹ láti etí, pẹ̀lú ṣẹ́ẹ̀rí kékeré tàbí tí ó jẹrà, ń tọ́ka sí:", options: ["Maize lethal necrosis", "Rice blast", "Ìlera tó dára", "Potassium tí ó pọ̀ jù"], answer: 0, why: "Àwọn ni àmì MLN tí ó wọ́pọ̀." },
      { objective: "O4", q: "Ewé ẹ̀gẹ́ tí ó ní àbàwọ́n yẹ́lò àti ewé, tí ó yí, tí ó sì kéré ń tọ́ka sí:", options: ["Cassava brown streak nìkan", "Àìní ìmọ́lẹ̀ oòrùn", "Cassava mosaic disease", "Fall armyworm"], answer: 2, why: "Àbàwọ́n mosaic lórí ewé àti yíyí ewé ni àmì CMD." },
      { objective: "O4", q: "Kí ni o máa kọ́kọ́ ṣe pẹ̀lú ohun ọ̀gbìn díẹ̀ tí ó ní àmì MLN tàbí àrùn virus ẹ̀gẹ́?", options: ["Gé igi láti ara wọn", "Fìdí rẹ̀ múlẹ̀ pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, kí o sì fà wọ́n tu kí o sì pa wọ́n run ní kùtùkùtù", "Fín ajílẹ̀ sí wọn", "Fi wọ́n sílẹ̀ kí wọ́n sàn fúnra wọn"], answer: 1, why: "Fífà wọ́n tu ní kùtùkùtù ń mú orísun virus kúrò." },
      { objective: "O4", q: "Kí ló dé tí wọ́n fi ń tú oríṣi ìrẹsì tuntun tí ó kọjú ìjà sí blast sílẹ̀ ní gbogbo ìgbà?", options: ["Irúgbìn àtijọ́ ń yí àwọ̀ padà", "Ó ń sú àwọn àgbẹ̀", "Ìrẹsì ń nílò omi púpọ̀ sí i lọ́dọọdún", "Olu náà lè borí agbára oríṣi kan ní ọdún díẹ̀ lẹ́yìn tí ọ̀pọ̀ ènìyàn bá ti ń gbìn ín"], answer: 3, why: "Agbára láti kọjú ìjà sí blast lè yẹ̀, nítorí náà àwọn olùṣèwádìí ń ṣe oríṣi tuntun ní gbogbo ìgbà." },
      { objective: "O5", q: "Ẹ̀pà ti ṣetán nígbà tí:", options: ["Wọ́n kọ́kọ́ yọ òdòdó", "Ewé bá di yẹ́lò tí inú ọ̀pọ̀ jù lọ èèpo bá ti ṣókùnkùn", "Òjò ti rọ̀ lẹ́ẹ̀kan", "Pódì rọ̀, tí inú rẹ̀ sì funfun"], answer: 1, why: "Inú èèpo tí ó ti ṣókùnkùn àti ewé tí ó ń di yẹ́lò fi hàn pé ó ti gbó." },
      { objective: "O5", q: "O kórè 600 kg àgbàdo gbígbẹ láti 1,500 m2. Kí ni iye ìkórè lórí hẹ́kítà?", options: ["600 kg", "9,000 kg", "1,500 kg", "4,000 kg"], answer: 3, why: "600 / 1,500 x 10,000 = 4,000 kg lórí hẹ́kítà." },
      { objective: "O5", q: "Láti yí iye ìkórè lórí hẹ́kítà padà sí iye ìkórè lórí éékà, o máa:", options: ["Pín in sí 2.47", "Sọ ọ́ di púpọ̀ ní 2.47", "Fi 4,047 kún un", "Pín in sí 10"], answer: 0, why: "Hẹ́kítà kan jẹ́ nǹkan bí éékà 2.47, nítorí náà iye ìkórè lórí éékà kéré sí i." },
      { objective: "O5", q: "Kí ló dé tí o fi gbọ́dọ̀ fi iye ìkórè gidi wé èyí tí o fojú sí nínú ètò rẹ lẹ́yìn ìkórè?", options: ["Ilé-iṣẹ́ irúgbìn ló ní kí o ṣe é", "Láti rí ohun tó ṣiṣẹ́ àti ohun tí o máa yí padà ní ìgbà oko tó ń bọ̀", "Láti gba àpò ajílẹ̀ ọ̀fẹ́", "Kò wúlò"], answer: 1, why: "Fífi èsì wé ètò ń fi ibi tí o ti lè ṣe dáadáa sí i hàn." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 4, 5, 9, 12, 13, 17, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe, kí o sì tún bá òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ ṣàyẹ̀wò rẹ̀.",
    criteria: [
      { name: "Oríṣi àti irúgbìn", objective: "O1", notYet: "Kò dárúkọ oríṣi kankan, tàbí irúgbìn jẹ́ ọkà hybrid tí a tún ń lò tàbí igi ẹ̀gẹ́ láti oko tí àrùn wà.", meets: "Ó dárúkọ oríṣi tí wọ́n dámọ̀ràn fún agbègbè náà, pẹ̀lú ibi tí a forúkọ rẹ̀ sílẹ̀ tí ó ti lè ra irúgbìn tí a fọwọ́ sí tàbí igi ẹ̀gẹ́ tí kò ní àrùn.", exceeds: "Ó fi oríṣi méjì wé ara wọn lórí àkókò gbígbó, agbára láti kọjú ìjà sí àrùn àti ọjà, ó sì ṣàlàyé ìdí tí ó fi yan èyí tí ó yàn." },
      { name: "Iye ohun ọ̀gbìn àti irúgbìn tí ó nílò", objective: "O2", notYet: "Kò sí àlàfo tàbí ìṣirò, tàbí ìṣirò náà kò tọ́.", meets: "Ó ṣírò àlàfo, ohun ọ̀gbìn lórí hẹ́kítà, lórí éékà àti lórí oko, àti irúgbìn tàbí igi ẹ̀gẹ́ tí ó nílò dáadáa, ó sì fi àwọn ìgbésẹ̀ hàn.", exceeds: "Ó tún ṣètò gbígbin sí àlàfo tó ṣófo àti kíka ohun ọ̀gbìn lẹ́yìn tí wọ́n bá hù láti ṣàyẹ̀wò iye ohun ọ̀gbìn gidi." },
      { name: "Kàlẹ́ńdà tí ó ní ọjọ́", objective: "O3", notYet: "Ó kọ iṣẹ́ sílẹ̀ láìsí ọjọ́, tàbí kíkọ èpò pẹ́ jù.", meets: "Ìmúra ilẹ̀, gbígbìn, ajílẹ̀ (láti inú àyẹ̀wò ilẹ̀ tàbí òṣìṣẹ́ ìtọ́sọ́nà) àti kíkọ èpò kọ̀ọ̀kan ní ọjọ́ tí a kà láti ọjọ́ gbígbìn, kíkọ èpò àkọ́kọ́ sì wà nínú àkókò tó ṣe pàtàkì.", exceeds: "Òṣìṣẹ́, ohun èlò àti owó tí iṣẹ́ kọ̀ọ̀kan nílò wà lórí kàlẹ́ńdà." },
      { name: "Ṣíṣọ́ àrùn", objective: "O4", notYet: "Kò dárúkọ àrùn kankan, tàbí ohun tí ó máa ṣe kò bá àrùn náà mu.", meets: "Ó dárúkọ àwọn àrùn pàtàkì méjì fún irè oko náà pẹ̀lú àmì wọn àti ohun àkọ́kọ́ tó tọ́ fún ọ̀kọ̀ọ̀kan.", exceeds: "Ó ní ìdènà fún ìgbà oko tó ń bọ̀ tí ó ti fohùn ṣọ̀kan lé lórí pẹ̀lú àwọn aládùúgbò, bí yíyí irè oko padà tàbí ohun ọ̀gbìn tí kò ní àrùn." },
      { name: "Ìkórè àti iye ìkórè tí ó ń fojú sí", objective: "O5", notYet: "Kò sí àmì ìkórè tàbí iye ìkórè tí ó ń fojú sí, tàbí ìṣirò iye ìkórè kò tọ́.", meets: "Àwọn àmì ìkórè fún irè oko náà àti iye ìkórè tí ó ń fojú sí lórí hẹ́kítà àti lórí éékà pẹ̀lú ìṣirò tó tọ́.", exceeds: "Ó ní ọ̀nà ilẹ̀ àpẹẹrẹ láti fojú díwọ̀n iye ìkórè kí ìkórè tó dé, àti ètò láti fi èsì wé èyí tí ó fojú sí." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gbin irúgbìn tí a fọwọ́ sí tàbí igi ẹ̀gẹ́ tí kò ní àrùn ti oríṣi tí wọ́n dámọ̀ràn ní ìgbà oko tó tẹ̀lé e (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n wọn ìkórè wọn, tí wọ́n sì ròyìn iye ìkórè lórí hẹ́kítà tàbí lórí éékà lẹ́yìn ìgbà oko",
      "Ìyípadà nínú iye ìkórè lórí hẹ́kítà tí wọ́n ròyìn fún irè oko tí wọ́n yàn láti ìgbà oko kan sí èkejì",
      "Oko díẹ̀ ni maize lethal necrosis tàbí àrùn virus ẹ̀gẹ́ bà jẹ́ nínú àwọn ẹgbẹ́ akẹ́kọ̀ọ́ (ìròyìn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tí ó ní ẹ̀rọ ìṣirò, tàbí ìwé, gègé àti ẹ̀rọ ìṣirò lásán",
      "Téèpù ìwọ̀n tàbí okùn tí a sàmì sí ní mítà kọ̀ọ̀kan, àti òṣùwọ̀n fún wíwọn ìkórè",
      "Oko àgbàdo, ìrẹsì, ẹ̀gẹ́ tàbí ẹ̀wà tí o lè dé",
      "Àkọsílẹ̀ oríṣi orílẹ̀-èdè tàbí àwọn oríṣi tí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ dámọ̀ràn fún agbègbè náà",
      "Nǹkan bí ìṣẹ́jú 60 sí 90 lápapọ̀ fún ẹ̀kọ́, ìdánwò kúkúrú àti àwọn ìdánwò, pẹ̀lú àṣeṣe nínú oko"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe ìṣirò iye ohun ọ̀gbìn àti iye ìkórè nínú oko pẹ̀lú téèpù ìwọ̀n àti ohun ọ̀gbìn gidi.",
      "Gba àwọn oríṣi àti àlàfo tí wọ́n dámọ̀ràn fún agbègbè rẹ lọ́wọ́ ilé-iṣẹ́ ìwádìí tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ kí ìpàdé tó bẹ̀rẹ̀; má ṣe hùmọ̀ wọn.",
      "Mú fọ́tò tàbí àpẹẹrẹ gidi MLN, cassava mosaic, cassava brown streak (pẹ̀lú isu tí a gé) àti rice blast wá tí wọ́n bá wà ní agbègbè rẹ.",
      "Àwọn ẹgbẹ́ àgbẹ̀ tí wọ́n fohùn ṣọ̀kan lórí yíyí irè oko padà àti ohun ọ̀gbìn tí kò ní àrùn máa ń ṣàkóso MLN àti àrùn virus ẹ̀gẹ́ dáadáa jù; lo ìpàdé náà láti bẹ̀rẹ̀ ìjíròrò yẹn.",
      "Fi rubric ṣe àmì fún ètò ọ̀gbìn náà, kí o sì yẹ gbogbo ìṣirò wò pẹ̀lú akẹ́kọ̀ọ́.",
      "Padà wá lẹ́yìn ìkórè láti fi iye ìkórè gidi akẹ́kọ̀ọ́ kọ̀ọ̀kan wé èyí tí ó fojú sí nínú ètò rẹ̀."
    ]
  }
};
