"use strict";

// Koach Learn course, Hausa (ha) translation of shared/personal-finance-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "personal-finance-basics-ha",
  lang: "ha",
  translationOf: "personal-finance-basics",
  category: "Seniors and Technology",
  name: "Tushen Sarrafa Kuɗi: Kasafin Kuɗi, Bashi da Ajiya",
  skills: "Yin kasafin kuɗi na wata, Karanta rahoton bashinku (credit report), Shirin rage bashi, Gina ajiyar gaggawa, Ajiya a banki ko mobile money, Gane lamunin cuta da zamba",
  outcome: "yin shirin kuɗi na shafi ɗaya: kasafin kuɗi na wata, shirin rage bashi, burin ajiyar gaggawa da ranar duba rahoton bashinku, da gane lamuni ko tayin da zai iya kama ku a tarko.",
  about: [
    "Wannan kwas ɗin na duk wanda yake son ƙarin iko kan kuɗinsa ne: kaka mai samun kuɗin fansho ƙayyadadde, matashi da ya sami albashinsa na farko, manomi da ake biya lokacin girbi, ɗan wasa mai sabon mai ɗaukar nauyi (sponsor), tsohon soja da ya fara aikin farar hula, ko wanda ya dawo gida yana sake farawa.",
    "Za ku rubuta kasafin kuɗi mai sauƙi, ku karanta rahoton bashinku (credit report), ku zaɓi bashin da za ku fara biya, ku fara asusun gaggawa, ku koyi hanyoyi masu aminci na ajiya a banki, credit union ko mobile money, kuma ku koyi alamun gargaɗin lamuni irin na payday da zambar kuɗi.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" da za ku yi da lambobinku a takarda ko a spreadsheet. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Wannan kwas ɗin yana koyar da ƙwarewar sarrafa kuɗi ne; ba ya ba da shawarar zuba jari. Don manyan shawarwari, ku yi magana da mutumin da kuka amince da shi kuma ƙwararre, kamar mai ba da shawarar bashi na ƙungiya mai zaman kanta (nonprofit credit counselor)."
  ],
  finalTask: "Ku rubuta shirin kuɗi na shafi ɗaya: (1) kasafin kuɗi na wata da kuɗin shigarku, buƙatu, abubuwan da kuke so da ajiya; (2) jerin bashinku da bashi ɗaya da za ku ƙara biya a kansa; (3) burin ajiyar gaggawa da nawa za ku ajiye kowane mako ko wata, da kuma a ina; (4) ranar da za ku duba rahoton bashinku. Sannan ku karanta wani tayin lamuni ko na kuɗi da kuka gani ku rubuta duk alamun gargaɗin da kuka gani.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Duk wanda yake son ƙarin iko kan kuɗinsa: tsofaffi masu ƙayyadadden kuɗin shiga, matasa da suka sami albashin farko, manoma da ake biya lokacin girbi, 'yan wasa masu sabon mai ɗaukar nauyi, tsofaffin sojoji da suka fara aikin farar hula, da mutanen da suka dawo gida suna sake farawa.",
    startingPoint: "Suna samun ko karɓar ɗan kuɗi kuma suna biyan kuɗaɗe, amma da yawa ba sa rubuta kasafin kuɗi, ba su taɓa karanta rahoton bashinsu ba, suna da bashi ba tare da shirin biya ba, ba su da ajiyar gaggawa sosai, ko suna wahala wajen gane lamunin cuta ko zamba.",
    gap: "Ba tare da shiri ba, ƙananan abubuwan da ba a zata ba suna zama bashi, biyan da aka rasa da zamba da ke jawo wa iyalai asarar kuɗi da damuwa. Masu koyo suna buƙatar shirin kuɗi mai sauƙi na shafi ɗaya da al'adar duba tayi, don su ci gaba da iko kuma su gina ajiya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli, da lissafi mai sauƙi",
      "Ba shawarar zuba jari ba ce; manyan shawarwari suna zuwa ga mutumin da aka amince da shi kuma ƙwararre, kamar mai ba da shawarar bashi na nonprofit",
      "Sirri: babu lambobin asusun banki, lambobin kati ko kalmomin sirri a kayan AI ko a rabawa a aji",
      "Dokoki da kuɗaɗen caji sun bambanta bisa ƙasa da mai ba da sabis; masu koyo suna duba teburin kuɗaɗen caji da majiyoyin hukuma",
      "Na'urori: takarda ko spreadsheet kyauta; wasu masu koyo suna amfani da mobile money"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da kuɗin shiga da kashe-kashen watan da ya gabata", action: "rubuta kasafin kuɗi na wata da ke raba kashe-kashe zuwa buƙatu, abubuwan da ake so da ajiya", standard: "da layin ajiya, kuma an duba ko jimillar ta wuce sifili ko ta yi ƙasa da shi" },
    { id: "O2", condition: "Ta amfani da rahoton bashi kyauta (AnnualCreditReport.com a Amurka)", action: "duba kowane asusu a rahoton bashinku da ƙalubalantar duk wani kuskure", standard: "kuna ajiye kwafin duk abin da kuka aika" },
    { id: "O3", condition: "Idan aka ba ku jerin basussuka", action: "zaɓar bashin da za ku ƙara biya a kansa ta hanyar mafi girman riba ko ta mafi ƙanƙantar saura", standard: "yayin da kuke biyan aƙalla mafi ƙarancin biya na kowane bashi a kan lokaci" },
    { id: "O4", condition: "Ta amfani da kasafin kuɗinku", action: "sa burin ajiyar gaggawa mai adadi, rana da hanyar ajiya ta atomatik", standard: "an ƙara shi a matsayin layi a kasafin kuɗinku" },
    { id: "O5", condition: "Idan aka ba ku banki, credit union, sabis na mobile money ko ƙungiyar ajiya", action: "duba kuɗaɗen caji da dokoki kafin zaɓar wuri mai aminci don ajiya", standard: "kuna rubuta nawa ake caji don saka kuɗi da fitar da shi" },
    { id: "O6", condition: "Idan aka ba ku tayin lamuni ko na kuɗi", action: "gane alamun gargaɗin lamunin cuta ko zamba kafin ku amince", standard: "kuna gano kowace alamar gargaɗi a cikin tayin" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ku san inda kuɗinku yake zuwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yin kasafin kuɗi mai sauƙi na wata",
          minutes: 5,
          goal: "Rubuta kasafin kuɗi na wata da ke nuna kuɗin shigarku, buƙatu, abubuwan da kuke so da ajiya.",
          text: [
            "Kasafin kuɗi (budget) shiri ne na kuɗinku. Yana amsa tambayoyi biyu: nawa ne ke shigowa kowane wata, kuma ina yake zuwa. Ba tare da shiri ba, kuɗi yakan ɓace a ƙananan abubuwa, kuma manyan kuɗaɗen biya suna zuwa kamar abin mamaki.",
            "Ku fara da kuɗin shiga: albashi bayan haraji, tallafi kamar Social Security (tallafin gwamnatin Amurka) ko fansho, kuɗin sayar da amfanin gona ko kaya, kyauta daga abokan ciniki (tips), ko kuɗin mai ɗaukar nauyi. Idan kuɗin shigarku yana canjawa daga wata zuwa wata, ku yi amfani da watan da ya fi ƙaranci a cikin watanni na yau da kullum, don shirin ya yi aiki ko a watan da kuɗi bai yi yawa ba.",
            "Sannan ku jera kashe-kashenku a rukuni uku. Buƙatu su ne abin da dole ku biya: gida, abinci, wuta da ruwa, sufuri, magani, mafi ƙarancin biyan bashi. Abubuwan da ake so suna da daɗi amma ba dole ba ne: cin abinci a waje, sababbin tufafi, sabis na kallo a intanet (streaming). Ajiya ita ce kuɗin da kuka keɓe da gangan. Ku saka ajiya a cikin shirin kamar kuɗin biya, ko da kaɗan ne.",
            "Idan kashe-kashe sun fi kuɗin shiga, ku fara rage abubuwan da ake so, sannan ku nemi hanyoyi masu rahusa na biyan buƙatu. Mataimakin AI zai iya taimaka muku yin teburin kasafin kuɗi babu komai ko ya ba da shawarar hanyoyin rage kashe-kashe, amma ku rubuta adadi na kusan-kusan kawai, kada ku taɓa rubuta lambobin asusu ko kalmomin sirri."
          ],
          steps: ["Ku rubuta jimillar kuɗin shigarku na wata bayan haraji. Idan yana canjawa, ku yi amfani da wata mai ƙaranci.", "Ku jera buƙatunku da nawa kowanne ke ci a wata.", "Ku jera abubuwan da kuke so da nawa kowanne ke ci a wata.", "Ku zaɓi adadin ajiya, ko da kaɗan ne.", "Ku cire buƙatu, abubuwan da ake so da ajiya daga kuɗin shiga. Idan amsar ta yi ƙasa da sifili, ku fara rage abubuwan da ake so.", "Ku duba shirin a ƙarshen wata ku gyara shi."],
          words: [["Kasafin kuɗi (budget)", "shirin yadda za ku yi amfani da kuɗin da kuke samu kowane wata."], ["Kuɗin shiga (income)", "kuɗin da ke shigowa: albashi, tallafi, sayarwa, tips."], ["Buƙatu (needs)", "kashe-kashen da dole ku biya don rayuwa da aiki, kamar haya, abinci da magani."], ["Abubuwan da ake so (wants)", "abubuwan da suke da daɗi a samu amma za ku iya rayuwa ba tare da su ba."]],
          slides: [
            { title: "Kasafin kuɗi shiri ne na kuɗinku", bullets: ["Nawa ne ke shigowa", "Ina yake zuwa", "Babu ƙarin kuɗaɗen biya na ba-zata"] },
            { title: "Ku fara da kuɗin shiga", bullets: ["Albashi bayan haraji, tallafi, sayarwa, tips", "Idan yana canjawa, ku yi shiri da wata mai ƙaranci"] },
            { title: "Rukuni uku na kashe-kashe", bullets: ["Buƙatu: gida, abinci, sufuri, magani", "Abubuwan da ake so: cin abinci a waje, ƙarin abubuwa, biyan sabis", "Ajiya: ku keɓe ta kamar kuɗin biya"] },
            { title: "Idan lissafin bai daidaita ba", bullets: ["Ku fara rage abubuwan da ake so", "Ku nemi hanyoyi masu rahusa na biyan buƙatu", "AI zai iya zana tebur; kada ku rubuta lambobin asusu"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Consumer tools and money guides", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          tryIt: "A takarda ko a spreadsheet kyauta (Google Sheets ko Excel), ku rubuta kuɗin shigarku na watan da ya gabata da duk kashe-kashen da kuke tunawa. Ku sa wa kowane kashe-kashe alamar B don buƙata ko S don abin da ake so, ku ƙara layin ajiya, sannan ku cire. Shin amsarku ta wuce sifili ko ta yi ƙasa da shi?",
          youCanNow: "rubuta kasafin kuɗi na wata mai kuɗin shiga, buƙatu, abubuwan da ake so da ajiya, da ganin ko lissafin ya daidaita.",
          quickCheck: [
            { objective: "O1", q: "Wanne a cikin waɗannan abin da ake so ne, ba buƙata ba?", options: ["Haya", "Maganin kowace rana", "Sabon sabis na kallo a intanet", "Kuɗin mota zuwa wurin aiki"], answer: 2, why: "Sabis na kallo yana da daɗi a samu; haya, magani da sufuri zuwa aiki buƙatu ne." },
            { objective: "O1", q: "Kasafin kuɗinku yana nuna kuna kashe fiye da abin da kuke samu. Me za ku fara yi?", options: ["Ku rage wasu abubuwan da kuke so", "Ku daina biyan haya", "Ku ɗauki lamunin payday", "Ku jefar da kasafin kuɗin"], answer: 0, why: "Idan kasafin kuɗi ya yi ƙasa da sifili, abubuwan da ake so ne wuri na farko da za a rage." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Karanta rahoton bashinku da makin bashinku",
          minutes: 5,
          goal: "Samun rahoton bashinku kyauta da duba su don neman kurakurai.",
          text: [
            "A Amurka, rahoton bashi (credit report) tarihin yadda kuka karɓi bashi da yadda kuka biya ne: lamuni, katin bashi (credit card), wasu kuɗaɗen biya, da asusun da aka tura wa masu karɓar bashi (collections). Masu ba da lamuni, masu gidajen haya da wasu masu ɗaukar aiki suna dubawa. Makin bashi (credit score) lamba ce da aka yi daga wannan rahoto, wadda take ƙoƙarin hasashen ko za ku biya a kan lokaci.",
            "Kuna iya samun rahoton bashinku kyauta daga kamfanoni uku na ƙasa baki ɗaya, Equifax, Experian da TransUnion, a AnnualCreditReport.com ko ta kiran (877) 322-8228. Consumer Financial Protection Bureau (CFPB, hukumar kare masu amfani da kuɗi ta Amurka) ta ce yanzu kuna iya samunsu kyauta sau ɗaya a mako. Duba rahotonku da kanku ba ya rage makinku.",
            "Ku yi hankali: wasu shafukan intanet suna cewa \"free credit report\" (rahoton bashi kyauta) amma sai su saka ku a kayan da ake biya. Ku yi amfani da AnnualCreditReport.com.",
            "Ku karanta kowane rahoto ku nemi duk abin da ba naku ba: asusun da ba ku taɓa buɗewa ba, jinkirin biya da kuka biya a kan lokaci, bashin da aka rubuta sau biyu, ko suna ko adireshi da ba daidai ba. Kuna da haƙƙin ƙalubalantar kurakurai (dispute) a wurin kamfanin rahoton bashi da kasuwancin da ya ba da rahoton. Biya a kan lokaci, rage abin da ake bin ku a kati, da rashin buɗe sababbin asusu da yawa a lokaci ɗaya duk suna taimaka wa makinku a hankali."
          ],
          steps: ["Ku je AnnualCreditReport.com (ku rubuta adireshin da kanku) ko ku kira (877) 322-8228.", "Ku nemi rahotonku daga Equifax, Experian da TransUnion.", "Ku duba sunanku, adireshinku da kowane asusu.", "Ku zagaye duk abin da ba ku gane ba ko wanda ba daidai ba.", "Ku ƙalubalanci kurakurai a wurin kamfanin rahoton bashi, kuma ku ajiye kwafin abin da kuka aika."],
          words: [["Rahoton bashi (credit report)", "tarihin yadda kuka karɓi bashin kuɗi da yadda kuka biya."], ["Makin bashi (credit score)", "lamba da aka yi daga rahoton bashinku da masu ba da lamuni ke amfani da ita don auna haɗari."], ["Ƙalubalanta (dispute)", "faɗa wa kamfanin rahoton bashi cewa wani abu a rahotonku ba daidai ba ne, da neman su gyara shi."], ["Collections", "lokacin da aka tura bashi ga kamfanin da ke ƙoƙarin karɓar kuɗin da ba a biya ba."]],
          slides: [
            { title: "Rahoto da maki", bullets: ["Rahoto: tarihin karɓar bashinku da biyanku", "Maki: lamba da aka yi daga rahoton", "Masu ba da lamuni, masu gidajen haya da wasu masu ɗaukar aiki suna dubawa"] },
            { title: "Ku sami rahotonku kyauta", bullets: ["AnnualCreditReport.com ko (877) 322-8228", "Equifax, Experian da TransUnion", "Duba rahotonku da kanku ba ya rage makinku"] },
            { title: "Ku nemi kurakurai", bullets: ["Asusun da ba ku taɓa buɗewa ba", "Jinkirin biya na ƙarya ko abin da aka maimaita", "Suna ko adireshi da ba daidai ba"] },
            { title: "Ku taimaka wa makinku a hankali", bullets: ["Ku biya kowane kuɗin biya a kan lokaci", "Ku rage abin da ake bin ku a kati", "Ku ƙalubalanci kurakurai ku ajiye kwafi"] }
          ],
          sources: [
            { name: "CFPB: How do I get a free copy of my credit reports?", url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-a-free-copy-of-my-credit-reports-en-5/" },
            { name: "CFPB: Credit reports and scores", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" },
            { name: "AnnualCreditReport.com", url: "https://www.annualcreditreport.com/" }
          ],
          tryIt: "Idan kuna zaune a Amurka, ku nemi aƙalla rahoton bashi ɗaya kyauta a AnnualCreditReport.com ku duba kowane asusu a cikinsa. Idan kuna wajen Amurka, ku binciki ko ƙasarku tana da ofishin rahoton bashi (credit bureau) da yadda ake neman rahotonku daga gare shi. Ku rubuta abu ɗaya da kuka duba da abin da kuka gano.",
          youCanNow: "samun rahoton bashinku kyauta, karanta su don neman kurakurai, da sanin yadda ake ƙalubalantar kuskure.",
          quickCheck: [
            { objective: "O2", q: "Mene ne rahoton bashi?", options: ["Jerin kalmomin sirrin bankinku", "Kasafin kuɗinku na wata", "Tarihin lamunanku, katunanku da biyanku", "Takardar harajinku"], answer: 2, why: "Rahoton bashi yana jera asusun bashinku da yadda kuka biya su." },
            { objective: "O2", q: "Rahoton bashinku yana nuna adireshin da ba ku taɓa zama ba. Me za ku yi?", options: ["Ku ƙyale shi", "Ku ƙalubalance shi a wurin kamfanin rahoton bashi ku ajiye kwafi", "Ku rufe dukkan asusunku", "Ku biya baƙo don ya gyara shi"], answer: 1, why: "Ya kamata a ƙalubalanci kurakurai a rahoton bashi, a kuma ajiye kwafi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin shirin rage bashi",
          minutes: 5,
          goal: "Jera basussukanku ku zaɓi wanda za ku fara ƙara biya a kansa.",
          text: [
            "Bashi ya fi sauƙin cin nasara idan kuna iya ganin dukkansa. Ku yi jerin kowane bashi: wanda kuke bi, nawa, yawan riba (interest rate), mafi ƙarancin biya da ranar biya. Ku haɗa da katin bashi, katin shago, lamunin mota, kuɗin asibiti, bashin 'yan uwa, da duk lamunin da aka karɓa ta manhajar waya.",
            "Koyaushe ku biya aƙalla mafi ƙarancin biya na kowane bashi, a kan lokaci. Jinkirin biya yana ƙara kuɗin tara kuma yana iya cutar da makin bashinku. Sannan ku saka duk ƙarin kuɗi a kan bashi ɗaya kawai a lokaci ɗaya.",
            "Akwai hanyoyi biyu da aka saba amfani da su wajen zaɓi. Hanyar mafi girman riba tana ƙara biya a kan bashin da ke da mafi girman yawan riba, wanda yawanci yana ceton kuɗi mafi yawa. Hanyar mafi ƙanƙantar saura tana fara biya bashin da ya fi ƙanƙanta, wanda ke ba da nasara cikin sauri kuma yana ƙarfafa mutane da yawa su ci gaba. Dukansu suna aiki idan kun dage. Idan aka gama biya bashi ɗaya, ku mayar da biyansa zuwa na gaba.",
            "Idan ba za ku iya biya ba, ku kira mai ba da lamunin kafin ranar biya ku tambayi zaɓuɓɓuka. Mai ba da shawarar bashi na nonprofit ma zai iya taimaka muku yin shiri. Ku yi hankali da kamfanonin da ke neman babban kuɗi tun farko don su \"share\" bashinku."
          ],
          steps: ["Ku jera kowane bashi: wanda kuke bi, nawa, yawan riba, mafi ƙarancin biya, ranar biya.", "Ku tsara hanyar biyan kowane mafi ƙarancin biya a kan lokaci, kamar tunatarwa.", "Ku zaɓi bashi ɗaya don ƙarin biya: mafi girman riba ko mafi ƙanƙantar saura.", "Idan aka gama biya shi, ku ƙara biyansa a kan bashi na gaba.", "Idan za ku rasa biya, ku kira mai ba da lamunin kafin ranar biya."],
          words: [["Yawan riba (interest rate)", "farashin karɓar bashi, an nuna shi a matsayin kashi (percent) na abin da kuke bi."], ["Mafi ƙarancin biya (minimum payment)", "adadi mafi ƙanƙanta da dole ku biya kowane wata don ku kasance a kan lokaci."], ["Saura (balance)", "nawa ne har yanzu kuke bi."]],
          slides: [
            { title: "Ku ga dukkan bashinku", bullets: ["Wanda kuke bi da nawa", "Yawan riba, mafi ƙarancin biya da ranar biya", "Ku haɗa da lamunin manhajar waya da bashin 'yan uwa"] },
            { title: "Dokoki biyu", bullets: ["Ku biya kowane mafi ƙarancin biya a kan lokaci", "Ku saka ƙarin kuɗi a kan bashi ɗaya a lokaci ɗaya"] },
            { title: "Wane bashi da farko?", bullets: ["Mafi girman riba da farko: yawanci yana ceton mafi yawa", "Mafi ƙanƙantar saura da farko: nasara cikin sauri", "An gama biya? Ku mayar da biyansa zuwa na gaba"] },
            { title: "Kun maƙale?", bullets: ["Ku kira mai ba da lamunin kafin ranar biya", "Ku tambayi mai ba da shawarar bashi na nonprofit", "Ku yi hankali da babban kuɗi tun farko don share bashi"] }
          ],
          sources: [{ name: "CFPB: Debt collection and managing debt", url: "https://www.consumerfinance.gov/consumer-tools/debt-collection/" }],
          tryIt: "Ku yi teburin basussukanku (ko misali na ƙirƙira idan ba ku da bashi) da wanda kuke bi, saura, yawan riba, mafi ƙarancin biya da ranar biya. Ku zagaye bashin da za ku ƙara biya a kansa ta hanyar mafi girman riba, da wanda za ku zaɓa ta hanyar mafi ƙanƙantar saura.",
          youCanNow: "jera basussukanku, biyan mafi ƙarancin biya a kan lokaci, da zaɓar bashin da za ku fara ƙara biya a kansa.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ma'anar hanyar mafi ƙanƙantar saura wajen biyan bashi?", options: ["Ku biya bashi mafi ƙanƙanta kawai ku ƙyale sauran", "Ku ƙara biya a kan bashin da ke da mafi ƙanƙantar saura yayin da kuke biyan mafi ƙarancin biya na sauran", "Ku ƙara adadi ɗaya a kan kowane bashi", "Kada ku biya komai har sai kun sami ƙarin kuɗi"], answer: 1, why: "Kuna biyan mafi ƙarancin biya na duka, ku saka ƙari a kan mafi ƙanƙantar saura don nasara cikin sauri." },
            { objective: "O3", q: "Kun san za ku rasa biyan lamuni a mako mai zuwa. Me za ku yi?", options: ["Ku ɓuya daga mai ba da lamunin", "Ku jira har sai sun kira ku", "Ku ɗauki sabon lamuni don biyansa", "Ku kira mai ba da lamunin kafin ranar biya ku tambayi zaɓuɓɓuka"], answer: 3, why: "Kira da wuri yana ba ku mafi yawan zaɓuɓɓuka." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ku san inda kuɗinku yake zuwa",
        questions: [
          { objective: "O1", q: "Kuɗin shigarku yana canjawa daga wata zuwa wata. Da wane adadi ya kamata ku yi kasafin kuɗinku?", options: ["Watanku mafi kyau", "Matsakaicin abin da kuke fata a shekara mai zuwa", "Wata mai ƙaranci na yau da kullum", "Duk abin da abokanku suke samu"], answer: 2, why: "Yin shiri da wata mai ƙaranci yana nufin kasafin kuɗi zai yi aiki ko lokacin da kuɗi bai yi yawa ba." },
          { objective: "O1", q: "Wanne a cikin waɗannan buƙata ce, ba abin da ake so ba?", options: ["Maganin da kuke sha kowace rana", "Sabis na kallo a intanet", "Cin abinci a waje ranar Juma'a", "Sabuwar murfin waya"], answer: 0, why: "Magani abu ne da dole ku biya don ku kasance cikin koshin lafiya." },
          { objective: "O2", q: "A ina mutane a Amurka za su iya samun rahoton bashinsu kyauta?", options: ["Kowane shafi da ke nuna tallar rahoto kyauta", "Hanyar haɗi (link) a cikin saƙon tes", "Shafin wani mai karɓar bashi", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com ita ce majiyar hukuma kyauta ta rahotanni daga kamfanoni uku." },
          { objective: "O2", q: "Kun ga katin bashi a rahotonku da ba ku taɓa buɗewa ba. Me za ku yi?", options: ["Ku ƙyale shi", "Ku ƙalubalance shi a wurin kamfanin rahoton bashi ku ajiye kwafi", "Ku biya shi don ya tafi", "Ku rufe asusun bankinku"], answer: 1, why: "Kuna da haƙƙin ƙalubalantar kurakurai; asusun da ba ku buɗe ba yana iya zama satar bayanan shaida (identity theft)." },
          { objective: "O3", q: "Kuna iya ƙara ɗan kuɗi a kan bashi ɗaya. Ta hanyar mafi girman riba, wane ne zai sami ƙarin?", options: ["Wanda ke da mafi ƙanƙantar saura", "Wanda ranar biyansa ta fi nisa", "Wanda ke da mafi girman yawan riba", "Mafi sabo"], answer: 2, why: "Biyan mafi girman riba da farko yawanci yana ceton riba mafi yawa." }
        ]
      }
    },
    {
      name: "Babi na 2: Ku gina kariyarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fara asusun gaggawa",
          minutes: 4,
          goal: "Sa burin ajiyar gaggawa da hanyar ajiya ta atomatik don cimma shi.",
          text: [
            "Asusun gaggawa (emergency fund) kuɗi ne da aka keɓe don abubuwan ba-zata kawai: gyaran mota, kuɗin likita, famfon ruwa da ya lalace, aikin da aka rasa, ko watan da sayarwa ba ta yi kyau ba. Ba tare da shi ba, ƙaramar matsala na iya tura ku cikin bashi mai tsada.",
            "Ku fara da kaɗan. Consumer Financial Protection Bureau ta ce ko ɗan ƙaramin adadi yana ba da ɗan tsaro. Hanya ɗaya ta zaɓar buri: ku yi tunanin abubuwan ba-zata da kuka biya a shekarar da ta gabata da nawa suka ci. Sannan ku zaɓi buri na farko da za ku iya cimmawa, da babban buri bayan haka.",
            "Ku sa ajiya ta zama ta atomatik. Ku tsara turawa zuwa ajiya a ranar albashi, ko ku tambayi mai ɗaukar aikinku ya raba albashinku kai tsaye (direct deposit) idan sun yarda. Ku saka kuɗin harajin da aka mayar muku, kyautar kuɗi ko wani ɓangare na kuɗin girbi kai tsaye a ajiya.",
            "Ku ajiye kuɗin a wuri mai aminci amma dabam da kuɗin kashewa, kamar asusun ajiya a banki ko credit union. Kuɗi a gida yana iya ɓacewa ko a sace shi. Ku yanke tun da wuri abin da ake ƙirga a matsayin gaggawa, ku yi amfani da asusun idan kuna buƙata, sannan ku sake cika shi."
          ],
          steps: ["Ku rubuta abubuwan ba-zata da kuka biya a shekarar da ta gabata.", "Ku zaɓi buri na farko da za ku iya cimmawa da babban buri na gaba.", "Ku tsara turawa ta atomatik ko ƙayyadadden adadi da za ku ajiye kowace ranar albashi.", "Ku ajiye asusun dabam da kuɗin kashewa na yau da kullum.", "Ku rubuta abin da ake ƙirga a matsayin gaggawa. Bayan kun yi amfani da shi, ku sake cika shi."],
          words: [["Asusun gaggawa (emergency fund)", "kuɗin da aka ajiye kawai don kashe-kashen ba-zata ko kuɗin shiga da aka rasa."], ["Turawa ta atomatik (automatic transfer)", "biyan da bankinku ke motsawa a madadinku a ƙayyadaddiyar rana, ba sai kun yi shi kowane lokaci ba."], ["Credit union", "banki marar neman riba da membobinsa suka mallaka."]],
          slides: [
            { title: "Abin da yake domin shi", bullets: ["Gyare-gyare, kuɗin likita, kuɗin shiga da aka rasa", "Yana hana ƙananan matsaloli zama babban bashi"] },
            { title: "Ku zaɓi buri", bullets: ["Ku duba abubuwan ba-zata na shekarar da ta gabata", "Ku fara da kaɗan, sannan ku ƙara", "Ko kaɗan yana taimakawa"] },
            { title: "Ku sa ya zama ta atomatik", bullets: ["Ku tura a ranar albashi", "Ku raba direct deposit idan an yarda", "Ku ajiye kuɗin haraji da aka mayar, kyauta da ɓangaren kuɗin girbi"] },
            { title: "Ku ajiye shi lafiya kuma dabam", bullets: ["Ajiya a banki ko credit union", "Kuɗi a gida yana iya ɓacewa ko a sace shi", "Ku yi amfani da shi, sannan ku sake cika shi"] }
          ],
          sources: [{ name: "CFPB: An essential guide to building an emergency fund", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }],
          tryIt: "Ku rubuta burinku na farko na ajiyar gaggawa, adadin da za ku ajiye kowane mako ko wata, ranar da za ku ajiye shi, da inda za ku ajiye shi. Ku ƙara shi a matsayin layi a kasafin kuɗinku na Darasi na 1.",
          youCanNow: "sa burin ajiyar gaggawa, ajiye kuɗi zuwa gare shi ta atomatik, da kiyaye shi lafiya kuma dabam.",
          quickCheck: [
            { objective: "O4", q: "Wanne ne gaggawar da asusun gaggawa yake domin ta?", options: ["Gyaran mota da ba ku zata ba", "Rangwamen kayan biki", "Sabuwar waya da kuke so", "Fita yawo da dare"], answer: 0, why: "Asusun gaggawa yana biyan kashe-kashen ba-zata, ba abubuwan da ake so da aka shirya ba." },
            { objective: "O4", q: "Kuna yawan mantawa da ajiya. Me za ku yi?", options: ["Ku ajiye abin da ya rage a ƙarshen wata kawai", "Ku daina ajiya", "Ku tsara turawa ta atomatik a ranar albashi", "Ku ajiye kuɗin ajiya a jakar kuɗinku"], answer: 2, why: "Ajiya ta atomatik a ranar albashi tana faruwa kafin a kashe kuɗin." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ajiya a banki, mobile money ko ƙungiyar ajiya",
          minutes: 5,
          goal: "Zaɓar wuri mai aminci don ajiya da duba kuɗaɗen caji da dokokinsa kafin ku yi amfani da shi.",
          text: [
            "Inda kuke ajiya yana da muhimmanci. A Amurka, asusun ajiya a banki ko credit union da gwamnatin tarayya ta ba da inshora yana ɗaya daga cikin wurare mafi aminci don kuɗi. A ƙasashe da yawa, musamman a Afirka, mutane suna ajiya da mobile money a wayarsu, a banki ko SACCO, ko a ƙungiyar ajiya.",
            "Sabis na mobile money kamar M-Pesa suna bari ku ajiye kuɗi a wayarku, ku tura shi ku kuma biya kuɗaɗe. Da yawa kuma suna da zaɓin ajiya dabam ko ajiya a kulle, wanda ke taimakawa raba ajiya da kuɗin kashewa. Kuɗaɗen caji da riba sun bambanta ga kowane sabis kuma suna canjawa a kan lokaci, don haka ku karanta teburin kuɗaɗen caji na hukuma a manhajar ko a shafin mai ba da sabis, ko ku tambayi wakili na hukuma, kafin ku motsa kuɗi.",
            "Misali: wata manomiya a Kenya ana biyan ta kuɗin masara lokacin girbi. Tana tura wani ɓangare na kuɗin zuwa zaɓin ajiya dabam a wannan rana, kafin ta kashe ko kwabo, sannan ta bar sauran don iri, kuɗin makaranta da abinci. Tana fara duba kuɗin cajin kowane turawa a teburin kuɗaɗen caji na hukuma.",
            "A ƙungiyar ajiya, wadda ake yawan kira chama (kamar adashe), kowane memba yana biyan ƙayyadadden adadi bisa jadawali. Ku rubuta kowane biya, ku ajiye kwafin dokokin ƙungiyar, kuma ku shiga ƙungiyoyin da kuka san membobinsu kuma kuka amince da su kawai. Duk abin da kuke amfani da shi: kada ku taɓa raba PIN ɗinku, kuma ku yi hankali da duk wanda ya kira yana neman ku mayar da kuɗi bayan turawa ta \"kuskure\". Ku fara duba ragowar kuɗinku (balance)."
          ],
          steps: ["Ku zaɓi inda za ku yi ajiya: banki, credit union, SACCO, ajiyar mobile money ko ƙungiyar ajiya da kuka amince da ita.", "Ku nemo teburin kuɗaɗen caji da dokoki na hukuma, a manhajar, a shafin hukuma ko daga wakili na hukuma.", "Ku motsa ajiya a ranar albashi ko ranar girbi, kafin ku kashe.", "Ku riƙe rubutaccen bayanin kowane ajiya.", "Kada ku taɓa raba PIN ɗinku, kuma ku duba ragowar kuɗinku kafin ku mayar wa kowa kuɗi."],
          words: [["Mobile money", "sabis da ke bari ku ajiye, ku tura kuma ku karɓi kuɗi ta waya."], ["SACCO", "ƙungiyar haɗin gwiwa ta ajiya da bashi (savings and credit cooperative), ƙungiya da membobi suka mallaka da ke ajiya da ba da bashi, sananniya a Gabashin Afirka."], ["Chama", "ƙungiyar ajiya, sau da yawa a Kenya, inda membobi suke ajiya tare bisa jadawali."], ["PIN", "lambar sirri da ke kare asusunku. Kada ku taɓa raba ta."]],
          slides: [
            { title: "Ku zaɓi wuri mai aminci don ajiya", bullets: ["Amurka: ajiya a banki ko credit union mai inshora", "Afirka: banki, SACCO, mobile money ko ƙungiyar ajiya"] },
            { title: "Ajiya ta mobile money", bullets: ["Ku yi amfani da zaɓin ajiya dabam idan akwai", "Ku fara karanta teburin kuɗaɗen caji na hukuma", "Kuɗaɗen caji suna canjawa: ku duba a manhajar ko wurin wakili"] },
            { title: "Ku fara ajiya, sannan ku kashe", bullets: ["Ku motsa ajiya a ranar albashi ko ranar girbi", "Sannan ku biya iri, kuɗin makaranta, abinci"] },
            { title: "Ku kasance lafiya", bullets: ["Kada ku taɓa raba PIN ɗinku", "Ku duba ragowar kuɗinku kafin ku mayar da kuɗi", "Ku shiga ƙungiyoyin da kuka sani kuma kuka amince da su kawai"] }
          ],
          sources: [
            { name: "CFPB: An essential guide to building an emergency fund (where to keep savings)", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }
          ],
          tryIt: "Ku zaɓi wurin da za ku ajiye kuɗin gaggawarku. Ku nemo teburin kuɗaɗen cajinsa na hukuma ko dokokin asusun ku rubuta nawa ake caji don saka kuɗi da fitar da shi. Idan kuna amfani da mobile money, ku nemo zaɓin ajiya a menu na manhajar ba tare da motsa ko kwabo ba tukuna.",
          youCanNow: "zaɓar wuri mai aminci don ajiya, fara duba kuɗaɗen cajinsa da dokokinsa, da kare asusunku.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za ku ajiye kuɗin gaggawa a banki ko credit union maimakon kuɗi a gida?", options: ["Ya fi aminci daga sata da ɓacewa", "Ya fi sauƙin kashewa", "Bankuna suna biyan ku don fitar da kuɗi", "Kuɗi a gida yana samun riba fiye da haka"], answer: 0, why: "Asusu yana kiyaye ajiya fiye da kuɗi a gida." },
            { objective: "O5", q: "Kuna shirin amfani da zaɓin ajiya na mobile money. Me za ku fara yi?", options: ["Ku motsa dukkan kuɗinku nan take", "Ku tambayi baƙo a intanet nawa ake caji", "Ku ɗauka kyauta ne", "Ku karanta teburin kuɗaɗen caji da dokoki na hukuma"], answer: 3, why: "Kuɗaɗen caji sun bambanta kuma suna canjawa, don haka ku fara duba teburin kuɗaɗen caji na hukuma." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gane lamunin cuta da zambar kuɗi",
          minutes: 5,
          goal: "Karanta tayin lamuni ko na kuɗi ku gano alamun gargaɗi kafin ku amince.",
          text: [
            "Lamunin cuta (predatory loan) lamuni ne da aka gina don ya sa ku ci gaba da biya. Lamunin payday, wasu lamunin da ake jingine takardar mallakar mota (car-title) da wasu lamunin manhajar waya gajeru ne kuma masu tsada sosai. Kuɗin cajin yana iya ganin kamar kaɗan ne, amma idan aka lissafa shi a matsayin yawan riba na shekara (APR) farashin yana iya zama mai girma sosai, kuma mutane da yawa suna sake sabunta lamunin akai-akai. Kafin ku karɓi bashi, ku duba APR da kowane kuɗin caji, kuma ku tambayi kanku yadda za ku biya shi.",
            "Ku san haƙƙoƙinku a Amurka: Consumer Financial Protection Bureau ta ce ba za a iya kama ku ba saboda rashin biyan lamunin payday, kuma mai ba da lamuni zai iya ɗaukar wani ɓangare na albashinku ne kawai da umarnin kotu. Sojoji masu aiki suna da ƙarin kariya a ƙarƙashin Military Lending Act (dokar lamunin sojoji). Kuna kuma iya duba ko mai ba da lamunin yana da lasisi a jiharku.",
            "Zamba tana da alamun gargaɗi. Suna gaggauta ku. Suna neman ku biya da katin kyauta (gift card), turawar waya (wire transfer), kuɗin intanet (cryptocurrency) ko turawar mobile money ga baƙo. Suna alƙawarin lamuni ko tallafi idan kun fara biyan kuɗin caji. Suna cewa kun ci kyautar da ba ku taɓa shiga gasarta ba. Suna neman PIN ɗinku, kalmar sirri ko code da aka turo wayarku.",
            "Idan kun ga alama: ku tsaya, kada ku biya, kuma ku tabbatar da ainihin kamfanin ta lambar da kuka nemo da kanku. Ku yi magana da wanda kuka amince da shi. Zaɓuɓɓuka masu rahusa fiye da lamunin cuta sun haɗa da neman ƙarin lokaci daga wanda kuke bi, ƙaramin lamuni daga credit union, ko taimako daga ƙungiyar nonprofit ta yankinku."
          ],
          steps: ["Ku nemo APR da kowane kuɗin caji a cikin tayin.", "Ku tambaya: ta yaya kuma yaushe zan biya wannan, kuma idan ban iya ba fa?", "Ku nemi alamun zamba: gaggawa, katin kyauta ko wire, kuɗin caji da farko, kyauta, neman PIN ko code.", "Ku tsaya ku tabbatar da ainihin kamfanin ta lambar da kuka nemo da kanku.", "Ku nemi zaɓuɓɓuka masu rahusa: ƙarin lokaci daga wanda kuke bi, lamunin credit union, nonprofit."],
          words: [["APR", "annual percentage rate (yawan riba na shekara): farashin lamuni na shekara, har da kuɗaɗen caji, an nuna shi a matsayin kashi. Yana bari ku kwatanta lamuni."], ["Lamunin payday", "ƙaramin lamuni gajere, sau da yawa ana biya a ranar albashinku na gaba, wanda zai iya zama mai tsada sosai."], ["Sake sabuntawa (rollover)", "ɗaukar sabon lamuni don biyan tsohon, wanda ke ƙara kuɗaɗen caji."], ["Lamunin cuta (predatory loan)", "lamuni mai farashi marar adalci ko mai girma sosai da ke kama mai karɓar bashi a tarko."]],
          slides: [
            { title: "Lamunin da ke kama ku a tarko", bullets: ["Payday, wasu na car-title da na manhajar waya", "Ƙaramin kuɗin caji, APR mai girma sosai", "Sake sabuntawa yana ƙara kuɗaɗen caji"] },
            { title: "Kafin ku karɓi bashi", bullets: ["Ku nemo APR da dukkan kuɗaɗen caji", "Ku san yadda za ku biya", "Amurka: ku duba mai ba da lamunin yana da lasisi a jiharku"] },
            { title: "Alamun gargaɗin zamba", bullets: ["Suna gaggauta ku", "Katin kyauta, wire, crypto ko turawa ga baƙo", "Kuɗin caji da farko don lamuni ko kyauta", "Suna neman PIN ɗinku ko code"] },
            { title: "Zaɓuɓɓuka mafi kyau", bullets: ["Ku nemi ƙarin lokaci daga wanda kuke bi", "Ƙaramin lamunin credit union", "Taimakon nonprofit na yankinku"] }
          ],
          sources: [
            { name: "CFPB: Payday loans", url: "https://www.consumerfinance.gov/consumer-tools/payday-loans/" },
            { name: "CFPB: Fraud and scams", url: "https://www.consumerfinance.gov/consumer-tools/fraud/" }
          ],
          tryIt: "Aikin ƙarshe: ku kammala shirin kuɗinku na shafi ɗaya: kasafin kuɗinku na Darasi na 1, jerin bashinku da bashin da za ku ƙara biya a kansa, burinku na ajiyar gaggawa da inda kuke ajiye shi, da ranar da za ku duba rahoton bashinku. Sannan ku karanta wani tayin lamuni ko na kuɗi da kuka gani (tes, talla ko wasiƙa) ku rubuta kowace alamar gargaɗi da kuka gano.",
          youCanNow: "karanta tayin lamuni ko na kuɗi, nemo APR da alamun gargaɗi, da zaɓar zaɓi mafi aminci.",
          quickCheck: [
            { objective: "O6", q: "Mece ce alamar gargaɗi a tayin lamuni?", options: ["Yana nuna APR a sarari", "Yana neman ku biya kuɗin caji da katin kyauta don samun lamunin", "Yana ba ku lokaci don karanta sharuɗɗan", "Ya fito daga credit union ɗinku"], answer: 1, why: "Kuɗin caji da farko da aka biya da katin kyauta alamar zamba ce da aka saba gani." },
            { objective: "O6", q: "Wani tes ya ce \"An riga an amince muku! Ku amsa yanzu ko ku rasa wannan tayin yau.\" Me za ku yi?", options: ["Ku amsa nan take", "Ku aika bayanan bankinku don riƙe tayin", "Ku tura shi ga abokai", "Ku rage gudu ku tabbatar da mai ba da lamunin ta majiyar hukuma kafin ku amsa"], answer: 3, why: "Matsin lamba don yin abu yanzu alamar gargaɗi ce; ku tabbatar kafin ku amsa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ku gina kariyarku",
        questions: [
          { objective: "O4", q: "Asusun gaggawa domin me ne?", options: ["Sayayyar biki", "Kashe-kashen ba-zata kamar gyara ko kuɗin shiga da aka rasa", "Sayen tikitin caca", "Ba abokai bashi"], answer: 1, why: "Ana ajiye asusun gaggawa kawai don abubuwan ba-zata da kuɗin shiga da aka rasa." },
          { objective: "O4", q: "Wace hanya ce mafi kyau don ci gaba da ajiya kowane wata?", options: ["Ku ajiye duk abin da ya rage a ƙarshen wata", "Ku ajiye kuɗin a jakar kuɗinku", "Ku fara jiran ƙarin albashi mai yawa", "Ku tsara turawa ta atomatik a ranar albashi"], answer: 3, why: "Ajiya ta atomatik tana faruwa kafin a kashe kuɗin." },
          { objective: "O5", q: "Kafin ku yi amfani da zaɓin ajiya na mobile money, me ya kamata ku duba?", options: ["Teburin kuɗaɗen caji da dokoki na hukuma", "Abin da wani baƙo a kafofin sada zumunta ya faɗa", "Babu komai; koyaushe kyauta ne", "PIN ɗin maƙwabcinku"], answer: 0, why: "Kuɗaɗen caji da dokoki sun bambanta bisa sabis kuma suna canjawa, don haka ku fara duba majiyar hukuma." },
          { objective: "O6", q: "Wani ya tura tes cewa ya tura muku kuɗi bisa kuskure kuma yana neman ku mayar da shi yanzu. Me za ku fara yi?", options: ["Ku mayar da shi nan take", "Ku raba PIN ɗinku don ya gyara shi", "Ku duba ainihin ragowar kuɗinku da kanku kafin ku yi komai", "Ku tura ninki biyu don ku nuna kirki"], answer: 2, why: "Wannan zamba ce da aka saba gani; ku duba ragowar kuɗinku da kanku ku tambayi mai ba ku sabis." },
          { objective: "O6", q: "Wani mai ba da lamuni ya ce za ku sami lamuni da zarar kun biya kuɗin caji da katin kyauta. Wannan:", options: ["Lamunin banki ne na yau da kullum", "Alamar gargaɗin zamba ce", "Tallafin gwamnati ne", "Rahoton bashi ne"], answer: 1, why: "Biyan kuɗin caji da farko, musamman da katin kyauta, alamar zamba ce." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Sarrafa Kuɗi: Kasafin Kuɗi, Bashi da Ajiya",
    questions: [
      { objective: "O1", q: "Kasafin kuɗi shi ne:", options: ["Shirin kuɗin da kuke samu kowane wata", "Wani nau'in lamuni", "Makin bashi", "Kuɗin cajin banki"], answer: 0, why: "Kasafin kuɗi yana tsara inda kuɗinku yake zuwa." },
      { objective: "O1", q: "Wanne ne yake cikin rukunin ajiya na kasafin kuɗi?", options: ["Haya", "Abincin da ake saya a waje kowane mako", "Kuɗin da aka keɓe don asusun gaggawarku", "Kuɗin wayarku"], answer: 2, why: "Ajiya ita ce kuɗin da kuka keɓe da gangan." },
      { objective: "O1", q: "Kasafin kuɗinku ya yi ƙasa da sifili. Me ya kamata ku fara ragewa?", options: ["Magani", "Abubuwan da ake so", "Haya", "Mafi ƙarancin biyan bashi"], answer: 1, why: "Ku rage abubuwan da ake so kafin buƙatu." },
      { objective: "O1", q: "Me BAI kamata ku rubuta a mataimakin AI ba lokacin yin kasafin kuɗi?", options: ["Kashe-kashen wata na kusan-kusan", "\"Ka yi mini teburin kasafin kuɗi\"", "\"Ka ba da shawarar hanyoyin rage kashe-kashe\"", "Lambar asusun bankinku"], answer: 3, why: "Kada ku taɓa raba lambobin asusu ko kalmomin sirri da kayan AI." },
      { objective: "O2", q: "Mene ne makin bashi?", options: ["Ragowar kuɗin bankinku", "Lamba da aka yi daga rahoton bashinku", "Kuɗin shigarku", "Kuɗin cajin lamuni"], answer: 1, why: "Makin bashi ya dogara ne da bayanan da ke cikin rahoton bashinku." },
      { objective: "O2", q: "Shin duba rahoton bashinku da kanku yana rage makinku?", options: ["A'a", "E, sosai", "E, kaɗan kowane lokaci", "Sai a ƙarshen mako kawai"], answer: 0, why: "CFPB ta ce neman rahotonku da kanku ba ya cutar da makinku." },
      { objective: "O2", q: "Wane kamfanoni uku ne ke ba da rahoton bashi na ƙasa baki ɗaya a Amurka?", options: ["Visa, Mastercard, Discover", "Social Security, IRS, Medicare", "Chase, Wells Fargo, Citi", "Equifax, Experian, TransUnion"], answer: 3, why: "Waɗannan su ne kamfanoni uku na rahoton bashi na ƙasa baki ɗaya." },
      { objective: "O2", q: "Wani shafi yana tayin \"free credit report\" amma yana neman kati don fara gwaji. Mene ne zaɓi mafi aminci?", options: ["Ku yi rajista duk da haka", "Ku ba da lambar katinku", "Ku yi amfani da AnnualCreditReport.com maimakon haka", "Ku raba hanyar haɗin da abokai"], answer: 2, why: "Wasu shafuka suna saka ku a kayan da ake biya; AnnualCreditReport.com ita ce majiyar hukuma kyauta." },
      { objective: "O2", q: "Rahotonku yana nuna jinkirin biya wanda kuka san kun biya a kan lokaci. Ya kamata ku:", options: ["Jira har ya tafi", "Buɗe sabon kati", "Ƙalubalantar kuskuren ku ajiye kwafi", "Daina biyan dukkan kuɗaɗen biya"], answer: 2, why: "Kuna iya ƙalubalantar kurakurai a wurin kamfanin rahoton bashi da kasuwancin." },
      { objective: "O3", q: "A jerin bashinku, me ya kamata ku riƙa biya koyaushe a kowane bashi?", options: ["Babu komai har sai kun iya biya duka", "Aƙalla mafi ƙarancin biya, a kan lokaci", "Mafi girma kawai", "Ninki biyu na saura"], answer: 1, why: "Rasa mafi ƙarancin biya yana ƙara kuɗin tara kuma yana cutar da makin bashinku." },
      { objective: "O3", q: "Me yasa wani zai zaɓi ya fara biya mafi ƙanƙantar saura?", options: ["Nasara cikin sauri tana ƙarfafa shi", "Koyaushe tana ceton mafi yawan kuɗi", "Masu ba da lamuni suna buƙatar haka", "Tana cire dukkan riba"], answer: 0, why: "Gama biya ƙaramin bashi cikin sauri yana ba da nasara cikin sauri; hanyar mafi girman riba yawanci tana ceton fiye da haka." },
      { objective: "O3", q: "Za ku rasa biyan motarku a mako mai zuwa. Mene ne mataki mafi kyau?", options: ["Ku yi shiru ku yi fata", "Ku ɗauki lamunin payday", "Ku canja lambar wayarku", "Ku kira mai ba da lamunin kafin ranar biya ku tambayi zaɓuɓɓuka"], answer: 3, why: "Masu ba da lamuni suna iya ba da zaɓuɓɓuka idan kun kira da wuri." },
      { objective: "O4", q: "Kyakkyawan buri na farko na ajiyar gaggawa shi ne:", options: ["Babban adadi da ba za ku iya kaiwa ba", "Ƙaramin adadi da za ku iya kaiwa, sannan babba", "Sifili har sai kun yi arziki", "Duk abin da maƙwabcinku yake da shi"], answer: 1, why: "Ku fara da kaɗan ku ƙara; ko kaɗan yana taimakawa." },
      { objective: "O5", q: "A ina ne wuri mafi aminci don ajiye kuɗin gaggawa fiye da kuɗi a gida?", options: ["Ƙarƙashin katifa", "Wurin baƙo a intanet", "Asusun ajiya a banki ko credit union", "A jakar kuɗinku ta yau da kullum"], answer: 2, why: "Kuɗi yana iya ɓacewa ko a sace shi; asusun da ke da inshora sun fi aminci." },
      { objective: "O4", q: "Ana biyan wani manomi lokacin girbi. Mece ce kyakkyawar al'adar ajiya?", options: ["Ku fara kashewa ku ajiye abin da ya rage", "Ku ba ɗan uwanku bashin duka", "Ku ajiye duka a matsayin kuɗi a gida", "Ku motsa wani ɓangare zuwa ajiya a wannan rana, kafin ku kashe"], answer: 3, why: "Fara ajiya, kafin kashewa, yana sa shirin ya yi aiki." },
      { objective: "O5", q: "Kuɗaɗen cajin mobile money:", options: ["Sun bambanta bisa sabis kuma suna canjawa, don haka ku duba teburin kuɗaɗen caji na hukuma", "Koyaushe sifili ne", "Iri ɗaya ne a kowace ƙasa", "Ba su taɓa da muhimmanci ba"], answer: 0, why: "Ku duba kuɗaɗen caji na yanzu a manhajar, a shafin hukuma ko wurin wakili na hukuma." },
      { objective: "O5", q: "A ƙungiyar ajiya (chama), me ya fi kare ku?", options: ["Biya ba tare da rubutu ba", "Shiga kowace ƙungiya a intanet", "Rubutaccen bayanin kowane biya da kwafin dokoki", "Raba PIN ɗinku da ƙungiyar"], answer: 2, why: "Rubuce-rubuce da dokoki a rubuce suna kare kowane memba." },
      { objective: "O6", q: "Me APR yake faɗa muku?", options: ["Makin bashinku", "Farashin lamuni na shekara, har da kuɗaɗen caji, a matsayin kashi", "Nawa kuke samu", "Adireshin bankinku"], answer: 1, why: "APR yana bari ku kwatanta ainihin farashin lamuni." },
      { objective: "O6", q: "A Amurka, za a iya kama ku saboda rashin biyan lamunin payday?", options: ["E, koyaushe", "E, bayan kwana ɗaya", "Sai a ƙarshen mako kawai", "A'a"], answer: 3, why: "CFPB ta ce ba za a iya kama ku ba saboda kasa biyan lamunin payday." },
      { objective: "O6", q: "Wanne ne zaɓi mafi rahusa fiye da lamunin payday?", options: ["Ƙaramin lamuni daga credit union", "Sake sabunta lamunin payday", "Biyan baƙo da katin kyauta", "Lamunin da ke buƙatar kuɗin caji da farko"], answer: 0, why: "Lamunin credit union da neman ƙarin lokaci yawanci suna da rahusa sosai." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      2,
      5,
      7,
      9,
      12,
      14,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kasafin kuɗi na wata",
        objective: "O1",
        notYet: "Kuɗin shiga ko kashe-kashe sun ɓace, ko babu layin ajiya.",
        meets: "An jera kuɗin shiga, buƙatu, abubuwan da ake so da ajiya, kuma an duba jimillar.",
        exceeds: "An yi amfani da wata mai ƙaranci na yau da kullum, kuma an nuna abubuwan da ake so da aka rage."
      },
      {
        name: "Shirin bashi",
        objective: "O3",
        notYet: "Wasu basussuka sun ɓace, ko ba a zaɓi bashi don ƙarin biya ba.",
        meets: "An jera dukkan basussuka da saura, yawan riba, mafi ƙarancin biya da ranar biya, kuma an zaɓi ɗaya don ƙarin biya.",
        exceeds: "An bayyana dalilin zaɓar hanyar mafi girman riba ko ta mafi ƙanƙantar saura."
      },
      {
        name: "Ajiyar gaggawa",
        objective: "O4",
        notYet: "Babu buri, ko babu adadi da rana.",
        meets: "Akwai buri, adadi, rana da wurin ajiya, kuma an ƙara su a kasafin kuɗi.",
        exceeds: "An tsara ajiyar don ta riƙa faruwa ta atomatik."
      },
      {
        name: "Wuri mai aminci don ajiya",
        objective: "O5",
        notYet: "An zaɓi wuri ba tare da duba kuɗaɗen caji ko dokoki ba.",
        meets: "An rubuta kuɗaɗen cajin saka kuɗi da fitar da shi daga majiyar hukuma.",
        exceeds: "An kwatanta zaɓuɓɓuka biyu kafin a zaɓa."
      },
      {
        name: "Ranar duba rahoton bashi",
        objective: "O2",
        notYet: "Babu ranar duba rahoton bashi.",
        meets: "Akwai ranar duba rahoton bashi daga majiyar hukuma kyauta.",
        exceeds: "An riga an duba rahoto ɗaya kuma an rubuta abin da aka gano."
      },
      {
        name: "Alamun gargaɗin tayi",
        objective: "O6",
        notYet: "An rasa bayyanannun alamun gargaɗi a cikin tayin.",
        meets: "An jera alamun gargaɗi a cikin tayi na gaske.",
        exceeds: "An kuma ambaci zaɓi mafi aminci, kamar lamunin credit union."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da ke amfani da rubutaccen kasafin kuɗi bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka fara ko suka ƙara asusun gaggawa cikin kwanaki 30",
      "Masu koyo da suka duba rahoton bashinsu cikin kwanaki 60",
      "Masu koyo da suka ce sun guje wa lamunin cuta ko zambar kuɗi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda da alƙalami, ko spreadsheet kyauta kamar Google Sheets ko Excel",
      "Kuɗin shiga da kuɗaɗen biya na watan da ya gabata (a sirri)",
      "Intanet don AnnualCreditReport.com (Amurka) ko ofishin rahoton bashi na gida da teburin kuɗaɗen caji",
      "Kusan minti 60 gaba ɗaya, da lokacin tattara lambobinku"
    ],
    facilitatorNotes: [
      "Ku bar masu koyo su yi amfani da lambobin ƙirƙira a aji; kada ku taɓa neman kowa ya raba ainihin ragowar kuɗi, lambobin asusu ko rahoton bashi.",
      "Ku tunatar da masu koyo cewa wannan ba shawarar zuba jari ba ce, ku nuna musu mai ba da shawarar bashi na nonprofit don manyan shawarwari.",
      "Ga masu koyo da ke wajen Amurka, ku taimaka musu su nemo ofishin rahoton bashi na ƙasarsu da teburin kuɗaɗen cajin mobile money na hukuma.",
      "Ku kawo misalai na gaske na tayin lamuni da na zamba don atisayen alamun gargaɗi.",
      "Ku ba da maki ga shirin kuɗi da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
