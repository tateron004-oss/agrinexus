"use strict";

// Koach Learn course (Yoruba translation of shared/intro-iot.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FTC = { name: "Ìmọ̀ràn FTC fún àwọn oníbàárà: Dídáàbò bo àwọn ẹ̀rọ ilé tó ń lo íńtánẹ́ẹ̀tì", url: "https://consumer.ftc.gov/articles/securing-your-internet-connected-devices-home" };
const CISA = { name: "CISA: Secure Our World (Dáàbò bo ayé wa)", url: "https://www.cisa.gov/secure-our-world" };
const WOKWI = { name: "Wokwi: ẹ̀rọ àfarawé ẹ̀rọ abánáṣiṣẹ́ lórí ayélujára", url: "https://wokwi.com/" };

module.exports = {
  id: "intro-iot-yo",
  lang: "yo",
  translationOf: "intro-iot",
  category: "Veterans (military)",
  name: "Ìfihàn sí Internet of Things (IoT)",
  skills: "Ṣíṣàlàyé bí ètò IoT ṣe ń ṣiṣẹ́, Yíyan sensọ̀ àti actuator, Fífi àwọn ọ̀nà ìsopọ̀ wéra, Kíkọ òfin ìkìlọ̀ tó rọrùn, Dídáàbò bo àwọn ẹ̀rọ tó so pọ̀, Ṣíṣètò iṣẹ́ IoT",
  outcome: "ṣètò iṣẹ́ àbójútó IoT tó rọrùn láti sensọ̀ dé ìkìlọ̀: yan sensọ̀, ẹ̀rọ, ìsopọ̀ àti app, kọ òfin ìkìlọ̀ gẹ́gẹ́ bí kóòdù kúkúrú, kí o sì kọ àwọn ìgbésẹ̀ tí ó ń dáàbò bo àwọn ẹ̀rọ náà sílẹ̀.",
  about: [
    "Internet of Things (IoT) ni àwọn nǹkan ojoojúmọ́ tí wọ́n ní sensọ̀ àti ìsopọ̀ íńtánẹ́ẹ̀tì: thermostat ọlọ́gbọ́n, kámẹ́rà ẹnu ọ̀nà, ẹ̀rọ tó ń ka ìgbésẹ̀, sensọ̀ ilẹ̀ oko, àti ẹ̀rọ ìtọpa lórí ọkọ̀ akẹ́rù àti àpótí ẹrù. Wọ́n ń lo ọgbọ́n IoT nínú iṣẹ́ ilé àti ohun èlò, ìkó ẹrù, agbára iná, iṣẹ́ àgbẹ̀ àti ààbò. Ọ̀pọ̀ àwọn ológun tẹ́lẹ̀ ti mọ àwọn èrò wọ̀nyí láti inú sensọ̀, rédíò àti àtúnṣe ohun èlò.",
    "Ẹ̀kọ́ yìí ń ṣàlàyé bí ètò IoT ṣe ń ṣiṣẹ́ ní ìpele-ìpele, bí àwọn ẹ̀rọ ṣe ń bá ara wọn sọ̀rọ̀, bí òfin tó rọrùn ṣe ń yí ìwọ̀n padà sí ìṣe, àti bí a ṣe lè dènà kí àwọn ẹ̀rọ tó so pọ̀ má di ọ̀nà àbáwọlé fún àwọn agbéjàkò. O kò nílò láti ra ohun èlò kankan. Ẹ̀kọ́ kan fi hàn bí o ṣe lè gbìyànjú ẹ̀rọ àfarawé nínú browser rẹ.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò ojú-ìwé kan fún iṣẹ́ àbójútó IoT, bí ìkìlọ̀ ìgbóná fún yàrá kékeré tí server wà, fírísà ní ibi ìpínkiri oúnjẹ, tàbí ọgbà tí ó nílò omi: dárúkọ sensọ̀, ẹ̀rọ, bí ó ṣe ń so pọ̀ àti ibi tí dátà ń lọ, ya bí dátà ṣe ń ṣàn láti sensọ̀ dé ìkìlọ̀, kọ òfin ìkìlọ̀ gẹ́gẹ́ bí if-statement kúkúrú nínú Python, kí o sì kọ ìgbésẹ̀ márùn-ún tí o máa gbé láti dáàbò bo àwọn ẹ̀rọ náà.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ológun tẹ́lẹ̀ (veterans) àti àwọn ọmọ ológun tí wọ́n ń kúrò nínú iṣẹ́ ológun, tí wọ́n ń wo iṣẹ́ ẹ̀rọ bí IT support, ẹ̀rọ ilé àti ohun èlò, ìtọpa ẹrù tàbí cybersecurity. Ọ̀pọ̀ lára wọn ti ṣiṣẹ́ pẹ̀lú rédíò, sensọ̀, ọkọ̀ tàbí ohun èlò nínú iṣẹ́ ológun.",
    startingPoint: "Wọ́n mọ bí a ṣe ń tẹ̀lé ìlànà, wọ́n ń lo kọ̀mpútà àti smartphone, ọ̀pọ̀ ìgbà wọ́n sì mọ àyẹ̀wò ohun èlò àti ìbánisọ̀rọ̀. Ọ̀pọ̀ jù lọ kò tíì kọ kóòdù rí, wọn kò sì tíì ṣètò ẹ̀rọ tó so mọ́ íńtánẹ́ẹ̀tì rí.",
    gap: "Àwọn agbanisíṣẹ́ nínú iṣẹ́ ilé àti ohun èlò, ìkó ẹrù, iṣẹ́ ẹ̀rọ àti IT ń lo sensọ̀ tó so pọ̀ sí i, wọ́n sì ń retí pé kí òṣìṣẹ́ mọ bí wọ́n ṣe ń ṣiṣẹ́, bí a ṣe ń ṣètò ìkìlọ̀ tó rọrùn àti bí a ṣe ń dáàbò bò wọ́n. Àwọn akẹ́kọ̀ọ́ nílò láti ṣètò iṣẹ́ àbójútó kékeré kan láti ìbẹ̀rẹ̀ dé òpin láti fi ọgbọ́n yìí hàn, kí wọ́n sì so ìrírí ológun wọn mọ́ iṣẹ́ ẹ̀rọ ará ìlú.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a ń ṣàlàyé ọ̀rọ̀ ẹ̀rọ ní ìgbà àkọ́kọ́",
      "Ẹ̀rọ: kọ̀mpútà tí ó ní browser fún ẹ̀rọ àfarawé; kò sí ohun èlò láti rà",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5, nǹkan bí ìṣẹ́jú 60 lápapọ̀",
      "Ohun tí ẹ̀rọ àfarawé ń ṣe àti àkọọ́lẹ̀ rẹ̀ lè yí padà; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò òfin ojú-òpó náà lọ́wọ́lọ́wọ́",
      "Nẹ́tíwọ́ọ̀kì ibi iṣẹ́: má ṣe so ẹ̀rọ kankan pọ̀ láìsí àṣẹ ẹgbẹ́ IT tàbí ẹgbẹ́ ààbò"
    ],
    prerequisites: "Kò sí. Ẹ̀kọ́ Python àkọ́kọ́ ń ṣèrànlọ́wọ́, ṣùgbọ́n kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àpẹẹrẹ láti ilé, ibi iṣẹ́ àti pápá", action: "dá àwọn ẹ̀rọ IoT mọ̀ kí o sì ṣàlàyé àǹfààní àti ewu ọ̀kọ̀ọ̀kan", standard: "kí o sì dárúkọ ó kéré tán ẹ̀rọ mẹ́ta tọ̀nà" },
    { id: "O2", condition: "Tí a bá fún ọ ní iṣẹ́ IoT bí ìkìlọ̀ fírísà", action: "tọpa dátà láti sensọ̀, gba inú ẹ̀rọ àti ìsopọ̀, dé cloud àti ìṣe", standard: "kí o sì dárúkọ gbogbo ìpele mẹ́rẹ̀ẹ̀rin ní ìtẹ̀léra tó tọ́" },
    { id: "O3", condition: "Tí a bá sọ ibi tí ẹ̀rọ kan wà, agbára rẹ̀ àti iye dátà tí ó ń fi ránṣẹ́", action: "yan ìsopọ̀ tó yẹ kí o sì ṣàlàyé bí protocol bí MQTT ṣe ń gbé ọ̀rọ̀ rẹ̀", standard: "pẹ̀lú ìdí tó bá ìjìnnà, agbára àti dátà mu" },
    { id: "O4", condition: "Tí a bá fún ọ ní ìwọ̀n sensọ̀ àti ààlà tí kò léwu", action: "kọ òfin ìkìlọ̀ gẹ́gẹ́ bí if-statement Python tí ó ń yẹra fún ìkìlọ̀ èké", standard: "tí òfin náà fi ń fún èsì tó tọ́ fún ìwọ̀n ìdánwò" },
    { id: "O5", condition: "Nípa lílo ẹ̀rọ àfarawé ọ̀fẹ́ lórí ayélujára", action: "ṣiṣẹ́ microcontroller àfarawé pẹ̀lú sensọ̀ ìgbóná kí o sì dán òfin ìkìlọ̀ rẹ wò", standard: "kí o sì rí i pé ìkìlọ̀ dún nígbà tí o bá yí ìwọ̀n padà" },
    { id: "O6", condition: "Fún gbogbo ẹ̀rọ tó so pọ̀ nínú ètò rẹ", action: "kọ àwọn ìgbésẹ̀ tí ó ń dáàbò bo àwọn ẹ̀rọ náà sílẹ̀", standard: "pẹ̀lú ó kéré tán ìgbésẹ̀ márùn-ún tó tọ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí ètò IoT ṣe ń ṣiṣẹ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí Internet of Things jẹ́",
          minutes: 4,
          goal: "Ṣàlàyé IoT kí o sì dá àwọn ẹ̀rọ IoT tó yí ọ ká mọ̀.",
          text: [
            "Internet of Things (IoT) túmọ̀ sí àwọn nǹkan tí a lè fọwọ́ kàn, tí wọ́n ń mọ ohun tó ń ṣẹlẹ̀ láyìíká, tí wọ́n so mọ́ nẹ́tíwọ́ọ̀kì, tí wọ́n sì ń pín dátà, ọ̀pọ̀ ìgbà láìsí ẹnikẹ́ni tó ń tẹ nǹkankan. Thermostat ọlọ́gbọ́n ń wọn ìgbóná yàrá, ó sì ń tan ẹ̀rọ ìgbóná. Ẹ̀rọ ìdárayá ọwọ́ ń ka ìgbésẹ̀, ó sì ń fi wọ́n ránṣẹ́ sí fóònù rẹ.",
            "Wọ́n ń lo IoT nílé (kámẹ́rà ẹnu ọ̀nà, smart plug, ẹ̀rọ agbóhùnsáfẹ́fẹ́ tó ń gbọ́ ohùn), níbi iṣẹ́ (ẹ̀rọ tí ó ń sọ nígbà tí ó nílò àtúnṣe, tí a ń pè ní predictive maintenance), nínú ìkó ẹrù (GPS lórí ọkọ̀ akẹ́rù àti àpótí ẹrù), nínú iṣẹ́ àgbẹ̀ (sensọ̀ ọ̀rinrin ilẹ̀), nínú ìlera (ẹ̀rọ tí ń ka ìlù ọkàn) àti nínú ìlú (iná ọ̀nà ọlọ́gbọ́n).",
            "Àǹfààní wà nínú ohun tí dátà ń jẹ́ kí o ṣe: rí ìṣòro ní kùtùkùtù, fi agbára iná pamọ́, tàbí ṣe nǹkan láti ọ̀nà jíjìn. Ewu ni pé gbogbo ẹ̀rọ tó so pọ̀ jẹ́ nǹkan kan sí i tí wọ́n lè gbà wọlé (hack) tàbí tí ó lè jẹ́ kí ìsọfúnni àdáni jò, nítorí náà ààbò jẹ́ apá kan gbogbo iṣẹ́ IoT."
          ],
          words: [["Internet of Things (IoT)", "àwọn nǹkan tí ó ní sensọ̀ àti ìsopọ̀ nẹ́tíwọ́ọ̀kì tí wọ́n ń pín dátà."], ["Ẹ̀rọ ọlọ́gbọ́n (smart device)", "nǹkan ojoojúmọ́ tí ó lè so pọ̀ kí ó sì ṣe nǹkan pẹ̀lú dátà."], ["Predictive maintenance", "lílo dátà sensọ̀ láti tún ẹ̀rọ ṣe kí ó tó bàjẹ́."]],
          slides: [
            { title: "IoT ni", bullets: ["Àwọn nǹkan tí ń mọ ohun tó ń ṣẹlẹ̀ láyìíká", "Tí wọ́n so mọ́ nẹ́tíwọ́ọ̀kì", "Tí wọ́n ń pín dátà, ọ̀pọ̀ ìgbà fúnra wọn"] },
            { title: "Ibi tí o ti máa rí i", bullets: ["Nílé: agogo ẹnu ọ̀nà, smart plug, ẹ̀rọ agbóhùnsáfẹ́fẹ́", "Níbi iṣẹ́: ẹ̀rọ tí ń sọ ìṣòro wọn", "Ìkó ẹrù, iṣẹ́ àgbẹ̀, ìlera, ìlú"] },
            { title: "Àǹfààní àti ewu", bullets: ["Rí ìṣòro ní kùtùkùtù, fi agbára pamọ́", "Ṣe nǹkan láti ọ̀nà jíjìn", "Gbogbo ẹ̀rọ lè jẹ́ ọ̀nà àbáwọlé"] }
          ],
          tryIt: "Rìn kiri ilé rẹ, ibi iṣẹ́ rẹ tàbí ṣọ́ọ̀bù kan, kí o sì kọ ẹ̀rọ márùn-ún tó so pọ̀ tí o rí tàbí tí o ń lò sílẹ̀. Fún ọ̀kọ̀ọ̀kan, kọ ohun tí ó ń wọn àti ohun tí ó ń ṣe pẹ̀lú dátà náà.",
          youCanNow: "ṣàlàyé ohun tí IoT jẹ́ kí o sì dárúkọ àwọn ẹ̀rọ IoT nínú ayé ojoojúmọ́ àti níbi iṣẹ́.",
          quickCheck: [
            { objective: "O1", q: "Kí ló ń mú kí ẹ̀rọ kan jẹ́ apá kan Internet of Things?", options: ["Ó ní ojú-iboju ńlá", "Ó wọ́n ju ẹ̀rọ lásán lọ", "Ó ń wọn nǹkan, ó so mọ́ nẹ́tíwọ́ọ̀kì, ó sì ń pín dátà", "Kọ́kọ́rọ́-ìtẹ̀wé (keyboard) nìkan ló ń bá ṣiṣẹ́"], answer: 2, why: "Àwọn ẹ̀rọ IoT ń mọ ohun tó ń ṣẹlẹ̀, wọ́n ń so pọ̀, wọ́n sì ń pín dátà, ọ̀pọ̀ ìgbà láìsí ẹni tó ń tẹ nǹkan." },
            { objective: "O1", q: "Ibi ọkọ̀ ẹgbẹ́ ológun rẹ fẹ́ kí àwọn ọkọ̀ akẹ́rù sọ ìṣòro wọn kí wọ́n tó bàjẹ́. Kí ni a ń pe lílo IoT yìí?", options: ["Predictive maintenance", "Edge computing", "Guest network", "Firmware"], answer: 0, why: "Ẹ̀rọ tí ń sọ pé òun nílò àtúnṣe kí òun tó bàjẹ́ ni predictive maintenance." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ìpele mẹ́rin: sensọ̀, ẹ̀rọ, ìsopọ̀ àti cloud",
          minutes: 5,
          goal: "Tọpa dátà nínú ètò IoT láti sensọ̀ dé ìṣe.",
          text: [
            "Ọ̀pọ̀ ètò IoT ní ìpele mẹ́rin. 1) Sensọ̀ ń wọn nǹkan: ìgbóná, ìrìn, ìmọ́lẹ̀, ibi tí nǹkan wà, ọ̀rinrin. 2) Ẹ̀rọ kan (ọ̀pọ̀ ìgbà kọ̀mpútà kékeré tí kò wọ́n tí a ń pè ní microcontroller, bí ESP32 tàbí Arduino) ń ka sensọ̀ náà, ó sì ń fi dátà ránṣẹ́. 3) Ìsopọ̀ ń gbé dátà náà: Wi-Fi, Bluetooth, nẹ́tíwọ́ọ̀kì fóònù (cellular) tàbí rédíò tó ń lọ jìnnà. 4) Iṣẹ́ cloud tàbí app ń tọ́jú dátà náà, ó ń fi hàn lórí dashboard, ó sì ń fi ìkìlọ̀ ránṣẹ́.",
            "Àwọn ẹ̀rọ kan tún ní actuator: àwọn apá tí ń ṣe nǹkan nínú ayé gidi, bí mọ́tò tí ń ṣí fáfà omi, relay tí ń tan fáànù, tàbí agogo ìkìlọ̀ (buzzer).",
            "Nígbà míì ẹ̀rọ náà fúnra rẹ̀ ló ń ṣe ìpinnu dípò kí ó dúró de cloud. Èyí ni edge computing. Ó yára jù, ó ń ṣiṣẹ́ lọ nígbà tí íńtánẹ́ẹ̀tì bá lọ, ó sì ń fi dátà díẹ̀ ránṣẹ́."
          ],
          steps: ["Dárúkọ ohun tí a ń wọn (sensọ̀).", "Dárúkọ ẹ̀rọ tí ń kà á.", "Dárúkọ bí dátà ṣe ń rìn (ìsopọ̀).", "Dárúkọ ibi tí ó ń lọ àti ẹni tí ó ń rí i (cloud, app, dashboard).", "Dárúkọ ìṣe náà, látọ̀dọ̀ ènìyàn tàbí actuator."],
          words: [["Sensọ̀ (sensor)", "apá tí ń wọn nǹkan nínú ayé gidi."], ["Microcontroller", "kọ̀mpútà kékeré, tí kò wọ́n, lórí chip kan tí ń ṣe ètò kan ṣoṣo."], ["Actuator", "apá tí ń ṣe nǹkan nínú ayé gidi, bí mọ́tò, relay tàbí buzzer."], ["Dashboard", "ojú-iboju tí ń fi dátà tó ń wọlé hàn ní àwòrán àti nọ́mbà."], ["Edge computing", "ṣíṣe iṣẹ́ lórí dátà lórí ẹ̀rọ náà tàbí nítòsí rẹ̀ dípò nínú cloud."]],
          slides: [
            { title: "Ìpele mẹ́rin náà", bullets: ["1. Sensọ̀ ń wọn", "2. Ẹ̀rọ ń kà á, ó sì ń fi ránṣẹ́", "3. Ìsopọ̀ ń gbé e", "4. Cloud tàbí app ń tọ́jú, ń fi hàn, ń kìlọ̀"] },
            { title: "Actuator ń ṣe nǹkan", bullets: ["Mọ́tò ń ṣí fáfà", "Relay ń tan fáànù", "Buzzer ń dún ìkìlọ̀"] },
            { title: "Edge computing", bullets: ["Ẹ̀rọ náà fúnra rẹ̀ ń pinnu", "Ó yára, ó ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì", "Ó ń fi dátà díẹ̀ ránṣẹ́"] }
          ],
          tryIt: "Mú ẹ̀rọ kan láti inú àkọsílẹ̀ rẹ ní Ẹ̀kọ́ 1. Ya àpótí mẹ́rin fún ìpele rẹ̀ (sensọ̀, ẹ̀rọ, ìsopọ̀, cloud tàbí app) pẹ̀lú ọfà láàárín wọn, kí o sì fi ìṣe náà kún un ní òpin.",
          youCanNow: "tọpa dátà gba ìpele mẹ́rin ètò IoT kọjá kí o sì dárúkọ sensọ̀ àti actuator.",
          quickCheck: [
            { objective: "O2", q: "Nínú ètò IoT, kí ni iṣẹ́ microcontroller?", options: ["Láti wọn ìgbóná fúnra rẹ̀", "Láti tọ́jú dátà nínú cloud", "Láti tan fáànù", "Láti ka sensọ̀ kí ó sì fi dátà ránṣẹ́"], answer: 3, why: "Ẹ̀rọ náà, ọ̀pọ̀ ìgbà microcontroller, ló ń ka sensọ̀, tí ó sì ń fi dátà ránṣẹ́ síwájú." },
            { objective: "O2", q: "Sensọ̀ géètì kan tó wà lọ́nà jíjìn gbọ́dọ̀ máa ṣiṣẹ́ nígbà tí íńtánẹ́ẹ̀tì bá lọ. Ètò wo ló ń ṣèrànlọ́wọ́?", options: ["Fi gbogbo ìwọ̀n ránṣẹ́ sí cloud ná", "Jẹ́ kí ẹ̀rọ náà fúnra rẹ̀ pinnu (edge computing)", "Lo ojú-iboju tó tóbi jù", "Yọ sensọ̀ náà kúrò"], answer: 1, why: "Edge computing ń jẹ́ kí ẹ̀rọ pinnu fúnra rẹ̀, nítorí náà ó ń ṣiṣẹ́ lọ láìsí íńtánẹ́ẹ̀tì." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bí àwọn ẹ̀rọ ṣe ń so pọ̀ tí wọ́n sì ń sọ̀rọ̀",
          minutes: 5,
          goal: "Yan ìsopọ̀ tó yẹ fún ẹ̀rọ IoT kan.",
          text: [
            "Kò sí ìsopọ̀ kan ṣoṣo tó dára jù; ọ̀kọ̀ọ̀kan ń fi ìjìnnà, agbára àti dátà dí ara wọn. Wi-Fi yára, ó wọ́pọ̀ nílé àti níbi iṣẹ́, ṣùgbọ́n ó ń lo agbára púpọ̀. Bluetooth Low Energy (BLE) ń lo agbára díẹ̀ gan-an, kò sì lọ jìnnà; ó dára fún ẹ̀rọ tí a ń wọ̀ àti fóònù. Cellular (4G, 5G àti àwọn ẹ̀yà tí kò jẹ agbára púpọ̀) ń ṣiṣẹ́ fẹ́rẹ̀ẹ́ níbi gbogbo tí àmì nẹ́tíwọ́ọ̀kì bá wà; ó dára fún ọkọ̀ àti ibi jíjìnnà, ṣùgbọ́n ó nílò dátà tí a sanwó fún. LoRaWAN jẹ́ rédíò tí kò jẹ agbára púpọ̀, tí ó ń lọ jìnnà, fún dátà kékeré; wọ́n ń lò ó fún sensọ̀ oko àti ti ìlú.",
            "Àwọn ẹ̀rọ tún nílò èdè kan náà, tí a ń pè ní protocol, láti fi ọ̀rọ̀ ránṣẹ́. MQTT jẹ́ protocol fúyẹ́ tí ó gbajúmọ̀: ẹ̀rọ kan ń tẹ ìwọ̀n jáde (publish) sí topic kan, bí pantry/freezer/temp, gbogbo app tí ó forúkọ sílẹ̀ (subscribe) fún topic náà sì ń gbà á. HTTP, protocol kan náà tí àwọn ojú-òpó wẹ́ẹ̀bù ń lò, náà wọ́pọ̀.",
            "Àwọn ẹ̀rọ tí ń lo bátìrì ń fi agbára pamọ́ nípa sísùn ní ọ̀pọ̀ ìgbà, kí wọ́n sì jí nìkan láti kà àti láti fi ránṣẹ́."
          ],
          steps: ["Báwo ni dátà náà ṣe gbọ́dọ̀ rìn jìnnà tó?", "Ṣé iná wà, tàbí bátìrì nìkan?", "Dátà tó mélòó, àti lẹ́ẹ̀mélòó?", "Ṣé Wi-Fi tàbí àmì fóònù wà níbi tí ó máa wà?", "Yan ìsopọ̀ tí ó bá ìdáhùn mẹ́rẹ̀ẹ̀rin mu."],
          words: [["Wi-Fi", "nẹ́tíwọ́ọ̀kì aláìlókùn tó yára fún ilé àti ọ́fíìsì; ó ń lo agbára jù."], ["Bluetooth Low Energy (BLE)", "ìsopọ̀ aláìlókùn tí ń lo agbára díẹ̀ gan-an, tí kò lọ jìnnà."], ["Cellular", "ìsopọ̀ gba nẹ́tíwọ́ọ̀kì fóònù alágbèéká."], ["LoRaWAN", "nẹ́tíwọ́ọ̀kì rédíò tí ń lọ jìnnà, tí kò jẹ agbára púpọ̀, fún dátà kékeré."], ["Protocol", "àwọn òfin tí a fohùn ṣọ̀kan lé lórí fún fífi ọ̀rọ̀ ránṣẹ́."], ["MQTT", "protocol ọ̀rọ̀ fúyẹ́ níbi tí ẹ̀rọ ń tẹ̀ jáde sí topic, tí app sì ń forúkọ sílẹ̀ fún un."]],
          slides: [
            { title: "Yan nípa ìjìnnà, agbára àti dátà", bullets: ["Wi-Fi: ó yára, agbára púpọ̀", "BLE: agbára díẹ̀ gan-an, kò lọ jìnnà", "Cellular: fẹ́rẹ̀ẹ́ níbi gbogbo, ó nílò dátà tí a sanwó fún", "LoRaWAN: ó lọ jìnnà, dátà kékeré"] },
            { title: "Protocol", bullets: ["MQTT: tẹ̀ jáde sí topic, app forúkọ sílẹ̀", "Àpẹẹrẹ topic: pantry/freezer/temp", "HTTP: èdè àwọn ojú-òpó wẹ́ẹ̀bù"] },
            { title: "Fi bátìrì pamọ́", bullets: ["Sùn ní ọ̀pọ̀ ìgbà", "Jí, kà, fi ránṣẹ́, tún sùn"] }
          ],
          tryIt: "Yan ìsopọ̀ tó dára jù fún ọ̀kọ̀ọ̀kan, kí o sì kọ ìdí kan: ẹ̀rọ tí ń ka ìgbésẹ̀ ní ọwọ́ rẹ, sensọ̀ ilẹ̀ nínú oko tí ó jìnnà ní 5 km sí ilé kankan, GPS tracker lórí ọkọ̀ akẹ́rù ìfijíṣẹ́, àti smart plug nínú yàrá ìjókòó.",
          youCanNow: "yan ìsopọ̀ tó yẹ kí o sì ṣàlàyé bí àwọn ẹ̀rọ IoT ṣe ń fi ọ̀rọ̀ ránṣẹ́.",
          quickCheck: [
            { objective: "O3", q: "Kí ni MQTT?", options: ["Protocol fúyẹ́ níbi tí ẹ̀rọ ń tẹ ìwọ̀n jáde sí topic", "Irú bátìrì kan", "Rédíò tí ń lọ jìnnà", "Orúkọ ilé-iṣẹ́ sensọ̀ kan"], answer: 0, why: "MQTT jẹ́ protocol fúyẹ́: ẹ̀rọ ń tẹ̀ jáde sí topic, àwọn app tí ó forúkọ sílẹ̀ sì ń gbà á." },
            { objective: "O3", q: "Sensọ̀ bátìrì kan nínú àgbàlá ìpamọ́ ẹrù tí kò ní Wi-Fi ń fi ìwọ̀n kékeré kan ránṣẹ́ ní wákàtí kọ̀ọ̀kan. Kí ni o máa yàn?", options: ["Wi-Fi", "Bluetooth Low Energy", "LoRaWAN", "Keyboard onírin"], answer: 2, why: "LoRaWAN kò jẹ agbára púpọ̀, ó sì ń lọ jìnnà fún dátà kékeré." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí ètò IoT ṣe ń ṣiṣẹ́",
        questions: [
          { objective: "O1", q: "Èwo ló jẹ́ ẹ̀rọ IoT?", options: ["Kàlẹ́ńdà ìwé", "Máàpù tí a tẹ̀ jáde", "Thermostat ọlọ́gbọ́n tí ń ṣàtúnṣe ìgbóná fúnra rẹ̀", "Àga onígi"], answer: 2, why: "Ó ń mọ ohun tó ń ṣẹlẹ̀, ó so pọ̀, ó sì ń ṣe nǹkan pẹ̀lú dátà." },
          { objective: "O2", q: "Nínú ètò IoT, kí ni sensọ̀ ń ṣe?", options: ["Ó ń wọn nǹkan nínú ayé gidi", "Ó ń tọ́jú dátà nínú cloud", "Ó ń san owó íńtánẹ́ẹ̀tì", "Ó ń fi dashboard hàn"], answer: 0, why: "Sensọ̀ ń wọn nǹkan bí ìgbóná tàbí ìrìn." },
          { objective: "O2", q: "Relay tí ń tan fáànù jẹ́:", options: ["Sensọ̀", "Protocol", "Dashboard", "Actuator"], answer: 3, why: "Actuator ń ṣe nǹkan nínú ayé gidi." },
          { objective: "O3", q: "Sensọ̀ ilẹ̀ kan wà nínú oko tí ó jìnnà sí Wi-Fi, bátìrì ló sì ń lò. Ìsopọ̀ wo ló bá a mu jù?", options: ["Wi-Fi", "LoRaWAN", "Okùn USB", "Bluetooth sí fóònù nínú àpò rẹ"], answer: 1, why: "LoRaWAN ń lọ jìnnà, kò sì jẹ agbára púpọ̀ fún dátà kékeré." },
          { objective: "O3", q: "Nínú MQTT, báwo ni app ṣe ń gba ìwọ̀n fírísà kan?", options: ["Ó ń pe fírísà náà lórí fóònù", "Ó ń forúkọ sílẹ̀ fún topic tí fírísà náà ń tẹ̀ jáde sí", "Ó ń tẹ̀ wọ́n jáde sórí ìwé", "Ó ń fojú díwọ̀n"], answer: 1, why: "Àwọn app MQTT ń forúkọ sílẹ̀ fún topic tí àwọn ẹ̀rọ ń tẹ̀ jáde sí." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkọ́ àti dídáàbò bo iṣẹ́ IoT",
      lessons: [
        {
          objectives: ["O4"],
          title: "Láti ìwọ̀n dé ìṣe: kíkọ òfin ìkìlọ̀",
          minutes: 6,
          goal: "Kọ òfin tó rọrùn nínú Python tí ó ń yí ìwọ̀n sensọ̀ padà sí ìkìlọ̀.",
          text: [
            "Ọkàn ọ̀pọ̀ iṣẹ́ IoT ni òfin kan: tí ìwọ̀n kan bá kọjá ààlà, ṣe nǹkan kan. Tí fírísà ibi ìpínkiri oúnjẹ bá gbóná ju -15 degrees C fún ìṣẹ́jú 10, fi ọ̀rọ̀ ránṣẹ́ sí alákòóso. Tí ọ̀rinrin ilẹ̀ bá lọ sílẹ̀ ju 30 percent, ṣí fáfà omi.",
            "Nínú Python, òfin jẹ́ if-statement. Fún àpẹẹrẹ: temp = 28.5, lẹ́yìn náà if temp > 27: print(\"ALERT: server closet too hot\") else: print(\"OK\"). Lórí ẹ̀rọ gidi, ìwọ̀n náà ń wá láti inú sensọ̀, ìṣe náà sì lè jẹ́ títan LED, yíyí relay, tàbí fífi ọ̀rọ̀ ránṣẹ́.",
            "Òfin tó dára ń yẹra fún ìkìlọ̀ èké. Ìwọ̀n kan tí ó fò sókè lè jẹ́ pé ilẹ̀kùn ṣí fún ìṣẹ́jú kan, nítorí náà ọ̀pọ̀ ètò ń dúró de ọ̀pọ̀ ìwọ̀n tẹ̀léra kí wọ́n tó kìlọ̀. Yan ààlà pẹ̀lú àwọn tí wọ́n mọ ohun èlò náà, kí o sì pinnu ẹni tí ó máa gba ìkìlọ̀ àti ohun tí wọ́n gbọ́dọ̀ ṣe."
          ],
          steps: ["Pinnu ohun tí o ń wọn àti ààlà rẹ̀ tí kò léwu.", "Yan ààlà tí ó túmọ̀ sí wàhálà.", "Kọ ọ́ báyìí: if reading > limit: (tàbí < limit).", "Pinnu ìṣe náà: ọ̀rọ̀ ìránṣẹ́, iná tàbí relay.", "Fi òfin kún un láti yẹra fún ìkìlọ̀ èké, bí ọ̀pọ̀ ìwọ̀n tẹ̀léra."],
          words: [["Òfin (rule)", "ìtọ́ni bí-bá-ṣe: tí èyí bá ṣẹlẹ̀, ṣe ìyẹn."], ["Ààlà (threshold)", "òdiwọ̀n tí ń mú ìṣe ṣẹlẹ̀."], ["Ìkìlọ̀ èké (false alarm)", "ìkìlọ̀ nígbà tí kò sí ohun tí ó bàjẹ́ ní tòótọ́."], ["Ìwọ̀n (reading)", "ìwọ̀n kan láti inú sensọ̀."]],
          slides: [
            { title: "IoT ń ṣiṣẹ́ lórí òfin", bullets: ["Tí ìwọ̀n kan bá kọjá ààlà", "Nígbà náà ṣe nǹkan kan", "Fírísà gbóná jù: fi ọ̀rọ̀ ránṣẹ́ sí alákòóso"] },
            { title: "Òfin kan nínú Python", bullets: ["if temp > 27:", "    print(\"ALERT: too hot\")", "else: print(\"OK\")"] },
            { title: "Yẹra fún ìkìlọ̀ èké", bullets: ["Dúró de ọ̀pọ̀ ìwọ̀n tẹ̀léra", "Ṣètò ààlà pẹ̀lú àwọn amòye", "Pinnu ẹni tí ó máa ṣe nǹkan, àti bí"] }
          ],
          tryIt: "Ṣí Google Colab (colab.research.google.com) tàbí ibi kíkọ Python èyíkéyìí. Ṣe list ìwọ̀n ìgbóná mẹ́fà, bí [22, 23, 29, 30, 31, 24]. Fi loop la wọ́n kọjá, kí o sì tẹ \"ALERT\" jáde fún ìwọ̀n èyíkéyìí tí ó ju 27 lọ, àti \"OK\" fún àwọn yòókù. Àfikún: kìlọ̀ nìkan nígbà tí ìwọ̀n méjì tẹ̀léra bá ju 27 lọ.",
          youCanNow: "kọ òfin ìkìlọ̀ tó rọrùn nínú Python tí ó ń yí ìwọ̀n sensọ̀ padà sí ìṣe.",
          quickCheck: [
            { objective: "O4", q: "Òfin náà ni: if temp > 27: print(\"ALERT\"). Ìwọ̀n náà jẹ́ 25. Kí ló máa jáde?", options: ["ALERT", "Kò sí nǹkankan", "Àṣìṣe kan", "27"], answer: 1, why: "25 kò ju 27 lọ, nítorí náà if-statement náà kò ní ṣiṣẹ́." },
            { objective: "O4", q: "Ìkìlọ̀ yàrá server ń dún ní gbogbo ìgbà tí ilẹ̀kùn bá ṣí fún ìṣẹ́jú-àáyá kan. Kí ni o máa yí padà?", options: ["Pa ìkìlọ̀ náà títí láé", "Gbé ààlà sókè sí 100 degrees", "Yọ sensọ̀ náà kúrò", "Kìlọ̀ nìkan lẹ́yìn ọ̀pọ̀ ìwọ̀n gíga tẹ̀léra"], answer: 3, why: "Dídúró de ọ̀pọ̀ ìwọ̀n tẹ̀léra ń dènà ìkìlọ̀ èké láti inú ìfòsókè kúkúrú." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gbígbìyànjú ẹ̀rọ àfarawé nínú browser rẹ",
          minutes: 6,
          goal: "Ṣiṣẹ́ microcontroller àfarawé pẹ̀lú sensọ̀ kí o sì rí bí ìwọ̀n ṣe ń yí padà.",
          text: [
            "O lè kọ́ṣẹ́ IoT láìra ohun èlò. Ẹ̀rọ àfarawé (simulator) lórí ayélujára bí Wokwi ń jẹ́ kí o gbé board àfarawé bí ESP32 sílẹ̀, fi sensọ̀ bí DHT22 (sensọ̀ ìgbóná àti ọ̀rinrin afẹ́fẹ́) kún un, kí o sì ṣiṣẹ́ kóòdù nínú browser rẹ. Ṣàyẹ̀wò ojú-òpó náà láti mọ ohun tí ó jẹ́ ọ̀fẹ́ àti bóyá o nílò àkọọ́lẹ̀.",
            "Ọ̀nà tó rọrùn jù láti bẹ̀rẹ̀ ni láti ṣí ọ̀kan nínú àwọn iṣẹ́ àpẹẹrẹ tí ó ti wà nílẹ̀ fún ESP32 pẹ̀lú DHT22, kí o sì ka kóòdù náà kí o tó ṣiṣẹ́ rẹ̀. Nínú MicroPython, ẹ̀yà Python fún àwọn ẹ̀rọ kékeré, àwọn ìlà pàtàkì rí báyìí: sensor = dht.DHT22(machine.Pin(15)), lẹ́yìn náà sensor.measure() àti t = sensor.temperature(). Nọ́mbà pin gbọ́dọ̀ bá pin tí a so sensọ̀ mọ́ nínú àwòrán mu.",
            "Nígbà tí àfarawé náà ń ṣiṣẹ́, o lè tẹ sensọ̀ àfarawé náà kí o sì yí ìgbóná rẹ̀ padà, lẹ́yìn náà wo bí ìwọ̀n tí o tẹ̀ jáde àti òfin ìkìlọ̀ rẹ ṣe ń dáhùn. Bẹ́ẹ̀ gan-an ni a ṣe ń dán ẹ̀rọ gidi wò kí a tó gbé e kalẹ̀."
          ],
          steps: ["Ṣí ojú-òpó ẹ̀rọ àfarawé náà nínú browser rẹ.", "Wá iṣẹ́ àpẹẹrẹ fún ESP32 pẹ̀lú sensọ̀ DHT22.", "Ka kóòdù náà: wá ibi tí ó ti ń ka sensọ̀ àti ibi tí ó ti ń tẹ̀ jáde.", "Bẹ̀rẹ̀ àfarawé náà kí o sì wo àwọn ìwọ̀n.", "Yí ìgbóná sensọ̀ àfarawé náà padà kí o sì fi òfin ìkìlọ̀ rẹ láti Ẹ̀kọ́ 4 kún un."],
          words: [["Ẹ̀rọ àfarawé (simulator)", "software tí ń ṣe bí ohun èlò gidi kí o lè dánwò láìrà á."], ["ESP32", "microcontroller tí kò wọ́n, tí ó ní Wi-Fi àti Bluetooth nínú."], ["DHT22", "sensọ̀ ìgbóná àti ọ̀rinrin afẹ́fẹ́ tí ó wọ́pọ̀, tí kò wọ́n."], ["MicroPython", "ẹ̀yà Python kékeré tí ń ṣiṣẹ́ lórí microcontroller."], ["Pin", "ibi ìsopọ̀ onírin lórí board níbi tí a ti ń so àwọn apá pọ̀."]],
          slides: [
            { title: "Kọ́ṣẹ́ láìsí ohun èlò", bullets: ["Ẹ̀rọ àfarawé ń ṣiṣẹ́ nínú browser", "Board ESP32 àfarawé pẹ̀lú sensọ̀ DHT22", "Ṣàyẹ̀wò ohun tí ó jẹ́ ọ̀fẹ́"] },
            { title: "Àwọn ìlà MicroPython pàtàkì", bullets: ["sensor = dht.DHT22(machine.Pin(15))", "sensor.measure()", "t = sensor.temperature()"] },
            { title: "Dánwò bí ẹ̀rọ gidi", bullets: ["Yí ìgbóná àfarawé padà", "Wo bí òfin ìkìlọ̀ rẹ ṣe ń dáhùn", "Pin nínú kóòdù gbọ́dọ̀ bá ìsopọ̀ wáyà mu"] }
          ],
          sources: [WOKWI],
          tryIt: "Ṣí àpẹẹrẹ ESP32 àti DHT22 nínú ẹ̀rọ àfarawé lórí ayélujára kí o sì ṣiṣẹ́ rẹ̀. Yí ìgbóná sensọ̀ àfarawé náà padà ó kéré tán lẹ́ẹ̀mejì kí o sì kọ àwọn ìwọ̀n sílẹ̀. Tí o bá lè ṣe é, fi if-statement kan kún un tí ó ń tẹ \"ALERT\" jáde ní òkè 27 degrees C. Tí o kò bá lè lo ẹ̀rọ àfarawé náà, tọpa kóòdù àpẹẹrẹ náà lórí ìwé: sàmì sí ìlà tí ń ka sensọ̀ àti ìlà tí ń tẹ̀ jáde.",
          youCanNow: "ṣiṣẹ́ kí o sì dán ẹ̀rọ IoT àfarawé wò, kí o sì so ìwọ̀n rẹ̀ mọ́ òfin ìkìlọ̀.",
          quickCheck: [
            { objective: "O5", q: "Nínú MicroPython, ìlà wo ló ń ka ìgbóná lẹ́yìn sensor.measure()?", options: ["print(15)", "if temp > 27:", "t = sensor.temperature()", "machine.Pin()"], answer: 2, why: "sensor.temperature() ń dá ìwọ̀n náà padà lẹ́yìn sensor.measure()." },
            { objective: "O5", q: "Òfin ìkìlọ̀ àfarawé rẹ kò dún rárá. Báwo ni o ṣe máa dán an wò?", options: ["Tẹ sensọ̀ àfarawé náà kí o sì gbé ìgbóná rẹ̀ kọjá ààlà", "Ra sensọ̀ gidi ná", "Pa kóòdù náà rẹ́ kí o sì bẹ̀rẹ̀ àtúnbẹ̀rẹ̀", "Yí nọ́mbà pin padà láìní ìdí"], answer: 0, why: "Yíyí ìwọ̀n sensọ̀ àfarawé padà ń jẹ́ kí o rí bí òfin náà ṣe ń dáhùn." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dídáàbò bo ẹ̀rọ IoT àti ṣíṣètò iṣẹ́ rẹ",
          minutes: 6,
          goal: "Lo àwọn ìgbésẹ̀ ààbò pàtàkì fún àwọn ẹ̀rọ tó so pọ̀ kí o sì parí ètò iṣẹ́ rẹ.",
          text: [
            "Àwọn agbéjàkò fẹ́ràn láti dojú kọ àwọn ẹ̀rọ tó so pọ̀, nítorí ọ̀pọ̀ nínú wọn ń dé pẹ̀lú ọ̀rọ̀ aṣínà àkọ́kọ́ (default password) tí kò lágbára, a kì í sì í ṣe àtúnṣe (update) wọn rí. Kámẹ́rà tàbí smart plug tí wọ́n ti gbà wọlé lè ṣe amí àwọn ènìyàn tàbí kí wọ́n fi kọlu àwọn ẹlòmíì.",
            "Ìmọ̀ràn Federal Trade Commission (FTC, àjọ ìjọba US tí ń dáàbò bo oníbàárà) fún àwọn ẹ̀rọ ilé: yí orúkọ olùlò àti ọ̀rọ̀ aṣínà àkọ́kọ́ padà, má sì tún ọ̀rọ̀ aṣínà lò; tan two-factor authentication níbi tí ó bá wà; máa ṣe àtúnṣe firmware àti app ẹ̀rọ náà; pa àwọn ohun tí o kò lò, bí ìṣàkóso láti ọ̀nà jíjìn; kí o sì yọ àwọn ẹ̀rọ àtijọ́ kúrò. Fún router: yí ètò àkọ́kọ́ rẹ̀ padà, tan encryption, kí o sì wá àtúnṣe. Guest network ń pa àwọn ẹ̀rọ ọlọ́gbọ́n mọ́ yàtọ̀ sí kọ̀mpútà tí ó ní fáìlì àdáni.",
            "Níbi iṣẹ́, tún máa tọ́jú àkọsílẹ̀ gbogbo ẹ̀rọ tó so pọ̀, fi àwọn ẹ̀rọ IoT sí nẹ́tíwọ́ọ̀kì tiwọn, kí o sì gba dátà tí o nílò nìkan, pàápàá nígbà tí kámẹ́rà tàbí makirofóònù bá wà. Béèrè lọ́wọ́ ẹgbẹ́ IT tàbí ẹgbẹ́ ààbò ilé-iṣẹ́ kí o tó so ohunkóhun mọ́ nẹ́tíwọ́ọ̀kì ibi iṣẹ́."
          ],
          steps: ["Yí gbogbo ọ̀rọ̀ aṣínà àkọ́kọ́ padà; lo èyí tó lágbára, tí kò jọ òmíràn.", "Tan two-factor authentication níbi tí ó bá wà.", "Ṣe àtúnṣe firmware àti app ẹ̀rọ náà.", "Pa àwọn ohun tí o kò lò; yọ àwọn ẹ̀rọ àtijọ́ kúrò.", "Fi àwọn ẹ̀rọ ọlọ́gbọ́n sí nẹ́tíwọ́ọ̀kì ọ̀tọ̀ tàbí guest network, kí o sì tọ́jú àkọsílẹ̀ ẹ̀rọ."],
          words: [["Ọ̀rọ̀ aṣínà àkọ́kọ́ (default password)", "ọ̀rọ̀ aṣínà tí ẹ̀rọ fi dé; àwọn agbéjàkò mọ àkọsílẹ̀ wọ̀nyí."], ["Firmware", "software inú ẹ̀rọ tí ń mú un ṣiṣẹ́."], ["Two-factor authentication", "wíwọlé pẹ̀lú ọ̀rọ̀ aṣínà àti ẹ̀rí kejì, bí kóòdù."], ["Guest network", "nẹ́tíwọ́ọ̀kì Wi-Fi ọ̀tọ̀ tí ń pa àwọn ẹ̀rọ mọ́ kúrò lọ́dọ̀ kọ̀mpútà pàtàkì rẹ."], ["Àkọsílẹ̀ ẹ̀rọ (device inventory)", "àkọsílẹ̀ gbogbo ẹ̀rọ tó so pọ̀ tí ó wà lábẹ́ àbójútó rẹ."]],
          slides: [
            { title: "Ìdí tí wọ́n fi ń kọlu IoT", bullets: ["Ọ̀rọ̀ aṣínà àkọ́kọ́ tí kò lágbára", "Ẹ̀rọ tí a kì í ṣe àtúnṣe rí", "Kámẹ́rà àti makirofóònù lè jẹ́ kí ìsọfúnni àdáni jò"] },
            { title: "Dáàbò bo gbogbo ẹ̀rọ", bullets: ["Yí ọ̀rọ̀ aṣínà àkọ́kọ́ padà; má tún un lò", "Two-factor níbi tí ó bá wà", "Ṣe àtúnṣe firmware àti app", "Pa àwọn ohun tí o kò lò"] },
            { title: "Dáàbò bo nẹ́tíwọ́ọ̀kì", bullets: ["Yí ètò àkọ́kọ́ router padà, tan encryption", "Ẹ̀rọ ọlọ́gbọ́n sí guest network", "Tọ́jú àkọsílẹ̀ ẹ̀rọ; béèrè lọ́wọ́ IT níbi iṣẹ́"] }
          ],
          sources: [FTC, CISA],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò IoT ojú-ìwé kan rẹ (fún àpẹẹrẹ yàrá server, fírísà ibi ìpínkiri oúnjẹ tàbí ọgbà). Dárúkọ sensọ̀, ẹ̀rọ, ìsopọ̀ àti ibi tí dátà ń lọ, ya ìṣàn láti sensọ̀ dé ìkìlọ̀, kọ òfin ìkìlọ̀ gẹ́gẹ́ bí if-statement Python, kí o sì kọ ìgbésẹ̀ ààbò márùn-ún tí o máa gbé.",
          youCanNow: "dáàbò bo àwọn ẹ̀rọ tó so pọ̀ kí o sì ṣètò iṣẹ́ àbójútó IoT tó pé.",
          quickCheck: [
            { objective: "O6", q: "Kí ló dé tí àwọn agbéjàkò fi máa ń dojú kọ ẹ̀rọ IoT?", options: ["Wọ́n máa ń wà ní pípa nígbà gbogbo", "Wọ́n ń lo agbára jù", "Wọn kò ní ìsopọ̀ nẹ́tíwọ́ọ̀kì", "Ọ̀pọ̀ ń dé pẹ̀lú ọ̀rọ̀ aṣínà àkọ́kọ́ tí kò lágbára, a kì í sì í ṣe àtúnṣe wọn"], answer: 3, why: "Ọ̀rọ̀ aṣínà àkọ́kọ́ tí kò lágbára àti àìṣe àtúnṣe ń mú kí ó rọrùn láti wọ ọ̀pọ̀ ẹ̀rọ." },
            { objective: "O6", q: "Kámẹ́rà ilẹ̀kùn tuntun kan ní ohun ìṣàkóso láti ọ̀nà jíjìn tí o kò ní lò. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ ní títàn bóyá o lè nílò rẹ̀", "Pa á", "Pín ọ̀rọ̀ aṣínà rẹ̀ pẹ̀lú ẹgbẹ́", "Tún ọ̀rọ̀ aṣínà email rẹ lò lórí rẹ̀"], answer: 1, why: "Pípa àwọn ohun tí o kò lò ń dí ọ̀nà àbáwọlé fún àwọn agbéjàkò." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkọ́ àti dídáàbò bo iṣẹ́ IoT",
        questions: [
          { objective: "O4", q: "Ìlà wo ló jẹ́ òfin ìkìlọ̀ Python tó tọ́?", options: ["temp > 27 then alert", "alert if temp", "print if temp > 27", "if temp > 27: print(\"ALERT\")"], answer: 3, why: "Python ń lo if, condition kan àti colon." },
          { objective: "O4", q: "Kí ló dé tí a fi ń dúró de ọ̀pọ̀ ìwọ̀n gíga tẹ̀léra kí a tó kìlọ̀?", options: ["Láti yẹra fún ìkìlọ̀ èké láti inú ìfòsókè kúkúrú", "Láti fi ìwé pamọ́", "Nítorí pé sensọ̀ máa ń ṣàṣìṣe nígbà gbogbo", "Láti mú ẹ̀rọ náà lọ́ra"], answer: 0, why: "Ìfòsókè kan, bí ilẹ̀kùn tí ó ṣí, lè má jẹ́ ìṣòro gidi." },
          { objective: "O5", q: "Nínú ẹ̀rọ àfarawé, kóòdù rẹ ń ka pin 15 ṣùgbọ́n pin 4 ni a so sensọ̀ mọ́. Kí ló máa ṣẹlẹ̀?", options: ["Ó máa ṣiṣẹ́ bákan náà", "Board náà máa jóná", "Kóòdù náà kò ní rí ìwọ̀n gbà láti inú sensọ̀", "Ìgbóná máa di ìlọ́po méjì"], answer: 2, why: "Pin nínú kóòdù gbọ́dọ̀ bá ìsopọ̀ wáyà mu." },
          { objective: "O6", q: "Kí ni ohun ÀKỌ́KỌ́ láti ṣe pẹ̀lú kámẹ́rà ọlọ́gbọ́n tuntun?", options: ["Fi ọ̀rọ̀ aṣínà àkọ́kọ́ sílẹ̀", "Pín ìwọlé rẹ̀ pẹ̀lú àwọn ọ̀rẹ́", "Pa àtúnṣe (update)", "Yí ọ̀rọ̀ aṣínà àkọ́kọ́ padà sí èyí tó lágbára, tí kò jọ òmíràn"], answer: 3, why: "Àwọn agbéjàkò mọ ọ̀rọ̀ aṣínà àkọ́kọ́ dáadáa." },
          { objective: "O6", q: "Kí ló dé tí a fi ń fi àwọn ẹ̀rọ ọlọ́gbọ́n sí guest network?", options: ["Láti mú wọn yára", "Nítorí pé wọn kò nílò ọ̀rọ̀ aṣínà", "Láti pa wọ́n mọ́ yàtọ̀ sí kọ̀mpútà tí ó ní fáìlì àdáni", "Láti pa encryption"], answer: 2, why: "Yíyà wọ́n sọ́tọ̀ ń dín ohun tí ẹ̀rọ tí wọ́n gbà wọlé lè dé kù." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí Internet of Things (IoT)",
    questions: [
      { objective: "O1", q: "Internet of Things ni:", options: ["Ìkànnì àjọlò (social media) nìkan", "Àwọn nǹkan tí ó ní sensọ̀ tí wọ́n ń so pọ̀ tí wọ́n sì ń pín dátà", "Irú ìwé ìtẹ̀wé kan", "Eré kọ̀mpútà kan"], answer: 1, why: "IoT ni àwọn nǹkan tó so pọ̀ tí ń mọ ohun tó ń ṣẹlẹ̀ tí wọ́n sì ń pín in." },
      { objective: "O1", q: "Lílo dátà sensọ̀ láti tún ẹ̀rọ ṣe kí ó tó bàjẹ́ ni a ń pè ní:", options: ["Predictive maintenance", "Phishing", "Edge storage", "Firmware"], answer: 0, why: "Predictive maintenance ń rí ìṣòro ní kùtùkùtù." },
      { objective: "O1", q: "Kí ló dé tí ààbò fi jẹ́ apá kan gbogbo iṣẹ́ IoT?", options: ["A kò lè gba ẹ̀rọ IoT wọlé", "Fóònù nìkan ló nílò rẹ̀", "Gbogbo ẹ̀rọ tó so pọ̀ lè jẹ́ ọ̀nà àbáwọlé fún àwọn agbéjàkò", "Ó ń mú kí ẹ̀rọ dín owó kù"], answer: 2, why: "Ẹ̀rọ púpọ̀ sí i túmọ̀ sí ọ̀nà àbáwọlé púpọ̀ sí i." },
      { objective: "O2", q: "Kí ni ìpele mẹ́rin ètò IoT?", options: ["Sensọ̀, ẹ̀rọ, ìsopọ̀, cloud tàbí app", "Keyboard, mouse, ojú-iboju, ẹ̀rọ ìtẹ̀wé", "Email, text, ìpè, ìfiránṣẹ́", "Gbígbóná, títutù díẹ̀, títutù, ìpamọ́"], answer: 0, why: "Dátà ń ṣàn láti sensọ̀ sí ẹ̀rọ sí ìsopọ̀ sí cloud tàbí app." },
      { objective: "O2", q: "Kọ̀mpútà kékeré, tí kò wọ́n, lórí chip kan tí ń ṣe ètò kan ṣoṣo ni:", options: ["Server farm", "Router", "Dashboard", "Microcontroller"], answer: 3, why: "Àwọn board bí ESP32 àti Arduino jẹ́ microcontroller." },
      { objective: "O2", q: "Mọ́tò tí ń ṣí fáfà omi jẹ́:", options: ["Sensọ̀", "Actuator", "Protocol", "Topic"], answer: 1, why: "Actuator ń ṣe nǹkan nínú ayé gidi." },
      { objective: "O2", q: "Ṣíṣe ìpinnu lórí ẹ̀rọ dípò nínú cloud ni:", options: ["Ìsanwó cloud", "Edge computing", "Bluetooth", "Ìkìlọ̀ èké"], answer: 1, why: "Edge computing ń ṣiṣẹ́ lórí dátà nítòsí ibi tí a ti gbà á." },
      { objective: "O3", q: "Ìsopọ̀ wo ló dára jù fún ẹ̀rọ ìdárayá ọwọ́ tí ń bá fóònù rẹ sọ̀rọ̀?", options: ["LoRaWAN", "Okùn onírin", "Satellite TV", "Bluetooth Low Energy"], answer: 3, why: "BLE kò jẹ agbára púpọ̀, kò sì lọ jìnnà." },
      { objective: "O3", q: "Ìsopọ̀ wo ló bá GPS tracker lórí ọkọ̀ akẹ́rù ìfijíṣẹ́ mu?", options: ["Cellular", "Wi-Fi ilé", "Okùn USB", "Bluetooth nìkan"], answer: 0, why: "Cellular ń ṣiṣẹ́ fẹ́rẹ̀ẹ́ níbi gbogbo tí àmì bá wà." },
      { objective: "O3", q: "Nínú MQTT, fírísà ń fi ìwọ̀n rẹ̀ ránṣẹ́ nípa:", options: ["Títẹ̀ ẹ́ jáde sórí ìwé", "Pípe alákòóso", "Títẹ̀ ẹ́ jáde (publish) sí topic", "Fífi pamọ́ sí USB stick"], answer: 2, why: "Ẹ̀rọ ń tẹ̀ jáde; app ń forúkọ sílẹ̀." },
      { objective: "O3", q: "Báwo ni àwọn ẹ̀rọ IoT oníbátìrì ṣe ń pẹ́ gan-an?", options: ["Wọn kì í tàn rárá", "Wọ́n ń lo Wi-Fi tó yára jù", "Wọ́n ń fi fídíò ránṣẹ́ ní gbogbo ọjọ́", "Wọ́n ń sùn ní ọ̀pọ̀ ìgbà, wọ́n sì ń jí láti kà àti láti fi ránṣẹ́"], answer: 3, why: "Sísùn ń fi agbára pamọ́." },
      { objective: "O4", q: "Òfin nínú IoT sábà máa ń túmọ̀ sí:", options: ["Rúlà fún wíwọn", "Òfin ọ̀rọ̀ aṣínà", "Tí ìwọ̀n kan bá kọjá ààlà, ṣe nǹkan kan", "Okùn kan"], answer: 2, why: "Òfin ń yí ìwọ̀n padà sí ìṣe." },
      { objective: "O4", q: "readings = [20, 28, 22]. Pẹ̀lú òfin \"kìlọ̀ ní òkè 27\", ìkìlọ̀ mélòó ló máa wà?", options: ["0", "1", "2", "3"], answer: 1, why: "28 nìkan ló ju 27 lọ." },
      { objective: "O4", q: "Ìkìlọ̀ kan dún nígbà tí ẹnìkan ṣí ilẹ̀kùn fírísà fún ìṣẹ́jú-àáyá kan. Èyí jẹ́:", options: ["Ìkìlọ̀ èké", "Edge computing", "Àtúnṣe firmware", "Encryption"], answer: 0, why: "Ìfòsókè kúkúrú tí kì í ṣe ìṣòro gidi jẹ́ ìkìlọ̀ èké." },
      { objective: "O5", q: "Kí ló dé tí a fi ń lo ẹ̀rọ àfarawé kí a tó ra ohun èlò?", options: ["Nítorí pé ẹ̀rọ gidi kì í ṣiṣẹ́ rárá", "Láti yẹra fún kíkọ́ kóòdù", "Láti kọ́kọ́ dán ètò àti kóòdù wò lọ́fẹ̀ẹ́ tàbí lówó díẹ̀", "Òfin ló pàṣẹ ẹ̀rọ àfarawé"], answer: 2, why: "Ẹ̀rọ àfarawé ń jẹ́ kí o dánwò láìsí ohun èlò." },
      { objective: "O5", q: "MicroPython ni:", options: ["Ẹ̀yà Python kékeré fún microcontroller", "Ejò kan", "Irú sensọ̀ kan", "Orúkọ ilé-iṣẹ́ Wi-Fi kan"], answer: 0, why: "Ó ń ṣiṣẹ́ kóòdù Python lórí àwọn board kékeré." },
      { objective: "O5", q: "DHT22 ń wọn:", options: ["Ibi tí nǹkan wà (GPS)", "Ìlù ọkàn", "Fídíò", "Ìgbóná àti ọ̀rinrin afẹ́fẹ́"], answer: 3, why: "Ó jẹ́ sensọ̀ ìgbóná àti ọ̀rinrin afẹ́fẹ́." },
      { objective: "O6", q: "Èwo ni yíyàn tó ní ààbò jù fún ọ̀rọ̀ aṣínà smart plug tuntun?", options: ["Fi ti àkọ́kọ́ sílẹ̀", "Ọ̀rọ̀ aṣínà tó lágbára, tí kò jọ òmíràn", "Lo ọ̀rọ̀ aṣínà kan náà pẹ̀lú ti email rẹ", "\"password123\""], answer: 1, why: "Ọ̀rọ̀ aṣínà tó lágbára, tí kò jọ òmíràn ń dènà wíwọlé tó rọrùn." },
      { objective: "O6", q: "Kí ni o gbọ́dọ̀ ṣe pẹ̀lú firmware lórí àwọn ẹ̀rọ IoT?", options: ["Má ṣe àtúnṣe rẹ̀ láé", "Máa ṣe àtúnṣe rẹ̀ déédéé", "Pa á rẹ́", "Pín in lórí ayélujára"], answer: 1, why: "Àtúnṣe ń dí àwọn ihò ààbò." },
      { objective: "O6", q: "O fẹ́ so sensọ̀ kan mọ́ nẹ́tíwọ́ọ̀kì ibi iṣẹ́ rẹ. Kí ni o máa kọ́kọ́ ṣe?", options: ["So ó pọ̀ ní ìkọ̀kọ̀", "Pa firewall", "Pín ọ̀rọ̀ aṣínà Wi-Fi lórí ayélujára", "Béèrè lọ́wọ́ ẹgbẹ́ IT tàbí ẹgbẹ́ ààbò"], answer: 3, why: "Nẹ́tíwọ́ọ̀kì ibi iṣẹ́ ní òfin; IT gbọ́dọ̀ fọwọ́ sí ẹ̀rọ tuntun." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      3,
      6,
      7,
      9,
      11,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Àwọn apá ètò náà",
        objective: "O2",
        notYet: "Sensọ̀, ẹ̀rọ tàbí ibi tí dátà ń lọ kò sí níbẹ̀.",
        meets: "Ó dárúkọ sensọ̀, ẹ̀rọ, ìsopọ̀ àti ibi tí dátà ń lọ.",
        exceeds: "Ó tún dárúkọ actuator tàbí ìpinnu edge, ó sì sọ ìdí tí ó fi ń ṣèrànlọ́wọ́."
      },
      {
        name: "Àwòrán ìṣàn dátà",
        objective: "O2",
        notYet: "Kò sí àwòrán, tàbí àwọn ìgbésẹ̀ kò tẹ̀léra.",
        meets: "Àwòrán náà fi sensọ̀, ẹ̀rọ, ìsopọ̀, cloud tàbí app, àti ìkìlọ̀ hàn ní ìtẹ̀léra.",
        exceeds: "Àwòrán náà tún fi ẹni tí ó ń gba ìkìlọ̀ àti ohun tí wọ́n ń ṣe hàn."
      },
      {
        name: "Yíyan ìsopọ̀",
        objective: "O3",
        notYet: "Ìsopọ̀ náà kò bá ibi tàbí agbára mu, bí Wi-Fi nínú oko tí kò ní Wi-Fi.",
        meets: "Ìsopọ̀ náà bá ìjìnnà, agbára àti dátà iṣẹ́ náà mu.",
        exceeds: "Ó ṣàlàyé ìdí tí ìsopọ̀ míì kò fi ní bá a mu tó bẹ́ẹ̀."
      },
      {
        name: "Òfin ìkìlọ̀",
        objective: "O4",
        notYet: "Òfin náà kò sí tàbí kò ní ṣiṣẹ́, bí ìfiwéra tí kò tọ́.",
        meets: "If-statement Python tó tọ́ pẹ̀lú ààlà àti ìṣe tó bọ́gbọ́n mu.",
        exceeds: "Ó tún ń yẹra fún ìkìlọ̀ èké, bí dídúró de ọ̀pọ̀ ìwọ̀n, a sì ti dán an wò nínú ẹ̀rọ àfarawé."
      },
      {
        name: "Àwọn ìgbésẹ̀ ààbò",
        objective: "O6",
        notYet: "Ìgbésẹ̀ tí kò tó márùn-ún, tàbí ìgbésẹ̀ tí kò dáàbò bo àwọn ẹ̀rọ náà.",
        meets: "Ìgbésẹ̀ márùn-ún tó tọ́, bí ọ̀rọ̀ aṣínà tí kò jọ òmíràn, àtúnṣe àti nẹ́tíwọ́ọ̀kì ọ̀tọ̀.",
        exceeds: "Ó tún ní àkọsílẹ̀ ẹ̀rọ àti bíbéèrè lọ́wọ́ IT kí a tó so pọ̀ níbi iṣẹ́."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi ọgbọ́n IoT tàbí sensọ̀ kún résumé wọn tàbí tí wọ́n béèrè fún iṣẹ́ ilé àti ohun èlò, ìkó ẹrù tàbí IT láàárín ọjọ́ 60",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn yí ọ̀rọ̀ aṣínà àkọ́kọ́ padà tàbí ṣe àtúnṣe ẹ̀rọ ọlọ́gbọ́n nílé láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Python, networking tàbí cybersecurity lẹ́yìn náà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní browser àti íńtánẹ́ẹ̀tì",
      "Ẹ̀rọ àfarawé IoT ọ̀fẹ́ lórí ayélujára, bí Wokwi (ṣàyẹ̀wò ohun tí ó jẹ́ ọ̀fẹ́ lọ́wọ́lọ́wọ́)",
      "Ìwé àti gègé, tàbí document kan, fún ètò ojú-ìwé kan àti àwòrán ìṣàn dátà",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: àwọn ẹ̀kọ́, ìdánrawò lórí ẹ̀rọ àfarawé, àwọn ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú papọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan; fi ẹ̀rọ àfarawé hàn lórí ojú-iboju tí gbogbo ènìyàn ń rí kí àwọn akẹ́kọ̀ọ́ tó gbìyànjú rẹ̀.",
      "Pe àwọn ológun tẹ́lẹ̀ láti fi IoT wé àyẹ̀wò ohun èlò ológun, ìsopọ̀ rédíò àti ìlànà ìkìlọ̀ tí wọ́n ti mọ̀ tẹ́lẹ̀.",
      "Fún akẹ́kọ̀ọ́ kọ̀ọ̀kan tàbí méjì-méjì ní iṣẹ́ tí ó yàtọ̀ (yàrá server, fírísà ibi ìpínkiri oúnjẹ, ọgbà) kí a lè fi àwọn ètò wéra.",
      "Má ṣe so ẹ̀rọ gidi kankan mọ́ nẹ́tíwọ́ọ̀kì ètò ẹ̀kọ́ tàbí ti ibi iṣẹ́ láìsí àṣẹ ẹgbẹ́ IT tàbí ẹgbẹ́ ààbò.",
      "Fi rubric ṣe àmì fún ètò ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
