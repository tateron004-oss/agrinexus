"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-emerging-economies.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "veterans-emerging-economies-ha",
  lang: "ha",
  translationOf: "veterans-emerging-economies",
  category: "Veterans (military)",
  name: "Kasuwanci a Ƙasashe Masu Tasowa",
  skills: "Bayanin mene ne ƙasa mai tasowa, Mayar da ƙwarewar soja zuwa ra'ayin kasuwanci, Binciken kasuwa da AI da jagororin hukuma, Rubuta tsarin kasuwanci a shafi ɗaya, Shirin kuɗaɗe da haɗari, Neman taimakon kasuwanci na hukuma",
  outcome: "rubuta tsarin kasuwanci a shafi ɗaya don ƙaramin kasuwanci a ƙasa mai tasowa, ko mai sayar wa mutanen can, wanda aka gina kan ƙwarewarku ta soja, tare da shirin bincike da ke tabbatar da kasuwar da dokoki a majiyoyin hukuma.",
  about: [
    "Wannan kwas ɗin na tsofaffin sojoji ne da ke son fara kasuwanci a ƙasar da tattalin arzikinta ke girma da sauri, kamar ƙasashe a Afirka, Kudu da Kudu maso Gabashin Asiya ko Latin Amurka, ko kuma sayar wa abokan ciniki a can daga Amurka. Tsofaffin sojoji da yawa sun riga sun san waɗannan wurare daga aikin soja, kuma sun fahimci jigilar kaya, tsaro, horarwa da aiki da mutanen al'adu daban-daban.",
    "Za ku koyi abin da ya bambanta ƙasashe masu tasowa, ku mayar da ƙwarewarku ta soja zuwa ra'ayin kasuwanci da ke magance matsala ta gaske, ku binciki kasuwa da mataimakin AI kyauta da jagororin gwamnati na hukuma, sannan ku rubuta tsarin kasuwanci a shafi ɗaya. Za ku yi shirin kuɗi, haɗari da doka, kuma ku nemo taimakon hukuma kyauta kamar Boots to Business na SBA.",
    "Wannan kwas ɗin yana koya muku yadda ake shiri da gwada ra'ayi; ba shawarar doka, haraji ko zuba jari ba ne. Ku tabbatar da dokoki a majiyoyin hukuma da ƙwararru na gida masu cancanta. Kowane darasi yana ɗaukar kusan minti biyar, akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta tsarin kasuwanci a shafi ɗaya don ra'ayin kasuwanci ɗaya a wata ƙasa mai tasowa da kuka ambata: abokin ciniki, matsalar, maganinku da yadda ƙwarewarku ta soja ta dace, yadda za ku kai ga abokan ciniki, yadda za ku sami kuɗi, manyan kuɗaɗen da za ku kashe, da manyan haɗarurruka uku. Ku ƙara shirin bincike da ke ambaton majiyoyin hukuma da za ku duba (Country Commercial Guide na ƙasar da ofishinta na rajistar kasuwanci) da shirin taimako na hukuma kyauta ɗaya da za ku tuntuɓa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji da ke son fara kasuwanci a ƙasar da tattalin arzikinta ke girma da sauri (Afirka, Kudu da Kudu maso Gabashin Asiya, Latin Amurka) ko sayar wa abokan ciniki a can daga Amurka. Da yawa sun san waɗannan yankuna daga aikin soja.",
    startingPoint: "Suna zuwa da ƙwarewa a jigilar kaya, tsaro, horarwa da aiki da al'adu daban-daban, kuma suna iya amfani da kwamfuta ko wayar zamani. Yawancinsu ba su taɓa rubuta tsarin kasuwanci ko binciken kasuwar wata ƙasa da dokokinta ba.",
    gap: "Ra'ayoyin kasuwanci da aka gina kan hasashe suna iya cinye ajiyar kuɗi da sauri, kuma kasuwannin ƙasashen waje suna da nasu dokoki, haɗarurruka da dokokin yaƙi da cin hanci. Masu koyo suna buƙatar mayar da ƙwarewar soja zuwa ra'ayin kasuwanci a sarari, rubuta tsari a shafi ɗaya, da shirin tabbatar da kasuwar da dokoki a majiyoyin hukuma kafin su kashe kuɗi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ba a ɗauka cewa suna da ilimin kasuwanci ba",
      "Na'urori: kwamfuta ko wayar zamani mai intanet da mataimakin AI kyauta",
      "Bayanan da ke canjawa (matakan rajista, haraji, lasisi, kuɗin ƙasa) ana tabbatar da su a majiyoyin hukuma kamar Country Commercial Guides na trade.gov da ofishin rajistar kasuwanci na ƙasar",
      "Iyakokin doka: babu cin hanci ko kaɗan (dokar FCPA ta Amurka); tambayoyin kwangila, haraji da rajista ana kai su ga lauya ko akanta na gida mai cancanta",
      "Lokaci: darussa na kusan minti 5; wannan kwas ɗin yana shirya kasuwanci ne, ba ya fara shi"
    ],
    prerequisites: "Babu. Masu koyo da suke sababbi ga mataimakan AI za su iya fara ɗaukar kwas ɗin \"Gabatarwa ga AI da Makomar Ma'aikata\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don wata ƙasa mai tasowa ɗaya da kuka zaɓa", action: "bayyana mene ne ƙasa mai tasowa da ambaton dama biyu da ƙalubale biyu a can", standard: "kuna yi wa kowane bayani da ke buƙatar tabbatarwa alama" },
    { id: "O2", condition: "Idan aka yi la'akari da ƙwarewarku ta soja", action: "rubuta ra'ayin kasuwanci a jimla ɗaya da ya haɗa ƙwarewa ɗaya da matsalar gida ta gaske", standard: "kuna ambaton hidimar, abokin ciniki, wurin da yadda suke biya" },
    { id: "O3", condition: "Don ra'ayin kasuwancinku", action: "shirya binciken kasuwa da AI da tabbatar da muhimman bayanai a Country Commercial Guide na hukuma da ofishin rajistar kasuwanci", standard: "kuna amsa aƙalla tambayoyin bincike biyu daga majiyoyin hukuma" },
    { id: "O4", condition: "Ta amfani da ra'ayinku na jimla ɗaya", action: "rubuta tsarin kasuwanci a shafi ɗaya da taimakon AI", standard: "da dukkan sassa bakwai, kuma kowane hasashe yana da alamar \"a gwada\"" },
    { id: "O5", condition: "Don tsarin kasuwancinku", action: "jera kuɗaɗen farawa da manyan haɗarurruka uku tare da hanya ɗaya ta rage kowanne", standard: "da farashi daga ƙididdiga ta gaske, kuma babu shirin da ya dogara da cin hanci" },
    { id: "O6", condition: "Kafin ku kashe kuɗi na gaske", action: "shirya ƙaramin gwaji mai araha na ra'ayinku da zaɓar shirin taimako na hukuma ɗaya da za ku tuntuɓa", standard: "da sunan shirin da ranar da za ku tuntuɓe shi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Nemo dama",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne ƙasa mai tasowa",
          minutes: 5,
          goal: "Bayyana mene ne ƙasa mai tasowa, da ambaton dama biyu da ƙalubale biyu.",
          text: [
            "Ƙasa mai tasowa (emerging economy) ƙasa ce da tattalin arzikinta ke girma da canjawa da sauri, tana tafiya daga noma ko kayan ɗanye zuwa masana'antu, hidimomi da fasaha. Misalan da ake yawan ambata sun haɗa da Kenya, Najeriya, Ghana, Indiya, Vietnam, Indonesia da Brazil.",
            "Dama: yawan matasa da yawan jama'a da ke ƙaruwa; saurin yaɗuwar waya da intanet; kuɗin waya (mobile money), kamar M-Pesa a Kenya, da ke bar mutane su biya da waya; da gibi na gaske a hidimomi kamar wutar lantarki, sufuri, ajiyar sanyi, horarwa da tsaro.",
            "Ƙalubale: dokokin da ke canjawa, takardun da ke jinkiri, hawa da saukar darajar kuɗi, raunanan hanyoyi ko wutar lantarki a wasu wurare, da haɗarin cin hanci. Nasara ta dogara da abokan hulɗa na gida, haƙuri, da tabbatar da bayanai a majiyoyin hukuma."
          ],
          words: [["Ƙasa mai tasowa (emerging economy)", "ƙasar da tattalin arzikinta ke girma da canjawa da sauri."], ["Kuɗin waya (mobile money)", "hanyar aika, karɓa da ajiye kuɗi a waya, sau da yawa ba tare da asusun banki ba."], ["Hawa da saukar darajar kuɗi", "lokacin da darajar kuɗin wata ƙasa ta tashi ko ta faɗi idan aka kwatanta da kuɗaɗen wasu ƙasashe."]],
          slides: [
            { title: "Ƙasa mai tasowa", bullets: ["Tana girma da canjawa da sauri", "Misalai: Kenya, Najeriya, Ghana, Indiya, Vietnam, Brazil"] },
            { title: "Dama", bullets: ["Yawan matasa da jama'a da ke ƙaruwa", "Saurin yaɗuwar waya da kuɗin waya", "Gibi a wutar lantarki, sufuri, ajiya, horarwa"] },
            { title: "Ƙalubale", bullets: ["Dokokin da ke canjawa da takardu masu jinkiri", "Hawa da saukar darajar kuɗi", "Haɗarin cin hanci: abokan hulɗa na gida da bayanai na gaskiya suna da muhimmanci"] }
          ],
          tryIt: "Ku zaɓi ƙasa mai tasowa ɗaya da kuka sani ko kuke son sani. Ku tambayi mataimakin AI: \"Da kalmomi masu sauƙi, ka ambaci buƙatu uku da ke ƙaruwa da ƙalubalen kasuwanci uku a [ƙasa].\" Ku yi wa kowane bayani da za ku tabbatar alama.",
          youCanNow: "bayyana mene ne ƙasa mai tasowa da ambaton damarta da ƙalubalenta.",
          quickCheck: [
            { objective: "O1", q: "Me ke sa ƙasa ta zama ƙasa mai tasowa?", options: ["Ba ta da kasuwanci ko ɗaya tukuna", "Tattalin arzikinta yana girma da canjawa da sauri", "Mai kawai take sayarwa", "Tana da dokoki iri ɗaya da na Amurka"], answer: 1, why: "Ƙasashe masu tasowa suna girma da canjawa da sauri, wanda ke kawo dama da ƙalubale." },
            { objective: "O1", q: "AI ya jera ƙalubalen kasuwanci uku a ƙasar da kuka zaɓa. Me za ku yi?", options: ["Ku ɗauke su a matsayin tabbatattun gaskiya", "Ku goge amsar", "Ku zaɓi wata ƙasa nan take", "Ku yi wa kowane bayani da za ku tabbatar a majiyar hukuma alama"], answer: 3, why: "Amsoshin AI game da wasu ƙasashe suna iya zama ba daidai ba ko tsofaffi, don haka kuna yi wa bayanan da za a tabbatar alama." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mayar da ƙwarewar soja zuwa ra'ayin kasuwanci",
          minutes: 5,
          goal: "Haɗa ɗaya daga cikin ƙwarewarku ta soja da matsalar gida ta gaske, ku rubuta ra'ayin kasuwanci a jimla ɗaya.",
          text: [
            "Ra'ayoyi mafi kyau suna magance matsala ta gaske da mutane za su biya don a gyara. Ku fara da abin da kuka iya yi. Ƙwarewar soja da ta dace da kasuwanni masu tasowa sun haɗa da jigilar kaya da samar da kayayyaki (motsawa da ajiye kaya), gyaran wutar lantarki da janareta, gyaran motoci da injuna, shirin tsaro, sadarwa da IT (fasahar sadarwa), horarwa kan taimakon lafiya, da koyarwa da horar da mutane.",
            "Sannan ku haɗa ƙwarewa da matsala. Misali: wani tsohon jami'in jigilar kaya na Army (NCO, ƙaramin hafsa) ya ga cewa ƙananan manoma suna rasa amfanin gona kafin ya kai kasuwa. Ra'ayi: \"Hidimar ajiyar sanyi da ɗaukar kaya ta haɗin gwiwa don ƙananan manoma kusa da Nakuru, ana biya kowane akwati ta kuɗin waya.\"",
            "Ku nemi AI ya ba ku shawarwari, amma ku ne kuke zaɓa. Prompt: \"Na yi shekaru 8 ina aikin lantarki a Navy. Ka jera ra'ayoyin ƙananan kasuwanci 10 a Ghana da ke amfani da wannan ƙwarewa don magance matsalar gida. Layi ɗaya kowanne.\" Ku zaɓi wanda za ku iya gwadawa da ɗan kuɗi."
          ],
          steps: ["Ku jera ƙwarewar soja uku da kuka ƙware a kai.", "Ku jera matsaloli na gaske uku a ƙasar da kuka zaɓa.", "Ku nemi AI ya ba da ra'ayoyin da suka haɗa su.", "Ku zaɓi ra'ayi ɗaya da za ku iya gwadawa da ɗan kuɗi.", "Ku rubuta shi a jimla ɗaya: hidima, abokin ciniki, wuri, yadda suke biya."],
          words: [["Ra'ayin kasuwanci", "kaya ko hidima da ke magance matsala ga abokin ciniki da zai biya."], ["Ƙaramin manomi (smallholder farmer)", "manomi mai ƙaramar gona, abin da aka saba gani a ƙasashe masu tasowa da yawa."]],
          slides: [
            { title: "Ƙwarewar soja da ta dace", bullets: ["Jigilar kaya, samar da kayayyaki da ajiya", "Wutar lantarki, janareta, motoci", "Tsaro, sadarwa, horarwa"] },
            { title: "Ƙwarewa + matsala ta gaske = ra'ayi", bullets: ["Jami'in jigilar kaya ya ga manoma suna rasa amfanin gona", "Ra'ayi: ajiyar sanyi ta haɗin gwiwa, ana biya kowane akwati"] },
            { title: "Ku rubuta shi a jimla ɗaya", bullets: ["Hidima", "Abokin ciniki", "Wuri", "Yadda suke biya"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya ba ku ra'ayoyin kasuwanci goma da ke amfani da ƙwarewarku ta soja a ƙasar da kuka zaɓa. Ku zaɓi ɗaya ku rubuta shi a jimla ɗaya: hidima, abokin ciniki, wuri, yadda suke biya.",
          youCanNow: "mayar da ƙwarewar soja zuwa ra'ayin kasuwanci a jimla ɗaya da ke magance matsalar gida.",
          quickCheck: [
            { objective: "O2", q: "Me ke sa ra'ayin kasuwanci ya yi ƙarfi?", options: ["Yana magance matsala ta gaske da mutane za su biya don a gyara", "Yana kwaikwayon kamfani mafi girma", "Ba ya buƙatar abokan ciniki", "Yana burge ku"], answer: 0, why: "Kasuwanci yana ɗorewa idan yana gyara matsala ta gaske da abokan ciniki za su biya." },
            { objective: "O2", q: "AI ya ba ku ra'ayoyin kasuwanci goma. Me za ku yi?", options: ["Ku fara dukkan goma", "Ku bar AI ya zaɓi ɗaya", "Ku zaɓi ɗaya da ke amfani da ƙwarewarku ku rubuta shi a jimla ɗaya", "Ku zaɓi wanda ke da manyan lambobi"], answer: 2, why: "Ku ne kuke zaɓar ra'ayin da ya dace da ƙwarewarku ku rubuta shi a sarari: hidima, abokin ciniki, wuri, yadda suke biya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Binciken kasuwa da AI da jagororin hukuma",
          minutes: 6,
          goal: "Yi amfani da AI don shirya binciken kasuwa, ku tabbatar da muhimman bayanai a Country Commercial Guide na hukuma.",
          text: [
            "AI zai iya taimaka muku shirya bincike da jera tambayoyi, amma yana iya yin kuskure ko ya ba da tsofaffin bayanai game da kasuwanni da dokokin ƙasashen waje. Ku yi amfani da shi don daftari; ku yi amfani da majiyoyin hukuma don tabbatarwa.",
            "International Trade Administration (Hukumar Kasuwancin Ƙasa da Ƙasa) ta Ma'aikatar Kasuwanci ta Amurka tana wallafa Country Commercial Guides (jagororin kasuwancin ƙasashe), waɗanda ma'aikatan Ofishin Jakadancin Amurka ke shiryawa, kuma suna bayanin yadda kasuwa ke aiki, dama, dokoki da al'adun kasuwanci. U.S. Commercial Service ɗinta kuma tana taimaka wa kasuwancin Amurka da ke sayarwa a ƙasashen waje da binciken kasuwa da haɗa su da mutane.",
            "Don fara kamfani a cikin ƙasar kanta, ku nemo ofishinta na hukuma na rajistar kasuwanci. A Kenya shi ne Business Registration Service (brs.go.ke); a Najeriya shi ne Corporate Affairs Commission (cac.gov.ng). Ku karanta matakansu da kuɗaɗensu na yanzu da kanku, kuma ku yi magana da abokan ciniki biyar masu yiwuwa kafin ku kashe kuɗi na gaske."
          ],
          steps: ["Ku tambayi AI: \"Waɗanne tambayoyi 10 ya kamata in amsa kafin in fara [ra'ayi] a [ƙasa]?\"", "Ku karanta Country Commercial Guide na ƙasar a trade.gov.", "Ku nemo ofishin hukuma na rajistar kasuwanci na ƙasar ku karanta matakansa na yanzu.", "Ku yi magana da abokan ciniki biyar masu yiwuwa game da matsalar.", "Ku rubuta abin da kuka tabbatar da abin da har yanzu ba a sani ba."],
          words: [["Country Commercial Guide", "rahoton gwamnatin Amurka game da yadda kasuwanci ke aiki a wata ƙasar waje."], ["Ofishin rajistar kasuwanci (business registry)", "ofishin gwamnati na hukuma inda ake rajistar kamfanoni da sunayen kasuwanci."], ["Binciken kasuwa", "gano su waye abokan cinikinku, me suke buƙata da nawa za su biya."]],
          slides: [
            { title: "AI yana daftari, majiyoyin hukuma suna tabbatarwa", bullets: ["AI: shirya tambayoyi da bincike", "Jagororin hukuma: tabbatar da bayanai"] },
            { title: "Country Commercial Guides", bullets: ["Daga International Trade Administration", "Ma'aikatan Ofishin Jakadancin Amurka ne ke shiryawa", "Kasuwa, dokoki, dama, al'adu"] },
            { title: "Fara kasuwanci a cikin ƙasar", bullets: ["Kenya: Business Registration Service", "Najeriya: Corporate Affairs Commission", "Ku karanta matakai da kuɗaɗe na yanzu da kanku"] },
            { title: "Ku yi magana da abokan ciniki", bullets: ["Tattaunawa biyar ta gaske tukuna", "Kafin ku kashe kuɗi na gaske"] }
          ],
          sources: [
            { name: "International Trade Administration: Country Commercial Guides", url: "https://www.trade.gov/country-commercial-guides" },
            { name: "International Trade Administration: Export solutions (U.S. Commercial Service)", url: "https://www.trade.gov/export-solutions" },
            { name: "Kenya Business Registration Service", url: "https://brs.go.ke/" },
            { name: "Nigeria Corporate Affairs Commission", url: "https://www.cac.gov.ng/" }
          ],
          tryIt: "Ku nemi mataimakin AI ya ba ku tambayoyi goma da dole ku amsa kafin ku fara ra'ayinku. Sannan ku buɗe Country Commercial Guide na ƙasarku a trade.gov ku amsa biyu daga cikinsu daga can.",
          youCanNow: "shirya binciken kasuwa da AI da tabbatar da muhimman bayanai a jagororin hukuma da ofisoshin rajista.",
          quickCheck: [
            { objective: "O3", q: "Mene ne Country Commercial Guide?", options: ["Jagorar tafiye-tafiye don 'yan yawon shaƙatawa", "Jagorar da AI ya rubuta", "Jerin otal-otal", "Jagorar hukuma ta yin kasuwanci a wata ƙasa, daga International Trade Administration"], answer: 3, why: "Country Commercial Guides jagororin kasuwa ne na hukuma da ma'aikatan Ofishin Jakadancin Amurka ke shiryawa, ITA kuma ke wallafawa." },
            { objective: "O3", q: "AI ya faɗa muku matakan rajistar kamfani a Kenya. Me za ku yi?", options: ["Ku bi su kamar yadda aka rubuta", "Ku tabbatar da su a Business Registration Service na Kenya", "Ku tambayi aboki a intanet", "Ku tsallake rajista"], answer: 1, why: "Matakan rajista suna fitowa ne daga ofishin rajista na hukuma na ƙasar kanta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Nemo dama",
        questions: [
          { objective: "O1", q: "Mafi kyawun bayanin ƙasa mai tasowa shi ne:", options: ["Ƙasar da tattalin arzikinta ke girma da canjawa da sauri", "Ƙasar da ba ta da kasuwanci", "Kowace ƙasa da ke tsibiri", "Ƙasar da ba ta da waya"], answer: 0, why: "Ƙasashe masu tasowa suna girma da canjawa da sauri." },
          { objective: "O1", q: "Mene ne kuɗin waya (mobile money)?", options: ["Kuɗin hannu da aka ajiye a mota", "Aika, karɓa da ajiye kuɗi a waya", "Wani nau'in katin bashi (credit card)", "Shirin gwamnatin Amurka"], answer: 1, why: "Hidimomi kamar M-Pesa suna bar mutane su biya da waya, sau da yawa ba tare da asusun banki ba." },
          { objective: "O2", q: "Wani tsohon jami'in jigilar kaya (NCO) yana son ra'ayin kasuwanci. Mafi kyawun wurin farawa shi ne:", options: ["Duk abin da ke tashe a intanet", "Ra'ayin da ke da farashi mafi girma", "Ƙwarewar da yake da ita da ya haɗa da matsalar gida ta gaske", "Kwaikwayon ra'ayin aboki"], answer: 2, why: "Ra'ayoyi masu kyau suna magance matsaloli na gaske da mutane za su biya don a gyara." },
          { objective: "O3", q: "Su waye ke shirya Country Commercial Guides?", options: ["Kamfanin AI", "Ƙungiyar kafofin sada zumunta", "Jaridun gida", "Ma'aikatan Ofishin Jakadancin Amurka, International Trade Administration kuma tana wallafawa"], answer: 3, why: "International Trade Administration ce ke wallafa su, ma'aikatan Ofishin Jakadancin Amurka kuma ke shiryawa." },
          { objective: "O3", q: "A ina za ku tabbatar da matakan rajistar kamfani a Najeriya?", options: ["Corporate Affairs Commission (CAC)", "Tallar da ke tasowa (pop-up)", "Mataimakin AI kawai", "Shafin intanet na wata jihar Amurka"], answer: 0, why: "CAC ita ce ofishin hukuma na rajistar kamfanoni a Najeriya." }
        ]
      }
    },
    {
      name: "Babi na 2: Shirya kasuwancin",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta tsarin kasuwanci a shafi ɗaya",
          minutes: 6,
          goal: "Rubuta tsarin kasuwanci a shafi ɗaya da taimakon AI.",
          text: [
            "Tsarin kasuwanci a shafi ɗaya yana amsa muhimman tambayoyi a shafi ɗaya: Wane ne abokin ciniki? Wace matsala yake da ita? Mene ne maganinku? Me yasa ku (ƙwarewarku da abin da ya bambanta ku)? Ta yaya za ku kai ga abokan ciniki? Ta yaya za ku sami kuɗi? Mene ne manyan kuɗaɗen da za ku kashe?",
            "Ku ba AI ra'ayinku na jimla ɗaya da bayananku, sannan ku tambaya: \"Ka mayar da wannan tsarin kasuwanci a shafi ɗaya da waɗannan kanun: abokin ciniki, matsala, magani, me yasa ni, hanyoyin kai wa abokan ciniki, kuɗin shiga, kuɗaɗen kashewa. Ka sa kowanne layi biyu ko uku.\"",
            "Ku karanta shi da idon basira. Idan AI ya ce \"manoma za su biya da farin ciki\", ku tambayi kanku: shin wani manomi ya faɗa min haka? Ku maye gurbin hasashe da abin da kuka koya daga abokan ciniki na gaske, sauran kuma ku yi musu alamar \"a gwada\"."
          ],
          steps: ["Ku ba AI ra'ayinku na jimla ɗaya da bayanan bincikenku.", "Ku nemi tsari a shafi ɗaya mai abokin ciniki, matsala, magani, me yasa ni, hanyoyin kai wa abokan ciniki, kuɗin shiga da kuɗaɗen kashewa.", "Ku maye gurbin hasashe da abin da abokan ciniki na gaske suka faɗa muku.", "Ku yi wa duk abin da ba a tabbatar ba alamar \"a gwada\"."],
          words: [["Tsarin kasuwanci (business model)", "yadda kasuwanci ke ba abokan ciniki amfani kuma yake samun kuɗi."], ["Kuɗin shiga (revenue)", "kuɗin da ke shigowa daga abokan ciniki."], ["Hanyar kai wa abokan ciniki (channel)", "hanyar da kuke kai wa abokan ciniki kuma kuke sayar musu."]],
          slides: [
            { title: "Shafi ɗaya, tambayoyi bakwai", bullets: ["Abokin ciniki da matsala", "Magani da me yasa ku", "Hanyoyin kai wa abokan ciniki da kuɗin shiga", "Kuɗaɗen kashewa"] },
            { title: "Ku bar AI ya yi daftari", bullets: ["Ku ba da ra'ayinku da bayananku", "Ku nemi layi biyu ko uku a kowane kanu"] },
            { title: "Sannan ku ƙalubalance shi", bullets: ["Shin abokin ciniki na gaske ya faɗi haka?", "Ku maye gurbin hasashe da gaskiya", "Ku yi wa sauran alamar \"a gwada\""] }
          ],
          tryIt: "Ku nemi mataimakin AI ya mayar da ra'ayinku na jimla ɗaya tsarin kasuwanci a shafi ɗaya da kanu bakwai. Ku yi wa kowane layi da ke hasashe alamar \"a gwada\".",
          youCanNow: "rubuta tsarin kasuwanci a shafi ɗaya da raba gaskiya da hasashe.",
          quickCheck: [
            { objective: "O4", q: "A tsarin kasuwanci, mene ne kuɗin shiga (revenue)?", options: ["Kuɗin da kuke kashewa kan kayan aiki", "Dukkan ajiyar kuɗinku", "Kuɗin da ke shigowa daga abokan ciniki", "Yawan ma'aikata"], answer: 2, why: "Kuɗin shiga shi ne kuɗin da ke shigowa daga abokan ciniki." },
            { objective: "O4", q: "Tsarinku ya ce abokan ciniki za su biya $20 a wata, amma babu wanda ya faɗa muku haka. Me za ku yi?", options: ["Ku yi masa alamar \"a gwada\" ku tambayi abokan ciniki na gaske", "Ku ɗaga shi zuwa $40", "Ku bar shi a matsayin gaskiya", "Ku goge sashen kuɗin shiga"], answer: 0, why: "Hasashe yana ci gaba da alamar \"a gwada\" har sai abokan ciniki na gaske sun tabbatar da shi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Shirin kuɗi, haɗari da doka",
          minutes: 5,
          goal: "Jera kuɗaɗen farawa, manyan haɗarurruka uku da yadda za ku rage kowanne.",
          text: [
            "Ku jera abin da kuke buƙata don farawa: kayan aiki, sufuri, wuri, rajista da lasisi, abokin hulɗa na gida ko ma'aikata, da isasshen kuɗin tafiyar da aiki na watanni da dama kafin cinikayya ta biya kuɗaɗen. Ku nemi AI ya ba ku jerin abubuwa, sannan ku sami farashi na gaske a can. Kada ku amince da farashin da AI ya yi hasashe.",
            "Haɗarurruka da aka saba gani: hawa da saukar darajar kuɗi (kuɗaɗenku da farashinku a kuɗaɗe daban-daban), wutar lantarki ko sufuri da ba a iya dogara da su, jinkirin biya, abokan hulɗa da ba sa cika alkawari, sata, da dokokin da ke canjawa. Ga kowanne, ku rubuta yadda za ku rage shi: misali, sa farashi da kuɗin gida tare da duba shi kowane wata uku, janareta na ko-ta-kwana, ko yarjejeniya a rubuce.",
            "Kada ku taɓa ba da cin hanci. Ban da dokokin gida, dokar Amurka ta Foreign Corrupt Practices Act (FCPA) ta mai da laifi ga mutanen Amurka su yi tayin ko su biya wani abu mai daraja ga jami'in gwamnatin waje don samun ko riƙe kasuwanci. Don kwangiloli, haraji da rajista, ku yi amfani da lauya ko akanta na gida mai cancanta."
          ],
          steps: ["Ku nemi AI ya ba ku jerin kuɗaɗen farawa don ra'ayinku.", "Ku sami farashi na gaske a can ga kowane abu.", "Ku jera manyan haɗarurruka uku.", "Ku rubuta hanya ɗaya ta rage kowane haɗari.", "Ku rubuta tambayoyin da ke buƙatar lauya ko akanta na gida."],
          words: [["Kuɗaɗen farawa (start-up costs)", "kuɗin da kuke buƙata kafin kasuwancin ya sami isasshen kuɗin biyan kansa."], ["Cin hanci", "wani abu mai daraja da aka ba jami'i don samun fifiko marar adalci; haramun ne a doka."], ["Foreign Corrupt Practices Act", "dokar Amurka da ta mai da ba jami'an gwamnatin waje cin hanci don samun kasuwanci laifi."]],
          slides: [
            { title: "Kuɗaɗen farawa", bullets: ["Kayan aiki, sufuri, wuri", "Rajista, lasisi, ma'aikata", "Kuɗin tafiyar da aiki na watanni kafin cinikayya ta biya su"] },
            { title: "Manyan haɗarurruka da maganinsu", bullets: ["Hawa da saukar darajar kuɗi: ku duba farashi akai-akai", "Wutar lantarki ko sufuri: ku sami na ko-ta-kwana", "Abokan hulɗa: yarjejeniya a rubuce"] },
            { title: "Ku bi doka", bullets: ["Kada ku taɓa ba da cin hanci", "FCPA ta Amurka ta mai da cin hancin waje laifi", "Ku yi amfani da lauya ko akanta na gida mai cancanta"] }
          ],
          sources: [{ name: "U.S. Department of Justice: Foreign Corrupt Practices Act", url: "https://www.justice.gov/criminal/criminal-fraud/foreign-corrupt-practices-act" }],
          tryIt: "Ku nemi mataimakin AI ya ba ku jerin kuɗaɗen farawa don ra'ayinku. Sannan ku rubuta manyan haɗarurruka uku da hanya ɗaya ta rage kowanne.",
          youCanNow: "shirya kuɗaɗen farawa, ambaton manyan haɗarurruka da maganinsu, da sanin iyakokin doka da ba za ku tsallake ba.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne kuɗin farawa?", options: ["Kuɗin da abokan ciniki ke biyan ku", "Kuɗin rajista da kayan aiki", "Lambar wayar abokin ciniki", "Jimlar ra'ayin kasuwancinku"], answer: 1, why: "Kuɗaɗen farawa sun haɗa da kayan aiki, rajista, ma'aikata da kuɗin tafiyar da aiki na watanni." },
            { objective: "O5", q: "Wani ma'aikacin ofis ya ce ɗan kuɗi na hannu zai hanzarta lasisinku. Me za ku yi?", options: ["Ku biya shi a ɓoye", "Ku biya ta hannun aboki", "Ku yi alkawarin biya daga baya", "Ku ƙi, domin cin hanci haramun ne, har a ƙarƙashin FCPA ta Amurka"], answer: 3, why: "Biyan jami'in gwamnatin waje don kasuwanci laifi ne a ƙarƙashin dokar Foreign Corrupt Practices Act ta Amurka." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gwada ra'ayin da samun taimakon hukuma",
          minutes: 5,
          goal: "Shirya ƙaramin gwaji mai araha na ra'ayinku, ku zaɓi shirin taimako na hukuma ɗaya da za ku tuntuɓa.",
          text: [
            "Kafin ku koma ƙasar waje ko ku kashe ajiyar kuɗinku, ku fara gwada da ƙarami. Ku yi gwaji (pilot): ku yi wa abokan ciniki goma hidima, ku sayar da ƙaramin kaso, ko ku yi haɗin gwiwa da kasuwancin gida ɗaya na wata ɗaya. Ku bi diddigin abin da abokan ciniki ke biya, abin da yake kashe muku da abin da ke tafiya ba daidai ba. AI zai iya taimaka muku tsara takardar bin diddigi mai sauƙi.",
            "Taimakon hukuma kyauta: Boots to Business na SBA kwas ne na kasuwanci da ake bayarwa ta Transition Assistance Program (TAP, shirin taimakon barin aikin soja) ga sojoji masu aiki, National Guard, Reserve da matan ko mazajen sojoji; Boots to Business Reboot yana faɗaɗa shi ga tsofaffin sojoji na kowane zamani. Veterans Business Outreach Centers suna ba da bita, jagoranci (mentoring) da taimako kan shirin kasuwanci. U.S. Commercial Service tana taimaka wa kasuwancin Amurka da ke sayarwa a ƙasashen waje.",
            "Ku kai musu tsarinku na shafi ɗaya. Jagora (mentor) da ya taɓa yin kasuwanci a ƙasar waje zai iya kare ku daga kurakurai masu tsada."
          ],
          steps: ["Ku tsara ƙaramin gwaji: abokan ciniki nawa, tsawon lokaci nawa, me za a auna.", "Ku nemi AI ya gina takardar bin diddigi mai sauƙi: cinikayya, kuɗaɗen kashewa, matsaloli.", "Ku zaɓi shirin taimako na hukuma ɗaya.", "Ku tuntuɓe shi ku kai tsarinku na shafi ɗaya."],
          words: [["Gwaji (pilot)", "ƙaramin gwaji na ɗan lokaci na ra'ayin kasuwanci kafin ku saka komai a ciki."], ["Boots to Business", "kwas ɗin kasuwanci kyauta na SBA ga sojoji masu aiki, tsofaffin sojoji da iyalan sojoji (mata ko mazaje)."], ["Veterans Business Outreach Center", "cibiyar da SBA ke tallafawa da ke ba tsofaffin sojoji horon kasuwanci da jagoranci."]],
          slides: [
            { title: "Ku fara gwada da ƙarami", bullets: ["Abokan ciniki goma, kaso ɗaya ko wata ɗaya", "Ku bi diddigin cinikayya, kuɗaɗe da matsaloli", "AI zai iya gina takardar bin diddigi"] },
            { title: "Taimakon hukuma kyauta", bullets: ["Boots to Business da Reboot na SBA", "Veterans Business Outreach Centers", "U.S. Commercial Service don sayarwa a ƙasashen waje"] },
            { title: "Ku kai tsarinku na shafi ɗaya", bullets: ["Ku nemi jagora da ya taɓa yi", "Ku koya kafin ku kashe kuɗi mai yawa"] }
          ],
          sources: [
            { name: "SBA: Boots to Business", url: "https://www.sba.gov/sba-learning-platform/boots-business" },
            { name: "SBA: Veteran-owned businesses (VBOCs, Boots to Business Reboot)", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "International Trade Administration: Export solutions", url: "https://www.trade.gov/export-solutions" }
          ],
          tryIt: "Aikin ƙarshe: ku kammala tsarinku na kasuwanci a shafi ɗaya mai abokin ciniki, matsala, magani da yadda ƙwarewar soja ta dace, hanyoyin kai wa abokan ciniki, kuɗin shiga, kuɗaɗen kashewa da manyan haɗarurruka uku. Ku ƙara shirin bincike da ke ambaton Country Commercial Guide, ofishin rajistar kasuwanci na ƙasar da shirin taimako na hukuma ɗaya da za ku tuntuɓa.",
          youCanNow: "shirya ƙaramin gwaji na ra'ayin kasuwancinku da samun taimakon hukuma kyauta don gina shi.",
          quickCheck: [
            { objective: "O6", q: "Mene ne gwaji (pilot)?", options: ["Ƙaramin gwaji na ɗan lokaci na ra'ayinku", "Cikakken farawa a kowane birni", "Bashin kasuwanci", "Wani nau'in lasisi"], answer: 0, why: "Gwaji yana gwada ra'ayinku da ɗan kuɗi kafin ku kashe kuɗi na gaske." },
            { objective: "O6", q: "Kun gama tsarinku na shafi ɗaya. Wane taimakon hukuma za ku ƙara a shirinku?", options: ["Taron karawa juna sani na kuɗi daga tallar intanet", "Babu taimako, ku fara kawai", "Boots to Business ko wani shirin hukuma kyauta", "Baƙo da ke alkawarin riba da sauri"], answer: 2, why: "Shirye-shiryen hukuma kyauta kamar Boots to Business na SBA suna koya wa tsofaffin sojoji fara kasuwanci." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Shirya kasuwancin",
        questions: [
          { objective: "O4", q: "Wanne ne sashe na tsarin kasuwanci a shafi ɗaya?", options: ["Launin da kuka fi so", "Abokin ciniki, matsala da yadda kuke samun kuɗi", "Jerin lambobin yabonku na soja", "Kalmar sirrin bankinku"], answer: 1, why: "Tsarin yana amsa wane ne, wace matsala, wane magani da yadda kuke samun kuɗi." },
          { objective: "O4", q: "Tsarin da AI ya rubuta ya ce abokan ciniki \"za su biya da farin ciki\". Babu abokin ciniki da ya faɗa muku haka. Ku:", options: ["Ku bar shi a matsayin gaskiya", "Ku goge dukkan tsarin", "Ku yi masa alamar \"a gwada\" ku tambayi abokan ciniki na gaske", "Ku ninka farashin"], answer: 2, why: "Dole a gwada hasashe da abokan ciniki na gaske." },
          { objective: "O5", q: "Daga ina farashin kuɗaɗen farawarku ya kamata ya fito?", options: ["Hasashen AI", "Hasashen aboki", "Labaran bara", "Ƙididdiga ta gaske daga masu sayar da kaya na gida"], answer: 3, why: "Farashin da AI ya yi hasashe yana iya yin nisa da gaskiya; ku sami farashi na gaske a can." },
          { objective: "O5", q: "Wani jami'i ya yi nuni da cewa biyan wani abu zai hanzarta lasisinku. Ku:", options: ["Ku ƙi; cin hanci haramun ne, har a ƙarƙashin FCPA ta Amurka", "Ku biya ɗan kuɗi kaɗan", "Ku biya ta hannun aboki", "Ku tambayi AI yadda za ku ɓoye shi"], answer: 0, why: "FCPA ta mai da biyan jami'an gwamnatin waje don kasuwanci laifi ga mutanen Amurka." },
          { objective: "O6", q: "Wane shirin SBA kyauta ne ke koya wa sojojin da ke barin aiki kasuwanci?", options: ["VET TEC 2.0", "Boots to Business", "TRICARE", "The Military Crosswalk"], answer: 1, why: "Boots to Business shi ne kwas ɗin kasuwanci na SBA a cikin TAP." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kasuwanci a Ƙasashe Masu Tasowa",
    questions: [
      { objective: "O1", q: "Wace dama ce aka saba gani a ƙasashe masu tasowa?", options: ["Yawan jama'a da ke raguwa", "Saurin yaɗuwar waya da kuɗin waya", "Ba a buƙatar hidimomi", "Dokoki da ba sa canjawa"], answer: 1, why: "Yaɗuwar waya da kuɗin waya suna buɗe sababbin hanyoyin kai wa abokan ciniki." },
      { objective: "O1", q: "Wane ƙalubale ne aka saba gani a ƙasashe masu tasowa?", options: ["Ƙarancin abokan ciniki a ko'ina", "Babu waya ko kaɗan", "Hawa da saukar darajar kuɗi da dokokin da ke canjawa", "Babu matasa"], answer: 2, why: "Hawa da saukar darajar kuɗi da dokokin da ke canjawa haɗarurruka ne da aka saba gani." },
      { objective: "O1", q: "M-Pesa a Kenya misali ne na:", options: ["Fashin banki", "Ofishin rajista na gwamnati", "Rundunar soja", "Kuɗin waya"], answer: 3, why: "M-Pesa yana bar mutane su biya da ajiye kuɗi ta waya." },
      { objective: "O2", q: "Ra'ayin kasuwanci mai ƙarfi:", options: ["Yana magance matsala ta gaske da mutane za su biya don a gyara", "Yana kwaikwayon duk abin da ke tashe", "Ba shi da abokan ciniki", "Ba ya buƙatar gwaji"], answer: 0, why: "Abokan ciniki suna biya don magance matsaloli na gaske." },
      { objective: "O2", q: "Wace ƙwarewar soja ce sau da yawa ta dace da kasuwanni masu tasowa?", options: ["Babu ko ɗaya", "Jigilar kaya, samar da kayayyaki da ajiya", "Faretin soja kawai", "Aikin takardu kawai"], answer: 1, why: "Motsawa da ajiye kaya gibi ne da aka saba gani." },
      { objective: "O2", q: "Ra'ayin kasuwanci a jimla ɗaya ya kamata ya ƙunshi:", options: ["Muƙaminku na soja", "Lambar SSN ɗinku", "Hidima, abokin ciniki, wuri da yadda suke biya", "Farashi kawai"], answer: 2, why: "Waɗannan sassa huɗu suna sa ra'ayin ya yi sarari." },
      { objective: "O2", q: "Idan AI yana ba ku shawarwarin ra'ayoyin kasuwanci, wa ke zaɓa?", options: ["AI", "Baƙo a intanet", "Ra'ayi na farko a jerin", "Ku"], answer: 3, why: "AI yana ba da shawara; ku ne kuke yanke hukunci bisa ƙwarewarku da kasuwar." },
      { objective: "O3", q: "Me ya kamata ku yi amfani da AI a kai a binciken kasuwa?", options: ["Shirya tambayoyi da rubuta daftari, sannan tabbatar da bayanai a majiyoyin hukuma", "Amsoshin doka na ƙarshe", "Ainihin farashin gida", "Yin rajistar kamfaninku"], answer: 0, why: "AI yana daftari; majiyoyin hukuma da abokan ciniki na gaske suna tabbatarwa." },
      { objective: "O3", q: "Wa ke wallafa Country Commercial Guides?", options: ["Wani bulogi na mutum", "International Trade Administration", "VA", "Kamfanin AI"], answer: 1, why: "Suna fitowa daga International Trade Administration ta Ma'aikatar Kasuwanci ta Amurka." },
      { objective: "O3", q: "Ofishin hukuma na rajistar kasuwanci a Kenya shi ne:", options: ["VA", "SBA", "Business Registration Service", "Corporate Affairs Commission"], answer: 2, why: "Business Registration Service na Kenya ne ke kula da rajistar kamfanoni." },
      { objective: "O3", q: "Kafin ku kashe kuɗi na gaske, ya kamata ku yi magana da:", options: ["Babu kowa", "'Yan uwa kawai", "AI kawai", "Aƙalla abokan ciniki biyar masu yiwuwa"], answer: 3, why: "Abokan ciniki na gaske suna faɗa muku ko matsalar da farashin na gaske ne." },
      { objective: "O4", q: "Kuɗin shiga (revenue) shi ne:", options: ["Kuɗin da ke shigowa daga abokan ciniki", "Kuɗin da kuke kashewa kan haya", "Wani nau'in bashi", "Takardar haraji"], answer: 0, why: "Kuɗin shiga shi ne kuɗin da ake samu daga cinikayya." },
      { objective: "O4", q: "\"Hanyar kai wa abokan ciniki\" (channel) a tsarin kasuwanci ita ce:", options: ["Tashar talabijin", "Hanyar da kuke kai wa abokan ciniki kuma kuke sayar musu", "Kogi", "Asusun banki"], answer: 1, why: "Hanyoyin kai wa abokan ciniki su ne yadda abokan ciniki ke samun ku kuma suke saya daga gare ku." },
      { objective: "O4", q: "Layukan da ke tsarinku da babu abokin ciniki da ya tabbatar da su ya kamata a:", options: ["Goge su", "Ƙara girmansu", "Yi musu alamar \"a gwada\"", "Ɗauke su a matsayin gaskiya"], answer: 2, why: "Hasashen da ba a tabbatar ba yana buƙatar gwaji." },
      { objective: "O5", q: "Kuɗaɗen farawa sun haɗa da:", options: ["Cinikin farko kawai", "Kuɗin wayarku kawai", "Babu komai; kasuwanci kyauta ne", "Kayan aiki, rajista, ma'aikata da kuɗin tafiyar da aiki na watanni"], answer: 3, why: "Kuna buƙatar kuɗin tafiyar da aiki har sai cinikayya ta biya kuɗaɗen." },
      { objective: "O5", q: "Hanya ɗaya ta rage haɗarin darajar kuɗi ita ce:", options: ["Duba farashinku akai-akai", "Yin watsi da farashin musayar kuɗi", "Ajiye dukkan farashi ba canji har abada", "Biya da katin kyauta (gift card)"], answer: 0, why: "Duba farashi akai-akai yana taimaka muku ku tafi daidai da hawa da saukar darajar kuɗi." },
      { objective: "O5", q: "Dokar Foreign Corrupt Practices Act ta Amurka ta mai da laifi:", options: ["Fara kasuwanci a ƙasar waje", "Biyan jami'in gwamnatin waje don samun ko riƙe kasuwanci", "Amfani da kuɗin waya", "Ɗaukar ma'aikata na gida"], answer: 1, why: "FCPA ta hana ba jami'an gwamnatin waje cin hanci don kasuwanci." },
      { objective: "O5", q: "Don tambayoyin kwangila, haraji da rajista ya kamata ku yi amfani da:", options: ["AI kawai", "Ƙuri'ar kafofin sada zumunta", "Lauya ko akanta na gida mai cancanta", "Hasashe"], answer: 2, why: "Dokokin shari'a da haraji suna buƙatar ƙwararre mai cancanta." },
      { objective: "O6", q: "Gwaji (pilot) shi ne:", options: ["Komawa ƙasar waje da ajiyar kuɗinku", "Bashi", "Takardar gwamnati", "Ƙaramin gwaji na ɗan lokaci na ra'ayinku"], answer: 3, why: "Gwaji yana gwada ra'ayin kafin ku saka komai a ciki." },
      { objective: "O6", q: "Boots to Business Reboot yana faɗaɗa kwas ɗin SBA ga:", options: ["Tsofaffin sojoji na kowane zamani", "Hafsoshi masu aiki kawai", "'Yan ƙasashen waje kawai", "Babu kowa"], answer: 0, why: "SBA ta ce Reboot yana faɗaɗa Boots to Business ga tsofaffin sojoji na kowane zamani." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      3,
      5,
      7,
      8,
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
        name: "Abokin ciniki, matsala da dacewa",
        objective: "O2",
        notYet: "Abokin ciniki ko matsalar ba su da sarari, ko ba a haɗa ƙwarewar soja ba.",
        meets: "Abokin ciniki da aka ambata, matsala ta gaske, magani da yadda ƙwarewar soja ta dace.",
        exceeds: "Mai koyo zai iya faɗin yadda ya san cewa matsalar ta gaske ce."
      },
      {
        name: "Cikakken tsarin kasuwanci",
        objective: "O4",
        notYet: "Babu hanyoyin kai wa abokan ciniki, kuɗin shiga ko kuɗaɗen kashewa.",
        meets: "Dukkan sassa bakwai a shafi ɗaya, tare da alamar \"a gwada\" a kan hasashe.",
        exceeds: "Kowane layi mai alamar \"a gwada\" yana da hanyar gwada shi."
      },
      {
        name: "Haɗarurruka",
        objective: "O5",
        notYet: "Haɗarurruka ƙasa da uku, ko babu hanyar rage su.",
        meets: "Manyan haɗarurruka uku, kowanne da hanya ɗaya ta rage shi, kuma babu shirin da ya dogara da cin hanci.",
        exceeds: "Haɗarurrukan sun haɗa da darajar kuɗi da dokoki, tare da sunan ƙwararren da za a tambaya."
      },
      {
        name: "Shirin bincike",
        objective: "O3",
        notYet: "Ba a ambaci majiyoyin hukuma ba.",
        meets: "Ya ambaci Country Commercial Guide da ofishin rajistar kasuwanci na ƙasar.",
        exceeds: "Ya nuna tambayoyin bincike biyu da aka riga aka amsa daga waɗannan majiyoyi."
      },
      {
        name: "Taimakon hukuma",
        objective: "O6",
        notYet: "Ba a ambaci shirin taimako ba.",
        meets: "Shirin taimako na hukuma kyauta ɗaya da mai koyo zai tuntuɓa.",
        exceeds: "Ya haɗa da ranar da za a tuntuɓe shi da ƙaramin gwaji da za a fara yi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi magana da aƙalla abokan ciniki biyar masu yiwuwa cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka yi rajista a Boots to Business ko wani shirin hukuma cikin kwanaki 90",
      "Masu koyo da suka yi ƙaramin gwaji ko suka yi rajistar kasuwanci cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko wayar zamani mai intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Country Commercial Guides kyauta na trade.gov da shafin intanet na ofishin rajistar kasuwanci na ƙasar da aka zaɓa",
      "Takarda ko takardar kwamfuta don tsarin kasuwanci a shafi ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku bar masu koyo su zaɓi ƙasashen da suka sani; ku haɗa masu koyo da suka zaɓi yanki ɗaya don su raba majiyoyi.",
      "Ku nace cewa kowane bayani game da rajista, haraji ko lasisi ya fito daga majiyar hukuma, ba daga AI ba.",
      "Ku bayyana cewa cin hanci ba zai taɓa zama sashe na shiri ba, kuma tambayoyin kwangila da haraji ana kai su ga lauya ko akanta na gida mai cancanta.",
      "Ku ba da maki ga tsarin kasuwanci na ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku nuna wa masu koyo Boots to Business na SBA da Veterans Business Outreach Centers don matakai na gaba."
    ]
  }
};
