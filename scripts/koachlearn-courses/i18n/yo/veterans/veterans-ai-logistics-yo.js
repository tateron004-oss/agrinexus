"use strict";

// Koach Learn course (Yoruba translation of veterans/veterans-ai-logistics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-logistics-yo",
  lang: "yo",
  translationOf: "veterans-ai-logistics",
  category: "Veterans (military)",
  name: "AI fún Ètò Ìkẹ́rù àti Ìṣiṣẹ́ (Logistics)",
  skills: "Sísọ èdè ẹ̀wọ̀n ìpèsè ti ara ìlú, Mímọ ibi tí AI wúlò nínú logistics, Ṣíṣe ìwé ìṣirò àtúnrà ọjà, Kíkọ àkọ́pẹrẹ ètò ìfijíṣẹ́ pẹ̀lú AI, Ṣíṣàlàyé ètò iṣẹ́ ní ṣókí",
  outcome: "ṣe ìwé ìṣirò àtúnrà ọjà kékeré àti ètò ìfijíṣẹ́ pẹ̀lú ìrànlọ́wọ́ olùrànlọ́wọ́ AI àti spreadsheet ọ̀fẹ́, ṣàyẹ̀wò ìṣirò náà fúnra rẹ, kí o sì ṣàlàyé ètò náà ní ṣókí ní èdè logistics ti ara ìlú.",
  about: [
    "Tí o bá kó ènìyàn, ẹ̀yà ẹ̀rọ, epo, oúnjẹ tàbí ọkọ̀ nínú iṣẹ́ ológun, o ti ṣe logistics tẹ́lẹ̀. Àwọn ilé ìkẹ́rùsí, ilé-iṣẹ́ ọkọ̀ akẹ́rù, ilé-ìwòsàn àti ilé ìtajà orí ayélujára nílò àwọn ọgbọ́n kan náà, wọ́n sì ti ń lo irinṣẹ́ AI láti ṣe ètò báyìí.",
    "Nínú ẹ̀kọ́ yìí, o máa kọ́ àwọn ọ̀rọ̀ ti ara ìlú fún ohun tí o ṣe, o máa rí ibi tí AI wúlò nínú logistics lónìí, o sì máa ṣe irinṣẹ́ gidi méjì: ìwé ìṣirò àtúnrà ọjà àti ètò ìfijíṣẹ́. O máa parí nípa ṣíṣàlàyé ètò náà ní ṣókí, bí o ṣe máa ń ṣe fún ọ̀gá ológun, ṣùgbọ́n ní èdè ti ara ìlú.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. O nílò spreadsheet ọ̀fẹ́ (Google Sheets tàbí Microsoft Excel lórí wẹ́ẹ̀bù) àti olùrànlọ́wọ́ AI ọ̀fẹ́ bí ChatGPT, Microsoft Copilot tàbí Google Gemini. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣe ìwé àlàyé ètò iṣẹ́ ojú-ewé kan fún iṣẹ́ òwò kékeré àròsọ kan (fún àpẹẹrẹ ilé ìfúnni-lóúnjẹ (food bank) tàbí ṣọ́ọ̀bù ẹ̀yà ẹ̀rọ): ìwé ìṣirò ọjà tí ó ní ìpele àtúnrà fún nǹkan márùn-ún, ètò ìfijíṣẹ́ ọ̀sẹ̀ kan tí AI kọ àkọ́pẹrẹ rẹ̀ tí ìwọ sì ṣàyẹ̀wò, ewu mẹ́ta pẹ̀lú ètò àfidípò fún ọ̀kọ̀ọ̀kan, àti ìlà résumé méjì tí ó ṣàpèjúwe iṣẹ́ logistics rẹ nínú ológun ní ọ̀rọ̀ ti ara ìlú.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ológun tẹ́lẹ̀ (veterans) àti àwọn ọmọ ológun tí wọ́n ń kúrò nínú iṣẹ́, tí wọ́n kó ènìyàn, ẹ̀yà ẹ̀rọ, epo, oúnjẹ tàbí ọkọ̀ nígbà iṣẹ́ wọn, tí wọ́n sì fẹ́ iṣẹ́ ti ara ìlú ní ilé ìkẹ́rùsí, ilé-iṣẹ́ ọkọ̀ akẹ́rù, ilé-ìwòsàn, ilé ìfúnni-lóúnjẹ tàbí ilé ìtajà orí ayélujára.",
    startingPoint: "Wọ́n mọ iṣẹ́ ìpèsè, ìrìnnà àti ìtọ́jú ẹ̀rọ dáadáa, wọ́n sì lè lo fóònù tàbí kọ̀mpútà. Ọ̀pọ̀ ń lo ọ̀rọ̀ ológun, wọn kò tíì ṣe ìwé ìṣirò àtúnrà nínú spreadsheet ọ̀fẹ́ rí, wọn kò sì tíì lo AI láti ṣètò àkókò tàbí láti ka dátà.",
    gap: "Àwọn agbanisíṣẹ́ logistics ti ara ìlú ní ọ̀rọ̀ tiwọn àti irinṣẹ́ ètò AI, wọ́n sì nílò ènìyàn tí ó lè ṣàyẹ̀wò ètò AI pẹ̀lú òdiwọ̀n gidi. Àwọn akẹ́kọ̀ọ́ nílò láti sọ èdè ẹ̀wọ̀n ìpèsè ti ara ìlú, ṣe ìwé ìṣirò àtúnrà àti ètò àkókò pẹ̀lú ìrànlọ́wọ́ AI kí wọ́n sì ṣàyẹ̀wò wọn, kí wọ́n sì ṣàlàyé ètò ní ṣókí ní ọ̀nà tó yé.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ń fi ìgbésẹ̀ spreadsheet hàn ní ọ̀kọ̀ọ̀kan",
      "Ẹ̀rọ: kọ̀mpútà ló dára jù fún spreadsheet; irinṣẹ́ ọ̀fẹ́ bí Google Sheets tàbí Microsoft Excel lórí ayélujára",
      "Ìsọfúnni àdáni: iṣẹ́ òwò àròsọ nìkan; kò sí orúkọ oníbàárà tàbí àdírẹ́sì ilé nínú irinṣẹ́ AI gbogbogbò",
      "Àyẹ̀wò ìṣirò: àwọn akẹ́kọ̀ọ́ ń fi ọwọ́ ṣàyẹ̀wò fọ́múlà àti àkókò AI, pẹ̀lú ẹ̀rọ ìṣirò àti app máàpù",
      "Àkókò: ẹ̀kọ́ tí ó tó nǹkan bí ìṣẹ́jú 5 pẹ̀lú àṣeṣe spreadsheet"
    ],
    prerequisites: "Kò sí. Ìrírí díẹ̀ nínú spreadsheet máa ràn ọ́ lọ́wọ́, ṣùgbọ́n kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn iṣẹ́ logistics láti inú iṣẹ́ ológun rẹ", action: "yí ọ̀rọ̀ logistics ológun padà sí àwọn ọ̀rọ̀ ti ara ìlú tí àwọn agbanisíṣẹ́ ń lò", standard: "pẹ̀lú ọ̀rọ̀ márùn-ún tí o yí padà àti orúkọ iṣẹ́ ti ara ìlú méjì tí ó bá a mu" },
    { id: "O2", condition: "Tí a bá fún ọ ní àpẹẹrẹ AI nínú ilé ìkẹ́rùsí àti iṣẹ́ ọkọ̀ akẹ́rù", action: "ṣàpèjúwe ọ̀nà mẹ́rin tí a ń gbà lo AI nínú logistics àti ìpinnu tí ènìyàn ṣì ń ṣe fún ọ̀kọ̀ọ̀kan", standard: "kí o sì dárúkọ nǹkan kan tí ènìyàn gbọ́dọ̀ ṣàyẹ̀wò fún ọ̀kọ̀ọ̀kan" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìlò ojoojúmọ́, lead time àti safety stock fún nǹkan márùn-ún", action: "ṣe spreadsheet tí ó ń ṣírò ìgbà tí o máa tún nǹkan kọ̀ọ̀kan rà", standard: "pẹ̀lú ìlà kan tí o fi ọwọ́ ṣàyẹ̀wò lórí ẹ̀rọ ìṣirò" },
    { id: "O4", condition: "Tí a bá fún ọ ní àwọn ibùdúró, wákàtí, ọkọ̀ àti awakọ̀", action: "lo olùrànlọ́wọ́ AI láti kọ àkọ́pẹrẹ ètò ìfijíṣẹ́ ọ̀sẹ̀ kan, kí o sì ṣàyẹ̀wò rẹ̀ pẹ̀lú òdiwọ̀n gidi", standard: "kí o sì tún gbogbo ìṣòro tí o rí ṣe pẹ̀lú app máàpù àti wákàtí àwọn ibùdúró" },
    { id: "O5", condition: "Tí a bá fún ọ ní tábìlì dátà ìfijíṣẹ́ kékeré kan", action: "lo AI láti wá àwọn àpẹẹrẹ tí ó ń tún ara wọn ṣe, kí o sì fìdí ọ̀kan múlẹ̀ fúnra rẹ pẹ̀lú filter spreadsheet", standard: "kí o sì kọ ohun tó fà á, ojútùú, àti bí o ṣe máa wọ̀n ọ́n" },
    { id: "O6", condition: "Ní lílo ìwé ìṣirò rẹ, ètò àkókò rẹ àti àwọn ewu rẹ", action: "ṣàlàyé ètò iṣẹ́ ní ṣókí ní èdè ti ara ìlú, kí o sì kọ ìlà résumé méjì nípa iṣẹ́ logistics rẹ", standard: "pẹ̀lú ipò nǹkan, ètò, ewu mẹ́ta àti àfidípò fún ọ̀kọ̀ọ̀kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Láti logistics ológun sí ẹ̀wọ̀n ìpèsè ti ara ìlú",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sísọ èdè ẹ̀wọ̀n ìpèsè ti ara ìlú",
          minutes: 5,
          goal: "Yí ọ̀rọ̀ logistics ológun márùn-ún padà sí àwọn ọ̀rọ̀ ti ara ìlú tí àwọn agbanisíṣẹ́ ń lò.",
          text: [
            "Ẹ̀wọ̀n ìpèsè (supply chain) ni gbogbo ìgbésẹ̀ tí ó ń gbé ọjà láti ibi tí a ti ṣe é dé ọ̀dọ̀ ẹni tí ó máa lò ó. Logistics ni apá ṣíṣe ètò àti kíkó nǹkan nínú ẹ̀wọ̀n náà.",
            "Ọ̀pọ̀ ọ̀rọ̀ ológun ní ìbejì ti ara ìlú. Yàrá ìpèsè tàbí ilé ìkẹ́rùsí ni ìṣàkóso ọjà (inventory management). Convoy (ọ̀wọ́ ọkọ̀) ni ìrìnnà tàbí ẹrù (transportation tàbí freight). Motor pool ni ìtọ́jú àwọn ọkọ̀ (fleet maintenance). Ètò ìpèsè Class I sí IX ni ètò ìbéèrè ọjà (demand planning). Ìrìn ìkẹyìn dé ọ̀dọ̀ ẹni tí ó máa lò ó ni a ń pè ní \"last-mile delivery\".",
            "My Next Move for Veterans (mynextmove.org/vets), láti ọ̀dọ̀ U.S. Department of Labor (Ilé-iṣẹ́ Ìjọba Amẹ́ríkà fún Iṣẹ́), ń jẹ́ kí o tẹ iṣẹ́ ológun rẹ kí o sì rí àwọn iṣẹ́ ti ara ìlú tí ó jọ ọ́, bí logistician, alábòójútó ilé ìkẹ́rùsí tàbí dispatcher (olùdarí ọkọ̀)."
          ],
          steps: ["Kọ iṣẹ́ logistics márùn-ún tí o ṣe nínú ológun sílẹ̀.", "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI: \"Yí àwọn iṣẹ́ logistics ológun wọ̀nyí padà sí ọ̀rọ̀ ẹ̀wọ̀n ìpèsè ti ara ìlú.\"", "Wá iṣẹ́ ológun rẹ lórí mynextmove.org/vets.", "Kọ àwọn orúkọ iṣẹ́ ti ara ìlú tí ó bá a mu jù."],
          words: [["Ẹ̀wọ̀n ìpèsè (supply chain)", "gbogbo ìgbésẹ̀ láti ṣíṣe ọjà títí dé ọ̀dọ̀ ẹni tí ó máa lò ó."], ["Inventory (ọjà ní ìpamọ́)", "àwọn nǹkan tí iṣẹ́ òwò kan fi pamọ́ fún títà tàbí lílò."], ["Last-mile delivery", "ìrìn ìkẹyìn tí ó gbé nǹkan dé ọ̀dọ̀ oníbàárà."], ["3PL", "third-party logistics: ilé-iṣẹ́ tí a gbà láti tọ́jú ẹrù àti fi ránṣẹ́ fún iṣẹ́ òwò míì."]],
          slides: [
            { title: "Ẹ̀wọ̀n ìpèsè àti logistics", bullets: ["Ẹ̀wọ̀n ìpèsè: gbogbo ìgbésẹ̀ dé ọ̀dọ̀ ẹni tí ó máa lò ó", "Logistics: apá ṣíṣe ètò àti kíkó nǹkan"] },
            { title: "Láti ológun sí ti ara ìlú", bullets: ["Yàrá ìpèsè = ìṣàkóso ọjà (inventory management)", "Convoy = ìrìnnà tàbí ẹrù (freight)", "Motor pool = ìtọ́jú àwọn ọkọ̀ (fleet maintenance)", "Ètò ìpèsè = ètò ìbéèrè ọjà (demand planning)"] },
            { title: "Wá iṣẹ́ tí ó bá a mu", bullets: ["mynextmove.org/vets (Department of Labor)", "Logistician, alábòójútó ilé ìkẹ́rùsí, dispatcher"] }
          ],
          sources: [{ name: "My Next Move for Veterans (U.S. Department of Labor)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Kọ iṣẹ́ logistics márùn-ún láti inú iṣẹ́ ológun rẹ. Ní kí olùrànlọ́wọ́ AI yí wọn padà sí ọ̀rọ̀ ti ara ìlú, lẹ́yìn náà wá iṣẹ́ ológun rẹ lórí mynextmove.org/vets kí o sì kọ orúkọ iṣẹ́ méjì tí ó bá a mu.",
          youCanNow: "ṣàpèjúwe iṣẹ́ logistics rẹ nínú ológun ní ọ̀rọ̀ tí àwọn agbanisíṣẹ́ ti ara ìlú ń lò.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ẹ̀wọ̀n ìpèsè (supply chain)?", options: ["Àwọn ọkọ̀ akẹ́rù tí ilé-iṣẹ́ kan ní nìkan", "Gbogbo ìgbésẹ̀ láti ṣíṣe ọjà títí dé ọ̀dọ̀ ẹni tí ó máa lò ó", "Ilẹ̀kùn iwájú ilé ìkẹ́rùsí", "Àkọsílẹ̀ nọ́mbà fóònù àwọn olùpèsè"], answer: 1, why: "Ẹ̀wọ̀n ìpèsè ní gbogbo ìgbésẹ̀ nínú, láti ìgbà tí a ṣe ọjà títí dé ọ̀dọ̀ ẹni tí ó máa lò ó." },
            { objective: "O1", q: "Résumé rẹ sọ pé \"Ran the motor pool\". Ọ̀rọ̀ ti ara ìlú wo ni o máa lò?", options: ["Fi í sílẹ̀ bí \"motor pool\"", "\"Mo wa ọkọ̀\"", "\"Mo ṣe nǹkan ọkọ̀\"", "\"Mo ṣàkóso ìtọ́jú àwọn ọkọ̀ (fleet maintenance)\""], answer: 3, why: "Motor pool ológun ló sún mọ́ ìtọ́jú àwọn ọkọ̀ (fleet maintenance) ti ara ìlú jù." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ibi tí AI wúlò nínú logistics",
          minutes: 4,
          goal: "Dárúkọ ọ̀nà mẹ́rin tí a ń gbà lo AI nínú logistics àti àwọn ìpinnu tí ènìyàn ṣì ń ṣe.",
          text: [
            "Àwọn ilé-iṣẹ́ ń lo AI láti sọ àsọtẹ́lẹ̀ ìbéèrè ọjà (méfò iye nǹkan tí àwọn ènìyàn máa nílò), ṣètò ọ̀nà tí ó ń fi epo àti àkókò pamọ́, rí ẹrù tí ó máa pẹ́ dé ní kùtùkùtù, àti dáhùn ìbéèrè àwọn oníbàárà nípa ìfijíṣẹ́.",
            "AI mọ dátà tí a fún un nìkan. Tí dátà bá ti pẹ́, tí kò tọ́ tàbí tí ó bá kù, ètò náà máa ṣàṣìṣe pẹ̀lú. Ìjì, ọ̀nà tí wọ́n tì tàbí ìkánjú àkókò ọdún lè máà sí nínú dátà náà.",
            "Ènìyàn ló ṣì ń ṣe ìpinnu: ṣíṣàyẹ̀wò pé ètò náà bọ́gbọ́n mu, bíbójútó ohun tí kò lọ bí a ti ṣètò, pípa àwọn awakọ̀ àti òṣìṣẹ́ mọ́ láìléwu, àti bíbá àwọn oníbàárà sọ̀rọ̀. Ìdájọ́ yẹn gan-an ni logistics ológun kọ́ ọ."
          ],
          words: [["Àsọtẹ́lẹ̀ (forecast)", "ìméfò tí a fara balẹ̀ ṣe nípa ohun tí ó máa ṣẹlẹ̀, bí iye ọjà tí o máa nílò."], ["Route optimization", "wíwá ètò àti ọ̀nà tí ó dára jù fún ìfijíṣẹ́."], ["Exception (ìyàtọ̀)", "nǹkan tí kò lọ bí a ti ṣètò, bí ọkọ̀ akẹ́rù tí ó pẹ́."]],
          slides: [
            { title: "AI nínú logistics", bullets: ["Àsọtẹ́lẹ̀ ìbéèrè ọjà", "Ṣíṣètò ọ̀nà", "Rírí ẹrù tí ó máa pẹ́", "Dídáhùn ìbéèrè nípa ìfijíṣẹ́"] },
            { title: "Ibi tí AI kò ti lágbára", bullets: ["Ó mọ dátà tí a fún un nìkan", "Dátà àtijọ́ tàbí tí ó kù = ètò tí kò tọ́", "Ìjì àti ọ̀nà tí wọ́n tì lè máà sí níbẹ̀"] },
            { title: "Ènìyàn ṣì ń pinnu", bullets: ["Ṣé ètò náà bọ́gbọ́n mu?", "Bíbójútó àwọn exception", "Ààbò àti àwọn oníbàárà"] }
          ],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI: \"Báwo ni àwọn ilé ìkẹ́rùsí àti ilé-iṣẹ́ ọkọ̀ akẹ́rù ṣe ń lo AI lónìí? Fún mi ní àpẹẹrẹ mẹ́rin ní ọ̀rọ̀ tó rọrùn.\" Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ nǹkan kan tí ènìyàn ṣì gbọ́dọ̀ ṣàyẹ̀wò.",
          youCanNow: "ṣàlàyé ibi tí AI ti ń ràn lọ́wọ́ nínú logistics àti ibi tí a ṣì nílò ìdájọ́ ènìyàn.",
          quickCheck: [
            { objective: "O2", q: "Kí ni àsọtẹ́lẹ̀ ìbéèrè ọjà (demand forecasting)?", options: ["Bíbéèrè gbogbo nǹkan lẹ́ẹ̀kan náà", "Kíka ọjà ní ìparí ọdún", "Ìméfò tí a fara balẹ̀ ṣe nípa iye tí a máa nílò", "Ìròyìn ojú-ọjọ́ fún àwọn awakọ̀"], answer: 2, why: "Àsọtẹ́lẹ̀ ìbéèrè ọjà ń díwọ̀n iye tí a máa nílò, AI sì sábà máa ń ràn lọ́wọ́ láti ṣe é." },
            { objective: "O2", q: "Ètò ọ̀nà AI rán ọkọ̀ akẹ́rù gba ọ̀nà tí wọ́n tì láàárọ̀ yìí. Ta ni ó máa tún un ṣe?", options: ["Ènìyàn tí ó mọ̀ nípa ọ̀nà tí wọ́n tì", "AI máa tún ara rẹ̀ ṣe lẹ́yìn", "Oníbàárà", "Kò sí ẹnìkan; tẹ̀lé ètò náà"], answer: 0, why: "AI mọ dátà tí ó ní nìkan, nítorí náà ènìyàn ló ń bójútó exception bí ọ̀nà tí wọ́n tì." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe ìwé ìṣirò àtúnrà ọjà",
          minutes: 6,
          goal: "Ṣe spreadsheet tí ó ń fi ìgbà tí o máa tún nǹkan kọ̀ọ̀kan rà hàn.",
          text: [
            "Reorder point (ìpele àtúnrà) ni iye ọjà tí ó ń sọ fún ọ pé kí o béèrè sí i kí ó tó tán. Fọ́múlà tó rọrùn ni: ìlò ojoojúmọ́ lọ́nà lead time (iye ọjọ́ tí ẹrù máa gbà kí ó tó dé), pẹ̀lú safety stock (àfikún fún ohun àìròtẹ́lẹ̀).",
            "Àpẹẹrẹ: ilé ìfúnni-lóúnjẹ kan ń lo agolo ẹ̀wà 20 lójúmọ́, ẹrù máa ń gba ọjọ́ 5, ó sì ń fi àfikún 40 pamọ́. Reorder point = 20 x 5 + 40 = 140. Nígbà tí ọjà bá dín kù sí 140, béèrè sí i.",
            "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ láti ṣètò àwọn kọ́lọ́ọ̀mù àti fọ́múlà spreadsheet. Máa fi ọwọ́ dán fọ́múlà náà wò lórí ìlà kan nígbà gbogbo láti rí i dájú pé ó tọ́."
          ],
          steps: ["Ṣí Google Sheet tàbí ìwé Excel tuntun tí kò ní nǹkan.", "Ṣe àwọn kọ́lọ́ọ̀mù: Item, On hand, Daily use, Lead time (days), Safety stock, Reorder point, Order now?", "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún fọ́múlà Reorder point àti fún kọ́lọ́ọ̀mù \"Order now?\" bẹ́ẹ̀ni/bẹ́ẹ̀kọ́.", "Fi nǹkan márùn-ún kún un pẹ̀lú nọ́mbà àròsọ.", "Fi ẹ̀rọ ìṣirò ṣàyẹ̀wò ìlà kan pẹ̀lú ọwọ́."],
          words: [["Reorder point (ìpele àtúnrà)", "iye ọjà tí ó ń sọ fún ọ pé kí o béèrè sí i."], ["Lead time", "iye ọjọ́ tí ẹrù tí o béèrè máa gbà kí ó tó dé."], ["Safety stock", "ọjà àfikún tí a fi pamọ́ fún ohun àìròtẹ́lẹ̀."], ["Fọ́múlà (formula)", "ìṣirò tí spreadsheet ń ṣe fún ọ."]],
          slides: [
            { title: "Reorder point", bullets: ["Ìlò ojoojúmọ́ x lead time + safety stock", "Nígbà tí ọjà bá dé ibẹ̀, béèrè sí i"] },
            { title: "Àpẹẹrẹ: ẹ̀wà ilé ìfúnni-lóúnjẹ", bullets: ["20 lójúmọ́ x ọjọ́ 5 + àfikún 40 = 140", "Ní agolo 140, fi ìbéèrè ránṣẹ́"] },
            { title: "Ṣe é pẹ̀lú ìrànlọ́wọ́ AI", bullets: ["Béèrè fọ́múlà kọ́lọ́ọ̀mù lọ́wọ́ AI", "Fi nǹkan márùn-ún kún un", "Fi ọwọ́ ṣàyẹ̀wò ìlà kan"] }
          ],
          tryIt: "Ṣe ìwé ìṣirò àtúnrà pẹ̀lú nǹkan márùn-ún. Béèrè fọ́múlà lọ́wọ́ olùrànlọ́wọ́ AI, lẹ́yìn náà fi ẹ̀rọ ìṣirò ṣàyẹ̀wò ìlà kan kí o sì tún ohunkóhun tí kò tọ́ ṣe.",
          youCanNow: "ṣe spreadsheet tí ó ń fi ìgbà tí ó yẹ kí o tún nǹkan kọ̀ọ̀kan rà hàn.",
          quickCheck: [
            { objective: "O3", q: "Kí ni safety stock?", options: ["Ọjà tí ó ti bàjẹ́", "Ọjà tí a tà ní ẹ̀dínwó", "Ọjà tí a tì pa sínú àpótí irin", "Ọjà àfikún tí a fi pamọ́ fún ohun àìròtẹ́lẹ̀"], answer: 3, why: "Safety stock ń bo ohun àìròtẹ́lẹ̀ bí ẹrù tí ó pẹ́ dé tàbí ìbéèrè tí ó pọ̀ sí i." },
            { objective: "O3", q: "Ìlò ojoojúmọ́ 5, lead time ọjọ́ 6, safety stock 10. Kí ni reorder point?", options: ["21", "40", "60", "11"], answer: 1, why: "Ìlò ojoojúmọ́ lọ́nà lead time (5 x 6 = 30) pẹ̀lú safety stock (10) jẹ́ 40." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Láti logistics ológun sí ẹ̀wọ̀n ìpèsè ti ara ìlú",
        questions: [
          { objective: "O1", q: "Convoy ológun sún mọ́ ọ̀rọ̀ ti ara ìlú wo jù?", options: ["Owó oṣù òṣìṣẹ́ (payroll)", "Ìpolówó ọjà (marketing)", "Ìrìnnà tàbí ẹrù (freight)", "Ọ̀rọ̀ òṣìṣẹ́ (human resources)"], answer: 2, why: "Kíkó ẹrù pẹ̀lú ọkọ̀ ni ìrìnnà tàbí ẹrù (freight)." },
          { objective: "O1", q: "Kí ni last-mile delivery?", options: ["Ìrìn ìkẹyìn dé ọ̀dọ̀ oníbàárà", "Máìlì àkọ́kọ́ ìrìn kan", "Ìdíje eré sísá", "Ilé iṣẹ́ ẹ̀rọ"], answer: 0, why: "Òun ni apá ìkẹyìn dé ọ̀dọ̀ ẹni tí ó máa lo nǹkan náà." },
          { objective: "O2", q: "Kí ló dé tí ètò ọ̀nà AI fi lè ṣàṣìṣe?", options: ["Ọkọ̀ akẹ́rù kì í bàjẹ́ láéláé", "AI máa ń tọ̀nà nígbà gbogbo", "Máàpù kì í yí padà láéláé", "AI mọ dátà tí a fún un nìkan"], answer: 3, why: "Dátà tí ó kù tàbí tí ó ti pẹ́ máa ń mú ètò tí kò tọ́ wá." },
          { objective: "O3", q: "Ìlò ojoojúmọ́ 10, lead time ọjọ́ 4, safety stock 20. Kí ni reorder point?", options: ["14", "34", "40", "60"], answer: 3, why: "10 x 4 + 20 = 60." },
          { objective: "O3", q: "Lẹ́yìn tí AI bá kọ fọ́múlà spreadsheet fún ọ, o yẹ kí o:", options: ["Má ṣe wò ó láéláé", "Fi ọwọ́ ṣàyẹ̀wò ìlà kan", "Pa ìwé ìṣirò náà rẹ́", "Pín in láìṣàyẹ̀wò"], answer: 1, why: "Àyẹ̀wò pẹ̀lú ọwọ́ ń fi hàn pé fọ́múlà náà tọ́." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣètò àti ṣíṣàlàyé iṣẹ́ ní ṣókí",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkọ àkọ́pẹrẹ ètò ìfijíṣẹ́ pẹ̀lú AI",
          minutes: 5,
          goal: "Lo olùrànlọ́wọ́ AI láti kọ àkọ́pẹrẹ ètò ìfijíṣẹ́ ọ̀sẹ̀ kan, kí o sì ṣàyẹ̀wò rẹ̀ pẹ̀lú òdiwọ̀n gidi.",
          text: [
            "Ètò ìfijíṣẹ́ ń sọ ẹni tí ó ń lọ sí ibo, ìgbà wo, pẹ̀lú kí ni. AI lè kọ àkọ́pẹrẹ rẹ̀ kíákíá tí o bá fún un ní òtítọ́: àwọn ibùdúró, wákàtí ìṣílẹ̀kùn, iye ọkọ̀ àti awakọ̀, wákàtí iṣẹ́ awakọ̀, àti ohun tí ibùdúró kọ̀ọ̀kan nílò.",
            "Lẹ́yìn náà, ṣàyẹ̀wò rẹ̀ bí ètò convoy. Ṣé àkókò ìrìn bọ́gbọ́n mu lórí máàpù gidi? Ṣé àwọn awakọ̀ ń rí ìsinmi? Ṣé ibùdúró kankan ń gba ẹrù nígbà tí ó ti tì?",
            "Lo dátà àròsọ tàbí dátà tí kò léwu fún iṣẹ́ òwò nìkan. Má ṣe fi orúkọ oníbàárà, àdírẹ́sì ilé tàbí ohunkóhun tí agbanisíṣẹ́ rẹ kò fọwọ́ sí fún irinṣẹ́ AI sínú rẹ̀."
          ],
          steps: ["Kọ àwọn ibùdúró, wákàtí, ọkọ̀, awakọ̀ àti ohun tí ibùdúró kọ̀ọ̀kan nílò sílẹ̀.", "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI: \"Ṣe ètò ìfijíṣẹ́ ọ̀sẹ̀ kan ní tábìlì pẹ̀lú àwọn òdiwọ̀n wọ̀nyí.\"", "Ṣàyẹ̀wò àkókò ìrìn lórí app máàpù.", "Ṣàyẹ̀wò ìsinmi, wákàtí ìṣílẹ̀kùn àti àyè inú ọkọ̀.", "Tún ètò náà ṣe kí o sì fi í pamọ́ lẹ́gbẹ̀ẹ́ ìwé ìṣirò ọjà rẹ."],
          words: [["Ètò ìfijíṣẹ́ (delivery schedule)", "ètò ẹni tí ó ń gbé kí ni lọ, sí ibo àti ìgbà wo."], ["Òdiwọ̀n (constraint)", "ààlà tí ètò náà gbọ́dọ̀ tẹ̀lé, bí wákàtí ìṣílẹ̀kùn tàbí wákàtí iṣẹ́ awakọ̀."]],
          slides: [
            { title: "Fún AI ní òtítọ́", bullets: ["Àwọn ibùdúró àti wákàtí ìṣílẹ̀kùn", "Ọkọ̀ àti awakọ̀", "Ohun tí ibùdúró kọ̀ọ̀kan nílò"] },
            { title: "Ṣàyẹ̀wò rẹ̀ bí ètò convoy", bullets: ["Àkókò ìrìn gidi lórí máàpù", "Ìsinmi awakọ̀", "Kò sí ìfijíṣẹ́ sí ibùdúró tí ó ti tì"] },
            { title: "Dáàbò bo dátà", bullets: ["Dátà àròsọ tàbí èyí tí a fọwọ́ sí nìkan", "Kò sí orúkọ oníbàárà tàbí àdírẹ́sì ilé"] }
          ],
          tryIt: "Fún ilé ìfúnni-lóúnjẹ àròsọ kan tí ó ní ibùdúró oúnjẹ mẹ́ta àti ọkọ̀ bọ́ọ̀sì kékeré (van) kan, béèrè ètò ìfijíṣẹ́ ọ̀sẹ̀ kan ní tábìlì lọ́wọ́ olùrànlọ́wọ́ AI. Ṣàyẹ̀wò rẹ̀ lórí app máàpù kí o sì tún ìṣòro kan tí o rí ṣe.",
          youCanNow: "kọ àkọ́pẹrẹ ètò ìfijíṣẹ́ pẹ̀lú AI kí o sì ṣàyẹ̀wò rẹ̀ pẹ̀lú òdiwọ̀n ayé gidi.",
          quickCheck: [
            { objective: "O4", q: "Kí ni òdiwọ̀n (constraint) nínú ètò ìfijíṣẹ́?", options: ["Ààlà tí ètò náà gbọ́dọ̀ tẹ̀lé, bí wákàtí ìṣílẹ̀kùn", "Owó ẹ̀bùn fún àwọn awakọ̀", "Ibùdúró àfikún", "Irú ọkọ̀ akẹ́rù kan"], answer: 0, why: "Òdiwọ̀n ni àwọn ààlà bí wákàtí, ọkọ̀ àti awakọ̀ tí ètò náà gbọ́dọ̀ bọ̀wọ̀ fún." },
            { objective: "O4", q: "Ètò AI sọ pé ìrìn máìlì 40 máa gba ìṣẹ́jú 15. Kí ni o máa ṣe?", options: ["Gbà á gbọ́", "Yọ ibùdúró náà kúrò", "Ṣàyẹ̀wò àkókò náà lórí app máàpù kí o sì tún ètò náà ṣe", "Sọ fún awakọ̀ pé kí ó yára sí i"], answer: 2, why: "O máa ń fi app máàpù ṣàyẹ̀wò àkókò ìrìn AI, o sì máa ń tún ohunkóhun tí kò bọ́gbọ́n mu ṣe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rírí ìṣòro nínú dátà iṣẹ́",
          minutes: 5,
          goal: "Lo AI láti ṣàkópọ̀ tábìlì dátà kékeré kan, kí o sì fìdí ohun tí ó rí múlẹ̀ fúnra rẹ.",
          text: [
            "Àwọn ẹgbẹ́ iṣẹ́ ń wo dátà lójoojúmọ́: ìfijíṣẹ́ tí ó pẹ́, nǹkan tí ó ń tán, ẹrù tí ó bàjẹ́. AI lè ṣàkópọ̀ tábìlì kan kí ó sì tọ́ka sí àwọn àpẹẹrẹ tí ó ń tún ara wọn ṣe, bí \"Ìfijíṣẹ́ ọjọ́ Ìṣẹ́gun ló máa ń pẹ́ jù.\"",
            "Ṣe ohun tí AI rí bí ìròyìn ọgbọ́n ológun (intel): ó wúlò, ṣùgbọ́n fìdí rẹ̀ múlẹ̀ kí o tó gbé ìgbésẹ̀. To spreadsheet náà tàbí lo filter fúnra rẹ láti rí bóyá àpẹẹrẹ náà jẹ́ òótọ́.",
            "Nígbà tí o bá rí ìṣòro gidi kan, kọ ohun tí o rò pé ó fà á, ojútùú kan, àti bí o ṣe máa mọ̀ pé ojútùú náà ṣiṣẹ́."
          ],
          steps: ["Ṣe tábìlì kékeré: ọjọ́, ibùdúró, ní àkókò (bẹ́ẹ̀ni/bẹ́ẹ̀kọ́), ìdí tí ó fi pẹ́.", "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI: \"Àwọn àpẹẹrẹ wo ni o rí nínú tábìlì yìí?\"", "To ìwé ìṣirò náà tàbí lo filter fúnra rẹ láti fìdí rẹ̀ múlẹ̀.", "Kọ: ìṣòro, ohun tí ó ṣeé ṣe kí ó fà á, ojútùú, bí o ṣe máa wọ̀n ọ́n."],
          words: [["Àpẹẹrẹ tí ó ń tún ara rẹ̀ ṣe (pattern)", "nǹkan tí ó ń ṣẹlẹ̀ léraléra nínú dátà."], ["Filter", "irinṣẹ́ spreadsheet tí ó ń fi àwọn ìlà tí o yàn nìkan hàn."]],
          slides: [
            { title: "AI lè ṣàkópọ̀ dátà", bullets: ["Ìfijíṣẹ́ tí ó pẹ́, ọjà tí ó ń tán, ìbàjẹ́", "Ó ń tọ́ka sí àwọn pattern"] },
            { title: "Ṣe é bí intel", bullets: ["Ó wúlò, ṣùgbọ́n fìdí rẹ̀ múlẹ̀ kí o tó gbé ìgbésẹ̀", "To ìwé ìṣirò náà tàbí lo filter fúnra rẹ"] },
            { title: "Kọ ojútùú náà", bullets: ["Ìṣòro àti ohun tí ó ṣeé ṣe kí ó fà á", "Ojútùú náà", "Bí o ṣe máa wọ̀n ọ́n"] }
          ],
          tryIt: "Ṣe tábìlì ìfijíṣẹ́ oní-ìlà 10 tí ó ní àwọn ìfijíṣẹ́ kan tí ó pẹ́. Béèrè àwọn pattern lọ́wọ́ olùrànlọ́wọ́ AI, lẹ́yìn náà lo filter fúnra rẹ láti fìdí ọ̀kan múlẹ̀, kí o sì kọ ojútùú kan.",
          youCanNow: "lo AI láti rí pattern nínú dátà iṣẹ́, kí o sì fìdí rẹ̀ múlẹ̀ kí o tó gbé ìgbésẹ̀.",
          quickCheck: [
            { objective: "O5", q: "Kí ni filter spreadsheet máa ń ṣe?", options: ["Ó ń pa àwọn ìlà rẹ́ títí láé", "Ó ń fi àwọn ìlà tí o yàn nìkan hàn", "Ó ń mú àwọn nọ́mbà tóbi sí i", "Ó ń fi ìwé ìṣirò ránṣẹ́ ní ímeèlì"], answer: 1, why: "Filter ń fi àwọn ìlà tí o kò nílò pamọ́ kí o lè ṣàyẹ̀wò pattern fúnra rẹ." },
            { objective: "O5", q: "AI sọ pé awakọ̀ kan ló fa ọ̀pọ̀ jù lọ ìfijíṣẹ́ tí ó pẹ́. Kí ni o máa ṣe?", options: ["Sọ fún awakọ̀ náà lẹ́sẹ̀kẹsẹ̀", "Má ṣe kà á sí", "Pa àwọn ìlà awakọ̀ náà rẹ́", "Lo filter fúnra rẹ láti fìdí rẹ̀ múlẹ̀ kí o tó gbé ìgbésẹ̀"], answer: 3, why: "Ṣe ohun tí AI rí bí intel: ó wúlò, ṣùgbọ́n fìdí rẹ̀ múlẹ̀ kí o tó gbé ìgbésẹ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣàlàyé ètò ní ṣókí àti wíwá iṣẹ́",
          minutes: 5,
          goal: "Ṣàlàyé ètò iṣẹ́ ní ṣókí ní èdè ti ara ìlú, kí o sì so ó mọ́ ìgbésẹ̀ iṣẹ́ rẹ tó kàn.",
          text: [
            "Àwọn mánéjà ti ara ìlú fẹ́ràn àlàyé ṣókí (brief), gẹ́gẹ́ bí àwọn ọ̀gá ológun: ipò nǹkan, ètò, àwọn ewu àti ètò àfidípò, àti ohun tí o nílò lọ́wọ́ wọn. Lo ọ̀rọ̀ ti ara ìlú: \"inventory\", \"delivery schedule\", \"on-time rate\".",
            "Yí iṣẹ́ ológun rẹ padà sí ìlà résumé tí ó ní nọ́mbà, fún àpẹẹrẹ: \"Managed inventory of 1,200 items worth $2 million with zero losses at audit.\" (Mo ṣàkóso ọjà 1,200 tí ó tó $2 mílíọ̀nù láìsí àdánù kankan nígbà àyẹ̀wò owó.) Lo nọ́mbà tí o lè dúró tì nìkan.",
            "Fún ìrànlọ́wọ́ iṣẹ́, Veterans' Employment and Training Service (VETS) ti Department of Labor ló ń ṣe Transition Assistance Program (TAP), ó sì ń tọ́ka sí àwọn apprenticeship (iṣẹ́ ìkọ́ṣẹ́). Tí o bá ní GI Bill, àǹfààní on-the-job training àti apprenticeship ti VA lè san iye owó kan lóṣooṣù nígbà tí o ń kọ́ṣẹ́ lọ́dọ̀ agbanisíṣẹ́ tí a fọwọ́ sí. Ṣàyẹ̀wò àwọn ojú-ewé ìjọba láti mọ ẹni tí ó yẹ."
          ],
          steps: ["Kọ brief náà: ipò nǹkan, ètò, ewu, àfidípò, ohun tí o nílò.", "Lo ọ̀rọ̀ ti ara ìlú látòkè délẹ̀.", "Kọ ìlà résumé méjì pẹ̀lú nọ́mbà gidi.", "Ṣàyẹ̀wò dol.gov/agencies/vets àti ojú-ewé on-the-job training lórí va.gov fún ìgbésẹ̀ tó kàn."],
          words: [["Brief (àlàyé ṣókí)", "àkópọ̀ kúkúrú ètò kan, ní ẹnu tàbí ní kíkọ, fún ẹni tí ó ń ṣe ìpinnu."], ["On-time rate", "ìpín àwọn ìfijíṣẹ́ tí ó dé ní àkókò tí a ṣèlérí."]],
          slides: [
            { title: "Ṣàlàyé bí o ti ṣe nínú ológun", bullets: ["Ipò nǹkan, ètò, ewu, àfidípò", "Ohun tí o nílò lọ́wọ́ wọn", "Ní ọ̀rọ̀ ti ara ìlú"] },
            { title: "Ìlà résumé pẹ̀lú nọ́mbà", bullets: ["\"Managed 1,200 items worth $2M, zero losses\"", "Nọ́mbà tí o lè dúró tì nìkan"] },
            { title: "Ìrànlọ́wọ́ ìjọba", bullets: ["DOL VETS: TAP àti apprenticeship", "VA on-the-job training (GI Bill)", "Ṣàyẹ̀wò ẹni tí ó yẹ lórí ojú-ewé ìjọba"] }
          ],
          sources: [
            { name: "U.S. Department of Labor, Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "VA: On-the-job training and apprenticeships", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: fi ìwé ìṣirò àtúnrà rẹ, ètò ìfijíṣẹ́ tí o ti ṣàyẹ̀wò, ewu mẹ́ta pẹ̀lú àfidípò, àti ìlà résumé méjì sínú ìwé àlàyé ètò iṣẹ́ ojú-ewé kan.",
          youCanNow: "ṣètò ọjà àti ìfijíṣẹ́ pẹ̀lú ìrànlọ́wọ́ AI, ṣàyẹ̀wò ètò náà fúnra rẹ, kí o sì ṣàlàyé rẹ̀ ní ṣókí ní èdè ti ara ìlú.",
          quickCheck: [
            { objective: "O6", q: "Kí ló yẹ kí ó wà nínú brief ètò iṣẹ́ tó dára?", options: ["Ìròyìn rere nìkan", "Ìtàn gígùn nípa iṣẹ́ rẹ", "Ipò nǹkan, ètò, ewu àti àfidípò", "Gbogbo ìlà inú spreadsheet rẹ"], answer: 2, why: "Brief ń fúnni ní ipò nǹkan, ètò àti àwọn ewu pẹ̀lú àfidípò, ní ṣókí àti kedere." },
            { objective: "O6", q: "Ìlà résumé wo ló ṣàpèjúwe iṣẹ́ logistics ológun dáadáa jù fún agbanisíṣẹ́ ti ara ìlú?", options: ["\"Managed 800 items worth $1M with zero losses at audit.\"", "\"Was S4 shop NCOIC.\"", "\"Did supply.\"", "\"Handled CL IX.\""], answer: 0, why: "Ó lo ọ̀rọ̀ ti ara ìlú, ó sọ bí iṣẹ́ náà ti tóbi tó àti èsì rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣètò àti ṣíṣàlàyé iṣẹ́ ní ṣókí",
        questions: [
          { objective: "O4", q: "Kí ló yẹ kí o fún AI láti kọ àkọ́pẹrẹ ètò ìfijíṣẹ́?", options: ["Ọ̀rọ̀ aṣínà báńkì rẹ", "Ọ̀rọ̀ \"schedule\" nìkan", "Àdírẹ́sì ilé àwọn oníbàárà", "Àwọn ibùdúró, wákàtí, ọkọ̀, awakọ̀ àti ohun tí wọ́n nílò"], answer: 3, why: "Òdiwọ̀n gidi ń jẹ́ kí AI kọ àkọ́pẹrẹ ètò tí ó ṣeé lò." },
          { objective: "O4", q: "Ètò AI rán van lọ sí ibùdúró kan nígbà tí ó ti tì. O yẹ kí o:", options: ["Tún ètò náà ṣe", "Fi í sílẹ̀ bẹ́ẹ̀", "Lé awakọ̀ náà kúrò lẹ́nu iṣẹ́", "Ti iṣẹ́ òwò náà pa"], answer: 0, why: "Ṣíṣàyẹ̀wò pẹ̀lú àwọn òdiwọ̀n jẹ́ iṣẹ́ tìrẹ." },
          { objective: "O5", q: "AI sọ pé ọjọ́ Ìṣẹ́gun ni ìfijíṣẹ́ máa ń pẹ́ jù. Kí ló kàn?", options: ["Má ṣe kà á sí", "Fagilé ọjọ́ Ìṣẹ́gun", "Lo filter fúnra rẹ láti fìdí rẹ̀ múlẹ̀", "Fi í sórí ayélujára"], answer: 2, why: "Fìdí rẹ̀ múlẹ̀ kí o tó gbé ìgbésẹ̀, bí ṣíṣàyẹ̀wò intel." },
          { objective: "O6", q: "Brief ètò iṣẹ́ tó dára ní:", options: ["Kò sí ètò", "Àwàdà nìkan", "Kóòdù ológun nìkan", "Ipò nǹkan, ètò, ewu àti àfidípò"], answer: 3, why: "Ìyẹn ni ohun tí àwọn olùṣe ìpinnu nílò." },
          { objective: "O6", q: "Àǹfààní VA wo ló lè san iye owó kan lóṣooṣù nígbà tí o ń kọ́ṣẹ́ lọ́dọ̀ agbanisíṣẹ́ tí a fọwọ́ sí?", options: ["Ìbánigbófò ẹ̀mí", "Owó ẹ̀yáwó ilé", "On-the-job training àti apprenticeship", "Àǹfààní ìsìnkú"], answer: 2, why: "va.gov ṣàlàyé owó oṣooṣù nígbà OJT tàbí apprenticeship tí a fọwọ́ sí." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Ètò Ìkẹ́rù àti Ìṣiṣẹ́ (Logistics)",
    questions: [
      { objective: "O1", q: "Ẹ̀wọ̀n ìpèsè (supply chain) ni:", options: ["Ẹ̀wọ̀n irin lórí ọkọ̀ akẹ́rù", "Gbogbo ìgbésẹ̀ láti ṣíṣe ọjà títí dé ọ̀dọ̀ ẹni tí ó máa lò ó", "Irú àdéhùn kan", "Ilẹ̀kùn ilé ìkẹ́rùsí"], answer: 1, why: "Ó ní gbogbo ọ̀nà náà nínú títí dé ọ̀dọ̀ ẹni tí ó máa lò ó." },
      { objective: "O1", q: "Motor pool ológun sún mọ́:", options: ["Ìtọ́jú àwọn ọkọ̀ (fleet maintenance)", "Ìṣirò owó", "Ìpolówó ọjà", "Ọ̀rọ̀ òfin"], answer: 0, why: "Àwọn méjèèjì ló ń tọ́jú àwọn ọkọ̀." },
      { objective: "O1", q: "Kí ni 3PL?", options: ["Ipò ológun kan", "Irú ọkọ̀ akẹ́rù kan", "Ilé-iṣẹ́ tí a gbà láti tọ́jú ẹrù àti fi ránṣẹ́ fún iṣẹ́ òwò míì", "Spreadsheet kan"], answer: 2, why: "Àwọn ilé-iṣẹ́ third-party logistics ń bójútó ìtọ́jú ẹrù àti fífi ránṣẹ́." },
      { objective: "O1", q: "Ojú-òpó ọ̀fẹ́ wo ló ń so iṣẹ́ ológun pọ̀ mọ́ iṣẹ́ ti ara ìlú?", options: ["My Next Move for Veterans", "App orin kan", "Ojú-òpó ìtajà kan", "Eré kan"], answer: 0, why: "mynextmove.org/vets wà fún Department of Labor." },
      { objective: "O2", q: "Àsọtẹ́lẹ̀ ìbéèrè ọjà (demand forecasting) túmọ̀ sí:", options: ["Gbígba awakọ̀ síṣẹ́", "Fífi ẹrù jíṣẹ́ kíákíá", "Kíkun ọkọ̀ akẹ́rù", "Ìméfò tí a fara balẹ̀ ṣe nípa iye tí a máa nílò"], answer: 3, why: "Àsọtẹ́lẹ̀ ń díwọ̀n ohun tí a máa nílò lọ́jọ́ iwájú." },
      { objective: "O2", q: "Kí ni olùṣètò ọ̀nà AI lè máà rí?", options: ["Iye ibùdúró tí o fún un", "Ọ̀nà tí wọ́n tì láàárọ̀ yìí", "Máàpù náà", "Ọ̀rọ̀ \"route\""], answer: 1, why: "Ohun tuntun tí ó ṣẹlẹ̀ lè máà sí nínú dátà rẹ̀." },
      { objective: "O2", q: "Ta ni ó ń bójútó exception bí ọkọ̀ akẹ́rù tí ó pẹ́?", options: ["Kò sí ẹnìkan", "Ènìyàn", "AI nìkan", "Oníbàárà"], answer: 1, why: "Ìdájọ́ ènìyàn ló ń bójútó àwọn exception." },
      { objective: "O3", q: "Lead time ni:", options: ["Wákàtí tí ṣọ́ọ̀bù kan ń ṣí", "Àkókò tí awakọ̀ kan ń darí convoy", "Àkókò oúnjẹ ọ̀sán", "Iye ọjọ́ tí ẹrù tí a béèrè máa gbà kí ó tó dé"], answer: 3, why: "Lead time ni ìdúró de ẹrù." },
      { objective: "O3", q: "Safety stock ni:", options: ["Ọjà àfikún tí a fi pamọ́ fún ohun àìròtẹ́lẹ̀", "Ọjà tí a tì pa", "Ẹrù tí ó ti bàjẹ́", "Ọjà tí a tà lónìí"], answer: 0, why: "Ó ń bo ìbéèrè tàbí ìdádúró tí a kò retí." },
      { objective: "O3", q: "Ìlò ojoojúmọ́ 20, lead time 5, safety stock 40. Reorder point?", options: ["25", "65", "100", "140"], answer: 3, why: "20 x 5 + 40 = 140." },
      { objective: "O3", q: "Báwo ni o ṣe máa mọ̀ pé fọ́múlà tí AI kọ tọ́?", options: ["Pa á rẹ́", "Gbà á gbọ́", "Béèrè lọ́wọ́ AI míì nìkan", "Fi ọwọ́ ṣàyẹ̀wò ìlà kan"], answer: 3, why: "Àyẹ̀wò pẹ̀lú ọwọ́ ń fìdí ìṣirò náà múlẹ̀." },
      { objective: "O4", q: "Òdiwọ̀n (constraint) nínú ètò àkókò ni:", options: ["Ìfijíṣẹ́ kan", "Irú ọkọ̀ akẹ́rù kan", "Ààlà tí ètò náà gbọ́dọ̀ tẹ̀lé", "Oníbàárà kan"], answer: 2, why: "Wákàtí ìṣílẹ̀kùn àti wákàtí iṣẹ́ awakọ̀ jẹ́ òdiwọ̀n." },
      { objective: "O4", q: "Báwo ni o ṣe máa ṣàyẹ̀wò àkókò ìrìn tí AI fúnni?", options: ["Méfò", "Fi wé app máàpù", "Sọ fún awakọ̀ pé kí ó yára", "Má ṣe kà wọ́n sí"], answer: 1, why: "App máàpù ń fúnni ní àkókò tí ó bọ́gbọ́n mu." },
      { objective: "O4", q: "Èwo ni KÒ yẹ kí ó wọ inú irinṣẹ́ AI gbogbogbò?", options: ["Orúkọ àti àdírẹ́sì ilé àwọn oníbàárà", "Àwọn ibùdúró àròsọ", "Wákàtí ìṣílẹ̀kùn ṣọ́ọ̀bù àròsọ", "Iye van"], answer: 0, why: "Ìsọfúnni oníbàárà jẹ́ ti àdáni." },
      { objective: "O5", q: "Ó yẹ kí a ṣe ohun tí AI rí nínú dátà bí:", options: ["Àwàdà", "Àṣẹ tí o gbọ́dọ̀ tẹ̀lé", "Intel: ó wúlò ṣùgbọ́n fìdí rẹ̀ múlẹ̀ kí o tó gbé ìgbésẹ̀", "Òtítọ́ ìkẹyìn"], answer: 2, why: "Fífìdí rẹ̀ múlẹ̀ ń dènà ṣíṣe ìgbésẹ̀ lórí àṣìṣe." },
      { objective: "O5", q: "Filter spreadsheet ń jẹ́ kí o:", options: ["Fi àwọn ìlà tí o yàn nìkan hàn", "Pa ìwé ìṣirò rẹ́", "Tẹ̀ ẹ́ jáde kíákíá", "Yí irú lẹ́tà padà"], answer: 0, why: "Filter ń ràn ọ́ lọ́wọ́ láti ṣàyẹ̀wò pattern." },
      { objective: "O5", q: "Lẹ́yìn tí o bá rí ìṣòro gidi kan, kọ:", options: ["Ọ̀rọ̀ aṣínà tuntun", "Ẹni tí o máa dá lẹ́bi nìkan", "Kò sí nǹkan", "Ohun tí ó fà á, ojútùú, àti bí o ṣe máa wọ̀n ọ́n"], answer: 3, why: "Ojútùú tí a wọ̀n ń fi hàn pé ó ṣiṣẹ́." },
      { objective: "O5", q: "On-time rate túmọ̀ sí:", options: ["Ìyára awakọ̀", "Ìpín àwọn ìfijíṣẹ́ tí ó dé ní àkókò tí a ṣèlérí", "Iye owó epo", "Iye ọkọ̀ akẹ́rù"], answer: 1, why: "Ó ń wọn àwọn ìlérí tí a mú ṣẹ." },
      { objective: "O6", q: "Ìlà résumé wo ló lágbára jù?", options: ["\"Did supply stuff.\"", "\"Managed 1,200 items worth $2M with zero losses at audit.\"", "\"Worked hard.\"", "\"Army.\""], answer: 1, why: "Nọ́mbà àti èsì ń fi ipa tí o ní hàn." },
      { objective: "O6", q: "Ilé-iṣẹ́ DOL tí ó ń ṣe àwọn ètò iṣẹ́ fún àwọn ológun tẹ́lẹ̀, pẹ̀lú TAP, ni:", options: ["EPA", "IRS", "FAA", "VETS"], answer: 3, why: "Veterans' Employment and Training Service ló ń ṣe TAP fún DOL." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 1, 5, 9, 10, 12, 14, 16, 18]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ìwé ìṣirò àtúnrà",
        objective: "O3",
        notYet: "Nǹkan tí ó wà níbẹ̀ kò tó márùn-ún, tàbí àwọn reorder point kò tọ́.",
        meets: "Nǹkan márùn-ún pẹ̀lú reorder point tí ó tọ́, àti ìlà kan tí a fi ọwọ́ ṣàyẹ̀wò.",
        exceeds: "Ìwé ìṣirò náà ń sàmì sí àwọn nǹkan tí ó ti dé reorder point tàbí tí ó wà nísàlẹ̀ rẹ̀."
      },
      {
        name: "Ètò ìfijíṣẹ́ tí a ṣàyẹ̀wò",
        objective: "O4",
        notYet: "A lo ètò AI láìṣàyẹ̀wò, tàbí ó rú òdiwọ̀n kan.",
        meets: "Ètò ọ̀sẹ̀ kan tí ó bọ̀wọ̀ fún wákàtí ibùdúró, ọkọ̀ àti awakọ̀, pẹ̀lú àkókò ìrìn tí a ṣàyẹ̀wò lórí app máàpù.",
        exceeds: "Akẹ́kọ̀ọ́ dárúkọ ìṣòro tí ó rí àti bí ó ṣe tún un ṣe."
      },
      {
        name: "Ewu àti àfidípò",
        objective: "O6",
        notYet: "Ewu kò tó mẹ́ta, tàbí ewu kan kò ní àfidípò.",
        meets: "Ewu mẹ́ta, ọ̀kọ̀ọ̀kan pẹ̀lú ètò àfidípò.",
        exceeds: "Àfidípò kọ̀ọ̀kan sọ ẹni tí ó máa gbé ìgbésẹ̀ àti ìgbà wo."
      },
      {
        name: "Ìlà résumé ti ara ìlú",
        objective: "O1",
        notYet: "Àwọn ìlà náà lo ọ̀rọ̀ ológun tàbí kò ní èsì.",
        meets: "Ìlà méjì ní ọ̀rọ̀ logistics ti ara ìlú pẹ̀lú ìwọ̀n tàbí èsì.",
        exceeds: "Àwọn ìlà náà bá orúkọ iṣẹ́ ti ara ìlú kan láti My Next Move for Veterans mu."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n béèrè fún iṣẹ́ logistics, ilé ìkẹ́rùsí tàbí ìrìnnà ti ara ìlú láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n rí iṣẹ́ logistics, apprenticeship tàbí ipò on-the-job training láàárín ọjọ́ 90",
      "Àwọn ilé ìfúnni-lóúnjẹ tàbí iṣẹ́ òwò kékeré alábàáṣiṣẹ́ tí wọ́n ń lo ìwé ìṣirò àtúnrà tàbí ètò ìfijíṣẹ́ akẹ́kọ̀ọ́ kan"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Spreadsheet ọ̀fẹ́: Google Sheets tàbí Microsoft Excel lórí ayélujára",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: ChatGPT, Microsoft Copilot tàbí Google Gemini, àti app máàpù",
      "Ẹ̀rọ ìṣirò",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Fún gbogbo akẹ́kọ̀ọ́ ní ilé ìfúnni-lóúnjẹ àròsọ tàbí ṣọ́ọ̀bù ẹ̀yà ẹ̀rọ kan náà, kí wọ́n lè fi ìwé ìṣirò àti ètò wọn wé ara wọn.",
      "Ṣe ìṣirò reorder point kan lórí pátákó pẹ̀lú wọn kí àwọn akẹ́kọ̀ọ́ tó ṣe ìwé ìṣirò tiwọn.",
      "Lo àwọn ibùdúró àti dátà àròsọ nìkan; má ṣe fi orúkọ oníbàárà gidi tàbí àdírẹ́sì ilé sínú AI gbogbogbò láéláé.",
      "Ní kí àwọn akẹ́kọ̀ọ́ ṣàlàyé ètò wọn sókè ní ìṣẹ́jú méjì, bí wọ́n ṣe máa ṣe fún mánéjà ti ara ìlú.",
      "Fi rubric ṣe àmì fún ìwé àlàyé ètò iṣẹ́, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
