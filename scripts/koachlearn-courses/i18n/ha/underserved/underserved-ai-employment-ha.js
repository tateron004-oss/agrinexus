"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-ai-employment.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-ai-employment-ha",
  lang: "ha",
  translationOf: "underserved-ai-employment",
  category: "Undeserved Community",
  name: "AI don Samun Aiki da Shirin Shiga Aiki",
  skills: "Samun taimakon neman aiki kyauta, Faɗin ƙwarewarku, Rubuta CV mai shafi ɗaya da AI, Daidaita CV da tallar aiki, Gwada amsoshin hirar aiki, Gane zambar aiki",
  outcome: "amfani da mataimakin AI kyauta don rubuta CV mai shafi ɗaya da ya dace da tallar aiki ta gaske, gwada amsoshin tambayoyin hirar aiki da aka saba yi, da gane alamun zambar aiki.",
  about: [
    "Neman aiki yana da wuya, musamman idan akwai lokutan da ba ku yi aiki ba, idan yawancin ayyukanku na hannu-da-hannu ne (ana biyan kuɗi a hannu), ko idan kun daɗe kuna kula da iyali. Kuna da ƙwarewa fiye da yadda kuke tsammani, kuma kayan aiki kyauta za su iya taimaka muku ku nuna su.",
    "Za ku nemo taimakon neman aiki kyauta kusa da ku, ku mayar da abubuwan da kuka yi (na albashi da marasa albashi) zuwa jerin ƙwarewa, ku rubuta CV mai shafi ɗaya da AI, ku daidaita shi da tallar aiki ta gaske, ku gwada shirin hirar aiki, kuma ku koyi gane zambar aiki.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku nemo tallar aiki ta gaske da za ku iya nema. Ku yi amfani da mataimakin AI don rubuta CV mai shafi ɗaya da ya dace da wannan talla, ba tare da lambobin sirri a ciki ba. Sannan ku sa AI ya yi muku tambayoyin hirar aiki guda uku da aka saba yi, ku amsa kowace da babbar murya, kuma ku nemi shawara ɗaya don inganta kowace amsa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu neman aiki a al'ummomin da ba su samun isasshen tallafi, ciki har da mutanen da ke da lokutan da ba su yi aiki ba, waɗanda yawancin ayyukansu na kuɗin hannu ne, masu kula da iyali da ke komawa aiki, matasa, da masu magana da Turanci a matsayin harshe na biyu.",
    startingPoint: "Suna da ƙwarewa ta gaske daga aiki da rayuwa, amma wataƙila ba sa ganin ta a matsayin ƙwarewar aiki. Suna iya amfani da waya, wataƙila da ɗan kwamfuta. Kaɗan ne ke da CV na yanzu ko suka taɓa gwada hirar aiki, kuma an taɓa yi wa wasu zambar aiki.",
    gap: "Masu ɗaukar aiki suna sa ran CV da ya dace da aikin da kuma hirar aiki mai ƙarfin gwiwa, kuma zambar aiki tana nufin mutanen da ke buƙatar aiki. Masu koyo suna buƙatar nuna ƙwarewarsu ta gaske, amfani da kayan aiki kyauta da taimakon neman aiki kyauta, da kare kansu yayin da suke nema.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6)",
      "Na'urori: wayar zamani, ko kwamfutar ɗakin karatu ko ta cibiyar neman aiki",
      "Kuɗi: kayan aiki kyauta da taimakon neman aiki kyauta kawai",
      "Sirri: babu lambar Social Security, ranar haihuwa ko cikakkun lambobin katin shaida a cikin AI ko a CV",
      "Gaskiya: kowace ƙwarewa a CV dole ta zama gaskiya, kuma tana da misali na gaske"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Empowerment\" (Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da CareerOneStop ko layin waya 1-877-US-2JOBS", action: "nemo American Job Center mafi kusa da ku da wani wuri ɗaya na daban da ake samun taimakon neman aiki kyauta", standard: "kuna rubuta adireshinsa, lambar wayarsa da lokutan buɗewarsa" },
    { id: "O2", condition: "Idan aka ba ku ayyukanku na albashi da marasa albashi", action: "jera ƙwarewar aikin da suke nunawa tare da mataimakin AI", standard: "kuna barin ƙwarewar da za ku iya ba da misali na gaske kawai" },
    { id: "O3", condition: "Idan kuna da jerin ƙwarewarku da tarihinku", action: "rubuta CV mai shafi ɗaya da mataimakin AI da kayan rubutu kyauta", standard: "da dukkan manyan sassa, ba tare da lambar Social Security ko ranar haihuwa ba" },
    { id: "O4", condition: "Idan aka ba ku tallar aiki ta gaske", action: "canja CV ɗinku don ya dace da ƙwarewa da kalmomin tallar", standard: "kuna amfani da bayanan gaskiya kawai, kuma kuna ajiye kwafi mai sunan wannan aikin" },
    { id: "O5", condition: "Idan mataimakin AI yana aiki a matsayin mai yin hirar aiki", action: "amsa tambayoyin hirar aiki da aka saba yi da babbar murya da gajerun labarai na gaske", standard: "kuna nema da amfani da shawara ɗaya a kowace amsa" },
    { id: "O6", condition: "Idan aka ba ku tayin aiki ko tallar aiki", action: "duba alamun gargaɗin zambar aiki a cikinsa da tabbatar da kamfanin da kanku", standard: "kafin ku bayar da lambar banki ko ta Social Security" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yin shiri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Samun taimakon neman aiki kyauta kusa da ku",
          minutes: 4,
          goal: "Nemo American Job Center mafi kusa da ku da wani wuri ɗaya na daban da ake samun taimakon neman aiki kyauta.",
          text: [
            "American Job Centers cibiyoyin aiki ne na jama'a a duk faɗin ƙasar Amurka. Suna taimakon masu neman aiki wajen neman aiki, tura su zuwa ayyuka (referral) da sanya su a aiki, kuma da yawa daga cikinsu suna da kwamfutoci, taron koyarwa da bayanai game da horo. Wasu hidimomi suna da ƙa'idoji game da wanda ya cancanta, kuma suna iya bambanta daga jiha zuwa jiha.",
            "Kuna iya nemo cibiya mafi kusa da ku ta American Job Center Finder a CareerOneStop, shafin intanet na Ma'aikatar Ƙwadago ta Amurka (U.S. Department of Labor), ko ta kiran 1-877-US-2JOBS.",
            "Ɗakunan karatu na jama'a ma suna taimakawa wajen neman aiki, buga CV da lokacin amfani da kwamfuta kyauta. Taimakon neman aiki na gaske ba ya taɓa neman ku biya kuɗi don samun aiki."
          ],
          steps: ["Ku buɗe American Job Center Finder a careeronestop.org, ko ku kira 1-877-US-2JOBS.", "Ku rubuta lambar ZIP ɗinku ko sunan garinku.", "Ku rubuta adireshin cibiya mafi kusa, lambar wayarta da lokutan buɗewarta.", "Ku tambayi ɗakin karatunku irin taimakon neman aiki da yake bayarwa."],
          words: [["American Job Center", "cibiyar jama'a da ke taimakon mutane samun aiki da horo."], ["Referral (turawa)", "lokacin da cibiya ta tura ku zuwa wani aiki ko shirin da zai iya dace da ku."]],
          sources: [
            { name: "Ma'aikatar Ƙwadago ta Amurka: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" },
            { name: "CareerOneStop: American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          slides: [
            { title: "American Job Centers", bullets: ["Cibiyoyin aiki na jama'a a duk faɗin ƙasar", "Neman aiki, turawa zuwa aiki da sanyawa a aiki", "Wasu hidimomi suna bambanta daga jiha zuwa jiha"] },
            { title: "Ku nemo naku", bullets: ["American Job Center Finder a careeronestop.org", "Ko ku kira 1-877-US-2JOBS"] },
            { title: "Ƙarin taimako kyauta", bullets: ["Ɗakunan karatu na jama'a: kwamfutoci, bugawa, taimakon neman aiki", "Taimakon neman aiki na gaske ba ya taɓa karɓar kuɗi don ba ku aiki"] }
          ],
          tryIt: "Ku nemo American Job Center mafi kusa da ku, ku rubuta adireshinsa, lambar wayarsa da lokutan buɗewarsa.",
          youCanNow: "nemo taimakon neman aiki na hukuma kyauta kusa da ku.",
          quickCheck: [
            { objective: "O1", q: "Mene ne CareerOneStop?", options: ["Shafin intanet na Ma'aikatar Ƙwadago ta Amurka da ke taimaka muku nemo cibiyoyin aiki", "Hukumar neman aiki da ake biya", "Shafin sada zumunta", "Banki na masu neman aiki"], answer: 0, why: "CareerOneStop shafi ne na Ma'aikatar Ƙwadago da ke da American Job Center Finder." },
            { objective: "O1", q: "Kuna buƙatar buga CV da amfani da kwamfuta kyauta. Ina kuma za ku iya zuwa?", options: ["Shafin intanet da ke karɓar kuɗin rajista", "Ɗakin karatu na jama'a", "Ofishin gidan wani baƙo", "Shagon canjin cak"], answer: 1, why: "Ɗakunan karatu na jama'a suna taimakawa wajen neman aiki, bugawa da lokacin kwamfuta kyauta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Faɗin ƙwarewarku, ta albashi da marar albashi",
          minutes: 5,
          goal: "Mayar da abubuwan da kuka yi a aiki da rayuwa zuwa jerin ƙwarewar aiki.",
          text: [
            "Mutane da yawa suna cewa \"Ba ni da ƙwarewa\" alhali suna da ita. Kula da yara ko iyaye tsofaffi, tafiyar da kasafin kuɗin gida, dafa abinci don taron coci ko masallaci, gyaran motocin maƙwabta, ko yin ayyukan kuɗin hannu duk suna gina ƙwarewa ta gaske.",
            "Ku faɗa wa mataimakin AI abin da kuka yi, da kalmomi masu sauƙi, kuma ku nemi ya mayar da shi zuwa ƙwarewar aiki. Misali: \"Na yi shekaru biyar ina kula da kakata, ina kula da magungunanta da ganawarta da likita, kuma ina tafiyar da kasafin kuɗin gida. Waɗanne ƙwarewar aiki wannan yake nunawa?\"",
            "Ku zaɓi ƙwarewar da ke gaskiya kuma za ku iya ba da misali a kanta. Kada ku bar duk abin da ba za ku iya tabbatarwa a hirar aiki ba."
          ],
          steps: ["Ku rubuta duk abin da kuka yi: ayyukan albashi, ayyukan kuɗin hannu, kula da iyali, aikin sa-kai, makaranta.", "Ku nemi AI ya jera ƙwarewar aikin da kowanne yake nunawa.", "Ku bar ƙwarewar da za ku iya ba da misali na gaske kawai.", "Ku ajiye jerin don CV ɗinku."],
          words: [["Ƙwarewa (skill)", "abin da kuka iya yi da kyau, kamar tsara lokaci, hidimar abokan ciniki ko amfani da injin karɓar kuɗi."], ["Ƙwarewar da ake iya kai wa wani wuri (transferable skill)", "ƙwarewa daga wani ɓangare na rayuwa da ke taimakawa a wani aiki na daban."]],
          slides: [
            { title: "Kuna da ƙwarewa fiye da yadda kuke tsammani", bullets: ["Kula da iyali, kasafin kuɗi, dafa abinci don taruka", "Ayyukan kuɗin hannu, aikin sa-kai, gyaran abubuwa"] },
            { title: "Ku nemi AI ya faɗe su", bullets: ["Ku bayyana abin da kuka yi da kalmomi masu sauƙi", "\"Waɗanne ƙwarewar aiki wannan yake nunawa?\""] },
            { title: "Ku riƙe gaskiya", bullets: ["Ku bar ƙwarewar da za ku iya ba da misalinta", "Ku cire duk abin da ba za ku iya tabbatarwa ba"] }
          ],
          tryIt: "Ku rubuta abubuwa uku da kuka yi (na albashi ko marasa albashi). Ku nemi mataimakin AI ya faɗi ƙwarewar aikin da kowanne yake nunawa. Ku bar waɗanda za ku iya ba da misali na gaske a kansu.",
          youCanNow: "mayar da ayyukanku na albashi da marasa albashi zuwa jerin ƙwarewar aiki na gaskiya.",
          quickCheck: [
            { objective: "O2", q: "Wanne ne aikin da ba na albashi ba da ke gina ƙwarewar aiki?", options: ["Kallon talabijin", "Yawan barci", "Dafa abinci don taron coci ko masallaci", "Duba shafukan sada zumunta"], answer: 2, why: "Dafa abinci don taro yana nuna ƙwarewar tsari, aiki tare da wasu da sarrafa abinci." },
            { objective: "O2", q: "AI ya ce kula da yara da kuka yi yana nuna \"project management\" (gudanar da ayyuka), amma ba za ku iya ba da misali ba. Me za ku yi?", options: ["Ku bar shi; yana da daɗin ji", "Ku ƙirƙiri misali", "Ku saka shi sau biyu", "Ku cire shi daga jerinku"], answer: 3, why: "Ku bar ƙwarewar da za ku iya tabbatarwa da misali na gaske a hirar aiki kawai." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta CV mai shafi ɗaya da AI",
          minutes: 6,
          goal: "Rubuta CV mai sauƙi mai shafi ɗaya da mataimakin AI da kayan rubutu kyauta.",
          text: [
            "CV (a Amurka ana ce masa résumé) taƙaitaccen bayani ne mai shafi ɗaya na ƙwarewarku da abubuwan da kuka yi. CV mai sauƙi da tsafta ya fi wanda aka yi wa ado da yawa.",
            "Ku ba AI jerin ƙwarewarku, ayyukanku ko abubuwan da kuka yi tare da shekaru, da duk wani horo ko makaranta. Ku nemi CV mai shafi ɗaya da sassan nan: layin tuntuɓa, gajeren taƙaitawa, ƙwarewa, abubuwan da kuka yi, da ilimi ko horo.",
            "Kada ku saka lambar Social Security ɗinku, ranar haihuwa ko cikakkun lambobin katin shaida a CV ko a cikin AI. Ku rubuta lambar wayarku da imel ɗinku a takardar ƙarshe da kanku. Ku kwafi sakamakon zuwa kayan aiki kyauta kamar Google Docs ko Microsoft Word a intanet, kuma ku ajiye shi a matsayin PDF don aikawa."
          ],
          steps: ["Ku ba AI ƙwarewarku, ayyukanku ko abubuwan da kuka yi tare da shekaru, da horonku.", "Ku nemi CV mai shafi ɗaya: layin tuntuɓa, taƙaitawa, ƙwarewa, abubuwan da kuka yi, ilimi.", "Ku kwafe shi zuwa Google Docs ko Word a intanet.", "Ku ƙara lambar wayarku da imel da kanku; kada ku saka lambar Social Security ko ranar haihuwa.", "Ku karanta shi da babbar murya, ku gyara kurakurai, ku ajiye shi a matsayin PDF."],
          words: [["CV / Résumé", "taƙaitaccen bayani mai shafi ɗaya na ƙwarewarku, aikinku da horonku don masu ɗaukar aiki."], ["PDF", "nau'in fayil da ke sa takardarku ta kasance iri ɗaya a kowace na'ura."]],
          slides: [
            { title: "Mai sauƙi da tsafta ya fi", bullets: ["Shafi ɗaya", "Mai sauƙin karantawa"] },
            { title: "Sassa biyar", bullets: ["Layin tuntuɓa da gajeren taƙaitawa", "Ƙwarewa", "Abubuwan da kuka yi", "Ilimi ko horo"] },
            { title: "Ku kiyaye shi", bullets: ["Babu lambar Social Security ko ranar haihuwa", "Ku ƙara waya da imel da kanku", "Ku ajiye shi a matsayin PDF don aikawa"] }
          ],
          tryIt: "Ku yi amfani da jerin ƙwarewarku daga Darasi na 2 don neman mataimakin AI ya rubuta CV mai shafi ɗaya. Ku kwafe shi zuwa Google Docs ko Word a intanet, ku karanta shi da babbar murya.",
          youCanNow: "rubuta CV mai sauƙi mai shafi ɗaya da AI da kayan rubutu kyauta.",
          quickCheck: [
            { objective: "O3", q: "Waɗanne sassa ne suka dace a CV mai sauƙi?", options: ["Layin tuntuɓa, taƙaitawa, ƙwarewa, abubuwan da kuka yi, ilimi ko horo", "Lambar Social Security da ranar haihuwa", "Hoto mai cike da shafi", "Bayanan bankinku"], answer: 0, why: "Waɗannan sassa biyar suna ba masu ɗaukar aiki abin da suke buƙata a shafi ɗaya." },
            { objective: "O3", q: "Yaushe ya kamata ku ƙara lambar wayarku da imel a CV?", options: ["Ku fara rubuta su a cikin AI", "Ku rubuta su a takardar ƙarshe da kanku", "Ku bar su", "Ku saka su a intanet"], answer: 1, why: "Ƙara su da kanku a cikin takardar yana hana bayanan sirri shiga AI." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yin shiri",
        questions: [
          { objective: "O1", q: "Ta yaya za ku nemo American Job Center mafi kusa da ku?", options: ["Saƙon tes daga baƙo", "American Job Center Finder a CareerOneStop, ko 1-877-US-2JOBS", "Tallar da ke tasowa (pop-up)", "Shafin intanet da ake biya"], answer: 1, why: "Waɗannan su ne hanyoyin hukuma na nemo cibiya." },
          { objective: "O1", q: "Wani shafin intanet ya ce dole ku biya kuɗi don samun aiki. Wannan:", options: ["Abu ne na yau da kullum", "Doka ce ta tilasta shi", "Alamar gargaɗi ce; taimakon neman aiki na gaske ba ya karɓar kuɗi don ba ku aiki", "Kyakkyawan ciniki ne"], answer: 2, why: "Masu ɗaukar aiki masu gaskiya da cibiyoyin aiki ba sa karɓar kuɗi don ba ku aiki." },
          { objective: "O2", q: "Kun yi shekaru biyar kuna kula da kakarku. A CV wannan yana nuna:", options: ["Ƙwarewa ta gaske kamar tsara lokaci da kula da magunguna", "Babu wani abu mai amfani", "Lokacin da dole ku ɓoye", "Dafa abinci kawai"], answer: 0, why: "Kula da iyali yana gina ƙwarewa ta gaske da ake iya kai wa wani aiki." },
          { objective: "O2", q: "AI ya jera ƙwarewar da ba ku da ita da gaske. Ya kamata ku:", options: ["Ku bar ta", "Ku ƙirƙiri misali", "Ku ƙara wasu biyu", "Ku cire ta"], answer: 3, why: "Ku bar abin da za ku iya tabbatarwa a hirar aiki kawai." },
          { objective: "O3", q: "Wanne BAI kamata ya shiga CV ɗinku ko cikin AI ba?", options: ["Ƙwarewarku", "Lambar Social Security ɗinku", "Sunayen ayyukanku", "Horonku"], answer: 1, why: "Lambobin Social Security da ranar haihuwa ba su dace a CV ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Neman aiki da hirar aiki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Daidaita CV ɗinku da tallar aiki",
          minutes: 5,
          goal: "Canja CV ɗinku don ya dace da abin da tallar aiki ta gaske ke nema.",
          text: [
            "Masu ɗaukar aiki suna son ganin cewa kun dace da aikinsu. Tallar aiki tana jera abin da suke buƙata. Idan CV ɗinku yana amfani da ƙwarewa da kalmomi iri ɗaya, yana da sauƙi a ga dacewar.",
            "Ku liƙa tallar aikin da CV ɗinku a cikin AI kuma ku tambaya: \"Waɗanne ƙwarewa a cikin wannan talla na riga na nuna? Ka ba da shawarar canje-canje ga CV ɗina don ya fi dacewa, ta amfani da bayanan gaskiya kawai.\"",
            "Ku riƙe gaskiya. Daidaitawa na nufin nuna ƙwarewarku ta gaske da kalmomin mai ɗaukar aiki, ba ƙara abubuwan da ba ku yi ba."
          ],
          steps: ["Ku nemo tallar aiki ta gaske da za ku iya nema.", "Ku liƙa tallar da CV ɗinku a cikin AI (babu lambobin sirri).", "Ku tambayi waɗanne ƙwarewa suka dace da abin da za a canja, ta amfani da bayanan gaskiya kawai.", "Ku sabunta CV ɗinku kuma ku ajiye sabon kwafi mai sunan wannan aikin."],
          words: [["Tallar aiki (job posting)", "sanarwa daga mai ɗaukar aiki da ke bayyana aiki da abin da yake buƙata."], ["Kalmomi masu muhimmanci (keywords)", "muhimman kalmomi daga tallar aiki, kamar \"customer service\" (hidimar abokan ciniki) ko \"forklift\" (motar ɗaukar kaya)."]],
          slides: [
            { title: "Ku nuna dacewar", bullets: ["Tallar tana jera abin da suke buƙata", "Ku yi amfani da ƙwarewa da kalmomi iri ɗaya"] },
            { title: "Ku tambayi AI", bullets: ["Ku liƙa tallar da CV ɗinku", "\"Waɗanne ƙwarewa na riga na nuna?\"", "\"Ka ba da shawarar canje-canje na gaskiya don ya fi dacewa.\""] },
            { title: "Ku riƙe gaskiya", bullets: ["Ƙwarewarku ta gaske, da kalmominsu", "Ku ajiye kwafi mai sunan kowane aiki"] }
          ],
          tryIt: "Ku nemo tallar aiki ta gaske guda ɗaya kusa da ku. Ku nemi mataimakin AI ya kwatanta ta da CV ɗinku kuma ya ba da shawarar canje-canje na gaskiya. Ku ajiye sabon kwafi don wannan aikin.",
          youCanNow: "daidaita CV ɗinku da tallar aiki ta gaske cikin gaskiya.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar \"daidaita\" CV?", options: ["Ƙara ayyukan da ba ku taɓa yi ba", "Amfani da irin rubutun (font) da mai ɗaukar aiki ke amfani da shi", "Nuna ƙwarewarku ta gaske da kalmomin mai ɗaukar aiki", "Mayar da shi shafi biyu"], answer: 2, why: "Daidaitawa tana nuna ƙwarewarku ta gaskiya da kalmomin da tallar ke amfani da su." },
            { objective: "O4", q: "Tallar tana neman \"customer service\" (hidimar abokan ciniki), kuma kun taimaki masu siyayya a wani aikin kuɗin hannu. Me za ku yi?", options: ["Ku bar shi", "Ku ce kun gudanar da shagon", "Ku rubuta \"ba ni da gogewa\"", "Ku bayyana shi a matsayin hidimar abokan ciniki, tare da bayanan gaskiya"], answer: 3, why: "Gogewarku ta gaske ta dace da kalmar su, don haka ku faɗe ta cikin gaskiya da kalmominsu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gwada shirin hirar aiki",
          minutes: 5,
          goal: "Gwada amsa tambayoyin hirar aiki da aka saba yi tare da mataimakin AI.",
          text: [
            "Hirar aiki tana yin sauƙi idan an gwada. Mataimakin AI zai iya yin aikin mai yin hira. Ku tambaya: \"Ka yi aiki a matsayin mai yin hirar aiki don wannan aikin. Ka yi mini tambaya ɗaya da aka saba yi a lokaci ɗaya, ka jira amsata. Bayan kowace amsa, ka ba ni shawara ɗaya.\"",
            "Tambayoyin da aka saba yi sun haɗa da: \"Faɗa mini game da kanka.\" \"Me yasa kake son wannan aikin?\" \"Faɗa mini lokacin da ka magance wata matsala.\" Ku yi amfani da gajeren labari na gaske: abin da ya faru, abin da kuka yi, da yadda ya ƙare.",
            "Ku faɗi amsoshinku da babbar murya, ba a zuciya kawai ba. Idan akwai lokacin da ba ku yi aiki ba, ku gwada jimla ɗaya gajeriya ta gaskiya game da shi, sannan ku yi magana game da abin da kuka shirya yi yanzu."
          ],
          steps: ["Ku nemi AI ya yi aiki a matsayin mai yin hira don tallar aikinku.", "Ku amsa tambaya ɗaya a lokaci ɗaya, da babbar murya, sannan ku rubuta ta.", "Ku yi amfani da gajeren labari na gaske: abin da ya faru, abin da kuka yi, sakamakon.", "Ku nemi shawara ɗaya bayan kowace amsa, ku sake gwadawa."],
          words: [["Hirar aiki (interview)", "ganawa da mai ɗaukar aiki yake yi muku tambayoyi don yanke shawara ko zai ɗauke ku aiki."], ["Lokacin rashin aiki (work gap)", "lokacin da ba ku cikin aikin albashi."]],
          slides: [
            { title: "AI zai iya yin aikin mai yin hira", bullets: ["Tambaya ɗaya a lokaci ɗaya", "Shawara ɗaya bayan kowace amsa"] },
            { title: "Tambayoyin da aka saba yi", bullets: ["\"Faɗa mini game da kanka.\"", "\"Me yasa kake son wannan aikin?\"", "\"Faɗa mini lokacin da ka magance wata matsala.\""] },
            { title: "Ku amsa da gajeren labari", bullets: ["Abin da ya faru", "Abin da kuka yi", "Yadda ya ƙare"] },
            { title: "Ku gwada da babbar murya", bullets: ["Ku faɗe shi, kada ku yi tunani kawai", "Lokacin rashin aiki: jimla ɗaya ta gaskiya, sannan ku ci gaba"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya yi muku hirar aiki don aikin daga Darasi na 4. Ku amsa tambayoyi biyu da babbar murya, ku rubuta amsoshinku, kuma ku nemi shawara ɗaya a kowace.",
          youCanNow: "gwada amsoshin hirar aiki da AI da inganta su da shawarwari.",
          quickCheck: [
            { objective: "O5", q: "Me ya kamata ku nemi AI ya yi bayan kowace amsar gwaji?", options: ["Ya ba da shawara ɗaya don inganta ta", "Ya rubuta amsarku a madadinku", "Ya ƙare hirar", "Ya tsallaka zuwa wani aiki"], answer: 0, why: "Shawara ɗaya a lokaci ɗaya tana taimaka muku inganta kowace amsa." },
            { objective: "O5", q: "Mai yin hira ya tambaye ku game da shekaru biyu da kuka yi kuna kula da iyali ba tare da aiki ba. Me za ku ce?", options: ["Ku ƙirƙiri wani aiki", "Jimla ɗaya gajeriya ta gaskiya, sannan abin da kuka shirya yi yanzu", "Ku ƙi amsawa", "Ku yi magana a kai na minti goma"], answer: 1, why: "Gajeriyar amsa ta gaskiya, sannan mai da hankali kan abin da za ku iya yi yanzu, ita ce mafi ƙarfi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gane zambar aiki",
          minutes: 5,
          goal: "Gane alamun gargaɗin zambar aiki kuma ku san abin da za ku yi.",
          text: [
            "Zambar aiki tana nufin mutanen da ke buƙatar aiki. Hukumar Kasuwanci ta Tarayyar Amurka (Federal Trade Commission, FTC) ta yi gargaɗi cewa masu ɗaukar aiki masu gaskiya ba za su taɓa neman ku biya kuɗi don samun aiki ba.",
            "Sauran alamun gargaɗi: suna turo muku cak kuma su nemi ku mayar da wani ɓangare na kuɗin ko ku sayi katin kyauta (gift card); suna alƙawarin albashi mai yawa don ɗan aiki kaɗan; aikin karɓar kunshin kaya ne da sake tura su; ko tayin ya zo ba zato ba tsammani.",
            "Idan tayi ya yi kyau fiye da gaskiya, ku tsaya. Ku bincika kamfanin da kanku, ku kira ainihin lambar wayarsa, ko ku tambayi a American Job Center ɗinku. Kada ku taɓa bayar da lambar bankinku ko ta Social Security kafin ku tabbatar da aiki na gaske."
          ],
          steps: ["Kada ku taɓa biyan kuɗi don samun aiki.", "Kada ku taɓa saka cak a banki sannan ku mayar da kuɗi.", "Ku bincika kamfanin da kanku kuma ku kira ainihin lambarsa.", "Ku tambayi American Job Center ɗinku idan kuna shakka."],
          words: [["Zambar cak na bogi (fake check scam)", "ɗan damfara ya turo cak, ya nemi ku mayar da wani ɓangare, sannan cak ɗin ya kasa biya kuma ku ne za ku biya bankin bashi."], ["FTC", "Federal Trade Commission, hukumar Amurka da ke kare masu saye daga zamba."]],
          sources: [{ name: "FTC: Zambar aiki (Job Scams)", url: "https://consumer.ftc.gov/articles/job-scams" }],
          slides: [
            { title: "Kada ku taɓa biyan kuɗi don samun aiki", bullets: ["FTC: masu ɗaukar aiki masu gaskiya ba sa neman ku biya", "Babu kuɗi don kayan aiki, horo ko tabbacin aiki"] },
            { title: "Sauran alamun gargaɗi", bullets: ["Mayar da kuɗi daga cak", "Albashi mai yawa don ɗan aiki kaɗan", "Sake tura kunshin kaya", "Tayin da ya zo ba zato ba tsammani"] },
            { title: "Ku kare kanku", bullets: ["Ku bincika kamfanin da kanku", "Ku kira ainihin lambarsa", "Ku tambayi American Job Center ɗinku"] }
          ],
          tryIt: "Aikin ƙarshe: da CV ɗinku da ya dace da tallar aiki ta gaske, ku sa AI ya yi muku tambayoyin hirar aiki guda uku, ku amsa kowace da babbar murya, kuma ku nemi shawara ɗaya don inganta kowace amsa. Ku duba tallar don kowace alamar gargaɗin zamba.",
          youCanNow: "neman aiki na gaske da CV da ya dace, gwada hirar aiki, da gane zambar aiki.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne alamar gargaɗin zambar aiki?", options: ["Tallar aiki da ke da ainihin adireshin kamfani", "Hirar aiki a ofishin kamfanin", "Alƙawarin albashi mai yawa don ɗan aiki kaɗan", "Aikin da aka jera a American Job Center ɗinku"], answer: 2, why: "Tayin da ke alƙawarin albashi mai yawa don ɗan aiki kaɗan alamar zamba ce da aka saba gani." },
            { objective: "O6", q: "Wani sabon \"mai ɗaukar aiki\" ya turo tes yana neman lambar bankinku kafin kowace hirar aiki. Me za ku yi?", options: ["Ku aika don a biya ku da sauri", "Ku aika rabin lambar", "Ku nemi aboki ya aika tasa", "Ku tsaya ku bincika kamfanin da kanku"], answer: 3, why: "Kada ku taɓa bayar da lambar bankinku kafin ku tabbatar da aiki na gaske." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Neman aiki da hirar aiki",
        questions: [
          { objective: "O4", q: "Me yasa za ku daidaita CV ɗinku da tallar aiki?", options: ["Don mai ɗaukar aiki ya ga kun dace da aikin", "Don ya yi tsawo", "Don ƙara ƙwarewar da ba ku da ita", "Ba shi da amfani"], answer: 0, why: "Daidaitawa tana nuna dacewarku ta gaske da kalmomin mai ɗaukar aiki." },
          { objective: "O4", q: "Idan kuna daidaitawa, ya kamata ku:", options: ["Ƙara ayyukan da ba ku taɓa yi ba", "Kwafi tallar kalma da kalma", "Yi amfani da ƙwarewarku ta gaske da kalmomin mai ɗaukar aiki", "Cire dukkan gogewarku"], answer: 2, why: "Daidaitawa ta gaskiya ita ce manufar." },
          { objective: "O5", q: "Wace hanya ce mai kyau ta amsa \"Faɗa mini lokacin da ka magance wata matsala\"?", options: ["\"Ba na taɓa samun matsala.\"", "Dogon jerin ayyuka", "\"Ban sani ba.\"", "Gajeren labari na gaske: abin da ya faru, abin da kuka yi, yadda ya ƙare"], answer: 3, why: "Gajeren labari yana nuna ƙwarewarku a sarari." },
          { objective: "O6", q: "Wani \"kamfani\" ya turo muku cak kuma ya nemi ku sayi katin kyauta da wani ɓangarensa. Wannan:", options: ["Aikin ranar farko ne na yau da kullum", "Zambar cak na bogi ce", "Kyauta ce (bonus)", "Horo ne"], answer: 1, why: "FTC ta jera wannan a matsayin zambar aiki da aka saba gani." },
          { objective: "O6", q: "Kuna shakka ko tayin aiki na gaske ne. Me za ku yi?", options: ["Ku bincika kamfanin da kanku kuma ku kira ainihin lambarsa", "Ku aika lambar bankinku don dubawa", "Ku biya kuɗin don ku gano", "Ku amince nan take"], answer: 0, why: "Bincike da kanku yana kare ku." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Samun Aiki da Shirin Shiga Aiki",
    questions: [
      { objective: "O1", q: "American Job Centers suna taimakawa da:", options: ["Bashin mota", "Neman aiki, turawa zuwa aiki da sanyawa a aiki", "Biyan haraji kawai", "Sayen gidaje"], answer: 1, why: "Cibiyoyin aiki ne na jama'a." },
      { objective: "O1", q: "Ana gudanar da CareerOneStop tare da:", options: ["Kamfanin wasannin bidiyo", "Banki", "Ma'aikatar Ƙwadago ta Amurka", "Shafin sada zumunta"], answer: 2, why: "Shafin intanet ne na Ma'aikatar Ƙwadago." },
      { objective: "O1", q: "Wace lambar waya ce ke taimaka muku nemo cibiyoyin aiki?", options: ["1-877-US-2JOBS", "911", "Lambar daga tallar da ke tasowa (pop-up)", "Lambar bankinku"], answer: 0, why: "1-877-US-2JOBS layin taimakon neman aiki ne na Ma'aikatar Ƙwadago." },
      { objective: "O2", q: "Wace gogewa ce za ta iya zama ƙwarewar aiki?", options: ["Ayyukan ofis kawai", "Ayyukan da ke buƙatar shaidar kammala karatu kawai", "Babu marar albashi", "Kula da iyali, aikin sa-kai, ayyukan kuɗin hannu da ayyukan albashi"], answer: 3, why: "Ayyukan marasa albashi da na kuɗin hannu suna gina ƙwarewa ta gaske." },
      { objective: "O2", q: "Ƙwarewar da ake iya kai wa wani wuri (transferable skill) ita ce:", options: ["Ƙwarewar da ke tura kuɗi", "Ƙwarewa daga wani ɓangare na rayuwa da ke taimakawa a wani aiki", "Tikitin bas", "Wani nau'in CV"], answer: 1, why: "Tana tafiya daga wani wuri zuwa wani." },
      { objective: "O2", q: "Waɗanne ƙwarewa ya kamata su zauna a jerinku?", options: ["Waɗanda za ku iya ba da misali na gaske a kansu", "Duk abin da AI ya ba da shawara", "Waɗanda suke da daɗin ji", "Waɗanda ke cikin CV na aboki"], answer: 0, why: "Dole ne ku iya tabbatar da su." },
      { objective: "O3", q: "CV mai kyau shi ne:", options: ["Mai shafi biyar", "Mai cike da hotuna", "Mai shafi ɗaya, mai sauƙi da tsafta", "Rubutun hannu"], answer: 2, why: "Gajere kuma a sarari ya fi sauƙi ga masu ɗaukar aiki." },
      { objective: "O3", q: "Wanne bai kamata ya taɓa shiga CV ba?", options: ["Ƙwarewa", "Gogewa", "Horo", "Lambar Social Security"], answer: 3, why: "Lambobin sirri ba sa shiga CV." },
      { objective: "O3", q: "Me yasa za ku ajiye CV ɗinku a matsayin PDF?", options: ["Yana sa shi ya kasance iri ɗaya a kowace na'ura", "Yana sa shi ya yi tsawo", "Yana ƙara masa launi", "Masu ɗaukar aiki suna biyan kuɗinsa"], answer: 0, why: "PDF yana riƙe tsarin shafin ba tare da canji ba." },
      { objective: "O3", q: "A ina za ku iya rubuta CV kyauta?", options: ["Ɗakin zane da ake biya", "Google Docs ko Word a intanet", "Saƙon tes", "Na'urar lissafi (calculator)"], answer: 1, why: "Dukansu kayan rubutu ne kyauta." },
      { objective: "O4", q: "Kalmomi masu muhimmanci (keywords) su ne:", options: ["Kalmomin sirri (passwords)", "Makullan gidanku", "Muhimman kalmomi daga tallar aiki", "Lambobin banki"], answer: 2, why: "Amfani da su yana nuna dacewar." },
      { objective: "O4", q: "Prompt mai kyau na daidaitawa yana neman AI ya:", options: ["Ƙirƙiri gogewa", "Rubuta muku sabon suna", "Mayar da CV shafi uku", "Ba da shawarar canje-canje na gaskiya don ya fi dacewa"], answer: 3, why: "Daidaitawa ta gaskiya ita ce ƙwarewar." },
      { objective: "O4", q: "Kuna neman ayyuka biyu daban-daban. Ya kamata ku:", options: ["Ajiye kwafin CV mai sunan kowane aiki", "Yi amfani da CV ɗaya don kowane aiki ba tare da canji ba", "Kada ku nema", "Kwafi kowace talla zuwa cikin CV ɗinku"], answer: 0, why: "Kowane aiki yana samun nasa kwafin da ya dace." },
      { objective: "O5", q: "Ta yaya AI zai iya taimaka muku shirya hirar aiki?", options: ["Yana zuwa hirar a madadinku", "Yana yin aikin mai yin hira kuma yana ba da shawarwari", "Yana tabbatar muku da aikin", "Yana kiran mai ɗaukar aiki"], answer: 1, why: "Gwaji tare da shawarwari yana gina ƙarfin gwiwa." },
      { objective: "O5", q: "Ku gwada amsoshin hirar aiki:", options: ["A zuciya kawai", "Ba a taɓa ba", "Da babbar murya", "A rubuce kawai"], answer: 2, why: "Faɗar su da babbar murya yana shirya ku don ainihin hirar." },
      { objective: "O5", q: "Labarin amsa mai ƙarfi ya ƙunshi:", options: ["Matsalar kawai", "Labarin wani daban", "Babu wani abu takamaimai", "Abin da ya faru, abin da kuka yi, da yadda ya ƙare"], answer: 3, why: "Wannan tsari yana nuna ƙwarewarku." },
      { objective: "O5", q: "Idan akwai lokacin da ba ku yi aiki ba, ku gwada:", options: ["Jimla ɗaya gajeriya ta gaskiya, sannan abin da kuka shirya yi yanzu", "Ɓoye shi", "Dogon neman gafara", "Aikin da aka ƙirƙira"], answer: 0, why: "Gaskiya da gajarta, sannan ku mai da hankali kan gaba." },
      { objective: "O6", q: "A cewar FTC, masu ɗaukar aiki masu gaskiya:", options: ["Suna karɓar ɗan kuɗi kaɗan", "Ba sa taɓa neman ku biya kuɗi don samun aiki", "Suna son katin kyauta", "Suna biya da cak da dole ku mayar da wani ɓangare"], answer: 1, why: "Biyan kuɗi don samun aiki alamar zamba ce." },
      { objective: "O6", q: "Wane aiki ne zamba da aka saba gani?", options: ["Mai karɓar kuɗi a sanannen shago", "Mataimaki a ɗakin karatu", "Karɓar kunshin kaya da sake tura su daga gida", "Direban motar makaranta"], answer: 2, why: "Ayyukan sake tura kaya sanannar zamba ce." },
      { objective: "O6", q: "Yaushe ya kamata ku ba sabon mai ɗaukar aiki lambar bankinku?", options: ["A tes ɗin farko", "Don samun hirar aiki", "Kafin ku ga tallar aiki", "Sai bayan kun tabbatar cewa aiki ne na gaske"], answer: 3, why: "Ku fara tabbatar da cewa aikin na gaske ne." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      7,
      10,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "CV mai shafi ɗaya",
        objective: "O3",
        notYet: "Ya fi shafi ɗaya, wasu sassa sun ɓace, ko akwai lambobin sirri a ciki.",
        meets: "Shafi ɗaya da layin tuntuɓa, taƙaitawa, ƙwarewa, abubuwan da aka yi da ilimi, ba tare da lambobin sirri ba.",
        exceeds: "An karanta shi da babbar murya, an gyara kurakurai, kuma an ajiye shi a matsayin PDF."
      },
      {
        name: "Ya dace da tallar aiki",
        objective: "O4",
        notYet: "CV ɗin bai yi amfani da ƙwarewa ko kalmomin tallar ba, ko an ƙara abubuwan da ba gaskiya ba.",
        meets: "Yana amfani da manyan ƙwarewar tallar a cikin bayanan gaskiya.",
        exceeds: "An ajiye shi a matsayin kwafi na daban mai sunan wannan aikin."
      },
      {
        name: "Ƙwarewa ta gaske",
        objective: "O2",
        notYet: "Yana jera ƙwarewar da mai koyo ba zai iya ba da misalinta ba.",
        meets: "Kowace ƙwarewa tana da misali na gaske daga aikin albashi ko marar albashi.",
        exceeds: "Ya haɗa da ƙwarewar marasa albashi kamar kula da iyali ko aikin sa-kai tare da misalai a sarari."
      },
      {
        name: "Amsoshin hirar aiki",
        objective: "O5",
        notYet: "Amsoshi ƙasa da uku, ko ba a faɗe su da babbar murya ba.",
        meets: "An amsa tambayoyi uku da babbar murya, tare da neman shawara ɗaya a kowace.",
        exceeds: "An sake gwada kowace amsa ta amfani da shawarar, tare da gajeren labari na gaske."
      },
      {
        name: "Binciken zamba",
        objective: "O6",
        notYet: "Ba a duba tallar don alamun gargaɗi ba.",
        meets: "An duba tallar don alamun zamba kuma an bincika kamfanin.",
        exceeds: "Zai iya faɗin waɗanne alamun gargaɗi ne suke ciki da waɗanda babu."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi aƙalla aiki ɗaya cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka sami hirar aiki ko aiki cikin kwanaki 90",
      "Masu koyo da suka ziyarci American Job Center ko suka ce sun guje wa zambar aiki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko kwamfutar ɗakin karatu ko ta cibiyar neman aiki",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Google Docs ko Word a intanet (kyauta) don rubutawa da ajiye CV",
      "Tallar aiki ta gaske da mai koyo zai iya nema",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku taimaki masu koyo su fara nemo ƙwarewarsu ta marasa albashi; da yawa suna tsammanin ba su da ita.",
      "Ku duba kowane prompt da CV don lambobin Social Security, ranakun haihuwa da sauran lambobin sirri.",
      "Ku haɗa masu koyo bibiyu don gwajin hirar aiki, don su ma amsa da babbar murya ga mutum na gaske.",
      "Ku yi haɗin gwiwa da American Job Center na yankin, kuma ku gayyaci ma'aikacinsa idan za ku iya.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
