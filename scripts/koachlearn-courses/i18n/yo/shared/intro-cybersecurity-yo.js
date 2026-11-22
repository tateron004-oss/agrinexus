"use strict";

// Koach Learn course (Yoruba translation of shared/intro-cybersecurity.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CISA_PASSWORDS = { name: "CISA Secure Our World: Lo ọ̀rọ̀ aṣínà tó lágbára", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords" };
const CISA_SOW = { name: "CISA: Secure Our World", url: "https://www.cisa.gov/secure-our-world" };
const FTC_PHISHING = { name: "FTC: Bí a ṣe lè dá jìbìtì phishing mọ̀ kí a sì yẹra fún un", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" };

module.exports = {
  id: "intro-cybersecurity-yo",
  lang: "yo",
  translationOf: "intro-cybersecurity",
  category: "Youth",
  name: "Ìfihàn sí Ààbò Ẹ̀rọ Ayélujára (Cybersecurity)",
  skills: "Ṣíṣàlàyé CIA triad, Dídá àwọn ìkọlù tó wọ́pọ̀ mọ̀, Dídá phishing mọ̀ àti ríròyìn rẹ̀, Dídáàbò bo àkáǹtì pẹ̀lú ọ̀rọ̀ aṣínà tó lágbára àti MFA, Mímú ẹ̀rọ wà ní ìgbàlódé, Dídáhùn sí ìṣẹ̀lẹ̀ ààbò",
  outcome: "ṣe àyẹ̀wò ààbò lórí àwọn àkáǹtì àti ẹ̀rọ tìrẹ: ṣe ọ̀rọ̀ aṣínà tó lágbára tí kò jọ òmíràn pẹ̀lú password manager, tan ìjẹ́rìísí onípele-púpọ̀ (MFA), ṣe àtúnṣe (update) sọ́fítíwọ̀ rẹ, dá ọ̀rọ̀ phishing mọ̀ kí o sì ròyìn rẹ̀, kí o sì tẹ̀lé ètò tó rọrùn tí wọ́n bá jí àkáǹtì kan wọlé.",
  about: [
    "Ààbò ẹ̀rọ ayélujára (cybersecurity) túmọ̀ sí dídáàbò bo kọ̀mpútà, fóònù, àkáǹtì àti ìsọfúnni lọ́wọ́ ìkọlù. Ó ṣe pàtàkì fún àkáǹtì ilé-ìwé akẹ́kọ̀ọ́, fún ìwọlé báńkì ẹbí, àti fún àkọsílẹ̀ àwọn oníbàárà ilé-iṣẹ́ kékeré. Ó tún jẹ́ iṣẹ́ tí ń dàgbà sí i.",
    "Nínú Orí 1, o máa kọ́ àwọn èrò pàtàkì ààbò, àwọn ìkọlù tó wọ́pọ̀ jù, àti bí a ṣe ń dá phishing mọ̀. Nínú Orí 2, o máa dáàbò bo àwọn àkáǹtì àti ẹ̀rọ tìrẹ, o sì máa kọ́ ohun tí o máa ṣe tí nǹkan bá dàrú.",
    "Àwọn ìgbésẹ̀ náà tẹ̀lé ìgbésẹ̀ pàtàkì mẹ́rin tí CISA (àjọ ìjọba US tó ń rí sí ààbò ẹ̀rọ ayélujára àti ohun amáyédẹrùn) ń kọ́ gbogbo ènìyàn. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe àyẹ̀wò ààbò lórí àkáǹtì pàtàkì kan (ímeèlì ló dára jù): fún un ní ọ̀rọ̀ aṣínà tó lágbára tí kò jọ òmíràn, tí o fi pamọ́ sínú password manager, tan MFA, ṣàyẹ̀wò pé fóònù tàbí kọ̀mpútà rẹ wà ní ìgbàlódé, kí o sì kọ ètò ìlà márùn-ún fún ohun tí o máa ṣe tí wọ́n bá jí àkáǹtì náà wọlé. Lẹ́yìn náà, wá ọ̀rọ̀ ìfura kan nínú ímeèlì tàbí ọ̀rọ̀ (text) rẹ, kí o sì kọ àwọn àmì phishing tí ó fi hàn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ àti àgbàlagbà tí wọ́n ń lo ímeèlì, ẹ̀rọ alátagbà (social media), àkáǹtì ilé-ìwé tàbí ti iṣẹ́ àti fóònù lójoojúmọ́: akẹ́kọ̀ọ́, ètò àwọn ọ̀dọ́, àwọn tí ń wá iṣẹ́, òṣìṣẹ́ ọ́fíìsì tuntun, olùyọ̀ǹda ara ẹni àti ẹbí.",
    startingPoint: "Wọ́n lè wọlé sí àkáǹtì, lo app, kí wọ́n sì fi ọ̀rọ̀ ránṣẹ́. Ọ̀pọ̀ ń lo ọ̀rọ̀ aṣínà kan náà léraléra, wọn kò tíì tan MFA, wọ́n ń fo àtúnṣe (update) sílẹ̀, kò sì dá wọn lójú bí wọ́n ṣe lè ya ọ̀rọ̀ phishing sọ́tọ̀ kúrò lára ọ̀rọ̀ gidi tàbí ohun tí wọ́n máa ṣe tí wọ́n bá jí àkáǹtì wọlé.",
    gap: "Ọ̀pọ̀ ìkọlù sí àwọn ènìyàn lásán ń lọ sọ́dọ̀ ẹni tó rọrùn jù láti mú, nípasẹ̀ ọ̀rọ̀ aṣínà tí a tún lò, phishing àti social engineering. Àwọn ìwà rere díẹ̀ ń dí ọ̀pọ̀ àwọn ìkọlù wọ̀nyí, wọ́n ń dáàbò bo àkáǹtì ilé-ìwé, iṣẹ́ àti owó, wọ́n sì ń mú kí ènìyàn jẹ́ òṣìṣẹ́ àti ọmọ ẹbí tó wà láìléwu sí i.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé àwọn ọ̀rọ̀ ààbò bí MFA àti phishing",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà akẹ́kọ̀ọ́ fúnra rẹ̀ àti àkáǹtì pàtàkì kan, bí ímeèlì",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan, nǹkan bí ìṣẹ́jú 60 lápapọ̀",
      "Owó: irinṣẹ́ ọ̀fẹ́ nìkan, bí password manager tó wà nínú browser tàbí fóònù",
      "Àṣírí: akẹ́kọ̀ọ́ kò gbọdọ̀ fi ọ̀rọ̀ aṣínà tàbí kóòdù MFA han ẹnikẹ́ni, títí kan olùkọ́, kò sì gbọdọ̀ tẹ ọ̀kan sínú irinṣẹ́ AI"
    ],
    prerequisites: "Kò sí. Akẹ́kọ̀ọ́ nílò àkáǹtì kan tí ó lè wọlé sí, bí ímeèlì."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àpèjúwe kúkúrú nípa ìkọlù kan", action: "ṣàlàyé èrò mẹ́ta ààbò (àṣírí, ìpéye àti wíwà lárọ̀ọ́wọ́tó) kí o sì sọ èyí tí ìkọlù náà bà jẹ́", standard: "kí o sì gba ó kéré tán 4 nínú àpẹẹrẹ 5 tọ̀nà" },
    { id: "O2", condition: "Tí a bá fún ọ ní àpẹẹrẹ malware, ransomware, jíjí àkáǹtì gbà àti social engineering", action: "dárúkọ ìkọlù kọ̀ọ̀kan kí o sì ṣàpèjúwe bí ó ṣe sábà máa ń wọlé", standard: "pẹ̀lú orúkọ ìkọlù kọ̀ọ̀kan tó tọ̀nà àti ọ̀nà kan tó wọ́pọ̀ tí ọ̀kọ̀ọ̀kan fi ń wọlé" },
    { id: "O3", condition: "Tí a bá fún ọ ní ímeèlì tàbí ọ̀rọ̀ (text) gidi tàbí àpẹẹrẹ", action: "dá àwọn àmì phishing tí ó fi hàn mọ̀ kí o sì ròyìn rẹ̀ ní ọ̀nà tó tọ́", standard: "pẹ̀lú ó kéré tán àmì méjì àti ibi tó tọ́ láti ròyìn rẹ̀" },
    { id: "O4", condition: "Pẹ̀lú password manager ọ̀fẹ́", action: "ṣe ọ̀rọ̀ aṣínà tó lágbára tí kò jọ òmíràn fún àkáǹtì pàtàkì kan kí o sì fi pamọ́ sínú password manager", standard: "pẹ̀lú ọ̀rọ̀ aṣínà tí ó ní ó kéré tán àmì 16, tí a kò lò lórí àkáǹtì míì kankan" },
    { id: "O5", condition: "Lórí àkáǹtì pàtàkì kan àti ẹ̀rọ tìrẹ", action: "tan ìjẹ́rìísí onípele-púpọ̀ (MFA) kí o sì ṣàyẹ̀wò pé ẹ̀rọ àti àwọn app wà ní ìgbàlódé", standard: "pẹ̀lú MFA tó ń ṣiṣẹ́ lórí àkáǹtì náà àti àtúnṣe aládàáṣe tí a tàn" },
    { id: "O6", condition: "Tí a bá fún ọ ní àmì pé wọ́n ti jí àkáǹtì kan wọlé tàbí pé kòkòrò ti wọ ẹ̀rọ kan", action: "kọ ètò ìmúpadàbọ̀sípò ní ìgbésẹ̀-ní-ìgbésẹ̀ kí o sì tẹ̀lé e", standard: "pẹ̀lú gbogbo ìgbésẹ̀ pàtàkì ní ètò tó láàbò: yí ọ̀rọ̀ aṣínà padà, tan MFA, jáde kúrò ní àwọn ìwọlé míì, ṣàyẹ̀wò ìsọfúnni ìmúpadàbọ̀sípò, kìlọ̀ fún àwọn olùbásọ̀rọ̀, kí o sì ròyìn" }
  ],
  chapters: [
    {
      name: "Orí 1: Ewu àti bí ìkọlù ṣe ń ṣiṣẹ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí ààbò ẹ̀rọ ayélujára ń dáàbò bò",
          minutes: 4,
          goal: "Ṣàlàyé èrò mẹ́ta ààbò nípa lílo CIA triad.",
          text: [
            "Àwọn òṣìṣẹ́ ààbò sábà máa ń lo ọ̀rọ̀ mẹ́ta tí a ń pè ní CIA triad. Confidentiality (àṣírí): àwọn ẹni tó tọ́ nìkan ló lè rí ìsọfúnni náà, bí máàkì rẹ ní ilé-ìwé tàbí àkọsílẹ̀ ìlera rẹ. Integrity (ìpéye): ìsọfúnni náà tọ̀nà, ẹni tí kò yẹ kò sì yí i padà, bí iye owó inú báńkì. Availability (wíwà lárọ̀ọ́wọ́tó): ìsọfúnni àti ẹ̀rọ ń ṣiṣẹ́ nígbà tí o bá nílò wọn, bí ojú-òpó wẹ́ẹ̀bù tí kò kú.",
            "Gbogbo ìkọlù ń ba ó kéré tán ọ̀kan nínú mẹ́ta yìí jẹ́. Ẹni tó ń ka ọ̀rọ̀ rẹ ń ba àṣírí jẹ́. Ẹni tó yí iye owó ìsanwó padà ń ba ìpéye jẹ́. Ransomware tó ti kọ̀mpútà ilé-ìwòsàn pa ń ba wíwà lárọ̀ọ́wọ́tó jẹ́.",
            "A ń pe àwọn tó ń kọlù ní threat actor (olùkọlù). Wọ́n wà láti ọ̀dọ̀ àwọn jìbìtì tó ń wá owó kíákíá dé àwọn ẹgbẹ́ ọ̀daràn tó ṣètò. Ọ̀pọ̀ ìkọlù sí àwọn ènìyàn lásán kì í ṣe ti ara ẹni; àwọn olùkọlù ń lọ sọ́dọ̀ ẹni tó rọrùn jù."
          ],
          words: [["Cybersecurity", "ààbò ẹ̀rọ ayélujára: dídáàbò bo kọ̀mpútà, fóònù, àkáǹtì àti ìsọfúnni lọ́wọ́ ìkọlù."], ["CIA triad", "confidentiality, integrity àti availability (àṣírí, ìpéye àti wíwà lárọ̀ọ́wọ́tó): èrò mẹ́ta ààbò."], ["Threat actor", "ènìyàn tàbí ẹgbẹ́ tó ń kọlu kọ̀mpútà tàbí àkáǹtì."]],
          slides: [
            { title: "CIA triad", bullets: ["Àṣírí: àwọn ẹni tó tọ́ nìkan ló ń rí i", "Ìpéye: ó wà ní títọ̀nà", "Wíwà lárọ̀ọ́wọ́tó: ó ń ṣiṣẹ́ nígbà tí o bá nílò rẹ̀"] },
            { title: "Ìkọlù ń ba ọ̀kan nínú mẹ́ta jẹ́", bullets: ["Kíka ọ̀rọ̀ rẹ: àṣírí", "Yíyí ìsanwó padà: ìpéye", "Títi kọ̀mpútà pa: wíwà lárọ̀ọ́wọ́tó"] },
            { title: "Àwọn tó ń kọlù", bullets: ["Àwọn jìbìtì àti ẹgbẹ́ ọ̀daràn", "Wọ́n ń lọ sọ́dọ̀ ẹni tó rọrùn jù", "Ìwà rere ń mú kí ó ṣòro fún wọn láti mú ọ"] }
          ],
          tryIt: "Ronú nípa app kan tí o ń lò, bí ojú-òpó ilé-ìwé, app báńkì tàbí app ètò àkókò iṣẹ́. Kọ àpẹẹrẹ kan ohun tí àṣírí, ìpéye àti wíwà lárọ̀ọ́wọ́tó túmọ̀ sí fún un.",
          youCanNow: "ṣàlàyé CIA triad kí o sì sọ èrò tí ìkọlù kan bà jẹ́.",
          quickCheck: [
            { objective: "O1", q: "Nínú CIA triad, kí ni integrity (ìpéye) túmọ̀ sí?", options: ["Ẹ̀rọ náà máa ń yára nígbà gbogbo", "Àwọn ẹni tó tọ́ nìkan ló lè rí ìsọfúnni náà", "Ìsọfúnni náà jẹ́ ọ̀fẹ́ fún gbogbo ènìyàn", "Ìsọfúnni náà tọ̀nà, ẹni tí kò yẹ kò sì yí i padà"], answer: 3, why: "Ìpéye túmọ̀ sí pé ìsọfúnni tọ̀nà, a kò sì yí i padà láìgbàṣẹ." },
            { objective: "O1", q: "Ẹnì kan ka ọ̀rọ̀ àdáni ọmọ kíláàsì rẹ̀ láìgbàṣẹ. Èrò wo ni o máa sọ pé ó bà jẹ́?", options: ["Wíwà lárọ̀ọ́wọ́tó", "Àṣírí", "Ìpéye", "Kò sí ọ̀kan nínú mẹ́ta"], answer: 1, why: "Àṣírí túmọ̀ sí pé àwọn ẹni tó tọ́ nìkan ló lè rí ìsọfúnni náà." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Àwọn ìkọlù tó wọ́pọ̀: malware, ransomware àti jíjí àkáǹtì gbà",
          minutes: 5,
          goal: "Dárúkọ àwọn ìkọlù tó wọ́pọ̀ jù àti bí ọ̀kọ̀ọ̀kan ṣe sábà máa ń wọlé.",
          text: [
            "Malware jẹ́ sọ́fítíwọ̀ tó ń pani lára. Ó sábà máa ń dé nínú fáìlì tí a so mọ́ ímeèlì, app ayédèrú, eré tí a jí ẹ̀dà rẹ̀ (pirated), tàbí pop-up \"update\" ayédèrú. Ransomware jẹ́ malware tó ń ti àwọn fáìlì rẹ pa, tó sì ń béèrè owó kí ó tó ṣí wọn.",
            "Jíjí àkáǹtì gbà (account takeover) ń ṣẹlẹ̀ nígbà tí ẹnì kan bá wọ àkáǹtì rẹ. Àwọn ọ̀nà tó wọ́pọ̀ jù ni ọ̀rọ̀ aṣínà tí wọ́n jí tàbí tí wọ́n gbá, ọ̀rọ̀ aṣínà tí o tún lò láti ojú-òpó míì tí wọ́n ti jí ìsọfúnni rẹ̀ (breach), tàbí títàn ọ́ jẹ láti fi kóòdù ẹ̀ẹ̀kan-ṣoṣo hàn.",
            "Social engineering túmọ̀ sí títan ènìyàn jẹ dípò fífọ́ ẹ̀rọ. Ẹni tó pè tó ń díbọ́n pé òun jẹ́ IT support, ọ̀rọ̀ ayédèrú nípa ẹrù tí ń bọ̀, tàbí ọ̀rọ̀ láti ọ̀dọ̀ \"ọ̀rẹ́\" tó ń béèrè kóòdù: gbogbo wọn ni social engineering. Ènìyàn ni ọ̀nà tó rọrùn jù láti wọlé, ìdí nìyí tí ìwà rẹ fi ṣe pàtàkì."
          ],
          words: [["Malware", "sọ́fítíwọ̀ tó ń pani lára, tó lè ṣe amí, jalè tàbí bà nǹkan jẹ́."], ["Ransomware", "malware tó ń ti fáìlì pa tó sì ń béèrè owó."], ["Data breach", "nígbà tí wọ́n jí ìsọfúnni tí ilé-iṣẹ́ kan fi pamọ́, bí ọ̀rọ̀ aṣínà."], ["Social engineering", "títan ènìyàn jẹ kí ó fúnni ní ìwọlé tàbí ìsọfúnni."]],
          slides: [
            { title: "Malware àti ransomware", bullets: ["Sọ́fítíwọ̀ tó ń pani lára", "Ó ń dé nínú fáìlì ímeèlì, app ayédèrú, eré pirated", "Ransomware ń ti fáìlì pa ó sì ń béèrè owó"] },
            { title: "Jíjí àkáǹtì gbà", bullets: ["Ọ̀rọ̀ aṣínà tí wọ́n jí tàbí gbá", "Ọ̀rọ̀ aṣínà tí a tún lò láti ojú-òpó tí wọ́n jí", "Títan ọ́ jẹ láti fi kóòdù ẹ̀ẹ̀kan-ṣoṣo hàn"] },
            { title: "Social engineering", bullets: ["Títan ènìyàn jẹ, kì í ṣe ẹ̀rọ", "Ìpè IT ayédèrú, ọ̀rọ̀ ẹrù ayédèrú", "Àkáǹtì ọ̀rẹ́ tí wọ́n jí tó ń béèrè kóòdù"] }
          ],
          tryIt: "Fún ìkọlù kọ̀ọ̀kan (malware, ransomware, jíjí àkáǹtì gbà, social engineering), kọ ọ̀nà gidi kan tí ó lè dé ọ̀dọ̀ rẹ tàbí ẹbí rẹ, àti ìwà kan tí yóò dá a dúró.",
          youCanNow: "dárúkọ àwọn ìkọlù tó wọ́pọ̀ àti bí wọ́n ṣe sábà máa ń wọlé.",
          quickCheck: [
            { objective: "O2", q: "Èwo nínú ìwọ̀nyí ni ọ̀nà tó wọ́pọ̀ tí malware fi ń wọ ẹ̀rọ?", options: ["Eré pirated tàbí pop-up \"update\" ayédèrú", "Títan àtúnṣe aládàáṣe", "Lílo password manager", "Títún fóònù rẹ tàn"], answer: 0, why: "Malware sábà máa ń dé nínú fáìlì ímeèlì, app ayédèrú, eré pirated àti pop-up update ayédèrú." },
            { objective: "O2", q: "\"Ọ̀rẹ́\" kan fi ọ̀rọ̀ ránṣẹ́ sí ọ, ó ń béèrè kóòdù tí fóònù rẹ ṣẹ̀ṣẹ̀ gbà. Kí ni o máa ṣe?", options: ["Fi kóòdù ránṣẹ́ nítorí ọ̀rẹ́ ni", "Fi ìdajì kóòdù ránṣẹ́", "Má ṣe fi kóòdù hàn; ó ṣeé ṣe kí èyí jẹ́ social engineering", "Fi kóòdù sí orí social media láti ṣàyẹ̀wò"], answer: 2, why: "Títan ọ́ jẹ láti fi kóòdù ẹ̀ẹ̀kan-ṣoṣo hàn jẹ́ ọ̀nà tó wọ́pọ̀ tí wọ́n fi ń jí àkáǹtì gbà." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dídá phishing mọ̀ àti ríròyìn rẹ̀",
          minutes: 5,
          goal: "Dá ọ̀rọ̀ phishing mọ̀ kí o sì ròyìn rẹ̀ ní ọ̀nà tó tọ́.",
          text: [
            "Phishing jẹ́ ímeèlì, ọ̀rọ̀ (text) tàbí ìránṣẹ́ ayédèrú tó fẹ́ kí o tẹ líǹkì, ṣí fáìlì tàbí fi ìsọfúnni hàn. FTC (àjọ ìjọba US tó ń dáàbò bo àwọn oníbàárà) to àwọn ẹ̀tàn tó wọ́pọ̀: sísọ pé ìgbòkègbodò ìfura wà lórí àkáǹtì rẹ, ìṣòro pẹ̀lú ìsanwó rẹ, bíbéèrè pé kí o jẹ́rìí ìsọfúnni àdáni rẹ, ìwé owó (invoice) tí o kò mọ̀, líǹkì láti sanwó, owó tí ìjọba fẹ́ dá padà, tàbí kúpọ́ọ̀nù fún nǹkan ọ̀fẹ́.",
            "Ṣàyẹ̀wò àdírẹ́sì gidi ẹni tó fi ránṣẹ́, kì í ṣe orúkọ nìkan. Lórí kọ̀mpútà, gbé mouse lé orí líǹkì (hover); lórí fóònù, tẹ̀ ẹ́ mọ́lẹ̀ pẹ́ díẹ̀ láti rí ibi tí ó ń lọ gan-an. Wo kíkánjú: \"ṣe é báyìí tàbí a máa ti àkáǹtì rẹ pa.\"",
            "Tí o kò bá mọ ẹni tó fi ránṣẹ́, ròyìn rẹ̀ kí o sì pa á rẹ́. Tí o bá ní àkáǹtì pẹ̀lú ilé-iṣẹ́ náà, kàn sí wọn pẹ̀lú ojú-òpó wẹ́ẹ̀bù tàbí nọ́mbà fóònù tí o ti mọ̀ pé ó jẹ́ gidi, kì í ṣe èyí tó wà nínú ọ̀rọ̀ náà. FTC sọ pé kí o fi ímeèlì phishing ránṣẹ́ sí reportphishing@apwg.org, kí o fi text phishing ránṣẹ́ sí SPAM (7726), kí o sì ròyìn ní ReportFraud.ftc.gov. Ní ilé-ìwé tàbí ibi iṣẹ́, lo bọ́tìnnì \"Report phishing\" tàbí sọ fún IT."
          ],
          steps: ["Ṣàyẹ̀wò àdírẹ́sì gidi ẹni tó fi ránṣẹ́.", "Gbé mouse lé orí líǹkì tàbí tẹ̀ ẹ́ mọ́lẹ̀ pẹ́ láti rí ibi tí ó ń lọ.", "Wo kíkánjú, ìhàlẹ̀ tàbí ẹ̀bùn.", "Má ṣe tẹ̀ ẹ́, má ṣe fèsì, má sì ṣí fáìlì tí a so mọ́ ọn.", "Kàn sí ilé-iṣẹ́ náà pẹ̀lú nọ́mbà tàbí ojú-òpó tí o ti mọ̀.", "Ròyìn: ímeèlì sí reportphishing@apwg.org, text sí 7726, àti ReportFraud.ftc.gov; ní ilé-ìwé tàbí ibi iṣẹ́, sọ fún IT."],
          words: [["Phishing", "ọ̀rọ̀ ayédèrú tó fẹ́ tàn ọ́ jẹ láti tẹ líǹkì, ṣí fáìlì tàbí fi ìsọfúnni hàn."], ["Smishing", "phishing nípasẹ̀ ọ̀rọ̀ text."], ["Spoofing", "fífi orúkọ, nọ́mbà tàbí àdírẹ́sì ẹlòmíì ṣe ayédèrú kí ọ̀rọ̀ lè dàbí ti gidi."]],
          sources: [FTC_PHISHING, { name: "FTC: ReportFraud", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Àwọn ẹ̀tàn phishing tó wọ́pọ̀ (FTC)", bullets: ["\"Ìgbòkègbodò ìfura\" tàbí \"ìṣòro ìsanwó\"", "\"Jẹ́rìí ìsọfúnni rẹ\"", "Invoice tí o kò mọ̀, owó ìdápadà, kúpọ́ọ̀nù ọ̀fẹ́"] },
            { title: "Ṣàyẹ̀wò kí o tó tẹ̀ ẹ́", bullets: ["Àdírẹ́sì gidi ẹni tó fi ránṣẹ́, kì í ṣe orúkọ nìkan", "Hover tàbí tẹ líǹkì mọ́lẹ̀ pẹ́", "Kíkánjú àti ìhàlẹ̀ jẹ́ àmì ìkìlọ̀"] },
            { title: "Kàn sí ilé-iṣẹ́ náà fúnra rẹ", bullets: ["Lo ojú-òpó tàbí nọ́mbà tí o ti mọ̀", "Má ṣe lo èyí tó wà nínú ọ̀rọ̀ náà láéláé"] },
            { title: "Ròyìn rẹ̀", bullets: ["Ímeèlì: reportphishing@apwg.org", "Text: fi ránṣẹ́ sí 7726 (SPAM)", "ReportFraud.ftc.gov; ní ibi iṣẹ́ tàbí ilé-ìwé, sọ fún IT"] }
          ],
          tryIt: "Ṣí fódà spam tàbí junk rẹ (tàbí àwọn text rẹ) kí o sì wá ọ̀rọ̀ ìfura kan. Láìtẹ nǹkan kan, kọ gbogbo àmì phishing tí o rí, lẹ́yìn náà ròyìn rẹ̀ tàbí pa á rẹ́.",
          youCanNow: "dá ọ̀rọ̀ phishing mọ̀, yẹra fún ẹ̀tàn rẹ̀, kí o sì ròyìn rẹ̀ ní ọ̀nà tó tọ́.",
          quickCheck: [
            { objective: "O3", q: "Lórí fóònù, báwo ni o ṣe lè rí ibi tí líǹkì ń lọ gan-an kí o tó ṣí i?", options: ["Tẹ̀ ẹ́ lẹ́ẹ̀mejì kíákíá", "Tẹ líǹkì náà mọ́lẹ̀ pẹ́ díẹ̀", "Fèsì sí ẹni tó fi ránṣẹ́", "Pa fóònù kí o sì tún un tàn"], answer: 1, why: "Títẹ̀ ẹ́ mọ́lẹ̀ pẹ́ ń fi àdírẹ́sì gidi hàn láìṣí i." },
            { objective: "O3", q: "Text kan sọ pé wọ́n dá ẹrù rẹ dúró, o sì gbọ́dọ̀ san owó kékeré nípasẹ̀ líǹkì. Kò sí ẹrù kankan tí ń bọ̀ fún ọ. Kí ni o máa ṣe?", options: ["San owó náà kí ó lè dára", "Fèsì láti béèrè ẹrù wo ni", "Tẹ líǹkì láti rí ohun tí ó sọ", "Fi ránṣẹ́ sí SPAM (7726), ròyìn rẹ̀ kí o sì pa á rẹ́"], answer: 3, why: "FTC sọ pé kí o fi text phishing ránṣẹ́ sí SPAM (7726) kí o sì ròyìn wọn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ewu àti bí ìkọlù ṣe ń ṣiṣẹ́",
        questions: [
          { objective: "O1", q: "Ransomware ti kọ̀mpútà ilé-ìwòsàn kékeré kan pa, àwọn òṣìṣẹ́ kò sì lè lò wọ́n. Èrò wo ló bà jẹ́?", options: ["Àṣírí", "Kò sí", "Ìpéye", "Wíwà lárọ̀ọ́wọ́tó"], answer: 3, why: "Wíwà lárọ̀ọ́wọ́tó túmọ̀ sí pé ẹ̀rọ ń ṣiṣẹ́ nígbà tí o bá nílò wọn." },
          { objective: "O1", q: "Ẹnì kan yí iye owó padà lórí ìbéèrè ìsanwó kan. Èrò wo ló bà jẹ́?", options: ["Ìyára", "Wíwà lárọ̀ọ́wọ́tó", "Àṣírí", "Ìpéye"], answer: 3, why: "Ìpéye túmọ̀ sí pé ìsọfúnni wà ní títọ̀nà." },
          { objective: "O2", q: "Ẹni tó pè ọ́ sọ pé òun wá láti IT, ó sì nílò kóòdù tí wọ́n ṣẹ̀ṣẹ̀ fi text ránṣẹ́ sí ọ. Èyí ni:", options: ["Iṣẹ́ IT lásán", "Àtúnṣe sọ́fítíwọ̀", "Social engineering", "Ẹ̀dà ìpamọ́ (backup)"], answer: 2, why: "Títan ènìyàn jẹ láti fúnni ní kóòdù jẹ́ social engineering." },
          { objective: "O2", q: "O lo ọ̀rọ̀ aṣínà kan náà lórí ojú-òpó eré tí wọ́n jí ìsọfúnni rẹ̀ (breach). Kí ni ewu rẹ̀?", options: ["Kò sí", "Fóònù rẹ máa bàjẹ́", "Ojú-iboju rẹ máa ṣókùnkùn", "Àwọn olùkọlù lè gbìyànjú ọ̀rọ̀ aṣínà náà lórí àwọn àkáǹtì rẹ míì"], answer: 3, why: "Ọ̀rọ̀ aṣínà tí a tún lò láti breach ń yọrí sí jíjí àkáǹtì gbà." },
          { objective: "O3", q: "Ímeèlì kan sọ pé wọ́n ti àkáǹtì báńkì rẹ pa, ó sì fún ọ ní líǹkì. Ìgbésẹ̀ tó láàbò jù ni:", options: ["Tẹ líǹkì kíákíá", "Fèsì pẹ̀lú ọ̀rọ̀ aṣínà rẹ", "Lọ sí ojú-òpó gidi báńkì náà tàbí pe nọ́mbà tí o mọ̀", "Fi ránṣẹ́ sí àwọn ọ̀rẹ́"], answer: 2, why: "Kàn sí ilé-iṣẹ́ náà pẹ̀lú ojú-òpó tàbí nọ́mbà tí o ti mọ̀ pé ó jẹ́ gidi." }
        ]
      }
    },
    {
      name: "Orí 2: Dídáàbò bo àkáǹtì àti ẹ̀rọ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ọ̀rọ̀ aṣínà tó lágbára àti password manager",
          minutes: 5,
          goal: "Ṣe ọ̀rọ̀ aṣínà tó lágbára tí kò jọ òmíràn kí o sì fi pamọ́ sínú password manager.",
          text: [
            "CISA sọ pé ọ̀rọ̀ aṣínà tó lágbára gùn (ó kéré tán àmì 16), kò ní ètò kankan (random), kò sì jọ òmíràn (ó yàtọ̀ fún àkáǹtì kọ̀ọ̀kan). Passphrase tí ó ní ọ̀rọ̀ mẹ́rin sí méje tí kò tan mọ́ ara wọn, bí àpẹẹrẹ CISA \"HorsePurpleHatRun\", gùn, ó sì rọrùn láti rántí.",
            "Kò sí ẹni tó lè rántí ọ̀rọ̀ aṣínà tó lágbára tó yàtọ̀ fún gbogbo àkáǹtì, nítorí náà lo password manager. Ó ń ṣe ọ̀rọ̀ aṣínà, ó sì ń fi wọ́n pamọ́ fún ọ; ìwọ yóò rántí ọ̀rọ̀ aṣínà pàtàkì kan ṣoṣo tó lágbára. CISA sọ pé àwọn kan jẹ́ ọ̀fẹ́, títí kan àwọn tó wà nínú browser àti fóònù.",
            "Má ṣe fi ọ̀rọ̀ aṣínà han ẹnikẹ́ni láéláé, má ṣe tẹ̀ ẹ́ sínú irinṣẹ́ AI, kí o sì yí ọ̀rọ̀ aṣínà padà lẹ́sẹ̀kẹsẹ̀ tí ilé-iṣẹ́ kan bá sọ fún ọ pé ó wà nínú data breach."
          ],
          steps: ["Ṣí password manager: èyí tó wà nínú browser tàbí fóònù rẹ, tàbí app tí a gbẹ́kẹ̀lé.", "Yan àkáǹtì rẹ tó ṣe pàtàkì jù, tí ó sábà máa ń jẹ́ ímeèlì.", "Lo manager náà láti ṣe ọ̀rọ̀ aṣínà gígùn, random, tàbí ṣe passphrase ọ̀rọ̀ 4 sí 7.", "Fi pamọ́ sínú manager náà.", "Yí ọ̀rọ̀ aṣínà padà lórí àkáǹtì náà kí o sì dán wíwọlé wò."],
          words: [["Password manager", "app tó ń ṣe ọ̀rọ̀ aṣínà rẹ, tó sì ń fi wọ́n pamọ́ láìléwu."], ["Passphrase", "ọ̀rọ̀ aṣínà tí a fi ọ̀rọ̀ mélòó kan tí kò tan mọ́ ara wọn ṣe."], ["Ọ̀rọ̀ aṣínà tí kò jọ òmíràn", "ọ̀rọ̀ aṣínà tí a lò fún àkáǹtì kan ṣoṣo (unique password)."]],
          sources: [CISA_PASSWORDS],
          slides: [
            { title: "Ọ̀rọ̀ aṣínà tó lágbára (CISA)", bullets: ["Gígùn: ó kéré tán àmì 16", "Random: kò ní ètò", "Kò jọ òmíràn: ó yàtọ̀ fún àkáǹtì kọ̀ọ̀kan"] },
            { title: "Passphrase", bullets: ["Ọ̀rọ̀ 4 sí 7 tí kò tan mọ́ ara wọn", "Àpẹẹrẹ: HorsePurpleHatRun"] },
            { title: "Lo password manager", bullets: ["Ó ń ṣe ọ̀rọ̀ aṣínà, ó sì ń fi wọ́n pamọ́", "O ń rántí ọ̀rọ̀ aṣínà pàtàkì kan ṣoṣo", "Àwọn kan jẹ́ ọ̀fẹ́, wọ́n wà nínú browser àti fóònù"] }
          ],
          tryIt: "Ṣí password manager lórí fóònù tàbí browser rẹ. Lò ó láti ṣe ọ̀rọ̀ aṣínà tuntun tó lágbára kí o sì fi pamọ́ fún àkáǹtì kan tó ṣe pàtàkì sí ọ.",
          youCanNow: "ṣe ọ̀rọ̀ aṣínà tó lágbára tí kò jọ òmíràn kí o sì fi pamọ́ sínú password manager.",
          quickCheck: [
            { objective: "O4", q: "Kí ni \"unique\" (tí kò jọ òmíràn) túmọ̀ sí fún ọ̀rọ̀ aṣínà?", options: ["Orúkọ rẹ wà nínú rẹ̀", "Ó kúrú, ó sì rọrùn láti tẹ̀", "Ó yàtọ̀ fún àkáǹtì kọ̀ọ̀kan", "Ó bá PIN fóònù rẹ mu"], answer: 2, why: "A ń lo ọ̀rọ̀ aṣínà unique fún àkáǹtì kan ṣoṣo, nítorí náà breach kan kò ní ṣí àwọn yòókù." },
            { objective: "O4", q: "Ilé-iṣẹ́ kan fi ímeèlì ránṣẹ́ pé ọ̀rọ̀ aṣínà rẹ wà nínú data breach. Kí ni o máa ṣe?", options: ["Yí ọ̀rọ̀ aṣínà náà padà lẹ́sẹ̀kẹsẹ̀", "Dúró láti wò bóyá nǹkan kan máa ṣẹlẹ̀", "Lo ọ̀rọ̀ aṣínà kan náà lórí àkáǹtì tuntun", "Fi ọ̀rọ̀ aṣínà han ọ̀rẹ́ kan láti ṣàyẹ̀wò rẹ̀"], answer: 0, why: "Yí ọ̀rọ̀ aṣínà padà lẹ́sẹ̀kẹsẹ̀ tí ilé-iṣẹ́ kan bá sọ pé ó wà nínú breach." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ìjẹ́rìísí onípele-púpọ̀ (MFA) àti àtúnṣe",
          minutes: 5,
          goal: "Tan ìjẹ́rìísí onípele-púpọ̀ kí o sì ṣe àtúnṣe (update) ẹ̀rọ kan.",
          text: [
            "Ìjẹ́rìísí onípele-púpọ̀ (MFA) ń béèrè ẹ̀rí kejì lẹ́yìn ọ̀rọ̀ aṣínà rẹ, bí kóòdù láti authenticator app, ìbéèrè lórí fóònù rẹ, security key, tàbí passkey. Kódà tí ẹnì kan bá jí ọ̀rọ̀ aṣínà rẹ, kò lè wọlé láìsí ẹ̀rí kejì. Kọ́kọ́ tàn án fún ímeèlì, báńkì, ilé-ìwé àti social media. CISA sọ pé MFA èyíkéyìí dára ju kí kò sí rárá, èyí tó lágbára jù sì ni MFA tí phishing kò lè tàn (FIDO, tí passkey àti security key ń lò), tí ó ṣòro láti tàn jẹ ju kóòdù text lọ.",
            "Má ṣe fi kóòdù MFA han ẹnikẹ́ni láéláé. Tí o bá gba kóòdù tàbí ìbéèrè wíwọlé tí o kò béèrè fún, ó ṣeé ṣe kí ẹnì kan ní ọ̀rọ̀ aṣínà rẹ: kọ̀ ọ́ (deny) kí o sì yí ọ̀rọ̀ aṣínà rẹ padà.",
            "Àtúnṣe (update) ń dí àwọn ihò ààbò tí àwọn olùkọlù ti mọ̀ tẹ́lẹ̀. Tan àtúnṣe aládàáṣe fún fóònù, kọ̀mpútà, browser àti àwọn app rẹ, kí o sì tún ẹ̀rọ tàn nígbà tí ó bá béèrè. CISA ka ṣíṣe àtúnṣe sọ́fítíwọ̀ sí ọ̀kan nínú ìgbésẹ̀ pàtàkì mẹ́rin rẹ̀, pẹ̀lú yíyẹra fún phishing, ọ̀rọ̀ aṣínà tó lágbára àti MFA."
          ],
          steps: ["Ṣí ètò ààbò (security settings) àkáǹtì ímeèlì rẹ.", "Wá two-step verification, two-factor tàbí multifactor authentication.", "Tẹ̀lé àwọn ìgbésẹ̀; passkey, security key tàbí authenticator app ṣòro láti tàn jẹ ju kóòdù text lọ, ṣùgbọ́n MFA èyíkéyìí dára ju kí kò sí.", "Fi àwọn backup code pamọ́ sí ibi tó láàbò, tí kò sí lórí íńtánẹ́ẹ̀tì.", "Ṣí ètò fóònù tàbí kọ̀mpútà rẹ kí o sì tan àtúnṣe aládàáṣe."],
          words: [["Ìjẹ́rìísí onípele-púpọ̀ (MFA)", "ẹ̀rí kejì, lẹ́yìn ọ̀rọ̀ aṣínà rẹ, pé ìwọ gan-an ni."], ["Authenticator app", "app tó ń fi kóòdù wíwọlé hàn, tí ó ń yí padà ní ìṣẹ́jú-àáyá díẹ̀-díẹ̀."], ["Passkey", "ọ̀nà wíwọlé tó ń lo ẹ̀rọ rẹ àti ojú, ìka tàbí PIN rẹ dípò ọ̀rọ̀ aṣínà."], ["Update / patch", "àtúnṣe láti ọ̀dọ̀ ẹni tó ṣe ẹ̀rọ náà, tó ń dí àwọn ihò ààbò."]],
          sources: [CISA_SOW, { name: "CISA: Ó ju ọ̀rọ̀ aṣínà lọ (MFA)", url: "https://www.cisa.gov/MFA" }],
          slides: [
            { title: "MFA: àgádágodo kejì", bullets: ["Ọ̀rọ̀ aṣínà + kóòdù, ìbéèrè, key tàbí passkey", "Ọ̀rọ̀ aṣínà tí wọ́n jí kò tó láti wọlé", "Tàn án fún ímeèlì, báńkì, ilé-ìwé, social media"] },
            { title: "Kóòdù tàbí ìbéèrè tí o kò retí?", bullets: ["Má ṣe fi han ẹnikẹ́ni láéláé", "Kọ̀ ọ́ (deny)", "Yí ọ̀rọ̀ aṣínà rẹ padà"] },
            { title: "Ṣe àtúnṣe gbogbo nǹkan", bullets: ["Fóònù, kọ̀mpútà, browser, app", "Tan àtúnṣe aládàáṣe", "Tún ẹ̀rọ tàn nígbà tí ó bá béèrè"] }
          ],
          tryIt: "Tan MFA fún àkáǹtì ímeèlì rẹ kí o sì fi àwọn backup code pamọ́. Lẹ́yìn náà ṣàyẹ̀wò fóònù tàbí kọ̀mpútà rẹ fún àtúnṣe, kí o sì fi èyíkéyìí tó ń dúró sí i.",
          youCanNow: "tan MFA kí o sì máa jẹ́ kí àwọn ẹ̀rọ rẹ wà ní ìgbàlódé.",
          quickCheck: [
            { objective: "O5", q: "Èwo nínú ìwọ̀nyí ni àpẹẹrẹ ẹ̀rí kejì fún MFA?", options: ["Orúkọ olùlò rẹ (username)", "Àwọ̀ tí o fẹ́ràn jù", "Àdírẹ́sì ímeèlì rẹ", "Kóòdù láti authenticator app"], answer: 3, why: "MFA ń béèrè ẹ̀rí kejì lẹ́yìn ọ̀rọ̀ aṣínà rẹ, bí kóòdù authenticator." },
            { objective: "O5", q: "Fóònù rẹ béèrè pé kí o fi àtúnṣe sí i kí o sì tún un tàn. Kí ni o máa ṣe?", options: ["Fojú fò ó dá fún oṣù púpọ̀", "Pa àtúnṣe kí ó má bàa béèrè mọ́", "Fi sí i kí o sì tún un tàn nígbà tí ó bá béèrè", "Ṣe àtúnṣe nìkan tí ọ̀rẹ́ kan bá sọ"], answer: 2, why: "Àtúnṣe ń dí àwọn ihò ààbò tí àwọn olùkọlù ti mọ̀ tẹ́lẹ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nígbà tí nǹkan bá dàrú",
          minutes: 5,
          goal: "Tẹ̀lé ètò tó rọrùn tí wọ́n bá jí àkáǹtì wọlé tàbí tí kòkòrò bá wọ ẹ̀rọ.",
          text: [
            "Àwọn àmì wàhálà: o kò lè wọlé, àwọn ọ̀rẹ́ rẹ ń gba ọ̀rọ̀ àjèjì láti ọ̀dọ̀ rẹ, o rí ìwọlé tàbí ìrajà tí kì í ṣe ìwọ ló ṣe é, tàbí ẹ̀rọ rẹ lójijì ń fi pop-up hàn tàbí ó ń lọ́ra gan-an.",
            "Tí wọ́n bá jí àkáǹtì wọlé: láti orí ẹ̀rọ tó láàbò, yí ọ̀rọ̀ aṣínà padà, tan MFA, jáde (sign out) kúrò ní gbogbo ìwọlé míì (ọ̀pọ̀ àkáǹtì ní èyí nínú security settings), kí o sì ṣàyẹ̀wò ímeèlì àti nọ́mbà fóònù ìmúpadàbọ̀sípò. Sọ fún àwọn olùbásọ̀rọ̀ rẹ pé kí wọ́n má tẹ ọ̀rọ̀ tó wá láti ọ̀dọ̀ rẹ. Tí owó bá wà nínú rẹ̀, pe báńkì rẹ pẹ̀lú nọ́mbà tó wà lórí káàdì rẹ.",
            "Tí o bá tẹ líǹkì búburú tàbí o rò pé kòkòrò ti wọ ẹ̀rọ kan, FTC sọ pé kí o ṣe àtúnṣe sọ́fítíwọ̀ ààbò rẹ, ṣe àyẹ̀wò (scan), kí o sì yọ ohunkóhun tí ó tọ́ka sí kúrò. Ní ilé-ìwé tàbí ibi iṣẹ́, sọ fún IT lẹ́sẹ̀kẹsẹ̀; ríròyìn kíákíá kì í ṣe kí o kó sínú wàhálà, ó ń dín ìbàjẹ́ kù. Ròyìn jìbìtì ní ReportFraud.ftc.gov tàbí ic3.gov ti FBI."
          ],
          steps: ["Lo ẹ̀rọ tó láàbò.", "Yí ọ̀rọ̀ aṣínà padà kí o sì tan MFA.", "Jáde kúrò ní gbogbo ìwọlé míì.", "Ṣàyẹ̀wò ímeèlì àti fóònù ìmúpadàbọ̀sípò.", "Kìlọ̀ fún àwọn olùbásọ̀rọ̀; pe báńkì rẹ tí owó bá wà nínú rẹ̀.", "Ṣe àtúnṣe sọ́fítíwọ̀ ààbò kí o sì ṣe scan.", "Sọ fún IT ní ilé-ìwé tàbí ibi iṣẹ́; ròyìn jìbìtì ní ReportFraud.ftc.gov tàbí ic3.gov."],
          words: [["Incident", "ìṣẹ̀lẹ̀ ààbò: ìṣòro ààbò, bí àkáǹtì tí wọ́n jí wọlé tàbí ẹ̀rọ tí kòkòrò wọ̀."], ["Session", "ìwọlé: ibi tí o ti wọlé sí, bí fóònù tàbí browser."], ["Recovery info", "ìsọfúnni ìmúpadàbọ̀sípò: ímeèlì àti fóònù tí iṣẹ́ kan ń lò láti ràn ọ́ lọ́wọ́ padà sínú àkáǹtì rẹ."]],
          sources: [FTC_PHISHING, { name: "FBI Internet Crime Complaint Center (IC3)", url: "https://www.ic3.gov" }, { name: "FTC: ReportFraud", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Àwọn àmì wàhálà", bullets: ["O kò lè wọlé", "Àwọn ọ̀rẹ́ ń gba ọ̀rọ̀ àjèjì láti ọ̀dọ̀ rẹ", "Ìwọlé tàbí ìrajà tí kì í ṣe ìwọ ló ṣe é"] },
            { title: "Ètò fún àkáǹtì tí wọ́n jí wọlé", bullets: ["Yí ọ̀rọ̀ aṣínà padà, tan MFA", "Jáde kúrò ní gbogbo ìwọlé", "Ṣàyẹ̀wò ímeèlì àti fóònù ìmúpadàbọ̀sípò"] },
            { title: "Ẹ̀rọ tí kòkòrò wọ̀ tàbí ọ̀rọ̀ owó", bullets: ["Ṣe àtúnṣe sọ́fítíwọ̀ ààbò kí o sì ṣe scan", "Pe báńkì rẹ pẹ̀lú nọ́mbà orí káàdì rẹ"] },
            { title: "Ròyìn kíákíá", bullets: ["Sọ fún IT ní ilé-ìwé tàbí ibi iṣẹ́", "ReportFraud.ftc.gov tàbí ic3.gov"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe àyẹ̀wò ààbò lórí ímeèlì rẹ (ọ̀rọ̀ aṣínà tó lágbára nínú manager, MFA tó tàn, ẹ̀rọ tó wà ní ìgbàlódé), kọ ètò ìlà márùn-ún rẹ fún àkáǹtì tí wọ́n jí wọlé, kí o sì kọ àwọn àmì phishing nínú ọ̀rọ̀ ìfura kan.",
          youCanNow: "dáàbò bo àkáǹtì kan láti ìbẹ̀rẹ̀ dé òpin kí o sì fi ọkàn balẹ̀ dáhùn tí wọ́n bá jí i wọlé.",
          quickCheck: [
            { objective: "O6", q: "Èwo nínú ìwọ̀nyí ni àmì pé wọ́n lè ti jí àkáǹtì kan wọlé?", options: ["Àwọn ọ̀rẹ́ ń gba ọ̀rọ̀ àjèjì láti ọ̀dọ̀ rẹ tí kì í ṣe ìwọ lo fi ránṣẹ́", "O wọlé lánàá", "Ọ̀rọ̀ aṣínà rẹ gùn", "O tan MFA"], answer: 0, why: "Ọ̀rọ̀ àjèjì tí a fi ránṣẹ́ láti àkáǹtì rẹ jẹ́ àmì tó wọ́pọ̀ pé wọ́n ti jí i gbà." },
            { objective: "O6", q: "Ní ibi iṣẹ́, o rò pé o tẹ líǹkì búburú. Kí ni o máa ṣe?", options: ["Dákẹ́ kí o má bàa kó sínú wàhálà", "Sọ fún IT lẹ́sẹ̀kẹsẹ̀", "Tún tẹ líǹkì náà láti ṣàyẹ̀wò", "Pa MFA"], answer: 1, why: "Ríròyìn kíákíá ń dín ìbàjẹ́ kù, kì í sì ṣe kíkó sínú wàhálà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídáàbò bo àkáǹtì àti ẹ̀rọ",
        questions: [
          { objective: "O4", q: "Gẹ́gẹ́ bí CISA ṣe sọ, ọ̀rọ̀ aṣínà tó lágbára:", options: ["Kúrú, ó sì rọrùn", "Jẹ́ ọ̀kan náà fún gbogbo àkáǹtì", "Jẹ́ orúkọ ẹran ọ̀sìn rẹ", "Gùn, jẹ́ random, kò sì jọ òmíràn"], answer: 3, why: "CISA sọ pé ó gbọ́dọ̀ gùn (ó kéré tán àmì 16), jẹ́ random, kí ó sì jẹ́ unique." },
          { objective: "O4", q: "Kí ni password manager ń ṣe?", options: ["Ó ń fi ọ̀rọ̀ aṣínà rẹ han àwọn ọ̀rẹ́", "Ó ń pa àwọn àkáǹtì rẹ rẹ́", "Ó ń ṣe ọ̀rọ̀ aṣínà tó lágbára, ó sì ń fi wọ́n pamọ́ fún ọ", "Ó ń pa MFA"], answer: 2, why: "O ń rántí ọ̀rọ̀ aṣínà pàtàkì kan; ó ń fi àwọn yòókù pamọ́." },
          { objective: "O5", q: "O gba ìbéèrè MFA tí o kò béèrè fún. Kí ni o máa ṣe?", options: ["Gbà á (approve)", "Fi kóòdù ránṣẹ́ sí ọ̀rẹ́ kan", "Fojú fò ó dá títí láé", "Kọ̀ ọ́ (deny) kí o sì yí ọ̀rọ̀ aṣínà rẹ padà"], answer: 3, why: "Ìbéèrè tí o kò retí túmọ̀ sí pé ẹnì kan lè ní ọ̀rọ̀ aṣínà rẹ." },
          { objective: "O5", q: "Kí ló dé tí a fi ń ṣe àtúnṣe (update)?", options: ["Wọ́n ń dí àwọn ihò ààbò tí àwọn olùkọlù mọ̀", "Wọ́n ń mú kí fóònù wúwo sí i", "Wọ́n ń pa àwọn fọ́tò rẹ rẹ́", "Fún eré nìkan ni wọ́n wà"], answer: 0, why: "Àtúnṣe ń dí àwọn ihò ààbò tí a ti mọ̀." },
          { objective: "O6", q: "Wọ́n jí àkáǹtì rẹ wọlé. Lẹ́yìn tí o yí ọ̀rọ̀ aṣínà padà, ìgbésẹ̀ pàtàkì kan ni láti:", options: ["Fi ọ̀rọ̀ aṣínà tuntun rẹ sí orí ayélujára", "Pa àwọn olùbásọ̀rọ̀ rẹ rẹ́", "Pa àtúnṣe", "Jáde kúrò ní gbogbo ìwọlé míì"], answer: 3, why: "Jíjáde níbi gbogbo ń lé olùkọlù jáde." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí Ààbò Ẹ̀rọ Ayélujára",
    questions: [
      { objective: "O1", q: "Cybersecurity (ààbò ẹ̀rọ ayélujára) ni:", options: ["Dídáàbò bo ẹ̀rọ, àkáǹtì àti ìsọfúnni lọ́wọ́ ìkọlù", "Ṣíṣe ojú-òpó wẹ́ẹ̀bù kí ó ní àwọ̀ púpọ̀", "Irú fóònù kan", "Eré fídíò kan"], answer: 0, why: "Ó ń dáàbò bo ẹ̀rọ, àkáǹtì àti ìsọfúnni." },
      { objective: "O1", q: "Nínú CIA triad, \"confidentiality\" (àṣírí) túmọ̀ sí:", options: ["Ẹ̀rọ náà yára", "A ti ṣe ẹ̀dà ìpamọ́ ìsọfúnni náà", "Àwọn ẹni tó tọ́ nìkan ló lè rí ìsọfúnni náà", "Iná wà"], answer: 2, why: "Àṣírí ń pa ìsọfúnni mọ́ ní ìkọ̀kọ̀." },
      { objective: "O1", q: "Wọ́n lu ojú-òpó wẹ́ẹ̀bù kan pa, àwọn oníbàárà kò sì lè lò ó. Èrò wo ló bà jẹ́?", options: ["Ìpéye", "Àṣírí", "Wíwà lárọ̀ọ́wọ́tó", "Ìjẹ́rìísí"], answer: 2, why: "Wíwà lárọ̀ọ́wọ́tó túmọ̀ sí pé ó ń ṣiṣẹ́ nígbà tí a bá nílò rẹ̀." },
      { objective: "O2", q: "Malware ni:", options: ["Àtúnṣe tó wúlò", "Firewall", "Password manager", "Sọ́fítíwọ̀ tó ń pani lára"], answer: 3, why: "Malware jẹ́ sọ́fítíwọ̀ tó ń pani lára." },
      { objective: "O2", q: "Ransomware:", options: ["Ń mú kí kọ̀mpútà rẹ yára", "Ń ti fáìlì pa ó sì ń béèrè owó", "Ń ṣe ẹ̀dà ìpamọ́ fọ́tò rẹ", "Ń dí spam"], answer: 1, why: "Ransomware ń mú fáìlì ní ìgbèkùn." },
      { objective: "O2", q: "Social engineering ni:", options: ["Kíkọ́ afárá", "Títan ènìyàn jẹ láti fúnni ní ìwọlé tàbí ìsọfúnni", "Ṣíṣe àtúnṣe app", "Ẹ̀kọ́ ilé-ìwé nìkan"], answer: 1, why: "Ó ń kọlu ènìyàn dípò ẹ̀rọ." },
      { objective: "O2", q: "Èwo ni ọ̀nà tó wọ́pọ̀ tí wọ́n fi ń jí àkáǹtì gbà?", options: ["Títún ọ̀rọ̀ aṣínà tó jò jáde nínú breach lò", "Lílo MFA", "Fífi àtúnṣe sí ẹ̀rọ", "Lílo password manager"], answer: 0, why: "Ọ̀rọ̀ aṣínà tó jò jáde tí a tún lò ń jẹ́ kí olùkọlù wọ àwọn àkáǹtì míì." },
      { objective: "O3", q: "Phishing ni:", options: ["Ọ̀rọ̀ ayédèrú tó ń gbìyànjú láti tàn ọ́ jẹ", "App ẹja pípa", "Ọ̀nà ẹ̀dà ìpamọ́", "Irú ọ̀rọ̀ aṣínà kan"], answer: 0, why: "Phishing ń tàn ọ́ jẹ láti tẹ nǹkan tàbí fi ìsọfúnni hàn." },
      { objective: "O3", q: "Èwo ni àmì phishing tí FTC kọ sílẹ̀?", options: ["Ọ̀rọ̀ láti ọ̀dọ̀ ọ̀rẹ́ tí o ń retí", "Ìwé ẹ̀rí ìsanwó fún nǹkan tí o rà", "Ọ̀rọ̀ tó sọ pé ìgbòkègbodò ìfura wà, pẹ̀lú líǹkì láti tún un ṣe", "Ìwé ìròyìn ilé-ìwé"], answer: 2, why: "Ìkìlọ̀ \"ìgbòkègbodò ìfura\" ayédèrú jẹ́ ẹ̀tàn tó wọ́pọ̀." },
      { objective: "O3", q: "Kí o tó tẹ líǹkì nínú ímeèlì lórí kọ̀mpútà, o lè:", options: ["Gbé mouse lé e (hover) láti rí ibi tí ó ń lọ gan-an", "Tẹ̀ ẹ́ lẹ́ẹ̀mejì", "Fèsì pẹ̀lú ọ̀rọ̀ aṣínà rẹ", "Pa kọ̀mpútà"], answer: 0, why: "Hover ń fi àdírẹ́sì wẹ́ẹ̀bù gidi hàn." },
      { objective: "O3", q: "Ibo ni FTC sọ pé kí o fi text phishing ránṣẹ́ sí?", options: ["Sí gbogbo àwọn olùbásọ̀rọ̀ rẹ", "SPAM (7726)", "Ẹni tó fi ránṣẹ́", "911"], answer: 1, why: "Fi text phishing ránṣẹ́ sí 7726 (SPAM)." },
      { objective: "O3", q: "Ní ibi iṣẹ́, o gba ímeèlì ìfura kan. Kí ni o máa ṣe?", options: ["Tẹ̀ ẹ́ láti rí bóyá ó jẹ́ gidi", "Ròyìn rẹ̀ pẹ̀lú bọ́tìnnì phishing tàbí sọ fún IT", "Fi ránṣẹ́ sí àwọn alábàáṣiṣẹ́", "Fèsì kí o sì béèrè"], answer: 1, why: "IT lè dí i fún gbogbo ènìyàn." },
      { objective: "O4", q: "Gígùn tó kéré jù tí CISA fẹ́ fún ọ̀rọ̀ aṣínà tó lágbára ni:", options: ["Ó kéré tán àmì 16", "Àmì 4", "Àmì 8 gẹ́lẹ́", "Gígùn èyíkéyìí"], answer: 0, why: "CISA sọ pé ó kéré tán àmì 16; bí ó bá ṣe gùn tó ni ó ṣe lágbára tó." },
      { objective: "O4", q: "Èwo ni passphrase tó dára?", options: ["password123", "Ọjọ́ ìbí rẹ", "HorsePurpleHatRun", "abc"], answer: 2, why: "Ọ̀rọ̀ mélòó kan tí kò tan mọ́ ara wọn ń mú kí ó gùn, kí ó sì ṣòro láti gbá." },
      { objective: "O4", q: "Password manager túmọ̀ sí pé o kàn nílò láti rántí:", options: ["Gbogbo ọ̀rọ̀ aṣínà", "Ọ̀rọ̀ aṣínà pàtàkì kan ṣoṣo tó lágbára", "Kò sí ọ̀rọ̀ aṣínà àti kò sí ẹ̀rọ", "Ọ̀rọ̀ aṣínà ọ̀rẹ́ rẹ"], answer: 1, why: "Manager náà ń fi àwọn yòókù pamọ́." },
      { objective: "O5", q: "MFA ń dáàbò bò ọ́ nítorí pé:", options: ["Ọ̀rọ̀ aṣínà tí wọ́n jí nìkan kò tó láti wọlé", "Ó ń mú kí ọ̀rọ̀ aṣínà rẹ kúrú", "Ó ń fi ìwọlé rẹ han àwọn ẹlòmíì", "Ó ń pa fóònù rẹ"], answer: 0, why: "MFA nílò ẹ̀rí kejì." },
      { objective: "O5", q: "Irú MFA wo ni CISA pè ní èyí tó lágbára jù?", options: ["Kíkọ kóòdù sórí ìwé alálẹ̀mọ́", "MFA tí phishing kò lè tàn, bí passkey tàbí security key", "Sísọ kóòdù fún ọ̀rẹ́ kan", "Kò sí ẹ̀rí kejì"], answer: 1, why: "CISA pe MFA tí phishing kò lè tàn ní ohun tí a gbọ́dọ̀ lépa; passkey àti security key ṣòro láti tàn jẹ ju kóòdù text lọ." },
      { objective: "O5", q: "Ìgbésẹ̀ pàtàkì mẹ́rin CISA ni: yíyẹra fún phishing, ọ̀rọ̀ aṣínà tó lágbára, MFA àti:", options: ["Ra fóònù tuntun", "Ṣe àtúnṣe sọ́fítíwọ̀", "Pa Wi-Fi títí láé", "Fi ọ̀rọ̀ aṣínà han àwọn ẹlòmíì"], answer: 1, why: "Ṣíṣe àtúnṣe sọ́fítíwọ̀ ni ìgbésẹ̀ pàtàkì kẹrin." },
      { objective: "O6", q: "O rò pé o tẹ líǹkì búburú. FTC sọ pé kí o:", options: ["Fojú fò ó dá", "Ṣe àtúnṣe sọ́fítíwọ̀ ààbò, ṣe scan kí o sì yọ ohun tí ó tọ́ka sí kúrò", "Fi líǹkì ránṣẹ́ sí àwọn ọ̀rẹ́", "San owó fún ẹnikẹ́ni tó bá béèrè"], answer: 1, why: "Scan ń wá sọ́fítíwọ̀ tó ń pani lára, ó sì ń yọ ọ́ kúrò." },
      { objective: "O6", q: "Ibo ni o ti lè ròyìn jìbìtì orí ayélujára fún FBI?", options: ["ic3.gov", "Ọ̀rọ̀ ìdáhùn (comment) lórí social media", "Ímeèlì jìbìtì náà", "Kò sí ibì kankan"], answer: 0, why: "IC3 ni Internet Crime Complaint Center ti FBI (ibùdó ẹ̀sùn ìwà ọ̀daràn orí íńtánẹ́ẹ̀tì)." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 5, 7, 8, 12, 15, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ọ̀rọ̀ aṣínà tó lágbára tí kò jọ òmíràn", objective: "O4", notYet: "Ọ̀rọ̀ aṣínà náà kúrú, a ti lò ó níbòmíì, tàbí a kò fi pamọ́ sí ibi tó láàbò.", meets: "Ọ̀rọ̀ aṣínà tí ó ní ó kéré tán àmì 16, tí a lò lórí àkáǹtì yìí nìkan, tí a fi pamọ́ sínú password manager.", exceeds: "Ó tún ṣàyẹ̀wò àkáǹtì pàtàkì míì kan, ó sì mú kí ọ̀rọ̀ aṣínà rẹ̀ jẹ́ unique." },
      { name: "Ìjẹ́rìísí onípele-púpọ̀ (MFA)", objective: "O5", notYet: "A kò tíì tan MFA.", meets: "MFA ti tàn, ó sì ń ṣiṣẹ́ fún àkáǹtì náà.", exceeds: "Ó ń lo authenticator app, passkey tàbí security key dípò kóòdù text." },
      { name: "Ẹ̀rọ wà ní ìgbàlódé", objective: "O5", notYet: "A kò ṣàyẹ̀wò àtúnṣe, tàbí àtúnṣe aládàáṣe kò tàn.", meets: "Fóònù tàbí kọ̀mpútà wà ní ìgbàlódé, àtúnṣe aládàáṣe sì ti tàn.", exceeds: "Ó tún ṣàyẹ̀wò browser àti àwọn app pàtàkì." },
      { name: "Ètò ìmúpadàbọ̀sípò", objective: "O6", notYet: "Ètò náà kò sí, tàbí ó ní ìgbésẹ̀ tó tọ̀nà tí kò tó mẹ́ta.", meets: "Ìlà márùn-ún tó sọ̀rọ̀ nípa yíyí ọ̀rọ̀ aṣínà padà, MFA, jíjáde kúrò ní àwọn ìwọlé míì, ṣíṣàyẹ̀wò ìsọfúnni ìmúpadàbọ̀sípò àti kíkìlọ̀ fún àwọn olùbásọ̀rọ̀.", exceeds: "Ó tún sọ ibi tí a ó ti ròyìn àti ẹni tí a ó pè tí owó bá wà nínú rẹ̀." },
      { name: "Àwọn àmì phishing", objective: "O3", notYet: "A kò rí ọ̀rọ̀ kankan, tàbí kò sí àmì tó tọ̀nà tí a kọ.", meets: "Ọ̀rọ̀ ìfura kan pẹ̀lú ó kéré tán àmì phishing méjì tó tọ̀nà tí a kọ sílẹ̀.", exceeds: "Ó tún sọ bí àti ibi tí a ó ti ròyìn rẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ti àyẹ̀wò ààbò",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì ń lo MFA àti password manager ní ọjọ́ 30 lẹ́yìn náà (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ròyìn ọ̀rọ̀ phishing fún IT tàbí FTC, tàbí tí wọ́n yẹra fún jìbìtì, láàárín ọjọ́ 30 lẹ́yìn ẹ̀kọ́ náà",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí ẹ̀kọ́ tàbí ìwé-ẹ̀rí tó tẹ̀lé e nínú cybersecurity tàbí IT"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà akẹ́kọ̀ọ́ fúnra rẹ̀ tí ó ní íńtánẹ́ẹ̀tì",
      "Àkáǹtì pàtàkì kan tí wọ́n lè wọlé sí, ímeèlì ló dára jù",
      "Password manager ọ̀fẹ́, bí èyí tó wà nínú browser tàbí fóònù",
      "Ìwé àti gègé fún ètò ìmúpadàbọ̀sípò ìlà márùn-ún; nǹkan bí ìṣẹ́jú 60 lápapọ̀"
    ],
    facilitatorNotes: [
      "Má ṣe béèrè láti rí, gbà tàbí kọ ọ̀rọ̀ aṣínà tàbí kóòdù MFA ẹnikẹ́ni sílẹ̀ láéláé; àwọn akẹ́kọ̀ọ́ ń ṣe ìgbésẹ̀ àkáǹtì lórí ojú-iboju tiwọn.",
      "Rí i dájú pé akẹ́kọ̀ọ́ kọ̀ọ̀kan ṣì lè wọ ímeèlì tàbí fóònù ìmúpadàbọ̀sípò wọn kí wọ́n tó tan MFA, kí ẹnikẹ́ni má bàa di títìpa mọ́ òde nínú kíláàsì.",
      "Mú àpẹẹrẹ phishing tí a tẹ̀ jáde tàbí screenshot wá, kí àwọn akẹ́kọ̀ọ́ tí kò ní ọ̀rọ̀ ìfura lè ṣe iṣẹ́ phishing náà.",
      "Lórí kọ̀mpútà àjọlò tàbí ti yàrá ẹ̀kọ́, má ṣe fi ọ̀rọ̀ aṣínà pamọ́ sínú browser; jẹ́ kí àwọn akẹ́kọ̀ọ́ lo password manager fóònù tiwọn kí wọ́n sì jáde (sign out) ní ìparí.",
      "Tí akẹ́kọ̀ọ́ kan bá rí i pé wọ́n ti jí àkáǹtì gidi rẹ̀ wọlé, dúró díẹ̀ kí o sì tọ́ ọ sọ́nà nínú ètò ìmúpadàbọ̀sípò láti orí ẹ̀rọ tó láàbò."
    ]
  }
};
