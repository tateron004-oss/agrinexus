"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-ai-scouting-recruiting.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-ai-scouting-recruiting-ha",
  lang: "ha",
  translationOf: "athletes-ai-scouting-recruiting",
  category: "Athletes",
  name: "AI a Neman Ƙwararru da Ɗaukar 'Yan Wasa (Scouting da Recruiting)",
  skills: "Yin jerin makarantun da ake nufa a spreadsheet, Yin bayanin ɗan wasa (recruiting profile) da bidiyon bajinta, Rubuta imel na musamman ga kociyoyin jami'a da AI, Sanin inda ake duba ƙa'idojin cancanta da ɗaukar 'yan wasa, Tsara bayanan scouting cikin adalci (ga kociyoyi)",
  outcome: "gudanar da tsarin neman gurbin wasa a jami'a cikin tsari: jerin makarantu 15 da kuke nufa a spreadsheet, bayanin ɗan wasa na shafi ɗaya da bidiyon bajinta na minti biyu zuwa huɗu, da imel na musamman ga kociyoyin jami'a uku da kuka rubuta da taimakon AI, yayin da kuke duba ƙa'idojin hukuma na cancanta da ɗaukar 'yan wasa a wasanku.",
  about: [
    "Wannan kwas na 'yan wasa ne na makarantar sakandare (high school) da na kwalejin farko (junior college) da ke son yin wasa a jami'a, da iyayensu, da kociyoyin da ke taimaka musu. Akwai kuma ɗan sashe da ke taimaka wa kociyoyi su tsara bayanan scouting cikin adalci.",
    "Neman gurbin wasa a jami'a aiki ne da za ku iya gudanarwa kamar wani shiri (project). Za ku binciki makarantu, ku nuna ƙwarewarku da halayenku a sarari, ku tuntuɓi kociyoyi cikin ladabi, ku kuma bibiyi komai a wuri ɗaya, kuna amfani da AI don ajiye lokaci amma ba don ƙirƙirar ƙarya ba.",
    "Ƙa'idojin ɗaukar 'yan wasa da na cancanta sun dogara ne da wasanku da matakinku (NCAA Division I, II, III, NAIA, junior college), kuma suna canjawa sau da yawa. Wannan kwas yana nuna muku inda za ku duba; koyaushe ku tabbatar da kocin makarantarku, mai ba ku shawara (counselor) da shafukan hukuma."
  ],
  finalTask: "Ku gina tsarinku na neman gurbin wasa: spreadsheet mai makarantu 15 da kuke nufa (reach, target da likely), bayanin ɗan wasa na shafi ɗaya, bidiyon bajinta na minti biyu zuwa huɗu da mafi kyawun hotunanku a farko, da imel na musamman ga kociyoyi uku da kuka rubuta da AI kuma kuka gyara da kanku. Ku ƙara bayani kan wane asusun cancanta kuke buƙata da inda kuka duba ƙa'idojin ɗaukar 'yan wasa na wasanku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasan makarantar sakandare da na junior college da ke son yin wasa a jami'a, iyayensu, da kociyoyin da ke taimaka musu ko ke neman sababbin 'yan wasa.",
    startingPoint: "Suna wasa a gasa, kuma wataƙila suna da bidiyon wasa, alƙaluma (stats) da kocin kulob ko na makaranta. Da yawa ba su san wane asusun cancanta suke buƙata ba, suna dogara da AI ko tsofaffin rubuce-rubuce don ƙa'idoji, suna aika imel iri ɗaya ga kowa, kuma ba sa bibiyar tuntuɓar da suka yi.",
    gap: "Rashin kammala matakan cancanta, bin makarantun da ba su dace ba, ko aika saƙonni na gama-gari na iya hana ɗan wasa gurbi a ƙungiyar jami'a ko tallafin karatu, kuma kamfanonin da ake biya na iya karɓar kuɗi da alƙawuran ƙarya. Tsari mai kyau da aka duba ƙa'idojinsa, da kayan gaskiya, da imel na musamman suna ba su dama ta gaske.",
    constraints: [
      "Kalmomi masu sauƙi, kusan matakin karatun aji 8",
      "Waya ko kwamfuta mai Google Sheets, mataimakin AI kyauta da shirin gyaran bidiyo",
      "Kusan minti 60 na darussa, da ƙarin lokaci don yin bayanin ɗan wasa, bidiyo da jerin makarantu",
      "Ƙa'idojin cancanta da na tuntuɓar 'yan wasa sun bambanta bisa ƙungiya, wasa da mataki, kuma suna canjawa sau da yawa; ku duba ncaa.org, shafin NAIA da mai ba da shawara na makaranta",
      "Yawancin 'yan wasan da ake nema yara ne ƙanana: babu adireshin gida ko bayanan sirri a bayanin ɗan wasa ko a kayan AI"
    ],
    prerequisites: "Babu. Kwas ɗin \"Nazarin Bidiyo da Basirar Wasa\" da \"SEO da Gina Shafin Intanet ɗinku da AI\" suna da amfani tare da shi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kun san matakan jami'a da kuke nufa", action: "gane wane asusun cancanta kuke buƙata da inda za ku duba ƙa'idojin tuntuɓar 'yan wasa na wasanku", standard: "ta amfani da shafukan hukuma da mai ba ku shawara, ba AI ko tsofaffin rubuce-rubuce ba, don ƙa'idoji da ranaku" },
    { id: "O2", condition: "Ta amfani da Google Sheets da mataimakin AI", action: "gina jerin makarantu 15 da kuke nufa, kowacce da alamar reach, target ko likely", standard: "an duba kowace makaranta, sunan koci da bayanin ƙungiya a shafukan hukuma na makarantar" },
    { id: "O3", condition: "Ta amfani da alƙaluma, maki da hotunan bidiyonku na gaskiya", action: "ƙirƙirar bayanin ɗan wasa na shafi ɗaya da bidiyon bajinta na minti biyu zuwa huɗu", standard: "kowane alƙalami gaskiya ne, mafi kyawun hotuna a daƙiƙa 30 na farko, an nuna ku kafin kowane hoto, babu adireshin gida, kuma koci ya duba" },
    { id: "O4", condition: "Ta amfani da bayanin ɗan wasanku da daftarin AI", action: "rubuta imel na musamman na gabatar da kanku ga kociyoyin jami'a uku", standard: "ƙasa da kalmomi 150 kowanne, da taken imel a sarari da dalili ɗaya na gaskiya na musamman ga kowace makaranta, ku ne kuka aika daga imel mai mutunci" },
    { id: "O5", condition: "Ta amfani da jerin makarantun da kuke nufa", action: "bibiyar kowace tuntuɓa, amsa da mataki na gaba tare da ranaku", standard: "ana sabunta shi kowane mako, kuma an duba duk wani kamfanin da ake biya da kocinku ko mai ba ku shawara tukuna" },
    { id: "O6", condition: "A matsayinku na koci mai neman 'yan wasa", action: "tsara bayanan scouting da ma'auni iri ɗaya da sikelin 1 zuwa 5 mai bayani ga kowane ɗan wasa", standard: "maki daga abin da kuka gani, AI don taƙaita bayanai kaɗai, an kiyaye bayanan sirri kuma an duba son zuciya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shirin neman gurbin wasa a jami'a",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ƙa'idoji tukuna: tushen cancanta da ɗaukar 'yan wasa",
          minutes: 5,
          goal: "Nemo asusun cancanta da ƙa'idojin ɗaukar 'yan wasa da suka shafe ku.",
          text: [
            "Wasannin jami'a suna da ƙungiyoyi daban-daban: NCAA Division I, II da III, NAIA, da junior colleges. Kowacce tana da nata ƙa'idojin karatu da na cancanta.",
            "Idan kuna shirin yin wasa a NCAA Division I ko II, za ku buƙaci asusu a NCAA Eligibility Center (Cibiyar Cancanta ta NCAA), wadda ke duba karatunku da matsayinku na ɗan wasa mai son wasa ba don kuɗi ba (amateur). Shafin Eligibility Center yana bayanin Profile Page ga ƙananan ɗalibai da Division III, da asusun tabbatarwa (certification) ga Division I da II. NAIA tana da nata cibiyar cancanta; ku duba shafinta na hukuma.",
            "Lokacin da kociyoyin jami'a za su iya tuntuɓar ku, da yadda za su yi, ya dogara da wasanku da matakinku, kuma yana canjawa sau da yawa. Kada ku dogara da AI ko tsofaffin rubuce-rubuce don ranaku; ku duba ncaa.org, ku tambayi kocin makarantarku da mai ba ku shawara, kuma ku kula da makinku da muhimman darussa (core courses)."
          ],
          steps: ["Ku yanke matakan da kuke nufa.", "Ku ziyarci NCAA Eligibility Center ku karanta wane asusu ya dace da ku.", "Ku duba shafin cancanta na NAIA idan ya shafe ku.", "Ku tambayi mai ba ku shawara game da muhimman darussa da maki.", "Ku duba ƙa'idojin tuntuɓar 'yan wasa na wasanku a ncaa.org."],
          words: [["Cancanta (eligibility)", "cika ƙa'idojin karatu da sauran ƙa'idojin da ake buƙata don yin wasa a jami'a."], ["NCAA Eligibility Center", "ofishin NCAA inda 'yan wasan jami'a na gaba ke yin rajista don a duba karatunsu da matsayinsu na amateur."], ["Division (mataki)", "matakin wasannin jami'a, kamar NCAA Division I, II ko III."]],
          slides: [
            { title: "Matakan wasannin jami'a", bullets: ["NCAA Divisions I, II, III", "NAIA", "Junior colleges"] },
            { title: "Asusun cancanta", bullets: ["NCAA DI da DII: asusun certification", "Ƙananan ɗalibai da DIII: Profile Page", "NAIA: tana da nata cibiyar cancanta"] },
            { title: "Ƙa'idojin tuntuɓa suna canjawa", bullets: ["Sun dogara da wasa da mataki", "Ku duba ncaa.org, ba AI ba", "Ku tambayi kocinku da mai ba ku shawara"] }
          ],
          sources: [
            { name: "NCAA Eligibility Center (Cibiyar Cancanta ta NCAA)", url: "https://web3.ncaa.org/ecwr3/" },
            { name: "NCAA: Name, Image and Likeness (ƙa'idoji ga 'yan wasa da ake ɗauka da 'yan wasa)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Ku ziyarci shafin NCAA Eligibility Center ku rubuta wane irin asusu ya dace da ku. Sannan ku rubuta tambaya ɗaya game da ƙa'idojin ɗaukar 'yan wasa na wasanku don ku tambayi kocin makarantarku ko mai ba ku shawara.",
          youCanNow: "nemo asusun cancanta da ƙa'idojin hukuma da suka shafe ku.",
          quickCheck: [
            { objective: "O1", q: "Wace ƙungiya ce ke da nata cibiyar cancanta, daban da NCAA?", options: ["NAIA", "Makarantar sakandarenku", "Ƙungiyar kulob ɗinku", "Jaridar unguwa"], answer: 0, why: "NAIA tana da nata cibiyar cancanta; ku duba shafinta na hukuma." },
            { objective: "O1", q: "AI ya faɗa muku ranar da kociyoyin jami'a za su fara kiran ku. Me za ku yi?", options: ["Ku yarda da shi", "Ku sanar da abokan wasanku", "Ku duba ncaa.org ku tambayi kocinku ko mai ba ku shawara", "Ku jira koci ya kira"], answer: 2, why: "Ƙa'idojin tuntuɓa suna canjawa sau da yawa; ku duba majiyoyin hukuma, ba AI ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gina jerin makarantun da kuke nufa",
          minutes: 6,
          goal: "Gina spreadsheet na makarantu 15 da suka dace da ku a wasa, karatu da rayuwa.",
          text: [
            "Makarantar da ta dace ita ce wadda za ku iya yin wasa, ku karanta abin da kuke so, ku iya biyan kuɗinta, kuma ku ji daɗi ko da wasan ya ƙare. Ku haɗa iri uku: reach (mai wuya, sai kun miƙe sosai), target (ta dace da ku sosai) da likely (inda za ku taimaka a fili).",
            "Ku yi Google Sheet da ginshiƙai (columns): Makaranta, Division, Wuri, Fannin karatu da kuke so, Buƙatar ƙungiya a matsayinku, Dacewar karatu, Bayanan kuɗi, Sunan koci da imel, Matsayi. Ku samo sunayen kociyoyi da bayanan ƙungiya (roster) daga shafin wasanni na hukuma na kowace makaranta.",
            "Mataimakin AI zai iya ba da shawarar makarantun da za ku binciki: \"Ni ɗan wasan ƙwallon ƙafa ne na tsakiya (midfielder), tsayina 5'9\", GPA ɗina 3.5, kuma ina son karanta aikin jinya (nursing) a Kudu maso Gabas. Ka ba ni jami'o'i 20 masu ƙungiyar ƙwallon ƙafa a matakai daban-daban don in binciki.\" Sannan ku duba kowacce da kanku; jerin AI na iya zama tsoho ko ba daidai ba."
          ],
          steps: ["Ku ƙirƙiri sheet ɗin da ginshiƙan da ke sama.", "Ku tambayi AI makarantun da za ku binciki.", "Ku duba shafukan wasanni da na karatu na hukuma na kowace makaranta.", "Ku sa wa kowacce alamar reach, target ko likely.", "Ku ajiye 15 da suka dace da ku da gaske."],
          words: [["Jerin makarantun da ake nufa (target list)", "makarantun da kuke shirin tuntuɓa."], ["Roster", "jerin 'yan wasan ƙungiya; yana nuna wanda zai kammala karatu a matsayinku."]],
          slides: [
            { title: "Makarantar da ta dace", bullets: ["Za ku iya yin wasa?", "Za ku iya karanta abin da kuke so?", "Za ku iya biyan kuɗin? Za ku ji daɗi ba tare da wasa ba?"] },
            { title: "Ginshiƙan sheet", bullets: ["Makaranta, Division, Wuri, Fannin karatu", "Buƙatar ƙungiya, Dacewar karatu, Bayanan kuɗi", "Lambar koci, Matsayi"] },
            { title: "AI yana ba da shawara, ku kuke tabbatarwa", bullets: ["Ku nemi makarantun da za ku binciki", "Ku duba shafukan hukuma", "Reach, target, likely"] }
          ],
          tryIt: "Ku ƙirƙiri sheet ɗin jerin makarantunku. Ku yi amfani da AI don samun ra'ayoyi, ku tabbatar da makarantu goma a shafukansu na hukuma, ku sa wa kowacce alamar reach, target ko likely.",
          youCanNow: "gina jerin makarantu mai daidaito da kuka tabbatar da shi.",
          quickCheck: [
            { objective: "O2", q: "Mene ne makarantar \"likely\" a jerinku?", options: ["Mai wuya sosai", "Makarantar da za ku taimaka a fili", "Makarantar da ba ta da ƙungiyar wasanku", "Makarantar mafarkinku kaɗai"], answer: 1, why: "Makarantun likely su ne inda za ku taimaka a fili." },
            { objective: "O2", q: "AI ya lissafa makarantar da ba ku taɓa jin labarinta ba. Me za ku yi?", options: ["Ku ƙara ta ba tare da dubawa ba", "Ku goge duk jerin", "Ku aika wa kocin imel nan take", "Ku duba shafukanta na wasanni da karatu na hukuma tukuna"], answer: 3, why: "Jerin AI na iya zama tsoho ko ba daidai ba, don haka ku tabbatar da kowace makaranta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bayanin ɗan wasanku da bidiyon bajinta",
          minutes: 6,
          goal: "Yi bayanin ɗan wasa na shafi ɗaya da shirin bidiyon bajinta na minti biyu zuwa huɗu.",
          text: [
            "Bayanin ɗan wasa (recruiting profile) shafi ɗaya ne: suna, shekarar kammala karatu, matsayi, tsayi da nauyi (na gaskiya), makarantar sakandare da ƙungiyar kulob, muhimman alƙaluma, bayanan karatu (GPA, sakamakon jarabawa idan kuna da shi, fannin da kuke son karantawa), kyaututtuka, lambobin kociyoyinku, hanyar haɗin bidiyonku, da imel ɗinku.",
            "Bidiyon bajinta (highlight video) ya kamata ya zama gajere, sau da yawa minti biyu zuwa huɗu, da mafi kyawun hotunanku a daƙiƙa 30 na farko. Ku nuna kanku kafin kowane hoto da kibiya ko da'ira. Ku ƙara hanyar haɗin cikakken wasa idan kociyoyin wasanku suna son ganin ɗaya. Ku tambayi kocinku abin da kociyoyin wasanku ke tsammani.",
            "AI zai iya taimaka muku rubuta bayanin daga bayananku da tsara jerin hotunanku. Kowane alƙalami dole ya zama gaskiya kuma mai yiwuwa a tabbatar; kociyoyi suna tambayar kociyoyinku. Ku bar bayanan sirri kamar adireshin gida daga bayanin."
          ],
          steps: ["Ku tattara alƙaluma, maki da kyaututtukanku na gaskiya.", "Ku nemi AI ya tsara bayanin ɗan wasa na shafi ɗaya.", "Ku zaɓi mafi kyawun hotunanku ku sa na sama a farko.", "Ku nuna kanku kafin kowane hoto.", "Ku nemi kocinku ya duba dukansu biyu."],
          words: [["Bayanin ɗan wasa (recruiting profile)", "taƙaitaccen bayani na shafi ɗaya game da ku a matsayin ɗan wasa da ɗalibi, don kociyoyin jami'a."], ["Bidiyon bajinta (highlight video)", "gajeren bidiyo na mafi kyawun wasanninku."]],
          slides: [
            { title: "Bayani na shafi ɗaya", bullets: ["Shekarar kammalawa, matsayi, girma na gaskiya", "Alƙaluma, GPA, fannin karatu", "Lambobin koci, hanyar haɗin bidiyo, imel ɗinku"] },
            { title: "Bidiyon bajinta", bullets: ["Sau da yawa minti 2-4", "Mafi kyawun hotuna a daƙiƙa 30 na farko", "Ku nuna kanku kafin kowane hoto"] },
            { title: "Gaskiya da tsaro", bullets: ["Kociyoyi suna tabbatar da alƙaluma", "Babu adireshin gida", "Koci ya duba shi"] }
          ],
          tryIt: "Ku yi amfani da AI don mayar da bayananku zuwa bayanin ɗan wasa na shafi ɗaya. Ku rubuta jerin hotunanku da mafi kyau biyar a farko, ku nemi kocinku ya duba dukansu biyu.",
          youCanNow: "ƙirƙirar bayanin ɗan wasa na gaskiya da shirin bidiyon bajinta mai ƙarfi.",
          quickCheck: [
            { objective: "O3", q: "Me yasa za ku nuna kanku kafin kowane hoto?", options: ["Don kociyoyi su san wane ɗan wasa ne ku", "Don bidiyon ya yi tsawo", "Don ɓoye lambar rigarku", "Domin kiɗa yana buƙatar haka"], answer: 0, why: "Kibiya ko da'ira tana taimaka wa kociyoyi su gane ku nan take." },
            { objective: "O3", q: "Lokacin gudun yadi 40 da kuka rubuta ya fi sauri fiye da yadda kuka taɓa gudu. Me za ku yi?", options: ["Ku bar shi; kociyoyi ba za su duba ba", "Ku cire alƙalamin gaba ɗaya", "Ku canja shi zuwa lokacinku na gaskiya da za a iya tabbatarwa", "Ku ƙara rage shi kaɗan"], answer: 2, why: "Kowane alƙalami dole ya zama gaskiya; kociyoyi suna tambayar kociyoyinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shirin neman gurbin wasa a jami'a",
        questions: [
          { objective: "O1", q: "Kuna shirin yin wasa a NCAA Division I. A ina za ku yi rajistar cancanta?", options: ["Manhajar sada zumunta", "Wurin motsa jikinku", "NCAA Eligibility Center", "Babu inda"], answer: 2, why: "'Yan wasan DI da DII suna buƙatar asusun certification a Eligibility Center." },
          { objective: "O1", q: "A ina ya kamata ku duba lokacin da kociyoyi za su iya tuntuɓar ku?", options: ["ncaa.org da kocin makarantarku ko mai ba ku shawara", "Shirin hira na AI kaɗai", "Rubutun da ya yi shekara 5", "Abokin hamayya"], answer: 0, why: "Ƙa'idoji sun dogara da wasa da mataki, kuma suna canjawa sau da yawa." },
          { objective: "O2", q: "Jerin makarantu mai daidaito ya ƙunshi:", options: ["Manyan shirye-shirye 5 kaɗai", "Makaranta ɗaya kaɗai", "Makarantun da ba ku duba ba", "Makarantun reach, target da likely"], answer: 3, why: "Haɗuwar iri uku tana ba ku zaɓuɓɓuka na gaske." },
          { objective: "O2", q: "AI ya ba da shawarar makarantar da aka soke ƙungiyarta. Me ya faru ba daidai ba?", options: ["Babu komai", "Jerin AI na iya zama tsoho; ku tabbatar a shafukan hukuma", "Makarantar tana ɓoye shi", "Ku nema duk da haka"], answer: 1, why: "Koyaushe ku duba shafukan hukuma." },
          { objective: "O3", q: "A ina ya kamata mafi kyawun hotunanku su kasance a bidiyon bajinta?", options: ["A ƙarshe gaba ɗaya", "A daƙiƙa 30 na farko", "A tsakiya", "A ɓoye"], answer: 1, why: "Kociyoyi suna yanke shawara da sauri." }
        ]
      }
    },
    {
      name: "Babi na 2: Tuntuɓar kociyoyi da kasancewa cikin tsari",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta imel na musamman ga kociyoyi da AI",
          minutes: 6,
          goal: "Rubuta gajeren imel na musamman na gabatar da kanku ga kocin jami'a.",
          text: [
            "Kociyoyi suna samun imel da yawa. Gajere kuma na musamman shi ke nasara. Ku haɗa: taken imel (subject line) da shekarar kammalawa, matsayi da muhimman bayanai (\"2027 Midfielder | 3.5 GPA | Metro FC Club Team\"); dalilin da yasa kuke sha'awar makarantarsu musamman; muhimman alƙalumanku da karatunku; hanyar haɗin bidiyonku da bayaninku; jadawalinku na gaba (gasanni, showcases); da lambar kocinku.",
            "Ku tambayi mataimakin AI: \"Ka rubuta gajeren imel ga babban kocin ƙwallon ƙafa a [makaranta]. Ka yi amfani da bayanin ɗan wasana da ke ƙasa. Ka ambaci cewa ina sha'awar shirinsu na aikin jinya da salon wasansu na riƙe ƙwallo. Ƙasa da kalmomi 150.\" Sannan ku mayar da shi naku, ku duba kowane bayani.",
            "Ku aika daga imel mai mutunci da kuke dubawa kowace rana. Kada ku taɓa aika imel ɗaya daidai ga kowace makaranta; kociyoyi suna gane haka. Ku ne za ku aika, ba iyayenku ba, kuma ku sake rubutawa cikin ladabi bayan kamar makonni biyu da sabon bayani, kamar sabon bidiyon bajinta."
          ],
          steps: ["Ku rubuta taken imel a sarari.", "Ku nemi AI ya rubuta daftari ƙasa da kalmomi 150 ta amfani da bayanin ɗan wasanku.", "Ku ƙara dalili ɗaya na gaskiya na musamman ga waccan makarantar.", "Ku duba kowane bayani da sunan kocin.", "Ku aika daga imel ɗinku mai mutunci; ku sake rubutawa da sabon bayani."],
          words: [["Taken imel (subject line)", "gajeren sunan imel; abu na farko da koci yake gani."], ["Showcase", "taron da 'yan wasa ke yin wasa a gaban kociyoyin jami'a."]],
          slides: [
            { title: "Gajere kuma na musamman", bullets: ["Take: shekarar kammalawa, matsayi, muhimman bayanai", "Dalilin wannan makarantar, musamman", "Alƙaluma, karatu, hanyar haɗin bidiyo"] },
            { title: "AI yana rubuta daftari, ku kuke mayar da shi naku", bullets: ["Ƙasa da kalmomi 150", "Dalili ɗaya na gaskiya ga waccan makarantar", "Ku duba sunan kocin"] },
            { title: "Ku aika shi yadda ya dace", bullets: ["Imel mai mutunci, ana duba shi kowace rana", "Ku ne ke aikawa, ba iyayenku ba", "Ku sake rubutawa da sabon bayani"] }
          ],
          tryIt: "Ku rubuta imel ga kociyoyi uku a jerinku da taimakon AI. Ku sa kowanne ya zama na musamman, ku nemi kocinku ko mahaifinku ko mahaifiyarku su karanta ɗaya kafin ku aika.",
          youCanNow: "rubuta gajeren imel na musamman ga kocin jami'a.",
          quickCheck: [
            { objective: "O4", q: "Me ya kamata taken imel ga koci ya ƙunsa?", options: ["\"Sannu koci\"", "Shekarar kammalawa, matsayi da muhimman bayanai", "Sunayen iyayenku", "\"Don Allah ka karanta\""], answer: 1, why: "Take a sarari mai shekarar kammalawa, matsayi da muhimman bayanai yana jan hankali." },
            { objective: "O4", q: "Makonni biyu bayan imel ɗinku, babu amsa. Me za ku yi?", options: ["Ku sake aika imel ɗin iri ɗaya", "Ku sa iyayenku su kira kocin", "Ku haƙura da waccan makarantar", "Ku sake rubutawa cikin ladabi da sabon bayani, kamar sabon bidiyon bajinta"], answer: 3, why: "Ku sake rubutawa cikin ladabi bayan kamar makonni biyu da wani sabon abu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Bibiyar neman gurbin wasa kamar shiri (project)",
          minutes: 5,
          goal: "Bibiyi kowace tuntuɓa da mataki na gaba a sheet ɗinku.",
          text: [
            "Ku ƙara ginshiƙan bibiya a jerin makarantunku: Ranar tuntuɓa, Amsa (eh/a'a), Abin da suka faɗa, Mataki na gaba, Ranar mataki na gaba. Ku sabunta shi kowane mako.",
            "Ku lura da alamun sha'awa ta gaske: amsoshi na musamman, tambayoyi game da makinku, gayyata zuwa sansanin horo (camp) ko ziyara, ko koci da ya zo kallon wasanku. Tallar sansani ta gama-gari ba ɗaya take da sha'awa ta musamman ba.",
            "Neman gurbin wasa na iya sa damuwa. Ku sa karatu da horo a farko. Ku yi hankali da \"recruiting services\" (kamfanonin talla na 'yan wasa) da ke ba da tabbacin tallafin karatu (scholarship) idan aka biya su; ku tambayi kocin makarantarku da mai ba ku shawara kafin ku biya kowa."
          ],
          steps: ["Ku ƙara ginshiƙan bibiya a sheet ɗinku.", "Ku rubuta kowane imel, amsa da kira.", "Ku rubuta mataki na gaba da ranarsa.", "Ku sabunta kowane mako.", "Ku duba duk wani kamfanin da ake biya da kocinku tukuna."],
          words: [["Sake rubutawa (follow-up)", "saƙo na gaba mai ladabi da sabon bayani."], ["Recruiting service", "kamfanin da ke karɓar kuɗi don tallata ku ga jami'o'i."]],
          slides: [
            { title: "Ku bibiyi komai", bullets: ["Ranar tuntuɓa, amsa, abin da suka faɗa", "Mataki na gaba da ranarsa", "Ku sabunta kowane mako"] },
            { title: "Sha'awa ta gaske", bullets: ["Amsoshi na musamman", "Tambayoyi game da maki", "Gayyatar sansani ko ziyara"] },
            { title: "Ku kasance cikin daidaito", bullets: ["Karatu da horo a farko", "Kada ku biya tabbacin tallafin karatu", "Ku tambayi kocinku tukuna"] }
          ],
          tryIt: "Ku ƙara ginshiƙan bibiya a sheet ɗinku ku rubuta imel ɗinku uku, tare da mataki na gaba da rana ga kowanne.",
          youCanNow: "bibiyar tuntuɓar neman gurbin wasa da matakai na gaba kamar shiri.",
          quickCheck: [
            { objective: "O5", q: "Wane ginshiƙin bibiya ne ke taimaka muku tuna abin da za ku yi?", options: ["Mataki na gaba da ranar mataki na gaba", "Launin da kuka fi so", "Alamar ƙungiya (mascot)", "Sakamakon ƙungiya"], answer: 0, why: "Mataki na gaba da ranarsa suna sa neman gurbinku ya ci gaba." },
            { objective: "O5", q: "Kun sami tallar sansani ta gama-gari daga wata jami'a. Me hakan ke nufi?", options: ["Kun sami tallafin karatu", "Ba ɗaya take da sha'awa ta musamman ba", "Dole ne ku halarta", "Kocin ya ga bidiyonku"], answer: 1, why: "Amsoshi da tambayoyi na musamman suna nuna sha'awa ta gaske; talla ta gama-gari ba ta nuna haka." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ga kociyoyi: bayanan scouting cikin adalci da tsari",
          minutes: 5,
          goal: "Tsara bayanan scouting kan 'yan wasan da ake nema cikin adalci da daidaito.",
          text: [
            "Kociyoyin da ke neman 'yan wasa da ba da shawararsu za su iya amfani da kayan aiki iri ɗaya. Ku yi sheet mai ma'auni iri ɗaya ga kowane ɗan wasa: ƙwarewar matsayi, ƙarfin jiki da sauri, fahimtar wasa, karɓar koyarwa (coachability), karatu da bayanan hali daga majiyoyin da aka tabbatar.",
            "Ku yi amfani da sikelin 1 zuwa 5 mai sauƙi tare da rubutaccen bayani ga kowace lamba, don maki su kasance da ma'ana ɗaya ga duk masu tantancewa. AI zai iya taƙaita rubutattun bayananku zuwa gajeren rahoto, amma ku tabbata maki sun fito daga abin da kuka gani, ba hasashen AI ba.",
            "Ku kiyaye sirrin 'yan wasan da ake nema: da yawa yara ne ƙanana. Ku ajiye bayanai a wuraren sirri da aka amince da su, kada ku sa bayanan sirri a kayan AI, ku bi ƙa'idojin ɗaukar 'yan wasa na ƙungiyarku, kuma ku lura da son zuciya, kamar yin hukunci da girman jiki kaɗai ko da ingancin bidiyo maimakon ƙwarewa."
          ],
          steps: ["Ku yi amfani da ma'auni iri ɗaya ga kowane ɗan wasa.", "Ku bayyana kowace lamba a sikelin 1-5.", "Ku rubuta bayanai daga abin da kuka gani.", "Ku yi amfani da AI don taƙaita bayanai, ba don ba da maki ba.", "Ku kiyaye bayanai a sirri; ku duba son zuciya."],
          words: [["Rubric (ma'aunin maki)", "jagorar ba da maki da ke bayanin ma'anar kowane maki."], ["Coachability (karɓar koyarwa)", "yadda ɗan wasa ke saurara da amfani da shawara."]],
          slides: [
            { title: "Ma'auni iri ɗaya ga kowa", bullets: ["Ƙwarewa, ƙarfin jiki, fahimtar wasa", "Karɓar koyarwa, karatu, hali"] },
            { title: "Rubric 1-5 a sarari", bullets: ["Ku bayyana kowace lamba", "Maki daga abin da kuka gani", "AI yana taƙaitawa, ba ya ba da maki"] },
            { title: "Adalci da sirri", bullets: ["Da yawa daga cikinsu yara ne ƙanana", "Babu bayanan sirri a AI", "Ku lura da son zuciya"] }
          ],
          tryIt: "Aikin ƙarshe: 'yan wasa, ku kammala sheet ɗinku na makarantu 15, bayanin ɗan wasa, shirin bidiyon bajinta da imel uku ga kociyoyi, tare da bayani kan asusun cancantarku da inda kuka duba ƙa'idoji. Kociyoyi: ku gina rubric na 1-5 mai bayani don ma'auni biyar.",
          youCanNow: "tsara aikin neman gurbin wasa ko scouting a sarari, da gaskiya, kuma cikin adalci.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku rubuta bayani ga kowace lamba a sikelin 1 zuwa 5?", options: ["Don maki su kasance da ma'ana ɗaya ga duk masu tantancewa", "Don sheet ɗin ya yi tsawo", "Don AI ya ba 'yan wasa maki", "Don jera 'yan wasa bisa tsayi"], answer: 0, why: "Lambobin da aka bayyana suna sa maki su zama iri ɗaya tsakanin kociyoyi." },
            { objective: "O6", q: "Wani ɗan wasa gajere ne amma yana wasa da hikima kuma yana cin kowace fafatawa. Yaya za ku ba da makin fahimtar wasa?", options: ["Ƙasa, saboda tsayi", "Ku tsallake ɗan wasan", "Bisa abin da kuka gani, ba girman jiki ba", "Bisa ingancin bidiyo"], answer: 2, why: "Yin hukunci da girman jiki kaɗai wani nau'in son zuciya ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tuntuɓar kociyoyi da kasancewa cikin tsari",
        questions: [
          { objective: "O4", q: "Wane taken imel ne ya fi kyau ga imel zuwa koci?", options: ["\"Sannu\"", "\"Don Allah ka karanta!!!\"", "Babu komai", "\"2027 Midfielder | 3.5 GPA | Metro FC Club Team\""], answer: 3, why: "Yana ba da muhimman bayanai a kallo ɗaya." },
          { objective: "O4", q: "Wa ya kamata ya aika imel ga kociyoyin jami'a?", options: ["Ɗan wasan da kansa", "Iyaye kaɗai", "Baƙo", "Shirin AI kai tsaye"], answer: 0, why: "Kociyoyi suna son ji daga ɗan wasan." },
          { objective: "O5", q: "Wanne ne alamar sha'awa ta gaske?", options: ["Tallar sansani da aka tura wa kowa", "Like a kafar sada zumunta", "Amsa ta musamman da ke tambaya game da makinku", "Babu komai"], answer: 2, why: "Tambayoyi na musamman suna nuna sha'awa ta gaske." },
          { objective: "O5", q: "Wani kamfani yana ba da tabbacin tallafin karatu idan an biya shi. Ya kamata ku:", options: ["Biya nan take", "Ba su kalmar sirrinku", "Sa hannu ba tare da karantawa ba", "Tambayi kocin makarantarku da mai ba ku shawara tukuna"], answer: 3, why: "Babu wanda zai iya ba da tabbacin tallafin karatu." },
          { objective: "O6", q: "Ga kociyoyi, ya kamata a yi amfani da AI don:", options: ["Ba da maki ga 'yan wasan da bai gani ba", "Taƙaita rubutattun bayanai, ba don ƙirƙirar maki ba", "Ajiye bayanan sirri na yara ƙanana", "Maye gurbin tantancewa"], answer: 1, why: "Maki suna fitowa daga abin da kocin ya gani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI a Neman Ƙwararru da Ɗaukar 'Yan Wasa",
    questions: [
      { objective: "O1", q: "Wanne ne ƙungiyar wasannin jami'a?", options: ["NFL", "Kamfanin takalma", "NAIA", "Manhajar sada zumunta"], answer: 2, why: "NAIA ƙungiyar wasannin jami'a ce." },
      { objective: "O1", q: "NCAA Eligibility Center tana duba:", options: ["Karatu da matsayin amateur", "Yawan mabiyanku", "Tsayinku kaɗai", "Irin kiɗan da kuke so"], answer: 0, why: "Tana tabbatar da cancanta." },
      { objective: "O1", q: "Ƙananan ɗalibai da 'yan wasan DIII za su iya farawa da:", options: ["Profile Page", "Babu komai", "Kamfanin da ake biya", "Gwajin shiga ƙungiya (tryout)"], answer: 0, why: "Eligibility Center tana bayanin Profile Page gare su." },
      { objective: "O1", q: "Ƙa'idojin tuntuɓar 'yan wasa sun dogara da:", options: ["Girman takalminku", "Yanayi", "Wasa da mataki", "Ƙungiyar da kuka fi so"], answer: 2, why: "Ƙa'idoji sun bambanta bisa wasa da mataki." },
      { objective: "O1", q: "Wa ke taimaka muku kula da muhimman darussa (core courses)?", options: ["Abokin hamayya", "Mai ba ku shawara na makaranta", "Shahararren mutum a intanet (influencer)", "Babu kowa"], answer: 1, why: "Masu ba da shawara sun san buƙatun karatu." },
      { objective: "O2", q: "Makarantar \"reach\" ita ce:", options: ["Tabbatacciya", "Wadda aka rufe", "Ƙaramar sakandare", "Mai wuya a gare ku, sai kun miƙe sosai"], answer: 3, why: "Makarantun reach sun fi wuyar shiga ko samun gurbin wasa." },
      { objective: "O2", q: "A ina za ku samo imel na gaskiya na koci?", options: ["Hasashe", "AI", "Shafin wasanni na hukuma na makarantar", "Shafin magoya baya"], answer: 2, why: "Shafukan hukuma suna da sabbin bayanai." },
      { objective: "O2", q: "Me yasa za ku duba roster?", options: ["Don kwafe bayanansu", "Don aika wa 'yan wasa saƙo", "Ba shi da amfani", "Don ganin wanda zai kammala karatu a matsayinku"], answer: 3, why: "Buƙatun ƙungiya suna shafar damarku." },
      { objective: "O3", q: "Tsayi da nauyi a bayanin ɗan wasanku ya kamata su zama:", options: ["Na gaskiya", "An ƙara su sosai", "A bar su koyaushe", "Hasashe"], answer: 0, why: "Kociyoyi suna tabbatarwa." },
      { objective: "O3", q: "Bidiyon bajinta sau da yawa yana da:", options: ["Minti 30", "Minti 2-4", "Daƙiƙa 5", "Awa biyu"], answer: 1, why: "Gajere kuma mai mayar da hankali ya fi aiki." },
      { objective: "O3", q: "Kafin kowane hoto, ya kamata ku:", options: ["Ƙara kiɗa mai ƙara kaɗai", "Nuna 'yan kallo", "Nuna kanku da kibiya ko da'ira", "Tsallake shi"], answer: 2, why: "Kociyoyi suna buƙatar sanin wane ɗan wasa ne ku." },
      { objective: "O3", q: "Wanne ne BAI kamata ya kasance a bayanin ɗan wasanku ba?", options: ["Adireshin gidanku", "Shekarar kammala karatunku", "Hanyar haɗin bidiyonku", "Lambar kocinku"], answer: 0, why: "Ku bar bayanan sirri." },
      { objective: "O4", q: "Imel mai kyau ga koci ya kamata ya zama ƙasa da kusan:", options: ["Kalmomi 1,000", "Kalmomi 5", "Babu iyaka", "Kalmomi 150"], answer: 3, why: "Gajerun imel ake karantawa." },
      { objective: "O4", q: "Aika imel iri ɗaya ga kowace makaranta:", options: ["Shi ya fi kyau", "Kociyoyi suna gane haka; ku sa kowanne ya zama na musamman", "Dole ne", "Yana kawo ƙarin amsoshi"], answer: 1, why: "Imel na musamman suna fitowa fili." },
      { objective: "O4", q: "Saƙon sake rubutawa (follow-up) ya kamata ya ƙunshi:", options: ["Imel ɗin iri ɗaya kuma", "Sabon bayani, kamar sabon bidiyon bajinta", "Ƙorafi", "Babu komai"], answer: 1, why: "Sabon bayani yana ba da dalilin amsawa." },
      { objective: "O4", q: "Showcase shi ne:", options: ["Akwatin kofuna", "Shago", "Shirin talabijin", "Taron da 'yan wasa ke yin wasa a gaban kociyoyi"], answer: 3, why: "Showcases suna taimaka wa kociyoyi su gan ku." },
      { objective: "O5", q: "Sau nawa ya kamata ku sabunta sheet ɗinku na neman gurbin wasa?", options: ["Kowane mako", "Sau ɗaya a shekara", "Ba sau ɗaya ba", "Bayan sa hannu kaɗai"], answer: 0, why: "Kowane mako yana sa matakai na gaba su kasance a kan lokaci." },
      { objective: "O5", q: "Me ke zuwa farko lokacin neman gurbin wasa?", options: ["Kafar sada zumunta", "Kamfanonin da ake biya", "Karatu da horo", "Jita-jita"], answer: 2, why: "Maki da wasa su ne mafi muhimmanci." },
      { objective: "O6", q: "Rubric shi ne:", options: ["Wani nau'in atisaye", "Takalmi", "Kofi", "Jagorar ba da maki da ke bayanin kowane maki"], answer: 3, why: "Yana sa maki su zama iri ɗaya." },
      { objective: "O6", q: "Yin hukunci kan 'yan wasa da ingancin bidiyo maimakon ƙwarewa:", options: ["Adalci ne", "Wani nau'in son zuciya ne", "Dole ne", "Hanya mafi kyau ce"], answer: 1, why: "Scouting na adalci yana duba ƙwarewa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
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
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Bayani kan cancanta da ƙa'idoji",
        objective: "O1",
        notYet: "Ba a ambaci asusun cancanta ba, ko an ɗauki ƙa'idoji daga AI ko tsofaffin rubuce-rubuce.",
        meets: "Ya ambaci asusun cancanta da ake buƙata da majiyar hukuma inda aka duba ƙa'idojin ɗaukar 'yan wasa.",
        exceeds: "Ya haɗa da duba muhimman darussa da maki da aka yi tare da mai ba da shawara."
      },
      {
        name: "Jerin makarantu",
        objective: "O2",
        notYet: "Makarantu ƙasa da 15, babu haɗin reach, target da likely, ko bayanan da ba a duba ba.",
        meets: "Makarantu 15 da dukkan ginshiƙai, da alamar reach, target ko likely, an duba su a shafukan hukuma.",
        exceeds: "Ya rubuta buƙatun ƙungiya a matsayin ɗan wasan da kuɗin kowace makaranta."
      },
      {
        name: "Bayanin ɗan wasa da bidiyon bajinta",
        objective: "O3",
        notYet: "Alƙaluma marasa gaskiya, bayanan sirri, ko mafi kyawun hotuna a ɓoye a ƙarshen bidiyo.",
        meets: "Bayanin ɗan wasa na gaskiya na shafi ɗaya da bidiyo na minti 2 zuwa 4 da mafi kyawun hotuna a farko kuma an nuna ɗan wasan, koci ya duba.",
        exceeds: "Ya ƙara hanyar haɗin cikakken wasa idan kociyoyin wasan suna tsammani, kuma yana sabunta bayanin."
      },
      {
        name: "Imel ga kociyoyi",
        objective: "O4",
        notYet: "Na gama-gari, masu tsawo, ko iyaye ne suka aika.",
        meets: "Imel uku na musamman ƙasa da kalmomi 150 da taken imel a sarari da dalili na gaskiya ga kowace makaranta, ɗan wasan ne ya aika.",
        exceeds: "Kowanne yana da jadawalin gaba da lambar koci, kuma an rubuta ranakun sake rubutawa."
      },
      {
        name: "Bibiya",
        objective: "O5",
        notYet: "Babu ginshiƙan bibiya ko matakai na gaba.",
        meets: "An rubuta kowace tuntuɓa da amsa, mataki na gaba da rana.",
        exceeds: "An sabunta kowane mako har tsawon wata ɗaya, kuma an rubuta alamun sha'awa ta gaske."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala tsarin neman gurbin wasa kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Masu koyo da suka buɗe asusun cancanta da ya dace (binciken biyo baya)",
      "Masu koyo da suka ce sun sami amsoshi na musamman, ko gayyatar sansani ko ziyara daga kociyoyin jami'a",
      "Masu koyo da suka amince da shiga shirin wasa na jami'a, da waɗanda suka ce sun guje wa kamfanin da ake biya da ya ba da tabbacin sakamako"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Asusun Google kyauta don Google Sheets",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Bidiyon wasa da shirin gyaran bidiyo kyauta",
      "Takardar sakamakon karatunku (transcript), alƙalumanku na gaskiya da lambobin kociyoyinku",
      "Kusan minti 60 na darussa, da ƙarin lokaci don gina bayanin ɗan wasa da bidiyo"
    ],
    facilitatorNotes: [
      "Ku gayyaci mai ba da shawara na makaranta ya bayyana muhimman darussa da asusun cancanta; kada ku yanke hukuncin cancanta da kanku.",
      "Ku sa masu koyo su duba ƙa'idojin tuntuɓar 'yan wasa a ncaa.org ko shafin NAIA a lokacin zaman; ƙa'idoji suna canjawa sau da yawa.",
      "Ku sa iyaye ko masu kula su shiga, amma ku tabbata 'yan wasa ne ke rubutawa da aika imel ɗinsu ga kociyoyi.",
      "Ku gargaɗi iyalai game da kamfanonin da ake biya da ke ba da tabbacin tallafin karatu, ku sa su tambayi koci ko mai ba da shawara kafin su biya.",
      "Ga kociyoyin da ke amfani da Darasi na 6, ku kiyaye bayanan 'yan wasa a sirri, ku yi amfani da ma'auni iri ɗaya ga kowa, kuma ku duba maki don son zuciya."
    ]
  }
};
