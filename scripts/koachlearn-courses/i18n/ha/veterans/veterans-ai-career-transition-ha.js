"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-ai-career-transition.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "veterans-ai-career-transition-ha",
  lang: "ha",
  translationOf: "veterans-ai-career-transition",
  category: "Veterans (military)",
  name: "AI don Sauyin Sana'a da Samun Aiki",
  skills: "Nemo taimakon hukuma na sauyin rayuwa, Karanta tallar aiki don kalmomi masu muhimmanci, Rubuta CV na farar hula da ya dace da aiki, Rubuta gajeriyar wasiƙar neman aiki da bayanin kai, Atisayen hirar aiki da AI, Gane zambar aiki",
  outcome: "amfani da mataimakin AI don rubuta CV (résumé) na farar hula mai shafi ɗaya da ya dace da tallar aiki ɗaya ta gaske, da amsar \"tell me about yourself\" (ku faɗa mana game da kanku) ta daƙiƙa 60, tabbatar da cewa dukansu gaskiya ne kuma babu bayanan sirri a ciki, da sanin inda ake samun taimakon hukuma kyauta.",
  about: [
    "Wannan kwas ɗin na tsofaffin sojoji (veterans) ne da sojojin da ke barin aiki, waɗanda ke neman aikin farar hula. Kuna da ƙwarewa; aikin yanzu shi ne ku nuna ta da kalmomin da manajan ɗaukar aiki na farar hula zai fahimta, kuma ku shirya don hirar aiki.",
    "Za ku nemo taimakon hukuma kyauta, ku karanta tallar aiki kamar manajan ɗaukar aiki, ku yi amfani da mataimakin AI kyauta don gina CV da ya dace da aikin, gajeriyar wasiƙar neman aiki da bayanin kai a intanet, sannan ku yi atisayen amsoshin hirar aiki. Za ku kuma koyi gane zambar aiki.",
    "Kowane darasi yana ɗaukar kusan minti biyar: ku karanta, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku zaɓi tallar aikin farar hula ɗaya ta gaske. Ku yi amfani da mataimakin AI don rubuta CV mai shafi ɗaya da ya dace da ita (aƙalla layuka biyar masu kalmomin farar hula da lambobi) da amsar \"tell me about yourself\" ta daƙiƙa 60. Ku tabbatar cewa kowace magana gaskiya ce, cewa babu lambar Social Security, DD-214 ko wata lambar sirri a ciki, sannan ku faɗi amsar da babbar murya sau biyu.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji da sojojin da ke barin aiki, waɗanda ke neman aikin farar hula, tun daga masu wa'adin farko har zuwa masu ritaya.",
    startingPoint: "Suna da ƙwarewa ta gaske, ladabi da iya shugabanci, kuma suna iya amfani da kwamfuta ko wayar zamani. Yawancinsu ba su taɓa rubuta CV na farar hula da ya dace da wata talla ba, ko yin atisayen hirar aikin farar hula ba, kuma kaɗan ne suka yi amfani da mataimakin AI don taimako.",
    gap: "Manajojin ɗaukar aiki na farar hula da manhajojin da ke duba CV suna neman kalmomin tallar da kanta da sakamako a sarari, kuma 'yan zambar aiki suna farautar mutanen da ke cikin sauyi. Masu koyo suna buƙatar amfani da AI don daidaita CV da amsar hira na gaskiya, marasa bayanan sirri, da tallar aiki ɗaya ta gaske, kuma su san inda ake samun taimakon hukuma kyauta.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: kwamfuta ta fi sauƙi don aikin CV; wayar zamani tana aiki don atisaye",
      "Sirri: babu lambar Social Security, DD-214 ko wata lambar sirri a kowane prompt na AI ko a CV",
      "Gaskiya: kowace magana da lamba a CV dole ta zama gaskiya",
      "Lokaci: darussa na kusan minti 5 da suka dace da ganawar sauyi da aiki"
    ],
    prerequisites: "Babu. Kwas ɗin \"Gabatarwa ga AI da Makomar Ma'aikata\" yana taimaka wa masu koyo su fara mayar da ayyukansu na soja zuwa layukan farar hula."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Bisa matakin sauyin da kuke ciki", action: "gane majiyoyin hukuma masu ba da taimakon aiki kyauta, da zaɓar ɗaya da za ku tuntuɓa", standard: "kuna rubuta hanyar tuntuɓa ko lokacin ganawa" },
    { id: "O2", condition: "Idan aka ba ku tallar aiki ɗaya ta gaske", action: "jera abubuwan da ake buƙata dole, waɗanda ake so kawai, da kalmomi masu muhimmanci tare da taimakon AI, da daidaita su da ƙwarewarku", standard: "da aƙalla kalmomi 10 daga tallar" },
    { id: "O3", condition: "Ta amfani da jerin kalmominku masu muhimmanci", action: "rubuta CV na farar hula mai shafi ɗaya da ya dace da tallar, tare da taimakon AI", standard: "da aƙalla layuka biyar masu kalmomin farar hula da lambobi, kowace magana gaskiya ce, kuma babu lambar sirri" },
    { id: "O4", condition: "Don aiki ɗaya ɗin", action: "rubuta gajeriyar wasiƙar neman aiki da bayanin kai a intanet tare da taimakon AI", standard: "an gyara su har sun yi kama da yadda kuke magana" },
    { id: "O5", condition: "Idan AI yana yin kamar manajan ɗaukar aiki", action: "yin atisayen amsar \"tell me about yourself\" ta daƙiƙa 60 da amsoshin STAR da babbar murya", standard: "aƙalla sau biyu, kuna rubuta ƙarfi ɗaya da gyara ɗaya" },
    { id: "O6", condition: "Idan kuna neman aiki", action: "nema a majiyoyin aiki na hukuma da gane alamun gargaɗin zambar aiki", standard: "ba tare da biyan komai ko bayar da lambar sirri kafin tayin aiki na gaske ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gina CV ɗinku na farar hula",
      lessons: [
        {
          objectives: ["O1"],
          title: "Taimakon hukuma kyauta don sauyi da aiki",
          minutes: 5,
          goal: "Ambaci majiyoyin hukuma uku masu ba da taimakon aiki kyauta, ku zaɓi ɗaya da za ku tuntuɓa.",
          text: [
            "Ba sai kun yi wannan ku kaɗai ba. Shirin Transition Assistance Program (TAP, shirin taimakon sauyi) wasu hukumomi da dama ne ke gudanar da shi, ciki har da Ma'aikatar Ƙwadago (Department of Labor), Ma'aikatar Tsaro (Department of Defense) da VA (hukumar tsofaffin sojoji). Sashen Ma'aikatar Ƙwadago ya haɗa da tarukan horon aiki da taimako ido-da-ido ta shirinta na Employment Navigator and Partnership Program a wasu sansanoni. Ku nemo jadawalin azuzuwa ta ofishin sauyi na sansaninku.",
            "Bayan kun bar aiki, American Job Centers (cibiyoyin aiki na Amurka, kusan 2,400 a faɗin ƙasar, ana samun su ta CareerOneStop) suna taimakawa wajen neman aiki da horo, kuma ana fara hidimar tsofaffin sojoji (priority of service). Shirin VA na Personalized Career Planning and Guidance yana ba da shawarwari kyauta kan sana'a da ilimi, ciki har da taimakon CV, ga tsofaffin sojoji da sojoji da suka cancanta.",
            "AI abokin rubutu ne mai kyau, amma mai ba da shawara da aka horar ya san kasuwar aiki ta yankinku da tallafinku. Ku yi amfani da dukansu biyu."
          ],
          steps: ["Idan har yanzu kuna aiki: ku tuntuɓi ofishin sauyi na sansaninku game da TAP.", "Idan kun bar aiki: ku nemo American Job Center mafi kusa a CareerOneStop.", "Ku karanta shafin VA na Personalized Career Planning and Guidance, ku duba ko kun cancanta.", "Ku sanya ganawa ɗaya a wannan makon."],
          words: [["TAP", "Transition Assistance Program: horo da taimako ga sojojin da ke komawa rayuwar farar hula."], ["American Job Center", "cibiya kyauta da Ma'aikatar Ƙwadago ke ɗaukar nauyinta, don taimakon neman aiki da horo."], ["Priority of service (fifiko a hidima)", "ana fara hidimar tsofaffin sojoji a yawancin shirye-shiryen aiki da horo na Ma'aikatar Ƙwadago."]],
          slides: [
            { title: "Idan har yanzu kuna aiki", bullets: ["Transition Assistance Program (TAP)", "Tarukan horon aiki na Ma'aikatar Ƙwadago (DOL)", "Taimako ido-da-ido a wasu sansanoni"] },
            { title: "Bayan kun bar aiki", bullets: ["American Job Centers, ana samun su a CareerOneStop", "Ana fara hidimar tsofaffin sojoji", "Shawarwarin sana'a kyauta daga VA"] },
            { title: "Ku yi amfani da dukansu", bullets: ["AI don taimakon rubutu", "Mai ba da shawara don ayyukan yankinku da tallafi"] }
          ],
          sources: [
            { name: "U.S. Department of Labor: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Ku zaɓi majiyar hukuma ɗaya daga wannan darasi da ta dace da ku yanzu. Ku nemo shafinta ko ofishinta mafi kusa, ku rubuta yadda za ku tuntuɓe ta. Ku sanya ko ku shirya ganawa ɗaya.",
          youCanNow: "ambaton majiyoyin hukuma masu ba da taimakon aiki kyauta, da zaɓar wadda ta dace ku tuntuɓa.",
          quickCheck: [
            { objective: "O1", q: "Wanne a cikin waɗannan majiyar hukuma ce ta taimakon aiki kyauta ga sojojin da ke barin aiki?", options: ["Shafin CV na kuɗi daga talla", "Baƙo a kafofin sada zumunta", "TAP a ofishin sauyi na sansaninku", "Tes da ke alƙawarin aiki tabbas"], answer: 2, why: "TAP shi ne shirin sauyi na hukuma, kyauta, ga sojoji." },
            { objective: "O1", q: "Kun yi amfani da AI don rubuta daftarin CV ɗinku. Me kuma za ku yi?", options: ["Ku nemi mai ba da shawara na TAP, American Job Center ko VA ya duba shi", "Ku aika shi ga kowane aiki ba tare da karanta shi ba", "Ku bar masu ba da shawara domin AI ya isa", "Ku saka shi a fili tare da lambar wayarku"], answer: 0, why: "AI yana taimaka muku rubutu, amma mai ba da shawara ya san ayyukan yankinku da tallafi kuma zai iya gano kurakurai." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Karanta tallar aiki kamar manajan ɗaukar aiki",
          minutes: 5,
          goal: "Fitar da muhimman buƙatu da kalmomi daga tallar aiki tare da taimakon AI.",
          text: [
            "Kowace tallar aiki tana faɗa muku abin da mai ɗaukar aiki yake son ji. Kamfanoni da yawa suna amfani da applicant tracking system (ATS, manhajar tantance masu nema) da ke duba CV don kalmomin da suka yi daidai da tallar, don haka amfani da kalmomin tallar da kanta yana da muhimmanci.",
            "Ku kwafi tallar aiki ta gaske cikin mataimakin AI ku tambaya: \"Ka jera abubuwan da ake buƙata dole (must-haves), ƙwarewar da ake so kawai (nice-to-haves), da kalmomi 10 mafi muhimmanci daga wannan talla. Sannan ka faɗa mini waɗanne ƙwarewata ne suka dace: na yi shekaru 7 a matsayin shugaban kayan aiki (supply chief) a Marine Corps, na jagoranci sojoji 10, na kula da kayan aiki na $2 miliyan.\"",
            "Ku kwatanta jerin AI da tallar da kanku. Idan kun cika yawancin abubuwan da ake buƙata dole, ku nema. Mutane da yawa suna nema ba tare da sun cika kowane abin da ake so kawai ba."
          ],
          steps: ["Ku zaɓi tallar aiki ɗaya ta gaske.", "Ku liƙa tallar (ba bayananku na sirri ba) cikin mataimakin AI.", "Ku nemi abubuwan da ake buƙata dole, waɗanda ake so kawai, da manyan kalmomi.", "Ku tambayi waɗanne ƙwarewarku ne suka dace.", "Ku kwatanta jerin da tallar da kanku."],
          words: [["Applicant tracking system (ATS)", "manhajar da masu ɗaukar aiki ke amfani da ita don tattarawa da duba CV don kalmomin da suka dace."], ["Kalma mai muhimmanci (keyword)", "muhimmiyar kalma ko jumla daga tallar, kamar \"inventory control\" (kula da kayan ajiya)."], ["Abin da ake buƙata dole (must-have)", "sharaɗin da dole ku cika don a duba ku."]],
          slides: [
            { title: "Tallar tana faɗa muku abin da za ku faɗa", bullets: ["Masu ɗaukar aiki suna duba kalmomin da suka dace", "Ku yi amfani da kalmomin tallar da kanta"] },
            { title: "Ku nemi AI ya fitar da", bullets: ["Abubuwan da ake buƙata dole", "Ƙwarewar da ake so kawai", "Manyan kalmomi 10", "Waɗanne ƙwarewarku ne suka dace"] },
            { title: "Sannan ku yanke shawara", bullets: ["Ku duba jerin da kanku", "Kun cika yawancin abubuwan dole? Ku nema"] }
          ],
          tryIt: "Ku nemo tallar aiki ɗaya ta gaske da kuke so. Ku nemi mataimakin AI ya jera abubuwan da ake buƙata dole, waɗanda ake so kawai, da manyan kalmominta 10, da waɗanne ƙwarewarku ne suka dace.",
          youCanNow: "fitar da buƙatu da kalmomi masu muhimmanci daga tallar aiki, da daidaita su da ƙwarewarku.",
          quickCheck: [
            { objective: "O2", q: "Mene ne \"nice-to-have\" (abin da ake so kawai) a tallar aiki?", options: ["Sharaɗin da dole ku cika don neman aikin", "Albashi", "Adireshin kamfanin", "Ƙwarewar da ke taimakawa amma ba dole ba ce"], answer: 3, why: "Abubuwan da ake so kawai ƙari ne; har yanzu kuna iya nema idan kun cika yawancin abubuwan dole." },
            { objective: "O2", q: "Kun liƙa tallar aiki cikin AI. Me za ku nema?", options: ["\"Wannan aikin yana da kyau?\"", "\"Ka jera abubuwan dole, waɗanda ake so kawai da manyan kalmomi 10, da waɗanne ƙwarewata ne suka dace.\"", "\"Ka nema mini aikin.\"", "\"Ka rubuta lambar Social Security ɗina a kai.\""], answer: 1, why: "Buƙata a sarari tana fitar da buƙatu da kalmomin da kuke buƙata don daidaita CV ɗinku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta CV na farar hula da ya dace da aikin",
          minutes: 6,
          goal: "Yi amfani da AI don rubuta daftarin CV mai shafi ɗaya da ya dace da talla ɗaya, da kalmomin farar hula da lambobi.",
          text: [
            "CV na farar hula yawanci shafi ɗaya ne ko biyu, ba cikakken tarihin aikin soja ba. Yana da gajeren taƙaitawa a sama, ƙwarewarku a layuka, iyawarku, karatunku da takardun shaidar ƙwarewa (certifications). Ku yi amfani da sunayen mukaman farar hula inda suka dace (\"supply chain supervisor\", mai kula da sarkar kayayyaki, maimakon \"supply chief\") kuma ku bayyana abin da kuka yi, girmansa, da sakamakon.",
            "Ku ba AI ƙwarewarku da kalmomi masu sauƙi da kalmomi masu muhimmanci daga Darasi na 2: \"Ka rubuta CV mai shafi ɗaya don wannan tallar aikin logistics coordinator. Ka yi amfani da waɗannan kalmomi. Ƙwarewata: [bayani mai sauƙi]. Ka yi amfani da kalmomin aiki masu ƙarfi da lambobi, babu gajartawar soja.\"",
            "Ku cire lambar Social Security ɗinku, bayanan DD-214 (takardar barin aikin soja), cikakkiyar ranar haihuwa, da bayanan izinin tsaro (security clearance) fiye da abin da tallar ta nema. Kada ku taɓa barin AI ya ƙara abubuwan da ba ku yi ba. Sannan ku nemi mai ba da shawara na TAP, American Job Center ko VA ya duba shi."
          ],
          steps: ["Ku rubuta ƙwarewarku da kalmomi masu sauƙi: me, girmansa, wane sakamako.", "Ku ba AI kalmomi masu muhimmanci daga tallar.", "Ku nemi CV mai shafi ɗaya mai taƙaitawa, layukan ƙwarewa da iyawa.", "Ku canja kalmomin soja ku tabbatar kowace magana gaskiya ce.", "Ku cire bayanan sirri ku nemi mai ba da shawara ya duba shi."],
          words: [["Taƙaitawa (summary)", "layuka biyu ko uku a saman CV da ke faɗin ko ku wane ne da abin da kuke bayarwa."], ["Daidaitawa (tailor)", "canja CV ɗinku don ya dace da aiki ɗaya musamman."]],
          slides: [
            { title: "Siffar CV na farar hula", bullets: ["Gajeren taƙaitawa", "Layukan ƙwarewa masu sakamako", "Iyawa, karatu, takardun shaidar ƙwarewa"] },
            { title: "Ku faɗe shi yadda suke faɗa", bullets: ["Sunayen mukaman farar hula inda suka dace", "Me, girmansa, wane sakamako", "Ku yi amfani da kalmomin tallar"] },
            { title: "Ku sa ya zama gaskiya kuma lafiya", bullets: ["Babu SSN, bayanan DD-214 ko cikakkiyar ranar haihuwa", "Kada ku bar AI ya ƙara abin da ba ku yi ba", "Ku sa mai ba da shawara ya duba shi"] }
          ],
          tryIt: "Ku yi amfani da jerin kalmominku daga Darasi na 2. Ku nemi mataimakin AI ya rubuta daftarin CV mai shafi ɗaya don wannan tallar. Ku canja duk layin da ba gaskiya ce sosai ba.",
          youCanNow: "rubuta CV na farar hula mai shafi ɗaya da ya dace da wata tallar aiki, tare da taimakon AI.",
          quickCheck: [
            { objective: "O3", q: "Me yasa CV da aka daidaita yake amfani da kalmomin tallar da kanta?", options: ["Don manhajar dubawa da manajan ɗaukar aiki su ga dacewar", "Don ya yi tsawo", "Don ya yi amfani da kalmomin soja", "Don ku tsallake wasiƙar neman aiki"], answer: 0, why: "Manhajojin ATS da manajojin ɗaukar aiki suna neman kalmomi masu muhimmanci na tallar." },
            { objective: "O3", q: "Daftarin AI ya ce kuna da takardar shaidar ƙwarewa da ba ku da ita. Me za ku yi?", options: ["Ku bar ta; babu mai dubawa", "Ku ce kuna gab da samun ta", "Ku cire ta don kowace magana ta zama gaskiya", "Ku ƙara wasu biyu"], answer: 2, why: "Kowace magana a CV ɗinku dole ta zama gaskiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gina CV ɗinku na farar hula",
        questions: [
          { objective: "O1", q: "Za ku bar aikin soja wata mai zuwa kuma kuna son taimakon aiki ido-da-ido. Wuri mai kyau na farko shi ne:", options: ["Ofishin sauyi na sansaninku da TAP", "Kowane shafin aiki na bazata", "Shahararren mutum a kafofin sada zumunta", "Hidimar da ke karɓar kuɗi don nema muku aiki"], answer: 0, why: "TAP da Ma'aikatar Ƙwadago suna ba da tarukan horo da taimako ido-da-ido." },
          { objective: "O2", q: "Mene ne applicant tracking system?", options: ["GPS don hirar aiki", "Manhajar da ke duba CV don kalmomin da suka dace", "Tallafin VA", "Rumbun bayanan soja"], answer: 1, why: "Masu ɗaukar aiki da yawa suna amfani da ita don tace CV." },
          { objective: "O2", q: "Me yasa za ku yi amfani da kalmomin tallar aiki a CV ɗinku?", options: ["Don kwaikwayon mai ɗaukar aiki", "Don ya yi tsawo", "Don manhajar dubawa da manajojin ɗaukar aiki su ga dacewar", "Doka ce ta tilasta"], answer: 2, why: "Kalmomin da suka dace suna nuna kun dace da aikin." },
          { objective: "O3", q: "Wane layin CV ne ya fi aiki don aikin logistics (jigilar kaya) na farar hula?", options: ["\"S4 shop NCOIC\"", "\"Did supply stuff\"", "\"Hooah\"", "\"Managed $2 million in equipment with zero losses across 3 inventories\""], answer: 3, why: "Kalmomin farar hula, lambobi da sakamako (\"Na kula da kayan aiki na $2 miliyan ba tare da asara ba a ƙididdiga 3\")." },
          { objective: "O3", q: "Wanne ya kamata ku BARI daga CV na farar hula?", options: ["Lambar Social Security ɗinku", "Iyawarku", "Gajeren taƙaitawa", "Takardun shaidar ƙwarewarku"], answer: 0, why: "Lambobin sirri ba su da wuri a CV." }
        ]
      }
    },
    {
      name: "Babi na 2: Neman aiki da hirar aiki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta gajeriyar wasiƙar neman aiki da bayanin kai",
          minutes: 5,
          goal: "Yi amfani da AI don rubuta gajeriyar wasiƙar neman aiki da bayanin kai a intanet, da muryarku.",
          text: [
            "Wasiƙar neman aiki (cover letter) gajeriyar wasiƙa ce da ke faɗin dalilin da yasa kuke son wannan aikin da yadda kuka dace da shi. Ku sa ta zama sakin layi uku gajeru: me yasa wannan aikin, abubuwa biyu ko uku mafi kyau da kuka dace da su tare da hujja, da rufewa cikin ladabi.",
            "Ku tambayi AI: \"Ka rubuta wasiƙar neman aiki mai sakin layi 3 don wannan tallar, ta amfani da CV ɗina. Ta yi kama da mai ƙarfin gwiwa amma ba mai tauri ba, babu kalmomin soja.\" Sannan ku sa ta yi kama da ku: ku canja kalmomin da ba za ku taɓa faɗa ba.",
            "Bayanin kai a intanet (profile summary), misali a LinkedIn, jimloli biyu zuwa huɗu ne game da ko ku wane ne da irin aikin da kuke so. Ku nemi AI ya ba ku iri uku, ku zaɓi ɗaya ku gyara shi."
          ],
          steps: ["Ku ba AI tallar da CV ɗinku.", "Ku nemi wasiƙar neman aiki mai sakin layi uku.", "Ku gyara ta har ta yi kama da ku.", "Ku nemi iri uku na bayanin kai mai jimloli biyu zuwa huɗu.", "Ku zaɓi ɗaya, ku gyara shi ku yi amfani da shi."],
          words: [["Wasiƙar neman aiki (cover letter)", "gajeriyar wasiƙa da ake aikawa tare da CV, mai faɗin dalilin da yasa kuke son aikin da yadda kuka dace."], ["Bayanin kai (profile summary)", "'yan jimloli game da ku a saman shafin sana'arku na intanet."]],
          slides: [
            { title: "Wasiƙar neman aiki: sakin layi uku", bullets: ["Me yasa wannan aikin", "Abubuwan da kuka fi dacewa da su, tare da hujja", "Rufewa cikin ladabi"] },
            { title: "Ku mai da ita taku", bullets: ["Mai ƙarfin gwiwa, ba mai tauri ba", "Babu kalmomin soja", "Ku canja kalmomin da ba za ku taɓa faɗa ba"] },
            { title: "Bayanin kai", bullets: ["Jimloli biyu zuwa huɗu", "Ko ku wane ne da irin aikin da kuke so", "Ku nemi AI ya ba ku iri uku"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya rubuta wasiƙar neman aiki mai sakin layi uku don aikin daga Darasi na 2. Ku canja aƙalla jumloli uku don ta yi kama da ku.",
          youCanNow: "rubuta gajeriyar wasiƙar neman aiki da bayanin kai tare da taimakon AI, da muryarku.",
          quickCheck: [
            { objective: "O4", q: "Yaya tsawon wasiƙar neman aiki mai kyau?", options: ["Jimla ɗaya", "Sakin layi uku gajeru", "Cikakkun shafuka uku", "Tsawon CV ɗinku"], answer: 1, why: "Sakin layi uku gajeru suna faɗin me yasa wannan aikin, abubuwan da kuka fi dacewa da su, da rufewa cikin ladabi." },
            { objective: "O4", q: "Wasiƙar AI tana amfani da kalmomin da ba za ku taɓa faɗa ba. Me za ku yi?", options: ["Ku aika ta yadda take", "Ku nemi mafi tsawo", "Ku kwafi wasiƙar aboki a maimakon haka", "Ku canja aƙalla jumloli uku don ta yi kama da ku"], answer: 3, why: "Wasiƙarku ya kamata ta yi kama da ku, don hirar aiki ta yi daidai da wasiƙar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Atisayen hirar aiki da AI",
          minutes: 6,
          goal: "Yi atisayen gabatarwa ta daƙiƙa 60 da amsoshin STAR biyu tare da AI a matsayin mai yin hira.",
          text: [
            "Yawancin hirarrakin aiki suna farawa da \"Tell me about yourself\" (ku faɗa mana game da kanku). Amsa mai kyau tana ɗaukar kusan daƙiƙa 60: ko ku wane ne yanzu, ƙwarewarku mafi dacewa, da dalilin da yasa kuke son wannan aikin. Kada ku ba da duka tarihin aikinku na soja.",
            "Don tambayoyin \"Ku faɗa mana lokacin da...\", ku yi amfani da STAR: situation (halin da ake ciki), task (aikin da aka ba ku), action (abin da kuka yi), result (sakamako). Misali: \"Shirin motocin rundunarmu yana kan 70% (halin da ake ciki). An ce in ɗaga shi kafin bincike (aiki). Na kafa jerin bin diddigin kayan gyara na kullum da jadawalin aiki na kashi biyu (abin da na yi). Shirin ya kai 92% cikin makonni shida (sakamako).\"",
            "Ku nemi AI ya yi kamar mai yin hira: \"Ka yi kamar manajan ɗaukar aiki don wannan aikin. Ka yi mini tambaya ɗaya a lokaci ɗaya. Bayan kowace amsa, ka faɗa mini abu ɗaya da na yi da kyau da abu ɗaya da zan inganta.\" Ku yi atisaye da babbar murya. Idan kuna amfani da yanayin murya (voice mode), ku yi magana yadda kuka saba."
          ],
          steps: ["Ku rubuta amsar \"tell me about yourself\" ta daƙiƙa 60.", "Ku rubuta labaran STAR biyu daga aikinku na soja.", "Ku nemi AI ya yi kamar mai yin hira, tambaya ɗaya a lokaci ɗaya.", "Ku amsa da babbar murya, ku nemi ƙarfi ɗaya da gyara ɗaya kowane lokaci.", "Ku yi atisaye har ya zama muku sauƙi."],
          words: [["STAR", "situation, task, action, result (halin da ake ciki, aiki, abin da kuka yi, sakamako): hanyar ba da gajeren labari game da aikinku."], ["Tambayar ɗabi'a (behavioral question)", "tambayar hirar aiki da ke tambaya game da lokacin da kuka yi wani abu."]],
          slides: [
            { title: "\"Tell me about yourself\"", bullets: ["Kusan daƙiƙa 60", "Ko ku wane ne yanzu", "Ƙwarewarku mafi dacewa", "Me yasa wannan aikin"] },
            { title: "Amsoshin STAR", bullets: ["Situation: halin da ake ciki", "Task: aikin da aka ba ku", "Action: abin da kuka yi", "Result: sakamako, da lamba idan za ku iya"] },
            { title: "AI a matsayin mai yin hira", bullets: ["Tambaya ɗaya a lokaci ɗaya", "Ƙarfi ɗaya da gyara ɗaya bayan kowace amsa", "Ku yi atisaye da babbar murya"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya yi kamar manajan ɗaukar aiki don aikin da kuka zaɓa. Ku amsa tambayoyi uku da babbar murya, ciki har da \"Tell me about yourself\", ku rubuta shawarwarin da ya ba ku.",
          youCanNow: "ba da gabatarwa ta daƙiƙa 60 da amsa tambayoyin ɗabi'a ta amfani da STAR.",
          quickCheck: [
            { objective: "O5", q: "Me harafin A a amsar STAR yake nufi?", options: ["Award (lambar yabo)", "Attitude (hali)", "Action (abin da kuka yi)", "Answer (amsa)"], answer: 2, why: "STAR shi ne situation, task, action, result; action shi ne abin da kuka yi." },
            { objective: "O5", q: "Kuna son yin atisaye da AI a matsayin mai yin hira. Wace buƙata za ku yi amfani da ita?", options: ["\"Ka yi tambaya ɗaya a lokaci ɗaya, ka ba ni ƙarfi ɗaya da gyara ɗaya.\"", "\"Ka ba ni duka amsoshin in haddace.\"", "\"Ka yi mini tambayoyi 30 a lokaci ɗaya.\"", "\"Ka ce mini ni cikakke ne.\""], answer: 0, why: "Tambaya ɗaya a lokaci ɗaya tare da shawara tana ba ku damar yin atisaye da inganta kowace amsa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Neman aiki da hikima da gane zambar aiki",
          minutes: 5,
          goal: "Nema a majiyoyin aiki na hukuma kuma ku gane alamun gargaɗin zambar aiki.",
          text: [
            "Ku nema inda ake saka ayyuka na gaske: shafukan kamfanoni, CareerOneStop Job Finder, American Job Centers, kuma don ayyukan gwamnatin tarayya, USAJOBS da shafin FedsHireVets na Office of Personnel Management (OPM, ofishin kula da ma'aikatan gwamnati), wanda ke bayanin ɗaukar aikin gwamnatin tarayya ga tsofaffin sojoji, ciki har da veterans' preference (fifikon tsofaffin sojoji).",
            "'Yan damfara suna farautar masu neman aiki. Alamun gargaɗi: tayin aiki ba tare da hira ba, neman ku biya kuɗin horo ko kayan aiki, cak da za ku saka a banki sannan ku mayar da wani kuɗi, hira ta saƙon rubutu kawai, ko neman lambar Social Security ɗinku ko bayanan bankinku kafin tayin aiki na gaske.",
            "Ku nemi AI ya nuna alamun gargaɗi a wata talla da kuke shakka, bayan kun cire bayananku. Sannan ku duba kamfanin da kanku a shafinsa na hukuma. Ku ba da bayanan sirri ne kawai don takardun gaske, bayan tayin aiki na gaske, ta hanyar hukuma ta mai ɗaukar aikin."
          ],
          steps: ["Ku nema a shafukan kamfanoni, CareerOneStop, American Job Centers da USAJOBS.", "Ku nemi alamun gargaɗi: babu hira, biyan kuɗi tun farko, saka cak ku mayar da kuɗi, hira ta rubutu kawai.", "Kada ku ba da SSN ko bayanan banki kafin tayin aiki na gaske.", "Ku duba kamfanin a shafinsa na hukuma.", "Ku nemi AI ya jera alamun gargaɗi a tallar da kuke shakka."],
          words: [["Veterans' preference (fifikon tsofaffin sojoji)", "dokokin da ke ba tsofaffin sojoji da suka cancanta fifiko wajen ɗaukar aikin gwamnatin tarayya."], ["Zambar aiki", "tayin aikin bogi da ake yi don satar kuɗi ko bayanan sirri."]],
          slides: [
            { title: "Ku nema inda ayyuka na gaske suke", bullets: ["Shafukan kamfanoni", "CareerOneStop da American Job Centers", "USAJOBS da FedsHireVets don ayyukan gwamnatin tarayya"] },
            { title: "Alamun gargaɗin zambar aiki", bullets: ["Tayin aiki ba tare da hira ba", "Biyan kuɗin horo ko kayan aiki", "Saka cak a banki ku mayar da kuɗi", "Hira ta saƙon rubutu kawai"] },
            { title: "Ku kare kanku", bullets: ["Babu SSN ko bayanan banki kafin tayin aiki na gaske", "Ku duba kamfanin da kanku", "Ku nemi AI ya gano alamun gargaɗi"] }
          ],
          sources: [
            { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "Office of Personnel Management: FedsHireVets", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "Aikin ƙarshe: ku gama CV ɗinku mai shafi ɗaya da ya dace da tallar da kuka zaɓa, da amsarku ta \"tell me about yourself\" ta daƙiƙa 60. Ku tabbatar kowace magana gaskiya ce kuma babu lambobin sirri, sannan ku faɗi amsar da babbar murya sau biyu.",
          youCanNow: "nema a majiyoyin aiki na hukuma, guje wa zambar aiki, da neman aiki da CV da aka daidaita da gabatarwar da kuka yi atisaye.",
          quickCheck: [
            { objective: "O6", q: "A ina ake saka ayyukan gwamnatin tarayya ta Amurka?", options: ["A kafofin sada zumunta kawai", "A saƙonnin tes daga baƙi", "A shafukan CV na kuɗi", "USAJOBS"], answer: 3, why: "USAJOBS shi ne shafin hukuma na tallar ayyukan gwamnatin tarayya." },
            { objective: "O6", q: "Wani mai ɗaukar ma'aikata yana neman lambar Social Security ɗinku kafin kowace hira. Me za ku yi?", options: ["Ku aika ta don kada ku rasa aikin", "Kada ku aika; ku ba da ita ne kawai don takardun gaske bayan tayin aiki na gaske", "Ku aika rabinta", "Ku aika DD-214 ɗinku a maimakon haka"], answer: 1, why: "Neman lambobin sirri kafin kowace hira ko tayi alamar gargaɗin zamba ce." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Neman aiki da hirar aiki",
        questions: [
          { objective: "O4", q: "Wasiƙar neman aiki mai kyau ita ce:", options: ["Mai shafuka biyar", "Sakin layi uku gajeru: me yasa wannan aikin, abubuwan da kuka fi dacewa da su, rufewa cikin ladabi", "Kwafin CV ɗinku", "Cike da gajartawar soja"], answer: 1, why: "Gajeriya, mai mayar da hankali, kuma ta dace da aikin." },
          { objective: "O5", q: "Amsar \"tell me about yourself\" ya kamata ta zama kusan:", options: ["Minti 10", "Duka tarihin aikinku na soja", "Daƙiƙa 60: ko ku wane ne, ƙwarewa mai dacewa, me yasa wannan aikin", "Tarihin iyalinku"], answer: 2, why: "Gajeriya kuma mai mayar da hankali kan aikin." },
          { objective: "O5", q: "Me harafin R a STAR yake nufi?", options: ["Rank (matsayi)", "Reason (dalili)", "Report (rahoto)", "Result (sakamako)"], answer: 3, why: "Ku ƙare da sakamako, zai fi kyau da lamba." },
          { objective: "O6", q: "Wani \"kamfani\" ya ba ku aiki ba tare da hira ba kuma yana neman ku biya kuɗin horo. Wannan:", options: ["Alamar gargaɗin zambar aiki ce", "Tayin aiki ne na yau da kullum", "Tallafin tsofaffin sojoji ne", "Veterans' preference ne"], answer: 0, why: "Babu hira da biyan kuɗi tun farko sanannun alamun zambar aiki ne." },
          { objective: "O6", q: "Wane shafi ne ke bayanin ɗaukar aikin gwamnatin tarayya ga tsofaffin sojoji, ciki har da veterans' preference?", options: ["Tallar da ke tasowa (pop-up)", "FedsHireVets na OPM", "Hanyar haɗi a saƙon tes", "Kowane chatbot na AI"], answer: 1, why: "FedsHireVets shi ne shafin OPM ga tsofaffin sojoji da ke neman aikin gwamnatin tarayya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Sauyin Sana'a da Samun Aiki",
    questions: [
      { objective: "O1", q: "TAP yana nufin:", options: ["Transition Assistance Program", "Training and Pay", "Total Army Program", "Tech Apprentice Plan"], answer: 0, why: "TAP yana taimaka wa sojoji komawa rayuwar farar hula." },
      { objective: "O1", q: "Waɗanne hukumomi ne ke cikin TAP?", options: ["Kamfanoni masu zaman kansu kawai", "Da dama, ciki har da Ma'aikatar Ƙwadago, DoD da VA", "Rundunar Sojan Ƙasa (Army) kawai", "VA kawai"], answer: 1, why: "TAP aiki ne na haɗin gwiwar hukumomi." },
      { objective: "O1", q: "A ina tsofaffin sojoji ke samun fifiko a hidimar neman aiki da horo?", options: ["Wurin sayar da motoci", "Ƙungiya a kafofin sada zumunta", "American Job Centers", "Shafin da ke karɓar kuɗi don nema muku aiki"], answer: 2, why: "Ma'aikatar Ƙwadago tana ba tsofaffin sojoji fifiko a can." },
      { objective: "O1", q: "Wane shirin VA ne ke ba da shawarwarin sana'a kyauta, ciki har da taimakon CV, ga tsofaffin sojoji da suka cancanta?", options: ["Lamunin gida na VA", "TRICARE", "The GI Bill Comparison Tool", "Personalized Career Planning and Guidance"], answer: 3, why: "VA ta jera shi a matsayin shawarwarin sana'a da ilimi kyauta." },
      { objective: "O1", q: "Me yasa za ku yi amfani da AI da mai ba da shawara dukansu?", options: ["AI yana taimaka muku rubutu; mai ba da shawara ya san ayyukan yankinku da tallafi", "AI koyaushe kuskure yake", "Masu ba da shawara suna rubuta muku komai", "Ɗaya kawai kuke buƙata"], answer: 0, why: "Kowanne yana yin abin da ɗayan ba zai iya ba." },
      { objective: "O2", q: "\"Must-have\" a tallar aiki shi ne:", options: ["Ƙari mai kyau", "Sharaɗin da dole ku cika don a duba ku", "Albashi", "Adireshin ofis"], answer: 1, why: "Abubuwan dole su ne ainihin buƙatun." },
      { objective: "O3", q: "Idan kun liƙa tallar aiki cikin AI, KADA ku liƙa:", options: ["Sunan aikin", "Buƙatun", "Lambar Social Security ɗinku", "Kalmomi masu muhimmanci"], answer: 2, why: "Lambobin sirri ba sa shiga AI." },
      { objective: "O2", q: "Kun cika yawancin abubuwan dole amma ba kowane abin da ake so kawai ba. Ya kamata ku:", options: ["Kada ku taɓa nema", "Ku yi ƙarya game da sauran", "Ku jira shekaru biyar", "Ku nema"], answer: 3, why: "Mutane da yawa suna nema ba tare da kowane abin da ake so kawai ba." },
      { objective: "O3", q: "Daidaita CV yana nufin:", options: ["Canja shi don ya dace da aiki ɗaya musamman", "Ƙara masa tsawo", "Ƙara kowane aikin da kuka taɓa yi", "Buga shi da launi"], answer: 0, why: "Daidaitawa tana sa CV ɗinku ya dace da tallar." },
      { objective: "O3", q: "Wane sunan muƙamin farar hula ne ya fi kyau ga supply chief?", options: ["S4 NCOIC", "Supply chain supervisor", "Gunny", "Chief of Stuff"], answer: 1, why: "Sunayen mukaman farar hula suna taimaka wa manajojin ɗaukar aiki su fahimci aikinku." },
      { objective: "O3", q: "Daftarin CV na AI ya ce kun jagoranci mutane 50; ku kun jagoranci 10. Ku:", options: ["Bar 50, ya fi daɗin ji", "Canja shi zuwa 100", "Canja shi zuwa lambar gaskiya, 10", "Cire duk lambobi"], answer: 2, why: "Kowace magana dole ta zama gaskiya." },
      { objective: "O3", q: "Wa ya kamata ya duba CV ɗinku kafin ku aika shi?", options: ["Baƙo a intanet", "Babu kowa", "AI kawai", "Mai ba da shawara na TAP, American Job Center ko VA"], answer: 3, why: "Mai ba da shawara da aka horar zai iya gano matsalolin da AI ya rasa." },
      { objective: "O4", q: "Bayanin kai (profile summary) shi ne:", options: ["Jimloli biyu zuwa huɗu game da ko ku wane ne da aikin da kuke so", "Cikakken tarihin aikinku na soja", "Adireshin gidanku", "Jerin kalmomin sirri"], answer: 0, why: "Gajeriyar gabatarwa ce a saman shafin intanet." },
      { objective: "O4", q: "Bayan AI ya rubuta wasiƙar neman aikinku, ya kamata ku:", options: ["Aika ta ba tare da karantawa ba", "Gyara ta har ta yi kama da ku", "Ƙara kalmomin soja", "Mai da ta shafuka biyar"], answer: 1, why: "Wasiƙarku ya kamata ta yi kama da ku." },
      { objective: "O5", q: "STAR yana nufin:", options: ["Skills, training, awards, rank", "Start, try, answer, repeat", "Situation, task, action, result", "Speak, think, act, rest"], answer: 2, why: "STAR hanya ce ta ba da gajeren labarin aiki." },
      { objective: "O5", q: "Idan AI yana yin kamar mai yin hira da ku, buƙata mai kyau ita ce:", options: ["\"Ka yi duka tambayoyin a lokaci ɗaya\"", "\"Ka amsa a madadina\"", "\"Ka ce mini ni cikakke ne\"", "\"Ka yi tambaya ɗaya a lokaci ɗaya ka ba ni ƙarfi ɗaya da gyara ɗaya\""], answer: 3, why: "Ɗaya bayan ɗaya tare da shawara yana gina ƙwarewa ta gaske." },
      { objective: "O5", q: "Atisayen amsoshin hirar aiki da babbar murya yana taimakawa domin:", options: ["Magana ta bambanta da karatu; tana sa amsoshi su zama na yau da kullum", "Dole ne", "AI ba zai iya karanta rubutu ba", "Ya fi rubutu sauri"], answer: 0, why: "Faɗin sa da babbar murya yana shirya ku don ainihin hirar aiki." },
      { objective: "O6", q: "A ina ake saka ayyukan gwamnatin tarayya?", options: ["A kafofin sada zumunta kawai", "USAJOBS", "A saƙonnin tes", "A sansanoni kawai"], answer: 1, why: "USAJOBS shi ne shafin aiki na gwamnatin tarayya." },
      { objective: "O6", q: "Wani mai ɗaukar ma'aikata ya aiko muku cak ku saka a banki kuma ya ce ku mayar da wani kaso. Wannan:", options: ["Kyautar shiga aiki ce", "Tallafin VA ne", "Alamar gargaɗin zambar aiki ce", "Shigar da sabon ma'aikaci ce ta yau da kullum"], answer: 2, why: "Saka cak da mayar da kuɗi sanannen zamba ne." },
      { objective: "O6", q: "Yaushe ya dace ku ba mai ɗaukar aiki lambar Social Security ɗinku?", options: ["A hirar rubutu ta farko", "Don samun hira", "Kafin kowane tayi", "Don takardun gaske bayan tayin aiki na gaske, ta hanyar hukuma"], answer: 3, why: "Masu ɗaukar aiki na gaske suna buƙatar ta ne kawai don takardun ɗaukar aiki bayan tayi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 5, 7, 8, 10, 12, 14, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Ya dace da tallar", objective: "O2", notYet: "CV ɗin zai iya zama na kowane aiki; kalmomin tallar kaɗan ne a ciki.", meets: "CV ɗin yana amfani da kalmomi masu muhimmanci na tallar kuma yana nuna abubuwan dole da mai koyo ya cika.", exceeds: "Mai koyo zai iya nuna inda aka nuna kowane abin dole." },
      { name: "Layukan farar hula masu lambobi", objective: "O3", notYet: "Layuka ƙasa da biyar, ko layuka masu kalmomin soja kuma babu lambobi.", meets: "Aƙalla layuka biyar da kalmomin farar hula, masu lambobi ko sakamako, a shafi ɗaya.", exceeds: "Kowane layi yana nuna abin da aka yi, girmansa da sakamakon." },
      { name: "Gaskiya ne kuma na sirri", objective: "O6", notYet: "Wata magana ba gaskiya ba ce, ko akwai lambar Social Security, DD-214 ko wata lambar sirri.", meets: "Kowace magana gaskiya ce, kuma babu lambobin sirri.", exceeds: "Mai ba da shawara ko wanda aka amince da shi ya duba shi." },
      { name: "Amsa ta daƙiƙa 60", objective: "O5", notYet: "Amsar ta wuce daƙiƙa 60 sosai ko ba game da wannan aikin ba ce.", meets: "Kusan daƙiƙa 60: ko ku wane ne, ƙwarewa mai dacewa da me yasa wannan aikin, an faɗe ta da babbar murya sau biyu.", exceeds: "Mai koyo ya yi amfani da shawarar AI don inganta sashe ɗaya tsakanin ƙoƙarin biyu." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi aƙalla aiki ɗaya da CV ɗinsu da aka daidaita cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka sami hirar aiki ko tayin aiki cikin kwanaki 90",
      "Masu koyo da suka tuntuɓi TAP, American Job Center ko shawarwarin sana'a na VA cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet (wayar zamani tana aiki don atisayen hirar aiki)",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Tallar aikin farar hula ɗaya ta gaske da mai koyo yake so",
      "Manhajar rubutu kamar Google Docs ko Microsoft Word don CV",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku sa kowane mai koyo ya zo da tallar aiki ɗaya ta gaske a zama na farko.",
      "Ku tunatar da masu koyo cewa lambar Social Security, DD-214 da sauran lambobin sirri ba sa shiga prompt na AI ko CV.",
      "Ku yi atisayen hirar aiki biyu-biyu bayan atisaye da AI: ɗaya yana tambaya, ɗaya yana amsa da babbar murya, sannan su musanya.",
      "Ku ba da maki ga CV da amsar ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku haɗa masu koyo da TAP, American Job Center ko shawarwarin sana'a na VA don a duba aikinsu bayan kwas ɗin."
    ]
  }
};
