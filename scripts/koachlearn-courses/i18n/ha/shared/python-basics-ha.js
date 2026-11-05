"use strict";

// Koach Learn course, Hausa (ha) translation of shared/python-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const COLAB = { name: "Google Colab: Tambayoyin da ake yawan yi (FAQ)", url: "https://research.google.com/colaboratory/faq.html" };

module.exports = {
  id: "python-basics-ha",
  lang: "ha",
  translationOf: "python-basics",
  category: "Youth",
  name: "Gabatarwa ga Shirye-shiryen Kwamfuta da Python",
  skills: "Gudanar da Python a Google Colab, Amfani da variables da input, Yanke shawara da if, Aiki da lists da loops, Rubuta function",
  outcome: "rubuta da gudanar da gajeren shirin Python a Google Colab wanda ke tambayar mai amfani bayani, ya ajiye shi, ya yanke shawara da shi, ya maimaita matakai da loop, sannan ya buga sakamako a sarari.",
  about: [
    "Wannan kwas ɗin na duk wanda bai taɓa rubuta code ba ne: ɗalibai, tsofaffin sojoji da ke shiga sabuwar sana'a, da manya da ke neman aikin fasaha. Kuna buƙatar asusun Google kyauta da burauzar intanet kawai.",
    "Za ku rubuta Python na gaske a Google Colab, shafin intanet kyauta da ke gudanar muku da code, don haka babu abin da za ku saka a kwamfuta. Kowane darasi yana ƙara sabon kayan aiki ɗaya: bugawa (print), variables, yanke shawara, lists, loops da functions.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku kalli hotunan bayani (slides), sannan ku rubuta code ɗin da kanku a \"Gwada yanzu\". A ƙarshe za ku gina ƙaramin shirin duba kasafin kuɗin cefane tun daga farko. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "A Google Colab, ku rubuta shirin duba kasafin kuɗin cefane: function da ke karɓar list na farashi da kasafin kuɗi (budget), ya haɗa farashin da loop, sannan ya buga jimillar da \"Under budget\" ko \"Over budget\" tare da bambancin. Ku tambayi mai amfani kasafin kuɗin da input(), ku kira function ɗinku, sannan ku gwada shi da kasafin kuɗi biyu daban-daban.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da manya da ke gwada shirye-shiryen kwamfuta a karon farko: ɗaliban sakandare da jami'a, 'yan shirye-shiryen matasa, masu canja sana'a da masu horon aiki da ke son sanin code, bayanai (data) ko AI.",
    startingPoint: "Suna iya amfani da kwamfuta da burauzar intanet, kuma su shiga asusun Google. Yawancinsu ba su taɓa rubuta code ba, kuma ba su san mene ne variable, condition, list, loop ko function ba.",
    gap: "Shirye-shiryen kwamfuta mafari ne ga ayyuka a fasaha, bayanai da AI, kuma kayan aiki ne mai amfani a wasu ayyuka da yawa. Masu koyo da ba su taɓa rubuta shirin da ke aiki ba sau da yawa suna tunanin code ba nasu ba ne; shiri na farko da ke magance matsala ta gaske yana gina ƙwarewa da ƙarfin gwiwar ci gaba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar shirye-shirye da misali",
      "Na'urori: kwamfuta ko laptop mai burauzar intanet ita ce mafi kyau; tablet yana yiwuwa amma rubuta code a kansa ya fi wuya",
      "Asusu da kuɗi: asusun Google kyauta don Google Colab; babu abin da za a saka ko a saya",
      "Lokaci: kusan minti 5 zuwa 6 a kowane darasi tare da atisaye, kusan minti 60 zuwa 75 gaba ɗaya",
      "Lissafi: haɗawa, kwatantawa da ƙananan lambobi masu digo (decimals) kawai"
    ],
    prerequisites: "Babu. Kwas ɗin Basic Computer Skills (Ƙwarewar Kwamfuta ta Farko) yana taimakon masu koyo da ba su saba da rubutu da amfani da burauzar ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da Google Colab a burauzar intanet", action: "buɗe notebook, rubuta da gudanar da layin print, da karanta layin ƙarshe na saƙon kuskure (error)", standard: "shirin yana aiki, kuma an gyara kowane kuskuren rubutu ta amfani da saƙon kuskuren" },
    { id: "O2", condition: "Idan aka ba ku bayanin da shiri ke buƙata", action: "ajiye shi a variables na nau'in da ya dace, karɓar input daga mai amfani da buga shi da f-string", standard: "kuna mayar da input zuwa lamba da float() ko int() kafin yin lissafi" },
    { id: "O3", condition: "Idan aka ba ku ƙa'ida mai sakamako biyu ko fiye", action: "rubuta sashen if, elif da else da ke zaɓar sakamakon da ya dace", standard: "da alamun kwatantawa, colon (:) da indentation daidai, kuma yana ba da sakamakon da ya dace ga kowace lambar gwaji" },
    { id: "O4", condition: "Idan aka ba ku ƙimomi (values) da yawa", action: "ƙirƙirar list, ƙara abu, karanta abubuwa ta index, da amfani da len() da sum() a kansa", standard: "kowane index da kowane sakamako daidai ne" },
    { id: "O5", condition: "Idan aka ba ku list ko aikin da za a maimaita", action: "rubuta for loop mai jimilla mai gudana (running total) da while loop da ke tsayawa", standard: "jimillar daidai ce, kuma babu loop da ke gudana har abada" },
    { id: "O6", condition: "Idan aka ba ku ƙaramar matsala kamar duba kasafin kuɗi", action: "rubuta function mai parameters da return, kiran sa a cikin cikakken shiri da gwada shi", standard: "shirin yana ba da sakamako daidai ga aƙalla input biyu daban-daban" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shirye-shiryenku na farko",
      lessons: [
        {
          objectives: ["O1"],
          title: "Buɗe Google Colab da gudanar da layinku na farko",
          minutes: 5,
          goal: "Buɗe notebook na Colab, rubuta layin Python ɗaya ku gudanar da shi.",
          text: [
            "Shiri (program) jerin umarni ne da kwamfuta ke bi ɗaya bayan ɗaya. Python harshen shirye-shirye ne: hanyar rubuta waɗannan umarni da mutane za su iya karantawa. Ana amfani da shi don shafukan intanet, bayanai, wasanni, robots da AI.",
            "Google Colab shafin intanet ne kyauta da ke gudanar da Python a burauzarku. Ba ku saka komai. Ana ajiye aikinku a matsayin notebook a Google Drive ɗinku. Notebook yana da cells: akwatuna inda kuke rubuta code ku gudanar da shi.",
            "Umarninku na farko shi ne print. print(\"Hello, world!\") yana nuna kalmomin da ke cikin alamun zance (quotes). Alamun zance suna faɗa wa Python cewa wannan rubutu ne, ba umarni ba. Idan kuka yi kuskuren rubutu, Python yana nuna saƙon kuskure. Ku karanta layinsa na ƙarshe: yana faɗin abin da ya lalace."
          ],
          steps: ["Ku je colab.research.google.com ku shiga da asusun Google.", "Ku zaɓi ƙirƙirar sabon notebook.", "Ku danna cikin cell na code na farko ku rubuta: print(\"Hello, world!\")", "Ku danna maɓallin kunnawa (play) kusa da cell ɗin, ko Shift + Enter, don gudanar da shi.", "Ku karanta sakamakon da ke ƙarƙashin cell ɗin."],
          words: [["Shiri (program)", "jerin umarni da kwamfuta ke bi ɗaya bayan ɗaya."], ["Python", "sanannen harshen shirye-shirye mai sauƙin karantawa."], ["Notebook", "fayil na Colab mai cells inda kuke rubuta code ku gudanar da shi."], ["Cell", "akwati ɗaya a cikin notebook da ke ɗauke da code da za ku iya gudanarwa."], ["Saƙon kuskure (error message)", "bayanin Python cewa akwai abin da ba daidai ba a code ɗinku; layin ƙarshe yana faɗin mene ne."]],
          slides: [
            { title: "Mene ne Python", bullets: ["Harshe don rubuta umarni ga kwamfuta", "Ana amfani da shi don shafukan intanet, bayanai, wasanni da AI", "Yana da sauƙin karantawa idan aka kwatanta da harsuna da yawa"] },
            { title: "Google Colab", bullets: ["Shafin intanet kyauta da ke gudanar da Python a burauzarku", "Babu abin da za a saka", "Ana ajiye notebooks a Google Drive ɗinku"] },
            { title: "Layinku na farko", bullets: ["Ku rubuta: print(\"Hello, world!\")", "Ku gudanar da shi da maɓallin play ko Shift + Enter", "Kalmomin suna bayyana a ƙarƙashin cell ɗin"] },
            { title: "Kuskure abu ne na yau da kullum", bullets: ["Ku karanta layin ƙarshe na saƙon kuskuren", "Ku duba rubutun kalmomi, alamun zance da baka (brackets)", "Ku gyara ku sake gudanarwa"] }
          ],
          sources: [COLAB],
          tryIt: "Ku buɗe sabon notebook na Colab. A cell ɗaya, ku buga sunanku na farko. A cell na biyu, ku buga jimla game da abincin da kuka fi so. Sannan ku cire alamar zance ɗaya da gangan, ku gudanar, ku karanta saƙon kuskuren. Ku mayar da alamar zancen ku sake gudanarwa.",
          youCanNow: "buɗe Google Colab, rubuta layin print, gudanar da shi, da karanta saƙon kuskure.",
          quickCheck: [
            { objective: "O1", q: "A cikin notebook na Colab, mene ne cell?", options: ["Babban fayil (folder) na Google Drive", "Akwati inda kuke rubuta code ku gudanar da shi", "Saƙon kuskure", "Wani nau'in lamba"], answer: 1, why: "Notebook yana da cells inda kuke rubuta code ku gudanar da shi." },
            { objective: "O1", q: "Kun rubuta prnt(\"Hi\") kuma Python ya nuna dogon saƙon kuskure. Me za ku yi?", options: ["Ku rufe Colab ku buɗe sabon asusu", "Ku ƙyale shi ku ci gaba da rubuta code", "Ku karanta layin ƙarshe na saƙon kuskuren, sannan ku gyara rubutun zuwa print", "Ku goge notebook ɗin gaba ɗaya"], answer: 2, why: "Layin ƙarshe na saƙon kuskure yana faɗin abin da ya lalace, a nan an yi kuskuren rubuta suna." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Variables: ba bayanai suna",
          minutes: 5,
          goal: "Ajiye bayanai a variables da tambayar mai amfani input.",
          text: [
            "Variable suna ne da ke riƙe da ƙima (value), kamar akwati mai lakabi. name = \"Maya\" yana saka rubutun Maya a akwatin da ake kira name. hours = 20 yana saka lamba 20 a akwatin da ake kira hours. Alamar = tana nufin \"ajiye wannan\", ba \"daidai yake da\" ba.",
            "Ƙimomi suna da nau'o'i (types). Rubutu a cikin alamun zance string (str) ne. Lambobi cikakku integers (int) ne. Lambobi masu digo floats (float) ne. Nau'in yana da muhimmanci: \"5\" + \"5\" yana ba da \"55\", amma 5 + 5 yana ba da 10.",
            "input() yana tambayar mutumin da ke gudanar da shirin ya rubuta wani abu. Koyaushe yana mayar da string, don haka don yin lissafi kuna mayar da shi lamba: hours = float(input(\"Hours worked: \")).",
            "f-string yana haɗa rubutu da variables: print(f\"Hi {name}, you worked {hours} hours.\") Harafin f kafin alamun zance da baka masu lanƙwasa { } su ne ke yin aikin."
          ],
          steps: ["Ku zaɓi gajeren suna mai sarari ga variable, ba tare da sarari a ciki ba (use_underscores).", "Ku ajiye ƙima da =.", "Don input daga mai amfani, ku yi amfani da input(\"question: \").", "Ku naɗe shi a cikin int() ko float() idan kuna buƙatar lamba.", "Ku buga sakamakon da f-string."],
          words: [["Variable", "suna da ke riƙe da ƙima."], ["String (str)", "rubutu, da ake rubutawa a cikin alamun zance."], ["Integer (int)", "cikakkiyar lamba, kamar 7."], ["Float", "lamba mai digo, kamar 7.5."], ["input()", "yana tambayar mai amfani ya rubuta wani abu, kuma yana mayar da shi a matsayin string."], ["f-string", "rubutu da ke farawa da f wanda zai iya nuna variables a cikin { }."]],
          slides: [
            { title: "Variable akwati ne mai lakabi", bullets: ["name = \"Maya\"", "hours = 20", "= yana nufin ajiye, ba daidai da ba"] },
            { title: "Nau'o'i uku da aka saba", bullets: ["str: rubutu a cikin alamun zance", "int: lambobi cikakku", "float: lambobi masu digo"] },
            { title: "Tambayar mai amfani", bullets: ["input() koyaushe yana mayar da rubutu", "hours = float(input(\"Hours worked: \"))", "Ku mayar da rubutu lamba kafin lissafi"] },
            { title: "Bugawa da f-strings", bullets: ["print(f\"Hi {name}!\")", "Ku saka variables a cikin baka masu lanƙwasa"] }
          ],
          tryIt: "Ku rubuta shirin da ke tambayar sunan mai amfani, albashinsa na kowace awa, da awannin da ya yi aiki a wannan makon. Ku ajiye kowanne a variable, ku ninka albashin da awannin, sannan ku buga: Hi <suna>, you earned <adadi> this week.",
          youCanNow: "ajiye ƙimomi a variables, tambayar mai amfani input, mayar da rubutu lamba, da buga sakamako a sarari.",
          quickCheck: [
            { objective: "O2", q: "Wane nau'i ne ƙimar 3.75?", options: ["str", "int", "list", "float"], answer: 3, why: "Lamba mai digo float ce." },
            { objective: "O2", q: "Kuna son mai amfani ya rubuta albashinsa na kowace awa don ku ninka shi da awanni. Wane layi za ku rubuta?", options: ["rate = float(input(\"Pay rate: \"))", "rate = input(\"Pay rate: \")", "print(\"Pay rate\")", "rate == input(\"Pay rate: \")"], answer: 0, why: "input() yana ba da string, don haka float() yana mayar da shi lambar da za ku iya lissafi da ita." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yanke shawara da if, elif da else",
          minutes: 6,
          goal: "Rubuta code da ke yin abubuwa daban-daban bisa ga wani sharaɗi (condition).",
          text: [
            "Shirye-shirye suna yin zaɓi da if. Condition (sharaɗi) tambaya ce da amsarta True (gaskiya) ko False (ƙarya), kamar hours > 40. Idan True ce, layukan da aka tura ciki (indent) a ƙarƙashinta suna gudana.",
            "Alamun kwatantawa: == daidai da (alamar daidai biyu), != ba daidai ba, > ya fi, < ya gaza, >= aƙalla, <= mafi yawa. Kuna iya haɗa sharuɗɗa da and da or.",
            "elif yana nufin \"else if\" (in ba haka ba, idan): bincike na biyu idan na farko False ne. else yana gudana idan babu ɗaya daga cikin binciken da ya zama True. Indentation (sarari huɗu) ita ce hanyar da Python ke sanin layukan da ke na if. Colab yana saka muku ita bayan colon (:).",
            "Misali: if score >= 90: print(\"A\") elif score >= 80: print(\"B\") else: print(\"Keep practicing\"). Kowane sashe yana kan layinsa, kuma an tura print ciki."
          ],
          steps: ["Ku rubuta if, sannan sharaɗi, sannan colon (:).", "Ku tura ciki layukan da za su gudana idan sharaɗin True ne.", "Ku ƙara elif don wani binciken idan ana buƙata.", "Ku ƙara else don duk sauran.", "Ku gwada da ƙimomin da ke kaiwa kowace hanya (branch)."],
          words: [["Condition (sharaɗi)", "tambaya da amsarta True ko False."], ["Boolean", "nau'in True ko False a Python."], ["Indentation", "sarari a farkon layi da ke nuna sashen da yake ciki."], ["Branch (hanya)", "ɗaya daga cikin hanyoyin da if zai iya bi."]],
          slides: [
            { title: "if yana gudanar da code idan True ne kawai", bullets: ["if hours > 40:", "    print(\"Overtime!\")", "Kada ku manta da colon da indent"] },
            { title: "Alamun kwatantawa", bullets: ["== daidai, != ba daidai ba", "> ya fi, < ya gaza", ">= aƙalla, <= mafi yawa"] },
            { title: "elif da else", bullets: ["elif: duba wani sharaɗi", "else: yana gudana idan babu abin da ya dace", "Python yana dubawa daga sama zuwa ƙasa"] },
            { title: "Ku gwada kowace hanya", bullets: ["Ku gwada ƙima ɗaya ga kowace hanya", "Ku gwada iyaka, kamar 40 daidai"] }
          ],
          tryIt: "Ku rubuta shirin da ke tambayar zafin yanayi a Fahrenheit. Idan ya kai 85 ko fiye, ku buga \"Hot: drink water.\" Idan ya kai 50 ko fiye, ku buga \"Nice day.\" In ba haka ba, ku buga \"Bring a jacket.\" Ku gudanar da shi sau uku da 90, 50 da 30.",
          youCanNow: "rubuta sassan if, elif da else da gwada kowace hanya.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ma'anar alamar !=?", options: ["Daidai da", "Ya fi", "Ba daidai ba", "Ajiye wannan ƙima"], answer: 2, why: "!= yana nufin ba daidai ba; == yana nufin daidai da." },
            { objective: "O3", q: "Kuna son buga \"Ticket free\" idan shekaru (age) ƙasa da 5 ne ko aƙalla 65. Wane sharaɗi za ku yi amfani da shi?", options: ["if age < 5 and age >= 65:", "if age < 5 or age >= 65:", "if age = 5 or 65:", "if age > 5 or age < 65:"], answer: 1, why: "or yana sa sharaɗin ya zama True idan ɗaya daga cikin sassan True ne; babu shekarun da ke ƙasa da 5 kuma aƙalla 65 a lokaci ɗaya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shirye-shiryenku na farko",
        questions: [
          { objective: "O1", q: "Me print(\"Hello\") yake yi?", options: ["Yana ajiye fayil mai suna Hello", "Yana aika Hello zuwa firinta", "Yana nuna kalmar Hello a ƙarƙashin cell", "Yana goge cell ɗin"], answer: 2, why: "print yana nuna rubutu a matsayin sakamako." },
          { objective: "O1", q: "Code ɗinku ya nuna kuskure. A ina za ku fara dubawa?", options: ["Layin ƙarshe na saƙon kuskuren", "Kalmar farko ta notebook ɗin", "Google Drive ɗinku", "Tarihin burauzar"], answer: 0, why: "Layin ƙarshe na saƙon kuskuren Python yana faɗin abin da ya lalace." },
          { objective: "O2", q: "Kun gudanar da age = input(\"Age: \") kuma kun rubuta 16. Wane nau'i ne age?", options: ["int", "float", "Boolean", "str (rubutu)"], answer: 3, why: "input() koyaushe yana mayar da string; ku yi amfani da int() don mayar da shi lamba." },
          { objective: "O3", q: "Wane layi ne ke duba daidai ko hours ya fi 40?", options: ["if hours = 40", "if hours > 40:", "if hours more 40", "hours > 40 if:"], answer: 1, why: "if, sharaɗin, sannan colon." },
          { objective: "O3", q: "Yaushe sashen else yake gudana?", options: ["Koyaushe, da farko", "Sai lokacin da babu ɗaya daga cikin sharuɗɗan if ko elif da ya zama True", "Sai lokacin da if ya zama True", "Ba ya taɓa gudana"], answer: 1, why: "else yana kama duk abin da binciken da suka gabata ba su kama ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Shirye-shiryen da ke maimaitawa da tunawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Lists: ajiye ƙimomi da yawa tare",
          minutes: 5,
          goal: "Ƙirƙiri list, ƙara masa abu, ku karanta abubuwa daga cikinsa.",
          text: [
            "List yana riƙe da ƙimomi da yawa bisa tsari, a cikin baka masu kusurwa [ ]: prices = [3.50, 12.00, 6.25]. List zai iya riƙe rubutu ma: chores = [\"dishes\", \"laundry\"].",
            "Kowane abu yana da lambar matsayi da ake kira index. Python yana fara ƙirga daga 0, don haka prices[0] shi ne abu na farko (3.50), kuma prices[-1] shi ne na ƙarshe.",
            "Kayan aikin list masu amfani: prices.append(4.99) yana ƙara abu a ƙarshe. len(prices) yana faɗin adadin abubuwan da ke ciki. sum(prices) yana haɗa list na lambobi. \"dishes\" in chores yana zama True idan abin yana cikin list ɗin."
          ],
          steps: ["Ku yi list da baka masu kusurwa da waƙafi (commas).", "Ku karanta abu da list_name[index], kuna farawa daga 0.", "Ku ƙara da .append(value).", "Ku ƙirga abubuwa da len().", "Ku haɗa lambobi da sum()."],
          words: [["List", "rukunin ƙimomi bisa tsari a cikin baka masu kusurwa."], ["Index", "matsayin abu a cikin list, yana farawa daga 0."], ["append", "yana ƙara abu ɗaya a ƙarshen list."], ["len()", "yana ba da adadin abubuwa."]],
          slides: [
            { title: "List yana riƙe da ƙimomi da yawa", bullets: ["prices = [3.50, 12.00, 6.25]", "chores = [\"dishes\", \"laundry\"]"] },
            { title: "Ƙirga yana farawa daga 0", bullets: ["prices[0] shi ne abu na farko", "prices[-1] shi ne abu na ƙarshe"] },
            { title: "Kayan aikin list", bullets: ["append() yana ƙara a ƙarshe", "len() yana ƙirga abubuwa", "sum() yana haɗa lambobi", "in yana duba ko abu yana ciki"] }
          ],
          tryIt: "Ku yi list na abubuwa uku da kuke buƙatar saya, da farashinsu a list na biyu. Ku ƙara abu ɗaya da farashinsa da append. Ku buga adadin abubuwan, abu na farko, da jimillar farashin da sum().",
          youCanNow: "ƙirƙirar list, karanta abubuwa ta index, ƙara abubuwa, da ƙirga ko haɗa su.",
          quickCheck: [
            { objective: "O4", q: "Mene ne index a cikin list?", options: ["Lambar matsayin abu, tana farawa daga 0", "Jimillar list ɗin", "Sunan list ɗin", "Abu na ƙarshe kaɗai"], answer: 0, why: "Kowane abu yana da index, kuma Python yana ƙirga daga 0." },
            { objective: "O4", q: "chores = [\"dishes\", \"laundry\"]. Kuna son duba ko \"laundry\" yana cikin list ɗin. Me za ku rubuta?", options: ["len(\"laundry\")", "chores[\"laundry\"]", "sum(chores)", "\"laundry\" in chores"], answer: 3, why: "\"laundry\" in chores yana zama True idan abin yana cikin list ɗin." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Loops: maimaita matakai ba tare da sake rubutawa ba",
          minutes: 6,
          goal: "Yi amfani da for loop don bi ta list, da while loop don maimaitawa har a gama.",
          text: [
            "Loop yana maimaita code. for loop yana gudana sau ɗaya ga kowane abu a cikin list: for price in prices: print(price). A kowane zagaye, variable price yana riƙe da abu na gaba.",
            "range() yana yin jerin lambobi don ƙirga: for i in range(5) yana gudana sau biyar, i = 0, 1, 2, 3, 4.",
            "Jimilla mai gudana (running total) hanya ce da aka saba: ku fara da total = 0 kafin loop, sannan ku ƙara total = total + price a ciki (ko total += price). Bayan loop, total yana riƙe da jimillar.",
            "while loop yana maimaitawa muddin sharaɗi yana True, misali while answer != \"done\". Ku tabbata wani abu a cikin loop yana canja sharaɗin, in ba haka ba zai gudana har abada. A Colab, ku danna maɓallin tsayawa (stop) don tsayar da loop da ya ƙi tsayawa."
          ],
          steps: ["Ku yanke abin da za a maimaita.", "Ga kowane abu a list, ku yi amfani da: for item in my_list:", "Ku tura ciki code ɗin da ke maimaitawa.", "Don jimilla, ku saka total = 0 kafin loop ku ƙara a ciki.", "Don while loop, ku tabbata sharaɗin zai iya zama False."],
          words: [["Loop", "code da ke maimaitawa."], ["for loop", "yana maimaitawa sau ɗaya ga kowane abu a list ko range."], ["while loop", "yana maimaitawa muddin sharaɗi yana True."], ["range()", "yana yin jerin lambobi, yana farawa daga 0 idan ba a faɗi wani ba."], ["Jimilla mai gudana (running total)", "variable da kuke ci gaba da ƙarawa a cikin loop."]],
          slides: [
            { title: "for: sau ɗaya ga kowane abu", bullets: ["for price in prices:", "    print(price)", "price yana riƙe da abu na gaba a kowane zagaye"] },
            { title: "Ƙirga da range", bullets: ["for i in range(5): yana gudana sau 5", "i yana tafiya 0, 1, 2, 3, 4"] },
            { title: "Hanyar jimilla mai gudana", bullets: ["total = 0 kafin loop", "total += price a cikin loop", "Ku buga total bayan loop"] },
            { title: "while: har sai sharaɗi ya canja", bullets: ["Yana maimaitawa muddin sharaɗin True ne", "Ku canja wani abu a ciki, in ba haka ba ba zai ƙare ba", "Maɓallin stop yana tsayar da loop da ya maƙale"] }
          ],
          tryIt: "Ku rubuta while loop da ke ci gaba da tambaya \"Add a price (or type done): \". Ku ƙara kowace lamba a list da append. Idan mai amfani ya rubuta done, ku yi amfani da for loop da jimilla mai gudana don haɗa farashin ku buga jimillar.",
          youCanNow: "maimaita code da for da while loops, da riƙe jimilla mai gudana.",
          quickCheck: [
            { objective: "O5", q: "Waɗanne lambobi range(4) yake bayarwa?", options: ["1, 2, 3, 4", "0, 1, 2, 3", "0, 1, 2, 3, 4", "4 kaɗai"], answer: 1, why: "range(4) yana ƙirga daga 0 kuma yana tsayawa kafin 4." },
            { objective: "O5", q: "Loop ɗinku yana haɗa farashi amma total yana komawa 0 a kowane zagaye. Ina za ku mayar da total = 0?", options: ["Cikin loop", "Bayan loop", "Kafin loop", "Cikin layin print"], answer: 2, why: "Ku saka total = 0 sau ɗaya kafin loop, sannan ku ƙara masa a ciki." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Functions: naɗe code da za ku sake amfani da shi",
          minutes: 6,
          goal: "Rubuta function mai inputs da return, sannan ku yi amfani da shi a cikakken shiri.",
          text: [
            "Function sashen code ne mai suna da za ku iya gudanarwa a duk lokacin da kuke buƙata. Kun riga kun yi amfani da waɗanda aka gina a ciki: print(), len(), sum(). Yanzu za ku rubuta naku da def.",
            "def check_budget(prices, budget): yana fara function mai parameters biyu, wato inputs ɗin da yake buƙata. A ciki, kuna yin aikin. return yana mayar da sakamako ga wanda ya kira shi.",
            "Kiran function yana gudanar da shi: result = check_budget([3.5, 12, 6.25], 25). Function mai kyau yana yin aiki ɗaya, kuma yana da sunan da ke faɗin mene ne wannan aikin.",
            "Haɗa komai tare: aikin ƙarshe yana amfani da duk abin da ke cikin wannan kwas ɗin. Ku fara tsara shi da kalmomi masu sauƙi (karɓi kasafin kuɗi, haɗa farashi, kwatanta, buga), sannan ku mayar da kowane layi code ku gwada shi da kasafin kuɗi biyu."
          ],
          steps: ["Ku rubuta tsarin da kalmomi masu sauƙi a matsayin comments da ke farawa da #.", "Ku fara function da def name(parameters):", "Ku tura jikin function ciki; ku yi amfani da loop da if a ciki.", "Ku yi amfani da return don mayar da sakamako, ko ku buga a ciki.", "Ku kira function ɗin ku gwada shi da inputs daban-daban."],
          words: [["Function", "sashen code mai suna da za ku iya gudanarwa sau da yawa."], ["def", "kalmar da ke fara sabon function."], ["Parameter", "input da function ke buƙata, wanda aka ambata a cikin bakansa."], ["return", "yana mayar da ƙima daga function."], ["Comment", "bayani a cikin code da ke farawa da #; Python yana ƙyale shi."]],
          slides: [
            { title: "Me yasa functions", bullets: ["Ku rubuta code sau ɗaya, ku yi amfani da shi sau da yawa", "Aiki ɗaya ga kowane function", "Suna mai sarari yana faɗin abin da yake yi"] },
            { title: "Rubuta ɗaya", bullets: ["def check_budget(prices, budget):", "Ku tura jikin ciki", "return yana mayar da sakamako"] },
            { title: "Kiran ɗaya", bullets: ["check_budget([3.5, 12, 6.25], 25)", "Ku gwada inputs daban-daban don gwada shi"] },
            { title: "Tsarin aikin ƙarshe", bullets: ["Ku karɓi kasafin kuɗi da input()", "Ku haɗa farashin da loop", "Ku kwatanta da if, ku buga sakamakon"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta check_budget(prices, budget). A ciki, ku yi amfani da loop don haɗa farashin, sannan ku buga jimillar da \"Under budget by X\" ko \"Over budget by X\". Ku tambayi mai amfani kasafin kuɗin da float(input()), ku kira function ɗin da list na cefanenku, sannan ku gwada shi da babban kasafin kuɗi da ƙarami.",
          youCanNow: "rubuta da kiran function naku, da haɗa variables, input, if, lists da loops a cikin shiri ɗaya da ke aiki.",
          quickCheck: [
            { objective: "O6", q: "Mene ne parameters a cikin function?", options: ["Saƙonnin kuskure", "Loops da ke cikin function", "Sunan function ɗin", "Inputs ɗin da function ke buƙata"], answer: 3, why: "Parameters, kamar prices da budget, su ne inputs ɗin da function ke buƙata." },
            { objective: "O6", q: "Kafin ku rubuta shirin duba kasafin kuɗi, me za ku fara yi?", options: ["Ku tsara shi da kalmomi masu sauƙi: karɓi kasafin kuɗi, haɗa farashi, kwatanta, buga", "Ku rubuta code mai yawa yadda za ku iya ku yi fatan ya yi aiki", "Ku rubuta sunan function kaɗai", "Ku gwada shi ba tare da kasafin kuɗi ba"], answer: 0, why: "Tsarawa da kalmomi masu sauƙi da farko yana sa mayar da kowane layi code ya yi sauƙi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Shirye-shiryen da ke maimaitawa da tunawa",
        questions: [
          { objective: "O4", q: "colors = [\"red\", \"blue\", \"green\"]. Mene ne colors[0]?", options: ["\"blue\"", "\"green\"", "Kuskure (error)", "\"red\""], answer: 3, why: "Python yana ƙirga matsayin abubuwa a list daga 0, don haka index 0 shi ne abu na farko." },
          { objective: "O4", q: "Wane layi ne ke ƙara 4.99 a ƙarshen list prices?", options: ["prices.append(4.99)", "prices + 4.99", "append.prices(4.99)", "prices[4.99]"], answer: 0, why: "append yana ƙara abu ɗaya a ƙarshen list." },
          { objective: "O5", q: "Sau nawa for i in range(3): yake gudana?", options: ["2", "4", "3", "Har abada"], answer: 2, why: "range(3) yana ba da 0, 1 da 2: sau uku." },
          { objective: "O5", q: "while loop ɗinku ba ya tsayawa. Mene ne dalilin da ya fi yiwuwa?", options: ["Kun yi amfani da list", "Colab ba shi da intanet", "Kun yi amfani da print", "Babu abin da ke cikin loop da ke sa sharaɗin ya zama False"], answer: 3, why: "while loop yana ƙarewa ne kawai idan sharaɗinsa ya zama False." },
          { objective: "O6", q: "Me return yake yi a cikin function?", options: ["Yana goge function ɗin", "Yana sake kunna Colab", "Yana mayar da ƙima zuwa inda aka kira function ɗin", "Yana buga kuskure"], answer: 2, why: "return yana mayar da sakamakon ga wanda ya kira." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga Shirye-shiryen Kwamfuta da Python",
    questions: [
      { objective: "O1", q: "Mene ne shiri (program)?", options: ["Wani nau'in allon kwamfuta", "Jerin umarni da kwamfuta ke bi ɗaya bayan ɗaya", "Adireshin shafin intanet", "Asusun Google"], answer: 1, why: "Shiri jerin umarni ne da ake gudanarwa bisa tsari." },
      { objective: "O1", q: "Me yasa Google Colab yake da amfani ga masu farawa?", options: ["Yana gudanar da Python a burauzar ba tare da saka komai ba", "Yana aiki ne kawai ba tare da intanet ba", "Yana rubuta muku dukkan code", "Yana buƙatar lasisin da ake biya"], answer: 0, why: "Colab notebook ne kyauta a intanet; ba ku saka komai." },
      { objective: "O1", q: "Ta yaya kuke gudanar da cell na code a Colab?", options: ["Ku rufe shafin (tab)", "Ku rubuta run a saman shafin", "Ku danna maɓallin play ko Shift + Enter", "Ku aika wa kanku ta imel"], answer: 2, why: "Maɓallin play ko Shift + Enter yana gudanar da cell." },
      { objective: "O1", q: "Wane layi ne ke buga rubutun Good job?", options: ["print(\"Good job\")", "print(Good job)", "print \"Good job\"", "say(\"Good job\")"], answer: 0, why: "Rubutu yana shiga cikin alamun zance a cikin bakan print." },
      { objective: "O2", q: "A Python, me = yake yi a cikin pay = 15?", options: ["Yana duba ko pay daidai yake da 15", "Yana buga 15", "Yana goge pay", "Yana ajiye 15 a cikin variable pay"], answer: 3, why: "= ɗaya yana ajiye ƙima; == yana kwatantawa." },
      { objective: "O2", q: "Me \"5\" + \"5\" yake bayarwa?", options: ["10", "\"55\"", "Kuskure koyaushe", "5"], answer: 1, why: "Strings biyu da aka haɗa suna yin \"55\"." },
      { objective: "O2", q: "Kuna buƙatar yin lissafi da abin da mai amfani ya rubuta. Wane layi ne daidai?", options: ["hours = input(\"Hours: \") * 2", "hours = float(input(\"Hours: \"))", "hours = print(\"Hours\")", "hours = text(input())"], answer: 1, why: "input yana ba da rubutu; float() yana mayar da shi lamba." },
      { objective: "O2", q: "name = \"Ana\". Wanne ne ke buga Hi Ana?", options: ["print(\"Hi {name}\")", "print(Hi name)", "print(f(Hi name))", "print(f\"Hi {name}\")"], answer: 3, why: "Harafin f kafin alamun zance yana bar {name} ya nuna variable ɗin." },
      { objective: "O3", q: "Wace alama ce ke nufin \"daidai yake da\" a cikin sharaɗi?", options: ["==", "=", "=>", "!="], answer: 0, why: "== yana kwatantawa; = yana ajiyewa." },
      { objective: "O3", q: "Me dole ya zo a ƙarshen layin if?", options: ["Semicolon (;)", "Aya (.)", "Colon (:)", "Babu komai"], answer: 2, why: "Layukan if, elif, else, for, while da def suna ƙarewa da colon." },
      { objective: "O3", q: "score = 85. Wace hanya ce ke gudana? if score >= 90 / elif score >= 80 / else", options: ["if", "else", "Babu ɗaya daga cikinsu", "elif"], answer: 3, why: "85 bai kai 90 ko fiye ba, amma ya kai 80 ko fiye, don haka elif ne ke gudana." },
      { objective: "O3", q: "Ta yaya Python ke sanin layukan da ke na if?", options: ["Ta launin rubutun", "Ta manyan haruffa", "Ta indentation", "Ta lambobin layuka"], answer: 2, why: "Layukan da aka tura ciki a ƙarƙashin if su ne sashensa." },
      { objective: "O4", q: "nums = [4, 8, 2]. Me len(nums) yake bayarwa?", options: ["2", "3", "8", "14"], answer: 1, why: "len yana ƙirga abubuwa; akwai uku." },
      { objective: "O4", q: "nums = [4, 8, 2]. Me sum(nums) yake bayarwa?", options: ["3", "8", "14", "482"], answer: 2, why: "sum yana haɗa lambobin: 4 + 8 + 2 = 14." },
      { objective: "O4", q: "Mene ne prices[-1]?", options: ["Abu na farko", "Kuskure", "Abu na ƙarshe", "Farashin farko a cire"], answer: 2, why: "Index -1 yana nufin abu na ƙarshe." },
      { objective: "O5", q: "Kuna son haɗa jimillar list a cikin loop. Me ke zuwa kafin loop?", options: ["total = 0", "return total", "print(total)", "def total"], answer: 0, why: "Jimilla mai gudana tana farawa daga 0 kafin loop." },
      { objective: "O5", q: "Me for chore in chores: yake yi?", options: ["Yana goge list ɗin", "Yana gudana sau ɗaya kawai", "Yana jera list ɗin bisa tsari", "Yana gudana sau ɗaya ga kowane abu a cikin chores"], answer: 3, why: "for loop yana bi ta kowane abu bisa tsari." },
      { objective: "O6", q: "Wace kalma ce ke fara sabon function?", options: ["func", "def", "new", "make"], answer: 1, why: "def yana bayyana (define) function." },
      { objective: "O6", q: "A cikin def check_budget(prices, budget):, mene ne prices da budget?", options: ["Kurakurai", "Parameters: inputs ɗin da function ke buƙata", "Lists na functions", "Comments"], answer: 1, why: "Sunayen da ke cikin baka su ne parameters." },
      { objective: "O6", q: "Kun rubuta shirin duba kasafin kuɗi. Wace hanya ce mafi kyau don gwada shi?", options: ["Ku gudanar da shi sau ɗaya ku yi fata", "Ku goge comments", "Ku raba shi kafin ku gudanar da shi", "Ku gudanar da shi da babban kasafin kuɗi da ƙarami ku duba sakamakon duka biyun"], answer: 3, why: "Gwaji da inputs daban-daban yana tabbatar da cewa kowace hanya tana aiki." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 6, 8, 10, 12, 14, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Function", objective: "O6", notYet: "Babu function, ko kuma ba ya karɓar farashi da kasafin kuɗi.", meets: "Function mai parameters na farashi da kasafin kuɗi wanda ke mayar (return) ko buga sakamakon.", exceeds: "Function ɗin yana da suna mai sarari, yana yin aiki ɗaya, kuma yana amfani da return." },
      { name: "Loop da jimilla", objective: "O5", notYet: "Jimillar ba daidai ba ce, ko ba a yi amfani da loop ba.", meets: "for loop yana haɗa farashin a jimilla mai gudana da ke farawa daga 0.", exceeds: "Yana kuma buga adadin abubuwan da aka duba ta amfani da len()." },
      { name: "Yanke shawara", objective: "O3", notYet: "Shirin ba ya cewa Under budget ko Over budget, ko yana faɗin wanda ba daidai ba.", meets: "if da else suna buga saƙon da ya dace tare da bambancin.", exceeds: "Yana kuma kula da lokacin da jimillar ta yi daidai da kasafin kuɗi da elif." },
      { name: "Input", objective: "O2", notYet: "Ba a tambayi kasafin kuɗi ba, ko an yi amfani da shi a matsayin rubutu don haka lissafin ya kasa.", meets: "input() yana tambayar kasafin kuɗi, kuma float() yana mayar da shi lamba.", exceeds: "Yana buga sakamakon da f-string mai sauƙin karantawa." },
      { name: "Gwaji", objective: "O6", notYet: "An gudanar da shirin sau ɗaya ko ba a gudanar da shi ba kwata-kwata.", meets: "An gudanar da shi da kasafin kuɗi biyu daban-daban, kuma sakamakon duka biyun daidai ne.", exceeds: "An kuma gwada shi da kasafin kuɗin da ya yi daidai da jimillar, ko da list marar komai." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na shirin duba kasafin kuɗi",
      "Masu koyo da suka ce sun rubuta wani shirin Python nasu cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka ci gaba zuwa kwas na gaba, kamar AI Programming with Python ko Data Science for Beginners",
      "Masu koyo da suka shiga ƙungiyar code, aji, horon aiki (internship) ko shirin horo bayan kwas ɗin"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko laptop mai burauzar intanet",
      "Asusun Google kyauta don amfani da Google Colab",
      "Takarda da alƙalami don tsara shirin da kalmomi masu sauƙi",
      "Kusan minti 60 zuwa 75 gaba ɗaya, tare da lokacin atisaye"
    ],
    facilitatorNotes: [
      "Kafin aji, ku duba cewa kowane mai koyo zai iya shiga Google Colab; asusun makaranta wani lokaci suna toshe shi, don haka ku shirya asusun kai ko wani notebook na Python kyauta.",
      "Ku ƙarfafa masu koyo su rubuta code ɗin da kansu maimakon kwafa da liƙawa, kuma su karanta saƙonnin kuskure da babbar murya tare.",
      "Ku yi amfani da shirye-shirye bibbiyu (pair programming): ɗaya yana rubutu, ɗaya yana karantawa da dubawa, sannan su canja a kowane darasi.",
      "Ku nuna cewa kuskure wani ɓangare ne na code; ku nuna yadda kuke gyara naku a kan allo.",
      "Don aikin ƙarshe, ku ba da misalan list na farashi da kasafin kuɗi don masu koyo su kwatanta sakamakonsu da naku."
    ]
  }
};
