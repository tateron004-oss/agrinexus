"use strict";

// Koach Learn course (Yoruba translation of athletes/athletes-sports-analytics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-sports-analytics-yo",
  lang: "yo",
  translationOf: "athletes-sports-analytics",
  category: "Athletes",
  name: "Ìpìlẹ̀ Ìtúpalẹ̀ Ìṣirò Eré Ìdárayá",
  skills: "Bíbéèrè ìbéèrè ìtúpalẹ̀, Títún tábìlì ìṣirò eré ṣe, Ṣíṣírò ìpíndọ́gba, ìdá-ọgọ́rùn-ún àti ìwọ̀n, Ṣíṣe àwòrán àtẹ tó yé, Ṣíṣàlàyé ohun tí o rí lọ́nà òtítọ́",
  outcome: "dáhùn ìbéèrè gidi kan nípa eléré kan tàbí ẹgbẹ́ kan pẹ̀lú ìṣirò: kó tábìlì kékeré jọ kí o sì tún un ṣe, ṣírò ìpíndọ́gba, ìdá-ọgọ́rùn-ún àti ìwọ̀n fún ìdíje kọ̀ọ̀kan nínú Google Sheets, ṣe àwòrán àtẹ kan tó yé, kí o sì ṣàlàyé ohun tí o rí àti ààlà rẹ̀ ní gbólóhùn mẹ́ta.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn eléré ìdárayá, àwọn kóòṣì, àwọn alákòóso ẹgbẹ́ àti àwọn olùfẹ́ eré tí wọ́n fẹ́ lóye àwọn nọ́mbà tó wà lẹ́yìn eré ìdárayá, kí wọ́n sì lò wọ́n dáadáa. Kò nílò ìṣirò tó ju àròpọ̀, àyọkúrò, ìsọdipúpọ̀ àti pínpín lásán lọ.",
    "Ìtúpalẹ̀ kì í ṣe níní nọ́mbà tó pọ̀ jù. Ó jẹ́ bíbéèrè ìbéèrè tó dára, lílo ìṣirò tó mọ́, ṣíṣe ìṣirò tó rọrùn lọ́nà tó tọ́, fífi hàn kedere, àti sísọ òtítọ́ nípa ohun tí kò fi hàn. O máa lo Google Sheets àti olùrànlọ́wọ́ AI gẹ́gẹ́ bí olùrànlọ́wọ́.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Dáhùn ìbéèrè kan nípa ẹgbẹ́ rẹ tàbí ẹgbẹ́ tí o fẹ́ràn pẹ̀lú ìṣirò: kọ ìbéèrè náà, kó ìṣirò ó kéré tán ìdíje 10 jọ láti inú box score tàbí ojú-ìwé ìṣirò ti ìjọba ẹgbẹ́, tún un ṣe, ṣírò ó kéré tán ìpíndọ́gba kan, ìdá-ọgọ́rùn-ún kan àti ìwọ̀n kan fún ìdíje kọ̀ọ̀kan, ṣe àwòrán àtẹ kan, kí o sì kọ ohun tí o rí ní gbólóhùn mẹ́ta tí ó ní ààlà kan nínú ìṣirò rẹ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn eléré ìdárayá, àwọn kóòṣì, àwọn alákòóso ẹgbẹ́ àti àwọn olùfẹ́ eré tí wọ́n fẹ́ lo nọ́mbà eré ìdárayá dáadáa. Ọ̀pọ̀ ti ń tẹ̀lé ìṣirò eré tẹ́lẹ̀, ṣùgbọ́n wọn kò tíì lò wọ́n nínú ìwé ìṣirò (spreadsheet).",
    startingPoint: "Wọ́n lè ka box score, wọ́n sì lè ṣe ìṣirò tó rọrùn. Wọn kò fi bẹ́ẹ̀ lo àgbékalẹ̀ (formula) tàbí àwòrán àtẹ nínú spreadsheet rí, wọn kò sì fi bẹ́ẹ̀ dánrawò láti ṣèdájọ́ bóyá nọ́mbà kan fi nǹkan hàn ní tòótọ́.",
    gap: "Ọ̀rọ̀ eré ìdárayá kún fún nọ́mbà tó ń ṣini lọ́nà: àpẹẹrẹ tó kéré jù, ìdá-ọgọ́rùn-ún tí a ṣírò ìpíndọ́gba rẹ̀ lọ́nà tí kò tọ́, àti ìbáṣepọ̀ tí a kà sí ohun tó fà á. Àwọn akẹ́kọ̀ọ́ nílò láti dáhùn ìbéèrè gidi kan pẹ̀lú ìṣirò tó mọ́, ìṣirò tó rọrùn tó tọ́, àwòrán àtẹ tó yé àti ààlà tòótọ́ kan, kí ohun tí wọ́n rí lè ran kóòṣì tàbí ẹgbẹ́ lọ́wọ́ dípò kí ó dà wọ́n rú.",
    constraints: [
      "Ìṣirò: ìṣirò tó rọrùn nìkan; a ń fi àgbékalẹ̀ hàn ní ìgbésẹ̀ kọ̀ọ̀kan",
      "Ẹ̀rọ: fóònù tàbí kọ̀ǹpútà pẹ̀lú Google Sheets ọ̀fẹ́",
      "Àkókò: nǹkan bí ìṣẹ́jú márùn-ún fún ẹ̀kọ́ kọ̀ọ̀kan pẹ̀lú àkókò láti tẹ ìṣirò ìdíje 10 sínú rẹ̀",
      "Ìṣirò gbọ́dọ̀ wá láti ojú-ìwé ìṣirò ti ìjọba ẹgbẹ́, líìgì tàbí ilé-ẹ̀kọ́",
      "Ìṣirò eléré kan pàtó ni a ń pín fún gbogbo ènìyàn nígbà tí a bá gba àṣẹ nìkan"
    ],
    prerequisites: "Kò sí. Àwọn tí wọ́n jẹ́ tuntun sí spreadsheet lè fẹ́ ṣe ẹ̀kọ́ ìpìlẹ̀ Google Sheets kan ṣáájú."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú ẹgbẹ́ kan tàbí eléré kan tí o ń tẹ̀lé", action: "kọ ìbéèrè ìtúpalẹ̀ kan tó pàtó tí ìṣirò box score lè dáhùn", standard: "tí ó dárúkọ ìṣirò náà, àwọn ìdíje àti ohun tí o ń fi wéra" },
    { id: "O2", condition: "Pẹ̀lú orísun ìṣirò ti ìjọba àti Google Sheets", action: "kó ìṣirò ó kéré tán ìdíje 10 jọ kí o sì tún un ṣe", standard: "pẹ̀lú ìdíje kan ní ìlà kọ̀ọ̀kan, tí o sì ti tún gbogbo àlàfo tàbí àìbáramu ṣe láti inú orísun náà" },
    { id: "O3", condition: "Pẹ̀lú tábìlì tó mọ́", action: "ṣírò ìpíndọ́gba, ìdá-ọgọ́rùn-ún àti ìwọ̀n fún ìdíje kọ̀ọ̀kan pẹ̀lú àgbékalẹ̀ spreadsheet", standard: "tí o sì ti fi ẹ̀rọ ìṣirò (calculator) yẹ àbájáde kan wò fúnra rẹ" },
    { id: "O4", condition: "Pẹ̀lú àwọn àbájáde tí o ti ṣírò", action: "yan àwòrán àtẹ kan tó dáhùn ìbéèrè rẹ kí o sì ṣe é", standard: "pẹ̀lú àkọlé tó sọ ohun tí o rí, àti orúkọ lórí àwọn ìlà ẹ̀gbẹ́ (axis) méjèèjì" },
    { id: "O5", condition: "Pẹ̀lú ohun tí o rí", action: "yẹ̀ ẹ́ wò fún àpẹẹrẹ tó kéré, ìbáṣepọ̀ tí a kà sí ohun tó fà á, àti àyíká tó sọnù", standard: "tí o kọ iye àpẹẹrẹ (sample size) àti ó kéré tán àlàyé míì méjì tó ṣeé ṣe" },
    { id: "O6", condition: "Pẹ̀lú àwòrán àtẹ rẹ àti àwọn àyẹ̀wò rẹ", action: "kọ ohun tí o rí ní gbólóhùn mẹ́ta pẹ̀lú ààlà rẹ̀, kí o sì pín in", standard: "tí ó ní nọ́mbà kan, ìdí tí ó fi ṣe pàtàkì, àti ààlà kan nínú ìṣirò náà" }
  ],
  chapters: [
    {
      name: "Orí 1: Àwọn ìbéèrè àti ìṣirò",
      lessons: [
        {
          objectives: ["O1"],
          title: "Bíbẹ̀rẹ̀ pẹ̀lú ìbéèrè tó dára",
          minutes: 4,
          goal: "Kọ ìbéèrè ìtúpalẹ̀ tó yé tí o lè fi ìṣirò dáhùn.",
          text: [
            "Ìtúpalẹ̀ ń bẹ̀rẹ̀ pẹ̀lú ìbéèrè, kì í ṣe pẹ̀lú spreadsheet. Ìbéèrè tó dára jẹ́ pàtó, ó sì ṣeé dáhùn: \"Ṣé ẹgbẹ́ wa ń ju bọ́ọ̀lù ojú-àmì mẹ́ta wọlé dáadáa jù nílé tàbí lóde?\" \"Ṣé bí mo ṣe ń ju serve wọlé dára jù ní set àkọ́kọ́ tàbí ní ẹ̀kẹta?\"",
            "Yẹra fún ìbéèrè tó tóbi jù (\"Ta ni eléré tó dára jù lọ láyé?\") tàbí èyí tí ìṣirò kò lè dáhùn (\"Ta ló ń sapá jù?\").",
            "Kọ ìṣirò tí o nílò láti dáhùn rẹ̀: àwọn ìṣirò wo, ìdíje mélòó, àti ibi tí o máa ti rí wọn."
          ],
          steps: ["Kọ ìbéèrè kan nípa ẹgbẹ́ rẹ tàbí eléré kan.", "Jẹ́ kí ó pàtó: ta ni, ìṣirò wo, kí ni o ń fi wéra.", "Ṣàyẹ̀wò pé ìṣirò lè dáhùn rẹ̀.", "Kọ ìṣirò tí o nílò àti ibi tí o máa ti rí i."],
          words: [["Ìtúpalẹ̀ (analytics)", "lílo ìṣirò láti dáhùn ìbéèrè àti láti ṣe ìpinnu tó dára jù."], ["Ìṣirò (data)", "òtítọ́ àti nọ́mbà, bí àmì (points), ìgbìyànjú àti àwọn tó wọlé."]],
          slides: [
            { title: "Ìbéèrè ló kọ́kọ́ dé", bullets: ["Kì í ṣe spreadsheet", "Ó pàtó, ó sì ṣeé dáhùn"] },
            { title: "Tó dára àti tó tóbi jù", bullets: ["Tó dára: % ojú-àmì mẹ́ta nílé àti lóde", "Tó tóbi jù: \"eléré tó dára jù lọ láyé?\"", "Kì í ṣe ìṣirò: \"ta ló ń sapá jù?\""] },
            { title: "Ṣètò ìṣirò náà", bullets: ["Àwọn ìṣirò wo", "Ìdíje mélòó", "Ibi tí o máa ti rí wọn"] }
          ],
          tryIt: "Kọ ìbéèrè ìtúpalẹ̀ mẹ́ta nípa ẹgbẹ́ rẹ tàbí ẹgbẹ́ tí o fẹ́ràn. Béèrè lọ́wọ́ olùrànlọ́wọ́ AI èwo nínú wọn ni box score lè dáhùn jù. Yan ọ̀kan, kí o sì kọ ìṣirò tí o nílò.",
          youCanNow: "kọ ìbéèrè ìtúpalẹ̀ kan tó pàtó, kí o sì ṣètò ìṣirò tí o máa fi dáhùn rẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Kí ló ń jẹ́ kí ìbéèrè ìtúpalẹ̀ ṣeé dáhùn?", options: ["Ó dárúkọ ìṣirò kan àti ohun tí a ń fi wéra tí o lè kà", "Ó béèrè ta ni ẹni tó dára jù", "Ó béèrè nípa ìmọ̀lára", "Kò ní nọ́mbà kankan nínú"], answer: 0, why: "Ìbéèrè tó dára ń tọ́ka sí ìṣirò tí o lè kó jọ kí o sì fi wéra." },
            { objective: "O1", q: "Ìbéèrè rẹ ni \"Ṣé ẹgbẹ́ wa dára?\". Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ bí ó ṣe wà", "Jẹ́ kí ó pàtó, bíi fífi rebound fún ìdíje kọ̀ọ̀kan nílé wé ti lóde", "Ní kí olùfẹ́ eré kan dìbò", "Fo ìbéèrè náà kí o sì bẹ̀rẹ̀ àwòrán àtẹ"], answer: 1, why: "Ìbéèrè tó pàtó ń sọ fún ọ ní pàtó ìṣirò tí o máa kó jọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkó ìṣirò jọ àti títún un ṣe",
          minutes: 6,
          goal: "Kó ìṣirò ó kéré tán ìdíje 10 jọ, kí o sì tún un ṣe kí ó lè ṣeé lò.",
          text: [
            "Gba ìṣirò láti orísun tó ṣeé gbẹ́kẹ̀lé: ìṣirò ti ìjọba ẹgbẹ́ rẹ, ojú-ìwé ayélujára líìgì tàbí ti eré ìdárayá ilé-ẹ̀kọ́, tàbí box score ti ìjọba. Kọ ibi tí nọ́mbà kọ̀ọ̀kan ti wá sílẹ̀.",
            "Fi í sínú Google Sheets: ìlà kan fún ìdíje kọ̀ọ̀kan, ọ̀wọ̀n kan fún ìṣirò kọ̀ọ̀kan, pẹ̀lú ìlà àkọlé (Date, Opponent, Home/Away, 3PA, 3PM). Títún un ṣe túmọ̀ sí títún àwọn ìṣòro ṣe: àṣìṣe kíkọ, nọ́mbà tó sọnù, ẹgbẹ́ kan náà tí a kọ ní ọ̀nà méjì, nọ́mbà tí a fi pamọ́ bí ọ̀rọ̀, tàbí ìlà tó ṣe ẹ̀dà ara wọn.",
            "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ láti rí àwọn ìṣòro: lẹ tábìlì náà sí i kí o sì béèrè pé, \"Wá àṣìṣe kíkọ, ẹ̀dà, nọ́mbà tó sọnù tàbí orúkọ tí kò bára mu. Má ṣe yí àwọn nọ́mbà padà, kàn kọ àwọn ìṣòro sílẹ̀.\" Lẹ́yìn náà, tún wọn ṣe fúnra rẹ, pẹ̀lú orísun àkọ́kọ́."
          ],
          steps: ["Wá orísun ti ìjọba fún ìṣirò rẹ.", "Ṣètò ìlà kan fún ìdíje kọ̀ọ̀kan, ọ̀wọ̀n kan fún ìṣirò kọ̀ọ̀kan.", "Tẹ ó kéré tán ìdíje 10 sínú rẹ̀.", "Ṣàyẹ̀wò fún àṣìṣe kíkọ, ẹ̀dà, nọ́mbà tó sọnù àti orúkọ tí kò bára mu.", "Tún wọn ṣe pẹ̀lú orísun náà, kì í ṣe pẹ̀lú àmọ̀ràn."],
          words: [["Box score", "tábìlì ìṣirò láti inú ìdíje kan."], ["Títún ìṣirò ṣe (data cleaning)", "títún àṣìṣe àti àlàfo inú ìṣirò ṣe kí o tó lò ó."], ["Nọ́mbà tó sọnù (missing value)", "ààyè òfo níbi tí nọ́mbà yẹ kí ó wà."]],
          slides: [
            { title: "Orísun tó ṣeé gbẹ́kẹ̀lé", bullets: ["Ìṣirò ti ìjọba ẹgbẹ́", "Ojú-ìwé líìgì tàbí eré ìdárayá ilé-ẹ̀kọ́", "Kọ orísun náà sílẹ̀"] },
            { title: "Ètò tábìlì", bullets: ["Ìlà kan fún ìdíje kọ̀ọ̀kan", "Ọ̀wọ̀n kan fún ìṣirò kọ̀ọ̀kan", "Ìlà àkọlé pẹ̀lú orúkọ tó yé"] },
            { title: "Tún un ṣe", bullets: ["Àṣìṣe kíkọ, ẹ̀dà, ààyè òfo", "Orúkọ kan náà tí a kọ ní ọ̀nà méjì", "AI ń kọ ìṣòro sílẹ̀; ìwọ ń tún wọn ṣe láti orísun"] }
          ],
          tryIt: "Tẹ ìṣirò ó kéré tán ìdíje 10 sínú Google Sheets láti orísun ti ìjọba. Ní kí AI kọ àwọn ìṣòro sílẹ̀, lẹ́yìn náà tún ọ̀kọ̀ọ̀kan ṣe láti inú orísun náà.",
          youCanNow: "kó ìṣirò eré ìdárayá jọ láti orísun tó ṣeé gbẹ́kẹ̀lé, kí o sì tún un ṣe.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ìlà kọ̀ọ̀kan nínú tábìlì ìṣirò rẹ gbọ́dọ̀ ní?", options: ["Sáà eré kan", "Gbogbo iṣẹ́ eré eléré kan", "Ìdíje kan", "Orúkọ ẹgbẹ́ kan"], answer: 2, why: "Ìdíje kan ní ìlà kọ̀ọ̀kan ń jẹ́ kí ìṣirò rọrùn láti kà àti láti yẹ̀ wò." },
            { objective: "O2", q: "Ìdíje 7 kò ní nọ́mbà ìgbìyànjú. Kí ni o máa ṣe?", options: ["Fojú díwọ̀n nọ́mbà kan", "Lo ìfojúdíwọ̀n AI", "Pa gbogbo ìdíje rẹ́", "Wá a nínú box score ti ìjọba"], answer: 3, why: "A ń tún àlàfo ṣe láti orísun àkọ́kọ́, a kì í fojú díwọ̀n rẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ìpíndọ́gba, ìdá-ọgọ́rùn-ún àti ìwọ̀n",
          minutes: 6,
          goal: "Ṣírò ìpíndọ́gba, ìdá-ọgọ́rùn-ún àti ìwọ̀n fún ìdíje kọ̀ọ̀kan nínú Google Sheets.",
          text: [
            "Ìpíndọ́gba: ro àwọn nọ́mbà pọ̀, kí o sì pín in sí iye wọn. Nínú Sheets, =AVERAGE(B2:B11) ń fún ọ ní ìpíndọ́gba àwọn sẹ́ẹ̀lì yẹn.",
            "Ìdá-ọgọ́rùn-ún: àwọn tó wọlé tí a pín sí ìgbìyànjú. Ìdá-ọgọ́rùn-ún ojú-àmì mẹ́ta = 3PM / 3PA. Kọ́kọ́ ro àpapọ̀ pọ̀, lẹ́yìn náà pín in: =SUM(E2:E11)/SUM(D2:D11). Ṣíṣírò ìpíndọ́gba ìdá-ọgọ́rùn-ún ìdíje kọ̀ọ̀kan lè fún ọ ní ìdáhùn tí kò tọ́ nígbà tí ìgbìyànjú bá yàtọ̀ síra púpọ̀.",
            "Ìwọ̀n: ìṣirò kan fún ìdíje kan, fún ìṣẹ́jú kan tàbí fún ìgbìyànjú kan ń jẹ́ kí ìfiwéra jẹ́ òdodo nígbà tí àkókò eré bá yàtọ̀. Àmì fún ìdíje kọ̀ọ̀kan = àpapọ̀ àmì / iye ìdíje tí a ṣe. Olùrànlọ́wọ́ AI lè ṣàlàyé àgbékalẹ̀ èyíkéyìí; yẹ àbájáde wò pẹ̀lú ẹ̀rọ ìṣirò lórí ìlà kan."
          ],
          steps: ["Lo =AVERAGE() fún ìpíndọ́gba.", "Fún ìdá-ọgọ́rùn-ún, pín àpapọ̀ àwọn tó wọlé sí àpapọ̀ ìgbìyànjú.", "Fún ìwọ̀n, pín àpapọ̀ kan sí iye ìdíje tàbí ìṣẹ́jú.", "Ṣètò ìdá-ọgọ́rùn-ún láti hàn bí percent (%).", "Yẹ àbájáde kan wò pẹ̀lú ẹ̀rọ ìṣirò."],
          words: [["Ìpíndọ́gba (average)", "àpapọ̀ tí a pín sí iye àwọn nọ́mbà."], ["Ìdá-ọgọ́rùn-ún (percentage)", "apá kan nínú 100, bí àwọn tó wọlé nínú ìgbìyànjú."], ["Ìwọ̀n (rate)", "ìṣirò kan fún ìwọ̀n kan, bíi fún ìdíje kan tàbí fún ìṣẹ́jú kan."]],
          slides: [
            { title: "Ìpíndọ́gba", bullets: ["Àpapọ̀ / iye wọn", "=AVERAGE(B2:B11)"] },
            { title: "Ìdá-ọgọ́rùn-ún", bullets: ["Àpapọ̀ àwọn tó wọlé / àpapọ̀ ìgbìyànjú", "=SUM(makes)/SUM(attempts)", "Má ṣe ṣírò ìpíndọ́gba ìdá-ọgọ́rùn-ún ìdíje kọ̀ọ̀kan"] },
            { title: "Ìwọ̀n", bullets: ["Fún ìdíje kan, ìṣẹ́jú kan, ìgbìyànjú kan", "Òdodo nígbà tí àkókò eré bá yàtọ̀", "Yẹ ọ̀kan wò pẹ̀lú ẹ̀rọ ìṣirò"] }
          ],
          tryIt: "Nínú ìwé rẹ, ṣírò ìpíndọ́gba kan, ìdá-ọgọ́rùn-ún kan (ọ̀nà àpapọ̀) àti ìwọ̀n kan fún ìdíje kọ̀ọ̀kan. Yẹ ọ̀kan wò pẹ̀lú ẹ̀rọ ìṣirò.",
          youCanNow: "ṣírò ìpíndọ́gba, ìdá-ọgọ́rùn-ún àti ìwọ̀n lọ́nà tó tọ́ nínú spreadsheet.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìwọ̀n fún ìdíje kọ̀ọ̀kan?", options: ["Àpapọ̀ kan tí a pín sí iye ìdíje", "Àmì ìdíje tó kẹ́yìn", "Nọ́mbà tó ga jù nínú ọ̀wọ̀n kan", "Àmọ̀ràn nípa ìdíje tó kàn"], answer: 0, why: "Ìwọ̀n ń pín àpapọ̀ kan sí àwọn ìdíje kí a lè fi àwọn eléré wéra lọ́nà òdodo." },
            { objective: "O3", q: "O ti ṣírò ìdá-ọgọ́rùn-ún ẹgbẹ́ pẹ̀lú àgbékalẹ̀ kan. Báwo ni o ṣe máa yẹ̀ ẹ́ wò?", options: ["Gbẹ́kẹ̀lé àgbékalẹ̀ náà", "Ṣírò àbájáde kan pẹ̀lú ẹ̀rọ ìṣirò", "Béèrè lọ́wọ́ olùfẹ́ eré kan", "Yí ìṣirò padà títí yóò fi dà bí ẹni pé ó tọ́"], answer: 1, why: "Yíyẹ àbájáde kan wò fúnra rẹ ń mú àṣìṣe àgbékalẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àwọn ìbéèrè àti ìṣirò",
        questions: [
          { objective: "O1", q: "Èwo ni ìbéèrè ìtúpalẹ̀ tó dára?", options: ["\"Ta ló dára jù lọ láyé?\"", "\"Ta ló ń sapá jù?\"", "\"Ṣé a ń ju ojú-àmì mẹ́ta wọlé dáadáa jù nílé tàbí lóde?\"", "\"Ṣé eré ìdárayá dùn?\""], answer: 2, why: "Ó pàtó, ìṣirò sì lè dáhùn rẹ̀." },
          { objective: "O2", q: "Ibo ni ìṣirò rẹ gbọ́dọ̀ ti wá?", options: ["Ìṣirò ti ìjọba ẹgbẹ́, líìgì tàbí ilé-ẹ̀kọ́", "Láti inú ìrántí nìkan", "Ọ̀rọ̀ ẹnìkan lásán", "Àmọ̀ràn"], answer: 0, why: "Orísun tó ṣeé gbẹ́kẹ̀lé ń mú ìdáhùn tó ṣeé gbẹ́kẹ̀lé wá." },
          { objective: "O2", q: "Títún ìṣirò ṣe túmọ̀ sí:", options: ["Pípa gbogbo ìṣirò rẹ́", "Mímú kí nọ́mbà tóbi sí i", "Yíyí orísun padà", "Títún àṣìṣe àti àlàfo ṣe kí o tó lo ìṣirò"], answer: 3, why: "Ìṣirò tó mọ́ ń fún ọ ní àbájáde tó tọ́." },
          { objective: "O3", q: "Ọ̀nà tó dára jù láti rí ìdá-ọgọ́rùn-ún ojú-àmì mẹ́ta ẹgbẹ́ nínú ìdíje 10 ni:", options: ["Ṣíṣírò ìpíndọ́gba ìdá-ọgọ́rùn-ún ìdíje kọ̀ọ̀kan", "Àpapọ̀ àwọn tó wọlé tí a pín sí àpapọ̀ ìgbìyànjú", "Ríro àwọn ìdá-ọgọ́rùn-ún pọ̀", "Fífojú díwọ̀n"], answer: 1, why: "Àpapọ̀ ń ṣírò àwọn ìdíje tí ìgbìyànjú wọn yàtọ̀ lọ́nà tó tọ́." },
          { objective: "O3", q: "Kí nìdí tí a fi ń lo ìwọ̀n fún ìdíje kan tàbí fún ìṣẹ́jú kan?", options: ["Láti mú kí nọ́mbà tóbi", "Láti fi wéra lọ́nà òdodo nígbà tí àkókò eré bá yàtọ̀", "Nítorí pé ó gbajúmọ̀", "Láti fi ìṣirò pamọ́"], answer: 1, why: "Ìwọ̀n ń ṣàtúnṣe fún àǹfààní tí eléré kọ̀ọ̀kan ní." }
        ]
      }
    },
    {
      name: "Orí 2: Fífihàn àti ṣíṣàlàyé",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe àwòrán àtẹ tó yé",
          minutes: 5,
          goal: "Ṣe àwòrán àtẹ kan tó dáhùn ìbéèrè rẹ ní ìwò kan.",
          text: [
            "Yan àwòrán àtẹ tó bá ìbéèrè náà mu. Fífi àwọn ẹgbẹ́ wéra (nílé àti lóde): àtẹ ọ̀pá (bar chart). Ìyípadà lórí àkókò (àmì ní ìdíje dé ìdíje): àtẹ ìlà (line chart). Àwọn apá inú odindi kan: àtẹ ọ̀pá sábà máa ń yé ju àtẹ páì (pie chart) lọ.",
            "Jẹ́ kí ó yé: àkọlé tó sọ ohun tí o rí (\"A ń ju ojú-àmì mẹ́ta wọlé ní 6 points dáadáa jù nílé\"), orúkọ lórí àwọn ìlà ẹ̀gbẹ́ (axis), ìlà ẹ̀gbẹ́ òòró (y-axis) tó bẹ̀rẹ̀ láti òdo fún àtẹ ọ̀pá, kò sì sí ọ̀ṣọ́ àfikún.",
            "Nínú Google Sheets, yan ìṣirò rẹ kí o sì fi àwòrán àtẹ sínú rẹ̀ (insert chart), lẹ́yìn náà yan irú àtẹ kí o sì ṣàtúnṣe àwọn orúkọ. O lè béèrè lọ́wọ́ olùrànlọ́wọ́ AI irú àtẹ wo ló bá ìbéèrè rẹ mu."
          ],
          steps: ["Pinnu: ṣé o ń fi àwọn ẹgbẹ́ wéra ni tàbí ìyípadà lórí àkókò?", "Yan àtẹ ọ̀pá tàbí àtẹ ìlà.", "Fi àwòrán àtẹ sínú Sheets.", "Kọ àkọlé tó sọ ohun tí o rí.", "Kọ orúkọ sí àwọn ìlà ẹ̀gbẹ́; jẹ́ kí àtẹ ọ̀pá bẹ̀rẹ̀ láti òdo."],
          words: [["Àtẹ ọ̀pá (bar chart)", "àwòrán àtẹ pẹ̀lú àwọn ọ̀pá láti fi àwọn ẹgbẹ́ wéra."], ["Àtẹ ìlà (line chart)", "àwòrán àtẹ pẹ̀lú ìlà kan láti fi ìyípadà lórí àkókò hàn."], ["Ìlà ẹ̀gbẹ́ (axis)", "ìlà tó wà ní ẹ̀gbẹ́ tàbí ìsàlẹ̀ àwòrán àtẹ, tí ó ní orúkọ."]],
          slides: [
            { title: "Yan àwòrán àtẹ", bullets: ["Fífi àwọn ẹgbẹ́ wéra: àtẹ ọ̀pá", "Ìyípadà lórí àkókò: àtẹ ìlà", "Àtẹ ọ̀pá sábà máa ń yé ju àtẹ páì lọ"] },
            { title: "Jẹ́ kí ó yé", bullets: ["Àkọlé sọ ohun tí o rí", "Orúkọ lórí àwọn ìlà ẹ̀gbẹ́", "Àwọn ọ̀pá bẹ̀rẹ̀ láti òdo"] },
            { title: "Nínú Sheets", bullets: ["Yan ìṣirò, fi àwòrán àtẹ sínú rẹ̀", "Yan irú rẹ̀, ṣàtúnṣe àwọn orúkọ"] }
          ],
          tryIt: "Ṣe àwòrán àtẹ kan tó dáhùn ìbéèrè rẹ. Fún un ní àkọlé tó sọ ohun tí o rí, kí o sì kọ orúkọ sí àwọn ìlà ẹ̀gbẹ́ méjèèjì.",
          youCanNow: "ṣe àwòrán àtẹ tó yé tí ó dáhùn ìbéèrè kan ní ìwò kan.",
          quickCheck: [
            { objective: "O4", q: "Kí ni àkọlé àwòrán àtẹ tó dára gbọ́dọ̀ ṣe?", options: ["Sọ \"Chart 1\" nìkan", "Kọ gbogbo nọ́mbà sílẹ̀", "Sọ ohun tí o rí", "Wà ní òfo"], answer: 2, why: "Àkọlé tó sọ ohun tí o rí ń jẹ́ kí àwọn ènìyàn lóye àwòrán àtẹ ní ìwò kan." },
            { objective: "O4", q: "O ń fi bí ẹgbẹ́ ṣe ń ju bọ́ọ̀lù wọlé nílé wé ti lóde. Àwòrán àtẹ wo ni o máa yàn?", options: ["Àtẹ páì", "Máàpù", "Tábìlì láìsí àwòrán àtẹ", "Àtẹ ọ̀pá"], answer: 3, why: "Àtẹ ọ̀pá ń fi àwọn ẹgbẹ́ díẹ̀ wéra ní ẹ̀gbẹ́ ara wọn kedere." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ìbáṣepọ̀, iye àpẹẹrẹ àti àwọn ẹ̀tàn míì",
          minutes: 5,
          goal: "Dá ẹ̀tàn mẹ́ta tó wọ́pọ̀ tó ń mú kí nọ́mbà ṣini lọ́nà mọ̀.",
          text: [
            "Àpẹẹrẹ tó kéré: ìdíje mẹ́ta kò tó láti fi ohun púpọ̀ hàn. Eléré tó ju 4 wọlé nínú 5 kì í ṣe ẹni tó dájú pé ó máa ń ju 80 percent wọlé. Ìdíje púpọ̀ sí i ń jẹ́ kí o ní ìdánilójú sí i.",
            "Ìbáṣepọ̀ kì í ṣe ohun tó fà á: tí ẹgbẹ́ kan bá ń borí jù nígbà tí wọ́n bá wọ aṣọ búlúù, ó ṣeé ṣe kí aṣọ náà má jẹ́ ìdí rẹ̀. Pé nǹkan méjì ń yí padà pọ̀ kò túmọ̀ sí pé ọ̀kan ló ń fa èkejì; wá àlàyé míì, bí agbára alátakò tàbí ìdíje nílé.",
            "Àyíká ṣe pàtàkì: ìṣirò kò mú gbogbo nǹkan, bíi ìsapá ìdáàbòbò (defense), ìpalára, tàbí bí àwọn alátakò ṣe lágbára tó. Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ láti kọ àlàyé míì sílẹ̀: \"Kí ni ohun míì tó lè ṣàlàyé àpẹẹrẹ yìí?\""
          ],
          steps: ["Ṣàyẹ̀wò iye àpẹẹrẹ.", "Béèrè pé: ṣé ohun míì lè ṣàlàyé rẹ̀?", "Wo àyíká: àwọn alátakò, ìpalára, nílé/lóde.", "Béèrè lọ́wọ́ AI fún àlàyé míì.", "Kọ bí ìdánilójú rẹ ṣe pọ̀ tó."],
          words: [["Iye àpẹẹrẹ (sample size)", "iye ìdíje tàbí ìgbìyànjú tó wà nínú ìṣirò rẹ."], ["Ìbáṣepọ̀ (correlation)", "nǹkan méjì tí wọ́n sábà máa ń yí padà pọ̀."], ["Ohun tó fà á (causation)", "nígbà tí nǹkan kan bá fa òmíràn ní tòótọ́."]],
          slides: [
            { title: "Àpẹẹrẹ tó kéré", bullets: ["4 nínú 5 kì í ṣe 80% tí a ti fi hàn", "Ìdíje púpọ̀ sí i, ìdánilójú púpọ̀ sí i"] },
            { title: "Ìbáṣepọ̀ kì í ṣe ohun tó fà á", bullets: ["Aṣọ búlúù kì í borí ìdíje", "Wá àlàyé míì"] },
            { title: "Àyíká", bullets: ["Àwọn alátakò, ìpalára, nílé/lóde", "A kì í fìgbà gbogbo ka ìsapá àti ìdáàbòbò"] }
          ],
          tryIt: "Wo ohun tí o rí. Kọ iye àpẹẹrẹ, ohun méjì míì tó lè ṣàlàyé rẹ̀, àti bí ìdánilójú rẹ ṣe pọ̀ tó (kéré, àárín, ga).",
          youCanNow: "dá àpẹẹrẹ tó kéré, àdàpọ̀ ìbáṣepọ̀ àti ohun tó fà á, àti àyíká tó sọnù mọ̀.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ẹ̀tàn àpẹẹrẹ tó kéré?", options: ["Fífa ìparí èrò ńlá yọ láti inú ìdíje tàbí ìgbìyànjú tó kéré jù", "Lílo ìṣirò ti ìjọba", "Ṣíṣe àtẹ ọ̀pá", "Kíkọ orúkọ sí àwọn ìlà ẹ̀gbẹ́"], answer: 0, why: "Ìdíje tàbí ìgbìyànjú díẹ̀ lè yí padà nípa àǹfààní lásán." },
            { objective: "O5", q: "Ẹgbẹ́ rẹ gba àmì púpọ̀ sí i lẹ́yìn ìgbóná-ara (warm-up) tuntun, ṣùgbọ́n wọ́n tún bá àwọn alátakò tí kò lágbára ṣeré. Kí ni o máa kọ?", options: ["Ìgbóná-ara náà ló fà á", "Àwọn alátakò tí kò lágbára náà lè ṣàlàyé rẹ̀", "Kò sí nǹkan; a ti fi hàn", "Pa ohun tí o rí rẹ́"], answer: 1, why: "Àwọn ohun míì lè ṣàlàyé àpẹẹrẹ kan, nítorí náà o máa dárúkọ wọn." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣàlàyé ohun tí o rí",
          minutes: 5,
          goal: "Kọ ohun tí o rí ní gbólóhùn mẹ́ta pẹ̀lú ààlà rẹ̀, kí o sì pín in.",
          text: [
            "Ohun tí o rí tó dára ní gbólóhùn mẹ́ta: 1. Ohun tí o rí, pẹ̀lú nọ́mbà kan. 2. Ìdí tí ó fi lè ṣe pàtàkì fún ẹgbẹ́. 3. Ààlà kan nínú ìṣirò náà. Àpẹẹrẹ: \"Nínú ìdíje 12, a ju 38% ojú-àmì mẹ́ta wọlé nílé àti 31% lóde. Tí ìyẹn bá dúró, dídánrawò ìlànà ìdíje lóde lè ṣèrànwọ́. Pẹ̀lú ìdíje 6 péré lóde, èyí lè jẹ́ àǹfààní lásán.\"",
            "Ní kí olùrànlọ́wọ́ AI mú kí àwọn gbólóhùn rẹ yé sí i, lẹ́yìn náà yẹ àwọn nọ́mbà wò fúnra rẹ. Fi àwòrán àtẹ hàn pẹ̀lú rẹ̀.",
            "Pín in fún kóòṣì rẹ gẹ́gẹ́ bí ìsọfúnni, kì í ṣe àṣẹ. Àwọn kóòṣì ń da nọ́mbà pọ̀ mọ́ ohun tí wọ́n ń rí. Má ṣe pín ìṣirò eléré kan pàtó fún gbogbo ènìyàn láìgba àṣẹ."
          ],
          steps: ["Gbólóhùn 1: ohun tí o rí, pẹ̀lú nọ́mbà kan.", "Gbólóhùn 2: ìdí tí ó fi lè ṣe pàtàkì.", "Gbólóhùn 3: ààlà kan.", "Fi àwòrán àtẹ rẹ kún un.", "Pín in fún kóòṣì rẹ, kì í ṣe fún gbogbo ènìyàn."],
          words: [["Ohun tí o rí (finding)", "ohun tí ìtúpalẹ̀ rẹ fi hàn."], ["Ààlà (limit)", "ìdí kan tí ohun tí o rí lè má fi ṣeé gbẹ́kẹ̀lé pátápátá."]],
          slides: [
            { title: "Gbólóhùn mẹ́ta", bullets: ["1. Ohun tí o rí, pẹ̀lú nọ́mbà kan", "2. Ìdí tí ó fi lè ṣe pàtàkì", "3. Ààlà kan"] },
            { title: "Mú un dára", bullets: ["AI ń mú kí ó yé sí i", "Ìwọ ń yẹ àwọn nọ́mbà wò", "Fi àwòrán àtẹ rẹ kún un"] },
            { title: "Pín in dáadáa", bullets: ["Ìsọfúnni, kì í ṣe àṣẹ", "Kóòṣì ń da ìṣirò pọ̀ mọ́ ohun tí ó rí", "Kò sí ìṣirò eléré fún gbogbo ènìyàn láìsí àṣẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ohun tí o rí ní gbólóhùn mẹ́ta pẹ̀lú àwòrán àtẹ rẹ, iye àpẹẹrẹ àti orísun, kí o sì pín in fún kóòṣì rẹ tàbí ọmọ ẹgbẹ́ kan.",
          youCanNow: "ṣàlàyé ohun tí ìṣirò fi hàn lọ́nà òtítọ́, pẹ̀lú àwọn ààlà rẹ̀.",
          quickCheck: [
            { objective: "O6", q: "Kí ni apá mẹ́ta ohun tí o rí tó dára?", options: ["Àwàdà, àwòrán àtẹ àti àmọ̀ràn", "Nọ́mbà tó tóbi jù nìkan", "Nọ́mbà kan, ìdí tí ó fi ṣe pàtàkì àti ààlà kan", "Àṣẹ, ọjọ́ ìkẹyìn àti orúkọ kan"], answer: 2, why: "Apá mẹ́ta wọ̀nyí ń jẹ́ kí ohun tí o rí yé, kí ó sì jẹ́ òtítọ́." },
            { objective: "O6", q: "O fẹ́ fi ìṣirò ọmọ ẹgbẹ́ kan sórí ayélujára. Kí ni o kọ́kọ́ máa ṣe?", options: ["Fi wọ́n síbẹ̀ lẹ́sẹ̀kẹsẹ̀", "Yí orúkọ rẹ̀ padà díẹ̀", "Fi àwọn ìdíje tí kò dára nìkan síbẹ̀", "Béèrè àṣẹ rẹ̀"], answer: 3, why: "Ìṣirò eléré kan pàtó ni a ń pín fún gbogbo ènìyàn nígbà tí a bá gba àṣẹ nìkan." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Fífihàn àti ṣíṣàlàyé",
        questions: [
          { objective: "O4", q: "Àwòrán àtẹ wo ló bá \"àmì ní ìdíje dé ìdíje jálẹ̀ sáà eré\" mu?", options: ["Àtẹ páì", "Kò sí àwòrán àtẹ", "Máàpù", "Àtẹ ìlà"], answer: 3, why: "Àtẹ ìlà ń fi ìyípadà lórí àkókò hàn." },
          { objective: "O4", q: "Àkọlé àwòrán àtẹ tó dára:", options: ["Ń sọ ohun tí o rí", "Ń sọ \"Chart 1\"", "Wà ní òfo", "Jẹ́ àwàdà"], answer: 0, why: "Ó ń sọ fún òǹkàwé ohun tí ó yẹ kí ó rí." },
          { objective: "O5", q: "Eléré kan ju 4 wọlé nínú 5 ní ìdíje kan. Èyí fi hàn pé:", options: ["Ó máa ń ju 80% wọlé", "Ó yẹ kí ó ju gbogbo bọ́ọ̀lù", "Kò fi púpọ̀ hàn; àpẹẹrẹ náà kéré", "Kò sí nǹkan kankan rárá láéláé"], answer: 2, why: "Àpẹẹrẹ tó kéré lè ṣini lọ́nà." },
          { objective: "O5", q: "Ẹgbẹ́ kan ń borí jù nínú aṣọ búlúù. Ó ṣeé ṣe jù pé:", options: ["Búlúù ló ń fa ìborí", "Má wọ pupa láéláé", "Ìṣirò náà jẹ́ èké", "Ohun míì ló ṣàlàyé rẹ̀"], answer: 3, why: "Ìbáṣepọ̀ kì í ṣe ohun tó fà á." },
          { objective: "O6", q: "Gbólóhùn 3 nínú ohun tí o rí ni:", options: ["Àṣẹ sí kóòṣì", "Ààlà kan nínú ìṣirò náà", "Àwàdà", "Ọ̀rọ̀ aṣínà (password) rẹ"], answer: 1, why: "Ohun tí o rí tó jẹ́ òtítọ́ ní àwọn ààlà nínú." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìpìlẹ̀ Ìtúpalẹ̀ Ìṣirò Eré Ìdárayá",
    questions: [
      { objective: "O1", q: "Ìtúpalẹ̀ ń bẹ̀rẹ̀ pẹ̀lú:", options: ["Spreadsheet", "Àwòrán àtẹ", "Ìbéèrè kan", "Àmọ̀ràn"], answer: 2, why: "Ìbéèrè náà ló ń tọ́ gbogbo ohun yòókù sọ́nà." },
      { objective: "O1", q: "Ìbéèrè wo ni ìṣirò KÒ lè dáhùn dáadáa?", options: ["\"Ta ló ń sapá jù?\"", "\"Ṣé a ń gba àmì púpọ̀ sí i nílé?\"", "\"Ṣé serve mi dára jù ní set 1?\"", "\"Ṣé a ń sọ bọ́ọ̀lù nù jù ní ìpín 4th?\""], answer: 0, why: "A kì í wọn ìsapá nínú box score." },
      { objective: "O2", q: "Box score jẹ́:", options: ["Tábìlì ìṣirò láti inú ìdíje kan", "Àpótí ẹ̀bùn", "Irú àwòrán àtẹ kan", "Ìjókòó ẹgbẹ́"], answer: 0, why: "Ó ń kọ ìṣirò ìdíje kan sílẹ̀." },
      { objective: "O2", q: "Nínú tábìlì rẹ, ìlà kọ̀ọ̀kan gbọ́dọ̀ jẹ́:", options: ["Sáà eré kan", "Nọ́mbà kan lásán", "Ìdíje kan", "Àwòrán àtẹ kan"], answer: 2, why: "Ìlà kan fún ìdíje kọ̀ọ̀kan ń jẹ́ kí ó wà létòlétò." },
      { objective: "O2", q: "\"Lincoln HS\" àti \"Lincoln High\" nínú ọ̀wọ̀n kan náà jẹ́:", options: ["Kò burú", "Orúkọ tí kò bára mu tí o gbọ́dọ̀ tún ṣe", "Àwòrán àtẹ", "Àgbékalẹ̀"], answer: 1, why: "Ẹgbẹ́ kan náà tí a kọ ní ọ̀nà méjì ń ba kíkà jẹ́." },
      { objective: "O2", q: "AI rí nọ́mbà kan tó sọnù. O máa tún un ṣe nípa:", options: ["Fífojú díwọ̀n", "Jíjẹ́ kí AI dá a", "Pípa ọ̀wọ̀n náà rẹ́", "Ṣíṣàyẹ̀wò orísun àkọ́kọ́"], answer: 3, why: "Tún un ṣe láti orísun, kì í ṣe pẹ̀lú àmọ̀ràn." },
      { objective: "O3", q: "=AVERAGE(B2:B11) ń fún ọ ní:", options: ["Àpapọ̀", "Nọ́mbà tó tóbi jù", "Ìpíndọ́gba àwọn sẹ́ẹ̀lì yẹn", "Àwòrán àtẹ"], answer: 2, why: "AVERAGE ń ṣírò ìpíndọ́gba." },
      { objective: "O3", q: "Ìdá-ọgọ́rùn-ún ojú-àmì mẹ́ta jẹ́:", options: ["3PA tí a pín sí 3PM", "3PM pẹ̀lú 3PA", "Àmì tí a pín sí iye ìdíje", "3PM tí a pín sí 3PA"], answer: 3, why: "Àwọn tó wọlé lórí ìgbìyànjú." },
      { objective: "O3", q: "Kí nìdí tí a kò fi ń ṣírò ìpíndọ́gba ìdá-ọgọ́rùn-ún ìdíje kọ̀ọ̀kan?", options: ["Àwọn ìdíje tí ìgbìyànjú wọn yàtọ̀ máa ní ìwúwo tí kò tọ́", "Ó lòdì sí òfin", "Ó máa ń tọ́ nígbà gbogbo", "Sheets kò lè ṣe é"], answer: 0, why: "Lo àpapọ̀ fún ìdá-ọgọ́rùn-ún tòótọ́." },
      { objective: "O3", q: "Àmì fún ìdíje kọ̀ọ̀kan jẹ́:", options: ["Ìdá-ọgọ́rùn-ún", "Ìwọ̀n", "Àwòrán àtẹ", "Box score"], answer: 1, why: "Ó jẹ́ ìṣirò kan fún ìdíje kan." },
      { objective: "O3", q: "Yẹ àgbékalẹ̀ kan wò nípa:", options: ["Gbígbẹ́kẹ̀lé e", "Pípa á rẹ́", "Ṣíṣe ìlà kan pẹ̀lú ẹ̀rọ ìṣirò", "Bíbéèrè lọ́wọ́ olùfẹ́ eré kan"], answer: 2, why: "Àyẹ̀wò kan tí o fi ọwọ́ ṣe ń mú àṣìṣe." },
      { objective: "O4", q: "Láti fi nílé àti lóde wéra, lo:", options: ["Àtẹ ọ̀pá", "Àtẹ ìlà fún àkókò nìkan", "Kò sí àwòrán àtẹ", "Fọ́tò kan"], answer: 0, why: "Àwọn ọ̀pá ń fi àwọn ẹgbẹ́ wéra." },
      { objective: "O4", q: "Ìlà ẹ̀gbẹ́ òòró (y-axis) àtẹ ọ̀pá sábà máa ń bẹ̀rẹ̀ láti:", options: ["Nọ́mbà tó kéré jù", "100", "Ibikíbi", "Òdo"], answer: 3, why: "Bí bẹ́ẹ̀ kọ́, ìyàtọ̀ máa dà bí ẹni pé ó tóbi ju bí ó ṣe rí lọ." },
      { objective: "O4", q: "Ohun tó sábà máa ń yé ju àtẹ páì lọ:", options: ["Àtẹ páì 3D", "Àtẹ ọ̀pá", "Ìkójọ ọ̀rọ̀ (word cloud)", "Ojú-ìwé òfo"], answer: 1, why: "Àwọn ọ̀pá rọrùn láti fi wéra." },
      { objective: "O5", q: "Iye àpẹẹrẹ (sample size) túmọ̀ sí:", options: ["Ìwọ̀n bàtà rẹ", "Iye ìdíje tàbí ìgbìyànjú tó wà nínú ìṣirò rẹ", "Bí àwòrán àtẹ ṣe tóbi tó", "Iye ọmọ ẹgbẹ́"], answer: 1, why: "Ìṣirò púpọ̀ sí i túmọ̀ sí ìdánilójú púpọ̀ sí i." },
      { objective: "O5", q: "Ìbáṣepọ̀ (correlation) túmọ̀ sí:", options: ["Ọ̀kan ló ń fa èkejì", "Irú àwòrán àtẹ kan", "Ìgbésẹ̀ títún ìṣirò ṣe", "Nǹkan méjì sábà máa ń yí padà pọ̀"], answer: 3, why: "Yíyí padà pọ̀ kì í ṣe fífa èkejì." },
      { objective: "O5", q: "Èwo ni àyíká tí ìṣirò lè má mú?", options: ["Agbára alátakò àti ìpalára", "Àmì (points)", "Rebound", "Àmì ìkẹyìn ìdíje"], answer: 0, why: "Àyíká ń ṣàlàyé àwọn nọ́mbà." },
      { objective: "O6", q: "Ohun tí o rí tó dára ní:", options: ["Èrò nìkan", "Gbogbo ìṣirò", "Nọ́mbà kan, ìdí tí ó fi ṣe pàtàkì àti ààlà kan", "Kò ní nọ́mbà kankan"], answer: 2, why: "Ìyẹn ni ìlànà gbólóhùn mẹ́ta." },
      { objective: "O6", q: "O máa pín ohun tí o rí fún kóòṣì rẹ gẹ́gẹ́ bí:", options: ["Àṣẹ", "Ìfiránṣẹ́ orí ìkànnì àjọlò", "Àṣírí", "Ìsọfúnni, kì í ṣe àṣẹ"], answer: 3, why: "Àwọn kóòṣì ń da ìṣirò pọ̀ mọ́ ohun tí wọ́n ń rí." },
      { objective: "O6", q: "Ìṣirò eléré kan pàtó ni a gbọ́dọ̀ pín fún gbogbo ènìyàn:", options: ["Nígbà gbogbo", "Nígbà tí a bá gba àṣẹ nìkan", "Fún àwọn ẹgbẹ́ alátakò", "Nínú àwọn ìdáhùn (comments)"], answer: 1, why: "Ìṣirò eléré jẹ́ ti ara ẹni." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      5,
      7,
      8,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ìbéèrè",
        objective: "O1",
        notYet: "Ìbéèrè náà kò ṣe kedere tàbí ìṣirò kò lè dáhùn rẹ̀.",
        meets: "Ìbéèrè náà dárúkọ ìṣirò kan, àwọn ìdíje àti ohun tí a ń fi wéra.",
        exceeds: "Ó tún sọ ìdí tí ìdáhùn náà fi ṣe pàtàkì fún ẹgbẹ́."
      },
      {
        name: "Ìṣirò tó mọ́",
        objective: "O2",
        notYet: "Kò tó ìdíje 10, kò sí orísun, tàbí àlàfo àti orúkọ tí kò bára mu ṣì wà níbẹ̀.",
        meets: "Ó kéré tán ìdíje 10 láti orísun ti ìjọba, ọ̀kan ní ìlà kọ̀ọ̀kan, tí a ti tún ṣe.",
        exceeds: "Ó kọ àtúnṣe kọ̀ọ̀kan sílẹ̀ àti ibi tí a ti yẹ̀ ẹ́ wò."
      },
      {
        name: "Ìṣirò",
        objective: "O3",
        notYet: "Ìṣirò kan kò sí, tàbí ìdá-ọgọ́rùn-ún kan jẹ́ ìpíndọ́gba ìdá-ọgọ́rùn-ún ìdíje kọ̀ọ̀kan.",
        meets: "Ìpíndọ́gba kan, ìdá-ọgọ́rùn-ún ọ̀nà àpapọ̀ kan àti ìwọ̀n kan fún ìdíje kọ̀ọ̀kan, tí a fi ọwọ́ yẹ ọ̀kan wò.",
        exceeds: "Àwọn àgbékalẹ̀ ní orúkọ kí ẹlòmíì lè tẹ̀lé wọn."
      },
      {
        name: "Àwòrán àtẹ",
        objective: "O4",
        notYet: "Irú àtẹ tí kò tọ́, kò sí àkọlé, tàbí àwọn ìlà ẹ̀gbẹ́ kò ní orúkọ.",
        meets: "Àwòrán àtẹ kan tó bá a mu, pẹ̀lú àkọlé tó sọ ohun tí a rí àti orúkọ lórí àwọn ìlà ẹ̀gbẹ́.",
        exceeds: "Àtẹ ọ̀pá bẹ̀rẹ̀ láti òdo, kò sì sí ohun àfikún tó ń fa ọkàn kúrò lórí ohun tí a rí."
      },
      {
        name: "Ohun tí a rí lọ́nà òtítọ́",
        objective: "O6",
        notYet: "Ó sọ pé a ti fi hàn, tàbí kò kọ iye àpẹẹrẹ àti àwọn ààlà.",
        meets: "Gbólóhùn mẹ́ta: nọ́mbà kan, ìdí tí ó fi ṣe pàtàkì àti ààlà kan, pẹ̀lú orísun.",
        exceeds: "Ó tún dárúkọ àwọn àlàyé míì tó ṣeé ṣe àti ìpele ìdánilójú."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege nínú iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n pín ohun tí ìṣirò fi hàn fún kóòṣì tàbí ẹgbẹ́ láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn kóòṣì tàbí ẹgbẹ́ tí wọ́n sọ pé àwọn lo ìtúpalẹ̀ akẹ́kọ̀ọ́ kan láti ṣe ìpinnu",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Koach Learn míì fún eléré ìdárayá tàbí nípa ìṣirò láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀ǹpútà pẹ̀lú Google Sheets ọ̀fẹ́",
      "Àǹfààní láti wọ ojú-ìwé ìṣirò ti ìjọba ẹgbẹ́, líìgì tàbí ilé-ẹ̀kọ́",
      "Ẹ̀rọ ìṣirò (calculator) àti olùrànlọ́wọ́ AI ọ̀fẹ́",
      "Nǹkan bí ìṣẹ́jú 60 fún àwọn ẹ̀kọ́, àwọn ìdánwò ìmọ̀ àti ìdánwò ìkẹyìn, pẹ̀lú àkókò láti tẹ ìṣirò ìdíje 10 sínú rẹ̀"
    ],
    facilitatorNotes: [
      "Jẹ́ kí àwọn ẹgbẹ́ kékeré yan ẹgbẹ́ eré kan kí wọ́n sì pín iṣẹ́ títẹ ìṣirò sínú rẹ̀, lẹ́yìn náà kí wọ́n fi àwọn ìwé tí wọ́n ti tún ṣe wéra.",
      "Fi ọ̀nà àpapọ̀ fún ìdá-ọgọ́rùn-ún hàn níwájú wọn; òun ni àṣìṣe tó wọ́pọ̀ jù.",
      "Lo ìṣirò ẹgbẹ́ lápapọ̀ tàbí ìṣirò tó wà fún gbogbo ènìyàn fún ìdánrawò; gba àṣẹ kí o tó pín nọ́mbà eléré kan pàtó.",
      "Ní kí ẹgbẹ́ kọ̀ọ̀kan ka ohun tí wọ́n rí sókè kí wọ́n sì dárúkọ ààlà kan kí wọ́n tó pín in fún kóòṣì.",
      "Fi rubric ṣe àmì iṣẹ́ ìkẹyìn, ìlà \"Kò tíì dé\" kan ní àkókò kan."
    ]
  }
};
