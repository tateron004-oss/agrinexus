"use strict";

// Koach Learn course (Yoruba translation of shared/real-estate-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const SRC = {
  arello: { name: "ARELLO (Association of Real Estate License Law Officials): Àwọn àjọ alákòóso", url: "https://arello.org/resources/regulatory-agencies/" },
  caDre: { name: "California Department of Real Estate: Ohun tí a nílò fún ìwé-àṣẹ salesperson", url: "https://www.dre.ca.gov/Examinees/RequirementsSales.html" },
  txTrec: { name: "Texas Real Estate Commission: Bí o ṣe lè di sales agent", url: "https://www.trec.texas.gov/become-licensed/sales-agent" },
  hudFha: { name: "HUD: Àkópọ̀ Fair Housing Act", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
  cfpbLe: { name: "CFPB: Kí ni Loan Estimate?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-loan-estimate-en-1995/" },
  cfpbCd: { name: "CFPB: Kí ni Closing Disclosure?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-closing-disclosure-en-1983/" },
  cfpbHome: { name: "CFPB: Rírà ilé (Owning a Home)", url: "https://www.consumerfinance.gov/owning-a-home/" }
};

module.exports = {
  id: "real-estate-license-prep-yo",
  lang: "yo",
  translationOf: "real-estate-license-prep",
  category: "Workforce Development",
  name: "Ìmúrasílẹ̀ fún Ìdánwò Ìwé-àṣẹ Real Estate (Ilé àti Ilẹ̀)",
  skills: "Wíwá àwọn ìgbésẹ̀ ìwé-àṣẹ ní ìpínlẹ̀ rẹ, Lílo àwọn ọ̀rọ̀ nípa ilé, ilẹ̀ àti níní-dúkìá, Títẹ̀lé òfin agency àti fair housing, Títẹ̀lé àdéhùn títí dé closing, Yíyanjú ìṣirò ìdánwò real estate, Ṣíṣe ètò ìkẹ́kọ̀ọ́ àti ìdánwò tí ó ní ọjọ́",
  outcome: "wá àwọn ìgbésẹ̀ ìwé-àṣẹ real estate ti ìpínlẹ̀ rẹ lórí ojú-ewé ìjọba, ṣàlàyé àwọn èrò pàtàkì tí ìdánwò ń béèrè (dúkìá, agency, fair housing, àdéhùn àti closing), yanjú ìṣirò tí ó wọ́pọ̀ nínú ìdánwò, kí o sì tẹ̀lé ètò ìkẹ́kọ̀ọ́ àti ìdánwò tí ó ní ọjọ́, tí ìwọ fúnra rẹ ṣe.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbàlagbà tí wọ́n fẹ́ di salesperson real estate tí ó ní ìwé-àṣẹ (àwọn ìpínlẹ̀ kan ń pè é ní sales agent): àwọn tí ń yí iṣẹ́ padà, àwọn tí ń bẹ̀rẹ̀ iṣẹ́ òwò kékeré, àwọn ológun tẹ́lẹ̀ (veterans), àwọn òbí tí ń padà sí iṣẹ́, àti ẹnikẹ́ni tí ó fẹ́ iṣẹ́ tí ó lè dàgbà nínú rẹ̀. Ọ̀pọ̀ agent ń ṣiṣẹ́ fún ara wọn (independent contractor) lábẹ́ broker tí ó ní ìwé-àṣẹ, nítorí náà ó bá àwọn oníṣòwò mu pẹ̀lú.",
    "Ní US, ìpínlẹ̀ kọ̀ọ̀kan ló ń fún àwọn agent real estate ní ìwé-àṣẹ. Àjọ alákòóso ìpínlẹ̀ ló ń pinnu àwọn kíláàsì ṣáájú ìwé-àṣẹ, ìdánwò, àyẹ̀wò ìtàn ẹni (background check) àti owó. Ẹ̀kọ́ yìí ń MÚ Ọ ṢETAN; kò fún ọ ní ìwé-àṣẹ, kò sì rọ́pò àwọn kíláàsì ṣáájú ìwé-àṣẹ tí ìpínlẹ̀ rẹ fọwọ́ sí. Ẹ̀kọ́ kọ̀ọ̀kan ń fi ibi tí o ti lè ṣàyẹ̀wò òfin ìpínlẹ̀ rẹ hàn ọ́.",
    "O máa kọ́ àwọn èrò pàtàkì tí ọ̀pọ̀ ìdánwò ìpínlẹ̀ ń béèrè, o máa ṣe àṣeṣe ìṣirò pẹ̀lú nọ́mbà àhùsọ, o sì máa parí pẹ̀lú ètò ìkẹ́kọ̀ọ́ àti ìdánwò tìrẹ tí ó ní ọjọ́. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ń parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" lórí ìwé tàbí fóònù. Ẹ̀kọ́ yìí ń kọ́ni bí real estate ṣe ń ṣiṣẹ́; kò fúnni ní ìmọ̀ràn nípa rírà dúkìá tàbí ìdókòwò."
  ],
  finalTask: "Ṣe Ètò Ìkẹ́kọ̀ọ́ àti Ìdánwò Ìwé-àṣẹ Real Estate tìrẹ (ojú-ewé kan tàbí méjì): (1) àjọ alákòóso ìpínlẹ̀ rẹ, ojú-ewé ìjọba tí o lò, àti àwọn ìgbésẹ̀ tí ó kọ (ọjọ́ orí, ẹ̀kọ́ ṣáájú ìwé-àṣẹ, ìdánwò, ìka ọwọ́ tàbí background check, broker onígbọ̀wọ́), ọ̀kọ̀ọ̀kan pẹ̀lú ọjọ́ tí o fojú sí; (2) àwọn kókó láti inú àkọsílẹ̀ àwọn kókó ìdánwò ìpínlẹ̀ rẹ, pẹ̀lú àmì sí kókó mẹ́ta tí o kò mọ̀ jù àti ètò fún ọ̀kọ̀ọ̀kan; (3) ìwé òfin ojú-ewé kan lórí ojúṣe agency, kíláàsì méje tí òfin fair housing ìjọba àpapọ̀ ń dáàbò bò, àti àwọn apá àdéhùn tó fẹsẹ̀ múlẹ̀; (4) ìṣirò àṣeṣe márùn-ún (commission, loan-to-value, owó-orí dúkìá, proration, ààyè ilẹ̀) pẹ̀lú iṣẹ́ rẹ ní kíkọ sílẹ̀; (5) ètò ìkẹ́kọ̀ọ́ ọ̀sẹ̀ kọ̀ọ̀kan títí dé ọjọ́ ìdánwò tí o fojú sí.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà ní US tí ń múra sílẹ̀ fún ìwé-àṣẹ salesperson (sales agent) real estate ti ìpínlẹ̀: àwọn tí ń yí iṣẹ́ padà, àwọn oníṣòwò kékeré, àwọn oníṣòwò, àwọn ológun tẹ́lẹ̀, àwọn tí ń padà sí iṣẹ́ àti àwọn ọ̀dọ́ tí ó ju ọmọ ọdún 18 lọ. Àwọn kan parí ilé-ìwé gíga tàbí GED nìkan; àwọn kan ń sọ Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì.",
    startingPoint: "Wọ́n lè ka fọ́ọ̀mù tí ó rọrùn, wọ́n sì lè ṣe ìṣirò ìpìlẹ̀ pẹ̀lú ẹ̀rọ ìṣirò (calculator). Ọ̀pọ̀ kò mọ ẹni tí ń fún àwọn agent ní ìwé-àṣẹ ní ìpínlẹ̀ wọn, ètò àwọn ìgbésẹ̀ ìwé-àṣẹ, tàbí àwọn ọ̀rọ̀ òfin tí ìdánwò ń lò (fee simple, easement, fiduciary, consideration, proration).",
    gap: "Ọ̀pọ̀ ènìyàn ń sanwó fún kíláàsì tàbí ìdánwò láìní ètò, wọ́n ń fo ìgbésẹ̀ kan (bí ìka ọwọ́ tàbí broker onígbọ̀wọ́), tàbí wọ́n ń kùnà ìdánwò nítorí ọ̀rọ̀ àti ìṣirò. Akẹ́kọ̀ọ́ tí ó mọ àwọn ìgbésẹ̀ ìjọba, àwọn èrò pàtàkì àti ìṣirò ìdánwò, tí ó sì ní ètò tí ó ní ọjọ́, ní àǹfààní tí ó pọ̀ jù láti yege kí ó sì bẹ̀rẹ̀ iṣẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú (nǹkan bí kíláàsì 7 sí 8); a ṣàlàyé gbogbo ọ̀rọ̀ òfin",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìkàwé láti ka ojú-ewé ìjọba ìpínlẹ̀; ìwé, gègé àti calculator lásán fún gbogbo iṣẹ́",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá àkókò iṣẹ́ mu",
      "Òfin yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀: wákàtí ẹ̀kọ́, irú ìdánwò, máàkì yíyege àti owó ni a ń ṣàyẹ̀wò lórí ojú-ewé àjọ alákòóso ìpínlẹ̀, a kì í méfò wọn",
      "Ẹ̀kọ́ yìí ń múni ṣetan; kò rọ́pò ẹ̀kọ́ ṣáájú ìwé-àṣẹ tí ìpínlẹ̀ fọwọ́ sí, kò sì fúnni ní ìwé-àṣẹ",
      "Kò sí ìmọ̀ràn ìdókòwò, òfin tàbí owó-orí; ìṣirò ń lo nọ́mbà àhùsọ fún àṣeṣe nìkan"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí ó fẹ́ rántí ìpín-ọgọ́rùn-ún (percentage) lè kọ́kọ́ ṣe \"Ìṣirò Ojoojúmọ́\" (Everyday Math)."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú ojú-òpó wẹ́ẹ̀bù ìjọba àjọ alákòóso real estate ìpínlẹ̀ rẹ", action: "kọ àwọn ìgbésẹ̀ sí ìwé-àṣẹ salesperson sílẹ̀ ní ètò tó tọ́", standard: "láìfo ìgbésẹ̀ kankan, pẹ̀lú orúkọ ojú-ewé ìjọba náà" },
    { id: "O2", condition: "Tí a bá fún ọ ní àpèjúwe kúkúrú nípa dúkìá tàbí ipò níní-dúkìá kan", action: "dá ọ̀rọ̀ real estate tó tọ́ fún un mọ̀", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìṣẹ̀lẹ̀ kan pẹ̀lú oníbàárà tàbí ẹni tí ń wá ilé", action: "yan ìgbésẹ̀ tí ó tẹ̀lé ojúṣe agency àti òfin fair housing", standard: "kí o sì gba ó kéré tán 4 nínú ìṣẹ̀lẹ̀ 5 tọ̀nà, kí o sì dárúkọ òfin náà" },
    { id: "O4", condition: "Tí a bá fún ọ ní àpẹẹrẹ ìfilọ̀ rírà ilé (purchase offer)", action: "ṣàyẹ̀wò pé ó ní àwọn apá àdéhùn tó fẹsẹ̀ múlẹ̀, kí o sì to àwọn ìgbésẹ̀ closing ní ètò", standard: "láìsí apá tí ó kù, pẹ̀lú àkókò ìwé ìfihàn ti ìjọba àpapọ̀ ní títọ́" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìbéèrè ìṣirò bí ti ìdánwò àti calculator", action: "ṣírò commission, loan-to-value, owó-orí dúkìá, proration àti ààyè ilẹ̀", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà pẹ̀lú iṣẹ́ rẹ ní kíkọ sílẹ̀" },
    { id: "O6", condition: "Pẹ̀lú àkọsílẹ̀ àwọn kókó ìdánwò ìpínlẹ̀ rẹ àti kàlẹ́ńdà", action: "kọ ètò ìkẹ́kọ̀ọ́ àti ìdánwò tí ó ní ọjọ́", standard: "tí ó bo gbogbo kókó inú àkọsílẹ̀ náà àti kókó mẹ́ta tí o kò mọ̀ jù" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìwé-àṣẹ àti àwọn èrò pàtàkì",
      lessons: [
        {
          title: "Bí ìwé-àṣẹ real estate ṣe ń ṣiṣẹ́ ní ìpínlẹ̀ rẹ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọ àwọn ìgbésẹ̀ ìpínlẹ̀ rẹ sí ìwé-àṣẹ salesperson sílẹ̀ láti ojú-ewé ìjọba.",
          text: [
            "Kò sí ìwé-àṣẹ real estate ti gbogbo orílẹ̀-èdè ní US. Ìpínlẹ̀ kọ̀ọ̀kan ní àjọ alákòóso tirẹ̀, tí a sábà máa ń pè ní real estate commission tàbí department of real estate. Òun ló ń pinnu àwọn kíláàsì, ìdánwò, background check àti owó. ARELLO, ẹgbẹ́ àwọn òṣìṣẹ́ òfin ìwé-àṣẹ, ní àkọsílẹ̀ àwọn àjọ alákòóso tí o lè lò láti wá tìrẹ.",
            "Àwọn ìgbésẹ̀ jọra ní ọ̀pọ̀ ìpínlẹ̀: dé ọjọ́ orí tí òfin béèrè, parí àwọn kíláàsì ṣáájú ìwé-àṣẹ tí ìpínlẹ̀ fọwọ́ sí, fi ìwé ìbéèrè sílẹ̀, yege background check (ó sábà máa ń jẹ́ ìka ọwọ́), yege ìdánwò, kí o sì ṣiṣẹ́ lábẹ́ broker tí ó ní ìwé-àṣẹ. Ọ̀pọ̀ ìdánwò ní apá ti orílẹ̀-èdè àti apá òfin ìpínlẹ̀.",
            "Àwọn àlàyé kékeré yàtọ̀ gan-an. California béèrè ẹ̀kọ́ mẹ́ta ní ìpele yunifásítì (Real Estate Principles, Real Estate Practice àti ọ̀kan tí o yàn). Texas béèrè wákàtí 180 nínú kíláàsì ní ẹ̀kọ́ mẹ́fà, ìka ọwọ́ pẹ̀lú ọlọ́pàá ìpínlẹ̀, àti ìdánwò tí Pearson ń ṣe. Ìpínlẹ̀ rẹ lè yàtọ̀, nítorí náà máa ka ojú-ewé ìpínlẹ̀ rẹ fúnra rẹ nígbà gbogbo."
          ],
          steps: ["Wá àjọ alákòóso real estate ìpínlẹ̀ rẹ (lo àkọsílẹ̀ ARELLO tàbí wá orúkọ ìpínlẹ̀ rẹ pẹ̀lú \"real estate commission\" kí o sì wá .gov).", "Ṣí ojú-ewé fún ìwé-àṣẹ salesperson tàbí sales agent tuntun.", "Kọ ìgbésẹ̀ kọ̀ọ̀kan ní ètò: ọjọ́ orí, kíláàsì, ìwé ìbéèrè, background check, ìdánwò, broker.", "Kọ àdírẹ́sì ojú-ewé náà àti ọjọ́ tí o ṣàyẹ̀wò rẹ̀ sílẹ̀."],
          words: [["Àjọ alákòóso real estate (regulator)", "ọ́fíìsì ìpínlẹ̀ tí ń fún àwọn agent ní ìwé-àṣẹ tí ó sì ń mú òfin ṣẹ, bí real estate commission."], ["Salesperson (sales agent)", "ìwé-àṣẹ real estate àkọ́kọ́; o ń ṣiṣẹ́ lábẹ́ broker."], ["Broker", "ìwé-àṣẹ tí ó ga jù; broker lè ṣí ọ́fíìsì real estate kí ó sì máa ṣàbójútó àwọn salesperson."], ["Ẹ̀kọ́ ṣáájú ìwé-àṣẹ (pre-license education)", "àwọn kíláàsì tí ìpínlẹ̀ fọwọ́ sí tí o gbọ́dọ̀ parí ṣáájú ìdánwò tàbí ìwé-àṣẹ."], ["Broker onígbọ̀wọ́ (sponsoring broker)", "broker tí ó gbà láti ṣàbójútó rẹ nígbà tí o bá ti gba ìwé-àṣẹ."]],
          slides: [
            { title: "Ìpínlẹ̀ ló ń fúnni ní ìwé-àṣẹ", bullets: ["Kò sí ìwé-àṣẹ real estate ti gbogbo orílẹ̀-èdè", "Àjọ alákòóso ìpínlẹ̀ rẹ ló ń pinnu kíláàsì, ìdánwò àti owó", "ARELLO ní àkọsílẹ̀ àwọn àjọ alákòóso"] },
            { title: "Àwọn ìgbésẹ̀ ní ọ̀pọ̀ ìpínlẹ̀", bullets: ["Òfin ọjọ́ orí àti kíláàsì ṣáájú ìwé-àṣẹ", "Ìwé ìbéèrè àti background check", "Ìdánwò (ó sábà ní apá orílẹ̀-èdè àti ti ìpínlẹ̀)", "Ṣiṣẹ́ lábẹ́ broker tí ó ní ìwé-àṣẹ"] },
            { title: "Ìpínlẹ̀ yàtọ̀ síra: àpẹẹrẹ méjì", bullets: ["California: ẹ̀kọ́ mẹ́ta ní ìpele yunifásítì", "Texas: wákàtí 180 ní ẹ̀kọ́ mẹ́fà, ìdánwò Pearson", "Máa ka ojú-ewé ìpínlẹ̀ rẹ fúnra rẹ nígbà gbogbo"] }
          ],
          sources: [SRC.arello, SRC.caDre, SRC.txTrec],
          tryIt: "Wá àjọ alákòóso real estate ìpínlẹ̀ rẹ. Lórí ìwé, kọ gbogbo ìgbésẹ̀ sí ìwé-àṣẹ salesperson ní ètò, pẹ̀lú àdírẹ́sì ojú-ewé náà àti ọjọ́ òní. Fa àyíká yí ìgbésẹ̀ èyíkéyìí tí o kò mọ̀ tẹ́lẹ̀.",
          youCanNow: "wá àjọ alákòóso real estate ìpínlẹ̀ rẹ, kí o sì kọ àwọn ìgbésẹ̀ sí ìwé-àṣẹ salesperson sílẹ̀ ní ètò.",
          quickCheck: [
            { objective: "O1", q: "Ta ló ń pinnu àwọn kíláàsì àti ìdánwò fún ìwé-àṣẹ salesperson real estate?", options: ["Ìgbìmọ̀ real estate ti gbogbo orílẹ̀-èdè", "Ilé-iṣẹ́ real estate tí o dara pọ̀ mọ́", "Àjọ alákòóso real estate ìpínlẹ̀ rẹ", "Báńkì tí ń yá àwọn olùrà lówó"], answer: 2, why: "Ìpínlẹ̀ kọ̀ọ̀kan ló ń fúnni ní ìwé-àṣẹ real estate, àjọ alákòóso ìpínlẹ̀ ló sì ń pinnu ohun tí a nílò." },
            { objective: "O1", q: "Ojú-òpó wẹ́ẹ̀bù kan tí o rí sọ pé kíláàsì gba wákàtí 60. Kí ni o máa ṣe?", options: ["Ṣàyẹ̀wò iye wákàtí lórí ojú-ewé ìjọba àjọ alákòóso ìpínlẹ̀ rẹ", "Gbà á gbọ́ tí ó bá rí bí iṣẹ́ àwọn akọ́ṣẹ́mọṣẹ́", "San owó kíláàsì tí ó dín jù báyìí", "Béèrè lọ́wọ́ ọ̀rẹ́ kan ní ìpínlẹ̀ míì"], answer: 0, why: "Wákàtí yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀, wọ́n sì ń yí padà, nítorí náà ojú-ewé ìjọba ìpínlẹ̀ rẹ nìkan ló ṣeé gbẹ́kẹ̀ lé." }
          ]
        },
        {
          title: "Àwọn ọ̀rọ̀ nípa dúkìá àti níní-dúkìá tí ìdánwò ń lò",
          objectives: ["O2"],
          minutes: 6,
          goal: "Dá ọ̀rọ̀ tó tọ́ fún ipò dúkìá tàbí níní-dúkìá kan mọ̀.",
          text: [
            "Real property ni ilẹ̀ àti gbogbo ohun tí ó so mọ́ ọn, bí ilé, ọgbà tàbí igi, pẹ̀lú àwọn ẹ̀tọ́ tí ó bá a wá. Personal property jẹ́ ohun tí a lè gbé kiri, bí àga ìjókòó (couch). Fixture jẹ́ personal property tẹ́lẹ̀ ṣùgbọ́n a ti so ó mọ́lẹ̀ báyìí, bí fáànù òrùlé tàbí ẹ̀rọ ìfọṣọ àwo tí a kọ́ mọ́ ilé, nítorí náà ó sábà máa ń bá ilé lọ.",
            "Níní real property túmọ̀ sí níní àkójọ ẹ̀tọ́ (bundle of rights): láti gbà á, lò ó, gbádùn rẹ̀, lé àwọn míì kúrò, kí o sì tà á tàbí fi í sílẹ̀ fún ẹlòmíì. Fee simple ni ọ̀nà níní-dúkìá tí ó pé jù. Nígbà tí ènìyàn méjì tàbí jù bẹ́ẹ̀ lọ bá ní in pọ̀, joint tenancy sábà máa ń ní ẹ̀tọ́ survivorship (ìpín ẹni tí ó kú máa lọ sọ́dọ̀ àwọn olóhun yòókù), ṣùgbọ́n tenancy in common kò ní in.",
            "Deed ni ìwé tí ń gbé níní-dúkìá láti ọwọ́ ẹnìkan sí ẹlòmíì; title ni ẹ̀tọ́ níní-dúkìá fúnra rẹ̀. Àwọn ohun tí ó ń dí dúkìá lọ́wọ́ tàbí tí ó dì í ní ẹrù jẹ́ encumbrance: lien (ẹ̀tọ́ owó lórí dúkìá, bí mortgage tàbí owó-orí tí a kò san) àti easement (ẹ̀tọ́ láti lo ilẹ̀ ẹlòmíì, bí ọ̀nà wáyà iná). Ọ̀nà mẹ́ta pàtàkì la fi ń ṣàpèjúwe ilẹ̀: metes and bounds, ètò ìwọ̀n onígun mẹ́rin ti ìjọba (rectangular survey), àti lot and block láti inú máàpù tí a forúkọ sílẹ̀."
          ],
          words: [["Real property", "ilẹ̀, ohun tí ó so mọ́ ọn, àti àwọn ẹ̀tọ́ níní-dúkìá."], ["Fixture", "ohun tí a so mọ́ dúkìá, nítorí náà a kà á sí apá kan rẹ̀."], ["Fee simple", "ọ̀nà níní-dúkìá tí ó pé jù."], ["Ẹ̀tọ́ survivorship (right of survivorship)", "nígbà tí ọ̀kan nínú àwọn olóhun bá kú, ìpín rẹ̀ máa lọ sọ́dọ̀ àwọn olóhun yòókù."], ["Encumbrance", "ohunkóhun tí ó ń dí dúkìá lọ́wọ́ tàbí dì í ní ẹrù, bí lien tàbí easement."], ["Lien", "ẹ̀tọ́ owó lórí dúkìá tí òfin fọwọ́ sí."], ["Easement", "ẹ̀tọ́ láti lo apá kan ilẹ̀ ẹlòmíì fún ìdí kan pàtó."]],
          slides: [
            { title: "Real property àti personal property", bullets: ["Real: ilẹ̀ àti ohun tí ó so mọ́ ọn", "Personal: àwọn ohun tí a lè gbé kiri", "Fixture: a so ó mọ́lẹ̀, nítorí náà ó sábà máa ń dúró"] },
            { title: "Níní-dúkìá", bullets: ["Àkójọ ẹ̀tọ́: gbà á, lò ó, gbádùn, lé àwọn míì kúrò, tà á", "Fee simple: níní-dúkìá tí ó pé jù", "Joint tenancy ní survivorship; tenancy in common kò ní"] },
            { title: "Title àti àwọn ohun tí ń dí i lọ́wọ́", bullets: ["Deed ń gbé níní-dúkìá; title ni níní-dúkìá", "Lien: ẹ̀tọ́ owó", "Easement: ẹ̀tọ́ láti lo ilẹ̀ ẹlòmíì"] },
            { title: "Ṣíṣàpèjúwe ilẹ̀", bullets: ["Metes and bounds", "Ìwọ̀n onígun mẹ́rin ti ìjọba (rectangular survey)", "Lot and block láti inú máàpù tí a forúkọ sílẹ̀"] }
          ],
          tryIt: "Ṣe káàdì ìrántí 10 lórí ìwé: ọ̀rọ̀ náà ní iwájú, àti ìtumọ̀ rẹ ní ọ̀rọ̀ tìrẹ pẹ̀lú àpẹẹrẹ kan ní ẹ̀yìn (real property, personal property, fixture, fee simple, joint tenancy, tenancy in common, deed, title, lien, easement). Dán ara rẹ wò lẹ́ẹ̀mejì.",
          youCanNow: "dárúkọ ọ̀rọ̀ real estate tó tọ́ fún àwọn ipò dúkìá àti níní-dúkìá tí ó wọ́pọ̀.",
          quickCheck: [
            { objective: "O2", q: "Ilé-iṣẹ́ iná ní ẹ̀tọ́ láti fa wáyà kọjá ẹ̀yìn àgbàlá kan. Èyí jẹ́:", options: ["Fixture", "Fee simple", "Personal property", "Easement"], answer: 3, why: "Easement jẹ́ ẹ̀tọ́ láti lo apá kan ilẹ̀ ẹlòmíì fún ìdí kan pàtó." },
            { objective: "O2", q: "Àbúrò àti ẹ̀gbọ́n obìnrin méjì ní ilé kan. Nígbà tí ọ̀kan bá kú, ìpín rẹ̀ máa lọ sọ́dọ̀ èkejì fúnra rẹ̀. Ó ṣeé ṣe jù pé wọ́n ní title gẹ́gẹ́ bí:", options: ["Tenants in common", "Joint tenants", "Ayálégbé", "Ẹni tí ó ní lien"], answer: 1, why: "Joint tenancy sábà máa ń ní ẹ̀tọ́ survivorship; tenancy in common kò ní in." }
          ]
        },
        {
          title: "Ojúṣe agency àti fair housing",
          objectives: ["O3"],
          minutes: 6,
          goal: "Yan ìgbésẹ̀ tí ó tẹ̀lé ojúṣe agency àti òfin fair housing nínú ìṣẹ̀lẹ̀ kan.",
          text: [
            "Nígbà tí o bá ń ṣojú oníbàárà, ìwọ ni agent wọn, o sì jẹ wọ́n ní ojúṣe fiduciary. Ọ̀pọ̀ ìwé ẹ̀kọ́ ń kọ wọ́n sí OLDCAR: Obedience (ìgbọràn sí àṣẹ tí ó bófin mu), Loyalty (ìdúróṣinṣin), Disclosure (fífi àwọn òtítọ́ pàtàkì hàn), Confidentiality (pípa àṣírí mọ́), Accounting (ìṣirò owó tí o ń mú dání) àti Reasonable care (ìtọ́jú tó yẹ). Òfin ìpínlẹ̀ rẹ ló ń pinnu ojúṣe gangan àti àwọn fọ́ọ̀mù ìfihàn.",
            "Ṣíṣojú olùrà àti olùtà nínú ìdúnàádúrà kan ṣoṣo ni a ń pè ní dual agency. Àwọn ìpínlẹ̀ kan gbà á láàyè kìkì pẹ̀lú ìfọwọ́sí ní kíkọ láti ẹ̀gbẹ́ méjèèjì, àwọn kan sì dín in kù tàbí kà á léèwọ̀. Ṣàyẹ̀wò òfin ìpínlẹ̀ rẹ.",
            "Fair Housing Act ti ìjọba àpapọ̀ sọ pé ó lòdì sí òfin láti ṣe ẹ̀tanú nínú ọ̀rọ̀ ilé nítorí ẹ̀yà (race), àwọ̀ ara, orílẹ̀-èdè tí ẹnìkan ti wá, ẹ̀sìn, ìbálòpọ̀ (sex), ipò ìdílé (bí níní ọmọ) tàbí àìlera (disability). Àwọn ìpínlẹ̀ àti ìlú lè fi àwọn ẹgbẹ́ míì kún un. Àwọn ìwà tí kò bófin mu ni steering (dídarí àwọn ènìyàn sí tàbí kúrò ní àdúgbò kan nítorí protected class), blockbusting (títì àwọn olóhun láti tà nípa kíkìlọ̀ pé ẹgbẹ́ kan ń wọlé bọ̀) àti redlining (kíkọ̀ láti yá owó tàbí ṣe ìbánigbófò ní àwọn àdúgbò kan)."
          ],
          steps: ["Béèrè: ta ni oníbàárà mi, kí sì ni mo jẹ wọ́n?", "Béèrè: ṣé ìbéèrè yìí ń ṣe ẹnìkan lọ́nà ọ̀tọ̀ nítorí protected class?", "Tí ó bá jẹ́ bẹ́ẹ̀, má ṣe é; ṣàlàyé òfin náà pẹ̀lú ọ̀wọ̀.", "Kọ ohun tí ó ṣẹlẹ̀ sílẹ̀ kí o sì sọ fún broker rẹ."],
          words: [["Agent", "ẹni tí a fún ní àṣẹ láti ṣe nǹkan dípò ẹlòmíì (oníbàárà tàbí principal)."], ["Fiduciary", "ẹni tí a gbẹ́kẹ̀ lé, tí ó gbọ́dọ̀ fi ire oníbàárà ṣáájú."], ["Dual agency", "agent kan tàbí ilé-iṣẹ́ brokerage kan tí ń ṣojú olùrà àti olùtà nínú ìdúnàádúrà kan náà."], ["Protected class", "ẹgbẹ́ tí òfin ń dáàbò bò kúrò lọ́wọ́ ẹ̀tanú, bí ẹ̀yà tàbí àìlera."], ["Steering", "dídarí àwọn ènìyàn sí tàbí kúrò ní àdúgbò kan nítorí protected class; kò bófin mu."]],
          slides: [
            { title: "Ojúṣe sí oníbàárà rẹ (OLDCAR)", bullets: ["Obedience, Loyalty, Disclosure", "Confidentiality, Accounting, Reasonable care", "Òfin ìpínlẹ̀ rẹ ló ń pinnu ojúṣe gangan"] },
            { title: "Dual agency", bullets: ["Ṣíṣojú ẹ̀gbẹ́ méjèèjì nínú ìdúnàádúrà kan", "Òfin yàtọ̀: ìfọwọ́sí, ìdínkù tàbí ìkàléèwọ̀", "Ṣàyẹ̀wò ìpínlẹ̀ rẹ"] },
            { title: "Fair Housing Act: kíláàsì 7", bullets: ["Ẹ̀yà, àwọ̀ ara, orílẹ̀-èdè tí a ti wá, ẹ̀sìn", "Ìbálòpọ̀ (sex), ipò ìdílé, àìlera", "Àwọn ìpínlẹ̀ àti ìlú lè fi kún un"] },
            { title: "Àwọn ìwà tí kò bófin mu", bullets: ["Steering", "Blockbusting", "Redlining"] }
          ],
          sources: [SRC.hudFha],
          tryIt: "Kọ ìṣẹ̀lẹ̀ kúkúrú mẹ́ta níbi tí olùtà tàbí olùrà ti ní kí o ṣe ohun tí kò tọ́ (fún àpẹẹrẹ, \"Má ṣe fi ilé mi han àwọn ìdílé tí ó ní ọmọ\"). Fún ọ̀kọ̀ọ̀kan, kọ protected class tí ó kàn, àti gbólóhùn kan tí ó ní ọ̀wọ̀ tí o máa sọ dípò rẹ̀.",
          youCanNow: "lo ojúṣe agency àti òfin fair housing láti yan ìgbésẹ̀ tó tọ́ pẹ̀lú àwọn oníbàárà.",
          quickCheck: [
            { objective: "O3", q: "Olùtà kan sọ pé, \"Fi ilé mi han àwọn tí kò ní ọmọ nìkan.\" Kí ni o máa ṣe?", options: ["Ṣàlàyé pé òfin ń dáàbò bo ipò ìdílé, àti pé o gbọ́dọ̀ fi í han gbogbo ènìyàn", "Gbà, nítorí olùtà ni oníbàárà rẹ", "Fi í hàn ní ọjọ́ iṣẹ́ nìkan", "Béèrè lọ́wọ́ àwọn olùrà iye ọmọ tí wọ́n ní"], answer: 0, why: "Ipò ìdílé jẹ́ protected class lábẹ́ Fair Housing Act, ìgbọràn sì kan àṣẹ tí ó bófin mu nìkan." },
            { objective: "O3", q: "Olùtà rẹ sọ iye owó tí ó kéré jù tí òun máa gbà fún ọ. Olùrà kan béèrè rẹ̀ lọ́wọ́ rẹ. Ojúṣe wo ló kàn?", options: ["Accounting", "Confidentiality", "Disclosure sí olùrà", "Obedience sí olùrà"], answer: 1, why: "Agent máa ń pa àṣírí oníbàárà mọ́, bí iye owó tí ó kéré jù tí wọ́n máa gbà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìwé-àṣẹ àti àwọn èrò pàtàkì",
        questions: [
          { objective: "O1", q: "Èwo ló sábà máa ń jẹ́ ìgbésẹ̀ ÀKỌ́KỌ́ sí ìwé-àṣẹ salesperson?", options: ["Dara pọ̀ mọ́ ọ́fíìsì broker onígbọ̀wọ́", "Ṣe ìdánwò ìpínlẹ̀", "Rí oníbàárà àkọ́kọ́ rẹ", "Ka ohun tí àjọ alákòóso ìpínlẹ̀ rẹ béèrè"], answer: 3, why: "O nílò àkọsílẹ̀ ìgbésẹ̀ ti ìjọba kí o tó sanwó fún kíláàsì tàbí ìdánwò." },
          { objective: "O2", q: "Ẹ̀rọ ìfọṣọ àwo tí a kọ́ mọ́ ilé ìdáná ṣeé ṣe jù kí ó jẹ́:", options: ["Personal property", "Fixture", "Easement", "Lien"], answer: 1, why: "Ohun tí a so mọ́ dúkìá jẹ́ fixture, ó sì sábà máa ń bá ilé lọ." },
          { objective: "O2", q: "Owó-orí dúkìá tí a kò san fún county ní ẹ̀tọ́ lórí ilé náà. Èyí jẹ́:", options: ["Lien", "Deed", "Fee simple", "Joint tenancy"], answer: 0, why: "Lien jẹ́ ẹ̀tọ́ owó lórí dúkìá tí òfin fọwọ́ sí." },
          { objective: "O3", q: "Agent kan sọ fún olùrà pé, \"Ara rẹ máa balẹ̀ jù ní àdúgbò tí àwọn ẹlẹ́sìn rẹ ń gbé.\" Èyí jẹ́:", options: ["Iṣẹ́ oníbàárà tó dára", "Blockbusting", "Steering, tí kò bófin mu", "Redlining"], answer: 2, why: "Dídarí àwọn ènìyàn sí tàbí kúrò ní àdúgbò kan nítorí protected class ni steering." },
          { objective: "O3", q: "Èwo KÌ Í ṢE protected class lábẹ́ Fair Housing Act ti ìjọba àpapọ̀?", options: ["Àìlera", "Orílẹ̀-èdè tí a ti wá", "Ipò ìdílé", "Ẹgbẹ́ eré-ìdárayá tí o fẹ́ràn jù"], answer: 3, why: "Kíláàsì méje ti ìjọba àpapọ̀ ni ẹ̀yà, àwọ̀ ara, orílẹ̀-èdè tí a ti wá, ẹ̀sìn, ìbálòpọ̀, ipò ìdílé àti àìlera." }
        ]
      }
    },
    {
      name: "Orí 2: Àdéhùn, ìṣirò àti ètò ìdánwò rẹ",
      lessons: [
        {
          title: "Àdéhùn àti ọ̀nà sí closing",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò ìfilọ̀ rírà fún àwọn apá àdéhùn tó fẹsẹ̀ múlẹ̀, kí o sì to àwọn ìgbésẹ̀ closing.",
          text: [
            "Àdéhùn tó fẹsẹ̀ múlẹ̀ nílò: àwọn ẹ̀gbẹ́ tí òfin gbà láàyè láti fọwọ́ sí (competent), ìfilọ̀ àti ìtẹ́wọ́gbà (àdéhùn láàárín ẹ̀gbẹ́ méjèèjì), consideration (ohun tí ó níye lórí tí ẹ̀gbẹ́ kọ̀ọ̀kan fúnni), àti ète tí ó bófin mu. Àdéhùn láti rà tàbí ta real estate gbọ́dọ̀ wà ní kíkọ sílẹ̀ kí a tó lè mú un ṣẹ ní ọ̀pọ̀ ìgbà; òfin yìí ni a ń pè ní statute of frauds.",
            "Àdéhùn jẹ́ void tí kò bá fẹsẹ̀ múlẹ̀ rí (fún àpẹẹrẹ, ète tí kò bófin mu). Ó jẹ́ voidable tí ẹ̀gbẹ́ kan bá lè fagi lé e, fún àpẹẹrẹ nígbà tí ọmọdé (minor) fọwọ́ sí i. Ọ̀pọ̀ ìfilọ̀ rírà ní contingency, bí rírí owó-yíyá tàbí àyẹ̀wò ilé tó dára, àti earnest money, owó ìdógò tí ó fi hàn pé olùrà ní ìfẹ́ gidi.",
            "Ọ̀nà tí ó wọ́pọ̀ ni: ìfilọ̀, ìtẹ́wọ́gbà, ṣíṣí escrow tàbí agent closing, àyẹ̀wò ilé, ìdíyelé (appraisal) àti ìfọwọ́sí owó-yíyá, ìrìn àyẹ̀wò ìkẹyìn (final walk-through), àti closing. Òfin ìjọba àpapọ̀ ń dáàbò bo ẹni tí ń yá owó: ẹni tí ń yáni lówó máa fún un ní Loan Estimate láàárín ọjọ́ iṣẹ́ mẹ́ta lẹ́yìn ìwé ìbéèrè owó-yíyá, àti Closing Disclosure ó kéré tán ọjọ́ iṣẹ́ mẹ́ta ṣáájú closing, kí olùrà lè fi wọ́n wéra."
          ],
          steps: ["Ṣàyẹ̀wò pé a dárúkọ àwọn ẹ̀gbẹ́ náà, àti pé wọ́n lè fọwọ́ sí i.", "Ṣàyẹ̀wò pé ìfilọ̀ tí ó yé wà, pẹ̀lú ìtẹ́wọ́gbà tí a fọwọ́ sí.", "Ṣàyẹ̀wò iye owó, earnest money àti ohun tí ẹ̀gbẹ́ kọ̀ọ̀kan ń fúnni (consideration).", "Ṣàyẹ̀wò pé ó wà ní kíkọ sílẹ̀, àti pé ète rẹ̀ bófin mu.", "Kọ àwọn contingency àti àkókò ìparí wọn sílẹ̀.", "To àwọn ìgbésẹ̀ closing ní ètò, pẹ̀lú àkókò Loan Estimate àti Closing Disclosure."],
          words: [["Consideration", "ohun tí ó níye lórí tí ẹ̀gbẹ́ kọ̀ọ̀kan ń fúnni, bí owó tàbí ìlérí."], ["Statute of frauds", "òfin pé àdéhùn real estate gbọ́dọ̀ wà ní kíkọ sílẹ̀ kí a tó lè mú un ṣẹ ní ọ̀pọ̀ ìgbà."], ["Void / voidable", "void: kì í ṣe àdéhùn tó fẹsẹ̀ múlẹ̀ rí; voidable: ó fẹsẹ̀ múlẹ̀, ṣùgbọ́n ẹ̀gbẹ́ kan lè fagi lé e."], ["Contingency", "ipò tí ó gbọ́dọ̀ ṣẹlẹ̀ kí ìdúnàádúrà tó lè tẹ̀síwájú, bí ìfọwọ́sí owó-yíyá."], ["Earnest money", "owó ìdógò tí olùrà ń san láti fi hàn pé òun ní ìfẹ́ gidi."], ["Closing Disclosure", "fọ́ọ̀mù ìkẹyìn ẹni tí ń yáni lówó, tí ó ní àwọn òfin owó-yíyá àti owó closing."]],
          slides: [
            { title: "Àwọn apá àdéhùn tó fẹsẹ̀ múlẹ̀", bullets: ["Àwọn ẹ̀gbẹ́ tí ó lẹ́tọ̀ọ́ (competent)", "Ìfilọ̀ àti ìtẹ́wọ́gbà", "Consideration àti ète tí ó bófin mu", "Ní kíkọ sílẹ̀ fún real estate"] },
            { title: "Void, voidable, contingency", bullets: ["Void: kò fẹsẹ̀ múlẹ̀ rí", "Voidable: ẹ̀gbẹ́ kan lè fagi lé e", "Contingency: ipò kan, bí ìfọwọ́sí owó-yíyá"] },
            { title: "Ọ̀nà sí closing", bullets: ["Ìfilọ̀, ìtẹ́wọ́gbà, escrow", "Àyẹ̀wò ilé, appraisal, ìfọwọ́sí owó-yíyá", "Walk-through, lẹ́yìn náà closing"] },
            { title: "Fọ́ọ̀mù owó-yíyá ti ìjọba àpapọ̀ (CFPB)", bullets: ["Loan Estimate: láàárín ọjọ́ iṣẹ́ 3 lẹ́yìn ìwé ìbéèrè", "Closing Disclosure: ọjọ́ iṣẹ́ 3 tàbí jù bẹ́ẹ̀ lọ ṣáájú closing"] }
          ],
          sources: [SRC.cfpbLe, SRC.cfpbCd, SRC.cfpbHome],
          tryIt: "Kọ ìfilọ̀ rírà àhùsọ kúkúrú kan (orúkọ, àdírẹ́sì, iye owó, earnest money, contingency kan, ìbuwọ́lù). Lẹ́yìn náà ṣàyẹ̀wò rẹ̀ pẹ̀lú ìgbésẹ̀ mẹ́fà òkè yìí kí o sì kọ ohun tí ó kù sílẹ̀. Parí pẹ̀lú àwọn ìgbésẹ̀ closing ní ètò.",
          youCanNow: "ṣàyẹ̀wò ìfilọ̀ rírà fún àwọn apá àdéhùn tó fẹsẹ̀ múlẹ̀, kí o sì to àwọn ìgbésẹ̀ sí closing ní ètò.",
          quickCheck: [
            { objective: "O4", q: "Olùrà àti olùtà fohùn ṣọ̀kan lórí títa ilé kan lórí fóònù nìkan. Lábẹ́ statute of frauds, ìdúnàádúrà náà:", options: ["Ṣeé mú ṣẹ pátápátá", "Ṣeé mú ṣẹ lẹ́yìn ọ̀sẹ̀ kan", "Kò ṣeé mú ṣẹ ní ọ̀pọ̀ ìgbà títí yóò fi wà ní kíkọ sílẹ̀", "Kò bófin mu"], answer: 2, why: "Àdéhùn real estate gbọ́dọ̀ wà ní kíkọ sílẹ̀ kí a tó lè mú un ṣẹ ní ọ̀pọ̀ ìgbà." },
            { objective: "O4", q: "Ìgbà wo ni ẹni tí ń yá owó gbọ́dọ̀ gba Closing Disclosure?", options: ["Ó kéré tán ọjọ́ iṣẹ́ mẹ́ta ṣáájú closing", "Ní ọjọ́ closing", "Láàárín oṣù kan lẹ́yìn closing", "Kí ó tó ṣe ìfilọ̀"], answer: 0, why: "CFPB sọ pé ẹni tí ń yáni lówó máa fúnni ní Closing Disclosure ó kéré tán ọjọ́ iṣẹ́ mẹ́ta ṣáájú closing." }
          ]
        },
        {
          title: "Ìṣirò ìdánwò real estate",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣírò commission, loan-to-value, owó-orí dúkìá, proration àti ààyè ilẹ̀.",
          text: [
            "Fún àṣeṣe nìkan: gbogbo nọ́mbà ibí yìí jẹ́ àhùsọ. Commission: iye owó títà ní ìlọ́po ìwọ̀n (rate). Títà $300,000 ní 6% jẹ́ $18,000. Tí ọ́fíìsì listing bá gba ìdajì, ìyẹn jẹ́ $9,000; tí ìpín (split) agent bá jẹ́ 60%, agent máa gba $5,400.",
            "Loan-to-value (LTV) ni owó-yíyá tí a pín sí iye-owó dúkìá. Owó-yíyá $240,000 lórí ilé $300,000 jẹ́ 0.80, tàbí 80%. Owó-orí dúkìá ni assessed value ní ìlọ́po ìwọ̀n owó-orí: $200,000 ní ìlọ́po 1.5% jẹ́ $3,000 lọ́dún, tàbí $250 lóṣù.",
            "Proration ń pín owó kan nípa ọjọ́. Tí owó-orí ọdún bá jẹ́ $3,650 tí ọdún sì ní ọjọ́ 365, ìyẹn jẹ́ $10 lójúmọ́; tí olùtà bá ní ilé náà fún ọjọ́ 120 tí olùrà sì máa san owó náà lẹ́yìn náà, olùtà jẹ olùrà ní $1,200. Ààyè ilẹ̀ (area): gígùn ní ìlọ́po fífẹ̀. Ilẹ̀ 50 ẹsẹ̀ (feet) ní 120 ẹsẹ̀ jẹ́ 6,000 ẹsẹ̀ onígun mẹ́rin (square feet). Acre kan jẹ́ 43,560 square feet. Ṣàyẹ̀wò bóyá ìdánwò rẹ ń lo ọdún ọjọ́ 360 tàbí ọjọ́ 365."
          ],
          steps: ["Ka ìbéèrè náà kí o sì fa ìlà sí ohun tí ó ń béèrè.", "Kọ fọ́múlà náà (apá = odindi ní ìlọ́po ìwọ̀n).", "Yí ìpín-ọgọ́rùn-ún padà sí decimal (6% = 0.06).", "Ṣe ìgbésẹ̀ kan lẹ́ẹ̀kan lórí ìwé.", "Béèrè: ṣé ìdáhùn náà bọ́gbọ́n mu?"],
          words: [["Commission", "owó tí a ń san fún títa, ó sábà máa ń jẹ́ ìpín-ọgọ́rùn-ún iye owó títà."], ["Split", "bí a ṣe ń pín commission láàárín àwọn ọ́fíìsì, tàbí láàárín broker àti agent."], ["Loan-to-value (LTV)", "iye owó-yíyá tí a pín sí iye-owó dúkìá, ní ìpín-ọgọ́rùn-ún."], ["Assessed value", "iye-owó tí ìjọba ìbílẹ̀ ń lò láti ṣírò owó-orí dúkìá."], ["Proration", "pípín owó kan láàárín olùrà àti olùtà nípa iye ọjọ́ tí ọ̀kọ̀ọ̀kan ní dúkìá náà."]],
          slides: [
            { title: "Commission", bullets: ["Iye owó títà x ìwọ̀n", "$300,000 x 6% = $18,000", "Ìdajì sí ọ́fíìsì listing = $9,000; split 60% = $5,400"] },
            { title: "LTV àti owó-orí dúkìá", bullets: ["LTV = owó-yíyá / iye-owó: $240,000 / $300,000 = 80%", "Owó-orí = assessed value x ìwọ̀n: $200,000 x 1.5% = $3,000"] },
            { title: "Proration àti ààyè ilẹ̀", bullets: ["$3,650 / 365 = $10 lójúmọ́; ọjọ́ 120 = $1,200", "50 ft x 120 ft = 6,000 sq ft", "Acre 1 = 43,560 sq ft"] },
            { title: "Ọ̀nà ìṣe", bullets: ["Fa ìlà sí ìbéèrè náà", "Kọ fọ́múlà, lo decimal", "Ṣàyẹ̀wò pé ìdáhùn bọ́gbọ́n mu"] }
          ],
          tryIt: "Fún àṣeṣe nìkan. Yanjú wọ̀nyí lórí ìwé pẹ̀lú calculator: (1) commission 5% lórí $250,000; (2) LTV owó-yíyá $180,000 lórí ilé $200,000; (3) owó-orí ọdún lórí assessed value $150,000 ní 2%; (4) ìpín olùtà nínú owó-orí ọdún $1,825 fún ọjọ́ 73 (ọdún ọjọ́ 365); (5) square feet nínú ilẹ̀ 80 ẹsẹ̀ ní 100 ẹsẹ̀. Ìdáhùn: $12,500; 90%; $3,000; $365; 8,000.",
          youCanNow: "yanjú ìṣirò tí ó wọ́pọ̀ nínú ìdánwò real estate kí o sì fi iṣẹ́ rẹ hàn.",
          quickCheck: [
            { objective: "O5", q: "Fún àṣeṣe nìkan: kí ni LTV owó-yíyá $270,000 lórí ilé $300,000?", options: ["80%", "85%", "111%", "90%"], answer: 3, why: "$270,000 tí a pín sí $300,000 jẹ́ 0.90, tàbí 90%." },
            { objective: "O5", q: "Fún àṣeṣe nìkan: ilẹ̀ kan jẹ́ 100 ẹsẹ̀ ní 150 ẹsẹ̀. Square feet mélòó ni?", options: ["250", "15,000", "1,500", "43,560"], answer: 1, why: "Ààyè ilẹ̀ ni gígùn ní ìlọ́po fífẹ̀: 100 ní ìlọ́po 150 jẹ́ 15,000 square feet." }
          ]
        },
        {
          title: "Ètò ìkẹ́kọ̀ọ́ àti ìdánwò rẹ",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Kọ ètò ìkẹ́kọ̀ọ́ àti ìdánwò tí ó ní ọjọ́ láti inú àkọsílẹ̀ àwọn kókó ìdánwò ìpínlẹ̀ rẹ.",
          text: [
            "Ìpínlẹ̀ rẹ tàbí ilé-iṣẹ́ ìdánwò rẹ̀ máa ń tẹ ìwé ìtọ́sọ́nà olùdánwò (candidate handbook) jáde. Ó sábà máa ń ní àkọsílẹ̀ àwọn kókó ìdánwò (exam content outline: àwọn kókó àti iye ìbéèrè lórí ọ̀kọ̀ọ̀kan), òfin ọjọ́ ìdánwò, káàdì ìdánimọ̀ (ID) tí o gbọ́dọ̀ mú wá, àti bí o ṣe lè ṣètò àkókò ìdánwò. Gbà á láti ojú-òpó ìjọba, kì í ṣe láti ẹ̀dà tí ẹnìkan fi sórí ayélujára.",
            "Yí àkọsílẹ̀ náà padà sí ètò. Kọ gbogbo kókó sílẹ̀, fún ara rẹ ní máàkì 1 sí 3 lórí ọ̀kọ̀ọ̀kan, kí o sì sàmì sí mẹ́ta tí o kò mọ̀ jù. Fi àwọn ọjọ́ ńlá sórí kàlẹ́ńdà, kí o máa ṣírò sẹ́yìn láti ọjọ́ ìdánwò tí o fojú sí: parí kíláàsì, fi ìwé ìbéèrè sílẹ̀, ṣe ìka ọwọ́, ṣètò ìdánwò. Lẹ́yìn náà ṣètò àkókò ìkẹ́kọ̀ọ́ kúkúrú ní ọ̀sẹ̀ kọ̀ọ̀kan, pẹ̀lú ìbéèrè àṣeṣe àti ìṣirò ní gbogbo ọ̀sẹ̀.",
            "Ìdánwò àṣeṣe máa ń ṣèrànwọ́ jù nígbà tí o bá wo gbogbo ìdáhùn tí o kò gbà tọ̀nà, tí o sì kọ ìdí tí ìdáhùn tó tọ́ fi tọ́. Ṣọ́ra fún ojú-òpó èyíkéyìí tí ó ṣèlérí \"guaranteed pass\" (yíyege dájú) tàbí tí ó ń ta ìbéèrè ìdánwò gidi; jìbìtì tàbí màgòmágó ni, ìpínlẹ̀ sì lè kọ̀ láti fún ọ ní ìwé-àṣẹ nítorí rẹ̀."
          ],
          steps: ["Gba candidate handbook ìpínlẹ̀ rẹ láti ojú-òpó ìjọba.", "Da àwọn kókó inú exam content outline kọ.", "Fún ara rẹ ní máàkì 1 sí 3 lórí kókó kọ̀ọ̀kan; sàmì sí mẹ́ta tí o kò mọ̀ jù.", "Yan ọjọ́ ìdánwò tí o fojú sí kí o sì ṣírò sẹ́yìn sí ìgbésẹ̀ kọ̀ọ̀kan.", "Ṣètò àkókò ìkẹ́kọ̀ọ́ ọ̀sẹ̀ kọ̀ọ̀kan pẹ̀lú ìbéèrè àṣeṣe àti ìṣirò.", "Wo gbogbo ìdáhùn tí o kò gbà tọ̀nà kí o sì kọ ìdí tí ìdáhùn tó tọ́ fi tọ́."],
          words: [["Candidate handbook", "ìwé ìtọ́sọ́nà ìjọba fún ìdánwò: àwọn kókó, òfin, ID àti ṣíṣètò àkókò."], ["Exam content outline", "àkọsílẹ̀ àwọn kókó inú ìdánwò àti bí ọ̀kọ̀ọ̀kan ṣe ṣe pàtàkì tó."], ["Ọjọ́ tí o fojú sí (target date)", "ọjọ́ tí o fẹ́ ṣe ìdánwò; o ń ṣètò sẹ́yìn láti ọjọ́ yẹn."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú handbook ti ìjọba", bullets: ["Exam content outline", "Òfin ọjọ́ ìdánwò àti ID", "Bí o ṣe lè ṣètò àkókò ìdánwò"] },
            { title: "Ṣe ètò náà", bullets: ["Fún kókó kọ̀ọ̀kan ní máàkì 1 sí 3", "Sàmì sí mẹ́ta tí o kò mọ̀ jù", "Ṣírò sẹ́yìn láti ọjọ́ ìdánwò tí o fojú sí"] },
            { title: "Ṣe àṣeṣe pẹ̀lú ọgbọ́n", bullets: ["Ìbéèrè àṣeṣe àti ìṣirò ní ọ̀sẹ̀ kọ̀ọ̀kan", "Wo gbogbo ìdáhùn tí kò tọ̀nà", "Kò sí \"guaranteed pass\" tàbí ìbéèrè tí a jí jáde"] }
          ],
          sources: [SRC.arello, SRC.txTrec, SRC.caDre],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe Ètò Ìkẹ́kọ̀ọ́ àti Ìdánwò Ìwé-àṣẹ Real Estate rẹ: àwọn ìgbésẹ̀ ìpínlẹ̀ rẹ pẹ̀lú ọjọ́ àti ojú-ewé ìjọba, àwọn kókó outline pẹ̀lú àmì sí mẹ́ta tí o kò mọ̀ jù, ìwé òfin lórí agency, fair housing àti àdéhùn, ìṣirò márùn-ún tí o ṣe, àti ètò ọ̀sẹ̀ kọ̀ọ̀kan títí dé ọjọ́ ìdánwò rẹ.",
          youCanNow: "yí outline ìdánwò ìpínlẹ̀ rẹ padà sí ètò ìkẹ́kọ̀ọ́ àti ìdánwò tí ó ní ọjọ́, kí o sì tẹ̀lé e.",
          quickCheck: [
            { objective: "O6", q: "Níbo ni àkọsílẹ̀ kókó inú ètò ìkẹ́kọ̀ọ́ rẹ yẹ kí ó ti wá?", options: ["Ọ̀rọ̀ kan lórí ìkànnì àjọlò (social media)", "Exam content outline ti ìjọba ìpínlẹ̀ rẹ", "Àwọn kókó tí o fẹ́ràn jù", "Ojú-òpó tí ń ta ìbéèrè ìdánwò gidi"], answer: 1, why: "Content outline ti ìjọba ló ń fi ohun tí ìdánwò ń béèrè gan-an hàn." },
            { objective: "O6", q: "O ń ṣàṣìṣe nínú ìbéèrè proration lórí ìdánwò àṣeṣe léraléra. Kí ni ètò tó dára jù?", options: ["Fo proration; ìbéèrè díẹ̀ ni", "Ṣe ìdánwò náà kíákíá", "Sàmì sí i gẹ́gẹ́ bí kókó tí o kò mọ̀, kí o sì fi àṣeṣe ìṣirò kún ọ̀sẹ̀ kọ̀ọ̀kan", "Ra àpò \"guaranteed pass\""], answer: 2, why: "Sísàmì sí àwọn kókó tí o kò mọ̀, àti ṣíṣe àṣeṣe wọn ní gbogbo ọ̀sẹ̀, ń dí àlàfo náà kí ọjọ́ ìdánwò tó dé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àdéhùn, ìṣirò àti ètò ìdánwò rẹ",
        questions: [
          { objective: "O4", q: "Èwo KÌ Í ṢE ọ̀kan lára àwọn apá àdéhùn tó fẹsẹ̀ múlẹ̀?", options: ["Ìfilọ̀ àti ìtẹ́wọ́gbà", "Consideration", "Èdìdì notary lórí gbogbo ojú-ewé", "Ète tí ó bófin mu"], answer: 2, why: "Àdéhùn tó fẹsẹ̀ múlẹ̀ nílò àwọn ẹ̀gbẹ́ tí ó lẹ́tọ̀ọ́, àdéhùn láàárín wọn, consideration àti ète tí ó bófin mu; èdìdì lórí gbogbo ojú-ewé kò sí lára wọn." },
          { objective: "O4", q: "Ìfilọ̀ rírà kan sọ pé ìdúnàádúrà máa tẹ̀síwájú kìkì tí olùrà bá rí owó-yíyá. Èyí jẹ́:", options: ["Contingency", "Lien", "Easement", "Commission"], answer: 0, why: "Contingency jẹ́ ipò tí ó gbọ́dọ̀ ṣẹlẹ̀ kí ìdúnàádúrà tó lè tẹ̀síwájú." },
          { objective: "O5", q: "Fún àṣeṣe nìkan: títà $400,000 ní commission 5% jẹ́:", options: ["$2,000", "$4,000", "$200,000", "$20,000"], answer: 3, why: "$400,000 ní ìlọ́po 0.05 jẹ́ $20,000." },
          { objective: "O5", q: "Fún àṣeṣe nìkan: assessed value $250,000 ní ìwọ̀n owó-orí 2% fúnni ní owó-orí ọdún:", options: ["$5,000", "$500", "$50,000", "$2,500"], answer: 0, why: "$250,000 ní ìlọ́po 0.02 jẹ́ $5,000." },
          { objective: "O6", q: "Kí ni ọ̀nà tó dára jù láti lo ìdánwò àṣeṣe?", options: ["Há àwọn ìdáhùn sórí nìkan", "Wo gbogbo ìdáhùn tí kò tọ̀nà kí o sì kọ ìdí tí èyí tó tọ́ fi tọ́", "Ṣe é lẹ́ẹ̀kan kí o sì dúró", "Pín àwọn ìbéèrè náà lórí ayélujára"], answer: 1, why: "Wíwo ìdí tí ìdáhùn kọ̀ọ̀kan fi tọ́ ń kọ́ ọ ní òye tí ìdánwò gidi ń béèrè." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìmúrasílẹ̀ fún Ìdánwò Ìwé-àṣẹ Real Estate",
    questions: [
      { objective: "O1", q: "Ta ló ń fúnni ní ìwé-àṣẹ salesperson real estate ní US?", options: ["Ìjọba àpapọ̀", "Àjọ alákòóso real estate ti ìpínlẹ̀ kọ̀ọ̀kan", "National Association of Realtors", "Báńkì àdúgbò rẹ"], answer: 1, why: "Ìpínlẹ̀ ló ń fúnni ní ìwé-àṣẹ, nípasẹ̀ àjọ alákòóso real estate ti ìpínlẹ̀ náà." },
      { objective: "O1", q: "Ìgbésẹ̀ wo ló wà ní ọ̀pọ̀ ìpínlẹ̀ kí o tó lè ṣiṣẹ́ gẹ́gẹ́ bí salesperson?", options: ["Níní ilé", "Títa ilé márùn-ún", "Yíyege ìdánwò ìpínlẹ̀ àti background check", "Dídi broker"], answer: 2, why: "Ọ̀pọ̀ ìpínlẹ̀ ń béèrè ìdánwò àti background check, lẹ́yìn náà iṣẹ́ lábẹ́ broker." },
      { objective: "O1", q: "Salesperson gbọ́dọ̀ ṣiṣẹ́ lábẹ́:", options: ["Broker tí ó ní ìwé-àṣẹ", "Báńkì", "Olùyẹ̀wò ilé (home inspector)", "Ilé-iṣẹ́ title"], answer: 0, why: "Broker tí ó ní ìwé-àṣẹ ló ń ṣàbójútó àwọn salesperson." },
      { objective: "O2", q: "Èwo ni personal property?", options: ["Ẹ̀rọ ìgbóná (furnace) tí a kọ́ mọ́ ilé", "Igi kan nínú àgbàlá", "Ilẹ̀ náà", "Àga sofa nínú pálọ̀"], answer: 3, why: "Personal property jẹ́ ohun tí a lè gbé kiri; a kò so sofa mọ́lẹ̀." },
      { objective: "O2", q: "Ọ̀nà níní-dúkìá tí ó pé jù ni:", options: ["Easement", "Fee simple", "Lien", "Lease (ìyálé)"], answer: 1, why: "Fee simple ń fún olóhun ní àkójọ ẹ̀tọ́ tí ó kún jù." },
      { objective: "O2", q: "Ọ̀nà wo ni a fi ń ṣàpèjúwe ilẹ̀ tí ó ń lo máàpù subdivision tí a forúkọ sílẹ̀?", options: ["Metes and bounds", "Fee simple", "Lot and block", "Proration"], answer: 2, why: "Lot and block ń tọ́ka sí àwọn ilẹ̀ (lot) lórí máàpù subdivision tí a forúkọ sílẹ̀." },
      { objective: "O2", q: "Àwọn olóhun tí ìpín wọn KÌ Í lọ sọ́dọ̀ ara wọn fúnra rẹ̀ nígbà ikú ní title gẹ́gẹ́ bí:", options: ["Tenants in common", "Joint tenants", "Broker", "Ẹni tí ó ní lien"], answer: 0, why: "Tenancy in common kò ní ẹ̀tọ́ survivorship." },
      { objective: "O3", q: "Èwo ni ọ̀kan lára ojúṣe fiduciary agent sí oníbàárà?", options: ["Sísọ iye owó tí ó kéré jù tí oníbàárà máa gbà fún ẹ̀gbẹ́ kejì", "Loyalty (ìdúróṣinṣin)", "Yíyan ẹni tí ó máa yá oníbàárà lówó fún un", "Ṣíṣàìka àṣẹ oníbàárà tí ó bófin mu sí"], answer: 1, why: "Loyalty jẹ́ ojúṣe fiduciary pàtàkì (OLDCAR)." },
      { objective: "O3", q: "Sísọ fún àwọn olóhun pé kí wọ́n tà kíákíá nítorí ẹgbẹ́ kan ń wọlé bọ̀ ni a ń pè ní:", options: ["Steering", "Redlining", "Dual agency", "Blockbusting"], answer: 3, why: "Blockbusting ń ti àwọn olóhun láti tà nípa dídá ẹ̀rù sílẹ̀ nípa ẹgbẹ́ kan tí ń wọlé bọ̀." },
      { objective: "O3", q: "Kíkọ̀ láti yá owó ní àdúgbò kan nítorí àwọn tí ń gbé ibẹ̀ ni a ń pè ní:", options: ["Redlining", "Proration", "Steering", "Escrow"], answer: 0, why: "Redlining ni kíkọ̀ láti yá owó tàbí ṣe ìbánigbófò ní àwọn àdúgbò kan; kò bófin mu." },
      { objective: "O3", q: "Olùrà kan tí ń lo àga onítáyà (wheelchair) béèrè láti rí ilé kan. Lábẹ́ Fair Housing Act, o máa:", options: ["Fi ilé tí ó ní ọ̀nà ìgòkè (ramp) nìkan hàn láìbéèrè", "Kọ̀ nítorí àtẹ̀gùn", "Fi ilé náà hàn bí o ṣe máa fi í han ẹnikẹ́ni", "Béèrè ìwé dókítà"], answer: 2, why: "Àìlera jẹ́ protected class, nítorí náà olùrà náà gbọ́dọ̀ rí ìtọ́jú kan náà." },
      { objective: "O4", q: "Àdéhùn tí ọmọdé (minor) fọwọ́ sí, tí ọmọdé náà lè fagi lé, jẹ́:", options: ["Void", "Voidable", "Ṣeé mú ṣẹ pátápátá", "Lien"], answer: 1, why: "Voidable túmọ̀ sí pé ó fẹsẹ̀ múlẹ̀, ṣùgbọ́n ẹ̀gbẹ́ kan lè fagi lé e." },
      { objective: "O4", q: "Láàárín ọjọ́ iṣẹ́ mélòó lẹ́yìn ìwé ìbéèrè owó-yíyá ni ẹni tí ń yáni lówó gbọ́dọ̀ fúnni ní Loan Estimate?", options: ["Mẹ́ta", "Mẹ́wàá", "Ọgbọ̀n", "Ọ̀kan"], answer: 0, why: "CFPB sọ pé Loan Estimate máa dé láàárín ọjọ́ iṣẹ́ mẹ́ta lẹ́yìn ìwé ìbéèrè." },
      { objective: "O4", q: "Earnest money ni:", options: ["Commission agent", "Owó-orí dúkìá ọdún", "Lien lórí ilé náà", "Owó ìdógò tí ó fi hàn pé olùrà ní ìfẹ́ gidi"], answer: 3, why: "Earnest money ni owó ìdógò ìgbàgbọ́ rere (good-faith) ti olùrà." },
      { objective: "O5", q: "Fún àṣeṣe nìkan: agent kan gba split 50% nínú commission $9,000. Agent náà máa gba:", options: ["$900", "$9,000", "$4,500", "$18,000"], answer: 2, why: "$9,000 ní ìlọ́po 0.50 jẹ́ $4,500." },
      { objective: "O5", q: "Fún àṣeṣe nìkan: owó-yíyá $160,000 lórí ilé $200,000 ní LTV:", options: ["60%", "125%", "40%", "80%"], answer: 3, why: "$160,000 tí a pín sí $200,000 jẹ́ 0.80, tàbí 80%." },
      { objective: "O5", q: "Fún àṣeṣe nìkan: owó-orí ọdún jẹ́ $3,650 (ọdún ọjọ́ 365). Olùtà ní ilé náà fún ọjọ́ 30. Ìpín olùtà ni:", options: ["$300", "$365", "$100", "$3,000"], answer: 0, why: "$3,650 tí a pín sí 365 jẹ́ $10 lójúmọ́; ọjọ́ 30 jẹ́ $300." },
      { objective: "O5", q: "Square feet mélòó ló wà nínú acre kan?", options: ["5,280", "43,560", "10,000", "640"], answer: 1, why: "Acre kan jẹ́ 43,560 square feet." },
      { objective: "O6", q: "Candidate handbook ìpínlẹ̀ rẹ sábà máa ń sọ fún ọ nípa:", options: ["Àwọn ìbéèrè gangan inú ìdánwò", "Ilé tí o máa rà", "Exam content outline àti òfin ọjọ́ ìdánwò", "Owó-oṣù rẹ lọ́jọ́ iwájú"], answer: 2, why: "Handbook ń fúnni ní outline, òfin, ID tí a nílò àti ṣíṣètò àkókò." },
      { objective: "O6", q: "Ètò ìkẹ́kọ̀ọ́ tó dára máa ń bẹ̀rẹ̀ nípa:", options: ["Yíyan ọjọ́ ìdánwò tí o fojú sí àti ṣíṣírò sẹ́yìn sí ìgbésẹ̀ kọ̀ọ̀kan", "Rírà ẹ̀kọ́ tí ó wọ́n jù", "Kíkọ́ àwọn kókó tí o fẹ́ràn jù nìkan", "Dídúró títí ọkàn rẹ yóò fi balẹ̀ pé o ti ṣetán"], answer: 0, why: "Ṣíṣètò sẹ́yìn láti ọjọ́ tí o fojú sí ń fi gbogbo ìgbésẹ̀ àti àkókò ìkẹ́kọ̀ọ́ sórí kàlẹ́ńdà." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 4, 7, 8, 12, 14, 17, 19] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      { name: "Àwọn ìgbésẹ̀ ti ìjọba", objective: "O1", notYet: "Àwọn ìgbésẹ̀ kan kù, wọn kò wà ní ètò, tàbí a dà wọ́n kọ láti ojú-òpó tí kì í ṣe ti ìjọba.", meets: "Gbogbo ìgbésẹ̀ láti ojú-ewé àjọ alákòóso ìpínlẹ̀ wà ní ètò, pẹ̀lú àdírẹ́sì ojú-ewé àti ọjọ́ tí a ṣàyẹ̀wò rẹ̀.", exceeds: "Ó tún kọ owó àti ìwé tí a nílò fún ìgbésẹ̀ kọ̀ọ̀kan gẹ́gẹ́ bí ojú-ewé ìjọba ṣe kọ wọ́n gan-an." },
      { name: "Àwọn ọ̀rọ̀ pàtàkì", objective: "O2", notYet: "Ọ̀pọ̀ ọ̀rọ̀ dúkìá tàbí níní-dúkìá kò tọ̀nà tàbí kò sí nínú ìwé òfin.", meets: "Ìwé òfin ṣàlàyé àwọn ọ̀rọ̀ pàtàkì nípa dúkìá àti níní-dúkìá ní títọ́, ní ọ̀rọ̀ tó rọrùn.", exceeds: "Ọ̀rọ̀ kọ̀ọ̀kan ní àpẹẹrẹ ìgbésí ayé tí akẹ́kọ̀ọ́ fúnra rẹ̀ hùmọ̀." },
      { name: "Agency àti fair housing", objective: "O3", notYet: "Ojúṣe fiduciary tàbí kíláàsì méje ti ìjọba àpapọ̀ kò sí tàbí kò tọ̀nà.", meets: "Ó kọ àwọn ojúṣe àti gbogbo kíláàsì méje ti ìjọba àpapọ̀, pẹ̀lú steering, blockbusting àti redlining.", exceeds: "Ó fi protected class míì láti ìpínlẹ̀ tàbí ìlú akẹ́kọ̀ọ́ kún un, pẹ̀lú orísun rẹ̀." },
      { name: "Àdéhùn àti closing", objective: "O4", notYet: "Àwọn apá àdéhùn tàbí ìgbésẹ̀ closing kù, tàbí àkókò Loan Estimate àti Closing Disclosure kò tọ̀nà.", meets: "Ó kọ gbogbo apá àdéhùn tó fẹsẹ̀ múlẹ̀ àti àwọn ìgbésẹ̀ closing ní ètò, pẹ̀lú àkókò ìwé ìfihàn tó tọ́.", exceeds: "Ó fi àwọn contingency àti àkókò ìparí wọn láti inú àpẹẹrẹ ìfilọ̀ kún un." },
      { name: "Ìṣirò", objective: "O5", notYet: "Ìṣirò tí ó tọ̀nà kò tó 4 nínú 5, tàbí iṣẹ́ kò hàn.", meets: "Ó kéré tán 4 nínú ìṣirò 5 tọ̀nà, pẹ̀lú iṣẹ́ ní kíkọ sílẹ̀.", exceeds: "Gbogbo 5 tọ̀nà, pẹ̀lú ìṣirò àfikún kan tí akẹ́kọ̀ọ́ fúnra rẹ̀ kọ tí ó sì yanjú." },
      { name: "Ètò tí ó ní ọjọ́", objective: "O6", notYet: "Kò sí ọjọ́ tí a fojú sí, tàbí àwọn kókó kò wá láti inú content outline ti ìjọba.", meets: "Ó bo gbogbo kókó inú outline, ó sàmì sí mẹ́ta tí a kò mọ̀ jù, ó sì ní àkókò ìkẹ́kọ̀ọ́ ọ̀sẹ̀ kọ̀ọ̀kan títí dé ọjọ́ tí a fojú sí.", exceeds: "Ó ní ọjọ́ àtúnyẹ̀wò ìdánwò àṣeṣe àti ọjọ́ ìdánwò àfidípò." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ ṣáájú ìwé-àṣẹ tí ìpínlẹ̀ fọwọ́ sí láàárín oṣù 6 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n yege ìdánwò real estate ìpínlẹ̀, àti ní ìgbìyànjú mélòó (wọ́n fúnra wọn ròyìn)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gba ìwé-àṣẹ tí wọ́n sì ń ṣiṣẹ́ lábẹ́ broker onígbọ̀wọ́ láàárín oṣù 12"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà láti ka ojú-ewé ìjọba àjọ alákòóso ìpínlẹ̀ àti candidate handbook",
      "Ìwé, gègé àti calculator lásán",
      "Kàlẹ́ńdà (ti ìwé tàbí ti fóònù) fún ètò ìkẹ́kọ̀ọ́ àti ìdánwò",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, ní àwọn ìpàdé kúkúrú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Tí gbogbo ẹgbẹ́ bá wá láti ìpínlẹ̀ kan, ẹ ṣí ojú-ewé àjọ alákòóso ìpínlẹ̀ náà pọ̀ ní Ẹ̀kọ́ 1, kí ẹ sì lo candidate handbook rẹ̀ ní Ẹ̀kọ́ 6.",
      "Jẹ́ kí ó yé wọn pé ẹ̀kọ́ yìí ń múra àwọn akẹ́kọ̀ọ́ sílẹ̀; kò rọ́pò kíláàsì ṣáájú ìwé-àṣẹ tí ìpínlẹ̀ fọwọ́ sí, kò sì fúnni ní ìwé-àṣẹ.",
      "Ẹ ṣe ẹ̀kọ́ ìṣirò ní méjì-méjì níwájú pátákó: ọ̀kan ń yanjú, èkejì ń ṣàyẹ̀wò àwọn ìgbésẹ̀.",
      "Lo eré-ìṣe (role play) fún àwọn ìṣẹ̀lẹ̀ fair housing; dúró kí ẹ sì dárúkọ òfin náà ní ìgbà kọ̀ọ̀kan.",
      "Má ṣe fúnni ní ìmọ̀ràn nípa rírà dúkìá, ìdókòwò, owó-yíyá tàbí owó-orí; tọ́ka àwọn akẹ́kọ̀ọ́ sí orísun ìjọba àti àwọn akọ́ṣẹ́mọṣẹ́ tí ó ní ìwé-àṣẹ.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
