"use strict";

// Koach Learn course, Hausa (ha) translation of shared/online-shopping-banking.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "online-shopping-banking-ha",
  lang: "ha",
  translationOf: "online-shopping-banking",
  category: "Seniors and Technology",
  name: "Sayayya da Banki ta Intanet Lafiya",
  skills: "Tabbatar cewa shago na gaske ne, Biya ta hanya mafi aminci, Bin diddigin oda da mayar da kaya, Amfani da manhajar banki lafiya, Gane zambar kuɗi da kai rahoto",
  outcome: "sayen wani abu ta intanet daga shagon da kuka tabbatar da shi, biya ta hanya mafi aminci, ajiye bayanan sayayya, da amfani da manhajar ko shafin hukuma na bankinku don duba kuɗin da ke asusunku da gane cirewar kuɗin da ba ku yi ba.",
  about: [
    "Mutane da yawa yanzu suna sayen kayan abinci, magunguna da kayan gida ta intanet, kuma suna biyan kuɗaɗen bukatu (bills) daga wayarsu. Idan an yi shi lafiya, yana rage tafiye-tafiye da ɓata lokaci. Idan an yi shi ba da kulawa ba, yana iya jawo asarar kuɗi.",
    "Wannan kwas ɗin yana nuna muku yadda ake tabbatar da shago kafin ku saya, yadda ake biya ta hanyar da ta fi kare ku, yadda ake bin diddigin oda da mayar da kaya, yadda ake amfani da manhajar ko shafin bankinku lafiya, da yadda ake gane zambar kuɗi.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Wannan kwas ɗin yana koyar da halaye masu aminci ne; ba shawarar kuɗi ba ce. Don tambayoyi game da asusunku, ku kira lambar da ke bayan katin bankinku."
  ],
  finalTask: "Ku zaɓi abu ɗaya da kuke buƙata. Ku tabbatar da shagon da gwaje-gwaje uku (adireshin shafi na gaske, sharhi da korafe-korafe, da ƙa'idar mayar da kaya), ku saka abin a cikin kwandon sayayya (cart), sannan ku tsaya a shafin biya, kuna rubuta hanyar biyan da za ku yi amfani da ita da dalilin haka. Sannan ku buɗe manhajar ko shafin hukuma na bankinku, ku duba kuɗin da ke asusunku da cinikin kwanan nan, ku nuna abin da za ku yi idan kun ga cirewar kuɗin da ba ku yi ba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke son yin sayayya da banki ta intanet lafiya: tsofaffi, masu kula da kuɗin wani ɗan uwa, mutanen da ke dawowa cikin al'umma kuma suke buɗe sabbin asusu, da duk wanda ya guji sayayya ko banki ta intanet saboda tsoron zamba.",
    startingPoint: "Suna iya amfani da waya ko kwamfuta don buɗe shafukan intanet da manhajoji, kuma wataƙila suna da asusun banki da katin debit ko katin credit. Da yawa ba su da tabbas yadda ake bambanta shagon bogi da na gaske, waɗanne hanyoyin biya ke kare su, yadda ake bin diddigin oda da mayar da shi, ko abin da za su yi game da cirewar kuɗin da ba su yi ba.",
    gap: "Sayayya, biyan kuɗaɗen bukatu da harkokin banki sun koma intanet, haka ma 'yan damfara, da shagunan bogi, saƙonnin tes na bogi game da isar da kaya, da kiran banki na bogi. Sanin 'yan gwaje-gwaje da hanyar biya mafi aminci yana bar mutane su adana lokaci da kuɗi, kuma su guji asarar da ke da wuya ko ba za a iya dawo da ita ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomi kamar ƙorafin cirewa (dispute), kuɗin da ke asusu (balance) da tabbatarwa mataki biyu",
      "Na'urori: waya ko kwamfuta mai intanet; manhajar ko shafin hukuma na banki",
      "Lokaci: kusan minti 5 kowane darasi, kusan minti 60 gaba ɗaya",
      "Ba a buƙatar sayayya ta gaske: aikin ƙarshe yana tsayawa a shafin biya",
      "Sirri: masu koyo ba sa taɓa rubuta lambobin kati, kalmomin sirri ko code a gaban wasu, a Wi-Fi na jama'a ba tare da data ta wayarsu ba, ko a cikin imel, tes ko hira"
    ],
    prerequisites: "Babu. Kwas ɗin \"Tushen Amfani da Intanet\" ko \"Using a Smartphone and Tablet\" (Amfani da Wayar Zamani da Tablet) yana taimakon masu koyo da ba su saba da shafukan intanet da manhajoji ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wani shago ko tayi a intanet", action: "tabbatar da shagon da gwaje-gwaje uku kafin sayayya: adireshin shafi na gaske, sharhi da korafe-korafe, da ƙa'idar mayar da kaya", standard: "an yi dukkan gwaje-gwaje uku kuma an yanke shawara a sarari ko za a saya ko a'a" },
    { id: "O2", condition: "A shafin biya na wani shago", action: "zaɓar hanyar biya da ke kare ku da bayyana dalilin haka", standard: "ba tare da taɓa zaɓar katin kyauta, tura kuɗi ta waya (wire transfer), manhajar biya ko kuɗin kirifto ga mai sayarwa ta intanet ba" },
    { id: "O3", condition: "Bayan kun yi oda", action: "ajiye bayanan oda, bin diddigin kunshin daga shafin ko manhajar shagon da kansa, da fara mayar da kaya", standard: "an ajiye tabbacin oda kuma ba a bi diddigi daga hanyoyin haɗi a cikin tes na ba-zata ba" },
    { id: "O4", condition: "Ta amfani da manhajar ko shafin hukuma na bankinku", action: "shiga asusu lafiya da duba kuɗin da ke asusu da cinikin kwanan nan", standard: "an isa bankin ba ta hanyar haɗi daga imel ko tes ba, kuma an fita daga asusu a ƙarshe" },
    { id: "O5", condition: "Idan aka ba ku jerin cinikinku na kwanan nan", action: "gane cirewar kuɗin da ba ku yi ba da bayyana matakan kai rahoto da kulle katin", standard: "ta kiran lambar da ke kan katin ko a manhajar hukuma, da yin aiki da sauri" },
    { id: "O6", condition: "Idan kun sami kira, tes ko imel game da kuɗinku", action: "gane alamun zambar kuɗi da dakatar da ita", standard: "ba tare da taɓa bayar da kalmar sirri ko code ba, kuma koyaushe ana sake kira ta lambar da ke kan katinku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sayayya ta intanet lafiya",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tabbatar cewa shago na gaske ne",
          minutes: 5,
          goal: "Tabbatar da shafin intanet kafin ku saya daga gare shi.",
          text: [
            "Shagunan bogi suna kwaikwayon kamannin na gaske, kuma suna tallata farashin da ya yi kyau fiye da yadda zai zama gaskiya. Kafin ku saya, ku ɗauki minti ɗaya ku bincika.",
            "Ku rubuta adireshin shagon da kanku, ko ku yi amfani da manhajarsa ta hukuma, maimakon danna talla ko hanyar haɗi a cikin tes. Ku duba wurin adireshi: an rubuta sunan daidai? Ku nemi https da alamar kwaɗo (lock), amma ku sani cewa Hukumar Kasuwanci ta Tarayyar Amurka (FTC) ta yi gargaɗi cewa 'yan damfara ma suna iya amfani da su.",
            "FTC ta ba da shawarar a nemi sunan shagon ko kayan tare da kalmar \"complaint\" (ƙorafi) ko \"scam\" (zamba) don ganin abin da sauran masu saye ke faɗa, a karanta sharhi da kulawa domin wasu na bogi ne, kuma a duba ƙa'idar mayar da kaya kafin sayayya: kwanaki nawa kuke da su, kuma wa zai biya kuɗin mayar da shi."
          ],
          steps: ["Ku rubuta adireshin shagon da kanku ko ku yi amfani da manhajarsa ta hukuma.", "Ku duba yadda aka rubuta adireshin shafin.", "Ku nemi sunan shagon tare da \"complaint\" ko \"scam\".", "Ku karanta sharhi da yawa, ba taurari kawai ba.", "Ku karanta ƙa'idar mayar da kaya: kwanaki nawa, kuma wa zai biya kuɗin aikawa da shi baya."],
          words: [["Adireshin shafi (web address)", "sunan shafin intanet, wanda ake gani a wurin da ke saman burauzar, kamar target.com."], ["https", "alamar cewa haɗin da shafin yana da kariya; 'yan damfara ma suna iya amfani da shi."], ["Ƙa'idar mayar da kaya (return policy)", "dokokin shagon game da mayar da kaya."]],
          slides: [
            { title: "Shagunan bogi suna kama da na gaske", bullets: ["Suna kwaikwayon tambarin (logo) na gaske", "Farashin da ya yi kyau fiye da yadda zai zama gaskiya"] },
            { title: "Ku isa can lafiya", bullets: ["Ku rubuta adireshin da kanku ko ku yi amfani da manhajar hukuma", "Ku duba yadda aka rubuta shi", "https da alamar kwaɗo suna taimakawa, amma 'yan damfara ma suna amfani da su"] },
            { title: "Gwaje-gwaje uku kafin ku saya", bullets: ["Ku nemi sunan tare da \"complaint\" ko \"scam\"", "Ku karanta sharhi da yawa, ba taurari kawai ba", "Ku karanta ƙa'idar mayar da kaya"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Ku zaɓi shagon da za ku iya saya daga gare shi. Ku yi gwaje-gwajen uku: ku nemi sunansa tare da \"complaint\", ku karanta sharhi uku, ku nemo kwanaki nawa kuke da su don mayar da kaya.",
          youCanNow: "duba adireshin shago, sunansa a wajen mutane da ƙa'idar mayar da kaya kafin ku saya.",
          quickCheck: [
            { objective: "O1", q: "Me ya kamata ku duba a wurin adireshi kafin ku saya?", options: ["Launin shafin", "Kaya nawa ne a cikin kwandon sayayya", "Lokacin rana", "Cewa an rubuta sunan shagon daidai"], answer: 3, why: "Shagunan bogi sau da yawa suna amfani da sunaye masu kama da na gaske, don haka ku duba yadda aka rubuta shi." },
            { objective: "O1", q: "Kun ga talla a kafofin sada zumunta (social media) na takalma da farashi mai rahusa sosai. Me za ku yi?", options: ["Ku rubuta adireshin shagon da kanku ku nemi sunansa tare da \"complaint\" ko \"scam\"", "Ku danna tallar ku biya nan take", "Ku aika wa mai sayarwa katin kyauta", "Ku raba lambar katinku a cikin saƙo"], answer: 0, why: "Zuwa shagon da kanku da neman korafe-korafe yana taimaka muku gane shagunan bogi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Biya ta hanya mafi aminci",
          minutes: 5,
          goal: "Zaɓi hanyar biya da ke kare ku idan wani abu ya lalace.",
          text: [
            "Yadda kuke biya yana da muhimmanci. FTC ta ce biya da katin credit yana ba ku kariya mai ƙarfi: kuna iya yin ƙorafi (dispute) kan cirewar da ba daidai ba, don abin da bai iso ba ko wanda bai yi kamar yadda aka bayyana ba. Ku yi sauri ku sanar da kamfanin katinku da zarar kun ga matsala.",
            "FTC ta yi gargaɗi kada a taɓa biyan mai sayarwa ta intanet da katin kyauta (gift card), tura kuɗi kai tsaye (wire transfer), manhajar biya ko kuɗin kirifto (cryptocurrency). Waɗannan suna da wuyar dawowa, shi ya sa 'yan damfara ke neman su.",
            "Ku rubuta bayanan katinku a shafin biya na shagon da kuka tabbatar da shi kaɗai, ba a cikin imel, tes ko hira ba. A kwamfutar da ake rabawa ko ta ɗakin karatu, kada ku bari burauzar ta ajiye katinku."
          ],
          steps: ["Ku yi amfani da katin credit idan za ku iya, ko hanyar biya amintacciya ta shagon da kuka tabbatar.", "Kada ku taɓa biyan mai sayarwa da katin kyauta, wire transfer, manhajar biya ko kuɗin kirifto.", "Ku rubuta bayanan kati a shafin biya na shagon da kuka tabbatar kaɗai.", "Kada ku ajiye katinku a kwamfutar da ake rabawa.", "Ku riƙa duba bayanin asusunku (statement) ku kai rahoton matsala da sauri."],
          words: [["Katin credit", "katin da ke ba ku rancen kuɗi da za ku biya daga baya; yana da kariya mai ƙarfi idan aka yi ƙorafi."], ["Ƙorafi kan cirewa (dispute)", "faɗa wa kamfanin katinku cewa cirewar kuɗi ba daidai ba ce don ya bincika."], ["Wire transfer", "tura kuɗi kai tsaye daga wani asusu zuwa wani; yana da wuyar dawowa sosai."]],
          slides: [
            { title: "Yadda kuke biya yana da muhimmanci", bullets: ["Katin credit: kariya mai ƙarfi idan aka yi ƙorafi", "Ku sanar da kamfanin katinku da sauri"] },
            { title: "Kada ku taɓa biyan mai sayarwa da", bullets: ["Katin kyauta", "Wire transfer", "Manhajar biya", "Kuɗin kirifto"] },
            { title: "Bayanan kati", bullets: ["A shafin biya na shagon da kuka tabbatar kaɗai", "Ba a cikin imel, tes ko hira ba", "Kada ku ajiye su a kwamfutocin da ake rabawa"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Ku duba katunanku da hanyoyin biyan da kuke da su. Ku rubuta wanda za ku yi amfani da shi don sayayya ta intanet da dalilin haka, da hanyoyin da za ku ƙi idan mai sayarwa ya nemi su.",
          youCanNow: "zaɓar hanyar biya da ke kare ku da ƙin waɗanda 'yan damfara ke nema.",
          quickCheck: [
            { objective: "O2", q: "Mene ne ma'anar yin ƙorafi (dispute) kan cirewar kuɗi?", options: ["Biya sau biyu", "Neman kamfanin katinku ya gyara cirewar da ba daidai ba", "Aika wa mai sayarwa katin kyauta", "Goge asusunku"], answer: 1, why: "Da katin credit kuna iya yin ƙorafi kan cirewa don abin da ba daidai ba ko wanda bai iso ba." },
            { objective: "O2", q: "Wani mai sayarwa ta intanet ya ce wire transfer kaɗai yake karɓa. Me za ku yi?", options: ["Ku tura kuɗin ta wire transfer", "Ku biya rabi ta wire rabi kuma da katin kyauta", "Kada ku saya; FTC ta yi gargaɗi kada a taɓa biyan masu sayarwa ta intanet ta wannan hanya", "Ku biya da kuɗin kirifto a maimakon haka"], answer: 2, why: "Wire transfer yana da wuyar dawowa, shi ya sa 'yan damfara ke neman sa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bin diddigi, karɓa da mayar da oda",
          minutes: 4,
          goal: "Ajiye bayanan odarku, bi diddigin kunshi da fara mayar da kaya.",
          text: [
            "Bayan kun saya, shagon yana aiko da tabbacin oda (order confirmation) ta imel. Ku ajiye shi. FTC ta ba da shawarar ku ajiye bayanan odarku, ƙa'idar mayar da kaya, alƙawarin mai sayarwa game da aikawa, saƙonninku da mai sayarwa, da bayanin biyan kuɗinku.",
            "Ku bi diddigin kunshin daga asusunku a shafin ko manhajar shagon, ba daga hanyar haɗi a cikin tes na ba-zata ba. Tes na bogi masu cewa \"akwai matsala wajen isar da kaya\" zamba ce da aka saba gani.",
            "Don mayar da wani abu, ku shiga asusunku, ku nemo odar, ku zaɓi mayarwa (return). Ku bi matakan, ku ajiye rasidin wurin da kuka kai kayan, ku riƙa duba bayanin asusunku don ganin an dawo muku da kuɗi (refund). Idan mai sayarwa ya ƙi gyara matsala, kuna iya kai rahoto ga FTC a reportfraud.ftc.gov."
          ],
          steps: ["Ku ajiye imel ɗin tabbacin oda.", "Ku bi diddigin kunshin daga asusunku a shafin ko manhajar shagon.", "Ku yi watsi da tes na ba-zata game da isar da kaya masu hanyoyin haɗi.", "Don mayarwa: ku shiga asusu, ku nemo odar, ku zaɓi return, ku bi matakan.", "Ku ajiye rasidin kai kayan ku duba an dawo da kuɗin."],
          words: [["Tabbacin oda (order confirmation)", "imel ɗin da ke tabbatar da abin da kuka saya da abin da kuka biya."], ["Bin diddigi (tracking)", "bin inda kunshinku yake a kan hanyarsa zuwa gare ku."], ["Dawo da kuɗi (refund)", "kuɗin da aka mayar muku."]],
          slides: [
            { title: "Ku ajiye bayanai", bullets: ["Tabbacin oda", "Ƙa'idar mayar da kaya da alƙawarin aikawa", "Saƙonni da bayanin asusunku"] },
            { title: "Ku bi diddigi lafiya", bullets: ["Ku yi amfani da asusunku a shafin ko manhajar shagon", "Ku yi watsi da tes na ba-zata game da isar da kaya masu hanyoyin haɗi"] },
            { title: "Mayar da kaya", bullets: ["Ku shiga asusu, ku nemo odar, ku zaɓi return", "Ku ajiye rasidin kai kayan", "Ku duba an dawo da kuɗin"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Ku nemo imel na tabbacin oda a akwatin imel ɗinku (ko na wata sayayya da ta wuce), ku yi babban fayil (folder) ko lakabi (label) na imel mai suna \"Orders\" don ajiye shi. Idan kuna da odar da ba ta iso ba tukuna, ku bi diddiginta daga manhajar ko shafin shagon da kansa.",
          youCanNow: "ajiye bayanan oda, bin diddigin kunshi lafiya da fara mayar da kaya.",
          quickCheck: [
            { objective: "O3", q: "Mene ne tabbacin oda?", options: ["Tes da ke neman ku biya wani kuɗi", "Tallar sabon kaya", "Imel ɗin da shagon ke aikowa bayan kun saya", "Bayanin asusun banki"], answer: 2, why: "Shagon yana aiko da tabbacin oda ta imel; ku ajiye shi tare da bayananku." },
            { objective: "O3", q: "Kun kai kayan da kuke mayarwa ofishin gidan waya. Me za ku yi a gaba?", options: ["Ku jefar da rasidin", "Ku sake sayen kayan", "Ku goge manhajar shagon", "Ku ajiye rasidin kai kayan ku duba bayanin asusunku don ganin an dawo da kuɗin"], answer: 3, why: "Rasidin yana tabbatar da cewa kun mayar da shi, kuma bayanin asusun yana nuna an dawo da kuɗin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sayayya ta intanet lafiya",
        questions: [
          { objective: "O1", q: "Wata talla tana nuna talabijin mai suna sananne a kashi ɗaya cikin goma na farashinsa na yau da kullum. Me ya kamata ku fara yi?", options: ["Ku saya kafin ya ƙare", "Ku tabbatar da shagon: ku nemi sunansa tare da \"complaint\" ko \"scam\"", "Ku biya da katin kyauta", "Ku aika lambar katinku ta tes"], answer: 1, why: "Farashin da ya yi kyau fiye da yadda zai zama gaskiya alamar gargaɗi ne; ku fara bincika." },
          { objective: "O1", q: "Me FTC ta ce game da https da alamar kwaɗo?", options: ["Suna tabbatar da cewa shago mai gaskiya ne", "Suna kan shagunan bogi kaɗai", "Suna nufin aikawa kyauta", "Suna taimakawa, amma 'yan damfara ma suna iya amfani da su"], answer: 3, why: "Ɓoye bayanai (encryption) yana kare haɗin ne, ba gaskiyar mai sayarwa ba." },
          { objective: "O2", q: "Wace hanyar biya ce ke ba ku kariya mafi ƙarfi don yin ƙorafi kan cirewar da ba daidai ba?", options: ["Katin credit", "Katin kyauta", "Wire transfer", "Kuɗin kirifto"], answer: 0, why: "FTC ta ce katin credit yana ba da kariya mafi ƙarfi idan aka yi ƙorafi." },
          { objective: "O2", q: "Wani mai sayarwa ya nemi ku biya da katin kyauta. Me za ku yi?", options: ["Ku sayi katin kyautar", "Ku biya rabi da katin kyauta", "Ku ƙi; alamar zamba ce", "Ku aika hoton katunan"], answer: 2, why: "FTC ta yi gargaɗi kada a taɓa biyan masu sayarwa ta intanet da katin kyauta." },
          { objective: "O3", q: "Kun sami tes game da \"matsalar isar da kaya\" mai hanyar haɗi. Mene ne mataki mafi aminci?", options: ["Ku danna hanyar haɗin", "Ku mayar da amsa da adireshinku", "Ku duba odarku a manhajar ko shafin shagon da kansa", "Ku biya ɗan ƙaramin kuɗin"], answer: 2, why: "Ku bi diddigi daga asusunku, ba daga hanyoyin haɗi na ba-zata ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Banki ta intanet lafiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Amfani da manhajar ko shafin bankinku lafiya",
          minutes: 5,
          goal: "Shiga manhajar ko shafin hukuma na bankinku ku duba kuɗin da ke asusu da cinikinku.",
          text: [
            "Banki ta intanet yana bar ku ga kuɗin da ke asusunku, ku duba abin da ya shigo da abin da ya fita, ku biya kuɗaɗen bukatu, ku kuma motsa kuɗi tsakanin asusunku na kanku, daga wayarku ko kwamfutarku.",
            "Ku samo manhajar bankin daga shagon manhajoji na hukuma kaɗai, ku duba cewa wanda ya yi ta (developer) bankinku ne na gaske. Ko ku rubuta adireshin shafin bankin da kanku; kuna iya samun shi a kan katinku, a bayanin asusunku, ko ta tambaya a reshen bankin. Kada ku taɓa shiga asusu daga hanyar haɗi a cikin imel ko tes.",
            "Ku yi amfani da kalmar sirri mai ƙarfi da ba ku amfani da ita a ko'ina kuma, ku kunna tabbatarwa mataki biyu (two-step verification). Kada ku yi banki a Wi-Fi na jama'a ba tare da data ta wayarku ba, kuma koyaushe ku fita daga asusu idan kun gama, musamman a kwamfutar da ake rabawa."
          ],
          steps: ["Ku saka manhajar hukuma ta bankin ko ku rubuta adireshin bankin da kanku.", "Ku shiga da kalmar sirri mai ƙarfi da ta keɓanta.", "Ku kunna tabbatarwa mataki biyu a saitunan tsaro (security settings).", "Ku duba kuɗin da ke asusunku da cinikin kwanan nan.", "Ku fita daga asusu idan kun gama."],
          words: [["Kuɗin da ke asusu (balance)", "yawan kuɗin da ke cikin asusunku yanzu."], ["Ciniki (transaction)", "biya ɗaya da ya shigo ko ya fita daga asusunku."], ["Tabbatarwa mataki biyu (two-step verification)", "gwaji na biyu idan kuna shiga asusu, yawanci code da aka turo wayarku."]],
          slides: [
            { title: "Abin da banki ta intanet ke yi", bullets: ["Ganin kuɗin da ke asusu da cinikinku", "Biyan kuɗaɗen bukatu", "Motsa kuɗi tsakanin asusunku na kanku"] },
            { title: "Ku isa can lafiya", bullets: ["Manhajar hukuma daga shagon manhajoji", "Ko ku rubuta adireshin bankin da kanku", "Kada ku taɓa shiga daga hanyar haɗi ta imel ko tes"] },
            { title: "Ku kasance cikin tsaro", bullets: ["Kalmar sirri mai ƙarfi da ta keɓanta", "Tabbatarwa mataki biyu a kunne", "Ku fita daga asusu idan kun gama"] }
          ],
          tryIt: "Ku buɗe manhajar ko shafin hukuma na bankinku (ku rubuta adireshin da kanku). Ku shiga, ku duba kuɗin da ke asusunku da cinikinku guda biyar na ƙarshe, sannan ku fita daga asusu.",
          youCanNow: "shiga bankinku lafiya da duba kuɗin da ke asusunku da cinikinku.",
          quickCheck: [
            { objective: "O4", q: "A ina za ku sami adireshin shafin bankinku na gaske?", options: ["A kan katinku, a bayanin asusunku ko ta tambaya a reshen bankin", "A cikin tes da ke cewa an kulle asusunku", "A cikin talla a kafofin sada zumunta", "A cikin imel daga wanda ba ku sani ba"], answer: 0, why: "Katinku, bayanin asusunku da reshen bankin suna ba da adireshin bankin na gaske." },
            { objective: "O4", q: "Kun duba kuɗin da ke asusunku a kwamfutar ɗakin karatu. Me za ku yi kafin ku tafi?", options: ["Ku bar shafin a buɗe", "Ku fita daga asusu", "Ku ajiye kalmar sirrinku a burauzar", "Ku rubuta kalmar sirrinku a takarda"], answer: 1, why: "Koyaushe ku fita daga asusu idan kun gama banki, musamman a kwamfutar da ake rabawa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gane cirewar da ba daidai ba da sanin cewa kuɗinku yana da kariya",
          minutes: 5,
          goal: "Duba cinikinku ku san abin da za ku yi game da cirewar kuɗin da ba ku yi ba.",
          text: [
            "Ku duba cinikinku aƙalla sau ɗaya a mako. Ku nemi cirewar kuɗin da ba ku gane ba, ko da ƙanana ne; ɓarayi wani lokaci suna fara gwada kati da ɗan ƙaramin cirewa. Bankuna da yawa suna bar ku kunna sanarwa (alert) da ke aiko muku tes ko imel idan kuɗi ya fita daga asusunku.",
            "Idan kun ga cirewar kuɗin da ba ku yi ba, ku kira lambar da ke bayan katinku ko a manhajar hukuma, ku yi sauri. Katuna da manhajoji da yawa suna bar ku kulle ko dakatar da katin nan take.",
            "Kuɗin da ke banki da FDIC ke inshora yana da kariya har zuwa $250,000 ga kowane mai ajiya, a kowane banki, ga kowane nau'in mallakar asusu. Ƙungiyoyin ajiya na haɗin gwiwa (credit unions) da NCUA ke inshora suna da iyaka iri ɗaya ta $250,000. FDIC ta ce kuɗin kirifto, hannun jari (stocks), takardun bashi (bonds) da asusun zuba jari na haɗin gwiwa (mutual funds) ba su da inshora, ko da banki ne ya sayar da su."
          ],
          steps: ["Ku duba cinikinku kowane mako.", "Ku kunna sanarwar asusu a manhajar.", "Idan cirewar ba taku ba ce: ku kulle katin a manhajar idan za ku iya.", "Ku kira lambar da ke bayan katinku.", "Ku jira matakin bankin na gaba ku duba bayanin asusunku na gaba."],
          words: [["Sanarwa (alert)", "tes ko imel da bankinku ke aikowa idan wani abu ya faru a asusunku."], ["FDIC", "Federal Deposit Insurance Corporation, hukumar da ke inshorar kuɗi a bankunan Amurka."], ["NCUA", "National Credit Union Administration, hukumar da ke inshorar kuɗi a credit unions na Amurka."]],
          slides: [
            { title: "Ku duba kowane mako", bullets: ["Ku nemi cirewar kuɗin da ba ku sani ba", "Ko da ƙanana ne", "Ku kunna sanarwar asusu"] },
            { title: "Cirewar ba taku ba ce", bullets: ["Ku kulle katin a manhajar", "Ku kira lambar da ke bayan katinku", "Ku yi sauri"] },
            { title: "Ajiyarku tana da inshora", bullets: ["Bankunan FDIC: $250,000 ga kowane mai ajiya, kowane banki, kowane nau'in mallaka", "Credit unions na NCUA: iyaka ta $250,000"] },
            { title: "Ba su da inshora", bullets: ["Kuɗin kirifto, hannun jari, bonds da mutual funds", "Ko da banki ne ya sayar da su"] }
          ],
          sources: [{ name: "FDIC: Understanding deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }, { name: "NCUA: Share insurance coverage", url: "https://ncua.gov/consumers/share-insurance-coverage" }],
          tryIt: "A manhajar bankinku, ku nemo inda ake saita sanarwa ku kunna sanarwa don biyan kuɗi. Sannan ku nemo maɓallin da ke kulle ko dakatar da katinku (kada ku danna shi sai dai idan kuna buƙata).",
          youCanNow: "duba cinikinku, saita sanarwa, da yin aiki da sauri kan cirewar kuɗin da ba ku yi ba.",
          quickCheck: [
            { objective: "O5", q: "Me yasa ya kamata ku duba ƙananan cirewar kuɗin da ba ku gane ba?", options: ["Ƙananan cirewa koyaushe ba laifi", "Bankuna ba sa taɓa yin kuskure", "Ƙananan cirewa kyauta ne", "Ɓarayi wani lokaci suna fara gwada kati da ɗan ƙaramin cirewa"], answer: 3, why: "Ɗan ƙaramin cirewar da ba a sani ba yana iya zama gwaji kafin manya." },
            { objective: "O5", q: "Kuna son sani nan take idan kuɗi ya fita daga asusunku. Me za ku yi?", options: ["Ku duba sau ɗaya a shekara", "Ku nemi baƙo ya kula da shi", "Ku kunna sanarwa a manhajar bankinku don ta aiko muku tes ko imel", "Ku rufe asusunku"], answer: 2, why: "Bankuna da yawa suna ba da sanarwa idan kuɗi ya fita daga asusunku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Zambar kuɗi: kiran banki na bogi da dabarun manhajar biya",
          minutes: 5,
          goal: "Gane zambar kuɗi ku dakatar da ita.",
          text: [
            "Wata zamba da aka saba: wani yana kira, ko tura tes ko imel, yana yin kamar shi ne ƙungiyar yaƙi da zamba ta bankinku. Yana cewa asusunku yana cikin haɗari, sai ya nemi kalmar sirrinku, code da aka turo wayarku, ko ya ce ku motsa kuɗi zuwa \"asusu mai aminci\". Banki na gaske ba zai taɓa neman waɗannan ba.",
            "FTC ta lissafa alamun zamba guda huɗu: suna yin kamar su wani ne da kuka amince da shi, akwai matsala ko kyauta, suna matsa muku ku yi aiki yanzu, kuma suna son biya ta hanyar da ba a saba ba, kamar katin kyauta, wire transfer, manhajar biya ko kuɗin kirifto.",
            "Idan kuna shakka, ku katse wayar. Ku kira lambar da ke bayan katinku. Ku ɗauki kuɗin da ake turawa ta manhajar biya kamar tsabar kuɗi: ku aika wa mutanen da kuka sani kaɗai. A Amurka, ku kai rahoton zamba a reportfraud.ftc.gov."
          ],
          steps: ["Kada ku taɓa raba kalmar sirrinku ko code da aka turo wayarku.", "Kada ku taɓa motsa kuɗi zuwa \"asusu mai aminci\" don wani mai kira ya ce haka.", "Ku katse wayar ku kira lambar da ke bayan katinku.", "Ku tura kuɗi ta manhajar biya ga mutanen da kuka sani kaɗai.", "Ku kai rahoton zamba a reportfraud.ftc.gov."],
          words: [["Yin sojan gona (impersonation)", "yin kamar kai wani ne, kamar bankinku ko ofishin gwamnati."], ["Manhajar biya (payment app)", "manhajar da ke tura kuɗi daga mutum zuwa mutum, kamar Venmo, Cash App ko Zelle."]],
          slides: [
            { title: "Kiran banki na bogi", bullets: ["\"Asusunku yana cikin haɗari\"", "Suna neman kalmar sirrinku ko code", "Ko su ce ku motsa kuɗi zuwa \"asusu mai aminci\""] },
            { title: "Alamun zamba na FTC", bullets: ["Yana yin kamar wanda kuka amince da shi", "Matsala ko kyauta", "Matsa muku ku yi aiki yanzu", "Biya da ba a saba ba: katin kyauta, wire, manhaja, kirifto"] },
            { title: "Abin da za ku yi", bullets: ["Ku katse wayar", "Ku kira lambar da ke bayan katinku", "Manhajar biya: mutanen da kuka sani kaɗai"] },
            { title: "Ku kai rahoto", bullets: ["reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Atisayen aikin ƙarshe: ku rubuta lambar wayar da ke bayan katin bankinku a wuri mai aminci a gida. Sannan ku yi aikin ƙarshe: ku tabbatar da shago, ku zaɓi hanyar biyanku, ku duba cinikinku a banki.",
          youCanNow: "gane kiran banki na bogi ko dabarar manhajar biya, dakatar da shi, da kai rahotonsa.",
          quickCheck: [
            { objective: "O6", q: "Me banki na gaske ba zai taɓa neman ku ba?", options: ["Ku ziyarci reshen banki", "Kalmar sirrinku ko code da aka turo wayarku", "Ku duba bayanin asusunku", "Ku kunna tabbatarwa mataki biyu"], answer: 1, why: "Banki na gaske ba zai taɓa neman kalmar sirrinku, code, ko ku motsa kuɗi zuwa \"asusu mai aminci\" ba." },
            { objective: "O6", q: "Wani tes daga \"bankinku\" ya ce asusunku yana cikin haɗari kuma ku kira lambar da ke cikin tes ɗin. Me za ku yi?", options: ["Ku yi watsi da lambar da ke cikin tes ku kira lambar da ke bayan katinku", "Ku kira lambar da ke cikin tes ɗin", "Ku mayar da amsa da kalmar sirrinku", "Ku motsa kuɗinku zuwa asusun da suka ba ku"], answer: 0, why: "Kiran lambar da ke kan katinku yana kai ku ga bankinku na gaske." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Banki ta intanet lafiya",
        questions: [
          { objective: "O4", q: "Mene ne hanya mafi aminci ta isa shafin bankinku?", options: ["Ku rubuta adireshin da kanku ko ku yi amfani da manhajar hukuma", "Ku danna hanyar haɗi a cikin tes", "Ku yi bincike ku danna talla ta farko", "Ku yi amfani da hanyar haɗin da mai kira ya ba ku"], answer: 0, why: "Rubuta adireshin ko amfani da manhajar hukuma yana hana ku shiga shafukan bogi." },
          { objective: "O5", q: "Kun ga ɗan ƙaramin cirewar kuɗin da ba ku gane ba. Me za ku yi?", options: ["Ku yi watsi da shi domin ƙarami ne", "Ku rubuta game da shi a intanet", "Ku jira shekara ɗaya", "Ku kulle katin ku kira lambar da ke bayansa"], answer: 3, why: "Ɓarayi sau da yawa suna gwada kati da ɗan ƙaramin cirewa; ku yi sauri." },
          { objective: "O5", q: "Mene ne yawan inshorar FDIC na yau da kullum?", options: ["$1,000 ga kowane mutum", "$250,000 ga kowane mai ajiya, a kowane banki mai inshora, ga kowane nau'in mallaka", "Ba shi da iyaka", "Babu; bankuna ba su da inshora"], answer: 1, why: "FDIC tana inshora har zuwa $250,000 ga kowane mai ajiya, a kowane banki, ga kowane nau'in mallaka." },
          { objective: "O6", q: "Wani mai kira daga \"bankinku\" yana neman code da aka turo wayarku yanzu. Me za ku yi?", options: ["Ku karanta masa shi", "Ku katse wayar ku kira lambar da ke kan katinku", "Ku ba shi rabinsa", "Ku tura masa shi ta tes"], answer: 1, why: "Bankuna na gaske ba sa taɓa neman wannan code." },
          { objective: "O5", q: "Wanne ne FDIC BA ta inshora?", options: ["Asusun ajiya na yau da kullum (checking) a banki mai inshora", "Asusun ajiya (savings) a banki mai inshora", "Takardar ajiya na wa'adi (certificate of deposit) a banki mai inshora", "Kuɗin kirifto"], answer: 3, why: "FDIC ta ce kuɗin kirifto ba su da inshora." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sayayya da Banki ta Intanet Lafiya",
    questions: [
      { objective: "O1", q: "Hanya mafi aminci ta isa shago a intanet ita ce:", options: ["Rubuta adireshinsa da kanku ko amfani da manhajarsa ta hukuma", "Danna talla a kafofin sada zumunta", "Amfani da hanyar haɗi daga tes na baƙo", "Duba (scan) kowace lambar QR"], answer: 0, why: "Wannan yana hana ku shiga shafukan da ke kwaikwayon na gaske." },
      { objective: "O1", q: "FTC ta ba da shawarar a nemi sunan shago tare da:", options: ["\"free\" (kyauta)", "\"coupon\" (takardar rangwame)", "\"complaint\" ko \"scam\"", "\"cheap\" (mai arha)"], answer: 2, why: "Yana nuna mummunan abin da ya faru da sauran masu saye." },
      { objective: "O1", q: "Ya kamata a karanta sharhi:", options: ["Taurari kawai", "Kwata-kwata ba", "Da kulawa, domin wasu na bogi ne", "Na farko kawai"], answer: 2, why: "FTC ta yi gargaɗi cewa wasu sharhi na bogi ne." },
      { objective: "O1", q: "Kafin sayayya, ku duba ƙa'idar mayar da kaya don:", options: ["Kwanaki nawa kuke da su da wa zai biya kuɗin mayar da kaya", "Sunan mai shagon", "Tambarin shagon", "Launukan shafin"], answer: 0, why: "Sharuɗɗan mayar da kaya sun bambanta, kuma suna da muhimmanci idan wani abu ya lalace." },
      { objective: "O1", q: "Tayin kaya mai tsada mai suna sananne da ya yi kyau fiye da yadda zai zama gaskiya yana iya zama:", options: ["Kyauta daga banki", "Koyaushe na gaske ne", "Tayin gwamnati", "Na jabu ko na sata"], answer: 3, why: "FTC ta yi gargaɗi cewa irin waɗannan tayi suna iya zama kayan jabu ko na sata." },
      { objective: "O2", q: "Wace hanyar biya FTC ta ce tana ba da kariya mafi ƙarfi idan aka yi ƙorafi?", options: ["Wire transfer", "Katin credit", "Katin kyauta", "Kuɗin kirifto"], answer: 1, why: "Katin credit yana bar ku yi ƙorafi kan cirewar da ba daidai ba." },
      { objective: "O2", q: "A ina ya kamata ku rubuta lambar katinku?", options: ["A cikin imel na amsa", "A shafin biya na shagon da kuka tabbatar", "A cikin saƙon tes", "A cikin hira a kafofin sada zumunta"], answer: 1, why: "A shafin biya na shagon da kuka tabbatar kaɗai." },
      { objective: "O2", q: "A kwamfutar ɗakin karatu, burauzar ta tambaye ku ko ta ajiye katinku. Ku:", options: ["Ce e", "Ajiye shi sau biyu", "Rubuta shi a ƙaramar takarda mai manne", "Ce a'a"], answer: 3, why: "Kada ku taɓa ajiye bayanan kati a kwamfutar da ake rabawa." },
      { objective: "O3", q: "Wane bayani ya kamata ku ajiye bayan sayayya ta intanet?", options: ["Tabbacin oda", "Babu komai", "Kwalin kawai", "Tallar da kuka gani"], answer: 0, why: "Yana tabbatar da abin da kuka saya da abin da kuka biya." },
      { objective: "O3", q: "Wani tes ya ce kunshinku ya makale kuma yana neman ku biya ɗan ƙaramin kuɗi ta hanyar haɗi. Ya kamata ku:", options: ["Biya kuɗin", "Danna don gani", "Duba odar a manhajar ko shafin shagon da kansa", "Mayar da amsa da lambar katinku"], answer: 2, why: "Tes na bogi game da isar da kaya zamba ce da aka saba gani." },
      { objective: "O3", q: "Idan mai sayarwa ya ƙi gyara matsala, a Amurka kuna iya kai rahoto ga:", options: ["Wata ƙungiya a kafofin sada zumunta", "Tallar mai sayarwar", "reportfraud.ftc.gov", "Babu kowa"], answer: 2, why: "FTC tana karɓar rahotannin zamba a can." },
      { objective: "O4", q: "\"Balance\" (kuɗin da ke asusu) shi ne:", options: ["Yawan kuɗin da ke asusunku yanzu", "Biya ɗaya", "Kalmar sirri", "Reshen banki"], answer: 0, why: "Balance yana nuna abin da kuke da shi yanzu." },
      { objective: "O4", q: "Idan kun gama banki ta intanet ya kamata ku:", options: ["Bar shi a buɗe", "Ajiye kalmar sirrinku a burauzar kwamfutar da ake rabawa", "Raba allon", "Fita daga asusu"], answer: 3, why: "Fita daga asusu yana hana mutum na gaba shiga." },
      { objective: "O4", q: "Tabbatarwa mataki biyu a asusun bankinku yana nufin:", options: ["Kalmomin sirri biyu da aka rubuta", "Gwaji na biyu, kamar code da aka turo wayarku", "Katin banki biyu", "Manhaja mai jinkiri"], answer: 1, why: "Yana ƙara code da ɓarawo ba zai samu ba." },
      { objective: "O5", q: "Sau nawa ya fi kyau ku duba cinikinku?", options: ["Sau ɗaya a shekara", "Aƙalla sau ɗaya a mako", "Ba sau ɗaya ba", "Sai banki ya kira kawai"], answer: 1, why: "Duba kowane mako yana kama matsaloli da wuri." },
      { objective: "O5", q: "Wa ke inshorar ajiya a credit unions?", options: ["FTC", "Shagon manhajoji", "Mai ɗaukar ku aiki", "NCUA"], answer: 3, why: "NCUA tana inshorar credit unions masu inshorar tarayya." },
      { objective: "O6", q: "Wani mai kira ya ce asusunku yana cikin haɗari kuma dole ku motsa kuɗi zuwa \"asusu mai aminci\". Wannan:", options: ["Zamba ce", "Dawo da kuɗi ne", "Sabuwar doka ce", "Matakin banki ne na yau da kullum"], answer: 0, why: "Bankuna na gaske ba sa taɓa neman haka; zamba ce da aka saba gani." },
      { objective: "O6", q: "Ya kamata a ɗauki kuɗin da aka tura ta manhajar biya kamar:", options: ["Rance", "Katin credit", "Tsabar kuɗi: ku aika wa mutanen da kuka sani kaɗai", "Ajiya mai inshora"], answer: 2, why: "Yana da wuyar dawowa, kamar tsabar kuɗi." },
      { objective: "O6", q: "Wanne ne ɗaya daga cikin alamun zamba guda huɗu na FTC?", options: ["Gaisuwa mai ladabi", "Takardar biyan wuta ko ruwa ta gidan waya daga kamfanin", "Matsa muku ku yi aiki yanzu", "Biya a kanti a shago"], answer: 2, why: "'Yan damfara suna gaggauta ku don kada ku tsaya ku bincika." },
      { objective: "O6", q: "Idan kuna shakka game da kira daga bankinku, mataki mafi kyau shi ne:", options: ["Katse wayar ku kira lambar da ke bayan katinku", "Ba su kalmar sirrinku", "Ci gaba da magana", "Aika ɗan ƙaramin kuɗi"], answer: 0, why: "Kiran lambar da kuka sani yana kai ku ga bankin na gaske." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      7,
      8,
      9,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tabbatar da shago",
        objective: "O1",
        notYet: "An yi ƙasa da gwaje-gwaje uku, ko an isa shagon ta talla ko hanyar haɗi ta tes.",
        meets: "An yi dukkan gwaje-gwaje uku: adireshin shafi na gaske, sharhi da korafe-korafe, da ƙa'idar mayar da kaya.",
        exceeds: "Ya kuma rubuta kwanaki nawa ake da su don mayar da kayan da wa zai biya kuɗin mayar da shi."
      },
      {
        name: "Zaɓin hanyar biya",
        objective: "O2",
        notYet: "Ba a zaɓi hanyar biya ba, ko an zaɓi katin kyauta, wire, manhajar biya ko kirifto.",
        meets: "Ya zaɓi hanya mai kariya kamar katin credit kuma ya faɗi dalili.",
        exceeds: "Ya kuma faɗi cewa kada a ajiye katin a kwamfutar da ake rabawa."
      },
      {
        name: "Duba asusun banki",
        objective: "O4",
        notYet: "Ya shiga daga hanyar haɗi, ko bai iya samun kuɗin da ke asusu ko cinikin ba.",
        meets: "Ya shiga ta manhajar hukuma ko adireshin da ya rubuta da kansa, kuma ya sami kuɗin da ke asusu da cinikin kwanan nan.",
        exceeds: "Ya kuma kunna tabbatarwa mataki biyu ko sanarwa, kuma ya fita daga asusu."
      },
      {
        name: "Shirin cirewar da ba daidai ba",
        objective: "O5",
        notYet: "Babu shiri, ko shirin yana amfani da lamba daga tes ko imel.",
        meets: "Ya ce zai kulle katin ya kira lambar da ke kan katin ko a manhajar hukuma da sauri.",
        exceeds: "Ya kuma ce zai riƙa duba cinikinsa kowane mako ya kuma ajiye bayanai don ƙorafi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric na aikin ƙarshe",
      "Masu koyo da suka ce suna duba cinikinsu a banki aƙalla kowane mako bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun guji shagon bogi, tes na bogi game da isar da kaya ko kiran wanda ke yin sojan gona a matsayin banki",
      "Masu koyo da suka ce sun gane kuma sun kai rahoton cirewar kuɗin da ba su yi ba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet, a haɗin sirri (Wi-Fi na gida ko data ta wayar kanta)",
      "Manhajar hukuma ta bankin mai koyo ko adireshin da ya rubuta da kansa, idan yana da asusun banki",
      "Abin misali da za a tabbatar da shi, kamar wani abu da yake buƙata a wannan watan",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Masu koyo ba sa yin sayayya ta gaske a aji; aikin sayayya yana tsayawa a shafin biya.",
      "Kada ku taɓa neman masu koyo su nuna kuɗin da ke asusunsu, lambobin katinsu ko kalmomin sirrinsu; ku bar su su yi matakan banki a sirrance a na'urarsu.",
      "Ku guji banki a Wi-Fi na jama'a na shirin; ku nemi masu koyo su yi amfani da data ta wayarsu ko su yi matakin banki a gida.",
      "Masu koyo da ba su da asusun banki za su iya yin darasin banki da shafin gwaji (demo) na jama'a na wani banki ko ta hanyar bayyana matakan; ku nuna musu shirye-shiryen yankinku da ke taimakawa buɗe asusu mai aminci da mai rahusa idan shirinku yana da ɗaya.",
      "Ku yi atisayen kiran banki na bogi a matsayin wasan kwaikwayo don masu koyo su koyi katse wayar su kira lambar da ke kan katinsu."
    ]
  }
};
