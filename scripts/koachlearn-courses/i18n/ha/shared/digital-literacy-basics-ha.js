"use strict";

// Koach Learn course, Hausa (ha) translation of shared/digital-literacy-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "digital-literacy-basics-ha",
  lang: "ha",
  translationOf: "digital-literacy-basics",
  category: "Re-Entry",
  name: "Tushen Ilimin Fasahar Zamani",
  skills: "Shiga intanet kyauta ko da ƙaramin kuɗi, Bincike mai kyau, Tabbatar da gaskiyar bayani, Cike fom a intanet, Ɗaukar hoton takarda (scan) da tura ta, Kare sawunku a intanet",
  outcome: "nemo ainihin shafin hukuma na hidimar da kuke buƙata, tabbatar cewa bayanansa amintattu ne, kuma ku kammala aiki a can: cike fom, ɗaukar hoton takarda (scan) ku tura ta da sunan fayil mai sarari, da kiyaye bayananku na sirri da mutuncinku a intanet.",
  about: [
    "Ilimin fasahar zamani yana nufin iya nemo bayani, auna shi da amfani da shi a waya da kwamfuta, da kammala ayyuka na gaske a intanet: neman aiki, sabunta katin shaida, amfani da tallafi ko ɗaukar lokacin ganin likita. Yanzu hidimomi da yawa ta intanet ake fara yin su, don haka waɗannan ƙwarewa suna buɗe ƙofofi.",
    "A Babi na 1 za ku koyi inda ake shiga intanet kyauta ko da ƙaramin kuɗi, yadda ake bincike mai kyau, da yadda ake bambance bayanin gaskiya da na ƙarya. A Babi na 2 za ku cike fom, ku ɗauki hoton takardu (scan) ku tura su, kuma ku kare sirrinku da mutuncinku a intanet.",
    "Ba a buƙatar wata ƙwarewa ta baya. Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku zaɓi hidima ɗaya da kuke buƙata, kamar cibiyar neman aiki ta jiharku, ofishin motoci, ofishin tallafi ko asibiti. Ku nemo ta, ku tabbatar cewa shafin na hukuma ne, ku nemo shafin da ke da fom ko matakai. Sannan ku ɗauki hoton takardar gwaji (scan) da wayarku (wasiƙa ko shafin da kuka rubuta, ba katin shaida na gaske ba), ku ajiye ta a matsayin PDF da sunan fayil mai sarari, ku rubuta layuka uku kan yadda kuka tabbatar da shafin da yadda kuka kiyaye bayananku na sirri.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke buƙatar yin ayyuka a intanet, musamman masu dawowa gida daga gidan yari, da kuma masu neman aiki, tsofaffi da 'yan al'umma da suka daɗe ba sa amfani da fasaha ko ba su taɓa amfani da ita sosai ba.",
    startingPoint: "Suna iya kira da tura saƙon tes a waya, kuma wataƙila suna da asusun imel mai sauƙi. Da yawa ba su taɓa amfani da injin bincike (search engine) don nemo shafin hukuma ba, ko auna gaskiyar bayani, cike dogon fom a intanet, ɗaukar hoton takarda (scan) ko duba saitunan sirrinsu ba.",
    gap: "Yanzu ana neman aiki, katin shaida, tallafi, gida da kiwon lafiya ta intanet, sau da yawa tare da takardun da za a tura. Ba tare da waɗannan ƙwarewa ba, mutane sukan makale, su biya shafukan bogi kuɗi don hidimomin da ke kyauta, su ba 'yan damfara lambobin katin shaida, ko su lalata damarsu ta abin da wasu za su iya gani game da su a intanet.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomi kamar injin bincike, PDF da sawun intanet",
      "Na'urori: wayar zamani, ko kwamfutar ɗakin karatu ko ta cibiyar neman aiki kyauta; wasu masu koyo ba su da na'ura ta kansu",
      "Lokaci: kusan minti 5 kowane darasi, kusan minti 60 gaba ɗaya",
      "Kuɗi: zaɓuɓɓuka na kyauta kaɗai, kamar Wi-Fi na ɗakin karatu da manhajojin scan kyauta a waya",
      "Sirri da ƙa'idoji: ana atisaye da takardar gwaji, ba katin shaida na gaske ba; masu koyo da ke kan parole ko probation (sakin sharaɗi) suna bin duk wata ƙa'idar intanet da suke da ita"
    ],
    prerequisites: "Babu. Kwas ɗin Basic Computer Skills (Ƙwarewar Kwamfuta ta Farko) ko Smartphone and Tablet (Wayar Zamani da Tablet) yana taimaka wa masu koyo da ba su saba da na'urori ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka yi la'akari da inda kuke zaune", action: "nemo hanyar shiga intanet kyauta ko da ƙaramin kuɗi, da jera matakan tsaro na Wi-Fi na jama'a da kwamfutocin da ake rabawa", standard: "kuna ambaton aƙalla wuri ko shiri ɗaya na gaske da aƙalla matakan tsaro biyu" },
    { id: "O2", condition: "Ta amfani da injin bincike", action: "neman shafin hukuma na hidimar da kuke buƙata da kalmomin bincike masu sarari", standard: "kuna isa shafin hukuma, kuna tsallake duk tallace-tallace" },
    { id: "O3", condition: "Idan aka ba ku shafin intanet ko wani rubutu (post)", action: "duba ko za a iya amincewa da bayanin ta amfani da tambayoyi huɗu", standard: "kuna amsa wa ya yi shi, yaushe, me sauran majiyoyi amintattu suke cewa, da ko yana gaggauta ku" },
    { id: "O4", condition: "Idan aka ba ku fom a shafin hukuma", action: "cike fom ɗin daidai da ajiye shaidar cewa kun tura shi", standard: "kowane wurin da ake buƙata an cike shi, kuma an ajiye tabbacin karɓa" },
    { id: "O5", condition: "Idan kuna da takarda da waya", action: "ɗaukar hoton takardar (scan) da ajiye ta a matsayin PDF da sunan fayil mai sarari", standard: "hoton yana miƙe kuma ana iya karanta shi, kuma sunan yana faɗin ta waye takardar da mece ce" },
    { id: "O6", condition: "Ta amfani da injin bincike da saitunan kafofin sada zumunta naku", action: "duba abin da wasu za su iya gani game da ku a intanet da ƙarfafa saitunan sirrinku", standard: "kun bincika sunanku kuma kun canja aƙalla saitin sirri ɗaya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Nemo bayanin da za ku iya amincewa da shi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Shiga intanet kyauta ko da ƙaramin kuɗi",
          minutes: 5,
          goal: "Nemo hanyar shiga intanet kyauta ko da ƙaramin kuɗi kusa da ku.",
          text: [
            "Ba sai kuna da kwamfutarku ba kafin ku shiga intanet. Ɗakunan karatu na jama'a yawanci suna da kwamfutoci kyauta, Wi-Fi kyauta da ma'aikata masu taimako. Cibiyoyin neman aiki da yawa, da cibiyoyin masu dawowa gida da na al'umma, suna da ɗakunan kwamfuta.",
            "Lifeline shiri ne na gwamnatin tarayyar Amurka, wanda FCC ke kula da shi, da ke ba da ragin kuɗi kowane wata a kan waya ko intanet ga waɗanda suka cancanta, yawanci saboda ƙarancin samun kuɗi ko kasancewa a wani shiri kamar SNAP ko Medicaid. Adadin ragin yana iya canjawa, don haka ku duba lifelinesupport.org don adadin yanzu da yadda ake nema.",
            "A Wi-Fi na jama'a, ku yi amfani da shafukan da adireshinsu ke farawa da https kuma suke nuna alamar makulli kawai, kuma kada ku yi harkokin banki a kwamfutocin da ake rabawa. Koyaushe ku fita daga asusu ku rufe burauzar idan kun gama a kwamfutar da ake rabawa."
          ],
          steps: ["Ku nemo ɗakin karatu na jama'a mafi kusa ku duba lokutan buɗewarsa.", "Ku tambayi ma'aikata game da kwamfutoci kyauta, Wi-Fi da zaman taimako.", "Idan kuɗi matsala ne, ku karanta game da Lifeline a lifelinesupport.org.", "A kwamfutocin da ake rabawa, ku fita daga asusu ku rufe burauzar idan kun gama."],
          words: [["Wi-Fi", "haɗin intanet ba tare da waya ba."], ["Lifeline", "shirin gwamnatin tarayyar Amurka da ke rage kuɗin waya ko intanet na kowane wata ga waɗanda suka cancanta."], ["https", "farkon adireshin shafi da ke nufin an ɓoye haɗin (an rikita shi ta yadda wasu ba za su karanta ba)."]],
          sources: [{ name: "Lifeline Support (USAC, a madadin FCC)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Wuraren shiga intanet kyauta", bullets: ["Ɗakunan karatu na jama'a: kwamfutoci, Wi-Fi, masu taimako", "Cibiyoyin neman aiki da cibiyoyin al'umma"] },
            { title: "Lifeline", bullets: ["Ragin kuɗin waya ko intanet daga gwamnatin tarayya", "Ga waɗanda suka cancanta ta samun kuɗi ko shirye-shirye kamar SNAP", "Ku duba lifelinesupport.org don bayanai na yanzu"] },
            { title: "Tsaro a kwamfutocin da ake rabawa", bullets: ["Ku nemi https da alamar makulli", "Kada ku yi harkokin banki a kwamfutar jama'a", "Ku fita daga asusu ku rufe burauzar"] }
          ],
          tryIt: "Ku nemo ɗakin karatu na jama'a mafi kusa a intanet. Ku rubuta adireshinsa, lokutan buɗewarsa da ko yana ba da taimakon kwamfuta kyauta.",
          youCanNow: "nemo hanyar shiga intanet kyauta ko da ƙaramin kuɗi, da amfani da kwamfutocin da ake rabawa lafiya.",
          quickCheck: [
            { objective: "O1", q: "Wane shiri ne ke ba da ragin kuɗi kowane wata a kan waya ko intanet ga waɗanda suka cancanta?", options: ["Injin bincike", "Lifeline", "Manhajar ajiye kalmomin sirri", "Manhajar sada zumunta"], answer: 1, why: "Lifeline shiri ne na gwamnatin tarayya, wanda FCC ke kula da shi, da ke rage kuɗin waya ko intanet." },
            { objective: "O1", q: "Kun gama duba imel ɗinku a kwamfutar ɗakin karatu. Me za ku yi kafin ku tafi?", options: ["Ku bar burauzar a buɗe don mutum na gaba", "Ku ajiye kalmar sirrinku a burauzar", "Ku fita daga asusu ku rufe burauzar", "Ku rubuta kalmar sirrinku a ɗan takarda mai manne"], answer: 2, why: "Fita daga asusu da rufe burauzar suna hana mutum na gaba shiga asusunku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bincike mai kyau",
          minutes: 5,
          goal: "Yi amfani da injin bincike don nemo wani shafin hukuma da sauri.",
          text: [
            "Injin bincike (search engine), kamar Google ko Bing, yana nemo shafukan intanet bisa kalmomin da kuka rubuta. Ku yi amfani da 'yan kalmomin bincike masu sarari, ba dogon labari ba: \"California DMV renew ID\" ya fi aiki fiye da \"ta yaya zan dawo da katin shaidata na rasa shi bara\".",
            "Ku ƙara sunan jiharku ko garinku don samun sakamako na kusa. Ku sa kalmomi a cikin alamomin ambato (\"\") don nemo wannan jimla daidai. Ku ƙara \"site:.gov\" don ganin shafukan gwamnatin Amurka kawai.",
            "Sakamakon farko sau da yawa tallace-tallace ne, masu alamar \"Sponsored\" ko \"Ad\". Tallace-tallace suna iya zama na bogi, ko su karɓi kuɗi don abin da ke kyauta a shafin hukuma. Ku gangara ku wuce su zuwa sakamako na gaske."
          ],
          steps: ["Ku rubuta kalmomin bincike 3 zuwa 6.", "Ku ƙara sunan jiharku ko garinku.", "Ku ƙara site:.gov don shafukan gwamnati.", "Ku tsallake sakamakon da ke da alamar Sponsored ko Ad.", "Ku buɗe sakamakon ku karanta adireshin shafin kafin ku amince da shi."],
          words: [["Injin bincike (search engine)", "shafin intanet da ke nemo shafuka bisa kalmomin da kuka rubuta, kamar Google ko Bing."], ["Kalmomin bincike (key words)", "kalmomi mafi muhimmanci game da abin da kuke son nemowa."], ["Sponsored / Ad", "sakamakon da aka biya kuɗi don a nuna shi; ba koyaushe na hukuma ko mafi kyau ba ne."]],
          slides: [
            { title: "Ku yi amfani da kalmomin bincike", bullets: ["\"California DMV renew ID\"", "Ba dogon labari ba"] },
            { title: "Dabarun bincike", bullets: ["Ku ƙara sunan jiharku ko garinku", "\"Alamomin ambato\" don jimla daidai", "site:.gov don shafukan gwamnati"] },
            { title: "Ku tsallake tallace-tallace", bullets: ["Suna da alamar Sponsored ko Ad", "Suna iya karɓar kuɗi don hidimomin kyauta", "Ku gangara zuwa sakamako na gaske"] }
          ],
          tryIt: "Ku nemo cibiyar neman aiki ko ofishin tallafin rashin aikin yi na jiharku. Ku gwada sau ɗaya da doguwar jimla, sau ɗaya kuma da kalmomin bincike tare da site:.gov. Wane bincike ne ya kai ku shafin hukuma da sauri?",
          youCanNow: "bincike da kalmomin bincike, tsallake tallace-tallace, da nemo shafukan hukuma da sauri.",
          quickCheck: [
            { objective: "O2", q: "Me sa kalmomi a cikin alamomin ambato yake yi a bincike?", options: ["Yana nuna tallace-tallace kawai", "Yana sa binciken ya yi jinkiri", "Yana nuna hotuna kawai", "Yana nemo wannan jimla daidai"], answer: 3, why: "Alamomin ambato suna gaya wa injin bincike ya nemo jimlar daidai." },
            { objective: "O2", q: "Kuna buƙatar sabunta katin shaidarku a jiharku. Wane bincike za ku rubuta?", options: ["Sunan jiharku, \"renew ID\" da site:.gov", "\"Na rasa katin shaidata bara kuma ban san abin da zan yi ba\"", "\"ID\"", "\"taimako\""], answer: 0, why: "'Yan kalmomin bincike masu sarari, sunan jiharku da site:.gov suna kai ku shafin hukuma." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gaskiya ne? Tabbatar da bayani",
          minutes: 5,
          goal: "Yanke ko za a iya amincewa da shafin intanet ko rubutu kafin ku yi aiki da shi.",
          text: [
            "Kowa yana iya sa komai a intanet. Kafin ku amince da shi, ku yi tambayoyi huɗu. Wa ya yi shi? Ku duba adireshin shafin da shafin \"About\" (Game da mu); shafukan gwamnatin Amurka suna ƙarewa da .gov. Yaushe aka rubuta shi? Ƙa'idoji da farashi suna canjawa. Me sauran majiyoyi amintattu suke cewa? Ku duba aƙalla ɗaya kuma. Yana ƙoƙarin gaggauta ku ko tsoratar da ku? Wannan alamar gargaɗi ce.",
            "Ku yi hankali da adireshin da aka kwaikwaya, kamar shafin da ya ƙara wasu kalmomi ko ya canja harafi ɗaya na ainihin suna. Ku yi hankali da hotuna da bidiyo da aka yi ko aka canja da AI; idan hoto yana da ban mamaki, ku nemo shi a labaran kafofin yaɗa labarai amintattu kafin ku raba shi.",
            "Bayanin ƙarya da ke yaɗuwa bisa kuskure ana kiransa misinformation (labarin ƙarya na kuskure). Bayanin ƙarya da ake yaɗawa da gangan ana kiransa disinformation (labarin ƙarya na ganganci). Kada ku raba komai sai kun tabbatar da shi."
          ],
          steps: ["Wa ya yi shi? Ku karanta adireshin da shafin About.", "Yaushe? Ku nemo kwanan watan.", "Wa kuma ya faɗi haka? Ku duba wata majiya amintacciya ɗaya kuma.", "Yana gaggauta ku ko tsoratar da ku? Ku dakata.", "Kada ku raba sai kun tabbatar."],
          words: [["Majiya (source)", "inda bayani ya fito."], ["Misinformation", "bayanin ƙarya da aka raba bisa kuskure."], ["Disinformation", "bayanin ƙarya da aka yaɗa da gangan."], ["Shafin kwaikwayo (look-alike)", "shafin bogi da aka yi adireshinsa ya yi kama da na gaske."]],
          slides: [
            { title: "Tambayoyi huɗu", bullets: ["Wa ya yi shi?", "Yaushe aka rubuta shi?", "Me sauran majiyoyi amintattu suke cewa?", "Yana gaggauta ni ko tsoratar da ni?"] },
            { title: "Ku yi hankali da na bogi", bullets: ["Adireshin shafi da aka kwaikwaya", "Hotuna da bidiyo da aka yi da AI", "Iƙirari masu ban mamaki ba tare da majiya ba"] },
            { title: "Kafin ku raba", bullets: ["Ku fara tabbatarwa", "Misinformation yana yaɗuwa bisa kuskure", "Disinformation yana yaɗuwa da gangan"] }
          ],
          tryIt: "Ku nemo wani rubutu ko labari game da tallafi, shirin aiki ko shawarar lafiya. Ku amsa tambayoyi huɗun game da shi, sannan ku yanke: ku amince da shi, ku ƙara bincike, ko ku yi watsi da shi.",
          youCanNow: "duba ko bayanin intanet amintacce ne kafin ku yi aiki da shi ko ku raba shi.",
          quickCheck: [
            { objective: "O3", q: "Mene ne misinformation?", options: ["Bayanin ƙarya da ke yaɗuwa bisa kuskure", "Labari na gaskiya daga shafin .gov", "Bayanin ƙarya da aka yaɗa da gangan", "Talla a saman sakamakon bincike"], answer: 0, why: "Misinformation bayanin ƙarya ne da aka yaɗa bisa kuskure; idan da gangan ne, disinformation ne." },
            { objective: "O3", q: "Wani saƙo yana da hanyar haɗi (link) zuwa shafin aiki da adireshinsa ya canja harafi ɗaya na sunan wani sanannen kamfani. Me za ku yi?", options: ["Ku saka bayananku da sauri", "Ku raba hanyar haɗin da abokai", "Ku ɗauka babu matsala domin yana kama da na gaske", "Ku ɗauke shi a matsayin wataƙila na bogi ne, ku je ainihin shafin ta wata hanya"], answer: 3, why: "Adireshin da aka kwaikwaya alamar gargaɗi ce ta shafin bogi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Nemo bayanin da za ku iya amincewa da shi",
        questions: [
          { objective: "O1", q: "A ina za ku iya amfani da kwamfuta da Wi-Fi kyauta yawanci?", options: ["Gidan mai", "Shagon sayar da motoci", "Ma'ajiyar kuɗi ta banki", "Ɗakin karatu na jama'a"], answer: 3, why: "Ɗakunan karatu na jama'a yawanci suna ba da kwamfutoci, Wi-Fi da taimako kyauta." },
          { objective: "O1", q: "Me Lifeline yake yi?", options: ["Yana ba da motoci kyauta", "Yana biyan kuɗin haya", "Yana rage kuɗin waya ko intanet na kowane wata ga waɗanda suka cancanta", "Yana sayar da wayoyi"], answer: 2, why: "Lifeline ragin kuɗi ne daga gwamnatin tarayya a kan waya ko intanet." },
          { objective: "O2", q: "Wane bincike ne ya fi yiwuwa ya nemo shafin da ya dace da sauri?", options: ["\"don Allah ku taimake ni\"", "\"Texas renew ID site:.gov\"", "\"abubuwa game da ID\"", "\"?\""], answer: 1, why: "Kalmomin bincike, sunan jiha da site:.gov suna taƙaita sakamakon." },
          { objective: "O2", q: "Sakamakon farko yana da alamar \"Sponsored\". Me hakan yake nufi?", options: ["Shafin hukuma ne na gwamnati", "Koyaushe kyauta ne", "Gwamnati ta duba shi", "Talla ce da aka biya kuma wataƙila ba ta hukuma ba ce"], answer: 3, why: "Sakamakon Sponsored tallace-tallace ne." },
          { objective: "O3", q: "Wani rubutu ya ce sabon tallafi zai ƙare yau da dare kuma dole ku danna yanzu. Me za ku fara yi?", options: ["Ku danna nan take", "Ku raba shi da kowa", "Ku tabbatar da shi a shafin hukuma na .gov", "Ku aika lambar katin shaidarku"], answer: 2, why: "Gaggautawa alamar gargaɗi ce; ku duba majiyar hukuma." }
        ]
      }
    },
    {
      name: "Babi na 2: Kammala ayyuka a intanet lafiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Cike fom a intanet",
          minutes: 5,
          goal: "Cike fom a intanet daidai kuma ku ajiye shaidar cewa kun tura shi.",
          text: [
            "Kafin ku fara, ku tara abin da fom ɗin zai tambaya: bayanan tuntuɓarku, ranaku, tarihin aikinku ko na wuraren zamanku, da duk takardar da za ku tura. Ku kasance da adireshin imel da kuke dubawa akai-akai, domin yawancin shafuka suna tura tabbacin karɓa can.",
            "Wuraren cikawa (fields) masu alamar tauraro (*) dole ne a cike su. A kwamfuta, ku yi amfani da maɓallin Tab don zuwa akwati na gaba. Ku karanta kowane jerin zaɓi (drop-down) da akwatin zaɓi. Dogayen fom da yawa suna bar ku ajiye ku dawo daga baya; ku rubuta inda za ku sake shiga.",
            "Kafin ku danna Submit (Tura), ku sake duba kowane shafi. Bayan kun tura, ku ajiye tabbacin karɓa: ku ɗauki hoton allo (screenshot), ku sauke PDF, ko ku rubuta lambar tabbaci. Ku rubuta lambobin katin shaida a shafin hukuma kaɗai, kada ku taɓa rubuta su a shafin da kuka isa ta talla ko ta saƙon tes."
          ],
          steps: ["Ku tabbata kuna a shafin hukuma.", "Ku fara tara bayanai da takardu.", "Ku cike wuraren da ake buƙata (*); ku yi amfani da Tab don motsawa.", "Ku ajiye ci gabanku a dogayen fom.", "Ku sake duba kowane shafi, sannan ku danna Submit.", "Ku ajiye lambar tabbaci ko hoton allo."],
          words: [["Wurin cikawa (field)", "akwati ɗaya a fom inda kuke rubuta amsa."], ["Dole (*)", "wurin cikawa da dole ku cike kafin ku iya turawa."], ["Lambar tabbaci (confirmation number)", "lambar da ke tabbatar cewa an karɓi fom ɗinku."], ["Jerin zaɓi (drop-down)", "akwatin da ke buɗe jeri don ku zaɓa daga ciki."]],
          slides: [
            { title: "Kafin ku fara", bullets: ["Ku kasance a shafin hukuma", "Ku tara bayanai da takardu", "Ku yi amfani da imel da kuke dubawa akai-akai"] },
            { title: "Yayin da kuke cikawa", bullets: ["* yana nufin dole ne", "Tab yana kai ku akwati na gaba", "Ku ajiye ci gabanku a dogayen fom"] },
            { title: "Ku gama da kyau", bullets: ["Ku sake duba kowane shafi", "Ku danna Submit", "Ku ajiye lambar tabbaci ko hoton allo"] }
          ],
          tryIt: "Ku nemo fom na gwaji ko na tuntuɓa a wani shafin hukuma, kamar fom ɗin \"Ask a librarian\" (Tambayi ma'aikacin ɗakin karatu) na ɗakin karatunku. Ku cike shi har zuwa maɓallin Submit ba tare da turawa ba, ku nuna wuraren da dole a cike.",
          youCanNow: "cike fom a intanet daidai da ajiye shaidar cewa kun tura shi.",
          quickCheck: [
            { objective: "O4", q: "Me yasa za ku kasance da adireshin imel da kuke dubawa akai-akai kafin ku cike fom?", options: ["Fom ba zai buɗe ba sai da shi", "Yana gajarta fom ɗin", "Yawancin shafuka suna tura tabbacin karɓa zuwa imel ɗinku", "Yana maye gurbin lambar katin shaidarku"], answer: 2, why: "Yawancin shafuka suna tura tabbacin karɓa da sababbin labarai zuwa imel ɗinku." },
            { objective: "O4", q: "Kun isa shafin ƙarshe na takardar neman tallafi. Me za ku yi kafin ku danna Submit?", options: ["Ku rufe burauzar", "Ku sake duba kowane shafi", "Ku tsallake wuraren da dole a cike", "Ku fara sabuwar takardar nema"], answer: 1, why: "Sake duba kowane shafi yana kama kurakurai kafin ku tura." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ɗaukar hoton takardu (scan) da tura su",
          minutes: 5,
          goal: "Ɗaukar hoton takarda (scan) da waya ku ajiye ta a matsayin PDF da suna mai sarari.",
          text: [
            "Fom da yawa suna neman ku tura takardu: takardar bayanin aiki (résumé), wasiƙa, shaidar adireshi. Kuna iya yin scan da waya. A iPhone, manhajar Notes da manhajar Files suna da zaɓin scan. A Android, manhajar Google Drive tana da maɓallin Scan. Ku nemi alamar kyamara ko ta scan.",
            "Don scan mai kyau: ku shimfiɗa takardar a kan wuri mai duhu, ku yi amfani da haske mai kyau, ku riƙe wayar a miƙe a samanta, ku bar manhajar ta yanke gefuna. Ku ajiye ta a matsayin PDF.",
            "Ku ba fayil ɗin suna mai sarari, kamar \"Jordan-Lee-Resume-2026.pdf\", ba \"IMG_2034\" ba. Ku tura katin shaida ko takardu na sirri a shafukan hukuma kaɗai, kuma ku goge kwafi daga kwamfutocin da ake rabawa ko na ɗakin karatu idan kun gama."
          ],
          steps: ["Ku buɗe kayan scan: Notes ko Files (iPhone), Google Drive (Android).", "Ku shimfiɗa takardar a haske mai kyau.", "Ku riƙe wayar a miƙe a samanta ku yi scan.", "Ku ajiye ta a matsayin PDF da sunan fayil mai sarari.", "Ku tura ta a shafin hukuma kaɗai; ku goge kwafi daga kwamfutocin da ake rabawa."],
          words: [["Scan", "yin kwafi mai sarari ta na'ura na takarda."], ["Turawa (upload)", "aika fayil daga na'urarku zuwa wani shafin intanet."], ["Sunan fayil", "sunan da aka ajiye fayil da shi, wanda ke taimaka muku da wasu nemo shi."]],
          slides: [
            { title: "Scan da wayarku", bullets: ["iPhone: manhajar Notes ko Files", "Android: maɓallin Scan na Google Drive"] },
            { title: "Scan mai sarari", bullets: ["Takarda a shimfiɗe, a kan wuri mai duhu", "Haske mai kyau, waya a miƙe a sama", "Ajiye a matsayin PDF"] },
            { title: "Ku ba shi suna, ku kare shi", bullets: ["\"Jordan-Lee-Resume-2026.pdf\", ba \"IMG_2034\" ba", "Ku tura takardun sirri a shafukan hukuma kaɗai", "Ku goge kwafi daga kwamfutocin da ake rabawa"] }
          ],
          tryIt: "Ku yi scan na shafin gwaji ɗaya (wasiƙar da kuka rubuta, ba katin shaida na gaske ba) da wayarku. Ku ajiye shi a matsayin PDF ku ba shi sunan fayil mai sarari.",
          youCanNow: "ɗaukar hoton takarda (scan) da waya da ajiye ta a matsayin PDF mai suna mai sarari, a shirye don turawa.",
          quickCheck: [
            { objective: "O5", q: "Wane sunan fayil ne ya fi kyau ga wasiƙar da za a tura?", options: ["IMG_2034", "scan", "document1", "Jordan-Lee-Landlord-Letter-2026.pdf"], answer: 3, why: "Suna mai sarari yana faɗin ta waye takardar da mece ce." },
            { objective: "O5", q: "Kun yi scan na takarda a kwamfutar ɗakin karatu kuma kun tura ta. Me za ku yi a gaba?", options: ["Ku bar ta a babban fayil ɗin Downloads", "Ku goge kwafin daga kwamfutar", "Ku sake mata suna IMG_1", "Ku tura ta ta imel ga duk wanda kuka sani"], answer: 1, why: "Ku goge kwafin takardun sirri daga kwamfutocin da ake rabawa ko na ɗakin karatu idan kun gama." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sawunku a intanet da sirrinku",
          minutes: 5,
          goal: "Duba da ƙarfafa abin da wasu za su iya gani game da ku a intanet.",
          text: [
            "Sawunku a intanet (digital footprint) shi ne duk abin da ke game da ku a intanet: rubuce-rubuce, hotuna, sharhi, da abin da wasu suka sa game da ku. Masu ɗaukar aiki, masu gidajen haya da makarantu sukan bincika sunan mutum. Rubutu yana iya zama a intanet ko da kun goge shi, domin wasu suna iya ɗaukar hoton allo ko su raba shi.",
            "Ku bincika sunanku a injin bincike ku ga abin da ya fito. A kowace manhajar sada zumunta, ku buɗe saituna (settings) ku nemi Privacy (Sirri). Ku zaɓi wanda zai iya ganin rubuce-rubucenku, wanda zai iya ambaton ku (tag), da ko baƙi za su iya tura muku saƙo.",
            "Ku yi tunani kafin ku sa rubutu: za ku ji daɗi idan shugaban aikinku na gaba, iyalinku, ko jami'in parole ko probation ɗinku ya gan shi? Kada ku sa adireshinku, shirye-shiryen tafiyarku, takardun shaida, ko duk wani abu da za a iya amfani da shi don yin kamar ku ne."
          ],
          steps: ["Ku bincika cikakken sunanku a cikin alamomin ambato.", "Ku buɗe saitunan Privacy na kowace manhajar sada zumunta.", "Ku iyakance wanda zai iya ganin rubuce-rubuce, ambaton ku da tura muku saƙo.", "Ku cire ko ku ɓoye rubuce-rubucen da ba za ku so mai ɗaukar aiki ya gani ba.", "Ku yi tunani kafin kowane sabon rubutu."],
          words: [["Sawun intanet (digital footprint)", "duk abin da ke game da ku a intanet, wanda ku ko wasu kuka sa."], ["Saitunan sirri (privacy settings)", "zaɓuɓɓuka a manhaja game da wanda zai iya ganin bayananku."], ["Tag (ambato)", "haɗa sunan mutum ko asusunsa da wani rubutu ko hoto."]],
          slides: [
            { title: "Sawunku a intanet", bullets: ["Rubuce-rubuce, hotuna, sharhi", "Abin da wasu suka sa game da ku", "Masu ɗaukar aiki da masu gidajen haya suna dubawa"] },
            { title: "Ku duba kanku", bullets: ["Ku bincika sunanku a cikin alamomin ambato", "Ku buɗe Privacy a kowace manhaja", "Ku iyakance masu gani, masu tag da masu tura saƙo"] },
            { title: "Ku yi tunani kafin ku sa rubutu", bullets: ["Shugaban aiki na gaba zai ji daɗin ganin sa?", "Babu adireshi, shirin tafiya ko hoton katin shaida"] }
          ],
          tryIt: "Aikin ƙarshe: ku nemo shafin hukuma na hidimar da kuke buƙata ku tabbatar cewa na hukuma ne, ku nemo fom ɗinsa ko matakansa, ku yi scan na shafin gwaji zuwa PDF mai suna mai sarari, sannan ku bincika sunanku ku ƙarfafa saitin sirri ɗaya.",
          youCanNow: "kammala aiki na gaske a intanet yayin da kuke kiyaye bayananku na sirri da mutuncinku.",
          quickCheck: [
            { objective: "O6", q: "Me yasa rubutu zai iya zama a intanet bayan kun goge shi?", options: ["Wasu wataƙila sun ɗauki hoton allo ko sun raba shi", "Gogewa ba ta aiki a kowace manhaja", "Ɗakin karatu yana ajiye kwafi", "Injunan bincike suna buga shi a takarda"], answer: 0, why: "Wasu mutane suna iya ɗaukar hoton allo ko raba rubutu kafin ku goge shi." },
            { objective: "O6", q: "Baƙi suna ta tura muku saƙo a wata manhajar sada zumunta. Me za ku yi?", options: ["Ku sa adireshinku don su san ku", "Ku goge asusun imel ɗinku", "Ku buɗe saitunan Privacy na manhajar ku iyakance wanda zai iya tura muku saƙo", "Ku amsa wa dukansu"], answer: 2, why: "Saitunan sirri suna bar ku zaɓar wanda zai iya tura muku saƙo, ganin rubuce-rubucenku da yin tag ɗinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kammala ayyuka a intanet lafiya",
        questions: [
          { objective: "O4", q: "Me tauraro (*) kusa da wurin cikawa a fom yake nufi yawanci?", options: ["Ba dole ba ne", "Dole ne a cike shi", "Kyauta ce", "Talla ce"], answer: 1, why: "Tauraro yana nuna wurin cikawa da dole ne." },
          { objective: "O4", q: "Bayan kun tura takardar nema a intanet, ya kamata ku:", options: ["Rufe shafin nan take", "Ajiye lambar tabbaci ko hoton allo", "Sake tura ta sau biyar", "Goge imel ɗinku"], answer: 1, why: "Tabbacin karɓa yana nuna cewa kun tura ta." },
          { objective: "O5", q: "Wane sunan fayil ne ya fi kyau don turawa?", options: ["IMG_2034.jpg", "scan.pdf", "Jordan-Lee-Resume-2026.pdf", "asdf.pdf"], answer: 2, why: "Suna mai sarari yana taimaka muku da mai karantawa nemo shi." },
          { objective: "O5", q: "Ta yaya za ku yi scan na shafi da wayar Android?", options: ["Ku kunna yanayin jirgin sama", "Ku kira ɗakin karatu", "Ku yi amfani da na'urar lissafi", "Maɓallin Scan na Google Drive"], answer: 3, why: "Google Drive a Android yana da maɓallin Scan." },
          { objective: "O6", q: "Wani aboki ya yi tag ɗinku a hoto mai kunya. Me zai taimaka?", options: ["Ku yi watsi da saitunan sirri", "Ku sa adireshinku", "Ku goge imel ɗinku", "Ku yi amfani da saitunan sirri don sarrafa wanda zai iya yin tag ɗinku"], answer: 3, why: "Saitunan sirri suna sarrafa wanda zai iya yin tag ɗinku." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Ilimin Fasahar Zamani",
    questions: [
      { objective: "O3", q: "Ilimin fasahar zamani yana nufin:", options: ["Rubutu da sauri sosai", "Mallakar sabuwar waya", "Iya nemo bayani, auna shi da amfani da shi, da hidimomi a intanet", "Yin wasanni kawai"], answer: 2, why: "Yana nufin amfani da bayani da hidimomi da kyau kuma lafiya." },
      { objective: "O1", q: "Wuri mai kyau na shiga intanet kyauta da neman taimako shi ne:", options: ["Hanyar haɗi a saƙon tes", "Wi-Fi na baƙo", "Tallar da ke tasowa (pop-up)", "Ɗakin karatu na jama'a"], answer: 3, why: "Ɗakunan karatu suna ba da kwamfutoci da taimako kyauta." },
      { objective: "O1", q: "A ina za ku duba bayanan Lifeline na yanzu?", options: ["Kowace talla", "Sharhi a kafar sada zumunta", "lifelinesupport.org", "Saƙon tes daga baƙo"], answer: 2, why: "Lifeline Support shi ne shafin hukuma na shirin." },
      { objective: "O1", q: "A kwamfutar jama'a, kada ku:", options: ["Karanta labarai", "Yi harkokin banki", "Nemo ayyukan da ake ɗauka", "Duba lokutan buɗewar ɗakin karatu"], answer: 1, why: "Ku guji harkokin banki a kwamfutocin da ake rabawa." },
      { objective: "O2", q: "Wane bincike ne ya fi kyau?", options: ["\"Ina buƙatar taimako da katin shaidata da na rasa\"", "\"Ohio BMV replace ID\"", "\"ID\"", "\"taimako\""], answer: 1, why: "Kalmomin bincike tare da sunan jiha suna nemo shafin da sauri." },
      { objective: "O2", q: "Ƙara site:.gov a bincike:", options: ["Yana cin kuɗi", "Yana nuna tallace-tallace kawai", "Yana goge tarihin bincikenku", "Yana nuna shafukan gwamnatin Amurka kawai"], answer: 3, why: "Yana iyakance sakamako zuwa shafukan .gov." },
      { objective: "O2", q: "Me yasa za ku tsallake tallace-tallace a saman sakamakon bincike?", options: ["Koyaushe su ne shafin hukuma", "Suna iya zama na bogi ko su karɓi kuɗi don hidimomin kyauta", "Suna da jinkiri", "Danna su laifi ne a doka"], answer: 1, why: "Tallace-tallace an biya kuɗi ne, kuma ba koyaushe na hukuma ba ne." },
      { objective: "O3", q: "Wace tambaya ce ke taimaka muku auna shafin intanet?", options: ["Rubutun yana da girma?", "Wane launi ne yake da shi?", "Wa ya yi shi?", "Hotuna nawa ne?"], answer: 2, why: "Sanin majiyar yana gaya muku ko za ku iya amincewa da shi." },
      { objective: "O3", q: "Adireshin wani shafi ya canja harafi ɗaya na sunan ainihin kamfani. Wataƙila shi:", options: ["Shafin hukuma ne", "Shafin bogi ne na kwaikwayo", "Shafin gwamnati ne", "Ɗakin karatu ne"], answer: 1, why: "Adireshin kwaikwayo dabara ce da aka saba gani." },
      { objective: "O3", q: "Bayanin ƙarya da aka yaɗa da gangan ana kiransa:", options: ["Sawu", "Misinformation", "Tabbacin karɓa", "Disinformation"], answer: 3, why: "Disinformation da gangan ne; misinformation bisa kuskure ne." },
      { objective: "O3", q: "Wani hoto mai ban mamaki yana yawo. Kafin ku raba shi, ya kamata ku:", options: ["Raba shi da sauri", "Duba kafofin yaɗa labarai amintattu", "Ƙara adireshinku", "Buga shi a takarda"], answer: 1, why: "Yana iya zama na bogi ko an yi shi da AI." },
      { objective: "O4", q: "Kafin ku fara dogon fom a intanet, ya kamata ku:", options: ["Tara bayanai da takardun da yake buƙata", "Rufe dukkan tagogi", "Kashe intanet", "Yi hasashen kowace amsa"], answer: 0, why: "Shiri yana hana kurakurai da ƙarewar lokaci." },
      { objective: "O4", q: "A kwamfuta, wane maɓalli ne ke kai ku akwati na gaba a fom?", options: ["Tab", "Escape", "Delete", "Print Screen"], answer: 0, why: "Tab yana kai ku wurin cikawa na gaba." },
      { objective: "O4", q: "Lambar tabbaci (confirmation number) ita ce:", options: ["Lambar da ke tabbatar cewa an karɓi fom ɗinku", "Kalmar sirrinku", "Lambar katin shaidarku", "Talla"], answer: 0, why: "Tana tabbatar cewa an tura fom ɗin." },
      { objective: "O4", q: "A ina ne lafiya ku rubuta lambar katin shaidarku?", options: ["A shafin hukuma kaɗai", "A kowane shafi daga talla", "A amsar saƙon tes", "A rubutu a kafar sada zumunta"], answer: 0, why: "Lambobin sirri suna zuwa shafukan hukuma kaɗai." },
      { objective: "O5", q: "A iPhone, waɗanne manhajoji ne za su iya yin scan na takarda?", options: ["Notes ko Files", "Calculator", "Clock", "Weather"], answer: 0, why: "Notes da Files suna da zaɓin scan." },
      { objective: "O5", q: "Don scan mai sarari ya kamata ku:", options: ["Shimfiɗa takardar a haske mai kyau", "Murƙushe takardar", "Yi amfani da ɗaki mai duhu", "Girgiza wayar"], answer: 0, why: "Takarda a shimfiɗe da haske mai kyau suna ba da scan da ake iya karantawa." },
      { objective: "O6", q: "Sawunku a intanet shi ne:", options: ["Duk abin da ke game da ku a intanet", "Girman takalminku", "Batirin wayarku", "Wani nau'in kalmar sirri"], answer: 0, why: "Ya haɗa da rubuce-rubucenku da abin da wasu suka sa game da ku." },
      { objective: "O6", q: "Me yasa za ku bincika sunanku?", options: ["Don ganin abin da masu ɗaukar aiki ko masu gidajen haya za su iya samu", "Don samun kuɗi kyauta", "Don goge intanet", "Don canja kalmar sirrinku"], answer: 0, why: "Yana nuna mutuncinku a intanet." },
      { objective: "O6", q: "Wanne ne lafiya a sa a fili ga kowa?", options: ["Hoton katin shaidarku", "Adireshin gidanku", "Cewa kun kammala wani kwas na horo", "Ranakun tafiyarku yayin da ba ku nan"], answer: 2, why: "Labari mai daɗi babu laifi; katin shaida, adireshi da shirin tafiya suna jefa ku cikin haɗari." }
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
      7,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Nemo shafin hukuma",
        objective: "O2",
        notYet: "Shafin da aka samo talla ne, na kwaikwayo ne, ko ba na hidimar da ta dace ba ne.",
        meets: "An samo shafin hukuma na hidimar ta hanyar bincike, an tsallake tallace-tallace.",
        exceeds: "An kuma samo ainihin shafin da ke da fom ko matakai cikin 'yan dannawa."
      },
      {
        name: "Tabbatar da shafin",
        objective: "O3",
        notYet: "Ba a ba da dalilin amincewa da shafin ba.",
        meets: "An nuna yadda aka tabbatar da shafin, kamar adireshin .gov da shafin About.",
        exceeds: "An kuma duba wata majiya amintacciya ta biyu ko ranar da aka sabunta shafin."
      },
      {
        name: "Scan da sunan fayil",
        objective: "O5",
        notYet: "Scan ɗin ya dushe ko an yanke wani sashe, ko sunan fayil ɗin kamar IMG_2034 ne.",
        meets: "Scan na PDF mai sarari na takardar gwaji, da sunan fayil mai sarari.",
        exceeds: "An yanke gefunan scan ɗin da kyau, kuma an goge kwafi daga duk kwamfutar da ake rabawa."
      },
      {
        name: "Kiyaye bayanan sirri",
        objective: "O6",
        notYet: "An yi scan na katin shaida na gaske, ko layuka ukun ba su faɗi komai game da sirri ba.",
        meets: "Layuka uku sun bayyana yadda aka tabbatar da shafin da yadda aka kiyaye bayanan sirri.",
        exceeds: "An kuma ambaci saitin sirri ɗaya da aka duba ko aka canja a manhajar sada zumunta."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na aikin ƙarshe",
      "Masu koyo da suka ce sun kammala takardar nema ta gaske a intanet, kamar ta aiki, katin shaida ko tallafi, cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka ce sun guje wa shafin bogi, zamba ko rubutun ƙarya domin sun tabbatar da shi",
      "Masu koyo da suka ci gaba zuwa wani kwas na gaba, kamar \"Imel da Sadarwa ta Intanet\" ko kwas na neman aiki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai kyamara, ko kwamfutar ɗakin karatu ko ta cibiyar neman aiki mai intanet",
      "Adireshin imel kyauta da mai koyo yake dubawa akai-akai",
      "Takardar gwaji don scan, kamar wasiƙa ko shafin da mai koyo ya rubuta (ba katin shaida na gaske ba)",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Masu koyo da yawa ba su da na'ura; ku yi kwas ɗin a ɗakin karatu ko ɗakin kwamfuta, ko ku haɗa masu koyo bibbiyu ta yadda kowace ƙungiya tana da waya ɗaya.",
      "Ku yi amfani da takardun gwaji kawai don scan da turawa a aji, kuma ku tunatar da masu koyo su goge kwafi daga kwamfutocin da ake rabawa.",
      "Ga masu koyo da ke kan parole ko probation, ku tunatar da su su bi duk wata ƙa'idar intanet ko ta kafofin sada zumunta da ke cikin sharuɗɗansu kafin su canja asusu.",
      "Ku kawo hotunan allo na ainihin shafin bincike mai tallace-tallace don masu koyo su yi atisayen bambance tallace-tallace da sakamako na gaske.",
      "Ku nuna wa masu koyo inda kwamfutoci da Wi-Fi kyauta mafi kusa suke, da yadda ake neman taimako daga ma'aikatan ɗakin karatu."
    ]
  }
};
