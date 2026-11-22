"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-ai-financial-literacy.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-ai-financial-literacy-ha",
  lang: "ha",
  translationOf: "underserved-ai-financial-literacy",
  category: "Undeserved Community",
  name: "AI don Ilimin Sarrafa Kuɗi",
  skills: "Yin kasafin kuɗi na wata, Amfani da AI don tsara kuɗi ba tare da bayyana bayanan sirri ba, Sanya burin ajiya, Duba rahoton bashi kyauta, Samun taimakon haraji da kuɗi kyauta, Gane zambar kuɗi",
  outcome: "yin kasafin kuɗi mai sauƙi na wata don iyalinku tare da taimakon mataimakin AI kyauta (ba tare da bayyana wata lambar sirri ba), sanya burin ajiya ɗaya, da sanin inda za ku sami rahoton bashinku kyauta da taimakon haraji kyauta.",
  about: [
    "Damuwar kuɗi gaskiya ce, musamman idan kowace dala tana da aikinta. Wannan kwas ɗin yana ba ku kayan aiki masu sauƙi don ganin inda kuɗinku ke tafiya, tsara abin da ya fi muhimmanci ga iyalinku, da guje wa tarkuna masu tsada.",
    "Za ku yi kasafin kuɗi na wata, ku yi amfani da mataimakin AI kyauta don taimakawa wajen tsarawa da bayanin sa ba tare da rubuta wata lambar sirri ba, ku sanya burin ajiya, ku duba rahoton bashinku kyauta, ku nemo taimakon haraji da kuɗi kyauta, ku kuma gane zambar kuɗi.",
    "Wannan kwas yana koyar da fasaha ne, ba shawarar zuba jari ba. Don manyan shawarwarin kuɗi, ku yi magana da mai ba da shawara kyauta na ƙungiya mai zaman kanta, ko ku duba majiyoyin hukuma kamar consumerfinance.gov, fdic.gov da irs.gov. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi kasafin kuɗin iyali na wata ɗaya: ku jera kuɗin shiga, abubuwan buƙata da abubuwan marmari da adadi da aka zagaye, ku yi amfani da mataimakin AI don tsara shi da ba da shawarar wuri ɗaya da za a yi ajiya (ba tare da lambobin asusu ko bayanan sirri ba), ku sanya burin ajiya ɗaya mai adadi da rana, sannan ku rubuta inda za ku sami rahoton bashinku kyauta da taimakon haraji kyauta.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a cikin al'ummomin da ba a kula da su sosai, da ke tafiyar da gida da ƙaramin kasafi: iyaye masu aiki, masu kula da wasu, masu karɓar tallafi, tsofaffi, da matasa da ke zaune su kaɗai a karon farko.",
    startingPoint: "Suna biyan kuɗaɗe kuma suna lissafin kuɗi a ka ko a takarda. Kaɗan ne ke da rubutaccen kasafi, burin ajiya, ko suka taɓa duba rahoton bashinsu, kuma da yawa ba su taɓa amfani da AI don ayyukan kuɗi ba. An taɓa nufar wasu da zambar kuɗi.",
    gap: "Ba tare da tsari ba, ƙananan kuɗaɗe suna taruwa, ajiya ba ta taɓa farawa, kurakuran bashi ba a gyara su, kuma iyalai suna biyan kuɗi don taimakon haraji ko su faɗa cikin zamba. Masu koyo suna buƙatar kasafi mai sauƙi, burin ajiya da taimako amintacce kyauta, kuma dole su yi amfani da AI ba tare da bayyana lambobin sirri ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6)",
      "Na'urori: wayar zamani ko kwamfutar ɗakin karatu; takarda ma tana aiki don kasafin",
      "Sirri: adadi da aka zagaye kawai, kada a taɓa rubuta lambar asusu, kati, Social Security ko kalmar sirri a AI",
      "Ilimin kuɗi na gama-gari kawai: babu shawarar zuba jari, kuma manyan shawarwari suna zuwa majiyoyin hukuma ko mai ba da shawara kyauta",
      "Adadi da ƙa'idoji (FDIC, VITA, Lifeline) suna canjawa: masu koyo su duba shafukan hukuma"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Empowerment\" (Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da takardun albashi, bayanan asusu ko rasit na wata ɗaya", action: "jera kuɗin shigarku da raba kuɗaɗen da kuke kashewa zuwa abubuwan buƙata da abubuwan marmari", standard: "da aƙalla kuɗaɗe goma, adadi da aka zagaye da jimloli" },
    { id: "O2", condition: "Ta amfani da mataimakin AI kyauta", action: "tsara kasafinku a tebur da zaɓar waɗanne shawarwarinsa suka dace da iyalinku", standard: "kuna bayyana rukunoni da adadi da aka zagaye kawai, kuma kuna duba jimloli da na'urar lissafi" },
    { id: "O3", condition: "Idan akwai abin da kuke son yin ajiya dominsa", action: "sanya burin ajiya mai adadi da rana, lissafa adadin kowane mako da zaɓar wuri mai aminci don ajiye shi", standard: "an duba lissafin, kuma banki ne mai inshorar FDIC ko ƙungiyar kuɗi (credit union) mai inshorar gwamnatin tarayya" },
    { id: "O4", condition: "Ta amfani da AnnualCreditReport.com", action: "bayyana yadda ake samun rahotannin bashinku kyauta da duba su don neman kurakurai", standard: "kuna ambaton kamfanonin bashi uku da abin da za a ƙalubalanta" },
    { id: "O5", condition: "Idan kuna buƙatar taimakon haraji ko na kuɗi", action: "nemo wurin taimakon haraji na VITA ko TCE kyauta da majiya amintacciya don tambayoyin kuɗi", standard: "kuna rubuta adireshin wurin da abin da za ku kawo" },
    { id: "O6", condition: "Idan aka ba ku tayin kuɗi ko saƙon gaggawa", action: "gane alamun gargaɗin zambar kuɗi da zaɓar mataki na gaba mai aminci", standard: "ba tare da bayyana bayanan shiga asusu ko code ba, kuma kuna kai rahoton zamba ga FTC" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsarin kuɗinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tushen kasafin kuɗi: kuɗin shiga, buƙatu da marmari",
          minutes: 5,
          goal: "Jera kuɗin shigarku na wata da raba kashe kuɗinku zuwa buƙatu da marmari.",
          text: [
            "Kasafin kuɗi (budget) tsari ne na kuɗinku. Yana nuna abin da ke shigowa kowane wata da inda yake tafiya. Kasafi ba yana nufin ba za ku taɓa jin daɗi ba; yana nufin ku ne kuke yanke shawara da gangan.",
            "Kuɗin shiga shi ne kuɗin da ke shigowa: albashi, tallafi, kuɗin kula da yara, ƙananan ayyuka. Abubuwan buƙata su ne abin da dole ku biya don rayuwa da aiki: kuɗin haya, abinci, wuta da ruwa, sufuri, kula da yara, magani. Abubuwan marmari suna da daɗin samu: cin abinci a waje, kallon fina-finai ta intanet (streaming), sababbin tufafi da ba ku buƙata tukuna.",
            "Ku fara da wata ɗaya. Ku duba takardun albashi, bayanan banki ko na kati, da rasit. Ku zagaye adadi zuwa dala mafi kusa ko dala biyar; kusan daidai ya isa don farawa."
          ],
          steps: ["Ku rubuta kowace hanyar kuɗin shiga na wata ɗaya.", "Ku jera kowane kuɗin da kuka kashe da kuka tuna ko kuka samo.", "Ku sa alama a kowanne: buƙata ko marmari.", "Ku haɗa jimlar kuɗin shiga, buƙatu da marmari."],
          words: [["Kasafin kuɗi (budget)", "tsarin yadda za ku yi amfani da kuɗinku kowane wata."], ["Kuɗin shiga (income)", "kuɗin da ke shigowa."], ["Kuɗin kashewa (expense)", "kuɗin da ke fita."]],
          slides: [
            { title: "Kasafin kuɗi tsari ne", bullets: ["Abin da ke shigowa", "Inda yake tafiya", "Ku ne kuke yanke shawara da gangan"] },
            { title: "Buƙatu da marmari", bullets: ["Buƙatu: haya, abinci, wuta da ruwa, sufuri, kula da yara", "Marmari: cin abinci a waje, streaming, ƙarin abubuwa"] },
            { title: "Ku fara da sauƙi", bullets: ["Wata ɗaya", "Ku yi amfani da takardun albashi, bayanan asusu, rasit", "Ku zagaye adadin"] }
          ],
          tryIt: "A takarda ko a spreadsheet kyauta, ku rubuta kuɗin shigarku na wata da aƙalla kuɗaɗen kashewa goma. Ku sa alamar B (buƙata) ko M (marmari) a kowanne.",
          youCanNow: "jera kuɗin shigarku da raba kuɗaɗen kashewa zuwa buƙatu da marmari.",
          quickCheck: [
            { objective: "O1", q: "Mene ne kuɗin shiga?", options: ["Kuɗin da ke shigowa, kamar albashi da tallafi", "Kuɗin da kuke kashewa a haya", "Kuɗin da kuke bi bashi", "Kuɗin da kuke biya"], answer: 0, why: "Kuɗin shiga shi ne kuɗin da ke shigowa, kamar albashi, tallafi ko ƙananan ayyuka." },
            { objective: "O1", q: "Kuna jera kuɗaɗen kashewa kuma kuna biyan kusan $87.60 don waya. Me za ku rubuta don farawa?", options: ["Ku bar shi", "Kusan $90", "$870", "Babu komai har sai kun sami ainihin sulalla"], answer: 1, why: "Zagaye zuwa dala mafi kusa ko biyar ya isa don fara kasafi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Amfani da AI don tsara kasafinku lafiya",
          minutes: 5,
          goal: "Neman mataimakin AI kyauta ya tsara kuma ya bayyana kasafinku ba tare da bayyana bayanan sirri ba.",
          text: [
            "Mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini zai iya mayar da jerinku tebur mai kyau, ya haɗa jimla, kuma ya nuna inda kuɗi ke tafiya. Ku ne ke da iko kan kowace shawara.",
            "Ku bayyana adadi da aka zagaye da rukunoni kawai. Kada ku taɓa rubuta lambobin asusu, lambobin kati, lambar Social Security ɗinku (lambar shaidar Amurka), kalmomin sirri, ko bayanan shiga bankinku. Misalin prompt (umarni): \"Iyalina mutum 4 suna samun kusan $3,200 a wata. Haya $1,400, abinci $650, waya $90, katin bas $100, cin abinci a waje $200, streaming $40. Ka sa wannan a tebur, ka haɗa jimla, ka ba da shawarar wurare biyu da za mu rage.\"",
            "AI yana iya yin kuskuren lissafi. Ku haɗa jimla da kanku ko da na'urar lissafi don ku tabbatar. Shawarwarinsa ra'ayoyi ne, ba dokoki ba; ku zaɓi abin da ya dace da iyalinku."
          ],
          steps: ["Ku rubuta rukunoninku da adadi da aka zagaye.", "Ku cire duk wata lambar asusu ko bayanan sirri.", "Ku nemi AI ya yi tebur, ya haɗa jimla, ya ba da shawarar ragi.", "Ku duba jimla da kanku.", "Ku zaɓi shawarwarin da suka dace da iyalinku."],
          words: [["Rukuni (category)", "rukunin kashe kuɗi, kamar abinci ko sufuri."], ["Madadi (placeholder)", "abin tsayawa a madadi kamar \"[bankina]\" da ake amfani da shi maimakon bayanan sirri."]],
          slides: [
            { title: "AI zai iya taimaka muku tsarawa", bullets: ["Yin tebur", "Haɗa jimla", "Ba da shawarar inda za a rage"] },
            { title: "Ku bayyana waɗannan kawai", bullets: ["Adadi da aka zagaye", "Rukunoni kamar haya da abinci", "Kada ku taɓa rubuta lambar asusu, kati ko Social Security"] },
            { title: "Ku duba ku zaɓa", bullets: ["Ku duba lissafin da kanku", "Shawarwari ra'ayoyi ne, ba dokoki ba", "Ku zaɓi abin da ya dace da iyalinku"] }
          ],
          tryIt: "Ku ba mataimakin AI rukunoninku da adadi da aka zagaye (babu bayanan sirri). Ku nemi tebur, jimla, da ra'ayoyi biyu na ragi. Ku duba jimlar da na'urar lissafi.",
          youCanNow: "amfani da AI don tsara kasafi ba tare da bayyana bayanan sirri ba, da duba lissafinsa.",
          quickCheck: [
            { objective: "O2", q: "Wane ne ke yanke shawarar ƙarshe game da kasafinku idan kuna amfani da AI?", options: ["AI", "Bankinku", "Ku", "Shagon manhajoji"], answer: 2, why: "AI yana ba da ra'ayoyi, amma ku ne ke da iko kan kowace shawara." },
            { objective: "O2", q: "Kuna son AI ya tsara kasafinku. Me za ku rubuta?", options: ["Bayanan shiga bankinku", "Lambar katinku da code ɗinsa", "Lambar Social Security ɗinku", "Rukunoni da aka zagaye kamar \"abinci kusan $650\""], answer: 3, why: "Adadi da aka zagaye da rukunoni kawai ake sakawa a AI, ba lambobin sirri ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sanya burin ajiya da kiyaye kuɗi lafiya",
          minutes: 5,
          goal: "Sanya burin ajiya ɗaya mai adadi da rana, da sanin yadda ake kare kuɗin da aka ajiye a banki.",
          text: [
            "Ko ɗan kuɗi kaɗan da ake ajiyewa kowane mako zai iya taimakawa idan mota ta lalace ko aka rage sa'o'in aiki. Mutane da yawa suna farawa da asusun gaggawa: kuɗin da aka ajiye don abubuwan ba-zata kawai.",
            "Ku sa burin ya kasance a sarari: \"Ajiye $300 don gaggawa kafin 1 ga Yuni.\" Ku raba da yawan makonni don ganin nawa za ku ajiye kowane mako. Ku nemi AI ya yi lissafin, sannan ku duba shi.",
            "Inda kuke ajiye kuɗi yana da muhimmanci. Kuɗi a bankin da FDIC ta yi wa inshora yana da kariya har zuwa $250,000 ga kowane mai ajiya, a kowane banki, ga kowane rukunin mallakar asusu. Inshorar FDIC ba ta rufe hannayen jari (stocks) ko crypto ba. Ku duba cewa banki yana da inshorar FDIC a fdic.gov kafin ku buɗe asusu."
          ],
          steps: ["Ku zaɓi abin da kuke ajiya dominsa.", "Ku zaɓi adadi da rana.", "Ku raba adadin da yawan makonni.", "Ku ajiye kuɗin a banki ko ƙungiyar kuɗi mai inshorar gwamnatin tarayya."],
          words: [["Asusun gaggawa (emergency fund)", "kuɗin da aka ajiye don kuɗaɗen ba-zata kawai."], ["FDIC", "Federal Deposit Insurance Corporation, hukumar da ke kare kuɗi a bankunan da ke da inshora."], ["Ƙungiyar kuɗi (credit union)", "cibiyar kuɗi mallakar membobinta, wadda ba ta neman riba."]],
          sources: [{ name: "FDIC: Understanding Deposit Insurance", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Ku fara asusun gaggawa", bullets: ["Kuɗi don abubuwan ba-zata kawai", "Ƙananan kuɗaɗe suna taruwa"] },
            { title: "Buri a sarari", bullets: ["Misali: $300 kafin 1 ga Yuni", "Adadi a raba da makonni = ajiyar kowane mako", "Ku duba lissafin da kanku"] },
            { title: "Ku kiyaye ajiyarku", bullets: ["Banki mai inshorar FDIC: har $250,000 ga kowane mai ajiya, a kowane banki, a kowane rukuni", "Ba hannayen jari ko crypto ba", "Ku duba banki a fdic.gov"] }
          ],
          tryIt: "Ku rubuta burin ajiya ɗaya mai adadi da rana. Ku lissafa nawa za ku ajiye kowane mako, sannan ku nemi AI ya duba lissafinku.",
          youCanNow: "sanya burin ajiya a sarari da zaɓar wuri mai aminci mai inshora don ajiye shi.",
          quickCheck: [
            { objective: "O3", q: "Me ke sa burin ajiya ya kasance a sarari?", options: ["Adadi da rana", "Suna mai kyau", "Babbar lamba", "Rashin faɗa wa kowa"], answer: 0, why: "Buri a sarari yana faɗin nawa da zuwa yaushe, kamar $300 kafin 1 ga Yuni." },
            { objective: "O3", q: "Kuna son ajiye $200 a cikin makonni 20. Nawa za ku ajiye kowane mako?", options: ["$20", "$10", "$4", "$100"], answer: 1, why: "$200 a raba da makonni 20 shi ne $10 a mako." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsarin kuɗinku",
        questions: [
          { objective: "O1", q: "Wanne ne abin buƙata?", options: ["Hidimar streaming", "Kuɗin haya", "Cin abinci a waje", "Sabon wasan bidiyo"], answer: 1, why: "Haya kuɗi ne da dole a biya don rayuwa." },
          { objective: "O2", q: "Me ya fi aminci a rubuta a mataimakin AI don taimakon kasafi?", options: ["Lambar asusun bankinku", "Lambar katinku", "Adadi da aka zagaye kamar \"haya kusan $1,400\"", "Kalmar sirrin bankinku na intanet"], answer: 2, why: "Adadi da aka zagaye da rukunoni suna kawo taimakon da kuke buƙata ba tare da bayanan sirri ba." },
          { objective: "O2", q: "AI ya haɗa kasafinku kuma jimlar tana kama da ba daidai ba. Me za ku yi?", options: ["Ku amince da ita", "Ku goge kasafinku", "Ku tambayi baƙo a intanet", "Ku duba jimlar da na'urar lissafi"], answer: 3, why: "AI yana iya yin kuskuren lissafi; ku duba shi da kanku." },
          { objective: "O3", q: "Wanne ne burin ajiya a sarari?", options: ["\"Ajiye $300 don gaggawa kafin 1 ga Yuni\"", "\"Ajiye wani abu\"", "\"Zama mai arziki\"", "\"Kuɗi daga baya\""], answer: 0, why: "Yana da dalili, adadi da rana." },
          { objective: "O3", q: "Me inshorar FDIC ke karewa?", options: ["Hannayen jari", "Kuɗin da aka ajiye a banki mai inshora, har zuwa iyaka", "Crypto", "Kuɗin da ke ƙarƙashin katifa"], answer: 1, why: "FDIC tana kare kuɗin da aka ajiye a bankuna masu inshora; ba hannayen jari ko crypto ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Bashi, taimako da zama lafiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Duba rahoton bashinku kyauta",
          minutes: 5,
          goal: "Nemo shafin hukuma na rahoton bashi kyauta da duba rahoto don neman kurakurai.",
          text: [
            "Rahoton bashi (credit report) rikodi ne na lamunanku, katunanku da kuɗaɗen da kuke biya. Masu gidajen haya, masu ba da lamuni da wasu masu ɗaukar aiki suna iya duba shi. Kurakurai suna faruwa, kuma kuskure zai iya hana ku samun gida ko lamuni.",
            "Kuna iya samun rahotannin bashi kyauta daga manyan kamfanonin bashi uku, Equifax, Experian da TransUnion, kowane mako a AnnualCreditReport.com. Wannan shi ne shafin hukuma. Wasu shafuka da ke alƙawarin rahoto \"kyauta\" suna iya ƙoƙarin sayar muku da wani abu.",
            "Ku nemi asusun da ba ku gane ba, adireshi marasa daidai, da biyan da aka ce kun makara alhali kun biya a kan lokaci. Idan wani abu ba daidai ba ne, kuna iya ƙalubalantarsa (dispute) a wurin kamfanin bashin. Hukumar Kare Masu Amfani da Kuɗi (Consumer Financial Protection Bureau) a consumerfinance.gov tana bayanin yadda ake yi."
          ],
          steps: ["Ku rubuta AnnualCreditReport.com da kanku a burauzar.", "Ku nemi rahotanninku daga Equifax, Experian da TransUnion.", "Ku nemi asusun da ba ku sani ba, bayanai marasa daidai da jinkirin biya da ba daidai ba.", "Idan wani abu ba daidai ba ne, ku bi matakan ƙalubalanta a consumerfinance.gov."],
          words: [["Rahoton bashi (credit report)", "rikodin lamunanku, katunan bashi da biyan kuɗaɗenku."], ["Kamfanin bashi (credit bureau)", "kamfanin da ke ajiye rahotannin bashi: Equifax, Experian, TransUnion."], ["Ƙalubalanta (dispute)", "neman a gyara kuskure a hukumance."]],
          sources: [{ name: "FTC: Free Credit Reports", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "Consumer Financial Protection Bureau: Consumer tools", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Rahoton bashinku", bullets: ["Rikodin lamunai, katuna da kuɗaɗen da kuke biya", "Masu gidajen haya da masu ba da lamuni suna iya duba shi", "Kurakurai suna faruwa"] },
            { title: "Ku same shi kyauta", bullets: ["AnnualCreditReport.com shi ne shafin hukuma", "Equifax, Experian, TransUnion", "Kyauta kowane mako"] },
            { title: "Abin da za ku nema", bullets: ["Asusun da ba ku sani ba", "Adireshi ko jinkirin biya marasa daidai", "Ku ƙalubalanci kurakurai: duba consumerfinance.gov"] }
          ],
          tryIt: "Ku rubuta shafin hukuma na rahoton bashi kyauta da sunayen kamfanonin bashi uku. Idan kun shirya kuma kuna kan na'urar ku ta kanku, ku nemi rahoto ɗaya ku nemi duk abin da ba ku gane ba.",
          youCanNow: "samun rahotannin bashinku kyauta daga shafin hukuma da gane kurakuran da za a ƙalubalanta.",
          quickCheck: [
            { objective: "O4", q: "Wane ne zai iya duba rahoton bashinku?", options: ["Ku kaɗai", "Iyalinku kaɗai", "Masu gidajen haya, masu ba da lamuni da wasu masu ɗaukar aiki", "Babu kowa"], answer: 2, why: "Masu gidajen haya, masu ba da lamuni da wasu masu ɗaukar aiki suna iya duba rahoton bashinku." },
            { objective: "O4", q: "Talla tana ba da rahoton bashi \"kyauta\" a shafin da ba ku sani ba. Me za ku yi?", options: ["Ku yi rajista ku saka katinku", "Ku danna tallar", "Ku manta da rahotannin bashi", "Ku rubuta AnnualCreditReport.com da kanku"], answer: 3, why: "AnnualCreditReport.com shi ne shafin hukuma; wasu suna iya ƙoƙarin sayar muku da wani abu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Taimakon haraji da kuɗi kyauta",
          minutes: 5,
          goal: "Nemo wurin taimakon haraji kyauta da majiya amintacciya don tambayoyin kuɗi.",
          text: [
            "Ba sai kun biya kuɗi mai yawa don a cike muku haraji ba. Shirin IRS (hukumar harajin Amurka) mai suna Volunteer Income Tax Assistance, wato VITA, yana ba da taimakon haraji kyauta, galibi ga mutanen da suka cika sharuɗɗan kuɗin shiga na Earned Income Tax Credit. Wurare da yawa kuma suna taimakon mutanen da ke samun kusan $70,244 ko ƙasa da haka, masu nakasa, da waɗanda Ingilishinsu bai yi yawa ba. Kowane wuri yana iya samun nasa ƙa'idoji, don haka ku tambayi wurin.",
            "Ku nemo wurin VITA da IRS VITA/TCE Locator a freetaxassistance.for.irs.gov ko ta kiran 800-906-9887. TCE yana ba da irin wannan taimako kyauta, galibi ga mutane masu shekaru 60 zuwa sama.",
            "Don sauran tambayoyin kuɗi, Consumer Financial Protection Bureau a consumerfinance.gov tana da jagorori kyauta kan asusun banki, karɓar bashi, lamunin payday da sauransu, da hanyar shigar da ƙorafi game da wani kamfani. Lamunin payday da manhajojin kuɗi-nan-take suna iya tsada fiye da yadda suke gani; ku karanta cikakken kuɗin kafin ku sa hannu."
          ],
          steps: ["Ku bincika IRS VITA/TCE Locator ko ku kira 800-906-9887.", "Ku tambayi wurin abin da za ku kawo.", "Ku yi amfani da consumerfinance.gov don tambayoyin kuɗi.", "Kafin kowane lamuni, ku nemi cikakken kuɗin a dala."],
          words: [["VITA", "Volunteer Income Tax Assistance: taimakon haraji kyauta da IRS ke goyon baya."], ["Lamunin payday (payday loan)", "ƙaramin lamuni na ɗan gajeren lokaci da zai iya yin tsada sosai."]],
          sources: [{ name: "IRS: Free tax return preparation for qualifying taxpayers", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" }, { name: "Consumer Financial Protection Bureau: Consumer tools", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Taimakon haraji kyauta: VITA", bullets: ["IRS na goyon baya, masu aikin sa-kai da aka horar ne ke gudanarwa", "Wurare da yawa suna taimakon masu samun kusan $70,244 ko ƙasa", "Wurare suna iya samun nasu ƙa'idoji"] },
            { title: "Ku nemo wuri", bullets: ["freetaxassistance.for.irs.gov", "Ko ku kira 800-906-9887", "TCE: taimako kyauta galibi ga masu shekaru 60+"] },
            { title: "Taimakon kuɗi amintacce", bullets: ["Jagorori da ƙorafi a consumerfinance.gov", "Lamunin payday yana iya tsada sosai", "Ku nemi cikakken kuɗin kafin ku sa hannu"] }
          ],
          tryIt: "Ku yi amfani da IRS VITA/TCE Locator don nemo wurin taimakon haraji kyauta mafi kusa da ku. Ku rubuta adireshinsa da abin da ya ce ku kawo.",
          youCanNow: "nemo taimakon haraji kyauta da bayanan kuɗi amintattu.",
          quickCheck: [
            { objective: "O5", q: "Me TCE ke bayarwa galibi?", options: ["Taimakon haraji kyauta, galibi ga masu shekaru 60 zuwa sama", "Lamunai masu kuɗi", "Katunan bashi", "Horon aiki"], answer: 0, why: "TCE yana ba da taimakon haraji kyauta kamar VITA, galibi ga masu shekaru 60 zuwa sama." },
            { objective: "O5", q: "Wata manhajar kuɗi-nan-take tana ba ku $200 yau. Me za ku fara tambaya?", options: ["Yadda za ku sami ƙari da sauri", "Cikakken kuɗin a dala", "Ko abokanku suna amfani da ita", "Babu komai; ku sa hannu kawai"], answer: 1, why: "Lamunin payday da manhajojin kuɗi-nan-take suna iya tsada fiye da yadda suke gani." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gane zambar kuɗi, da tsarinku na ƙarshe",
          minutes: 5,
          goal: "Gane zambar kuɗi da aka saba gani da kammala tsarin kasafinku.",
          text: [
            "'Yan damfara suna nufar mutanen da ba su da kuɗi sosai da lamunai na bogi, yafe bashi na bogi, tallafin gwamnati na bogi da tayin \"arziki cikin sauri\", har da dabarun crypto. Wasu yanzu suna amfani da AI don rubuta saƙonni da suke kama da na gaske ko kwaikwayon muryar wani a iyali.",
            "Alamun gargaɗi: suna gaggauta ku, suna neman ku biya da katin kyauta (gift card), tura kuɗi ta waya (wire transfer), manhajojin biyan kuɗi ko crypto, suna alƙawarin kuɗi tabbatacce, ko suna neman bayanan shiga bankinku ko code ɗin da aka turo wayarku. Ofishin gwamnati na gaske ba zai kira ya nemi biya ta wannan hanyar ba.",
            "Idan wani abu bai yi muku daidai ba, ku tsaya, ku katse wayar, sannan ku sake kira ta lambar da kuka sani gaskiya ce. Kuna iya kai rahoton zamba ga Federal Trade Commission (FTC, hukumar kasuwanci ta tarayya) a ReportFraud.ftc.gov."
          ],
          steps: ["Ku kula da gaggawa, katin kyauta, crypto da kuɗi tabbatacce.", "Kada ku taɓa bayar da bayanan shiga banki ko code na waya.", "Ku katse wayar ku sake kira ta lambar da kuka sani.", "Ku kai rahoton zamba ga FTC."],
          words: [["Zamba (scam)", "dabarar satar kuɗi ko bayanai."], ["Riba tabbatacciya (guaranteed returns)", "alƙawarin cewa lallai za ku sami kuɗi; maganar zamba da aka saba ji."]],
          sources: [{ name: "Federal Trade Commission: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          slides: [
            { title: "Zambar kuɗi da aka saba gani", bullets: ["Lamunai da yafe bashi na bogi", "Tallafin gwamnati na bogi", "\"Arziki cikin sauri\" da dabarun crypto"] },
            { title: "Alamun gargaɗi", bullets: ["Suna gaggauta ku", "Katin kyauta, tura kuɗi, manhajojin biya ko crypto", "Kuɗi tabbatacce; suna neman code ɗinku"] },
            { title: "Abin da za ku yi", bullets: ["Ku tsaya ku katse wayar", "Ku sake kira ta lambar da kuka sani", "Ku kai rahoto a ReportFraud.ftc.gov"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala kasafinku na wata ɗaya tare da taimakon AI (babu lambobin sirri), ku duba jimloli, ku rubuta burin ajiya ɗaya mai adadi da rana, sannan ku rubuta inda za ku sami rahoton bashinku kyauta da taimakon haraji kyauta.",
          youCanNow: "yin kasafin kuɗin iyali, tsara ajiya, nemo taimako kyauta da guje wa zambar kuɗi.",
          quickCheck: [
            { objective: "O6", q: "Wace buƙatar biya ce alamar gargaɗin zamba?", options: ["Takardar kuɗin wuta daga kamfanin da kuka sani a adireshinsa na yau da kullum", "Biyan haya ga mai gidanku da cak", "Aka ce ku biya da katin kyauta", "Biya a kanti a shago"], answer: 2, why: "'Yan damfara suna neman katin kyauta, tura kuɗi, manhajojin biya ko crypto." },
            { objective: "O6", q: "Kun sami kira da muryar ɗan uwanku yana neman kuɗi yanzu-yanzu. Me za ku yi?", options: ["Ku aika nan take", "Ku ba shi bayanan shiga bankinku", "Ku biya da katin kyauta", "Ku katse wayar ku kira ɗan uwan ta lambar da kuka sani"], answer: 3, why: "'Yan damfara suna iya kwaikwayon murya da AI, don haka ku sake kira ta lambar da kuka sani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Bashi, taimako da zama lafiya",
        questions: [
          { objective: "O4", q: "Mene ne shafin hukuma na rahoton bashi kyauta?", options: ["Kowane shafi da ya ce \"kyauta\"", "Hanyar haɗi a saƙon tes", "Talla a kafafen sada zumunta", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com shi ne shafin hukuma na rahotanni kyauta." },
          { objective: "O4", q: "Kun sami wani asusu a rahoton bashinku da ba naku ba. Ya kamata ku:", options: ["Ƙalubalance shi a wurin kamfanin bashin", "Ku manta da shi", "Ku biya shi nan take", "Ku saka shi a intanet"], answer: 0, why: "Ƙalubalanta tana gyara kurakurai a rahotonku." },
          { objective: "O5", q: "Mene ne VITA?", options: ["Lamunin payday", "Taimakon haraji kyauta da IRS ke goyon baya", "Kamfanin bashi", "Asusun ajiya"], answer: 1, why: "VITA tana ba da cike haraji kyauta ta masu aikin sa-kai da aka horar." },
          { objective: "O6", q: "Wani mai kira ya ce daga gwamnati yake kuma dole ku biya tara yau da katin kyauta. Wannan:", options: ["Abu ne na yau da kullum", "Mayar da kuɗin haraji ne", "Zamba ce", "Hidimar VITA ce"], answer: 2, why: "Ofisoshin gwamnati ba sa neman biya da katin kyauta." },
          { objective: "O6", q: "A ina za ku iya kai rahoton zamba?", options: ["Ga ɗan damfarar", "Babu inda", "A rukunin hira kawai", "ReportFraud.ftc.gov"], answer: 3, why: "Federal Trade Commission tana karɓar rahotannin zamba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Ilimin Sarrafa Kuɗi",
    questions: [
      { objective: "O1", q: "Kasafin kuɗi shi ne:", options: ["Tsarin kuɗinku", "Wani nau'in lamuni", "Katin bashi", "Kuɗin caji na banki"], answer: 0, why: "Kasafi yana tsara kuɗin shiga da kashewa." },
      { objective: "O1", q: "Wanne ne kuɗin shiga?", options: ["Haya", "Albashi", "Kayan abinci", "Kuɗin waya"], answer: 1, why: "Kuɗin shiga shi ne kuɗin da ke shigowa." },
      { objective: "O1", q: "Wanne ne abin marmari?", options: ["Kula da yara don zuwa aiki", "Wutar lantarki", "Cin abinci a waje", "Magani"], answer: 2, why: "Cin abinci a waje yana da daɗin samu, ba dole ba ne." },
      { objective: "O1", q: "Lokacin fara kasafi, ba laifi ba ne ku:", options: ["Tsallake kuɗin shiga", "Yi amfani da kalmar sirrinku", "Yi tsammani barkatai", "Zagaye adadi zuwa dala mafi kusa ko biyar"], answer: 3, why: "Adadi kusan daidai da aka zagaye ya isa don farawa." },
      { objective: "O2", q: "Wanne ne kada ku TAƁA rubutawa mataimakin AI?", options: ["Lambar katinku", "\"Abinci kusan $600\"", "\"Iyali mutum 4\"", "\"Ka ba da shawarar ragi biyu\""], answer: 0, why: "Lambobin kati bayanan sirri ne." },
      { objective: "O2", q: "AI ya ba da shawarar a daina katin bas na ɗanku. Ku:", options: ["Dole ne ku yi haka", "Ku yanke abin da ya dace da iyalinku; wannan shawarar ba lallai ta dace ba", "Ku tambayi baƙo", "Ku ba AI bayanan shiga bankinku"], answer: 1, why: "Shawarwarin AI ra'ayoyi ne; ku ne kuke zaɓar abin da ya dace." },
      { objective: "O2", q: "Me yasa za ku duba jimlolin kasafin da AI ya yi?", options: ["AI ba ya taɓa kuskure", "Doka ce", "AI yana iya yin kuskuren lissafi", "Yana canja kuɗin asusunku"], answer: 2, why: "Koyaushe ku duba lissafin da kanku." },
      { objective: "O3", q: "Asusun gaggawa shi ne:", options: ["Kuɗi don abubuwan marmari", "Lamuni", "Rahoton bashi", "Kuɗin da aka ajiye don kuɗaɗen ba-zata kawai"], answer: 3, why: "Yana rufe abubuwan ba-zata kamar gyaran mota." },
      { objective: "O3", q: "Kuna son $260 a cikin makonni 26. Nawa kowane mako?", options: ["$5", "$10", "$26", "$100"], answer: 1, why: "$260 a raba da makonni 26 shi ne $10." },
      { objective: "O3", q: "Inshorar FDIC tana kare kuɗin da aka ajiye har zuwa:", options: ["$1,000", "$250,000 ga kowane mai ajiya, a kowane banki mai inshora, a kowane rukunin mallaka", "Kowane adadi", "Crypto kawai"], answer: 1, why: "Wannan shi ne daidaitaccen adadin FDIC." },
      { objective: "O3", q: "Wanne ne inshorar FDIC BA TA rufewa?", options: ["Asusun ajiya a banki mai inshora", "Asusun yau da kullum (checking) a banki mai inshora", "Crypto", "Takardar ajiya na wani lokaci (CD) a banki mai inshora"], answer: 2, why: "FDIC ba ta rufe crypto ko hannayen jari." },
      { objective: "O4", q: "Rahoton bashi shi ne:", options: ["Albashinku", "Takardar harajinku", "Kasafinku", "Rikodin lamunanku, katunanku da biyan kuɗaɗenku"], answer: 3, why: "Masu ba da lamuni da masu gidajen haya suna iya duba shi." },
      { objective: "O4", q: "Manyan kamfanonin bashi uku su ne:", options: ["Equifax, Experian da TransUnion", "Google, Bing da Yahoo", "FDIC, IRS da FTC", "Visa, Mastercard da Discover"], answer: 0, why: "Waɗannan uku ne ke ajiye rahotannin bashi." },
      { objective: "O4", q: "Sau nawa za ku iya samun rahotanni kyauta a AnnualCreditReport.com?", options: ["Sau ɗaya a kowace shekara goma", "Kowane mako", "Ba za ku taɓa samu ba", "Sai kun biya kawai"], answer: 1, why: "Kamfanonin bashi suna ba da rahotanni kyauta kowane mako a can." },
      { objective: "O5", q: "A ina za ku sami jagorori kyauta kan karɓar bashi da lamunin payday?", options: ["Tallar da ke tasowa (pop-up)", "Saƙon tes na ɗan damfara", "consumerfinance.gov", "Shagon katin kyauta"], answer: 2, why: "Consumer Financial Protection Bureau tana wallafa jagorori kyauta." },
      { objective: "O5", q: "Ta yaya za ku nemo wurin harajin VITA kyauta?", options: ["Ku tambayi baƙo", "Ku fara biyan kuɗi", "Ku jira kira", "Ku yi amfani da IRS VITA/TCE Locator ko ku kira 800-906-9887"], answer: 3, why: "Waɗannan su ne hanyoyin hukuma na IRS don nemo wuri." },
      { objective: "O5", q: "Kafin ku karɓi lamunin payday ko manhajar kuɗi-nan-take, ya kamata ku:", options: ["Nemi cikakken kuɗin a dala", "Sa hannu da sauri", "Ba da bayanan shiga bankinku", "Tsallake karatu"], answer: 0, why: "Waɗannan lamunai suna iya tsada fiye da yadda suke gani." },
      { objective: "O6", q: "Wani yana alƙawarin ribar crypto \"tabbatacciya\". Wannan:", options: ["Ciniki ne mai aminci", "Alamar gargaɗin zamba ce da aka saba gani", "Yana da inshorar FDIC", "Taimakon haraji kyauta ne"], answer: 1, why: "Kuɗi tabbatacce maganar zamba ce da aka daɗe ana ji." },
      { objective: "O6", q: "Wani saƙo yana neman code ɗin da aka turo wayarku don \"tabbatar da bankinku\". Ku:", options: ["Aika shi", "Saka shi a intanet", "Kada ku taɓa bayar da shi, ku kira bankinku ta lambar da kuka sani", "Karanta shi da babbar murya"], answer: 2, why: "Wannan code yana kare asusunku." },
      { objective: "O6", q: "Don babbar shawarar kuɗi, mataki mafi kyau shi ne:", options: ["Amincewa da kowace amsar AI", "Bin rubutu a kafafen sada zumunta", "Tambayar mai sayar da abin", "Duba majiyoyin hukuma ko magana da mai ba da shawara kyauta na ƙungiya mai zaman kanta"], answer: 3, why: "Majiyoyin hukuma da masu ba da shawara na gaske suna kare ku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      7,
      9,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kasafi",
        objective: "O1",
        notYet: "Babu kuɗin shiga ko kuɗaɗen kashewa, ko ba a sa alamar buƙatu da marmari ba.",
        meets: "Kuɗin shiga da kuɗaɗen kashewa na wata ɗaya da adadi da aka zagaye, kowanne da alamar buƙata ko marmari, da jimloli.",
        exceeds: "Yana amfani da takardun albashi, bayanan asusu ko rasit don adadin ya kusa daidai."
      },
      {
        name: "An yi amfani da AI lafiya",
        objective: "O2",
        notYet: "Prompt ɗin yana da lambar asusu, kati ko Social Security, ko ba a duba jimloli ba.",
        meets: "Rukunoni da aka zagaye kawai aka bayyana, an duba jimloli, kuma an zaɓi wuri ɗaya na ajiya.",
        exceeds: "Yana bayyana dalilin da ya sa ya riƙe ko ya ƙi kowace shawarar AI."
      },
      {
        name: "Burin ajiya",
        objective: "O3",
        notYet: "Babu adadi ko rana.",
        meets: "Buri ɗaya mai adadi, rana da adadin kowane mako da aka duba.",
        exceeds: "Yana faɗin inda za a ajiye kuɗin, kuma cewa yana da inshorar gwamnatin tarayya."
      },
      {
        name: "Rahoton bashi da taimakon haraji",
        objective: "O5",
        notYet: "Bai faɗi inda za a sami rahoton ko taimakon haraji ba.",
        meets: "Ya ambaci AnnualCreditReport.com da wurin VITA ko TCE da zai yi amfani da shi.",
        exceeds: "Yana da adireshin wurin harajin da abin da za a kawo."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da ke bin kasafinsu kuma suka fara ajiya cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka duba rahoton bashinsu ko suka yi amfani da taimakon harajin VITA kyauta cikin watanni 6",
      "Masu koyo da suka ce sun guje wa zambar kuɗi ko lamuni mai tsada"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfutar ɗakin karatu, da na'urar lissafi (wayar tana da ita)",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Takardun albashi, bayanan asusu ko rasit na wata ɗaya (a ajiye su a sirri)",
      "Takarda ko spreadsheet kyauta don kasafin",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Masu koyo suna ajiye lambobinsu na gaske a sirri; ku ba da kasafin atisaye ga duk wanda ba ya son amfani da nasa.",
      "Ku duba prompts don lambobin asusu, kati ko Social Security kafin a aika su.",
      "Kada ku ba da shawarar zuba jari, haraji ko shari'a; ku nuna wa masu koyo shafukan hukuma, VITA ko mai ba da shawara kyauta na ƙungiya mai zaman kanta.",
      "Ku nuna AnnualCreditReport.com da VITA/TCE Locator kai tsaye, kuma masu koyo su nemi rahotanni a na'urar kansu kawai.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
