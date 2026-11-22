"use strict";

// Koach Learn course, Hausa (ha) translation of re-entry/reentry-financial-life-management.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "reentry-financial-life-management-ha",
  lang: "ha",
  translationOf: "reentry-financial-life-management",
  category: "Re-Entry",
  name: "Sarrafa Kuɗi da Rayuwa da Taimakon AI",
  skills: "Yin kasafin kuɗi mai sauƙi na wata da AI, Bin diddigin kashe kuɗi, Saita tunatarwar biyan kuɗaɗe, Zaɓar hanyoyin banki da bashi masu aminci, Duba rahoton bashinku (credit report) kyauta, Tsara manufofi mako-mako",
  outcome: "yin kasafin kuɗi mai sauƙi na wata da mataimakin AI ta amfani da ƙididdigar kusan-kusan, saita tunatarwa don biyan kuɗaɗenku, sanin yadda ake samun rahoton bashinku kyauta, da mayar da manufa ɗaya ta kuɗi ko rayuwa zuwa matakai na mako-mako.",
  about: [
    "Wannan kwas na mutanen da ke dawowa gida ne da ke son su riƙe kuɗinsu da makonsu da kyau. Sake farawa yana iya nufin albashin farko, sababbin kuɗaɗen biya, wataƙila tsofaffin basussuka, da ganawa da yawa a lokaci ɗaya. Tsari yana sa abin ya zama mai sauƙin ɗauka.",
    "Za ku yi amfani da mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini don yin kasafin kuɗi, tsara makonku da saita manufofi, kuma za ku koyi zaɓuɓɓuka masu aminci na banki da bashi, da yadda ake duba rahoton bashinku kyauta.",
    "Ba za ku taɓa rubuta ainihin lambobin asusu, lambar Social Security ɗinku ko bayanan shari'arku a AI ba; ƙididdigar kusan-kusan ta isa. Wannan kwas ba ya ba da shawarar kuɗi ko ta shari'a; game da basussuka, tara ko kuɗin kula da yara (child support), ku yi magana da ofishin da abin ya shafa, ofishin taimakon shari'a kyauta (legal aid) ko mai ba da shawara kan bashi na ƙungiya mai zaman kanta mara riba. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi amfani da mataimakin AI don yin kasafin kuɗi mai sauƙi na wata daga ƙididdigar kusan-kusan (kuɗin shiga, haya, waya, sufuri, abinci, sauran kuɗaɗen biya da ɗan kuɗin ajiya). Ku saita tunatarwa a waya don ranar ƙarshe ta biyan kowane kuɗi, ku rubuta yadda za ku sami rahoton bashinku kyauta, sannan ku mayar da manufa ɗaya zuwa matakai na makonni huɗu masu zuwa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari (re-entry) waɗanda ke fuskantar albashin farko, sababbin kuɗaɗen biya, wataƙila tsofaffin basussuka, da ganawa da yawa a lokaci ɗaya.",
    startingPoint: "Suna iya kira da tura saƙon tes, kuma suna iya sarrafa kuɗi a hannu. Ba su da gogewa sosai da kasafin kuɗi, asusun banki, rahoton bashi, manhajar kalanda ko mataimakan AI. Wasu sun taɓa samun matsala da asusun banki ko bashi a baya.",
    gap: "Ba tare da tsari ba, sababbin kuɗaɗen biya, caji da ganawa suna taruwa da sauri, kuma suna iya kawo tarar jinkiri, bashi mai tsada ko rashin cika wajibai. Masu koyo suna buƙatar yin kasafin kuɗi mai sauƙi, bin diddigin kuɗaɗen biya, zaɓar banki mai aminci, duba rahoton bashinsu da tsara makonsu, don sake farawa ya zama mai sauƙin ɗauka.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wayar zamani, wani lokaci kwamfutar ɗakin karatu",
      "Lokaci: darussa na kusan minti 5 da suka dace da aiki da ganawa",
      "Babu shawarar kuɗi ko ta shari'a: basussuka, tara da kuɗin kula da yara suna zuwa ofishin da abin ya shafa, legal aid ko mai ba da shawara kan bashi mara riba",
      "Sirri: ƙididdigar kusan-kusan kawai; kada a taɓa saka ainihin lambobin asusu, lambar Social Security ko bayanan shari'a a AI"
    ],
    prerequisites: "Kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani) yana da amfani amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da albashin da kuke karɓa a hannu da kuɗaɗen biyanku a ƙididdigar kusan-kusan", action: "yin kasafin kuɗi na wata ɗaya da mataimakin AI", standard: "da abubuwan buƙata a farko da ɗan layin ajiya, ba tare da ainihin lambobin asusu ba" },
    { id: "O2", condition: "Ta amfani da rubutu (note) da tunatarwar wayarku", action: "bin diddigin kashe kuɗinku na mako ɗaya da saita tunatarwa don ranar ƙarshe ta biyan kowane kuɗi", standard: "kowace tunatarwa kwanaki kaɗan kafin ranar ƙarshe" },
    { id: "O3", condition: "Idan aka ba ku zaɓuɓɓukan banki da bashi", action: "kwatanta su da gane waɗanda ke da tsada ko haɗari", standard: "kuna tambayar jimillar abin da za a mayar kafin kowane bashi, kuma kuna gane zambar biyan kuɗi tun farko" },
    { id: "O4", condition: "Ta amfani da shafin hukuma na rahoton bashi kyauta", action: "bayanin yadda ake samun rahoton bashinku kyauta da abin da za ku nema a ciki", standard: "kuna shirin nemansa a na'urarku ta sirri, kuma kun san inda za ku kai rahoton asusun da ba ku taɓa buɗewa ba" },
    { id: "O5", condition: "Idan kuna da mako mai cike da ayyuka da manufa ɗaya ta kuɗi ko rayuwa", action: "tsara makonku da raba manufar zuwa matakai na mako-mako da taimakon AI", standard: "an gyara duk wani karo a jadawali, kuma akwai matakai huɗu na mako-mako da za a iya yi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tushen sarrafa kuɗi da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yin kasafin kuɗi mai sauƙi da AI",
          minutes: 6,
          goal: "Yin kasafin kuɗi na wata ɗaya daga ƙididdigar kusan-kusan da mataimakin AI.",
          text: [
            "Kasafin kuɗi tsari ne na kuɗinku: abin da ke shigowa, da inda yake tafiya. Yana taimaka muku biyan abin da ya fi muhimmanci da farko, kuma kada kuɗinku ya ƙare kafin ranar albashi.",
            "Ku rubuta ƙididdigar kusan-kusan, ba bayanan asusu ba: \"Ina karɓar kusan $1,800 a wata. Haya $700 ce, waya $40, katin bas $60, abinci kusan $300. Ina biyan bashi $50 a wata. Ka taimake ni in yi kasafin kuɗi mai sauƙi na wata a tebur, da ɗan ajiya, ka faɗa mini nawa ya rage don sauran abubuwa.\"",
            "Ku sa abubuwan buƙata a farko: gida, abinci, sufurin zuwa aiki, waya, da biyan kuɗaɗen da ya zama dole. Sannan ajiya, ko da $10 ne a mako; yana taruwa kuma yana taimakawa a lokacin gaggawa. Sannan abubuwan da kuke so. Idan lissafin bai yi daidai ba, ku tambayi AI: \"A ina zan iya rage kashe kuɗi?\" sannan ku yanke abin da ya dace da ku."
          ],
          steps: ["Ku rubuta albashin da kuke karɓa a hannu da manyan kuɗaɗen biyanku a ƙididdigar kusan-kusan.", "Ku nemi AI ya yi muku tebur na kasafin kuɗi mai sauƙi na wata.", "Ku sa abubuwan buƙata a farko, sannan ajiya, sannan abubuwan da kuke so.", "Ku tambaya inda za ku iya rage kashe kuɗi idan lissafin bai yi daidai ba.", "Ku ajiye kasafin kuɗin."],
          words: [["Kasafin kuɗi (budget)", "tsarin yadda za ku yi amfani da kuɗinku kowane wata."], ["Albashi a hannu (take-home pay)", "kuɗin da kuke karɓa a zahiri bayan an cire haraji da sauran abubuwa."], ["Buƙatu da abubuwan so", "buƙatu abubuwa ne da dole ku biya; abubuwan so suna da daɗi amma ba dole ba ne."]],
          slides: [
            { title: "Kasafin kuɗi tsari ne", bullets: ["Abin da ke shigowa", "Inda yake tafiya", "Ku biya abin da ya fi muhimmanci da farko"] },
            { title: "Ku tambayi AI da ƙididdigar kusan-kusan", bullets: ["Albashi a hannu da manyan kuɗaɗen biya", "Babu lambobin asusu", "\"Ka yi tebur na kasafin kuɗi mai sauƙi.\""] },
            { title: "Tsari yana da muhimmanci", bullets: ["Buƙatu a farko", "Sannan ajiya, ko da $10 a mako", "Sannan abubuwan so"] }
          ],
          tryIt: "Ku rubuta ainihin albashinku na hannu ko na kimantawa, da kuɗaɗen biya biyar, a ƙididdigar kusan-kusan. Ku nemi mataimakin AI ya yi tebur na kasafin kuɗi mai sauƙi na wata da ɗan layin ajiya.",
          youCanNow: "yin kasafin kuɗi mai sauƙi na wata da taimakon AI, ba tare da bayyana bayanan sirri ba.",
          quickCheck: [
            { objective: "O1", q: "Mene ne albashi a hannu (take-home pay)?", options: ["Albashinku kafin a cire haraji", "Abin da kuke karɓa bayan an cire haraji da sauran abubuwa", "Kuɗin da kuka aro", "Ajiyarku"], answer: 1, why: "Albashi a hannu shi ne kuɗin da kuke karɓa a zahiri don yin kasafi da shi." },
            { objective: "O1", q: "Kuna son AI ya taimaka da kasafin kuɗi. Me za ku rubuta?", options: ["Lambar asusun bankinku", "Lambar Social Security ɗinku", "Ƙididdigar kusan-kusan kamar \"haya kusan $800\"", "Kalmar sirrin bankinku na intanet"], answer: 2, why: "Ƙididdigar kusan-kusan ta isa, kuma lambobin sirri ba sa shiga AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bin diddigin kashe kuɗi da kuɗaɗen biya",
          minutes: 5,
          goal: "Bin diddigin abin da kuke kashewa na mako ɗaya, da saita tunatarwa don ranakun ƙarshe na biyan kuɗaɗe.",
          text: [
            "Kasafin kuɗi yana aiki ne kawai idan kun san inda kuɗi ke tafiya a zahiri. Na mako ɗaya, ku rubuta duk abin da kuka kashe a rubutu (note) a wayarku: abin da kuka saya da kuɗinsa. Ƙananan abubuwa kamar kayan ciye-ciye da hawan mota na haya suna taruwa.",
            "A ƙarshen mako, ku liƙa jerin (ba lambobin kati ba) a AI ku tambaya: \"Ka raba kashe kuɗina zuwa rukunoni ka haɗa jimillar kowanne. Ina ne yawancin kuɗina ya tafi?\"",
            "Tarar jinkiri tana ɓata kuɗi. Ku saita tunatarwa a waya kwanaki kaɗan kafin ranar ƙarshe ta kowane kuɗin biya: \"Ka tunatar da ni in biya kuɗin wayata ranar 12 ga kowane wata.\" Ku biya kuɗaɗe ta manhaja ko shafin intanet na hukuma na kamfanin kawai, ko da kanku a ofishinsu."
          ],
          steps: ["Ku rubuta kowane sayayya a rubutu a waya na mako ɗaya.", "Ku nemi AI ya raba su ya haɗa jimilla.", "Ku kwatanta da kasafin kuɗinku.", "Ku saita tunatarwa ta kowane wata kafin ranar ƙarshe ta kowane kuɗin biya.", "Ku biya ta manhajoji ko shafukan hukuma kawai, ko da kanku."],
          words: [["Rukuni (category)", "rukunin kashe kuɗi masu kama da juna, kamar abinci ko sufuri."], ["Tarar jinkiri (late fee)", "ƙarin kuɗin da ake cajin ku idan kun biya bayan ranar ƙarshe."], ["Ranar ƙarshe (due date)", "rana ta ƙarshe don biyan kuɗi a kan lokaci."]],
          slides: [
            { title: "Ku san inda yake tafiya", bullets: ["Ku rubuta kowane sayayya na mako ɗaya", "Ƙananan abubuwa suna taruwa"] },
            { title: "Ku bar AI ya tsara shi", bullets: ["Ku liƙa jerin, ba lambobin kati ba", "\"Ka raba ka haɗa jimilla bisa rukuni.\""] },
            { title: "Ku guji tarar jinkiri", bullets: ["Tunatarwa kwanaki kaɗan kafin kowace ranar ƙarshe", "Ku biya ta hanyoyin hukuma kawai"] }
          ],
          tryIt: "Ku fara rubutun kashe kuɗi yau. Sannan ku saita tunatarwa da ke maimaituwa kowane wata don kuɗin biya ɗaya, kwanaki kaɗan kafin ranar ƙarshensa.",
          youCanNow: "bin diddigin kashe kuɗinku da saita tunatarwa don a biya kuɗaɗe a kan lokaci.",
          quickCheck: [
            { objective: "O2", q: "Mene ne ranar ƙarshe (due date)?", options: ["Rana ta ƙarshe don biyan kuɗi a kan lokaci", "Ranar da kuke karɓar albashi", "Ranar da aka aiko da takardar kuɗi", "Kowace rana da kuka zaɓa"], answer: 0, why: "Ranar ƙarshe ita ce rana ta ƙarshe don biya ba tare da jinkiri ba." },
            { objective: "O2", q: "Kuɗin wayarku yana ƙarewa ranar 15 ga kowane wata. Me za ku yi?", options: ["Ku biya duk lokacin da kuka tuna", "Ku jira sanarwar jinkiri", "Ku biya sau biyu don a tabbata", "Ku saita tunatarwa mai maimaituwa kwanaki kaɗan kafin ranar 15"], answer: 3, why: "Tunatarwa kafin ranar ƙarshe tana taimaka muku guje wa tarar jinkiri." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hanyoyin banki da bashi masu aminci",
          minutes: 5,
          goal: "Kwatanta zaɓuɓɓukan banki da bashi, da gane waɗanda ke da tsada ko haɗari.",
          text: [
            "Asusu a banki ko credit union (bankin haɗin gwiwa) yawanci ya fi arha kuma ya fi aminci fiye da canja cak a shagon canja cak, wanda ke cajin kuɗi kowane lokaci. Idan kun taɓa samun matsala da asusun banki a baya, ku tambayi bankuna da credit unions ko suna da asusun \"second chance\" (dama ta biyu) ko masu ƙaramin caji.",
            "Ku yi hankali da kuɗi mai sauri. Bashin payday, bashin da ake jinginar da takardar mota (title loan) da wasu manhajojin cin bashi na gaggawa suna iya cin kuɗi fiye da abin da kuka aro sosai idan an ƙara caji da ruwa (interest). Kafin ku ci bashi, ku tambaya: \"Mene ne jimillar abin da zan mayar, kuma yaushe?\" Kuna iya neman AI ya bayyana sharuɗɗan wani tayi da kalmomi masu sauƙi, amma ba ya yanke shawara a madadinku ba.",
            "Gargaɗin zamba: babu mai ba da bashi na gaske da ke neman ku biya kuɗi tun farko da katin kyauta (gift card) ko ta tura kuɗi (wire transfer). Don taimako kan basussuka, ku nemi mai ba da shawara kan bashi na ƙungiya mara riba ko ofishin legal aid; ku guji kamfanonin da ke alƙawarin goge bashi idan kun biya babban kuɗi tun farko."
          ],
          steps: ["Ku tambayi bankuna da credit unions game da asusu masu ƙaramin caji ko na second chance.", "Ku guji biyan kuɗin canja cak kowace ranar albashi idan za ku iya.", "Kafin ku ci bashi, ku nemi jimillar kuɗin da ranaku.", "Ku nemi AI ya bayyana sharuɗɗa da kalmomi masu sauƙi.", "Kada ku taɓa biyan kuɗi tun farko da katin kyauta ko ta wire."],
          words: [["Credit union (bankin haɗin gwiwa)", "banki mara riba wanda mambobinsa ne suka mallake shi."], ["Ruwa (interest)", "ƙarin kuɗin da kuke biya saboda kun ci bashi."], ["Bashin payday (payday loan)", "ƙaramin bashi na ɗan lokaci wanda yawanci yake da caji mai yawa sosai."]],
          slides: [
            { title: "Ku yi amfani da banki, ba shagon cak ba", bullets: ["Kuɗin canja cak yana taruwa", "Ku tambayi game da asusun second chance ko ƙaramin caji", "Credit unions sun cancanci a duba"] },
            { title: "Ku yi hankali da kuɗi mai sauri", bullets: ["Bashin payday da na takardar mota suna da tsada", "Ku tambaya: jimillar abin da za a mayar, kuma yaushe?", "AI zai iya bayyana sharuɗɗa; ku ne ke yanke shawara"] },
            { title: "Gargaɗin zamba", bullets: ["Babu biyan kuɗi tun farko da katin kyauta ko wire", "Ku yi amfani da masu ba da shawara mara riba ko legal aid"] }
          ],
          sources: [{ name: "FTC: Yadda ake guje wa zamba (alamun gargaɗi wajen biya)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Ku tambayi mataimakin AI: \"Ka bayyana min da kalmomi masu sauƙi bambancin credit union, banki da shagon canja cak, da tambayoyin da ya kamata in yi kafin in buɗe asusu.\" Ku rubuta tambayoyi uku da za ku yi.",
          youCanNow: "zaɓar hanyoyin banki masu aminci da gane bashi mai tsada ko mai haɗari.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ruwa (interest) a kan bashi?", options: ["Kyauta daga mai ba da bashi", "Ƙarin kuɗin da kuke biya saboda kun ci bashi", "Wani nau'in asusun ajiya", "Kuɗin canja cak"], answer: 1, why: "Ruwa shi ne abin da bashi ke cin ku a kan adadin da kuka aro." },
            { objective: "O3", q: "Mai ba da bashi ya ce dole ku biya kuɗi da katin kyauta kafin ku sami bashi. Me za ku yi?", options: ["Ku biya da sauri", "Ku biya rabi yanzu", "Ku bar shi; zamba ce", "Ku nemi AI ya aika katunan kyautar"], answer: 2, why: "Biyan kuɗi tun farko da katin kyauta alamar zamba ce." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tushen sarrafa kuɗi da AI",
        questions: [
          { objective: "O1", q: "Me ya kamata ku rubuta a AI don yin kasafin kuɗi?", options: ["Lambar Social Security ɗinku", "Lambar asusun bankinku", "Ƙididdigar kusan-kusan kawai", "Lambar PIN ta katinku"], answer: 2, why: "Ƙididdigar kusan-kusan ta isa, kuma tana kiyaye ku." },
          { objective: "O1", q: "A kasafin kuɗi, me ke zuwa da farko?", options: ["Buƙatu kamar gida, abinci da sufuri", "Abubuwan so", "Kyaututtuka", "Nishaɗi"], answer: 0, why: "Buƙatu suna ba ku gida, abinci kuma suna sa ku ci gaba da aiki." },
          { objective: "O2", q: "Me yasa za ku bi diddigin kashe kuɗi na mako ɗaya?", options: ["Doka ce ta tilasta", "Don burge wasu", "Don ƙara albashinku", "Don ganin inda kuɗinku ke tafiya a zahiri"], answer: 3, why: "Bin diddigi yana nuna abin da za ku canja." },
          { objective: "O2", q: "Ta yaya za ku guji tarar jinkiri?", options: ["Ku biya duk lokacin da kuka tuna", "Ku saita tunatarwa kwanaki kaɗan kafin kowace ranar ƙarshe", "Ku yi watsi da kuɗaɗen biya", "Ku biya baƙi"], answer: 1, why: "Tunatarwa tana taimaka muku biya a kan lokaci." },
          { objective: "O3", q: "Mai ba da bashi yana neman kuɗi tun farko da katin kyauta. Wannan:", options: ["Abu ne na yau da kullum", "Zamba ce", "Bankuna ne suka wajabta shi", "Ciniki ne mai kyau"], answer: 1, why: "Masu ba da bashi na gaske ba sa karɓar kuɗi da katin kyauta." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsara rayuwarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Duba rahoton bashinku kyauta",
          minutes: 5,
          goal: "Bayyana yadda ake samun rahoton bashinku kyauta da abin da za ku nema a ciki.",
          text: [
            "Rahoton bashi (credit report) tarihi ne na basussukanku da biyan kuɗaɗenku. Masu haya da gidaje, wasu masu ɗaukar aiki da masu ba da bashi suna iya duba shi. Bayan lokacin da ba ku nan, yana iya zama mara cikakken bayani, tsoho, ko mai kurakurai, ko ma ya ƙunshi asusun da wani ya buɗe da sunanku.",
            "Kuna iya samun rahotannin bashinku kyauta daga manyan kamfanonin rahoton bashi uku na ƙasa baki ɗaya (Equifax, Experian da TransUnion) sau ɗaya a mako a AnnualCreditReport.com, shafin hukuma. Kuna kuma iya kira 1-877-322-8228. Ku yi wannan a na'urarku ta sirri, ba kwamfutar da ake rabawa ba, domin za ku rubuta bayananku na sirri a can, ba a AI ba.",
            "Ku nemi asusun da ba ku gane ba da bayanan da ba daidai ba. Idan wani ya yi amfani da sunanku da bayananku, ku je IdentityTheft.gov don samun tsarin gyara kyauta. Kuna iya neman AI ya bayyana kalmomin rahoton bashi, amma kada ku taɓa liƙa rahotonku a cikinsa."
          ],
          steps: ["Ku je AnnualCreditReport.com a na'urarku ta sirri, ko ku kira 1-877-322-8228.", "Ku nemi rahotanni daga kamfanoni ukun.", "Ku nemi asusun da ba ku gane ba da kurakurai.", "Idan an yi amfani da bayananku, ku je IdentityTheft.gov.", "Ku nemi AI ya bayyana kalmomi, amma kada ku taɓa liƙa rahoton."],
          words: [["Rahoton bashi (credit report)", "tarihin basussukanku, katunan bashi da biyan kuɗaɗenku."], ["Kamfanin rahoton bashi (credit bureau)", "kamfanin da ke ajiye rahotannin bashi: Equifax, Experian ko TransUnion."]],
          slides: [
            { title: "Rahoton bashinku", bullets: ["Tarihin basussuka da biyan kuɗaɗe", "Masu gidajen haya da masu ba da bashi suna iya duba shi", "Yana iya samun kurakurai bayan lokacin da ba ku nan"] },
            { title: "Kyauta, daga shafin hukuma", bullets: ["AnnualCreditReport.com, kowane mako", "Ko ku kira 1-877-322-8228", "Ku yi amfani da na'urarku ta sirri"] },
            { title: "Abin da za ku nema", bullets: ["Asusun da ba ku gane ba", "Bayanan da ba daidai ba", "An yi amfani da bayananku? IdentityTheft.gov"] }
          ],
          sources: [{ name: "FTC: Rahotannin bashi kyauta", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "FTC: Abin da ya kamata ku sani game da satar bayanan mutum", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }],
          tryIt: "Ku nemi mataimakin AI ya bayyana waɗannan kalmomin rahoton bashi da sauƙi: \"collection account\", \"hard inquiry\" da \"payment history\". Sannan ku rubuta lokacin da za ku nemi rahotonku kyauta a na'urarku ta sirri.",
          youCanNow: "samun rahoton bashinku kyauta da sanin abin da za ku nema a ciki.",
          quickCheck: [
            { objective: "O4", q: "Waɗanne ne manyan kamfanonin rahoton bashi uku na ƙasa baki ɗaya?", options: ["Visa, Mastercard da Discover", "IRS, DMV da kotuna", "Bankinku, credit union da shagon canja cak", "Equifax, Experian da TransUnion"], answer: 3, why: "Equifax, Experian da TransUnion su ne manyan kamfanonin rahoton bashi uku na ƙasa baki ɗaya." },
            { objective: "O4", q: "Kuna son AI ya taimaka muku karanta rahoton bashinku. Me za ku yi?", options: ["Ku nemi AI ya bayyana kalmomin da ba ku fahimta ba kawai", "Ku liƙa dukan rahoton a AI", "Ku tura rahoton ga baƙo a intanet", "Ku ƙi karanta rahoton"], answer: 0, why: "AI zai iya bayyana kalmomi ba tare da kun raba rahotonku na sirri ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tsara makonku",
          minutes: 5,
          goal: "Yin amfani da AI don mayar da mako mai cike da ganawa, aiki da ayyuka zuwa tsari mai sauƙi.",
          text: [
            "Dawowa gida yana iya nufin abubuwa da yawa a lokaci ɗaya: lokutan aiki, ganawar dubawa (check-in), neman aiki, ofisoshin katin shaida, lokacin iyali, wataƙila karatu. Tsarin mako yana hana su karo da juna.",
            "Ku jera duk abubuwan makon da ranaku da lokuta, da kalmomi na gama-gari. Ku tambayi AI: \"Ga lokutan aikina, ganawa da ayyukana. Ka yi tsarin mako mai sauƙi, ka nuna duk wani karo, ka bar lokacin tafiya tsakanin abubuwa.\" Ba sai kun faɗi irin ganawar dubawar ba.",
            "Ku saka abubuwan da ba sa canjawa a kalandar wayarku da tunatarwa. Ku bar ɗan lokaci na hutu. Idan abubuwa biyu sun yi karo, ku kira da wuri don a canja lokaci; ofisoshi yawanci sun fi karɓar kira da wuri fiye da rashin zuwa."
          ],
          steps: ["Ku jera lokutan aiki, ganawa da ayyukan makon da kalmomi na gama-gari.", "Ku nemi AI ya yi tsarin mako da lokacin tafiya, ya nuna karo.", "Ku saka abubuwan da ba sa canjawa a kalandarku da tunatarwa.", "Ku bar ɗan lokaci na hutu.", "Ku kira da wuri don canja lokacin duk wani karo."],
          words: [["Karo (conflict)", "abubuwa biyu da aka sa a lokaci ɗaya."], ["Kalanda", "manhajar wayarku da ke ajiye ganawa bisa ranaku."]],
          slides: [
            { title: "Abubuwa da yawa a lokaci ɗaya", bullets: ["Aiki, ganawa, ayyuka, iyali", "Tsarin mako yana hana su karo"] },
            { title: "Ku nemi AI ya yi tsari", bullets: ["Ku jera abubuwa da kalmomi na gama-gari", "Ku ƙara lokacin tafiya", "Ku nemi a nuna karo"] },
            { title: "Ku tabbatar da shi", bullets: ["Ku saka abubuwan da ba sa canjawa a kalanda", "Ku bar lokacin hutu", "Ku kira da wuri don canja lokaci"] }
          ],
          tryIt: "Ku jera ainihin ayyukanku ko na gwaji na mako mai zuwa da kalmomi na gama-gari. Ku nemi AI ya yi tsarin mako da lokacin tafiya, sannan ku gyara karo ɗaya da ya samo.",
          youCanNow: "mayar da mako mai cike da ayyuka zuwa tsari mai sauƙi ba tare da karo ba.",
          quickCheck: [
            { objective: "O5", q: "Mene ne karo a jadawali?", options: ["Faɗa a wurin aiki", "La'asar da babu aiki", "Abubuwa biyu a lokaci ɗaya", "Kuɗin biya da ya makara"], answer: 2, why: "Karo a jadawali yana nufin ayyuka biyu sun faɗa a lokaci ɗaya." },
            { objective: "O5", q: "Tsarin mako na AI bai bar lokacin tafiya tsakanin ganawa biyu a sassa daban-daban na gari ba. Me za ku yi?", options: ["Ku ƙara lokacin tafiya ku matsar da ɗaya idan ya zama dole", "Ku amince da tsarin", "Ku ƙi zuwa duka biyun", "Ku goge tsarin"], answer: 0, why: "Tsari na gaske yana buƙatar lokacin tafiya don ku isa a kan lokaci." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mayar da manufofi zuwa matakai na mako-mako",
          minutes: 5,
          goal: "Raba manufa ɗaya ta kuɗi ko rayuwa zuwa ƙananan matakai na makonni huɗu masu zuwa.",
          text: [
            "Manyan manufofi, kamar tara kuɗin ajiya (deposit) na gidan haya, samun lasisin tuƙi, ko rage bashi, suna iya zama kamar suna nesa. Raba su zuwa matakai na mako-mako yana sa a iya yin su.",
            "Ku tambayi AI: \"Manufata ita ce in tara $600 don kuɗin ajiyar gidan haya cikin watanni huɗu. Ina karɓar kusan $1,800 a wata. Ka raba ta zuwa matakai na mako-mako da ƙananan ayyuka.\" Ko: \"Ka taimake ni in tsara matakan dawo da lasisin tuƙina a jihata. Ka faɗa mini abin da zan tabbatar da DMV.\"",
            "Ku zaɓi manufa ɗaya, ku rubuta matakai huɗu na mako-mako, ku saka na farko a kalandarku. Ku duba kowane mako: me na yi, me ke biye? Don matakan shari'a kamar dawo da lasisi, tara ko tambayoyi game da tarihin laifi, ku tabbatar da ofishin hukuma ko shirin legal aid; AI zai iya ba da jerin farawa kawai."
          ],
          steps: ["Ku zaɓi manufa ɗaya.", "Ku nemi AI ya raba ta zuwa matakai na mako-mako.", "Ku rubuta makonni huɗu na farko.", "Ku saka mako na ɗaya a kalandarku.", "Ku duba kowane mako, ku tabbatar da matakan shari'a da ofishin hukuma."],
          words: [["Manufa", "abin da kuke son cimmawa."], ["Legal aid (taimakon shari'a)", "taimakon shari'a kyauta ko mai araha ga mutanen da suka cancanta."]],
          slides: [
            { title: "Manyan manufofi, ƙananan matakai", bullets: ["Tara kuɗin ajiyar gidan haya", "Dawo da lasisin tuƙi", "Rage bashi"] },
            { title: "Ku nemi AI ya raba ta", bullets: ["Manufarku da lokacinta", "Matakai da ayyuka na mako-mako"] },
            { title: "Ku ci gaba har ƙarshe", bullets: ["Mataki na farko a kalandarku", "Ku duba kowane mako", "Ku tabbatar da matakan shari'a da ofishin ko legal aid"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi kasafin kuɗinku na wata da AI daga ƙididdigar kusan-kusan, ku saita tunatarwa don ranar ƙarshe ta kowane kuɗin biya, ku rubuta yaushe da yadda za ku sami rahoton bashinku kyauta, sannan ku mayar da manufa ɗaya zuwa matakai huɗu na mako-mako.",
          youCanNow: "sarrafa kuɗinku da makonku da taimakon AI, da mayar da manufofi zuwa matakan da za ku iya ɗauka.",
          quickCheck: [
            { objective: "O5", q: "Ta yaya ake sa babbar manufa ta zama mai yiwuwa?", options: ["Ku jira har sai kun sami ƙarin lokaci", "Ku yi duka a rana ɗaya", "Ku ajiye ta a kanku kawai", "Ku raba ta zuwa ƙananan matakai na mako-mako"], answer: 3, why: "Ƙananan matakai na mako-mako suna mayar da babbar manufa abin da za ku iya fara yi yanzu." },
            { objective: "O5", q: "AI ya ba ku matakan dawo da lasisin tuƙinku. Me za ku yi a gaba?", options: ["Ku bi su ba tare da tabbatarwa ba", "Ku yi watsi da dukan matakan", "Ku tabbatar da matakan da DMV ko legal aid", "Ku saka su a intanet"], answer: 2, why: "Ofisoshin hukuma ne ke da magana ta ƙarshe kan matakan shari'a, don haka ku tabbatar da su." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsara rayuwarku",
        questions: [
          { objective: "O4", q: "A ina ake samun rahotannin bashi kyauta daga majiyar hukuma?", options: ["Kowane shafin intanet da ke neman kuɗi", "Tallar da ke tasowa (pop-up)", "Hanyar haɗi a cikin tes", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com ita ce majiyar hukuma ta kyauta." },
          { objective: "O4", q: "Ya kamata ku liƙa rahoton bashinku a mataimakin AI?", options: ["A'a; ku nemi AI ya bayyana kalmomi kawai", "Ee, koyaushe", "Rabinsa kawai", "A kwamfutar ɗakin karatu kawai"], answer: 0, why: "Rahotannin bashi suna ɗauke da bayanan sirri." },
          { objective: "O4", q: "Kun ga asusun da ba ku taɓa buɗewa ba. Me za ku yi?", options: ["Ku biya shi nan take", "Ku yi watsi da shi", "Ku je IdentityTheft.gov don samun tsarin gyara", "Ku saka shi a intanet"], answer: 2, why: "IdentityTheft.gov yana jagorantar matakan gyara." },
          { objective: "O5", q: "Ganawa biyu suna a lokaci ɗaya a mako mai zuwa. Mataki mafi kyau?", options: ["Ku yi fatan komai zai daidaita", "Ku ƙi zuwa duka biyun", "Kada ku je ko ɗaya kuma kada ku faɗa wa kowa", "Ku kira da wuri don canja lokacin ɗaya"], answer: 3, why: "Kira da wuri ya fi rashin zuwa." },
          { objective: "O5", q: "AI ya ba ku matakan dawo da lasisi. Me ke biye?", options: ["Kada ku yi komai", "Ku amince da shi gaba ɗaya", "Ku tabbatar da DMV ko legal aid", "Ku biya baƙo"], answer: 2, why: "Dole a tabbatar da matakan shari'a da ofisoshin hukuma." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sarrafa Kuɗi da Rayuwa da Taimakon AI",
    questions: [
      { objective: "O1", q: "Kasafin kuɗi shi ne:", options: ["Wani nau'in bashi", "Tsarin kuɗinku", "Katin banki", "Kuɗin biya"], answer: 1, why: "Yana tsara abin da ke shigowa da abin da ke fita." },
      { objective: "O1", q: "Albashi a hannu shi ne:", options: ["Abin da kuke karɓa bayan an cire haraji da sauran abubuwa", "Albashinku na awa kafin haraji", "Kyautar albashi (bonus)", "Bashi"], answer: 0, why: "Shi ne kuɗin da kuke samu a zahiri." },
      { objective: "O1", q: "Wanne ne buƙata?", options: ["Haya", "Sabon wasan bidiyo", "Cin abinci a waje kowace rana", "Shirin kallon fina-finai na biyu"], answer: 0, why: "Gida buƙata ce ta asali." },
      { objective: "O1", q: "Ko ƙaramin ajiya, kamar $10 a mako, yana taimakawa domin:", options: ["Yana ƙara albashinku", "Yana taruwa kuma yana taimakawa a lokacin gaggawa", "Dole ne", "Yana dakatar da duk kuɗaɗen biya"], answer: 1, why: "Ƙananan kuɗaɗe suna girma su zama abin dogara." },
      { objective: "O1", q: "Idan kasafin kuɗinku bai yi daidai ba, kuna iya tambayar AI:", options: ["\"Ka biya min kuɗaɗena.\"", "\"Mene ne PIN ɗina?\"", "\"A ina zan iya rage kashe kuɗi?\"", "\"Ka ci min bashi.\""], answer: 2, why: "AI zai iya ba da shawarwari; ku ne ke yanke shawara." },
      { objective: "O2", q: "Rukunin kashe kuɗi shi ne:", options: ["Ranar ƙarshe", "Banki", "Bashi", "Rukunin kashe kuɗi masu kama da juna, kamar abinci"], answer: 3, why: "Rukunoni suna nuna inda kuɗi ke tafiya." },
      { objective: "O2", q: "Ranar ƙarshe ita ce:", options: ["Ranar hutu", "Ranar albashi", "Rana ta ƙarshe don biyan kuɗi a kan lokaci", "Ranar haihuwa"], answer: 2, why: "Biya bayanta yana iya kawo tarar jinkiri." },
      { objective: "O2", q: "Hanya mafi aminci ta biyan kuɗi ita ce:", options: ["Ta manhaja ko shafin intanet na hukuma na kamfanin, ko da kanku", "Ta hanyar haɗi a cikin tes", "Da katin kyauta ga wanda ya kira ku", "Ta wire ga baƙo"], answer: 0, why: "Hanyoyin hukuma suna kare ku daga zamba." },
      { objective: "O3", q: "Shagunan canja cak yawanci:", options: ["Gwamnati ce ke tafiyar da su", "Kyauta ne", "Suna biyan ku ruwa", "Suna cajin kuɗi kowane lokaci"], answer: 3, why: "Caji yana taruwa kowace ranar albashi." },
      { objective: "O3", q: "Credit union shi ne:", options: ["Mai ba da bashin payday", "Banki mara riba wanda mambobi suka mallaka", "Kamfanin rahoton bashi", "Shagon canja cak"], answer: 1, why: "Mambobi ne suka mallaki credit unions." },
      { objective: "O3", q: "Idan kun taɓa samun matsala da asusun banki, ku tambaya game da:", options: ["Asusun katin kyauta", "Asusun second chance ko masu ƙaramin caji", "Kuɗin crypto kawai", "Babu komai"], answer: 1, why: "Bankuna da credit unions da yawa suna ba da su." },
      { objective: "O3", q: "Kafin ku ci kowane bashi, ku tambaya:", options: ["Launin da mai ba da bashin ya fi so", "Biyan wata-wata kawai", "Babu komai", "Jimillar kuɗin da za ku mayar, kuma yaushe"], answer: 3, why: "Jimillar kuɗin tana nuna abin da za ku biya a zahiri." },
      { objective: "O3", q: "Ruwa (interest) shi ne:", options: ["Ƙarin kuɗin da kuke biya saboda kun ci bashi", "Kyauta", "Albashinku", "Tunatarwar biyan kuɗi"], answer: 0, why: "Cin bashi yana da ruwa." },
      { objective: "O3", q: "Don taimako kan basussuka, zaɓi mai aminci shi ne:", options: ["Baƙo a intanet", "Kamfanin da ke cajin babban kuɗi tun farko don goge bashi", "Mai ba da shawara kan bashi mara riba ko legal aid", "Tayin katin kyauta"], answer: 2, why: "Ƙungiyoyi mara riba da legal aid suna taimaka muku guje wa zambar goge bashi." },
      { objective: "O4", q: "Sau nawa za ku iya samun rahoton bashi kyauta daga kowane kamfani a shafin hukuma?", options: ["Sai da kuɗi kawai", "Sau ɗaya a kowace shekara goma", "Ba zai yiwu ba", "Sau ɗaya a mako"], answer: 3, why: "Kamfanonin sun tsawaita rahotanni kyauta na kowane mako." },
      { objective: "O4", q: "Manyan kamfanonin rahoton bashi uku na ƙasa baki ɗaya su ne:", options: ["Google, Apple da Microsoft", "Visa, Mastercard da Discover", "Equifax, Experian da TransUnion", "DMV, IRS da SSA"], answer: 2, why: "Waɗannan ukun ne ke ajiye rahotannin bashi." },
      { objective: "O4", q: "Ku nemi rahoton bashinku a:", options: ["Kwamfutar ɗakin karatu da ake rabawa yayin da kuke cikin dukan asusunku", "Na'urarku ta sirri", "Wayar baƙo", "Hirar AI"], answer: 1, why: "Za ku rubuta bayananku na sirri a can." },
      { objective: "O5", q: "Idan kuna neman AI ya tsara makonku, ku bayyana ayyukanku:", options: ["Da kalmomi na gama-gari", "Da lambar shari'arku", "Da lambar katin shaidarku", "Da lambar Social Security ɗinku"], answer: 0, why: "Kalmomi na gama-gari sun isa." },
      { objective: "O5", q: "\"Karo\" a jadawali yana nufin:", options: ["Abubuwa biyu a lokaci ɗaya", "Faɗa", "Ranar hutu", "Kuɗin biya"], answer: 0, why: "Karo yana buƙatar a canja lokaci." },
      { objective: "O5", q: "Don sa babbar manufa ta zama mai yiwuwa, ku:", options: ["Jira sa'a", "Raba ta zuwa matakai na mako-mako", "Yi duka a rana ɗaya", "Ɓoye ta daga kanku"], answer: 1, why: "Ƙananan matakai suna taruwa su kawo babban sakamako." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      6,
      7,
      8,
      11,
      14,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kasafin kuɗi na wata",
        objective: "O1",
        notYet: "Babu kasafin kuɗi, ko yana amfani da ainihin lambobin asusu, ko ya bar buƙatu.",
        meets: "Kasafin kuɗi na wata ɗaya daga ƙididdigar kusan-kusan, da buƙatu a farko da ɗan layin ajiya.",
        exceeds: "Lissafin ya yi daidai, kuma mai koyo ya tambayi AI inda zai rage kashe kuɗi idan ya zama dole."
      },
      {
        name: "Tunatarwar biyan kuɗaɗe",
        objective: "O2",
        notYet: "Wasu kuɗaɗen biya ba su da tunatarwa.",
        meets: "Tunatarwa don kowane kuɗin biya kwanaki kaɗan kafin ranar ƙarshensa.",
        exceeds: "Tunatarwar tana maimaituwa kowane wata, kuma mai koyo ya fara rubutun kashe kuɗi."
      },
      {
        name: "Tsarin rahoton bashi",
        objective: "O4",
        notYet: "Babu tsari, ko yana shirin amfani da shafin da ba na hukuma ba.",
        meets: "Ya rubuta lokacin da zai nemi rahoto kyauta daga shafin hukuma a na'urarsa ta sirri.",
        exceeds: "Ya kuma rubuta abin da zai nema, da abin da zai yi game da asusun da bai taɓa buɗewa ba."
      },
      {
        name: "Manufa a matakai na mako-mako",
        objective: "O5",
        notYet: "Manufar ba ta da sarari ko ba ta da matakai.",
        meets: "An raba manufa ɗaya zuwa ƙananan matakai huɗu na mako-mako.",
        exceeds: "Kowane mataki yana da rana kuma ya dace da makon mai koyo."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce suna bin kasafin kuɗi kuma suna biyan kuɗaɗe a kan lokaci na kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka nemi rahoton bashinsu kyauta ko suka buɗe asusu mai ƙaramin caji a banki ko credit union cikin kwanaki 60",
      "Masu koyo da suka fara wani kwas na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet da manhajar tunatarwa ko kalanda",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Takarda da alƙalami don ƙididdigar kusan-kusan da rubutun kashe kuɗi",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Masu koyo suna iya amfani da lambobin gwaji maimakon ainihin albashinsu da kuɗaɗen biyansu idan sun fi so.",
      "Kada ku taɓa neman masu koyo su rubuta ainihin lambobin asusu, lambobin Social Security ko bayanan shari'a; ƙididdigar kusan-kusan ta isa.",
      "Wannan kwas ba ya ba da shawarar kuɗi ko ta shari'a; ku shirya bayanan tuntuɓar legal aid na yankinku da mai ba da shawara kan bashi mara riba don tambayoyi game da basussuka, tara ko kuɗin kula da yara.",
      "A nemi rahotannin bashi a na'ura ta sirri, ba kwamfutar ɗakin gwaji da ake rabawa ba.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
