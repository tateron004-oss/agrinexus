"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-college-or-trade.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-college-or-trade-ha",
  lang: "ha",
  translationOf: "youth-college-or-trade",
  category: "Youth",
  name: "Zaɓin Kwaleji, Sana'a ko Aiki Bayan Makaranta",
  skills: "Sanin abin da kuke so da abin da kuke buƙata, Kwatanta hanyoyin kwaleji, Kwatanta sana'o'i, koyon sana'a (apprenticeship), aikin soja da aiki, Neman tallafin karatu, Guje wa tarkon bashi da zamba, Yin tsarin shekaru biyu",
  outcome: "kwatanta kwaleji, sana'a, aikin soja da aiki gefe da gefe, gano yadda za ku biya zaɓinku ba tare da faɗawa tarkon bashi ko zamba ba, da rubuta tsarin shekaru biyu tare da hanyar madadi.",
  about: [
    "Bayan kammala sakandare (high school), babu hanya ɗaya kaɗai da ta dace. Wasu suna zuwa kwaleji na shekaru huɗu, wasu suna farawa a kwalejin al'umma (community college), wasu suna koyon sana'a ta hanyar apprenticeship (koyon sana'a ana biyan ku), wasu suna shiga aikin soja, wasu kuma suna fara aiki kai tsaye suna ci gaba da koyo a wurin aiki. Mutane da yawa suna haɗa waɗannan a hankali.",
    "A wannan kwas ɗin za ku duba abin da kuke so da abin da kuke buƙata, ku kwatanta manyan hanyoyin da tambayoyi iri ɗaya, ku koyi yadda FAFSA da sauran tallafin karatu suke aiki, ku gane tarkon bashi da zamba, sannan ku rubuta tsarinku na shekaru biyu tare da hanyar madadi.",
    "Dokokin kuɗi, ranaku da shirye-shirye suna canjawa kowace shekara. Kowane darasi yana nuna muku inda za ku duba sabbin bayanai, kuma ku tattauna tsarinku da mai ba da shawara a makaranta (counselor), iyaye ko wani babba da kuka amince da shi.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin da za ku yi nan take. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta tsarin shekaru biyu a shafi ɗaya: babbar hanyarku da hanyar madadi, kwatanta aƙalla hanyoyi biyu da tambayoyi biyar iri ɗaya (kuɗi, lokaci, biya yayin koyo, ayyukan da ake iya samu, abin da ake buƙata don shiga), yadda za ku biya, abin da za ku yi kowane wata shida, da mutanen da za su taimake ku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ɗaliban sakandare da waɗanda suka gama kwanan nan a Amurka da ke yanke shawarar abin da za su yi bayan makaranta, da iyaye, masu ba da shawara da masu jagoranci da ke taimaka musu.",
    startingPoint: "Sun san wasu abubuwan da suke so, kuma sun ji labarin kwaleji, sana'a ko aikin soja daga abokai da iyali. Kaɗan ne suka kwatanta hanyoyi da tambayoyi iri ɗaya, suka duba ainihin kuɗi bayan tallafi (net price), suka cike FAFSA ko suka koyi gane zambar tallafi.",
    gap: "Zaɓar hanya bisa jita-jita yana iya kawo bashi don shirin da bai dace ba, wuce ranar ƙarshe ta tallafi, ko rasa kuɗi ga 'yan zamba. Kwatanta zaɓuɓɓuka da tambayoyi iri ɗaya, fahimtar tallafin karatu, da rubuta tsarin shekaru biyu tare da madadi suna taimaka wa matasa su fara hanyar da ta dace da su kuma za su iya biya.",
    constraints: [
      "Dokokin kuɗi, ranakun tallafi da shirye-shirye suna canjawa kowace shekara; masu koyo suna dubawa a studentaid.gov, apprenticeship.gov da shafukan makarantu na hukuma",
      "Babu shawarar kuɗi: masu koyo suna tattauna tsare-tsare da mai ba da shawara, iyaye ko babba amintacce",
      "Sirri da zamba: kada a taɓa raba FSA ID, lambobin banki ko kati, kuma kada a taɓa biyan kuɗi don cike FAFSA",
      "Na'urori: waya ko kwamfutar makaranta ko ta ɗakin karatu mai intanet",
      "Gajerun darussa da kalmomi masu sauƙi; da yawa daga cikin masu koyo su ne na farko a iyalinsu da ke yin waɗannan zaɓuɓɓuka"
    ],
    prerequisites: "Babu. Kwas ɗin \"AI da Binciken Sana'o'i\" kwas na farko ne mai amfani."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Kafin ku kwatanta makarantu ko ayyuka", action: "jera abubuwan da kuke so, ƙwarewarku, yadda kuke koyo da buƙatunku na kuɗi, da zaɓar hanyoyin da suka fi dacewa zuwa yanzu", standard: "ta hanyar zagaye biyu ko uku daga cikin manyan hanyoyi biyar" },
    { id: "O2", condition: "Ta amfani da shafukan makarantu da na'urorin lissafin net price", action: "kwatanta kwalejin al'umma da kwaleji na shekaru huɗu da tambayoyi biyar iri ɗaya", standard: "an amsa kowace tambaya ko an yi mata alamar a tambaya" },
    { id: "O3", condition: "Ta amfani da apprenticeship.gov da majiyoyin hukuma", action: "kwatanta apprenticeship, aikin soja ko aiki mai horo da tambayoyi biyar iri ɗaya", standard: "kuna tambaya game da yawan masu kammalawa, samun aiki da amincewar hukuma (accreditation) kafin ku sa hannu a komai" },
    { id: "O4", condition: "Ta amfani da studentaid.gov", action: "bayyana nau'o'in tallafin karatu huɗu da tsara lokacin da za ku cike FAFSA da wanda zai taimake ku", standard: "an rubuta ranar buɗewa ta wannan shekara da ranakun ƙarshe, ba tare da biyan wani kuɗi ba" },
    { id: "O5", condition: "Idan aka ba ku tayin tallafi da tayin tallafin karatu (scholarship)", action: "raba kowane tayi zuwa kuɗin kyauta, kuɗin da ake aiki a samu da bashi, lissafa abin da ya rage a biya, da gane alamun zamba", standard: "kuna samun adadin daidai kuma kuna faɗin inda ake kai rahoton zamba" },
    { id: "O6", condition: "Ta amfani da kwatancenku da tsarin tallafinku", action: "rubuta tsarin shekaru biyu mai babbar hanya, madadi, matakan wata shida, yadda za ku biya da wanda zai taimaka", standard: "da dukkan sassa a ciki da ranar da za a sake duba shi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kwatanta hanyoyinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ku san kanku kafin ku zaɓa",
          minutes: 5,
          goal: "Rubuta abubuwan da kuke so, ƙwarewarku, yadda kuke koyo da buƙatunku na kuɗi don ku iya auna kowace hanya.",
          text: [
            "Kafin ku kwatanta makarantu ko ayyuka, ku duba kanku. Hanya mafi kyau ita ce wadda ta dace da abin da kuke jin daɗinsa, abin da kuka iya, yadda kuke son koyo, da abin da kuke buƙata a yanzu.",
            "Ku tambayi kanku: Waɗanne darussa ko ayyuka ne ke sa lokaci ya wuce da sauri? Na fi koyo ta karatu da rubutu, ko ta yin abubuwa da hannuna? Ina buƙatar samun kuɗi nan ba da daɗewa ba, don taimaka wa iyalina ko biyan bukatuna? Ina son zama kusa da gida ko in ƙaura?",
            "Akwai manyan hanyoyi biyar: kwaleji na shekaru huɗu, kwalejin al'umma, makarantar sana'a ko apprenticeship, aikin soja, da fara aiki. Babu wadda ta fi kyau ga kowa. Hanyar da ta yi wa aboki kyau ba lallai ta dace da ku ba.",
            "Mataimakin AI zai iya taimaka muku tunanin sana'o'in da suka dace da amsoshinku. Ku ɗauki ra'ayoyinsa a matsayin jerin farko, sannan ku tabbatar da ainihin bayanai da mai ba da shawara da shafukan hukuma."
          ],
          steps: ["Ku rubuta abubuwa uku da kuke jin daɗinsu da abubuwa uku da kuka iya.", "Ku rubuta yadda kuka fi koyo: karatu, saurare ko aikatawa.", "Ku rubuta buƙatunku na kuɗi: kuna buƙatar samun kuɗi nan ba da daɗewa ba?", "Ku rubuta inda kuke son zama a shekaru biyu masu zuwa.", "Ku jera hanyoyi biyar ku zagaye biyu ko uku da suka fi dacewa zuwa yanzu."],
          words: [["Abin da ake so (interest)", "abin da kuke jin daɗin yi ko koyo game da shi."], ["Ƙwarewa (strength)", "abin da kuke yi da kyau."], ["Hanya (path)", "hanyar da kuke bi bayan makaranta zuwa sana'a."]],
          slides: [
            { title: "Ku fara da kanku", bullets: ["Abin da kuke jin daɗinsa", "Abin da kuka iya", "Yadda kuke koyo da abin da kuke buƙata"] },
            { title: "Tambayoyin da za ku yi wa kanku", bullets: ["Me ke sa lokaci ya wuce da sauri?", "Aiki da hannu ko karatu da rubutu?", "Ina buƙatar samun kuɗi nan ba da daɗewa ba?"] },
            { title: "Manyan hanyoyi biyar", bullets: ["Kwaleji na shekaru huɗu ko kwalejin al'umma", "Makarantar sana'a ko apprenticeship", "Aikin soja ko fara aiki"] },
            { title: "Amfani da AI don tunani", bullets: ["Ku nemi sana'o'in da suka dace da amsoshinku", "Ku ɗauke shi a matsayin jerin farko", "Ku tabbatar da bayanai da mai ba da shawara"] }
          ],
          tryIt: "Ku amsa tambayoyi huɗu na wannan darasi a takarda. Sannan ku tambayi mataimakin AI: Ga abubuwan da nake so da ƙwarewata. Ka ba ni shawarar sana'o'i biyar da horon da kowace take buƙata. Ku zagaye hanyoyi biyu ko uku da suka fi dacewa da ku.",
          youCanNow: "bayyana abubuwan da kuke so, ƙwarewarku, yadda kuke koyo da buƙatunku na kuɗi, da zaɓar hanyoyin da suka cancanci a kwatanta su.",
          quickCheck: [
            { objective: "O1", q: "Mene ne manyan hanyoyi biyar bayan sakandare a wannan kwas?", options: ["Kwaleji da aiki kawai", "Kwaleji, hutun shekara, tafiya, wasanni da waƙa", "Kwasa-kwasan intanet kawai", "Kwaleji na shekaru huɗu, kwalejin al'umma, makarantar sana'a ko apprenticeship, aikin soja, da aiki"], answer: 3, why: "Kwas ɗin yana kwatanta waɗannan hanyoyi biyar, kuma mutane da yawa suna haɗa su a hankali." },
            { objective: "O1", q: "Kuna buƙatar samun kuɗi nan ba da daɗewa ba don taimaka wa iyalinku. Ta yaya hakan ke shafar zaɓinku?", options: ["Ba shi da muhimmanci", "Ku duba sosai hanyoyin da ake samun kuɗi yayin koyo, kamar apprenticeship ko aiki mai horo", "Kwaleji na shekaru huɗu ne kaɗai zai yiwu", "Ku jira wasu shekaru kafin ku yanke shawara"], answer: 1, why: "Buƙatunku na kuɗi suna cikin abin da ke sa hanya ta dace da ku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kwalejin al'umma da kwaleji na shekaru huɗu",
          minutes: 5,
          goal: "Kwatanta kwalejin al'umma da kwaleji na shekaru huɗu da tambayoyi biyar iri ɗaya.",
          text: [
            "Kwalejin al'umma (community college) kwaleji ne na gwamnati na shekaru biyu kusa da gida. Yana ba da satifiket (sau da yawa shekara ɗaya ko ƙasa da haka), digirin associate (kusan shekaru biyu), da darussan da za ku iya kai su kwaleji na shekaru huɗu. Yawanci kuɗinsa ya fi sauƙi sosai, kuma kuna iya zama a gida.",
            "Kwaleji na shekaru huɗu ko jami'a yana ba da digirin bachelor. Wasu sana'o'i, kamar koyarwa, aikin jinya mai digirin bachelor, injiniyanci da lissafin kuɗi (accounting), yawanci suna buƙatar sa. Kuɗi ya bambanta sosai tsakanin makarantun gwamnati da na masu zaman kansu, da tsakanin zama a gida da zama a ɗakin kwanan ɗalibai (dorm).",
            "Ku yi amfani da tambayoyi biyar iri ɗaya ga kowane zaɓi: Nawa ne kuɗin gaba ɗaya, bayan tallafi? Zai ɗauki lokaci nawa? Zan iya samun kuɗi yayin koyo? Waɗanne ayyuka waɗanda suka gama suke samu, kuma nawa suke samu? Me nake buƙata don shiga?",
            "Hanya mai hikima ga ɗalibai da yawa ita ce farawa a kwalejin al'umma sannan a koma wani kwaleji (transfer). Ku tambayi kwalejin al'umma waɗanne makarantu na shekaru huɗu ne ke karɓar darussansa (credits) kafin ku yi rajistar darussa."
          ],
          steps: ["Ku zaɓi kwalejin al'umma ɗaya da kwaleji na shekaru huɗu ɗaya don kwatantawa.", "Ku nemo jimillar kuɗin kowace makaranta a shekara da na'urar lissafin net price ɗinta.", "Ku rubuta lokacin kammalawa, ayyukan da waɗanda suka gama suke samu da abin da ake buƙata don shiga.", "Ku tambayi mai ba da shawara game da yarjejeniyoyin transfer.", "Ku sa amsoshin gefe da gefe a cikin tebur."],
          words: [["Satifiket (certificate)", "gajeren shiri da ke horar da ku don wani takamaiman aiki."], ["Digirin associate", "digiri da yawanci yake ɗaukar kusan shekaru biyu."], ["Digirin bachelor", "digiri da yawanci yake ɗaukar kusan shekaru huɗu."], ["Transfer", "kai darussan kwalejinku (credits) zuwa wata makaranta."], ["Net price", "kuɗin kwaleji bayan an cire tallafi (grant) da tallafin karatu (scholarship)."]],
          slides: [
            { title: "Kwalejin al'umma", bullets: ["Kusa da gida, kuɗi mai sauƙi", "Satifiket da digirin associate", "Darussan da za a iya kai wani wuri (transfer)"] },
            { title: "Kwaleji na shekaru huɗu", bullets: ["Digirin bachelor", "Ana buƙatar sa don wasu sana'o'i", "Kuɗi ya bambanta sosai tsakanin makarantu"] },
            { title: "Tambayoyi biyar ga kowane zaɓi", bullets: ["Jimillar kuɗi bayan tallafi? Lokaci nawa?", "Samun kuɗi yayin koyo?", "Ayyuka da albashi bayan gamawa? Me ake buƙata don shiga?"] },
            { title: "Ku fara kusa, sannan ku koma", bullets: ["Yana rage kuɗi ga ɗalibai da yawa", "Ku fara duba waɗanne makarantu ke karɓar darussan"] }
          ],
          tryIt: "Ku yi tebur mai tambayoyi biyar a gefe, da makarantu biyu a sama: kwalejin al'umma ɗaya da kwaleji na shekaru huɗu ɗaya. Ku cike abin da za ku iya samu a shafukansu, kuma ku yi alama a kan abin da har yanzu za ku tambaya.",
          youCanNow: "kwatanta kwalejin al'umma da kwaleji na shekaru huɗu da tambayoyi biyar iri ɗaya, da gane hanyar farawa sannan a koma wani kwaleji.",
          quickCheck: [
            { objective: "O2", q: "Me na'urar lissafin net price ke nunawa?", options: ["Kimanin kuɗin makaranta bayan tallafi da tallafin karatu", "Sakamakon wasan ƙwallon makarantar", "Makin jarabawarku", "Yawan ɗaliban da ke zama a dorm"], answer: 0, why: "Net price shi ne kuɗin kwaleji bayan tallafi da tallafin karatu." },
            { objective: "O2", q: "Kun kwatanta kwaleji biyu amma kun duba farashin da aka rubuta kawai. Me kuka rasa?", options: ["Babu komai; farashi ne kawai abin da ke da muhimmanci", "Launukan makarantar", "Sauran tambayoyin: lokaci, samun kuɗi yayin koyo, ayyuka da albashi, da abin da ake buƙata don shiga", "Yawan gine-gine"], answer: 2, why: "Ku yi amfani da tambayoyi biyar iri ɗaya ga kowane zaɓi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sana'o'i, apprenticeship, aikin soja da aiki",
          minutes: 6,
          goal: "Kwatanta apprenticeship, aikin soja da aiki mai horo da tambayoyi biyar iri ɗaya.",
          text: [
            "Registered Apprenticeship (koyon sana'a da aka yi wa rajista) aiki ne da ake biyan ku yayin da kuke koyon sana'a ko aiki na ƙwarewa daga ƙwararrun ma'aikata, tare da darussa a gefe. Sana'o'i sun haɗa da wutar lantarki (electrician), aikin famfo (plumber), kafinta da walda, kuma akwai apprenticeship a fannin kiwon lafiya, IT (fasahar kwamfuta) da sauransu. Ku nemi a Apprenticeship Job Finder da ke apprenticeship.gov.",
            "Makarantun sana'a suna koyar da ƙwarewa cikin watanni maimakon shekaru, amma yawanci kuna biya. Kafin ku sa hannu, ku tambayi ɗalibai nawa ne ke kammalawa, nawa ne ke samun aiki a fannin, da ko makarantar tana da amincewar hukuma (accredited). Ku yi hankali da masu tallace-tallace da ke matsa muku.",
            "Aikin soja yana ba da horon aiki, albashi da tallafin ilimi, a madadin alƙawarin yin aiki na shekaru da yawa. Kuna yin jarabawa mai suna ASVAB, wadda ke taimakawa wajen tantance ayyukan da kuka cancanta. Ku yi magana da masu ɗaukar sojoji (recruiters) daga reshe fiye da ɗaya, ku karanta komai kafin ku sa hannu, kuma ku duba shafin hukuma na reshen.",
            "Fara aiki kai tsaye ma hanya ce ta gaske. Ku nemi masu ɗaukar aiki da ke horar da ku, ke ƙara wa ma'aikatansu matsayi, ko ke taimakawa wajen biyan darussa daga baya. Ku yi amfani da tambayoyi biyar iri ɗaya don kwatanta waɗannan hanyoyi da kwaleji."
          ],
          steps: ["Ku nemi shirye-shirye kusa da ku a Apprenticeship Job Finder na apprenticeship.gov.", "Ga kowace makarantar sana'a, ku tambayi yawan masu kammalawa, samun aiki da amincewar hukuma.", "Idan kuna tunanin aikin soja, ku yi magana da reshe fiye da ɗaya ku karanta kafin ku sa hannu.", "Ga ayyuka, ku nemi horo, ƙarin matsayi da taimakon kuɗin makaranta.", "Ku amsa tambayoyi biyar ga kowane zaɓi."],
          words: [["Registered Apprenticeship", "aiki mai albashi tare da tsararren horo da ke kai wa ga takardar shaida da aka amince da ita."], ["Sana'a (trade)", "aiki na ƙwarewa da ake koya ta horo, kamar wutar lantarki ko walda."], ["Accredited (mai amincewar hukuma)", "wata ƙungiya ta hukuma mai duba makarantu ta duba ta kuma ta amince da ita."], ["ASVAB", "jarabawar da ake amfani da ita don ganin ayyukan soja da kuka cancanta."]],
          slides: [
            { title: "Apprenticeship", bullets: ["Aiki mai albashi yayin da kuke koyon sana'a", "Wutar lantarki, famfo, kiwon lafiya, IT da sauransu", "Ku nemi a apprenticeship.gov"] },
            { title: "Makarantun sana'a", bullets: ["Watanni, ba shekaru ba, amma yawanci kuna biya", "Ku tambaya: yawan masu kammalawa, samun aiki, amincewar hukuma", "Ku guji masu tallace-tallace da ke matsa muku"] },
            { title: "Aikin soja", bullets: ["Horo, albashi da tallafin ilimi", "Shekaru da yawa na aiki; jarabawar ASVAB", "Ku yi magana da reshe fiye da ɗaya; ku karanta kafin sa hannu"] },
            { title: "Fara aiki", bullets: ["Ku nemi horo da ƙarin matsayi", "Wasu masu ɗaukar aiki suna taimakawa wajen biyan darussa daga baya"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (neman shirye-shiryen koyon sana'a)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov", url: "https://www.apprenticeship.gov/" }
          ],
          tryIt: "Ku nemo apprenticeship ɗaya kusa da ku a apprenticeship.gov da aiki ɗaya da ke ba da horo. Ku ƙara su a teburinku na darasin da ya gabata kuma ku amsa tambayoyi biyar ga kowanne.",
          youCanNow: "kwatanta apprenticeship, makarantun sana'a, aikin soja da aiki da tambayoyi biyar iri ɗaya da kuka yi amfani da su don kwaleji.",
          quickCheck: [
            { objective: "O3", q: "Me ya bambanta Registered Apprenticeship da makarantar sana'a?", options: ["Ana biyan ku yayin da kuke koyo a wurin aiki", "Ba shi da darussa", "Kuɗinsa ya fi yawa koyaushe", "Yana koyar da kwamfuta kawai"], answer: 0, why: "A apprenticeship kuna samun albashi yayin da kuke koyo daga ƙwararrun ma'aikata." },
            { objective: "O3", q: "Mai ɗaukar sojoji yana son ku sa hannu yau. Me za ku yi?", options: ["Ku sa hannu don kada ku rasa gurbin", "Ku nemi aboki ya sa hannu a madadinku", "Ku tsallake karanta kwangilar", "Ku yi magana da reshe fiye da ɗaya, ku duba shafin hukuma ku karanta kafin sa hannu"], answer: 3, why: "Ku karanta komai kuma ku kwatanta rassa kafin ku ɗauki alƙawarin shekaru da yawa na aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kwatanta hanyoyinku",
        questions: [
          { objective: "O1", q: "Me ya kamata ku fara dubawa kafin ku kwatanta makarantu ko ayyuka?", options: ["Abin da abokanku suke yi", "Abubuwan da kuke so, ƙwarewarku, yadda kuke koyo da buƙatunku", "Makarantar da ke da ƙungiyar wasa mafi kyau", "Zaɓi mafi arha kawai"], answer: 1, why: "Hanya mafi kyau ita ce wadda ta dace da ku, don haka ku fara da sanin kanku." },
          { objective: "O2", q: "Wanne ne yawanci gaskiya game da kwalejin al'umma?", options: ["Kuɗinsa ya fi na jami'a mai zaman kanta yawa sosai", "Yana ba da digiri na shekaru huɗu kawai", "Ba za ku taɓa iya transfer ba", "Yana kusa da gida kuma yawanci kuɗinsa ya fi sauƙi"], answer: 3, why: "Kwalejojin al'umma suna kusa kuma yawanci kuɗinsu ya fi sauƙi sosai." },
          { objective: "O2", q: "Kuna son farawa a kwalejin al'umma sannan ku koma wani daga baya. Me ya kamata ku fara dubawa?", options: ["Waɗanne makarantu na shekaru huɗu ne ke karɓar darussansa", "Abincin da ake sayarwa a makarantar", "Girman wurin ajiye motoci", "Babu komai; ana karɓar dukkan darussa koyaushe"], answer: 0, why: "Duba yarjejeniyoyin transfer da farko yana hana darussanku su lalace a banza." },
          { objective: "O3", q: "Mene ne Registered Apprenticeship?", options: ["Horon aiki ba tare da albashi ba", "Aiki mai albashi inda kuke koyon sana'a ta ƙwarewa tare da horo", "Wasan bidiyo", "Digiri na shekaru huɗu"], answer: 1, why: "Ana biyan masu koyon sana'a yayin da suke koyo daga ƙwararrun ma'aikata." },
          { objective: "O3", q: "Mai tallata makarantar sana'a ya ce dole ku sa hannu yau. Me za ku yi?", options: ["Ku sa hannu nan take", "Ku ba shi katin bankinku", "Ku tambayi yawan masu kammalawa, samun aiki da amincewar hukuma, ku ɗauki lokaci ku yanke shawara", "Ku karɓi bashi gwargwadon iko"], answer: 2, why: "Matsa muku ku sa hannu yau alamar gargaɗi ce; makarantu nagari suna ba ku bayanai da lokaci." }
        ]
      }
    },
    {
      name: "Babi na 2: Biyan kuɗi da yin tsari",
      lessons: [
        {
          objectives: ["O4"],
          title: "FAFSA da tallafin karatu",
          minutes: 6,
          goal: "Bayyana nau'o'in tallafin karatu da shirya cike FAFSA kyauta a studentaid.gov.",
          text: [
            "Tallafin karatu (financial aid) kuɗi ne da ke taimakawa wajen biyan kwaleji, kwalejin al'umma da makarantun sana'a da yawa. Yana zuwa a nau'i huɗu: tallafi (grant) da tallafin karatu (scholarship) (ba ku mayar da su), work-study (aikin ɗan lokaci), da bashi (loan) (kuna mayar da shi tare da ruwa ko riba, wato interest).",
            "FAFSA (Free Application for Federal Student Aid, wato takardar neman tallafin karatu na gwamnatin tarayya kyauta) ita ce takardar da ke buɗe ƙofar tallafin gwamnatin tarayya, kuma jihohi da kwalejoji da yawa suna amfani da ita don nasu tallafin. Kyauta ce kuma kuna cike ta a studentaid.gov. Za ku buƙaci asusun StudentAid.gov, haka ma iyaye ko wani mai bayar da bayani da bayanansa ke cikin takardar zai iya buƙatar asusu.",
            "Ana buɗe sabuwar FAFSA kowace shekara don shekarar karatu mai zuwa. Ku duba studentaid.gov don ranar da za a buɗe ta, kuma ku duba ranakun ƙarshe na jiharku da na kwalejojinku; wasu tallafi suna ƙarewa da wuri, don haka ku cike da wuri gwargwadon iko.",
            "Kada ku taɓa biyan kowa don ya cike muku FAFSA, kuma kada ku taɓa raba sunan mai amfani da kalmar sirrinku na StudentAid.gov (FSA ID ɗinku) da kowa, har da mai ba da shawara da ake biya (consultant). Mai ba da shawara a makarantarku ko ofishin tallafin kuɗi na kwaleji za su iya taimaka muku kyauta."
          ],
          steps: ["Ku je studentaid.gov (ku duba adireshin a hankali).", "Ku buɗe asusunku na StudentAid.gov; iyaye ko mai bayar da bayani ma zai iya buƙatar ɗaya.", "Ku tattara abin da takardar ke nema, kamar bayanan haraji.", "Ku nemo ranar buɗe FAFSA ta wannan shekara da ranakun ƙarshe na jiharku da kwalejinku.", "Ku cike ta da wuri, ko da taimakon mai ba da shawara kyauta; kada ku taɓa biyan kamfani ya yi muku."],
          words: [["FAFSA", "Free Application for Federal Student Aid: takardar neman tallafin karatu na gwamnatin tarayya kyauta."], ["Tallafi (grant)", "kuɗin makaranta da ba ku mayar da su."], ["Work-study", "aikin ɗan lokaci da ke taimakawa wajen biyan makaranta."], ["Bashi (loan)", "kuɗin aro da dole ku mayar, yawanci tare da ruwa (interest)."], ["FSA ID", "sunan mai amfani da kalmar sirrinku na StudentAid.gov; kada ku taɓa raba shi."]],
          slides: [
            { title: "Nau'o'in tallafi huɗu", bullets: ["Grant da scholarship: ba a mayar da su", "Work-study: aikin ɗan lokaci", "Bashi: kuna mayar da shi tare da ruwa"] },
            { title: "FAFSA", bullets: ["Kyauta ce, a studentaid.gov", "Tana buɗe ƙofar tallafin tarayya, na jiha da na kwaleji", "Iyaye ko mai bayar da bayani ma zai iya buƙatar asusu"] },
            { title: "Lokaci", bullets: ["Ana buɗe sabuwar FAFSA kowace shekara", "Ku duba ranaku a studentaid.gov", "Ku cike da wuri: wasu tallafi suna ƙarewa"] },
            { title: "Ku kasance lafiya", bullets: ["Kada ku taɓa biyan kowa ya cike muku", "Kada ku taɓa raba FSA ID ɗinku", "Masu ba da shawara suna taimakawa kyauta"] }
          ],
          sources: [
            { name: "Federal Student Aid: Apply for aid with the FAFSA (neman tallafi da FAFSA)", url: "https://studentaid.gov/h/apply-for-aid/fafsa" },
            { name: "FTC: How to avoid scholarship and financial aid scams (yadda ake guje wa zambar tallafin karatu)", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Ku je studentaid.gov ku nemo ranar buɗe FAFSA ta wannan shekara. Sannan ku nemo ranar ƙarshe ta tallafin kuɗi ga makaranta ɗaya da jiharku. Ku rubuta ranakun biyu, kuma ku rubuta wanda zai taimake ku cike takardar.",
          youCanNow: "bayyana grant, scholarship, work-study da bashi, da shirya cike FAFSA kyauta lafiya kuma a kan lokaci.",
          quickCheck: [
            { objective: "O4", q: "Waɗanne nau'o'in tallafi ne ba ku mayar da su?", options: ["Bashi", "Grant da scholarship", "Katin bashi (credit card)", "Bashi daga kamfani mai zaman kansa"], answer: 1, why: "Grant da scholarship kuɗin kyauta ne; ana mayar da bashi tare da ruwa." },
            { objective: "O4", q: "Wani shafi mai ƙarewa da .com yana tayin cike muku FAFSA a kan kuɗi. Me za ku yi?", options: ["Ku biya; yana rage lokaci", "Ku ba su FSA ID ɗinku", "Ku cike kyauta a studentaid.gov ko da taimakon mai ba da shawara", "Ku tsallake FAFSA"], answer: 2, why: "FAFSA kyauta ce a studentaid.gov; kada ku taɓa biya don cike ta ko raba FSA ID ɗinku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Guje wa tarkon bashi da zamba",
          minutes: 5,
          goal: "Kwatanta tayin tallafi da gane alamun gargaɗin tarkon bashi da zamba.",
          text: [
            "Bashi ba koyaushe mugu ba ne, amma idan ya yi yawa zai iya bin ku har shekaru. Ku karɓi bashi gwargwadon abin da kuke buƙata kawai bayan grant da scholarship. Consumer Financial Protection Bureau (hukumar kare masu amfani da kuɗi ta Amurka) ta ce ku yi amfani da bashin karatu na gwamnatin tarayya kafin na kamfanoni masu zaman kansu, domin bashin tarayya yawanci yana da ƙarin kariya.",
            "Idan kun sami tayin tallafi, ku duba kowane layi: grant ne, scholarship, work-study ko bashi? Wasu tayi suna haɗa su wuri ɗaya don bashi ya yi kama da kuɗin kyauta. Ku kwatanta kuɗin da ya rage a kowace makaranta, ba girman tayin kawai ba.",
            "Alamun gargaɗin zamba, daga Federal Trade Commission (FTC, hukumar kasuwanci ta tarayya): scholarship da aka tabbatar za ku samu; kuɗin neman ko riƙe scholarship; neman lambar bankinku ko katinku; faɗa muku cewa kun ci gasar da ba ku taɓa shiga ba; da matsa muku ku biya yanzu. Scholarship na gaske ba sa karɓar kuɗi don nema.",
            "Ku yi hankali da makarantun da ke matsa muku ku yi rajista ku karɓi bashi da sauri, ke alƙawarin ayyukan da ba za su iya tabbatarwa ba, ko ba sa son faɗa muku yawan masu kammalawa da masu samun aiki. Idan an yi muku zamba, ku kai rahoto a ReportFraud.ftc.gov."
          ],
          steps: ["Ku raba kowane tayin tallafi zuwa grant, scholarship, work-study da bashi.", "Ku lissafa abin da ya rage a biya a kowace makaranta.", "Ku yi amfani da bashin tarayya kafin na masu zaman kansu, kuma ku karɓi abin da kuke buƙata kawai.", "Ku duba kowane tayin scholarship da alamun zamba.", "Ku kai rahoton zamba a ReportFraud.ftc.gov."],
          words: [["Ruwa (interest)", "ƙarin kuɗin da kuke biya saboda aro."], ["Bashin karatu na tarayya", "bashi daga gwamnatin Amurka mai tsayayyun kariya."], ["Bashi mai zaman kansa (private loan)", "bashi daga banki ko kamfani, sau da yawa da ƙarancin kariya."], ["Tarkon bashi", "bashin da ke ƙaruwa fiye da yadda za ku iya biya."]],
          slides: [
            { title: "Ku karɓi bashi a hankali", bullets: ["Abin da kuke buƙata kawai bayan kuɗin kyauta", "Bashin tarayya kafin bashi mai zaman kansa"] },
            { title: "Ku karanta kowane tayin tallafi", bullets: ["Grant, scholarship, work-study ko bashi?", "Bashi zai iya yin kama da kuɗin kyauta", "Ku kwatanta abin da ya rage a biya"] },
            { title: "Alamun gargaɗin zamba", bullets: ["Scholarship da aka tabbatar ko kuɗin nema", "Neman lambar bankinku ko katinku", "Kun ci gasar da ba ku shiga ba; ku biya yanzu"] },
            { title: "Makarantun da ke matsawa", bullets: ["Rajista da bashi da sauri", "Alƙawarin ayyukan da ba za su iya tabbatarwa ba", "Ku kai rahoton zamba a ReportFraud.ftc.gov"] }
          ],
          sources: [
            { name: "Consumer Financial Protection Bureau: Student loans (bashin karatu)", url: "https://www.consumerfinance.gov/consumer-tools/student-loans/" },
            { name: "FTC: How to avoid scholarship and financial aid scams (yadda ake guje wa zambar tallafin karatu)", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Ku duba wannan misalin tayi: grant $3,000, scholarship $2,000, work-study $2,500, bashi $5,500, ga makarantar da kuɗinta $14,000 a shekara. Ku rubuta nawa ne kuɗin kyauta, nawa ne dole a yi aiki a samu ko a mayar, da nawa ne har yanzu ya rage a biya. (Kyauta: $5,000. Aiki: $2,500. Bashi: $5,500. Ya rage: $1,000.)",
          youCanNow: "karanta tayin tallafi layi-layi, karɓar bashi a hankali, da gane zambar tallafin karatu da makarantun da ke matsawa.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za ku karanta kowane layi na tayin tallafi?", options: ["Wasu tayi suna haɗa bashi don ya yi kama da kuɗin kyauta", "Tayin tallafi koyaushe grant ne kawai", "Don nemo alamar makarantar (mascot)", "Layuka ba su da muhimmanci"], answer: 0, why: "Raba grant, scholarship, work-study da bashi yana nuna abin da za ku biya a zahiri." },
            { objective: "O5", q: "Wani imel ya ce kun ci scholarship da ba ku taɓa nema ba kuma yana neman lambar bankinku. Mene ne wannan?", options: ["Kyauta ta gaske", "Alamar gargaɗin zamba; kada ku ba da lambar bankinku", "Takardar banki ta yau da kullum", "Matakin FAFSA"], answer: 1, why: "Gasar da ba ku taɓa shiga ba da neman lambar banki alamun zamba ne." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yin tsarinku na shekaru biyu",
          minutes: 6,
          goal: "Rubuta tsarin shekaru biyu mai babbar hanya, madadi, kuɗi da matakai.",
          text: [
            "Tsari yana mayar da zaɓinku zuwa matakai. Shekaru biyu sun isa ku sami ci gaba na gaske, kuma ba su yi tsawo da yawa ba har ba za ku iya gani sarari ba.",
            "Ku zaɓi babbar hanya da madadi. Misali: babbar hanya, apprenticeship na wutar lantarki; madadi, satifiket na shekara ɗaya a kwalejin al'umma yayin da kuke aiki. Madadin yana sa ku ci gaba idan babbar hanyar ta jinkirta.",
            "Ku raba shekaru biyu zuwa matakai na wata shida, kowanne da manufa (milestone) ɗaya ko biyu: neman shiga, yin jarabawa, gama wani darasi, ajiye wani adadin kuɗi, samun aikin farko a fannin. Ku rubuta yadda za ku biya kowane mataki da wanda zai taimake ku, kamar mai ba da shawara, iyaye, koci, mai jagoranci (mentor) ko maigida.",
            "Ku duba tsarinku bayan 'yan watanni. Tsare-tsare suna canjawa, kuma hakan ba laifi ba ne. Sabunta shi yana cikin ƙwarewar."
          ],
          steps: ["Ku rubuta babbar hanyarku da madadi.", "Ku kwafa kwatancenku na tambayoyi biyar ga dukkan biyun.", "Ku raba shekaru biyu zuwa matakai huɗu na wata shida, kowanne da manufa ɗaya ko biyu.", "Ku rubuta yadda za ku biya kowane mataki.", "Ku jera mutanen da za su taimake ku.", "Ku sa ranar sake duba tsarin bayan kowane 'yan watanni."],
          words: [["Manufa (milestone)", "mataki a sarari da ke nuna ci gaba, kamar gama wani darasi."], ["Hanyar madadi (backup plan)", "hanya ta biyu da za ku iya bi idan ta farko ta jinkirta."]],
          slides: [
            { title: "Me yasa shekaru biyu", bullets: ["Sun isa don ci gaba na gaske", "Ba su yi tsawo ba har a kasa gani sarari"] },
            { title: "Babbar hanya da madadi", bullets: ["Babba: hanyar da kuka fi so", "Madadi: yana sa ku ci gaba idan aka jinkirta"] },
            { title: "Matakai na wata shida", bullets: ["Manufa ɗaya ko biyu kowanne", "Yadda za ku biya", "Wanda zai taimaka"] },
            { title: "Ku riƙe shi da rai", bullets: ["Ku sake duba shi bayan 'yan watanni", "Ku canja shi idan rayuwa ta canja"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarinku na shekaru biyu a shafi ɗaya mai babbar hanya da madadi, kwatancenku na tambayoyi biyar na aƙalla hanyoyi biyu, yadda za ku biya, manufofinku na wata shida da mutanen da za su taimaka. Ku nuna shi ga mai ba da shawara ko babba da kuka amince da shi.",
          youCanNow: "rubuta tsarin shekaru biyu mai babbar hanya, madadi, manufofi, hanyar biya da mutanen da za su taimaka, da sabunta shi idan rayuwa ta canja.",
          quickCheck: [
            { objective: "O6", q: "Mene ne manufa (milestone) a tsarin shekaru biyu?", options: ["Wani buri kawai", "Hanyar madadinku", "Jerin mutane", "Mataki a sarari mai lokaci, kamar gama wani darasi kafin watan Yuni"], answer: 3, why: "Manufofi suna raba tsarin zuwa matakai na wata shida da za ku iya dubawa." },
            { objective: "O6", q: "Babbar hanyarku ta jinkirta da wata shida. Me tsari mai kyau ke taimaka muku ku yi?", options: ["Ku haƙura", "Ku jira ba tare da yin komai ba", "Ku koma hanyar madadinku ku ci gaba da samun ci gaba", "Ku sake farawa ba tare da tsari ba"], answer: 2, why: "Madadi yana sa ku ci gaba idan babbar hanya ta jinkirta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Biyan kuɗi da yin tsari",
        questions: [
          { objective: "O4", q: "Wane nau'in tallafi ne dole ku mayar?", options: ["Grant", "Scholarship", "Albashin work-study", "Bashi"], answer: 3, why: "Dole a mayar da bashi tare da ruwa; grant da scholarship ba haka ba ne." },
          { objective: "O4", q: "Nawa ne kuɗin cike FAFSA a studentaid.gov?", options: ["Babu komai; kyauta ce", "$25", "$100", "Ya danganta da makarantarku"], answer: 0, why: "FAFSA kyauta ce; kada ku taɓa biyan kowa ya cike ta." },
          { objective: "O4", q: "Wani kamfani yana tayin cike muku FAFSA idan kun ba su FSA ID ɗinku. Me za ku yi?", options: ["Ku ba su", "Ku ƙi, ku nemi taimakon kyauta daga mai ba da shawara a makaranta", "Ku tura musu ta tes", "Ku saka shi a intanet"], answer: 1, why: "Kada ku taɓa raba FSA ID ɗinku; masu ba da shawara suna taimakawa kyauta." },
          { objective: "O5", q: "Wanne ne alamar zambar scholarship?", options: ["Takardar nema kyauta", "Tambayar rubutun maƙala (essay)", "Kyautar da aka tabbatar idan kun biya kuɗi", "Ranar ƙarshe"], answer: 2, why: "Scholarship na gaske ba sa karɓar kuɗi ko tabbatar da kyauta." },
          { objective: "O6", q: "Me yasa tsarin shekaru biyu ke buƙatar madadi?", options: ["Don ya sa ku ci gaba idan babbar hanya ta jinkirta", "Saboda doka ta buƙaci haka", "Don burge abokai", "Ba ya buƙatar ɗaya"], answer: 0, why: "Madadi yana sa ku ci gaba da samun ci gaba idan tsare-tsare suka canja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Zaɓin Kwaleji, Sana'a ko Aiki Bayan Makaranta",
    questions: [
      { objective: "O1", q: "Wace hanya ce ta dace da kowa bayan sakandare?", options: ["Kwaleji na shekaru huɗu", "Babu hanya ɗaya kaɗai da ta dace; ya danganta da ku", "Aikin soja", "Fara aiki nan take"], answer: 1, why: "Hanya mafi kyau ita ce wadda ta dace da abubuwan da kuke so, ƙwarewarku da buƙatunku." },
      { objective: "O1", q: "Kun fi koyo ta yin abubuwa da hannuwanku. Wace hanya za ta iya dacewa sosai?", options: ["Laccoci ta intanet kawai", "Babu abin da ya dace", "Apprenticeship a wata sana'a", "Karanta littattafai duk yini"], answer: 2, why: "Apprenticeship yana koyar da ƙwarewa ta aiki da hannu." },
      { objective: "O1", q: "Ta yaya ya kamata ku yi amfani da mataimakin AI wajen zaɓar hanya?", options: ["Ku bar shi ya yanke muku shawara", "Ku amince da kowace lamba da ya bayar", "Kada ku taɓa amfani da shi", "Ku yi amfani da shi don tunani, sannan ku tabbatar da bayanai da mai ba da shawara da shafukan hukuma"], answer: 3, why: "AI zai iya ba da ra'ayoyi, amma dole a tabbatar da bayanai." },
      { objective: "O2", q: "Digirin associate yawanci yana ɗaukar kusan:", options: ["Shekaru biyu", "Wata shida", "Shekaru takwas", "Mako ɗaya"], answer: 0, why: "Digirin associate yawanci yana ɗaukar kusan shekaru biyu." },
      { objective: "O2", q: "Mene ne net price?", options: ["Kuɗin kwamfutar tafi-da-gidanka (laptop)", "Kuɗin kwaleji bayan grant da scholarship", "Kuɗin darasi ɗaya", "Haraji"], answer: 1, why: "Net price shi ne kuɗi bayan an cire tallafin kyauta." },
      { objective: "O2", q: "Waɗanne sana'o'i ne yawanci suke buƙatar digirin bachelor?", options: ["Babu ko ɗaya", "Wasanni kawai", "Koyarwa da injiniyanci", "Sayar da kaya a shago kawai"], answer: 2, why: "Koyarwa da injiniyanci yawanci suna buƙatar digirin bachelor." },
      { objective: "O2", q: "Wanne ne ɗaya daga cikin tambayoyi biyar da za a yi game da kowace hanya?", options: ["Abokaina suna zuwa can?", "Tambarin (logo) yana da kyau?", "Ana nuna shi a talabijin?", "Zai ɗauki lokaci nawa?"], answer: 3, why: "Lokacin kammalawa ɗaya ne daga cikin tambayoyi biyar na kwatanta." },
      { objective: "O3", q: "A ina za ku iya neman apprenticeship?", options: ["Apprenticeship Job Finder na apprenticeship.gov", "Wani rubutu na kafofin sada zumunta da ba a sani ba", "Tes daga baƙo", "Babu inda"], answer: 0, why: "Apprenticeship.gov yana da kayan neman aiki na hukuma." },
      { objective: "O3", q: "Kafin ku sa hannu da makarantar sana'a, ku tambaya:", options: ["Launin ginin", "Ɗalibai nawa ne ke kammalawa kuma suke samun aiki a fannin", "Ko suna da wurin wanka (pool)", "Babu komai"], answer: 1, why: "Yawan masu kammalawa da masu samun aiki suna nuna ko makarantar tana cika alƙawari." },
      { objective: "O3", q: "ASVAB ita ce:", options: ["Bashin kwaleji", "Makarantar sana'a", "Jarabawar da ke taimakawa wajen tantance ayyukan soja da kuka cancanta", "Takardar haraji"], answer: 2, why: "Sojoji suna amfani da ASVAB don haɗa mutane da ayyuka." },
      { objective: "O3", q: "Mataki mai hikima idan kuna tunanin aikin soja shi ne:", options: ["Sa hannu a takardar farko da kuka gani", "Tsallake karanta kwangilar", "Yin magana da aboki ɗaya kawai", "Yin magana da masu ɗaukar sojoji daga reshe fiye da ɗaya da karantawa kafin sa hannu"], answer: 3, why: "Kwatanta rassa da karantawa a hankali suna kare ku." },
      { objective: "O3", q: "Fara aiki kai tsaye zai iya zama hanya mai kyau idan mai ɗaukar aikin:", options: ["Yana ba da horo kuma yana taimakawa wajen biyan darussa", "Ba ya taɓa horar da kowa", "Yana biya da katin kyauta (gift card)", "Ba shi da matsayi na gaba"], answer: 0, why: "Horo, ƙarin matsayi da taimakon kuɗin makaranta suna sa aiki ya zama hanya ta gaske." },
      { objective: "O4", q: "Wane tallafi ne aikin ɗan lokaci da ke taimakawa wajen biyan makaranta?", options: ["Grant", "Work-study", "Bashi", "Scholarship"], answer: 1, why: "Work-study yana biyan ku don aikin ɗan lokaci." },
      { objective: "O4", q: "A ina kuke cike FAFSA?", options: ["fafsa-help.win", "Shafin da ake biya", "studentaid.gov", "Manhajar bankinku"], answer: 2, why: "FAFSA ta hukuma, kyauta, tana a studentaid.gov." },
      { objective: "O4", q: "Me yasa za ku cike FAFSA da wuri gwargwadon iko?", options: ["Takardun da aka yi a makare suna samun ƙarin kuɗi", "Ana buɗe ta rana ɗaya kawai", "Babu dalili", "Wasu tallafi suna ƙarewa, kuma jihohi da kwalejoji suna da ranakun ƙarshe"], answer: 3, why: "Cike ta da wuri yana taimaka muku samun tallafi kafin ya ƙare." },
      { objective: "O5", q: "Waɗanne basussuka ya kamata ku fara amfani da su yawanci?", options: ["Bashin karatu na tarayya", "Bashi mai zaman kansa", "Katin bashi (credit card)", "Bashin gaggawa mai tsada (payday loan)"], answer: 0, why: "Bashin tarayya yawanci yana da ƙarin kariya fiye da na masu zaman kansu." },
      { objective: "O5", q: "Wani tayin tallafi ya jera bashi $5,500 tare da grant. Bashin:", options: ["Kuɗin kyauta ne", "Kuɗi ne da dole ku mayar", "Scholarship ne", "Kyauta ce"], answer: 1, why: "Dole a mayar da bashi ko da an jera shi kusa da grant." },
      { objective: "O5", q: "A ina kuke kai rahoton zambar tallafin karatu?", options: ["Wurin cin abinci na makaranta", "Sharhi a kafofin sada zumunta", "ReportFraud.ftc.gov", "Babu inda"], answer: 2, why: "FTC tana tattara rahotannin zamba a ReportFraud.ftc.gov." },
      { objective: "O6", q: "Wace ce manufa mai kyau a tsarin shekaru biyu?", options: ["Zama sananne", "Jin daɗi wata rana", "Zama mai arziki", "Gama darasin satifiket na farko kafin watan Yuni"], answer: 3, why: "Manufa mataki ne a sarari da za a iya dubawa." },
      { objective: "O6", q: "Sau nawa ya kamata ku duba tsarinku?", options: ["Bayan kowane 'yan watanni", "Ba sau ɗaya ba", "Sau ɗaya kawai", "Sai idan kun kasa"], answer: 0, why: "Dubawa akai-akai yana bar ku sabunta tsarin yayin da rayuwa ke canjawa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 1, 4, 6, 7, 9, 12, 13, 15, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Babbar hanya da madadi",
        objective: "O1",
        notYet: "Hanya ɗaya kawai, ko hanyar ba ta da alaƙa da abubuwan da mai koyo ke so da buƙatunsa.",
        meets: "Babbar hanya da madadi da suka dace da abubuwan da mai koyo ke so, ƙwarewarsa da buƙatunsa na kuɗi.",
        exceeds: "Yana bayyana dalilin da yasa madadin ma yana kai shi zuwa ga burinsa."
      },
      {
        name: "Kwatanta da tambayoyi biyar",
        objective: "O2",
        notYet: "An kwatanta ƙasa da hanyoyi biyu, ko an tsallake tambayoyi.",
        meets: "An kwatanta aƙalla hanyoyi biyu a kan kuɗi, lokaci, biya yayin koyo, ayyukan da ake iya samu da abin da ake buƙata don shiga.",
        exceeds: "Yana amfani da net price ko albashin apprenticeship daga majiyoyin hukuma, kuma ya rubuta inda kowace amsa ta fito."
      },
      {
        name: "Yadda za a biya",
        objective: "O4",
        notYet: "Babu tsarin kuɗi, ko yana dogara da basussukan da ba a sani ba.",
        meets: "Yana faɗin yadda za a biya kowane mataki, har da ranar FAFSA da ranakun ƙarshe idan ana buƙatar tallafi.",
        exceeds: "Yana nuna grant da scholarship da farko, bashi a ƙarshe, da adadin da ya rage a biya."
      },
      {
        name: "Lafiya daga zamba",
        objective: "O5",
        notYet: "Yana shirin biyan kuɗi don taimakon FAFSA ko don scholarship da aka tabbatar.",
        meets: "Babu biyan kuɗi don taimakon FAFSA, babu raba FSA ID, kuma babu tayin da ke da alamun zamba.",
        exceeds: "Yana faɗin inda ake kai rahoton zamba da wanda za a tambaya don taimakon kyauta."
      },
      {
        name: "Manufofi da masu taimako",
        objective: "O6",
        notYet: "Babu matakai na wata shida ko ba a ambaci masu taimako ba.",
        meets: "Matakai huɗu na wata shida masu manufofi, mutanen da za su taimaka, da ranar sake dubawa.",
        exceeds: "An nuna shi ga mai ba da shawara ko babba amintacce, kuma an rubuta ra'ayinsu."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka cike FAFSA a kan lokaci ko suka nemi apprenticeship ko wani shiri a cikin shekarar karatu",
      "Masu koyo da suka shiga kwaleji, shirin sana'a, apprenticeship, aikin soja ko aiki mai horo wata shida bayan kwas ɗin",
      "Masu koyo da suka ce sun guje wa zambar scholarship ko tallafi a binciken biyo baya"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfutar makaranta ko ta ɗakin karatu mai intanet",
      "Shafukan hukuma: studentaid.gov, apprenticeship.gov da na'urorin lissafin net price na makarantu",
      "Takarda ko takardar kwamfuta don teburin kwatanta da tsarin shekaru biyu",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku haɗa kai da mai ba da shawara na makaranta kuma ku gayyace shi ya duba tsare-tsaren masu koyo.",
      "Ku sa masu koyo su nemo ranar buɗe FAFSA ta wannan shekara da ranakun ƙarshe a cikin aji, domin suna canjawa kowace shekara.",
      "Kada ku taɓa neman masu koyo su faɗi kuɗin shigar iyalinsu, FSA ID ko bayanan banki a gaban jama'a; ku yi atisaye da misalin tayin tallafi na kwas ɗin.",
      "Ku gayyaci masu jawabi daga kwalejin al'umma, shirin apprenticeship da wani mai ɗaukar aiki na yankin don a nuna dukkan hanyoyi daidai.",
      "Ku ba da maki ga tsarin shekaru biyu da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
