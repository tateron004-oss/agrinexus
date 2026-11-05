"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-skilled-trades-logistics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-skilled-trades-logistics-ha",
  lang: "ha",
  translationOf: "ai-skilled-trades-logistics",
  category: "Re-Entry",
  name: "AI don Sana'o'in Hannu da Jigilar Kaya",
  skills: "Bayanin littafin jagora da bayanan fasaha da AI, Rubuta ƙiyasin kuɗin aiki, Yin jerin binciken tsaro, Rubuta bayanan aiki da hotuna da rubutu, Tsara hanya da kayan lodi, Neman koyon sana'a (apprenticeship) da ayyukan sana'a",
  outcome: "amfani da mataimakin AI kyauta a wayarku don fahimtar littafin jagora, rubuta ƙiyasin kuɗin aiki a sarari, yin jerin binciken tsaron aiki da kuke tabbatarwa da dokokin hukuma, ajiye bayanan aiki, tsara hanyar kai kaya ko ta hidima, da neman koyon sana'a da ayyukan sana'a.",
  about: [
    "Ana neman masu sana'o'in hannu (wutar lantarki, famfo, na'urar sanyaya iska wato HVAC, kafinta, walda, gyaran mota) da ma'aikatan jigilar kaya (rumbun ajiya, forklift, kai kaya, tukin babbar mota, aika kaya) sosai. Hanyoyi da yawa suna farawa da koyon sana'a (apprenticeship) ko ɗan horo maimakon digirin jami'a. Masu ɗaukar aiki da yawa a waɗannan fannoni suna ɗaukar mutanen da ke da tarihin laifi.",
    "AI ba ya buga guduma ko tuƙa babbar mota. Amma a waya yana iya bayanin littafin jagora da kalmomi masu sauƙi, rubuta ƙiyasi da bayanan aiki, rubuta daftarin jerin binciken tsaro, da taimakawa wajen tsara hanya. Wannan yana ajiye lokaci kuma yana sa ku yi kama da ƙwararru.",
    "Wannan kwas ɗin na mutanen da ke dawowa gida ne, ma'aikata a shirye-shiryen horar da ma'aikata, da duk wanda ke fara aikin sana'a ko jigilar kaya. Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Dokokin tsaro koyaushe daga mai ɗaukar ku aiki, kamfanin da ya ƙera kayan, da OSHA suke zuwa, ba daga AI ba."
  ],
  finalTask: "Don aiki ɗaya na gaske ko na gwaji a sana'a ko jigilar kaya, ku haɗa fakitin aiki da taimakon AI: taƙaitaccen bayanin wani sashe na littafin jagora ko bayanan fasaha da kalmomi masu sauƙi, ƙiyasi ko takardar umarnin aiki (work order), jerin binciken tsaron aiki da aka tabbatar da majiyar hukuma, bayanan aiki tare da bayanin hotunan kafin da bayan aiki, da tsarin hanya ko na lodi. Sannan ku nemi koyon sana'a ɗaya ko aikin sana'a ɗaya da za ku iya nema.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke dawowa gida daga gidan yari, ma'aikata a shirye-shiryen horar da ma'aikata, da duk wanda ke fara sana'ar hannu (wutar lantarki, famfo, HVAC, kafinta, walda, gyaran mota) ko aikin jigilar kaya (rumbun ajiya, forklift, kai kaya, tukin babbar mota).",
    startingPoint: "Suna iya amfani da waya don kira, saƙon tes da hotuna, kuma da yawa suna da ƙwarewar aikin hannu. Kaɗan ne suka taɓa amfani da mataimakin AI don karanta littafin jagora, rubuta ƙiyasi ko tsara hanya.",
    gap: "Ana sa ran ma'aikatan sana'a da jigilar kaya su karanta littattafan jagora na fasaha, su rubuta ƙiyasi da bayanan aiki, su bi dokokin tsaro, kuma su tsara hanya. Amfani da AI a waya, da tabbatar da shi da majiyoyin hukuma, yana ajiye lokaci, yana sa a yi kama da ƙwararru, kuma yana taimaka wa masu koyo shiga koyon sana'a da ayyukan sana'a.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: sau da yawa waya kaɗai, ana amfani da ita a wurin aiki ko a cikin mota",
      "Dokokin tsaro, ƙarfin matsewa (torque), ƙarfin wuta (voltage) da iyakar nauyi daga littafin jagora, mai ɗaukar aiki da OSHA suke zuwa, ba daga AI ba",
      "Sirri: babu takardun sirri ko bayanan abokin ciniki a hotuna ko prompt na AI",
      "Lokaci: darussa na kusan minti biyar da suka dace da lokutan aiki"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da kayan AI ba za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wani sashe na littafin jagora ko takardar bayanan fasaha", action: "amfani da AI don bayyana shi da kalmomi masu sauƙi da duba kowace lamba da littafin jagora", standard: "kowace lamba tana daidai da majiyar" },
    { id: "O2", condition: "Don aiki na gaske ko na gwaji", action: "rubuta ƙiyasi ko takardar umarnin aiki da ke da kuɗin aiki, kayan aiki, jimla, abin da aka haɗa da ranar ƙarewa", standard: "an duba lissafin da hannu kuma kowane sashe da ake buƙata yana nan" },
    { id: "O3", condition: "Don aiki ɗaya na gaske", action: "rubuta daftarin jerin binciken tsaron aiki da AI da duba shi da littafin jagora ko majiyar tsaro ta hukuma", standard: "kuna ƙara duk abin da AI ya manta kafin a fara aiki" },
    { id: "O4", condition: "Bayan an gama aiki", action: "rubuta bayanan aiki da ke da rana, wuri, aikin da aka yi, kayan aiki, matsaloli, matakai na gaba da bayanin hotuna", standard: "kowane sashe yana nan kuma babu bayanan sirri na abokin ciniki" },
    { id: "O5", condition: "Idan aka ba ku wurare da yawa ko kayayyaki", action: "tsara hanya da jerin lodi ko na kayan ajiya mai sauƙi, sannan duba hanyar a manhajar taswira", standard: "an saka kaya a juye na jerin wuraren tsayawa kuma an duba lokutan tuƙi" },
    { id: "O6", condition: "Ta amfani da Apprenticeship.gov ko wani shiri na yankinku", action: "nemo koyon sana'a ɗaya ko aikin sana'a ɗaya da za ku iya nema", standard: "kuma ku rubuta abubuwan da ake buƙata da yadda ake nema" }
  ],
  chapters: [
    {
      name: "Babi na 1: AI a wurin aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fahimtar littafin jagora da bayanan fasaha da AI",
          minutes: 5,
          goal: "Yi amfani da AI don bayyana littafin jagora ko bayanan fasaha da kalmomi masu sauƙi, sannan ku duba shi da majiyar.",
          text: [
            "Littattafan jagora (manuals), takardun bayanan fasaha (spec sheets) da jagororin girkawa suna cike da kalmomi masu wuya. AI zai iya bayyana su. Ku kwafa ko ku rubuta wani sashe, ko ku ɗauki hoto idan manhajar AI ɗinku tana karanta hotuna, sannan ku tambaya: \"Ka bayyana wannan da kalmomi masu sauƙi. Mene ne matakan, waɗanne kayan aiki nake buƙata, kuma mene ne gargaɗin?\"",
            "Ku yi tambayoyin biyo baya: \"Mene ne ma'anar 'torque to 25 ft-lbs'?\" ko \"Mene ne bambanci tsakanin GFCI da soket na yau da kullum?\" AI malami ne mai kyau don kalmomi da ra'ayoyi.",
            "Amma littafin jagora ne ke da ƙarshen magana. Lambobi kamar ƙarfin matsewa (torque), ƙarfin wuta (voltage), matsi, tazara da iyakar nauyi dole su fito daga littafin jagorar kamfanin da ya ƙera, dokar gini (code) da yankinku ke amfani da ita, ko mai kula da ku (supervisor). Idan AI da littafin jagora ba su yi daidai ba, ku bi littafin jagora ku tambayi mai kula da ku."
          ],
          steps: ["Ku kwafa, ku rubuta ko ku ɗauki hoton sashen littafin jagora.", "Ku nemi AI ya bayyana shi da kalmomi masu sauƙi: matakai, kayan aiki, gargaɗi.", "Ku yi tambayoyin biyo baya game da kalmomin da ba ku sani ba.", "Ku duba kowace lamba da littafin jagora.", "Idan ba su yi daidai ba, ku bi littafin jagora ku tambayi mai kula da ku."],
          words: [["Spec sheet (takardar bayanan fasaha)", "takardar da ke lissafa ainihin awo da abubuwan da kaya ke buƙata."], ["Torque (ƙarfin matsewa)", "yadda aka murɗa wani abu da ƙarfi, kamar ƙusa mai hula (bolt)."], ["Code (dokar gini)", "dokokin hukuma na gini ko wutar lantarki da yanki ke buƙata."]],
          slides: [
            { title: "AI a matsayin malamin littafin jagora", bullets: ["Ku liƙa, ku rubuta ko ku ɗauki hoton sashe", "Ku nemi matakai, kayan aiki da gargaɗi", "Ku tambayi ma'anar kalmomi"] },
            { title: "Littafin jagora ne ke da ƙarshen magana", bullets: ["Torque, voltage, matsi, iyakar nauyi", "Daga littafin jagora, dokar gini ko mai kula da ku suke zuwa"] },
            { title: "Idan ba su yi daidai ba", bullets: ["Ku bi littafin jagora", "Ku tambayi mai kula da ku"] }
          ],
          tryIt: "Ku nemo littafin jagora na wani abu da kuke da shi (kayan aiki, na'urar gida ko mota) a intanet ko a cikin aljihun tebur. Ku nemi AI ya bayyana sashe ɗaya da kalmomi masu sauƙi, sannan ku duba kowace lamba da littafin jagora.",
          youCanNow: "amfani da AI don fahimtar littattafan jagora da bayanan fasaha, yayin da kuke amincewa da lambobin hukuma.",
          quickCheck: [
            { objective: "O1", q: "Mene ne spec sheet (takardar bayanan fasaha)?", options: ["Takardar tallace-tallace mai farashi", "Jerin ainihin awo da abubuwan da kaya ke buƙata", "Fastar tsaro a ɗakin hutu", "Ra'ayin abokin ciniki game da kaya"], answer: 1, why: "Spec sheet tana ba da ainihin awo da abubuwan da dole ku cika." },
            { objective: "O1", q: "AI ya bayyana sashen littafin jagora amma ya ba da voltage da ya bambanta da na littafin. Me za ku yi?", options: ["Ku yi amfani da voltage na littafin jagora ku tambayi mai kula da ku", "Ku yi amfani da lambar AI domin ta fi sabo", "Ku ɗauki matsakaicin lambobin biyu", "Ku tsallake matakin"], answer: 0, why: "Lambobi kamar voltage daga littafin jagora suke zuwa, ba daga AI ba; ku tambayi mai kula da ku idan kuna shakka." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta ƙiyasi ko takardar umarnin aiki a sarari",
          minutes: 5,
          goal: "Rubuta ƙiyasi ko takardar umarnin aiki ta ƙwararru da taimakon AI.",
          text: [
            "Abokan ciniki da masu kula suna amincewa da ma'aikatan da ke rubuta abubuwa. Ƙiyasi (estimate) yana faɗa wa abokin ciniki abin da za ku yi da kuɗin da zai ci kafin ku fara. Takardar umarnin aiki (work order) tana rubuta aiki: abin da aka nema, abin da aka yi, kayan da aka yi amfani da su da lokacin da aka ɗauka.",
            "Ku faɗa wa AI bayanan gaskiya, ku bar shi ya tsara: \"Ka rubuta ƙiyasi mai sauƙi don canja famfon ban-ɗaki. Kuɗin aiki awa 2 a $60 a kowace awa. Kayan aiki: famfo $85, bututun ruwa $15. Yana aiki kwana 30. Dole abokin ciniki ya zaɓi nau'in famfon.\" Ku duba lissafin da kowane bayani.",
            "Ku yi gaskiya: ku lissafa abin da aka haɗa da wanda ba a haɗa ba, kuma ku faɗi cewa farashin zai iya canjawa idan kun sami matsalolin da ke ɓoye, amma sai abokin ciniki ya amince tukuna. Ku yi amfani da samfuri (template) kyauta a Google Docs ko Word, ku ajiye kwafin kowanne."
          ],
          steps: ["Ku rubuta aikin, awannin aiki da kuɗin kowace awa, da kayan aiki da farashinsu.", "Ku nemi AI ya tsara ƙiyasi ko takardar umarnin aiki mai sauƙi.", "Ku duba lissafin da bayanan.", "Ku ƙara abin da aka haɗa, wanda ba a haɗa ba, da lokacin da zai ƙare.", "Ku ajiye kwafi."],
          words: [["Ƙiyasi (estimate)", "farashin aiki a rubuce kafin a fara shi."], ["Takardar umarnin aiki (work order)", "rubutaccen bayanin aiki: abin da aka nema, abin da aka yi, kayan aiki da lokaci."], ["Kuɗin aiki (labor)", "kuɗin lokacin ma'aikaci."]],
          slides: [
            { title: "Ku rubuta shi", bullets: ["Ƙiyasi: kafin aiki", "Takardar umarnin aiki: bayanin aikin"] },
            { title: "Ku bar AI ya tsara shi", bullets: ["Ku ba shi kuɗin aiki, kuɗin awa da kayan aiki", "Ku duba lissafin"] },
            { title: "Ku yi gaskiya", bullets: ["Abin da aka haɗa da wanda ba a haɗa ba", "Canje-canje sai abokin ciniki ya amince", "Ku ajiye kowane kwafi"] }
          ],
          tryIt: "Ku rubuta ƙiyasi don aiki na gaske ko na gwaji da taimakon AI: kuɗin aiki, kayan aiki, jimla, abin da aka haɗa da ranar ƙarewa. Ku duba lissafin da hannu.",
          youCanNow: "rubuta ƙiyasi ko takardar umarnin aiki a sarari kuma da gaskiya, da taimakon AI.",
          quickCheck: [
            { objective: "O2", q: "Mene ne ma'anar \"kayan aiki\" (parts) a ƙiyasi?", options: ["Lokacin ma'aikaci", "Harajin aikin", "Kayan da ake buƙata don aikin", "Lokacin tafiya"], answer: 2, why: "Kayan aiki su ne abubuwan da ake amfani da su; kuɗin aiki (labor) shi ne lokacin ma'aikaci." },
            { objective: "O2", q: "AI ya ce jimlar ƙiyasinku $310 ce, amma lissafinku na hannu ya ce $280. Me za ku yi?", options: ["Ku aika $310 domin AI ya fi iya lissafi", "Ku aika $280 ba tare da dubawa ba", "Ku aika lambobin biyu ga abokin ciniki", "Ku sake duba kowane layi ku aika jimlar da ta yi daidai"], answer: 3, why: "Koyaushe ku duba lissafin layi-layi kafin ku aika ƙiyasi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin jerin binciken tsaron aiki",
          minutes: 6,
          goal: "Rubuta daftarin jerin binciken tsaron aiki da AI, sannan ku duba shi da majiyoyin tsaro na hukuma.",
          text: [
            "Ayyukan sana'a da na rumbun ajiya da yawa suna amfani da nazarin tsaron aiki (ko nazarin haɗari): ana lissafa matakan aiki, haɗarin da ke cikin kowane mataki, da yadda za a hana su. Misalan haɗari: faɗuwa, wutar lantarki ta kama mutum, raunin ɗaukar kaya, injinan da ke motsi kamar forklift, sinadarai da zafi.",
            "AI zai iya rubuta daftarinsa: \"Ka yi jerin binciken tsaron aiki don canja fitilar silin: matakai, haɗari da yadda za a hana su, har da kayan kariya na jiki.\" Sau da yawa zai haɗa da abubuwa masu kyau kamar kashe maɓallin wuta (breaker) da gwada cewa wuta ta mutu.",
            "Amma AI ba hukumar tsaro ba ne. Ku duba jerin da mai kula da ku, umarnin kamfanin da ya ƙera kayan, da majiyoyin hukuma kamar OSHA (osha.gov), hukumar tsaron wurin aiki ta Amurka. Azuzuwan OSHA Outreach na awa 10 da awa 30 suna koyar da tushen tsaro; OSHA ta ce katin na son rai ne kuma ba shaidar ƙwarewa (certification) ko lasisi ba ne, ko da yake wasu masu ɗaukar aiki da jihohi suna buƙatarsa."
          ],
          steps: ["Ku lissafa matakan aikin.", "Ku nemi AI ya faɗi haɗari da yadda za a hana su a kowane mataki, har da kayan kariya.", "Ku duba shi da mai kula da ku, littafin jagora da osha.gov.", "Ku gyara duk abin da ya ɓace ko ba daidai ba.", "Ku duba shi tare da ma'aikatan tawagar kafin a fara."],
          words: [["Haɗari", "wani abu da zai iya cutar da mutum."], ["PPE", "personal protective equipment (kayan kariya na jiki), kamar safar hannu, gilashin kariya, hular kariya da takalmin ƙarfe."], ["Nazarin tsaron aiki", "jerin matakan aiki, haɗarinsu da yadda za a hana su."]],
          slides: [
            { title: "Nazarin tsaron aiki", bullets: ["Matakan aikin", "Haɗari a kowane mataki", "Yadda za a hana su da PPE"] },
            { title: "AI yana rubuta daftari, mutane ke yanke hukunci", bullets: ["AI yana lissafa haɗarin da aka saba gani", "Mai kula, littafin jagora da OSHA suke tabbatarwa"] },
            { title: "Katunan OSHA Outreach", bullets: ["Azuzuwan tsaro na awa 10 da awa 30", "Na son rai ne; ba shaidar ƙwarewa ko lasisi ba ne", "Wasu masu ɗaukar aiki da jihohi suna buƙatarsa"] }
          ],
          sources: [{ name: "OSHA Outreach Training Program", url: "https://www.osha.gov/training/outreach" }, { name: "OSHA Outreach Training Program FAQs", url: "https://www.osha.gov/training/outreach/faq" }],
          tryIt: "Ku nemi AI ya ba ku jerin binciken tsaron aiki don wani aiki na gaske (kamar ɗaukar akwatuna masu nauyi ko canja taya). Sannan ku nemo shafin tsaro na hukuma ɗaya ko littafin jagora na wannan aikin, ku ƙara duk abin da AI ya manta.",
          youCanNow: "rubuta daftarin jerin binciken tsaron aiki da AI da duba shi da majiyoyin hukuma.",
          quickCheck: [
            { objective: "O3", q: "Waɗanne abubuwa uku ne nazarin tsaron aiki yake lissafawa?", options: ["Matakai, haɗari da yadda za a hana su", "Kayan aiki, farashi da lokuta", "Ma'aikata, lokutan aiki da hutu", "Abokan ciniki, adireshi da lambobin waya"], answer: 0, why: "Nazarin tsaron aiki yana lissafa kowane mataki, haɗarinsa da yadda za a hana su." },
            { objective: "O3", q: "Jerin tsaron da AI ya yi don ɗaukar akwatuna bai ambaci safar hannu ba, amma dokar mai ɗaukar aiki ta buƙace su. Me za ku yi?", options: ["Ku bar safar hannu domin AI bai lissafa su ba", "Ku sake tambayar AI har ya yarda", "Ku ƙara safar hannu a jerin ku bi dokar mai ɗaukar aiki", "Ku sa safar hannu a kan akwatuna masu nauyi kawai"], answer: 2, why: "Dokokin hukuma da na mai ɗaukar aiki ne ke da ƙarshen magana; ku ƙara abin da AI ya manta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: AI a wurin aiki",
        questions: [
          { objective: "O1", q: "AI ya ce a matse bolt zuwa 40 ft-lbs, amma littafin jagora ya ce 25. Me za ku yi?", options: ["Ku bi AI", "Ku ɗauki matsakaici", "Ku bi littafin jagora ku tambayi mai kula da ku", "Ku matse shi da iyakar ƙarfinku"], answer: 2, why: "Lambobin hukuma daga littafin jagora suke zuwa." },
          { objective: "O2", q: "Mene ne ƙiyasi (estimate)?", options: ["Farashin aiki a rubuce kafin a fara shi", "Rasiti bayan an biya", "Dokar tsaro", "Wani nau'in kayan aiki"], answer: 0, why: "Ƙiyasi yana bayyana abin da za a sa rai kafin a fara aiki." },
          { objective: "O2", q: "Kun sami wata matsala da ke ɓoye da ke ƙara farashi. Me ya kamata ku yi?", options: ["Ku ƙara kuɗi ba tare da faɗa musu ba", "Ku bar aikin", "Ku ɓoye matsalar", "Ku sami amincewar abokin ciniki kafin ku yi ƙarin aiki"], answer: 3, why: "Canjin farashi yana buƙatar amincewar abokin ciniki." },
          { objective: "O3", q: "PPE yana nufin:", options: ["Ma'aikacin gwamnati mai albashi", "Kayan kariya na jiki (personal protective equipment)", "Ƙarin igiyar wuta", "Shiga kadarar wani"], answer: 1, why: "PPE kayan kariya ne kamar safar hannu da gilashin kariya." },
          { objective: "O3", q: "A cewar OSHA, katin OSHA na awa 10:", options: ["Lasisin gwamnatin tarayya ne", "Na son rai ne kuma ba shaidar ƙwarewa ko lasisi ba ne", "Lasisin tuƙi ne", "OSHA tana buƙatarsa a kowane aiki"], answer: 1, why: "OSHA ta ce katin Outreach ba shaidar ƙwarewa ko lasisi ba ne." }
        ]
      }
    },
    {
      name: "Babi na 2: Jigilar kaya, bayanai da sana'o'i",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ajiye bayanan aiki da hotuna da rubutu",
          minutes: 5,
          goal: "Ajiye bayanan aiki na kowace rana da hotuna da gajerun rubutu, ta amfani da AI don tsara su.",
          text: [
            "Bayanan aiki (work log) masu kyau suna kare ku kuma suna burge masu ɗaukar aiki: suna nuna abin da kuka yi, lokacin da kuka yi, da cewa an yi shi daidai. Ku ɗauki hotuna kafin da bayan aiki, ku rubuta kayan da kuka yi amfani da su, matsalolin da kuka samu, da lokacin da kuka ɗauka.",
            "Ku yi amfani da voice-to-text (magana zuwa rubutu) a wayarku don faɗin bayananku a ƙarshen aiki, sannan ku tambayi AI: \"Ka mayar da waɗannan bayanai gajeren bayanin aiki na ƙwararru mai rana, wuri, aikin da aka yi, kayan aiki, matsaloli da matakai na gaba.\" Ku duba cewa daidai ne.",
            "Ku bi dokokin mai ɗaukar ku aiki game da hotuna: wasu wurare ba sa barin a ɗauki hoto, kuma kada ku taɓa ɗaukar hoton abokan ciniki, takardunsu na sirri ko na'urorin tsaronsu ba tare da izini ba. Ku ajiye bayanan inda mai ɗaukar ku aiki ya ce."
          ],
          steps: ["Ku ɗauki hotuna kafin da bayan aiki inda aka yarda.", "Ku faɗa ko ku rubuta gajerun bayanai a ƙarshen aikin.", "Ku nemi AI ya tsara bayanin aikin.", "Ku duba cewa daidai ne.", "Ku ajiye shi inda mai ɗaukar ku aiki ya ce."],
          words: [["Bayanan aiki (work log)", "rubutun kowace rana na aikin da kuka yi."], ["Voice-to-text (magana zuwa rubutu)", "wani abu a waya da ke mayar da maganarku rubutu."]],
          slides: [
            { title: "Me yasa za a ajiye bayanan aiki", bullets: ["Yana tabbatar da abin da kuka yi da lokacin", "Yana kare ku kuma yana burge masu ɗaukar aiki"] },
            { title: "Rubuta bayanai da sauri", bullets: ["Hotuna kafin da bayan aiki", "Ku faɗi bayananku da baki", "AI yana tsara bayanin"] },
            { title: "Dokokin hoto", bullets: ["Ku bi dokokin wurin aiki", "Babu abokan ciniki, takardun sirri ko na'urorin tsaro", "Ku ajiye inda mai ɗaukar ku aiki ya ce"] }
          ],
          tryIt: "Ku yi ɗan aiki a gida (gyara, tsaftacewa ko shirya wani abu). Ku ɗauki hotuna kafin da bayan aiki, ku faɗi bayananku, sannan ku sa AI ya mayar da su bayanin aiki.",
          youCanNow: "ajiye bayanan aiki na ƙwararru da hotuna da rubutun da AI ya tsara.",
          quickCheck: [
            { objective: "O4", q: "Me hoton kafin aiki yake nunawa a bayanan aiki?", options: ["Yadda kuka yi aiki da sauri", "Yadda abin yake kafin ku fara aikin", "Fuskar abokin ciniki", "Kayan aikinku na sayarwa"], answer: 1, why: "Hotunan kafin da bayan aiki suna nuna abin da kuka canja da cewa an yi shi daidai." },
            { objective: "O4", q: "Takardar bankin abokin ciniki tana kan tebur inda kuke aiki. Me za ku yi kafin ku ɗauki hoto?", options: ["Ku ɗauki hoton; na bayanan aiki ne kawai", "Ku tambayi AI ko ba laifi", "Ku zuƙo takardar don ta fito sarai", "Ku matsa ta yadda ba za ta shiga hoton ba, ko ku roƙi abokin ciniki ya ɗauke ta"], answer: 3, why: "Kada ku ɗauki hoton takardun sirri ba tare da izini ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tsara hanya, lodi da kayan ajiya",
          minutes: 5,
          goal: "Yi amfani da manhajojin taswira da AI don tsara hanya da jerin lodi ko na kayan ajiya mai sauƙi.",
          text: [
            "Masu kai kaya, masu gyara da ke zuwa gidaje, da ma'aikatan rumbun ajiya suna tsara hanya da lodi kowace rana. Manhajojin taswira kyauta kamar Google Maps suna barin ku ƙara wuraren tsayawa da yawa kuma suna nuna cunkoson ababen hawa. Kamfanoni da yawa suna da nasu shirin tsara hanya; ku koye shi idan kun fara aiki.",
            "AI zai iya taimaka muku ku yi tunani: \"Ina da kiran hidima 6: [yankuna da lokutan da aka ƙayyade]. Ka ba ni jerin da zai rage tuƙi kuma ya cika lokutan.\" Sannan ku duba shi a manhajar taswira. Don lodi: \"Ka yi jerin lodi don waɗannan kayan da za a kai, ta yadda kayan wurin ƙarshe za su fara shiga.\"",
            "Don kayan ajiya (inventory), takarda mai sauƙi mai suna kaya, wurinsa (layi, shiryayye), adadi da lokacin sake yin oda tana taimakawa. Kada ku taɓa bari AI ya ƙetare iyakar nauyi, dokokin ɗaure kaya, ko dokokin awannin tuƙi na direbobi; waɗannan daga mai ɗaukar ku aiki da dokokin sufuri na hukuma suke zuwa."
          ],
          steps: ["Ku lissafa wuraren tsayawa da yankunansu da lokutansu.", "Ku nemi AI ya ba da shawarar jeri.", "Ku duba shi a manhajar taswira tare da cunkoso.", "Ku yi jerin lodi: kayan wurin ƙarshe su fara shiga.", "Ku bi dokokin nauyi, ɗaure kaya da awannin tuƙi daga mai ɗaukar ku aiki."],
          words: [["Hanya (route)", "jeri da hanyar wuraren tsayawa."], ["Ɗaure kaya (load securement)", "ɗaure kayan da ke cikin mota ta yadda ba za su motsa ko faɗi ba."], ["Awannin aiki (hours of service)", "dokokin da ke iyakance tsawon lokacin da direbobin motocin kasuwanci za su iya tuƙi da aiki."]],
          slides: [
            { title: "Ku tsara hanya", bullets: ["Ku lissafa wuraren tsayawa da lokuta", "AI yana ba da shawarar jeri", "Ku duba shi a manhajar taswira"] },
            { title: "Ku tsara lodi", bullets: ["Kayan wurin ƙarshe su fara shiga", "Kayan ajiya: kaya, wuri, adadi"] },
            { title: "Dokoki ne farko", bullets: ["Iyakar nauyi da ɗaure kaya", "Awannin tuƙin direbobi", "Daga mai ɗaukar ku aiki da dokokin hukuma"] }
          ],
          tryIt: "Ku zaɓi wurare biyar na gaske a yankinku. Ku nemi AI ya ba da shawarar jeri mafi kyau na ziyartarsu, sannan ku duba shi a manhajar taswira kyauta ku kwatanta lokutan tuƙi.",
          youCanNow: "tsara hanya da lodi da AI da manhajojin taswira yayin da kuke bin dokoki.",
          quickCheck: [
            { objective: "O5", q: "Mene ne ma'anar kayan ajiya (inventory)?", options: ["Jerin abin da kuke da shi a ajiye da yawansa", "Hanya mafi sauri", "Awannin direba", "Dokar tsaro ta lodi"], answer: 0, why: "Kayan ajiya ƙidayar kayayyakin da kuke da su ne." },
            { objective: "O5", q: "AI ya ba da shawarar jerin wurare biyar. Me za ku yi a gaba?", options: ["Ku bi shi ba tare da dubawa ba", "Ku duba shi a manhajar taswira tare da cunkoso kafin ku tuƙa", "Ku nemi abokan ciniki su zaɓa", "Ku fara tuƙawa zuwa wuri mafi nisa"], answer: 1, why: "Shawarwarin hanya na AI suna buƙatar dubawa a manhajar taswira da cunkoson yanzu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Neman koyon sana'a da ayyukan sana'a",
          minutes: 5,
          goal: "Nemo koyon sana'a mai rajista ko aikin sana'a, ku shirya nema.",
          text: [
            "Koyon sana'a mai rajista (Registered Apprenticeship) yana barin ku karɓi albashi yayin da kuke koyon sana'a, tare da horo a aji da takardar shaida da aka amince da ita a ƙarshe. Shafin Apprenticeship.gov na Ma'aikatar Ƙwadago ta Amurka yana da Apprenticeship Job Finder (mai nemo ayyukan koyon sana'a). Ƙungiyoyin ma'aikata (unions), kwalejojin al'umma da shirye-shiryen shirin koyon sana'a (pre-apprenticeship) ma suna ba da hanyoyi.",
            "Ku nemi AI ya bayyana sana'a: \"Me mai koyon HVAC yake yi kowace rana, waɗanne kayan aiki yake amfani da su, kuma wane lissafi ake yi?\" Sannan ku nemi ya taimake ku mayar da ƙwarewarku takardar bayanin aiki (résumé) ta sana'a, kuna kiyaye cewa komai gaskiya ne.",
            "Wasu sana'o'i da ayyukan tuƙi suna buƙatar lasisi, jarabawa ko tarihin tuƙi mai tsabta, kuma wasu lasisi suna duba tarihin laifi; ku tambayi hukumar ba da lasisi ta jiharku, kuma ku tambayi shirinku na masu dawowa gida ko na horar da ma'aikata waɗanne masu ɗaukar aiki da shirye-shirye ke maraba da mutanen da ke da tarihin laifi. Ku riƙa zuwa a kan lokaci, a shirye don koyo: a sana'o'i, wannan ne ya fi muhimmanci."
          ],
          steps: ["Ku bincika mai nemo ayyuka na Apprenticeship.gov da shirye-shiryen ƙungiyoyin ma'aikata ko kwalejoji na yankinku.", "Ku nemi AI ya bayyana sana'ar da ƙwarewar da take buƙata.", "Ku duba dokokin lasisi da na tarihin laifi a hukumar jiharku.", "Ku tambayi shirinku na masu dawowa gida ko na horar da ma'aikata game da masu ɗaukar aiki masu ba da dama ta biyu (fair-chance).", "Ku gina résumé ta sana'a mai gaskiya da taimakon AI."],
          words: [["Koyon sana'a mai rajista (Registered Apprenticeship)", "aiki mai albashi tare da horo da ke kaiwa ga takardar shaida da aka amince da ita."], ["Shirin koyon sana'a (pre-apprenticeship)", "gajeren shiri da ke shirya ku don shiga koyon sana'a."], ["Ƙwararren ma'aikaci (journeyworker)", "ma'aikacin da ya kammala horo a sana'a."]],
          slides: [
            { title: "Ku sami kuɗi yayin da kuke koyo", bullets: ["Koyon sana'a mai rajista: albashi da horo", "Takardar shaida da aka amince da ita a ƙarshe"] },
            { title: "Inda za ku nema", bullets: ["Apprenticeship.gov Job Finder", "Ƙungiyoyin ma'aikata da kwalejojin al'umma", "Shirye-shiryen pre-apprenticeship"] },
            { title: "Ku duba dokoki", bullets: ["Lasisi, jarabawa, tarihin tuƙi", "Hukumar ba da lasisi ta jiha", "Masu ɗaukar aiki masu ba da dama ta biyu ta hanyar shirinku"] }
          ],
          sources: [{ name: "Apprenticeship.gov (U.S. Department of Labor)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Aikin ƙarshe: ku bincika Apprenticeship.gov ko wani shiri na yankinku don koyon sana'a ɗaya ko aikin sana'a ɗaya da za ku iya nema. Sannan ku kammala fakitin aikinku: taƙaitaccen bayanin littafin jagora, ƙiyasi ko takardar umarnin aiki, jerin tsaro da aka duba, bayanin aiki da tsarin hanya ko na lodi.",
          youCanNow: "amfani da AI don yin aiki cikin hikima a sana'a ko jigilar kaya, da nemo hanyar shiga ɗaya.",
          quickCheck: [
            { objective: "O6", q: "Mene ne pre-apprenticeship (shirin koyon sana'a)?", options: ["Lasisin yin aiki shi kaɗai", "Aiki mai albashi a matsayin mai kula", "Shirin da ke shirya ku don shiga koyon sana'a", "Jarabawar da ake yi bayan koyon sana'a"], answer: 2, why: "Pre-apprenticeship yana gina tushe don ku sami shiga koyon sana'a." },
            { objective: "O6", q: "Kuna son sanin ko lasisin sana'ar da kuke buƙata yana duba tarihin laifi. Me za ku yi?", options: ["Ku yi tsammani bisa labarin aboki", "Ku tambayi AI ku amince da amsarsa", "Ku haƙura da wannan sana'ar", "Ku tambayi hukumar ba da lasisi ta jiharku"], answer: 3, why: "Hukumar ba da lasisi ta jiha tana da dokokin hukuma na wannan lasisin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Jigilar kaya, bayanai da sana'o'i",
        questions: [
          { objective: "O4", q: "Me yasa za a ajiye hotuna kafin da bayan aiki a bayanan aiki?", options: ["Don samun \"likes\" a kafafen sada zumunta", "Kowace doka tana buƙatarsu", "Don ɗaukar hoton abokan ciniki", "Suna nuna abin da kuka yi da cewa an yi shi daidai"], answer: 3, why: "Hotuna suna tabbatar da aikin." },
          { objective: "O5", q: "Idan kuna loda babbar mota don wurare da yawa, waɗanne kaya ne za su fara shiga?", options: ["Kayan wurin ƙarshe", "Kayan wurin farko", "Kaya mafi sauƙi koyaushe", "Babu wani tsari"], answer: 0, why: "Idan kayan wurin ƙarshe sun fara shiga, kayan wurin farko suna da sauƙin kaiwa." },
          { objective: "O5", q: "Daga ina iyakar nauyi da dokokin awannin tuƙi suke zuwa?", options: ["Daga AI chatbot", "Daga abokanku", "Daga mai ɗaukar ku aiki da dokokin sufuri na hukuma", "Daga manhajar taswira"], answer: 2, why: "Dokokin hukuma ne ke kafa waɗannan iyakoki." },
          { objective: "O6", q: "Mene ne Registered Apprenticeship (koyon sana'a mai rajista)?", options: ["Horon aiki ba tare da albashi ba kawai", "Digirin kwaleji", "Jarabawar lasisi", "Aiki mai albashi tare da horo da ke kaiwa ga takardar shaida da aka amince da ita"], answer: 3, why: "Masu koyon sana'a suna samun kuɗi yayin da suke koyo." },
          { objective: "O6", q: "Wane shafi ne ke da Apprenticeship Job Finder na Ma'aikatar Ƙwadago ta Amurka?", options: ["Manhajar kafafen sada zumunta", "Wani shafin blog kawai", "Apprenticeship.gov", "Shafin sayayya"], answer: 2, why: "Ma'aikatar Ƙwadago ce ke gudanar da Apprenticeship.gov." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Sana'o'in Hannu da Jigilar Kaya",
    questions: [
      { objective: "O6", q: "Wanne ne sana'ar hannu?", options: ["Mai tasiri a kafafen sada zumunta", "Mai aikin wutar lantarki", "Mai sharhin fina-finai", "Mai caca"], answer: 1, why: "Aikin wutar lantarki sana'ar hannu ce." },
      { objective: "O1", q: "Ta yaya AI zai taimaka da littafin jagora mai wuya?", options: ["Ya bayyana shi da kalmomi masu sauƙi", "Ya canja lambobin littafin", "Ya yi muku aikin", "Ya amince da tsaro a madadinku"], answer: 0, why: "AI malami ne mai kyau don kalmomi da matakai." },
      { objective: "O1", q: "Spec sheet tana lissafa:", options: ["Jadawalin aikinku", "Albashinku", "Ainihin awo da abubuwan da kaya ke buƙata", "Ra'ayoyin abokan ciniki"], answer: 2, why: "Bayanan fasaha suna ba da ainihin abubuwan da ake buƙata." },
      { objective: "O1", q: "Waɗanne lambobi ne dole su fito daga littafin jagora ko dokar gini, ba daga AI ba?", options: ["Voltage, torque da iyakar nauyi", "Kwanan wata", "Sunanku", "Launin babbar motar"], answer: 0, why: "Lambobin da suka shafi tsaro suna buƙatar majiyoyin hukuma." },
      { objective: "O2", q: "Kuɗin aiki (labor) a ƙiyasi yana nufin:", options: ["Kayan aiki", "Haraji", "Adireshin abokin ciniki", "Kuɗin lokacin ma'aikaci"], answer: 3, why: "Kuɗin aiki shi ne lokacin da ake biya." },
      { objective: "O2", q: "Awa 2 a $60 tare da $100 na kayan aiki ya zama:", options: ["$62", "$120", "$160", "$220"], answer: 3, why: "2 x 60 = 120, tare da 100 = 220." },
      { objective: "O2", q: "Ƙiyasi mai kyau yana kuma faɗin:", options: ["Babu komai game da aikin", "Abin da aka haɗa, wanda ba a haɗa ba, da lokacin da zai ƙare", "Lambar Social Security ɗinku", "Tabbataccen farashi da ba zai canja ba ko me ya faru"], answer: 1, why: "Sharuɗɗa masu sarari suna hana rikici." },
      { objective: "O3", q: "Nazarin tsaron aiki yana lissafa:", options: ["Farashi kawai", "Ranakun haihuwar ma'aikata", "Ra'ayoyin abokan ciniki", "Matakai, haɗari da yadda za a hana su"], answer: 3, why: "Yana tsara tsaro don kowane mataki." },
      { objective: "O3", q: "Wanne ne PPE?", options: ["Gilashin kariya", "Murfin waya", "Akwatin abinci", "Manhajar taswira"], answer: 0, why: "Gilashin kariya yana kare idanunku." },
      { objective: "O3", q: "Wane ne ke tabbatar da jerin tsaron da AI ya rubuta?", options: ["Babu kowa", "AI da kansa", "Mai kula da ku, littafin jagora da majiyoyin hukuma kamar OSHA", "Wani bidiyo kawai"], answer: 2, why: "AI ba hukumar tsaro ba ne." },
      { objective: "O3", q: "Ajin OSHA Outreach na awa 10:", options: ["Lasisin ɗan kwangila ne", "Yana maye gurbin duk horon aiki", "AI ne ke gudanar da shi", "Yana koyar da tushen tsaro; katin na son rai ne"], answer: 3, why: "OSHA ta bayyana shi a matsayin horo na son rai." },
      { objective: "O4", q: "Voice-to-text yana taimaka muku:", options: ["Rage kuɗin kiran waya", "Tuƙi da sauri", "Faɗin bayanai da baki maimakon rubutawa", "Karanta littattafan jagora da murya kawai"], answer: 2, why: "Yana mayar da magana rubutu." },
      { objective: "O4", q: "Wane hoto ne kada ku ɗauka ba tare da izini ba?", options: ["Gyaran da aka kammala", "Takardun sirri na abokin ciniki", "Sashen da ya lalace", "Akwatin kayan aikinku"], answer: 1, why: "Ku girmama sirrin abokin ciniki." },
      { objective: "O4", q: "Bayanin aiki yana ƙunshe da:", options: ["Rana, wuri, aikin da aka yi, kayan aiki, matsaloli da matakai na gaba", "Ra'ayinku kawai", "Kalmomin sirrin abokan ciniki", "Babu komai"], answer: 0, why: "Cikakkun bayanai rubuce-rubuce ne masu amfani." },
      { objective: "O5", q: "Bayan AI ya ba da shawarar jerin hanya, ya kamata ku:", options: ["Bi shi ba tare da dubawa ba", "Ƙyale lokutan da aka ƙayyade", "Duba shi a manhajar taswira tare da cunkoso", "Tuƙa da sauri"], answer: 2, why: "Manhajojin taswira suna nuna ainihin lokutan tuƙi da cunkoso." },
      { objective: "O5", q: "Ɗaure kaya (load securement) yana nufin:", options: ["Ɗaure kaya ta yadda ba za su motsa ko faɗi ba", "Kulle ofis", "Samun bashi", "Ajiye fayil"], answer: 0, why: "Kayan da aka ɗaure da kyau suna hana haɗari." },
      { objective: "O5", q: "Dokokin awannin aiki (hours of service) suna iyakance:", options: ["Lokutan buɗe shago", "Hutun abincin rana na ma'aikatan ofis kawai", "Amfani da intanet", "Tsawon lokacin da direbobin motocin kasuwanci za su iya tuƙi da aiki"], answer: 3, why: "Suna hana gajiyar direba." },
      { objective: "O6", q: "Pre-apprenticeship:", options: ["Cikakken lasisi ne", "Yana shirya ku don shiga koyon sana'a", "Shirin bashi ne", "Wani nau'in kayan aiki ne"], answer: 1, why: "Yana gina ƙwarewa don shiga koyon sana'a." },
      { objective: "O6", q: "A ina za ku duba ko lasisin sana'a yana duba tarihin laifi?", options: ["Hasashen AI", "Hukumar ba da lasisi ta jiharku", "Sharhi a ƙarƙashin tallar aiki", "Babu inda"], answer: 1, why: "Hukumomin jiha ne ke kafa dokokin lasisi." },
      { objective: "O6", q: "A sana'o'i, me ya fi muhimmanci ga masu ɗaukar aiki da yawa a farko?", options: ["Mallakar kayan aiki masu tsada", "Samun digiri", "Sanin kowa", "Zuwa a kan lokaci da kasancewa a shirye don koyo"], answer: 3, why: "Amintacce da kyakkyawar ɗabi'a suna buɗe ƙofofi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      5,
      7,
      9,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Taƙaitaccen bayanin littafin jagora",
        objective: "O1",
        notYet: "Taƙaitaccen bayanin yana da lambar da ba ta yi daidai da littafin jagora ba, ko babu majiya.",
        meets: "Taƙaitaccen bayani da kalmomi masu sauƙi, an duba kowace lamba da littafin jagora.",
        exceeds: "Yana kuma nuna wane mataki ne ke buƙatar mai kula ko ma'aikaci mai lasisi."
      },
      {
        name: "Ƙiyasi ko takardar umarnin aiki",
        objective: "O2",
        notYet: "Babu kuɗin aiki, kayan aiki, jimla, abin da aka haɗa ko ranar ƙarewa, ko lissafin ba daidai ba ne.",
        meets: "Dukkan sassan suna nan kuma an duba lissafin da hannu.",
        exceeds: "Yana kuma faɗin abin da ba a haɗa ba da yadda za a amince da canje-canje."
      },
      {
        name: "Jerin binciken tsaro",
        objective: "O3",
        notYet: "An kwafo shi daga AI ba tare da dubawa da majiyar hukuma ba.",
        meets: "An duba shi da littafin jagora ko majiyar hukuma, kuma an ƙara duk abin da ya ɓace.",
        exceeds: "Yana ambaton majiyar da PPE na kowane haɗari."
      },
      {
        name: "Bayanan aiki",
        objective: "O4",
        notYet: "Babu rana, aikin da aka yi, kayan aiki, matsaloli ko matakai na gaba, ko yana nuna bayanan sirri.",
        meets: "Cikakken bayani tare da bayanin hotunan kafin da bayan aiki, kuma babu bayanan sirri.",
        exceeds: "Wani ma'aikaci zai iya ci gaba da aikin daga wannan bayanin shi kaɗai."
      },
      {
        name: "Tsarin hanya ko na lodi",
        objective: "O5",
        notYet: "Ba a duba hanyar ba, ko lodin ba a jerin da ya dace yake ba.",
        meets: "An duba hanyar a manhajar taswira kuma an saka kaya a juye na jerin wuraren tsayawa.",
        exceeds: "Yana kuma lissafa adadin kayan ajiya kuma yana ambaton dokokin mai ɗaukar aiki."
      },
      {
        name: "An sami aiki na gaba",
        objective: "O6",
        notYet: "Ba a sami koyon sana'a ko aiki ba.",
        meets: "Koyon sana'a ɗaya na gaske ko aikin sana'a, tare da abubuwan da ake buƙata da yadda ake nema.",
        exceeds: "Yana kuma lissafa matakin farko da mai koyo zai ɗauka a wannan makon."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka nemi koyon sana'a, pre-apprenticeship ko aikin sana'a cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka fara koyon sana'a ko aikin sana'a cikin kwanaki 90",
      "Masu koyo da suka ce sun yi amfani da AI don rubuta ƙiyasi, bayanan aiki ko jerin binciken tsaro a wurin aiki",
      "Masu koyo da suka fara wani kwas na Koach Learn game da sana'o'i ko aiki cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai kyamara da intanet",
      "Mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini, da manhajar taswira kyauta",
      "Littafin jagora na kayan aiki, na'urar gida ko mota (a takarda ko a intanet)",
      "Takarda da alƙalami ko manhajar rubutu don fakitin aikin",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A kowane zama, ku jaddada cewa lambobin tsaro da dokoki daga littafin jagora, mai ɗaukar aiki da OSHA suke zuwa, ba daga AI ba.",
      "Ku kawo littattafan jagora na gaske da samfurin ƙiyasi daga masu sana'a na yankinku don masu koyo su yi atisaye da takardu na gaske.",
      "Kada ku bari masu koyo su yi aikin wutar lantarki, gas ko wani aiki da ke buƙatar lasisi a matsayin atisaye; ku yi amfani da ayyukan gida masu aminci.",
      "Ku haɗa masu koyo da shirye-shiryen pre-apprenticeship na yankinku da masu ɗaukar aiki da ke ɗaukar mutanen da ke da tarihin laifi.",
      "Ku ba da maki ga fakitin aikin da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
