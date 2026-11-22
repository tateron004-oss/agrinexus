"use strict";

// Koach Learn course, Hausa (ha) translation of shared/negotiation-skills.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "negotiation-skills-ha",
  lang: "ha",
  translationOf: "negotiation-skills",
  category: "Athletes",
  name: "Dabarun Ciniki da Yarjejeniya",
  skills: "Shirya tsarin ciniki, Nema da ƙarfin gwiwa, Musaya maimakon sallamawa, Natsuwa lokacin matsi, Rubuta yarjejeniya, Cinikin albashi da farashi",
  outcome: "shirya da gudanar da ciniki mai adalci kan albashi ko farashi: sanin burinku, iyakarku ta ƙarshe da buƙatun ɗaya ɓangaren, nema tare da dalili, musaya maimakon sallamawa, natsuwa lokacin matsi, da tabbatar da yarjejeniyar a rubuce.",
  about: [
    "Kuna ciniki fiye da yadda kuke tsammani: tayin aiki, ƙarin albashi, farashi da mai sayar da kaya, kuɗin aiki ga abokin ciniki, hayar gida ko shago, yarjejeniyar masu ɗaukar nauyi (sponsorship) ko NIL, har ma da wanda zai yi wane aiki a gida. Masu ciniki nagari ba masu tursasawa ba ne. Suna shiryawa, suna nema a sarari, suna saurare, kuma suna neman yarjejeniyar da ɓangarorin biyu za su iya kiyayewa.",
    "Wannan kwas ɗin na 'yan wasa ne, masu kasuwanci, ma'aikata, masu neman aiki da shugabannin ƙungiya. Misalan sun fito ne daga tayin aiki, ƙananan shaguna, 'yan kwangila, masu ɗaukar nauyi da wurin aiki.",
    "Za ku rubuta tsarin ciniki mai shafi ɗaya, ku yi atisayen nema, ku koyi musaya maimakon sallamawa, ku jure matsi, ku rubuta yarjejeniya, sannan ku yi amfani da duka wajen albashi da farashi. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Don manyan kwangiloli, kamar yarjejeniyar NIL, haya ko bashi, ku sa lauya, wakili da kuka amince da shi, ko ofishin ƙa'idoji (compliance office) na makarantarku ya duba takardun ƙarshe."
  ],
  finalTask: "Ku rubuta tsari mai shafi ɗaya don ciniki na gaske kan albashi ko farashi (burinku, iyakarku ta ƙarshe, shirinku na B, buƙatun ɗaya ɓangaren, buƙatarku ta farko tare da dalili, da abubuwa biyu da za ku iya musaya). Ku yi wasan kwaikwayo da aboki da zai ƙi yarda da ku, sannan ku rubuta gajeren imel na biyo baya da ke tabbatar da abin da aka amince da shi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa da sauran manya da ke buƙatar amincewa kan albashi ko farashi: masu neman aiki da ma'aikata, ɗalibai 'yan wasa masu tayin NIL ko na masu ɗaukar nauyi, da masu ƙananan kasuwanci da ke saye daga masu sayar da kaya ko sayarwa ga abokan ciniki.",
    startingPoint: "Sun karɓi tayin aiki, farashi ko yarjejeniya kamar yadda aka ba su, ko sun yi ciniki ba tare da tsari ba. Da yawa suna jin tsoron neman ƙari, kuma suna sallamawa idan aka matsa musu.",
    gap: "Mutanen da ba sa nema, ko waɗanda ke rage lambarsu idan aka matsa musu, suna barin albashi da riba, kuma suna sa hannu a yarjejeniyar da suke nadama a kai. Tsari a rubuce, buƙata a sarari tare da dalili, musaya maimakon sallamawa, amsoshi cikin natsuwa lokacin matsi, da yarjejeniya a rubuce suna kare kuɗin shigarsu da mutuncinsu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya ko kwamfuta don bincike da imel; takarda tana isa don tsarin",
      "Lokaci: kusan minti 5 a kowane darasi, da wasan kwaikwayo da aboki",
      "Dokokin albashi sun bambanta a kowace jiha da ƙasa; masu koyo su duba ofishin ƙwadago na wurinsu",
      "Manyan kwangiloli kamar NIL ko yarjejeniyar masu ɗaukar nauyi suna buƙatar lauya, wakili ko ofishin ƙa'idoji; kada a saka lambar shaida ko ta banki a kayan AI"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da ciniki na gaske kan albashi ko farashi", action: "rubuta tsari mai shafi ɗaya da ke da burinku, iyakarku ta ƙarshe, shirinku na B da buƙatun ɗaya ɓangaren", standard: "an cike kowane sashe kafin ku fara magana" },
    { id: "O2", condition: "Idan kuna buɗe ciniki", action: "yin buƙata a sarari da ta ɗan wuce burinku tare da dalili, sannan ku yi shiru", standard: "cikin jimla ɗaya ko biyu" },
    { id: "O3", condition: "Idan ɗaya ɓangaren ya ƙi lambarku", action: "bayar da musaya ta \"Idan za ku iya..., to ni ma zan iya...\" maimakon sallamawa", standard: "kuna ambaton aƙalla abubuwa biyu ban da kuɗi da za ku iya musaya" },
    { id: "O4", condition: "Idan wani ya yi amfani da dabarar matsi", action: "amsawa cikin natsuwa ta hanyar neman lokaci, ko ƙin tayin da ke ƙasa da iyakarku ta ƙarshe cikin ladabi", standard: "ba tare da amincewa nan take ba" },
    { id: "O5", condition: "A ƙarshen kowace yarjejeniya", action: "tabbatar da kowane abin da aka amince da shi a rubuce, da karanta shi kafin ku sa hannu", standard: "tare da farashi, ranaku da sharuɗɗa a jere a ranar" },
    { id: "O6", condition: "Kafin tattaunawa kan albashi ko farashi", action: "bincika lamba mai adalci ta amfani da bayanan albashi, tallace-tallacen aiki ko farashi uku daga masu sayarwa, da kuɗin da kuke kashewa", standard: "ta amfani da aƙalla majiya ɗaya amintacciya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shiryawa da nema",
      lessons: [
        {
          objectives: ["O1"],
          title: "Shiryawa: burinku, iyakarku ta ƙarshe da buƙatunsu",
          minutes: 5,
          goal: "Rubuta tsarin ciniki mai shafi ɗaya kafin ku fara magana.",
          text: [
            "Yawancin nasarar ciniki ana samun ta kafin a fara. Shiryawa yana nufin amsa tambayoyi uku a takarda.",
            "Burinku: me zai zama sakamako mai kyau sosai amma mai yiwuwa? Ku faɗa daidai: \"$19 a kowace awa da hutun ranar Asabar\" ko \"$4.50 a kowane kwali, ana kawowa kowane mako\". Iyakarku ta ƙarshe: mafi munin yarjejeniyar da har yanzu za ku karɓa. Ƙasa da ita, kuna cewa a'a. Ku san shirinku na B, abu mafi kyau da za ku iya yi idan ba a yi yarjejeniya ba, kamar wani tayin aiki, wani mai sayar da kaya, ko ci gaba da aikinku na yanzu. Shirin B mai ƙarfi yana ba ku ƙarfin gwiwa.",
            "Buƙatun ɗaya ɓangaren: me suke so, kuma me ke damun su? Mai ɗaukar aiki yana iya buƙatar mutum amintacce da zai fara da wuri. Mai ɗaukar nauyi yana iya son saƙonninku a kafofin sada zumunta su kai ga abokan cinikinsa. Mai sayar da kaya yana iya son oda mai ɗorewa kowane wata. Idan kun san buƙatunsu, za ku iya bayar da abubuwan da ba su da tsada a gare ku amma suna da muhimmanci a gare su."
          ],
          steps: ["Ku rubuta burinku, tare da lambobi.", "Ku rubuta iyakarku ta ƙarshe.", "Ku rubuta shirinku na B idan ba a yi yarjejeniya ba.", "Ku jera buƙatun ɗaya ɓangaren da abin da ke damun su.", "Ku jera abubuwan da za ku iya bayarwa da ke da muhimmanci a gare su."],
          words: [["Iyaka ta ƙarshe (walk-away point)", "mafi munin yarjejeniyar da har yanzu za ku karɓa; ƙasa da ita kuna cewa a'a."], ["Shirin B", "abin da za ku yi idan ba a yi yarjejeniya ba. Littattafan ciniki suna kiransa BATNA."], ["Ciniki (negotiation)", "tattaunawa da wani don cimma yarjejeniyar da ku duka kuka amince da ita."]],
          slides: [
            { title: "Ku shirya a takarda", bullets: ["Yawancin nasarar ciniki ana samun ta kafin a fara", "Ku amsa tambayoyi uku"] },
            { title: "1. Burinku", bullets: ["Mai kyau sosai amma mai yiwuwa", "Daidai: \"$19 a kowace awa da hutun ranar Asabar\""] },
            { title: "2. Iyakarku ta ƙarshe da shirinku na B", bullets: ["Mafi munin yarjejeniyar da za ku karɓa", "Shirin B: abin da za ku yi idan babu yarjejeniya", "Shirin B mai ƙarfi yana ba da ƙarfin gwiwa"] },
            { title: "3. Buƙatunsu", bullets: ["Mai ɗaukar aiki: mutum amintacce da zai fara da wuri", "Mai ɗaukar nauyi: kaiwa ga abokan cinikinsa", "Mai sayar da kaya: oda mai ɗorewa kowane wata"] }
          ],
          tryIt: "Ku zaɓi ciniki na gaske da ke tafe: tattaunawar albashi, farashi da mai sayar da kaya ko abokin ciniki, haya, ko yarjejeniyar mai ɗaukar nauyi. Ku rubuta burinku, iyakarku ta ƙarshe, shirinku na B da manyan buƙatu biyu na ɗaya ɓangaren.",
          youCanNow: "shirya don ciniki ta hanyar rubuta burinku, iyakarku ta ƙarshe, shirinku na B da buƙatun ɗaya ɓangaren.",
          quickCheck: [
            { objective: "O1", q: "Mene ne shirinku na B?", options: ["Buƙatarku ta farko", "Abu mafi kyau da za ku iya yi idan ba a yi yarjejeniya ba", "Iyakar ƙarshe ta ɗaya ɓangaren", "Kwafi na biyu na tsarinku"], answer: 1, why: "Shirinku na B shi ne zaɓinku mafi kyau idan ba a yi yarjejeniya ba, kamar wani tayi ko ci gaba da aikinku na yanzu." },
            { objective: "O1", q: "Kuna shirin neman farashi mafi kyau daga mai sayar da kaya. Me za ku rubuta game da shi?", options: ["Babu komai; burinku kaɗai ne ke da muhimmanci", "Adireshin gidansa", "Jerin kurakuransa", "Abin da yake so da abin da ke damun sa, kamar oda mai ɗorewa kowane wata"], answer: 3, why: "Sanin buƙatun ɗaya ɓangaren yana taimaka muku bayar da abubuwan da ba su da tsada a gare ku amma suna da muhimmanci a gare su." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nema da ƙarfin gwiwa",
          minutes: 5,
          goal: "Yi buƙata ta farko a sarari tare da dalili, sannan ku yi shiru.",
          text: [
            "Mutane da yawa ba sa samun ƙari domin ba sa taɓa nema. Lambar farko da aka faɗa da baki sau da yawa tana tsara dukan tattaunawar, don haka yana da kyau ku da kanku ku yi buƙata a sarari mai ma'ana. Ku nemi abin da ya ɗan wuce burinku don a sami wurin sassautawa, amma ya zama abin da za ku iya bayaninsa.",
            "Ku ba da dalili: \"Bisa ga albashin wannan aiki a yankinmu da shekaru biyu da na yi ina jagorantar layin girki, ina neman $21 a kowace awa.\" Ko don kasuwanci: \"Don oda ta watanni 12 da ake biya a kan lokaci, muna neman $4.20 a kowane kwali.\" Sannan ku yi shiru. Shirun yana iya jin ba daɗi, amma yana ba su lokacin tunani. Kada ku yi jayayya da kanku.",
            "Ku yi tambayoyi kuma, ku saurari amsoshin: \"Mene ne ya fi muhimmanci a gare ku a wannan yarjejeniya?\" \"Wane sassauci kuke da shi game da ranar farawa?\" Amsoshin suna nuna muku abin da za ku iya musaya."
          ],
          steps: ["Ku zaɓi buƙata ta farko da ta ɗan wuce burinku.", "Ku rubuta dalili ɗaya da za ku iya bayaninsa.", "Ku faɗi buƙatar da dalilin cikin natsuwa.", "Ku yi shiru ku jira.", "Ku yi tambayoyi masu buɗaɗɗiyar amsa, ku saurara don jin abin da suke buƙata."],
          words: [["Buƙata ta farko (opening ask)", "abu na farko da kuke nema a ciniki."], ["Anga (anchor)", "lambar farko da aka faɗa; sau da yawa tana tsara sauran tattaunawar."]],
          slides: [
            { title: "Ba za ku sami abin da ba ku nema ba", bullets: ["Lambar farko tana tsara tattaunawar", "Ku nemi abin da ya ɗan wuce burinku", "Ya zama abin da za ku iya bayaninsa"] },
            { title: "Ku nema tare da dalili", bullets: ["\"Bisa ga albashin yankinmu da shekaru 2 a layin girki,", "ina neman $21 a kowace awa.\""] },
            { title: "Sannan ku yi shiru", bullets: ["Shiru yana ba su lokacin tunani", "Kada ku yi jayayya da kanku"] },
            { title: "Ku tambaya ku saurara", bullets: ["\"Mene ne ya fi muhimmanci a gare ku a wannan yarjejeniya?\"", "\"Wane sassauci kuke da shi game da ranar farawa?\""] }
          ],
          tryIt: "Ku rubuta buƙatarku ta farko da dalili ɗaya don cinikinku na gaske. Ku faɗe ta da babbar murya sau uku cikin natsuwa, kuma ku yi shiru na daƙiƙa biyar cif bayan kowane lokaci.",
          youCanNow: "yin buƙata ta farko a sarari tare da dalili, yin shiru, da yin tambayoyin da ke bayyana buƙatun ɗaya ɓangaren.",
          quickCheck: [
            { objective: "O2", q: "Me yasa yana da amfani ku da kanku ku faɗi lambar farko mai ma'ana?", options: ["Lambar farko da aka faɗa da baki sau da yawa tana tsara dukan tattaunawar", "Tana gama ciniki da sauri", "Dole ɗaya ɓangaren ya karɓe ta", "Tana nuna ba ku damu ba"], answer: 0, why: "Darasin ya ce lambar farko sau da yawa tana tsara tattaunawar, don haka buƙata a sarari tare da dalili tana taimaka muku." },
            { objective: "O2", q: "Kun gama faɗin buƙatarku tare da dalili, kuma ɗakin ya yi tsit. Me za ku yi?", options: ["Ku rage lambarku nan take", "Ku sake bayanin dalilin da yasa wataƙila ba ku cancanta ba", "Ku yi shiru ku bar su su yi tunani", "Ku fita daga ɗakin"], answer: 2, why: "Shiru yana ba su lokacin tunani; magana tana iya sa ku yi jayayya da kanku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Musaya maimakon sallamawa",
          minutes: 5,
          goal: "Yi amfani da musaya ta \"idan... to...\" don kada ku taɓa bayar da abu a banza.",
          text: [
            "Idan ɗaya ɓangaren ya ƙi, kada ku rage lambarku kawai. Ku yi musaya. Duk lokacin da kuka bayar da wani abu, ku nemi wani abu a madadinsa. Kayan aiki mai sauƙi shi ne \"Idan za ku iya..., to ni ma zan iya...\".",
            "Ku nemi abubuwan da ba su da tsada ga ɓangare ɗaya amma suna da daraja ga ɗayan. Ma'aikaci: \"Idan ba za ku iya canja kuɗin awa ba, za mu iya sake duba shi bayan kwanaki 90, ko ku ƙara rana ɗaya ta hutu da ake biya?\" Ƙaramin kasuwanci: \"Idan kun biya kafin aiki, to zan rage kashi 5 cikin ɗari.\" Ɗan wasa da mai ɗaukar nauyi: \"Idan kuna son ƙarin saƙonni biyu a kafofin sada zumunta, to zan buƙaci kuɗi mafi yawa ko kaya kyauta ga ƙungiyar.\"",
            "Albashi ba shi kaɗai ne abin tattaunawa ba. Ku yi tunani game da ranar farawa, jadawalin aiki, horo, kayan aiki, kawo kaya, sharuɗɗan biya, tsawon kwangila, da muƙami. Ƙarin abubuwan musaya yana nufin ƙarin hanyoyin samun yarjejeniyar da ɓangarorin biyu suke so."
          ],
          steps: ["Kada ku taɓa bayar da abu a banza.", "Ku yi amfani da \"Idan za ku iya..., to ni ma zan iya...\".", "Ku jera abin da ba shi da tsada a gare ku amma yana da daraja a gare su.", "Ku duba bayan kuɗi: jadawali, ranar farawa, horo, kawo kaya, sharuɗɗa.", "Ku kwatanta kowace musaya da iyakarku ta ƙarshe."],
          words: [["Musaya (trade)", "bayar da wani abu sai kun sami wani abu a madadinsa."], ["Rangwame (concession)", "abin da kuka sallama a lokacin ciniki."], ["Sharuɗɗa (terms)", "cikakkun bayanan yarjejeniya, kamar yaushe da yadda ake biya."]],
          slides: [
            { title: "Ku yi musaya; kada ku sallama", bullets: ["Duk lokacin da kuka bayar, ku nemi wani abu a madadinsa", "\"Idan za ku iya..., to ni ma zan iya...\""] },
            { title: "Misalai", bullets: ["\"Idan kuɗin awa ba zai canja ba, za mu iya sake duba shi bayan kwanaki 90?\"", "\"Idan kun biya kafin aiki, zan rage kashi 5 cikin ɗari.\"", "\"Ƙarin saƙonni biyu yana nufin ƙarin kuɗi.\""] },
            { title: "Fiye da kuɗi", bullets: ["Jadawali da ranar farawa", "Horo da kayan aiki", "Kawo kaya, sharuɗɗan biya, tsawon kwangila"] },
            { title: "Ku kasance lafiya", bullets: ["Ku kwatanta kowace musaya da iyakarku ta ƙarshe"] }
          ],
          tryIt: "Don cinikinku na gaske, ku jera abubuwa uku da za ku iya bayarwa da abubuwa uku da za ku iya nema ban da kuɗi. Ku rubuta jimloli biyu na \"Idan za ku iya..., to ni ma zan iya...\".",
          youCanNow: "musayar rangwame ta hanyar \"idan... to...\" maimakon bayar da abubuwa a banza.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ma'anar musaya a ciniki?", options: ["Sallamawa don gama tattaunawa", "Neman wani abu a madadi duk lokacin da kuka bayar da wani abu", "Canja aiki da wani", "Maimaita lambarku ta farko"], answer: 1, why: "Musaya tana nufin duk lokacin da kuka bayar da wani abu, kuna neman wani abu a madadinsa." },
            { objective: "O3", q: "Mai ɗaukar aiki ba zai iya ƙara kuɗin awa ba. Wace musaya ce mai kyau da za ku nema?", options: ["Babu komai; ku karɓa kamar yadda yake", "Ku nemi su yi alƙawarin ƙarin albashi wata rana", "Ku yi barazanar barin aiki", "Sake duba albashi bayan kwanaki 90 ko ƙarin rana ɗaya ta hutu da ake biya"], answer: 3, why: "Abubuwa ban da kuɗi, kamar sake dubawa bayan kwanaki 90 ko ranar hutu, suna iya sa yarjejeniyar ta yi wa ɓangarorin biyu aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shiryawa da nema",
        questions: [
          { objective: "O1", q: "Iyakarku ta ƙarshe ita ce:", options: ["Mafi kyawun yarjejeniyar da kuke iya tunani", "Mafi munin yarjejeniyar da har yanzu za ku karɓa", "Tayin farko na ɗaya ɓangaren", "Lambar da kuka fi so"], answer: 1, why: "Ƙasa da iyakarku ta ƙarshe, kuna cewa a'a." },
          { objective: "O1", q: "Me yasa shirin B mai ƙarfi yake taimakawa?", options: ["Yana ba ku damar zagin ɗaya ɓangaren", "Yana nufin ba sai kun shirya ba", "Yana ba ku ƙarfin gwiwar ƙin mummunar yarjejeniya", "Yana tabbatar da cewa za ku yi nasara"], answer: 2, why: "Kyakkyawan zaɓi idan babu yarjejeniya yana rage yiwuwar ku karɓi mummuna." },
          { objective: "O2", q: "Wace buƙata ta farko ce ta fi ƙarfi?", options: ["\"Duk abin da kuke ganin ya dace.\"", "\"Yi haƙuri, ko zan iya samun ɗan ƙari?\"", "\"Zan karɓi komai.\"", "\"Bisa ga albashin yankinmu da gogewata, ina neman $21 a kowace awa.\""], answer: 3, why: "Lamba a sarari tare da dalili tana da sauƙin ɗauka da muhimmanci." },
          { objective: "O2", q: "Bayan kun faɗi buƙatarku, ya kamata ku:", options: ["Yi shiru ku bar su su yi tunani", "Rage ta nan take", "Ci gaba da bayanin dalilin da yasa wataƙila ba ku cancanta ba", "Fita daga ɗakin"], answer: 0, why: "Shiru yana ba su lokacin amsawa; kada ku yi jayayya da kanku." },
          { objective: "O3", q: "Mai sayar da kaya ya ƙi farashinku. Wace amsa ce musaya?", options: ["\"To, zan biya cikakken farashi.\"", "\"Idan na yi oda ta watanni 12, za ku iya yi mini $4.20 a kowane kwali?\"", "\"Kuna damfarata.\"", "\"To, shi ke nan, ba komai.\""], answer: 1, why: "Tana bayar da abin da suke daraja a madadin abin da kuke so." }
        ]
      }
    },
    {
      name: "Babi na 2: Kammala yarjejeniya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Natsuwa lokacin matsi",
          minutes: 5,
          goal: "Gane dabarun matsi da amsawa cikin natsuwa.",
          text: [
            "Wasu mutane suna amfani da matsi don gaggauta ku: \"Wannan tayin zai ƙare yau,\" \"Ko ku karɓa ko ku bari,\" tayin farko mai ƙanƙanta sosai, dogon shiru, ko mutum ɗaya yana nuna tsauri yayin da ɗayan yana nuna abokantaka. Waɗannan dabaru suna aiki ta hanyar sa ku ji cewa dole ku yanke shawara yanzu.",
            "Kayan aikinku mafi kyau shi ne lokaci. Kusan koyaushe ba laifi ku ce: \"Na gode. Ina so in ɗauki lokaci har gobe don in yi tunani a kai.\" Ku rage saurin numfashinku, ku daidaita muryarku, ku duba tsarinku da kuka rubuta. Idan tayin yana ƙasa da iyakarku ta ƙarshe, kuna iya ƙin sa cikin ladabi: \"Na gode da shi, amma ba zai yi mini aiki ba.\"",
            "Ku ci gaba da girmamawa ko da su ba su yi ba. Ku yi magana game da matsalar, ba game da mutumin ba. Natsuwa da ladabi suna barin ƙofa a buɗe don tayi mafi kyau daga baya. Idan wani ya yi muku barazana, ko ya nemi ku yi wani abu na rashin gaskiya ko mai haɗari, ku tashi ku tafi."
          ],
          steps: ["Ku lura da matsin: wa'adi, ko-ku-karɓa-ko-ku-bari, tayi mai ƙanƙanta sosai.", "Ku yi numfashi ku rage sauri.", "Ku duba tsarinku da iyakarku ta ƙarshe.", "Ku nemi lokaci: \"Ina so har gobe don in yi tunani a kai.\"", "Ku ƙi cikin ladabi idan yana ƙasa da iyakarku ta ƙarshe."],
          words: [["Dabarar matsi (pressure tactic)", "wayo don gaggauta ku ku yanke shawara kafin ku shirya."], ["Tayi mai ƙanƙanta (lowball offer)", "tayin da ya yi ƙasa sosai da abin da ya dace."]],
          slides: [
            { title: "Dabarun matsi da aka saba gani", bullets: ["\"Wannan tayin zai ƙare yau\"", "\"Ko ku karɓa ko ku bari\"", "Tayin farko mai ƙanƙanta sosai"] },
            { title: "Kayan aikinku mafi kyau shi ne lokaci", bullets: ["\"Ina so har gobe don in yi tunani a kai.\"", "Ku yi numfashi ku duba tsarinku da kuka rubuta"] },
            { title: "Ku ƙi cikin ladabi", bullets: ["\"Na gode da shi, amma ba zai yi mini aiki ba.\"", "Ƙasa da iyakarku ta ƙarshe yana nufin a'a"] },
            { title: "Ku riƙe girmamawa", bullets: ["Matsalar, ba mutumin ba", "Barazana ko rashin gaskiya: ku tafi"] }
          ],
          tryIt: "Ku rubuta amsarku ta natsuwa ga kalaman matsi uku: \"Wannan tayin zai ƙare yau,\" \"Ko ku karɓa ko ku bari,\" da tayi mai ƙanƙanta sosai. Ku faɗi kowace amsa da babbar murya cikin murya mai daidaito.",
          youCanNow: "gane dabarun matsi da amsawa cikin natsuwa ta hanyar neman lokaci ko ƙi cikin ladabi.",
          quickCheck: [
            { objective: "O4", q: "Wace ce dabarar matsi?", options: ["\"Wannan tayin zai ƙare yau.\"", "\"Mene ne ya fi muhimmanci a gare ku?\"", "\"Bari in aiko muku cikakken bayani ta imel.\"", "\"Na gode da kuka gana da ni.\""], answer: 0, why: "Wa'adi kamar \"zai ƙare yau\" yana ƙoƙarin gaggauta ku ku yanke shawara yanzu." },
            { objective: "O4", q: "Ɗaya ɓangaren ya fara rashin ladabi a lokacin tattaunawa. Me ya kamata ku yi?", options: ["Ku mayar da rashin ladabi", "Ku amince da komai don a gama", "Ku ci gaba da girmamawa, ku yi magana game da matsalar, ba mutumin ba", "Ku rubuta game da su a intanet"], answer: 2, why: "Natsuwa da ladabi suna barin ƙofa a buɗe don tayi mafi kyau daga baya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rubuta yarjejeniya",
          minutes: 5,
          goal: "Tabbatar da yarjejeniya a rubuce da karanta ta kafin ku sa hannu.",
          text: [
            "Yarjejeniyar da aka faɗa da baki kawai tana da sauƙin mantawa ko a tuna ta daban. A ƙarshen kowane ciniki, ku taƙaita ta da baki: \"To, mun amince da $20 a kowace awa, farawa daga 3 ga Nuwamba, tare da sake duba albashi bayan kwanaki 90.\" Sannan ku rubuta ta.",
            "Don aiki, ku nemi wasiƙar tayin aiki a rubuce. Don yarjejeniyar kasuwanci, ku aika gajeren imel a ranar da ke jera kowane abin da kuka amince da shi: farashi, yawa, ranaku, sharuɗɗan biya da wanda zai yi me. Ku nemi su amsa don tabbatarwa.",
            "Ku karanta kowane shafi kafin ku sa hannu, ku tabbata ya yi daidai da abin da aka amince da shi. Kada ku sa hannu a kan wani abu da ke da wuraren da ba a cike ba, ko wanda ba ku fahimta ba. Don manyan kwangiloli ko masu tsawo, kamar yarjejeniyar NIL ko ta masu ɗaukar nauyi, haya, bashi ko haɗin gwiwar kasuwanci, ku sa lauya, wakili amintacce, cibiyar taimakon shari'a kyauta (legal aid) ko ofishin ƙa'idoji na makarantarku su fara duba ta. Mataimakin AI zai iya bayanin kalmomi masu wuya a kwangila, amma shi ba lauya ba ne, kuma kada ku saka bayanan sirri kamar lambar shaida ko ta banki a ciki."
          ],
          steps: ["Ku taƙaita yarjejeniyar da baki.", "Ku nemi tayi a rubuce ko ku aika imel na taƙaitawa a ranar.", "Ku jera farashi, yawa, ranaku, sharuɗɗa da wanda zai yi me.", "Ku nemi su amsa don tabbatarwa.", "Ku karanta kowane shafi kafin ku sa hannu; ku sa a duba manyan kwangiloli."],
          words: [["Wasiƙar tayin aiki (offer letter)", "tayin aiki a rubuce da ke faɗin albashi, ranar farawa da sauran sharuɗɗa."], ["Kwangila (contract)", "yarjejeniya a rubuce da doka za ta iya tilastawa."]],
          slides: [
            { title: "Ku maimaita ta", bullets: ["\"To, mun amince da $20 a kowace awa, farawa daga 3 ga Nuwamba,", "tare da sake duba albashi bayan kwanaki 90.\""] },
            { title: "Ku rubuta ta", bullets: ["Aiki: ku nemi wasiƙar tayin aiki", "Kasuwanci: ku aika imel na taƙaitawa a ranar", "Ku nemi su amsa don tabbatarwa"] },
            { title: "Kafin ku sa hannu", bullets: ["Ku karanta kowane shafi", "Ku duba ya yi daidai da abin da kuka amince da shi", "Kada ku taɓa sa hannu a takarda mara cikawa ko mara sarari"] },
            { title: "Manyan kwangiloli", bullets: ["NIL, masu ɗaukar nauyi, haya, bashi, haɗin gwiwa", "Ku sa lauya, wakili ko ofishin ƙa'idoji ya duba"] }
          ],
          tryIt: "Ku rubuta gajeren imel na taƙaitawa don yarjejeniya (ta gaske ko ta atisaye) da ke jera farashi ko albashi, ranaku, sharuɗɗa da wanda zai yi me, kuma ya ƙare da: \"Don Allah ku amsa don tabbatar da cewa wannan ya yi daidai da fahimtarku.\"",
          youCanNow: "taƙaita yarjejeniya, tabbatar da ita a rubuce, da sanin lokacin da za a sa a duba kwangila.",
          quickCheck: [
            { objective: "O5", q: "Mene ne shaida mafi kyau a rubuce na sabuwar yarjejeniyar aiki?", options: ["Saƙon tes daga aboki", "Wasiƙar tayin aiki", "Bayanan da kuka rubuta daga tunaninku", "Musabaha"], answer: 1, why: "Don aiki, darasin ya ce ku nemi wasiƙar tayin aiki a rubuce." },
            { objective: "O5", q: "An ba ku kwangila mai sashe mara cikawa da za a \"cike daga baya\". Me za ku yi?", options: ["Ku sa hannu da sauri don kada yarjejeniyar ta wuce", "Ku sa hannu ku yi fatan alheri", "Ku nemi AI ya sa muku hannu", "Kada ku sa hannu sai ta cika kuma kun fahimce ta"], answer: 3, why: "Kada ku taɓa sa hannu a kan wani abu mara cikawa ko wanda ba ku fahimta ba." }
          ]
        },
        {
          objectives: ["O6","O3"],
          title: "Cinikin albashi da farashi",
          minutes: 6,
          goal: "Bincika lamba mai adalci, ku yi ciniki kan tayin aiki ko farashi.",
          text: [
            "Albashi: ku yi bincike kafin ku yi magana. Littafin Occupational Outlook Handbook na hukumar ƙididdigar ƙwadago ta Amurka (US Bureau of Labor Statistics, bls.gov/ooh) yana jera albashin da aka saba biya na ɗaruruwan ayyuka. Tallace-tallacen aiki ma suna nuna iyakokin albashi. A California, masu ɗaukar aiki da ke da ma'aikata 15 ko fiye dole su saka iyakar albashi (pay scale) a tallace-tallacen aiki, kuma mai neman aiki zai iya neman iyakar albashin aikin da ya nema. Masu ɗaukar aiki a California kuma gaba ɗaya ba za su iya tambayar albashin da kuka karɓa a baya ba, amma za su iya tambayar albashin da kuke tsammani. Dokoki sun bambanta a kowace jiha, don haka ku duba ofishin ƙwadago na jiharku.",
            "Idan kun sami tayi: ku gode musu, ku nuna kuna farin ciki, kuma ku nemi lokaci idan kuna buƙata. Sannan ku mayar da tayi tare da dalili: \"Ina farin ciki da wannan aiki. Bisa ga iyakar albashin da aka saka da takardar shaidar tuƙa forklift ɗina, za ku iya yi mini $22?\" Idan albashi ba zai canja ba, ku yi musaya: ranar farawa, jadawali, horo ko sake dubawa bayan kwanaki 90.",
            "Farashi: idan kuna saye, ku sami farashi aƙalla uku daga masu sayarwa daban-daban don ku san farashin kasuwa. Idan kuna sayarwa, ku san kuɗin da kuke kashewa don kada ku taɓa amincewa da ƙasa da abin da ke riƙe kasuwancinku. Ku bayar da zaɓuɓɓuka maimakon rangwame: ƙaramin kunshi da ƙaramin kuɗi, ko farashi mai rahusa don oda mafi girma ko biya da wuri."
          ],
          steps: ["Ku bincika farashin kasuwa: bls.gov/ooh, tallace-tallacen aiki ko farashi uku.", "Ku saita burinku da iyakarku ta ƙarshe daga wannan bincike.", "Ku gode musu ku nuna sha'awa.", "Ku mayar da tayi da lamba da dalili.", "Idan kuɗi ba zai canja ba, ku yi musayar wasu sharuɗɗa.", "Ku tabbatar da yarjejeniyar ƙarshe a rubuce."],
          words: [["Iyakar albashi (pay scale)", "albashin shekara ko na awa daga mafi ƙanƙanta zuwa mafi yawa da mai ɗaukar aiki ke tsammanin biya don wani aiki."], ["Mayar da tayi (counteroffer)", "amsarku ga tayi, kuna neman sharuɗɗa daban."], ["Farashi daga mai sayarwa (quote)", "farashin da wani ya bayar don aiki ko kaya."]],
          sources: [
            { name: "Kwamishinan Ƙwadago na California: tambayoyin Equal Pay Act (iyakar albashi, tarihin albashi)", url: "https://www.dir.ca.gov/dlse/California_Equal_Pay_Act.htm" },
            { name: "US Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }
          ],
          slides: [
            { title: "Ku fara bincika albashi", bullets: ["bls.gov/ooh yana jera albashin da aka saba biya na ayyuka da yawa", "Tallace-tallacen aiki suna nuna iyakoki", "Dokoki sun bambanta a kowace jiha: ku duba taku"] },
            { title: "Dokokin California", bullets: ["Ma'aikata 15 ko fiye: iyakar albashi a tallace-tallacen aiki", "Masu neman aiki za su iya neman iyakar albashin aikin", "Gaba ɗaya ba tambaya game da albashinku na baya"] },
            { title: "Mayar da tayin aiki", bullets: ["Ku gode musu ku nuna sha'awa", "\"Bisa ga iyakar albashin da takardar shaidata, za ku iya yi mini $22?\"", "Ba zai canja ba? Ku yi musayar jadawali, horo ko dubawa bayan kwanaki 90"] },
            { title: "Farashi", bullets: ["Saye: ku sami farashi uku", "Sayarwa: ku san kuɗin da kuke kashewa", "Ku bayar da zaɓuɓɓuka, ba rangwame kawai ba"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarinku mai shafi ɗaya don ciniki na gaske kan albashi ko farashi ta amfani da bincike na gaske. Ku yi wasan kwaikwayo da aboki da zai yi amfani da dabarar matsi ɗaya, sannan ku rubuta imel na biyo baya da ke tabbatar da yarjejeniyar.",
          youCanNow: "bincika lamba mai adalci, mayar da tayin aiki ko farashi tare da dalili, da kammala yarjejeniya a rubuce.",
          quickCheck: [
            { objective: "O6", q: "A ina ma'aikata a Amurka za su iya duba albashin da aka saba biya na ayyuka da yawa?", options: ["Ƙuri'ar jin ra'ayi a kafofin sada zumunta", "Littafin BLS Occupational Outlook Handbook a bls.gov/ooh", "Kowane dandalin tattaunawa a intanet", "Masu gasa da mai ɗaukar aikin"], answer: 1, why: "Littafin BLS Occupational Outlook Handbook yana jera albashin da aka saba biya na ɗaruruwan ayyuka." },
            { objective: "O6", q: "Abokin ciniki yana neman rangwame. Wane zaɓi ne mai kyau da za ku bayar?", options: ["Farashi mai rahusa don oda mafi girma ko biya da wuri", "Rabin farashi ba tare da komai a madadi ba", "Farashi ƙasa da kuɗin da kuke kashewa", "Ƙin magana game da farashi"], answer: 0, why: "Bayar da zaɓuɓɓuka maimakon rangwame kawai yana kare kuɗin da kuke kashewa yayin da yake taimakon abokin ciniki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kammala yarjejeniya",
        questions: [
          { objective: "O4", q: "Wani ya ce \"Wannan tayin zai ƙare yau.\" Mece ce amsa ta natsuwa?", options: ["Ku sa hannu nan take", "Ku yi ihu cewa ba adalci ba ne", "\"Na gode. Ina so har gobe don in yi tunani a kai.\"", "Ku rage buƙatarku da rabi"], answer: 2, why: "Neman lokaci yana cire matsin." },
          { objective: "O4", q: "Tayin yana ƙasa da iyakarku ta ƙarshe. Ya kamata ku:", options: ["Ƙi cikin ladabi", "Karɓe shi duk da haka", "Zage su", "Yi watsi da su"], answer: 0, why: "Ƙasa da iyakarku ta ƙarshe yana nufin a'a, da aka faɗa cikin girmamawa." },
          { objective: "O5", q: "Me ya kamata ku yi nan da nan bayan kun amince da yarjejeniya da mai sayar da kaya ta waya?", options: ["Babu komai; za ku tuna", "Ku saka ta a kafofin sada zumunta", "Ku jira wata ɗaya", "Ku aika imel a ranar da ke jera kowane abin da aka amince da shi"], answer: 3, why: "Taƙaitawa a rubuce tana hana a tuna abubuwa daban daga baya." },
          { objective: "O5", q: "An ba ku yarjejeniyar NIL mai dogon kwangila. Me ya fi hikima?", options: ["Ku sa hannu yau kafin ta ɓace", "Ku sa lauya, wakili amintacce ko ofishin ƙa'idoji ya fara duba ta", "Ku bar mataimakin AI ya sa muku hannu", "Ku sa hannu ba tare da karantawa ba domin ta yi tsawo"], answer: 1, why: "Ya kamata a duba manyan kwangiloli kafin a sa hannu." },
          { objective: "O6", q: "A California, me dole masu ɗaukar aiki da ke da ma'aikata 15 ko fiye su saka a tallace-tallacen aiki?", options: ["Iyakar albashi", "Lambar wayar shugaba", "Albashinku na baya", "Babu komai game da albashi"], answer: 0, why: "California tana buƙatar iyakar albashi a tallace-tallacen aiki ga masu ɗaukar aiki da ke da ma'aikata 15 ko fiye." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Dabarun Ciniki da Yarjejeniya",
    questions: [
      { objective: "O1", q: "Yawancin nasarar ciniki ana samun ta:", options: ["Ta hanyar yin magana da ƙarfi", "Kafin a fara, ta hanyar shiryawa", "A daƙiƙa ta ƙarshe", "Ta sa'a"], answer: 1, why: "Shiryawa tana saita burinku, iyakokinku da zaɓuɓɓukanku." },
      { objective: "O1", q: "Wane buri ne ya fi kyau don tsarin ciniki?", options: ["\"Ƙarin kuɗi\"", "\"Yarjejeniya mai kyau\"", "\"Duk abin da suka bayar\"", "\"$19 a kowace awa da hutun ranar Asabar\""], answer: 3, why: "Buri daidai mai lambobi yana jagorantar tattaunawar." },
      { objective: "O1", q: "Shirinku na B shi ne:", options: ["Abin da za ku yi idan ba a yi yarjejeniya ba", "Tayinku na farko", "Iyakar ƙarshe ta ɗaya ɓangaren", "Kwangila ta biyu"], answer: 0, why: "Shirin B shi ne zaɓinku mafi kyau idan babu yarjejeniya." },
      { objective: "O1", q: "Me yasa za ku yi tunani game da buƙatun ɗaya ɓangaren?", options: ["Don yaudarar su", "Don ku sallama da sauri", "Don samun abubuwan da za ku iya bayarwa da ke da muhimmanci a gare su", "Ba shi da muhimmanci"], answer: 2, why: "Sanin buƙatunsu yana nuna abin da za a musaya." },
      { objective: "O1", q: "Mai ɗaukar nauyi ya fi yiwuwa ya buƙaci:", options: ["Kalmar sirrin bankinku", "Saƙonninku su kai ga abokan cinikinsa", "Ku yi aiki kyauta", "Adireshin gidanku"], answer: 1, why: "Masu ɗaukar nauyi suna biya don kaiwa ga mutanen da za su iya saye." },
      { objective: "O2", q: "Me yasa za ku da kanku ku yi buƙata ta farko mai ma'ana?", options: ["Lambar farko sau da yawa tana tsara dukan tattaunawar", "Rashin ladabi ne a jira", "Tana gama tattaunawa da sauri", "Doka tana buƙatar haka"], answer: 0, why: "Lambar farko da aka faɗa tana aiki kamar anga." },
      { objective: "O2", q: "Buƙatarku ta farko ya kamata ta kasance:", options: ["Ƙasa sosai da burinku", "Sirri", "Daidai da iyakarku ta ƙarshe", "Ta ɗan wuce burinku, tare da dalili"], answer: 3, why: "Tana barin wurin sassautawa kuma tana da sauƙin bayani." },
      { objective: "O3", q: "Wace tambaya ce ke taimaka muku sanin abin da za ku musaya?", options: ["\"Me yasa kuke da rowa haka?\"", "\"Zan iya ɗauka kawai?\"", "\"Mene ne ya fi muhimmanci a gare ku a wannan yarjejeniya?\"", "\"Wannan ita ce amsarku ta ƙarshe?\""], answer: 2, why: "Tambayoyi masu buɗaɗɗiyar amsa suna bayyana buƙatun ɗaya ɓangaren." },
      { objective: "O3", q: "Kayan aikin \"Idan za ku iya..., to ni ma zan iya...\" yana taimaka muku:", options: ["Bayar da abubuwa kyauta", "Musaya maimakon sallamawa", "Gama tattaunawa", "Guje wa saurare"], answer: 1, why: "Yana haɗa kowane rangwame da wani abu a madadinsa." },
      { objective: "O3", q: "Wanne ne abu ban da kuɗi da za ku iya ciniki a kai don aiki?", options: ["Albashin abokan aikinku", "Takardar harajin kamfanin", "Ranar farawa ko sake duba albashi bayan kwanaki 90", "Ba a yarda da wani abu ba"], answer: 2, why: "Jadawali, ranar farawa, horo da sake dubawa duka ana iya ciniki a kansu." },
      { objective: "O3", q: "Abokin ciniki yana son farashi mai rahusa. Amsa mai kyau mai zaɓi ita ce:", options: ["\"Idan kun biya kafin aiki, zan rage kashi 5 cikin ɗari.\"", "\"To, rabin farashi.\"", "\"Babu rangwame har abada, sai an jima.\"", "\"Zan yi asara amma to.\""], answer: 0, why: "Tana musayar rangwamen da wani abu da kuke daraja." },
      { objective: "O4", q: "\"Ko ku karɓa ko ku bari\" misali ne na:", options: ["Shirin B", "Dabarar matsi", "Tayi a rubuce", "Mayar da tayi"], answer: 1, why: "Tana ƙoƙarin gaggauta ku ku yanke shawara." },
      { objective: "O4", q: "Kayan aikinku mafi kyau game da matsi shi ne:", options: ["Ihu", "Sa hannu da sauri", "Ƙarya", "Lokaci: neman lokacin yin tunani a kai"], answer: 3, why: "Lokaci yana ba ku damar duba tsarinku da kwantar da hankali." },
      { objective: "O4", q: "A lokacin tattaunawa mai zafi, ya fi kyau:", options: ["Kai wa mutumin hari", "Yin magana game da matsalar, ba mutumin ba", "Tafiya ba tare da cewa komai ba", "Ɗaga muryarku"], answer: 1, why: "Girmamawa tana barin ƙofa a buɗe don yarjejeniya mafi kyau." },
      { objective: "O5", q: "Wani yana neman ku sa hannu a takarda mara cikawa ku \"cike ta daga baya\". Ya kamata ku:", options: ["Sa hannu", "Sa hannu a shafin farko kawai", "Ƙi; kada ku taɓa sa hannu a takarda mara cikawa ko mara sarari", "Nemi AI ya sa hannu"], answer: 2, why: "Ana iya cike takarda mara cikawa da komai." },
      { objective: "O5", q: "Don sabon aiki, shaida mafi kyau a rubuce ta yarjejeniyar ita ce:", options: ["Wasiƙar tayin aiki", "Saƙon tes daga aboki", "Tunaninku", "Rubutu a kafofin sada zumunta"], answer: 0, why: "Wasiƙar tayin aiki tana faɗin albashi, ranar farawa da sharuɗɗa." },
      { objective: "O6", q: "A ina ma'aikata a Amurka za su iya duba albashin da aka saba biya na ayyuka da yawa?", options: ["Wani dandalin tattaunawa kawai", "Tallar da ke tasowa (pop-up)", "Daga mai ɗaukar aikin kawai", "Littafin BLS Occupational Outlook Handbook a bls.gov/ooh"], answer: 3, why: "Littafin BLS yana jera albashin da aka saba biya na ɗaruruwan ayyuka." },
      { objective: "O6", q: "A California, mai ɗaukar aiki zai iya tambayar albashinku na baya gaba ɗaya?", options: ["Ee, koyaushe", "Gaba ɗaya a'a, amma za su iya tambayar albashin da kuke tsammani", "Ta imel kawai", "Sai idan shekarunku ba su kai 25 ba"], answer: 1, why: "California gaba ɗaya ta hana neman tarihin albashi; ana iya tambayar abin da kuke tsammani." },
      { objective: "O6", q: "Kafin ku sayi kaya don kasuwancinku, mataki mai hikima shi ne:", options: ["Karɓar farashin farko", "Neman mai sayarwa ya zaɓa muku", "Samun farashi aƙalla uku", "Kada ku taɓa kwatantawa"], answer: 2, why: "Farashi da yawa suna nuna farashin kasuwa." },
      { objective: "O6", q: "Idan kuna sayarwa, me yasa dole ku san kuɗin da kuke kashewa?", options: ["Don kada ku taɓa amincewa da farashin da zai sa ku yi asara", "Don nuna wa abokan ciniki takardun kuɗinku", "Ba shi da muhimmanci", "Don ƙara farashi ga abokai"], answer: 0, why: "Sanin kuɗin da kuke kashewa yana saita iyakar farashinku ta ƙarshe." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      5,
      8,
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tsari a takarda",
        objective: "O1",
        notYet: "Tsarin ba shi da buri, iyaka ta ƙarshe, shirin B ko buƙatun ɗaya ɓangaren.",
        meets: "Dukan sassa huɗu an rubuta su, daidai, kuma masu yiwuwa ne.",
        exceeds: "An haɗa buƙatun ɗaya ɓangaren da abubuwan da za a iya bayarwa gare su."
      },
      {
        name: "An bincika lamba mai adalci",
        objective: "O6",
        notYet: "Burin hasashe ne ba tare da majiya ba.",
        meets: "Burin ya dogara ne da aƙalla majiya ɗaya amintacciya, kamar bayanan albashi, tallace-tallacen aiki ko farashi uku.",
        exceeds: "Ya ambaci majiyar, kuma don sayarwa, ya nuna cewa farashin ya rufe kuɗin da ake kashewa."
      },
      {
        name: "Buƙata a sarari",
        objective: "O2",
        notYet: "Babu lamba, ko lamba ba tare da dalili ba.",
        meets: "Buƙata ta farko a sarari da ta ɗan wuce burin, tare da dalili, sannan shiru.",
        exceeds: "Buƙatar ta kuma haɗa da tambaya don sanin abin da ke da muhimmanci ga ɗaya ɓangaren."
      },
      {
        name: "Musaya, ba sallamawa ba",
        objective: "O3",
        notYet: "An rage lambar lokacin da aka matsa, ba tare da komai a madadi ba.",
        meets: "An yi amfani da aƙalla musaya ɗaya ta \"Idan za ku iya..., to ni ma zan iya...\" a wasan kwaikwayon.",
        exceeds: "An bayar da musaya biyu ko fiye ban da kuɗi da ba su da tsada amma suna da muhimmanci ga ɗaya ɓangaren."
      },
      {
        name: "Natsuwa lokacin matsi",
        objective: "O4",
        notYet: "An amince nan take ko an ji haushi lokacin da aka matsa.",
        meets: "An nemi lokaci ko an ƙi cikin ladabi, kuma an ci gaba da girmamawa.",
        exceeds: "Daga baya an faɗi sunan dabarar matsin da yadda aka magance ta."
      },
      {
        name: "Yarjejeniya a rubuce",
        objective: "O5",
        notYet: "Babu imel na biyo baya, ko ya bar wasu abubuwan da aka amince da su.",
        meets: "Imel ɗin yana jera kowane abin da aka amince da shi (farashi ko albashi, ranaku, sharuɗɗa) kuma yana neman su tabbatar.",
        exceeds: "Imel ɗin gajere ne, mai ladabi, kuma a shirye yake a aika a ranar."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun nemi ƙarin albashi, farashi mafi kyau ko sharuɗɗa mafi kyau cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun sami ƙarin albashi, tayi mafi kyau ko farashi mafi kyau daga mai sayar da kaya bayan ciniki",
      "Masu koyo da suka tabbatar da yarjejeniya a rubuce ko suka sa aka duba babbar kwangila kafin su sa hannu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda da alƙalami, ko waya ko kwamfuta, don tsarin mai shafi ɗaya",
      "Intanet don bincika albashi ko farashi, kamar bls.gov/ooh ko tallace-tallacen aiki",
      "Aboki ko abokin atisaye don wasan kwaikwayo",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku haɗa masu koyo bibbiyu don wasan kwaikwayo, ku ba wanda zai ƙi yarda kati mai dabarar matsi ɗaya da zai yi amfani da ita.",
      "Ku yi amfani da misalan da suka dace da rukunin: albashin awa ga masu neman aiki, yarjejeniyar NIL da ta masu ɗaukar nauyi ga 'yan wasa, farashin masu sayar da kaya ga masu kasuwanci.",
      "Ku tunatar da ɗalibai 'yan wasa su duba yarjejeniyar NIL da ofishin ƙa'idoji na makarantarsu, kuma duk mai babbar kwangila ya sa a duba ta.",
      "Dokokin albashi sun bambanta a kowace jiha da ƙasa; ku tura masu koyo zuwa ofishin ƙwadago na wurinsu maimakon ba da shawarar shari'a.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
