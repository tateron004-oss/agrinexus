"use strict";

// Koach Learn course (Yoruba translation of athletes/athletes-video-analysis.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-video-analysis-yo",
  lang: "yo",
  translationOf: "athletes-video-analysis",
  category: "Athletes",
  name: "Ìtúpalẹ̀ Fídíò àti Ọgbọ́n Eré",
  skills: "Ṣíṣe fídíò ìdíje àti ìdánrawò tó wúlò, Wíwo fídíò pẹ̀lú ìbéèrè kan, Fífi àmì sí àwọn ìgbésẹ̀ eré nínú spreadsheet, Lílo AI láti ṣàkópọ̀ àwọn ìgbésẹ̀ tí o fi àmì sí, Yíyí fídíò padà sí ohun kan láti dánrawò",
  outcome: "ya fídíò ìdíje tàbí ìdánrawò, fi àmì sí ó kéré tán ìgbésẹ̀ eré 20 nínú spreadsheet pẹ̀lú ìbéèrè tó yé lọ́kàn rẹ, lo olùrànlọ́wọ́ AI láti ṣàkópọ̀ àwọn àpẹẹrẹ tó ń tún ṣẹlẹ̀, kí o sì yí wọn padà sí ohun kan láti dánrawò tí ìwọ àti kóòṣì rẹ fohùn ṣọ̀kan lé lórí.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn eléré ìdárayá àti àwọn kóòṣì tí wọ́n fẹ́ kẹ́kọ̀ọ́ láti inú fídíò láìlo software olówó ńlá. O máa lo kámẹ́rà fóònù, spreadsheet ọ̀fẹ́ àti olùrànlọ́wọ́ AI ọ̀fẹ́.",
    "Wíwo fídíò eré jẹ́ ọgbọ́n tí a ń kọ́. Ọ̀pọ̀ ènìyàn máa ń wo àwọn ìgbésẹ̀ tó dùn jù nìkan. O máa kọ́ láti wò ó pẹ̀lú ìbéèrè, fi àmì sí ohun tó ṣẹlẹ̀, wá àwọn àpẹẹrẹ tó ń tún ṣẹlẹ̀, kí o sì yí wọn padà sí ohun tí o máa dánrawò.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ya fídíò ìdíje kan tàbí ìdánrawò kan (pẹ̀lú àṣẹ), yan ìbéèrè kan, fi àmì sí ó kéré tán ìgbésẹ̀ eré 20 nínú Google Sheet, ní kí olùrànlọ́wọ́ AI ṣàkópọ̀ àwọn àpẹẹrẹ láti inú àwọn àmì rẹ, kí o sì kọ ohun kan láti dánrawò. Ṣàyẹ̀wò rẹ̀ pẹ̀lú kóòṣì rẹ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn eléré ìdárayá ilé-ẹ̀kọ́ girama, yunifásítì àti ẹgbẹ́ (club), àti àwọn kóòṣì wọn, tí wọ́n fẹ́ kẹ́kọ̀ọ́ láti inú fídíò ìdíje àti ìdánrawò láìlo software olówó ńlá.",
    startingPoint: "Wọ́n lè ya fídíò lórí fóònù, wọ́n sì ti wo fídíò ìdíje rí, ní pàtàkì fún àwọn ìgbésẹ̀ tó dùn jù. Díẹ̀ ló ti ya fídíò pẹ̀lú ètò, fi àmì sí àwọn ìgbésẹ̀ eré, ka àwọn àpẹẹrẹ nínú spreadsheet, tàbí ṣàyẹ̀wò àkópọ̀ AI pẹ̀lú ìkà tiwọn.",
    gap: "Tí o bá wo fídíò láìní ìbéèrè, àwọn ìgbésẹ̀ tó dùn jù àti àṣìṣe ńlá ni o máa rí jù, nítorí náà ìdánrawò kì í yí padà. Fífi àmì sí àti kíkà ń yí fídíò padà sí ẹ̀rí tó ń ṣamọ̀nà sí ohun kan tó yé láti dánrawò, àti ìjíròrò tó dára jù pẹ̀lú kóòṣì.",
    constraints: [
      "Ọ̀rọ̀ tó rọrùn ní nǹkan bí ìpele kíkàwé kíláàsì 7",
      "Kámẹ́rà fóònù, Google Sheets ọ̀fẹ́ àti olùrànlọ́wọ́ AI ọ̀fẹ́; kò sí software tí a ń sanwó fún",
      "Nǹkan bí ìṣẹ́jú 60 ẹ̀kọ́ pẹ̀lú àkókò láti ya fídíò ìdíje kan tàbí ìdánrawò kan kí o sì fi àmì sí i",
      "Àwọn òfin ẹgbẹ́, ilé-ẹ̀kọ́ àti líìgì nípa yíya fídíò; fídíò eré àwọn ọmọdé ń fi àwọn ọmọ ẹlòmíì hàn",
      "Orúkọ àwọn eléré míì àti ìsọfúnni àdáni wọn kò gbọ́dọ̀ wọ inú àwọn irinṣẹ́ AI"
    ],
    prerequisites: "Kò sí. Ẹ̀kọ́ \"Àwọn Irinṣẹ́ AI fún Àwọn Eléré Ìdárayá\" máa ràn ọ́ lọ́wọ́ tí o kò bá tíì lo Google Sheets rí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú fóònù níbi ìdíje tàbí ìdánrawò", action: "ya fídíò tó wúlò láti ibi gíga ní àárín, pẹ̀lú ìwò tó gbòòrò tí kò mì", standard: "pẹ̀lú àṣẹ kóòṣì rẹ kí o tó yà á àti kí o tó pín in" },
    { id: "O2", condition: "Kí o tó wo fídíò ìdíje tàbí ìdánrawò", action: "kọ ìbéèrè kan tó dín kù, kí o sì wò ó lẹ́ẹ̀mejì, kí o máa dá a dúró lórí àwọn ìgbésẹ̀ eré tó dáhùn rẹ̀", standard: "pẹ̀lú ìbéèrè kan ṣoṣo fún ìwò kọ̀ọ̀kan àti àkíyèsí kúkúrú fún ìgbésẹ̀ eré kọ̀ọ̀kan tó bá a mu" },
    { id: "O3", condition: "Pẹ̀lú Google Sheets àti fídíò rẹ", action: "fi àmì sí àwọn ìgbésẹ̀ eré pẹ̀lú Nọ́mbà, Àkókò, Ipò, Ohun tó ṣẹlẹ̀, Àbájáde àti Àkíyèsí", standard: "kí o fi àmì sí ó kéré tán ìgbésẹ̀ eré 20, pẹ̀lú ọ̀rọ̀ àmì kan náà ní gbogbo ìgbà" },
    { id: "O4", condition: "Tí o bá ní ó kéré tán ìgbésẹ̀ eré 20 tí o ti fi àmì sí", action: "ka àwọn àmì rẹ pẹ̀lú sort, filter tàbí COUNTIF, kí o sì kọ àwọn àpẹẹrẹ méjì tó ga jù pẹ̀lú nọ́mbà", standard: "kí o sì kọ \"wò ó sí i\" sí àpẹẹrẹ èyíkéyìí tí ìgbésẹ̀ eré díẹ̀ péré ń tì lẹ́yìn" },
    { id: "O5", condition: "Pẹ̀lú olùrànlọ́wọ́ AI ọ̀fẹ́ àti tábìlì àmì rẹ", action: "béèrè àkópọ̀ àwọn àpẹẹrẹ tó ga jù pẹ̀lú ìkà, kí o sì fi wé ìkà tìrẹ", standard: "láìsí orúkọ àwọn eléré míì tàbí ìsọfúnni àdáni, kí gbogbo ìkà sì bá spreadsheet rẹ mu" },
    { id: "O6", condition: "Tí o bá ti rí àpẹẹrẹ rẹ tó lágbára jù", action: "kọ ohun kan láti dánrawò, kí o sì gbé e lọ bá kóòṣì rẹ pẹ̀lú nọ́mbà, àkókò inú fídíò àti ìbéèrè kan", standard: "kí ìwọ àti kóòṣì rẹ fohùn ṣọ̀kan lórí rẹ̀, pẹ̀lú ètò láti tún ya fídíò kí o sì tún fi àmì sí i lẹ́yìn náà" }
  ],
  chapters: [
    {
      name: "Orí 1: Gbígba fídíò tó dára",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yíya fídíò tí o lè lò ní tòótọ́",
          minutes: 5,
          goal: "Ṣètò fóònù láti ya fídíò ìdíje tàbí ìdánrawò tó wúlò.",
          text: [
            "Fídíò tó dára bẹ̀rẹ̀ láti ibi tí kámẹ́rà wà. Tí o bá lè ṣe é, ya á láti ibi gíga, bí orí ìjókòó òkè pátápátá ní pápá, kí o lè rí gbogbo ìgbésẹ̀ eré àti àlàfo láàárín àwọn eléré. Mú fóònù ní ìdùbúlẹ̀ (landscape), kí o sì jẹ́ kí ó dúró ṣinṣin pẹ̀lú tripod tàbí nípa fífi ara tì í mọ́ nǹkan.",
            "Tẹ̀lé bọ́ọ̀lù, ṣùgbọ́n jẹ́ kí ìwò rẹ gbòòrò tó láti rí ohun tí àwọn eléré tí kò ní bọ́ọ̀lù ń ṣe. Má ṣe sún mọ́ (zoom) jù.",
            "Gba àṣẹ. Ẹgbẹ́ rẹ, ilé-ẹ̀kọ́ rẹ tàbí líìgì rẹ lè ní òfin nípa yíya fídíò, àwọn ọmọ ẹlòmíì sì máa ń hàn nínú fídíò eré àwọn ọmọdé. Béèrè lọ́wọ́ kóòṣì rẹ kí o tó yà á àti kí o tó pín ohunkóhun."
          ],
          steps: ["Béèrè àṣẹ lọ́wọ́ kóòṣì rẹ láti ya fídíò.", "Wá ibi gíga tó wà ní àárín.", "Mú fóònù ní ìdùbúlẹ̀, kí o sì jẹ́ kí ó dúró ṣinṣin.", "Jẹ́ kí ìwò gbòòrò; tẹ̀lé bọ́ọ̀lù.", "Ṣàyẹ̀wò bátìrì àti ààyè ìpamọ́ kí ìdíje tó bẹ̀rẹ̀."],
          words: [["Landscape", "mímú fóònù ní ìdùbúlẹ̀, kí fídíò lè gbòòrò."], ["Tripod", "ìdúró ẹlẹ́sẹ̀ mẹ́ta tí ó ń mú kámẹ́rà dúró ṣinṣin."]],
          slides: [
            { title: "Ibi kámẹ́rà", bullets: ["Ibi gíga ní àárín tí o bá lè ṣe é", "Rí gbogbo ìgbésẹ̀ eré àti àlàfo"] },
            { title: "Ṣíṣètò kámẹ́rà", bullets: ["Fóònù ní ìdùbúlẹ̀", "Dúró ṣinṣin: tripod tàbí fi ara tì í", "Ìwò tó gbòòrò; tẹ̀lé bọ́ọ̀lù"] },
            { title: "Kí o tó ya fídíò", bullets: ["Béèrè lọ́wọ́ kóòṣì rẹ", "Ṣàyẹ̀wò bátìrì àti ààyè ìpamọ́", "Béèrè kí o tó pín in"] }
          ],
          tryIt: "Ní ìdánrawò rẹ tó kàn, tí kóòṣì rẹ bá gbà, ya fídíò ìṣẹ́jú márùn-ún láti ibi tó ga jù tí o lè rí. Wò ó padà: ṣé o rí gbogbo ẹni tó kópa nínú ìgbésẹ̀ eré kọ̀ọ̀kan?",
          youCanNow: "ṣètò fóònù láti ya fídíò ìdíje tàbí ìdánrawò tó wúlò, pẹ̀lú àṣẹ.",
          quickCheck: [
            { objective: "O1", q: "Kí nìdí tí ìwò fi gbọ́dọ̀ gbòòrò dípò kí o sún mọ́ (zoom) jù?", options: ["Fídíò tó gbòòrò ń lo ààyè ìpamọ́ díẹ̀", "Òfin kò gba sísún mọ́", "Láti rí ohun tí àwọn eléré tí kò ní bọ́ọ̀lù ń ṣe", "Zoom ń jẹ bátìrì tán"], answer: 2, why: "Ìwò tó gbòòrò ń fi àlàfo àti àwọn eléré tó jìnnà sí bọ́ọ̀lù hàn." },
            { objective: "O1", q: "O fẹ́ ya fídíò eré àbúrò rẹ obìnrin nínú ìdíje àwọn ọmọdé kí o sì gbé e sórí ayélujára. Kí ni o máa kọ́kọ́ ṣe?", options: ["Gbé e síta, kí o sì yọ ọ́ tí ẹnìkan bá ráhùn", "Béèrè lọ́wọ́ kóòṣì nípa àwọn òfin kí o tó yà á àti kí o tó pín in", "Ya ẹgbẹ́ kejì nìkan", "Bo ojú ara rẹ"], answer: 1, why: "Ẹgbẹ́ àti líìgì lè ní òfin nípa yíya fídíò, fídíò náà sì ń fi àwọn ọmọ ẹlòmíì hàn." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Wíwo fídíò pẹ̀lú ìbéèrè",
          minutes: 5,
          goal: "Yan ìbéèrè kan tó yé kí o tó wo fídíò.",
          text: [
            "Tí o bá wo fídíò láìní ètò, àwọn ìgbésẹ̀ tó dùn jù àti àwọn àṣìṣe rẹ tó burú jù ni o máa ń rí jù. Àwọn kóòṣì máa ń wò ó pẹ̀lú ìbéèrè.",
            "Ìbéèrè tó dára máa ń dín kù: \"Níbo ni bọ́ọ̀lù ti máa ń bọ́ lọ́wọ́ mi?\" \"Báwo ni mo ṣe ń yára padà sí ààbò?\" \"Ìtò wo nígbà gbígba serve ló ń jẹ́ kí a pàdánù àmì?\" \"Kí ni ẹgbẹ́ kejì máa ń ṣe ní third down?\"",
            "Yan ìbéèrè kan fún ìwò kọ̀ọ̀kan. Wò ó lẹ́ẹ̀kan ní ìyára déédé láti rí àwòrán gbogbogbò, lẹ́yìn náà tún wò ó, kí o sì dá a dúró lórí ìgbésẹ̀ eré kọ̀ọ̀kan tó dáhùn ìbéèrè rẹ."
          ],
          steps: ["Kọ ìbéèrè kan tó dín kù.", "Wò ó lẹ́ẹ̀kan ní ìyára déédé.", "Tún wò ó, kí o sì dá a dúró lórí ìgbésẹ̀ eré kọ̀ọ̀kan tó bá ìbéèrè rẹ mu.", "Kọ àkíyèsí kúkúrú fún ìgbésẹ̀ eré kọ̀ọ̀kan."],
          words: [["Ẹ̀kọ́ fídíò (film study)", "wíwo fídíò ìdíje tàbí ìdánrawò láti kẹ́kọ̀ọ́ àti láti tẹ̀síwájú."], ["Ọgbọ́n eré (game intelligence)", "òye ìdí tí àwọn ìgbésẹ̀ eré fi ń ṣẹlẹ̀, kì í ṣe ohun tó ṣẹlẹ̀ nìkan."]],
          slides: [
            { title: "Kò sí ètò = ìgbésẹ̀ tó dùn jù nìkan", bullets: ["O rí ìgbésẹ̀ ńlá àti àṣìṣe ńlá", "O pàdánù àwọn àpẹẹrẹ tó ń tún ṣẹlẹ̀"] },
            { title: "Ìbéèrè tó dín kù", bullets: ["\"Níbo ni bọ́ọ̀lù ti máa ń bọ́ lọ́wọ́ mi?\"", "\"Báwo ni mo ṣe ń yára padà sí ààbò?\"", "\"Kí ni wọ́n máa ń ṣe ní third down?\""] },
            { title: "Ìwò méjì", bullets: ["1. Ìyára déédé: àwòrán gbogbogbò", "2. Dá a dúró lórí ìgbésẹ̀ eré tó dáhùn ìbéèrè rẹ"] }
          ],
          tryIt: "Kọ ìbéèrè mẹ́ta tó ṣeé ṣe fún eré ìdárayá rẹ àti ipò rẹ nínú ẹgbẹ́. Yan ọ̀kan, kí o sì wo fídíò ìṣẹ́jú márùn-ún pẹ̀lú rẹ̀, kí o máa kọ àkíyèsí nígbàkúùgbà tí ó bá hàn.",
          youCanNow: "wo fídíò pẹ̀lú ìbéèrè kan tó yé, kí o sì kọ àkíyèsí lórí àwọn ìgbésẹ̀ eré tó dáhùn rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Èwo ni ìbéèrè fídíò tó dín kù?", options: ["Báwo ni mo ṣe ń yára padà sí ààbò?", "Ṣé a ṣe dáadáa?", "Ṣé sáà eré náà dára?", "Ta ni eléré tó dára jù?"], answer: 0, why: "Ìbéèrè tó dín kù ń tọ́ka sí àwọn ìgbésẹ̀ eré pàtó tí o lè dá dúró kí o sì kọ àkíyèsí lé lórí." },
            { objective: "O2", q: "O ní ìbéèrè méjì nípa fídíò rẹ. Kí ni o máa ṣe?", options: ["Dáhùn méjèèjì nínú ìwò kan", "Fi ìbéèrè kejì sílẹ̀", "Ní kí AI wò ó dípò rẹ", "Wò ó pẹ̀lú ìbéèrè kan lẹ́ẹ̀kan"], answer: 3, why: "Yan ìbéèrè kan fún ìwò kọ̀ọ̀kan." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fífi àmì sí àwọn ìgbésẹ̀ eré nínú spreadsheet",
          minutes: 6,
          goal: "Fi àmì sí àwọn ìgbésẹ̀ eré nínú Google Sheets kí o lè ka àwọn àpẹẹrẹ.",
          text: [
            "Fífi àmì sí (tagging) túmọ̀ sí kíkọ àwọn àmì díẹ̀ kan náà fún ìgbésẹ̀ eré kọ̀ọ̀kan. Ó ń yí fídíò padà sí ìsọfúnni (data) tí o lè kà.",
            "Ṣe àwọn ọ̀wọ̀n (column): Nọ́mbà ìgbésẹ̀, Àkókò nínú fídíò, Ipò (fún àpẹẹrẹ \"ìkọlù kíákíá\" tàbí \"2nd and long\"), Ohun tó ṣẹlẹ̀, Àbájáde (dára, àárín tàbí burú), àti Àkíyèsí. Lo ọ̀rọ̀ kan náà ní gbogbo ìgbà, kí \"ìpàdánù bọ́ọ̀lù\" máa jẹ́ \"ìpàdánù bọ́ọ̀lù\" nígbà gbogbo, kì í ṣe \"bọ́ọ̀lù bọ́\" nígbà míì.",
            "Àwọn app fídíò ẹgbẹ́ bíi Hudl máa ń fi àmì sí àwọn ìgbésẹ̀ eré fún ọ̀pọ̀ ilé-ẹ̀kọ́; tí ẹgbẹ́ rẹ bá ń lo ọ̀kan, béèrè lọ́wọ́ kóòṣì rẹ bí o ṣe lè lo àwọn àmì rẹ̀. Spreadsheet ń ṣiṣẹ́ fún ẹnikẹ́ni, lọ́fẹ̀ẹ́."
          ],
          steps: ["Ṣí Google Sheets.", "Ọ̀wọ̀n: Nọ́mbà, Àkókò, Ipò, Ohun tó ṣẹlẹ̀, Àbájáde, Àkíyèsí.", "Yan àkọsílẹ̀ kúkúrú ti ọ̀rọ̀ àmì kí o sì dúró lé wọn lórí.", "Dá fídíò dúró kí o sì kún ìlà kan fún ìgbésẹ̀ eré kọ̀ọ̀kan.", "Fi àmì sí ó kéré tán ìgbésẹ̀ eré 20."],
          words: [["Àmì (tag)", "orúkọ kúkúrú tí o fún ìgbésẹ̀ eré kọ̀ọ̀kan, bí \"ìpàdánù bọ́ọ̀lù\" tàbí \"ìkọlù kíákíá\"."], ["Àkókò inú fídíò (timestamp)", "ìgbà nínú fídíò tí ìgbésẹ̀ eré kan bẹ̀rẹ̀, bí 12:45."]],
          slides: [
            { title: "Fífi àmì sí = fídíò di ìsọfúnni", bullets: ["Àmì kan náà fún ìgbésẹ̀ eré kọ̀ọ̀kan", "Báyìí o lè ka àwọn àpẹẹrẹ"] },
            { title: "Àwọn ọ̀wọ̀n rẹ", bullets: ["Nọ́mbà, Àkókò, Ipò", "Ohun tó ṣẹlẹ̀, Àbájáde, Àkíyèsí"] },
            { title: "Òfin fífi àmì sí", bullets: ["Àkọsílẹ̀ kúkúrú ti ọ̀rọ̀ àmì", "Ọ̀rọ̀ kan náà ní gbogbo ìgbà", "Ó kéré tán ìgbésẹ̀ eré 20"] }
          ],
          tryIt: "Ṣètò spreadsheet àmì rẹ, kí o sì fi àmì sí ìgbésẹ̀ eré 10 láti inú fídíò rẹ pẹ̀lú ìbéèrè rẹ láti Ẹ̀kọ́ 2.",
          youCanNow: "fi àmì sí àwọn ìgbésẹ̀ eré nínú spreadsheet pẹ̀lú àmì tí kì í yí padà àti àkókò inú fídíò.",
          quickCheck: [
            { objective: "O3", q: "Ọ̀wọ̀n wo ló ń sọ bóyá ìgbésẹ̀ eré náà lọ dáadáa?", options: ["Nọ́mbà", "Àkókò", "Àbájáde", "Ipò"], answer: 2, why: "Àbájáde ni dára, àárín tàbí burú." },
            { objective: "O3", q: "O kọ \"bọ́ọ̀lù bọ́\" fún àwọn ìgbésẹ̀ eré kan, àti \"ìpàdánù bọ́ọ̀lù\" fún àwọn míì. Kí ni o máa ṣe?", options: ["Yí gbogbo wọn padà sí ọ̀rọ̀ kan, bí \"ìpàdánù bọ́ọ̀lù\"", "Fi wọ́n sílẹ̀; kò ṣe nǹkan kan", "Pa àwọn ìgbésẹ̀ eré yẹn rẹ́", "Fi ọ̀rọ̀ kẹta kún un"], answer: 0, why: "Lílo ọ̀rọ̀ kan náà ní gbogbo ìgbà ń jẹ́ kí ìkà rẹ tọ̀nà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Gbígba fídíò tó dára",
        questions: [
          { objective: "O1", q: "Ibi wo ló dára jù fún kámẹ́rà láti ya fídíò ìdíje?", options: ["Lórí ilẹ̀ lẹ́yìn góòlù nìkan", "Nínú àpò rẹ", "Ibi gíga ní àárín", "Sísún mọ́ ojú eléré kan"], answer: 2, why: "Ibi gíga ní àárín ń fi gbogbo ìgbésẹ̀ eré àti àlàfo hàn." },
          { objective: "O1", q: "Kí o tó ya fídíò ìdánrawò, o gbọ́dọ̀:", options: ["Béèrè àṣẹ lọ́wọ́ kóòṣì rẹ", "Gbé e síta láàyè (live)", "Ya yàrá ìpààrọ̀ aṣọ ẹgbẹ́ kejì", "Mú fóònù ní ìdúró"], answer: 0, why: "Ẹgbẹ́ àti ilé-ẹ̀kọ́ sábà máa ń ní òfin nípa yíya fídíò." },
          { objective: "O2", q: "Èwo ni ìbéèrè tó dára fún ẹ̀kọ́ fídíò?", options: ["\"Ṣé ìdíje náà dára?\"", "\"Kí nìdí tí a fi burú?\"", "\"Ta ló ní bàtà tó dára jù?\"", "\"Níbo ni bọ́ọ̀lù ti máa ń bọ́ lọ́wọ́ mi?\""], answer: 3, why: "Ìbéèrè tó dín kù ń tọ́ ọ sí àwọn àpẹẹrẹ tí o lè tún ṣe." },
          { objective: "O3", q: "Kí ni fífi àmì sí ń ṣe?", options: ["Ó ń pa àwọn ìgbésẹ̀ eré búburú rẹ́", "Ó ń yí fídíò padà sí ìsọfúnni tí o lè kà", "Ó ń fi orin kún un", "Ó ń mú fídíò kúrú"], answer: 1, why: "Àmì tí kì í yí padà ń jẹ́ kí o lè ka àwọn àpẹẹrẹ." },
          { objective: "O3", q: "Kí nìdí tí o fi gbọ́dọ̀ lo ọ̀rọ̀ àmì kan náà ní gbogbo ìgbà?", options: ["Láti mú un gùn", "Kí ìkà lè tọ̀nà", "Ó rẹwà jù", "Kò sí ìdí"], answer: 1, why: "Ọ̀rọ̀ tó yàtọ̀ fún ohun kan náà ń ba ìkà rẹ jẹ́." }
        ]
      }
    },
    {
      name: "Orí 2: Wíwá àwọn àpẹẹrẹ àti lílò wọ́n",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíka àwọn àpẹẹrẹ nínú àwọn àmì rẹ",
          minutes: 5,
          goal: "Ka àwọn àmì rẹ kí o sì wá àwọn àpẹẹrẹ tó ga jù.",
          text: [
            "Tí o bá ní ìgbésẹ̀ eré 20 tàbí jù bẹ́ẹ̀ lọ tí o ti fi àmì sí, ka iye ìgbà tí ipò àti àbájáde kọ̀ọ̀kan hàn. Nínú Google Sheets, o lè to (sort) ọ̀wọ̀n kan, lo filter, tàbí lo fọ́múlà COUNTIF láti ka àmì kan.",
            "Wá àpẹẹrẹ tó ń tún ṣẹlẹ̀, kì í ṣe ìgbésẹ̀ eré kan ṣoṣo: \"7 nínú ìpàdánù bọ́ọ̀lù 9 mi ṣẹlẹ̀ nígbà tí mo ń gbé bọ́ọ̀lù lọ sí apá òsì lábẹ́ ìfúnpá\" jẹ́ àpẹẹrẹ. Ìfibọ́ọ̀lùránṣẹ́ búburú kan kì í ṣe àpẹẹrẹ.",
            "Nọ́mbà kékeré lè tàn ọ́ jẹ. Tí nǹkan kan bá ṣẹlẹ̀ lẹ́ẹ̀mejì péré, wo fídíò sí i kí o tó pinnu pé àpẹẹrẹ gidi ni."
          ],
          steps: ["To tàbí filter pẹ̀lú Àbájáde.", "Ka Ipò kọ̀ọ̀kan fún àwọn àbájáde búburú.", "Kọ àwọn àpẹẹrẹ méjì tó ga jù bí gbólóhùn pẹ̀lú nọ́mbà.", "Kọ \"wò ó sí i\" sí àpẹẹrẹ èyíkéyìí tí ìgbésẹ̀ eré díẹ̀ ń tì lẹ́yìn."],
          words: [["Àpẹẹrẹ tó ń tún ṣẹlẹ̀ (pattern)", "ohun tó ń ṣẹlẹ̀ léraléra nínú àwọn ipò tó jọra."], ["COUNTIF", "fọ́múlà spreadsheet tí ó ń ka àwọn sẹ́ẹ̀lì tó bá ọ̀rọ̀ tàbí nọ́mbà kan mu."]],
          slides: [
            { title: "Ka àwọn àmì rẹ", bullets: ["To tàbí filter pẹ̀lú Àbájáde", "COUNTIF ń ka àmì kan"] },
            { title: "Àpẹẹrẹ àti ìgbésẹ̀ eré kan", bullets: ["Àpẹẹrẹ: 7 nínú ìpàdánù bọ́ọ̀lù 9 ní apá òsì", "Kì í ṣe àpẹẹrẹ: ìfibọ́ọ̀lùránṣẹ́ búburú kan"] },
            { title: "Ṣọ́ra fún nọ́mbà kékeré", bullets: ["Lẹ́ẹ̀mejì péré? Kọ́kọ́ wo fídíò sí i"] }
          ],
          tryIt: "Parí fífi àmì sí ìgbésẹ̀ eré 20. Ka àwọn àbájáde rẹ ní ìbámu pẹ̀lú ipò, kí o sì kọ àwọn àpẹẹrẹ méjì tó ga jù bí gbólóhùn pẹ̀lú nọ́mbà.",
          youCanNow: "ka àwọn àmì kí o sì ṣàpèjúwe àwọn àpẹẹrẹ pẹ̀lú nọ́mbà.",
          quickCheck: [
            { objective: "O4", q: "Èwo nínú ìwọ̀nyí ni àpẹẹrẹ?", options: ["Ìfibọ́ọ̀lùránṣẹ́ búburú kan ní ìdajì kejì", "5 nínú ìgbà 6 tí mo gbá bọ́ọ̀lù tí kò wọlé wá lẹ́yìn tí mo gbé bọ́ọ̀lù sáré (dribble)", "Àmì ìparí ìdíje", "Ìgbésẹ̀ eré tó dára jù nínú ìdíje"], answer: 1, why: "Àpẹẹrẹ ń tún ṣẹlẹ̀ pẹ̀lú nọ́mbà; ìgbésẹ̀ eré kan kì í ṣe àpẹẹrẹ." },
            { objective: "O4", q: "Àpẹẹrẹ kan tó ṣeé ṣe hàn nínú ìgbésẹ̀ eré méjì péré. Kí ni o máa ṣe?", options: ["Kọ́ gbogbo ìdánrawò kan yí i ká", "Fojú fo gbogbo àwọn àmì rẹ", "Sọ fún ẹgbẹ́ pé òun ni ìṣòro rẹ tó tóbi jù", "Kọ \"wò ó sí i\" sí i, kí o sì kọ́kọ́ ya fídíò sí i"], answer: 3, why: "Nọ́mbà kékeré lè tàn ọ́ jẹ, nítorí náà wo fídíò sí i kí o tó pinnu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Lílo AI láti ṣàkópọ̀ àkíyèsí fídíò rẹ",
          minutes: 5,
          goal: "Ní kí olùrànlọ́wọ́ AI ṣàkópọ̀ àwọn ìgbésẹ̀ eré tí o fi àmì sí, kí o sì ṣàyẹ̀wò àkópọ̀ náà.",
          text: [
            "O lè da tábìlì àmì rẹ kọ (láìsí orúkọ eléré kankan yàtọ̀ sí tìrẹ, àti láìsí ìsọfúnni àdáni) sínú olùrànlọ́wọ́ AI, kí o sì béèrè pé: \"Àwọn ìgbésẹ̀ eré tí mo fi àmì sí nìyí. Ṣàkópọ̀ àwọn àpẹẹrẹ mẹ́ta tó ga jù pẹ̀lú ìkà, kí o sì dá ìbéèrè kan tí mo lè bi kóòṣì mi lábàá.\"",
            "AI mọ̀ọ́ rí àpẹẹrẹ nínú tábìlì ọ̀rọ̀, ṣùgbọ́n ó lè ṣìkà tàbí kí ó hùmọ̀ nǹkan. Fi ìkà rẹ̀ wé tìrẹ láti ẹ̀kọ́ tó kọjá. Tí wọ́n bá yàtọ̀, gba spreadsheet rẹ gbọ́, kí o sì tún prompt rẹ ṣe.",
            "Àwọn irinṣẹ́ AI kan lè wo àwòrán tàbí fídíò, ṣùgbọ́n wọ́n lè ṣìkà ìgbésẹ̀ eré ìdárayá tó yára. Lo àwọn àmì tìrẹ bí orísun pàtàkì, kí AI jẹ́ olùrànlọ́wọ́."
          ],
          steps: ["Da tábìlì àmì rẹ kọ, kí o yọ orúkọ àwọn eléré míì àti ìsọfúnni àdáni kúrò.", "Béèrè àwọn àpẹẹrẹ mẹ́ta tó ga jù pẹ̀lú ìkà.", "Fi wé ìkà tìrẹ.", "Tún àṣìṣe èyíkéyìí ṣe; spreadsheet rẹ ló borí."],
          words: [["Àkópọ̀ (summary)", "ẹ̀dà kúkúrú tó ń pa àwọn kókó pàtàkì mọ́."]],
          slides: [
            { title: "Ní kí AI ṣàkópọ̀", bullets: ["Lẹ tábìlì àmì rẹ sí i", "\"Àpẹẹrẹ mẹ́ta tó ga jù pẹ̀lú ìkà\"", "\"Ìbéèrè kan fún kóòṣì mi\""] },
            { title: "Ṣàyẹ̀wò rẹ̀", bullets: ["AI lè ṣìkà tàbí hùmọ̀ nǹkan", "Fi wé ìkà tìrẹ", "Spreadsheet rẹ ló borí"] },
            { title: "Ìsọfúnni àdáni", bullets: ["Kò sí orúkọ àwọn eléré míì", "Kò sí ìsọfúnni àdáni"] }
          ],
          tryIt: "Lẹ ìgbésẹ̀ eré 20 tí o fi àmì sí sínú olùrànlọ́wọ́ AI, kí o sì béèrè àwọn àpẹẹrẹ mẹ́ta tó ga jù pẹ̀lú ìkà. Ṣàyẹ̀wò ìkà kọ̀ọ̀kan pẹ̀lú spreadsheet rẹ.",
          youCanNow: "lo AI láti ṣàkópọ̀ àwọn àmì fídíò, kí o sì ṣàyẹ̀wò àkópọ̀ náà pẹ̀lú ìkà tìrẹ.",
          quickCheck: [
            { objective: "O5", q: "Kí ló lè ṣẹlẹ̀ tí kò tọ́ nígbà tí AI bá ń ṣàkópọ̀ tábìlì àmì rẹ?", options: ["Ó lè ṣìkà tàbí hùmọ̀ nǹkan", "Ó máa ń pa spreadsheet rẹ rẹ́ nígbà gbogbo", "Ó máa ń pín fídíò náà fún gbogbo ènìyàn", "Kò sí ohun tó lè ṣẹlẹ̀ tí kò tọ́"], answer: 0, why: "AI lè rí àpẹẹrẹ ṣùgbọ́n ó lè ṣìkà, nítorí náà fi wé ìkà tìrẹ." },
            { objective: "O5", q: "Tábìlì àmì rẹ ní orúkọ àwọn ọmọ ẹgbẹ́ rẹ. Kí ni o máa ṣe kí o tó lẹ̀ ẹ́ sínú AI?", options: ["Lẹ̀ ẹ́ bí ó ti rí", "Fi nọ́mbà fóònù wọn kún un", "Yọ orúkọ àwọn eléré míì àti ìsọfúnni àdáni kúrò", "Ní kí àwọn ọmọ ẹgbẹ́ lẹ̀ ẹ́ dípò rẹ"], answer: 2, why: "Pa orúkọ àwọn eléré míì àti ìsọfúnni àdáni mọ́ kúrò nínú àwọn irinṣẹ́ AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yíyí fídíò padà sí ohun kan láti dánrawò",
          minutes: 5,
          goal: "Yí àpẹẹrẹ rẹ tó ga jù padà sí ohun kan láti dánrawò tí ìwọ àti kóòṣì rẹ fohùn ṣọ̀kan lé lórí.",
          text: [
            "Fídíò wúlò nìkan tí ó bá yí ìdánrawò padà. Mú àpẹẹrẹ rẹ tó lágbára jù, kí o sì yí i padà sí ohun kan láti dojú kọ: \"Dáàbò bo bọ́ọ̀lù nígbà tí wọ́n bá fún mi pá ní apá òsì mi\" tàbí \"Padà sí ààbò láàárín ìṣẹ́jú-àáyá mẹ́ta lẹ́yìn ìpàdánù bọ́ọ̀lù.\"",
            "Gbé àpẹẹrẹ náà, àwọn nọ́mbà, àti àkókò inú fídíò méjì tàbí mẹ́ta tó fi í hàn lọ bá kóòṣì rẹ. Béèrè pé: \"Ìdánrawò (drill) wo ló máa ràn mí lọ́wọ́ lórí èyí?\" Àwọn kóòṣì fẹ́ràn eléré tó wá pẹ̀lú ẹ̀rí àti ìbéèrè.",
            "Tún ya fídíò lẹ́yìn ọ̀sẹ̀ díẹ̀, kí o sì tún fi àmì sí i pẹ̀lú ìbéèrè kan náà láti rí bóyá àpẹẹrẹ náà ti yí padà. Ọgbọ́n eré nìyẹn: kíkẹ́kọ̀ọ́, dídánrawò àti ṣíṣàyẹ̀wò."
          ],
          steps: ["Yan àpẹẹrẹ rẹ tó lágbára jù.", "Kọ ohun kan láti dánrawò.", "Yan àkókò inú fídíò méjì tàbí mẹ́ta tó fi í hàn.", "Béèrè ìdánrawò (drill) lọ́wọ́ kóòṣì rẹ.", "Tún ya fídíò kí o sì tún fi àmì sí i lẹ́yìn ọ̀sẹ̀ díẹ̀."],
          words: [["Ohun láti dánrawò (practice focus)", "nǹkan pàtó kan tí o ń ṣiṣẹ́ lé lórí nígbà ìdánrawò."], ["Ẹ̀rí (evidence)", "àwọn òtítọ́ tó fi hàn pé nǹkan jẹ́ òótọ́, bí ìkà àti àkókò inú fídíò."]],
          slides: [
            { title: "Fídíò gbọ́dọ̀ yí ìdánrawò padà", bullets: ["Àpẹẹrẹ tó lágbára jù -> ohun kan láti dánrawò"] },
            { title: "Ohun tí o máa gbé lọ bá kóòṣì", bullets: ["Àpẹẹrẹ náà àti àwọn nọ́mbà", "Àkókò inú fídíò méjì tàbí mẹ́ta", "\"Ìdánrawò wo ló máa ràn mí lọ́wọ́?\""] },
            { title: "Parí àyíká náà", bullets: ["Tún ya fídíò lẹ́yìn ọ̀sẹ̀ díẹ̀", "Tún fi àmì sí i pẹ̀lú ìbéèrè kan náà", "Ṣé àpẹẹrẹ náà yí padà?"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: pẹ̀lú ìgbésẹ̀ eré 20 tí o fi àmì sí àti àkópọ̀ AI rẹ, kọ ohun kan láti dánrawò, kí o sì yan àkókò inú fídíò méjì. Fi hàn kóòṣì rẹ, kí o sì béèrè ìdánrawò (drill) kan.",
          youCanNow: "yí àwọn àpẹẹrẹ inú fídíò padà sí ohun kan láti dánrawò, kí o sì ṣàyẹ̀wò lẹ́yìn náà bóyá ó ti dára sí i.",
          quickCheck: [
            { objective: "O6", q: "Kí ló ń mú kí ohun láti dánrawò dára?", options: ["\"Ṣeré dáadáa sí i\"", "Àkọsílẹ̀ gbogbo àṣìṣe", "Ìyípadà pàtó kan láti inú àpẹẹrẹ rẹ tó lágbára jù", "Ohunkóhun tí AI bá dábàá"], answer: 2, why: "Ohun kan láti inú àpẹẹrẹ rẹ tó lágbára jù ló ń yí ìdánrawò padà." },
            { objective: "O6", q: "Kóòṣì rẹ dábàá ìdánrawò kan fún ohun tí o fẹ́ dánrawò. Báwo ni o ṣe máa mọ̀ pé ó ṣiṣẹ́?", options: ["Bi ọmọ ẹgbẹ́ kan", "Tún ya fídíò lẹ́yìn ọ̀sẹ̀ díẹ̀, kí o sì tún fi àmì sí i pẹ̀lú ìbéèrè kan náà", "Gbẹ́kẹ̀ lé bí ara rẹ ṣe rí", "Bi AI bóyá ó ṣiṣẹ́"], answer: 1, why: "Títún ya fídíò àti títún fi àmì sí i ń fi hàn bóyá àpẹẹrẹ náà yí padà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Wíwá àwọn àpẹẹrẹ àti lílò wọ́n",
        questions: [
          { objective: "O4", q: "Èwo ni àpẹẹrẹ?", options: ["Ìfibọ́ọ̀lùránṣẹ́ búburú kan", "Dunk tó dára gan-an", "Àmì ìparí ìdíje", "7 nínú ìpàdánù bọ́ọ̀lù 9 ṣẹlẹ̀ nígbà tí mo ń gbé bọ́ọ̀lù lọ sí apá òsì lábẹ́ ìfúnpá"], answer: 3, why: "Àpẹẹrẹ ń tún ṣẹlẹ̀ nínú ọ̀pọ̀ ìgbésẹ̀ eré tó jọra." },
          { objective: "O4", q: "Kí ni COUNTIF ń ṣe?", options: ["Ó ń ka àwọn sẹ́ẹ̀lì tó bá àmì kan mu", "Ó ń ṣe fídíò", "Ó ń pa àwọn ìlà rẹ́", "Ó ń fi àwọ̀ kún un"], answer: 0, why: "COUNTIF ń ka àwọn sẹ́ẹ̀lì tó bá a mu." },
          { objective: "O5", q: "Ìkà ìpàdánù bọ́ọ̀lù tí AI ṣe yàtọ̀ sí ti spreadsheet rẹ. Èwo ni o máa gbà gbọ́?", options: ["AI", "Èyí tó bá pọ̀ jù", "Spreadsheet rẹ, lẹ́yìn náà tún prompt ṣe", "Kò sí ọ̀kankan"], answer: 2, why: "Àwọn àmì tìrẹ ni orísun pàtàkì; AI lè ṣìkà." },
          { objective: "O5", q: "Kí o tó lẹ àwọn àmì sínú AI, yọ kúrò:", options: ["Àkókò inú fídíò", "Àbájáde", "Ipò", "Orúkọ àwọn eléré míì àti ìsọfúnni àdáni"], answer: 3, why: "Dáàbò bo ìsọfúnni àdáni àwọn ẹlòmíì." },
          { objective: "O6", q: "Kí ni o gbọ́dọ̀ gbé lọ bá kóòṣì rẹ?", options: ["Ẹ̀dùn ọkàn nìkan", "Àpẹẹrẹ náà, nọ́mbà àti àkókò inú fídíò, pẹ̀lú ìbéèrè kan", "Gbogbo fídíò láìsí àkíyèsí kankan", "Àròkọ tí AI kọ"], answer: 1, why: "Ẹ̀rí àti ìbéèrè ń mú kí ìjíròrò wúlò." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìtúpalẹ̀ Fídíò àti Ọgbọ́n Eré",
    questions: [
      { objective: "O1", q: "Mímú fóònù ní ìdùbúlẹ̀ nígbà tí o bá ń ya fídíò ni a ń pè ní:", options: ["Portrait", "Selfie", "Landscape", "Zoom"], answer: 2, why: "Landscape ń fún ọ ní ìwò tó gbòòrò." },
      { objective: "O1", q: "Kí nìdí tí o fi ń ya fídíò láti ibi gíga?", options: ["Láti rí gbogbo ìgbésẹ̀ eré àti àlàfo", "Láti fara pamọ́", "Fún ohùn tó dára jù", "Òfin ni"], answer: 0, why: "Ibi gíga ń fi gbogbo ẹni tó kópa hàn." },
      { objective: "O1", q: "Kí ló ń mú kí kámẹ́rà dúró ṣinṣin?", options: ["Tripod tàbí fífi ara tì í", "Sísáré pẹ̀lú rẹ̀", "Sísún mọ́ (zoom)", "Mímì í"], answer: 0, why: "Fídíò tí kò mì rọrùn láti kẹ́kọ̀ọ́." },
      { objective: "O1", q: "Fídíò eré ìdárayá àwọn ọmọdé sábà máa ń fi àwọn ọmọ míì hàn. Nítorí náà, o gbọ́dọ̀:", options: ["Gbé e síta níbikíbi", "Má bo nǹkan kankan", "Béèrè kí o tó yà á àti kí o tó pín in", "Tà á"], answer: 2, why: "Àwọn ẹgbẹ́ àti ìdílé ní òfin nípa ìsọfúnni àdáni." },
      { objective: "O2", q: "Wíwo fídíò láìní ètò sábà máa ń túmọ̀ sí pé o máa rí:", options: ["Gbogbo àpẹẹrẹ", "Àwọn ìgbésẹ̀ tó dùn jù àti àṣìṣe ńlá nìkan", "Kò sí nǹkan kan", "Àkíyèsí kóòṣì"], answer: 1, why: "Láìní ìbéèrè, o máa pàdánù àwọn àpẹẹrẹ." },
      { objective: "O2", q: "Ìbéèrè mélòó ni fún ìwò kọ̀ọ̀kan?", options: ["Mẹ́wàá", "Kò sí", "Bí ó ti lè pọ̀ tó", "Ọ̀kan"], answer: 3, why: "Ìbéèrè kan tó dín kù ń jẹ́ kí ọkàn rẹ wà lórí nǹkan kan." },
      { objective: "O2", q: "Nígbà ìwò kejì, o máa:", options: ["Sáré kọjá gbogbo rẹ̀", "Pa ohùn rẹ̀", "Dá a dúró lórí àwọn ìgbésẹ̀ eré tó dáhùn ìbéèrè rẹ", "Fò ó"], answer: 2, why: "Dídá a dúró ń jẹ́ kí o kọ àwọn kúlẹ̀kúlẹ̀ sílẹ̀." },
      { objective: "O2", q: "Ọgbọ́n eré túmọ̀ sí níní òye:", options: ["Àmì ìdíje nìkan", "Ìṣirò (stats) nìkan", "Ètò àkókò ìdíje", "Ìdí tí àwọn ìgbésẹ̀ eré fi ń ṣẹlẹ̀"], answer: 3, why: "Ó jẹ mọ́ ìdí, kì í ṣe ohun tó ṣẹlẹ̀ nìkan." },
      { objective: "O3", q: "Àkókò inú fídíò (timestamp) ni:", options: ["Ìgbà nínú fídíò tí ìgbésẹ̀ eré kan bẹ̀rẹ̀", "Ọjọ́ ìdíje", "Òǹtẹ̀ lórí tíkẹ́ẹ̀tì", "Fèrè ìparí"], answer: 0, why: "Àkókò inú fídíò ń jẹ́ kí o rí ìgbésẹ̀ eré kan kíákíá." },
      { objective: "O3", q: "Èwo ni ọ̀wọ̀n àmì?", options: ["Orin tí o fẹ́ràn jù", "Ipò", "Ojú ọjọ́ ọ̀la", "Ọ̀rọ̀ aṣínà rẹ"], answer: 1, why: "Ipò jẹ́ àmì pàtàkì." },
      { objective: "O3", q: "Ìgbésẹ̀ eré mélòó ló kéré jù tí o gbọ́dọ̀ fi àmì sí?", options: ["1", "3", "20", "500"], answer: 2, why: "Ogún (20) tó láti rí àwọn àpẹẹrẹ." },
      { objective: "O3", q: "Tí ẹgbẹ́ rẹ bá ń lo app fídíò bíi Hudl, o gbọ́dọ̀:", options: ["Béèrè lọ́wọ́ kóòṣì rẹ bí o ṣe lè lo àwọn àmì rẹ̀", "Fojú fò ó", "Pa á rẹ́", "Pín ìwọlé (login) rẹ̀ lórí ayélujára"], answer: 0, why: "Lo ohun tí ẹgbẹ́ rẹ ń lò, bí kóòṣì rẹ ṣe fẹ́." },
      { objective: "O4", q: "Nǹkan kan ṣẹlẹ̀ lẹ́ẹ̀mejì péré. O gbọ́dọ̀:", options: ["Pè é ní àpẹẹrẹ ńlá", "Sọ fún gbogbo ènìyàn", "Yí ipò rẹ padà", "Kọ́kọ́ wo fídíò sí i"], answer: 3, why: "Nọ́mbà kékeré lè tàn ọ́ jẹ." },
      { objective: "O4", q: "Láti rí àwọn àpẹẹrẹ rẹ tó ga jù nínú Sheets, o lè:", options: ["Tẹ̀ ẹ́ jáde", "To (sort), filter tàbí lo COUNTIF", "Yí ìrísí lẹ́tà padà", "Fi àwòrán kún un"], answer: 1, why: "Àwọn irinṣẹ́ yẹn ń ka àwọn àmì, wọ́n sì ń kó wọn jọ." },
      { objective: "O5", q: "Kí ni o gbọ́dọ̀ ní kí AI ṣe pẹ̀lú àwọn àmì rẹ?", options: ["Yan ẹgbẹ́ rẹ", "Ṣàkópọ̀ àwọn àpẹẹrẹ tó ga jù pẹ̀lú ìkà", "Gbé wọn síta lórí ayélujára", "Fún kóòṣì rẹ ní máàkì"], answer: 1, why: "Ṣíṣàkópọ̀ jẹ́ ọ̀kan lára ohun tí AI mọ̀ọ́ ṣe." },
      { objective: "O5", q: "Àwọn irinṣẹ́ AI tó ń ka fídíò tààrà lè:", options: ["Má ṣàṣìṣe láéláé", "Rọ́pò àwọn kóòṣì", "Jẹ́ dandan", "Ṣìkà ìgbésẹ̀ eré ìdárayá tó yára"], answer: 3, why: "Lo àwọn àmì tìrẹ bí orísun pàtàkì." },
      { objective: "O6", q: "Ohun láti dánrawò tó dára ni:", options: ["\"Dáàbò bo bọ́ọ̀lù nígbà tí wọ́n bá fún mi pá ní apá òsì mi\"", "\"Dára sí i\"", "\"Borí\"", "\"Gbìyànjú gidigidi\""], answer: 0, why: "Ó jẹ́ pàtó, ó sì ṣeé dánrawò." },
      { objective: "O6", q: "Ìbéèrè wo sí kóòṣì rẹ ló dára jù?", options: ["\"Kí nìdí tí n kò fi ń ṣeré púpọ̀ sí i?\"", "\"Ṣé fídíò ń súni?\"", "\"Fídíò kékeré 3 ti àpẹẹrẹ yìí nìyí. Ìdánrawò wo ló máa ràn mí lọ́wọ́?\"", "\"Ṣé mo lè má wá sí ìdánrawò?\""], answer: 2, why: "Ẹ̀rí pẹ̀lú ìbéèrè ń mú ìdáhùn tó wúlò wá." },
      { objective: "O6", q: "Báwo ni o ṣe máa mọ̀ bóyá ohun tí o dánrawò ṣiṣẹ́?", options: ["Fi ọgbọ́n ṣírò", "Bi olùfẹ́ eré kan", "Wo ìkànnì àjọlò (social media)", "Tún ya fídíò kí o sì tún fi àmì sí i pẹ̀lú ìbéèrè kan náà lẹ́yìn náà"], answer: 3, why: "Títún fi àmì sí i ń fi hàn bóyá àpẹẹrẹ náà yí padà." },
      { objective: "O6", q: "Fídíò wúlò nìkan tí ó bá:", options: ["Ní ọ̀pọ̀ àwọn tó wò ó", "Yí ohun tí o ń dánrawò padà", "Gùn", "Ní orin"], answer: 1, why: "Ète rẹ̀ ni ìdánrawò àti eré tó dára jù." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      1,
      3,
      5,
      9,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Fídíò àti àṣẹ",
        objective: "O1",
        notYet: "Ó ya fídíò láìsí àṣẹ, tàbí fídíò náà ń mì jù tàbí ó sún mọ́ jù láti rí ìgbésẹ̀ eré náà.",
        meets: "Àṣẹ wà, fídíò landscape láti ibi gíga pẹ̀lú ìwò tó gbòòrò tí kò mì.",
        exceeds: "Ó ṣàyẹ̀wò bátìrì àti ààyè ìpamọ́, ó sì ya gbogbo ìdíje tàbí ìdánrawò náà láìsí àlàfo."
      },
      {
        name: "Spreadsheet àmì",
        objective: "O3",
        notYet: "Ìgbésẹ̀ eré tí kò tó 20, àwọn ọ̀wọ̀n kan kò sí, tàbí ọ̀rọ̀ àmì ń yí padà.",
        meets: "Ó fi àmì sí ó kéré tán ìgbésẹ̀ eré 20 nínú gbogbo ọ̀wọ̀n mẹ́fà, pẹ̀lú ọ̀rọ̀ àmì kan náà ní gbogbo ìgbà.",
        exceeds: "Ìlà kọ̀ọ̀kan ní àkókò inú fídíò àti àkíyèsí kúkúrú tó bá ìbéèrè náà mu."
      },
      {
        name: "Àwọn àpẹẹrẹ àti ṣíṣàyẹ̀wò AI",
        objective: "O5",
        notYet: "Kò sí ìkà, tàbí ó lo àkópọ̀ AI láìṣàyẹ̀wò rẹ̀.",
        meets: "Ó kọ àwọn àpẹẹrẹ tó ga jù pẹ̀lú ìkà, ó sì fi ìkà AI wé spreadsheet, lẹ́yìn tí ó yọ àwọn orúkọ kúrò.",
        exceeds: "Ó rí àwọn ìyàtọ̀, ó sì tún prompt ṣe; ó kọ \"wò ó sí i\" sí àwọn àpẹẹrẹ tí nọ́mbà wọn kéré."
      },
      {
        name: "Ohun láti dánrawò",
        objective: "O6",
        notYet: "Kò sí ohun láti dánrawò, tàbí kò yé.",
        meets: "Ohun pàtó kan láti inú àpẹẹrẹ tó lágbára jù, tí ó ṣàyẹ̀wò pẹ̀lú kóòṣì nípa lílo nọ́mbà àti àkókò inú fídíò.",
        exceeds: "Wọ́n fohùn ṣọ̀kan lórí ìdánrawò (drill) kan, wọ́n sì dá ọjọ́ láti tún ya fídíò kí wọ́n sì tún fi àmì sí i pẹ̀lú ìbéèrè kan náà."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí iṣẹ́ ìkẹyìn tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn tún ya fídíò tí wọ́n sì tún fi àmì sí i pẹ̀lú ìbéèrè kan náà láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn kóòṣì tí wọ́n sọ pé ìdánrawò kan tàbí ohun tí wọ́n ń dánrawò yí padà nítorí ẹ̀rí fídíò eléré kan",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Athletes míì, bíi AI fún Eré Ìdárayá Ẹgbẹ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tó ní kámẹ́rà, tí bátìrì rẹ̀ kún, tí ó sì ní ààyè ìpamọ́",
      "Tripod tàbí ọ̀nà láti fi fóònù tì nǹkan (kò pọndandan)",
      "Àkáǹtì Google ọ̀fẹ́ fún Google Sheets",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini)",
      "Nǹkan bí ìṣẹ́jú 60 ẹ̀kọ́ pẹ̀lú ìṣẹ́jú 60 sí 90 láti ya fídíò àti láti fi àmì sí i"
    ],
    facilitatorNotes: [
      "Rí i dájú pé o mọ àwọn òfin ẹgbẹ́, ilé-ẹ̀kọ́ àti líìgì nípa yíya fídíò kí ẹnikẹ́ni tó yà á, ní pàtàkì níbi ìdíje àwọn ọmọdé.",
      "Fohùn ṣọ̀kan pẹ̀lú àwọn eléré nípa ibi tí fídíò máa wà, àti pé a kò ní gbé e síta fún gbogbo ènìyàn láìsí àṣẹ.",
      "Fún gbogbo ènìyàn ní àkọsílẹ̀ ọ̀rọ̀ àmì kan náà fún ìpàdé ẹgbẹ́, kí ẹ lè fi ìkà wọn wé ara wọn.",
      "Fi bí a ṣe ń yọ orúkọ àwọn eléré míì kúrò kí a tó lẹ ọ̀rọ̀ sínú AI hàn, kí àwọn eléré sì fi ìkà AI wé spreadsheet wọn.",
      "Ṣètò ìpàdé kúkúrú pẹ̀lú kóòṣì kí eléré kọ̀ọ̀kan lè fi àpẹẹrẹ rẹ̀, àkókò inú fídíò àti ìbéèrè rẹ̀ hàn."
    ]
  }
};
