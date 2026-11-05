"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-nutrition-recovery-ai.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// General education only: no doses, calorie targets or medical advice.

module.exports = {
  id: "athletes-nutrition-recovery-ai-ha",
  lang: "ha",
  translationOf: "athletes-nutrition-recovery-ai",
  category: "Athletes",
  name: "Abinci da Hutawa ga 'Yan Wasa tare da AI",
  skills: "Tsara abinci mai daidaito kewaye da atisaye, Tsara abinci da ruwa na ranar wasa, Amfani da AI don jerin cefane da ra'ayoyin abinci, Bin diddigin barci da hutawa, Sanin lokacin ganin ƙwararre",
  outcome: "amfani da mataimakin AI don tsara abinci mai sauƙi da daidaito na mako guda da tsarin hutawa kewaye da jadawalin atisayenku, sannan ku sa ƙwararren masanin abinci (dietitian), mai kula da lafiyar 'yan wasa ko likita ya duba tsarin.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne da masu horar da su waɗanda ke son fahimtar tushen cin abinci, shan ruwa da hutawa yadda ya kamata, da amfani da AI don sauƙaƙa tsarawa. Ilimi ne na gama-gari, ba shawarar likita ko ta abinci ba.",
    "Kowane jiki daban yake. Shekarunku, wasanku, lafiyarku da burinku suna canja abin da kuke buƙata. Shi yasa tsarin da za ku gina a nan daftari ne da za ku duba tare da ƙwararren masanin abinci, mai kula da lafiyar 'yan wasa ko likitanku.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi amfani da mataimakin AI don rubuta daftarin tsarin abinci da hutawa na mako guda kewaye da ainihin jadawalin atisaye da wasanninku: faranti masu daidaito, tsarin abinci da ruwa na ranar wasa, jerin cefane bisa kasafin kuɗinku, da tsarin barci. Ku cire duk wani bayanin lafiya na sirri, sannan ku nuna tsarin ga ƙwararren masanin abinci, mai kula da lafiyar 'yan wasa ko likita, ku canja shi bisa abin da suka faɗa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa na makarantar sakandare, jami'a da ƙungiyoyi, da masu horar da su, waɗanda ke son ci, sha da hutawa yadda ya kamata, kuma su yi amfani da AI don sauƙaƙa tsarawa.",
    startingPoint: "Suna ci kuma suna barci tsakanin jadawali mai cike da atisaye, karatu da wasanni, kuma suna amfani da wayar zamani kullum. Da yawa suna tsallake abinci, suna tsammani kawai game da abinci da ruwa na ranar wasa, ba sa barci isasshe, kuma ba su sani ba ko yaushe ciwon jiki ke buƙatar ƙwararre.",
    gap: "Rashin isasshen abinci, ruwa da barci yana hana 'yan wasa yin iyakar ƙoƙarinsu, kuma yana ƙara haɗarin rauni da rashin lafiya saboda zafi. Shawarwarin AI ko na intanet game da kalori da ƙarin sinadarai (supplements) na iya zama marasa aminci. Tsari mai sauƙi na mako guda da ƙwararre ya duba yana taimaka wa 'yan wasa su murmure kuma su kasance lafiya.",
    constraints: [
      "Harshe mai sauƙi, kusan matakin karatu na aji 7",
      "Ilimi na gama-gari kaɗai, ba shawarar likita ko ta abinci ba; ainihin yawan abinci daga ƙwararren masanin abinci, mai kula da lafiyar 'yan wasa ko likita yake",
      "Waya ko kwamfuta mai mataimakin AI kyauta; dole tsare-tsare su dace da ainihin kasafin kuɗin abinci da kicin",
      "Kusan minti 60 gaba ɗaya",
      "Kada a saka bayanan asibiti, magunguna ko bayanan lafiya na sirri a AI; nauyin jiki da yadda mutum ke ganin jikinsa batutuwa ne masu matuƙar muhimmanci"
    ],
    prerequisites: "Babu"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da abincin da kuke ci a yanzu", action: "gina faranti mai daidaito mai abincin ƙarfi (carbohydrates), abincin gina jiki (protein), da 'ya'yan itace da kayan lambu", standard: "tare da dukkan sassa uku a faranti, da ƙarin abinci da aka tsara don ranakun atisaye mai wuya" },
    { id: "O2", condition: "Idan aka ba ku lokacin fara wasa ko atisaye mai wuya", action: "tsara abinci da ruwa na ranar wasa, daga abincin da ke gabani zuwa abincin hutawa bayan wasa", standard: "tare da abinci da ɗan abin ci da kuka saba da su, ruwa a duk yini, da abin ci na hutawa mai carbohydrates da protein" },
    { id: "O3", condition: "Ta amfani da mataimakin AI kyauta", action: "ƙirƙirar ra'ayoyin abinci na mako guda da jerin cefane da suka dace da jadawalinku, kasafin kuɗinku da kicin ɗinku", standard: "tare da bayanin rashin jituwa da abinci (allergy) da kalmomi na gama-gari, kuma ba tare da neman yawan kalori, tsarin rage nauyi ko yawan supplements ba" },
    { id: "O4", condition: "Idan aka ba ku jadawalin atisaye da wasanninku", action: "tsara al'adar barci mai lokacin tashi na yau da kullum, lokacin kwanciya da lokacin kashe allo", standard: "tare da rubuta al'adar na mako guda" },
    { id: "O5", condition: "Idan aka ba ku bayanin ciwon tsoka, zafi ko bugun kai", action: "bayyana ko ciwon tsoka ne na yau da kullum, ko alama ce ta tsayawa da faɗa wa mai kula da lafiyar 'yan wasa", standard: "kuna samun daidai a duk lokacin da akwai zafi mai tsanani, kumburi ko alamun bugun kai" },
    { id: "O6", condition: "Ta amfani da jadawalinku da mataimakin AI", action: "ƙirƙirar tsarin abinci da hutawa na mako guda, da sa masanin abinci, mai kula da lafiyar 'yan wasa ko likita ya duba shi", standard: "tare da cire bayanan lafiya na sirri, da sabunta tsarin bisa shawararsu" }
  ],
  chapters: [
    {
      name: "Babi na 1: Abinci kewaye da atisaye",
      lessons: [
        {
          objectives: ["O1"],
          title: "Faranti mai daidaito na ɗan wasa",
          minutes: 5,
          goal: "Gina faranti mai daidaito daga abincin da kuke ci a yanzu.",
          text: [
            "Abinci yana ba ku ƙarfin yin atisaye da kayan gina jiki don murmurewa. Hanya mai sauƙi ta tunani game da abinci ita ce faranti mai manyan sassa uku: abincin ƙarfi (carbohydrates) don kuzari (shinkafa, taliya, burodi, dankali, 'ya'yan itace), abincin gina jiki (protein) don taimaka wa tsoka ta gyaru (ƙwai, wake, kifi, kaza, yogurt), da 'ya'yan itace da kayan lambu don bitamin da ma'adanai.",
            "'Yan wasan da ke atisaye mai wuya sau da yawa suna buƙatar kuzari fiye da waɗanda ba 'yan wasa ba, kuma ranaku masu wuya yawanci suna buƙatar ƙarin carbohydrates. Yawan da kuke buƙata ya dogara da jikinku, wasanku da atisayenku. Shi yasa ƙwararren masanin abinci (dietitian) shi ne mutumin da ya dace ya faɗa muku ainihin yawan.",
            "Tsallake abinci ko daina cin wani rukunin abinci gaba ɗaya don ku yi kama da wani abu na iya cutar da wasanku da lafiyarku. Idan abinci, nauyi ko yadda kuke ganin jikinku yana damun ku, ku yi magana da wanda kuka amince da shi, da mai kula da lafiyar 'yan wasa ko likitanku."
          ],
          words: [["Carbohydrates (abincin ƙarfi)", "abinci kamar shinkafa, burodi, taliya, dankali da 'ya'yan itace da ke ba da kuzari da sauri."], ["Protein (abincin gina jiki)", "abinci kamar ƙwai, wake, kifi, nama da yogurt da ke taimaka wa jiki ya gyara tsoka."], ["Registered dietitian (RD ko RDN)", "ƙwararren masanin abinci da lafiyar abinci mai lasisi."]],
          slides: [
            { title: "Sassa uku na faranti", bullets: ["Carbohydrates: kuzari", "Protein: gyaran jiki", "'Ya'yan itace da kayan lambu: bitamin da ma'adanai"] },
            { title: "Rana mai wuya, ƙarin abinci", bullets: ["Ranakun atisaye sau da yawa suna buƙatar ƙarin kuzari", "Ainihin yawa: ku tambayi ƙwararren masanin abinci"] },
            { title: "Ku yi hankali da", bullets: ["Tsallake abinci", "Daina cin rukunin abinci gaba ɗaya", "Damuwa game da abinci ko jiki: ku yi magana da wani"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Find a Nutrition Expert (nemo ƙwararren masanin abinci)", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Ku rubuta abin da kuka ci jiya a lokacin cin abinci ɗaya. Ku nuna carbohydrate, protein da 'ya'yan itace ko kayan lambu. Me za ku iya ƙarawa don ya zama faranti mai daidaito?",
          youCanNow: "gina faranti mai daidaito mai carbohydrates, protein, da 'ya'yan itace da kayan lambu.",
          quickCheck: [
            { objective: "O1", q: "Mene ne babban aikin protein a farantin ɗan wasa?", options: ["Kuzari mai sauri", "Taimaka wa tsoka ta gyaru", "Ƙara bitamin kawai", "Sanyaya jikinku"], answer: 1, why: "Protein yana ba da kayan ginin da tsoka ke buƙata don gyaruwa." },
            { objective: "O1", q: "Gobe rana ce ta atisaye mai wuya. Wane canji a farantinku ne ya dace?", options: ["Tsallake karin kumallo", "Daina cin carbohydrates", "Ƙara carbohydrates don kuzari", "Cin kayan lambu kawai"], answer: 2, why: "Ranaku masu wuya yawanci suna buƙatar ƙarin carbohydrates don kuzari." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abinci da ruwa na ranar wasa",
          minutes: 5,
          goal: "Tsara abin da za ku ci da sha, da lokacinsu, a ranar wasa ko atisaye mai wuya.",
          text: [
            "Lokaci yana da muhimmanci. 'Yan wasa da yawa suna cin abinci na yau da kullum mai daidaito 'yan sa'o'i kafin wasa, da ɗan abin ci mai sauƙi kusa da lokacin farawa, kamar 'ya'yan itace ko biskit. Abincin da kuka saba da shi ya fi kyau a ranar wasa: kada ku gwada sabon abu.",
            "Ruwa yana da muhimmanci a duk yini, ba lokacin wasa kaɗai ba. Ku ɗauki kwalbar ruwa, ku riƙa sha a kai a kai, kuma ku ƙara sha idan ana zafi. Ƙishirwa, fitsari mai duhu, ciwon kai da ƙanƙarar tsoka (cramps) na iya nuna kuna buƙatar ƙarin ruwa. Jin jiri, ruɗewa ko rashin lafiya sosai a cikin zafi gaggawa ce: ku tsaya ku faɗa wa mai horarwa ko mai kula da lafiyar 'yan wasa nan take.",
            "Bayan atisaye mai wuya, cin abinci ko abin ci mai carbohydrates da protein yana taimaka wa hutawa. Mai kula da lafiyar 'yan wasa ko masanin abinci zai iya faɗa muku abin da ya dace da jikinku da wasanku."
          ],
          steps: ["Ku rubuta lokacin fara wasa ko atisayenku.", "Ku tsara abinci na yau da kullum mai daidaito 'yan sa'o'i kafin haka.", "Ku tsara ɗan abin ci da kuka saba da shi kusa da lokacin farawa.", "Ku tsara kwalbar ruwanku don duk yini.", "Ku tsara abinci ko abin ci na hutawa bayan haka."],
          words: [["Shan ruwa (hydration)", "kiyaye isasshen ruwa a jikinku."], ["Abincin hutawa", "abinci bayan atisaye da ke taimaka wa jikinku ya sake samun kuzari kuma ya gyaru."]],
          slides: [
            { title: "Kafin wasa", bullets: ["Abinci mai daidaito 'yan sa'o'i kafin wasa", "Ɗan abin ci da kuka saba da shi kusa da farawa", "Babu sabon abu a ranar wasa"] },
            { title: "Ruwa a duk yini", bullets: ["Ku ɗauki kwalba", "Ku ƙara sha idan ana zafi", "Jiri ko ruɗewa a cikin zafi? Ku tsaya ku faɗa wa ma'aikata yanzu"] },
            { title: "Bayan wasa", bullets: ["Carbohydrates da protein", "Ku tambayi mai kula da lafiyar 'yan wasa abin da ya dace da ku"] }
          ],
          tryIt: "Ku rubuta jadawalin ranar wasa don wasanku na gaba ko atisaye mai wuya: abinci, ɗan abin ci, ruwa da abincin hutawa, tare da lokuta.",
          youCanNow: "tsara abinci da ruwa mai sauƙi na ranar wasa.",
          quickCheck: [
            { objective: "O2", q: "Yaushe 'yan wasa da yawa ke cin abincinsu na yau da kullum mai daidaito a ranar wasa?", options: ["'Yan sa'o'i kafin wasa", "Daidai lokacin da wasa ke farawa", "Bayan wasa kawai", "Daren da ya gabata kawai"], answer: 0, why: "Abinci na yau da kullum 'yan sa'o'i kafin wasa da ɗan abin ci kusa da farawa al'ada ce da aka saba." },
            { objective: "O2", q: "Rana ce mai zafi kuma kuna da dogon atisaye. Me za ku tsara?", options: ["Ku sha ne kawai idan mai horarwa ya ce", "Ku ƙi shan ruwa don kada tsoka ta ƙanƙare", "Ku jira sai bayan atisaye ku sha", "Ku ɗauki kwalbar ruwa ku riƙa sha a kai a kai duk yini, fiye da haka a cikin zafi"], answer: 3, why: "Ruwa yana da muhimmanci a duk yini, kuma kuna buƙatar ƙari a cikin zafi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Amfani da AI don ra'ayoyin abinci da jerin cefane",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI don ra'ayoyin abinci na mako guda da jerin cefane bisa kasafin kuɗinku.",
          text: [
            "Mataimakan AI suna da kyau wajen ba da ra'ayoyin abinci, girke-girke da jerin cefane. Ku ba su jadawalinku, kasafin kuɗinku, kicin ɗinku da abin da kuke so. Misali: \"Ni ɗan wasa ne a jami'a, ina da microwave a ɗakin kwana da kasafin kuɗin abinci na $50 a mako. Atisaye daga 3 zuwa 6 na yamma ne. Ka ba ni abinci mai sauƙi da daidaito na kwanaki 7 da jerin cefane.\"",
            "Ku faɗa masa game da rashin jituwa da abinci (allergy) ko dokokin abinci na addini ko al'ada da kalmomi na gama-gari, don ra'ayoyin su dace da ku. Kada ku saka bayanan asibiti ko magunguna.",
            "Kada ku tambayi AI yawan kalori, tsarin rage nauyi ko yawan supplements (ƙarin sinadarai). Waɗannan sun dogara da lafiyarku, kuma amsoshin na iya zama kuskure ko marasa aminci. Wannan aikin ƙwararren masanin abinci ne ko likita."
          ],
          steps: ["Ku ba da jadawalinku, kasafin kuɗinku da kicin ɗinku.", "Ku faɗi abincin da kuke so da wanda ba kwa ci.", "Ku nemi ra'ayoyin abinci mai daidaito na kwanaki 7.", "Ku nemi jerin cefane da aka raba bisa sassan shago.", "Ku duba farashi a shagonku ku gyara."],
          words: [["Kasafin kuɗi (budget)", "yawan kuɗin da kuke shirin kashewa."], ["Allergy (rashin jituwa da abinci)", "lokacin da jikinku ya yi mummunan martani ga wani abinci; yana iya zama mai tsanani."]],
          slides: [
            { title: "Ku ba AI cikakken bayani", bullets: ["Jadawali da kasafin kuɗi", "Kicin: ɗakin kwana, gida, babu", "Abincin da kuke so da wanda ba kwa ci"] },
            { title: "Ku nemi", bullets: ["Ra'ayoyin abinci mai daidaito na kwanaki 7", "Jerin cefane bisa sassan shago"] },
            { title: "KADA ku tambayi AI", bullets: ["Yawan kalori ko tsarin rage nauyi", "Yawan supplements", "Shawarar likita"] }
          ],
          tryIt: "Ku tambayi mataimakin AI abinci mai sauƙi da daidaito na kwanaki bakwai da jerin cefane bisa ainihin kasafin kuɗinku da kicin ɗinku. Ku duba farashi uku a shagonku.",
          youCanNow: "amfani da AI don samun ra'ayoyin abinci da jerin cefane da suka dace da kasafin kuɗinku da jadawalinku.",
          quickCheck: [
            { objective: "O3", q: "Wane bayani ne ke taimaka wa mataimakin AI ya ba da ra'ayoyin abinci masu amfani?", options: ["Bayanan asibitinku", "Jadawalinku, kasafin kuɗinku da kicin ɗinku", "Magungunanku", "Burin nauyinku"], answer: 1, why: "Jadawali, kasafin kuɗi da kicin suna sa ra'ayoyin su dace da rayuwarku ba tare da bayyana bayanan lafiya na sirri ba." },
            { objective: "O3", q: "Kuna son sanin ainihin yawan kalori da za ku ci don rage nauyi. Wa za ku tambaya?", options: ["Mataimakin AI", "Abokin wasa", "Ƙwararren masanin abinci ko likita", "Wani shahararre a kafofin sada zumunta"], answer: 2, why: "Yawan kalori ya dogara da lafiyarku, kuma aikin masanin abinci ne ko likita." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Abinci kewaye da atisaye",
        questions: [
          { objective: "O1", q: "Mene ne babban aikin carbohydrates ga 'yan wasa?", options: ["Gyaran tsoka kawai", "Bitamin kawai", "Kuzari", "Babu komai"], answer: 2, why: "Carbohydrates su ne babbar hanyar samun kuzari da sauri a jiki." },
          { objective: "O1", q: "Wane ne ya dace ya faɗa muku ainihin yawan abincinku?", options: ["Ƙwararren masanin abinci", "Mataimakin AI", "Wani shahararre a kafofin sada zumunta", "Abokin wasa"], answer: 0, why: "Ƙwararrun masana abinci suna ba da shawarar abinci ta musamman ga kowane mutum." },
          { objective: "O2", q: "A ranar wasa, wane abin ci ne ya fi kyau?", options: ["Sabon abin sha mai kuzari da ba ku taɓa gwadawa ba", "Babu komai duk yini", "Babban abinci mai maiko sosai daidai kafin wasa", "Ɗan abin ci da kuka saba da shi, kamar 'ya'yan itace"], answer: 3, why: "Abinci mai sauƙi da kuka saba da shi ya fi aminci a ranar wasa." },
          { objective: "O2", q: "Abokin wasa yana jin jiri kuma ya ruɗe a atisaye cikin zafi. Me za ku yi?", options: ["Ku ce masa ya jure ya ci gaba", "Ku faɗa wa mai horarwa ko mai kula da lafiyar 'yan wasa nan take", "Ku jira sai atisaye ya ƙare", "Ku ba shi abin sha mai kuzari ku tafi"], answer: 1, why: "Waɗannan alamun na iya zama gaggawa; dole ma'aikata su ɗauki mataki yanzu." },
          { objective: "O3", q: "Wace buƙata ce bai kamata a kai wa mataimakin AI ba?", options: ["Jerin cefane bisa kasafin $50", "Yawan supplement gare ku", "Ra'ayoyin abincin microwave", "Girke-girke da wake"], answer: 1, why: "Yawan magani ko supplement ya dogara da lafiyarku; ku tambayi masanin abinci ko likita." }
        ]
      }
    },
    {
      name: "Babi na 2: Al'adun hutawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Barci: mafi kyawun kayan hutawarku",
          minutes: 5,
          goal: "Gina al'adar barci mai sauƙi da ta dace da jadawalinku.",
          text: [
            "Lokacin barci ne jikinku ke gyaruwa, kuma ƙwaƙwalwarku ke ajiye abin da kuka koya a atisaye. Matasa yawanci suna buƙatar barci fiye da manya, kuma 'yan wasa da yawa ba sa samun isasshe.",
            "Al'adar barci tana taimakawa: lokacin kwanciya da lokacin tashi na yau da kullum, kashe allo kafin kwanciya, ɗaki mai sanyi da duhu, da shan caffeine da safe kaɗai. AI zai iya taimaka muku gina tsarin kwanciya kewaye da atisaye na sassafe ko wasannin dare.",
            "Idan sau da yawa ba kwa iya barci, kuna yin minshari da ƙarfi, ko kuna jin gajiya sosai ko bayan barci, ku yi magana da likitanku."
          ],
          steps: ["Ku zaɓi lokacin tashi na yau da kullum.", "Ku ƙirga baya zuwa lokacin kwanciya da zai ba ku isasshen barci.", "Ku saka lokacin kashe allo kafin kwanciya.", "Ku sha caffeine da safe kaɗai.", "Ku rubuta sa'o'in barcinku na mako guda."],
          words: [["Al'adar barci", "matakai iri ɗaya a lokaci ɗaya kowane dare don taimaka muku ku yi barci."], ["Caffeine", "sinadari mai ƙara kuzari a cikin kofi, shayi, lemon kwalba da abubuwan sha masu kuzari, wanda zai iya hana ku barci."]],
          slides: [
            { title: "Me yasa barci yake da muhimmanci", bullets: ["Jiki yana gyaruwa", "Ƙwaƙwalwa tana ajiye abin da aka koya", "Matasa suna buƙatar fiye da manya"] },
            { title: "Al'ada mai sauƙi", bullets: ["Lokacin kwanciya da tashi iri ɗaya", "Kashe allo kafin kwanciya", "Ɗaki mai sanyi da duhu", "Caffeine da safe kaɗai"] },
            { title: "Ku ga likitanku idan", bullets: ["Sau da yawa ba kwa iya barci", "Kuna minshari da ƙarfi", "Kullum kuna jin gajiya sosai"] }
          ],
          tryIt: "Ku tambayi mataimakin AI: \"Ina da atisaye ƙarfe 6 na safe a ranakun aiki, kuma wasanni suna ƙarewa ƙarfe 9 na dare a ranar Juma'a. Ka taimake ni in yi al'adar barci mai sauƙi.\" Ku zaɓi lokacin kwanciyarku, ku rubuta barcinku na dare uku masu zuwa.",
          youCanNow: "gina al'adar barci mai sauƙi da bin diddiginta.",
          quickCheck: [
            { objective: "O4", q: "Wanne ne ɓangare na al'adar barci mai kyau?", options: ["Shan caffeine da dare", "Lokacin kwanciya daban kowane dare", "Ɗaki mai haske da zafi", "Lokacin kwanciya da tashi na yau da kullum"], answer: 3, why: "Lokuta na yau da kullum, kashe allo, ɗaki mai sanyi da duhu, da caffeine da safe suna taimaka wa barci." },
            { objective: "O4", q: "Atisaye yana farawa ƙarfe 6 na safe. Ta yaya za ku saka lokacin kwanciyarku?", options: ["Ku zaɓi lokacin tashi, sannan ku ƙirga baya zuwa lokacin kwanciya da zai ba ku isasshen barci", "Ku kwanta duk lokacin da kuka gama da wayarku", "Ku yi barci har rana ta yi a ranakun atisaye", "Ku ƙi barci kafin atisaye na sassafe"], answer: 0, why: "Ƙirga baya daga lokacin tashi na yau da kullum yana ba da lokacin kwanciya mai isasshen barci." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ranakun hutu, ciwon tsoka da zafi",
          minutes: 5,
          goal: "Bambanta ciwon tsoka na atisaye na yau da kullum da zafin da ke buƙatar ƙwararre.",
          text: [
            "Ranakun hutu ɓangare ne na atisaye, ba hutu daga gare shi ba. Mai horarwarku yana tsara su don jikinku ya saba kuma ya ƙara ƙarfi.",
            "Ciwon tsoka na yau da kullum yana jin kamar gajiyar tsoka marar kaifi a ko'ina, kwana ɗaya ko biyu bayan atisaye mai wuya, kuma yana sauƙi a hankali. Zafi mai kaifi, a gaɓa ko ƙashi, wanda ke sa ku yi dingishi, ke kawo kumburi, ko ke ƙara tsananta ya bambanta: ku tsaya ku faɗa wa mai kula da lafiyar 'yan wasa.",
            "Raunin kai yana buƙatar kulawa ta musamman. Idan ku ko abokin wasa kun sami bugu kuma kuna da ciwon kai, jiri, ruɗewa ko kuna jin \"ba daidai ba\", ku daina wasa ku faɗa wa mai horarwa ko mai kula da lafiyar 'yan wasa. Horon HEADS UP na CDC (hukumar kiwon lafiyar jama'a ta Amurka) kyauta ne, kuma yana bayanin alamun."
          ],
          steps: ["Ku lura a ina ne kuma yaya yake ciwo.", "Marar kaifi, a ko'ina, kuma yana sauƙi: ciwon tsoka na yau da kullum.", "Mai kaifi, a gaɓa, kumburi, dingishi ko yana ƙara tsananta: ku faɗa wa mai kula da lafiyar 'yan wasa.", "Duk bugun kai mai alamu: ku tsaya ku faɗa wa ma'aikata."],
          words: [["Ciwon tsoka (soreness)", "gajiyar tsoka marar kaifi bayan atisaye mai wuya, wadda ke ɓacewa cikin kwana ɗaya ko biyu."], ["Concussion (raunin ƙwaƙwalwa)", "rauni a ƙwaƙwalwa daga bugu ko girgiza a kai ko jiki."]],
          slides: [
            { title: "Ranakun hutu atisaye ne", bullets: ["Jikinku yana sabawa a ranakun hutu", "Ku bi tsarin da mai horarwarku ya yi"] },
            { title: "Ciwon tsoka da zafi", bullets: ["Ciwon tsoka: marar kaifi, a ko'ina, yana ɓacewa", "Zafi: mai kaifi, a gaɓa, kumburi, dingishi, yana tsananta"] },
            { title: "Bugun kai?", bullets: ["Ciwon kai, jiri, ruɗewa, \"ba daidai ba\"", "Ku daina wasa ku faɗa wa ma'aikata", "Ku koyi alamun: CDC HEADS UP"] }
          ],
          sources: [{ name: "CDC: HEADS UP concussion training (horo kan raunin ƙwaƙwalwa)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Ku rubuta jeri biyu: alamun ciwon tsoka na yau da kullum, da alamun zafin da za a faɗa. Sannan ku rubuta wanda za ku faɗa wa a ƙungiyarku da yadda za ku same shi.",
          youCanNow: "bambanta ciwon tsoka na yau da kullum da zafin da ke buƙatar mai kula da lafiyar 'yan wasa, da sanin abin da za ku yi bayan bugun kai.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne alamar zafin da ke buƙatar mai kula da lafiyar 'yan wasa?", options: ["Gajiya marar kaifi a ƙafafunku washegarin atisaye mai wuya", "Zafi mai kaifi a gaɓa da ke ƙara tsananta", "Ɗan ciwon tsoka da ke ɓacewa cikin kwana biyu", "Jin yunwa bayan atisaye"], answer: 1, why: "Zafi mai kaifi, zafi a gaɓa ko ƙashi, kumburi, dingishi ko zafin da ke tsananta suna buƙatar ƙwararre." },
            { objective: "O5", q: "Abokin wasa ya sami bugu a kai kuma ya ce yana jin jiri. Me zai faru?", options: ["Ya ci gaba da wasa idan yana so", "Ya huta na ɗan lokaci kaɗan", "Ya daina wasa, ku kuma ku faɗa wa mai horarwa ko mai kula da lafiyar 'yan wasa", "Ya sha ruwa ya koma wasa"], answer: 2, why: "Bugun kai mai alamu yana nufin a daina wasa a faɗa wa ma'aikata." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gina tsarin hutawarku",
          minutes: 5,
          goal: "Haɗa abinci, ruwa da barci cikin tsarin hutawa ɗaya na mako, kuma ku sa ƙwararre ya duba shi.",
          text: [
            "Yanzu ku haɗa komai. Tsarinku na mako yana da abinci kewaye da atisaye, tsarin ranar wasa, al'adar shan ruwa da al'adar barci.",
            "Ku nemi mataimakin AI ya haɗa su: \"Ga jadawalin atisaye da wasannina, kasafin kuɗina da kicin ɗina. Ka yi tebur na mako guda mai abinci, abubuwan ci, tunatarwar shan ruwa da lokutan kwanciya.\" Ku fara cire duk wani bayanin lafiya na sirri.",
            "Sannan ku kai shi ga ƙwararren masanin abinci, mai kula da lafiyar 'yan wasa ko likitanku. Ku tambaya: \"Shin wannan ya dace da jikina da wasana? Me za ka canja?\" Tsarin da suka taimaka muku gyarawa shi ne wanda za ku bi. Makaranta, ƙungiya ko cibiyar lafiyar ɗalibai na iya haɗa ku da ɗaya daga cikinsu."
          ],
          steps: ["Ku tattara bayanin jadawalinku, kasafin kuɗinku da kicin ɗinku.", "Ku nemi AI tebur na mako guda: abinci, abubuwan ci, ruwa, lokutan kwanciya.", "Ku cire bayanan lafiya na sirri.", "Ku nuna shi ga masanin abinci, mai kula da lafiyar 'yan wasa ko likita.", "Ku sabunta shi bisa shawararsu."],
          words: [["Tsarin hutawa", "al'adarku ta mako game da abinci, ruwa, barci da hutu da ke taimaka wa jikinku ya murmure."]],
          slides: [
            { title: "Tsarin hutawarku", bullets: ["Abinci kewaye da atisaye", "Tsarin ranar wasa", "Al'adar shan ruwa", "Al'adar barci"] },
            { title: "AI yana rubuta daftari", bullets: ["Tebur na mako guda", "Babu bayanan lafiya na sirri"] },
            { title: "Ƙwararre yana duba shi", bullets: ["Masanin abinci, mai kula da lafiyar 'yan wasa ko likita", "\"Me za ka canja?\"", "Ku bi tsarin da aka gyara"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Find a Nutrition Expert (nemo ƙwararren masanin abinci)", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Aikin ƙarshe: ku yi amfani da mataimakin AI don rubuta daftarin tsarin abinci da hutawa na mako guda, ku cire bayanan lafiya na sirri, sannan ku nuna shi ga masanin abinci, mai kula da lafiyar 'yan wasa ko likita.",
          youCanNow: "gina tsarin abinci, ruwa da barci na mako tare da AI, da sa ƙwararre ya duba shi.",
          quickCheck: [
            { objective: "O6", q: "Me ke shiga cikin tsarin hutawarku na mako guda?", options: ["Abinci da abubuwan ci, tunatarwar shan ruwa da lokutan kwanciya", "Atisayenku kawai", "Jadawalin wasanninku kawai", "Jerin supplements"], answer: 0, why: "Tsarin yana haɗa abinci, ruwa da barci kewaye da jadawalinku." },
            { objective: "O6", q: "Mai kula da lafiyar 'yan wasa ya ba da shawarar canje-canje ga tsarin da AI ya rubuta. Me za ku yi?", options: ["Ku riƙe na AI", "Ku nemi AI ya yi musu gardama", "Ku yi amfani da rabin kowanne", "Ku sabunta tsarin bisa shawararsu ku bi wannan"], answer: 3, why: "Tsarin da ƙwararre ya taimaka muku gyarawa shi ne wanda za ku bi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Al'adun hutawa",
        questions: [
          { objective: "O4", q: "Me yasa barci yake da muhimmanci ga 'yan wasa?", options: ["Ba shi da muhimmanci", "Yana maye gurbin atisaye", "Don nauyi kawai", "Jiki yana gyaruwa kuma ƙwaƙwalwa tana ajiye abin da aka koya"], answer: 3, why: "Lokacin barci ne gyaruwa da koyo ke faruwa." },
          { objective: "O4", q: "Wanne ne ɓangare na al'adar barci mai kyau?", options: ["Kashe allo kafin kwanciya", "Abubuwan sha masu kuzari da dare", "Lokacin kwanciya daban kowane dare", "Waya a gado har ku yi barci"], answer: 0, why: "Kashe allo kafin kwanciya yana taimaka muku ku yi barci." },
          { objective: "O5", q: "Gwiwarku tana da zafi mai kaifi da kumburi bayan atisaye. Me za ku yi?", options: ["Ku yi watsi da shi", "Ku tambayi AI magani", "Ku faɗa wa mai kula da lafiyar 'yan wasa", "Ku ƙara gudu don ya saki"], answer: 2, why: "Zafi mai kaifi da kumburi suna buƙatar ƙwararre." },
          { objective: "O5", q: "Abokin wasa yana jin jiri kuma \"ba daidai ba\" bayan bugun kai. Me ya kamata ya faru?", options: ["Ya ci gaba da wasa", "Ya ɗan huta ya koma wasa", "Ya tambayi manhaja", "Ya daina wasa a faɗa wa ma'aikata"], answer: 3, why: "Yana iya zama raunin ƙwaƙwalwa (concussion): a tsaya a faɗa wa mai horarwa ko mai kula da lafiyar 'yan wasa." },
          { objective: "O6", q: "Wa ya kamata ya duba tsarin hutawa da AI ya rubuta muku?", options: ["Wani wurin sharhi a intanet", "Masanin abinci, mai kula da lafiyar 'yan wasa ko likita", "AI ɗin kuma", "Babu kowa"], answer: 1, why: "Ƙwararre zai iya daidaita tsarin da jikinku da wasanku." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Abinci da Hutawa ga 'Yan Wasa tare da AI",
    questions: [
      { objective: "O1", q: "Wane abinci ne galibi protein?", options: ["Shinkafa", "Tuffa", "Ƙwai", "Burodi"], answer: 2, why: "Ƙwai abincin protein ne." },
      { objective: "O1", q: "Manyan sassa uku na faranti mai daidaito su ne:", options: ["Carbohydrates, protein, 'ya'yan itace da kayan lambu", "Alewa, lemon kwalba, guntun dankali (chips)", "Protein kawai", "Kayan lambu kawai"], answer: 0, why: "Waɗannan sassa uku suna ba da kuzari, gyaran jiki da bitamin." },
      { objective: "O1", q: "Ranakun atisaye mai wuya yawanci suna buƙatar:", options: ["Ƙarin abinci", "Tsallake abinci", "Babu ruwa", "Ɗan abin ci kawai"], answer: 0, why: "Ƙarin atisaye yawanci yana nufin ana buƙatar ƙarin kuzari." },
      { objective: "O1", q: "Abinci ko yadda kuke ganin jikinku yana damun ku. Ya kamata ku:", options: ["Daina cin abinci", "Ɓoye shi", "Yi magana da wanda kuka amince da shi, da mai kula da lafiyar 'yan wasa ko likitanku", "Tambayi AI tsarin abinci na rage nauyi"], answer: 2, why: "Waɗannan damuwoyi sun cancanci taimako na gaske." },
      { objective: "O2", q: "A ranar wasa, ku ci:", options: ["Sabon abinci", "Abincin da kuka saba da shi", "Babu komai duk yini", "Sabon supplement"], answer: 1, why: "Abincin da kuka saba da shi ya fi aminci." },
      { objective: "O2", q: "Yaushe ya kamata ku sha ruwa?", options: ["Lokacin wasa kawai", "Kada ku taɓa sha kafin wasa", "Sai an ce ku sha kawai", "A duk yini, fiye da haka a cikin zafi"], answer: 3, why: "Shan ruwa al'ada ce ta duk yini." },
      { objective: "O2", q: "Wanne ne zai iya zama alamar kuna buƙatar ƙarin ruwa?", options: ["Jin hutu", "Tunani a sarari", "Fitsari mai duhu da ciwon kai", "Barci mai kyau"], answer: 2, why: "Fitsari mai duhu, ciwon kai da ƙanƙarar tsoka na iya nuna ruwa ya yi ƙasa a jiki." },
      { objective: "O2", q: "Bayan atisaye mai wuya, abin ci na hutawa yana da:", options: ["Ruwa kawai", "Alewa kawai", "Babu komai", "Carbohydrates da protein"], answer: 3, why: "Carbohydrates suna dawo da kuzari; protein yana taimaka wa gyaruwa." },
      { objective: "O3", q: "Me ya kamata ku ba AI don samun ra'ayoyin abinci masu amfani?", options: ["Jadawalinku, kasafin kuɗinku da kicin ɗinku", "Bayanan asibitinku", "Kalmar sirrinku", "Katin bankinku"], answer: 0, why: "Waɗannan bayanai suna sa ra'ayoyin su dace da rayuwarku." },
      { objective: "O3", q: "Wanne ne bai kamata ku tambayi AI ba?", options: ["Girke-girken microwave", "Yawan kalori don rage nauyi", "Jerin cefane", "Ra'ayoyin abinci da wake"], answer: 1, why: "Yawan kalori ya dogara da lafiyarku; ku tambayi masanin abinci." },
      { objective: "O3", q: "Ta yaya za ku faɗa wa AI game da allergy na abinci?", options: ["Ta saka fayil ɗin asibitinku", "Ta rubuta bayanan likitanku", "Da kalmomi na gama-gari, kamar \"babu gyaɗa\"", "Kada ku ambace shi"], answer: 2, why: "Kalmomi na gama-gari suna kawo ra'ayoyi masu aminci ba tare da bayyana bayanan asibiti ba." },
      { objective: "O3", q: "Bayan AI ya yi jerin cefane, ya kamata ku:", options: ["Duba farashi a shagonku", "Amince da farashin", "Sayi komai sau biyu", "Saka shi a intanet"], answer: 0, why: "AI ba zai iya sanin ainihin farashin shagonku ba." },
      { objective: "O3", q: "Supplements suna da haɗari saboda:", options: ["Koyaushe haramtattu ne a doka", "Kyauta ne", "Masu horarwa ne ke sayar da su", "FDA (hukumar abinci da magunguna ta Amurka) ba ta duba su kafin a sayar, kuma wasu suna da sinadaran da aka hana"], answer: 3, why: "USADA (hukumar yaƙi da ƙara kuzari ta haramtacciyar hanya a wasanni ta Amurka) tana gargaɗi game da supplements masu gurɓatawa da masu lakabin ƙarya." },
      { objective: "O4", q: "Wanne ne ke taimaka muku ku yi barci?", options: ["Caffeine da dare", "Ɗaki mai sanyi da duhu", "Duba waya a gado", "Lokacin kwanciya daban kowane dare"], answer: 1, why: "Ɗaki mai sanyi da duhu yana taimaka wa barci." },
      { objective: "O4", q: "Kullum kuna jin gajiya sosai ko bayan barci. Ya kamata ku:", options: ["Ƙara shan abubuwan sha masu kuzari", "Yi magana da likitanku", "Yi watsi da shi", "Ƙara atisaye"], answer: 1, why: "Gajiya mai ɗorewa dalili ne na ganin likita." },
      { objective: "O5", q: "Ranakun hutu:", options: ["Na lalaci ne", "An hana su", "Na 'yan wasan da suka ji rauni ne kawai", "Ɓangare ne na atisaye"], answer: 3, why: "Jikinku yana sabawa kuma yana ƙara ƙarfi a ranakun hutu." },
      { objective: "O5", q: "Wanne ne yake kama da ciwon tsoka na yau da kullum?", options: ["Gajiyar tsoka marar kaifi da ke ɓacewa cikin kwana ɗaya ko biyu", "Zafi mai kaifi a gaɓa", "Kumburi da dingishi", "Zafin da ke ci gaba da tsananta"], answer: 0, why: "Ciwon tsoka na yau da kullum marar kaifi ne kuma yana ɓacewa." },
      { objective: "O5", q: "A ina za ku koyi alamun raunin ƙwaƙwalwa (concussion) kyauta?", options: ["Wani hoton barkwanci na intanet", "Tallar abin sha na 'yan wasa", "CDC HEADS UP", "Babu inda"], answer: 2, why: "CDC tana ba da horon HEADS UP kyauta." },
      { objective: "O6", q: "Kafin ku saka tsarinku a AI, ku cire:", options: ["Lokutan atisaye", "Kasafin kuɗinku", "Abincin da kuka fi so", "Bayanan lafiya na sirri"], answer: 3, why: "Bayanan lafiya suna zama a sirri." },
      { objective: "O6", q: "Tsarin da ya kamata ku bi shi ne:", options: ["Daftarin farko na AI", "Wanda aka gyara tare da masanin abinci, mai kula da lafiyar 'yan wasa ko likita", "Tsarin wani shahararre a intanet", "Tsarin abokin hamayyarku"], answer: 1, why: "Ƙwararre yana daidaita tsarin da ku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      4,
      8,
      9,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Abinci mai daidaito",
        objective: "O1",
        notYet: "Abinci ya tsallake wani rukunin abinci gaba ɗaya, ko babu abinci kewaye da atisaye.",
        meets: "Kowane babban abinci yana da carbohydrates, protein, da 'ya'yan itace ko kayan lambu.",
        exceeds: "An tsara ƙarin abinci a ranaku masu wuya, kuma abincin ya ƙunshi abincin da ɗan wasan ya riga ya so."
      },
      {
        name: "Tsarin ranar wasa",
        objective: "O2",
        notYet: "Babu lokuta, babu tsarin shan ruwa, ko akwai sabon abinci a ranar wasa.",
        meets: "Abincin da aka saba da shi 'yan sa'o'i kafin wasa, ɗan abin ci kusa da farawa, ruwa a duk yini da abin ci na hutawa bayan wasa.",
        exceeds: "Ya haɗa da tsarin zafi da alamun gargaɗin da ke nufin a tsaya a faɗa wa ma'aikata."
      },
      {
        name: "Jerin cefane bisa kasafin kuɗi",
        objective: "O3",
        notYet: "Babu jerin cefane, ko tsarin yana neman AI ya ba da yawan kalori ko yawan supplements.",
        meets: "Jerin cefane da ya dace da kasafin kuɗi da kicin da aka faɗa, tare da allergy da aka bayyana da kalmomi na gama-gari.",
        exceeds: "An duba farashi a shagon ɗan wasan, kuma an gyara jerin."
      },
      {
        name: "Al'adar barci",
        objective: "O4",
        notYet: "Babu lokacin tashi ko na kwanciya na yau da kullum.",
        meets: "Lokacin tashi, lokacin kwanciya da lokacin kashe allo na yau da kullum da suka dace da jadawalin.",
        exceeds: "An rubuta sa'o'in barci na mako guda, kuma an gyara al'adar kewaye da atisaye na sassafe ko wasannin dare."
      },
      {
        name: "Binciken ƙwararre",
        objective: "O6",
        notYet: "Ba a nuna tsarin ga ƙwararre ba, ko yana da bayanan lafiya na sirri.",
        meets: "An cire bayanan sirri, an nuna tsarin ga masanin abinci, mai kula da lafiyar 'yan wasa ko likita, kuma an sabunta shi bisa shawararsu.",
        exceeds: "Ɗan wasan ya rubuta abin da aka canja da dalilin haka."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala aikin ƙarshe kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Masu koyo da suka ce suna bin tsarin abinci da barcin da aka duba kwanaki 30 bayan haka (binciken biyo baya)",
      "Masu koyo da suka ce sun yi magana da masanin abinci, mai kula da lafiyar 'yan wasa ko likita game da tsarinsu",
      "Masu koyo da suka ce sun faɗa wa ma'aikata game da zafi mai kaifi, alamun rashin lafiya saboda zafi ko bugun kai, maimakon su ci gaba da wasa"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Jadawalin atisaye da wasanninku, kasafin kuɗin abinci na mako da bayanin kicin ɗinku",
      "Hanyar tuntuɓar ƙwararren masanin abinci, mai kula da lafiyar 'yan wasa, cibiyar lafiyar ɗalibai ko likita",
      "Kusan minti 60, da lokacin ganawa da ƙwararren"
    ],
    facilitatorNotes: [
      "Ku faɗa a sarari cewa wannan ilimi ne na gama-gari; kada ku ba da shawarar kalori, nauyi ko supplements ta musamman ga kowane mutum a gaban ƙungiya.",
      "Ku yi hankali da batun nauyi da yadda mutane ke ganin jikinsu: kada ku taɓa auna nauyin 'yan wasa ko kwatanta su, kuma ku san wanda za ku tura wani zuwa gare shi idan yana fama.",
      "Ku shirya hanyar samun ƙwararren masanin abinci, mai kula da lafiyar 'yan wasa ko cibiyar lafiyar ɗalibai kafin aikin ƙarshe, don kowane ɗan wasa ya sami a duba tsarinsa.",
      "Ku sake duba alamun rashin lafiya saboda zafi da na bugun kai tare da ƙungiyar gaba ɗaya, kuma ku tabbata 'yan wasa sun san wanda za su faɗa wa.",
      "Ku mutunta kasafin kuɗin abinci, allergy da dokokin abinci na al'ada ko addini lokacin da kuke raba misalan abinci."
    ]
  }
};
