"use strict";

// Koach Learn course (Yoruba translation of veterans/veterans-ai-consulting.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-consulting-yo",
  lang: "yo",
  translationOf: "veterans-ai-consulting",
  category: "Veterans (military)",
  name: "Àǹfààní Iṣẹ́ Agbanímọ̀ràn pẹ̀lú AI",
  skills: "Sísọ ìmọ̀ rẹ di ìfilọ̀ iṣẹ́ agbanímọ̀ràn, Wíwá ìrànlọ́wọ́ iṣẹ́ ajé ọ̀fẹ́ fún àwọn ológun àtijọ́, Kíkọ ọ̀rọ̀ ìkànsí, Kíkọ àbá iṣẹ́ pẹ̀lú AI, Dídáàbò bo ìsọfúnni oníbàárà",
  outcome: "sọ ìmọ̀ tí o kọ́ nínú iṣẹ́ ológun di ìfilọ̀ iṣẹ́ agbanímọ̀ràn tó yé, kí o sì kọ àbá iṣẹ́ ojú-ewé kan fún oníbàárà pẹ̀lú olùrànlọ́wọ́ AI, nígbà tí o mọ ibi tí o ti lè rí ìrànlọ́wọ́ ìjọba ọ̀fẹ́ láti dá iṣẹ́ náà sílẹ̀.",
  about: [
    "Agbanímọ̀ràn (consultant) ni ẹni tí a ń sanwó fún láti yanjú ìṣòro kan pàtó fún oníbàárà. Àwọn ológun àtijọ́ ní ọgbọ́n tí ọ̀pọ̀ iṣẹ́ ajé kékeré, àjọ aláìlérè àti àwọn agbaṣẹ́ṣe (contractors) kò ní: ìṣètò, ààbò ibi iṣẹ́, ètò ìkẹ́rù (logistics), ìdánilẹ́kọ̀ọ́, ààbò àti ìdarí ẹgbẹ́. Àwọn irinṣẹ́ AI ń ran àwọn agbanímọ̀ràn lọ́wọ́ báyìí láti ṣe ìwádìí, kọ̀wé àti parí iṣẹ́ kíákíá.",
    "Nínú ẹ̀kọ́ yìí, o máa yan ìfilọ̀ kan tí ó dá lórí ohun tí o mọ̀, o máa mọ ibi tí àwọn ológun àtijọ́ ti ń rí ìrànlọ́wọ́ iṣẹ́ ajé ọ̀fẹ́ láti ọ̀dọ̀ ìjọba, o máa kọ ọ̀rọ̀ ìkànsí àkọ́kọ́, o sì máa lo olùrànlọ́wọ́ AI láti kọ àkọ́pẹrẹ àbá iṣẹ́ ojú-ewé kan. O tún máa kọ́ àwọn òfin tí ó ń dáàbò bo ìsọfúnni oníbàárà.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ìdánwò ìmọ̀ kan wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà. Ẹ̀kọ́ yìí kò fúnni ní ìmọ̀ràn òfin tàbí ti owó-orí: fún dídá iṣẹ́ ajé sílẹ̀, lo àwọn ọ́fíìsì ìjọba tí a dárúkọ níbí tàbí akọ́ṣẹ́mọṣẹ́ tó yẹ."
  ],
  finalTask: "Kọ àbá iṣẹ́ agbanímọ̀ràn ojú-ewé kan fún oníbàárà àdúgbò kan, èyí tí o hùmọ̀ tàbí gidi: ìṣòro náà, ohun tí o máa ṣe, ohun tí wọ́n máa gbà, àkókò iṣẹ́, iye owó rẹ (tí ìwọ fúnra rẹ pinnu, kì í ṣe AI), àti bí o ṣe máa dáàbò bo ìsọfúnni wọn. Kọ àkọ́pẹrẹ rẹ̀ pẹ̀lú olùrànlọ́wọ́ AI, lẹ́yìn náà tún un ṣe kí gbogbo ohun tí o sọ nínú rẹ̀ lè jẹ́ òótọ́, kí o sì kọ ọ́fíìsì iṣẹ́ ajé ìjọba ọ̀fẹ́ kan tí o máa kàn sí tẹ̀lé e.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ológun àtijọ́ tí wọ́n fẹ́ máa rówó gẹ́gẹ́ bí agbanímọ̀ràn, ní lílo ọgbọ́n bí ìṣètò, ààbò ibi iṣẹ́, ètò ìkẹ́rù, ìdánilẹ́kọ̀ọ́, ààbò àti ìdarí ẹgbẹ́, fún àwọn iṣẹ́ ajé kékeré, àjọ aláìlérè àti àwọn agbaṣẹ́ṣe.",
    startingPoint: "Wọ́n ní ìmọ̀ jíjinlẹ̀ àti ìrírí nínú fífi àlàyé ṣáájú iṣẹ́ (briefing) àti kíkọ àṣẹ, wọ́n sì lè lo kọ̀mpútà. Ọ̀pọ̀ jù lọ kò tíì ṣàlàyé ìfilọ̀ iṣẹ́ agbanímọ̀ràn rí, kò tíì kàn sí oníbàárà, pinnu iye owó iṣẹ́ tàbí kọ àbá iṣẹ́, díẹ̀ ló sì ti lo AI fún kíkọ̀wé iṣẹ́ ajé.",
    gap: "Ìmọ̀ máa ń mówó wá nìkan nígbà tí a bá fi í lọ̀ ní kedere fún oníbàárà tí ó nílò rẹ̀. Àwọn akẹ́kọ̀ọ́ nílò láti sọ ọgbọ́n wọn di ìfilọ̀ tó yé, kàn sí àwọn oníbàárà àkọ́kọ́ pẹ̀lú òtítọ́, kọ àbá iṣẹ́ pẹ̀lú AI tí àwọn fúnra wọn pinnu iye owó rẹ̀ tí wọ́n sì ṣàyẹ̀wò rẹ̀, dáàbò bo ìsọfúnni oníbàárà, kí wọ́n sì lo ìrànlọ́wọ́ iṣẹ́ ajé ìjọba ọ̀fẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a kò retí ìmọ̀ iṣẹ́ ajé kankan tẹ́lẹ̀",
      "Ẹ̀rọ: kọ̀mpútà tàbí smartphone tí ó ní íńtánẹ́ẹ̀tì àti olùrànlọ́wọ́ AI ọ̀fẹ́",
      "Ìpamọ́: kò sí ìsọfúnni àṣírí oníbàárà nínú irinṣẹ́ AI gbogbogbò àyàfi tí oníbàárà bá gbà, tí a sì ti fọwọ́ sí irinṣẹ́ náà; àmì ìdúrópò nígbà àṣeṣe",
      "Òtítọ́: gbogbo ohun tí a sọ nínú ọ̀rọ̀ àti àbá iṣẹ́ gbọ́dọ̀ jẹ́ òótọ́; akẹ́kọ̀ọ́ ló ń pinnu iye owó, kì í ṣe AI",
      "Ìwé àṣẹ, owó-orí àti ìforúkọsílẹ̀ máa ń lọ sí ọ́fíìsì iṣẹ́ ajé ìpínlẹ̀, irs.gov tàbí olùdámọ̀ràn VBOC"
    ],
    prerequisites: "Kò sí. \"AI fún Iṣẹ́ Ṣíṣe àti Ìdarí\" jẹ́ ẹ̀kọ́ míì tí ó lè ràn ọ́ lọ́wọ́ pẹ̀lú èyí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àpẹẹrẹ iṣẹ́ agbanímọ̀ràn", action: "ṣàlàyé ohun tí agbanímọ̀ràn ń ṣe àti ọ̀nà mẹ́ta tí AI ń gbà ràn wọ́n lọ́wọ́", standard: "kí o sì dárúkọ ó kéré tán ìṣòro oníbàárà méjì tí ó bá ọgbọ́n ológun rẹ mu" },
    { id: "O2", condition: "Ní lílo ìmọ̀ tí o kọ́ nínú iṣẹ́ ológun", action: "kọ ìfilọ̀ ní gbólóhùn kan tí ó dárúkọ ẹni tí o ń ràn lọ́wọ́, ìṣòro náà àti èsì rẹ̀", standard: "kí o sì dán an wò nípa bíbéèrè lọ́wọ́ ó kéré tán ẹnì kan nínú iṣẹ́ yẹn" },
    { id: "O3", condition: "Nígbà tí o bá ń ṣètò iṣẹ́ ajé rẹ", action: "dá ìrànlọ́wọ́ iṣẹ́ ajé ìjọba ọ̀fẹ́ fún àwọn ológun àtijọ́ tí ó wà nítòsí rẹ mọ̀, àti ohun tí ọ́fíìsì kọ̀ọ̀kan ń ṣe", standard: "pẹ̀lú ọ̀nà ìkànsí Veterans Business Outreach Center tí ó súnmọ́ ọ jù àti ìbéèrè kan láti béèrè" },
    { id: "O4", condition: "Fún ìfilọ̀ rẹ", action: "kọ ọ̀rọ̀ ìkànsí kúkúrú tí ó jẹ́ òótọ́, tí ó béèrè ìpè ìṣẹ́jú 15 lọ́wọ́ ẹni tí ó lè di oníbàárà", standard: "kí gbogbo ohun tí o sọ jẹ́ òótọ́, kí o sì ní ènìyàn mẹ́ta láti fi ránṣẹ́ sí" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìfilọ̀ rẹ àti ìṣòro oníbàárà kan", action: "kọ àkọ́pẹrẹ àbá iṣẹ́ ojú-ewé kan pẹ̀lú AI, kí o sì tún un ṣe títí yóò fi péye", standard: "pẹ̀lú ààlà iṣẹ́ tó yé, àkókò iṣẹ́ àti iye owó tí ìwọ fúnra rẹ pinnu" },
    { id: "O6", condition: "Nígbà tí o bá ń lo AI fún iṣẹ́ oníbàárà", action: "kọ àwọn òfin tí ó ń dáàbò bo ìsọfúnni oníbàárà, kí o sì ṣàyẹ̀wò iṣẹ́ AI kí o tó fi í lé wọn lọ́wọ́", standard: "pẹ̀lú ìlà kan nípa lílo AI nínú àbá iṣẹ́, láìfi ìsọfúnni oníbàárà sínú irinṣẹ́ gbogbogbò láìgba àṣẹ" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíkọ́ ìfilọ̀ iṣẹ́ agbanímọ̀ràn rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí agbanímọ̀ràn ń ṣe àti ibi tí AI ti wúlò",
          minutes: 4,
          goal: "Ṣàlàyé ohun tí agbanímọ̀ràn ń ṣe àti ọ̀nà mẹ́ta tí AI ń gbà ràn wọ́n lọ́wọ́.",
          text: [
            "Agbanímọ̀ràn jẹ́ ògbóǹtarìgì láti òde tí oníbàárà gbà fún iṣẹ́ kan pàtó, fún àkókò kan pàtó. Àpẹẹrẹ: gbígbé ètò ààbò ibi iṣẹ́ kalẹ̀ fún ilé-iṣẹ́ ìkọ́lé, ṣíṣe ètò ìdánilẹ́kọ̀ọ́ fún àwọn olùyọ̀ǹda àjọ aláìlérè, tàbí ṣíṣètò bí ilé ìkẹ́rùsí ṣe máa rí.",
            "AI ń ran àwọn agbanímọ̀ràn lọ́wọ́ láti ṣe ìwádìí kíákíá, kọ àkọ́pẹrẹ ìwé bí àbá iṣẹ́ àti ìròyìn, kí wọ́n sì sọ àkọsílẹ̀ di àkọsílẹ̀ àyẹ̀wò (checklist) tàbí àwọn àwòrán ìfihàn (slides). Kò rọ́pò ìrírí rẹ: ìdájọ́ rẹ ni àwọn oníbàárà ń sanwó fún.",
            "Iṣẹ́ agbanímọ̀ràn AI tún ní nínú ríran àwọn àjọ kékeré lọ́wọ́ láti bẹ̀rẹ̀ sí í lo irinṣẹ́ AI láìléwu, fún àpẹẹrẹ kíkọ ìlànà lílo AI tó rọrùn tàbí kíkọ́ àwọn òṣìṣẹ́. Àṣà ológun rẹ ti ìlànà iṣẹ́ tí a ti fìdí rẹ̀ múlẹ̀ àti ìdánilẹ́kọ̀ọ́ tó yé bá iṣẹ́ yìí mu dáadáa."
          ],
          words: [["Agbanímọ̀ràn (consultant)", "ògbóǹtarìgì láti òde tí a ń sanwó fún láti yanjú ìṣòro kan pàtó fún oníbàárà."], ["Oníbàárà (client)", "ẹni tàbí àjọ tí ó ń sanwó fún iṣẹ́ rẹ."], ["Ohun ìfijíṣẹ́ (deliverable)", "ohun tí o fi lé wọn lọ́wọ́ ní ìparí, bí ètò, ìròyìn tàbí ìdánilẹ́kọ̀ọ́."]],
          slides: [
            { title: "Agbanímọ̀ràn ni...", bullets: ["Ògbóǹtarìgì láti òde", "Tí a gbà fún iṣẹ́ kan pàtó, fún àkókò kan pàtó", "Tí a ń sanwó fún ìdájọ́ àti èsì rẹ̀"] },
            { title: "Bí AI ṣe ń ṣèrànwọ́", bullets: ["Ìwádìí kíákíá", "Kíkọ àkọ́pẹrẹ àbá iṣẹ́ àti ìròyìn", "Sísọ àkọsílẹ̀ di checklist tàbí slides"] },
            { title: "Iṣẹ́ agbanímọ̀ràn AI", bullets: ["Ríran àwọn àjọ kékeré lọ́wọ́ láti lo AI láìléwu", "Kíkọ ìlànà lílo AI tó rọrùn", "Kíkọ́ àwọn òṣìṣẹ́"] }
          ],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI: \"Àwọn ìṣòro wo ni àwọn iṣẹ́ ajé kékeré nítòsí mi sábà máa ń gba agbanímọ̀ràn fún?\" Fa ìlà yí méjì tí ó bá ohun tí o ṣe nínú iṣẹ́ ológun mu.",
          youCanNow: "ṣàlàyé ohun tí agbanímọ̀ràn ń ṣe àti bí AI ṣe ń ṣèrànwọ́ nínú iṣẹ́ náà.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ohun ìfijíṣẹ́ (deliverable)?", options: ["Ohun tí o fi lé wọn lọ́wọ́ ní ìparí, bí ètò tàbí ìròyìn", "Owó tí oníbàárà san", "Káàdì iṣẹ́ rẹ", "Ìpè fóònù àkọ́kọ́"], answer: 0, why: "Ohun ìfijíṣẹ́ ni iṣẹ́ tí a ti parí tí oníbàárà gbà." },
            { objective: "O1", q: "AI fún ọ ní àkọsílẹ̀ ìṣòro tí àwọn iṣẹ́ ajé kékeré ń gba agbanímọ̀ràn fún. Kí ni o máa ṣe?", options: ["Ṣèlérí láti yanjú gbogbo wọn", "Pa àkọsílẹ̀ náà tì", "Fa ìlà yí àwọn tí ó bá ohun tí o ṣe nínú iṣẹ́ ológun mu", "Yan èyí tí ó ń mówó wá jù, kódà tí o kò ní ọgbọ́n nínú rẹ̀"], answer: 2, why: "Ìfilọ̀ rẹ gbọ́dọ̀ so ìṣòro gidi pọ̀ mọ́ ọgbọ́n tí o ti ní tẹ́lẹ̀." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sísọ ìmọ̀ rẹ di ìfilọ̀ iṣẹ́",
          minutes: 5,
          goal: "Kọ ìfilọ̀ ní gbólóhùn kan: ẹni tí o ń ràn lọ́wọ́, ìṣòro náà, àti èsì rẹ̀.",
          text: [
            "Ìfilọ̀ tó yé ní apá mẹ́ta: ẹni tí o ń ràn lọ́wọ́, ìṣòro tí o ń yanjú, àti èsì tí wọ́n máa rí. Fún àpẹẹrẹ: \"Mo ń ran àwọn ilé-iṣẹ́ ìkọ́lé kékeré lọ́wọ́ láti kọ ètò ààbò ibi iṣẹ́ sílẹ̀ kí wọ́n lè yege àyẹ̀wò, kí ìpalára sì dín kù.\"",
            "Bẹ̀rẹ̀ pẹ̀lú ohun tí o ṣe lọ́pọ̀ ìgbà tí o sì ṣe dáadáa nínú iṣẹ́ ológun, lẹ́yìn náà wá àwọn ẹgbẹ́ aráàlú tí wọ́n ní ìṣòro kan náà. NCO ètò ìkẹ́rù àtijọ́ lè ran àwọn olùpínkiri kékeré lọ́wọ́ láti ṣètò ọjà ìpamọ́ wọn. Olùkọ́ àtijọ́ lè ran àwọn àjọ aláìlérè lọ́wọ́ láti gba àwọn olùyọ̀ǹda wọlé kí wọ́n sì kọ́ wọn.",
            "Lo olùrànlọ́wọ́ AI láti ronú jinlẹ̀ fún èrò, lẹ́yìn náà dán ìfilọ̀ náà wò nípa bíbéèrè lọ́wọ́ ènìyàn gidi méjì tàbí mẹ́ta nínú iṣẹ́ yẹn: \"Ṣé èyí jẹ́ ìṣòro tí ẹ máa sanwó láti yanjú?\""
          ],
          steps: ["Kọ nǹkan mẹ́ta tí o ṣe lọ́pọ̀ ìgbà tí o sì ṣe dáadáa nínú iṣẹ́ ológun.", "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI: \"Àwọn iṣẹ́ ajé aráàlú wo ló ní ìṣòro yìí?\"", "Kọ: \"Mo ń ran [ta ni] lọ́wọ́ láti [yanjú kí ni] kí wọ́n lè [èsì].\"", "Béèrè lọ́wọ́ ènìyàn méjì tàbí mẹ́ta nínú iṣẹ́ yẹn bóyá wọ́n máa sanwó fún un."],
          words: [["Ìfilọ̀ (offer)", "ọ̀rọ̀ tó yé tí ó sọ ẹni tí o ń ràn lọ́wọ́, nínú kí ni, àti èsì rẹ̀."], ["Ẹ̀ka pàtó (niche)", "ẹgbẹ́ oníbàárà kékeré kan pàtó tí o dojú kọ."]],
          slides: [
            { title: "Apá mẹ́ta ìfilọ̀", bullets: ["Ẹni tí o ń ràn lọ́wọ́", "Ìṣòro tí o ń yanjú", "Èsì tí wọ́n máa rí"] },
            { title: "Bẹ̀rẹ̀ láti iṣẹ́ ológun rẹ", bullets: ["Ohun tí o ṣe lọ́pọ̀ ìgbà tí o sì ṣe dáadáa", "Àwọn aráàlú wo ló ní ìṣòro kan náà?"] },
            { title: "Dán an wò pẹ̀lú ènìyàn gidi", bullets: ["\"Ṣé èyí jẹ́ ìṣòro tí ẹ máa sanwó láti yanjú?\"", "Béèrè lọ́wọ́ ènìyàn méjì tàbí mẹ́ta nínú iṣẹ́ náà"] }
          ],
          tryIt: "Kọ ìfilọ̀ gbólóhùn kan rẹ ní lílo \"Mo ń ran [ta ni] lọ́wọ́ láti [yanjú kí ni] kí wọ́n lè [èsì].\" Ní kí olùrànlọ́wọ́ AI mú un yé sí i, lẹ́yìn náà kà á fún ẹnì kan nínú iṣẹ́ yẹn.",
          youCanNow: "kọ ìfilọ̀ iṣẹ́ agbanímọ̀ràn tó yé tí ó dá lórí ìmọ̀ tí o kọ́ nínú iṣẹ́ ológun.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ẹ̀ka pàtó (niche)?", options: ["Gbogbo oníbàárà tí ó ṣeé ṣe", "Irú àdéhùn kan", "Ètò ìjọba ọ̀fẹ́ kan", "Ẹgbẹ́ oníbàárà kékeré kan pàtó tí o dojú kọ"], answer: 3, why: "Niche ni ẹgbẹ́ pàtó tí o ń sìn, èyí sì ń mú kí ìfilọ̀ rẹ yé." },
            { objective: "O2", q: "O kọ \"Mo ń ran àwọn iṣẹ́ ajé lọ́wọ́ pẹ̀lú nǹkan.\" Kí ni o máa ṣe?", options: ["Lò ó bí ó ti rí", "Tún un kọ bí \"Mo ń ran [ta ni] lọ́wọ́ láti [yanjú kí ni] kí wọ́n lè [èsì]\"", "Mú un gùn sí i pẹ̀lú àwọn ọ̀rọ̀ àfẹnujẹ́", "Yọ èsì náà kúrò"], answer: 1, why: "Ìfilọ̀ tó yé ń dárúkọ ẹni tí o ń ràn lọ́wọ́, ìṣòro náà àti èsì rẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ìrànlọ́wọ́ ìjọba ọ̀fẹ́ fún àwọn ológun àtijọ́ tí ó ní iṣẹ́ ajé",
          minutes: 5,
          goal: "Wá ìrànlọ́wọ́ iṣẹ́ ajé ọ̀fẹ́ fún àwọn ológun àtijọ́ nítòsí rẹ, kí o sì mọ ohun tí ọ́fíìsì kọ̀ọ̀kan ń ṣe.",
          text: [
            "U.S. Small Business Administration (SBA), àjọ ìjọba àpapọ̀ Amẹ́ríkà fún iṣẹ́ ajé kékeré, ń ṣe Boots to Business, èyí tí ó jẹ́ apá kan Transition Assistance Program ti ológun, àti Boots to Business Reboot fún àwọn ológun àtijọ́ ti gbogbo ìgbà. Àwọn Veterans Business Outreach Center (VBOC) ń ṣe ìdánilẹ́kọ̀ọ́ lórí ètò iṣẹ́ ajé, ìtọ́sọ́nà àti ẹ̀kọ́.",
            "Tí o bá fẹ́ àdéhùn iṣẹ́ ìjọba, SBA ń fọwọ́ sí àwọn iṣẹ́ ajé kékeré tí ológun àtijọ́ ní, àti àwọn tí ológun àtijọ́ tí ó ní àléébù láti iṣẹ́ ní, nípasẹ̀ ètò Veteran Small Business Certification rẹ̀, tí a ń pè ní VetCert, ní certifications.sba.gov. Nígbà tí a ṣàyẹ̀wò ní October 2026, VA sọ pé àwọn iṣẹ́ ajé tí ó ń bá VA ṣiṣẹ́ gbọ́dọ̀ forúkọ sílẹ̀ nípasẹ̀ SBA.",
            "VA tún kọ ìdánilẹ́kọ̀ọ́ iṣẹ́ òwò sílẹ̀ gẹ́gẹ́ bí ọ̀nà kan láti lo àwọn àǹfààní GI Bill kan. Ìpínlẹ̀ rẹ àti IRS ló ń pinnu orúkọ iṣẹ́ ajé, ìwé àṣẹ àti owó-orí, nítorí náà ṣàyẹ̀wò ọ́fíìsì iṣẹ́ ajé ìpínlẹ̀ rẹ àti irs.gov, tàbí béèrè lọ́wọ́ olùdámọ̀ràn VBOC."
          ],
          steps: ["Ṣí ojú-ewé SBA fún àwọn iṣẹ́ ajé tí ológun àtijọ́ ní.", "Wá Veterans Business Outreach Center tí ó súnmọ́ ọ jù.", "Wo ọjọ́ Boots to Business tàbí Reboot.", "Tí o bá fẹ́ iṣẹ́ ìjọba, ka nípa VetCert ní certifications.sba.gov.", "Ṣàyẹ̀wò ọ́fíìsì iṣẹ́ ajé ìpínlẹ̀ rẹ fún ìwé àṣẹ àti ìforúkọsílẹ̀."],
          words: [["SBA", "U.S. Small Business Administration, àjọ ìjọba àpapọ̀ tí ó ń ran àwọn iṣẹ́ ajé kékeré lọ́wọ́."], ["VBOC", "Veterans Business Outreach Center: àwọn ibùdó tí SBA ń ṣe onígbọ̀wọ́ fún, tí ó ń ran àwọn ológun àtijọ́ tí ó ní iṣẹ́ ajé lọ́wọ́."], ["VetCert", "ìfọwọ́sí SBA fún àwọn iṣẹ́ ajé kékeré tí ológun àtijọ́ ní, àti ti àwọn tí ó ní àléébù láti iṣẹ́ ológun."]],
          slides: [
            { title: "Ìrànlọ́wọ́ SBA ọ̀fẹ́ fún àwọn ológun àtijọ́", bullets: ["Boots to Business (apá kan TAP)", "Boots to Business Reboot, ti gbogbo ìgbà", "Àwọn Veterans Business Outreach Center"] },
            { title: "Àdéhùn iṣẹ́ ìjọba", bullets: ["VetCert ní certifications.sba.gov", "Fún iṣẹ́ ajé ológun àtijọ́ àti ti àwọn tí ó ní àléébù", "Láti bá VA ṣiṣẹ́, o gbọ́dọ̀ forúkọ sílẹ̀ pẹ̀lú SBA"] },
            { title: "Òfin dídá iṣẹ́ sílẹ̀", bullets: ["Orúkọ, ìwé àṣẹ àti owó-orí: ìpínlẹ̀ rẹ àti IRS", "Béèrè lọ́wọ́ olùdámọ̀ràn VBOC", "Má ṣe gba ìmọ̀ràn òfin tàbí owó-orí láti ọ̀dọ̀ AI nìkan"] }
          ],
          sources: [
            { name: "SBA: Àwọn iṣẹ́ ajé tí ológun àtijọ́ ní", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "SBA: Ìrànlọ́wọ́ àdéhùn iṣẹ́ fún àwọn ológun àtijọ́ (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "VA: Ìrànlọ́wọ́ fún iṣẹ́ ajé kékeré tí ológun àtijọ́ ní", url: "https://www.va.gov/careers-employment/veteran-owned-business-support/" },
            { name: "VA: Bí o ṣe lè lo àwọn àǹfààní GI Bill rẹ", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" }
          ],
          tryIt: "Wá Veterans Business Outreach Center tí ó súnmọ́ ọ jù lórí sba.gov. Kọ orúkọ rẹ̀, bí o ṣe lè kàn sí i, àti ìbéèrè kan tí o máa béèrè nípa bíbẹ̀rẹ̀ iṣẹ́ agbanímọ̀ràn.",
          youCanNow: "wá ìrànlọ́wọ́ ìjọba ọ̀fẹ́ fún bíbẹ̀rẹ̀ iṣẹ́ agbanímọ̀ràn tí ológun àtijọ́ ní.",
          quickCheck: [
            { objective: "O3", q: "Kí ni Veterans Business Outreach Center ń pèsè?", options: ["Owó yíyá láìsí ìwé kankan", "Ìpolówó tí a sanwó fún fún iṣẹ́ ajé rẹ", "Ìrànlọ́wọ́ ọ̀fẹ́ lórí ètò iṣẹ́ ajé àti ìtọ́sọ́nà fún àwọn ológun àtijọ́", "Oníbàárà àkọ́kọ́ tí ó dájú"], answer: 2, why: "Àwọn VBOC ń fún àwọn ológun àtijọ́ ní ìrànlọ́wọ́ ọ̀fẹ́ lórí ètò iṣẹ́ ajé àti ìtọ́sọ́nà." },
            { objective: "O3", q: "O ní ìbéèrè nípa ìwé àṣẹ iṣẹ́ ajé tí o nílò. Ọ̀dọ̀ ta ni o máa gbé e lọ?", options: ["Ọ́fíìsì iṣẹ́ ajé ìpínlẹ̀ rẹ, irs.gov tàbí olùdámọ̀ràn VBOC", "Olùrànlọ́wọ́ AI nìkan", "Ẹgbẹ́ kan lórí ìkànnì àjọlò", "Olùdíje rẹ"], answer: 0, why: "Ìbéèrè nípa ìwé àṣẹ àti owó-orí máa ń lọ sí ọ́fíìsì ìjọba tàbí olùdámọ̀ràn, kì í ṣe sí AI." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíkọ́ ìfilọ̀ iṣẹ́ agbanímọ̀ràn rẹ",
        questions: [
          { objective: "O1", q: "Kí ni agbanímọ̀ràn?", options: ["Olùbẹ̀wò ìjọba", "Òṣìṣẹ́ alákòókò kíkún títí ayé", "Ògbóǹtarìgì láti òde tí a ń sanwó fún láti yanjú ìṣòro kan pàtó", "Olùtajà fún ọjà kan ṣoṣo"], answer: 2, why: "A ń gba àwọn agbanímọ̀ràn fún iṣẹ́ kan pàtó àti àkókò kan pàtó." },
          { objective: "O1", q: "Kí ni àwọn oníbàárà ń sanwó fún agbanímọ̀ràn fún jù lọ?", options: ["Ìdájọ́ àti èsì rẹ̀", "Owó ìforúkọsílẹ̀ AI rẹ̀", "Aṣọ ológun rẹ̀", "Bí ó ṣe ń tẹ̀wé kíákíá"], answer: 0, why: "AI ń ṣèrànwọ́, ṣùgbọ́n ìmọ̀ ni àwọn oníbàárà ń sanwó fún." },
          { objective: "O2", q: "Èwo ni ìfilọ̀ tó yé?", options: ["\"Pè mí.\"", "\"Mo ń ṣe nǹkan.\"", "\"Ológun àtijọ́ ni mí.\"", "\"Mo ń ran àwọn ilé-iṣẹ́ ìkọ́lé kékeré lọ́wọ́ láti gbé ètò ààbò kalẹ̀ kí wọ́n lè yege àyẹ̀wò.\""], answer: 3, why: "Ó dárúkọ ẹni náà, ìṣòro náà àti èsì rẹ̀." },
          { objective: "O2", q: "Báwo ni o ṣe lè dán an wò bóyá ìfilọ̀ rẹ jẹ́ gidi?", options: ["Béèrè lọ́wọ́ AI nìkan", "Béèrè lọ́wọ́ àwọn ènìyàn nínú iṣẹ́ yẹn bóyá wọ́n máa sanwó láti yanjú ìṣòro náà", "Méfò", "Kọ́kọ́ tẹ káàdì iṣẹ́ jáde"], answer: 1, why: "Àwọn olùrà gidi ló máa sọ fún ọ bóyá ìṣòro náà tọ́ sí sísanwó fún." },
          { objective: "O3", q: "Níbo ni àwọn ológun àtijọ́ ti lè rí ìrànlọ́wọ́ ọ̀fẹ́ lórí ètò iṣẹ́ ajé àti ìtọ́sọ́nà?", options: ["Ọ̀dọ̀ olùtajà mọ́tò", "Veterans Business Outreach Center", "Ìpolówó lórí ìkànnì àjọlò", "Ẹgbẹ́ crypto kan"], answer: 1, why: "Àwọn VBOC jẹ́ ibùdó tí SBA ń ṣe onígbọ̀wọ́ fún fún àwọn ológun àtijọ́ tí ó ní iṣẹ́ ajé." }
        ]
      }
    },
    {
      name: "Orí 2: Gbígba iṣẹ́ àti ṣíṣe iṣẹ́ náà",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkọ ọ̀rọ̀ ìkànsí àkọ́kọ́ rẹ",
          minutes: 5,
          goal: "Kọ ọ̀rọ̀ kúkúrú tí ó jẹ́ òótọ́ tí ó béèrè ìpè ìṣẹ́jú 15 lọ́wọ́ ẹni tí ó lè di oníbàárà.",
          text: [
            "Àwọn oníbàárà àkọ́kọ́ rẹ sábà máa ń wá láti ọ̀dọ̀ àwọn tí ó ti mọ̀ ọ́ tẹ́lẹ̀: àwọn olórí rẹ àtijọ́, àwọn ẹgbẹ́ ológun àtijọ́, àwọn ẹgbẹ́ iṣẹ́ ajé àdúgbò àti àwọn àjọ aláìlérè tí o ń yọ̀ǹda ara rẹ fún.",
            "Ọ̀rọ̀ ìkànsí tó dára kúrú: ẹni tí o jẹ́, ìṣòro tí o ń ṣèrànwọ́ lé lórí, ẹ̀rí kan (èsì kan láti iṣẹ́ ológun tàbí iṣẹ́ àtijọ́), àti ìbéèrè kékeré kan, bí ìpè ìṣẹ́jú 15.",
            "AI lè kọ àkọ́pẹrẹ rẹ̀, ṣùgbọ́n jẹ́ kí ó dún bí ìwọ, kí o sì yọ ohunkóhun tí kì í ṣe òótọ́ kúrò. Má ṣe sọ láéláé pé o ní ìwé ẹ̀rí, ìyọ̀ǹda ààbò (clearance) tàbí èsì tí o kò ní."
          ],
          steps: ["Kọ ènìyàn tàbí ẹgbẹ́ mẹ́wàá tí ó mọ̀ ọ́ tàbí tí ẹ jọ wà nínú iṣẹ́ kan náà sílẹ̀.", "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún ọ̀rọ̀ gbólóhùn 5: ẹni tí o jẹ́, ìṣòro náà, ẹ̀rí kan, ìpè ìṣẹ́jú 15.", "Tún un ṣe kí ó lè dún bí ìwọ.", "Ṣàyẹ̀wò pé gbogbo ohun tí o sọ jẹ́ òótọ́.", "Fi ránṣẹ́ sí ènìyàn mẹ́ta."],
          words: [["Ìkànsí (outreach)", "kíkàn sí àwọn tí ó lè di oníbàárà láti bẹ̀rẹ̀ ìjíròrò."], ["Ẹ̀rí (proof)", "èsì gidi tí ó fi hàn pé o lè ṣe iṣẹ́ náà."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú àwọn tí ó mọ̀ ọ́", bullets: ["Àwọn olórí àtijọ́ àti ẹgbẹ́ ológun àtijọ́", "Àwọn ẹgbẹ́ iṣẹ́ ajé àdúgbò", "Àwọn àjọ aláìlérè tí o ń yọ̀ǹda ara rẹ fún"] },
            { title: "Ọ̀rọ̀ kúkúrú", bullets: ["Ẹni tí o jẹ́ àti ìṣòro tí o ń yanjú", "Ẹ̀rí gidi kan", "Ìbéèrè kékeré: ìpè ìṣẹ́jú 15"] },
            { title: "Jẹ́ olóòótọ́", bullets: ["Jẹ́ kí ó dún bí ìwọ", "Má sọ ohun tí o kò lè fi ẹ̀rí hàn"] }
          ],
          tryIt: "Ní kí olùrànlọ́wọ́ AI kọ àkọ́pẹrẹ ọ̀rọ̀ ìkànsí gbólóhùn márùn-ún fún ìfilọ̀ rẹ. Tún un ṣe kí ó lè dún bí ìwọ, kí gbogbo ohun tí o sọ sì jẹ́ òótọ́, lẹ́yìn náà kọ orúkọ ènìyàn mẹ́ta tí o máa fi ránṣẹ́ sí.",
          youCanNow: "kọ ọ̀rọ̀ ìkànsí tí ó jẹ́ òótọ́ tí ó béèrè ìpè kúkúrú lọ́wọ́ ẹni tí ó lè di oníbàárà.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ìbéèrè kékeré tó dára nínú ọ̀rọ̀ ìkànsí?", options: ["Fọwọ́ sí àdéhùn ọdún kan lónìí", "Ìpè ìṣẹ́jú 15", "San owó ìdógò báyìí", "Pín àkọsílẹ̀ owó wọn"], answer: 1, why: "Ìbéèrè kékeré tí ó rọrùn bí ìpè kúkúrú ń mú kí wọ́n tètè gbà." },
            { objective: "O4", q: "Àkọ́pẹrẹ AI sọ pé o ní \"ìrírí ọdún 20 nínú iṣẹ́ agbanímọ̀ràn\". O kò ní rárá. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀; ó dún dáadáa", "Yí i padà sí ọdún 10", "Fi í ránṣẹ́ sí ènìyàn púpọ̀ sí i", "Yọ ọ́ kúrò kí o sì sọ ìrírí ológun rẹ gidi"], answer: 3, why: "Gbogbo ohun tí o sọ gbọ́dọ̀ jẹ́ òótọ́; ìrírí rẹ gidi ni ẹ̀rí rẹ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kíkọ àbá iṣẹ́ pẹ̀lú AI",
          minutes: 6,
          goal: "Kọ àkọ́pẹrẹ àbá iṣẹ́ ojú-ewé kan pẹ̀lú AI, kí o sì tún un ṣe títí yóò fi péye.",
          text: [
            "Àbá iṣẹ́ (proposal) ni ètò rẹ fún ìṣòro oníbàárà. Ó ń ṣiṣẹ́ bí àṣẹ iṣẹ́ ológun (operations order): ipò (ìṣòro náà), iṣẹ́ àyànfúnni (ohun tí o máa ṣe), ìmúṣẹ (àwọn ìgbésẹ̀ àti àkókò), àti ohun tí oníbàárà máa gbà (àwọn ohun ìfijíṣẹ́).",
            "Fún AI ní àkọsílẹ̀ rẹ láti ìpè pẹ̀lú oníbàárà, láìsí ìsọfúnni àdáni oníbàárà, kí o sì béèrè fún àbá iṣẹ́ ojú-ewé kan tí ó lo àwọn àkọlé wọ̀nyẹn. Lẹ́yìn náà tún un ṣe dáadáa: gé ohunkóhun tí kò yé kúrò, tún àwọn ọjọ́ ṣe, kí o sì jẹ́ kí ààlà iṣẹ́ yé kí iṣẹ́ náà má bàa máa pọ̀ sí i.",
            "Ìwọ ló ń pinnu iye owó, kì í ṣe AI. Ronú nípa wákàtí rẹ, ìnáwó rẹ àti iye tí èsì náà jẹ́ lójú oníbàárà. Béèrè lọ́wọ́ olùdámọ̀ràn VBOC tàbí àwọn agbanímọ̀ràn míì nínú iṣẹ́ rẹ ohun tí ó wọ́pọ̀."
          ],
          steps: ["Kọ àkọsílẹ̀ rẹ láti ìjíròrò pẹ̀lú oníbàárà (láìsí ìsọfúnni àdáni).", "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún àbá iṣẹ́ ojú-ewé kan: ìṣòro, ohun tí màá ṣe, àkókò, àwọn ohun ìfijíṣẹ́, iye owó.", "Jẹ́ kí ààlà iṣẹ́ jẹ́ pàtó: ohun tí ó wà nínú rẹ̀ àti èyí tí kò sí.", "Fi iye owó tìrẹ kún un.", "Kà á bí ẹni pé ìwọ ni oníbàárà: ṣé ohunkóhun kò yé?"],
          words: [["Àbá iṣẹ́ (proposal)", "ètò àti iye owó tí a kọ sílẹ̀ fún yíyanjú ìṣòro oníbàárà."], ["Ààlà iṣẹ́ (scope)", "iṣẹ́ wo gan-an ló wà nínú rẹ̀ àti èyí tí kò sí."], ["Scope creep", "nígbà tí iṣẹ́ kan bá ń pọ̀ sí i kọjá ohun tí ẹ fohùn ṣọ̀kan lé lórí."]],
          slides: [
            { title: "Àbá iṣẹ́ = àṣẹ iṣẹ́ ológun", bullets: ["Ipò: ìṣòro náà", "Iṣẹ́ àyànfúnni: ohun tí o máa ṣe", "Ìmúṣẹ: àwọn ìgbésẹ̀ àti àkókò", "Ohun ìfijíṣẹ́: ohun tí wọ́n máa gbà"] },
            { title: "AI kọ àkọ́pẹrẹ, ìwọ tún un ṣe", bullets: ["Fún un ní àkọsílẹ̀, láìsí ìsọfúnni àdáni oníbàárà", "Gé àwọn ọ̀rọ̀ tí kò yé, tún àwọn ọjọ́ ṣe", "Ààlà iṣẹ́ tó yé ń dá scope creep dúró"] },
            { title: "Ìwọ ló ń pinnu iye owó", bullets: ["Wákàtí àti ìnáwó rẹ", "Iye tí èsì náà jẹ́", "Béèrè lọ́wọ́ olùdámọ̀ràn VBOC ohun tí ó wọ́pọ̀"] }
          ],
          tryIt: "Lo ìfilọ̀ rẹ àti oníbàárà kan tí o hùmọ̀. Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún àbá iṣẹ́ ojú-ewé kan pẹ̀lú àkọlé márùn-ún náà, lẹ́yìn náà tún ààlà iṣẹ́ ṣe kí o sì fi iye owó tìrẹ kún un.",
          youCanNow: "kọ àkọ́pẹrẹ àbá iṣẹ́ agbanímọ̀ràn ojú-ewé kan tó yé pẹ̀lú ìrànlọ́wọ́ AI, kí o sì tún un ṣe.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ààlà iṣẹ́ (scope) túmọ̀ sí nínú àbá iṣẹ́?", options: ["Iṣẹ́ wo gan-an ló wà nínú rẹ̀ àti èyí tí kò sí", "Àdírẹ́sì oníbàárà", "Irú lẹ́tà tí o lò", "Owó wákàtí rẹ nìkan"], answer: 0, why: "Ààlà iṣẹ́ ń pààlà sí iṣẹ́ náà ní kedere, èyí sì ń dá scope creep dúró." },
            { objective: "O5", q: "AI dábàá iye owó kan fún àbá iṣẹ́ rẹ. Kí ni o máa ṣe?", options: ["Lo iye owó AI", "Fi iye owó sílẹ̀ láìkọ", "Pinnu iye owó tìrẹ ní ìbámu pẹ̀lú wákàtí, ìnáwó àti iye rẹ", "Ní kí oníbàárà yan iye owó èyíkéyìí"], answer: 2, why: "Ìwọ ló ń pinnu iye owó; AI kò mọ ìnáwó rẹ tàbí iye iṣẹ́ rẹ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fífi iṣẹ́ jíṣẹ́ àti dídáàbò bo oníbàárà",
          minutes: 5,
          goal: "Ṣe àwọn òfin fún lílo AI nínú iṣẹ́ oníbàárà tí ó ń dáàbò bo ìsọfúnni oníbàárà.",
          text: [
            "Àwọn oníbàárà ń fi ìsọfúnni wọn lé ọ lọ́wọ́: orúkọ àwọn òṣìṣẹ́, owó, ètò àti ìṣòro. Má ṣe lẹ ìsọfúnni àdáni tàbí àṣírí oníbàárà sínú irinṣẹ́ AI gbogbogbò àyàfi tí oníbàárà bá ti gbà, tí a sì ti fọwọ́ sí irinṣẹ́ náà fún un.",
            "Ṣàyẹ̀wò gbogbo ohun tí AI ṣe kí oníbàárà tó rí i: òtítọ́, nọ́mbà, orúkọ àti òfin. Ìwọ ni ó ní ẹ̀bi iṣẹ́ náà, kì í ṣe AI.",
            "Jẹ́ kí ó hàn gbangba bí o ṣe ń lo AI. Ìlà kan tó rọrùn nínú àbá iṣẹ́ rẹ tó: \"Mo ń lo irinṣẹ́ AI láti kọ àkọ́pẹrẹ ìwé; mo ń ṣàyẹ̀wò gbogbo iṣẹ́, mi ò sì ń pín ìsọfúnni àdáni yín pẹ̀lú wọn.\""
          ],
          steps: ["Pa ìsọfúnni àdáni oníbàárà mọ́ kúrò nínú irinṣẹ́ AI gbogbogbò.", "Lo àmì ìdúrópò bí [orúkọ oníbàárà] nígbà tí o bá ń kọ àkọ́pẹrẹ.", "Ṣàyẹ̀wò gbogbo òtítọ́, nọ́mbà àti òfin kí o tó fi iṣẹ́ jíṣẹ́.", "Fi ìlà kan kún àbá iṣẹ́ rẹ nípa bí o ṣe ń lo AI."],
          words: [["Àṣírí (confidential)", "ìsọfúnni tí oníbàárà fẹ́ kí ó wà ní ìpamọ́."], ["Irinṣẹ́ tí a fọwọ́ sí (approved tool)", "irinṣẹ́ AI tí oníbàárà ti gbà pé o lè lò pẹ̀lú ìsọfúnni wọn."]],
          slides: [
            { title: "Dáàbò bo ìsọfúnni oníbàárà", bullets: ["Kò sí ìsọfúnni àdáni oníbàárà nínú irinṣẹ́ AI gbogbogbò", "Lo àmì ìdúrópò bí [orúkọ oníbàárà]"] },
            { title: "Ìwọ ló ni iṣẹ́ náà", bullets: ["Ṣàyẹ̀wò òtítọ́, nọ́mbà, orúkọ àti òfin", "Kì í ṣe AI ló ní ẹ̀bi; ìwọ ni"] },
            { title: "Jẹ́ kí lílo AI hàn gbangba", bullets: ["Sọ bí o ṣe ń lò ó nínú àbá iṣẹ́", "\"Mo ń ṣàyẹ̀wò gbogbo iṣẹ́, mo sì ń dáàbò bo ìsọfúnni yín\""] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí àbá iṣẹ́ ojú-ewé kan rẹ. Fi ìlà lílo AI rẹ kún un, ṣàyẹ̀wò pé gbogbo ohun tí o sọ jẹ́ òótọ́, kí o sì kọ orúkọ ọ́fíìsì iṣẹ́ ajé ìjọba ọ̀fẹ́ tí o máa kàn sí tẹ̀lé e.",
          youCanNow: "fi iṣẹ́ agbanímọ̀ràn lọ̀ ní ìbámu pẹ̀lú ìmọ̀ tí o kọ́ nínú iṣẹ́ ológun, kọ àbá iṣẹ́ pẹ̀lú AI, kí o sì dáàbò bo ìsọfúnni oníbàárà rẹ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni àmì ìdúrópò bí [orúkọ oníbàárà] ń ṣe?", options: ["Ó ń fi orúkọ tìrẹ pamọ́", "Ó ń mú àbá iṣẹ́ gùn sí i", "Ó ń fi àbá iṣẹ́ ránṣẹ́ fúnra rẹ̀", "Ó ń jẹ́ kí o kọ àkọ́pẹrẹ pẹ̀lú AI láìpín ìsọfúnni àdáni"], answer: 3, why: "Àmì ìdúrópò ń pa ìsọfúnni oníbàárà mọ́ kúrò nínú AI nígbà tí o bá ń kọ àkọ́pẹrẹ." },
            { objective: "O6", q: "Oníbàárà kan fi ètò àṣírí ránṣẹ́, o sì fẹ́ ìrànlọ́wọ́ AI. Kí ni o máa kọ́kọ́ ṣe?", options: ["Lẹ̀ wọ́n sínú AI gbogbogbò èyíkéyìí", "Ṣàyẹ̀wò pé oníbàárà gbà, tí a sì ti fọwọ́ sí irinṣẹ́ náà fún un", "Fi wọ́n sórí ayélujára fún èrò àwọn ènìyàn", "Pín wọn pẹ̀lú oníbàárà míì"], answer: 1, why: "Ìsọfúnni àṣírí oníbàárà máa ń wọ irinṣẹ́ AI nìkan pẹ̀lú ìfohùnṣọ̀kan oníbàárà àti irinṣẹ́ tí a fọwọ́ sí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Gbígba iṣẹ́ àti ṣíṣe iṣẹ́ náà",
        questions: [
          { objective: "O4", q: "Níbo ni àwọn oníbàárà àkọ́kọ́ agbanímọ̀ràn sábà máa ń ti wá?", options: ["Kò sí ibì kankan", "Àwọn ìpolówó tí ó ń yọ jáde lójijì", "Ìpè sí àwọn àjèjì nìkan", "Àwọn ènìyàn àti ẹgbẹ́ tí ó ti mọ̀ ọ́ tẹ́lẹ̀"], answer: 3, why: "Ìgbẹ́kẹ̀lé láti ọ̀dọ̀ àwọn tí ó mọ̀ ọ́ ló ń ṣí ilẹ̀kùn kíákíá jù." },
          { objective: "O4", q: "Kí ni ìbéèrè kékeré tó dára nínú ọ̀rọ̀ ìkànsí?", options: ["Ìpè ìṣẹ́jú 15", "Àdéhùn ọdún kan", "Ìsọfúnni báńkì wọn", "Owó ńlá ṣáájú iṣẹ́"], answer: 0, why: "Ìpè kúkúrú rọrùn láti gbà." },
          { objective: "O5", q: "Ta ni ó yẹ kí ó pinnu iye owó rẹ?", options: ["Ojú-òpó wẹ́ẹ̀bù èyíkéyìí", "AI", "Ìwọ, ní ìbámu pẹ̀lú wákàtí, ìnáwó àti iye", "Oníbàárà nìkan"], answer: 2, why: "Iye owó jẹ́ ìpinnu iṣẹ́ ajé rẹ." },
          { objective: "O5", q: "Kí ni scope creep?", options: ["Ìfijíṣẹ́ kíákíá", "Irú AI kan", "Fọ́ọ̀mù òfin kan", "Nígbà tí iṣẹ́ kan bá ń pọ̀ sí i kọjá ohun tí ẹ fohùn ṣọ̀kan lé lórí"], answer: 3, why: "Ààlà iṣẹ́ tó yé ń dá iṣẹ́ dúró láti pọ̀ sí i láìsí owó." },
          { objective: "O6", q: "Ṣé o lè lẹ ètò àṣírí oníbàárà sínú irinṣẹ́ AI gbogbogbò?", options: ["Bẹ́ẹ̀ni, tí ó bá ń dín àkókò kù", "Nígbà gbogbo", "Nìkan tí oníbàárà bá gbà, tí a sì ti fọwọ́ sí irinṣẹ́ náà fún un", "Bẹ́ẹ̀ni, tí o bá pa á rẹ́ lẹ́yìn náà"], answer: 2, why: "Ìsọfúnni oníbàárà nílò ìfohùnṣọ̀kan wọn àti irinṣẹ́ tí a fọwọ́ sí." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Àǹfààní Iṣẹ́ Agbanímọ̀ràn pẹ̀lú AI",
    questions: [
      { objective: "O1", q: "Ohun ìfijíṣẹ́ (deliverable) ni:", options: ["Mọ́tò rẹ", "Ohun tí o fi lé wọn lọ́wọ́ ní ìparí, bí ètò tàbí ìròyìn", "Nọ́mbà ìwé owó rẹ", "Irinṣẹ́ AI náà"], answer: 1, why: "Àwọn ohun ìfijíṣẹ́ ni èsì tí oníbàárà gbà." },
      { objective: "O1", q: "Èwo ni ọ̀nà kan tí AI ń gbà ran àwọn agbanímọ̀ràn lọ́wọ́?", options: ["Kíkọ àkọ́pẹrẹ àbá iṣẹ́ àti ìròyìn", "Rírọ́pò gbogbo ìdájọ́", "Fífọwọ́ sí àdéhùn", "Níní ìyọ̀ǹda ààbò (clearance)"], answer: 0, why: "AI ń mú kíkọ àkọ́pẹrẹ yára; ìwọ ṣì ni ó ń pinnu." },
      { objective: "O1", q: "Iṣẹ́ agbanímọ̀ràn AI lè ní nínú:", options: ["Títa ìsọfúnni oníbàárà", "Gígún wọ ẹ̀rọ àwọn olùdíje", "Ríran àjọ kékeré lọ́wọ́ láti kọ ìlànà lílo AI tó rọrùn", "Ṣíṣèlérí èrè tí ó dájú"], answer: 2, why: "Bíbẹ̀rẹ̀ lílo AI láìléwu jẹ́ àìní gidi tí agbanímọ̀ràn lè pèsè." },
      { objective: "O2", q: "Apá mẹ́ta ìfilọ̀ ni:", options: ["Ẹni tí o ń ràn lọ́wọ́, ìṣòro náà, àti èsì rẹ̀", "Àmì ìdánimọ̀, àwọ̀ àti irú lẹ́tà", "Ipò, ẹgbẹ́ ológun àti ibùdó", "Iye owó, owó-orí àti owó iṣẹ́"], answer: 0, why: "Àwọn wọ̀nyí ló ń jẹ́ kí ìfilọ̀ yé olùrà." },
      { objective: "O2", q: "Ẹ̀ka pàtó (niche) ni:", options: ["App AI kan", "Irú owó-orí kan", "Àmì ẹ̀yẹ ológun kan", "Ẹgbẹ́ oníbàárà kékeré kan pàtó tí o dojú kọ"], answer: 3, why: "Dídojúkọ ẹgbẹ́ kan ń jẹ́ kí ìfilọ̀ rẹ rọrùn láti tà." },
      { objective: "O2", q: "Olùkọ́ àtijọ́ lè fi lọ̀ láti:", options: ["Wa ọkọ̀ òfurufú láìní ìwé àṣẹ", "Ran àwọn àjọ aláìlérè lọ́wọ́ láti gba àwọn olùyọ̀ǹda wọlé kí wọ́n sì kọ́ wọn", "Fúnni ní ìmọ̀ràn òfin", "Ta crypto"], answer: 1, why: "Ọgbọ́n ìdánilẹ́kọ̀ọ́ wúlò tààrà níbẹ̀." },
      { objective: "O3", q: "Ta ni ó ń ṣe Boots to Business?", options: ["Báńkì aládàáni kan", "SBA, gẹ́gẹ́ bí apá kan Transition Assistance Program", "Ìkànnì àjọlò kan", "IRS"], answer: 1, why: "SBA ń ṣe é nínú TAP." },
      { objective: "O3", q: "Boots to Business Reboot wà fún:", options: ["Àwọn akẹ́kọ̀ọ́ nìkan", "Àwọn ọ̀gá ológun tí ó ṣì wà lẹ́nu iṣẹ́ nìkan", "Àwọn aráàlú nìkan", "Àwọn ológun àtijọ́ ti gbogbo ìgbà, títí kan Guard àti Reserve"], answer: 3, why: "SBA sọ pé Reboot ń sin àwọn ológun àtijọ́ ti gbogbo ìgbà." },
      { objective: "O3", q: "VetCert ni:", options: ["Ìfọwọ́sí SBA fún àwọn iṣẹ́ ajé kékeré tí ológun àtijọ́ ní, àti ti àwọn tí ó ní àléébù láti iṣẹ́ ológun", "Fọ́ọ̀mù owó-orí kan", "Ojú-òpó ìpolówó iṣẹ́ kan", "Owó GI Bill kan"], answer: 0, why: "SBA ń ṣe VetCert fún àdéhùn iṣẹ́ ìjọba." },
      { objective: "O3", q: "Níbo ni o ti ń béèrè fún VetCert?", options: ["Ìjíròrò AI èyíkéyìí", "Link nínú text", "certifications.sba.gov", "Ojú-ewé kan lórí ìkànnì àjọlò"], answer: 2, why: "Ojú-òpó ìfọwọ́sí SBA ló ń gba ìbéèrè." },
      { objective: "O3", q: "Ibi tó dára jù láti gbé ìbéèrè nípa ìwé àṣẹ iṣẹ́ ajé àti owó-orí lọ ni:", options: ["Kò sí ẹnì kankan", "Ìjíròrò AI nìkan", "Ojú-òpó ìjíròrò èyíkéyìí", "Ọ́fíìsì iṣẹ́ ajé ìpínlẹ̀ rẹ, irs.gov tàbí olùdámọ̀ràn VBOC"], answer: 3, why: "Àwọn ọ́fíìsì ìjọba àti olùdámọ̀ràn ló ń fúnni ní òfin tí ó wà lọ́wọ́lọ́wọ́." },
      { objective: "O4", q: "Ọ̀rọ̀ ìkànsí tó dára ní nínú:", options: ["Nọ́mbà Social Security rẹ", "Gbogbo ìtàn ayé rẹ", "Ẹni tí o jẹ́, ìṣòro náà, ẹ̀rí kan àti ìbéèrè kékeré", "Ìfipá béèrè owó"], answer: 2, why: "Ọ̀rọ̀ kúkúrú tí ó jẹ́ pàtó ló ń mú èsì wá." },
      { objective: "O4", q: "Àkọ́pẹrẹ AI sọ pé o ní ìwé ẹ̀rí tí o kò ní. O yẹ kí o:", options: ["Fi í sílẹ̀", "Yọ ọ́ kúrò", "Fi méjì míì kún un", "Ní kí oníbàárà má ṣàyẹ̀wò"], answer: 1, why: "Gbogbo ohun tí o sọ gbọ́dọ̀ jẹ́ òótọ́." },
      { objective: "O5", q: "Àbá iṣẹ́ dà bí ìwé ológun wo?", options: ["Àṣẹ iṣẹ́ ológun (operations order)", "Fọ́ọ̀mù ìsinmi", "Àyẹ̀wò aṣọ ológun", "Ìwé owó oṣù"], answer: 0, why: "Méjèèjì ló ń ṣàlàyé ipò, iṣẹ́ àyànfúnni àti ìmúṣẹ." },
      { objective: "O5", q: "Ààlà iṣẹ́ (scope) nínú àbá iṣẹ́ túmọ̀ sí:", options: ["Iye owó nìkan", "Ohun tí a fi ń wo ìfojúsùn ìbọn", "Iṣẹ́ wo gan-an ló wà nínú rẹ̀ àti èyí tí kò sí", "Àdírẹ́sì oníbàárà"], answer: 2, why: "Ààlà iṣẹ́ tó yé ń dènà aáwọ̀." },
      { objective: "O5", q: "Nígbà tí o bá ní kí AI kọ àkọ́pẹrẹ àbá iṣẹ́, fún un ní:", options: ["Àkọsílẹ̀ rẹ láìsí ìsọfúnni àdáni oníbàárà", "Ìsọfúnni báńkì oníbàárà", "Àdírẹ́sì ilé àwọn òṣìṣẹ́", "Àwọn ọ̀rọ̀ aṣínà"], answer: 0, why: "Pa ìsọfúnni àdáni oníbàárà mọ́ kúrò nínú rẹ̀." },
      { objective: "O6", q: "Ta ni ó ní ẹ̀bi àṣìṣe nínú iṣẹ́ oníbàárà tí AI kọ àkọ́pẹrẹ rẹ̀?", options: ["Oníbàárà", "Ilé-iṣẹ́ AI", "Kò sí ẹnì kankan", "Ìwọ"], answer: 3, why: "Ìwọ lo fi iṣẹ́ náà jíṣẹ́, nítorí náà ìwọ ló ni ín." },
      { objective: "O6", q: "Kí ni o yẹ kí o ṣàyẹ̀wò kí o tó fi iṣẹ́ tí AI kọ àkọ́pẹrẹ rẹ̀ jíṣẹ́?", options: ["Irú lẹ́tà nìkan", "Òtítọ́, nọ́mbà, orúkọ àti òfin", "Kò sí nǹkan", "Àkọtọ́ nìkan"], answer: 1, why: "AI lè ṣàṣìṣe nípa òtítọ́." },
      { objective: "O6", q: "Báwo ni o ṣe yẹ kí o sọ fún àwọn oníbàárà nípa lílo AI?", options: ["Fi í pamọ́", "Ìlà tó yé nínú àbá iṣẹ́ nípa bí o ṣe ń lò ó àti bí o ṣe ń dáàbò bo ìsọfúnni wọn", "Sọ pé AI ló ṣe gbogbo rẹ̀", "Má ṣe mẹ́nu bà á láéláé"], answer: 1, why: "Ṣíṣe nǹkan ní gbangba ń mú ìgbẹ́kẹ̀lé wá." },
      { objective: "O6", q: "Àmì ìdúrópò bí [orúkọ oníbàárà] ń ràn ọ́ lọ́wọ́ láti:", options: ["Gba ìwé ẹ̀rí", "Gba owó kíákíá", "Fo àbá iṣẹ́ dá", "Kọ àkọ́pẹrẹ pẹ̀lú AI láìpín ìsọfúnni àdáni"], answer: 3, why: "Àmì ìdúrópò ń pa orúkọ gidi mọ́ kúrò nínú irinṣẹ́ AI." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 3, 6, 8, 11, 12, 14, 16, 19]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ìṣòro àti ìfilọ̀", objective: "O2", notYet: "Ìṣòro oníbàárà tàbí ohun tí o máa ṣe kò yé.", meets: "Ó sọ ìṣòro oníbàárà àti ohun tí o máa ṣe, ó sì bá ìfilọ̀ rẹ mu.", exceeds: "Ó lo ọ̀rọ̀ oníbàárà fúnra rẹ̀ láti ṣàpèjúwe ìṣòro náà." },
      { name: "Ààlà iṣẹ́, ohun ìfijíṣẹ́ àti àkókò", objective: "O5", notYet: "Kò sí ààlà iṣẹ́, ohun ìfijíṣẹ́ tàbí àkókò tó yé.", meets: "Ààlà iṣẹ́ tó yé (ohun tí ó wà nínú rẹ̀ àti èyí tí kò sí), ohun tí oníbàárà máa gbà àti àkókò.", exceeds: "Ó sọ bí a ṣe máa bójú tó ìyípadà sí ààlà iṣẹ́." },
      { name: "Iye owó rẹ", objective: "O5", notYet: "Kò sí iye owó, tàbí a lo iye owó AI bí ó ti rí.", meets: "Iye owó tí akẹ́kọ̀ọ́ fúnra rẹ̀ pinnu.", exceeds: "Akẹ́kọ̀ọ́ lè ṣàlàyé iye owó náà láti inú wákàtí, ìnáwó àti iye." },
      { name: "A dáàbò bo ìsọfúnni oníbàárà", objective: "O6", notYet: "Kò sí ìlà lílo AI, tàbí a lẹ ìsọfúnni oníbàárà sínú AI gbogbogbò.", meets: "Ìlà tó yé nípa bí a ṣe ń lo AI àti bí a ṣe ń dáàbò bo ìsọfúnni oníbàárà.", exceeds: "A lo àmì ìdúrópò nínú gbogbo àkọ́pẹrẹ pẹ̀lú AI." },
      { name: "Òótọ́ àti ìgbésẹ̀ tó kàn", objective: "O3", notYet: "Ohun kan tí a sọ kì í ṣe òótọ́, tàbí a kò dárúkọ ọ́fíìsì kankan.", meets: "Gbogbo ohun tí a sọ jẹ́ òótọ́, a sì kọ ọ́fíìsì iṣẹ́ ajé ìjọba ọ̀fẹ́ kan sílẹ̀ gẹ́gẹ́ bí ibi tí a máa kàn sí tẹ̀lé e.", exceeds: "Akẹ́kọ̀ọ́ ti ní ìbéèrè kan tí ó ti múra sílẹ̀ fún ọ́fíìsì náà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi ó kéré tán ọ̀rọ̀ ìkànsí mẹ́ta ránṣẹ́ láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n kàn sí VBOC tàbí tí wọ́n darapọ̀ mọ́ Boots to Business láàárín ọjọ́ 60",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n rí oníbàárà agbanímọ̀ràn àkọ́kọ́ tí ó sanwó láàárín oṣù 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí smartphone tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: ChatGPT, Microsoft Copilot tàbí Google Gemini",
      "Ojú-òpó wẹ́ẹ̀bù ọ̀fẹ́ sba.gov láti wá Veterans Business Outreach Center",
      "Ètò kíkọ̀wé (word processor) fún àbá iṣẹ́ ojú-ewé kan",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣe àṣeṣe ìfilọ̀ gbólóhùn kan wọn sókè pẹ̀lú alábàáṣiṣẹ́ kan, kí wọ́n sì tún un ṣe lẹ́ẹ̀kan.",
      "Lo àwọn oníbàárà tí a hùmọ̀ nínú kíláàsì, kí o sì ní kí wọ́n lo àmì ìdúrópò fún ìsọfúnni oníbàárà èyíkéyìí.",
      "Má ṣe dábàá iye owó; ní kí akẹ́kọ̀ọ́ kọ̀ọ̀kan ṣàlàyé bí ó ṣe pinnu tirẹ̀.",
      "Pe olùdámọ̀ràn VBOC tàbí SBA wá sí ìpàdé ìkẹyìn láti dáhùn ìbéèrè nípa dídá iṣẹ́ ajé sílẹ̀.",
      "Fi rubric ṣe àmì fún àbá iṣẹ́ náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
