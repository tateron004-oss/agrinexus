"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-animal-breeding-biosecurity.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WOAH_ASF = { name: "World Organisation for Animal Health (WOAH), àjọ àgbáyé fún ìlera ẹranko: African swine fever", url: "https://www.woah.org/en/disease/african-swine-fever/" };
const WOAH_ASF_VACCINE = { name: "WOAH (June 2025): lo àjẹsára ASF tó dára nìkan, tí ó bá ìlànà tuntun mu", url: "https://www.woah.org/en/asf-woah-stresses-the-importance-of-using-high-quality-vaccines-that-comply-with-newly-adopted-standard" };
const FAO_ASF = { name: "FAO: African swine fever (kò sí àjẹsára tàbí ìtọ́jú tó ṣiṣẹ́; ìdènà nìkan ni ọ̀nà àkóso)", url: "https://www.fao.org/animal-health/animal-diseases/african-swine-fever/en" };
const WOAH_AI = { name: "World Organisation for Animal Health (WOAH), àjọ àgbáyé fún ìlera ẹranko: Avian influenza (àrùn ibà ẹyẹ)", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: Avian influenza (àwọn àmì rẹ̀ lára ẹyẹ)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const FAO_PIG_BIOSEC = { name: "FAO: Ìṣe tó dára fún ààbò àìsàn (biosecurity) nínú ọ̀sìn ẹlẹ́dẹ̀ (Animal Production and Health Paper 169)", url: "https://www.fao.org/4/i1435e/i1435e00.htm" };
const FAO_POULTRY_BIOSEC = { name: "FAO: Ìṣe ààbò àìsàn tó dára fún ọ̀sìn adìẹ kékeré àti adìẹ tí ń jẹ káàkiri ní Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const UGA_HEAT = { name: "University of Georgia Extension: Ọ̀nà láti mọ àsìkò ìfẹ́ akọ (heat) lára màálù ọlọ́wàrà (standing heat, òfin AM-PM)", url: "https://fieldreport.caes.uga.edu/publications/B1212/heat-detection-strategies-for-dairy-cattle" };
const KAGRC = { name: "Kenya Animal Genetic Resources Centre (KAGRC): àtọ̀ àti ohun èlò AI", url: "https://kagrc.go.ke/" };
const KVB = { name: "Kenya Veterinary Board (àkọsílẹ̀ àwọn dókítà ẹranko àti àwọn òṣìṣẹ́ ìlera ẹranko tí a fọwọ́ sí)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (àkọsílẹ̀ àwọn dókítà ẹranko tí a fọwọ́ sí)", url: "https://vcn.gov.ng" };
const ILRI_AI = { name: "ILRI: Ìdálẹ́kọ̀ọ́ àwọn olùpèsè iṣẹ́ AI fún ìfàtọ̀sínú àtọwọ́dá ní àwùjọ", url: "https://www.ilri.org/knowledge/publications/training-artificial-insemination-service-providers-community-based" };
const FAO_DADIS = { name: "FAO DAD-IS: Ètò ìsọfúnni nípa oríṣiríṣi ẹran ọ̀sìn (àwọn irú ẹran ní orílẹ̀-èdè kọ̀ọ̀kan)", url: "https://www.fao.org/dad-is/en/" };

module.exports = {
  id: "agri-animal-breeding-biosecurity-yo",
  lang: "yo",
  translationOf: "agri-animal-breeding-biosecurity",
  category: "Agriculture (Africa)",
  name: "Ọ̀sìn Ẹran, Ìbísí àti Ààbò Àìsàn Oko",
  skills: "Yíyan irú ẹran tó bá ojú ọjọ́ àti ọjà rẹ mu, Mímọ àsìkò ìfẹ́ akọ àti kíkọ àkọsílẹ̀ ìbísí, Ṣíṣètò AI pẹ̀lú òṣìṣẹ́ tó kọ́ṣẹ́, Yíyẹra fún ìbísí láàárín ẹbí, Kíkọ ètò ààbò àìsàn oko, Mímọ àti fífi African Swine Fever àti avian influenza tó ìjọba létí",
  outcome: "bí màálù, ewúrẹ́, ẹlẹ́dẹ̀ tàbí adìẹ rẹ pẹ̀lú èrò, kí o sì dá àìsàn dúró kí ó má wọ oko rẹ: yan irú ẹran tó bá ojú ọjọ́ àti ọjà rẹ mu, mọ àsìkò ìfẹ́ akọ kí o sì kọ gbogbo ìgùn sílẹ̀, lo òṣìṣẹ́ AI tó kọ́ṣẹ́, yẹra fún ìbísí láàárín ẹbí, tẹ̀lé ètò ààbò àìsàn tí a kọ sílẹ̀, kí o sì fi African Swine Fever tàbí avian influenza tí o fura sí tó dókítà ẹranko létí lẹ́sẹ̀kẹsẹ̀.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ ọ̀sìn ẹran kékeré àti àwọn tó ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò oko àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nàìjíríà, Ghana, Senegal, Cameroon àti káàkiri Áfíríkà, tí wọ́n ń sin màálù ọlọ́wàrà, ewúrẹ́, ẹlẹ́dẹ̀ tàbí adìẹ, tí wọ́n sì fẹ́ kí agbo wọn pọ̀ sí i láìmú àìsàn wọlé.",
    "Orí 1 dá lórí ìbísí tó dára: yíyan irú ẹran tó tọ́, mímọ àsìkò ìfẹ́ akọ àti kíkọ àkọsílẹ̀ ìbísí, àti lílo ìfàtọ̀sínú àtọwọ́dá (AI) nípasẹ̀ òṣìṣẹ́ tó kọ́ṣẹ́, láìjẹ́ kí ẹbí bá ẹbí bí. Orí 2 dá lórí dídá àìsàn dúró: ètò ààbò àìsàn pẹ̀lú àwọn agbègbè, ìwẹ̀ ẹsẹ̀ àti òfin àlejò, yíya ẹran tuntun sọ́tọ̀ àti kíkó òkú ẹran dànù láìléwu, àti àwọn àrùn méjì tí gbogbo olùsìn ẹlẹ́dẹ̀ àti adìẹ gbọ́dọ̀ mọ̀: African Swine Fever àti avian influenza.",
    "Ẹ̀kọ́ yìí ń kọ́ lé \"Ìlera àti Ìtọ́jú Ẹran Ọ̀sìn\", tí ó sọ nípa àyẹ̀wò ìlera ojoojúmọ́, àjẹsára pẹ̀lú dókítà ẹranko àti àrùn Newcastle. Kò fún ọ ní ìwọ̀n oògùn, àjẹsára tàbí homonu kankan: máa tẹ̀lé dókítà ẹranko rẹ àti ohun tí a kọ sí ara ọjà náà. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan lórí oko rẹ. Ìdánwò ìmọ̀ kan wà ní òpin orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́."
  ],
  finalTask: "Kọ ètò ààbò àìsàn ojú-ewé kan fún ibi ọ̀sìn rẹ (oko rẹ, tàbí àpẹẹrẹ bí ẹlẹ́dẹ̀ 20 nítòsí Abẹ́òkúta, adìẹ ẹlẹ́yin 500 nítòsí Kumasi, màálù ọlọ́wàrà 4 ní Nyeri tàbí adìẹ ẹran (broiler) 300 nítòsí Thies): àwòrán tó fi agbègbè mímọ́, agbègbè ààlà àti agbègbè ẹlẹ́gbin hàn, pẹ̀lú ẹnu ọ̀nà kan ṣoṣo; òfin ìwẹ̀ ẹsẹ̀ àti fífọ ọwọ́; òfin fún àlejò àti ọkọ̀, pẹ̀lú ìwé àkọsílẹ̀ àlejò; bí o ṣe máa ya ẹran tuntun sọ́tọ̀; bí o ṣe máa kó òkú ẹran dànù; àwọn àmì ìkìlọ̀ African Swine Fever tàbí avian influenza àti ohun tí o máa ṣe ní wákàtí àkọ́kọ́, pẹ̀lú orúkọ àti nọ́mbà fóònù dókítà ẹranko rẹ tàbí ọ́fíìsì ìlera ẹranko.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ ọ̀sìn ẹran kékeré àti àwọn tó ń dàgbà sí òwò ńlá, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò oko àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Ìlà-Oòrùn, Ìwọ̀-Oòrùn àti Àárín Áfíríkà (pẹ̀lú àwọn orílẹ̀-èdè tó ń sọ Faransé), tí wọ́n ń sin màálù ọlọ́wàrà, ewúrẹ́, ẹlẹ́dẹ̀ tàbí adìẹ.",
    startingPoint: "Wọ́n lè bọ́ ẹran kí wọ́n sì tọ́jú wọn, wọ́n sì lè mọ ẹran tí ara rẹ̀ kò yá. Ọ̀pọ̀ ń jẹ́ kí akọ èyíkéyìí tó wà nítòsí gun abo wọn, wọn kì í fi bẹ́ẹ̀ kọ àkọsílẹ̀ ìbísí, wọ́n sì ń jẹ́ kí àlejò, oníṣòwò àti ẹran tuntun wọ oko láìsí òfin kankan.",
    gap: "Àwọn àgbẹ̀ tí wọ́n fẹ́ wàrà, ẹran tàbí ẹyin púpọ̀ sí i sábà máa ń ra irú ẹran tí kò bá ojú ọjọ́ tàbí oúnjẹ wọn mu, wọ́n ń pàdánù àsìkò ìfẹ́ akọ, wọ́n ń fi iṣẹ́ AI ṣòfò, ìbísí láàárín ẹbí sì ń wọlé díẹ̀díẹ̀. Àlejò kan, ọkọ̀ kan tàbí ẹlẹ́dẹ̀ tuntun kan lè mú African Swine Fever wọlé, tí kò ní àjẹsára tàbí ìtọ́jú tó ṣiṣẹ́, tàbí avian influenza, tí ó lè pa èyí tó pọ̀ jù nínú agbo adìẹ. Ìlànà ìbísí àti ètò ààbò àìsàn tí a kọ sílẹ̀ ń dáàbò bo oko náà àti àwọn aládùúgbò.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń ka Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì, ẹ̀kọ́ náà sì wà ní èdè Sípáníìṣì, Faransé àti Lárúbáwá pẹ̀lú",
      "Ẹ̀rọ: fóònù lásán tàbí smartphone, ìwé àti gègé; dátà díẹ̀",
      "Owó: àwọn ọ̀nà tí kò wọ́n ni a kọ́kọ́ ń lò; iye owó ní KES, NGN, GHS àti XOF jẹ́ àpẹẹrẹ nìkan",
      "Òfin ìlera ẹranko: kò sí ìwọ̀n oògùn, àjẹsára tàbí homonu, kò sì sí àkókò ìdúró lẹ́yìn oògùn (withdrawal period); tẹ̀lé dókítà ẹranko àti ohun tí a kọ sí ara ọjà",
      "ASF àti avian influenza jẹ́ àrùn tí a gbọ́dọ̀ fi tó ìjọba létí: a máa ń fi èyí tí a fura sí tó dókítà ẹranko tàbí ọ́fíìsì ìlera ẹranko létí lẹ́sẹ̀kẹsẹ̀, òfin orílẹ̀-èdè kọ̀ọ̀kan sì yàtọ̀"
    ],
    prerequisites: "Ìtọ́jú ẹran ìpìlẹ̀. A gbà ọ́ níyànjú láti kọ́kọ́ ṣe \"Ìlera àti Ìtọ́jú Ẹran Ọ̀sìn\" (Agriculture (Africa))."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá mọ ojú ọjọ́, oúnjẹ ẹran tí o lè rí àti ọjà rẹ", action: "yan irú ẹran tàbí ẹran àdàlú fún oko rẹ, kí o sì sọ ìdí tí o fi yàn án", standard: "kí o sì dárúkọ ó kéré tán ìdí mẹ́ta tó bá oko rẹ mu" },
    { id: "O2", condition: "Pẹ̀lú ìwé àkọsílẹ̀ tàbí fóònù nígbà àyẹ̀wò ẹ̀ẹ̀mejì lójúmọ́", action: "kọ àwọn àmì àsìkò ìfẹ́ akọ, ìgùn, àti ọjọ́ tí a retí ìbí sílẹ̀ fún abo ẹran ìbísí kọ̀ọ̀kan", standard: "láìsí ọjọ́ kankan tó sọnù fún àwọn ẹran tí o bí" },
    { id: "O3", condition: "Nígbà tí màálù tàbí ewúrẹ́ bá dúró jẹ́ẹ́ fún ìgùn (standing heat)", action: "ṣètò AI pẹ̀lú òṣìṣẹ́ AI tó kọ́ṣẹ́ tí a sì fọwọ́ sí, ní àkókò tó tọ́", standard: "kí o sì pe òṣìṣẹ́ náà ní ọjọ́ kan náà, kí o sì kọ ìsọfúnni àtọ̀ tàbí akọ ẹran náà sílẹ̀" },
    { id: "O4", condition: "Pẹ̀lú àkọsílẹ̀ ìbísí rẹ", action: "ṣètò ìgùn tí kò ní jẹ́ kí ẹbí tímọ́tímọ́ bá ara wọn bí", standard: "láìsí òbí àti ọmọ tàbí ẹ̀gbọ́n àti àbúrò tí a fẹ́ kí wọ́n gun ara wọn nínú ètò náà" },
    { id: "O5", condition: "Fún oko rẹ tàbí ibi ọ̀sìn rẹ", action: "kọ ètò ààbò àìsàn tí ó ní àwọn agbègbè, ìwẹ̀ ẹsẹ̀, òfin àlejò, ìyàsọ́tọ̀ ẹran tuntun àti kíkó òkú ẹran dànù", standard: "tí ó sì bo gbogbo apá márààrún lórí ojú-ewé kan" },
    { id: "O6", condition: "Nígbà tí ẹlẹ́dẹ̀ tàbí adìẹ bá fi àmì ìkìlọ̀ hàn tàbí tí wọ́n bá kú lójijì", action: "dá àwọn àmì African Swine Fever tàbí avian influenza mọ̀, kí o sì fi wọ́n tó dókítà ẹranko tàbí ọ́fíìsì ìlera ẹranko létí", standard: "lẹ́sẹ̀kẹsẹ̀, láìgbé ẹran náà kúrò, láìtà á, tàbí láìjẹ ẹ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìbísí fún agbo ẹran tó dára jù",
      lessons: [
        {
          title: "Yíyan irú ẹran tó bá ojú ọjọ́ àti ọjà rẹ mu",
          objectives: ["O1"],
          minutes: 5,
          goal: "Yan irú ẹran tàbí ẹran àdàlú tó bá ojú ọjọ́ rẹ, oúnjẹ ẹran rẹ àti àwọn oníbàárà rẹ mu.",
          text: [
            "Irú ẹran tó dára jù ni èyí tó ń mú owó wá lórí oko RẸ, kì í ṣe èyí tí nọ́mbà rẹ̀ tóbi jù nínú ìwé ìpolówó. Màálù ọlọ́wàrà ilẹ̀ òkèèrè tó ń fún ni ní wàrà púpọ̀ nílò oúnjẹ tó dára púpọ̀, omi mímọ́, ibòji àti ìtọ́jú ìlera tó súnmọ́. Ní agbègbè tó gbóná, tó gbẹ, tí koríko kò sì pọ̀, ó lè fún ni ní wàrà tó kéré ju ti ẹran àdàlú ìbílẹ̀ tó le, kí ara rẹ̀ sì máa ṣàìyá jù.",
            "Àwọn irú ẹran ìbílẹ̀, bí màálù Zebu ti Ìlà-Oòrùn Áfíríkà, ewúrẹ́ West African Dwarf tàbí màálù N'Dama ti Ìwọ̀-Oòrùn Áfíríkà, lè fara da ooru, eegbọn àti oúnjẹ tí kò dára, ṣùgbọ́n wọn kì í tóbi tàbí mú èso púpọ̀ wá. Àwọn irú ẹran ilẹ̀ òkèèrè, bí màálù ọlọ́wàrà Friesian tàbí Ayrshire, ẹlẹ́dẹ̀ Large White tàbí adìẹ àdàlú ti ilé-iṣẹ́, máa ń mú èso púpọ̀ wá tí o bá lè bọ́ wọn kí o sì dáàbò bo wọn dáadáa. Ẹran àdàlú sábà máa ń wà láàárín méjèèjì.",
            "Bẹ̀rẹ̀ láti ọjà rẹ: ta ló ń rà, kí ni wọ́n ń sanwó fún (wàrà, ìwọ̀n ẹran ààyè, ẹran tí kò lọ́ràá, ẹyin, ewúrẹ́ ọdún) àti ìgbà wo. Lẹ́yìn náà wo ohun tí o lè pèsè ní gbogbo ọdún: oúnjẹ ẹran, omi, ilé ẹran, òṣìṣẹ́ àti dókítà ẹranko. Béèrè lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, ẹgbẹ́ àwọn olùbísí ẹran tàbí ilé-iṣẹ́ ìwádìí orílẹ̀-èdè rẹ irú ẹran tó ń ṣe dáadáa ní agbègbè rẹ. Àkójọ DAD-IS ti FAO ṣe àkọsílẹ̀ àwọn irú ẹran tí a ń sìn ní orílẹ̀-èdè kọ̀ọ̀kan."
          ],
          steps: ["Kọ ohun tí àwọn oníbàárà rẹ fẹ́ àti ohun tí wọ́n ń sanwó fún.", "Kọ ohun tí o lè pèsè ní gbogbo ọdún: oúnjẹ ẹran, omi, ilé ẹran, òṣìṣẹ́, dókítà ẹranko.", "Kọ irú ẹran tàbí ẹran àdàlú méjì tàbí mẹ́ta tí àwọn àgbẹ̀ nítòsí rẹ ń sìn.", "Béèrè lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí ẹgbẹ́ àwọn olùbísí ẹran nípa ọ̀kọ̀ọ̀kan.", "Yan irú ẹran tó bá àkọsílẹ̀ méjèèjì mu, kí o sì kọ ìdí mẹ́ta."],
          words: [["Irú ẹran (breed)", "ẹgbẹ́ ẹran kan náà tí wọ́n jọ ara wọn ní ìrísí àti ìwà, tí òbí ń fi lé ọmọ lọ́wọ́."], ["Irú ẹran ilẹ̀ òkèèrè (exotic breed)", "irú ẹran tí a ṣe ní agbègbè míì, tí ó sábà máa ń mú èso púpọ̀ wá ṣùgbọ́n tí kò fi bẹ́ẹ̀ fara da ooru, àìsàn àti oúnjẹ ìbílẹ̀."], ["Ẹran àdàlú (cross)", "ẹran tí òbí rẹ̀ wá láti irú ẹran méjì tó yàtọ̀."]],
          slides: [
            { title: "Irú ẹran tó tọ́ ń mú owó wá lórí oko RẸ", bullets: ["Nọ́mbà ńlá nínú ìpolówó nílò ohun èlò púpọ̀", "Oúnjẹ tí kò dára àti ooru ń dín èso kù kíákíá", "Yan fún oko rẹ, kì í ṣe fún àwòrán"] },
            { title: "Ìbílẹ̀, ilẹ̀ òkèèrè tàbí àdàlú", bullets: ["Ìbílẹ̀: ó le, ó ń fara da ooru, eegbọn àti oúnjẹ tí kò dára", "Ilẹ̀ òkèèrè: èso púpọ̀, ó nílò oúnjẹ àti ìtọ́jú tó dára", "Àdàlú: ó sábà máa ń wà láàárín méjèèjì"] },
            { title: "Bẹ̀rẹ̀ láti ọjà", bullets: ["Kí ni àwọn oníbàárà ń sanwó fún: wàrà, ẹran, ẹyin?", "Ìgbà wo ni wọ́n ń rà?", "Kí ni o lè pèsè ní gbogbo ọdún?"] },
            { title: "Béèrè kí o tó rà", bullets: ["Òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí ẹgbẹ́ olùbísí ẹran", "Àwọn àgbẹ̀ nítòsí rẹ tí wọ́n ní irú ẹran náà", "FAO DAD-IS ṣe àkọsílẹ̀ irú ẹran ní orílẹ̀-èdè kọ̀ọ̀kan"] }
          ],
          sources: [FAO_DADIS],
          tryIt: "Kọ àkọsílẹ̀ kúkúrú méjì fún oko rẹ: ohun tí àwọn oníbàárà rẹ fẹ́, àti ohun tí o lè pèsè ní gbogbo ọdún. Dárúkọ irú ẹran tàbí ẹran àdàlú méjì kí o sì yan ọ̀kan, pẹ̀lú ìdí mẹ́ta.",
          youCanNow: "yan irú ẹran tàbí ẹran àdàlú tó bá ojú ọjọ́ rẹ, oúnjẹ ẹran rẹ àti ọjà rẹ mu, kí o sì ṣàlàyé ìdí rẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Àgbẹ̀ kan ní agbègbè tó gbóná, tó gbẹ, tí koríko kò pọ̀, fẹ́ màálù ọlọ́wàrà. Èwo ló bá a mu jù?", options: ["Màálù ilẹ̀ òkèèrè tó ń fún ni ní wàrà jù tí ó lè rí", "Màálù èyíkéyìí tó wọ́n jù ní ọjà", "Ẹran àdàlú ìbílẹ̀ tó le, tó bá ooru àti oúnjẹ ẹran mu", "Irú ẹran tí a yàn láti inú àwòrán ìpolówó"], answer: 2, why: "Irú ẹran tó lè fara da ooru àti oúnjẹ ẹran tí ó ní lóòótọ́ máa mú èso púpọ̀ wá ju èyí tó nílò ohun tí kò lè pèsè lọ, bí àkókò ti ń lọ." },
            { objective: "O1", q: "Kí ni o yẹ kí o KỌ́KỌ́ kọ sílẹ̀ nígbà tí o bá ń yan irú ẹran?", options: ["Orúkọ irú ẹran tí aládùúgbò rẹ fẹ́ràn", "Ohun tí àwọn oníbàárà rẹ fẹ́ àti ohun tí wọ́n ń sanwó fún", "Àwọ̀ tí o fẹ́ràn", "Irú ẹran tí ẹran rẹ̀ tóbi jù"], answer: 1, why: "Ọjà ló ń pinnu ohun tó ń mówó wá; lẹ́yìn náà ni o máa wo ohun tí oko rẹ lè pèsè." }
          ]
        },
        {
          title: "Mímọ àsìkò ìfẹ́ akọ àti àkọsílẹ̀ ìbísí",
          objectives: ["O2"],
          minutes: 5,
          goal: "Mọ abo ẹran tó wà ní àsìkò ìfẹ́ akọ, kí o sì kọ àsìkò náà, ìgùn àti ọjọ́ ìbí sílẹ̀.",
          text: [
            "Màálù, ewúrẹ́ tàbí abo ẹlẹ́dẹ̀ lè lóyún ní àkókò kúkúrú kan nìkan, nígbà tí ó bá wà ní \"àsìkò ìfẹ́ akọ\" (heat). Tí o bá pàdánù rẹ̀, o máa dúró nǹkan bí ọ̀sẹ̀ mẹ́ta fún èyí tó kàn, nígbà tí o ṣì ń bọ́ ọ. Màálù, ewúrẹ́ àti ẹlẹ́dẹ̀ sábà máa ń wọ àsìkò ìfẹ́ akọ ní nǹkan bí ọjọ́ 21 ọjọ́ 21, ṣùgbọ́n èyí lè yàtọ̀, nítorí náà máa ṣọ́ wọn dáadáa.",
            "Àmì tó dájú jù lára màálù ni dídúró jẹ́ẹ́ fún ìgùn (standing heat): ó dúró jẹ́ẹ́ nígbà tí ẹran míì bá gùn ún. Àwọn àmì míì ni gígun àwọn ẹran míì, àìbalẹ̀, kíké, omi tó mọ́ tí ó lẹ̀ mọ́ni tó ń jáde láti ojú ara abo rẹ̀, àti wàrà tó dín kù. Ewúrẹ́ máa ń mi ìrù, ó máa ń ké, ó sì máa ń wá òbúkọ. Abo ẹlẹ́dẹ̀ tó wà ní àsìkò ìfẹ́ akọ máa ń dúró jẹ́ẹ́ nígbà tí o bá tẹ ẹ̀yìn rẹ̀. Máa ṣọ́ wọn ó kéré tán ẹ̀ẹ̀mejì lójúmọ́, ní àárọ̀ kùtù àti ní ìrọ̀lẹ́, fún ìṣẹ́jú 20 sí 30, nígbà tí ara àwọn ẹran bá balẹ̀.",
            "Àkọsílẹ̀ ń sọ àròjinlẹ̀ di ètò. Fún abo ẹran kọ̀ọ̀kan, kọ: nọ́mbà ìdánimọ̀ rẹ̀ (ID), ọjọ́ àti àkókò àsìkò ìfẹ́ akọ kọ̀ọ̀kan, ọjọ́ tí a gùn ún, akọ màálù, òbúkọ tàbí akọ ẹlẹ́dẹ̀ wo ló gùn ún tàbí straw AI wo ni a lò, àti ọjọ́ tí a retí ìbí. Nígbà náà o máa mọ ìgbà tí o máa wò bóyá ó tún padà sí àsìkò ìfẹ́ akọ ní nǹkan bí ọ̀sẹ̀ 3 lẹ́yìn náà, ìgbà tí o máa dá fífún màálù ní wàrà dúró, àti àwọn abo tí kò lóyún léraléra. Àkókò oyún jẹ́ nǹkan bí oṣù 9 fún màálù, nǹkan bí oṣù 5 fún ewúrẹ́, àti nǹkan bí oṣù 3, ọ̀sẹ̀ 3 àti ọjọ́ 3 fún abo ẹlẹ́dẹ̀; dókítà ẹranko rẹ tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ lè sọ iye gangan fún irú ẹran rẹ."
          ],
          steps: ["Fún abo ẹran ìbísí kọ̀ọ̀kan ní ID: àmì etí, orúkọ tàbí nọ́mbà.", "Ṣọ́ àsìkò ìfẹ́ akọ ẹ̀ẹ̀mejì lójúmọ́, ní àárọ̀ àti ìrọ̀lẹ́.", "Kọ ọjọ́, àkókò àti àwọn àmì tí o rí.", "Kọ ọjọ́ ìgùn àti akọ ẹran tàbí straw AI tí a lò.", "Kọ ọjọ́ tí o máa wò bóyá ó padà sí àsìkò ìfẹ́ akọ, nǹkan bí ọ̀sẹ̀ 3 lẹ́yìn náà.", "Kọ ọjọ́ tí a retí ìbí, kí o sì jẹ́ kí dókítà ẹranko tàbí òṣìṣẹ́ AI ṣàyẹ̀wò oyún."],
          words: [["Àsìkò ìfẹ́ akọ (heat, oestrus)", "àkókò kúkúrú tí abo ẹran máa ń gba akọ, tí ó sì lè lóyún."], ["Dídúró jẹ́ẹ́ fún ìgùn (standing heat)", "nígbà tí màálù bá dúró jẹ́ẹ́ kí ẹran míì gùn ún; àmì tó dájú jù pé ó wà ní àsìkò ìfẹ́ akọ."], ["Ìgùn (service)", "bíbá abo ẹran lò pọ̀, yálà láti ọwọ́ akọ ẹran tàbí nípasẹ̀ AI."], ["Àkókò oyún (gestation)", "àkókò láti ìgbà tí ẹran lóyún títí di ìgbà tí ó bímọ."]],
          slides: [
            { title: "Àsìkò ìfẹ́ akọ kúrú; pípàdánù rẹ̀ ń ná ọ̀sẹ̀ 3", bullets: ["Màálù, ewúrẹ́ àti ẹlẹ́dẹ̀: nǹkan bí ọjọ́ 21 ọjọ́ 21", "Àsìkò tí o pàdánù = ọ̀sẹ̀ oúnjẹ láìsí oyún"] },
            { title: "Àwọn àmì àsìkò ìfẹ́ akọ", bullets: ["Màálù: ó dúró jẹ́ẹ́ fún ìgùn (àmì tó dájú jù)", "Ó ń gun àwọn míì, kò balẹ̀, omi tó mọ́ ń jáde", "Ewúrẹ́: ó ń mi ìrù; abo ẹlẹ́dẹ̀: ó dúró nígbà tí a bá tẹ̀ ẹ́"] },
            { title: "Ṣọ́ wọn ẹ̀ẹ̀mejì lójúmọ́", bullets: ["Àárọ̀ kùtù àti ìrọ̀lẹ́", "Ìṣẹ́jú 20 sí 30, nígbà tí ara ẹran bá balẹ̀"] },
            { title: "Àkọsílẹ̀ ìbísí", bullets: ["ID, ọjọ́ àti àkókò àsìkò ìfẹ́ akọ, ọjọ́ ìgùn", "Akọ ẹran tàbí straw AI tí a lò", "Ọjọ́ àyẹ̀wò ìpadà sí àsìkò àti ọjọ́ ìbí"] }
          ],
          sources: [UGA_HEAT],
          tryIt: "Ṣe ojú-ewé àkọsílẹ̀ ìbísí lórí ìwé tàbí nínú àkọsílẹ̀ fóònù pẹ̀lú àwọn òpó wọ̀nyí: ID ẹran, ọjọ́ àti àkókò àsìkò ìfẹ́ akọ, àwọn àmì tí o rí, ọjọ́ ìgùn, akọ ẹran tàbí straw AI, àyẹ̀wò ìpadà sí àsìkò, ọjọ́ ìbí. Kọ ọ́ kún fún ọ̀kan lára àwọn abo ẹran rẹ, tàbí fún màálù àpẹẹrẹ.",
          youCanNow: "mọ àwọn àmì àsìkò ìfẹ́ akọ, kí o sì kọ àkọsílẹ̀ ìbísí tí ó ní àsìkò náà, ìgùn àti ọjọ́ ìbí.",
          quickCheck: [
            { objective: "O2", q: "Èwo ni àmì tó dájú jù pé màálù wà ní àsìkò ìfẹ́ akọ?", options: ["Ó ń jẹun ju ti tẹ́lẹ̀ lọ", "Ó ń dùbúlẹ̀ púpọ̀", "Ó dúró jẹ́ẹ́ nígbà tí ẹran míì bá gùn ún", "Irun ara rẹ̀ ń dán"], answer: 2, why: "Dídúró jẹ́ẹ́ fún ìgùn ni àmì tó dájú jù; àwọn àmì míì kàn ń tọ́ka sí i ni." },
            { objective: "O2", q: "Wọ́n gun ewúrẹ́ rẹ ní 1 March. Ìgbà wo ni o máa ṣọ́ bóyá ó padà sí àsìkò ìfẹ́ akọ?", options: ["Nǹkan bí ọ̀sẹ̀ 3 lẹ́yìn náà, ní àyíká 22 March", "Ní ọjọ́ kejì", "Lẹ́yìn oṣù 6", "Rárá; dandan ni pé ó ti lóyún"], answer: 0, why: "Àsìkò ìfẹ́ akọ máa ń dé ní nǹkan bí ọjọ́ 21 ọjọ́ 21, nítorí náà abo tí kò lóyún máa tún fi àmì hàn ní nǹkan bí ọ̀sẹ̀ 3 lẹ́yìn náà." }
          ]
        },
        {
          title: "Ìfàtọ̀sínú àtọwọ́dá (AI) àti yíyẹra fún ìbísí láàárín ẹbí",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Ṣètò AI pẹ̀lú òṣìṣẹ́ tó kọ́ṣẹ́ ní àkókò tó tọ́, kí o sì ṣètò ìgùn tí kò ní jẹ́ kí ẹbí tímọ́tímọ́ bá ara wọn bí.",
          text: [
            "Ìfàtọ̀sínú àtọwọ́dá (artificial insemination, AI) ni fífi àtọ̀ akọ ẹran tí a ti dán wò sínú ara abo ẹran. Ó ń fún àgbẹ̀ kékeré ní ìran akọ màálù tàbí òbúkọ tó dára jù láìjẹ́ pé ó ní láti sìn ín, ó sì ń dín ewu àwọn àrùn tí ìgùn ń tàn kálẹ̀ kù. Òṣìṣẹ́ AI tó kọ́ṣẹ́ tàbí dókítà ẹranko ló ń ṣe AI, kì í ṣe àgbẹ̀. Ọ̀nà tí kò tọ́ lè ṣe ẹran náà léṣe, a sì gbọ́dọ̀ pa àtọ̀ mọ́ ní dídì nínú liquid nitrogen títí di ìgbà tí a máa lò ó, bí bẹ́ẹ̀ kọ́ yóò kú.",
            "Wá òṣìṣẹ́ tó kọ́ṣẹ́, tí a sì fọwọ́ sí: béèrè ní ọ́fíìsì ẹran ọ̀sìn ìjọba ìbílẹ̀ rẹ, ẹgbẹ́ àjùmọ̀ṣe ọlọ́wàrà rẹ tàbí lọ́wọ́ dókítà ẹranko tí a fọwọ́ sí. Ní Kenya, KAGRC ń pèsè àtọ̀ nípasẹ̀ àwọn aṣojú tí wọ́n yàn, ó sì yẹ kí àwọn òṣìṣẹ́ AI forúkọ sílẹ̀ pẹ̀lú Kenya Veterinary Board; ní Nàìjíríà, ṣàyẹ̀wò pé dókítà ẹranko náà wà nínú àkọsílẹ̀ Veterinary Council of Nigeria. Òfin tí a sábà ń lò fún màálù ni AM-PM: màálù tí a kọ́kọ́ rí tó dúró jẹ́ẹ́ fún ìgùn ní àárọ̀, a máa fún un ní AI ní ọ̀sán tàbí ìrọ̀lẹ́ ọjọ́ yẹn; èyí tí a kọ́kọ́ rí ní ọ̀sán, a máa fún un ní àárọ̀ ọjọ́ kejì. Pe òṣìṣẹ́ náà ní kété tí o bá rí àsìkò ìfẹ́ akọ, kí o sì kọ orúkọ tàbí kóòdù akọ màálù tó wà lára straw náà sílẹ̀.",
            "Ìbísí láàárín ẹbí (inbreeding) túmọ̀ sí kí ẹbí tímọ́tímọ́ gun ara wọn: bàbá àti ọmọbìnrin rẹ̀, ìyá àti ọmọkùnrin rẹ̀, tàbí ẹ̀gbọ́n àti àbúrò. Àwọn ọmọ wọn sábà máa ń ṣàìlera, wọn kì í tètè dàgbà, ara wọn máa ń ṣàìyá jù, wọ́n sì lè ní àbùkù láti ìbí. Ó máa ń ṣẹlẹ̀ láìfura nígbà tí akọ màálù, òbúkọ, akọ ẹlẹ́dẹ̀ tàbí àkùkọ kan náà bá wà lórí oko fún ọ̀pọ̀ ọdún. Dènà rẹ̀: kọ ìyá àti bàbá gbogbo ẹran sílẹ̀, pààrọ̀ tàbí ta akọ ìbísí rẹ kí àwọn ọmọbìnrin rẹ̀ tó dàgbà tó láti bí, yá tàbí pààrọ̀ akọ ẹran pẹ̀lú àwọn àgbẹ̀ tí ẹran wọn kò bá tìrẹ tan, kí o sì lo straw AI láti ọ̀dọ̀ akọ màálù míì ní gbogbo ìgbà tí o bá ń bí ọmọbìnrin kan."
          ],
          steps: ["O rí i tó dúró jẹ́ẹ́ fún ìgùn: kọ àkókò náà sílẹ̀.", "Pe òṣìṣẹ́ AI rẹ tí a fọwọ́ sí lẹ́sẹ̀kẹsẹ̀.", "Lo òfin AM-PM fún màálù, tàbí ìmọ̀ràn òṣìṣẹ́ náà.", "Ṣàyẹ̀wò pé straw náà wá láti ọ̀dọ̀ akọ màálù tí a mọ̀, kí o sì kọ orúkọ tàbí kóòdù rẹ̀.", "Kí ìgùn kọ̀ọ̀kan tó wáyé, wo àkọsílẹ̀: ṣé akọ yìí ni bàbá rẹ̀, ọmọ rẹ̀ tàbí ẹ̀gbọ́n/àbúrò rẹ̀?", "Tí ó bá jẹ́ bẹ́ẹ̀, lo akọ míì tàbí akọ màálù AI míì."],
          words: [["Ìfàtọ̀sínú àtọwọ́dá (artificial insemination, AI)", "fífi àtọ̀ akọ ẹran tí a yàn sínú abo ẹran pẹ̀lú ọwọ́, tí òṣìṣẹ́ tó kọ́ṣẹ́ ń ṣe."], ["Straw", "ọ̀pá tínrín tí ó ní ìwọ̀n àtọ̀ dídì kan nínú, tí a kọ orúkọ tàbí kóòdù akọ màálù sí lára."], ["Liquid nitrogen", "omi tó tutù gan-an tí ó ń pa àtọ̀ mọ́ ní dídì títí di ìgbà tí a máa lò ó."], ["Ìbísí láàárín ẹbí (inbreeding)", "kí ẹbí tímọ́tímọ́ gun ara wọn, èyí tí ó ń mú ọmọ tí kò lágbára, tí ó ní àbùkù púpọ̀ wá."]],
          slides: [
            { title: "Ìdí tí a fi ń lo AI", bullets: ["Ìran tó dára jù láìsí pé o sin akọ màálù", "Ewu tó kéré sí i fún àrùn tí ìgùn ń tàn", "Òṣìṣẹ́ tó kọ́ṣẹ́ ló ń ṣe é, kì í ṣe àgbẹ̀"] },
            { title: "Wá òṣìṣẹ́ tí a fọwọ́ sí", bullets: ["Ọ́fíìsì ẹran ọ̀sìn, ẹgbẹ́ àjùmọ̀ṣe ọlọ́wàrà tàbí dókítà ẹranko", "Kenya: àwọn aṣojú KAGRC, Kenya Veterinary Board", "Nàìjíríà: àkọsílẹ̀ Veterinary Council of Nigeria"] },
            { title: "Àkókò: òfin AM-PM fún màálù", bullets: ["A rí àsìkò ní àárọ̀: fún un ní AI ní ọ̀sán ọjọ́ yẹn", "A rí àsìkò ní ọ̀sán: fún un ní AI ní àárọ̀ ọjọ́ kejì", "Kọ orúkọ tàbí kóòdù akọ màálù tó wà lára straw"] },
            { title: "Yẹra fún ìbísí láàárín ẹbí", bullets: ["Kò sí bàbá-ọmọbìnrin, ìyá-ọmọkùnrin, ẹ̀gbọ́n-àbúrò", "Pààrọ̀ akọ rẹ kí àwọn ọmọbìnrin rẹ̀ tó bí", "Lo akọ màálù AI míì fún ọmọbìnrin kọ̀ọ̀kan"] }
          ],
          sources: [UGA_HEAT, KAGRC, KVB, VCN, ILRI_AI],
          tryIt: "Kọ orúkọ àti nọ́mbà fóònù òṣìṣẹ́ AI tó kọ́ṣẹ́, tí a sì fọwọ́ sí, tó wà nítòsí rẹ (béèrè ní ọ́fíìsì ẹran ọ̀sìn tàbí ẹgbẹ́ àjùmọ̀ṣe rẹ). Lẹ́yìn náà wo àwọn ẹran rẹ: kọ abo èyíkéyìí tí ó bá akọ ìbísí rẹ lọ́wọ́lọ́wọ́ tan tímọ́tímọ́, kí o sì kọ bí o ṣe máa bí i lọ́nà míì.",
          youCanNow: "ṣètò AI pẹ̀lú òṣìṣẹ́ tó kọ́ṣẹ́ ní àkókò tó tọ́, kí o sì ṣètò ìgùn tí kò ní jẹ́ kí ẹbí tímọ́tímọ́ bá ara wọn bí.",
          quickCheck: [
            { objective: "O3", q: "Màálù kan dúró jẹ́ẹ́ fún ìgùn ní agogo 7 àárọ̀. Pẹ̀lú òfin AM-PM, ìgbà wo ni a máa fún un ní AI?", options: ["Ní ọjọ́ méjì", "Ní ọ̀sán tàbí ìrọ̀lẹ́ ọjọ́ yẹn", "Ní ọ̀sẹ̀ tó ń bọ̀", "Nígbà tí kò bá fi àmì àsìkò hàn mọ́ nìkan"], answer: 1, why: "Màálù tí a kọ́kọ́ rí ní àsìkò ìfẹ́ akọ ní àárọ̀, a máa fún un ní AI ní ọ̀sán tàbí ìrọ̀lẹ́ ọjọ́ yẹn." },
            { objective: "O4", q: "Akọ màálù rẹ ti wà lórí oko fún ọdún mẹ́rin, àwọn ọmọbìnrin rẹ̀ sì ti tó bí báyìí. Kí ni o máa ṣe?", options: ["Máa lò ó fún gbogbo wọn", "Lò ó fún àwọn ọmọbìnrin rẹ̀ tó tóbi jù nìkan", "Dá ìbísí dúró fún ọdún kan", "Lo akọ màálù míì tàbí AI láti ọ̀dọ̀ akọ màálù tí kò bá wọn tan fún àwọn ọmọbìnrin rẹ̀"], answer: 3, why: "Kí akọ màálù gun àwọn ọmọbìnrin rẹ̀ jẹ́ ìbísí láàárín ẹbí; akọ tí kò bá wọn tan tàbí akọ màálù AI míì ń dènà rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìbísí fún agbo ẹran tó dára jù",
        questions: [
          { objective: "O1", q: "Kí ló fà á tí irú ẹran ilẹ̀ òkèèrè tó ń mú èso púpọ̀ wá fi lè mówó wá ju ẹran àdàlú ìbílẹ̀ lọ ní àwọn oko kan?", options: ["Irú ẹran ilẹ̀ òkèèrè kì í fún ni ní wàrà púpọ̀ rárá", "Ẹran ìbílẹ̀ máa ń ta ju nígbà gbogbo", "A kò lè bọ́ irú ẹran ilẹ̀ òkèèrè ní koríko", "Ó nílò oúnjẹ, omi àti ìtọ́jú tí oko náà kò lè pèsè, nítorí náà èso rẹ̀ kéré, ara rẹ̀ sì ń ṣàìyá jù"], answer: 3, why: "Èso púpọ̀ dá lórí oúnjẹ àti ìtọ́jú tó dára; láìsí wọn, ẹran àdàlú tó le sábà máa ń ṣe dáadáa jù." },
          { objective: "O2", q: "Ìgbà mélòó ni o yẹ kí o máa ṣọ́ àwọn àmì àsìkò ìfẹ́ akọ?", options: ["Ó kéré tán ẹ̀ẹ̀mejì lójúmọ́, ní àárọ̀ àti ìrọ̀lẹ́", "Ẹ̀ẹ̀kan lọ́sẹ̀", "Nígbà tí ara ẹran kò bá yá nìkan", "Ẹ̀ẹ̀kan lóṣù"], answer: 0, why: "Àsìkò ìfẹ́ akọ kúrú, nítorí náà ṣíṣọ́ ẹ̀ẹ̀mejì lójúmọ́ nígbà tí ara ẹran bá balẹ̀ ń mú èyí tó pọ̀ jù nínú rẹ̀." },
          { objective: "O2", q: "Èwo nínú àwọn wọ̀nyí ló yẹ kí ó wà nínú àkọsílẹ̀ ìbísí?", options: ["Ojú ọjọ́ ojoojúmọ́", "Ọjọ́ ìgùn àti akọ ẹran tàbí straw AI tí a lò", "Àwọ̀ ilé ẹran", "Iye owó epo"], answer: 1, why: "Ọjọ́ ìgùn àti akọ ẹran ń jẹ́ kí o lè wò bóyá ó padà sí àsìkò, mọ ọjọ́ ìbí, kí o sì yẹra fún ìbísí láàárín ẹbí." },
          { objective: "O3", q: "Ta ló yẹ kí ó ṣe ìfàtọ̀sínú àtọwọ́dá?", options: ["Òṣìṣẹ́ oko èyíkéyìí lẹ́yìn tí ó bá wo fídíò", "Ẹni tó ta màálù náà", "Òṣìṣẹ́ AI tó kọ́ṣẹ́, tí a fọwọ́ sí, tàbí dókítà ẹranko", "Aládùúgbò tí apá rẹ̀ lágbára"], answer: 2, why: "AI nílò ìdálẹ́kọ̀ọ́: ọ̀nà tí kò tọ́ lè ṣe ẹran léṣe, a sì gbọ́dọ̀ bójú tó àtọ̀ lọ́nà tó tọ́." },
          { objective: "O4", q: "Ìgùn wo ni ìbísí láàárín ẹbí?", options: ["Màálù kan pẹ̀lú akọ màálù AI tí kò bá a tan", "Abo ewúrẹ́ kan pẹ̀lú òbúkọ tí a yá láti abúlé míì", "Abo ẹlẹ́dẹ̀ ọ̀dọ́ kan pẹ̀lú akọ ẹlẹ́dẹ̀ tí a rà láti oko tó jìnnà", "Àgbò kan pẹ̀lú ọmọbìnrin òun fúnra rẹ̀"], answer: 3, why: "Bàbá pẹ̀lú ọmọbìnrin rẹ̀ jẹ́ ìgùn ẹbí tímọ́tímọ́, èyí sì ni ìbísí láàárín ẹbí." }
        ]
      }
    },
    {
      name: "Orí 2: Dídá àìsàn dúró kí ó má wọ oko",
      lessons: [
        {
          title: "Ètò ààbò àìsàn rẹ: àwọn agbègbè, ìwẹ̀ ẹsẹ̀ àti àlejò",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ya àwòrán àwọn agbègbè ààbò àìsàn oko rẹ, kí o sì kọ òfin fún ìwẹ̀ ẹsẹ̀ àti àlejò.",
          text: [
            "Ààbò àìsàn oko (biosecurity) túmọ̀ sí gbogbo ohun tí o ń ṣe láti dá kòkòrò àrùn dúró kí ó má wọ oko rẹ, kí ó má tàn kálẹ̀ nínú rẹ̀, kí ó má sì jáde kúrò níbẹ̀. Ọ̀pọ̀ àrùn máa ń wọlé lára ẹran, ènìyàn, bàtà, aṣọ, ọkọ̀, àpótí ẹran, àpò oúnjẹ ẹran tàbí ohun èlò. Ọ̀pọ̀ lára àwọn ọ̀nà tó dára jù kò wọ́n: ọgbà, ilẹ̀kùn ọgbà, ìwẹ̀ ẹsẹ̀, ọṣẹ àti òfin tí a ń pa mọ́ lójoojúmọ́.",
            "Pín oko sí agbègbè. Agbègbè mímọ́ ni ibi tí àwọn ẹran ń gbé: àwọn tí wọ́n ń tọ́jú wọn nìkan ló ń wọ ibẹ̀. Agbègbè ààlà yí i ká: ilé ìkẹ́rùsí, ibi ìpààrọ̀ aṣọ, ìwẹ̀ ẹsẹ̀. Agbègbè ẹlẹ́gbin wà níta: ọ̀nà, ibi ìgbọ́kọ̀sí, àpótí ẹran ọjà. Ní ẹnu ọ̀nà KAN ṣoṣo sí ibi ẹran, pẹ̀lú ilẹ̀kùn tí o lè tì. Ọkọ̀ àwọn oníṣòwò máa dúró sí ìta ọgbà; kí wọ́n kó ẹran sí i tàbí kó o kúrò níbẹ̀ ní ààlà oko.",
            "Ní ẹnu ọ̀nà, gbé ìwẹ̀ ẹsẹ̀ sí ibẹ̀ pẹ̀lú oògùn apakòkòrò àrùn oko tí a pò bí ohun tí a kọ sí ara rẹ̀ ṣe sọ, kí o sì pààrọ̀ rẹ̀ nígbà tí ó bá dọ̀tí tàbí lẹ́yìn òjò; ẹ̀gbin ń jẹ́ kí oògùn apakòkòrò àrùn má ṣiṣẹ́, nítorí náà fọ ẹrẹ̀ kúrò lára bàtà kọ́kọ́. Èyí tó dára jù ni pé kí o ní bàtà àti aṣọ tí a ń lò lórí oko nìkan ní ẹnu ọ̀nà. Ní ọṣẹ àti omi fún fífọ ọwọ́. Jẹ́ kí àwọn àlejò jẹ́ àwọn tí ó pọn dandan pé kí wọ́n wá nìkan, béèrè ibi tí wọ́n ti wà pẹ̀lú ẹran, kí o sì kọ àbẹ̀wò kọ̀ọ̀kan sínú ìwé àkọsílẹ̀ àlejò: ọjọ́, orúkọ, nọ́mbà fóònù, ìdí àbẹ̀wò àti oko tí wọ́n lọ kẹ́yìn."
          ],
          steps: ["Ya àwòrán oko rẹ: ilé, ọgbà ẹran, ilé ìkẹ́rùsí, ilẹ̀kùn ọgbà àti ọ̀nà.", "Sàmì sí agbègbè mímọ́, agbègbè ààlà àti agbègbè ẹlẹ́gbin.", "Yan ẹnu ọ̀nà kan ṣoṣo sí ibi ẹran, pẹ̀lú ilẹ̀kùn.", "Gbé ìwẹ̀ ẹsẹ̀ àti ibi fífọ ọwọ́ sí ẹnu ọ̀nà náà.", "Fi bàtà àti aṣọ oko nìkan sí ibẹ̀ tí o bá lè ṣe é.", "Bẹ̀rẹ̀ ìwé àkọsílẹ̀ àlejò, kí o sì jẹ́ kí ọkọ̀ oníṣòwò dúró sí ìta ọgbà."],
          words: [["Ààbò àìsàn oko (biosecurity)", "àwọn ìgbésẹ̀ tí ó ń dá kòkòrò àrùn dúró kí ó má wọ oko, kí ó má tàn kálẹ̀ nínú rẹ̀, kí ó má sì jáde kúrò níbẹ̀."], ["Ìwẹ̀ ẹsẹ̀ (footbath)", "àwo tí kò jìn tí ó ní oògùn apakòkòrò àrùn, tí àwọn ènìyàn ń tẹ̀ sí láti fọ bàtà wọn."], ["Oògùn apakòkòrò àrùn (disinfectant)", "kẹ́míkà tí ó ń pa kòkòrò àrùn; lo ọjà oko tí a pò bí ohun tí a kọ sí ara rẹ̀ ṣe sọ."], ["Ìwé àkọsílẹ̀ àlejò (visitor log)", "ìwé tí o ń kọ orúkọ gbogbo àlejò, bí a ṣe lè kàn sí wọn, ìdí àbẹ̀wò àti oko tí wọ́n lọ kẹ́yìn sí."]],
          slides: [
            { title: "Kòkòrò àrùn máa ń wọlé lára...", bullets: ["Ẹran tuntun, ènìyàn, bàtà àti aṣọ", "Ọkọ̀, àpótí ẹran, àpò oúnjẹ ẹran àti irinṣẹ́", "Ọ̀pọ̀ ọ̀nà tó dára kò wọ́n"] },
            { title: "Agbègbè mẹ́ta", bullets: ["Mímọ́: ibi tí àwọn ẹran ń gbé", "Ààlà: ilé ìkẹ́rùsí, ibi ìpààrọ̀ aṣọ, ìwẹ̀ ẹsẹ̀", "Ẹlẹ́gbin: ọ̀nà, ibi ìgbọ́kọ̀sí, àpótí ẹran ọjà"] },
            { title: "Ẹnu ọ̀nà kan, pẹ̀lú ìwẹ̀ ẹsẹ̀", bullets: ["Ilẹ̀kùn kan ṣoṣo sí ibi ẹran", "Fọ ẹrẹ̀ kúrò, lẹ́yìn náà tẹ ìwẹ̀ ẹsẹ̀", "Oògùn apakòkòrò àrùn tí a pò bí ìwé ara rẹ̀ ṣe sọ"] },
            { title: "Àwọn àlejò", bullets: ["Àwọn tí ó pọn dandan pé kí wọ́n wá nìkan", "Bàtà oko àti fífọ ọwọ́", "Kọ ọjọ́, orúkọ, fóònù, ìdí, oko tí wọ́n lọ kẹ́yìn"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Ya àwòrán oko rẹ sórí ìwé. Sàmì sí agbègbè mímọ́, agbègbè ààlà àti agbègbè ẹlẹ́gbin, ẹnu ọ̀nà kan ṣoṣo, ìwẹ̀ ẹsẹ̀ àti ibi tí ọkọ̀ akẹ́rù máa dúró sí. Kọ òfin àlejò mẹ́ta sí ìsàlẹ̀ àwòrán náà.",
          youCanNow: "ya àwòrán àwọn agbègbè ààbò àìsàn fún oko rẹ, kí o sì ṣe òfin fún ìwẹ̀ ẹsẹ̀, fífọ ọwọ́ àti àlejò.",
          quickCheck: [
            { objective: "O5", q: "Oníṣòwò ẹlẹ́dẹ̀ kan dé láti ra ọmọ ẹlẹ́dẹ̀ tí a ti gba ọmú lẹ́nu wọn. Ibo ni ọkọ̀ rẹ̀ yẹ kí ó dúró sí?", options: ["Ní ìta ọgbà, kí wọ́n sì kó ẹran sí i ní ààlà oko", "Lẹ́gbẹ̀ẹ́ ọgbà ẹlẹ́dẹ̀", "Nínú ilé ìkẹ́rùsí oúnjẹ ẹran", "Ibikíbi tí ó bá wù ú"], answer: 0, why: "Ọkọ̀ tí ó ń lọ sí ọ̀pọ̀ oko máa ń gbé kòkòrò àrùn, nítorí náà ó máa dúró sí agbègbè ẹlẹ́gbin ní ìta ọgbà." },
            { objective: "O5", q: "Ìwẹ̀ ẹsẹ̀ rẹ kún fún ẹrẹ̀ lẹ́yìn òjò. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀; ó ṣì ń ṣiṣẹ́", "Fi omi kún un nìkan", "Da á nù, fọ ọ́, kí o sì tún fi oògùn apakòkòrò àrùn tí a pò bí ìwé ara rẹ̀ ṣe sọ kún un", "Gbé e kúrò títí di ìgbà ẹ̀rùn"], answer: 2, why: "Ẹ̀gbin àti omi tó ti pò ó ń jẹ́ kí oògùn apakòkòrò àrùn má ṣiṣẹ́, nítorí náà a gbọ́dọ̀ fọ ìwẹ̀ ẹsẹ̀ tó dọ̀tí kí a sì tún un kún." }
          ]
        },
        {
          title: "Ìyàsọ́tọ̀ fún ẹran tuntun àti kíkó òkú ẹran dànù láìléwu",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ṣètò ìyàsọ́tọ̀ fún ẹran tuntun àti ọ̀nà tí kò léwu láti kó òkú ẹran dànù.",
          text: [
            "Ẹran tuntun ni ọ̀nà tí àrùn sábà máa ń gbà wọ oko jù. Ẹran lè dà bí ẹni pé ara rẹ̀ le, kí ó sì tún gbé kòkòrò àrùn tàbí kòkòrò inú ara. Ra ẹran láti oko tí o mọ̀, tí ara àwọn ẹran ibẹ̀ le, béèrè ìtàn àjẹsára àti ìtọ́jú ẹran náà, kí o sì yẹra fún ẹran láti ọjà tàbí agbègbè tí ìròyìn àrùn ti wà.",
            "Ìyàsọ́tọ̀ (quarantine) túmọ̀ sí pípa ẹran tuntun tàbí ẹran tó padà dé mọ́ sínú ọgbà ọ̀tọ̀, jìnnà sí agbo rẹ, fún àkókò tí dókítà ẹranko rẹ bá gbà ọ́ níyànjú, nígbà púpọ̀ ọ̀sẹ̀ díẹ̀. Máa tọ́jú wọn kẹ́yìn lójoojúmọ́, pẹ̀lú bàtà àti irinṣẹ́ ọ̀tọ̀, kí o sì máa ṣọ́ wọn lójoojúmọ́. Béèrè lọ́wọ́ dókítà ẹranko rẹ bóyá kí o ṣe àyẹ̀wò, ìtọ́jú tàbí àjẹsára fún wọn kí wọ́n tó dara pọ̀ mọ́ àwọn yòókù. Àwọn ẹran tí wọ́n padà láti ọjà tàbí ìfihàn láìtà wọ́n náà máa lọ sí ìyàsọ́tọ̀.",
            "Òkú ẹran ń tan àrùn kálẹ̀ sí àwọn ẹran rẹ, ajá, ẹranko ìgbẹ́ àti àwọn aládùúgbò. Má ṣe ta, jẹ tàbí fi ẹran tí ó kú láìmọ ìdí rẹ̀ fún ẹnikẹ́ni láéláé. Wọ ìbọ̀wọ́ kí o tó fọwọ́ kan òkú ẹran, lẹ́yìn náà kó o dànù bí dókítà ẹranko rẹ tàbí òfin ìbílẹ̀ ṣe sọ: nígbà púpọ̀ nínú kòtò jíjìn, jìnnà sí omi àti ilé, tí ajá àti ẹranko ìgbẹ́ kò lè hú. Tí ẹran kan bá kú lójijì, tàbí tí ara ọ̀pọ̀ kò bá yá, má ṣe ṣí òkú náà tàbí gbé e kúrò lórí oko: kọ́kọ́ pe dókítà ẹranko, nítorí ó lè jẹ́ àrùn tí a gbọ́dọ̀ fi tó ìjọba létí tàbí anthrax."
          ],
          steps: ["Ra láti oko tí o mọ̀, tí ara ẹran ibẹ̀ le nìkan; béèrè ìtàn ìlera rẹ̀.", "Ṣètò ọgbà ìyàsọ́tọ̀ ọ̀tọ̀, jìnnà sí agbo ẹran rẹ.", "Pa ẹran tuntun àti èyí tó padà dé mọ́ síbẹ̀ fún àkókò tí dókítà ẹranko gbà ọ́ níyànjú.", "Máa tọ́jú wọn kẹ́yìn lójoojúmọ́, pẹ̀lú bàtà àti irinṣẹ́ ọ̀tọ̀.", "Yan ibi tí o máa kó òkú ẹran dànù sí pẹ̀lú dókítà ẹranko, jìnnà sí omi àti ilé.", "Ikú òjijì tàbí ikú tí a kò mọ ìdí: má ṣí òkú náà, má gbé e kúrò; pe dókítà ẹranko."],
          words: [["Ìyàsọ́tọ̀ (quarantine)", "pípa ẹran tuntun tàbí ẹran tó padà dé mọ́ sọ́tọ̀ fún àkókò kan láti rí i bóyá wọ́n gbé àrùn wá."], ["Òkú ẹran (carcass)", "ara ẹran tí ó ti kú."], ["Àrùn tí a gbọ́dọ̀ fi tó ìjọba létí (notifiable disease)", "àrùn tí òfin sọ pé a gbọ́dọ̀ fi tó ọ́fíìsì ìlera ẹranko ìjọba létí."]],
          slides: [
            { title: "Ẹran tuntun ń mú àrùn wá", bullets: ["Ẹran tí ó dà bí ẹni pé ara rẹ̀ le lè gbé kòkòrò àrùn", "Ra láti oko tí o mọ̀, tí ara ẹran ibẹ̀ le", "Béèrè ìtàn ìlera rẹ̀"] },
            { title: "Ìyàsọ́tọ̀", bullets: ["Ọgbà ọ̀tọ̀, jìnnà sí agbo ẹran rẹ", "Fún àkókò tí dókítà ẹranko gbà ọ́ níyànjú", "Tọ́jú wọn kẹ́yìn, pẹ̀lú bàtà àti irinṣẹ́ ọ̀tọ̀"] },
            { title: "Òkú ẹran", bullets: ["Má ṣe tà á, jẹ ẹ́ tàbí fi í fúnni láéláé", "Ìbọ̀wọ́; kó o dànù bí dókítà tàbí òfin ìbílẹ̀ ṣe sọ", "Kòtò jíjìn, jìnnà sí omi; ajá kò lè hú u"] },
            { title: "Ikú òjijì", bullets: ["Má ṣí òkú náà, má sì gbé e kúrò", "Kọ́kọ́ pe dókítà ẹranko"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Sàmì sí ọgbà ìyàsọ́tọ̀ lórí àwòrán oko rẹ, jìnnà sí àwọn ẹran rẹ bí o ṣe lè ṣe é tó, kí o sì kọ bí àkókò tí dókítà ẹranko rẹ gbà ọ́ níyànjú pé kí ẹran tuntun fi wà níbẹ̀ ṣe gùn tó (béèrè tí o kò bá mọ̀). Lẹ́yìn náà sàmì sí ibi àti bí o ṣe máa kó òkú ẹran dànù, kí o sì kọ òfin fún ikú òjijì.",
          youCanNow: "ya ẹran tuntun sọ́tọ̀, kó òkú ẹran dànù láìléwu, kí o sì mọ ìgbà tí o gbọ́dọ̀ pe dókítà ẹranko kí o tó fọwọ́ kan òkú ẹran.",
          quickCheck: [
            { objective: "O5", q: "O ra ewúrẹ́ mẹ́ta ní ọjà. Kí ni o máa ṣe nígbà tí o bá dé ilé?", options: ["Kó wọn sínú agbo rẹ lẹ́sẹ̀kẹsẹ̀", "Pa wọ́n mọ́ sínú ọgbà ọ̀tọ̀ fún àkókò tí dókítà ẹranko rẹ gbà ọ́ níyànjú", "Tà wọ́n lẹ́sẹ̀kẹsẹ̀", "Jẹ́ kí wọ́n jẹko pẹ̀lú ewúrẹ́ aládùúgbò"], answer: 1, why: "Ìyàsọ́tọ̀ ń fi hàn bóyá ẹran tuntun gbé àrùn wá kí wọ́n tó lè kó o ran agbo rẹ." },
            { objective: "O5", q: "Ẹlẹ́dẹ̀ kan kú lójijì ní òru. Kí ni ìgbésẹ̀ àkọ́kọ́ tó tọ́?", options: ["Ṣí i láti rí ohun tó ṣẹlẹ̀", "Ta ẹran rẹ̀ kíákíá", "Fi òkú náà sílẹ̀ níbi tí ó wà, má jẹ́ kí ènìyàn àti ẹran súnmọ́ ọn, kí o sì pe dókítà ẹranko", "Jù ú sínú odò"], answer: 2, why: "Ikú òjijì lè jẹ́ àrùn tí a gbọ́dọ̀ fi tó ìjọba létí; ṣíṣí òkú tàbí gbígbé e kúrò lè tàn án kálẹ̀." }
          ]
        },
        {
          title: "African Swine Fever àti avian influenza: mọ̀ ọ́, dá a dúró, fi tó létí",
          objectives: ["O6"],
          minutes: 6,
          goal: "Dá àwọn àmì ìkìlọ̀ African Swine Fever àti avian influenza mọ̀, kí o sì fi wọ́n tó dókítà ẹranko létí lẹ́sẹ̀kẹsẹ̀.",
          text: [
            "African Swine Fever (ASF) jẹ́ àrùn kòkòrò àrùn fáírọ́ọ̀sì (virus) tí ó ń kọlu ẹlẹ́dẹ̀, tí ó ti fa àdánù ńlá ní ọ̀pọ̀ orílẹ̀-èdè Áfíríkà, pẹ̀lú Nàìjíríà. WOAH ṣe àkọsílẹ̀ ibà gíga, àìlágbára, àìfẹ́ jẹun, àbàwọ́n pupa tàbí àwọ̀ elésè àlùkò lára awọ, èébì, ìgbẹ́ gbuuru, oyún tí ó ń bàjẹ́ lára abo ẹlẹ́dẹ̀ àti ikú, tí ó tó 100 nínú 100 ẹlẹ́dẹ̀ tí ń kú ní irú rẹ̀ tó le. Ó ń tàn kálẹ̀ nípasẹ̀ fífara kan ẹlẹ́dẹ̀ tí ara rẹ̀ kò yá, ẹran ẹlẹ́dẹ̀ àti àjẹkù oúnjẹ (swill) láti ara ẹlẹ́dẹ̀ tó ní àrùn, àti aṣọ, bàtà, ọkọ̀ àti ohun èlò tí ó ti ní kòkòrò àrùn, àti eegbọn rírọ̀ (soft ticks) níbi tí wọ́n wà. Kòkòrò àrùn náà máa ń pẹ́ nínú ẹran ẹlẹ́dẹ̀ àti nínú àyíká. Kò ń ràn ènìyàn. FAO sọ pé kò sí àjẹsára tàbí ìtọ́jú tó ṣiṣẹ́, nítorí náà ìdènà nìkan ni ọ̀nà àkóso; WOAH kìlọ̀ nípa àjẹsára tí kò dé ìpele, nítorí náà má ṣe lo \"àjẹsára ASF\" èyíkéyìí tí ọ́fíìsì ìlera ẹranko orílẹ̀-èdè rẹ kò fọwọ́ sí láéláé.",
            "Avian influenza (àrùn ibà ẹyẹ, bird flu) jẹ́ àrùn fáírọ́ọ̀sì tí ó ń kọlu ẹyẹ. Irú rẹ̀ tó le lè pa èyí tó pọ̀ jù nínú agbo adìẹ láàárín ọjọ́ díẹ̀. Àwọn àmì tí USDA APHIS ṣe àkọsílẹ̀ rẹ̀ ni ikú òjijì láìsí ìkìlọ̀, ẹyẹ tí kò lágbára tí kò sì jẹun mọ́, ẹyin tí ó dín kù tàbí ẹyin tí èèpo rẹ̀ rọ̀, ògbe, àgbọ̀n àti ẹsẹ̀ tí ó wú tí ó sì di elésè àlùkò, mímí gúlegúle, ikọ́ àti ọrùn tí ó wọ́. Ó ń tàn kálẹ̀ láti ọ̀dọ̀ ẹyẹ ìgbẹ́, ẹyẹ tí ara wọn kò yá, ọjà ẹyẹ ààyè, ìgbẹ́ ẹyẹ, àpótí ẹyẹ, oúnjẹ, omi àti ohun èlò. Ènìyàn kì í fi bẹ́ẹ̀ kó o, èyí tó pọ̀ jù nípasẹ̀ fífara kan ẹyẹ tí ara wọn kò yá tímọ́tímọ́, nítorí náà má ṣe fi ọwọ́ lásán kan ẹyẹ tí ara rẹ̀ kò yá tàbí tí ó ti kú láéláé.",
            "Àwọn àrùn méjèèjì jẹ́ àrùn tí a gbọ́dọ̀ fi tó ìjọba létí: a gbọ́dọ̀ fi èyí tí a fura sí tó dókítà ẹranko tàbí ọ́fíìsì ìlera ẹranko létí lẹ́sẹ̀kẹsẹ̀. Àyẹ̀wò ilé-ìwádìí (lab) nìkan ló lè fìdí wọn múlẹ̀, nítorí àwọn àrùn míì jọ wọ́n. Láti dènà wọn: má ṣe bọ́ ẹlẹ́dẹ̀ ní àjẹkù oúnjẹ tí a kò sè láéláé, ra láti oko tí ara ẹran ibẹ̀ le nìkan, pa ẹlẹ́dẹ̀ mọ́ sínú ọgbà, kí o sì pa adìẹ mọ́ sínú ilé, jìnnà sí ẹyẹ ìgbẹ́, kí o sì máa lo ètò ààbò àìsàn rẹ lójoojúmọ́. Tí o bá fura sí ọ̀kan nínú àwọn àrùn náà: pa gbogbo ẹran mọ́ sínú ilé wọn, dá gbogbo títà àti gbígbé ẹran, ẹran pípa, ẹyin àti ìgbẹ́ ẹran dúró, má jẹ́ kí àlejò wọlé, kí o sì pe dókítà ẹranko."
          ],
          steps: ["Mọ àwọn àmì ASF (ẹlẹ́dẹ̀) àti avian influenza (adìẹ).", "Máa ṣàyẹ̀wò àwọn ẹran rẹ lójoojúmọ́.", "Tí o bá fura sí àrùn: pa gbogbo ẹran mọ́ sínú ọgbà tàbí ilé wọn.", "Dá gbogbo títà àti gbígbé dúró: ẹran ààyè, ẹran pípa, ẹyin, ìgbẹ́ ẹran, ohun èlò.", "Má ṣí, má tà, má sì jẹ ẹran tí ara rẹ̀ kò yá tàbí tí ó ti kú; má fi ọwọ́ lásán kàn án.", "Pe dókítà ẹranko tàbí ọ́fíìsì ìlera ẹranko lẹ́sẹ̀kẹsẹ̀, kí o sì tẹ̀lé ìtọ́ni wọn."],
          words: [["African Swine Fever (ASF)", "àrùn fáírọ́ọ̀sì tí ó ń pa ẹlẹ́dẹ̀, tí kò ní àjẹsára tàbí ìtọ́jú tó ṣiṣẹ́; kò ń ràn ènìyàn."], ["Avian influenza", "àrùn ibà ẹyẹ (bird flu): àrùn fáírọ́ọ̀sì tí ó ń kọlu ẹyẹ; irú rẹ̀ tó le ń pa èyí tó pọ̀ jù nínú agbo adìẹ."], ["Àjẹkù oúnjẹ (swill)", "oúnjẹ tí a jẹ kù tí a fi ń bọ́ ẹlẹ́dẹ̀; àjẹkù tí a kò sè tí ó ní ẹran ẹlẹ́dẹ̀ nínú lè tan ASF kálẹ̀."], ["Ọ́fíìsì ìlera ẹranko (veterinary authority)", "ọ́fíìsì ìjọba tí ó ń bójú tó àrùn ẹranko, bí iṣẹ́ ìlera ẹranko ti orílẹ̀-èdè tàbí ti ìpínlẹ̀/county."]],
          slides: [
            { title: "African Swine Fever (ẹlẹ́dẹ̀)", bullets: ["Ibà gíga, àìlágbára, àìjẹun, awọ pupa tàbí elésè àlùkò", "Èébì, ìgbẹ́ gbuuru, oyún bàjẹ́, ikú òjijì", "Kò sí àjẹsára tàbí ìtọ́jú tó ṣiṣẹ́ (FAO)"] },
            { title: "Bí ASF ṣe ń tàn kálẹ̀", bullets: ["Ẹlẹ́dẹ̀ aláìsàn, ẹran ẹlẹ́dẹ̀ àti àjẹkù tí a kò sè", "Bàtà, aṣọ, ọkọ̀ àti irinṣẹ́", "Kò ń ràn ènìyàn"] },
            { title: "Avian influenza (adìẹ)", bullets: ["Ikú òjijì; ẹyẹ tí kò lágbára; ẹyin dín kù", "Ògbe àti àgbọ̀n tí ó wú, tí ó di elésè àlùkò; mímí gúlegúle", "Ẹyẹ ìgbẹ́, ọjà, àpótí ẹyẹ, ìgbẹ́ ẹyẹ ń tàn án"] },
            { title: "A gbọ́dọ̀ fi tó ìjọba létí lẹ́sẹ̀kẹsẹ̀", bullets: ["Pa gbogbo ẹran mọ́ sílé; dá gbogbo títà àti gbígbé dúró", "Má fi ọwọ́ lásán kàn án; má ṣí i, má tà á, má jẹ ẹ́", "Pe dókítà ẹranko tàbí ọ́fíìsì ìlera ẹranko báyìí"] }
          ],
          sources: [WOAH_ASF, FAO_ASF, WOAH_ASF_VACCINE, WOAH_AI, APHIS_AI],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ààbò àìsàn ojú-ewé kan rẹ. Lo àwòrán oko rẹ pẹ̀lú àwọn agbègbè, òfin ìwẹ̀ ẹsẹ̀ àti àlejò, ìyàsọ́tọ̀ àti kíkó òkú ẹran dànù, lẹ́yìn náà fi àwọn àmì ìkìlọ̀ ASF tàbí avian influenza kún un, àwọn ohun tí o máa ṣe ní wákàtí àkọ́kọ́, àti orúkọ àti nọ́mbà fóònù dókítà ẹranko rẹ.",
          youCanNow: "dá àwọn àmì ìkìlọ̀ African Swine Fever àti avian influenza mọ̀, dá gbogbo gbígbé ẹran dúró, kí o sì fi àrùn tí o fura sí tó dókítà ẹranko létí lẹ́sẹ̀kẹsẹ̀.",
          quickCheck: [
            { objective: "O6", q: "Ọ̀pọ̀ lára àwọn ẹlẹ́dẹ̀ rẹ ní ibà gíga, àbàwọ́n elésè àlùkò lára awọ, méjì sì kú ní òru. Kí ni o máa kọ́kọ́ ṣe?", options: ["Ta àwọn yòókù kíákíá kí wọ́n tó kú", "Ra àjẹsára ASF ní ọjà", "Fi oògùn tó ṣẹ́kù tọ́jú wọn", "Pa gbogbo ẹlẹ́dẹ̀ mọ́ sínú ọgbà, dá gbogbo gbígbé àti títà dúró, kí o sì pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀"], answer: 3, why: "Àwọn wọ̀nyí jẹ́ àmì ìkìlọ̀ ASF, àrùn tí a gbọ́dọ̀ fi tó ìjọba létí: dá gbígbé ẹran dúró kí o sì fi tó wọn létí lẹ́sẹ̀kẹsẹ̀." },
            { objective: "O6", q: "Ìṣe wo ló ń ràn wá lọ́wọ́ láti dá African Swine Fever dúró kí ó má wọ oko?", options: ["Kí a má ṣe bọ́ ẹlẹ́dẹ̀ ní àjẹkù oúnjẹ tí a kò sè láéláé", "Bíbọ́ ẹlẹ́dẹ̀ ní àjẹkù oúnjẹ òtẹ́ẹ̀lì", "Jíjẹ́ kí ẹlẹ́dẹ̀ máa rìn kiri abúlé", "Rírà ẹlẹ́dẹ̀ lọ́wọ́ oníṣòwò èyíkéyìí tó ń kọjá"], answer: 0, why: "Àjẹkù oúnjẹ tí a kò sè lè ní ẹran ẹlẹ́dẹ̀ tí ó ní kòkòrò àrùn ASF, tí ó máa ń pẹ́ nínú ẹran." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídá àìsàn dúró kí ó má wọ oko",
        questions: [
          { objective: "O5", q: "Nínú ètò ààbò àìsàn, agbègbè wo ni agbègbè mímọ́?", options: ["Ọ̀nà tí ó wà ní ìta oko", "Ibi ìgbọ́kọ̀sí fún ọkọ̀ akẹ́rù", "Ibi tí àwọn ẹran ń gbé", "Ọjà"], answer: 2, why: "Agbègbè mímọ́ ni ibi ẹran, níbi tí àwọn tí ń tọ́jú ẹran nìkan ń lọ." },
          { objective: "O5", q: "Kí ni ìdí pàtàkì fún ìwé àkọsílẹ̀ àlejò?", options: ["Láti gba owó lọ́wọ́ àlejò", "Láti mọ ẹni tó wá, ìgbà tí ó wá àti ibi tí ó ti wá tí àrùn bá yọ", "Láti ka iye ọ̀rẹ́ tí o ní", "Láti polówó oko"], answer: 1, why: "Tí àrùn bá yọ, ìwé àkọsílẹ̀ náà ń ran dókítà ẹranko lọ́wọ́ láti tọpa ibi tí ó ti lè wá." },
          { objective: "O5", q: "Báwo ni o ṣe yẹ kí o kó ewúrẹ́ tí ó kú láìmọ ìdí rẹ̀ dànù?", options: ["Ta ẹran rẹ̀ lówó pọ́ọ́kú", "Fún àwọn ajá", "Fi í sílẹ̀ nínú igbó", "Wọ ìbọ̀wọ́ kí o sì kó o dànù bí dókítà ẹranko tàbí òfin ìbílẹ̀ ṣe sọ, jìnnà sí omi"], answer: 3, why: "Òkú ẹran ń tan àrùn kálẹ̀; kíkó o dànù láìléwu bí dókítà ẹranko ṣe gbà ọ́ níyànjú ń dáàbò bo ẹran, ènìyàn àti omi." },
          { objective: "O6", q: "Ṣé àjẹsára tàbí ìtọ́jú tó ṣiṣẹ́ wà tí o lè lò fún African Swine Fever?", options: ["Rárá; FAO sọ pé ìdènà nípasẹ̀ ààbò àìsàn ni ọ̀nà àkóso kan ṣoṣo", "Bẹ́ẹ̀ ni, oògùn apakòkòrò (antibiotic) èyíkéyìí ń wò ó sàn", "Bẹ́ẹ̀ ni, wọ́n ń tà á ní gbogbo ọjà", "Bẹ́ẹ̀ ni, àdàlú egbòogi ń wò ó sàn"], answer: 0, why: "FAO sọ pé kò sí àjẹsára tàbí ìtọ́jú tó ṣiṣẹ́ fún ASF, nítorí náà ìdènà ni ọ̀nà àkóso." },
          { objective: "O6", q: "Àwọn adìẹ ẹlẹ́yin rẹ dá yíyé ẹyin dúró lójijì, ògbe àwọn kan wú, ó sì di elésè àlùkò, ọ̀pọ̀ sì kú ní ọjọ́ kan. Kí ni o máa ṣe?", options: ["Ta ẹyin àti adìẹ ní ọjà lónìí", "Sin àwọn adìẹ tó kú kí o sì dákẹ́", "Pa àwọn adìẹ mọ́ sílé, dá gbogbo gbígbé dúró, má fi ọwọ́ lásán kàn wọ́n, kí o sì fi tó dókítà ẹranko létí lẹ́sẹ̀kẹsẹ̀", "Tú àwọn adìẹ sílẹ̀ síta"], answer: 2, why: "Àwọn àmì wọ̀nyí tọ́ka sí avian influenza, tí a gbọ́dọ̀ fi tó ìjọba létí lẹ́sẹ̀kẹsẹ̀." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ọ̀sìn Ẹran, Ìbísí àti Ààbò Àìsàn Oko",
    questions: [
      { objective: "O1", q: "Kí ló yẹ kí ó darí yíyan irú ẹran rẹ jù?", options: ["Ohun tí àwọn oníbàárà rẹ fẹ́ àti ohun tí oko rẹ lè pèsè ní gbogbo ọdún", "Irú ẹran tó wà nínú ìpolówó tuntun", "Irú ẹran tí ẹran rẹ̀ tóbi jù", "Ẹran tó wọ́n jù ní ọjà"], answer: 0, why: "Irú ẹran máa ń mówó wá nígbà tí ó bá bá ọjà mu, tí oko rẹ sì lè bọ́ ọ kí ó sì tọ́jú rẹ̀ nìkan." },
      { objective: "O1", q: "Èwo ni agbára ọ̀pọ̀ irú ẹran ìbílẹ̀ bí ewúrẹ́ West African Dwarf tàbí màálù N'Dama?", options: ["Wàrà tó pọ̀ jù lágbàáyé", "Wọ́n ń fara da ooru, eegbọn àti oúnjẹ tí kò dára", "Ara wọn kì í ṣàìyá rárá", "Wọn kò nílò omi"], answer: 1, why: "Irú ẹran ìbílẹ̀ le; ohun tí wọ́n fi ń dí i ni pé wọn kì í dàgbà tàbí mú èso púpọ̀ wá tó." },
      { objective: "O1", q: "Ibo ni o ti lè béèrè irú ẹran tó ń ṣe dáadáa ní agbègbè rẹ?", options: ["Ìfiránṣẹ́ èyíkéyìí lórí ìkànnì àjọlò", "Oníṣòwò tí ó ń ta irú ẹran kan ṣoṣo", "Òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, ẹgbẹ́ olùbísí ẹran tàbí ilé-iṣẹ́ ìwádìí", "Kò sí ẹnìkan; kàn rà kí o sì wò ó"], answer: 2, why: "Àwọn amòye ìbílẹ̀ àti àwọn àgbẹ̀ mọ irú ẹran tó ń ṣe dáadáa ní ipò rẹ." },
      { objective: "O2", q: "Ní nǹkan bí ìgbà mélòó ni màálù, ewúrẹ́ àti ẹlẹ́dẹ̀ máa ń wọ àsìkò ìfẹ́ akọ tí wọn kò bá lóyún?", options: ["Ní ọjọ́ 3 ọjọ́ 3", "Ní oṣù 6 oṣù 6", "Ẹ̀ẹ̀kan lọ́dún", "Ní nǹkan bí ọjọ́ 21 ọjọ́ 21"], answer: 3, why: "Àkókò tí ó sábà máa ń jẹ́ ni nǹkan bí ọjọ́ 21, bí ó tilẹ̀ jẹ́ pé ó lè yàtọ̀." },
      { objective: "O2", q: "Ìgbà wo ló dára jù láti ṣọ́ àsìkò ìfẹ́ akọ?", options: ["Ọ̀sán gangan nìkan", "Àárọ̀ kùtù àti ìrọ̀lẹ́, nígbà tí ara ẹran bá balẹ̀", "Nígbà ìfúnni-lóúnjẹ ní ọjọ́ ọjà nìkan", "Ẹ̀ẹ̀kan lọ́sẹ̀"], answer: 1, why: "Àwọn àmì àsìkò ìfẹ́ akọ rọrùn jù láti rí nígbà tí ara ẹran bá balẹ̀, ó kéré tán ẹ̀ẹ̀mejì lójúmọ́." },
      { objective: "O2", q: "Kí ló dé tí a fi ń kọ ọjọ́ ìgùn sílẹ̀?", options: ["Láti wò bóyá ó padà sí àsìkò ìfẹ́ akọ àti láti mọ ọjọ́ ìbí", "Nítorí òfin béèrè fún fọ́tò", "Láti pinnu iye owó wàrà", "Láti yan orúkọ ọjà oúnjẹ ẹran"], answer: 0, why: "Ọjọ́ ìgùn ń sọ fún ọ ìgbà tí o máa wò bóyá ó padà sí àsìkò àti ìgbà tí ìbí máa wáyé." },
      { objective: "O2", q: "Ní nǹkan bí báwo ni oyún abo ẹlẹ́dẹ̀ ṣe gùn tó?", options: ["Nǹkan bí oṣù 9", "Nǹkan bí ọ̀sẹ̀ 3", "Nǹkan bí oṣù 3, ọ̀sẹ̀ 3 àti ọjọ́ 3", "Nǹkan bí ọdún 1"], answer: 2, why: "Oyún abo ẹlẹ́dẹ̀ jẹ́ nǹkan bí oṣù 3, ọ̀sẹ̀ 3 àti ọjọ́ 3; ṣàyẹ̀wò ti irú ẹran rẹ pẹ̀lú dókítà ẹranko rẹ." },
      { objective: "O3", q: "Kí ni àǹfààní ńlá kan tí ìfàtọ̀sínú àtọwọ́dá ní fún àgbẹ̀ kékeré?", options: ["Ó rọ́pò gbogbo ìfúnni-lóúnjẹ", "Kò sí àkọsílẹ̀ tí a nílò mọ́", "Ó ń mú gbogbo àrùn kúrò", "Ìran tó dára jù láìsí pé ó sin akọ màálù"], answer: 3, why: "AI ń mú ìran tí a ti dán wò wá sí oko kékeré tí kò lè sin akọ tó dára jù." },
      { objective: "O3", q: "Màálù kan kọ́kọ́ dúró jẹ́ẹ́ fún ìgùn ní ọ̀sán. Ìgbà wo ni òṣìṣẹ́ náà máa fún un ní AI?", options: ["Ní àárọ̀ ọjọ́ kejì", "Lẹ́sẹ̀kẹsẹ̀ ní òru", "Ní ọ̀sẹ̀ kan", "Ní àsìkò ìfẹ́ akọ tó kàn"], answer: 0, why: "Pẹ̀lú òfin AM-PM, àsìkò tí a kọ́kọ́ rí ní ọ̀sán, a máa fún un ní AI ní àárọ̀ ọjọ́ kejì." },
      { objective: "O3", q: "Báwo ni o ṣe lè rí òṣìṣẹ́ AI tí o lè gbẹ́kẹ̀lé?", options: ["Ẹnikẹ́ni tí ó ní ìgò àtọ̀", "Òṣìṣẹ́ tó kọ́ṣẹ́, tí a fọwọ́ sí, nípasẹ̀ ọ́fíìsì ẹran ọ̀sìn, ẹgbẹ́ àjùmọ̀ṣe tàbí dókítà ẹranko", "Ẹni tó wọ́n jù ní ọjà", "Fídíò ìkọ́ni"], answer: 1, why: "Ìdálẹ́kọ̀ọ́ àti ìforúkọsílẹ̀ ń dáàbò bo àwọn ẹran rẹ àti owó rẹ." },
      { objective: "O3", q: "Kí ló dé tí àtọ̀ gbọ́dọ̀ wà nínú liquid nitrogen títí di ìgbà tí a máa lò ó?", options: ["Láti mú kí ó wúwo sí i", "Láti yí àwọ̀ rẹ̀ padà", "Nítorí ó máa kú tí ó bá gbóná", "Láti fi fítámì kún un"], answer: 2, why: "Àtọ̀ dídì máa kú tí a kò bá pa á mọ́ ní ibi tó tutù gan-an títí di àkókò ìfàtọ̀sínú." },
      { objective: "O4", q: "Kí ló máa ń ṣẹlẹ̀ sí ọmọ tí òbí wọn bá ara wọn tan tímọ́tímọ́?", options: ["Wọ́n máa ń lágbára jù nígbà gbogbo", "Wọ́n máa ń yára dàgbà", "Wọ́n nílò oúnjẹ díẹ̀", "Wọ́n sábà máa ń ṣàìlera, ara wọn máa ń ṣàìyá, wọ́n sì lè ní àbùkù"], answer: 3, why: "Ìbísí láàárín ẹbí ń mú ọmọ tí kò lágbára, tí ara wọn ń ṣàìyá, tí wọ́n sì ní àbùkù pọ̀ sí i." },
      { objective: "O4", q: "Kí ni ọ̀nà tó rọrùn láti dènà ìbísí láàárín ẹbí pẹ̀lú akọ ìbísí tìrẹ?", options: ["Pààrọ̀ rẹ̀ tàbí tà á kí àwọn ọmọbìnrin rẹ̀ tó dàgbà tó láti bí", "Pa á mọ́ títí ayé", "Lò ó ní ìgbà òjò nìkan", "Bọ́ ọ ní oúnjẹ púpọ̀ sí i"], answer: 0, why: "Pípààrọ̀ akọ kí àwọn ọmọbìnrin rẹ̀ tó bí ń dá ìgùn bàbá àti ọmọbìnrin dúró." },
      { objective: "O4", q: "Àkọsílẹ̀ wo ló ń ràn ọ́ lọ́wọ́ láti yẹra fún ìbísí láàárín ẹbí?", options: ["Iye owó oúnjẹ ẹran", "Ìwọ̀n òjò", "Ìyá àti bàbá ẹran kọ̀ọ̀kan", "Orúkọ àwọn àlejò"], answer: 2, why: "Mímọ àwọn òbí ń fi àwọn ẹran tí wọ́n bá ara wọn tan hàn." },
      { objective: "O5", q: "Ẹnu ọ̀nà mélòó ló yẹ kí ibi ẹran ní?", options: ["Bí ó ti lè pọ̀ tó", "Ọ̀kan, pẹ̀lú ilẹ̀kùn, ìwẹ̀ ẹsẹ̀ àti ibi fífọ ọwọ́", "Kò sí; kí ẹran máa rìn kiri", "Ọ̀kan fún àlejò kọ̀ọ̀kan"], answer: 1, why: "Ẹnu ọ̀nà kan tí a ń ṣàkóso ń jẹ́ kí ó rọrùn láti pa òfin ààbò àìsàn mọ́." },
      { objective: "O5", q: "Kí ló dé tí a fi ń fọ ẹrẹ̀ kúrò lára bàtà kí a tó tẹ ìwẹ̀ ẹsẹ̀?", options: ["Ẹ̀gbin ń jẹ́ kí oògùn apakòkòrò àrùn má ṣiṣẹ́", "Láti dín lílo omi kù", "Ẹrẹ̀ ń mú kí bàtà wúwo", "Kò ṣe pàtàkì"], answer: 0, why: "Oògùn apakòkòrò àrùn kì í ṣiṣẹ́ dáadáa lórí ohun tí ó dọ̀tí." },
      { objective: "O5", q: "Àwọn ẹlẹ́dẹ̀ padà láti ọjà láìtà wọ́n. Kí ni o máa ṣe?", options: ["Dá wọn padà sọ́dọ̀ àwọn yòókù lẹ́sẹ̀kẹsẹ̀", "Fi wọ́n fúnni ní ẹnu ọ̀nà", "Tú wọn sílẹ̀ nínú abúlé", "Ya wọ́n sọ́tọ̀ bí ẹni pé ẹran tuntun ni wọ́n"], answer: 3, why: "Ẹran ọjà lè ti kó àrùn, nítorí náà a máa ń ya wọ́n sọ́tọ̀." },
      { objective: "O6", q: "Èwo nínú àwọn wọ̀nyí ló ń tan African Swine Fever kálẹ̀?", options: ["Òjò lórí òrùlé", "Bíbọ́ ẹlẹ́dẹ̀ ní ìyàngbò àgbàdo", "Ẹran ẹlẹ́dẹ̀ nínú àjẹkù oúnjẹ tí a kò sè, ẹlẹ́dẹ̀ aláìsàn àti bàtà tàbí ọkọ̀ tí ó dọ̀tí", "Omi mímu tó mọ́"], answer: 2, why: "ASF ń tàn kálẹ̀ nípasẹ̀ ẹlẹ́dẹ̀ tó ní àrùn, ọjà ẹran ẹlẹ́dẹ̀, àjẹkù oúnjẹ àti àwọn nǹkan tí kòkòrò àrùn ti wọ̀." },
      { objective: "O6", q: "Ṣé African Swine Fever ń ràn ènìyàn?", options: ["Bẹ́ẹ̀ ni, nígbà gbogbo", "Àwọn ọmọdé nìkan", "Àwọn òṣìṣẹ́ oko nìkan", "Rárá, kò ń ràn ènìyàn"], answer: 3, why: "WOAH sọ pé ASF kò kan ìlera ènìyàn, ṣùgbọ́n ó ń pa ẹlẹ́dẹ̀." },
      { objective: "O6", q: "Kí ló dé tí a gbọ́dọ̀ fi avian influenza tí a fura sí tó ìjọba létí lẹ́sẹ̀kẹsẹ̀?", options: ["Ó jẹ́ àrùn tí a gbọ́dọ̀ fi tó ìjọba létí, ó sì ń yára tàn láti oko kan sí òmíràn", "Láti gba àjẹsára ọ̀fẹ́ ní gbogbo ìgbà", "Nítorí àwọn ẹyẹ kò jẹun mọ́", "Láti yí iye owó ọjà padà"], answer: 0, why: "A gbọ́dọ̀ fi àwọn àrùn wọ̀nyí tó ìjọba létí kí ọ́fíìsì ìlera ẹranko lè dá títàn rẹ̀ dúró." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 8, 11, 14, 16, 17, 19] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      { name: "Àwọn agbègbè àti ẹnu ọ̀nà", objective: "O5", notYet: "Kò sí àwòrán, tàbí ẹran àti ọkọ̀ ń dàpọ̀ láìsí agbègbè tí a sàmì sí.", meets: "Àwòrán fi agbègbè mímọ́, agbègbè ààlà àti agbègbè ẹlẹ́gbin hàn, pẹ̀lú ẹnu ọ̀nà kan ṣoṣo àti ibi tí ọkọ̀ akẹ́rù ń dúró.", exceeds: "Ó tún fi ọ̀nà tí oúnjẹ ẹran, ìgbẹ́ ẹran àti òkú ẹran ń gbà hàn, kí wọ́n má bàa gba agbègbè mímọ́ kọjá láéláé." },
      { name: "Òfin ìwẹ̀ ẹsẹ̀ àti àlejò", objective: "O5", notYet: "Kò sí ìwẹ̀ ẹsẹ̀ tàbí òfin àlejò, tàbí òfin tí ẹnikẹ́ni kò lè tẹ̀lé.", meets: "Ìwẹ̀ ẹsẹ̀ pẹ̀lú oògùn apakòkòrò àrùn tí a pò bí ìwé ara rẹ̀ ṣe sọ, fífọ ọwọ́, àti ìwé àkọsílẹ̀ àlejò tí ó ní oko tí wọ́n lọ kẹ́yìn.", exceeds: "Bàtà àti aṣọ oko nìkan, àti ẹnì kan tí a dárúkọ tí ó ń ṣàyẹ̀wò òfin náà lójoojúmọ́." },
      { name: "Ìyàsọ́tọ̀ àti òkú ẹran", objective: "O5", notYet: "Ẹran tuntun ń dara pọ̀ mọ́ agbo lẹ́sẹ̀kẹsẹ̀, tàbí a ń ta òkú ẹran, a ń jẹ ẹ́ tàbí a ń dà á síbikíbi.", meets: "Ọgbà ìyàsọ́tọ̀ ọ̀tọ̀ fún àkókò tí dókítà ẹranko gbà níyànjú, àti ibi kíkó òkú dànù tí kò léwu tí a fohùn ṣọ̀kan lé lórí pẹ̀lú dókítà ẹranko.", exceeds: "Ó tún bo àwọn ẹran tí ó ń padà láti ọjà àti òfin pé a kò gbọ́dọ̀ ṣí ẹran tí ó kú lójijì láéláé." },
      { name: "Ìdáhùn sí ASF tàbí avian influenza", objective: "O6", notYet: "Àwọn àmì ìkìlọ̀ kò sí, tàbí ètò náà sọ pé kí a tà á, tọ́jú rẹ̀ tàbí dúró.", meets: "Ó ṣe àkọsílẹ̀ àwọn àmì ìkìlọ̀ àti àwọn ohun tí a máa ṣe ní wákàtí àkọ́kọ́: pa ẹran mọ́ sílé, dá gbogbo gbígbé dúró, fi tó ìjọba létí lẹ́sẹ̀kẹsẹ̀.", exceeds: "Ó dárúkọ ọ́fíìsì ìlera ẹranko, nọ́mbà fóònù àti ẹni tí yóò pè, àti òfin àìbọ́ ẹlẹ́dẹ̀ ní àjẹkù oúnjẹ tàbí òfin ẹyẹ ìgbẹ́." },
      { name: "Ìbísí àti ẹran tuntun", objective: "O4", notYet: "A ń ra ẹran ìbísí tuntun láìṣàyẹ̀wò kankan, tàbí ètò náà gba ìgùn láàárín ẹbí láàyè.", meets: "Ẹran ìbísí tuntun wá láti oko tí a mọ̀, tí ara ẹran ibẹ̀ le, ètò náà sì yẹra fún ìgùn láàárín ẹbí.", exceeds: "Ó ń lo AI láti ọ̀dọ̀ akọ màálù tí kò bá wọn tan tàbí ètò pípààrọ̀ akọ ẹran, pẹ̀lú àkọsílẹ̀ àwọn òbí." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn oko tí ìwẹ̀ ẹsẹ̀, ẹnu ọ̀nà kan tí a ń ṣàkóso àti ìwé àkọsílẹ̀ àlejò ti ń ṣiṣẹ́ níbẹ̀ ní ọjọ́ 30 lẹ́yìn ẹ̀kọ́ náà (ìwádìí àtẹ̀lé tàbí àbẹ̀wò òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ń kọ àkọsílẹ̀ ìbísí, tí wọ́n sì ròyìn pé àsìkò ìfẹ́ akọ tí wọ́n pàdánù tàbí ìgùn àtúnṣe ti dín kù",
      "ASF tàbí avian influenza tí a fura sí tí àwọn akẹ́kọ̀ọ́ fi tó dókítà ẹranko létí láàárín ọjọ́ kan",
      "Ikú tí àrùn ń fà nínú agbo ẹran àti agbo adìẹ àwọn akẹ́kọ̀ọ́ tí ó dín kù ní ọdún tó ń bọ̀"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀ àti gègé, tàbí àkọsílẹ̀ fóònù tàbí spreadsheet, fún àkọsílẹ̀ ìbísí àti ìwé àkọsílẹ̀ àlejò",
      "Ìwé fún àwòrán oko",
      "Orúkọ àti nọ́mbà fóònù dókítà ẹranko ìbílẹ̀, ọ́fíìsì ìlera ẹranko àti òṣìṣẹ́ AI tí a fọwọ́ sí",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, ní àwọn ìpàdé kúkúrú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ṣe é pẹ̀lú ẹgbẹ́ àgbẹ̀ tàbí ẹgbẹ́ àjùmọ̀ṣe: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan, kí ẹ sì ṣe àwọn iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" lórí oko gidi níbi tí ó bá ṣeé ṣe.",
      "Pe dókítà ẹranko ìbílẹ̀ tàbí òṣìṣẹ́ ìlera ẹranko wá sí ìpàdé Orí 2 láti ṣàlàyé bí a ṣe ń fi ASF àti avian influenza tó ìjọba létí ní orílẹ̀-èdè yín, àti òfin ìbílẹ̀ fún kíkó òkú ẹran dànù.",
      "Má ṣe fúnni ní ìwọ̀n oògùn, àjẹsára tàbí homonu tàbí àkókò ìdúró lẹ́yìn oògùn, má sì jíròrò wọn láéláé; rán gbogbo irú ìbéèrè bẹ́ẹ̀ sí dókítà ẹranko àti ohun tí a kọ sí ara ọjà.",
      "Má ṣe jẹ́ kí ẹgbẹ́ náà ṣèbẹ̀wò sí oko ẹlẹ́dẹ̀ tàbí oko adìẹ púpọ̀ ní ọjọ́ kan náà; ẹ fi ààbò àìsàn ṣe ìṣe nínú ìdálẹ́kọ̀ọ́ náà fúnra rẹ̀.",
      "Fi rubric ṣe àmì fún ètò ààbò àìsàn akẹ́kọ̀ọ́ kọ̀ọ̀kan, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
