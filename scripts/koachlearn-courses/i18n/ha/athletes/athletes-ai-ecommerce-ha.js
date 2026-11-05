"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-ai-ecommerce.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-ai-ecommerce-ha",
  lang: "ha",
  translationOf: "athletes-ai-ecommerce",
  category: "Athletes",
  name: "Dandalin Kasuwancin Intanet da AI ga 'Yan Wasa",
  skills: "Zaɓar abin da za a sayar, Kwatanta dandalin shago da kuɗaɗensu, Rubuta shafin kaya da AI, Saka farashi daga ainihin kuɗaɗe, Duba dokokin NIL, tambari da alamar kasuwanci kafin sayarwa",
  outcome: "tsara da kafa ɗan ƙaramin kasuwanci a intanet, kamar kayan tallata suna (merch), darussa na musamman ko sansanin horo (camp): zaɓar dandali, rubuta shafin kaya da AI, saka farashi daga ainihin kuɗaɗe, da duba dokokin NIL, tambari da alamar kasuwanci kafin ku fara.",
  about: [
    "Wannan kwas ɗin na 'yan wasa da masu horarwa ne da ke son sayar da wani abu a intanet: rigunan T-shirt ko merch da zanensu, darussa na musamman, tsare-tsaren horo, ko sansanin horo da azuzuwan koyarwa (clinics).",
    "Za ku koyi abin da za ku sayar, yadda ake zaɓar dandalin shago, yadda ake rubuta shafin kaya da AI, yadda ake saka farashin da zai rufe kuɗaɗenku, da yadda ake zama cikin dokokin NIL, tambarin makaranta da alamar kasuwanci.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Wannan ilimi ne na gaba ɗaya, ba shawarar shari'a ko ta haraji ba; ku tambayi ofishin bin dokoki (compliance office), iyaye ko mai kula da ku idan shekarunku ba su kai 18 ba, da ƙwararren masanin haraji."
  ],
  finalTask: "Ku rubuta tsarin farawa mai shafi ɗaya don kaya ko hidima ɗaya: mene ne shi da wa aka yi shi, dandalin da kuka zaɓa da kuɗaɗensa na yanzu (daga shafin farashinsa), shafin kaya da AI ya rubuta kuma ku kuka gyara, farashin da aka lissafa daga ainihin kuɗaɗe, da jerin dokokin da za a duba (NIL, tambarin makaranta, alamar kasuwanci, haraji) tare da wanda kuka tambaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa da masu horarwa na makarantar sakandare, jami'a da farkon sana'a da ke son sayar da wani abu a intanet: merch da zanensu, darussa na musamman, tsare-tsaren horo, ko sansanin horo da azuzuwan koyarwa.",
    startingPoint: "Suna da masu bibiya a kafafen sada zumunta da kuma ƙwarewar da mutane ke tambaya a kai, kuma wataƙila sun taɓa sayen kaya a intanet. Kaɗan ne suka taɓa kwatanta kuɗaɗen shago, saka farashi daga ainihin kuɗaɗe, rubuta shafin kaya, ko duba dokokin NIL, tambari, alamar kasuwanci da haraji.",
    gap: "'Yan wasan da suka fara ba tare da duba dokoki ba suna iya rasa damar shiga gasa (eligibility) ko su shiga matsalar alamar kasuwanci, kuma saka farashi ba tare da lissafa kuɗaɗe ba yana iya jawo asara. Tsari mai sauƙi da aka duba dokokinsa, tare da shafi mai gaskiya da farashi daga kuɗaɗe, yana ba su damar samun kuɗi daga ƙwarewarsu lafiya.",
    constraints: [
      "Kalmomi masu sauƙi, kusan matakin karatu na aji 8",
      "Waya ko kwamfuta, mataimakin AI kyauta da maƙunsar bayanai (spreadsheet); kuɗaɗen dandali suna canjawa, kuma dole a karanta su daga shafin farashin kowane dandali",
      "Kusan minti 60 gaba ɗaya",
      "Dokokin NIL, tambarin makaranta, alamar kasuwancin ƙungiyoyin wasa (league) da haraji; ku duba da ofishin bin dokoki ko ƙungiyar wasanni ta jiha",
      "'Yan wasan da shekarunsu ba su kai 18 ba suna buƙatar babba ya mallaki ko ya yi tarayya a asusun shago da na biyan kuɗi; wannan ilimi ne, ba shawarar shari'a ko ta haraji ba"
    ],
    prerequisites: "Babu. Kwas ɗin \"Dabarun Tallata Kai ta Intanet da AI ga 'Yan Wasa\" yana taimakawa wajen tallata farawar."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka yi la'akari da abin da masu bibiyarku ke tambayarku a kai", action: "zaɓar kaya ɗaya, hidima ɗaya ko kayan dijital ɗaya da za ku fara sayarwa", standard: "tare da rubutaccen lokaci da kuɗin da yake buƙata" },
    { id: "O2", condition: "Ta amfani da shafukan farashi na hukuma na dandali biyu", action: "kwatanta kuɗaɗensu na wata-wata, na kowace siyarwa da na biyan kuɗi, sannan zaɓar ɗaya", standard: "tare da rubutattun ainihin kuɗaɗe na yanzu, kuma an duba dokokin shekaru" },
    { id: "O3", condition: "Kafin ku sayar da kowane abu mai sunanku ko wani tambari", action: "duba dokokin NIL, tambari, alamar kasuwanci da haraji da suka shafe ku", standard: "ba tare da amfani da tambarin makaranta, ƙungiya ko league ba sai da rubutaccen izini, an yi bincike a USPTO, kuma an ambaci sunan wanda kuka tambaya" },
    { id: "O4", condition: "Ta amfani da daftarin AI", action: "rubuta shafin kaya mai gaskiya da ke amsa mene ne, na wa, me za a samu, farashi, yaushe da yaya", standard: "ƙasa da kalmomi 200, kowane bayani gaskiya ne, hotuna na gaske da kuka mallaka, da dokokin mayar da kuɗi a sarari" },
    { id: "O5", condition: "Idan aka ba ku kowane kuɗin siyarwa ɗaya", action: "lissafa farashin da zai rufe kuɗaɗenku kuma ya bar riba", standard: "an duba lissafin a spreadsheet da kuma na'urar lissafi (calculator)" },
    { id: "O6", condition: "Idan kasuwancinku ya shirya", action: "tsara ƙaramar farawa (soft launch) da tsarin kula da abokan ciniki", standard: "an gyara matsaloli kafin babban sanarwa, kuma ana amsa saƙonni cikin yini ɗaya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Abin da za a sayar da inda za a sayar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zaɓar abin da za ku sayar",
          minutes: 5,
          goal: "Zaɓi kaya ko hidima ɗaya da ta dace da ƙwarewarku da masu bibiyarku.",
          text: [
            "'Yan wasa yawanci suna sayar da ɗaya daga cikin abubuwa uku. Kaya na zahiri: rigunan T-shirt, hula, sitika ko hotunan bango (posters) da zanenku ko tambarinku. Hidimomi: darussa na musamman, horo na ƙaramin rukuni, sansanin horo da azuzuwan koyarwa. Kayan dijital: tsare-tsaren horo, kwasa-kwasan bidiyo ko jagororin motsa jiki.",
            "Ku fara da abu ɗaya da masu bibiyarku ke riga tambayarku a kai. Idan iyaye suna ta tambaya game da darussa, ku sayar da darussa. Idan masoya suna magana game da tambarinku, ku gwada merch.",
            "Ku yi tunani game da lokaci da haɗari. Hidimomi suna biyan lokacinku amma suna buƙatar jadawalinku. Merch yana buƙatar kuɗi tun farko sai dai idan kun yi amfani da print-on-demand. Kayan dijital suna ɗaukar lokaci kafin a yi su amma ana iya sayar da su sau da yawa."
          ],
          steps: ["Ku rubuta abin da masu bibiyarku ke tambaya a kai.", "Ku raba ra'ayoyin zuwa kaya na zahiri, hidima ko dijital.", "Ku rubuta lokaci da kuɗin da kowanne yake buƙata.", "Ku zaɓi ɗaya don farawa."],
          words: [["E-commerce (kasuwancin intanet)", "saye da sayarwa a intanet."], ["Print-on-demand", "hidimar da ke buga kaya kuma ta tura shi sai bayan wani ya yi oda."], ["Kayan dijital", "abin da ake sayarwa a matsayin fayil ko damar shiga ta intanet, kamar tsarin horo."]],
          slides: [
            { title: "Nau'o'in kasuwanci uku", bullets: ["Na zahiri: merch da zanenku", "Hidimomi: darussa, sansanin horo, azuzuwan koyarwa", "Dijital: tsare-tsaren horo, kwasa-kwasan bidiyo"] },
            { title: "Ku fara da buƙata", bullets: ["Me masu bibiyarku ke tambaya a kai?", "Ku zaɓi abu ɗaya"] },
            { title: "Lokaci da haɗari", bullets: ["Hidimomi: lokacinku", "Merch: kuɗi tun farko ko print-on-demand", "Dijital: a yi sau ɗaya, a sayar sau da yawa"] }
          ],
          tryIt: "Ku rubuta abubuwa uku da mutane suka tambaye ku a kai. Ku nemi mataimakin AI ya jera amfani da rashin amfanin sayar da kowanne, sannan ku zaɓi ɗaya.",
          youCanNow: "zaɓar kaya ko hidima ɗaya da ta dace da ƙwarewarku da masu bibiyarku.",
          quickCheck: [
            { objective: "O1", q: "Wanne a cikin waɗannan kaya ne na zahiri?", options: ["Kwas ɗin bidiyo", "Darasi na musamman", "Sansanin horo", "Rigar T-shirt da zanenku"], answer: 3, why: "Kaya na zahiri sun haɗa da rigunan T-shirt, hula, sitika da hotunan bango." },
            { objective: "O1", q: "Iyaye suna ta tambayarku game da darussa don 'ya'yansu. Me za ku fara gwadawa?", options: ["Sayar da darussa na musamman", "Zana hoton bango", "Fara kwas ɗin bidiyo", "Sayar da hula"], answer: 0, why: "Ku fara da abin da masu bibiyarku ke riga tambaya a kai." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kwatanta dandalin shago",
          minutes: 5,
          goal: "Kwatanta dandali biyu ku zaɓi ɗaya ta amfani da kuɗaɗensu da abubuwan da suke bayarwa a yanzu.",
          text: [
            "Ba sai kun gina shago daga farko ba. Masu gina shago kamar Shopify, Square Online da Wix suna ba ku damar saka kaya da karɓar kuɗi. Hidimomin print-on-demand kamar Printful ko Printify suna haɗuwa da shaguna kuma suna kula da bugawa da aikawa. Don darussa da sansanin horo, kayan yin rajista da tsara lokaci ko hanyar haɗin biyan kuɗi mai sauƙi (payment link) na iya isa.",
            "Kowane dandali yana karɓar kuɗi ta wata hanya: kuɗin wata-wata, kashi daga kowace siyarwa, kuɗin sarrafa biyan kuɗi, ko duka uku. Waɗannan suna canjawa sau da yawa, don haka ku karanta shafin farashin kowane dandali na yanzu ku rubuta ainihin lambobin.",
            "Idan shekarunku ba su kai 18 ba, dandali da hidimomin biyan kuɗi da yawa suna buƙatar babba ya mallaki ko ya yi tarayya a asusun. Ku sa iyaye ko mai kula da ku a ciki."
          ],
          steps: ["Ku zaɓi dandali biyu da suka dace da kasuwancinku.", "Ku buɗe shafin farashi na hukuma na kowannensu.", "Ku rubuta kuɗin wata-wata, kuɗin kowace siyarwa da kuɗin biyan kuɗi.", "Ku duba dokokin shekaru.", "Ku zaɓi wanda jimillar kuɗinsa ta fi ƙanƙanta don siyarwar da kuke tsammani."],
          words: [["Dandali (platform)", "hidimar intanet da kuke amfani da ita don gudanar da shagonku."], ["Kuɗin sarrafawa (processing fee)", "abin da hidimar biyan kuɗi ke karɓa don karɓar biyan kuɗi ta kati."]],
          slides: [
            { title: "Zaɓuɓɓukan shago", bullets: ["Masu gina shago: Shopify, Square Online, Wix", "Print-on-demand: Printful, Printify", "Darussa da sansanin horo: kayan rajista ko payment link"] },
            { title: "Kuɗaɗen da za a kwatanta", bullets: ["Kuɗin wata-wata", "Kuɗin kowace siyarwa", "Kuɗin sarrafa biyan kuɗi"] },
            { title: "Kafin ku yi rajista", bullets: ["Ku karanta shafin farashi na yanzu", "Ƙasa da shekara 18: babba zai iya mallakar asusun"] }
          ],
          tryIt: "Ku zaɓi dandali biyu. Daga shafukan farashinsu na hukuma, ku rubuta kuɗin wata-wata da sauran kuɗaɗen kowanne a ƙaramin tebur, sannan ku zaɓi wanda jimillarsa ta fi arha don siyarwa 20 a wata.",
          youCanNow: "kwatanta dandalin shago ta ainihin kuɗaɗensu na yanzu ku zaɓi ɗaya.",
          quickCheck: [
            { objective: "O2", q: "Me Printful da Printify suke yi?", options: ["Yin rajistar sansanin horo", "Kula da bugawa da aikawa da odar kaya", "Cike harajinku", "Zana tambarinku kyauta"], answer: 1, why: "Hidimomin print-on-demand suna haɗuwa da shaguna kuma suna kula da bugawa da aikawa." },
            { objective: "O2", q: "Aboki ya ce wani dandali ba ya karɓar ko sisi. Me za ku yi?", options: ["Ku yarda ku yi rajista", "Ku tambayi AI farashin", "Ku karanta shafin farashin dandalin na yanzu ku rubuta kuɗaɗen", "Ku yi hasashen kuɗaɗen"], answer: 2, why: "Kowane dandali yana karɓar kuɗi ta wata hanya, kuma kuɗaɗe suna canjawa, don haka ku karanta shafin farashi na yanzu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dokoki da farko: NIL, tambari da alamar kasuwanci",
          minutes: 6,
          goal: "Duba dokokin da suka shafe ku kafin ku sayar da wani abu mai sunanku ko tambari.",
          text: [
            "Sayar da kaya da sunanku, hotonku ko kamanninku (NIL: name, image and likeness) na iya zama ayyukan NIL. 'Yan wasan jami'a za su iya buƙatar su bayar da rahotonsa; dokokin NCAA (hukumar wasannin jami'o'in Amurka) sun ce dole kuɗin NIL ya kasance don ainihin manufar kasuwanci, ba don ƙwazon wasa ba. Dokokin makarantar sakandare sun bambanta daga jiha zuwa jiha. Ku fara tambayar ofishin bin dokoki ko ƙungiyar wasanni ta jiharku.",
            "Kada ku yi amfani da tambarin makarantarku ko ƙungiyarku, sunanta, alamar dabbarta (mascot) ko launukanta ta hanyar da za ta yi kama da ta hukuma sai kuna da rubutaccen izini. Makarantu da ƙungiyoyin wasa (leagues) yawanci su ne ke mallaka da kare waɗannan. Tambarin manyan ƙungiyoyin ƙwararru da na sauran kamfanoni ma an hana su.",
            "Ku yi tambarinku na kanku, kuma ku bincika bayanan alamar kasuwanci na USPTO (ofishin alamar kasuwanci na Amurka) kafin ku zaɓi sunan kasuwanci, don guje wa kwaikwayon na wani. Kuɗin da ake samu daga sayarwa yawanci ana biyan haraji a kansa; IRS (hukumar haraji ta Amurka) ta ce dole ku cike takardar haraji idan ribar aikin kanku ta kai $400 ko fiye, don haka ku riƙe bayanai ku yi magana da ƙwararren masanin haraji."
          ],
          steps: ["Ku tambayi ofishin bin dokoki ko ƙungiyar wasanni ta jiha game da dokokin NIL na sayarwa.", "Kada ku yi amfani da tambarin makaranta, ƙungiya ko league ba tare da rubutaccen izini ba.", "Ku ƙirƙiri tambarinku na kanku.", "Ku bincika bayanan alamar kasuwanci na USPTO don sunan kasuwancinku.", "Ku kafa rubutaccen bayani mai sauƙi na siyarwa da kuɗaɗe."],
          words: [["Alamar kasuwanci (trademark)", "suna, tambari ko taken da ke nuna wani kasuwanci, kuma doka tana kare shi."], ["Lasisi (licensing)", "izini na hukuma don amfani da tambarin wani ko sunansa, sau da yawa da biyan kuɗi."]],
          slides: [
            { title: "Dokokin NIL", bullets: ["Sayarwa da sunanku na iya zama ayyukan NIL", "Jami'a: za a iya buƙatar rahoto", "Sakandare: dokoki sun bambanta daga jiha zuwa jiha"] },
            { title: "Tambari", bullets: ["Tambarin makaranta, ƙungiya da league: sai da rubutaccen izini", "Tambarin sauran kamfanoni: an hana", "Ku yi naku"] },
            { title: "Suna da haraji", bullets: ["Ku bincika USPTO kafin zaɓar sunan kasuwanci", "Ku riƙe bayanan siyarwa da kuɗaɗe", "Ku yi magana da ƙwararren masanin haraji"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness (Suna, hoto da kamanni)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO: Muhimman abubuwa game da alamar kasuwanci", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS: Cibiyar haraji ga masu aikin kansu", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Ku rubuta jerin dokokin da za a duba don kayanku: NIL (wa kuka tambaya), tambari (na wa, da izini), binciken alamar kasuwanci (an yi ko ba a yi ba), da bayanai (inda za ku riƙe su).",
          youCanNow: "duba muhimman dokokin NIL, tambari, alamar kasuwanci da haraji kafin sayarwa.",
          quickCheck: [
            { objective: "O3", q: "Wane ne yawanci ke mallakar tambarin makaranta, alamar dabbarta da sunanta?", options: ["Makarantar ko league ɗin", "'Yan wasa", "Duk wanda ya yi amfani da shi", "Jaridar yankin"], answer: 0, why: "Makarantu da leagues yawanci su ne ke mallaka da kare waɗannan." },
            { objective: "O3", q: "Kun zaɓi sunan kasuwanci don merch ɗinku. Me za ku yi kafin bugawa?", options: ["Ku buga riguna 500", "Ku nemi masoya su jefa ƙuri'a", "Ku kwafi wani sanannen tambari", "Ku bincika bayanan alamar kasuwanci na USPTO don sunan"], answer: 3, why: "Bincika bayanan USPTO yana taimaka muku guje wa kwaikwayon alamar kasuwancin wani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Abin da za a sayar da inda za a sayar",
        questions: [
          { objective: "O1", q: "Wanne ne hidimar da ɗan wasa zai iya sayarwa?", options: ["Rigar T-shirt", "Sitika", "Darussa na musamman", "Hoton bango"], answer: 2, why: "Darussa hidima ce da ke biyan lokacinku." },
          { objective: "O2", q: "Me print-on-demand ke yi?", options: ["Yana bugawa kuma ya aika kaya sai bayan wani ya yi oda", "Yana buga kuɗi", "Yana sa ku sayi riguna 500 tun farko", "Yana rubuta shafin kayanku"], answer: 0, why: "Yana rage kuɗin da kuke buƙata tun farko." },
          { objective: "O2", q: "A ina za ku sami ainihin kuɗaɗen dandali?", options: ["Hasashe", "Tsohon bidiyo", "Abin da AI ya tuna", "Shafin farashinsa na hukuma na yanzu"], answer: 3, why: "Kuɗaɗe suna canjawa; shafin hukuma shi ne na yanzu." },
          { objective: "O3", q: "Kuna son sayar da riguna masu tambarin makarantarku. Me kuke buƙata da farko?", options: ["Babu komai", "Rubutaccen izini daga makarantar", "Rubutu mafi kyau", "Ƙarin masu bibiya"], answer: 1, why: "Makarantu yawanci su ne ke mallaka da kare tambarinsu." },
          { objective: "O3", q: "Me yasa za ku bincika bayanan USPTO kafin ku sa wa kasuwancinku suna?", options: ["Don samun riguna kyauta", "Don guje wa kwaikwayon alamar kasuwancin wani", "Don nemo abokan ciniki", "Ba shi da amfani"], answer: 1, why: "Yana taimaka muku guje wa matsalolin alamar kasuwanci." }
        ]
      }
    },
    {
      name: "Babi na 2: Ginawa da fara kasuwancinku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta shafin kaya da AI",
          minutes: 5,
          goal: "Rubuta shafin kaya mai sarari da gaskiya da taimakon AI.",
          text: [
            "Shafin kaya yana amsa tambayoyin masu saye: Mene ne shi? Na wa ne? Me zan samu? Nawa ne, yaushe kuma ta yaya? Don sansanin horo: ranaku, shekarun yara, wuri, abin da yara za su koya, tsaro, abin da za a kawo, da dokar mayar da kuɗi.",
            "Ku tambayi mataimakin AI: \"Ka rubuta shafin kaya don darasin harbi na musamman na awa 1 ga 'yan wasa masu shekaru 10-16. Ka haɗa abin da za su koya, abin da za su kawo, irin wurin, wurin saka farashi, da gajeriyar dokar mayar da kuɗi. Mai fara'a, a sarari, ƙasa da kalmomi 200.\" Sannan ku gyara kowane bayani ya zama gaskiya.",
            "Ku yi amfani da hotuna na gaske da kuka mallaka. Kada ku yi alƙawarin sakamako kamar \"tabbas zai zama ɗan wasan farko (starter)\" ko ku yi iƙirari game da lafiya. Dokokin mayar da kuɗi da soke rajista a sarari suna hana jayayya daga baya."
          ],
          steps: ["Ku rubuta abin da masu saye ke buƙatar sani.", "Ku nemi AI ya rubuta daftarin shafi ƙasa da kalmomi 200.", "Ku duba kowane bayani ku gyara duk abin da ba gaskiya ba.", "Ku ƙara hotuna na gaske da kuka mallaka.", "Ku ƙara dokokin mayar da kuɗi da soke rajista a sarari."],
          words: [["Shafin kaya (product page)", "shafin da ke bayanin abin da kuke sayarwa kuma yana bar mutane su saya."], ["Dokar mayar da kuɗi (refund policy)", "dokokinku na mayar wa mutane kuɗinsu."]],
          slides: [
            { title: "Ku amsa tambayoyin masu saye", bullets: ["Mene ne shi? Na wa ne?", "Me zan samu?", "Nawa ne, yaushe kuma ta yaya?"] },
            { title: "AI ya rubuta daftari, ku ku duba", bullets: ["Ƙasa da kalmomi 200", "Kowane bayani gaskiya ne", "Hotunanku na kanku"] },
            { title: "Ku guje wa", bullets: ["Alƙawarin sakamako", "Iƙirari game da lafiya", "Rashin dokokin mayar da kuɗi"] }
          ],
          tryIt: "Ku yi amfani da AI don rubuta daftarin shafin kayanku, sannan ku gyara shi ta yadda kowane bayani ya zama gaskiya, ku ƙara dokar mayar da kuɗi.",
          youCanNow: "rubuta shafin kaya mai sarari da gaskiya da taimakon AI.",
          quickCheck: [
            { objective: "O4", q: "Wane bayani ne ya kamata ya kasance a shafin kaya na sansanin horo?", options: ["Adireshin gidanku", "Abin da za a kawo", "Makin karatunku (GPA)", "Farashin sauran masu horarwa"], answer: 1, why: "Masu saye suna buƙatar ranaku, shekaru, wuri, abin da yara za su koya, abin da za a kawo da mayar da kuɗi." },
            { objective: "O4", q: "Daftarin AI ya ce darussanku \"suna tabbatar da samun tallafin karatu (scholarship)\". Me za ku yi?", options: ["Ku bar shi don ku sayar da yawa", "Ku canja shi zuwa \"kusan tabbas\"", "Ku cire shi; kada ku yi alƙawarin sakamako", "Ku ƙara alƙawura"], answer: 2, why: "Kada ku yi alƙawarin sakamako ko iƙirarin da ba za ku iya cikawa ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Saka farashi daga ainihin kuɗaɗe",
          minutes: 5,
          goal: "Saka farashin da zai rufe kuɗaɗenku kuma ya bar riba.",
          text: [
            "Farashi yana farawa daga kuɗin da kuka kashe. Don merch: kuɗin kayan, bugawa, aikawa, kuɗin dandali da kuɗin biyan kuɗi. Don darussa: hayar wuri, kayan aiki, tafiya, lokacinku da kuɗaɗen dandali.",
            "Ku haɗa kuɗin siyarwa ɗaya, sannan ku duba nawa kaya ko darussa irin naku suke a yankinku. Ku zaɓi farashin da ya fi kuɗinku kuma masu bibiyarku za su iya biya. Bambancin shi ne ribarku, kafin haraji.",
            "Ku yi amfani da spreadsheet: ginshiƙi (column) don kowane kuɗi, jimilla, farashinku da riba. Mataimakin AI zai iya saka dabarun lissafi (formulas), amma ku duba lissafin da na'urar lissafi."
          ],
          steps: ["Ku rubuta kowane kuɗin siyarwa ɗaya.", "Ku haɗa su.", "Ku duba nawa irin wannan kasuwanci yake a kusa.", "Ku saka farashin da ya fi kuɗinku kuma ya dace da masu bibiyarku.", "Ku duba lissafin a spreadsheet."],
          words: [["Kuɗin da aka kashe (cost)", "kuɗin da kuke kashewa don yin ko isar da siyarwa ɗaya."], ["Riba (profit)", "farashi a rage duk kuɗaɗen da aka kashe, kafin haraji."]],
          slides: [
            { title: "Ku rubuta kowane kuɗi", bullets: ["Kaya, bugawa, aikawa", "Kuɗin dandali da na biyan kuɗi", "Wuri, kayan aiki, tafiya, lokaci"] },
            { title: "Ku saka farashi", bullets: ["Sama da jimillar kuɗin da aka kashe", "Ku kwatanta da irin wannan kasuwanci a kusa", "Abin da masu bibiyarku za su iya biya"] },
            { title: "Spreadsheet", bullets: ["Kuɗaɗe, jimilla, farashi, riba", "AI ya saka formulas; ku ku duba"] }
          ],
          tryIt: "Ku gina takardar farashi don siyarwa ɗaya ta kayanku. Ku nemi AI ya rubuta formulas na jimilla da riba, sannan ku duba su da na'urar lissafi.",
          youCanNow: "saka farashi daga ainihin kuɗaɗe da sanin ribarku a kowace siyarwa.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne kuɗin da ake kashewa a darasi na musamman?", options: ["Hayar wuri", "Yawan masu bibiyarku", "Tafiyar mai saye", "Lambar rigarku"], answer: 0, why: "Kuɗaɗen darasi sun haɗa da wuri, kayan aiki, tafiya, lokacinku da kuɗaɗen dandali." },
            { objective: "O5", q: "Rigarku tana ɗaukar 14 don yi, aikawa da sayarwa. Irin waɗannan riguna a kusa ana sayar da su 12 zuwa 25. Wane farashi ya dace?", options: ["10, don ya fi kowa arha", "14, daidai da kuɗin da aka kashe", "12, farashi mafi ƙanƙanta a kusa", "Farashi sama da 14 da masu bibiyarku za su iya biya, kamar 20"], answer: 3, why: "Ku saka farashi sama da jimillar kuɗinku don a sami riba, cikin abin da masu bibiyarku za su iya biya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Farawa da faranta wa abokan ciniki rai",
          minutes: 5,
          goal: "Tsara ƙaramar farawa da tsarin kula da abokan ciniki mai sauƙi.",
          text: [
            "Ku fara a ƙarami: soft launch ga iyali, iyalan abokan wasanku da masu bibiyarku na kusa. Ku gyara matsaloli kafin babban sanarwa. Sannan ku sanar da rubutu (post), ɗan gajeren bidiyo da hanyar haɗi a bayanin shafinku (bio).",
            "Idan kuna tallata kayanku na kanku, wannan kasuwancinku ne, amma idan wani kamfani ko wani mutum ya ba ku wani abu don ku tallata su, ku bayyana hakan a sarari. 'Yan wasan jami'a: ku bayar da rahoton yarjejeniyoyi a kan lokaci idan ana buƙata.",
            "Kula da abokan ciniki yana sa su dawo su sake saye: ku amsa saƙonni cikin yini ɗaya, ku aika kaya ko ku tabbatar da rajista a kan lokaci, ku bi dokar mayar da kuɗinku, kuma ku ce na gode. Ku nemi AI ya rubuta samfurin amsoshi masu ladabi don tambayoyin da aka saba yi."
          ],
          steps: ["Ku yi soft launch ga ƙaramin rukuni.", "Ku gyara duk wata matsala.", "Ku sanar da post, bidiyo da hanyar haɗi a bio.", "Ku amsa saƙonni cikin yini ɗaya.", "Ku yi amfani da AI don rubuta samfurin amsoshi."],
          words: [["Soft launch (ƙaramar farawa)", "farawa ta farko ƙarama, a hankali, don gano matsaloli."], ["Kula da abokan ciniki (customer service)", "yadda kuke taimakon masu saye kafin da bayan sun biya."]],
          slides: [
            { title: "Ku fara a ƙarami", bullets: ["Soft launch ga mutanen da kuka sani", "Ku gyara matsaloli da farko"] },
            { title: "Sannan ku sanar", bullets: ["Post, gajeren bidiyo, hanyar haɗi a bio", "Ku bayyana duk wata alaƙa da kamfani"] },
            { title: "Ku faranta wa abokan ciniki rai", bullets: ["Ku amsa cikin yini ɗaya", "A kan lokaci, ku bi dokar mayar da kuɗinku", "Samfurin amsoshi daga AI"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin farawarku mai shafi ɗaya: kasuwanci da masu saye, dandali da kuɗaɗensa na yanzu, shafin kaya da AI ya rubuta, farashi daga ainihin kuɗaɗe, da jerin dokoki tare da wanda kuka tambaya.",
          youCanNow: "fara ɗan ƙaramin kasuwanci a intanet da kula da abokan ciniki da kyau.",
          quickCheck: [
            { objective: "O6", q: "Soft launch na su wa ne?", options: ["Kowa da kowa a intanet", "Iyali, iyalan abokan wasa da masu bibiya na kusa", "Manyan kamfanoni kawai", "Masu gasa da ku"], answer: 1, why: "Ku fara a ƙarami ku gyara matsaloli kafin babban sanarwa." },
            { objective: "O6", q: "Wani abokin ciniki ya nemi a mayar masa da kuɗi, kuma buƙatar ta dace da dokar mayar da kuɗinku. Me za ku yi?", options: ["Ku yi watsi da saƙon", "Ku yi jayayya a sharhi (comments)", "Ku bi dokarku, ku mayar da kuɗin cikin ladabi ku ce na gode", "Ku toshe shi"], answer: 2, why: "Bin dokar mayar da kuɗinku da amsa cikin ladabi yana sa masu saye su dawo." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ginawa da fara kasuwancinku",
        questions: [
          { objective: "O4", q: "Shafin kaya na sansanin horo ya kamata ya ƙunshi:", options: ["Tambari kawai", "Adireshin gidanku", "Tabbacin samun tallafin karatu", "Ranaku, shekaru, wuri, abin da yara za su koya da dokar mayar da kuɗi"], answer: 3, why: "Yana amsa abin da masu saye ke buƙatar sani." },
          { objective: "O4", q: "AI ya rubuta \"tabbas zai shiga babbar ƙungiyar makaranta (varsity)\" a shafinku. Ku:", options: ["Cire shi", "Bar shi", "Ƙara girmansa", "Ƙara alƙawura"], answer: 0, why: "Kada ku yi alƙawarin sakamakon da ba za ku iya tabbatarwa ba." },
          { objective: "O5", q: "Riba ita ce:", options: ["Farashi kawai", "Yawan masu bibiya", "Farashi a rage duk kuɗaɗen da aka kashe", "Jimillar siyarwa ba tare da kuɗaɗe ba"], answer: 2, why: "Riba ita ce abin da ya rage bayan kuɗaɗe." },
          { objective: "O6", q: "Me yasa za a yi soft launch?", options: ["Don ɓoye shagonku", "Don ƙara farashi", "Doka ta buƙata", "Don gano matsaloli kafin babban sanarwa"], answer: 3, why: "Ƙananan farawa suna bayyana matsaloli lafiya." },
          { objective: "O6", q: "Da wane sauri ya kamata ku amsa saƙonnin abokan ciniki?", options: ["Cikin wata ɗaya", "Cikin yini ɗaya", "Ba za a taɓa amsawa ba", "Sai idan sun yi ƙorafi sau biyu"], answer: 1, why: "Amsa da sauri tana gina amana kuma tana sa masu saye su dawo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Dandalin Kasuwancin Intanet da AI ga 'Yan Wasa",
    questions: [
      { objective: "O1", q: "E-commerce yana nufin:", options: ["Wasannin lantarki", "Imel kawai", "Saye da sayarwa a intanet", "Motar ƙungiya"], answer: 2, why: "Sayarwa ce a intanet." },
      { objective: "O1", q: "Wanne ne kayan dijital?", options: ["Tsarin horo", "Hula", "Sansanin horo", "Hoton bango"], answer: 0, why: "Ana sayar da shi a matsayin fayil ko damar shiga ta intanet." },
      { objective: "O1", q: "Hanya mai kyau ta zaɓar kayanku na farko ita ce:", options: ["Abin da masu bibiyarku ke riga tambaya a kai", "Duk abin da ke tashe a yanzu", "Ra'ayi mafi tsada", "Abin da ba ku sani ba"], answer: 0, why: "Buƙata tana sauƙaƙa sayarwa." },
      { objective: "O1", q: "Hidimomi suna biyan:", options: ["Aikawarku", "Bugawarku", "Lokacinku", "Sitikarku"], answer: 2, why: "Darussa da sansanin horo suna buƙatar lokacinku." },
      { objective: "O2", q: "Wanne ne mai gina shago?", options: ["Agogon gudu (stopwatch)", "Shopify", "Allon maki", "Rigar wasa"], answer: 1, why: "Shopify mai gina shago ne." },
      { objective: "O2", q: "Wane kuɗi ne dandali zai iya karɓa?", options: ["Kuɗin rigar wasa", "Kuɗin alƙalin wasa", "Kuɗin hutun wasa", "Kuɗin sarrafa biyan kuɗi"], answer: 3, why: "Kuɗaɗen biyan kuɗi sun zama ruwan dare." },
      { objective: "O2", q: "Idan shekarunku ba su kai 18 ba, asusun shago na iya buƙatar:", options: ["Babu komai", "Shekarun ƙarya", "Babba ya mallake shi ko ya yi tarayya a ciki", "Katin shaidar abokin wasa"], answer: 2, why: "Dandali da yawa suna buƙatar babba." },
      { objective: "O3", q: "Sayar da merch da sunanku na iya zama:", options: ["Biyan kuɗi don wasa (pay-for-play)", "Tallafin karatu", "Babu komai", "Ayyukan NIL"], answer: 3, why: "Yana amfani da sunanku, hotonku ko kamanninku." },
      { objective: "O3", q: "Wa ya kamata ɗan wasan jami'a ya tambaya game da dokokin NIL na sayarwa?", options: ["Ofishin bin dokoki", "Wani masoyi da ba a sani ba", "Abokin hamayya", "Babu kowa"], answer: 0, why: "Sun san dokokin makaranta da na NCAA na yanzu." },
      { objective: "O3", q: "Za ku iya saka tambarin NFL a merch ɗinku?", options: ["Eh, koyaushe", "A'a, sai da lasisi", "Sai da launin ja kawai", "Sai a intanet kawai"], answer: 1, why: "Tambarin leagues suna da kariya." },
      { objective: "O3", q: "Alamar kasuwanci ita ce:", options: ["Wani nau'in takalmi", "Abin sha na wasanni", "Suna, tambari ko take mai kariya", "Tsarin horo"], answer: 2, why: "Alamomin kasuwanci suna nuna kasuwanci." },
      { objective: "O3", q: "IRS ta ce dole ku cike takardar haraji idan ribar aikin kanku ta kai:", options: ["$400 ko fiye", "$1 miliyan ko fiye", "Ba za a taɓa ba", "Sai idan kun haura shekara 30"], answer: 0, why: "Wannan shi ne iyakar da IRS ta faɗa a shafinta na masu aikin kansu." },
      { objective: "O4", q: "Shafin kaya ya kamata ya amsa:", options: ["Farashi kawai", "Makin karatunku (GPA)", "Kalmar sirrinku", "Mene ne, na wa, me za a samu, farashi, yaushe da yaya"], answer: 3, why: "Masu saye suna buƙatar waɗannan amsoshi." },
      { objective: "O4", q: "Hotunan kaya ya kamata su zama:", options: ["An kwafo su daga wasu shaguna", "Hotuna na gaske da kuka mallaka", "Na ƙarya", "Na wasu 'yan wasa"], answer: 1, why: "Ku yi amfani da hotunan da kuke da haƙƙinsu." },
      { objective: "O4", q: "Me yasa ake da dokar mayar da kuɗi?", options: ["Don riƙe duk kuɗi koyaushe", "Don hana jayayya daga baya", "Ado ne kawai", "Ba a buƙatar ta"], answer: 1, why: "Dokoki a sarari suna kare ku da masu saye." },
      { objective: "O5", q: "Farashi ya kamata ya kasance:", options: ["Ƙasa da kuɗin da kuka kashe", "Ba tare da tsari ba", "Kyauta koyaushe", "Sama da jimillar kuɗin da kuka kashe"], answer: 3, why: "In ba haka ba za ku yi asara a kowace siyarwa." },
      { objective: "O5", q: "AI ya saka formula ta ribarku. Ya kamata ku:", options: ["Duba lissafin da na'urar lissafi", "Amince da shi gaba ɗaya", "Goge shi", "Ninka farashinku"], answer: 0, why: "AI yana iya yin kuskuren lissafi." },
      { objective: "O6", q: "Soft launch yana zuwa ga:", options: ["Kowa a lokaci ɗaya", "Abokan hamayya kawai", "Iyali, masu bibiya na kusa da mutanen da kuka sani", "Babu kowa"], answer: 2, why: "Ƙaramin rukuni yana taimaka muku gyara matsaloli." },
      { objective: "O6", q: "A ina ya kamata ku saka hanyar haɗin shagonku?", options: ["A ɓoye, babu inda", "Shafin abokin hamayya", "Saƙonnin banza (spam)", "Bio ɗinku"], answer: 3, why: "Hanyar haɗi a bio tana da sauƙin samu." },
      { objective: "O6", q: "AI zai iya taimakawa wajen kula da abokan ciniki ta hanyar:", options: ["Riƙe kuɗin abokan ciniki", "Rubuta samfurin amsoshi masu ladabi", "Yin watsi da saƙonni", "Canja dokokin mayar da kuɗi a ɓoye"], answer: 1, why: "Samfurin amsoshi suna sa amsa ta yi sauri kuma ta kasance da ladabi." }
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
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kasuwanci da masu saye",
        objective: "O1",
        notYet: "Kayan ko masu sayensa ba su bayyana ba.",
        meets: "Kaya ko hidima ɗaya, na wa aka yi shi, da lokaci da kuɗin da yake buƙata.",
        exceeds: "Yana nuna shaida cewa masu bibiya sun nema, kamar sharhi ko buƙatun iyaye."
      },
      {
        name: "Dandali da kuɗaɗe",
        objective: "O2",
        notYet: "Babu kuɗaɗen da aka rubuta, ko an yi hasashen kuɗaɗe maimakon ɗauka daga shafin farashi.",
        meets: "Dandalin da aka zaɓa tare da kuɗaɗensa na yanzu na wata-wata, na kowace siyarwa da na biyan kuɗi daga shafin farashinsa, kuma an duba dokokin shekaru.",
        exceeds: "Yana kwatanta dandali biyu kuma yana nuna jimillar kuɗi a yawan siyarwar da ake tsammani."
      },
      {
        name: "Shafin kaya",
        objective: "O4",
        notYet: "Muhimman bayanai sun ɓace, akwai iƙirari marasa gaskiya, ko babu dokokin mayar da kuɗi.",
        meets: "Ƙasa da kalmomi 200, yana amsa mene ne, na wa, me za a samu, farashi, yaushe da yaya, tare da hotuna na gaske da dokokin mayar da kuɗi a sarari.",
        exceeds: "Yana da bayanan tsaro don kasuwancin yara da amsoshin tambayoyin da aka saba yi."
      },
      {
        name: "Farashi daga kuɗaɗe",
        objective: "O5",
        notYet: "Farashin ya yi ƙasa da kuɗin da aka kashe, ko kuɗaɗe sun ɓace.",
        meets: "An jera kowane kuɗin siyarwa ɗaya, an haɗa jimilla, an saka farashi sama da kuɗin, kuma an duba lissafin.",
        exceeds: "Yana nuna riba a kowace siyarwa da yawan siyarwar da za ta rufe kuɗaɗen farko."
      },
      {
        name: "Jerin dokoki",
        objective: "O3",
        notYet: "Abubuwan NIL, tambari, alamar kasuwanci ko haraji sun ɓace, ko ba a ambaci kowa ba.",
        meets: "An duba NIL, tambarin makaranta, alamar kasuwanci da haraji ɗaya bayan ɗaya, tare da wanda ɗan wasan ya tambaya.",
        exceeds: "Yana da rubutaccen izinin tambari ko sakamakon binciken USPTO, kuma an kafa rubutaccen bayanin siyarwa da kuɗaɗe."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala tsarin farawa kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Masu koyo da suka fara sayar da kayansu ko hidimarsu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun sami siyarwa ko rajista ta farko da riba bayan kuɗaɗe",
      "Masu koyo da suka ce sun duba dokokin NIL, tambari da haraji da makarantarsu, ƙungiyar wasanni ta jiha ko ƙwararre kafin sayarwa"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Spreadsheet kyauta (Google Sheets) da na'urar lissafi",
      "Shafukan farashi na hukuma na dandali biyu",
      "Dokar NIL ta makarantarku ko dokokin ƙungiyar wasanni ta jiharku",
      "Kusan minti 60"
    ],
    facilitatorNotes: [
      "Ku gayyaci ofishin bin dokoki ko daraktan wasanni don bayyana dokokin NIL da tambari kafin kowa ya zana merch.",
      "Don 'yan wasan da shekarunsu ba su kai 18 ba, ku sa iyaye ko mai kula da su wajen zaɓa da mallakar asusun shago da na biyan kuɗi.",
      "Ku sa masu koyo su karanta kuɗaɗe daga shafukan farashi kai tsaye a lokacin zaman; kada ku dogara da lambobin da aka tuna ko na AI.",
      "Don sansanin horo da darussa masu yara ƙanana, ku tattauna tsaro, kulawa da izinin amfani da wuri kafin farawa.",
      "Ku tura masu koyo ga ƙwararren masanin haraji don tambayoyi game da kuɗin shiga; kada ku ba da shawarar haraji ta mutum ɗaya."
    ]
  }
};
