"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-phone-repair-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Money figures are examples only, exactly as in the English. No added prices, fees or facts.

const NFPA = { name: "NFPA (Àjọ Ààbò lọ́wọ́ Iná ti Amẹ́ríkà): ààbò bátìrì lithium-ion (àwọn àmì ìkìlọ̀; má ṣe dà á sínú pàǹtí, tún un lò)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const WHO_EWASTE = { name: "Ìwé àlàyé WHO: Pàǹtí ẹ̀rọ (e-waste): tọ́ọ̀nù mílíọ̀nù 62 ní 2022, 22.3% ni a kọ sílẹ̀ pé a tún lò; ewu sísun ún", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };
const NDPC = { name: "Nigeria Data Protection Commission (Àjọ Ààbò Ìsọfúnni Nàìjíríà; Nigeria Data Protection Act 2023)", url: "https://ndpc.gov.ng/" };
const GH_DPC = { name: "Data Protection Commission Ghana (Data Protection Act, 2012, Act 843; àwọn tó ń tọ́jú ìsọfúnni gbọ́dọ̀ forúkọ sílẹ̀)", url: "https://dpc.gov.gh/" };
const KE_ODPC = { name: "Office of the Data Protection Commissioner, Kenya (Ọ́fíìsì Kọmíṣọ́nnà Ààbò Ìsọfúnni, Kẹ́ńyà)", url: "https://www.odpc.go.ke/" };

module.exports = {
  id: "afr-phone-repair-business-yo",
  lang: "yo",
  translationOf: "afr-phone-repair-business",
  category: "Africa: Life and Work",
  name: "Bíbẹ̀rẹ̀ Iṣẹ́ Títún Fóònù Ṣe",
  skills: "Ṣíṣe ibi iṣẹ́ tí kò léwu, Dídi bátìrì lithium mú láìléwu, Wíwá àbùkù àti kíkọ káàdì iṣẹ́, Dídáàbò bo ìsọfúnni oníbàárà, Ṣíṣe iye owó àtúnṣe pẹ̀lú ìdánilójú, Bíbójútó pàǹtí ẹ̀rọ láìléwu",
  outcome: "ṣe iṣẹ́ títún fóònù ṣe kékeré tí kò léwu tí ó sì jẹ́ òótọ́: ṣiṣẹ́ ní ibi iṣẹ́ tí kò léwu, di bátìrì lithium mú láìsí ewu iná, wá àwọn àbùkù tí ó wọ́pọ̀ kí o sì kọ iṣẹ́ kọ̀ọ̀kan sórí káàdì iṣẹ́, dáàbò bo ìsọfúnni gbogbo oníbàárà, ṣe iye owó àtúnṣe pẹ̀lú ìdánilójú tó yé, kí o sì kó bátìrì tó ti kú àti ẹ̀yà tó ti bàjẹ́ dànù láìléwu.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn ọ̀dọ́, àwọn oníṣẹ́ ọwọ́ àti àwọn oníṣòwò kékeré káàkiri Áfíríkà tí wọ́n ń tún fóònù ṣe, tàbí tí wọ́n fẹ́ ṣe é, nínú kíọ́sìkì, ìsọ̀ ọjà tàbí ṣọ́ọ̀bù kékeré: ní Luthuli Avenue ní Nairobi, Computer Village ní Èkó, Circle ní Accra, Adjamé ní Abidjan tàbí Akwa ní Douala.",
    "Orí 1 sọ nípa iṣẹ́ tí kò léwu: ibi iṣẹ́ rẹ àti irinṣẹ́ rẹ, ewu bátìrì lithium, àti bí o ṣe lè wá àbùkù ní ìgbésẹ̀ kọ̀ọ̀kan kí o sì kọ ọ́ sórí káàdì iṣẹ́. Orí 2 sọ nípa òwò náà: dídáàbò bo ìsọfúnni oníbàárà, iye owó àti ìdánilójú, kíkọ fóònù tí wọ́n jí, àti bíbójútó pàǹtí ẹ̀rọ.",
    "Èyí kì í ṣe ẹ̀kọ́ ẹ̀rọ abánáṣiṣẹ́ ní kíkún. Ó ń fún ọ ní àṣà ààbò àti ọgbọ́n òwò tí ó ń pa ìwọ, àwọn oníbàárà rẹ àti ṣọ́ọ̀bù rẹ mọ́, kí ọgbọ́n iṣẹ́ ọwọ́ rẹ lè mú orúkọ rere wá fún ọ. Àpẹẹrẹ lásán ni àwọn iye owó. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan. Ìbéèrè kúkúrú wà lẹ́yìn ẹ̀kọ́ kọ̀ọ̀kan, ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́."
  ],
  finalTask: "Ṣe àpò ìbẹ̀rẹ̀ ṣọ́ọ̀bù rẹ: (1) àkọsílẹ̀ iye owó fún ó kéré tán àtúnṣe márùn-ún tí ó wọ́pọ̀ (fún àpẹẹrẹ ojú-iboju, ihò chaja, bátìrì, sípíkà, ìtúntò software), pẹ̀lú iye ẹ̀yà, owó iṣẹ́, iye owó àti iye ọjọ́ ìdánilójú fún ọ̀kọ̀ọ̀kan; (2) káàdì iṣẹ́ ojú-ewé kan tí o máa lò fún gbogbo fóònù; (3) ìlérí ìsọfúnni oníbàárà tí ó ní ó kéré tán ìlà mẹ́rin; àti (4) káàdì ààbò fún ògiri pẹ̀lú àwọn òfin bátìrì rẹ àti ibi tí bátìrì tó ti kú àti ẹ̀yà tó ti bàjẹ́ máa lọ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́, oníṣẹ́ ọwọ́ àti oníṣòwò kékeré ní àwọn ìlú káàkiri Áfíríkà (Kẹ́ńyà, Nàìjíríà, Gánà, Côte d'Ivoire, Kamẹrúúnù, Sẹ̀nẹ̀gà, Íjíbítì àti àwọn míì) tí wọ́n ń tún fóònù ṣe tàbí tí wọ́n fẹ́ bẹ̀rẹ̀, nígbà púpọ̀ nínú kíọ́sìkì tàbí ìsọ̀ ọjà.",
    startingPoint: "Ọ̀pọ̀ ti kọ́ àwọn àtúnṣe kan lọ́dọ̀ ọ̀rẹ́ tàbí nígbà iṣẹ́ ìkọ́ṣẹ́ (apprenticeship), àwọn kan kò sì tíì kọ́ nǹkan kan. Díẹ̀ ló ní ìlànà ibi iṣẹ́ tí kò léwu, tí wọ́n mọ bí bátìrì lithium tó bàjẹ́ ṣe léwu tó, tí wọ́n ń kọ káàdì iṣẹ́, tí wọ́n ń dáàbò bo ìsọfúnni oníbàárà, tí wọ́n ń ṣe iye owó pẹ̀lú ìdánilójú, tàbí tí wọ́n mọ ibi tí pàǹtí ẹ̀rọ yẹ kí ó lọ.",
    gap: "Iná bátìrì ń jó ṣọ́ọ̀bù, ó sì ń ṣe ènìyàn léṣe; ìsọfúnni oníbàárà tí ó sọnù tàbí tí ó jò síta ń ba ìgbẹ́kẹ̀lé jẹ́; ṣíṣe méfò iye owó ń mú òfò wá; ríra fóònù tí wọ́n jí ń mú wàhálà ọlọ́pàá wá; sísun pàǹtí ẹ̀rọ ń fi májèlé ba ìdílé jẹ́. Àṣà ààbò àti irinṣẹ́ òwò tó rọrùn ń sọ ọgbọ́n iṣẹ́ di òwò tí a gbẹ́kẹ̀ lé tí ó sì máa pẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ iṣẹ́ ẹ̀rọ",
      "Ẹ̀rọ: fóònù Android lásán; ibi kékeré tí a jọ ń lò, tí kì í sábà ní ẹ̀rọ ìpaná",
      "Òfin nípa ààbò ìsọfúnni, ìwé àṣẹ òwò àti pàǹtí ẹ̀rọ yàtọ̀ láti orílẹ̀-èdè sí orílẹ̀-èdè, wọ́n sì ń yí padà: àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò pẹ̀lú àwọn ọ́fíìsì tí a dárúkọ",
      "Ààbò: kò sí iṣẹ́ lórí bátìrì tó wú tàbí tó bàjẹ́ ju yíyọ ọ́ kúrò láìléwu lọ; kò sí sísun pàǹtí ẹ̀rọ",
      "A tún túmọ̀ ẹ̀kọ́ náà sí Faransé àti Lárúbáwá, nítorí náà àwọn àpẹẹrẹ ní ṣọ́ọ̀bù ní àwọn orílẹ̀-èdè tí ń sọ Faransé àti Àríwá Áfíríkà"
    ],
    prerequisites: "Kò sí fún ọgbọ́n ààbò àti ọgbọ́n òwò. Ọgbọ́n àtúnṣe ọwọ́ ń wá láti inú àṣeṣe tàbí iṣẹ́ ìkọ́ṣẹ́."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ṣáájú àti nígbà àtúnṣe èyíkéyìí", action: "ṣe ibi iṣẹ́ tí kò léwu kí o sì di bátìrì lithium mú láìléwu, kí o dá bátìrì tó wú, tó gbóná tàbí tó bàjẹ́ mọ̀", standard: "nípa títẹ̀lé gbogbo òfin tí ó wà lórí káàdì ààbò bátìrì rẹ" },
    { id: "O2", condition: "Tí oníbàárà bá gbé fóònù wá", action: "wá àbùkù tí ó ṣeé ṣe jù pẹ̀lú àyẹ̀wò ìgbésẹ̀-sí-ìgbésẹ̀ kí o sì kọ iṣẹ́ náà sórí káàdì iṣẹ́", standard: "pẹ̀lú àbùkù náà, iye owó tí ẹ fohùn ṣọ̀kan lé lórí àti ìfọwọ́sí oníbàárà ní kíkọ sílẹ̀ kí iṣẹ́ tó bẹ̀rẹ̀" },
    { id: "O3", condition: "Nígbà tí oníbàárà bá fi fóònù sílẹ̀ lọ́dọ̀ rẹ", action: "dáàbò bo ìsọfúnni oníbàárà nípa bíbéèrè pé kí wọ́n ṣe backup, láìjẹ́ pé o ṣe ẹ̀dà, wò tàbí pín fáìlì wọn láéláé", standard: "láìbéèrè PIN tàbí ọ̀rọ̀ aṣínà tí o kò nílò láéláé" },
    { id: "O4", condition: "Tí a bá fún ọ ní iye ẹ̀yà àti àkókò tí àtúnṣe ń gbà", action: "ṣírò iye owó àtúnṣe kí o sì kọ àkọsílẹ̀ iye owó pẹ̀lú òfin ìdánilójú", standard: "tí ó bo ẹ̀yà, owó iṣẹ́ àti ìnáwó ṣọ́ọ̀bù pẹ̀lú èrè, àti ìdánilójú tó yé" },
    { id: "O5", condition: "Nígbà tí o bá ní bátìrì tó ti kú, ojú-iboju tó fọ́ tàbí fóònù tí o fura pé wọ́n jí", action: "yan ìgbésẹ̀ tí kò léwu tí ó sì bófin mu: tọ́jú pàǹtí ẹ̀rọ kí o sì fà á lé olùkójọ lọ́wọ́, kí o sì kọ fóònù tí kò ní ẹ̀rí ẹni tó ni ín", standard: "láìsí sísun, láìsí dídà á nù ní ibikíbi, àti láìsí ríra fóònù tí kò ní ẹ̀rí" }
  ],
  chapters: [
    {
      name: "Orí 1: Iṣẹ́ tí kò léwu àti wíwá àbùkù",
      lessons: [
        {
          title: "Ibi iṣẹ́ àtúnṣe tí kò léwu",
          objectives: ["O1"],
          minutes: 4,
          goal: "Ṣe ibi iṣẹ́ àtúnṣe tí kò léwu, tí ó mọ́, tí ó sì ṣetán fún iṣẹ́.",
          text: [
            "Ibi iṣẹ́ rẹ ni ìjàm̀bá ti ń ṣẹlẹ̀ tàbí ibi tí a ti ń dènà rẹ̀. Ibi iṣẹ́ tó dára gbẹ, ó ní ìmọ́lẹ̀ dáadáa, ó sì jìnnà sí iná ìdáná, epo àti omi. Ó ní ẹní tí ooru kì í jó, àwo kékeré fún skru, àti àyè tó mọ́ kí àwọn ẹ̀yà kéékèèké má bàa sọnù.",
            "Irinṣẹ́: àwọn screwdriver tó tọ́, irinṣẹ́ ìṣísílẹ̀ onílásítíkì (spudger), ẹ̀mú kékeré (tweezers), ife ìfàmọ́ra (suction cup), multimeter, àti ẹ̀rọ atẹ́gùn gbígbóná (hot air) tàbí irin ìsolderi tí o bá ti kọ́ bí a ṣe ń lò wọ́n. Irinṣẹ́ ooru gbọ́dọ̀ wà lórí ìdúró rẹ̀, kì í ṣe lórí ìwé tàbí aṣọ láéláé, kí o sì pa á nígbà tí o bá kúrò ní ibi iṣẹ́.",
            "Dáàbò bo ara rẹ àti fóònù náà: wọ gíláàsì ààbò nígbà tí o bá ń ṣí ojú-iboju tàbí tí o bá ń ṣiṣẹ́ pẹ̀lú gíláàsì, lo okùn ọwọ́ anti-static tàbí fọwọ́ kan irin tí kò ní nǹkan lórí láti tú static sílẹ̀ kí o tó fọwọ́ kan board, kí o sì tọ́jú agolo irin tí ó ní iyanrìn gbígbẹ nítòsí ibi iṣẹ́ fún bátìrì tó bàjẹ́. Mọ ọ̀nà àbájáde ṣọ́ọ̀bù rẹ, kí o sì jẹ́ kí ó wà ní mímọ́."
          ],
          steps: ["Yan ibi tí ó gbẹ, tí ó ní ìmọ́lẹ̀ dáadáa, tí ó jìnnà sí iná ìdáná, epo àti omi.", "Tẹ́ ẹní tí ooru kì í jó àti àwo skru.", "Fi irinṣẹ́ ooru sórí ìdúró rẹ̀ kí o sì pa á nígbà tí o bá kúrò.", "Wọ gíláàsì ààbò; tú static sílẹ̀ kí o tó fọwọ́ kan board.", "Tọ́jú agolo irin tí ó ní iyanrìn gbígbẹ nítòsí ibi iṣẹ́ àti ọ̀nà àbájáde tó mọ́."],
          words: [["Spudger", "irinṣẹ́ onílásítíkì fún ṣíṣí fóònù àti gbígbé àwọn ẹ̀yà sókè láìhá wọn tàbí fa short."], ["Multimeter", "ẹ̀rọ àyẹ̀wò tí ó ń wọn voltage, current àti resistance."], ["Static", "agbára iná kékeré lára rẹ tí ó lè ba board fóònù jẹ́."]],
          slides: [
            { title: "Ibi tí o máa gbé ibi iṣẹ́ rẹ sí", bullets: ["Ó gbẹ, ó sì ní ìmọ́lẹ̀ dáadáa", "Ó jìnnà sí iná ìdáná, epo àti omi", "Ọ̀nà àbájáde ṣọ́ọ̀bù tó mọ́"] },
            { title: "Irinṣẹ́ ìpìlẹ̀", bullets: ["Screwdriver, spudger onílásítíkì, tweezers, suction cup", "Multimeter", "Irinṣẹ́ ooru tí o bá ti kọ́ nìkan; lórí ìdúró rẹ̀ nígbà gbogbo"] },
            { title: "Dáàbò bo ara rẹ àti fóònù", bullets: ["Gíláàsì ààbò fún gíláàsì àti ojú-iboju", "Tú static sílẹ̀ kí o tó fọwọ́ kan board", "Agolo irin tí ó ní iyanrìn gbígbẹ fún bátìrì tó bàjẹ́"] }
          ],
          tryIt: "Ya àwòrán ibi iṣẹ́ rẹ (tàbí èyí tí o fẹ́ ní) lọ́nà tó rọrùn: ibi tí irinṣẹ́ kọ̀ọ̀kan máa wà, ibi tí irinṣẹ́ ooru máa dúró, ibi tí agolo iyanrìn wà, àti ọ̀nà àbájáde. Kọ ohun tí o ṣì nílò láti rà sílẹ̀.",
          youCanNow: "ṣe ibi iṣẹ́ àtúnṣe tí kò léwu tí ó sì mọ́, pẹ̀lú irinṣẹ́ tó tọ́ àti àwọn nǹkan ààbò.",
          quickCheck: [
            { objective: "O1", q: "Níbo ni ẹ̀rọ hot air yẹ kí ó wà nígbà tí o bá gbé e sílẹ̀?", options: ["Lórí òkìtì ìwé", "Lórí fóònù oníbàárà", "Lórí ìdúró rẹ̀, kúrò lọ́dọ̀ aṣọ àti ìwé", "Lórí ilẹ̀"], answer: 2, why: "Ìdúró ń pa orí gbígbóná rẹ̀ mọ́ kúrò lọ́dọ̀ àwọn nǹkan tí ó lè jóná." },
            { objective: "O1", q: "Kí ló dé tí a fi ń tọ́jú agolo irin tí ó ní iyanrìn gbígbẹ nítòsí ibi iṣẹ́?", options: ["Láti tọ́jú skru", "Láti gbé bátìrì tó bàjẹ́ sí láìléwu", "Láti nu ojú-iboju", "Láti wọn ìwúwo ẹ̀yà"], answer: 1, why: "Agolo irin tí ó ní iyanrìn jẹ́ ibi tí kò léwu jù fún bátìrì tó bàjẹ́ ju orí ibi iṣẹ́ tàbí àpótí pàǹtí lọ." }
          ]
        },
        {
          title: "Ewu bátìrì lithium",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dá bátìrì tó wú, tó gbóná tàbí tó bàjẹ́ mọ̀ kí o sì dì í mú láìfa iná.",
          text: [
            "Ó fẹ́rẹ̀ẹ́ jẹ́ pé gbogbo fóònù ló ní bátìrì lithium-ion. Ó ní agbára púpọ̀ nínú. Tí wọ́n bá lu ú, tẹ̀ ẹ́, fọ́ ọ, mú un gbóná jù tàbí fa short, ó lè gbiná kíákíá, ó lè tú èéfín olóró jáde, ó sì lè tún bẹ̀rẹ̀ sí jó lẹ́yìn tí ó dà bí ẹni pé ó ti kú.",
            "Àwọn àmì ìkìlọ̀: wíwú (ẹ̀yìn fóònù tàbí ojú-iboju gbé sókè), ooru, òórùn àjèjì, ariwo bí ìfẹ̀sùn tàbí ìbú, tàbí èéfín. Bátìrì tó wú gbọ́dọ̀ jẹ́ pípààrọ̀, má ṣe tẹ̀ ẹ́ pẹrẹsẹ, má ṣe lu ú, má sì ṣe gba agbára sí i láéláé.",
            "Àṣà ààbò: kọ́kọ́ yọ ìsopọ̀ bátìrì (connector) kí o tó ṣiṣẹ́ lórí board. Má ṣe fi irinṣẹ́ irin yọ bátìrì láéláé; lo irinṣẹ́ onílásítíkì àti ohun ìyọ gúlù tó tọ́, kí o sì lọ díẹ̀díẹ̀. Má ṣe lo ẹ̀rọ hot air nítòsí bátìrì láéláé. Gba agbára sí fóònù pẹ̀lú chaja tó dára nìkan, lórí ilẹ̀ líle, ní ibi tí o ti lè rí wọn.",
            "Tí bátìrì bá bẹ̀rẹ̀ sí ru èéfín tàbí dún bí ìfẹ̀sùn: jẹ́ kí àwọn ènìyàn kúrò níbẹ̀, má sì mí èéfín náà. Tí o bá lè ṣe é láìléwu nìkan, lo ẹ̀mú gígùn láti fi í sínú agolo irin iyanrìn rẹ, níta. Tí iná bá wà tí o kò lè ṣàkóso, kó gbogbo ènìyàn jáde kí o sì pe iléeṣẹ́ panápaná."
          ],
          steps: ["Wò bóyá wíwú, ooru, òórùn, ariwo tàbí èéfín wà kí o tó ṣí fóònù èyíkéyìí.", "Yọ ìsopọ̀ bátìrì kí o tó ṣiṣẹ́ lórí board.", "Lo irinṣẹ́ onílásítíkì, kì í ṣe irin, láti yọ bátìrì; má ṣe tẹ̀ ẹ́ tàbí lu ú láéláé.", "Jẹ́ kí irinṣẹ́ ooru jìnnà sí bátìrì.", "Tí ó bá ru èéfín: jẹ́ kí ènìyàn kúrò, lo ẹ̀mú àti agolo iyanrìn tí ó bá jẹ́ láìléwu nìkan, pe panápaná fún iná."],
          words: [["Bátìrì lithium-ion", "bátìrì tí a ń gba agbára sí nínú fóònù; ó ní agbára púpọ̀, ó sì lè jó tí ó bá bàjẹ́."], ["Bátìrì tó wú", "bátìrì tí ó ti fẹ̀ sókè nítorí pé gáàsì ń kó jọ nínú rẹ̀; ó léwu."], ["Short circuit", "nígbà tí iná mànàmáná bá gba ọ̀nà tí kò tọ́, fún àpẹẹrẹ láti inú irinṣẹ́ irin, tí ó sì fa ooru tàbí iná."]],
          slides: [
            { title: "Ìdí tí bátìrì lithium fi léwu", bullets: ["Ó ní agbára púpọ̀ nínú", "Ìbàjẹ́, ooru tàbí short lè fa iná kíákíá", "Èéfín rẹ̀ jẹ́ májèlé; iná lè tún bẹ̀rẹ̀"] },
            { title: "Àwọn àmì ìkìlọ̀", bullets: ["Wíwú: ẹ̀yìn tàbí ojú-iboju gbé sókè", "Ooru, òórùn àjèjì", "Ariwo ìfẹ̀sùn, ìbú tàbí èéfín"] },
            { title: "Àṣà ààbò", bullets: ["Kọ́kọ́ yọ ìsopọ̀ bátìrì", "Irinṣẹ́ onílásítíkì nìkan; má tẹ̀ ẹ́, má lu ú", "Kò sí irinṣẹ́ ooru nítòsí bátìrì"] },
            { title: "Tí ó bá ru èéfín", bullets: ["Jẹ́ kí ènìyàn kúrò; má mí èéfín náà", "Tí ó bá jẹ́ láìléwu nìkan: ẹ̀mú, sínú agolo iyanrìn, níta", "Iná tí o kò lè ṣàkóso: jáde, pe panápaná"] }
          ],
          sources: [NFPA],
          tryIt: "Kọ káàdì ààbò bátìrì rẹ ní ìlà márùn-ún fún ògiri ṣọ́ọ̀bù rẹ: àwọn àmì ìkìlọ̀, àṣà ààbò, àti ohun tí o máa ṣe tí bátìrì bá ru èéfín. Wá nọ́mbà fóònù iléeṣẹ́ panápaná tó sún mọ́ ọ jù.",
          youCanNow: "dá bátìrì eléwu mọ̀, di bátìrì mú láìléwu nígbà àtúnṣe, kí o sì ṣe ohun tí kò léwu tí ọ̀kan bá bẹ̀rẹ̀ sí ru èéfín.",
          quickCheck: [
            { objective: "O1", q: "Ẹ̀yìn fóònù kan gbé sókè nítorí pé bátìrì ti wú. Kí ni o máa ṣe?", options: ["Tẹ̀ ẹ́ pẹrẹsẹ kí o sì pa fóònù dé", "Gba agbára sí i láti dán an wò", "Lu ú kí gáàsì lè jáde", "Pààrọ̀ rẹ̀, kí o dì í mú dáadáa láìtẹ̀ ẹ́ tàbí lu ú"], answer: 3, why: "Bátìrì tó wú léwu; a gbọ́dọ̀ yọ ọ́ dáadáa kí a sì pààrọ̀ rẹ̀, láìtẹ̀ ẹ́, láìlu ú àti láìgba agbára sí i." },
            { objective: "O1", q: "Kí ni o máa kọ́kọ́ ṣe kí o tó ṣiṣẹ́ lórí board fóònù?", options: ["Yọ ìsopọ̀ bátìrì", "Mú board gbóná", "Gba agbára sí fóònù", "Yọ àwo SIM nìkan"], answer: 0, why: "Yíyọ ìsopọ̀ bátìrì ń dènà short tí ó lè ba board jẹ́ tàbí fa iná." }
          ]
        },
        {
          title: "Wíwá àbùkù àti kíkọ káàdì iṣẹ́",
          objectives: ["O2"],
          minutes: 6,
          goal: "Wá àbùkù tí ó ṣeé ṣe jù pẹ̀lú àyẹ̀wò ìgbésẹ̀-sí-ìgbésẹ̀ kí o sì kọ iṣẹ́ náà sórí káàdì iṣẹ́.",
          text: [
            "Bẹ̀rẹ̀ nípa fífetísílẹ̀. Béèrè lọ́wọ́ oníbàárà ohun tó ṣẹlẹ̀: ó jábọ́, omi wọ̀ ọ́, ó ń lọ́ra, kò gba agbára, kò sí ohùn? Ìgbà wo ló bẹ̀rẹ̀? Lẹ́yìn náà ṣàyẹ̀wò láti ohun tó rọrùn jù dé ohun tó le jù. Ọ̀pọ̀ fóònù tí wọ́n pè ní \"òkú\" kàn nílò chaja tó dára, ihò chaja tó mọ́ tàbí títún software tàn.",
            "Ètò tó rọrùn: (1) wò bóyá ìbàjẹ́, wíwú tàbí àmì omi wà; (2) gbìyànjú chaja àti okùn tí o mọ̀ pé ó dára; (3) nu ihò chaja jẹ́ẹ́jẹ́ pẹ̀lú igi tàbí ohun onílásítíkì; (4) tún un tàn, kí o sì wò bóyá ìṣòro software ni; (5) lẹ́yìn náà nìkan ni kí o ṣí fóònù kí o sì dán àwọn ẹ̀yà wò.",
            "Kí o tó bẹ̀rẹ̀ iṣẹ́ owó èyíkéyìí, kọ káàdì iṣẹ́ kí o sì fi hàn oníbàárà. Ó ń kọ sílẹ̀: ọjọ́, orúkọ àti nọ́mbà fóònù oníbàárà, irú fóònù (model) àti IMEI, ohun tí ó bàjẹ́, ìbàjẹ́ èyíkéyìí tí o rí (ìfọ́, ìwọlé), ohun tí o máa ṣe, iye owó tí ẹ fohùn ṣọ̀kan lé lórí, ọjọ́ tí ẹ retí, àti ìbuwọ́lù oníbàárà tàbí \"bẹ́ẹ̀ ni\" tí a gbà sílẹ̀. Fún oníbàárà ní ẹ̀dà kan tàbí nọ́mbà tíkẹ́ẹ̀tì. Èyí ń dáàbò bo ẹ̀yin méjèèjì.",
            "Àpẹẹrẹ: Kwame ní Accra gba fóònù kan tí \"kò gba agbára\". Ó gbìyànjú okùn tó dára, ó nu ìdọ̀tí kúrò nínú ihò chaja, ó sì gba agbára. Owó ìfọmọ́ kékeré nìkan ló gbà, oníbàárà náà sì ń padà wá fún gbogbo àtúnṣe lẹ́yìn ìyẹn."
          ],
          steps: ["Béèrè ohun tó ṣẹlẹ̀ àti ìgbà tí ó bẹ̀rẹ̀.", "Wò bóyá ìbàjẹ́, wíwú tàbí àmì omi wà.", "Gbìyànjú chaja àti okùn tí o mọ̀ pé ó dára; nu ihò chaja jẹ́ẹ́jẹ́.", "Tún un tàn kí o sì wò bóyá ìṣòro software ni.", "Kọ káàdì iṣẹ́ pẹ̀lú àbùkù, ìbàjẹ́ tí o rí, iye owó àti ọjọ́, kí o sì gba \"bẹ́ẹ̀ ni\" oníbàárà kí o tó ṣí fóònù."],
          words: [["Káàdì iṣẹ́ (job card)", "àkọsílẹ̀ àtúnṣe kan: fóònù, àbùkù, iye owó, ọjọ́ àti ìfohùnṣọ̀kan oníbàárà."], ["IMEI", "nọ́mbà oní-díjíìtì 15 tí ó jẹ́ ti fóònù kan ṣoṣo; tẹ *#06# láti rí i."], ["Àbùkù software", "ìṣòro nínú àwọn ètò fóònù, kì í ṣe nínú àwọn ẹ̀yà rẹ̀; títún un tàn tàbí ìmúdójúìwọ̀n sábà máa ń tún un ṣe."]],
          slides: [
            { title: "Kọ́kọ́ fetí sílẹ̀", bullets: ["Kí ló ṣẹlẹ̀? Ó jábọ́, omi wọ̀ ọ́, ó lọ́ra, kò gba agbára?", "Ìgbà wo ló bẹ̀rẹ̀?", "Ọ̀pọ̀ fóònù \"òkú\" kàn nílò àtúnṣe tó rọrùn"] },
            { title: "Láti èyí tó rọrùn jù dé èyí tó le jù", bullets: ["Wò ó: ìbàjẹ́, wíwú, àmì omi", "Chaja tó dára; nu ihò chaja jẹ́ẹ́jẹ́", "Tún un tàn fún software; lẹ́yìn náà ṣí i kí o dán ẹ̀yà wò"] },
            { title: "Káàdì iṣẹ́", bullets: ["Oníbàárà, irú fóònù, IMEI (tẹ *#06#)", "Àbùkù, ìbàjẹ́ tí o rí, iṣẹ́ tí o máa ṣe", "Iye owó, ọjọ́, \"bẹ́ẹ̀ ni\" oníbàárà; fún un ní ẹ̀dà tàbí tíkẹ́ẹ̀tì"] }
          ],
          tryIt: "Ya káàdì iṣẹ́ tìrẹ sórí ojú-ewé kan pẹ̀lú gbogbo àpótí tí ó wà nínú ẹ̀kọ́ yìí. Kún un fún fóònù àṣeṣe kan (tìrẹ tàbí ti ọ̀rẹ́ kan) pẹ̀lú àbùkù tí o hùmọ̀.",
          youCanNow: "ṣàyẹ̀wò fóònù láti ìdí tó rọrùn jù dé èyí tó le jù kí o sì kọ gbogbo iṣẹ́ sórí káàdì iṣẹ́ kí o tó bẹ̀rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Oníbàárà kan sọ pé fóònù kò gba agbára. Kí ni o máa kọ́kọ́ ṣàyẹ̀wò?", options: ["Pààrọ̀ board", "Chaja àti okùn tí o mọ̀ pé ó dára, àti ihò chaja tó mọ́", "Pààrọ̀ ojú-iboju", "Ta fóònù tuntun fún un"], answer: 1, why: "Bẹ̀rẹ̀ pẹ̀lú àwọn ìdí tó rọrùn jù; okùn tí kò dára tàbí ihò chaja tó dọ̀tí wọ́pọ̀." },
            { objective: "O2", q: "Kí ló dé tí o fi máa kọ ìbàjẹ́ tí o rí, bí igun tó fọ́, sórí káàdì iṣẹ́ kí o tó bẹ̀rẹ̀?", options: ["Kí oníbàárà lè san owó púpọ̀ sí i", "Kò pọndandan", "Láti kún àyè", "Kí ẹnikẹ́ni má bàa dá ọ lẹ́bi lẹ́yìn náà fún ìbàjẹ́ tí ó ti wà tẹ́lẹ̀"], answer: 3, why: "Kíkọ ìbàjẹ́ tí ó ti wà tẹ́lẹ̀ sílẹ̀ ń dáàbò bo ìwọ àti oníbàárà lọ́wọ́ aáwọ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Iṣẹ́ tí kò léwu àti wíwá àbùkù",
        questions: [
          { objective: "O1", q: "Èwo ni àmì ìkìlọ̀ bátìrì eléwu?", options: ["Fóònù náà jẹ́ tuntun", "Wíwú, ooru, òórùn, ìfẹ̀sùn tàbí èéfín", "Bátìrì náà dúdú", "Fóònù náà ní kéèsì"], answer: 1, why: "Wíwú, ooru, òórùn, ariwo àti èéfín ni àwọn àmì ìkìlọ̀." },
          { objective: "O1", q: "Irinṣẹ́ wo ni o yẹ kí o fi yọ bátìrì?", options: ["Irinṣẹ́ onílásítíkì, díẹ̀díẹ̀", "Screwdriver irin", "Ọ̀bẹ ilé ìdáná", "Eyín rẹ"], answer: 0, why: "Irin lè lu bátìrì tàbí fa short; irinṣẹ́ onílásítíkì kò léwu tó bẹ́ẹ̀." },
          { objective: "O1", q: "Bátìrì kan lórí ibi iṣẹ́ rẹ bẹ̀rẹ̀ sí dún bí ìfẹ̀sùn, ó sì ń ru èéfín. Kí ni ìgbésẹ̀ àkọ́kọ́ tó tọ́?", options: ["Fẹ́ atẹ́gùn sí i", "Fi í sínú àpò rẹ", "Jẹ́ kí ènìyàn kúrò kí o sì yẹra fún èéfín náà", "Máa bá iṣẹ́ lọ"], answer: 2, why: "Ààbò ènìyàn ló ṣáájú; èéfín náà jẹ́ májèlé." },
          { objective: "O2", q: "Báwo ni o ṣe lè rí IMEI fóònù kíákíá?", options: ["Lórí chaja", "Lórí káàdì SIM", "Nínú àpò oníbàárà", "Nípa títẹ *#06#"], answer: 3, why: "Títẹ *#06# ń fi IMEI hàn lórí fẹ́rẹ̀ẹ́ gbogbo fóònù." },
          { objective: "O2", q: "Ìgbà wo ni oníbàárà yẹ kí ó fohùn ṣọ̀kan lórí iye owó?", options: ["Kí o tó bẹ̀rẹ̀, ní kíkọ sílẹ̀ lórí káàdì iṣẹ́", "Lẹ́yìn tí o bá parí", "Láéláé", "Nígbà tí wọ́n bá ráhùn"], answer: 0, why: "Fífohùn ṣọ̀kan ṣáájú, ní kíkọ sílẹ̀, ń dènà aáwọ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe òwò tí ó jẹ́ òótọ́ tí kò sì léwu",
      lessons: [
        {
          title: "Dídáàbò bo ìsọfúnni àwọn oníbàárà rẹ",
          objectives: ["O3"],
          minutes: 5,
          goal: "Dáàbò bo ìsọfúnni oníbàárà kọ̀ọ̀kan nígbà tí fóònù wọn wà nínú ṣọ́ọ̀bù rẹ.",
          text: [
            "Fóònù ní ìgbésí ayé ènìyàn nínú: fọ́tò, ọ̀rọ̀ ìránṣẹ́, owó orí fóònù (mobile money), app báńkì àti àwọn nọ́mbà olùbáṣọ̀rọ̀. Àwọn oníbàárà gbẹ́kẹ̀ lé ọ pẹ̀lú rẹ̀. Fọ́tò kan tí ó jò síta tàbí owó mobile money tí wọ́n jí lè ba orúkọ ṣọ́ọ̀bù rẹ jẹ́, ní ọ̀pọ̀ orílẹ̀-èdè ó sì lè rú òfin.",
            "Ṣáájú àtúnṣe: ní kí oníbàárà ṣe backup fóònù wọn tí wọ́n bá lè ṣe é, kí wọ́n sì jáde kúrò nínú app mobile money àti báńkì tàbí kí wọ́n yọ káàdì SIM. Ọ̀pọ̀ àtúnṣe kò nílò kóòdù ìṣí fóònù. Tí o bá nílò rẹ̀ lóòótọ́ láti dán fóònù wò, ní kí oníbàárà ṣí i níwájú rẹ, tàbí kí wọ́n fi kóòdù ìgbà díẹ̀ sí i kí wọ́n sì yí i padà lẹ́yìn náà. Má ṣe béèrè PIN mobile money tàbí báńkì láéláé. Kò sí àtúnṣe kankan tí ó nílò rẹ̀.",
            "Nígbà àtúnṣe àti lẹ́yìn rẹ̀: má ṣe ṣí fọ́tò, ọ̀rọ̀ ìránṣẹ́ tàbí app tí kò sí lára àtúnṣe náà. Má ṣe ṣe ẹ̀dà ohunkóhun, má sì jẹ́ kí àwọn míì máa fọwọ́ kan fóònù. Tọ́jú fóònù sínú àpótí tábìlì tí a tì pa. Ya káàdì iṣẹ́ wẹ́wẹ́ tàbí tọ́jú wọn láìléwu, nítorí wọ́n ní orúkọ àti nọ́mbà.",
            "Àwọn orílẹ̀-èdè ní òfin àti ọ́fíìsì ààbò ìsọfúnni, fún àpẹẹrẹ Office of the Data Protection Commissioner ní Kẹ́ńyà, Nigeria Data Protection Commission, àti Data Protection Commission ní Gánà, níbi tí àwọn òwò tí ó ń tọ́jú ìsọfúnni àdáni gbọ́dọ̀ forúkọ sílẹ̀. Ṣàyẹ̀wò ohun tí ọ́fíìsì orílẹ̀-èdè rẹ ń retí lọ́wọ́ òwò kékeré bí tìrẹ."
          ],
          steps: ["Ní kí oníbàárà ṣe backup fóònù kí wọ́n sì jáde kúrò nínú app owó, tàbí kí wọ́n yọ SIM.", "Má ṣe béèrè kóòdù ìṣí fóònù àyàfi tí o bá nílò rẹ̀ lóòótọ́; jẹ́ kí oníbàárà ṣí i níwájú rẹ.", "Má ṣe béèrè PIN mobile money tàbí báńkì láéláé.", "Ṣí ohun tí àtúnṣe nílò nìkan; má ṣe ẹ̀dà ohunkóhun.", "Ti fóònù àti káàdì iṣẹ́ pa mọ́; ṣàyẹ̀wò òfin ààbò ìsọfúnni orílẹ̀-èdè rẹ."],
          words: [["Ìsọfúnni àdáni", "ìsọfúnni nípa ènìyàn, bí orúkọ, nọ́mbà, fọ́tò àti ọ̀rọ̀ ìránṣẹ́ rẹ̀."], ["Backup", "ẹ̀dà ìsọfúnni fóònù tí a fi pamọ́ sí ibòmíì, kí ohunkóhun má bàa sọnù tí àtúnṣe bá lọ ní ọ̀nà tí kò tọ́."], ["Òfin ààbò ìsọfúnni", "òfin tí ó sọ bí àwọn òwò ṣe gbọ́dọ̀ gbà, tọ́jú àti dáàbò bo ìsọfúnni àdáni ènìyàn."]],
          slides: [
            { title: "Fóònù ní ìgbésí ayé ènìyàn nínú", bullets: ["Fọ́tò, ọ̀rọ̀ ìránṣẹ́, olùbáṣọ̀rọ̀", "Mobile money àti app báńkì", "Jíjò kan lè ba orúkọ rere ṣọ́ọ̀bù rẹ jẹ́"] },
            { title: "Ṣáájú àtúnṣe", bullets: ["Oníbàárà ṣe backup fóònù", "Ó jáde kúrò nínú app owó, tàbí ó yọ SIM", "Kóòdù ìṣí tí ó bá pọndandan nìkan; PIN láéláé"] },
            { title: "Nígbà àtúnṣe àti lẹ́yìn rẹ̀", bullets: ["Ṣí ohun tí àtúnṣe nílò nìkan", "Má ṣe ẹ̀dà nǹkan; ẹlòmíì kò gbọdọ̀ fọwọ́ kan fóònù", "Ti fóònù àti káàdì iṣẹ́ pa mọ́"] },
            { title: "Mọ òfin", bullets: ["Kẹ́ńyà: Office of the Data Protection Commissioner", "Nàìjíríà: Nigeria Data Protection Commission", "Gánà: Data Protection Commission; àwọn míì: ọ́fíìsì tiyín"] }
          ],
          sources: [KE_ODPC, NDPC, GH_DPC],
          tryIt: "Kọ ìlérí ìsọfúnni oníbàárà rẹ: ó kéré tán ìlà kúkúrú mẹ́rin tí o máa fi hàn gbogbo oníbàárà, bí \"A kì í béèrè PIN mobile money rẹ láéláé.\" Kọ orúkọ ọ́fíìsì ààbò ìsọfúnni orílẹ̀-èdè rẹ.",
          youCanNow: "dáàbò bo ìsọfúnni àwọn oníbàárà rẹ ṣáájú, nígbà àti lẹ́yìn àtúnṣe, kí o sì mọ ọ́fíìsì tí ó ń ṣe òfin ní orílẹ̀-èdè rẹ.",
          quickCheck: [
            { objective: "O3", q: "Onímọ̀ ẹ̀rọ kan béèrè PIN mobile money oníbàárà láti \"dán fóònù wò\". Kí ni òótọ́?", options: ["Gbogbo àtúnṣe ló nílò rẹ̀", "Kò burú tí ó bá jẹ́ olóòótọ́", "Kò sí àtúnṣe tí ó nílò rẹ̀; má ṣe béèrè rẹ̀ láéláé", "Fún àtúnṣe ojú-iboju nìkan"], answer: 2, why: "Kò sí àtúnṣe kankan tí ó nílò PIN mobile money tàbí báńkì láéláé." },
            { objective: "O3", q: "Kí ni oníbàárà yẹ kí ó ṣe kí ó tó fi fóònù sílẹ̀, tí ó bá lè ṣe é?", options: ["Fún ọ ní gbogbo ọ̀rọ̀ aṣínà wọn", "Ṣe backup fóònù kí ó sì jáde kúrò nínú app owó", "Fi fóònù sílẹ̀ ní ṣíṣí títí láé", "Pa gbogbo nọ́mbà olùbáṣọ̀rọ̀ wọn rẹ́"], answer: 1, why: "Backup àti jíjáde kúrò nínú app owó ń dáàbò bò wọ́n tí nǹkan bá lọ ní ọ̀nà tí kò tọ́." }
          ]
        },
        {
          title: "Iye owó àtúnṣe, ìdánilójú àti kíkọ fóònù tí wọ́n jí",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Ṣírò iye owó àtúnṣe kí o sì kọ àkọsílẹ̀ iye owó pẹ̀lú òfin ìdánilójú.",
          text: [
            "Iye owó tó tọ́ ń bo nǹkan mẹ́ta, ó sì ń fi èrè sílẹ̀: ẹ̀yà, àkókò rẹ (owó iṣẹ́), àti ìpín kan nínú ìnáwó ṣọ́ọ̀bù rẹ, bí owó ilé, iná mànàmáná, irinṣẹ́ àti dátà. Àpẹẹrẹ (àpẹẹrẹ lásán ni àwọn iye): ojú-iboju jẹ́ NGN 15,000. Owó iṣẹ́ rẹ jẹ́ NGN 4,000, ìpín ìnáwó ṣọ́ọ̀bù rẹ sì jẹ́ NGN 1,000. Ìnáwó: NGN 20,000. Fi èrè NGN 3,000 kún un: iye owó jẹ́ NGN 23,000.",
            "Àwọn ẹ̀yà ní oríṣiríṣi dídára. Sọ fún oníbàárà ní òótọ́ èyí tí o ń lò (original, ẹ̀dà tó dára tàbí ẹ̀dà olówó pọ́ọ́kú) àti iye owó ọ̀kọ̀ọ̀kan. Ẹ̀yà olówó pọ́ọ́kú tí ó bàjẹ́ láàárín ọ̀sẹ̀ kan máa gba orúkọ rere rẹ lọ́wọ́ rẹ.",
            "Ìdánilójú (warranty) ni ìlérí rẹ: tí àtúnṣe kan náà bá bàjẹ́ láàárín iye ọjọ́ kan nítorí iṣẹ́ rẹ tàbí ẹ̀yà náà, o máa tún un ṣe lọ́fẹ̀ẹ́. Kọ iye ọjọ́, àti ohun tí kò bò (jíjábọ́ tuntun, omi, ẹlòmíì tí ó ṣí fóònù). Gbé àkọsílẹ̀ iye owó àti ìdánilójú sí ibi tí oníbàárà ti lè rí wọn.",
            "Kọ fóònù tí ó lè jẹ́ pé wọ́n jí. Má ṣe rà, ṣí (unlock) tàbí tú fóònù palẹ̀ àyàfi tí ẹni tó ń tà á bá fi ẹ̀rí hàn pé tirẹ̀ ni, bí páálí tí IMEI rẹ̀ bá fóònù mu tàbí ìwé ẹ̀rí rírà (receipt). Tí fóònù bá dà bí èyí tí wọ́n jí, má ṣe bá wọn jiyàn; kọ̀ ọ́ pẹ̀lú ọ̀wọ̀. Ní ọ̀pọ̀ orílẹ̀-èdè, ríra ẹrù tí wọ́n jí jẹ́ ẹ̀ṣẹ̀."
          ],
          steps: ["Ṣe àròpọ̀ iye ẹ̀yà, owó iṣẹ́ rẹ àti ìpín ìnáwó ṣọ́ọ̀bù.", "Fi èrè rẹ kún un láti rí iye owó.", "Fi àṣàyàn ẹ̀yà hàn ní òótọ́, pẹ̀lú iye owó ọ̀kọ̀ọ̀kan.", "Kọ iye ọjọ́ ìdánilójú àti ohun tí kò bò.", "Fi àkọsílẹ̀ iye owó hàn; kọ fóònù tí kò ní ẹ̀rí ẹni tó ni ín."],
          words: [["Owó iṣẹ́ (labour)", "owó fún àkókò àti ọgbọ́n rẹ."], ["Ìnáwó ṣọ́ọ̀bù (overhead)", "ìnáwó ṣíṣe ṣọ́ọ̀bù, bí owó ilé, iná, irinṣẹ́ àti dátà, tí a pín sórí gbogbo iṣẹ́."], ["Ìdánilójú (warranty)", "ìlérí ní kíkọ láti tún àbùkù kan náà ṣe lọ́fẹ̀ẹ́ fún àkókò kan."]],
          slides: [
            { title: "Ohun tí iye owó ń bò", bullets: ["Ẹ̀yà + owó iṣẹ́ + ìpín ìnáwó ṣọ́ọ̀bù", "Lẹ́yìn náà fi èrè rẹ kún un", "Àpẹẹrẹ: ìnáwó NGN 20,000 + NGN 3,000 = NGN 23,000"] },
            { title: "Ẹ̀yà ní òótọ́", bullets: ["Original, ẹ̀dà tó dára tàbí ẹ̀dà olówó pọ́ọ́kú", "Sọ èyí tí ó jẹ́ fún oníbàárà, àti iye ọ̀kọ̀ọ̀kan", "Ẹ̀yà olówó pọ́ọ́kú tí ó bàjẹ́ ń ba orúkọ rẹ jẹ́"] },
            { title: "Ìdánilójú rẹ", bullets: ["Àbùkù kan náà, a tún un ṣe lọ́fẹ̀ẹ́ fún iye ọjọ́ kan", "Kò bò: jíjábọ́ tuntun, omi, ẹlòmíì tí ó ṣí i", "Fi àkọsílẹ̀ iye owó àti ìdánilójú hàn"] },
            { title: "Kọ fóònù tí wọ́n jí", bullets: ["Ẹ̀rí: páálí tí IMEI rẹ̀ bá a mu, tàbí receipt", "Kò sí ẹ̀rí: kọ̀ ọ́ pẹ̀lú ọ̀wọ̀", "Ríra ẹrù tí wọ́n jí lè jẹ́ ẹ̀ṣẹ̀"] }
          ],
          tryIt: "Kọ àkọsílẹ̀ iye owó rẹ fún àtúnṣe márùn-ún tí ó wọ́pọ̀: fún ọ̀kọ̀ọ̀kan, iye ẹ̀yà, owó iṣẹ́, ìpín ìnáwó ṣọ́ọ̀bù, èrè, iye owó àti iye ọjọ́ ìdánilójú. Lo owó orílẹ̀-èdè rẹ.",
          youCanNow: "ṣe iye owó àtúnṣe tí ó bo gbogbo ìnáwó rẹ pẹ̀lú èrè, kọ ìdánilójú, kí o sì kọ fóònù tí ó lè jẹ́ pé wọ́n jí.",
          quickCheck: [
            { objective: "O4", q: "Ẹ̀yà GHS 150, owó iṣẹ́ GHS 60, ìpín ìnáwó ṣọ́ọ̀bù GHS 20, èrè GHS 40. Kí ni iye owó?", options: ["GHS 210", "GHS 230", "GHS 150", "GHS 270"], answer: 3, why: "150 + 60 + 20 + 40 = 270." },
            { objective: "O5", q: "Ọ̀dọ́mọkùnrin kan fẹ́ ta fóònù fún ọ ní owó pọ́ọ́kú ṣùgbọ́n kò ní páálí tàbí receipt. Kí ni o máa ṣe?", options: ["Kọ̀ ọ́ pẹ̀lú ọ̀wọ̀", "Rà á kíákíá kí àwọn míì tó rà á", "Kọ́kọ́ ṣí i (unlock) fún un", "Tú u palẹ̀ fún ẹ̀yà"], answer: 0, why: "Láìsí ẹ̀rí ẹni tó ni ín, ó lè jẹ́ pé wọ́n jí fóònù náà; kọ̀ ọ́." }
          ]
        },
        {
          title: "Pàǹtí ẹ̀rọ, bátìrì tó ti kú àti àpò ìbẹ̀rẹ̀ ṣọ́ọ̀bù rẹ",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Tọ́jú bátìrì tó ti kú àti ẹ̀yà tó ti bàjẹ́ láìléwu kí o sì fà wọ́n lé olùkójọ tó tọ́ lọ́wọ́.",
          text: [
            "Fóònù àtijọ́, ojú-iboju, board àti bátìrì jẹ́ pàǹtí ẹ̀rọ (e-waste). Wọ́n ní òjé (lead), mercury àti àwọn májèlé míì nínú. WHO sọ pé sísun pàǹtí ẹ̀rọ ni ọ̀nà tó léwu jù láti bójú tó o, ó sì ń ṣe àwọn ọmọdé àti àwọn aboyún léṣe jù. Ní 2022 ayé ṣe nǹkan bí tọ́ọ̀nù mílíọ̀nù 62 pàǹtí ẹ̀rọ, 22.3% nìkan ni a sì kọ sílẹ̀ pé a kó jọ tí a sì tún lò lọ́nà tó tọ́.",
            "Má ṣe sun pàǹtí ẹ̀rọ láti rí bàbà (copper) láéláé, má sì ṣe ju bátìrì sínú àpótí pàǹtí, iná tàbí gọ́tà láéláé. Fi téèpù di àwọn orí irin (terminals) bátìrì tó ti kú, tọ́jú wọn sínú agolo irin tí a dé tí ó ní iyanrìn gbígbẹ, kúrò lọ́dọ̀ ooru, kí o sì tọ́jú ojú-iboju àti board tó ti bàjẹ́ sínú àpótí ọ̀tọ̀ tí a kọ orúkọ sí.",
            "Fà wọ́n lé olùkójọ pàǹtí ẹ̀rọ tàbí olùtúnlò (recycler) lọ́wọ́. Béèrè lọ́wọ́ ìjọba ìbílẹ̀ tàbí ìjọba ìlú rẹ, àjọ tí ń bójú tó àyíká, tàbí àwọn olùtà fóònù àti ṣọ́ọ̀bù ilé-iṣẹ́ nẹ́tíwọ̀ọ̀kì nípa àwọn olùkójọ tí a fọwọ́ sí ní agbègbè rẹ. Kọ ohun tí o fà lé wọn lọ́wọ́ àti ìgbà tí o ṣe é sílẹ̀.",
            "Báyìí ṣe àpò ìbẹ̀rẹ̀ rẹ: àkọsílẹ̀ iye owó rẹ, káàdì iṣẹ́ rẹ, ìlérí ìsọfúnni rẹ àti káàdì ààbò rẹ pẹ̀lú òfin bátìrì àti ibi tí pàǹtí ẹ̀rọ rẹ máa lọ."
          ],
          steps: ["Fi téèpù di àwọn terminal bátìrì tó ti kú.", "Tọ́jú wọn sínú agolo irin tí a dé tí ó ní iyanrìn gbígbẹ, kúrò lọ́dọ̀ ooru.", "Tọ́jú ojú-iboju àti board tó ti bàjẹ́ sínú àpótí tí a kọ orúkọ sí.", "Béèrè lọ́wọ́ ìjọba ìbílẹ̀ tàbí àjọ àyíká fún olùkójọ tí a fọwọ́ sí.", "Fà wọ́n lé wọn lọ́wọ́ kí o sì kọ ohun tí o fún wọn àti ìgbà tí o ṣe é sílẹ̀. Má ṣe sun tàbí da pàǹtí ẹ̀rọ nù láéláé."],
          words: [["Pàǹtí ẹ̀rọ (e-waste)", "àwọn ẹ̀rọ abánáṣiṣẹ́ àtijọ́ tàbí tó ti bàjẹ́ àti ẹ̀yà wọn, bí fóònù, ojú-iboju, board àti bátìrì."], ["Terminals", "àwọn orí irin bátìrì níbi tí ó ti ń so pọ̀; fífi téèpù dì wọ́n ń dènà short."], ["Olùtúnlò (recycler)", "òwò tí ó ń tú pàǹtí ẹ̀rọ palẹ̀ láìléwu tí ó sì ń gba àwọn ohun èlò padà."]],
          slides: [
            { title: "Pàǹtí ẹ̀rọ jẹ́ májèlé", bullets: ["Òjé (lead), mercury àti àwọn májèlé míì", "Sísun ún ló léwu jù (WHO)", "Ó ń ṣe ọmọdé àti aboyún léṣe jù"] },
            { title: "Tọ́jú u láìléwu", bullets: ["Fi téèpù di terminal bátìrì tó ti kú", "Agolo irin tí a dé tí ó ní iyanrìn gbígbẹ, kúrò lọ́dọ̀ ooru", "Ojú-iboju àti board nínú àpótí tí a kọ orúkọ sí"] },
            { title: "Fà á lé wọn lọ́wọ́", bullets: ["Béèrè lọ́wọ́ ìjọba ìbílẹ̀ tàbí àjọ àyíká", "Lo olùkójọ tàbí olùtúnlò tí a fọwọ́ sí", "Kọ ohun tí o fún wọn àti ìgbà tí o ṣe é sílẹ̀"] },
            { title: "Àpò ìbẹ̀rẹ̀ ṣọ́ọ̀bù rẹ", bullets: ["Àkọsílẹ̀ iye owó pẹ̀lú ìdánilójú", "Káàdì iṣẹ́; ìlérí ìsọfúnni oníbàárà", "Káàdì ààbò: òfin bátìrì àti ètò pàǹtí ẹ̀rọ"] }
          ],
          sources: [WHO_EWASTE, NFPA],
          tryIt: "Ṣe àpò ìbẹ̀rẹ̀ ṣọ́ọ̀bù rẹ, bí a ṣe ṣàlàyé rẹ̀ nínú iṣẹ́ ìkẹyìn. Fi ìlà kan kún káàdì ààbò rẹ tí ó dárúkọ ẹni tí ó máa kó pàǹtí ẹ̀rọ rẹ, tàbí ọ́fíìsì tí o máa béèrè lọ́wọ́ rẹ̀.",
          youCanNow: "tọ́jú pàǹtí ẹ̀rọ kí o sì fà á lé olùkójọ lọ́wọ́ láìléwu, kí o sì ṣe àpò ìbẹ̀rẹ̀ fún ṣọ́ọ̀bù títún fóònù ṣe tí ó jẹ́ òótọ́ tí kò sì léwu.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ọ̀nà tí kò léwu jù láti kó bátìrì fóònù tó ti kú dànù?", options: ["Sun wọ́n", "Jù wọ́n sínú àpótí pàǹtí", "Fi téèpù di terminal, tọ́jú wọn sínú agolo iyanrìn, fún olùkójọ tí a fọwọ́ sí", "Sin wọ́n sínú àgbàlá"], answer: 2, why: "Fífi téèpù dì í, títọ́jú rẹ̀ láìléwu àti olùkójọ tí a fọwọ́ sí ń dènà iná àti ìbàyíkájẹ́." },
            { objective: "O5", q: "Gẹ́gẹ́ bí WHO ti sọ, èwo ni ọ̀nà tó léwu jù láti bójú tó pàǹtí ẹ̀rọ?", options: ["Títọ́jú u sínú àpótí", "Gbígbé e lọ sọ́dọ̀ olùtúnlò", "Kíkọ ọ́ sílẹ̀", "Sísun ún"], answer: 3, why: "WHO sọ pé sísun pàǹtí ẹ̀rọ ni ìṣe tó léwu jù nítorí èéfín olóró rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe òwò tí ó jẹ́ òótọ́ tí kò sì léwu",
        questions: [
          { objective: "O3", q: "Àtúnṣe kan nílò lóòótọ́ pé kí fóònù wà ní ṣíṣí láti dán an wò. Kí ni ọ̀nà tó dára jù?", options: ["Ní kí oníbàárà ṣí i níwájú rẹ, tàbí kí wọ́n fi kóòdù ìgbà díẹ̀ sí i", "Béèrè PIN báńkì wọn", "Méfò kóòdù náà", "Tún fóònù tò (reset) láìbéèrè"], answer: 0, why: "Oníbàárà ṣì ń ṣàkóso kóòdù rẹ̀, kò sì sí PIN owó kankan nínú rẹ̀ láéláé." },
          { objective: "O3", q: "Kí ni o máa ṣe pẹ̀lú àwọn káàdì iṣẹ́ tí ó ní orúkọ àti nọ́mbà àwọn oníbàárà?", options: ["Jù wọ́n sí ojú pópó", "Fi wọ́n sórí ayélujára", "Ti wọ́n pa mọ́ tàbí ya wọ́n wẹ́wẹ́ nígbà tí o kò bá nílò wọn mọ́", "Fún àwọn ṣọ́ọ̀bù míì"], answer: 2, why: "Káàdì iṣẹ́ ní ìsọfúnni àdáni, nítorí náà a gbọ́dọ̀ tọ́jú wọn láìléwu." },
          { objective: "O4", q: "Ìnáwó wo ni àwọn olùtúnṣe tuntun máa ń gbàgbé jù nínú iye owó wọn?", options: ["Ẹ̀yà", "Ìpín wọn nínú ìnáwó ṣọ́ọ̀bù bí owó ilé àti iná", "Ojú-iboju", "Orúkọ oníbàárà"], answer: 1, why: "A gbọ́dọ̀ pín ìnáwó ṣọ́ọ̀bù bí owó ilé, iná àti dátà sórí gbogbo iṣẹ́, bí bẹ́ẹ̀ kọ́ o máa pàdánù owó." },
          { objective: "O4", q: "Kí ni ìdánilójú yẹ kí ó sọ?", options: ["Kò sí nǹkan; kàn rẹ́rìn-ín músẹ́", "Pé gbogbo ìṣòro jẹ́ ọ̀fẹ́ títí láé", "Iye owó nìkan", "Iye ọjọ́, àti ohun tí kò bò"], answer: 3, why: "Ìdánilójú tó yé ń sọ iye ọjọ́ àti àwọn ohun tí kò bò." },
          { objective: "O5", q: "Kí ló dé tí ríra fóònù láìsí ẹ̀rí ẹni tó ni ín fi jẹ́ ìṣòro?", options: ["Ó lè jẹ́ pé wọ́n jí i, ríra ẹrù tí wọ́n jí sì lè jẹ́ ẹ̀ṣẹ̀", "Ó máa ń wọ́n jù nígbà gbogbo", "Fóònù tí kò ní páálí kì í ṣiṣẹ́", "Kì í ṣe ìṣòro"], answer: 0, why: "Láìsí ẹ̀rí, ó lè jẹ́ pé wọ́n jí fóònù náà, èyí sì ń mú wàhálà òfin wá." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Bíbẹ̀rẹ̀ Iṣẹ́ Títún Fóònù Ṣe",
    questions: [
      { objective: "O1", q: "Níbo ni ibi tó dára jù fún ibi iṣẹ́ àtúnṣe rẹ?", options: ["Lẹ́gbẹ̀ẹ́ iná ìdáná", "Ibi tí ó gbẹ, tí ó ní ìmọ́lẹ̀, tí ó jìnnà sí epo àti omi", "Níta nínú òjò", "Lórí agolo epo"], answer: 1, why: "Ibi iṣẹ́ tí ó gbẹ, tí ó ní ìmọ́lẹ̀, tí ó jìnnà sí epo àti omi ni kò léwu jù." },
      { objective: "O1", q: "Kí ni o yẹ kí o wọ̀ nígbà tí o bá ń ṣí ojú-iboju tó fọ́?", options: ["Gíláàsì ààbò", "Kò sí nǹkan pàtàkì", "Ìbọ̀wọ́ irin", "Gíláàsì oòrùn ní alẹ́ nìkan"], answer: 0, why: "Gíláàsì ààbò ń dáàbò bo ojú rẹ lọ́wọ́ èérún gíláàsì." },
      { objective: "O1", q: "Kí ló dé tí o kò gbọdọ̀ lo ẹ̀rọ hot air nítòsí bátìrì láéláé?", options: ["Ó ń fi iná mànàmáná ṣòfò", "Ó ń sọ ojú-iboju di ìdọ̀tí", "Ooru lè mú kí bátìrì gbiná", "Ó ń lọ́ra jù"], answer: 2, why: "Mímú bátìrì lithium gbóná jù lè fa iná." },
      { objective: "O1", q: "Kí ni o KÒ gbọdọ̀ ṣe sí bátìrì tó wú LÁÉLÁÉ?", options: ["Yọ ọ́ dáadáa", "Tọ́jú u sínú agolo iyanrìn", "Sọ fún oníbàárà", "Tẹ̀ ẹ́ pẹrẹsẹ tàbí lu ú"], answer: 3, why: "Títẹ̀ tàbí lílu bátìrì tó wú lè mú kí ó jó." },
      { objective: "O2", q: "Kí ni ètò àyẹ̀wò tó tọ́?", options: ["Kọ́kọ́ ṣí fóònù, lẹ́yìn náà béèrè ìbéèrè", "Àwọn ìdí tó rọrùn jù lákọ̀ọ́kọ́: wò ó, chaja, ihò chaja, tún un tàn, lẹ́yìn náà ṣí i", "Kọ́kọ́ pààrọ̀ board", "Kọ́kọ́ gba owó lọ́wọ́ oníbàárà"], answer: 1, why: "Bíbẹ̀rẹ̀ pẹ̀lú èyí tó rọrùn ń fi àkókò àti owó pamọ́, ó sì ń dènà ṣíṣí fóònù láìnídìí." },
      { objective: "O2", q: "Èwo ló yẹ kí ó wà lórí káàdì iṣẹ́?", options: ["PIN mobile money oníbàárà", "Ọ̀rọ̀ aṣínà báńkì oníbàárà", "Irú fóònù, IMEI, àbùkù, ìbàjẹ́ tí o rí, iye owó àti ọjọ́", "Kọ́kọ́rọ́ ilé oníbàárà"], answer: 2, why: "Káàdì iṣẹ́ ń kọ iṣẹ́ sílẹ̀, kì í ṣe àṣírí bí PIN tàbí ọ̀rọ̀ aṣínà." },
      { objective: "O2", q: "Fóònù kan \"kò gba agbára\". O nu ìdọ̀tí kúrò nínú ihò chaja, ó sì gba agbára. Èló ni o máa gbà?", options: ["Iye owó board tuntun", "Owó kékeré tó tọ́ fún iṣẹ́ tí o ṣe", "Kò sí nǹkan, kí o sì kọ iṣẹ́ ọjọ́ iwájú", "Iye owó fóònù tuntun"], answer: 1, why: "Iye owó tí ó jẹ́ òótọ́ fún iṣẹ́ gidi ń mú ìgbẹ́kẹ̀lé àti oníbàárà tí ń padà wá." },
      { objective: "O2", q: "Kí ló dé tí o fi máa gba \"bẹ́ẹ̀ ni\" oníbàárà kí o tó ṣí fóònù?", options: ["Kí wọ́n lè fohùn ṣọ̀kan lórí iṣẹ́ àti iye owó, èyí tí ó ń dènà aáwọ̀", "Kò pọndandan", "Kí o lè gba owó púpọ̀ sí i lẹ́yìn náà", "Láti mọ PIN wọn"], answer: 0, why: "Ìfohùnṣọ̀kan ní kíkọ sílẹ̀ ń dáàbò bo ẹ̀yin méjèèjì." },
      { objective: "O3", q: "Èwo ni àtúnṣe fóònù kò nílò láéláé?", options: ["Irú fóònù", "Àlàyé àbùkù", "Nọ́mbà fóònù oníbàárà", "PIN mobile money oníbàárà"], answer: 3, why: "Kò sí àtúnṣe kankan tí ó nílò PIN mobile money tàbí báńkì láéláé." },
      { objective: "O3", q: "Nígbà tí o ń tún ojú-iboju ṣe, o rí àkójọ fọ́tò oníbàárà. Kí ni o máa ṣe?", options: ["Ṣí ohun tí àtúnṣe nílò nìkan, má sì wo nǹkan míì", "Wo àwọn fọ́tò náà", "Ṣe ẹ̀dà wọn sí fóònù rẹ", "Fi wọ́n han ọ̀rẹ́ kan"], answer: 0, why: "Bíbọ̀wọ̀ fún àṣírí túmọ̀ sí ṣíṣí ohun tí àtúnṣe nílò nìkan." },
      { objective: "O3", q: "Ọ́fíìsì wo ló ń ṣe òfin ààbò ìsọfúnni ní Nàìjíríà?", options: ["Iléeṣẹ́ panápaná", "Nigeria Data Protection Commission", "Àjọ bọ́ọ̀lù", "Kò sí ọ́fíìsì kankan"], answer: 1, why: "A dá Nigeria Data Protection Commission sílẹ̀ lábẹ́ Nigeria Data Protection Act 2023." },
      { objective: "O3", q: "Níbo ni o yẹ kí o tọ́jú àwọn fóònù tí ó ń dúró de àtúnṣe?", options: ["Lórí káńtà kí ẹnikẹ́ni lè mú wọn", "Nínú àpótí tábìlì tí a tì pa", "Lọ́dọ̀ aládùúgbò", "Níta ṣọ́ọ̀bù"], answer: 1, why: "Títi fóònù pa mọ́ ń dáàbò bo wọ́n àti ìsọfúnni tí ó wà nínú wọn." },
      { objective: "O4", q: "Ẹ̀yà KES 2,500, owó iṣẹ́ KES 800, ìpín ìnáwó ṣọ́ọ̀bù KES 200, èrè KES 500. Kí ni iye owó?", options: ["KES 3,300", "KES 3,500", "KES 4,000", "KES 2,500"], answer: 2, why: "2,500 + 800 + 200 + 500 = 4,000." },
      { objective: "O4", q: "Oníbàárà lè sanwó fún ojú-iboju ẹ̀dà olówó pọ́ọ́kú tàbí original. Kí ni ó jẹ́ òótọ́?", options: ["Sọ ẹ̀yà wo ni, àti iye owó ọ̀kọ̀ọ̀kan, kí o sì jẹ́ kí wọ́n yàn", "Sọ pé ẹ̀dà náà jẹ́ original", "Fi èyí tó wọ́pọ̀ jù sí i kí o sì gba owó original", "Kọ̀ láti sọ"], answer: 0, why: "Àṣàyàn ẹ̀yà tí ó jẹ́ òótọ́ ń mú ìgbẹ́kẹ̀lé wá, ó sì ń dènà ẹ̀dùn ọkàn." },
      { objective: "O4", q: "Èwo ni ìdánilójú àtúnṣe kì í sábà bò?", options: ["Ẹ̀yà kan náà tí ó bàjẹ́ nítorí iṣẹ́ rẹ", "Àbùkù nínú ẹ̀yà tí o fi sí i", "Àṣìṣe rẹ nígbà tí o ń fi í sí i", "Jíjábọ́ tuntun tàbí ìbàjẹ́ omi"], answer: 3, why: "Ìbàjẹ́ tuntun lẹ́yìn àtúnṣe kì í sábà jẹ́ èyí tí ìdánilójú bò; kọ ìyẹn sórí ìdánilójú rẹ." },
      { objective: "O5", q: "Ẹni tó ń tà ní páálí tí IMEI rẹ̀ bá fóònù mu (tẹ *#06#) àti receipt. Kí ni èyí fi hàn?", options: ["Ẹ̀rí pé ó ṣeé ṣe kí fóònù náà jẹ́ tirẹ̀", "Pé wọ́n jí fóònù náà", "Kò fi nǹkan kankan hàn", "Pé ó ti bàjẹ́"], answer: 0, why: "IMEI tí ó bá a mu àti receipt jẹ́ ẹ̀rí ẹni tó ni ín." },
      { objective: "O5", q: "Kí ló dé tí o kò gbọdọ̀ sun board àtijọ́ láti rí bàbà láéláé?", options: ["Bàbà kò ní iye lórí", "Ó ń gba àkókò jù", "Èéfín rẹ̀ jẹ́ májèlé, ó sì ń ṣe ọmọdé àti aboyún léṣe jù", "Kò ní ariwo tó"], answer: 2, why: "Sísun pàǹtí ẹ̀rọ ń tú èéfín olóró jáde, ìṣe tó léwu jù gẹ́gẹ́ bí WHO ti sọ." },
      { objective: "O5", q: "Báwo ni o ṣe máa tọ́jú bátìrì tó ti kú kí wọ́n tó wá kó o?", options: ["Láìdì nínú àpótí tábìlì pẹ̀lú irinṣẹ́", "Pẹ̀lú téèpù lórí terminal, nínú agolo irin tí a dé tí ó ní iyanrìn gbígbẹ, kúrò lọ́dọ̀ ooru", "Nínú korobá omi nínú oòrùn", "Nínú àpò rẹ"], answer: 1, why: "Téèpù àti agolo iyanrìn ń dènà short àti iná." },
      { objective: "O5", q: "Ta ló lè sọ fún ọ nípa àwọn olùkójọ pàǹtí ẹ̀rọ tí a fọwọ́ sí?", options: ["Àwọn oníbàárà rẹ nìkan", "Kò sí ẹnìkan", "Ẹnikẹ́ni tí ń sun pàǹtí lẹ́gbẹ̀ẹ́ ọ̀nà", "Ìjọba ìbílẹ̀ tàbí àjọ àyíká"], answer: 3, why: "Ìjọba ìbílẹ̀ àti àwọn àjọ àyíká mọ àwọn olùkójọ tí a fọwọ́ sí." },
      { objective: "O1", q: "Bátìrì kan bẹ̀rẹ̀ sí jó, o kò sì lè ṣàkóso rẹ̀. Kí ni o máa ṣe?", options: ["Kó gbogbo ènìyàn jáde kí o sì pe iléeṣẹ́ panápaná", "Máa bá àtúnṣe lọ", "Da epo sí i", "Fi ọwọ́ rẹ gbé e"], answer: 0, why: "Iná tí a kò lè ṣàkóso túmọ̀ sí jíjáde àti pípe panápaná." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 4, 5, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe nínú àpò ìbẹ̀rẹ̀ rẹ kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Káàdì ààbò bátìrì", objective: "O1", notYet: "Kò sí káàdì, tàbí ó fo àwọn àmì ìkìlọ̀ tàbí ohun tí a máa ṣe tí bátìrì bá ru èéfín.", meets: "Káàdì náà ṣe àkọsílẹ̀ àwọn àmì ìkìlọ̀, àṣà ààbò àti ohun tí a máa ṣe tí bátìrì bá ru èéfín tàbí jó.", exceeds: "Ó tún fi nọ́mbà iléeṣẹ́ panápaná àti ibi tí agolo iyanrìn wà hàn." },
      { name: "Káàdì iṣẹ́", objective: "O2", notYet: "Káàdì iṣẹ́ kò ní àbùkù, iye owó tàbí ìfohùnṣọ̀kan oníbàárà.", meets: "Ó kọ oníbàárà, irú fóònù, IMEI, àbùkù, ìbàjẹ́ tí a rí, iṣẹ́, iye owó, ọjọ́ àti \"bẹ́ẹ̀ ni\" oníbàárà sílẹ̀.", exceeds: "Ó tún ní nọ́mbà tíkẹ́ẹ̀tì àti àpótí fún ọjọ́ tí ìdánilójú máa parí." },
      { name: "Ìlérí ìsọfúnni oníbàárà", objective: "O3", notYet: "Kò sí ìlérí, tàbí ó béèrè PIN tàbí ọ̀rọ̀ aṣínà.", meets: "Ó kéré tán ìlà mẹ́rin tó yé, pẹ̀lú àìbéèrè PIN owó láéláé àti àìṣe ẹ̀dà nǹkan.", exceeds: "Ó tún dárúkọ ọ́fíìsì ààbò ìsọfúnni orílẹ̀-èdè náà àti bí a ṣe ń tọ́jú káàdì iṣẹ́ láìléwu." },
      { name: "Àkọsílẹ̀ iye owó", objective: "O4", notYet: "Méfò ni àwọn iye owó, tàbí ìṣirò náà kò tọ́.", meets: "Ó kéré tán àtúnṣe márùn-ún, ọ̀kọ̀ọ̀kan pẹ̀lú ẹ̀yà, owó iṣẹ́, ìnáwó ṣọ́ọ̀bù, èrè, iye owó àti iye ọjọ́ ìdánilójú, tí àròpọ̀ wọn sì tọ́.", exceeds: "Ó tún fi àṣàyàn ẹ̀yà (original tàbí ẹ̀dà) àti ohun tí ìdánilójú kò bò hàn." },
      { name: "Pàǹtí ẹ̀rọ àti fóònù tí wọ́n jí", objective: "O5", notYet: "Kò sí ètò, tàbí ètò náà ní sísun tàbí dídà nù nínú.", meets: "A tọ́jú bátìrì àti ẹ̀yà láìléwu, a sì fà wọ́n lé olùkójọ tàbí ọ́fíìsì tí a dárúkọ lọ́wọ́; a kọ fóònù tí kò ní ẹ̀rí.", exceeds: "Ó tún ń kọ ohun tí a fà lé wọn lọ́wọ́ àti ìgbà tí a ṣe é sílẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń lo káàdì iṣẹ́ àti àkọsílẹ̀ iye owó nínú ṣọ́ọ̀bù wọn láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé kò sí iná bátìrì tàbí ẹ̀sùn nípa ìsọfúnni nínú ṣọ́ọ̀bù wọn láàárín ọjọ́ 90",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn fa pàǹtí ẹ̀rọ lé olùkójọ lọ́wọ́ dípò sísun ún tàbí dídà á nù láàárín ọjọ́ 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù lásán tí ó ní ẹ̀rọ ìṣirò (calculator)",
      "Ìwé àti gègé fún àwòrán ibi iṣẹ́, káàdì iṣẹ́, àkọsílẹ̀ iye owó, ìlérí ìsọfúnni àti káàdì ààbò",
      "Tí ó bá ṣeé ṣe, fóònù àtijọ́ kan (tí olùkọ́ ti yọ bátìrì rẹ̀ láìléwu tẹ́lẹ̀) fún àṣeṣe pẹ̀lú káàdì iṣẹ́",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Nínú ètò ọ̀dọ́ tàbí ètò iṣẹ́ ọwọ́: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà orí kan ní ìpàdé kọ̀ọ̀kan; so ẹ̀kọ́ náà pọ̀ mọ́ àṣeṣe ọwọ́ lọ́dọ̀ onímọ̀ ẹ̀rọ tó kúnjú ìwọ̀n.",
      "Má ṣe jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣe àṣeṣe lórí bátìrì tó wú tàbí tó bàjẹ́ láéláé; fi àwòrán hàn wọ́n dípò rẹ̀.",
      "Ṣáájú ẹ̀kọ́ náà, wá àwọn olùkójọ pàǹtí ẹ̀rọ tí a fọwọ́ sí àti ọ́fíìsì ààbò ìsọfúnni tí ó ń sìn agbègbè yín, kí àwọn akẹ́kọ̀ọ́ lè kọ orúkọ gidi.",
      "Má ṣe ní kí àwọn akẹ́kọ̀ọ́ pín PIN tàbí ọ̀rọ̀ aṣínà nínú kíláàsì láéláé.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
