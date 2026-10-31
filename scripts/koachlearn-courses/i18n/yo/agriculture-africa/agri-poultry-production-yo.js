"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-poultry-production.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KENBRO = { name: "Kenchic: Kenbro (adìẹ ìbílẹ̀ tí a mú dára sí i, fún ẹran àti ẹyin)", url: "https://www.kenchic.com/kenbro/" };
const KUROILER = { name: "Sharma et al. 2015, Livestock Research for Rural Development: Kuroiler àti adìẹ ìbílẹ̀ ní Uganda", url: "https://lrrd.cipav.org.co/lrrd27/9/shar27178.html" };
const MU_BROODING = { name: "University of Missouri Extension G8351: Títọ́jú ọmọ adìẹ àti bí wọ́n ṣe ń dàgbà (ìgbóná ní ọ̀sẹ̀ kọ̀ọ̀kan, ìwà ọmọ adìẹ)", url: "https://extension.missouri.edu/publications/g8351" };
const FAO_BIOSEC = { name: "FAO: Ààbò lọ́wọ́ kòkòrò àrùn (biosecurity) fún ọ̀sìn adìẹ kékeré àti adìẹ tó ń jẹ̀ kiri ní Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const WOAH_ND = { name: "Àjọ Àgbáyé fún Ìlera Ẹranko (WOAH): àrùn Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const WOAH_AI = { name: "Àjọ Àgbáyé fún Ìlera Ẹranko (WOAH): avian influenza (àrùn bird flu)", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: Avian influenza (àwọn àmì rẹ̀ lára ẹyẹ)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const KVB = { name: "Kenya Veterinary Board (àkọsílẹ̀ orúkọ àwọn dókítà ẹranko àti àwọn olùrànlọ́wọ́ wọn)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (àkọsílẹ̀ orúkọ àwọn dókítà ẹranko)", url: "https://vcn.gov.ng" };
const FAO_PRUDENT = { name: "FAO: Lílo oògùn apakòkòrò àrùn (antimicrobials) lọ́nà tó tọ́ fún ẹlẹ́dẹ̀ àti adìẹ (dókítà ẹranko, ètò ìlera, àkókò ìdádúró)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };

module.exports = {
  id: "agri-poultry-production-yo",
  lang: "yo",
  translationOf: "agri-poultry-production",
  category: "Agriculture (Africa)",
  name: "Ọ̀sìn Adìẹ fún Òwò",
  skills: "Yíyan adìẹ ẹlẹ́ran, adìẹ ẹlẹ́yin tàbí adìẹ ìbílẹ̀ tí a mú dára sí i, Ṣíṣètò ilé adìẹ àti títọ́jú ọmọ adìẹ, Fífún adìẹ ní oúnjẹ àti omi ní ìpele kọ̀ọ̀kan, Ṣíṣe ètò àjẹsára àti ààbò lọ́wọ́ kòkòrò àrùn pẹ̀lú dókítà ẹranko, Títọ́jú ẹyin àti kíkọ àkọsílẹ̀ agbo adìẹ, Ṣíṣírò owó àkójọ adìẹ kan àti owó tí kò jèrè tí kò pàdánù",
  outcome: "ṣètò kí o sì ṣe àkójọ adìẹ kan tó mú èrè wá: yan adìẹ ẹlẹ́ran, adìẹ ẹlẹ́yin tàbí adìẹ ìbílẹ̀ tí a mú dára sí i fún ọjà rẹ, ṣètò ilé adìẹ kí o sì tọ́jú àwọn ọmọ adìẹ, fún wọn ní oúnjẹ àti omi ní ìpele kọ̀ọ̀kan, tẹ̀lé ètò àjẹsára tí o ṣe pẹ̀lú dókítà ẹranko àti ààbò tó le lọ́wọ́ kòkòrò àrùn, tọ́jú ẹyin kí o sì kọ àkọsílẹ̀, kí o sì ṣírò owó àkójọ náà láti mọ owó tí kò jèrè tí kò pàdánù.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn òṣìṣẹ́ oko àti àwọn òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ ní Kenya, Nàìjíríà, Ghana, Senegal, Côte d'Ivoire àti káàkiri Áfíríkà tí wọ́n fẹ́ bẹ̀rẹ̀ tàbí mú òwò adìẹ wọn gbòòrò sí i pẹ̀lú adìẹ ẹlẹ́ran (broiler), adìẹ ẹlẹ́yin (layer) tàbí adìẹ ìbílẹ̀ tí a mú dára sí i.",
    "Orí 1 ṣètò àkójọ adìẹ náà: yíyan irú adìẹ, ilé adìẹ, ààyè àti títọ́jú ọmọ adìẹ, àti oúnjẹ àti omi. Orí 2 ń ṣe é lọ́nà tó mú èrè wá: ètò àjẹsára pẹ̀lú dókítà ẹranko àti ààbò àkójọ lọ́wọ́ kòkòrò àrùn, títọ́jú ẹyin àti àkọsílẹ̀, àti ìṣirò owó àkójọ kan: owó adìẹ kọ̀ọ̀kan tàbí páálí ẹyin kọ̀ọ̀kan, ikú adìẹ àti owó tí kò jèrè tí kò pàdánù.",
    "Ẹ̀kọ́ yìí kọ́ lé orí \"Ìlera àti Ìtọ́jú Ẹran Ọ̀sìn\", tí ó sọ nípa àyẹ̀wò ìlera ojoojúmọ́ àti ìpìlẹ̀ àrùn Newcastle. Kò sọ iye àjẹsára tàbí iye oògùn: máa tẹ̀lé dókítà ẹranko rẹ àti ohun tí a kọ sára oògùn nígbà gbogbo. Gbogbo owó jẹ́ àpẹẹrẹ tí a ṣe; lo owó tìrẹ. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò àkójọ adìẹ kan pẹ̀lú ìṣirò owó fún oko rẹ (tàbí àpẹẹrẹ bí adìẹ ẹlẹ́ran 500 nítòsí Thika, adìẹ ẹlẹ́yin 300 nítòsí Ìbàdàn, Kenbro tàbí Kuroiler 200 nítòsí Tamale, tàbí adìẹ ẹlẹ́ran 1,000 nítòsí Thies): irú adìẹ àti ìdí rẹ̀; bí ilé adìẹ ṣe tóbi tó àti iye adìẹ tí ó lè gbà; ètò títọ́jú ọmọ adìẹ rẹ; oúnjẹ ní ìpele kọ̀ọ̀kan àti iye tí o rò pé o máa rà; ètò àjẹsára tí o fohùn ṣọ̀kan lé lórí pẹ̀lú dókítà ẹranko àti àwọn òfin ààbò lọ́wọ́ kòkòrò àrùn; àwọn àkọsílẹ̀ tí o máa kọ; àti ìwé ìṣirò owó pẹ̀lú gbogbo ìnáwó, iye ikú tí o retí, owó adìẹ kọ̀ọ̀kan tí o tà tàbí páálí ẹyin kọ̀ọ̀kan, àti owó tí kò jèrè tí kò pàdánù.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn òṣìṣẹ́ oko àti àwọn òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ ní Ìlà-oòrùn, Ìwọ̀-oòrùn àti Àárín Áfíríkà (pẹ̀lú àwọn orílẹ̀-èdè tí wọ́n ń sọ Faransé) tí wọ́n ń bẹ̀rẹ̀ tàbí mú òwò adìẹ gbòòrò sí i, láti ọgọ́rùn-ún díẹ̀ sí ẹgbẹ̀rún díẹ̀ adìẹ.",
    startingPoint: "Ọ̀pọ̀ ń sin adìẹ abúlé díẹ̀ tàbí wọ́n ti sin àkójọ kan rí. Ọ̀pọ̀ jù lọ ń ra ọmọ adìẹ àti oúnjẹ láìní ètò tí a kọ sílẹ̀, wọ́n ń tọ́jú ọmọ adìẹ nípa méfò, wọ́n gbára lé agrovet fún àjẹsára, wọn kì í kọ àkọsílẹ̀ púpọ̀, wọn kò sì mọ owó adìẹ kọ̀ọ̀kan tàbí páálí ẹyin kọ̀ọ̀kan, nítorí náà wọn kò lè sọ bóyá àkójọ kan mú èrè wá.",
    gap: "Adìẹ lè mówó wá kíákíá, ṣùgbọ́n ikú ọ̀pọ̀ ọmọ adìẹ nígbà títọ́jú wọn, àrùn tó bẹ́ sílẹ̀, oúnjẹ tí a fi ṣòfò àti títà ní owó tí kò tó ìnáwó máa ń pa èrè run. Àwọn àgbẹ̀ tí wọ́n ṣètò àkójọ wọn, tí wọ́n tọ́jú ọmọ adìẹ dáadáa, tí wọ́n ń fún wọn ní àjẹsára gẹ́gẹ́ bí ètò dókítà ẹranko, tí wọ́n ń kọ àkọsílẹ̀, tí wọ́n sì mọ owó tí kò jèrè tí kò pàdánù máa ń pàdánù adìẹ díẹ̀, wọ́n sì lè díyelé kí wọ́n sì tà pẹ̀lú ìgboyà.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ìṣirò tó rọrùn nìkan; ẹ̀kọ́ náà wà ní èdè Spanish, Faransé àti Lárúbáwá pẹ̀lú",
      "Ẹ̀rọ: ìwé àti gègé tàbí ẹ̀rọ ìṣirò lórí fóònù; spreadsheet lórí fóònù kò pọn dandan",
      "Owó: owó ní KES, NGN, GHS àti XOF jẹ́ àpẹẹrẹ tí a ṣe; àwọn akẹ́kọ̀ọ́ ń lo owó agbègbè wọn",
      "Òfin ìlera ẹranko: kò sí iye àjẹsára tàbí iye oògùn, kò sì sí àkókò ìdádúró ní nọ́mbà; tẹ̀lé dókítà ẹranko àti ohun tí a kọ sára oògùn",
      "Avian influenza (bird flu) jẹ́ àrùn tí a gbọ́dọ̀ ròyìn: a gbọ́dọ̀ sọ fún dókítà ẹranko tàbí àjọ ìlera ẹranko lẹ́sẹ̀kẹsẹ̀ tí a bá fura sí i"
    ],
    prerequisites: "Ìtọ́jú ẹranko ìpìlẹ̀ àti ìṣirò tó rọrùn. A dábàá pé kí o kọ́kọ́ ṣe \"Ìlera àti Ìtọ́jú Ẹran Ọ̀sìn\"; \"Oúnjẹ Ẹran Ọ̀sìn àti Ṣíṣe Oúnjẹ Ẹran\" máa ràn ọ́ lọ́wọ́ pẹ̀lú owó oúnjẹ."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá mọ ọjà rẹ, owó rẹ àti àkókò rẹ", action: "yan adìẹ ẹlẹ́ran, adìẹ ẹlẹ́yin tàbí adìẹ ìbílẹ̀ tí a mú dára sí i, kí o sì sọ ìdí rẹ̀", standard: "kí o sì dárúkọ ó kéré tán ìdí mẹ́ta tí ó bá oko rẹ àti àwọn oníbàárà rẹ mu" },
    { id: "O2", condition: "Kí àwọn ọmọ adìẹ tó dé àti nígbà títọ́jú wọn", action: "ṣètò ilé adìẹ, pinnu iye adìẹ tí ààyè náà lè gbà, kí o sì ṣàtúnṣe ìgbóná nípa wíwo àwọn ọmọ adìẹ", standard: "pẹ̀lú ilé tí ó ti wà ní sẹpẹ́ ní ọjọ́ kan ṣáájú, tí àwọn ọmọ adìẹ sì tàn ká dọ́gba lábẹ́ ìgbóná" },
    { id: "O3", condition: "Fún ìpele kọ̀ọ̀kan nínú àkójọ rẹ", action: "ṣètò irú oúnjẹ, ọjọ́ tí o máa yí i padà, àti ibi tí omi ti máa wá", standard: "pẹ̀lú omi mímọ́ ní gbogbo ìgbà àti gbogbo ìpele tí a ti ṣètò fún" },
    { id: "O4", condition: "Pẹ̀lú dókítà ẹranko rẹ tàbí òṣìṣẹ́ ìlera ẹranko", action: "kọ ètò àjẹsára àti àwọn òfin ààbò àkójọ lọ́wọ́ kòkòrò àrùn, kí o sì kọ àjẹsára kọ̀ọ̀kan sílẹ̀", standard: "pẹ̀lú gbogbo ọjọ́ àjẹsára tí dókítà ẹranko pinnu, láìfún wọn ní àjẹsára kankan tí kò sí nínú ètò náà" },
    { id: "O5", condition: "Ní gbogbo ọjọ́ àkójọ náà", action: "kó ẹyin kí o sì tọ́jú wọn dáadáa, kí o sì kọ iye adìẹ, ikú, oúnjẹ, ẹyin àti ìtọ́jú sílẹ̀", standard: "láìsí ọjọ́ kankan tí ó yọ sílẹ̀ nínú àkọsílẹ̀ náà" },
    { id: "O6", condition: "Pẹ̀lú owó agbègbè rẹ àti iye ikú tí o retí", action: "ṣírò owó adìẹ kọ̀ọ̀kan tí o tà tàbí páálí ẹyin kọ̀ọ̀kan, àti owó tí kò jèrè tí kò pàdánù fún àkójọ kan", standard: "pẹ̀lú gbogbo ìnáwó àti ìṣirò tó tọ̀nà" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣètò àkójọ adìẹ",
      lessons: [
        {
          title: "Adìẹ ẹlẹ́ran, adìẹ ẹlẹ́yin tàbí adìẹ ìbílẹ̀ tí a mú dára sí i",
          objectives: ["O1"],
          minutes: 5,
          goal: "Yan irú adìẹ tí ó bá ọjà rẹ, owó rẹ àti àkókò rẹ mu.",
          text: [
            "A sin adìẹ ẹlẹ́ran (broiler) fún ẹran. Wọ́n máa ń dàgbà kíákíá gan-an, a sì sábà máa ń tà wọ́n láàárín nǹkan bí ọ̀sẹ̀ 5 sí 7, ó sinmi lórí irú adìẹ àti ìwọ̀n tí àwọn oníbàárà fẹ́. Owó máa ń padà wá kíákíá, ṣùgbọ́n wọ́n nílò oúnjẹ tó dára gan-an, ìtọ́jú tó súnmọ́, àti oníbàárà tí ó ti wà ní sẹpẹ́ ní ọjọ́ tí wọ́n bá ti tó tà: ọjọ́ kọ̀ọ̀kan tí ó bá kọjá ń jẹ oúnjẹ àti èrè.",
            "A sin adìẹ ẹlẹ́yin (layer) fún ẹyin. Wọ́n máa ń bẹ̀rẹ̀ sí í yin ẹyin ní nǹkan bí oṣù 4 sí 5, wọ́n sì ń yin fún ohun tí ó ju ọdún kan lọ, nítorí náà o máa bọ́ wọn fún oṣù púpọ̀ kí owó kankan tó wọlé, o sì nílò ọjà ẹyin tí kì í dá dúró. Adìẹ ìbílẹ̀ tí a mú dára sí i, tàbí adìẹ fún ẹran àti ẹyin, wà láàárín méjèèjì: wọ́n le ju adìẹ ẹlẹ́ran àti adìẹ ẹlẹ́yin lọ, wọ́n lè jẹ̀ kiri pẹ̀lú oúnjẹ díẹ̀ sí i, a sì ń tà wọ́n fún ẹran àti ẹyin, nígbà púpọ̀ ní owó tó dára jù fún adìẹ kọ̀ọ̀kan, ṣùgbọ́n wọn kì í dàgbà tàbí yin ẹyin tó àwọn adìẹ òwò àdàpọ̀ (hybrid).",
            "Àpẹẹrẹ: Kenbro, tí Kenchic ń tà ní Kenya, jẹ́ adìẹ fún ẹran àti ẹyin; Kenchic sọ pé ó máa ń tó pa fún ẹran ní nǹkan bí ọ̀sẹ̀ 10 sí 14 tàbí ó máa ń yin ẹyin láti nǹkan bí ọ̀sẹ̀ 25, ṣùgbọ́n kò ní mú jáde tó adìẹ ẹlẹ́ran tàbí adìẹ ẹlẹ́yin àkànṣe. Kuroiler, tí a ṣe ní India, jẹ́ adìẹ fún ẹran àti ẹyin tó ń jẹ̀ kiri; ìwádìí kan ní Uganda rí i pé Kuroiler wúwo ju adìẹ ìbílẹ̀ lọ ní abúlé. Ra irú adìẹ èyíkéyìí lọ́wọ́ hatchery tí ọ́fíìsì ẹran ọ̀sìn rẹ tàbí dókítà ẹranko rẹ fọkàn tán nìkan, kí o sì béèrè lọ́wọ́ àwọn àgbẹ̀ míì bí ó ti ṣe fún wọn."
          ],
          steps: ["Kọ àwọn tí wọ́n máa rà: adìẹ láàyè, ẹran, ẹyin, òtẹ́ẹ̀lì, ọjà.", "Kọ iye owó tí o lè ná kí owó tó bẹ̀rẹ̀ sí í wọlé.", "Kọ iye àkókò tí o lè fún un lójoojúmọ́.", "Fi adìẹ ẹlẹ́ran, ẹlẹ́yin àti ìbílẹ̀ tí a mú dára sí i wé àwọn àkọsílẹ̀ rẹ.", "Yan ọ̀kan, pẹ̀lú ìdí mẹ́ta, àti hatchery tí a fọkàn tán."],
          words: [["Adìẹ ẹlẹ́ran (broiler)", "adìẹ tí a sin láti dàgbà kíákíá fún ẹran."], ["Adìẹ ẹlẹ́yin (layer)", "adìẹ tí a sin láti yin ẹyin púpọ̀."], ["Adìẹ ìbílẹ̀ tí a mú dára sí i", "adìẹ tó le, fún ẹran àti ẹyin, tí a sin láti inú tàbí fún ipò agbègbè, tí a ń sìn fún ẹran àti ẹyin."], ["Hatchery", "òwò tí ó ń pa ẹyin di ọmọ adìẹ, tí ó sì ń ta ọmọ adìẹ ọlọ́jọ́ kan."]],
          slides: [
            { title: "Adìẹ ẹlẹ́ran (broiler)", bullets: ["Ẹran; a sábà ń tà wọ́n ní nǹkan bí ọ̀sẹ̀ 5 sí 7", "Owó yára; wọ́n nílò oúnjẹ tó dára àti ìtọ́jú tó súnmọ́", "Wọ́n nílò oníbàárà tó wà ní sẹpẹ́ lọ́jọ́ náà"] },
            { title: "Adìẹ ẹlẹ́yin (layer)", bullets: ["Ẹyin; wọ́n ń bẹ̀rẹ̀ ní nǹkan bí oṣù 4 sí 5", "Oṣù púpọ̀ ti oúnjẹ kí owó tó wọlé", "O nílò ọjà ẹyin tí kì í dá dúró"] },
            { title: "Adìẹ ìbílẹ̀ tí a mú dára sí i", bullets: ["Wọ́n le; wọ́n lè jẹ̀ kiri pẹ̀lú oúnjẹ díẹ̀ sí i", "Ẹran àti ẹyin, nígbà púpọ̀ owó tó dára jù fún adìẹ kan", "Àpẹẹrẹ: Kenbro (Kenchic), Kuroiler (láti India)"] },
            { title: "Yan dáadáa, ra dáadáa", bullets: ["Bá ọjà, owó àti àkókò mu", "Hatchery tí a fọkàn tán nìkan", "Béèrè lọ́wọ́ àwọn àgbẹ̀ tí wọ́n ti sin irú adìẹ náà"] }
          ],
          sources: [KENBRO, KUROILER],
          tryIt: "Kọ àkọsílẹ̀ mẹ́ta rẹ: àwọn oníbàárà, owó tí o ní kí owó tó wọlé, àti àkókò ojoojúmọ́. Yan adìẹ ẹlẹ́ran, ẹlẹ́yin tàbí ìbílẹ̀ tí a mú dára sí i, kí o sì kọ ìdí mẹ́ta, pẹ̀lú orúkọ hatchery tí ọ́fíìsì ẹran ọ̀sìn rẹ tàbí dókítà ẹranko rẹ fọkàn tán.",
          youCanNow: "yan adìẹ ẹlẹ́ran, adìẹ ẹlẹ́yin tàbí adìẹ ìbílẹ̀ tí a mú dára sí i tí ó bá ọjà rẹ, owó rẹ àti àkókò rẹ mu.",
          quickCheck: [
            { objective: "O1", q: "Àgbẹ̀ kan kò ní owó púpọ̀ láti dúró, òtẹ́ẹ̀lì kan sì ń ra adìẹ ẹran lọ́wọ́ rẹ̀ ní ọ̀sẹ̀ mẹ́fà mẹ́fà. Irú wo ló bá a mu jù?", options: ["Adìẹ ẹlẹ́yin", "Adìẹ ẹlẹ́ran", "Pẹ́pẹ́yẹ", "Adìẹ abúlé tí a fi sílẹ̀ kí wọ́n jẹ̀ kiri"], answer: 1, why: "A ń ta adìẹ ẹlẹ́ran láàárín ọ̀sẹ̀ díẹ̀, èyí bá oníbàárà ẹran tí ń rà déédéé àti ìdúró kúkúrú fún owó mu." },
            { objective: "O1", q: "Kí ni Kenchic sọ nípa Kenbro tí a bá fi wé adìẹ ẹlẹ́ran àti ẹlẹ́yin àkànṣe?", options: ["Ó ń dàgbà kíákíá ju adìẹ ẹlẹ́ran lọ", "Ó ń yin ẹyin ju adìẹ ẹlẹ́yin lọ", "Kò ní mú jáde tó wọn", "Kò nílò oúnjẹ rárá"], answer: 2, why: "Kenbro le, ó sì wà fún ẹran àti ẹyin, ṣùgbọ́n kò mú jáde tó àwọn adìẹ àdàpọ̀ àkànṣe." }
          ]
        },
        {
          title: "Ilé adìẹ, ààyè àti títọ́jú ọmọ adìẹ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣètò ilé adìẹ, pinnu iye adìẹ fún ààyè náà, kí o sì tọ́jú ọmọ adìẹ ní ìgbóná tó tọ́.",
          text: [
            "Ilé adìẹ tó dára máa ń gbẹ, afẹ́fẹ́ máa ń wọ inú rẹ̀, ó sì ní ààbò. Ní agbègbè tó gbóná, ẹ̀gbẹ́ tó ṣí sílẹ̀ pẹ̀lú wáyà àwọ̀n tó lágbára máa ń jẹ́ kí afẹ́fẹ́ kọjá; a sábà máa ń kọ́ ilé gígùn láti ìlà-oòrùn sí ìwọ̀-oòrùn kí oòrùn má bàa wọlé púpọ̀, pẹ̀lú òrùlé tó yọ jáde láti dá òjò dúró. Lo ohun ìtẹ́lẹ̀ (litter) tó jìn, tó sì gbẹ, bí ìyẹ̀fun igi tàbí èèpo ìrẹsì. Dènà eku, ejò, ẹyẹ igbó àti olè. Kí àwọn ọmọ adìẹ tó dé, fọ ilé tó ṣófo àti àwọn irinṣẹ́ kí o sì fi oògùn apakòkòrò fọ̀ wọ́n, kí o sì fi ilé náà sílẹ̀ láìsí nǹkan fún àkókò ìsinmi tí dókítà ẹranko rẹ bá dábàá.",
            "Ààyè: kíkó adìẹ jọ pọ̀ jù máa ń fa ìyà ooru, ohun ìtẹ́lẹ̀ tó tutù, ṣíṣá ara wọn àti àrùn. Hatchery rẹ, ìwé ìtọ́sọ́nà irú adìẹ náà tàbí òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ máa sọ iye adìẹ fún mítà onígun mẹ́rin kan fún irú adìẹ rẹ, ọjọ́ orí wọn àti ilé rẹ. Fi iye náà sọ ààyè ilẹ̀ di púpọ̀. Àpẹẹrẹ nìkan: ilé 5 m lọ́nà 8 m jẹ́ mítà onígun mẹ́rin 40; tí ìwé ìtọ́sọ́nà rẹ bá sọ adìẹ ẹlẹ́ran 10 fún mítà onígun mẹ́rin kan nígbà tí wọ́n bá tó tà, ó máa gba adìẹ ẹlẹ́ran 400, kì í ṣe 500.",
            "Títọ́jú ọmọ adìẹ (brooding): ọmọ adìẹ ọlọ́jọ́ kan kò lè mú ara wọn gbóná. Ṣètò òrùka ìtọ́jú (brooder ring: ọgbà róbótó ti páálí tàbí irin pẹlẹbẹ) pẹ̀lú ohun ìtẹ́lẹ̀, ohun ìgbóná (ẹ̀rọ ìgbóná gáàsì tàbí iná mànàmáná, gílóòbù, tàbí ààrò èédú pẹ̀lú afẹ́fẹ́ tó dára, nítorí pé èéfín èédú lè pani), ohun ìjẹun àti ohun ìmumi, kí o sì mú un gbóná kí àwọn ọmọ adìẹ tó dé. University of Missouri Extension sọ nǹkan bí 32 sí 35 °C lábẹ́ ohun ìgbóná ní ọ̀sẹ̀ àkọ́kọ́, lẹ́yìn náà nǹkan bí 3 °C kéré sí i ní ọ̀sẹ̀ kọ̀ọ̀kan. Wo àwọn ọmọ adìẹ: tí wọ́n bá ṣùjọ lábẹ́ ìgbóná, òtútù ń mú wọn; tí wọ́n bá jìnnà tí wọ́n sì ń mí hẹlẹhẹlẹ, ó gbóná jù; tí wọ́n bá kó jọ sí ẹ̀gbẹ́ kan, atẹ́gùn ń fẹ́ wọlé; tí wọ́n bá tàn ká dọ́gba, ó tọ́."
          ],
          steps: ["Fọ ilé tó ṣófo àti àwọn irinṣẹ́, kí o sì fi oògùn apakòkòrò fọ̀ wọ́n; jẹ́ kí ó sinmi bí dókítà ẹranko ṣe dábàá.", "Tẹ́ ohun ìtẹ́lẹ̀ tó jìn, tó sì gbẹ.", "Ṣírò iye adìẹ tí ilẹ̀ náà lè gbà láti inú ìwé ìtọ́sọ́nà irú adìẹ rẹ.", "Ṣètò òrùka ìtọ́jú, ohun ìgbóná, ohun ìjẹun àti ohun ìmumi.", "Mú un gbóná kí àwọn ọmọ adìẹ tó dé.", "Wo àwọn ọmọ adìẹ ní ọ̀pọ̀ ìgbà lójúmọ́ kí o sì ṣàtúnṣe ìgbóná."],
          words: [["Títọ́jú ọmọ adìẹ (brooding)", "mímú ọmọ adìẹ gbóná àti fífún wọn ní oúnjẹ ní ọ̀sẹ̀ àkọ́kọ́ wọn."], ["Òrùka ìtọ́jú (brooder ring)", "ọgbà róbótó ti páálí tàbí irin pẹlẹbẹ tí ó ń mú ọmọ adìẹ wà nítòsí ìgbóná, oúnjẹ àti omi."], ["Ohun ìtẹ́lẹ̀ (litter)", "ohun gbígbẹ tí a tẹ́ sílẹ̀, bí ìyẹ̀fun igi tàbí èèpo ìrẹsì."], ["Iye adìẹ fún ààyè (stocking density)", "iye adìẹ tí a ń sìn lórí mítà onígun mẹ́rin kan ilẹ̀."]],
          slides: [
            { title: "Ilé adìẹ tó dára", bullets: ["Gbígbẹ, afẹ́fẹ́ ń wọlé, ẹ̀gbẹ́ ṣí pẹ̀lú wáyà àwọ̀n níbi ooru", "Òrùlé tó yọ jáde; a sábà ń kọ́ ọ láti ìlà-oòrùn sí ìwọ̀-oòrùn", "Ohun ìtẹ́lẹ̀ tó jìn tó gbẹ; dènà eku àti ẹyẹ igbó"] },
            { title: "Ààyè", bullets: ["Kíkó jọ pọ̀ jù = ìyà ooru, ohun ìtẹ́lẹ̀ tó tutù, àrùn", "Iye adìẹ fún mítà onígun mẹ́rin láti ìwé ìtọ́sọ́nà", "Àpẹẹrẹ: mítà onígun mẹ́rin 40 x 10 = adìẹ ẹlẹ́ran 400"] },
            { title: "Ṣíṣètò títọ́jú ọmọ adìẹ", bullets: ["Òrùka ìtọ́jú, ìgbóná, ohun ìjẹun àti ohun ìmumi", "Mú un gbóná kí àwọn ọmọ adìẹ tó dé", "Èédú: afẹ́fẹ́ tó dára, èéfín rẹ̀ lè pani"] },
            { title: "Ka ìwà àwọn ọmọ adìẹ", bullets: ["Nǹkan bí 32 sí 35 °C ní ìbẹ̀rẹ̀, nǹkan bí 3 °C kéré sí i lọ́sẹ̀", "Ṣùjọ = òtútù; jìnnà = ooru", "Kó jọ sí ẹ̀gbẹ́ kan = atẹ́gùn; tàn ká = ó tọ́"] }
          ],
          sources: [MU_BROODING, FAO_BIOSEC],
          tryIt: "Wọn ilé adìẹ rẹ (tàbí èyí tí o fẹ́ kọ́) kí o sì ṣírò ààyè ilẹ̀ rẹ̀. Béèrè lọ́wọ́ hatchery rẹ tàbí òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ iye adìẹ fún mítà onígun mẹ́rin kan fún irú adìẹ rẹ, kí o sì kọ iye adìẹ tí ó lè gbà. Ya àwòrán bí o ṣe máa ṣètò títọ́jú ọmọ adìẹ.",
          youCanNow: "ṣètò ilé adìẹ, pinnu iye adìẹ fún ààyè rẹ̀, kí o sì tọ́jú ọmọ adìẹ nípa wíwo ìwà wọn.",
          quickCheck: [
            { objective: "O2", q: "Gbogbo àwọn ọmọ adìẹ rẹ ṣùjọ pinpin lábẹ́ ohun ìgbóná. Kí ló túmọ̀ sí?", options: ["Ó gbóná jù fún wọn", "Ebi ń pa wọ́n", "Wọ́n ti ṣe tán láti kúrò nínú òrùka ìtọ́jú", "Òtútù ń mú wọn; fi ìgbóná kún un tàbí dí atẹ́gùn"], answer: 3, why: "Ṣíṣùjọ lábẹ́ ìgbóná túmọ̀ sí pé òtútù ń mú àwọn ọmọ adìẹ." },
            { objective: "O2", q: "Ilé rẹ jẹ́ 6 m lọ́nà 5 m. Ìwé ìtọ́sọ́nà sọ adìẹ 10 fún mítà onígun mẹ́rin kan. Adìẹ mélòó?", options: ["300", "110", "600", "50"], answer: 0, why: "6 x 5 = mítà onígun mẹ́rin 30, x 10 = adìẹ 300." }
          ]
        },
        {
          title: "Oúnjẹ àti omi ní ìpele kọ̀ọ̀kan",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ṣètò oúnjẹ fún ìpele kọ̀ọ̀kan, ìgbà tí o máa yí i padà, àti omi mímọ́ tí kì í tán.",
          text: [
            "Oúnjẹ ni ìnáwó tó pọ̀ jù nínú àkójọ adìẹ, nítorí náà fún wọn ní oúnjẹ tó tọ́ ní ìpele tó tọ́. Adìẹ ẹlẹ́ran: oúnjẹ ìbẹ̀rẹ̀ (broiler starter), lẹ́yìn náà oúnjẹ ìparí (broiler finisher) (àwọn ètò kan fi oúnjẹ ìdàgbà, grower, kún un). Adìẹ ẹlẹ́yin: chick mash, lẹ́yìn náà growers mash, lẹ́yìn náà layers mash láti ìgbà tí wọ́n fẹ́ bẹ̀rẹ̀ sí í yin ẹyin; layers mash ní calcium púpọ̀ sí i tí àwọn abo adìẹ nílò fún èèpo ẹyin tó le. Adìẹ ìbílẹ̀ tí a mú dára sí i: tẹ̀lé ìtọ́sọ́nà hatchery; tí wọ́n bá ń jẹ̀ kiri díẹ̀, wọ́n ṣì nílò oúnjẹ tó péye lórí ohun tí wọ́n rí jẹ kí wọ́n lè dàgbà kí wọ́n sì yin ẹyin dáadáa. Yí oúnjẹ padà láàárín ọjọ́ díẹ̀ nípa pípo ti àtijọ́ mọ́ ti tuntun.",
            "Ra oúnjẹ lọ́wọ́ ọlọ́lọ tí a fọkàn tán, wò ó pé àpò náà ní àkọlé, ó gbẹ, ọjọ́ rẹ̀ kò sì tíì kọjá, kí o sì tọ́jú rẹ̀ sórí pákó (pallet) ní ibi tó gbẹ. Lo ohun ìjẹun tó pọ̀ tó kí gbogbo adìẹ lè jẹun lẹ́ẹ̀kan náà, gbé wọn sókè dé ibi ẹ̀yìn àwọn adìẹ bí wọ́n ṣe ń dàgbà, má sì ṣe kún wọn dé ẹnu, nítorí pé àwọn adìẹ máa ń fi ẹsẹ̀ wà oúnjẹ dànù, wọ́n sì ń fi ṣòfò.",
            "Omi ṣe pàtàkì ju oúnjẹ lọ: adìẹ máa ń mu omi ju oúnjẹ tí wọ́n ń jẹ lọ, wọ́n sì máa ń dẹ́kun jíjẹun àti yíyin ẹyin tí omi bá tán tàbí tí ó bá gbóná. Fún wọn ní omi mímọ́, tó tutù ní gbogbo ìgbà, pẹ̀lú ohun ìmumi tó pọ̀ tó, tí a ń fọ̀ lójoojúmọ́. Tí iye omi tí wọ́n ń mu bá dín kù lójijì, ìyẹn sábà máa ń jẹ́ àmì àkọ́kọ́ àìsàn. Tí o bá ń fún wọn ní àjẹsára tàbí oògùn nínú omi, tẹ̀lé dókítà ẹranko àti ohun tí a kọ sára rẹ̀ dáadáa; àwọn kan nílò omi tí kò ní chlorine tàbí oògùn apakòkòrò."
          ],
          steps: ["Kọ àwọn ìpele fún irú adìẹ rẹ.", "Kọ oúnjẹ fún ìpele kọ̀ọ̀kan àti ọjọ́ orí tí o máa yí i padà.", "Ṣètò ohun ìjẹun àti ohun ìmumi tó tó fún gbogbo adìẹ lẹ́ẹ̀kan náà.", "Gbé ohun ìjẹun àti ohun ìmumi sókè bí adìẹ ṣe ń dàgbà; má ṣe kún wọn jù.", "Fọ ohun ìmumi lójoojúmọ́; má ṣe jẹ́ kí omi tán láéláé.", "Kọ iye omi tí wọ́n ń mu lójoojúmọ́; tí ó bá dín kù lójijì, pe dókítà ẹranko."],
          words: [["Oúnjẹ ìbẹ̀rẹ̀ (starter)", "oúnjẹ àkọ́kọ́ tí ó ní protein púpọ̀ fún ọmọ adìẹ."], ["Oúnjẹ ìparí (finisher)", "oúnjẹ ìkẹyìn fún adìẹ ẹlẹ́ran kí a tó tà wọ́n."], ["Layers mash", "oúnjẹ fún abo adìẹ tí ń yin ẹyin, pẹ̀lú calcium púpọ̀ sí i fún èèpo ẹyin."], ["Ìgbà ìbẹ̀rẹ̀ ìyẹ́yin (point of lay)", "ọjọ́ orí tí abo adìẹ ọ̀dọ́ fẹ́ bẹ̀rẹ̀ sí í yin ẹyin."]],
          slides: [
            { title: "Oúnjẹ ní ìpele kọ̀ọ̀kan", bullets: ["Adìẹ ẹlẹ́ran: starter, lẹ́yìn náà finisher", "Adìẹ ẹlẹ́yin: chick mash, growers mash, lẹ́yìn náà layers mash", "Yí i padà láàárín ọjọ́ díẹ̀"] },
            { title: "Ra oúnjẹ dáadáa, lò ó dáadáa", bullets: ["Ọlọ́lọ tí a fọkàn tán; àkọlé, gbígbẹ, ọjọ́ kò kọjá", "Ohun ìjẹun tó tó; gbé wọn sókè bí adìẹ ṣe ń dàgbà", "Má ṣe kún un jù: wíwà oúnjẹ dànù ń fi ṣòfò"] },
            { title: "Omi ló kọ́kọ́ ṣe pàtàkì", bullets: ["Adìẹ ń mu omi ju bí wọ́n ṣe ń jẹun lọ", "Omi mímọ́, tó tutù ní gbogbo ìgbà", "Omi tí wọ́n ń mu dín kù lójijì = àmì ìkìlọ̀"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Ṣe tábìlì oúnjẹ fún àkójọ rẹ: ìpele, ọjọ́ orí, irú oúnjẹ, àti nǹkan bí iye àpò tí o rò pé o máa rà (béèrè lọ́wọ́ ẹni tí ó ń ta oúnjẹ fún ọ tàbí hatchery). Fi iye ohun ìjẹun àti ohun ìmumi tí o nílò kún un, àti ẹni tí ó máa fọ ohun ìmumi lójoojúmọ́.",
          youCanNow: "ṣètò oúnjẹ tó tọ́ fún ìpele kọ̀ọ̀kan, ìgbà tí o máa yí i padà, àti omi mímọ́ tí kì í tán.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí adìẹ ẹlẹ́yin fi nílò layers mash dípò growers mash?", options: ["Ó wọ́n díẹ̀", "Ó ń mú wọn ga sí i", "Ó ní calcium púpọ̀ sí i tí wọ́n nílò fún èèpo ẹyin tó le", "Ó ń rọ́pò omi"], answer: 2, why: "Abo adìẹ tí ń yin ẹyin nílò calcium púpọ̀ sí i fún èèpo ẹyin, layers mash ló sì ń pèsè rẹ̀." },
            { objective: "O3", q: "Lójijì, àwọn adìẹ ẹlẹ́ran rẹ ń mu omi tí ó kéré gan-an ju ti àná lọ. Kí ni èyí lè túmọ̀ sí?", options: ["Wọ́n lè máa ṣàìsàn; yẹ wọ́n wò kí o sì pe dókítà ẹranko", "Ara wọn le, wọ́n sì ti yó", "Oúnjẹ náà dára jù", "Ó ti tó àkókò láti tà wọ́n"], answer: 0, why: "Omi tí wọ́n ń mu tí ó dín kù lójijì sábà máa ń jẹ́ àmì àkọ́kọ́ àrùn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣètò àkójọ adìẹ",
        questions: [
          { objective: "O1", q: "Kí ni ewu pàtàkì kan nínú adìẹ ẹlẹ́ran?", options: ["Ó máa ń gba ọdún méjì kí a tó tà wọ́n", "Wọ́n ń yin ẹyin jù", "A kò lè jẹ wọ́n", "Ọjọ́ kọ̀ọ̀kan kí a tó tà wọ́n ń jẹ oúnjẹ àti èrè, nítorí náà o nílò oníbàárà tó wà ní sẹpẹ́"], answer: 3, why: "Adìẹ ẹlẹ́ran kì í dẹ́kun jíjẹun; títà wọ́n pẹ́ ń dín èrè kù kíákíá." },
          { objective: "O1", q: "Èwo ni òótọ́ nípa adìẹ ìbílẹ̀ tí a mú dára sí i bí Kuroiler?", options: ["Wọ́n le, wọ́n wà fún ẹran àti ẹyin, ṣùgbọ́n wọn kì í mú jáde tó adìẹ àdàpọ̀ àkànṣe", "Wọn kò nílò omi", "Fún ẹyin nìkan ni wọ́n wà", "Àwọn ni adìẹ ẹlẹ́ran tí ó ń dàgbà kíákíá jù"], answer: 0, why: "Adìẹ fún ẹran àti ẹyin fi díẹ̀ nínú ohun tí wọ́n ń mú jáde sílẹ̀ fún líle àti fún lílo wọn fún ẹran àti ẹyin." },
          { objective: "O2", q: "Àwọn ọmọ adìẹ jìnnà sí ohun ìgbóná, wọ́n sì ń mí hẹlẹhẹlẹ. Kí ni o máa ṣe?", options: ["Fi ìgbóná kún un", "Dí gbogbo afẹ́fẹ́", "Dín ìgbóná kù tàbí gbé ohun ìgbóná sókè", "Fi ọmọ adìẹ míì kún un"], answer: 2, why: "Jíjìnnà àti mímí hẹlẹhẹlẹ túmọ̀ sí pé ó gbóná jù fún àwọn ọmọ adìẹ." },
          { objective: "O2", q: "Ìgbà wo ni o yẹ kí o mú òrùka ìtọ́jú gbóná?", options: ["Lẹ́yìn tí àwọn ọmọ adìẹ bá dé", "Kí àwọn ọmọ adìẹ tó dé", "Ní alẹ́ nìkan ní ọ̀sẹ̀ 3", "Láéláé; ọmọ adìẹ máa ń mú ara wọn gbóná"], answer: 1, why: "Ọmọ adìẹ ọlọ́jọ́ kan nílò ìgbóná láti ìgbà tí wọ́n bá ti dé." },
          { objective: "O3", q: "Báwo ni o ṣe yẹ kí o yí oúnjẹ kan padà sí òmíràn?", options: ["Ní òru ọjọ́ kan", "Kọ́kọ́ dá oúnjẹ dúró fún ọjọ́ kan", "Nígbà tí adìẹ bá rù nìkan", "Láàárín ọjọ́ díẹ̀, nípa pípo ti àtijọ́ mọ́ ti tuntun"], answer: 3, why: "Yíyí padà díẹ̀díẹ̀ kì í da jíjẹun àti dídà oúnjẹ adìẹ rú." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe àkójọ adìẹ tó mú èrè wá",
      lessons: [
        {
          title: "Ètò àjẹsára àti ààbò àkójọ lọ́wọ́ kòkòrò àrùn",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kọ ètò àjẹsára pẹ̀lú dókítà ẹranko rẹ, kí o sì ṣe òfin ààbò lọ́wọ́ kòkòrò àrùn fún àkójọ náà.",
          text: [
            "Àjẹsára ń dáàbò bo àkójọ adìẹ lọ́wọ́ àwọn àrùn tó wọ́pọ̀ ní agbègbè rẹ. Dókítà ẹranko tó forúkọ sílẹ̀ tàbí òṣìṣẹ́ ìlera ẹranko ló gbọ́dọ̀ pinnu àwọn àjẹsára wo, ní ọjọ́ orí wo, àti bí a ṣe máa fún wọn (nínú omi mímu, oògùn ojú, abẹ́rẹ́ tàbí gígún ìyẹ́), nítorí pé àrùn yàtọ̀ láti agbègbè sí agbègbè àti láti àsìkò sí àsìkò. Àpẹẹrẹ tó wọ́pọ̀ ní Áfíríkà ni àrùn Newcastle àti Gumboro, pẹ̀lú àrùn Marek (tí a sábà ń fún ní hatchery) àti fowl pox; dókítà ẹranko rẹ lè fi àwọn míì kún un. Béèrè lọ́wọ́ hatchery fún àkọsílẹ̀ àwọn àjẹsára tí àwọn ọmọ adìẹ ti gbà.",
            "Jẹ́ kí àjẹsára ṣiṣẹ́: rà wọ́n lọ́wọ́ agrovet tó ní ìwé àṣẹ, wo ọjọ́ tí wọ́n máa bàjẹ́, jẹ́ kí wọ́n wà ní ibi tútù láti ṣọ́ọ̀bù títí dé ọ̀dọ̀ àwọn adìẹ, fún wọn gẹ́gẹ́ bí ohun tí a kọ sára rẹ̀ àti dókítà ẹranko ṣe sọ, fún gbogbo agbo adìẹ, kí o sì kọ ọjọ́, àjẹsára, nọ́mbà ìpele rẹ̀ (batch number) àti ọ̀nà tí o gbà fún wọn sínú àkọsílẹ̀ rẹ. Má ṣe fún adìẹ tó ń ṣàìsàn ní oògùn apakòkòrò (antibiotic) fúnra rẹ láéláé: dókítà ẹranko ló ń pinnu, ìwọ sì máa kọ àkókò ìdádúró láti ara oògùn sílẹ̀ kí a má bàa ta ẹyin tàbí ẹran kankan kí ó tó parí.",
            "Ààbò àkójọ lọ́wọ́ kòkòrò àrùn: ra ọmọ adìẹ lọ́wọ́ hatchery kan tí a fọkàn tán, kí o sì máa sin wọ́n ní ọ̀nà gbogbo-wọlé, gbogbo-jáde (all-in, all-out: gbogbo adìẹ jẹ́ ọjọ́ orí kan náà, wọ́n wọlé pọ̀, wọ́n sì jáde pọ̀). Láàárín àkójọ kan sí òmíràn, kó gbogbo ohun ìtẹ́lẹ̀ jáde, fọ ilé àti irinṣẹ́ kí o sì fi oògùn apakòkòrò fọ̀ wọ́n, kí o sì fi ilé náà sílẹ̀ láìsí nǹkan fún àkókò ìsinmi tí dókítà ẹranko rẹ bá dábàá. Má ṣe jẹ́ kí àlejò wọlé, lo foot bath (omi oògùn fún ẹsẹ̀) àti bàtà oko, dènà ẹyẹ igbó àti eku, má sì kó adìẹ láti ọjà wálé láéláé. Avian influenza (bird flu) jẹ́ àrùn tí a gbọ́dọ̀ ròyìn: ikú òjijì, ògbe tó wú tó sì di àwọ̀ elése àlùkò, mímí gúlegúle tàbí ẹyin tó dín kù gan-an lójijì túmọ̀ sí pé kí o ti àwọn adìẹ mọ́lé, dá gbogbo títà àti ìkóròkò dúró, kí o sì pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀."
          ],
          steps: ["Béèrè lọ́wọ́ hatchery àwọn àjẹsára tí àwọn ọmọ adìẹ ti gbà.", "Jókòó pẹ̀lú dókítà ẹranko rẹ kí ẹ kọ ètò náà: àrùn, ọjọ́ orí, ọ̀nà.", "Ra àjẹsára lọ́wọ́ agrovet tó ní ìwé àṣẹ; wo ọjọ́ tí ó máa bàjẹ́; jẹ́ kí ó wà ní ibi tútù.", "Fún gbogbo agbo adìẹ ní àjẹsára gẹ́gẹ́ bí ohun tí a kọ sára rẹ̀ àti dókítà ẹranko ṣe sọ; kọ ọ́ sílẹ̀.", "Máa ṣe gbogbo-wọlé, gbogbo-jáde; fọ ilé, fi oògùn apakòkòrò fọ̀ ọ́, kí o sì jẹ́ kí ó sinmi láàárín àkójọ.", "Tí o bá fura sí avian influenza tàbí àrùn Newcastle: ti àwọn adìẹ mọ́lé, dá títà dúró, pe dókítà ẹranko."],
          words: [["Ètò àjẹsára", "ètò tí a kọ sílẹ̀ nípa àwọn àjẹsára tí agbo adìẹ máa gbà, ní ọjọ́ orí wo àti báwo, tí dókítà ẹranko pinnu."], ["Gbogbo-wọlé, gbogbo-jáde (all-in, all-out)", "gbogbo adìẹ inú ilé kan jẹ́ ọjọ́ orí kan náà, a kó wọn wọlé pọ̀, a sì kó wọn jáde pọ̀."], ["Àkókò ìdádúró", "àkókò lẹ́yìn oògùn kí a tó lè ta ẹyin tàbí ẹran; ó wà lára oògùn náà."], ["Agrovet tó ní ìwé àṣẹ", "ṣọ́ọ̀bù tí òfin fún láàyè láti ta oògùn ẹranko àti àjẹsára."]],
          slides: [
            { title: "Dókítà ẹranko ló ń ṣe ètò náà", bullets: ["Àwọn àjẹsára wo, ọjọ́ orí wo, ọ̀nà wo", "Tó wọ́pọ̀: Newcastle, Gumboro, Marek, fowl pox", "Béèrè lọ́wọ́ hatchery ohun tí ọmọ adìẹ ti gbà"] },
            { title: "Jẹ́ kí àjẹsára ṣiṣẹ́", bullets: ["Agrovet tó ní ìwé àṣẹ; wo ọjọ́ ìbàjẹ́; jẹ́ kí ó tutù", "Gẹ́gẹ́ bí ohun tí a kọ sára rẹ̀ àti dókítà ẹranko; gbogbo agbo", "Kọ ọjọ́, àjẹsára, batch number, ọ̀nà"] },
            { title: "Ààbò àkójọ lọ́wọ́ kòkòrò àrùn", bullets: ["Hatchery kan; gbogbo-wọlé, gbogbo-jáde", "Fọ, fi oògùn apakòkòrò fọ̀, jẹ́ kí ó sinmi láàárín àkójọ", "Foot bath, bàtà oko, kò sí àlejò, kò sí adìẹ ọjà"] },
            { title: "Avian influenza: ròyìn lẹ́sẹ̀kẹsẹ̀", bullets: ["Ikú òjijì, ògbe elése àlùkò, mímí gúlegúle, ẹyin dín kù", "Ti adìẹ mọ́lé; dá títà àti ìkóròkò dúró", "Pe dókítà ẹranko tàbí ọ́fíìsì ìlera ẹranko báyìí"] }
          ],
          sources: [WOAH_ND, WOAH_AI, APHIS_AI, FAO_BIOSEC, FAO_PRUDENT, KVB, VCN],
          tryIt: "Ṣètò ìpàdé pẹ̀lú dókítà ẹranko rẹ tàbí òṣìṣẹ́ ìlera ẹranko. Mú tábìlì kan lọ pẹ̀lú àwọn òpó wọ̀nyí: àrùn, ọjọ́ orí, ọ̀nà, ọjọ́ tí a fún wọn, batch number. Kọ ètò tí dókítà ẹranko ṣe sínú rẹ̀. Nísàlẹ̀ rẹ̀, kọ òfin ààbò lọ́wọ́ kòkòrò àrùn márùn-ún fún àkójọ rẹ.",
          youCanNow: "kọ ètò àjẹsára pẹ̀lú dókítà ẹranko rẹ, kọ àjẹsára kọ̀ọ̀kan sílẹ̀, kí o sì pa ààbò àkójọ lọ́wọ́ kòkòrò àrùn mọ́ dáadáa.",
          quickCheck: [
            { objective: "O4", q: "Ta ló yẹ kí ó pinnu àwọn àjẹsára tí agbo adìẹ rẹ máa gbà àti ìgbà wo?", options: ["Ẹni tí ó ń ta oúnjẹ", "Dókítà ẹranko tó forúkọ sílẹ̀ tàbí òṣìṣẹ́ ìlera ẹranko", "Aládùúgbò tí ó ní adìẹ", "Ẹgbẹ́ kan lórí social media"], answer: 1, why: "Àrùn yàtọ̀ láti agbègbè sí agbègbè, nítorí náà dókítà ẹranko tó forúkọ sílẹ̀ ló ń ṣe ètò náà." },
            { objective: "O4", q: "Kí ni gbogbo-wọlé, gbogbo-jáde túmọ̀ sí?", options: ["Àwọn adìẹ ń jáde lọ jẹ̀ kiri lójoojúmọ́", "Àwọn àlejò lè wọlé kí wọ́n sì jáde bí wọ́n ṣe fẹ́", "A ń fi adìẹ tuntun kún un ní ọ̀sẹ̀ kọ̀ọ̀kan", "A ń kó gbogbo adìẹ inú ilé kan wọlé pọ̀, a sì ń kó wọn jáde pọ̀"], answer: 3, why: "Ọjọ́ orí kan ṣoṣo nínú ilé kan jẹ́ kí o lè fọ ilé náà kí o sì jẹ́ kí ó sinmi pátápátá láàárín àkójọ, èyí sì ń gé ìyípo àrùn." }
          ]
        },
        {
          title: "Títọ́jú ẹyin àti àkọsílẹ̀ agbo adìẹ",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kó ẹyin kí o sì tọ́jú wọn dáadáa, kí o sì máa kọ àkọsílẹ̀ agbo adìẹ lójoojúmọ́.",
          text: [
            "Ẹyin máa ń bàjẹ́, kòkòrò àrùn sì máa ń wọ̀ ọ́ tí ó bá pẹ́ nínú ìtẹ́. Kó ẹyin ní ó kéré tán ẹ̀ẹ̀mejì lójúmọ́, ju bẹ́ẹ̀ lọ nígbà ooru. Jẹ́ kí ìtẹ́ mọ́ pẹ̀lú ohun ìtẹ́lẹ̀ tuntun kí ẹyin lè jáde ní mímọ́. Ya ẹyin tó fọ́, ẹyin tó dọ̀tí àti ẹyin tó kéré jù sọ́tọ̀. Fi aṣọ gbígbẹ nu ẹyin tí ó dọ̀tí díẹ̀; má ṣe rì wọ́n sínú omi, nítorí pé ó lè fa kòkòrò àrùn wọ inú èèpo. Tọ́jú ẹyin sínú páálí ẹyin (tray), orí ṣóńṣó sísàlẹ̀, ní ibi tó tutù, tó ní ibòji, tí afẹ́fẹ́ ń wọ̀, tí ó jìnnà sí òórùn líle, kí o sì kọ́kọ́ ta àwọn tí ó ti pẹ́ jù.",
            "Àkọsílẹ̀ ń sọ ohun tí ń ṣẹlẹ̀ fún ọ kí ó tó pẹ́ jù. Lójoojúmọ́, kọ: iye adìẹ, ikú àti ohun tí ó ṣeé ṣe kí ó fà á, oúnjẹ tí a lò, omi tí a lò, àti ẹyin tí a kó (ní páálí àti ní ìpele dídára). Tún kọ àjẹsára àti ìtọ́jú kọ̀ọ̀kan, ọjọ́ tí àkókò ìdádúró parí láti ara oògùn, gbogbo ohun tí o rà àti gbogbo ohun tí o tà. Ìwé lásán ṣiṣẹ́; spreadsheet lórí fóònù máa ṣírò àpapọ̀ fún ọ.",
            "Lo àkọsílẹ̀ náà. Ìpín ikú = adìẹ tó kú / adìẹ tí o fi bẹ̀rẹ̀ x 100. Ìpín ìyẹ́yin = ẹyin tí a kó lọ́jọ́ kan / iye abo adìẹ x 100. Tí ikú bá ń pọ̀ sí i, tí omi tí wọ́n ń mu bá dín kù, tàbí tí ìpín ìyẹ́yin bá wálẹ̀ lójijì, yẹ agbo adìẹ wò kí o sì pe dókítà ẹranko. Ní ìparí àkójọ, àkọsílẹ̀ náà ló máa fún ọ ní àwọn nọ́mbà fún ìwé ìṣirò owó rẹ."
          ],
          steps: ["Kó ẹyin ní ó kéré tán ẹ̀ẹ̀mejì lójúmọ́.", "Ya ẹyin tó fọ́, tó dọ̀tí àti tó kéré sọ́tọ̀; fi aṣọ gbígbẹ nu àwọn tí ó dọ̀tí díẹ̀.", "Tọ́jú wọn sínú páálí, orí ṣóńṣó sísàlẹ̀, ní ibi tó tutù tó ní ibòji; ta ti àtijọ́ kọ́kọ́.", "Lójoojúmọ́, kọ iye adìẹ, ikú, oúnjẹ, omi àti ẹyin.", "Kọ àjẹsára, ìtọ́jú, ọjọ́ tí àkókò ìdádúró parí, ohun tí o rà àti ohun tí o tà.", "Ṣírò ìpín ikú àti ìpín ìyẹ́yin ní ọ̀sẹ̀ kọ̀ọ̀kan, kí o sì wá ìyípadà òjijì."],
          words: [["Ìpín ikú (mortality rate)", "iye adìẹ tó kú, ní ìdá ọgọ́rùn-ún (percent) ti iye adìẹ tí o fi bẹ̀rẹ̀."], ["Ìpín ìyẹ́yin (laying rate)", "ẹyin tí a kó lọ́jọ́ kan ní ìdá ọgọ́rùn-ún (percent) ti iye abo adìẹ."], ["Ìpele dídára (grade)", "pínpín ẹyin sọ́tọ̀ nípa bí wọ́n ṣe tóbi tó àti bí wọ́n ṣe dára tó."]],
          slides: [
            { title: "Títọ́jú ẹyin", bullets: ["Kó wọn ní ó kéré tán ẹ̀ẹ̀mejì lójúmọ́", "Ìtẹ́ tó mọ́; ya ẹyin tó fọ́ àti tó dọ̀tí sọ́tọ̀", "Fi aṣọ gbígbẹ nu; má ṣe rì wọ́n sínú omi"] },
            { title: "Ìpamọ́ ẹyin", bullets: ["Páálí ẹyin, orí ṣóńṣó sísàlẹ̀", "Ibi tó tutù, ibòji, afẹ́fẹ́, kò sí òórùn líle", "Ta àwọn tí ó ti pẹ́ jù kọ́kọ́"] },
            { title: "Àkọsílẹ̀ ojoojúmọ́", bullets: ["Iye adìẹ, ikú àti ohun tó fà á, oúnjẹ, omi, ẹyin", "Àjẹsára, ìtọ́jú, ọjọ́ tí àkókò ìdádúró parí", "Gbogbo ohun tí o rà àti tí o tà"] },
            { title: "Lo àwọn nọ́mbà náà", bullets: ["Ìpín ikú = tó kú / tí o fi bẹ̀rẹ̀ x 100", "Ìpín ìyẹ́yin = ẹyin lọ́jọ́ kan / abo adìẹ x 100", "Ìyípadà òjijì: yẹ agbo wò, pe dókítà ẹranko"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Ṣe ojú-ewé àkọsílẹ̀ ojoojúmọ́ pẹ̀lú àwọn òpó wọ̀nyí: ọjọ́, iye adìẹ, ikú àti ohun tó fà á, oúnjẹ tí a lò, omi tí a lò, ẹyin tí a kó, àkíyèsí. Kọ ọ̀sẹ̀ àpẹẹrẹ kan sínú rẹ̀. Lẹ́yìn náà, ṣírò ìpín ikú àti, fún adìẹ ẹlẹ́yin, ìpín ìyẹ́yin fún ọjọ́ kan.",
          youCanNow: "kó ẹyin kí o sì tọ́jú wọn dáadáa, kí o sì máa kọ àkọsílẹ̀ ojoojúmọ́ tí ó ń fi ìpín ikú àti ìpín ìyẹ́yin hàn.",
          quickCheck: [
            { objective: "O5", q: "Báwo ni o ṣe yẹ kí o tọ́jú ẹyin sínú páálí?", options: ["Orí ṣóńṣó sókè, nínú oòrùn", "Orí ṣóńṣó sísàlẹ̀, ní ibi tó tutù tó ní ibòji", "Kí a kọ́kọ́ fọ̀ wọ́n kí a sì rì wọ́n sínú omi", "Lẹ́gbẹ̀ẹ́ epo kẹ̀rọ́sínì àti àlùbọ́sà"], answer: 1, why: "Orí ṣóńṣó sísàlẹ̀, ní ibi tó tutù tó ní ibòji, ń jẹ́ kí ẹyin pẹ́ kí ó tó bàjẹ́." },
            { objective: "O5", q: "O fi adìẹ ẹlẹ́ran 500 bẹ̀rẹ̀, 25 sì kú. Kí ni ìpín ikú?", options: ["25 percent", "2.5 percent", "50 percent", "5 percent"], answer: 3, why: "25 / 500 x 100 = 5 percent." }
          ]
        },
        {
          title: "Ìṣirò owó àkójọ adìẹ: owó adìẹ kọ̀ọ̀kan àti owó tí kò jèrè tí kò pàdánù",
          objectives: ["O6"],
          minutes: 6,
          goal: "Ṣírò owó adìẹ kọ̀ọ̀kan tàbí páálí ẹyin kọ̀ọ̀kan àti owó tí kò jèrè tí kò pàdánù fún àkójọ kan.",
          text: [
            "Kọ gbogbo ìnáwó àkójọ náà: ọmọ adìẹ, oúnjẹ, àjẹsára àti dókítà ẹranko, ohun ìtẹ́lẹ̀, epo tàbí iná mànàmáná fún títọ́jú ọmọ adìẹ, oògùn apakòkòrò, owó òṣìṣẹ́, ọkọ̀ àti ohun ìdìpọ̀. Àpẹẹrẹ pẹ̀lú owó shilling Kenya tí a ṣe, adìẹ ẹlẹ́ran 500: ọmọ adìẹ 50,000; oúnjẹ 122,500; àjẹsára àti dókítà ẹranko 5,000; ohun ìtẹ́lẹ̀, títọ́jú ọmọ adìẹ àti iná 8,000; ọkọ̀ àti àwọn míì 6,500. Àpapọ̀ KES 192,000. Lo iye owó tí wọ́n sọ fún ọ: owó yàtọ̀ láti ibì kan sí òmíràn àti láti àsìkò sí àsìkò, ọ̀nà náà sì jẹ́ ọ̀kan náà ní NGN, GHS tàbí XOF.",
            "Ikú ń yí gbogbo nǹkan padà, nítorí pé àwọn adìẹ tó kú ti jẹ oúnjẹ. Tí 5 percent bá kú, o máa ta adìẹ 475. Owó adìẹ kọ̀ọ̀kan tí o tà = 192,000 / 475 = KES 404. Ìyẹn ni owó tí kò jèrè tí kò pàdánù (break-even): tí o bá tà á ní owó tí ó kéré sí èyí, o máa pàdánù owó. Tí 15 percent bá kú, adìẹ 425 nìkan ni o máa tà, owó tí kò jèrè tí kò pàdánù sì máa gòkè sí nǹkan bí KES 452. Tí o bá ń ta adìẹ kan ní KES 550, adìẹ 475 máa mú 261,250 wá, èrè 69,250. Láti mọ iye adìẹ tí o gbọ́dọ̀ tà kí ìnáwó lè padà: 192,000 / 550 = 349.1, nítorí náà adìẹ 350.",
            "Adìẹ ẹlẹ́yin: ṣírò rẹ̀ ní ọ̀sẹ̀ọ̀sẹ̀. Àpẹẹrẹ: abo adìẹ 300 ní ìpín ìyẹ́yin 80 percent máa fún ọ ní 300 x 0.8 x 7 = ẹyin 1,680, tàbí páálí 56 tí ó ní ẹyin 30. Tí oúnjẹ àti àwọn ìnáwó míì bá jẹ́ KES 15,000 lọ́sẹ̀, owó páálí kọ̀ọ̀kan jẹ́ 15,000 / 56 = nǹkan bí KES 268. Fi í wé owó tí àwọn oníbàárà ń san. Kí o tó bẹ̀rẹ̀, tún ka gbogbo àdéhùn gbèsè tàbí àdéhùn pẹ̀lú oníbàárà tàbí olùpèsè dáadáa, kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o fọkàn tán."
          ],
          steps: ["Kọ gbogbo ìnáwó àkójọ náà pẹ̀lú owó agbègbè rẹ.", "Ṣírò àpapọ̀ wọn fún gbogbo ìnáwó.", "Fojú díwọ̀n iye ikú kí o sì ṣírò iye adìẹ tí o máa tà.", "Owó adìẹ kọ̀ọ̀kan = gbogbo ìnáwó / adìẹ tí o tà: owó tí kò jèrè tí kò pàdánù rẹ.", "Adìẹ ẹlẹ́yin: owó páálí kọ̀ọ̀kan = ìnáwó ọ̀sẹ̀ / páálí tí a kó.", "Fi í wé owó títà; ṣírò èrè tàbí àdánù."],
          words: [["Owó tí kò jèrè tí kò pàdánù (break-even price)", "owó fún adìẹ kan tàbí páálí kan tí owó tí ó wọlé fi bo gbogbo ìnáwó gẹ́ẹ́."],["Èrè", "owó tí ó wọlé yọ gbogbo ìnáwó kúrò."], ["Ìwé ìṣirò owó (cost sheet)", "àkọsílẹ̀ gbogbo ìnáwó àkójọ náà pẹ̀lú àpapọ̀ wọn."]],
          slides: [
            { title: "Kọ gbogbo ìnáwó", bullets: ["Ọmọ adìẹ, oúnjẹ, àjẹsára àti dókítà ẹranko, ohun ìtẹ́lẹ̀, epo", "Owó òṣìṣẹ́, ọkọ̀, ohun ìdìpọ̀", "Àpẹẹrẹ àpapọ̀: KES 192,000 fún adìẹ ẹlẹ́ran 500"] },
            { title: "Ikú ń mú owó adìẹ kọ̀ọ̀kan gòkè", bullets: ["5 percent kú: a tà 475, KES 404 ní ọ̀kọ̀ọ̀kan", "15 percent kú: a tà 425, nǹkan bí KES 452 ní ọ̀kọ̀ọ̀kan", "Àwọn adìẹ tó kú ti jẹ oúnjẹ"] },
            { title: "Owó tí kò jèrè tí kò pàdánù àti èrè", bullets: ["Break-even = gbogbo ìnáwó / adìẹ tí a tà", "Ní KES 550: 475 x 550 - 192,000 = KES 69,250", "Adìẹ tí a nílò láti bo ìnáwó: 192,000 / 550 = 350"] },
            { title: "Adìẹ ẹlẹ́yin: owó páálí kọ̀ọ̀kan", bullets: ["Abo adìẹ 300 x 0.8 x 7 = ẹyin 1,680 = páálí 56", "KES 15,000 / 56 = nǹkan bí KES 268 fún páálí kan", "Àpẹẹrẹ ni owó wọ̀nyí; lo tìrẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò àkójọ adìẹ kan pẹ̀lú ìṣirò owó: irú adìẹ, bí ilé ṣe tóbi tó àti iye adìẹ, ètò títọ́jú ọmọ adìẹ, oúnjẹ ní ìpele kọ̀ọ̀kan, ètò àjẹsára àti òfin ààbò lọ́wọ́ kòkòrò àrùn, àkọsílẹ̀, àti ìwé ìṣirò owó pẹ̀lú gbogbo ìnáwó, iye ikú tí o retí, owó adìẹ kọ̀ọ̀kan tí o tà tàbí páálí kọ̀ọ̀kan, àti owó tí kò jèrè tí kò pàdánù rẹ.",
          youCanNow: "ṣírò owó àkójọ adìẹ kan, fi ààyè sílẹ̀ fún ikú, kí o sì ṣírò owó adìẹ kọ̀ọ̀kan tàbí páálí kọ̀ọ̀kan àti owó tí kò jèrè tí kò pàdánù rẹ.",
          quickCheck: [
            { objective: "O6", q: "Àkójọ kan ná NGN 900,000, o sì retí láti ta adìẹ 450. Kí ni owó tí kò jèrè tí kò pàdánù fún adìẹ kan?", options: ["NGN 200", "NGN 450", "NGN 2,000", "NGN 20,000"], answer: 2, why: "900,000 / 450 = NGN 2,000 fún adìẹ kan." },
            { objective: "O6", q: "Kí ló dé tí ikú tó pọ̀ sí i fi ń mú owó adìẹ kọ̀ọ̀kan gòkè?", options: ["Àwọn adìẹ tó kú ti jẹ oúnjẹ, wọ́n sì ti náni lówó, ṣùgbọ́n a kò tà wọ́n", "A ń ta àwọn adìẹ tó kú ní owó gíga", "Oúnjẹ máa ń wálẹ̀", "Àjẹsára máa ń wọ́n díẹ̀"], answer: 0, why: "Ìnáwó kan náà ni a pín sí àárín adìẹ tí ó dín kù tí a tà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe àkójọ adìẹ tó mú èrè wá",
        questions: [
          { objective: "O4", q: "Kí o tó ra àjẹsára, kí ni o yẹ kí o wò?", options: ["Pé òun ló wọ́n jù", "Pé ó wá láti ọ̀dọ̀ agrovet tó ní ìwé àṣẹ, ọjọ́ rẹ̀ kò tíì kọjá, ó sì ti wà ní ibi tútù", "Pé kò ní àkọlé", "Pé aládùúgbò kan ní ìyókù rẹ̀"], answer: 1, why: "Àjẹsára tí ọjọ́ rẹ̀ ti kọjá tàbí tí ó ti gbóná lè má dáàbò bo agbo adìẹ." },
          { objective: "O4", q: "Lójijì, ọ̀pọ̀ adìẹ ẹlẹ́yin rẹ ń kú, ògbe wọn sì ti di àwọ̀ elése àlùkò. Kí ni o máa ṣe?", options: ["Ta ẹyin kíákíá", "Fún wọn ní oògùn apakòkòrò láti ṣọ́ọ̀bù", "Kó adìẹ tuntun wọlé", "Ti adìẹ mọ́lé, dá gbogbo títà àti ìkóròkò dúró, kí o sì pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀"], answer: 3, why: "Àwọn àmì wọ̀nyí lè jẹ́ ti avian influenza, àrùn tí a gbọ́dọ̀ ròyìn lẹ́sẹ̀kẹsẹ̀." },
          { objective: "O5", q: "Kí ló dé tí a fi ń kó ẹyin ní ó kéré tán ẹ̀ẹ̀mejì lójúmọ́?", options: ["Ẹyin tí ó pẹ́ nínú ìtẹ́ máa ń bàjẹ́, kòkòrò àrùn sì máa ń wọ̀ ọ́", "Abo adìẹ ń yin ẹyin ní alẹ́ nìkan", "Ó ń mú kí abo adìẹ yin ẹyin ní ìlọ́po méjì", "Àwọn oníbàárà fẹ́ràn ẹyin tó gbóná"], answer: 0, why: "Kíkó ẹyin léraléra ń jẹ́ kí ẹyin mọ́ kí ó sì wà ní tuntun." },
          { objective: "O5", q: "Abo adìẹ 250 yin ẹyin 200 lónìí. Kí ni ìpín ìyẹ́yin?", options: ["50 percent", "125 percent", "80 percent", "20 percent"], answer: 2, why: "200 / 250 x 100 = 80 percent." },
          { objective: "O6", q: "Ìnáwó adìẹ ẹlẹ́yin lọ́sẹ̀ jẹ́ GHS 2,400, o sì kó páálí 60. Kí ni owó páálí kọ̀ọ̀kan?", options: ["GHS 40", "GHS 144", "GHS 4", "GHS 400"], answer: 0, why: "2,400 / 60 = GHS 40 fún páálí kan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ọ̀sìn Adìẹ fún Òwò",
    questions: [
      { objective: "O1", q: "Irú adìẹ wo ló máa ń mú owó wá kíákíá jù?", options: ["Adìẹ ẹlẹ́yin", "Adìẹ ẹlẹ́ran", "Àkùkọ fún ìbísí", "Adìẹ ìbílẹ̀ tí a mú dára sí i tí a ń sìn fún ẹyin"], answer: 1, why: "A sábà máa ń ta adìẹ ẹlẹ́ran láàárín nǹkan bí ọ̀sẹ̀ 5 sí 7." },
      { objective: "O1", q: "Kí ni adìẹ ẹlẹ́yin nílò tí adìẹ ẹlẹ́ran kò nílò?", options: ["Oníbàárà ní ọjọ́ kan pàtó", "Kò sí oúnjẹ fún oṣù púpọ̀", "Oṣù púpọ̀ ti bíbọ́ wọn kí owó tó wọlé àti ọjà ẹyin tí kì í dá dúró", "Títà wọ́n láàárín ọ̀sẹ̀ mẹ́fà"], answer: 2, why: "Adìẹ ẹlẹ́yin máa ń bẹ̀rẹ̀ sí í yin ẹyin ní nǹkan bí oṣù 4 sí 5 nìkan, lẹ́yìn náà wọ́n nílò àwọn tí ń ra ẹyin déédéé." },
      { objective: "O1", q: "Níbo ni o yẹ kí o ti ra ọmọ adìẹ ọlọ́jọ́ kan?", options: ["Lọ́wọ́ hatchery tí ọ́fíìsì ẹran ọ̀sìn rẹ tàbí dókítà ẹranko rẹ fọkàn tán", "Lọ́wọ́ ẹnikẹ́ni tí ń tà lẹ́gbẹ̀ẹ́ ọ̀nà", "Láti inú ìpolówó tí ó wọ́n jù lórí ayélujára", "Láti oko tí adìẹ ibẹ̀ ń ṣàìsàn"], answer: 0, why: "Hatchery tí a fọkàn tán ń fúnni ní ọmọ adìẹ tí ara wọn le, ti irú tó tọ́, pẹ̀lú àkọsílẹ̀ àjẹsára." },
      { objective: "O2", q: "Àwọn ọmọ adìẹ kó jọ sí ẹ̀gbẹ́ kan nínú òrùka ìtọ́jú, wọ́n jìnnà sí ohun ìgbóná. Kí ló ṣeé ṣe kí ó fà á?", options: ["Ó gbóná jù", "Oúnjẹ ti pọ̀ jù", "Oorun ń kùn wọ́n", "Atẹ́gùn tí ń fẹ́ wọlé"], answer: 3, why: "Kíkó jọ sí ẹ̀gbẹ́ kan, jìnnà sí ìgbóná, fi hàn pé atẹ́gùn ń fẹ́ wọlé." },
      { objective: "O2", q: "Kí ló máa ṣẹlẹ̀ tí o bá kó adìẹ púpọ̀ jù sínú ilé kan?", options: ["Wọ́n máa dàgbà kíákíá", "Ìyà ooru, ohun ìtẹ́lẹ̀ tó tutù, ṣíṣá ara wọn àti àrùn", "Wọn kò ní nílò omi púpọ̀", "Ẹyin máa tóbi sí i"], answer: 1, why: "Kíkó jọ pọ̀ jù ń ba ìlera àti ìdàgbà jẹ́." },
      { objective: "O2", q: "Kí ló dé tí ààrò èédú fún títọ́jú ọmọ adìẹ fi gbọ́dọ̀ ní afẹ́fẹ́ tó dára?", options: ["Èéfín èédú lè pa ọmọ adìẹ àti ènìyàn", "Láti mú àwọn ọmọ adìẹ tutù", "Láti jẹ́ kí ẹyẹ igbó wọlé", "Láti ṣọ́ èédú lò"], answer: 0, why: "Èédú tí ń jó máa ń tú èéfín olóró jáde ní ibi tí a tì pa." },
      { objective: "O2", q: "Kí ni o yẹ kí o ṣe sí ilé náà kí àkójọ tuntun tó dé?", options: ["Fi adìẹ tuntun kún àwọn àtijọ́", "Fi ohun ìtẹ́lẹ̀ àtijọ́ sílẹ̀ fún ìgbóná", "Fọ ọ́, fi oògùn apakòkòrò fọ̀ ọ́, kí o sì jẹ́ kí ó sinmi bí dókítà ẹranko ṣe dábàá", "Kò sí nǹkan"], answer: 2, why: "Fífọ, fífi oògùn apakòkòrò fọ̀ àti jíjẹ́ kí ó sinmi ń gé ìyípo àrùn láàárín àkójọ." },
      { objective: "O3", q: "Kí ni ètò oúnjẹ tí a sábà ń tẹ̀lé fún adìẹ ẹlẹ́ran?", options: ["Layers mash, lẹ́yìn náà starter", "Growers mash nìkan", "Chick mash, lẹ́yìn náà layers mash", "Starter, lẹ́yìn náà finisher"], answer: 3, why: "Adìẹ ẹlẹ́ran ń bẹ̀rẹ̀ pẹ̀lú starter tí ó ní protein púpọ̀, wọ́n sì ń parí pẹ̀lú finisher." },
      { objective: "O3", q: "Kí ló dé tí a kò fi gbọ́dọ̀ kún ohun ìjẹun dé ẹnu?", options: ["Àwọn adìẹ máa ń fi ẹsẹ̀ wà oúnjẹ dànù, wọ́n sì ń fi ṣòfò", "Oúnjẹ máa tutù", "Ó ń jẹ́ kí adìẹ yin ẹyin díẹ̀", "Ó ń fa àwọn dókítà ẹranko mọ́ra"], answer: 0, why: "Ohun ìjẹun tí a kún jù ń fi oúnjẹ ṣòfò, oúnjẹ sì ni ìnáwó tó pọ̀ jù nínú àkójọ." },
      { objective: "O3", q: "Kí ni ó sábà máa ń jẹ́ àmì àkọ́kọ́ pé àwọn adìẹ ń ṣàìsàn?", options: ["Wọ́n ń yin ẹyin tó tóbi sí i", "Ìyẹ́ wọn ń di funfun", "Omi tí wọ́n ń mu dín kù lójijì", "Wọ́n ń dàgbà kíákíá"], answer: 2, why: "Adìẹ tó ń ṣàìsàn máa ń mu omi díẹ̀, nígbà púpọ̀ kí àwọn àmì míì tó hàn." },
      { objective: "O4", q: "Èwo ni àjẹsára adìẹ tó wọ́pọ̀ ní Áfíríkà tí dókítà ẹranko ń ṣètò?", options: ["Àrùn Newcastle", "Àrùn dìgbòlugi (rabies)", "Àrùn ẹsẹ̀ àti ẹnu (foot-and-mouth)", "East Coast fever"], answer: 0, why: "Àrùn Newcastle wà lára àwọn àjẹsára adìẹ tó wọ́pọ̀ jù; dókítà ẹranko ló ń ṣe ètò náà." },
      { objective: "O4", q: "Kí ni o yẹ kí o kọ sílẹ̀ ní gbogbo ìgbà tí o bá fún wọn ní àjẹsára?", options: ["Ojú ọjọ́ nìkan", "Kò sí nǹkan; agrovet ló ń kọ àkọsílẹ̀", "Owó ẹyin", "Ọjọ́, àjẹsára, batch number àti ọ̀nà"], answer: 3, why: "Àkọsílẹ̀ kíkún ń fi ohun tí agbo adìẹ ti gbà hàn, ó sì ń ran dókítà ẹranko lọ́wọ́." },
      { objective: "O4", q: "Ta ló ń pinnu bóyá kí a fún adìẹ tó ń ṣàìsàn ní oògùn apakòkòrò (antibiotic)?", options: ["Òṣìṣẹ́ oko", "Dókítà ẹranko", "Ẹni tí ó ń ra ẹyin", "Ẹni tí ó ń ta oúnjẹ"], answer: 1, why: "Dókítà ẹranko ló ń pinnu, ìwọ sì máa kọ ọjọ́ tí àkókò ìdádúró parí láti ara oògùn sílẹ̀." },
      { objective: "O5", q: "Báwo ni o ṣe yẹ kí o nu ẹyin tí ó dọ̀tí díẹ̀?", options: ["Rì í sínú omi", "Fi ọṣẹ fọ̀ ọ́ dáadáa", "Fi aṣọ gbígbẹ nù ún", "Fi í sílẹ̀ nínú ìtẹ́"], answer: 2, why: "Nínu pẹ̀lú aṣọ gbígbẹ kì í fa kòkòrò àrùn wọ inú èèpo." },
      { objective: "O5", q: "Èwo ló yẹ kí ó wà nínú àkọsílẹ̀ agbo adìẹ ojoojúmọ́?", options: ["Iye adìẹ, ikú, oúnjẹ, omi àti ẹyin", "Ẹyin tí a tà nìkan", "Ohun tí aládùúgbò tà", "Kò sí nǹkan tí gbogbo nǹkan bá dára"], answer: 0, why: "Àwọn nọ́mbà ojoojúmọ́ ń fi ìṣòro hàn ní kùtùkùtù, wọ́n sì ń pèsè ohun tí ìwé ìṣirò owó nílò." },
      { objective: "O5", q: "O fi adìẹ ẹlẹ́ran 1,000 bẹ̀rẹ̀, 80 sì kú. Kí ni ìpín ikú?", options: ["80 percent", "0.8 percent", "12.5 percent", "8 percent"], answer: 3, why: "80 / 1,000 x 100 = 8 percent." },
      { objective: "O6", q: "Kí ni owó tí kò jèrè tí kò pàdánù fún adìẹ kan?", options: ["Owó tí ó ga jù lọ́jà", "Gbogbo ìnáwó tí a pín sí iye adìẹ tí a tà", "Owó ọmọ adìẹ kan", "Owó oúnjẹ nìkan"], answer: 1, why: "Ní owó yìí, owó tí ó wọlé bo gbogbo ìnáwó gẹ́ẹ́." },
      { objective: "O6", q: "Àkójọ kan ná XOF 1,500,000, o sì ta adìẹ 500 ní XOF 4,000. Kí ni èrè?", options: ["XOF 2,000,000", "XOF 1,500,000", "XOF 500,000", "XOF 4,000"], answer: 2, why: "500 x 4,000 = 2,000,000 owó tí ó wọlé; yọ 1,500,000 ìnáwó kúrò = èrè XOF 500,000." },
      { objective: "O6", q: "Abo adìẹ 300 ń yin ẹyin ní 80 percent fún ọ̀sẹ̀ kan. Nǹkan bí páálí mélòó tí ó ní ẹyin 30?", options: ["56", "80", "240", "1,680"], answer: 0, why: "300 x 0.8 x 7 = ẹyin 1,680; 1,680 / 30 = páálí 56." },
      { objective: "O6", q: "Owó adìẹ kọ̀ọ̀kan tí o tà jẹ́ KES 404, àwọn oníbàárà sì ń san KES 380. Kí ló ń ṣẹlẹ̀?", options: ["O ń jèrè KES 24 lórí adìẹ kọ̀ọ̀kan", "O kò jèrè, o kò sì pàdánù", "Kò sí nǹkan; owó kò ṣe pàtàkì", "O ń pàdánù nǹkan bí KES 24 lórí adìẹ kọ̀ọ̀kan"], answer: 3, why: "Títà ní owó tí ó kéré sí owó tí kò jèrè tí kò pàdánù ń pàdánù owó lórí gbogbo adìẹ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 5, 7, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún un yẹ̀ wò.",
    criteria: [
      { name: "Irú adìẹ àti ọjà", objective: "O1", notYet: "Kò sí ìdí fún yíyàn náà, tàbí kò dárúkọ oníbàárà.", meets: "Ó dárúkọ irú adìẹ, hatchery tí a fọkàn tán àti ó kéré tán ìdí mẹ́ta tí ó bá ọjà, owó àti àkókò mu.", exceeds: "Ó dárúkọ oníbàárà kan pàtó àti ìgbà tí ó ń rà, ó sì ṣètò àkójọ náà kí ó bá a mu." },
      { name: "Ilé adìẹ, ààyè àti títọ́jú ọmọ adìẹ", objective: "O2", notYet: "Kò ṣírò iye adìẹ láti ààyè ilẹ̀, tàbí kò sí ètò títọ́jú ọmọ adìẹ.", meets: "Ààyè ilẹ̀ x iye adìẹ fún mítà onígun mẹ́rin láti ìwé ìtọ́sọ́nà; ètò títọ́jú ọmọ adìẹ tí a ń yẹ ìgbóná rẹ̀ wò nípa ìwà ọmọ adìẹ.", exceeds: "Ó tún sọ nípa fífọ, fífi oògùn apakòkòrò fọ̀ àti jíjẹ́ kí ilé sinmi, àti afẹ́fẹ́ tó láàbò fún ohun ìgbóná." },
      { name: "Ètò oúnjẹ àti omi", objective: "O3", notYet: "Àwọn ìpele tàbí irú oúnjẹ kò sí níbẹ̀, tàbí kò sí ètò omi.", meets: "Irú oúnjẹ fún ìpele kọ̀ọ̀kan, ọjọ́ ìyípadà, ohun ìjẹun àti ohun ìmumi tó tó, àti omi mímọ́ ní gbogbo ìgbà.", exceeds: "Ó fojú díwọ̀n iye àpò oúnjẹ fún ìpele kọ̀ọ̀kan àti ẹni tí ó ń yẹ omi wò lójoojúmọ́." },
      { name: "Àjẹsára àti ààbò lọ́wọ́ kòkòrò àrùn", objective: "O4", notYet: "Dókítà ẹranko kò lọ́wọ́ sí i, tàbí ó dá iye àjẹsára sílẹ̀ fúnra rẹ̀, tàbí kò sí òfin ààbò lọ́wọ́ kòkòrò àrùn.", meets: "Ètò tí dókítà ẹranko tó forúkọ sílẹ̀ ṣe, tí a kọ sílẹ̀; gbogbo-wọlé, gbogbo-jáde àti ó kéré tán òfin ààbò mẹ́rin; ríròyìn avian influenza.", exceeds: "Ó ní orúkọ àti nọ́mbà dókítà ẹranko àti àkọsílẹ̀ àjẹsára láti hatchery." },
      { name: "Àkọsílẹ̀", objective: "O5", notYet: "Kò sí ètò àkọsílẹ̀ ojoojúmọ́.", meets: "Àkọsílẹ̀ ojoojúmọ́ ti iye adìẹ, ikú, oúnjẹ, omi àti ẹyin, pẹ̀lú àjẹsára, ìtọ́jú àti títà.", exceeds: "Ó fi hàn bí a ṣe máa yẹ ìpín ikú àti ìpín ìyẹ́yin wò ní ọ̀sẹ̀ kọ̀ọ̀kan." },
      { name: "Ìwé ìṣirò owó àti owó tí kò jèrè tí kò pàdánù", objective: "O6", notYet: "Àwọn ìnáwó kan kò sí, kò ka ikú sí, tàbí ìṣirò kò tọ̀nà.", meets: "Gbogbo ìnáwó wà níbẹ̀, ó ka ikú sí, owó adìẹ kọ̀ọ̀kan tàbí páálí kọ̀ọ̀kan tọ̀nà, àti owó tí kò jèrè tí kò pàdánù.", exceeds: "Ó fi owó tí kò jèrè tí kò pàdánù wé owó gidi tí àwọn oníbàárà ń san, ó sì fi èrè hàn ní ìpele ikú méjì." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege nínú iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe àkójọ adìẹ wọn tó kàn pẹ̀lú ètò tí a kọ sílẹ̀ àti àkọsílẹ̀ ojoojúmọ́ (ìwádìí àtẹ̀lé ọjọ́ 30)",
      "Iye ikú nínú àkójọ kọ̀ọ̀kan tí àwọn akẹ́kọ̀ọ́ ròyìn ṣáájú àti lẹ́yìn ẹ̀kọ́ náà",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n mọ owó adìẹ kọ̀ọ̀kan tàbí páálí kọ̀ọ̀kan, tí wọ́n sì lè sọ ọ́ nígbà tí wọ́n bá ń tà",
      "Àwọn ọ̀ràn avian influenza tàbí àrùn Newcastle tí a fura sí tí àwọn akẹ́kọ̀ọ́ ròyìn fún dókítà ẹranko láàárín ọjọ́ kan"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé, gègé àti ẹ̀rọ ìṣirò lórí fóònù; spreadsheet lórí fóònù kò pọn dandan",
      "Téèpù ìwọ̀n fún ilé adìẹ",
      "Owó agbègbè fún ọmọ adìẹ, oúnjẹ, àjẹsára àti àwọn ìnáwó míì, àti orúkọ àti nọ́mbà dókítà ẹranko àti hatchery tí a fọkàn tán",
      "Nǹkan bí ìṣẹ́jú 70 sí 80 lápapọ̀, ní àwọn ìpàdé kúkúrú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Kí ìpàdé tó bẹ̀rẹ̀, kó owó agbègbè fún ọmọ adìẹ, oúnjẹ àti àjẹsára jọ kí àwọn akẹ́kọ̀ọ́ lè ṣírò owó àkójọ pẹ̀lú nọ́mbà gidi.",
      "Pe dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko ní agbègbè rẹ wá sí ìpàdé Orí 2 láti ṣàlàyé ètò àjẹsára fún agbègbè yín; má ṣe sọ iye àjẹsára tàbí iye oògùn fúnra rẹ láéláé.",
      "Tí ẹ bá lọ sí oko adìẹ kan, tẹ̀lé àwọn òfin ààbò rẹ̀ lọ́wọ́ kòkòrò àrùn, má sì lọ sí oko adìẹ míì ní ọjọ́ kan náà.",
      "Ṣe àpẹẹrẹ owó tí kò jèrè tí kò pàdánù lórí pátákó, lẹ́yìn náà jẹ́ kí àwọn akẹ́kọ̀ọ́ ní méjì méjì ṣírò owó àkójọ tiwọn.",
      "Fi rubric ṣe àmì fún ètò àkójọ kọ̀ọ̀kan pẹ̀lú ìṣirò owó, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
