"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-military-to-civilian.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "veterans-military-to-civilian-ha",
  lang: "ha",
  translationOf: "veterans-military-to-civilian",
  category: "Veterans (military)",
  name: "Daga Rayuwar Soja zuwa Rayuwar Farar Hula",
  skills: "Amfani da Transition Assistance Program (TAP), Fassara ƙwarewar soja, Rubuta layukan CV na farar hula, Gina abokan hulɗa don samun aiki, Daidaita da al'adar aikin farar hula, Samun tallafi da kula da lafiyar ƙwaƙwalwa",
  outcome: "yin shirin sauyawa na kwana 90: amfani da Transition Assistance Program (TAP) da hidimomin aiki na tsofaffin sojoji, mayar da ƙwarewarku ta soja zuwa layukan CV na farar hula don wani aiki na gaske, gina abokan hulɗa, daidaita da al'adar aikin farar hula, da sanin inda za ku sami tallafi, har da Veterans Crisis Line (988, sannan ku danna 1).",
  about: [
    "Wannan kwas ɗin na sojoji ne da ke shirin barin aiki ko yin ritaya, tsofaffin sojoji da suka riga suka fita kuma suke neman mataki na gaba, da mata ko mazaje da iyalan da ke sauyawa tare da su.",
    "Za ku koyi abin da Transition Assistance Program (TAP) yake bayarwa, yadda ake bayanin aikinku na soja da kalmomin da masu ɗaukar aiki na farar hula suke fahimta, yadda ake rubuta layukan CV da daidaita su, yadda ake gina abokan hulɗa, abin da ya bambanta a wuraren aikin farar hula, da inda za ku sami tallafi idan sauyin ya yi wuya.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Shirye-shirye da ƙa'idoji suna canjawa, don haka ku tabbatar da bayanai a dol.gov/agencies/vets, va.gov ko ofishin sauyawa na sansaninku. Idan kuna cikin matsananciyar damuwa (crisis), ku kira 988 ku danna 1, ko ku tura tes zuwa 838255, a kowane lokaci."
  ],
  finalTask: "Ku rubuta shirinku na sauyawa na kwana 90: (1) tarurrukan koyo (workshops) na TAP ko hidimomin aiki na tsofaffin sojoji da za ku yi amfani da su; (2) ayyukan soja guda biyar da aka sake rubutawa a matsayin layukan CV na farar hula, waɗanda suka dace da tallar aiki ɗaya ta gaske; (3) mutane ko taruka uku don gina abokan hulɗa; (4) halaye biyu na wurin aikin farar hula da za ku riƙa yi; (5) jerin masu tallafa muku, tare da Veterans Crisis Line (988, sannan ku danna 1, ko tes zuwa 838255), Vet Center mafi kusa da ku, da mutane biyu da kuka amince da su.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Sojoji da ke shirin barin aiki ko yin ritaya, tsofaffin sojoji da suka riga suka fita kuma suke neman mataki na gaba, da mata ko mazaje da iyalan da ke sauyawa tare da su.",
    startingPoint: "Suna da ƙwarewar soja mai ƙarfi, ladabi da aiki tare, kuma suna iya amfani da waya ko kwamfuta. Da yawa suna bayanin aikinsu da kalmomin soja, ba su da abokan hulɗa da yawa a rayuwar farar hula, kuma ba su da tabbas kan abin da TAP yake bayarwa ko inda za su sami tallafi bayan aikin soja.",
    gap: "Sauyawa zuwa rayuwar farar hula yana canja aiki, al'ada da tallafi a lokaci ɗaya, kuma tsofaffin sojoji da yawa suna fama wajen samun aiki ko neman taimako. Masu koyo suna buƙatar shirin kwana 90 na gaske: hidimomin TAP da na aiki da suka dace, layukan CV na farar hula da suka dace da aiki, abokan hulɗa, halayen aikin farar hula, da jerin masu tallafi har da taimakon gaggawa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya ko kwamfuta mai intanet",
      "Lafiya: kwas ɗin yana magana game da tallafin lafiyar ƙwaƙwalwa; taimakon gaggawa (Veterans Crisis Line: 988, sannan ku danna 1, ko tes zuwa 838255) yana bayyane sosai, kuma ana samunsa a kowane lokaci",
      "Sirri: ku bayyana ayyuka a taƙaice; babu bayanan sirri na soja (classified) ko lambobin sirri a cikin kayan AI",
      "Bayanan shirye-shirye suna canjawa, don haka masu koyo suna tabbatar da bayanan TAP da VA a ofishin TAP ɗinsu, dol.gov da va.gov"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kun san babbar hanyarku (aiki, makaranta, sana'a ko kasuwanci)", action: "zaɓar tarurrukan koyo na TAP ko hidimomin aiki na tsofaffin sojoji da suka dace da mataki na gaba", standard: "kuna ambaton aƙalla biyu da yadda ake isa gare su" },
    { id: "O2", condition: "Idan kuna da lambar aikinku na soja ko sunan aikin", action: "nemo ayyukan farar hula da suka yi daidai, da bayanin ayyukanku ba tare da kalmomin soja na musamman ba", standard: "da sunayen ayyukan farar hula uku, da ayyuka uku da aka sake rubutawa ba tare da gajartawa ba, kuma da aƙalla lamba ɗaya" },
    { id: "O3", condition: "Idan kuna da tallar aiki ɗaya ta gaske", action: "rubuta layukan CV na farar hula da suka dace da tallar", standard: "da layuka biyar, kowanne da kalmar aiki, abin da kuka yi da sakamako, kuma kowace kalma gaskiya ce" },
    { id: "O4", condition: "Ta amfani da mutanen da kuka sani da shirye-shiryen ɗaukar tsofaffin sojoji aiki", action: "rubuta gajeriyar buƙata mai ladabi don tattaunawar neman bayani (informational interview), da tambayoyin da za ku yi", standard: "tare da ambaton abokan hulɗa ko taruka uku" },
    { id: "O5", condition: "Idan kuna tuna wani umarni kai tsaye da kuka taɓa bayarwa a aikin soja", action: "sake rubuta shi a matsayin buƙata mai ladabi ta farar hula, da jera ƙarfin soja da za ku riƙe da halayen da za ku daidaita", standard: "biyu-biyu na kowanne" },
    { id: "O6", condition: "Domin kanku ko wani tsohon soja abokinku", action: "yin jerin masu tallafi da ke da yadda ake isa Veterans Crisis Line, Vet Center mafi kusa, da mutane biyu da kuka amince da su", standard: "kuma an ajiye lambobin gaggawa a wayarku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shirya sauyawa da fassara ƙwarewarku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Amfani da Transition Assistance Program (TAP)",
          minutes: 5,
          goal: "Zaɓar tarurrukan koyo da hidimomin TAP da suka dace da mataki na gaba.",
          text: [
            "Transition Assistance Program (TAP, shirin taimakon sauyawa) yana taimaka wa sojoji da mata ko mazajensu su shirya don rayuwar farar hula. Haɗin gwiwa ne na Ma'aikatun Ƙwadago (Labor), Tsaro (Defense), Harkokin Tsofaffin Sojoji (Veterans Affairs), Ilimi (Education) da Tsaron Cikin Gida (Homeland Security), da Small Business Administration da Office of Personnel Management na Amurka.",
            "Sashen Ma'aikatar Ƙwadago (DOL) na TAP ya ƙunshi taron koyo na kwana ɗaya mai suna Employment Fundamentals of Career Transition game da kayan neman aiki, da taron koyo na kwana biyu mai suna Department of Labor Employment Workshop game da CV, gina abokan hulɗa, neman aiki, hirar neman aiki da cinikin albashi. Akwai kuma hanyar zaɓi ta kwana biyu mai suna Career and Credential Exploration don zaɓar sana'a da shirya yadda za a kai gare ta.",
            "Akwai kuma taimakon mutum da mutum: Employment Navigator and Partnership Program yana ba da taimakon sana'a ga sojoji masu sauyawa da mata ko mazajensu a wasu sansanoni. Mata ko mazaje da masu kula da marasa lafiya suna da nasu tarurrukan koyo. Idan ba za ku iya halarta da kanku ba, koyo ta intanet zai iya ƙirgu, idan manajan TAP ko mai ba ku shawara ya amince.",
            "Ku fara da wuri. Ku tambayi ofishin TAP na sansaninku lokacin da dole ku fara, da tarurrukan koyo da suka dace da shirinku: aiki, makaranta, sana'ar hannu, ko kasuwancinku na kanku. Kun riga kun fita? Shafin hidimomin aiki na tsofaffin sojoji na DOL yana jera kayan taimako a kowace jiha."
          ],
          steps: ["Ku tuntuɓi ofishin TAP na sansaninku ku tambayi lokacin da dole ku fara.", "Ku yanke babbar hanyarku: aiki, makaranta, sana'a ko kasuwanci.", "Ku yi rajista don tarurrukan koyo da suka dace, kamar DOL Employment Workshop.", "Ku tambayi game da taimakon mutum da mutum da tarurrukan koyo na mata ko mazaje.", "Kun riga kun bar aiki? Ku nemo kayan taimakon tsofaffin sojoji na jiharku a dol.gov/agencies/vets."],
          words: [["TAP", "Transition Assistance Program: azuzuwa da taimako ga sojoji da ke sauyawa zuwa rayuwar farar hula."], ["Barin aiki (separation)", "fita daga aikin soja na cikakken lokaci."], ["Takardar shaidar ƙwarewa (credential)", "lasisi ko satifiket da ke tabbatar da wata ƙwarewa."]],
          slides: [
            { title: "Mene ne TAP", bullets: ["Taimako don sauyawa zuwa rayuwar farar hula", "Na sojoji da mata ko mazajensu", "DOL, DoD, VA da wasu hukumomi ne ke gudanar da shi"] },
            { title: "Tarurrukan koyo na DOL", bullets: ["Kwana 1: Employment Fundamentals", "Kwana 2: CV, abokan hulɗa, hirar neman aiki", "Kwana 2 na zaɓi: hanyar sana'a da takardar shaida"] },
            { title: "Ƙarin taimako", bullets: ["Taimakon sana'a na mutum da mutum a wasu sansanoni", "Tarurrukan koyo na mata ko mazaje da masu kula", "Koyo ta intanet idan an amince"] },
            { title: "Ku fara da wuri", bullets: ["Ku tambayi ofishin TAP lokacin farawa", "Ku zaɓi tarurrukan koyo da suka dace da hanyarku", "Kun riga kun fita? Ku nemo kayan taimako na jiharku"] }
          ],
          sources: [
            { name: "DOL VETS: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "DOL VETS: Hidimomin aiki na tsofaffin sojoji (Veterans employment services)", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Ku rubuta babbar hanyarku (aiki, makaranta, sana'a ko kasuwanci) da tarurrukan koyo ko hidimomin TAP guda biyu da suka fi dacewa da ita. Idan kun riga kun fita, ku nemo jiharku a shafin hidimomin aiki na tsofaffin sojoji na DOL, ku rubuta kayan taimako ɗaya da yadda ake tuntuɓarsa.",
          youCanNow: "zaɓar tarurrukan koyo na TAP da hidimomin aiki na tsofaffin sojoji da suka dace da mataki na gaba.",
          quickCheck: [
            { objective: "O1", q: "Su wane ne za su iya shiga hidimomin TAP na DOL?", options: ["Hafsoshi (officers) kaɗai", "Sojoji masu sauyawa da mata ko mazajensu", "Waɗanda suka riga suka sami aiki kaɗai", "Masu ritaya kaɗai"], answer: 1, why: "Hidimomin TAP na sojoji masu sauyawa ne, kuma mata ko mazajensu za su iya shiga su ma." },
            { objective: "O1", q: "Kuna shirin fara sana'ar hannu bayan kun bar aiki. Me za ku fara yi?", options: ["Ku ƙyale TAP domin na aikin ofis ne kaɗai", "Ku jira sai bayan kun bar aiki sannan ku yi tunani", "Ku nemi aboki ya zaɓa muku", "Ku rubuta hanyarku ku zaɓi tarurrukan koyo ko hidimomin TAP da suka dace da ita"], answer: 3, why: "Zaɓar tarurrukan koyo da suka dace da babbar hanyarku yana sa TAP ya yi muku amfani a mataki na gaba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fassara ƙwarewar soja zuwa kalmomin farar hula",
          minutes: 5,
          goal: "Nemo ayyukan farar hula da suka yi daidai da aikinku na soja, da bayanin ƙwarewarku ba tare da kalmomin soja na musamman ba.",
          text: [
            "Manajojin ɗaukar aiki na farar hula sau da yawa ba su san ma'anar lambar aikinku, matsayinku (rank) ko rundunarku ba. Ƙwarewarku ta gaske ce, amma dole a faɗe ta da kalmominsu.",
            "Ku fara da kayan aiki kyauta. Military Crosswalk na O*NET yana bar ku ku nemi lambar aiki ko sunan aiki na rundunarku. My Next Move for Veterans, wanda Ma'aikatar Ƙwadago ta jera, yana da binciken sauyawa daga soja da ke ba da shawarar sana'o'in farar hula masu alaƙa da ƙwarewarku ta soja. Ku rubuta sunayen ayyukan farar hula da suka ba da shawara.",
            "Sannan ku fassara. Ku canja kalmomin soja da kalmomi masu sauƙi: \"NCOIC\" ya zama \"supervisor\" (mai kula) ko \"team lead\" (shugaban ƙungiya); \"PCS\" ya zama \"relocation\" (ƙaura); \"mission\" zai iya zama \"project\" (aiki) ko \"operation\". Ku rubuta gajartawa cikakke ko ku cire su. Ku yi amfani da lambobi da ke nuna girma da sakamako: mutane nawa kuka jagoranta, darajar kayan da kuke da alhakinsu, ko kayan da kuka kai sau nawa.",
            "Mataimakin AI zai iya taimakawa wajen ba da shawarar kalmomin farar hula don wani aiki. Ku bayyana aikin a taƙaice kawai. Kada ku taɓa liƙa bayanan sirri na soja (classified), masu muhimmanci ko na kanku, kuma ku tabbatar cewa kowace kalma da ya ba da shawara gaskiya ce."
          ],
          steps: ["Ku nemi lambar aikinku ko sunan aikinku a Military Crosswalk na O*NET ko My Next Move for Veterans.", "Ku rubuta sunayen ayyukan farar hula uku da suka yi daidai.", "Ku jera manyan ayyukanku da kalmomi masu sauƙi.", "Ku canja gajartawa da kalmomin soja da kalmomin farar hula.", "Ku ƙara lambobi: mutanen da kuka jagoranta, darajar kaya, ayyukan da kuka kammala."],
          words: [["Lambar aiki (job code)", "lambar aikinku na soja, kamar MOS, rating ko AFSC."], ["Kalmomin musamman (jargon)", "kalmomin da wata ƙungiya ɗaya kaɗai ke fahimta."], ["Ƙwarewar da ake iya ɗauka (transferable skill)", "ƙwarewar da za ku iya amfani da ita a ayyuka da yawa daban-daban, kamar jagorancin ƙungiya ko tsara aiki."]],
          slides: [
            { title: "Ku faɗe shi da kalmominsu", bullets: ["Masu ɗaukar aiki ba za su iya sanin lambar aikinku ko matsayinku ba", "Ƙwarewarku ta gaske ce; ku fassara ta"] },
            { title: "Kayan aiki kyauta", bullets: ["O*NET Military Crosswalk", "My Next Move for Veterans", "Ku rubuta sunayen ayyukan farar hula"] },
            { title: "Ku fassara", bullets: ["NCOIC -> supervisor ko team lead (mai kula ko shugaban ƙungiya)", "Ku rubuta gajartawa cikakke ko ku cire su", "Ku ƙara lambobi: mutane, kaya, sakamako"] },
            { title: "Amfani da AI lafiya", bullets: ["Bayani a taƙaice kawai", "Kada ku taɓa liƙa bayanan sirri na soja ko na kanku", "Ku tabbatar kowace kalma gaskiya ce"] }
          ],
          sources: [
            { name: "O*NET OnLine: Military Crosswalk", url: "https://www.onetonline.org/crosswalk/MOC/" },
            { name: "DOL VETS: Hidimomin aiki na tsofaffin sojoji (My Next Move for Veterans)", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Ku nemi lambar aikinku na soja ko sunan aikinku a Military Crosswalk na O*NET ko My Next Move for Veterans. Ku rubuta sunayen ayyukan farar hula uku da ya ba da shawara, sannan ku sake rubuta ayyukanku uku ba tare da gajartawa ba, kuma da aƙalla lamba ɗaya.",
          youCanNow: "nemo ayyukan farar hula da suka yi daidai da aikinku na soja, da bayanin ƙwarewarku da kalmomin farar hula masu sauƙi.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za ku fassara ƙwarewarku ta soja zuwa kalmomin farar hula?", options: ["Manajojin ɗaukar aiki na farar hula ba za su iya fahimtar kalmomin soja ba", "Doka ta hana kalmomin soja a CV", "Don CV ɗinku ya ƙara tsawo", "Ayyukan farar hula ba sa buƙatar ƙwarewarku"], answer: 0, why: "Manajojin ɗaukar aiki suna iya daraja ƙwarewar da suka fahimta kaɗai." },
            { objective: "O2", q: "Aikinku a rubuce yana cewa \"Served as S-4 NCO for BN.\" Me za ku yi?", options: ["Ku bar shi yadda yake", "Ku ƙara gajartawa", "Ku rubuta gajartawa cikakke ko ku cire su, ku bayyana aikin da lamba", "Ku goge aikin"], answer: 2, why: "Layukan CV na farar hula suna rubuta gajartawa cikakke ko su cire su, kuma suna nuna girman aikin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta layukan CV don wani aiki na gaske",
          minutes: 6,
          goal: "Rubuta layukan CV na farar hula da suka dace da tallar aiki ta gaske.",
          text: [
            "Layin CV mai ƙarfi yana farawa da kalmar aiki, yana faɗin abin da kuka yi, kuma yana nuna sakamakon, idan zai yiwu da lamba. Tsari: kalmar aiki + abin da kuka yi + sakamako. Misali: \"Na jagoranci ƙungiyar mutane 12 wajen kula da motoci 30, kuma na kiyaye kashi 95% a shirye kan lokaci.\"",
            "Ku daidaita CV ɗinku da kowane aiki. Ku karanta tallar aikin ku ja layi a ƙarƙashin ƙwarewa da kalmomin da take amfani da su, kamar \"inventory\" (lissafin kaya), \"safety\" (tsaro), \"scheduling\" (tsara lokaci) ko \"customer service\" (hidimar abokan ciniki). Sannan ku yi amfani da waɗannan kalmomin a layukanku, inda suke gaskiya game da ku. Masu ɗaukar aiki da yawa suna amfani da manhajar da ke bincika CV don neman waɗannan kalmomin.",
            "Ku sa shi gajere kuma na farar hula. Yawanci shafi ɗaya ko biyu. Ku sa sunan aikin da kuke so a sama. Ku bar abubuwan da ba sa taimaka wa wannan aikin, kuma kada ku jera bayanan sirri na soja. Ku ƙara lasisi da satifiket, da duk wata takardar shaida da kuka samu a aikin soja.",
            "Misali: ƙwararren kayan aiki (logistics) na Navy da ke neman aikin mai kula da rumbun ajiyar kaya ya rubuta: \"Na kula da kayan gyara 4,000 masu darajar $2 miliyan da daidaito na kashi 99%\" da \"Na horar da sababbin ma'aikata 8 kan hanyoyin tsaro\". Dukansu suna amfani da kalmomi daga tallar aikin."
          ],
          steps: ["Ku nemo tallar aiki ɗaya ta gaske da kuke so.", "Ku ja layi a ƙarƙashin ƙwarewa da kalmomin da take amfani da su.", "Ku rubuta layuka biyar: kalmar aiki + abin da kuka yi + sakamako da lamba.", "Ku yi amfani da kalmomin tallar inda suke gaskiya game da ku.", "Ku cire gajartawa da duk wani abu na sirri na soja, ku karanta shi da babbar murya."],
          words: [["CV (resume)", "gajeriyar takarda da ke jera ƙwarewar aikinku, iyawarku da karatunku ga masu ɗaukar aiki."], ["Daidaitawa (tailor)", "canja CV ɗinku don ya dace da aiki ɗaya."], ["Kalma mai muhimmanci (keyword)", "kalma mai muhimmanci daga tallar aiki da masu ɗaukar aiki ke nema."]],
          slides: [
            { title: "Tsarin layi mai ƙarfi", bullets: ["Kalmar aiki + abin da kuka yi + sakamako", "\"Na jagoranci ƙungiyar mutane 12 wajen kula da motoci 30\""] },
            { title: "Ku daidaita da kowane aiki", bullets: ["Ku ja layi a ƙarƙashin ƙwarewar da tallar ke nema", "Ku yi amfani da waɗannan kalmomin inda suke gaskiya", "Manhaja na iya bincika su"] },
            { title: "Ku sa shi na farar hula", bullets: ["Yawanci shafi ɗaya ko biyu", "Babu gajartawa, babu bayanan sirri na soja", "Ku ƙara lasisi da satifiket"] }
          ],
          tryIt: "Ku nemo tallar aiki ɗaya ta gaske da kuke so. Ku ja layi a ƙarƙashin ƙwarewa biyar da take nema. Ku rubuta layukan CV biyar game da aikinku na soja, kowanne da kalmar aiki, abin da kuka yi da sakamako, kuna amfani da kalmomin tallar inda suke gaskiya.",
          youCanNow: "rubuta layukan CV da ke mayar da ƙwarewarku ta soja zuwa sakamakon da mai ɗaukar aiki na farar hula yake so.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ma'anar daidaita CV?", options: ["Amfani da CV ɗaya don kowane aiki", "Ƙara kowane aiki da kuka taɓa yi", "Sa shi ya yi gajarta iyakar yiwuwa", "Amfani da kalmomin tallar aiki inda suke gaskiya game da ku"], answer: 3, why: "Daidaitawa tana haɗa ƙwarewarku ta gaskiya da kalmomin tallar aiki ɗaya." },
            { objective: "O3", q: "Tallar aikin tana neman \"inventory management\" (kula da lissafin kaya). Kun riƙa bin diddigin kayan gyara na rundunarku. Me za ku rubuta?", options: ["\"Na yi abubuwan kayayyaki\"", "\"Na kula da lissafin kayan gyara 2,500 ba tare da asara ba a binciken lissafi\"", "\"Ƙwararre a inventory management na shekaru 30\" (ba gaskiya ba)", "Ku bar shi"], answer: 1, why: "Yana amfani da kalmomin tallar, kalmar aiki, abin da kuka yi da sakamako na gaskiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shirya sauyawa da fassara ƙwarewarku",
        questions: [
          { objective: "O1", q: "Mene ne Transition Assistance Program?", options: ["Shirin bashi", "Asibitin lafiya", "Ofishin ɗaukar sojoji", "Azuzuwa da taimako ga sojoji da ke sauyawa zuwa rayuwar farar hula"], answer: 3, why: "TAP yana taimaka wa sojoji da mata ko mazajensu su shirya don rayuwar farar hula." },
          { objective: "O1", q: "Wane taron koyo na DOL ne ke koyar da CV, gina abokan hulɗa, neman aiki da hirar neman aiki cikin kwana biyu?", options: ["Horon farko na soja (basic training)", "Department of Labor Employment Workshop", "Gwajin VA", "GI Bill"], answer: 1, why: "DOL ta bayyana DOLEW na kwana biyu a matsayin mai koyar da waɗannan ƙwarewa." },
          { objective: "O2", q: "Wane kayan aiki kyauta ne ke taimakawa wajen haɗa lambar aikin soja da ayyukan farar hula?", options: ["Military Crosswalk na O*NET", "Rahoton bashi (credit report)", "Manhajar yanayi", "Gasar tambayoyi a kafofin sada zumunta"], answer: 0, why: "Military Crosswalk yana bincika lambobin aiki da sunayen ayyukan soja." },
          { objective: "O2", q: "Ta yaya za ku rubuta \"NCOIC of motor pool\" a CV na farar hula?", options: ["Ku bar shi yadda yake", "Ku cire shi gaba ɗaya", "\"Na kula da ƙungiyar gyaran motoci\"", "\"Na yi abubuwa da manyan motoci\""], answer: 2, why: "Kalmomi masu sauƙi da aiki a sarari suna sa a fahimci ƙwarewar." },
          { objective: "O3", q: "Wane layin CV ne ya fi ƙarfi?", options: ["\"Ina da alhakin abubuwa\"", "\"Na kula da lissafin kayan gyara 4,000 da daidaito na kashi 99%\"", "\"Na kasance a Navy\"", "\"Na yi aikina\""], answer: 1, why: "Yana da kalmar aiki, abin da aka yi da sakamako da lamba." }
        ]
      }
    },
    {
      name: "Babi na 2: Gina rayuwarku ta farar hula",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gina abokan hulɗa don samun aikin farar hula",
          minutes: 5,
          goal: "Rubuta gajeren saƙo na neman abokan hulɗa da ke neman taimakon mutane da shirye-shirye don samun aiki.",
          text: [
            "Ayyuka da yawa ana cike su ne ta mutanen da suka san wasu mutane. Gina abokan hulɗa (networking) ba roƙon aiki ba ne. Haɗuwa ce da mutane, neman shawara da kuma taimaka wa wasu a madadin haka.",
            "Ku fara da mutanen da kuka sani: tsofaffin sojoji abokanku da ke aikin farar hula, tsofaffin shugabanninku, iyali, abokai, cocinku, masallacinku ko ƙungiyoyin al'umma. Ku yi bayanan kanku na sana'a a intanet (profile), kamar a LinkedIn, da taken farar hula kamar \"Mai kula da kayan aiki (logistics), shekaru 8 ina jagorantar ƙungiyoyi\".",
            "Ku nemi gajerun tattaunawar neman bayani (informational interviews): minti 15 zuwa 20 don koyon aikin wani da kamfaninsa. Ku shirya tambayoyi uku, kamar \"Yaya rana ta yau da kullum take?\" da \"Waɗanne ƙwarewa ne suka fi muhimmanci a nan?\" Ku yi godiya bayan haka.",
            "Ku yi amfani da shirye-shiryen tsofaffin sojoji ma. VETS na DOL yana jera kayan taimakon jihohi don tsofaffin sojoji da koyon sana'a (apprenticeship), kuma HIRE Vets Medallion Program yana karrama masu ɗaukar aiki da suka dage wajen ɗaukar tsofaffin sojoji aiki. Bajekolin ayyuka na tsofaffin sojoji da ƙungiyoyin tsofaffin sojoji a kamfanoni wurare ne masu kyau na haɗuwa da mutane."
          ],
          steps: ["Ku jera mutane goma da kuka sani da ke aikin farar hula.", "Ku yi ko ku sabunta bayanan kanku na sana'a a intanet da taken farar hula.", "Ku nemi mutane biyu tattaunawar neman bayani ta minti 15 zuwa 20.", "Ku shirya tambayoyi uku ku tura saƙon godiya bayan haka.", "Ku nemi bajekolin ayyuka na tsofaffin sojoji da masu ɗaukar tsofaffin sojoji aiki."],
          words: [["Gina abokan hulɗa (networking)", "ƙulla dangantaka da mutanen da za su iya ba ku shawara, labarin ayyuka ko gabatar da ku ga wasu."], ["Tattaunawar neman bayani (informational interview)", "gajeriyar hira don koyon aikin wani, ba don neman aiki ba."], ["Take (headline)", "gajeren layin da ke ƙarƙashin sunanku a bayanan kanku na sana'a."]],
          slides: [
            { title: "Mutane ne ke cike ayyuka", bullets: ["Networking = dangantaka da shawara", "Ba roƙo ba ne; ku taimaki wasu ma"] },
            { title: "Ku fara da wanda kuka sani", bullets: ["Tsofaffin sojoji a aikin farar hula", "Tsofaffin shugabanni, iyali, al'umma", "Bayanan kanku da taken farar hula"] },
            { title: "Tattaunawar neman bayani", bullets: ["Minti 15 zuwa 20", "Tambayoyi uku da aka shirya", "Koyaushe ku yi godiya"] },
            { title: "Shirye-shiryen tsofaffin sojoji", bullets: ["Kayan taimakon jihohi ta DOL VETS", "Masu ɗaukar aiki na HIRE Vets", "Bajekolin ayyuka na tsofaffin sojoji"] }
          ],
          sources: [
            { name: "DOL VETS: Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "HIRE Vets Medallion Program", url: "https://www.hirevets.gov/" }
          ],
          tryIt: "Ku rubuta jerin mutane goma da kuka sani da ke aikin farar hula. Ku zaɓi biyu ku rubuta wa kowanne gajeren saƙo mai ladabi kuna neman hira ta minti 15 game da aikinsu. Ku rubuta tambayoyi uku da za ku yi.",
          youCanNow: "gina abokan hulɗa, neman tattaunawar neman bayani, da amfani da shirye-shiryen ɗaukar tsofaffin sojoji aiki.",
          quickCheck: [
            { objective: "O4", q: "Mene ne gina abokan hulɗa (networking)?", options: ["Neman aiki daga baƙi nan take", "Amfani da kafofin sada zumunta kaɗai", "Ƙulla dangantaka, neman shawara da taimaka wa wasu a madadin haka", "Tura CV ɗinku ga kowa"], answer: 2, why: "Networking dangantaka ce ta ɓangarori biyu ta shawara da taimako." },
            { objective: "O4", q: "Abokinku yana aiki a kamfanin da kuke so. Me za ku tura?", options: ["Gajeriyar buƙata mai ladabi don hira ta minti 15 game da aikinsa", "CV ɗinku tare da \"ka sa a ɗauke ni aiki\"", "Saƙo mai shafi biyu game da sana'arku", "Babu komai; abin kunya ne"], answer: 0, why: "Gajeriyar buƙata mai ladabi don tattaunawar neman bayani tana da sauƙin amincewa da ita." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Daidaita da al'adar aikin farar hula",
          minutes: 5,
          goal: "Ambaci manyan bambance-bambance a wuraren aikin farar hula, da shirya yadda za ku daidaita.",
          text: [
            "Wuraren aikin farar hula suna tafiya daban. Sau da yawa babu tsarin umarni (chain of command) a sarari, kuma ƙungiya ce ke yanke shawara, ko bayan doguwar tattaunawa. Umarni na iya zuwa kamar shawara: \"Za ka iya duba wannan?\" yawanci yana nufin \"Don Allah ka yi wannan.\"",
            "Magana sau da yawa tana da taushi. Amsoshi kai tsaye, gajeru, da suka yi aiki a cikin kakin soja na iya zama kamar masu tsauri ga abokan aiki na farar hula. Ku gwada ƙara ɗan bayani da sautin abokantaka. Ku yi tambayoyi idan abubuwa ba su yi sarari ba; a kamfanoni da yawa, ana sa ran a yi tambaya, ba alamar rauni ba ce.",
            "Ƙarfinku yana tafiya da ku: zuwa da wuri, kammala abin da kuka fara, natsuwa a lokacin matsi, da kula da ƙungiyarku. Ku riƙe su. Amma ku yi tsammanin tsari kaɗan, bukukuwa kaɗan, ƙarin imel da taruka, da abokan aiki da ba su taɓa aikin soja ba.",
            "Zai iya ɗaukar lokaci kafin ku ji kamar kuna gida. Ku nemi mai ba da shawara (mentor) a wurin aiki, kamar abokin aiki tsohon soja, ko ku shiga ƙungiyar tsofaffin sojoji idan kamfanin yana da ita. Ku yi magana da iyalinku game da canje-canjen ma: su ma suna daidaitawa."
          ],
          steps: ["Ku lura da yadda ake yanke shawara a sabon aikinku.", "Ku ɗauki buƙatu masu ladabi a matsayin ayyuka na gaske.", "Ku ƙara bayani da sautin abokantaka ga saƙonni kai tsaye.", "Ku yi tambaya idan wani abu bai yi sarari ba.", "Ku nemi mai ba da shawara ko ƙungiyar tsofaffin sojoji a wurin aiki."],
          words: [["Tsarin umarni (chain of command)", "tsarin soja na wane ne ke kai rahoto ga wane."], ["Al'adar wurin aiki", "ƙa'idodin da ba a rubuta ba game da yadda mutane ke aiki da magana a wurin aiki."], ["Mai ba da shawara (mentor)", "mutum mai ƙwarewa fiye da ku da ke ba ku shawara."]],
          slides: [
            { title: "Abin da ya bambanta", bullets: ["Sau da yawa babu tsarin umarni a sarari", "Ƙungiya ko tattaunawa ce ke yanke shawara", "Buƙatu suna kama da shawara"] },
            { title: "Magana", bullets: ["Ku ƙara bayani da sautin abokantaka", "Ana sa ran a yi tambaya"] },
            { title: "Ƙarfin da ke tafiya da ku", bullets: ["Kan lokaci, kammala aiki, natsuwa", "Kula da ƙungiyarku"] },
            { title: "Zama a sabon wuri", bullets: ["Ku nemi mai ba da shawara ko ƙungiyar tsofaffin sojoji", "Ku yi magana da iyali: su ma suna daidaitawa"] }
          ],
          tryIt: "Ku tuna lokacin da kuka ba da gajeren umarni kai tsaye a aikin soja. Ku sake rubuta shi a matsayin buƙata mai ladabi ta farar hula tare da dalili, kamar yadda za ku rubuta shi a imel na aiki. Sannan ku rubuta ƙarfin soja biyu da za ku riƙe da halaye biyu da za ku daidaita.",
          youCanNow: "ambaci manyan bambance-bambance a al'adar aikin farar hula, da daidaita yadda kuke magana.",
          quickCheck: [
            { objective: "O5", q: "A ayyukan farar hula da yawa, yin tambaya:", options: ["Alamar rauni ce", "Ana sa ran sa, kuma abu ne na yau da kullum", "Ya saɓa wa ƙa'ida", "Na sababbin ma'aikata ne kaɗai"], answer: 1, why: "Wuraren aikin farar hula yawanci suna sa ran mutane su yi tambaya." },
            { objective: "O5", q: "Kuna son abokin aiki ya tura rahoto kafin Juma'a. Ta yaya za ku rubuta?", options: ["\"Rahoto. Juma'a. Yanzu.\"", "\"Ka yi ko kuma ka gani.\"", "Ku yi shiru ku yi shi da kanku", "\"Za ka iya tura rahoton kafin Juma'a? Ina buƙatarsa don taron Litinin. Na gode!\""], answer: 3, why: "Buƙata mai ladabi tare da dalili ta dace da al'adar aikin farar hula." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Samun tallafi da kula da lafiyar ƙwaƙwalwa",
          minutes: 5,
          goal: "Yin jerin masu tallafi da sanin yadda ake samun taimakon gaggawa a kowane lokaci.",
          text: [
            "Barin aikin soja babban canji ne: sabon tsarin rayuwa, sabuwar fahimtar kai, wataƙila ƙaura, da ƙarancin haɗuwa da mutanen da kuka yi aiki tare da su. Damuwa, rashin barci mai kyau, fushi ko jin baƙin ciki abubuwa ne da aka saba gani. Neman taimako ƙarfi ne, ba rauni ba.",
            "Veterans Crisis Line kyauta ne, sirri ne, kuma a buɗe yake awa 24 a rana, kwana 7 a mako. Ku kira 988, sannan ku danna 1. Ku tura tes zuwa 838255. Ko ku yi hira ta intanet a veteranscrisisline.net. Na tsofaffin sojoji ne, sojoji masu aiki, membobin Guard da Reserve da mutanen da ke tallafa musu, kuma ba sai kun yi rajista a tallafin VA ko kula da lafiya na VA ba kafin ku yi amfani da shi.",
            "Don tallafi na dogon lokaci, Vet Centers cibiyoyin ba da shawara ne na al'umma da ke ba da shawara (counseling) kyauta kuma a sirri ga tsofaffin sojoji, sojoji da iyalai da suka cancanta, har da taimakon daidaitawa bayan aikin soja. Ku kira 1-877-927-8387 a kowane lokaci don yin magana da a haɗa ku da Vet Center mafi kusa da ku. Kula da lafiya na VA kuma yana ba da kula da lafiyar ƙwaƙwalwa ga tsofaffin sojoji da suka yi rajista.",
            "Ku gina naku ƙungiyar ma: mutane biyu ko uku da kuka amince da su, ƙungiyar tsofaffin sojoji, ƙungiyoyin addini ko na al'umma, da tsarin rayuwa na yau da kullum mai motsa jiki da barci. Idan kuna damuwa game da wani tsohon soja abokinku, kuna iya kiran Crisis Line a madadinsa."
          ],
          steps: ["Ku ajiye 988 (sannan ku danna 1) da lambar tes 838255 a wayarku.", "Ku nemo Vet Center mafi kusa ta kiran 1-877-927-8387.", "Ku rubuta sunaye da lambobin mutane biyu ko uku da kuka amince da su.", "Ku ƙara ƙungiya ɗaya ko tsarin yau da kullum da ke taimaka muku, kamar ƙungiyar tsofaffin sojoji ko motsa jiki.", "Idan ku ko abokinku kuna cikin matsananciyar damuwa, ku kira 988 ku danna 1 yanzu."],
          words: [["Veterans Crisis Line", "tallafin gaggawa kyauta, a sirri, awa 24 kwana 7, ga tsofaffin sojoji, sojoji da masu tallafa musu: 988, sannan ku danna 1."], ["Vet Center", "cibiyar ba da shawara ta al'umma da ke ba da shawara kyauta kuma a sirri ga tsofaffin sojoji, sojoji da iyalai da suka cancanta."], ["Sirri (confidential)", "ana kiyaye shi ba a bayyana wa wasu ba."]],
          slides: [
            { title: "Canji yana da wuya; neman taimako ƙarfi ne", bullets: ["Sabon tsarin rayuwa, fahimtar kai, wataƙila ƙaura", "Damuwa, rashin barci, fushi abubuwa ne da aka saba gani"] },
            { title: "Veterans Crisis Line: 24/7", bullets: ["Ku kira 988, sannan ku danna 1", "Tes zuwa 838255", "Hira a veteranscrisisline.net"] },
            { title: "Tallafi na dogon lokaci", bullets: ["Vet Centers: shawara kyauta kuma a sirri", "Ku kira 1-877-927-8387, a kowane lokaci", "Kula da lafiyar ƙwaƙwalwa na VA"] },
            { title: "Naku ƙungiyar", bullets: ["Mutane biyu ko uku da kuka amince da su", "Ƙungiyoyin tsofaffin sojoji, na addini ko na al'umma", "Tsarin yau da kullum: motsa jiki da barci"] }
          ],
          sources: [
            { name: "Veterans Crisis Line", url: "https://www.veteranscrisisline.net/" },
            { name: "VA Vet Centers", url: "https://www.vetcenter.va.gov/" }
          ],
          tryIt: "Aikin ƙarshe: ku ajiye 988 (sannan ku danna 1) da 838255 a wayarku, ku rubuta jerin masu tallafa muku tare da Vet Center mafi kusa da mutane biyu da kuka amince da su. Sannan ku kammala shirinku na sauyawa na kwana 90 tare da hidimomin TAP ko na aiki, layukan CV guda biyar da suka dace da aiki, abokan hulɗa ko taruka uku, da halaye biyu na aikin farar hula da za ku riƙa yi.",
          youCanNow: "samun taimakon gaggawa a kowane lokaci, nemo tallafi na dogon lokaci, da rubuta cikakken shirinku na sauyawa na kwana 90 a takarda.",
          quickCheck: [
            { objective: "O6", q: "Ta yaya za ku isa Veterans Crisis Line ta waya?", options: ["Ku kira 988, sannan ku danna 1", "Ku kira 911, sannan ku danna 9", "Ku tura imel ga tsohuwar rundunarku", "Ku jira ganawa da VA"], answer: 0, why: "Veterans Crisis Line shi ne 988, sannan ku danna 1, a kowane lokaci." },
            { objective: "O6", q: "Kuna damuwa game da wani tsohon soja abokinku da yake kama da yana cikin matsananciyar damuwa. Me za ku iya yi?", options: ["Ku jira ku ga ko zai wuce", "Ku saka labarin a intanet", "Ku kira Veterans Crisis Line a madadinsa: 988, sannan ku danna 1", "Ku ce masa ya magance shi shi kaɗai"], answer: 2, why: "Kuna iya kiran Veterans Crisis Line a madadin wanda kuke damuwa game da shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gina rayuwarku ta farar hula",
        questions: [
          { objective: "O4", q: "Mene ne tattaunawar neman bayani (informational interview)?", options: ["Gajeriyar hira don koyon aikin wani", "Hirar neman aiki tare da kwangila", "Gwajin VA", "Binciken izinin sirri (security clearance)"], answer: 0, why: "Don koyo da shawara ce, ba don neman aiki ba." },
          { objective: "O5", q: "Wani manaja na farar hula ya ce, \"Za ka iya duba wannan rahoton?\" Me yawanci yake nufi?", options: ["Zaɓi ne; ku ƙyale shi", "Ku jira umarni a rubuce", "Don Allah ku yi wannan aikin", "Kuna cikin matsala"], answer: 2, why: "Buƙatun farar hula sau da yawa suna kama da shawara amma ayyuka ne na gaske." },
          { objective: "O5", q: "Wane ƙarfin soja ne ya kamata ku riƙe a aikin farar hula?", options: ["Amfani da gajartawa a kowane imel", "Rashin yin tambaya ko kaɗan", "Ƙyale abokan aiki da ba su taɓa aikin soja ba", "Kammala abin da kuka fara"], answer: 3, why: "Amincewa da kammala aiki ana daraja su a ko'ina." },
          { objective: "O6", q: "Ta yaya za ku isa Veterans Crisis Line ta waya?", options: ["Ku kira 911 ku nemi VA", "Ku kira 988, sannan ku danna 1", "Ku kira 411", "Ku kira mai ɗaukar ku aikin soja (recruiter)"], answer: 1, why: "Veterans Crisis Line shi ne 988, sannan ku danna 1, a kowane lokaci." },
          { objective: "O6", q: "Dole ne ku yi rajista a tallafin VA kafin ku yi amfani da Veterans Crisis Line?", options: ["E", "Sai idan kun yi aiki shekaru 20", "A ranakun aiki kaɗai", "A'a"], answer: 3, why: "Ba sai kun yi rajista a tallafin VA ko kula da lafiya na VA ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Daga Rayuwar Soja zuwa Rayuwar Farar Hula",
    questions: [
      { objective: "O1", q: "Su wane ne za su iya shiga hidimomin TAP na DOL?", options: ["Hafsoshi (officers) kaɗai", "Masu ritaya da suka haura shekaru 60 kaɗai", "Sojoji masu sauyawa da mata ko mazajensu", "Fararen hula kaɗai"], answer: 2, why: "Sashen DOL na TAP yana hidima ga sojoji masu sauyawa da mata ko mazajensu." },
      { objective: "O1", q: "Yaushe ya kamata ku fara TAP?", options: ["Bayan kun yi shekaru biyar da fita", "Ba ko kaɗan", "Sai idan kun riga kun sami aiki", "Da wuri: ku tambayi ofishin TAP na sansaninku lokacin da dole ku fara"], answer: 3, why: "Farawa da wuri yana ba ku ƙarin lokaci; ofishin TAP ɗinku ne ke tsara lokacin." },
      { objective: "O1", q: "Wane taron koyo ne na zaɓi, kuma yana taimaka muku zaɓar sana'a da shirya yadda za ku kai gare ta?", options: ["Horon farko na soja (basic training)", "Career and Credential Exploration", "Horon motsa jiki", "Gwajin neman haƙƙi na VA"], answer: 1, why: "C2E hanyar zaɓi ce ta DOL ta kwana biyu game da sana'a da takardar shaida." },
      { objective: "O1", q: "Ba za ku iya halartar TAP da kanku ba. Me zai iya ƙirgu a madadin haka?", options: ["Koyo ta intanet, idan manajan TAP ko mai ba ku shawara ya amince", "Babu komai", "Kallon talabijin", "Rubutun aboki"], answer: 0, why: "DOL ta ce koyo ta intanet zai iya ƙirgu idan an amince." },
      { objective: "O2", q: "Me yasa za ku fassara ƙwarewar soja?", options: ["Manajojin ɗaukar aiki na farar hula ba za su iya fahimtar kalmomin soja ba", "Doka ce ta tilasta", "Don ɓoye aikinku na soja", "Don CV ɗin ya ƙara tsawo"], answer: 0, why: "Kalmomi masu sauƙi suna taimaka wa masu ɗaukar aiki su ga ƙwarewarku ta gaske." },
      { objective: "O2", q: "My Next Move for Veterans yana taimaka muku:", options: ["Shigar da neman haƙƙi na VA", "Samun bashi", "Nemo sana'o'in farar hula masu alaƙa da ƙwarewarku ta soja", "Ɗaukar lokacin ganin likita"], answer: 2, why: "DOL ta jera binciken sauyawa daga soja nasa don sana'o'in farar hula." },
      { objective: "O2", q: "Me ya kamata ku yi da gajartawa a CV na farar hula?", options: ["Ku yi amfani da su da yawa iyakar yiwuwa", "Ku rubuta su da baƙi mai kauri", "Ku ƙirƙiri sababbi", "Ku rubuta su cikakke ko ku cire su"], answer: 3, why: "Gajartawa suna rikitar da masu karatu na farar hula." },
      { objective: "O2", q: "Idan kuna amfani da AI don taimakawa wajen fassara ayyukanku, ya kamata ku:", options: ["Liƙa bayanan sirri na soja don daidaito", "Bayyana aiki a taƙaice kuma ku tabbatar kowace kalma gaskiya ce", "Bar shi ya ƙirƙiri sakamako", "Bayar da lambar Social Security ɗinku"], answer: 1, why: "Kada ku taɓa bayar da bayanai masu muhimmanci, kuma ku kiyaye gaskiyar CV ɗin." },
      { objective: "O3", q: "Layin CV mai ƙarfi yana bin tsarin:", options: ["Matsayi + runduna + sansani", "Abin sha'awa + abincin da kuka fi so", "Lambar aiki kaɗai", "Kalmar aiki + abin da kuka yi + sakamako"], answer: 3, why: "Wannan yana nuna abin da kuka yi da dalilin da yasa yake da muhimmanci." },
      { objective: "O3", q: "Ta yaya ake daidaita CV?", options: ["Amfani da kalmomin tallar aiki inda suke gaskiya game da ku", "Tura CV ɗaya zuwa ko'ina", "Ƙara kowane aiki da kuka taɓa yi", "Sa shi ya kai shafi goma"], answer: 0, why: "Daidaitawa tana haɗa ƙwarewarku ta gaske da wannan aikin." },
      { objective: "O3", q: "Wace lamba ce ke ƙara ƙarfin layin CV?", options: ["Girman takalminku", "\"Na horar da sababbin ma'aikata 8\"", "Lambar wayar ofishin rundunarku", "Lambar aikinku na soja (service number)"], answer: 1, why: "Lambobi suna nuna girma da sakamakon aikinku." },
      { objective: "O4", q: "Mafi kyawun bayanin gina abokan hulɗa (networking) shi ne:", options: ["Neman kuɗi daga baƙi", "Tura saƙo ɗaya ga kowa", "Ƙulla dangantaka, neman shawara da taimaka wa wasu a madadin haka", "Na masu digiri ne kaɗai"], answer: 2, why: "Networking game da dangantaka da shawara ne." },
      { objective: "O4", q: "Tsawon lokacin tattaunawar neman bayani yawanci nawa ne?", options: ["Awa uku", "Yini guda", "Kusan minti 15 zuwa 20", "Minti ɗaya"], answer: 2, why: "Gajerun buƙatu suna girmama lokacin ɗayan mutumin." },
      { objective: "O4", q: "Me HIRE Vets Medallion Program yake yi?", options: ["Yana karrama masu ɗaukar aiki da suka dage wajen ɗaukar tsofaffin sojoji aiki", "Yana biyan kuɗin hayar tsofaffin sojoji", "Yana shigar da neman haƙƙi na VA", "Yana gudanar da horon farko na soja"], answer: 0, why: "DOL ta bayyana shi a matsayin mai karrama dagewar kamfanoni wajen ɗaukar tsofaffin sojoji aiki." },
      { objective: "O5", q: "Saƙonninku kai tsaye, gajeru, suna kama da masu tsauri ga abokan aiki na farar hula. Me zai taimaka?", options: ["Ku daina magana da su", "Ku ƙara amfani da gajartawa", "Ku rubuta da manyan haruffa duka", "Ku ƙara bayani da sautin abokantaka"], answer: 3, why: "Saƙonni masu taushi kuma a sarari sun dace da al'adar aikin farar hula." },
      { objective: "O5", q: "A ayyukan farar hula da yawa, yin tambaya:", options: ["Ba a yarda ba", "Ana sa ran sa, kuma abu ne na yau da kullum", "Alamar rauni ce", "Na manajoji ne kaɗai"], answer: 1, why: "Yin tambaya idan abu bai yi sarari ba ana sa ran sa a wuraren aiki da yawa." },
      { objective: "O6", q: "Wace lambar waya ce ke haɗa ku da Vet Center mafi kusa, a kowane lokaci?", options: ["911", "411", "1-800-MEDICARE", "1-877-927-8387"], answer: 3, why: "VA ta jera 1-877-927-8387 a matsayin cibiyar kiran Vet Center." },
      { objective: "O6", q: "Kuna iya tura tes zuwa Veterans Crisis Line a:", options: ["988", "411", "838255", "911"], answer: 2, why: "Ku tura tes zuwa 838255 don isa Veterans Crisis Line." },
      { objective: "O6", q: "Kuna damuwa game da wani tsohon soja abokinku. Me za ku iya yi?", options: ["Ku kira Veterans Crisis Line a madadinsa: 988, sannan ku danna 1", "Ku jira ku yi fata", "Ku saka labarin a intanet", "Kada ku gaya wa kowa"], answer: 0, why: "Crisis Line yana kuma tallafa wa mutanen da ke damuwa game da wani tsohon soja." },
      { objective: "O6", q: "Shawarar (counseling) Vet Center:", options: ["Ta hafsoshi ce kaɗai", "Kyauta ce kuma a sirri", "Sai da umarnin kotu", "Ana biya a kowace awa"], answer: 1, why: "VA ta ce shawarar Vet Center kyauta ce kuma a sirri." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      6,
      8,
      9,
      11,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "TAP da hidimomin aiki",
        objective: "O1",
        notYet: "Ba a ambaci tarurrukan koyo ko hidimomi ba.",
        meets: "Tarurrukan koyo na TAP ko hidimomin aiki na tsofaffin sojoji da mai koyo zai yi amfani da su, waɗanda suka dace da hanyarsa.",
        exceeds: "Ya haɗa da ranaku ko yadda ake yin rajista ga kowanne."
      },
      {
        name: "Layukan CV da suka dace da aiki",
        objective: "O3",
        notYet: "Layuka ƙasa da biyar, ko layuka masu kalmomin soja na musamman ba tare da sakamako ba.",
        meets: "Layuka biyar da kalmomin farar hula, kowanne da kalmar aiki, abin da aka yi da sakamako, waɗanda suka dace da tallar aiki ɗaya ta gaske.",
        exceeds: "Kowane layi yana amfani da kalma daga tallar aikin kuma yana da lamba."
      },
      {
        name: "Gina abokan hulɗa",
        objective: "O4",
        notYet: "Ba a ambaci mutane ko taruka ba.",
        meets: "Mutane ko taruka uku don gina abokan hulɗa.",
        exceeds: "An rubuta daftarin saƙo ga aƙalla ɗaya, tare da tambayoyin da za a yi."
      },
      {
        name: "Halayen aikin farar hula",
        objective: "O5",
        notYet: "Ba a ambaci halaye ba.",
        meets: "Halaye biyu na wurin aikin farar hula da mai koyo zai riƙa yi.",
        exceeds: "Ya kuma ambaci ƙarfin soja biyu da zai riƙe."
      },
      {
        name: "Jerin masu tallafi",
        objective: "O6",
        notYet: "Babu jerin masu tallafi, ko babu layin gaggawa.",
        meets: "Veterans Crisis Line (988, sannan ku danna 1, ko tes zuwa 838255), Vet Center mafi kusa, da mutane biyu da aka amince da su.",
        exceeds: "An ajiye lambobin a wayar mai koyo."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka halarci taron koyo na TAP ko suka tuntuɓi hidimomin aiki na tsofaffin sojoji cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka nemi aikin da suka daidaita CV dominsa, ko suka yi tattaunawar neman bayani cikin kwanaki 30",
      "Masu koyo da suka sami aikin farar hula, horo ko gurbin makaranta cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Tallar aikin farar hula ɗaya ta gaske da mai koyo yake so",
      "O*NET Military Crosswalk ko My Next Move for Veterans (kyauta), da shafukan dol.gov da va.gov",
      "Takarda ko daftari don shirin sauyawa na kwana 90",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku faɗi Veterans Crisis Line (988, sannan ku danna 1, ko tes zuwa 838255) a farkon kwas ɗin, kuma ku san matakan tura mutum zuwa taimako a yankinku idan wani mai koyo yana cikin wahala.",
      "Ku kiyaye darasin jerin masu tallafi a sirri: ba dole masu koyo su faɗi waɗanda ke cikin jerinsu ba.",
      "Ku gayyaci mata ko mazaje da 'yan iyali; sauyawar tana shafar duk gidan.",
      "Ku sa masu koyo su yi atisayen sake rubuta buƙata mai ladabi biyu-biyu, kuma su karanta layukan CV na juna.",
      "Ku ba da maki ga shirin kwana 90 da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
