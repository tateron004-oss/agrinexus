"use strict";

// Koach Learn course (Yoruba translation of shared/ai-chatbots-no-code.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-chatbots-no-code-yo",
  lang: "yo",
  translationOf: "ai-chatbots-no-code",
  category: "Small Business",
  name: "Kíkọ́ Chatbot AI (Kò Sí Ìdí fún Kíkọ Kóòdù)",
  skills: "Yíyan iṣẹ́ chatbot, Kíkọ ìtọ́sọ́nà chatbot, Ṣíṣe fáìlì ìmọ̀, Fífi òfin ààbò síbẹ̀, Dídán an wò pẹ̀lú ìbéèrè gidi, Ṣíṣí i sílẹ̀ àti mímú un dára sí i",
  outcome: "kọ́ chatbot AI láìkọ kóòdù, tí ó ń dáhùn àwọn ìbéèrè tí wọ́n sábà máa ń béèrè fún ilé-iṣẹ́, àjọ àánú tàbí ẹgbẹ́ láti inú ìsọfúnni tìrẹ, pẹ̀lú ìtọ́sọ́nà tó yé àti òfin ààbò, tí o sì ti dán wò pẹ̀lú ìbéèrè gidi kí ẹnikẹ́ni tó lò ó.",
  about: [
    "Chatbot máa ń dáhùn ìbéèrè nínú fèrèsé ìfọ̀rọ̀wérọ̀ (chat), ní àkókò èyíkéyìí. Pẹ̀lú àwọn irinṣẹ́ AI òde òní, o lè kọ́ ọ̀kan láìkọ kóòdù: o fún un ní ìtọ́sọ́nà àti ìsọfúnni tìrẹ, ó sì máa ń dáhùn ní èdè tó rọrùn.",
    "Ẹ̀kọ́ yìí wà fún àwọn tí wọ́n ní ilé-iṣẹ́ kékeré, òṣìṣẹ́ àti olùyọ̀ǹda ní àjọ àánú, àti àwọn ọ̀dọ́ tí wọ́n fẹ́ iṣẹ́ àkànṣe gidi. Àpẹẹrẹ: ilé búrẹ́dì tí ó ń dáhùn \"Ṣé ẹ ṣí ní ọjọ́ Àìkú?\", ilé ìpèsè oúnjẹ tí ó ń ṣàlàyé ohun tí o máa mú wá, àti ẹgbẹ́ ilé-ìwé tí ó ń dáhùn ìbéèrè nípa ìdánwò ìwọlé.",
    "O máa ṣètò iṣẹ́ chatbot náà, kọ ìtọ́sọ́nà rẹ̀, fún un ní fáìlì ìmọ̀, fi òfin ààbò kún un, dán an wò, kí o sì ṣí i sílẹ̀. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Kọ́ chatbot tí ó ń ṣiṣẹ́ láìkọ kóòdù fún ilé-iṣẹ́ gidi tàbí ti àṣeṣe: iṣẹ́ rẹ̀ nínú gbólóhùn kan, ìtọ́sọ́nà tí a kọ pẹ̀lú ohùn (tone) àti òfin ààbò, fáìlì ìmọ̀ ojú-ìwé kan tí ó ní àwọn òtítọ́, àti àkọsílẹ̀ ìdánwò tí ó ní ó kéré tán ìbéèrè gidi mẹ́wàá pẹ̀lú àtúnṣe tí o ṣe. Pín in pẹ̀lú ẹnì kan, kí o sì kọ èsì tí ó fún ọ sílẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí wọ́n ní ilé-iṣẹ́ kékeré, òṣìṣẹ́ wọn, àti àwọn tí wọ́n ń darí àjọ àánú, ṣọ́ọ̀ṣì tàbí ẹgbẹ́, tí wọ́n ń dáhùn ìbéèrè kan náà léraléra lórí fóònù, ọ̀rọ̀ ìránṣẹ́, ímeèlì àti ìkànnì àjọlò (social media).",
    startingPoint: "Wọ́n lè lo fóònù tàbí kọ̀mpútà, ímeèlì àti ìkànnì àjọlò, àwọn kan sì ti gbìyànjú olùrànlọ́wọ́ AI rí. Wọn kò ní ìrírí kíkọ kóòdù, ọ̀pọ̀ jù lọ kò sì tíì ṣètò chatbot rí.",
    gap: "Dídáhùn ìbéèrè tí wọ́n ń tún béèrè ń gba ọ̀pọ̀ wákàtí lọ́sẹ̀ kọ̀ọ̀kan, àwọn oníbàárà sì ń retí ìdáhùn ní àkókò èyíkéyìí. Àwọn akẹ́kọ̀ọ́ nílò láti kọ́ chatbot tí iṣẹ́ rẹ̀ kéré, tí ó sì jẹ́ olóòótọ́, láti inú òtítọ́ tiwọn, pẹ̀lú òfin ààbò àti ìdánwò, kí ó lè fi àkókò pamọ́ láìfúnni ní ìdáhùn tí kò tọ́ tàbí tí ó léwu, tí ó lè ba ìgbẹ́kẹ̀lé jẹ́.",
    constraints: [
      "Ìpele kíkà: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; kò sí kíkọ kóòdù",
      "Ẹ̀rọ: kọ̀mpútà ló rọrùn jù; àwọn irinṣẹ́ kan ń ṣiṣẹ́ lórí fóònù",
      "Owó àti àwọn ẹ̀yà irinṣẹ́: àwọn ẹ̀yà chatbot àti ètò ìsanwó máa ń yí padà; àwọn akẹ́kọ̀ọ́ máa ṣàyẹ̀wò ojú-ìwé ìrànlọ́wọ́ irinṣẹ́ náà",
      "Ìpamọ́: kò sí orúkọ oníbàárà, nọ́mbà fóònù, ìsọfúnni olùfúnni-lẹ́bùn, ọ̀rọ̀ aṣínà tàbí ìsọfúnni báńkì nínú fáìlì kankan",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5, nǹkan bí ìṣẹ́jú 60 lápapọ̀, pẹ̀lú àkókò ìdánwò"
    ],
    prerequisites: "Kò sí. Àwọn tí wọ́n jẹ́ tuntun sí olùrànlọ́wọ́ AI lè kọ́kọ́ ṣe ẹ̀kọ́ ìfihàn sí AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú àwọn ìbéèrè tí àjọ rẹ ti ń gbà tẹ́lẹ̀", action: "kọ iṣẹ́ chatbot kan nínú gbólóhùn kan, kí o sì ṣe àkọsílẹ̀ ìbéèrè mẹ́wàá tí ó gbọ́dọ̀ dáhùn", standard: "láìsí ìbéèrè tí ó léwu nípa ìlera, òfin tàbí owó nínú àkọsílẹ̀ náà" },
    { id: "O2", condition: "Ní lílo irinṣẹ́ kíkọ́ chatbot láìkọ kóòdù", action: "kọ ìtọ́sọ́nà tí ó sọ ipa chatbot, àwọn tí ó ń bá sọ̀rọ̀, iṣẹ́ rẹ̀, ohùn rẹ̀ àti ààlà rẹ̀", standard: "pẹ̀lú gbogbo apá márùn-ún àti ìlà kan fún ohun tí ó máa ṣe nígbà tí kò bá mọ̀" },
    { id: "O3", condition: "Pẹ̀lú àwọn òtítọ́ àjọ rẹ", action: "ṣe fáìlì ìmọ̀ ojú-ìwé kan, tí ó ní déètì, ní ọ̀nà ìbéèrè àti ìdáhùn, kí o sì fi kún chatbot náà", standard: "láìsí ìsọfúnni àdáni kankan nínú rẹ̀" },
    { id: "O4", condition: "Fún chatbot tí gbogbo ènìyàn máa lò", action: "kọ òfin ààbò tí ó ń jẹ́ kí ó dúró lórí kókó ọ̀rọ̀, kí ó jẹ́ olóòótọ́, kí ó sì wà láìléwu", standard: "pẹ̀lú kíkọ̀ nọ́mbà àdáni, kíkọ̀ ìmọ̀ràn akọ́ṣẹ́mọṣẹ́, sísọ pé AI ni, àti rírán ọ̀ràn pàjáwìrì sí 911" },
    { id: "O5", condition: "Kí ẹnikẹ́ni tó lo chatbot náà", action: "dán an wò pẹ̀lú ó kéré tán ìbéèrè gidi àti ìbéèrè ẹ̀tàn mẹ́wàá, kọ èsì sílẹ̀, kí o sì tún ohun tí ó kùnà ṣe", standard: "ní títún gbogbo ìbéèrè tí ó kùnà dán wò títí tí yóò fi yege" },
    { id: "O6", condition: "Nígbà tí chatbot náà bá ti ṣetán", action: "pín in pẹ̀lú àwọn ènìyàn díẹ̀, gba èsì wọn, kí o sì ṣètò ìgbà tí o máa ń ṣe àtúnṣe", standard: "pẹ̀lú ènìyàn tí wọ́n lè kàn sí nígbà gbogbo fún ohun tí chatbot kò lè ṣe" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣètò àti kíkọ́ chatbot náà",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí chatbot AI lè ṣe, àti yíyan iṣẹ́ kan fún un",
          minutes: 4,
          goal: "Kọ iṣẹ́ chatbot nínú gbólóhùn kan, kí o sì ṣe àkọsílẹ̀ àwọn ìbéèrè tí ó gbọ́dọ̀ dáhùn.",
          text: [
            "Chatbot AI jẹ́ olùrànlọ́wọ́ AI tí a ṣètò fún iṣẹ́ kan ṣoṣo. Dípò kí ó máa dáhùn ohunkóhun, ó ń dáhùn ìbéèrè nípa àjọ rẹ, ní lílo ìsọfúnni tí o fún un.",
            "Iṣẹ́ àkọ́kọ́ tó dára kéré, wọ́n sì máa ń tún ara wọn ṣe: àkókò ìṣísílẹ̀ àti ibi tí ẹ wà, iye owó, bí a ṣe ń forúkọ sílẹ̀, ohun tí a máa mú wá, òfin ìdápadà ọjà, àkókò iṣẹ́ olùyọ̀ǹda. Iṣẹ́ àkọ́kọ́ tí kò dára ni èyí tí ó léwu: ìmọ̀ràn ìlera, òfin tàbí owó, tàbí ohunkóhun tí ó nílò ìpinnu ènìyàn.",
            "Bẹ̀rẹ̀ pẹ̀lú àwọn ìbéèrè tí àwọn ènìyàn ti ń béèrè. Wo ímeèlì rẹ, ọ̀rọ̀ ìránṣẹ́, ìpè fóònù àti ọ̀rọ̀ lórí ìkànnì àjọlò. Ìbéèrè mẹ́wàá tí wọ́n ń béèrè jù lọ ni yóò di iṣẹ́ chatbot náà."
          ],
          steps: ["Kọ ìbéèrè mẹ́wàá tí àwọn ènìyàn ń béèrè lọ́wọ́ rẹ jù lọ sílẹ̀.", "Pa èyíkéyìí tí ó nílò ìpinnu ènìyàn tàbí tí ó léwu rẹ́.", "Kọ iṣẹ́ chatbot náà nínú gbólóhùn kan: \"Chatbot yìí ń dáhùn ìbéèrè nípa [kókó ọ̀rọ̀] fún [àwọn wo].\""],
          words: [["Chatbot", "ètò kọ̀mpútà tí ó ń dáhùn ìbéèrè nínú fèrèsé ìfọ̀rọ̀wérọ̀ (chat)."], ["Use case (ìlò)", "iṣẹ́ pàtó tí a ń lo irinṣẹ́ kan fún."]],
          slides: [
            { title: "Chatbot jẹ́ olùrànlọ́wọ́ tí ó dojú kọ iṣẹ́ kan", bullets: ["A ṣètò rẹ̀ fún iṣẹ́ kan ṣoṣo", "Ó ń dáhùn láti inú ìsọfúnni tìrẹ"] },
            { title: "Iṣẹ́ àkọ́kọ́ tó dára", bullets: ["Àkókò ìṣísílẹ̀, ibi tí ẹ wà, iye owó", "Bí a ṣe ń forúkọ sílẹ̀ tàbí ohun tí a máa mú wá", "Àkókò iṣẹ́ olùyọ̀ǹda, òfin ìdápadà ọjà"] },
            { title: "Fi sílẹ̀ fún ènìyàn", bullets: ["Ìmọ̀ràn ìlera, òfin tàbí owó", "Ẹ̀sùn àti ọ̀ràn tí ó nílò ìpinnu"] },
            { title: "Bẹ̀rẹ̀ pẹ̀lú ìbéèrè gidi", bullets: ["Ímeèlì, ìpè, ọ̀rọ̀ ìránṣẹ́, ọ̀rọ̀ lórí ìkànnì", "Ìbéèrè mẹ́wàá tó ga jù = iṣẹ́ náà"] }
          ],
          tryIt: "Yan ilé-iṣẹ́, àjọ àánú tàbí ẹgbẹ́ kan (tìrẹ tàbí ti àṣeṣe). Kọ ìbéèrè mẹ́wàá tí wọ́n ń béèrè jù lọ àti iṣẹ́ chatbot rẹ̀ nínú gbólóhùn kan.",
          youCanNow: "yan iṣẹ́ kékeré tí kò léwu fún chatbot, kí o sì ṣe àkọsílẹ̀ àwọn ìbéèrè tí ó gbọ́dọ̀ dáhùn.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ó ń jẹ́ kí iṣẹ́ àkọ́kọ́ dára fún chatbot ilé-iṣẹ́?", options: ["Fífúnni ní ìmọ̀ràn òfin", "Pípinnu ìdápadà owó fún ẹnì kọ̀ọ̀kan", "Dídáhùn ìbéèrè kékeré tí wọ́n ń tún béèrè, bí àkókò ìṣísílẹ̀ àti ìforúkọsílẹ̀", "Dídáhùn ìbéèrè èyíkéyìí ní gbogbo ayé"], answer: 2, why: "Ìbéèrè kékeré tí wọ́n ń tún béèrè kò léwu púpọ̀, wọ́n sì ń fi àkókò pamọ́ jù lọ." },
            { objective: "O1", q: "Ṣọ́ọ̀bù ìgẹ̀rí rẹ ń gba ìbéèrè púpọ̀. Èwo ni o máa pa rẹ́ kúrò nínú àkọsílẹ̀ chatbot?", options: ["\"Ṣé èèrà ara tí ó wà lórí orí mi yìí léwu?\"", "\"Àkókò wo ni ẹ ṣí ní ọjọ́ Àbámẹ́ta?\"", "\"Báwo ni mo ṣe lè gba àkókò ìpàdé?\"", "\"Ibo ni mo ti lè gbé mọ́tò sí?\""], answer: 0, why: "Ìbéèrè ìlera nílò ìpinnu akọ́ṣẹ́mọṣẹ́, nítorí náà kì í ṣe iṣẹ́ chatbot." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ìtọ́sọ́nà chatbot náà",
          minutes: 5,
          goal: "Kọ ìtọ́sọ́nà tó yé tí ó sọ ipa chatbot, ohùn rẹ̀ àti ààlà rẹ̀.",
          text: [
            "Àwọn irinṣẹ́ chatbot tí kò nílò kóòdù jẹ́ kí o tẹ ìtọ́sọ́nà tí AI máa tẹ̀lé nínú gbogbo ìfọ̀rọ̀wérọ̀. Àpẹẹrẹ ni custom GPT nínú ChatGPT, Gem nínú Google Gemini àti agent nínú Microsoft Copilot Studio. Orúkọ àwọn ẹ̀yà, àwọn mẹ́nù àti ètò ìsanwó tí ó ní wọn máa ń yí padà lọ́pọ̀ ìgbà, nítorí náà ṣàyẹ̀wò ojú-ìwé ìrànlọ́wọ́ irinṣẹ́ náà fún ìgbésẹ̀ tuntun.",
            "Ìtọ́sọ́nà tó dára sọ nǹkan márùn-ún: ta ni chatbot náà (\"Ìwọ ni olùrànlọ́wọ́ ìdáhùn fún Sunrise Food Pantry\"), àwọn tí ó ń bá sọ̀rọ̀, ohun tí ó ń dáhùn, bí ó ṣe ń dún (ọ̀rẹ́, kúkúrú, ọ̀rọ̀ tó rọrùn), àti ohun tí kò gbọ́dọ̀ ṣe.",
            "Kọ ìtọ́sọ́nà ní gbólóhùn kúkúrú tí ó tààrà. Sọ ohun tí ó máa ṣe nígbà tí kò bá mọ̀ fún un: \"Tí ìdáhùn kò bá sí nínú fáìlì ìmọ̀, sọ pé o kò dá ọ lójú, kí o sì fún wọn ní nọ́mbà fóònù.\""
          ],
          steps: ["Ipa: \"Ìwọ ni olùrànlọ́wọ́ ìdáhùn fún [àjọ].\"", "Àwọn olùgbọ́: àwọn tí yóò béèrè ìbéèrè.", "Iṣẹ́: àwọn kókó ọ̀rọ̀ tí ó ń dáhùn.", "Ohùn: ọ̀rẹ́, kúkúrú, ọ̀rọ̀ tó rọrùn.", "Ààlà: ohun tí kò gbọ́dọ̀ ṣe, àti ohun tí ó máa sọ nígbà tí kò bá mọ̀."],
          words: [["Ìtọ́sọ́nà (instructions)", "àwọn ìlànà tí chatbot máa ń tẹ̀lé nínú gbogbo ìfọ̀rọ̀wérọ̀; wọ́n tún ń pè é ní system prompt."], ["Ohùn (tone)", "bí ọ̀rọ̀ tí a kọ ṣe ń dún: ní ìlànà, bí ọ̀rẹ́, tàbí kúkúrú."]],
          slides: [
            { title: "Irinṣẹ́ chatbot láìkọ kóòdù", bullets: ["Custom GPT, Gemini Gem, agent Copilot Studio", "Orúkọ àti ètò ìsanwó ń yí padà: ṣàyẹ̀wò ojú-ìwé ìrànlọ́wọ́"] },
            { title: "Apá márùn-ún ìtọ́sọ́nà", bullets: ["Ipa àti àwọn olùgbọ́", "Ohun tí ó ń dáhùn", "Ohùn", "Ohun tí kò gbọ́dọ̀ ṣe"] },
            { title: "Nígbà tí kò bá mọ̀", bullets: ["Sọ pé \"Kò dá mi lójú\"", "Fún wọn ní nọ́mbà fóònù tàbí ímeèlì ènìyàn"] }
          ],
          sources: [{ name: "Google Gemini Help: Gems", url: "https://support.google.com/gemini/answer/15146780" }],
          tryIt: "Kọ ìtọ́sọ́nà fún chatbot rẹ pẹ̀lú gbogbo apá márùn-ún, ní gbólóhùn mẹ́jọ tàbí kí ó dín.",
          youCanNow: "kọ ìtọ́sọ́nà chatbot tí ó sọ ipa rẹ̀, àwọn olùgbọ́ rẹ̀, iṣẹ́ rẹ̀, ohùn rẹ̀ àti ààlà rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Apá wo nínú ìtọ́sọ́nà ni \"ọ̀rẹ́, kúkúrú, ọ̀rọ̀ tó rọrùn\"?", options: ["Ipa", "Àwọn olùgbọ́", "Ààlà", "Ohùn"], answer: 3, why: "Ohùn ń ṣàpèjúwe bí chatbot ṣe ń dún." },
            { objective: "O2", q: "Ìtọ́sọ́nà rẹ kò sọ ohun tí chatbot máa ṣe nígbà tí kò bá mọ̀. Kí ni o máa fi kún un?", options: ["\"Máa fúnni ní ìdáhùn nígbà gbogbo, kódà tí ó bá jẹ́ àfojúdá.\"", "\"Tí ìdáhùn kò bá sí nínú fáìlì ìmọ̀, sọ pé kò dá ọ lójú, kí o sì fún wọn ní nọ́mbà fóònù.\"", "\"Yí ọ̀rọ̀ padà.\"", "\"Béèrè ọ̀rọ̀ aṣínà olùlò.\""], answer: 1, why: "Sísọ fún un pé kí ó gbà pé kò dá òun lójú, kí ó sì tọ́ka sí ènìyàn, ń dènà ìdáhùn àhùsọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fífún chatbot ní òtítọ́ rẹ: fáìlì ìmọ̀",
          minutes: 5,
          goal: "Ṣe fáìlì ìmọ̀ ojú-ìwé kan, kí o sì so ó mọ́ chatbot tí kò nílò kóòdù.",
          text: [
            "Àwọn irinṣẹ́ AI mọ ọ̀pọ̀ nǹkan ní gbogbogbò, ṣùgbọ́n wọn kò mọ nǹkankan nípa àkókò ìṣísílẹ̀ rẹ ní ọjọ́ Ìṣẹ́gun. Ọ̀pọ̀ irinṣẹ́ kíkọ́ chatbot láìkọ kóòdù jẹ́ kí o gbé fáìlì kan sókè (upload), nígbà púpọ̀ ní abala tí wọ́n ń pè ní Knowledge, tí chatbot náà ń lò láti dáhùn.",
            "Jẹ́ kí fáìlì náà rọrùn: àkọlé fún kókó ọ̀rọ̀ kọ̀ọ̀kan àti òtítọ́ kúkúrú tí ó rọrùn. Lo ọ̀nà ìbéèrè àti ìdáhùn fún ìbéèrè mẹ́wàá tó ga jù. Kọ déètì sí òkè kí o lè mọ ìgbà tí o máa ṣe àtúnṣe rẹ̀.",
            "Má ṣe fi ìsọfúnni àdáni sínú fáìlì náà láéláé: kò sí orúkọ oníbàárà, nọ́mbà fóònù, ọ̀rọ̀ aṣínà, ìsọfúnni olùfúnni-lẹ́bùn tàbí ìsọfúnni báńkì. Ohunkóhun tí ó wà nínú fáìlì náà lè farahàn nínú ìdáhùn."
          ],
          steps: ["Ṣí Google Doc tàbí ìwé Word kan.", "Kọ déètì àti orúkọ àjọ náà sí òkè.", "Kọ ìbéèrè tó ga jù kọ̀ọ̀kan, pẹ̀lú ìdáhùn rẹ̀ nísàlẹ̀ rẹ̀.", "Fi àwọn ìpìlẹ̀ kún un: àkókò ìṣísílẹ̀, àdírẹ́sì, ọ̀nà ìkànsí, iye owó tàbí iṣẹ́ ìsìn.", "Yọ ohunkóhun tí ó jẹ́ àdáni kúrò, fi pamọ́, kí o sì gbé e sókè ní abala ìmọ̀ irinṣẹ́ kíkọ́ chatbot náà."],
          words: [["Fáìlì ìmọ̀ (knowledge file)", "ìwé tí o gbé sókè kí chatbot lè dáhùn láti inú òtítọ́ rẹ."], ["Gbé sókè (upload)", "fi fáìlì ránṣẹ́ láti ẹ̀rọ rẹ sí ojú-òpó wẹ́ẹ̀bù tàbí app."]],
          slides: [
            { title: "AI kò mọ àwọn kúlẹ̀kúlẹ̀ rẹ", bullets: ["Àkókò ìṣísílẹ̀ rẹ, iye owó, àwọn òfin rẹ", "Fún un ní fáìlì ìmọ̀"] },
            { title: "Fáìlì ìmọ̀ tó dára", bullets: ["Déètì ní òkè", "Ìbéèrè àti ìdáhùn fún ìbéèrè tó ga jù kọ̀ọ̀kan", "Òtítọ́ kúkúrú tí ó rọrùn"] },
            { title: "Má ṣe fi wọ̀nyí sí i láéláé", bullets: ["Orúkọ àti nọ́mbà oníbàárà tàbí olùfúnni-lẹ́bùn", "Ọ̀rọ̀ aṣínà tàbí ìsọfúnni báńkì", "Ohunkóhun tí o kò ní fi sí gbangba"] }
          ],
          tryIt: "Kọ fáìlì ìmọ̀ ojú-ìwé kan fún chatbot rẹ pẹ̀lú déètì àti ìdáhùn sí ìbéèrè mẹ́wàá tó ga jù. Lẹ́yìn náà ṣí irinṣẹ́ kíkọ́ chatbot láìkọ kóòdù tí o lè lò, lẹ̀ ìtọ́sọ́nà rẹ mọ́ ọn, gbé fáìlì náà sókè, kí o sì fi pamọ́.",
          youCanNow: "ṣe fáìlì ìmọ̀ tí kò léwu, kí o sì so ó pọ̀ mọ́ ìtọ́sọ́nà nínú irinṣẹ́ kíkọ́ chatbot láìkọ kóòdù.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí a fi ń kọ déètì sí òkè fáìlì ìmọ̀?", options: ["Láti jẹ́ kí fáìlì náà gùn sí i", "Kí o lè mọ ìgbà tí o máa ṣe àtúnṣe rẹ̀", "Nítorí pé AI nílò rẹ̀ láti bẹ̀rẹ̀", "Láti fi àwọn òtítọ́ àtijọ́ pamọ́"], answer: 1, why: "Déètì ń fi hàn bí àwọn òtítọ́ náà ṣe jẹ́ tuntun tó àti ìgbà tí ó yẹ kí a tún wọn ṣe." },
            { objective: "O3", q: "O ń ṣe fáìlì ìmọ̀ fún ṣọ́ọ̀ṣì kan. Èwo ni o máa fi sílẹ̀?", options: ["Àkókò ìsìn", "Àdírẹ́sì", "Bí a ṣe ń darapọ̀ mọ́ ẹgbẹ́ kékeré", "Nọ́mbà fóònù àwọn ọmọ ìjọ"], answer: 3, why: "Ìsọfúnni àdáni bí nọ́mbà fóònù lè farahàn nínú ìdáhùn, nítorí náà kò gbọ́dọ̀ wọ inú fáìlì náà láéláé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣètò àti kíkọ́ chatbot náà",
        questions: [
          { objective: "O1", q: "Èwo ni iṣẹ́ àkọ́kọ́ tó dára jù fún chatbot àjọ kékeré?", options: ["Fífúnni ní ìmọ̀ràn ìlera", "Fífọwọ́ sí ìyáwó", "Dídáhùn ìbéèrè nípa àkókò ìṣísílẹ̀, ibi tí ẹ wà àti ìforúkọsílẹ̀", "Bíbójútó gbogbo ẹ̀sùn fúnra rẹ̀"], answer: 2, why: "Ìbéèrè kékeré tí wọ́n ń tún béèrè, tí kò sì léwu, ni iṣẹ́ àkọ́kọ́ tó dára jù." },
          { objective: "O1", q: "Níbo ni o ti yẹ kí o rí àwọn ìbéèrè tí chatbot rẹ gbọ́dọ̀ dáhùn?", options: ["Ímeèlì, ìpè, ọ̀rọ̀ ìránṣẹ́ àti ọ̀rọ̀ tí àwọn ènìyàn ti fi ránṣẹ́", "Hùmọ̀ wọn", "Da àkọsílẹ̀ ilé-iṣẹ́ míì kọ", "Ní kí AI ṣe àfojúdá"], answer: 0, why: "Ìbéèrè gidi láti ọ̀dọ̀ ènìyàn gidi ló ń fi iṣẹ́ chatbot hàn." },
          { objective: "O2", q: "Kí ni ìtọ́sọ́nà gbọ́dọ̀ sọ pé kí chatbot ṣe nígbà tí kò bá mọ ìdáhùn?", options: ["Hùmọ̀ nǹkan tí ó dún bí ẹni pé ó tọ̀nà", "Parí ìfọ̀rọ̀wérọ̀ láìsọ nǹkankan", "Béèrè ọ̀rọ̀ aṣínà oníbàárà", "Sọ pé kò dá òun lójú, kí ó sì fúnni ní ọ̀nà láti kàn sí ènìyàn"], answer: 3, why: "Gbígbà pé òun kò mọ̀, àti títọ́ka sí ènìyàn, ń dènà ìdáhùn tí kò tọ́." },
          { objective: "O3", q: "Kí ló dé tí a fi ń gbé fáìlì ìmọ̀ sókè?", options: ["Láti jẹ́ kí chatbot lọ́ra", "Kí chatbot lè dáhùn láti inú òtítọ́ tìrẹ", "Láti tọ́jú ọ̀rọ̀ aṣínà oníbàárà", "A kì í nílò rẹ̀ rárá"], answer: 1, why: "AI kò mọ àwọn kúlẹ̀kúlẹ̀ rẹ títí tí o fi fún un." },
          { objective: "O3", q: "Èwo ni ó yẹ kí ó wà nínú fáìlì ìmọ̀ chatbot?", options: ["Nọ́mbà fóònù olùfúnni-lẹ́bùn", "Àkókò ìṣísílẹ̀ rẹ", "Ọ̀rọ̀ aṣínà òṣìṣẹ́", "Nọ́mbà àkáǹtì báńkì"], answer: 1, why: "Òtítọ́ tí gbogbo ènìyàn lè mọ̀ nìkan ló yẹ kí ó wà nínú fáìlì náà." }
        ]
      }
    },
    {
      name: "Orí 2: Dídánwò, ṣíṣí sílẹ̀ àti mímú un dára sí i",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fífi òfin ààbò kún un kí chatbot lè wà láìléwu",
          minutes: 5,
          goal: "Kọ òfin ààbò tí ó ń jẹ́ kí chatbot dúró lórí kókó ọ̀rọ̀, kí ó jẹ́ olóòótọ́, kí ó sì wà láìléwu.",
          text: [
            "Òfin ààbò (guardrail) ni àwọn òfin tí ó ń dá chatbot dúró kí ó má lọ síbi tí kò yẹ. Fi wọ́n kún ìtọ́sọ́nà gẹ́gẹ́ bí ìlà \"má ṣe\" àti \"nígbà gbogbo\" tó yé.",
            "Òfin ààbò tí ó wúlò: dúró lórí àwọn kókó ọ̀rọ̀ rẹ, kí o sì fi ọ̀wọ̀ kọ àwọn míì; má ṣe béèrè tàbí tọ́jú ìsọfúnni àdáni bí nọ́mbà káàdì tàbí nọ́mbà Social Security láéláé; má ṣe fúnni ní ìmọ̀ràn ìlera, òfin tàbí owó láéláé; sọ fún àwọn ènìyàn pé AI ni, kì í ṣe ènìyàn; kí o sì rán ọ̀ràn pàjáwìrì sí 911 tàbí nọ́mbà ìrànlọ́wọ́ tí ó tọ́.",
            "Jíjẹ́ olóòótọ́ pé AI ni ń mú ìgbẹ́kẹ̀lé wá. Bẹ̀rẹ̀ ìfọ̀rọ̀wérọ̀ pẹ̀lú àkíyèsí kúkúrú: \"Ẹ n lẹ́ o, olùrànlọ́wọ́ AI ni mí fún Sunrise Food Pantry. Mo lè dáhùn ìbéèrè nípa àkókò ìṣísílẹ̀ àti ohun tí ẹ máa mú wá.\""
          ],
          steps: ["Fi ìlà kan kún un: dúró lórí [àwọn kókó ọ̀rọ̀ rẹ]; fi ọ̀wọ̀ kọ àwọn míì.", "Fi kún un: má ṣe béèrè nọ́mbà káàdì, báńkì, ìdánimọ̀ tàbí Social Security láéláé.", "Fi kún un: kò sí ìmọ̀ràn ìlera, òfin tàbí owó; tọ́ka sí akọ́ṣẹ́mọṣẹ́.", "Fi kún un: sọ pé olùrànlọ́wọ́ AI ni ọ́.", "Fi kún un: fún ọ̀ràn pàjáwìrì, sọ fún àwọn ènìyàn pé kí wọ́n pe 911."],
          words: [["Òfin ààbò (guardrail)", "òfin tí ó ń jẹ́ kí irinṣẹ́ AI dúró lórí kókó ọ̀rọ̀, kí ó sì wà láìléwu."], ["Kọ̀ (decline)", "fi ọ̀wọ̀ sọ pé rárá."]],
          slides: [
            { title: "Òfin ààbò ń jẹ́ kí ó wà láìléwu", bullets: ["Ìlà \"má ṣe\" àti \"nígbà gbogbo\" nínú ìtọ́sọ́nà"] },
            { title: "Òfin ààbò tí ó gbọ́dọ̀ wà", bullets: ["Dúró lórí kókó ọ̀rọ̀; kọ àwọn yòókù", "Má ṣe béèrè nọ́mbà àdáni láéláé", "Kò sí ìmọ̀ràn ìlera, òfin tàbí owó"] },
            { title: "Jẹ́ olóòótọ́", bullets: ["Sọ pé olùrànlọ́wọ́ AI ni", "Rán ọ̀ràn pàjáwìrì sí 911"] }
          ],
          tryIt: "Fi ó kéré tán òfin ààbò márùn-ún kún ìtọ́sọ́nà chatbot rẹ, pẹ̀lú ìkíni kúkúrú tí ó sọ pé olùrànlọ́wọ́ AI ni, àti ohun tí ó lè ràn wọ́n lọ́wọ́ pẹ̀lú.",
          youCanNow: "kọ òfin ààbò tí ó ń jẹ́ kí chatbot dúró lórí kókó ọ̀rọ̀, kí ó jẹ́ olóòótọ́, kí ó sì wà láìléwu.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ìdí òfin ààbò nínú ìtọ́sọ́nà chatbot?", options: ["Láti jẹ́ kí chatbot dúró lórí kókó ọ̀rọ̀, kí ó jẹ́ olóòótọ́, kí ó sì wà láìléwu", "Láti jẹ́ kí ìdáhùn gùn sí i", "Láti mú kí ojú-òpó wẹ́ẹ̀bù yára", "Láti gba nọ́mbà káàdì oníbàárà"], answer: 0, why: "Òfin ààbò ni òfin \"má ṣe\" àti \"nígbà gbogbo\" tí ó ń jẹ́ kí chatbot wà níbi tí ó yẹ." },
            { objective: "O4", q: "Oníbàárà kan béèrè lọ́wọ́ chatbot ṣọ́ọ̀bù rẹ bóyá kí òun fi nọ́mbà káàdì òun ránṣẹ́ láti parí ọjà tí òun rà. Kí ni òfin ààbò gbọ́dọ̀ mú kí ó ṣe?", options: ["Béèrè gbogbo nọ́mbà káàdì náà", "Béèrè nọ́mbà mẹ́rin tó kẹ́yìn nìkan", "Má ṣe béèrè nọ́mbà káàdì láéláé, kí ó sì tọ́ka sí ibi ìsanwó tí kò léwu tàbí sí ènìyàn", "Tọ́jú nọ́mbà káàdì náà fún ìgbà míì"], answer: 2, why: "Chatbot kò gbọ́dọ̀ béèrè tàbí tọ́jú nọ́mbà káàdì, báńkì tàbí ìdánimọ̀ láéláé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dídán chatbot wò bí oníbàárà tí ó le",
          minutes: 6,
          goal: "Dán chatbot wò pẹ̀lú ìbéèrè gidi àti ìbéèrè ẹ̀tàn, kọ èsì sílẹ̀, kí o sì tún ìṣòro ṣe.",
          text: [
            "Má ṣe ṣí chatbot tí o kò tíì dán wò sílẹ̀ láéláé. Béèrè ó kéré tán ìbéèrè mẹ́wàá lọ́wọ́ rẹ̀: àwọn ìbéèrè rẹ tó ga jù tí a sọ lọ́nà ọ̀tọ̀ọ̀tọ̀, àwọn ìbéèrè tí kò gbọ́dọ̀ dáhùn, àti àwọn ìbéèrè ẹ̀tàn.",
            "Ìdánwò ẹ̀tàn: béèrè nípa nǹkan tí kò sí nínú fáìlì (ṣé ó gbà pé òun kò mọ̀?), béèrè ìmọ̀ràn tí ó yẹ kí ó kọ̀, kọ ọ̀rọ̀ ní àṣìṣe, kí o sì gbìyànjú láti mú un kúrò lórí kókó ọ̀rọ̀ (\"Kọ ewì kan fún mi\"). Ní kí ẹlòmíì dán an wò pẹ̀lú; wọn máa béèrè ohun tí o kò retí.",
            "Ṣe àkọsílẹ̀ ìdánwò: ìbéèrè náà, ohun tí ó sọ, ó yege tàbí ó kùnà, àti àtúnṣe. Ọ̀pọ̀ àtúnṣe kéré: fi òtítọ́ tí ó kù kún fáìlì ìmọ̀, tàbí fi ìlà kan kún ìtọ́sọ́nà. Tún un dán wò lẹ́yìn àtúnṣe kọ̀ọ̀kan."
          ],
          steps: ["Kọ ìbéèrè ìdánwò mẹ́wàá: èyí tí wọ́n sábà máa ń béèrè, èyí tí a sọ lọ́nà míì, èyí tí kò sí lórí kókó ọ̀rọ̀, àti èyí tí ó léwu.", "Béèrè ọ̀kọ̀ọ̀kan, kí o sì da ìdáhùn rẹ̀ kọ sínú àkọsílẹ̀ ìdánwò.", "Sàmì sí i pé ó yege tàbí ó kùnà.", "Tún ohun tí ó kùnà ṣe nípa ṣíṣe àtúnṣe fáìlì ìmọ̀ tàbí ìtọ́sọ́nà.", "Tún àwọn ìbéèrè tí ó kùnà dán wò."],
          words: [["Àkọsílẹ̀ ìdánwò (test log)", "àkọsílẹ̀ ìdánwò kọ̀ọ̀kan, èsì rẹ̀ àti àtúnṣe."], ["Edge case", "ìbéèrè àjèjì tí ó lè da ètò rú."]],
          slides: [
            { title: "Dán an wò kí o tó ṣí i sílẹ̀", bullets: ["Ó kéré tán ìbéèrè mẹ́wàá", "Èyí tí a mọ̀, èyí tí a yí padà, èyí tí kò sí lórí kókó, èyí tí ó léwu"] },
            { title: "Ìdánwò ẹ̀tàn", bullets: ["Nǹkan tí kò sí nínú fáìlì", "Ìmọ̀ràn tí ó yẹ kí ó kọ̀", "Àṣìṣe kíkọ ọ̀rọ̀ àti ìbéèrè tí kò sí lórí kókó"] },
            { title: "Kọ ọ́ sílẹ̀ kí o sì tún un ṣe", bullets: ["Ìbéèrè, ìdáhùn, ó yege tàbí ó kùnà, àtúnṣe", "Ṣe àtúnṣe fáìlì tàbí ìtọ́sọ́nà", "Tún un dán wò"] }
          ],
          tryIt: "Dán chatbot rẹ wò pẹ̀lú ìbéèrè mẹ́wàá, tí ó kéré tán mẹ́ta nínú wọn jẹ́ ìbéèrè ẹ̀tàn. Kọ wọ́n sínú àkọsílẹ̀ ìdánwò, tún gbogbo ohun tí ó kùnà ṣe, kí o sì tún un dán wò.",
          youCanNow: "dán chatbot wò pẹ̀lú ìbéèrè tí a mọ̀ àti ìbéèrè ẹ̀tàn, ṣe àkọsílẹ̀ ìdánwò, kí o sì tún ohun tí ó kùnà ṣe.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ó máa ń wà nínú àkọsílẹ̀ ìdánwò chatbot?", options: ["Àwọn ìbéèrè tí ó dáhùn dáadáa nìkan", "Nọ́mbà fóònù oníbàárà", "Ìtọ́sọ́nà chatbot náà", "Ìbéèrè náà, ìdáhùn, ó yege tàbí ó kùnà, àti àtúnṣe"], answer: 3, why: "Àkọsílẹ̀ ìdánwò ń kọ ìbéèrè kọ̀ọ̀kan, ìdáhùn, ó yege tàbí ó kùnà, àti ohun tí o tún ṣe sílẹ̀." },
            { objective: "O5", q: "Nígbà ìdánwò, chatbot hùmọ̀ iye owó kan tí kò sí nínú fáìlì rẹ. Kí ni o kọ́kọ́ ṣe?", options: ["Fi iye owó náà kún fáìlì ìmọ̀, tàbí ìlà kan tí ó sọ fún un pé kí ó gbà pé òun kò mọ̀, lẹ́yìn náà tún un dán wò", "Ṣí i sílẹ̀ bẹ́ẹ̀", "Pa chatbot náà rẹ́", "Fojú fò ó; àwọn oníbàárà kò ní béèrè"], answer: 0, why: "Ọ̀pọ̀ àtúnṣe jẹ́ òtítọ́ tí ó kù tàbí ìlà ìtọ́sọ́nà kan, pẹ̀lú ìdánwò tuntun lẹ́yìn rẹ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣí i sílẹ̀, pípín in, àti mímú un wà ní tuntun",
          minutes: 5,
          goal: "Pín chatbot pẹ̀lú àwọn olùlò gidi, gba èsì wọn, kí o sì ṣètò ìgbà tí o máa ń ṣe àtúnṣe.",
          text: [
            "Ọ̀pọ̀ irinṣẹ́ kíkọ́ chatbot jẹ́ kí o pín chatbot pẹ̀lú ìjápọ̀ (link), àwọn kan sì jẹ́ kí o fi sórí ojú-òpó wẹ́ẹ̀bù. Bẹ̀rẹ̀ kékeré: kọ́kọ́ pín in pẹ̀lú àwọn oníbàárà, ọmọ ẹgbẹ́ tàbí olùyọ̀ǹda díẹ̀, kí o sì sọ fún wọn pé ó ṣẹ̀ṣẹ̀ dé.",
            "Béèrè èsì wọn: \"Ṣé ó dáhùn ìbéèrè rẹ? Kí ni ó ṣe àṣìṣe nípa rẹ̀?\" Ka àwọn ìfọ̀rọ̀wérọ̀ gidi tí irinṣẹ́ rẹ bá ń fi wọ́n hàn, kí o sì wá àwọn ìbéèrè tí kò lè dáhùn.",
            "Ṣètò àṣà kan. Ní oṣù kọ̀ọ̀kan, tàbí nígbàkígbà tí àkókò ìṣísílẹ̀, iye owó tàbí àwọn òfin bá yí padà, ṣe àtúnṣe fáìlì ìmọ̀ àti déètì rẹ̀. Chatbot tí kò bá ìgbà mu burú ju kí kò sí rárá. Jẹ́ kí ènìyàn wà tí wọ́n lè kàn sí fún ohunkóhun tí chatbot kò lè ṣe."
          ],
          steps: ["Pín ìjápọ̀ chatbot náà pẹ̀lú ènìyàn mẹ́ta sí márùn-ún.", "Béèrè ìbéèrè èsì méjì lọ́wọ́ wọn.", "Fi àwọn ìdáhùn tí ó kù kún fáìlì ìmọ̀.", "Fi ìránnilétí àtúnṣe oṣooṣù sórí kàlẹ́ńdà rẹ.", "Rí i dájú pé àwọn ènìyàn lè kàn sí ènìyàn nígbà gbogbo."],
          words: [["Ṣí sílẹ̀ (launch)", "mú nǹkan wà ní àrọ́wọ́tó fún àwọn ènìyàn láti lò."], ["Èsì (feedback)", "ohun tí àwọn olùlò sọ fún ọ nípa ohun tí ó ṣiṣẹ́ àti èyí tí kò ṣiṣẹ́."]],
          slides: [
            { title: "Ṣí i sílẹ̀ ní kékeré", bullets: ["Pín ìjápọ̀ náà pẹ̀lú ènìyàn díẹ̀", "Sọ fún wọn pé ó ṣẹ̀ṣẹ̀ dé"] },
            { title: "Béèrè èsì", bullets: ["\"Ṣé ó dáhùn ìbéèrè rẹ?\"", "\"Kí ni ó ṣe àṣìṣe nípa rẹ̀?\""] },
            { title: "Jẹ́ kí ó bá ìgbà mu", bullets: ["Ṣe àtúnṣe ní oṣooṣù tàbí nígbà tí òtítọ́ bá yí padà", "Yí déètì fáìlì náà padà", "Ènìyàn wà tí wọ́n lè kàn sí nígbà gbogbo"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: pín chatbot tí o ti dán wò pẹ̀lú ó kéré tán ẹnì kan. Kọ èsì wọn sílẹ̀, ṣe àtúnṣe kan, kí o sì ṣètò ìránnilétí oṣooṣù láti ṣe àtúnṣe fáìlì ìmọ̀.",
          youCanNow: "kọ́ chatbot AI láìkọ kóòdù, dán an wò, ṣí i sílẹ̀, kí o sì máa tọ́jú rẹ̀ fún àjọ gidi.",
          quickCheck: [
            { objective: "O6", q: "Kí ló dé tí a fi ń kọ́kọ́ pín chatbot tuntun pẹ̀lú ènìyàn díẹ̀ nìkan?", options: ["Láti fi pamọ́ ní àṣírí", "Nítorí pé ìjápọ̀ ń ṣiṣẹ́ fún ènìyàn márùn-ún nìkan", "Láti rí ìṣòro àti gba èsì kí gbogbo ènìyàn tó lò ó", "Kí o má ṣe nílò láti ṣe àtúnṣe rẹ̀ láéláé"], answer: 2, why: "Bíbẹ̀rẹ̀ ní kékeré jẹ́ kí o rí ìṣòro, kí o sì gba èsì láìléwu." },
            { objective: "O6", q: "Ilé búrẹ́dì rẹ máa yí àkókò ìṣísílẹ̀ padà ní ọ̀sẹ̀ tó ń bọ̀. Kí ni o máa ṣe pẹ̀lú chatbot náà?", options: ["Kò sí nǹkankan; ó máa kọ́ ọ fúnra rẹ̀", "Ṣe àtúnṣe fáìlì ìmọ̀ àti déètì rẹ̀", "Pa chatbot náà títí láé", "Sọ fún àwọn oníbàárà pé kí wọ́n má ka á sí"], answer: 1, why: "Ṣe àtúnṣe fáìlì àti déètì rẹ̀ nígbàkígbà tí òtítọ́ bá yí padà; chatbot tí kò bá ìgbà mu burú ju kí kò sí rárá." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídánwò, ṣíṣí sílẹ̀ àti mímú un dára sí i",
        questions: [
          { objective: "O4", q: "Kí ni òfin ààbò (guardrail)?", options: ["Ọgbà tí ó yí ọ́fíìsì ká", "Àfikún tí a ń sanwó fún", "Irú fáìlì ìmọ̀ kan", "Òfin tí ó ń jẹ́ kí irinṣẹ́ AI dúró lórí kókó ọ̀rọ̀, kí ó sì wà láìléwu"], answer: 3, why: "Òfin ààbò ni àwọn òfin tí ó wà nínú ìtọ́sọ́nà." },
          { objective: "O4", q: "Olùlò kan béèrè ìmọ̀ràn ìlera lọ́wọ́ chatbot ilé búrẹ́dì rẹ nípa ara tí ó ṣe àìlera sí oúnjẹ (allergy). Kí ni ó yẹ kí ó ṣe?", options: ["Kọ̀, kí ó sì tọ́ka wọn sí dókítà, tàbí 911 fún ọ̀ràn pàjáwìrì", "Sọ àìsàn tí wọ́n ní", "Béèrè nọ́mbà ìbánigbófò wọn", "Yí ọ̀rọ̀ padà sí kéèkì"], answer: 0, why: "Chatbot kò gbọ́dọ̀ fúnni ní ìmọ̀ràn ìlera, ó sì gbọ́dọ̀ rán ọ̀ràn pàjáwìrì sí 911." },
          { objective: "O5", q: "Kí ló dé tí a fi ń béèrè ìbéèrè tí KÒ sí nínú fáìlì ìmọ̀ nígbà ìdánwò?", options: ["Láti mú un lọ́ra", "Láti pa fáìlì náà rẹ́", "Láti ṣàyẹ̀wò pé ó gbà pé òun kò mọ̀ dípò kí ó hùmọ̀ nǹkan", "Kò sí ìdí kankan"], answer: 2, why: "Chatbot tó dára máa ń sọ pé kò dá òun lójú dípò kí ó hùmọ̀ ìdáhùn." },
          { objective: "O6", q: "Chatbot ń fúnni ní àkókò ìṣísílẹ̀ oṣù tó kọjá. Kí ni àtúnṣe rẹ̀?", options: ["Ti iṣẹ́ òwò náà pa", "Sọ fún àwọn olùlò pé kí wọ́n ṣe àfojúdá", "Fi òfin ààbò kún un nìkan", "Ṣe àtúnṣe fáìlì ìmọ̀ àti déètì rẹ̀"], answer: 3, why: "Òtítọ́ tí kò bá ìgbà mu ń wá láti inú fáìlì tí kò bá ìgbà mu." },
          { objective: "O6", q: "Kí ni ọ̀nà tó dára jù láti ṣí i sílẹ̀?", options: ["Fi í sí ibi gbogbo láìdán an wò", "Fi í pamọ́", "Kọ́kọ́ pín in pẹ̀lú ènìyàn díẹ̀, kí o sì béèrè èsì wọn", "Yọ ọ̀nà ìkànsí ènìyàn kúrò"], answer: 2, why: "Ṣíṣí sílẹ̀ ní kékeré ń jẹ́ kí a rí ìṣòro kí ọ̀pọ̀ ènìyàn tó rí wọn." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Kíkọ́ Chatbot AI (Kò Sí Ìdí fún Kíkọ Kóòdù)",
    questions: [
      { objective: "O1", q: "Ọ̀nà tó dára jù láti ṣàpèjúwe chatbot AI fún àjọ kan ni:", options: ["Olùgbàlejò tí ó jẹ́ ènìyàn", "Olùrànlọ́wọ́ AI tí a ṣètò fún iṣẹ́ kan ṣoṣo", "Iṣẹ́ ìgbàlejò ojú-òpó wẹ́ẹ̀bù", "Ètò ìsanwó"], answer: 1, why: "Ó jẹ́ olùrànlọ́wọ́ tí ó dojú kọ iṣẹ́ kan." },
      { objective: "O1", q: "Iṣẹ́ àkọ́kọ́ chatbot wo ni kò léwu jù?", options: ["Àkókò ìṣísílẹ̀ ilé ìpèsè oúnjẹ àti ohun tí a máa mú wá", "Ìmọ̀ràn òfin", "Sísọ àìsàn tí ẹnì kan ní", "Ìmọ̀ràn ìdókòwò"], answer: 0, why: "Àkókò ìṣísílẹ̀ àti ìtọ́sọ́nà tí ó rọrùn jẹ́ òtítọ́ tí kò léwu." },
      { objective: "O1", q: "Níbo ni o ti máa rí ìbéèrè tó ga jù fún chatbot?", options: ["Àkọsílẹ̀ èyíkéyìí lórí íńtánẹ́ẹ̀tì", "Àfojúdá AI", "Àwọn ìbéèrè tí àwọn ènìyàn ti ń béèrè lọ́wọ́ rẹ", "Ìpolówó ọjà olùdíje"], answer: 2, why: "Ìbéèrè gidi ń fi iṣẹ́ gidi hàn." },
      { objective: "O2", q: "Èwo ni ọ̀nà láti kọ́ chatbot láìkọ kóòdù?", options: ["Custom GPT, Gemini Gem tàbí agent Copilot Studio", "Ṣíṣe chip kọ̀mpútà", "Kíkọ́ server láti inú àwọn ẹ̀yà rẹ̀", "Fífi lẹ́tà ránṣẹ́ nípasẹ̀ ilé ifiwéránṣẹ́"], answer: 0, why: "Àwọn irinṣẹ́ wọ̀nyí jẹ́ kí o kọ́ ọ pẹ̀lú ìtọ́sọ́nà àti fáìlì, láìsí kóòdù." },
      { objective: "O2", q: "Àwọn mẹ́nù àti ẹ̀yà ètò ìsanwó nínú irinṣẹ́ chatbot máa ń yí padà. Níbo ni o ti máa jẹ́rìí sí ìgbésẹ̀ tuntun?", options: ["Àhesọ ọ̀rọ̀", "Fídíò àtijọ́ nìkan", "Àfojúdá", "Ojú-ìwé ìrànlọ́wọ́ gidi ti irinṣẹ́ náà"], answer: 3, why: "Ojú-ìwé ìrànlọ́wọ́ ti irinṣẹ́ náà ní àwọn ìgbésẹ̀ tuntun." },
      { objective: "O2", q: "Ìlà wo ni ó yẹ kí ó wà nínú ìtọ́sọ́nà chatbot?", options: ["\"Èyí ni ọ̀rọ̀ aṣínà alákòóso.\"", "\"Ìwọ ni olùrànlọ́wọ́ ìdáhùn fún Sunrise Food Pantry.\"", "\"Má ṣe dáhùn ìbéèrè kankan.\"", "\"Máa ṣe àfojúdá nígbà gbogbo tí kò bá dá ọ lójú.\""], answer: 1, why: "Sísọ ipa rẹ̀ jẹ́ apá pàtàkì nínú ìtọ́sọ́nà." },
      { objective: "O2", q: "Ọ̀nà kíkọ tí ó jẹ́ ọ̀rẹ́, kúkúrú, pẹ̀lú ọ̀rọ̀ tó rọrùn ni a ń pè ní ____ chatbot:", options: ["Gbígbé sókè", "Ohùn", "Òfin ààbò", "Ṣíṣí sílẹ̀"], answer: 1, why: "Ohùn ni bí ọ̀rọ̀ tí a kọ ṣe ń dún." },
      { objective: "O3", q: "Kí ni ó yẹ kí ó wà ní òkè fáìlì ìmọ̀?", options: ["Nọ́mbà fóònù oníbàárà", "Ọ̀rọ̀ aṣínà", "Kò sí nǹkankan", "Déètì àti orúkọ àjọ náà"], answer: 3, why: "Déètì ń sọ fún ọ ìgbà tí ó nílò àtúnṣe." },
      { objective: "O3", q: "Kí ló dé tí a fi ń pa ìsọfúnni àdáni mọ́ kúrò nínú fáìlì ìmọ̀?", options: ["Ohunkóhun tí ó wà nínú rẹ̀ lè farahàn nínú ìdáhùn", "Ó ń jẹ́ kí fáìlì náà kúrú jù", "AI kò lè ka orúkọ", "Kò burú láti fi sí i"], answer: 0, why: "Chatbot lè tún ohun tí ó wà nínú fáìlì sọ." },
      { objective: "O3", q: "Ọ̀nà tó dára láti ṣètò fáìlì ìmọ̀ ni:", options: ["Ìpínrọ̀ gígùn kan láìsí àkọlé", "Fọ́tò pátákó ìkọ̀wé", "Ìbéèrè tó ga jù kọ̀ọ̀kan pẹ̀lú ìdáhùn rẹ̀ nísàlẹ̀ rẹ̀", "Àkọsílẹ̀ ọ̀rọ̀ aṣínà"], answer: 2, why: "Ọ̀nà ìbéèrè àti ìdáhùn rọrùn fún AI láti lò." },
      { objective: "O4", q: "Èwo ni òfin ààbò tí ó gbọ́dọ̀ wà?", options: ["Máa kọ ewì nígbà gbogbo", "Dáhùn gbogbo kókó ọ̀rọ̀ ní ayé", "Ṣe bí ẹni pé ènìyàn ni ọ́", "Má ṣe béèrè nọ́mbà káàdì, báńkì tàbí Social Security láéláé"], answer: 3, why: "Chatbot kò gbọ́dọ̀ gba nọ́mbà àdáni láéláé." },
      { objective: "O4", q: "Ṣé ó yẹ kí chatbot sọ pé AI ni òun?", options: ["Rárá, ṣe bí ẹni pé ènìyàn ni", "Tí wọ́n bá béèrè lẹ́ẹ̀mẹ́ta nìkan", "Bẹ́ẹ̀ ni, òtítọ́ ń mú ìgbẹ́kẹ̀lé wá", "Ní òpin ọ̀sẹ̀ nìkan"], answer: 2, why: "Sísọ ní kedere pé AI ni jẹ́ òtítọ́, ó sì ń mú ìgbẹ́kẹ̀lé wá." },
      { objective: "O4", q: "Ẹnì kan sọ fún chatbot pé òun wà nínú ọ̀ràn pàjáwìrì. Ó yẹ kí ó:", options: ["Béèrè àdírẹ́sì àti nọ́mbà káàdì wọn", "Sọ fún wọn pé kí wọ́n pe 911", "Fojú fò ó", "Yí ọ̀rọ̀ padà"], answer: 1, why: "Ọ̀ràn pàjáwìrì máa ń lọ sí 911." },
      { objective: "O5", q: "Ó kéré tán, ìbéèrè ìdánwò mélòó ni ẹ̀kọ́ yìí dábàá?", options: ["Mẹ́wàá", "Ọ̀kan", "Òdo", "3,000"], answer: 0, why: "Ó kéré tán ìbéèrè mẹ́wàá ń bo àwọn ọ̀ràn tí a mọ̀ àti èyí tí ó jẹ́ ẹ̀tàn." },
      { objective: "O5", q: "\"Kọ ewì kan fún mi\" tí a fi ránṣẹ́ sí chatbot ilé ìpèsè oúnjẹ ń dán an wò bóyá ó:", options: ["Mọ àkókò ìṣísílẹ̀", "Lè gbé fáìlì sókè", "Dúró lórí kókó ọ̀rọ̀", "Ní ọ̀rọ̀ aṣínà"], answer: 2, why: "Ìbéèrè tí kò sí lórí kókó ọ̀rọ̀ ni; chatbot gbọ́dọ̀ fi ọ̀wọ̀ kọ̀ ọ́." },
      { objective: "O5", q: "Àkọsílẹ̀ ìdánwò máa ń kọ:", options: ["Ìbéèrè náà, ìdáhùn, ó yege tàbí ó kùnà, àti àtúnṣe", "Ìdáhùn tó dára nìkan", "Ọ̀rọ̀ aṣínà oníbàárà", "Ojú ọjọ́"], answer: 0, why: "Ó ń tọpinpin gbogbo ìdánwò àti ohun tí o yí padà." },
      { objective: "O5", q: "Lẹ́yìn tí o bá ti tún ìdánwò tí ó kùnà ṣe, ó yẹ kí o:", options: ["Pa àkọsílẹ̀ ìdánwò rẹ́", "Ṣí i sílẹ̀ láìṣàyẹ̀wò", "Yọ gbogbo òfin ààbò kúrò", "Tún ìbéèrè yẹn dán wò"], answer: 3, why: "Títún un dán wò ń fi hàn pé àtúnṣe náà ṣiṣẹ́." },
      { objective: "O5", q: "Kí ló dé tí ó fi yẹ kí ẹlòmíì dán chatbot wò?", options: ["Òfin ló ní kí a ṣe bẹ́ẹ̀", "Wọ́n máa béèrè ohun tí o kò retí", "Láti mú un lọ́ra", "Kí ìwọ má baà ṣe é"], answer: 1, why: "Ojú tuntun máa ń rí edge case tuntun." },
      { objective: "O6", q: "Ìgbà mélòó ni ó yẹ kí o ṣe àtúnṣe fáìlì ìmọ̀?", options: ["Rárá, láéláé", "Ní oṣooṣù, tàbí nígbàkígbà tí òtítọ́ bá yí padà", "Lẹ́ẹ̀kan ní ọdún mẹ́wàá", "Nígbà tí AI bá béèrè nìkan"], answer: 1, why: "Òtítọ́ tí kò bá ìgbà mu ń fa ìdáhùn tí kò tọ́." },
      { objective: "O6", q: "Kódà pẹ̀lú chatbot, àwọn ènìyàn gbọ́dọ̀ lè máa:", options: ["Rí ọ̀rọ̀ aṣínà òṣìṣẹ́", "Ṣe àtúnṣe ìtọ́sọ́nà", "Gba ìmọ̀ràn òfin lọ́wọ́ rẹ̀", "Kàn sí ènìyàn"], answer: 3, why: "Ènìyàn tí ó wà lẹ́yìn ń bójútó ohun tí chatbot kò lè ṣe." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      1,
      2,
      5,
      8,
      9,
      10,
      12,
      14,
      15,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Iṣẹ́ tó yé",
        objective: "O1",
        notYet: "Kò sí gbólóhùn iṣẹ́, tàbí iṣẹ́ náà ní ìmọ̀ràn tí ó léwu nínú.",
        meets: "Iṣẹ́ nínú gbólóhùn kan fún àwọn ìbéèrè kékeré tí kò léwu.",
        exceeds: "Ìbéèrè mẹ́wàá tí ó ń dáhùn wá láti inú ọ̀rọ̀ ìránṣẹ́ gidi tí àwọn ènìyàn fi ránṣẹ́."
      },
      {
        name: "Ìtọ́sọ́nà àti òfin ààbò",
        objective: "O4",
        notYet: "Ìtọ́sọ́nà kò ní ipa tàbí òfin \"má ṣe\" kankan.",
        meets: "Ipa, àwọn olùgbọ́, iṣẹ́, ohùn àti ààlà, pẹ̀lú òfin ààbò fún nọ́mbà àdáni, ìmọ̀ràn, sísọ pé AI ni, àti ọ̀ràn pàjáwìrì.",
        exceeds: "Ó ní àkíyèsí ìbẹ̀rẹ̀ tí ó sọ fún àwọn ènìyàn pé AI ni, àti ohun tí ó lè ràn wọ́n lọ́wọ́ pẹ̀lú."
      },
      {
        name: "Fáìlì ìmọ̀",
        objective: "O3",
        notYet: "Kò sí fáìlì, tàbí fáìlì náà ní ìsọfúnni àdáni.",
        meets: "Fáìlì ojú-ìwé kan tí ó ní déètì, pẹ̀lú ìbéèrè àti ìdáhùn tó ga jù, láìsí ìsọfúnni àdáni.",
        exceeds: "A kó àwọn òtítọ́ jọ sábẹ́ àkọlé tó yé, ẹnì kejì sì ti ṣàyẹ̀wò wọn."
      },
      {
        name: "Àkọsílẹ̀ ìdánwò",
        objective: "O5",
        notYet: "Ìbéèrè kò tó mẹ́wàá, tàbí a kò tún ohun tí ó kùnà ṣe.",
        meets: "Ó kéré tán ìbéèrè mẹ́wàá, pẹ̀lú èyí tí kò sí lórí kókó ọ̀rọ̀ àti èyí tí ó léwu, pẹ̀lú àtúnṣe àti ìdánwò tuntun.",
        exceeds: "Ẹlòmíì náà dán an wò, àwọn ìbéèrè wọn sì wà nínú àkọsílẹ̀ náà."
      },
      {
        name: "Èsì àti ìtọ́jú",
        objective: "O6",
        notYet: "A kò pín in, tàbí a kò kọ èsì kankan sílẹ̀.",
        meets: "A pín in pẹ̀lú ẹnì kan, a kọ èsì sílẹ̀, ọ̀nà láti kàn sí ènìyàn sì wà níbẹ̀.",
        exceeds: "Ìránnilétí àtúnṣe oṣooṣù ti wà, a sì ti ṣe àtúnṣe kan láti inú èsì náà."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn àjọ tí wọ́n ṣí chatbot sílẹ̀ láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Wákàtí tí a fi pamọ́ lọ́sẹ̀ lórí ìbéèrè tí wọ́n ń tún béèrè, gẹ́gẹ́ bí ẹni tí ó ni iṣẹ́ náà ṣe sọ",
      "Àwọn chatbot tí a ṣì ń ṣe àtúnṣe wọn lẹ́yìn ọjọ́ 90, láìsí ìròyìn pé wọ́n pín ìsọfúnni àdáni"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì (fóònù ń ṣiṣẹ́ fún àwọn irinṣẹ́ kan)",
      "Irinṣẹ́ kíkọ́ chatbot láìkọ kóòdù bí custom GPT, Gemini Gem tàbí agent Copilot Studio (ṣàyẹ̀wò ètò ìsanwó tuntun irinṣẹ́ náà)",
      "Google Doc tàbí ìwé Word fún fáìlì ìmọ̀ àti àkọsílẹ̀ ìdánwò",
      "Nǹkan bí ìṣẹ́jú 60 fún ẹ̀kọ́ àti ìdánwò, pẹ̀lú àkókò láti dán chatbot wò àti láti pín in"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan; kọ́ chatbot àpẹẹrẹ kan lórí ojú-ìbòjú tí gbogbo ènìyàn ń wò.",
      "Ní kí àwọn akẹ́kọ̀ọ́ mú ìbéèrè mẹ́wàá gidi tó ga jù wá láti inú ímeèlì, ọ̀rọ̀ ìránṣẹ́ tàbí ọ̀rọ̀ lórí ìkànnì.",
      "Ṣàyẹ̀wò gbogbo fáìlì ìmọ̀ fún ìsọfúnni àdáni kí a tó gbé e sókè.",
      "So àwọn akẹ́kọ̀ọ́ pọ̀ ní méjìméjì láti dán chatbot ara wọn wò pẹ̀lú ìbéèrè tí kò sí lórí kókó ọ̀rọ̀ àti èyí tí ó léwu.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
