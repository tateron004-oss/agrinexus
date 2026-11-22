"use strict";

// Koach Learn course (Yoruba translation of shared/ged-math.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const GED_SUBJECTS = { name: "GED Testing Service: Àwọn ẹ̀ka ìdánwò (Ìṣirò)", url: "https://www.ged.com/about-test/test-subjects.html" };
const GED_MATH = { name: "GED Testing Service: Ìdánwò Ìṣirò, ìwé àgbékalẹ̀ (formula sheet) àti ìbéèrè àpẹẹrẹ", url: "https://ged.com/about_test/test_subjects/math/" };
const GED_PRACTICE = { name: "GED Testing Service: Àwọn ìdánwò àpẹẹrẹ ọ̀fẹ́ àti GED Ready", url: "https://www.ged.com/practice-test/" };
const GED_CALC = { name: "GED Testing Service: Ìwé ìtọ́sọ́nà ẹ̀rọ ìṣirò TI-30XS (PDF)", url: "https://www.ged.com/wp-content/uploads/calculator_sheet.pdf" };
const HISET = { name: "HiSET: ìdánwò tó dọ́gba pẹ̀lú ìwé-ẹ̀rí ilé-ẹ̀kọ́ girama", url: "https://hiset.org/" };

module.exports = {
  id: "ged-math-yo",
  lang: "yo",
  translationOf: "ged-math",
  category: "Workforce Development",
  name: "Ìmúrasílẹ̀ fún Ìdánwò GED: Ìṣirò",
  skills: "Mímọ ìdánwò Ìṣirò GED àti ṣíṣe ètò ìkẹ́kọ̀ọ́, Ìṣirò nọ́mbà láìsí ẹ̀rọ ìṣirò, Ìpín, ìdá-ọgọ́rùn-ún àti dátà, Yíyanjú ìdọ́gba àti àìdọ́gba, Jìọ́mẹ́tírì pẹ̀lú ìwé àgbékalẹ̀, Ìtẹ̀ (slope), àwòrán ìyàwòrán àti function",
  outcome: "yanjú àwọn irú ìbéèrè pàtàkì nínú Ìṣirò GED (ìṣirò nọ́mbà, ìdá-ọgọ́rùn-ún àti dátà, ìdọ́gba, jìọ́mẹ́tírì pẹ̀lú ìwé àgbékalẹ̀, àti àwòrán ìyàwòrán), kí o sì tẹ̀lé ètò ìkẹ́kọ̀ọ́ àti ìdánwò tó ní ọjọ́ gidi, tí yóò mú ọ ṣetán láti ṣe ìdánwò Ìṣirò GED.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbàlagbà tí wọ́n ń ṣiṣẹ́ láti gba ìwé-ẹ̀rí tó dọ́gba pẹ̀lú ti ilé-ẹ̀kọ́ girama: àwọn ọ̀dọ́, àwọn tí wọ́n ń padà sílé láti ẹ̀wọ̀n, àwọn aṣíkiri, àwọn ológun tẹ́lẹ̀ rí àti ẹnikẹ́ni tí ó ń padà sí ẹ̀kọ́. Ìwé-ẹ̀rí yìí ń ṣí ilẹ̀kùn sí iṣẹ́, ètò ìdálẹ́kọ̀ọ́ àti yunifásítì.",
    "Ìdánwò GED ní ẹ̀ka mẹ́rin, Ìṣirò (tí a ń pè ní Mathematical Reasoning) sì jẹ́ ọ̀kan nínú wọn. GED Testing Service ló ń ṣe é, lórí kọ̀mpútà. Ìdánwò ìṣirò náà ní Ìṣirò Ìpìlẹ̀, Jìọ́mẹ́tírì, Áljẹ́bírà Ìpìlẹ̀, àti Àwòrán Ìyàwòrán àti Function. Wọ́n máa fún ọ ní ìwé àgbékalẹ̀ (formula sheet), nítorí náà o kò ní láti há àwọn àgbékalẹ̀ sórí. Àwọn ìpínlẹ̀ kan ń lo ìdánwò HiSET dípò GED, tàbí pẹ̀lú rẹ̀; ọ́fíìsì ẹ̀kọ́ àgbà ìpínlẹ̀ rẹ tàbí ged.com máa sọ èyí tí ìpínlẹ̀ rẹ ń lò.",
    "O máa kọ́ bí ìdánwò ìṣirò ṣe ń lọ, lẹ́yìn náà o máa ṣe àṣeṣe irú ìbéèrè kọ̀ọ̀kan pẹ̀lú àwọn àpẹẹrẹ tí a ti yanjú àti àwọn ìbéèrè àṣeṣe tí a ṣàlàyé ìdáhùn wọn. O máa parí pẹ̀lú ètò ìkẹ́kọ̀ọ́ àti ìdánwò tìrẹ, tí ó ní ọjọ́ gidi.",
    "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀ fún ìdánwò náà; kò fún ọ ní ìwé-ẹ̀rí GED. Yíyege ìdánwò GED gidi nìkan ló ń fúnni ní i. Wo ged.com fún àwọn òfin ìpínlẹ̀ rẹ lónìí, iye owó rẹ̀, ṣíṣe ìdánwò ní ibùdó ìdánwò tàbí lórí ayélujára, àti àwọn ìdánwò àṣeṣe gidi. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú mẹ́fà, pẹ̀lú àyẹ̀wò kúkúrú lẹ́yìn rẹ̀, ìdánwò ìmọ̀ lẹ́yìn orí kọ̀ọ̀kan, àti ìdánwò ìbéèrè 20 ní ìparí."
  ],
  finalTask: "Ṣe ètò ìkẹ́kọ̀ọ́ àti ìdánwò Ìṣirò GED tìrẹ: ṣe GED Math Sample Test ọ̀fẹ́ lórí ged.com kí o sì kọ èsì rẹ sílẹ̀; kọ àwọn kókó ẹ̀kọ́ 3 tí o kò mọ̀ dáadáa jù láti inú rẹ̀ àti láti inú àwọn ìdánwò ẹ̀kọ́ yìí; kọ ètò ìkẹ́kọ̀ọ́ ọ̀sẹ̀-sí-ọ̀sẹ̀ pẹ̀lú ọjọ́ gidi fún ọ̀sẹ̀ 6 sí 8 tó ń bọ̀ (kókó wo, ọjọ́ wo, fún ìgbà mélòó); yanjú ìbéèrè àṣeṣe 12 (2 láti inú ẹ̀kọ́ kọ̀ọ̀kan) kí o sì ṣàlàyé èyíkéyìí tí o ṣì; kí o sì kọ ọjọ́ tí o fẹ́ ṣe ìdánwò àṣeṣe GED Ready àti ìdánwò Ìṣirò GED gidi, lẹ́yìn tí o bá ti ṣàyẹ̀wò àwọn òfin àti iye owó ìpínlẹ̀ rẹ lórí ged.com.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà àti ọ̀dọ́ tí kò ní ìwé-ẹ̀rí ilé-ẹ̀kọ́ girama: àwọn tí wọ́n ń padà sílé láti ẹ̀wọ̀n, àwọn aṣíkiri, àwọn ológun tẹ́lẹ̀ rí, àwọn òbí àti àwọn òṣìṣẹ́ tí wọ́n nílò ìwé-ẹ̀rí fún iṣẹ́, ìgbéga tàbí yunifásítì. Ọ̀pọ̀ lára wọn ti kúrò ní ilé-ẹ̀kọ́ fún ọdún púpọ̀; àwọn kan sì ní ìrírí búburú pẹ̀lú ìṣirò.",
    startingPoint: "Wọ́n lè ṣe àròpọ̀, àyọkúrò, ìsọdipúpọ̀ àti pínpín nọ́mbà odidi, nígbà púpọ̀ pẹ̀lú ẹ̀rọ ìṣirò. Ọ̀pọ̀ ti gbàgbé ìdá (fraction), nọ́mbà òdì (negative) àti ìdá-ọgọ́rùn-ún (percent), wọn kò sì fi bẹ́ẹ̀ mọ áljẹ́bírà. Ọ̀pọ̀ jù lọ kò tíì rí bí ìdánwò GED ṣe rí tàbí ẹ̀rọ ìṣirò rẹ̀.",
    gap: "Ìdánwò Ìṣirò GED ń béèrè ìṣirò nọ́mbà, ìdá-ọgọ́rùn-ún àti dátà, áljẹ́bírà, jìọ́mẹ́tírì pẹ̀lú ìwé àgbékalẹ̀, àti àwòrán ìyàwòrán, láàárín ìṣẹ́jú 115 lórí kọ̀mpútà. Àwọn akẹ́kọ̀ọ́ nílò láti mọ bí ìdánwò náà ṣe rí, láti ṣe àṣeṣe irú ìbéèrè kọ̀ọ̀kan pẹ̀lú àwọn àpẹẹrẹ tí a ti yanjú, àti láti tẹ̀lé ètò ìkẹ́kọ̀ọ́ kí wọ́n lè ṣe ìdánwò nígbà tí wọ́n bá ṣetán. Yíyege ń ṣí ọ̀nà sí iṣẹ́, ìdálẹ́kọ̀ọ́ àti yunifásítì.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ ìṣirò",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà fún ìdánwò àpẹẹrẹ GED ọ̀fẹ́; ìwé àti gègé fún àṣeṣe",
      "Ẹ̀rọ ìṣirò: ṣe àṣeṣe pẹ̀lú TI-30XS tí ó bá ṣeé ṣe, tàbí ẹ̀rọ ìṣirò sáyẹ́ǹsì ọ̀fẹ́ lórí ayélujára",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5 sí 6, pẹ̀lú ètò ìkẹ́kọ̀ọ́ ọ̀sẹ̀-sí-ọ̀sẹ̀ tí akẹ́kọ̀ọ́ fúnra rẹ̀ ṣe",
      "Àwọn òfin, iye owó àti ọ̀nà ìdánwò yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀, wọ́n sì lè yí padà: máa tọ́ka sí ged.com tàbí ọ́fíìsì ìpínlẹ̀ nígbà gbogbo",
      "Ẹ̀rù ìṣirò: àpẹẹrẹ púpọ̀ tí a ti yanjú, ṣíṣàyẹ̀wò ìdáhùn, kò sí ìkánjú àkókò nígbà àṣeṣe"
    ],
    prerequisites: "Àròpọ̀, àyọkúrò, ìsọdipúpọ̀ àti pínpín nọ́mbà odidi. Àwọn akẹ́kọ̀ọ́ tí kò dá wọn lójú nípa ìdá, nọ́mbà ẹlẹ́sẹ̀ (decimal) àti ìdá-ọgọ́rùn-ún lè kọ́kọ́ ṣe \"Ìṣirò Ojoojúmọ́ fún Iṣẹ́ àti Ìgbésí Ayé\"."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú ged.com àti GED Math Sample Test ọ̀fẹ́", action: "kọ àwọn ẹ̀ka, àkókò, òfin ẹ̀rọ ìṣirò àti irú ìbéèrè inú ìdánwò Ìṣirò GED, kí o sì kọ ètò ìkẹ́kọ̀ọ́ àti ìdánwò tó ní ọjọ́", standard: "pẹ̀lú ètò ọ̀sẹ̀-sí-ọ̀sẹ̀ fún ọ̀sẹ̀ 6 sí 8 àti ọjọ́ tí o fojú sí fún ìdánwò" },
    { id: "O2", condition: "Láìsí ẹ̀rọ ìṣirò", action: "yanjú ìbéèrè lórí ìtẹ̀léra iṣẹ́ ìṣirò, ìdá, nọ́mbà òdì, agbára (exponent) àti gbòǹgbò onígun mẹ́rin (square root)", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìbéèrè ọ̀rọ̀ àti dátà kékeré", action: "yanjú ìbéèrè ìpín, ìbáradọ́gba àti ìdá-ọgọ́rùn-ún, kí o sì rí àròpín, àárín, èyí tó pọ̀ jù àti ìyàtọ̀ (range)", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O4", condition: "Tí a bá fún ọ ní ìbéèrè ọ̀rọ̀ tàbí ìdọ́gba", action: "kọ kí o sì yanjú ìdọ́gba àti àìdọ́gba onílà-tààrà tí ó ní lẹ́tà àìmọ̀ kan", standard: "kí o gba ó kéré tán 4 nínú 5 tọ̀nà, kí o sì ṣàyẹ̀wò ìdáhùn kọ̀ọ̀kan nípa fífi í padà sínú rẹ̀" },
    { id: "O5", condition: "Pẹ̀lú ìwé àgbékalẹ̀ àti ẹ̀rọ ìṣirò", action: "ṣírò àyíká, ààyè inú (area), ìwọ̀n inú (volume) àti ẹ̀gbẹ́ tó sọnù nínú onígun mẹ́ta onígun-ọ̀tún", standard: "kí o gba ó kéré tán 4 nínú 5 tọ̀nà, pẹ̀lú ẹ̀yà ìwọ̀n tó tọ́" },
    { id: "O6", condition: "Tí a bá fún ọ ní àwòrán ìyàwòrán, tábìlì, ojú àmì méjì tàbí function", action: "rí ìtẹ̀ (slope), ka àwọn iye, kí o sì ṣírò iye function náà", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìdánwò náà, nọ́mbà àti dátà",
      lessons: [
        {
          title: "Ìdánwò Ìṣirò GED àti ètò ìkẹ́kọ̀ọ́ rẹ",
          objectives: ["O1"],
          minutes: 6,
          goal: "Kọ bí ìdánwò Ìṣirò GED ṣe ń lọ, kí o sì bẹ̀rẹ̀ ètò ìkẹ́kọ̀ọ́ tó ní ọjọ́.",
          text: [
            "Ìdánwò GED ní ẹ̀ka mẹ́rin: Ìṣirò (Math), Èdè àti Kíkà (Reasoning Through Language Arts), Sáyẹ́ǹsì àti Ẹ̀kọ́ Àwùjọ (Social Studies). O lè ṣe wọ́n ní ọ̀kọ̀ọ̀kan. Ìdánwò Ìṣirò ni a ń pè ní Mathematical Reasoning. Ó ní apá mẹ́rin: Ìṣirò Ìpìlẹ̀, Jìọ́mẹ́tírì, Áljẹ́bírà Ìpìlẹ̀, àti Àwòrán Ìyàwòrán àti Function.",
            "Gẹ́gẹ́ bí ged.com ṣe sọ, ìdánwò Ìṣirò gba ìṣẹ́jú 115, pẹ̀lú àkókò fún ìtọ́sọ́nà àti àtúnyẹ̀wò. Ó ní apá, pẹ̀lú ìsinmi kúkúrú láàárín wọn. Wọ́n máa fún ọ ní ẹ̀rọ ìṣirò lórí ojú kọ̀mpútà ní apá 2; ní ibùdó ìdánwò, o lè mú ẹ̀rọ ìṣirò TI-30XS tìrẹ wá. Àwọn ìbéèrè kan gbọ́dọ̀ jẹ́ láìsí ẹ̀rọ ìṣirò, nítorí náà o tún nílò ìṣirò orí àti ti orí ìwé. Wọ́n máa fún ọ ní ìwé àgbékalẹ̀ àti ìwé ìtọ́sọ́nà ẹ̀rọ ìṣirò, nítorí náà o kò ní láti há àwọn àgbékalẹ̀ sórí.",
            "Irú ìbéèrè tó wà níbẹ̀ ni: yíyan ìdáhùn kan (multiple choice), fífà kí o sì jù sílẹ̀ (drag and drop), kíkún àlàfo (fill-in-the-blank), yíyan ibì kan (títẹ ibì kan lórí àwòrán ìyàwòrán tàbí àwòrán) àti àkójọ àṣàyàn tí ó ń ṣí sílẹ̀ (drop down). Wo ged.com kí o tó ṣe ìdánwò, nítorí àwọn kúlẹ̀kúlẹ̀ lè yí padà. Ní àwọn ìpínlẹ̀ kan, wọ́n ń lo ìdánwò HiSET dípò GED, tàbí pẹ̀lú rẹ̀; ìpínlẹ̀ rẹ ló ń pinnu.",
            "Bẹ̀rẹ̀ pẹ̀lú GED Math Sample Test ọ̀fẹ́ lórí ged.com. Ó máa fi ojú kọ̀mpútà ìdánwò àti irú ìbéèrè hàn ọ́. Lò ó láti rí àwọn kókó tí o kò mọ̀ dáadáa. Nígbà tí o bá ti sún mọ́ ọn, ìdánwò àṣeṣe gidi, GED Ready, máa sọ fún ọ bóyá ó ṣeé ṣe kí o ti ṣetán (wo iye owó rẹ̀ lórí ged.com). Lẹ́yìn náà ṣe ètò ìkẹ́kọ̀ọ́: ìgbà ìkẹ́kọ̀ọ́ kúkúrú, ọjọ́ púpọ̀ lọ́sẹ̀, kókó kan lẹ́ẹ̀kan."
          ],
          steps: ["Lọ sí ged.com kí o sì ka ojú-ewé ìdánwò Ìṣirò àti àwọn òfin ìpínlẹ̀ rẹ.", "Ṣe GED Math Sample Test ọ̀fẹ́ kí o sì kọ èsì rẹ sílẹ̀.", "Kọ àwọn kókó tí ó le fún ọ sílẹ̀.", "Yan ọjọ́ àti àkókò ìkẹ́kọ̀ọ́ fún ọ̀sẹ̀ 6 sí 8 tó ń bọ̀, pẹ̀lú ọjọ́ gidi.", "Fi kókó kan sí ọjọ́ ìkẹ́kọ̀ọ́ kọ̀ọ̀kan, bẹ̀rẹ̀ pẹ̀lú èyí tí o kò mọ̀ jù.", "Yan ọjọ́ láti ṣe GED Ready, àti ọjọ́ tí o fojú sí fún ìdánwò gidi."],
          words: [["GED", "ìdánwò tó dọ́gba pẹ̀lú ti ilé-ẹ̀kọ́ girama láti ọ̀dọ̀ GED Testing Service; yíyege gbogbo ẹ̀ka mẹ́rin ń fúnni ní ìwé-ẹ̀rí tó dọ́gba pẹ̀lú ti ilé-ẹ̀kọ́ girama."], ["HiSET", "ìdánwò míì tó dọ́gba pẹ̀lú ti ilé-ẹ̀kọ́ girama tí àwọn ìpínlẹ̀ kan ń lò."], ["Ìwé àgbékalẹ̀ (formula sheet)", "ìwé tí ó ní àwọn àgbékalẹ̀ ìṣirò, tí wọ́n ń fún ọ nígbà ìdánwò."], ["TI-30XS", "irú ẹ̀rọ ìṣirò sáyẹ́ǹsì tí a ń lò nínú ìdánwò Ìṣirò GED."], ["GED Ready", "ìdánwò àṣeṣe GED gidi tí ó ń fihàn bóyá ó ṣeé ṣe kí o ti ṣetán."], ["Ètò ìkẹ́kọ̀ọ́", "àkọsílẹ̀ ohun tí o máa kọ́ àti ìgbà tí o máa kọ́ ọ."]],
          slides: [
            { title: "Ìṣirò GED (Mathematical Reasoning)", bullets: ["Ìṣirò Ìpìlẹ̀, Jìọ́mẹ́tírì, Áljẹ́bírà Ìpìlẹ̀, Àwòrán Ìyàwòrán àti Function", "Ìṣẹ́jú 115, lórí kọ̀mpútà, pẹ̀lú ìsinmi kúkúrú", "Wọ́n ń fúnni ní ìwé àgbékalẹ̀ àti ìwé ìtọ́sọ́nà ẹ̀rọ ìṣirò"] },
            { title: "Ẹ̀rọ ìṣirò àti irú ìbéèrè", bullets: ["Ẹ̀rọ ìṣirò lórí ojú kọ̀mpútà ní apá 2; tàbí TI-30XS tìrẹ ní ibùdó ìdánwò", "Àwọn ìbéèrè kan láìsí ẹ̀rọ ìṣirò", "Yíyan ìdáhùn, fífà àti jíjù sílẹ̀, kíkún àlàfo, yíyan ibì kan, drop down"] },
            { title: "Àwọn ìdánwò àṣeṣe", bullets: ["GED Math Sample Test ọ̀fẹ́ lórí ged.com", "GED Ready: ìdánwò àṣeṣe gidi (wo iye owó rẹ̀)", "Àwọn ìpínlẹ̀ kan ń lo HiSET: wo ti ìpínlẹ̀ rẹ"] },
            { title: "Ètò ìkẹ́kọ̀ọ́ rẹ", bullets: ["Bẹ̀rẹ̀ pẹ̀lú àwọn kókó tí o kò mọ̀ jù", "Ìgbà kúkúrú, ọjọ́ púpọ̀ lọ́sẹ̀, ọjọ́ gidi", "Yan ọjọ́ GED Ready àti ọjọ́ tí o fojú sí fún ìdánwò"] }
          ],
          tryIt: "Lọ sí ged.com kí o sì ṣe GED Math Sample Test ọ̀fẹ́. Kọ èsì rẹ sílẹ̀ àti àwọn kókó tí ó le fún ọ. Lẹ́yìn náà, lórí ìwé, ṣe kàlẹ́ńdà fún ọ̀sẹ̀ 6 sí 8 tó ń bọ̀: fi òrùka yí àwọn ọjọ́ ìkẹ́kọ̀ọ́ rẹ ká, kọ àkókò fún ọ̀kọ̀ọ̀kan, kí o sì fi kókó tí ó le jù fún ọ sí ọjọ́ àkọ́kọ́. Èyí ni ìbẹ̀rẹ̀ iṣẹ́ ìkẹyìn rẹ.",
          youCanNow: "ṣàlàyé ìdánwò Ìṣirò GED (ohun tó wà nínú rẹ̀, àkókò, ẹ̀rọ ìṣirò, ìwé àgbékalẹ̀, irú ìbéèrè) kí o sì bẹ̀rẹ̀ ètò ìkẹ́kọ̀ọ́ tó ní ọjọ́.",
          quickCheck: [
            { objective: "O1", q: "Ṣé o ní láti há àwọn àgbékalẹ̀ sórí fún ìdánwò Ìṣirò GED?", options: ["Bẹ́ẹ̀ ni, gbogbo àgbékalẹ̀", "Rárá, wọ́n ń fúnni ní ìwé àgbékalẹ̀", "Àwọn tó wà lẹ́yìn ẹ̀rọ ìṣirò nìkan", "Tí o bá ṣe ìdánwò lórí ayélujára nìkan"], answer: 1, why: "GED Testing Service ń fúnni ní ìwé àgbékalẹ̀ nígbà ìdánwò." },
            { objective: "O1", q: "Níbo ni o ti yẹ kí o wo àwọn òfin àti iye owó GED ìpínlẹ̀ rẹ lónìí?", options: ["Ọ̀rọ̀ kan lórí ìkànnì àjọlò", "Ọ̀rẹ́ kan tí ó ṣe ìdánwò ní ọdún púpọ̀ sẹ́yìn", "ged.com tàbí ọ́fíìsì ẹ̀kọ́ àgbà ìpínlẹ̀ rẹ", "Ẹ̀kọ́ yìí nìkan"], answer: 2, why: "Àwọn òfin àti iye owó ń yí padà, wọ́n sì yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀; ojú-òpó wẹ́ẹ̀bù gidi ni orísun." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE, HISET]
        },
        {
          title: "Ìṣirò nọ́mbà láìsí ẹ̀rọ ìṣirò",
          objectives: ["O2"],
          minutes: 6,
          goal: "Yanjú ìbéèrè ìtẹ̀léra iṣẹ́ ìṣirò, ìdá, nọ́mbà òdì, agbára àti gbòǹgbò onígun mẹ́rin pẹ̀lú ọwọ́.",
          text: [
            "Ìtẹ̀léra iṣẹ́ ìṣirò: kọ́kọ́ ṣe ohun inú àkámọ́ (Parentheses), lẹ́yìn náà agbára (Exponents), lẹ́yìn náà ìsọdipúpọ̀ àti pínpín láti òsì sí ọ̀tún, lẹ́yìn náà àròpọ̀ àti àyọkúrò láti òsì sí ọ̀tún. Àwọn kan ń rántí rẹ̀ pẹ̀lú PEMDAS. Àpẹẹrẹ: 3 + 4 x (6 - 2)^2 / 8. Àkámọ́: 6 - 2 = 4. Agbára: 4^2 = 16. Ìsọdipúpọ̀ àti pínpín láti òsì sí ọ̀tún: 4 x 16 = 64, 64 / 8 = 8. Àròpọ̀: 3 + 8 = 11.",
            "Ìdá (fraction): láti sọ wọ́n di púpọ̀, sọ òkè di púpọ̀ pẹ̀lú òkè àti ìsàlẹ̀ pẹ̀lú ìsàlẹ̀: 2/3 x 3/4 = 6/12 = 1/2. Láti pín, yí ìdá kejì padà kí o sì sọ di púpọ̀: 3/4 / 1/2 = 3/4 x 2/1 = 6/4 = 1 1/2. Láti fi ìdá àti nọ́mbà ẹlẹ́sẹ̀ (decimal) wé ara wọn, sọ gbogbo wọn di nọ́mbà ẹlẹ́sẹ̀: 2/3 jẹ́ nǹkan bí 0.667, nítorí náà láti kékeré jù lọ: 0.65, 2/3, 0.7.",
            "Nọ́mbà òdì (negative): -5 + 8 = 3. Yíyọ nọ́mbà òdì kúrò jẹ́ àròpọ̀: 6 - (-2) = 8. Òdì lọ́nà òdì jẹ́ rere (positive): -3 x -4 = 12; òdì lọ́nà rere jẹ́ òdì: -3 x 4 = -12. Lórí ìlà nọ́mbà, àwọn nọ́mbà ń tóbi sí i bí o ṣe ń lọ sí ọ̀tún.",
            "Agbára àti gbòǹgbò: 2^5 túmọ̀ sí 2 x 2 x 2 x 2 x 2 = 32. Gbòǹgbò onígun mẹ́rin (square root) ń yí ìsọdi-onígun-mẹ́rin padà: gbòǹgbò onígun mẹ́rin 49 jẹ́ 7, nítorí 7 x 7 = 49. Gbòǹgbò onígun mẹ́rin 50 pọ̀ ju 7 lọ díẹ̀, nítorí 50 wà láàárín 49 àti 64."
          ],
          steps: ["Àkámọ́ ní àkọ́kọ́.", "Lẹ́yìn náà agbára àti gbòǹgbò.", "Lẹ́yìn náà ìsọdipúpọ̀ àti pínpín, láti òsì sí ọ̀tún.", "Lẹ́yìn náà àròpọ̀ àti àyọkúrò, láti òsì sí ọ̀tún.", "Ìdá: sọ di púpọ̀ ní tààrà; láti pín, yí ìkejì padà kí o sì sọ di púpọ̀.", "Àmì: àmì kan náà fún ìdáhùn rere; àmì tó yàtọ̀ fún ìdáhùn òdì."],
          words: [["Ìtẹ̀léra iṣẹ́ ìṣirò (order of operations)", "ìtẹ̀léra tí gbogbo ènìyàn gbà fún ṣíṣe ìṣirò: àkámọ́, agbára, ìsọdipúpọ̀ àti pínpín, àròpọ̀ àti àyọkúrò."], ["Agbára (exponent)", "nọ́mbà kékeré lókè tí ó ń sọ iye ìgbà tí a máa sọ nọ́mbà kan di púpọ̀ pẹ̀lú ara rẹ̀: 2^3 = 2 x 2 x 2."], ["Gbòǹgbò onígun mẹ́rin (square root)", "nọ́mbà tí, tí a bá sọ ọ́ di púpọ̀ pẹ̀lú ara rẹ̀, máa fún wa ní nọ́mbà náà: gbòǹgbò onígun mẹ́rin 25 jẹ́ 5."], ["Nọ́mbà òdì (negative number)", "nọ́mbà tí ó kéré ju òdo lọ, bí -4."], ["Ìlà nọ́mbà (number line)", "ìlà tí àwọn nọ́mbà wà lórí rẹ̀ ní ìtẹ̀léra; àwọn nọ́mbà ń tóbi sí i sí ọ̀tún."]],
          slides: [
            { title: "Ìtẹ̀léra iṣẹ́ ìṣirò", bullets: ["Àkámọ́, Agbára", "Ìsọdipúpọ̀ àti Pínpín, láti òsì sí ọ̀tún", "Àròpọ̀ àti Àyọkúrò, láti òsì sí ọ̀tún", "3 + 4 x (6 - 2)^2 / 8 = 11"] },
            { title: "Ìdá", bullets: ["Ìsọdipúpọ̀: 2/3 x 3/4 = 6/12 = 1/2", "Pínpín: yí padà kí o sì sọ di púpọ̀: 3/4 / 1/2 = 1 1/2", "Ìfiwéra: sọ wọ́n di nọ́mbà ẹlẹ́sẹ̀"] },
            { title: "Nọ́mbà òdì", bullets: ["-5 + 8 = 3", "6 - (-2) = 8", "-3 x -4 = 12; -3 x 4 = -12"] },
            { title: "Agbára àti gbòǹgbò", bullets: ["2^5 = 32", "Gbòǹgbò onígun mẹ́rin 49 = 7", "Gbòǹgbò onígun mẹ́rin 50 pọ̀ ju 7 lọ díẹ̀"] }
          ],
          tryIt: "Ṣe àṣeṣe láìsí ẹ̀rọ ìṣirò (ìdáhùn wà nísàlẹ̀): (1) 10 - 2 x 3 + 4. (2) 5/6 x 3/5. (3) 2/3 / 4/9. (4) -7 - (-10). (5) 3^3 - gbòǹgbò onígun mẹ́rin 16. Ìdáhùn: (1) 10 - 6 + 4 = 8 (ìsọdipúpọ̀ ní àkọ́kọ́). (2) 15/30 = 1/2. (3) 2/3 x 9/4 = 18/12 = 1 1/2. (4) -7 + 10 = 3. (5) 27 - 4 = 23. Fún èyíkéyìí tí o ṣì, wá ìgbésẹ̀ tí ó ti bàjẹ́, kí o sì kọ òfin tí o nílò sílẹ̀.",
          youCanNow: "ṣe ìtẹ̀léra iṣẹ́ ìṣirò, ìdá, nọ́mbà òdì, agbára àti gbòǹgbò onígun mẹ́rin pẹ̀lú ọwọ́.",
          quickCheck: [
            { objective: "O2", q: "Kí ni 8 + 12 / 4?", options: ["5", "20", "14", "11"], answer: 3, why: "Pín kí o tó ṣe àròpọ̀: 12 / 4 = 3, lẹ́yìn náà 8 + 3 = 11." },
            { objective: "O2", q: "Kí ni -6 x -5?", options: ["30", "-30", "-11", "11"], answer: 0, why: "Òdì lọ́nà òdì jẹ́ rere: 30." }
          ],
          sources: [GED_MATH]
        },
        {
          title: "Ìpín, ìbáradọ́gba, ìdá-ọgọ́rùn-ún àti dátà",
          objectives: ["O3"],
          minutes: 6,
          goal: "Yanjú ìbéèrè ìpín, ìbáradọ́gba àti ìdá-ọgọ́rùn-ún, kí o sì rí àròpín, àárín, èyí tó pọ̀ jù àti ìyàtọ̀ (range).",
          text: [
            "Ìpín (ratio) ń fi iye méjì wé ara wọn: ife ìyẹ̀fun 3 fún ife ṣúgà 2 kọ̀ọ̀kan jẹ́ 3:2. Ìbáradọ́gba (proportion) ń sọ pé ìpín méjì dọ́gba. Láti yanjú rẹ̀, sọ di púpọ̀ ní ìdábùú (cross-multiply). Àpẹẹrẹ: ife ìyẹ̀fun 3 ń ṣe bisikíìtì 24. Mélòó ni fún bisikíìtì 40? 3/24 = x/40, nítorí náà 24x = 120 àti x = ife 5.",
            "Irú ìbéèrè ìdá-ọgọ́rùn-ún mẹ́ta: (1) Kí ni 35% ti 80? 0.35 x 80 = 28. (2) 18 jẹ́ ìdá-ọgọ́rùn-ún mélòó ti 72? 18 / 72 = 0.25 = 25%. (3) Ìyípadà ìdá-ọgọ́rùn-ún: iye owó kan lọ láti $40 sí $50. Ìyípadà jẹ́ $10, 10 / 40 = 0.25, nítorí náà ó lọ sókè 25%. Máa pín ìyípadà pẹ̀lú iye ÀKỌ́KỌ́ nígbà gbogbo.",
            "Dátà: fún àwọn nọ́mbà 4, 7, 7, 9, 13, àròpín (mean) ni àpapọ̀ tí a pín pẹ̀lú iye wọn: 40 / 5 = 8. Àárín (median) ni nọ́mbà tí ó wà láàárín nígbà tí wọ́n bá wà ní ìtẹ̀léra: 7. Èyí tó pọ̀ jù (mode) ni nọ́mbà tí ó farahàn jù: 7. Ìyàtọ̀ (range) ni èyí tó tóbi jù yọ èyí tó kéré jù: 13 - 4 = 9. Tí nọ́mbà méjì bá wà láàárín, àárín jẹ́ ààbọ̀ ọ̀nà láàárín wọn.",
            "Ìṣeéṣe (probability) ni àǹfààní pé nǹkan kan máa ṣẹlẹ̀: iye ọ̀nà tí ó lè gbà ṣẹlẹ̀ / iye gbogbo àbájáde. Àpò kan ní òkúta pupa 3 àti búlúù 9: àǹfààní pupa jẹ́ 3/12 = 1/4, tàbí 25%."
          ],
          steps: ["Ìbáradọ́gba: kọ ìdá méjì tó dọ́gba pẹ̀lú ẹ̀yà ìwọ̀n kan náà ní ibi kan náà, sọ di púpọ̀ ní ìdábùú, kí o sì pín.", "Ìdá-ọgọ́rùn-ún ti nọ́mbà kan: sọ ìdá-ọgọ́rùn-ún di nọ́mbà ẹlẹ́sẹ̀ kí o sì sọ di púpọ̀.", "Ìdá-ọgọ́rùn-ún mélòó: apá / odidi, lẹ́yìn náà sọ ọ́ di ìdá-ọgọ́rùn-ún.", "Ìyípadà ìdá-ọgọ́rùn-ún: ìyípadà / iye àkọ́kọ́.", "Àròpín: ṣe àròpọ̀, lẹ́yìn náà pín pẹ̀lú iye wọn. Àárín: tò wọ́n, wá èyí tó wà láàárín.", "Èyí tó pọ̀ jù: èyí tí ó farahàn jù. Ìyàtọ̀: èyí tó tóbi jù yọ èyí tó kéré jù."],
          words: [["Ìpín (ratio)", "ìfiwéra iye méjì, bí 3:2."], ["Ìbáradọ́gba (proportion)", "ìpín méjì tó dọ́gba, bí 3/24 = 5/40."], ["Ìsọdipúpọ̀ ní ìdábùú (cross-multiply)", "sọ òkè ìdá kọ̀ọ̀kan di púpọ̀ pẹ̀lú ìsàlẹ̀ èkejì láti yanjú ìbáradọ́gba."], ["Àròpín (mean)", "àwọn nọ́mbà tí a ṣe àròpọ̀ wọn tí a sì pín pẹ̀lú iye wọn."], ["Àárín (median)", "nọ́mbà tí ó wà láàárín nígbà tí àwọn nọ́mbà bá wà ní ìtẹ̀léra."], ["Èyí tó pọ̀ jù (mode)", "nọ́mbà tí ó farahàn ní ìgbà púpọ̀ jù."], ["Ìyàtọ̀ (range)", "nọ́mbà tó tóbi jù yọ èyí tó kéré jù."], ["Ìṣeéṣe (probability)", "àǹfààní pé nǹkan kan máa ṣẹlẹ̀, láti 0 (kò ní ṣẹlẹ̀ láé) sí 1 (máa ṣẹlẹ̀ nígbà gbogbo)."]],
          slides: [
            { title: "Ìpín àti ìbáradọ́gba", bullets: ["Ife 3 fún bisikíìtì 24; ife x fún 40", "3/24 = x/40, nítorí náà 24x = 120", "x = ife 5"] },
            { title: "Irú ìbéèrè ìdá-ọgọ́rùn-ún mẹ́ta", bullets: ["35% ti 80 = 0.35 x 80 = 28", "18 nínú 72 = 18 / 72 = 25%", "$40 sí $50: 10 / 40 = ìbísí 25%"] },
            { title: "Dátà: 4, 7, 7, 9, 13", bullets: ["Àròpín: 40 / 5 = 8", "Àárín: 7; Èyí tó pọ̀ jù: 7", "Ìyàtọ̀: 13 - 4 = 9"] },
            { title: "Ìṣeéṣe", bullets: ["Ọ̀nà tí ó lè gbà ṣẹlẹ̀ / gbogbo àbájáde", "Pupa 3 nínú òkúta 12: 3/12 = 1/4 = 25%"] }
          ],
          tryIt: "Ṣe àṣeṣe (ìdáhùn wà nísàlẹ̀): (1) Ìwọ̀n máàpù kan jẹ́ ínṣì 1 : máìlì 20. Máìlì mélòó ni ínṣì 3.5? (2) Kí ni 15% ti 260? (3) Fóònù $250 ti di $200 báyìí. Kí ni ìdínkù ìdá-ọgọ́rùn-ún? (4) Wá àròpín, àárín, èyí tó pọ̀ jù àti ìyàtọ̀ ti 12, 15, 15, 18, 20, 22. Ìdáhùn: (1) máìlì 70. (2) 39. (3) 50 / 250 = ìdínkù 20%. (4) Àròpín 102 / 6 = 17; àárín jẹ́ ààbọ̀ láàárín 15 àti 18 = 16.5; èyí tó pọ̀ jù 15; ìyàtọ̀ 10.",
          youCanNow: "yanjú ìbáradọ́gba àti irú ìbéèrè ìdá-ọgọ́rùn-ún mẹ́ta, kí o sì ṣàpèjúwe dátà pẹ̀lú àròpín, àárín, èyí tó pọ̀ jù àti ìyàtọ̀.",
          quickCheck: [
            { objective: "O3", q: "Kí ni àárín (median) ti 3, 9, 4, 8, 6?", options: ["4", "9", "6", "30"], answer: 2, why: "Ní ìtẹ̀léra: 3, 4, 6, 8, 9. Nọ́mbà tó wà láàárín jẹ́ 6." },
            { objective: "O3", q: "Ohun $60 kan gòkè sí $75. Kí ni ìbísí ìdá-ọgọ́rùn-ún?", options: ["15%", "20%", "80%", "25%"], answer: 3, why: "Ìyípadà jẹ́ 15, 15 / 60 = 0.25 = 25%." }
          ],
          sources: [GED_SUBJECTS]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìdánwò náà, nọ́mbà àti dátà",
        questions: [
          { objective: "O1", q: "Èwo ni ọ̀kan lára apá mẹ́rin ìdánwò Ìṣirò GED?", options: ["Sípẹ́lì ọ̀rọ̀", "Àwòrán Ìyàwòrán àti Function", "Ìtàn àgbáyé", "Bí o ṣe ń tẹ̀wé yára tó"], answer: 1, why: "Ìdánwò ìṣirò ní Ìṣirò Ìpìlẹ̀, Jìọ́mẹ́tírì, Áljẹ́bírà Ìpìlẹ̀, àti Àwòrán Ìyàwòrán àti Function." },
          { objective: "O2", q: "Kí ni 2 + 3 x 4^2?", options: ["50", "80", "26", "400"], answer: 0, why: "Agbára ní àkọ́kọ́: 16. Ìsọdipúpọ̀: 48. Àròpọ̀: 50." },
          { objective: "O2", q: "Kí ni 3/4 / 3/8?", options: ["9/32", "1/2", "3/8", "2"], answer: 3, why: "Yí padà kí o sì sọ di púpọ̀: 3/4 x 8/3 = 24/12 = 2." },
          { objective: "O3", q: "Òṣìṣẹ́ 5 lè di páálí 40 ní wákàtí kan. Ní ìwọ̀n kan náà, páálí mélòó ni òṣìṣẹ́ 8 lè dì?", options: ["43", "50", "64", "80"], answer: 2, why: "40/5 = x/8, nítorí náà 5x = 320 àti x = 64." },
          { objective: "O3", q: "Kí ni àròpín (mean) ti 10, 14, 15 àti 21?", options: ["15", "14.5", "11", "60"], answer: 0, why: "Àpapọ̀ 60, tí a pín pẹ̀lú nọ́mbà 4, jẹ́ 15." }
        ]
      }
    },
    {
      name: "Orí 2: Áljẹ́bírà, jìọ́mẹ́tírì àti àwòrán ìyàwòrán",
      lessons: [
        {
          title: "Yíyanjú ìdọ́gba àti àìdọ́gba",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kọ kí o sì yanjú ìdọ́gba àti àìdọ́gba tí ó ní lẹ́tà àìmọ̀ kan, kí o sì ṣàyẹ̀wò ìdáhùn kọ̀ọ̀kan.",
          text: [
            "Lẹ́tà àìmọ̀ (variable) jẹ́ lẹ́tà bí x tí ó dúró fún nọ́mbà tí a kò mọ̀. Ọ̀rọ̀ máa ń di ìṣirò: \"5 ju ìlọ́po méjì nọ́mbà kan lọ\" jẹ́ 2x + 5. \"Nọ́mbà kan tí a dín kù ní 7\" jẹ́ x - 7. \"Ìsọdipúpọ̀ 4 àti nọ́mbà kan\" jẹ́ 4x.",
            "Láti yanjú ìdọ́gba (equation), ṣe ohun kan náà sí ẹ̀gbẹ́ méjèèjì títí x yóò fi dá wà. Kọ́kọ́ yí àròpọ̀ tàbí àyọkúrò padà, lẹ́yìn náà ìsọdipúpọ̀ tàbí pínpín. Àpẹẹrẹ: 3x - 7 = 20. Fi 7 kún un: 3x = 27. Pín pẹ̀lú 3: x = 9. Ṣàyẹ̀wò: 3 x 9 - 7 = 20. Bẹ́ẹ̀ ni. Àpẹẹrẹ pẹ̀lú àkámọ́: 2(x + 4) = 18. Pín pẹ̀lú 2: x + 4 = 9, nítorí náà x = 5.",
            "Ìbéèrè ọ̀rọ̀: ètò fóònù kan jẹ́ $25 lóṣù pẹ̀lú $0.10 fún ọ̀rọ̀ ìránṣẹ́ (text) kọ̀ọ̀kan. Owó tí wọ́n gbà jẹ́ $32. Ọ̀rọ̀ ìránṣẹ́ mélòó? 25 + 0.10t = 32. Yọ 25 kúrò: 0.10t = 7. Pín pẹ̀lú 0.10: t = ọ̀rọ̀ ìránṣẹ́ 70.",
            "Àìdọ́gba (inequality) ń lo <, >, <= tàbí >=, a sì ń yanjú wọn ní ọ̀nà kan náà, pẹ̀lú òfin kan: nígbà tí o bá sọ ẹ̀gbẹ́ méjèèjì di púpọ̀ tàbí pín wọn pẹ̀lú nọ́mbà òdì, yí àmì náà padà. 4x + 3 > 19 fúnni ní 4x > 16, nítorí náà x > 4. Ṣùgbọ́n -2x <= 10 fúnni ní x >= -5. Nínú ìbéèrè yíyan ìdáhùn, o tún lè ṣàyẹ̀wò nípa fífi ìdáhùn kọ̀ọ̀kan padà sínú ìbéèrè náà."
          ],
          steps: ["Sọ ọ̀rọ̀ náà di ìdọ́gba pẹ̀lú lẹ́tà kan fún nọ́mbà àìmọ̀.", "Yí àròpọ̀ tàbí àyọkúrò padà ní ẹ̀gbẹ́ méjèèjì.", "Yí ìsọdipúpọ̀ tàbí pínpín padà ní ẹ̀gbẹ́ méjèèjì.", "Àìdọ́gba: yí àmì padà tí o bá sọ di púpọ̀ tàbí pín pẹ̀lú nọ́mbà òdì.", "Ṣàyẹ̀wò: fi ìdáhùn rẹ padà sínú ìbéèrè àkọ́kọ́."],
          words: [["Lẹ́tà àìmọ̀ (variable)", "lẹ́tà tí ó dúró fún nọ́mbà tí a kò mọ̀."], ["Àsọyé ìṣirò (expression)", "nọ́mbà, lẹ́tà àti iṣẹ́ ìṣirò láìsí àmì ìdọ́gba, bí 2x + 5."], ["Ìdọ́gba (equation)", "gbólóhùn ìṣirò tí ó ní àmì ìdọ́gba, bí 3x - 7 = 20."], ["Àìdọ́gba (inequality)", "gbólóhùn ìṣirò tí ó ń lo <, >, <= tàbí >= dípò àmì ìdọ́gba."], ["Yanjú", "wá iye lẹ́tà àìmọ̀ tí ó mú kí gbólóhùn náà jẹ́ òtítọ́."]],
          slides: [
            { title: "Sísọ ọ̀rọ̀ di ìṣirò", bullets: ["5 ju ìlọ́po méjì nọ́mbà kan lọ: 2x + 5", "Nọ́mbà kan tí a dín kù ní 7: x - 7", "Ìsọdipúpọ̀ 4 àti nọ́mbà kan: 4x"] },
            { title: "Yíyanjú ìdọ́gba", bullets: ["3x - 7 = 20", "Fi 7 kún un: 3x = 27; pín pẹ̀lú 3: x = 9", "Ṣàyẹ̀wò: 3 x 9 - 7 = 20"] },
            { title: "Ìbéèrè ọ̀rọ̀ kan", bullets: ["$25 lóṣù + $0.10 fún text kọ̀ọ̀kan = $32", "25 + 0.10t = 32, nítorí náà 0.10t = 7", "t = ọ̀rọ̀ ìránṣẹ́ 70"] },
            { title: "Àìdọ́gba", bullets: ["Yanjú rẹ̀ bí ìdọ́gba", "Sísọ di púpọ̀ tàbí pínpín pẹ̀lú nọ́mbà òdì: yí àmì padà", "-2x <= 10 fúnni ní x >= -5"] }
          ],
          tryIt: "Ṣe àṣeṣe (ìdáhùn wà nísàlẹ̀): (1) Kọ \"8 dín ní ìlọ́po mẹ́ta nọ́mbà kan\" bí àsọyé ìṣirò. (2) Yanjú 5x + 6 = 41. (3) Yanjú 4(x - 2) = 28. (4) Takisí kan ń gba $3 pẹ̀lú $2 fún máìlì kọ̀ọ̀kan. Ìrìn-àjò náà jẹ́ $19. Máìlì mélòó? (5) Yanjú -3x + 1 > 13. Ìdáhùn: (1) 3x - 8. (2) 5x = 35, x = 7. (3) x - 2 = 7, x = 9. (4) 3 + 2m = 19, m = máìlì 8. (5) -3x > 12, nítorí náà x < -4 (yí àmì padà). Ṣàyẹ̀wò ìdáhùn kọ̀ọ̀kan nípa fífi í padà sínú rẹ̀.",
          youCanNow: "sọ ọ̀rọ̀ di ìdọ́gba, yanjú ìdọ́gba àti àìdọ́gba, kí o sì ṣàyẹ̀wò àwọn ìdáhùn rẹ.",
          quickCheck: [
            { objective: "O4", q: "Yanjú: x / 4 + 3 = 8", options: ["x = 44", "x = 5", "x = 20", "x = 1.25"], answer: 2, why: "Yọ 3 kúrò: x / 4 = 5. Sọ di púpọ̀ pẹ̀lú 4: x = 20." },
            { objective: "O4", q: "Yanjú: -5x < 20", options: ["x > -4", "x < -4", "x < 4", "x > 4"], answer: 0, why: "Pín pẹ̀lú -5 kí o sì yí àmì padà: x > -4." }
          ],
          sources: [GED_SUBJECTS]
        },
        {
          title: "Jìọ́mẹ́tírì pẹ̀lú ìwé àgbékalẹ̀ àti ẹ̀rọ ìṣirò",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣírò àyíká, ààyè inú, ìwọ̀n inú àti ẹ̀gbẹ́ tó sọnù nínú onígun mẹ́ta onígun-ọ̀tún pẹ̀lú ìwé àgbékalẹ̀ àti ẹ̀rọ ìṣirò.",
          text: [
            "Àyíká (perimeter) ni ìjìnnà yíká ìrísí kan; ṣe àròpọ̀ àwọn ẹ̀gbẹ́. Ààyè inú (area) ni ààyè inú rẹ̀, ní ẹ̀yà onígun mẹ́rin (square units). Ìwọ̀n inú (volume) ni ààyè inú nǹkan onígun-mẹ́ta-ìhà (3-D), ní ẹ̀yà kíúbù (cubic units). Onígun mẹ́rin gígùn tí ó jẹ́ ẹsẹ̀ bàtà 8 lọ́nà 5 ní àyíká 2 x (8 + 5) = ẹsẹ̀ bàtà 26 àti ààyè inú 8 x 5 = ẹsẹ̀ bàtà onígun mẹ́rin 40. Onígun mẹ́ta tí ìpìlẹ̀ rẹ̀ jẹ́ 10, tí gíga rẹ̀ jẹ́ 6 ní ààyè inú 1/2 x 10 x 6 = 30.",
            "Òbìrí (circle) ń lo pi, nǹkan bí 3.14 (ẹ̀rọ ìṣirò ní bọ́tìnì pi). Fún òbìrí tí rédíọ́sì rẹ̀ jẹ́ 3: ààyè inú = pi x r^2 = nǹkan bí 28.27 ẹ̀yà onígun mẹ́rin; àyíká òbìrí (circumference) = 2 x pi x r = nǹkan bí 18.85. Dayámítà jẹ́ ìlọ́po méjì rédíọ́sì, nítorí náà ka ìbéèrè dáadáa láti mọ èyí tí ó fún ọ.",
            "Ìwọ̀n inú: àpótí 4 lọ́nà 3 lọ́nà 2 ní ìwọ̀n inú 4 x 3 x 2 = 24 ẹ̀yà kíúbù. Sílíńdà tí rédíọ́sì rẹ̀ jẹ́ 2, tí gíga rẹ̀ jẹ́ 5 ní ìwọ̀n inú pi x r^2 x h = pi x 4 x 5 = nǹkan bí 62.83 ẹ̀yà kíúbù.",
            "Onígun mẹ́ta onígun-ọ̀tún (right triangle): a^2 + b^2 = c^2 (òfin Pythagoras), níbi tí c jẹ́ ẹ̀gbẹ́ tó gùn jù, tí ó kọjú sí igun onígun mẹ́rin. Tí ẹsẹ̀ méjì bá jẹ́ 6 àti 8, c^2 = 36 + 64 = 100, nítorí náà c = 10. Wọ́n máa fún ọ ní ìwé àgbékalẹ̀ nínú ìdánwò: ṣe àṣeṣe pẹ̀lú ìwé ti lọ́wọ́lọ́wọ́ láti ged.com kí o lè mọ ibi tí àgbékalẹ̀ kọ̀ọ̀kan wà. Lórí TI-30XS, lo bọ́tìnì (-) fún nọ́mbà òdì àti bọ́tìnì x^2 fún ìsọdi-onígun-mẹ́rin; ìwé ìtọ́sọ́nà ẹ̀rọ ìṣirò GED ń fi àwọn bọ́tìnì hàn."
          ],
          steps: ["Ya ìrísí náà kí o sì kọ ohun tí o mọ̀ sí i.", "Pinnu: àyíká (yíká), ààyè inú (inú, pẹlẹbẹ) tàbí ìwọ̀n inú (inú, 3-D)?", "Wá àgbékalẹ̀ náà lórí ìwé àgbékalẹ̀.", "Fi àwọn nọ́mbà sínú rẹ̀ kí o sì lo ẹ̀rọ ìṣirò.", "Kọ ẹ̀yà ìwọ̀n: ẹsẹ̀ bàtà, ẹsẹ̀ bàtà onígun mẹ́rin tàbí ẹsẹ̀ bàtà kíúbù.", "Béèrè: ṣé ìdáhùn náà bá àwòrán náà mu?"],
          words: [["Àyíká (perimeter)", "ìjìnnà yíká ìrísí pẹlẹbẹ kan."], ["Ààyè inú (area)", "ààyè inú ìrísí pẹlẹbẹ kan, ní ẹ̀yà onígun mẹ́rin."], ["Ìwọ̀n inú (volume)", "ààyè inú nǹkan 3-D, ní ẹ̀yà kíúbù."], ["Rédíọ́sì (radius)", "ìjìnnà láti àárín òbìrí sí etí rẹ̀; dayámítà jẹ́ ìlọ́po méjì rédíọ́sì."], ["Pi", "nọ́mbà tí ó jẹ́ nǹkan bí 3.14, tí a ń lò fún òbìrí."], ["Òfin Pythagoras (Pythagorean theorem)", "fún onígun mẹ́ta onígun-ọ̀tún, a^2 + b^2 = c^2, níbi tí c jẹ́ ẹ̀gbẹ́ tó gùn jù."]],
          slides: [
            { title: "Àyíká, ààyè inú, ìwọ̀n inú", bullets: ["Àyíká: yíká, ní ẹ̀yà ìwọ̀n", "Ààyè inú: inú ìrísí pẹlẹbẹ, ẹ̀yà onígun mẹ́rin", "Ìwọ̀n inú: inú nǹkan 3-D, ẹ̀yà kíúbù"] },
            { title: "Onígun mẹ́rin gígùn àti onígun mẹ́ta", bullets: ["Onígun mẹ́rin 8 lọ́nà 5: àyíká 26, ààyè inú 40", "Onígun mẹ́ta: 1/2 x ìpìlẹ̀ x gíga", "Ìpìlẹ̀ 10, gíga 6: ààyè inú 30"] },
            { title: "Òbìrí àti sílíńdà", bullets: ["Ààyè inú = pi x r^2; rédíọ́sì 3: nǹkan bí 28.27", "Àyíká òbìrí = 2 x pi x r", "Ìwọ̀n inú sílíńdà = pi x r^2 x h"] },
            { title: "Onígun mẹ́ta onígun-ọ̀tún", bullets: ["a^2 + b^2 = c^2", "Ẹsẹ̀ 6 àti 8: c = 10", "Ṣe àṣeṣe pẹ̀lú ìwé àgbékalẹ̀ ti lọ́wọ́lọ́wọ́ láti ged.com"] }
          ],
          tryIt: "Ṣe àṣeṣe pẹ̀lú ẹ̀rọ ìṣirò àti ìwé àgbékalẹ̀ láti ged.com (ìdáhùn wà nísàlẹ̀): (1) Ààyè inú àti àyíká onígun mẹ́rin gígùn 12 m lọ́nà 7 m. (2) Ààyè inú òbìrí tí dayámítà rẹ̀ jẹ́ ínṣì 10. (3) Ìwọ̀n inú àpótí ẹsẹ̀ bàtà 6 lọ́nà 2 lọ́nà 3. (4) Àkàbà ẹsẹ̀ bàtà 13 fara ti ògiri, ìsàlẹ̀ rẹ̀ sì jìnnà sí ògiri ní ẹsẹ̀ bàtà 5. Báwo ni ó ṣe ga tó lórí ògiri? Ìdáhùn: (1) ààyè inú 84 mítà onígun mẹ́rin, àyíká 38 m. (2) rédíọ́sì 5, ààyè inú nǹkan bí 78.54 ínṣì onígun mẹ́rin. (3) 36 ẹsẹ̀ bàtà kíúbù. (4) 5^2 + b^2 = 13^2, nítorí náà b^2 = 169 - 25 = 144, b = ẹsẹ̀ bàtà 12.",
          youCanNow: "rí àyíká, ààyè inú, ìwọ̀n inú àti ẹ̀gbẹ́ tó sọnù nínú onígun mẹ́ta onígun-ọ̀tún, pẹ̀lú ẹ̀yà ìwọ̀n tó tọ́.",
          quickCheck: [
            { objective: "O5", q: "Yàrá kan jẹ́ ẹsẹ̀ bàtà 14 lọ́nà 10. Kí ni ààyè inú rẹ̀?", options: ["24 ẹsẹ̀ bàtà onígun mẹ́rin", "48 ẹsẹ̀ bàtà", "140 ẹsẹ̀ bàtà kíúbù", "140 ẹsẹ̀ bàtà onígun mẹ́rin"], answer: 3, why: "Ààyè inú = gígùn x fífẹ̀ = 140, ní ẹsẹ̀ bàtà onígun mẹ́rin." },
            { objective: "O5", q: "Onígun mẹ́ta onígun-ọ̀tún kan ní ẹsẹ̀ 9 àti 12. Báwo ni ẹ̀gbẹ́ tó gùn jù ṣe gùn tó?", options: ["21", "15", "225", "108"], answer: 1, why: "81 + 144 = 225, gbòǹgbò onígun mẹ́rin 225 sì jẹ́ 15." }
          ],
          sources: [GED_MATH, GED_CALC]
        },
        {
          title: "Ìtẹ̀ (slope), àwòrán ìyàwòrán àti function",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Rí ìtẹ̀, ka àwòrán ìyàwòrán àti tábìlì, ṣírò iye function, kí o sì parí ètò ìkẹ́kọ̀ọ́ àti ìdánwò rẹ.",
          text: [
            "Àwòrán àkọ́ọ̀dínétì (coordinate grid) ní ìlà x (ní ìbú) àti ìlà y (sókè àti sísàlẹ̀). A ń kọ ojú àmì kan bí (x, y): (3, 5) túmọ̀ sí 3 ní ìbú, 5 sókè. Ìtẹ̀ (slope) ń sọ bí ìlà kan ṣe ga tó: ìgòkè lórí ìrìn (rise over run), tàbí (y2 - y1) / (x2 - x1). Láti (1, 3) sí (4, 9): (9 - 3) / (4 - 1) = 6 / 3 = 2. Ìlà tí ó ń gòkè láti òsì sí ọ̀tún ní ìtẹ̀ rere; tí ó ń sọ̀kalẹ̀, ìtẹ̀ òdì.",
            "A lè kọ ìlà kan bí y = mx + b, níbi tí m jẹ́ ìtẹ̀, b sì jẹ́ ibi tí ìlà náà ti gé ìlà y kọjá. Láti inú tábìlì tí x = 0, 1, 2 fúnni ní y = 5, 8, 11, y ń lọ sókè ní 3 lọ́ọ̀kan, nítorí náà m = 3, nígbà tí x = 0, y = 5, nítorí náà b = 5: y = 3x + 5.",
            "Function ń fúnni ní ìjáde kan fún ìwọlé kọ̀ọ̀kan. f(x) = x^2 - 3x túmọ̀ sí: mú ìwọlé náà, sọ ọ́ di onígun mẹ́rin, yọ ìlọ́po mẹ́ta rẹ̀ kúrò. f(4) = 16 - 12 = 4. Lórí àwòrán ìyàwòrán, wá iye náà nípa lílọ ní ìbú sí x tí o fẹ́, lẹ́yìn náà sókè tàbí sísàlẹ̀ sí ìlà náà, lẹ́yìn náà ní ìbú láti ka y.",
            "Parí ètò rẹ. Wo àwọn máàkì rẹ nínú àwọn àyẹ̀wò kúkúrú, àwọn ìdánwò ìmọ̀ àti ìdánwò àpẹẹrẹ. Fi kókó 3 tí o kò mọ̀ jù sí iwájú nínú ètò ọ̀sẹ̀-sí-ọ̀sẹ̀ rẹ, fi ọjọ́ àtúnyẹ̀wò kún un, kí o sì yan ọjọ́ fún GED Ready àti ìdánwò gidi, lẹ́yìn tí o bá ti wo àwọn òfin ìpínlẹ̀ rẹ lórí ged.com."
          ],
          steps: ["Ìtẹ̀: yọ àwọn iye y kúrò nínú ara wọn, yọ àwọn iye x ní ìtẹ̀léra kan náà, kí o sì pín.", "y = mx + b: m jẹ́ ìtẹ̀, b jẹ́ iye y nígbà tí x = 0.", "Láti inú tábìlì: iye tí y ń yí padà nígbà tí x bá gòkè ní 1 ni ìtẹ̀.", "Function: fi nọ́mbà náà rọ́pò x kí o sì tẹ̀lé ìtẹ̀léra iṣẹ́ ìṣirò.", "Ètò: àwọn kókó tí o kò mọ̀ jù ní àkọ́kọ́, ọjọ́ gidi, GED Ready ṣáájú ìdánwò gidi."],
          words: [["Àwòrán àkọ́ọ̀dínétì (coordinate grid)", "àwòrán onílà tí ó ní ìlà x àti ìlà y fún fífi ojú àmì hàn."], ["Ojú àmì oníbejì (ordered pair)", "ojú àmì tí a kọ bí (x, y)."], ["Ìtẹ̀ (slope)", "bí ìlà kan ṣe ga tó: ìgòkè tí a pín pẹ̀lú ìrìn."], ["Ibi tí ó gé ìlà y (y-intercept)", "ibi tí ìlà kan ti gé ìlà y kọjá; b nínú y = mx + b."], ["Function", "òfin tí ó ń fúnni ní ìjáde kan ṣoṣo fún ìwọlé kọ̀ọ̀kan, bí f(x) = 2x + 1."]],
          slides: [
            { title: "Ìtẹ̀ = ìgòkè / ìrìn", bullets: ["(y2 - y1) / (x2 - x1)", "(1, 3) sí (4, 9): 6 / 3 = 2", "Gòkè láti òsì sí ọ̀tún: rere; sọ̀kalẹ̀: òdì"] },
            { title: "y = mx + b", bullets: ["m: ìtẹ̀; b: ibi tí ó ti gé ìlà y", "Tábìlì x = 0, 1, 2 fúnni ní y = 5, 8, 11", "Nítorí náà y = 3x + 5"] },
            { title: "Function", bullets: ["f(x) = x^2 - 3x", "f(4) = 16 - 12 = 4", "Àwòrán: lọ sí x, wá ìlà, ka y"] },
            { title: "Parí ètò rẹ", bullets: ["Kókó 3 tí o kò mọ̀ jù ní àkọ́kọ́", "Ọjọ́ gidi, ọjọ́ àtúnyẹ̀wò", "Ọjọ́ GED Ready, lẹ́yìn náà ọjọ́ ìdánwò rẹ"] }
          ],
          tryIt: "Ṣe àṣeṣe (ìdáhùn wà nísàlẹ̀): (1) Wá ìtẹ̀ láti (2, 1) sí (6, 9). (2) Kọ ìdọ́gba ìlà kan tí ìtẹ̀ rẹ̀ jẹ́ -2, tí ó gé ìlà y ní 7. (3) Tí f(x) = 3x - 4, wá f(5). (4) Tábìlì kan ní x = 0, 1, 2 àti y = 10, 7, 4. Kí ni ìtẹ̀? Ìdáhùn: (1) 8 / 4 = 2. (2) y = -2x + 7. (3) 15 - 4 = 11. (4) y ń sọ̀kalẹ̀ ní 3 lọ́ọ̀kan, nítorí náà -3. Lẹ́yìn náà parí iṣẹ́ ìkẹyìn rẹ: ètò ọ̀sẹ̀-sí-ọ̀sẹ̀ pẹ̀lú ọjọ́, ìbéèrè àṣeṣe 12 pẹ̀lú àlàyé èyí tí o ṣì, àti ọjọ́ GED Ready àti ìdánwò rẹ.",
          youCanNow: "rí ìtẹ̀, kọ y = mx + b, ka àwòrán ìyàwòrán àti tábìlì, ṣírò iye function, kí o sì tẹ̀lé ètò ìkẹ́kọ̀ọ́ àti ìdánwò Ìṣirò GED tó ní ọjọ́.",
          quickCheck: [
            { objective: "O6", q: "Kí ni ìtẹ̀ láti (0, 2) sí (3, 11)?", options: ["2", "9", "1/3", "3"], answer: 3, why: "(11 - 2) / (3 - 0) = 9 / 3 = 3." },
            { objective: "O6", q: "Tí f(x) = 2x + 1, kí ni f(6)?", options: ["9", "13", "8", "12"], answer: 1, why: "2 x 6 + 1 = 13." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Áljẹ́bírà, jìọ́mẹ́tírì àti àwòrán ìyàwòrán",
        questions: [
          { objective: "O4", q: "Ìdọ́gba wo ló bá \"Ìlọ́po méjì nọ́mbà kan pẹ̀lú 9 jẹ́ 25\" mu?", options: ["2 + x + 9 = 25", "2(x + 9) = 25", "2x + 9 = 25", "x + 9 = 2 x 25"], answer: 2, why: "Ìlọ́po méjì nọ́mbà kan jẹ́ 2x, fi 9 kún un, ó dọ́gba pẹ̀lú 25." },
          { objective: "O4", q: "Yanjú: 7x - 4 = 31", options: ["x = 5", "x = 27", "x = 3.9", "x = 35"], answer: 0, why: "Fi 4 kún un: 7x = 35. Pín pẹ̀lú 7: x = 5." },
          { objective: "O5", q: "Kí ni ìwọ̀n inú àpótí ínṣì 5 lọ́nà 4 lọ́nà 2?", options: ["11 ínṣì kíúbù", "20 ínṣì onígun mẹ́rin", "22 ínṣì", "40 ínṣì kíúbù"], answer: 3, why: "Ìwọ̀n inú = 5 x 4 x 2 = 40 ínṣì kíúbù." },
          { objective: "O5", q: "Òbìrí kan ní rédíọ́sì 7. Nǹkan bí mélòó ni àyíká òbìrí rẹ̀?", options: ["21.99", "43.98", "153.94", "49"], answer: 1, why: "2 x pi x 7 jẹ́ nǹkan bí 43.98." },
          { objective: "O6", q: "Nínú y = 4x - 2, kí ni ìtẹ̀?", options: ["-2", "2", "4", "x"], answer: 2, why: "Nínú y = mx + b, m ni ìtẹ̀, nítorí náà ó jẹ́ 4." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìmúrasílẹ̀ fún Ìdánwò GED: Ìṣirò",
    questions: [
      { objective: "O1", q: "Báwo ni ìdánwò Ìṣirò GED ṣe gùn tó, gẹ́gẹ́ bí ged.com ṣe sọ?", options: ["Ìṣẹ́jú 30", "Ìṣẹ́jú 115", "Wákàtí 3", "Kò sí òdiwọ̀n àkókò"], answer: 1, why: "ged.com sọ pé ìdánwò Ìṣirò jẹ́ ìṣẹ́jú 115, pẹ̀lú ìtọ́sọ́nà àti àtúnyẹ̀wò." },
      { objective: "O1", q: "Irinṣẹ́ ọ̀fẹ́ wo ló ń fi ojú kọ̀mpútà ìdánwò Ìṣirò GED àti irú ìbéèrè hàn ọ́?", options: ["GED Math Sample Test lórí ged.com", "App ìdánwò èyíkéyìí", "Eré fídíò kan", "Kò sí irú rẹ̀"], answer: 0, why: "ged.com ń pèsè ìdánwò àpẹẹrẹ Ìṣirò ọ̀fẹ́." },
      { objective: "O1", q: "Irú ẹ̀rọ ìṣirò wo ni o lè mú wá sí ibùdó ìdánwò GED?", options: ["Fóònù èyíkéyìí", "Ẹ̀rọ ìṣirò tí ń ya àwòrán (graphing)", "Wọn kì í gba ẹ̀rọ ìṣirò láéláé", "TI-30XS"], answer: 3, why: "ged.com sọ pé o lè mú TI-30XS tìrẹ wá; wọ́n ń fúnni ní ọ̀kan lórí ojú kọ̀mpútà ní apá 2." },
      { objective: "O1", q: "Ìpínlẹ̀ rẹ ń lo HiSET. Kí ni èyí túmọ̀ sí?", options: ["O kò lè gba ìwé-ẹ̀rí", "O gbọ́dọ̀ kó lọ sí ìpínlẹ̀ míì", "HiSET jẹ́ ìdánwò míì tó dọ́gba pẹ̀lú ti ilé-ẹ̀kọ́ girama tí ìpínlẹ̀ rẹ ń lò; wo àwọn òfin rẹ̀", "Ìdánwò ìṣirò nìkan ni o máa ṣe"], answer: 2, why: "Àwọn ìpínlẹ̀ kan ń lo HiSET dípò GED, tàbí pẹ̀lú rẹ̀." },
      { objective: "O2", q: "Kí ni 20 - 4 x 3 + 2?", options: ["50", "10", "6", "18"], answer: 1, why: "Ìsọdipúpọ̀ ní àkọ́kọ́: 12. Lẹ́yìn náà 20 - 12 + 2 = 10." },
      { objective: "O2", q: "Kí ni 4/5 x 5/8?", options: ["1/2", "9/13", "20/13", "32/25"], answer: 0, why: "20/40 = 1/2." },
      { objective: "O2", q: "Nọ́mbà wo ló wà láàárín 8 àti 9?", options: ["Gbòǹgbò onígun mẹ́rin 60", "Gbòǹgbò onígun mẹ́rin 100", "Gbòǹgbò onígun mẹ́rin 70", "Gbòǹgbò onígun mẹ́rin 81"], answer: 2, why: "64 < 70 < 81, nítorí náà gbòǹgbò onígun mẹ́rin 70 wà láàárín 8 àti 9." },
      { objective: "O3", q: "Kí ni 40% ti 150?", options: ["40", "6", "110", "60"], answer: 3, why: "0.40 x 150 = 60." },
      { objective: "O3", q: "Ìlànà oúnjẹ kan ń lo ife ìrẹsì 2 fún ènìyàn 6. Ife mélòó fún ènìyàn 15?", options: ["5", "4", "7.5", "45"], answer: 0, why: "2/6 = x/15, nítorí náà 6x = 30 àti x = 5." },
      { objective: "O3", q: "Kí ni ìyàtọ̀ (range) ti 5, 12, 3, 9, 20?", options: ["9", "17", "49", "20"], answer: 1, why: "Èyí tó tóbi jù yọ èyí tó kéré jù: 20 - 3 = 17." },
      { objective: "O3", q: "Àpò kan ní òkúta ewé 4 àti òkúta ìyeyè 6. Kí ni àǹfààní mímú ewé?", options: ["4/6", "1/4", "2/5", "6/10"], answer: 2, why: "Ewé 4 nínú àpapọ̀ 10 = 4/10 = 2/5." },
      { objective: "O4", q: "Yanjú: 6x + 5 = 47", options: ["x = 8.67", "x = 6", "x = 42", "x = 7"], answer: 3, why: "Yọ 5 kúrò: 6x = 42. Pín pẹ̀lú 6: x = 7." },
      { objective: "O4", q: "Ilé eré-ìdárayá kan ń gba $40 láti forúkọsílẹ̀ pẹ̀lú $20 lóṣù. O san $160. Oṣù mélòó?", options: ["6", "8", "10", "4"], answer: 0, why: "40 + 20m = 160, nítorí náà 20m = 120 àti m = 6." },
      { objective: "O4", q: "Yanjú: 10 - 2x >= 4", options: ["x >= 3", "x <= 3", "x <= -3", "x >= 7"], answer: 1, why: "Yọ 10 kúrò: -2x >= -6. Pín pẹ̀lú -2 kí o sì yí àmì padà: x <= 3." },
      { objective: "O5", q: "Kí ni ààyè inú onígun mẹ́ta tí ìpìlẹ̀ rẹ̀ jẹ́ 12, tí gíga rẹ̀ jẹ́ 5?", options: ["60", "17", "30", "120"], answer: 2, why: "1/2 x 12 x 5 = 30." },
      { objective: "O5", q: "Àgbàlá onígun mẹ́rin gígùn kan jẹ́ ẹsẹ̀ bàtà 30 lọ́nà 20. Ọgbà (fence) mélòó ló máa yí i ká?", options: ["600 ẹsẹ̀ bàtà", "50 ẹsẹ̀ bàtà", "100 ẹsẹ̀ bàtà onígun mẹ́rin", "100 ẹsẹ̀ bàtà"], answer: 3, why: "Àyíká = 2 x (30 + 20) = ẹsẹ̀ bàtà 100." },
      { objective: "O5", q: "Sílíńdà kan ní rédíọ́sì 3 àti gíga 10. Nǹkan bí mélòó ni ìwọ̀n inú rẹ̀?", options: ["282.74 ẹ̀yà kíúbù", "94.25 ẹ̀yà kíúbù", "30 ẹ̀yà kíúbù", "188.50 ẹ̀yà kíúbù"], answer: 0, why: "pi x 9 x 10 jẹ́ nǹkan bí 282.74." },
      { objective: "O6", q: "Kí ni ìtẹ̀ láti (2, 7) sí (5, 1)?", options: ["2", "-2", "-1/2", "6"], answer: 1, why: "(1 - 7) / (5 - 2) = -6 / 3 = -2." },
      { objective: "O6", q: "Ìlà kan ní ìtẹ̀ 5, ó sì gé ìlà y ní -3. Ìdọ́gba rẹ̀ ni:", options: ["y = -3x + 5", "y = 5x", "y = 5x - 3", "y = x - 8"], answer: 2, why: "y = mx + b pẹ̀lú m = 5 àti b = -3." },
      { objective: "O6", q: "Tí f(x) = x^2 + 2, kí ni f(-3)?", options: ["-7", "-1", "8", "11"], answer: 3, why: "(-3)^2 = 9, 9 + 2 sì jẹ́ 11." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 4, 6, 7, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe, lẹ́yìn náà fi ètò náà han olùkọ́ tàbí ẹnì kan tí ẹ jọ ń kẹ́kọ̀ọ́.",
    criteria: [
      { name: "Ó mọ ìdánwò náà", objective: "O1", notYet: "Kò tíì ṣe ìdánwò àpẹẹrẹ ọ̀fẹ́, tàbí ètò náà kò ní òtítọ́ kankan nípa ìdánwò láti ged.com.", meets: "Ó kọ èsì ìdánwò àpẹẹrẹ sílẹ̀; ó kọ àwọn apá, àkókò, òfin ẹ̀rọ ìṣirò àti irú ìbéèrè láti ged.com.", exceeds: "Ó tún kọ àwọn òfin ìpínlẹ̀ (GED tàbí HiSET), bí a ṣe ń forúkọsílẹ̀ fún ìdánwò àti iye owó lọ́wọ́lọ́wọ́, láti ojú-òpó wẹ́ẹ̀bù gidi." },
      { name: "Ètò ìkẹ́kọ̀ọ́ tó ní ọjọ́", objective: "O1", notYet: "Kò sí ọjọ́, tàbí kò sí ìtẹ̀léra àwọn kókó.", meets: "Ọ̀sẹ̀ 6 sí 8 ọjọ́ ìkẹ́kọ̀ọ́ pẹ̀lú ọjọ́ àti àkókò gidi, kókó 3 tí kò mọ̀ jù ní àkọ́kọ́, ọjọ́ GED Ready àti ọjọ́ tí ó fojú sí fún ìdánwò.", exceeds: "Ó ní àwọn ọjọ́ àtúnyẹ̀wò àti ètò míì fún ìgbà ìkẹ́kọ̀ọ́ tí ó bá pàdánù." },
      { name: "Ìṣirò nọ́mbà àti dátà", objective: "O3", notYet: "Kò tó 3 nínú ìbéèrè àṣeṣe nọ́mbà àti dátà 4 tí ó tọ̀nà.", meets: "Ó kéré tán 3 nínú ìbéèrè nọ́mbà àti dátà 4 (Ẹ̀kọ́ 2 àti 3) tọ̀nà, pẹ̀lú àlàyé èyíkéyìí tí ó ṣì.", exceeds: "Gbogbo wọn tọ̀nà, pẹ̀lú iṣẹ́ tí ó fi hàn kedere ní ìgbésẹ̀-ìgbésẹ̀." },
      { name: "Áljẹ́bírà", objective: "O4", notYet: "Ó yanjú ìdọ́gba àṣeṣe láìṣàyẹ̀wò, tàbí ọ̀kan tàbí méjèèjì kò tọ̀nà.", meets: "Ìbéèrè áljẹ́bírà méjèèjì tọ̀nà, ó sì ṣàyẹ̀wò wọn nípa fífi ìdáhùn padà sínú rẹ̀.", exceeds: "Ó ṣàlàyé òfin yíyí àmì padà fún àìdọ́gba ní ọ̀rọ̀ ara rẹ̀." },
      { name: "Jìọ́mẹ́tírì àti àwòrán ìyàwòrán", objective: "O6", notYet: "Ó lo àgbékalẹ̀ tí kò tọ́, kò kọ ẹ̀yà ìwọ̀n, tàbí àmì ìtẹ̀ kò tọ́.", meets: "Ìbéèrè jìọ́mẹ́tírì àti àwòrán ìyàwòrán (Ẹ̀kọ́ 5 àti 6) tọ̀nà ní ọ̀pọ̀ jù lọ, pẹ̀lú ẹ̀yà ìwọ̀n àti àmì ìtẹ̀ tó tọ́.", exceeds: "Ó lè fi ibi tí àgbékalẹ̀ kọ̀ọ̀kan wà lórí ìwé àgbékalẹ̀ hàn, kí ó sì ya àwòrán fún ìbéèrè ìtẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà pẹ̀lú ètò ìkẹ́kọ̀ọ́ àti ìdánwò tó ní ọjọ́, tí ó dé ìpele rubric",
      "Ìtẹ̀síwájú láti ìdánwò ṣáájú sí ìdánwò ìkẹyìn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tún ṣe GED Ready tàbí ìdánwò àpẹẹrẹ gidi láàárín ọjọ́ 60 tí wọ́n sì gba máàkì tó ga jù (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n yege ìdánwò Ìṣirò GED (tàbí ìṣirò HiSET) láàárín oṣù 6, àti àwọn tí wọ́n tẹ̀síwájú láti parí gbogbo ìwé-ẹ̀rí náà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé, gègé àti kàlẹ́ńdà",
      "Ẹ̀rọ ìṣirò TI-30XS tí ó bá ṣeé ṣe, tàbí ẹ̀rọ ìṣirò sáyẹ́ǹsì ọ̀fẹ́ lórí ayélujára",
      "Ìwé àgbékalẹ̀ GED àti ìwé ìtọ́sọ́nà ẹ̀rọ ìṣirò TI-30XS ti lọ́wọ́lọ́wọ́ láti ged.com",
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì fún GED Math Sample Test ọ̀fẹ́",
      "Nǹkan bí wákàtí 2 sí 3 fún ẹ̀kọ́ náà, lẹ́yìn náà ètò ìkẹ́kọ̀ọ́ ọ̀sẹ̀-sí-ọ̀sẹ̀ ti akẹ́kọ̀ọ́ fúnra rẹ̀"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú bí ìgbóná-ara láìsí máàkì; ẹ̀rù ìṣirò ń ba ọ̀pọ̀ akẹ́kọ̀ọ́.",
      "Ṣe gbogbo àpẹẹrẹ lórí pátákó, lẹ́yìn náà jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣe èyí tó tẹ̀lé e ní méjì-méjì kí wọ́n tó ṣe é fúnra wọn.",
      "Tẹ ìwé àgbékalẹ̀ àti ìwé ìtọ́sọ́nà ẹ̀rọ ìṣirò ti lọ́wọ́lọ́wọ́ jáde láti ged.com kí àwọn akẹ́kọ̀ọ́ lè fi ohun tí wọ́n máa rí ṣe àṣeṣe.",
      "Ran àwọn akẹ́kọ̀ọ́ lọ́wọ́ láti wo àwọn òfin ìpínlẹ̀ wọn (GED tàbí HiSET, ọjọ́ orí, káàdì ìdánimọ̀, iye owó, lórí ayélujára tàbí ní ibùdó ìdánwò) lórí àwọn ojú-òpó wẹ́ẹ̀bù gidi; má ṣe sọ iye owó tàbí máàkì yíyege láti orí.",
      "Nínú ètò ẹ̀wọ̀n tàbí ìpadàbọ̀ sí àwùjọ, béèrè lọ́wọ́ ọ́fíìsì ẹ̀kọ́ bí wọ́n ṣe ń ṣètò ìdánwò níbẹ̀.",
      "So ẹ̀kọ́ yìí pọ̀ mọ́ \"Ìṣirò Ojoojúmọ́ fún Iṣẹ́ àti Ìgbésí Ayé\" fún àwọn akẹ́kọ̀ọ́ tí wọ́n nílò àṣeṣe sí i lórí ìdá àti ìdá-ọgọ́rùn-ún."
    ]
  }
};
