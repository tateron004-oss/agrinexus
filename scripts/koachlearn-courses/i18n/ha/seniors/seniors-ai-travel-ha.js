"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-ai-travel.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "seniors-ai-travel-ha",
  lang: "ha",
  translationOf: "seniors-ai-travel",
  category: "Seniors and Technology",
  name: "Abokan Tafiya na AI",
  skills: "Tsara jadawalin tafiya da AI, Tabbatar da bayanan tafiya a shafukan hukuma, Yin jerin kayan da za a ɗauka, Amfani da manhajojin taswira da fassara, Kasancewa lafiya da kuma tuntuɓar iyali a lokacin tafiya",
  outcome: "amfani da mataimakin AI don tsara gajeriyar tafiya a hankali yadda ya dace da ku, tabbatar da muhimman bayanai a shafukan hukuma, yin jerin kayan da za ku ɗauka, da amfani da taswira da fassara a wayarku a lokacin tafiya.",
  about: [
    "Wannan kwas ɗin na tsofaffi ne da ke son yin tafiya, ko don ziyartar jikoki a wani yanki na ƙasar, ko hawa motar yawon shaƙatawa, ko kuma ganin wurin da suka daɗe suna burin gani.",
    "Za ku yi amfani da mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini don tsara tafiya mai sauƙi da ta dace da ƙarfinku da buƙatunku, sannan ku tabbatar da bayanai masu muhimmanci (dokokin katin shaida, lokutan buɗewa, farashi) a shafukan intanet na hukuma. Za ku kuma yi amfani da taswira, fassara da raba wurin da kuke a wayarku.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ayyukan \"Gwada yanzu\" suna gina shirin gaske na tafiyar da kuke son yi. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku tsara tafiyar kwana uku da mataimakin AI: shirin kowace rana a hankali tare da lokacin hutu, jerin kayan da za ku ɗauka har da magungunanku da katin shaidarku, da bayanai uku da kuka tabbatar a shafukan intanet na hukuma (kamar katin shaidar da kuke buƙata don hawa jirgi da lokutan buɗewar wurin da za ku ziyarta). Ku raba shirin da wani a iyalinku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffi da ke son yin tafiya, ta kusa ko ta nesa, don ziyartar iyali, ganin sababbin wurare ko ɗan hutu, sau da yawa a hankali kuma da buƙatun lafiya kamar magungunan yau da kullum ko rashin iya tafiya mai nisa a ƙafa.",
    startingPoint: "Sun taɓa yin tafiya a baya, sau da yawa da taswirar takarda, wakilan tafiya, ko iyali suna tsara musu. Da yawa suna amfani da wayar zamani amma ba su taɓa amfani da mataimakin AI, kwatancen hanya a taswira, manhajar fassara ko raba wurin da suke ba.",
    gap: "Tsara tafiya yana iya zama kamar ya fi ƙarfin mutum, kuma kurakurai kamar katin shaidar da bai dace ba, wuraren da aka rufe ko magungunan da aka manta suna iya ɓata tafiya. Mataimakin AI da kayan aikin waya suna taimaka wa tsofaffi su tsara tafiya a hankali kuma su yi tafiya da kansu, muddin sun tabbatar da bayanai a shafukan hukuma kuma sun kula da zambar tafiya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli da manyan matakai masu sauƙi",
      "Na'urori: wayar zamani mai intanet, manhajar taswira da manhajar fassara",
      "Lokaci: kusan minti 5 a kowane darasi, a hankali",
      "Dokokin tafiya, lokuta da farashi suna canjawa; masu koyo suna tabbatarwa a shafukan hukuma kamar tsa.gov",
      "Lafiya da sirri: magunguna suna bin shawarar mai sayar da magani (pharmacist); babu harkar banki a Wi-Fi na jama'a"
    ],
    prerequisites: "Kwas ɗin \"AI for Seniors: Using AI Assistants\" (AI ga Tsofaffi: Amfani da Mataimakan AI) yana da amfani a fara da shi, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da mataimakin AI kyauta", action: "neman shirin tafiya na kowace rana da ke faɗin ina, yaushe, su wa za su tafi, abubuwan da kuke so da saurin da kuke so", standard: "tare da lokacin hutu kuma ba tare da ayyukan da suka fi ƙarfinku ba" },
    { id: "O2", condition: "Idan aka ba ku shirin tafiya daga AI", action: "tabbatar da muhimman bayanai kamar lokuta, farashi da dokokin katin shaida a shafukan intanet na hukuma", standard: "kuna tabbatar da aƙalla bayanai uku kafin ku dogara da su" },
    { id: "O3", condition: "Bisa tafiyarku da buƙatunku na lafiya", action: "neman jerin kayan da za a ɗauka a rukuni-rukuni, da ke ɗauke da magungunanku da katin shaidarku", standard: "tare da magunguna da katin shaida a jakar hannunku" },
    { id: "O4", condition: "Ta amfani da manhajar taswira a wayarku", action: "samun kwatancen hanya na tafiya a ƙafa, tuƙi ko motocin haya na jama'a, da bin juye-juyen da ake faɗa da murya", standard: "tare da ajiye otal ɗinku a matsayin wurin da aka fi so (favorite)" },
    { id: "O5", condition: "Idan kuna buƙatar wani harshe", action: "amfani da manhajar fassara don karanta alama ko yin hira mai sauƙi", standard: "tare da rubuta muhimman buƙatu, kamar rashin jituwa da wani abinci (allergy), tun da wuri da kuma tabbatar da su da ma'aikata" },
    { id: "O6", condition: "Kafin tafiya da a lokacinta", action: "raba shirye-shiryenku da iyali da gane zambar tafiya", standard: "kuna yin booking ta shafukan hukuma ko wakilai amintattu kaɗai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara tafiyarku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tsara jadawalin tafiya mai sauƙi da AI",
          minutes: 5,
          goal: "Neman mataimakin AI ya ba ku shirin tafiya na kowace rana da ya dace da saurinku.",
          text: [
            "Jadawalin tafiya (itinerary) shiri ne na kowace rana don tafiya. Mataimakin AI zai iya rubuta ɗaya cikin daƙiƙoƙi, kuma ya canja shi duk lokacin da kuke so.",
            "Ku faɗa masa ina, yaushe, tsawon lokaci, su wa za su tafi, da abin da kuke buƙata: \"Ka tsara tafiya mai sauƙi ta kwana uku zuwa Savannah, Georgia a watan Afrilu don mutum biyu masu shekaru 70 zuwa sama. Muna son tarihi da lambuna, muna tafiya a hankali, kuma muna son hutu kowace yamma. Ayyuka biyu kawai a rana.\"",
            "Ku nemi canje-canje har ya dace da ku: \"Ka ƙara wurin zama a ci abincin rana kusa da kowane aikin safe.\" \"Waɗanne wurare ne ke da lif (elevator), ko masu sauƙi ga mai sanda?\""
          ],
          steps: ["Ku faɗi ina, yaushe da tsawon lokaci.", "Ku faɗi su wa za su tafi da abin da kuke so.", "Ku faɗi saurinku da duk wata buƙata, kamar hutu ko tafiya mai sauƙi.", "Ku nemi canje-canje har ya dace da ku."],
          words: [["Jadawalin tafiya (itinerary)", "shiri na kowace rana don tafiya."], ["Mai sauƙin isa (accessible)", "mai sauƙin kaiwa da amfani ga masu matsalar tafiya, ji ko gani."]],
          slides: [
            { title: "Shiri cikin daƙiƙoƙi", bullets: ["Jadawalin tafiya shiri ne na kowace rana", "AI ne yake rubutawa, ku ne kuke gyarawa"] },
            { title: "Ku faɗa wa mataimakin", bullets: ["Ina, yaushe, tsawon lokaci", "Su wa za su tafi da abin da kuke so", "Saurinku da buƙatunku"] },
            { title: "Ku sa ya dace da ku", bullets: ["\"Ka ƙara hutu kowace yamma.\"", "\"Waɗanne wurare ne ke da sauƙi ga mai sanda?\""] }
          ],
          tryIt: "Ku zaɓi tafiyar da kuke son yi. Ku nemi mataimakin AI ya ba ku jadawalin tafiya mai sauƙi na kwana uku bisa saurinku da buƙatunku, sannan ku nemi canji ɗaya.",
          youCanNow: "neman AI ya ba ku shirin tafiya da ya dace da saurinku da buƙatunku.",
          quickCheck: [
            { objective: "O1", q: "Mene ne jadawalin tafiya (itinerary)?", options: ["Jerin kayan da za a ɗauka", "Shiri na kowace rana don tafiya", "Tikitin jirgin sama", "Fom ɗin inshorar tafiya"], answer: 1, why: "Jadawalin tafiya shiri ne na kowace rana da AI zai iya rubutawa ya canja." },
            { objective: "O1", q: "Shirin AI yana da ayyuka huɗu a rana, kuma kuna gajiya da sauri. Me za ku nema?", options: ["\"Ka tsara wani gari daban.\"", "Babu komai; za ku jure", "\"Ka tsawaita shi.\"", "\"Ayyuka biyu kawai a rana, da hutu kowace yamma.\""], answer: 3, why: "Ku nemi canje-canje har shirin ya dace da saurinku da buƙatunku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tabbatar da bayanan tafiya a shafukan hukuma",
          minutes: 5,
          goal: "Tabbatar da muhimman bayanai a shirin tafiya na AI kafin ku dogara da su.",
          text: [
            "Shirye-shiryen tafiya na AI suna iya ƙunsar kurakurai: gidan tarihi da aka rufe, tsofaffin lokutan buɗewa, farashin da ba daidai ba ko dokokin da suka canja. Koyaushe ku tabbatar da bayanan da za su iya ɓata tafiyarku.",
            "Ku duba lokutan buɗewa da farashi a shafin intanet na wurin da kansa. Ku duba lokutan jirgin sama da na jirgin ƙasa a wurin kamfanin jirgin. Game da katin shaida: tun ranar 7 ga Mayu, 2025, matafiya masu hawa jirgi a cikin Amurka suna buƙatar lasisin tuƙi ko katin shaida da ya cika ka'idar REAL ID, ko wani katin shaida da aka amince da shi kamar fasfo. Shafin TSA, tsa.gov, yana jera dukkan katunan shaidar da aka amince da su.",
            "Ku tambayi mataimakin: \"Me ya kamata in sake dubawa a wannan shirin?\" Zai iya nuna muku bayanan da ke da muhimmanci, amma ku ne kuke tabbatar da su a shafukan hukuma."
          ],
          steps: ["Ku tambayi AI waɗanne bayanai za ku sake dubawa.", "Ku duba lokuta da farashi a shafin intanet na kowane wuri.", "Ku duba lokutan jirgin sama ko jirgin ƙasa a wurin kamfanin.", "Ku duba dokokin katin shaida a tsa.gov kafin ku hau jirgi."],
          words: [["REAL ID", "lasisin tuƙi ko katin shaidar jiha da ya cika ka'idojin gwamnatin tarayya; yawanci yana da tauraro a kusurwa."], ["TSA", "Transportation Security Administration, hukumar da ke binciken matafiya a filayen jirgin saman Amurka."]],
          slides: [
            { title: "Shirin AI yana iya zama tsoho", bullets: ["Wuraren da aka rufe", "Tsofaffin lokuta ko farashi", "Dokokin da suka canja"] },
            { title: "Ku tabbatar a shafukan hukuma", bullets: ["Lokuta da farashi: shafin wurin", "Jirgin sama da jirgin ƙasa: kamfanin", "Dokokin katin shaida: tsa.gov"] },
            { title: "Hawa jirgi a cikin Amurka", bullets: ["Ana buƙatar REAL ID ko wani katin shaida da aka amince tun Mayu 2025", "Ana amincewa da fasfo", "Ku ga cikakken jerin a tsa.gov"] }
          ],
          sources: [{ name: "TSA: REAL ID", url: "https://www.tsa.gov/real-id" }],
          tryIt: "Ku tambayi mataimakin waɗanne bayanai a jadawalinku za ku sake dubawa. Sannan ku duba lokutan buɗewar wuri ɗaya a shafinsa, kuma ku duba ko katin shaidarku ya cika ka'idar REAL ID (ku nemi tauraron) ko me kuma tsa.gov ke amincewa da shi.",
          youCanNow: "tabbatar da muhimman bayanai a shirin tafiya na AI a shafukan intanet na hukuma.",
          quickCheck: [
            { objective: "O2", q: "A ina za ku duba lokutan buɗewar gidan tarihi?", options: ["A shafin intanet na gidan tarihin da kansa", "A amsar AI kawai", "A dandalin tattaunawar matafiya", "A tsohon littafin jagora"], answer: 0, why: "AI yana iya ba da tsofaffin lokuta; shafin wurin da kansa yana da na yanzu." },
            { objective: "O2", q: "Kuna shirin hawa jirgi a cikin Amurka kuma ba ku tabbata ana amincewa da katin shaidarku ba. Me za ku yi?", options: ["Ku yi fatan babu matsala", "Ku tambayi AI ku amince da shi", "Ku duba jerin katunan shaidar da aka amince da su a tsa.gov", "Ku kawo katin ɗakin karatu"], answer: 2, why: "Shafin TSA, tsa.gov, yana jera dukkan katunan shaidar da aka amince da su don hawa jirgi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin jerin kayan tafiya mai wayo",
          minutes: 4,
          goal: "Neman AI ya ba ku jerin kayan da suka dace da tafiyarku da buƙatunku na lafiya.",
          text: [
            "Jerin kayan tafiya yana hana damuwar da aka saba yi: \"Ko na manta wani abu?\" Ku nemi mataimakin ya yi muku ɗaya bisa tafiyarku, lokacin shekara da ayyukan da za ku yi.",
            "Misali: \"Ka yi mini jerin kayan tafiya na kwana uku a Savannah a watan Afrilu. Ina shan magunguna kowace rana, kuma ina amfani da tabarau na karatu da na'urar ji. Ka raba shi zuwa: takardu, magunguna da lafiya, tufafi, da na'urorin lantarki.\"",
            "Ku ajiye magunguna a jakar hannunku a cikin kwalaye ko gwangwanayensu na asali, tare da ɗan ƙari idan aka sami jinkiri, kuma ku ɗauki jerin magungunanku da lambar wayar likitanku. Mai sayar da magani (pharmacist) zai iya ba ku shawara kan tafiya da magunguna."
          ],
          steps: ["Ku faɗa wa AI wurin, lokacin shekara, tsawon lokaci da ayyukan da za ku yi.", "Ku ambaci buƙatun lafiya, kamar magunguna ko na'urar ji.", "Ku nemi ya raba jerin rukuni-rukuni.", "Ku ajiye magunguna da katin shaida a jakar hannunku."],
          words: [["Jakar hannu (carry-on)", "jakar da kuke riƙewa tare da ku a jirgin sama, mota ko jirgin ƙasa."]],
          slides: [
            { title: "Ba za ku sake mantawa ba", bullets: ["Ku nemi AI ya yi muku jerin kayan tafiya", "Bisa wuri, lokacin shekara da ayyuka"] },
            { title: "Ku raba jerin rukuni-rukuni", bullets: ["Takardu", "Magunguna da lafiya", "Tufafi da na'urorin lantarki"] },
            { title: "Magunguna suna tafiya tare da ku", bullets: ["A jakar hannu, a kwalayensu na asali", "Ɗan ƙari don jinkiri", "Jerin magunguna da lambar likitanku"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya ba ku jerin kayan tafiya a rukuni-rukuni don tafiyarku, har da buƙatunku na lafiya. Ku ƙara duk abin da ya manta, sannan ku ajiye ko ku buga jerin.",
          youCanNow: "yin jerin kayan tafiya da AI da ke ɗauke da buƙatunku na lafiya.",
          quickCheck: [
            { objective: "O3", q: "Me yasa za ku nemi AI ya raba jerin kayan tafiya rukuni-rukuni?", options: ["Don jerin ya yi tsawo", "Don ya zama mai sauƙin dubawa sashe-sashe, kamar takardu da magunguna", "Don ku ɗauki kaya kaɗan", "Don AI ya tuna tafiyarku"], answer: 1, why: "Raba jerin zuwa takardu, magunguna, tufafi da na'urorin lantarki yana sa dubawa ta yi sauƙi." },
            { objective: "O3", q: "Kuna shan magunguna kowace rana. Yaya za ku ɗauke su?", options: ["A cikin akwatin kayan da za a ba kamfanin jirgi", "A sake cikin ledar roba", "Daidai abin da kuke buƙata kowace rana kawai", "A jakar hannunku, a kwalayensu na asali, tare da ɗan ƙari"], answer: 3, why: "Ku ajiye magunguna a jakar hannu a kwalayensu na asali, tare da ƙari idan aka sami jinkiri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara tafiyarku",
        questions: [
          { objective: "O1", q: "Mene ne jadawalin tafiya (itinerary)?", options: ["Tikitin jirgin sama", "Akwatin kaya", "Shirin tafiya na kowace rana", "Fasfo"], answer: 2, why: "Jadawalin tafiya yana bayyana kowace rana ta tafiya." },
          { objective: "O1", q: "Wace buƙata ce za ta kawo mafi kyawun shirin tafiya?", options: ["\"Ka tsara tafiya mai sauƙi ta kwana 3 zuwa Savannah a Afrilu don mutum biyu masu shekaru 70 zuwa sama da ke son lambuna kuma suna buƙatar hutun yamma.\"", "\"tafiya\"", "\"yawon shaƙatawa\"", "\"je wani wuri\""], answer: 0, why: "Tana faɗin wuri, lokaci, mutane, abubuwan da suke so da sauri." },
          { objective: "O2", q: "AI ya ce gidan tarihi yana buɗewa ƙarfe 9 na safe. Yaya za ku tabbatar?", options: ["Ku yi tsammani", "Ku amince da AI", "Ku tambayi baƙo", "A shafin intanet na gidan tarihin da kansa"], answer: 3, why: "Shafin wurin da kansa yana da lokutan yanzu." },
          { objective: "O2", q: "Tun Mayu 2025, don hawa jirgi a cikin Amurka kuna buƙatar:", options: ["Katin ɗakin karatu kawai", "Katin shaida da ya cika ka'idar REAL ID ko wani da aka amince da shi kamar fasfo", "Babu katin shaida kwata-kwata", "Katin banki"], answer: 1, why: "TSA tana buƙatar REAL ID ko wani katin shaida da aka amince da shi." },
          { objective: "O3", q: "A ina ya kamata magunguna su kasance idan kuna tafiya?", options: ["A kayan da aka ba kamfanin jirgi kawai", "A jakar hannunku", "A bar su a gida", "A jakar baƙo"], answer: 1, why: "Riƙe su tare da ku yana hana su ɓacewa." }
        ]
      }
    },
    {
      name: "Babi na 2: A kan hanya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Amfani da taswira da kwatancen hanya a wayarku",
          minutes: 5,
          goal: "Samun kwatancen hanya na tafiya a ƙafa ko tuƙi da manhajar taswira.",
          text: [
            "Manhajojin taswira kamar Google Maps da Apple Maps suna nuna inda kuke da yadda za ku isa inda za ku je, da mota, a ƙafa ko da motocin haya na jama'a.",
            "Ku buɗe manhajar taswira ku rubuta sunan wurin a akwatin nema, ko ku faɗa wa mataimakin murya: \"Hey Siri, walking directions to Forsyth Park.\" Ku taɓa Directions, ku zaɓi tafiya a ƙafa, tuƙi ko motocin jama'a (transit), sannan ku taɓa Start. Manhajar tana faɗin kowane juyi da murya.",
            "Kafin tafiya, ku ajiye otal ɗinku a matsayin wurin da aka fi so (favorite), don dawowa ya zama taɓawa ɗaya kawai. Kwatancen hanya yana cin batirin wayarku, don haka ku ɗauki caja ko ƙaramin batirin ajiya (battery pack)."
          ],
          steps: ["Ku buɗe manhajar taswirarku.", "Ku rubuta ko ku faɗi inda kuke son zuwa.", "Ku taɓa Directions ku zaɓi tafiya a ƙafa, tuƙi ko motocin jama'a.", "Ku taɓa Start ku bi juye-juyen da ake faɗa da murya.", "Ku ajiye otal ɗinku a matsayin favorite."],
          words: [["GPS", "tsarin da ke bar wayarku ta san inda kuke a taswira."], ["Motocin jama'a (transit)", "sufurin jama'a kamar bas da jirgin ƙasa."]],
          slides: [
            { title: "Wayarku ta san hanya", bullets: ["Google Maps ko Apple Maps", "Mota, tafiya a ƙafa ko motocin jama'a"] },
            { title: "Samun kwatancen hanya", bullets: ["Ku rubuta ko ku faɗi sunan wurin", "Ku taɓa Directions, ku zaɓi hanyar tafiya", "Ku taɓa Start don jin juye-juye da murya"] },
            { title: "Shawarwarin tafiya", bullets: ["Ku ajiye otal ɗinku a matsayin favorite", "Ku ɗauki caja ko batirin ajiya"] }
          ],
          tryIt: "Ku yi amfani da manhajar taswirarku don samun kwatancen tafiya a ƙafa daga gidanku zuwa wani shago ko lambun shaƙatawa na kusa. Ku taɓa Start ku saurari umarnin farko.",
          youCanNow: "samun kwatancen hanya da bin sa da manhajar taswira.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar Transit a manhajar taswira?", options: ["Tafiya a ƙafa kawai", "Hanyoyin tuƙi", "Bas da jirgin ƙasa", "Farashin tasi"], answer: 2, why: "Transit yana nufin sufurin jama'a, kamar bas da jirgin ƙasa." },
            { objective: "O4", q: "Kuna tafiya a ƙafa kuma kuna son hanya mai sauƙi ta komawa otal ɗinku. Me ya kamata ku yi kafin tafiyar?", options: ["Ajiye otal ɗin a matsayin favorite a manhajar taswira", "Rubuta sunan otal ɗin a hannunku", "Kashe wayarku", "Goge manhajar taswira"], answer: 0, why: "Ajiye otal ɗin a matsayin favorite yana sa komawa ya zama taɓawa ɗaya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Magana da karatu a wani harshe",
          minutes: 5,
          goal: "Amfani da manhajar fassara don karanta alama ko yin hira mai sauƙi.",
          text: [
            "Kuna tafiya ƙasar waje, ko kuna haɗuwa da sabon suruki ko suruka da ke magana da wani harshe? Manhajojin fassara kamar Google Translate da manhajar Translate ta iPhone za su iya taimakawa.",
            "Ku rubuta ko ku faɗi jimla, sai ta nuna kuma ta faɗi fassarar. Yanayin hira (conversation mode) yana bar mutum biyu su yi magana bi da bi. Yanayin kyamara (camera mode) yana bar ku nuna wayarku ga alama ko jerin abinci (menu) ku gan shi a harshenku.",
            "Fassarorin suna da kyau amma ba cikakku ba ne. Don abubuwa masu muhimmanci, kamar buƙatun lafiya ko rashin jituwa da wani abinci (allergy), ku riƙe kati a harshen wurin da aka rubuta tun da wuri, kuma ku tabbatar da shi da ma'aikacin otal ko na shagon magani. Manhajoji da yawa suna bar ku sauke harshe kafin ku tafi, don ya yi aiki ba tare da intanet ba."
          ],
          steps: ["Ku buɗe manhajar fassara ku zaɓi harsunan biyu.", "Ku rubuta ko ku faɗi jimlarku.", "Ku yi amfani da yanayin hira don yin magana bi da bi.", "Ku yi amfani da yanayin kyamara don alamu da jerin abinci.", "Ku sauke harshen kafin ku yi tafiya."],
          words: [["Fassara", "mayar da kalmomi daga wani harshe zuwa wani."], ["Ba tare da intanet ba (offline)", "yin aiki ba tare da haɗin intanet ba."]],
          slides: [
            { title: "Mai fassara a aljihunku", bullets: ["Google Translate ko manhajar Translate", "Rubutu, magana, ko kyamara"] },
            { title: "Hanyoyi uku na amfani da shi", bullets: ["Ku faɗi jimla", "Yanayin hira: magana bi da bi", "Yanayin kyamara: alamu da jerin abinci"] },
            { title: "Ku shirya tun da wuri", bullets: ["Ba cikakke ba ne don al'amuran lafiya", "Ku riƙe rubutaccen katin allergy ko na lafiya", "Ku sauke harshen kafin ku tafi"] }
          ],
          tryIt: "Ku buɗe manhajar fassara. Ku fassara \"Ina banɗaki yake, don Allah?\" zuwa harshen da kuke iya buƙata, kuma ku saurare shi ana faɗa da babbar murya.",
          youCanNow: "amfani da manhajar fassara don magana, karanta alamu da jerin abinci, da shirya wa muhimman buƙatu.",
          quickCheck: [
            { objective: "O5", q: "Me yanayin kyamara a manhajar fassara yake yi?", options: ["Yana ɗaukar hotunan tafiya", "Yana nuna alama ko jerin abinci a harshenku idan kun nuna wayar gare shi", "Yana naɗar kiran bidiyo", "Yana nemo otal ɗinku"], answer: 1, why: "Yanayin kyamara yana fassara abin da kyamarar waya ke gani, kamar alamu da jerin abinci." },
            { objective: "O5", q: "Za ku je wurin da babu intanet. Me za ku yi kafin ku tafi?", options: ["Babu komai; manhajar tana aiki koyaushe", "Ku sayi ƙamus na takarda kawai", "Ku sauke harshen a cikin manhajar", "Ku goge manhajar"], answer: 2, why: "Manhajoji da yawa suna bar ku sauke harshe don su yi aiki ba tare da intanet ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kasancewa lafiya da tuntuɓar iyali a lokacin tafiya",
          minutes: 5,
          goal: "Raba shirye-shiryenku da wurin da kuke da iyali, da guje wa zambar tafiya.",
          text: [
            "Ku sanar da iyali inda kuke. Ku raba jadawalin tafiyarku da wani a iyali, kuma ku yi tunanin raba wurin da kuke daga wayarku a lokacin tafiyar (a iPhone, manhajar Find My; a Android, raba wuri ta Google Maps). Kuna iya dakatar da rabawa a kowane lokaci.",
            "Ku kula da zambar tafiya: shafukan booking na bogi, kiran da ke cewa kun \"ci\" kyautar tafiya, da saƙonni game da matsalar jirginku da ke cewa ku kira wata baƙuwar lamba ko ku biya kuɗi. Ku yi booking ta shafin intanet na kamfanin jirgin sama, otal ko jirgin ƙasa da kansa, ko ta wakili amintacce, kuma ku tabbatar da kowane saƙo ta kiran lambar da ke shafinsu na hukuma.",
            "Ku ajiye kwafin katin shaidarku da jerin magungunanku a wuri mai aminci, nesa da na asali, kuma ku guji shigar da bayanan banki a Wi-Fi na jama'a a otal ko filin jirgin sama."
          ],
          steps: ["Ku raba jadawalin tafiyarku da wani a iyali.", "Ku kunna raba wuri don tafiyar idan kuna so.", "Ku yi booking ta shafukan hukuma ko wakilai amintattu kaɗai.", "Ku tabbatar da saƙonnin tafiya ta lambar hukuma ta kamfanin.", "Ku guji harkar banki a Wi-Fi na jama'a."],
          words: [["Raba wuri (location sharing)", "barin mutanen da kuka zaɓa su ga inda wayarku take a taswira."], ["Wi-Fi na jama'a", "intanet mara waya kyauta a wurare kamar otal da filin jirgin sama, wanda wasu ma suke amfani da shi."]],
          slides: [
            { title: "Ku sanar da iyali", bullets: ["Ku raba jadawalin tafiyarku", "Ku raba wurin da kuke don tafiyar", "Ku dakatar da rabawa a kowane lokaci"] },
            { title: "Zambar tafiya", bullets: ["Shafukan booking na bogi", "\"Kun ci kyautar tafiya!\"", "Saƙonnin matsalar jirgi masu baƙin lambobi"] },
            { title: "Ku kasance lafiya", bullets: ["Ku yi booking a shafukan hukuma", "Ku kira lambobin da ke shafukan hukuma", "Babu harkar banki a Wi-Fi na jama'a"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala shirin tafiyarku ta kwana uku a hankali tare da lokacin hutu, jerin kayanku da magunguna da katin shaida, da bayanai uku da kuka tabbatar a shafukan intanet na hukuma. Ku raba shirin da wani a iyalinku.",
          youCanNow: "tsara tafiya da AI, tabbatar da ita, shirya kayanta, gano hanyarku, da kasancewa lafiya tare da tuntuɓar iyali.",
          quickCheck: [
            { objective: "O6", q: "Me raba wuri (location sharing) yake yi?", options: ["Yana nuna wa kowa a intanet inda kuke", "Yana bar iyalin da kuka zaɓa su ga inda wayarku take", "Yana yi muku booking na otal", "Yana kunna GPS ga baƙi"], answer: 1, why: "Raba wuri yana nuna wurin wayarku ga mutanen da kuka zaɓa, kuma kuna iya dakatarwa a kowane lokaci." },
            { objective: "O6", q: "Wani shafi yana ba da otal ɗinku a rabin farashi idan kun biya ta tura kuɗi (wire transfer) yau. Me za ku yi?", options: ["Ku biya da sauri kafin ya ƙare", "Ku aika bayanan bankinku", "Ku tambayi shafin ko na gaske ne", "Ku yi booking ta shafin otal ɗin da kansa ko wakili amintacce"], answer: 3, why: "Shafukan booking na bogi sun yawaita; ku yi booking ta shafukan hukuma ko wakilai amintattu kaɗai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: A kan hanya",
        questions: [
          { objective: "O4", q: "A manhajar taswira, bayan zaɓar inda za ku je, kuna taɓa:", options: ["Raba kalmar sirri", "Goge", "Kyamara", "Directions, sannan Start"], answer: 3, why: "Directions da Start suna fara jagora da murya." },
          { objective: "O4", q: "Me yasa za ku ajiye otal ɗinku a matsayin favorite?", options: ["Komawa ya zama taɓawa ɗaya", "Yana rage farashin ɗakin", "Yana soke booking ɗin", "Yana aika kalmar sirrinku"], answer: 0, why: "Favorites suna sa komawa ya yi sauri." },
          { objective: "O5", q: "Yanayin kyamara a manhajar fassara yana bar ku:", options: ["Kira gida", "Ɗaukar hoton kanku (selfie)", "Nuna wayar ga alama ko jerin abinci ku karanta shi a harshenku", "Biyan kuɗin abinci"], answer: 2, why: "Yana fassara rubutun da kyamara ke gani." },
          { objective: "O5", q: "Don mummunar rashin jituwa da abinci (allergy) a ƙasar waje, shiri mafi kyau shi ne:", options: ["Yin tsammani", "Dogara da manhajar kawai a lokacin", "Yin shiru", "Riƙe rubutaccen kati a harshen wurin da tabbatar da shi da ma'aikata"], answer: 3, why: "Manhajojin fassara ba cikakku ba ne don buƙatun lafiya." },
          { objective: "O6", q: "Wani tes ya ce jirginku yana da matsala kuma ku kira lambar da ke cikin saƙon. Ku:", options: ["Biya nan take", "Kira lambar da ke cikin tes ɗin", "Kira lambar da ke shafin hukuma na kamfanin jirgin a maimakon haka", "Aika lambar katinku"], answer: 2, why: "Lambobin hukuma suna da aminci; lambobin da ke cikin saƙonni suna iya zama zamba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Abokan Tafiya na AI",
    questions: [
      { objective: "O1", q: "Mataimakin AI zai iya taimakon tafiya ta hanyar:", options: ["Sayen tikiti ba tare da ku ba", "Rubuta shiri na kowace rana", "Ba da tabbacin farashi", "Shirya muku jakarku"], answer: 1, why: "Yana rubuta shirye-shirye da ku kuma kuke gyarawa da tabbatarwa." },
      { objective: "O1", q: "Faɗa wa AI saurinku da buƙatunku yana taimaka masa:", options: ["Yin shirin da ya dace da ku", "Rage kuɗi", "Yin booking na otal", "Kiran iyali"], answer: 0, why: "Cikakkun bayanai suna sa shirin ya yiwu." },
      { objective: "O1", q: "\"Accessible\" (mai sauƙin isa) yana nufin:", options: ["Mai sauƙin amfani ga masu matsalar tafiya, ji ko gani", "Mai tsada", "Mai nisa", "A rufe"], answer: 0, why: "Wurare masu sauƙin isa suna da sauƙin amfani ga kowa." },
      { objective: "O2", q: "Shirye-shiryen tafiya na AI suna iya ƙunsar:", options: ["Cikakkun bayanai kawai", "Tsofaffin lokuta ko wuraren da aka rufe", "Fasfonku", "Tikiti na gaske"], answer: 1, why: "AI yana iya yin kuskure ko ya zama tsoho." },
      { objective: "O2", q: "Tambaya mai kyau da za ku yi wa AI game da shirinku ita ce:", options: ["\"Ka yi booking na komai yanzu.\"", "\"Mece ce kalmar sirrina?\"", "\"Me ya kamata in sake dubawa a wannan shirin?\"", "\"Ka biya a madadina.\""], answer: 2, why: "Tana nuna bayanan da za a tabbatar." },
      { objective: "O2", q: "A ina za ku duba dokokin katin shaida don hawa jirgi a Amurka?", options: ["Tes na zambar tafiya", "Tallar da ke tasowa (pop-up)", "Rubutu a kafofin sada zumunta", "tsa.gov"], answer: 3, why: "TSA ce ke kafa dokokin katin shaida a filin jirgi." },
      { objective: "O2", q: "Katin REAL ID yawanci yana da:", options: ["Lambar barcode kawai", "Babu hoto", "Tauraro a kusurwa", "Kalmar sirrinku"], answer: 2, why: "Tauraron yana nuna katunan da suka cika ka'idar REAL ID." },
      { objective: "O2", q: "Ban da REAL ID, katin shaidar da aka amince da shi don jiragen Amurka shi ne:", options: ["Fasfo", "Katin ɗakin karatu", "Rasidin shago", "Katin kasuwanci"], answer: 0, why: "TSA tana amincewa da fasfo." },
      { objective: "O3", q: "Jerin kayan tafiya a rukuni-rukuni yana iya samun sassa don:", options: ["Babu komai", "Takalma kawai", "Kayan ciye-ciye kawai", "Takardu, magunguna, tufafi da na'urorin lantarki"], answer: 3, why: "Raba shi rukuni-rukuni yana sa dubawa ta yi sauƙi." },
      { objective: "O3", q: "Ya kamata a ɗauki magunguna:", options: ["A sake a cikin kayan da aka ba kamfanin jirgi", "A jakar hannunku, a kwalayensu na asali", "A gida", "A kayan aboki"], answer: 1, why: "Ku riƙe su tare da ku, a fili da sunayensu." },
      { objective: "O3", q: "Wane ne zai iya ba ku shawara kan tafiya da magunguna?", options: ["Kowane shafin intanet", "Mai sayar da maganinku (pharmacist)", "Tallar da ke tasowa (pop-up)", "Baƙo"], answer: 1, why: "Masu sayar da magani sun san magunguna." },
      { objective: "O4", q: "GPS yana bar wayarku ta:", options: ["Ɗauki hotuna", "Fassara harsuna", "Biya kuɗaɗe", "San inda kuke a taswira"], answer: 3, why: "GPS yana gano wurin da kuke." },
      { objective: "O4", q: "\"Transit\" a manhajar taswira yana nufin:", options: ["Bas da jirgin ƙasa", "Tafiya a ƙafa kawai", "Hawa jirgin sama", "Tuƙi kawai"], answer: 0, why: "Transit shi ne sufurin jama'a." },
      { objective: "O4", q: "Kwatancen hanya yana cin batiri, don haka ku ɗauki:", options: ["Katin shaida na biyu", "Ƙarin kalmomin sirri", "Caja ko batirin ajiya", "Kyamara"], answer: 2, why: "Jagorar hanya tana shanye batiri." },
      { objective: "O5", q: "Yanayin hira a manhajar fassara:", options: ["Yana kashe sauti", "Yana kiran gida", "Yana yin booking na otal", "Yana bar mutum biyu su yi magana bi da bi"], answer: 3, why: "Yana fassara gaba da baya." },
      { objective: "O5", q: "Sauke harshe kafin ku tafi yana bar manhajar ta yi aiki:", options: ["Da sauri a Wi-Fi kawai", "A gida kawai", "Ba tare da intanet ba (offline)", "Ba za ta taɓa yin aiki ba"], answer: 2, why: "Harsunan da aka sauke suna aiki ba tare da intanet ba." },
      { objective: "O6", q: "Raba wuri yana bar:", options: ["Baƙi su bi diddiginku", "Iyalin da kuka zaɓa su ga inda wayarku take", "Otal-otal su ƙara farashi", "Kamfanonin jirgi su soke tafiya"], answer: 1, why: "Mutanen da kuka zaɓa ne kaɗai za su iya gani." },
      { objective: "O6", q: "Wani kira ya ce kun ci kyautar tafiya amma dole ku biya wani kuɗi. Wannan:", options: ["Mai yiwuwa zamba ce", "Kyauta ce ta gaske", "Dokar haraji ce", "Abu ne na yau da kullum"], answer: 0, why: "Kyaututtukan da ke buƙatar biyan kuɗi zamba ne." },
      { objective: "O6", q: "Hanya mafi aminci ta yin booking na tafiya ita ce:", options: ["Ta shafukan intanet na hukuma ko wakilai amintattu", "Ta hanyoyin haɗi a cikin tes da ba ku zata ba", "Ta tallace-tallacen da ke tasowa (pop-up)", "Ta aika katin kyauta (gift card)"], answer: 0, why: "Shafukan hukuma suna kare ku daga zambar booking na bogi." },
      { objective: "O6", q: "A Wi-Fi na jama'a a filin jirgin sama, ku guji:", options: ["Karanta labarai", "Shigar da bayanan banki", "Duba yanayin sararin samaniya", "Kallon taswira"], answer: 1, why: "Wasu ma suna iya amfani da Wi-Fi na jama'a." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 8, 9, 11, 14, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Shiri mai sauƙi", objective: "O1", notYet: "Babu shirin kowace rana, ko ayyuka sun yi yawa ba tare da hutu ba.", meets: "Shirin kwana uku, rana-rana, a hankali tare da lokacin hutu.", exceeds: "Shirin yana kuma nuna wuraren zama ko hanyoyi masu sauƙin isa inda ake buƙata." },
      { name: "Jerin kayan tafiya", objective: "O3", notYet: "Babu jeri, ko babu magunguna ko katin shaida a ciki.", meets: "Jerin kayan tafiya a rukuni-rukuni da ke ɗauke da magunguna da katin shaida.", exceeds: "Yana nuna cewa magunguna da katin shaida suna jakar hannu, tare da jerin magunguna da lambar likita." },
      { name: "An tabbatar da bayanai", objective: "O2", notYet: "An tabbatar da bayanai ƙasa da uku, ko an tabbatar da su da AI kawai.", meets: "An tabbatar da bayanai uku a shafukan intanet na hukuma, kamar tsa.gov da shafin wurin da kansa.", exceeds: "Zai iya faɗin shafin da kowane bayani ya fito, kuma ya gyara duk abin da ba daidai ba." },
      { name: "An raba da iyali", objective: "O6", notYet: "Ba a raba shirin ba.", meets: "An raba shirin da wani a iyali.", exceeds: "An kuma yarda kan raba wuri don tafiyar ko lokacin tuntuɓa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi tafiya ko fita na yini ta amfani da shirinsu na AI cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka ce sun tabbatar da bayanan tafiya a shafukan hukuma ko sun guje wa zambar tafiya",
      "Masu koyo da suka fara wani kwas na Seniors and Technology (Tsofaffi da Fasaha) cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, manhajar taswira (Google Maps ko Apple Maps) da manhajar fassara",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Takarda da alƙalami, ko rubutu a waya, don shirin da jerin kayan tafiya",
      "Kusan minti 60 gaba ɗaya, a gajerun zama masu sauƙi: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku bar kowane mai koyo ya tsara tafiya ta gaske ko fita na yini da zai ji daɗinsa; hakan yana sa atisayen ya zama mai ma'ana.",
      "Ku nuna yadda ake tabbatar da bayani a tsa.gov da kuma a shafin wurin da kansa a babban allo.",
      "Ku yi atisayen kwatancen hanya da ɗan gajeren tafiya a ƙafa kusa da wurin taron, don masu koyo su ji juye-juyen da ake faɗa da murya.",
      "Ku tunatar da masu koyo cewa tambayoyin magani na mai sayar da maganinsu (pharmacist) ne, kuma su guji harkar banki a Wi-Fi na jama'a.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
