"use strict";

// Koach Learn course, Hausa (ha) translation of re-entry/reentry-everyday-ai-tools.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "reentry-everyday-ai-tools-ha",
  lang: "ha",
  translationOf: "reentry-everyday-ai-tools",
  category: "Re-Entry",
  name: "Kayan AI na Yau da Kullum",
  skills: "Saita tunatarwa da murya, Samun hanyar mota ko jirgin ƙasa, Karantawa da fassara da kyamara, Neman taimako a kusa, Rubuta saƙonnin yau da kullum da AI, Yin jerin takardu",
  outcome: "amfani da kayan AI kyauta da ke wayar zamani don isa wurin ganawa a kan lokaci: samun hanyar bas ko jirgin ƙasa, saita tunatarwa, yin jerin abubuwan da za ku kawo, da rubuta gajeren saƙo idan za ku makara.",
  about: [
    "Wannan kwas ɗin na mutanen da ke dawowa gida ne da suke son amfani da wayar zamani don gudanar da rayuwar yau da kullum: ganawa, zirga-zirga, karanta fom, neman taimako da ci gaba da hulɗa da mutane.",
    "Za ku yi amfani da kayan aiki kyauta da ke yawancin wayoyi: mataimakin murya, taswira (maps), kayan karatu na kyamara, da mataimakin AI kamar ChatGPT, Microsoft Copilot ko Google Gemini. Kowane misali daga rayuwa ta gaske ne bayan fitowa: hirar neman aiki, ofishin katin shaida, ganawar gidaje da iyali.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Ba sai kun rubuta lambar shari'a, lambar katin shaida ko wani bayanin sirri don yin waɗannan ayyuka ba."
  ],
  finalTask: "Ku shirya yadda za ku isa wata ganawa ta gaske (hirar neman aiki, ofishin katin shaida ko ziyarar gida): ku sami hanyar mota ko ta ƙafa, ku saita tunatarwa don lokacin tashi, ku nemi AI ya yi jerin abubuwan da za ku kawo, sannan ku sa AI ya taimake ku rubuta gajeren tes mai ladabi da za ku aika idan za ku makara.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari (re-entry) waɗanda ke da wayar zamani kuma suna buƙatar gudanar da ganawa, tafiya, fom da saƙonni da kansu. Da yawa ba sa nan lokacin da wayoyi da kayan AI suka canja.",
    startingPoint: "Suna iya kira da tura tes. Ba sa amfani da mataimakan murya, taswira, kayan karatu na kyamara ko mataimakan AI sosai. Wasu ba su da ƙarfin gwiwa wajen karatu ko fasaha.",
    gap: "Rasa hirar neman aiki, ganawar katin shaida ko ziyarar gida yana iya mayar da dukan shirin dawowa gida baya. Masu koyo suna buƙatar amfani da kayan waya kyauta don isa wurare a kan lokaci, karanta takardu, neman taimako a kusa da aika saƙonni masu ladabi, ba tare da bayyana bayanan sirri ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wayar zamani, wani lokaci da ƙarancin data ko tsohuwar waya",
      "Lokaci: darussa na kusan minti 5 da suka dace da ganawa da aiki",
      "Wasu sharuɗɗan parole ko probation (sakin sharaɗi) suna iyakance amfani da intanet; kowane mai koyo yana bin nasa sharuɗɗan",
      "Sirri: babu lambar shari'a, lambar katin shaida ko wani bayanin sirri a kowane kayan AI ko tunatarwa"
    ],
    prerequisites: "Kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani) yana taimakawa, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da mataimakin murya na wayarku", action: "saita tunatarwa don ganawa da tunatarwa ta biyu don lokacin tashi", standard: "da murya, da taken gama-gari ba tare da bayanan sirri ba" },
    { id: "O2", condition: "Idan aka ba ku adireshin wani wuri na gaske", action: "samun hanyar bas, jirgin ƙasa ko ta ƙafa a manhajar taswira, da gano lokacin tashi", standard: "da lokacin isowa da aka saita minti 10 zuwa 15 kafin lokaci" },
    { id: "O3", condition: "Idan aka ba ku takardar talla, alama ko tallar aiki da aka buga", action: "amfani da kyamarar wayarku don karantawa, kwafa ko fassara rubutunta", standard: "kuna kwafa lambar waya ko adireshi zuwa rubutu ko lambobin sadarwa ba tare da sake rubutawa ba" },
    { id: "O4", condition: "Ta amfani da mataimakin AI da 211", action: "neman hidima a kusa don gidaje, abinci, aiki ko sufuri", standard: "da shiri ɗaya da aka rubuta, kuma an tabbatar da bayanansa ta 211 ko shafin hukuma" },
    { id: "O5", condition: "Idan kuna da wani hali na yau da kullum na gaske", action: "rubuta gajeren saƙo mai ladabi da taimakon AI", standard: "wanda yake da gaskiya, babu bayanan sirri a ciki, kuma yana kama da ku" },
    { id: "O6", condition: "Idan kuna da wata ganawa ta gaske", action: "yin jerin abubuwan da za ku kawo da taimakon AI, da tabbatar da shi da ofishin", standard: "da sunayen takardu kawai, an duba a shafin hukuma ko ta waya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Wayarku a matsayin mataimaki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tunatarwa da ƙararrawa da murya",
          minutes: 5,
          goal: "Saita tunatarwa don ganawa ta hanyar yin magana da wayarku.",
          text: [
            "Rasa ganawa yana iya jawo muku rasa hirar neman aiki, wurin zama ko ganawar dubawa (check-in). Wayarku za ta iya tuna muku.",
            "Yawancin wayoyi suna da mataimakin murya: Siri a iPhone, da Google Assistant ko Gemini a Android. Ku tayar da shi ta hanyar cewa \"Hey Siri\" ko \"Hey Google\", ko ta hanyar dannawa da riƙe maɓallin gefe ko na gida. Sannan ku ce: \"Ka tuna mini hirar aikina a Fresh Foods ranar Talata ƙarfe 9 na safe.\" \"Ka saita ƙararrawa ƙarfe 6:30 na safe gobe.\"",
            "Ku saita tunatarwa biyu don kowane abu mai muhimmanci: ɗaya a ranar da ta gabata, ɗaya kuma lokacin da ya kamata ku tashi. Ku sa taken tunatarwa ya zama gama-gari; ba sai kun saka bayanan sirri a ciki ba."
          ],
          steps: ["Ku tayar da mataimakin murya.", "Ku faɗi abin, ranar da lokacin.", "Ku ƙara tunatarwa ta biyu don lokacin tashi.", "Ku duba allon don ku tabbata an saita ta."],
          words: [["Mataimakin murya (voice assistant)", "mataimaki da ke cikin wayarku wanda ke yin ayyuka masu sauƙi idan kun yi magana."], ["Tunatarwa (reminder)", "saƙon da wayarku ke nuna muku a lokacin da kuka zaɓa."]],
          slides: [
            { title: "Wayarku za ta iya tuna muku", bullets: ["Hirar aiki, ofishin katin shaida, ziyarar gidaje", "Siri, Google Assistant ko Gemini"] },
            { title: "Ku faɗa", bullets: ["\"Ka tuna mini hirar aikina ranar Talata ƙarfe 9 na safe.\"", "\"Ka saita ƙararrawa ƙarfe 6:30 na safe gobe.\""] },
            { title: "Tunatarwa biyu don manyan abubuwa", bullets: ["Ɗaya a ranar da ta gabata", "Ɗaya lokacin da ya kamata ku tashi", "Ku sa taken ya zama gama-gari"] }
          ],
          tryIt: "Ku saita tunatarwa da murya don wata ganawa ta gaske, ko ta gwaji, da tunatarwa ta biyu don lokacin da ya kamata ku tashi.",
          youCanNow: "saita tunatarwar ganawa da ƙararrawa da murya.",
          quickCheck: [
            { objective: "O1", q: "Wane take ne mai kyau don tunatarwa game da hirar neman aiki?", options: ["Cikakken sunanku da ranar haihuwarku", "Hirar aiki ƙarfe 9 na safe", "Lambar shari'arku", "Adireshin gidanku"], answer: 1, why: "Taken tunatarwa ya kamata ya zama gama-gari, ba tare da bayanan sirri ba." },
            { objective: "O1", q: "Hirar aikinku gobe ce ƙarfe 9 na safe, kuma bas yana ɗaukar minti 40. Me za ku yi?", options: ["Ku saita tunatarwa ɗaya ƙarfe 9 na safe", "Ku yi fatan za ku tuna da safe", "Ku saita tunatarwa ta yau da dare da ɗaya don lokacin tashi", "Ku rubuta shi a hannunku"], answer: 2, why: "Tunatarwa biyu, ta ranar da ta gabata da ta lokacin tashi, suna taimaka muku isa a kan lokaci." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Zirga-zirga da taswira da motocin haya na jama'a",
          minutes: 6,
          goal: "Samun hanyar bas, jirgin ƙasa ko ta ƙafa, da sanin lokacin tashi.",
          text: [
            "Manhajojin taswira kamar Google Maps da Apple Maps suna nuna yadda ake zuwa ko'ina ta bas, jirgin ƙasa, ƙafa ko mota, da tsawon lokacin da zai ɗauka.",
            "Ku buɗe manhajar taswira, ku rubuta adireshin a akwatin bincike, sannan ku taɓa Directions (Hanya). Ku zaɓi alamar bas ko jirgin ƙasa don sufurin jama'a, ko alamar mutum mai tafiya. Za ku ga wane bas za ku hau, inda za ku hau shi, da lokacin da zai zo. Kuna kuma iya saita lokacin da dole ku isa, kuma manhajar za ta nuna lokacin tashi.",
            "Ku shirya isa minti 10 zuwa 15 kafin lokaci. Bas yana iya makara. Ku ajiye adireshin wuraren da kuke yawan zuwa, kamar gidanku ko wurin aiki, don su kasance taɓawa ɗaya kawai. Wasu hukumomin sufuri suna da nasu manhajoji da ke nuna lokacin bas kai tsaye."
          ],
          steps: ["Ku buɗe manhajar taswirarku.", "Ku rubuta adireshin ku taɓa Directions.", "Ku zaɓi sufurin jama'a (bas ko jirgin ƙasa) ko tafiya da ƙafa.", "Ku saita lokacin isowarku don ganin lokacin tashi.", "Ku shirya isa minti 10 zuwa 15 kafin lokaci."],
          words: [["Sufurin jama'a (transit)", "motocin jama'a kamar bas da jirgin ƙasa."], ["Lokacin isowa (arrival time)", "lokacin da dole ku kasance a wurin."]],
          slides: [
            { title: "Taswira ta san hanya", bullets: ["Google Maps ko Apple Maps", "Bas, jirgin ƙasa, ƙafa ko mota"] },
            { title: "Samun hanya", bullets: ["Ku rubuta adireshin, ku taɓa Directions", "Ku zaɓi sufurin jama'a ko tafiya da ƙafa", "Ku ga wane bas da lokacinsa"] },
            { title: "Ku isa a kan lokaci", bullets: ["Ku saita lokacin isowarku", "Ku isa minti 10 zuwa 15 kafin lokaci", "Ku ajiye adireshin da kuke yawan amfani da su"] }
          ],
          tryIt: "Ku sami hanyar sufurin jama'a ko ta ƙafa zuwa wani wuri na gaske da kuke buƙatar zuwa, kamar American Job Center (cibiyar neman aiki), ofishin DMV (ofishin motoci da katin shaida) ko ɗakin karatu. Ku saita lokacin isowa ku rubuta lokacin da dole ku tashi.",
          youCanNow: "samun hanyar sufurin jama'a da ta ƙafa, da gano lokacin tashi.",
          quickCheck: [
            { objective: "O2", q: "Me saita lokacin isowarku a manhajar taswira yake nuna muku?", options: ["Lokacin da dole ku tashi", "Kuɗin bas", "Wasu da za su tafi", "Yanayin gobe"], answer: 0, why: "Idan an saita lokacin isowa, manhajar tana lissafa lokacin da dole ku tashi." },
            { objective: "O2", q: "Dole ku isa DMV ta bas don ganawa ƙarfe 10 na safe. Me za ku yi?", options: ["Ku tashi ƙarfe 10 na safe", "Ku sami hanyar sufurin jama'a ku saita isowa kusan ƙarfe 9:45", "Ku zaɓi hanyar ƙafa kawai", "Ku tambayi baƙo a tasha"], answer: 1, why: "Hanyar sufurin jama'a da lokacin isowa da wuri suna taimaka muku isa minti 10 zuwa 15 kafin lokaci." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Karantawa da fassara da kyamararku",
          minutes: 5,
          goal: "Amfani da kyamarar wayarku don karantawa, kwafa ko fassara rubutun da aka buga.",
          text: [
            "Kyamarar wayarku tana iya karanta kalmomin da aka buga. Da Google Lens (a cikin manhajar Google da wayoyin Android da yawa) ko kayan rubutu na kyamarar iPhone, kuna iya nuna kyamara ga takardar talla, alama ko fom ku kwafa rubutun, ku bincika shi, ko ku fassara shi.",
            "Ku buɗe kyamara ko Google Lens ku nuna ta ga kalmomin. Ku taɓa maɓallin rubutu ko rubutun da aka haskaka, sannan ku zaɓi Copy (Kwafa), Listen (Saurara), Translate (Fassara) ko Search (Bincika). Wannan yana taimakawa wajen kwafa lambar waya daga takardar talla ko karanta umarni a wani harshe.",
            "Kada ku ɗauki hoton takardu masu lambobin sirri zuwa kayan AI, kamar katin Social Security ɗinku (katin lambar shaidar Amurka) ko takardun kotu. Ku yi amfani da waɗannan kayan don abubuwan jama'a kamar takardun talla, alamomi da tallace-tallacen aiki."
          ],
          steps: ["Ku buɗe kyamara ko Google Lens.", "Ku nuna ta ga kalmomin da aka buga.", "Ku taɓa maɓallin rubutu ko kalmomin da aka haskaka.", "Ku zaɓi Copy, Listen, Translate ko Search.", "Kada ku ɗauki hoton takardun sirri."],
          words: [["Google Lens", "kayan Google kyauta da ke amfani da kyamararku don karantawa, fassara da bincika abin da take gani."], ["Fassara (translate)", "mayar da kalmomi daga wani harshe zuwa wani."]],
          slides: [
            { title: "Kyamara tana iya karatu", bullets: ["Google Lens ko kyamarar iPhone", "Takardun talla, alamomi, tallace-tallacen aiki"] },
            { title: "Abin da za ku iya yi", bullets: ["Kwafa lambar waya", "Jin an karanta kalmomin da babbar murya", "Fassara ko bincika"] },
            { title: "Ku tsaya kan abubuwan jama'a", bullets: ["Babu katin Social Security", "Babu takardun kotu ko fom na sirri"] }
          ],
          tryIt: "Ku nuna kyamararku ko Google Lens ga takardar talla, alama ko tallar aiki. Ku kwafa lambar waya ko adireshi daga ciki zuwa rubutu (note) ko lambobin sadarwarku.",
          youCanNow: "amfani da kyamararku don kwafa, ji ko fassara rubutun da aka buga.",
          quickCheck: [
            { objective: "O3", q: "Me kayan rubutu na kyamarar wayarku zai iya yi da takardar tallar aiki da aka buga?", options: ["Neman aikin a madadinku", "Buga sabon kwafi", "Kiran mai ɗaukar aiki da kansa", "Karantawa, kwafa ko fassara rubutun"], answer: 3, why: "Kayan rubutu na kyamara yana iya karantawa, kwafa da fassara kalmomin da aka buga." },
            { objective: "O3", q: "Kuna son ɗaukar hoton takarda mai lambar Social Security ɗinku zuwa kayan AI. Me za ku yi?", options: ["Ku ɗauki hotonta don AI ya yi bayani", "Kada ku ɗauki hotonta; ku kiyaye lambobin sirri daga kayan AI", "Ku ɗauki hoton rabinta kawai", "Ku saka ta a intanet don neman taimako"], answer: 1, why: "Lambobin sirri kamar lambar Social Security ɗinku kada su taɓa shiga kayan AI." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Wayarku a matsayin mataimaki",
        questions: [
          { objective: "O1", q: "Wace hanya ce mafi kyau don kada ku rasa hirar neman aiki?", options: ["Ku rubuta ta a hannunku", "Ku yi fatan za ku tuna", "Ku saita tunatarwa a ranar da ta gabata da ɗaya don lokacin tashi", "Ku nemi baƙo ya tuna muku"], answer: 2, why: "Tunatarwa biyu suna rufe shiri da tashi a kan lokaci." },
          { objective: "O2", q: "A manhajar taswira, wane zaɓi ne ke nuna hanyoyin bas da jirgin ƙasa?", options: ["Transit (sufurin jama'a)", "Satellite (tauraron ɗan adam)", "Traffic (cunkoson ababen hawa)", "Settings (saituna)"], answer: 0, why: "Transit yana nuna sufurin jama'a." },
          { objective: "O2", q: "Da wuri nawa ya kamata ku shirya isa wurin ganawa?", options: ["Awa ɗaya a makare", "Daidai a kan lokaci", "Minti 5 a makare", "Minti 10 zuwa 15 kafin lokaci"], answer: 3, why: "Bas yana iya makara; isa da wuri ya fi aminci." },
          { objective: "O3", q: "Me Google Lens zai iya yi da takardar talla?", options: ["Buga kuɗi", "Kwafa, karanta da babbar murya ko fassara rubutunta", "Kiran iyalinku", "Sa hannu a fom a madadinku"], answer: 1, why: "Lens yana karanta rubutun da kyamara ke gani." },
          { objective: "O3", q: "Wanne ne BA za ku ɗauki hotonsa zuwa kayan AI ba?", options: ["Takardar tallar aiki", "Katin Social Security ɗinku", "Alamar titi", "Jadawalin bas"], answer: 1, why: "Takardun sirri ba sa shiga kayan AI." }
        ]
      }
    },
    {
      name: "Babi na 2: Kammala ayyuka",
      lessons: [
        {
          objectives: ["O4"],
          title: "Neman taimako a kusa",
          minutes: 5,
          goal: "Neman hidimomi a kusa don gidaje, abinci, aiki ko sufuri.",
          text: [
            "Akwai taimako, amma samun sa yana iya yin wuya. 211 hidima ce a duk faɗin Amurka da ke haɗa ku da taimako a kusa don gidaje, abinci, sufuri, kiwon lafiya da sauransu. Ku kira 211, ko ku nemi 211 na yankinku a 211.org. Kiran sirri ne, kuma kuna iya ɓoye sunanku.",
            "Mataimakin AI zai iya taimaka muku shiryawa: \"Na dawo gida yanzu kuma ina zaune a Columbus, Ohio. Waɗanne irin hidimomi na kusa za su iya taimakawa da gidaje, abinci da horon aiki? Waɗanne tambayoyi zan yi idan na kira 211?\"",
            "AI yana iya lissafa shirye-shiryen da aka rufe ko ya ba da lambobin waya marasa daidai. Koyaushe ku tabbatar da 211, shafin hukuma na shirin, ko mai kula da shari'arku (case manager) na dawowa gida kafin ku je."
          ],
          steps: ["Ku tambayi AI irin taimakon da za ku nema da abin da za ku tambaya.", "Ku kira 211 ko ku bincika 211.org.", "Ku rubuta shirye-shiryen, lambobin waya da lokutan aiki.", "Ku tabbatar a shafin hukuma ko ta waya kafin ku je."],
          words: [["211", "lambar waya da shafin intanet da ke haɗa ku da taimako a kusa."], ["Mai kula da shari'a (case manager)", "mutumin da ke taimaka muku yin shiri da neman hidimomi."]],
          slides: [
            { title: "Akwai taimako", bullets: ["Gidaje, abinci, sufuri, kiwon lafiya", "Ku kira 211 ko ku ziyarci 211.org", "Sirri ne; kuna iya ɓoye sunanku"] },
            { title: "Ku shirya da AI", bullets: ["Irin taimakon da za ku nema", "Tambayoyin da za ku yi"] },
            { title: "Ku tabbatar kafin ku je", bullets: ["AI yana iya lissafa shirye-shiryen da aka rufe", "Ku duba da 211 ko shafin hukuma", "Ku tambayi mai kula da shari'arku"] }
          ],
          sources: [{ name: "211: Game da mu (About us)", url: "https://www.211.org/about-us" }],
          tryIt: "Ku tambayi mataimakin AI irin hidimomin kusa da za su iya taimaka muku yanzu da abin da za ku tambaya idan kun kira. Sannan ku nemi 211 na yankinku a 211.org ku rubuta shiri ɗaya da za ku tuntuɓa.",
          youCanNow: "neman taimako a kusa da tabbatar da shi kafin ku je.",
          quickCheck: [
            { objective: "O4", q: "Me 211 zai iya taimaka muku samu?", options: ["Taimakon 'yan sanda na gaggawa kawai", "Guraben aiki a manyan kamfanoni kawai", "Taimako a kusa don gidaje, abinci da sauransu", "Tarihin laifukanku"], answer: 2, why: "211 yana haɗa mutane da hidimomi na kusa kamar taimakon gidaje da abinci." },
            { objective: "O4", q: "Mataimakin AI ya ba ku lambar wayar wurin rabon abinci (food bank). Me za ku yi?", options: ["Ku tabbatar da lambar da 211 ko shafin hukuma", "Ku tafi can nan take", "Ku raba ta ga abokai ba tare da dubawa ba", "Ku tambayi AI ko ya tabbata"], answer: 0, why: "AI yana iya yin kuskure, don haka ku tabbatar da bayanai da 211 ko majiyar hukuma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rubuta saƙonnin yau da kullum da AI",
          minutes: 5,
          goal: "Amfani da AI don rubuta gajeren saƙo mai ladabi don wani hali na gaske.",
          text: [
            "Halaye da yawa na yau da kullum suna buƙatar saƙo: faɗa wa mai ɗaukar aiki cewa za ku makara, tambayar mai gida game da gida, gode wa wani saboda hirar aiki, ko tuntuɓar iyali.",
            "Ku faɗa wa AI ga wanda saƙon yake, abin da kuke buƙatar faɗa, da yadda ya kamata ya yi sauti: \"Ka rubuta gajeren tes mai ladabi ga mai ɗaukar ma'aikata. Bas ɗina ya makara minti 10 don hirar aikina ta ƙarfe 9 na safe. Ina neman afuwa, kuma har yanzu ina sha'awar aikin sosai.\"",
            "Ku karanta shi da babbar murya ku canja duk abin da bai yi kama da ku ba. Ku sa shi gajere da gaskiya. Ba sai kun yi bayanin abin da ya faru da ku a baya a saƙonnin yau da kullum ba."
          ],
          steps: ["Ku faɗi ga wanda saƙon yake.", "Ku faɗi abin da kuke buƙatar faɗa.", "Ku faɗi yadda ya kamata ya yi sauti: da ladabi, gajere, da fara'a.", "Ku karanta shi da babbar murya ku sa ya yi kama da ku."],
          words: [["Ladabi (polite)", "girmamawa da mutunci."], ["Daftari (draft)", "rubutu na farko da kuke iya canjawa."]],
          slides: [
            { title: "Saƙonnin yau da kullum", bullets: ["Za ku makara", "Tambaya game da gida", "Gode wa wanda ya yi muku hirar aiki"] },
            { title: "Ku faɗa wa AI abubuwa uku", bullets: ["Ga wanda saƙon yake", "Abin da kuke buƙatar faɗa", "Yadda ya kamata ya yi sauti"] },
            { title: "Ku mai da shi naku", bullets: ["Ku karanta shi da babbar murya", "Gajere da gaskiya", "Ba sai kun yi bayanin abin da ya faru a baya ba"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya rubuta gajeren tes mai ladabi da ke faɗa wa wanda zai yi muku hirar aiki cewa bas ɗinku ya makara. Ku canja abu ɗaya don ya yi kama da ku.",
          youCanNow: "rubuta saƙonnin yau da kullum masu sarari da ladabi da taimakon AI.",
          quickCheck: [
            { objective: "O5", q: "Me ke sa saƙon yau da kullum ya yi kyau?", options: ["Tsawo da cike da bayanan abin da ya faru a baya", "Gajere, mai ladabi da gaskiya", "An rubuta shi da manyan haruffa duka", "An aika shi ba tare da an karanta shi ba"], answer: 1, why: "Gajeren saƙo mai ladabi da gaskiya yana da sauƙin karantawa kuma yana nuna girmamawa." },
            { objective: "O5", q: "AI ya rubuta tes na makara da kalmomin da ba za ku taɓa faɗa ba. Me za ku yi?", options: ["Ku aika shi duk da haka", "Ku nemi AI ya tsawaita shi", "Ku goge shi kada ku aika komai", "Ku canja kalmomin don ya yi kama da ku, sannan ku aika"], answer: 3, why: "Kuna karanta daftarin AI ku canja shi don ya yi kama da ku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Jerin abubuwan da za a kawo don ganawa da takardu",
          minutes: 5,
          goal: "Neman AI ya yi jerin abubuwan da za ku kawo, sannan ku tabbatar da shi da ofishin.",
          text: [
            "Zuwa ba tare da takardun da suka dace ba yana iya nufin sake tafiya. Ku nemi AI ya yi jeri: \"Zan je ofishin DMV na jihata don samun katin shaida na jiha (state ID). Waɗanne takardu mutane suke yawan kawowa? Ka yi gajeren jeri.\"",
            "Sannan ku tabbatar da ofishin da kansa. Dokoki sun bambanta daga jiha zuwa jiha kuma suna canjawa, don haka shafin hukuma (wanda sau da yawa yake ƙarewa da .gov) ko kiran waya shi ne magana ta ƙarshe. Shirin dawowa gida ko mai kula da shari'arku yana iya taimaka muku samun takardu kamar takardar shaidar haihuwa.",
            "Ku ajiye jerin a cikin rubutun (notes) wayarku ko a takarda. Kada ku taɓa rubuta ainihin lambobin katin shaidarku, lambobin shari'a ko lambar Social Security ɗinku a AI; jerin yana buƙatar sunayen takardu kawai."
          ],
          steps: ["Ku tambayi AI abin da ake yawan buƙata.", "Ku nemi gajeren jeri.", "Ku tabbatar a shafin hukuma na ofishin ko ta waya.", "Ku tattara takardun ku yi musu alama ɗaya bayan ɗaya.", "Kada ku taɓa rubuta lambobinku na gaske a AI."],
          words: [["Jerin dubawa (checklist)", "jerin abubuwa da kuke yi wa alama ɗaya bayan ɗaya."], ["Katin shaida na jiha (state ID)", "katin shaida na hukuma mai hoto daga jiharku, don mutanen da ba sa tuƙi."]],
          slides: [
            { title: "Ku guji sake tafiya", bullets: ["Ku nemi AI ya yi jeri", "\"Me mutane suke yawan kawowa don samun state ID?\""] },
            { title: "Ku tabbatar da ofishin", bullets: ["Dokoki sun bambanta daga jiha zuwa jiha", "Shafin hukuma, sau da yawa .gov, ko ku kira", "Ku nemi taimakon mai kula da shari'arku"] },
            { title: "Ku kiyaye lambobinku a sirri", bullets: ["Jerin yana buƙatar sunayen takardu kawai", "Kada ku taɓa rubuta lambar katin shaida ko ta shari'a a AI"] }
          ],
          tryIt: "Aikin ƙarshe: ku zaɓi wata ganawa ta gaske. Ku sami hanyar sufurin jama'a ko ta ƙafa, ku saita tunatarwa don lokacin tashi, ku nemi AI ya yi jerin abubuwan da za ku kawo (sannan ku tabbatar da shi a shafin hukuma), sannan ku sa AI ya taimake ku rubuta gajeren tes da za ku aika idan za ku makara.",
          youCanNow: "amfani da kayan AI na yau da kullum don shiryawa, yin shiri da isa wurin ganawa a kan lokaci.",
          quickCheck: [
            { objective: "O6", q: "Me ya kamata jerin takardu ya ƙunsa?", options: ["Sunayen takardun da kuke buƙata", "Lambobin katin shaidarku da na Social Security", "Kalmomin sirrinku", "Adireshin gidan jami'in parole ɗinku"], answer: 0, why: "Jeri yana buƙatar sunayen takardu, ba lambobinku na sirri ba." },
            { objective: "O6", q: "Jerin da AI ya yi don ziyarar neman state ID yana kama da ya cika. Me za ku yi a gaba?", options: ["Ku amince da shi ku tafi", "Kada ku kawo wani ƙari", "Ku tabbatar da jerin a shafin hukuma na ofishin ko ta waya", "Ku tambayi aboki abin da ya kawo shekaru da suka wuce"], answer: 2, why: "Ofishin ne yake da magana ta ƙarshe kan abin da za a kawo." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kammala ayyuka",
        questions: [
          { objective: "O4", q: "Wace lamba ce ke haɗa ku da taimako a kusa don gidaje, abinci da sauransu?", options: ["611", "411", "311 a ko'ina", "211"], answer: 3, why: "211 yana haɗa mutane da hidimomi na kusa." },
          { objective: "O4", q: "AI ya ba ku lambar wayar wani shiri. Me za ku yi?", options: ["Ku tabbatar da ita da 211 ko shafin hukuma", "Ku amince da ita gaba ɗaya", "Ku saka ta a intanet", "Ku ba shi lambar shari'arku"], answer: 0, why: "AI yana iya lissafa shirye-shiryen da aka rufe ko lambobi marasa daidai." },
          { objective: "O5", q: "Wane prompt (umarni) ne zai kawo tes mai kyau na \"zan makara\"?", options: ["\"makara\"", "\"tes\"", "\"Ka rubuta gajeren tes mai ladabi ga mai ɗaukar ma'aikata. Bas ɗina ya makara minti 10 don hirar aikina ta ƙarfe 9 na safe.\"", "\"bas\""], answer: 2, why: "Yana faɗin ga wane, me, da yadda ya kamata ya yi sauti." },
          { objective: "O5", q: "Shin dole ku yi bayanin abin da ya faru da ku a baya a saƙon yau da kullum?", options: ["Ta imel kawai", "Eh, koyaushe", "Ga masu gidaje kawai", "A'a; ku sa shi gajere da gaskiya"], answer: 3, why: "Saƙonnin yau da kullum suna buƙatar ainihin maganar kawai." },
          { objective: "O6", q: "Wane ne yake da magana ta ƙarshe kan takardun da za a kawo?", options: ["Aboki", "AI", "Ofishin da kansa", "Rubutu a kafofin sada zumunta"], answer: 2, why: "Dokoki sun bambanta daga jiha zuwa jiha; ofishin ne yake yanke hukunci." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kayan AI na Yau da Kullum",
    questions: [
      { objective: "O1", q: "Siri da Google Assistant su ne:", options: ["Shafukan neman aiki", "Mataimakan murya a waya", "Kamfanonin bas", "Bankuna"], answer: 1, why: "Suna yin ayyuka masu sauƙi idan kun yi magana." },
      { objective: "O1", q: "Wace buƙata ta murya ce ke saita tunatarwa mai amfani?", options: ["\"Ka tuna mini hirar aikina ranar Talata ƙarfe 9 na safe.\"", "\"Hirar aiki.\"", "\"Talata.\"", "\"Sannu.\""], answer: 0, why: "Tana faɗin abin, ranar da lokacin." },
      { objective: "O1", q: "Don ganawa masu muhimmanci, ku saita:", options: ["Tunatarwa biyu: ranar da ta gabata da lokacin tashi", "Babu ko ɗaya", "Ɗaya bayan wata ɗaya", "Ƙararrawa goma barkatai"], answer: 0, why: "Tunatarwa biyu suna rufe shiri da tashi." },
      { objective: "O1", q: "Taken tunatarwa ya kamata ya zama:", options: ["Cike da lambobin katin shaida", "Gama-gari, ba tare da bayanan sirri ba", "Lambar shari'arku", "Kalmar sirrinku"], answer: 1, why: "Ba sai kun saka bayanan sirri a tunatarwa ba." },
      { objective: "O2", q: "A manhajar taswira, bayan kun rubuta adireshin kuna taɓa:", options: ["Kyamara", "Goge", "Directions (Hanya)", "Raba kalmar sirri"], answer: 2, why: "Directions yana nuna yadda ake zuwa can." },
      { objective: "O2", q: "\"Transit\" yana nufin:", options: ["Tashi a jirgin sama", "Tafiya da ƙafa kawai", "Tasi kawai", "Bas da jirgin ƙasa"], answer: 3, why: "Transit shi ne sufurin jama'a." },
      { objective: "O2", q: "Saita lokacin isowarku a manhajar taswira yana nuna:", options: ["Lambar katin shaidarku", "Kuɗin da ke bankinku", "Lokacin da dole ku tashi", "Yanayi kawai"], answer: 2, why: "Yana lissafawa baya daga lokacin isowarku." },
      { objective: "O2", q: "Ajiye adireshin da kuke yawan amfani da su yana sa su kasance:", options: ["Taɓawa ɗaya kawai", "Lambobin sirri", "Su ɓace", "Masu tsada"], answer: 0, why: "Wuraren da aka ajiye suna da saurin samu." },
      { objective: "O3", q: "Google Lens yana iya:", options: ["Kiran jami'in parole ɗinku", "Maye gurbin katin shaidarku", "Biyan kuɗin hayarku", "Karantawa, kwafa da fassara rubutun da aka buga"], answer: 3, why: "Lens yana karanta abin da kyamara ke gani." },
      { objective: "O3", q: "Amfani mai kyau na kayan rubutu na kyamara shi ne:", options: ["Ɗaukar hoton katin Social Security ɗinku zuwa AI", "Kwafa lambar waya daga takardar tallar aiki", "Ɗaukar hoton takardun kotu zuwa AI", "Ɗaukar hoton katin bankinku don AI"], answer: 1, why: "Rubutun jama'a kawai; ku kiyaye takardun sirri a waje." },
      { objective: "O4", q: "Kiran 211:", options: ["Ana naɗar su don jama'a", "Sirri ne, kuma kuna iya ɓoye sunanku", "Na gaggawa ne kawai", "Na kamfanoni ne kawai"], answer: 1, why: "Kiran 211 sirri ne." },
      { objective: "O4", q: "AI zai iya taimakawa kafin ku kira 211 ta hanyar:", options: ["Tabbatar muku da gado", "Sanin tarihin shari'arku", "Yi muku rajista kai tsaye", "Ba da shawarar irin taimakon da za ku tambaya"], answer: 3, why: "Yana taimaka muku shirya tambayoyi." },
      { objective: "O4", q: "Mai kula da shari'a (case manager) shi ne:", options: ["Mutumin da ke taimaka muku yin shiri da neman hidimomi", "Manhajar waya", "Direban bas", "Shafin intanet"], answer: 0, why: "Masu kula da shari'a suna taimakawa da shirye-shiryen dawowa gida." },
      { objective: "O5", q: "Idan AI ya rubuta muku saƙo, ya kamata ku:", options: ["Saka lambar Social Security ɗinku", "Aika shi ba tare da karantawa ba", "Karanta shi da babbar murya ku sa ya yi kama da ku", "Sa shi ya yi tsawo sosai"], answer: 2, why: "Saƙonku ya kamata ya yi kama da ku." },
      { objective: "O5", q: "Saƙon yau da kullum mai kyau shi ne:", options: ["Cike da bayanan sirri", "Mai tsawo kuma cike da uzuri", "Marar ladabi", "Gajere, mai ladabi da gaskiya"], answer: 3, why: "Gajere da gaskiya shi ya fi aiki." },
      { objective: "O5", q: "\"Daftari\" (draft) shi ne:", options: ["Katin bas", "Kwafin ƙarshe", "Rubutu na farko da kuke iya canjawa", "Katin shaida"], answer: 2, why: "Kuna inganta daftari kafin ku aika." },
      { objective: "O6", q: "Kafin ku je neman state ID, ya kamata ku:", options: ["Amince da AI kawai", "Tabbatar da jerin takardun a shafin hukuma ko ta waya", "Kada ku kawo komai", "Tambayi baƙo"], answer: 1, why: "Dokoki sun bambanta daga jiha zuwa jiha." },
      { objective: "O6", q: "Shafukan gwamnatin Amurka na hukuma sau da yawa suna ƙarewa da:", options: [".gov", ".win", ".gift", ".xyz"], answer: 0, why: "Ofisoshin gwamnati suna amfani da .gov." },
      { objective: "O6", q: "Me jerin takardu yake buƙata?", options: ["Sunayen takardu, ba lambobinku ba", "Ainihin lambobin katin shaidarku", "Lambar shari'arku", "Lambar Social Security ɗinku"], answer: 0, why: "Sunayen takardu sun isa." },
      { objective: "O6", q: "State ID shi ne:", options: ["Tikitin bas", "Katin shaida na hukuma mai hoto daga jiharku", "Katin ɗakin karatu", "Manhajar waya"], answer: 1, why: "Katin shaida ne na hukuma mai hoto ga waɗanda ba sa tuƙi da wasu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      4,
      6,
      8,
      10,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Hanya",
        objective: "O2",
        notYet: "Babu hanya, ko babu sanin lokacin tashi.",
        meets: "Hanyar sufurin jama'a ko ta ƙafa da lokacin isowa da aka saita da wuri, kuma an rubuta lokacin tashi.",
        exceeds: "Akwai kuma wata hanyar dabam, ko an ajiye adireshin don taɓawa ɗaya."
      },
      {
        name: "Tunatarwar tashi",
        objective: "O1",
        notYet: "Babu tunatarwa, ko tunatarwa mai bayanan sirri a cikin take.",
        meets: "An saita tunatarwa don lokacin tashi, da taken gama-gari.",
        exceeds: "An kuma saita tunatarwa a ranar da ta gabata."
      },
      {
        name: "An tabbatar da jerin",
        objective: "O6",
        notYet: "Babu jeri, ko jeri mai lambobin sirri, ko ba a tabbatar da shi ba.",
        meets: "Jerin sunayen takardu, an tabbatar da shi a shafin hukuma ko ta waya.",
        exceeds: "Zai iya faɗin inda ya tabbatar da shi da abin da ya canja daga jerin AI."
      },
      {
        name: "Tes na makara",
        objective: "O5",
        notYet: "Babu tes, ko tes mai tsawo, marar ladabi ko mai bayanan sirri.",
        meets: "Gajeren tes mai ladabi da gaskiya, a shirye don aikawa.",
        exceeds: "Mai koyo ya canja wasu kalmomi don ya yi kama da shi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun isa wurin ganawa a kan lokaci ta amfani da waɗannan kayan cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka tuntuɓi wata hidima ta kusa da suka samu ta 211 cikin kwanaki 30",
      "Abokan aiki masu taimakon masu dawowa gida sun ce an rage rasa ganawa"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet da manhajar taswira",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Takardar talla ko tallar aiki da aka buga don atisaye da kyamara",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi masu koyo su kawo wata ganawa ta gaske da ke tafe don aikin ƙarshe ya yi amfani nan take.",
      "Kada ku taɓa neman masu koyo su rubuta ko su ɗauki hoton ainihin lambobin katin shaida, na shari'a ko na Social Security; ku yi amfani da sunayen takardu kawai.",
      "Ku duba 211.org tare don kowa ya iya samun 211 na yankinsa.",
      "Ku tunatar da masu koyo da ke kan parole ko probation su bi duk wani sharaɗi game da amfani da intanet ko waya.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
