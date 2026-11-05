"use strict";

// Koach Learn course (Yoruba translation of athletes/athletes-ai-scouting-recruiting.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-scouting-recruiting-yo",
  lang: "yo",
  translationOf: "athletes-ai-scouting-recruiting",
  category: "Athletes",
  name: "AI fún Ṣíṣàwárí àti Gbígba Eléré (Scouting àti Recruiting)",
  skills: "Ṣíṣe àkọsílẹ̀ àwọn ilé-ẹ̀kọ́ tí o fẹ́ nínú spreadsheet, Ṣíṣe profaili recruiting àti fídíò highlight, Kíkọ ímeèlì àdáni sí àwọn kóòṣì kọ́lẹ́ẹ̀jì pẹ̀lú AI, Mímọ ibi tí a ti ń ṣàyẹ̀wò àwọn òfin ẹ̀tọ́ láti ṣeré àti òfin recruiting, Ṣíṣètò àkíyèsí scouting tó tọ́ (fún àwọn kóòṣì)",
  outcome: "ṣe ètò recruiting tó wà létòlétò: àkọsílẹ̀ ilé-ẹ̀kọ́ 15 nínú spreadsheet, profaili recruiting ojú-ewé kan àti fídíò highlight ìṣẹ́jú méjì sí mẹ́rin, àti ímeèlì àdáni sí kóòṣì kọ́lẹ́ẹ̀jì mẹ́ta tí o kọ pẹ̀lú AI, nígbà tí o ń ṣàyẹ̀wò àwọn òfin ẹ̀tọ́ láti ṣeré àti òfin recruiting ti eré rẹ ní àwọn ojú-ìwé oníṣẹ́.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn eléré ìdárayá ilé-ẹ̀kọ́ girama àti junior college tí wọ́n fẹ́ ṣeré ní kọ́lẹ́ẹ̀jì, àwọn òbí wọn, àti àwọn kóòṣì tó ń ràn wọ́n lọ́wọ́. Apá kúkúrú kan tún ń ran àwọn kóòṣì lọ́wọ́ láti ṣètò àkíyèsí scouting lọ́nà tó tọ́.",
    "Recruiting (bí kọ́lẹ́ẹ̀jì ṣe ń wá eléré) jẹ́ iṣẹ́ tí o lè ṣàkóso bí iṣẹ́ àkànṣe kan. O máa ṣèwádìí nípa àwọn ilé-ẹ̀kọ́, fi agbára àti ìwà rẹ hàn kedere, kàn sí àwọn kóòṣì lọ́nà tó yẹ, kí o sì tọpinpin gbogbo nǹkan ní ibì kan, pẹ̀lú AI láti fi àkókò pamọ́, ṣùgbọ́n láìfi ṣe irọ́ rárá.",
    "Àwọn òfin recruiting àti ẹ̀tọ́ láti ṣeré dá lórí eré rẹ àti division (NCAA Division I, II, III, NAIA, junior college), wọ́n sì máa ń yí padà lọ́pọ̀ ìgbà. Ẹ̀kọ́ yìí fi ibi tí o ti lè ṣàyẹ̀wò hàn ọ́; máa jẹ́rìí sí i nígbà gbogbo lọ́dọ̀ kóòṣì ilé-ẹ̀kọ́ girama rẹ, olùdámọ̀ràn (counselor) rẹ, àti àwọn ojú-ìwé oníṣẹ́."
  ],
  finalTask: "Ṣe ètò recruiting rẹ: spreadsheet pẹ̀lú ilé-ẹ̀kọ́ 15 tí o fẹ́ (reach, target àti likely), profaili recruiting ojú-ewé kan, fídíò highlight ìṣẹ́jú méjì sí mẹ́rin tí àwọn apá tó dára jù wà níwájú, àti ímeèlì àdáni sí kóòṣì mẹ́ta tí AI ràn ọ́ lọ́wọ́ láti kọ, tí ìwọ sì tún ṣe. Kọ àkíyèsí nípa àkáǹtì ẹ̀tọ́ láti ṣeré tí o nílò àti ibi tí o ti ṣàyẹ̀wò òfin recruiting fún eré rẹ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn eléré ìdárayá ilé-ẹ̀kọ́ girama àti junior college tí wọ́n fẹ́ ṣeré ní kọ́lẹ́ẹ̀jì, àwọn òbí wọn, àti àwọn kóòṣì tó ń ràn wọ́n lọ́wọ́ tàbí tó ń ṣe scouting fún àwọn eléré tuntun.",
    startingPoint: "Wọ́n ń ṣeré ìdíje, wọ́n sì lè ní fídíò ìdíje, ìkà (stats) àti kóòṣì ẹgbẹ́ tàbí ilé-ẹ̀kọ́. Ọ̀pọ̀ kò mọ àkáǹtì ẹ̀tọ́ láti ṣeré tí wọ́n nílò, wọ́n gbára lé AI tàbí àwọn àpilẹ̀kọ àtijọ́ fún òfin recruiting, wọ́n ń fi ímeèlì kan náà ránṣẹ́ sí gbogbo ènìyàn, wọn kò sì tọpinpin àwọn tí wọ́n kàn sí.",
    gap: "Gbígbàgbé àwọn ìgbésẹ̀ ẹ̀tọ́ láti ṣeré, lílépa àwọn ilé-ẹ̀kọ́ tí kò bá wọn mu, tàbí fífi ọ̀rọ̀ gbogbogbò ránṣẹ́ lè mú kí eléré pàdánù àyè nínú ẹgbẹ́ kọ́lẹ́ẹ̀jì tàbí ìrànlọ́wọ́ owó, àwọn iṣẹ́ tí a ń sanwó fún sì lè gba owó pẹ̀lú ìlérí èké. Ètò tó wà létòlétò, tí a ti ṣàyẹ̀wò òfin rẹ̀, pẹ̀lú ohun èlò òtítọ́ àti ímeèlì àdáni, ń fún wọn ní àǹfààní gidi.",
    constraints: [
      "Ọ̀rọ̀ tó rọrùn ní nǹkan bí ìpele kíkàwé kíláàsì 8",
      "Fóònù tàbí kọ̀ǹpútà pẹ̀lú Google Sheets, olùrànlọ́wọ́ AI ọ̀fẹ́ àti ohun èlò àtúnṣe fídíò",
      "Nǹkan bí ìṣẹ́jú 60 ẹ̀kọ́ pẹ̀lú àkókò láti ṣe profaili, fídíò àti àkọsílẹ̀ ilé-ẹ̀kọ́",
      "Òfin ẹ̀tọ́ láti ṣeré àti òfin ìkànsí recruiting yàtọ̀ síra láti àjọ sí àjọ, eré sí eré àti division sí division, wọ́n sì máa ń yí padà; ṣàyẹ̀wò ncaa.org, ojú-ìwé NAIA àti olùdámọ̀ràn ilé-ẹ̀kọ́",
      "Ọ̀pọ̀ àwọn eléré tuntun jẹ́ ọmọdé: kò sí àdírẹ́sì ilé tàbí ìsọfúnni àdáni nínú profaili tàbí irinṣẹ́ AI"
    ],
    prerequisites: "Kò sí. Ẹ̀kọ́ \"Ìtúpalẹ̀ Fídíò àti Ọgbọ́n Eré\" àti \"SEO àti Kíkọ́ Ojú-òpó Wẹ́ẹ̀bù Rẹ pẹ̀lú AI\" wúlò láti kà pẹ̀lú rẹ̀."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú àwọn ìpele kọ́lẹ́ẹ̀jì tí o ń lépa", action: "dá àkáǹtì ẹ̀tọ́ láti ṣeré tí o nílò mọ̀, kí o sì mọ ibi tí o ti lè ṣàyẹ̀wò òfin ìkànsí recruiting fún eré rẹ", standard: "nípa lílo àwọn ojú-ìwé oníṣẹ́ àti olùdámọ̀ràn rẹ, kì í ṣe AI tàbí àpilẹ̀kọ àtijọ́, fún òfin àti ọjọ́" },
    { id: "O2", condition: "Pẹ̀lú Google Sheets àti olùrànlọ́wọ́ AI", action: "ṣe àkọsílẹ̀ ilé-ẹ̀kọ́ 15 tí o fẹ́, kí o sì fi reach, target tàbí likely sí ọ̀kọ̀ọ̀kan", standard: "kí o ti ṣàyẹ̀wò gbogbo ilé-ẹ̀kọ́, orúkọ kóòṣì àti ìsọfúnni ẹgbẹ́ (roster) ní ojú-ìwé oníṣẹ́ ilé-ẹ̀kọ́ náà" },
    { id: "O3", condition: "Pẹ̀lú ìkà, máàkì àti àwọn apá fídíò rẹ tó jẹ́ òtítọ́", action: "ṣe profaili recruiting ojú-ewé kan àti fídíò highlight ìṣẹ́jú méjì sí mẹ́rin", standard: "kí gbogbo ìkà jẹ́ òtítọ́, kí àwọn apá tó dára jù wà ní ìṣẹ́jú-àáyá 30 àkọ́kọ́, kí o fi àmì sí ara rẹ ṣáájú apá kọ̀ọ̀kan, láìsí àdírẹ́sì ilé, kí kóòṣì sì ṣàyẹ̀wò rẹ̀" },
    { id: "O4", condition: "Pẹ̀lú profaili rẹ àti àkọ́kọ́ ọ̀rọ̀ tí AI kọ", action: "kọ ímeèlì àdáni láti fi ara rẹ hàn sí kóòṣì kọ́lẹ́ẹ̀jì mẹ́ta", standard: "kí ọ̀kọ̀ọ̀kan kéré sí ọ̀rọ̀ 150, pẹ̀lú àkọlé tó yé àti ìdí kan tó jẹ́ òtítọ́ tó sì ṣe pàtó fún ilé-ẹ̀kọ́ kọ̀ọ̀kan, tí ìwọ fúnra rẹ fi ránṣẹ́ láti ímeèlì tó bójúmu" },
    { id: "O5", condition: "Pẹ̀lú àkọsílẹ̀ ilé-ẹ̀kọ́ rẹ", action: "tọpinpin gbogbo ìkànsí, èsì àti ìgbésẹ̀ tó kàn pẹ̀lú ọjọ́", standard: "kí o máa ṣe àtúnṣe rẹ̀ lọ́sẹ̀ọ̀sẹ̀, kí o sì ṣàyẹ̀wò iṣẹ́ recruiting èyíkéyìí tí a ń sanwó fún pẹ̀lú kóòṣì tàbí olùdámọ̀ràn rẹ ṣáájú" },
    { id: "O6", condition: "Gẹ́gẹ́ bí kóòṣì tó ń ṣe scouting fún àwọn eléré tuntun", action: "ṣètò àkíyèsí scouting pẹ̀lú àwọn ìlànà kan náà àti òṣùwọ̀n 1 sí 5 tó ní àlàyé fún gbogbo eléré", standard: "kí ìdíyelé wá láti ohun tí o rí, kí AI máa ṣàkópọ̀ àkíyèsí nìkan, kí ìsọfúnni àdáni wà ní ààbò, kí o sì ṣàyẹ̀wò ojúsàájú" }
  ],
  chapters: [
    {
      name: "Orí 1: Mímúra sílẹ̀ fún recruiting",
      lessons: [
        {
          objectives: ["O1"],
          title: "Òfin lákọ̀ọ́kọ́: ẹ̀tọ́ láti ṣeré àti ìpìlẹ̀ recruiting",
          minutes: 5,
          goal: "Wá àkáǹtì ẹ̀tọ́ láti ṣeré àti òfin recruiting tó kàn ọ́.",
          text: [
            "Eré ìdárayá kọ́lẹ́ẹ̀jì ní àwọn àjọ ọ̀tọ̀ọ̀tọ̀: NCAA Division I, II àti III, NAIA, àti àwọn junior college. Ọ̀kọ̀ọ̀kan ní òfin ẹ̀kọ́ àti òfin ẹ̀tọ́ láti ṣeré tirẹ̀.",
            "Tí o bá fẹ́ ṣeré ní NCAA Division I tàbí II, o máa nílò àkáǹtì ní NCAA Eligibility Center, tí ó ń ṣàyẹ̀wò ẹ̀kọ́ rẹ àti ipò rẹ gẹ́gẹ́ bí eléré tí kò gba owó (amateur). Ojú-ìwé Eligibility Center sọ nípa Profile Page fún àwọn akẹ́kọ̀ọ́ kékeré àti Division III, àti àkáǹtì ìwé-ẹ̀rí (certification) fún Division I àti II. NAIA ní ibùdó ẹ̀tọ́ láti ṣeré tirẹ̀; ṣàyẹ̀wò ojú-ìwé oníṣẹ́ rẹ̀.",
            "Ìgbà tí àwọn kóòṣì kọ́lẹ́ẹ̀jì lè kàn sí ọ, àti bí wọ́n ṣe lè ṣe é, dá lórí eré rẹ àti division, ó sì máa ń yí padà lọ́pọ̀ ìgbà. Má ṣe gbára lé AI tàbí àpilẹ̀kọ àtijọ́ fún ọjọ́; ṣàyẹ̀wò ncaa.org, béèrè lọ́wọ́ kóòṣì ilé-ẹ̀kọ́ girama rẹ àti olùdámọ̀ràn rẹ, kí o sì jẹ́ kí máàkì rẹ àti àwọn kókó ẹ̀kọ́ (core courses) rẹ wà lójú ọ̀nà."
          ],
          steps: ["Pinnu àwọn ìpele tí o ń lépa.", "Lọ sí NCAA Eligibility Center kí o sì ka àkáǹtì tó bá ọ mu.", "Ṣàyẹ̀wò ojú-ìwé ẹ̀tọ́ láti ṣeré ti NAIA tí ó bá kàn ọ́.", "Béèrè lọ́wọ́ olùdámọ̀ràn rẹ nípa àwọn kókó ẹ̀kọ́ àti máàkì.", "Ṣàyẹ̀wò òfin ìkànsí recruiting fún eré rẹ ní ncaa.org."],
          words: [["Eligibility (ẹ̀tọ́ láti ṣeré)", "títẹ̀lé àwọn òfin ẹ̀kọ́ àti àwọn òfin míì tí a nílò láti ṣeré ní kọ́lẹ́ẹ̀jì."], ["NCAA Eligibility Center", "ọ́fíìsì NCAA níbi tí àwọn eléré kọ́lẹ́ẹ̀jì ọjọ́ iwájú ti ń forúkọ sílẹ̀ kí wọ́n lè ṣàyẹ̀wò ẹ̀kọ́ wọn àti ipò amateur wọn."], ["Division", "ìpele kan nínú eré ìdárayá kọ́lẹ́ẹ̀jì, bíi NCAA Division I, II tàbí III."]],
          slides: [
            { title: "Àwọn ìpele eré ìdárayá kọ́lẹ́ẹ̀jì", bullets: ["NCAA Division I, II, III", "NAIA", "Àwọn junior college"] },
            { title: "Àwọn àkáǹtì ẹ̀tọ́ láti ṣeré", bullets: ["NCAA DI àti DII: àkáǹtì certification", "Àwọn akẹ́kọ̀ọ́ kékeré àti DIII: Profile Page", "NAIA: ibùdó ẹ̀tọ́ láti ṣeré tirẹ̀"] },
            { title: "Òfin ìkànsí máa ń yí padà", bullets: ["Ó dá lórí eré àti division", "Ṣàyẹ̀wò ncaa.org, kì í ṣe AI", "Béèrè lọ́wọ́ kóòṣì àti olùdámọ̀ràn rẹ"] }
          ],
          sources: [
            { name: "NCAA Eligibility Center", url: "https://web3.ncaa.org/ecwr3/" },
            { name: "NCAA: Name, Image and Likeness (òfin fún àwọn eléré tuntun àti eléré)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Lọ sí ojú-ìwé NCAA Eligibility Center kí o sì kọ irú àkáǹtì tó bá ọ mu. Lẹ́yìn náà, kọ ìbéèrè kan nípa òfin recruiting fún eré rẹ láti béèrè lọ́wọ́ kóòṣì ilé-ẹ̀kọ́ girama rẹ tàbí olùdámọ̀ràn rẹ.",
          youCanNow: "wá àkáǹtì ẹ̀tọ́ láti ṣeré àti àwọn òfin oníṣẹ́ tó kàn ọ́.",
          quickCheck: [
            { objective: "O1", q: "Àjọ wo ló ní ibùdó ẹ̀tọ́ láti ṣeré tirẹ̀ tó yàtọ̀ sí ti NCAA?", options: ["NAIA", "Ilé-ẹ̀kọ́ girama rẹ", "Ẹgbẹ́ club rẹ", "Ìwé ìròyìn àdúgbò"], answer: 0, why: "NAIA ní ibùdó ẹ̀tọ́ láti ṣeré tirẹ̀; ṣàyẹ̀wò ojú-ìwé oníṣẹ́ rẹ̀." },
            { objective: "O1", q: "AI sọ ọjọ́ tí àwọn kóòṣì kọ́lẹ́ẹ̀jì lè kọ́kọ́ pè ọ́ fún ọ. Kí ni o máa ṣe?", options: ["Gbà á gbọ́", "Gbé e síta fún àwọn ọmọ ẹgbẹ́", "Ṣàyẹ̀wò ncaa.org kí o sì béèrè lọ́wọ́ kóòṣì tàbí olùdámọ̀ràn rẹ", "Dúró kí kóòṣì pè"], answer: 2, why: "Òfin ìkànsí máa ń yí padà lọ́pọ̀ ìgbà; ṣàyẹ̀wò àwọn orísun oníṣẹ́, kì í ṣe AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ṣíṣe àkọsílẹ̀ àwọn ilé-ẹ̀kọ́ tí o fẹ́",
          minutes: 6,
          goal: "Ṣe spreadsheet ilé-ẹ̀kọ́ 15 tó bá ọ mu nínú eré, ẹ̀kọ́ àti ìgbésí ayé rẹ.",
          text: [
            "Ilé-ẹ̀kọ́ tó tọ́ ni èyí tí o ti lè ṣeré, kọ́ ohun tí o fẹ́, rí owó rẹ̀ san, kí inú rẹ sì dùn tí eré bá tilẹ̀ parí. Dà wọ́n pọ̀: àwọn ilé-ẹ̀kọ́ reach (tó ṣòro díẹ̀ láti dé), target (tó bá ọ mu dáadáa) àti likely (níbi tí o ti máa ṣe ìrànlọ́wọ́ dájúdájú).",
            "Ṣe Google Sheet pẹ̀lú àwọn ọ̀wọ̀n wọ̀nyí: Ilé-ẹ̀kọ́, Division, Ibi, Ẹ̀kọ́ tí o fẹ́ (major), Àìní roster ní ipò rẹ, Ìbámu ẹ̀kọ́, Àkíyèsí owó, Orúkọ àti ímeèlì kóòṣì, Ipò. Gba orúkọ kóòṣì àti ìsọfúnni roster láti ojú-ìwé eré ìdárayá oníṣẹ́ ilé-ẹ̀kọ́ kọ̀ọ̀kan.",
            "Olùrànlọ́wọ́ AI lè dábàá àwọn ilé-ẹ̀kọ́ láti ṣèwádìí: \"Agbábọ́ọ̀lù midfielder ni mí, gíga mi jẹ́ 5'9\", GPA mi jẹ́ 3.5, mo sì fẹ́ kọ́ nọ́ọ̀sì ní Gúúsù-ìlà-oòrùn (Southeast). Dábàá kọ́lẹ́ẹ̀jì 20 tó ní ẹgbẹ́ bọ́ọ̀lù ní ìpele ọ̀tọ̀ọ̀tọ̀ láti ṣèwádìí.\" Lẹ́yìn náà, ṣàyẹ̀wò ọ̀kọ̀ọ̀kan fúnra rẹ; àkọsílẹ̀ AI lè ti pẹ́ tàbí kí ó ṣàṣìṣe."
          ],
          steps: ["Ṣe sheet náà pẹ̀lú àwọn ọ̀wọ̀n tó wà lókè.", "Béèrè lọ́wọ́ AI fún àwọn ilé-ẹ̀kọ́ láti ṣèwádìí.", "Ṣàyẹ̀wò ojú-ìwé eré ìdárayá àti ẹ̀kọ́ oníṣẹ́ ilé-ẹ̀kọ́ kọ̀ọ̀kan.", "Fi reach, target tàbí likely sí ọ̀kọ̀ọ̀kan.", "Pa 15 tó bá ọ mu ní tòótọ́ mọ́."],
          words: [["Àkọsílẹ̀ ilé-ẹ̀kọ́ (target list)", "àwọn ilé-ẹ̀kọ́ tí o fẹ́ kàn sí."], ["Roster", "àkọsílẹ̀ àwọn eléré inú ẹgbẹ́ kan; ó fi ẹni tó ń jáde ilé-ẹ̀kọ́ ní ipò rẹ hàn."]],
          slides: [
            { title: "Ilé-ẹ̀kọ́ tó tọ́", bullets: ["Ṣé o lè ṣeré níbẹ̀?", "Ṣé o lè kọ́ ohun tí o fẹ́?", "Ṣé o lè san owó rẹ̀? Ṣé inú rẹ máa dùn láìsí eré?"] },
            { title: "Àwọn ọ̀wọ̀n sheet", bullets: ["Ilé-ẹ̀kọ́, Division, Ibi, Major", "Àìní roster, Ìbámu ẹ̀kọ́, Àkíyèsí owó", "Ìkànsí kóòṣì, Ipò"] },
            { title: "AI dábàá, ìwọ ṣàyẹ̀wò", bullets: ["Béèrè fún ilé-ẹ̀kọ́ láti ṣèwádìí", "Ṣàyẹ̀wò àwọn ojú-ìwé oníṣẹ́", "Reach, target, likely"] }
          ],
          tryIt: "Ṣe sheet àkọsílẹ̀ ilé-ẹ̀kọ́ rẹ. Lo AI fún èrò, ṣàyẹ̀wò ilé-ẹ̀kọ́ mẹ́wàá ní ojú-ìwé oníṣẹ́ wọn, kí o sì fi reach, target tàbí likely sí ọ̀kọ̀ọ̀kan.",
          youCanNow: "ṣe àkọsílẹ̀ ilé-ẹ̀kọ́ tó dọ́gba, kí o sì ṣàyẹ̀wò rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ilé-ẹ̀kọ́ \"likely\" nínú àkọsílẹ̀ rẹ?", options: ["Èyí tó ṣòro gan-an láti dé", "Ilé-ẹ̀kọ́ tí o ti máa ṣe ìrànlọ́wọ́ dájúdájú", "Ilé-ẹ̀kọ́ tí kò ní ẹgbẹ́ nínú eré rẹ", "Ilé-ẹ̀kọ́ àlá rẹ nìkan"], answer: 1, why: "Ilé-ẹ̀kọ́ likely ni ibi tí o ti máa ṣe ìrànlọ́wọ́ dájúdájú." },
            { objective: "O2", q: "AI kọ ilé-ẹ̀kọ́ kan tí o kò gbọ́ nípa rẹ̀ rí. Kí ni o máa ṣe?", options: ["Fi kún un láìṣàyẹ̀wò", "Pa gbogbo àkọsílẹ̀ rẹ́", "Fi ímeèlì ránṣẹ́ sí kóòṣì lẹ́sẹ̀kẹsẹ̀", "Kọ́kọ́ ṣàyẹ̀wò ojú-ìwé eré ìdárayá àti ẹ̀kọ́ oníṣẹ́ rẹ̀"], answer: 3, why: "Àkọsílẹ̀ AI lè ti pẹ́ tàbí kí ó ṣàṣìṣe, nítorí náà ṣàyẹ̀wò ilé-ẹ̀kọ́ kọ̀ọ̀kan." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Profaili recruiting rẹ àti fídíò highlight",
          minutes: 6,
          goal: "Ṣe profaili recruiting ojú-ewé kan, kí o sì ṣètò fídíò highlight ìṣẹ́jú méjì sí mẹ́rin.",
          text: [
            "Profaili recruiting jẹ́ ojú-ewé kan: orúkọ, ọdún tí o máa jáde ilé-ẹ̀kọ́ (grad year), ipò, gíga àti ìwúwo (òtítọ́), ilé-ẹ̀kọ́ girama àti ẹgbẹ́ club, àwọn ìkà pàtàkì, ìsọfúnni ẹ̀kọ́ (GPA, máàkì ìdánwò tí o bá ní, ẹ̀kọ́ tí o fẹ́ kọ́), àwọn àmì-ẹ̀yẹ, ìsọfúnni ìkànsí àwọn kóòṣì rẹ, ìjápọ̀ highlight rẹ, àti ímeèlì rẹ.",
            "Fídíò highlight gbọ́dọ̀ kúrú, ní ọ̀pọ̀ ìgbà ìṣẹ́jú méjì sí mẹ́rin, pẹ̀lú àwọn apá tó dára jù ní ìṣẹ́jú-àáyá 30 àkọ́kọ́. Fi ara rẹ hàn ṣáájú apá kọ̀ọ̀kan pẹ̀lú ọfà tàbí òbìrí. Fi ìjápọ̀ fídíò gbogbo ìdíje kún un tí àwọn kóòṣì nínú eré rẹ bá fẹ́ rí i. Béèrè lọ́wọ́ kóòṣì rẹ ohun tí àwọn kóòṣì nínú eré rẹ ń retí.",
            "AI lè ràn ọ́ lọ́wọ́ láti kọ profaili láti inú àkíyèsí rẹ àti láti tò àkọsílẹ̀ àwọn apá fídíò rẹ. Gbogbo ìkà gbọ́dọ̀ jẹ́ òtítọ́ tí a lè ṣàyẹ̀wò; àwọn kóòṣì máa ń béèrè lọ́wọ́ àwọn kóòṣì rẹ. Má ṣe fi ìsọfúnni àdáni bí àdírẹ́sì ilé sínú profaili."
          ],
          steps: ["Kó àwọn ìkà, máàkì àti àmì-ẹ̀yẹ rẹ tó jẹ́ òtítọ́ jọ.", "Ní kí AI ṣètò profaili ojú-ewé kan.", "Yan àwọn apá tó dára jù, kí o sì fi èyí tó ga jù síwájú.", "Fi àmì sí ara rẹ ṣáájú apá kọ̀ọ̀kan.", "Ní kí kóòṣì rẹ ṣàyẹ̀wò méjèèjì."],
          words: [["Profaili recruiting", "àkópọ̀ ojú-ewé kan nípa rẹ gẹ́gẹ́ bí eléré àti akẹ́kọ̀ọ́, fún àwọn kóòṣì kọ́lẹ́ẹ̀jì."], ["Fídíò highlight", "fídíò kúkúrú ti àwọn ìgbésẹ̀ eré rẹ tó dára jù."]],
          slides: [
            { title: "Profaili ojú-ewé kan", bullets: ["Grad year, ipò, gíga àti ìwúwo òtítọ́", "Ìkà, GPA, ẹ̀kọ́ tí o fẹ́ kọ́", "Ìkànsí kóòṣì, ìjápọ̀ highlight, ímeèlì rẹ"] },
            { title: "Fídíò highlight", bullets: ["Ní ọ̀pọ̀ ìgbà ìṣẹ́jú 2-4", "Àwọn apá tó dára jù ní ìṣẹ́jú-àáyá 30 àkọ́kọ́", "Fi àmì sí ara rẹ ṣáájú apá kọ̀ọ̀kan"] },
            { title: "Òtítọ́ àti ààbò", bullets: ["Àwọn kóòṣì máa ń ṣàyẹ̀wò ìkà", "Kò sí àdírẹ́sì ilé", "Kóòṣì ṣàyẹ̀wò rẹ̀"] }
          ],
          tryIt: "Lo AI láti yí àkíyèsí rẹ padà sí profaili ojú-ewé kan. Kọ àkọsílẹ̀ àwọn apá fídíò rẹ pẹ̀lú márùn-ún tó dára jù níwájú, kí o sì ní kí kóòṣì rẹ ṣàyẹ̀wò méjèèjì.",
          youCanNow: "ṣe profaili recruiting òtítọ́ àti ètò fídíò highlight tó lágbára.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí o fi máa fi àmì sí ara rẹ ṣáájú apá kọ̀ọ̀kan?", options: ["Kí àwọn kóòṣì lè mọ eléré tí ìwọ jẹ́", "Láti mú fídíò gùn sí i", "Láti fi nọ́mbà rẹ pamọ́", "Nítorí orin béèrè fún un"], answer: 0, why: "Ọfà tàbí òbìrí ń ran àwọn kóòṣì lọ́wọ́ láti rí ọ lẹ́sẹ̀kẹsẹ̀." },
            { objective: "O3", q: "Àkókò sáré 40-yard tí o kọ yára ju èyí tí o ti sá rí lọ. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀; àwọn kóòṣì kò ní ṣàyẹ̀wò", "Yọ ìkà náà kúrò pátápátá", "Yí i padà sí àkókò rẹ tó jẹ́ òtítọ́ tí a lè ṣàyẹ̀wò", "Dín in kù díẹ̀ sí i"], answer: 2, why: "Gbogbo ìkà gbọ́dọ̀ jẹ́ òtítọ́; àwọn kóòṣì máa ń béèrè lọ́wọ́ àwọn kóòṣì rẹ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Mímúra sílẹ̀ fún recruiting",
        questions: [
          { objective: "O1", q: "O fẹ́ ṣeré ní NCAA Division I. Níbo ni o ti máa forúkọ sílẹ̀ fún ẹ̀tọ́ láti ṣeré?", options: ["Ohun èlò ìkànnì àjọlò kan", "Ilé ìdárayá rẹ", "NCAA Eligibility Center", "Kò sí ibì kankan"], answer: 2, why: "Àwọn eléré DI àti DII nílò àkáǹtì certification ní Eligibility Center." },
          { objective: "O1", q: "Níbo ni o ti yẹ kí o ṣàyẹ̀wò ìgbà tí àwọn kóòṣì lè kàn sí ọ?", options: ["ncaa.org àti kóòṣì ilé-ẹ̀kọ́ girama rẹ tàbí olùdámọ̀ràn rẹ", "Chatbot AI nìkan", "Àpilẹ̀kọ tó ti pé ọdún 5", "Alátakò rẹ"], answer: 0, why: "Òfin dá lórí eré àti division, ó sì máa ń yí padà lọ́pọ̀ ìgbà." },
          { objective: "O2", q: "Àkọsílẹ̀ ilé-ẹ̀kọ́ tó dọ́gba ní:", options: ["Àwọn ẹgbẹ́ 5 tó ga jù nìkan", "Ilé-ẹ̀kọ́ kan ṣoṣo", "Àwọn ilé-ẹ̀kọ́ tí o kò tíì ṣàyẹ̀wò", "Àwọn ilé-ẹ̀kọ́ reach, target àti likely"], answer: 3, why: "Àdàpọ̀ ń fún ọ ní àwọn àṣàyàn gidi." },
          { objective: "O2", q: "AI dábàá ilé-ẹ̀kọ́ kan tí wọ́n ti pa ẹgbẹ́ rẹ̀ rẹ́. Kí ló ṣẹlẹ̀?", options: ["Kò sí nǹkan kan", "Àkọsílẹ̀ AI lè ti pẹ́; ṣàyẹ̀wò ní ojú-ìwé oníṣẹ́", "Ilé-ẹ̀kọ́ náà ń fi pamọ́", "Kí o béèrè fún un bẹ́ẹ̀ náà"], answer: 1, why: "Máa ṣàyẹ̀wò àwọn ojú-ìwé oníṣẹ́ nígbà gbogbo." },
          { objective: "O3", q: "Níbo ni àwọn apá tó dára jù gbọ́dọ̀ wà nínú fídíò highlight?", options: ["Ní ìparí pátápátá", "Ní ìṣẹ́jú-àáyá 30 àkọ́kọ́", "Ní àárín", "Ní ibi tí a kò rí"], answer: 1, why: "Àwọn kóòṣì máa ń pinnu kíákíá." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkàn sí àwọn kóòṣì àti wíwà létòlétò",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkọ ímeèlì àdáni sí àwọn kóòṣì pẹ̀lú AI",
          minutes: 6,
          goal: "Kọ ímeèlì kúkúrú àti àdáni láti fi ara rẹ hàn sí kóòṣì kọ́lẹ́ẹ̀jì kan.",
          text: [
            "Àwọn kóòṣì máa ń gba ímeèlì púpọ̀. Èyí tó kúrú tó sì jẹ́ àdáni ló ń borí. Fi wọ̀nyí sí i: àkọlé pẹ̀lú grad year, ipò àti ìsọfúnni pàtàkì (\"2027 Midfielder | 3.5 GPA | Metro FC Club Team\"); ìdí tí o fi nífẹ̀ẹ́ sí ilé-ẹ̀kọ́ wọn gan-an; àwọn ìkà pàtàkì àti ẹ̀kọ́ rẹ; ìjápọ̀ highlight àti profaili rẹ; ètò ìdíje rẹ tó ń bọ̀ (àwọn ìdíje àti showcase); àti ìsọfúnni ìkànsí kóòṣì rẹ.",
            "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI: \"Kọ ímeèlì kúkúrú sí olórí kóòṣì bọ́ọ̀lù ní [ilé-ẹ̀kọ́]. Lo profaili mi tó wà nísàlẹ̀. Sọ pé mo nífẹ̀ẹ́ sí ẹ̀kọ́ nọ́ọ̀sì wọn àti bí wọ́n ṣe ń di bọ́ọ̀lù mú (possession style). Kí ó kéré sí ọ̀rọ̀ 150.\" Lẹ́yìn náà, sọ ọ́ di tìrẹ, kí o sì ṣàyẹ̀wò gbogbo kúlẹ̀kúlẹ̀.",
            "Fi ránṣẹ́ láti ímeèlì tó bójúmu tí o ń ṣàyẹ̀wò lójoojúmọ́. Má ṣe fi ímeèlì kan náà gẹ́lẹ́ ránṣẹ́ sí gbogbo ilé-ẹ̀kọ́; àwọn kóòṣì máa ń mọ̀. Ìwọ fúnra rẹ ni kí o fi ránṣẹ́, kì í ṣe àwọn òbí rẹ, kí o sì tẹ̀lé e lọ́nà ọ̀wọ̀ lẹ́yìn ọ̀sẹ̀ méjì tàbí bẹ́ẹ̀ pẹ̀lú ìsọfúnni tuntun, bíi highlight tuntun."
          ],
          steps: ["Kọ àkọlé tó yé.", "Ní kí AI kọ àkọ́kọ́ ọ̀rọ̀ tí kò tó ọ̀rọ̀ 150 pẹ̀lú profaili rẹ.", "Fi ìdí kan tó jẹ́ òtítọ́ tó sì ṣe pàtó fún ilé-ẹ̀kọ́ náà kún un.", "Ṣàyẹ̀wò gbogbo kúlẹ̀kúlẹ̀ àti orúkọ kóòṣì.", "Fi ránṣẹ́ láti ímeèlì rẹ tó bójúmu; tẹ̀lé e pẹ̀lú ìsọfúnni tuntun."],
          words: [["Àkọlé (subject line)", "orí-ọ̀rọ̀ kúkúrú ímeèlì; ohun àkọ́kọ́ tí kóòṣì máa rí."], ["Showcase", "ìṣẹ̀lẹ̀ kan níbi tí àwọn eléré ti ń ṣeré níwájú àwọn kóòṣì kọ́lẹ́ẹ̀jì."]],
          slides: [
            { title: "Kúkúrú àti àdáni", bullets: ["Àkọlé: grad year, ipò, ìsọfúnni pàtàkì", "Ìdí tí o fi fẹ́ ilé-ẹ̀kọ́ yìí gan-an", "Ìkà, ẹ̀kọ́, ìjápọ̀ highlight"] },
            { title: "AI kọ ọ́, ìwọ sọ ọ́ di tìrẹ", bullets: ["Kò tó ọ̀rọ̀ 150", "Ìdí òtítọ́ kan fún ilé-ẹ̀kọ́ náà", "Ṣàyẹ̀wò orúkọ kóòṣì"] },
            { title: "Fi ránṣẹ́ dáadáa", bullets: ["Ímeèlì tó bójúmu, tí o ń wò lójoojúmọ́", "Ìwọ ni kí o fi ránṣẹ́, kì í ṣe òbí rẹ", "Tẹ̀lé e pẹ̀lú ìsọfúnni tuntun"] }
          ],
          tryIt: "Kọ ímeèlì sí kóòṣì mẹ́ta nínú àkọsílẹ̀ rẹ pẹ̀lú ìrànlọ́wọ́ AI. Sọ ọ̀kọ̀ọ̀kan di àdáni, kí o sì ní kí kóòṣì rẹ tàbí òbí rẹ ka ọ̀kan kí o tó fi ránṣẹ́.",
          youCanNow: "kọ ímeèlì kúkúrú àti àdáni sí kóòṣì kọ́lẹ́ẹ̀jì kan.",
          quickCheck: [
            { objective: "O4", q: "Kí ló yẹ kí ó wà nínú àkọlé ímeèlì sí kóòṣì?", options: ["\"Hi coach\"", "Grad year, ipò àti ìsọfúnni pàtàkì", "Orúkọ àwọn òbí rẹ", "\"Jọ̀wọ́ ka á\""], answer: 1, why: "Àkọlé tó yé pẹ̀lú grad year, ipò àti ìsọfúnni pàtàkì máa ń fa àkíyèsí." },
            { objective: "O4", q: "Ọ̀sẹ̀ méjì lẹ́yìn ímeèlì rẹ, kò sí èsì. Kí ni o máa ṣe?", options: ["Fi ímeèlì kan náà ránṣẹ́ lẹ́ẹ̀kan sí i", "Ní kí òbí rẹ pe kóòṣì", "Fi ilé-ẹ̀kọ́ náà sílẹ̀", "Tẹ̀lé e lọ́nà ọ̀wọ̀ pẹ̀lú ìsọfúnni tuntun, bíi highlight tuntun"], answer: 3, why: "Tẹ̀lé e lọ́nà ọ̀wọ̀ lẹ́yìn ọ̀sẹ̀ méjì tàbí bẹ́ẹ̀ pẹ̀lú nǹkan tuntun." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Títọpinpin recruiting rẹ bí iṣẹ́ àkànṣe",
          minutes: 5,
          goal: "Tọpinpin gbogbo ìkànsí àti ìgbésẹ̀ tó kàn nínú sheet recruiting rẹ.",
          text: [
            "Fi àwọn ọ̀wọ̀n ìtọpinpin kún àkọsílẹ̀ ilé-ẹ̀kọ́ rẹ: Ọjọ́ tí o kàn sí wọn, Èsì (bẹ́ẹ̀ni/rárá), Ohun tí wọ́n sọ, Ìgbésẹ̀ tó kàn, Ọjọ́ ìgbésẹ̀ tó kàn. Ṣe àtúnṣe rẹ̀ lọ́sẹ̀ọ̀sẹ̀.",
            "Ṣọ́ àwọn àmì ìfẹ́ gidi: èsì àdáni, ìbéèrè nípa máàkì rẹ, ìpè sí camp tàbí ìbẹ̀wò, tàbí kóòṣì tó wá wò ọ́ níbi ìdíje. Ìpolówó camp gbogbogbò kò dà bí ìfẹ́ àdáni.",
            "Recruiting lè fa wàhálà ọkàn. Fi ẹ̀kọ́ àti ìdánrawò sí ipò àkọ́kọ́. Ṣọ́ra fún \"àwọn iṣẹ́ recruiting\" tó ń ṣèlérí sikọláṣíìpù dájúdájú tí o bá sanwó; ṣàyẹ̀wò pẹ̀lú kóòṣì ilé-ẹ̀kọ́ girama rẹ àti olùdámọ̀ràn rẹ kí o tó san owó fún ẹnikẹ́ni."
          ],
          steps: ["Fi àwọn ọ̀wọ̀n ìtọpinpin kún sheet rẹ.", "Kọ gbogbo ímeèlì, èsì àti ìpè sílẹ̀.", "Kọ ìgbésẹ̀ tó kàn àti ọjọ́ rẹ̀.", "Ṣe àtúnṣe lọ́sẹ̀ọ̀sẹ̀.", "Ṣàyẹ̀wò iṣẹ́ recruiting tí a ń sanwó fún pẹ̀lú kóòṣì rẹ ṣáájú."],
          words: [["Ìtẹ̀lé (follow-up)", "ọ̀rọ̀ ọ̀wọ̀ tó kàn pẹ̀lú ìsọfúnni tuntun."], ["Iṣẹ́ recruiting (recruiting service)", "ilé-iṣẹ́ kan tó ń gba owó láti polówó rẹ sí àwọn kọ́lẹ́ẹ̀jì."]],
          slides: [
            { title: "Tọpinpin gbogbo nǹkan", bullets: ["Ọjọ́ ìkànsí, èsì, ohun tí wọ́n sọ", "Ìgbésẹ̀ tó kàn àti ọjọ́ rẹ̀", "Ṣe àtúnṣe lọ́sẹ̀ọ̀sẹ̀"] },
            { title: "Ìfẹ́ gidi", bullets: ["Èsì àdáni", "Ìbéèrè nípa máàkì", "Ìpè sí camp tàbí ìbẹ̀wò"] },
            { title: "Wà ní ìwọ̀ntúnwọ̀nsì", bullets: ["Ẹ̀kọ́ àti ìdánrawò lákọ̀ọ́kọ́", "Má sanwó fún sikọláṣíìpù tí wọ́n \"ṣèlérí\"", "Kọ́kọ́ ṣàyẹ̀wò pẹ̀lú kóòṣì rẹ"] }
          ],
          tryIt: "Fi àwọn ọ̀wọ̀n ìtọpinpin kún sheet rẹ, kí o sì kọ ímeèlì mẹ́ta rẹ sílẹ̀ pẹ̀lú ìgbésẹ̀ tó kàn àti ọjọ́ fún ọ̀kọ̀ọ̀kan.",
          youCanNow: "tọpinpin àwọn ìkànsí recruiting àti ìgbésẹ̀ tó kàn bí iṣẹ́ àkànṣe.",
          quickCheck: [
            { objective: "O5", q: "Ọ̀wọ̀n ìtọpinpin wo ló ń rán ọ létí ohun tí o máa ṣe?", options: ["Ìgbésẹ̀ tó kàn àti ọjọ́ ìgbésẹ̀ tó kàn", "Àwọ̀ tí o fẹ́ràn", "Àmì ẹgbẹ́ (mascot)", "Àkọsílẹ̀ ìṣẹ́gun ẹgbẹ́"], answer: 0, why: "Ìgbésẹ̀ tó kàn àti ọjọ́ rẹ̀ ń jẹ́ kí recruiting rẹ máa tẹ̀síwájú." },
            { objective: "O5", q: "O gba ìpolówó camp gbogbogbò láti kọ́lẹ́ẹ̀jì kan. Kí ló túmọ̀ sí?", options: ["O ti ní sikọláṣíìpù", "Kò dà bí ìfẹ́ àdáni", "O gbọ́dọ̀ lọ", "Kóòṣì ti wo fídíò rẹ"], answer: 1, why: "Èsì àdáni àti ìbéèrè ń fi ìfẹ́ gidi hàn; ìpolówó gbogbogbò kì í ṣe bẹ́ẹ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fún àwọn kóòṣì: àkíyèsí scouting tó tọ́ tó sì wà létòlétò",
          minutes: 5,
          goal: "Ṣètò àkíyèsí scouting nípa àwọn eléré tuntun lọ́nà tó tọ́ tó sì dúró ṣinṣin.",
          text: [
            "Àwọn kóòṣì tó ń ṣe scouting tí wọ́n sì ń dábàá eléré lè lo àwọn irinṣẹ́ kan náà. Ṣe sheet pẹ̀lú àwọn ìlànà kan náà fún gbogbo eléré: ọgbọ́n ipò, agbára ara, òye eré, ìmúratán láti gba ìtọ́sọ́nà (coachability), ẹ̀kọ́ àti àkíyèsí nípa ìwà láti àwọn orísun tí a ti ṣàyẹ̀wò.",
            "Lo òṣùwọ̀n 1 sí 5 tó rọrùn pẹ̀lú àlàyé kíkọ fún nọ́mbà kọ̀ọ̀kan, kí ìdíyelé lè túmọ̀ sí ohun kan náà láàárín àwọn olùdíyelé. AI lè ṣàkópọ̀ àkíyèsí tí o kọ sí ìròyìn kúkúrú, ṣùgbọ́n rí i dájú pé ìdíyelé wá láti ohun tí o rí, kì í ṣe láti àmọ̀tẹ́lẹ̀ AI.",
            "Dáàbò bo àṣírí àwọn eléré tuntun: ọ̀pọ̀ nínú wọn jẹ́ ọmọdé. Pa àkíyèsí mọ́ sí àwọn ibi àdáni tí a fọwọ́ sí, má ṣe lẹ ìsọfúnni àdáni sínú irinṣẹ́ AI, tẹ̀lé òfin recruiting àjọ rẹ, kí o sì ṣọ́ ojúsàájú, bíi dídájọ́ nípa gíga nìkan tàbí nípa bí fídíò highlight ṣe dára tó dípò agbára eléré."
          ],
          steps: ["Lo àwọn ìlànà kan náà fún gbogbo eléré tuntun.", "Ṣàlàyé nọ́mbà kọ̀ọ̀kan lórí òṣùwọ̀n 1-5.", "Kọ àkíyèsí láti ohun tí o rí.", "Lo AI láti ṣàkópọ̀ àkíyèsí, kì í ṣe láti díyelé.", "Pa ìsọfúnni mọ́ ní àṣírí; ṣàyẹ̀wò ojúsàájú."],
          words: [["Rubric", "ìtọ́sọ́nà máàkì tó ṣàlàyé ohun tí máàkì kọ̀ọ̀kan túmọ̀ sí."], ["Coachability", "bí eléré ṣe ń gbọ́ tí ó sì ń lo ìmọ̀ràn tí a fún un."]],
          slides: [
            { title: "Ìlànà kan náà fún gbogbo", bullets: ["Ọgbọ́n, agbára ara, òye eré", "Coachability, ẹ̀kọ́, ìwà"] },
            { title: "Rubric 1-5 tó yé", bullets: ["Ṣàlàyé nọ́mbà kọ̀ọ̀kan", "Ìdíyelé láti ohun tí o rí", "AI ṣàkópọ̀, kì í díyelé"] },
            { title: "Tó tọ́ àti àṣírí", bullets: ["Ọ̀pọ̀ eléré tuntun jẹ́ ọmọdé", "Kò sí ìsọfúnni àdáni nínú AI", "Ṣọ́ ojúsàájú"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: eléré, parí sheet ilé-ẹ̀kọ́ 15 rẹ, profaili, ètò highlight àti ímeèlì mẹ́ta sí kóòṣì, pẹ̀lú àkíyèsí nípa àkáǹtì ẹ̀tọ́ láti ṣeré rẹ àti ibi tí o ti ṣàyẹ̀wò òfin. Kóòṣì: ṣe rubric 1-5 pẹ̀lú àlàyé fún ìlànà márùn-ún.",
          youCanNow: "ṣètò iṣẹ́ recruiting tàbí scouting lọ́nà tó yé, òtítọ́ àti tó tọ́.",
          quickCheck: [
            { objective: "O6", q: "Kí ló dé tí a fi ń kọ àlàyé fún nọ́mbà kọ̀ọ̀kan lórí òṣùwọ̀n 1 sí 5?", options: ["Kí ìdíyelé lè túmọ̀ sí ohun kan náà láàárín àwọn olùdíyelé", "Láti mú sheet gùn sí i", "Kí AI lè díyelé àwọn eléré", "Láti tò àwọn eléré lẹ́sẹẹsẹ nípa gíga"], answer: 0, why: "Nọ́mbà tí a ṣàlàyé ń jẹ́ kí ìdíyelé dúró ṣinṣin láàárín àwọn kóòṣì." },
            { objective: "O6", q: "Eléré tuntun kan kúrú, ṣùgbọ́n ó ń ṣeré pẹ̀lú ọgbọ́n, ó sì ń borí gbogbo ìjà bọ́ọ̀lù. Báwo ni o ṣe máa díyelé òye eré rẹ̀?", options: ["Kéré, nítorí gíga rẹ̀", "Fò ó sílẹ̀", "Láti ohun tí o rí, kì í ṣe láti ìtóbi rẹ̀", "Láti bí fídíò ṣe dára tó"], answer: 2, why: "Dídájọ́ nípa ìtóbi nìkan jẹ́ ọ̀kan nínú ojúsàájú." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkàn sí àwọn kóòṣì àti wíwà létòlétò",
        questions: [
          { objective: "O4", q: "Àkọlé wo ló dára jù fún ímeèlì sí kóòṣì?", options: ["\"Hi\"", "\"Jọ̀wọ́ ka á!!!\"", "Òfìfo", "\"2027 Midfielder | 3.5 GPA | Metro FC Club Team\""], answer: 3, why: "Ó fi ìsọfúnni pàtàkì hàn lójú ẹsẹ̀." },
          { objective: "O4", q: "Ta ló yẹ kí ó fi ímeèlì ránṣẹ́ sí àwọn kóòṣì kọ́lẹ́ẹ̀jì?", options: ["Eléré fúnra rẹ̀", "Àwọn òbí nìkan", "Àjèjì kan", "Bọ́ọ̀tì AI fúnra rẹ̀"], answer: 0, why: "Àwọn kóòṣì fẹ́ gbọ́ láti ẹnu eléré." },
          { objective: "O5", q: "Èwo ni àmì ìfẹ́ gidi?", options: ["Ìpolówó camp tí wọ́n fi ránṣẹ́ sí gbogbo ènìyàn", "Like lórí ìkànnì àjọlò", "Èsì àdáni tó béèrè nípa máàkì rẹ", "Kò sí nǹkan kan"], answer: 2, why: "Ìbéèrè àdáni ń fi ìfẹ́ gidi hàn." },
          { objective: "O5", q: "Iṣẹ́ kan ṣèlérí sikọláṣíìpù dájúdájú tí o bá sanwó. Kí ló yẹ kí o ṣe?", options: ["San owó lẹ́sẹ̀kẹsẹ̀", "Fún wọn ní ọ̀rọ̀ aṣínà (password) rẹ", "Fọwọ́ sí i láìkà á", "Kọ́kọ́ ṣàyẹ̀wò pẹ̀lú kóòṣì ilé-ẹ̀kọ́ girama rẹ àti olùdámọ̀ràn rẹ"], answer: 3, why: "Kò sí ẹni tó lè ṣèlérí sikọláṣíìpù dájúdájú." },
          { objective: "O6", q: "Fún àwọn kóòṣì, ó yẹ kí a lo AI láti:", options: ["Díyelé àwọn eléré tí kò tíì rí", "Ṣàkópọ̀ àkíyèsí tí a kọ, kì í ṣe láti ṣe ìdíyelé", "Pa ìsọfúnni àdáni àwọn ọmọdé mọ́", "Rọ́pò ìdíyelé"], answer: 1, why: "Ìdíyelé wá láti ohun tí kóòṣì rí." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Ṣíṣàwárí àti Gbígba Eléré",
    questions: [
      { objective: "O1", q: "Èwo ni àjọ eré ìdárayá kọ́lẹ́ẹ̀jì?", options: ["NFL", "Ilé-iṣẹ́ bàtà kan", "NAIA", "Ohun èlò ìkànnì àjọlò kan"], answer: 2, why: "NAIA jẹ́ àjọ eré ìdárayá kọ́lẹ́ẹ̀jì." },
      { objective: "O1", q: "NCAA Eligibility Center ń ṣàyẹ̀wò:", options: ["Ẹ̀kọ́ àti ipò amateur", "Iye àwọn tó ń tẹ̀lé ọ (followers)", "Gíga rẹ nìkan", "Irú orin tí o fẹ́ràn"], answer: 0, why: "Ó ń fún ni ní ìwé-ẹ̀rí ẹ̀tọ́ láti ṣeré." },
      { objective: "O1", q: "Àwọn akẹ́kọ̀ọ́ kékeré àti eléré DIII lè bẹ̀rẹ̀ pẹ̀lú:", options: ["Profile Page", "Kò sí nǹkan kan", "Iṣẹ́ tí a ń sanwó fún", "Ìdánwò eré (tryout)"], answer: 0, why: "Eligibility Center sọ nípa Profile Page fún wọn." },
      { objective: "O1", q: "Òfin ìkànsí recruiting dá lórí:", options: ["Ìwọ̀n bàtà rẹ", "Ojú ọjọ́", "Eré àti division", "Ẹgbẹ́ tí o fẹ́ràn"], answer: 2, why: "Òfin yàtọ̀ síra láti eré sí eré àti ìpele sí ìpele." },
      { objective: "O1", q: "Ta ló ń ràn ọ́ lọ́wọ́ láti jẹ́ kí àwọn kókó ẹ̀kọ́ rẹ wà lójú ọ̀nà?", options: ["Alátakò kan", "Olùdámọ̀ràn ilé-ẹ̀kọ́ rẹ", "Gbajúmọ̀ orí ayélujára (influencer)", "Kò sí ẹnìkankan"], answer: 1, why: "Àwọn olùdámọ̀ràn mọ àwọn ohun tí ẹ̀kọ́ béèrè fún." },
      { objective: "O2", q: "Ilé-ẹ̀kọ́ \"reach\" ni:", options: ["Ohun tó dájú", "Èyí tí wọ́n ti tì", "Ilé-ẹ̀kọ́ girama kékeré (junior high)", "Èyí tó ṣòro díẹ̀ fún ọ láti dé"], answer: 3, why: "Ilé-ẹ̀kọ́ reach ṣòro jù láti wọ̀ tàbí láti ṣeré fún." },
      { objective: "O2", q: "Níbo ni o ti máa rí ímeèlì gidi kóòṣì?", options: ["Àmọ̀tẹ́lẹ̀", "AI", "Ojú-ìwé eré ìdárayá oníṣẹ́ ilé-ẹ̀kọ́ náà", "Ojú-ìwé àwọn olólùfẹ́ ẹgbẹ́"], answer: 2, why: "Àwọn ojú-ìwé oníṣẹ́ ló wà lọ́jọ́." },
      { objective: "O2", q: "Kí ló dé tí o fi máa ṣàyẹ̀wò roster?", options: ["Láti da ìtàn wọn kọ", "Láti fi ọ̀rọ̀ ránṣẹ́ sí àwọn eléré", "Kò wúlò", "Láti rí ẹni tó ń jáde ilé-ẹ̀kọ́ ní ipò rẹ"], answer: 3, why: "Àìní roster ń nípa lórí àǹfààní rẹ." },
      { objective: "O3", q: "Gíga àti ìwúwo nínú profaili rẹ gbọ́dọ̀ jẹ́:", options: ["Òtítọ́", "Èyí tí a fi kún púpọ̀", "Èyí tí a fi sílẹ̀ nígbà gbogbo", "Àmọ̀tẹ́lẹ̀"], answer: 0, why: "Àwọn kóòṣì máa ń ṣàyẹ̀wò." },
      { objective: "O3", q: "Fídíò highlight sábà máa ń jẹ́:", options: ["Ìṣẹ́jú 30", "Ìṣẹ́jú 2-4", "Ìṣẹ́jú-àáyá 5", "Wákàtí méjì"], answer: 1, why: "Èyí tó kúrú tó sì dojú kọ kókó ló dára jù." },
      { objective: "O3", q: "Ṣáájú apá kọ̀ọ̀kan, ó yẹ kí o:", options: ["Fi orin aláriwo nìkan sí i", "Fi àwọn òǹwòran hàn", "Fi àmì sí ara rẹ pẹ̀lú ọfà tàbí òbìrí", "Fò ó"], answer: 2, why: "Àwọn kóòṣì nílò láti mọ eléré tí ìwọ jẹ́." },
      { objective: "O3", q: "Èwo ni KÒ yẹ kí ó wà nínú profaili rẹ?", options: ["Àdírẹ́sì ilé rẹ", "Grad year rẹ", "Ìjápọ̀ highlight rẹ", "Ìsọfúnni ìkànsí kóòṣì rẹ"], answer: 0, why: "Má ṣe fi ìsọfúnni àdáni sínú rẹ̀." },
      { objective: "O4", q: "Ímeèlì tó dára sí kóòṣì kò gbọ́dọ̀ ju nǹkan bí:", options: ["Ọ̀rọ̀ 1,000", "Ọ̀rọ̀ 5", "Kò sí òdiwọ̀n", "Ọ̀rọ̀ 150"], answer: 3, why: "Àwọn ímeèlì kúkúrú ni wọ́n ń kà." },
      { objective: "O4", q: "Fífi ímeèlì kan náà ránṣẹ́ sí gbogbo ilé-ẹ̀kọ́:", options: ["Ló dára jù", "Àwọn kóòṣì máa ń mọ̀; sọ ọ̀kọ̀ọ̀kan di àdáni", "Ló pọndandan", "Ń mú èsì púpọ̀ wá"], answer: 1, why: "Àwọn ímeèlì àdáni ló ń yọ síta." },
      { objective: "O4", q: "Ìtẹ̀lé (follow-up) gbọ́dọ̀ ní:", options: ["Ímeèlì kan náà lẹ́ẹ̀kan sí i", "Ìsọfúnni tuntun, bíi highlight tuntun", "Ẹ̀sùn kan", "Kò sí nǹkan kan"], answer: 1, why: "Ìsọfúnni tuntun ń fún wọn ní ìdí láti fèsì." },
      { objective: "O4", q: "Showcase ni:", options: ["Àpótí àmì-ẹ̀yẹ", "Ṣọ́ọ̀bù kan", "Ètò tẹlifíṣọ̀n kan", "Ìṣẹ̀lẹ̀ tí àwọn eléré ti ń ṣeré níwájú àwọn kóòṣì"], answer: 3, why: "Showcase ń ran àwọn kóòṣì lọ́wọ́ láti rí ọ." },
      { objective: "O5", q: "Ìgbà mélòó ni o máa ṣe àtúnṣe sheet recruiting rẹ?", options: ["Lọ́sẹ̀ọ̀sẹ̀", "Lẹ́ẹ̀kan lọ́dún", "Láéláé", "Lẹ́yìn tí o bá fọwọ́ sí ìwé nìkan"], answer: 0, why: "Ọ̀sẹ̀ọ̀sẹ̀ ń jẹ́ kí àwọn ìgbésẹ̀ tó kàn wà lákòókò." },
      { objective: "O5", q: "Kí ló wà ní ipò àkọ́kọ́ nígbà recruiting?", options: ["Ìkànnì àjọlò", "Àwọn iṣẹ́ tí a ń sanwó fún", "Ẹ̀kọ́ àti ìdánrawò", "Àhesọ ọ̀rọ̀"], answer: 2, why: "Máàkì àti eré ló ṣe pàtàkì jù." },
      { objective: "O6", q: "Rubric ni:", options: ["Irú ìdánrawò kan", "Bàtà kan", "Àmì-ẹ̀yẹ kan", "Ìtọ́sọ́nà máàkì tó ṣàlàyé máàkì kọ̀ọ̀kan"], answer: 3, why: "Ó ń jẹ́ kí ìdíyelé dúró ṣinṣin." },
      { objective: "O6", q: "Dídájọ́ àwọn eléré tuntun nípa bí fídíò ṣe dára tó dípò agbára wọn jẹ́:", options: ["Ohun tó tọ́", "Ọ̀kan nínú ojúsàájú", "Ohun tó pọndandan", "Ọ̀nà tó dára jù"], answer: 1, why: "Scouting tó tọ́ ń wo agbára eléré." }
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
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Àkíyèsí ẹ̀tọ́ láti ṣeré àti òfin",
        objective: "O1",
        notYet: "Kò dárúkọ àkáǹtì ẹ̀tọ́ láti ṣeré, tàbí ó gba òfin láti AI tàbí àpilẹ̀kọ àtijọ́.",
        meets: "Ó dárúkọ àkáǹtì ẹ̀tọ́ láti ṣeré tí ó nílò àti orísun oníṣẹ́ tí ó ti ṣàyẹ̀wò òfin recruiting.",
        exceeds: "Ó fi àyẹ̀wò àwọn kókó ẹ̀kọ́ àti máàkì tí ó ṣe pẹ̀lú olùdámọ̀ràn kún un."
      },
      {
        name: "Àkọsílẹ̀ ilé-ẹ̀kọ́",
        objective: "O2",
        notYet: "Ilé-ẹ̀kọ́ tí kò tó 15, kò sí àdàpọ̀ reach, target àti likely, tàbí kúlẹ̀kúlẹ̀ tí kò tíì ṣàyẹ̀wò.",
        meets: "Ilé-ẹ̀kọ́ 15 pẹ̀lú gbogbo ọ̀wọ̀n, tí a fi reach, target tàbí likely sí, tí a sì ti ṣàyẹ̀wò ní ojú-ìwé oníṣẹ́.",
        exceeds: "Ó kọ àìní roster ní ipò eléré náà àti owó fún ilé-ẹ̀kọ́ kọ̀ọ̀kan."
      },
      {
        name: "Profaili àti fídíò highlight",
        objective: "O3",
        notYet: "Ìkà tí kì í ṣe òtítọ́, ìsọfúnni àdáni, tàbí àwọn apá tó dára jù tí a fi pamọ́ sí ẹ̀yìn fídíò.",
        meets: "Profaili òtítọ́ ojú-ewé kan àti fídíò ìṣẹ́jú 2 sí 4 pẹ̀lú àwọn apá tó dára jù níwájú àti àmì sí eléré náà, tí kóòṣì ti ṣàyẹ̀wò.",
        exceeds: "Ó fi ìjápọ̀ gbogbo ìdíje kún un tí àwọn kóòṣì nínú eré náà bá ń retí rẹ̀, ó sì ń jẹ́ kí profaili wà lọ́jọ́."
      },
      {
        name: "Ímeèlì sí kóòṣì",
        objective: "O4",
        notYet: "Gbogbogbò, gùn jù, tàbí òbí ló fi ránṣẹ́.",
        meets: "Ímeèlì àdáni mẹ́ta tí kò tó ọ̀rọ̀ 150 pẹ̀lú àkọlé tó yé àti ìdí òtítọ́ fún ilé-ẹ̀kọ́ kọ̀ọ̀kan, tí eléré fúnra rẹ̀ fi ránṣẹ́.",
        exceeds: "Ọ̀kọ̀ọ̀kan ní ètò ìdíje tó ń bọ̀ àti ìkànsí kóòṣì, a sì ti kọ àwọn ọjọ́ ìtẹ̀lé sílẹ̀."
      },
      {
        name: "Ìtọpinpin",
        objective: "O5",
        notYet: "Kò sí ọ̀wọ̀n ìtọpinpin tàbí ìgbésẹ̀ tó kàn.",
        meets: "Gbogbo ìkànsí ni a kọ sílẹ̀ pẹ̀lú èsì, ìgbésẹ̀ tó kàn àti ọjọ́.",
        exceeds: "Ó ń ṣe àtúnṣe rẹ̀ lọ́sẹ̀ọ̀sẹ̀ fún oṣù kan, ó sì kọ àwọn àmì ìfẹ́ gidi sílẹ̀."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ètò recruiting tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ti ṣí àkáǹtì ẹ̀tọ́ láti ṣeré tó tọ́ (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn gba èsì àdáni, ìpè sí camp tàbí ìbẹ̀wò láti ọ̀dọ̀ àwọn kóòṣì kọ́lẹ́ẹ̀jì",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gbà láti darapọ̀ mọ́ ẹgbẹ́ kọ́lẹ́ẹ̀jì kan, àti àwọn tí wọ́n sọ pé àwọn yẹra fún iṣẹ́ tí a ń sanwó fún tó ṣèlérí àbájáde dájúdájú"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀ǹpútà tó ní íntánẹ́ẹ̀tì",
      "Àkáǹtì Google ọ̀fẹ́ fún Google Sheets",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini)",
      "Fídíò ìdíje àti ohun èlò àtúnṣe fídíò ọ̀fẹ́",
      "Ìwé máàkì rẹ (transcript), ìkà òtítọ́ rẹ àti ìsọfúnni ìkànsí àwọn kóòṣì rẹ",
      "Nǹkan bí ìṣẹ́jú 60 ẹ̀kọ́ pẹ̀lú àkókò láti ṣe profaili àti fídíò"
    ],
    facilitatorNotes: [
      "Pe olùdámọ̀ràn ilé-ẹ̀kọ́ láti ṣàlàyé àwọn kókó ẹ̀kọ́ àti àkáǹtì ẹ̀tọ́ láti ṣeré; má ṣe ṣe ìdájọ́ ẹ̀tọ́ láti ṣeré fúnra rẹ.",
      "Ní kí àwọn akẹ́kọ̀ọ́ ṣàyẹ̀wò òfin ìkànsí recruiting ní ncaa.org tàbí ojú-ìwé NAIA nígbà ìpàdé; òfin máa ń yí padà lọ́pọ̀ ìgbà.",
      "Kó àwọn òbí tàbí alágbàtọ́ wọlé, ṣùgbọ́n rí i dájú pé àwọn eléré ló ń kọ tí wọ́n sì ń fi ímeèlì ránṣẹ́ sí kóòṣì fúnra wọn.",
      "Kìlọ̀ fún àwọn ìdílé nípa àwọn iṣẹ́ tí a ń sanwó fún tó ń ṣèlérí sikọláṣíìpù, kí wọ́n sì ṣàyẹ̀wò pẹ̀lú kóòṣì tàbí olùdámọ̀ràn kí wọ́n tó sanwó.",
      "Fún àwọn kóòṣì tó ń lo Ẹ̀kọ́ 6, pa àkíyèsí nípa àwọn eléré tuntun mọ́ ní àṣírí, lo àwọn ìlànà kan náà fún gbogbo ènìyàn, kí o sì ṣàyẹ̀wò ìdíyelé fún ojúsàájú."
    ]
  }
};
