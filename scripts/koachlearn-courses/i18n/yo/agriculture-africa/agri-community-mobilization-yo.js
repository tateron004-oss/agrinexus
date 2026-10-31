"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-community-mobilization.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_MECH = { name: "FAO: Sustainable Agricultural Mechanization: ohun tí FAO ń ṣe (iṣẹ́ háyà ẹ̀rọ, ìrànlọ́wọ́ fún àwọn àgbẹ̀ kékeré)", url: "https://www.fao.org/sustainable-agricultural-mechanization/overview/what-fao-does/en/" };
const KEPHIS_SEED = { name: "KEPHIS (Kenya): iṣẹ́ ìfọwọ́sí irúgbìn (seed certification) àti ìdáàbòbo oríṣi ohun ọ̀gbìn", url: "https://www.kephis.go.ke/seed-certification-services" };
const NASC_FAKE = { name: "Voice of Nigeria: National Agricultural Seeds Council (NASC) kìlọ̀ fún àwọn àgbẹ̀ nípa irúgbìn ayédèrú (ra lọ́wọ́ agro-dealer tí a forúkọ rẹ̀ sílẹ̀; àmì ìfọwọ́sí)", url: "https://von.gov.ng/nasc-cautions-farmers-over-fake-seeds/" };
const GH_ACT803 = { name: "UNEP LEAP: Ghana Plants and Fertilizer Act, 2010 (Act 803): ìforúkọsílẹ̀ irúgbìn àti ajílẹ̀ (PPRSD)", url: "https://leap.unep.org/en/countries/gh/national-legislation/plants-and-fertilizer-act-2010-no-803" };
const FAO_PEST_REG = { name: "FAO Pesticide Registration Toolkit: àkọsílẹ̀ oògùn apakòkòrò ti orílẹ̀-èdè kọ̀ọ̀kan ní Áfíríkà", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const ICA = { name: "International Cooperative Alliance: ìdánimọ̀, ìwà àti ìlànà ẹgbẹ́ alájọṣe (cooperative)", url: "https://ica.coop/en/cooperatives/cooperative-identity" };

module.exports = {
  id: "agri-community-mobilization-yo",
  lang: "yo",
  translationOf: "agri-community-mobilization",
  category: "Agriculture (Africa)",
  name: "Ìkójọpọ̀ Àwùjọ: Pínpín Ẹ̀rọ Oko àti Ìdúnàádúrà fún Ohun Èlò Ọ̀gbìn",
  skills: "Ṣíṣe àwòrán àìní àwùjọ, Pípe àti ṣíṣe ìpàdé àkọ́kọ́, Fífohùnṣọ̀kan lórí àfojúsùn àti òfin, Kíkó owó jọ fún ẹ̀rọ oko àti háyà tírakító, Ríra ohun èlò ojúlówó lọ́pọ̀ àti ṣíṣe ìdúnàádúrà, Pípa ìgbẹ́kẹ̀lé mọ́ pẹ̀lú àkọsílẹ̀ gbangba",
  outcome: "kó àwọn àgbẹ̀ àwùjọ rẹ jọ lórí àìní kan tí gbogbo yín jọ ní, fohùn ṣọ̀kan lórí àfojúsùn àti òfin tó tọ́, kí o sì kọ ètò sílẹ̀ láti ra irúgbìn àti ajílẹ̀ lọ́pọ̀ tàbí láti pín tírakító tàbí ẹ̀rọ kan, pẹ̀lú àkọsílẹ̀ gbangba tí ó ń pa ìgbẹ́kẹ̀lé gbogbo ènìyàn mọ́.",
  about: [
    "Àgbẹ̀ kan ṣoṣo máa ń san owó tó ga jù fún àpò ajílẹ̀ kan, ó sì máa ń dúró fún ọ̀sẹ̀ púpọ̀ kí tírakító tó dé. Àgbẹ̀ ogún (20) tí wọ́n bá parapọ̀ lè dúnàádúrà fún iye owó tó dára jù, ṣàyẹ̀wò pé ohun èlò ọ̀gbìn jẹ́ ojúlówó, kí wọ́n sì gba ẹ̀rọ tàbí pín in ní àkókò tó tọ́. Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ aṣáájú, àwọn olórí ẹgbẹ́ àgbẹ̀, àwọn òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ (extension workers), ẹgbẹ́ ọ̀dọ́ àti ẹgbẹ́ obìnrin, àti ẹnikẹ́ni tí ó ṣetán láti kó àwọn aládùúgbò jọ ní Kenya, Nàìjíríà, Ghana, Burkina Faso àti káàkiri Áfíríkà.",
    "O máa ṣe àwòrán ohun tí àwùjọ rẹ nílò, pe ìpàdé àkọ́kọ́ kí o sì darí rẹ̀, fohùn ṣọ̀kan lórí àfojúsùn kan àti òfin rírọrùn, ṣe ètò owó àkójọ fún ẹ̀rọ tàbí fún háyà tírakító, ra ohun èlò ọ̀gbìn lọ́pọ̀ kí o sì dúnàádúrà pẹ̀lú àwọn olùpèsè, yẹra fún irúgbìn àti ajílẹ̀ ayédèrú, yanjú ìjà, pa àkọsílẹ̀ gbangba mọ́, kí o sì rí i dájú pé àwọn obìnrin àti ọ̀dọ́ ní ohùn gidi.",
    "Ó ń kọ́ lé ẹ̀kọ́ \"Ẹgbẹ́ Alájọṣe Àgbẹ̀ àti Bí A Ṣe Ń Dé Ọjà\", tí ó sọ̀rọ̀ nípa ìforúkọsílẹ̀ ẹgbẹ́, òfin ẹgbẹ́ àti títà papọ̀, nítorí náà kò tún wọn sọ. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" nínú àwùjọ rẹ. Àpẹẹrẹ lásán ni gbogbo iye owó tí a dárúkọ."
  ],
  finalTask: "Kọ ètò sílẹ̀ fún àwùjọ rẹ: yálà ètò ríra ohun èlò ọ̀gbìn lọ́pọ̀ (àwọn ọmọ ẹgbẹ́, iye tí ọ̀kọ̀ọ̀kan fẹ́, owó àsansílẹ̀, ìwé iye owó láti ọ̀dọ̀ olùpèsè mẹ́ta, bí ẹ ṣe máa ṣàyẹ̀wò pé ohun èlò náà jẹ́ ojúlówó, ìfijíṣẹ́ àti pínpín) tàbí àdéhùn pínpín ẹ̀rọ (ẹ̀rọ náà tàbí iṣẹ́ háyà, ètò ìgbàyè, owó iṣẹ́, owó àtúnṣe ẹ̀rọ, awakọ̀ ẹ̀rọ, àti ohun tí ẹ máa ṣe tí ó bá bàjẹ́), pẹ̀lú àwọn àkọsílẹ̀ tí ẹ máa fi han àwọn ọmọ ẹgbẹ́ àti bí àwọn obìnrin àti ọ̀dọ́ ṣe máa kópa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ aṣáájú, àwọn olórí ẹgbẹ́ àgbẹ̀ àti ti abúlé, àwọn òṣìṣẹ́ ìmọ̀ràn àgbẹ̀, àti àwọn ọmọ ẹgbẹ́ obìnrin àti ẹgbẹ́ ọ̀dọ́ ní Kenya, Nàìjíríà, Ghana, àwọn orílẹ̀-èdè Ìwọ̀-oòrùn Áfíríkà tí ń sọ èdè Faransé àti káàkiri Áfíríkà. Ọ̀pọ̀ jù lọ ń dá oko kékeré ti àgbàdo, ẹ̀gẹ́, ìrẹsì, ọkà bàbà, ẹ̀wà, ẹ̀pà tàbí ẹ̀fọ́.",
    startingPoint: "Wọ́n mọ àwọn aládùúgbò wọn àti ìṣòro tí wọ́n jọ ní, bí títúlẹ̀ tí ó pẹ́, ajílẹ̀ tí ó wọ́n àti irúgbìn ayédèrú. Àwọn kan wà nínú ẹgbẹ́ tí kò ní ìforúkọsílẹ̀ tàbí ẹgbẹ́ àjọ (savings group). Díẹ̀ nínú wọn ló ti darí ìpàdé ètò rí, kó owó jọ fún ríra nǹkan papọ̀, tàbí dúnàádúrà pẹ̀lú olùpèsè.",
    gap: "Àwọn àgbẹ̀ máa ń pàdánù irè oko àti owó nígbà tí títúlẹ̀ bá pẹ́, tí ohun èlò ọ̀gbìn bá wọ́n jù tàbí tí ó jẹ́ ayédèrú, tí ẹgbẹ́ sì bá túká nítorí owó. Àwọn olórí nílò láti ṣe àwòrán àìní, ṣètò ìpàdé tó tọ́, fohùn ṣọ̀kan lórí òfin, darí ríra papọ̀ tàbí ètò pínpín ẹ̀rọ, kí wọ́n sì pa àkọsílẹ̀ mọ́ ní gbangba kí ìgbẹ́kẹ̀lé lè pẹ́, pẹ̀lú àwọn obìnrin àti ọ̀dọ́ tí a sábà máa ń fi sílẹ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń sọ Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì, a sì lè ṣe ìpàdé ní èdè ìbílẹ̀",
      "Ẹ̀rọ: fóònù lásán fún ìpè, SMS àti owó orí fóònù (mobile money); ìwé àkọsílẹ̀ orí ìwé",
      "Owó: owó kékeré tí a kó jọ láti ọ̀dọ̀ ọ̀pọ̀ ọmọ ẹgbẹ́; kò sí àdánù tí a lè fi pamọ́",
      "Òfin: òfin àti àkọsílẹ̀ irúgbìn, ajílẹ̀ àti oògùn apakòkòrò yàtọ̀ láti orílẹ̀-èdè dé orílẹ̀-èdè, wọ́n sì ń yí padà; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò lọ́dọ̀ àjọ ìjọba orílẹ̀-èdè wọn",
      "Àkókò: ìpàdé gbọ́dọ̀ bá iṣẹ́ oko, ọjà àti iṣẹ́ ilé mu, pàápàá fún àwọn obìnrin"
    ],
    prerequisites: "Kò sí. Ó wúlò: \"Ẹgbẹ́ Alájọṣe Àgbẹ̀ àti Bí A Ṣe Ń Dé Ọjà\", fún ìforúkọsílẹ̀ ẹgbẹ́ lẹ́yìn náà."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ní abúlé rẹ tàbí nínú ẹgbẹ́ àgbẹ̀ rẹ", action: "ṣe àwòrán àwọn àìní oko tí àwùjọ jọ ní, kí o sì to àwọn mẹ́ta tó ga jù lẹ́sẹẹsẹ", standard: "lẹ́yìn tí o bá ti béèrè lọ́wọ́ ó kéré tán agbo ilé mẹ́wàá, pẹ̀lú àwọn obìnrin àti ọ̀dọ́ àgbẹ̀" },
    { id: "O2", condition: "Tí o bá ti mọ àìní tí gbogbo yín jọ ní jù", action: "pe ìpàdé àkọ́kọ́ kí o sì darí rẹ̀ títí ẹ ó fi fohùn ṣọ̀kan lórí àfojúsùn kan àti òfin tí a kọ sílẹ̀", standard: "pẹ̀lú ètò ìpàdé, àkọsílẹ̀ ìpàdé, ẹni tí a dárúkọ fún iṣẹ́ kọ̀ọ̀kan, àti òfin lórí owó, ìpinnu àti kíkúrò nínú ẹgbẹ́" },
    { id: "O3", condition: "Tí ẹ bá nílò ẹ̀rọ fún títúlẹ̀, ìpakà tàbí iṣẹ́ míì", action: "kọ ètò pínpín ẹ̀rọ tàbí háyà tírakító", standard: "tí ó sọ̀rọ̀ nípa háyà tàbí rírà, ètò ìgbàyè tó tọ́, owó iṣẹ́, owó àtúnṣe ẹ̀rọ, awakọ̀ ẹ̀rọ àti ohun tí ẹ máa ṣe tí ó bá bàjẹ́" },
    { id: "O4", condition: "Tí o bá ní àwọn ìbéèrè irúgbìn àti ajílẹ̀ àwọn ọmọ ẹgbẹ́", action: "ṣètò ríra lọ́pọ̀, fi ìwé iye owó láti ọ̀dọ̀ ó kéré tán olùpèsè mẹ́ta wéra, kí o sì dúnàádúrà", standard: "pẹ̀lú owó àsansílẹ̀ tí a kọ sílẹ̀, ohun èlò tí a ti ṣàyẹ̀wò pé ó jẹ́ ojúlówó tí a sì forúkọ rẹ̀ sílẹ̀, àti ìwé ẹ̀rí ìsanwó ní orúkọ ẹgbẹ́" },
    { id: "O5", condition: "Nígbà tí ẹgbẹ́ bá ń bójú tó owó àti ìpinnu", action: "pa àkọsílẹ̀ gbangba mọ́, yanjú èdè-àìyedè nípa àwọn ìgbésẹ̀ tí ẹ ti fohùn ṣọ̀kan lé lórí, kí o sì fún àwọn obìnrin àti ọ̀dọ́ ní ipa gidi", standard: "kí gbogbo ọmọ ẹgbẹ́ lè rí ibi tí ìsanwó kọ̀ọ̀kan lọ, kí àwọn obìnrin àti ọ̀dọ́ sì ní iṣẹ́ tàbí ipò olórí" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíkó àwùjọ jọ",
      lessons: [
        {
          title: "Ṣíṣe àwòrán àwọn àìní àwùjọ rẹ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Béèrè lọ́wọ́ ó kéré tán agbo ilé mẹ́wàá nípa ìṣòro oko wọn, kí o sì to àwọn àìní mẹ́ta tó ga jù lẹ́sẹẹsẹ.",
          text: [
            "Àwọn ènìyàn máa ń dara pọ̀ mọ́ ẹgbẹ́ tí ó bá yanjú ìṣòro tí wọ́n ń rí lára. Nítorí náà, kí o tó pe ìpàdé, wá ohun tí àwọn aládùúgbò rẹ nílò gan-an. Má ṣe méfò: olórí lè rò pé tírakító ni, nígbà tí ọ̀pọ̀ àgbẹ̀ ń sọ pé irúgbìn ayédèrú tàbí owó ajílẹ̀ ni ìṣòro wọn.",
            "Lọ sọ́dọ̀ tàbí pe ó kéré tán agbo ilé mẹ́wàá. Béèrè ìbéèrè díẹ̀ kan náà lọ́wọ́ gbogbo wọn: Kí ni ohun ọ̀gbìn tàbí ẹran ọ̀sìn yín pàtàkì? Kí ló dí ìkórè yín tó kọjá lọ́wọ́? Èló ni ẹ̀ ń san fún títúlẹ̀, irúgbìn àti ajílẹ̀, ìgbà wo ni ẹ sì ń rí wọn? Kí ni ẹ máa fẹ́ ṣe papọ̀ pẹ̀lú àwọn aládùúgbò? Béèrè lọ́wọ́ àwọn obìnrin àti ọ̀dọ́ àgbẹ̀ náà, kì í ṣe olórí ilé nìkan; ìṣòro wọn lè yàtọ̀, bí àìní ìwé ẹ̀rí ilẹ̀ láti gba owó ẹ̀yáwó, tàbí kí tírakító máa dé ọ̀dọ̀ wọn kẹ́yìn.",
            "Kọ àwọn ìdáhùn sórí ìwé kan: ìlà kan fún agbo ilé kọ̀ọ̀kan, ọ̀wọ̀n kan fún ìṣòro kọ̀ọ̀kan. Ka iye agbo ilé tí ó dárúkọ ìṣòro kọ̀ọ̀kan. Àwọn mẹ́ta tó ga jù ni àwọn àìní tí àwùjọ rẹ jọ ní. O tún lè ya àwòrán abúlé tí ó rọrùn, tí ó fi oko, ọ̀nà, ṣọ́ọ̀bù ohun èlò ọ̀gbìn àti ibi tí tírakító tàbí ẹ̀rọ ìlọ̀ wà hàn. Fóònù lè ràn ọ́ lọ́wọ́ láti ka àti to àwọn ìdáhùn."
          ],
          steps: ["Kọ ìbéèrè rírọrùn mẹ́rin tàbí márùn-ún.", "Béèrè lọ́wọ́ ó kéré tán agbo ilé mẹ́wàá, pẹ̀lú àwọn obìnrin àti ọ̀dọ́ àgbẹ̀.", "Kọ àwọn ìdáhùn sínú tábìlì: ìlà kan fún agbo ilé kọ̀ọ̀kan.", "Ka iye àwọn tí ó dárúkọ ìṣòro kọ̀ọ̀kan.", "To àwọn àìní mẹ́ta tó ga jù lẹ́sẹẹsẹ."],
          words: [["Ìkójọpọ̀ àwùjọ (mobilization)", "kíkó àwọn ènìyàn jọ láti ṣiṣẹ́ lórí àìní tí wọ́n jọ ní."], ["Àwòrán àìní (needs map)", "àkọsílẹ̀ rírọrùn ti àwọn ìṣòro tí àwọn agbo ilé jọ ní àti ibi tí àwọn ohun èlò wà."], ["Agbo ilé", "àwọn ènìyàn tí wọ́n ń gbé tí wọ́n sì ń dá oko papọ̀, tí wọ́n sì jọ ń pín oúnjẹ àti owó."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú àìní", bullets: ["Àwọn ènìyàn ń dara pọ̀ láti yanjú ìṣòro tí wọ́n ń rí", "Má ṣe méfò: kọ́kọ́ béèrè", "Èrò olórí lè má jẹ́ àìní tó ga jù"] },
            { title: "Béèrè lọ́wọ́ agbo ilé mẹ́wàá tàbí jù bẹ́ẹ̀ lọ", bullets: ["Kí ló dí ìkórè yín tó kọjá lọ́wọ́?", "Èló ni ẹ̀ ń san fún títúlẹ̀, irúgbìn, ajílẹ̀?", "Béèrè lọ́wọ́ obìnrin àti ọ̀dọ́ àgbẹ̀ náà"] },
            { title: "Kà kí o sì tò lẹ́sẹẹsẹ", bullets: ["Ìlà kan fún agbo ilé kọ̀ọ̀kan", "Ka ìṣòro kọ̀ọ̀kan", "Mẹ́ta tó ga jù = àìní tí gbogbo yín jọ ní"] }
          ],
          tryIt: "Béèrè àwọn ìbéèrè rẹ lọ́wọ́ ó kéré tán agbo ilé mẹ́wàá nínú àwùjọ rẹ. Kọ àwọn ìdáhùn sínú tábìlì, ka ìṣòro kọ̀ọ̀kan, kí o sì kọ àwọn àìní mẹ́ta tó ga jù sílẹ̀.",
          youCanNow: "ṣe àwòrán àwọn àìní oko àwùjọ rẹ, kí o sì to àwọn ìṣòro mẹ́ta tó ga jù lẹ́sẹẹsẹ.",
          quickCheck: [
            { objective: "O1", q: "Kí ló dé tí a fi ń béèrè lọ́wọ́ àwọn agbo ilé kí a tó pe ìpàdé?", options: ["Láti kó owó jọ ní kùtùkùtù", "Láti yan olórí", "Láti ta ohun èlò ọ̀gbìn fún wọn", "Láti mọ ìṣòro tí àwọn ènìyàn jọ ní gan-an"], answer: 3, why: "Ẹgbẹ́ máa ń pẹ́ tí ó bá yanjú àìní tí ọ̀pọ̀ ọmọ ẹgbẹ́ ń rí, kì í ṣe èrò olórí nìkan." },
            { objective: "O1", q: "Ta ni o yẹ kí o fi kún un nígbà tí o bá ń béèrè nípa àìní?", options: ["Àwọn obìnrin àti ọ̀dọ́ àgbẹ̀ pẹ̀lú àwọn olórí ilé", "Àwọn àgbàlagbà ọkùnrin nìkan", "Àwọn tí ó ní tírakító nìkan", "Àwọn tí ó mọ̀wé kà nìkan"], answer: 0, why: "Àwọn obìnrin àti ọ̀dọ́ lè ní ìṣòro tí ó yàtọ̀, nítorí náà fífi wọ́n sílẹ̀ máa ń fúnni ní àwòrán tí kò tọ́." }
          ]
        },
        {
          title: "Pípe ìpàdé àkọ́kọ́ àti dídarí rẹ̀",
          objectives: ["O2"],
          minutes: 5,
          goal: "Darí ìpàdé àkọ́kọ́ pẹ̀lú ètò ìpàdé tí ó parí pẹ̀lú iṣẹ́ tó yé àti àkọsílẹ̀ ìpàdé.",
          text: [
            "Yan àkókò àti ibi tí ó bá ọ̀pọ̀ ènìyàn mu: lẹ́yìn iṣẹ́ oko, kì í ṣe ní ọjọ́ ọjà, ní ibi tí àwọn obìnrin àti ọ̀dọ́ lè dé ní ìrọ̀rùn, bí ilé-ìwé, ṣọ́ọ̀ṣì, mọ́sálásí tàbí lábẹ́ igi tí gbogbo ènìyàn mọ̀. Pe àwọn ènìyàn fúnra rẹ, lórí fóònù, SMS tàbí ní ẹnu, àti nípasẹ̀ àwọn ènìyàn tí a bọ̀wọ̀ fún bí baálẹ̀, olórí ẹ̀sìn tàbí òṣìṣẹ́ ìmọ̀ràn àgbẹ̀. Sọ ìdí ìpàdé náà ní gbólóhùn kan: 'Ẹ jẹ́ ká sọ̀rọ̀ nípa bí a ṣe lè rí ajílẹ̀ ní owó pọ́ọ́kú ní àsìkò yìí.'",
            "Ní ètò ìpàdé (agenda) tí ó ní nǹkan mẹ́rin tàbí márùn-ún, kí ìpàdé sì kúrú: ìkíni àti ìdí ìpàdé; ohun tí àwòrán àìní fi hàn; èrò nípa ohun tí a lè ṣe papọ̀; fífohùnṣọ̀kan lórí ìgbésẹ̀ àkọ́kọ́; ta ni yóò ṣe kí ni, àti nígbà wo. Yan ẹnì kan láti ṣe alága àti ẹnì kan láti kọ àkọsílẹ̀ ìpàdé. Jẹ́ kí gbogbo ènìyàn sọ̀rọ̀, kí o sì béèrè lọ́wọ́ àwọn tí ó dákẹ́ tààrà.",
            "Parí pẹ̀lú ìpinnu, kì í ṣe ọ̀rọ̀ lásán. Kọ iṣẹ́ kọ̀ọ̀kan, ẹni tí ó ní ojúṣe rẹ̀ àti ọjọ́ náà. Ka àkọsílẹ̀ ìpàdé sókè kí ẹ sì fohùn ṣọ̀kan lórí ìpàdé tó kàn. Àpẹẹrẹ: ẹgbẹ́ àwọn àgbẹ̀ ọkà bàbà kan ní Burkina Faso fohùn ṣọ̀kan ní ìpàdé àkọ́kọ́ wọn láti kó àwọn ìbéèrè ajílẹ̀ jọ láàárín ọ̀sẹ̀ méjì, pẹ̀lú ọmọ ẹgbẹ́ méjì, tí ọ̀kan lára wọn jẹ́ ọ̀dọ́bìnrin, tí wọ́n ń kó àkọsílẹ̀ náà jọ."
          ],
          steps: ["Yan àkókò àti ibi tí ó bá ọ̀pọ̀ ènìyàn mu, pẹ̀lú àwọn obìnrin àti ọ̀dọ́.", "Pe àwọn ènìyàn fúnra rẹ àti nípasẹ̀ àwọn tí a bọ̀wọ̀ fún, pẹ̀lú ìdí ìpàdé ní gbólóhùn kan.", "Ṣètò ètò ìpàdé kúkúrú: ìdí, àìní tí a rí, èrò, ìgbésẹ̀ àkọ́kọ́, iṣẹ́.", "Yan alága àti akọ̀wé ìpàdé; jẹ́ kí gbogbo ènìyàn sọ̀rọ̀.", "Parí pẹ̀lú iṣẹ́, orúkọ àti ọjọ́; ka àkọsílẹ̀ ìpàdé sókè."],
          words: [["Ètò ìpàdé (agenda)", "àkọsílẹ̀ àwọn nǹkan tí ìpàdé máa jíròrò, ní ṣísẹ̀-n-tẹ̀lé."], ["Àkọsílẹ̀ ìpàdé (minutes)", "àkọsílẹ̀ ohun tí ìpàdé pinnu àti ẹni tí yóò ṣe kí ni."], ["Alága", "ẹni tí ó ń darí ìpàdé tí ó sì ń mú kí ó parí ní àkókò."]],
          slides: [
            { title: "Àkókò, ibi, ìpè", bullets: ["Lẹ́yìn iṣẹ́ oko, kì í ṣe ọjọ́ ọjà", "Ibi tí obìnrin àti ọ̀dọ́ lè dé", "Pe ènìyàn fúnra rẹ; ìdí ìpàdé ní gbólóhùn kan"] },
            { title: "Ètò ìpàdé kúkúrú", bullets: ["Ìdí ìpàdé; ohun tí àwòrán àìní fi hàn", "Èrò; fohùn ṣọ̀kan lórí ìgbésẹ̀ àkọ́kọ́", "Ta ni yóò ṣe kí ni, nígbà wo"] },
            { title: "Parí pẹ̀lú ìpinnu", bullets: ["Iṣẹ́, orúkọ, ọjọ́ nínú àkọsílẹ̀ ìpàdé", "Ka àkọsílẹ̀ ìpàdé sókè", "Ṣètò ìpàdé tó kàn"] }
          ],
          tryIt: "Kọ ìpè náà (gbólóhùn kan nípa ìdí ìpàdé, àkókò àti ibi) àti ètò ìpàdé tí ó ní nǹkan márùn-ún fún ìpàdé àkọ́kọ́ rẹ. Tí o bá lè ṣe é, ṣe ìpàdé náà, kí o sì kọ àkọsílẹ̀ ìpàdé tí ó ní ó kéré tán iṣẹ́ méjì, orúkọ àti ọjọ́.",
          youCanNow: "pe ìpàdé àkọ́kọ́ kúkúrú kí o sì darí rẹ̀ títí yóò fi parí pẹ̀lú iṣẹ́, orúkọ, ọjọ́ àti àkọsílẹ̀ ìpàdé.",
          quickCheck: [
            { objective: "O2", q: "Àkókò ìpàdé wo ló sábà máa ń dára jù fún àwọn àgbẹ̀?", options: ["Ọ̀sán ọjọ́ ọjà", "Lẹ́yìn iṣẹ́ oko, ní ibi tí ọ̀pọ̀ ènìyàn lè dé", "Ní kùtùkùtù gan-an, jìnnà sí abúlé", "Nígbàkígbà tí ọwọ́ olórí bá dilẹ̀"], answer: 1, why: "Àkókò àti ibi tó rọrùn ń jẹ́ kí ọ̀pọ̀ ọmọ ẹgbẹ́, pẹ̀lú àwọn obìnrin àti ọ̀dọ́, lè wá." },
            { objective: "O2", q: "Báwo ni ìpàdé àkọ́kọ́ ṣe yẹ kí ó parí?", options: ["Pẹ̀lú ọ̀rọ̀ gígùn", "Kí gbogbo ènìyàn san owó lẹ́ẹ̀kan náà", "Pẹ̀lú iṣẹ́, orúkọ àti ọjọ́ tí a kọ sínú àkọsílẹ̀ ìpàdé", "Láìsí ìpinnu kankan"], answer: 2, why: "Iṣẹ́ tó yé pẹ̀lú orúkọ àti ọjọ́ ń sọ ọ̀rọ̀ di iṣẹ́." }
          ]
        },
        {
          title: "Àfojúsùn kan, òfin tó tọ́ àti fífi gbogbo ènìyàn kún un",
          objectives: ["O2", "O5"],
          minutes: 6,
          goal: "Kọ àfojúsùn kan àti òfin rírọrùn márùn-ún tí ẹgbẹ́ rẹ fohùn ṣọ̀kan lé lórí.",
          text: [
            "Àfojúsùn tí gbogbo yín jọ ní gbọ́dọ̀ ṣe kedere kí ó sì ní ọjọ́: 'Kí ó tó di 1 Oṣù Kẹta, ẹ jẹ́ ká ra àpò ajílẹ̀ 200 papọ̀ ní owó tí ó dín sí ohun tí ọmọ ẹgbẹ́ ń san lóun nìkan.' tàbí 'Ní àsìkò yìí, a máa túlẹ̀ oko gbogbo ọmọ ẹgbẹ́ láàárín ọ̀sẹ̀ méjì lẹ́yìn òjò àkọ́kọ́.' Àfojúsùn tó yé ń fi han àwọn ọmọ ẹgbẹ́ bí àṣeyọrí ṣe máa rí.",
            "Ẹ fohùn ṣọ̀kan lórí òfin rírọrùn kí owó kankan tó yí ọwọ́ padà: ta ni ó lè darapọ̀ àti èló ni yóò san; bí a ṣe ń ṣe ìpinnu (fún àpẹẹrẹ ọmọ ẹgbẹ́ kan, ìbò kan, bí ẹgbẹ́ alájọṣe ṣe ń ṣe); ta ni ó ń mú owó àti báwo (àkáǹtì báńkì ẹgbẹ́ tàbí àkáǹtì mobile money pẹ̀lú ènìyàn méjì tí ó máa fọwọ́ sí ìsanwó); kí ló máa ṣẹlẹ̀ tí ẹnì kan kò bá san owó tàbí kò bá mú ohun tí ó ṣèlérí wá; àti bí ọmọ ẹgbẹ́ ṣe lè kúrò kí ó sì gba owó rẹ̀ padà. Kọ àwọn òfin náà sílẹ̀ kí o sì kà wọ́n sókè kí àwọn tí kò mọ̀wé kà náà lè fohùn ṣọ̀kan.",
            "Ẹ mọ̀ọ́mọ̀ fi àyè sílẹ̀ fún àwọn obìnrin àti ọ̀dọ́. Ẹ ṣe ìpàdé ní àkókò tí wọ́n lè wá, ẹ jẹ́ kí ọmọ ẹgbẹ́ darapọ̀ ní orúkọ ara rẹ̀ kódà láìsí ìwé ẹ̀rí ilẹ̀, kí ẹ sì fún wọn ní ipò gidi bí akápò, ẹni tí ó ń gba àyè ẹ̀rọ, tàbí ẹni tí ó ń ṣàyẹ̀wò ohun èlò ọ̀gbìn. Ẹgbẹ́ tí ó fi wọ́n kún un sábà máa ń ní ọmọ ẹgbẹ́ púpọ̀ sí i, ìgbẹ́kẹ̀lé púpọ̀ sí i àti ọgbọ́n púpọ̀ sí i, bí àwọn ọ̀dọ́ tí wọ́n mọ fóònù àti mobile money lò dáadáa. Nígbà tí ẹgbẹ́ rẹ bá ṣetán láti forúkọ sílẹ̀ lọ́nà òfin, wo ẹ̀kọ́ \"Ẹgbẹ́ Alájọṣe Àgbẹ̀ àti Bí A Ṣe Ń Dé Ọjà\"."
          ],
          steps: ["Kọ àfojúsùn kan tí ó ní iye àti ọjọ́.", "Fohùn ṣọ̀kan lórí òfin nípa dídarapọ̀, ìpinnu, owó, àìsan owó tàbí àìmú nǹkan wá, àti kíkúrò.", "Ka àwọn òfin sókè kí o sì kọ ìfohùnṣọ̀kan sínú àkọsílẹ̀ ìpàdé.", "Fún àwọn obìnrin àti ọ̀dọ́ ní ipò gidi àti àkókò ìpàdé tí ó bá wọn mu."],
          words: [["Àfojúsùn àjùmọ̀ní (shared goal)", "àbájáde kan tó yé tí gbogbo ẹgbẹ́ fẹ́, tí ó ní iye àti ọjọ́."], ["Olùfọwọ́sí (signatory)", "ẹni tí a fún ní àṣẹ láti fọwọ́ sí ìsanwó láti inú àkáǹtì ẹgbẹ́."], ["Ìfikún gbogbo ènìyàn (inclusion)", "rírí i dájú pé gbogbo ènìyàn, pẹ̀lú àwọn obìnrin àti ọ̀dọ́, lè darapọ̀, sọ̀rọ̀ kí wọ́n sì ṣe olórí."]],
          slides: [
            { title: "Àfojúsùn tí ó ní iye àti ọjọ́", bullets: ["'Kí ó tó di 1 Oṣù Kẹta, ra àpò 200 papọ̀'", "'A máa túlẹ̀ gbogbo oko láàárín ọ̀sẹ̀ méjì lẹ́yìn òjò'", "Ó ń fi bí àṣeyọrí ṣe máa rí hàn"] },
            { title: "Òfin kí owó tó yí ọwọ́ padà", bullets: ["Dídarapọ̀ àti owó ìwọlé; ọmọ ẹgbẹ́ kan, ìbò kan", "Àkáǹtì ẹgbẹ́; ènìyàn méjì ń fọwọ́ sí ìsanwó", "Àìsan owó tàbí àìmú nǹkan wá; kíkúrò àti dídá owó padà"] },
            { title: "Fi obìnrin àti ọ̀dọ́ kún un", bullets: ["Àkókò àti ibi tí wọ́n lè wá", "Darapọ̀ ní orúkọ ara wọn, láìsí ìwé ẹ̀rí ilẹ̀", "Ipò gidi: akápò, olùgbàyè ẹ̀rọ, olùṣàyẹ̀wò ohun èlò"] }
          ],
          sources: [ICA],
          tryIt: "Kọ àfojúsùn ẹgbẹ́ rẹ tí ó ní iye àti ọjọ́, àti òfin márùn-ún nípa dídarapọ̀, ìpinnu, owó, àìsan owó tàbí àìmú nǹkan wá, àti kíkúrò. Dárúkọ ipò kan tí obìnrin tàbí ọ̀dọ́ kan nínú ẹgbẹ́ máa dì mú.",
          youCanNow: "kọ àfojúsùn tó yé àti òfin tó tọ́, kí o sì fún àwọn obìnrin àti ọ̀dọ́ ní ipa gidi nínú ẹgbẹ́.",
          quickCheck: [
            { objective: "O2", q: "Èwo ni àfojúsùn tó yé jù?", options: ["Kí ó tó di 1 Oṣù Kẹta, ra àpò ajílẹ̀ 200 papọ̀ ní owó tí ó dín", "Ran àwọn àgbẹ̀ lọ́wọ́", "Mú nǹkan dára sí i", "Rí ajílẹ̀ díẹ̀ nígbà kan"], answer: 0, why: "Àfojúsùn tí ó ní iye àti ọjọ́ ń fi bí àṣeyọrí ṣe máa rí hàn gẹ́lẹ́." },
            { objective: "O5", q: "Ọ̀dọ́bìnrin kan kò ní ìwé ẹ̀rí ilẹ̀ ṣùgbọ́n ó ń dá oko tirẹ̀. Kí ni òfin ẹgbẹ́ yẹ kí ó gbà?", options: ["Kò lè darapọ̀", "Ó lè darapọ̀ nípasẹ̀ ọkọ rẹ̀ nìkan", "Ó lè wá ìpàdé ṣùgbọ́n kò lè dìbò", "Ó darapọ̀ ní orúkọ ara rẹ̀, ó sì lè di ipò mú"], answer: 3, why: "Jíjẹ́ kí àwọn obìnrin àti ọ̀dọ́ darapọ̀ kí wọ́n sì ṣe olórí ní orúkọ ara wọn ń kọ́ ẹgbẹ́ tí ó tóbi tí ó sì lágbára jù." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíkó àwùjọ jọ",
        questions: [
          { objective: "O1", q: "O béèrè lọ́wọ́ agbo ilé méjìlá. Mẹ́jọ dárúkọ irúgbìn ayédèrú, mẹ́ta sì dárúkọ tírakító. Kí ni àìní tí gbogbo yín jọ ní jù?", options: ["Tírakító", "Ọ̀nà tuntun", "Irúgbìn ayédèrú", "Ilé-ìwé"], answer: 2, why: "Ìṣòro tí agbo ilé tó pọ̀ jù dárúkọ ni àìní tí gbogbo yín jọ ní jù." },
          { objective: "O1", q: "Kí ni àwòrán àìní?", options: ["Àkọsílẹ̀ rírọrùn ti ìṣòro tí àwọn agbo ilé jọ ní àti ibi tí àwọn ohun èlò wà", "Àwòrán ọ̀nà sí ìlú ńlá", "Àkọsílẹ̀ iye owó ohun ọ̀gbìn", "Ìwé àkọsílẹ̀ báńkì"], answer: 0, why: "Àwòrán àìní ń fi ìṣòro tí a jọ ní àti àwọn ohun èlò àdúgbò bí ṣọ́ọ̀bù ohun èlò ọ̀gbìn àti ẹ̀rọ hàn." },
          { objective: "O2", q: "Ta ni ó ń kọ ohun tí ìpàdé pinnu sílẹ̀?", options: ["Baálẹ̀", "Olùpèsè", "Kò sí ẹnì kankan", "Akọ̀wé ìpàdé"], answer: 3, why: "Akọ̀wé ìpàdé ló ń kọ ìpinnu, iṣẹ́, orúkọ àti ọjọ́ sílẹ̀." },
          { objective: "O2", q: "Nígbà wo ni ẹgbẹ́ yẹ kí ó fohùn ṣọ̀kan lórí òfin owó?", options: ["Lẹ́yìn tí ìṣòro bá ṣẹlẹ̀", "Kí wọ́n tó kó owó kankan jọ", "Nígbà tí ẹgbẹ́ bá forúkọ sílẹ̀ nìkan", "Láéláé; ìgbẹ́kẹ̀lé ti tó"], answer: 1, why: "Fífohùnṣọ̀kan lórí òfin ṣáájú ń dènà ìjà nígbà tí a bá ti kó owó jọ." },
          { objective: "O5", q: "Kí ló ń ran àwọn obìnrin lọ́wọ́ láti wá sí ìpàdé ẹgbẹ́?", options: ["Ìpàdé ní àkókò àti ibi tí ó bá wọn mu", "Ìpàdé ní ọjọ́ ọjà nìkan", "Ìpàdé ní òru, ní ibi tí ó jìnnà", "Ìpàdé fún àwọn olórí ilé nìkan"], answer: 0, why: "Àkókò àti ibi tó bá wọn mu ń mú ìdènà tí ó wọ́pọ̀ fún àwọn obìnrin kúrò." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkó owó jọ, ríra papọ̀ àti pípa ìgbẹ́kẹ̀lé mọ́",
      lessons: [
        {
          title: "Kíkó owó jọ fún ẹ̀rọ oko àti háyà tírakító",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kọ ètò fún pínpín ẹ̀rọ kan tàbí háyà iṣẹ́ tírakító gẹ́gẹ́ bí ẹgbẹ́.",
          text: [
            "Kọ́kọ́ pinnu: ṣé ẹ máa háyà ni tàbí ẹ máa rà? Rírà tírakító ń ná owó púpọ̀ gan-an, ó sì nílò epo, àtúnṣe, awakọ̀ tí a kọ́ dáadáa àti iṣẹ́ tí ó tó láti máa lò ó. Fún ọ̀pọ̀ ẹgbẹ́ kékeré, háyà iṣẹ́ tírakító gẹ́gẹ́ bí ẹgbẹ́ ni ìgbésẹ̀ àkọ́kọ́: ẹni tí ó ń háyà tírakító sábà máa ń fúnni ní àkókò tàbí owó tó dára jù fún ọ̀pọ̀ oko tí ó wà nítòsí ara wọn. FAO ń ṣe àtìlẹ́yìn fún iṣẹ́ háyà ẹ̀rọ gẹ́gẹ́ bí ọ̀nà tí àwọn àgbẹ̀ kékeré fi lè rí ẹ̀rọ oko. Àwọn app àti aṣojú ìgbàyè, bí Hello Tractor ní àwọn apá kan Nàìjíríà àti Kenya, ń so àwọn àgbẹ̀ pọ̀ mọ́ àwọn tí ó ní tírakító; ṣàyẹ̀wò ohun tí ó ń ṣiṣẹ́ ní agbègbè rẹ. Ẹgbẹ́ lè ra àwọn ẹ̀rọ kékeré tí a lè pín, bí ẹ̀rọ ìpakà, ẹ̀rọ ìyọ hóró àgbàdo tàbí ẹ̀rọ ìlọ̀.",
            "Ṣètò ìgbàyè lọ́nà tó tọ́. Títúlẹ̀ tàbí gbígbìn tí ó pẹ́ ń dín irè oko kù, gbogbo ènìyàn sì fẹ́ ẹ̀rọ náà ní ọjọ́ kan náà. Ẹ fohùn ṣọ̀kan lórí ìtẹ̀léra ṣáájú: nípa agbègbè àti ọ̀nà láti dín epo àti ìrìn àjò kù, nípa gègé (lottery), tàbí nípa àìní gbígbìn, kí ẹ sì máa yí ẹni tí ó ń kọ́kọ́ lọ padà ní àsìkò kọ̀ọ̀kan. Kọ ètò ìgbàyè náà sílẹ̀ kí o sì pín in. Ẹ fohùn ṣọ̀kan lórí ohun tí ẹ máa ṣe tí òjò tàbí ìbàjẹ́ ẹ̀rọ bá dá iṣẹ́ dúró.",
            "Ẹ fohùn ṣọ̀kan lórí owó iṣẹ́ àti ìnáwó: ohun tí ọmọ ẹgbẹ́ ń san fún eka kan tàbí wákàtí kan (àpẹẹrẹ lásán: XOF, KES, NGN tàbí GHS fún eka kan), sísan owó ṣáájú tàbí ní ọjọ́ iṣẹ́, àti owó àtúnṣe ẹ̀rọ tí ó dá dúró fún ẹ̀rọ tí ẹgbẹ́ ní, kí àtúnṣe má bàa dá àsìkò dúró. Dárúkọ awakọ̀ tí a kọ́ dáadáa, pa ìwé àkọsílẹ̀ ẹ̀rọ (logbook) mọ́ fún wákàtí, epo, oko tí a ṣiṣẹ́ fún àti àtúnṣe, kí o sì tọ́jú ẹ̀rọ náà sí ibi tí kò léwu."
          ],
          steps: ["Pinnu láti háyà tàbí láti rà, ní ìbámu pẹ̀lú owó, ọgbọ́n àti iye iṣẹ́ tí ó wà.", "Kọ oko àwọn ọmọ ẹgbẹ́, bí ó ṣe tóbi tó àti ọjọ́ tí wọ́n nílò ẹ̀rọ náà.", "Fohùn ṣọ̀kan lórí ètò ìgbàyè tó tọ́ (nípa ọ̀nà, gègé tàbí àìní gbígbìn), kí ẹ sì máa yí ẹni àkọ́kọ́ padà.", "Ṣètò owó iṣẹ́, ìgbà ìsanwó àti owó àtúnṣe ẹ̀rọ.", "Dárúkọ awakọ̀ kí o sì pa ìwé àkọsílẹ̀ ẹ̀rọ mọ́; fohùn ṣọ̀kan lórí ohun tí ẹ máa ṣe tí ó bá bàjẹ́."],
          words: [["Iṣẹ́ háyà (hire service)", "ẹni tí ó ń mú tírakító tàbí ẹ̀rọ wá tí ó sì ń ṣe iṣẹ́ náà fún owó."], ["Owó àtúnṣe ẹ̀rọ (maintenance fund)", "owó tí a yà sọ́tọ̀ láti inú owó iṣẹ́ láti san fún àtúnṣe àti ìtọ́jú ẹ̀rọ."], ["Ìwé àkọsílẹ̀ ẹ̀rọ (logbook)", "àkọsílẹ̀ wákàtí, epo, oko tí a ṣiṣẹ́ fún àti àtúnṣe ẹ̀rọ kan."]],
          slides: [
            { title: "Háyà tàbí rà?", bullets: ["Rírà: owó ńlá, epo, àtúnṣe, awakọ̀", "Ọ̀pọ̀ ẹgbẹ́ kékeré ń bẹ̀rẹ̀ nípa háyà papọ̀", "Ẹ̀rọ kékeré tí a lè pín: ìpakà, ìyọ hóró, ìlọ̀"] },
            { title: "Ètò ìgbàyè tó tọ́", bullets: ["Kọ oko, bí ó ṣe tóbi tó àti ọjọ́ tí a nílò ẹ̀rọ", "Ìtẹ̀léra nípa ọ̀nà, gègé tàbí àìní gbígbìn", "Yí ẹni tí ó ń kọ́kọ́ lọ padà ní àsìkò kọ̀ọ̀kan"] },
            { title: "Owó iṣẹ́ àti ìtọ́jú", bullets: ["Owó fún eka kan tàbí wákàtí kan (àpẹẹrẹ lásán)", "Owó àtúnṣe ẹ̀rọ fún àtúnṣe", "Awakọ̀ tí a kọ́; ìwé àkọsílẹ̀ wákàtí àti epo"] }
          ],
          sources: [FAO_MECH],
          tryIt: "Yan ẹ̀rọ tàbí iṣẹ́ háyà tí ẹgbẹ́ rẹ nílò. Kọ oko ọmọ ẹgbẹ́ márùn-ún, bí ó ṣe tóbi tó àti ọjọ́ tí wọ́n nílò ẹ̀rọ, lẹ́yìn náà kọ ètò ìgbàyè, owó fún eka kan, òfin owó àtúnṣe ẹ̀rọ tí ẹ bá ni ẹ̀rọ náà, àti ohun tí ẹ máa ṣe tí ó bá bàjẹ́.",
          youCanNow: "kọ ètò tó tọ́ láti háyà tàbí pín tírakító tàbí ẹ̀rọ kan, pẹ̀lú ètò ìgbàyè, owó iṣẹ́ àti ìtọ́jú.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí ọ̀pọ̀ ẹgbẹ́ kékeré fi ń háyà iṣẹ́ tírakító dípò kí wọ́n rà á?", options: ["Háyà máa ń jẹ́ ọ̀fẹ́ nígbà gbogbo", "A kò lè ra tírakító ní Áfíríkà", "Rírà nílò owó púpọ̀, àtúnṣe, awakọ̀ àti iṣẹ́ tí ó tó", "Iṣẹ́ háyà kì í dé ní àkókò rárá"], answer: 2, why: "Níní tírakító ń mú ìnáwó àti àìní ńlá wá; háyà papọ̀ lè fúnni ní ẹ̀rọ láìsí wọn." },
            { objective: "O3", q: "Kí ni owó àtúnṣe ẹ̀rọ wà fún?", options: ["Láti san owó oṣù alága", "Láti san fún àtúnṣe kí ẹ̀rọ lè máa ṣiṣẹ́", "Láti ra irúgbìn", "Láti san fún ìpàdé"], answer: 1, why: "Yíya owó sọ́tọ̀ fún àtúnṣe ń dènà kí ìbàjẹ́ ẹ̀rọ má parí àsìkò." }
          ]
        },
        {
          title: "Ríra lọ́pọ̀, ìdúnàádúrà àti yíyẹra fún ohun èlò ayédèrú",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ṣètò ríra irúgbìn tàbí ajílẹ̀ lọ́pọ̀, fi ìwé iye owó mẹ́ta wéra, kí o sì ṣàyẹ̀wò pé ohun èlò náà jẹ́ ojúlówó.",
          text: [
            "Kọ́kọ́ kó àwọn ìbéèrè jọ: orúkọ ọmọ ẹgbẹ́ kọ̀ọ̀kan, ohun èlò tí ó fẹ́, iye rẹ̀ àti owó àsansílẹ̀ tí ó ti san, gbogbo rẹ̀ ní kíkọ sínú ìwé ìbéèrè (order book), kí o sì kà á padà fún wọn. Ṣírò àpapọ̀ rẹ̀. Ìbéèrè ńlá tí ó dájú ń fún ọ ní agbára láti dúnàádúrà. Béèrè ìwé iye owó (quote) lọ́wọ́ ó kéré tán olùpèsè mẹ́ta tí a forúkọ wọn sílẹ̀ (agro-dealer, olùpínkiri tàbí ilé-iṣẹ́): iye owó àpò kan, ìfijíṣẹ́ dé abúlé yín, ọjọ́, orúkọ ọjà àti oríṣi rẹ̀, àti ẹ̀dínwó èyíkéyìí fún gbogbo ẹrù.",
            "Dúnàádúrà lórí ohun tí ó ju iye owó lọ: ìfijíṣẹ́ ọ̀fẹ́ tàbí tí kò wọ́n, ọjọ́ ìfijíṣẹ́ kí àsìkò gbígbìn tó dé, ìfihàn tàbí ìdánilẹ́kọ̀ọ́ ọ̀fẹ́, sísan apá kan owó nígbà ìfijíṣẹ́, àti ìwé ẹ̀rí ìsanwó ní orúkọ ẹgbẹ́. Fi ìwé iye owó wéra lórí àpapọ̀ owó títí dé ọ̀dọ̀ yín, kì í ṣe iye owó àpò nìkan. Má ṣe kó gbogbo owó lé ẹnì kan lọ́wọ́ ní owó ọwọ́ láéláé; san án láti inú àkáǹtì ẹgbẹ́, kí ẹ sì gba ìwé ẹ̀rí ìsanwó.",
            "Irúgbìn, ajílẹ̀ àti oògùn apakòkòrò ayédèrú jẹ́ ewu gidi. Ra lọ́wọ́ oníṣòwò tí a forúkọ rẹ̀ sílẹ̀ nìkan. Ṣàyẹ̀wò èdìdì, àmì orúkọ, nọ́mbà ìṣùpọ̀ (batch number) àti ọjọ́, àti pé àpò kò ya tàbí pé a kò tún un rán. Ní Kenya, KEPHIS ló ń bójú tó irúgbìn tí a fọwọ́ sí; ní Nàìjíríà, National Agricultural Seeds Council (NASC) ń sọ fún àwọn àgbẹ̀ pé kí wọ́n ra lọ́wọ́ agro-dealer tí a forúkọ rẹ̀ sílẹ̀, kí wọ́n sì wá àmì ìfọwọ́sí rẹ̀; ní Ghana, Plant Protection and Regulatory Services Directorate (PPRSD) ń bójú tó irúgbìn àti ajílẹ̀ lábẹ́ Plants and Fertilizer Act. Oògùn apakòkòrò gbọ́dọ̀ wà nínú àkọsílẹ̀ orílẹ̀-èdè rẹ. Tọ́jú ìwé ẹ̀rí ìsanwó àti àpẹẹrẹ kékeré, kí o sì fi ẹjọ́ ohun ayédèrú sun àjọ ìjọba orílẹ̀-èdè rẹ."
          ],
          steps: ["Kó ìbéèrè àti owó àsansílẹ̀ ọmọ ẹgbẹ́ kọ̀ọ̀kan jọ sínú ìwé ìbéèrè; kà á padà fún wọn.", "Gba ìwé iye owó ní kíkọ láti ọ̀dọ̀ ó kéré tán olùpèsè mẹ́ta tí a forúkọ wọn sílẹ̀.", "Dúnàádúrà lórí iye owó, ìfijíṣẹ́, ọjọ́, ìdánilẹ́kọ̀ọ́ àti ọ̀nà ìsanwó.", "Fi àpapọ̀ owó títí dé ọ̀dọ̀ yín wéra kí o sì yan; san láti inú àkáǹtì ẹgbẹ́ pẹ̀lú ìwé ẹ̀rí ìsanwó.", "Nígbà ìfijíṣẹ́, ṣàyẹ̀wò èdìdì, àmì orúkọ, nọ́mbà ìṣùpọ̀ àti àmì ìfọwọ́sí; pín in pẹ̀lú ìwé ẹ̀rí fún ọmọ ẹgbẹ́ kọ̀ọ̀kan."],
          words: [["Ríra lọ́pọ̀ (bulk buying)", "ríra ọ̀pọ̀lọpọ̀ nǹkan papọ̀ láti rí owó tí ó dín tàbí àdéhùn tó dára jù."], ["Ìwé iye owó (quote)", "iye owó àti àdéhùn tí olùpèsè kọ sílẹ̀ kí o tó rà."], ["Agro-dealer", "ṣọ́ọ̀bù tàbí oníṣòwò tí ó ń ta irúgbìn, ajílẹ̀ àti àwọn ohun èlò ọ̀gbìn míì."], ["Irúgbìn tí a fọwọ́ sí (certified seed)", "irúgbìn tí àjọ irúgbìn orílẹ̀-èdè ti ṣàyẹ̀wò pé ó jẹ́ oríṣi tó tọ́ tí ó sì dára."]],
          slides: [
            { title: "Kọ́kọ́ kó ìbéèrè jọ", bullets: ["Orúkọ, ohun èlò, iye, owó àsansílẹ̀", "Kíkọ sínú ìwé ìbéèrè, kí o sì kà á padà", "Ìbéèrè ńlá tí ó dájú ń fúnni ní agbára ìdúnàádúrà"] },
            { title: "Ìwé iye owó mẹ́ta, lẹ́yìn náà dúnàádúrà", bullets: ["Ó kéré tán olùpèsè mẹ́ta tí a forúkọ wọn sílẹ̀, ní kíkọ", "Iye owó, ìfijíṣẹ́, ọjọ́, ìdánilẹ́kọ̀ọ́, ọ̀nà ìsanwó", "Fi àpapọ̀ owó wéra; ìwé ẹ̀rí ìsanwó ní orúkọ ẹgbẹ́"] },
            { title: "Yẹra fún ohun èlò ayédèrú", bullets: ["Oníṣòwò tí a forúkọ rẹ̀ sílẹ̀ nìkan; ṣàyẹ̀wò èdìdì, àmì, ọjọ́", "Kenya: KEPHIS; Nàìjíríà: àmì NASC; Ghana: PPRSD", "Oògùn apakòkòrò nínú àkọsílẹ̀ orílẹ̀-èdè; fi ẹjọ́ ayédèrú sùn"] }
          ],
          sources: [KEPHIS_SEED, NASC_FAKE, GH_ACT803, FAO_PEST_REG],
          tryIt: "Ṣe ìwé ìbéèrè fún ó kéré tán ọmọ ẹgbẹ́ márùn-ún (orúkọ, ohun èlò, iye, owó àsansílẹ̀). Kọ àwọn ìbéèrè tí o máa béèrè lọ́wọ́ olùpèsè mẹ́ta tí a forúkọ wọn sílẹ̀, àti àkọsílẹ̀ àyẹ̀wò fún ọjọ́ ìfijíṣẹ́ láti dá irúgbìn tàbí ajílẹ̀ ayédèrú mọ̀.",
          youCanNow: "ṣètò ríra ohun èlò ọ̀gbìn lọ́pọ̀, dúnàádúrà pẹ̀lú olùpèsè mẹ́ta, kí o sì ṣàyẹ̀wò pé irúgbìn àti ajílẹ̀ jẹ́ ojúlówó.",
          quickCheck: [
            { objective: "O4", q: "Báwo ni o ṣe yẹ kí o fi ìwé iye owó àwọn olùpèsè wéra?", options: ["Iye owó àpò nìkan", "Olùpèsè wo ni ọ̀rẹ́ rẹ", "Èwo ló ní ṣọ́ọ̀bù tó tóbi jù", "Àpapọ̀ owó títí dé ọ̀dọ̀ yín, pẹ̀lú ọjọ́, dídára àti àdéhùn"], answer: 3, why: "Iye owó àpò tí ó dín lè fi owó ọkọ̀ tí ó ga tàbí ìfijíṣẹ́ tí ó pẹ́ pamọ́; fi gbogbo àdéhùn wéra." },
            { objective: "O4", q: "Nígbà ìfijíṣẹ́, àwọn àpò irúgbìn kan dà bí ẹni pé a tún wọn rán, wọn kò sì ní àmì ìfọwọ́sí. Kí ni o máa ṣe?", options: ["Kọ̀ wọ́n, tọ́jú ẹ̀rí, kí o sì fi ẹjọ́ sun àjọ irúgbìn", "Gbà wọ́n kí àkókò má bàa ṣòfò", "Pín wọn ní ìkọ̀kọ̀", "Pò wọ́n mọ́ irúgbìn tó dára"], answer: 0, why: "Àpò tí a tún rán tí kò ní àmì jẹ́ àmì irúgbìn ayédèrú; kọ̀ wọ́n, tọ́jú ẹ̀rí, kí o sì fi ẹjọ́ sùn." }
          ]
        },
        {
          title: "Pípa ìgbẹ́kẹ̀lé mọ́: àkọsílẹ̀ gbangba àti yíyanjú ìjà",
          objectives: ["O5"],
          minutes: 5,
          goal: "Pa àkọsílẹ̀ gbangba ti owó àkójọ mọ́, kí o sì yanjú èdè-àìyedè nípa àwọn ìgbésẹ̀ tí ẹ ti fohùn ṣọ̀kan lé lórí.",
          text: [
            "Ẹgbẹ́ kì í sábà túká nítorí àìní èrò; wọ́n máa ń túká nígbà tí àwọn ọmọ ẹgbẹ́ kò bá gbẹ́kẹ̀ lé ibi tí owó lọ mọ́. Jẹ́ kí ó rọrùn láti tọpa gbogbo shilling, naira, cedi tàbí franc: ìwé ìbéèrè fún owó àsansílẹ̀, ìwé ẹ̀rí fún gbogbo owó tí ó wọlé àti tí ó jáde, ìsanwó láti inú àkáǹtì ẹgbẹ́ tí ènìyàn méjì ń fọwọ́ sí, àti ìwé àkọsílẹ̀ ẹ̀rọ tí ẹ bá ń pín ẹ̀rọ.",
            "Jẹ́ kí àkọsílẹ̀ wà ní gbangba. Ka àkópọ̀ owó sókè ní gbogbo ìpàdé: owó tí ó wọlé, owó tí ó jáde, owó tó kù, àti ohun tí a rà fún ta ni. Lẹ àkọsílẹ̀ ìbéèrè àti ètò ìgbàyè sí ibi tí àwọn ọmọ ẹgbẹ́ ti lè rí i, tàbí pín fọ́tò rẹ̀ nínú ẹgbẹ́ àjọsọ̀rọ̀ lórí fóònù. Jẹ́ kí ọmọ ẹgbẹ́ èyíkéyìí lè wo ìwé owó. Máa yí ẹni tí ó ń bójú tó owó padà láti ìgbà dé ìgbà.",
            "Èdè-àìyedè yóò ṣẹlẹ̀: ẹnì kan rí tírakító pẹ́, àpò kan sọnù, ọmọ ẹgbẹ́ kan kò sanwó. Lo àwọn ìgbésẹ̀ inú òfin yín: àkọ́kọ́, ẹ bá ara yín sọ̀rọ̀ tààrà; lẹ́yìn náà, ìgbìmọ̀ gbọ́ ẹ̀gbẹ́ méjèèjì kí wọ́n sì ṣàyẹ̀wò àkọsílẹ̀; lẹ́yìn náà, gbogbo ẹgbẹ́ pinnu; tí ó bá pọndandan, ẹ pe ẹni ìta tí a bọ̀wọ̀ fún bí òṣìṣẹ́ ìmọ̀ràn àgbẹ̀, baálẹ̀ tàbí òṣìṣẹ́ ẹgbẹ́ alájọṣe. Ẹ ṣe ìpinnu lórí òtítọ́ inú àkọsílẹ̀, kì í ṣe lórí ẹni tí ohùn rẹ̀ ga jù. Rí i dájú pé àwọn obìnrin àti ọ̀dọ́ náà lè sọ ìṣòro wọn, àti pé a gbọ́ ẹ̀dùn ọkàn wọn."
          ],
          steps: ["Pa ìwé ìbéèrè, ìwé ẹ̀rí ìsanwó, àkáǹtì ẹgbẹ́ tí ènìyàn méjì ń fọwọ́ sí àti ìwé àkọsílẹ̀ ẹ̀rọ mọ́.", "Ka àkópọ̀ owó sókè ní gbogbo ìpàdé.", "Lẹ àkọsílẹ̀ àti ètò ìgbàyè sí ibi tí àwọn ọmọ ẹgbẹ́ ti lè rí wọn.", "Yanjú èdè-àìyedè nípa àwọn ìgbésẹ̀ tí ẹ fohùn ṣọ̀kan lé lórí, pẹ̀lú àkọsílẹ̀.", "Máa yí àwọn ipò owó padà, kí o sì rí i dájú pé gbogbo ènìyàn lè sọ ìṣòro."],
          words: [["Ìṣípayá (transparency)", "ṣíṣe owó àti ìpinnu ní gbangba kí gbogbo ọmọ ẹgbẹ́ lè rí wọn."], ["Alárinà (mediator)", "ẹni tí a bọ̀wọ̀ fún tí kò ṣègbè, tí ó ń ran ẹ̀gbẹ́ méjì lọ́wọ́ láti yanjú èdè-àìyedè."], ["Owó tó kù (balance)", "owó tí ó ṣẹ́kù lẹ́yìn tí a bá yọ owó tí ó jáde kúrò nínú owó tí ó wọlé."]],
          slides: [
            { title: "Ìgbẹ́kẹ̀lé ń tẹ̀lé owó", bullets: ["Ìwé ìbéèrè àti ìwé ẹ̀rí fún ohun gbogbo", "Àkáǹtì ẹgbẹ́; ènìyàn méjì ń fọwọ́ sí", "Ìwé àkọsílẹ̀ ẹ̀rọ tí ẹ bá ń pín ẹ̀rọ"] },
            { title: "Jẹ́ kí àkọsílẹ̀ wà ní gbangba", bullets: ["Ka owó tí ó wọlé, tí ó jáde àti tó kù sókè", "Lẹ àkọsílẹ̀ àti ètò ìgbàyè; pín fọ́tò", "Ọmọ ẹgbẹ́ èyíkéyìí lè wo ìwé owó"] },
            { title: "Yanjú èdè-àìyedè", bullets: ["Ẹ sọ̀rọ̀ tààrà; ìgbìmọ̀ gbọ́ ẹ̀gbẹ́ méjèèjì", "Gbogbo ẹgbẹ́ pinnu; alárinà ìta tí ó bá pọndandan", "Pinnu lórí àkọsílẹ̀; gbọ́ ti obìnrin àti ọ̀dọ́"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ríra ohun èlò ọ̀gbìn lọ́pọ̀ tàbí àdéhùn pínpín ẹ̀rọ rẹ. Fi àwọn ọmọ ẹgbẹ́ kún un, àwọn àkọsílẹ̀ tí ẹ máa pa mọ́ tí ẹ sì máa kà sókè, àwọn ìgbésẹ̀ fún yíyanjú èdè-àìyedè, àti àwọn ipò tí àwọn obìnrin àti ọ̀dọ́ máa dì mú.",
          youCanNow: "pa owó àkójọ mọ́ ní gbangba kí ó sì ṣeé tọpa, yanjú èdè-àìyedè lọ́nà tó tọ́, kí o sì pa ìgbẹ́kẹ̀lé gbogbo ènìyàn mọ́.",
          quickCheck: [
            { objective: "O5", q: "Kí ló ń mú ìgbẹ́kẹ̀lé pọ̀ jù nínú ẹgbẹ́ tí ó ń kó owó jọ?", options: ["Akápò ń tọ́jú ìwé owó sílé", "Kíka owó tí ó wọlé, tí ó jáde àti tó kù sókè ní gbogbo ìpàdé", "Sísan owó fún olùpèsè ní owó ọwọ́ láìsí ìwé ẹ̀rí", "Alága nìkan ló mọ owó tó kù"], answer: 1, why: "Àkọsílẹ̀ gbangba ń jẹ́ kí gbogbo ọmọ ẹgbẹ́ rí ibi tí owó lọ." },
            { objective: "O5", q: "Ọmọ ẹgbẹ́ kan sọ pé òun ló tún rí tírakító kẹ́yìn. Kí ni ìgbésẹ̀ àkọ́kọ́?", options: ["Lé e kúrò nínú ẹgbẹ́", "Má ṣe kọbi ara sí i", "Bá a sọ̀rọ̀ tààrà, lẹ́yìn náà ṣàyẹ̀wò ètò ìgbàyè àti àkọsílẹ̀", "Dá owó rẹ̀ padà kí o sì ti ẹgbẹ́ pa"], answer: 2, why: "Títẹ̀lé àwọn ìgbésẹ̀ tí ẹ fohùn ṣọ̀kan lé lórí àti ṣíṣàyẹ̀wò àkọsílẹ̀ ń yanjú rẹ̀ lọ́nà tó tọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkó owó jọ, ríra papọ̀ àti pípa ìgbẹ́kẹ̀lé mọ́",
        questions: [
          { objective: "O3", q: "Kí ni iṣẹ́ háyà?", options: ["Àkáǹtì ìfowópamọ́ ẹgbẹ́", "Ẹni tí ó ń mú ẹ̀rọ wá tí ó sì ń ṣe iṣẹ́ náà fún owó", "Ilé-iṣẹ́ irúgbìn", "Owó ẹ̀yáwó báńkì"], answer: 1, why: "Iṣẹ́ háyà ń jẹ́ kí àwọn àgbẹ̀ lo tírakító tàbí ẹ̀rọ láìjẹ́ pé wọ́n ni ín." },
          { objective: "O3", q: "Gbogbo ènìyàn fẹ́ tírakító ní ọjọ́ mẹ́ta kan náà. Kí ló tọ́?", options: ["Àwọn ọ̀rẹ́ alága ló kọ́kọ́ lọ", "Ẹni tí ó pariwo jù", "Ẹni tí ó san owó àfikún ní ìkọ̀kọ̀", "Ìtẹ̀léra tí a fohùn ṣọ̀kan lé lórí nípa ọ̀nà, gègé tàbí àìní gbígbìn, tí ó ń yí padà ní àsìkò kọ̀ọ̀kan"], answer: 3, why: "Ìtẹ̀léra tí a fohùn ṣọ̀kan lé lórí tí ó sì ń yí padà tọ́, ó sì ń dín epo àti ìrìn àjò kù." },
          { objective: "O4", q: "Kí ló dé tí a fi ń kó ìbéèrè àti owó àsansílẹ̀ jọ kí a tó bá olùpèsè sọ̀rọ̀?", options: ["Láti ná owó náà ní kùtùkùtù", "Láti yẹra fún kíkọ nǹkan sílẹ̀", "Ìbéèrè ńlá tí ó dájú ń fúnni ní agbára ìdúnàádúrà", "Àwọn olùpèsè ń béèrè PIN àwọn ọmọ ẹgbẹ́"], answer: 2, why: "Àwọn olùpèsè máa ń fúnni ní àdéhùn tó dára jù nígbà tí wọ́n bá mọ̀ pé ìbéèrè náà jẹ́ òótọ́ tí ó sì tóbi." },
          { objective: "O4", q: "Èwo ni àmì ajílẹ̀ tàbí irúgbìn ayédèrú?", options: ["Àpò tí ó ya tàbí tí a tún rán, tí kò ní àmì orúkọ tàbí àmì ìfọwọ́sí", "Àpò tí a dí pa tí ó ní nọ́mbà ìṣùpọ̀", "Ìwé ẹ̀rí ìsanwó láti ọ̀dọ̀ oníṣòwò tí a forúkọ rẹ̀ sílẹ̀", "Àmì ìfọwọ́sí"], answer: 0, why: "Èdìdì tí ó bàjẹ́ àti àìsí àmì orúkọ tàbí àmì ìfọwọ́sí jẹ́ àmì ìkìlọ̀ ohun èlò ayédèrú." },
          { objective: "O5", q: "Ta ni ó yẹ kí ó fọwọ́ sí ìsanwó láti inú àkáǹtì ẹgbẹ́?", options: ["Ẹnikẹ́ni tí ó bá béèrè", "Olùpèsè", "Ẹnì kan ṣoṣo", "Olùfọwọ́sí méjì tí a fohùn ṣọ̀kan lé lórí"], answer: 3, why: "Olùfọwọ́sí méjì ń jẹ́ kí ó ṣòro láti ṣi owó lò." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìkójọpọ̀ Àwùjọ: Pínpín Ẹ̀rọ Oko àti Ìdúnàádúrà fún Ohun Èlò Ọ̀gbìn",
    questions: [
      { objective: "O1", q: "Kí ni ìkójọpọ̀ àwùjọ?", options: ["Kíkó lọ sí ìlú ńlá", "Kíkó àwọn ènìyàn jọ láti ṣiṣẹ́ lórí àìní tí wọ́n jọ ní", "Ríra fóònù", "Títa irè oko lóun nìkan"], answer: 1, why: "Ìkójọpọ̀ àwùjọ túmọ̀ sí ṣíṣètò àwọn ènìyàn yí àìní tí wọ́n jọ ní ká." },
      { objective: "O1", q: "Ó kéré tán, agbo ilé mélòó ni o yẹ kí o béèrè lọ́wọ́ wọn nígbà tí o bá ń ṣe àwòrán àìní?", options: ["Ọ̀kan", "Méjì", "Àwọn olórí nìkan", "Mẹ́wàá"], answer: 3, why: "Bíbéèrè lọ́wọ́ ó kéré tán agbo ilé mẹ́wàá ń fúnni ní àwòrán tó tọ́ ti àìní tí a jọ ní." },
      { objective: "O1", q: "Kí ló dé tí a fi ń fi àwọn ọ̀dọ́ àgbẹ̀ kún àwòrán àìní?", options: ["Ìṣòro wọn lè yàtọ̀, bí àìní ìwé ẹ̀rí ilẹ̀ tàbí rírí iṣẹ́ gbà kẹ́yìn", "Wọ́n ní owó jù", "Àwọn ni wọ́n ni gbogbo tírakító", "Kò pọndandan"], answer: 0, why: "Àwọn ọ̀dọ́ àti obìnrin lè dojú kọ ìdènà tí ó yàtọ̀, tí ẹgbẹ́ náà gbọ́dọ̀ yanjú." },
      { objective: "O1", q: "Lẹ́yìn tí o bá ti ka àwọn ìdáhùn, kí ni o máa ṣe?", options: ["Ju ìwé náà nù", "Yan èyí tí olórí fẹ́ràn", "To àwọn àìní mẹ́ta tó ga jù lẹ́sẹẹsẹ", "Bẹ̀rẹ̀ sí í kó owó jọ"], answer: 2, why: "Títò lẹ́sẹẹsẹ ń fi àwọn àìní tí agbo ilé tó pọ̀ jù jọ ní hàn." },
      { objective: "O2", q: "Kí ni ìpè sí ìpàdé àkọ́kọ́ yẹ kí ó ní?", options: ["Àkọsílẹ̀ gbèsè àwọn ọmọ ẹgbẹ́", "Kò sí nǹkan, àkókò nìkan", "Ìbéèrè fún owó", "Ìdí ìpàdé ní gbólóhùn kan, àkókò àti ibi"], answer: 3, why: "Ìdí tó yé ń sọ fún àwọn ènìyàn ìdí tí ó fi tọ́ láti wá." },
      { objective: "O2", q: "Kí ni ètò ìpàdé (agenda)?", options: ["Àkọsílẹ̀ àwọn nǹkan tí ìpàdé máa jíròrò, ní ṣísẹ̀-n-tẹ̀lé", "Ìgbàyè tírakító", "Ìwé iye owó olùpèsè", "Ìwé àkọsílẹ̀ báńkì"], answer: 0, why: "Ètò ìpàdé ń jẹ́ kí ìpàdé kúrú kí ó má sì yà kúrò lójú ọ̀nà." },
      { objective: "O2", q: "Àfojúsùn wo ló yé jù?", options: ["Ṣe dáadáa sí i lọ́dún yìí", "Ran gbogbo ènìyàn lọ́wọ́", "A máa túlẹ̀ oko gbogbo ọmọ ẹgbẹ́ láàárín ọ̀sẹ̀ méjì lẹ́yìn òjò àkọ́kọ́", "Rí ẹ̀rọ ní ọjọ́ kan"], answer: 2, why: "Ó dárúkọ àbájáde àti àkókò, kí ẹgbẹ́ lè rí i bóyá ó ṣàṣeyọrí." },
      { objective: "O2", q: "Òfin wo ló yẹ kí a fohùn ṣọ̀kan lé lórí kí a tó kó owó jọ?", options: ["Àwọ̀ aṣọ ẹgbẹ́", "Bí ọmọ ẹgbẹ́ ṣe lè kúrò kí ó sì gba owó rẹ̀ padà", "Ibi tí alága ń gbé", "Ilé iṣẹ́ rédíò tí a máa gbọ́"], answer: 1, why: "Òfin nípa kíkúrò àti dídá owó padà ń dènà ìjà nígbà tí a bá ti kó owó jọ." },
      { objective: "O3", q: "Kí ni ó sábà máa ń jẹ́ ìgbésẹ̀ àkọ́kọ́ sí rírí ẹ̀rọ fún ẹgbẹ́ kékeré?", options: ["Ríra tírakító ńlá ní àwìn", "Kíkọ́ ilé-iṣẹ́ ńlá", "Kí ọmọ ẹgbẹ́ kọ̀ọ̀kan ra tírakító", "Háyà iṣẹ́ tírakító papọ̀"], answer: 3, why: "Háyà papọ̀ ń fúnni ní ẹ̀rọ láìsí ìnáwó ńlá ti níní rẹ̀." },
      { objective: "O3", q: "Kí ni ìwé àkọsílẹ̀ ẹ̀rọ (logbook) ń kọ sílẹ̀?", options: ["Ọjọ́ ìbí àwọn ọmọ ẹgbẹ́", "Wákàtí, epo, oko tí a ṣiṣẹ́ fún àti àtúnṣe", "Iye owó ohun ọ̀gbìn", "Àwọn tí ó wá sí ìpàdé"], answer: 1, why: "Ìwé àkọsílẹ̀ ẹ̀rọ ń fi bí a ṣe ń lo ẹ̀rọ náà àti bí a ṣe ń tọ́jú rẹ̀ hàn." },
      { objective: "O3", q: "Títúlẹ̀ tí ó pẹ́ sábà máa ń yọrí sí:", options: ["Irè oko tí ó pọ̀ sí i", "Kò sí ìyípadà", "Irè oko tí ó dín kù", "Ajílẹ̀ ọ̀fẹ́"], answer: 2, why: "Títúlẹ̀ àti gbígbìn tí ó pẹ́ ń dín irè oko kù, ìdí nìyí tí ètò ìgbàyè tó tọ́ fi ṣe pàtàkì." },
      { objective: "O3", q: "Ẹgbẹ́ kan ní ẹ̀rọ ìyọ hóró àgbàdo. Níbo ni owó àtúnṣe ti ń wá?", options: ["Owó àtúnṣe ẹ̀rọ tí a yà sọ́tọ̀ láti inú owó iṣẹ́", "Àpò alága fúnra rẹ̀", "Olùpèsè", "Kò sí ibì kankan; ẹ dẹ́kun lílò ó"], answer: 0, why: "Owó àtúnṣe ẹ̀rọ láti inú owó iṣẹ́ ń jẹ́ kí ẹ̀rọ máa ṣiṣẹ́." },
      { objective: "O4", q: "Ó kéré tán, ìwé iye owó mélòó láti ọ̀dọ̀ olùpèsè ni o yẹ kí o fi wéra?", options: ["Mẹ́ta", "Ọ̀kan", "Kò sí", "Ogún"], answer: 0, why: "Ìwé iye owó mẹ́ta ń fi iye owó tó tọ́ hàn, ó sì ń fún ọ ní àyè láti dúnàádúrà." },
      { objective: "O4", q: "Yàtọ̀ sí iye owó, kí ni o tún lè dúnàádúrà fún?", options: ["Orúkọ ìdílé olùpèsè", "PIN àwọn ọmọ ẹgbẹ́", "Ìfijíṣẹ́ dé abúlé kí àsìkò gbígbìn tó dé", "Iye owó tí ó ga jù"], answer: 2, why: "Ìfijíṣẹ́, àkókò, ìdánilẹ́kọ̀ọ́ àti ọ̀nà ìsanwó ṣe pàtàkì bí iye owó àpò." },
      { objective: "O4", q: "Ní Nàìjíríà, àjọ wo ló ń kìlọ̀ nípa irúgbìn ayédèrú tí ó sì ń lo àmì ìfọwọ́sí?", options: ["KEPHIS", "National Agricultural Seeds Council (NASC)", "PPRSD", "KEBS"], answer: 1, why: "NASC ń sọ fún àwọn àgbẹ̀ pé kí wọ́n ra lọ́wọ́ agro-dealer tí a forúkọ rẹ̀ sílẹ̀, kí wọ́n sì wá àmì ìfọwọ́sí rẹ̀." },
      { objective: "O4", q: "Báwo ni ẹgbẹ́ ṣe yẹ kí ó san owó fún olùpèsè?", options: ["Owó ọwọ́ tí a kó lé ọmọ ẹgbẹ́ kan lọ́wọ́", "Sínú àkáǹtì àjèjì kan", "Láìsí ìwé ẹ̀rí ìsanwó kankan", "Láti inú àkáǹtì ẹgbẹ́, pẹ̀lú ìwé ẹ̀rí ìsanwó ní orúkọ ẹgbẹ́"], answer: 3, why: "Ìsanwó ẹgbẹ́ pẹ̀lú ìwé ẹ̀rí ń jẹ́ kí a lè tọpa owó náà." },
      { objective: "O5", q: "Kí ló dé tí a fi ń ka àkópọ̀ owó sókè ní ìpàdé?", options: ["Láti fi àkókò ṣòfò", "Láti dójú ti àwọn ọmọ ẹgbẹ́", "Nítorí òfin sọ pé kí a kọrin", "Kí àwọn tí kò mọ̀wé kà náà lè mọ ibi tí owó lọ"], answer: 3, why: "Kíkà sókè ń jẹ́ kí àkọsílẹ̀ wà ní gbangba fún gbogbo ọmọ ẹgbẹ́." },
      { objective: "O5", q: "Ta ni ó lè ṣèrànwọ́ tí ìgbìmọ̀ kò bá lè yanjú ìjà kan?", options: ["Ẹni ìta tí a bọ̀wọ̀ fún bí òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ tàbí òṣìṣẹ́ ẹgbẹ́ alájọṣe", "Olùpèsè", "Kò sí ẹnì kankan", "Ọmọ ẹgbẹ́ tí ohùn rẹ̀ ga jù"], answer: 0, why: "Alárinà tí kò ṣègbè lè ran ẹ̀gbẹ́ méjèèjì lọ́wọ́ láti fohùn ṣọ̀kan." },
      { objective: "O5", q: "Kí ni ìpinnu nínú ìjà yẹ kí ó dá lé lórí?", options: ["Ẹni tí ó dàgbà jù", "Ẹni tí ó pariwo jù", "Òtítọ́ inú àkọsílẹ̀", "Àhesọ ọ̀rọ̀"], answer: 2, why: "Àkọsílẹ̀ ń fi ohun tí ó ṣẹlẹ̀ gan-an hàn, nítorí náà ìpinnu máa tọ́." },
      { objective: "O5", q: "Kí ló ń ran àwọn obìnrin àti ọ̀dọ́ lọ́wọ́ láti kópa?", options: ["Ipò fún àwọn olórí ilé nìkan", "Ipò gidi bí akápò tàbí ẹni tí ó ń gba àyè ẹ̀rọ", "Ìpàdé ní òru, ní ibi tí ó jìnnà", "Ọmọ ẹgbẹ́ fún àwọn tí ó ní ìwé ẹ̀rí ilẹ̀ nìkan"], answer: 1, why: "Fífún àwọn obìnrin àti ọ̀dọ́ ní ipa gidi ń kọ́ ìgbẹ́kẹ̀lé àti ẹgbẹ́ tí ó lágbára jù." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá ètò yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Àwòrán àìní", objective: "O1", notYet: "Àìní náà jẹ́ ìméfò olórí, tàbí a béèrè lọ́wọ́ agbo ilé tí kò tó mẹ́wàá.", meets: "A béèrè lọ́wọ́ ó kéré tán agbo ilé mẹ́wàá, pẹ̀lú àwọn obìnrin àti ọ̀dọ́, a sì to àwọn àìní mẹ́ta tó ga jù lẹ́sẹẹsẹ.", exceeds: "Ó ní àwòrán abúlé rírọrùn tí ó fi oko, ọ̀nà, ṣọ́ọ̀bù ohun èlò ọ̀gbìn àti ẹ̀rọ hàn." },
      { name: "Àfojúsùn àti òfin", objective: "O2", notYet: "Kò sí àfojúsùn tó yé, tàbí kò sí òfin tí a kọ sílẹ̀ nípa owó àti kíkúrò.", meets: "Àfojúsùn tí ó ní iye àti ọjọ́, àti òfin tí a kọ sílẹ̀ nípa dídarapọ̀, ìpinnu, owó, àìsan owó àti kíkúrò, tí a fohùn ṣọ̀kan lé lórí nínú àkọsílẹ̀ ìpàdé.", exceeds: "A ka àwọn òfin sókè, a sì kọ ìfohùnṣọ̀kan àwọn ọmọ ẹgbẹ́ sílẹ̀ ní orúkọ ọ̀kọ̀ọ̀kan." },
      { name: "Ètò ẹ̀rọ", objective: "O3", notYet: "Kò sí ètò ìgbàyè tàbí owó iṣẹ́, tàbí kò sí ètò fún ìgbà tí ẹ̀rọ bá bàjẹ́.", meets: "A ti pinnu láti háyà tàbí láti rà, ètò ìgbàyè tó tọ́, owó iṣẹ́, owó àtúnṣe ẹ̀rọ tàbí àdéhùn háyà, awakọ̀ àti òfin fún ìbàjẹ́.", exceeds: "Ẹni tí ó ń háyà ẹ̀rọ tàbí ẹni tí ó ni ẹ̀rọ ti fọwọ́ sí ètò náà, ẹni tí ó ń kọ́kọ́ lọ sì ń yí padà ní àsìkò kọ̀ọ̀kan." },
      { name: "Ètò ríra lọ́pọ̀", objective: "O4", notYet: "Kò sí ìwé ìbéèrè, ìwé iye owó kò tó mẹ́ta, tàbí kò sí àyẹ̀wò fún ohun èlò ayédèrú.", meets: "A kọ ìbéèrè àti owó àsansílẹ̀ sílẹ̀, a fi ìwé iye owó mẹ́ta wéra lórí àpapọ̀ owó títí dé ọ̀dọ̀ wa, a sanwó láti inú àkáǹtì ẹgbẹ́, a sì ní àyẹ̀wò ọjọ́ ìfijíṣẹ́ fún ohun èlò ojúlówó.", exceeds: "Ó fi ohun tí a jèrè nínú ìdúnàádúrà hàn (iye owó, ìfijíṣẹ́, ìdánilẹ́kọ̀ọ́), ó sì dárúkọ àjọ tí a máa fi ẹjọ́ ohun ayédèrú sùn." },
      { name: "Ìgbẹ́kẹ̀lé àti ìfikún gbogbo ènìyàn", objective: "O5", notYet: "Ẹnì kan ṣoṣo ló ń tọ́jú àkọsílẹ̀, tàbí àwọn obìnrin àti ọ̀dọ́ kò ní ipa kankan.", meets: "Àkọsílẹ̀ gbangba tí a ń kà sókè, àwọn ìgbésẹ̀ tí a fohùn ṣọ̀kan lé lórí fún èdè-àìyedè, àti ipò tí a dárúkọ fún àwọn obìnrin àti ọ̀dọ́.", exceeds: "Àwọn ipò owó ń yí padà, àwọn obìnrin àti ọ̀dọ́ sì di ó kéré tán ipò olórí kan mú." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn ẹgbẹ́ tí wọ́n parí ríra ohun èlò ọ̀gbìn lọ́pọ̀ tàbí àsìkò pínpín ẹ̀rọ kan láàárín oṣù 6 (ìwádìí àtẹ̀lé)",
      "Àwọn ọmọ ẹgbẹ́ tí wọ́n sọ pé àwọn san owó tí ó dín fún àpò kan tàbí pé wọ́n túlẹ̀ fún àwọn ní kùtùkùtù ju ìgbà tí wọ́n dá wà",
      "Àwọn ẹgbẹ́ tí kò ní ìjà owó tí a kò yanjú lẹ́yìn àsìkò kan, tí wọ́n sì ń ka àkọsílẹ̀ sókè ní ìpàdé",
      "Ìpín àwọn ipò ẹgbẹ́ tí àwọn obìnrin àti ọ̀dọ́ dì mú"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù lásán fún ìpè, SMS àti mobile money; smartphone wúlò fún yíya fọ́tò àkọsílẹ̀",
      "Ìwé àkọsílẹ̀ fún àwòrán àìní, àkọsílẹ̀ ìpàdé, ìwé ìbéèrè àti ìwé àkọsílẹ̀ ẹ̀rọ",
      "Àpẹẹrẹ òfin àti ìwé ìbéèrè rírọrùn (olùkọ́ lè dà wọ́n kọ láti inú àwọn ẹ̀kọ́)",
      "Àpẹẹrẹ àpò tàbí àmì orúkọ irúgbìn àti ajílẹ̀ láti fi kọ́ bí a ṣe ń dá ohun ayédèrú mọ̀",
      "Nǹkan bí ìṣẹ́jú 90 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti lọ sọ́dọ̀ àwọn agbo ilé àti olùpèsè"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ẹ̀kọ́ náà pẹ̀lú abúlé tàbí ẹgbẹ́ gidi: ẹ ṣe àwòrán àìní àti ìpàdé àkọ́kọ́ ní ti gidi, láàárín àwọn ìpàdé ẹ̀kọ́.",
      "Ẹ ṣe ìpàdé ẹ̀kọ́ ní àkókò tí àwọn obìnrin àti ọ̀dọ́ lè wá, kí ẹ sì pè wọ́n láti ṣe alága tàbí láti kọ àkọsílẹ̀ ìpàdé.",
      "Ẹ mú àpò tàbí àmì orúkọ ohun èlò ọ̀gbìn gidi wá, kí ẹ sì béèrè lọ́wọ́ àjọ irúgbìn tàbí àjọ ìdáàbòbo ohun ọ̀gbìn orílẹ̀-èdè (KEPHIS, NASC, PPRSD tàbí àjọ orílẹ̀-èdè yín) bí a ṣe ń ṣàyẹ̀wò wọn; ẹ má ṣe sọ owó iṣẹ́ tàbí iye owó láti orí.",
      "Ẹ ṣe eré ìdárayá ìdúnàádúrà pẹ̀lú olùpèsè àti ìjà lórí ìgbàyè tírakító tí ó pẹ́, pẹ̀lú àpẹẹrẹ àkọsílẹ̀.",
      "Ẹ fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn; nígbà tí ẹgbẹ́ bá ṣetán láti forúkọ sílẹ̀ lọ́nà òfin, ẹ tọ́ wọn sí ẹ̀kọ́ \"Ẹgbẹ́ Alájọṣe Àgbẹ̀ àti Bí A Ṣe Ń Dé Ọjà\"."
    ]
  }
};
