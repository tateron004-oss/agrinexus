"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-sports-management-marketing.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-sports-management-marketing-ha",
  lang: "ha",
  translationOf: "athletes-sports-management-marketing",
  category: "Athletes",
  name: "Tallata Harkokin Wasanni ga Masu Gudanarwa",
  skills: "Bayyana abin da taron wasa ke bayarwa da masu sauraronsa, Rubuta tsarin tallata taro a shafi ɗaya, Gina kunshin masu ɗaukar nauyi na gida, Rubuta imel na neman mai ɗaukar nauyi da AI, Bin diddigin yawan mahalarta da sakamakon masu ɗaukar nauyi",
  outcome: "tsara tallata wani taron wasa na gaske, sansanin horo (camp) ko kakar ƙungiya: tsarin tallatawa a shafi ɗaya, kunshin masu ɗaukar nauyi na gida mai matakai uku, imel na neman mai ɗaukar nauyi da aka rubuta da taimakon AI, da gajeren rahoton sakamako ga masu ɗaukar nauyi.",
  about: [
    "Wannan kwas ɗin na masu horarwa (coach), manajojin ƙungiya, ma'aikatan wasanni, masu shirya kulob da 'yan wasa ne da ke gudanar da sansanin horo, gasa, tara kuɗi ko kakar ƙungiya, kuma suke buƙatar mutane su zo, kasuwanci kuma su tallafa.",
    "Za ku koyi tushen tallata wasanni daga gefen mai gudanarwa: wa taron yake domin sa, yadda za a kai gare su, yadda ake gina kunshin masu ɗaukar nauyi da kasuwancin gida zai iya amincewa da shi, da yadda ake ba da rahoton sakamako don masu ɗaukar nauyi su dawo.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Makarantu da ƙungiyoyin gasa (league) suna da nasu dokoki kan masu ɗaukar nauyi, tambari (logo) da tara kuɗi, don haka ku tuntuɓi daraktan wasanni ko ƙungiyar gasarku kafin ku fara."
  ],
  finalTask: "Ku zaɓi taro ɗaya na gaske ko wanda kuke shiryawa (sansanin horo, gasa, tara kuɗi ko wasa a gida). Ku rubuta tsarin tallatawa a shafi ɗaya, kunshin masu ɗaukar nauyi mai matakai uku, da imel na neman tallafi ga wani kasuwancin gida ɗaya da aka rubuta da AI kuma kuka gyara da kalmominku. Ku sami amincewar daraktan wasanni ko ƙungiyar gasa, sannan ku rubuta lambobi uku da za ku ba masu ɗaukar nauyi rahotonsu bayan taron.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu horarwa, manajojin ƙungiya, ma'aikatan wasanni, masu shirya kulob da 'yan wasa da ke gudanar da sansanin horo, gasa, tara kuɗi ko kakar ƙungiya, kuma suke buƙatar mutane su zo, kasuwanci kuma su tallafa.",
    startingPoint: "Sun san wasansu da al'ummarsu, kuma suna amfani da kafofin sada zumunta (social media) da imel. Yawancinsu suna tallata taro da rubutu ko takardar talla (flyer) a ƙurarren lokaci, ba su taɓa rubuta kunshin masu ɗaukar nauyi ba, kuma ba sa mayar wa masu ɗaukar nauyi rahoton sakamako.",
    gap: "Idan babu tsari, mutane kaɗan ne ke zuwa taro, kuma ana roƙon masu ɗaukar nauyi na gida ta hanyar da ke da sauƙin ƙi, ko ba a sake roƙonsu ba. Tsarin tallatawa mai sauƙi, kunshin masu ɗaukar nauyi a sarari, roƙo na musamman da rahoton sakamako na gaskiya suna kawo iyalai da masu ɗaukar nauyi da ke dawowa.",
    constraints: [
      "Kalmomi masu sauƙi, kusan matakin karatu na aji 8",
      "Waya ko kwamfuta mai mataimakin AI kyauta da Canva; kayan aiki kyauta kawai",
      "Kusan minti 60 na darussa, da lokacin shirya taro na gaske",
      "Amincewar makaranta, ƙungiyar gasa ko kulob kan ranaku, masu ɗaukar nauyi, tambari da hotuna; takardar izinin iyaye don hotunan yara ƙanana",
      "Kuɗin masu ɗaukar nauyi yana bi ta hanyar hukuma ta makaranta ko kulob kaɗai"
    ],
    prerequisites: "Babu. Kwas ɗin \"Kayan Aikin AI ga 'Yan Wasa\" zai taimaka idan ba ku taɓa amfani da Canva ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da taron wasa na gaske ko wanda kuke shiryawa", action: "rubuta abin da taron ke bayarwa a jimla ɗaya da faɗin masu sauraron da ke yanke shawarar zuwa ko biya", standard: "tare da tabbatar da rana, wuri, kuɗi da amincewa tare da daraktan wasanni ko ƙungiyar gasa" },
    { id: "O2", condition: "Ta amfani da abin da taronku ke bayarwa da mataimakin AI", action: "rubuta tsarin tallatawa a shafi ɗaya mai hanyoyin isarwa, babban saƙo ɗaya da jadawalin lokaci", standard: "mai hanyoyi uku zuwa biyar, jadawalin sanarwa, tunatarwa, makon ƙarshe da godiya, da mutumin da aka ɗora wa kowane aiki" },
    { id: "O3", condition: "Ta amfani da mataimakin AI da samfurin Canva", action: "ƙirƙirar takardar talla (flyer) da rubutun kafofin sada zumunta mai muhimman bayanai biyar na taron", standard: "wani mutum ya duba su don kurakurai, kuma sun bi dokokin makarantarku kan tambari da hotunan yara ƙanana" },
    { id: "O4", condition: "Idan kun san abin da makarantarku ta yarda ku bayar", action: "gina kunshin masu ɗaukar nauyi na gida mai matakai uku", standard: "da farashin da aka duba tare da daraktan wasanni, alkawuran da za ku iya cikawa kaɗai, kuma kuɗi yana bi ta hanyar hukuma" },
    { id: "O5", condition: "Ta amfani da daftarin da AI ya rubuta", action: "rubuta imel na neman tallafi ga wani kasuwancin gida ɗaya", standard: "ƙasa da kalmomi 150, da dalili na gaskiya kuma takamaimai da yasa kuka zaɓe su, an aika daga asusun hukuma, tare da bibiya sau ɗaya" },
    { id: "O6", condition: "Bayan taronku", action: "ƙirƙirar rahoton godiya na shafi ɗaya ga masu ɗaukar nauyi mai lambobi uku, hoto da maganar wani", standard: "an duba kowace lamba, kuma an aika rahoton cikin makonni biyu" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tallata taron",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abin da kuke bayarwa, da wanda kuke ba",
          minutes: 5,
          goal: "Rubuta abin da taronku ke bayarwa da masu sauraronsa a jimla ɗaya.",
          text: [
            "Kowane taro yana bayar da wani abu: abin da mutane ke samu a madadin lokacinsu ko kuɗinsu. Sansanin horo na matasa yana bayar da ƙwarewa da nishaɗi a wuri mai aminci. Wasa a gida yana bayar da nishaɗi da haɗuwar al'umma. Gasa tana bayar da fafatawa ga ƙungiyoyi.",
            "Ku rubuta abin da kuke bayarwa a jimla ɗaya: \"Sansanin ƙwallon ƙafa na kwana biyu ga masu farawa, yara 'yan shekara 6 zuwa 10, 'yan wasan ƙungiyar makarantarmu ne za su jagorance shi, da riga (T-shirt) da abin ciye-ciye, ranar 12-13 ga Yuni.\" Sannan ku faɗi masu sauraro: wane ne ke yanke shawarar zuwa ko biya? Ga sansanin horo na yara, iyaye ne.",
            "Kafin ku tallata komai, ku tabbatar da muhimman abubuwa tare da daraktan wasanni ko ƙungiyar gasa: rana, wuri, kuɗi, inshora, tsaro da duk wata amincewa da ake buƙata."
          ],
          steps: ["Ku faɗi sunan taron.", "Ku rubuta abin da mutane za su samu.", "Ku faɗi wanda ke yanke shawarar zuwa ko biya.", "Ku tabbatar da rana, wuri, kuɗi da amincewa tare da daraktan wasanni ko ƙungiyar gasa."],
          words: [["Abin da ake bayarwa (offer)", "abin da mutane ke samu a madadin lokacinsu ko kuɗinsu."], ["Daraktan wasanni (athletic director)", "mutumin da ke gudanar da shirin wasanni na makaranta kuma yake amincewa da taruka."]],
          slides: [
            { title: "Kowane taro yana bayar da wani abu", bullets: ["Sansanin horo: ƙwarewa da nishaɗi, cikin aminci", "Wasa a gida: nishaɗi da haɗuwar al'umma", "Gasa: fafatawa"] },
            { title: "Abin da ake bayarwa a jimla ɗaya", bullets: ["Wa yake domin sa, me za su samu", "Yaushe kuma a ina"] },
            { title: "Ku fara dubawa", bullets: ["Rana, wuri, kuɗi", "Inshora, tsaro, amincewa"] }
          ],
          tryIt: "Ku zaɓi taro na gaske ko wanda kuke shiryawa. Ku rubuta abin da yake bayarwa a jimla ɗaya, ku faɗi masu sauraron da ke yanke shawarar zuwa ko biya.",
          youCanNow: "bayyana abin da taro ke bayarwa da masu sauraron da ke yanke shawara a jimla ɗaya.",
          quickCheck: [
            { objective: "O1", q: "Me wasa a gida yake bayarwa ga mutanen da suka zo?", options: ["Nishaɗi da haɗuwar al'umma", "Kunshin masu ɗaukar nauyi", "Inshora kyauta", "Tsarin horo"], answer: 0, why: "Kowane taro yana bayar da wani abu; wasa a gida yana bayar da nishaɗi da haɗuwar al'umma." },
            { objective: "O1", q: "Kuna son shirya gasa a wata mai zuwa. Me za ku yi kafin kowane talla?", options: ["Ku saka ranar a kafofin sada zumunta", "Ku buga takardun talla", "Ku tabbatar da rana, wuri, kuɗi, inshora da amincewa tare da daraktan wasanni ko ƙungiyar gasa", "Ku aika wa masu ɗaukar nauyi imel"], answer: 2, why: "Ku tabbatar da muhimman abubuwa da amincewa kafin ku tallata komai." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tsarin tallatawa a shafi ɗaya",
          minutes: 5,
          goal: "Rubuta tsari a shafi ɗaya mai hanyoyin isarwa, saƙonni da jadawalin lokaci.",
          text: [
            "Tsarin tallatawa yana amsa tambayoyi uku: a ina masu sauraro za su ji labarin taron, me za mu faɗa, kuma yaushe? Ku sa shi a shafi ɗaya.",
            "Taron wasanni na gida yakan fi nasara idan aka haɗa hanyoyi da yawa: wasiƙun labarai na makaranta ko kulob, shafukan ƙungiyar a kafofin sada zumunta, rukunin Facebook na yankin, takardun talla a makarantu, wuraren motsa jiki da shaguna, magana daga baki zuwa baki ta 'yan wasa da iyalansu, da labaran gida ko kalandar al'umma.",
            "Ku yi amfani da jadawali mai sauƙi: ku sanar kusan makonni hudu zuwa shida kafin taron, ku tunatar makonni biyu kafin, ku ƙara ƙoƙari sosai a makon ƙarshe, sannan ku rubuta saƙonnin godiya bayan taron. Mataimakin AI zai iya mayar da rubutunku tebur mai tsabta."
          ],
          steps: ["Ku jera hanyoyin isarwa uku zuwa biyar.", "Ku rubuta babban saƙo ɗaya.", "Ku yi jadawali: sanarwa, tunatarwa, makon ƙarshe, godiya.", "Ku nemi AI ya sa shi a tebur na shafi ɗaya.", "Ku ɗora wa wani mutum kowane aiki."],
          words: [["Tallatawa (promotion)", "faɗa wa mutane game da taronku don su zo."], ["Jadawalin lokaci (timeline)", "abin da zai faru a kowace rana."]],
          slides: [
            { title: "Tambayoyi uku", bullets: ["A ina za su ji labarinsa?", "Me za mu faɗa?", "Yaushe?"] },
            { title: "Hanyoyin isarwa na gida", bullets: ["Wasiƙun labarai da shafukan ƙungiya a kafofin sada zumunta", "Rukunin Facebook na yanki da takardun talla", "Magana baki zuwa baki da kalandar al'umma"] },
            { title: "Jadawalin lokaci", bullets: ["Ku sanar makonni 4-6 kafin", "Ku tunatar makonni 2 kafin", "Ku ƙara ƙoƙari a makon ƙarshe", "Ku gode wa mutane bayan taron"] }
          ],
          tryIt: "Ku tambayi mataimakin AI: \"Ka mayar da waɗannan rubuce-rubucen tebur na tsarin tallatawa a shafi ɗaya, mai hanyar isarwa, saƙo, rana da wanda ke da alhakin kowane aiki.\" Ku liƙa rubutunku game da taron, sannan ku gyara sakamakon.",
          youCanNow: "rubuta tsarin tallatawa a shafi ɗaya mai hanyoyin isarwa, saƙo, jadawalin lokaci da masu alhaki.",
          quickCheck: [
            { objective: "O2", q: "Waɗanne tambayoyi uku tsarin tallatawa yake amsawa?", options: ["Wa zai buga, wa zai ci, wa zai ci ƙwallo", "A ina masu sauraro za su ji labarinsa, me za mu faɗa, kuma yaushe", "Nawa, har yaushe, nisa nawa", "Wane tambari, wane launi, wane irin rubutu"], answer: 1, why: "Tsarin tallatawa ya ƙunshi hanyoyin isarwa, saƙo da lokaci." },
            { objective: "O2", q: "Taronku zai kasance mako mai zuwa, kuma ba a ɗora wa kowa aikin rubuta tunatarwa ba. Me za ku yi?", options: ["Ku yi fatan magana baki zuwa baki za ta yi aiki", "Ku soke taron", "Ku jira har ranar da ta gabata", "Ku ɗora wa wani mutum kowane aikin tallatawa yanzu"], answer: 3, why: "Kowane aiki a cikin tsarin yana buƙatar mutumin da ke da alhakinsa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin kayan talla da AI da Canva",
          minutes: 5,
          goal: "Yi takardar talla da rubutun kafofin sada zumunta don taronku da suka bi dokokin makarantarku.",
          text: [
            "Kowane kayan talla yana buƙatar muhimman bayanai biyar iri ɗaya: me ake yi, wa yake domin sa, yaushe, a ina, da yadda ake yin rajista ko samun tikiti. Ku ƙara hoto ɗaya da dalili ɗaya na zuwa.",
            "Ku yi amfani da mataimakin AI don rubuta daftarin gajerun kalmomi, sannan ku yi amfani da kayan zane kyauta kamar Canva don gina takardar talla da rubutu mai siffar murabba'i na kafofin sada zumunta daga samfuri (template).",
            "Ku bi dokokin makarantarku ko ƙungiyar gasa kan tambari, sunayen ƙungiya da hotunan yara ƙanana. Ku yi amfani da hotuna da izini kaɗai, kuma makarantu da yawa suna buƙatar takardar izinin iyaye (media release) kafin a saka hotunan ɗalibai."
          ],
          steps: ["Ku jera muhimman bayanai biyar.", "Ku nemi AI ya ba ku babban take da gajerun layuka biyu.", "Ku gina takardar talla da rubutun kafofin sada zumunta a Canva.", "Ku duba tambari da hotuna bisa dokokin makarantarku.", "Ku sa wani mutum ya duba rana, lokaci da hanyar haɗi (link)."],
          words: [["Takardar izinin hoto (media release)", "izini da aka sa hannu don amfani da hoto ko bidiyon wani."], ["Dubawa don kurakurai (proofread)", "duba a hankali don kurakurai kafin a raba."]],
          slides: [
            { title: "Bayanai biyar a kowane kayan talla", bullets: ["Me ake yi, wa yake domin sa", "Yaushe kuma a ina", "Yadda ake rajista ko samun tikiti"] },
            { title: "Ku yi shi", bullets: ["AI yana rubuta daftarin kalmomi", "Samfurin Canva don takardar talla da rubutu"] },
            { title: "Kafin a raba", bullets: ["Tambari da sunayen ƙungiya: ku bi dokokin makaranta", "Hotunan yara ƙanana: izini da takardar izinin iyaye", "Wani mutum ya duba don kurakurai"] }
          ],
          tryIt: "Ku yi takardar talla da rubutun kafofin sada zumunta don taronku. Ku nemi wani ya duba bayanai biyar ɗin da hanyar haɗin rajista.",
          youCanNow: "yin kayan talla a sarari da suka bi dokokin makaranta da na hotuna.",
          quickCheck: [
            { objective: "O3", q: "Wanne daga cikin waɗannan yana ɗaya daga cikin bayanai biyar da kowane kayan talla ke buƙata?", options: ["Yadda ake rajista ko samun tikiti", "Lambar wayar mai horarwa", "Sakamakon wasan bara", "Jerin farashin masu ɗaukar nauyi"], answer: 0, why: "Me ake yi, wa yake domin sa, yaushe, a ina da yadda ake rajista suna kan kowane kayan talla." },
            { objective: "O3", q: "Kun gama takardar talla. Me za ku yi kafin ku raba ta?", options: ["Ku raba ta nan take", "Ku ƙara hotunan ɗalibai ba tare da tambaya ba", "Ku sa wani mutum ya duba rana, lokaci da hanyar haɗi", "Ku cire hanyar haɗin rajista"], answer: 2, why: "Wani mutum zai iya gano kurakurai a muhimman bayanai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tallata taron",
        questions: [
          { objective: "O1", q: "Ga sansanin horo na matasa, su wane ne yawanci masu sauraron da ke yanke shawara?", options: ["Alƙalin wasa", "Masu horar da ƙungiyoyin abokan hamayya", "Iyayen yaran", "Direban bas"], answer: 2, why: "Iyaye ne ke yanke shawara kuma suke biyan kuɗin sansanin horo na matasa." },
          { objective: "O1", q: "Kafin ku tallata taro, ya kamata ku tabbatar da:", options: ["Rana, wuri, kuɗi da amincewa", "Launin riga kawai", "Yawan mabiyanku", "Babu komai"], answer: 0, why: "Ba za ku iya tallata taron da ba a amince da shi ba kuma ba a tsara shi ba." },
          { objective: "O2", q: "Yaushe ya kamata ku sanar da taron gida yawanci?", options: ["Ranar da ta gabace shi", "Bayan ya faru", "Shekara guda bayan haka", "Kusan makonni hudu zuwa shida kafin taron"], answer: 3, why: "Hakan yana ba mutane lokacin shiryawa, tare da tunatarwa daga baya." },
          { objective: "O3", q: "Waɗanne bayanai biyar ne ya kamata su kasance a kowace takardar talla?", options: ["Sakamako, yanayi, alamar ƙungiya (mascot), launi, waƙa", "Me ake yi, wa, yaushe, a ina, yadda ake rajista", "Kalmar sirrinku da adireshinku", "Tambari kawai"], answer: 1, why: "Waɗannan suna bar mutane su yanke shawara su ɗauki mataki." },
          { objective: "O3", q: "Kuna son saka hotunan yaran sansanin horo. Me kuke buƙata?", options: ["Babu komai", "Izini, kuma sau da yawa takardar izinin iyaye", "Tacewar hoto (filter)", "Ƙarin hashtag"], answer: 1, why: "Hotunan yara ƙanana suna buƙatar izini a ƙarƙashin yawancin dokokin makaranta." }
        ]
      }
    },
    {
      name: "Babi na 2: Masu ɗaukar nauyi da sakamako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gina kunshin masu ɗaukar nauyi na gida",
          minutes: 6,
          goal: "Gina kunshin masu ɗaukar nauyi mai matakai uku da kasuwancin gida zai iya amincewa da shi.",
          text: [
            "Mai ɗaukar nauyi (sponsor) kasuwanci ne da ke bayar da kuɗi, kaya ko hidima domin masu sauraronku su gan shi. Kasuwancin gida kamar shagunan pizza, masu sayar da motoci, wuraren motsa jiki da likitocin haƙori sukan ɗauki nauyin wasannin makaranta da na kulob.",
            "Ku sauƙaƙa shi da matakai uku, misali Tagulla (Bronze), Azurfa (Silver) da Zinariya (Gold). Kowane mataki yana jera abin da mai ɗaukar nauyi zai bayar da abin da zai samu: suna a kan tuta (banner), tambari a kan riga, rubutun godiya a kafofin sada zumunta, sanarwa a lokacin wasanni, ko tebur a wurin taron. Ku yi alkawarin abin da za ku iya cikawa ne kawai, da abin da makarantarku ta yarda da shi.",
            "Ku sa farashi ta hanyar tambayar daraktan wasanni abin da sauran masu ɗaukar nauyi suka biya a baya da kuma kuɗin da za ku kashe. Kada ku yi tsammanin manyan lambobi, kuma ku bar sarrafa kuɗi a cikin hanyar hukuma ta makarantarku ko kulob."
          ],
          steps: ["Ku jera abin da za ku iya bai wa masu ɗaukar nauyi da makarantarku ta yarda da shi.", "Ku raba abubuwan zuwa matakai uku.", "Ku tambayi daraktan wasanni farashin baya da kuɗin da za ku kashe.", "Ku sa kunshin a shafi ɗaya.", "Ku sa kuɗi ya bi ta hanyar hukuma ta makaranta ko kulob."],
          words: [["Mai ɗaukar nauyi (sponsor)", "kasuwancin da ke tallafa wa taronku domin a gan shi."], ["Kunshin masu ɗaukar nauyi (sponsor package)", "jerin shafi ɗaya na matakan masu ɗaukar nauyi, abin da suke bayarwa da abin da suke samu."]],
          slides: [
            { title: "Abin da mai ɗaukar nauyi yake so", bullets: ["Masu sauraronku su gan shi", "Kyakkyawan suna a cikin al'umma"] },
            { title: "Matakai uku", bullets: ["Tagulla, Azurfa, Zinariya", "Abin da suke bayarwa da abin da suke samu", "Ku yi alkawarin abin da za ku iya cikawa kawai"] },
            { title: "Kuɗi", bullets: ["Ku tambayi farashin baya da kuɗin da za ku kashe", "Ku bi hanyar hukuma ta makaranta ko kulob"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya taimaka muku tsara kunshin masu ɗaukar nauyi mai matakai uku don taronku, ta amfani da amfanonin da kuka jera kaɗai. Ku saka farashi ne kawai bayan kun yi magana da daraktan wasanni.",
          youCanNow: "gina kunshin masu ɗaukar nauyi na gida mai matakai uku, da bayyanannen abin da ake bayarwa da abin da ake samu.",
          quickCheck: [
            { objective: "O4", q: "Mene ne mai ɗaukar nauyi?", options: ["Iyayen ɗan wasa da ke aikin sa-kai", "Kasuwancin da ke bayar da kuɗi, kaya ko hidima domin masu sauraronku su gan shi", "Ofishin ƙungiyar gasa", "Mai sayen tikiti"], answer: 1, why: "Masu ɗaukar nauyi suna bayar da tallafi domin masu sauraronku su gan su." },
            { objective: "O4", q: "Wani mai ɗaukar nauyi yana neman a saka tambarinsa a rigunan 'yan wasa, amma makarantarku ba ta yarda ba. Me za ku yi?", options: ["Ku yi alkawari duk da haka", "Ku yi shi ba tare da faɗa wa makaranta ba", "Ku ƙara masa farashi", "Ku bayar da abin da makarantarku ta yarda da shi kaɗai, kamar tuta ko rubutun godiya"], answer: 3, why: "Ku yi alkawarin abin da za ku iya cikawa ne kawai, da abin da makarantarku ta yarda da shi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Neman mai ɗaukar nauyi da imel da AI ya rubuta",
          minutes: 5,
          goal: "Rubuta ku aika gajeren imel na musamman na neman mai ɗaukar nauyi.",
          text: [
            "Imel na neman tallafi (pitch) gajere ne kuma na musamman. Yana faɗin ko su wane ne ku, mene ne taron, dalilin da yasa kasuwancinsu ya dace, abin da kuke nema, da yadda za su amfana. Ku haɗa ko ku saka hanyar haɗi zuwa kunshin shafi ɗaya.",
            "Ku tambayi mataimakin AI: \"Ka rubuta gajeren imel mai fara'a ga [nau'in kasuwanci] da ke neman su ɗauki nauyin sansanin horon ƙwallon kwando na matasa. Ka ambaci masu sauraronmu na iyalai 80 na yankin da matakinmu na Azurfa (Silver). Ƙasa da kalmomi 150.\" Sannan ku gyara shi: ku ƙara wani abu na gaskiya kuma takamaimai game da wannan kasuwancin da dalilin da yasa kuka zaɓe su.",
            "Ku bibiya sau ɗaya bayan kusan mako guda idan ba ku ji komai ba. Ziyartar su da kanku tare da ɗan wasa ko iyaye sau da yawa yana aiki fiye da imel ga kasuwancin gida. Koyaushe ku ce na gode, ko da sun ce a'a."
          ],
          steps: ["Ku zaɓi kasuwancin gida ɗaya da ya dace da masu sauraronku.", "Ku nemi AI ya rubuta gajeren daftari ƙasa da kalmomi 150.", "Ku ƙara dalili na gaskiya kuma takamaimai da yasa kuka zaɓe su.", "Ku haɗa kunshin, ku aika daga asusun hukuma.", "Ku bibiya sau ɗaya bayan mako guda; ku gode musu ko ta yaya."],
          words: [["Roƙon tallafi (pitch)", "gajeriyar buƙata da ke bayyana abin da kuke so da yadda zai taimake su."], ["Bibiya (follow-up)", "saƙo na biyu mai ladabi idan ba ku ji daga gare su ba."]],
          slides: [
            { title: "Kyakkyawan imel na neman tallafi", bullets: ["Ko su wane ne ku, da taron", "Dalilin da yasa kasuwancinsu ya dace", "Abin da kuke nema da yadda za su amfana"] },
            { title: "AI yana rubuta daftari, ku kuke keɓance shi", bullets: ["Ƙasa da kalmomi 150", "Ku ƙara dalili na gaskiya kuma takamaimai"] },
            { title: "Bayan aikawa", bullets: ["Ku bibiya sau ɗaya bayan mako guda", "Ku ziyarce su da kanku idan za ku iya", "Ku gode musu, a'a ko i"] }
          ],
          tryIt: "Ku zaɓi kasuwancin gida ɗaya. Ku yi amfani da AI don rubuta daftarin imel na neman tallafi, ku keɓance shi, sannan ku sa mai horarwarku ko daraktan wasanni ya karanta shi kafin ku aika.",
          youCanNow: "rubuta gajeren imel na musamman na neman mai ɗaukar nauyi da bibiya cikin ladabi.",
          quickCheck: [
            { objective: "O5", q: "Me ya kamata imel na neman tallafi ya ƙunsa?", options: ["Ko su wane ne ku, taron, dalilin da yasa kasuwancinsu ya dace, buƙatar da yadda za su amfana", "Dukkan jadawalin wasannin kakarku", "Dogon tarihin ƙungiyar", "Farashi kawai"], answer: 0, why: "Gajeren roƙo na musamman yana ƙunshe da waɗannan abubuwa biyar kuma yana haɗa kunshin." },
            { objective: "O5", q: "Wani shagon pizza na gida bai amsa roƙonku ba bayan mako guda. Me za ku yi?", options: ["Ku aika musu imel kowace rana", "Ku rubuta game da su a intanet", "Ku bibiya sau ɗaya, ko ku ziyarce su tare da ɗan wasa ko iyaye", "Ku haƙura kada ku sake tambaya"], answer: 2, why: "Ku bibiya sau ɗaya bayan kusan mako guda; ziyartarsu da kanku sau da yawa ya fi aiki." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ba da rahoton sakamako don masu ɗaukar nauyi su dawo",
          minutes: 5,
          goal: "Bi diddigin lambobin taro ku aika wa masu ɗaukar nauyi gajeren rahoton godiya.",
          text: [
            "Masu ɗaukar nauyi suna dawowa idan sun ga abin da suka samu. Ku bi diddigin 'yan lambobi a lokacin taron da bayansa: yawan mahalarta ko masu rajista, yawan mutanen da suka ga rubutun kafofin sada zumunta da suka mayar da martani, da duk wani abu na musamman ga mai ɗaukar nauyi, kamar yawan amfani da takardar rangwame (coupon) ko ziyarar teburinsu.",
            "Ku aika rahoton godiya na shafi ɗaya cikin makonni biyu: hoton tutarsu ko tambarinsu a wurin taron, lambobin, maganar wani iyaye ko ɗan wasa, da godiya daga ƙungiyar.",
            "Ku nemi mataimakin AI ya mayar da lambobinku da rubuce-rubucenku rahoto mai fara'a, sannan ku duba kowace lamba da kanku. Kada ku taɓa ƙara lambobi fiye da gaskiya; amincewa ce ke dawo da masu ɗaukar nauyi shekara mai zuwa."
          ],
          steps: ["Ku zaɓi lambobi uku kafin taron.", "Ku tattara su a lokacin taron da bayansa.", "Ku ɗauki hotunan alamun masu ɗaukar nauyi.", "Ku rubuta daftarin rahoto na shafi ɗaya da AI.", "Ku duba kowace lamba, ku aika cikin makonni biyu."],
          words: [["Isarwa (reach)", "yawan mutanen da suka ga wani rubutu."], ["Rahoton godiya", "gajeren taƙaitawa ga masu ɗaukar nauyi mai hotuna da sakamako."]],
          slides: [
            { title: "Ku bi diddigin lambobi uku", bullets: ["Yawan mahalarta ko masu rajista", "Masu ganin rubutu da masu mayar da martani", "Na musamman ga mai ɗaukar nauyi: coupon, ziyara"] },
            { title: "Rahoton godiya", bullets: ["Hoton tambarinsu a wurin taron", "Lambobin da maganar wani", "Ku aika cikin makonni biyu"] },
            { title: "Amincewa", bullets: ["Ku duba kowace lamba", "Kada ku taɓa ƙara lambobi"] }
          ],
          tryIt: "Aikin ƙarshe: don taronku, ku kammala tsarin tallatawa, kunshin masu ɗaukar nauyi da imel na neman tallafi, ku sami amincewar daraktan wasanni ko ƙungiyar gasa, sannan ku rubuta lambobi uku da za ku ba masu ɗaukar nauyi rahotonsu.",
          youCanNow: "ba masu ɗaukar nauyi rahoton sakamako na gaskiya don su so dawowa.",
          quickCheck: [
            { objective: "O6", q: "Me ke dawo da masu ɗaukar nauyi shekara mai zuwa?", options: ["Babban tambari a gaba", "Ganin abin da suka samu, da lambobi na gaskiya", "Imel mai tsawo", "Farashi mai rahusa"], answer: 1, why: "Masu ɗaukar nauyi suna dawowa idan rahoto ya nuna sakamako na gaske." },
            { objective: "O6", q: "AI ya rubuta rahotonku kuma ya ce mutane 200 sun zo, amma ƙidayarku 150 ce. Me za ku yi?", options: ["Ku aika shi; mafi girma ya fi kyau", "Ku ɗauki matsakaicin lambobin biyu", "Ku cire lambar", "Ku gyara ta zuwa 150 kafin ku aika"], answer: 3, why: "Ku duba kowace lamba da kanku, kuma kada ku taɓa ƙara su." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Masu ɗaukar nauyi da sakamako",
        questions: [
          { objective: "O4", q: "Me mai ɗaukar nauyi yake so yawanci?", options: ["Ya horar da ƙungiyar", "Tikiti kyauta kawai", "Kalmomin sirrinku", "Masu sauraronku su gan shi, ya kuma sami kyakkyawan suna"], answer: 3, why: "Masu ɗaukar nauyi suna tallafa muku domin masu sauraronku su gan su." },
          { objective: "O4", q: "Ta yaya ya kamata ku sa farashin masu ɗaukar nauyi?", options: ["Ku tambayi daraktan wasanni farashin baya da kuɗin da za ku kashe", "Ku yi tsammanin babbar lamba", "Ku kwafi ƙungiyar ƙwararru", "Ku bar AI ya yanke shawara"], answer: 0, why: "Farashin baya na gaske da kuɗin da za a kashe suna sa shi ya zama adalci kuma mai yiwuwa." },
          { objective: "O5", q: "Me ke sa imel na neman tallafi ya zama na musamman?", options: ["Imel mai tsawo sosai", "Emoji masu yawa", "Dalili na gaskiya kuma takamaimai da yasa kuka zaɓi wannan kasuwancin", "Aika shi ga kasuwanci 500 lokaci ɗaya"], answer: 2, why: "Dalilai takamaimai suna nuna kun san su." },
          { objective: "O5", q: "Wani kasuwanci bai amsa ba. Me za ku yi?", options: ["Ku aika imel kowace rana", "Ku rubuta game da su a intanet", "Ku haƙura nan take", "Ku bibiya sau ɗaya bayan kusan mako guda"], answer: 3, why: "Bibiya ɗaya mai ladabi aiki ne na ƙwarewa." },
          { objective: "O6", q: "Mutane 140 ne suka zo taronku. Me za ku ba da rahotonsa?", options: ["250, don ya fi kyau", "140", "Kusan 200", "Babu komai"], answer: 1, why: "Lambobi na gaskiya suna gina amincewa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tallata Harkokin Wasanni ga Masu Gudanarwa",
    questions: [
      { objective: "O1", q: "Abin da taro ke bayarwa shi ne:", options: ["Farashin tikiti kawai", "Tambarin ƙungiya", "Abin da mutane ke samu a madadin lokacinsu ko kuɗinsu", "Filin wasa"], answer: 2, why: "Abin da ake bayarwa shi ne amfanin da masu sauraro ke samu." },
      { objective: "O1", q: "Wane ne ke amincewa da taruka da masu ɗaukar nauyi na makaranta?", options: ["Yawanci daraktan wasanni", "Wani mai goyon baya", "Mai ɗaukar nauyi", "Mai horar da ƙungiyar abokan hamayya"], answer: 0, why: "Daraktan wasanni ne ke gudanar da shirin wasanni na makaranta." },
      { objective: "O2", q: "Kyakkyawan tsarin tallatawa yana dacewa a:", options: ["Shafi ɗaya", "Shafuka hamsin", "Ɗan takarda ba tare da ranaku ba", "Babu komai"], answer: 0, why: "Shafi ɗaya yana sa shi ya zama a sarari kuma mai amfani." },
      { objective: "O2", q: "Wace ce hanyar isarwa ta gida mai kyau?", options: ["Ɗakin canja kaya na abokan hamayya", "Saƙonnin sirri ga baƙi", "Rukunin Facebook na yanki da wasiƙun labarai na makaranta", "Babu ɗaya"], answer: 2, why: "Waɗannan suna kaiwa ga iyalan yankin." },
      { objective: "O2", q: "Yaushe ya kamata ku rubuta saƙonnin godiya?", options: ["Ba a taɓa ba", "Bayan taron", "Kafin sanarwa", "Sai idan kun ci nasara"], answer: 1, why: "Saƙonnin godiya suna gina kyakkyawar dangantaka don lokaci na gaba." },
      { objective: "O2", q: "Kowane aikin tallatawa ya kamata ya kasance da:", options: ["Babu mai alhaki", "Masu alhaki goma", "AI a matsayin mai alhaki", "Mutumin da ke da alhaki"], answer: 3, why: "Dole wani ya ɗauki alhakin kowane aiki." },
      { objective: "O3", q: "Wane bayani ne ya ɓace daga \"Sansanin ƙwallon ƙafa, 12 ga Yuni, Lincoln Park\"?", options: ["Yaushe", "A ina", "Yadda ake rajista", "Me ake yi"], answer: 2, why: "Mutane suna buƙatar sanin yadda ake rajista." },
      { objective: "O3", q: "Takardar izinin hoto (media release) ita ce:", options: ["Taron manema labarai", "Labari a jarida", "Tikiti", "Izini da aka sa hannu don amfani da hoto ko bidiyon wani"], answer: 3, why: "Tana ba da izinin raba hotuna." },
      { objective: "O3", q: "Kafin ku raba takardar talla ya kamata ku:", options: ["Sa wani mutum ya duba ta don kurakurai", "Ƙara launuka", "Saka ta da tsakar dare", "Bar ranar"], answer: 0, why: "Mai karatu na biyu yana gano kurakurai." },
      { objective: "O4", q: "Kunshin masu ɗaukar nauyi yawanci yana da:", options: ["Babban farashi ɗaya", "Matakai uku na abin da ake bayarwa da abin da ake samu", "Babu amfani", "Tambari kawai"], answer: 1, why: "Matakai suna sauƙaƙa amincewa." },
      { objective: "O4", q: "Wanne ne amfanin mai ɗaukar nauyi?", options: ["Horar da ƙungiyar", "Zaɓar 'yan wasan da za su buga", "Sunansa a kan tuta", "Bayanan 'yan wasa kyauta"], answer: 2, why: "Ganin sa a idon jama'a shi ne babban amfani." },
      { objective: "O4", q: "Kuɗin masu ɗaukar nauyi ya kamata ya bi ta:", options: ["Hanyar hukuma ta makaranta ko kulob", "Asusunku na kanku", "Tsabar kuɗi a cikin jaka", "Aboki"], answer: 0, why: "Hanyoyin hukuma suna kare kowa." },
      { objective: "O4", q: "Ya kamata ku yi wa masu ɗaukar nauyi alkawarin:", options: ["Duk abin da suke so", "Kofunan gasa", "Lokacin 'yan wasa ba tare da tambaya ba", "Abin da za ku iya cikawa da abin da makarantarku ta yarda da shi"], answer: 3, why: "Karya alkawari yana sa a rasa masu ɗaukar nauyi." },
      { objective: "O5", q: "Imel na neman tallafi ya kamata ya kai kusan:", options: ["Shafuka biyu", "Ƙasa da kalmomi 150", "Kalma ɗaya", "Tsawon da zai yiwu"], answer: 1, why: "Gajerun imel ana karanta su." },
      { objective: "O5", q: "AI ya rubuta daftarin roƙonku. Abu na gaba shi ne ku:", options: ["Aika shi ga kowa ba tare da canji ba", "Ƙara dalili na gaskiya kuma takamaimai da yasa kuka zaɓi wannan kasuwancin", "Ƙara lambobi na ƙarya", "Goge shi"], answer: 1, why: "Taɓawa ta musamman tana kawo amsa." },
      { objective: "O5", q: "Abin da sau da yawa ya fi imel aiki ga kasuwancin gida:", options: ["Aika imel 10", "Kira da tsakar dare", "Rubuta sharhi na fushi", "Ziyartarsu da kanku tare da ɗan wasa ko iyaye"], answer: 3, why: "Kasuwancin gida suna amsa wa mutane na gaske." },
      { objective: "O5", q: "Wani kasuwanci ya ce a'a. Ku:", options: ["Gode musu duk da haka", "Yi jayayya", "Rubuta game da su a intanet", "Ci gaba da aika imel"], answer: 0, why: "Kyakkyawar dangantaka na iya kawo i daga baya." },
      { objective: "O6", q: "Wace lamba ce ta musamman ga mai ɗaukar nauyi?", options: ["Girman takalminku", "Yanayin iska", "Yawan amfani da coupon daga tayinsu", "Sakamakon ƙarshe na wasa kawai"], answer: 2, why: "Tana nuna abin da suka samu kai tsaye." },
      { objective: "O6", q: "Yaushe ya kamata ku aika rahoton godiya?", options: ["Shekara mai zuwa", "Ba a taɓa ba", "Kafin taron", "Cikin makonni biyu"], answer: 3, why: "Sakamako sabo yana barin tasiri mafi ƙarfi." },
      { objective: "O6", q: "AI ya rubuta rahotonku. Kafin ku aika, ku:", options: ["Ƙara lambobi sama", "Duba kowace lamba da kanku", "Cire hotuna", "Aika shi ba tare da karantawa ba"], answer: 1, why: "AI yana iya yin kuskure; amincewa ta dogara ne kan daidaito." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 2, 6, 9, 11, 14, 18, 19]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tsarin tallatawa",
        objective: "O2",
        notYet: "Babu jadawalin lokaci, hanyoyin isarwa sun yi kaɗan, ko ba a ɗora wa kowa ayyuka ba.",
        meets: "Shafi ɗaya mai hanyoyin isarwa uku zuwa biyar, babban saƙo ɗaya, jadawalin sanarwa, tunatarwa, makon ƙarshe da godiya, da mai alhakin kowane aiki.",
        exceeds: "Hanyoyin isarwa sun dace da masu sauraron da ke yanke shawara da aka ambata a cikin abin da ake bayarwa."
      },
      {
        name: "Kunshin masu ɗaukar nauyi",
        objective: "O4",
        notYet: "Matakai ƙasa da uku, farashin da aka yi tsammani, ko alkawuran da makaranta ba ta yarda da su ba.",
        meets: "Matakai uku da bayyanannen abin da ake bayarwa da abin da ake samu, farashin da aka duba tare da daraktan wasanni, kuma kuɗi yana bi ta hanyar hukuma.",
        exceeds: "Kowane mataki ya dace da girman wani kasuwancin gida daban, kuma yana da lamba ta musamman ga mai ɗaukar nauyi da za a ba da rahotonta."
      },
      {
        name: "Imel na neman tallafi",
        objective: "O5",
        notYet: "Yana kama da rubutun AI da aka kwafa, ya yi tsawo, ko babu dalili takamaimai na zaɓar wannan kasuwancin.",
        meets: "Ƙasa da kalmomi 150, da kalmomin marubucin, da dalili na gaskiya na zaɓar kasuwancin, kuma an haɗa kunshin.",
        exceeds: "Yana da tsarin bibiya da zaɓin ziyara ido da ido."
      },
      {
        name: "Amincewa da tsarin sakamako",
        objective: "O6",
        notYet: "Babu amincewa, ko ba a zaɓi lambobi don rahoton masu ɗaukar nauyi ba.",
        meets: "Daraktan wasanni ko ƙungiyar gasa ya amince, kuma an zaɓi lambobi uku da za a ba masu ɗaukar nauyi rahotonsu.",
        exceeds: "Yana faɗin yadda za a tattara kowace lamba da lokacin da za a aika rahoton."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala aikin ƙarshe kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric",
      "Tarukan da suka kai burinsu na yawan mahalarta ko masu rajista",
      "Masu ɗaukar nauyi na gida da aka samu, da waɗanda suka dawo don taro ko kaka na gaba",
      "Masu koyo da suka ce sun aika wa masu ɗaukar nauyi rahoton sakamako cikin makonni biyu bayan taron"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Asusun Canva kyauta",
      "Dokokin makarantarku, ƙungiyar gasa ko kulob kan masu ɗaukar nauyi, tambari da takardun izinin hoto",
      "Kusan minti 60 na darussa, da lokacin shirya taro na gaske ɗaya"
    ],
    facilitatorNotes: [
      "Ku gayyaci daraktan wasanni ko wakilin ƙungiyar gasa zuwa zama na farko, don a fahimci amincewa, farashi da sarrafa kuɗi tun farko.",
      "Ku shirya takardun izinin hoto na iyaye kafin kowa ya saka hotunan yara ƙanana.",
      "Ku haɗa 'yan wasa da babban mutum don ziyara da imel ga masu ɗaukar nauyi; ku aika roƙo daga asusun hukuma.",
      "Kada ku taɓa barin masu koyo su sarrafa kuɗin masu ɗaukar nauyi a wajen hanyar hukuma ta makaranta ko kulob.",
      "Bayan taron, ku duba rahotannin masu ɗaukar nauyi tare a matsayin rukuni, kuma ku duba kowace lamba kafin a aika su."
    ]
  }
};
