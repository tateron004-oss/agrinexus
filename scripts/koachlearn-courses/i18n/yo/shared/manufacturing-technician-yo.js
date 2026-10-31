"use strict";

// Koach Learn course (Yoruba translation of shared/manufacturing-technician.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const MSSC_CPT = { name: "MSSC: Certified Production Technician (CPT 4.0)", url: "https://www.msscusa.org/certification/production-certification-cpt/" };
const MSSC_COURSES = { name: "MSSC: Àwọn módù àti ẹ̀kọ́ CPT 4.0", url: "https://www.msscusa.org/certified-production-technician-cpt-courses/" };
const OSHA_LOTO = { name: "OSHA: Ṣíṣàkóso agbára eléwu (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" };
const OSHA_147 = { name: "OSHA 29 CFR 1910.147: Ṣíṣàkóso agbára eléwu (lockout/tagout)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" };
const OSHA_GUARD = { name: "OSHA: Ààbò ẹ̀rọ (Machine Guarding)", url: "https://www.osha.gov/machine-guarding" };
const OSHA_212 = { name: "OSHA 29 CFR 1910.212: Òfin gbogbogbò fún gbogbo ẹ̀rọ (ààbò)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212" };
const DOL_YOUTH = { name: "U.S. Department of Labor: Àwọn iṣẹ́ tí a kò gbà láàyè fún òṣìṣẹ́ tí kò tíì pé ọmọ ọdún 18", url: "https://www.dol.gov/agencies/whd/child-labor/what-jobs-are-off-limits" };
const APPRENTICE = { name: "Apprenticeship.gov: Apprenticeship Finder (U.S. Department of Labor)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" };

module.exports = {
  id: "manufacturing-technician-yo",
  lang: "yo",
  translationOf: "manufacturing-technician",
  category: "Workforce Development",
  name: "Ìpìlẹ̀ Iṣẹ́ Onímọ̀-ẹ̀rọ Ilé-iṣẹ́ Ìṣelọ́pọ̀",
  skills: "Rírí ewu ẹ̀rọ àti lílo lockout/tagout, Wíwọn ẹ̀yà ẹ̀rọ pẹ̀lú tolerance, Ṣíṣàyẹ̀wò dídára àti wíwá ohun tó fà á gan-an, Lílo 5S, lean àti ìtọ́jú ẹ̀rọ ojoojúmọ́, Ṣíṣètò fún MSSC CPT 4.0",
  outcome: "rí àwọn ewu tó wà lára ẹ̀rọ kí o sì yan ààbò tó tọ́, wọn ẹ̀yà kan kí o sì pinnu bóyá ó wà nínú tolerance, kọ àwọn àbùkù sílẹ̀ kí o sì wá ohun tó fà á gan-an, lo 5S àti àyẹ̀wò ẹ̀rọ ojoojúmọ́ níbi iṣẹ́, kí o sì ṣe ètò tó ní ọjọ́ láti múra sílẹ̀ fún àwọn ìdánwò MSSC Certified Production Technician (CPT 4.0) àti iṣẹ́ àkọ́kọ́ nínú ilé-iṣẹ́ ìṣelọ́pọ̀.",
  about: [
    "Àwọn ilé-iṣẹ́ ìṣelọ́pọ̀ (factory) ń ṣe ọkọ̀ ayọ́kẹ́lẹ́, oúnjẹ, oògùn, àga àti tábìlì, ẹ̀yà irin àti ẹ̀rọ ìgbàlódé, wọ́n sì ń gba òṣìṣẹ́ ìṣelọ́pọ̀, olùṣiṣẹ́ ẹ̀rọ àti onímọ̀-ẹ̀rọ. Ẹ̀kọ́ yìí wà fún àwọn tó ń wá iṣẹ́, àwọn ọ̀dọ́, àwọn ológun tẹ́lẹ̀ (veterans), àwọn tó ń padà sílé láti ẹ̀wọ̀n, àti ẹnikẹ́ni tó fẹ́ bẹ̀rẹ̀ iṣẹ́ nínú ilé-iṣẹ́ ìṣelọ́pọ̀.",
    "O máa kọ́ àwọn apá mẹ́rin tí iṣẹ́ ìbẹ̀rẹ̀ nínú ìṣelọ́pọ̀ àti Certified Production Technician (CPT 4.0) ti Manufacturing Skill Standards Council (MSSC) dúró lé lórí: ààbò, dídára àti wíwọn, ìṣelọ́pọ̀, àti ìmọ̀ nípa ìtọ́jú ẹ̀rọ. O máa ṣe àṣeṣe lórí ìwé àti pẹ̀lú rúlà nílé.",
    "Ó ṣe pàtàkì: ẹ̀kọ́ yìí ń múra rẹ sílẹ̀; kò fún ọ ní CPT 4.0 tàbí ìwé-ẹ̀rí míì. MSSC ló ń ṣe ìdánwò, òun ló sì ń fúnni ní ìwé-ẹ̀rí. Lílo ẹ̀rọ, lockout/tagout àti lílo irinṣẹ́ wíwọn tó péye ni a ń kọ́ lójúkojú pẹ̀lú olùkọ́ tó mọṣẹ́ tàbí olùkọ́ agbanisíṣẹ́, pẹ̀lú ohun ààbò ara tó tọ́. Má ṣe fi ẹ̀rọ gidi ṣe àṣeṣe fúnra rẹ.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Àyẹ̀wò kúkúrú wà lẹ́yìn ẹ̀kọ́ kọ̀ọ̀kan, ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe àpò ìmúrasílẹ̀ onímọ̀-ẹ̀rọ ìṣelọ́pọ̀: àkọsílẹ̀ ewu àti ààbò fún ẹ̀rọ kan, àkọsílẹ̀ wíwọn pẹ̀lú ìpinnu \"nínú tolerance\" tàbí \"kò sí nínú tolerance\" fún ẹ̀yà àṣeṣe márùn-ún, 5 Whys fún àbùkù àṣeṣe kan, ètò 5S àti àyẹ̀wò ojoojúmọ́ fún ibi iṣẹ́ kan, àti ètò tó ní ọjọ́ láti múra sílẹ̀ fún àwọn ìdánwò CPT 4.0 mẹ́rin pẹ̀lú ìlà résumé tó jẹ́ òótọ́.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà àti ọ̀dọ́ tó ń wá iṣẹ́ ìṣelọ́pọ̀, iṣẹ́ olùṣiṣẹ́ ẹ̀rọ, olùkó-ẹ̀yà-pọ̀ tàbí onímọ̀-ẹ̀rọ: àwọn tó ń wá iṣẹ́, àwọn ológun tẹ́lẹ̀, àwọn tó ń padà sílé láti ẹ̀wọ̀n, àwọn aṣíkiri àti àwọn ọ̀dọ́ tó ń parí ilé-ìwé. Àwọn kan ti ṣiṣẹ́ nínú ilé ìkẹ́rùsí (warehouse) tàbí lórí ìlà ìkó-ẹ̀yà-pọ̀; ọ̀pọ̀ jù lọ kò tíì kọ́ nípa ìṣelọ́pọ̀ rí.",
    startingPoint: "Wọ́n lè tẹ̀lé ìgbésẹ̀ tí a kọ sílẹ̀, wọ́n sì lè ṣe ìṣirò ìpìlẹ̀ pẹ̀lú nọ́mbà odidi. Ọ̀pọ̀ jù lọ kò tíì lo caliper rí, kò tíì ka tolerance, kò tíì lo lockout/tagout, tàbí gbọ́ nípa 5S, lean tàbí wíwá ohun tó fa ìṣòro gan-an. Ọ̀pọ̀ kò mọ̀ pé ìwé-ẹ̀rí ilé-iṣẹ́ wà fún iṣẹ́ ìbẹ̀rẹ̀ nínú ìṣelọ́pọ̀.",
    gap: "Àwọn agbanisíṣẹ́ fẹ́ òṣìṣẹ́ tuntun tó ń ṣiṣẹ́ láìléwu ní àyíká ẹ̀rọ, tó ń wọn nǹkan dáadáa, tó ń rí ẹ̀yà tí kò dára, tó sì ń jẹ́ kí ibi iṣẹ́ rẹ̀ wà létòlétò. Ìpalára látọ̀dọ̀ ẹ̀rọ lè le gan-an, bí gígé ẹ̀yà ara kúrò, nítorí náà àṣà ààbò ló gbọ́dọ̀ kọ́kọ́ wá. Àwọn akẹ́kọ̀ọ́ nílò ìmọ̀ yẹn, àti ọ̀nà tó yé sí ìwé-ẹ̀rí tí a mọ̀ bí MSSC CPT 4.0, láti lè díje fún iṣẹ́ ìṣelọ́pọ̀ àti ìkọ́ṣẹ́ (apprenticeship).",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; MSSC dámọ̀ràn ìpele ìṣirò kíláàsì 9 àti ìpele kíkàwé kíláàsì 10 fún CPT 4.0, nítorí náà a ń fi ìṣirò hàn ní ìgbésẹ̀ kọ̀ọ̀kan",
      "Kò sí lílo ẹ̀rọ nínú ẹ̀kọ́ yìí: àṣeṣe ọwọ́ ń ṣẹlẹ̀ pẹ̀lú olùkọ́ tó mọṣẹ́ tàbí olùkọ́ agbanisíṣẹ́ nìkan",
      "Òfin iṣẹ́ ọmọdé ti ìjọba àpapọ̀ (US) kò gba àwọn òṣìṣẹ́ tí kò tíì pé ọmọ ọdún 18 láàyè láti lo ọ̀pọ̀ ẹ̀rọ ilé-iṣẹ́",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìkàwé fún àwọn ojú-ewé ìjọba àti àjọ; rúlà tàbí téèpù wíwọn àti ìwé nílé",
      "Ohun tí wọ́n ń béèrè, owó àti ọjọ́ ìdánwò CPT 4.0 máa ń yí padà: àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò msscusa.org tàbí ibùdó ìdánwò"
    ],
    prerequisites: "Ìṣirò ìpìlẹ̀ pẹ̀lú nọ́mbà odidi. \"Ìṣirò Ojoojúmọ́\" àti \"Ìpìlẹ̀ Ààbò Níbi Iṣẹ́ (OSHA)\" jẹ́ ẹ̀kọ́ alábàárìn tó wúlò."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àpèjúwe tàbí àwòrán ẹ̀rọ kan àti iṣẹ́ kan", action: "dá àwọn ewu mọ̀ kí o sì yan ààbò tó tọ́, títí kan lockout/tagout", standard: "nípa dídárúkọ ó kéré tán ewu 3 àti ààbò tó tọ́ fún ọ̀kọ̀ọ̀kan" },
    { id: "O2", condition: "Tí a bá fún ọ ní nọ́mbà tí rúlà tàbí caliper kà àti tolerance ẹ̀yà kan", action: "wọn ẹ̀yà kan kí o sì pinnu bóyá ó wà nínú tolerance", standard: "nípa ṣíṣe ó kéré tán 4 nínú ìpinnu àṣeṣe 5 lọ́nà tó tọ́" },
    { id: "O3", condition: "Tí ìṣòro dídára bá wà lórí ìlà ìṣelọ́pọ̀", action: "kọ àwọn àbùkù sílẹ̀ kí o sì wá ohun tó ṣeé ṣe kó fà á gan-an pẹ̀lú 5 Whys", standard: "nípa yíya àwọn ẹ̀yà tí kò dára sọ́tọ̀ àti dídé ibi ohun tó fà á tí a lè tún ṣe" },
    { id: "O4", condition: "Tí a bá fún ọ ní ibi iṣẹ́ kan àti ẹ̀rọ kan", action: "lo 5S àti àyẹ̀wò olùṣiṣẹ́ ojoojúmọ́ níbi iṣẹ́ náà", standard: "nípa kíkọ ìgbésẹ̀ kan fún ọ̀kọ̀ọ̀kan S márùn-ún àti ó kéré tán nǹkan 5 tí a ó máa yẹ̀wò lójoojúmọ́" },
    { id: "O5", condition: "Pẹ̀lú ojú-ewé MSSC CPT 4.0 àti àwọn ètò ìkẹ́kọ̀ọ́ tó wà ládùúgbò", action: "kọ ètò tó ní ọjọ́ láti múra sílẹ̀ fún CPT 4.0 àti iṣẹ́ ìṣelọ́pọ̀ àkọ́kọ́", standard: "tí ó dárúkọ àwọn módù mẹ́rin tí a nílò, ọjọ́ ìdánwò tí a ó fìdí rẹ̀ múlẹ̀, àti ìlà résumé tó jẹ́ òótọ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Iṣẹ́ náà, ààbò àti wíwọn",
      lessons: [
        {
          title: "Iṣẹ́ onímọ̀-ẹ̀rọ ìṣelọ́pọ̀ àti CPT 4.0",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ṣàlàyé ohun tí onímọ̀-ẹ̀rọ ìṣelọ́pọ̀ ń ṣe àti ìwé-ẹ̀rí tó ń fi han agbanisíṣẹ́ pé o ti ṣetán.",
          text: [
            "Onímọ̀-ẹ̀rọ ìṣelọ́pọ̀ ń ṣèrànwọ́ láti ṣe ọjà láìléwu àti lọ́nà tó tọ́. Ní ìyípo iṣẹ́ (shift) lásán, o lè ṣètò ẹ̀rọ tàbí lò ó, kó àwọn ẹ̀yà pọ̀, yẹ ẹ̀yà wò pẹ̀lú irinṣẹ́ wíwọn, kọ nọ́mbà sórí ìwé tàbí ojú-iboju, jẹ́ kí ibi iṣẹ́ rẹ mọ́, kí o sì ròyìn ìṣòro ẹ̀rọ tàbí ẹ̀yà.",
            "Ọ̀pọ̀ agbanisíṣẹ́ ń wá Certified Production Technician (CPT 4.0) láti ọ̀dọ̀ Manufacturing Skill Standards Council (MSSC). Ó ní ìdánwò márùn-ún: Safety (Ààbò); Quality Practices & Measurement (Dídára àti Wíwọn); Manufacturing Process & Production (Ìlànà Ìṣelọ́pọ̀); Maintenance Awareness (Ìmọ̀ Ìtọ́jú Ẹ̀rọ); àti Green Production (Ìṣelọ́pọ̀ tí kò ba àyíká jẹ́). O máa gba ìwé-ẹ̀rí fún ọ̀kọ̀ọ̀kan tí o bá yege. Àwọn mẹ́rin àkọ́kọ́ papọ̀ ló ń fúnni ní CPT 4.0 kíkún. Green Production kì í ṣe dandan.",
            "MSSC sọ pé ìdánwò náà jẹ́ ìbéèrè aláṣàyàn (multiple choice), a sì lè ṣe é lórí ayélujára tàbí lórí ìwé. Àwọn kọ́lẹ́ẹ̀jì àdúgbò (community colleges), àwọn ètò ìrànlọ́wọ́ iṣẹ́ àti àwọn ilé-ìwé gíga kan ń kọ́ni fún un. MSSC tún ní ọ̀nà àṣeṣe ọwọ́ tí wọ́n ń pè ní CPT+ pẹ̀lú Skill Boss. Ṣàyẹ̀wò msscusa.org fún owó, ibùdó ìdánwò àti ohun tí wọ́n ń béèrè lónìí; ẹ̀kọ́ yìí kò fúnni ní ìwé-ẹ̀rí náà.",
            "Àwọn ọ̀nà míì sínú iṣẹ́ náà: ìkọ́ṣẹ́ tí ìjọba fọwọ́ sí (registered apprenticeship), níbi tí o ti ń gba owó bí o ṣe ń kọ́ṣẹ́ (wá a lórí apprenticeship.gov), àti iṣẹ́ tí agbanisíṣẹ́ fúnra rẹ̀ ti ń kọ́ ọ. Àwọn ológun tẹ́lẹ̀ tí wọ́n ṣe iṣẹ́ ìtọ́jú ẹ̀rọ tàbí iṣẹ́ ìpèsè ohun èlò nínú ológun sábà máa ń ní ọgbọ́n tó wúlò níbí."
          ],
          words: [["Onímọ̀-ẹ̀rọ ìṣelọ́pọ̀ (production technician)", "òṣìṣẹ́ tó ń lo, ń ṣètò, ń yẹ̀wò, tó sì ń tọ́jú ẹ̀rọ tó ń ṣe ọjà."], ["MSSC", "Manufacturing Skill Standards Council, àjọ tó ń ṣe ìdánwò CPT tó sì ń fúnni ní ìwé-ẹ̀rí."], ["Ìdánwò (assessment)", "ìdánwò tó ń fi hàn bóyá o mọ ohun tí a kọ́."], ["Módù (module)", "apá kan nínú CPT, tó ní ìdánwò àti ìwé-ẹ̀rí tirẹ̀."], ["Ìkọ́ṣẹ́ tí ìjọba fọwọ́ sí (registered apprenticeship)", "iṣẹ́ tí wọ́n ń sanwó fún, pẹ̀lú ìkọ́ni àti olùtọ́sọ́nà, tí U.S. Department of Labor tàbí ìpínlẹ̀ kan fọwọ́ sí."]],
          slides: [
            { title: "Bí iṣẹ́ náà ṣe rí", bullets: ["Ṣètò ẹ̀rọ tàbí lò ó, kó ẹ̀yà pọ̀", "Wọn ẹ̀yà kí o sì yẹ̀ wọ́n wò, kọ nọ́mbà sílẹ̀", "Jẹ́ kí ibi iṣẹ́ mọ́, ròyìn ìṣòro"] },
            { title: "MSSC CPT 4.0", bullets: ["Safety (Ààbò)", "Quality Practices & Measurement (Dídára àti Wíwọn)", "Manufacturing Process & Production (Ìlànà Ìṣelọ́pọ̀)", "Maintenance Awareness (Ìmọ̀ Ìtọ́jú Ẹ̀rọ)"] },
            { title: "Bí ó ṣe ń ṣiṣẹ́", bullets: ["Ìwé-ẹ̀rí fún módù kọ̀ọ̀kan tí o yege", "Módù mẹ́rin àkọ́kọ́ = CPT 4.0 kíkún", "Green Production kì í ṣe dandan"] },
            { title: "Àwọn ọ̀nà míì", bullets: ["Ìkọ́ṣẹ́ tí ìjọba fọwọ́ sí: apprenticeship.gov", "Agbanisíṣẹ́ tó ń kọ́ òṣìṣẹ́ tuntun", "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀; MSSC ló ń fúnni ní ìwé-ẹ̀rí"] }
          ],
          sources: [MSSC_CPT, MSSC_COURSES, APPRENTICE],
          tryIt: "Lórí ìwé, kọ àwọn módù CPT 4.0 mẹ́rin tí o nílò fún ìwé-ẹ̀rí kíkún. Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ nǹkan kan tí o ti mọ̀ nípa rẹ̀ àti ìbéèrè kan tí o ní. Lẹ́yìn náà ṣí msscusa.org kí o sì kọ ibi tí o máa wò láti rí ibùdó ìdánwò.",
          youCanNow: "ṣàlàyé ohun tí onímọ̀-ẹ̀rọ ìṣelọ́pọ̀ ń ṣe, kí o sì dárúkọ àwọn módù CPT 4.0 mẹ́rin tí o nílò fún ìwé-ẹ̀rí kíkún.",
          quickCheck: [
            { objective: "O5", q: "Módù CPT 4.0 mélòó ni o gbọ́dọ̀ yege fún ìwé-ẹ̀rí kíkún?", options: ["Méjì", "Gbogbo márùn-ún, títí kan Green Production", "Mẹ́rin àkọ́kọ́", "Safety nìkan"], answer: 2, why: "MSSC sọ pé ẹni tó ń ṣe ìdánwò gbọ́dọ̀ gba ìwé-ẹ̀rí mẹ́rin àkọ́kọ́ fún CPT 4.0 kíkún; Green Production kì í ṣe dandan." },
            { objective: "O5", q: "Ta ló ń fúnni ní ìwé-ẹ̀rí CPT 4.0?", options: ["Manufacturing Skill Standards Council (MSSC)", "Ẹ̀kọ́ ayélujára yìí", "OSHA", "Ilé-ìkàwé àdúgbò rẹ"], answer: 0, why: "MSSC ló ń ṣe ìdánwò, òun ló sì ń fúnni ní ìwé-ẹ̀rí; ẹ̀kọ́ yìí kàn ń múra rẹ sílẹ̀ ni." }
          ]
        },
        {
          title: "Ààbò ẹ̀rọ: ìdábòbò, PPE àti lockout/tagout",
          objectives: ["O1"],
          minutes: 6,
          goal: "Dá àwọn ewu tó wà lára ẹ̀rọ mọ̀ kí o sì yan ààbò tó tọ́.",
          text: [
            "OSHA (àjọ ìjọba US fún ààbò níbi iṣẹ́) sọ pé gbogbo apá ẹ̀rọ, iṣẹ́ rẹ̀ tàbí ìlànà rẹ̀ tó lè ṣe ènìyàn léṣe gbọ́dọ̀ ní ààbò. Òfin ẹ̀rọ rẹ̀ dárúkọ àwọn ewu bí ibi iṣẹ́ ẹ̀rọ (point of operation, níbi tí ẹ̀rọ ti ń gé, ń tẹ̀ tàbí ń ṣe àwòrán nǹkan), ibi tí nǹkan ti ń fà wọlé (nip point, níbi tí apá méjì ti ń yí pọ̀ tí wọ́n sì lè fà ọ́ wọlé), àwọn apá tó ń yí po, àti èérún irin àti ìtànná iná tó ń fò. Ìpalára lè jẹ́ fífọ́, gígé ẹ̀yà ara kúrò, jíjóná àti fífọ́jú.",
            "Ààbò rẹ, láti èyí tó lágbára jù sí èyí tó lágbára kéré jù: ìdábòbò (guard) tó ń pa ara rẹ mọ́ kúrò ní agbègbè ewu (má ṣe yọ ọ́ tàbí yẹ̀ ẹ́ sílẹ̀ láéláé), ìlànà iṣẹ́ tó láàbò, àti ohun ààbò ara (PPE) bí gíláàsì ààbò, ohun ààbò etí, ìbọ̀wọ́ níbi tí wọ́n bá ti gbà á láàyè, àti bàtà oníyìn irin. Pa aṣọ tó tú, irun gígùn àti ohun ọ̀ṣọ́ mọ́ kúrò lára apá tó ń yí; apá tó ń yí lè mú ìbọ̀wọ́, nítorí náà tẹ̀lé òfin ẹ̀rọ kọ̀ọ̀kan.",
            "Lockout/tagout (LOTO) ni òfin OSHA 29 CFR 1910.147. Nígbà tí wọ́n bá ń tún ẹ̀rọ ṣe tàbí tí wọ́n ń yọ nǹkan tó há sínú rẹ̀, agbára rẹ̀ (iná mànàmáná, agbára ẹ̀rọ, agbára omi, agbára afẹ́fẹ́, agbára kẹ́míkà tàbí ooru) gbọ́dọ̀ wà ní pípa, kí a sì tì í pa kí ó má lè bẹ̀rẹ̀. Àwọn òṣìṣẹ́ tí a ti kọ́ tí a sì fún láṣẹ nìkan ló ń fi àgádágodo sí i. Gbogbo àwọn yòókù ni a sọ fún pé wọn kò gbọ́dọ̀ yọ àgádágodo tàbí tan ẹ̀rọ tí a tì pa láéláé.",
            "Òfin iṣẹ́ ọmọdé ti ìjọba àpapọ̀ (US) kò gba àwọn òṣìṣẹ́ tí kò tíì pé ọmọ ọdún 18 láàyè láti lo ọ̀pọ̀ ẹ̀rọ alágbára, bí ẹ̀rọ tó ń ṣe àwòrán irin, ẹ̀rọ tó ń lu ihò àti ẹ̀rọ tó ń gé irin, ayùn alágbára àti forklift. Ṣàyẹ̀wò ojú-ewé Department of Labor tí o kò bá tíì pé ọmọ ọdún 18."
          ],
          steps: ["Múra sílẹ̀: mọ gbogbo orísun agbára ẹ̀rọ náà.", "Sọ fún àwọn òṣìṣẹ́ tọ́rọ̀ kàn pé a fẹ́ pa ẹ̀rọ náà.", "Pa ẹ̀rọ náà ní ọ̀nà tí a máa ń gbà pa á.", "Ya agbára sọ́tọ̀: pa swíìṣì, ti fáfà (valve), yọ ọ́ kúrò lára agbára.", "Fi àgádágodo àti àmì (tag) tìrẹ sí i.", "Tú agbára tó ṣẹ́kù sílẹ̀ tàbí dí i (sípírínìgì, afẹ́fẹ́, ìfúnpá, ooru).", "Fìdí rẹ̀ múlẹ̀: gbìyànjú láti tan an, lẹ́yìn náà dá àwọn bọ́tìnnì padà sí \"pa\"."],
          words: [["Ibi iṣẹ́ ẹ̀rọ (point of operation)", "ibi tí ẹ̀rọ ti ń gé, ń tẹ̀, ń tẹ̀ mọ́lẹ̀ tàbí ń ṣe àwòrán nǹkan."], ["Nip point", "ibi tí apá méjì tó ń rìn ti ń pàdé tí wọ́n sì lè fa ìka, irun tàbí aṣọ wọlé."], ["Ìdábòbò (guard)", "ohun ìdènà tó ń pa ara rẹ mọ́ kúrò lára apá tó ń rìn."], ["PPE", "ohun ààbò ara (personal protective equipment), bí gíláàsì ààbò, ohun ìdí etí àti bàtà ààbò."], ["Lockout/tagout (LOTO)", "pípa agbára ẹ̀rọ àti fífi àgádágodo àti àmì sí i kí ó má lè bẹ̀rẹ̀ nígbà tí ẹnìkan ń ṣiṣẹ́ lórí rẹ̀."], ["Agbára tó ṣẹ́kù (stored energy)", "agbára tó ṣì wà nínú ẹ̀rọ lẹ́yìn tí a pa á, bí sípírínìgì, ìfúnpá afẹ́fẹ́ tàbí ooru."]],
          slides: [
            { title: "Ibi tí ẹ̀rọ ti ń ṣe ènìyàn léṣe", bullets: ["Ibi iṣẹ́ ẹ̀rọ (point of operation)", "Nip point àti apá tó ń yí po", "Èérún irin àti ìtànná iná tó ń fò"] },
            { title: "Ààbò rẹ", bullets: ["Ìdábòbò: má ṣe yọ ọ́ tàbí yẹ̀ ẹ́ sílẹ̀ láéláé", "Ìlànà iṣẹ́ tó láàbò", "PPE: gíláàsì, ààbò etí, bàtà"] },
            { title: "Lockout/tagout", bullets: ["Fún títún ẹ̀rọ ṣe àti yíyọ nǹkan tó há", "Pa á, ya agbára sọ́tọ̀, tì í, fi àmì sí i", "Tú agbára tó ṣẹ́kù sílẹ̀, lẹ́yìn náà fìdí rẹ̀ múlẹ̀"] },
            { title: "Mọ ààlà rẹ", bullets: ["Àwọn tí a fún láṣẹ nìkan ló ń fi àgádágodo sí i", "Má ṣe yọ àgádágodo ẹlòmíì láéláé", "Kò tíì pé 18: ọ̀pọ̀ ẹ̀rọ ni a kò gbà ọ́ láàyè láti lò"] }
          ],
          sources: [OSHA_GUARD, OSHA_212, OSHA_LOTO, OSHA_147, DOL_YOUTH],
          tryIt: "Yan ẹ̀rọ kan tí o mọ̀ tàbí tí o lè wò nínú fídíò: ẹ̀rọ ìlu-ihò (drill press), ẹ̀rọ ìgé-ìwé (shredder) tàbí ìgbànú ìgbé-ẹrù (conveyor). Kọ ó kéré tán ewu mẹ́ta (ibi iṣẹ́ ẹ̀rọ, nip point, apá tó ń yí po, èérún tó ń fò) àti ààbò fún ọ̀kọ̀ọ̀kan. Lẹ́yìn náà ka ìṣẹ̀lẹ̀ àṣeṣe yìí: ẹ̀yà kan há sínú ẹ̀rọ ìtẹ̀mọ́lẹ̀ (press). Kọ ohun tó gbọ́dọ̀ ṣẹlẹ̀ kí ẹnikẹ́ni tó na ọwọ́ sínú rẹ̀.",
          youCanNow: "dá àwọn ewu tó wà lára ẹ̀rọ mọ̀, kí o sì yan ìdábòbò, PPE tàbí lockout/tagout láti dáàbò bo ara rẹ àti àwọn ẹlòmíì.",
          quickCheck: [
            { objective: "O1", q: "Ìdábòbò kan ń mú ọ lọ́ra, alábàáṣiṣẹ́ kan sì sọ pé kí o yọ ọ́. Kí ni o máa ṣe?", options: ["Yọ ọ́ nígbà tí alábòójútó kò sí", "Tẹ̀ ẹ́ kúrò lọ́nà", "Yọ ọ́ fún ìyípo iṣẹ́ kan ṣoṣo", "Fi í sílẹ̀ níbẹ̀ kí o sì ròyìn ìṣòro náà fún alábòójútó"], answer: 3, why: "Ìdábòbò ń pa ara rẹ mọ́ kúrò ní agbègbè ewu, a kò sì gbọ́dọ̀ yọ ọ́ tàbí yẹ̀ ẹ́ sílẹ̀ láéláé." },
            { objective: "O1", q: "Ẹ̀rọ kan nílò àtúnṣe. Ìgbésẹ̀ wo ló tẹ̀lé e ní kété tí o bá fi àgádágodo àti àmì rẹ sí i?", options: ["Tan ẹ̀rọ náà", "Tú agbára tó ṣẹ́kù sílẹ̀ tàbí dí i, lẹ́yìn náà fìdí rẹ̀ múlẹ̀ pé kò ní bẹ̀rẹ̀", "Yọ ìdábòbò kí o sì bẹ̀rẹ̀", "Yọ àgádágodo láti dán an wò"], answer: 1, why: "Lẹ́yìn títì í pa, o máa tú agbára tó ṣẹ́kù sílẹ̀, o sì máa fìdí rẹ̀ múlẹ̀ pé ẹ̀rọ náà kò lè bẹ̀rẹ̀." }
          ]
        },
        {
          title: "Wíwọn ẹ̀yà àti kíka tolerance",
          objectives: ["O2"],
          minutes: 6,
          goal: "Wọn ẹ̀yà kan kí o sì pinnu bóyá ó wà nínú tolerance.",
          text: [
            "Gbogbo ẹ̀yà ló ní ìwọ̀n àfojúsùn lórí àwòrán rẹ̀ (drawing), tí a ń pè ní nominal size, àti tolerance: bí ó ṣe lè jìnnà sí àfojúsùn tó, kí ó sì ṣì dára. Fún àpẹẹrẹ, 1.250 ± 0.005 inch túmọ̀ sí pé ìwọ̀n èyíkéyìí láti 1.245 sí 1.255 inch dára. Ohunkóhun tó kéré jù tàbí tó tóbi jù bẹ́ẹ̀ lọ kò sí nínú tolerance.",
            "Àwọn irinṣẹ́ tí a sábà ń lò: téèpù wíwọn tàbí rúlà irin fún ìwọ̀n àkọ́lé; caliper fún ìwọ̀n òde, inú àti jíjìn, tó sábà máa ń wọn dé ìdá ẹgbẹ̀rún kan inch (0.001) tàbí ìdá ọgọ́rùn-ún kan millimeter (0.01); àti micrometer fún ìwọ̀n òde tó péye jù bẹ́ẹ̀ lọ. Ọ̀pọ̀ ilé-iṣẹ́ ń lo caliper oní-nọ́mbà (digital).",
            "Àṣà rere: nu ẹ̀yà náà àti irinṣẹ́ náà, sọ caliper di òdo (zero) pẹ̀lú ẹnu rẹ̀ ní títì, mú ẹnu rẹ̀ dúró ṣánṣán sí ẹ̀yà náà láìfún un, ka nọ́mbà náà ní tààrà, kí o sì kọ ọ́ sílẹ̀ lẹ́sẹ̀kẹsẹ̀. Wọn ju ẹ̀ẹ̀kan lọ tí kò bá dá ọ lójú. Kọ́ bí a ṣe ń lo irinṣẹ́ wíwọn tó péye pẹ̀lú olùkọ́, tí yóò tún kọ́ ọ bí a ṣe ń ka ìwọ̀n dial àti vernier."
          ],
          steps: ["Ka àwòrán náà: nominal size àti tolerance.", "Ṣírò ààlà: nominal yọ tolerance kúrò, àti nominal fi tolerance kún un.", "Nu ẹ̀yà àti irinṣẹ́; sọ caliper di òdo.", "Wọn ní ṣánṣán, láìfún un; ka nọ́mbà náà.", "Kọ ọ́ sílẹ̀. Nínú ààlà = ó dára; lóde ààlà = kò sí nínú tolerance."],
          words: [["Nominal size", "ìwọ̀n àfojúsùn tó wà lórí àwòrán ẹ̀yà."], ["Tolerance", "bí ìwọ̀n kan ṣe lè yàtọ̀ sí àfojúsùn tó, kí ó sì ṣì dára."], ["Caliper", "irinṣẹ́ tó ní ẹnu tó ń yọ̀ tó ń wọn ìwọ̀n òde, inú àti jíjìn."], ["Micrometer", "irinṣẹ́ oníyíyí (bí skru) tó ń wọn ìwọ̀n òde ní ọ̀nà tó péye gan-an."], ["Sísọ di òdo (zero)", "ṣíṣètò irinṣẹ́ kí ó ka 0 nígbà tí ẹnu rẹ̀ bá tì, kí ìwọ̀n lè bẹ̀rẹ̀ láti ibi tó tọ́."]],
          slides: [
            { title: "Àfojúsùn àti tolerance", bullets: ["Nominal: ìwọ̀n àfojúsùn", "Tolerance: bí ó ṣe lè yàtọ̀ tó", "1.250 ± 0.005 = 1.245 sí 1.255"] },
            { title: "Àwọn irinṣẹ́", bullets: ["Téèpù tàbí rúlà irin: ìwọ̀n àkọ́lé", "Caliper: òde, inú, jíjìn", "Micrometer: ìwọ̀n òde tó péye gan-an"] },
            { title: "Wọn bí ọ̀jọ̀gbọ́n", bullets: ["Nu ẹ̀yà àti irinṣẹ́; kọ́kọ́ sọ ọ́ di òdo", "Ẹnu ṣánṣán, láìfún un", "Ka á ní tààrà; kọ ọ́ sílẹ̀"] },
            { title: "Pinnu", bullets: ["Nínú ààlà: ẹ̀yà tó dára", "Lóde ààlà: kò sí nínú tolerance, ròyìn rẹ̀"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Àṣeṣe nìkan, nọ́mbà àròsọ ni. Ẹ̀yà kan jẹ́ 2.000 ± 0.010 inch. Ṣírò ààlà rẹ̀, lẹ́yìn náà pinnu \"ó dára\" tàbí \"kò sí nínú tolerance\" fún: 1.995, 2.012, 1.989, 2.010, 2.004. Lẹ́yìn náà, fi rúlà wọn nǹkan mẹ́ta nílé (ìwé kan, fóònù kan, ṣíbí kan) lẹ́ẹ̀mejì ọ̀kọ̀ọ̀kan kí o sì kọ ìwọ̀n méjèèjì sílẹ̀.",
          youCanNow: "ṣírò ààlà tolerance, wọn ẹ̀yà kan dáadáa, kí o sì pinnu bóyá ó dára tàbí kò sí nínú tolerance.",
          quickCheck: [
            { objective: "O2", q: "Ẹ̀yà kan jẹ́ 0.500 ± 0.002 inch. Ààlà wo ló dára?", options: ["0.400 sí 0.600", "0.498 sí 0.502", "0.500 sí 0.502 nìkan", "0.490 sí 0.510"], answer: 1, why: "Yọ 0.002 kúrò lára 0.500 kí o sì fi 0.002 kún un: ààlà tó dára ni 0.498 sí 0.502." },
            { objective: "O2", q: "Kí ni o máa ṣe sí caliper oní-nọ́mbà kí o tó wọn nǹkan?", options: ["Fún ẹnu rẹ̀ pọ̀ dáadáa", "Wọn ẹ̀yà náà nígbà tó ṣì dọ̀tí", "Ti ẹnu rẹ̀ kí o sì sọ ọ́ di òdo", "Ka á láti ẹ̀gbẹ́"], answer: 2, why: "Sísọ ọ́ di òdo pẹ̀lú ẹnu rẹ̀ ní títì ń jẹ́ kí gbogbo ìwọ̀n bẹ̀rẹ̀ láti ibi tó tọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Iṣẹ́ náà, ààbò àti wíwọn",
        questions: [
          { objective: "O5", q: "Módù wo ni kì í ṣe dandan fún CPT 4.0 kíkún?", options: ["Safety", "Green Production", "Maintenance Awareness", "Quality Practices & Measurement"], answer: 1, why: "MSSC sọ pé Green Production kò sí lára ìwé-ẹ̀rí CPT 4.0 kíkún." },
          { objective: "O1", q: "Ibi tí rólà méjì ti ń yí sí ara wọn tí wọ́n sì lè fa apá aṣọ rẹ wọlé ni a ń pè ní:", options: ["Àwo ìsọfúnni ẹ̀rọ (data plate)", "Tolerance", "Ìwọ̀n ìdọ́gba (counterweight)", "Nip point tó ń fà wọlé"], answer: 3, why: "Nip point tó ń fà wọlé ni ibi tí apá méjì tó ń rìn ti ń pàdé tí wọ́n sì lè fà ọ́ wọlé." },
          { objective: "O1", q: "Ẹ̀yà kan há sínú ẹ̀rọ. Kí ló gbọ́dọ̀ ṣẹlẹ̀ kí ẹnikẹ́ni tó na ọwọ́ sínú rẹ̀?", options: ["Lockout/tagout láti ọwọ́ ẹni tí a fún láṣẹ", "Sọ ẹ̀rọ náà di ìyára díẹ̀", "Wọ ìbọ̀wọ́ kí o sì na ọwọ́ sínú rẹ̀ kíákíá", "Ní kí alábàáṣiṣẹ́ kan máa ṣọ́ swíìṣì"], answer: 0, why: "Yíyọ nǹkan tó há jẹ́ iṣẹ́ àtúnṣe, nítorí náà a gbọ́dọ̀ kọ́kọ́ ti agbára ẹ̀rọ náà pa." },
          { objective: "O2", q: "Ẹ̀yà kan jẹ́ 25.00 ± 0.10 mm. O wọn 25.14 mm. Kí ni òótọ́?", options: ["Ó dára", "Ó dára tí ó bá rí dáadáa lójú", "Kò sí nínú tolerance", "Tolerance kò kan ẹ̀yà oní-metric"], answer: 2, why: "Ààlà òkè ni 25.10 mm, 25.14 mm sì ga jù ú lọ." },
          { objective: "O2", q: "Irinṣẹ́ wo ló dára jù fún wíwọn fífẹ̀ inú ihò gígùn (slot)?", options: ["Òòlù", "Ìwọ̀n ìtẹ́jú (level)", "Búrọ́ọ̀ṣì kun", "Caliper"], answer: 3, why: "Caliper ní ẹnu inú tí a ṣe fún wíwọn ìwọ̀n inú." }
        ]
      }
    },
    {
      name: "Orí 2: Dídára, ìṣelọ́pọ̀ àti rírí iṣẹ́",
      lessons: [
        {
          title: "Àyẹ̀wò dídára àti wíwá ohun tó fà á gan-an",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kọ àwọn àbùkù sílẹ̀ kí o sì wá ohun tó ṣeé ṣe kó fà á gan-an pẹ̀lú 5 Whys.",
          text: [
            "Dídára túmọ̀ sí pé gbogbo ẹ̀yà bá ìlànà rẹ̀ (specification) mu, ìyẹn àwọn ohun tí a kọ sílẹ̀ pé ó gbọ́dọ̀ ní nípa ìwọ̀n, ìrísí àti iṣẹ́ rẹ̀. Ẹ̀yà tí kò bá a mu jẹ́ àbùkù (defect), tàbí ẹ̀yà tí kò bá ìlànà mu (nonconforming). Iṣẹ́ rẹ ni láti tètè rí àbùkù, pa á mọ́ kúrò lára ẹ̀yà tó dára, kí o sì ròyìn rẹ̀.",
            "Lo ìwé ìkàyè àbùkù (check sheet): tábìlì rírọrùn tí o ti ń fa ìlà kan ní gbogbo ìgbà tí o bá rí irú àbùkù kan, bí ìfọ̀ (scratch), ìwọ̀n tí kò tọ́ tàbí ihò tó sọnù. Lẹ́yìn ìyípo iṣẹ́, àwọn ìlà náà ń fi ìṣòro tó ń ṣẹlẹ̀ jù hàn. Fi àwọn ẹ̀yà tí kò dára sínú àpótí ìkọ̀sílẹ̀ tí a sàmì sí, tàbí fi àmì sí wọn, kí ẹnikẹ́ni má bàa fi ránṣẹ́ lọ́nà àṣìṣe.",
            "Láti yanjú ìṣòro pátápátá, wá ohun tó fà á gan-an (root cause), kì í ṣe àmì rẹ̀ nìkan. 5 Whys rọrùn: sọ ìṣòro náà, béèrè \"Kí ló fà á?\", lẹ́yìn náà béèrè \"Kí ló fà á?\" nípa ìdáhùn yẹn, ní nǹkan bí ẹ̀ẹ̀marùn-ún, títí o fi dé ohun tó fà á tí o lè tún ṣe. Ọ̀pọ̀ ilé-iṣẹ́ máa ń lo Plan-Do-Check-Act lẹ́yìn náà: ṣètò àtúnṣe, gbìyànjú rẹ̀, yẹ èsì wò, kí o sì sọ ọ́ di ìlànà tí ó bá ṣiṣẹ́."
          ],
          steps: ["Yẹ àwọn ẹ̀yà wò pẹ̀lú ìlànà (specification) wọn.", "Fa ìlà fún irú àbùkù kọ̀ọ̀kan lórí ìwé ìkàyè àbùkù.", "Fi àmì sí ẹ̀yà tí kò dára tàbí fi wọ́n sínú àpótí ìkọ̀sílẹ̀; ròyìn wọn.", "Béèrè \"Kí ló fà á?\" ní nǹkan bí ẹ̀ẹ̀marùn-ún láti dé ohun tó fà á gan-an.", "Dámọ̀ràn àtúnṣe; yẹ̀ ẹ́ wò pé àbùkù ti dín kù."],
          words: [["Ìlànà (specification)", "àwọn ohun tí a kọ sílẹ̀ tí ẹ̀yà kan gbọ́dọ̀ ní."], ["Àbùkù (defect)", "ẹ̀yà tàbí ọjà tí kò bá ìlànà mu; a tún ń pè é ní nonconforming."], ["Ìwé ìkàyè àbùkù (check sheet)", "tábìlì fún kíka iye ìgbà tí irú àbùkù kọ̀ọ̀kan ṣẹlẹ̀."], ["Ohun tó fà á gan-an (root cause)", "ìdí gidi tí ìṣòro fi ń ṣẹlẹ̀; títún un ṣe ń dá ìṣòro náà dúró kí ó má padà wá."], ["5 Whys", "bíbéèrè \"Kí ló fà á?\" léraléra láti kúrò ní àmì ìṣòro dé ohun tó fà á gan-an."], ["Plan-Do-Check-Act", "ìyípo ìgbésẹ̀ mẹ́rin fún dídán àtúnṣe wò àti sísọ ọ́ di ìlànà."]],
          slides: [
            { title: "Dídára lórí ìlà iṣẹ́", bullets: ["Gbogbo ẹ̀yà bá ìlànà (specification) mu", "Tètè rí àbùkù", "Pa ẹ̀yà tí kò dára mọ́ kúrò lára èyí tó dára"] },
            { title: "Ìwé ìkàyè àbùkù", bullets: ["Fa ìlà fún irú àbùkù kọ̀ọ̀kan", "Wo ìṣòro tó ń ṣẹlẹ̀ jù", "Fi àmì sí ẹ̀yà tí a kọ̀ tàbí fi sínú àpótí; ròyìn"] },
            { title: "5 Whys", bullets: ["Sọ ìṣòro náà", "Béèrè \"Kí ló fà á?\" ní nǹkan bí ẹ̀ẹ̀marùn-ún", "Dúró ní ohun tó fà á tí o lè tún ṣe"] },
            { title: "Plan-Do-Check-Act", bullets: ["Ṣètò àtúnṣe, gbìyànjú rẹ̀", "Yẹ èsì wò", "Sọ ọ́ di ìlànà tí ó bá ṣiṣẹ́"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Ìṣẹ̀lẹ̀ àṣeṣe: ihò tí a lù sínú àwọn bíràkẹ́ẹ̀tì (brackets) kò sí ní ibi tó tọ́ lórí nǹkan bí ẹ̀yà kan nínú mẹ́wàá. Ṣe ìwé ìkàyè àbùkù pẹ̀lú irú àbùkù mẹ́ta kí o sì kún un pẹ̀lú ìlà àròsọ. Lẹ́yìn náà kọ ẹ̀wọ̀n 5 Whys (fún àpẹẹrẹ: ohun ìdìmú (fixture) ń yí, nítorí pé kílámù kan ti tú, nítorí pé ...), kí o sì parí rẹ̀ pẹ̀lú àtúnṣe tí o lè dámọ̀ràn fún alábòójútó rẹ.",
          youCanNow: "kọ àwọn àbùkù sílẹ̀ lórí ìwé ìkàyè àbùkù, ya àwọn ẹ̀yà tí kò dára sọ́tọ̀, kí o sì lo 5 Whys láti wá ohun tó fà á gan-an.",
          quickCheck: [
            { objective: "O3", q: "O rí ẹ̀yà márùn-ún tó ní ìfọ̀ nínú àpótí ẹ̀yà tó dára. Kí ni o máa kọ́kọ́ ṣe?", options: ["Ya wọ́n sọ́tọ̀, fi àmì sí wọn, lẹ́yìn náà ròyìn rẹ̀", "Fi wọ́n ránṣẹ́; ìfọ̀ náà kéré", "Jù wọ́n nù kí o má sì sọ nǹkan kan", "Dán wọn fúnra rẹ"], answer: 0, why: "A máa ń pa ẹ̀yà tí kò dára mọ́ kúrò lára èyí tó dára, a sì ń ròyìn wọn kí a lè rí ohun tó fà á." },
            { objective: "O3", q: "Kí ni ète 5 Whys?", options: ["Láti di ẹ̀bi ru alábàáṣiṣẹ́", "Láti ka àwọn ẹ̀yà", "Láti mú ìlà iṣẹ́ lọ́ra", "Láti rí ohun tó fà á gan-an tí o lè tún ṣe"], answer: 3, why: "5 Whys ń kúrò ní àmì ìṣòro dé ohun tó fà á gan-an, kí àtúnṣe lè pẹ́." }
          ]
        },
        {
          title: "Ìṣelọ́pọ̀ lean, 5S àti ìtọ́jú ẹ̀rọ ojoojúmọ́",
          objectives: ["O4"],
          minutes: 6,
          goal: "Lo 5S àti àyẹ̀wò olùṣiṣẹ́ ojoojúmọ́ níbi iṣẹ́ kan.",
          text: [
            "Ìṣelọ́pọ̀ lean túmọ̀ sí ṣíṣe ohun tí oníbàárà nílò pẹ̀lú ìfiṣòfò tó kéré. Ìfiṣòfò ní nínú: ìdúró dè, ṣíṣe jù, rírìn kiri láìnídìí, gbígbé nǹkan léraléra, ọjà ìpamọ́ tó pọ̀ jù, àbùkù, àti ìgbésẹ̀ tí kò fi iye kún nǹkan. Rírí ìfiṣòfò àti dídámọ̀ràn àtúnṣe kékeré jẹ́ ara iṣẹ́ onímọ̀-ẹ̀rọ.",
            "5S ń jẹ́ kí ibi iṣẹ́ láàbò kí ó sì ṣiṣẹ́ dáadáa. Sort (Yíyàn): yọ ohun tí o kò nílò kúrò. Set in order (Ṣíṣètò): ibi tí a sàmì sí fún irinṣẹ́ kọ̀ọ̀kan. Shine (Mímọ́): nu ibi iṣẹ́ àti ẹ̀rọ, èyí tún ń fi ibi tó ń jò àti ìbàjẹ́ hàn. Standardize (Ìlànà kan): kọ bí ibi iṣẹ́ ṣe gbọ́dọ̀ rí sílẹ̀. Sustain (Ìtẹ̀síwájú): máa ṣe é ní gbogbo ìyípo iṣẹ́.",
            "Ìmọ̀ ìtọ́jú ẹ̀rọ bẹ̀rẹ̀ pẹ̀lú ìtọ́jú olùṣiṣẹ́ ojoojúmọ́. Ṣáájú àti nígbà ìyípo iṣẹ́ rẹ, wá ibi tó ń jò, bóòtù tó tú, bẹ́líìtì tó ti gbó, epo tàbí omi ìtutù (coolant) tó ti lọ sílẹ̀, ariwo àjèjì, ooru, mímì (vibration), àti ìdábòbò tàbí wáyà tó ti bàjẹ́. Tẹ̀lé àkọsílẹ̀ àyẹ̀wò ẹ̀rọ náà. Ròyìn ohun tí o rí; àwọn tí a ti kọ́ tí a sì fún láṣẹ nìkan ló ń tún ẹ̀rọ ṣe, àtúnṣe sì nílò lockout/tagout.",
            "Ìtọ́jú ìdènà (preventive maintenance) jẹ́ ìtọ́jú tí a ṣètò, bí fífi epo sí i àti yíyí àsẹ́ (filter) padà ní àkókò tí a yàn, kí ẹ̀rọ má bàa máa bàjẹ́ jù. Àkọsílẹ̀ rẹ lórí ìwé àyẹ̀wò ń ran ẹgbẹ́ ìtọ́jú ẹ̀rọ lọ́wọ́ láti tètè rí ìṣòro."
          ],
          steps: ["Sort: yọ ohun tí o kò nílò kúrò.", "Set in order: ibi tí a sàmì sí fún irinṣẹ́ kọ̀ọ̀kan.", "Shine: nu nǹkan, kí o sì wá ibi tó ń jò àti ìbàjẹ́ bí o ṣe ń nù ú.", "Standardize: kọ tàbí lẹ bí ibi iṣẹ́ ṣe gbọ́dọ̀ rí.", "Sustain: máa ṣe é ní gbogbo ìyípo iṣẹ́.", "Àyẹ̀wò ojoojúmọ́: jíjò, ariwo, ooru, mímì, bẹ́líìtì, omi ẹ̀rọ, ìdábòbò; ròyìn ìṣòro."],
          words: [["Lean", "ọ̀nà iṣẹ́ tó ń mú ìfiṣòfò kúrò kí iye lè dé ọ̀dọ̀ oníbàárà."], ["Ìfiṣòfò (waste)", "ohunkóhun tó ń fi àkókò tàbí owó kún un ṣùgbọ́n tí kò fi iye kún un, bí ìdúró dè tàbí rírìn kiri láìnídìí."], ["5S", "Sort, Set in order, Shine, Standardize, Sustain: ọ̀nà kan fún ibi iṣẹ́ tó wà létòlétò."], ["Ìtọ́jú ìdènà (preventive maintenance)", "ìtọ́jú tí a ṣètò ní àkókò tí a yàn kí ẹ̀rọ má bàa máa bàjẹ́ jù."], ["Mímì (vibration)", "gbígbọ̀n tó lè jẹ́ àmì pé apá kan ti tú tàbí ti gbó."]],
          slides: [
            { title: "Lean: dín ìfiṣòfò kù", bullets: ["Ìdúró dè, rírìn kiri àti gbígbé nǹkan léraléra", "Ṣíṣe jù, ọjà ìpamọ́ tó pọ̀ jù", "Àbùkù àti ìgbésẹ̀ tí kò ní iye"] },
            { title: "5S", bullets: ["Sort àti Set in order", "Shine: nu nǹkan kí o sì yẹ̀ ẹ́ wò", "Standardize àti Sustain"] },
            { title: "Àyẹ̀wò ẹ̀rọ ojoojúmọ́", bullets: ["Jíjò, bóòtù tó tú, bẹ́líìtì tó ti gbó", "Ariwo, ooru, mímì", "Omi ẹ̀rọ, ìdábòbò àti wáyà"] },
            { title: "Ròyìn, má ṣe tún un ṣe", bullets: ["Kọ ọ́ sórí ìwé àyẹ̀wò", "Àwọn tí a fún láṣẹ nìkan ló ń tún un ṣe", "Àtúnṣe nílò lockout/tagout"] }
          ],
          sources: [MSSC_COURSES, OSHA_147],
          tryIt: "Yan ibi iṣẹ́ kan tí o lè rí báyìí: orí tábìlì ilé ìdáná, pẹpẹ inú gáréèjì tàbí tábìlì ìkọ̀wé. Kọ ìgbésẹ̀ kan fún ọ̀kọ̀ọ̀kan S márùn-ún. Lẹ́yìn náà kọ àkọsílẹ̀ àyẹ̀wò ojoojúmọ́ tó ní ó kéré tán nǹkan márùn-ún fún ẹ̀rọ kan tí o mọ̀ (ọkọ̀ ayọ́kẹ́lẹ́, kẹ̀kẹ́, ẹ̀rọ ìgé-koríko tàbí ẹ̀rọ ìfọṣọ) àti ohun tí o máa ròyìn.",
          youCanNow: "rí ìfiṣòfò, lo 5S níbi iṣẹ́ kan, kí o sì ṣe àyẹ̀wò olùṣiṣẹ́ ojoojúmọ́, kí o máa ròyìn ìṣòro dípò kí o tún un ṣe fúnra rẹ.",
          quickCheck: [
            { objective: "O4", q: "Ìgbésẹ̀ 5S wo ló túmọ̀ sí \"ibi tí a sàmì sí fún irinṣẹ́ kọ̀ọ̀kan\"?", options: ["Sort", "Shine", "Set in order", "Sustain"], answer: 2, why: "Set in order ń fún irinṣẹ́ kọ̀ọ̀kan ní ibi tí a sàmì sí, kí ó lè rọrùn láti rí i àti láti dá a padà." },
            { objective: "O4", q: "Nígbà àyẹ̀wò ojoojúmọ́ rẹ, o gbọ́ ariwo ìkọlọ tuntun kan. Kí ni o máa ṣe?", options: ["Gbé ohùn orin sókè", "Kọ ọ́ sórí ìwé àyẹ̀wò kí o sì ròyìn rẹ̀", "Tú ẹ̀rọ náà palẹ̀", "Fi í sílẹ̀ títí yóò fi bàjẹ́"], answer: 1, why: "Olùṣiṣẹ́ ń ròyìn ariwo àjèjì; àwọn tí a ti kọ́ tí a sì fún láṣẹ ló ń tún un ṣe." }
          ]
        },
        {
          title: "Ètò rẹ: ìmúrasílẹ̀ CPT 4.0 àti iṣẹ́ ìṣelọ́pọ̀ àkọ́kọ́ rẹ",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kọ ètò tó ní ọjọ́ láti múra sílẹ̀ fún CPT 4.0 àti láti béèrè fún iṣẹ́ ìṣelọ́pọ̀.",
          text: [
            "Bẹ̀rẹ̀ láti ojú-ewé àjọ náà fúnra rẹ̀. Lórí msscusa.org, ṣàyẹ̀wò àwọn módù tó wà lónìí, bí wọ́n ṣe ń ṣe ìdánwò, owó, àti ibi tí o ti lè ṣe ìdánwò. Ọ̀pọ̀ kọ́lẹ́ẹ̀jì àdúgbò àti ibùdó ìrànlọ́wọ́ iṣẹ́ (tí a sábà ń pè ní American Job Centers) ń kọ́ni fún CPT, wọ́n sì lè ṣèrànwọ́ láti san owó rẹ̀. Béèrè bóyá ètò náà ní àṣeṣe ọwọ́ pẹ̀lú irinṣẹ́ àti ẹ̀rọ gidi.",
            "Ṣètò módù kan lẹ́ẹ̀kan. Safety jẹ́ módù àkọ́kọ́ tó dára. Fún ọ̀kọ̀ọ̀kan, yan ọ̀sẹ̀ ìkẹ́kọ̀ọ́, ọ̀nà àṣeṣe (àkọsílẹ̀, káàdì ìrántí, àṣeṣe inú ẹ̀kọ́ yìí) àti ọjọ́ ìdánwò àfojúsùn tí o máa fìdí rẹ̀ múlẹ̀ pẹ̀lú ibùdó ìdánwò.",
            "Béèrè fún iṣẹ́ bí o ṣe ń kẹ́kọ̀ọ́. Wá iṣẹ́ production associate (òṣìṣẹ́ ìṣelọ́pọ̀), machine operator (olùṣiṣẹ́ ẹ̀rọ), assembler (olùkó-ẹ̀yà-pọ̀) àti manufacturing technician (onímọ̀-ẹ̀rọ ìṣelọ́pọ̀), kí o sì wá ìkọ́ṣẹ́ tí ìjọba fọwọ́ sí lórí apprenticeship.gov. Àwọn agbanisíṣẹ́ kan ń gba àwọn tó ní àkọsílẹ̀ ẹ̀ṣẹ̀; àwọn ètò ìrànlọ́wọ́ iṣẹ́ àti ìpadàbọ̀ sí àwùjọ lè tọ́ ọ sí wọn.",
            "Lórí résumé rẹ, sọ òótọ́. Kọ \"Completed Manufacturing Technician Basics (Koach Learn), 2026\", kí o sì kọ àwọn módù CPT sílẹ̀ lẹ́yìn tí o bá ti yege wọn nìkan. Nínú ìfọ̀rọ̀wánilẹ́nuwò, kọ́kọ́ sọ̀rọ̀ nípa ààbò, lẹ́yìn náà wíwọn dáadáa, rírí ẹ̀yà tí kò dára àti jíjẹ́ kí ibi iṣẹ́ rẹ wà létòlétò."
          ],
          steps: ["Ka ojú-ewé CPT 4.0 lórí msscusa.org; kọ àwọn módù mẹ́rin tí a nílò sílẹ̀.", "Wá ètò ìkẹ́kọ̀ọ́ tàbí ibùdó ìdánwò kan ládùúgbò àti ohun tí ó ń pèsè.", "Yan ọ̀sẹ̀ ìkẹ́kọ̀ọ́ àti ọjọ́ àfojúsùn fún módù kọ̀ọ̀kan; fìdí ọjọ́ múlẹ̀ pẹ̀lú ibùdó náà.", "Kọ orúkọ iṣẹ́ mẹ́ta àti agbanisíṣẹ́ tàbí ìkọ́ṣẹ́ mẹ́ta tí o máa béèrè fún.", "Kọ ìlà résumé tó jẹ́ òótọ́ àti ìdáhùn ìṣẹ́jú-àáyá 30 sí: \"Kí ló dé tí o fi yan iṣẹ́ ìṣelọ́pọ̀?\""],
          words: [["American Job Center", "ọ́fíìsì ìjọba US fún ìrànlọ́wọ́ iṣẹ́, tó ń ran àwọn ènìyàn lọ́wọ́ láti rí iṣẹ́ àti ìkẹ́kọ̀ọ́."], ["Production associate", "orúkọ iṣẹ́ ìbẹ̀rẹ̀ tí a sábà ń rí nínú ilé-iṣẹ́ ìṣelọ́pọ̀."], ["Ibùdó ìdánwò (testing site)", "ilé-ìwé tàbí ibùdó tí a fọwọ́ sí láti ṣe ìdánwò náà."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú MSSC", bullets: ["Ṣàyẹ̀wò módù, ìdánwò àti owó lórí msscusa.org", "Wá ètò ìkẹ́kọ̀ọ́ tàbí ibùdó ìdánwò ládùúgbò", "Béèrè nípa àṣeṣe ọwọ́"] },
            { title: "Módù kan lẹ́ẹ̀kan", bullets: ["Safety jẹ́ módù àkọ́kọ́ tó dára", "Ọ̀sẹ̀ ìkẹ́kọ̀ọ́ àti ọ̀nà àṣeṣe", "Ọjọ́ àfojúsùn tí o fìdí rẹ̀ múlẹ̀"] },
            { title: "Béèrè fún iṣẹ́ bí o ṣe ń kẹ́kọ̀ọ́", bullets: ["Production associate, operator, assembler", "Ìkọ́ṣẹ́ tí ìjọba fọwọ́ sí", "Ètò ìrànlọ́wọ́ iṣẹ́ àti ìpadàbọ̀ sí àwùjọ"] },
            { title: "Sọ òótọ́", bullets: ["Kọ ẹ̀kọ́ tí o parí sílẹ̀", "Kọ módù CPT lẹ́yìn tí o bá yege nìkan", "Kọ́kọ́ sọ̀rọ̀ nípa ààbò àti dídára"] }
          ],
          sources: [MSSC_CPT, APPRENTICE],
          tryIt: "Kọ ètò rẹ sórí ojú-ewé kan: àwọn módù mẹ́rin pẹ̀lú ọ̀sẹ̀ tí o máa bẹ̀rẹ̀ ìkẹ́kọ̀ọ́ àti ọjọ́ ìdánwò àfojúsùn fún ọ̀kọ̀ọ̀kan, ètò ìkẹ́kọ̀ọ́ tàbí ibùdó ìdánwò kan tí o máa kàn sí, iṣẹ́ tàbí ìkọ́ṣẹ́ mẹ́ta tí o máa béèrè fún, àti ìlà résumé rẹ tó jẹ́ òótọ́. Ka ìdáhùn ìṣẹ́jú-àáyá 30 rẹ sí \"Kí ló dé tí o fi yan iṣẹ́ ìṣelọ́pọ̀?\" sókè.",
          youCanNow: "kọ ètò tó ní ọjọ́ láti múra sílẹ̀ fún CPT 4.0 àti iṣẹ́ ìṣelọ́pọ̀ àkọ́kọ́, kí o sì ṣàpèjúwe ìkẹ́kọ̀ọ́ rẹ ní òótọ́.",
          quickCheck: [
            { objective: "O5", q: "O yege módù Safety nìkan. Ìlà résumé wo ló jẹ́ òótọ́?", options: ["\"Full CPT 4.0 certified\"", "\"Master technician\"", "\"OSHA certified machinist\"", "\"MSSC Safety certificate (CPT 4.0 module), 2026\""], answer: 3, why: "Ó dárúkọ ohun tí o gbà gan-an, kò sì sọ pé o ní CPT 4.0 kíkún." },
            { objective: "O5", q: "Níbo ni o ti máa fìdí owó CPT àti ibùdó ìdánwò tó wà lónìí múlẹ̀?", options: ["Ojú-òpó wẹ́ẹ̀bù MSSC gidi tàbí ibùdó ìdánwò tí a fọwọ́ sí", "Ìpolówó lórí ìkànnì àjọlò (social media)", "Àmọ̀tán ọ̀rẹ́ kan", "Ojú-òpó iṣẹ́ èyíkéyìí"], answer: 0, why: "Owó àti ìdánwò máa ń yí padà, nítorí náà ṣàyẹ̀wò MSSC tàbí ibùdó ìdánwò fúnra rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídára, ìṣelọ́pọ̀ àti rírí iṣẹ́",
        questions: [
          { objective: "O3", q: "Kí ni ìwé ìkàyè àbùkù ń fi hàn ọ́ lẹ́yìn ìyípo iṣẹ́?", options: ["Irú àbùkù tó ń ṣẹlẹ̀ jù", "Iye owó ẹ̀rọ náà", "Ojú ọjọ́", "Ẹni tó pẹ́ dé"], answer: 0, why: "Àwọn ìlà lórí ìwé ìkàyè àbùkù ń fi iye ìgbà tí irú àbùkù kọ̀ọ̀kan ṣẹlẹ̀ hàn." },
          { objective: "O3", q: "Àwọn ẹ̀yà gùn jù. Kí ló fà á? Ìdádúró (stop) ti yí ibi. Kí ló fà á? Bóòtù rẹ̀ ti tú. Kí ló fà á? Kò sí ẹni tó ń yẹ̀ ẹ́ wò. Àtúnṣe wo ló dára?", options: ["Ṣe ẹ̀yà kíákíá sí i", "Di ẹ̀bi ru ìyípo iṣẹ́ tó kọjá", "Fi bóòtù ìdádúró kún àyẹ̀wò ojoojúmọ́", "Jù gbogbo ẹ̀yà nù"], answer: 2, why: "Àtúnṣe náà dojú kọ ohun tó fà á gan-an tí 5 Whys dé: kò sí ẹni tó ń yẹ bóòtù náà wò." },
          { objective: "O4", q: "Àwọn òṣìṣẹ́ ń dúró dè àwọn ẹ̀yà fún ìṣẹ́jú 20 ní ìyípo iṣẹ́ kọ̀ọ̀kan. Ní èdè lean, èyí jẹ́:", options: ["Iye (value)", "Ìfiṣòfò (waste)", "5S", "Tolerance"], answer: 1, why: "Ìdúró dè ń fi àkókò kún un ṣùgbọ́n kò fi iye kún un, nítorí náà ó jẹ́ ọ̀kan lára ìfiṣòfò lean." },
          { objective: "O4", q: "Ìgbésẹ̀ 5S wo ló tún ń ràn ọ́ lọ́wọ́ láti rí ibi tó ń jò àti ìbàjẹ́?", options: ["Sort", "Sustain", "Standardize", "Shine"], answer: 3, why: "Nínu ẹ̀rọ nígbà Shine ń fi ibi tó ń jò, ìsán àti gbígbó hàn." },
          { objective: "O5", q: "Èwo ni ìgbésẹ̀ àkọ́kọ́ tó dára fún ètò CPT 4.0?", options: ["Ka ojú-ewé CPT 4.0 lórí msscusa.org kí o sì wá ibùdó ìdánwò", "Ra ìwé-ẹ̀rí lórí ayélujára", "Ṣe gbogbo ìdánwò márùn-ún lọ́jọ́ kan náà láìkẹ́kọ̀ọ́", "Dúró títí ẹnìkan yóò fi sọ fún ọ"], answer: 0, why: "Bíbẹ̀rẹ̀ láti ojú-ewé àjọ náà fúnra rẹ̀ ń fún ọ ní àwọn módù, ìdánwò àti ibùdó tó wà lónìí." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìpìlẹ̀ Iṣẹ́ Onímọ̀-ẹ̀rọ Ilé-iṣẹ́ Ìṣelọ́pọ̀",
    questions: [
      { objective: "O5", q: "Àjọ wo ló ń fúnni ní Certified Production Technician (CPT 4.0)?", options: ["OSHA", "Agbanisíṣẹ́ rẹ nìkan", "Manufacturing Skill Standards Council (MSSC)", "Ẹ̀kọ́ yìí"], answer: 2, why: "MSSC ló ń ṣe ìdánwò CPT, òun ló sì ń fúnni ní ìwé-ẹ̀rí." },
      { objective: "O5", q: "Àwọn módù wo ló para pọ̀ di CPT 4.0 kíkún?", options: ["Safety; Quality Practices & Measurement; Manufacturing Process & Production; Maintenance Awareness", "Ìjóbọ́ irin, iṣẹ́ páìpù, wíwa ọkọ̀ àti ìdáná", "Green Production nìkan", "Forklift, kíréènì, àkàbà àti òrùlé"], answer: 0, why: "MSSC sọ pé módù mẹ́rin àkọ́kọ́ ló ń fúnni ní CPT 4.0 kíkún." },
      { objective: "O1", q: "Èwo ni ewu tí òfin ẹ̀rọ OSHA dárúkọ?", options: ["Ilẹ̀ tó mọ́", "Àtẹ 5S tí a lẹ̀ mọ́ ògiri", "Pẹ́ńsùlù tó mú", "Àwọn apá tó ń yí po"], answer: 3, why: "Òfin gbogbogbò OSHA fún ẹ̀rọ dárúkọ àwọn apá tó ń yí po pẹ̀lú ibi iṣẹ́ ẹ̀rọ, nip point àti èérún tó ń fò." },
      { objective: "O1", q: "Kí ni ààbò tó lágbára jù lọ lọ́wọ́ apá ẹ̀rọ tó ń rìn?", options: ["Ṣíṣiṣẹ́ kíákíá", "Ìdábòbò tó ń pa ara rẹ mọ́ kúrò ní agbègbè ewu", "Ìbọ̀wọ́ tó tóbi jù", "Kíkígbe ìkìlọ̀"], answer: 1, why: "Ìdábòbò ń pa ọ́ mọ́ kúrò lọ́dọ̀ ewu, a kò sì gbọ́dọ̀ yọ ọ́ tàbí yẹ̀ ẹ́ sílẹ̀ láéláé." },
      { objective: "O1", q: "O rí àgádágodo òṣìṣẹ́ míì lórí ẹ̀rọ tí o nílò. Kí ni o máa ṣe?", options: ["Gé àgádágodo náà", "Bá alábòójútó rẹ sọ̀rọ̀; má ṣe yọ àgádágodo ẹlòmíì láéláé", "Tan ẹ̀rọ náà bó ti wù kó rí", "Yọ àmì (tag) nìkan"], answer: 1, why: "Òṣìṣẹ́ tó fi àgádágodo sí i nìkan ló ń yọ ọ́, ní ìbámu pẹ̀lú ìlànà." },
      { objective: "O1", q: "Ọmọ ọdún 17 ni ọ́. Iṣẹ́ wo ni òfin iṣẹ́ ọmọdé ti ìjọba àpapọ̀ kò gbà ọ́ láàyè láti ṣe?", options: ["Gbígbá yàrá ìsinmi", "Títo ìwé sínú fáìlì", "Kíkó àpótí fúyẹ́ sórí pẹpẹ pẹ̀lú ọwọ́", "Lílo ẹ̀rọ tó ń lu ihò sínú irin"], answer: 3, why: "Àwọn òṣìṣẹ́ tí kò tíì pé ọmọ ọdún 18 kò gbọ́dọ̀ lo ẹ̀rọ alágbára tó ń ṣe àwòrán irin, tó ń lu ihò sínú irin tàbí tó ń gé irin." },
      { objective: "O2", q: "Ẹ̀yà kan jẹ́ 3.000 ± 0.005 inch. O wọn 2.996. Ṣé ó dára?", options: ["Bẹ́ẹ̀ ni, ó wà láàárín 2.995 sí 3.005", "Rárá, ó gbọ́dọ̀ jẹ́ 3.000 gan-an", "Rárá, ó tóbi jù", "Tí ó bá ń dán nìkan ni"], answer: 0, why: "2.996 wà nínú ààlà 2.995 sí 3.005." },
      { objective: "O2", q: "Kí ni tolerance?", options: ["Ìwúwo ẹ̀yà kan", "Ìyára ẹ̀rọ náà", "Bí ìwọ̀n kan ṣe lè yàtọ̀ sí àfojúsùn tó, kí ó sì ṣì dára", "Iye owó ẹ̀yà kan"], answer: 2, why: "Tolerance ló ń sọ ààlà tí a gbà láàyè ní àyíká nominal size." },
      { objective: "O2", q: "Àṣà wo ló ń jẹ́ kí caliper ka ìwọ̀n tó tọ́?", options: ["Fífún ẹnu rẹ̀ pọ̀ bí o ti lè ṣe tó", "Nínu ẹ̀yà, sísọ irinṣẹ́ di òdo àti dídi ẹnu rẹ̀ mú ní ṣánṣán", "Wíwọn nǹkan pẹ̀lú ìbọ̀wọ́ láàárín", "Fífojú díwọ̀n nọ́mbà tó gbẹ̀yìn"], answer: 1, why: "Ojú tó mọ́, irinṣẹ́ tí a sọ di òdo àti ẹnu tó dúró ṣánṣán ń fúnni ní ìwọ̀n tó péye." },
      { objective: "O2", q: "Ẹ̀yà kan jẹ́ 10.00 ± 0.05 mm. Ìwọ̀n wo ni kò sí nínú tolerance?", options: ["9.97 mm", "10.04 mm", "10.00 mm", "10.08 mm"], answer: 3, why: "Ààlà òkè ni 10.05 mm, nítorí náà 10.08 mm tóbi jù." },
      { objective: "O3", q: "Ẹ̀yà tí kò bá ìlànà (specification) rẹ̀ mu ni a ń pè ní:", options: ["Nonconforming (àbùkù)", "Nominal", "Lean", "Èyí tí a sọ di òdo"], answer: 0, why: "Ẹ̀yà tí kò yege ìlànà jẹ́ àbùkù, tàbí ẹ̀yà nonconforming." },
      { objective: "O3", q: "Kí ló dé tí o fi máa ń fi àmì sí ẹ̀yà tí kò dára tàbí fi wọ́n sínú àpótí lẹ́sẹ̀kẹsẹ̀?", options: ["Kí àpótí lè wúwo", "Kí a lè kun àwọn ẹ̀yà náà", "Kí ẹnikẹ́ni má bàa dà wọ́n pọ̀ mọ́ ẹ̀yà tó dára tàbí fi wọ́n ránṣẹ́", "Láti fi wọ́n pamọ́ fún alábòójútó"], answer: 2, why: "Yíya ẹ̀yà tí a kọ̀ sọ́tọ̀ ń dènà ẹ̀yà tí kò dára láti dé ọ̀dọ̀ oníbàárà." },
      { objective: "O3", q: "Nínú Plan-Do-Check-Act, kí ló ń ṣẹlẹ̀ ní \"Check\"?", options: ["O ṣètò àtúnṣe", "O dá ìlà iṣẹ́ dúró pátápátá", "O ra ẹ̀rọ tuntun", "O wò bóyá àtúnṣe náà ṣiṣẹ́"], answer: 3, why: "Check túmọ̀ sí wíwo èsì láti mọ̀ bóyá àtúnṣe náà ṣiṣẹ́." },
      { objective: "O4", q: "Èwo ni ìfiṣòfò lean?", options: ["Gbígbé ẹ̀yà síwá sẹ́yìn láìnídìí", "Ẹ̀yà tó dára tí a fi ránṣẹ́ sí oníbàárà", "Ibi iṣẹ́ tó mọ́", "Àyẹ̀wò ààbò tí a ti parí"], answer: 0, why: "Rírìn kiri àti gbígbé nǹkan léraléra ń fi àkókò àti owó kún un ṣùgbọ́n kò fi iye kún un." },
      { objective: "O4", q: "Kí ni \"Sustain\" túmọ̀ sí nínú 5S?", options: ["Ju ohun tí a kò lò nù", "Máa ṣe 5S ní gbogbo ìyípo iṣẹ́", "Kun ilẹ̀", "Ra irinṣẹ́ tuntun"], answer: 1, why: "Sustain túmọ̀ sí sísọ 5S di àṣà kí ibi iṣẹ́ lè máa wà létòlétò." },
      { objective: "O4", q: "Nígbà àyẹ̀wò ojoojúmọ́, o rí epo tó ń jò lábẹ́ ẹ̀rọ kan. Kí ni ìgbésẹ̀ tó tọ́?", options: ["Nù ún kí o má sì sọ nǹkan kan", "Tún páìpù rọ́bà náà ṣe fúnra rẹ nígbà tí ẹ̀rọ ń ṣiṣẹ́", "Ròyìn rẹ̀ kí o sì tẹ̀lé ìwé àyẹ̀wò; jẹ́ kí àwọn tí a fún láṣẹ tún un ṣe", "Fi àpótí bò ó"], answer: 2, why: "Olùṣiṣẹ́ ń ròyìn ìṣòro; àwọn tí a fún láṣẹ ló ń tún un ṣe lábẹ́ lockout/tagout." },
      { objective: "O4", q: "Kí ni ìtọ́jú ìdènà (preventive maintenance)?", options: ["Títún ẹ̀rọ ṣe lẹ́yìn tí ó bá bàjẹ́ nìkan", "Ìtọ́jú tí a ṣètò ní àkókò tí a yàn kí ẹ̀rọ má bàa máa bàjẹ́ jù", "Nínu yàrá ìsinmi", "Rírà aṣọ iṣẹ́ àfikún"], answer: 1, why: "Ìtọ́jú ìdènà jẹ́ ìtọ́jú tí a ṣètò tó ń dènà ìbàjẹ́ ẹ̀rọ." },
      { objective: "O5", q: "O fẹ́ iṣẹ́ tí wọ́n ń sanwó fún tó ní ìkọ́ni àti olùtọ́sọ́nà. Níbo ni o ti lè wá a?", options: ["Ojú-òpó tẹ́tẹ́ (lottery)", "App kúpọ́ọ̀nù", "Apprenticeship Finder lórí Apprenticeship.gov", "Ìkànnì eré fídíò"], answer: 2, why: "Apprenticeship Finder ti Department of Labor ń ṣe àkọsílẹ̀ àwọn àyè ìkọ́ṣẹ́ tí ìjọba fọwọ́ sí." },
      { objective: "O1", q: "Nínú lockout/tagout, kí ló dé tí o fi máa ń gbìyànjú láti tan ẹ̀rọ lẹ́yìn tí o ti tì í pa?", options: ["Láti mú un gbóná", "Láti dán àwọ̀ àgádágodo wò", "Láti parí iṣẹ́ kíákíá", "Láti fìdí rẹ̀ múlẹ̀ pé agbára ti pa lóòótọ́ kí o tó ṣiṣẹ́"], answer: 3, why: "Fífìdí rẹ̀ múlẹ̀ ń fi hàn pé a ti ya agbára sọ́tọ̀; lẹ́yìn náà o dá àwọn bọ́tìnnì padà sí \"pa\"." },
      { objective: "O3", q: "Kun ń bó kúrò lára ọ̀pọ̀ ẹ̀yà. Kí ló fà á? Ojú wọn ní epo. Kí ló fà á? A fo ìgbésẹ̀ fífọ̀ ru. Ìdáhùn wo ló súnmọ́ ohun tó fà á gan-an?", options: ["Àwọn ẹ̀yà náà kò dára", "A fo ìgbésẹ̀ fífọ̀ ru", "Kun ń bó", "Oníbàárà ń ṣe àṣàyàn jù"], answer: 1, why: "Ìgbésẹ̀ fífọ̀ tí a fò ru jẹ́ ohun tó fà á tí o lè tún ṣe; kun tó ń bó jẹ́ àmì ìṣòro nìkan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 4, 6, 7, 10, 12, 13, 15] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún yẹ̀ ẹ́ wò.",
    criteria: [
      { name: "Àkọsílẹ̀ ewu àti ààbò", objective: "O1", notYet: "Ewu tí kò tó mẹ́ta, tàbí ewu tí kò ní ààbò tàbí tí ààbò rẹ̀ kò tọ́.", meets: "Ó kéré tán ewu mẹ́ta lórí ẹ̀rọ kan, ọ̀kọ̀ọ̀kan pẹ̀lú ìdábòbò, PPE tàbí ìlànà tó tọ́, àti ìgbà tí a nílò lockout/tagout.", exceeds: "Ó kọ àwọn ìgbésẹ̀ lockout/tagout ní ìtẹ̀léra, ó sì dárúkọ àwọn orísun agbára ẹ̀rọ náà." },
      { name: "Àkọsílẹ̀ wíwọn", objective: "O2", notYet: "A ṣírò ààlà lọ́nà tí kò tọ́, tàbí ìpinnu méjì tàbí jù bẹ́ẹ̀ lọ kò tọ́.", meets: "Ààlà tọ́, a sì ṣe ìdájọ́ ó kéré tán 4 nínú ẹ̀yà àṣeṣe 5 lọ́nà tó tọ́.", exceeds: "Gbogbo 5 tọ́, pẹ̀lú àwọn àṣà wíwọn tí a lò tí a kọ sí ẹ̀gbẹ́ àkọsílẹ̀ náà." },
      { name: "Àkọsílẹ̀ àbùkù àti 5 Whys", objective: "O3", notYet: "A kò ya ẹ̀yà tí kò dára sọ́tọ̀, tàbí ẹ̀wọ̀n náà dúró ní àmì ìṣòro.", meets: "Ìwé ìkàyè àbùkù, ìgbésẹ̀ láti fi àmì sí ẹ̀yà tí kò dára, àti 5 Whys tó parí ní ohun tó fà á tí a lè tún ṣe.", exceeds: "Ó fi àkọsílẹ̀ Plan-Do-Check-Act kún un nípa bí a ṣe máa yẹ̀ ẹ́ wò pé àtúnṣe náà ṣiṣẹ́." },
      { name: "Ètò 5S àti àyẹ̀wò ojoojúmọ́", objective: "O4", notYet: "Ọ̀kan nínú S márùn-ún kò sí, tàbí nǹkan àyẹ̀wò kò tó márùn-ún.", meets: "Ìgbésẹ̀ kan fún S kọ̀ọ̀kan àti ó kéré tán nǹkan àyẹ̀wò ojoojúmọ́ márùn-ún pẹ̀lú ohun tí a máa ròyìn.", exceeds: "Ó dárúkọ ó kéré tán ìfiṣòfò lean méjì níbi iṣẹ́ náà àti àtúnṣe kékeré kan fún ọ̀kọ̀ọ̀kan." },
      { name: "Ètò CPT 4.0 àti iṣẹ́", objective: "O5", notYet: "Módù tí kò tọ́, kò sí ọjọ́, tàbí ìlà résumé tó sọ pé ó ní ìwé-ẹ̀rí tí kò tíì gbà.", meets: "Ó dárúkọ àwọn módù mẹ́rin tí a nílò pẹ̀lú ọjọ́ àfojúsùn tí a máa fìdí múlẹ̀, ètò ìkẹ́kọ̀ọ́ tàbí ibùdó ìdánwò kan, àwọn iṣẹ́ mẹ́ta tí a lè béèrè fún, àti ìlà résumé tó jẹ́ òótọ́.", exceeds: "Ó ní ìdáhùn ìṣẹ́jú-àáyá 30 tí a ti fi ṣe àṣeṣe àti ọ̀nà àfidípò bí ìkọ́ṣẹ́." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tó parí ẹ̀kọ́ náà àti àpò ìmúrasílẹ̀ tó dé ìpele rubric",
      "Àwọn akẹ́kọ̀ọ́ tó forúkọ sílẹ̀ fún ìkẹ́kọ̀ọ́ CPT 4.0 tàbí tó ṣe módù CPT àkọ́kọ́ láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tó yege módù CPT 4.0 kan tàbí jù bẹ́ẹ̀ lọ (ìròyìn ara wọn pẹ̀lú ìwé-ẹ̀rí MSSC)",
      "Àwọn akẹ́kọ̀ọ́ tí a gbà sí iṣẹ́ ìṣelọ́pọ̀ tàbí ìkọ́ṣẹ́ tí ìjọba fọwọ́ sí (ìròyìn alábàáṣiṣẹ́ àti àtẹ̀lé)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tó ní íńtánẹ́ẹ̀tì fún msscusa.org, osha.gov àti apprenticeship.gov",
      "Rúlà tàbí téèpù wíwọn, ìwé àti gègé",
      "Kò pọn dandan: caliper oní-nọ́mbà àti ẹ̀yà kékeré díẹ̀ (bóòtù, wáṣà) láti wọn pẹ̀lú olùkọ́",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀"
    ],
    facilitatorNotes: [
      "Sọ ọ́ ní kùtùkùtù àti léraléra: ẹ̀kọ́ yìí ń múra àwọn akẹ́kọ̀ọ́ sílẹ̀; MSSC ló ń fúnni ní ìwé-ẹ̀rí CPT, a sì ń kọ́ ọgbọ́n ẹ̀rọ lójúkojú.",
      "Má ṣe jẹ́ kí àwọn akẹ́kọ̀ọ́ lo ẹ̀rọ tàbí ṣe àṣeṣe lockout/tagout lórí ẹ̀rọ tó ní agbára gẹ́gẹ́ bí ara ẹ̀kọ́ yìí. Lo àwòrán, fídíò àti ohun àfihàn tí kò ní agbára mọ́.",
      "Ṣàyẹ̀wò owó MSSC, ọ̀nà ìdánwò àti ibùdó ìdánwò àdúgbò tó wà lónìí ṣáájú ìpàdé, kí o sì sọ nípa owó ìrànlọ́wọ́ èyíkéyìí tí ètò ìrànlọ́wọ́ iṣẹ́ rẹ ń pèsè.",
      "Ṣàlàyé ìṣirò tolerance díẹ̀díẹ̀ lórí pátákó; ọ̀pọ̀ akẹ́kọ̀ọ́ nílò àpẹẹrẹ méjì tàbí mẹ́ta tí a ti ṣírò.",
      "Ṣọ́ àwọn akẹ́kọ̀ọ́ tí kò tíì pé ọmọ ọdún 18: wọ́n lè ṣe ẹ̀kọ́ náà, ṣùgbọ́n ọ̀pọ̀ ẹ̀rọ ilé-iṣẹ́ ni a kò gbà wọ́n láàyè láti lò níbi iṣẹ́.",
      "Fi rubric ṣe àmì fún àpò ìmúrasílẹ̀, kí o sì ṣàtúnyẹ̀wò ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
