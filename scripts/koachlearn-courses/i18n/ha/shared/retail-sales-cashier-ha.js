"use strict";

// Koach Learn course, Hausa (ha) translation of shared/retail-sales-cashier.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "retail-sales-cashier-ha",
  lang: "ha",
  translationOf: "retail-sales-cashier",
  category: "Workforce Development",
  name: "Dabarun Sayarwa a Shago da Aikin Mai Karɓar Kuɗi (Cashier)",
  skills: "Shigar da kaya a na'urar sayarwa, Ƙirga canji a gaban mai saye, Duba katin shaida da manyan takardun kuɗi, Ba da shawarar kaya ba tare da matsi ba, Karɓar kayan da aka dawo da kwantar da hankalin mai fushi, Gudanar da lokacin aiki (shift)",
  outcome: "aiki a na'urar karɓar kuɗi ta shago daga buɗewa zuwa rufewa: shigar da kayan saye, ƙirga canji daidai a gaban mai saye, duba katin shaida da manyan takardun kuɗi kafin sayarwa, ba da shawarar kaya mai amfani, karɓar kayan da aka dawo ko kula da mai saye mai fushi bisa ƙa'idar shago, da bin jerin matakan lokacin aiki.",
  about: [
    "Aikin mai karɓar kuɗi (cashier) da na mai sayarwa a shago suna cikin ayyukan farko da suka fi yawa a Amurka, kuma shaguna suna ɗaukar mutanen da ba su taɓa aiki ba. Suna kuma zama mataki na farko mai kyau ga masu komawa aiki bayan sun daɗe ba sa aiki. Wannan kwas ɗin yana shirya ku don ranar farko.",
    "Za ku yi atisayen sayarwa daga gaisuwa zuwa rasit, ku ƙirga canji yadda ƙwararrun masu karɓar kuɗi suke yi, ku duba katin shaida don kayan da ke da iyakar shekaru, ku gane takardar kuɗi ta jabu da zambar katin kyauta (gift card), ku ba da shawarar kaya ba tare da matsi ba, kuma ku kula da kayan da aka dawo da masu saye masu fushi bisa ƙa'ida.",
    "Kowane shago yana da irin na'urarsa da ƙa'idojinsa, kuma shagon ne zai horar da ku a kansu. Wannan kwas ɗin yana ba ku dabarun da ke aiki a kowane shago, don ku koya da sauri kuma ku rage kurakurai. Yana kuma nuna muku takardar shaidar ƙwarewa ta gaske a sana'ar sayarwa da za ku iya samu.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" da za ku iya yi a gida da sulalla, kuɗin wasa na allo, ko guntayen takarda. Akwai tambayoyi biyu masu sauri bayan kowane darasi, gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi Katin Lokacin Aikinku na Mai Karɓar Kuɗi a shafi ɗaya: (1) matakan buɗe aljihun kuɗinku (drawer), (2) abin da za ku faɗa daga gaisuwa zuwa rasit, da layi ɗaya na shawarar kaya, (3) rubutun sayarwa biyar na atisaye da kuka ƙirga canji daidai, (4) matakanku don sayar da kaya mai iyakar shekaru da kuma don babbar takardar kuɗi, (5) lokuta uku da za ku kira manaja, (6) matakan rufewa, da (7) layi ɗaya da ke ambaton takardar shaidar ƙwarewa ko aikin da za ku nema da ranar da za ku fara.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da ke neman aikin farko, manyan da ke dawowa gida daga gidan yari, da manyan da ke canza sana'a ko komawa aiki. Da yawa ba su taɓa aiki a na'urar karɓar kuɗi ba; wasu sun biya da kansu a injin biyan kai (self-checkout) amma ba su taɓa tsayawa a bayan kanta ba.",
    startingPoint: "Suna iya ƙara da rage kuɗi da ɗan taimako, kuma sun san sulalla da takardun kuɗi. Ba su da ƙwarewa ko kaɗan a na'urar sayarwa (POS), aljihun kuɗi, duba katin shaida, ƙa'idojin shago ko sayarwa.",
    gap: "Shaguna suna ɗaukar ma'aikata saboda halinsu kuma suna horar da su a wurin aiki, amma sababbin masu karɓar kuɗi da ke jinkiri wajen canji, ba su da tabbas kan duba katin shaida, ko suna tsoron masu saye masu fushi, su ne ke samun gibi a aljihun kuɗi ko su rasa aikin da wuri. Masu koyo suna buƙatar ɗabi'un asali kafin lokacin aiki na farko don su ci ganawar ɗaukar aiki, su gama horo da sauri kuma su riƙe aikin.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 7)",
      "Na'urori: waya ko kwamfutar ɗakin karatu; atisaye ana yin sa da sulalla, kuɗin wasa ko guntayen takarda, ba a buƙatar na'urar sayarwa",
      "Lokaci: darussa na minti 4 zuwa 6",
      "Kowane shago yana da na'urarsa, ƙa'idojinsa da dokokinsa; masu koyo suna bin horon shagonsu",
      "Dokokin sayar da kaya mai iyakar shekaru sun bambanta bisa jiha; a wasu jihohi ba a yarda matasa su sayar da barasa ko taba ba",
      "Tsaro: ba a bin ɓarawon shago kuma ba a yin turjiya a fashi; ku bi ƙa'idar shago kuma ku kira 911"
    ],
    prerequisites: "Babu. Masu son ƙarin atisaye kan kashi (percent) da kuɗi za su iya ɗaukar kwas ɗin \"Everyday Math for Work and Life\"; kwas ɗin \"Customer Service Excellence\" yana zurfafa kan hidimar abokan ciniki."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku sayarwar atisaye mai kaya da yawa, takardar rangwame (coupon) da biya", action: "gudanar da sayarwa daga gaisuwa zuwa rasit bisa tsari daidai", standard: "da jimilla daidai da godiya kowane lokaci" },
    { id: "O2", condition: "Idan aka ba ku jimilla da kuɗin da mai saye ya miƙa muku", action: "ƙirga canji ga mai saye ta hanyar ƙirga sama (count-up)", standard: "da canji daidai a sayarwa 5 cikin 5 na atisaye" },
    { id: "O3", condition: "Idan aka ba ku kaya mai iyakar shekaru, babbar takardar kuɗi ko mai saye da ke sayen katunan kyauta da yawa", action: "duba katin shaida, takardar kuɗin ko alamun gargaɗi kafin gama sayarwa", standard: "bisa doka da ƙa'idar shago, da kiran manaja idan wani abu bai yi daidai ba" },
    { id: "O4", condition: "Idan aka ba ku mai saye da ke neman wani abu", action: "yin tambaya buɗaɗɗiya ɗaya da ba da shawarar kaya mai alaƙa ɗaya tare da amfaninsa", standard: "ba tare da matsi ba, da karɓar \"a'a\" cikin ladabi" },
    { id: "O5", condition: "Idan aka ba ku kayan da aka dawo, matsalar farashi ko mai saye mai fushi", action: "warware matsalar bisa ƙa'idar shago da kiran manaja idan ta wuce aikinku", standard: "kuna cikin natsuwa kuma kuna kiyaye kanku da sauran mutane" },
    { id: "O6", condition: "Ta amfani da abin da kuka koya a wannan kwas", action: "rubuta jerin matakan lokacin aiki a shafi ɗaya don buɗewa, gudanarwa da rufe na'urar karɓar kuɗi", standard: "da kowane mataki bisa tsari da ranar matakinku na gaba na neman aiki" }
  ],
  chapters: [
    {
      name: "Babi na 1: Na'urar karɓar kuɗi da kuɗin",
      lessons: [
        {
          title: "Sayarwa daga gaisuwa zuwa rasit",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gudanar da sayarwar atisaye bisa tsari daidai, daga gaisuwa zuwa rasit.",
          text: [
            "Masu karɓar kuɗi suna karanta lambar kaya da na'ura (scan), karɓar biya, ba da canji da rasit, sa kaya a leda, karɓar kayan da aka dawo da amsa tambayoyi. Horon yawanci a wurin aiki ake yi kuma yana ɗaukar har zuwa 'yan makonni, a cewar Hukumar Ƙididdigar Ma'aikata ta Amurka (BLS). Ba a buƙatar digiri ko lasisi, ko da yake shaguna da yawa sun fi son takardar kammala sakandare ko GED (takardar daidai da sakandare a Amurka).",
            "Kowace na'urar karɓar kuɗi daban take, amma kowace sayarwa tana bin tsari ɗaya: ku gaishe da mai saye, ku karanta kowane kaya kuna kallon farashin a allo, ku cire rangwame ko takardun rangwame, ku faɗa wa mai saye jimilla, ku karɓi biya, ku ba da canji da rasit, sannan ku gode masa.",
            "Ku riƙa kallon allon yayin da kuke karanta kaya. Idan kaya ya shiga sau biyu, ko farashin bai yi daidai da na alamar farashi a kan shiryayye ba, ku tsaya ku gyara kafin karɓar biya. Mai horar da ku zai nuna muku yadda ake cire kaya (void) da yadda ake neman tabbatar da farashi (price check) a na'urarku.",
            "Masu saye suna biya da tsabar kuɗi, kati (taɓawa, sakawa ko gogewa), walat ɗin waya, katin kyauta ko katin tallafin gwamnati. Ku bar mai saye ya riƙe katinsa ya shigar da lambar sirrinsa (PIN) da kansa. Kada ku taɓa tambayar PIN a bayyane, kuma kada ku taɓa riƙe katin mai saye."
          ],
          steps: [
            "Ku gaishe da mai saye kuna kallon idonsa: \"Sannu, kun samu duk abin da kuke nema?\"",
            "Ku karanta kowane kaya ku kalli allo don sunan da farashi daidai.",
            "Ku tambayi takardar rangwame ko lambar lada ta shago kafin ku yi jimilla.",
            "Ku faɗi jimilla a bayyane: \"Jimillarku $23.40 ce.\"",
            "Ku karɓi biya ku bi umarnin da ke kan allon na'urar.",
            "Ku ba da canji da rasit, ku gode wa mai saye."
          ],
          words: [
            ["POS (point of sale)", "tsarin na'urar sayarwa: allo, na'urar karanta lamba, na'urar kati da aljihun kuɗi."],
            ["Void", "cire kaya daga sayarwa kafin a biya shi."],
            ["Price check", "tambayar abokin aiki ko tsarin na'ura farashin daidai na wani kaya."],
            ["Rasit (receipt)", "takarda ko imel da ke nuna abin da mai saye ya saya da abin da ya biya."]
          ],
          slides: [
            { title: "Abin da mai karɓar kuɗi ke yi", bullets: ["Karanta kaya, karɓar biya, ba da canji da rasit", "Sa kaya a leda da karɓar kayan da aka dawo", "Horo a wurin aiki ake yi, yawanci 'yan makonni"] },
            { title: "Tsari ɗaya a kowace sayarwa", bullets: ["Gaisuwa, karanta kaya, rangwame, jimilla", "Biya, canji da rasit", "Gode wa mai saye"] },
            { title: "Ku kalli allo", bullets: ["Kaya ya shiga sau biyu? Ku gyara kafin biya", "Farashi ya bambanta da na shiryayye? Ku nemi price check", "Mai horar da ku zai nuna yadda ake void"] },
            { title: "Biya da kati", bullets: ["Mai saye ne ke riƙe katinsa da PIN ɗinsa", "Kada ku taɓa tambayar PIN a bayyane", "Kada ku taɓa riƙe katin mai saye"] }
          ],
          sources: [{ name: "US Bureau of Labor Statistics: Cashiers (Occupational Outlook Handbook)", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }],
          tryIt: "Ku ajiye kayan gida biyar a kan tebur ku rubuta farashi a guntun takarda ga kowanne. Ku zama mai karɓar kuɗi: ku gaishe da mai saye na tunani, ku \"karanta\" kowane kaya ta faɗar farashinsa a bayyane ku rubuta shi, ku rage $2 da takardar rangwame, ku faɗi jimilla, ku gode wa mai saye. Ku duba jimillarku da na'urar lissafi.",
          youCanNow: "gudanar da sayarwa bisa tsari daidai, gano kuskuren karanta kaya kafin biya da karɓar biya da kati lafiya.",
          quickCheck: [
            { objective: "O1", q: "Me ke zuwa daidai kafin ku faɗa wa mai saye jimilla?", options: ["Tambayar takardar rangwame ko lambar lada", "Ba da rasit", "Ƙirga canji", "Yin ban kwana"], answer: 0, why: "Dole a sa rangwame da lada kafin jimilla, in ba haka ba jimillar za ta yi kuskure." },
            { objective: "O1", q: "Riga ta shiga sau biyu a allo. Me za ku yi?", options: ["Ku bar mai saye ya gano a rasit", "Ku karɓi kuɗin ku gyara wani lokaci", "Ku tsaya ku cire ƙarin kayan kafin biya", "Ku cire ta biyun daga shiryayye"], answer: 2, why: "Gyara kaya da ya shiga sau biyu kafin biya yana sa jimilla ta yi daidai kuma yana hana dawo da kaya daga baya." }
          ]
        },
        {
          title: "Ƙirga canji da kiyaye aljihun kuɗinku daidai",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ƙirga canji daidai ta hanyar ƙirga sama daga jimilla zuwa kuɗin da aka biya.",
          text: [
            "Ko da na'ura tana nuna canji, ƙwararrun masu karɓar kuɗi suna ƙirga shi a bayyane. Wannan yana gano kurakurai kuma yana nuna wa mai saye cewa canjin daidai ne. Ana kiran sa hanyar ƙirga sama (count-up): ku fara daga jimilla ku ƙirga sama har zuwa kuɗin da mai saye ya ba ku.",
            "Misali: jimilla $13.47 ce kuma mai saye ya ba ku $20. Ku ce \"$13.47\", sannan ku ba da penny 3 (sulallan cent 1) (\"$13.50\"), quarter 2 (sulallan cent 25) (\"$14\"), dala ɗaya (\"$15\") da takardar dala biyar (\"da $20\"). Wannan canji ne na $6.53.",
            "Ku ajiye takardar kuɗin mai saye a saman aljihun kuɗi, ba a ciki ba, har sai an gama ƙirga canji. Idan ya ce \"Na ba ka hamsin\", ku duka za ku ga cewa ashirin ce.",
            "Aljihun kuɗinku (drawer ko till) yana fara kowane lokacin aiki da adadin kuɗi da kuke ƙirgawa tare da manaja. A ƙarshe ana sake ƙirga shi. Ana duba ƙari ko gibin kuɗi (over/short), don haka kada ku taɓa bari wani ya yi amfani da aljihun kuɗinku, kuma kada ku taɓa haɗa kuɗinku da shi."
          ],
          steps: [
            "Ku faɗi jimilla a bayyane.",
            "Ku ajiye kuɗin mai saye a saman aljihun kuɗi, ba a ciki ba.",
            "Ku ƙirga sama da ƙananan sulalla da farko, kuna faɗar kowane sabon adadi.",
            "Sannan ku ƙirga sama da takardun kuɗi har ku kai kuɗin da ya ba ku.",
            "Ku sa kuɗin mai saye cikin aljihun kuɗi ku rufe shi."
          ],
          words: [
            ["Hanyar ƙirga sama (count-up)", "ƙirga canji ta hanyar farawa daga jimilla da ƙara sulalla da takardun kuɗi har a kai kuɗin da aka biya."],
            ["Aljihun kuɗi (drawer, till)", "kwalin kuɗi a cikin na'urar karɓar kuɗi da mai karɓar kuɗi ɗaya ke da alhakinsa."],
            ["Over/short", "bambancin tsakanin kuɗin da ya kamata ya kasance a aljihun kuɗi da ainihin abin da ke ciki a ƙarshen lokacin aiki."]
          ],
          slides: [
            { title: "Ku ƙirga sama, a bayyane", bullets: ["Ku fara daga jimilla", "Ku ƙara sulalla, sannan takardun kuɗi", "Ku tsaya a kuɗin da mai saye ya ba ku"] },
            { title: "Misali: $13.47 daga $20", bullets: ["Penny 3: $13.50", "Quarter 2: $14. Dala ɗaya: $15", "Takardar dala biyar: $20. Canji: $6.53"] },
            { title: "Ku kare kanku", bullets: ["Ajiye takardar kuɗinsa a saman aljihun kuɗi har a gama canji", "Sannan ku sa ta ciki", "Yana warware tambayar \"Na ba ka hamsin\""] },
            { title: "Aljihun kuɗinku naku ne", bullets: ["Ku ƙirga shi tare da manaja a farko da ƙarshe", "Kada wani ya yi amfani da aljihun kuɗinku", "Kada ku taɓa haɗa kuɗinku da shi"] }
          ],
          tryIt: "Ku yi amfani da sulalla na gaske ko kuɗin wasa. Ku yi waɗannan sayarwa uku a bayyane da hanyar ƙirga sama: jimilla $7.80 an biya da $10; jimilla $4.35 an biya da $5; jimilla $26.62 an biya da $30. Ku rubuta canjin kowanne, sannan ku duba: $2.20, $0.65 da $3.38.",
          youCanNow: "ƙirga canji daidai da hanyar ƙirga sama da kiyaye aljihun kuɗinku daga kurakurai.",
          quickCheck: [
            { objective: "O2", q: "Jimilla $7.80 ce kuma mai saye ya biya da $10. Wane canji za ku ƙirga?", options: ["$3.20", "$2.20", "$2.80", "$1.20"], answer: 1, why: "Dime biyu (sulallan cent 10) suna kai ku $8.00, dala biyu kuma zuwa $10.00, don haka canji $2.20 ne." },
            { objective: "O2", q: "Ina takardar $20 ta mai saye ya kamata ta kasance yayin da kuke ƙirga canjinsa?", options: ["A aljihunku", "A ƙarƙashin aljihun kuɗi", "A hannun mai saye", "A saman aljihun kuɗi, inda ku duka za ku gan ta"], answer: 3, why: "Ajiye ta a gani har a gama canji yana warware duk tambaya kan kuɗin da ya biya da shi." }
          ]
        },
        {
          title: "Katin shaida, manyan takardun kuɗi da zamba a wurin biya",
          objectives: ["O3"],
          minutes: 6,
          goal: "Duba katin shaida, babbar takardar kuɗi da alamun zambar katin kyauta kafin ku gama sayarwa.",
          text: [
            "Wasu kaya suna da iyakar shekaru. A dokar tarayyar Amurka, babu wanda bai kai shekara 21 ba da zai sayi taba ko vape, kuma FDA (hukumar abinci da magunguna ta Amurka) ta ce a duba katin shaida mai hoto ga duk wanda bai kai shekara 30 ba. Barasa ma shekara 21 ce don saye a kowace jiha. Shekarun da mai karɓar kuɗi zai iya SAYAR da barasa ko taba kowace jiha ce ke tsara su, kuma shaguna sukan ƙara nasu ƙa'idoji. Shagonku zai faɗa muku.",
            "Don duba katin shaida: ku kalli hoton da fuskar, ku tabbatar bai ƙare ba, ku karanta ranar haihuwa. Hanya mai sauri: idan yau 15 March 2027 ne, dole a haifi mai saye a ranar 15 March 2006 ko kafin ta don ya kai shekara 21. Idan ba ku da tabbas, ko katin ya yi kamar an canza shi, kada ku sayar, ku kira manaja. Sayarwa ga ƙaramin yaro na iya jawo tara gare ku da shagon.",
            "Don babbar takardar kuɗi, ku yi amfani da binciken uscurrency.gov. A takardar $100: ku karkatar da ita, ƙararrawa a kan ribbon shuɗi za su koma 100, kuma 100 a kusurwa zai canza daga launin jan ƙarfe zuwa kore; ku riƙe ta a haske don ganin hoton ɓoye (watermark) da zaren tsaro; ku taɓa rubutun da ke tashe da kaushi. Idan takarda ta kasa, kada ku zargi mai saye: ku kira manaja. Shaguna suna kai rahoton takardun da ake zargin jabu ne ga US Secret Service.",
            "Zambar katin kyauta tana faruwa a wurin biya. 'Yan damfara suna gaya wa mutane su sayi katunan kyauta don biyan \"kuɗin gwamnati\" ko don \"ɗan uwa da ke cikin matsala\". FTC (hukumar kare masu saye ta Amurka) ta ce babu kasuwanci ko hukuma ta gaske da ke neman a biya ta da katin kyauta. Idan mai saye yana sayen katuna da yawa yayin da wani a waya yake gaya masa abin da zai yi, ku bi ƙa'idar shagonku, wadda za ta iya zama kiran manaja ko gaya masa wannan gargaɗin cikin ladabi."
          ],
          steps: [
            "Kaya mai iyakar shekaru: ku nemi katin shaida mai hoto idan mai saye ya yi kamar bai kai 30 ba.",
            "Ku daidaita hoton, ku tabbatar bai ƙare ba, ku lissafa shekaru daga ranar haihuwa.",
            "Babbar takardar kuɗi: ku karkatar da ita, ku riƙe ta a haske, ku taɓa ta.",
            "Katunan kyauta: ku lura da katuna da yawa, gaggawa ko mai waya da ke ba da umarni.",
            "Idan wani abu bai yi daidai ba: kada ku gama sayarwa; ku kira manaja."
          ],
          words: [
            ["Kaya mai iyakar shekaru (age-restricted)", "kayan da doka ta ce mutanen da suka wuce wasu shekaru ne kaɗai za su saya, kamar taba ko barasa."],
            ["Jabu (counterfeit)", "kuɗin ƙarya da aka yi su yi kama da na gaske."],
            ["Watermark", "hoto mara ƙarfi a cikin takardar kuɗi da ke bayyana idan kun riƙe ta a haske."],
            ["Zambar katin kyauta", "dabarar da wani ke matsa wa mutum ya biya shi da lambobin katin kyauta."]
          ],
          slides: [
            { title: "Sayar da kaya mai iyakar shekaru", bullets: ["Taba da vape: shekara 21 don saye (dokar tarayya)", "FDA: ku duba katin shaida mai hoto ga duk wanda bai kai 30 ba", "Barasa: shekara 21 don saye; shekarun sayarwa jiharku ce ke tsarawa"] },
            { title: "Duba katin shaida", bullets: ["Hoton ya yi daidai da fuskar", "Bai ƙare ba", "An haife shi a ranar yau ko kafin ta, shekaru 21 baya", "Ba ku da tabbas? Kada ku sayar. Ku kira manaja."] },
            { title: "Duba takardar $100", bullets: ["Karkatarwa: ƙararrawa su koma 100; 100 a kusurwa daga jan ƙarfe zuwa kore", "Haske: hoton watermark da zaren tsaro", "Taɓawa: rubutu mai tashe da kaushi"] },
            { title: "Alamun zambar katin kyauta", bullets: ["Katuna da yawa, gaggawa, mai waya da ke ba da umarni", "Babu kasuwanci ko hukuma ta gaske da ke karɓar katin kyauta a matsayin biya", "Ku bi ƙa'idar shago; ku kira manaja"] }
          ],
          sources: [
            { name: "FDA: Tobacco 21", url: "https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21" },
            { name: "US Currency Education Program: $100 note security features", url: "https://www.uscurrency.gov/denominations/100" },
            { name: "US Currency Education Program: Report a counterfeit", url: "https://www.uscurrency.gov/report-counterfeit" },
            { name: "FTC: Avoiding and reporting gift card scams", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" }
          ],
          tryIt: "Ku ɗauki kowace takardar kuɗi da kuke da ita ($1, $5, $10 ko $20). Ku riƙe ta a haske, ku karkatar da ita, ku taɓa ta, ku rubuta kowace alamar tsaro da kuka samu. Sannan ku yi amfani da ranar yau ku rubuta ranar haihuwa ta ƙarshe da ta isa shekarun sayen taba.",
          youCanNow: "duba katin shaida kafin sayar da kaya mai iyakar shekaru, duba babbar takardar kuɗi da gane alamun zambar katin kyauta.",
          quickCheck: [
            { objective: "O3", q: "Mai saye da ya yi kamar shekara 25 yana son sayen vape. Me za ku yi?", options: ["Ku sayar masa domin ya yi kamar ya wuce 21", "Ku tambayi shekarunsa ku yarda da maganarsa", "Ku nemi katin shaida mai hoto ku duba ranar haihuwa", "Ku ƙi sayar da vape ga kowa"], answer: 2, why: "FDA ta ce a duba katin shaida mai hoto ga duk wanda bai kai 30 ba da ke sayen kayan taba." },
            { objective: "O3", q: "Lambar kusurwar takardar $100 ba ta canza launi idan kun karkatar da ita. Me za ku yi?", options: ["Ku kira manaja ba tare da zargin mai saye ba", "Ku gaya wa mai saye cewa shi mai laifi ne", "Ku karɓe ta kawai; wataƙila babu matsala", "Ku yayyage ta biyu"], answer: 0, why: "Binciken da ya kasa yana zuwa ga manaja; shagon ne ke kula da kuma kai rahoton takardun da ake zargin jabu ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Na'urar karɓar kuɗi da kuɗin",
        questions: [
          { objective: "O1", q: "Wane ne tsarin da ya dace na sayarwa?", options: ["Biya, karanta kaya, gaisuwa, rasit", "Karanta kaya, rasit, gaisuwa, biya", "Gaisuwa, karanta kaya, jimilla, biya, canji da rasit", "Jimilla, gaisuwa, karanta kaya, godiya"], answer: 2, why: "Kowace sayarwa tana bin gaisuwa, karanta kaya, rangwame, jimilla, biya, canji da rasit, godiya." },
          { objective: "O1", q: "Mai saye yana son biya da kati. Menene aikinku?", options: ["Ku bar shi ya riƙe katinsa da PIN ɗinsa, ku bi umarnin na'ura", "Ku ce ya faɗi PIN ɗinsa don ku shigar", "Ku riƙe katin har a gama sayarwa", "Ku rubuta lambar katin a kan rasit"], answer: 0, why: "Masu saye ne ke riƙe katinsu da PIN ɗinsu; masu karɓar kuɗi ba sa tambaya ko riƙe su." },
          { objective: "O2", q: "Jimilla $4.35 ce kuma mai saye ya biya da $5. Wane canji ne daidai?", options: ["$1.35", "$0.75", "$0.55", "$0.65"], answer: 3, why: "Nickel (sulallan cent 5) zuwa $4.40, dime zuwa $4.50 da quarter biyu zuwa $5.00 sun zama $0.65." },
          { objective: "O3", q: "Yau 15 March 2027 ne. Don sayen barasa, dole a haifi mai saye a ranar, ko kafin ta:", options: ["15 March 2009", "15 March 2006", "15 March 2007", "1 January 2006"], answer: 1, why: "Shekaru 21 kafin 15 March 2027 su ne 15 March 2006." },
          { objective: "O3", q: "Mai saye da ke waya yana sayen katunan kyauta na $500 kuma ya ce mai kiran \"daga gwamnati\" ne. Menene wannan mafi yiwuwa?", options: ["Kyauta ta yau da kullum", "Tallan shago", "Zambar katin kyauta", "Mayar da harajin kuɗi"], answer: 2, why: "FTC ta ce babu kasuwanci ko hukumar gwamnati ta gaske da ke neman a biya ta da katin kyauta." }
        ]
      }
    },
    {
      name: "Babi na 2: Sayarwa, hidima da gudanar da lokacin aiki",
      lessons: [
        {
          title: "Taimaka wa masu saye su zaɓa, ba tare da matsi ba",
          objectives: ["O4"],
          minutes: 5,
          goal: "Yin tambaya buɗaɗɗiya ɗaya da ba da shawarar kaya mai alaƙa ɗaya tare da amfaninsa.",
          text: [
            "Sayarwa a shago ita ce taimaka wa mutane su samu abin da suka zo nema da wani abu da zai sa ya yi aiki da kyau. Ku fara da tambaya buɗaɗɗiya, wadda ba za a amsa da \"i\" ko \"a'a\" ba: \"Me za ku yi amfani da shi?\"",
            "Sannan ku faɗi amfani (benefit), ba siffa (feature) kawai ba. Siffa ita ce abin da kayan yake da shi (\"wannan murfin waya yana da gefe mai tashe\"); amfani shi ne abin da yake yi wa mai saye (\"don allonku ya zauna lafiya idan ya faɗi a fuska\").",
            "Shawara (shaguna suna kiran ta suggestive selling ko add-on) kaya ɗaya ne mai alaƙa: batir tare da abin wasa, murfi tare da waya, safa tare da takalmi. Ku ba da shawara ɗaya, ku faɗi dalili, idan kuma suka ce a'a, ku yi murmushi ku bari. Matsi yana sa mutane su tafi kuma ba za su dawo ba.",
            "Kada ku taɓa ƙirƙirar bayani game da kaya. Idan ba ku sani ba, ku ce \"Bari in bincika\" ku tambayi abokin aiki ko ku karanta lakabin kayan."
          ],
          steps: [
            "Ku gaisa ku yi tambaya buɗaɗɗiya ɗaya: \"Me za ku yi amfani da shi?\"",
            "Ku saurari amsar.",
            "Ku nuna amfani ɗaya da ya dace da abin da suka faɗa.",
            "Ku ba da shawarar kaya mai alaƙa ɗaya ku faɗi dalili.",
            "Ku karɓi \"a'a\" cikin ladabi: \"Babu matsala!\""
          ],
          words: [
            ["Tambaya buɗaɗɗiya", "tambayar da ke buƙatar amsa fiye da \"i\" ko \"a'a\"."],
            ["Siffa (feature)", "wani abu da kaya yake da shi."],
            ["Amfani (benefit)", "abin da wannan siffa ke yi wa mai saye."],
            ["Suggestive selling (add-on)", "ba da kaya mai alaƙa ɗaya da ke taimaka wa mai saye."]
          ],
          slides: [
            { title: "Ku fara da tambaya buɗaɗɗiya", bullets: ["\"Me za ku yi amfani da shi?\"", "Ba \"Zan iya taimaka muku?\" ba (mai sauƙin cewa a'a)", "Ku saurari amsar"] },
            { title: "Siffa da amfani", bullets: ["Siffa: gefe mai tashe a kan murfin", "Amfani: allonku ya zauna lafiya idan ya faɗi a fuska", "Masu saye suna sayen amfani"] },
            { title: "Shawara ɗaya, ba matsi", bullets: ["Batir tare da abin wasa, safa tare da takalmi", "Ku faɗi yadda yake taimakawa", "\"A'a\" ba laifi ba ne: ku yi murmushi ku ci gaba"] }
          ],
          tryIt: "Ku zaɓi kaya uku a gidanku. Ga kowanne, ku rubuta tambaya buɗaɗɗiya ɗaya da za ku yi wa mai saye, amfani ɗaya, da kaya mai alaƙa ɗaya da za ku ba da shawararsa tare da gajeren dalili. Ku faɗe su a bayyane.",
          youCanNow: "yin tambaya buɗaɗɗiya, bayyana amfani da ba da shawarar kaya ɗaya ba tare da matsi ba.",
          quickCheck: [
            { objective: "O4", q: "Wace ce tambaya buɗaɗɗiya?", options: ["\"Zan iya taimaka muku?\"", "\"Kuna son leda?\"", "\"Shi ke nan?\"", "\"Me za ku yi amfani da shi?\""], answer: 3, why: "Tana buƙatar fiye da \"i\" ko \"a'a\", don haka za ku san abin da mai saye ke buƙata." },
            { objective: "O4", q: "Kun ba da shawarar murfin waya kuma mai saye ya ce a'a na gode. Me za ku yi?", options: ["Ku sake tambaya sau uku", "Ku yi murmushi, ku ce \"Babu matsala\" ku gama sayarwa", "Ku gaya masa zai yi nadama", "Ku sa shi a leda duk da haka"], answer: 1, why: "Shawara ɗaya tana taimakawa; matsi bayan \"a'a\" yana korar masu saye." }
          ]
        },
        {
          title: "Kayan da aka dawo, matsalolin farashi da masu saye masu fushi",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kula da kayan da aka dawo, matsalar farashi ko mai saye mai fushi bisa ƙa'idar shago, da kiran manaja idan ana buƙata.",
          text: [
            "Kowane shago yana da ƙa'idar dawo da kaya: kwana nawa, ko ana buƙatar rasit, da yadda kuɗin ke komawa (zuwa kati, a tsabar kuɗi ko a matsayin kuɗin shago). Ku koyi naku a horo. Ku bi ta haka ga kowa, kuma ku nemi manaja idan dawo da kaya ya wuce ƙa'idar.",
            "Matsalolin farashi suna yawan faruwa: alamar farashi a shiryayye ta ce $4.99 kuma na'ura ta ce $5.49. Ku natsu, ku yi price check, ku bi ƙa'idar shagonku. Kada ku yi gardama, kuma kada ku canza farashi da kanku.",
            "Ga mai saye mai fushi, ku yi amfani da matakai huɗu: ku saurara ba tare da katse shi ba, ku ce ku yi haƙuri da matsalar, ku gyara abin da za ku iya ko ku kawo manaja, sannan ku gode masa. Kwas ɗin \"Customer Service Excellence\" yana zurfafa kan wannan.",
            "Tsaronku ne farko. Kada ku bi ko ku kama ɓarawon shago; ku gaya wa manaja ko jami'an tsaro. Idan mai saye ya yi muku barazana, ko a lokacin fashi, kada ku yi gardama ko faɗa: ku bi horon tsaron shagonku, ku ba da abin da aka nema, ku kira 911 idan ya zama lafiya. OSHA (hukumar tsaron wurin aiki ta Amurka) ta lissafa riƙe kuɗi a gaban jama'a da aikin dare a matsayin abubuwan da ke ƙara haɗarin tashin hankali a wurin aiki."
          ],
          steps: [
            "Dawo da kaya: ku duba rasit, rana da kayan bisa ƙa'idar.",
            "Matsalar farashi: ku yi price check ku bi ƙa'idar shago.",
            "Mai saye mai fushi: ku saurara, ku ba da haƙuri, ku gyara ko ku kawo manaja, ku gode.",
            "Idan ya wuce aikinku ko babu tsaro: ku kira manaja, jami'an tsaro ko 911."
          ],
          words: [
            ["Ƙa'idar dawo da kaya (return policy)", "dokokin shago na karɓar kayan da aka dawo da mayar da kuɗi."],
            ["Kuɗin shago (store credit)", "kuɗin da aka mayar da za a iya kashe su a wannan shagon kaɗai."],
            ["Manager override", "manaja ya amince da abin da na'ura ba ta yarda mai karɓar kuɗi ya yi shi kaɗai ba."],
            ["Satar shago (shoplifting)", "ɗaukar kaya daga shago ba tare da biya ba."]
          ],
          slides: [
            { title: "Dawo da kaya", bullets: ["Ku koyi kwanakin shagonku, ƙa'idar rasit da irin mayar da kuɗi", "Ƙa'ida ɗaya ga kowa", "Ya wuce ƙa'idar? Ku tambayi manaja"] },
            { title: "Matsalolin farashi", bullets: ["Ku natsu ku yi price check", "Ku bi ƙa'idar shago", "Kada ku taɓa canza farashi da kanku"] },
            { title: "Masu saye masu fushi", bullets: ["Ku saurara ba tare da katsewa ba", "Ku ce ku yi haƙuri da matsalar", "Ku gyara ko ku kawo manaja, sannan ku gode masa"] },
            { title: "Tsaro ne farko", bullets: ["Kada ku taɓa bi ko kama ɓarawon shago", "A lokacin fashi: kada ku yi gardama ko faɗa; ku bi horonku", "Ku kira 911 idan ya zama lafiya"] }
          ],
          sources: [{ name: "OSHA: Workplace violence", url: "https://www.osha.gov/workplace-violence" }],
          tryIt: "Tare da aboki ko ku kaɗai a bayyane, ku yi wasan kwaikwayon wannan: mai saye ya yi fushi saboda alamar shiryayye ta $4.99 ta shiga a na'ura a matsayin $5.49. Ku yi amfani da matakai huɗun. Sannan ku rubuta irin dawo da kaya biyu da za ku tura wa manaja.",
          youCanNow: "kula da dawo da kaya, matsalar farashi da mai saye mai fushi cikin natsuwa, da sanin lokacin kiran manaja ko 911.",
          quickCheck: [
            { objective: "O5", q: "Mai saye yana son dawo da kaya bayan wa'adin dawo da kaya na shagon ya wuce. Me za ku yi?", options: ["Ku kira manaja", "Ku mayar masa da kuɗi duk da haka", "Ku yi ihu cewa lokaci ya wuce", "Ku ɓoye kayan"], answer: 0, why: "Duk abin da ya wuce ƙa'ida yana zuwa ga manaja, wanda zai iya yanke shawara." },
            { objective: "O5", q: "Kun ga wani ya sa cajar waya a cikin rigarsa ya fita. Me za ku yi?", options: ["Ku bi shi har wurin ajiye motoci", "Ku kama hannunsa", "Ku gaya wa manaja ko jami'an tsaro nan take", "Ku yi shiru ku ƙyale shi"], answer: 2, why: "Tsaronku ne farko; shaguna suna kula da satar shago ta hannun manajoji da jami'an tsaro." }
          ]
        },
        {
          title: "Katin lokacin aikinku da hanyarku zuwa aikin",
          objectives: ["O6"],
          minutes: 5,
          goal: "Rubuta jerin matakan lokacin aiki a shafi ɗaya da sa ranar matakinku na gaba na neman aiki.",
          text: [
            "Lokacin aiki mai kyau yana da sassa uku. Buɗewa: ku shiga aiki a kan lokaci (clock in), ku ƙirga aljihun kuɗinku tare da manaja, ku duba takardar rasit da ledoji, ku tsaftace wurinku. Gudanarwa: ku bi tsarin sayarwa, ku ƙirga canji a bayyane, ku duba katin shaida, ku riƙa rufe aljihun kuɗi tsakanin sayarwa. Rufewa: ku ƙirga aljihun kuɗinku tare da manaja, ku faɗi ƙari ko gibi da gaskiya, ku tsaftace ku fita aiki (clock out).",
            "Sanya su a kati ɗaya yana taimaka muku koya da sauri kuma yana nuna wa manajan ɗaukar aiki cewa kun shirya. Ku kawo shi ganawar ɗaukar aiki ku yi bayaninsa.",
            "Takardar shaidar ƙwarewa (credential) na iya taimaka wa neman aikinku. NRF Foundation (wani ɓangare na National Retail Federation, ƙungiyar shagunan Amurka) tana gudanar da RISE Up, shirin horo da takardar shaida mai takardu kamar Retail Industry Fundamentals, Customer Service and Sales, da Customer Conflict De-escalation. Wannan kwas ɗin yana SHIRYA ku ne; ba ya ba da takardar shaida. Ku duba nrffoundation.org don yadda ake shiga da kuɗinsa, ko ku tambayi cibiyar aiki ko shiri na yankinku, wanda zai iya bayar da shi.",
            "Sannan ku nemi aiki. Shaguna suna ɗaukar ma'aikata duk shekara, kuma fiye da haka kafin lokutan hutu. Ku nemi aiki ta yanar gizo a shafin ayyuka na shagon kansa ko a gaban mutane, kuma kada ku taɓa biyan kowa don samun aiki."
          ],
          steps: [
            "Ku rubuta matakan buɗewa.",
            "Ku rubuta abin da za ku faɗa a sayarwa, da layi ɗaya na shawara.",
            "Ku ƙara atisayen canjinku, da matakan katin shaida da babbar takardar kuɗi.",
            "Ku lissafa lokuta uku da za ku kira manaja.",
            "Ku rubuta matakan rufewa.",
            "Ku ƙara mataki ɗaya na gaba mai rana: takardar shaida ko neman aiki."
          ],
          words: [
            ["Clock in / clock out", "rubuta lokacin da kuka fara da kuma daina aiki."],
            ["Takardar shaidar ƙwarewa (credential)", "satifiket ko alama da ke nuna kun ci jarabawar wata ƙwarewa."],
            ["RISE Up", "shirin horo da takardar shaida na sana'ar sayarwa na NRF Foundation."]
          ],
          slides: [
            { title: "Buɗewa", bullets: ["Ku shiga aiki a kan lokaci", "Ku ƙirga aljihun kuɗinku tare da manaja", "Ku duba takarda, ledoji da wurinku"] },
            { title: "Gudanarwa da rufewa", bullets: ["Tsarin sayarwa, ƙirga canji, duba katin shaida", "Aljihun kuɗi a rufe tsakanin sayarwa", "Rufewa: ku ƙirga tare da manaja, ku faɗi ƙari/gibi da gaskiya"] },
            { title: "Takardar shaidar sana'ar sayarwa", bullets: ["Takardun shaida na NRF Foundation RISE Up", "Retail Industry Fundamentals, Customer Service and Sales", "Wannan kwas yana shirya ku; ba ya ba da ita"] },
            { title: "Matakinku na gaba", bullets: ["Ku kawo katin lokacin aikinku ganawar ɗaukar aiki", "Ku nemi aiki a shafin ayyuka na shagon kansa", "Kada ku taɓa biyan kowa don samun aiki"] }
          ],
          sources: [
            { name: "NRF Foundation: RISE Up", url: "https://nrffoundation.org/riseup" },
            { name: "US Bureau of Labor Statistics: Cashiers", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }
          ],
          tryIt: "Ku yi Katin Lokacin Aikinku na Mai Karɓar Kuɗi a shafi ɗaya (takarda ko rubutu a waya) da duk sassa bakwai na aikin ƙarshe. Ku yi sayarwa biyar ta ƙirga canji da kuɗin wasa ku rubuta su a kan katin. Ku gama da layi ɗaya: takardar shaida ko shagon da za ku nema da ranar da za ku fara.",
          youCanNow: "buɗewa, gudanarwa da rufe lokacin aiki a na'urar karɓar kuɗi da jerin matakai, da ɗaukar mataki na gaba mai rana zuwa aikin shago.",
          quickCheck: [
            { objective: "O6", q: "Menene abu na farko da za ku yi da aljihun kuɗinku a farkon lokacin aiki?", options: ["Ku fara karɓar kuɗin masu saye", "Ku aro aljihun kuɗin abokin aiki", "Ku ƙara kuɗinku a ciki", "Ku ƙirga shi tare da manaja"], answer: 3, why: "Ƙirga shi a farko yana tabbatar da adadin da kuke da alhakinsa." },
            { objective: "O6", q: "Me wannan kwas yake ba ku game da takardar shaidar RISE Up?", options: ["Takardar shaidar kanta", "Shiri; NRF Foundation ce ke gudanar da takardar shaidar", "Lasisin jiha", "Babu komai"], answer: 1, why: "Kwas ɗin yana shirya ku; takardar shaidar daga shirin RISE Up na NRF Foundation take." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Sayarwa, hidima da gudanar da lokacin aiki",
        questions: [
          { objective: "O4", q: "Wanne ne amfani, ba siffa ba?", options: ["Murfin yana da gefe mai tashe", "Allonku yana zama lafiya idan waya ta faɗi a fuska", "Murfin shuɗi ne", "An yi murfin da roba (plastic)"], answer: 1, why: "Amfani yana faɗin abin da siffa ke yi wa mai saye." },
          { objective: "O4", q: "Mai saye ya sayi motar wasa mai remote. Wace shawara ce mai kyau?", options: ["Abin goge ƙasa", "Mota ta biyu da bai tambaya ba", "Babu komai; kada a taɓa ba da shawara", "Batir da take buƙata, don ta yi aiki idan ya kai gida"], answer: 3, why: "Kaya mai alaƙa ɗaya tare da dalili yana taimaka wa mai saye." },
          { objective: "O5", q: "Alamar shiryayye ta ce $4.99 amma na'ura ta ce $5.49. Me za ku fara yi?", options: ["Ku natsu ku yi price check", "Ku canza farashin a na'ura da kanku", "Ku gaya wa mai saye alamar ba daidai ba ce ba tare da dubawa ba", "Ku ƙi sayar da kayan"], answer: 0, why: "Price check yana gano farashin daidai; sannan ku bi ƙa'idar shago." },
          { objective: "O5", q: "Wani ya yi muku barazana yana neman kuɗin da ke cikin aljihun kuɗinku. Me za ku yi?", options: ["Ku yi faɗa don kare kuɗin", "Ku yi gardama da shi", "Ku bi horon tsaronku, kada ku yi turjiya, ku kira 911 idan ya zama lafiya", "Ku kore shi daga shagon"], answer: 2, why: "Tsaronku ne farko; ana iya maye gurbin kuɗi." },
          { objective: "O6", q: "A lokacin rufewa aljihun kuɗinku yana da gibin $3. Me za ku yi?", options: ["Ku ƙara $3 na kuɗinku", "Ku faɗi shi da gaskiya lokacin da kuke ƙirgawa tare da manaja", "Ku ɗauki $3 daga wani aljihun kuɗi", "Ku tafi ba tare da ƙirgawa ba"], answer: 1, why: "Ana ƙirga ƙari ko gibi a faɗe shi da gaskiya; haɗa kuɗi yana ɓoye kurakurai kuma yana karya ƙa'ida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Dabarun Sayarwa a Shago da Aikin Mai Karɓar Kuɗi (Cashier)",
    questions: [
      { objective: "O1", q: "Yaushe ya kamata ku tambayi takardar rangwame ko lambar lada?", options: ["Bayan rasit ya fito", "Kafin ku yi jimillar sayarwa", "Lokacin da zai sake zuwa saye", "Sai idan ya yi ƙorafi"], answer: 1, why: "Rangwame da lada suna shiga kafin jimilla don ta yi daidai." },
      { objective: "O1", q: "Me \"void\" ke nufi a na'urar karɓar kuɗi?", options: ["Mayar da kuɗi", "Buɗe aljihun kuɗi", "Buga rasit", "Cire kaya daga sayarwa kafin a biya shi"], answer: 3, why: "Void yana cire kaya daga sayarwa kafin biya." },
      { objective: "O1", q: "Mai saye yana son biya da katinsa. Wanne ne daidai?", options: ["Shi da kansa zai taɓa ko ya saka katin ya shigar da PIN ɗinsa", "Ku tambayi PIN ɗinsa a bayyane", "Ku riƙe katinsa a bayan kanta", "Ku rubuta lambar katin"], answer: 0, why: "Mai saye ne ke riƙe katinsa da PIN ɗinsa." },
      { objective: "O2", q: "Jimilla $13.47 ce kuma mai saye ya ba ku $20. Nawa ne canji?", options: ["$7.53", "$6.47", "$6.53", "$7.47"], answer: 2, why: "Penny 3 zuwa $13.50, quarter 2 zuwa $14, $1 zuwa $15 da $5 zuwa $20: $6.53." },
      { objective: "O2", q: "A hanyar ƙirga sama kuna farawa daga:", options: ["Sifili", "Jimillar sayarwa", "Kuɗin da mai saye ya ba ku", "Kuɗin da ke cikin aljihun kuɗi"], answer: 1, why: "Kuna ƙirga sama daga jimilla zuwa kuɗin da aka biya." },
      { objective: "O2", q: "Me yasa za ku ajiye takardar kuɗin mai saye a saman aljihun kuɗi har a gama ƙirga canji?", options: ["Don ku duka ku ga abin da ya biya da shi idan an samu tambaya", "Don kada ta jiƙe", "Don mai saye na gaba ya yi amfani da ita", "Saboda aljihun kuɗi ya cika"], answer: 0, why: "Yana warware tambayar \"Na ba ka hamsin\"." },
      { objective: "O3", q: "Menene ƙaramar shekarun sayen taba ko vape a dokar tarayyar Amurka?", options: ["16", "18", "19", "21"], answer: 3, why: "Dokar Tobacco 21 ta ɗaga shekarun tarayya zuwa 21 a December 2019." },
      { objective: "O3", q: "FDA ta ce a duba katin shaida mai hoto ga masu sayen taba da suka yi kamar ba su kai:", options: ["18", "21", "30", "40"], answer: 2, why: "Ƙa'idar FDA ita ce a duba katin shaida mai hoto ga duk wanda bai kai 30 ba." },
      { objective: "O3", q: "Wane bincike za ku iya yi a takardar $100?", options: ["Ku karkatar da ita ku ga 100 a kusurwa ya canza daga jan ƙarfe zuwa kore", "Ku ji ƙamshinta", "Ku ninka ta biyu", "Ku duba ranar da aka buga ta"], answer: 0, why: "Tawada mai canza launi tana cikin alamun tsaro na takardar $100." },
      { objective: "O3", q: "Wa ke yanke ƙaramar shekarun da mai karɓar kuɗi zai iya SAYAR da barasa?", options: ["Mai saye", "Kowace jiha, tare da ƙa'idojin shagonku", "FTC", "Mai karɓar kuɗi"], answer: 1, why: "Dokar jiha ce ke tsara shekarun sayarwa, kuma shaguna sukan ƙara nasu ƙa'idoji." },
      { objective: "O4", q: "Wace tambaya ce za ta fi gaya muku abin da mai saye ke buƙata?", options: ["\"Zan iya taimaka muku?\"", "\"Shi ke nan?\"", "\"Me za ku yi amfani da shi?\"", "\"Tsabar kuɗi ko kati?\""], answer: 2, why: "Tambaya buɗaɗɗiya tana samun amsa fiye da \"i\" ko \"a'a\"." },
      { objective: "O4", q: "Menene suggestive selling?", options: ["Gaya wa masu saye abin da dole su saya", "Sayar da kayan da ba su kan shiryayye", "Ƙara farashi", "Ba da kaya mai alaƙa ɗaya da ke taimaka wa mai saye"], answer: 3, why: "Ƙarin kaya ɗaya ne mai taimako, ba matsi ba." },
      { objective: "O4", q: "Ba ku sani ba ko injin dumama ɗaki yana da lafiya a yi amfani da shi a banɗaki. Me za ku ce?", options: ["\"Bari in bincika muku\"", "\"I, babu matsala\"", "\"Ban sani ba\" ku tafi", "\"Babu wanda ya sani\""], answer: 0, why: "Kada ku taɓa ƙirƙirar bayanin kaya; ku bincika daga abokin aiki ko lakabin kayan." },
      { objective: "O5", q: "Dawo da kaya ya wuce ƙa'idar shago. Me za ku yi?", options: ["Ku mayar da kuɗi duk da haka", "Ku kira manaja", "Ku gaya wa mai saye ya tafi", "Ku ba da kuɗin shago da kanku"], answer: 1, why: "Dawo da kayan da ya wuce ƙa'ida yana zuwa ga manaja." },
      { objective: "O5", q: "Menene matakai huɗu ga mai saye mai fushi?", options: ["Gardama, bayani, ƙi, tafiya", "Ƙyale shi, jira, murmushi, rufe", "Saurara, ba da haƙuri, gyara ko kawo manaja, godiya", "Kiran 911, rufe shago, jira, sake buɗewa"], answer: 2, why: "Waɗannan matakai huɗu suna kwantar da hankalin yawancin masu saye masu fushi." },
      { objective: "O5", q: "Kun ga ɓarawon shago yana fita. Wane zaɓi ne mai aminci?", options: ["Ku bi shi a guje", "Ku tare ƙofa", "Ku ƙwace jakar", "Ku gaya wa manaja ko jami'an tsaro"], answer: 3, why: "Kada ku taɓa bi ko kama shi; tsaro ne farko." },
      { objective: "O5", q: "A lokacin fashi, me ya fi muhimmanci?", options: ["Tsaronku da tsaron sauran mutane", "Riƙe kuɗin", "Samun sunan ɗan fashin", "Gama sayarwar"], answer: 0, why: "Ku bi horonku kuma kada ku yi turjiya; ana iya maye gurbin kuɗi." },
      { objective: "O6", q: "Wanne ne ke cikin matakan rufewarku?", options: ["Ku ara wa abokin aiki aljihun kuɗinku", "Ku bar aljihun kuɗi har safe", "Ku ƙirga aljihun kuɗinku tare da manaja ku faɗi ƙari/gibi da gaskiya", "Ku kai ƙarin kuɗi gida"], answer: 2, why: "Ƙirgawa da faɗa da gaskiya suna rufe lokacin aikinku yadda ya kamata." },
      { objective: "O6", q: "Wane ne shirin takardar shaidar sana'ar sayarwa na gaske?", options: ["Lasisin sayarwa na FTC", "RISE Up na NRF Foundation", "Katin mai karɓar kuɗi na OSHA", "Alamar sayarwa ta Secret Service"], answer: 1, why: "RISE Up shirin horo da takardar shaida na sana'ar sayarwa ne na NRF Foundation." },
      { objective: "O6", q: "Wani \"mai ɗaukar ma'aikata\" ya ce dole ku biya $50 don samun aikin mai karɓar kuɗi. Me za ku yi?", options: ["Ku biya da sauri", "Ku biya rabi yanzu", "Ku ba shi bayanan bankinku", "Kada ku biya; ku nemi aiki a shafin ayyuka na shagon kansa"], answer: 3, why: "Masu ɗaukar aiki na gaske ba sa taɓa neman ku biya don samun aiki." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 6, 8, 10, 13, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Abin da za a faɗa a sayarwa", objective: "O1", notYet: "Wasu matakai babu su ko ba su bisa tsari (misali, rangwame bayan jimilla).", meets: "Gaisuwa, karanta kaya, rangwame, jimilla, biya, canji da rasit, godiya, bisa tsari.", exceeds: "Yana kuma faɗin abin da za a yi idan kaya ya shiga sau biyu ko farashi bai yi daidai ba." },
      { name: "Canji daidai", objective: "O2", notYet: "Sayarwar atisaye ƙasa da 5, ko wani canji ba daidai ba ne.", meets: "Sayarwar atisaye 5 cikin 5 an ƙirga canji daidai da hanyar ƙirga sama.", exceeds: "Yana da aƙalla sayarwa ɗaya mai sulalla da takardun kuɗi, da ƙirgar da aka faɗa a rubuce." },
      { name: "Binciken katin shaida da babbar takardar kuɗi", objective: "O3", notYet: "Babu matakin katin shaida, ko ƙa'idar shekaru ba daidai ba ce.", meets: "Yana duba hoto, ranar ƙarewa da ranar haihuwa, da karkatarwa-haske-taɓawa ga manyan takardun kuɗi; yana kiran manaja idan babu tabbas.", exceeds: "Yana kuma lissafa alamun gargaɗin zambar katin kyauta da matakin shagon a kansu." },
      { name: "Shawara mai amfani", objective: "O4", notYet: "Babu shawara, ko shawara mai matsi.", meets: "Layi ɗaya na shawara mai amfani da hanya mai ladabi ta karɓar \"a'a\".", exceeds: "Yana farawa da tambaya buɗaɗɗiya da ke kai wa ga shawarar." },
      { name: "Lokacin kiran manaja", objective: "O5", notYet: "Lokuta ƙasa da uku, ko yana cewa a bi ɓarawon shago.", meets: "Lokuta uku bayyanannu (misali, dawo da kaya da ya wuce ƙa'ida, takardar kuɗi da ta kasa bincike, katin shaida da babu tabbas) da tsaro a farko.", exceeds: "Yana ƙara abin da za a faɗa wa mai saye yayin jiran manaja." },
      { name: "Matakan lokacin aiki da mataki na gaba", objective: "O6", notYet: "Matakan buɗewa ko rufewa babu su, ko babu mataki na gaba mai rana.", meets: "Matakan buɗewa, gudanarwa da rufewa bisa tsari, tare da takardar shaida ko matakin neman aiki mai rana.", exceeds: "Yana ambaton takamaiman shago ko shiri da mataki na biyu mai rana." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi aikin sayarwa ko na mai karɓar kuɗi cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da aka ɗauka aikin shago kuma suke nan a aiki bayan kwanaki 90",
      "Masu koyo da suka shiga ko suka samu takardar shaidar RISE Up ta NRF Foundation",
      "Shagunan abokan aiki ko shirye-shiryen aiki sun ce an samu raguwar gibin aljihun kuɗi da saurin horo ga sababbin ma'aikata daga kwas ɗin"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta don karanta darussan",
      "Sulalla da kuɗin wasa (ko guntayen takarda da aka rubuta adadi a kai) don atisayen canji",
      "'Yan kayan gida da alamun farashi na takarda don sayarwar atisaye",
      "Takarda da alƙalami, ko rubutu a waya, don Katin Lokacin Aiki na Mai Karɓar Kuɗi",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "A rukuni, ku kafa na'urar karɓar kuɗi ta wasa a kan tebur ku riƙa jujjuya matsayin mai karɓar kuɗi, mai saye da manaja.",
      "Ku yi atisayen canji a matsayin wasa mai lokaci da zarar masu koyo sun iya daidai; daidaito tukuna, sannan sauri.",
      "Ku yi amfani da kuɗin wasa da katin shaida na ƙirƙira kaɗai; kada ku taɓa neman masu koyo su nuna katin shaidarsu ko bayanan katin bankinsu.",
      "Ku duba shekarun sayar da barasa da taba a jiharku ku gaya wa matasa masu koyo abin da ya shafe su.",
      "Ku ba da maki ga Katin Lokacin Aiki na Mai Karɓar Kuɗi da ma'aunin rubric, kuma ku sa masu koyo su kawo shi ganawar ɗaukar aiki ta atisaye.",
      "Shirye-shiryen da ke abokan horo na RISE Up za su iya haɗa wannan kwas da takardar shaidar; ku duba nrffoundation.org."
    ]
  }
};
