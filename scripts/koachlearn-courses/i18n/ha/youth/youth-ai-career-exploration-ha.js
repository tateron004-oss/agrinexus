"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-ai-career-exploration.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-ai-career-exploration-ha",
  lang: "ha",
  translationOf: "youth-ai-career-exploration",
  category: "Youth",
  name: "AI da Binciken Sana'o'i",
  skills: "Nemo sana'o'in da suka dace da abin da kuke so, Binciken sana'a a shafukan hukuma, Ganin yadda AI ke canja ayyuka, Yin shirin hanyar sana'a, Shiryawa don aikin farko",
  outcome: "amfani da gwajin abin da kuke so kyauta, mataimakin AI da shafukan sana'a na hukuma don zaɓar sana'o'i biyu da suka dace da ku, duba albashinsu, horonsu da makomarsu, da yin shiri mataki-mataki daga makarantar sakandare zuwa aikinku na farko a wannan fanni.",
  about: [
    "Wannan kwas ɗin na matasa ne masu shekaru kusan 13 zuwa 18 da ke tambayar kansu \"Me zan iya zama?\" Ba sai kun riga kun sani ba. Wannan kwas ɗin zai taimake ku ku bincika.",
    "Za ku yi gwajin abin da kuke so kyauta, ku yi amfani da AI don tunanin sana'o'in da suka dace da abin da kuke so (wasannin bidiyo, waƙa, wasanni, taimakon mutane, gina abubuwa), ku duba gaskiyar bayanai a shafukan sana'a na gwamnati na hukuma, ku ga yadda AI ke canja aiki, sannan ku gina shirin da za ku iya fara wannan shekarar.",
    "Ku duba ƙa'idar shekaru ta kowane kayan aiki da ƙa'idojin AI na makarantarku, kuma ku sanar da iyaye ko mai kula da ku kafin ku yi rajista a ko'ina. Mai ba da shawara a makaranta (school counselor) abokin aiki ne mai kyau a wannan kwas ma. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\"."
  ],
  finalTask: "Ku yi shirin sana'a mai shafi ɗaya don sana'a ɗaya da kuke son sani: dalilin da yasa ta dace da abin da kuke so, horonta da aka saba, albashi da makomar aiki daga shafin hukuma, hanya ɗaya da ake amfani da AI a wannan aikin, da matakai uku da za ku iya ɗauka a wannan shekarar makaranta (darasi, ƙungiya ko wani aiki, da mutumin da za ku yi magana da shi).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa masu shekaru kusan 13 zuwa 18 a Amurka da ke tambayar kansu me za su iya zama, har da waɗanda ba su da wani tunani tukuna da waɗanda ke tunanin sana'ar hannu, jami'a ko aikin farko.",
    startingPoint: "Sun san wasu abubuwan da suke so kuma wataƙila suna da tunanin aikin wucin gadi, amma ba kasafai suke amfani da gwajin abin da suke so, shafin sana'a na hukuma ko shiri mataki-mataki ba. Da yawa suna ɗaukar bayanan sana'a daga abokai, kafofin sada zumunta ko AI ba tare da dubawa ba.",
    gap: "Ba tare da bayanai na gaskiya ba, matasa suna zaɓa ko ƙin sana'o'i bisa hasashe game da albashi da horo, kuma suna rasa darussa da shirye-shiryen da za su iya farawa yanzu. Koyon bincike da AI da duba shafukan hukuma yana taimaka musu su zaɓi hanya kuma su ɗauki matakai na gaske a wannan shekarar makaranta.",
    constraints: [
      "Iyakar shekaru da sa hannun iyaye ko mai kula don sabbin asusu, ayyuka da aikin sa kai",
      "Ƙa'idojin AI na makaranta; mai ba da shawara a makaranta abokin aiki ne mai muhimmanci",
      "Albashi, horo da ƙa'idojin aikin matasa suna canjawa kuma sun bambanta daga jiha zuwa jiha; masu koyo suna duba shafukan hukuma",
      "Sirri: babu adireshi, lambar waya ko wasu bayanan sirri a kayan AI",
      "Na'urori: waya, kwamfutar makaranta ko ta ɗakin karatu; gajerun darussa"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da gwajin abin da kuke so kyauta kamar wanda ke mynextmove.org", action: "jera manyan fannonin da kuke so da ayyuka uku da kuka fi jin daɗi", standard: "kuna amsa gwajin da gaskiya kuma kuna rubuta sakamakon" },
    { id: "O2", condition: "Idan kuna da abubuwan da kuke so da mataimakin AI da aka ba ku izinin amfani da shi", action: "samar da jerin sana'o'i masu hanyoyin horo daban-daban da zaɓar biyu don bincike", standard: "ba tare da bayar da bayanan sirri ba, kuma kuna ɗaukar jerin a matsayin ra'ayoyin da za a duba" },
    { id: "O3", condition: "Ga kowace sana'a daga cikin biyun", action: "duba albashin da aka saba, horo da makomar aiki a bls.gov/ooh ko mynextmove.org", standard: "kuna amincewa da shafin hukuma duk inda ya saɓa da AI" },
    { id: "O4", condition: "Ga sana'a ɗaya da kuke so", action: "bayyana hanya ɗaya da ake amfani da AI a wannan aikin da ƙwarewar ɗan adam biyu da har yanzu suke da muhimmanci", standard: "an tabbatar da shi da mutum na gaske ko majiya amintacciya" },
    { id: "O5", condition: "Idan kuna da ajinku da sana'ar da kuke nufi", action: "tsara hanya mataki-mataki daga yanzu zuwa aikin farko, mai matakai uku na wannan shekarar makaranta", standard: "aƙalla mataki ɗaya an tabbatar da shi da mai ba ku shawara ko shafin hukuma" },
    { id: "O6", condition: "Kafin aikin farko, aikin sa kai ko bin ma'aikaci don kallon aiki", action: "duba ƙa'idojin aikin matasa na tarayya da na jiha da rubuta gabatarwar kanku mai jimloli uku", standard: "kuna bin ƙa'idar da ta fi tsauri kuma kuna gwada faɗin gabatarwar da babbar murya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Nemo sana'o'in da suka dace da ku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Farawa da abin da kuke so",
          minutes: 5,
          goal: "Yi gwajin abin da kuke so kyauta ku jera manyan abubuwan da kuke so.",
          text: [
            "Neman sana'a mai kyau yana farawa da ku: abin da kuke jin daɗi, abin da kuka iya, da abin da yake da muhimmanci a gare ku. Wataƙila kuna son gyara abubuwa, zane, shirya taruka, taimakon abokai da matsalolinsu, ko gano yadda wasa yake aiki.",
            "My Next Move shafin sana'a ne kyauta daga Ma'aikatar Ƙwadago ta Amurka (U.S. Department of Labor). Gwajinsa na abin da kuke so (interest profiler) yana tambayar ku game da irin ayyukan da za ku iya jin daɗi, sannan ya ba da shawarar sana'o'in da suka dace. Mai ba ku shawara a makaranta yana iya samun wasu gwaje-gwaje ma.",
            "Ku rubuta sakamakonku da ayyuka uku da kuka fi jin daɗi. Waɗannan su ne alamominku na farko."
          ],
          steps: ["Ku je mynextmove.org.", "Ku buɗe gwajin abin da kuke so ku amsa da gaskiya.", "Ku rubuta manyan fannonin da kuke so.", "Ku ƙara ayyuka uku da kuka fi jin daɗi."],
          words: [["Gwajin abin da kuke so (interest profiler)", "gwaji da ke haɗa abin da kuke so da irin ayyuka."], ["Sana'a (career)", "irin aikin da kuke yi na dogon lokaci, sau da yawa da ƙwarewar da ke ƙaruwa."]],
          sources: [{ name: "My Next Move (Ma'aikatar Ƙwadago ta Amurka)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Ku fara da kanku", bullets: ["Abin da kuke jin daɗi", "Abin da kuka iya", "Abin da yake da muhimmanci a gare ku"] },
            { title: "Ku yi gwajin abin da kuke so kyauta", bullets: ["My Next Move (mynextmove.org)", "Kyauta ne, daga Ma'aikatar Ƙwadago ta Amurka", "Mai ba ku shawara yana iya samun wasu"] },
            { title: "Ku rubuta alamominku", bullets: ["Manyan fannonin da kuke so", "Ayyuka uku da kuke so ƙwarai"] }
          ],
          tryIt: "Ku yi gwajin abin da kuke so a mynextmove.org (ko wanda mai ba ku shawara ya ba ku). Ku rubuta manyan fannonin da kuke so da abubuwa uku da kuke son yi ƙwarai.",
          youCanNow: "bayyana abubuwan da kuke so ta hanyar da za ta taimaka muku neman sana'o'i.",
          quickCheck: [
            { objective: "O1", q: "Mene ne mataki na farko a neman sana'a mai kyau?", options: ["Zaɓar aikin da ya fi biyan kuɗi", "Duba abin da kuke jin daɗi, abin da kuka iya da abin da kuka damu da shi", "Zaɓar abin da abokanku suka zaɓa", "Neman aiki nan take"], answer: 1, why: "Neman sana'a mai kyau yana farawa da ku: abin da kuke so, ƙarfinku da abin da kuke darajawa." },
            { objective: "O1", q: "Kun gama gwajin abin da kuke so a mynextmove.org. Me za ku yi a gaba?", options: ["Ku rufe shi ku manta da sakamakon", "Ku sake yi har ya faɗi abin da kuke so", "Ku ba shafin adireshin gidanku", "Ku rubuta manyan fannonin da kuke so da ayyuka uku da kuke so ƙwarai"], answer: 3, why: "Sakamakonku da ayyukan da kuka fi so su ne alamominku na farko." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tunanin sana'o'i tare da AI",
          minutes: 5,
          goal: "Yi amfani da AI don mayar da abubuwan da kuke so zuwa jerin sana'o'in da za ku bincika.",
          text: [
            "Yanzu ku ba mataimakin AI da aka ba ku izinin amfani da shi alamominku: \"Shekaruna 15. Ina son wasannin bidiyo, zane da taimakon ƙananan yara. Ka ba ni shawarar sana'o'i 10 da suka haɗa waɗannan, daga waɗanda ke buƙatar gajeren shirin horo zuwa waɗanda ke buƙatar jami'a.\"",
            "Ku yi tambayoyin biyo baya: \"Waɗanne daga cikin waɗannan ke aiki da AI?\" \"Waɗanne zan iya gwadawa a makarantar sakandare?\" \"Ka bayyana yadda rana take a sana'a ta 3.\"",
            "AI yana da kyau wajen ba da ra'ayoyi amma yana iya yin kuskure game da albashi, horo da yawan ayyuka. Ku ɗauki jerinsa a matsayin ra'ayoyin da za a duba, ba gaskiya ba."
          ],
          steps: ["Ku ba AI rukunin shekarunku da abubuwan da kuke so (babu bayanan sirri).", "Ku nemi sana'o'i 10 masu hanyoyin horo daban-daban.", "Ku yi tambayoyin biyo baya game da yadda rana take da matakan makarantar sakandare.", "Ku zaɓi biyu don bincike."],
          words: [["Hanyar horo", "karatu ko atisayen da kuke buƙata don aiki, kamar takardar shaida (certificate), koyon sana'a (apprenticeship) ko digiri na jami'a."], ["Koyon sana'a (apprenticeship)", "aiki mai albashi inda kuke koyon sana'ar hannu yayin da kuke aiki."]],
          slides: [
            { title: "Ku ba AI alamominku", bullets: ["Abubuwan da kuke so da rukunin shekarunku", "Ku nemi sana'o'i 10", "Ku haɗa gajeren horo da hanyoyin jami'a"] },
            { title: "Ku yi tambayoyin biyo baya", bullets: ["\"Yaya rana take a wannan aikin?\"", "\"Me zan iya gwadawa a makarantar sakandare?\""] },
            { title: "Ra'ayoyi ne, ba gaskiya ba", bullets: ["AI yana iya kuskure game da albashi da horo", "Ku zaɓi sana'o'i biyu don dubawa"] }
          ],
          tryIt: "Ku ba mataimakin AI abubuwan da kuke so ku nemi sana'o'i 10 masu hanyoyin horo daban-daban. Ku tambayi yadda rana take a biyu daga cikinsu, sannan ku zaɓi biyun da kuka fi so.",
          youCanNow: "amfani da AI don tunanin sana'o'in da suka dace da abubuwan da kuke so.",
          quickCheck: [
            { objective: "O2", q: "Yaya ya kamata ku ɗauki jerin sana'o'i daga AI?", options: ["A matsayin ra'ayoyin da za a duba", "A matsayin gaskiya game da albashi", "A matsayin shawarar ƙarshe", "A matsayin tayin aiki"], answer: 0, why: "AI yana da kyau wajen ra'ayoyi amma yana iya kuskure game da albashi, horo da yawan ayyuka." },
            { objective: "O2", q: "Kuna son waƙa da gyara abubuwa. Wane prompt ne ya fi taimakawa?", options: ["\"ayyuka\"", "\"Ka ba ni adireshina da aiki.\"", "\"Ina son waƙa da gyara abubuwa. Ka ba ni shawarar sana'o'i 10 masu hanyoyin horo daban-daban.\"", "\"Wane aiki ne ya fi kyau?\""], answer: 2, why: "Faɗin abubuwan da kuke so da neman hanyoyin horo daban-daban yana kawo ra'ayoyi masu amfani." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Duba gaskiya a shafukan sana'a na hukuma",
          minutes: 5,
          goal: "Duba albashin sana'a, horonta da makomar aikinta a shafin hukuma.",
          text: [
            "Occupational Outlook Handbook (Littafin Makomar Sana'o'i) daga Ofishin Ƙididdigar Ƙwadago ta Amurka (U.S. Bureau of Labor Statistics, bls.gov/ooh) jagora ne na hukuma kyauta game da ɗaruruwan ayyuka. Ga kowanne yana nuna albashin da aka saba, karatu da horon da aka saba, da yawan ayyukan da ake sa ran za su kasance a nan gaba.",
            "My Next Move ma yana nuna abin da mutane ke yi a kowane aiki, ƙwarewar da suke amfani da ita da horon da suke buƙata. Albashi yana canjawa da lokaci kuma daga wuri zuwa wuri, don haka koyaushe ku duba lambobin yanzu maimakon amincewa da lambar daga AI ko aboki.",
            "Ku kwatanta abin da AI ya faɗa muku da abin da shafin hukuma ya faɗa. Inda suka saɓa, ku amince da shafin hukuma."
          ],
          steps: ["Ku buɗe bls.gov/ooh ko mynextmove.org.", "Ku nemi sana'arku.", "Ku rubuta albashi, horon da aka saba da makomar aiki.", "Ku kwatanta da abin da AI ya faɗa ku amince da shafin hukuma."],
          words: [["Albashin tsakiya (median pay)", "albashin tsakiya: rabin ma'aikata suna samun fiye da shi, rabi suna samun ƙasa da shi."], ["Makomar aiki (job outlook)", "yawan ayyukan da ake sa ran za su kasance a nan gaba."]],
          sources: [{ name: "Occupational Outlook Handbook (Ofishin Ƙididdigar Ƙwadago ta Amurka)", url: "https://www.bls.gov/ooh/" }, { name: "My Next Move (Ma'aikatar Ƙwadago ta Amurka)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Jagororin sana'a na hukuma", bullets: ["bls.gov/ooh: albashi, horo, makomar aiki", "mynextmove.org: ayyuka, ƙwarewa, horo"] },
            { title: "Ku duba lambobin yanzu", bullets: ["Albashi yana canjawa da lokaci da wuri", "Kada ku amince da lamba daga AI kaɗai"] },
            { title: "Ku kwatanta ku yanke shawara", bullets: ["AI da shafin hukuma", "Idan suka saɓa, ku amince da shafin hukuma"] }
          ],
          tryIt: "Ku duba sana'o'inku biyu a bls.gov/ooh ko mynextmove.org. Ku rubuta horon da aka saba, albashi da makomar aiki ga kowacce, ku kuma lura da abu ɗaya da AI ya faɗa daban.",
          youCanNow: "binciken gaskiyar bayanan sana'a a shafin hukuma.",
          quickCheck: [
            { objective: "O3", q: "Me Occupational Outlook Handbook a bls.gov/ooh yake nunawa?", options: ["Sharhin wasannin bidiyo", "Makin makaranta", "Albashin shahararrun mutane", "Albashin da aka saba, horo da makomar aiki na ɗaruruwan ayyuka"], answer: 3, why: "Jagora ne na hukuma kyauta game da ayyuka daga Ofishin Ƙididdigar Ƙwadago ta Amurka." },
            { objective: "O3", q: "Aboki ya ce wata sana'a tana biyan kuɗi da yawa, AI kuma ya ba da wata lamba daban. Me za ku yi?", options: ["Ku duba albashin yanzu a shafin hukuma", "Ku amince da abokinku", "Ku ɗauki matsakaicin lambobin biyu", "Ku amince da AI"], answer: 0, why: "Albashi yana canjawa da lokaci da wuri, don haka ku duba lambar yanzu a shafin hukuma." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Nemo sana'o'in da suka dace da ku",
        questions: [
          { objective: "O1", q: "Me gwajin abin da kuke so (interest profiler) yake yi?", options: ["Yana nemo kalmar sirrinku", "Yana haɗa abin da kuke so da irin ayyuka", "Yana ba ku aiki", "Yana ba aikin gidanku maki"], answer: 1, why: "Yana ba da shawarar sana'o'i bisa abubuwan da kuke so." },
          { objective: "O1", q: "Wane ne ke bayar da My Next Move?", options: ["Kamfanin wasannin bidiyo", "Manhajar sada zumunta", "Wurin cin abinci na makarantarku", "Ma'aikatar Ƙwadago ta Amurka"], answer: 3, why: "Ma'aikatar Ƙwadago ta Amurka ce ke ɗaukar nauyinsa." },
          { objective: "O2", q: "Wane prompt ne ya fi kyau don tunanin sana'o'i?", options: ["\"Ina son wasanni, zane da taimakon yara. Ka ba ni shawarar sana'o'i 10 masu hanyoyin horo daban-daban.\"", "\"ayyuka\"", "\"ba ni aiki\"", "\"mene ne aiki\""], answer: 0, why: "Yana faɗin abubuwan da ake so kuma yana neman iri-iri." },
          { objective: "O3", q: "AI ya ce wani aiki yana biyan wani adadi. Ya kamata ku:", options: ["Yarda da shi", "Faɗa wa kowa", "Duba albashin yanzu a shafin hukuma", "Zaɓi wannan aikin nan take"], answer: 2, why: "AI yana iya yin kuskure; shafukan hukuma suna da lambobin yanzu." },
          { objective: "O3", q: "Mene ne albashin tsakiya (median pay)?", options: ["Mafi girman albashi", "Mafi ƙanƙantar albashi", "Albashin tsakiya: rabi suna samun fiye, rabi suna samun ƙasa", "Albashin masu koyon aiki kawai"], answer: 2, why: "Median shi ne wurin tsakiya." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsara hanyarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yadda AI ke canja aiki",
          minutes: 5,
          goal: "Bayyana hanya ɗaya da ake amfani da AI a sana'ar da kuke so da ƙwarewar ɗan adam da har yanzu suke da muhimmanci.",
          text: [
            "AI yana canja ayyuka da yawa. Ma'aikatan jinya suna amfani da shi don taimakon bayanan marasa lafiya, makanikai suna amfani da shi don nemo matsalolin mota, masu zane suna amfani da shi don gwada ra'ayoyi da sauri, kamfanonin wasanni kuma suna amfani da shi don gwada matakan wasa. AI yana yin wasu ayyuka; sababbin ayyuka kuma suna bayyana.",
            "Ƙwarewar ɗan adam ta fi muhimmanci yanzu: magana da mutane, warware sababbin matsaloli, ƙirƙira, zama amintacce, da sanin lokacin da AI ya yi kuskure.",
            "Ku tambayi AI: \"Yaya ake amfani da AI a yau a [sana'a]? Waɗanne ƙwarewar ɗan adam ne har yanzu suka fi muhimmanci?\" Sannan ku tabbatar da abin da ya faɗa da mutum na gaske a wannan aikin ko shafin labarai ko na masana'antu amintacce."
          ],
          words: [["Sarrafa kai (automation)", "lokacin da injuna ko manhajoji ke yin ayyukan da mutane suka saba yi."], ["Ƙwarewar mu'amala (soft skills)", "ƙwarewar hulɗa da mutane kamar sadarwa, aiki tare da kuma zama abin dogaro."]],
          slides: [
            { title: "AI yana canja ayyuka", bullets: ["Ma'aikatan jinya, makanikai, masu zane, masu gwada wasanni", "Wasu ayyuka suna komawa ga AI; sababbi suna bayyana"] },
            { title: "Ƙwarewar ɗan adam ta fi muhimmanci", bullets: ["Magana da mutane", "Warware sababbin matsaloli", "Ƙirƙira da zama amintacce", "Gane lokacin da AI ya yi kuskure"] },
            { title: "Ku bincika don sana'arku", bullets: ["Ku tambayi AI yadda ake amfani da shi", "Ku tabbatar da mutum na gaske ko shafi amintacce"] }
          ],
          tryIt: "Ku tambayi AI yadda ake amfani da AI a ɗaya daga cikin sana'o'inku biyu da waɗanne ƙwarewar ɗan adam suka fi muhimmanci. Ku rubuta amfani ɗaya na AI da ƙwarewar ɗan adam biyu, da tambaya ɗaya da za ku yi wa mutum na gaske a wannan aikin.",
          youCanNow: "bayyana yadda AI ke shafar sana'a da waɗanne ƙwarewar ɗan adam ke da muhimmanci har yanzu.",
          quickCheck: [
            { objective: "O4", q: "Wace ƙwarewar ɗan adam ce ke ƙara muhimmanci yayin da AI ke yaɗuwa?", options: ["Rubutu da sauri a madannai", "Magana da mutane da warware sababbin matsaloli", "Haddace lambobin waya", "Kwafar amsoshi"], answer: 1, why: "Sadarwa, ƙirƙira, zama amintacce da sanin lokacin da AI ya yi kuskure sun fi muhimmanci yanzu." },
            { objective: "O4", q: "AI ya faɗa muku yadda ake amfani da shi a aikin jinya. Ta yaya za ku tabbatar?", options: ["Ku sake tambayar AI ɗin", "Ku ɗauka cewa daidai ne", "Ku saka shi a intanet", "Ku tambayi ma'aikaciyar jinya ta gaske ko ku karanta shafin labarai ko na masana'antu amintacce"], answer: 3, why: "Ku tabbatar da abin da AI ya faɗa da mutum na gaske a aikin ko majiya amintacciya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gina hanya daga makarantar sakandare",
          minutes: 5,
          goal: "Yi shiri mataki-mataki daga yanzu zuwa aikin farko a wata sana'a.",
          text: [
            "Hanyar sana'a (career pathway) ita ce hanya daga inda kuke yanzu zuwa aikin da kuke so. Tana iya haɗawa da darussa, ƙungiyoyi, aikin sa kai, shirin lokacin bazara, takardar shaida, koyon sana'a, kwalejin al'umma (community college) ko jami'a.",
            "Ku tambayi AI: \"Ina aji na 10 kuma ina son zama mai aikin wutar lantarki (electrician). Ka yi mini hanya mataki-mataki daga yanzu zuwa aikina na farko, da abubuwan da zan iya yi a wannan shekarar.\" Sannan ku duba ƙa'idojin horo a shafukan hukuma, domin lasisi da shirye-shirye sun bambanta daga jiha zuwa jiha.",
            "Mai ba ku shawara a makaranta zai iya faɗa muku waɗanne darussa da shirye-shirye makarantarku take bayarwa, kamar ilimin sana'a da fasaha (CTE) ko karatun kwaleji tun a sakandare (dual enrollment)."
          ],
          steps: ["Ku faɗi ajinku da sana'ar da kuke nufi.", "Ku nemi AI ya ba ku hanya mataki-mataki mai ayyukan wannan shekarar.", "Ku duba ƙa'idojin horo da lasisi a shafukan hukuma.", "Ku tambayi mai ba ku shawara abin da makarantarku take bayarwa."],
          words: [["Hanyar sana'a (career pathway)", "matakan daga makaranta zuwa aiki a wani fanni."], ["CTE", "career and technical education (ilimin sana'a da fasaha): darussan makaranta da ke koyar da ƙwarewar aiki."], ["Dual enrollment", "ɗaukar darussan kwaleji yayin da kuke makarantar sakandare."]],
          slides: [
            { title: "Hanyar sana'a kamar titi ce", bullets: ["Daga inda kuke zuwa aikin da kuke so", "Darussa, ƙungiyoyi, shirye-shirye, horo"] },
            { title: "Ku nemi AI ya ba ku matakan", bullets: ["Ajinku da sana'ar da kuke nufi", "Abubuwan da za ku iya yi a wannan shekarar"] },
            { title: "Ku duba ku tambaya", bullets: ["Lasisi da shirye-shirye sun bambanta da jiha", "Ku tambayi mai ba ku shawara game da CTE da dual enrollment"] }
          ],
          tryIt: "Ku nemi AI ya ba ku hanya mataki-mataki zuwa ɗaya daga cikin sana'o'inku. Ku zaɓi abubuwa uku da za ku iya yi a wannan shekarar makaranta, ku tabbatar da ɗaya daga cikinsu da mai ba ku shawara ko shafin hukuma.",
          youCanNow: "gina shirin hanyar sana'a mai yiwuwa.",
          quickCheck: [
            { objective: "O5", q: "Mene ne hanyar sana'a (career pathway)?", options: ["Hanya daga inda kuke yanzu zuwa aikin da kuke so", "Darasi guda ɗaya", "Takardar neman aiki", "Jerin sunayen kamfanoni"], answer: 0, why: "Hanyar sana'a tana jera matakai, kamar darussa, shirye-shirye da horo, daga yanzu zuwa aiki." },
            { objective: "O5", q: "Hanyar da AI ya bayar ta ce kuna buƙatar wani lasisi. Me za ku yi?", options: ["Ku ɗauka cewa iri ɗaya ne a kowace jiha", "Ku tsallake lasisin", "Ku duba ƙa'idojin lasisi a shafin hukuma na jiharku", "Ku nemi AI ya ba ku lasisin"], answer: 2, why: "Lasisi da shirye-shirye sun bambanta daga jiha zuwa jiha, don haka ku duba shafukan hukuma." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Shiryawa don aikin farko",
          minutes: 5,
          goal: "Duba muhimman ƙa'idojin aikin matasa ku shirya gajeriyar gabatarwar kanku don aikin farko.",
          text: [
            "Aikin farko, aikin sa kai ko bin ma'aikaci don kallon aikinsa (job shadowing) yana taimaka muku gwada sana'a. A ƙarƙashin dokar tarayya, yawancin ayyuka suna buƙatar ku kai aƙalla shekaru 14. Idan kuna da shekaru 14 ko 15, sa'o'inku suna da iyaka, misali ba fiye da sa'o'i 3 a ranar makaranta ba, kuma tsakanin ƙarfe 7 na safe zuwa ƙarfe 7 na yamma kawai a yawancin shekara (har ƙarfe 9 na dare daga 1 ga Yuni zuwa Labor Day). A shekaru 16 da 17, dokar tarayya ba ta iyakance sa'o'i ba, amma babu wanda bai kai shekaru 18 ba da zai yi aiki mai haɗari.",
            "Jihohi da yawa suna da ƙa'idoji masu tsauri kuma suna iya neman izinin aiki (work permit). Idan dokokin tarayya da na jiha duka suna aiki, wadda ta fi tsauri ce ake bi. Ku duba ofishin ƙwadago na jiharku kuma ku yi magana da iyaye ko mai kula da ku.",
            "AI zai iya taimaka muku rubuta gajeriyar gabatarwar kanku: \"Shekaruna 15, ni amintacce ne, ina taimakawa wajen horar da ƙungiyar ƙwallon ƙafa ta ƙanina, kuma ina son koyon hidimar abokan ciniki.\" Ku gwada faɗinta da babbar murya. Kada ku saka adireshinku ko lambar wayarku a cikin AI."
          ],
          steps: ["Ku duba ƙa'idojin aikin matasa na tarayya da na jiha.", "Ku yi magana da iyaye ko mai kula da ku game da aiki ko aikin sa kai.", "Ku yi amfani da AI don rubuta daftarin gabatarwar kanku mai jimloli 3.", "Ku gwada faɗinta da babbar murya."],
          words: [["Izinin aiki (work permit)", "takardar da wasu jihohi ke buƙata kafin matashi ya yi aiki."], ["Bin ma'aikaci don kallon aiki (job shadowing)", "bin ma'aikaci na yini ɗaya don ganin yadda aikin yake."], ["Aiki mai haɗari", "aikin da ke da haɗari kuma ba a yarda wanda bai kai shekaru 18 ya yi shi ba."]],
          sources: [{ name: "U.S. Department of Labor Fact Sheet #43: Ƙa'idojin aikin yara a ayyukan da ba na noma ba", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" }, { name: "U.S. Department of Labor: Aikin yara da dokokin jihohi", url: "https://www.dol.gov/agencies/whd/child-labor" }],
          slides: [
            { title: "Ƙa'idojin aikin matasa na tarayya", bullets: ["Yawancin ayyuka: daga shekaru 14 zuwa sama", "14-15: sa'o'i 3 a mafi yawa a ranar makaranta", "14-15: ƙarfe 7 na safe zuwa 7 na yamma (9 na dare, 1 ga Yuni zuwa Labor Day)", "Babu aiki mai haɗari ga wanda bai kai 18 ba"] },
            { title: "Ku duba jiharku", bullets: ["Jihohi suna iya neman izinin aiki", "Ƙa'idar da ta fi tsauri ce ake bi", "Ku yi magana da iyaye ko mai kula da ku"] },
            { title: "Gabatarwar kanku don aikin farko", bullets: ["Jimloli 3 game da ku", "Ku rubuta daftari da AI, babu bayanan sirri", "Ku gwada faɗinta da babbar murya"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi shirin sana'arku mai shafi ɗaya: dalilin da yasa sana'ar ta dace da ku, horonta, albashi da makomar aiki daga shafin hukuma, hanya ɗaya da ake amfani da AI a cikinta, da matakai uku na wannan shekarar makaranta. Ku ƙara gabatarwar kanku mai jimloli 3 don aikin farko a ƙasa.",
          youCanNow: "bincika sana'o'i, duba gaskiyar bayanai, tsara hanyarku da gabatar da kanku don aikin farko.",
          quickCheck: [
            { objective: "O6", q: "A ƙarƙashin dokar tarayya, wane irin aiki ne babu wanda bai kai shekaru 18 ba da zai yi?", options: ["Ayyuka masu haɗari", "Aikin sa kai", "Bin ma'aikaci don kallon aiki", "Kula da yara na iyali"], answer: 0, why: "Dokar tarayya ta hana duk wanda bai kai shekaru 18 ba yin ayyuka masu haɗari." },
            { objective: "O6", q: "Kuna son AI ya taimaka wajen rubuta gabatarwar kanku don aikin farko. Me za ku bari a waje daga prompt ɗin?", options: ["Cewa ku amintattu ne", "Adireshinku da lambar wayarku", "Cewa kuna horar da ƙungiyar wasanni", "Abin da kuke son koya"], answer: 1, why: "Ku kiyaye bayanan sirri kamar adireshinku da lambar wayarku daga kayan AI." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsara hanyarku",
        questions: [
          { objective: "O4", q: "Wace ƙwarewa ce ke ƙara muhimmanci yayin da AI ke yaɗuwa?", options: ["Sadarwa da warware sababbin matsaloli", "Watsi da mutane", "Ƙin koyon sababbin kayan aiki", "Kwafar amsoshi"], answer: 0, why: "Ƙwarewar ɗan adam tana ƙara daraja yayin da AI ke yin ayyukan yau da kullum." },
          { objective: "O5", q: "Mene ne hanyar sana'a (career pathway)?", options: ["Hanyar tattaki a daji", "Taswirar wasan bidiyo", "Wani nau'in takardar bayanin aiki (CV)", "Matakan daga makaranta zuwa aiki a wani fanni"], answer: 3, why: "Hanyar sana'a ita ce hanya daga yanzu zuwa aikin." },
          { objective: "O5", q: "Wane ne zai iya faɗa muku waɗanne darussan CTE ko dual enrollment makarantarku take bayarwa?", options: ["Tallar da ke tasowa (pop-up)", "Mai ba ku shawara a makaranta", "Wata manhaja kawai", "Babu kowa"], answer: 1, why: "Masu ba da shawara sun san shirye-shiryen makarantar." },
          { objective: "O6", q: "A ƙarƙashin dokar tarayya, matashi mai shekaru 15 zai iya aiki a ranar makaranta har na:", options: ["Sa'o'i 3", "Sa'o'i 8", "Sa'o'i 12", "Babu iyaka"], answer: 0, why: "Iyakar tarayya ga masu shekaru 14-15 sa'o'i 3 ne a ranar makaranta." },
          { objective: "O6", q: "Ƙa'idar aikin matasa ta jiharku ta fi ta tarayya tsauri. Wacce ake bi?", options: ["Ƙa'idar tarayya", "Babu ko ɗaya", "Ƙa'idar da ta fi tsauri", "Duk wadda abokinku yake so"], answer: 2, why: "Idan duka suna aiki, dole a bi wadda ta fi tsauri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI da Binciken Sana'o'i",
    questions: [
      { objective: "O1", q: "Neman sana'a mai kyau yana farawa da:", options: ["Aikin da ya fi biyan kuɗi kawai", "Abin da kuke jin daɗi da abin da kuka iya", "Zaɓi ba da tunani ba", "Abin da baƙo ya faɗa"], answer: 1, why: "Abubuwan da kuke so su ne mafi kyawun alamomin farawa." },
      { objective: "O1", q: "mynextmove.org shi ne:", options: ["Shagon wasanni", "Shafin neman masoyi", "Manhajar sada zumunta", "Shafin sana'a kyauta daga Ma'aikatar Ƙwadago ta Amurka"], answer: 3, why: "Ma'aikatar Ƙwadago ce ke ɗaukar nauyinsa." },
      { objective: "O1", q: "Bayan gwajin abin da kuke so ya kamata ku:", options: ["Manta da sakamakon", "Saka kalmar sirrinku a intanet", "Bar makaranta", "Rubuta manyan fannonin da kuke so"], answer: 3, why: "Sakamakonku alamomi ne don mataki na gaba." },
      { objective: "O2", q: "Lokacin tunanin sana'o'i da AI, ku bar a waje:", options: ["Abubuwan da kuke so", "Bayanan sirri kamar adireshinku", "Rukunin shekarunku", "Darasin makaranta da kuka fi so"], answer: 1, why: "Kada ku taɓa saka bayanan sirri a cikin AI." },
      { objective: "O2", q: "Koyon sana'a (apprenticeship) shi ne:", options: ["Wasan bidiyo", "Gwaji ba tare da albashi ba", "Aiki mai albashi inda kuke koyon sana'ar hannu yayin da kuke aiki", "Ɗakin kwanan ɗalibai na kwaleji"], answer: 2, why: "Masu koyon sana'a suna samun kuɗi yayin da suke koyo." },
      { objective: "O2", q: "Ya kamata a ɗauki jerin sana'o'i daga AI a matsayin:", options: ["Ra'ayoyin da za a duba", "Gaskiya tabbatacciya", "Tayin aiki", "Makin makaranta"], answer: 0, why: "AI yana iya kuskure game da albashi da horo." },
      { objective: "O3", q: "bls.gov/ooh yana nuna wa kowane aiki:", options: ["Kalmomin waƙoƙi", "Albashi, horo da makomar aiki", "Makin wasanni", "Yanayi"], answer: 1, why: "Occupational Outlook Handbook yana ba da waɗannan bayanai." },
      { objective: "O3", q: "AI da bls.gov sun saɓa game da horon wani aiki. Ku amince da:", options: ["AI", "Babu ko ɗaya", "Hoton barkwanci (meme)", "Shafin hukuma"], answer: 3, why: "Shafukan hukuma an duba su kuma na yanzu ne." },
      { objective: "O3", q: "Makomar aiki (job outlook) tana nufin:", options: ["Yawan ayyukan da ake sa ran za su kasance a nan gaba", "Abin da ake gani daga ofis", "Kayan da kuke sawa zuwa aiki", "Yanayin zuciyar shugabanku"], answer: 0, why: "Makomar aiki tana magana ne game da yawan ayyuka a nan gaba." },
      { objective: "O4", q: "Sarrafa kai (automation) yana nufin:", options: ["Tuƙa mota", "Ƙa'idar makaranta", "Injuna ko manhajoji suna yin ayyukan da mutane suka saba yi", "Salon waƙa"], answer: 2, why: "Sarrafa kai yana mayar da ayyuka ga injuna." },
      { objective: "O4", q: "Wace ce ƙwarewar mu'amala (soft skill)?", options: ["Saurin rubutu a madannai kawai", "Mallakar kwamfutar tafi-da-gidanka", "Aiki tare", "Sanin kalmar sirri"], answer: 2, why: "Ƙwarewar mu'amala ƙwarewar hulɗa da mutane ce kamar aiki tare." },
      { objective: "O4", q: "Don tabbatar da abin da AI ya faɗa game da AI a wani aiki, kuna iya:", options: ["Tambayar mutum na gaske a wannan aikin", "Amincewa da shi gaba ɗaya", "Tambayar tallar da ke tasowa", "Tsallake dubawa"], answer: 0, why: "Mutanen da ke aikin sun san yadda yake aiki da gaske." },
      { objective: "O5", q: "Dual enrollment yana nufin:", options: ["Samun akwatunan ajiya biyu", "Wayoyi biyu", "Abincin rana biyu", "Ɗaukar darussan kwaleji yayin da kuke sakandare"], answer: 3, why: "Ɗalibai suna samun maki na kwaleji da wuri." },
      { objective: "O5", q: "Me yasa za a duba lasisi a shafukan hukuma?", options: ["AI koyaushe daidai yake", "Ƙa'idoji sun bambanta da jiha", "Ba sa canjawa", "Ba a buƙata"], answer: 1, why: "Ƙa'idojin horo da lasisi sun bambanta daga jiha zuwa jiha." },
      { objective: "O5", q: "Prompt mai kyau don hanyar sana'a ya haɗa da:", options: ["Ajinku da sana'ar da kuke nufi", "Kalmar sirrinku", "Adireshinku", "Babu komai"], answer: 0, why: "Aji da manufa suna bar AI ya yi shirin da ya dace." },
      { objective: "O6", q: "A ƙarƙashin dokar tarayya, masu shekaru 14 da 15 yawanci suna iya aiki ne kawai tsakanin:", options: ["Tsakar dare da ƙarfe 6 na safe", "Kowane lokaci", "Ƙarfe 7 na safe da 7 na yamma (9 na dare daga 1 ga Yuni zuwa Labor Day)", "Ranakun makaranta kawai"], answer: 2, why: "Waɗannan su ne iyakokin lokaci na tarayya." },
      { objective: "O6", q: "A ƙarƙashin dokar tarayya, wane ne ba zai yi ayyuka masu haɗari ba?", options: ["Waɗanda ba su kai shekaru 12 ba kawai", "Duk wanda bai kai shekaru 18 ba", "Manya", "Babu kowa"], answer: 1, why: "Ayyuka masu haɗari an hana su ga duk wanda bai kai shekaru 18 ba." },
      { objective: "O6", q: "Kafin ku karɓi aikin farko ya kamata ku:", options: ["Yi ƙarya game da shekarunku", "Tsallake makaranta", "Ba AI lambar wayarku", "Duba ƙa'idojin jiharku ku yi magana da iyaye ko mai kula da ku"], answer: 3, why: "Ƙa'idojin jiha suna iya neman izini, kuma ya kamata iyaye ko mai kula su sani." },
      { objective: "O6", q: "Bin ma'aikaci don kallon aiki (job shadowing) shi ne:", options: ["Ɓoyewa daga shugabanku", "Wani salon wasan bidiyo", "Wani nau'in takardar bayanin aiki (CV)", "Bin ma'aikaci na yini ɗaya don ganin aikin"], answer: 3, why: "Yana bar ku ganin aiki daga kusa." },
      { objective: "O6", q: "Gabatarwar kanku don aikin farko ya kamata ta zama:", options: ["Rubutu mai shafuka 10", "Kusan jimloli 3 game da ku, da kuka gwada faɗi da babbar murya", "Adireshinku da lambar wayarku", "AI ne ya rubuta ta kuma ba a taɓa karantawa ba"], answer: 1, why: "Gajeriya kuma da aka gwada tana da sauƙin faɗi da ƙarfin gwiwa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      5,
      6,
      7,
      9,
      11,
      13,
      15,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Dalilin da yasa ta dace da ni",
        objective: "O1",
        notYet: "Babu alaƙa tsakanin sana'ar da abubuwan da mai koyo yake so.",
        meets: "Ya ambaci sakamakon gwajin abin da yake so ko ayyukan da ya fi so da suka dace da sana'ar.",
        exceeds: "Ya kuma ambaci wani ƙarfi ko abin da yake darajawa da ya dace da sana'ar."
      },
      {
        name: "Bayanai na hukuma",
        objective: "O3",
        notYet: "Albashi, horo ko makomar aiki ba su nan ko an ɗauko su daga AI kaɗai.",
        meets: "Horon da aka saba, albashi da makomar aiki daga bls.gov/ooh ko mynextmove.org.",
        exceeds: "Ya kuma lura da abu ɗaya da AI ya faɗa daban da shafin hukuma."
      },
      {
        name: "AI a cikin aikin",
        objective: "O4",
        notYet: "Ba a ambaci amfanin AI ko ƙwarewar ɗan adam ba.",
        meets: "Hanya ɗaya da ake amfani da AI a sana'ar da ƙwarewar ɗan adam biyu da har yanzu suke da muhimmanci.",
        exceeds: "Ya haɗa da tambayar da za a yi wa mutum na gaske a wannan aikin, ko amsarsa."
      },
      {
        name: "Matakan wannan shekarar",
        objective: "O5",
        notYet: "Matakai ƙasa da uku, ko matakan ba su da sarari kamar \"yi aiki tuƙuru\".",
        meets: "Matakai uku tabbatattu: darasi, ƙungiya ko wani aiki, da mutumin da za a yi magana da shi.",
        exceeds: "Aƙalla mataki ɗaya an tabbatar da shi da mai ba da shawara ko shafin hukuma."
      },
      {
        name: "Gabatarwa don aikin farko",
        objective: "O6",
        notYet: "Babu gabatarwa, ko tana da bayanan sirri.",
        meets: "Gabatarwa mai jimloli uku game da mai koyo, da aka gwada faɗi da babbar murya.",
        exceeds: "Ya kuma lura da ƙa'idojin aikin matasa da suka shafi shekarunsa da jiharsa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ɗauki ɗaya daga cikin matakai uku da suka tsara (darasi, ƙungiya ko ganawa) cikin kwanaki 30",
      "Masu koyo da suka gana da mai ba da shawara a makaranta game da shirin sana'arsu",
      "Masu koyo da suka fara aiki, aikin sa kai, bin ma'aikaci don kallon aiki ko shirin sana'a cikin kwanaki 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, kwamfutar makaranta ko ta ɗakin karatu mai intanet",
      "Shafuka kyauta: mynextmove.org da bls.gov/ooh",
      "Mataimakin AI kyauta da aka ba mai koyo izinin amfani da shi",
      "Takarda ko takardar kwamfuta don shirin sana'a mai shafi ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi aiki tare da mai ba da shawara a makaranta don masu koyo su duba darussa, CTE da zaɓuɓɓukan dual enrollment yayin kwas ɗin.",
      "Ku tunatar da masu koyo cewa albashi da ƙa'idojin aikin matasa suna canjawa kuma sun bambanta da jiha; ku sa su duba shafukan hukuma a cikin aji.",
      "Kada ku taɓa neman masu koyo su saka bayanan sirri a kayan AI; ku yi amfani da sunan farko ko babu suna a gabatarwa.",
      "Ku gayyaci baƙo daga wani aiki ko sana'ar hannu na yankin don masu koyo su yi tambayarsu ta \"mutum na gaske\".",
      "Ku ba da maki ga shirin sana'a da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
