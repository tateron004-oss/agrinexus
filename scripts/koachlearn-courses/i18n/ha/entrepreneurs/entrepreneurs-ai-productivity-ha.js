"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-ai-productivity.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-ai-productivity-ha",
  lang: "ha",
  translationOf: "entrepreneurs-ai-productivity",
  category: "Entrepreneurs",
  name: "AI don Ƙara Yawan Aiki a Kasuwanci",
  skills: "Tsara mako da AI, Share akwatin imel da sauri, Rubuta samfuran saƙo da za a sake amfani da su, Rubuta tsarin aiki na dindindin (SOP), Auna lokacin da aka tara",
  outcome: "amfani da AI don tsara makon kasuwancinku, amsa imel da sauri da samfuran amsa da za ku sake amfani da su, mayar da wani aiki da kuke maimaitawa zuwa rubutattun matakai, da auna yawan lokacin da kuka tara.",
  about: [
    "Yawancin masu kasuwanci ba ra'ayoyi ne suke ƙare musu ba; lokaci ne yake ƙare musu. Wannan kwas ɗin na masu kasuwanci ne da ke yin komai da kansu kuma suke son su sami ɗan lokaci.",
    "Za ku yi amfani da mataimakin AI kyauta don tsara makonku bisa muhimmanci, ku tsara imel ku amsa shi da sauri, ku gina samfuran saƙonnin da kuke rubutawa akai-akai, ku kuma rubuta tsarin aiki mai sauƙi don mai taimako (ko ku kanku a gaba) ya yi aiki iri ɗaya kowane lokaci. Sannan za ku auna lokacin da kuka tara.",
    "Kowane darasi yana ɗaukar kusan minti biyar, da aikin da za ku yi a kan kasuwancinku na gaske. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku gina \"kayan dawo da lokaci\" na kasuwancinku: mako ɗaya da AI ya taimaka aka tsara, da muhimman ayyukanku uku; samfuran amsa uku da za a sake amfani da su; tsarin aiki ɗaya rubutacce na wani aiki da ake maimaitawa; da rubutun lokaci mai sauƙi na kafin da bayan, da ke nuna mintunan da aka tara a kan aiki ɗaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci da ke yin yawancin ayyuka da kansu kuma ba su da isasshen lokaci, kamar masu ba da hidima su kaɗai, masu shaguna da masu ƙaramar sana'a a gefe.",
    startingPoint: "Suna da jerin abubuwan yi, suna amsa imel, kuma suna yin ayyuka iri ɗaya kowane mako, galibi daga ƙwaƙwalwa. Wasu sun yi amfani da mataimakin AI wajen rubutu, amma ba don tsarawa, yin samfura ko rubuta yadda suke aiki ba.",
    gap: "Masu kasuwanci suna rasa sa'o'i saboda makonnin da ba a tsara ba, jinkirin imel da saƙonnin da ake maimaitawa, kuma kowane aiki ya dogara ga tunawarsu yadda ake yin sa. Suna buƙatar tsarawa bisa muhimmanci, sake amfani da samfura, rubuta tsarin aiki, da auna ko AI yana tara lokaci da gaske, don sa'o'in da aka tara su tafi wajen bunƙasa kasuwancin.",
    constraints: [
      "Kalmomi masu sauƙi; ba a buƙatar ilimin fasaha",
      "Na'urori: waya ko kwamfuta mai imel, kalanda da mataimakin AI kyauta",
      "Lokaci: kusan minti biyar a kowane darasi, da ayyukan da ake yi a cikin makon aiki na gaske",
      "Kada a saka adireshin abokan ciniki, lambobin kati ko bayanan kwangila na sirri a cikin AI",
      "Tambayoyin doka, lasisi da kuɗi suna zuwa ga hukumar gwamnati ko ƙwararre"
    ],
    prerequisites: "Kwas ɗin \"Gabatarwa ga AI don 'Yan Kasuwa\", ko ɗan sanin yadda ake neman taimakon mataimakin AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan mako mai zuwa da ba a tsara ba", action: "amfani da AI don rarraba su da yin tsarin mako mai lokuta a ware, da muhimman ayyukanku uku da kuka zaɓa da kanku", standard: "kuma an saka tsarin a kalandarku" },
    { id: "O2", condition: "Idan aka ba ku akwatin imel na yau", action: "rarraba imel zuwa rukuni da aika amsoshin da AI ya rubuta, bayan kun duba su", standard: "ba tare da saka bayanan sirri na abokan ciniki a cikin AI ba" },
    { id: "O3", condition: "Idan aka ba ku tambayoyi uku da abokan ciniki suka fi yi muku", action: "yin samfurin amsa da za a sake amfani da shi ga kowace, mai wuraren cikewa", standard: "an duba bayananku na gaske, kuma an ajiye samfuran a inda za ku same su" },
    { id: "O4", condition: "Idan aka ba ku wani aiki da kuke maimaitawa kowane mako", action: "rubuta tsarin aiki mai matakai masu lamba da jerin dubawa", standard: "an gwada shi sau ɗaya ta bin sa kalma da kalma, kuma an gyara shi" },
    { id: "O5", condition: "Idan aka ba ku dogon takardar kasuwanci da aka cire bayanan sirri daga ciki", action: "samun taƙaitawar AI ta ranaku, kuɗaɗe da hakkokin da ke kanku, da kwatanta ta da ainihin takardar", standard: "kuna karanta sassan kuɗi da na doka da kanku" },
    { id: "O6", condition: "Ga aiki ɗaya da kuke yi kowane mako", action: "rubuta lokacinku kafin da bayan amfani da AI da lissafa mintunan da aka tara a mako", standard: "kuna ƙidaya lokacin da aka ɗauka wajen dubawa da gyara aikin AI" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsarawa da sadarwa da sauri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tsara makonku bisa muhimmanci",
          minutes: 5,
          goal: "Yi amfani da AI don mayar da jerin abubuwan yi marasa tsari zuwa tsarin mako mai muhimman ayyuka uku.",
          text: [
            "Dogon jerin abubuwan yi yana ɓoye abin da ya fi muhimmanci. AI yana da kyau wajen rarrabawa. Ku saka jerinku (ba tare da bayanan sirri na abokan ciniki ba) ku nemi ya rarraba ayyukan, ya kuma ba da shawarar waɗanne uku ne za su fi taimakon kasuwancinku a wannan makon.",
            "Hanya mai sauƙi ta yin hukunci: ayyukan da ke kawo kuɗi ko ke faranta wa abokan ciniki rai yawanci suna zuwa farko; ayyukan da za su iya jira ko a ba wani su yi suna zuwa daga baya. Ku ne kuke yanke tsarin ƙarshe, domin ku kuka san kasuwancinku.",
            "Sannan ku nemi tsari mai lokuta a ware: \"Ka saka waɗannan a cikin makona. Ina aiki daga ƙarfe 8 na safe zuwa 4 na yamma, Litinin zuwa Juma'a, kuma ina kai kaya safiyar Talata da Alhamis.\" Ku saka tsarin a kalandarku."
          ],
          steps: ["Ku rubuta kowane aiki da ke cikin kanku a matsayin jeri.", "Ku nemi AI ya rarraba ayyukan ya ba da shawarar muhimman uku na makon.", "Ku zaɓi muhimman ukunku da kanku.", "Ku nemi AI ya saka ayyukan cikin lokuta a ware, a kewaye da sa'o'inku na dindindin.", "Ku kwafi lokutan zuwa kalandarku."],
          words: [["Muhimmin aiki (priority)", "aikin da ya fi muhimmanci a yanzu."], ["Lokaci a ware (time block)", "wani lokaci da aka keɓe a kalandarku don irin aiki ɗaya."]],
          slides: [
            { title: "Dogon jeri yana ɓoye abin da ya fi muhimmanci", bullets: ["Ku saka jerinku a AI (ba tare da bayanan sirri ba)", "Ku nemi ya rarraba ayyukan", "Ku nemi muhimman uku na wannan makon"] },
            { title: "Abin da yawanci yake zuwa farko", bullets: ["Ayyukan da ke kawo kuɗi", "Ayyukan da ke faranta wa abokan ciniki rai", "Ku ne kuke yanke tsarin ƙarshe"] },
            { title: "Ku ware lokuta", bullets: ["Ku faɗa wa AI sa'o'inku da ayyukanku na dindindin", "Ku sami tsarin mako", "Ku saka shi a kalandarku"] }
          ],
          tryIt: "Ku rubuta cikakken jerin ayyukanku na mako mai zuwa, ku nemi mataimakin AI ya rarraba shi ya ba da shawarar muhimman uku, ku zaɓi muhimman ukunku da kanku, sannan ku sami tsari mai lokuta a ware da za ku saka a kalandarku.",
          youCanNow: "mayar da jeri marar tsari zuwa tsarin mako mai muhimman ayyuka a sarari da lokuta a ware.",
          quickCheck: [
            { objective: "O1", q: "Mene ne lokaci a ware (time block)?", options: ["Wani lokaci da aka keɓe a kalandarku don irin aiki ɗaya", "Jerin dukkan ayyuka", "Hutu tsakanin taruka", "Wa'adin da abokin ciniki ya bayar"], answer: 0, why: "Lokuta a ware suna kare lokaci don muhimman ayyukanku." },
            { objective: "O1", q: "AI ya ba da shawarar muhimman ayyukanku uku, amma ɗaya ƙaramin aiki ne marar amfani sosai. Me za ku yi?", options: ["Ku karɓi jerin AI", "Ku zaɓi muhimman ukunku da kanku", "Ku yi dukkan ayyuka lokaci ɗaya", "Ku bar tsarawa a wannan makon"], answer: 1, why: "Ku ne kuke yanke muhimman ayyuka na ƙarshe; AI shawara kawai yake bayarwa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Share akwatin imel ɗinku da sauri",
          minutes: 5,
          goal: "Yi amfani da AI don rarraba imel da rubuta daftarin amsoshin da kuke dubawa kafin aikawa.",
          text: [
            "Imel yana cinye sa'o'i. Ku fara rarraba shi: a amsa yanzu (abokan ciniki, kuɗi, gaggawa), a amsa daga baya, a karanta kawai, da a goge ko a daina karɓa (unsubscribe). Yawancin manhajojin imel kuma suna iya tace saƙonni kai tsaye zuwa manyan fayiloli (folders) ko alamomi (labels).",
            "Don amsoshi, AI zai iya mayar da gajerun bayananku zuwa saƙo mai ladabi: \"Ka amsa wa abokin ciniki da ke son ya matsar da alƙawarinsa na Juma'a. Ka ce eh, ka ba shi Asabar ƙarfe 10 na safe ko Litinin ƙarfe 2 na rana, kuma ka sa ta zama gajeriya mai daɗi.\" Gmail da Outlook ma suna iya ba da shawarwarin AI da ke cikinsu, ya danganta da tsarinku (plan).",
            "Kada ku taɓa saka cikakken imel na abokin ciniki da ke da lambar wayarsa, adireshinsa ko bayanan katinsa a cikin manhajar hira. Ku taƙaita tambayarsa da kalmominku a maimakon haka. Kuma koyaushe ku karanta amsa kafin ku aika."
          ],
          steps: ["Ku rarraba akwatin imel ɗinku zuwa: a amsa yanzu, a amsa daga baya, a karanta kawai, a goge.", "Ga kowane imel na a amsa yanzu, ku rubuta bayani na layi ɗaya na abin da kuke son faɗa.", "Ku nemi AI ya mayar da bayanin zuwa gajeriyar amsa.", "Ku karanta, ku gyara, sannan ku aika da kanku."],
          words: [["Tacewa (filter)", "dokar imel da ke matsar da saƙonni zuwa babban fayil ko alama kai tsaye."], ["Unsubscribe (daina karɓa)", "hanyar haɗin da ke hana wani kamfani ci gaba da tura muku imel."]],
          slides: [
            { title: "Ku fara rarrabawa", bullets: ["A amsa yanzu: abokan ciniki, kuɗi, gaggawa", "A amsa daga baya", "A karanta kawai, ko a goge a daina karɓa"] },
            { title: "AI yana mayar da bayanai zuwa amsoshi", bullets: ["Ku rubuta abin da kuke son faɗa a layi ɗaya", "Ku nemi gajeriyar amsa mai daɗi", "AI da ke cikin Gmail ko Outlook zai iya taimakawa"] },
            { title: "Ku kasance lafiya", bullets: ["Ku taƙaita tambayar abokin ciniki da kanku", "Babu lambobin waya, adireshi ko bayanan kati", "Ku karanta kafin ku aika"] }
          ],
          tryIt: "Ku rarraba akwatin imel ɗinku na yau zuwa rukuni huɗu. Ga imel biyu na a amsa yanzu, ku rubuta bayani na layi ɗaya, ku sa AI ya rubuta daftarin amsa, ku duba shi ku aika. Ku auna tsawon lokacin da ya ɗauka.",
          youCanNow: "rarraba imel bisa muhimmanci da aika amsoshi da sauri, da kuka duba, da taimakon AI.",
          quickCheck: [
            { objective: "O2", q: "Waɗanne imel ne ke cikin rukunin a amsa yanzu?", options: ["Wasiƙun labarai (newsletters)", "Tsofaffin rasit", "Abokan ciniki, kuɗi da al'amuran gaggawa", "Tallace-tallace daga wasu kasuwanci"], answer: 2, why: "Imel na a amsa yanzu suna shafar abokan ciniki da kuɗi." },
            { objective: "O2", q: "AI ya rubuta daftarin amsa ga abokin ciniki. Me za ku yi kafin ku aika?", options: ["Ku aika ba tare da karantawa ba", "Ku ƙara lambar katin abokin ciniki", "Ku sake tura shi ga AI", "Ku karanta shi ku gyara duk abin da ba daidai ba"], answer: 3, why: "Kuna duba kowane daftarin AI kafin ya fita da sunanku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Samfuran saƙonnin da kuke rubutawa akai-akai",
          minutes: 4,
          goal: "Yi samfuran amsa uku don tambayoyin da abokan ciniki suka fi yi.",
          text: [
            "Idan kuna amsa tambaya iri ɗaya kowane mako (farashi, lokutan aiki, yadda ake yin alƙawari, tsarin mayar da kuɗi), ku rubuta amsar sau ɗaya ku riƙa sake amfani da ita. AI zai iya taimaka muku rubuta samfuri mai sarari da daɗi.",
            "Samfuri mai kyau yana da wuraren cikewa: \"Sannu [suna], na gode da tambayar ku game da [hidima]. Farashinmu na [girma] shi ne [farashi]. Kuna iya yin alƙawari a [hanyar haɗi ko lamba].\" Ku saka bayananku na gaske a cikin samfurin, kuma ku duba su duk lokacin da farashi ko ƙa'idoji suka canja.",
            "Ku ajiye samfura a inda za ku ɗauke su da sauri: takarda (document), manhajar rubutu (notes) a wayarku, ko fasalin amsoshin da aka ajiye (saved replies) da yawancin manhajojin imel da na saƙon kasuwanci ke bayarwa."
          ],
          steps: ["Ku jera tambayoyi biyar da abokan ciniki suka fi yi.", "Ku zaɓi manyan uku.", "Ku nemi AI ya yi gajeren samfuri mai daɗi ga kowace, mai [wuraren cikewa].", "Ku cika bayananku na gaske ku duba su.", "Ku ajiye samfuran a inda za ku same su da sauri."],
          words: [["Samfuri (template)", "saƙon da aka riga aka shirya, mai wuraren da kuke cikewa kowane lokaci."], ["Amsar da aka ajiye (saved reply)", "fasalin imel ko saƙo da ke ajiye samfuri don amfani da danna sau ɗaya."]],
          slides: [
            { title: "Ku rubuta sau ɗaya, ku sake amfani", bullets: ["Farashi, lokutan aiki, alƙawari, mayar da kuɗi", "AI yana taimaka muku rubuta shi a sarari"] },
            { title: "Samfuri mai kyau", bullets: ["Mai daɗi kuma gajere", "[Wuraren cikewa] don suna, hidima, farashi", "Bayananku na gaske, an duba su"] },
            { title: "Ku ajiye su kusa", bullets: ["Takarda ko manhajar rubutu", "Amsoshin da aka ajiye a manhajojin imel ko saƙo", "Ku sabunta su idan farashi ya canja"] }
          ],
          tryIt: "Ku rubuta tambayoyi uku da abokan ciniki suka fi yi muku, ku yi amfani da AI don yin samfuri ga kowace. Ku cika bayananku na gaske ku ajiye su.",
          youCanNow: "rubuta da sake amfani da samfura don tambayoyin abokan ciniki da kuka fi amsawa.",
          quickCheck: [
            { objective: "O3", q: "Wuraren cikewa kamar [suna] a cikin samfuri, na me ne?", options: ["Bayanan da kuke cikewa kowane lokaci", "Kalmomin da AI ba zai karanta ba", "Kurakuran da za a goge", "Ɓoyayyun hanyoyin haɗi"], answer: 0, why: "Wuraren cikewa suna bar ku sake amfani da samfuri ɗaya ga abokan ciniki da yawa." },
            { objective: "O3", q: "Kun canja lokutan buɗe shagonku. Me za ku yi da samfuranku?", options: ["Babu komai", "Ku sabunta ku sake duba kowane samfuri da ya ambaci lokuta", "Ku goge su duka", "Ku jira abokin ciniki ya yi ƙorafi"], answer: 1, why: "Dole samfura su dace da bayananku na yanzu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsarawa da sadarwa da sauri",
        questions: [
          { objective: "O1", q: "Waɗanne ayyuka ne yawanci suka cancanci shiga muhimman ukunku na mako?", options: ["Waɗanda suke da daɗi", "Waɗanda ke kawo kuɗi ko ke faranta wa abokan ciniki rai", "Waɗanda ke ɗaukar daƙiƙa 30", "Waɗanda wani ya nema"], answer: 1, why: "Ayyukan kuɗi da na abokan ciniki suna sa kasuwanci ya ci gaba." },
          { objective: "O1", q: "Me ya kamata ku faɗa wa AI don samun tsari mai amfani mai lokuta a ware?", options: ["Babu komai", "Kuɗin da ke asusun bankinku", "Kalmar sirrinku", "Sa'o'in aikinku da ayyukanku na dindindin"], answer: 3, why: "AI yana buƙatar sa'o'inku da alƙawuranku na dindindin don ya saka ayyuka." },
          { objective: "O2", q: "Imel na abokin ciniki yana da adireshin gidansa da lambar katinsa. Ta yaya za ku sami taimakon AI wajen amsawa?", options: ["Ku taƙaita tambayarsa da kalmominku", "Ku saka imel ɗin gaba ɗaya", "Ku tura shi ga kamfanin AI", "Ku yi watsi da abokin ciniki"], answer: 0, why: "Taƙaitawa tana hana bayanan sirri shiga manhajar AI." },
          { objective: "O3", q: "Wanne ne samfuri mai kyau?", options: ["\"Duba shafin intanet\"", "Saƙo daban da aka rubuta daga farko kowane lokaci", "\"Sannu [suna], farashinmu na [hidima] shi ne [farashi]. Ku yi alƙawari a [hanyar haɗi].\"", "Saƙo mai lambar katin abokin ciniki"], answer: 2, why: "Yana da wuraren cikewa da kuke cikewa da bayanan gaske." },
          { objective: "O3", q: "Farashinku ya hau. Me dole ku yi da samfuranku?", options: ["Ku goge su duka", "Babu komai", "Ku sabunta ku sake duba su", "Ku bar AI ya yi hasashen sabon farashi"], answer: 2, why: "Dole samfura su dace da bayananku na yanzu." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsare-tsaren da ke tara lokaci",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta tsarin aiki na dindindin (SOP)",
          minutes: 5,
          goal: "Mayar da wani aiki da kuke maimaitawa zuwa rubutattun matakai da taimakon AI.",
          text: [
            "Tsarin aiki na dindindin (SOP, standard operating procedure) rubutaccen jerin matakai ne na yin aiki iri ɗaya kowane lokaci. Yana bar mai taimako ya yi aikin ba tare da ya kira ku ba, kuma yana hana kurakurai lokacin da kuke cikin aiki.",
            "Hanya mai sauƙi ta yin sa: ku yi aikin sau ɗaya yayin da kuke faɗi ko rubuta kowane mataki a takaice. Sannan ku tambayi AI: \"Ka mayar da waɗannan bayanai zuwa tsarin aiki mai sarari mai matakai masu lamba da sabon mai taimako zai iya bi. Ka ƙara gajeren jerin dubawa a ƙarshe.\"",
            "Ku gwada SOP ɗin: ku ba wani (ko ku bi shi da kanku, kalma da kalma) ku gyara duk matakin da ya rikitar ko ya ɓace."
          ],
          steps: ["Ku zaɓi aikin da kuke maimaitawa kowane mako, kamar buɗe shago ko ɗaura kayan oda.", "Ku yi shi sau ɗaya yayin da kuke rubuta takaitattun bayanan kowane mataki.", "Ku nemi AI ya mayar da bayanan zuwa matakai masu lamba da jerin dubawa.", "Ku gwada shi ta bin sa daidai, ko ku sa mai taimako ya gwada.", "Ku gyara matakan da ba su da sarari ku ajiye na ƙarshe."],
          words: [["SOP", "standard operating procedure (tsarin aiki na dindindin): rubutattun matakan yin aiki iri ɗaya kowane lokaci."], ["Jerin dubawa (checklist)", "gajeren jeri da kuke yi wa alama don tabbatar da cewa babu abin da aka manta."]],
          slides: [
            { title: "Abin da SOP yake yi", bullets: ["Aiki iri ɗaya, hanya iri ɗaya, kowane lokaci", "Mai taimako zai iya yin sa ba tare da ya kira ku ba", "Ƙananan kurakurai lokacin da kuke cikin aiki"] },
            { title: "Ku yi shi da AI", bullets: ["Ku yi aikin sau ɗaya ku rubuta takaitattun bayanai", "Ku nemi AI matakai masu lamba da jerin dubawa"] },
            { title: "Ku gwada shi", bullets: ["Ku bi shi kalma da kalma", "Ko ku sa mai taimako ya gwada", "Ku gyara matakan da suka rikitar ko suka ɓace"] }
          ],
          tryIt: "Ku zaɓi aiki ɗaya na mako-mako, ku rubuta takaitattun bayanai yayin da kuke yin sa, ku sa AI ya mayar da su zuwa SOP mai matakai masu lamba da jerin dubawa. Ku gwada shi sau ɗaya ku gyara shi.",
          youCanNow: "mayar da aikin da ake maimaitawa zuwa rubutaccen tsarin aiki da aka gwada.",
          quickCheck: [
            { objective: "O4", q: "Me tsarin aiki na dindindin (SOP) yake yi?", options: ["Yana bin diddigin cinikinku", "Yana maye gurbin kalandarku", "Yana rubuta matakan aikin da ake maimaitawa don kowa ya yi shi iri ɗaya", "Yana amsa imel na abokan ciniki"], answer: 2, why: "SOP yana bar mai taimako ya yi aikin ba tare da ya kira ku ba." },
            { objective: "O4", q: "Mai taimakonku ya bi sabon SOP ɗinku kuma ya tsaya a mataki na 4. Me za ku yi?", options: ["Ku zargi mai taimakon", "Ku jefar da SOP ɗin", "Ku riƙa yin aikin da kanku har abada", "Ku gyara mataki na 4 ya zama a sarari ku sake gwadawa"], answer: 3, why: "Gwaji yana nuna inda tsarin aiki ke buƙatar gyara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Taƙaitawa da ɗan bincike cikin sauri",
          minutes: 4,
          goal: "Yi amfani da AI don taƙaita dogayen takardu da yin bincike mai sauri da aka tabbatar.",
          text: [
            "Masu kasuwanci suna samun dogayen takardu: sharuɗɗan masu kawo kaya, ƙa'idojin tallafi (grant), daftarin kwangilar haya, rahotanni. AI zai iya taƙaita su: \"Ka taƙaita wannan a maki 8. Ka jera duk wata rana, kuɗi ko abin da dole in yi.\" Ku fara cire bayanan sirri, kuma ku karanta sassan ainihin takardar da suke da muhimmanci, musamman duk abin da ya shafi kuɗi ko hakkin doka.",
            "AI kuma zai iya hanzarta bincike: kwatanta masu kawo kaya, bayanin sabuwar kalma, ko jera tambayoyin da za ku yi wa akanta. Ku nemi ya ba ku majiyoyi, sannan ku buɗe waɗannan majiyoyi da kanku.",
            "Don tambayoyin doka, haraji ko lasisi, ku yi amfani da AI don shirya tambayoyi masu kyau, sannan ku sami amsar daga shafin hukumar gwamnati ko ƙwararre."
          ],
          steps: ["Ku cire bayanan sirri daga takardar.", "Ku nemi gajeriyar taƙaitawa tare da ranaku, kuɗaɗe da hakkoki.", "Ku karanta sassan ainihin takardar game da kuɗi ko hakkin doka.", "Don bincike, ku nemi majiyoyi ku buɗe su da kanku."],
          words: [["Taƙaitawa (summary)", "gajeren siga da ke riƙe manyan batutuwa."], ["Sharuɗɗa (terms)", "ƙa'idoji da sharuɗɗan da ke cikin yarjejeniya."]],
          slides: [
            { title: "Ku taƙaita dogayen takardu", bullets: ["Ku fara cire bayanan sirri", "Ku nemi maki, ranaku, kuɗaɗe da hakkoki", "Ku karanta sassan kuɗi da doka da kanku"] },
            { title: "Bincike mai sauri", bullets: ["Kwatanta zaɓuɓɓuka, bayanin kalmomi", "Ku nemi majiyoyi", "Ku buɗe majiyoyin da kanku"] },
            { title: "Doka, haraji, lasisi", bullets: ["Ku yi amfani da AI don shirya tambayoyi", "Ku sami amsoshi daga hukuma ko ƙwararre"] }
          ],
          tryIt: "Ku ɗauki wani dogon takardar kasuwanci da kuke da shi (bayan cire bayanan sirri), ku nemi AI taƙaitawa mai maki 8 tare da ranaku, kuɗaɗe da hakkoki, sannan ku kwatanta ta da ainihin takardar.",
          youCanNow: "samun taƙaitawa mai sauri, da aka tabbatar, ta dogon takardar kasuwanci.",
          quickCheck: [
            { objective: "O5", q: "Me buƙatar taƙaitawa mai kyau ya kamata ta nema?", options: ["Manyan batutuwa tare da ranaku, kuɗaɗe da hakkoki", "Taken kawai", "Waƙa game da takardar", "Jimla mafi tsawo"], answer: 0, why: "Ranaku, kuɗaɗe da hakkoki su ne abin da mai kasuwanci zai yi aiki a kai." },
            { objective: "O5", q: "AI ya taƙaita kwangilar hayarku ya ce babu tarar jinkiri. Me za ku yi?", options: ["Ku amince da shi", "Ku duba sashen kuɗi na kwangilar da kanku", "Ku sa hannu a sabuwar kwangila", "Ku sake tambayar AI tambaya iri ɗaya"], answer: 1, why: "Kuna karanta sassan kuɗi da na doka da kanku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Auna lokacin da kuka tara",
          minutes: 5,
          goal: "Rubuta lokacinku kafin da bayan amfani da AI a kan aiki ɗaya don ganin ko yana taimakawa da gaske.",
          text: [
            "Ya kamata AI ya tara muku lokaci, ba wai kawai ya sa ku ji kuna aiki ba. Ku auna shi. Ku zaɓi aiki ɗaya, kamar amsa tambayoyin alƙawari ko rubuta saƙon mako-mako. Ku rubuta tsawon lokacin da yake ɗauka a tsohuwar hanya, sannan tsawon lokacin da yake ɗauka da AI, har da lokacin dubawa da gyarawa.",
            "Ku ninka: mintunan da aka tara a kowane lokaci, sau nawa a mako. Minti goma da aka tara a kan aikin da kuke yi sau 15 a mako minti 150 ne, wato sa'o'i biyu da rabi.",
            "Idan wani aiki bai yi sauri da AI ba, ko yana buƙatar gyara mai yawa har bai cancanta ba, ku daina amfani da AI don wannan aikin. Ku sa lokacin da aka tara a ayyukan da ke bunƙasa kasuwancinku."
          ],
          steps: ["Ku zaɓi aiki ɗaya da kuke yi akai-akai.", "Ku auna lokacinsa a tsohuwar hanya sau ɗaya.", "Ku auna lokacinsa da AI, har da dubawa da gyarawa.", "Ku ninka mintunan da aka tara da sau nawa kuke yin sa a mako.", "Ku ci gaba, ku canja, ko ku daina amfani da AI don wannan aikin."],
          words: [["Rubutun lokaci (time log)", "rikodi mai sauƙi na tsawon lokacin da ayyuka ke ɗauka."]],
          slides: [
            { title: "Ku auna, kada ku yi hasashe", bullets: ["Ku auna lokacin tsohuwar hanya", "Ku auna lokacin hanyar AI, har da dubawa", "Ku kwatanta"] },
            { title: "Ku yi lissafi", bullets: ["Mintunan da aka tara x sau nawa a mako", "Minti 10 x sau 15 = minti 150 a mako"] },
            { title: "Ku yanke shawara", bullets: ["Ya fi sauri? Ku ci gaba", "Ya fi jinkiri ko gyara ya yi yawa? Ku daina", "Ku sa lokacin da aka tara a bunƙasa kasuwanci"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina kayan dawo da lokacinku: makonku da AI ya taimaka aka tsara, samfuranku uku, SOP ɗinku, da rubutun lokaci na kafin da bayan na aiki ɗaya tare da mintunan da aka tara a mako.",
          youCanNow: "tabbatar da ko AI yana tara muku lokaci, da yanke shawarar inda za ku yi amfani da shi a kasuwancinku.",
          quickCheck: [
            { objective: "O6", q: "Me ya kamata lokacin \"hanyar AI\" ɗinku ya ƙunsa?", options: ["Lokacin da AI ya ɗauka yana rubutu kawai", "Babu komai; AI nan take yake", "Har da lokacin dubawa da gyara aikin AI", "Lokacin da kuka ɗauka kuna cin abincin rana"], answer: 2, why: "Dubawa da gyarawa suna cikin ainihin lokacin da aka kashe." },
            { objective: "O6", q: "Kuna tara minti 4 a kan aikin da kuke yi sau 10 a mako. Me za ku rubuta a rubutun lokacinku?", options: ["Minti 4 a mako", "Minti 10 a mako", "Minti 14 a mako", "Minti 40 a mako"], answer: 3, why: "Minti 4 sau 10 a mako minti 40 ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsare-tsaren da ke tara lokaci",
        questions: [
          { objective: "O4", q: "Mene ne SOP?", options: ["Rubutaccen tsarin aiki mai matakai na aikin da ake maimaitawa", "Wani nau'in takardar biyan kuɗi (invoice)", "Saƙo a kafofin sada zumunta", "Fom ɗin haraji"], answer: 0, why: "SOP yana bar a yi aiki iri ɗaya kowane lokaci." },
          { objective: "O4", q: "Ta yaya za ku san SOP ɗinku yana aiki?", options: ["Ku tambayi AI ko yana da kyau", "Ku buga shi da launi", "Ku tsawaita shi", "Ku bi shi kalma da kalma ko ku sa mai taimako ya gwada"], answer: 3, why: "Gwaji yana nuna matakan da suka ɓace ko suka rikitar." },
          { objective: "O5", q: "AI ya taƙaita kwangilar haya. Waɗanne sassa ne dole ku karanta da kanku har yanzu?", options: ["Babu ko ɗaya", "Sassan da suka shafi kuɗi da hakkin doka", "Taken kawai", "Lambobin shafuka"], answer: 1, why: "Taƙaitawa na iya tsallake ko ba da kuskuren muhimman bayanai." },
          { objective: "O6", q: "Kuna tara minti 5 kowane lokaci a kan aikin da kuke yi sau 20 a mako. Lokaci nawa ke nan?", options: ["Minti 100 a mako", "Minti 25 a mako", "Minti 5 a mako", "Minti 20 a mako"], answer: 0, why: "5 x 20 = minti 100." },
          { objective: "O6", q: "Amfani da AI a kan wani aiki yana ɗaukar lokaci mafi tsawo saboda gyare-gyare da yawa. Me ya kamata ku yi?", options: ["Ku yi amfani da manhajojin AI biyu lokaci ɗaya", "Ku ci gaba da amfani da shi duk da haka", "Ku daina amfani da AI don wannan aikin", "Ku daina duba aikin"], answer: 2, why: "Ku yi amfani da AI ne kawai inda yake tara lokaci da gaske." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Ƙara Yawan Aiki a Kasuwanci",
    questions: [
      { objective: "O1", q: "Mataki na farko na tsara mako da AI shi ne:", options: ["Sayen sabuwar manhaja", "Rubuta kowane aiki", "Goge kalandarku", "Tambayar abokin ciniki"], answer: 1, why: "AI zai iya rarraba abin da kuka jera kawai." },
      { objective: "O1", q: "Lokacin zaɓar muhimman ukunku, wane ne yake yanke tsarin ƙarshe?", options: ["Manhajar imel ɗinku", "AI", "Abokin hamayya", "Ku"], answer: 3, why: "AI yana ba da shawara; ku kuka san kasuwancinku." },
      { objective: "O1", q: "Lokaci a ware (time block) shi ne:", options: ["Wani nau'in imel", "Agogon da ya lalace", "Tarar jinkiri", "Wani lokaci da aka keɓe a kalandarku don irin aiki ɗaya"], answer: 3, why: "Lokuta a ware suna kare lokaci don muhimman ayyuka." },
      { objective: "O2", q: "Wane rukunin imel ne ya kamata ya zo farko?", options: ["Wasiƙun labarai (newsletters)", "A amsa yanzu: abokan ciniki, kuɗi, gaggawa", "Tsofaffin rasit", "Tallace-tallace"], answer: 1, why: "Imel na abokan ciniki da na kuɗi sun fi muhimmanci." },
      { objective: "O2", q: "Tacewar imel (filter):", options: ["Tana aika kuɗi", "Tana goge asusunku", "Tana matsar da saƙonni zuwa babban fayil kai tsaye", "Tana rubuta amsoshi"], answer: 2, why: "Tacewa tana rarraba imel ba tare da ku ba." },
      { objective: "O2", q: "Hanya mai aminci ta samun taimakon AI a kan imel na abokin ciniki ita ce:", options: ["Taƙaita tambayar da kalmominku", "Saka lambar katinsa", "Saka adireshin gidansa", "Tura kalmar sirrinsa"], answer: 0, why: "Ku hana bayanan sirri na abokan ciniki shiga manhajojin AI." },
      { objective: "O2", q: "Kafin ku aika amsar da AI ya rubuta, ya kamata ku:", options: ["Ƙara rangwame ba gaira ba dalili", "Aika ta ba tare da karantawa ba", "Karanta ta ku gyara ta", "Kwafa ta ga kowane abokin ciniki"], answer: 2, why: "Ku ne ke da alhakin abin da kuka aika." },
      { objective: "O3", q: "Samfura sun fi dacewa da:", options: ["Tambayoyin da abokan ciniki ke maimaitawa", "Rikicin shari'a na lokaci ɗaya", "Tura kuɗi ta banki", "Kalmomin sirri"], answer: 0, why: "Ku rubuta amsar sau ɗaya ku sake amfani da ita." },
      { objective: "O3", q: "Wuraren cikewa kamar [suna] da [farashi] a cikin samfuri su ne:", options: ["Kurakurai", "Wuraren da kuke cikewa kowane lokaci", "Kalmomin sirri", "Hanyoyin haɗi zuwa AI"], answer: 1, why: "Suna sa samfuri ɗaya ya yi aiki ga abokan ciniki da yawa." },
      { objective: "O3", q: "A ina za ku ajiye samfura kusa?", options: ["A cikin hirar AI tare da bayanan abokan ciniki", "A cikin kanku kawai", "A ƙaramar takarda a jikin ƙofa", "Amsoshin da aka ajiye a imel ko manhajar rubutu"], answer: 3, why: "Amsoshin da aka ajiye da manhajar rubutu suna sa su yi saurin amfani." },
      { objective: "O4", q: "SOP yana taimakawa domin:", options: ["Mai taimako zai iya yin aikin iri ɗaya ba tare da ya kira ku ba", "Yana tsawaita ayyuka", "Yana maye gurbin abokan ciniki", "Fom ɗin haraji ne"], answer: 0, why: "Rubutattun matakai suna sa a iya maimaita aiki." },
      { objective: "O4", q: "Hanya mafi sauri ta fara SOP ita ce:", options: ["Tsallake gwaji", "Hasashen matakan", "Kwafar littafin jagorar abokin hamayya", "Yin aikin sau ɗaya yayin rubuta takaitattun bayanai, sannan neman AI ya tsara su"], answer: 3, why: "Bayanai na gaske tare da tsarawar AI suna ba da matakai daidai." },
      { objective: "O4", q: "Jerin dubawa a ƙarshen SOP:", options: ["Yana maye gurbin matakan", "Yana ƙara kuɗi", "Yana taimakawa a tabbatar babu abin da aka manta", "Kwangilar doka ce"], answer: 2, why: "Yi wa abubuwa alama yana kama matakan da aka manta." },
      { objective: "O5", q: "Kafin ku nemi AI ya taƙaita kwangilar mai kawo kaya, ya kamata ku:", options: ["Ƙara bayanan shiga bankinku", "Cire bayanan sirri", "Sa hannu a kanta", "Tura ta ga abokan ciniki"], answer: 1, why: "Ku hana bayanan sirri shiga manhajojin AI." },
      { objective: "O5", q: "Buƙatar taƙaitawa mai kyau tana nema:", options: ["Siga mafi tsawo", "Taken kawai", "Barkwanci", "Manyan batutuwa tare da ranaku, kuɗaɗe da abubuwan da dole ku yi"], answer: 3, why: "Ranaku, kuɗaɗe da hakkoki su ne abin da kuke aiki a kai." },
      { objective: "O5", q: "Idan AI ya ba da majiyoyin bincike, ya kamata ku:", options: ["Kada ku taɓa dubawa", "Ku amince da hanyoyin haɗin ba tare da dubawa ba", "Ku buɗe su ku karanta da kanku", "Ku raba su a matsayin gaskiya nan take"], answer: 2, why: "AI yana iya jera majiyoyi marasa daidai ko ƙirƙirarru." },
      { objective: "O5", q: "Don tambayar lasisi, AI ya fi amfani wajen:", options: ["Shirya tambayoyi don hukumar gwamnati ko ƙwararre", "Ba da amsar doka ta ƙarshe", "Nema a madadinku", "Biyan kuɗin"], answer: 0, why: "Majiyoyin hukuma da ƙwararru ne ke ba da amsar ƙarshe." },
      { objective: "O6", q: "Lokacin auna hanyar AI, ku haɗa da:", options: ["Daƙiƙun da AI ke ɗauka don amsawa kawai", "Lokacin dubawa da gyara aikin AI", "Babu komai", "Hutun cin abincin rana"], answer: 1, why: "Dubawa yana cikin ainihin lokacin da aka kashe." },
      { objective: "O6", q: "Minti goma da aka tara a kan aikin da kuke yi sau 15 a mako daidai yake da:", options: ["Minti 10", "Minti 25", "Minti 150", "Minti 1,500"], answer: 2, why: "10 x 15 = minti 150." },
      { objective: "O6", q: "Ina ya kamata lokacin da aka tara ya tafi?", options: ["Cikin ayyukan da ke bunƙasa kasuwancinku", "Cikin ƙarin imel", "Cikin gwada kowace sabuwar manhaja", "Babu inda"], answer: 0, why: "Manufar tara lokaci ita ce amfani da shi wajen bunƙasa." }
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
      10,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tsarin mako",
        objective: "O1",
        notYet: "Ba a zaɓi muhimman ayyuka ba, ko tsarin ba ya cikin kalanda.",
        meets: "Mai kasuwancin ya zaɓi muhimman ayyuka uku, kuma lokuta a ware suna cikin kalanda.",
        exceeds: "Muhimman ukun suna da alaƙa a sarari da kuɗi ko abokan ciniki, kuma an fara ware ayyukan dindindin."
      },
      {
        name: "Samfuran amsa",
        objective: "O3",
        notYet: "Samfura ƙasa da uku, ko bayanan ba daidai ba ne.",
        meets: "Samfura uku masu wuraren cikewa da bayanan da aka duba, an ajiye su a inda ake samun su da sauƙi.",
        exceeds: "Ana amfani da samfuran tuni, kuma an sabunta su sau ɗaya."
      },
      {
        name: "Tsarin aiki",
        objective: "O4",
        notYet: "Akwai matakan da suka ɓace, ko ba a gwada SOP ɗin ba.",
        meets: "Matakai masu lamba da jerin dubawa, an gwada sau ɗaya kuma an gyara.",
        exceeds: "Mai taimako ya bi shi ba tare da ya yi tambaya ba."
      },
      {
        name: "Rubutun lokaci",
        objective: "O6",
        notYet: "Babu lokutan kafin da bayan, ko an bar lokacin dubawa.",
        meets: "Lokutan kafin da bayan na aiki ɗaya, har da dubawa, tare da mintunan da aka tara a mako.",
        exceeds: "Ya kuma faɗi inda lokacin da aka tara zai tafi."
      },
      {
        name: "Bayanan sirri",
        objective: "O2",
        notYet: "Adireshin abokan ciniki, lambobin kati ko bayanan kwangila na sirri sun shiga AI.",
        meets: "An taƙaita tambayoyi da kalmomin mai kasuwancin; ba a raba bayanan sirri ba.",
        exceeds: "An kuma cire bayanan sirri daga takardu kafin taƙaitawa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu kasuwanci da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Mintunan da aka tara a mako, kamar yadda aka faɗa a binciken biyo baya na kwanaki 30",
      "Masu kasuwanci da suka ba mai taimako ko ɗan iyali rubutaccen tsarin aiki cikin kwanaki 30",
      "Masu koyo da suka fara wani kwas na Koach Learn na masu kasuwanci cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai imel, kalanda da mataimakin AI kyauta",
      "Manhajar rubutu ko takarda don samfura, tsarin aiki da rubutun lokaci",
      "Agogon awo (agogon waya ya isa)",
      "Kusan minti 60 don darussa da gwaje-gwaje, da ayyukan da aka shimfiɗa a cikin makon aiki na gaske"
    ],
    facilitatorNotes: [
      "Ku gudanar da kwas ɗin cikin mako ɗaya don masu kasuwanci su rubuta ainihin lokutan kafin da bayan.",
      "Ku nuna yadda ake taƙaita imel na abokin ciniki da kalmominku maimakon saka shi gaba ɗaya.",
      "Ku haɗa masu kasuwanci biyu-biyu don su musanya su gwada tsarin aikin juna.",
      "Ku tunatar da masu kasuwanci cewa tambayoyin doka, lasisi da kuɗi suna zuwa ga hukumar gwamnati ko ƙwararre.",
      "Ku ba da maki ga kayan dawo da lokaci da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
