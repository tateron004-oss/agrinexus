"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-tech-skills-beginners.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-tech-skills-beginners-ha",
  lang: "ha",
  translationOf: "underserved-tech-skills-beginners",
  category: "Undeserved Community",
  name: "Ƙwarewar Fasaha ga Masu Farawa",
  skills: "Amfani da allon taɓawa da linzamin kwamfuta (mouse), Shiga intanet kyauta ko da ɗan kuɗi kaɗan, Bincike a intanet da gane shafuka amintattu, Aika imel tare da haɗaɗɗen fayil, Yin kalmar sirri mai ƙarfi, Neman taimakon fasaha daga AI",
  outcome: "amfani da waya ko kwamfutar ɗakin karatu kyauta don shiga intanet, neman bayanai amintattu, aika imel tare da hoto ko fayil, da kiyaye asusunku da kalmar sirri mai ƙarfi.",
  about: [
    "Wannan kwas ɗin na duk wanda yake jin sabon shiga ko yake jin tsoron fasaha ne. Mutane da yawa ba su taɓa samun damar koyo ba, kuma babu laifi. Za mu fara daga farko, mu tafi ɗan mataki ɗaya a lokaci ɗaya.",
    "Za ku yi atisayen amfani da allon taɓawa da linzamin kwamfuta (mouse), ku nemo hanyoyin shiga intanet kyauta ko da ɗan kuɗi kaɗan, ku yi bincike a intanet, ku bambanta shafi amintacce da mai haɗari, ku aika imel tare da haɗaɗɗen fayil, ku yi kalmar sirri mai ƙarfi, kuma ku nemi taimakon mataimakin AI kyauta idan kun makale.",
    "Kuna iya amfani da wayarku ko kwamfuta kyauta a ɗakin karatu na jama'a ko cibiyar al'umma. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "A waya ko kwamfutar ɗakin karatu, ku nemi lokutan buɗewar ɗakin karatu na jama'a a shafinsa na hukuma, ku ɗauki hoton allo (screenshot) ko hoton lokutan, sannan ku aika shi ta imel ga wani a iyali ko aboki tare da gajeren saƙo mai ladabi. Ku yi amfani da asusun da ke da kalmar sirri mai ƙarfi, kuma ku fita daga asusu idan kun yi amfani da kwamfutar da ake rabawa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a al'ummomin da ba a kula da su sosai ba, waɗanda suke sabbi ko suke jin tsoron fasaha: tsofaffi, mutanen da ba su taɓa samun damar koyo ba, mutanen da ke dawowa bayan dogon lokaci ba sa nan, da masu magana da Turanci a matsayin harshe na biyu.",
    startingPoint: "Wataƙila suna da waya mai sauƙi don kira. Ba sa amfani da allon taɓawa, linzamin kwamfuta, madannin rubutu (keyboard), binciken intanet ko imel sosai, ko kwata-kwata, kuma wasu ba su taɓa yin asusu ko kalmar sirri ba.",
    gap: "Ayyuka, makarantu, asibitoci da tallafin gwamnati yanzu suna sa ran mutane su shiga intanet, su nemo bayanai, kuma su aika imel. Masu koyo suna buƙatar waɗannan ƙwarewa na farko, tare da halaye masu aminci game da kalmomin sirri da shafukan intanet, don su yi ayyukan yau da kullum ba tare da dogara ga wasu ba ko faɗawa cikin zamba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 4 zuwa 5)",
      "Na'urori: wataƙila suna da waya mai sauƙi kawai, ko kwamfutar ɗakin karatu mai ƙayyadadden lokaci",
      "Kuɗi: wuraren shiga intanet kyauta da imel kyauta kaɗai",
      "Sirri: ba a nuna ko raba kalmar sirri ko code na gaske a atisaye; a fita daga asusu a kwamfutocin da ake rabawa",
      "Sauri: ɗan mataki ɗaya a lokaci ɗaya, tare da atisaye da hannu sosai"
    ],
    prerequisites: "Babu. Wannan shi ne kwas na farko ga mutanen da suke sabbi a fasaha."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "A waya ko kwamfuta", action: "taɓawa, zamewa, danna linzamin kwamfuta, gungurawa da rubutu, da gyara kuskuren rubutu", standard: "ba tare da taimakon kowa ba" },
    { id: "O2", condition: "A inda kuke zama", action: "nemo wurin shiga intanet kyauta, haɗa waya da Wi-Fi, da duba ko kun cancanci Lifeline", standard: "kuna faɗin sunan wurin da lokutan buɗewarsa" },
    { id: "O3", condition: "Idan akwai abin da kuke son nema", action: "bincike a intanet da zaɓar sakamako amintacce", standard: "kuna tsallake tallace-tallace da rufe shafukan da ke da pop-up ko kyaututtuka" },
    { id: "O4", condition: "Ta amfani da asusun imel kyauta", action: "aika imel mai take (subject), gajeren saƙo da hoto ko fayil haɗe da shi", standard: "kuna duba adireshin, saƙon da fayil ɗin kafin ku aika" },
    { id: "O5", condition: "Idan kuna yin asusu ko kuna amfani da shi", action: "yin kalmar sirri mai ƙarfi da kare asusunku", standard: "ba tare da taɓa ba da code ga kowa ba, kuma kuna fita daga asusu a kwamfutocin da ake rabawa" },
    { id: "O6", condition: "Idan kun makale a wani aikin fasaha", action: "neman gajerun matakai daga mataimakin AI kyauta, da bayyana abin da kuke gani idan mataki bai dace ba", standard: "ba tare da rubuta kalmar sirri, code ko lambar sirri ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sabawa da fasaha da shiga intanet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Allon taɓawa, linzamin kwamfuta da madannin rubutu",
          minutes: 5,
          goal: "Taɓawa, zamewa, dannawa, gungurawa da rubutu a waya ko kwamfuta.",
          text: [
            "A waya ko tablet kuna amfani da yatsanku. Ku taɓa sau ɗaya don buɗe abu. Ku zame (ku ja yatsanku a kan allo) don motsawa sama, ƙasa ko gefe. Ku danna ku riƙe don ganin ƙarin zaɓuɓɓuka.",
            "A kwamfuta kuna amfani da linzamin kwamfuta (mouse) ko touchpad. Ku motsa shi don motsa kibiya a kan allo. Ku danna maɓallin hagu sau ɗaya don zaɓar abu. Ku danna sau biyu da sauri don buɗe wasu fayiloli. Ku juya ƙaramar dabaran, ko ku zame yatsu biyu a kan touchpad, don gungurawa.",
            "Madannin rubutu (keyboard) yana rubuta haruffa. Maɓallin Shift yana yin babban harafi. Backspace yana goge harafin da ke gaban cursor. Enter yana kai ku sabon layi ko yana aika bincike."
          ],
          steps: ["Waya: ku taɓa manhaja don buɗe ta, ku zame don gungurawa, ku danna maɓallin gida ko ku zame sama don komawa gida.", "Kwamfuta: ku motsa linzamin, ku danna sau ɗaya don zaɓa, ku gungura da dabaran.", "Madannin rubutu: ku rubuta sunanku na farko, ku yi amfani da Shift don babban harafi, ku yi amfani da Backspace don gyara kuskure."],
          words: [["Taɓawa (tap)", "taɓa allo sau ɗaya da sauri."], ["Zamewa (swipe)", "jan yatsanku a kan allo."], ["Dannawa (click)", "danna maɓallin linzamin kwamfuta sau ɗaya."], ["Cursor", "ƙaramin layi mai ƙyalli da ke nuna inda rubutunku zai bayyana."]],
          slides: [
            { title: "A waya ko tablet", bullets: ["Ku taɓa don buɗewa", "Ku zame don motsawa", "Ku danna ku riƙe don ƙarin zaɓuɓɓuka"] },
            { title: "A kwamfuta", bullets: ["Ku motsa linzamin don motsa kibiya", "Ku danna sau ɗaya don zaɓa", "Ku gungura da dabaran ko yatsu biyu"] },
            { title: "Muhimman abubuwan madannin rubutu", bullets: ["Shift: babban harafi", "Backspace: goge kuskure", "Enter: sabon layi ko bincike"] }
          ],
          tryIt: "A waya ko kwamfuta, ku buɗe kowace manhaja ko shiri, ku gungura ƙasa ku dawo sama, sannan ku rubuta sunanku na farko da babban harafi, ku gyara kuskure ɗaya da Backspace.",
          youCanNow: "taɓawa, zamewa, dannawa, gungurawa da rubutu a waya ko kwamfuta.",
          quickCheck: [
            { objective: "O1", q: "Mene ne ma'anar \"swipe\" (zamewa) a waya?", options: ["Jan yatsanku a kan allo", "Taɓawa sau biyu da sauri", "Danna maɓallin kunnawa", "Girgiza wayar"], answer: 0, why: "Zamewa ita ce jan yatsanku don motsawa sama, ƙasa ko gefe." },
            { objective: "O1", q: "Kuna buƙatar babban harafi a farkon sunanku. Wane maɓalli za ku riƙe?", options: ["Enter", "Shift", "Backspace", "Space"], answer: 1, why: "Maɓallin Shift yana yin babban harafi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Shiga intanet kyauta ko da ɗan kuɗi kaɗan",
          minutes: 5,
          goal: "Nemo wuri ɗaya na shiga intanet kyauta da sanin ragin Lifeline.",
          text: [
            "Ɗakunan karatu na jama'a suna ba da kwamfutoci da Wi-Fi kyauta. Cibiyoyin al'umma da yawa, cibiyoyin neman aiki da wasu gidajen abinci ma suna yi. Ku tambayi ma'aikata yadda ake yin rajista don amfani da kwamfuta da tsawon lokacin da za ku iya amfani da ita.",
            "Lifeline shiri ne na gwamnatin tarayyar Amurka da ke rage kuɗin wata-wata na waya ko intanet ga masu ƙaramin samu ko masu karɓar tallafi kamar SNAP ko Medicaid. Ragin da aka saba shi ne har zuwa $9.25 a wata. Kuna nema ta getinternet.gov, sannan ku tuntuɓi kamfanin waya ko intanet da ke cikin shirin. Adadi da ƙa'idoji suna iya canjawa, don haka ku duba lifelinesupport.org don sabon bayani.",
            "A Wi-Fi na jama'a, kada ku yi harkar banki ko ku rubuta kalmomin sirri na muhimman asusu idan za ku iya kauce wa hakan. Kada ku taɓa bari kwamfutar da ake rabawa ta ajiye kalmar sirrinku."
          ],
          steps: ["Ku kira ko ku ziyarci ɗakin karatu ko cibiyar al'umma ku tambayi game da kwamfutoci da Wi-Fi kyauta.", "Don haɗa waya da Wi-Fi: ku buɗe Settings, ku taɓa Wi-Fi, ku zaɓi hanyar sadarwar (network) ku rubuta kalmar sirrinta idan akwai.", "Idan kuɗi ya yi ƙaranci, ku duba ko kun cancanci Lifeline a lifelinesupport.org."],
          words: [["Wi-Fi", "hanyar haɗuwa da intanet ba tare da waya (igiya) ba."], ["Lifeline", "shirin gwamnatin tarayyar Amurka da ke rage kuɗin waya ko intanet ga waɗanda suka cancanta."], ["Wi-Fi na jama'a", "Wi-Fi kyauta da mutane da yawa ke amfani da shi a wurin jama'a."]],
          sources: [{ name: "Lifeline Support (USAC, karkashin kulawar FCC)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Wuraren shiga intanet kyauta", bullets: ["Kwamfutoci da Wi-Fi na ɗakin karatu na jama'a", "Cibiyoyin al'umma da cibiyoyin neman aiki", "Ku tambayi ma'aikata yadda ake rajista"] },
            { title: "Lifeline yana rage kuɗinku", bullets: ["Ga masu ƙaramin samu ko masu SNAP, Medicaid da sauransu", "Ragin da aka saba: har zuwa $9.25 a wata", "Ku nema a getinternet.gov; ku duba lifelinesupport.org"] },
            { title: "Tsaro a Wi-Fi na jama'a", bullets: ["Ku guji harkar banki a Wi-Fi na jama'a", "Kada ku bari kwamfutar da ake rabawa ta ajiye kalmar sirri"] }
          ],
          tryIt: "Ku nemo lokutan amfani da kwamfuta kyauta a ɗakin karatu ko cibiyar al'umma mafi kusa da ku. Idan kuna da waya, ku haɗa ta da Wi-Fi ta Settings, sannan Wi-Fi.",
          youCanNow: "nemo wurin shiga intanet kyauta, haɗuwa da Wi-Fi, da sanin inda za ku duba don rage kuɗin intanet.",
          quickCheck: [
            { objective: "O2", q: "Ban da ɗakunan karatu, a ina kuma za ku iya samun Wi-Fi kyauta?", options: ["A gida kaɗai", "A ɗakin ajiyar kuɗi na banki", "Cibiyoyin al'umma da cibiyoyin neman aiki", "Babu wani wuri"], answer: 2, why: "Cibiyoyin al'umma da yawa, cibiyoyin neman aiki da wasu gidajen abinci suna ba da Wi-Fi kyauta." },
            { objective: "O2", q: "Kuna amfani da Wi-Fi kyauta na wani shagon shayi. Me ya kamata ku guji yi?", options: ["Karanta labarai", "Duba yanayi", "Duba lokutan bas", "Harkar banki ta intanet"], answer: 3, why: "A Wi-Fi na jama'a, ku guji harkar banki da rubuta muhimman kalmomin sirri idan za ku iya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bincike a intanet da gane shafuka amintattu",
          minutes: 5,
          goal: "Neman bayani da yanke shawara ko za a iya amincewa da shafin intanet.",
          text: [
            "Injin bincike (search engine) kamar Google ko Bing yana nemo muku shafukan intanet. Ku rubuta 'yan muhimman kalmomi, kamar \"Oakland library hours\", a akwatin bincike ku danna Enter.",
            "Ba kowane sakamako ne amintacce ba. Sakamakon da aka rubuta \"Sponsored\" ko \"Ad\" tallace-tallace ne da aka biya. Shafukan gwamnatin Amurka na hukuma suna ƙarewa da .gov. Ku nemi ainihin sunan wurin a cikin adireshin shafin.",
            "Ku yi hankali da shafukan da ke da pop-up da yawa, ke cewa kun ci kyauta, ke neman ku sauke wani abu, ko ke neman bayananku na sirri. Ku rufe su ku koma baya."
          ],
          steps: ["Ku buɗe burauzar intanet ku rubuta 'yan muhimman kalmomi a akwatin bincike.", "Ku tsallake sakamakon da aka rubuta Sponsored ko Ad.", "Ku zaɓi sakamakon da adireshinsa ya dace da ainihin ƙungiyar ko ya ƙare da .gov.", "Ku rufe duk shafin da ke da pop-up, kyaututtuka ko neman saukewa."],
          words: [["Injin bincike (search engine)", "shafin intanet da ke nemo wasu shafuka, kamar Google ko Bing."], ["Sponsored", "tallan da aka biya da ake nunawa a sakamakon bincike."], ["Pop-up", "taga da ke bayyana ba zato a kan shafi."]],
          slides: [
            { title: "Yadda ake bincike", bullets: ["Ku rubuta 'yan muhimman kalmomi", "Misali: \"Oakland library hours\"", "Ku danna Enter"] },
            { title: "Alamun amincewa", bullets: ["Ba a rubuta Sponsored ko Ad ba", "Adireshin yana da ainihin sunan", "Shafukan gwamnati suna ƙarewa da .gov"] },
            { title: "Alamun gargaɗi", bullets: ["Pop-up masu yawa", "\"Kun ci kyauta!\"", "Yana neman ku sauke abu ko ku ba da bayanan sirri"] }
          ],
          tryIt: "Ku nemi lokutan buɗewar ɗakin karatu na jama'a da ke kusa da ku. Ku zaɓi sakamako daga shafin ɗakin karatun da kansa, ba talla ba, sannan ku rubuta lokutan.",
          youCanNow: "bincike a intanet da zaɓar shafi amintacce.",
          quickCheck: [
            { objective: "O3", q: "Wane adireshin shafi ne ya fi yiwuwa ya zama shafin hukuma na ofishin gwamnatin Amurka?", options: ["Wanda ke ƙarewa da .gov", "Wanda ke da pop-up da yawa", "Wanda aka rubuta \"Sponsored\"", "Wanda ke cewa kun ci kyauta"], answer: 0, why: "Shafukan gwamnatin Amurka na hukuma yawanci suna ƙarewa da .gov." },
            { objective: "O3", q: "Kuna neman lokutan buɗewar asibitinku. Sakamakon farko talla ne. Me za ku yi?", options: ["Ku danna tallan", "Ku tsallake shi ku zaɓi shafin asibitin da kansa", "Ku sauke abin da yake bayarwa", "Ku rubuta kalmar sirrinku a ciki"], answer: 1, why: "Tallace-tallace sakamako ne da aka biya; shafin asibitin da kansa ya fi aminci." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sabawa da fasaha da shiga intanet",
        questions: [
          { objective: "O1", q: "A waya, yaya ake buɗe manhaja?", options: ["Girgiza wayar", "Taɓa ta sau ɗaya", "Danna Backspace", "Kashe wayar"], answer: 1, why: "Taɓawa ɗaya tana buɗe manhaja." },
          { objective: "O1", q: "Wane maɓalli ne ke goge harafin da ke gaban cursor?", options: ["Shift", "Enter", "Backspace", "Space"], answer: 2, why: "Backspace yana goge harafin da ke gaban cursor." },
          { objective: "O2", q: "A ina za ku iya amfani da kwamfuta da Wi-Fi kyauta yawanci?", options: ["Tallar pop-up", "Shagon sayar da motoci", "Ɗakin ajiyar kuɗi na banki", "Ɗakin karatu na jama'a"], answer: 3, why: "Ɗakunan karatu na jama'a suna ba da kwamfutoci da Wi-Fi kyauta." },
          { objective: "O2", q: "Mene ne Lifeline?", options: ["Shirin gwamnatin tarayyar Amurka da ke rage kuɗin waya ko intanet ga waɗanda suka cancanta", "Wasan waya kyauta", "Wani nau'in ƙwayar cutar kwamfuta (virus)", "Injin bincike"], answer: 0, why: "Lifeline yana ba da ragi a kowane wata kan kuɗin waya ko intanet." },
          { objective: "O3", q: "An rubuta \"Sponsored\" a kan wani sakamakon bincike. Me hakan ke nufi?", options: ["Shafin gwamnati ne", "Talla ce da aka biya", "Koyaushe ita ce amsa mafi kyau", "Imel ɗinku ne"], answer: 1, why: "Sakamakon Sponsored tallace-tallace ne." }
        ]
      }
    },
    {
      name: "Babi na 2: Imel, kalmomin sirri da neman taimako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Aika imel tare da haɗaɗɗen fayil",
          minutes: 5,
          goal: "Rubuta da aika imel tare da hoto ko fayil haɗe da shi.",
          text: [
            "Imel yana ba ku damar aika saƙonni da fayiloli ga duk wanda ke da adireshin imel. Hidimomin imel kyauta sun haɗa da Gmail da Outlook.com. Ɗakin karatunku zai iya taimaka muku ku buɗe asusu.",
            "Imel yana da sassa huɗu: To (adireshin imel na mutumin), Subject (take: 'yan kalmomi da ke faɗin abin da imel ɗin yake game da shi), saƙon, da attachments (fayiloli ko hotunan da kuka haɗa). Alamar ƙugiyar takarda (paper clip) yawanci tana nufin haɗa fayil.",
            "Kafin ku danna Send, ku duba cewa adireshin daidai ne, ku karanta saƙonku sau ɗaya, kuma ku tabbata fayil ɗin da ya dace ne aka haɗa."
          ],
          steps: ["Ku buɗe imel ɗinku ku zaɓi Compose ko New message.", "Ku rubuta adireshin mutumin a To.", "Ku rubuta gajeren Subject.", "Ku rubuta gajeren saƙo mai ladabi.", "Ku taɓa ko ku danna ƙugiyar takarda, ku zaɓi hoto ko fayil, sannan ku danna Send."],
          words: [["Adireshin imel", "adireshi kamar name@example.com inda kuke karɓar imel."], ["Subject (take)", "gajeren sunan imel."], ["Attachment (haɗaɗɗen fayil)", "fayil ko hoton da ake aikawa tare da imel."]],
          slides: [
            { title: "Sassa huɗu na imel", bullets: ["To: adireshin imel ɗinsu", "Subject: 'yan kalmomi", "Saƙo", "Attachment: fayil ko hoto"] },
            { title: "Haɗa fayil", bullets: ["Ku nemi alamar ƙugiyar takarda", "Ku zaɓi hoton ko fayil ɗin", "Ku jira har ya gama shiga"] },
            { title: "Kafin ku danna Send", bullets: ["Adireshin daidai ne?", "Saƙon yana da ma'ana?", "Fayil ɗin da ya dace aka haɗa?"] }
          ],
          tryIt: "Ku aika imel ga aboki ko wani a iyali, tare da subject \"Practice email\" (imel na atisaye), saƙon layi ɗaya da hoto ɗaya haɗe da shi.",
          youCanNow: "rubuta da aika imel tare da haɗaɗɗen fayil.",
          quickCheck: [
            { objective: "O4", q: "A imel, me ake rubutawa a layin To?", options: ["Kalmar sirrinku", "Subject", "Adireshin imel na mutumin", "Hoton"], answer: 2, why: "Layin To yana ɗauke da adireshin imel na mutumin da kuke rubuta wa." },
            { objective: "O4", q: "Kun rubuta imel ɗinku amma kun manta hoton. Me za ku yi kafin ku aika?", options: ["Ku aika ku yi fata", "Ku goge imel ɗin", "Ku rubuta \"hoto yana zuwa\"", "Ku danna ƙugiyar takarda ku haɗa hoton"], answer: 3, why: "Alamar ƙugiyar takarda tana haɗa hoto ko fayil kafin ku danna Send." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin kalmar sirri mai ƙarfi da kiyaye asusu",
          minutes: 5,
          goal: "Yin kalmar sirri mai ƙarfi da sanin yadda ake kare asusunku.",
          text: [
            "Kalmar sirri mai ƙarfi doguwa ce kuma tana da wuyar tsammani. Hanya ɗaya mai sauƙi: ku haɗa kalmomi uku ko huɗu na bazata tare da lamba da alama, kamar \"Blue-Taco-River-58\". Kada ku yi amfani da sunanku, ranar haihuwarku ko \"password123\".",
            "Ku yi amfani da kalmar sirri daban don imel ɗinku, ba wadda kuke amfani da ita a wasu asusu ba. Imel ɗinku shi ne mabuɗin sake saita (reset) duk sauran asusu.",
            "Ku kunna tabbatarwa ta matakai biyu (two-step verification) idan asusunku yana da ita: bayan kalmar sirrinku, za ku kuma rubuta code da aka turo wayarku. Kada ku taɓa ba da wannan code ga duk wanda ya kira ku ko ya tura muku tes, ko da ya ce daga kamfanin yake."
          ],
          steps: ["Ku zaɓi kalmomi uku ko huɗu na bazata.", "Ku haɗa su ku ƙara lamba da alama.", "Ku yi amfani da ita don wannan asusu kaɗai.", "Ku kunna tabbatarwa ta matakai biyu a saitunan tsaro na asusunku.", "Kada ku taɓa raba code ɗin da aka turo wayarku."],
          words: [["Kalmar sirri (password)", "kalma ko jumla ta sirri da ke bari ku kaɗai ku shiga asusu."], ["Tabbatarwa ta matakai biyu (two-step verification)", "bincike na biyu, yawanci code da aka turo wayarku, bayan kalmar sirrinku."]],
          slides: [
            { title: "Kalmar sirri mai ƙarfi", bullets: ["Doguwa: kalmomi uku ko huɗu na bazata", "Ku ƙara lamba da alama", "Irin misali: Blue-Taco-River-58"] },
            { title: "Ku guji", bullets: ["Sunanku ko ranar haihuwarku", "\"password123\"", "Kalmar sirri ɗaya a ko'ina"] },
            { title: "Tabbatarwa ta matakai biyu", bullets: ["Kalmar sirri tare da code zuwa wayarku", "Ku kunna ta a saitunan tsaro", "Kada ku taɓa raba code ɗin da kowa"] }
          ],
          tryIt: "Ku ƙirƙiri kalmar sirri mai ƙarfi da kalmomi uku na bazata, lamba da alama. Kada ku yi amfani da wadda aka rubuta a nan. Ku rubuta abin tunatarwa (hint), ba kalmar sirrin ba, a wuri mai aminci a gida.",
          youCanNow: "yin kalmar sirri mai ƙarfi da kare asusunku da tabbatarwa ta matakai biyu.",
          quickCheck: [
            { objective: "O5", q: "Mene ne tabbatarwa ta matakai biyu?", options: ["Bincike na biyu, kamar code zuwa wayarku", "Rubuta kalmar sirrinku sau biyu", "Asusun imel guda biyu", "Sunan mai amfani mafi tsawo"], answer: 0, why: "Bayan kalmar sirrinku, za ku kuma rubuta code da aka turo wayarku." },
            { objective: "O5", q: "Kuna son kalmar sirri don sabon imel ɗinku. Wacce ta fi kyau?", options: ["Ranar haihuwarku", "Kalmomi uku na bazata da aka haɗa da lamba da alama", "Sunanku na farko", "Kalmar sirri ɗaya da ta bankinku"], answer: 1, why: "Dogayen kalmomi na bazata tare da lamba da alama suna da wuyar tsammani." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Neman taimakon fasaha daga mataimakin AI kyauta",
          minutes: 5,
          goal: "Amfani da mataimakin AI kyauta don samun taimako mataki-mataki kan matsalar fasaha.",
          text: [
            "Idan kun makale, mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini zai iya bayyana yadda ake yin abu, mataki-mataki, da kalmomi masu sauƙi. Kuna iya rubuta masa ko ku yi masa magana.",
            "Ku faɗi irin na'urar da kuke da ita da abin da kuke son yi. Misali: \"Ina da wayar Android. Yaya zan haɗa hoto a imel a Gmail? Ka ba ni gajerun matakai.\" Idan wani mataki bai yi daidai da allonku ba, ku faɗa masa abin da kuke gani.",
            "Kada ku taɓa rubuta kalmomin sirri, code, lambobin banki ko lambar Social Security ɗinku (lambar shaidar Amurka) a AI. Kuma ma'aikacin ɗakin karatu koyaushe mutum ne mai kyau da za a tambaya."
          ],
          steps: ["Ku buɗe mataimakin AI kyauta.", "Ku faɗi na'urarku da abin da kuke son yi.", "Ku nemi gajerun matakai masu sauƙi.", "Idan wani mataki bai dace ba, ku bayyana abin da kuke gani a allonku."],
          words: [["Mataimakin AI", "shirin kwamfuta da kuke hira da shi da kalmomin yau da kullum."], ["Na'ura (device)", "waya, tablet ko kwamfuta."]],
          slides: [
            { title: "AI zai iya zama mataimakinku a fasaha", bullets: ["Yana bayyana matakai da kalmomi masu sauƙi", "Kuna iya rubutu ko magana"] },
            { title: "Ku tambaya a sarari", bullets: ["Ku faɗi na'urarku", "Ku faɗi abin da kuke son yi", "Ku nemi gajerun matakai"] },
            { title: "Ku zauna lafiya", bullets: ["Babu kalmomin sirri, code ko lambobin banki", "Ma'aikatan ɗakin karatu ma za su iya taimakawa"] }
          ],
          tryIt: "Aikin ƙarshe: ku nemi lokutan buɗewar ɗakin karatunku a shafinsa na hukuma, ku ɗauki hoton allo ko hoto, sannan ku aika shi ta imel ga wani tare da saƙo mai ladabi. Idan kun makale, ku nemi matakai daga mataimakin AI. Ku fita daga asusu idan kun yi amfani da kwamfutar da ake rabawa.",
          youCanNow: "shiga intanet, nemo bayanai amintattu, aika su ta imel, da samun taimako lafiya idan kun makale.",
          quickCheck: [
            { objective: "O6", q: "Waɗanne abubuwa biyu ya kamata prompt ɗinku na farko na neman taimakon fasaha ya faɗa?", options: ["Kalmar sirrinku da imel ɗinku", "Shekarunku da adireshinku", "Na'urarku da abin da kuke son yi", "Bankinku da code ɗinku"], answer: 2, why: "AI yana buƙatar sanin na'urarku da burinku don ya ba da matakan da suka dace." },
            { objective: "O6", q: "AI ya ce ku taɓa \"Settings\" amma ba ku gan shi ba. Me za ku yi?", options: ["Ku haƙura", "Ku sake kunna wayar", "Ku rubuta wa AI kalmar sirrinku", "Ku faɗa wa AI abin da kuke gani a allonku"], answer: 3, why: "Bayyana allonku yana taimaka wa AI ya ba da matakan da suka dace." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Imel, kalmomin sirri da neman taimako",
        questions: [
          { objective: "O4", q: "Me alamar ƙugiyar takarda a imel take yi yawanci?", options: ["Tana goge imel ɗin", "Tana buga imel ɗin a takarda", "Tana haɗa fayil ko hoto", "Tana canja kalmar sirrinku"], answer: 2, why: "Ƙugiyar takarda tana ƙara haɗaɗɗen fayil." },
          { objective: "O5", q: "Wace kalmar sirri ce ta fi ƙarfi?", options: ["password123", "Ranar haihuwarku", "Sunanku na farko", "Kalmomi uku na bazata tare da lamba da alama"], answer: 3, why: "Dogayen kalmomin sirri na bazata suna da wuyar tsammani." },
          { objective: "O5", q: "Wani ya kira ya ce daga kamfanin imel ɗinku yake, yana neman code ɗin da aka turo wayarku. Ku:", options: ["Kada ku taɓa raba shi, ku katse wayar", "Karanta masa shi", "Tura masa shi ta tes", "Saka shi a intanet"], answer: 0, why: "Wannan code yana kare asusunku; kamfanoni na gaske ba sa neman sa." },
          { objective: "O5", q: "Me yasa kalmar sirrin imel ɗinku za ta bambanta da sauran kalmomin sirrinku?", options: ["Tana da kyan gani", "Imel zai iya sake saita sauran asusunku", "Ta fi gajarta", "Doka ta wajabta hakan"], answer: 1, why: "Idan wani ya shiga imel ɗinku, zai iya sake saita sauran asusu." },
          { objective: "O6", q: "Wace ce hanya mai kyau ta neman taimakon fasaha daga AI?", options: ["\"taimako\"", "\"Ga kalmar sirrina, gyara shi\"", "\"Ina da wayar Android. Yaya zan haɗa hoto a Gmail? Gajerun matakai.\"", "\"waya\""], answer: 2, why: "Tana faɗin na'urar, aikin da tsarin amsar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙwarewar Fasaha ga Masu Farawa",
    questions: [
      { objective: "O1", q: "Don motsawa sama da ƙasa a shafi a waya, kuna:", options: ["Zamewa", "Girgiza ta", "Danna Shift", "Kashe ta"], answer: 0, why: "Zamewa tana gungura allo." },
      { objective: "O1", q: "A kwamfuta, danna maɓallin hagu na linzamin sau ɗaya:", options: ["Yana kashe ta", "Yana zaɓar abu", "Yana goge komai", "Yana buga shafin a takarda"], answer: 1, why: "Danna sau ɗaya yana zaɓa." },
      { objective: "O1", q: "Cursor yana nuna:", options: ["Lokaci", "Batir", "Inda rubutunku zai bayyana", "Kalmar sirrinku"], answer: 2, why: "Layi mai ƙyallin yana nuna inda rubutu zai shiga." },
      { objective: "O2", q: "Don haɗa waya da Wi-Fi, yawanci kuna buɗe:", options: ["Kyamara", "Na'urar lissafi (calculator)", "Wasa", "Settings, sannan Wi-Fi"], answer: 3, why: "Saitunan Wi-Fi suna cikin manhajar Settings." },
      { objective: "O2", q: "Wa zai iya neman Lifeline?", options: ["Masu ƙaramin samu ko masu karɓar tallafi kamar SNAP ko Medicaid", "Kamfanoni kaɗai", "Mutanen da suka haura shekara 90 kaɗai", "Duk wanda ya biya kuɗi"], answer: 0, why: "Lifeline ya dogara ne kan samun kuɗi ko kasancewa cikin wasu shirye-shiryen tallafi." },
      { objective: "O2", q: "A ina za ku duba sabon adadin Lifeline da ƙa'idojinsa?", options: ["Tes daga baƙo", "lifelinesupport.org", "Tallar pop-up", "Sharhi a kafar sada zumunta"], answer: 1, why: "Lifeline Support shi ne shafin hukuma na shirin." },
      { objective: "O2", q: "A Wi-Fi na jama'a, ya fi kyau ku guji:", options: ["Karanta labarai", "Duba yanayi", "Harkar banki ta intanet", "Neman lokutan ɗakin karatu"], answer: 2, why: "Ayyuka masu muhimmanci sun fi aminci a haɗin intanet na sirri." },
      { objective: "O3", q: "Injin bincike shi ne:", options: ["Wani sashen mota", "Manhajar imel", "Kalmar sirri", "Shafin da ke nemo wasu shafukan intanet, kamar Google ko Bing"], answer: 3, why: "Injunan bincike suna nemo muku shafukan intanet." },
      { objective: "O3", q: "Shafukan gwamnatin Amurka na hukuma yawanci suna ƙarewa da:", options: [".gov", ".win", ".prize", ".xyz"], answer: 0, why: ".gov na shafukan gwamnatin Amurka ne." },
      { objective: "O3", q: "Wani shafi ya ce \"Kun ci kyauta! Ku sauke yanzu!\" Ya kamata ku:", options: ["Sauke shi", "Rufe shafin ku koma baya", "Rubuta lambar bankinku", "Raba shi da abokai"], answer: 1, why: "Kyaututtuka da neman saukewa alamun gargaɗi ne." },
      { objective: "O4", q: "A imel, Subject shi ne:", options: ["Adireshin mutumin", "Haɗaɗɗen fayil", "'Yan kalmomi da ke faɗin abin da imel ɗin yake game da shi", "Kalmar sirrinku"], answer: 2, why: "Subject shi ne gajeren take na imel." },
      { objective: "O4", q: "Kafin ku danna Send, ya kamata ku duba:", options: ["Babu komai", "Irin rubutun haruffa kaɗai", "Yanayi", "Adireshin, saƙon da haɗaɗɗen fayil"], answer: 3, why: "Ɗan bincike da sauri yana hana kurakurai." },
      { objective: "O4", q: "Wanne ne hidimar imel kyauta?", options: ["Gmail", "Na'urar fax", "Firinta", "Router na Wi-Fi"], answer: 0, why: "Gmail da Outlook.com hidimomin imel ne kyauta." },
      { objective: "O5", q: "Wace kalmar sirri ce ta fi rauni?", options: ["Blue-Taco-River-58", "password123", "Lamp!Garden!Seven!42", "Moon-Fork-Cactus-19"], answer: 1, why: "\"password123\" tana ɗaya daga cikin kalmomin sirri da aka fi tsammani." },
      { objective: "O5", q: "Tabbatarwa ta matakai biyu tana nufin:", options: ["Rubuta kalmar sirrinku sau biyu", "Mutane biyu suna raba asusu", "Bincike na biyu, kamar code zuwa wayarku", "Tafiya taku biyu"], answer: 2, why: "Tana ƙara bincike na biyu bayan kalmar sirrinku." },
      { objective: "O5", q: "Idan kun gama a kwamfutar ɗakin karatu, ya kamata ku:", options: ["Bar imel ɗinku a buɗe", "Ajiye kalmar sirrinku", "Rubuta kalmar sirrinku a takarda mai manne", "Fita daga asusu ku rufe burauzar"], answer: 3, why: "Fita daga asusu yana hana mutum na gaba shiga asusunku." },
      { objective: "O6", q: "Wanne ne kada ku TAƁA rubutawa mataimakin AI?", options: ["Code ɗin da aka turo wayarku", "\"Yaya zan haɗa hoto?\"", "\"Ina da iPhone\"", "\"Ka ba ni gajerun matakai\""], answer: 0, why: "Code da kalmomin sirri dole su kasance a sirri." },
      { objective: "O6", q: "Wani mataki da AI ya bayar bai yi daidai da allonku ba. Ya kamata ku:", options: ["Haƙura", "Faɗa masa abin da kuke gani a allonku", "Sake kunna intanet", "Rubuta kalmar sirrinku"], answer: 1, why: "Bayyana allonku yana taimaka masa ya ba da matakan da suka dace." },
      { objective: "O6", q: "Wa kuma zai iya taimaka muku da fasaha kyauta?", options: ["Tallar pop-up", "Baƙon da ya tura muku tes", "Ma'aikatan ɗakin karatu", "Wanda ke neman code ɗinku"], answer: 2, why: "Ma'aikatan ɗakin karatu suna taimaka wa mutane da kwamfutoci kowace rana." },
      { objective: "O6", q: "Prompt na farko mai kyau don neman taimakon fasaha ya haɗa da:", options: ["Lambar bankinku", "Kalma ɗaya kawai", "Lambar Social Security ɗinku", "Na'urarku da abin da kuke son yi"], answer: 3, why: "Wannan yana ba AI abin da yake buƙata don ya taimaka." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      7,
      8,
      10,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Bincike amintacce",
        objective: "O3",
        notYet: "An yi amfani da talla ko shafin da ba na ɗakin karatun da kansa ba.",
        meets: "An sami lokutan buɗewa a shafin hukuma na ɗakin karatun.",
        exceeds: "Zai iya faɗin yadda ya san shafin na hukuma ne."
      },
      {
        name: "Hoton allo ko hoto",
        objective: "O1",
        notYet: "Babu hoton allo ko hoton lokutan.",
        meets: "Hoton allo ko hoto mai kyau da ke nuna lokutan.",
        exceeds: "Ya ɗauka ba tare da taimako ba."
      },
      {
        name: "An aika imel",
        objective: "O4",
        notYet: "Imel ɗin ba shi da subject, saƙo ko haɗaɗɗen fayil.",
        meets: "An aika tare da subject, gajeren saƙo mai ladabi da hoton a haɗe.",
        exceeds: "Mutumin ya tabbatar ya karɓa kuma ya ga hoton."
      },
      {
        name: "Tsaron asusu",
        objective: "O5",
        notYet: "Kalmar sirri mai rauni, ko bai fita daga asusu a kwamfutar da ake rabawa ba.",
        meets: "Asusun yana da kalmar sirri mai ƙarfi, kuma ya fita daga asusu a duk kwamfutar da ake rabawa.",
        exceeds: "An kunna tabbatarwa ta matakai biyu."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka aika imel ko suka nemi bayani da kansu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka nemi Lifeline ko suka fara amfani da kwamfutocin ɗakin karatu kyauta",
      "Masu koyo da suka fara wani kwas na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani (smartphone), ko kwamfutar ɗakin karatu ko ta cibiyar al'umma",
      "Asusun imel kyauta (Gmail ko Outlook.com); ma'aikatan ɗakin karatu za su iya taimakawa a buɗe shi",
      "Mataimakin AI kyauta don taimakon fasaha",
      "Takarda da alƙalami don rubutu da abubuwan tunatar da kalmar sirri (ba kalmar sirrin da kanta ba)",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku tafi a hankali ku bar masu koyo su yi kowane mataki da hannayensu; kada ku karɓe linzamin kwamfuta ko waya daga hannunsu.",
      "Ku shirya ma'aikata su taimaka wa masu koyo su buɗe asusun imel kafin Darasi na 4.",
      "Kada ku taɓa neman masu koyo su nuna ko su faɗi kalmomin sirrinsu ko code ɗinsu.",
      "Kafin masu koyo su tafi, ku duba cewa kowanne ya fita daga asusunsa a kwamfutocin da ake rabawa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
