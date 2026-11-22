"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-cooperatives-markets.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const ICA = { name: "International Cooperative Alliance: ìdánimọ̀, ìwà àti ìlànà ẹgbẹ́ alájọṣe (cooperative)", url: "https://ica.coop/en/cooperatives/cooperative-identity" };
const KE_ACT = { name: "Kenya Law: Co-operative Societies Act, òfin ẹgbẹ́ alájọṣe Kenya (ìforúkọsílẹ̀ nípasẹ̀ Commissioner for Co-operative Development)", url: "https://new.kenyalaw.org/akn/ke/act/1997/12" };
const NG_ACT = { name: "Nigerian Co-operative Societies Act, òfin ẹgbẹ́ alájọṣe Nàìjíríà (Àwọn Olùdarí Ẹgbẹ́ Alájọṣe ti Àpapọ̀ àti ti Ìpínlẹ̀; òfin ẹgbẹ́; àyẹ̀wò ìwé owó ọdọọdún)", url: "https://placng.org/lawsofnigeria/print.php?sn=356" };
const GH_COOP = { name: "Ghana Information Services Department: Ìjọba bẹ̀rẹ̀ àtúnṣe ẹ̀ka ẹgbẹ́ alájọṣe (Department of Co-operatives)", url: "https://www.isd.gov.gh/government-begins-reform-of-cooperative-sector-with-new-policy-and-legal-framework/" };
const KAMIS = { name: "Kenya Agricultural Market Information System (KAMIS), iṣẹ́ ìsọfúnni iye owó ọjà ti Ilé-iṣẹ́ Ètò Ọ̀gbìn Kenya", url: "https://kamis.kilimo.go.ke" };

module.exports = {
  id: "agri-cooperatives-markets-yo",
  lang: "yo",
  translationOf: "agri-cooperatives-markets",
  category: "Agriculture (Africa)",
  name: "Ẹgbẹ́ Alájọṣe Àgbẹ̀ àti Bí A Ṣe Ń Dé Ọjà",
  skills: "Ṣíṣàlàyé ìdí tí àwọn àgbẹ̀ fi ń dá ẹgbẹ́, Kíkọ òfin ẹgbẹ́ àti fífi orúkọ ẹgbẹ́ sílẹ̀, Ṣíṣe ìpàdé àti kíkọ àkọsílẹ̀ ẹgbẹ́, Kíkó irè oko jọ àti títà á papọ̀, Ṣíṣàyẹ̀wò iye owó ọjà lórí fóònù, Kíka àdéhùn pẹ̀lú olùrà",
  outcome: "ṣèrànwọ́ láti dá ẹgbẹ́ àgbẹ̀ sílẹ̀ tàbí mú un lágbára sí i: fohùn ṣọ̀kan lórí òfin ẹgbẹ́, mọ ibi tí ẹ ti máa fi orúkọ rẹ̀ sílẹ̀, ṣe ìpàdé kí o sì kọ àkọsílẹ̀ tó yé, kó irè oko àwọn ọmọ ẹgbẹ́ jọ kí ẹ sì tà á papọ̀ ní iye owó tí ẹ ti ṣàyẹ̀wò, kí o sì ka àdéhùn olùrà kí ẹnikẹ́ni tó fọwọ́ sí i.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn tí oko wọn ń dàgbà, àwọn olórí ẹgbẹ́ àgbẹ̀ àti ẹgbẹ́ alájọṣe, àti àwọn ọ̀dọ́ òṣìṣẹ́ òwò àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti káàkiri Áfíríkà. Àgbẹ̀ kan ṣoṣo tí ó ní àpò àgbàdo márùn-ún tàbí apẹ̀rẹ̀ tòmátì díẹ̀ máa ń gba iye owó èyíkéyìí tí oníṣòwò bá fún un. Ẹgbẹ́ lè ra ohun èlò oko ní owó tó dín kù, kí ó kún ìbéèrè olùrà ńlá, kí ó sì dúnàá fún iye owó tó dára jù.",
    "Orí 1 dá lórí kíkọ́ ẹgbẹ́: ìdí tí àwọn àgbẹ̀ fi ń dá ẹgbẹ́, dídá ẹgbẹ́ olùṣọ̀gbìn tàbí ẹgbẹ́ alájọṣe sílẹ̀ (òfin ẹgbẹ́ àti ìforúkọsílẹ̀), àti bí a ṣe ń ṣe ẹgbẹ́ dáadáa pẹ̀lú ìpàdé àti àkọsílẹ̀. Orí 2 dá lórí dídé ọjà: kíkó irè oko jọ àti títà á papọ̀, ṣíṣàyẹ̀wò iye owó lórí fóònù, àti àdéhùn pẹ̀lú àwọn olùrà.",
    "Òfin ẹgbẹ́ alájọṣe, ọ́fíìsì ìforúkọsílẹ̀ àti owó tí a ń san yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, wọ́n sì ń yí padà. Ẹ̀kọ́ yìí dárúkọ àwọn ọ́fíìsì tí o lè kàn sí; máa ṣàyẹ̀wò òfin tó wà lọ́wọ́lọ́wọ́ pẹ̀lú wọn kí o tó forúkọ sílẹ̀. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ tí o lè ṣe pẹ̀lú ẹgbẹ́ rẹ. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò títà ẹgbẹ́ ojú-ewé kan fún irè oko kan (ti ẹgbẹ́ rẹ, tàbí àpẹẹrẹ bí àgbẹ̀ àgbàdo 25 ní Bungoma, ẹgbẹ́ obìnrin tí ń gbin tòmátì ní Kaduna, tàbí ẹgbẹ́ kòkó tàbí ẹ̀wà nítòsí Tamale): orúkọ ẹgbẹ́ àti ohun tí ó wà fún, òfin ẹgbẹ́ pàtàkì márùn-ún, ibi tí ẹ máa forúkọ sílẹ̀ àti ohun tí ẹ gbọ́dọ̀ ṣàyẹ̀wò, àwọn àkọsílẹ̀ tí ẹ máa kọ, bí àwọn ọmọ ẹgbẹ́ ṣe máa mú irè oko wá, bí a ṣe máa pín in sí ìpele àti bí a ṣe máa sanwó fún wọn, iye owó tí o rí láti ó kéré tán orísun mẹ́ta, àti àwọn kókó àdéhùn mẹ́fà tí o máa ṣàyẹ̀wò kí ẹ tó fọwọ́ sí àdéhùn pẹ̀lú olùrà.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn tí oko wọn ń dàgbà, àwọn olórí ẹgbẹ́ àgbẹ̀ àti ẹgbẹ́ alájọṣe, àti àwọn ọ̀dọ́ òṣìṣẹ́ òwò àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti káàkiri Áfíríkà tí wọ́n fẹ́ máa rà àti tà papọ̀.",
    startingPoint: "Ọ̀pọ̀ jù lọ ń ta díẹ̀ díẹ̀ fúnra wọn ní ẹnu oko, wọ́n sì ń gba iye owó oníṣòwò. Àwọn kan wà nínú ẹgbẹ́ tí kò ní ìwé àṣẹ tàbí chama (ẹgbẹ́ ìfowópamọ́ ní Kenya). Díẹ̀ ni wọ́n ní òfin ẹgbẹ́ tí a kọ sílẹ̀, tí wọ́n ti kọ àkọsílẹ̀ ẹgbẹ́, ṣe ọjọ́ ìkójọpọ̀ irè oko, ṣàyẹ̀wò iye owó láti orísun púpọ̀, tàbí ka àdéhùn olùrà kí wọ́n tó fọwọ́ sí i.",
    gap: "Àgbẹ̀ kan ṣoṣo kò ní agbára púpọ̀ láti dúnàá, ọ̀pọ̀ ẹgbẹ́ sì ń wó nítorí àìfọkàntán, àkọsílẹ̀ tí kò dára, títa lẹ́yìn ẹgbẹ́ àti sísanwó pẹ́. Ẹgbẹ́ tí a ṣe dáadáa, tí ó ní òfin tó yé, àkọsílẹ̀, iye owó tí a ti ṣàyẹ̀wò àti àdéhùn ìwé, lè kún ìbéèrè àwọn olùrà ńlá, ra ohun èlò oko ní owó tó dín kù, kí ó sì mú owó púpọ̀ wá fún àwọn ọmọ ẹgbẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ ẹgbẹ́ àti ti ọjà",
      "Ẹ̀rọ: fóònù lásán fún SMS, WhatsApp, ṣíṣàyẹ̀wò iye owó àti ẹ̀rọ ìṣirò; ìwé àkọsílẹ̀ lórí bébà",
      "Òfin ẹgbẹ́ alájọṣe, ọ́fíìsì àti owó tí a ń san yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, wọ́n sì ń yí padà: akẹ́kọ̀ọ́ máa ṣàyẹ̀wò pẹ̀lú ọ́fíìsì ẹgbẹ́ alájọṣe",
      "Owó àti ìsọfúnni àdáni: ènìyàn méjì ló máa fọwọ́ sí ìsanwó; má ṣe fi PIN tàbí ìsọfúnni báńkì han irinṣẹ́ AI tàbí ẹni tó pè ọ́ láéláé",
      "Kò sí ìmọ̀ràn òfin: ọ́fíìsì ẹgbẹ́ alájọṣe, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí agbẹjọ́rò ló máa ṣàyẹ̀wò àwọn àdéhùn ńlá"
    ],
    prerequisites: "Kò sí. \"Ìtọ́jú àti Ìpamọ́ Irè Lẹ́yìn Ìkórè\" ń ṣèrànwọ́ fún pípín irè oko sí ìpele àti dídára rẹ̀."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún oko rẹ àti àwọn aládùúgbò rẹ", action: "kọ ohun tí ẹgbẹ́ lè ṣe tí àgbẹ̀ kan ṣoṣo kò lè ṣe, àti àwọn ewu tí ẹ gbọ́dọ̀ ṣàkóso", standard: "kí o sì dárúkọ ó kéré tán àǹfààní mẹ́ta àti ìdí mẹ́ta tí ẹgbẹ́ sábà máa ń fi wó" },
    { id: "O2", condition: "Fún ẹgbẹ́ àgbẹ̀ tuntun tàbí èyí tó ti wà", action: "kọ àwọn òfin ẹgbẹ́ pàtàkì sílẹ̀, kí o sì dárúkọ ọ́fíìsì tí ẹgbẹ́ náà máa ti forúkọ sílẹ̀", standard: "pẹ̀lú ó kéré tán òfin pàtàkì márùn-ún, àti àwọn ìgbésẹ̀ lọ́wọ́lọ́wọ́ tí o ti ṣàyẹ̀wò pẹ̀lú ọ́fíìsì náà" },
    { id: "O3", condition: "Fún ìpàdé ẹgbẹ́ àti owó ẹgbẹ́", action: "ṣe ìpàdé pẹ̀lú ètò ìpàdé (agenda) àti àkọsílẹ̀ ìpàdé (minutes), kí o sì ṣètò àwọn àkọsílẹ̀ ìpìlẹ̀ ẹgbẹ́", standard: "pẹ̀lú àkọsílẹ̀ orúkọ ọmọ ẹgbẹ́, ìwé owó, ìwé ìmúwá irè oko àti àkọsílẹ̀ ìsanwó, pẹ̀lú ènìyàn méjì tí ń fọwọ́ sí ìsanwó" },
    { id: "O4", condition: "Ní ọjọ́ ìkójọpọ̀ irè oko", action: "ṣàyẹ̀wò, pín sí ìpele, wọ̀n, kọ sílẹ̀ àti sanwó fún irè oko ọmọ ẹgbẹ́ kọ̀ọ̀kan", standard: "kí o wọ̀n ọ́n níwájú ọmọ ẹgbẹ́ náà, kí o fún un ní ìwé ẹ̀rí ìsanwó (receipt), kí o sì sanwó gẹ́gẹ́ bí àkọsílẹ̀ ti wí" },
    { id: "O5", condition: "Kí o tó tà", action: "fi iye owó láti ó kéré tán orísun mẹ́ta wé ara wọn, kí o sì ṣírò iye tí ìfilọ̀ kan jẹ́ ní oko rẹ", standard: "kí o yọ owó ọkọ̀, owó tí a ń san àti àdánù kúrò, kí o sì dá ìfilọ̀ jìbìtì mọ̀" },
    { id: "O6", condition: "Tí a bá fún ọ ní àdéhùn olùrà", action: "ṣàyẹ̀wò àwọn kókó pàtàkì kí ẹgbẹ́ tó fọwọ́ sí i", standard: "tí ó kan irè oko, ìpele, iye, iye owó, ìfijíṣẹ́, àyẹ̀wò dídára, ìsanwó, ohun tí ó máa ṣẹlẹ̀ tí ẹnìkan kò bá mú àdéhùn ṣẹ, àti aáwọ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíkọ́ ẹgbẹ́ àgbẹ̀ tó lágbára",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ìdí tí àwọn àgbẹ̀ fi ń dá ẹgbẹ́",
          minutes: 4,
          goal: "Kọ ohun tí ẹgbẹ́ lè ṣe fún oko rẹ tí o kò lè ṣe fúnra rẹ, àti àwọn ewu tí ẹ gbọ́dọ̀ ṣàkóso.",
          text: [
            "International Cooperative Alliance (ICA, àjọ àgbáyé àwọn ẹgbẹ́ alájọṣe) ṣàlàyé pé ẹgbẹ́ alájọṣe jẹ́ ìkójọpọ̀ àwọn ènìyàn tí wọ́n dara pọ̀ fúnra wọn láti pèsè àwọn ohun tí wọ́n jọ nílò nínú owó, àwùjọ àti àṣà, nípasẹ̀ òwò tí wọ́n jọ ní, tí wọ́n sì ń darí ní ọ̀nà ìjọba tiwa-n-tiwa. Àwọn ọmọ ẹgbẹ́ ni olówó rẹ̀, àwọn náà ló sì ń lò ó.",
            "Ẹgbẹ́ ń ran àwọn àgbẹ̀ lọ́wọ́ láti: ra irúgbìn, ajílẹ̀ àti oúnjẹ ẹran lọ́pọ̀ ní owó tó dín kù; kó irè oko jọ sí ẹrù ọkọ̀ akẹ́rù tí àwọn olùrà ńlá ń fẹ́; dúnàá fún iye owó tó dára jù; jọ lo ilé ìkẹ́rùsí, ẹ̀rọ ìgbẹ, ọkọ̀ àti ẹ̀rọ oko; rí ìdálẹ́kọ̀ọ́, ìwé ẹ̀rí àti owó ẹ̀yáwó tí àwọn ayánilówó máa ń fún ẹgbẹ́ tí ó ní àkọsílẹ̀ ní ìrọ̀rùn; kí wọ́n sì sọ̀rọ̀ ní ohùn kan sí ìjọba àti àwọn olùrà.",
            "Ẹgbẹ́ náà máa ń wó. Àwọn ìdí tó wọ́pọ̀ ni àìfọkàntán, àwọn olórí tí ń gba gbogbo agbára, àkọsílẹ̀ tí kò dára, àwọn ọmọ ẹgbẹ́ tí ń tà fún olùrà míì lẹ́yìn tí ẹgbẹ́ ti ṣe àdéhùn, àti sísanwó pẹ́. Ìyókù ẹ̀kọ́ yìí dá lórí bí a ṣe lè yẹra fún ìwọ̀nyí. Ẹgbẹ́ lè jẹ́ ẹgbẹ́ ìrànra-ẹni-lọ́wọ́ tàbí ẹgbẹ́ olùṣọ̀gbìn tí kò ní ìwé àṣẹ, títí dé ẹgbẹ́ alájọṣe tí a ti fi orúkọ rẹ̀ sílẹ̀; ẹgbẹ́ lè bẹ̀rẹ̀ láìní ìwé àṣẹ, kí ó sì forúkọ sílẹ̀ lẹ́yìn náà."
          ],
          words: [["Ẹgbẹ́ alájọṣe (cooperative)", "òwò tí àwọn ọmọ ẹgbẹ́ ní tí wọ́n sì ń darí, àwọn náà ló sì ń lo iṣẹ́ rẹ̀."], ["Ẹgbẹ́ olùṣọ̀gbìn (producer group)", "àwọn àgbẹ̀ tí ń gbin irè oko kan náà tí wọ́n ń ṣiṣẹ́ papọ̀, yálà wọ́n forúkọ sílẹ̀ tàbí wọn kò forúkọ sílẹ̀."], ["Rírà lọ́pọ̀ (bulk buying)", "rírà ohun púpọ̀ papọ̀ ní owó tó dín kù."], ["Títa lẹ́yìn ẹgbẹ́ (side-selling)", "nígbà tí ọmọ ẹgbẹ́ kan bá tà fún olùrà míì lẹ́yìn tí ẹgbẹ́ ti fohùn ṣọ̀kan láti tà papọ̀."]],
          slides: [
            { title: "Ohun tí ẹgbẹ́ alájọṣe jẹ́ (ICA)", bullets: ["Àwọn ènìyàn tí wọ́n dara pọ̀ fúnra wọn", "Òwò tí wọ́n jọ ní", "Wọ́n ń darí rẹ̀ papọ̀: àwọn ọmọ ẹgbẹ́ ni olówó rẹ̀, àwọn ló sì ń lò ó"] },
            { title: "Ohun tí ẹgbẹ́ lè ṣe", bullets: ["Ra ohun èlò oko lọ́pọ̀, ní owó tó dín kù", "Kún ọkọ̀ akẹ́rù fún olùrà ńlá; dúnàá", "Jọ lo ilé ìkẹ́rùsí àti ọkọ̀; rí ìdálẹ́kọ̀ọ́ àti owó ẹ̀yáwó"] },
            { title: "Ìdí tí ẹgbẹ́ fi ń wó", bullets: ["Àìfọkàntán; àwọn olórí gba gbogbo agbára", "Àkọsílẹ̀ tí kò dára; sísanwó pẹ́", "Títa lẹ́yìn ẹgbẹ́ lẹ́yìn àdéhùn ẹgbẹ́"] }
          ],
          sources: [ICA],
          tryIt: "Kọ nǹkan mẹ́ta tí ẹgbẹ́ lè ṣe fún oko rẹ tí o kò lè ṣe fúnra rẹ, àti ewu kan tí ó ń dà ọ́ láàmú jù. Béèrè lọ́wọ́ aládùúgbò méjì ohun tí wọ́n máa fẹ́ láti ọ̀dọ̀ ẹgbẹ́, kí o sì kọ ìdáhùn wọn sílẹ̀.",
          youCanNow: "ṣàlàyé ohun tí ẹgbẹ́ alájọṣe jẹ́, ohun tí ẹgbẹ́ lè ṣe fún àwọn àgbẹ̀, àti àwọn ìdí pàtàkì tí ẹgbẹ́ fi ń wó.",
          quickCheck: [
            { objective: "O1", q: "Irú ẹgbẹ́ àgbẹ̀ wo ló wà?", options: ["Láti ẹgbẹ́ ìrànra-ẹni-lọ́wọ́ tàbí ẹgbẹ́ olùṣọ̀gbìn tí kò ní ìwé àṣẹ títí dé ẹgbẹ́ alájọṣe tí a ti forúkọ rẹ̀ sílẹ̀", "Ilé-iṣẹ́ tí a forúkọ sílẹ̀ nìkan", "Ọ́fíìsì ìjọba nìkan", "Ẹgbẹ́ tí ó ní àgbẹ̀ tó ju 1,000 lọ nìkan"], answer: 0, why: "Ẹgbẹ́ lè jẹ́ ẹgbẹ́ ìrànra-ẹni-lọ́wọ́ tàbí ẹgbẹ́ olùṣọ̀gbìn tí kò ní ìwé àṣẹ títí dé ẹgbẹ́ alájọṣe tí a ti forúkọ rẹ̀ sílẹ̀." },
            { objective: "O1", q: "Àwọn aládùúgbò rẹ fẹ́ ta àgbàdo papọ̀ ṣùgbọ́n wọn kò tíì ṣetán láti forúkọ sílẹ̀. Kí ni wọ́n lè ṣe?", options: ["Dúró títí wọ́n á fi lè forúkọ sílẹ̀ kí wọ́n tó ṣe ohunkóhun", "Kí ẹnì kọ̀ọ̀kan máa tà fúnra rẹ̀ títí láé", "Ní kí oníṣòwò kan di olórí wọn", "Bẹ̀rẹ̀ bí ẹgbẹ́ tí kò ní ìwé àṣẹ, kí wọ́n sì forúkọ sílẹ̀ lẹ́yìn náà"], answer: 3, why: "Ẹgbẹ́ lè bẹ̀rẹ̀ láìní ìwé àṣẹ, kí ó sì forúkọ sílẹ̀ lẹ́yìn náà." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dídá ẹgbẹ́ sílẹ̀: òfin ẹgbẹ́ àti ìforúkọsílẹ̀",
          minutes: 6,
          goal: "Kọ àwọn òfin ẹgbẹ́ pàtàkì sílẹ̀, kí o sì wá ibi tí ẹ ti máa forúkọ ẹgbẹ́ náà sílẹ̀.",
          text: [
            "Bẹ̀rẹ̀ pẹ̀lú àwọn ènìyàn tí ń gbin irè oko kan náà tàbí tí wọ́n nílò iṣẹ́ kan náà, tí wọ́n ń gbé nítòsí tó láti pàdé, tí wọ́n sì fọkàn tán ara wọn. Ẹ fohùn ṣọ̀kan lórí ohun tí ẹgbẹ́ wà fún, bí \"láti ta àgbàdo wa papọ̀ kí a sì ra ohun èlò oko lọ́pọ̀\". Ẹ ṣe ìpàdé àkọ́kọ́, ẹ kọ àkọsílẹ̀ ìpàdé, kí ẹ sì yan ìgbìmọ̀ fún ìgbà díẹ̀.",
            "Òfin ẹgbẹ́ (by-laws) ni òfin tí ẹgbẹ́ kọ sílẹ̀. Wọ́n sábà máa ń sọ nípa: orúkọ, àdírẹ́sì àti ohun tí ẹgbẹ́ wà fún; ẹni tí ó lè dara pọ̀ àti bí ó ṣe máa dara pọ̀; owó ìwọlé àti ìpín (shares); ìpàdé, iye ọmọ ẹgbẹ́ tó gbọ́dọ̀ wà (quorum) àti ìdìbò (ẹgbẹ́ alájọṣe ń lo ọmọ ẹgbẹ́ kan, ìbò kan); ìgbìmọ̀, agbára rẹ̀ àti àkókò iṣẹ́ rẹ̀; bí a ṣe ń pa owó mọ́ tí a sì ń ṣàyẹ̀wò rẹ̀; bí a ṣe máa pín owó tó bá ṣẹ́kù (surplus); àti bí a ṣe máa bá ọmọ ẹgbẹ́ tó bá rú òfin wí. Ọ́fíìsì ẹgbẹ́ alájọṣe rẹ sábà máa ń ní àpẹẹrẹ òfin ẹgbẹ́ tí o lè ṣàtúnṣe sí.",
            "Ìforúkọsílẹ̀ ń fún ẹgbẹ́ ní ipò lábẹ́ òfin láti ní dúkìá, ṣí àkáǹtì báńkì ní orúkọ ara rẹ̀, fọwọ́ sí àdéhùn àti yá owó. Òfin yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn. Ní Kenya, àwọn ẹgbẹ́ ń forúkọ sílẹ̀ lábẹ́ Co-operative Societies Act nípasẹ̀ Commissioner for Co-operative Development, wọ́n sì ń bẹ̀rẹ̀ ní ọ́fíìsì ẹgbẹ́ alájọṣe ti county. Ní Nàìjíríà, Co-operative Societies Act sọ pé ẹgbẹ́ alájọṣe àkọ́kọ́ (primary society) nílò ó kéré tán ọmọ ẹgbẹ́ mẹ́wàá tí ó tóótun, ó sì máa fi ìwé ìbéèrè pẹ̀lú òfin ẹgbẹ́ rẹ̀ ránṣẹ́ sí State Director of Co-operatives (Olùdarí Ẹgbẹ́ Alájọṣe ti Ìpínlẹ̀). Ní Ghana, àwọn ẹgbẹ́ ń forúkọ sílẹ̀ pẹ̀lú Department of Co-operatives ní ọ́fíìsì agbègbè (district) rẹ̀. Owó, fọ́ọ̀mù àti ìgbésẹ̀ ń yí padà, nítorí náà lọ sí ọ́fíìsì náà tàbí pè wọ́n kí o tó béèrè."
          ],
          steps: ["Ẹ fohùn ṣọ̀kan lórí ohun tí ẹgbẹ́ wà fún ní gbólóhùn kan.", "Ẹ ṣe ìpàdé àkọ́kọ́; ẹ kọ àkọsílẹ̀ ìpàdé àti orúkọ àwọn ọmọ ẹgbẹ́.", "Ẹ yan ìgbìmọ̀ fún ìgbà díẹ̀: alága, akọ̀wé, akápò.", "Ẹ gba àpẹẹrẹ òfin ẹgbẹ́ láti ọ́fíìsì ẹgbẹ́ alájọṣe kí ẹ sì ṣàtúnṣe sí i.", "Ẹ fohùn ṣọ̀kan lórí àwọn òfin pàtàkì nínú ìpàdé àwọn ọmọ ẹgbẹ́, kí ẹ sì kọ ìbò náà sílẹ̀.", "Ẹ lọ sí ọ́fíìsì ẹgbẹ́ alájọṣe: ẹ béèrè fọ́ọ̀mù, owó àti ìgbésẹ̀ tó wà lọ́wọ́lọ́wọ́."],
          words: [["Òfin ẹgbẹ́ (by-laws)", "àwọn òfin tí ẹgbẹ́ kọ sílẹ̀ tí ó sì gbà láti tẹ̀lé."], ["Quorum", "iye ọmọ ẹgbẹ́ tó kéré jù tí ó gbọ́dọ̀ wà níbẹ̀ kí ìpinnu ìpàdé tó lè fẹsẹ̀ múlẹ̀."], ["Ọmọ ẹgbẹ́ kan, ìbò kan", "ọmọ ẹgbẹ́ kọ̀ọ̀kan ní ìbò kan ṣoṣo, bí ó ti wù kí ìpín rẹ̀ pọ̀ tó."], ["Ìforúkọsílẹ̀", "ìdánimọ̀ ìjọba tí ó ń fún ẹgbẹ́ ní ipò lábẹ́ òfin."]],
          slides: [
            { title: "Bẹ̀rẹ̀ dáadáa", bullets: ["Irè oko tàbí ohun tí a nílò kan náà; nítòsí; ìfọkàntán", "Ohun tí ẹgbẹ́ wà fún ní gbólóhùn kan", "Ìpàdé àkọ́kọ́, àkọsílẹ̀ ìpàdé, ìgbìmọ̀ ìgbà díẹ̀"] },
            { title: "Ohun tí òfin ẹgbẹ́ ń sọ", bullets: ["Ohun tí ẹgbẹ́ wà fún, ọmọ ẹgbẹ́, owó ìwọlé àti ìpín", "Ìpàdé, quorum, ọmọ ẹgbẹ́ kan ìbò kan", "Ìgbìmọ̀, owó, owó tó ṣẹ́kù, ìbáwí"] },
            { title: "Ibi tí ẹ ti máa forúkọ sílẹ̀", bullets: ["Kenya: ọ́fíìsì ẹgbẹ́ alájọṣe ti county / Commissioner for Co-operative Development", "Nàìjíríà: State Director of Co-operatives (Olùdarí ti Ìpínlẹ̀)", "Ghana: ọ́fíìsì agbègbè ti Department of Co-operatives"] },
            { title: "Kí o tó béèrè", bullets: ["Òfin, fọ́ọ̀mù àti owó ń yí padà", "Kọ́kọ́ lọ sí ọ́fíìsì náà tàbí pè wọ́n", "Béèrè àpẹẹrẹ òfin ẹgbẹ́"] }
          ],
          sources: [KE_ACT, NG_ACT, GH_COOP],
          tryIt: "Kọ òfin ẹgbẹ́ márùn-ún fún ẹgbẹ́ rẹ: ẹni tí ó lè dara pọ̀, owó ìwọlé tàbí ìpín, ìgbà mélòó ni ẹ máa pàdé àti quorum, bí ìdìbò ṣe máa lọ, àti ohun tí ó máa ṣẹlẹ̀ tí ọmọ ẹgbẹ́ kan bá tà lẹ́yìn ẹgbẹ́. Lẹ́yìn náà, wá àdírẹ́sì tàbí nọ́mbà fóònù ọ́fíìsì ẹgbẹ́ alájọṣe tó sún mọ́ ọ jù.",
          youCanNow: "kọ àwọn òfin ẹgbẹ́ pàtàkì fún ẹgbẹ́ àgbẹ̀ sílẹ̀, kí o sì mọ ibi tí ẹ ti máa forúkọ rẹ̀ sílẹ̀ ní orílẹ̀-èdè rẹ.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ìforúkọsílẹ̀ ń fún ẹgbẹ́ àgbẹ̀?", options: ["Iye owó tí ó dájú", "Ohun èlò oko ọ̀fẹ́", "Ipò lábẹ́ òfin láti ní dúkìá, ṣí àkáǹtì báńkì, fọwọ́ sí àdéhùn àti yá owó", "Owó oṣù láti ọ̀dọ̀ ìjọba"], answer: 2, why: "Ìforúkọsílẹ̀ ń fún ẹgbẹ́ ní ipò lábẹ́ òfin láti ní dúkìá, lo báńkì, fọwọ́ sí àdéhùn àti yá owó." },
            { objective: "O2", q: "Ẹgbẹ́ rẹ ń kọ òfin ẹgbẹ́, ṣùgbọ́n ẹ kò mọ ibi tí ẹ máa ti bẹ̀rẹ̀. Kí ni o máa ṣe?", options: ["Dà òfin ilé-iṣẹ́ kan kọ láti orí íńtánẹ́ẹ̀tì", "Béèrè àpẹẹrẹ òfin ẹgbẹ́ lọ́wọ́ ọ́fíìsì ẹgbẹ́ alájọṣe kí ẹ sì ṣàtúnṣe sí i", "Jẹ́ kí alága nìkan kọ ọ́", "Fò òfin ẹgbẹ́ ru"], answer: 1, why: "Àwọn ọ́fíìsì ẹgbẹ́ alájọṣe sábà máa ń ní àpẹẹrẹ òfin ẹgbẹ́ tí àwọn ẹgbẹ́ lè ṣàtúnṣe sí." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe ẹgbẹ́: ìpàdé àti àkọsílẹ̀",
          minutes: 5,
          goal: "Ṣe ìpàdé kúkúrú pẹ̀lú ètò ìpàdé àti àkọsílẹ̀ ìpàdé, kí o sì ṣètò àwọn àkọsílẹ̀ ìpìlẹ̀ ẹgbẹ́.",
          text: [
            "Ìpàdé tó dára ń kọ́ ìfọkàntán. Fi ọjọ́ ìpàdé àti ètò ìpàdé (agenda) ránṣẹ́ ṣáájú (SMS tàbí ọ̀rọ̀ WhatsApp ti tó), bẹ̀rẹ̀ lásìkò, ṣàyẹ̀wò quorum, tẹ̀lé ètò ìpàdé, jẹ́ kí gbogbo ọmọ ẹgbẹ́ sọ̀rọ̀, dìbò lórí ìpinnu, kí o sì kọ àkọsílẹ̀ ìpàdé (minutes): àwọn tó wá, ohun tí a pinnu, àti ẹni tí ó máa ṣe kí ni àti nígbà wo. Ka àkọsílẹ̀ ìpàdé tó kọjá ní ìbẹ̀rẹ̀ ìpàdé kọ̀ọ̀kan. Ẹ ṣe ìpàdé gbogbogbò ọdọọdún (AGM) níbi tí àwọn ọmọ ẹgbẹ́ ti máa gbọ́ ìròyìn owó, tí wọ́n sì máa yan ìgbìmọ̀.",
            "Àkọsílẹ̀ ni ìrántí ẹgbẹ́ àti ẹ̀rí rẹ̀ fún àwọn olùrà, báńkì àti ọ́fíìsì ẹgbẹ́ alájọṣe. Ó kéré tán, ẹ máa ní: àkọsílẹ̀ orúkọ ọmọ ẹgbẹ́ (orúkọ, ọ̀nà ìkànsí, ìpín tí wọ́n ti san), ìwé owó (cash book) tí ó ní gbogbo owó tí ó wọlé àti tí ó jáde pẹ̀lú ìwé ẹ̀rí ìsanwó, ìwé ìmúwá irè oko tí ó fi ohun tí ọmọ ẹgbẹ́ kọ̀ọ̀kan mú wá hàn, pẹ̀lú ìpele àti ìwọ̀n rẹ̀, àti àkọsílẹ̀ ìsanwó tí ó fi iye tí a san fún ọmọ ẹgbẹ́ kọ̀ọ̀kan hàn. Fún àpẹẹrẹ, Co-operative Societies Act ti Nàìjíríà ní kí a ṣe àyẹ̀wò ìwé owó (audit) ẹgbẹ́ tí a forúkọ rẹ̀ sílẹ̀ lọ́dọọdún.",
            "Dáàbò bo owó náà: lo àkáǹtì báńkì tàbí àkáǹtì owó orí fóònù ti ẹgbẹ́, jẹ́ kí ènìyàn méjì fọwọ́ sí tàbí fọwọ́ sí gbogbo ìsanwó, fún ẹnikẹ́ni ní ìwé ẹ̀rí ìsanwó fún gbogbo shilling, naira tàbí cedi, kí ẹ sì ka ìròyìn owó sókè ní àwọn ìpàdé. Spreadsheet lórí fóònù tàbí app ọ̀fẹ́ lè di àkọsílẹ̀ mú, ṣùgbọ́n ẹ tún pa ẹ̀dà rẹ̀ mọ́ sórí bébà, má sì ṣe fi PIN tàbí ọ̀rọ̀ aṣínà han ẹnikẹ́ni láéláé."
          ],
          steps: ["Fi ọjọ́ ìpàdé àti ètò ìpàdé ránṣẹ́ ṣáájú.", "Ṣàyẹ̀wò quorum; tẹ̀lé ètò ìpàdé; dìbò lórí ìpinnu.", "Kọ àkọsílẹ̀ ìpàdé: àwọn tó wá, ohun tí a pinnu, ẹni tí ó máa ṣe kí ni àti nígbà wo.", "Ṣètò àkọsílẹ̀ mẹ́rin: ọmọ ẹgbẹ́, ìwé owó, ìmúwá irè oko, ìsanwó.", "Lo àkáǹtì ẹgbẹ́ pẹ̀lú olùfọwọ́sí méjì; fún wọn ní ìwé ẹ̀rí ìsanwó.", "Ka ìròyìn owó sókè ní ìpàdé kọ̀ọ̀kan; ṣe àyẹ̀wò ìwé owó lẹ́ẹ̀kan lọ́dún."],
          words: [["Ètò ìpàdé (agenda)", "àkọsílẹ̀ àwọn ọ̀rọ̀ tí a máa jíròrò nínú ìpàdé."], ["Àkọsílẹ̀ ìpàdé (minutes)", "àkọsílẹ̀ ohun tí ìpàdé pinnu."], ["Ìpàdé gbogbogbò ọdọọdún (AGM)", "ìpàdé gbogbo ọmọ ẹgbẹ́ lọ́dọọdún láti gbọ́ ìròyìn owó àti láti yan àwọn olórí."], ["Àyẹ̀wò ìwé owó (audit)", "àyẹ̀wò ìwé owó ẹgbẹ́ láti ọwọ́ ẹni tí kò sí nínú ẹgbẹ́."], ["Olùfọwọ́sí (signatory)", "ẹni tí a gbà láàyè láti fọwọ́ sí ìsanwó láti inú àkáǹtì."]],
          slides: [
            { title: "Ìpàdé tó dára", bullets: ["Fi ètò ìpàdé ránṣẹ́ ṣáájú; bẹ̀rẹ̀ lásìkò", "Ṣàyẹ̀wò quorum; gbogbo ènìyàn sọ̀rọ̀; dìbò", "Àkọsílẹ̀ ìpàdé: ìpinnu, ẹni tí ó máa ṣe kí ni àti nígbà wo"] },
            { title: "Àkọsílẹ̀ ìpìlẹ̀ mẹ́rin", bullets: ["Àkọsílẹ̀ orúkọ ọmọ ẹgbẹ́", "Ìwé owó pẹ̀lú ìwé ẹ̀rí ìsanwó", "Ìwé ìmúwá irè oko àti àkọsílẹ̀ ìsanwó"] },
            { title: "Dáàbò bo owó náà", bullets: ["Àkáǹtì ẹgbẹ́; olùfọwọ́sí méjì", "Ìwé ẹ̀rí fún gbogbo ìsanwó", "Ka ìròyìn owó sókè; àyẹ̀wò ìwé owó lọ́dọọdún"] }
          ],
          sources: [NG_ACT],
          tryIt: "Kọ ètò ìpàdé tí ó ní ọ̀rọ̀ mẹ́rin fún ìpàdé ẹgbẹ́ rẹ tó ń bọ̀. Lẹ́yìn náà, ya àwọn ọ̀wọ̀n ìwé ìmúwá irè oko: ọjọ́, orúkọ ọmọ ẹgbẹ́, irè oko, ìpele, ìwọ̀n, ẹni tí ó gbà á.",
          youCanNow: "ṣe ìpàdé ẹgbẹ́ pẹ̀lú ètò ìpàdé àti àkọsílẹ̀ ìpàdé, kí o sì kọ àwọn àkọsílẹ̀ tí ń kọ́ ìfọkàntán.",
          quickCheck: [
            { objective: "O3", q: "Kí ló ń ṣẹlẹ̀ ní ìpàdé gbogbogbò ọdọọdún (AGM)?", options: ["Olùrà ló ń pinnu iye owó", "Àwọn ọmọ ẹgbẹ́ ń gbọ́ ìròyìn owó, wọ́n sì ń yan ìgbìmọ̀", "Ẹgbẹ́ ń ta ilé ìkẹ́rùsí rẹ̀", "Alága nìkan ló ń sọ̀rọ̀"], answer: 1, why: "Ní AGM, àwọn ọmọ ẹgbẹ́ ń gbọ́ ìròyìn owó, wọ́n sì ń yan ìgbìmọ̀." },
            { objective: "O3", q: "Ìwọ ni alága ìpàdé òní, quorum sì ti pé. Kí ni o máa kọ́kọ́ ṣe?", options: ["Ka àkọsílẹ̀ ìpàdé tó kọjá", "Béèrè owó", "Fò ètò ìpàdé ru", "Parí ìpàdé ní kùtùkùtù"], answer: 0, why: "Kíka àkọsílẹ̀ ìpàdé tó kọjá ní ìbẹ̀rẹ̀ ń jẹ́ kí gbogbo ènìyàn mọ ibi tí ọ̀rọ̀ dé, ó sì ń kọ́ ìfọkàntán." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíkọ́ ẹgbẹ́ àgbẹ̀ tó lágbára",
        questions: [
          { objective: "O1", q: "Nínú ẹgbẹ́ alájọṣe, ta ni olówó òwò náà tí ó sì ń darí rẹ̀?", options: ["Olùrà", "Ìjọba", "Àwọn ọmọ ẹgbẹ́", "Alága nìkan"], answer: 2, why: "Àwọn ọmọ ẹgbẹ́ ni olówó ẹgbẹ́ alájọṣe; àwọn ló ń darí rẹ̀, àwọn ló sì ń lò ó." },
          { objective: "O1", q: "Ọmọ ẹgbẹ́ kan tà fún oníṣòwò míì lẹ́yìn tí ẹgbẹ́ ti ṣe àdéhùn. Kí ni a ń pe èyí?", options: ["Rírà lọ́pọ̀", "Títa lẹ́yìn ẹgbẹ́ (side-selling)", "Ìkójọpọ̀ irè oko", "Àyẹ̀wò ìwé owó"], answer: 1, why: "Títa lẹ́yìn ẹgbẹ́ ń ba àdéhùn ẹgbẹ́ jẹ́, ó sì jẹ́ ìdí tó wọ́pọ̀ tí ẹgbẹ́ fi ń wó." },
          { objective: "O2", q: "Ní Nàìjíríà, níbo ni ẹgbẹ́ alájọṣe àkọ́kọ́ (primary society) ti ń béèrè fún ìforúkọsílẹ̀?", options: ["State Director of Co-operatives (Olùdarí Ẹgbẹ́ Alájọṣe ti Ìpínlẹ̀)", "Ọlọ́pàá", "Ẹgbẹ́ bọ́ọ̀lù àfẹsẹ̀gbá", "Báńkì èyíkéyìí"], answer: 0, why: "Co-operative Societies Act ní kí a fi ìwé ìbéèrè pẹ̀lú òfin ẹgbẹ́ ránṣẹ́ sí Director of Co-operatives." },
          { objective: "O3", q: "Kí ni quorum?", options: ["Àkáǹtì báńkì ẹgbẹ́", "Irú irè oko kan", "Àkókò ìsinmi tíì nínú ìpàdé", "Iye ọmọ ẹgbẹ́ tó kéré jù tí a nílò kí ìpinnu tó lè fẹsẹ̀ múlẹ̀"], answer: 3, why: "Láìsí quorum, ìpinnu ìpàdé kò fẹsẹ̀ múlẹ̀." },
          { objective: "O3", q: "Ìṣe wo ló dáàbò bo owó ẹgbẹ́ jù?", options: ["Ẹnì kan ń pa gbogbo owó mọ́ sílé", "Kò sí ìwé ẹ̀rí ìsanwó, láti dín bébà kù", "Olùfọwọ́sí méjì, ìwé ẹ̀rí ìsanwó, àti kíka ìròyìn owó sókè", "Fi PIN han gbogbo ọmọ ẹgbẹ́"], answer: 2, why: "Olùfọwọ́sí méjì, ìwé ẹ̀rí ìsanwó àti ìròyìn owó tí ó hàn gbangba ń mú kí olè àti àṣìṣe ṣòro." }
        ]
      }
    },
    {
      name: "Orí 2: Dídé ọjà papọ̀",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkó irè oko jọ àti títà á papọ̀",
          minutes: 5,
          goal: "Ṣètò ọjọ́ ìkójọpọ̀ irè oko níbi tí a ti máa ṣàyẹ̀wò, wọ̀n, kọ sílẹ̀ àti sanwó fún irè oko àwọn ọmọ ẹgbẹ́ lọ́nà tó tọ́.",
          text: [
            "Ìkójọpọ̀ irè oko (aggregation) túmọ̀ sí kíkó irè oko díẹ̀díẹ̀ ti ọ̀pọ̀ ọmọ ẹgbẹ́ jọ sí ẹrù ńlá kan tí ó dọ́gba. Àwọn olùrà ńlá bí àwọn ilé-iṣẹ́ tí ń ṣe oúnjẹ, ẹ̀rọ ìlọkà, ilé-ìwé, àwọn ilé ìtajà ńlá àti àwọn tí ń kó ọjà lọ sílẹ̀ òkèèrè ń fẹ́ irè oko tí ó pọ̀ déédéé, tí ó ní dídára kan náà, tí a mú wá lásìkò. Ẹgbẹ́ tí ó lè kún ọkọ̀ akẹ́rù pẹ̀lú irè oko tí ó mọ́, tí ó gbẹ, tí a sì ti pín sí ìpele lè tà fún wọn, kí ó sì rí owó púpọ̀ ju ti ẹnu oko lọ.",
            "Ẹ ṣe ibùdó tàbí ọjọ́ ìkójọpọ̀ pẹ̀lú òfin tó yé: dídára tí olùrà ń fẹ́ (fún àpẹẹrẹ àgbàdo tí ó gbẹ, tí ó mọ́, tí a ti ṣà, tí omi inú rẹ̀ kò ju ìwọ̀n tí olùrà gbà lọ), òṣùwọ̀n tí a fọkàn tán, àti àkọsílẹ̀ fún gbogbo ìmúwá. Ṣàyẹ̀wò irè oko ọmọ ẹgbẹ́ kọ̀ọ̀kan kí o sì pín in sí ìpele, wọ̀n ọ́n níwájú rẹ̀, kọ ọ́ sínú ìwé ìmúwá irè oko, kí o sì fún un ní ìwé ẹ̀rí. Pa ẹrù náà mọ́ láìléwu títí olùrà yóò fi wá kó o.",
            "Sanwó fún àwọn ọmọ ẹgbẹ́ gẹ́gẹ́ bí àkọsílẹ̀ ti wí: ìwọ̀n lọ́nà iye owó tí a fohùn ṣọ̀kan lé lórí fún ìpele wọn, yọ owó ẹgbẹ́ èyíkéyìí tí a ti fohùn ṣọ̀kan lé lórí fún ọkọ̀, ìkẹ́rùsí tàbí àpò kúrò, gbogbo rẹ̀ ni a pinnu ṣáájú tí a sì kọ sínú òfin ẹgbẹ́ tàbí àkọsílẹ̀ ìpàdé. Sanwó lásìkò, nípasẹ̀ owó orí fóònù tàbí báńkì níbi tí ó bá ṣeé ṣe. Ìsanwó tí ó yára, tí ó tọ́, tí ó sì hàn gbangba ni ààbò tó dára jù lọ lọ́wọ́ títa lẹ́yìn ẹgbẹ́."
          ],
          steps: ["Ẹ fohùn ṣọ̀kan lórí òfin dídára olùrà, kí ẹ sì sọ fún gbogbo ọmọ ẹgbẹ́ ṣáájú.", "Ẹ yan ọjọ́ ìkójọpọ̀, ibi, àti òṣùwọ̀n tí a fọkàn tán.", "Ẹ ṣàyẹ̀wò, pín sí ìpele, kí ẹ sì wọ̀n ìmúwá kọ̀ọ̀kan níwájú ọmọ ẹgbẹ́ náà.", "Ẹ kọ ọ́ sínú ìwé ìmúwá irè oko; ẹ fún un ní ìwé ẹ̀rí.", "Ẹ pa ẹrù náà mọ́ láìléwu; ẹ jọ kó o lọ fún olùrà.", "Ẹ sanwó fún ọmọ ẹgbẹ́ kọ̀ọ̀kan gẹ́gẹ́ bí àkọsílẹ̀, ẹ yọ owó tí a fohùn ṣọ̀kan lé lórí kúrò, lásìkò."],
          words: [["Ìkójọpọ̀ irè oko (aggregation)", "kíkó ọ̀pọ̀ irè oko díẹ̀díẹ̀ jọ sí ẹrù ńlá kan."], ["Ibùdó ìkójọpọ̀ (collection point)", "ibi tí àwọn ọmọ ẹgbẹ́ ti ń mú irè oko wá kí a lè ṣàyẹ̀wò rẹ̀ kí a sì kọ ọ́ sílẹ̀."], ["Ẹrù (lot)", "àkójọ irè oko kan tí ó jẹ́ irú kan náà àti ìpele kan náà."]],
          slides: [
            { title: "Ìdí tí a fi ń kó irè oko jọ", bullets: ["Olùrà ńlá ń fẹ́ ọ̀pọ̀, dídára àti àkókò tó tọ́", "Kún ọkọ̀ akẹ́rù pẹ̀lú ìpele kan", "Iye owó tó dára ju ti ẹnu oko lọ"] },
            { title: "Ọjọ́ ìkójọpọ̀", bullets: ["Gbogbo ènìyàn mọ òfin dídára olùrà ṣáájú", "Pín sí ìpele kí o sì wọ̀n níwájú ọmọ ẹgbẹ́ náà", "Kọ ọ́ sílẹ̀ kí o sì fún un ní ìwé ẹ̀rí"] },
            { title: "Sanwó lọ́nà tó tọ́ àti kíákíá", bullets: ["Ìwọ̀n x iye owó fún ìpele náà", "Yọ owó tí a fohùn ṣọ̀kan lé lórí ṣáájú kúrò", "Lásìkò, nípasẹ̀ owó orí fóònù tàbí báńkì"] }
          ],
          tryIt: "Ṣètò ọjọ́ ìkójọpọ̀ kan fún ẹgbẹ́ rẹ: ọjọ́, ibi, òṣùwọ̀n, òfin dídára olùrà, ẹni tí ó máa kọ àkọsílẹ̀, àti owó ẹgbẹ́ lórí àpò kan tàbí kílò kan tí a ti fohùn ṣọ̀kan lé lórí ṣáájú. Kọ bí àti ìgbà tí a máa sanwó fún àwọn ọmọ ẹgbẹ́.",
          youCanNow: "ṣe ọjọ́ ìkójọpọ̀ tó tọ́, kí o sì sanwó fún àwọn ọmọ ẹgbẹ́ gẹ́gẹ́ bí àkọsílẹ̀ tó yé.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ibùdó tàbí ọjọ́ ìkójọpọ̀?", options: ["Àríyá fún àwọn ọmọ ẹgbẹ́", "Ẹ̀ka báńkì kan", "Ọ́fíìsì olùrà", "Ibi àti ọjọ́ tí àwọn ọmọ ẹgbẹ́ ń mú irè oko wá kí a lè ṣàyẹ̀wò rẹ̀, wọ̀n ọ́n, kí a sì kọ ọ́ sílẹ̀"], answer: 3, why: "Ní ibùdó ìkójọpọ̀, a ń ṣàyẹ̀wò irè oko, pín in sí ìpele, wọ̀n ọ́n, kọ ọ́ sílẹ̀, kí a sì pa á mọ́ títí olùrà yóò fi wá kó o." },
            { objective: "O4", q: "Àgbàdo ọmọ ẹgbẹ́ kan tutù ju ohun tí olùrà gbà lọ. Kí ni o máa ṣe ní ibùdó ìkójọpọ̀?", options: ["Pò ó mọ́ àgbàdo gbígbẹ kí ẹnikẹ́ni má bàa mọ̀", "San ìlọ́po méjì owó fún ọmọ ẹgbẹ́ náà", "Má ṣe fi kún ẹrù náà títí a ó fi gbẹ ẹ́ dé ìwọ̀n tí olùrà ń fẹ́", "Fi pamọ́ sí ìsàlẹ̀ ọkọ̀ akẹ́rù"], answer: 2, why: "Ẹrù náà gbọ́dọ̀ bá dídára tí olùrà ń fẹ́ mu, nítorí náà a ń ṣàyẹ̀wò irè oko, a sì ń pín in sí ìpele kí a tó gbà á." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣàyẹ̀wò iye owó ọjà lórí fóònù",
          minutes: 5,
          goal: "Wá iye owó láti ó kéré tán orísun mẹ́ta, kí o sì ṣírò iye tí ìfilọ̀ kan jẹ́ ní tòótọ́ ní oko rẹ.",
          text: [
            "Má ṣe tà láé láìmọ iye owó. Béèrè lọ́wọ́ ó kéré tán olùrà mẹ́ta, tẹ́tí sí ìròyìn ọjà lórí rédíò, kí o sì ṣàyẹ̀wò àwọn iṣẹ́ ìsọfúnni ọjà ti ìjọba. Ní Kenya, ètò KAMIS ti Ilé-iṣẹ́ Ètò Ọ̀gbìn ń tẹ iye owó ọjà ọ̀pọ̀ (wholesale), ti ọjà kékeré (retail) àti ti ẹnu oko jáde fún ọ̀pọ̀ irè oko àti ẹran ọ̀sìn láti àwọn ọjà káàkiri àwọn county. Ní Nàìjíríà àti Ghana, béèrè lọ́wọ́ ọ́fíìsì ìtọ́sọ́nà àgbẹ̀, ẹgbẹ́ oníṣòwò irè oko náà, tàbí àpapọ̀ ẹgbẹ́ alájọṣe rẹ, iṣẹ́ iye owó wo ló ń sọ nípa irè oko rẹ.",
            "Fi ohun tí ó jọra wé ara wọn: iye owó lórí kílò kan tàbí àpò kan ti ìpele kan náà, ní ibi kan náà. Iye owó tó ga ní ọjà tó jìnnà lè kéré sí i lẹ́yìn owó ọkọ̀, owó ìkẹ́rù, owó ọjà àti àdánù. Ṣírò iye owó ní oko rẹ: iye owó ọjà yọ gbogbo owó tí a ná láti dé ibẹ̀.",
            "Fóònù ń ṣèrànwọ́. Kọ àkọsílẹ̀ iye owó tó rọrùn lọ́sẹ̀ọ̀sẹ̀, pín in nínú WhatsApp ẹgbẹ́, kí o sì lo ẹ̀rọ ìṣirò tàbí olùrànlọ́wọ́ AI láti fi àwọn ìfilọ̀ wé ara wọn. Ṣọ́ra fún jìbìtì: ẹnikẹ́ni tí ó bá ní kí o san owó kí o tó lè rí iye owó gíga tí ó \"dájú\", tàbí tí ó béèrè PIN owó orí fóònù rẹ, kì í ṣe olùrà gidi."
          ],
          steps: ["Gba iye owó láti ó kéré tán orísun mẹ́ta: olùrà, rédíò, iṣẹ́ ìjọba.", "Ṣàyẹ̀wò pé ọ̀kọ̀ọ̀kan jẹ́ fún irè oko kan náà, ìpele kan náà àti ìwọ̀n kan náà.", "Yọ owó ọkọ̀, owó ìkẹ́rù, owó ọjà àti àdánù kúrò láti rí iye owó ní oko.", "Kọ iye owó sílẹ̀ lọ́sẹ̀ọ̀sẹ̀ kí o sì pín in fún ẹgbẹ́.", "Má ṣe fetí sí ẹnikẹ́ni tí ó bá béèrè owó tàbí PIN kí ó tó fún ọ ní iye owó."],
          words: [["Iye owó ẹnu oko (farm-gate price)", "iye owó tí olùrà ń san fún ọ ní oko rẹ."], ["Iye owó ọjà ọ̀pọ̀ (wholesale price)", "iye owó fún ọ̀pọ̀ ọjà tí a tà fún àwọn oníṣòwò tàbí ṣọ́ọ̀bù."], ["Iṣẹ́ ìsọfúnni ọjà", "iṣẹ́ tí ń tẹ iye owó ọjà lọ́wọ́lọ́wọ́ jáde."]],
          slides: [
            { title: "Ó kéré tán orísun mẹ́ta", bullets: ["Olùrà púpọ̀", "Ìròyìn ọjà lórí rédíò", "Iṣẹ́ ìjọba (Kenya: KAMIS)"] },
            { title: "Fi ohun tí ó jọra wé ara wọn", bullets: ["Irè oko, ìpele àti ìwọ̀n kan náà", "Iye owó ọjà yọ owó ọkọ̀ àti owó tí a ń san", "= iye tí ó jẹ́ ní oko rẹ"] },
            { title: "Lo fóònù lọ́nà ọgbọ́n", bullets: ["Àkọsílẹ̀ iye owó lọ́sẹ̀ọ̀sẹ̀; pín in fún ẹgbẹ́", "Ẹ̀rọ ìṣirò tàbí AI láti fi ìfilọ̀ wé ara wọn", "Olùrà gidi kì í béèrè owó tàbí PIN"] }
          ],
          sources: [KAMIS],
          tryIt: "Ní ọ̀sẹ̀ yìí, gba iye owó irè oko kan láti orísun mẹ́ta kí o sì kọ wọ́n sínú tábìlì: orísun, iye owó, ìpele, ìwọ̀n, ibi. Ṣírò iye owó ní oko rẹ fún méjì tó dára jù lẹ́yìn owó ọkọ̀. Ìfilọ̀ wo ló ń sanwó jù ní tòótọ́?",
          youCanNow: "ṣàyẹ̀wò iye owó láti orísun púpọ̀, kí o sì ṣírò ìfilọ̀ tí ó ń sanwó jù ní tòótọ́.",
          quickCheck: [
            { objective: "O5", q: "Kí ni \"fi ohun tí ó jọra wé ara wọn\" túmọ̀ sí fún iye owó?", options: ["Fi iye owó lórí kílò kan tàbí àpò kan ti ìpele kan náà ní ibi kan náà wé ara wọn", "Fi iye owó tó ga jù nìkan wé ara wọn", "Fi ọdún yìí wé ti ọdún mẹ́wàá sẹ́yìn", "Fi àgbàdo wé tòmátì"], answer: 0, why: "A lè fi iye owó wé ara wọn lọ́nà tó tọ́ nìkan tí wọ́n bá jẹ́ ti ìpele, ìwọ̀n àti ibi kan náà." },
            { objective: "O5", q: "Ẹgbẹ́ rẹ fẹ́ máa tẹ̀lé iye owó lọ́sẹ̀ọ̀sẹ̀. Kí ni o máa ṣe?", options: ["Béèrè lọ́wọ́ oníṣòwò kan lẹ́ẹ̀kan ní àsìkò kan", "Kọ àkọsílẹ̀ iye owó tó rọrùn lọ́sẹ̀ọ̀sẹ̀ kí o sì pín in nínú WhatsApp ẹgbẹ́", "Méfò láti ti ọdún tó kọjá", "Dúró kí olùrà sọ fún ọ"], answer: 1, why: "Àkọsílẹ̀ iye owó lọ́sẹ̀ọ̀sẹ̀ tí a pín nínú ẹgbẹ́ ń ran àwọn ọmọ ẹgbẹ́ lọ́wọ́ láti mọ iye owó kí wọ́n tó tà." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Àdéhùn pẹ̀lú àwọn olùrà",
          minutes: 6,
          goal: "Ka àdéhùn olùrà kí o sì ṣàyẹ̀wò àwọn kókó pàtàkì kí ẹgbẹ́ tó fọwọ́ sí i.",
          text: [
            "Àdéhùn (contract) jẹ́ àdéhùn tí a kọ sílẹ̀ láàárín ẹgbẹ́ àti olùrà. Àdéhùn tó dára ń fúnni ní ọjà tí ó dájú àti iye owó tí a mọ̀; àdéhùn búburú lè fi ẹgbẹ́ sílẹ̀ pẹ̀lú irè oko tí ẹnikẹ́ni kò wá kó, tàbí owó tí kò dé láé. Kọ gbogbo àdéhùn sílẹ̀, kódà pẹ̀lú olùrà tí o mọ̀.",
            "Ṣàyẹ̀wò àwọn kókó wọ̀nyí: irè oko wo àti ìpele wo; iye mélòó àti nígbà wo; iye owó, tàbí bí a ṣe máa pinnu rẹ̀ gan-an (fún àpẹẹrẹ iye owó ọjà ní ọjọ́ ìfijíṣẹ́ pẹ̀lú tàbí yọ iye kan); ibi tí a ti máa fi jíṣẹ́ àti ẹni tí ó máa san owó ọkọ̀; bí a ṣe máa ṣàyẹ̀wò dídára àti ohun tí ó máa ṣẹlẹ̀ sí irè oko tí a kọ̀; ìgbà àti bí a ṣe máa sanwó; ohun tí ó máa ṣẹlẹ̀ tí ìkórè bá bàjẹ́ tàbí tí olùrà kò bá wá kó o; àti bí a ṣe máa yanjú aáwọ̀.",
            "Tí apá kan kò bá yé ọ, ní kí olùrà ṣàlàyé rẹ̀ ní ìwé. Ka á sókè nínú ìpàdé àwọn ọmọ ẹgbẹ́ kí gbogbo ènìyàn lè mọ iṣẹ́ wọn, pẹ̀lú pé kò sí títa lẹ́yìn ẹgbẹ́. Ní kí ọ́fíìsì ẹgbẹ́ alájọṣe, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí agbẹjọ́rò ṣàyẹ̀wò àwọn àdéhùn ńlá. Olùrànlọ́wọ́ AI lè ṣàlàyé ọ̀rọ̀ tí ó le ní èdè tó rọrùn, ṣùgbọ́n má ṣe tẹ ìsọfúnni báńkì ẹgbẹ́ tàbí PIN sínú rẹ̀ láéláé, kò sì lè rọ́pò ìmọ̀ràn òfin."
          ],
          steps: ["Gba ìfilọ̀ náà ní ìwé.", "Ṣàyẹ̀wò irè oko, ìpele, iye àti àwọn ọjọ́.", "Ṣàyẹ̀wò iye owó tàbí bí a ṣe máa pinnu rẹ̀, ibi ìfijíṣẹ́ àti ẹni tí ó máa san owó ọkọ̀.", "Ṣàyẹ̀wò àyẹ̀wò dídára, òfin kíkọ̀ irè oko, ọjọ́ ìsanwó àti ọ̀nà ìsanwó.", "Ṣàyẹ̀wò ohun tí ó máa ṣẹlẹ̀ tí ìkórè bá bàjẹ́ tàbí tí olùrà kò bá wá kó o, àti bí a ṣe máa yanjú aáwọ̀.", "Ka á fún àwọn ọmọ ẹgbẹ́; jẹ́ kí a ṣàyẹ̀wò àwọn àdéhùn ńlá kí ẹ tó fọwọ́ sí i."],
          words: [["Àdéhùn (contract)", "àdéhùn tí a kọ sílẹ̀ tí àwọn méjèèjì gbọ́dọ̀ mú ṣẹ."], ["Kíkọ̀ irè oko (rejection)", "nígbà tí olùrà bá kọ irè oko tí kò bá dídára tí a fohùn ṣọ̀kan lé lórí mu."], ["Aáwọ̀ (dispute)", "èdèkòyédè láàárín ẹgbẹ́ àti olùrà."]],
          slides: [
            { title: "Nígbà gbogbo ní ìwé", bullets: ["Kódà pẹ̀lú olùrà tí o mọ̀", "Ọjà tí ó dájú àti iye owó tí a mọ̀", "Àdéhùn búburú lè ná gbogbo ẹgbẹ́ lówó"] },
            { title: "Ṣàyẹ̀wò àwọn kókó", bullets: ["Irè oko, ìpele, iye, àwọn ọjọ́", "Iye owó tàbí bí a ṣe ń pinnu rẹ̀; ìfijíṣẹ́ àti owó ọkọ̀", "Àyẹ̀wò dídára, kíkọ̀ irè oko, ọjọ́ àti ọ̀nà ìsanwó"] },
            { title: "Nígbà tí nǹkan bá dàrú", bullets: ["Ìkórè bàjẹ́ tàbí olùrà kò wá kó o", "Bí a ṣe máa yanjú aáwọ̀", "Ní kí olùrà ṣàlàyé ní ìwé"] },
            { title: "Kí ẹ tó fọwọ́ sí i", bullets: ["Ka á sókè fún àwọn ọmọ ẹgbẹ́", "Àdéhùn ńlá: ọ́fíìsì ẹgbẹ́ alájọṣe, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí agbẹjọ́rò", "AI lè ṣàlàyé ọ̀rọ̀; kò sí ìsọfúnni báńkì tàbí PIN"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò títà ẹgbẹ́ ojú-ewé kan rẹ fún irè oko kan. Fi ohun tí ẹgbẹ́ wà fún sínú rẹ̀, òfin ẹgbẹ́ márùn-ún, ibi tí ẹ máa forúkọ sílẹ̀, àwọn àkọsílẹ̀ yín, bí àwọn ọmọ ẹgbẹ́ ṣe ń mú irè oko wá àti bí a ṣe ń sanwó fún wọn, iye owó láti orísun mẹ́ta, àti àwọn kókó àdéhùn tí o máa ṣàyẹ̀wò kí ẹ tó fọwọ́ sí i.",
          youCanNow: "ka àdéhùn olùrà, ṣàyẹ̀wò àwọn kókó pàtàkì rẹ̀, kí o sì ṣètò bí ẹgbẹ́ rẹ ṣe máa tà papọ̀.",
          quickCheck: [
            { objective: "O6", q: "Kí ni àdéhùn olùrà?", options: ["Ìwé ẹ̀rí fún àpò kan", "Ọ̀rọ̀ WhatsApp tí ó ń kí ọ", "Àdéhùn tí a kọ sílẹ̀ láàárín ẹgbẹ́ àti olùrà", "Owó ẹ̀yáwó láti báńkì"], answer: 2, why: "Àdéhùn jẹ́ àdéhùn tí a kọ sílẹ̀ tí ó sọ ohun tí àwọn méjèèjì máa ṣe." },
            { objective: "O6", q: "Àwọn ọmọ ẹgbẹ́ kò lóye kókó dídára nínú àdéhùn náà. Kí ni o máa ṣe kí ẹ tó fọwọ́ sí i?", options: ["Fọwọ́ sí i kíákíá kí olùrà tó lọ", "Jẹ́ kí alága nìkan fọwọ́ sí i", "Fojú fo kókó dídára", "Ní kí olùrà ṣàlàyé ní ìwé, kí o sì kà á sókè nínú ìpàdé àwọn ọmọ ẹgbẹ́"], answer: 3, why: "A ń ṣàlàyé àwọn apá tí kò yé ní ìwé, a sì ń kà wọ́n sókè kí gbogbo ọmọ ẹgbẹ́ lè mọ iṣẹ́ wọn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídé ọjà papọ̀",
        questions: [
          { objective: "O4", q: "Kí ló dé tí àwọn olùrà ńlá fi fẹ́ràn láti rà lọ́wọ́ ẹgbẹ́?", options: ["Ẹgbẹ́ máa ń tà ní owó tó kéré jù nígbà gbogbo", "Ẹgbẹ́ lè pèsè ẹrù ńlá tí ó dọ́gba lásìkò", "Ẹgbẹ́ kò nílò dídára", "Òfin ní kí olùrà ṣe bẹ́ẹ̀"], answer: 1, why: "Ìkójọpọ̀ irè oko ń fúnni ní ọ̀pọ̀ àti dídára déédéé tí àwọn olùrà ńlá nílò." },
          { objective: "O4", q: "Ní ibùdó ìkójọpọ̀, ìgbà wo ló yẹ kí a wọ̀n irè oko ọmọ ẹgbẹ́ kan?", options: ["Níwájú ọmọ ẹgbẹ́ náà, lẹ́yìn náà a kọ ọ́ sílẹ̀ a sì fún un ní ìwé ẹ̀rí", "Ní ìkọ̀kọ̀ ní alẹ́", "Lẹ́yìn tí olùrà bá sanwó nìkan", "Kò sí ìgbà kankan; méfò rẹ̀"], answer: 0, why: "Wíwọ̀n ní gbangba àti ìwé ẹ̀rí ń kọ́ ìfọkàntán, wọ́n sì ń fi ìpín ọmọ ẹgbẹ́ kọ̀ọ̀kan hàn." },
          { objective: "O5", q: "Ọjà tó jìnnà ń san 10 percent jù, ṣùgbọ́n owó ọkọ̀ àti owó tí a ń san jẹ́ 15 percent. Kí ni òótọ́?", options: ["Ọjà tó jìnnà ń sanwó jù", "Àwọn méjèèjì ń san iye kan náà", "Owó ọkọ̀ kò ṣe pàtàkì", "Ọjà tó jìnnà ń sanwó díẹ̀ ní oko rẹ"], answer: 3, why: "Lẹ́yìn owó tí a ná, iye owó ní oko láti ọjà tó jìnnà kéré sí i." },
          { objective: "O5", q: "Ní Kenya, iṣẹ́ ìjọba wo ló ń tẹ iye owó ọjà irè oko àti ẹran ọ̀sìn jáde?", options: ["KAMIS", "KEBS", "KRA", "KMD"], answer: 0, why: "KAMIS, tí Ilé-iṣẹ́ Ètò Ọ̀gbìn ń ṣe, ń tẹ iye owó ọjà jáde." },
          { objective: "O6", q: "Kókó àdéhùn wo ló sọ ohun tí ó máa ṣẹlẹ̀ tí olùrà kò bá wá kó irè oko?", options: ["Orúkọ ẹgbẹ́", "Ọjọ́ ìpàdé", "Kókó nípa àìwá kó tàbí àìfi jíṣẹ́", "Àwọ̀ àwọn àpò"], answer: 2, why: "Àdéhùn gbọ́dọ̀ sọ ohun tí ó máa ṣẹlẹ̀ tí ẹnìkan nínú àwọn méjèèjì kò bá lè mú àdéhùn ṣẹ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ẹgbẹ́ Alájọṣe Àgbẹ̀ àti Bí A Ṣe Ń Dé Ọjà",
    questions: [
      { objective: "O1", q: "Èwo ni àǹfààní ẹgbẹ́ àgbẹ̀?", options: ["Sísan owó púpọ̀ sí i fún ohun èlò oko", "Rírà ohun èlò oko lọ́pọ̀ ní owó tó dín kù", "Títà fúnra ẹni ní ẹnu oko", "Àìkọ àkọsílẹ̀ kankan"], answer: 1, why: "Rírà lọ́pọ̀ ń dín owó ohun èlò oko kù." },
      { objective: "O1", q: "Gẹ́gẹ́ bí International Cooperative Alliance ti wí, àwọn ọmọ ẹgbẹ́ alájọṣe:", options: ["Ni olówó rẹ̀, wọ́n sì ń darí rẹ̀ papọ̀ ní ọ̀nà ìjọba tiwa-n-tiwa", "Ń ṣiṣẹ́ fún olówó àdáni kan", "Kò ní ìbò", "Gbọ́dọ̀ jẹ́ òṣìṣẹ́ ìjọba gbogbo"], answer: 0, why: "Ẹgbẹ́ alájọṣe jẹ́ ti gbogbo ọmọ ẹgbẹ́, wọ́n sì ń darí rẹ̀ papọ̀ ní ọ̀nà ìjọba tiwa-n-tiwa." },
      { objective: "O1", q: "Èwo ni ìdí tó wọ́pọ̀ tí àwọn ẹgbẹ́ àgbẹ̀ fi ń wó?", options: ["Àkọsílẹ̀ tó yé", "Ìsanwó lásìkò", "Àìfọkàntán àti àkọsílẹ̀ tí kò dára", "Ìpàdé tí ó hàn gbangba"], answer: 2, why: "Àìfọkàntán àti àkọsílẹ̀ tí kò dára ń fọ́ ẹgbẹ́." },
      { objective: "O2", q: "Kí ni òfin ẹgbẹ́ (by-laws)?", options: ["Owó ẹ̀yáwó báńkì", "Iye owó ọjà", "Àdéhùn olùrà", "Àwọn òfin tí ẹgbẹ́ kọ sílẹ̀"], answer: 3, why: "Òfin ẹgbẹ́ ń sọ bí ẹgbẹ́ ṣe ń ṣiṣẹ́." },
      { objective: "O2", q: "\"Ọmọ ẹgbẹ́ kan, ìbò kan\" túmọ̀ sí:", options: ["Àwọn ọmọ ẹgbẹ́ tí ìpín wọn pọ̀ jù ń ní ìbò púpọ̀ sí i", "Àwọn olórí nìkan ló ń dìbò", "Ọmọ ẹgbẹ́ kọ̀ọ̀kan ní ìbò kan", "A ń ra ìbò"], answer: 2, why: "Ẹgbẹ́ alájọṣe ń fún ọmọ ẹgbẹ́ kọ̀ọ̀kan ní ìbò kan." },
      { objective: "O2", q: "Ní Kenya, a ń forúkọ ẹgbẹ́ alájọṣe sílẹ̀ lábẹ́ Co-operative Societies Act nípasẹ̀:", options: ["Commissioner for Co-operative Development", "Kenya Wildlife Service", "Olùrà àdáni kan", "Ẹ̀ka ìjọba tí ń sọ nípa ojú ọjọ́"], answer: 0, why: "Commissioner ló ń forúkọ àwọn ẹgbẹ́ sílẹ̀, bẹ̀rẹ̀ láti ọ́fíìsì ẹgbẹ́ alájọṣe ti county." },
      { objective: "O2", q: "Ní Ghana, níbo ni àwọn ẹgbẹ́ alájọṣe ti ń forúkọ sílẹ̀?", options: ["Àjọ tí ń sọ nípa ojú ọjọ́", "Ilé iṣẹ́ rédíò kan", "Ṣọ́ọ̀bù èyíkéyìí", "Department of Co-operatives (ọ́fíìsì agbègbè)"], answer: 3, why: "Department of Co-operatives ti Ghana ló ń forúkọ àwọn ẹgbẹ́ sílẹ̀ tí ó sì ń bójú tó wọn." },
      { objective: "O2", q: "Kí o tó béèrè fún ìforúkọsílẹ̀, o yẹ kí o:", options: ["Méfò owó tí a máa san", "Ṣàyẹ̀wò fọ́ọ̀mù, owó àti ìgbésẹ̀ tó wà lọ́wọ́lọ́wọ́ pẹ̀lú ọ́fíìsì ẹgbẹ́ alájọṣe", "Dà òfin orílẹ̀-èdè míì kọ", "Fò òfin ẹgbẹ́ ru"], answer: 1, why: "Òfin àti owó ń yí padà, nítorí náà ṣàyẹ̀wò pẹ̀lú ọ́fíìsì náà." },
      { objective: "O3", q: "Àkọsílẹ̀ ìpàdé (minutes) ń kọ:", options: ["Àkókò tí ẹnì kọ̀ọ̀kan dé nìkan", "Iye owó ọjà", "PIN àwọn ọmọ ẹgbẹ́", "Àwọn tó wá, ohun tí a pinnu àti ẹni tí ó máa ṣe kí ni àti nígbà wo"], answer: 3, why: "Àkọsílẹ̀ ìpàdé ni àkọsílẹ̀ àwọn ìpinnu àti iṣẹ́ tí a máa ṣe." },
      { objective: "O3", q: "Èwo ni ọ̀kan lára àkọsílẹ̀ ìpìlẹ̀ mẹ́rin ẹgbẹ́?", options: ["Ìwé ìmúwá irè oko", "Ìwé ìrántí ojú ọjọ́", "Àkọsílẹ̀ PIN fóònù àwọn olùrà", "Àwo-orin fọ́tò"], answer: 0, why: "Ìwé ìmúwá irè oko ń fi ohun tí ọmọ ẹgbẹ́ kọ̀ọ̀kan mú wá hàn." },
      { objective: "O3", q: "Kí ló dé tí àkáǹtì ẹgbẹ́ fi ní olùfọwọ́sí méjì?", options: ["Láti mú kí gbogbo ìsanwó lọ́ra", "Kí ẹnì kan ṣoṣo má bàa lè gbé owó fúnra rẹ̀", "Nítorí pé báńkì máa ń gba owó díẹ̀", "Kí àwọn ọmọ ẹgbẹ́ má bàa rí ìròyìn owó láé"], answer: 1, why: "Ẹni méjì tí ń fọwọ́ sí ìsanwó ń dáàbò bo owó ẹgbẹ́." },
      { objective: "O3", q: "Co-operative Societies Act ti Nàìjíríà ní kí ìwé owó ẹgbẹ́ tí a forúkọ rẹ̀ sílẹ̀ jẹ́:", options: ["Ìkọ̀kọ̀", "Sísun níná lọ́dọọdún", "Ṣíṣe àyẹ̀wò rẹ̀ (audit) lọ́dọọdún", "Píparí sí ọkàn nìkan"], answer: 2, why: "Òfin náà ní kí a ṣe àyẹ̀wò ìwé owó ní òpin ọdún owó kọ̀ọ̀kan." },
      { objective: "O4", q: "Ìkójọpọ̀ irè oko (aggregation) túmọ̀ sí:", options: ["Títà àpò kan lẹ́ẹ̀kan", "Pínpín ẹgbẹ́ sí wẹ́wẹ́", "Gbígbé iye owó sókè fúnra ẹni", "Kíkó irè oko ọ̀pọ̀ ọmọ ẹgbẹ́ jọ sí ẹrù ńlá kan"], answer: 3, why: "Ìkójọpọ̀ ń kó irè oko díẹ̀díẹ̀ jọ fún àwọn olùrà ńlá." },
      { objective: "O4", q: "Báwo ló ṣe yẹ kí a sanwó fún àwọn ọmọ ẹgbẹ́ lẹ́yìn títà ẹgbẹ́?", options: ["Gẹ́gẹ́ bí àkọsílẹ̀: ìwọ̀n x iye owó fún ìpele, yọ owó tí a fohùn ṣọ̀kan lé lórí kúrò", "Lọ́gbọọgba, láìka ohun tí wọ́n mú wá sí", "Àwọn olórí nìkan ni a ń san fún", "Nígbàkígbà tí ó bá wu akápò"], answer: 0, why: "Ìsanwó tó tọ́ tí a kọ sílẹ̀ ń pa ìfọkàntán mọ́, ó sì ń dín títa lẹ́yìn ẹgbẹ́ kù." },
      { objective: "O4", q: "Ààbò tó dára jù lọ lọ́wọ́ títa lẹ́yìn ẹgbẹ́ ni:", options: ["Iye owó ìkọ̀kọ̀", "Sísanwó pẹ́", "Ìsanwó tí ó yára, tí ó tọ́, tí ó sì hàn gbangba", "Àìní àdéhùn"], answer: 2, why: "Àwọn ọmọ ẹgbẹ́ máa ń dúró ṣinṣin nígbà tí ẹgbẹ́ bá sanwó dáadáa àti lásìkò." },
      { objective: "O5", q: "Orísun iye owó mélòó ni o yẹ kí o ṣàyẹ̀wò kí o tó tà?", options: ["Kò sí", "Olùrà kan ṣoṣo", "Rédíò nìkan", "Ó kéré tán mẹ́ta"], answer: 3, why: "Orísun púpọ̀ ń fi iye owó ọjà gidi hàn." },
      { objective: "O5", q: "Ẹnìkan ṣèlérí iye owó gíga tí ó dájú tí o bá kọ́kọ́ san owó kan tí o sì fún un ní PIN owó orí fóònù rẹ. Èyí jẹ́:", options: ["Olùrà lásán", "Ó ṣeé ṣe kí ó jẹ́ jìbìtì", "Òfin ẹgbẹ́ alájọṣe", "Iṣẹ́ ìjọba"], answer: 1, why: "Olùrà gidi kì í béèrè owó tàbí PIN." },
      { objective: "O5", q: "Iye owó ìfilọ̀ kan ní oko ni:", options: ["Iye owó ọjà yọ owó ọkọ̀, owó tí a ń san àti àdánù", "Iye owó tó ga jù tí o gbọ́", "Iye owó ní olú-ìlú", "Iye owó ọjà kékeré (retail)"], answer: 0, why: "Ohun tí o rí gbà ní tòótọ́ ní oko ni ohun tó ṣe pàtàkì." },
      { objective: "O6", q: "Kí ló yẹ kí a kọ sínú àdéhùn olùrà?", options: ["Orúkọ olùrà nìkan", "Iye owó tàbí bí a ṣe ń pinnu rẹ̀, iye, dídára, ìfijíṣẹ́ àti kókó ìsanwó", "PIN báńkì àwọn ọmọ ẹgbẹ́", "Kò sí nǹkan; bíbọ ọwọ́ ti tó"], answer: 1, why: "Àwọn kókó wọ̀nyí ń dáàbò bo ẹgbẹ́ tí nǹkan kan bá dàrú." },
      { objective: "O6", q: "O ń lo olùrànlọ́wọ́ AI láti lóye àdéhùn kan. Kí ni kò léwu?", options: ["Tẹ ìsọfúnni báńkì ẹgbẹ́ àti PIN sínú rẹ̀", "Fọwọ́ sí ohunkóhun tí ó bá sọ pé ó dára", "Ní kí ó ṣàlàyé ọ̀rọ̀ tí ó le, lẹ́yìn náà jẹ́ kí olùdámọ̀ràn ṣàyẹ̀wò àwọn àdéhùn ńlá", "Jẹ́ kí ó fọwọ́ sí i dípò rẹ"], answer: 2, why: "AI lè ṣàlàyé ọ̀rọ̀ ṣùgbọ́n kò lè rọ́pò ìmọ̀ràn òfin, ìsọfúnni àdáni sì gbọ́dọ̀ wà ní ìkọ̀kọ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      3,
      7,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      {
        name: "Ohun tí ẹgbẹ́ wà fún àti òfin ẹgbẹ́",
        objective: "O2",
        notYet: "Kò sí ohun tí ẹgbẹ́ wà fún tó yé, tàbí òfin kò tó márùn-ún.",
        meets: "Orúkọ ẹgbẹ́, ohun tí ó wà fún, àti òfin ẹgbẹ́ pàtàkì márùn-ún, bí ọmọ ẹgbẹ́, ìdìbò, owó àti ìbáwí.",
        exceeds: "Òfin náà tún sọ nípa títa lẹ́yìn ẹgbẹ́ àti bí a ṣe máa pín owó tó bá ṣẹ́kù."
      },
      {
        name: "Ìforúkọsílẹ̀",
        objective: "O2",
        notYet: "Kò dárúkọ ọ́fíìsì ìforúkọsílẹ̀ kankan.",
        meets: "Ó dárúkọ ọ́fíìsì tí ẹgbẹ́ máa ti forúkọ sílẹ̀ àti ohun tí a gbọ́dọ̀ ṣàyẹ̀wò níbẹ̀.",
        exceeds: "Ó ti pe ọ́fíìsì náà tàbí lọ síbẹ̀, ó sì kọ àwọn ìgbésẹ̀ lọ́wọ́lọ́wọ́ àti ọjọ́ náà sílẹ̀."
      },
      {
        name: "Àkọsílẹ̀ àti owó",
        objective: "O3",
        notYet: "Àkọsílẹ̀ kò sí, tàbí ẹnì kan ṣoṣo ló ń darí owó.",
        meets: "Àkọsílẹ̀ orúkọ ọmọ ẹgbẹ́, ìwé owó, ìwé ìmúwá irè oko àti àkọsílẹ̀ ìsanwó, pẹ̀lú ènìyàn méjì tí ń fọwọ́ sí ìsanwó.",
        exceeds: "Ó sọ bí a ṣe máa ka ìròyìn owó fún àwọn ọmọ ẹgbẹ́ àti bí a ṣe máa ṣàyẹ̀wò rẹ̀ lọ́dọọdún."
      },
      {
        name: "Ìmúwá, ìpele àti ìsanwó",
        objective: "O4",
        notYet: "Kò sí òfin ìkójọpọ̀ tàbí ti ìsanwó.",
        meets: "Bí àwọn ọmọ ẹgbẹ́ ṣe ń mú irè oko wá, bí a ṣe ń pín in sí ìpele tí a sì ń wọ̀n ọ́n níwájú wọn, àti bí àti ìgbà tí a máa sanwó fún wọn.",
        exceeds: "A ti kọ owó ẹgbẹ́ tí a fohùn ṣọ̀kan lé lórí àti ọjọ́ ìsanwó sílẹ̀ ṣáájú."
      },
      {
        name: "Iye owó",
        objective: "O5",
        notYet: "Orísun iye owó kò tó mẹ́ta, tàbí kò ṣírò iye owó ní oko.",
        meets: "Iye owó láti ó kéré tán orísun mẹ́ta, tí a fi ohun tí ó jọra wé ara wọn, pẹ̀lú iye owó ní oko tí a ti ṣírò.",
        exceeds: "Ó ní àkọsílẹ̀ iye owó ọ̀sẹ̀ọ̀sẹ̀ fún ọ̀sẹ̀ mélòó kan."
      },
      {
        name: "Kókó àdéhùn",
        objective: "O6",
        notYet: "Kókó kò tó mẹ́fà, tàbí kókó pàtàkì bí ìsanwó kò sí.",
        meets: "Kókó àdéhùn mẹ́fà láti ṣàyẹ̀wò, pẹ̀lú iye owó, dídára, ìfijíṣẹ́, ìsanwó àti àìwá kó irè oko.",
        exceeds: "Ó dárúkọ ẹni tí ó máa ṣàyẹ̀wò àwọn àdéhùn ńlá, bí ọ́fíìsì ẹgbẹ́ alájọṣe tàbí agbẹjọ́rò."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ti ètò títà ẹgbẹ́",
      "Àwọn ẹgbẹ́ tí wọ́n sọ pé àwọn ti kọ òfin ẹgbẹ́, ń kọ àkọsílẹ̀ tàbí ti forúkọ sílẹ̀ láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé)",
      "Àwọn ẹgbẹ́ tí wọ́n sọ pé àwọn ti ṣe títà ẹgbẹ́ pẹ̀lú àdéhùn ìwé, àti iye owó náà ní ìfiwéra pẹ̀lú títà fúnra ẹni",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn yẹra fún jìbìtì owó-fún-iye-owó tàbí ti PIN"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀ àti gègé, tàbí ìwé àkọsílẹ̀ fún ẹgbẹ́",
      "Fóònù lásán fún iye owó, SMS tàbí WhatsApp àti ẹ̀rọ ìṣirò",
      "Àpẹẹrẹ òfin ẹgbẹ́ láti ọ́fíìsì ẹgbẹ́ alájọṣe àti àpẹẹrẹ àdéhùn olùrà, tí ó bá wà",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò pẹ̀lú ẹgbẹ́ láti kọ ètò títà"
    ],
    facilitatorNotes: [
      "Ṣe ẹ̀kọ́ náà pẹ̀lú ẹgbẹ́ gidi tàbí ẹgbẹ́ tí ń dá sílẹ̀: ẹ jọ ṣe ìdánwò ṣáájú, lẹ́yìn náà ẹ ṣe ìpàdé àṣeṣe kúkúrú pẹ̀lú ètò ìpàdé àti àkọsílẹ̀ ìpàdé.",
      "Pe òṣìṣẹ́ ẹgbẹ́ alájọṣe láti ṣàlàyé ìforúkọsílẹ̀; ṣàyẹ̀wò owó àti ìgbésẹ̀ lọ́wọ́lọ́wọ́ ṣáájú ìpàdé náà.",
      "Ẹ ṣe ọjọ́ ìkójọpọ̀ àṣeṣe pẹ̀lú òṣùwọ̀n, pípín sí ìpele àti ìwé ìmúwá irè oko.",
      "Má ṣe ní kí àwọn ọmọ ẹgbẹ́ fi PIN tàbí ìsọfúnni báńkì hàn láéláé; lo àmì ìdúrópò nínú àpẹẹrẹ àkọsílẹ̀.",
      "Fi rubric ṣe àmì fún ètò títà náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
