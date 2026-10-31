"use strict";

// Koach Learn course (Yoruba translation of underserved/underserved-ai-small-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-small-business-yo",
  lang: "yo",
  translationOf: "underserved-ai-small-business",
  category: "Undeserved Community",
  name: "AI fún Iṣẹ́ Òwò àti Ilé-iṣẹ́ Kékeré",
  skills: "Yíyí ọgbọ́n padà sí ohun tí o ń tà, Fífi iye owó lé e pẹ̀lú ìnáwó gidi, Wíwá ìrànlọ́wọ́ òwò ọ̀fẹ́, Kíkọ àpèjúwe òwò àti ìfiránṣẹ́, Ṣíṣe àkọsílẹ̀ owó tó rọrùn, Dídáhùn àwọn oníbàárà",
  outcome: "lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti ṣètò òwò kékeré sórí ojú-ewé kan: ohun tí o ń tà tó yé, iye owó tí ó bo ìnáwó rẹ, àpèjúwe òwò kúkúrú àti ìfiránṣẹ́ kan, àkọsílẹ̀ owó tó rọrùn, àti olùdámọ̀ràn ọ̀fẹ́ tí o máa bá sọ̀rọ̀ tó kàn.",
  about: [
    "Ọ̀pọ̀ ènìyàn ti ń ṣe òwò kékeré tẹ́lẹ̀: kíkó irun, sísè oúnjẹ fún àríyá, ìmọ́tótó ilé, títọ́jú koríko, kíkọ́ ọmọ lẹ́kọ̀ọ́, títún fóònù ṣe tàbí títa iṣẹ́ ọwọ́. Àwọn míì ní ọgbọ́n kan, wọ́n sì fẹ́ bẹ̀rẹ̀. Ẹ̀kọ́ yìí wà fún àwọn méjèèjì.",
    "O máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti yí ọgbọ́n rẹ padà sí ohun tí o ń tà tó yé, ṣírò iye owó tí ó bo ìnáwó rẹ, wá ìrànlọ́wọ́ òwò ọ̀fẹ́, kọ àpèjúwe kúkúrú àti ìfiránṣẹ́ orí ẹ̀rọ ayélujára kan, ṣe àkọsílẹ̀ owó tó rọrùn, kí o sì dá àwọn oníbàárà lóhùn dáadáa.",
    "AI ń ràn ọ́ lọ́wọ́ láti ronú àti láti kọ̀wé. Kò lè rọ́pò ìmọ̀ràn gidi nípa owó orí, ìwé àṣẹ tàbí òfin. Ẹ̀kọ́ kọ̀ọ̀kan ń fi ìrànlọ́wọ́ ìjọba ọ̀fẹ́ hàn ọ́. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe ètò ojú-ewé kan fún òwò kékeré tí o ń ṣe tàbí tí o fẹ́ bẹ̀rẹ̀: ohun tí o ń tà àti ẹni tí ó wà fún, iye owó tí ó bo ìnáwó rẹ (pẹ̀lú ìṣirò tí o ti ṣàyẹ̀wò fúnra rẹ), àpèjúwe òwò gbólóhùn mẹ́ta, ìfiránṣẹ́ orí ẹ̀rọ ayélujára kan, àti orúkọ àti ọ̀nà ìkànsí olùdámọ̀ràn òwò ọ̀fẹ́ kan nítòsí rẹ (SCORE, Small Business Development Center tàbí Women's Business Center).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ènìyàn ní àwùjọ tí kò ní ànító tí wọ́n ń ṣe òwò kékeré tàbí tí wọ́n fẹ́ bẹ̀rẹ̀: àwọn tó ń kó irun, àwọn tó ń sè oúnjẹ fún àríyá, àwọn tó ń ṣe ìmọ́tótó ilé, àwọn tó ń tọ́jú koríko, àwọn olùkọ́ àdáni, àwọn tó ń tún fóònù ṣe àti àwọn tó ń ta iṣẹ́ ọwọ́. Ọ̀pọ̀ ń gba owó lọ́wọ́ (cash) tàbí ń ṣiṣẹ́ fún àkókò díẹ̀.",
    startingPoint: "Wọ́n ní ọgbọ́n tí àwọn ènìyàn ń sanwó fún, àwọn kan sì ti ní oníbàárà. Díẹ̀ ló ní ohun tí wọ́n ń tà ní kíkọ sílẹ̀, iye owó tí ó dá lórí ìnáwó, àkọsílẹ̀ owó tàbí olùdámọ̀ràn òwò, ọ̀pọ̀ jù lọ kò sì tíì lo AI fún iṣẹ́ òwò.",
    gap: "Ọ̀pọ̀ òwò kékeré ń gba owó tí ó kéré jù, wọn kì í ṣe àkọsílẹ̀, wọn kì í sì í gba ìmọ̀ràn ọ̀fẹ́ rí, nítorí náà wọ́n ń pàdánù owó tàbí wọ́n ń dúró sójú kan. Àwọn akẹ́kọ̀ọ́ nílò ètò ojú-ewé kan tó rọrùn, ìṣirò tí a ti ṣàyẹ̀wò àti olùdámọ̀ràn ọ̀fẹ́ láti dàgbà láìléwu.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú (nǹkan bí kíláàsì 6)",
      "Ẹ̀rọ: smartphone tàbí kọ̀mpútà ilé-ìkàwé",
      "Owó: irinṣẹ́ ọ̀fẹ́ àti olùdámọ̀ràn ọ̀fẹ́ tàbí olówó pọ́ọ́kú nìkan",
      "AI kò mọ iye owó àdúgbò, owó orí tàbí òfin ìwé àṣẹ: àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ìṣirò, wọ́n sì ń béèrè lọ́wọ́ orísun ìjọba tàbí olùdámọ̀ràn",
      "Ìsọfúnni àdáni: kò sí nọ́mbà àkáǹtì báńkì nínú AI, kò sì sí àdírẹ́sì ilé nínú ìfiránṣẹ́ gbangba"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣẹ̀ṣẹ̀ ń kọ́ olùrànlọ́wọ́ AI lè kọ́kọ́ ṣe \"Ìfihàn sí AI àti Agbára Ẹ̀rọ Ayélujára\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá ní ọgbọ́n kan tí àwọn ènìyàn ti ń béèrè lọ́wọ́ rẹ", action: "kọ ohun tí o ń tà ní gbólóhùn kan tí ó sọ ohun tí o ń ṣe, ẹni tí ó wà fún àti ohun tí ó mú ọ yàtọ̀", standard: "ní ọ̀rọ̀ tí ó dún bí ìwọ fúnra rẹ" },
    { id: "O2", condition: "Tí o bá mọ ìnáwó àti wákàtí iṣẹ́ kan", action: "ṣírò iye owó tí ó bo ìnáwó rẹ tí ó sì san owó àkókò rẹ fún ọ", standard: "kí o sì ṣàyẹ̀wò ìṣirò AI fúnra rẹ pẹ̀lú ẹ̀rọ ìṣirò, kí o sì fi wé iye owó àdúgbò" },
    { id: "O3", condition: "Nípa lílo ojú-ewé àwọn alábàáṣiṣẹ́ SBA", action: "wá olùdámọ̀ràn òwò ọ̀fẹ́ kan nítòsí rẹ kí o sì ṣètò ohun tí o máa béèrè", standard: "kí o sì kọ orúkọ wọn, ọ̀nà ìkànsí wọn àti ìbéèrè mẹ́ta sílẹ̀" },
    { id: "O4", condition: "Tí o bá ti ní ohun tí o ń tà", action: "kọ àpèjúwe òwò gbólóhùn mẹ́ta àti ìfiránṣẹ́ orí ẹ̀rọ ayélujára kan pẹ̀lú olùrànlọ́wọ́ AI", standard: "pẹ̀lú gbogbo ìlérí ní òótọ́ àti ọ̀nà ìkànsí tí kò léwu nìkan" },
    { id: "O5", condition: "Nípa lílo Google Sheets tàbí Excel lórí wẹ́ẹ̀bù", action: "ṣe ìwé owó tó rọrùn kí o sì kọ owó tí ó wọlé àti ìnáwó sínú rẹ̀", standard: "pẹ̀lú gbogbo ọ̀wọ̀n márààrún, àròpọ̀, àti àkọsílẹ̀ ní ọjọ́ kan náà" },
    { id: "O6", condition: "Tí oníbàárà bá fi ọ̀rọ̀ tàbí ẹ̀sùn ránṣẹ́", action: "kọ èsì tó ní ọ̀wọ̀ kí o sì kó iṣẹ́ rẹ jọ sínú ètò òwò ojú-ewé kan", standard: "láìfi ohun tí o kò lè san lélẹ̀, àti pẹ̀lú gbogbo apá ètò náà" }
  ],
  chapters: [
    {
      name: "Orí 1: Láti ọgbọ́n sí òwò",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yíyí ọgbọ́n padà sí ohun tí o ń tà tó yé",
          minutes: 5,
          goal: "Kọ ohun tí o ń tà ní gbólóhùn kan: ohun tí o ń tà, fún ta ni, àti ìdí tí wọ́n fi máa yàn ọ́.",
          text: [
            "Òwò máa ń bẹ̀rẹ̀ pẹ̀lú nǹkan tí àwọn ènìyàn nílò tí wọ́n sì máa sanwó fún. Ronú nípa ohun tí àwọn aládùúgbò ti ń ní kí o ṣe: sísè oúnjẹ fún àríyá, kíkó irun, títún nǹkan ṣe, títọ́jú ọmọ, gígé koríko.",
            "Ohun tí o ń tà tó yé sọ ohun tí o ń ṣe, ẹni tí ó wà fún, àti ohun tí ó mú ọ yàtọ̀. Fún àpẹẹrẹ: \"Oúnjẹ ọ̀sẹ̀ tí a ti sè sílẹ̀ ní òpin ọ̀sẹ̀ fún àwọn ẹbí tí ọwọ́ wọn dí ní apá ìlà-oòrùn ìlú, oúnjẹ bí ti ilé ní iye owó tó tọ́.\"",
            "Ní kí AI ràn ọ́ lọ́wọ́: \"Mo mọ oúnjẹ Caribbean sè dáadáa, àwọn ènìyàn sì ń ní kí n sè fún àríyá wọn. Ràn mí lọ́wọ́ láti kọ ohun tí mo ń tà ní gbólóhùn kan, mẹ́ta, fún òwò oúnjẹ àríyá kékeré, ọ̀kọ̀ọ̀kan fún irú oníbàárà tó yàtọ̀.\" Lẹ́yìn náà yan èyí tí ó dún bí ìwọ jù."
          ],
          steps: ["Kọ ohun tí àwọn ènìyàn ti ń ní kí o ṣe sílẹ̀.", "Yan ọgbọ́n kan tí àwọn ènìyàn máa sanwó fún.", "Ní kí AI kọ ohun tí o ń tà ní gbólóhùn kan, mẹ́ta, fún oníbàárà tó yàtọ̀.", "Yan èyí tí ó bá ọ mu jù kí o sì tún un ṣe."],
          words: [["Ohun tí o ń tà (offer)", "gbólóhùn kúkúrú nípa ohun tí o ń tà àti ẹni tí ó wà fún."], ["Oníbàárà", "ẹni tí ó ń sanwó fún ohun tí o ń tà."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú ohun tí àwọn ènìyàn ń béèrè lọ́wọ́ rẹ", bullets: ["Sísè oúnjẹ, kíkó irun, ìmọ́tótó, títún nǹkan ṣe", "Títọ́jú ọmọ, kíkọ́ ọmọ lẹ́kọ̀ọ́, títọ́jú koríko"] },
            { title: "Ohun tí o ń tà tó yé sọ", bullets: ["Ohun tí o ń ṣe", "Ẹni tí ó wà fún", "Ohun tí ó mú ọ yàtọ̀"] },
            { title: "Ní kí AI fún ọ ní àṣàyàn", bullets: ["Mẹ́ta fún irú oníbàárà mẹ́ta", "Yan èyí tí ó dún bí ìwọ"] }
          ],
          tryIt: "Ní kí olùrànlọ́wọ́ AI kọ ohun tí o ń tà ní gbólóhùn kan, mẹ́ta, fún ọgbọ́n kan tí o ní. Yan ọ̀kan kí o sì yí i padà kí ó lè dún bí ìwọ.",
          youCanNow: "yí ọgbọ́n kan padà sí ohun tí o ń tà tó yé ní gbólóhùn kan.",
          quickCheck: [
            { objective: "O1", q: "Èwo ni ohun tí o ń tà tó yé?", options: ["Oúnjẹ ọ̀sẹ̀ tí a ti sè sílẹ̀ fún àwọn ẹbí tí ọwọ́ wọn dí ní apá ìlà-oòrùn, bí ti ilé, ní iye owó tó tọ́", "Mo ń se nǹkan", "Oúnjẹ wà fún títà", "Òwò tó dára jù láyé"], answer: 0, why: "Ó sọ ohun tí o ń ṣe, ẹni tí ó wà fún àti ohun tí ó mú ọ yàtọ̀." },
            { objective: "O1", q: "AI fún ọ ní mẹ́ta, ṣùgbọ́n kò sí èyí tí ó dún bí ìwọ. Kí ni o máa ṣe?", options: ["Lo èyí àkọ́kọ́ bẹ́ẹ̀ náà", "Yan ọ̀kan kí o sì yí ọ̀rọ̀ rẹ̀ padà kí ó lè dún bí ìwọ", "Jáwọ́ nínú òwò náà", "Da ti oníṣòwò míì kọ"], answer: 1, why: "Ohun tí o ń tà gbọ́dọ̀ jẹ́ tìrẹ, nítorí náà o máa tún èyí tó dára jù ṣe kí ó bá ọ mu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fífi iye owó lé e kí o má bàa pàdánù owó",
          minutes: 6,
          goal: "Ṣírò iye owó tí ó bo ìnáwó rẹ tí ó sì san owó àkókò rẹ fún ọ.",
          text: [
            "Ọ̀pọ̀ òwò kékeré ń gba owó tí ó kéré jù. Láti fi iye owó tó tọ́ lé e, ṣe àròpọ̀ ìnáwó rẹ: ohun èlò, owó epo tàbí owó bọ́ọ̀sì, owó ìsanwó míì, àti àkókò rẹ.",
            "Ní kí AI bá ọ ṣe ìṣirò náà, pẹ̀lú nọ́mbà tìrẹ: \"Mo ń se oúnjẹ fún àríyá ènìyàn 20. Oúnjẹ jẹ́ $120, àwọn àwo ìkó-oúnjẹ $15, epo $10, ó sì gbà mí wákàtí 8. Mo fẹ́ rí $18 ní wákàtí kan. Iye owó wo ló máa bo gbogbo rẹ̀?\" Lẹ́yìn náà ṣàyẹ̀wò ìṣirò náà fúnra rẹ pẹ̀lú ẹ̀rọ ìṣirò.",
            "AI kò mọ iye owó àdúgbò. Wo ohun tí àwọn míì nítòsí rẹ ń gbà, kí o sì béèrè lọ́wọ́ olùdámọ̀ràn òwò ọ̀fẹ́. Owó orí àti ìwé àṣẹ náà jẹ́ ìnáwó gidi: béèrè lọ́wọ́ ìlú tàbí county rẹ, ìpínlẹ̀ rẹ, àti IRS (irs.gov, ọ́fíìsì owó orí ìjọba US) nípa ohun tí ó kàn ọ́."
          ],
          steps: ["Kọ gbogbo ìnáwó iṣẹ́ kan sílẹ̀: ohun èlò, ìrìnàjò, owó ìsanwó.", "Pinnu iye tí o fẹ́ rí ní wákàtí kan, kí o sì ka wákàtí rẹ.", "Ní kí AI ṣe àròpọ̀ rẹ̀ pẹ̀lú nọ́mbà tìrẹ.", "Ṣàyẹ̀wò ìṣirò náà fúnra rẹ pẹ̀lú ẹ̀rọ ìṣirò.", "Fi wé iye owó àdúgbò kí o sì béèrè lọ́wọ́ olùdámọ̀ràn."],
          words: [["Ìnáwó", "owó tí o ná láti ṣe iṣẹ́ náà."], ["Èrè", "owó tí ó kù lẹ́yìn tí o bá ti san gbogbo ìnáwó rẹ."]],
          slides: [
            { title: "Ọ̀pọ̀ òwò kékeré ń gba owó tí ó kéré jù", bullets: ["Ka gbogbo ìnáwó", "Ka àkókò rẹ"] },
            { title: "Ìnáwó láti ṣe àròpọ̀", bullets: ["Ohun èlò", "Owó epo tàbí owó bọ́ọ̀sì", "Owó ìsanwó míì", "Wákàtí rẹ"] },
            { title: "Lo AI, lẹ́yìn náà ṣàyẹ̀wò", bullets: ["Fún un ní nọ́mbà rẹ gidi", "Ṣàyẹ̀wò ìṣirò pẹ̀lú ẹ̀rọ ìṣirò", "Fi wé iye owó àdúgbò kí o sì béèrè lọ́wọ́ olùdámọ̀ràn"] }
          ],
          sources: [{ name: "IRS: Small business and self-employed", url: "https://www.irs.gov/businesses/small-businesses-self-employed" }],
          tryIt: "Yan iṣẹ́ kan tí òwò rẹ máa ṣe. Kọ ìnáwó àti wákàtí rẹ̀ sílẹ̀, ní kí olùrànlọ́wọ́ AI ṣírò iye owó tí ó bo wọ́n, lẹ́yìn náà ṣàyẹ̀wò ìṣirò náà fúnra rẹ.",
          youCanNow: "fi iye owó tí ó bo ìnáwó àti àkókò rẹ lé e, kí o sì ṣàyẹ̀wò ìṣirò náà fúnra rẹ.",
          quickCheck: [
            { objective: "O2", q: "Ìnáwó wo ni ọ̀pọ̀ oníṣòwò kékeré máa ń gbàgbé láti kà?", options: ["Ohun èlò", "Owó ìsanwó míì", "Àkókò tiwọn fúnra wọn", "Epo"], answer: 2, why: "Àkókò rẹ náà jẹ́ ìnáwó, nítorí náà iye owó gbọ́dọ̀ san owó wákàtí rẹ fún ọ." },
            { objective: "O2", q: "AI sọ pé iye owó rẹ yẹ kí ó jẹ́ $150, ṣùgbọ́n àròpọ̀ ìnáwó rẹ jẹ́ $160. Kí ni o máa ṣe?", options: ["Gba $150", "Gba owó tí ó dín kù kí o lè rí oníbàárà", "Má ṣe ka ìnáwó rẹ sí", "Tún ìṣirò náà ṣàyẹ̀wò pẹ̀lú ẹ̀rọ ìṣirò kí o sì ṣàtúnṣe iye owó"], answer: 3, why: "AI lè ṣàṣìṣe nínú ìṣirò, iye owó tí ó kéré sí ìnáwó rẹ sì máa mú ọ pàdánù owó." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wíwá ìrànlọ́wọ́ òwò ọ̀fẹ́",
          minutes: 4,
          goal: "Wá olùdámọ̀ràn òwò ọ̀fẹ́ kan nítòsí rẹ.",
          text: [
            "O kò ní láti dá gbogbo rẹ̀ mọ̀ ní ìwọ nìkan. U.S. Small Business Administration (SBA, àjọ ìjọba US tó ń ran òwò kékeré lọ́wọ́) ń bá àwọn alábàáṣiṣẹ́ ṣiṣẹ́ tí wọ́n ń ran àwọn ènìyàn lọ́wọ́ láti bẹ̀rẹ̀ òwò àti láti mú un dàgbà.",
            "SCORE jẹ́ àwọn olùkọ́ òwò onífínnúfíndọ̀ tí wọ́n ń fúnni ní ìmọ̀ràn láìgba owó. Small Business Development Centers (SBDCs) ń fúnni ní ìmọ̀ràn àti ìdánilẹ́kọ̀ọ́. Women's Business Centers ń fúnni ní ìrànlọ́wọ́ ọ̀fẹ́ tàbí olówó pọ́ọ́kú fún àwọn obìnrin tí wọ́n ń bẹ̀rẹ̀ tàbí ń mú òwò dàgbà. Veterans Business Outreach Centers ń ran àwọn ológun àtijọ́ àti ẹbí àwọn ológun lọ́wọ́.",
            "Àwọn olùdámọ̀ràn wọ̀nyí lè ràn ọ́ lọ́wọ́ nípa ìwé àṣẹ, owó orí, owó yíyá àti ètò fún agbègbè rẹ. Mú àwọn ìbéèrè rẹ àti ètò ojú-ewé kan rẹ lọ."
          ],
          steps: ["Ṣí ojú-ewé àwọn alábàáṣiṣẹ́ SBA (resource partners).", "Wá SCORE, SBDC tàbí Women's Business Center nítòsí rẹ.", "Kọ orúkọ wọn àti bí o ṣe lè kàn sí wọn sílẹ̀.", "Kọ ìbéèrè mẹ́ta tí o máa béèrè, bí ìwé àṣẹ wo ni o nílò."],
          words: [["Olùkọ́ (mentor)", "ẹni tí ó ní ìrírí tí ó ń fún ọ ní ìmọ̀ràn."], ["SBA", "U.S. Small Business Administration, àjọ ìjọba àpapọ̀ US tó ń ran òwò kékeré lọ́wọ́."]],
          sources: [{ name: "SBA: Resource partners", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          slides: [
            { title: "Ìwọ nìkan kọ́", bullets: ["SBA ń bá àwọn olùrànlọ́wọ́ ọ̀fẹ́ àti olówó pọ́ọ́kú ṣiṣẹ́"] },
            { title: "Àwọn tí ó lè ràn ọ́ lọ́wọ́", bullets: ["SCORE: olùkọ́ onífínnúfíndọ̀, láìgba owó", "SBDCs: ìmọ̀ràn àti ìdánilẹ́kọ̀ọ́", "Women's Business Centers: ọ̀fẹ́ tàbí olówó pọ́ọ́kú"] },
            { title: "Múra sílẹ̀", bullets: ["Mú ètò ojú-ewé kan rẹ lọ", "Béèrè nípa ìwé àṣẹ, owó orí àti owó yíyá fún agbègbè rẹ"] }
          ],
          tryIt: "Wá olùdámọ̀ràn òwò ọ̀fẹ́ kan nítòsí rẹ láti ojú-ewé àwọn alábàáṣiṣẹ́ SBA. Kọ orúkọ wọn, ọ̀nà ìkànsí wọn àti ìbéèrè mẹ́ta tí o máa béèrè sílẹ̀.",
          youCanNow: "wá ìrànlọ́wọ́ òwò ọ̀fẹ́ ti ìjọba nítòsí rẹ.",
          quickCheck: [
            { objective: "O3", q: "Kí ni SCORE?", options: ["Àwọn olùkọ́ òwò onífínnúfíndọ̀ tí wọ́n ń fúnni ní ìmọ̀ràn láìgba owó", "Ilé-iṣẹ́ credit score", "Iṣẹ́ owó yíyá tí a ń sanwó fún", "Ọ́fíìsì owó orí ìpínlẹ̀"], answer: 0, why: "SCORE jẹ́ alábàáṣiṣẹ́ SBA tí ó ní àwọn olùkọ́ onífínnúfíndọ̀ láìgba owó." },
            { objective: "O3", q: "O kò dá ọ lójú ìwé àṣẹ tí òwò oúnjẹ àríyá rẹ nílò. Kí ni o máa ṣe?", options: ["Fi ìwé àṣẹ sílẹ̀", "Béèrè lọ́wọ́ olùdámọ̀ràn òwò ọ̀fẹ́ kí o sì ṣàyẹ̀wò pẹ̀lú ìlú, county àti ìpínlẹ̀ rẹ", "Gba ìdáhùn AI àkọ́kọ́ gbọ́", "Béèrè lọ́wọ́ oníbàárà kan"], answer: 1, why: "Àwọn olùdámọ̀ràn àti àwọn ọ́fíìsì àdúgbò àti ti ìpínlẹ̀ mọ àwọn òfin agbègbè rẹ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Láti ọgbọ́n sí òwò",
        questions: [
          { objective: "O1", q: "Kí ni ohun tí o ń tà tó yé máa ń sọ?", options: ["Ìtàn ayé rẹ", "Ohun tí o ń ṣe, ẹni tí ó wà fún, àti ohun tí ó mú ọ yàtọ̀", "Iye owó rẹ nìkan", "Àdírẹ́sì ilé rẹ"], answer: 1, why: "Àwọn apá mẹ́ta yẹn ń sọ fún oníbàárà ìdí tí wọ́n fi máa yàn ọ́." },
          { objective: "O2", q: "Kí ni o yẹ kí o kà nígbà tí o bá ń fi iye owó lé e?", options: ["Ohun èlò nìkan", "Àkókò rẹ nìkan", "Ohun èlò, ìrìnàjò, owó ìsanwó míì àti àkókò rẹ", "Kò sí nǹkan; méfò ni"], answer: 2, why: "Iye owó gbọ́dọ̀ bo gbogbo ìnáwó, àti àkókò rẹ pẹ̀lú." },
          { objective: "O2", q: "AI ṣírò iye owó fún ọ. Kí ló kàn?", options: ["Ṣàyẹ̀wò ìṣirò náà fúnra rẹ kí o sì fi wé iye owó àdúgbò", "Lò ó láìṣàyẹ̀wò", "Sọ ọ́ di ìlọ́po méjì", "Má ṣe gba owó láéláé"], answer: 0, why: "AI lè ṣàṣìṣe nínú ìṣirò, kò sì mọ iye owó àdúgbò." },
          { objective: "O3", q: "SCORE ń fúnni ní:", options: ["Owó yíyá tí a ń sanwó fún nìkan", "Ìfisílẹ̀ owó orí", "Ìwé àṣẹ", "Àwọn olùkọ́ òwò onífínnúfíndọ̀ láìgba owó"], answer: 3, why: "SBA ṣàpèjúwe SCORE gẹ́gẹ́ bí àwọn olùkọ́ onífínnúfíndọ̀ tí wọ́n ń fúnni ní ìmọ̀ràn láìgba owó." },
          { objective: "O3", q: "Níbo ni o ti yẹ kí o ṣàyẹ̀wò ìwé àṣẹ tí o nílò?", options: ["Lọ́dọ̀ AI nìkan", "Ìlú tàbí county rẹ, ìpínlẹ̀ rẹ, tàbí olùdámọ̀ràn òwò ọ̀fẹ́", "Ìfiránṣẹ́ orí ẹ̀rọ ayélujára", "Ọ̀rẹ́ kan ní ìpínlẹ̀ míì"], answer: 1, why: "Ìwé àṣẹ dá lórí ibi tí o wà; àwọn orísun ìjọba àti olùdámọ̀ràn ló mọ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe òwò àti mímú un dàgbà",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkọ àpèjúwe òwò rẹ àti ìfiránṣẹ́ kan",
          minutes: 5,
          goal: "Kọ àpèjúwe òwò gbólóhùn mẹ́ta àti ìfiránṣẹ́ orí ẹ̀rọ ayélujára kan.",
          text: [
            "Àpèjúwe kúkúrú ń sọ fún àwọn ènìyàn ẹni tí o jẹ́, ohun tí o ń ṣe àti bí wọ́n ṣe lè kàn sí ọ. O lè lò ó lórí ìwé ìpolówó, káàdì òwò, tàbí ojú-ewé òwò ọ̀fẹ́.",
            "Béèrè lọ́wọ́ AI: \"Kọ àpèjúwe gbólóhùn mẹ́ta tó ní ìfẹ́ fún òwò oúnjẹ ọ̀sẹ̀ tí mo ń sè sílẹ̀ fún àwọn ẹbí tí ọwọ́ wọn dí. Lẹ́yìn náà kọ ìfiránṣẹ́ Facebook kúkúrú kan tí ó ń kéde àkọsílẹ̀ oúnjẹ mi àkọ́kọ́.\" Béèrè ẹ̀dà ní èdè míì tí àwọn oníbàárà rẹ bá nílò rẹ̀.",
            "Tún un ṣe kí ó lè dún bí ìwọ. Ṣe ìlérí ohun tí o lè ṣe nìkan. Lo fóònù òwò tàbí email tí ọkàn rẹ balẹ̀ láti pín ní gbangba, kì í ṣe àdírẹ́sì ilé rẹ."
          ],
          steps: ["Ní kí AI kọ àpèjúwe gbólóhùn mẹ́ta pẹ̀lú ohun tí o ń tà.", "Béèrè ìfiránṣẹ́ orí ẹ̀rọ ayélujára kúkúrú kan.", "Tún méjèèjì ṣe kí wọ́n lè dún bí ìwọ.", "Ṣàyẹ̀wò pé gbogbo ìlérí jẹ́ òótọ́, àti pé ọ̀nà ìkànsí kò léwu láti pín."],
          words: [["Ìfiránṣẹ́ orí ẹ̀rọ ayélujára (social media post)", "ọ̀rọ̀ kúkúrú, bóyá pẹ̀lú àwòrán, tí a pín lórí àwọn app bí Facebook tàbí Instagram."]],
          slides: [
            { title: "Àpèjúwe kúkúrú", bullets: ["Ẹni tí o jẹ́", "Ohun tí o ń ṣe", "Bí wọ́n ṣe lè kàn sí ọ"] },
            { title: "Béèrè méjèèjì lọ́wọ́ AI", bullets: ["Àpèjúwe gbólóhùn mẹ́ta", "Ìfiránṣẹ́ kúkúrú kan", "Èdè míì tí ó bá pọndandan"] },
            { title: "Kí o tó pín in", bullets: ["Jẹ́ kí ó dún bí ìwọ", "Ṣe ìlérí ohun tí o lè ṣe nìkan", "Kò sí àdírẹ́sì ilé"] }
          ],
          tryIt: "Ní kí olùrànlọ́wọ́ AI kọ àpèjúwe gbólóhùn mẹ́ta nípa òwò rẹ àti ìfiránṣẹ́ orí ẹ̀rọ ayélujára kúkúrú kan. Tún méjèèjì ṣe kí wọ́n lè dún bí ìwọ.",
          youCanNow: "kọ àpèjúwe òwò kúkúrú àti ìfiránṣẹ́ tí ó dún bí ìwọ.",
          quickCheck: [
            { objective: "O4", q: "Nǹkan mẹ́ta wo ni àpèjúwe òwò kúkúrú ń sọ fún àwọn ènìyàn?", options: ["Iye owó rẹ, báńkì rẹ àti ọjọ́ orí rẹ", "Àwọn tí ẹ jọ ń díje, ẹ̀rù rẹ àti àfojúsùn rẹ", "Ẹni tí o jẹ́, ohun tí o ń ṣe àti bí wọ́n ṣe lè kàn sí ọ", "Àdírẹ́sì ilé rẹ, àkókò iṣẹ́ rẹ àti ẹbí rẹ"], answer: 2, why: "Àpèjúwe ń sọ ẹni tí o jẹ́, ohun tí o ń ṣe àti bí wọ́n ṣe lè kàn sí ọ." },
            { objective: "O4", q: "Ìfiránṣẹ́ AI ṣèlérí \"ìfijíṣẹ́ ní ọjọ́ kan náà\" ṣùgbọ́n o kò lè ṣe é. Kí ni o máa ṣe?", options: ["Pín in; ó dún dáadáa", "Fi í kún gbogbo ìfiránṣẹ́", "Pín in kí o sì retí pé ó máa dára", "Yọ ìlérí náà kúrò kí o tó pín in"], answer: 3, why: "Ṣe ìlérí ohun tí o lè ṣe nìkan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣe àkọsílẹ̀ owó tó rọrùn",
          minutes: 5,
          goal: "Ṣe ìwé ọ̀fẹ́ tó rọrùn láti tọpa owó tí ó wọlé àti owó tí ó jáde.",
          text: [
            "Àkọsílẹ̀ ń jẹ́ kí o rí i bóyá o ń jèrè, o sì máa nílò rẹ̀ nígbà owó orí. O lè bẹ̀rẹ̀ pẹ̀lú spreadsheet ọ̀fẹ́ bí Google Sheets tàbí Excel lórí wẹ́ẹ̀bù.",
            "Béèrè lọ́wọ́ AI: \"Ràn mí lọ́wọ́ láti ṣe ìwé tó rọrùn fún òwò kékeré mi pẹ̀lú ọ̀wọ̀n fún ọjọ́, ohun tí ó jẹ́, owó tí ó wọlé, owó tí ó jáde, àti àkíyèsí. Fi bí mo ṣe lè ṣe àròpọ̀ ọ̀wọ̀n kọ̀ọ̀kan hàn mí.\" Lẹ́yìn náà ṣe é fúnra rẹ.",
            "Kọ gbogbo títà àti gbogbo ìnáwó sílẹ̀ ní ọjọ́ kan náà, kí o sì pa ìwé ẹ̀rí ìsanwó mọ́ (àwòrán náà dára). Béèrè lọ́wọ́ olùdámọ̀ràn òwò ọ̀fẹ́ tàbí akọ̀ṣẹ́mọṣẹ́ owó orí nípa àkọsílẹ̀ tí o nílò fún owó orí. Má ṣe tẹ nọ́mbà àkáǹtì báńkì sínú AI."
          ],
          steps: ["Ṣí Google Sheets tàbí Excel lórí wẹ́ẹ̀bù.", "Ṣe ọ̀wọ̀n: ọjọ́, ohun tí ó jẹ́, owó tí ó wọlé, owó tí ó jáde, àkíyèsí.", "Béèrè lọ́wọ́ AI bí o ṣe lè ṣe àròpọ̀ ọ̀wọ̀n kọ̀ọ̀kan.", "Kọ gbogbo títà àti ìnáwó sílẹ̀ ní ọjọ́ kan náà.", "Ya àwòrán ìwé ẹ̀rí ìsanwó kọ̀ọ̀kan."],
          words: [["Spreadsheet", "àwọn ìlà àti ọ̀wọ̀n fún nọ́mbà àti àkọsílẹ̀."], ["Ìnáwó òwò", "owó tí o ná fún òwò náà."], ["Ìwé ẹ̀rí ìsanwó (receipt)", "ẹ̀rí pé o ra nǹkan tàbí pé o sanwó."]],
          slides: [
            { title: "Ìdí tí a fi ń ṣe àkọsílẹ̀", bullets: ["Láti rí i bóyá o ń jèrè", "O nílò rẹ̀ nígbà owó orí"] },
            { title: "Ìwé tó rọrùn", bullets: ["Ọjọ́, ohun tí ó jẹ́", "Owó tí ó wọlé, owó tí ó jáde", "Àkíyèsí"] },
            { title: "Àṣà tó dára", bullets: ["Kọ ọ́ sílẹ̀ ní ọjọ́ kan náà", "Àwòrán ìwé ẹ̀rí ìsanwó kọ̀ọ̀kan", "Kò sí nọ́mbà báńkì nínú AI"] }
          ],
          tryIt: "Ṣe ìwé tó rọrùn nínú Google Sheets tàbí Excel lórí wẹ́ẹ̀bù pẹ̀lú ọ̀wọ̀n márààrún. Fi títà àṣeṣe mẹ́ta àti ìnáwó méjì kún un, kí o sì ṣe àròpọ̀ owó tí ó wọlé àti owó tí ó jáde.",
          youCanNow: "ṣe àkọsílẹ̀ owó tó rọrùn fún òwò kékeré nínú spreadsheet ọ̀fẹ́.",
          quickCheck: [
            { objective: "O5", q: "Kí ló dé tí a fi ń ṣe àkọsílẹ̀ owó tó rọrùn?", options: ["Láti rí i bóyá o ń jèrè àti láti múra sílẹ̀ fún owó orí", "Nítorí pé AI nílò rẹ̀", "Láti pín in fún àwọn oníbàárà", "Láti fi í sórí ayélujára"], answer: 0, why: "Àkọsílẹ̀ ń fi hàn bóyá o ń jèrè, o sì nílò rẹ̀ fún owó orí." },
            { objective: "O5", q: "O ra ohun èlò $30 ṣùgbọ́n ìwé ẹ̀rí ìsanwó ti sọnù. Kí ni o lè ti ṣe?", options: ["Kò sí nǹkan; ìwé ẹ̀rí kò ṣe pàtàkì", "Ya àwòrán ìwé ẹ̀rí náà ní ọjọ́ kan náà", "Tẹ nọ́mbà báńkì rẹ sínú AI", "Méfò iye náà nígbà owó orí"], answer: 1, why: "Àwòrán ìwé ẹ̀rí kọ̀ọ̀kan ń pa àkọsílẹ̀ mọ́ kódà tí ìwé náà bá sọnù." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dídáhùn àwọn oníbàárà àti kíkó gbogbo rẹ̀ jọ",
          minutes: 5,
          goal: "Kọ èsì tó ní ọ̀wọ̀ sí àwọn oníbàárà kí o sì parí ètò òwò ojú-ewé kan rẹ.",
          text: [
            "Iṣẹ́ tó dára ń mú oníbàárà padà wá. AI lè ràn ọ́ lọ́wọ́ láti kọ èsì tó ní ọ̀wọ̀ kíákíá: fífìdí ọjà tí wọ́n béèrè múlẹ̀, sísọ pé ọwọ́ rẹ ti kún, tàbí bíbá ẹ̀sùn lò pẹ̀lú sùúrù.",
            "Fún ẹ̀sùn, béèrè: \"Kọ èsì tó ní sùúrù àti inú rere sí oníbàárà tí ó sọ pé oúnjẹ dé pẹ́. Tọrọ àforíjìn, ṣàlàyé pé a máa ṣàtúnṣe rẹ̀, kí o sì fún un ní ẹ̀dínwó kékeré nígbà míì.\" Kà á, kí o sì rí i dájú pé ẹ̀dínwó náà jẹ́ èyí tí o lè san.",
            "Báyìí kó iṣẹ́ rẹ jọ sórí ojú-ewé kan: ohun tí o ń tà, iye owó àti ìnáwó rẹ, àpèjúwe àti ìfiránṣẹ́ rẹ, àkíyèsí nípa àkọsílẹ̀ rẹ, àti olùdámọ̀ràn ọ̀fẹ́ tí o rí. Ojú-ewé yẹn ni ìbẹ̀rẹ̀ ètò òwò rẹ."
          ],
          steps: ["Ní kí AI kọ èsì tó ní ọ̀wọ̀ fún ọ̀rọ̀ oníbàárà tí ó wọ́pọ̀.", "Ṣàyẹ̀wò gbogbo ìlérí kí o tó fi ránṣẹ́.", "Kó ohun tí o ń tà, iye owó, àpèjúwe, ìfiránṣẹ́, àkíyèsí àkọsílẹ̀ àti olùdámọ̀ràn sórí ojú-ewé kan.", "Mú ojú-ewé náà lọ sí ìpàdé pẹ̀lú olùdámọ̀ràn ọ̀fẹ́ rẹ."],
          words: [["Ètò òwò", "ètò tí a kọ sílẹ̀ nípa ohun tí òwò rẹ ń tà, fún ta ni, àti bí yóò ṣe pa owó wọlé."]],
          slides: [
            { title: "Iṣẹ́ tó dára ń mú oníbàárà padà wá", bullets: ["Fìdí ọjà tí wọ́n béèrè múlẹ̀", "Sọ pé \"ọwọ́ mi ti kún\" pẹ̀lú inú rere", "Bá ẹ̀sùn lò pẹ̀lú sùúrù"] },
            { title: "Èsì sí ẹ̀sùn", bullets: ["Tọrọ àforíjìn", "Sọ bí o ṣe máa ṣàtúnṣe rẹ̀", "Fúnni ní ohun tí o lè san nìkan"] },
            { title: "Ètò ojú-ewé kan rẹ", bullets: ["Ohun tí o ń tà àti iye owó", "Àpèjúwe àti ìfiránṣẹ́", "Àkọsílẹ̀ àti olùdámọ̀ràn ọ̀fẹ́ rẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe ètò ojú-ewé kan pẹ̀lú ohun tí o ń tà, iye owó tí o ti ṣàyẹ̀wò tí ó bo ìnáwó rẹ, àpèjúwe gbólóhùn mẹ́ta, ìfiránṣẹ́ orí ẹ̀rọ ayélujára kan, àti ọ̀nà ìkànsí olùdámọ̀ràn òwò ọ̀fẹ́ kan nítòsí rẹ.",
          youCanNow: "ṣètò òwò kékeré, fi iye owó lé e, polówó rẹ̀, kí o sì mọ ibi tí o ti lè rí ìrànlọ́wọ́ akọ̀ṣẹ́mọṣẹ́ ọ̀fẹ́.",
          quickCheck: [
            { objective: "O6", q: "Kí ló wà nínú ètò òwò ojú-ewé kan rẹ?", options: ["Iye owó rẹ nìkan", "Ìfiránṣẹ́ orí ẹ̀rọ ayélujára rẹ nìkan", "Ohun tí o ń tà, iye owó àti ìnáwó, àpèjúwe àti ìfiránṣẹ́, àkíyèsí àkọsílẹ̀ àti olùdámọ̀ràn ọ̀fẹ́", "Nọ́mbà fóònù àwọn oníbàárà rẹ"], answer: 2, why: "Ètò ojú-ewé kan ń kó gbogbo iṣẹ́ rẹ jọ sí ibì kan." },
            { objective: "O6", q: "Ọwọ́ rẹ ti kún ní òpin ọ̀sẹ̀ yìí, oníbàárà kan sì fẹ́ ra nǹkan. Kí ni o máa fi ránṣẹ́?", options: ["Kò sí èsì", "Bẹ́ẹ̀ ni, lẹ́yìn náà fagilé e", "Èsì aláìnínúure", "Èsì tó ní ọ̀wọ̀ pé ọwọ́ rẹ ti kún, kí o sì dábàá ọjọ́ míì"], answer: 3, why: "Èsì tó ní ọ̀wọ̀ àti òtítọ́ ń jẹ́ kí oníbàárà máa padà wá." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe òwò àti mímú un dàgbà",
        questions: [
          { objective: "O4", q: "Kí ló yẹ kí ó wà nínú àpèjúwe òwò kúkúrú?", options: ["Nọ́mbà Social Security rẹ", "Ẹni tí o jẹ́, ohun tí o ń ṣe, àti bí wọ́n ṣe lè kàn sí ọ", "Àdírẹ́sì ilé rẹ", "Iye owó tí ó wà nínú báńkì rẹ"], answer: 1, why: "Ìyẹn ń sọ ohun tí oníbàárà nílò láti mọ̀ fún wọn." },
          { objective: "O4", q: "Ọ̀nà ìkànsí wo ni kò léwu jù láti pín ní gbangba?", options: ["Àdírẹ́sì ilé rẹ", "Àkáǹtì báńkì rẹ", "Fóònù òwò tàbí email tí ọkàn rẹ balẹ̀ láti pín", "Nọ́mbà ìdánimọ̀ rẹ"], answer: 2, why: "Pa ìsọfúnni àdáni mọ́ ní ìkọ̀kọ̀." },
          { objective: "O5", q: "Àwọn ọ̀wọ̀n wo ló yẹ nínú ìwé owó tó rọrùn?", options: ["Ọjọ́, ohun tí ó jẹ́, owó tí ó wọlé, owó tí ó jáde, àkíyèsí", "Orúkọ rẹ nìkan", "Ọ̀rọ̀ aṣínà rẹ", "Nọ́mbà Social Security àwọn oníbàárà"], answer: 0, why: "Àwọn ọ̀wọ̀n yẹn ń tọpa owó tí ó wọlé àti tí ó jáde." },
          { objective: "O5", q: "Ìgbà wo ni o yẹ kí o kọ títà kan sílẹ̀?", options: ["Ní òpin ọdún", "Láéláé", "Títà ńlá nìkan", "Ní ọjọ́ kan náà"], answer: 3, why: "Àkọsílẹ̀ ọjọ́ kan náà máa ń péye." },
          { objective: "O6", q: "Oníbàárà kan ṣe ẹ̀sùn pé oúnjẹ dé pẹ́. Èsì tó dára:", options: ["Ń dá oníbàárà lẹ́bi", "Ń tọrọ àforíjìn, ń sọ bí o ṣe máa ṣàtúnṣe rẹ̀, ó sì ń fúnni ní ohun tí o lè san nìkan", "Kò fiyè sí i", "Ń ṣèlérí oúnjẹ ọ̀fẹ́ títí láé"], answer: 1, why: "Èsì tó ní sùúrù àti òtítọ́ ń pa oníbàárà mọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Iṣẹ́ Òwò àti Ilé-iṣẹ́ Kékeré",
    questions: [
      { objective: "O1", q: "Ibi tó dára láti bẹ̀rẹ̀ èrò òwò ni:", options: ["Ohun tí àwọn ènìyàn ti ń ní kí o ṣe", "Ohunkóhun tí ó gbajúmọ̀ lórí ayélujára", "Èrò àìròtẹ́lẹ̀ láti ọ̀dọ̀ AI", "Dída ilé-iṣẹ́ ńlá kan kọ"], answer: 0, why: "Ohun tí àwọn ènìyàn ti ń béèrè lọ́wọ́ rẹ fi hàn pé wọ́n nílò rẹ̀ lóòótọ́." },
      { objective: "O1", q: "Oníbàárà ni:", options: ["Ẹni tí ó ń tà ohun èlò fún ọ", "Ẹni tí ó ń sanwó fún ohun tí o ń tà", "Olùkọ́ rẹ", "Báńkì kan"], answer: 1, why: "Àwọn oníbàárà ń rà lọ́wọ́ rẹ." },
      { objective: "O1", q: "Kí ló dé tí o fi máa béèrè mẹ́ta lọ́wọ́ AI dípò ọ̀kan?", options: ["Ó dín owó kù", "Ó pọndandan", "Kí o lè yan èyí tí ó bá ọ mu jù", "Láti da àwọn oníbàárà rú"], answer: 2, why: "Àṣàyàn ń ràn ọ́ lọ́wọ́ láti rí èyí tó bá ọ mu jù." },
      { objective: "O2", q: "Àṣìṣe iye owó wo ni ọ̀pọ̀ òwò kékeré máa ń ṣe?", options: ["Gbígba owó tí ó pọ̀ jù", "Àìgba owó rárá", "Gbígba owó ní owó ilẹ̀ míì", "Gbígba owó tí ó kéré jù"], answer: 3, why: "Gbígbàgbé ìnáwó àti àkókò máa ń yọrí sí iye owó tí ó kéré." },
      { objective: "O2", q: "Èrè ni:", options: ["Owó tí ó kù lẹ́yìn tí o bá ti san gbogbo ìnáwó rẹ", "Gbogbo owó tí ó wọlé", "Ohun èlò rẹ", "Owó yíyá"], answer: 0, why: "Èrè ni ohun tí ó ṣẹ́kù." },
      { objective: "O2", q: "Nígbà tí AI bá ṣírò iye owó rẹ, o yẹ kí o:", options: ["Gbà á gbọ́ pátápátá", "Ṣàyẹ̀wò ìṣirò náà fúnra rẹ", "Má ṣe ka ìnáwó rẹ sí", "Béèrè lọ́wọ́ àjèjì"], answer: 1, why: "AI lè ṣàṣìṣe nínú ìṣirò." },
      { objective: "O2", q: "Níbo ni o ti lè kọ́ nípa owó orí òwò?", options: ["Ìpolówó tí ó yọ jáde lójijì", "Eré fídíò", "irs.gov, olùdámọ̀ràn ọ̀fẹ́ tàbí akọ̀ṣẹ́mọṣẹ́ owó orí", "Lọ́dọ̀ AI nìkan"], answer: 2, why: "Àwọn orísun ìjọba àti akọ̀ṣẹ́mọṣẹ́ mọ òfin owó orí." },
      { objective: "O3", q: "SBA ni:", options: ["Báńkì kan", "App orí ẹ̀rọ ayélujára", "Ẹgbẹ́ àdáni", "U.S. Small Business Administration"], answer: 3, why: "Ó jẹ́ àjọ ìjọba àpapọ̀ tó ń ran òwò kékeré lọ́wọ́." },
      { objective: "O3", q: "Small Business Development Centers ń fúnni ní:", options: ["Ìmọ̀ràn àti ìdánilẹ́kọ̀ọ́", "Ọjà ọ̀fẹ́", "Ilé ọ̀fẹ́", "Ìpolówó tí a ń sanwó fún"], answer: 0, why: "SBDCs ń ran àwọn ènìyàn lọ́wọ́ láti bẹ̀rẹ̀ òwò àti láti mú un dàgbà." },
      { objective: "O3", q: "Iṣẹ́ Women's Business Centers jẹ́:", options: ["Olówó ńlá nígbà gbogbo", "Ọ̀fẹ́ tàbí olówó pọ́ọ́kú", "Fún ilé-iṣẹ́ ńlá nìkan", "Lórí ayélujára nìkan"], answer: 1, why: "SBA ṣàpèjúwe wọn gẹ́gẹ́ bí ọ̀fẹ́ tàbí olówó pọ́ọ́kú." },
      { objective: "O3", q: "Kí ni o yẹ kí o mú lọ sí ìpàdé pẹ̀lú olùdámọ̀ràn ọ̀fẹ́?", options: ["Kò sí nǹkan", "PIN báńkì rẹ", "Ètò ojú-ewé kan rẹ àti àwọn ìbéèrè", "Ọ̀rọ̀ aṣínà rẹ"], answer: 2, why: "Ètò àti ìbéèrè ń jẹ́ kí ìpàdé náà wúlò." },
      { objective: "O4", q: "Àpèjúwe òwò yẹ kí ó:", options: ["Ṣèlérí ohun tí o kò lè ṣe", "Ní àdírẹ́sì ilé rẹ nínú", "Jẹ́ ojú-ewé mẹ́wàá", "Dún bí ìwọ kí ó sì jẹ́ òótọ́"], answer: 3, why: "Òtítọ́ àti ọ̀rọ̀ tìrẹ ń mú kí àwọn ènìyàn gbẹ́kẹ̀ lé ọ." },
      { objective: "O4", q: "Ọ̀pọ̀ jù lọ àwọn oníbàárà rẹ ń sọ èdè Spanish. O lè:", options: ["Béèrè ẹ̀dà Spanish ìfiránṣẹ́ rẹ lọ́wọ́ AI", "Fi ránṣẹ́ ní èdè Gẹ̀ẹ́sì nìkan", "Má ṣe fi nǹkan ránṣẹ́ rárá", "Lo àwòrán nìkan"], answer: 0, why: "Èdè kejì ń dé ọ̀dọ̀ àwọn oníbàárà rẹ." },
      { objective: "O4", q: "Kí o tó pín ìfiránṣẹ́ kan, ṣàyẹ̀wò pé:", options: ["Ó gùn tó bí ó ti lè gùn tó", "Gbogbo ìlérí jẹ́ òótọ́, ọ̀nà ìkànsí kò sì léwu", "Ó ní nọ́mbà Social Security rẹ", "Ó dárúkọ gbogbo àwọn tí ẹ jọ ń díje"], answer: 1, why: "Ìlérí gbọ́dọ̀ jẹ́ òótọ́, ọ̀nà ìkànsí kò sì gbọdọ̀ léwu." },
      { objective: "O5", q: "Spreadsheet ni:", options: ["Aṣọ ìbùsùn", "Fọ́ọ̀mù owó orí", "Àwọn ìlà àti ọ̀wọ̀n", "Ìwé àṣẹ òwò"], answer: 2, why: "Spreadsheet ń ṣètò nọ́mbà àti àkọsílẹ̀." },
      { objective: "O5", q: "Àwọn irinṣẹ́ ọ̀fẹ́ wo ló lè gba àkọsílẹ̀ owó rẹ?", options: ["Ilé-iṣẹ́ ìṣirò owó tí a ń sanwó fún nìkan", "Ọ̀rọ̀ text", "Àkójọ àwòrán", "Google Sheets tàbí Excel lórí wẹ́ẹ̀bù"], answer: 3, why: "Méjèèjì jẹ́ irinṣẹ́ spreadsheet ọ̀fẹ́." },
      { objective: "O5", q: "Kí ni o yẹ kí o pa mọ́ fún ìnáwó kọ̀ọ̀kan?", options: ["Ìwé ẹ̀rí ìsanwó; àwòrán náà dára", "Kò sí nǹkan", "Ìrántí", "Ìméfò AI"], answer: 0, why: "Ìwé ẹ̀rí ìsanwó ń fi ohun tí o ná hàn." },
      { objective: "O5", q: "Èwo ni o KÒ gbọdọ̀ tẹ sínú AI láéláé?", options: ["\"Ràn mí lọ́wọ́ láti ṣe ọ̀wọ̀n\"", "Nọ́mbà àkáǹtì báńkì rẹ", "\"Kọ ìfiránṣẹ́ tó ní ìfẹ́\"", "Orúkọ òwò rẹ"], answer: 1, why: "Nọ́mbà báńkì jẹ́ ìsọfúnni àdáni." },
      { objective: "O6", q: "Nígbà tí o bá ń fúnni ní ẹ̀dínwó lẹ́yìn ẹ̀sùn, rí i dájú pé:", options: ["Ó tóbi tó bí ó ti lè tóbi tó", "O ṣèlérí iṣẹ́ ọ̀fẹ́ títí láé", "Ó jẹ́ èyí tí o lè san", "O kò tọrọ àforíjìn rárá"], answer: 2, why: "Fúnni ní ohun tí òwò rẹ lè san nìkan." },
      { objective: "O6", q: "Ètò ojú-ewé kan rẹ ní:", options: ["Àmì òwò rẹ nìkan", "Àdírẹ́sì ilé rẹ", "Ọ̀rọ̀ aṣínà rẹ", "Ohun tí o ń tà, iye owó, àpèjúwe, ìfiránṣẹ́, àkọsílẹ̀ àti olùdámọ̀ràn ọ̀fẹ́"], answer: 3, why: "Àwọn apá wọ̀nyẹn ló para pọ̀ di iṣẹ́ ìkẹyìn." }
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
      10,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ohun tí o ń tà",
        objective: "O1",
        notYet: "Kò sí ohun tí o ń tà, tàbí kò sọ kí ni, fún ta ni, tàbí ìdí tí wọ́n fi máa yàn ọ́.",
        meets: "Gbólóhùn kan pẹ̀lú ohun tí o ń ṣe, ẹni tí ó wà fún àti ohun tí ó mú ọ yàtọ̀.",
        exceeds: "A ti tún un ṣe kí ó lè dún bí akẹ́kọ̀ọ́ náà fúnra rẹ̀."
      },
      {
        name: "Iye owó bo ìnáwó",
        objective: "O2",
        notYet: "Iye owó kéré sí ìnáwó, tàbí a kò ṣàyẹ̀wò ìṣirò náà.",
        meets: "Ó kọ ìnáwó àti wákàtí sílẹ̀, iye owó sì bo wọ́n, pẹ̀lú ìṣirò tí a ṣàyẹ̀wò fúnra ẹni.",
        exceeds: "Ó fi wé iye owó àdúgbò, ó sì kọ owó orí àti ìwé àṣẹ tí ó máa béèrè nípa wọn sílẹ̀."
      },
      {
        name: "Àpèjúwe àti ìfiránṣẹ́",
        objective: "O4",
        notYet: "Kò sí, tàbí ó ṣe ìlérí tí òwò náà kò lè mú ṣẹ.",
        meets: "Àpèjúwe gbólóhùn mẹ́ta àti ìfiránṣẹ́ kan, tí wọ́n jẹ́ òótọ́, pẹ̀lú ọ̀nà ìkànsí tí kò léwu.",
        exceeds: "Ó ní ẹ̀dà èdè kejì fún àwọn oníbàárà tí wọ́n nílò rẹ̀."
      },
      {
        name: "Olùdámọ̀ràn ọ̀fẹ́",
        objective: "O3",
        notYet: "Kò dárúkọ olùdámọ̀ràn kankan.",
        meets: "Ó dárúkọ olùdámọ̀ràn SCORE, SBDC tàbí Women's Business Center pẹ̀lú ọ̀nà ìkànsí.",
        exceeds: "Ó kọ ìbéèrè mẹ́ta tí ó máa béèrè níbi ìpàdé sílẹ̀."
      },
      {
        name: "Ètò ojú-ewé kan",
        objective: "O6",
        notYet: "Àwọn apá kan kò sí, tàbí wọ́n wà ní ojú-ewé ọ̀tọ̀ọ̀tọ̀.",
        meets: "Gbogbo apá wà lórí ojú-ewé kan, pẹ̀lú àkíyèsí nípa àkọsílẹ̀ owó.",
        exceeds: "Ó ti ṣetán láti mú lọ sí ìpàdé olùdámọ̀ràn, pẹ̀lú àpẹẹrẹ èsì sí oníbàárà."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n pàdé olùdámọ̀ràn òwò ọ̀fẹ́ láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gbé iye owó wọn sókè láti bo ìnáwó tàbí tí wọ́n bẹ̀rẹ̀ àkọsílẹ̀ owó",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ tàbí forúkọ òwò kékeré sílẹ̀ láàárín oṣù 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tí ó ní íńtánẹ́ẹ̀tì, tàbí kọ̀mpútà ilé-ìkàwé",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: Microsoft Copilot, ChatGPT tàbí Google Gemini",
      "Google Sheets tàbí Excel lórí wẹ́ẹ̀bù (ọ̀fẹ́) àti ẹ̀rọ ìṣirò",
      "Ìwé fún ètò ojú-ewé kan",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ní kí akẹ́kọ̀ọ́ kọ̀ọ̀kan lo òwò tirẹ̀ gidi tàbí èyí tí ó ń gbèrò nínú gbogbo iṣẹ́.",
      "Ẹ jọ ṣe ìṣirò iye owó pẹ̀lú ẹ̀rọ ìṣirò; ọ̀pọ̀ akẹ́kọ̀ọ́ máa rí i pé owó tí wọ́n ń gbà ti kéré jù.",
      "Pe olùkọ́ SCORE tàbí olùdámọ̀ràn SBDC wá sí ìpàdé ìkẹyìn tí o bá lè ṣe é.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé owó orí àti ìwé àṣẹ yàtọ̀ láti ibì kan sí ibòmíì, àti pé kí wọ́n ṣàyẹ̀wò orísun ìjọba tàbí olùdámọ̀ràn; má ṣe fúnni ní ìmọ̀ràn owó orí.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
