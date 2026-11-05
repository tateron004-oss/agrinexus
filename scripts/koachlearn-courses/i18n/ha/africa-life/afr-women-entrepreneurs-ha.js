"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-women-entrepreneurs.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const UNWOMEN = { name: "UN Women (hukumar Majalisar Ɗinkin Duniya ta mata): ƙarfafa tattalin arziki (aikin kulawa marar albashi, samun dukiya da kuɗi)", url: "https://www.unwomen.org/en/what-we-do/economic-empowerment" };
const WEF = { name: "Women Enterprise Fund, Kenya (asusun gwamnati don sana'o'in mata)", url: "https://wef.co.ke/" };
const SMEDAN = { name: "SMEDAN, Najeriya: rajista kyauta, SME Digital Academy da shirye-shirye kamar Women In Self-employment Programme", url: "https://smedan.gov.ng/" };
const DERFJ = { name: "DER/FJ, Senegal: Délégation générale à l'Entreprenariat Rapide des Femmes et des Jeunes (rajistar kasuwanci, horo, tallafin kuɗi)", url: "https://der.sn/" };
const GEA = { name: "Ghana Enterprises Agency: tallafi ga ƙanana da matsakaitan sana'o'i", url: "https://gea.gov.gh/" };
const AFAWA = { name: "Bankin Raya Afirka (African Development Bank): AFAWA, Affirmative Finance Action for Women in Africa", url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/affirmative-finance-action-for-women-in-africa" };

module.exports = {
  id: "afr-women-entrepreneurs-ha",
  lang: "ha",
  translationOf: "afr-women-entrepreneurs",
  category: "Africa: Life and Work",
  name: "Mata 'Yan Kasuwa: Fara Sana'a da Bunƙasa Ta",
  skills: "Zaɓar sana'ar da ta dace da rayuwarku, Gwada sana'a da ainihin masu saye, Sa farashi mai riba da biyan kanku, Tsara lokaci da taimakon iyali, Neman kuɗi da tallafi lafiya, Gina abokan hulɗa da shirin bunƙasa",
  outcome: "fara ko bunƙasa ƙaramar sana'a da ta dace da rayuwarku: zaɓar ra'ayin sana'a, gwada shi da ainihin masu saye, sa farashi mai riba da biyan kanku, tsara makonku da taimakon da kuke buƙata, samun kuɗi da tallafi lafiya, da rubuta shirin bunƙasa na wata shida.",
  about: [
    "Mata ne ke gudanar da yawancin ƙananan sana'o'i a faɗin Afirka: a kasuwa, wurin gyaran gashi, kicin, gona, shago da kuma intanet. Da yawa suna yin haka yayin da suke kula da yara da iyali, kuma sau da yawa ba sa samun bashi, fili da lokaci kamar maza. Wannan kwas na mata ne a Kenya, Najeriya, Ghana, Senegal, Kamaru, Masar da sauran Afirka, waɗanda ke son fara sana'a ko su sa wadda suke da ita ta ƙara samun kuɗi.",
    "Za ku zaɓi ra'ayin sana'a da ya dace da ƙwarewarku, lokacinku da buƙatar mutanen yankinku, ku gwada shi da ɗan kuɗi kafin ku kashe mai yawa, ku sa farashin kayanku ta yadda za su kawo riba su kuma biya ku, ku tsara makonku da taimakon da kuke buƙata a gida, ku nemo shirye-shiryen kuɗi da tallafi ku tabbatar na gaskiya ne, sannan ku gina abokan hulɗa da shirin wata shida.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\" don sana'arku. Adadin kuɗin da aka bayar misalai ne kawai. Kwas ɗin yana bayanin zaɓuɓɓuka ne; ba shawarar kuɗi ba ne. Don ƙarin bayani, ku duba kwasa-kwasan ƙungiyoyin tanadi, sayarwa ta intanet da rajistar kasuwanci a wannan rukuni."
  ],
  finalTask: "Ku rubuta shirin sana'a mai shafi ɗaya don kanku: ra'ayin da kuka zaɓa da makinsa, abin da kuka koya daga gwada shi da ainihin masu saye, kuɗin samarwa, farashi da ribar kaya ɗaya da abin da za ku biya kanku, shirin lokaci na mako da wanda ke taimakawa, zaɓin kuɗi ko tallafi ɗaya da kuka tabbatar a shafinsa na hukuma, da manufofi uku na wata shida masu zuwa tare da malami (mentor) ɗaya ko ƙungiya ɗaya da za ku tuntuɓa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mata a faɗin Afirka, a birane da ƙauyuka, waɗanda ke da ƙaramar sana'a ko suke son farawa: 'yan kasuwa, masu dafa abinci don sayarwa, tela, masu gyaran gashi, manoma masu sarrafa amfanin gona su sayar, masu shago da masu sayarwa ta intanet. Shekarunsu da iliminsu sun bambanta sosai; da yawa iyaye mata ne kuma masu kula da iyali.",
    startingPoint: "Da yawa sun riga sun sami ɗan kuɗi daga saye da sayarwa ko wata ƙwarewa, kuma da yawa suna cikin ƙungiyar tanadi (adashi). Kaɗan ne ke gwada ra'ayi kafin su kashe kuɗi, ko su ƙididdige dukkan kuɗin samar da kayansu, ko su biya kansu adadi ƙayyadadde, ko su rubuta manufofi. Wasu ba su da iko a kan kuɗin da suke samu, ko ba sa ɓoye lambar sirrin (PIN) kuɗin wayarsu.",
    gap: "Mata 'yan kasuwa sau da yawa ba su da isasshen lokaci, kuɗi da abokan hulɗar kasuwanci, kuma sana'o'i da yawa suna zama ƙanana ko su rufe saboda farashi bai rufe kuɗin samarwa ba, ko mai sana'ar ta gaji da ayyuka. Masu koyo suna buƙatar zaɓa da gwada ra'ayi cikin hikima, sa farashi mai riba, tsara lokacinsu da taimakonsu, samun kuɗi da shirye-shirye na gaske lafiya, da bunƙasa ta hanyar abokan hulɗa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; masu koyo da yawa suna jin Turanci a matsayin harshe na biyu (ana kuma bayar da kwas ɗin a Faransanci da Larabci)",
      "Lokaci: aikin kulawa da na gida mai yawa; darussa na minti 4 zuwa 6 da suka dace da shi",
      "Na'urori: waya mai sauƙi, wani lokaci ana raba ta da iyali; kuɗin data yana da tsada",
      "Kuɗi: ƙananan kasafi; babu shawarar kuɗi; sunaye da sharuɗɗan shirye-shirye suna canjawa, don haka masu koyo suna dubawa a shafukan hukuma",
      "Tsaro: zamba da ke neman mata su biya kuɗi don samun tallafi ko bashi; wasu mata suna fuskantar matsi ko ana mallake musu kuɗinsu"
    ],
    prerequisites: "Babu. Mai amfani: \"Savings Groups and Microfinance\" (Ƙungiyoyin Tanadi da Ƙananan Lamuni) a wannan rukuni."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da ra'ayoyin sana'a biyu ko uku", action: "ba kowane ra'ayi maki kan ƙwarewarku, lokaci, kuɗin farawa da buƙatar mutanen yankinku, da zaɓar ɗaya", standard: "ta amfani da ma'auni iri ɗaya ga kowane ra'ayi da rubuta dalilin da yasa wanda ya ci ya dace" },
    { id: "O2", condition: "Kafin ku kashe yawancin kuɗinku a kan sabon ra'ayi", action: "gwada ra'ayin da ɗan ƙaramin kaya da aƙalla ainihin masu saye goma", standard: "kuna rubuta mutum nawa suka saya, farashin da suka biya da canji ɗaya da za ku yi" },
    { id: "O3", condition: "Idan kuna da kuɗaɗen samar da kaya ko hidima ɗaya", action: "ƙididdige kuɗin samar da kowane kaya, sa farashi mai riba, da ƙayyade adadin da za ku biya kanku", standard: "da kowane kuɗi a ciki kuma lissafin daidai ne" },
    { id: "O4", condition: "Idan kuna da ayyukan sana'a da na gida na mako ɗaya", action: "tsara shirin lokaci na mako da ke nuna lokutan sana'a, ayyukan kulawa da wanda zai taimaka", standard: "an amince da shi tare da aƙalla mutum ɗaya a iyali ko mai taimako" },
    { id: "O5", condition: "Idan kuna neman bashi, tallafi ko shirin taimako", action: "tabbatar da cewa tayin na gaskiya ne a shafin hukuma da riƙe iko a kan kuɗinku da lambar sirrinku (PIN)", standard: "ba tare da biyan \"kuɗin sarrafawa\" ga baƙi ba, kuma ba tare da gaya wa kowa PIN ɗinku ba" },
    { id: "O6", condition: "Don wata shida masu zuwa", action: "rubuta manufofin sana'a uku masu auna da ambaton malami (mentor) ɗaya, ƙungiya ko kungiyar 'yan kasuwa da za ku tuntuɓa", standard: "kowace manufa da adadi da kwanan wata" }
  ],
  chapters: [
    {
      name: "Babi na 1: Farawa da kyau",
      lessons: [
        {
          title: "Zaɓar sana'ar da ta dace da rayuwarku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ku ba ra'ayoyin sana'a biyu ko uku maki, ku zaɓi wanda ya fi dacewa da ku.",
          text: [
            "Sana'a mafi kyau a gare ku ita ce wadda mutanen kusa da ku suke so, wadda ke amfani da ƙwarewar da kuke da ita, kuma ta dace da ainihin lokaci da kuɗin da kuke da su. Sana'ar da ke buƙatar ku kasance a kasuwa tun ƙarfe 5 na asuba ba za ta dace ba idan kuna kai yara makaranta.",
            "Ku rubuta ra'ayoyi biyu ko uku. Ku ba kowanne maki daga 1 (mara kyau) zuwa 3 (mai kyau) kan abubuwa huɗu: ƙwarewarku, lokacin da yake buƙata idan aka kwatanta da lokacin da kuke da shi, kuɗin farawa idan aka kwatanta da kuɗin da kuke da shi, da buƙatar mutanen yankinku (shin mutane suna sayen wannan a kusa, kuma akwai wuri ga ƙarin mai sayarwa ɗaya?). Ku haɗa makin.",
            "Misali: Halima a Kaduna ta ba ra'ayoyi uku maki. Sayar da kunu kusa da makaranta: ƙwarewa 3, lokaci 2, kuɗi 3, buƙata 3 = 11. Ɗinki: ƙwarewa 2, lokaci 2, kuɗi 1, buƙata 2 = 7. Sayar da katin waya: ƙwarewa 2, lokaci 3, kuɗi 2, buƙata 1 = 8 (masu sayarwa sun riga sun yi yawa). Ta zaɓi kunu. Aïcha a Dakar za ta iya ba rumfar thiakry (abincin zaƙi), kitso da ƙaramin shago maki ta hanya ɗaya.",
            "Maki suna taimaka muku tunani; ba su ke yanke muku shawara ba. Ku kuma tambayi kanku: shin zan ji daɗin wannan aiki, kuma zan iya bunƙasa shi daga baya?"
          ],
          steps: ["Ku rubuta ra'ayoyi biyu ko uku.", "Ku ba kowanne maki 1 zuwa 3 kan ƙwarewa, lokaci, kuɗin farawa da buƙatar yankinku.", "Ku haɗa makin.", "Ku zaɓi ɗaya ku rubuta dalilin da yasa ya dace da rayuwarku."],
          words: [["Kuɗin farawa", "kuɗin da kuke buƙata don farawa: kayan aiki, kayan sayarwa na farko, rumfa ko lasisi."], ["Buƙata", "yawan mutanen da ke son sayen wani abu, da yawan abin da suke so."]],
          slides: [
            { title: "Sana'ar da ta dace da ku", bullets: ["Mutanen kusa da ku suna son ta", "Tana amfani da ƙwarewar da kuke da ita", "Ta dace da ainihin lokaci da kuɗinku"] },
            { title: "Ku ba kowane ra'ayi maki 1 zuwa 3", bullets: ["Ƙwarewarku", "Lokacin da yake buƙata da lokacin da kuke da shi", "Kuɗin farawa da kuɗin da kuke da shi", "Buƙatar mutanen yankinku"] },
            { title: "Misali: Halima a Kaduna", bullets: ["Kunu kusa da makaranta: 11", "Ɗinki: 7", "Katin waya: 8, masu sayarwa sun yi yawa"] },
            { title: "Sannan ku tambayi kanku", bullets: ["Zan ji daɗin wannan aiki?", "Zan iya bunƙasa shi daga baya?"] }
          ],
          tryIt: "Ku rubuta ra'ayoyin sana'a biyu ko uku. Ku ba kowanne maki 1 zuwa 3 kan ƙwarewa, lokaci, kuɗin farawa da buƙatar yankinku, ku haɗa makin, sannan ku rubuta jimla ɗaya kan dalilin da yasa ra'ayin da ya fi maki ya dace da rayuwarku.",
          youCanNow: "kwatanta ra'ayoyin sana'a da maki masu sauƙi da zaɓar wanda ya dace da rayuwarku.",
          quickCheck: [
            { objective: "O1", q: "Waɗanne abubuwa huɗu ne kuke ba kowane ra'ayi maki a kai?", options: ["Launi, suna, alama, girman shago", "Ƙwarewa, lokaci, kuɗin farawa da buƙatar yankinku", "Abin da abokai suke so, yanayi, waƙa, kwalliya", "Yawan kuɗin da zai iya kawowa kawai"], answer: 1, why: "Ƙwarewa, lokaci, kuɗi da buƙata suna nuna ko ra'ayi ya dace da ku da kasuwarku." },
            { objective: "O1", q: "Wani ra'ayi yana da maki mai yawa a ƙwarewa, amma akwai masu sayarwa goma a titinku. Wane maki ne ƙasa?", options: ["Ƙwarewa", "Lokaci", "Buƙatar yankinku", "Kuɗin farawa"], answer: 2, why: "Masu sayarwa da yawa a kusa suna nufin babu isasshen wuri ga ƙarin ɗaya, don haka buƙata ta yi ƙasa." }
          ]
        },
        {
          title: "Gwada ra'ayinku da ainihin masu saye",
          objectives: ["O2"],
          minutes: 5,
          goal: "Ku gwada ra'ayi da ɗan ƙaramin kaya da aƙalla ainihin masu saye goma kafin ku kashe kuɗi mai yawa.",
          text: [
            "Sana'o'i da yawa suna faɗuwa saboda mai sana'ar ta kashe dukan ajiyarta kafin ta san ko mutane za su saya. Ku fara da ƙaramin gwaji: ku yi ko ku sayi ɗan ƙaramin kaya, ku ba ainihin masu saye, ku ga abin da zai faru.",
            "Ku yi ɗan ƙaramin kaya, misali kofi 20 na zobo, riguna 5 ko gyaran gashi sau 10. Ku ba aƙalla mutum goma da ba danginku na kusa ba. Ku rubuta: mutum nawa suka saya, farashin da suka biya, abin da suka so, da abin da suka nema. Abin da mutane suke yi ya fi muhimmanci fiye da kalaman ladabi: \"Zan saya mako mai zuwa\" ba sayayya ba ne.",
            "Misali: Esther a Kisumu ta gwada sabulun ruwa. Ta yi kwalba 15, ta sayar da 12 a KES 150 (farashin misali), kuma masu saye uku sun nemi babbar kwalba. Canjinta: ƙara babban girma. Mace a Alexandria da ke gwada tsamiyar gida (pickles) za ta iya yin haka da maƙwabta da ƙaramin shago.",
            "Bayan gwajin, ku yanke shawara: ku ci gaba, ku canja wani abu, ko ku gwada ra'ayinku na gaba. Gwajin da bai yi nasara ba yana cin kuɗi kaɗan kuma yana ceton ku kuɗi mai yawa."
          ],
          steps: ["Ku yi ko ku sayi ɗan ƙaramin kaya.", "Ku ba aƙalla mutum goma da ba danginku na kusa ba.", "Ku rubuta mutum nawa suka saya, farashin, abin da suka so da abin da suka nema.", "Ku yanke shawara: ku ci gaba, ku canja abu ɗaya, ko ku gwada ra'ayi na gaba."],
          words: [["Ɗan ƙaramin kaya (small batch)", "ƙaramin adadi da aka yi ko aka saya don gwaji kafin a yi mai yawa."], ["Gwaji", "gwada ra'ayi a ƙaramin mataki don koyo kafin a kashe kuɗi mai yawa."]],
          slides: [
            { title: "Ku gwada kafin ku kashe kuɗi mai yawa", bullets: ["Kada ku fara kashe dukan ajiyarku", "Ku yi ɗan ƙaramin kaya", "Ku ba ainihin masu saye"] },
            { title: "Ku rubuta", bullets: ["Mutum nawa suka saya", "Farashin da suka biya", "Abin da suka so da abin da suka nema"] },
            { title: "Ayyuka sun fi kalaman ladabi", bullets: ["\"Zan saya mako mai zuwa\" ba sayayya ba ne", "Ku ƙirga ainihin sayayya", "Ku tambayi mutanen da ba danginku na kusa ba"] },
            { title: "Bayan gwajin", bullets: ["Ku ci gaba", "Ku canja abu ɗaya", "Ko ku gwada ra'ayi na gaba"] }
          ],
          tryIt: "Ku tsara gwaji don ra'ayin da kuka zaɓa: wane ɗan ƙaramin kaya za ku yi, farashin da za ku gwada, da mutum goma da za ku ba a wannan makon. Bayan gwajin, ku rubuta mutum nawa suka saya da canji ɗaya da za ku yi.",
          youCanNow: "gwada ra'ayin sana'a da ɗan kuɗi tare da ainihin masu saye, da yanke shawarar abin da za ku yi a gaba.",
          quickCheck: [
            { objective: "O2", q: "Mene ne babbar shaida cewa masu saye suna son kayanku?", options: ["Mahaifiyarku ta ce yana da kyau", "Abokai sun ce za su saya wata mai zuwa", "Ku kuna son sa sosai", "Mutanen da ba dangi ba suna biyan kuɗi su saya"], answer: 3, why: "Ainihin sayayya daga ainihin masu saye tana nuna gaskiyar buƙata." },
            { objective: "O2", q: "Gwajinku ya sayar da 3 cikin kaya 20. Mene ne mataki mai kyau na gaba?", options: ["Ku tambayi masu saye abin da za a canja, ku canja abu ɗaya, ku sake gwadawa", "Ku kashe dukan ajiyarku a kan ƙarin kaya", "Ku daina sana'a har abada", "Ku ninka farashin"], answer: 0, why: "Gwaji mai rauni darasi ne mai arha: ku koya, ku canja abu ɗaya, ku sake gwadawa." }
          ]
        },
        {
          title: "Sa farashi mai riba da biyan kanku",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ku ƙididdige kuɗin samar da kowane kaya, ku sa farashi mai riba, ku ƙayyade adadin da za ku biya kanku.",
          text: [
            "Mata da yawa suna sa farashi ƙasa da yadda ya kamata, musamman idan suna sayarwa ga maƙwabta, kuma suna aiki tuƙuru ba tare da ainihin riba ba. Ku ƙirga kowane kuɗi: kayan haɗi ko kayan aiki, abin naɗewa (leda, kwalba), sufuri, gawayi ko gas, data na waya, kuɗin rumfa, da lokacinku.",
            "Kuɗin kowane kaya = jimillar kuɗin kayan da aka yi a lokaci ɗaya, a raba da yawan kayan. Sannan ku ƙara riba. Misali daga Kumasi: Abena ta yi meat pie 40. Fulawa, nama, mai da gas sun ci GHS 160, leda GHS 10 da sufuri GHS 10: jimilla GHS 180, wato GHS 4.50 kowane pie. Tana sayarwa a GHS 7 (adadin misali), don haka kowane pie yana kawo ribar GHS 2.50. Ku tabbatar masu saye za su biya farashinku ta hanyar duba masu sayar da irin kayan.",
            "Ku biya kanku. Ku ƙayyade adadin da za ku ɗauka daga sana'ar kowane mako, ku bar sauran a cikin sana'ar don kaya da bunƙasa. Idan kun ɗauki komai, sana'ar ba za ta bunƙasa ba; idan ba ku ɗauki komai ba, kuna aiki kyauta. Ku rubuta abin da kuka ɗauka a cikin bayanan ku (records).",
            "Idan farashinku bai rufe kuɗin samarwa ba, ku canja wani abu: ƙaramin girma, mai sayar muku da kaya mafi kyau, saye da yawa tare da wasu, ko farashi mafi tsada don inganci mafi kyau."
          ],
          steps: ["Ku jera kowane kuɗin kayan da aka yi a lokaci ɗaya, har da sufuri, gas, data da kuɗaɗe.", "Ku raba jimillar da yawan kayan don samun kuɗin kowane kaya.", "Ku ƙara riba don sa farashi; ku kwatanta da masu sayar da irin kayan.", "Ku ƙayyade adadin da za ku biya kanku kowane mako; ku bar sauran a cikin sana'ar."],
          words: [["Kuɗin kowane kaya", "jimillar kuɗin kayan da aka yi a lokaci ɗaya, a raba da yawan kayan da aka yi."], ["Riba", "kuɗin da ya rage bayan an biya dukkan kuɗaɗe."], ["Biyan kanku", "adadi ƙayyadadde da mai sana'a ke ɗauka daga sana'ar, don sauran su zauna don kaya da bunƙasa."]],
          slides: [
            { title: "Ku ƙirga kowane kuɗi", bullets: ["Kayan aiki da abin naɗewa", "Sufuri, gas, data, kuɗin rumfa", "Lokacinku"] },
            { title: "Kuɗin kowane kaya", bullets: ["Jimillar kuɗi / yawan kayan", "Abena: GHS 180 / pie 40 = GHS 4.50", "Tana sayarwa a GHS 7 = ribar GHS 2.50 (misali)"] },
            { title: "Ku biya kanku adadi ƙayyadadde", bullets: ["Ku ɗauki adadi ɗaya kowane mako", "Ku bar sauran don kaya da bunƙasa", "Ku rubuta shi a bayananku"] },
            { title: "Farashi ya yi ƙasa?", bullets: ["Ƙaramin girma ko mai sayar da kaya mafi kyau", "Ku saya da yawa tare da wasu", "Farashi mafi tsada don inganci mafi kyau"] }
          ],
          tryIt: "Ku zaɓi kaya ɗaya. Ku jera kowane kuɗin kayan da aka yi a lokaci ɗaya, ku lissafa kuɗin kowane kaya, ku sa farashi mai riba, ku yanke shawarar nawa za ku biya kanku kowane mako.",
          youCanNow: "sa farashin kaya ta yadda zai kawo riba, da biyan kanku adadi ƙayyadadde.",
          quickCheck: [
            { objective: "O3", q: "Jakunkuna 20 sun ci 10,000 NGN gaba ɗaya. Nawa ne kuɗin kowace jaka?", options: ["200 NGN", "20 NGN", "500 NGN", "10,000 NGN"], answer: 2, why: "10,000 a raba da 20 shi ne 500 NGN kowace jaka." },
            { objective: "O3", q: "Me yasa za ku biya kanku adadi ƙayyadadde maimakon ɗaukar dukan kuɗin?", options: ["Don kada ku taɓa samun komai", "Don kuɗi ya zauna a cikin sana'ar don kaya da bunƙasa", "Don masu saye su ƙara biya", "Kowane banki yana buƙatar haka"], answer: 1, why: "Adadi ƙayyadadde yana biyan ku kuma yana barin kuɗin ci gaba da bunƙasa sana'ar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Farawa da kyau",
        questions: [
          { objective: "O1", q: "Ra'ayi A yana da maki 11, ra'ayi B kuma 7, amma ba ku son ra'ayi A ko kaɗan. Me za ku yi?", options: ["Koyaushe ku zaɓi mafi yawan maki", "Kada ku zaɓi ko ɗaya, ku daina", "Ku sake ba da maki har B ya ci", "Ku yi amfani da makin don tunani, ku kuma tambayi ko za ku ji daɗin aikin"], answer: 3, why: "Maki suna taimaka muku tunani; jin daɗin aikin ma yana da muhimmanci." },
          { objective: "O2", q: "Ga wa ya kamata ku ba kayan gwajinku?", options: ["Aƙalla mutum goma da ba danginku na kusa ba", "Mijinku kawai", "Babbar ƙawarku kawai", "Babu kowa; ku yi hasashe kawai"], answer: 0, why: "Ainihin masu saye suna ba da amsar gaskiya ta abin da suke saya." },
          { objective: "O2", q: "Me yasa za ku gwada da ɗan ƙaramin kaya?", options: ["Don ku kashe ƙarin kuɗi", "Don ku koya kafin ku kashe kuɗi mai yawa", "Saboda kaya masu yawa haramun ne", "Don ku guje wa masu saye"], answer: 1, why: "Ƙaramin gwaji yana cin kuɗi kaɗan kuma yana nuna ko mutane za su saya." },
          { objective: "O3", q: "Wane kuɗi ne masu sayarwa da yawa suke mantawa?", options: ["Babban kayan haɗi", "Kayan da kansa", "Sufuri, gas, data da lokacinsu", "Farashin sayarwa"], answer: 2, why: "Ƙananan kuɗaɗe kamar sufuri da gas suna taruwa su cinye ribar." },
          { objective: "O3", q: "Kuɗin kowane kaya GHS 4.50 ne, farashi kuma GHS 7. Nawa ne ribar kowane kaya?", options: ["GHS 11.50", "GHS 7", "GHS 4.50", "GHS 2.50"], answer: 3, why: "7 a cire 4.50 shi ne 2.50." }
        ]
      }
    },
    {
      name: "Babi na 2: Bunƙasa da ƙarfi",
      lessons: [
        {
          title: "Samun lokaci: iyali, kulawa da taimako",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ku tsara shirin lokaci na mako da lokutan sana'a, ayyukan kulawa da wanda ke taimakawa.",
          text: [
            "A wurare da yawa mata ne ke yin yawancin aikin kulawa marar albashi a gida: dafa abinci, share-share, ɗebo ruwa, da kula da yara, marasa lafiya da tsofaffi. UN Women ta lura cewa wannan yana bar wa mata ƙarancin lokaci don aikin da ake biya. Sana'a ma tana buƙatar lokaci, don haka ku tsara shi.",
            "Ku zana mako: kwanaki bakwai da safe, rana da yamma. Ku yi alamar ayyukan kulawa, sannan lokutan sana'arku: sayen kaya, yin kaya, sayarwa, amsa saƙonni da rubuta bayanai. Ku nemi inda abubuwa suke cin karo da juna da inda akwai gibi.",
            "Sannan ku nemi taimako. Ku yi magana da mijinku ko abokin zamanku, manyan yara, 'yar'uwa ko maƙwabciya game da raba ayyuka kamar ɗebo ruwa, kai yara makaranta ko dafa abinci a ranakun kasuwa masu yawan aiki. Wasu mata suna musayar kula da yara da wasu iyaye mata, ko su yi aiki kusa da gida a wasu ranaku. Misali: Mariam a Yaoundé tana sayarwa a kasuwa ranar Talata, Juma'a da Asabar; 'yar'uwarta tana kula da yaran a safiyar waɗannan ranaku, Mariam kuma tana yi mata kitso a madadin haka.",
            "Ku nuna wa iyalinku shirin ku amince da shi tare. Ku kuma kula da kanku: hutu da lafiya suna sa sana'a ta ci gaba."
          ],
          steps: ["Ku zana kwanaki bakwai da safe, rana da yamma.", "Ku yi alamar ayyukan kulawa da na gida.", "Ku yi alamar lokutan sana'a: saye, yin kaya, sayarwa, saƙonni, bayanai.", "Ku nemi inda suke cin karo, ku roƙi wani a iyali ko mai taimako ya raba ayyuka.", "Ku amince da shirin tare, ku saka hutu a ciki."],
          words: [["Aikin kulawa marar albashi", "aikin gida da ba a biya, kamar dafa abinci, share-share da kula da yara, marasa lafiya da tsofaffi."], ["Musayar kula da yara", "iyaye mata suna bi-da-bi wajen kula da yaran juna."]],
          slides: [
            { title: "Lokacinku ɓangare ne na sana'ar", bullets: ["Mata ne ke yin yawancin aikin kulawa marar albashi", "Sana'a ma tana buƙatar lokaci", "Don haka ku tsara shi"] },
            { title: "Ku zana makonku", bullets: ["Kwanaki bakwai: safe, rana, yamma", "Ku yi alamar ayyukan kulawa", "Ku yi alamar lokutan sana'a", "Ku nemi inda suke cin karo"] },
            { title: "Ku nemi taimako", bullets: ["Miji, manyan yara, 'yar'uwa, maƙwabciya", "Ku raba ɗebo ruwa, kai yara makaranta, dafa abinci", "Ku yi musayar kula da yara da wasu iyaye mata"] },
            { title: "Ku amince da shi tare", bullets: ["Ku nuna wa iyalinku shirin", "Ku saka hutu da lafiya"] }
          ],
          tryIt: "Ku zana shirin lokacinku na mako da ayyukan kulawa da lokutan sana'a. Ku yi alamar wuri ɗaya da suke cin karo, ku rubuta wanda zai iya taimakawa, sannan ku yi magana da wannan mutumin a wannan makon.",
          youCanNow: "tsara makonku ta yadda sana'arku da ayyukan kulawa za su dace, da taimakon da kuke buƙata.",
          quickCheck: [
            { objective: "O4", q: "Ranar kasuwarku tana cin karo da kai yara makaranta. Mene ne mataki mai kyau?", options: ["Ku roƙi wani a iyali ko wata uwa ta raba kai yaran makaranta", "Ku rufe sana'ar", "Ku daina zuwa kasuwa har abada", "Ku bar yaran su kaɗai"], answer: 0, why: "Raba ayyuka yana ba da lokaci ga sana'a ba tare da cutar da iyali ba." },
            { objective: "O4", q: "Me yasa za ku nuna wa iyalinku shirin lokacinku?", options: ["Don neman izinin rayuwa", "Don su amince su kuma taimaka", "Don su ɗauki kuɗinku", "Ba shi da muhimmanci"], answer: 1, why: "Idan iyali sun amince da shirin, sun fi yiwuwa su taimaka." }
          ],
          sources: [UNWOMEN]
        },
        {
          title: "Neman kuɗi da tallafi lafiya",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ku tabbatar cewa bashi, tallafi ko shiri na gaskiya ne, ku kuma riƙe iko a kan kuɗinku.",
          text: [
            "Akwai shirye-shirye don mata da ƙananan sana'o'i. Misalai: Women Enterprise Fund na Kenya, asusun gwamnati don sana'o'in mata; SMEDAN na Najeriya, wanda rajistarsa kyauta take buɗe shirye-shirye kamar Women In Self-employment Programme; DER/FJ na Senegal, wanda ke ba da horo, rajistar kasuwanci da tallafin kuɗi ga mata da matasa; Ghana Enterprises Agency; da shirin AFAWA na Bankin Raya Afirka (African Development Bank), wanda ke aiki tare da bankuna da masu ba da bashi don taimaka musu su ba mata bashi. Ƙungiyoyin tanadi da ƙananan lamuni suna da nasu kwas.",
            "Sunaye, ƙa'idoji da lokutan buɗewa suna canjawa, don haka koyaushe ku duba a shafin intanet na hukuma na shirin ko ofishinsa. 'Yan damfara suna yin kamar suna ba da tallafi da bashi ga mata, sannan su fara neman \"kuɗin sarrafawa\" ko \"kuɗin rajista\". Shiri na gaskiya yana faɗin kuɗaɗensa a shafinsa na hukuma; kada ku taɓa biyan baƙo don samun tallafi.",
            "Ku riƙe iko a kan kuɗinku. Ku sami layin kuɗin waya (mobile money) ko asusun banki da sunanku, ku kuma ɓoye PIN ɗinku daga kowa, har da iyali. Kamfani na gaskiya ba ya taɓa neman PIN ɗinku. Idan wani yana ƙwace ribarku da ƙarfi ko barazana, wannan cin zarafi ne; ku yi magana da wanda kuka amince da shi, ƙungiyar mata ko hidimar tallafi ta yankinku.",
            "Kafin ku karɓi bashi, ku san jimillar da za ku biya, yaushe, da abin da zai faru idan kun makara. Ku karɓi bashi don abin da zai kawo kuɗi, ba don biyan bukatun gida na yau da kullum ba."
          ],
          steps: ["Ku nemo shafin intanet na hukuma na shirin ko ofishinsa.", "Ku duba abin da yake bayarwa, wa zai iya nema, da lokutan buɗewa da kuɗaɗensa.", "Ku ƙi duk wanda ke neman a biya kuɗi zuwa asusun baƙi.", "Ku riƙe layin kuɗin waya ko asusu da sunanku da PIN na sirri.", "Kafin karɓar bashi, ku rubuta jimillar da za ku biya, yaushe, da ƙa'idojin makara."],
          words: [["Tallafi (grant)", "kuɗin da aka bayar don wani dalili kuma ba a mayar da shi."], ["Bashi (loan)", "kuɗin da aka aro wanda dole a mayar da shi, yawanci da ƙarin kuɗi (ruwa ko interest)."], ["Zambar kuɗin gaba (advance-fee scam)", "dabara inda wani ya yi alkawarin kuɗi amma ya nemi ku fara biyan kuɗi."]],
          slides: [
            { title: "Tallafi ga sana'o'in mata", bullets: ["Kenya: Women Enterprise Fund", "Najeriya: shirye-shiryen SMEDAN", "Senegal: DER/FJ; Ghana: Ghana Enterprises Agency", "AFAWA na AfDB: yana aiki ta bankuna da masu ba da bashi"] },
            { title: "Ku tabbatar na gaskiya ne", bullets: ["Shafin hukuma ko ofishi kawai", "Wa zai iya nema, lokuta da kuɗaɗe", "Kada ku taɓa biyan baƙo don samun tallafi"] },
            { title: "Ku riƙe iko a kan kuɗinku", bullets: ["Asusu ko layin kuɗin waya da sunanku", "PIN sirri ne daga kowa, har da iyali", "Kamfani na gaskiya ba ya taɓa neman PIN ɗinku"] },
            { title: "Kafin ku karɓi bashi", bullets: ["Jimillar da za ku biya da yaushe", "Abin da zai faru idan kun makara", "Ku karɓi bashi don samun kuɗi, ba don bukatun yau ba"] }
          ],
          tryIt: "Ku zaɓi shiri ɗaya daga wannan darasi ko wanda kuka sani. Ku nemo shafin intanet na hukuma ko ofishinsa, ku rubuta abin da yake bayarwa, wa zai iya nema, ko yana buɗe yanzu, da ranar da kuka duba.",
          youCanNow: "nemo tallafi ga sana'arku, tabbatar da cewa na gaskiya ne, da riƙe iko a kan kuɗinku.",
          quickCheck: [
            { objective: "O5", q: "Wani saƙo ya ce kun ci tallafin sana'ar mata; ku fara biyan 5,000 KES na \"kuɗin sarrafawa\". Mene ne wannan?", options: ["Mataki na yau da kullum na shiri", "Zamba ce; ku duba shafin hukuma kuma kada ku biya baƙo", "Bashi ne da dole ku karɓa", "Haraji ne"], answer: 1, why: "Neman kuɗi kafin a ba da tallafi sanannen zambar kuɗin gaba ne." },
            { objective: "O5", q: "Wa ya kamata ya san PIN ɗin kuɗin wayarku?", options: ["Mijinku", "Babban mai sayen kayanku", "Wakilin da ke kiranku", "Ku kaɗai"], answer: 3, why: "PIN ɗinku yana kare kuɗinku; kamfani na gaskiya ba ya taɓa neman sa." }
          ],
          sources: [WEF, SMEDAN, DERFJ, GEA, AFAWA]
        },
        {
          title: "Abokan hulɗa, malamai da shirin bunƙasa na wata shida",
          objectives: ["O6"],
          minutes: 5,
          goal: "Ku rubuta manufofi uku masu auna na wata shida, ku ambaci malami ɗaya ko ƙungiya da za ku tuntuɓa.",
          text: [
            "Mata da yawa suna bunƙasa da sauri tare da wasu: malami (mentor) da ya riga ya yi, ƙungiyar mata 'yan kasuwa, ƙungiyar 'yan kasuwa ko ta sana'a, ƙungiyar haɗin gwiwa (cooperative), ƙungiyar 'yan kasuwa ta gari (chamber of commerce) ko cibiyar tallafin kasuwanci. Suna raba masu saye, masu sayar da kaya, shawara da ƙarfin gwiwa.",
            "Malami (mentor) mutum ne mai ƙwarewa fiye da ku da ke ba ku shawara. Ku roƙi wata mace da kuke girmamawa ta ba ku shawara na minti 20, da tambayoyi biyu masu sarari. Ku shiga ƙungiya ɗaya inda masu sayen kayanku ko masu sayar muku da kaya suke haɗuwa. Ku halarci baje kolin kasuwanci (trade fair) ko ranar kasuwa a babban gari idan kun sami dama.",
            "Sannan ku rubuta manufofi uku na wata shida masu zuwa. Ku sa kowace ta zama mai auna, da adadi da kwanan wata: \"Sayar da kwalbar sabulu 60 a mako kafin ƙarshen Maris\", \"Tara GHS 500 don injin ɗinki na biyu kafin Yuni\" (adadin misali), \"Samun sababbin shaguna 5 masu saye kafin Mayu\". Ku duba manufofinku sau ɗaya a wata ku rubuta abin da kuka yi.",
            "Misali: Ngozi a Enugu, mai sayar da jakunkunan Ankara, ta shiga ƙungiyar mata 'yan kasuwa, ta sami malama da ke fitar da jakunkuna ƙasashen waje, kuma ta sa manufofi kan sayarwa, tanadi da rumfarta ta farko a baje kolin kasuwanci."
          ],
          steps: ["Ku jera mutane da ƙungiyoyin da za su iya taimakawa: malamai, ƙungiyoyi, ƙungiyoyin haɗin gwiwa, cibiyoyin tallafi.", "Ku zaɓi ɗaya da za ku tuntuɓa a wannan watan, da tambayoyi biyu masu sarari.", "Ku rubuta manufofi uku, kowace da adadi da kwanan wata.", "Ku duba manufofinku sau ɗaya a wata ku rubuta abin da kuka yi."],
          words: [["Malami (mentor)", "mutum mai ƙwarewa da ke ba ku shawara da goyon baya."], ["Manufa mai auna", "manufa mai adadi da kwanan wata, don ku ga ko kun cimma ta."], ["Ƙungiya (association)", "taron mutane masu sana'a ko yanayi iri ɗaya da ke taimakon juna."]],
          slides: [
            { title: "Ku bunƙasa tare da wasu", bullets: ["Malamai da ƙungiyoyin mata", "Ƙungiyoyin sana'a, haɗin gwiwa, chamber of commerce", "Cibiyoyin tallafin kasuwanci"] },
            { title: "Ku nemo malami (mentor)", bullets: ["Wata mace da kuke girmamawa", "Ku roƙi minti 20", "Ku zo da tambayoyi biyu masu sarari"] },
            { title: "Manufofi uku masu auna", bullets: ["Kowace da adadi da kwanan wata", "Sayarwa, tanadi, sababbin masu saye", "Ku duba su sau ɗaya a wata"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta shirin sana'arku mai shafi ɗaya da ra'ayinku mai maki, sakamakon gwaji, farashi da riba, abin da kuke biyan kanku, shirin lokacinku na mako, zaɓin tallafi ɗaya da kuka tabbatar, manufofi uku na wata shida da malami ɗaya ko ƙungiya da za ku tuntuɓa.",
          youCanNow: "gina abokan hulɗa da rubuta shirin bunƙasa na wata shida mai manufofi masu auna.",
          quickCheck: [
            { objective: "O6", q: "Wace manufa ce mai auna?", options: ["\"Yin abin da ya fi kyau\"", "\"Yin suna\"", "\"Sayar da riguna 40 a wata kafin ƙarshen Yuni\"", "\"Yin aiki tuƙuru\""], answer: 2, why: "Tana da adadi da kwanan wata, don haka za ku iya duba ko kun cimma ta." },
            { objective: "O6", q: "Ta yaya za ku nemi taimakon wadda za ta iya zama malamarku?", options: ["Ku roƙi minti 20 da tambayoyi biyu masu sarari", "Ku roƙe ta ta ba ku kuɗi", "Ku roƙe ta ta gudanar da sana'arku", "Kada ku taɓa tambaya; ku jira ta"], answer: 0, why: "Gajeriyar buƙata mai sarari tana girmama lokacinta kuma tana kawo shawara mai amfani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Bunƙasa da ƙarfi",
        questions: [
          { objective: "O4", q: "Mene ne aikin kulawa marar albashi?", options: ["Aiki a banki", "Aikin gida da ba a biya, kamar dafa abinci da kula da yara", "Sayarwa a kasuwa", "Aikin gwamnati"], answer: 1, why: "Aikin kulawa marar albashi aikin gida ne da kulawa da ke cin lokaci amma ba a biya." },
          { objective: "O4", q: "Shirin lokaci na mako ya kamata ya nuna:", options: ["Lokutan sana'a kawai", "Hutu kawai", "Lokutan sana'a, ayyukan kulawa da wanda ke taimakawa", "Lokutan makarantar yaranku kawai"], answer: 2, why: "Ganin duka tare yana nuna inda suke cin karo da inda ake buƙatar taimako." },
          { objective: "O5", q: "A ina za ku tabbatar ko shirin bashi na mata na gaskiya ne?", options: ["Shafin intanet na hukuma ko ofishinsa", "Saƙon da aka tura muku", "Baƙo a waya", "Sharhi a kafofin sada zumunta"], answer: 0, why: "Majiyar hukuma ce kaɗai ke nuna ainihin shirin, lokutansa da kuɗaɗensa." },
          { objective: "O5", q: "Kafin ku karɓi bashi, me dole ku sani?", options: ["Sunan mai ba da bashin kawai", "Saurin samun sa kawai", "Babu komai; ku sa hannu kawai", "Jimillar da za ku biya, yaushe, da abin da zai faru idan kun makara"], answer: 3, why: "Sanin cikakken kuɗin da ƙa'idojin makara yana kare ku daga bashin da ba za ku iya biya ba." },
          { objective: "O6", q: "Sau nawa ya kamata ku duba manufofinku na wata shida?", options: ["Ba sau ɗaya ba", "Sau ɗaya a wata", "A ƙarshen wata shida kawai", "Kowace shekara goma"], answer: 1, why: "Duba kowane wata yana nuna ci gaba da wuri, don ku iya canja hanya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Mata 'Yan Kasuwa: Fara Sana'a da Bunƙasa Ta",
    questions: [
      { objective: "O1", q: "Sana'a mai kyau a gare ku ita ce wadda:", options: ["Ta dace da ƙwarewarku, lokacinku, kuɗinku da buƙatar yankinku", "Maƙwabciyarku ta riga ta yi nasara a ciki", "Ke buƙatar kuɗi mafi yawa", "Ta fi shahara"], answer: 0, why: "Sana'ar da ta dace da ku da kasuwarku ta fi yiwuwa ta dore." },
      { objective: "O1", q: "Kuɗin farawa yana nufin:", options: ["Ribarku ta mako", "Kuɗin da kuke buƙata don farawa", "Farashin da masu saye ke biya", "Bashin da dole ku karɓa"], answer: 1, why: "Kuɗi ne na kayan aiki, kayan sayarwa na farko, rumfa ko lasisi." },
      { objective: "O1", q: "Me yasa za ku ba kowane ra'ayi maki kan abubuwa huɗu iri ɗaya?", options: ["Don ya yi tsawo", "Don kowane ra'ayi ya ci", "Don ku iya kwatanta ra'ayoyin cikin adalci", "Saboda banki yana buƙatar haka"], answer: 2, why: "Ma'auni iri ɗaya ga kowane ra'ayi yana sa kwatancen ya zama na adalci." },
      { objective: "O2", q: "\"Zan saya mako mai zuwa\" daga ƙawa shi ne:", options: ["Sayayya", "Kwangila", "Bashi", "Ba sayayya ba tukuna; ku ƙirga ainihin sayayya"], answer: 3, why: "Ainihin sayayya ce kaɗai ke tabbatar da buƙata." },
      { objective: "O2", q: "A lokacin gwaji, kuna rubuta:", options: ["Mutum nawa suka saya, farashin, da abin da suka so da abin da suka nema", "Kuɗin samarwa kawai", "Babu komai", "Sunayen abokanku kawai"], answer: 0, why: "Waɗannan bayanai suna nuna buƙata da abin da za a inganta." },
      { objective: "O2", q: "Bayan gwaji kuna iya:", options: ["Daina kawai", "Ci gaba, canja abu ɗaya, ko gwada ra'ayi na gaba", "Kashe dukan ajiyarku kawai", "Ninka farashi kawai"], answer: 1, why: "Gwaji yana taimaka muku zaɓar mataki na gaba cikin hikima." },
      { objective: "O3", q: "Kuɗin kowane kaya shi ne:", options: ["Farashin da kuke fata", "Farashin maƙwabciyarku", "Jimillar kuɗin kayan da aka yi a lokaci ɗaya, a raba da yawan kayan", "Ribarku"], answer: 2, why: "Raba jimillar kuɗi da yawan kayan yana ba da kuɗin kowanne." },
      { objective: "O3", q: "Kaya da aka yi a lokaci ɗaya sun ci 30,000 XAF kuma sun ba da kaya 60. Kuɗin kowane kaya shi ne:", options: ["600 XAF", "60 XAF", "1,800 XAF", "500 XAF"], answer: 3, why: "30,000 a raba da 60 shi ne 500 XAF." },
      { objective: "O3", q: "Idan farashinku bai rufe kuɗin samarwa ba, kuna iya:", options: ["Canja girma, mai sayar da kaya, saye da yawa tare da wasu ko ƙara farashi don inganci", "Ci gaba da sayarwa da asara har abada", "Daina rubuta kuɗaɗe", "Karɓar bashi don rufe shi kowane mako"], answer: 0, why: "Canja kuɗaɗe ko farashi ita ce hanyar komawa ga riba." },
      { objective: "O3", q: "Biyan kanku adadi ƙayyadadde kowane mako yana nufin:", options: ["Ɗaukar dukan kuɗin", "Ba za ku taɓa ɗaukar komai ba", "Ɗaukar adadi ɗaya da barin sauran don sana'ar", "Biyan masu sayen kayanku"], answer: 2, why: "Adadi ƙayyadadde yana biyan ku kuma yana barin sana'ar da kuɗi." },
      { objective: "O4", q: "UN Women ta lura cewa aikin kulawa marar albashi:", options: ["Kowa yana yin sa daidai wa daida", "Yana bar wa mata da yawa ƙarancin lokaci don aikin da ake biya", "Babu shi", "Gwamnati ce ke biyan sa"], answer: 1, why: "Mata ne ke yin yawancin aikin kulawa marar albashi, wanda ke rage lokacinsu na sana'a." },
      { objective: "O4", q: "Musayar kula da yara ita ce:", options: ["Iyaye mata suna bi-da-bi wajen kula da yaran juna", "Sayar da kayan yara", "Kuɗin makaranta", "Asusun banki"], answer: 0, why: "Bi-da-bi yana ba kowace uwa lokaci don aikinta." },
      { objective: "O4", q: "Shirin lokacinku ya kamata kuma ya haɗa da:", options: ["Babu hutu ko kaɗan", "Aiki kawai", "Shirye-shiryen maƙwabtanku", "Hutu da lafiya"], answer: 3, why: "Hutu yana sa ku da sana'ar ku ci gaba." },
      { objective: "O5", q: "Tallafi (grant) shi ne:", options: ["Bashi mai ruwa mai yawa", "Kuɗin da aka bayar don wani dalili kuma ba ku mayar da shi", "Kuɗin da kuke fara biya", "Haraji"], answer: 1, why: "Ba a mayar da tallafi; bashi kuwa ana mayarwa." },
      { objective: "O5", q: "Wani yana neman kuɗi kafin ya ba ku tallafin mata. Wannan mafi yiwuwa:", options: ["Mataki ne na yau da kullum", "Ƙa'idar banki ce", "Zambar kuɗin gaba ce", "Harajin gwamnati ne"], answer: 2, why: "Shirye-shirye na gaskiya suna wallafa kuɗaɗensu a shafinsu na hukuma; baƙin da ke neman kuɗi 'yan damfara ne." },
      { objective: "O5", q: "Wa ya kamata ya riƙe PIN ɗin kuɗin wayarku?", options: ["Ku kaɗai", "Abokin zamanku", "Wanda ke kira daga kamfanin", "Babban ɗanku"], answer: 0, why: "PIN ɗinku yana kare kuɗinku; ku ɓoye shi daga kowa." },
      { objective: "O5", q: "AFAWA, daga Bankin Raya Afirka, galibi:", options: ["Yana ba kowace mace bashi ta WhatsApp", "Yana karɓar kuɗi daga mata ta waya", "Yana maye gurbin dukkan ƙungiyoyin tanadi", "Yana aiki tare da bankuna da masu ba da bashi don su ƙara ba mata bashi"], answer: 3, why: "AFAWA yana aiki ta cibiyoyin kuɗi don ƙara ba mata bashi." },
      { objective: "O6", q: "Malami (mentor) shi ne:", options: ["Mai saye da ke bin ku bashi", "Mutum mai ƙwarewa da ke ba da shawara", "Jami'in haraji", "Bashi"], answer: 1, why: "Malami yana raba ƙwarewarsa don taimaka muku bunƙasa." },
      { objective: "O6", q: "Wace manufa ce ke da adadi da kwanan wata?", options: ["\"Ƙara girma\"", "\"Zama mafi kyau\"", "\"Tara NGN 50,000 don firiza kafin Yuli\"", "\"Ƙara ƙoƙari\""], answer: 2, why: "Adadi da kwanan wata suna sa manufa ta zama mai auna." },
      { objective: "O6", q: "Shiga ƙungiyar mata ko ta 'yan kasuwa zai iya taimaka muku:", options: ["Samun masu saye, masu sayar da kaya, shawara da goyon baya", "Guje wa dukkan masu saye", "Barin rubuta bayananku", "Rashin buƙatar shiri"], answer: 0, why: "Ƙungiyoyi suna raba abokan hulɗa, ilimi da ƙarfafa gwiwa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 7, 10, 14, 15, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "An zaɓi ra'ayi", objective: "O1", notYet: "Ra'ayi ɗaya ba tare da maki ba, ko maki ba tare da dalilai ba.", meets: "An ba ra'ayoyi biyu ko uku maki kan ƙwarewa, lokaci, kuɗi da buƙata, da dalilin da yasa wanda ya ci ya dace.", exceeds: "An kuma rubuta yadda ra'ayin zai iya bunƙasa daga baya." },
      { name: "An gwada ra'ayi", objective: "O2", notYet: "Babu gwaji, ko dangi kaɗai aka tambaya.", meets: "An ba aƙalla ainihin masu saye goma ɗan ƙaramin kaya, kuma an rubuta sayayya, farashi da canji ɗaya.", exceeds: "An yi canjin kuma an sake gwadawa a karo na biyu." },
      { name: "Farashi, riba da biyan kai", objective: "O3", notYet: "Wasu kuɗaɗe ba su nan, lissafi ba daidai ba ne, ko babu adadin biyan kai.", meets: "An jera kowane kuɗi, kuɗin kowane kaya daidai ne, farashi mai riba, da adadi ƙayyadadde na biyan kai kowane mako.", exceeds: "An kwatanta farashi da masu sayar da irin kayan, tare da shiri idan kuɗaɗe suka tashi." },
      { name: "Shirin lokaci da taimako", objective: "O4", notYet: "Babu shirin lokaci, ko ba a ambaci wanda zai taimaka ba.", meets: "Shirin mako da lokutan sana'a, ayyukan kulawa da wanda ke taimakawa, an amince da shi da aƙalla mutum ɗaya.", exceeds: "Ya haɗa da hutu da mai taimako na ajiya." },
      { name: "An tabbatar da kuɗi da tallafi lafiya", objective: "O5", notYet: "Zaɓi daga saƙon da aka tura ko daga baƙo, ko an bayyana PIN.", meets: "An tabbatar da zaɓi ɗaya a shafinsa na hukuma, da wa zai iya nema da ranar da aka duba; kuɗi yana da sunan mai koyo.", exceeds: "An kuma rubuta jimillar da za a biya, yaushe, da ƙa'idojin makara ga kowane bashi." },
      { name: "Manufofi da abokan hulɗa", objective: "O6", notYet: "Manufofi marasa sarari, ko ba a ambaci malami ko ƙungiya ba.", meets: "Manufofi uku da adadi da kwanan wata, da malami ɗaya ko ƙungiya da za a tuntuɓa.", exceeds: "An riga an tuntuɓe su kuma an tsara binciken farko na wata-wata." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka fara ko suka gwada sana'a, ko suka ƙara sabon kaya, cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce suna biyan kansu adadi ƙayyadadde kuma suna rubuta bayanai bayan wata uku",
      "Masu koyo da suka cimma aƙalla ɗaya daga cikin manufofinsu na wata shida, kuma ba su yi asara ga zambar tallafi ko bashi ba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda, alƙalami da na'urar lissafi (calculator na waya ma ya isa)",
      "Waya don duba shafukan intanet na hukuma na shirye-shirye",
      "Kayan yin ɗan ƙaramin kaya na gwaji (zaɓin mai koyo da kanta)",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da mako ɗaya ko biyu don yin gwajin"
    ],
    facilitatorNotes: [
      "Ku gudanar da kwas ɗin tare da ƙungiyar mata, ƙungiyar tanadi ko ƙungiyar haɗin gwiwa; ku haɗu a lokutan da suka dace da iyaye mata, kuma ku bar jarirai a cikin ɗakin.",
      "Kafin kwas ɗin, ku duba waɗanne shirye-shiryen mata da ƙananan sana'o'i ke buɗe a ƙasarku a shafukansu na hukuma, ku zo da adireshinsu.",
      "Kada ku taɓa neman masu koyo su bayyana PIN, adadin kuɗinsu ko bayanan asusunsu. Ku yi atisayen gane zambar tallafi da bashi da saƙonnin ƙirƙira.",
      "Wasu masu koyo suna iya fuskantar matsi ko ana mallake musu kuɗinsu a gida; ku yi magana a kai cikin kulawa, a ɓoye, kuma ku san hidimomin tallafin mata na yankinku da za ku tura su.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
