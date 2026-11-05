"use strict";

// Koach Learn course, Hausa (ha) translation of re-entry/reentry-family-ties.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "reentry-family-ties-ha",
  lang: "ha",
  translationOf: "reentry-family-ties",
  category: "Re-Entry",
  name: "Sake Gina Dangantaka da Iyali da Al'umma",
  skills: "Shirya tuntuɓa ta farko, Sake haɗuwa da 'ya'yanku, Neman sake duba kuɗin kula da yara, Saurare da neman gafara, Nemo masu ba da shawara (mentor) da ƙungiyoyin al'umma, Sanya iyakoki masu kyau",
  outcome: "yin shirin sake haɗuwa da iyali da 'ya'ya, ɗaukar mataki na farko kan kuɗin kula da yara (child support) idan ya shafe ku, nemo masu ba da shawara da taimakon al'umma, da sanya iyakoki da ke kare ci gabanku.",
  about: [
    "Dawowa gida ba aiki da wurin zama kaɗai ba ne. Mutanen da ke kewaye da ku suna da muhimmanci haka nan. Iyali, 'ya'ya, abokai, masu ba da shawara da ƙungiyoyin al'umma za su iya taimaka muku ku tsaya kan hanya, kuma sake gina waɗannan dangantaka fasaha ce da za ku iya koyo.",
    "A wannan kwas za ku shirya tuntuɓa ta farko, ku koyi yadda ake sake haɗuwa da 'ya'yanku a yadda suke so, ku nemi sake duba kuɗin kula da yara idan odar ba ta dace da kuɗin shigarku ba, ku gwada saurare da neman gafara, ku nemo masu ba da shawara da ƙungiyoyin al'umma, ku kuma sanya iyakoki masu kyau. Za ku kuma yi jerin masu taimako da ke da layin 988 Suicide and Crisis Lifeline (layin taimako na rikici).",
    "Kowane iyali daban yake. Wasu za su karɓe ku da sauri, wasu suna buƙatar lokaci, kuma wasu tuntuɓa ba za ta zama lafiya ba ko ba a yarda da ita ba. Koyaushe ku bi umarnin kotu, kuma ku tambayi mai ba da shawara, lauyan taimako kyauta (legal aid) ko jami'in parole ko probation ɗinku idan ba ku tabbata ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin da za ku yi nan take. Akwai gwajin ilimi bayan kowane babi da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta shirin sake haɗuwa da taimako mai shafi ɗaya: ɗan iyali na farko da za ku tuntuɓa da saƙonku na farko gare shi, mataki ɗaya kan renon yara ko kuɗin kula da yara idan ya shafe ku, taimakon al'umma biyu (mai ba da shawara, ƙungiya ko al'ummar addini), iyakoki biyu da za ku kiyaye, da jerin mutane da lambobin da za ku kira, har da 988.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari (re-entry) da ke son sake haɗuwa da iyali, 'ya'ya, abokai da al'umma. Wasu iyaye ne masu odar kuɗin kula da yara; wasu suna da umarnin kotu da ke iyakance tuntuɓa.",
    startingPoint: "Sun san mutanen da suke son tuntuɓa, kuma wataƙila suna ɗan magana da su ta waya ko wasiƙa. Da yawa ba su san yadda za su fara ba, suna tsoron ƙi, kuma ba su san yadda sake duba kuɗin kula da yara, shirin mai ba da shawara ko ƙungiyoyin taimako ke aiki ba.",
    gap: "Ƙarfafan dangantaka da iyali da al'umma suna taimaka wa mutane su tsaya kan hanya bayan an sake su, amma tuntuɓa ta farko da aka yi da gaggawa ko ba tare da shiri ba tana iya ɓata dangantaka, kuma kuɗin kula da yara da aka ƙyale yana iya zama babban bashi. Masu koyo suna buƙatar shirin sake haɗuwa a yadda wasu ke so, sake gina amincewa, nemo taimako da kare ci gabansu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: waya mai sauƙi ko wayar zamani; takarda da alƙalami ma suna aiki",
      "Lokaci: darussa na kusan minti 5 da suka dace da aiki da ganawa",
      "Umarnin kotu, umarnin hana tuntuɓa da sharuɗɗan parole ko probation koyaushe su ne farko",
      "Batutuwa masu taɓa zuciya: masu koyo suna faɗin abin da suka zaɓa kawai, kuma 988 yana kan kowane jerin masu taimako"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku mutanen da kuke son sake haɗuwa da su", action: "zaɓar wanda za ku fara tuntuɓa da rubuta gajeren saƙo na farko mai ladabi", standard: "ba tare da neman kuɗi, zargi ko matsi ba, kuma kuna bin kowane umarnin kotu" },
    { id: "O2", condition: "Idan akwai ɗa ko 'ya da kuke son sake haɗuwa da shi", action: "shirya ziyara ko kira na farko da ke sa buƙatun yaron a gaba", standard: "tare da tambayoyi ga mai kula da yaron da ƙaramin alkawari ɗaya da za ku iya cikawa" },
    { id: "O3", condition: "Idan odar kuɗin kula da yara ba ta dace da kuɗin shigarku ba", action: "neman ofishin kuɗin kula da yara ya sake duba odar", standard: "tare da lambar ofishin, takardun da ake buƙata da ranar da za ku tuntuɓe su" },
    { id: "O4", condition: "Idan kuna cikin tattaunawa mai wuya", action: "amfani da saurare, maganar \"Ni\" (I-statement) da neman gafara mai sassa uku", standard: "ba tare da \"amma\" a cikin neman gafarar ba, kuma ba tare da neman a yafe muku ba" },
    { id: "O5", condition: "Ta amfani da 211, mai kula da shari'arku (case manager) ko ƙungiyoyin yankinku", action: "nemo mai ba da shawara da ƙungiyar al'umma ɗaya, da neman mai ba da shawarar ya ɗauki takamaiman alkawari", standard: "tare da hanyar tuntuɓar kowanne da ainihin kalmomin buƙatarku" },
    { id: "O6", condition: "Idan akwai mutane ko yanayi da za su iya mayar da ku baya", action: "sanya iyakoki masu kyau biyu da rubuta jerin masu taimako da ke da 988", standard: "tare da ajiye jerin a wayarku da kuma a takarda" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sake haɗuwa da iyali da 'ya'ya",
      lessons: [
        {
          objectives: ["O1"],
          title: "Shirya tuntuɓarku ta farko",
          minutes: 5,
          goal: "Zaɓi wanda za ku fara tuntuɓa, ku rubuta gajeren saƙo na farko mai ladabi.",
          text: [
            "Lokacin da ba ku nan, rayuwar iyalinku ta ci gaba. Yara sun girma, mutane sun ƙaura, wasu dangantaka sun ƙarfafa, wasu kuma sun ji rauni. Sake haɗuwa ya fi kyau idan kun shirya shi, maimakon ku bayyana ba tare da sanarwa ba.",
            "Ku fara da rubuta jerin mutanen da kuke son su dawo cikin rayuwarku. Kusa da kowane suna, ku rubuta yadda abubuwa suka kasance lokacin da kuka tafi, da ko akwai wani umarnin kotu, kamar umarnin hana tuntuɓa ko na riƙon yara. Ku bi kowane umarni. Idan ba ku tabbata ba, ku tambayi jami'in parole ko probation ɗinku ko lauyan taimako kyauta.",
            "Ku zaɓi mutum ɗaya da wataƙila zai karɓe ku, ku fara kaɗan: wasiƙa, saƙon tes ko gajeren kira. Ku faɗi cewa kun dawo gida, kuna son sake haɗuwa, kuma ku bar shi ya zaɓi saurin abin. Kada ku nemi kuɗi ko wurin zama a saƙon farko.",
            "Ku yi tsammanin jin daɗi da baƙin ciki a haɗe, har da naku. Idan wani bai shirya ba, ku gode masa ku bar ƙofa a buɗe. Wannan ba ƙarshe ba ne; farko ne."
          ],
          steps: ["Ku rubuta jerin mutanen da kuke son sake haɗuwa da su.", "Ku rubuta yadda abubuwa suka kasance da kowane umarnin kotu; ku bi kowane umarni.", "Ku zaɓi mutum ɗaya da wataƙila zai karɓe ku.", "Ku rubuta gajeren saƙo: kun dawo gida, kuna son sake haɗuwa, shi ne zai zaɓi saurin abin.", "Ku aika, sannan ku ba shi lokaci ya amsa."],
          words: [["Umarnin hana tuntuɓa (no-contact order)", "umarnin kotu da ke cewa ba za ku tuntuɓi wani mutum ba."], ["Umarnin riƙon yara (custody order)", "umarnin kotu game da wanda yara ke zama tare da shi da wanda ke yanke musu shawarwari."], ["Sauri (pace)", "yadda wani abu ke faruwa da sauri ko a hankali."]],
          slides: [
            { title: "Ku shirya, kada ku ba da mamaki", bullets: ["Rayuwar iyali ta ci gaba lokacin da ba ku nan", "Tuntuɓa ta farko da aka shirya ta fi kyau"] },
            { title: "Ku rubuta jerinku", bullets: ["Wanda kuke son ya dawo cikin rayuwarku", "Yadda abubuwa suka kasance", "Kowane umarnin kotu: ku bi su duka"] },
            { title: "Ku fara kaɗan", bullets: ["Wasiƙa, saƙon tes ko gajeren kira", "Ku faɗi cewa kun dawo kuma kuna son sake haɗuwa", "Ku bar shi ya zaɓi saurin abin"] },
            { title: "Idan bai shirya ba", bullets: ["Ku gode masa", "Ku bar ƙofa a buɗe", "Ku sake gwadawa daga baya, a hankali"] }
          ],
          tryIt: "Ku rubuta jerin mutanenku, sannan ku zaɓi mutum ɗaya ku rubuta saƙon farko mai jimloli uku ko huɗu. Ku karanta shi da babbar murya. Ku cire duk abin da ke neman kuɗi, ke zargin wani ko ke matsa masa ya amsa da sauri.",
          youCanNow: "shirya tuntuɓa ta farko, bin kowane umarnin kotu, da rubuta gajeren saƙo mai ladabi da ke bar ɗayan ya zaɓi saurin abin.",
          quickCheck: [
            { objective: "O1", q: "Me ya kamata saƙon farko ga ɗan iyali ya ƙunsa?", options: ["Neman zama a gidansa", "Cewa kun dawo gida kuma kuna son sake haɗuwa", "Jerin kuskuren da ya yi", "Neman amsa yau"], answer: 1, why: "Gajeren saƙo mai ladabi yana buɗe ƙofa ba tare da matsi ba." },
            { objective: "O1", q: "Ɗan'uwanku ya amsa cewa yana buƙatar lokaci kafin ku yi magana. Me za ku yi?", options: ["Ku kira shi kowace rana har ya amsa", "Ku je gidansa", "Ku gode masa ku bar ƙofa a buɗe", "Ku nemi sauran 'yan iyali su matsa masa"], answer: 2, why: "Mutunta saurinsa yana barin ƙofa a buɗe don gaba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sake haɗuwa da 'ya'yanku",
          minutes: 6,
          goal: "Shirya ziyara ko kira na farko da yaronku da ke sa buƙatun yaron a gaba.",
          text: [
            "Yara suna buƙatar abubuwa uku daga iyayen da suka dawo: tsaro, gaskiya da za su iya fahimta, da mahaifi ko mahaifiya da ke zuwa akai-akai. Kasancewa a kowane lokaci ya fi manyan kyautuka ko manyan alkawura muhimmanci.",
            "Ku yi aiki tare da babban mutumin da ke kula da yaronku yanzu. Ku tambaye shi abin da yaron ya sani, abin da yaron ya shirya masa, da lokutan da suka dace. Ku yi magana da ladabi game da ɗayan mahaifin ko mai kula da yaron a gaban yaron, ko da yana da wuya.",
            "Ku faɗi gaskiya da kalmomin da suka dace da shekarun yaron. Ƙaramin yaro zai iya buƙatar kawai: Na yi kuskure, ba na nan, kuma yanzu ina nan. Manyan yara suna iya samun tambayoyi ko fushi. Ku saurara, kada ku yi gardama, kuma kada ku yi alkawuran da ba za ku iya cikawa ba.",
            "Idan kuna buƙatar ziyara ko canji a riƙon yara, shafin taimakon kai (self-help) na kotun jiharku yana bayanin fom-fom ɗin, kuma masu taimakon dokar iyali (family law facilitator) ko lauyan taimako kyauta za su iya taimakawa. Kada ku taɓa ɗaukar yaro ko matsa wa mai kula da shi a wajen umarnin kotu."
          ],
          steps: ["Ku fara magana da mai kula da yaron.", "Ku tambayi abin da yaron ya sani da abin da ya shirya masa.", "Ku shirya gajeriyar ziyara ko kira na farko a lokacin da ya dace da yaron.", "Ku yi amfani da kalmomin gaskiya da suka dace da shekarun yaron.", "Ku cika kowane alkawari, ku fara da ƙanana, kamar kira a lokacin da kuka ce za ku kira."],
          words: [["Mai kula da yaro (caregiver)", "babban mutumin da ke kula da yaro kowace rana."], ["Ziyara (visitation)", "lokacin da mahaifi ko mahaifiya ke yi tare da yaron da ba ya zama tare da shi, sau da yawa kotu ce ke sanya shi."], ["Mai taimakon dokar iyali (family law facilitator)", "mai taimako a kotu da ke bayanin fom-fom na dokar iyali, sau da yawa kyauta."]],
          slides: [
            { title: "Abin da yara ke buƙata", bullets: ["Tsaro", "Gaskiya da za su iya fahimta", "Mahaifi ko mahaifiya da ke zuwa akai-akai"] },
            { title: "Ku yi aiki da mai kula da yaron", bullets: ["Ku tambayi abin da yaron ya sani da abin da ya shirya masa", "Ku amince kan lokuta", "Ku yi magana game da shi da ladabi"] },
            { title: "Kalmomin gaskiya da suka dace da shekaru", bullets: ["Ƙarami: ba na nan, yanzu ina nan", "Babba: ku saurari tambayoyi da fushi", "Babu alkawuran da ba za ku iya cikawa ba"] },
            { title: "Ziyara da riƙon yara", bullets: ["Ku yi amfani da shafin taimakon kai na kotun jiharku", "Ku tambayi mai taimakon dokar iyali ko lauyan taimako kyauta", "Koyaushe ku bi umarnin kotu"] }
          ],
          tryIt: "Ku rubuta tambayoyi uku da za ku yi wa mai kula da yaronku kafin ziyara ko kira na farko, da ƙaramin alkawari ɗaya da kuka san za ku iya cikawa, kamar kira kowace Lahadi ƙarfe 6 na yamma.",
          youCanNow: "shirya ziyara ko kira na farko da ke sa yaronku a gaba, aiki tare da mai kula da shi, da cika ƙananan alkawura da ke gina amincewa.",
          quickCheck: [
            { objective: "O2", q: "Me ya fi gina amincewar yaro bayan mahaifinsa ko mahaifiyarsa ya dawo gida?", options: ["Kyautuka masu tsada", "Manyan alkawura game da gaba", "Doguwar ziyara ɗaya", "Cika ƙananan alkawura akai-akai"], answer: 3, why: "Yara suna amincewa da iyayen da ke ci gaba da zuwa da cika ƙananan alkawura." },
            { objective: "O2", q: "Kuna son kiran 'yarku a karon farko bayan shekaru. Me za ku fara yi?", options: ["Ku yi magana da mai kula da ita", "Ku kira makarantarta", "Ku tura mata saƙo a kafofin sada zumunta", "Ku je bayan an tashi daga makaranta"], answer: 0, why: "Mai kula da ita zai iya taimakawa wajen shirya tuntuɓa da ke sa buƙatun yarinyar a gaba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuɗin kula da yara: neman sake dubawa",
          minutes: 5,
          goal: "Nemi ofishin kuɗin kula da yara ya sake duba odarku idan ba ta dace da kuɗin shigarku ba.",
          text: [
            "Kuɗin kula da yara (child support) ba ya tsayawa da kansa idan kuɗin shigarku ya canja. Kuɗin da ba a biya ba yana iya taruwa ya zama babban bashi, kuma ya kawo abubuwa kamar dakatar da lasisin tuƙi. Ƙyale shi yana ƙara muni. Neman sake dubawa shi ne matakin da ya dace.",
            "A California, kowane ɗaya daga cikin iyayen biyu zai iya neman ofishin kuɗin kula da yara na yankinsu ya sake duba odar ya daidaita ta, abin da ake kira modification (canji). Babu kuɗi. Yana iya aiki idan odar za ta canja da 20% ko $50, duk wanda ya fi ƙanƙanta. Canje-canjen da ake la'akari da su sun haɗa da rasa aiki ko fara aiki, canjin kuɗin shiga, canjin riƙon yara, nakasa, ɗaurin kurkuku da tura soja. Mahaifin da za a ɗaure kwanaki 60 ko fiye a jere zai iya neman a rage odar ta amfani da fom ɗin Incarcerated Parent's Request to Review Child Support.",
            "Ku kawo shaidar kuɗin shigarku da kashe kuɗinku, kamar takardun albashi (pay stub) ko wasiƙar tallafi. Idan iyayen biyu sun amince, za su iya sa hannu a yarjejeniya don kotu; idan ba haka ba, kotu ce ke yanke hukunci. Mai taimakon dokar iyali na gundumarku (county) zai iya taimakawa.",
            "A wajen California, ku tuntuɓi ofishin kuɗin kula da yara na jiharku ko na ƙabilarku (tribal) ku tambayi yadda ake neman sake dubawa. Ku tambaya da wuri: a wurare da yawa canji yana farawa ne daga ranar da kuka tambaya, ba daga lokacin da kuɗin shigarku ya ragu ba."
          ],
          steps: ["Ku nemo ofishin kuɗin kula da yara na yankinku (a California, childsupport.ca.gov).", "Ku kira ko ku rubuta don neman sake dubawa da daidaitawa.", "Ku tara shaidar kuɗin shiga da kashe kuɗi.", "Ku ajiye kwafi, ku rubuta ranar da kuka nema.", "Ku biya abin da za ku iya yayin da kuke jira, ku ajiye shaidar kowane biya."],
          words: [["Odar kuɗin kula da yara (child support order)", "umarnin kotu da ke faɗin nawa mahaifi ko mahaifiya zai biya don taimakon kula da yaro."], ["Modification (canji)", "canji ga odar kuɗin kula da yara."], ["Arrears (bashin da ya taru)", "kuɗin kula da yara da ake bi kuma ba a biya ba."]],
          slides: [
            { title: "Kada ku ƙyale kuɗin kula da yara", bullets: ["Ba ya tsayawa da kansa", "Kuɗin da ba a biya ba yana zama babban bashi", "Neman sake dubawa shi ne matakin da ya dace"] },
            { title: "Sake dubawa da daidaitawa a California", bullets: ["Kowane ɗaya daga iyayen zai iya nema; babu kuɗi", "Canje-canje: aiki, kuɗin shiga, riƙon yara, ɗauri", "Ɗauri kwanaki 60+ a jere: ku nemi a rage odar"] },
            { title: "Abin da za ku kawo", bullets: ["Shaidar kuɗin shiga da kashe kuɗi", "Taimako: mai taimakon dokar iyali na gundumarku"] },
            { title: "A wajen California", bullets: ["Ku tuntuɓi ofishin kuɗin kula da yara na jiharku ko na ƙabilarku", "Ku tambaya da wuri: canji sau da yawa yana farawa daga ranar da kuka tambaya"] }
          ],
          sources: [
            { name: "California Department of Child Support Services: Modify my payment", url: "https://childsupport.ca.gov/overview/modify-my-payment/" },
            { name: "California Department of Child Support Services: Home", url: "https://childsupport.ca.gov/" }
          ],
          tryIt: "Ku nemo shafin intanet ko lambar wayar ofishin kuɗin kula da yara naku. Ku rubuta yadda ake neman sake dubawa, takardun da suke so, da ranar da za ku tuntuɓe su. Idan ba ku da oda, ku rubuta hanya ɗaya da za ku iya taimakon yaronku a wannan watan.",
          youCanNow: "neman ofishin kuɗin kula da yara ya sake duba odarku da kawo shaidar da ta dace, maimakon barin kuɗin da ba a biya ba ya taru.",
          quickCheck: [
            { objective: "O3", q: "Me zai iya faruwa idan kuka ƙyale kuɗin kula da yara bayan kuɗin shigarku ya ragu?", options: ["Odar tana tsayawa da kanta", "Kuɗin da ba a biya ba yana iya taruwa ya zama babban bashi", "Ofishin kuɗin kula da yara yana mantawa da shi", "Yaronku ne zai biya"], answer: 1, why: "Kuɗin da aka ƙyale yana ci gaba da taruwa, don haka neman sake dubawa yana da muhimmanci." },
            { objective: "O3", q: "An rage muku sa'o'in aiki kuma odar kuɗin kula da yara ta yi muku yawa yanzu. Me za ku yi?", options: ["Ku daina biya ku jira", "Ku biya ne kawai idan kun samu", "Ku nemi aboki ya kira a madadinku", "Ku tuntuɓi ofishin kuɗin kula da yara ku nemi sake dubawa"], answer: 3, why: "Sake dubawa ita ce hanyar hukuma ta daidaita oda da kuɗin shigarku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sake haɗuwa da iyali da 'ya'ya",
        questions: [
          { objective: "O1", q: "Kuna son sake haɗuwa da ɗan'uwan iyaye (cousin) da ba ku yi magana da shi ba tsawon shekaru. Mene ne mataki na farko mafi kyau?", options: ["Ku je gidansa da dare", "Ku aika gajeren saƙo cewa kun dawo gida kuma kuna son sake haɗuwa", "Ku nemi kuɗi daga gare shi nan take", "Ku rubuta game da shi a intanet"], answer: 1, why: "Gajeren saƙo mai ladabi yana bar shi ya zaɓi saurin abin." },
          { objective: "O1", q: "Akwai umarnin hana tuntuɓa tsakaninku da wani ɗan iyali. Me ya kamata ku yi?", options: ["Ku bi umarnin", "Ku ƙyale shi idan kun ji kun shirya", "Ku nemi aboki ya kai saƙonni", "Ku tuntuɓe shi sau ɗaya don ku yi bayani"], answer: 0, why: "Dole ne koyaushe a bi umarnin kotu; ku tambayi lauyan taimako kyauta ko jami'inku idan ba ku tabbata ba." },
          { objective: "O2", q: "Me ya fi muhimmanci ga yaro idan mahaifinsa ko mahaifiyarsa ya dawo gida?", options: ["Kyautuka masu tsada", "Manyan alkawura", "Zuwa akai-akai", "Faɗin mummunar magana game da mai kula da shi"], answer: 2, why: "Kasancewa a kowane lokaci yana gina amincewar yaro fiye da kyautuka ko alkawura." },
          { objective: "O3", q: "Kuɗin shigarku ya ragu kuma ba za ku iya biyan kuɗin kula da yara ba. Me za ku yi?", options: ["Ku daina biya ba tare da faɗin komai ba", "Ku jira har bashin ya yi yawa", "Ku ƙaura", "Ku nemi ofishin kuɗin kula da yara ya sake duba odar"], answer: 3, why: "Sake dubawa zai iya rage odar; ƙyale ta yana bar bashi ya taru." },
          { objective: "O3", q: "A California, nawa ne kuɗin neman sake duba kuɗin kula da yara?", options: ["$500", "Babu komai", "Kuɗin kula da yara na wata ɗaya", "Ya danganta da alƙali"], answer: 1, why: "Sake dubawa da daidaitawa a California kyauta ne." }
        ]
      }
    },
    {
      name: "Babi na 2: Al'umma, iyakoki da taimako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Saurare, neman gafara da sake gina amincewa",
          minutes: 5,
          goal: "Yi amfani da saurare, maganar \"Ni\" da neman gafara na gaskiya a tattaunawa mai wuya.",
          text: [
            "Ana sake gina amincewa ne da ayyuka a hankali, ba a magana ɗaya ba. Kyakkyawar sadarwa tana taimakawa a ga waɗannan ayyukan.",
            "Ku fara sauraro. Ku bar ɗayan ya gama, sannan ku maimaita abin da kuka ji: Wato kun ji na ba ku kunya lokacin da ban zo bikin kammala makarantarku ba. Wannan yana nuna kun fahimta, ko da kuna ganin abin daban.",
            "Ku yi amfani da maganar \"Ni\" don faɗin yadda kuke ji ba tare da zargi ba: Ina jin tsoro game da wannan, maimakon Kai koyaushe kana sa abin ya yi wuya. Neman gafara na gaskiya yana faɗin abin da kuka yi, yana faɗin yadda ya cuce su, kuma yana faɗin abin da za ku yi daban. Ba ya ƙunshe da \"amma\", kuma ba ya tilasta yafiya.",
            "Wasu mutane za su buƙaci lokaci mai tsawo. Ku yi haƙuri. Ku ci gaba da zuwa, ku cika alkawarinku, ku bar amincewa ta dawo a saurinsu."
          ],
          steps: ["Ku bar ɗayan ya gama magana.", "Ku maimaita abin da kuka ji.", "Ku faɗi yadda kuke ji da maganar \"Ni\".", "Ku nemi gafara: abin da kuka yi, yadda ya cuce su, abin da za ku yi daban.", "Kada ku ƙara \"amma\"; kada ku tilasta yafiya.", "Ku cika alkawarinku bayan haka."],
          words: [["Maganar \"Ni\" (I-statement)", "hanyar faɗin yadda kuke ji da ke farawa da \"Ni\" ko \"Ina\", ba tare da zargi ba."], ["Maimaitawa (reflect back)", "faɗin abin da wani ya ce da kalmominku, don nuna kun fahimta."], ["Amincewa (trust)", "yarda cewa wani zai yi abin da ya ce."]],
          slides: [
            { title: "Amincewa tana dawowa ta ayyuka", bullets: ["Ba a magana ɗaya ba", "Sadarwa tana taimakawa a ga ayyukan"] },
            { title: "Ku fara sauraro", bullets: ["Ku bar su su gama", "Ku maimaita abin da kuka ji"] },
            { title: "Neman gafara na gaskiya", bullets: ["Ku faɗi abin da kuka yi", "Ku faɗi yadda ya cuce su", "Ku faɗi abin da za ku yi daban", "Babu \"amma\"; babu tilasta yafiya"] },
            { title: "Ku yi haƙuri", bullets: ["Wasu suna buƙatar lokaci mai tsawo", "Ku ci gaba da zuwa, ku cika alkawarinku"] }
          ],
          tryIt: "Ku rubuta neman gafara na gaskiya ga mutum ɗaya, da sassa uku: abin da kuka yi, yadda ya cuce shi, da abin da za ku yi daban. Ku duba babu \"amma\" a ciki kuma ba ya neman a yafe muku. Ku ne za ku yanke daga baya ko za ku aika shi, da lokacin aikawa.",
          youCanNow: "saurare da maimaita abin da kuka ji, magana da maganar \"Ni\", da neman gafara na gaskiya da ke taimakawa sake gina amincewa.",
          quickCheck: [
            { objective: "O4", q: "Mene ne sassa uku na neman gafara na gaskiya?", options: ["Abin da kuka yi, yadda ya cuce su, da abin da za ku yi daban", "Dalilin da yasa kuka yi, wanda kuma ke da laifi, da abin da ya kamata su yi", "Ku yi haƙuri, amma, kuma don Allah ku yafe min", "Kyauta, rungumi da alkawarin mantawa"], answer: 0, why: "Neman gafara na gaskiya yana faɗin cutar da canjin ba tare da uzuri ba." },
            { objective: "O4", q: "Mahaifiyarku ta fara faɗa muku yadda ta ji ciwo. Me za ku fara yi?", options: ["Ku bayyana naku ra'ayin nan take", "Ku canja magana", "Ku saurara ku bar ta ta gama", "Ku fita daga ɗakin"], answer: 2, why: "Fara sauraro yana nuna girmamawa kuma yana taimakawa sake gina amincewa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Masu ba da shawara, addini da ƙungiyoyin al'umma",
          minutes: 5,
          goal: "Nemo mai ba da shawara da ƙungiyar al'umma ɗaya da za ku iya shiga a wannan watan.",
          text: [
            "Mai ba da shawara (mentor) mutum ne da ya riga ku da 'yan matakai, wanda zai iya ba ku shawara, ya riƙa duba ku, ya kuma ƙarfafa ku. Shirye-shiryen masu dawowa gida da yawa suna haɗa mutane da masu ba da shawara, sau da yawa mutanen da su ma suka dawo gida.",
            "Ƙungiyoyin al'umma suna ba ku wurin zama ɗaya daga cikinsu: ƙungiyoyin taimakon masu dawowa gida, tarurrukan murmurewa daga shaye-shaye, al'ummomin addini, ƙungiyoyin wasanni, ƙungiyoyin aikin sa kai, azuzuwan renon yara da ƙungiyoyin tsofaffin ɗalibai na shirye-shiryen da kuka kammala. Kasancewa tare da mutanen da ke gina rayuwa mai kyau yana sauƙaƙa muku ku yi haka.",
            "Don nemo su, ku tambayi shirinku na masu dawowa gida, mai kula da shari'arku ko jami'in parole ɗinku, ku kira 211, ko ku tambayi wata al'ummar addini kusa da ku. Ku je sau ɗaya, sannan ku sake zuwa. Yawancin ƙungiyoyi suna da ban mamaki a farko, kuma suna yin daɗi kafin zuwa na uku.",
            "Idan kuna neman wani ya zama mai ba ku shawara, ku faɗi takamaimai: Za mu iya magana minti 30 sau ɗaya a wata? Ina ƙoƙarin riƙe aikina da sake haɗuwa da 'ya'yana."
          ],
          steps: ["Ku tambayi shirinku na masu dawowa gida ko mai kula da shari'arku game da masu ba da shawara.", "Ku kira 211 ko ku tambayi al'ummar addini game da ƙungiyoyi kusa da ku.", "Ku zaɓi ƙungiya ɗaya ku je aƙalla sau uku.", "Ku nemi wanda zai iya ba ku shawara ya ɗauki ƙaramin alkawari takamaimai.", "Ku gode wa mutanen da suka taimake ku."],
          words: [["Mai ba da shawara (mentor)", "amintaccen mutum da ke ba da shawara da taimako yayin da kuke girma."], ["Ƙungiyar taimako (support group)", "mutanen da suka sha irin abu ɗaya da ke haɗuwa don taimakon juna."], ["Al'ummar addini", "coci, masallaci, haikali ko wani wurin ibada da mabiyansa."]],
          slides: [
            { title: "Me yasa mai ba da shawara", bullets: ["Wanda ya riga ku da 'yan matakai", "Shawara, dubawa da ƙarfafa gwiwa", "Sau da yawa wanda shi ma ya dawo gida"] },
            { title: "Wuraren da za ku zama ɗaya daga cikinsu", bullets: ["Ƙungiyoyin masu dawowa gida da na murmurewa", "Al'ummomin addini da aikin sa kai", "Ƙungiyoyin wasanni, renon yara da tsofaffin ɗalibai"] },
            { title: "Yadda ake nemo su", bullets: ["Ku tambayi shirinku na masu dawowa gida ko mai kula da shari'arku", "Ku kira 211", "Ku je aƙalla sau uku"] },
            { title: "Neman wani ya ba ku shawara", bullets: ["Ku faɗi takamaimai kuma kaɗan", "Minti 30 sau ɗaya a wata", "Ku faɗi abin da kuke aiki a kai"] }
          ],
          sources: [
            { name: "211: Find local help", url: "https://www.211.org/" }
          ],
          tryIt: "Ku nemo wanda zai iya ba ku shawara da ƙungiyar al'umma ɗaya. Ku rubuta yadda za ku tuntuɓi kowanne. Sannan ku rubuta ainihin kalmomin da za ku yi amfani da su don neman mai ba da shawarar ya ɗauki ƙaramin alkawari takamaimai.",
          youCanNow: "nemo mai ba da shawara da ƙungiyar al'umma, da neman taimako a hanya mai sarari da takamaimai.",
          quickCheck: [
            { objective: "O5", q: "Wane ne mai ba da shawara (mentor)?", options: ["Wanda ke biyan kuɗaɗenku", "Amintaccen mutum da ya riga ku da 'yan matakai da ke ba da shawara da taimako", "Jami'in parole ɗinku", "Duk wanda kuka haɗu da shi sau ɗaya"], answer: 1, why: "Mai ba da shawara ya bi hanya irin taku kuma yana taimakawa ya jagorance ku." },
            { objective: "O5", q: "Kuna son wani a cocinku ko masallacinku ya ba ku shawara. Me za ku ce?", options: ["Za ka gyara rayuwata?", "Za ka iya kasancewa tare da ni duk lokacin da nake buƙata?", "Za ka iya ara min kuɗi?", "Za mu iya haɗuwa minti 30 sau ɗaya a wata game da burina?"], answer: 3, why: "Ƙaramar buƙata takamaimai tana da sauƙi ga mai ba da shawara ya ce eh." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iyakoki masu kyau da samun taimako",
          minutes: 6,
          goal: "Sanya iyakoki masu kyau biyu, ku gina jerin masu taimako da ke da 988.",
          text: [
            "Iyaka layi ne da kuke zana don kare lafiyarku, 'yancinku da ci gabanku. Wasu tsofaffin abokai, wurare da ɗabi'u za su iya ja ku baya. Iyaka zai iya zama: Ba na zuwa wancan unguwar kuma, ko Ba zan ajiye komai a motata don kowa ba.",
            "Ku faɗi iyaka a sauƙaƙe da kirki: Ina son ka, amma ba zan iya kasancewa inda ake shan giya yanzu ba. Ba sai kun yi gardama ko kun yi bayani sau da yawa ba. Iyakoki ma suna aiki ta ɓangarorin biyu: ku mutunta iyakokin da iyalinku suka sanya muku.",
            "Dawowa gida yana da wahala. Jin damuwa, fushi, baƙin ciki ko kaɗaici abu ne da aka saba, kuma neman taimako al'ada ce. Layin 988 Suicide and Crisis Lifeline kyauta ne, sirri ne, kuma a buɗe yake awa 24 kowace rana. Kuna iya kira ko tura saƙon tes zuwa 988, ko ku yi hira a 988lifeline.org, don kanku ko don wanda kuke damuwa da shi. A lokacin gaggawa, ku kira 911.",
            "Ku yi jerin masu taimako: mutane biyu ko uku da kuka amince da su, mai ba ku shawara ko ƙungiyarku, mai kula da shari'arku, da 988. Ku ajiye shi a wayarku da kuma a takarda."
          ],
          steps: ["Ku faɗi yanayi biyu da za su iya ja ku baya.", "Ku rubuta iyaka ga kowanne.", "Ku gwada faɗin kowanne a sauƙaƙe da kirki.", "Ku rubuta jerin masu taimako: amintattun mutane, mai ba da shawara ko ƙungiya, mai kula da shari'a, 988.", "Ku ajiye jerin a wayarku da kuma a takarda."],
          words: [["Iyaka (boundary)", "kayyadadden layi da kuke sanyawa don kare lafiyarku, tsaronku da ci gabanku."], ["988", "layin Suicide and Crisis Lifeline; ku kira, ku tura tes ko ku yi hira kyauta, awa 24 kullum."], ["Abin da ke tayar da sha'awa (trigger)", "mutum, wuri ko yanayin zuciya da ke sa tsohuwar ɗabi'a ta yi ƙarfi."]],
          slides: [
            { title: "Mene ne iyaka", bullets: ["Layin da ke kare ci gabanku", "Misali: Ba na zuwa wancan unguwar kuma"] },
            { title: "Faɗin ta", bullets: ["A sauƙaƙe da kirki", "Ba sai kun yi gardama ko bayani akai-akai ba", "Ku mutunta iyakokin iyalinku ma"] },
            { title: "988: taimako a kowane lokaci", bullets: ["Ku kira ko tura tes zuwa 988, ko hira a 988lifeline.org", "Kyauta, sirri, awa 24 kullum", "Gaggawa: ku kira 911"] },
            { title: "Jerin masu taimakonku", bullets: ["Mutane biyu ko uku da kuka amince da su", "Mai ba da shawara, ƙungiya da mai kula da shari'a", "988, a wayarku da kuma a takarda"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta shirinku na sake haɗuwa da taimako mai shafi ɗaya, da ɗan iyali na farko da za ku tuntuɓa da saƙonku, mataki ɗaya kan renon yara ko kuɗin kula da yara idan ya shafe ku, taimakon al'umma biyu, iyakoki biyu, da jerin masu taimakonku da 988 a ciki.",
          youCanNow: "sanya iyakoki masu kyau, faɗin su da kirki, da neman taimako, har da 988, lokacin da abubuwa suka yi wuya.",
          quickCheck: [
            { objective: "O6", q: "Mene ne iyaka?", options: ["Kayyadadden layi da kuke sanyawa don kare lafiyarku da ci gabanku", "Dokar da iyalinku suka sanya muku", "Umarnin kotu", "Hanyar hukunta mutane"], answer: 0, why: "Iyakoki layuka ne da kuke zaɓa don kare kanku da ci gabanku." },
            { objective: "O6", q: "Wani tsohon aboki yana ci gaba da gayyatar ku zuwa wuraren da za su iya jefa ku cikin matsala. Me za ku yi?", options: ["Ku je sau ɗaya don ya daina tambaya", "Ku ce a'a da kirki ku ba da shawarar wani abu dabam, ko ku nisanta", "Ku je amma ku tashi da wuri", "Ku toshe duk wanda kuka sani"], answer: 1, why: "A'a mai sarari da kirki yana kare ci gabanku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Al'umma, iyakoki da taimako",
        questions: [
          { objective: "O4", q: "Wanne ne neman gafara na gaskiya?", options: ["Ku yi haƙuri, amma ku ne kuka sa na yi", "Ku yi haƙuri idan ranku ya ɓaci", "Ba za mu iya mantawa da shi kawai ba?", "Ban zo ranakun haihuwarku ba. Na san ya cuce ku. Yanzu zan kira kowane mako."], answer: 3, why: "Yana faɗin abin da kuka yi, yadda ya cuce su da abin da za ku yi daban." },
          { objective: "O4", q: "Wace ce maganar \"Ni\"?", options: ["Kai ba ka taɓa saurare", "Ina jin tsoro game da wannan magana", "Kai koyaushe kana ɓata abubuwa", "Kowa yana gāba da ni"], answer: 1, why: "Maganar \"Ni\" tana faɗin yadda kuke ji ba tare da zargi ba." },
          { objective: "O5", q: "Wace hanya ce mai kyau ta neman wani ya ba ku shawara?", options: ["Za mu iya magana minti 30 sau ɗaya a wata game da riƙe aikina?", "Ka gyara rayuwata", "Ka ba ni kuɗi", "Ka kasance a shirye kowane lokaci"], answer: 0, why: "Ƙaramar buƙata takamaimai tana da sauƙin a ce mata eh." },
          { objective: "O6", q: "Wani tsohon aboki yana son ku riƙe masa wani abu a motarku. Iyaka mai kyau ita ce:", options: ["Cewa eh don ku riƙe abota", "Cewa eh sau ɗaya kawai", "Cewa a'a da kirki: Ba zan iya yin haka kuma ba", "Ƙyale dokokin parole ɗinku"], answer: 2, why: "A'a mai sarari da kirki yana kare 'yancinku da ci gabanku." },
          { objective: "O6", q: "Kuna jin kun fid da rai da dare. Me za ku iya yi?", options: ["Ku jira har wata mai zuwa", "Ku kira ko tura tes zuwa 988", "Ku riƙe shi a ranku", "Ku nemi wani dandalin intanet bazuwar"], answer: 1, why: "988 kyauta ne, sirri ne, kuma a buɗe yake awa 24 kullum ta kira, tes ko hira." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sake Gina Dangantaka da Iyali da Al'umma",
    questions: [
      { objective: "O1", q: "Me yasa za ku shirya tuntuɓarku ta farko maimakon bayyana ba tare da sanarwa ba?", options: ["Shiri yana mutunta ɗayan kuma ya fi kyau", "Doka ce ta tilasta shiri", "Ba da mamaki ya fi sauri", "Ba shi da muhimmanci"], answer: 0, why: "Tuntuɓa mai ladabi da aka shirya tana ba dangantakar farawa mafi kyau." },
      { objective: "O1", q: "Me saƙon farko BA zai ƙunsa ba?", options: ["Cewa kun dawo gida", "Cewa kuna son sake haɗuwa", "Neman kuɗi ko wurin zama", "Cewa za su iya zaɓar saurin abin"], answer: 2, why: "Neman kuɗi ko gida da farko yana matsa musu." },
      { objective: "O1", q: "Wani ɗan iyali ya ce bai shirya yin magana ba. Mene ne amsa mafi kyau?", options: ["Ku ci gaba da kira kowace awa", "Ku yi fushi", "Ku nemi wasu su matsa masa", "Ku gode masa ku bar ƙofa a buɗe"], answer: 3, why: "Mutunta saurinsa yana barin ƙofa a buɗe don gaba." },
      { objective: "O2", q: "Kafin ziyararku ta farko da yaronku, ya kamata ku fara magana da:", options: ["Mai kula da yaron", "Baƙo a intanet", "Tsofaffin abokanku", "Babu kowa"], answer: 0, why: "Mai kula da yaron ya san abin da yaron ya shirya masa da lokutan da suka dace." },
      { objective: "O2", q: "Ƙaramin yaro ya tambayi inda kuka kasance. Amsa mai kyau ita ce:", options: ["Doguwar labari da kowane bayani", "Na yi kuskure, ba na nan, kuma yanzu ina nan", "Laifin mahaifiyarka ne", "Babu komai"], answer: 1, why: "Kalmomin gaskiya masu sauƙi sun dace da shekarun ƙaramin yaro." },
      { objective: "O2", q: "Kuna son kotu ta sanya muku ziyara akai-akai. A ina za ku fara?", options: ["Ƙungiya a kafofin sada zumunta", "Tsohon abokin ɗakin kurkukunku", "Shafin taimakon kai na kotun jiharku ko mai taimakon dokar iyali", "Shagon jinginar kaya"], answer: 2, why: "Shafukan taimakon kai na kotu da masu taimakon dokar iyali suna bayanin fom-fom ɗin." },
      { objective: "O2", q: "Me ya fi gina amincewar yaro?", options: ["Manyan alkawura", "Manyan kyautuka sau ɗaya a shekara", "Faɗin mummunar magana game da mai kula da shi", "Cika ƙananan alkawura akai-akai"], answer: 3, why: "Kasancewa a kowane lokaci yana nuna wa yaron cewa zai iya dogara da ku." },
      { objective: "O3", q: "Me ke faruwa da kuɗin kula da yara idan kuka ƙyale shi bayan kuɗin shigarku ya ragu?", options: ["Kuɗin da ba a biya ba yana iya taruwa ya zama babban bashi", "Yana tsayawa da kansa", "Ana yafe shi kai tsaye", "Babu abin da ke faruwa"], answer: 0, why: "Oda tana nan har sai an canja ta, don haka kuɗin da ba a biya ba yana taruwa." },
      { objective: "O3", q: "A California, wa zai iya neman sake duba kuɗin kula da yara?", options: ["Alƙali kaɗai", "Kowane ɗaya daga cikin iyayen biyu", "Yaron kaɗai", "Lauya kaɗai"], answer: 1, why: "Kowane ɗaya daga iyayen zai iya neman ofishin kuɗin kula da yara na yankinsu ya sake dubawa." },
      { objective: "O3", q: "A California, mahaifin da aka ɗaure kwanaki 60 ko fiye a jere zai iya:", options: ["Ba zai taɓa canja odar ba", "Ƙyale odar", "Neman a rage odar da fom ɗin Incarcerated Parent's Request to Review Child Support", "Biyan ninki biyu"], answer: 2, why: "California tana da fom na musamman don iyayen da ke ɗaure su nemi sake dubawa." },
      { objective: "O3", q: "A wajen California, a ina za ku tambaya game da canja odar kuɗin kula da yara?", options: ["Wurin aikinku", "Mai gidan haya", "Gidan rediyo", "Ofishin kuɗin kula da yara na jiharku ko na ƙabilarku"], answer: 3, why: "Ofisoshin kuɗin kula da yara na jiha da na ƙabila ne ke yin sake dubawa." },
      { objective: "O4", q: "Me ya kamata ku fara yi a tattaunawa mai wuya?", options: ["Ku saurara ku bar su su gama", "Ku katse su don ku yi bayani", "Ku tafi", "Ku ɗaga muryarku"], answer: 0, why: "Fara sauraro yana nuna girmamawa kuma yana taimaka muku fahimta." },
      { objective: "O4", q: "Maimaita abin da kuka ji ana kiransa:", options: ["Gardama", "Maimaitawa (reflect back)", "Ƙyalewa", "Zargi"], answer: 1, why: "Maimaitawa tana nuna wa ɗayan cewa kun fahimta." },
      { objective: "O4", q: "Wace kalma ya kamata ku cire daga neman gafara?", options: ["Ku yi haƙuri", "Zan", "Amma", "Ni"], answer: 2, why: "\"Amma\" tana mayar da neman gafara uzuri." },
      { objective: "O5", q: "Mai ba da shawara (mentor) shi ne:", options: ["Jami'in parole ɗinku", "Wanda ke biyan kuɗaɗenku", "Alƙali", "Amintaccen mutum da ya riga ku da 'yan matakai da ke ba da shawara da taimako"], answer: 3, why: "Masu ba da shawara suna ba da shawara da ƙarfafa gwiwa yayin da kuke girma." },
      { objective: "O5", q: "Kun je ƙungiyar taimako sau ɗaya kuma kun ji ba ku dace ba. Mene ne mataki mai kyau na gaba?", options: ["Ku sake zuwa aƙalla sau biyu kafin ku yanke shawara", "Kada ku sake zuwa", "Ku yi ƙorafi a intanet", "Ku faɗa wa wasu kada su je"], answer: 0, why: "Yawancin ƙungiyoyi suna yin daɗi kafin zuwa na uku." },
      { objective: "O5", q: "Wace ce hanyar nemo ƙungiyoyin al'umma?", options: ["Ku nemi kuɗi daga baƙo", "Ku kira 211 ko ku tambayi mai kula da shari'arku", "Ku jira wani ya nemo ku", "Ku koma tsofaffin wuraren zamanku"], answer: 1, why: "211 da masu kula da shari'a sun san ƙungiyoyi da shirye-shirye na yanki." },
      { objective: "O6", q: "Mene ne iyaka?", options: ["Katanga kewaye da gidanku", "Dokar da wasu suka sanya muku", "Kayyadadden layi da kuke sanyawa don kare lafiyarku da ci gabanku", "Wani nau'in umarnin kotu"], answer: 2, why: "Iyaka tana kare lafiyarku, tsaronku da ci gabanku." },
      { objective: "O6", q: "Wanne ne gaskiya game da 988?", options: ["Yana da kuɗi", "Yana aiki ne kawai ranakun aiki", "Don gaggawa da 'yan sanda ne kawai", "Kuna iya kira, tura tes ko hira kyauta, awa 24 kullum"], answer: 3, why: "988 kyauta ne, sirri ne, kuma a buɗe yake awa 24 kullum ta kira, tes ko hira." },
      { objective: "O6", q: "A ina ya kamata ku ajiye jerin masu taimakonku?", options: ["A wayarku da kuma a takarda", "A kanku kawai", "Babu inda", "Wurin wani baƙo"], answer: 0, why: "Samun shi a wurare biyu yana nufin za ku iya samunsa lokacin da kuke buƙata." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 3, 6, 7, 10, 11, 13, 14, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Tuntuɓa ta farko", objective: "O1", notYet: "Babu saƙo, ko yana neman kuɗi, yana zargi ko yana matsi.", meets: "Ya faɗi wanda za a fara tuntuɓa da gajeren saƙo mai ladabi.", exceeds: "An karanta saƙon da babbar murya kuma yana ba mutumin damar ɗaukar lokacinsa." },
      { name: "Mataki kan renon yara ko kuɗin kula da yara", objective: "O3", notYet: "Babu mataki alhali ya shafe shi.", meets: "Mataki ɗaya mai sarari, kamar tuntuɓar mai kula da yaron ko neman ofishin ya sake dubawa, tare da rana.", exceeds: "Ya jera takardun da ake buƙata ko tambayoyin da za a yi wa mai kula da yaron." },
      { name: "Taimakon al'umma", objective: "O5", notYet: "Ƙasa da taimako biyu.", meets: "Taimako biyu, kamar mai ba da shawara, ƙungiya ko al'ummar addini, tare da yadda za a tuntuɓe su.", exceeds: "Yana da ainihin kalmomin neman mai ba da shawara ya ɗauki takamaiman alkawari." },
      { name: "Iyakoki", objective: "O6", notYet: "Ƙasa da iyakoki biyu, ko ba su da sarari.", meets: "Iyakoki biyu masu sarari da ke kare ci gaban mai koyo.", exceeds: "Kowace iyaka tana da kalmomin da mai koyo zai yi amfani da su don kiyaye ta." },
      { name: "Jerin masu taimako", objective: "O6", notYet: "Babu jeri, ko babu 988 a ciki.", meets: "Jerin mutane da lambobin da za a kira, har da 988.", exceeds: "An ajiye shi a waya da kuma a takarda." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun tuntuɓi ɗan iyali ko yaro cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka shiga shirin mai ba da shawara, ƙungiyar taimako ko al'ummar addini cikin kwanaki 60",
      "Masu koyo da suka nemi sake duba kuɗin kula da yara lokacin da odarsu ba ta dace da kuɗin shigarsu ba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda da alƙalami, ko manhajar rubutu a waya",
      "Waya don ajiye jerin masu taimako",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Waɗannan batutuwa za su iya tayar da zuciya; ku bar masu koyo su faɗi abin da suka zaɓa kawai, kuma ku sa 988 a inda kowa zai gani.",
      "Ku tunatar da masu koyo cewa umarnin kotu, umarnin hana tuntuɓa da sharuɗɗan parole ko probation su ne farko.",
      "Ku shirya lambobin ofishin kuɗin kula da yara na yankinku, lauyan taimako kyauta da 211.",
      "Ku gwada saurare da maganar \"Ni\" bibbiyu ta amfani da yanayin ƙirƙira, ba rigingimun iyali na gaske ba.",
      "Ku ba da maki ga shirin da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
