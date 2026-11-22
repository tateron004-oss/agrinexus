"use strict";

// Koach Learn course (Yoruba translation of shared/security-officer-prep.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const BSIS_GUARD = { name: "California BSIS: Security guards (applications, training syllabus, Power to Arrest manual)", url: "https://www.bsis.ca.gov/industries/guard.shtml" };
const BSIS_FACT = { name: "California BSIS: Security Guard Registration fact sheet", url: "https://www.bsis.ca.gov/forms_pubs/guard_fact.pdf" };
const BSIS_TRAIN = { name: "California BSIS: Security guard training syllabus (courses and hours)", url: "https://www.bsis.ca.gov/industries/g_train.shtml" };
const BSIS_POA = { name: "California BSIS: Power to Arrest training manual", url: "https://www.bsis.ca.gov/forms_pubs/poa.pdf" };
const BSIS_VERIFY = { name: "California Department of Consumer Affairs: Verify a license", url: "https://search.dca.ca.gov/" };
const NY_DOS = { name: "New York Department of State: Security guard licensing", url: "https://dos.ny.gov/security-guard" };
const TX_DPS = { name: "Texas Department of Public Safety: Private Security Program", url: "https://www.dps.texas.gov/section/private-security" };
const FL_FDACS = { name: "Florida Department of Agriculture and Consumer Services: Division of Licensing (Class D security officer)", url: "https://www.fdacs.gov/Business-Services/Private-Investigative-Recovery-and-Security-Licensing" };
const BLS_GUARDS = { name: "U.S. Bureau of Labor Statistics: Security guards and gambling surveillance officers (how to become one)", url: "https://www.bls.gov/ooh/protective-service/security-guards.htm" };

module.exports = {
  id: "security-officer-prep-yo",
  lang: "yo",
  translationOf: "security-officer-prep",
  category: "Workforce Development",
  name: "Ìmúrasílẹ̀ fún Iṣẹ́ Olùṣọ́ Ààbò (Guard Card)",
  skills: "Wíwá òfin guard card ti ìpínlẹ̀ rẹ, Ṣíṣọ́ àyíká àti ṣíṣàkóso ẹnu-ọ̀nà láti inú post orders, Wíwò àti ríròyìn láàárín àṣẹ rẹ, Mímú ìjà rọlẹ̀ àti dídáhùn sí pàjáwìrì, Kíkọ ìròyìn ìṣẹ̀lẹ̀ tó yé, Ṣíṣe ètò fún ìwé-àṣẹ àti wíwá iṣẹ́",
  outcome: "wá ohun tí ìpínlẹ̀ rẹ ń béèrè fún guard card kí o sì kọ àwọn ìgbésẹ̀ láti gbà á, tẹ̀lé post orders nígbà ìṣọ́ àti ní ẹnu-ọ̀nà, yan ìgbésẹ̀ \"wò kí o sì ròyìn\" tí kò kọjá àṣẹ olùṣọ́, kọ ìròyìn ìṣẹ̀lẹ̀ tó yé tí ó dá lórí òtítọ́, kí o sì ṣe ètò tí ó ní ọjọ́ láti gba ìwé-àṣẹ àti iṣẹ́.",
  about: [
    "Àwọn olùṣọ́ ààbò ń dáàbò bo ènìyàn àti dúkìá ní ọ́fíìsì, ṣọ́ọ̀bù, ilé-ìwòsàn, ilé-ìwé, ilé ìkẹ́rùsí, ayẹyẹ àti ilé gbígbé. Ọ̀pọ̀ iṣẹ́ yìí kò béèrè ìwé-ẹ̀rí yunifásítì, àwọn agbanisíṣẹ́ sì ń gbaṣẹ́ jálẹ̀ ọdún. Ẹ̀kọ́ yìí wà fún àwọn tó ń wá iṣẹ́, àwọn tó ń padà sílé láti ẹ̀wọ̀n, àwọn ológun tẹ́lẹ̀ (veterans) àti àwọn ọ̀dọ́ tí wọ́n fẹ́ bẹ̀rẹ̀ iṣẹ́ yìí.",
    "O máa kọ́ ohun tí olùṣọ́ ààbò ń ṣe àti ohun tí kò ṣe, bí guard card ti ìpínlẹ̀ ṣe ń ṣiṣẹ́, bí a ṣe ń ṣọ́ àyíká àti ṣàkóso ẹnu-ọ̀nà láti inú post orders, bí o ṣe lè fara balẹ̀ kí o sì wà láìléwu nígbà ìjà tàbí pàjáwìrì, àti bí o ṣe lè kọ ìròyìn ìṣẹ̀lẹ̀ tí ọ̀gá rẹ, agbẹjọ́rò tàbí ọlọ́pàá lè gbẹ́kẹ̀lé.",
    "Pàtàkì: ẹ̀kọ́ yìí ń múra rẹ sílẹ̀; kò fún ọ ní ìwé-àṣẹ. Ní ọ̀pọ̀ ìpínlẹ̀, àjọ ìjọba ìpínlẹ̀ ló ń fún olùṣọ́ ààbò ní ìwé-àṣẹ, o sì gbọ́dọ̀ ti pé ọmọ ọdún 18 ó kéré tán, yege àyẹ̀wò ìtàn ìwà (background check), kí o sì parí ìdánilẹ́kọ̀ọ́ tí ìpínlẹ̀ béèrè ní ilé-ìwé tàbí lọ́dọ̀ agbanisíṣẹ́ tí a fọwọ́ sí. Òfin yàtọ̀ láti ìpínlẹ̀ dé ìpínlẹ̀, nítorí náà o máa wo ojú-òpó ìjọba ti ìpínlẹ̀ rẹ. California ni àpẹẹrẹ wa nítorí pé a ti ṣàyẹ̀wò òfin rẹ̀ lórí ojú-òpó ìjọba.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" lórí ìwé tàbí nínú app ìwé ọ̀fẹ́. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe àpò ìmúrasílẹ̀ guard card: ohun tí ìpínlẹ̀ rẹ ń béèrè, tí a kọ bí ìgbésẹ̀ pẹ̀lú ojú-òpó ìjọba; àkọsílẹ̀ àyẹ̀wò ìṣọ́ àti ẹnu-ọ̀nà fún ibi iṣẹ́ àṣeṣe kan; ìròyìn ìṣẹ̀lẹ̀ àṣeṣe kan tó pé; káàdì àpò tí ó ní àwọn ìgbésẹ̀ \"wò kí o sì ròyìn\" àti ti pàjáwìrì; àti ètò tí ó ní ọjọ́ láti parí ìdánilẹ́kọ̀ọ́, fi ìwé ìbéèrè sílẹ̀ kí o sì rí iṣẹ́, pẹ̀lú ìlà résumé tó jẹ́ òtítọ́.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà ọmọ ọdún 18 sókè tí wọ́n ń wá iṣẹ́ olùṣọ́ ààbò láìsí ohun ìjà: àwọn tó ń wá iṣẹ́, àwọn tó ń padà sílé láti ẹ̀wọ̀n, àwọn ológun tẹ́lẹ̀ àti àwọn ọ̀dọ́. Àwọn kan ti ṣiṣẹ́ rí bí ọlọ́pàá ológun, olùṣọ́ ẹ̀wọ̀n tàbí olùdènà olè ní ṣọ́ọ̀bù; ọ̀pọ̀ jù lọ jẹ́ tuntun sí iṣẹ́ náà.",
    startingPoint: "Wọ́n lè ka fọ́ọ̀mù kúkúrú, tẹ̀lé ìtọ́ni kí wọ́n sì lo fóònù. Díẹ̀ nínú wọn ló mọ bí ìwé-àṣẹ olùṣọ́ ṣe ń ṣiṣẹ́ ní ìpínlẹ̀ wọn, ibi tí àṣẹ olùṣọ́ dópin sí lábẹ́ òfin, tàbí bí a ṣe ń kọ ìròyìn tí ó dá lórí òtítọ́. Àwọn kan rò pé iṣẹ́ ọlọ́pàá ni iṣẹ́ yìí.",
    gap: "Ààbò jẹ́ ẹ̀ka ńlá tí ó ń gbaṣẹ́, ọ̀nà láti wọ inú rẹ̀ sì yára, ṣùgbọ́n àwọn ènìyàn ń pàdánù iṣẹ́ wọ́n sì ń farapa nígbà tí wọ́n bá kọjá àṣẹ wọn, lo agbára tí kò yẹ, tàbí kọ ìròyìn tí kò yé. Àwọn akẹ́kọ̀ọ́ nílò àwòrán tòótọ́ ti àwọn ìgbésẹ̀ ìwé-àṣẹ ní ìpínlẹ̀ wọn, àwọn ìwà \"wò kí o sì ròyìn\" tí agbanisíṣẹ́ fẹ́, àti ọgbọ́n kíkọ ìròyìn tó yé, kí wọ́n lè gba ìwé-àṣẹ, rí iṣẹ́, kí wọ́n sì pẹ́ nínú rẹ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ pàtàkì",
      "Ìpínlẹ̀ ló ń fúnni ní ìwé-àṣẹ: ẹ̀kọ́ náà ń kọ́ni ní ìlànà gbogbogbò àti bí a ṣe ń rí ojú-òpó ìjọba, pẹ̀lú California bí àpẹẹrẹ tí a ti ṣàyẹ̀wò",
      "Iṣẹ́ láìsí ohun ìjà nìkan: ìbọn, kùmọ̀ (baton), tear gas àti ohun ìjà míì nílò ìwé-àṣẹ ọ̀tọ̀ àti ìdánilẹ́kọ̀ọ́ ní ojúkojú",
      "Ọgbọ́n ọwọ́ bí ìtọ́jú àkọ́kọ́ (first aid), CPR àti ìgbèjà ara ni a ń kọ́ ní ojúkojú pẹ̀lú olùkọ́ tó ní ìwé-ẹ̀rí",
      "Àyẹ̀wò ìtàn ìwà: a sọ fún àwọn akẹ́kọ̀ọ́ tí wọ́n ní àkọsílẹ̀ ẹ̀ṣẹ̀ pé kí wọ́n dáhùn ní òtítọ́, kí wọ́n sì wo òfin ìpínlẹ̀ wọn tàbí ètò ìrànlọ́wọ́ òfin fún àwọn tó ń padà sílé",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìkàwé fún ojú-òpó ìpínlẹ̀; ìwé fún àkọsílẹ̀ àyẹ̀wò àti ìròyìn"
    ],
    prerequisites: "Kò sí. \"Iṣẹ́ Ìsìn Oníbàárà Tó Dára Jù\" àti \"Résumés, LinkedIn and Interviews\" máa ràn ọ́ lọ́wọ́ pẹ̀lú ẹ̀kọ́ yìí."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Ní lílo ojú-òpó ìwé-àṣẹ ìjọba ti ìpínlẹ̀ rẹ", action: "kọ àwọn ìgbésẹ̀ láti gba guard card ní ìpínlẹ̀ rẹ", standard: "kí o sì dárúkọ àjọ náà, òfin ọjọ́ orí, àyẹ̀wò ìtàn ìwà, àti ìdánilẹ́kọ̀ọ́ tí ó yẹ ṣáájú àti lẹ́yìn tí o bá gba ìwé-àṣẹ" },
    { id: "O2", condition: "Tí a bá fún ọ ní post orders", action: "ṣe ìṣọ́ àyíká àti àyẹ̀wò ẹnu-ọ̀nà", standard: "kí o sì bo gbogbo ibi tí post orders dárúkọ, kí o sì kọ ohun tí o rí àti ohun tí o ṣe sílẹ̀ pẹ̀lú àkókò" },
    { id: "O3", condition: "Tí ìjà, olè tàbí pàjáwìrì bá ṣẹlẹ̀", action: "yan ìgbésẹ̀ \"wò kí o sì ròyìn\" tí kò kọjá àṣẹ olùṣọ́", standard: "kí o sì gba ó kéré tán 4 nínú 5 ìṣẹ̀lẹ̀ tọ̀nà, pẹ̀lú pípe nọ́mbà pàjáwìrì lákọ̀ọ́kọ́" },
    { id: "O4", condition: "Lẹ́yìn tí o bá wo tàbí ka nípa ìṣẹ̀lẹ̀ kan", action: "kọ ìròyìn ìṣẹ̀lẹ̀ tí ó dá lórí òtítọ́", standard: "kí ó sì dáhùn ta ni, kí ni, ìgbà wo, ibo àti báwo, ní lílo òtítọ́, kì í ṣe èrò, ní ìtẹ̀léra àkókò" },
    { id: "O5", condition: "Ní lílo òfin ìpínlẹ̀ rẹ àti àwọn ìpolówó iṣẹ́ àdúgbò", action: "kọ ètò tí ó ní ọjọ́ láti gba ìwé-àṣẹ àti iṣẹ́", standard: "pẹ̀lú ọjọ́ fún ìdánilẹ́kọ̀ọ́, ìtẹ̀ka, ìwé ìbéèrè àti ìbéèrè iṣẹ́, àti ìlà résumé tó jẹ́ òtítọ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Iṣẹ́ náà, guard card àti ibi iṣẹ́ (post)",
      lessons: [
        {
          title: "Ohun tí olùṣọ́ ààbò ń ṣe, àti ohun tí kò ṣe",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ṣàlàyé àwọn iṣẹ́ pàtàkì olùṣọ́ ààbò àti ibi tí àṣẹ olùṣọ́ dópin sí.",
          text: [
            "Olùṣọ́ ààbò ń dáàbò bo ènìyàn àti dúkìá. Iṣẹ́ ojoojúmọ́ ni pé kí a rí ọ, kí o máa wò, kí o ṣàkóso ẹni tó ń wọlé, kí o ṣọ́ àyíká, kí o ran àwọn ènìyàn lọ́wọ́, kí o dáhùn sí alamu, kí o sì kọ ohun tó ṣẹlẹ̀ sílẹ̀. Tí a bá ń rí ọ tí o sì wà lójúfò, ọ̀pọ̀ ìṣòro kò ní bẹ̀rẹ̀ rárá.",
            "Olùṣọ́ ààbò kì í ṣe ọlọ́pàá. Ní ọ̀pọ̀ ìpínlẹ̀, olùṣọ́ ní agbára láti mú ènìyàn tí ó jọ ti ẹnikẹ́ni míì lásán, kò ju bẹ́ẹ̀ lọ. Ọ̀pọ̀ agbanisíṣẹ́ ń sọ fún àwọn olùṣọ́ pé kí wọ́n \"wò kí wọ́n sì ròyìn\" (observe and report): wò dáadáa, pe ọlọ́pàá tàbí ọ̀gá rẹ, kí o sì kọ ọ́ sílẹ̀, dípò kí o lé ènìyàn tàbí gbá wọn mú.",
            "Òfin agbanisíṣẹ́ rẹ (post orders) lè le ju òfin ìjọba lọ. Tí post orders bá sọ pé \"má ṣe dá ènìyàn dúró\", o kò gbọ́dọ̀ dá ènìyàn dúró, kódà tí òfin bá gbà á láàyè. Kíkọjá àṣẹ rẹ lè mú kí wọ́n lé ọ níṣẹ́, pè ọ́ lẹ́jọ́, tàbí kí o farapa.",
            "Iṣẹ́ ìránṣẹ́ fún àwọn ènìyàn jẹ́ ìdajì iṣẹ́ náà. O ń júwe ọ̀nà, o ń ran àwọn àlejò tó sọnù lọ́wọ́, o sì ń bá àwọn tí inú ń bí sọ̀rọ̀ pẹ̀lú ọ̀wọ̀. Àwọn olùṣọ́ tí wọ́n fara balẹ̀, tí wọ́n ń dé lásìkò, tí wọ́n sì mọ ìròyìn kọ ni wọ́n ń gbé ga."
          ],
          words: [["Olùṣọ́ ààbò", "ẹni tí a ń sanwó fún láti dáàbò bo ènìyàn àti dúkìá; a tún ń pè é ní security guard tàbí security officer."], ["Wò kí o sì ròyìn (observe and report)", "wò, pe fún ìrànlọ́wọ́, kí o sì kọ ọ́ sílẹ̀, láìfi ọwọ́ kan ẹnikẹ́ni."], ["Post orders", "ìtọ́ni tí a kọ sílẹ̀ fún ibi iṣẹ́ kan: ohun tí o máa ṣàyẹ̀wò, ìgbà wo, àti ohun tí o máa ṣe."], ["Dá dúró (detain)", "dí ẹnìkan lọ́wọ́ láti lọ. Olùṣọ́ lè ṣe é nìkan tí òfin àti post orders wọn bá gbà á láàyè."], ["Dènà (deter)", "dá ìṣòro dúró kí ó tó bẹ̀rẹ̀, fún àpẹẹrẹ, nípa jíjẹ́ kí a rí ọ."]],
          slides: [
            { title: "Iṣẹ́ ojoojúmọ́", bullets: ["Jẹ́ kí a rí ọ, kí o sì wà lójúfò", "Ṣàkóso ẹni tó ń wọlé, kí o sì ṣọ́ àyíká", "Ran àwọn ènìyàn lọ́wọ́, kí o sì dáhùn sí alamu", "Kọ ohun tó ṣẹlẹ̀ sílẹ̀"] },
            { title: "Kì í ṣe ọlọ́pàá", bullets: ["Agbára láti mú ènìyàn sábà máa ń jọ ti ẹnikẹ́ni lásán", "Ọ̀pọ̀ agbanisíṣẹ́: wò kí o sì ròyìn", "Pe ọlọ́pàá; má ṣe lé ènìyàn tàbí gbá wọn mú"] },
            { title: "Post orders ló ṣáájú", bullets: ["Wọ́n lè le ju òfin ìjọba lọ", "Tí wọ́n bá sọ pé má dá ènìyàn dúró, má ṣe dá a dúró"] },
            { title: "Ohun tí ó ń mú kí wọ́n gbé ọ ga", bullets: ["Iṣẹ́ ìránṣẹ́ pẹ̀lú ìfarabalẹ̀ àti ọ̀wọ̀", "Dídé lásìkò ní gbogbo ìyípadà iṣẹ́", "Ìròyìn tó yé tí ó sì jẹ́ òtítọ́"] }
          ],
          sources: [BLS_GUARDS, BSIS_POA],
          tryIt: "Fa òpó méjì sórí ìwé: \"Olùṣọ́ ń ṣe\" àti \"Olùṣọ́ kì í ṣe\". Fi ọ̀kọ̀ọ̀kan nínú ìwọ̀nyí sínú òpó kan: ṣọ́ ibi ìgbọ́kọ̀sí, fi agbára ṣàyẹ̀wò àpò ẹnìkan, júwe ọ̀nà fún àlejò, lé olè ṣọ́ọ̀bù dé ojú pópó, pe 911 fún ìjà, kọ ìròyìn, de ẹnìkan ní ṣẹ́kẹ́ṣẹkẹ̀ nígbà tí post orders sọ pé wò kí o sì ròyìn. Lẹ́yìn náà, kọ gbólóhùn kan nípa ìdí rẹ̀.",
          youCanNow: "ṣàlàyé ohun tí olùṣọ́ ààbò ń ṣe àti ibi tí àṣẹ olùṣọ́ dópin sí.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ọ̀pọ̀ agbanisíṣẹ́ ń pè ní \"wò kí o sì ròyìn\" (observe and report)?", options: ["Lé ẹnikẹ́ni tó bá sá", "Wò, pe fún ìrànlọ́wọ́, kí o sì kọ ọ́ sílẹ̀", "Ṣàyẹ̀wò àpò gbogbo ènìyàn", "Mú ènìyàn fún gbogbo òfin tí wọ́n bá rú"], answer: 1, why: "Wò kí o sì ròyìn túmọ̀ sí pé o wò, o pe ọlọ́pàá tàbí ọ̀gá rẹ, o sì kọ ọ́ sílẹ̀, láìfi ọwọ́ kan ẹnikẹ́ni." },
            { objective: "O3", q: "Òfin lè gbà ọ́ láàyè láti mú ènìyàn, ṣùgbọ́n post orders rẹ sọ pé \"má ṣe dá ènìyàn dúró\". Kí ni o máa ṣe?", options: ["Dá a dúró bẹ́ẹ̀", "Béèrè lọ́wọ́ afurasí ohun tí ó fẹ́", "Tẹ̀lé post orders: wò, pè, kí o sì ròyìn", "Fi ibi iṣẹ́ rẹ sílẹ̀"], answer: 2, why: "Post orders lè le ju òfin lọ, o sì gbọ́dọ̀ tẹ̀lé wọn." }
          ]
        },
        {
          title: "Gbígba guard card: bí ìwé-àṣẹ ìpínlẹ̀ ṣe ń ṣiṣẹ́",
          objectives: ["O1"],
          minutes: 6,
          goal: "Wá àjọ ìwé-àṣẹ ti ìpínlẹ̀ rẹ, kí o sì kọ àwọn ìgbésẹ̀ láti gba guard card.",
          text: [
            "Ọ̀pọ̀ ìpínlẹ̀ ń fún olùṣọ́ ààbò ní ìwé-àṣẹ nípasẹ̀ àjọ ìjọba ìpínlẹ̀ kan. Ìlànà tí ó wọ́pọ̀: ó kéré tán ọmọ ọdún 18, yege àyẹ̀wò ìtàn ìwà ọ̀daràn pẹ̀lú ìtẹ̀ka, kí o sì parí ìdánilẹ́kọ̀ọ́ ní ilé-ìwé tàbí lọ́dọ̀ agbanisíṣẹ́ tí a fọwọ́ sí. Ọ̀pọ̀ ìpínlẹ̀ tún ń béèrè ìdánilẹ́kọ̀ọ́ lọ́dọọdún. Orúkọ rẹ̀ yàtọ̀: \"guard card\", \"registration\" tàbí \"Class D license\".",
            "California ni àpẹẹrẹ tí a ti ṣàyẹ̀wò. Àjọ náà ni Bureau of Security and Investigative Services (BSIS). O gbọ́dọ̀ ti pé ọmọ ọdún 18 ó kéré tán, yege àyẹ̀wò ìtàn ìwà ti Department of Justice àti FBI nípasẹ̀ ìtẹ̀ka Live Scan, kí o sì parí ìdánilẹ́kọ̀ọ́ Power to Arrest (agbára láti mú ènìyàn) kí wọ́n tó fún ọ ní registration. Lẹ́yìn náà, o máa parí wákàtí 32 ìdánilẹ́kọ̀ọ́ ọgbọ́n iṣẹ́ olùṣọ́ láàárín oṣù 6 àkọ́kọ́, àti wákàtí 8 ìdánilẹ́kọ̀ọ́ tí ń bá a lọ lọ́dọọdún. O lè fi ìwé ìbéèrè sílẹ̀ lórí ayélujára nínú BreEZe tàbí nípasẹ̀ ìfìwéránṣẹ́, o sì gbọ́dọ̀ gbé káàdì rẹ dání nígbà iṣẹ́.",
            "Àwọn ìpínlẹ̀ míì ní àjọ tiwọn, fún àpẹẹrẹ New York Department of State, Private Security Program ti Texas Department of Public Safety, àti Division of Licensing ti Florida Department of Agriculture and Consumer Services. Wo ojú-òpó ìjọba ti ìpínlẹ̀ rẹ fún iye wákàtí ìdánilẹ́kọ̀ọ́, owó àti fọ́ọ̀mù ti àkókò yìí. Má ṣe gba ìpolówó ilé-ìwé ìdánilẹ́kọ̀ọ́ gbọ́ fún òfin.",
            "Tí o bá ní àkọsílẹ̀ ẹ̀ṣẹ̀: ìpínlẹ̀ kọ̀ọ̀kan ló ń pinnu irú àkọsílẹ̀ tí ó ṣe pàtàkì. Dáhùn gbogbo ìbéèrè ní òtítọ́, nítorí ìdáhùn èké fúnra rẹ̀ lè mú kí wọ́n kọ̀ ọ́. Ètò ìpadàbọ̀ sí àwùjọ tàbí ọ́fíìsì ìrànlọ́wọ́ òfin (legal aid) lè ràn ọ́ lọ́wọ́ láti ka òfin ìpínlẹ̀ rẹ."
          ],
          steps: ["Wá àjọ ìwé-àṣẹ olùṣọ́ ààbò ti ìpínlẹ̀ rẹ, kí o sì ṣí ojú-òpó .gov rẹ̀ gidi.", "Kọ sílẹ̀: ọjọ́ orí tí ó kéré jù, àyẹ̀wò ìtàn ìwà àti àwọn ìgbésẹ̀ ìtẹ̀ka.", "Kọ ìdánilẹ́kọ̀ọ́ tí ó yẹ ṣáájú ìwé-àṣẹ àti lẹ́yìn rẹ̀ (oṣù àkọ́kọ́, lọ́dọọdún).", "Wá ìwé ìbéèrè (lórí ayélujára tàbí ti ìwé) àti ojú-ewé owó; má ṣe fojú díwọ̀n owó.", "Kọ bí a ṣe ń sọ ìwé-àṣẹ dọ̀tun àti bí ó ṣe pẹ́ tó."],
          words: [["Guard card", "orúkọ ojoojúmọ́ fún ìwé-àṣẹ tàbí registration olùṣọ́ ààbò ti ìpínlẹ̀."], ["BSIS", "Bureau of Security and Investigative Services ti California, tí ó ń forúkọ àwọn olùṣọ́ sílẹ̀ ní California."], ["Live Scan", "ìtẹ̀ka oní-ẹ̀rọ tí a ń lò fún àyẹ̀wò ìtàn ìwà ní California àti àwọn ìpínlẹ̀ míì."], ["Àyẹ̀wò ìtàn ìwà (background check)", "wíwá àkọsílẹ̀ ẹ̀ṣẹ̀, nígbà púpọ̀ láti ọwọ́ ìpínlẹ̀ àti FBI, kí wọ́n tó fúnni ní ìwé-àṣẹ."], ["Ìdánilẹ́kọ̀ọ́ tí ń bá a lọ", "ìdánilẹ́kọ̀ọ́ tí o gbọ́dọ̀ máa ṣe lẹ́yìn tí o bá gba ìwé-àṣẹ, nígbà púpọ̀ lọ́dọọdún."]],
          slides: [
            { title: "Ìlànà tí ó wọ́pọ̀", bullets: ["Ó kéré tán ọmọ ọdún 18", "Àyẹ̀wò ìtàn ìwà pẹ̀lú ìtẹ̀ka", "Ìdánilẹ́kọ̀ọ́ tí a fọwọ́ sí; ọ̀pọ̀ ìpínlẹ̀ tún ń béèrè rẹ̀ lọ́dọọdún"] },
            { title: "Àpẹẹrẹ California (BSIS)", bullets: ["Ìdánilẹ́kọ̀ọ́ Power to Arrest kí wọ́n tó fún ọ ní káàdì", "Wákàtí 32 ìdánilẹ́kọ̀ọ́ ọgbọ́n iṣẹ́ láàárín oṣù 6", "Wákàtí 8 ìdánilẹ́kọ̀ọ́ tí ń bá a lọ lọ́dọọdún"] },
            { title: "Àwọn ìpínlẹ̀ míì", bullets: ["NY: Department of State", "TX: DPS Private Security Program", "FL: FDACS Division of Licensing (Class D)", "Wo ojú-òpó ìjọba, kì í ṣe ìpolówó"] },
            { title: "Tí o bá ní àkọsílẹ̀ ẹ̀ṣẹ̀", bullets: ["Ìpínlẹ̀ kọ̀ọ̀kan ló ń pinnu àkọsílẹ̀ tí ó ṣe pàtàkì", "Dáhùn gbogbo ìbéèrè ní òtítọ́", "Béèrè lọ́wọ́ ètò ìpadàbọ̀ sí àwùjọ tàbí legal aid"] }
          ],
          sources: [BSIS_FACT, BSIS_TRAIN, NY_DOS, TX_DPS, FL_FDACS, BLS_GUARDS],
          tryIt: "Ṣí ojú-òpó ìwé-àṣẹ ìjọba ti ìpínlẹ̀ rẹ (tàbí fact sheet BSIS ti California tí o bá ń ṣe àṣeṣe). Lórí ìwé, kọ àwọn ìgbésẹ̀ guard card ti ìpínlẹ̀ rẹ ní ìtẹ̀léra: àjọ, ọjọ́ orí, àyẹ̀wò ìtàn ìwà, ìdánilẹ́kọ̀ọ́ ṣáájú káàdì, ìdánilẹ́kọ̀ọ́ lẹ́yìn rẹ̀, bí a ṣe ń fi ìwé ìbéèrè sílẹ̀, àti àdírẹ́sì ojú-òpó náà.",
          youCanNow: "wá àjọ ìwé-àṣẹ ti ìpínlẹ̀ rẹ, kí o sì kọ àwọn ìgbésẹ̀ láti gba guard card.",
          quickCheck: [
            { objective: "O1", q: "Ní California, ìdánilẹ́kọ̀ọ́ wo ni ó gbọ́dọ̀ parí kí wọ́n tó fúnni ní registration olùṣọ́?", options: ["Ìdánilẹ́kọ̀ọ́ ìbọn", "Ìdánilẹ́kọ̀ọ́ Power to Arrest", "Ìdánilẹ́kọ̀ọ́ kùmọ̀ (baton)", "Kò sí ìdánilẹ́kọ̀ọ́ rárá"], answer: 1, why: "BSIS sọ pé ìdánilẹ́kọ̀ọ́ Power to Arrest gbọ́dọ̀ parí kí wọ́n tó fúnni ní registration." },
            { objective: "O1", q: "Ìpolówó ìdánilẹ́kọ̀ọ́ kan sọ pé ìpínlẹ̀ rẹ ń béèrè kíláàsì ayélujára wákàtí 2 péré. Kí ni o máa ṣe?", options: ["Gba ìpolówó náà gbọ́", "Béèrè lọ́wọ́ ọ̀rẹ́ kan", "Sanwó kí o sì nírètí", "Wo ojú-òpó ìjọba ti àjọ ìpínlẹ̀ náà"], answer: 3, why: "Òfin ń yí padà, ó sì yàtọ̀ láti ìpínlẹ̀ dé ìpínlẹ̀; ojú-òpó ìjọba ti àjọ náà nìkan ni a lè gbẹ́kẹ̀lé." }
          ]
        },
        {
          title: "Post orders, ìṣọ́ àyíká àti ṣíṣàkóso ẹnu-ọ̀nà",
          objectives: ["O2"],
          minutes: 5,
          goal: "Ṣe ìṣọ́ àyíká àti àyẹ̀wò ẹnu-ọ̀nà nípa títẹ̀lé post orders tí a kọ sílẹ̀.",
          text: [
            "Gbogbo ibi iṣẹ́ ló ní post orders. Wọ́n ń sọ àkókò iṣẹ́ rẹ fún ọ, ibi tí o máa ṣọ́ àti bí ó ṣe máa ń pọ̀ tó, àwọn ilẹ̀kùn tí o máa ṣàyẹ̀wò, ẹni tí ó lè wọlé, ohun tí o máa ṣe nígbà alamu, àti ẹni tí o máa pè. Kà wọ́n ní ìbẹ̀rẹ̀ gbogbo ìyípadà iṣẹ́ (shift), kí o sì béèrè lọ́wọ́ ọ̀gá rẹ nípa ohunkóhun tí kò yé ọ.",
            "Nígbà ìṣọ́, máa yí àkókò rẹ padà kí ẹnikẹ́ni má lè mọ ìgbà tí o máa dé. Lo ojú, etí àti imú rẹ: wá àwọn ilẹ̀kùn tí ó ṣí sílẹ̀, àgádágodo tí ó bàjẹ́, omi tí ń jò, èéfín, ọ̀nà àbájáde iná tí a dí, iná tí ó kú, àti àwọn ènìyàn ní ibi tí kò yẹ kí wọ́n wà. Kọ àyẹ̀wò kọ̀ọ̀kan sínú ìwé ìṣẹ̀lẹ̀ ojoojúmọ́ (daily activity log) pẹ̀lú àkókò.",
            "Ṣíṣàkóso ẹnu-ọ̀nà (access control) túmọ̀ sí pé àwọn tí ó yẹ nìkan ló ń wọlé. Ṣàyẹ̀wò báàjì tàbí ID bí post orders ṣe sọ, kọ orúkọ àwọn àlejò sílẹ̀ nígbà tí wọ́n bá wọlé àti tí wọ́n bá jáde, fún wọn ní pásì àlejò, má sì jẹ́ kí ẹnikẹ́ni tẹ̀lé ọ wọlé láti ilẹ̀kùn tí a tì (tailgating). Jẹ́ oníwà rere ṣùgbọ́n dúró ṣinṣin: \"Ẹ jọ̀ọ́, mo ní láti rí báàjì yín.\"",
            "Lo rédíò tàbí fóònù rẹ bí ibi iṣẹ́ náà ṣe sọ: ọ̀rọ̀ kúkúrú tó yé, pẹ̀lú ibi tí o wà. Nígbà ìyípadà iṣẹ́, sọ fún olùṣọ́ tí ó tẹ̀lé ọ ohun tí ó ṣí sílẹ̀, kí o sì fi ìwé ìṣẹ̀lẹ̀ lé e lọ́wọ́."
          ],
          steps: ["Ka post orders àti ìwé ìṣẹ̀lẹ̀ ti ìyípadà iṣẹ́ tó kọjá.", "Ṣàyẹ̀wò rédíò tàbí fóònù rẹ àti àwọn kọ́kọ́rọ́.", "Ṣọ́ gbogbo ibi tí post orders dárúkọ, ní àkókò tí ó ń yí padà.", "Ní ẹnu-ọ̀nà: ṣàyẹ̀wò ID tàbí báàjì, kọ orúkọ àlejò sílẹ̀, dènà tailgating.", "Kọ àyẹ̀wò kọ̀ọ̀kan àti ohunkóhun tí kò wọ́pọ̀ sílẹ̀ pẹ̀lú àkókò.", "Ṣàlàyé fún olùṣọ́ tí ó tẹ̀lé ọ nígbà ìyípadà iṣẹ́."],
          words: [["Ìṣọ́ àyíká (patrol)", "rírìn tàbí wíwakọ̀ yí ibi iṣẹ́ ká ní ọ̀nà kan láti wá ìṣòro."], ["Ṣíṣàkóso ẹnu-ọ̀nà (access control)", "rírí i dájú pé àwọn ènìyàn àti ọkọ̀ tí a gbà láàyè nìkan ló ń wọlé."], ["Tailgating", "nígbà tí ẹnìkan bá tẹ̀lé ẹni tí a gbà láàyè wọlé láti ilẹ̀kùn tí a tì láìfi ID hàn."], ["Ìwé ìṣẹ̀lẹ̀ ojoojúmọ́ (daily activity log)", "àkọsílẹ̀ olùṣọ́ ti àyẹ̀wò àti ìṣẹ̀lẹ̀ kọ̀ọ̀kan nígbà ìyípadà iṣẹ́, pẹ̀lú àkókò."]],
          slides: [
            { title: "Ìbẹ̀rẹ̀ ìyípadà iṣẹ́", bullets: ["Ka post orders àti ìwé ìṣẹ̀lẹ̀ tó kọjá", "Ṣàyẹ̀wò rédíò, fóònù àti kọ́kọ́rọ́", "Béèrè nípa ohunkóhun tí kò yé ọ"] },
            { title: "Nígbà ìṣọ́", bullets: ["Máa yí àkókò rẹ padà", "Ilẹ̀kùn, àgádágodo, omi tí ń jò, èéfín, ọ̀nà àbájáde iná, iná", "Kọ àyẹ̀wò kọ̀ọ̀kan sílẹ̀ pẹ̀lú àkókò"] },
            { title: "Ní ẹnu-ọ̀nà", bullets: ["Ṣàyẹ̀wò báàjì tàbí ID bí ìtọ́ni ṣe sọ", "Kọ orúkọ àlejò sílẹ̀ nígbà tí wọ́n wọlé àti jáde", "Dènà tailgating: pẹ̀lú ọ̀wọ̀ àti ìdúróṣinṣin"] },
            { title: "Òpin ìyípadà iṣẹ́", bullets: ["Ṣàlàyé fún olùṣọ́ tí ó tẹ̀lé ọ", "Fi ìwé ìṣẹ̀lẹ̀ lé e lọ́wọ́"] }
          ],
          sources: [BSIS_TRAIN, BLS_GUARDS],
          tryIt: "Yan ibi iṣẹ́ àṣeṣe kan: ilé gbígbé rẹ, ilé-ìkàwé tàbí ṣọ́ọ̀bù tí o mọ̀. Kọ ìlà márùn-ún post orders fún un (àkókò iṣẹ́, ibi ìṣọ́, òfin ẹnu-ọ̀nà, ẹni tí o máa pè). Lẹ́yìn náà, kọ ìwé ìṣẹ̀lẹ̀ ojoojúmọ́ wákàtí kan fún ibi náà pẹ̀lú ó kéré tán àkọsílẹ̀ mẹ́rin tí ó ní àkókò, pẹ̀lú ìṣòro kan tí o rí àti ohun tí o ṣe.",
          youCanNow: "ṣe ìṣọ́ àyíká àti àyẹ̀wò ẹnu-ọ̀nà láti inú post orders tí a kọ sílẹ̀, kí o sì kọ wọ́n sínú ìwé ìṣẹ̀lẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Kí nìdí tí o fi gbọ́dọ̀ máa yí àkókò ìṣọ́ rẹ padà?", options: ["Kí ẹnikẹ́ni má lè mọ ìgbà tí o máa kọjá", "Láti parí ní kùtùkùtù", "Nítorí rédíò sọ bẹ́ẹ̀", "Láti fo àwọn àyẹ̀wò kan"], answer: 0, why: "Ẹni ibi lè yẹra fún ìṣọ́ tí a lè mọ àkókò rẹ̀; àkókò tí ó ń yí padà ń dènà ìṣòro." },
            { objective: "O2", q: "Ẹnìkan tí kò ní báàjì rìn wọlé tẹ̀lé òṣìṣẹ́ kan ní kíá. Kí ni èyí?", options: ["Ìṣọ́ àyíká", "Tailgating", "Wíwò", "Kíkọ sínú ìwé ìṣẹ̀lẹ̀"], answer: 1, why: "Tailgating ni títẹ̀lé ẹnìkan wọlé láti ilẹ̀kùn tí a ń ṣàkóso láìfi ID hàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Iṣẹ́ náà, guard card àti ibi iṣẹ́ (post)",
        questions: [
          { objective: "O3", q: "Ní ọ̀pọ̀ ìpínlẹ̀, báwo ni agbára olùṣọ́ ààbò láti mú ènìyàn ṣe rí sí ti ẹni lásán?", options: ["Ó pọ̀ jù lọ, bí ti ọlọ́pàá", "Kò sí rárá ní gbogbo ìgbà", "Ní òpin ọ̀sẹ̀ nìkan", "Ó fẹ́rẹ̀ jọ ti ẹnikẹ́ni lásán"], answer: 3, why: "Ní ọ̀pọ̀ ìpínlẹ̀, olùṣọ́ ní agbára láti mú ènìyàn bí ẹni lásán, kò ju bẹ́ẹ̀ lọ." },
          { objective: "O1", q: "Èwo ló jẹ́ ara ìlànà guard card tí ó wọ́pọ̀ ní ọ̀pọ̀ ìpínlẹ̀?", options: ["Ìwé-ẹ̀rí yunifásítì", "Níní ọkọ̀ ayọ́kẹ́lẹ́", "Àyẹ̀wò ìtàn ìwà pẹ̀lú ìtẹ̀ka", "Ìwé-àṣẹ ìbọn"], answer: 2, why: "Ọ̀pọ̀ ìpínlẹ̀ ń béèrè àyẹ̀wò ìtàn ìwà pẹ̀lú ìtẹ̀ka, ọjọ́ orí 18 àti ìdánilẹ́kọ̀ọ́ tí a fọwọ́ sí." },
          { objective: "O1", q: "Ní California, ìdánilẹ́kọ̀ọ́ tí ń bá a lọ mélòó ni olùṣọ́ gbọ́dọ̀ ṣe lọ́dọọdún?", options: ["Wákàtí 8", "Kò sí ìdánilẹ́kọ̀ọ́", "Wákàtí 40", "Wákàtí 1"], answer: 0, why: "BSIS ń béèrè wákàtí 8 ìdánilẹ́kọ̀ọ́ tí ń bá a lọ lọ́dọọdún." },
          { objective: "O2", q: "Níbo ni o ti máa rí àwọn ilẹ̀kùn tí o máa ṣàyẹ̀wò àti ẹni tí o máa pè ní ibi iṣẹ́ rẹ?", options: ["Nínú ìpolówó ìdánilẹ́kọ̀ọ́", "Nínú post orders", "Lọ́dọ̀ àlejò", "Lórí ẹ̀rọ ayélujára alásopọ̀ (social media)"], answer: 1, why: "Post orders ni ìtọ́ni tí a kọ sílẹ̀ fún ibi iṣẹ́ náà." },
          { objective: "O2", q: "Nígbà ìṣọ́, o rí i pé àpótí ti dí ọ̀nà àbájáde iná kan. Kí ni o máa ṣe?", options: ["Fi sílẹ̀; kì í ṣe iṣẹ́ rẹ", "Fi ìwé kékeré sí orí àwọn àpótí náà", "Dúró de ìyípadà iṣẹ́ tó ń bọ̀", "Ròyìn rẹ̀ kí o sì kọ ọ́ sínú ìwé ìṣẹ̀lẹ̀ pẹ̀lú àkókò, bí post orders ṣe sọ"], answer: 3, why: "Ọ̀nà àbájáde tí a dí jẹ́ ewu tí o gbọ́dọ̀ ròyìn kí o sì kọ sílẹ̀ lẹ́sẹ̀kẹsẹ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Ìjà, pàjáwìrì, ìròyìn àti rírí iṣẹ́",
      lessons: [
        {
          title: "Mímú ìjà rọlẹ̀, lílo agbára àti pàjáwìrì",
          objectives: ["O3"],
          minutes: 6,
          goal: "Yan ọ̀nà tí ó fara balẹ̀ tí kò sì léwu láti dáhùn sí ìjà, olè tàbí pàjáwìrì.",
          text: [
            "A lè fi ọ̀rọ̀ mú ọ̀pọ̀ ìjà rọlẹ̀. Dúró ní ìjìnnà tí kò léwu, dúró ní ẹ̀gbẹ́ díẹ̀ (kì í ṣe ní iwájú gán-ún), jẹ́ kí ọwọ́ rẹ ṣí sílẹ̀ kí a sì rí wọn, kí o sì sọ̀rọ̀ díẹ̀díẹ̀ pẹ̀lú ohùn jẹ́jẹ́. Fetí sílẹ̀, lo orúkọ ẹni náà tí o bá mọ̀ ọ́n, kí o sì fún un ní àṣàyàn: \"Ẹ lè dúró síbí, tàbí kí n pe alákòóso yín.\" Má ṣe jiyàn, fọwọ́ kàn án, tàbí sé e mọ́ ibì kan.",
            "Lílo agbára ni apá tí ó ṣe pàtàkì jù nínú iṣẹ́ náà. Àwọn ìpínlẹ̀ ń kọ́ni nípa rẹ̀ nínú ìdánilẹ́kọ̀ọ́ wọn (California ń béèrè ẹ̀kọ́ Appropriate Use of Force àti Power to Arrest). Òfin tí o gbọ́dọ̀ rántí: agbára tí òfin àti post orders rẹ gbà láàyè nìkan, nígbà tí ó bá pọndandan nìkan, kí o sì dáwọ́ dúró ní kété tí kò bá pọndandan mọ́. Ọ̀pọ̀ olùṣọ́ tí kò ní ohun ìjà ni a ń sọ fún pé kí wọ́n fi sílẹ̀ kí wọ́n sì pe ọlọ́pàá dípò bẹ́ẹ̀.",
            "Olè: wò, rántí bí ẹni náà ṣe rí, pe ọlọ́pàá tàbí ọ̀gá rẹ bí ìtọ́ni rẹ ṣe sọ, má sì lé e dé ojú pópó tàbí ibi ìgbọ́kọ̀sí. Ààbò rẹ àti ti àwọn ẹlòmíì ṣe pàtàkì ju ọjà lọ.",
            "Pàjáwìrì: fún iná, àìsàn òjijì, ìjà tàbí ohun ìjà, pe 911 (tàbí nọ́mbà pàjáwìrì àdúgbò rẹ) lákọ̀ọ́kọ́, lẹ́yìn náà tẹ̀lé ètò pàjáwìrì ibi iṣẹ́ náà: kìlọ̀ fún àwọn ènìyàn, darí wọn sí ọ̀nà àbájáde, pàdé àwọn olùdáhùn pàjáwìrì kí o sì sọ ohun tí o rí fún wọn. A ń kọ́ ìtọ́jú àkọ́kọ́ àti CPR, a sì ń gba ìwé-ẹ̀rí rẹ̀ ní ojúkojú pẹ̀lú olùkọ́ tó ní ìwé-ẹ̀rí, fún àpẹẹrẹ láti American Red Cross tàbí American Heart Association."
          ],
          steps: ["Ṣàyẹ̀wò: ṣé ẹnikẹ́ni wà nínú ewu? Tí ó bá rí bẹ́ẹ̀, pe 911 lákọ̀ọ́kọ́.", "Dúró ní ìjìnnà tí kò léwu, kí o sì ní ọ̀nà àbájáde.", "Sọ̀rọ̀ pẹ̀lú ìfarabalẹ̀; fetí sílẹ̀; fúnni ní àṣàyàn.", "Tí kò bá rọlẹ̀, sún sẹ́yìn kí o sì pe ọlọ́pàá tàbí ọ̀gá rẹ.", "Tẹ̀lé ètò pàjáwìrì ibi iṣẹ́ náà; darí àwọn ènìyàn jáde; pàdé àwọn olùdáhùn.", "Kọ ọ́ sílẹ̀ ní kété tí kò bá sí ewu mọ́."],
          words: [["Mímú ìjà rọlẹ̀ (de-escalation)", "lílo ọ̀rọ̀ jẹ́jẹ́ àti ìṣesí ara láti dín ìbínú ẹnìkan kù."], ["Lílo agbára (use of force)", "ìgbésẹ̀ ti ara èyíkéyìí láti ṣàkóso ènìyàn; olùṣọ́ lè lo èyí tí òfin àti ìtọ́ni wọn gbà láàyè nìkan."], ["Ètò pàjáwìrì", "àwọn ìgbésẹ̀ tí ibi iṣẹ́ kọ sílẹ̀ fún iná, àìsàn òjijì, ohun ìjà àti kíkó ènìyàn jáde."], ["Kíkó ènìyàn jáde (evacuation)", "mímú gbogbo ènìyàn jáde kúrò nínú ilé láìléwu."]],
          slides: [
            { title: "Fi ọ̀rọ̀ mú un rọlẹ̀", bullets: ["Ìjìnnà tí kò léwu, ọwọ́ ṣíṣí, dúró ní ẹ̀gbẹ́ díẹ̀", "Sọ̀rọ̀ díẹ̀díẹ̀; fetí sílẹ̀; fúnni ní àṣàyàn", "Má jiyàn, má fọwọ́ kàn án, má sé e mọ́"] },
            { title: "Lílo agbára", bullets: ["Èyí tí òfin àti ìtọ́ni rẹ gbà láàyè nìkan", "Nígbà tí ó pọndandan nìkan; dáwọ́ dúró nígbà tí kò pọndandan mọ́", "Ọ̀pọ̀ olùṣọ́ láìsí ohun ìjà: sún sẹ́yìn kí o sì pè"] },
            { title: "Olè", bullets: ["Wò kí o sì rántí bí ẹni náà ṣe rí", "Pe ọlọ́pàá tàbí ọ̀gá rẹ", "Má lé e; ènìyàn ṣe pàtàkì ju ọjà lọ"] },
            { title: "Pàjáwìrì", bullets: ["Pe 911 (tàbí nọ́mbà àdúgbò) lákọ̀ọ́kọ́", "Tẹ̀lé ètò pàjáwìrì; darí àwọn ènìyàn jáde", "Pàdé àwọn olùdáhùn kí o sì sọ ohun tí o rí"] }
          ],
          sources: [BSIS_TRAIN, BSIS_POA],
          tryIt: "Ṣe àṣeṣe pẹ̀lú ọ̀rẹ́ kan tàbí níwájú dígí. Ìṣẹ̀lẹ̀: àlejò kan ń pariwo ní tábìlì iwájú nítorí pé kò lè gòkè láìsí báàjì. Sọ gbólóhùn mẹ́ta tí ó fara balẹ̀ sókè, pẹ̀lú àṣàyàn kan tí o fún un. Lẹ́yìn náà, kọ ìgbà tí o máa sún sẹ́yìn kí o sì pe ọ̀gá rẹ tàbí ọlọ́pàá.",
          youCanNow: "yan ọ̀nà tí ó fara balẹ̀ tí kò sì léwu láti dáhùn sí ìjà, olè tàbí pàjáwìrì, láìkọjá àṣẹ rẹ.",
          quickCheck: [
            { objective: "O3", q: "Ẹnìkan ṣubú lulẹ̀ ní gbọ̀ngàn iwájú, kò sì mí dáadáa. Kí ni o máa kọ́kọ́ ṣe?", options: ["Kọ ìròyìn", "Pe ọ̀gá rẹ kí o sì dúró", "Pe 911, lẹ́yìn náà tẹ̀lé ètò pàjáwìrì", "Wá ID rẹ̀"], answer: 2, why: "Nígbà àìsàn òjijì, o máa pe 911 (tàbí nọ́mbà àdúgbò rẹ) lákọ̀ọ́kọ́." },
            { objective: "O3", q: "Olè ṣọ́ọ̀bù kan sá jáde lọ sí ibi ìgbọ́kọ̀sí pẹ̀lú ọjà. Ìtọ́ni rẹ sọ pé wò kí o sì ròyìn. Kí ni o máa ṣe?", options: ["Kọ bí ó ṣe rí àti ibi tí ó gbà lọ sílẹ̀, kí o sì pè bí ìtọ́ni rẹ ṣe sọ", "Lé e wọ inú ọkọ̀ tí ń lọ", "Gbá àpò rẹ̀ mú", "Fi ọkọ̀ rẹ dí ọkọ̀ rẹ̀"], answer: 0, why: "O wà láìléwu, o kó òtítọ́ jọ, o sì pè; ọjà kò tó ẹ̀mí ènìyàn." }
          ]
        },
        {
          title: "Wò, júwe, kí o sì kọ ìròyìn ìṣẹ̀lẹ̀",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kọ ìròyìn ìṣẹ̀lẹ̀ tí ó dá lórí òtítọ́, tí ó dáhùn ta ni, kí ni, ìgbà wo, ibo àti báwo.",
          text: [
            "Ọ̀gá rẹ, oníbàárà, ilé-iṣẹ́ ìdánilójú (insurance), ọlọ́pàá tàbí ilé-ẹjọ́ lè ka ìròyìn rẹ, nígbà míì lẹ́yìn oṣù púpọ̀. Ìròyìn tó dára ń jẹ́ kí àjèjì rí ohun tí ó ṣẹlẹ̀ gan-an. Ọ̀pọ̀ olùṣọ́ ló ń pàdánù ìgbẹ́kẹ̀lé nítorí ìròyìn wọn kò yé.",
            "Kọ òtítọ́, kì í ṣe èrò. Má kọ \"ó ti mutí yó\", ṣùgbọ́n kọ \"ó ń rùn ọtí, ó ń ta gbọ̀ngbọ̀n, ọ̀rọ̀ rẹ̀ sì ń dàrú\". Má kọ \"ọkùnrin afurasí kan\", ṣùgbọ́n kọ \"ọkùnrin kan, nǹkan bí ọmọ ọdún 30, gíga rẹ̀ nǹkan bí ẹsẹ̀ 6, jákẹ́ẹ̀tì pupa oní-fìlà, àpò ẹ̀yìn dúdú, ó rìn yí àwọn ọkọ̀ tí a gbé sílẹ̀ ká, ó sì gbìyànjú láti ṣí ilẹ̀kùn ọkọ̀ méjì\".",
            "Dáhùn ta ni, kí ni, ìgbà wo, ibo àti báwo, ní ìtẹ̀léra àkókò. Kọ ọjọ́ àti àkókò gangan, ibi gangan, àwọn ènìyàn tí ọ̀rọ̀ kàn àti àwọn ẹlẹ́rìí, ohun tí ìwọ fúnra rẹ rí àti gbọ́, ohun tí o ṣe, àti ẹni tí o pè àti ìgbà tí o pè é. Kọ ọ̀rọ̀ gangan tí àwọn ènìyàn sọ sínú àmì ìfàyọ (quotes).",
            "Kọ ọ́ ní kété tí kò bá sí ewu mọ́, nígbà tí o ṣì rántí. Lo \"èmi\" (\"Mo rí\"), gbólóhùn kúkúrú àti orúkọ tó tọ̀nà. Má ṣe fojú díwọ̀n, fi kún un, tàbí yọ nǹkan kúrò. Tí o bá ṣe àṣìṣe, tún un ṣe bí agbanisíṣẹ́ rẹ ṣe sọ; má ṣe yí ìròyìn padà lẹ́yìn náà láti jẹ́ kí ó dára jù bí ó ti rí lọ."
          ],
          steps: ["Ọjọ́, àkókò àti ibi gangan.", "Ta ni: ìwọ, àwọn ènìyàn tí ọ̀rọ̀ kàn, àwọn ẹlẹ́rìí (orúkọ àti bí wọ́n ṣe rí).", "Ohun tí ó ṣẹlẹ̀, ní ìtẹ̀léra àkókò, pẹ̀lú ohun tí ìwọ fúnra rẹ rí àti gbọ́.", "Ohun tí o ṣe àti ẹni tí o pè, pẹ̀lú àkókò.", "Ọ̀rọ̀ gangan nínú àmì ìfàyọ; òtítọ́, kì í ṣe èrò.", "Tún un kà; fọwọ́ sí i bí agbanisíṣẹ́ rẹ ṣe ń béèrè."],
          words: [["Ìròyìn ìṣẹ̀lẹ̀ (incident report)", "àkọsílẹ̀ tí ó dá lórí òtítọ́ nípa ìṣẹ̀lẹ̀ kan bí olè, ìfarapa, ìjà tàbí alamu."], ["Ẹlẹ́rìí", "ẹni tí ó rí tàbí gbọ́ ohun tí ó ṣẹlẹ̀."], ["Òtítọ́ (fact)", "ohun tí ìwọ fúnra rẹ rí, gbọ́ tàbí wọ̀n."], ["Èrò (opinion)", "ohun tí o rò tàbí tí o fojú díwọ̀n, bí \"ó dà bí ẹni tí ó jẹ̀bi\"."]],
          slides: [
            { title: "Ta ló ń ka ìròyìn rẹ?", bullets: ["Ọ̀gá, oníbàárà, ilé-iṣẹ́ insurance, ọlọ́pàá, ilé-ẹjọ́", "Ó gbọ́dọ̀ yé àjèjì, kódà lẹ́yìn oṣù púpọ̀"] },
            { title: "Òtítọ́, kì í ṣe èrò", bullets: ["Kì í ṣe \"ó mutí yó\": ó ń rùn ọtí, ó ń ta gbọ̀ngbọ̀n, ọ̀rọ̀ ń dàrú", "Júwe ènìyàn: ọjọ́ orí, gíga, aṣọ, àpò"] },
            { title: "Ta ni, kí ni, ìgbà wo, ibo, báwo", bullets: ["Ọjọ́, àkókò gangan, ibi gangan", "Àwọn ènìyàn àti ẹlẹ́rìí", "Ohun tí o rí, ohun tí o ṣe àti ẹni tí o pè"] },
            { title: "Kọ ọ́ dáadáa", bullets: ["Ní kété tí kò bá sí ewu mọ́", "Lo \"èmi\", gbólóhùn kúkúrú, ọ̀rọ̀ gangan", "Má yí i padà lẹ́yìn náà kí ó lè dára jù"] }
          ],
          sources: [BSIS_TRAIN],
          tryIt: "Wo ìṣẹ̀lẹ̀ gbangba ìṣẹ́jú 2 èyíkéyìí (òpópónà tí ó kún, ẹnu-ọ̀nà ṣọ́ọ̀bù, tàbí fídíò kúkúrú láìsí ohùn). Lẹ́yìn náà, kọ ìròyìn ìṣẹ̀lẹ̀ àṣeṣe: ọjọ́, àkókò, ibi, àwọn ènìyàn tí a júwe pẹ̀lú òtítọ́, ohun tí ó ṣẹlẹ̀ ní ìtẹ̀léra àkókò, àti ohun tí ìwọ ì bá ṣe àti ẹni tí ìwọ ì bá pè. Fa ìlà sí abẹ́ ọ̀rọ̀ èrò èyíkéyìí, kí o sì tún un kọ bí òtítọ́.",
          youCanNow: "kọ ìròyìn ìṣẹ̀lẹ̀ tí ó dá lórí òtítọ́, tí ó dáhùn ta ni, kí ni, ìgbà wo, ibo àti báwo.",
          quickCheck: [
            { objective: "O4", q: "Gbólóhùn wo ló yẹ nínú ìròyìn ìṣẹ̀lẹ̀?", options: ["Ọkùnrin náà dà bí olè.", "Ó hàn gbangba pé ó ti mutí yó.", "Ní 9:42 p.m., ọkùnrin kan tí ó wọ jákẹ́ẹ̀tì pupa gbìyànjú láti ṣí ilẹ̀kùn ọkọ̀ méjì ní Row C.", "Nǹkan burúkú kan ń ṣẹlẹ̀."], answer: 2, why: "Ó fúnni ní àkókò, ibi, bí ẹni náà ṣe rí àti ohun tí ó ṣe, bí òtítọ́, kì í ṣe èrò." },
            { objective: "O4", q: "Ìgbà wo ni o gbọ́dọ̀ kọ ìròyìn náà?", options: ["Ní ọ̀sẹ̀ tó ń bọ̀", "Ní kété tí kò bá sí ewu mọ́, nígbà tí o ṣì rántí", "Tí ọlọ́pàá bá béèrè nìkan", "Lẹ́yìn tí o bá ti bá gbogbo ènìyàn sọ̀rọ̀ láti fohùn ṣọ̀kan lórí ìtàn kan"], answer: 1, why: "Kíkọ ọ́ ní kíá ń jẹ́ kí àwọn àlàyé wà ní pípé." }
          ]
        },
        {
          title: "Ètò guard card rẹ àti rírí iṣẹ́",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Kọ ètò tí ó ní ọjọ́ láti parí ìdánilẹ́kọ̀ọ́, fi ìwé ìbéèrè guard card sílẹ̀, kí o sì rí iṣẹ́.",
          text: [
            "Yí àwọn ìgbésẹ̀ ìpínlẹ̀ rẹ padà sí ọjọ́. Fún àpẹẹrẹ: ọ̀sẹ̀ 1, wá ilé-ìwé ìdánilẹ́kọ̀ọ́ tí a fọwọ́ sí tàbí agbanisíṣẹ́ tí ó ń kọ́ àwọn olùṣọ́ tuntun; ọ̀sẹ̀ 2, parí ìdánilẹ́kọ̀ọ́ tí ó yẹ ṣáájú káàdì; ọ̀sẹ̀ 3, lọ ṣe ìtẹ̀ka kí o sì fi ìwé ìbéèrè sílẹ̀; lẹ́yìn náà, máa wá iṣẹ́ nígbà tí àjọ náà ń ṣàyẹ̀wò ìwé ìbéèrè rẹ. Ní California, BSIS sọ pé kí o retí nǹkan bí ọ̀sẹ̀ 4 sí 6 fún àyẹ̀wò, ó sì lè pẹ́ jù bẹ́ẹ̀ lọ.",
            "Ọ̀pọ̀ ilé-iṣẹ́ ààbò ń gba ènìyàn síṣẹ́, wọ́n sì ń ràn wọ́n lọ́wọ́ láti parí ìdánilẹ́kọ̀ọ́. Wo àwọn ojú-òpó ìpolówó iṣẹ́, American Job Center tàbí ibùdó ìdàgbàsókè òṣìṣẹ́ àdúgbò rẹ, àti ojú-òpó wẹ́ẹ̀bù àwọn ilé-iṣẹ́. Ṣàyẹ̀wò pé ìpínlẹ̀ rẹ ti fọwọ́ sí ilé-ìwé ìdánilẹ́kọ̀ọ́ náà (California jẹ́ kí o ṣàyẹ̀wò ìwé-àṣẹ lórí ayélujára). Ṣọ́ra fún ẹnikẹ́ni tí ó bá ṣèlérí ìwé-àṣẹ \"tí ó dájú\" (guaranteed).",
            "Résumé rẹ: jẹ́ olóòótọ́. Kí o tó gba ìwé-àṣẹ, kọ \"Completed security officer preparation course; guard card application in progress\" (mo ti parí ẹ̀kọ́ ìmúrasílẹ̀; ìwé ìbéèrè guard card ń lọ lọ́wọ́). Dárúkọ àwọn ọgbọ́n rẹ: kíkọ ìròyìn, iṣẹ́ ìránṣẹ́ fún ènìyàn, ìṣọ́ àyíká, fífara balẹ̀ nígbà ìdààmú. Àwọn ológun tẹ́lẹ̀: ṣàlàyé iṣẹ́ ọlọ́pàá ológun, iṣẹ́ olùṣọ́ tàbí ìṣọ́ ní ọ̀rọ̀ ojoojúmọ́.",
            "Ṣe àṣeṣe ìdáhùn fún ìfọ̀rọ̀wánilẹ́nuwò: \"Báwo ni o ṣe máa bá àlejò tí inú ń bí lò?\" àti \"Kí ni o máa ṣe tí o bá rí olè?\" Lo ohun tí o kọ́: fara balẹ̀, wò kí o sì ròyìn, pe fún ìrànlọ́wọ́, kọ ọ́ sílẹ̀."
          ],
          steps: ["Da àwọn ìgbésẹ̀ guard card ìpínlẹ̀ rẹ kọ láti Ẹ̀kọ́ 2.", "Fi ọjọ́ kan sí ẹ̀gbẹ́ ìgbésẹ̀ kọ̀ọ̀kan.", "Kọ agbanisíṣẹ́ tàbí ilé-ìwé tí a fọwọ́ sí mẹ́ta nítòsí rẹ.", "Kọ ìlà résumé tó jẹ́ òtítọ́ àti ọgbọ́n mẹ́ta.", "Ṣe àṣeṣe ìdáhùn ìfọ̀rọ̀wánilẹ́nuwò méjì sókè."],
          words: [["Ilé-ìwé tí a fọwọ́ sí", "ilé-ìwé ìdánilẹ́kọ̀ọ́ tí ìpínlẹ̀ rẹ gbà láàyè láti kọ́ni ní ìdánilẹ́kọ̀ọ́ olùṣọ́ tí ó yẹ."], ["American Job Center", "ọ́fíìsì ìjọba U.S. ọ̀fẹ́ tí ó ń ṣèrànwọ́ fún wíwá iṣẹ́ àti ìdánilẹ́kọ̀ọ́."], ["Àkókò àyẹ̀wò (processing time)", "bí àjọ náà ṣe máa pẹ́ tó láti ṣàyẹ̀wò ìwé ìbéèrè àti ìtàn ìwà rẹ."]],
          slides: [
            { title: "Ìgbésẹ̀ di ọjọ́", bullets: ["Wá ìdánilẹ́kọ̀ọ́; parí èyí tí ó yẹ ṣáájú káàdì", "Ìtẹ̀ka àti ìwé ìbéèrè", "Máa wá iṣẹ́ nígbà tí o ń dúró"] },
            { title: "Ibi tí o máa wò", bullets: ["Àwọn ilé-iṣẹ́ ààbò tí ó ń kọ́ olùṣọ́ tuntun", "American Job Centers àti ibùdó ìdàgbàsókè òṣìṣẹ́", "Ṣàyẹ̀wò pé ìpínlẹ̀ fọwọ́ sí ilé-ìwé náà"] },
            { title: "Résumé tó jẹ́ òtítọ́", bullets: ["\"Guard card application in progress\" títí wọ́n fi máa fún ọ ní káàdì", "Kíkọ ìròyìn, iṣẹ́ ìránṣẹ́, ìṣọ́ àyíká, ìfarabalẹ̀"] },
            { title: "Àṣeṣe ìfọ̀rọ̀wánilẹ́nuwò", bullets: ["Àlejò tí inú ń bí: ọ̀rọ̀ jẹ́jẹ́, fúnni ní àṣàyàn", "Olè: wò, pè, kọ ọ́ sílẹ̀"] }
          ],
          sources: [BSIS_FACT, BSIS_VERIFY, BLS_GUARDS],
          tryIt: "Ṣe ètò guard card rẹ sórí ojú-ìwé kan: ìgbésẹ̀ kọ̀ọ̀kan láti ojú-òpó ìpínlẹ̀ rẹ pẹ̀lú ọjọ́, agbanisíṣẹ́ tàbí ilé-ìwé tí a fọwọ́ sí mẹ́ta ní àdúgbò rẹ, ìlà résumé tó jẹ́ òtítọ́, àti ìdáhùn rẹ sí ìbéèrè ìfọ̀rọ̀wánilẹ́nuwò méjèèjì. Fi í pọ̀ mọ́ àkọsílẹ̀ àyẹ̀wò rẹ àti ìròyìn àṣeṣe rẹ: èyí ni àpò ìmúrasílẹ̀ rẹ.",
          youCanNow: "kọ ètò tí ó ní ọjọ́ láti gba guard card rẹ àti iṣẹ́, pẹ̀lú ìlà résumé tó jẹ́ òtítọ́.",
          quickCheck: [
            { objective: "O5", q: "O ti parí ẹ̀kọ́ yìí ṣùgbọ́n wọn kò tíì fún ọ ní guard card. Ìlà résumé wo ló jẹ́ òtítọ́?", options: ["\"Licensed security officer\"", "\"Completed security officer preparation course; guard card application in progress\"", "\"Armed guard\"", "\"State certified instructor\""], answer: 1, why: "Ó sọ ohun tí o ti ṣe gan-an láìsọ pé o ní ìwé-àṣẹ tí o kò ní." },
            { objective: "O1", q: "Báwo ni o ṣe lè ṣàyẹ̀wò pé ilé-ìwé ìdánilẹ́kọ̀ọ́ tàbí ìwé-àṣẹ jẹ́ ojúlówó ní California?", options: ["Gba ìpolówó ilé-ìwé náà gbọ́", "Béèrè lórí social media", "Lo ètò ìṣàyẹ̀wò ìwé-àṣẹ ìpínlẹ̀ lórí ayélujára", "Wo àmì ìdámọ̀ (logo) wọn"], answer: 2, why: "Department of Consumer Affairs ti California jẹ́ kí o ṣàyẹ̀wò ìwé-àṣẹ lórí ayélujára." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìjà, pàjáwìrì, ìròyìn àti rírí iṣẹ́",
        questions: [
          { objective: "O3", q: "Àlejò kan tí inú ń bí ń pariwo. Kí ni ìgbésẹ̀ àkọ́kọ́ tí ó dára jù?", options: ["Pariwo padà kí ó lè gbọ́", "Dúró súnmọ́ ọn gan-an", "Gbá apá rẹ̀ mú", "Dúró ní ìjìnnà tí kò léwu, kí o sì sọ̀rọ̀ díẹ̀díẹ̀ pẹ̀lú ìfarabalẹ̀"], answer: 3, why: "Ìjìnnà àti ọ̀rọ̀ jẹ́jẹ́ ń dín ìbínú kù, wọ́n sì ń pa ọ́ mọ́." },
          { objective: "O3", q: "O gbọ́ òórùn èéfín, o sì rí ọwọ́ iná nínú yàrá ìkẹ́rùsí. Kí ló ṣáájú?", options: ["Pe 911 (tàbí nọ́mbà àdúgbò) kí o sì bẹ̀rẹ̀ ètò pàjáwìrì ibi iṣẹ́ náà", "Kọ ìròyìn", "Parí ìṣọ́ rẹ", "Ya fọ́tò fún social media"], answer: 0, why: "Nígbà pàjáwìrì, o máa pe 911 lákọ̀ọ́kọ́, lẹ́yìn náà tẹ̀lé ètò pàjáwìrì." },
          { objective: "O4", q: "Èwo ló jẹ́ òtítọ́, kì í ṣe èrò?", options: ["Ó dà bí ẹni tí ó jẹ̀bi", "Orí rẹ̀ ti dàrú", "Ó sọ pé, \"Kúrò lọ́nà mi\"", "Wọ́n ń gbèrò nǹkan burúkú"], answer: 2, why: "Ọ̀rọ̀ gangan tí o gbọ́ jẹ́ òtítọ́; àwọn tó kù jẹ́ èrò." },
          { objective: "O4", q: "O kíyèsí àṣìṣe kan nínú ìròyìn àná lẹ́yìn tí ọ̀gá rẹ ti kà á. Kí ni o máa ṣe?", options: ["Tún un kọ ní ìkọ̀kọ̀ kí ó lè dára jù", "Tún un ṣe ní gbangba bí agbanisíṣẹ́ rẹ ṣe sọ", "Jù ú nù", "Ní kí alábàáṣiṣẹ́ kan fọwọ́ sí i"], answer: 1, why: "A ń ṣe àtúnṣe ní gbangba ní ọ̀nà agbanisíṣẹ́; yíyí ìròyìn padà ní ìkọ̀kọ̀ ń ba ìgbẹ́kẹ̀lé jẹ́." },
          { objective: "O5", q: "Kí ló yẹ kí ó wà nínú ètò guard card?", options: ["Ọjọ́ fún ìdánilẹ́kọ̀ọ́, ìtẹ̀ka, ìwé ìbéèrè àti ìbéèrè iṣẹ́", "Iṣẹ́ tí o fẹ́ nìkan", "Ìlérí ìwé-àṣẹ tí ó dájú", "Kò sí nǹkankan títí o fi máa rí iṣẹ́"], answer: 0, why: "Ètò tí ó ní ọjọ́ ń yí àwọn ìgbésẹ̀ ìpínlẹ̀ rẹ padà sí ìṣe tí o lè parí." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìmúrasílẹ̀ fún Iṣẹ́ Olùṣọ́ Ààbò (Guard Card)",
    questions: [
      { objective: "O3", q: "Kí ni iṣẹ́ pàtàkì olùṣọ́ ààbò?", options: ["Mú ènìyàn fún gbogbo òfin tí wọ́n bá rú", "Dáàbò bo ènìyàn àti dúkìá nípa jíjẹ́ kí a rí i, wíwò àti ríròyìn", "Ṣèwádìí ẹ̀ṣẹ̀ ní ilé-ẹjọ́", "Kọ ìwé ìtanràn ọkọ̀"], answer: 1, why: "Kókó iṣẹ́ náà ni ààbò tí a rí, wíwò àti ríròyìn." },
      { objective: "O3", q: "Post orders rẹ le ju òfin lọ. Èwo ni o máa tẹ̀lé?", options: ["Òfin nìkan", "Ohunkóhun tí o rò pé ó tọ́", "Ohun tí àlejò béèrè", "Post orders"], answer: 3, why: "Agbanisíṣẹ́ lè ṣe òfin tí ó le jù, o sì gbọ́dọ̀ tẹ̀lé post orders rẹ." },
      { objective: "O1", q: "Ta ló ń fúnni ní guard card ní ọ̀pọ̀ ìpínlẹ̀?", options: ["Àjọ ìjọba ìpínlẹ̀", "Ilé-ìwé ìdánilẹ́kọ̀ọ́ èyíkéyìí", "Ọjà ńlá (mall) àdúgbò", "FBI"], answer: 0, why: "Àjọ ìjọba ìpínlẹ̀ ló ń fúnni ní ìwé-àṣẹ olùṣọ́; ilé-ìwé ń kọ́ni nìkan." },
      { objective: "O1", q: "Ní California, wákàtí mélòó ìdánilẹ́kọ̀ọ́ ọgbọ́n iṣẹ́ olùṣọ́ ni ó gbọ́dọ̀ parí láàárín oṣù 6 àkọ́kọ́?", options: ["Wákàtí 8", "Wákàtí 4", "Wákàtí 32", "Wákàtí 100"], answer: 2, why: "BSIS ń béèrè wákàtí 32 ìdánilẹ́kọ̀ọ́ ọgbọ́n iṣẹ́ láàárín oṣù 6 àkọ́kọ́." },
      { objective: "O1", q: "Kí ni ọjọ́ orí tí ó kéré jù fún registration olùṣọ́ ní California?", options: ["16", "21", "25", "18"], answer: 3, why: "BSIS sọ pé àwọn tí ó ń béèrè gbọ́dọ̀ ti pé ọmọ ọdún 18 ó kéré tán." },
      { objective: "O1", q: "O ní àkọsílẹ̀ ẹ̀ṣẹ̀, o sì ń kún ìwé ìbéèrè guard card. Kí ni o gbọ́dọ̀ ṣe?", options: ["Dáhùn gbogbo ìbéèrè ní òtítọ́, kí o sì wo òfin ìpínlẹ̀ rẹ", "Fi àkọsílẹ̀ náà sílẹ̀", "Lo orúkọ ọ̀rẹ́ rẹ", "Jáwọ́ láìṣàyẹ̀wò"], answer: 0, why: "Ìdáhùn èké lè mú kí wọ́n kọ̀ ọ́; ìpínlẹ̀ kọ̀ọ̀kan ló ń pinnu àkọsílẹ̀ tí ó ṣe pàtàkì." },
      { objective: "O2", q: "Kí ló wà nínú post orders?", options: ["Èrè ilé-iṣẹ́ náà", "Ìtọ́ni ibi iṣẹ́: àkókò, ibi ìṣọ́, òfin ìwọlé, ẹni tí o máa pè", "Ètò àkókò ara rẹ fún ọ̀sẹ̀", "Àkọsílẹ̀ àwọn afurasí"], answer: 1, why: "Post orders ni ìtọ́ni tí a kọ sílẹ̀ fún ibi iṣẹ́ kan pàtó." },
      { objective: "O2", q: "Kí ló yẹ kí ó wà nínú àkọsílẹ̀ kọ̀ọ̀kan nínú ìwé ìṣẹ̀lẹ̀ ojoojúmọ́?", options: ["Èrò rẹ nípa àwọn alábàáṣiṣẹ́", "Ìṣòro nìkan, láìsí àkókò", "Àkókò àti ohun tí o ṣàyẹ̀wò tàbí rí", "Kò sí nǹkankan títí di òpin ìyípadà iṣẹ́"], answer: 2, why: "Ìwé ìṣẹ̀lẹ̀ ń kọ àyẹ̀wò àti ìṣẹ̀lẹ̀ kọ̀ọ̀kan sílẹ̀ pẹ̀lú àkókò." },
      { objective: "O2", q: "Àlejò kan tí kò ní báàjì sọ pé, \"Èmi àti òun la jọ ń bọ̀,\" ó sì rìn wọlé tẹ̀lé òṣìṣẹ́ kan. Kí ni o máa ṣe?", options: ["Jẹ́ kí ó wọlé; ó dà bí ẹni rere", "Pariwo mọ́ ọn", "Fi ibi iṣẹ́ rẹ sílẹ̀ láti tẹ̀lé e", "Dá a dúró pẹ̀lú ọ̀wọ̀ kí o sì ṣàyẹ̀wò ID bí post orders ṣe sọ"], answer: 3, why: "Dídènà tailgating pẹ̀lú ọ̀wọ̀ àti ìdúróṣinṣin ni kókó ṣíṣàkóso ẹnu-ọ̀nà." },
      { objective: "O2", q: "Kí nìdí tí o fi máa sọ ohun tí ó ṣẹlẹ̀ fún olùṣọ́ tí ó tẹ̀lé ọ nígbà ìyípadà iṣẹ́?", options: ["Kí ó lè mọ ohun tí ó ṣí sílẹ̀ àti ohun tí ó yẹ kí ó ṣọ́", "Láti parí iṣẹ́ rẹ ní kùtùkùtù", "Kò pọndandan", "Láti sọ òfófó"], answer: 0, why: "Ìfàlélọ́wọ́ tó dára ń jẹ́ kí ibi iṣẹ́ wà lábẹ́ ìṣọ́ láìsí àlàfo." },
      { objective: "O3", q: "Èwo ló ń ràn lọ́wọ́ láti mú ẹni tí inú ń bí rọlẹ̀?", options: ["Dídúró ní iwájú rẹ̀ gán-ún, ojú kò ojú", "Sísọ̀rọ̀ díẹ̀díẹ̀ àti fífúnni ní àṣàyàn", "Nína ìka sí i", "Dídí ọ̀nà àbájáde"], answer: 1, why: "Ọ̀rọ̀ jẹ́jẹ́ àti àṣàyàn ń dín ìdààmú kù; dídí ọ̀nà àti nína ìka ń mú un pọ̀ sí i." },
      { objective: "O3", q: "Ìgbà wo ni olùṣọ́ lè lo agbára?", options: ["Nígbàkúùgbà tí ẹnìkan bá ṣe àfojúdi", "Láti gba ohunkóhun padà", "Bí òfin àti post orders ṣe gbà láàyè nìkan, nígbà tí ó pọndandan nìkan", "Nígbàkúùgbà tí ọ̀gá kò bá ń wò"], answer: 2, why: "Òfin àti post orders ló ń ṣe ààlà agbára, ó sì gbọ́dọ̀ dúró nígbà tí kò pọndandan mọ́." },
      { objective: "O3", q: "O rí ìjà tí ohun ìjà wà nínú rẹ̀ ní ibi ìgbọ́kọ̀sí. Kí ni o máa kọ́kọ́ ṣe?", options: ["Wọ inú rẹ̀ kí o sì yà wọ́n", "Pe 911 láti ibi tí kò léwu", "Kọ́kọ́ kọ ìròyìn", "Gbà á sílẹ̀ ní fídíò fún social media"], answer: 1, why: "Ohun ìjà túmọ̀ sí pé o máa kọ́kọ́ pe 911, láti ibi tí kò léwu." },
      { objective: "O4", q: "Ta ló lè ka ìròyìn ìṣẹ̀lẹ̀ rẹ?", options: ["Ìwọ nìkan", "Kò sí ẹnìkan", "Ẹbí rẹ nìkan", "Ọ̀gá, oníbàárà, ilé-iṣẹ́ insurance, ọlọ́pàá tàbí ilé-ẹjọ́"], answer: 3, why: "Ọ̀pọ̀ ènìyàn lè lo ìròyìn, nígbà míì lẹ́yìn oṣù púpọ̀." },
      { objective: "O4", q: "Èwo ni àpèjúwe ènìyàn tí ó dára jù nínú ìròyìn?", options: ["Obìnrin, nǹkan bí ọmọ ọdún 40, gíga nǹkan bí ẹsẹ̀ 5 àti ínṣì 5, ẹ̀wù òtútù búlúù, àpò ẹ̀yìn eérú", "Ẹni tí kò ṣeé fọkàn tán", "Ẹnìkan tí ó ṣàjèjì", "Oníjàgídíjàgan"], answer: 0, why: "Ọjọ́ orí, gíga àti aṣọ jẹ́ òtítọ́ tí ó ń ran àwọn ẹlòmíì lọ́wọ́ láti dá ẹni náà mọ̀." },
      { objective: "O4", q: "Àwọn ìbéèrè wo ni ìròyìn gbọ́dọ̀ dáhùn?", options: ["Ìdí tí ẹni náà fi burú", "Èrò rẹ nípa oníbàárà", "Ta ni, kí ni, ìgbà wo, ibo àti báwo", "Ohun tí ọlọ́pàá sọ nìkan"], answer: 2, why: "Ta ni, kí ni, ìgbà wo, ibo àti báwo ló ń ṣe ìròyìn tí ó pé tí ó sì dá lórí òtítọ́." },
      { objective: "O4", q: "Báwo ni o ṣe máa kọ ohun tí ẹnìkan sọ?", options: ["Ṣe àkópọ̀ rẹ̀ pẹ̀lú èrò ara rẹ", "Fi í sílẹ̀", "Jẹ́ kí ó dún bí ẹni pé ó burú jù", "Kọ ọ̀rọ̀ gangan wọn sínú àmì ìfàyọ"], answer: 3, why: "Ọ̀rọ̀ gangan jẹ́ òtítọ́ tí àwọn ẹlòmíì lè gbẹ́kẹ̀lé." },
      { objective: "O5", q: "Ìlà résumé wo ló jẹ́ òtítọ́ kí wọ́n tó fún ọ ní ìwé-àṣẹ?", options: ["\"Guard card application in progress\"", "\"Licensed security professional\"", "\"Armed officer\"", "\"Police officer\""], answer: 0, why: "Ó ṣàlàyé ipò rẹ gan-an láìsọ pé o ní ìwé-àṣẹ." },
      { objective: "O5", q: "Ilé-ìwé kan ṣèlérí ìwé-àṣẹ olùṣọ́ \"tí ó dájú\" láàárín ọjọ́ kan. Kí ni o gbọ́dọ̀ ṣe?", options: ["Sanwó lẹ́sẹ̀kẹsẹ̀", "Wo ojú-òpó àjọ ìpínlẹ̀ àti bóyá wọ́n ti fọwọ́ sí ilé-ìwé náà", "Fi nọ́mbà Social Security rẹ ránṣẹ́ sí wọn nípasẹ̀ text", "Sọ fún àwọn ọ̀rẹ́ rẹ kí wọ́n forúkọ sílẹ̀"], answer: 1, why: "Ìpínlẹ̀ nìkan ló ń fúnni ní ìwé-àṣẹ; wo ojú-òpó ìjọba àti bóyá wọ́n fọwọ́ sí ilé-ìwé náà." },
      { objective: "O5", q: "Nígbà tí àjọ náà ń ṣàyẹ̀wò ìwé ìbéèrè rẹ, kí ni ìgbésẹ̀ ọlọ́gbọ́n nínú ètò rẹ?", options: ["Má ṣe nǹkankan", "Dẹ́kun kíkẹ́kọ̀ọ́", "Máa wá iṣẹ́ kí o sì máa ṣe àṣeṣe ìdáhùn ìfọ̀rọ̀wánilẹ́nuwò", "Bẹ̀rẹ̀ iṣẹ́ láìní ìwé-àṣẹ"], answer: 2, why: "Lílo àkókò ìdúró láti wá iṣẹ́ àti ṣe àṣeṣe ń jẹ́ kí o rí iṣẹ́ kíá." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 5, 6, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún ṣàyẹ̀wò.",
    criteria: [
      { name: "Ìgbésẹ̀ guard card ìpínlẹ̀", objective: "O1", notYet: "Kò ní àjọ náà, àyẹ̀wò ìtàn ìwà tàbí ìdánilẹ́kọ̀ọ́, tàbí ó lo ìpolówó ìdánilẹ́kọ̀ọ́ dípò ojú-òpó ìjọba.", meets: "Ó kọ àjọ náà, ọjọ́ orí, àyẹ̀wò ìtàn ìwà, ìdánilẹ́kọ̀ọ́ ṣáájú àti lẹ́yìn ìwé-àṣẹ, bí a ṣe ń fi ìwé ìbéèrè sílẹ̀, àti àdírẹ́sì ojú-òpó ìjọba.", exceeds: "Ó fi òfin ìsọdọ̀tun kún un, àti bí a ṣe ń ṣàyẹ̀wò ilé-ìwé tàbí ìwé-àṣẹ." },
      { name: "Àkọsílẹ̀ àyẹ̀wò ìṣọ́ àti ẹnu-ọ̀nà", objective: "O2", notYet: "Kò ní àwọn ibi ìṣọ́, òfin ẹnu-ọ̀nà tàbí ìwé ìṣẹ̀lẹ̀.", meets: "Ó bo gbogbo ibi tí post orders àṣeṣe dárúkọ, ó sì ní ìwé ìṣẹ̀lẹ̀ tí ó ní àkókò pẹ̀lú ó kéré tán àkọsílẹ̀ mẹ́rin.", exceeds: "Ó fi ìfàlélọ́wọ́ ìyípadà iṣẹ́ àti ètò fún tailgating kún un." },
      { name: "Káàdì àpò \"wò kí o sì ròyìn\"", objective: "O3", notYet: "Ó ní lílé ènìyàn, agbára tí ó kọjá ìtọ́ni, tàbí kò ní ìgbésẹ̀ pípe 911 lákọ̀ọ́kọ́.", meets: "Ó fi ọ̀rọ̀ jẹ́jẹ́ hàn, ìgbà tí o máa sún sẹ́yìn kí o sì pè, kò sí lílé ènìyàn, àti 911 lákọ̀ọ́kọ́ nígbà pàjáwìrì.", exceeds: "Ó fi àwọn ìgbésẹ̀ ètò pàjáwìrì ibi iṣẹ́ àti ohun tí o máa sọ fún àwọn olùdáhùn kún un." },
      { name: "Ìròyìn ìṣẹ̀lẹ̀ àṣeṣe", objective: "O4", notYet: "Kò yé, ó ní èrò, tàbí kò ní àkókò tàbí ibi.", meets: "Ó dáhùn ta ni, kí ni, ìgbà wo, ibo àti báwo ní ìtẹ̀léra àkókò, pẹ̀lú òtítọ́ àti ọ̀rọ̀ gangan.", exceeds: "Àwọn àpèjúwe pé tó láti jẹ́ kí àjèjì dá àwọn ènìyàn àti ibi mọ̀." },
      { name: "Ètò tí ó ní ọjọ́ àti ìlà résumé", objective: "O5", notYet: "Kò ní ọjọ́, tàbí ó sọ pé ó ní ìwé-àṣẹ tí kò tíì ní.", meets: "Ọjọ́ fún ìgbésẹ̀ kọ̀ọ̀kan, agbanisíṣẹ́ tàbí ilé-ìwé tí a fọwọ́ sí mẹ́ta ní àdúgbò, ìlà résumé tó jẹ́ òtítọ́.", exceeds: "Ó ní ìdáhùn tí a ti ṣe àṣeṣe rẹ̀ sí ìbéèrè ìfọ̀rọ̀wánilẹ́nuwò méjì." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà àti àpò ìmúrasílẹ̀ tí ó yege rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi ìwé ìbéèrè guard card ìpínlẹ̀ sílẹ̀ láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gba guard card tí wọ́n sì gbaṣẹ́ bí olùṣọ́ ààbò (ìwádìí àtẹ̀lé àti ìròyìn àwọn alábàáṣiṣẹ́)",
      "Àwọn agbanisíṣẹ́ alábàáṣiṣẹ́ ròyìn pé ìròyìn ìṣẹ̀lẹ̀ àwọn olùṣọ́ tuntun kò nílò àtúnkọ ní ọjọ́ 90 àkọ́kọ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì fún ojú-òpó ìwé-àṣẹ ìpínlẹ̀",
      "Ìwé àti gègé, tàbí app ìwé ọ̀fẹ́, fún àkọsílẹ̀ àyẹ̀wò, ìwé ìṣẹ̀lẹ̀, ìròyìn àti ètò",
      "Bí o bá fẹ́: ẹ̀dà tí a tẹ̀ jáde ti fact sheet ìpínlẹ̀ rẹ àti àpẹẹrẹ post orders",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀"
    ],
    facilitatorNotes: [
      "Sọ ní kùtùkùtù àti léraléra: ẹ̀kọ́ yìí ń múra àwọn akẹ́kọ̀ọ́ sílẹ̀; àjọ ìpínlẹ̀ ló ń fúnni ní ìwé-àṣẹ, lẹ́yìn ìdánilẹ́kọ̀ọ́ tí a fọwọ́ sí.",
      "Kí kíláàsì tó bẹ̀rẹ̀, ṣí ojú-òpó ìjọba ti ìpínlẹ̀ rẹ, kí o sì mú iye wákàtí ìdánilẹ́kọ̀ọ́, owó àti fọ́ọ̀mù ti àkókò yìí wá; òfin ń yí padà.",
      "Má ṣe kọ́ni ní dídi ènìyàn mú, ṣẹ́kẹ́ṣẹkẹ̀ tàbí ohun ìjà nínú ẹ̀kọ́ yìí; ìwọ̀nyí nílò ìdánilẹ́kọ̀ọ́ tí a fọwọ́ sí ní ojúkojú.",
      "Fún àwọn akẹ́kọ̀ọ́ tí wọ́n ní àkọsílẹ̀ ẹ̀ṣẹ̀, pa á mọ́ ní ìkọ̀kọ̀, kí o sì tọ́ka wọn sí òfin ìpínlẹ̀ àti ètò ìrànlọ́wọ́ òfin fún àwọn tó ń padà sílé; má ṣe ṣèlérí pé wọ́n máa fọwọ́ sí i.",
      "Lo eré ìṣe (role play) fún mímú ìjà rọlẹ̀ pẹ̀lú ọ̀rọ̀ ìdádúró tó yé, kí o sì fi rubric ṣe àmì àpò ìmúrasílẹ̀ ní ìlà kan lẹ́ẹ̀kan."
    ]
  }
};
