"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-online-freelancing.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const THREE_MTT = { name: "3MTT (3 Million Technical Talent), Najeriya: Ma'aikatar Sadarwa, Ƙirƙira da Tattalin Arzikin Zamani ta Tarayya tare da NITDA", url: "https://3mtt.nitda.gov.ng/" };
const AJIRA = { name: "Kenya News Agency: an bukaci matasa su rungumi shirin Ajira Digital (shirin gwamnati na aikin intanet)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };
const KRA = { name: "Kenya Revenue Authority (hukumar haraji ta Kenya: harajin kuɗin shiga, har da kuɗin da aka samu ta intanet)", url: "https://www.kra.go.ke" };
const GRA = { name: "Ghana Revenue Authority (hukumar haraji ta Ghana)", url: "https://gra.gov.gh" };
const SEC_NG = { name: "Nairametrics (14 May 2026): SEC ta Najeriya ta yi gargaɗi game da tsare-tsaren da ake tallatawa a WhatsApp, TikTok da Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-online-freelancing-ha",
  lang: "ha",
  translationOf: "afr-online-freelancing",
  category: "Africa: Life and Work",
  name: "Aikin Kai ta Intanet (Freelancing) da Aiki daga Nesa a Afirka",
  skills: "Zaɓar hidimar da za ku iya sayarwa ta intanet, Rubuta bayanin kai (profile) da tara ƙananan samfuran aiki, Rubuta tayin aiki (proposal) ga tallar aiki, Yarjejeniyar aiki da kai shi a kan lokaci, Karɓar kuɗi da ajiye bayanai, Gane ayyukan bogi da zambar biyan kuɗi",
  outcome: "mayar da ƙwarewar da kuke da ita zuwa hidima ta intanet: rubuta bayanin kai mai samfuran aiki, rubuta tayin aiki ga tallar aiki ta gaske, yarda da aikin a rubuce, karɓar kuɗi lafiya, ajiye bayanai, da ƙin ayyukan bogi.",
  about: [
    "Matasa da manya a faɗin Afirka suna samun kuɗi ta intanet ta hanyar rubutu, fassara, zane (design), shigar da bayanai (data entry), taimakon abokan ciniki, rubuta abin da aka faɗa (transcription), lissafin kuɗi, kafofin sada zumunta da taimakon ofis daga nesa, ga abokan ciniki a ƙasarsu da ƙasashen waje. Wasu suna aiki ta dandamali kamar Upwork, Fiverr da LinkedIn; wasu kuma suna samun abokan ciniki ta WhatsApp, Facebook da mutanen da suka sani.",
    "Wannan kwas na masu neman aiki ne, ɗalibai, waɗanda suka gama makaranta, iyaye maza da mata da ke gida, da duk wanda ke da waya ko kwamfuta da wata ƙwarewa. Za ku zaɓi hidima ɗaya, ku rubuta bayanin kai, ku tara ƙananan samfuran aiki, ku rubuta tayin aiki, ku yarda da aikin, ku karɓi kuɗi, kuma ku gane ayyukan bogi masu yawa da ke kai wa sababbin masu aikin kai hari. Gwamnatoci ma suna ba da horo kyauta, kamar Ajira Digital a Kenya da 3MTT a Najeriya.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\" da za ku iya yi a waya. Akwai ɗan gwaji bayan kowane darasi da babi, da jarabawa mai tambayoyi 20 a ƙarshe. Kuɗin dandamali da hanyoyin biyan kuɗi sun bambanta daga ƙasa zuwa ƙasa kuma suna canjawa, don haka za ku koyi karanta su a shafukan taimako na kowane dandamali da kansa."
  ],
  finalTask: "Ku haɗa kayan farawa na aikin kai: tayin hidima na layi ɗaya, bayanin kai (taken kai da gajeren bayani), ƙananan samfuran aiki biyu ko uku, tayin aiki ɗaya da aka rubuta ga tallar aiki ta gaske ko ta misali, da jerin abubuwan tsaro da biyan kuɗi (yadda za a biya ku, bayanan da za ku ajiye, inda za ku tambaya game da haraji, da alamun gargaɗin ayyukan bogi).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da manya a faɗin Afirka, a birane da garuruwa: waɗanda suka gama jami'a ko makaranta suna neman aiki, masu aiki da ke son ƙarin kuɗi, iyaye da ke aiki daga gida, da masu sana'a da ƙananan 'yan kasuwa masu ƙwarewar da za su sayar. Misalai daga Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire, Kamaru, Masar da Moroko; da yawa suna jin Turanci, Faransanci ko Larabci, wanda shi kansa ƙwarewa ce da za a iya sayarwa.",
    startingPoint: "Suna iya amfani da wayar zamani, WhatsApp da kafofin sada zumunta; wasu suna da kwamfutar tafi-da-gidanka (laptop) ko suna amfani da gidan intanet (cyber café). Yawancinsu suna da ƙwarewa (rubutu, harsuna, zane, buga rubutu, lissafi, tallace-tallace) amma ba su taɓa bayyana ta a matsayin hidima ba, ba su taɓa rubuta tayin aiki ba, kuma wani abokin ciniki na waje bai taɓa biyan su ba. Da yawa sun ga tallace-tallacen \"aiki daga gida\" da suka zama zamba.",
    gap: "Masu koyo suna buƙatar gabatar da hidima ɗaya a sarari, rubuta tayin aiki mai samun aiki, yarda da sharuɗɗa a rubuce, karɓar kuɗi lafiya, da guje wa ayyukan bogi masu neman kuɗi, ta yadda aikin intanet zai zama kuɗin shiga na gaske maimakon ɓata data da asarar kuɗi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; an fassara shi zuwa Faransanci da Larabci",
      "Na'urori: sau da yawa waya kaɗai; data tana da tsada; wutar lantarki ba ta da tabbas",
      "Lokaci: darussa na minti 4 zuwa 6",
      "Kuɗin dandamali, ƙa'idoji da hanyoyin biyan kuɗi sun bambanta daga ƙasa zuwa ƙasa kuma suna canjawa; dokokin haraji sun bambanta daga ƙasa zuwa ƙasa",
      "Kada ku taɓa ba abokin ciniki ko mai ɗaukar ma'aikata kalmar sirri, PIN, lambar tabbatarwa ta lokaci ɗaya (code) ko takardun shaida"
    ],
    prerequisites: "Ƙwarewar waya ta asali da ƙwarewa ɗaya da za ku iya yi wa wasu. Adireshin imel."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da jerin ƙwarewarku", action: "zaɓar hidima ɗaya da za ku iya sayarwa ta intanet da rubuta ta a matsayin tayi na layi ɗaya", standard: "kuna faɗin abin da kuke yi, ga wa, da abin da abokin ciniki zai samu" },
    { id: "O2", condition: "A wani dandamali ko shafin intanet mai sauƙi", action: "rubuta taken kai da gajeren bayanin kai, da ƙara ƙananan samfuran aiki biyu ko uku", standard: "ba tare da bayanan sirri ba, kuma da samfuran da ku kanku kuka yi" },
    { id: "O3", condition: "Idan aka ba ku tallar aiki", action: "rubuta gajeren tayin aiki da ke amsa buƙatar abokin ciniki, ya nuna samfurin aiki mai alaƙa, ya kuma yi tambaya ɗaya", standard: "ƙasa da kalmomi 150, an rubuta shi don wannan tallar, ba kwafi ba" },
    { id: "O4", condition: "Kafin ku fara aiki", action: "yarda a rubuce kan abin da aikin ya ƙunsa, farashi, ranar ƙarshe da yawan gyare-gyare, da kai aikin a kan lokaci", standard: "tare da shirin ko-ta-kwana idan wuta ko data ta ɗauke" },
    { id: "O5", condition: "Bayan kun yarda da aiki", action: "zaɓar hanya mai aminci ta karɓar kuɗi da ajiye bayanin kowane biyan kuɗi", standard: "kuna ajiye aiki da biyan kuɗi a cikin dandamali idan kuna amfani da ɗaya, kuma kuna rubuta kowane biyan kuɗi cikin mako ɗaya" },
    { id: "O6", condition: "Idan aka ba ku tayin aiki ko saƙonni biyar", action: "gane na bogi da faɗin alamar gargaɗi a kowanne", standard: "kuna samun aƙalla 4 cikin 5 daidai, kafin ku biya kuɗi ko ku ba da wani bayani" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shiryawa don aiki ta intanet",
      lessons: [
        {
          title: "Zaɓar hidimar da za ku iya sayarwa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Zaɓi hidima ɗaya ku rubuta ta a matsayin tayi na layi ɗaya.",
          text: [
            "Aikin kai (freelancing) yana nufin yin aiki na biya ga abokan ciniki, aiki ɗaya bayan ɗaya, maimakon aiki ga mai ɗaukar aiki ɗaya. Aiki daga nesa (remote work) yana nufin aiki, na cikakken lokaci ko na wani ɓangare, da ake yi daga gida ko ko'ina ta intanet. Dukansu suna farawa da ƙwarewar da abokan ciniki ke buƙata.",
            "Ku rubuta abin da kuka riga kuka iya yi: rubutu, fassara tsakanin Turanci, Faransanci, Larabci ko harshen gida, buga rubutu da shigar da bayanai, amfani da Excel ko Google Sheets, zane a Canva, kafofin sada zumunta, taimakon abokan ciniki, lissafin kuɗi, rubuta abin da aka faɗa, koyarwa. Ku zaɓi ƊAYA don farawa; abokan ciniki suna ɗaukar ƙwararru a fanni ɗaya.",
            "Ku rubuta tayi na layi ɗaya: abin da kuke yi, ga wa, da abin da za su samu. Misali: \"Ina fassara takardun kasuwanci daga Turanci zuwa Faransanci ga ƙananan kamfanoni, daidai kuma cikin awa 48.\" Misali: Kofi a Accra: \"Ina zana takardun talla masu sauƙi a Canva da rubuce-rubucen kafofin sada zumunta ga shaguna da coci-coci.\"",
            "Idan kuna buƙatar ƙarin ƙwarewa, ku yi amfani da horo kyauta. Gwamnatin Kenya tana gudanar da Ajira Digital don aikin intanet, kuma shirin 3MTT na Najeriya yana horar da matasa a fannoni kamar bayanai (data), zane da manhajar kwamfuta (software)."
          ],
          steps: ["Ku rubuta abubuwa biyar da za ku iya yi wa wasu.", "Ku zagaye wanda kuka fi iyawa kuma kuke jin daɗinsa.", "Ku tambayi kanku: wa ke biyan kuɗi don wannan?", "Ku rubuta: Ina yin [abin] ga [wa] don su samu [sakamako].", "Idan kuna buƙatar ƙarin ƙwarewa, ku nemi horo kyauta."],
          words: [["Mai aikin kai (freelancer)", "mutumin da ke yin aiki na biya ga abokan ciniki, aiki ɗaya bayan ɗaya."], ["Aiki daga nesa (remote work)", "aikin da ake yi ta intanet daga gida ko ko'ina."], ["Tayin hidima", "jimla ɗaya da ke faɗin abin da kuke yi, ga wa, da abin da za su samu."]],
          slides: [
            { title: "Ku fara da abin da kuka iya", bullets: ["Rubutu, fassara, buga rubutu, Excel ko Sheets", "Zane, kafofin sada zumunta, taimakon abokan ciniki", "Lissafin kuɗi, rubuta abin da aka faɗa, koyarwa"] },
            { title: "Ku zaɓi hidima ƊAYA", bullets: ["Abokan ciniki suna ɗaukar ƙwararru", "Ku zaɓi wadda kuka fi iyawa kuma kuke jin daɗinta"] },
            { title: "Tayinku na layi ɗaya", bullets: ["Ina yin [abin] ga [wa] don su samu [sakamako]", "\"Ina fassara Turanci zuwa Faransanci ga ƙananan kamfanoni, cikin awa 48\""] },
            { title: "Horo kyauta", bullets: ["Kenya: Ajira Digital", "Najeriya: 3MTT", "Ku duba lokacin ɗaukar sababbi a shafukan hukuma"] }
          ],
          sources: [AJIRA, THREE_MTT],
          tryIt: "Ku rubuta abubuwa biyar da za ku iya yi wa wasu. Ku zaɓi ɗaya ku rubuta tayinku na layi ɗaya: Ina yin [abin] ga [wa] don su samu [sakamako].",
          youCanNow: "zaɓar hidima ɗaya da bayyana ta a tayi na layi ɗaya mai sarari.",
          quickCheck: [
            { objective: "O1", q: "Wane ne tayi na layi ɗaya mafi sarari?", options: ["\"Zan iya yin komai ta intanet\"", "\"Don Allah ku ɗauke ni aiki\"", "\"Ina buga fom ɗin da aka rubuta da hannu a Excel ga asibitoci, daidai kuma da sauri\"", "\"Mai aikin kai, dukkan ƙwarewa\""], answer: 2, why: "Yana faɗin abin da ake yi, ga wa, da abin da abokin ciniki zai samu." },
            { objective: "O1", q: "Me yasa za ku zaɓi hidima ƊAYA don farawa?", options: ["Abokan ciniki suna neman ƙwararru", "Dandamali suna yarda da kalma ɗaya kawai", "Doka ce", "Tana ɓata data kaɗan"], answer: 0, why: "Ƙwarewa ɗaya a sarari tana sa abokan ciniki su amince da ku su ɗauke ku cikin sauƙi." }
          ]
        },
        {
          title: "Bayanin kanku da ƙananan samfuran aiki",
          objectives: ["O2"],
          minutes: 5,
          goal: "Rubuta taken kai da gajeren bayanin kai, ku ƙara samfuran aiki biyu ko uku.",
          text: [
            "Bayanin kanku (profile) shi ne tagar shagonku. Taken kai (headline) yana faɗin hidimarku da kalmomi kaɗan: \"Mai Fassara Turanci da Faransanci don Takardun Kasuwanci\". Gajeren bayani (overview), sakin layi kaɗan, yana faɗin wanda kuke taimakawa, abin da kuke yi, yadda kuke aiki, da shaida ɗaya kamar wani aiki da kuka yi a baya ko horo.",
            "Abokan ciniki suna son shaida. Tarin samfuran aiki (portfolio) shi ne ƙananan misalan aikinku kaɗan. Idan ba ku da abokan ciniki tukuna, ku yi samfura da kanku: ku fassara gajeren sanarwar jama'a, ku zana takardar talla ga shagon da ba na gaske ba, ku gyara ƙaramin tebur na misali (spreadsheet). Kada ku taɓa amfani da aikin wani, kuma kada ku taɓa raba bayanan abokin ciniki na gaske ba tare da izini ba.",
            "Ku bar bayanan sirri daga bayanin kanku: babu adireshin gida, lambar katin shaida ko bayanan banki. Ku yi amfani da hoto mai kyau, mai fara'a, idan dandamalin ya nema.",
            "Ku adana data: ku fara rubuta bayanin kanku a manhajar rubutu (notes), sannan ku liƙa shi sau ɗaya. Ku rage girman hotuna kafin ku ɗora su. Misali: Mariam a Casablanca tana rubuta bayaninta na Larabci da Faransanci ba tare da intanet ba, sannan ta ɗora shi a gidan intanet cikin minti goma."
          ],
          steps: ["Ku rubuta taken kai: hidimarku da kalmomi kaɗan.", "Ku rubuta gajeren bayani: wanda kuke taimakawa, abin da kuke yi, yadda kuke aiki, shaida ɗaya.", "Ku yi ƙananan samfura biyu ko uku da kanku.", "Ku duba: babu bayanan sirri, babu aikin wani.", "Ku fara rubutawa ba tare da intanet ba, sannan ku liƙa."],
          words: [["Bayanin kai (profile)", "shafinku a dandamali da ke gaya wa abokan ciniki ko ku wane ne da abin da kuke yi."], ["Tarin samfuran aiki (portfolio)", "ƙananan misalan aikinku kaɗan da ke tabbatar da ƙwarewarku."], ["Taken kai (headline)", "gajeren layi a ƙarƙashin sunanku da ke faɗin hidimarku."]],
          slides: [
            { title: "Taken kai da gajeren bayani", bullets: ["Taken kai: hidimarku da kalmomi kaɗan", "Bayani: wanda kuke taimakawa, abin da kuke yi, yadda, shaida ɗaya"] },
            { title: "Samfuran aiki: ku nuna shaida", bullets: ["Ƙananan samfura biyu ko uku", "Babu abokan ciniki tukuna? Ku yi samfura da kanku", "Kada ku taɓa amfani da aikin wasu"] },
            { title: "Ku sa shi lafiya da sauƙi", bullets: ["Babu adireshi, katin shaida ko bayanan banki", "Ku rubuta ba tare da intanet ba, ku liƙa sau ɗaya", "Ku rage girman hotuna don adana data"] }
          ],
          tryIt: "Ku rubuta taken kanku da gajeren bayani a manhajar rubutu. Sannan ku yi ƙaramin samfurin aiki ɗaya don hidimarku, misali sakin layi da aka fassara, takardar talla ko tebur da aka gyara.",
          youCanNow: "rubuta bayanin kai mai sarari da nuna ƙwarewarku da ƙananan samfuran aiki.",
          quickCheck: [
            { objective: "O2", q: "Ba ku da abokan ciniki tukuna. Ta yaya za ku tara samfuran aiki?", options: ["Ku kwafi aikin wani shahararren mai zane", "Ku yi ƙananan samfura da kanku", "Ku yi amfani da aikin aboki da sunanku", "Ku jira har sai abokin ciniki ya ɗauke ku"], answer: 1, why: "Samfuran da ku kanku kuka yi shaida ce ta gaskiya ta ƙwarewarku." },
            { objective: "O2", q: "Me BAI kamata ya kasance a bayanin kanku ba?", options: ["Taken kanku", "Hidimarku", "Samfurin aikinku", "Adireshin gidanku da lambar katin shaidarku"], answer: 3, why: "Ana iya amfani da bayanan sirri ba daidai ba; bayanin kanku yana buƙatar ƙwarewarku da shaida kawai." }
          ]
        },
        {
          title: "Neman aiki da rubuta tayin aiki",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rubuta gajeren tayin aiki da ke amsa buƙatar abokin ciniki.",
          text: [
            "Wuraren neman aiki: dandamalin aikin kai (kamar Upwork da Fiverr), LinkedIn, allunan tallar aiki, da mutanen da kuka sani, kamar kasuwancin yankinku, coci-coci, ƙungiyoyi masu zaman kansu (NGO) da makarantu da ke buƙatar taimako ta intanet. Abokan cinikinku na farko sau da yawa suna kusa da ku.",
            "Ku karanta tallar aikin sau biyu. Ku nemo buƙatar abokin ciniki, ranar ƙarshe da duk wata tambaya da ya yi. Ku tsallake tallace-tallacen da ba su da sarari, ba sa biyan kome, ko suke neman ku biya.",
            "Tayin aiki (proposal) shi ne gajeren amsarku. Ku sa shi ƙasa da kalmomi 150: 1. Ku nuna kun fahimci buƙatar a jimla ɗaya. 2. Ku faɗi yadda za ku yi aikin. 3. Ku nuna samfurin aiki ɗaya mai alaƙa. 4. Ku yi tambaya ɗaya mai amfani. Ku rubuta shi don wannan tallar; abokan ciniki suna gane saƙon da aka kwafa.",
            "Misali: wani abokin ciniki yana buƙatar a buga sunayen kaya 200 a tebur (spreadsheet). Ngozi a Lagos ta rubuta: \"Kuna buƙatar a buga sunayen kaya 200 da farashinsu a tebur kafin Juma'a. Zan buga kowane layi in sake duba shi. Ga samfurin tebur da na yi. Shin farashin ya zama da naira ko da dala?\""
          ],
          steps: ["Ku karanta tallar sau biyu; ku rubuta buƙatar, ranar ƙarshe da duk wata tambaya.", "Ku tsallake tallar da ba ta da sarari ko mai neman ku biya.", "Jimla ta 1: buƙatar abokin ciniki da kalmominku.", "Jimla ta 2: yadda za ku yi aikin.", "Ku ƙara samfurin aiki ɗaya mai alaƙa.", "Ku yi tambaya ɗaya mai amfani.", "Ku sa shi ƙasa da kalmomi 150."],
          words: [["Tallar aiki (job post)", "bayanin abokin ciniki game da aikin da yake buƙata."], ["Tayin aiki (proposal)", "gajeren amsarku ga tallar aiki, da ke faɗin yadda za ku yi aikin."]],
          slides: [
            { title: "Inda za a sami aiki", bullets: ["Dandamali kamar Upwork da Fiverr", "LinkedIn da allunan tallar aiki", "Kasuwancin yanki, NGO, coci-coci, makarantu"] },
            { title: "Ku karanta tallar sau biyu", bullets: ["Buƙatar, ranar ƙarshe, duk wata tambaya", "Ku tsallake marar sarari da mai neman ku biya"] },
            { title: "Tayin aiki a sassa huɗu", bullets: ["1. Buƙatar da kalmominku  2. Yadda za ku yi ta", "3. Samfurin aiki ɗaya mai alaƙa  4. Tambaya ɗaya mai amfani", "Ƙasa da kalmomi 150, an rubuta don wannan tallar"] }
          ],
          tryIt: "Ku nemo tallar aiki ɗaya ta gaske don hidimarku (ko ku yi amfani da misalin tebur). Ku rubuta tayin aiki ƙasa da kalmomi 150 mai sassa huɗu.",
          youCanNow: "rubuta gajeren tayin aiki da ke nuna wa abokin ciniki cewa kun fahimci buƙatarsa.",
          quickCheck: [
            { objective: "O3", q: "Me jimla ta farko ta tayin aiki za ta yi?", options: ["Nuna cewa kun fahimci buƙatar abokin ciniki", "Ba da labarin rayuwarku", "Neman a biya ku da farko", "Lissafa kowace ƙwarewa da kuke da ita"], answer: 0, why: "Nuna cewa kun fahimci buƙatar yana jawo hankalin abokin ciniki." },
            { objective: "O3", q: "Me yasa za ku rubuta kowane tayin aiki don wannan tallar?", options: ["Dandamali suna buƙatar dogon tayi", "Abokan ciniki suna gane saƙon da aka kwafa su tsallake shi", "Yana ɓata data kaɗan", "Kwafaffen tayi haramun ne"], answer: 1, why: "Tayin da aka rubuta don tallar yana nuna kulawa da fahimta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shiryawa don aiki ta intanet",
        questions: [
          { objective: "O1", q: "Waɗanne abubuwa uku ne tayi na layi ɗaya ke faɗi?", options: ["Shekarunku, garinku da makarantarku", "Farashinku, wayarku da bankinku", "Abin da kuke yi, ga wa, da abin da za su samu", "Abubuwan sha'awarku, iyalinku da burinku"], answer: 2, why: "Abin da ake yi, ga wa, da sakamako suna sa tayi ya zama a sarari." },
          { objective: "O1", q: "Kuna jin Larabci da Faransanci sosai. Wace hidima za ku iya bayarwa?", options: ["Fassara tsakanin Larabci da Faransanci", "Gyaran motoci ta intanet", "Sayar da asusun wasu mutane", "Babu; harsuna ba ƙwarewa ba ne"], answer: 0, why: "Harsuna ƙwarewa ce da abokan ciniki da yawa ke biyan kuɗi a kanta." },
          { objective: "O2", q: "Mene ne tarin samfuran aiki (portfolio)?", options: ["Bayanin asusun bankinku", "Ƙananan misalan aikinku da ke tabbatar da ƙwarewarku", "Katin shaidarku", "Jerin kalmomin sirrin abokan ciniki"], answer: 1, why: "Tarin samfuran aiki yana nuna wa abokan ciniki abin da za ku iya yi." },
          { objective: "O3", q: "Tayin aiki mai kyau shi ne:", options: ["Mai tsawo, da kowace ƙwarewa da kuke da ita", "Saƙo iri ɗaya da aka tura ga kowace talla", "Neman a biya kuɗi kafin aiki", "Gajere, an rubuta don tallar, da samfuri ɗaya da tambaya ɗaya"], answer: 3, why: "Gajerun tayi masu takamaimai da shaida suna samun aiki fiye da haka." },
          { objective: "O3", q: "Wata tallar aiki tana neman ku biya kuɗi don neman aikin. Me za ku yi?", options: ["Ku biya da sauri", "Ku biya rabi", "Ku tsallake ta", "Ku aika katin shaidarku a maimakon haka"], answer: 2, why: "Abokan ciniki na gaske suna biyan ku; ba sa neman ku biya don neman aiki." }
        ]
      }
    },
    {
      name: "Babi na 2: Yin aikin da karɓar kuɗi",
      lessons: [
        {
          title: "Yarjejeniyar aiki da kai shi a kan lokaci",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ku yarda a rubuce kan abin da aikin ya ƙunsa, farashi, ranar ƙarshe da gyare-gyare kafin ku fara.",
          text: [
            "Kafin ku fara, ku yarda a rubuce (a saƙonnin dandamalin ko gajeren imel) kan abubuwa huɗu: abin da aikin ya ƙunsa (scope, wato ainihin abin da za ku kai), farashi, ranar ƙarshe (tare da yankin lokaci, time zone), da sau nawa za a yi gyare-gyare a ciki.",
            "Misali: \"Aiki: zana rubuce-rubuce 3 na kafofin sada zumunta don gidan burodinku. Farashi: kamar yadda aka yarda a kwangila. Ranar ƙarshe: Alhamis ƙarfe 5 na yamma a lokacinku (London). Gyare-gyare: har sau 2.\" Idan abokin ciniki ya nemi ƙari daga baya, ku ba da sabon farashi cikin ladabi don ƙarin aikin.",
            "Ku shirya don ɗaukewar wuta da data. Ku yi cajin wayarku da batirin ajiya (power bank), ku riƙa ajiye aiki a ma'ajiyar intanet (cloud) akai-akai, ku san wani wurin aiki na ko-ta-kwana (gidan intanet, cibiyar matasa, ɗakin karatu), kuma kada ku bar aiki zuwa rana ta ƙarshe. Idan wani abu ya faru, ku gaya wa abokin ciniki da wuri kuma da gaskiya; yawancin abokan ciniki suna yarda da ɗan jinkiri da suka ji labarinsa tun da wuri.",
            "Misali: Ibrahima a Thiès yana aiki daga ƙarfe 6 na safe, kafin wuta ta saba ɗauke, kuma yana ajiye kwafin kowane fayil a Google Drive."
          ],
          steps: ["Ku rubuta abin da aikin ya ƙunsa: ainihin abin da za ku kai.", "Ku rubuta farashi da ranar ƙarshe, tare da yankin lokaci.", "Ku rubuta sau nawa za a yi gyare-gyare a ciki.", "Ku sami amincewar abokin ciniki a rubuce.", "Ku riƙa ajiye aiki akai-akai; ku sami madadin wuta da data.", "Idan za ku makara, ku gaya wa abokin ciniki da wuri."],
          words: [["Abin da aikin ya ƙunsa (scope)", "ainihin aikin da za ku kai."], ["Yankin lokaci (time zone)", "lokacin gida a wani wuri; London, Lagos da Nairobi suna iya bambanta da awoyi."], ["Gyara (revision)", "canjin da abokin ciniki ke nema bayan ya ga aikinku."]],
          slides: [
            { title: "Ku yarda kan abubuwa huɗu a rubuce", bullets: ["Abin da aikin ya ƙunsa: ainihin abin da za ku kai", "Farashi", "Ranar ƙarshe, tare da yankin lokaci", "Sau nawa za a yi gyare-gyare"] },
            { title: "Ƙarin aiki = sabon farashi", bullets: ["Ƙarin buƙatu sabon aiki ne", "Ku ba da sabon farashi cikin ladabi"] },
            { title: "Ku shirya don ɗaukewa", bullets: ["Batirin ajiya; ku riƙa ajiyewa a cloud", "Wurin aiki na ko-ta-kwana", "Za ku makara? Ku gaya wa abokin ciniki da wuri"] }
          ],
          tryIt: "Ku rubuta gajeren saƙon yarjejeniya don wani aiki a hidimarku: abin da aikin ya ƙunsa, farashi (a matsayin misali), ranar ƙarshe tare da yankin lokaci, da sau nawa za a yi gyare-gyare. Sannan ku rubuta shirinku na ko-ta-kwana idan wuta ko data ta ɗauke.",
          youCanNow: "yarda a rubuce kan abin da aiki ya ƙunsa, farashinsa, ranar ƙarshe da gyare-gyare, da kai shi a kan lokaci tare da shirin ko-ta-kwana.",
          quickCheck: [
            { objective: "O4", q: "Wanne BA ya cikin abubuwa huɗu da za a yarda a kai kafin farawa?", options: ["Abin da aikin ya ƙunsa", "Farashi", "Ranar ƙarshe", "Waƙar da kuka fi so"], answer: 3, why: "Abin da aikin ya ƙunsa, farashi, ranar ƙarshe da gyare-gyare su ne huɗun." },
            { objective: "O4", q: "Wuta ta ɗauke kuma wataƙila ba za ku kai aikin gobe a kan lokaci ba. Me za ku yi?", options: ["Ku yi shiru ku yi fata", "Ku gaya wa abokin ciniki da wuri ku ba da sabon lokaci", "Ku goge aikin", "Ku nemi abokin ciniki ya ƙara kuɗi"], answer: 1, why: "Labari na gaskiya da wuri yana kiyaye amincewar abokin ciniki." }
          ]
        },
        {
          title: "Karɓar kuɗi da ajiye bayanai",
          objectives: ["O5"],
          minutes: 5,
          goal: "Zaɓi hanya mai aminci ta karɓar kuɗi ku rubuta kowane biyan kuɗi.",
          text: [
            "A dandamali, ku ajiye aiki, saƙonni da biyan kuɗi a cikin dandamalin. Kariyar biyan kuɗinsa tana aiki a can kaɗai. Abokan ciniki da ke neman ku bar dandamalin don su biya ku \"kai tsaye\" sau da yawa 'yan damfara ne, kuma yin haka yana iya karya ƙa'idojin dandamalin.",
            "Dandamali suna biyan kuɗi ta hanyoyi daban-daban: zuwa asusun banki, zuwa hidimomi kamar Payoneer, ko ta wasu hanyoyi. Abin da ke aiki ya dogara da dandamalin da ƙasarku, kuma kuɗin caji (fees) suna canjawa. Ku karanta shafukan biyan kuɗi da kuɗin caji a cibiyar taimako ta dandamalin da kansa kafin ku ɗauki aikinku na farko.",
            "Da abokan ciniki kai tsaye da kuka sani, ku yarda kan yadda za su biya kafin ku fara: tura kuɗi ta banki ko kuɗin waya (mobile money), da yaushe (misali rabi kafin aiki, rabi bayan an kai shi). Ku fara kai samfuri ko ɗan hango aikin idan ba ku da tabbas.",
            "Ku rubuta kowane biyan kuɗi: kwanan wata, abokin ciniki, aiki, adadi da kuɗin ƙasa (USD, EUR, KES, NGN, GHS, XOF, MAD), kuɗin caji, da adadin da kuka karɓa. Ana iya karɓar haraji a kan kuɗin intanet. Ku tambayi hukumar haraji ta ƙasarku, misali Kenya Revenue Authority ko Ghana Revenue Authority, ko mai ba da shawara kan haraji, abin da dole ku yi rajista da shi ku biya."
          ],
          steps: ["A dandamali, ku ajiye aiki da biyan kuɗi a cikinsa.", "Ku karanta shafukan biyan kuɗi da kuɗin caji na dandamalin da kansa.", "Da abokan ciniki kai tsaye, ku yarda kan yadda da yaushe za su biya kafin ku fara.", "Ku rubuta kowane biyan kuɗi cikin mako ɗaya: kwanan wata, abokin ciniki, aiki, adadi, kuɗin ƙasa, kuɗin caji, abin da aka karɓa.", "Ku tambayi hukumar haraji ta ƙasa abin da ya shafe ku."],
          words: [["Kariyar biyan kuɗi", "tsarin dandamali da ke riƙe ko ke tabbatar da biyan kuɗin aikin da aka yi a cikinsa."], ["Kuɗin ƙasa (currency)", "irin kuɗi: dalar Amurka, yuro, naira, sidi, shilling, CFA franc, dirham."], ["Hukumar haraji", "ofishin gwamnati da ke karɓar haraji, kamar KRA a Kenya ko GRA a Ghana."]],
          slides: [
            { title: "Ku zauna a cikin dandamalin", bullets: ["Aiki, saƙonni da biyan kuɗi a cikinsa", "Kariya tana aiki a can kaɗai", "\"A biya ku kai tsaye a wajen dandamali\" = alamar gargaɗi"] },
            { title: "Hanyoyin karɓar kuɗi", bullets: ["Banki, Payoneer ko wasu: ya dogara da ƙasa", "Ku karanta shafukan taimako na dandamalin da kansa", "Kuɗin caji suna canjawa: ku duba kafin aikinku na farko"] },
            { title: "Bayanai da haraji", bullets: ["Kwanan wata, abokin ciniki, aiki, adadi, kuɗin ƙasa, kuɗin caji", "Ku rubuta kowane biyan kuɗi cikin mako ɗaya", "Ku tambayi KRA, GRA ko hukumar harajinku"] }
          ],
          sources: [KRA, GRA],
          tryIt: "Ku yi tebur na bayanan biyan kuɗi mai waɗannan ginshiƙai: kwanan wata, abokin ciniki, aiki, adadi, kuɗin ƙasa, kuɗin caji, adadin da aka karɓa. Ku ƙara layi ɗaya na misali. Sannan ku nemo shafin taimako na biyan kuɗi na wani dandamali da za ku iya amfani da shi.",
          youCanNow: "zaɓar hanya mai aminci ta karɓar kuɗi, ajiye bayanin kowane biyan kuɗi, da sanin inda za ku tambaya game da haraji.",
          quickCheck: [
            { objective: "O5", q: "Wani sabon abokin ciniki a dandamali yana neman ku koma WhatsApp a biya ku \"kai tsaye\". Mene ne haɗarin?", options: ["Za ku rasa kariyar biyan kuɗi ta dandamalin, kuma sau da yawa zamba ce", "Babu; ya fi sauri", "Za a biya ku ninki biyu", "Dandamalin zai biya kuɗin caji"], answer: 0, why: "Kariyar biyan kuɗi tana aiki a cikin dandamali kaɗai; neman barin dandamali alamar zamba ce da aka saba gani." },
            { objective: "O5", q: "Wa zai iya gaya muku harajin da ake binku a kan kuɗin intanet?", options: ["Abokin cinikinku", "Wani rukunin WhatsApp", "Hukumar haraji ta ƙasarku ko mai ba da shawara kan haraji", "Babu kowa; ba a taɓa karɓar haraji a kan kuɗin intanet"], answer: 2, why: "Dokokin haraji sun bambanta daga ƙasa zuwa ƙasa; hukumar haraji ko mai ba da shawara za su gaya muku." }
          ]
        },
        {
          title: "Ayyukan bogi da zambar biyan kuɗi",
          objectives: ["O6"],
          minutes: 6,
          goal: "Gane tayin ayyukan bogi ku faɗi alamar gargaɗi a kowanne.",
          text: [
            "Sababbin masu aikin kai babban abin hari ne. Alamun gargaɗi: 1. Suna neman KU ku biya: kuɗin rajista, horo, \"kayan farawa\" ko manhaja. 2. Albashi da ya yi yawa ga aiki mai sauƙi, kamar \"ku sami USD 500 a rana ta hanyar danna like a bidiyo\". 3. Suna neman kalmomin sirrinku, PIN, lambobin tabbatarwa na lokaci ɗaya ko takardun shaida. 4. Suna son ku bar dandamalin nan take. 5. Suna \"biyan fiye da kima\" ta cak ko tura kuɗi, su nemi ku mayar da ragowar. 6. Ayyukan \"task\" ko \"zuba jari\" inda kuke saka kuɗi don buɗe ayyuka ko riba, sau da yawa ana tallata su a WhatsApp, Telegram da TikTok.",
            "Hukumar SEC ta Najeriya ta yi gargaɗi game da tsare-tsaren da ake tallatawa a kafofin sada zumunta da ke alƙawarin riba mai yawa. Abokan ciniki na gaske suna biyan ku don aiki; ba sa taɓa neman ku biya don yin aiki.",
            "Ku kare asusunku: kalmar sirri mai ƙarfi kuma daban don imel ɗinku da kowane dandamali, tabbatarwa ta matakai biyu (two-step verification) a kunne, kuma kada ku taɓa raba lambobin tabbatarwa. Kada ku bar kowa ya \"yi hayar\" ko amfani da asusunku da aka tabbatar; ana iya amfani da shi don zamba da sunanku.",
            "Sannan ku haɗa kayan farawanku: tayinku, bayanin kanku, samfuran aiki, tayin aiki ɗaya, da jerin abubuwan tsaro da biyan kuɗi."
          ],
          steps: ["Ku tambaya: suna son in biya ne?", "Ku tambaya: albashin ya yi yawa ga aikin ne?", "Ku tambaya: suna neman kalmomin sirri, lambobin tabbatarwa ko katin shaida ne?", "Ku tambaya: suna gaggauta ni in bar dandamalin ne?", "Idan amsa ɗaya ce \"e\": ku tsaya, kada ku biya, ku kai rahoto ga dandamalin.", "Ku kunna tabbatarwa ta matakai biyu, kuma kada ku taɓa raba lambobin tabbatarwa."],
          words: [["Zambar biyan fiye da kima", "biyan kuɗi na bogi da ya wuce kima, sannan a nemi ku mayar da ragowar kafin biyan bogin ya koma."], ["Tabbatarwa ta matakai biyu", "ƙarin dubawa na biyu, kamar lambar da aka tura wayarku, lokacin da kuke shiga asusu."], ["Zambar task", "aikin bogi inda dole ku saka kuɗi don buɗe ayyuka ko riba."]],
          slides: [
            { title: "Alamun gargaɗin aikin bogi", bullets: ["Suna neman ku biya don yin aiki", "Albashi ya yi yawa sosai ga aiki mai sauƙi", "Suna neman kalmomin sirri, lambobin tabbatarwa ko katin shaida"] },
            { title: "Ƙarin dabaru", bullets: ["Gaggauta ku ku bar dandamalin", "Biyan fiye da kima, sannan \"ku mayar da ragowar\"", "Saka kuɗi don buɗe ayyuka ko riba"] },
            { title: "Ku kare asusunku", bullets: ["Kalmomin sirri masu ƙarfi kuma daban-daban", "Tabbatarwa ta matakai biyu a kunne", "Kada ku taɓa ba da hayar asusunku da aka tabbatar"] },
            { title: "Kayan farawanku", bullets: ["Tayi, bayanin kai, samfuran aiki", "Tayin aiki ɗaya", "Jerin abubuwan tsaro da biyan kuɗi"] }
          ],
          sources: [SEC_NG],
          tryIt: "Aikin ƙarshe: ku haɗa kayan farawa na aikin kai: tayi na layi ɗaya, taken kai da gajeren bayani, samfuran aiki biyu ko uku, tayin aiki ɗaya ga tallar aiki ta gaske ko ta misali, da jerin abubuwa mai hanyar biyan kuɗinku, teburin bayananku, inda za ku tambaya game da haraji, da alamun gargaɗi shida na aikin bogi.",
          youCanNow: "gane ayyukan bogi da zambar biyan kuɗi, da gabatar da kanku a matsayin mai aikin kai da ke shirye a ɗauke shi aiki.",
          quickCheck: [
            { objective: "O6", q: "Wani \"mai ɗaukar ma'aikata\" yana ba da aikin shigar da bayanai amma yana neman USD 20 don kayan farawa. Mene ne alamar gargaɗin?", options: ["Aikin shigar da bayanai ne", "Mai ɗaukar ma'aikatan yana da ladabi", "Aikin na wani ɓangare na lokaci ne", "Suna neman ku biya don yin aiki"], answer: 3, why: "Abokan ciniki na gaske suna biyan ku; neman ku biya ita ce sananniyar alamar aikin bogi." },
            { objective: "O6", q: "Wani abokin ciniki ya tura fiye da adadin da aka yarda, ya nemi ku mayar da ragowar da sauri. Mene ne wannan?", options: ["Abokin ciniki mai karimci", "Zambar biyan fiye da kima", "Kyautar dandamali", "Mayar da kuɗin haraji"], answer: 1, why: "Biyan farko sau da yawa na bogi ne kuma yana komawa bayan kun tura kuɗinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yin aikin da karɓar kuɗi",
        questions: [
          { objective: "O4", q: "Me yasa za ku yarda kan yawan gyare-gyare kafin ku fara?", options: ["Don kada gyare-gyare marasa iyaka su cinye lokacinku ba tare da biya ba", "Don abokin ciniki ya biya ƙasa", "Domin dandamali suna buƙatar gyare-gyare biyar", "Ba shi da muhimmanci"], answer: 0, why: "Gyare-gyaren da aka yarda da su suna kare lokacinku; ƙarin aiki yana samun sabon farashi." },
          { objective: "O4", q: "Abokin cinikinku yana London, ku kuma kuna Nairobi. Me yasa za ku rubuta yankin lokaci tare da ranar ƙarshe?", options: ["Ladabi ne", "Lokaci ya bambanta, don haka ku biyu ku san ainihin lokacin kai aikin", "Yana sa aikin ya fi tsada", "Dandamali sun hana ranar ƙarshe ba tare da shi ba"], answer: 1, why: "Lokaci ya bambanta tsakanin ƙasashe; yankin lokaci yana kawar da ruɗani." },
          { objective: "O5", q: "Wanne ya kamata ya kasance a bayanin biyan kuɗinku?", options: ["Kalmar sirrinku", "PIN ɗinku", "Kwanan wata, abokin ciniki, aiki, adadi, kuɗin ƙasa da kuɗin caji", "Adireshin sirri na abokin ciniki"], answer: 2, why: "Waɗannan bayanai suna bin diddigin kuɗin shigarku kuma suna taimakawa wajen haraji." },
          { objective: "O6", q: "Wane tayi ne ya fi yiwuwa ya zama na gaske?", options: ["\"Ku biya USD 30 don buɗe ayyuka\"", "\"Ku aiko lambar shiga asusunku don mu shirya muku asusu\"", "\"Ku sami USD 500 a rana ta hanyar danna like a bidiyo\"", "Abokin ciniki a dandamali da ya yarda kan abin da aikin ya ƙunsa da farashi, kuma ya biya ta dandamalin"], answer: 3, why: "Aiki na gaske yana da abin da ya ƙunsa da farashi a sarari, kuma ana biyan sa ta hanyoyi masu aminci." },
          { objective: "O6", q: "Wani yana son ya \"yi hayar\" asusunku na aikin kai da aka tabbatar. Me za ku yi?", options: ["Ku ƙi; ana iya amfani da shi don zamba da sunanku", "Ku yarda don ɗan kuɗi kaɗan", "Ku ba da kalmar sirri kawai", "Ku fara ba aboki"], answer: 0, why: "Asusunku yana da alaƙa da shaidarku; wasu za su iya amfani da shi ba daidai ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Aikin Kai ta Intanet (Freelancing) da Aiki daga Nesa a Afirka",
    questions: [
      { objective: "O1", q: "Wane ne mai aikin kai (freelancer)?", options: ["Mutumin da ke aiki kyauta", "Mutumin da ke yin aiki na biya ga abokan ciniki, aiki ɗaya bayan ɗaya", "Ma'aikacin gwamnati", "Mai dandamali"], answer: 1, why: "Masu aikin kai suna sayar da hidimarsu aiki bayan aiki ga abokan ciniki daban-daban." },
      { objective: "O1", q: "Wane ne tayi na layi ɗaya mai ƙarfi?", options: ["\"Ina yin komai\"", "\"Ma'aikaci nagari, ku ɗauke ni\"", "\"Ayyukan intanet\"", "\"Ina rubuta bayanin kaya ga shagunan intanet don taimaka musu su sayar\""], answer: 3, why: "Yana faɗin abin da ake yi, ga wa, da sakamako." },
      { objective: "O1", q: "Kuna buƙatar ƙarin ƙwarewa kafin ku fara. Mene ne zaɓi mai kyau na kyauta a Najeriya?", options: ["Shirin 3MTT", "\"Makarantar\" WhatsApp ta kuɗi da ke alƙawarin aiki", "Sayen asusun da aka tabbatar", "Manhajar task da ke neman a saka kuɗi"], answer: 0, why: "3MTT shirin horo ne na gwamnati; sauran alamun gargaɗi ne." },
      { objective: "O2", q: "Taken kai (headline) ya kamata ya:", options: ["Lissafa lambar wayarku", "Faɗi hidimarku da kalmomi kaɗan", "Ba da cikakken labarin rayuwarku", "Nuna lambar katin shaidarku"], answer: 1, why: "Gajeren taken kai yana gaya wa abokan ciniki abin da kuke yi da kallo ɗaya." },
      { objective: "O2", q: "Wane ne samfurin aiki na gaskiya?", options: ["Takardar talla da kuka zana don shagon da ba na gaske ba", "Aikin wani shahararren mai zane", "Rubutun aboki", "Fayil na sirri na abokin ciniki da aka raba ba tare da izini ba"], answer: 0, why: "Samfuran da ku kanku kuka yi shaida ce ta gaskiya." },
      { objective: "O2", q: "Ta yaya za ku adana data yayin da kuke yin bayanin kanku?", options: ["Ku ɗora manyan hotuna", "Ku sake rubuta shi ta intanet sau da yawa", "Ku fara rubutawa ba tare da intanet ba, sannan ku liƙa shi sau ɗaya", "Ku yi amfani da kiran bidiyo kawai"], answer: 2, why: "Rubutu ba tare da intanet ba da rage girman hotuna suna adana data mai tsada." },
      { objective: "O3", q: "Tsawon tayin aiki na farko yawanci ya kamata ya zama nawa?", options: ["Shafuka biyu", "Kalma ɗaya", "Mafi tsawo da zai yiwu", "Ƙasa da kusan kalmomi 150"], answer: 3, why: "Ana karanta gajerun tayi; ana tsallake dogaye." },
      { objective: "O3", q: "Wanne ya kamata ya kasance a tayin aiki?", options: ["Samfurin aiki mai alaƙa da tambaya ɗaya mai amfani", "PIN na bankinku", "Neman a biya kuɗi kafin aiki", "Kwafin katin shaidarku"], answer: 0, why: "Shaida da tambaya mai kyau suna nuna cewa za ku iya yin aikin." },
      { objective: "O3", q: "A ina ake yawan samun abokan ciniki na farko?", options: ["A ƙasashen waje kawai", "A shafin intanet ɗaya kawai", "Kasuwancin yanki, NGO, makarantu da coci-coci, da kuma dandamali", "Babu inda sai an biya mai ɗaukar ma'aikata"], answer: 2, why: "Masu aikin kai da yawa suna farawa da mutane da kasuwancin da ke kusa da su." },
      { objective: "O4", q: "Mene ne ma'anar \"scope\" (abin da aikin ya ƙunsa)?", options: ["Ƙasar abokin ciniki", "Ainihin abin da za ku kai", "Farashinku", "Kuɗin cajin dandamali"], answer: 1, why: "Scope shi ne ainihin aikin da aka yarda a kai." },
      { objective: "O4", q: "Abokin ciniki ya nemi sabon zane da bai cikin abin da aka yarda ba. Me za ku yi?", options: ["Ku yi shi kyauta, sau da yawa", "Ku yi watsi da saƙon", "Ku soke aikin", "Ku ba da sabon farashi cikin ladabi don ƙarin aikin"], answer: 3, why: "Ƙarin aiki a wajen abin da aka yarda sabon aiki ne mai sabon farashi." },
      { objective: "O4", q: "Wane ne shirin ko-ta-kwana mai kyau don ɗaukewar wuta?", options: ["Ku yi cajin batirin ajiya ku riƙa ajiye aiki a cloud akai-akai", "Ku yi fata wuta ba za ta ɗauke ba", "Ku yi aiki a daren da ya gabata kawai", "Kada ku gaya wa abokin ciniki kome"], answer: 0, why: "Batirin ajiya, ajiyewa a cloud da wurin aiki na ko-ta-kwana suna sa ku kai aiki a kan lokaci." },
      { objective: "O5", q: "Me yasa za ku ajiye aiki da biyan kuɗi a cikin dandamali?", options: ["Ya fi jinkiri", "Kariyar biyan kuɗinsa tana aiki a can kaɗai", "Babu kowane kuɗin caji a ciki", "Abokin ciniki ya fi son haka"], answer: 1, why: "Barin dandamali yana cire kariyarsa kuma hanya ce ta zamba da aka saba gani." },
      { objective: "O5", q: "A ina za ku koyi hanyoyin karɓar kuɗi da kuɗin caji na yanzu na wani dandamali?", options: ["Sharhi a YouTube", "Hasashen aboki", "Cibiyar taimako ta dandamalin da kansa", "Abokin ciniki"], answer: 2, why: "Hanyoyi da kuɗin caji sun bambanta daga ƙasa zuwa ƙasa kuma suna canjawa; shafukan dandamalin da kansa su ne na yanzu." },
      { objective: "O5", q: "Da wuri nawa za ku rubuta biyan kuɗi?", options: ["Cikin mako ɗaya", "A ƙarshen shekara", "Ba za a taɓa ba", "Manyan biyan kuɗi kawai"], answer: 0, why: "Rubutawa da wuri yana sa bayananku su cika don tsari da haraji." },
      { objective: "O5", q: "A Ghana, wa zai iya gaya muku game da haraji a kan kuɗin intanet ɗinku?", options: ["Abokin cinikinku", "Bidiyon TikTok", "Ghana Revenue Authority ko mai ba da shawara kan haraji", "Na'urar hira (chat bot) ta dandamalin"], answer: 2, why: "Hukumar haraji ta ƙasa ce ke kafa dokokin haraji da bayyana su." },
      { objective: "O6", q: "Wanne ne alamar gargaɗin aikin bogi?", options: ["Abin da aikin ya ƙunsa da farashi a sarari", "Suna neman ku biya kuɗin rajista ko kayan farawa", "Biyan kuɗi ta dandamali", "Ranar ƙarshe tare da yankin lokaci"], answer: 1, why: "Abokan ciniki na gaske ba sa taɓa neman ku biya don yin aiki." },
      { objective: "O6", q: "Wani \"aiki\" yana neman ku saka kuɗi don buɗe ayyuka masu biyan kuɗi fiye da haka. Wannan:", options: ["Aiki ne na yau da kullum", "Kuɗin horo ne", "Haraji ne", "Zambar task ce"], answer: 3, why: "Saka kuɗi don buɗe ayyuka ko riba zamba ce da aka saba gani." },
      { objective: "O6", q: "Me ke kare asusunku na aikin kai da na imel?", options: ["Kalmar sirri ɗaya ga kome", "Raba lambobin tabbatarwa da abokan ciniki", "Kalmomin sirri masu ƙarfi kuma daban-daban da tabbatarwa ta matakai biyu", "Ba wasu hayar asusunku"], answer: 2, why: "Kalmomin sirri daban-daban da dubawa ta biyu lokacin shiga suna hana yawancin satar asusu." },
      { objective: "O6", q: "Wani mai ɗaukar ma'aikata yana neman hoton katin shaidarku da kalmar sirrin imel ɗinku \"don tabbatar da ku\". Me za ku yi?", options: ["Ku ƙi ku kai rahoto", "Ku aika duka biyun", "Ku aika kalmar sirri kawai", "Ku aika katin shaida kawai"], answer: 0, why: "Abokan ciniki na gaske ba sa taɓa buƙatar kalmar sirrinku; neman katin shaida daga baƙi haɗarin zamba ne." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Tayi a sarari", objective: "O1", notYet: "Tayin ba shi da sarari (\"Ina yin komai ta intanet\").", meets: "Hidima ɗaya, da ke faɗin abin da kuke yi, ga wa, da abin da abokin ciniki zai samu.", exceeds: "Tayin yana ambaton takamaiman irin abokin ciniki da sakamako a sarari ko lokacin kammalawa." },
      { name: "Bayanin kai da samfuran aiki", objective: "O2", notYet: "Babu taken kai ko gajeren bayani, babu samfura, ko an nuna bayanan sirri.", meets: "Taken kai, gajeren bayani da samfura biyu ko uku da mai koyo ya yi, ba tare da bayanan sirri ba.", exceeds: "Samfuran sun dace da tayin sosai, kuma bayanin yana da shaida ɗaya (horo ko aikin da aka yi a baya)." },
      { name: "Tayin aiki", objective: "O3", notYet: "Mai tsawo, kwafaffe ne, ko bai ambaci buƙatar abokin ciniki ba.", meets: "Ƙasa da kalmomi 150, an rubuta shi don tallar: buƙatar, yadda za a yi, samfuri ɗaya, tambaya ɗaya.", exceeds: "Tambayar tana nuna tunani na gaske game da aikin, kuma tayin ya dace da salon magana na abokin ciniki." },
      { name: "Yarjejeniyar aiki", objective: "O4", notYet: "Babu abin da aikin ya ƙunsa ko ranar ƙarshe a rubuce.", meets: "Saƙon yarjejeniya mai abin da aikin ya ƙunsa, farashi, ranar ƙarshe tare da yankin lokaci da gyare-gyare, da shirin ko-ta-kwana na wuta ko data.", exceeds: "Yana kuma faɗin yadda za a ƙayyade farashin ƙarin aiki." },
      { name: "Biyan kuɗi da bayanai", objective: "O5", notYet: "Babu hanyar biyan kuɗi ko teburin bayanai.", meets: "Hanyar biyan kuɗi mai aminci (a cikin dandamali, ko wadda aka yarda da ita tun da wuri da abokin ciniki da aka sani), teburin bayanai, da inda za a tambaya game da haraji.", exceeds: "An duba hanyar biyan kuɗin a shafin taimako na dandamalin da kansa." },
      { name: "Sanin zamba", objective: "O6", notYet: "Alamun gargaɗi ƙasa da huɗu, ko shirin biyan kuɗi don samun aiki.", meets: "Ya lissafa alamun gargaɗi shida na aikin bogi kuma ya ce tabbatarwa ta matakai biyu tana kunne.", exceeds: "Ya ƙara wani tayin bogi na gaske da mai koyo ya gani da yadda ya gane shi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka tura aƙalla tayin aiki uku cikin kwanaki 30",
      "Masu koyo da suka ce sun sami aikin intanet na farko da aka biya su cikin kwanaki 90",
      "Masu koyo da suka ce sun ƙi wani aikin bogi ko zambar biyan kuɗi cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta mai ɗan data, da adireshin imel",
      "Manhajar rubutu (notes) ko takarda don rubuta daftarin bayanin kai da tayin aiki",
      "Kayan aiki kyauta don samfura, kamar Google Docs ko Sheets, Canva ko Microsoft 365",
      "Kusan minti 75 gaba ɗaya, a gajerun zama, da ƙarin lokaci don yin samfura"
    ],
    facilitatorNotes: [
      "Yana aiki da kyau a cibiyoyin matasa, cibiyoyin Ajira, rukunonin 3MTT, ɗakunan karatu da ƙungiyoyin matasa na coci ko masallaci: ku yi gwajin farko tare, sannan babi ɗaya a kowane zama.",
      "Ku kawo tallace-tallacen aiki na misali da aka buga a takarda don masu koyo su yi atisayen tayin aiki ba tare da amfani da data ba.",
      "Kada ku ba da shawarar \"makarantun aikin kai\" na kuɗi ko masu sayar da asusu; ku nuna horo na hukuma kyauta.",
      "Kada ku taɓa neman masu koyo su raba kalmomin sirri, lambobin tabbatarwa, takardun shaida ko bayanan karɓar kuɗi a aji.",
      "Ku haɗa masu koyo bibbiyu don su duba tayin aikin juna da ma'aunin rubric kafin su tura.",
      "Kafin zaman, ku duba shafukan taimako na yanzu na kowane dandamali game da biyan kuɗi a ƙasarku; suna canjawa."
    ]
  }
};
