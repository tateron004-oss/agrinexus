"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-export-gap-certification.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const GGAP_IFA = { name: "GLOBALG.A.P.: Integrated Farm Assurance (IFA) fún èso àti ẹ̀fọ́ (àwọn àkòrí, ọ̀nà fún ẹgbẹ́ àgbẹ̀, àwọn apá ìnáwó, ìgbésẹ̀ sí ìwé-ẹ̀rí)", url: "https://globalgap.org/what-we-offer/solutions/ifa-fruit-and-vegetables/" };
const GGAP_PORTAL = { name: "GLOBALG.A.P.: Supply Chain Portal (ṣàyẹ̀wò ìwé-ẹ̀rí pẹ̀lú nọ́mbà GLOBALG.A.P.)", url: "https://globalgap.org/supply-chain-portal/" };
const EU_MRL = { name: "European Commission: EU Pesticides Database (ìwọ̀n àṣẹ́kù oògùn tó ga jù fún oúnjẹ àti oògùn kọ̀ọ̀kan)", url: "https://food.ec.europa.eu/plants/pesticides/eu-pesticides-database_en" };
const CODEX = { name: "Codex Alimentarius (FAO/WHO): ìlànà oúnjẹ àgbáyé, pẹ̀lú ìwọ̀n àṣẹ́kù oògùn apakòkòrò", url: "https://codex.fao.org/" };
const KE_VEG_DROP = { name: "Business Daily (dátà KNBS, ìròyìn AFA): owó tí Kẹ́ńyà ń rí láti ẹ̀fọ́ tí ó ń kó lọ sí òkèèrè dín kù nítorí òfin oògùn EU; ìdádúró MRL pọ̀ sí i láti 25 (2023) sí 57 (2024)", url: "https://www.businessdailyafrica.com/bd/economy/kenya-s-vegetable-export-earnings-down-on-eu-pesticide-rules-5392706" };
const FAO_PEST_REG = { name: "FAO Pesticide Registration Toolkit: àkọsílẹ̀ oògùn apakòkòrò tí a forúkọ sílẹ̀ ní àwọn orílẹ̀-èdè Áfíríkà", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const KE_AFA = { name: "Kenya Agriculture and Food Authority (AFA), Horticultural Crops Directorate: ìwé-àṣẹ ìkójà lọ sí òkèèrè àti ìforúkọsílẹ̀ (ṣàyẹ̀wò òfin tuntun)", url: "https://www.afa.go.ke" };
const KEPHIS_PHYTO = { name: "KEPHIS (Kẹ́ńyà): iṣẹ́ ìlera ọ̀gbìn àti ìwé-ẹ̀rí fún ọjà òkèèrè", url: "https://www.kephis.go.ke/phytosanitary-services" };
const NEPC = { name: "Nigerian Export Promotion Council: ìforúkọsílẹ̀ olùkójà lọ sí òkèèrè lórí ayélujára", url: "https://nepc.gov.ng/get-started/e-registration/" };
const GEPA = { name: "Ghana Export Promotion Authority (GEPA): forúkọ sílẹ̀ bí olùkójà lọ sí òkèèrè", url: "https://www.gepaghana.org/" };

module.exports = {
  id: "agri-export-gap-certification-yo",
  lang: "yo",
  translationOf: "agri-export-gap-certification",
  category: "Agriculture (Africa)",
  name: "Títà fún Súpamákẹ́ẹ̀tì, Ilé-iṣẹ́ Aṣèlọ́jà àti Olùrà Òkèèrè: Ìlànà àti Ìwé-ẹ̀rí",
  skills: "Kíka ohun tí olùrà ń béèrè, Lílo Ìlànà Iṣẹ́ Àgbẹ̀ Rere, Títọ́jú àkọsílẹ̀ títọpa ọjà, Wíwọn àǹfààní ìwé-ẹ̀rí, Títẹ̀lé ìwọ̀n àṣẹ́kù oògùn àti òfin ọjà òkèèrè, Ṣíṣe ìfilọ̀ ìpèsè",
  outcome: "ṣàyẹ̀wò bóyá oko tàbí ẹgbẹ́ rẹ ti ṣetán láti pèsè ọjà fún súpamákẹ́ẹ̀tì, ilé-iṣẹ́ aṣèlọ́jà tàbí olùrà òkèèrè, dí àwọn àlàfo pàtàkì nínú ìlànà iṣẹ́, àkọsílẹ̀ àti ìwé-ẹ̀rí, kí o sì kọ ìfilọ̀ ìpèsè tí o lè dúró lé lórí.",
  about: [
    "Súpamákẹ́ẹ̀tì, ilé-iṣẹ́ aṣèlọ́jà (processor) àti olùrà òkèèrè lè ra ọjà tó pọ̀ ju ọjà àdúgbò lọ, wọ́n sì máa ń san owó tó jù fún dídára tí kì í yí padà. Ṣùgbọ́n wọ́n ń béèrè nǹkan tí ọ̀pọ̀ oko kékeré kò tíì ń ṣe: iye ọjà tí kì í yẹ̀, ìpele kan náà ní gbogbo ìgbà, àkọsílẹ̀ tí ó ń tọpa gbogbo àpótí, ààbò oúnjẹ, àti nígbà míì ìwé-ẹ̀rí bí GLOBALG.A.P. Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ oníṣòwò tí ń dàgbà, ẹgbẹ́ àgbẹ̀, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ ní Kẹ́ńyà, Nàìjíríà, Gánà, Senegal àti káàkiri Áfíríkà.",
    "O máa kọ́ ohun tí àwọn olùrà ńlá ń fẹ́, Ìlànà Iṣẹ́ Àgbẹ̀ Rere tí ó wà lẹ́yìn rẹ̀, bí o ṣe lè tọ́jú àkọsílẹ̀ tí ó ń tọpa ọjà padà sí ẹ̀ka oko, ohun tí ìwé-ẹ̀rí ń ná àti ohun tí ó ń mú wá, ìdí tí wọ́n fi ń kọ ọjà òkèèrè nítorí àṣẹ́kù oògùn apakòkòrò, àwọn àjọ ìjọba tí ó ń bójú tó ọjà òkèèrè, àti bí o ṣe lè pàdé olùrà, ṣe àdéhùn ìpèsè, kí o sì ṣe ìdájọ́ ètò àgbẹ̀ alábàáṣiṣẹ́ (outgrower scheme).",
    "Ó ń kọ́ lé ẹ̀kọ́ \"Ẹgbẹ́ Alájọṣe Àgbẹ̀ àti Bí A Ṣe Ń Dé Ọjà\", tí ó sọ nípa títà ní ẹgbẹ́ àti kíka àdéhùn. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Òfin, owó ìsanwó àti ìwọ̀n máa ń yí padà, nítorí náà ẹ̀kọ́ kọ̀ọ̀kan sọ ibi tí o ti lè ṣàyẹ̀wò. Àpẹẹrẹ lásán ni àwọn iye owó."
  ],
  finalTask: "Ṣe àkọsílẹ̀ ìmúrasílẹ̀ fún olùrà fún oko tàbí ẹgbẹ́ rẹ fún irè kan àti irú olùrà kan (súpamákẹ́ẹ̀tì, ilé-iṣẹ́ aṣèlọ́jà tàbí olùkójà lọ sí òkèèrè), sàmì sí ohun tí o ti ṣe àti ohun tí o gbọ́dọ̀ tún ṣe, lẹ́yìn náà kọ ìfilọ̀ ìpèsè ojú-ewé kan sí olùrà náà: irè àti ìpele, iye àti àkókò ìfijíṣẹ́, bí o ṣe ń pa ọjà mọ́ láìléwu tí ó sì ṣeé tọpa, ìwé-ẹ̀rí èyíkéyìí, ìpìlẹ̀ iye owó, àti àwọn òfin tí o fẹ́ nínú àdéhùn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ oníṣòwò tí ń dàgbà, ẹgbẹ́ àgbẹ̀ àti ẹgbẹ́ alájọṣe, àwọn alákòóso oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ ní Kẹ́ńyà, Nàìjíríà, Gánà, àwọn orílẹ̀-èdè Ìwọ̀-oòrùn Áfíríkà tí ń sọ Faransé àti káàkiri Áfíríkà, tí wọ́n ń ta èso àti ẹ̀fọ́ (ẹ̀wà French beans, píà, màngòrò, ọ̀pẹ òyìnbó, tòmátì) tàbí oúnjẹ pàtàkì (ẹ̀gẹ́, àgbàdo, ọkà bàbà, ìrẹsì) fún àwọn olùrà ńlá.",
    startingPoint: "Wọ́n lè gbin irè tó dára kí wọ́n sì tà á ní ọjà àdúgbò tàbí nípasẹ̀ ẹgbẹ́. Àwọn kan ń tọ́jú àkọsílẹ̀ oko ìpìlẹ̀. Díẹ̀ ló mọ ohun tí súpamákẹ́ẹ̀tì tàbí olùkójà lọ sí òkèèrè ń yẹ̀wò, bí ìwé-ẹ̀rí ṣe ń ṣiṣẹ́, tàbí ohun tí ìwọ̀n àṣẹ́kù oògùn jẹ́.",
    gap: "Àwọn olùrà ńlá ń kọ àgbẹ̀ tí kò lè fi iye ọjà àti ìpele tí kì í yẹ̀ hàn, àkọsílẹ̀ tí ó ṣeé tọpa àti lílo oògùn apakòkòrò láìléwu. Àjọ tí ó ń bójú tó iṣẹ́ àgbẹ̀ ní Kẹ́ńyà fúnra rẹ̀ so ìdínkù ńlá nínú owó ẹ̀fọ́ tí ó ń kó lọ sí òkèèrè mọ́ ìdádúró ọjà ní EU nítorí àṣẹ́kù oògùn. Àwọn àgbẹ̀ nílò láti rí àlàfo wọn, tún ìlànà iṣẹ́ àti àkọsílẹ̀ ṣe, wọn àǹfààní ìwé-ẹ̀rí, kí wọ́n sì ṣe ìfilọ̀ tí wọ́n lè mú ṣẹ.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń sọ Gẹ̀ẹ́sì bí èdè kejì",
      "Ẹ̀rọ: fóònù lásán tàbí smartphone; ìwé àkọsílẹ̀ oníwèé",
      "Owó: ìwé-ẹ̀rí àti àyẹ̀wò ń ná owó; ọ̀nà fún ẹgbẹ́ ṣe pàtàkì fún oko kékeré",
      "Òfin: ìwé-àṣẹ ọjà òkèèrè, ìwọ̀n àṣẹ́kù oògùn àti òfin ìwé-ẹ̀rí ń yí padà, wọ́n sì yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn àti láti ọjà kan sí òmíràn; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò orísun ìjọba",
      "Ààbò: oògùn apakòkòrò tí a forúkọ sílẹ̀ nìkan, tí a lò bí àmì-ìtọ́sọ́nà (label) ṣe sọ, pẹ̀lú aṣọ ààbò; kò sí nọ́mbà ìwọ̀n oògùn nínú ẹ̀kọ́ yìí"
    ],
    prerequisites: "Ó máa ṣèrànwọ́: \"Ẹgbẹ́ Alájọṣe Àgbẹ̀ àti Bí A Ṣe Ń Dé Ọjà\", àti \"Farm Records and Business Basics\" (Iṣẹ́ Àgbẹ̀ Bí Òwò àti Ìṣàkóso Oko). Kíkàwé àti ìṣirò ìpìlẹ̀."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní ohun tí súpamákẹ́ẹ̀tì, ilé-iṣẹ́ aṣèlọ́jà tàbí olùrà òkèèrè ń béèrè", action: "kọ ohun tí olùrà náà ń béèrè sílẹ̀ kí o sì fi wé ohun tí oko tàbí ẹgbẹ́ rẹ ń pèsè báyìí", standard: "tí ó bo iye ọjà, ìdúróṣinṣin ìpèsè, ìpele, títọpa ọjà àti ààbò oúnjẹ, pẹ̀lú àmì lórí àlàfo kọ̀ọ̀kan" },
    { id: "O2", condition: "Fún irè kan lórí oko rẹ", action: "kọ Ìlànà Iṣẹ́ Àgbẹ̀ Rere tí o máa tẹ̀lé sílẹ̀", standard: "tí ó bo oògùn apakòkòrò tí a forúkọ sílẹ̀ tí a lò bí àmì-ìtọ́sọ́nà ṣe sọ, aṣọ ààbò, àkókò ìdúró ṣáájú ìkórè lórí àmì-ìtọ́sọ́nà, omi mímọ́, ìmọ́tótó nígbà ìkórè àti ààbò òṣìṣẹ́" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìwé-ẹ̀rí bí GLOBALG.A.P.", action: "fi ìnáwó rẹ̀ wé àǹfààní rẹ̀ fún oko tàbí ẹgbẹ́ rẹ kí o sì dárúkọ ọ̀nà tí o máa gbà", standard: "tí ó dárúkọ apá ìnáwó mẹ́ta, àwọn ìgbésẹ̀ sí àyẹ̀wò (audit), àti bóyá ọ̀nà fún ẹgbẹ́ bá ọ mu" },
    { id: "O4", condition: "Fún àsìkò kan ti irè kan", action: "ṣètò àkọsílẹ̀ títọpa ọjà tí ó so lọ́ọ̀tì kọ̀ọ̀kan mọ́ ẹ̀ka oko rẹ̀, ohun èlò rẹ̀ àti ọjọ́ ìkórè rẹ̀", standard: "tí ó fi jẹ́ pé a lè tọpa àpótí èyíkéyìí padà sí ẹ̀ka oko àti gbogbo oògùn tí a fín láàárín ìṣẹ́jú díẹ̀" },
    { id: "O5", condition: "Tí a bá fún ọ ní ọjà òkèèrè kan tí o fẹ́ tà sí", action: "ṣàyẹ̀wò ìwọ̀n àṣẹ́kù oògùn àti àwọn àjọ ọjà òkèèrè ti orílẹ̀-èdè rẹ tí ó kàn ọ́", standard: "tí ó dárúkọ ibi tí a ti lè rí ìwọ̀n náà (fún àpẹẹrẹ EU Pesticides Database tàbí Codex) àti àwọn àjọ ọjà òkèèrè àti ìlera ọ̀gbìn ti orílẹ̀-èdè rẹ" },
    { id: "O6", condition: "Tí o bá ní ìpàdé pẹ̀lú olùrà tàbí ìfilọ̀ ètò àgbẹ̀ alábàáṣiṣẹ́", action: "kọ ìfilọ̀ ìpèsè àti àwọn òfin àdéhùn tí o nílò", standard: "tí ó sọ ìpele, iye, àkókò ìfijíṣẹ́, ìpìlẹ̀ iye owó, òfin kíkọ ọjà, òfin ìsanwó àti ohun tí ó máa ṣẹlẹ̀ tí ẹnìkan nínú yín kò bá ṣe ojúṣe rẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Ohun tí àwọn olùrà ńlá ń fẹ́, àti mímú oko rẹ ṣetán",
      lessons: [
        {
          title: "Ohun tí súpamákẹ́ẹ̀tì, ilé-iṣẹ́ aṣèlọ́jà àti olùkójà ń fẹ́",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọ ohun tí olùrà ńlá kan ń béèrè sílẹ̀ kí o sì sàmì sí ibi tí oko rẹ kò ti tó.",
          text: [
            "Àwọn olùrà ńlá ń ta ọjà fún àwọn oníbàárà tí ń retí ọjà kan náà, tí kò léwu, lórí pẹpẹ ní gbogbo ọ̀sẹ̀. Nítorí náà wọ́n fẹ́ nǹkan márùn-ún lọ́wọ́ rẹ: iye ọjà (tó láti kún àṣẹ wọn), ìdúróṣinṣin (ìpèsè ní ọ̀sẹ̀ dé ọ̀sẹ̀, kì í ṣe nígbà ìkórè nìkan), ìpele (ìwọ̀n, àwọ̀, bí ó ṣe pọ́n tó àti àbùkù, bí wọ́n ṣe sọ), títọpa ọjà (wọ́n lè mọ oko àti ẹ̀ka oko tí àpótí kan ti wá) àti ààbò oúnjẹ (kò sí àṣẹ́kù oògùn tó léwu, kòkòrò àrùn tàbí ìdọ̀tí).",
            "Olùrà kọ̀ọ̀kan yàtọ̀. Súpamákẹ́ẹ̀tì kan ní Nairobi tàbí Accra lè fẹ́ tòmátì ní ìwọ̀n àti àpótí kan pàtó, tí a ń fi jíṣẹ́ lẹ́ẹ̀mejì lọ́sẹ̀. Ilé-iṣẹ́ aṣèlọ́jà ní Nàìjíríà tí ń ra ẹ̀gẹ́ fún sítáàṣì tàbí tòmátì fún tòmátì-lílọ̀ (paste) fẹ́ ọjà púpọ̀ ní ìpele dídára kan, ìrísí lè má jẹ ẹ́ lógún tó bẹ́ẹ̀. Olùkójà tí ń kó ẹ̀wà French beans láti Kẹ́ńyà tàbí màngòrò láti Senegal lọ sí Yúróòpù gbọ́dọ̀ tẹ̀lé òfin orílẹ̀-èdè tí ń gbà á wọlé, ó sì sábà máa ń béèrè ìwé-ẹ̀rí.",
            "Béèrè lọ́wọ́ olùrà kí ó kọ àpèjúwe ọjà (specification) tí ó fẹ́ sílẹ̀ fún ọ. Lẹ́yìn náà fi wé ohun tí o ń pèsè báyìí, ní kókó kọ̀ọ̀kan. Àwọn àlàfo tí o rí ni ètò iṣẹ́ rẹ. Ọ̀pọ̀ oko kékeré ń dí àlàfo iye àti ìdúróṣinṣin nípa ṣíṣiṣẹ́ pọ̀ bí ẹgbẹ́ àti gbígbìn ní ọjọ́ tó yàtọ̀ síra."
          ],
          steps: ["Béèrè àpèjúwe ọjà àti iye àṣẹ ní kíkọ lọ́wọ́ olùrà kan.", "Kọ ohun tí ó nílò sí abẹ́ iye ọjà, ìdúróṣinṣin, ìpele, títọpa ọjà àti ààbò oúnjẹ.", "Ní ẹ̀gbẹ́ ọ̀kọ̀ọ̀kan, kọ ohun tí oko tàbí ẹgbẹ́ rẹ ń pèsè báyìí.", "Sàmì sí àlàfo kọ̀ọ̀kan àti bí o ṣe lè dí i (fún àpẹẹrẹ bí ẹgbẹ́ tàbí nípa gbígbìn ní ọjọ́ tó yàtọ̀ síra)."],
          words: [["Àpèjúwe ọjà (specification)", "àpèjúwe ọjà tí olùrà fẹ́, ní kíkọ: ìwọ̀n, àwọ̀, bí ó ṣe pọ́n tó, bí a ṣe ń dì í àti àbùkù tí wọ́n gbà."], ["Títọpa ọjà (traceability)", "agbára láti tọpa ọjà padà sí oko, ẹ̀ka oko àti ohun èlò tí ó ti wá."], ["Ìdúróṣinṣin (consistency)", "pípèsè dídára àti iye kan náà, lásìkò, léraléra."]],
          slides: [
            { title: "Nǹkan márùn-ún tí àwọn olùrà ńlá ń fẹ́", bullets: ["Iye ọjà àti ìdúróṣinṣin", "Ìpele bí àpèjúwe ọjà wọn ṣe sọ", "Títọpa ọjà àti ààbò oúnjẹ"] },
            { title: "Àwọn olùrà yàtọ̀ síra", bullets: ["Súpamákẹ́ẹ̀tì: ìwọ̀n àti àpótí pàtó, lẹ́ẹ̀mejì lọ́sẹ̀", "Ilé-iṣẹ́ aṣèlọ́jà: ọjà púpọ̀, ìpele dídára kan", "Olùkójà: òfin orílẹ̀-èdè tí ń gbà á wọlé, nígbà púpọ̀ ìwé-ẹ̀rí"] },
            { title: "Wá àwọn àlàfo rẹ", bullets: ["Gba àpèjúwe ọjà ní kíkọ", "Fi wé ohun tí o ń pèsè ní kókó kọ̀ọ̀kan", "Àlàfo = ètò iṣẹ́ rẹ; ẹgbẹ́ lè dí àlàfo iye ọjà"] }
          ],
          tryIt: "Yan olùrà ńlá kan nítòsí rẹ (súpamákẹ́ẹ̀tì, ilé-iṣẹ́ aṣèlọ́jà tàbí olùkójà). Kọ ohun tí wọ́n nílò sí abẹ́ àkòrí márààrún, ohun tí o ń pèsè báyìí ní ẹ̀gbẹ́ ọ̀kọ̀ọ̀kan, kí o sì sàmì sí àwọn àlàfo. Èyí ni ìbẹ̀rẹ̀ àkọsílẹ̀ ìmúrasílẹ̀ fún olùrà rẹ.",
          youCanNow: "kọ ohun tí olùrà ńlá ń fẹ́ sílẹ̀ kí o sì sàmì sí ibi tí oko tàbí ẹgbẹ́ rẹ kò ti tó.",
          quickCheck: [
            { objective: "O1", q: "Súpamákẹ́ẹ̀tì kan fẹ́ tòmátì ní gbogbo ọ̀sẹ̀ jálẹ̀ ọdún. Ẹ̀ẹ̀kan ní àsìkò ni o ń kórè. Ohun wo ni o kò tẹ́ lọ́rùn?", options: ["Ìpele", "Ìdúróṣinṣin ìpèsè", "Títọpa ọjà", "Ààbò oúnjẹ"], answer: 1, why: "Pípèsè ní gbogbo ọ̀sẹ̀, kì í ṣe nígbà ìkórè nìkan, ni ìdúróṣinṣin." },
            { objective: "O1", q: "Kí ni ọ̀nà tó dára jù láti mọ ohun tí olùrà fẹ́ gan-an?", options: ["Méfò láti ohun tí ó wà nínú ṣọ́ọ̀bù wọn", "Béèrè lọ́wọ́ aládùúgbò tí ó tà fún wọn lẹ́ẹ̀kan", "Fi ọjà ránṣẹ́ kí o wò bóyá wọ́n máa gbà á", "Béèrè àpèjúwe ọjà wọn ní kíkọ"], answer: 3, why: "Àpèjúwe ọjà ní kíkọ ń fi ìwọ̀n, dídára àti bí a ṣe ń dì í tí olùrà máa gbà hàn kedere." }
          ]
        },
        {
          title: "Ìlànà Iṣẹ́ Àgbẹ̀ Rere lórí oko rẹ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kọ Ìlànà Iṣẹ́ Àgbẹ̀ Rere tí o máa tẹ̀lé fún irè kan sílẹ̀.",
          text: [
            "Ìlànà Iṣẹ́ Àgbẹ̀ Rere (Good Agricultural Practices, GAP) ni àwọn àṣà oko tí ó ń pa ọjà mọ́ láìléwu, tí ó ń dáàbò bo òṣìṣẹ́ àti àyíká, tí ó sì ń jẹ́ kí dídára má yẹ̀. Àwọn ètò ìwé-ẹ̀rí àti àwọn olùrà ń yẹ̀ wọ́n wò. O lè bẹ̀rẹ̀ ọ̀pọ̀ lára wọn pẹ̀lú owó díẹ̀.",
            "Oògùn apakòkòrò: lo ọjà tí àjọ ìjọba orílẹ̀-èdè rẹ ti forúkọ rẹ̀ sílẹ̀ nìkan (fún àpẹẹrẹ Pest Control Products Board ní Kẹ́ńyà, NAFDAC ní Nàìjíríà tàbí EPA ní Gánà), ṣàyẹ̀wò àkọsílẹ̀ wọn tuntun, kí o sì lò ó gẹ́lẹ́ bí àmì-ìtọ́sọ́nà ṣe sọ. Wọ aṣọ ààbò tí àmì-ìtọ́sọ́nà béèrè, ti kẹ́míkà pa mọ́ sí ibi tí a tì, tí ó jìnnà sí oúnjẹ, kí o sì bọ̀wọ̀ fún àkókò ìdúró ṣáájú ìkórè lórí àmì-ìtọ́sọ́nà, ìyẹn àkókò ìdúró láàárín fífín oògùn ìkẹyìn àti ìkórè. Fífín oògùn tí ó súnmọ́ ìkórè jù jẹ́ ìdí pàtàkì tí wọ́n fi ń kọ ọjà nítorí àṣẹ́kù oògùn. Lo ìṣàkóso àjọpọ̀ fún kòkòrò (IPM) kí o lè máa fín oògùn díẹ̀.",
            "Bákan náà: omi mímọ́ fún fífín oògùn, fífọ̀ àti bíbomirin; àpótí ìkórè mímọ́ tí kò kan ilẹ̀; ilé ìgbọ̀nsẹ̀ àti ibi fífọ ọwọ́ fún òṣìṣẹ́; kí ẹran tàbí ìgbẹ́ ẹran má súnmọ́ ọjà ní kété ṣáájú ìkórè; ìtọ́jú pàjáwìrì àti ẹ̀kọ́ fún òṣìṣẹ́; àti kíkó àpò òfìfo dànù láìléwu bí àmì-ìtọ́sọ́nà tàbí àjọ ìjọba rẹ ṣe sọ. Kọ wọ̀nyí sílẹ̀ bí òfin GAP oko rẹ."
          ],
          steps: ["Ṣàyẹ̀wò pé gbogbo oògùn apakòkòrò tí o ń lò wà nínú àkọsílẹ̀ àjọ ìjọba orílẹ̀-èdè rẹ.", "Kọ aṣọ ààbò àti àkókò ìdúró ṣáájú ìkórè láti àmì-ìtọ́sọ́nà sí ẹ̀gbẹ́ ọjà kọ̀ọ̀kan.", "Ṣètò ibi fífọ ọwọ́, ilé ìgbọ̀nsẹ̀ àti àpótí mímọ́ fún ìkórè.", "Kọ òfin GAP rẹ sílẹ̀ kí o sì kọ́ gbogbo òṣìṣẹ́ nípa wọn."],
          words: [["Ìlànà Iṣẹ́ Àgbẹ̀ Rere (GAP)", "àwọn àṣà oko tí ó ń pa ọjà mọ́ láìléwu, tí ó sì ń dáàbò bo òṣìṣẹ́ àti àyíká."], ["Àkókò ìdúró ṣáájú ìkórè (pre-harvest interval)", "àkókò ìdúró lórí àmì-ìtọ́sọ́nà láàárín fífín oògùn ìkẹyìn àti ìkórè."], ["Oògùn apakòkòrò tí a forúkọ sílẹ̀", "ọjà tí àjọ ìjọba orílẹ̀-èdè rẹ ti fọwọ́sí fún irè àti ìlò yẹn."], ["Ìṣàkóso àjọpọ̀ fún kòkòrò (IPM)", "ṣíṣàkóso kòkòrò pẹ̀lú ọ̀nà púpọ̀ kí o lè fín oògùn kìkì nígbà tí ó bá yẹ."]],
          slides: [
            { title: "Ohun tí GAP bò", bullets: ["Ọjà tí kò léwu", "Ààbò àti àlàáfíà òṣìṣẹ́", "Àyíká àti dídára tí kì í yẹ̀"] },
            { title: "Oògùn apakòkòrò lọ́nà tó tọ́", bullets: ["Ọjà tí a forúkọ sílẹ̀ nìkan: ṣàyẹ̀wò àkọsílẹ̀ PCPB, NAFDAC, EPA Gánà", "Gẹ́lẹ́ bí àmì-ìtọ́sọ́nà ṣe sọ, pẹ̀lú aṣọ ààbò", "Bọ̀wọ̀ fún àkókò ìdúró ṣáájú ìkórè lórí àmì-ìtọ́sọ́nà"] },
            { title: "Ìkórè mímọ́", bullets: ["Omi mímọ́; àpótí tí kò kan ilẹ̀", "Ilé ìgbọ̀nsẹ̀ àti ibi fífọ ọwọ́ fún òṣìṣẹ́", "Kò sí ẹran tàbí ìgbẹ́ ẹran nítòsí ọjà nígbà ìkórè"] },
            { title: "Kọ ọ́ sílẹ̀ kí o sì kọ́ni", bullets: ["Òfin GAP oko rẹ lórí ojú-ewé kan", "Kọ́ gbogbo òṣìṣẹ́", "Ti kẹ́míkà pa mọ́, kí ó jìnnà sí oúnjẹ"] }
          ],
          sources: [FAO_PEST_REG],
          tryIt: "Kọ òfin GAP oko rẹ fún irè kan sórí ojú-ewé kan: oògùn apakòkòrò tí a forúkọ sílẹ̀ tí o ń lò pẹ̀lú aṣọ ààbò àti àkókò ìdúró ṣáájú ìkórè láti àmì-ìtọ́sọ́nà, omi rẹ àti ìmọ́tótó ìkórè, àti ààbò òṣìṣẹ́. Fi àwọn àlàfo kún àkọsílẹ̀ ìmúrasílẹ̀ fún olùrà rẹ.",
          youCanNow: "kọ òfin Ìlànà Iṣẹ́ Àgbẹ̀ Rere fún irè kan, pẹ̀lú lílo oògùn apakòkòrò tí a forúkọ sílẹ̀ láìléwu.",
          quickCheck: [
            { objective: "O2", q: "Níbo ni o ti máa rí bí o ṣe máa dúró pẹ́ tó láàárín fífín oògùn ìkẹyìn àti ìkórè?", options: ["Lórí àmì-ìtọ́sọ́nà ọjà náà (àkókò ìdúró ṣáájú ìkórè)", "Lọ́dọ̀ awakọ̀ olùrà", "Láti inú ìrántí aládùúgbò", "Kò ṣe pàtàkì fún ọjà òkèèrè"], answer: 0, why: "Àmì-ìtọ́sọ́nà ló ń fúnni ní àkókò ìdúró ṣáájú ìkórè; bíbọ̀wọ̀ fún un ń jẹ́ kí àṣẹ́kù oògùn wà láàárín ìwọ̀n." },
            { objective: "O2", q: "Oníṣòwò kan fẹ́ ta oògùn apakòkòrò olówó pọ́ọ́kú tí kò ní nọ́mbà ìforúkọsílẹ̀ fún ọ. Kí ni o máa ṣe?", options: ["Rà á tí ó bá jẹ́ olówó pọ́ọ́kú", "Pò ó mọ́ èyí tí a forúkọ rẹ̀ sílẹ̀", "Má ṣe lò ó; lo ọjà tí ó wà nínú àkọsílẹ̀ ìjọba orílẹ̀-èdè rẹ nìkan", "Lo ìdajì iye rẹ̀"], answer: 2, why: "Ọjà tí a kò forúkọ rẹ̀ sílẹ̀ lè jẹ́ ayédèrú tàbí èyí tí a ti fòfin dè, ó sì lè fa kíkọ ọjà àti ìpalára." }
          ]
        },
        {
          title: "Àkọsílẹ̀ tí ó ń tọpa gbogbo àpótí",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ṣètò àkọsílẹ̀ tí ó ń tọpa àpótí kan padà sí ẹ̀ka oko rẹ̀, ohun èlò rẹ̀ àti ọjọ́ ìkórè rẹ̀.",
          text: [
            "Tí olùrà bá rí àṣẹ́kù oògùn tàbí ìṣòro kan, wọ́n máa béèrè pé: oko wo, ẹ̀ka oko wo, oògùn wo ni a fín, nígbà wo? Àkọsílẹ̀ títọpa ọjà ń dáhùn láàárín ìṣẹ́jú díẹ̀. Láìsí wọn, olùrà lè já gbogbo ẹgbẹ́ sílẹ̀.",
            "Fún ẹ̀ka oko tàbí ilẹ̀ kọ̀ọ̀kan ní kóòdù, fún àpẹẹrẹ KB-F2 fún oko Kiambu, ẹ̀ka oko 2. Tọ́jú àkọsílẹ̀ oògùn àti ohun èlò fún ẹ̀ka oko kọ̀ọ̀kan: ọjọ́, orúkọ ọjà àti nọ́mbà ìforúkọsílẹ̀, iye, ẹni tí ó fín in, àti àkókò ìdúró ṣáájú ìkórè láti àmì-ìtọ́sọ́nà. Tọ́jú àkọsílẹ̀ ìkórè: ọjọ́, kóòdù ẹ̀ka oko, iye àpótí tàbí kílò, àti nọ́mbà lọ́ọ̀tì. Kọ nọ́mbà lọ́ọ̀tì sórí gbogbo àpótí tàbí ìwé ìfijíṣẹ́.",
            "Tọ́jú àkọsílẹ̀ náà sínú ìwé kékeré tàbí spreadsheet tó rọrùn lórí fóònù, kí o sì pa ìwé-ẹ̀rí ìsanwó (receipt) fún ohun èlò mọ́. Ẹgbẹ́ àgbẹ̀ ń tọ́jú ìwé orúkọ ọmọ ẹgbẹ́ àti àkọsílẹ̀ ọmọ ẹgbẹ́ kọ̀ọ̀kan. Kẹ́ńyà ń bẹ̀rẹ̀ yíya àwòrán ilẹ̀ àti ìforúkọsílẹ̀ àwọn oko tí ń kó ọjà lọ sí òkèèrè lórí ẹ̀rọ, nítorí náà béèrè lọ́wọ́ AFA ohun tí irè rẹ nílò."
          ],
          steps: ["Fún ẹ̀ka oko tàbí ilẹ̀ kọ̀ọ̀kan ní kóòdù kúkúrú.", "Tọ́jú àkọsílẹ̀ oògùn àti ohun èlò fún ẹ̀ka oko kọ̀ọ̀kan: ọjọ́, ọjà, nọ́mbà ìforúkọsílẹ̀, iye, ẹni tí ó fín in, àkókò ìdúró ṣáájú ìkórè.", "Tọ́jú àkọsílẹ̀ ìkórè pẹ̀lú nọ́mbà lọ́ọ̀tì fún ìkórè kọ̀ọ̀kan.", "Kọ nọ́mbà lọ́ọ̀tì sórí gbogbo àpótí tàbí ìwé ìfijíṣẹ́.", "Ṣe àṣeṣe: mú àpótí kan kí o sì tọpa rẹ̀ padà láàárín ìṣẹ́jú díẹ̀."],
          words: [["Nọ́mbà lọ́ọ̀tì (lot number)", "kóòdù fún ìkórè kan láti ẹ̀ka oko kan ní ọjọ́ kan, tí a kọ sórí àwọn àpótí."], ["Àkọsílẹ̀ oògùn (spray record)", "àkọsílẹ̀ gbogbo oògùn apakòkòrò tí a lò: nígbà wo, èwo, iye mélòó àti ẹni tí ó lò ó."], ["Àyẹ̀wò (audit)", "àyẹ̀wò láti ọ̀dọ̀ olùrà tàbí olùfúnni ní ìwé-ẹ̀rí pé o ń ṣe ohun tí o sọ."]],
          slides: [
            { title: "Kí ló dé tí a fi ń tọpa?", bullets: ["Olùrà rí ìṣòro: ẹ̀ka oko wo, oògùn wo, nígbà wo?", "Àkọsílẹ̀ rere ń dáhùn láàárín ìṣẹ́jú díẹ̀", "Kò sí àkọsílẹ̀: wọ́n lè já gbogbo ẹgbẹ́ sílẹ̀"] },
            { title: "Àkọsílẹ̀ mẹ́ta", bullets: ["Kóòdù ẹ̀ka oko (fún àpẹẹrẹ KB-F2)", "Àkọsílẹ̀ oògùn àti ohun èlò fún ẹ̀ka oko kọ̀ọ̀kan", "Àkọsílẹ̀ ìkórè pẹ̀lú nọ́mbà lọ́ọ̀tì"] },
            { title: "Jẹ́ kí ó máa ṣiṣẹ́", bullets: ["Nọ́mbà lọ́ọ̀tì lórí gbogbo àpótí", "Ìwé kékeré tàbí spreadsheet fóònù; pa receipt mọ́", "Ṣe àṣeṣe títọpa àpótí kan"] }
          ],
          sources: [KE_AFA],
          tryIt: "Ṣe àkọsílẹ̀ mẹ́tẹ̀ẹ̀ta fún irè kan: kóòdù ẹ̀ka oko, àkọsílẹ̀ oògùn àti ohun èlò, àti àkọsílẹ̀ ìkórè pẹ̀lú nọ́mbà lọ́ọ̀tì. Kọ ìlà gidi kan tàbí ti àṣeṣe sínú ọ̀kọ̀ọ̀kan, lẹ́yìn náà tọpa àpótí yẹn padà sí ẹ̀ka oko àti oògùn ìkẹyìn tí a fín.",
          youCanNow: "tọ́jú àkọsílẹ̀ ẹ̀ka oko, oògùn àti ìkórè tí ó ń tọpa àpótí èyíkéyìí padà sí ẹ̀ka oko rẹ̀ àti ohun èlò rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ló so àpótí kan lórí pẹpẹ olùrà mọ́ ẹ̀ka oko rẹ?", options: ["Àwọ̀ àpótí náà", "Orúkọ awakọ̀", "Iye owó ọjà", "Nọ́mbà lọ́ọ̀tì tí a kọ sórí àpótí àti sínú àkọsílẹ̀ ìkórè rẹ"], answer: 3, why: "Nọ́mbà lọ́ọ̀tì lórí àpótí àti nínú àkọsílẹ̀ rẹ ń tọpa rẹ̀ padà sí ẹ̀ka oko àti ọjọ́." },
            { objective: "O4", q: "Èwo ló yẹ kí ó wà nínú àkọsílẹ̀ oògùn?", options: ["Nọ́mbà fóònù olùrà", "Ọjọ́, ọjà, nọ́mbà ìforúkọsílẹ̀, iye àti ẹni tí ó fín in", "Àsọtẹ́lẹ̀ ojú ọjọ́ fún oṣù tó ń bọ̀", "Iye owó irè náà"], answer: 1, why: "Àwọn nǹkan wọ̀nyí ń fi oògùn tí a fín àti ìgbà tí a fín in hàn, èyí tí olùrà àti olùfúnni ní ìwé-ẹ̀rí ń yẹ̀wò." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ohun tí àwọn olùrà ńlá ń fẹ́, àti mímú oko rẹ ṣetán",
        questions: [
          { objective: "O1", q: "Èwo KÌ Í ṢE ọ̀kan lára nǹkan márùn-ún tí àwọn olùrà ńlá sábà máa ń fẹ́?", options: ["Iye ọjà", "Títọpa ọjà", "Ẹ̀bùn fún olùrà", "Ààbò oúnjẹ"], answer: 2, why: "Àwọn olùrà fẹ́ iye ọjà, ìdúróṣinṣin, ìpele, títọpa ọjà àti ààbò oúnjẹ; ẹ̀bùn kì í ṣe ohun tí wọ́n béèrè." },
          { objective: "O1", q: "Ẹgbẹ́ rẹ lè kún ìdajì àṣẹ ọ̀sẹ̀ olùrà kan nìkan. Kí ló lè dí àlàfo náà?", options: ["Ọmọ ẹgbẹ́ púpọ̀ sí i àti gbígbìn ní ọjọ́ tó yàtọ̀ síra", "Fífi ọjà ìpele tí kò dára ránṣẹ́", "Ṣíṣèlérí ju ohun tí o ní lọ", "Ṣíṣàìka iye àṣẹ náà sí"], answer: 0, why: "Àgbẹ̀ púpọ̀ sí i àti gbígbìn ní ọjọ́ tó yàtọ̀ síra ń mú iye ọjà pọ̀ sí i, ó sì ń jẹ́ kí ìpèsè má yẹ̀." },
          { objective: "O2", q: "Àṣà wo ló jẹ́ apá kan GAP?", options: ["Fífi oògùn apakòkòrò pamọ́ sí ẹ̀gbẹ́ oúnjẹ", "Fífín oògùn ní ọjọ́ tó ṣáájú ìkórè láìka ohun tí àmì-ìtọ́sọ́nà sọ sí", "Jíjẹ́ kí ewúrẹ́ jẹko nítòsí ọjà nígbà ìkórè", "Wíwọ aṣọ ààbò tí àmì-ìtọ́sọ́nà béèrè"], answer: 3, why: "Títẹ̀lé àmì-ìtọ́sọ́nà, pẹ̀lú aṣọ ààbò, ń dáàbò bo òṣìṣẹ́ àti ọjà." },
          { objective: "O4", q: "Kí ni nọ́mbà lọ́ọ̀tì?", options: ["Iye owó àpótí kan", "Kóòdù fún ìkórè kan láti ẹ̀ka oko kan ní ọjọ́ kan", "Iye òṣìṣẹ́", "Bí oko ṣe tóbi tó"], answer: 1, why: "Nọ́mbà lọ́ọ̀tì ń dá ìkórè kan mọ̀ kí a lè tọpa rẹ̀." },
          { objective: "O4", q: "Olùrà kan sọ pé àṣẹ́kù oògùn wà nínú ìfijíṣẹ́ kan. Àkọsílẹ̀ rere máa jẹ́ kí o:", options: ["Dá olùrà lẹ́bi", "Yí àkọsílẹ̀ padà", "Tọpa rẹ̀ sí ẹ̀ka oko àti oògùn tí a fín, kí o sì tún ohun tí ó fà á ṣe", "Dá títà fún gbogbo ènìyàn dúró"], answer: 2, why: "Títọpa ọjà ń fi ibi tí ìṣòro ti bẹ̀rẹ̀ hàn kí o lè tún un ṣe kí o má sì pàdánù olùrà." }
        ]
      }
    },
    {
      name: "Orí 2: Ìwé-ẹ̀rí, òfin ọjà òkèèrè àti àdéhùn ìpèsè",
      lessons: [
        {
          title: "GLOBALG.A.P. àti ìwé-ẹ̀rí: ìnáwó àti àǹfààní",
          objectives: ["O3"],
          minutes: 6,
          goal: "Fi ìnáwó ìwé-ẹ̀rí wé àǹfààní rẹ̀ fún oko rẹ kí o sì yan ọ̀nà kan.",
          text: [
            "Ìwé-ẹ̀rí (certification) túmọ̀ sí pé àjọ olómìnira kan ń yẹ oko rẹ wò lórí ìlànà kan, ó sì ń fún ọ ní ìwé-ẹ̀rí tí o bá yege. GLOBALG.A.P. ni ìlànà oko tí a mọ̀ jù, tí ọ̀pọ̀ súpamákẹ́ẹ̀tì àti olùkójà ní Yúróòpù ń béèrè. Ìlànà Integrated Farm Assurance (IFA) rẹ̀ fún èso àti ẹ̀fọ́ bo ààbò oúnjẹ àti títọpa ọjà, ìlera, ààbò àti àlàáfíà òṣìṣẹ́, àti àyíká (omi, ajílẹ̀, ìṣàkóso kòkòrò àti oògùn ààbò ọ̀gbìn). Àwọn olùrà kan ń béèrè ìlànà míì, bí ètò organic tàbí fair-trade.",
            "GLOBALG.A.P. sọ pé apá ìnáwó mẹ́ta ló wà: ìnáwó tìrẹ láti múra sílẹ̀ (ẹ̀kọ́, ilé ìgbọ̀nsẹ̀, ilé ìpamọ́ kẹ́míkà, àkọsílẹ̀); owó tí àjọ ìwé-ẹ̀rí ń gbà fún àyẹ̀wò àti ìrìnàjò; àti owó ìforúkọsílẹ̀ àti ìwé-àṣẹ GLOBALG.A.P., tí ó dá lórí bí ilẹ̀ rẹ ṣe tóbi tó àti ọ̀nà tí o yàn. Àyẹ̀wò ń wáyé lọ́dọọdún, ìwé-ẹ̀rí sì ń wà fún ọdún kan. Ọ̀nà kan wà fún ẹgbẹ́ àgbẹ̀, títí kan àwọn àgbẹ̀ kékeré, níbi tí ìwé-ẹ̀rí ẹgbẹ́ kan ti ń bo àwọn ọmọ ẹgbẹ́ tí ń tẹ̀lé ètò dídára àjọṣe pẹ̀lú àyẹ̀wò inú ẹgbẹ́.",
            "Àwọn ìgbésẹ̀: gba òfin àti àkọsílẹ̀ àyẹ̀wò ọ̀fẹ́ wálẹ̀, ṣe ohun tí wọ́n béèrè, ṣe àyẹ̀wò ara-ẹni, béèrè àyẹ̀wò lọ́wọ́ àjọ ìwé-ẹ̀rí tí a fọwọ́sí tí ń ṣiṣẹ́ ní orílẹ̀-èdè rẹ, tún ìṣòro èyíkéyìí ṣe láàárín àkókò tí wọ́n fún ọ, kí o sì gba ìwé-ẹ̀rí. Àwọn olùrà lè ṣàyẹ̀wò ìwé-ẹ̀rí lórí Supply Chain Portal ti GLOBALG.A.P. Kí o tó sanwó, béèrè lọ́wọ́ olùrà rẹ: ṣé ẹ nílò ìwé-ẹ̀rí yìí, ṣé ẹ sì máa rà púpọ̀ sí i tàbí san owó tó jù tí mo bá ní i? Gba iye owó lọ́wọ́ ju àjọ ìwé-ẹ̀rí kan lọ."
          ],
          steps: ["Béèrè lọ́wọ́ olùrà rẹ ìwé-ẹ̀rí tí wọ́n nílò, tí wọ́n bá nílò ọ̀kan.", "Gba òfin àti àkọsílẹ̀ àyẹ̀wò ọ̀fẹ́ ti ìlànà náà wálẹ̀ kí o sì ṣe àyẹ̀wò ara-ẹni.", "Kọ apá ìnáwó mẹ́ta sílẹ̀ kí o sì gba iye owó lọ́wọ́ àwọn àjọ ìwé-ẹ̀rí tí a fọwọ́sí.", "Fi ìnáwó wé àǹfààní: olùrà tuntun, ọjà púpọ̀ sí i tàbí iye owó tó dára jù.", "Pinnu: gba ìwé-ẹ̀rí fúnra rẹ, gbà á bí ẹgbẹ́, tàbí kò tíì tó àkókò."],
          words: [["Ìwé-ẹ̀rí (certification)", "àyẹ̀wò olómìnira pé oko kan tẹ̀lé ìlànà kan, tí ìwé-ẹ̀rí fi ẹ̀rí rẹ̀ hàn."], ["Àjọ ìwé-ẹ̀rí (certification body)", "ilé-iṣẹ́ tí a fọwọ́sí tí ó ń yẹ oko rẹ wò tí ó sì ń fúnni ní ìwé-ẹ̀rí."], ["Ìwé-ẹ̀rí ẹgbẹ́ (group certification)", "ìwé-ẹ̀rí kan fún ẹgbẹ́ àgbẹ̀ tí àwọn ọmọ ẹgbẹ́ rẹ̀ ń tẹ̀lé ètò dídára àjọṣe."], ["Àyẹ̀wò ara-ẹni (self-assessment)", "yíyẹ oko rẹ wò fúnra rẹ pẹ̀lú àkọsílẹ̀ àyẹ̀wò ìlànà náà kí àyẹ̀wò gidi tó dé."]],
          slides: [
            { title: "Ohun tí GLOBALG.A.P. IFA bò", bullets: ["Ààbò oúnjẹ àti títọpa ọjà", "Ìlera, ààbò àti àlàáfíà òṣìṣẹ́", "Àyíká: omi, ajílẹ̀, ìṣàkóso kòkòrò"] },
            { title: "Apá ìnáwó mẹ́ta", bullets: ["Ìnáwó tìrẹ láti múra sílẹ̀", "Owó àyẹ̀wò àti ìrìnàjò àjọ ìwé-ẹ̀rí", "Owó ìforúkọsílẹ̀ àti ìwé-àṣẹ GLOBALG.A.P."] },
            { title: "Ìgbésẹ̀ sí ìwé-ẹ̀rí", bullets: ["Òfin àti àkọsílẹ̀ àyẹ̀wò ọ̀fẹ́; àyẹ̀wò ara-ẹni", "Àyẹ̀wò láti ọ̀dọ̀ àjọ ìwé-ẹ̀rí tí a fọwọ́sí", "Tún ìṣòro ṣe; ìwé-ẹ̀rí fún ọdún kan"] },
            { title: "Ṣé ó tọ́ sí i?", bullets: ["Béèrè lọ́wọ́ olùrà bóyá wọ́n nílò rẹ̀", "Ṣé wọ́n máa rà púpọ̀ sí i tàbí san owó tó jù?", "Ọ̀nà ẹgbẹ́ fún àgbẹ̀ kékeré; gba iye owó lọ́wọ́ àjọ púpọ̀"] }
          ],
          sources: [GGAP_IFA, GGAP_PORTAL],
          tryIt: "Fún irè àti olùrà rẹ, kọ àkọsílẹ̀ ìnáwó àti àǹfààní ìwé-ẹ̀rí: ṣé olùrà nílò rẹ̀, apá ìnáwó mẹ́ta (pẹ̀lú iye owó tí o bá lè rí i gbà), àǹfààní tí o ń retí, àti ohun tí o yàn: fúnra rẹ, bí ẹgbẹ́, tàbí kò tíì tó àkókò.",
          youCanNow: "fi ìnáwó ìwé-ẹ̀rí bí GLOBALG.A.P. wé àǹfààní rẹ̀ kí o sì yan ọ̀nà kan fún oko tàbí ẹgbẹ́ rẹ.",
          quickCheck: [
            { objective: "O3", q: "Èwo ló jẹ́ ọ̀kan lára apá ìnáwó mẹ́ta ti GLOBALG.A.P.?", options: ["Owó ọkọ̀ olùrà", "Owó ilé-ìwé tìrẹ", "Owó àyẹ̀wò àti ìrìnàjò àjọ ìwé-ẹ̀rí", "Iye owó irè náà"], answer: 2, why: "GLOBALG.A.P. dárúkọ ìnáwó ìmúrasílẹ̀ rẹ, owó àjọ ìwé-ẹ̀rí, àti owó ìforúkọsílẹ̀ àti ìwé-àṣẹ tirẹ̀." },
            { objective: "O3", q: "Àgbẹ̀ kékeré ogún fẹ́ ìwé-ẹ̀rí ṣùgbọ́n ẹnì kọ̀ọ̀kan kò lè san owó àyẹ̀wò. Kí ló lè bá wọn mu?", options: ["Ìwé-ẹ̀rí ẹgbẹ́ pẹ̀lú ètò dídára àjọṣe", "Kí ẹnì kọ̀ọ̀kan da ìwé-ẹ̀rí aládùúgbò kọ", "Fífo àyẹ̀wò", "Rírà ìwé-ẹ̀rí lórí ayélujára"], answer: 0, why: "Ọ̀nà fún ẹgbẹ́ àgbẹ̀ ń jẹ́ kí ìwé-ẹ̀rí kan bo àwọn ọmọ ẹgbẹ́ tí ń tẹ̀lé ètò àjọṣe pẹ̀lú àyẹ̀wò inú ẹgbẹ́." }
          ]
        },
        {
          title: "Ìwọ̀n àṣẹ́kù oògùn, òfin ọjà òkèèrè àti ìdí tí wọ́n fi ń kọ ọjà",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò ìwọ̀n àṣẹ́kù oògùn àti àwọn àjọ ọjà òkèèrè tí ó kan irè àti ọjà rẹ.",
          text: [
            "Ìwọ̀n àṣẹ́kù oògùn tó ga jù (maximum residue level, MRL) ni iye oògùn apakòkòrò tó pọ̀ jù tí a gbà láàyè kí ó kù sórí oúnjẹ. Ọjà orílẹ̀-èdè kọ̀ọ̀kan tí ń gba ọjà wọlé ń fi tirẹ̀ lélẹ̀. European Union (EU) ń kọ ìwọ̀n tirẹ̀ sínú EU Pesticides Database; Codex Alimentarius ń fi ìwọ̀n àgbáyé lélẹ̀ tí ọ̀pọ̀ orílẹ̀-èdè ń lò. Ọjà kan lè bófin mu nílé kí ó sì tún kọjá ìwọ̀n ní Yúróòpù, tàbí kí wọ́n má tilẹ̀ fọwọ́sí oògùn kan níbẹ̀ rárá.",
            "Èyí kì í ṣe ewu kékeré. Agriculture and Food Authority (AFA) ti Kẹ́ńyà so ìdínkù ńlá nínú owó ẹ̀fọ́ tí ó ń kó lọ sí òkèèrè mọ́ ìdádúró ọjà ní EU nítorí àṣẹ́kù oògùn, tí ó pọ̀ sí i láti 25 ní 2023 sí 57 ní 2024, EU sì fi kún àyẹ̀wò lórí ẹ̀wà àti pea láti Kẹ́ńyà. Àwọn ohun tí ó sábà máa ń fà á: fífín oògùn tí ó súnmọ́ ìkórè jù, lílo ọjà tí a kò gbà láàyè ní ọjà yẹn, pípò oògùn lọ́nà tí kò tọ́, oògùn tí afẹ́fẹ́ gbé wá láti oko aládùúgbò, àti pípo ọjà mọ́ ti oko tí a kò lè tọpa.",
            "Ọjà òkèèrè tún nílò ìfọwọ́sí ìjọba. Ní Kẹ́ńyà, Horticultural Crops Directorate ti AFA ń fún olùkójà ní ìwé-àṣẹ ó sì ń forúkọ àwọn aṣojú sílẹ̀, KEPHIS sì ń fúnni ní ìwé-ẹ̀rí ìlera ọ̀gbìn (phytosanitary certificate). Ní Nàìjíríà, olùkójà ń forúkọ sílẹ̀ pẹ̀lú Nigerian Export Promotion Council (NEPC). Ní Gánà, olùkójà ń forúkọ sílẹ̀ pẹ̀lú Ghana Export Promotion Authority (GEPA). Àjọ ààbò ọ̀gbìn orílẹ̀-èdè kọ̀ọ̀kan ló ń ṣe àyẹ̀wò ìlera ọ̀gbìn. Òfin ń yí padà, nítorí náà ṣàyẹ̀wò lọ́dọ̀ àjọ kọ̀ọ̀kan kí àsìkò tó bẹ̀rẹ̀."
          ],
          steps: ["Dárúkọ ọjà tí o fẹ́ tà sí (fún àpẹẹrẹ EU, UK tàbí ọjà agbègbè).", "Wá ìwọ̀n àṣẹ́kù oògùn fún irè rẹ nínú ibi ìpamọ́ dátà ọjà yẹn tàbí Codex.", "Ṣàyẹ̀wò pé gbogbo oògùn tí o ń lò ni a gbà láàyè níbẹ̀, kí o sì tẹ̀lé àkókò ìdúró ṣáájú ìkórè lórí àmì-ìtọ́sọ́nà.", "Béèrè lọ́wọ́ olùrà rẹ bóyá wọ́n nílò àyẹ̀wò àṣẹ́kù oògùn kí ọjà tó lọ.", "Kọ àwọn àjọ ọjà òkèèrè àti ìlera ọ̀gbìn ti orílẹ̀-èdè rẹ sílẹ̀ àti ohun tí wọ́n ń béèrè."],
          words: [["Ìwọ̀n àṣẹ́kù oògùn tó ga jù (MRL)", "iye oògùn apakòkòrò tó pọ̀ jù tí a gbà láàyè kí ó kù sórí oúnjẹ ní ọjà kan."], ["Ìdádúró ọjà (interception)", "nígbà tí orílẹ̀-èdè tí ń gba ọjà wọlé bá dá ọjà dúró ní ẹnu ibodè nítorí pé ó rú òfin kan."], ["Ìwé-ẹ̀rí ìlera ọ̀gbìn (phytosanitary certificate)", "ìwé ìjọba tí ó sọ pé ọjà ọ̀gbìn kò ní àwọn kòkòrò àti àrùn tí a dárúkọ."]],
          slides: [
            { title: "Ohun tí MRL jẹ́", bullets: ["Iye oògùn tó pọ̀ jù tí a gbà láàyè lórí oúnjẹ", "Ọjà kọ̀ọ̀kan ń fi tirẹ̀ lélẹ̀", "EU Pesticides Database; ìwọ̀n Codex"] },
            { title: "Ìdí tí wọ́n fi ń kọ ọjà", bullets: ["Fífín oògùn tí ó súnmọ́ ìkórè jù", "Ọjà tí a kò gbà láàyè ní ọjà yẹn", "Pípò tí kò tọ́, oògùn tí afẹ́fẹ́ gbé wá, ọjà tí a kò lè tọpa"] },
            { title: "Ìkìlọ̀ Kẹ́ńyà", bullets: ["AFA: ìdádúró àṣẹ́kù oògùn ní EU láti 25 (2023) sí 57 (2024)", "Owó ẹ̀fọ́ tí a kó lọ sí òkèèrè dín kù gidigidi", "EU fi kún àyẹ̀wò lórí ẹ̀wà àti pea"] },
            { title: "Àjọ ọjà òkèèrè (ṣàyẹ̀wò òfin tuntun)", bullets: ["Kẹ́ńyà: AFA Horticultural Crops Directorate; KEPHIS", "Nàìjíríà: ìforúkọsílẹ̀ NEPC", "Gánà: ìforúkọsílẹ̀ GEPA; àwọn àjọ ààbò ọ̀gbìn"] }
          ],
          sources: [EU_MRL, CODEX, KE_VEG_DROP, KE_AFA, KEPHIS_PHYTO, NEPC, GEPA],
          tryIt: "Fún irè rẹ àti ọjà tí o fẹ́ tà sí, wá ibi tí a kọ ìwọ̀n àṣẹ́kù oògùn sí kí o sì ṣàyẹ̀wò oògùn méjì tí o ń lò. Lẹ́yìn náà kọ àwọn àjọ ọjà òkèèrè àti ìlera ọ̀gbìn ti orílẹ̀-èdè rẹ sílẹ̀ àti ìbéèrè kan tí o máa bi ọ̀kọ̀ọ̀kan. Fi èsì rẹ̀ kún àkọsílẹ̀ ìmúrasílẹ̀ rẹ.",
          youCanNow: "wá ìwọ̀n àṣẹ́kù oògùn fún ọjà rẹ kí o sì dárúkọ àwọn àjọ ọjà òkèèrè àti ìlera ọ̀gbìn tí o gbọ́dọ̀ bá ṣiṣẹ́.",
          quickCheck: [
            { objective: "O5", q: "A ti forúkọ oògùn apakòkòrò rẹ sílẹ̀ ní orílẹ̀-èdè rẹ. Ṣé wọ́n ṣì lè kọ ọjà rẹ ní Yúróòpù?", options: ["Rárá, ìforúkọsílẹ̀ nílé ti tó", "Bẹ́ẹ̀ ni, tí àṣẹ́kù oògùn bá kọjá ìwọ̀n EU tàbí tí a kò bá gba ọjà náà láàyè níbẹ̀", "Kìkì tí àpótí bá dọ̀tí", "Fún òdòdó nìkan"], answer: 1, why: "Ọjà kọ̀ọ̀kan ń fi ìwọ̀n tirẹ̀ lélẹ̀, nítorí náà ọjà tí ó bófin mu nílé lè rú òfin EU." },
            { objective: "O5", q: "Ní Kẹ́ńyà, ta ló ń fúnni ní ìwé-ẹ̀rí ìlera ọ̀gbìn fún ọjà òkèèrè?", options: ["KEBS", "NAFDAC", "NEPC", "KEPHIS"], answer: 3, why: "KEPHIS ló ń ṣe àyẹ̀wò ìlera ọ̀gbìn tí ó sì ń fúnni ní ìwé-ẹ̀rí ìlera ọ̀gbìn fún ọjà tí Kẹ́ńyà ń kó lọ sí òkèèrè." }
          ]
        },
        {
          title: "Pípàdé olùrà, àdéhùn ìpèsè àti ètò àgbẹ̀ alábàáṣiṣẹ́",
          objectives: ["O6"],
          minutes: 6,
          goal: "Kọ ìfilọ̀ ìpèsè kí o sì kọ àwọn òfin àdéhùn tí o nílò lọ́wọ́ olùrà sílẹ̀.",
          text: [
            "Nígbà tí o bá pàdé olùrà, múra sílẹ̀: irè rẹ, ìpele, iye tí o lè pèsè àti ìgbà, bí o ṣe ń pa ọjà mọ́ láìléwu tí o sì ń tọpa rẹ̀, ìwé-ẹ̀rí èyíkéyìí, àti àpẹẹrẹ ọjà. Ṣèlérí ohun tí o lè mú ṣẹ nìkan. Ìfijíṣẹ́ tí o kùnà ń ba ìgbẹ́kẹ̀lé jẹ́ ju ìfilọ̀ tí ó kéré lọ.",
            "Ṣe ìdúnàádúrà lórí àwọn òfin, kì í ṣe iye owó nìkan. Ẹ fohùn ṣọ̀kan lórí ìpele àti bí a ṣe ń ṣàyẹ̀wò rẹ̀, iye àti àkókò ìfijíṣẹ́, iye owó tàbí bí a ṣe ń pinnu rẹ̀ (ó dúró, tàbí ó tẹ̀lé iye owó ọjà), ẹni tí ó ń san owó ọkọ̀ àti ìdìpọ̀, òfin kíkọ ọjà (ta ló ń ṣàyẹ̀wò, nígbà wo, àti kí ló máa ṣẹlẹ̀ sí ọjà tí wọ́n kọ̀), ọjọ́ àti ọ̀nà ìsanwó, àti ohun tí ó máa ṣẹlẹ̀ tí ìkórè rẹ bá kùnà tàbí tí olùrà kò bá wá kó o. Títà ọjà àdéhùn fún olùrà míì (side-selling) ń ba ìgbẹ́kẹ̀lé jẹ́, ó sì sábà máa ń rú àdéhùn.",
            "Nínú ètò àgbẹ̀ alábàáṣiṣẹ́ (outgrower scheme), ilé-iṣẹ́ kan bí ilé-iṣẹ́ aṣèlọ́jà tàbí olùkójà ń ṣe àdéhùn pẹ̀lú ọ̀pọ̀ àgbẹ̀ kékeré, ó sábà máa ń fúnni ní irúgbìn, ohun èlò, ẹ̀kọ́ tàbí owó-ìyá, ó sì ń ra irè náà. Ó lè ṣí ọjà tí kì í yẹ̀ sílẹ̀, ṣùgbọ́n ṣàyẹ̀wò: ṣé wọ́n ń yọ owó ohun èlò kúrò nínú owó rẹ, ní iye wo, ta ló ń pinnu ìpele, kí ló máa ṣẹlẹ̀ tí iye owó bá gòkè, ṣé o sì lè kúrò? Ka gbogbo àdéhùn tán, pa ẹ̀dà kan mọ́, kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o gbẹ́kẹ̀lé, òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ tàbí òṣìṣẹ́ ẹgbẹ́ alájọṣe kí o tó fọwọ́ sí i."
          ],
          steps: ["Pèsè ìfilọ̀ rẹ: irè, ìpele, iye, àkókò ìfijíṣẹ́, ààbò àti títọpa ọjà, ìwé-ẹ̀rí, àpẹẹrẹ ọjà.", "Kọ àwọn òfin tí o nílò sílẹ̀: àyẹ̀wò ìpele, ìpìlẹ̀ iye owó, ọkọ̀, òfin kíkọ ọjà, ọjọ́ ìsanwó, òfin fún ìkùnà.", "Fún ètò àgbẹ̀ alábàáṣiṣẹ́, béèrè bí wọ́n ṣe ń gba owó ohun èlò, ta ló ń pinnu ìpele, àti bí o ṣe lè kúrò.", "Ka àdéhùn náà tán kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o gbẹ́kẹ̀lé kí o tó fọwọ́ sí i.", "Pa ẹ̀dà kan mọ́ kí o sì fi ohun tí o ṣèlérí jíṣẹ́ gẹ́lẹ́."],
          words: [["Ìfilọ̀ ìpèsè (supply offer)", "ìfilọ̀ ní kíkọ sí olùrà nípa ohun tí o lè pèsè, ìgbà wo àti lórí òfin wo."], ["Ètò àgbẹ̀ alábàáṣiṣẹ́ (outgrower scheme)", "ètò kan níbi tí ilé-iṣẹ́ kan ti ń ṣe àdéhùn pẹ̀lú ọ̀pọ̀ àgbẹ̀ kékeré láti gbìn fún un, tí ó sábà máa ń fúnni ní ohun èlò tí ó sì ń ra irè náà."], ["Títà fún olùrà míì (side-selling)", "títà ọjà tí a ti ṣe àdéhùn rẹ̀ fún olùrà míì."], ["Òfin kíkọ ọjà (rejection rules)", "àwọn òfin tí a fohùn ṣọ̀kan lé lórí fún yíyẹ ọjà wò àti ohun tí ó máa ṣẹlẹ̀ sí ọjà tí olùrà kọ̀."]],
          slides: [
            { title: "Múra sílẹ̀", bullets: ["Irè, ìpele, iye àti àkókò ìfijíṣẹ́", "Bí o ṣe ń pa ọjà mọ́ láìléwu tí o sì ń tọpa rẹ̀", "Ìwé-ẹ̀rí àti àpẹẹrẹ ọjà; ṣèlérí ohun tí o lè mú ṣẹ nìkan"] },
            { title: "Ṣe ìdúnàádúrà lórí àwọn òfin", bullets: ["Àyẹ̀wò ìpele, ìpìlẹ̀ iye owó, ọkọ̀", "Òfin kíkọ ọjà àti ọjọ́ ìsanwó", "Tí ìkórè bá kùnà tàbí tí olùrà kò bá wá kó o ńkọ́?"] },
            { title: "Ètò àgbẹ̀ alábàáṣiṣẹ́", bullets: ["Ọjà tí kì í yẹ̀; ohun èlò, ẹ̀kọ́ tàbí owó-ìyá", "Ṣàyẹ̀wò: owó ohun èlò, ta ló ń pinnu ìpele, ṣé o lè kúrò?", "Títà fún olùrà míì ń ba ìgbẹ́kẹ̀lé àti àdéhùn jẹ́"] },
            { title: "Kí o tó fọwọ́ sí i", bullets: ["Ka gbogbo ìlà; pa ẹ̀dà kan mọ́", "Béèrè lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn àgbẹ̀, ẹgbẹ́ alájọṣe tàbí olùdámọ̀ràn", "Fi ohun tí o ṣèlérí jíṣẹ́ gẹ́lẹ́"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí àkọsílẹ̀ ìmúrasílẹ̀ fún olùrà rẹ, kí o sàmì sí ohun tí o ti ṣe àti ohun tí o máa tún ṣe. Lẹ́yìn náà kọ ìfilọ̀ ìpèsè ojú-ewé kan sí olùrà náà: irè àti ìpele, iye àti àkókò ìfijíṣẹ́, ààbò àti títọpa ọjà, ìwé-ẹ̀rí, ìpìlẹ̀ iye owó àti àwọn òfin àdéhùn tí o fẹ́.",
          youCanNow: "ṣe ìfilọ̀ ìpèsè sí olùrà ńlá kí o sì kọ àwọn òfin àdéhùn tí ó ń dáàbò bò ọ́ sílẹ̀, títí kan nínú ètò àgbẹ̀ alábàáṣiṣẹ́.",
          quickCheck: [
            { objective: "O6", q: "Òfin wo ló ń dáàbò bò ọ́ tí olùrà bá kọ apá kan ìfijíṣẹ́?", options: ["Òfin kíkọ ọjà tó yé: ta ló ń ṣàyẹ̀wò, nígbà wo, àti kí ló máa ṣẹlẹ̀ sí ọjà tí wọ́n kọ̀", "Àmì ìdánimọ̀ (logo) olùrà", "Iye owó tí ó kéré", "Ìfijíṣẹ́ tí ó tóbi jù"], answer: 0, why: "Òfin kíkọ ọjà ń dènà kíkọ ọjà láìtọ́, ó sì ń sọ ẹni tí ó máa ru àdánù." },
            { objective: "O6", q: "Ilé-iṣẹ́ ètò àgbẹ̀ alábàáṣiṣẹ́ kan fún ọ ní irúgbìn àti ajílẹ̀ ní àwìn. Kí ni o máa kọ́kọ́ béèrè?", options: ["Àwọ̀ àwọn àpò náà", "Bóyá àwọn aládùúgbò ti dara pọ̀", "Bí wọ́n ṣe ń díyelé ohun èlò àti bí wọ́n ṣe ń yọ ọ́ kúrò nínú owó rẹ", "Bóyá o lè tà á fún olùrà míì"], answer: 2, why: "Owó ohun èlò lè gba ọ̀pọ̀ lára owó rẹ, nítorí náà mọ iye rẹ̀ àti bí wọ́n ṣe ń yọ ọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìwé-ẹ̀rí, òfin ọjà òkèèrè àti àdéhùn ìpèsè",
        questions: [
          { objective: "O3", q: "Báwo ni ìwé-ẹ̀rí GLOBALG.A.P. IFA ṣe ń pẹ́ tó?", options: ["Ọdún kan, pẹ̀lú àyẹ̀wò lọ́dọọdún", "Títí láé", "Ọdún mẹ́wàá", "Títí olùrà yóò fi yí padà"], answer: 0, why: "GLOBALG.A.P. sọ pé àyẹ̀wò ń wáyé lọ́dọọdún, ìwé-ẹ̀rí sì ń wà fún ọdún kan." },
          { objective: "O3", q: "Kí o tó sanwó fún ìwé-ẹ̀rí, kí ni o yẹ kí o béèrè lọ́wọ́ olùrà rẹ?", options: ["Àdírẹ́sì ilé wọn", "Irè tí wọ́n fẹ́ràn jù", "Kò sí nǹkan, kàn gba ìwé-ẹ̀rí", "Ṣé ẹ nílò rẹ̀, ṣé ẹ sì máa rà púpọ̀ sí i tàbí san owó tó jù tí mo bá ní i?"], answer: 3, why: "Ìwé-ẹ̀rí ń ná owó, nítorí náà ṣàyẹ̀wò pé ó máa mú ọjà tàbí iye owó tó dára jù wá." },
          { objective: "O5", q: "Níbo ni o ti lè wá ìwọ̀n àṣẹ́kù oògùn EU fún irè kan?", options: ["Ilé iṣẹ́ rédíò àdúgbò", "EU Pesticides Database", "Àpò irúgbìn rẹ", "WhatsApp status olùrà"], answer: 1, why: "EU Pesticides Database ti European Commission ń kọ MRL sílẹ̀ fún oúnjẹ àti oògùn kọ̀ọ̀kan." },
          { objective: "O6", q: "Kí ni títà fún olùrà míì (side-selling)?", options: ["Títà ní ẹ̀gbẹ́ ọ̀nà", "Títà sí ọjà méjì lẹ́ẹ̀kan náà pẹ̀lú àṣẹ", "Títà ọjà tí a ti ṣe àdéhùn rẹ̀ fún olùrà míì", "Títà ní ọ̀pọ̀ ẹ̀ẹ̀kan"], answer: 2, why: "Títà fún olùrà míì ń rú àdéhùn, ó sì ń ba ìgbẹ́kẹ̀lé olùrà jẹ́." },
          { objective: "O6", q: "O lè pèsè tọ́ọ̀nù 2 lọ́sẹ̀. Olùrà béèrè 4. Kí ni o máa ṣe?", options: ["Ṣèlérí 4 kí o sì retí", "Fi ọjà tí a kò ṣà ránṣẹ́ láti kún ìwọ̀n", "Dákẹ́ kí o sì fi 2 jíṣẹ́", "Fi tọ́ọ̀nù 2 lọ̀ ọ́, tàbí bá ẹgbẹ́ ṣiṣẹ́ láti pèsè púpọ̀ sí i"], answer: 3, why: "Ṣèlérí ohun tí o lè mú ṣẹ nìkan; ẹgbẹ́ lè ràn ọ́ lọ́wọ́ láti dé iye tí ó tóbi jù." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Títà fún Súpamákẹ́ẹ̀tì, Ilé-iṣẹ́ Aṣèlọ́jà àti Olùrà Òkèèrè: Ìlànà àti Ìwé-ẹ̀rí",
    questions: [
      { objective: "O1", q: "Ìsọ̀rí wo ló ní ohun tí àwọn olùrà ńlá sábà máa ń fẹ́?", options: ["Iye owó kékeré, oko ńlá, tírakító tuntun", "Organic nìkan, kò sí nǹkan míì", "Ẹ̀bùn, àwìn, ọkọ̀ ọ̀fẹ́", "Iye ọjà, ìdúróṣinṣin, ìpele, títọpa ọjà, ààbò oúnjẹ"], answer: 3, why: "Àwọn márààrún yìí ni ohun tí súpamákẹ́ẹ̀tì, ilé-iṣẹ́ aṣèlọ́jà àti olùkójà sábà máa ń nílò." },
      { objective: "O1", q: "Ilé-iṣẹ́ aṣèlọ́jà tí ń ra ẹ̀gẹ́ fún sítáàṣì máa ń bìkítà jù nípa:", options: ["Ọjà púpọ̀ ní ìpele dídára kan", "Àwọ̀ àti ìrísí tó lẹ́wà", "Àpò kékeré fún àwọn olùrajà", "Àmì ọjà (label) aláràbarà"], answer: 0, why: "Ilé-iṣẹ́ aṣèlọ́jà nílò iye àti dídára tí kì í yẹ̀ fún ilé-iṣẹ́ wọn; ìrísí kò ṣe pàtàkì tó bẹ́ẹ̀." },
      { objective: "O1", q: "O fi àpèjúwe ọjà olùrà kan wé ohun tí o ń pèsè. Kí ni àwọn àlàfo máa di?", options: ["Ìdí láti jáwọ́", "Àṣírí láti fi pamọ́ fún ẹgbẹ́", "Ètò iṣẹ́ rẹ", "Ìṣòro olùrà"], answer: 2, why: "Àlàfo kọ̀ọ̀kan jẹ́ iṣẹ́ láti tún ṣe kí o tó lè pèsè fún olùrà yẹn." },
      { objective: "O2", q: "Kí ni GAP dúró fún nínú ẹ̀kọ́ yìí?", options: ["Group Agricultural Payment", "Good Agricultural Practices (Ìlànà Iṣẹ́ Àgbẹ̀ Rere)", "Grain and Produce", "Government Approval Permit"], answer: 1, why: "Ìlànà Iṣẹ́ Àgbẹ̀ Rere ni àwọn àṣà oko tí olùrà àti olùfúnni ní ìwé-ẹ̀rí ń yẹ̀wò." },
      { objective: "O2", q: "Oògùn apakòkòrò wo ló yẹ kí o lò?", options: ["Ọjà olówó pọ́ọ́kú èyíkéyìí ní ọjà", "Ọjà tí aládùúgbò dábàá", "Ọjà tí kò ní àmì-ìtọ́sọ́nà nínú ìgò àtijọ́", "Ọjà tí àjọ ìjọba orílẹ̀-èdè rẹ forúkọ rẹ̀ sílẹ̀, tí a lò bí àmì-ìtọ́sọ́nà ṣe sọ"], answer: 3, why: "Ọjà tí a forúkọ sílẹ̀ tí a lò bí àmì-ìtọ́sọ́nà ṣe sọ ń dáàbò bo ènìyàn, ó sì ń jẹ́ kí àṣẹ́kù oògùn wà láàárín ìwọ̀n." },
      { objective: "O2", q: "Kí ló dé tí a fi ń pèsè ilé ìgbọ̀nsẹ̀ àti ibi fífọ ọwọ́ fún àwọn òṣìṣẹ́ ìkórè?", options: ["Láti dènà kòkòrò àrùn láti dé ara ọjà", "Láti tẹ́ àwọn aládùúgbò lọ́rùn", "Nítorí pé àwọn olùrà fẹ́ràn ilé", "Láti fi kẹ́míkà pamọ́"], answer: 0, why: "Ìmọ́tótó nígbà ìkórè ń jẹ́ kí ọjà má ní kòkòrò àrùn, èyí tí olùrà ń yẹ̀wò." },
      { objective: "O4", q: "Kí ni kóòdù ẹ̀ka oko ń ràn ọ́ lọ́wọ́ nínú rẹ̀?", options: ["Sísan owó òṣìṣẹ́", "Títọpa ọjà padà sí ẹ̀ka oko gan-an tí ó ti wá", "Yíyan olùrà", "Pípinnu iye owó"], answer: 1, why: "Kóòdù ẹ̀ka oko ń so àkọsílẹ̀ ìkórè àti oògùn mọ́ ẹ̀ka oko kan." },
      { objective: "O4", q: "Níbo ni nọ́mbà lọ́ọ̀tì yẹ kí ó hàn?", options: ["Nínú orí rẹ nìkan", "Lórí ọkọ̀ olùrà", "Lórí gbogbo àpótí tàbí ìwé ìfijíṣẹ́, àti nínú àkọsílẹ̀ ìkórè rẹ", "Lórí àpò irúgbìn"], answer: 2, why: "Kíkọ ọ́ sórí àpótí àti sínú àkọsílẹ̀ ń jẹ́ kí ẹnikẹ́ni lè tọpa ọjà padà." },
      { objective: "O4", q: "Àkọsílẹ̀ wo ló ń fi oògùn tí a fín sórí ẹ̀ka oko kan àti ìgbà tí a fín in hàn?", options: ["Ìwé orúkọ ọmọ ẹgbẹ́", "Ìwé títà", "Ìwé ìfijíṣẹ́", "Àkọsílẹ̀ oògùn àti ohun èlò"], answer: 3, why: "Àkọsílẹ̀ oògùn àti ohun èlò ń kọ ọjọ́, ọjà, iye àti ẹni tí ó fín in sílẹ̀." },
      { objective: "O3", q: "Kí ni GLOBALG.A.P. IFA fún èso àti ẹ̀fọ́ bò?", options: ["Ààbò oúnjẹ, àlàáfíà òṣìṣẹ́ àti àyíká", "Àwọ̀ ọjà nìkan", "Iye owó nìkan", "Bí oko ṣe tóbi tó nìkan"], answer: 0, why: "IFA bo ààbò oúnjẹ àti títọpa ọjà, ìlera àti àlàáfíà òṣìṣẹ́, àti àyíká." },
      { objective: "O3", q: "Ta ló ń ṣe àyẹ̀wò GLOBALG.A.P.?", options: ["Awakọ̀ olùrà rẹ", "Àjọ ìwé-ẹ̀rí tí a fọwọ́sí", "Aládùúgbò kan", "Báńkì"], answer: 1, why: "Àjọ ìwé-ẹ̀rí tí a fọwọ́sí tí ń ṣiṣẹ́ ní orílẹ̀-èdè rẹ nìkan ló lè ṣe àyẹ̀wò kí ó sì fúnni ní ìwé-ẹ̀rí." },
      { objective: "O3", q: "Báwo ni olùrà ṣe lè ṣàyẹ̀wò pé ìwé-ẹ̀rí rẹ jẹ́ gidi?", options: ["Ní kí o búra", "Wo àmì orúkọ oko rẹ", "Lórí Supply Chain Portal ti GLOBALG.A.P.", "Wọn kò lè ṣàyẹ̀wò rẹ̀"], answer: 2, why: "Ipò ìwé-ẹ̀rí hàn lórí pẹpẹ GLOBALG.A.P. pẹ̀lú nọ́mbà rẹ." },
      { objective: "O3", q: "Èwo ni ìgbésẹ̀ àkọ́kọ́ sí ìwé-ẹ̀rí?", options: ["San owó lẹ́ẹ̀kan náà", "Tẹ ìwé-ẹ̀rí jáde", "Sọ fún olùrà pé o ti ní ìwé-ẹ̀rí", "Gba òfin àti àkọsílẹ̀ àyẹ̀wò ọ̀fẹ́ wálẹ̀ kí o sì ṣe àyẹ̀wò ara-ẹni"], answer: 3, why: "Àyẹ̀wò ara-ẹni ń fi àwọn àlàfo rẹ hàn kí o tó sanwó fún àyẹ̀wò." },
      { objective: "O5", q: "Kí ni MRL?", options: ["Irú ajílẹ̀ kan", "Oríṣi irúgbìn kan", "Iye oògùn apakòkòrò tó pọ̀ jù tí a gbà láàyè kí ó kù sórí oúnjẹ", "Ìwé-àṣẹ ọkọ̀"], answer: 2, why: "Ìwọ̀n àṣẹ́kù oògùn tó ga jù ni ààlà òfin fún àṣẹ́kù oògùn apakòkòrò lórí oúnjẹ." },
      { objective: "O5", q: "Kí ni àjọ tí ó ń bójú tó iṣẹ́ àgbẹ̀ ní Kẹ́ńyà sọ nípa ìdádúró àṣẹ́kù oògùn ní EU?", options: ["Wọ́n dín kù sí òdo", "Wọ́n pọ̀ sí i láti 25 ní 2023 sí 57 ní 2024", "Wọn kì í ṣẹlẹ̀ rí", "Òdòdó nìkan ni wọ́n kàn"], answer: 1, why: "AFA ròyìn pé ìdádúró ju ìlọ́po méjì lọ, ó sì so ó mọ́ ìdínkù ńlá nínú owó ẹ̀fọ́ tí a kó lọ sí òkèèrè." },
      { objective: "O5", q: "Èwo ló sábà máa ń fa kíkọ ọjà nítorí àṣẹ́kù oògùn?", options: ["Fífín oògùn tí ó súnmọ́ ìkórè jù", "Títọ́jú àkọsílẹ̀ rere", "Lílo àpótí mímọ́", "Kíkọ́ òṣìṣẹ́"], answer: 0, why: "Ṣíṣàìka àkókò ìdúró ṣáájú ìkórè sí ń fi àṣẹ́kù oògùn tí ó kọjá ìwọ̀n sílẹ̀." },
      { objective: "O5", q: "Ẹgbẹ́ kan ní Nàìjíríà fẹ́ kó ewé zobo (hibiscus) gbígbẹ lọ sí òkèèrè. Àjọ wo ni wọ́n máa forúkọ sílẹ̀ pẹ̀lú bí olùkójà?", options: ["KEPHIS", "GEPA", "AFA", "Nigerian Export Promotion Council (NEPC)"], answer: 3, why: "Àwọn olùkójà ní Nàìjíríà ń forúkọ sílẹ̀ pẹ̀lú NEPC, wọ́n sì gbọ́dọ̀ ṣàyẹ̀wò ohun tí ó ń béèrè lọ́wọ́lọ́wọ́." },
      { objective: "O6", q: "Kí ló yẹ kí ó wà nínú ìfilọ̀ ìpèsè?", options: ["Irè, ìpele, iye, àkókò ìfijíṣẹ́, ààbò, ìwé-ẹ̀rí àti ìpìlẹ̀ iye owó", "Iye owó kékeré nìkan", "PIN báńkì rẹ", "Ìlérí iye èyíkéyìí tí wọ́n bá béèrè"], answer: 0, why: "Ìfilọ̀ tó yé ń fi ohun tí o lè fi jíṣẹ́ àti bí o ṣe máa ṣe é hàn olùrà kedere." },
      { objective: "O6", q: "Kí o tó fọwọ́ sí àdéhùn ètò àgbẹ̀ alábàáṣiṣẹ́, o yẹ kí o:", options: ["Fọwọ́ sí i kíákíá kí àwọn míì tó ṣe bẹ́ẹ̀", "Ka ojú-ewé àkọ́kọ́ nìkan", "Kà á tán, pa ẹ̀dà kan mọ́ kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o gbẹ́kẹ̀lé", "Jẹ́ kí ilé-iṣẹ́ náà pa ẹ̀dà kan ṣoṣo mọ́"], answer: 2, why: "Kíka gbogbo rẹ̀ àti gbígba ìmọ̀ràn ń dáàbò bò ọ́ lọ́wọ́ àwọn òfin tí o kò retí." },
      { objective: "O6", q: "Ìkórè rẹ kùnà lẹ́yìn ọ̀dá. Òfin àdéhùn wo ló ṣe pàtàkì báyìí?", options: ["Àmì ìdánimọ̀ (logo) olùrà", "Ohun tí ó máa ṣẹlẹ̀ tí ẹnìkan nínú yín kò bá lè fi jíṣẹ́", "Àwọ̀ àwọn àpótí", "Àkókò ìṣísílẹ̀ ọ́fíìsì olùrà"], answer: 1, why: "Òfin fún ìkùnà ń sọ ohun tí ó máa ṣẹlẹ̀ tí ìkórè bá kùnà, kí wọ́n má bàa fìyà jẹ ọ́ láìtọ́." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 6, 9, 11, 13, 15, 17, 19] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe nínú àkọsílẹ̀ ìmúrasílẹ̀ tàbí ìfilọ̀ náà kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ohun tí olùrà ń béèrè àti àwọn àlàfo", objective: "O1", notYet: "Ohun tí olùrà nílò kò yé, tàbí a kò sàmì sí àwọn àlàfo.", meets: "A kọ iye ọjà, ìdúróṣinṣin, ìpele, títọpa ọjà àti ààbò oúnjẹ sílẹ̀, pẹ̀lú ohun tí o ń pèsè báyìí àti àmì lórí àlàfo kọ̀ọ̀kan.", exceeds: "Ó dá lórí àpèjúwe ọjà olùrà ní kíkọ, pẹ̀lú ètò àti ọjọ́ láti dí àlàfo kọ̀ọ̀kan." },
      { name: "Ìlànà Iṣẹ́ Àgbẹ̀ Rere", objective: "O2", notYet: "Kò sí òfin GAP ní kíkọ, tàbí oògùn tí a kò forúkọ rẹ̀ sílẹ̀ wà, tàbí kò sí aṣọ ààbò.", meets: "Òfin ní kíkọ: oògùn tí a forúkọ sílẹ̀ tí a lò bí àmì-ìtọ́sọ́nà ṣe sọ, aṣọ ààbò, àkókò ìdúró ṣáájú ìkórè, omi, ìmọ́tótó ìkórè àti ààbò òṣìṣẹ́.", exceeds: "A ti kọ́ àwọn òṣìṣẹ́, a sì lẹ àwọn òfin mọ́ ibi tí wọ́n ti ń ṣiṣẹ́." },
      { name: "Àkọsílẹ̀ títọpa ọjà", objective: "O4", notYet: "Kò sí kóòdù ẹ̀ka oko, àkọsílẹ̀ oògùn tàbí nọ́mbà lọ́ọ̀tì.", meets: "Kóòdù ẹ̀ka oko, àkọsílẹ̀ oògùn àti ohun èlò àti àkọsílẹ̀ ìkórè pẹ̀lú nọ́mbà lọ́ọ̀tì; a lè tọpa àpótí kan padà.", exceeds: "A ń tọ́jú àkọsílẹ̀ fún gbogbo ẹgbẹ́, a sì ṣe ìdánwò títọpa láàárín ìṣẹ́jú díẹ̀." },
      { name: "Ìwé-ẹ̀rí àti òfin ọjà òkèèrè", objective: "O3", notYet: "A rò pé ìwé-ẹ̀rí wà tàbí a kò kà á sí, tàbí a kò dárúkọ àjọ ọjà òkèèrè kankan.", meets: "Àkọsílẹ̀ ìnáwó àti àǹfààní dárúkọ apá ìnáwó mẹ́ta àti ọ̀nà kan (fúnra rẹ, bí ẹgbẹ́ tàbí kò tíì tó àkókò).", exceeds: "Ó ní iye owó gidi láti àwọn àjọ ìwé-ẹ̀rí àti èsì olùrà lórí bóyá wọ́n nílò rẹ̀." },
      { name: "Ìwọ̀n àṣẹ́kù oògùn", objective: "O5", notYet: "A kò ṣàyẹ̀wò ìwọ̀n àṣẹ́kù oògùn ọjà náà.", meets: "Ó dárúkọ ibi tí a kọ ìwọ̀n sí, ó sì fi oògùn tí a lò wé wọn, pẹ̀lú àwọn àjọ ọjà òkèèrè àti ìlera ọ̀gbìn.", exceeds: "Ó ti béèrè lọ́wọ́ olùrà tàbí ilé àyẹ̀wò (lab) nípa àyẹ̀wò àṣẹ́kù oògùn kí ọjà tó lọ." },
      { name: "Ìfilọ̀ ìpèsè àti àwọn òfin", objective: "O6", notYet: "Kò sí ìfilọ̀, tàbí ó ṣèlérí ju ohun tí oko tàbí ẹgbẹ́ lè fi jíṣẹ́ lọ.", meets: "Ìfilọ̀ ojú-ewé kan pẹ̀lú ìpele, iye, àkókò ìfijíṣẹ́, ààbò, ìwé-ẹ̀rí, ìpìlẹ̀ iye owó àti àwọn òfin àdéhùn tí a fẹ́.", exceeds: "Ó ní òfin kíkọ ọjà, òfin fún ìkùnà àti òfin ìsanwó, a sì ti fi hàn olùdámọ̀ràn kan." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tàbí ẹgbẹ́ tí wọ́n fi ìfilọ̀ ìpèsè ránṣẹ́ sí súpamákẹ́ẹ̀tì, ilé-iṣẹ́ aṣèlọ́jà tàbí olùkójà láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tàbí ẹgbẹ́ tí wọ́n gba àdéhùn ìpèsè tàbí àdéhùn ètò àgbẹ̀ alábàáṣiṣẹ́ láàárín oṣù mẹ́fà",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tọ́jú àkọsílẹ̀ oògùn àti ìkórè pẹ̀lú nọ́mbà lọ́ọ̀tì fún odindi àsìkò kan",
      "Àwọn akẹ́kọ̀ọ́ tàbí ẹgbẹ́ tí wọ́n bẹ̀rẹ̀ tàbí parí àyẹ̀wò ara-ẹni fún ìwé-ẹ̀rí, tàbí tí wọ́n gba ìwé-ẹ̀rí"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù (smartphone máa ṣèrànwọ́) àti ìwé kékeré fún àkọsílẹ̀",
      "Àpèjúwe ọjà olùrà gidi tí ó bá ṣeé ṣe (béèrè lọ́wọ́ súpamákẹ́ẹ̀tì, ilé-iṣẹ́ aṣèlọ́jà tàbí olùkójà àdúgbò)",
      "Àmì-ìtọ́sọ́nà àwọn oògùn apakòkòrò tí àwọn akẹ́kọ̀ọ́ ń lò, láti ka aṣọ ààbò àti àkókò ìdúró ṣáájú ìkórè",
      "Àṣàyàn: àkọsílẹ̀ àyẹ̀wò GLOBALG.A.P. ọ̀fẹ́ láti globalgap.org",
      "Nǹkan bí ìṣẹ́jú 90 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti kàn sí àwọn olùrà àti àjọ"
    ],
    facilitatorNotes: [
      "Ṣe ẹ̀kọ́ yìí pẹ̀lú àwọn ẹgbẹ́ àgbẹ̀ níbi tí ó bá ti ṣeé ṣe: iye ọjà, àkọsílẹ̀ àti ìwé-ẹ̀rí ẹgbẹ́ ń ṣiṣẹ́ dáadáa jù pọ̀.",
      "Mú àmì-ìtọ́sọ́nà oògùn apakòkòrò gidi wá kí ẹ sì ṣe àṣeṣe wíwá aṣọ ààbò àti àkókò ìdúró ṣáájú ìkórè; má ṣe fúnni ní nọ́mbà ìwọ̀n oògùn tàbí àkókò ìdúró fúnra rẹ láéláé.",
      "Pe olùrà, olùkójà tàbí àjọ ìwé-ẹ̀rí kan láti sọ̀rọ̀ nípa ohun tí wọ́n ń yẹ̀wò; béèrè àpẹẹrẹ àpèjúwe ọjà lọ́wọ́ wọn.",
      "Ṣàyẹ̀wò òfin tuntun lọ́dọ̀ AFA àti KEPHIS (Kẹ́ńyà), NEPC (Nàìjíríà), GEPA (Gánà) àti àjọ ààbò ọ̀gbìn orílẹ̀-èdè rẹ kí ìpàdé tó bẹ̀rẹ̀; òfin àti owó ìsanwó ń yí padà.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn; ẹ ṣe eré ìpàdé pẹ̀lú olùrà níbi tí \"olùrà\" ti ń tẹnu mọ́ iye ọjà tí ó ju ohun tí ẹgbẹ́ lè pèsè lọ."
    ]
  }
};
