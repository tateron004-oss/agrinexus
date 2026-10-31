"use strict";

// Koach Learn course (Yoruba translation of shared/cdl-prep.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Course stays about the US: CDL class and endorsement letters, 49 CFR rule numbers and FMCSA names are kept as written.

const CFR_CLASSES = { name: "49 CFR 383.91: Àwọn ẹgbẹ́ ọkọ̀ ìṣòwò (ẹ̀dà òfin ìjọba àpapọ̀ lórí Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/49/383.91" };
const CFR_ENDORSE = { name: "49 CFR 383.153: Àwọn lẹ́tà àṣẹ àfikún (endorsements) lórí CDL àti CLP", url: "https://www.law.cornell.edu/cfr/text/49/383.153" };
const CFR_CLP = { name: "49 CFR 383.25: Ìwé-àṣẹ akẹ́kọ̀ọ́ awakọ̀ ìṣòwò (CLP)", url: "https://www.law.cornell.edu/cfr/text/49/383.25" };
const CFR_ELDT = { name: "49 CFR 380.603: Ta ló gbọdọ̀ parí ìdánilẹ́kọ̀ọ́ fún awakọ̀ tuntun", url: "https://www.law.cornell.edu/cfr/text/49/380.603" };
const TPR = { name: "FMCSA Training Provider Registry (àkọsílẹ̀ ìjọba ti àwọn olùkọ́ ELDT)", url: "https://tpr.fmcsa.dot.gov/" };
const FMCSA_CDL = { name: "FMCSA: Commercial Driver's License (àwọn ojú-ìwé CDL ti ìjọba àpapọ̀)", url: "https://www.fmcsa.dot.gov/registration/commercial-drivers-license" };
const CFR_AGE = { name: "49 CFR 391.11: Ohun tí awakọ̀ gbọdọ̀ ní (ọjọ́ orí, Gẹ̀ẹ́sì, ìlera)", url: "https://www.law.cornell.edu/cfr/text/49/391.11" };
const CFR_MED = { name: "49 CFR 391.45: Ìgbà tí awakọ̀ gbọdọ̀ ṣe àyẹ̀wò ìlera", url: "https://www.law.cornell.edu/cfr/text/49/391.45" };
const CFR_SKILLS = { name: "49 CFR 383.113: Ohun tí ìdánwò ọgbọ́n ìwakọ̀ CDL ń dán wò", url: "https://www.law.cornell.edu/cfr/text/49/383.113" };
const CFR_INSPECT = { name: "49 CFR 396.13: Àyẹ̀wò tí awakọ̀ ń ṣe kí ó tó wakọ̀", url: "https://www.law.cornell.edu/cfr/text/49/396.13" };
const FMCSA_HOS = { name: "FMCSA: Àwọn òfin wákàtí iṣẹ́ (hours of service)", url: "https://www.fmcsa.dot.gov/regulations/hours-of-service" };
const CFR_MIL = { name: "49 CFR 383.77: Ìyọ̀ǹda ìdánwò ọgbọ́n ìwakọ̀ fún awakọ̀ ológun", url: "https://www.law.cornell.edu/cfr/text/49/383.77" };
const BLS_TRUCK = { name: "U.S. Bureau of Labor Statistics (ọ́fíìsì ìṣirò iṣẹ́ ti US): Àwọn awakọ̀ ọkọ̀ akẹ́rù ńlá àti tirela", url: "https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm" };

module.exports = {
  id: "cdl-prep-yo",
  lang: "yo",
  translationOf: "cdl-prep",
  category: "Workforce Development",
  name: "Ìmúrasílẹ̀ fún Ìwé-àṣẹ Awakọ̀ Ìṣòwò (CDL)",
  skills: "Yíyan kíláàsì CDL àti àṣẹ àfikún tó tọ́, Ṣíṣètò àwọn ìgbésẹ̀ láti ìwé-àṣẹ akẹ́kọ̀ọ́ dé ìwé-àṣẹ, Kíka ìwé ìtọ́sọ́nà CDL ti ìpínlẹ̀, Ṣíṣe àyẹ̀wò ọkọ̀ ṣáájú ìrìn-àjò, Ṣíṣe ìpinnu ìwakọ̀ tí kò léwu",
  outcome: "yan kíláàsì CDL àti àwọn àṣẹ àfikún tí iṣẹ́ tí o fẹ́ nílò, to gbogbo ìgbésẹ̀ láti ìwé-àṣẹ akẹ́kọ̀ọ́ dé ìwé-àṣẹ, kẹ́kọ̀ọ́ fún àwọn ìdánwò àkọsílẹ̀ ìpínlẹ̀ pẹ̀lú ìwé ìtọ́sọ́nà ti ìjọba, ṣàlàyé àyẹ̀wò ọkọ̀ ṣáájú ìrìn-àjò ní ẹnu, kí o sì sọ gbogbo rẹ̀ di ètò ìkẹ́kọ̀ọ́ àti ìdánwò CDL tí ó ní ọjọ́.",
  about: [
    "Ẹ̀kọ́ yìí wà fún ẹnikẹ́ni tí ó fẹ́ iṣẹ́ wíwa ọkọ̀ akẹ́rù tàbí bọ́ọ̀sì: àwọn tí ń wá iṣẹ́, àwọn ológun tẹ́lẹ̀ (veterans), àwọn ọ̀dọ́, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àti àwọn àgbàlagbà tí ń yí iṣẹ́ padà. O kò nílò ìrírí ìwakọ̀ kankan ju ìwé-àṣẹ ìwakọ̀ lásán lọ.",
    "O máa kọ́ irú ìwé-àṣẹ awakọ̀ ìṣòwò (CDL) tí o nílò, àwọn ìgbésẹ̀ láti gbà á, bí o ṣe lè kẹ́kọ̀ọ́ fún àwọn ìdánwò àkọsílẹ̀, bí o ṣe lè ṣe àyẹ̀wò ọkọ̀ ṣáájú ìrìn-àjò tí ó ń bẹ̀rẹ̀ ìdánwò ìwakọ̀, àti àwọn ìwà ìwakọ̀ tí kò léwu tí àwọn olùdánwò ń wá.",
    "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀. Kò fún ọ ní ìwé-àṣẹ tàbí ìwé-àṣẹ akẹ́kọ̀ọ́. Àwọn òfin ìjọba àpapọ̀ wá láti FMCSA (Federal Motor Carrier Safety Administration, àjọ ìjọba US fún ààbò ọkọ̀ akẹ́rù àti bọ́ọ̀sì). Ọ́fíìsì ìwé-àṣẹ ìwakọ̀ ti ìpínlẹ̀ rẹ ló ń ṣe àwọn ìdánwò, ọ̀pọ̀ awakọ̀ tuntun sì gbọdọ̀ parí ìdánilẹ́kọ̀ọ́ fún awakọ̀ tuntun lọ́dọ̀ olùkọ́ tí a forúkọ rẹ̀ sílẹ̀. Ẹ̀kọ́ kọ̀ọ̀kan sọ ibi tí o ti lè ṣàyẹ̀wò àwọn òfin ti ìjọba.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ kúkúrú wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Ní ìparí, o máa ṣe ètò ìkẹ́kọ̀ọ́ àti ìdánwò CDL tìrẹ pẹ̀lú ọjọ́ gidi."
  ],
  finalTask: "Ṣe ètò ìkẹ́kọ̀ọ́ àti ìdánwò CDL tìrẹ ní ojú-ìwé kan: iṣẹ́ tí o fẹ́, kíláàsì CDL àti àṣẹ àfikún èyíkéyìí tí ó nílò, àwọn ìgbésẹ̀ láti àyẹ̀wò ìlera dé ìdánwò ọgbọ́n ìwakọ̀ ní ìtòlẹ́sẹẹsẹ pẹ̀lú ọjọ́ àfojúsùn fún ọ̀kọ̀ọ̀kan, olùkọ́ mẹ́ta tí a forúkọ wọn sílẹ̀ tí o rí lórí Training Provider Registry, àwọn apá ìwé ìtọ́sọ́nà ìpínlẹ̀ tí o máa kà ní ọ̀sẹ̀ kọ̀ọ̀kan, àti àkọsílẹ̀ àyẹ̀wò ṣáájú ìrìn-àjò fún irú ọkọ̀ tí o máa fi ṣe ìdánwò.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí ń wá iṣẹ́ àkọ́kọ́ wíwa ọkọ̀ akẹ́rù tàbí bọ́ọ̀sì: àwọn tí ń wá iṣẹ́, àwọn ológun tẹ́lẹ̀ àti àwọn tí ń kúrò nínú iṣẹ́ ológun, àwọn ọ̀dọ́, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àti àwọn tí ń yí iṣẹ́ padà. Ọ̀pọ̀ ní ìwé-àṣẹ ìwakọ̀ lásán ṣùgbọ́n wọn kò ní ìrírí ìwakọ̀ ìṣòwò.",
    startingPoint: "Wọ́n lè wa mọ́tò, wọ́n sì lè ka ìwé ìtọ́sọ́nà tí ó rọrùn. Ọ̀pọ̀ kò mọ àwọn kíláàsì CDL, àwọn ìgbésẹ̀ ìwé-àṣẹ akẹ́kọ̀ọ́, òfin ìdánilẹ́kọ̀ọ́, tàbí ohun tí àyẹ̀wò ṣáájú ìrìn-àjò jẹ́. Àwọn ọ̀rẹ́ tàbí ìpolówó ti sọ òtítọ́ tí kò tọ́ fún àwọn kan.",
    gap: "Iṣẹ́ ìwakọ̀ ń san owó déédéé, àyè iṣẹ́ sì pọ̀, ṣùgbọ́n àwọn ènìyàn ń fi àkókò àti owó ṣòfò nígbà tí wọ́n bá yan kíláàsì tí kò tọ́, tí wọ́n forúkọ sílẹ̀ ní ilé-ẹ̀kọ́ tí a kò forúkọ rẹ̀ sílẹ̀, tàbí tí wọ́n lọ ṣe ìdánwò láìmúrasílẹ̀. Àwọn akẹ́kọ̀ọ́ nílò àwòrán tó tọ́ nípa ọ̀nà náà àti ètò tí wọ́n lè tẹ̀lé, kí wọ́n tó sanwó fún ìdánilẹ́kọ̀ọ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ iṣẹ́ ọwọ́",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìkàwé láti ka ìwé ìtọ́sọ́nà CDL ìpínlẹ̀ àti àkọsílẹ̀ ti ìjọba",
      "Òfin yàtọ̀ láti ìpínlẹ̀ kan sí òmíràn: ẹ̀kọ́ náà ń tọ́ka sí ìwé ìtọ́sọ́nà àti ọ́fíìsì ìpínlẹ̀ fún owó, fọ́ọ̀mù àti ìforúkọsílẹ̀ ìdánwò",
      "Kò sí ìwakọ̀ gidi nínú ẹ̀kọ́ yìí; ọgbọ́n ìwakọ̀ lójú ọ̀nà wá láti ọ̀dọ̀ olùkọ́ tí a forúkọ rẹ̀ sílẹ̀",
      "Àwọn akẹ́kọ̀ọ́ kan ní àkọsílẹ̀ ẹ̀ṣẹ̀ tàbí àìsàn: wọ́n ń ṣàyẹ̀wò bóyá wọ́n tóótun lọ́dọ̀ ìpínlẹ̀ àti dókítà olùyẹ̀wò, kì í ṣe lọ́dọ̀ ẹ̀kọ́ yìí"
    ],
    prerequisites: "Ìwé-àṣẹ ìwakọ̀ lásán tí ó ṣì wúlò, tàbí ètò láti kọ́kọ́ gbà á. Kíkà Gẹ̀ẹ́sì ìpìlẹ̀, nítorí òfin ìjọba àpapọ̀ sọ pé awakọ̀ gbọdọ̀ lè ka Gẹ̀ẹ́sì kí ó sì sọ ọ́ dáadáa tó fún iṣẹ́ náà."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àpèjúwe iṣẹ́ ìwakọ̀ kan", action: "dá kíláàsì CDL (A, B tàbí C) àti àwọn àṣẹ àfikún tí iṣẹ́ náà nílò mọ̀", standard: "kí o sì gba ó kéré tán 4 nínú àpèjúwe iṣẹ́ 5 tọ̀nà" },
    { id: "O2", condition: "Ní lílo àwọn orísun ti FMCSA àti ti ìpínlẹ̀", action: "to àwọn ìgbésẹ̀ láti àyẹ̀wò ìlera dé ìdánwò ọgbọ́n ìwakọ̀ CDL ní ìtòlẹ́sẹẹsẹ tó tọ́", standard: "láìsí ìgbésẹ̀ kankan tó kù, pẹ̀lú àkókò ìdúró àti òfin ìdánilẹ́kọ̀ọ́" },
    { id: "O3", condition: "Ní lílo ìwé ìtọ́sọ́nà CDL ọ̀fẹ́ ti ìpínlẹ̀ rẹ", action: "ṣètò ọ̀nà ìkẹ́kọ̀ọ́ fún àwọn ìdánwò àkọsílẹ̀ tí o nílò, kí o sì ṣe ìbéèrè àṣeṣe kan", standard: "kí o sì gba ó kéré tán 8 nínú 10 nínú ìbéèrè àṣeṣe kí o tó forúkọ sílẹ̀ fún ìdánwò" },
    { id: "O4", condition: "Bí o ti dúró ti ọkọ̀ akẹ́rù kan tàbí tí o ń lo àwòrán rẹ̀", action: "dárúkọ apá kọ̀ọ̀kan tí o ń yẹ̀wò nínú àyẹ̀wò ṣáájú ìrìn-àjò, kí o sì sọ ohun tí o ń wò lára rẹ̀", standard: "kí o sì bo gbogbo àwọn apá pàtàkì ní ìtòlẹ́sẹẹsẹ láìfo apá kankan" },
    { id: "O5", condition: "Tí a bá fún ọ ní ipò kan nígbà ìwakọ̀", action: "yan ìgbésẹ̀ tí kò léwu nípa àyè, iyára, wíwa sẹ́yìn àti ìlera awakọ̀", standard: "kí o sì gba ó kéré tán 4 nínú ipò 5 tọ̀nà" }
  ],
  chapters: [
    {
      name: "Orí 1: Ọ̀nà CDL",
      lessons: [
        {
          title: "Àwọn kíláàsì CDL àti àṣẹ àfikún: èwo ni o nílò?",
          objectives: ["O1"],
          minutes: 5,
          goal: "So iṣẹ́ ìwakọ̀ kan pọ̀ mọ́ kíláàsì CDL àti àwọn àṣẹ àfikún tí ó nílò.",
          text: [
            "Ìwé-àṣẹ awakọ̀ ìṣòwò (CDL) ń jẹ́ kí o wa ọkọ̀ ńlá tàbí ọkọ̀ àkànṣe fún iṣẹ́. Kíláàsì mẹ́ta ló wà, gẹ́gẹ́ bí irú ọkọ̀.",
            "Kíláàsì A wà fún ọkọ̀ àsopọ̀, bí ọkọ̀ akẹ́rù tí ń fa tirela, nígbà tí ìwọ̀n àsopọ̀ náà bá jẹ́ 26,001 pọ́n-ùn (pounds) tàbí jù bẹ́ẹ̀ lọ, tí ìwọ̀n tirela tí ó ń fà sì ju 10,000 pọ́n-ùn lọ. Kíláàsì B wà fún ọkọ̀ ńlá kan ṣoṣo tí ìwọ̀n rẹ̀ jẹ́ 26,001 pọ́n-ùn tàbí jù bẹ́ẹ̀ lọ, bí ọkọ̀ tí ń da yanrìn (dump truck), ọkọ̀ akẹ́rù oníyàrá (box truck) tàbí bọ́ọ̀sì ìlú; ó lè fa tirela kékeré tí ìwọ̀n rẹ̀ jẹ́ 10,000 pọ́n-ùn tàbí kí ó dín. Kíláàsì C wà fún àwọn ọkọ̀ kékeré tí ń gbé ènìyàn 16 tàbí jù bẹ́ẹ̀ lọ (pẹ̀lú awakọ̀), tàbí tí ń gbé ohun eléwu tí ó nílò àmì ìkìlọ̀ (placards).",
            "Àwọn àṣẹ àfikún (endorsements) jẹ́ lẹ́tà àfikún lórí ìwé-àṣẹ rẹ fún iṣẹ́ àkànṣe. T: tirela méjì tàbí mẹ́ta. P: èrò. N: ọkọ̀ onítáǹkì. H: ohun eléwu. X: táǹkì pẹ̀lú ohun eléwu. S: bọ́ọ̀sì ilé-ìwé. Ọ̀kọ̀ọ̀kan ní ìdánwò tirẹ̀, àṣẹ H sì tún nílò àyẹ̀wò ìtàn ẹni fún ààbò.",
            "Bẹ̀rẹ̀ láti iṣẹ́ tí o fẹ́. Ka ìpolówó iṣẹ́ gidi nítòsí rẹ, kí o sì wá kíláàsì àti àṣẹ àfikún tí wọ́n béèrè."
          ],
          steps: ["Yan iṣẹ́ tí o fẹ́, bí ìrìn-àjò jíjìn, ìfijíṣẹ́ àdúgbò, bọ́ọ̀sì tàbí ọkọ̀ tí ń da yanrìn.", "Béèrè: ṣé ó ń fa tirela ńlá? Ìyẹn sábà máa ń jẹ́ Kíláàsì A.", "Ṣé ọkọ̀ akẹ́rù ńlá kan tàbí bọ́ọ̀sì kan ni? Ìyẹn sábà máa ń jẹ́ Kíláàsì B.", "Ṣé ó ń gbé èrò, omi nínú táǹkì, tirela méjì tàbí ohun eléwu? Fi àṣẹ àfikún náà kún un."],
          words: [["CDL", "commercial driver's license: ìwé-àṣẹ tí a nílò láti wa ọkọ̀ ńlá tàbí ọkọ̀ àkànṣe fún iṣẹ́."], ["Ọkọ̀ àsopọ̀", "ọkọ̀ akẹ́rù tí ń fa tirela, bí tractor-trailer."], ["Ìwọ̀n ọkọ̀", "ìwọ̀n tí ó pọ̀ jù tí a ṣe ọkọ̀ láti gbé nígbà tí ẹrù kún inú rẹ̀, tí olùṣe rẹ̀ pinnu (a sábà máa ń pè é ní GVWR)."], ["Àṣẹ àfikún", "àṣẹ àfikún lórí CDL rẹ fún iṣẹ́ àkànṣe, bí gbígbé èrò tàbí táǹkì (endorsement)."], ["Ohun eléwu (hazmat)", "ẹrù tí ó lè pa ènìyàn lára tàbí ba dúkìá jẹ́, bí epo tàbí kẹ́míkà, tí ó nílò àmì ìkìlọ̀ tí a ń pè ní placards."]],
          slides: [
            { title: "Kíláàsì CDL mẹ́ta", bullets: ["Kíláàsì A: ọkọ̀ akẹ́rù tí ń fa tirela tó wúwo (tractor-trailer)", "Kíláàsì B: ọkọ̀ akẹ́rù wíwúwo kan tàbí bọ́ọ̀sì (dump truck, bọ́ọ̀sì ìlú)", "Kíláàsì C: ọkọ̀ kékeré tí ń gbé ènìyàn 16+ tàbí ohun eléwu tí ó ní àmì ìkìlọ̀"] },
            { title: "Àṣẹ àfikún: àwọn lẹ́tà àfikún", bullets: ["T tirela méjì/mẹ́ta, P èrò, N táǹkì", "H ohun eléwu, X táǹkì pẹ̀lú ohun eléwu, S bọ́ọ̀sì ilé-ìwé", "Ọ̀kọ̀ọ̀kan nílò ìdánwò tirẹ̀"] },
            { title: "Bẹ̀rẹ̀ láti iṣẹ́ náà", bullets: ["Ka ìpolówó iṣẹ́ gidi mẹ́ta nítòsí rẹ", "Kọ kíláàsì àti àṣẹ àfikún tí wọ́n béèrè sílẹ̀", "Ìyẹn ni ìwé-àṣẹ tí o ń lépa"] }
          ],
          sources: [CFR_CLASSES, CFR_ENDORSE, FMCSA_CDL],
          tryIt: "Wá ìpolówó iṣẹ́ ìwakọ̀ gidi mẹ́ta nítòsí rẹ (lórí ojú-òpó iṣẹ́ tàbí ojú-òpó ilé-iṣẹ́ náà fúnra rẹ̀). Fún ọ̀kọ̀ọ̀kan, kọ iṣẹ́ náà, kíláàsì CDL tí ó béèrè àti àṣẹ àfikún èyíkéyìí. Fa àyíká yí iṣẹ́ tí o fẹ́ jù lọ ká.",
          youCanNow: "so iṣẹ́ ìwakọ̀ kan pọ̀ mọ́ Kíláàsì A, B tàbí C, kí o sì dárúkọ àwọn àṣẹ àfikún tí ó nílò.",
          quickCheck: [
            { objective: "O1", q: "Iṣẹ́ kan ni wíwa ọkọ̀ akẹ́rù tí ń fa tirela ẹlẹ́sẹ̀ 53 (53-foot). Kíláàsì wo ni ó sábà máa ń jẹ́?", options: ["Kíláàsì C", "Kíláàsì B", "Kíláàsì A", "Kò nílò CDL"], answer: 2, why: "Ọkọ̀ akẹ́rù tí ń fa tirela wíwúwo jẹ́ ọkọ̀ àsopọ̀, ìyẹn sì ni Kíláàsì A." },
            { objective: "O1", q: "Àṣẹ àfikún wo ni o máa fi kún un láti wa bọ́ọ̀sì ilé-ìwé?", options: ["S", "T", "N", "X"], answer: 0, why: "S ni àṣẹ àfikún bọ́ọ̀sì ilé-ìwé; a tún nílò àṣẹ P fún èrò láti wa bọ́ọ̀sì." }
          ]
        },
        {
          title: "Àwọn ìgbésẹ̀ láti ìwé-àṣẹ akẹ́kọ̀ọ́ dé ìwé-àṣẹ",
          objectives: ["O2"],
          minutes: 6,
          goal: "To àwọn ìgbésẹ̀ sí CDL ní ìtòlẹ́sẹẹsẹ, kí o sì sọ ẹni tí ó ń bójútó ọ̀kọ̀ọ̀kan.",
          text: [
            "Ọ̀pọ̀ awakọ̀ tuntun ń tẹ̀lé àwọn ìgbésẹ̀ kan náà. Àwọn òfin ìjọba àpapọ̀ wá láti FMCSA; ọ́fíìsì ìwé-àṣẹ ìwakọ̀ ti ìpínlẹ̀ rẹ ló ń ṣe àwọn ìdánwò, tí ó sì ń pinnu owó àti fọ́ọ̀mù.",
            "Àkọ́kọ́, àyẹ̀wò ìlera (tí a sábà máa ń pè ní DOT physical) lọ́dọ̀ dókítà olùyẹ̀wò tí a fọwọ́ sí. Ọ̀pọ̀ awakọ̀ gbọdọ̀ tún yege rẹ̀ ó kéré tán ní gbogbo oṣù 24. Èkejì, yege àwọn ìdánwò àkọsílẹ̀ ìpínlẹ̀ láti gba ìwé-àṣẹ akẹ́kọ̀ọ́ awakọ̀ ìṣòwò (CLP). Òfin ìjọba àpapọ̀ sọ pé ẹni tí ó ní CLP gbọdọ̀ jẹ́ ọmọ ọdún 18 ó kéré tán, ó sì gbọdọ̀ dúró ó kéré tán ọjọ́ 14 kí ó tó ṣe ìdánwò ọgbọ́n ìwakọ̀. Nígbà tí o bá ń kọ́ṣẹ́ lójú ọ̀nà gbogbo ènìyàn, ẹni tí ó ní CDL ti kíláàsì tó tọ́ gbọdọ̀ jókòó sí ẹ̀gbẹ́ rẹ.",
            "Láti February 7, 2022, ọ̀pọ̀ àwọn tí ń gba CDL Kíláàsì A tàbí B àkọ́kọ́, tàbí àṣẹ P, S tàbí H àkọ́kọ́, gbọdọ̀ parí ìdánilẹ́kọ̀ọ́ fún awakọ̀ tuntun (ELDT) lọ́dọ̀ olùkọ́ tí orúkọ rẹ̀ wà lórí Training Provider Registry ti FMCSA kí wọ́n tó ṣe ìdánwò. Lẹ́yìn náà, o máa ṣe ìdánwò ọgbọ́n ìwakọ̀ ti ìpínlẹ̀: àyẹ̀wò ṣáájú ìrìn-àjò, ìṣàkóso ọkọ̀ ìpìlẹ̀, àti ìwakọ̀ lójú ọ̀nà.",
            "Ọjọ́ orí: láti wakọ̀ kọjá ààlà ìpínlẹ̀, o gbọdọ̀ jẹ́ ọmọ ọdún 21 ó kéré tán. Àwọn ìpínlẹ̀ kan gba àwọn awakọ̀ ọmọ ọdún 18 sí 20 láàyè láti wakọ̀ nínú ìpínlẹ̀ nìkan. Ṣàyẹ̀wò àwọn òfin ìpínlẹ̀ rẹ."
          ],
          steps: ["Àyẹ̀wò ìlera lọ́dọ̀ dókítà olùyẹ̀wò tí a fọwọ́ sí.", "Ka ìwé ìtọ́sọ́nà CDL ìpínlẹ̀, kí o sì yege àwọn ìdánwò àkọsílẹ̀.", "Gba ìwé-àṣẹ akẹ́kọ̀ọ́ awakọ̀ ìṣòwò (CLP) rẹ.", "Parí ìdánilẹ́kọ̀ọ́ fún awakọ̀ tuntun lọ́dọ̀ olùkọ́ tí a forúkọ rẹ̀ sílẹ̀, tí ó bá kàn ọ́.", "Kọ́ṣẹ́ pẹ̀lú ẹni tí ó ní CDL tó tọ́ ní ẹ̀gbẹ́ rẹ; dúró ó kéré tán ọjọ́ 14.", "Ṣe ìdánwò ọgbọ́n ìwakọ̀: àyẹ̀wò ṣáájú ìrìn-àjò, ìṣàkóso ìpìlẹ̀, ìwakọ̀ lójú ọ̀nà."],
          words: [["FMCSA", "Federal Motor Carrier Safety Administration, àjọ ìjọba US tí ó ń ṣe òfin fún ọkọ̀ akẹ́rù àti bọ́ọ̀sì."], ["CLP", "commercial learner's permit: ìwé-àṣẹ akẹ́kọ̀ọ́ tí ó jẹ́ kí o kọ́ṣẹ́ wíwa ọkọ̀ ìṣòwò pẹ̀lú ẹni tí ó ní CDL tó tọ́ ní ẹ̀gbẹ́ rẹ."], ["ELDT", "entry-level driver training: ìdánilẹ́kọ̀ọ́ ìjọba àpapọ̀ tí ọ̀pọ̀ awakọ̀ CDL tuntun gbọdọ̀ parí kí wọ́n tó ṣe ìdánwò."], ["Training Provider Registry", "àkọsílẹ̀ ti FMCSA tí ó ní àwọn ilé-ẹ̀kọ́ àti agbanisíṣẹ́ tí a gbà láàyè láti fúnni ní ELDT."], ["Dókítà olùyẹ̀wò", "òṣìṣẹ́ ìlera tí a fọwọ́ sí láti ṣe DOT physical fún awakọ̀ ìṣòwò (medical examiner)."]],
          slides: [
            { title: "Ta ló ń ṣe kí ni", bullets: ["FMCSA: àwọn òfin ìjọba àpapọ̀", "Ìpínlẹ̀ rẹ: àwọn ìdánwò, owó àti fọ́ọ̀mù", "Olùkọ́ tí a forúkọ rẹ̀ sílẹ̀: ìdánilẹ́kọ̀ọ́ tí ó pọndandan"] },
            { title: "Àwọn ìgbésẹ̀ ní ìtòlẹ́sẹẹsẹ", bullets: ["Àyẹ̀wò ìlera, lẹ́yìn náà ìdánwò àkọsílẹ̀, lẹ́yìn náà CLP", "Ìdánilẹ́kọ̀ọ́ fún awakọ̀ tuntun tí ó bá kàn ọ́", "Dúró ó kéré tán ọjọ́ 14, lẹ́yìn náà ìdánwò ọgbọ́n ìwakọ̀"] },
            { title: "Àwọn òfin tí o gbọdọ̀ rántí", bullets: ["CLP: ó kéré tán ọmọ ọdún 18, ẹni tí ó ní CDL ní ẹ̀gbẹ́ rẹ", "Kọjá ààlà ìpínlẹ̀: ó kéré tán ọmọ ọdún 21", "Olùkọ́ gbọdọ̀ wà lórí registry ti FMCSA"] }
          ],
          sources: [CFR_CLP, CFR_ELDT, TPR, CFR_AGE, CFR_MED, CFR_SKILLS],
          tryIt: "Wá ojú-ìwé CDL ti ìpínlẹ̀ rẹ (wá orúkọ ìpínlẹ̀ rẹ pẹ̀lú \"CDL\", kí o sì ṣí ojú-òpó .gov). Kọ ìgbésẹ̀ mẹ́fà náà ní ìtòlẹ́sẹẹsẹ, àti lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, ohun tí ìpínlẹ̀ rẹ sọ nípa rẹ̀: àwọn fọ́ọ̀mù, ibi tí o máa lọ àti owó tí ó kọ sílẹ̀.",
          youCanNow: "to àwọn ìgbésẹ̀ láti àyẹ̀wò ìlera dé ìdánwò ọgbọ́n ìwakọ̀ ní ìtòlẹ́sẹẹsẹ, kí o sì sọ ẹni tí ó ń bójútó ọ̀kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O2", q: "O ṣẹ̀ṣẹ̀ gba CLP rẹ. Ìgbà wo ni o lè ṣe ìdánwò ọgbọ́n ìwakọ̀ gẹ́gẹ́ bí òfin ìjọba àpapọ̀?", options: ["Ní ọjọ́ kan náà", "Ní ọjọ́ kejì", "Lẹ́yìn oṣù 6", "Lẹ́yìn ọjọ́ 14 ó kéré tán"], answer: 3, why: "Òfin ìjọba àpapọ̀ sọ pé ẹni tí ó ní CLP gbọdọ̀ dúró ó kéré tán ọjọ́ 14 kí ó tó ṣe ìdánwò ọgbọ́n ìwakọ̀." },
            { objective: "O2", q: "Níbo ni o ti lè rí ilé-ẹ̀kọ́ tí ó lè fúnni ní ìdánilẹ́kọ̀ọ́ fún awakọ̀ tuntun tí ó pọndandan?", options: ["Ìpolówó èyíkéyìí lórí ìkànnì àjọlò (social media)", "Training Provider Registry ti FMCSA", "Ọ̀rẹ́ kan tí ń wa ọkọ̀ akẹ́rù", "Ilé ìtajà mọ́tò"], answer: 1, why: "Àwọn olùkọ́ tí ó wà lórí Training Provider Registry ti FMCSA nìkan ló lè fúnni ní ìdánilẹ́kọ̀ọ́ tí ó pọndandan." }
          ]
        },
        {
          title: "Kíkẹ́kọ̀ọ́ fún àwọn ìdánwò àkọsílẹ̀",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ṣètò ọ̀nà ìkẹ́kọ̀ọ́ pẹ̀lú ìwé ìtọ́sọ́nà CDL ti ìpínlẹ̀ rẹ, kí o sì ṣe ìbéèrè àṣeṣe kan.",
          text: [
            "Gbogbo ìpínlẹ̀ ní ìwé ìtọ́sọ́nà CDL ọ̀fẹ́ lórí ojú-òpó wẹ́ẹ̀bù ìwé-àṣẹ ìwakọ̀ rẹ̀. Inú rẹ̀ ni àwọn ìdánwò àkọsílẹ̀ ti wá, nítorí náà òun ni ìwé ìkẹ́kọ̀ọ́ tó dára jù tí o lè ní.",
            "Ọ̀pọ̀ awakọ̀ tuntun ń ṣe General Knowledge (ìmọ̀ gbogbogbò). Ọ̀pọ̀ tún ń ṣe Air Brakes (bíréèkì afẹ́fẹ́; ọ̀pọ̀ ọkọ̀ akẹ́rù ńlá ló ń lo bíréèkì afẹ́fẹ́) àti Combination Vehicles (ọkọ̀ àsopọ̀, fún Kíláàsì A). Àṣẹ àfikún kọ̀ọ̀kan ní ìdánwò tirẹ̀. Ìwé ìtọ́sọ́nà ìpínlẹ̀ rẹ sọ apá tí ó lọ pẹ̀lú ìdánwò kọ̀ọ̀kan.",
            "Ka apá kan lẹ́ẹ̀kan. Kà á, pa ìwé náà dé, kí o sì kọ nǹkan mẹ́ta tí o kọ́. Lẹ́yìn náà, lo àwọn ìbéèrè àṣeṣe inú ìwé ìtọ́sọ́nà tàbí lórí ojú-òpó ìpínlẹ̀ rẹ. Gbìyànjú láti gba ó kéré tán 8 nínú 10 tọ̀nà kí o tó forúkọ sílẹ̀ fún ìdánwò gidi.",
            "Ṣọ́ra fún àwọn app àti ojú-òpó tí o ń sanwó fún, tí wọ́n ṣèlérí \"àwọn ìbéèrè ìdánwò gidi\". Àṣeṣe ọ̀fẹ́ láti ìpínlẹ̀ rẹ tó fún ọ̀pọ̀ ènìyàn."
          ],
          steps: ["Gba ìwé ìtọ́sọ́nà CDL ti ìpínlẹ̀ rẹ sílẹ̀ láti ojú-òpó .gov ti ìjọba.", "Sàmì sí àwọn apá tí o nílò: General Knowledge pẹ̀lú àwọn tí ó jẹ mọ́ kíláàsì àti àṣẹ àfikún rẹ.", "Ṣètò apá kan fún ìjókòó ìkẹ́kọ̀ọ́ kọ̀ọ̀kan, ìṣẹ́jú 20 sí 30.", "Lẹ́yìn apá kọ̀ọ̀kan, kọ nǹkan mẹ́ta tí o kọ́ láìwo ìwé.", "Ṣe ìbéèrè àṣeṣe títí o fi máa gba ó kéré tán 8 nínú 10 tọ̀nà."],
          words: [["Ìdánwò àkọsílẹ̀", "ìdánwò tí a kọ (lórí kọ̀mpútà ní ọ̀pọ̀ ìgbà) tí o gbọdọ̀ yege láti gba CLP rẹ (knowledge test)."], ["Bíréèkì afẹ́fẹ́", "bíréèkì tí afẹ́fẹ́ tí a fún pọ̀ ń ṣiṣẹ́, tí ọ̀pọ̀ ọkọ̀ akẹ́rù wíwúwo àti bọ́ọ̀sì ń lò (air brakes)."], ["Ìwé ìtọ́sọ́nà CDL", "ìwé ìkẹ́kọ̀ọ́ ti ìjọba ìpínlẹ̀ rẹ fún àwọn ìdánwò CDL (CDL manual)."]],
          slides: [
            { title: "Ìwé ìkẹ́kọ̀ọ́ rẹ jẹ́ ọ̀fẹ́", bullets: ["Gbogbo ìpínlẹ̀ ní ìwé ìtọ́sọ́nà CDL lórí ojú-òpó .gov rẹ̀", "Inú rẹ̀ ni àwọn ìdánwò àkọsílẹ̀ ti wá"] },
            { title: "Àwọn ìdánwò wo?", bullets: ["General Knowledge fún gbogbo ènìyàn", "Air Brakes àti Combination Vehicles fún ọ̀pọ̀ Kíláàsì A", "Ìdánwò kan fún àṣẹ àfikún kọ̀ọ̀kan"] },
            { title: "Bí o ṣe lè kẹ́kọ̀ọ́", bullets: ["Apá kan ní ìjókòó kọ̀ọ̀kan", "Pa ìwé dé, kí o sì kọ nǹkan mẹ́ta tí o kọ́", "Ṣe àṣeṣe títí o fi gba 8 nínú 10"] }
          ],
          sources: [FMCSA_CDL],
          tryIt: "Gba ìwé ìtọ́sọ́nà CDL ti ìpínlẹ̀ rẹ sílẹ̀. Ka apá àkọ́kọ́ ti General Knowledge tí ó sọ̀rọ̀ nípa àyẹ̀wò ọkọ̀. Pa á dé, kí o sì kọ nǹkan mẹ́ta tí o rántí. Lẹ́yìn náà, kọ ìbéèrè àṣeṣe márùn-ún tìrẹ pẹ̀lú ìdáhùn, kí o sì pààrọ̀ wọn pẹ̀lú ẹnìkan tí ẹ jọ ń kẹ́kọ̀ọ́, tàbí kí o fi ìwé ìtọ́sọ́nà ṣàyẹ̀wò wọn.",
          youCanNow: "rí ìwé ìtọ́sọ́nà CDL ti ìpínlẹ̀ rẹ, yan àwọn apá tí o nílò, kí o sì kà wọ́n ní ìjókòó kúkúrú títí o fi gba 8 nínú 10.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìwé ìkẹ́kọ̀ọ́ ọ̀fẹ́ tó dára jù fún àwọn ìdánwò àkọsílẹ̀ CDL rẹ?", options: ["App tí o ń sanwó fún tí ó ní \"ìdáhùn ìdánwò gidi\"", "Fídíò láti ọ̀dọ̀ àjèjì lórí ayélujára", "Ìwé ìtọ́sọ́nà CDL ti ìjọba ìpínlẹ̀ rẹ", "Ìwé ìtọ́sọ́nà awakọ̀ mọ́tò lásán"], answer: 2, why: "Àwọn ìdánwò àkọsílẹ̀ wá láti inú ìwé ìtọ́sọ́nà CDL ti ìjọba ìpínlẹ̀ rẹ." },
            { objective: "O3", q: "O fẹ́ Kíláàsì A fún tractor-trailer tí ó ní bíréèkì afẹ́fẹ́. Àwọn ìdánwò wo ni o sábà máa ń nílò?", options: ["School Bus nìkan", "Passenger nìkan", "Hazardous Materials nìkan", "General Knowledge, Air Brakes àti Combination Vehicles"], answer: 3, why: "Ọ̀pọ̀ awakọ̀ tractor-trailer Kíláàsì A ń ṣe General Knowledge, Air Brakes àti Combination Vehicles." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ọ̀nà CDL",
        questions: [
          { objective: "O1", q: "Iṣẹ́ kan ni wíwa dump truck kan ṣoṣo tí ìwọ̀n rẹ̀ jẹ́ 33,000 pọ́n-ùn. Kíláàsì wo ni ó sábà máa ń jẹ́?", options: ["Kíláàsì B", "Kíláàsì A", "Kíláàsì C", "Ìwé-àṣẹ mọ́tò lásán"], answer: 0, why: "Ọkọ̀ wíwúwo kan tí ìwọ̀n rẹ̀ jẹ́ 26,001 pọ́n-ùn tàbí jù bẹ́ẹ̀ lọ jẹ́ Kíláàsì B." },
          { objective: "O1", q: "Àṣẹ àfikún wo ni ó jẹ́ kí o fa tirela méjì tàbí mẹ́ta?", options: ["P", "S", "T", "N"], answer: 2, why: "T ni àṣẹ àfikún fún tirela méjì àti mẹ́ta." },
          { objective: "O2", q: "Ìgbésẹ̀ wo ni ó sábà máa ń kọ́kọ́ wá lórí ọ̀nà CDL?", options: ["Ìdánwò ọgbọ́n ìwakọ̀ lójú ọ̀nà", "Àyẹ̀wò ìlera àti àwọn ìdánwò àkọsílẹ̀ fún CLP", "Rírà ọkọ̀ akẹ́rù", "Gbígba àṣẹ àfikún H"], answer: 1, why: "O máa yege àyẹ̀wò ìlera àti àwọn ìdánwò àkọsílẹ̀ láti gba CLP kí o tó kọ́ṣẹ́ kí o sì ṣe ìdánwò lójú ọ̀nà." },
          { objective: "O2", q: "Nígbà tí o ń kọ́ṣẹ́ pẹ̀lú CLP lójú ọ̀nà gbogbo ènìyàn, ta ló gbọdọ̀ wà pẹ̀lú rẹ?", options: ["Kò sí ẹnìkan", "Ọ̀rẹ́ èyíkéyìí tí ó ní ìwé-àṣẹ mọ́tò", "Ẹnìkan nínú ẹbí rẹ", "Ẹni tí ó ní CDL ti kíláàsì tó tọ́, ní ẹ̀gbẹ́ rẹ"], answer: 3, why: "Ẹni tí ó ní CDL tó tọ́ fún ọkọ̀ náà gbọdọ̀ jókòó sí ẹ̀gbẹ́ rẹ kí ó sì máa bójútó ọ." },
          { objective: "O3", q: "O gba 5 nínú 10 nínú ìbéèrè àṣeṣe fún Air Brakes. Kí ni o yẹ kí o ṣe?", options: ["Forúkọ sílẹ̀ fún ìdánwò gidi lónìí", "Fo Air Brakes", "Sanwó fún app tí ó ní ìdáhùn ìdánwò", "Tún apá yẹn kà, kí o sì ṣe àṣeṣe títí o fi dé 8 nínú 10"], answer: 3, why: "Ṣe àṣeṣe títí o fi máa ṣe dáadáa kí o tó forúkọ sílẹ̀ fún ìdánwò gidi." }
        ]
      }
    },
    {
      name: "Orí 2: Ọgbọ́n ìwakọ̀ àti ètò rẹ",
      lessons: [
        {
          title: "Àyẹ̀wò ọkọ̀ ṣáájú ìrìn-àjò",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dárúkọ apá kọ̀ọ̀kan nínú àyẹ̀wò ṣáájú ìrìn-àjò àti ohun tí o ń yẹ̀wò níbẹ̀.",
          text: [
            "Ìdánwò ọgbọ́n ìwakọ̀ ń bẹ̀rẹ̀ pẹ̀lú àyẹ̀wò ṣáájú ìrìn-àjò (pre-trip inspection). O máa rìn yí ọkọ̀ náà ká, tọ́ka sí apá kọ̀ọ̀kan, kí o sì sọ sókè ohun tí o ń yẹ̀wò. Òfin ìjọba àpapọ̀ tún sọ pé gbogbo awakọ̀ gbọdọ̀ rí i dájú pé ọkọ̀ kò léwu kí ó tó wà á, nítorí náà èyí jẹ́ ìwà tí o máa ní ní gbogbo ìgbà iṣẹ́ rẹ.",
            "Máa tẹ̀lé ìtòlẹ́sẹẹsẹ kan náà nígbà gbogbo, kí o má baà fo apá kankan. Ìtòlẹ́sẹẹsẹ tí ó wọ́pọ̀ ni: ibi ẹ́ńjìnnì, inú ọkọ̀ (cab) àti títan ẹ́ńjìnnì, ìdarí (steering), ìrọ̀ ọkọ̀ (suspension), bíréèkì, àgbá àti táyà, ẹ̀gbẹ́ àti ẹ̀yìn ọkọ̀ pẹ̀lú àwọn iná, àti ibi ìsopọ̀ lórí ọkọ̀ àsopọ̀. Lórí ọkọ̀ tí ó ní bíréèkì afẹ́fẹ́, o tún máa yẹ àwọn mítà àti ìkìlọ̀ bíréèkì afẹ́fẹ́ wò.",
            "Fún apá kọ̀ọ̀kan, sọ ohun tí ó mú kí ó wà láìléwu: \"A dè é mọ́lẹ̀ dáadáa, kò fọ́, kò tẹ̀, kò sì ń jò.\" Ìwé ìtọ́sọ́nà ìpínlẹ̀ rẹ ní àkọsílẹ̀ kíkún fún irú ọkọ̀ rẹ. Olùkọ́ rẹ máa fi hàn ọ́ lórí ọkọ̀ akẹ́rù gidi.",
            "Tí o bá rí àbùkù kan, ọkọ̀ náà kò ní lọ títí a ó fi tún un ṣe. Ròyìn rẹ̀, kí o sì kọ ọ́ sílẹ̀."
          ],
          steps: ["Lo àkọsílẹ̀ àyẹ̀wò láti inú ìwé ìtọ́sọ́nà ìpínlẹ̀ rẹ fún irú ọkọ̀ rẹ.", "Bẹ̀rẹ̀ láti ibi ẹ́ńjìnnì, lẹ́yìn náà inú ọkọ̀, lẹ́yìn náà rìn yí ọkọ̀ akẹ́rù náà ká ní ìtòlẹ́sẹẹsẹ kan náà nígbà gbogbo.", "Tọ́ka sí apá kọ̀ọ̀kan kí o sì sọ ohun tí o ń yẹ̀wò: a dè é mọ́lẹ̀, kò bàjẹ́, kò ń jò.", "Yẹ àwọn iná, àwọn ohun tí ń tan ìmọ́lẹ̀ padà (reflectors) àti táyà wò ní gbogbo ẹ̀gbẹ́.", "Kọ àbùkù èyíkéyìí sílẹ̀ kí o sì ròyìn rẹ̀; má ṣe wakọ̀ títí a ó fi tún un ṣe."],
          words: [["Àyẹ̀wò ṣáájú ìrìn-àjò", "àyẹ̀wò ààbò tí awakọ̀ ń ṣe lórí ọkọ̀ kí ó tó wà á (pre-trip inspection)."], ["Àbùkù", "apá tí ó ti bàjẹ́, gbó tàbí sọnù tí ó mú kí ọkọ̀ léwu (defect)."], ["Ìsopọ̀", "àwọn apá tí ó so ọkọ̀ akẹ́rù mọ́ tirela, bí fifth wheel àti kingpin (coupling)."], ["Fifth wheel", "àwo pẹlẹbẹ, rìbìtì lórí ọkọ̀ akẹ́rù tí tirela ń tì mọ́."]],
          slides: [
            { title: "Ìdí tí àyẹ̀wò ṣáájú ìrìn-àjò fi ṣe pàtàkì", bullets: ["Ìdánwò ọgbọ́n ìwakọ̀ ń bẹ̀rẹ̀ pẹ̀lú rẹ̀", "Òfin sọ pé kí o yẹ̀ ẹ́ wò kí o tó wakọ̀", "Àbùkù túmọ̀ sí pé o kò ní wakọ̀"] },
            { title: "Ìtòlẹ́sẹẹsẹ kan náà nígbà gbogbo", bullets: ["Ibi ẹ́ńjìnnì, lẹ́yìn náà inú ọkọ̀ àti títan ẹ́ńjìnnì", "Ìdarí, ìrọ̀ ọkọ̀, bíréèkì, àgbá", "Ẹ̀gbẹ́, ẹ̀yìn, iná, ìsopọ̀"] },
            { title: "Sọ ohun tí o ń yẹ̀wò", bullets: ["A dè é mọ́lẹ̀ dáadáa", "Kò fọ́, kò tẹ̀, kò sì gbó", "Kò ń jò"] }
          ],
          sources: [CFR_SKILLS, CFR_INSPECT],
          tryIt: "Ní lílo apá àyẹ̀wò nínú ìwé ìtọ́sọ́nà CDL ìpínlẹ̀ rẹ, kọ àkọsílẹ̀ àyẹ̀wò ṣáájú ìrìn-àjò fún ọkọ̀ tí o fẹ́ fi ṣe ìdánwò. Lẹ́yìn náà, ṣe àṣeṣe sísọ ọ́ sókè lórí mọ́tò, àwòrán ọkọ̀ akẹ́rù, tàbí ọkọ̀ akẹ́rù ìṣeré: tọ́ka sí apá kọ̀ọ̀kan kí o sì sọ ohun tí o ń yẹ̀wò.",
          youCanNow: "ṣe àyẹ̀wò ṣáájú ìrìn-àjò ní ìtòlẹ́sẹẹsẹ, kí o sì sọ ohun tí o ń yẹ̀wò lára apá kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O4", q: "Kí ló dé tí o fi ń ṣe àyẹ̀wò ní ìtòlẹ́sẹẹsẹ kan náà nígbà gbogbo?", options: ["Kí o má baà fo apá kankan", "Nítorí fífo àwọn apá kan yára jù", "Nítorí olùdánwò ló ń yan ìtòlẹ́sẹẹsẹ", "Kò jẹ́ nǹkan kan"], answer: 0, why: "Ìtòlẹ́sẹẹsẹ tí kò yí padà túmọ̀ sí pé kò sí apá tí a máa gbàgbé." },
            { objective: "O4", q: "Nígbà àyẹ̀wò ṣáájú ìrìn-àjò, o rí pé páìpù bíréèkì kan ti fọ́. Kí ni o máa ṣe?", options: ["Wakọ̀ díẹ̀díẹ̀ dé ibi ìdúró tó kàn", "Fi téèpù dì í kí o sì máa lọ", "Ròyìn rẹ̀, kọ ọ́ sílẹ̀, má sì ṣe wakọ̀ títí a ó fi tún un ṣe", "Má ṣe kà á sí tí bíréèkì bá ṣì ń ṣiṣẹ́"], answer: 2, why: "Àbùkù ààbò túmọ̀ sí pé ọkọ̀ náà kò ní lọ títí a ó fi tún un ṣe." }
          ]
        },
        {
          title: "Ìṣàkóso ìpìlẹ̀ àti ìwà ìwakọ̀ tí kò léwu",
          objectives: ["O5"],
          minutes: 5,
          goal: "Yan ìgbésẹ̀ tí kò léwu nínú àwọn ipò ìwakọ̀ ọkọ̀ akẹ́rù tí ó wọ́pọ̀.",
          text: [
            "Lẹ́yìn àyẹ̀wò ṣáájú ìrìn-àjò, ìdánwò ọgbọ́n ìwakọ̀ ń yẹ ìṣàkóso ọkọ̀ ìpìlẹ̀ wò (lílọ síwájú àti sẹ́yìn, wíwa sẹ́yìn ní ìlà tààrà àti yí kọ̀ọ̀rọ̀ ká, àti yíyí ọ̀nà padà) àti ìwakọ̀ lójú ọ̀nà.",
            "Àwọn olùdánwò ń wá ìwà tí kò léwu. Fi àyè ààbò ńlá sílẹ̀: ọkọ̀ akẹ́rù nílò àyè tí ó pọ̀ ju ti mọ́tò lọ gan-an láti dúró. Dín iyára kù fún òjò, yìnyín, kọ̀ọ̀rọ̀, ibi iṣẹ́ ọ̀nà àti ọkọ̀ tí ó pọ̀, kódà ní ìsàlẹ̀ iyára tí òfin gbà láàyè. Wo ọ̀nà jìnnà síwájú, kí o sì máa wo dígí rẹ lóòrèkóòrè. Yí sí ọ̀tún ní fífẹ̀ pẹ̀lú ìṣọ́ra kí tirela má baà kọlu ẹ̀gbẹ́ ọ̀nà (curb) tàbí mọ́tò.",
            "Wa sẹ́yìn díẹ̀ bí ó ti ṣeé ṣe tó. Tí o kò bá dá ohun tí ó wà lẹ́yìn rẹ lójú, bọ́ sílẹ̀ kí o sì wò ó. Ọ̀pọ̀ awakọ̀ ń rántí G.O.A.L.: Get Out And Look (bọ́ sílẹ̀ kí o sì wò).",
            "O tún gbọdọ̀ wà ní ipò tí ó yẹ láti wakọ̀. Àwọn òfin wákàtí iṣẹ́ (hours of service) ti ìjọba àpapọ̀ ń dín àkókò tí o lè fi wakọ̀ àti ṣiṣẹ́ kù kí o tó sinmi, a sì ń yẹ àwọn awakọ̀ wò fún oògùn olóró àti ọtí. Má ṣe wakọ̀ láéláé nígbà tí ó rẹ̀ ọ́, tí ara rẹ kò yá, tàbí tí ọtí tàbí oògùn ń pa ọ́."
          ],
          steps: ["Fi àlàfo ńlá sílẹ̀ níwájú rẹ; fi kún un ní ojú ọjọ́ búburú.", "Ṣètò iyára rẹ gẹ́gẹ́ bí ọ̀nà, ojú ọjọ́ àti ẹrù ṣe rí, kì í ṣe gẹ́gẹ́ bí àmì ọ̀nà nìkan.", "Wo dígí rẹ ní ìṣẹ́jú-àáyá díẹ̀ díẹ̀ àti kí o tó yí ọ̀nà padà nígbà gbogbo.", "Kí o tó wa sẹ́yìn: Get Out And Look (bọ́ sílẹ̀ kí o sì wò), lẹ́yìn náà wa sẹ́yìn díẹ̀díẹ̀.", "Dúró kí o sì sinmi nígbà tí ó bá rẹ̀ ọ́; tẹ̀lé àwọn òfin wákàtí iṣẹ́."],
          words: [["Àyè ààbò", "àyè òfìfo tí o fi sílẹ̀ yí ọkọ̀ rẹ ká kí o lè ní àyè láti dúró tàbí yà (space cushion)."], ["Off-tracking", "nígbà tí àgbá ẹ̀yìn ọkọ̀ gígùn bá gba ọ̀nà tí ó kúrú ju ti àgbá iwájú lọ nígbà tí ó ń yí ọ̀nà padà."], ["Òfin wákàtí iṣẹ́", "òfin FMCSA nípa iye àkókò tí awakọ̀ lè fi wakọ̀ àti ṣiṣẹ́ kí ó tó sinmi (hours of service)."]],
          slides: [
            { title: "Ohun tí ìdánwò ọgbọ́n ìwakọ̀ ń yẹ̀wò", bullets: ["Àyẹ̀wò ṣáájú ìrìn-àjò", "Ìṣàkóso ìpìlẹ̀: wíwa sẹ́yìn, yíyí ọ̀nà padà, dídúró", "Ìwakọ̀ lójú ọ̀nà"] },
            { title: "Àyè àti iyára", bullets: ["Ọkọ̀ akẹ́rù nílò àyè tí ó pọ̀ jù gan-an láti dúró", "Dín iyára kù fún ojú ọjọ́, kọ̀ọ̀rọ̀ àti ibi iṣẹ́ ọ̀nà", "Wo jìnnà síwájú; máa wo dígí lóòrèkóòrè"] },
            { title: "Wíwa sẹ́yìn: G.O.A.L.", bullets: ["Get Out And Look (bọ́ sílẹ̀ kí o sì wò)", "Wa sẹ́yìn díẹ̀díẹ̀, díẹ̀ bí ó ti ṣeé ṣe tó"] },
            { title: "Wà ní ipò tí ó yẹ láti wakọ̀", bullets: ["Tẹ̀lé àwọn òfin wákàtí iṣẹ́", "Má ṣe wakọ̀ láéláé tí ó bá rẹ̀ ọ́, tí ara rẹ kò yá, tàbí tí ọtí ń pa ọ́"] }
          ],
          sources: [CFR_SKILLS, FMCSA_HOS],
          tryIt: "Kọ ipò márùn-ún sílẹ̀ láti apá ìwakọ̀ tí kò léwu nínú ìwé ìtọ́sọ́nà ìpínlẹ̀ rẹ (fún àpẹẹrẹ òjò ní alẹ́, ibi iṣẹ́ ọ̀nà, wíwa sẹ́yìn wọ ibi ìkẹ́rù). Fún ọ̀kọ̀ọ̀kan, kọ ìgbésẹ̀ tí kò léwu ní gbólóhùn kan. Ní kí ẹnìkan tí ẹ jọ ń kẹ́kọ̀ọ́ bi ọ́ ní ìbéèrè lórí wọn.",
          youCanNow: "yan ìgbésẹ̀ tí kò léwu nípa àyè, iyára, wíwa sẹ́yìn àti wíwà ní ipò tí ó yẹ láti wakọ̀.",
          quickCheck: [
            { objective: "O5", q: "O ń wa sẹ́yìn wọ ibi ìkẹ́rù (loading dock), o kò sì rí igun kan. Kí ni o máa ṣe?", options: ["Wa sẹ́yìn kíákíá kí o lè parí", "Bọ́ sílẹ̀ kí o sì wò kí o tó máa wa sẹ́yìn lọ", "Tẹ fèrè kí o sì máa lọ", "Lo rédíò nìkan"], answer: 1, why: "G.O.A.L.: Get Out And Look (bọ́ sílẹ̀ kí o sì wò) nígbà tí o kò bá dá ohun tí ó wà lẹ́yìn rẹ lójú." },
            { objective: "O5", q: "Òjò ńlá bẹ̀rẹ̀ sí rọ̀ lójú ọ̀nà márosẹ̀. Kí ni ìpinnu tí kò léwu?", options: ["Máa lọ ní iyára àti àlàfo kan náà", "Súnmọ́ mọ́tò iwájú sí i láti rí iná rẹ̀", "Yára sí i láti jáde kúrò nínú òjò", "Dín iyára kù kí o sì fi àlàfo tí ó pọ̀ sí i sílẹ̀"], answer: 3, why: "Ọ̀nà tí ó tutù túmọ̀ sí pé ó máa pẹ́ kí o tó dúró, nítorí náà dín iyára kù kí o sì fi àyè sílẹ̀ sí i." }
          ]
        },
        {
          title: "Yíyan ìdánilẹ́kọ̀ọ́ àti ṣíṣe ètò CDL rẹ",
          objectives: ["O2", "O3"],
          minutes: 5,
          goal: "Kọ ètò CDL tí ó ní ọjọ́, pẹ̀lú àwọn olùkọ́ tí a forúkọ wọn sílẹ̀ tí o lè kàn sí.",
          text: [
            "Kí o tó sanwó tàbí forúkọ sílẹ̀ fún ìdánilẹ́kọ̀ọ́ èyíkéyìí, ṣàyẹ̀wò pé ilé-ẹ̀kọ́ tàbí agbanisíṣẹ́ náà wà lórí Training Provider Registry ti FMCSA. O lè wá inú registry náà gẹ́gẹ́ bí ibi tí o wà.",
            "Àwọn ilé-iṣẹ́ ọkọ̀ akẹ́rù kan máa ń sanwó ìdánilẹ́kọ̀ọ́ tí o bá gbà láti wakọ̀ fún wọn fún àkókò kan. Ka àdéhùn náà dáadáa: kí ló máa ṣẹlẹ̀ tí o bá kúrò ní kùtùkùtù? Ṣé o máa san owó ìdánilẹ́kọ̀ọ́ náà padà? Béèrè kí o tó fọwọ́ sí i.",
            "Àwọn ológun tẹ́lẹ̀: tí o bá ti wa ọkọ̀ ológun wíwúwo, béèrè lọ́wọ́ ìpínlẹ̀ rẹ nípa ìyọ̀ǹda ìdánwò ọgbọ́n ìwakọ̀ fún ológun; FMCSA gba àwọn ìpínlẹ̀ láàyè láti fún àwọn ọmọ ológun àti ológun tẹ́lẹ̀ tí wọ́n tóótun ní èyí. Tí o bá ní àkọsílẹ̀ ẹ̀ṣẹ̀, pe ọ́fíìsì ìwé-àṣẹ ìpínlẹ̀ kí o sì béèrè lọ́wọ́ àwọn agbanisíṣẹ́ nípa òfin ìgbanisíṣẹ́ wọn ní kùtùkùtù; àṣẹ àfikún fún ohun eléwu tún nílò àyẹ̀wò ààbò.",
            "Báyìí, sọ ọ́ di ètò. Ètò tí ó ní ọjọ́ ṣeé ṣe láti ṣẹlẹ̀ ju ìfẹ́-ọkàn lásán lọ gan-an."
          ],
          steps: ["Kọ iṣẹ́ tí o fẹ́ àti kíláàsì àti àṣẹ àfikún tí ó nílò.", "Wá inú Training Provider Registry kí o sì kọ olùkọ́ mẹ́ta nítòsí rẹ sílẹ̀.", "Pè wọ́n tàbí lọ sọ́dọ̀ wọn; béèrè nípa àkókò, iye owó lápapọ̀, àdéhùn àti ìrànlọ́wọ́ láti rí iṣẹ́.", "Fi ọjọ́ àfojúsùn sí ẹ̀gbẹ́ gbogbo ìgbésẹ̀, láti àyẹ̀wò ìlera dé ìdánwò ọgbọ́n ìwakọ̀.", "Ṣètò àwọn apá ìwé ìtọ́sọ́nà tí o máa kà ní ọ̀sẹ̀ kọ̀ọ̀kan."],
          words: [["Àdéhùn ìdánilẹ́kọ̀ọ́", "àdéhùn pé ilé-iṣẹ́ kan máa sanwó ìdánilẹ́kọ̀ọ́ rẹ tí o bá ṣiṣẹ́ fún wọn fún àkókò kan (training contract)."], ["Ìyọ̀ǹda ìdánwò ọgbọ́n ìwakọ̀", "àǹfààní tí àwọn ìpínlẹ̀ kan ń fúnni láti fo ìdánwò ọgbọ́n ìwakọ̀ CDL fún àwọn awakọ̀ ológun tí wọ́n tóótun (skills test waiver)."]],
          slides: [
            { title: "Ṣàyẹ̀wò kí o tó sanwó", bullets: ["Ṣé olùkọ́ náà wà lórí Training Provider Registry ti FMCSA?", "Wá inú registry náà gẹ́gẹ́ bí ibi tí o wà"] },
            { title: "Ìdánilẹ́kọ̀ọ́ tí ilé-iṣẹ́ ń sanwó fún", bullets: ["Ka àdéhùn náà", "Tí o bá kúrò ní kùtùkùtù ńkọ́? Ṣé o máa san án padà?"] },
            { title: "Béèrè ní kùtùkùtù", bullets: ["Àwọn ológun tẹ́lẹ̀: béèrè nípa ìyọ̀ǹda ìdánwò ọgbọ́n ìwakọ̀ fún ológun", "Pẹ̀lú àkọsílẹ̀ ẹ̀ṣẹ̀: béèrè lọ́wọ́ ìpínlẹ̀ àti agbanisíṣẹ́ ní kùtùkùtù"] },
            { title: "Ṣètò pẹ̀lú ọjọ́", bullets: ["Gbogbo ìgbésẹ̀ ní ọjọ́ àfojúsùn", "Àwọn apá ìkẹ́kọ̀ọ́ ní ọ̀sẹ̀ kọ̀ọ̀kan", "Olùkọ́ mẹ́ta láti pè"] }
          ],
          sources: [TPR, CFR_MIL, CFR_ELDT, BLS_TRUCK],
          tryIt: "Wá olùkọ́ mẹ́ta nítòsí rẹ lórí Training Provider Registry. Kọ orúkọ wọn, bí o ṣe lè kàn sí wọn, àti ìbéèrè mẹ́ta tí o máa bi ọ̀kọ̀ọ̀kan. Lẹ́yìn náà, fi ọjọ́ àfojúsùn sí ẹ̀gbẹ́ ìgbésẹ̀ kọ̀ọ̀kan lórí ọ̀nà CDL rẹ.",
          youCanNow: "ṣàyẹ̀wò pé a ti forúkọ olùkọ́ kan sílẹ̀, kí o sì kọ ètò CDL tí ó ní ọjọ́ fún gbogbo ìgbésẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Ilé-ẹ̀kọ́ kan sọ pé òun ń fúnni ní ìdánilẹ́kọ̀ọ́ CDL, ṣùgbọ́n kò sí lórí Training Provider Registry. Kí ni o yẹ kí o ṣe?", options: ["Forúkọ sílẹ̀ kíákíá kí owó tó gòkè", "San owó ní ọwọ́ kí ó lè dín kù", "Yan olùkọ́ tí ó wà lórí registry", "Ní kí ọ̀rẹ́ kan bá ọ ṣàyẹ̀wò rẹ̀ nígbà míì"], answer: 2, why: "Ìdánilẹ́kọ̀ọ́ tí ó ka fún ọ̀pọ̀ awakọ̀ tuntun gbọdọ̀ wá láti ọ̀dọ̀ olùkọ́ tí ó wà lórí registry ti FMCSA." },
            { objective: "O3", q: "Ètò wo ni ó ṣeé ṣe jù láti ṣiṣẹ́?", options: ["\"Màá gba CDL mi lọ́jọ́ kan.\"", "\"Àyẹ̀wò ìlera ní May 3, ìdánwò àkọsílẹ̀ ní May 24, apá kan nínú ìwé ìtọ́sọ́nà ní ọ̀sẹ̀ kọ̀ọ̀kan.\"", "\"Màá kẹ́kọ̀ọ́ nígbà tí mo bá ní àkókò.\"", "\"Màá ṣe ìdánwò náà kí n sì wo ohun tí yóò ṣẹlẹ̀.\""], answer: 1, why: "Ètò tí ó ní ọjọ́ àti ìgbésẹ̀ ìkẹ́kọ̀ọ́ ọ̀sẹ̀ kọ̀ọ̀kan ń sọ àfojúsùn di iṣẹ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ọgbọ́n ìwakọ̀ àti ètò rẹ",
        questions: [
          { objective: "O4", q: "Kí ni ìdánwò ọgbọ́n ìwakọ̀ CDL ń bẹ̀rẹ̀ pẹ̀lú?", options: ["Àyẹ̀wò ṣáájú ìrìn-àjò", "Ìwakọ̀ lójú ọ̀nà", "Wíwa sẹ́yìn yí kọ̀ọ̀rọ̀ ká", "Àròkọ tí a kọ"], answer: 0, why: "Ìdánwò ọgbọ́n ìwakọ̀ ń bẹ̀rẹ̀ pẹ̀lú àyẹ̀wò ṣáájú ìrìn-àjò." },
          { objective: "O4", q: "Nígbà àyẹ̀wò ṣáájú ìrìn-àjò, kí ni o máa sọ nípa apá kọ̀ọ̀kan?", options: ["Orúkọ rẹ̀ nìkan", "Iye owó rẹ̀", "Ohun tí o ń yẹ̀wò: a dè é mọ́lẹ̀ dáadáa, kò bàjẹ́, kò ń jò", "Kò sí nǹkan; o kàn ń wò ó ni"], answer: 2, why: "O máa tọ́ka sí apá kọ̀ọ̀kan kí o sì sọ ohun tí ó mú kí ó wà láìléwu." },
          { objective: "O5", q: "Kí ló dé tí ọkọ̀ akẹ́rù fi ń fi àlàfo tí ó tóbi ju ti mọ́tò lọ sílẹ̀?", options: ["Láti dín epo kù nìkan", "Wọ́n nílò àyè tí ó pọ̀ jù gan-an láti dúró", "Ìwà lásán ni", "Kí àwọn awakọ̀ míì lè kọjá"], answer: 1, why: "Ọkọ̀ wíwúwo máa ń pẹ́ gan-an kí ó tó dúró, nítorí náà wọ́n nílò àyè ààbò tí ó tóbi jù." },
          { objective: "O5", q: "Oorun ń kùn ọ́ gidigidi lẹ́yìn wákàtí méjì tí o ti ń wakọ̀. Kí ni ìgbésẹ̀ tí kò léwu?", options: ["Ṣí fèrèsé kí o sì máa lọ", "Mu kọfí sí i kí o sì yára sí i", "Gbé ohùn rédíò sókè", "Dúró sí ibi tí kò léwu kí o sì sinmi"], answer: 3, why: "Má ṣe wakọ̀ láéláé tí ó bá rẹ̀ ọ́; dúró sí ibi tí kò léwu kí o sì sinmi, kí o sì tẹ̀lé àwọn òfin wákàtí iṣẹ́." },
          { objective: "O2", q: "Ilé-iṣẹ́ kan fẹ́ fún ọ ní ìdánilẹ́kọ̀ọ́ CDL ọ̀fẹ́ tí o bá wakọ̀ fún wọn fún ọdún kan. Kí ni o máa kọ́kọ́ ṣe?", options: ["Ka àdéhùn náà kí o sì béèrè ohun tí yóò ṣẹlẹ̀ tí o bá kúrò ní kùtùkùtù", "Fọwọ́ sí i lẹ́sẹ̀kẹsẹ̀", "Sọ fún wọn pé o máa pinnu lẹ́yìn ìdánilẹ́kọ̀ọ́", "Má ṣe ka àdéhùn náà sí"], answer: 0, why: "Ìdánilẹ́kọ̀ọ́ tí ilé-iṣẹ́ ń sanwó fún sábà máa ń ní òfin sísan padà, nítorí náà kà á kí o sì béèrè kí o tó fọwọ́ sí i." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìmúrasílẹ̀ fún Ìwé-àṣẹ Awakọ̀ Ìṣòwò (CDL)",
    questions: [
      { objective: "O1", q: "Iṣẹ́ wíwa bọ́ọ̀sì ìlú tí ń gbé èrò 40. Kíláàsì àti àṣẹ àfikún wo ló ṣeé ṣe jù?", options: ["Kíláàsì C pẹ̀lú T", "Kíláàsì A pẹ̀lú H", "Kíláàsì B pẹ̀lú P", "Kò nílò CDL"], answer: 2, why: "Bọ́ọ̀sì wíwúwo kan sábà máa ń jẹ́ Kíláàsì B, gbígbé èrò sì nílò àṣẹ àfikún P." },
      { objective: "O1", q: "Kí ni àṣẹ àfikún H gbà ọ́ láàyè láti ṣe?", options: ["Gbígbé ohun eléwu", "Wíwa bọ́ọ̀sì ilé-ìwé", "Fífa tirela méjì", "Wíwa ọkọ̀ onítáǹkì nìkan"], answer: 0, why: "H ni àṣẹ àfikún fún ohun eléwu; ó tún nílò àyẹ̀wò ìtàn ẹni fún ààbò." },
      { objective: "O1", q: "Ọkọ̀ wo ni ó sábà máa ń jẹ́ Kíláàsì A?", options: ["Ọkọ̀ èrò 15 (van)", "Box truck kan ṣoṣo tí ìwọ̀n rẹ̀ jẹ́ 30,000 pọ́n-ùn", "Ọkọ̀ pickup", "Ọkọ̀ akẹ́rù tí ń fa tirela tí ìwọ̀n rẹ̀ ju 10,000 pọ́n-ùn lọ"], answer: 3, why: "Ọkọ̀ àsopọ̀ tí ìwọ̀n rẹ̀ jẹ́ 26,001 pọ́n-ùn tàbí jù bẹ́ẹ̀ lọ, pẹ̀lú tirela tí ìwọ̀n rẹ̀ ju 10,000 pọ́n-ùn lọ, jẹ́ Kíláàsì A." },
      { objective: "O1", q: "O fẹ́ gbé epo nínú ọkọ̀ onítáǹkì tí ń gbé ohun eléwu tí ó ní àmì ìkìlọ̀. Àṣẹ àfikún wo ló bo méjèèjì?", options: ["S", "X", "P", "T"], answer: 1, why: "X so àṣẹ ọkọ̀ onítáǹkì àti ti ohun eléwu pọ̀." },
      { objective: "O2", q: "Ta ló ń ṣe òfin ìjọba àpapọ̀ fún àwọn awakọ̀ ìṣòwò?", options: ["FMCSA", "IRS", "OSHA", "Ilé-ẹ̀kọ́ ìdánilẹ́kọ̀ọ́ rẹ"], answer: 0, why: "FMCSA, Federal Motor Carrier Safety Administration, ló ń ṣe òfin ìjọba àpapọ̀." },
      { objective: "O2", q: "Ta ló ń ṣe ìdánwò àkọsílẹ̀ àti ìdánwò ọgbọ́n ìwakọ̀ CDL?", options: ["FMCSA ní Washington, D.C.", "Ilé-iṣẹ́ ọkọ̀ akẹ́rù èyíkéyìí", "Ilé-ẹjọ́ ìjọba àpapọ̀", "Ọ́fíìsì ìwé-àṣẹ ìwakọ̀ ti ìpínlẹ̀ rẹ tàbí àwọn olùdánwò tí ó fọwọ́ sí"], answer: 3, why: "Ìpínlẹ̀ ló ń ṣe àwọn ìdánwò, tí ó sì ń pinnu owó àti fọ́ọ̀mù." },
      { objective: "O2", q: "Gẹ́gẹ́ bí òfin ìjọba àpapọ̀, ọjọ́ orí wo ló kéré jù láti wa ọkọ̀ ìṣòwò kọjá ààlà ìpínlẹ̀?", options: ["16", "18", "21", "25"], answer: 2, why: "Awakọ̀ gbọdọ̀ jẹ́ ọmọ ọdún 21 ó kéré tán láti wa ọkọ̀ ìṣòwò kọjá ààlà ìpínlẹ̀." },
      { objective: "O2", q: "Ìtòlẹ́sẹẹsẹ wo ló tọ́?", options: ["Ìdánwò ọgbọ́n ìwakọ̀, lẹ́yìn náà CLP, lẹ́yìn náà àyẹ̀wò ìlera", "Àyẹ̀wò ìlera àti ìdánwò àkọsílẹ̀, CLP, ìdánilẹ́kọ̀ọ́, lẹ́yìn náà ìdánwò ọgbọ́n ìwakọ̀", "Ìdánilẹ́kọ̀ọ́, ìdánwò ọgbọ́n ìwakọ̀, lẹ́yìn náà ìdánwò àkọsílẹ̀", "CLP, ìdánwò ọgbọ́n ìwakọ̀ ní ọjọ́ kan náà, lẹ́yìn náà ìdánilẹ́kọ̀ọ́"], answer: 1, why: "Àyẹ̀wò ìlera àti ìdánwò àkọsílẹ̀ ló ń yọrí sí CLP; ìdánilẹ́kọ̀ọ́ àti ìdúró ọjọ́ 14 ń wá ṣáájú ìdánwò ọgbọ́n ìwakọ̀." },
      { objective: "O2", q: "Ìgbà mélòó ni ọ̀pọ̀ awakọ̀ gbọdọ̀ tún yege àyẹ̀wò ìlera DOT?", options: ["Ó kéré tán ní gbogbo oṣù 24", "Ẹ̀ẹ̀kan ṣoṣo ní ayé wọn", "Ní gbogbo ọdún 10", "Kò sí mọ́ lẹ́yìn ọmọ ọdún 30"], answer: 0, why: "Ọ̀pọ̀ awakọ̀ gbọdọ̀ tún ṣe àyẹ̀wò kí a sì fọwọ́ sí wọn ó kéré tán ní gbogbo oṣù 24; àwọn kan nílò rẹ̀ lóòrèkóòrè jù bẹ́ẹ̀ lọ." },
      { objective: "O3", q: "Níbo ni àwọn ìbéèrè ìdánwò àkọsílẹ̀ CDL ti wá?", options: ["Àwọn àpilẹ̀kọ ìròyìn", "Ìwé ìtọ́sọ́nà CDL ti ìpínlẹ̀ rẹ", "Ìkànnì àjọlò (social media)", "Rédíò ọkọ̀ akẹ́rù"], answer: 1, why: "Àwọn ìdánwò àkọsílẹ̀ dá lórí ìwé ìtọ́sọ́nà CDL ti ìjọba ìpínlẹ̀." },
      { objective: "O3", q: "Kí ni ọ̀nà ìkẹ́kọ̀ọ́ tó dára fún àwọn ìdánwò àkọsílẹ̀?", options: ["Ka gbogbo ìwé ìtọ́sọ́nà ní alẹ́ ọjọ́ tí ó ṣáájú ìdánwò", "Wo fídíò nìkan", "Há ìdáhùn sórí láti app tí o sanwó fún", "Apá kan nínú ìwé ìtọ́sọ́nà ní ìjókòó kọ̀ọ̀kan, lẹ́yìn náà kọ nǹkan mẹ́ta tí o kọ́ kí o sì ṣe ìbéèrè àṣeṣe"], answer: 3, why: "Ìjókòó kúkúrú, kíkọ ohun tí o rántí sílẹ̀ àti ìbéèrè àṣeṣe ń ràn ọ́ lọ́wọ́ láti rántí." },
      { objective: "O3", q: "Ìgbà wo ni o ti ṣetán láti forúkọ sílẹ̀ fún ìdánwò àkọsílẹ̀?", options: ["Nígbà tí o bá ti ka ojú-ìwé àkọ́lé", "Nígbà tí o bá ń gba ó kéré tán 8 nínú 10 nínú ìbéèrè àṣeṣe", "Nígbà tí ọ̀rẹ́ kan bá sọ pé o ti ṣetán", "Ní kété tí o bá gba ìwé ìtọ́sọ́nà"], answer: 1, why: "Ṣíṣe dáadáa nínú ìbéèrè àṣeṣe jẹ́ àmì tó dára pé o ti ṣetán." },
      { objective: "O4", q: "Kí ni àyẹ̀wò ṣáájú ìrìn-àjò?", options: ["Àyẹ̀wò ààbò ọkọ̀ kí o tó wà á", "Ìdánwò ojú rẹ", "Wíwo ojú ọjọ́", "Yíyẹ owó oṣù rẹ wò"], answer: 0, why: "Ó jẹ́ àyẹ̀wò tí awakọ̀ ń ṣe láti rí i dájú pé ọkọ̀ kò léwu kí ó tó wà á." },
      { objective: "O4", q: "Èwo ni ọ̀nà tó dára láti ṣàlàyé apá kan nínú àyẹ̀wò ṣáájú ìrìn-àjò rẹ?", options: ["\"Táyà nìyẹn.\"", "\"Ó dà bí ẹni pé ó dára, mo rò bẹ́ẹ̀.\"", "\"A dè é mọ́lẹ̀ dáadáa, kò fọ́, kò tẹ̀, kò sì ń jò.\"", "\"Màá yẹ̀ ẹ́ wò nígbà míì.\""], answer: 2, why: "O máa dárúkọ apá náà kí o sì sọ ní pàtó ohun tí ó mú kí ó wà láìléwu." },
      { objective: "O4", q: "Lórí tractor-trailer, apá wo ló so ọkọ̀ akẹ́rù mọ́ tirela?", options: ["Àwọn dígí", "Ibi ìsopọ̀, bí fifth wheel", "Táǹkì epo", "Rédíò"], answer: 1, why: "Ibi ìsopọ̀, pẹ̀lú fifth wheel àti kingpin, ló di tirela mọ́ ọkọ̀ akẹ́rù." },
      { objective: "O5", q: "Kí ni G.O.A.L. dúró fún nígbà tí a bá ń wa sẹ́yìn?", options: ["Go On And Leave", "Get Over All Lanes", "Gas Off At Lights", "Get Out And Look"], answer: 3, why: "Get Out And Look (bọ́ sílẹ̀ kí o sì wò): yẹ ohun tí ó wà lẹ́yìn rẹ wò kí o tó wa sẹ́yìn." },
      { objective: "O5", q: "O ń wakọ̀ kọjá ibi iṣẹ́ ọ̀nà. Kí ni o máa ṣe?", options: ["Dín iyára kù kí o sì fi àyè tí ó pọ̀ sí i sílẹ̀", "Máa lọ ní iyára ọ̀nà márosẹ̀", "Máa yí ìlà ọ̀nà padà lóòrèkóòrè", "Súnmọ́ mọ́tò iwájú pẹ́kípẹ́kí"], answer: 0, why: "Ibi iṣẹ́ ọ̀nà ní òṣìṣẹ́, ìlà ọ̀nà tóóró àti ìdúró òjijì, nítorí náà dín iyára kù kí o sì fi àyè sílẹ̀." },
      { objective: "O5", q: "Kí ni àwọn òfin wákàtí iṣẹ́ ń ṣe?", options: ["Wọ́n ń pinnu owó oṣù rẹ", "Wọ́n ń dín àkókò tí o lè fi wakọ̀ àti ṣiṣẹ́ kù kí o tó sinmi", "Wọ́n ń sọ ọ̀nà tí o máa gbà fún ọ", "Wọ́n ń pinnu ọjọ́ ìdánwò rẹ"], answer: 1, why: "Àwọn òfin wákàtí iṣẹ́ ń dín àkókò ìwakọ̀ àti iṣẹ́ kù kí ó má baà rẹ àwọn awakọ̀ jù." },
      { objective: "O5", q: "O ń yí sí ọ̀tún nínú ọkọ̀ akẹ́rù gígùn. Kí ni ewu rẹ̀?", options: ["Tirela lè gé igun náà kí ó sì kọlu ẹ̀gbẹ́ ọ̀nà tàbí mọ́tò", "Ẹ́ńjìnnì máa kú", "Àwọn dígí máa ká", "Kò sí ewu"], answer: 0, why: "Off-tracking túmọ̀ sí pé àgbá ẹ̀yìn ń gba ọ̀nà tí ó kúrú, nítorí náà tirela lè kọlu ohun tí ó wà nínú igun náà." },
      { objective: "O4", q: "O rí iná kan tí kò ṣiṣẹ́ nígbà àyẹ̀wò ṣáájú ìrìn-àjò. Kí ni o máa ṣe?", options: ["Wakọ̀ ní alẹ́ bákan náà", "Má ṣe kà á sí tí ó bá jẹ́ ọ̀sán", "Ròyìn rẹ̀ kí o sì jẹ́ kí a tún un ṣe kí o tó wakọ̀", "Fi téèpù bò ó"], answer: 2, why: "A máa ń ròyìn àbùkù kí a sì tún un ṣe kí ọkọ̀ tó lọ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 5, 7, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún ètò rẹ yẹ̀wò.",
    criteria: [
      { name: "Ìwé-àṣẹ tó tọ́", objective: "O1", notYet: "Kíláàsì tàbí àwọn àṣẹ àfikún kò bá iṣẹ́ náà mu, tàbí wọn kò sí.", meets: "Kíláàsì àti gbogbo àṣẹ àfikún bá iṣẹ́ àfojúsùn àti ìpolówó iṣẹ́ gidi kan mu.", exceeds: "Ó tún sọ iṣẹ́ kejì tí ìwé-àṣẹ kan náà máa ṣí sílẹ̀, tàbí àṣẹ àfikún tí ó máa fi kún un nígbà míì." },
      { name: "Àwọn ìgbésẹ̀ ní ìtòlẹ́sẹẹsẹ", objective: "O2", notYet: "Àwọn ìgbésẹ̀ kan kò sí tàbí wọn kò sí ní ìtòlẹ́sẹẹsẹ, tàbí òfin ìdánilẹ́kọ̀ọ́ tàbí ìdúró ọjọ́ 14 kò sí nínú rẹ̀.", meets: "Gbogbo ìgbésẹ̀ wà ní ìtòlẹ́sẹẹsẹ pẹ̀lú ọjọ́ àfojúsùn fún ọ̀kọ̀ọ̀kan, pẹ̀lú àyẹ̀wò ìlera, CLP, ìdánilẹ́kọ̀ọ́ àti ìdúró ọjọ́ 14.", exceeds: "Ìgbésẹ̀ kọ̀ọ̀kan tún dárúkọ ọ́fíìsì tàbí ojú-òpó wẹ́ẹ̀bù tí ó ń bójútó rẹ̀." },
      { name: "Ìdánilẹ́kọ̀ọ́ tí a forúkọ rẹ̀ sílẹ̀", objective: "O2", notYet: "Kò sí olùkọ́, tàbí a kò ṣàyẹ̀wò àwọn olùkọ́ lórí registry.", meets: "Olùkọ́ mẹ́ta láti Training Provider Registry pẹ̀lú bí a ṣe lè kàn sí wọn.", exceeds: "Ó ní ìdáhùn sí àwọn ìbéèrè tí ó béèrè: iye owó, àkókò, àwọn ìlànà àdéhùn." },
      { name: "Ètò ìkẹ́kọ̀ọ́", objective: "O3", notYet: "Kò sí ètò ìkẹ́kọ̀ọ́, tàbí kò lo ìwé ìtọ́sọ́nà ìpínlẹ̀.", meets: "Àwọn apá ìwé ìtọ́sọ́nà ìpínlẹ̀ ní ọ̀sẹ̀ kọ̀ọ̀kan fún gbogbo ìdánwò tí ó nílò, pẹ̀lú àfojúsùn máàkì àṣeṣe.", exceeds: "Ó ní àwọn máàkì àṣeṣe tí ó ti gbà tẹ́lẹ̀." },
      { name: "Àkọsílẹ̀ àyẹ̀wò ṣáájú ìrìn-àjò", objective: "O4", notYet: "Àkọsílẹ̀ náà fo àwọn apá pàtàkì tàbí kò sí ní ìtòlẹ́sẹẹsẹ tí kò yí padà.", meets: "Ó bo gbogbo apá pàtàkì ní ìtòlẹ́sẹẹsẹ tí kò yí padà, pẹ̀lú ohun tí a máa yẹ̀wò lára apá kọ̀ọ̀kan.", exceeds: "Akẹ́kọ̀ọ́ lè sọ ọ́ sókè, ní títọ́ka sí àwọn apá, láìka ìwé." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà àti ètò CDL tí ó dé ìpele rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n yege àwọn ìdánwò àkọsílẹ̀ ìpínlẹ̀ tí wọ́n sì gba CLP láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ sílẹ̀ lọ́dọ̀ olùkọ́ tí ó wà lórí Training Provider Registry",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gba CDL tí wọ́n sì bẹ̀rẹ̀ iṣẹ́ ìwakọ̀ (ìròyìn alábàáṣiṣẹ́ àti ìwádìí àtẹ̀lé)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì láti ṣí ìwé ìtọ́sọ́nà CDL ìpínlẹ̀ àti Training Provider Registry ti FMCSA",
      "Ìwé ìtọ́sọ́nà CDL ti ìpínlẹ̀ rẹ (ọ̀fẹ́ lórí ojú-òpó .gov ti ìpínlẹ̀)",
      "Ìwé, gègé àti kàlẹ́ńdà fún ètò náà",
      "Kò pọndandan: àwòrán tàbí àwòkọ́ṣe ọkọ̀ akẹ́rù, tàbí mọ́tò, láti ṣe àṣeṣe ṣíṣàlàyé àyẹ̀wò ṣáájú ìrìn-àjò",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, pẹ̀lú àkókò ìkẹ́kọ̀ọ́ ọ̀sẹ̀ kọ̀ọ̀kan"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́, tẹ àkọsílẹ̀ àyẹ̀wò ti ìpínlẹ̀ jáde, kí àwọn akẹ́kọ̀ọ́ sì ṣe àṣeṣe ṣíṣàlàyé rẹ̀ ní méjì-méjì.",
      "Má ṣe dábàá ilé-ẹ̀kọ́ tàbí ilé-iṣẹ́ kan pàtó; fi bí wọ́n ṣe lè ṣàyẹ̀wò Training Provider Registry kí wọ́n sì ṣe àfiwé hàn àwọn akẹ́kọ̀ọ́.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé òfin, owó àti fọ́ọ̀mù ìpínlẹ̀ yàtọ̀ síra; máa ṣàyẹ̀wò ojú-òpó .gov ti ìpínlẹ̀ nígbà gbogbo.",
      "Fún àwọn ológun tẹ́lẹ̀, tọ́ka sí ojú-ìwé ìyọ̀ǹda ìdánwò ọgbọ́n ìwakọ̀ fún ológun ti ìpínlẹ̀; fún àwọn akẹ́kọ̀ọ́ tí ó ní àkọsílẹ̀ ẹ̀ṣẹ̀, so wọ́n pọ̀ mọ́ olùdámọ̀ràn ìpadàbọ̀ sí àwùjọ tàbí ti iṣẹ́.",
      "Fi rubric ṣe àmì fún ètò ìkẹyìn, kí o sì ran akẹ́kọ̀ọ́ lọ́wọ́ láti tún ìlà \"Kò tíì dé\" kan ṣe lẹ́ẹ̀kan."
    ]
  }
};
