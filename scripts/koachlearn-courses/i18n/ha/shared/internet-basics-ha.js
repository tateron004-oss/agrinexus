"use strict";

// Koach Learn course, Hausa (ha) translation of shared/internet-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FTC_TECH = { name: "FTC: Yadda ake gane, gujewa da kai rahoton zambar taimakon fasaha (tech support scams)", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" };

module.exports = {
  id: "internet-basics-ha",
  lang: "ha",
  translationOf: "internet-basics",
  category: "Seniors and Technology",
  name: "Tushen Amfani da Intanet",
  skills: "Haɗawa da Wi-Fi, Amfani da burauzar intanet, Buɗewa da sauya shafuka (tabs), Bincike a intanet, Karanta adireshin shafi lafiya, Ajiye shafukan da kuka fi so",
  outcome: "haɗa waya ko kwamfuta da Wi-Fi, buɗe burauzar intanet, zuwa shafi ta adireshinsa, neman abin da kuke buƙata, bambance adireshin shafi mai aminci da mai haɗari, da ajiye shafin da kuke yawan amfani da shi don ku koma gare shi da taɓawa ɗaya.",
  about: [
    "Intanet yana ba ku damar duba yanayi, nemo lokutan aikin ofishin likita, karanta labarai, duba jadawalin bas da ganin hotunan iyali. Wannan kwas ɗin yana farawa daga farko sosai, kuma bai ɗauka cewa kun taɓa amfani da intanet ba.",
    "A Babi na 1 za ku koyi mene ne intanet, yadda ake haɗawa da Wi-Fi, da yadda ake amfani da burauzar intanet. A Babi na 2 za ku yi bincike, ku koyi karanta adireshin shafi don ku guji shafukan bogi da tallace-tallacen da ke tsoratarwa (pop-up), sannan ku ajiye shafukan da kuka fi amfani da su.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku ajiye waya, tablet ko kwamfuta kusa da ku don ku gwada kowane mataki. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku shirya wata ƙaramar fita. Ku haɗa da Wi-Fi, ku buɗe burauzar intanet, ku nemi wurin da kuke son ziyarta, kamar wurin shakatawa (park), gidan tarihi (museum) ko ɗakin karatu. Ku buɗe shafinsa na hukuma, ku duba lokutan aikinsa da adireshinsa, ku buɗe shafi (tab) na biyu mai yanayin gobe, ku ƙara girman rubutu idan kuna buƙata, sannan ku ajiye shafin hukuma (bookmark) don ku sake samun sa da taɓawa ɗaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke sababbi a intanet ko masu amfani da shi ta manhaja ɗaya ko biyu kawai: tsofaffi, masu kula da su, mutanen da ke dawowa cikin al'umma, sababbin isowa, da duk wanda ke son shiga intanet da ƙarfin gwiwa.",
    startingPoint: "Suna iya kunna waya, tablet ko kwamfuta, kuma su taɓa ko su danna. Da yawa ba su taɓa haɗawa da Wi-Fi da kansu ba, ko rubuta adireshin shafi, ko amfani da tabs ko bookmarks, ko duba ko adireshin shafi na gaske ne.",
    gap: "Yanzu ana samun lokutan aiki, taswira, yanayi, lafiya, tallafi da sayayya a intanet. Mutanen da ba sa iya haɗawa, yin bincike, da bambance shafi na gaske da na bogi suna dogara ga wasu, suna rasa bayanai, suna ƙare data ɗin wayarsu, ko kuma suna faɗawa tarkon pop-up na bogi da shafukan da ke kwaikwayon na gaske.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomi kamar router, burauza, tab da domain",
      "Na'urori: waya, tablet ko kwamfuta; akwai matakai don iPhone, Android da kwamfuta",
      "Lokaci: kusan minti 5 kowane darasi, kusan minti 60 gaba ɗaya",
      "Kuɗi: Wi-Fi kyauta a gida, ɗakin karatu ko gidan shayi (café); babu manhajoji na kuɗi",
      "Aminci: babu banki ko bayanan sirri a Wi-Fi na jama'a lokacin atisaye"
    ],
    prerequisites: "Babu. Kwas ɗin \"Smartphone and Tablet\" (Wayar Zamani da Tablet) ko \"Basic Computer Skills\" (Ƙwarewar Kwamfuta ta Farko) yana taimaka wa masu koyo da ba su taɓa amfani da na'ura ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ba tare da rubutattun bayanai ba", action: "bayyana mene ne intanet da web, da manyan hanyoyi biyu da na'ura ke haɗawa", standard: "kuna ambaton Wi-Fi da data na waya (mobile data) daidai, da lokacin da Wi-Fi ke ajiye data ɗin wayarku" },
    { id: "O2", condition: "Idan aka ba ku sunan network da kalmar sirri (password)", action: "haɗa wayarku, tablet ko kwamfuta da Wi-Fi, da faɗin abin da za ku guji yi a Wi-Fi na jama'a", standard: "an haɗa ba tare da taimako ba, kuma an ambaci banki da bayanan sirri a matsayin abubuwan da za a guje wa" },
    { id: "O3", condition: "Ta amfani da burauzar intanet", action: "buɗe shafi ta rubuta adireshinsa, sannan amfani da maɓallin komawa baya, tabs da zuƙowa (zoom)", standard: "shafin da ya dace a buɗe, an buɗe tab na biyu, kuma an ƙara girman rubutu" },
    { id: "O4", condition: "Idan akwai abin da kuke buƙatar nemowa", action: "yin bincike da 'yan kalmomi masu muhimmanci da zaɓar sakamako mai amfani wanda ba talla ba ne", standard: "kuna karanta adireshin shafin kafin ku buɗe sakamakon" },
    { id: "O5", condition: "Idan aka ba ku adireshin shafuka, pop-up mai tsoratarwa da shafin da kuke yawan amfani da shi", action: "bambance adireshin shafi mai aminci da mai haɗari, rufe pop-up na bogi, da ajiye shafin hukuma (bookmark) don ku koma gare shi lafiya", standard: "kuna zaɓar daidai kowane lokaci kuma kuna sake buɗe shafin da aka ajiye da taɓawa ɗaya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shiga intanet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne intanet",
          minutes: 4,
          goal: "Bayyana intanet, web da yadda na'ura ke haɗawa.",
          text: [
            "Intanet babban hanyar sadarwa ne (network) da ke haɗa kwamfutoci da wayoyi a duk faɗin duniya don su raba bayanai. World Wide Web, ko web, shi ne sashen da kuke ziyarta da burauzar intanet: shafuka masu rubutu, hotuna da bidiyo. Imel da kiran bidiyo ma suna tafiya ta intanet.",
            "Na'urarku tana haɗawa ta ɗaya daga cikin manyan hanyoyi biyu. Wi-Fi haɗi ne marar waya daga wani akwati da ake kira router, a gida, a ɗakin karatu ko a gidan shayi. Data na waya (mobile data) yana zuwa daga hasumiyoyin kamfanin wayarku, kuma yana cikin tsarin biyan kuɗin wayarku.",
            "Wi-Fi na gida yawanci ba ya cinye data ɗin tsarin wayarku, don haka zaɓi ne mai kyau don kallon bidiyo da manyan saukarwa."
          ],
          words: [["Intanet", "hanyar sadarwa ta duniya da ke haɗa kwamfutoci da wayoyi."], ["Web (World Wide Web)", "shafukan intanet da kuke ziyarta da burauza."], ["Router", "akwatin da ke fitar da siginar Wi-Fi."], ["Data na waya (mobile data)", "intanet daga hasumiyoyin kamfanin wayarku, wanda ke cikin tsarin wayarku."]],
          slides: [
            { title: "Intanet da web", bullets: ["Intanet: hanyar sadarwa ta duniya ta na'urori", "Web: shafukan da kuke ziyarta da burauza", "Imel da kiran bidiyo ma suna amfani da intanet"] },
            { title: "Hanyoyi biyu na haɗawa", bullets: ["Wi-Fi: marar waya, daga router", "Data na waya: daga hasumiyoyi, yana cikin tsarin wayarku"] },
            { title: "Shawara", bullets: ["Ku yi amfani da Wi-Fi a gida don bidiyo da manyan saukarwa", "Yana ajiye data ɗin tsarin wayarku"] }
          ],
          tryIt: "A wayarku ko tablet, ku duba saman allo. Ku nemo alamar Wi-Fi (layuka masu lanƙwasa) ko alamar data na waya (sanduna ko haruffa kamar 5G). Wanne ne ke kunne yanzu?",
          youCanNow: "bayyana mene ne intanet da web, da faɗin ko na'urarku tana kan Wi-Fi ko data na waya.",
          quickCheck: [
            { objective: "O1", q: "Mene ne data na waya (mobile data)?", options: ["Wani akwati a gidanku", "Jerin shafukan da kuka ajiye", "Intanet daga hasumiyoyin kamfanin wayarku, wanda ke cikin tsarin wayarku", "Wani nau'in burauzar intanet"], answer: 2, why: "Data na waya yana zuwa daga hasumiyoyi kuma yana cikin tsarin wayarku." },
            { objective: "O1", q: "Kuna son kallon dogon bidiyo a wayarku a gida. Wane haɗi za ku yi amfani da shi?", options: ["Wi-Fi na gida, don kada ku cinye data ɗin tsarin wayarku", "Data na waya, domin koyaushe kyauta ne", "Bidiyo ba ya buƙatar haɗi", "Bookmark"], answer: 0, why: "Wi-Fi na gida yawanci ba ya cinye data ɗin tsarin wayarku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Haɗawa da Wi-Fi",
          minutes: 5,
          goal: "Haɗa waya, tablet ko kwamfuta da Wi-Fi.",
          text: [
            "Don haɗawa da Wi-Fi, kuna buƙatar sunan network da kalmar sirrinsa (password). A gida, sau da yawa ana buga su biyun a kan wani ɗan takarda mai manne (sticker) a jikin router. A ɗakin karatu ko gidan shayi, ku tambayi ma'aikata ko ku nemi rubutaccen sanarwa.",
            "A iPhone ko iPad: ku buɗe Settings, ku taɓa Wi-Fi, ku taɓa sunan network ɗin, ku rubuta kalmar sirri. A Android: ku buɗe Settings, ku taɓa Network and internet ko Connections, sannan Wi-Fi, ku zaɓi network ɗin, ku rubuta kalmar sirri. A kwamfuta: ku danna alamar Wi-Fi kusa da agogo, ku zaɓi network ɗin, ku rubuta kalmar sirri.",
            "Wi-Fi na jama'a yana da amfani, amma wasu mutane ma suna amfani da shi. A Wi-Fi na jama'a, ku guji harkokin banki kuma kada ku rubuta bayanan sirri. Ku haɗa da network ɗin da ma'aikata suka ba ku sunansa kawai, ba masu baƙon suna ba."
          ],
          steps: ["Ku nemo sunan network da kalmar sirri (sticker na router, ma'aikata ko sanarwa).", "Ku buɗe Settings, sannan Wi-Fi (a kwamfuta, ku danna alamar Wi-Fi kusa da agogo).", "Ku taɓa ko ku danna sunan network ɗin.", "Ku rubuta kalmar sirri a hankali; manyan haruffa suna da muhimmanci.", "Ku jira alamar Wi-Fi ta bayyana a sama."],
          words: [["Sunan network", "sunan da haɗin Wi-Fi ke nunawa a jeri, wanda ake kira SSID."], ["Kalmar sirrin Wi-Fi (password)", "lambar da kuke rubutawa don haɗawa da Wi-Fi."], ["Wi-Fi na jama'a", "Wi-Fi da mutane da yawa ke amfani da shi a wurare kamar ɗakin karatu da gidan shayi."]],
          slides: [
            { title: "Kuna buƙatar abubuwa biyu", bullets: ["Sunan network", "Kalmar sirri (sticker na router, ma'aikata ko sanarwa)"] },
            { title: "Yadda ake haɗawa", bullets: ["Waya ko tablet: Settings, sannan Wi-Fi", "Kwamfuta: alamar Wi-Fi kusa da agogo", "Ku zaɓi network, ku rubuta kalmar sirri"] },
            { title: "Aminci a Wi-Fi na jama'a", bullets: ["Babu banki ko bayanan sirri", "Ku haɗa da sunan da ma'aikata suka ba ku kawai"] }
          ],
          tryIt: "Ku buɗe saitunan Wi-Fi ɗinku (Settings) ku nemo jerin networks. Idan kuna gida ko a ɗakin karatu, ku haɗa da wanda ya dace. Ku duba cewa alamar Wi-Fi ta bayyana a sama.",
          youCanNow: "haɗawa da Wi-Fi da amfani da Wi-Fi na jama'a lafiya.",
          quickCheck: [
            { objective: "O2", q: "Waɗanne abubuwa biyu kuke buƙata don haɗawa da Wi-Fi?", options: ["Imel ɗinku da lambar wayarku", "Sunan network da kalmar sirrinsa", "Burauza da bookmark", "Tab da injin bincike"], answer: 1, why: "Kuna zaɓar network ta sunansa kuma ku rubuta kalmar sirrinsa." },
            { objective: "O2", q: "A gidan shayi, kun ga networks biyu: ɗaya wanda ma'aikata suka faɗa, da wani mai suna \"FREE_FAST_WIFI_123\". Me za ku yi?", options: ["Ku haɗa da mai baƙon sunan domin ya ce kyauta ne", "Ku haɗa da su biyun lokaci ɗaya", "Ku rubuta bayanan bankinku don gwada mai baƙon sunan", "Ku haɗa da network ɗin da ma'aikata suka ba ku kawai"], answer: 3, why: "Ku haɗa da network ɗin da ma'aikata suka ba ku sunansa kawai, ba masu baƙon suna ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Amfani da burauzar intanet",
          minutes: 5,
          goal: "Buɗe shafi ta adireshinsa da kewayawa da maɓallin komawa baya da tabs.",
          text: [
            "Burauzar intanet (web browser) ita ce manhajar da kuke amfani da ita don ziyartar shafukan intanet. Sanannu sun haɗa da Chrome, Safari, Edge da Firefox. A sama akwai wurin adireshi (address bar), wani dogon akwati inda kuke rubuta adireshin shafi kamar weather.gov sannan ku danna Enter ko Go.",
            "Maɓallai masu amfani: kibiyar komawa baya tana mayar da ku shafin da kuka kasance a kai; kibiya mai zagaye tana sake loda shafin (reload). Tabs suna ba ku damar buɗe shafuka da yawa lokaci ɗaya, kamar fayiloli a kan tebur. Ku buɗe sabon tab da maɓallin ƙari (+), kuma ku sauya ta taɓa ko danna wani tab.",
            "Idan rubutu ya yi ƙanƙanta sosai, kuna iya zuƙowa (zoom). A kwamfuta, ku riƙe Ctrl ku danna + (Command da + a Mac); Ctrl da - yana ƙanƙanta shi. A waya, ku buɗe yatsu biyu daga juna a kan allo."
          ],
          steps: ["Ku buɗe burauza (Chrome, Safari, Edge ko Firefox).", "Ku taɓa wurin adireshi a sama.", "Ku rubuta adireshin shafi, kamar weather.gov, ku danna Enter ko Go.", "Ku yi amfani da kibiyar komawa baya don komawa.", "Ku danna + don buɗe sabon tab.", "Zuƙowa: Ctrl da + (Command da + a Mac), ko ku buɗe yatsu biyu a waya."],
          words: [["Burauzar intanet (web browser)", "manhajar da kuke amfani da ita don ziyartar shafukan intanet, kamar Chrome, Safari, Edge ko Firefox."], ["Wurin adireshi (address bar)", "akwatin da ke saman burauza inda kuke rubuta adireshin shafi."], ["Tab", "shafi ɗaya da ke buɗe a burauza; kuna iya buɗe da yawa lokaci ɗaya."], ["Zuƙowa (zoom)", "ƙara ko rage girman abin da ke kan allo."]],
          slides: [
            { title: "Burauza", bullets: ["Chrome, Safari, Edge ko Firefox", "Wurin adireshi a sama", "Ku rubuta adireshi, ku danna Enter ko Go"] },
            { title: "Maɓallai masu amfani", bullets: ["Kibiyar komawa baya: shafin da ya gabata", "Kibiya mai zagaye: sake lodawa", "+ yana buɗe sabon tab"] },
            { title: "Ƙara girma", bullets: ["Kwamfuta: Ctrl da + (Command da + a Mac)", "Waya: ku buɗe yatsu biyu daga juna"] }
          ],
          tryIt: "Ku buɗe burauza ku rubuta weather.gov a wurin adireshi. Sannan ku buɗe sabon tab ku je shafin ɗakin karatun yankinku. Ku sauya tsakanin tabs ɗin biyu kuma ku ƙara girman rubutu a ɗaya daga cikinsu.",
          youCanNow: "buɗe shafuka ta adireshinsu, amfani da maɓallin komawa baya, sauya tabs da ƙara girman rubutu.",
          quickCheck: [
            { objective: "O3", q: "Me kibiya mai zagaye a burauza ke yi?", options: ["Tana rufe burauza", "Tana buɗe sabon tab", "Tana ajiye bookmark", "Tana sake loda shafin"], answer: 3, why: "Kibiya mai zagaye tana sake loda shafin da kuke kai." },
            { objective: "O3", q: "Kuna karanta yadda ake girki kuma kuna son duba yanayi ba tare da rasa shafin girkin ba. Me za ku yi?", options: ["Ku buɗe sabon tab da maɓallin ƙari (+)", "Ku rufe shafin girkin", "Ku kashe Wi-Fi", "Ku sake kunna na'urar"], answer: 0, why: "Tabs suna ba ku damar buɗe shafuka da yawa lokaci ɗaya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shiga intanet",
        questions: [
          { objective: "O1", q: "Mene ne web?", options: ["Wani nau'in waya (cable)", "Gidan gizo-gizo kawai", "Kuɗin wayarku", "Shafukan da kuke ziyarta da burauza"], answer: 3, why: "Web shi ne shafukan da kuke ziyarta da burauza." },
          { objective: "O2", q: "A ina ake yawan buga kalmar sirrin Wi-Fi na gida?", options: ["A kan rimot ɗin talabijin", "A kan sticker a jikin router", "A kan murfin wayarku", "A jarida"], answer: 1, why: "Router sau da yawa yana da suna da kalmar sirri a kan sticker." },
          { objective: "O2", q: "A kwamfuta, a ina kuke yawan dannawa don haɗawa da Wi-Fi?", options: ["Kwandon shara", "Alamar Wi-Fi kusa da agogo", "Firinta", "Kyamara"], answer: 1, why: "Alamar Wi-Fi kusa da agogo tana nuna networks." },
          { objective: "O2", q: "Kuna kan Wi-Fi na gidan shayi. Me ya kamata ku guje wa?", options: ["Duba yanayi", "Karanta labarai", "Harkokin banki a intanet", "Neman yadda ake girki"], answer: 2, why: "Ana raba Wi-Fi na jama'a, don haka ku guji banki da bayanan sirri." },
          { objective: "O3", q: "A ina kuke rubuta adireshin shafi kamar weather.gov?", options: ["A kyamara", "A saƙon tes", "A na'urar lissafi (calculator)", "A wurin adireshi a saman burauza"], answer: 3, why: "Wurin adireshi yana kai ku shafi." }
        ]
      }
    },
    {
      name: "Babi na 2: Nemo abubuwa da zama lafiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bincike a intanet",
          minutes: 5,
          goal: "Neman wani takamaiman abu da buɗe sakamako mai amfani.",
          text: [
            "Idan ba ku san adireshin shafi ba, ku nemi shi. Ku rubuta 'yan kalmomi masu muhimmanci a wurin adireshi ko a shafin bincike kamar Google ko Bing, sannan ku danna Enter. Misali: \"Springfield public library hours\" (lokutan aikin ɗakin karatu na Springfield).",
            "Shafin sakamako yana nuna jerin hanyoyin haɗi (links). Kowanne yana da take mai shuɗi, adireshin shafin a ƙananan haruffa, da ɗan gajeren bayani. Ku karanta adireshin shafin kafin ku taɓa. Sakamakon da ke sama masu alamar \"Sponsored\" ko \"Ad\" tallace-tallace ne da aka biya.",
            "Kuna kuma iya yin bincike da muryarku. Ku taɓa alamar makirufo a akwatin bincike ku faɗi abin da kuke so, kamar \"weather tomorrow\" (yanayin gobe)."
          ],
          steps: ["Ku taɓa wurin adireshi ko akwatin bincike.", "Ku rubuta 'yan kalmomi masu muhimmanci, kamar wurin, garin da abin da kuke so.", "Ku danna Enter ko maɓallin bincike.", "Ku tsallake sakamakon da ke da alamar Sponsored ko Ad.", "Ku karanta adireshin shafin, sannan ku taɓa sakamakon da kuke so."],
          words: [["Bincike (search)", "rubuta kalmomi don nemo shafukan intanet game da su."], ["Sakamako (results)", "jerin shafukan intanet da binciken ya samo."], ["Hanyar haɗi (link)", "kalmomi ko hoto da kuke taɓawa don zuwa wani shafi."]],
          slides: [
            { title: "Ku yi bincike da kalmomi masu muhimmanci", bullets: ["\"Springfield public library hours\"", "Ku rubuta a wurin adireshi ko a Google ko Bing"] },
            { title: "Karanta sakamako", bullets: ["Take mai shuɗi, adireshin shafi, gajeren bayani", "Sponsored ko Ad = an biya", "Ku karanta adireshin kafin ku taɓa"] },
            { title: "Ku yi amfani da muryarku", bullets: ["Ku taɓa makirufo", "Ku ce: \"weather tomorrow\" (yanayin gobe)"] }
          ],
          tryIt: "Ku nemi lokutan buɗewar wani wuri kusa da ku, kamar kantin magani ko wurin shakatawa. Ku tsallake duk wani talla, ku buɗe sakamakon hukuma, ku nemo lokutan.",
          youCanNow: "yin bincike a intanet da zaɓar sakamako mai amfani wanda ba talla ba ne.",
          quickCheck: [
            { objective: "O4", q: "A shafin sakamako, me ƙananan haruffan da ke ƙarƙashin kowane take mai shuɗi ke nunawa?", options: ["Adireshin shafin", "Yanayi", "Kalmar sirrinku", "Farashin shafin"], answer: 0, why: "Kowane sakamako yana nuna adireshin shafinsa a ƙananan haruffa, don ku karanta shi kafin ku taɓa." },
            { objective: "O4", q: "Hannayenku suna da aiki kuma kuna son yanayin gobe. Me za ku yi?", options: ["Ku rubuta dogon labari a akwatin bincike", "Ku buɗe bookmark na shafin sayayya", "Ku taɓa makirufo a akwatin bincike ku ce \"weather tomorrow\"", "Ku sake kunna wayar"], answer: 2, why: "Kuna iya yin bincike da muryarku ta taɓa makirufo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Karanta adireshin shafi da guje wa zamba",
          minutes: 5,
          goal: "Bambance adireshin shafi mai aminci da mai haɗari da magance pop-up masu tsoratarwa.",
          text: [
            "Adireshin shafi yana da babban sashe, wato domain, kafin alamar slash (/) ta farko, kamar irs.gov ko amazon.com. Wannan babban sashe yana faɗa muku wanda ke gudanar da shafin. Shafukan bogi suna amfani da sunaye masu kama da na gaske kamar \"amaz0n-deals.com\" ko \"irs-refund.help\".",
            "Ku nemi https da alamar kwaɗo (lock) a farkon adireshin. Yana nufin haɗin yana da sirri, amma 'yan damfara ma suna iya samun sa, don haka sunan domain ne har yanzu ya fi muhimmanci.",
            "Wasu pop-up na bogi suna cewa kwamfutarku tana da cuta (virus) kuma suna ba da lambar waya don ku kira. Hukumar FTC (hukumar kare masu sayayya ta Amurka) ta ce gargaɗin tsaro na gaske ba zai taɓa neman ku kira lambar waya ba, kuma kamfanonin fasaha na gaske ba za su kira ku ko su tura muku tes game da matsala ba. Kada ku kira. Ku rufe tab ko burauza; idan ba ta rufe ba, ku sake kunna na'urar. Idan kuna damuwa, ku tambayi wanda kuka amince da shi."
          ],
          steps: ["Ku nemo domain: sunan da ke kafin alamar slash (/) ta farko.", "Ku duba cewa shi ne ainihin sunan da kuke tsammani.", "Ku nemi https da kwaɗo, amma kada ku amince da su su kaɗai.", "Pop-up mai tsoratarwa mai lambar waya? Kada ku kira.", "Ku rufe tab ko ku sake kunna na'urar.", "Ku kai rahoton zambar taimakon fasaha a ReportFraud.ftc.gov."],
          words: [["Domain", "babban suna a adireshin shafi da ke faɗa muku wanda ke gudanar da shafin, kamar irs.gov."], ["Pop-up", "ƙaramar taga da ke bayyana ba zato a saman shafin intanet."], ["Zambar taimakon fasaha (tech support scam)", "gargaɗi ko kira na bogi da ke cewa na'urarku tana da matsala don a karɓi kuɗinku ko a shiga na'urarku."]],
          sources: [FTC_TECH],
          slides: [
            { title: "Ku nemo domain", bullets: ["Sunan da ke kafin alamar slash (/) ta farko", "irs.gov na gaske ne; irs-refund.help ba na gaske ba ne"] },
            { title: "https da kwaɗo", bullets: ["Haɗin yana da sirri", "'Yan damfara ma suna iya samun sa", "Sunan domain ne ya fi muhimmanci"] },
            { title: "Pop-up masu tsoratarwa (FTC)", bullets: ["Gargaɗi na gaske ba ya taɓa neman ku kira lamba", "Kada ku kira", "Ku rufe tab ko ku sake kunna na'urar"] }
          ],
          tryIt: "Ku duba adireshin shafuka uku a allonku ko a imel ɗinku. Ga kowanne, ku nuna domain ku faɗi wanda ke gudanar da shafin.",
          youCanNow: "karanta adireshin shafi don ganin wanda ke gudanar da shafi, da magance pop-up na bogi na cuta (virus) lafiya.",
          quickCheck: [
            { objective: "O5", q: "Wane sashe na adireshin shafi ne ke faɗa muku wanda ke gudanar da shafin?", options: ["https da ke farko", "Kalmomin da ke bayan alamar slash ta farko", "Domain, kafin alamar slash ta farko", "Alamar kwaɗo"], answer: 2, why: "Domain, kamar irs.gov, yana faɗa muku wanda ke gudanar da shafin." },
            { objective: "O5", q: "Wani pop-up ya ce kwamfutarku tana da cuta (virus) kuma ya nuna lambar da za ku kira. Ba ya rufewa. Me za ku yi?", options: ["Ku kira lambar nan take", "Ku sake kunna na'urar kuma kada ku kira", "Ku rubuta lambar katinku don biyan gyara", "Ku bar shi a kan allo har kwanaki"], answer: 1, why: "Gargaɗin tsaro na gaske ba ya taɓa neman ku kira; ku sake kunna na'urar idan pop-up ɗin bai rufe ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ajiye shafukan da kuka fi so",
          minutes: 4,
          goal: "Ajiye shafi (bookmark) da sake buɗe shi da taɓawa ɗaya.",
          text: [
            "Bookmark (ana kuma kiransa favorite) yana ajiye shafin intanet don ku dawo gare shi ba tare da sake bincike ba. Ita ce hanya mafi aminci ta komawa shafukan da kuke yawan amfani da su, kamar bankinku, kantin maganinku ko shafin labarai, domin kuna tsallake sakamakon bincike na bogi.",
            "A kwamfuta, ku danna tauraro a ƙarshen wurin adireshi. A iPhone ko iPad a Safari, ku taɓa maɓallin Share ku zaɓi Add Bookmark. A Chrome a waya, ku buɗe menu (ɗigo uku) ku taɓa tauraro. A wayoyi da yawa kuna kuma iya zaɓar \"Add to Home screen\" don yin alama kamar ta manhaja.",
            "Don buɗe bookmark daga baya, ku buɗe jerin bookmarks a menu na burauza, ko ku taɓa alamar a babban allonku (home screen)."
          ],
          steps: ["Ku buɗe shafin hukuma da kuke son ajiyewa.", "Kwamfuta: ku danna tauraro a wurin adireshi.", "Safari a iPhone ko iPad: maɓallin Share, sannan Add Bookmark.", "Chrome a waya: menu na ɗigo uku, sannan tauraro.", "Don buɗe shi daga baya: ku je Bookmarks a menu, ko ku taɓa alamar a home screen."],
          words: [["Bookmark / favorite", "hanyar haɗi da aka ajiye zuwa shafin intanet don ku sake buɗe shi da sauri."], ["Babban allo (home screen)", "babban allon waya ko tablet da ke nuna alamomin manhajoji."]],
          slides: [
            { title: "Me yasa za ku yi bookmark?", bullets: ["Komawa shafi da taɓawa ɗaya", "Yana tsallake sakamakon bincike na bogi", "Yana da kyau don banki, kantin magani, labarai"] },
            { title: "Yadda ake bookmark", bullets: ["Kwamfuta: tauraro a wurin adireshi", "Safari: Share, sannan Add Bookmark", "Chrome a waya: ɗigo uku, sannan tauraro"] },
            { title: "Sake buɗe shi", bullets: ["Bookmarks a menu na burauza", "Ko ku taɓa alamar a home screen"] }
          ],
          tryIt: "Aikin ƙarshe: ku shirya fita. Ku nemi wurin shakatawa, gidan tarihi ko ɗakin karatu, ku buɗe shafinsa na hukuma, ku duba lokutan aikinsa da adireshinsa, ku buɗe yanayin gobe a tab na biyu, ku ƙara girman rubutu idan ana buƙata, sannan ku yi bookmark na shafin hukuma.",
          youCanNow: "shiga intanet da kanku, nemo abin da kuke buƙata, guje wa shafukan bogi da ajiye shafukan da kuka fi so.",
          quickCheck: [
            { objective: "O5", q: "A kwamfuta, me kuke dannawa don yin bookmark na shafi?", options: ["Kibiyar komawa baya", "Kibiya mai zagaye", "Maɓallin ƙari (+)", "Tauraro a ƙarshen wurin adireshi"], answer: 3, why: "Tauraro a ƙarshen wurin adireshi yana ajiye bookmark." },
            { objective: "O5", q: "Kuna yin odar magani daga shafin kantin maganinku kowane wata. Ta yaya za ku koma gare shi lafiya?", options: ["Ku nemi shi kowane lokaci ku taɓa talla ta farko", "Ku yi bookmark na shafin hukuma ku buɗe shi daga bookmarks ɗinku", "Ku danna hanyar haɗi daga saƙon tes", "Ku yi tsammanin adireshin kowane lokaci"], answer: 1, why: "Bookmark daga shafin hukuma yana tsallake sakamakon bincike na bogi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Nemo abubuwa da zama lafiya",
        questions: [
          { objective: "O4", q: "Wane bincike ne ya fi sarari?", options: ["\"wuri\"", "\"Springfield library hours\" (lokutan ɗakin karatu na Springfield)", "\"a buɗe?\"", "\"don Allah ka taimake ni in same shi yanzu\""], answer: 1, why: "'Yan kalmomi masu muhimmanci da ke da wurin da abin da kuke so sun fi aiki." },
          { objective: "O5", q: "A cikin www.irs.gov/refunds, wanne ne domain?", options: ["www", "refunds", "irs.gov", "https"], answer: 2, why: "Domain shi ne sunan da ke kafin alamar slash ta farko." },
          { objective: "O5", q: "Wani pop-up ya ce kwamfutarku tana da cuta (virus) kuma ku kira lamba yanzu. Me za ku yi?", options: ["Ku kira lambar", "Ku biya da katin kyauta (gift card)", "Ku ba su damar shiga kwamfutarku daga nesa", "Kada ku kira; ku rufe tab ko ku sake kunna na'urar"], answer: 3, why: "FTC ta ce gargaɗi na gaske ba ya taɓa neman ku kira lamba." },
          { objective: "O5", q: "Wani shafi yana nuna https da kwaɗo. Ma'anar hakan ita ce:", options: ["Shafin gwamnati ne", "Tabbas mai gaskiya ne", "Haɗin yana da sirri, amma har yanzu ku duba domain", "Kyauta ne"], answer: 2, why: "'Yan damfara ma suna iya samun https; domain ne ya fi muhimmanci." },
          { objective: "O5", q: "Wace hanya ce mafi aminci ta komawa shafin kantin maganinku kowane wata?", options: ["Danna talla", "Bookmark da kuka ajiye daga shafin hukuma", "Hanyar haɗi a tes daga baƙo", "Yin tsammanin adireshin"], answer: 1, why: "Bookmark yana tsallake sakamakon bincike da hanyoyin haɗi na bogi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Amfani da Intanet",
    questions: [
      { objective: "O1", q: "Intanet shi ne:", options: ["Shafi ɗaya kawai", "Tashar talabijin", "Littafin lambobin waya", "Hanyar sadarwa ta duniya da ke haɗa kwamfutoci da wayoyi"], answer: 3, why: "Yana haɗa na'urori a duk faɗin duniya." },
      { objective: "O1", q: "Wi-Fi yana zuwa daga:", options: ["Batir", "Talabijin", "Router", "Firinta"], answer: 2, why: "Router ne ke fitar da siginar Wi-Fi." },
      { objective: "O1", q: "Data na waya (mobile data) shi ne:", options: ["Burauza", "Wi-Fi kyauta a ɗakin karatu", "Wani nau'in imel", "Intanet daga hasumiyoyi, wanda ke cikin tsarin wayarku"], answer: 3, why: "Data na waya yana zuwa ta kamfanin wayarku." },
      { objective: "O1", q: "Me yasa za ku yi amfani da Wi-Fi na gida don bidiyo?", options: ["Bidiyo yana kunna a Wi-Fi kawai", "Yawanci yana ajiye data ɗin tsarin wayarku", "Doka ta wajabta", "Yana sa wayar ta yi sauƙi"], answer: 1, why: "Wi-Fi na gida yawanci ba ya cinye data ɗin tsarinku." },
      { objective: "O2", q: "Don haɗawa da Wi-Fi kuna buƙatar:", options: ["Firinta", "Lambar bankinku", "Sunan network da kalmar sirri", "Sabuwar waya"], answer: 2, why: "Suna da kalmar sirri suna ba ku damar haɗawa." },
      { objective: "O2", q: "A iPhone, ana samun Wi-Fi a:", options: ["Clock (agogo)", "Photos (hotuna)", "Calculator (na'urar lissafi)", "Settings (saituna)"], answer: 3, why: "Settings, sannan Wi-Fi." },
      { objective: "O2", q: "A Wi-Fi na jama'a, wanne ne ba shi da kyau?", options: ["Karanta labarai", "Harkokin banki a intanet", "Duba taswira", "Neman lokutan aiki"], answer: 1, why: "Ana raba Wi-Fi na jama'a; ku guji ayyukan sirri." },
      { objective: "O3", q: "Wanne daga cikin waɗannan burauzar intanet ne?", options: ["Na'urar lissafi", "Chrome", "Kyamara", "Agogo"], answer: 1, why: "Chrome, Safari, Edge da Firefox burauzoji ne." },
      { objective: "O3", q: "Me kibiyar komawa baya a burauza ke yi?", options: ["Tana goge shafin", "Tana kashe kwamfuta", "Tana zuwa shafin da kuka kasance a kai a baya", "Tana buga shafin a takarda"], answer: 2, why: "Komawa baya tana mayar da ku shafin da ya gabata." },
      { objective: "O3", q: "Tabs suna ba ku damar:", options: ["Kashe Wi-Fi", "Biyan kuɗaɗe kai tsaye", "Caja batir", "Buɗe shafuka da yawa lokaci ɗaya"], answer: 3, why: "Kowane tab shafi ɗaya ne da ke buɗe." },
      { objective: "O3", q: "Rubutun shafi ya yi ƙanƙanta sosai a kwamfuta. Ku danna:", options: ["Delete", "Ctrl da + (Command da + a Mac)", "Escape", "Shift da 0"], answer: 1, why: "Ctrl da + yana zuƙowa." },
      { objective: "O3", q: "A waya, ta yaya kuke ƙara girman shafi?", options: ["Ku buɗe yatsu biyu daga juna a kan allo", "Ku girgiza wayar", "Ku kashe ta", "Ku danna maɓallin ƙara sauti"], answer: 0, why: "Buɗe yatsu biyu yana zuƙowa." },
      { objective: "O4", q: "Sakamakon bincike masu alamar \"Sponsored\" su ne:", options: ["Tallace-tallacen da aka biya", "Koyaushe shafin hukuma", "Shafukan gwamnati", "Gargaɗin cuta (virus)"], answer: 0, why: "Sponsored yana nufin wani ya biya kuɗi." },
      { objective: "O4", q: "Kafin ku taɓa sakamakon bincike, ya kamata ku:", options: ["Karanta adireshin shafinsa", "Rufe burauza", "Sake kunna wayar", "Taɓa kowane sakamako"], answer: 0, why: "Adireshin yana nuna wanda ke gudanar da shafin." },
      { objective: "O4", q: "Ta yaya za ku yi bincike ba tare da rubutu ba?", options: ["Ku taɓa makirufo ku yi magana", "Ku girgiza wayar", "Ku yi amfani da na'urar lissafi", "Ku ƙara sauti"], answer: 0, why: "Bincike da murya yana ba ku damar faɗin abin da kuke so." },
      { objective: "O5", q: "Wane adireshi ne ya fi yiwuwa ya zama na bogi?", options: ["irs.gov", "amazon.com", "amaz0n-deals.com", "weather.gov"], answer: 2, why: "Sifili (0) a madadin harafin O dabarar kwaikwayo ce." },
      { objective: "O5", q: "https da kwaɗo suna faɗa muku cewa:", options: ["Haɗin yana da sirri", "Tabbas shafin mai gaskiya ne", "Shafin kyauta ne", "Shafin banki ne"], answer: 0, why: "Suna kare haɗin, ba gaskiyar shafin ba." },
      { objective: "O5", q: "Gargaɗin tsaro na gaske a kwamfutarku zai:", options: ["Ba zai taɓa neman ku kira lambar waya ba", "Nemi katin kyauta", "Nemi ku kira nan take", "Nemi kalmar sirrin bankinku"], answer: 0, why: "FTC ta ce gargaɗi na gaske ba ya taɓa neman ku kira lamba." },
      { objective: "O5", q: "Wani pop-up ba ya rufewa. Me za ku yi?", options: ["Ku sake kunna na'urar", "Ku kira lambar da ke kansa", "Ku rubuta kalmar sirrinku", "Ku biya kuɗin"], answer: 0, why: "Sake kunna na'urar yana share pop-up ɗin lafiya." },
      { objective: "O5", q: "Bookmark shi ne:", options: ["Hanyar haɗi da aka ajiye zuwa shafin intanet", "Abin riƙe shafin littafi kawai", "Cuta (virus)", "Kalmar sirri"], answer: 0, why: "Bookmarks suna mayar da ku shafi da sauri." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 4, 6, 8, 10, 12, 13, 15, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Haɗawa da Wi-Fi", objective: "O2", notYet: "Na'urar ba ta haɗu ba, ko an haɗa da network mai sunan da ba a sani ba.", meets: "Na'urar ta haɗu da sanannen Wi-Fi ba tare da taimako ba.", exceeds: "Yana kuma bayyana abin da za a guje wa a Wi-Fi na jama'a." },
      { name: "Nemo shafin hukuma", objective: "O4", notYet: "Shafin da aka buɗe talla ne ko ba na wurin da kansa ba ne.", meets: "An nemo shafin hukuma na wurin ta bincike, kuma an nemo lokutan aikinsa da adireshinsa.", exceeds: "An karanta adireshin shafin kuma an duba shi kafin a taɓa." },
      { name: "Amfani da burauza", objective: "O3", notYet: "An buɗe shafi ɗaya kawai, ko mai koyo bai iya komawa shafin farko ba.", meets: "Tab na biyu yana nuna yanayin gobe, kuma mai koyo yana sauyawa tsakanin tabs.", exceeds: "Yana kuma zuƙowa rubutu zuwa girman da ya dace kuma yana amfani da maɓallin komawa baya." },
      { name: "Adireshi mai aminci da bookmark", objective: "O5", notYet: "Babu bookmark, ko an yi bookmark na shafin kwaikwayo ko na talla.", meets: "An yi bookmark na shafin hukuma kuma an sake buɗe shi da taɓawa ɗaya.", exceeds: "Yana kuma bayyana yadda domain ke nuna cewa shafin na gaske ne." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na shirin fita",
      "Masu koyo da suka ce sun yi amfani da intanet da kansu don wata buƙata ta gaske, kamar lokutan aiki, yanayi ko shafin lafiya, cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka ce sun rufe pop-up na bogi ko sun guji shafin kwaikwayo",
      "Masu koyo da suka ci gaba zuwa wani kwas na gaba, kamar Email and Online Communication (Imel da Sadarwa ta Intanet) ko Digital Literacy Basics (Tushen Ilimin Fasahar Zamani)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, tablet ko kwamfuta da mai koyo zai iya yin atisaye a kai",
      "Sunan network da kalmar sirrin Wi-Fi (na gida, ɗakin karatu ko na shirin kansa)",
      "Takarda da alƙalami don rubuta lokutan aiki da adireshin wurin",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ku rubuta sunan Wi-Fi da kalmar sirrin shirin a allo don masu koyo su haɗa da network ɗin da ya dace, ba na kwaikwayo ba.",
      "Ku haɗa masu koyo bisa na'urarsu (iPhone, Android ko kwamfuta) don matakan da ke kan allo su yi daidai da abin da suke gani.",
      "Ku yi amfani da wurin shakatawa, ɗakin karatu ko gidan tarihi na yankin don aikin fita, don shafin hukuma ya zama mai sauƙin dubawa.",
      "Ku nuna hoton pop-up na bogi na cuta (virus) don masu koyo su gane shi, amma kada ku taɓa buɗe ainihin shafin zamba a aji.",
      "Ku yi a hankali da tsofaffin masu koyo: ku bar su su yi kowane taɓawa da kansu maimakon ku yi musu."
    ]
  }
};
