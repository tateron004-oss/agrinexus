"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-integration-strategy.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-integration-strategy-ha",
  lang: "ha",
  translationOf: "ai-integration-strategy",
  category: "Athletes",
  name: "Dabarun Shigar da AI cikin Ƙungiyarku",
  skills: "Duba shirin ƙungiya don AI, Saita manufofi da suka dace da babban burin ƙungiya, Rubuta dokar amfani da AI, Sarrafa haɗarin AI, Jagorantar mutane cikin canji, Gina taswirar aiki ta kwana 90",
  outcome: "rubuta shirin kwana 90 na shigar da AI cikin ƙungiya: duba shirinta, manufofi da suka dace da babban burinta, dokar amfani da AI mai shafi ɗaya, duba haɗari, shirin horo da sanarwa, da taswirar aiki mai mai alhakin kowane mataki da ranarsa.",
  about: [
    "Amfani da kayan AI ɗaya abu ne mai sauƙi. Amma shigar da AI cikin ƙungiya gaba ɗaya, ta yadda mutane za su yi amfani da shi da kyau, lafiya, kuma don dalilai masu kyau, yana buƙatar shiri. Wannan kwas ɗin yana ba ku wannan shirin, mataki-mataki.",
    "An yi shi ne don 'yan wasa da ke gina sunansu (brand) ko kasuwanci, da ƙungiyoyi, makarantun wasanni da gasanni da ke kewaye da su, don masu ƙananan kasuwanci, da kuma shugabannin ƙungiyoyin sa-kai (nonprofit) da kwamitocinsu. Misalai sun haɗa da makarantar ƙwallon kwando ta matasa, kasuwancin horo da kafofin yaɗa labarai na ɗan wasa ƙwararre, gidan abinci na iyali, da ƙungiyar sa-kai ta al'umma.",
    "Za ku gina shirin AI na kwana 90 na gaske don ƙungiya ɗaya yayin da kuke ci gaba. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta shirin kwana 90 na shigar da AI don ƙungiya ta gaske ko ta atisaye (misali kasuwancin sunan ɗan wasa, makarantar wasanni, ƙaramin kasuwanci ko ƙungiyar sa-kai). Ku saka makin shiri, manufofi uku da suka dace da babban burin ƙungiyar, dokar amfani da AI mai shafi ɗaya, teburin haɗari, shirin horo da sanarwa, da taswirar aiki mai mai alhakin kowane mataki da ranarsa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa da ke gudanar da kasuwancin sunansu, da masu horarwa, daraktocin makarantun wasanni, wakilai (agents) da ma'aikatan da ke kewaye da su, da kuma shugabannin ƙananan kasuwanci da ƙungiyoyin sa-kai da dole su yanke yadda ƙungiyarsu za ta yi amfani da AI.",
    startingPoint: "Sun san ƙungiyarsu ko sunansu sosai, kuma wataƙila suna amfani da kayan AI da kansu. Kaɗan ne suka taɓa rubuta doka, teburin haɗari ko shirin canji, ko suka gabatar da sabon kayan aiki ga ƙungiya gaba ɗaya.",
    gap: "Ma'aikata da 'yan wasa sun riga sun fara amfani da AI, sau da yawa ba tare da wata doka ba, kuma bayanan sirri na lafiya, kwangila ko na yara ƙanana na iya fita. Masu koyo suna buƙatar shirin kwana 90 mai amfani da ke haɗa AI da babban burin ƙungiya, ke saita dokoki a sarari, ke sarrafa haɗari kuma ke tafiya tare da mutane, don AI ya taimaka maimakon ya jawo matsalolin doka, sirri ko amana.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kalmomin tsari a karon farko",
      "Na'urori: waya ko kwamfuta; takarda ko tebur na lissafi (spreadsheet) don shirin",
      "Lokaci: darussa na minti 5, kusan minti 60 gaba ɗaya, da ƙarin lokacin rubuta shirin",
      "Sirri: bayanan lafiya da ƙwazon 'yan wasa, bayanan yara ƙanana, kwangiloli da bayanan masu bayar da gudummawa an kiyaye su",
      "Ba shawarar shari'a ba: kwangiloli, yarjejeniyar tallatawa (endorsement) da dokokin bayanai a kai su ga lauya ƙwararre"
    ],
    prerequisites: "Babu. Kwas ɗin \"AI in Business: Strategies and Applications\" (AI a Kasuwanci: Dabaru da Amfani) kwas ne mai amfani da za a fara da shi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don ƙungiya ta gaske ko ta atisaye", action: "ba da makin shirinta don AI daga 1 zuwa 5 a fannonin shugabanci, mutane, bayanai, hanyoyin aiki da dokoki", standard: "tare da jimla ɗaya ta shaida ga kowane maki da gyara ga mafi ƙanƙanta biyu" },
    { id: "O2", condition: "Idan aka ba ku babban burin ƙungiyar", action: "rubuta manufofi uku na SMART don AI da ke taimakon babban burin", standard: "kowanne da lamba da rana" },
    { id: "O3", condition: "Don mutanen da za su yi amfani da AI", action: "rubuta dokar amfani da AI mai shafi ɗaya", standard: "da ta ƙunshi kayan da aka amince da su, abin da ba za a taɓa sakawa ba, dubawar mutum, bayyanawa, da mutumin da za a tuntuɓa" },
    { id: "O4", condition: "Don kowane amfani da AI da aka shirya", action: "gina teburin haɗari ta amfani da Govern, Map, Measure da Manage", standard: "da yiwuwa, tasiri, matakin kariya da wanda ke dubawa ga kowane haɗari" },
    { id: "O5", condition: "Don ƙungiyar da za ta fara amfani da AI", action: "rubuta shirin horo da sanarwa", standard: "da ke faɗin dalili, abin da ake yi, da amfaninsa a gare su, kuma ya ambaci aƙalla zakaran AI ɗaya" },
    { id: "O6", condition: "Idan kuna da manufofinku, dokarku, haɗarurruka da horo", action: "ƙirƙirar taswirar aiki ta kwana 90 a matakai uku", standard: "da mai alhakin kowane mataki da ranar kammalawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shirya wa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Duba shirin ƙungiyarku don AI",
          minutes: 5,
          goal: "Ba da makin shirin ƙungiya don AI a fannoni biyar.",
          text: [
            "Kafin ku sayi kayan aiki, ku duba shiri. Yawancin ƙoƙarin AI suna faɗuwa ba don kayan ba shi da kyau ba, sai don mutane, bayanai ko dokoki ba su shirya ba.",
            "Ku ba da maki ga fannoni biyar daga 1 (ba a shirya ba) zuwa 5 (an shirya). Shugabanci: shugabanni suna goyon baya kuma suna ware lokaci? Mutane: ma'aikata, 'yan wasa ko masu sa-kai suna da ƙwarewar fasaha ta asali? Bayanai: bayananku suna cikin tsari kuma an ajiye su lafiya? Hanyoyin aiki: an rubuta manyan ayyukanku? Dokoki: kuna da dokokin sirri da tsaro?",
            "Ƙananan maki ba dalilin tsayawa ba ne. Suna nuna muku inda za ku fara. Kasuwancin ɗan wasa mai ƙwarewa sosai a kafofin sada zumunta amma takardunsa a warwatse, zai iya farawa da tsara fayiloli kafin ya yi amfani da AI a kansu."
          ],
          steps: ["Ku ba da maki ga shugabanci, mutane, bayanai, hanyoyin aiki da dokoki daga 1 zuwa 5.", "Ku rubuta jimla ɗaya ta shaida ga kowane maki.", "Ku zagaye maki biyu mafi ƙanƙanta.", "Ku rubuta gyara ɗaya ga kowane ƙaramin maki."],
          words: [["Shiri (readiness)", "yadda ƙungiya ta shirya don fara wani sabon abu."], ["Bayanai (data)", "bayanan da ƙungiya ke ajiyewa, kamar jadawali, takardu da fayiloli."]],
          slides: [
            { title: "Me yasa za a duba shiri", bullets: ["Kayan aiki ba safai suke jawo faɗuwa ba", "Mutane, bayanai ko dokokin da ba su shirya ba ne ke jawowa"] },
            { title: "Ku ba da maki ga fannoni biyar, 1 zuwa 5", bullets: ["Shugabanci da mutane", "Bayanai da hanyoyin aiki", "Dokokin sirri da tsaro"] },
            { title: "Ƙananan maki suna nuna inda za a fara", bullets: ["Ku fara gyara abubuwan asali", "Misali: ku tsara fayiloli kafin amfani da AI a kansu"] }
          ],
          tryIt: "Ku zaɓi ƙungiya ta gaske ko ta atisaye. Ku ba da makin shirinta a fannoni biyar tare da jimla ɗaya ta shaida ga kowanne, sannan ku faɗi gyaran farko ga maki biyu mafi ƙanƙanta.",
          youCanNow: "ba da makin shirin ƙungiya don AI da gano inda za a fara.",
          quickCheck: [
            { objective: "O1", q: "Wace tambaya ce ke duba fannin \"hanyoyin aiki\"?", options: ["Shugabanni suna goyon bayan AI?", "An rubuta manyan ayyukanku?", "An ajiye bayanai lafiya?", "Kuna da dokokin sirri?"], answer: 1, why: "Hanyoyin aiki suna tambaya ko an rubuta manyan ayyuka." },
            { objective: "O1", q: "Makarantar wasanninku ta sami 2 a bayanai da 5 a mutane. Me za ku yi?", options: ["Ku dakatar da shirin AI gaba ɗaya", "Ku sayi kayan AI mafi ci gaba nan take", "Ku yi watsi da makin bayanai", "Ku fara da gyara fannin bayanai, kamar tsara takardu"], answer: 3, why: "Ƙananan maki suna nuna inda za a fara, ba dalilin tsayawa ba ne." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Saita manufofin AI da suka dace da babban buri",
          minutes: 5,
          goal: "Rubuta manufofi uku na AI masu auna da ke taimakon babban burin ƙungiya.",
          text: [
            "AI ya kamata ya taimaki babban burin ƙungiya, ba akasin haka ba. Ku fara da abin da ƙungiyar take don shi: horar da matasan 'yan wasa, haɓaka suna, ciyar da mutane, sayar da kayayyaki masu kyau.",
            "Sannan ku tambayi inda AI zai iya taimakon wannan buri: ƙarin lokaci da 'yan wasa ko abokan ciniki, saurin amsa wa iyalai ko masu saye, amfani da bayanai da kyau, rage kuɗaɗe. Ku mayar da kowanne manufa mai auna: \"Rage lokacin aikin ofis na masu horarwa a mako daga awa 6 zuwa 3 kafin Maris.\"",
            "Ku yi amfani da gwajin SMART: takamaimai (specific), mai auna (measurable), mai yiwuwa (achievable), mai dacewa da babban buri (relevant) da mai ƙayyadadden lokaci (time-bound). Manufofi uku sun isa don kwana 90."
          ],
          steps: ["Ku rubuta babban burin ƙungiyar a jimla ɗaya.", "Ku jera hanyoyi uku da AI zai iya taimaka masa.", "Ku mayar da kowanne manufar SMART mai lamba da rana."],
          words: [["Babban buri (mission)", "babban dalilin da ƙungiya take don shi."], ["Manufar SMART", "manufa takamaimai, mai auna, mai yiwuwa, mai dacewa kuma mai ƙayyadadden lokaci."]],
          slides: [
            { title: "Babban buri da farko", bullets: ["AI yana taimakon babban buri", "Ba akasin haka ba"] },
            { title: "Inda AI zai iya taimakawa", bullets: ["Ƙarin lokaci da 'yan wasa ko abokan ciniki", "Saurin amsawa", "Rage kuɗaɗe, amfani da bayanai da kyau"] },
            { title: "Manufofin SMART", bullets: ["Takamaimai, mai auna, mai yiwuwa", "Mai dacewa da babban buri, mai ƙayyadadden lokaci", "Manufofi uku don kwana 90"] }
          ],
          tryIt: "Ku rubuta babban burin ƙungiyar a jimla ɗaya, da manufofin AI uku na SMART da ke taimaka masa.",
          youCanNow: "saita manufofin AI masu auna da ke taimakon babban burin ƙungiya.",
          quickCheck: [
            { objective: "O2", q: "A cikin SMART, me \"R\" yake nufi?", options: ["Mai dacewa da babban buri (relevant)", "Mai sauri", "Mai maimaituwa", "Wanda doka ta tilasta"], answer: 0, why: "Manufar SMART tana dacewa da babban burin ƙungiya." },
            { objective: "O2", q: "Sunan wani ɗan wasa yana son \"ƙara amfani da AI\". Ta yaya za ku mayar da shi manufar SMART?", options: ["\"Yi amfani da kayan AI da yawa.\"", "\"Zama suna mafi kyau a intanet.\"", "\"Amsa imel na masoya da masu ɗaukar nauyi cikin awa 24, maimakon kwana 3, kafin Yuni.\"", "\"Gwada AI wata rana.\""], answer: 2, why: "Takamaimai ce, mai auna ce, ta dace da babban buri kuma tana da rana." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta dokar amfani da AI mai shafi ɗaya",
          minutes: 6,
          goal: "Rubuta gajeriyar dokar amfani da AI da ke faɗa wa mutane abin da aka yarda, abin da ba a yarda ba, da wanda za a tambaya.",
          text: [
            "Dokar amfani da AI gajerun dokoki ne na yadda mutane a ƙungiya za su yi amfani da AI. Idan babu ita, mutane suna yin tsammani, kuma wani zai iya saka bayanan sirri na ɗan wasa, abokin ciniki ko mai bayar da gudummawa a cikin kayan AI na kyauta.",
            "Ku bar ta shafi ɗaya, kuma ta ƙunshi: kayan da aka amince da su; abin da ba za a taɓa saka wa AI ba (takardun lafiya, lambobin Social Security da na banki, kwangiloli na sirri, bayanan yara, kalmomin sirri); dubawar mutum kafin a wallafa ko a aika duk wani abin da AI ya yi; gaskiya game da amfani da AI inda yake da muhimmanci; da wanda za a tambaya idan akwai tambayoyi.",
            "Ku ƙara dokoki na musamman don fannin ku. Ƙungiyoyin wasanni su kiyaye bayanan lafiya da ƙwazon 'yan wasa da bayanan yara ƙanana. Ƙungiyoyin sa-kai su kiyaye bayanan masu bayar da gudummawa da na waɗanda suke yi wa hidima. Ku nemi shawarar shari'a game da kwangiloli, yarjejeniyar tallatawa da dokokin bayanai da suka shafe ku."
          ],
          steps: ["Ku jera kayan AI da aka amince da su.", "Ku jera bayanan da ba za a taɓa saka wa AI ba.", "Ku tilasta cewa mutum ya duba abin da AI ya yi kafin a aika ko a wallafa shi.", "Ku faɗi lokacin da ya kamata a bayyana amfani da AI.", "Ku ambaci mutumin da za a tuntuɓa don tambayoyi.", "Ku saka ranar sake duba dokar."],
          words: [["Doka (policy)", "ƙa'idar da aka rubuta wadda kowa a ƙungiya yake bi."], ["Dubawar mutum (human review)", "mutum ya duba abin da AI ya yi kafin a yi amfani da shi."]],
          slides: [
            { title: "Me yasa ake buƙatar doka", bullets: ["Mutane sun daina tsammani", "Bayanan sirri ba sa shiga kayan AI na kyauta"] },
            { title: "Shafi ɗaya ya ƙunshi", bullets: ["Kayan da aka amince da su", "Abin da ba za a taɓa saka wa AI ba", "Dubawar mutum da wanda za a tambaya"] },
            { title: "Dokoki na musamman na fanni", bullets: ["Wasanni: bayanan lafiyar 'yan wasa, yara ƙanana", "Sa-kai: bayanan masu gudummawa da abokan hidima", "Shawarar shari'a don kwangiloli da dokokin bayanai"] }
          ],
          tryIt: "Ku rubuta dokar amfani da AI mai shafi ɗaya don ƙungiyarku mai dukkan sassa shida. Ku nemi mataimakin AI ya duba ko akwai abin da bai fito fili ba, sannan ku gyara ta da kanku.",
          youCanNow: "rubuta gajeriyar dokar amfani da AI da ke kare mutane da bayanai.",
          quickCheck: [
            { objective: "O3", q: "Me yasa ƙungiya take buƙatar dokar amfani da AI?", options: ["Don hana duk wata fasaha", "Don mayar da kayan AI kyauta", "Don maye gurbin littafin dokokin ma'aikata", "Don kada mutane su yi tsammani su saka bayanan sirri a kayan AI"], answer: 3, why: "Idan babu doka, mutane suna yin tsammani, kuma bayanan sirri na ɗan wasa, abokin ciniki ko mai gudummawa na iya fita." },
            { objective: "O3", q: "Wani mai horarwa yana son AI ya rubuta daftarin kwangilar ɗaukar nauyi. Me dokarku za ta faɗa?", options: ["Ku aika daftarin AI ga mai ɗaukar nauyin nan take", "Ku nemi shawarar shari'a kan kwangiloli; mutum ya duba duk abin da AI ya yi", "Babu wata doka da ta shafi kwangiloli", "Ku saka cikakkiyar kwangilar sirri a kayan AI na kyauta"], answer: 1, why: "Kwangiloli suna buƙatar shawarar shari'a, kuma mutum yana duba abin da AI ya yi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shirya wa AI",
        questions: [
          { objective: "O1", q: "Me yasa za a duba shiri kafin a sayi kayan AI?", options: ["Kayan aiki koyaushe ba su da kyau", "Doka ce ta tilasta", "Mutane, bayanai ko dokokin da ba su shirya ba ne ke jawo yawancin faɗuwa", "Don a kashe ƙarin kuɗi"], answer: 2, why: "Gibin shiri, ba kayan aiki ba, ne yawanci ke jawo matsala." },
          { objective: "O1", q: "Wata makaranta tana da takardu a warwatse, ba a tsara su ba. Mene ne mataki na farko mai hikima?", options: ["Ku tsara fayiloli kafin amfani da AI a kansu", "Ku saka komai a AI kamar yadda yake", "Ku haƙura da AI", "Ku sayi kayan aiki mafi tsada"], answer: 0, why: "Bayanai a tsare suna sa AI ya yi amfani kuma ya fi aminci." },
          { objective: "O2", q: "Wace ce manufar SMART?", options: ["\"Ƙara amfani da AI\"", "\"Zama na zamani\"", "\"Gwada abubuwa\"", "\"Rage lokacin aikin ofis na masu horarwa a mako daga awa 6 zuwa 3 kafin Maris\""], answer: 3, why: "Takamaimai ce, mai auna ce kuma mai ƙayyadadden lokaci." },
          { objective: "O3", q: "Me ya kamata dokar amfani da AI ta faɗa game da takardun lafiyar 'yan wasa?", options: ["A saka su ko'ina", "Kada a taɓa saka su a kayan AI da ba a amince da su gare su ba", "A wallafa su a intanet", "A raba su da masu ɗaukar nauyi"], answer: 1, why: "Bayanan lafiya na sirri ne kuma dole a kiyaye su." },
          { objective: "O3", q: "Wane ne ya kamata ya duba abin da AI ya yi kafin a wallafa shi?", options: ["Babu kowa", "Mutum", "AI da kansa kaɗai", "Kowane mabiyi a intanet"], answer: 1, why: "Dubawar mutum babbar doka ce a cikin dokar." }
        ]
      }
    },
    {
      name: "Babi na 2: Gabatar da AI lafiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Sarrafa haɗarin AI da tsari mai sauƙi",
          minutes: 5,
          goal: "Gina teburin haɗari don amfani da AI, da ba kowane haɗari matakin kariya.",
          text: [
            "Hukumar National Institute of Standards and Technology (NIST) ta Amurka tana wallafa tsarin sarrafa haɗarin AI kyauta, wanda ba tilas ba ne (AI Risk Management Framework). Manyan ayyukansa huɗu su ne Govern, Map, Measure da Manage. Kuna iya amfani da su da kalmomi masu sauƙi ko a ƙaramar ƙungiya.",
            "Govern (gudanarwa): wane ne ke da alhaki, kuma mene ne dokokin (dokarku). Map (taswira): ga kowane amfani da AI, me zai iya lalacewa, kuma wa zai iya cutuwa. Measure (auna): yadda za ku lura da matsaloli, kamar duba wasu amsoshi lokaci-lokaci. Manage (sarrafa): abin da za ku yi game da kowane haɗari, kamar dubawar mutum ko rashin amfani da AI don wannan aikin.",
            "Haɗarurrukan AI da aka saba: bayanai marasa gaskiya, fitar bayanan sirri, rashin adalci ga mutane, matsalolin haƙƙin mallaka (copyright) da ɓata suna. Ku rubuta kowanne a teburin haɗari tare da yadda yake iya faruwa, yadda zai yi muni, da matakin kariya."
          ],
          steps: ["Ku jera kowane amfani da AI da aka shirya.", "Ga kowanne, ku rubuta abin da zai iya lalacewa da wanda zai iya cutuwa.", "Ku auna yiwuwa da tasiri: ƙasa, matsakaici ko sama.", "Ku ƙara matakin kariya ga kowane haɗari.", "Ku ambaci wanda zai duba cewa matakin kariyar yana aiki."],
          words: [["NIST", "hukumar National Institute of Standards and Technology ta Amurka, wadda ke wallafa ƙa'idoji da jagororin fasaha."], ["Teburin haɗari", "jerin haɗarurruka tare da yadda kowanne yake iya faruwa, yadda yake da tsanani, da abin da za ku yi game da shi."]],
          slides: [
            { title: "NIST AI RMF: ayyuka huɗu", bullets: ["Govern: matsayi da dokoki", "Map: me zai iya lalacewa", "Measure: yadda kuke lura", "Manage: abin da kuke yi game da shi"] },
            { title: "Haɗarurrukan AI da aka saba", bullets: ["Bayanai marasa gaskiya da fitar bayanai", "Rashin adalci ga mutane", "Haƙƙin mallaka da suna"] },
            { title: "Teburin haɗari mai sauƙi", bullets: ["Haɗari, yiwuwa, tasiri", "Matakin kariya da wanda ke dubawa"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Ku yi teburin haɗari don amfani biyu na AI a shirinku, da aƙalla haɗarurruka uku ga kowanne, makin yiwuwa da tasiri, matakin kariya da mutumin da ke dubawa.",
          youCanNow: "gano haɗarurrukan AI da ba su matakan kariya ta amfani da ayyuka huɗu na NIST.",
          quickCheck: [
            { objective: "O4", q: "A tsarin NIST, wane aiki ne ya shafi abin da kuke yi game da kowane haɗari?", options: ["Govern", "Map", "Manage", "Measure"], answer: 2, why: "Manage shi ne matakin da kuke ɗauka game da kowane haɗari, kamar dubawar mutum." },
            { objective: "O4", q: "AI zai rubuta bayanin raunin 'yan wasa ga iyaye. Wane matakin kariya ya dace da haɗarin bayanai marasa gaskiya?", options: ["Mai kula da lafiyar 'yan wasa ko mai horarwa ya duba kowane bayani kafin a aika", "A aika su da sauri", "A ƙara kayan AI", "A daina faɗa wa iyaye komai"], answer: 0, why: "Dubawar mutum kafin aikawa tana sarrafa haɗarin bayanai marasa gaskiya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Jagorantar mutane cikin canji",
          minutes: 5,
          goal: "Rubuta shirin horo da sanarwa da ke taimakon mutane su fara amfani da AI.",
          text: [
            "Mutane suna damuwa game da AI: Zai maye gurbina? Zan zama abin dariya? An yarda da shi? Yin watsi da waɗannan damuwoyi yana rage saurin komai. Ku tattauna su a fili.",
            "Ku bayyana dalilin (babban buri da manufofi), abin da ake yi (waɗanne kayan aiki da dokoki) da amfaninsa a gare ni (ƙarancin aikin ofis, ƙarin lokacin horarwa, abokan ciniki ko iyali). Ku zaɓi zakarun AI: mutum ɗaya ko biyu da ke fara koyo kuma suke taimakon wasu.",
            "Ku yi horo kaɗan-kaɗan: zaman minti 30 na aiki da hannu ga kowane kayan aiki, takardar taimako mai shafi ɗaya ta prompts masu kyau, da wurin yin tambayoyi. Ku yi murnar nasarorin farko a tarurrukan ƙungiya."
          ],
          steps: ["Ku rubuta gajeren saƙo: dalili, abin da ake yi, da amfaninsa a gare su.", "Ku zaɓi zakarun AI ɗaya ko biyu.", "Ku shirya zaman horo na minti 30 na aiki da hannu.", "Ku yi takardar taimako ta prompts mai shafi ɗaya.", "Ku raba nasarorin farko a tarurruka."],
          words: [["Sarrafa canji (change management)", "taimakon mutane su bar tsohuwar hanyar aiki zuwa sabuwa."], ["Zakaran AI (AI champion)", "ɗan ƙungiya da ke fara koyo kuma yake taimakon wasu."]],
          slides: [
            { title: "Ku tattauna damuwoyin", bullets: ["Zai maye gurbina?", "Zan zama abin dariya?", "An yarda da shi?"] },
            { title: "Ku yi sanarwa a sarari", bullets: ["Dalili: babban buri da manufofi", "Abin da ake yi: kayan aiki da dokoki", "Amfaninsa a gare su"] },
            { title: "Ku yi horo kaɗan-kaɗan", bullets: ["Zaman minti 30 na aiki da hannu", "Takardar taimako ta prompts da zakarun AI", "Ku yi murnar nasarorin farko"] }
          ],
          tryIt: "Ku rubuta sanarwa mai jimloli biyar ga ƙungiyarku, 'yan wasa, ma'aikata ko masu sa-kai game da shirin AI, da jadawalin horo na watan farko.",
          youCanNow: "shirya horo da sanarwa da ke taimakon mutane su fara amfani da AI.",
          quickCheck: [
            { objective: "O5", q: "Mene ne takardar taimako ta prompts?", options: ["Jerin ma'aikatan da aka hana", "Jerin prompts masu kyau a shafi ɗaya da mutane za su iya kwafa", "Jarabawar ba wa ma'aikata maki", "Hanyar sirri ta kauce wa dokar"], answer: 1, why: "Takarda mai shafi ɗaya ta prompts masu kyau tana taimakon mutane su fara da sauri." },
            { objective: "O5", q: "Ma'aikata suna jin tsoro kuma suna guje wa sabon kayan AI. Me za ku yi?", options: ["Ku tilasta musu amfani da shi ba tare da horo ba", "Ku jira su gane shi da kansu", "Ku cire kayan ba tare da faɗa wa kowa ba", "Ku tattauna damuwoyi a fili, ku yi gajeren zaman aiki da hannu, ku raba nasarorin farko"], answer: 3, why: "Tattaunawa a fili, ƙaramin horo na aiki da hannu da nasarorin farko suna taimakon mutane su fara amfani da AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gina taswirar aiki ta kwana 90",
          minutes: 5,
          goal: "Mayar da manufofi, doka, haɗarurruka da horo zuwa taswirar aiki ta kwana 90 mai masu alhaki da ranaku.",
          text: [
            "Taswirar aiki (roadmap) tana jera komai bisa tsari da ranaku. Ku raba kwana 90 zuwa matakai uku na kwana 30. Kwana 1-30: tushe (an amince da doka, an tsara fayiloli, an horar da zakaru). Kwana 31-60: gwaje-gwaje (an gwada ƙananan amfani ɗaya ko biyu na AI da ma'auni). Kwana 61-90: dubawa da faɗaɗawa (a yanke abin da za a riƙe, a faɗaɗa ko a dakatar).",
            "Kowane mataki yana buƙatar mai alhaki da ranar kammalawa. Matakin da ba shi da mai alhaki yawanci ba ya faruwa.",
            "Ku shirya zaman bibiya kowane mako biyu, da dubawa a rana ta 90 bisa manufofinku na SMART. Sannan ku rubuta shirin kwana 90 na gaba. Kayan AI da dokoki suna canjawa da sauri, don haka ku sake duba dokar aƙalla kowane wata shida."
          ],
          steps: ["Kwana 1-30: tushe.", "Kwana 31-60: gwaje-gwaje da ma'auni.", "Kwana 61-90: dubawa, sannan faɗaɗawa ko dakatarwa.", "Ku ba kowane mataki mai alhaki da rana.", "Ku saka zaman bibiya kowane mako biyu da dubawar rana ta 90."],
          words: [["Taswirar aiki (roadmap)", "shirin da ke nuna matakai bisa tsari da ranaku."], ["Mai alhaki (owner)", "mutumin da ke da alhakin ganin an kammala wani mataki."]],
          slides: [
            { title: "Matakai uku na kwana 30", bullets: ["1-30: tushe", "31-60: gwaje-gwaje", "61-90: dubawa da faɗaɗawa"] },
            { title: "Masu alhaki da ranaku", bullets: ["Kowane mataki yana da mai alhaki", "Kowane mataki yana da ranar kammalawa"] },
            { title: "Ku riƙe shirin da rai", bullets: ["Zaman bibiya kowane mako biyu", "Dubawar rana ta 90 bisa manufofi", "Sake duba dokar kowane wata shida"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina taswirar aikinku ta kwana 90 a tebur mai mataki, aiki, mai alhaki da rana, sannan ku haɗa makin shirinku, manufofi, doka, teburin haɗari da shirin horo don kammala shirinku na shigar da AI.",
          youCanNow: "rubuta cikakken shirin kwana 90 don shigar da AI cikin ƙungiya lafiya.",
          quickCheck: [
            { objective: "O6", q: "Me ke faruwa a kwana 61-90 na taswirar aiki?", options: ["A duba gwaje-gwajen a yanke abin da za a riƙe, a faɗaɗa ko a dakatar", "A rubuta bayanin babban buri", "A sayi kowane kayan aiki", "A horar da zakarun farko"], answer: 0, why: "Mataki na ƙarshe yana duba gwaje-gwaje kuma yana faɗaɗa su ko dakatar da su." },
            { objective: "O6", q: "Taswirar aikinku ta ce \"horar da ma'aikata\" ba tare da suna ko rana ba. Me za ku ƙara?", options: ["Babu komai; zai faru", "Bayani mai tsawo", "Mai alhaki da ranar kammalawa", "Taswira ta biyu"], answer: 2, why: "Matakin da ba shi da mai alhaki da rana yawanci ba a kammala shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gabatar da AI lafiya",
        questions: [
          { objective: "O4", q: "Mene ne manyan ayyuka huɗu na NIST AI Risk Management Framework?", options: ["Buy, Build, Sell, Repeat", "Plan, Do, Check, Act", "Read, Write, Test, Ship", "Govern, Map, Measure, Manage"], answer: 3, why: "NIST ya ambaci Govern, Map, Measure da Manage." },
          { objective: "O4", q: "Doka ta tilasta wa ƙananan ƙungiyoyi su bi NIST AI Risk Management Framework?", options: ["A'a, NIST ya ce ba tilas ba ne", "Eh, da tara mai yawa", "Ga 'yan wasa kaɗai", "A Kenya kaɗai"], answer: 0, why: "NIST ya bayyana cewa an yi shi ne don amfani ba tare da tilastawa ba." },
          { objective: "O5", q: "Wani mai horarwa yana damuwa cewa AI zai maye gurbinsa. Mene ne amsa mafi kyau?", options: ["Ku yi watsi da shi", "Ku ce masa ya daina tambaya", "Ku bayyana a fili yadda AI ke ba da ƙarin lokacin horarwa, da abin da ba zai canja ba", "Ku ɓoye shirin"], answer: 2, why: "Tattauna damuwoyi a fili yana hanzarta karɓar canji." },
          { objective: "O5", q: "Mene ne zakaran AI?", options: ["AI da ke cin wasanni", "Mai tallatawa a intanet da ake biya", "Kayan aiki mafi tsada", "Ɗan ƙungiya da ke fara koyo kuma yake taimakon wasu"], answer: 3, why: "Zakaru suna yaɗa ƙwarewa da ƙarfin gwiwa." },
          { objective: "O6", q: "Wani mataki a taswirar aiki ba shi da mai alhaki. Me yawanci ke faruwa?", options: ["Yana kammaluwa da wuri", "AI ne zai yi shi", "Ba a kammala shi", "Babu abin da ke canjawa"], answer: 2, why: "Matakai suna buƙatar mai alhaki kafin su faru." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Dabarun Shigar da AI cikin Ƙungiyarku",
    questions: [
      { objective: "O1", q: "Yawancin ƙoƙarin AI suna faɗuwa saboda:", options: ["Kayan aiki ba sa aiki kwata-kwata", "Mutane, bayanai ko dokoki ba su shirya ba", "AI ya saɓa wa doka", "Kwamfutoci suna da jinkiri sosai"], answer: 1, why: "Gibin shiri ne ke jawo yawancin faɗuwa." },
      { objective: "O1", q: "Wanne ne ɗaya daga cikin fannoni biyar na shiri?", options: ["Bayanai", "Launukan ƙungiya", "Girman ofis", "Farashin hannun jari"], answer: 0, why: "Shugabanci, mutane, bayanai, hanyoyin aiki da dokoki." },
      { objective: "O1", q: "Ƙaramin makin shiri yana nufin:", options: ["A tsaya har abada", "A yi watsi da shi", "A fara da gyara wannan fanni", "A sayi ƙarin kayan aiki"], answer: 2, why: "Ƙananan maki suna nuna inda za a fara." },
      { objective: "O2", q: "Manufofin AI ya kamata su dace da:", options: ["Babban burin ƙungiya", "Abin da masu gasa suke wallafawa", "Sabon salo na zamani", "Babu wani abu na musamman"], answer: 0, why: "AI yana taimakon babban buri." },
      { objective: "O2", q: "SMART yana nufin:", options: ["Simple, modern, automatic, rapid, technical", "Smart, mobile, AI, robot, tech", "Sales, marketing, admin, retail, tax", "Specific, measurable, achievable, relevant, time-bound (takamaimai, mai auna, mai yiwuwa, mai dacewa, mai ƙayyadadden lokaci)"], answer: 3, why: "Waɗannan su ne gwaje-gwaje biyar na SMART." },
      { objective: "O2", q: "Manufofi nawa kwas ɗin ya ba da shawara don kwana 90?", options: ["Talatin", "Uku", "Ɗari", "Babu ko ɗaya"], answer: 1, why: "Manufofi uku suna sa shirin ya mai da hankali." },
      { objective: "O3", q: "Dokar amfani da AI ita ce:", options: ["Lambar lasisin manhaja", "Gajerun dokoki na yadda mutane za su yi amfani da AI", "Shirin inshora", "Rubutun talla"], answer: 1, why: "Tana faɗa wa mutane abin da aka yarda da wanda ba a yarda ba." },
      { objective: "O3", q: "Wanne ne kada a taɓa saka shi a kayan AI da ba a amince da shi ba?", options: ["Jadawalin atisaye na gama-gari", "Ranar taron jama'a", "Misalin rubutun kafofin sada zumunta", "Bayanan lafiyar ɗan wasa ƙarami"], answer: 3, why: "Bayanan lafiya da bayanan yara ƙanana na sirri ne sosai." },
      { objective: "O3", q: "A ina ya kamata ƙungiya ta nemi shawara kan kwangilolin tallatawa da dokokin bayanai?", options: ["Lauya ƙwararre", "Hira da AI kawai", "Sharhi a kafofin sada zumunta", "Mai gasa"], answer: 0, why: "Tambayoyin shari'a suna buƙatar ƙwararre." },
      { objective: "O4", q: "A kalmomin NIST, yanke wanda ke da alhaki da mene ne dokokin shi ne:", options: ["Map", "Measure", "Govern", "Manage"], answer: 2, why: "Govern ya shafi matsayi da dokoki." },
      { objective: "O4", q: "Jera abin da zai iya lalacewa a kowane amfani da AI shi ne:", options: ["Govern", "Manage", "Measure", "Map"], answer: 3, why: "Map yana gano haɗarurruka da wanda zai iya cutuwa." },
      { objective: "O4", q: "Duba wasu amsoshin AI kowane mako misali ne na:", options: ["Govern", "Map", "Measure", "Babban buri"], answer: 2, why: "Measure shi ne yadda kuke lura da matsaloli." },
      { objective: "O4", q: "Teburin haɗari ya ƙunshi:", options: ["Farashin kayan aiki kawai", "Haɗari, yiwuwa, tasiri, matakin kariya da wanda ke dubawa", "Ƙididdigar 'yan wasa", "Sunayen asusun kafofin sada zumunta"], answer: 1, why: "Waɗannan ginshiƙai suna sa a iya sarrafa haɗarurruka." },
      { objective: "O4", q: "Wanne ne haɗarin AI da aka saba?", options: ["Rashin adalci ga mutane", "Yawan lokacin hutu", "Amsoshi mafi kyau", "Rage kuɗaɗe"], answer: 0, why: "AI zai iya nuna rashin adalci ga mutane idan ba a duba shi ba." },
      { objective: "O5", q: "\"Amfaninsa a gare ni\" a sanarwar canji yana nufin:", options: ["Ƙarin albashi kawai", "Ribar mai sayar da kayan", "Yadda AI ke taimakon mutanen da ake neman su yi amfani da shi", "Sashen doka a kwangila"], answer: 2, why: "Mutane suna karɓar canji idan sun ga amfaninsa." },
      { objective: "O5", q: "Hanya mai kyau ta horar da ma'aikata kan AI ita ce:", options: ["Gajerun zama na aiki da hannu da takardar taimako ta prompts", "Lacca ɗaya ta kwana uku ba tare da atisaye ba", "Babu horo", "Takardar sanarwa ba tare da misalai ba"], answer: 0, why: "Ƙaramin horo na aiki da hannu ya fi aiki." },
      { objective: "O6", q: "Kwana 1-30 na taswirar aiki suna mai da hankali kan:", options: ["Faɗaɗawa ko'ina", "Dubawar ƙarshe", "Korar ma'aikata", "Tushe: doka, fayiloli, zakaru"], answer: 3, why: "Tushe ne yake zuwa da farko." },
      { objective: "O6", q: "Kwana 31-60 na taswirar aiki suna mai da hankali kan:", options: ["Rubuta babban buri", "Ƙananan gwaje-gwaje da ma'auni", "Babu komai", "Sayen kowane kayan aiki"], answer: 1, why: "Mataki na tsakiya yana gwada amfanin AI." },
      { objective: "O6", q: "Sau nawa ya kamata a yi zaman bibiya a cikin kwana 90?", options: ["Sau ɗaya a shekara", "Kowane mako biyu", "Ba sau ɗaya ba", "Kowace awa"], answer: 1, why: "Zaman bibiya akai-akai yana riƙe shirin a kan hanya." },
      { objective: "O6", q: "Sau nawa ya kamata a sake duba dokar AI?", options: ["Ba sau ɗaya ba", "Kowace shekara goma", "Sai bayan wata badaƙala", "Aƙalla kowane wata shida"], answer: 3, why: "Kayan AI da dokoki suna canjawa da sauri." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      3,
      4,
      7,
      9,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Shiri da manufofi",
        objective: "O2",
        notYet: "Babu makin shiri, ko manufofi ba su da lamba ko rana.",
        meets: "Makin shiri a fannoni biyar da manufofi uku na SMART da suka dace da babban buri.",
        exceeds: "Kowace manufa tana da alaƙa da fannin shiri mai ƙaramin maki da za ta gyara ko ta kauce masa."
      },
      {
        name: "Dokar amfani da AI",
        objective: "O3",
        notYet: "Babu abin da ba za a taɓa saka wa AI ba, ko babu dubawar mutum.",
        meets: "Shafi ɗaya mai kayan da aka amince da su, abin da ba za a taɓa sakawa ba, dubawar mutum, bayyanawa da mutumin da za a tuntuɓa.",
        exceeds: "Ya ƙara dokokin fannin, kamar bayanan lafiyar 'yan wasa da yara ƙanana, da ranar sake dubawa."
      },
      {
        name: "Teburin haɗari",
        objective: "O4",
        notYet: "An jera haɗarurruka ba tare da matakan kariya ba.",
        meets: "Kowane amfani da AI yana da haɗarurruka masu yiwuwa, tasiri, matakin kariya da wanda ke dubawa.",
        exceeds: "Ya ƙunshi bayanai marasa gaskiya, fitar bayanai da rashin adalci, kuma ya danganta da Govern, Map, Measure da Manage."
      },
      {
        name: "Horo da sanarwa",
        objective: "O5",
        notYet: "Babu shirin faɗa wa mutane ko horar da su.",
        meets: "Saƙo mai dalili, abin da ake yi da amfaninsa a gare su, zakaru da gajerun zaman horo.",
        exceeds: "Ya haɗa da takardar taimako ta prompts da hanyar raba nasarorin farko."
      },
      {
        name: "Taswirar aiki ta kwana 90",
        objective: "O6",
        notYet: "Matakai ba su da masu alhaki ko ranaku.",
        meets: "Matakai uku na kwana 30, kowane aiki da mai alhaki da rana, da zaman bibiya kowane mako biyu.",
        exceeds: "Ya haɗa da dubawar rana ta 90 bisa manufofin SMART da ranar sake duba dokar."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da suka amince da dokar amfani da AI cikin kwanaki 30 (binciken biyo baya)",
      "Ƙungiyoyin da suka cimma aƙalla manufar SMART ɗaya kafin rana ta 90",
      "Ƙungiyoyin da suka ce babu wani lamarin fitar bayanan sirri daga amfani da AI a cikin kwanaki 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Kayan rubutu da tebur na lissafi (Google Docs da Sheets ko Word da Excel) don shirin",
      "Shafukan kyauta na NIST AI Risk Management Framework, ba tilas ba, don ƙarin karatu",
      "Kusan minti 60 don darussa da gwaje-gwaje, da ƙarin lokacin rubuta shirin kwana 90"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku cike misalin makin shiri a allo da kowa ke gani.",
      "Ku yi amfani da misalai daga duniyar ƙungiyar: sunan ɗan wasa, makarantar wasanni, ƙaramin kasuwanci ko ƙungiyar sa-kai.",
      "Ku tunatar da masu koyo cewa bayanan lafiyar 'yan wasa, bayanan yara ƙanana da kwangiloli suna buƙatar ƙarin kulawa, kuma tambayoyin shari'a a kai su ga lauya.",
      "Ku sa masu koyo su musanya dokokinsu da teburin haɗarinsu da abokin aiki don dubawa cikin sauri.",
      "Ku ba da maki ga shirin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
