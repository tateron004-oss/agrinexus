"use strict";

// Koach Learn course (Yoruba translation of underserved/underserved-ai-employment.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-employment-yo",
  lang: "yo",
  translationOf: "underserved-ai-employment",
  category: "Undeserved Community",
  name: "AI fún Iṣẹ́ àti Ìmúrasílẹ̀ fún Ibi Iṣẹ́",
  skills: "Wíwá ìrànlọ́wọ́ iṣẹ́ ọ̀fẹ́, Dídárúkọ àwọn ọgbọ́n rẹ, Kíkọ résumé ojú-ewé kan pẹ̀lú AI, Mímú résumé bá ìpolówó iṣẹ́ mu, Fífi ìdáhùn ìfọ̀rọ̀wánilẹ́nuwò ṣe àṣeṣe, Dídá jìbìtì iṣẹ́ mọ̀",
  outcome: "lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti kọ résumé ojú-ewé kan tí ó bá ìpolówó iṣẹ́ gidi kan mu, fi ìdáhùn sí àwọn ìbéèrè ìfọ̀rọ̀wánilẹ́nuwò tí ó wọ́pọ̀ ṣe àṣeṣe, kí o sì dá àwọn àmì jìbìtì iṣẹ́ mọ̀.",
  about: [
    "Wíwá iṣẹ́ máa ń ṣòro, pàápàá tí àlàfo bá wà nínú ìtàn iṣẹ́ rẹ, tí ó bá jẹ́ iṣẹ́ owó-lọ́wọ́ (cash) ni o ti ń ṣe jù, tàbí tí o ti ń tọ́jú ẹbí rẹ. O ní ọgbọ́n ju bí o ṣe rò lọ, àwọn irinṣẹ́ ọ̀fẹ́ sì lè ràn ọ́ lọ́wọ́ láti fi wọ́n hàn.",
    "O máa wá ìrànlọ́wọ́ iṣẹ́ ọ̀fẹ́ nítòsí rẹ, yí ìrírí rẹ (tí wọ́n sanwó fún àti èyí tí wọn kò sanwó fún) padà sí àkọsílẹ̀ ọgbọ́n, kọ résumé ojú-ewé kan pẹ̀lú AI, mú un bá ìpolówó iṣẹ́ gidi mu, múra sílẹ̀ fún ìfọ̀rọ̀wánilẹ́nuwò, kí o sì kọ́ bí a ṣe ń dá jìbìtì iṣẹ́ mọ̀.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Wá ìpolówó iṣẹ́ gidi kan tí o lè béèrè fún. Lo olùrànlọ́wọ́ AI láti kọ résumé ojú-ewé kan tí ó bá ìpolówó yẹn mu, láìsí nọ́mbà àdáni kankan nínú rẹ̀. Lẹ́yìn náà, ní kí AI béèrè ìbéèrè ìfọ̀rọ̀wánilẹ́nuwò mẹ́ta tí ó wọ́pọ̀ lọ́wọ́ rẹ, dáhùn ọ̀kọ̀ọ̀kan sókè, kí o sì béèrè ìmọ̀ràn kan láti mú ìdáhùn kọ̀ọ̀kan dára sí i.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí ń wá iṣẹ́ ní àwọn àdúgbò tí kò ní ànító, pẹ̀lú àwọn tí àlàfo wà nínú ìtàn iṣẹ́ wọn, àwọn tí wọ́n ti ń ṣe iṣẹ́ owó-lọ́wọ́ (cash) jù, àwọn olùtọ́jú tí ń padà sí ibi iṣẹ́, àwọn ọ̀dọ́ àgbàlagbà, àti àwọn tí èdè mìíràn jẹ́ èdè kejì wọn.",
    startingPoint: "Wọ́n ní ìrírí iṣẹ́ àti ìgbésí ayé gidi, ṣùgbọ́n wọn kò lè rí i bí ọgbọ́n iṣẹ́. Wọ́n lè lo fóònù, bóyá kọ̀mpútà díẹ̀. Díẹ̀ ló ní résumé tuntun tàbí tí ó ti fi ìfọ̀rọ̀wánilẹ́nuwò ṣe àṣeṣe, àwọn onjìbìtì iṣẹ́ sì ti dojú kọ àwọn kan.",
    gap: "Àwọn agbanisíṣẹ́ ń retí résumé tí ó bá iṣẹ́ náà mu àti ìfọ̀rọ̀wánilẹ́nuwò tí ó ní ìgboyà, àwọn onjìbìtì iṣẹ́ sì ń dojú kọ àwọn tí ó nílò iṣẹ́. Àwọn akẹ́kọ̀ọ́ nílò láti fi ọgbọ́n gidi wọn hàn, lo àwọn irinṣẹ́ ọ̀fẹ́ àti ìrànlọ́wọ́ iṣẹ́ ọ̀fẹ́, kí wọ́n sì dáàbò bo ara wọn nígbà tí wọ́n ń wá iṣẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú (nǹkan bí kíláàsì 6)",
      "Ẹ̀rọ: smartphone, tàbí kọ̀mpútà ilé-ìkàwé tàbí ti ibùdó iṣẹ́",
      "Owó: àwọn irinṣẹ́ ọ̀fẹ́ àti ìrànlọ́wọ́ iṣẹ́ ọ̀fẹ́ nìkan",
      "Ìpamọ́: kò sí nọ́mbà Social Security, ọjọ́ ìbí tàbí nọ́mbà ìdánimọ̀ ní kíkún nínú AI tàbí lórí résumé",
      "Òtítọ́: gbogbo ọgbọ́n tí ó wà lórí résumé gbọ́dọ̀ jẹ́ òótọ́, kí àpẹẹrẹ gidi sì wà fún un"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí wọ́n jẹ́ tuntun sí olùrànlọ́wọ́ AI lè kọ́kọ́ ṣe \"Ìfihàn sí AI àti Agbára lórí Ẹ̀rọ Ayélujára\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú CareerOneStop tàbí nọ́mbà 1-877-US-2JOBS", action: "wá American Job Center tí ó sún mọ́ ọ jù àti ibì kan mìíràn tí o ti lè rí ìrànlọ́wọ́ iṣẹ́ ọ̀fẹ́", standard: "kí o sì kọ àdírẹ́sì, fóònù àti àkókò iṣẹ́ rẹ̀ sílẹ̀" },
    { id: "O2", condition: "Tí a bá fún ọ ní ìrírí rẹ tí wọ́n sanwó fún àti èyí tí wọn kò sanwó fún", action: "ṣe àkọsílẹ̀ àwọn ọgbọ́n iṣẹ́ tí ó fi hàn pẹ̀lú olùrànlọ́wọ́ AI", standard: "kí o sì pa àwọn ọgbọ́n tí o lè fún ní àpẹẹrẹ gidi nìkan mọ́" },
    { id: "O3", condition: "Tí a bá fún ọ ní àkọsílẹ̀ ọgbọ́n àti ìtàn rẹ", action: "kọ résumé ojú-ewé kan pẹ̀lú olùrànlọ́wọ́ AI àti irinṣẹ́ ìwé ọ̀fẹ́", standard: "pẹ̀lú gbogbo apá pàtàkì, láìsí nọ́mbà Social Security tàbí ọjọ́ ìbí" },
    { id: "O4", condition: "Tí a bá fún ọ ní ìpolówó iṣẹ́ gidi kan", action: "yí résumé rẹ padà kí ó bá àwọn ọgbọ́n àti ọ̀rọ̀ inú ìpolówó náà mu", standard: "ní lílo ìsọfúnni òótọ́ nìkan, kí o sì fi ẹ̀dà kan pamọ́ ní orúkọ iṣẹ́ yẹn" },
    { id: "O5", condition: "Pẹ̀lú olùrànlọ́wọ́ AI tí ó ń ṣe bí olùfọ̀rọ̀wánilẹ́nuwò", action: "dáhùn àwọn ìbéèrè ìfọ̀rọ̀wánilẹ́nuwò tí ó wọ́pọ̀ sókè pẹ̀lú ìtàn gidi kúkúrú", standard: "kí o sì béèrè ìmọ̀ràn kan fún ìdáhùn kọ̀ọ̀kan, kí o sì lò ó" },
    { id: "O6", condition: "Tí a bá fún ọ ní ìfilọ̀ iṣẹ́ tàbí ìpolówó iṣẹ́", action: "ṣàyẹ̀wò rẹ̀ fún àwọn àmì ìkìlọ̀ jìbìtì iṣẹ́, kí o sì fìdí ilé-iṣẹ́ náà múlẹ̀ fúnra rẹ", standard: "kí o tó pín nọ́mbà báńkì tàbí nọ́mbà Social Security kankan" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìmúrasílẹ̀",
      lessons: [
        {
          objectives: ["O1"],
          title: "Wíwá ìrànlọ́wọ́ iṣẹ́ ọ̀fẹ́ nítòsí rẹ",
          minutes: 4,
          goal: "Wá American Job Center tí ó sún mọ́ ọ jù àti ibì kan mìíràn tí o ti lè rí ìrànlọ́wọ́ iṣẹ́ ọ̀fẹ́.",
          text: [
            "American Job Center jẹ́ ibùdó iṣẹ́ ti ìjọba tí ó wà káàkiri orílẹ̀-èdè Amẹ́ríkà. Wọ́n ń ran àwọn tí ń wá iṣẹ́ lọ́wọ́ láti wá iṣẹ́, láti tọ́ wọn síbi iṣẹ́ (referral) àti láti fi wọ́n sí iṣẹ́. Ọ̀pọ̀ lára wọn tún ní kọ̀mpútà, ìdánilẹ́kọ̀ọ́ kúkúrú (workshop) àti ìsọfúnni nípa ìkọ́ṣẹ́. Àwọn iṣẹ́ kan ní òfin nípa ẹni tí ó yẹ, wọ́n sì lè yàtọ̀ láti ìpínlẹ̀ kan sí òmíràn.",
            "O lè wá ibùdó tí ó sún mọ́ ọ jù pẹ̀lú American Job Center Finder lórí CareerOneStop, ojú-òpó wẹ́ẹ̀bù ti U.S. Department of Labor (Ẹ̀ka Iṣẹ́ ti ìjọba Amẹ́ríkà), tàbí nípa pípe 1-877-US-2JOBS.",
            "Àwọn ilé-ìkàwé gbogbogbò náà ń ṣèrànwọ́ fún wíwá iṣẹ́, títẹ résumé jáde àti àkókò kọ̀mpútà ọ̀fẹ́. Ìrànlọ́wọ́ iṣẹ́ gidi kì í ní kí o sanwó kí o tó rí iṣẹ́ láéláé."
          ],
          steps: ["Ṣí American Job Center Finder lórí careeronestop.org, tàbí pe 1-877-US-2JOBS.", "Tẹ ZIP code tàbí orúkọ ìlú rẹ.", "Kọ àdírẹ́sì, fóònù àti àkókò iṣẹ́ ibùdó tí ó sún mọ́ ọ jù sílẹ̀.", "Béèrè lọ́wọ́ ilé-ìkàwé rẹ irú ìrànlọ́wọ́ wíwá iṣẹ́ tí wọ́n ní."],
          words: [["American Job Center", "ibùdó ìjọba tí ó ń ran àwọn ènìyàn lọ́wọ́ láti rí iṣẹ́ àti ìkọ́ṣẹ́."], ["Referral", "nígbà tí ibùdó kan bá rán ọ lọ sí iṣẹ́ tàbí ètò kan tí ó lè bá ọ mu."]],
          sources: [
            { name: "U.S. Department of Labor: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" },
            { name: "CareerOneStop: American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          slides: [
            { title: "American Job Centers", bullets: ["Ibùdó iṣẹ́ ti ìjọba káàkiri orílẹ̀-èdè", "Wíwá iṣẹ́, referral àti fífi ènìyàn sí iṣẹ́", "Àwọn iṣẹ́ kan yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀"] },
            { title: "Wá tìrẹ", bullets: ["American Job Center Finder lórí careeronestop.org", "Tàbí pe 1-877-US-2JOBS"] },
            { title: "Ìrànlọ́wọ́ ọ̀fẹ́ mìíràn", bullets: ["Ilé-ìkàwé gbogbogbò: kọ̀mpútà, títẹ̀wé jáde, ìrànlọ́wọ́ iṣẹ́", "Ìrànlọ́wọ́ iṣẹ́ gidi kì í gba owó kí o tó rí iṣẹ́"] }
          ],
          tryIt: "Wá American Job Center tí ó sún mọ́ ọ jù, kí o sì kọ àdírẹ́sì, nọ́mbà fóònù àti àkókò iṣẹ́ rẹ̀ sílẹ̀.",
          youCanNow: "wá ìrànlọ́wọ́ iṣẹ́ ọ̀fẹ́ ti ìjọba nítòsí rẹ.",
          quickCheck: [
            { objective: "O1", q: "Kí ni CareerOneStop?", options: ["Ojú-òpó wẹ́ẹ̀bù U.S. Department of Labor tí ó ń ràn ọ́ lọ́wọ́ láti wá ibùdó iṣẹ́", "Ilé-iṣẹ́ aṣojú iṣẹ́ tí o máa sanwó fún", "Ojú-òpó ìkànnì àjọlò", "Báńkì fún àwọn tí ń wá iṣẹ́"], answer: 0, why: "CareerOneStop jẹ́ ojú-òpó Department of Labor tí ó ní American Job Center Finder." },
            { objective: "O1", q: "O nílò láti tẹ résumé jáde kí o sì lo kọ̀mpútà lọ́fẹ̀ẹ́. Ibo mìíràn ni o lè lọ?", options: ["Ojú-òpó wẹ́ẹ̀bù tí ó ń gba owó ìforúkọsílẹ̀", "Ilé-ìkàwé gbogbogbò rẹ", "Ọ́fíìsì ilé àjèjì kan", "Ṣọ́ọ̀bù tí ń pààrọ̀ ṣẹ́ẹ̀kì sí owó"], answer: 1, why: "Àwọn ilé-ìkàwé gbogbogbò ń ṣèrànwọ́ fún wíwá iṣẹ́, títẹ̀wé jáde àti àkókò kọ̀mpútà ọ̀fẹ́." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dídárúkọ àwọn ọgbọ́n rẹ, tí wọ́n sanwó fún àti èyí tí wọn kò sanwó fún",
          minutes: 5,
          goal: "Yí ìrírí iṣẹ́ àti ìgbésí ayé rẹ padà sí àkọsílẹ̀ ọgbọ́n iṣẹ́.",
          text: [
            "Ọ̀pọ̀ ènìyàn máa ń sọ pé \"Mi ò ní ọgbọ́n kankan\" nígbà tí wọ́n ní in gan-an. Títọ́jú ọmọ tàbí òbí àgbàlagbà, ṣíṣàkóso owó ilé, sísè oúnjẹ fún ètò ṣọ́ọ̀ṣì, títún ọkọ̀ ṣe fún àwọn aládùúgbò tàbí ṣíṣe iṣẹ́ owó-lọ́wọ́ (cash) ń kọ́ni ní ọgbọ́n gidi.",
            "Sọ ohun tí o ti ṣe fún olùrànlọ́wọ́ AI ní ọ̀rọ̀ tó rọrùn, kí o sì ní kí ó yí i padà sí ọgbọ́n iṣẹ́. Fún àpẹẹrẹ: \"Fún ọdún márùn-ún, mo tọ́jú ìyá-ìyá mi, mo ṣàkóso oògùn àti ìpàdé dókítà rẹ̀, mo sì ṣàkóso owó ilé. Àwọn ọgbọ́n iṣẹ́ wo ni èyí fi hàn?\"",
            "Yan àwọn ọgbọ́n tí ó jẹ́ òótọ́, tí o sì lè fún ní àpẹẹrẹ. Má ṣe pa ohunkóhun mọ́ tí o kò lè ṣàlàyé nínú ìfọ̀rọ̀wánilẹ́nuwò."
          ],
          steps: ["Kọ gbogbo ohun tí o ti ṣe sílẹ̀: iṣẹ́ tí wọ́n sanwó fún, iṣẹ́ owó-lọ́wọ́, ìtọ́jú ẹbí, iṣẹ́ àṣesìnlú, ilé-ìwé.", "Ní kí AI ṣe àkọsílẹ̀ àwọn ọgbọ́n iṣẹ́ tí ọ̀kọ̀ọ̀kan fi hàn.", "Pa àwọn ọgbọ́n tí o lè fún ní àpẹẹrẹ gidi nìkan mọ́.", "Fi àkọsílẹ̀ náà pamọ́ fún résumé rẹ."],
          words: [["Ọgbọ́n (skill)", "ohun tí o mọ̀ bí a ṣe ń ṣe dáadáa, bí ṣíṣètò àkókò, iṣẹ́ ìránṣẹ́ oníbàárà tàbí lílo ẹ̀rọ owó (cash register)."], ["Ọgbọ́n tí ó ṣeé gbé lọ (transferable skill)", "ọgbọ́n láti apá kan ìgbésí ayé tí ó wúlò nínú iṣẹ́ mìíràn."]],
          slides: [
            { title: "O ní ọgbọ́n ju bí o ṣe rò lọ", bullets: ["Ìtọ́jú ẹbí, ṣíṣàkóso owó, sísè oúnjẹ fún ètò", "Iṣẹ́ owó-lọ́wọ́, iṣẹ́ àṣesìnlú, títún nǹkan ṣe"] },
            { title: "Ní kí AI dárúkọ wọn", bullets: ["Ṣàpèjúwe ohun tí o ṣe ní ọ̀rọ̀ tó rọrùn", "\"Àwọn ọgbọ́n iṣẹ́ wo ni èyí fi hàn?\""] },
            { title: "Jẹ́ kí ó jẹ́ òótọ́", bullets: ["Pa àwọn ọgbọ́n tí o lè fún ní àpẹẹrẹ mọ́", "Yọ ohunkóhun tí o kò lè ṣàlàyé kúrò"] }
          ],
          tryIt: "Kọ nǹkan mẹ́ta tí o ti ṣe sílẹ̀ (tí wọ́n sanwó fún tàbí tí wọn kò sanwó fún). Ní kí olùrànlọ́wọ́ AI dárúkọ àwọn ọgbọ́n iṣẹ́ tí ọ̀kọ̀ọ̀kan fi hàn. Pa àwọn tí o lè fún ní àpẹẹrẹ gidi mọ́.",
          youCanNow: "yí ìrírí rẹ tí wọ́n sanwó fún àti èyí tí wọn kò sanwó fún padà sí àkọsílẹ̀ ọgbọ́n iṣẹ́ tí ó jẹ́ òótọ́.",
          quickCheck: [
            { objective: "O2", q: "Èwo ni ìrírí tí wọn kò sanwó fún tí ó ń kọ́ni ní ọgbọ́n iṣẹ́?", options: ["Wíwo tẹlifíṣọ̀n", "Sísùn pẹ́", "Sísè oúnjẹ fún ètò ṣọ́ọ̀ṣì", "Wíwo ìkànnì àjọlò"], answer: 2, why: "Sísè oúnjẹ fún ètò kan fi ọgbọ́n ṣíṣètò, iṣẹ́ àjọṣe àti bíbójútó oúnjẹ hàn." },
            { objective: "O2", q: "AI sọ pé títọ́jú ọmọ rẹ fi \"project management\" hàn, ṣùgbọ́n o kò lè fún un ní àpẹẹrẹ. Kí ni o máa ṣe?", options: ["Pa á mọ́; ó dún dáadáa", "Hùmọ̀ àpẹẹrẹ kan", "Fi í kún un lẹ́ẹ̀mejì", "Yọ ọ́ kúrò nínú àkọsílẹ̀ rẹ"], answer: 3, why: "Pa àwọn ọgbọ́n tí o lè ṣàlàyé pẹ̀lú àpẹẹrẹ gidi nínú ìfọ̀rọ̀wánilẹ́nuwò nìkan mọ́." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kíkọ résumé ojú-ewé kan pẹ̀lú AI",
          minutes: 6,
          goal: "Kọ résumé ojú-ewé kan tó rọrùn pẹ̀lú olùrànlọ́wọ́ AI àti irinṣẹ́ ìwé ọ̀fẹ́.",
          text: [
            "Résumé jẹ́ àkópọ̀ ojú-ewé kan ti àwọn ọgbọ́n àti ìrírí rẹ. Résumé tó rọrùn tí ó sì mọ́ dára ju èyí tí a ṣe lọ́ṣọ̀ọ́ jù lọ.",
            "Fún AI ní àkọsílẹ̀ ọgbọ́n rẹ, àwọn iṣẹ́ tàbí ohun tí o ti ṣe pẹ̀lú ọjọ́ wọn, àti ìkọ́ṣẹ́ tàbí ilé-ìwé èyíkéyìí. Béèrè résumé ojú-ewé kan tí ó ní àwọn apá wọ̀nyí: ìlà ìkànsí, àkópọ̀ kúkúrú, ọgbọ́n, ìrírí, àti ẹ̀kọ́ tàbí ìkọ́ṣẹ́.",
            "Má ṣe fi nọ́mbà Social Security, ọjọ́ ìbí tàbí nọ́mbà ìdánimọ̀ ní kíkún sórí résumé tàbí sínú AI. Tẹ fóònù àti email rẹ sínú ìwé ìkẹyìn fúnra rẹ. Da èsì náà kọ sínú irinṣẹ́ ọ̀fẹ́ bí Google Docs tàbí Microsoft Word lórí wẹ́ẹ̀bù, kí o sì fi í pamọ́ bí PDF láti fi ránṣẹ́."
          ],
          steps: ["Fún AI ní àwọn ọgbọ́n rẹ, iṣẹ́ tàbí ohun tí o ti ṣe pẹ̀lú ọjọ́ wọn, àti ìkọ́ṣẹ́.", "Béèrè résumé ojú-ewé kan: ìlà ìkànsí, àkópọ̀, ọgbọ́n, ìrírí, ẹ̀kọ́.", "Da á kọ sínú Google Docs tàbí Word lórí wẹ́ẹ̀bù.", "Fi fóònù àti email rẹ kún un fúnra rẹ; má ṣe fi nọ́mbà Social Security àti ọjọ́ ìbí sí i.", "Kà á sókè, ṣàtúnṣe àwọn àṣìṣe, kí o sì fi í pamọ́ bí PDF."],
          words: [["Résumé", "àkópọ̀ ojú-ewé kan ti àwọn ọgbọ́n, iṣẹ́ àti ìkọ́ṣẹ́ rẹ fún àwọn agbanisíṣẹ́."], ["PDF", "irú fáìlì kan tí ó ń jẹ́ kí ìwé rẹ rí bákan náà lórí ẹ̀rọ èyíkéyìí."]],
          slides: [
            { title: "Èyí tó rọrùn tí ó sì mọ́ ló dára jù", bullets: ["Ojú-ewé kan", "Ó rọrùn láti kà"] },
            { title: "Apá márùn-ún", bullets: ["Ìlà ìkànsí àti àkópọ̀ kúkúrú", "Ọgbọ́n", "Ìrírí", "Ẹ̀kọ́ tàbí ìkọ́ṣẹ́"] },
            { title: "Jẹ́ kí ó wà láìléwu", bullets: ["Kò sí nọ́mbà Social Security tàbí ọjọ́ ìbí", "Fi fóònù àti email kún un fúnra rẹ", "Fi í pamọ́ bí PDF láti fi ránṣẹ́"] }
          ],
          tryIt: "Lo àkọsílẹ̀ ọgbọ́n rẹ láti Ẹ̀kọ́ 2 láti béèrè résumé ojú-ewé kan lọ́wọ́ olùrànlọ́wọ́ AI. Da á kọ sínú Google Docs tàbí Word lórí wẹ́ẹ̀bù, kí o sì kà á sókè.",
          youCanNow: "kọ résumé ojú-ewé kan tó rọrùn pẹ̀lú AI àti irinṣẹ́ ìwé ọ̀fẹ́.",
          quickCheck: [
            { objective: "O3", q: "Àwọn apá wo ló yẹ kí ó wà lórí résumé tó rọrùn?", options: ["Ìlà ìkànsí, àkópọ̀, ọgbọ́n, ìrírí, ẹ̀kọ́ tàbí ìkọ́ṣẹ́", "Nọ́mbà Social Security àti ọjọ́ ìbí", "Fọ́tò tí ó gba ojú-ewé kan", "Ìsọfúnni báńkì rẹ"], answer: 0, why: "Àwọn apá márùn-ún yìí fún àwọn agbanisíṣẹ́ ní ohun tí wọ́n nílò lórí ojú-ewé kan." },
            { objective: "O3", q: "Ìgbà wo ni o yẹ kí o fi fóònù àti email rẹ kún résumé?", options: ["Kọ́kọ́ tẹ wọ́n sínú AI", "Tẹ wọ́n sínú ìwé ìkẹyìn fúnra rẹ", "Má ṣe fi wọ́n sí i", "Fi wọ́n sórí ayélujára"], answer: 1, why: "Fífi wọ́n kún un fúnra rẹ nínú ìwé náà ń pa ìsọfúnni àdáni mọ́ kúrò nínú AI." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìmúrasílẹ̀",
        questions: [
          { objective: "O1", q: "Báwo ni o ṣe lè wá American Job Center tí ó sún mọ́ ọ jù?", options: ["Ọ̀rọ̀ text láti ọ̀dọ̀ àjèjì kan", "American Job Center Finder lórí CareerOneStop, tàbí 1-877-US-2JOBS", "Ìpolówó tí ó yọ jáde lójijì", "Ojú-òpó wẹ́ẹ̀bù tí o máa sanwó fún"], answer: 1, why: "Ìwọ̀nyí ni àwọn ọ̀nà ti ìjọba láti wá ibùdó kan." },
          { objective: "O1", q: "Ojú-òpó wẹ́ẹ̀bù kan sọ pé o gbọ́dọ̀ san owó kí o tó rí iṣẹ́. Èyí jẹ́:", options: ["Ohun tí ó wọ́pọ̀", "Ohun tí òfin béèrè", "Àmì ìkìlọ̀; ìrànlọ́wọ́ iṣẹ́ gidi kì í gba owó kí o tó rí iṣẹ́", "Àǹfààní tó dára"], answer: 2, why: "Àwọn agbanisíṣẹ́ olóòótọ́ àti àwọn ibùdó iṣẹ́ kì í gba owó kí o tó rí iṣẹ́." },
          { objective: "O2", q: "O tọ́jú ìyá-ìyá rẹ fún ọdún márùn-ún. Lórí résumé, èyí fi hàn:", options: ["Ọgbọ́n gidi bí ṣíṣètò àkókò àti ṣíṣàkóso oògùn", "Kò sí ohun tó wúlò", "Àlàfo tí o gbọ́dọ̀ fi pamọ́", "Sísè oúnjẹ nìkan"], answer: 0, why: "Ìtọ́jú ẹbí ń kọ́ni ní ọgbọ́n gidi tí ó ṣeé gbé lọ." },
          { objective: "O2", q: "AI ṣe àkọsílẹ̀ ọgbọ́n kan tí o kò ní gan-an. O yẹ kí o:", options: ["Pa á mọ́", "Hùmọ̀ àpẹẹrẹ kan", "Fi méjì mìíràn kún un", "Yọ ọ́ kúrò"], answer: 3, why: "Pa ohun tí o lè ṣàlàyé nínú ìfọ̀rọ̀wánilẹ́nuwò nìkan mọ́." },
          { objective: "O3", q: "Èwo ni KÒ yẹ kí ó wà lórí résumé rẹ tàbí nínú AI?", options: ["Àwọn ọgbọ́n rẹ", "Nọ́mbà Social Security rẹ", "Orúkọ àwọn ipò iṣẹ́ rẹ", "Ìkọ́ṣẹ́ rẹ"], answer: 1, why: "Nọ́mbà Social Security àti ọjọ́ ìbí kò yẹ lórí résumé." }
        ]
      }
    },
    {
      name: "Orí 2: Bíbéèrè fún iṣẹ́ àti ìfọ̀rọ̀wánilẹ́nuwò",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mímú résumé rẹ bá ìpolówó iṣẹ́ mu",
          minutes: 5,
          goal: "Yí résumé rẹ padà kí ó bá ohun tí ìpolówó iṣẹ́ gidi kan béèrè mu.",
          text: [
            "Àwọn agbanisíṣẹ́ fẹ́ rí i pé o bá iṣẹ́ wọn mu. Ìpolówó iṣẹ́ máa ń ṣe àkọsílẹ̀ ohun tí wọ́n nílò. Nígbà tí résumé rẹ bá lo àwọn ọgbọ́n àti ọ̀rọ̀ kan náà, ó rọrùn láti rí i pé ẹ bára mu.",
            "Lẹ ìpolówó iṣẹ́ náà àti résumé rẹ sínú AI, kí o sì béèrè: \"Àwọn ọgbọ́n wo nínú ìpolówó yìí ni mo ti fi hàn? Dábàá àwọn ìyípadà sí résumé mi kí ó lè bá a mu sí i, ní lílo ìsọfúnni òótọ́ nìkan.\"",
            "Jẹ́ olóòótọ́. Mímú un bá a mu túmọ̀ sí fífi àwọn ọgbọ́n gidi rẹ hàn ní ọ̀rọ̀ agbanisíṣẹ́, kì í ṣe fífi àwọn nǹkan tí o kò ṣe rí kún un."
          ],
          steps: ["Wá ìpolówó iṣẹ́ gidi kan tí o lè béèrè fún.", "Lẹ ìpolówó náà àti résumé rẹ sínú AI (láìsí nọ́mbà àdáni).", "Béèrè àwọn ọgbọ́n tí ó bára mu àti ohun tí o máa yí padà, ní lílo ìsọfúnni òótọ́ nìkan.", "Ṣe àtúnṣe résumé rẹ, kí o sì fi ẹ̀dà tuntun pamọ́ ní orúkọ iṣẹ́ yẹn."],
          words: [["Ìpolówó iṣẹ́ (job posting)", "ìkéde láti ọ̀dọ̀ agbanisíṣẹ́ tí ó ṣàpèjúwe iṣẹ́ kan àti ohun tí wọ́n nílò."], ["Ọ̀rọ̀ pàtàkì (keywords)", "àwọn ọ̀rọ̀ pàtàkì láti inú ìpolówó iṣẹ́, bí \"customer service\" (iṣẹ́ ìránṣẹ́ oníbàárà) tàbí \"forklift\"."]],
          slides: [
            { title: "Fi hàn pé ẹ bára mu", bullets: ["Ìpolówó náà ṣe àkọsílẹ̀ ohun tí wọ́n nílò", "Lo àwọn ọgbọ́n àti ọ̀rọ̀ kan náà"] },
            { title: "Béèrè lọ́wọ́ AI", bullets: ["Lẹ ìpolówó náà àti résumé rẹ", "\"Àwọn ọgbọ́n wo ni mo ti fi hàn?\"", "\"Dábàá àwọn ìyípadà òótọ́ kí ó lè bá a mu sí i.\""] },
            { title: "Jẹ́ olóòótọ́", bullets: ["Ọgbọ́n gidi rẹ, ọ̀rọ̀ tiwọn", "Fi ẹ̀dà kan pamọ́ ní orúkọ iṣẹ́ kọ̀ọ̀kan"] }
          ],
          tryIt: "Wá ìpolówó iṣẹ́ gidi kan nítòsí rẹ. Ní kí olùrànlọ́wọ́ AI fi wé résumé rẹ, kí ó sì dábàá àwọn ìyípadà òótọ́. Fi ẹ̀dà tuntun pamọ́ fún iṣẹ́ yẹn.",
          youCanNow: "mú résumé rẹ bá ìpolówó iṣẹ́ gidi kan mu pẹ̀lú òótọ́.",
          quickCheck: [
            { objective: "O4", q: "Kí ni \"mímú résumé bá ìpolówó mu\" túmọ̀ sí?", options: ["Fífi àwọn iṣẹ́ tí o kò ṣe rí kún un", "Lílo irú lẹ́tà kan náà tí agbanisíṣẹ́ lò", "Fífi àwọn ọgbọ́n gidi rẹ hàn ní ọ̀rọ̀ agbanisíṣẹ́", "Ṣíṣe é ní ojú-ewé méjì"], answer: 2, why: "Mímú un bá a mu ń fi àwọn ọgbọ́n òótọ́ rẹ hàn pẹ̀lú àwọn ọ̀rọ̀ tí ìpolówó náà lò." },
            { objective: "O4", q: "Ìpolówó náà béèrè \"customer service\", o sì ran àwọn oníbàárà lọ́wọ́ níbi iṣẹ́ owó-lọ́wọ́ kan. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀", "Sọ pé ìwọ lo ṣàkóso ṣọ́ọ̀bù náà", "Kọ \"kò sí ìrírí\"", "Ṣàpèjúwe rẹ̀ bí customer service, pẹ̀lú àwọn òtítọ́ rẹ̀"], answer: 3, why: "Ìrírí gidi rẹ bá ọ̀rọ̀ pàtàkì wọn mu, nítorí náà sọ ọ́ pẹ̀lú òótọ́ ní ọ̀rọ̀ tiwọn." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣe àṣeṣe fún ìfọ̀rọ̀wánilẹ́nuwò",
          minutes: 5,
          goal: "Fi ìdáhùn sí àwọn ìbéèrè ìfọ̀rọ̀wánilẹ́nuwò tí ó wọ́pọ̀ ṣe àṣeṣe pẹ̀lú olùrànlọ́wọ́ AI.",
          text: [
            "Ìfọ̀rọ̀wánilẹ́nuwò máa ń rọrùn sí i pẹ̀lú àṣeṣe. Olùrànlọ́wọ́ AI lè ṣe bí olùfọ̀rọ̀wánilẹ́nuwò. Béèrè: \"Ṣe bí olùfọ̀rọ̀wánilẹ́nuwò fún iṣẹ́ yìí. Béèrè ìbéèrè kan tí ó wọ́pọ̀ lẹ́ẹ̀kan, kí o sì dúró de ìdáhùn mi. Lẹ́yìn ìdáhùn kọ̀ọ̀kan, fún mi ní ìmọ̀ràn kan.\"",
            "Àwọn ìbéèrè tí ó wọ́pọ̀ ni: \"Sọ fún mi nípa ara rẹ.\" \"Kí ló dé tí o fi fẹ́ iṣẹ́ yìí?\" \"Sọ fún mi nípa ìgbà kan tí o yanjú ìṣòro kan.\" Lo ìtàn gidi kúkúrú: ohun tí ó ṣẹlẹ̀, ohun tí o ṣe, àti bí ó ṣe parí.",
            "Sọ àwọn ìdáhùn rẹ sókè, má ṣe rò wọ́n lọ́kàn nìkan. Tí àlàfo bá wà nínú ìtàn iṣẹ́ rẹ, fi gbólóhùn òótọ́ kúkúrú kan nípa rẹ̀ ṣe àṣeṣe, lẹ́yìn náà sọ̀rọ̀ nípa ohun tí o ti ṣetán láti ṣe báyìí."
          ],
          steps: ["Ní kí AI ṣe bí olùfọ̀rọ̀wánilẹ́nuwò fún ìpolówó iṣẹ́ rẹ.", "Dáhùn ìbéèrè kan lẹ́ẹ̀kan, sókè, lẹ́yìn náà tẹ ẹ́ sínú rẹ̀.", "Lo ìtàn gidi kúkúrú: ohun tí ó ṣẹlẹ̀, ohun tí o ṣe, èsì rẹ̀.", "Béèrè ìmọ̀ràn kan lẹ́yìn ìdáhùn kọ̀ọ̀kan, kí o sì tún gbìyànjú."],
          words: [["Ìfọ̀rọ̀wánilẹ́nuwò (interview)", "ìpàdé tí agbanisíṣẹ́ ti ń béèrè ìbéèrè lọ́wọ́ rẹ láti pinnu bóyá yóò gbà ọ́ síṣẹ́."], ["Àlàfo iṣẹ́ (work gap)", "àkókò tí o kò ṣe iṣẹ́ tí wọ́n ń sanwó fún."]],
          slides: [
            { title: "AI lè ṣe bí olùfọ̀rọ̀wánilẹ́nuwò", bullets: ["Ìbéèrè kan lẹ́ẹ̀kan", "Ìmọ̀ràn kan lẹ́yìn ìdáhùn kọ̀ọ̀kan"] },
            { title: "Àwọn ìbéèrè tí ó wọ́pọ̀", bullets: ["\"Sọ fún mi nípa ara rẹ.\"", "\"Kí ló dé tí o fi fẹ́ iṣẹ́ yìí?\"", "\"Sọ fún mi nípa ìgbà kan tí o yanjú ìṣòro kan.\""] },
            { title: "Fi ìtàn kúkúrú dáhùn", bullets: ["Ohun tí ó ṣẹlẹ̀", "Ohun tí o ṣe", "Bí ó ṣe parí"] },
            { title: "Ṣe àṣeṣe sókè", bullets: ["Sọ ọ́ jáde, má ṣe rò ó lọ́kàn nìkan", "Àlàfo iṣẹ́: gbólóhùn òótọ́ kan, lẹ́yìn náà tẹ̀ síwájú"] }
          ],
          tryIt: "Ní kí olùrànlọ́wọ́ AI fọ̀rọ̀ wá ọ lẹ́nu wò fún iṣẹ́ láti Ẹ̀kọ́ 4. Dáhùn ìbéèrè méjì sókè, tẹ àwọn ìdáhùn rẹ, kí o sì béèrè ìmọ̀ràn kan fún ọ̀kọ̀ọ̀kan.",
          youCanNow: "fi ìdáhùn ìfọ̀rọ̀wánilẹ́nuwò ṣe àṣeṣe pẹ̀lú AI, kí o sì mú wọn dára sí i pẹ̀lú èsì tí o gbà.",
          quickCheck: [
            { objective: "O5", q: "Kí ni o yẹ kí o ní kí AI ṣe lẹ́yìn ìdáhùn àṣeṣe kọ̀ọ̀kan?", options: ["Fún ọ ní ìmọ̀ràn kan láti mú un dára sí i", "Kọ ìdáhùn rẹ fún ọ", "Parí ìfọ̀rọ̀wánilẹ́nuwò náà", "Fò lọ sí iṣẹ́ tó kàn"], answer: 0, why: "Ìmọ̀ràn kan lẹ́ẹ̀kan ń ràn ọ́ lọ́wọ́ láti mú ìdáhùn kọ̀ọ̀kan dára sí i." },
            { objective: "O5", q: "Olùfọ̀rọ̀wánilẹ́nuwò béèrè nípa àlàfo ọdún méjì nígbà tí o ń tọ́jú ẹbí rẹ. Kí ni o máa sọ?", options: ["Hùmọ̀ iṣẹ́ kan", "Gbólóhùn òótọ́ kúkúrú kan, lẹ́yìn náà ohun tí o ti ṣetán láti ṣe báyìí", "Kọ̀ láti dáhùn", "Sọ̀rọ̀ nípa rẹ̀ fún ìṣẹ́jú mẹ́wàá"], answer: 1, why: "Ìdáhùn òótọ́ kúkúrú, lẹ́yìn náà ohun tí o lè ṣe báyìí, ló lágbára jù." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dídá jìbìtì iṣẹ́ mọ̀",
          minutes: 5,
          goal: "Dá àwọn àmì ìkìlọ̀ jìbìtì iṣẹ́ mọ̀, kí o sì mọ ohun tí o máa ṣe.",
          text: [
            "Àwọn onjìbìtì iṣẹ́ ń dojú kọ àwọn tí ó nílò iṣẹ́. Federal Trade Commission (FTC) kìlọ̀ pé àwọn agbanisíṣẹ́ olóòótọ́ kì í ní kí o sanwó kí o tó rí iṣẹ́ láéláé.",
            "Àwọn àmì ìkìlọ̀ mìíràn: wọ́n fi ṣẹ́ẹ̀kì ránṣẹ́ sí ọ, wọ́n sì ní kí o dá apá kan owó náà padà tàbí kí o ra gift card; wọ́n ṣèlérí owó púpọ̀ fún iṣẹ́ díẹ̀; iṣẹ́ náà jẹ́ gbígba ẹrù àti títún un fi ránṣẹ́; tàbí ìfilọ̀ náà dé láìròtẹ́lẹ̀.",
            "Tí ìfilọ̀ kan bá dára jù láti jẹ́ òótọ́, dúró. Wá ilé-iṣẹ́ náà fúnra rẹ, pe nọ́mbà fóònù wọn gidi, tàbí béèrè ní American Job Center rẹ. Má ṣe fún wọn ní nọ́mbà báńkì tàbí nọ́mbà Social Security rẹ láéláé kí o tó fìdí rẹ̀ múlẹ̀ pé iṣẹ́ gidi ni."
          ],
          steps: ["Má ṣe sanwó láti rí iṣẹ́ láéláé.", "Má ṣe fi ṣẹ́ẹ̀kì sí báńkì kí o sì dá owó padà láéláé.", "Wá ilé-iṣẹ́ náà fúnra rẹ, kí o sì pe nọ́mbà wọn gidi.", "Béèrè ní American Job Center rẹ tí o kò bá dá ọ lójú."],
          words: [["Jìbìtì ṣẹ́ẹ̀kì ayédèrú (fake check scam)", "onjìbìtì fi ṣẹ́ẹ̀kì ránṣẹ́, ó ní kí o dá apá kan padà, lẹ́yìn náà ṣẹ́ẹ̀kì náà kò ṣiṣẹ́, o sì jẹ báńkì ní gbèsè."], ["FTC", "Federal Trade Commission, àjọ ìjọba Amẹ́ríkà tí ó ń dáàbò bo àwọn oníbàárà lọ́wọ́ jìbìtì."]],
          sources: [{ name: "FTC: Job Scams", url: "https://consumer.ftc.gov/articles/job-scams" }],
          slides: [
            { title: "Má ṣe sanwó láti rí iṣẹ́ láéláé", bullets: ["FTC: àwọn agbanisíṣẹ́ olóòótọ́ kì í ní kí o sanwó", "Kò sí owó fún ohun èlò, ìkọ́ṣẹ́ tàbí ìdánilójú"] },
            { title: "Àwọn àmì ìkìlọ̀ mìíràn", bullets: ["Dá owó padà láti inú ṣẹ́ẹ̀kì", "Owó púpọ̀ fún iṣẹ́ díẹ̀", "Títún ẹrù fi ránṣẹ́", "Ìfilọ̀ tí ó dé láìròtẹ́lẹ̀"] },
            { title: "Dáàbò bo ara rẹ", bullets: ["Wá ilé-iṣẹ́ náà fúnra rẹ", "Pe nọ́mbà wọn gidi", "Béèrè ní American Job Center rẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: pẹ̀lú résumé rẹ tí ó bá ìpolówó gidi kan mu, ní kí AI béèrè ìbéèrè ìfọ̀rọ̀wánilẹ́nuwò mẹ́ta lọ́wọ́ rẹ, dáhùn ọ̀kọ̀ọ̀kan sókè, kí o sì béèrè ìmọ̀ràn kan láti mú ìdáhùn kọ̀ọ̀kan dára sí i. Ṣàyẹ̀wò ìpolówó náà fún àmì ìkìlọ̀ jìbìtì èyíkéyìí.",
          youCanNow: "béèrè fún iṣẹ́ gidi pẹ̀lú résumé tí ó bá a mu, fi ìfọ̀rọ̀wánilẹ́nuwò ṣe àṣeṣe, kí o sì dá jìbìtì iṣẹ́ mọ̀.",
          quickCheck: [
            { objective: "O6", q: "Èwo ni àmì ìkìlọ̀ jìbìtì iṣẹ́?", options: ["Ìpolówó tí ó ní àdírẹ́sì ilé-iṣẹ́ gidi", "Ìfọ̀rọ̀wánilẹ́nuwò ní ọ́fíìsì ilé-iṣẹ́ náà", "Ìlérí owó púpọ̀ fún iṣẹ́ díẹ̀ gan-an", "Iṣẹ́ tí ó wà ní American Job Center rẹ"], answer: 2, why: "Ìfilọ̀ tí ó ṣèlérí owó púpọ̀ fún iṣẹ́ díẹ̀ jẹ́ àmì jìbìtì tí ó wọ́pọ̀." },
            { objective: "O6", q: "\"Agbanisíṣẹ́\" tuntun kan fi text béèrè nọ́mbà báńkì rẹ kí ìfọ̀rọ̀wánilẹ́nuwò kankan tó wáyé. Kí ni o máa ṣe?", options: ["Fi í ránṣẹ́ kí wọ́n lè sanwó fún ọ kíákíá", "Fi ìdajì nọ́mbà náà ránṣẹ́", "Ní kí ọ̀rẹ́ kan fi tirẹ̀ ránṣẹ́", "Dúró, kí o sì wá ilé-iṣẹ́ náà fúnra rẹ"], answer: 3, why: "Má ṣe fún wọn ní nọ́mbà báńkì rẹ láéláé kí o tó fìdí rẹ̀ múlẹ̀ pé iṣẹ́ gidi ni." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Bíbéèrè fún iṣẹ́ àti ìfọ̀rọ̀wánilẹ́nuwò",
        questions: [
          { objective: "O4", q: "Kí ló dé tí o fi máa mú résumé rẹ bá ìpolówó iṣẹ́ mu?", options: ["Kí agbanisíṣẹ́ lè rí i pé o bá iṣẹ́ náà mu", "Láti jẹ́ kí ó gùn sí i", "Láti fi àwọn ọgbọ́n tí o kò ní kún un", "Kò wúlò"], answer: 0, why: "Mímú un bá a mu ń fi hàn pé o bá iṣẹ́ náà mu ní ọ̀rọ̀ agbanisíṣẹ́." },
          { objective: "O4", q: "Nígbà tí o bá ń mú un bá a mu, o yẹ kí o:", options: ["Fi àwọn iṣẹ́ tí o kò ṣe rí kún un", "Da ìpolówó náà kọ ní ọ̀rọ̀ sí ọ̀rọ̀", "Lo àwọn ọgbọ́n gidi rẹ ní ọ̀rọ̀ agbanisíṣẹ́", "Yọ gbogbo ìrírí rẹ kúrò"], answer: 2, why: "Mímú un bá a mu pẹ̀lú òótọ́ ni ohun tí a fẹ́." },
          { objective: "O5", q: "Kí ni ọ̀nà tó dára láti dáhùn \"Sọ fún mi nípa ìgbà kan tí o yanjú ìṣòro kan\"?", options: ["\"Mi ò ní ìṣòro rí.\"", "Àkọsílẹ̀ gígùn ti àwọn iṣẹ́", "\"Mi ò mọ̀.\"", "Ìtàn gidi kúkúrú: ohun tí ó ṣẹlẹ̀, ohun tí o ṣe, bí ó ṣe parí"], answer: 3, why: "Ìtàn kúkúrú ń fi ọgbọ́n rẹ hàn kedere." },
          { objective: "O6", q: "\"Ilé-iṣẹ́\" kan fi ṣẹ́ẹ̀kì ránṣẹ́ sí ọ, ó sì ní kí o fi apá kan rẹ̀ ra gift card. Èyí jẹ́:", options: ["Iṣẹ́ ọjọ́ àkọ́kọ́ tí ó wọ́pọ̀", "Jìbìtì ṣẹ́ẹ̀kì ayédèrú", "Owó ẹ̀bùn", "Ìkọ́ṣẹ́"], answer: 1, why: "FTC ka èyí sí jìbìtì iṣẹ́ tí ó wọ́pọ̀." },
          { objective: "O6", q: "O kò dá ọ lójú bóyá ìfilọ̀ iṣẹ́ kan jẹ́ gidi. Kí ni o máa ṣe?", options: ["Wá ilé-iṣẹ́ náà fúnra rẹ, kí o sì pe nọ́mbà wọn gidi", "Fi nọ́mbà báńkì rẹ ránṣẹ́ láti ṣàyẹ̀wò", "San owó náà láti mọ̀", "Gbà á lẹ́sẹ̀kẹsẹ̀"], answer: 0, why: "Ṣíṣàyẹ̀wò fúnra rẹ ń dáàbò bò ọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Iṣẹ́ àti Ìmúrasílẹ̀ fún Ibi Iṣẹ́",
    questions: [
      { objective: "O1", q: "Àwọn American Job Center ń ṣèrànwọ́ fún:", options: ["Owó ẹ̀yáwó ọkọ̀", "Wíwá iṣẹ́, referral àti fífi ènìyàn sí iṣẹ́", "Fífi owó-orí sílẹ̀ nìkan", "Rírà ilé"], answer: 1, why: "Ibùdó iṣẹ́ ti ìjọba ni wọ́n." },
      { objective: "O1", q: "Ta ni ó ń ṣe CareerOneStop?", options: ["Ilé-iṣẹ́ eré fídíò kan", "Báńkì kan", "U.S. Department of Labor", "Ojú-òpó ìkànnì àjọlò kan"], answer: 2, why: "Ojú-òpó wẹ́ẹ̀bù Department of Labor ni." },
      { objective: "O1", q: "Nọ́mbà fóònù wo ló ń ràn ọ́ lọ́wọ́ láti wá ibùdó iṣẹ́?", options: ["1-877-US-2JOBS", "911", "Nọ́mbà láti inú ìpolówó tí ó yọ jáde", "Nọ́mbà báńkì rẹ"], answer: 0, why: "1-877-US-2JOBS ni nọ́mbà ìrànlọ́wọ́ iṣẹ́ ti Department of Labor." },
      { objective: "O2", q: "Ìrírí wo ló lè kà sí ọgbọ́n iṣẹ́?", options: ["Iṣẹ́ ọ́fíìsì nìkan", "Iṣẹ́ tí ó nílò ìwé-ẹ̀rí nìkan", "Kò sí èyí tí wọn kò sanwó fún", "Ìtọ́jú ẹbí, iṣẹ́ àṣesìnlú, iṣẹ́ owó-lọ́wọ́ àti iṣẹ́ tí wọ́n sanwó fún"], answer: 3, why: "Iṣẹ́ tí wọn kò sanwó fún àti iṣẹ́ tí kì í ṣe ti ọ́fíìsì ń kọ́ni ní ọgbọ́n gidi." },
      { objective: "O2", q: "Ọgbọ́n tí ó ṣeé gbé lọ (transferable skill) ni:", options: ["Ọgbọ́n tí ó ń gbé owó kiri", "Ọgbọ́n láti apá kan ìgbésí ayé tí ó wúlò nínú iṣẹ́ mìíràn", "Káàdì ọkọ̀ èrò", "Irú résumé kan"], answer: 1, why: "Ó ń kọjá láti ibì kan sí òmíràn." },
      { objective: "O2", q: "Àwọn ọgbọ́n wo ló yẹ kí ó wà nínú àkọsílẹ̀ rẹ?", options: ["Àwọn tí o lè fún ní àpẹẹrẹ gidi", "Gbogbo ohun tí AI dábàá", "Àwọn tí ó dún bí ohun ńlá", "Àwọn láti inú résumé ọ̀rẹ́ rẹ"], answer: 0, why: "O gbọ́dọ̀ lè ṣàlàyé wọn." },
      { objective: "O3", q: "Résumé tó dára jẹ́:", options: ["Ojú-ewé márùn-ún", "Èyí tí àwòrán kún inú rẹ̀", "Ojú-ewé kan, tó rọrùn, tí ó sì mọ́", "Èyí tí a fi ọwọ́ kọ"], answer: 2, why: "Èyí tí ó kúrú tí ó sì yé ló rọrùn jù fún àwọn agbanisíṣẹ́." },
      { objective: "O3", q: "Èwo ni kò gbọdọ̀ wà lórí résumé láéláé?", options: ["Ọgbọ́n", "Ìrírí", "Ìkọ́ṣẹ́", "Nọ́mbà Social Security"], answer: 3, why: "Nọ́mbà àdáni kì í wà lórí résumé." },
      { objective: "O3", q: "Kí ló dé tí o fi máa fi résumé rẹ pamọ́ bí PDF?", options: ["Ó ń jẹ́ kí ó rí bákan náà lórí ẹ̀rọ èyíkéyìí", "Ó ń jẹ́ kí ó gùn sí i", "Ó ń fi àwọ̀ kún un", "Àwọn agbanisíṣẹ́ ń sanwó fún un"], answer: 0, why: "PDF máa ń pa ìrísí ìwé mọ́ bí ó ti wà." },
      { objective: "O3", q: "Ibo ni o ti lè kọ résumé lọ́fẹ̀ẹ́?", options: ["Ilé-iṣẹ́ aṣàpẹẹrẹ tí o máa sanwó fún", "Google Docs tàbí Word lórí wẹ́ẹ̀bù", "Ọ̀rọ̀ text", "Ẹ̀rọ ìṣirò"], answer: 1, why: "Àwọn méjèèjì jẹ́ irinṣẹ́ ìwé ọ̀fẹ́." },
      { objective: "O4", q: "Ọ̀rọ̀ pàtàkì (keywords) ni:", options: ["Ọ̀rọ̀ aṣínà", "Kọ́kọ́rọ́ ilé rẹ", "Àwọn ọ̀rọ̀ pàtàkì láti inú ìpolówó iṣẹ́", "Kóòdù báńkì"], answer: 2, why: "Lílo wọn ń fi hàn pé ẹ bára mu." },
      { objective: "O4", q: "Prompt tó dára fún mímú résumé bá ìpolówó mu máa ní kí AI:", options: ["Hùmọ̀ ìrírí", "Kọ orúkọ tuntun fún ọ", "Ṣe résumé náà ní ojú-ewé mẹ́ta", "Dábàá àwọn ìyípadà òótọ́ kí ó lè bá a mu sí i"], answer: 3, why: "Mímú un bá a mu pẹ̀lú òótọ́ ni ọgbọ́n náà." },
      { objective: "O4", q: "O béèrè fún iṣẹ́ méjì tí ó yàtọ̀ síra. O yẹ kí o:", options: ["Fi ẹ̀dà résumé kan pamọ́ ní orúkọ iṣẹ́ kọ̀ọ̀kan", "Lo résumé kan fún gbogbo iṣẹ́ láìyí nǹkan padà", "Má ṣe béèrè", "Da ìpolówó kọ̀ọ̀kan kọ sínú résumé rẹ"], answer: 0, why: "Iṣẹ́ kọ̀ọ̀kan ní ẹ̀dà tirẹ̀ tí ó bá a mu." },
      { objective: "O5", q: "Báwo ni AI ṣe lè ràn ọ́ lọ́wọ́ láti múra sílẹ̀ fún ìfọ̀rọ̀wánilẹ́nuwò?", options: ["Ó ń lọ sí ìfọ̀rọ̀wánilẹ́nuwò dípò rẹ", "Ó ń ṣe bí olùfọ̀rọ̀wánilẹ́nuwò, ó sì ń fúnni ní ìmọ̀ràn", "Ó ń ṣe ìdánilójú iṣẹ́ náà", "Ó ń pe agbanisíṣẹ́"], answer: 1, why: "Àṣeṣe pẹ̀lú èsì ń mú ìgboyà wá." },
      { objective: "O5", q: "Fi ìdáhùn ìfọ̀rọ̀wánilẹ́nuwò ṣe àṣeṣe:", options: ["Lọ́kàn nìkan", "Láéláé", "Sókè", "Ní kíkọ nìkan"], answer: 2, why: "Sísọ wọ́n sókè ń múra rẹ sílẹ̀ fún èyí gidi." },
      { objective: "O5", q: "Ìtàn ìdáhùn tí ó lágbára ní:", options: ["Ìṣòro náà nìkan", "Ìtàn ẹlòmíràn", "Kò sí ohun pàtó", "Ohun tí ó ṣẹlẹ̀, ohun tí o ṣe, àti bí ó ṣe parí"], answer: 3, why: "Ìrísí yẹn ń fi ọgbọ́n rẹ hàn." },
      { objective: "O5", q: "Tí àlàfo iṣẹ́ bá wà, fi èyí ṣe àṣeṣe:", options: ["Gbólóhùn òótọ́ kúkúrú kan, lẹ́yìn náà ohun tí o ti ṣetán láti ṣe báyìí", "Fífi í pamọ́", "Ẹ̀bẹ̀ gígùn", "Iṣẹ́ tí a hùmọ̀"], answer: 0, why: "Òótọ́ àti kúkúrú, lẹ́yìn náà wo iwájú." },
      { objective: "O6", q: "Gẹ́gẹ́ bí FTC ti sọ, àwọn agbanisíṣẹ́ olóòótọ́:", options: ["Máa ń gba owó díẹ̀", "Kì í ní kí o sanwó kí o tó rí iṣẹ́ láéláé", "Máa ń fẹ́ gift card", "Máa ń sanwó pẹ̀lú ṣẹ́ẹ̀kì tí o gbọ́dọ̀ dá apá kan padà"], answer: 1, why: "Sísanwó láti rí iṣẹ́ jẹ́ àmì jìbìtì." },
      { objective: "O6", q: "Iṣẹ́ wo ni jìbìtì tí ó wọ́pọ̀?", options: ["Olùgbowó ní ṣọ́ọ̀bù tí a mọ̀", "Olùrànlọ́wọ́ ilé-ìkàwé", "Gbígba ẹrù àti títún un fi ránṣẹ́ láti ilé", "Awakọ̀ bọ́ọ̀sì ilé-ìwé"], answer: 2, why: "Iṣẹ́ títún ẹrù fi ránṣẹ́ jẹ́ jìbìtì tí a mọ̀." },
      { objective: "O6", q: "Ìgbà wo ni o yẹ kí o fún agbanisíṣẹ́ tuntun ní nọ́mbà báńkì rẹ?", options: ["Nínú text àkọ́kọ́", "Láti rí ìfọ̀rọ̀wánilẹ́nuwò", "Kí o tó rí ìpolówó iṣẹ́", "Lẹ́yìn tí o bá ti fìdí rẹ̀ múlẹ̀ pé iṣẹ́ gidi ni nìkan"], answer: 3, why: "Kọ́kọ́ fìdí rẹ̀ múlẹ̀ pé iṣẹ́ náà jẹ́ gidi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      7,
      10,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Résumé ojú-ewé kan",
        objective: "O3",
        notYet: "Ó ju ojú-ewé kan lọ, àwọn apá kan kò sí, tàbí nọ́mbà àdáni wà nínú rẹ̀.",
        meets: "Ojú-ewé kan pẹ̀lú ìlà ìkànsí, àkópọ̀, ọgbọ́n, ìrírí àti ẹ̀kọ́, láìsí nọ́mbà àdáni.",
        exceeds: "A kà á sókè, a ṣàtúnṣe àwọn àṣìṣe, a sì fi í pamọ́ bí PDF."
      },
      {
        name: "Ó bá ìpolówó mu",
        objective: "O4",
        notYet: "Résumé náà kò lo àwọn ọgbọ́n tàbí ọ̀rọ̀ inú ìpolówó, tàbí ó fi àwọn nǹkan tí kì í ṣe òótọ́ kún un.",
        meets: "Ó lo àwọn ọgbọ́n pàtàkì inú ìpolówó nínú gbólóhùn òótọ́.",
        exceeds: "A fi í pamọ́ bí ẹ̀dà ọ̀tọ̀ ní orúkọ iṣẹ́ yẹn."
      },
      {
        name: "Ọgbọ́n gidi",
        objective: "O2",
        notYet: "Ó ṣe àkọsílẹ̀ àwọn ọgbọ́n tí akẹ́kọ̀ọ́ kò lè fún ní àpẹẹrẹ.",
        meets: "Gbogbo ọgbọ́n ní àpẹẹrẹ gidi láti iṣẹ́ tí wọ́n sanwó fún tàbí tí wọn kò sanwó fún.",
        exceeds: "Ó ní àwọn ọgbọ́n tí wọn kò sanwó fún bí ìtọ́jú ẹbí tàbí iṣẹ́ àṣesìnlú, pẹ̀lú àpẹẹrẹ tí ó yé."
      },
      {
        name: "Ìdáhùn ìfọ̀rọ̀wánilẹ́nuwò",
        objective: "O5",
        notYet: "Ìdáhùn kò tó mẹ́ta, tàbí a kò sọ wọ́n sókè.",
        meets: "A dáhùn ìbéèrè mẹ́ta sókè, a sì béèrè ìmọ̀ràn kan fún ọ̀kọ̀ọ̀kan.",
        exceeds: "A tún gbìyànjú ìdáhùn kọ̀ọ̀kan pẹ̀lú ìmọ̀ràn náà, pẹ̀lú ìtàn gidi kúkúrú."
      },
      {
        name: "Àyẹ̀wò jìbìtì",
        objective: "O6",
        notYet: "Kò ṣàyẹ̀wò ìpolówó náà fún àwọn àmì ìkìlọ̀.",
        meets: "Ó ṣàyẹ̀wò ìpolówó náà fún àmì jìbìtì, ó sì wá ilé-iṣẹ́ náà.",
        exceeds: "Ó lè dárúkọ àwọn àmì ìkìlọ̀ tí ó wà àti àwọn tí kò sí."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n béèrè fún ó kéré tán iṣẹ́ kan láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n rí ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́ tàbí iṣẹ́ láàárín ọjọ́ 90",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n lọ sí American Job Center tàbí tí wọ́n sọ pé àwọn yẹra fún jìbìtì iṣẹ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tí ó ní íńtánẹ́ẹ̀tì, tàbí kọ̀mpútà ilé-ìkàwé tàbí ti ibùdó iṣẹ́",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: Microsoft Copilot, ChatGPT tàbí Google Gemini",
      "Google Docs tàbí Word lórí wẹ́ẹ̀bù (ọ̀fẹ́) láti kọ résumé kí o sì fi í pamọ́",
      "Ìpolówó iṣẹ́ gidi kan tí akẹ́kọ̀ọ́ lè béèrè fún",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Kọ́kọ́ ran àwọn akẹ́kọ̀ọ́ lọ́wọ́ láti rí àwọn ọgbọ́n tí wọn kò sanwó fún; ọ̀pọ̀ ń rò pé àwọn kò ní ọgbọ́n kankan.",
      "Ṣàyẹ̀wò gbogbo prompt àti résumé fún nọ́mbà Social Security, ọjọ́ ìbí àti àwọn nọ́mbà àdáni mìíràn.",
      "Pín àwọn akẹ́kọ̀ọ́ sí méjì-méjì fún àṣeṣe ìfọ̀rọ̀wánilẹ́nuwò kí wọ́n lè dáhùn sókè sí ènìyàn gidi náà.",
      "Bá American Job Center àdúgbò ṣiṣẹ́ pọ̀, kí o sì pe òṣìṣẹ́ wọn kan wá tí o bá lè ṣe é.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
