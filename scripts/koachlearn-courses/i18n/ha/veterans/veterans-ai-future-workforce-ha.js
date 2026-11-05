"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-ai-future-workforce.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "veterans-ai-future-workforce-ha",
  lang: "ha",
  translationOf: "veterans-ai-future-workforce",
  category: "Veterans (military)",
  name: "Gabatarwa ga AI da Makomar Ma'aikata",
  skills: "Bayanin mene ne AI, Buɗe mataimakin AI kyauta, Rubuta prompt a sarari, Fassara ayyukan soja zuwa kalmomin farar hula, Tabbatar da amsoshin AI, Kiyaye bayanan sirri da bayanai masu muhimmanci",
  outcome: "amfani da mataimakin AI kyauta don mayar da ɗaya daga cikin ayyukanku na soja zuwa kalmomin aikin farar hula, tabbatar da sakamakon a wata majiyar ayyuka ta hukuma, da kiyaye bayanan sirri da bayanai masu muhimmanci daga cikinsa.",
  about: [
    "Wannan kwas ɗin na tsofaffin sojoji ne da sojojin da ke barin aiki, waɗanda suke son fahimtar yadda basirar na'ura (AI) take canja aikin farar hula, da yadda za su yi amfani da ita don amfanin kansu. Ba sai kuna da ilimin fasaha ba.",
    "Za ku koyi mene ne AI, yadda ake buɗe mataimakin AI kyauta, yadda ake ba shi umarni a sarari (kamar umarnin soja mai sarari: aiki, yanayi, ma'auni), da yadda ake kiyaye bayanan sirri da bayanai masu muhimmanci daga cikinsa. Sannan za ku yi amfani da shi don fassara ƙwarewarku ta soja zuwa kalmomin da masu ɗaukar aiki na farar hula suke fahimta, kuma ku tabbatar da sakamakon.",
    "Kowane darasi yana ɗaukar kusan minti biyar: ku karanta, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku zaɓi aiki ɗaya da kuka yi a soja. Ku yi amfani da mataimakin AI don sake rubuta shi a matsayin layuka uku na takardar bayanin aiki (résumé) ta farar hula, ku nemi gyara ɗaya, ku nemi aikinku na soja a O*NET Military Crosswalk don tabbatar da sunayen ayyukan farar hula da ya ba da shawara, sannan ku cire duk wani bayanin sirri ko mai muhimmanci kafin ku ajiye layukan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji da sojojin da ke barin aiki waɗanda ke neman aikin farar hula. Shekarunsu da matsayinsu sun bambanta sosai; yawancinsu suna da ƙwarewar aiki mai ƙarfi amma suna bayyana ta da kalmomin soja.",
    startingPoint: "Sun saba da umarni, hanyoyin aiki da ma'auni, da kuma waya ta zamani ko kwamfuta. Ba sa amfani da mataimakan AI sosai ko kwata-kwata, kuma ba su saba bayyana ayyukan soja da kalmomin farar hula ba tukuna.",
    gap: "Masu ɗaukar aiki na farar hula suna karanta takardun bayanin aiki da nasu kalmomin, kuma suna ƙara sa ran ma'aikata su yi amfani da kayan AI. Masu koyo suna buƙatar amfani da mataimakin AI kyauta lafiya don fassara hidimarsu zuwa kalmomin aikin farar hula, da tabbatar da sakamakon a majiyoyin ayyuka na hukuma, ta yadda za a fahimci ƙwarewarsu kuma amsoshi marasa gaskiya ba za su ruɗe su ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ba a ɗauka cewa suna da ilimin fasaha ba",
      "Na'urori: waya ta zamani ko kwamfuta mai intanet; wasu suna amfani da kwamfutocin sansani, ɗakin karatu ko na TAP da ake rabawa",
      "Lokaci: darussa na kusan minti 5 da suka dace da ganawar barin aiki da aiki",
      "OPSEC da sirri: babu bayanan sirri na gwamnati (classified), bayanai masu ƙayyadadden amfani (controlled) ko na aiki (mission), kuma babu lambar Social Security ko ta fayil ɗin VA a kowane prompt",
      "Albashi da dokokin shirye-shirye suna canjawa, don haka masu koyo suna tabbatarwa a majiyoyin hukuma (O*NET, BLS, VA) kafin su ɗauki mataki"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyuka", action: "bayyana mene ne AI, ambaci hanyoyin da yake canja ayyukan farar hula, da gane ƙwarewar da ba ya maye gurbinta", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Ta amfani da waya ko kwamfuta", action: "buɗe mataimakin AI kyauta da rubuta prompt mai aiki, yanayi da ma'auni", standard: "ta yadda amsar farko za ta yi amfani" },
    { id: "O3", condition: "Kafin ku aika kowane prompt", action: "duba shi don bayanan sirri da bayanai masu muhimmanci, sannan ku cire su ko ku sa madadi a wurinsu", standard: "ba tare da bayyana lambobin sirri ko bayanan classified, controlled ko na aiki (mission) ba" },
    { id: "O4", condition: "Idan kuna da lambar aikinku na soja ko sunansa", action: "nemo aikinku na soja a O*NET Military Crosswalk da rubuta jerin ayyukan farar hula da suka dace da shi", standard: "da aƙalla sunayen ayyukan farar hula uku da ayyuka biyu na kowanne" },
    { id: "O5", condition: "Idan kuna da aiki ɗaya daga hidimarku", action: "amfani da mataimakin AI don sake rubuta aikin a matsayin layukan résumé na farar hula masu girma da sakamako", standard: "ba tare da kalmomin soja ba, kuma kowace magana gaskiya ce" },
    { id: "O6", condition: "Idan kuna da amsar AI game da ayyuka, albashi ko shirye-shirye", action: "tabbatar da amsar a majiyoyin hukuma da zaɓar ƙwarewa ɗaya da shiri ɗaya don matakinku na gaba", standard: "kafin ku yi amfani da ita" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tushen AI don aikin da ke gaba",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne AI da yadda yake canja aiki",
          minutes: 4,
          goal: "Bayyana da kalmominku mene ne AI, da ambaton hanyoyi biyu da yake canja ayyukan farar hula.",
          text: [
            "AI, ko artificial intelligence (basirar na'ura), shirye-shiryen kwamfuta ne da ke yin ayyukan da yawanci sai mutum, kamar rubutu, taƙaitawa, tsara bayanai ko gano wani tsari a cikinsu. Mataimakin AI shi ne wanda kuke hira da shi da kalmomin yau da kullum. Sanannu masu kyauta sun haɗa da ChatGPT, Microsoft Copilot da Google Gemini.",
            "A aikin farar hula, yanzu ana amfani da AI don rubuta daftarin imel da rahotanni, taƙaita dogayen takardu, tsara jadawali da hanyoyi, amsa tambayoyin abokan ciniki, da gano matsaloli a cikin bayanai (data). A harkar jigila da kayayyaki (logistics) yana taimakawa wajen hasashen kayan da za a buƙata; a gyaran injina yana taimakawa wajen gano sassan da ke iya lalacewa; a ofisoshi yana rubuta daftari na farko.",
            "AI ba ya maye gurbin hankali wajen yanke shawara, jagoranci ko ɗaukar nauyi. Waɗannan ƙwarewa ne da kuka gina a cikin kakin soja. Masu ɗaukar aiki suna son mutanen da za su iya amfani da AI a matsayin kayan aiki, amma har yanzu su yanke shawara, su duba aikin, kuma su jagoranci ƙungiya."
          ],
          words: [["AI", "gajartawar artificial intelligence (basirar na'ura): shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum."], ["Mataimakin AI", "shirin AI da kuke hira da shi ta rubutu ko magana."]],
          slides: [
            { title: "AI shi ne...", bullets: ["Shirye-shiryen da ke rubutu, taƙaitawa, tsara bayanai da gano tsari", "Mataimaka da kuke hira da su: ChatGPT, Copilot, Gemini"] },
            { title: "Yadda AI yake canja aiki", bullets: ["Rubuta daftarin imel da rahotanni", "Hasashen kayan da za a buƙata da tsara hanyoyi", "Gano injinan da ke iya lalacewa"] },
            { title: "Abin da AI ba ya maye gurbinsa", bullets: ["Hankali wajen yanke shawara da ɗaukar nauyi", "Jagoranci", "Duba aikin: ku ne har yanzu kuke yanke shawara"] }
          ],
          tryIt: "Ku rubuta ayyuka biyu daga aikinku na soja da ayyuka biyu daga aikin farar hula da kuke so. A gefen kowanne, ku rubuta hanya ɗaya da AI zai iya taimakawa da shi.",
          youCanNow: "bayyana mene ne AI, ambaci hanyoyin da yake canja aiki, da faɗin ƙwarewar da AI ba ya maye gurbinta.",
          quickCheck: [
            { objective: "O1", q: "Wane aiki ne AI ya fi ƙwarewa a kai a aikin farar hula?", options: ["Rubuta daftarin farko na rahoto", "Ɗaukar nauyin shawarar ƙarshe", "Samun amincewar ƙungiya", "Jagorantar mutane a lokacin rikici"], answer: 0, why: "AI zai iya rubuta daftari da tsara bayanai, amma hankali, amincewa da jagoranci suna hannun mutane." },
            { objective: "O1", q: "Abokin aiki ya ce AI zai sa ƙwarewarku ta jagoranci ta zama marar amfani. Me za ku ce?", options: ["Ku yarda ku daina ambaton jagoranci", "Ku ce AI ba ya maye gurbin hankali, jagoranci ko ɗaukar nauyi", "Ku ce a soja kaɗai ake amfani da AI", "Ku ce AI koyaushe daidai yake, don haka mutane rubutu kawai suke yi"], answer: 1, why: "AI yana canja ayyuka, amma mutane ne har yanzu suke jagoranci, yanke shawara da ɗaukar nauyi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Buɗe mataimaki da ba shi umarni a sarari",
          minutes: 5,
          goal: "Buɗe mataimakin AI kyauta kuma ku rubuta prompt mai aiki, yanayi da ma'auni.",
          text: [
            "A waya, ku saka manhajar hukuma daga shagon manhajoji (OpenAI don ChatGPT, Microsoft don Copilot, Google don Gemini). A kwamfuta, ku rubuta chatgpt.com, copilot.microsoft.com ko gemini.google.com a burauzar intanet.",
            "Abin da kuke rubutawa ana kiransa prompt (umarni). Kun riga kun san yadda ake ba da umarni a sarari. Ku yi amfani da wannan tunani: aikin (abin da kuke buƙata), yanayin (halin da kuke ciki), da ma'aunin (yadda amsa mai kyau take: tsawo, tsari, salon magana).",
            "Misali: \"Aiki: ka jera ayyukan farar hula da ke amfani da ƙwarewar gyaran motoci. Yanayi: na yi shekaru 6 ina makanikin ƙananan motoci a rundunar sojan ƙasa (Army). Ma'auni: sunayen ayyuka 5, layi ɗaya kowanne, kalmomi masu sauƙi.\""
          ],
          steps: ["Ku buɗe manhajar hukuma ko shafin intanet.", "Ku rubuta aikin: abin da kuke buƙata.", "Ku ƙara yanayin: halin da kuke ciki, ba tare da bayanan sirri ba.", "Ku ƙara ma'aunin: tsawo, tsari da salon magana.", "Ku aika ku karanta amsar."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI don neman wani abu."], ["Tsari (format)", "siffar amsar, kamar jeri, tebur ko gajeren sakin layi."]],
          slides: [
            { title: "Inda za ku buɗe shi", bullets: ["Waya: manhajar hukuma daga shagon manhajoji", "Kwamfuta: chatgpt.com, copilot.microsoft.com, gemini.google.com"] },
            { title: "Prompt umarni ne mai sarari", bullets: ["Aiki: abin da kuke buƙata", "Yanayi: halin da kuke ciki", "Ma'auni: yadda amsa mai kyau take"] },
            { title: "Misali", bullets: ["Aiki: ayyukan farar hula masu amfani da ƙwarewar gyaran motoci", "Yanayi: shekaru 6 a matsayin makanikin ƙananan motoci", "Ma'auni: sunaye 5, layi ɗaya kowanne, kalmomi masu sauƙi"] }
          ],
          tryIt: "Ku buɗe mataimakin AI kyauta. Ku rubuta prompt mai aiki, yanayi da ma'auni da ke neman sunayen ayyukan farar hula biyar da ke amfani da ƙwarewar aikinku na soja. Ku karanta amsar.",
          youCanNow: "buɗe mataimakin AI kyauta da rubuta prompt mai aiki, yanayi da ma'auni.",
          quickCheck: [
            { objective: "O2", q: "A cikin prompt mai umarni a sarari, mene ne aikin?", options: ["Bayananku na sirri", "Tsawon da amsar za ta yi", "Abin da kuke son AI ya yi", "Sunan kayan AI ɗin"], answer: 2, why: "Aikin shi ne abin da kuka ɗora wa AI; yanayi da ma'auni suna zuwa bayansa." },
            { objective: "O2", q: "Kuna son shawarwarin ayyukan farar hula daga mataimakin AI. Wane prompt za ku aika?", options: ["\"Ayyuka?\"", "\"Faɗa mini komai game da aiki.\"", "\"Rubuta tarihin rayuwata gaba ɗaya.\"", "\"Aiki: ka jera ayyukan farar hula. Yanayi: shekaru 4 a matsayin ma'aikacin ajiyar kaya. Ma'auni: sunaye 5, layi ɗaya kowanne.\""], answer: 3, why: "Prompt mai aiki, yanayi da ma'auni yana kawo amsa ta farko mai amfani." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kiyaye bayanan sirri da masu muhimmanci",
          minutes: 5,
          goal: "Duba prompt don bayanan sirri ko masu muhimmanci, ku cire su kafin ku aika.",
          text: [
            "Mataimakan AI na jama'a suna iya ajiye abin da kuke rubutawa. Kada ku taɓa rubuta lambar Social Security ɗinku (lambar shaidar Amurka), lambobin da ke kan DD-214 ɗinku, lambar fayil ko ta da'awa (claim) ta VA, lambobin banki ko kati, kalmomin sirri (password), ko bayanan lafiya da ba ku son a raba.",
            "Irin ladabin da kuka yi amfani da shi don kare bayanan aiki (OPSEC) har yanzu yana aiki. Kada ku rubuta bayanan classified ko controlled, inda rundunarku take, bayanan aiki (mission), ko duk abin da aka ce kada ku faɗa. Ku bayyana aikinku a gama-gari: \"na kula da ƙungiyar gyara mai mutane 12\" ya yi; ba a buƙatar sunayen runduna ko ayyukan mission.",
            "Idan kuna buƙatar lamba a cikin takarda, ku rubuta madadi kamar \"[lambata]\" sannan ku cike ta da kanku daga baya, ba a intanet ba."
          ],
          steps: ["Ku karanta prompt ɗinku kafin ku aika.", "Ku cire lambobin sirri, bayanan asusu da kalmomin sirri.", "Ku cire bayanan classified, controlled ko na mission.", "Ku yi amfani da madadi kamar \"[lambata]\" inda ake buƙata."],
          words: [["OPSEC", "kare bayanan aiki (operational security): kare bayanan da maƙiyi zai iya amfani da su."], ["Madadi (placeholder)", "abin da ke tsaye a wurin wani, kamar \"[lambata]\", da za ku maye gurbinsa da kanku daga baya."], ["DD-214", "takardar da ke rubuta hidimarku da yadda kuka bar aikin soja."]],
          slides: [
            { title: "Kada ku taɓa rubutawa AI na jama'a", bullets: ["Lambar Social Security, DD-214 ko ta fayil ɗin VA", "Lambobin banki ko kati da kalmomin sirri", "Bayanan lafiyarku na sirri"] },
            { title: "OPSEC har yanzu yana aiki", bullets: ["Babu bayanan classified ko controlled", "Babu inda runduna take ko bayanan mission", "Ku bayyana aikinku a gama-gari"] },
            { title: "Ku yi amfani da madadi", bullets: ["Ku rubuta \"[lambata]\" a maimakon haka", "Ku cike ta da kanku daga baya, ba a intanet ba"] }
          ],
          tryIt: "Ku rubuta prompt da ke bayyana aikinku na ƙarshe a soja ta yadda za ku iya raba shi da kowane mai ɗaukar aiki. Ku karanta shi layi-layi, ku cire duk wani abu na sirri ko mai muhimmanci kafin ku aika.",
          youCanNow: "duba prompt don bayanan sirri da masu muhimmanci, da cire su kafin ku aika.",
          quickCheck: [
            { objective: "O3", q: "Kuna rubuta wasiƙar neman aiki da AI kuma kuna buƙatar lambar wayarku a ciki. Me za ku yi?", options: ["Ku rubuta lambar gaske don wasiƙar ta kammala", "Ku rubuta \"[wayata]\" sannan ku ƙara lambar gaske da kanku daga baya", "Ku rubuta lambar Social Security ɗinku a maimakonta", "Ku nemi AI ya yi hasashen lamba"], answer: 1, why: "Madadi yana ba ku taimakon ba tare da sa lambar sirri a cikin AI ba." },
            { objective: "O3", q: "Wane bayani ne ba shi da haɗari a sa a prompt na AI na jama'a?", options: ["\"Na horar da sababbin ma'aikata 8 kan binciken tsaro\"", "Ranakun tura rundunarku aiki da inda take", "Bayanai daga taron bayani na classified", "Lambar fayil ɗinku ta VA"], answer: 0, why: "Ayyuka na gama-gari masu lambobi ba matsala; bayanan mission da lambobin sirri a bar su waje." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tushen AI don aikin da ke gaba",
        questions: [
          { objective: "O1", q: "Wanne ne ya fi bayyana mataimakin AI?", options: ["Mai ɗaukar ma'aikata da ke karanta saƙonninku", "Shirin kwamfuta da kuke hira da shi da kalmomin yau da kullum", "Ofishin tallafin gwamnati", "Hanyar sadarwa ta soja mai tsaro"], answer: 1, why: "Mataimakin AI shiri ne da kuke rubuta masa ko magana da shi, shi kuma yana rubuta amsoshi." },
          { objective: "O1", q: "Wace ƙwarewa ce AI BA ya maye gurbinta a wurin aiki?", options: ["Rubuta daftarin imel na farko", "Taƙaita dogon rahoto", "Hankali da ɗaukar nauyin shawarar", "Tsara jeri"], answer: 2, why: "AI zai iya rubuta daftari da tsarawa, amma mutum ne har yanzu yake yanke shawara kuma yake ɗaukar nauyin sakamakon." },
          { objective: "O2", q: "A cikin prompt na \"umarni a sarari\", mene ne yanayin?", options: ["Halin da kuke ciki, ba tare da bayanan sirri ba", "Tsawo da tsarin amsar", "Sunan manhajar", "Kalmar sirrinku"], answer: 0, why: "Yanayi yana bayyana halin da kuke ciki don mataimakin ya daidaita amsarsa da ku." },
          { objective: "O3", q: "Wane bayani ne ya yi a rubuta a mataimakin AI na jama'a?", options: ["Lambar da ke kan DD-214 ɗinku", "Inda rundunarku take yanzu", "\"Na kula da ƙungiyar gyara mai mutane 12\"", "Lambar da'awarku ta VA"], answer: 2, why: "Bayanin aikinku na gama-gari ba shi da haɗari; lambobi da bayanan mission suna da haɗari." },
          { objective: "O3", q: "Kuna buƙatar lambar fayil ɗinku ta VA a cikin wasiƙar da kuke rubutawa da AI. Me za ku yi?", options: ["Ku rubuta lambar gaske", "Ku rubuta rabinta", "Ku nemi AI ya yi hasashenta", "Ku rubuta \"[lambata]\" sannan ku cike ta da kanku daga baya"], answer: 3, why: "Madadi yana ba ku damar samun taimako ba tare da raba lambar sirri ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Fassara hidimarku zuwa aikin farar hula",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nemo ayyukan farar hula da suka dace da hidimarku",
          minutes: 5,
          goal: "Nemo aikinku na soja a O*NET Military Crosswalk kuma ku rubuta jerin ayyukan farar hula da suka dace da shi.",
          text: [
            "O*NET OnLine na Ma'aikatar Ƙwadago ta Amurka (Department of Labor) yana da Military Crosswalk Search (binciken da ke haɗa aikin soja da na farar hula). Kuna zaɓar rundunarku (MOS na Army ko Marine Corps, rating na Navy ko Coast Guard, AFSC na Air Force, SFSC na Space Force), ku rubuta lambarku ko sunan aikinku, shi kuma yana nuna ayyukan farar hula da suka dace.",
            "Kowane aikin farar hula a O*NET yana jera ayyukansa, kayan aikinsa da ƙwarewarsa. Waɗannan su ne kalmomin da masu ɗaukar aiki suke amfani da su. Daga nan kuna iya neman mataimakin AI ya bayyana waɗannan ayyuka da kalmomi masu sauƙi, amma jerin kansa daga majiyar hukuma yake zuwa.",
            "CareerOneStop, wanda shi ma Ma'aikatar Ƙwadago ke ɗaukar nauyinsa, yana da Veterans Job Matcher (mai haɗa tsofaffin sojoji da ayyuka) da ke yin irin wannan haɗi. Ku gwada duka biyun ku kwatanta."
          ],
          steps: ["Ku je onetonline.org ku buɗe Military Crosswalk Search.", "Ku zaɓi rundunarku.", "Ku rubuta lambarku (misali 88M ko rating na Navy) ko sunan aikinku.", "Ku buɗe ayyukan farar hula biyu ko uku da suka dace ku karanta ayyukansu.", "Ku rubuta sunayen ayyukan da suka ba ku sha'awa."],
          words: [["MOS / rating / AFSC", "lambar aikinku na soja a Army da Marines, Navy da Coast Guard, da Air Force."], ["Crosswalk", "kayan aiki da ke haɗa aikin soja da ayyukan farar hula."], ["O*NET", "rumbun bayanai na Ma'aikatar Ƙwadago game da ayyukan farar hula da ƙwarewar da suke buƙata."]],
          slides: [
            { title: "O*NET Military Crosswalk", bullets: ["Ma'aikatar Ƙwadago ta Amurka ce ke tafiyar da shi", "Ku zaɓi rundunarku, ku rubuta lambarku ko sunan aikinku", "Ku ga ayyukan farar hula da suka dace"] },
            { title: "Ku karanta ayyukan farar hula", bullets: ["Kowane aiki yana jera ayyuka, kayan aiki da ƙwarewa", "Waɗannan su ne kalmomin masu ɗaukar aiki"] },
            { title: "Ku kuma gwada", bullets: ["CareerOneStop Veterans Job Matcher", "Ku kwatanta jerin biyun"] }
          ],
          sources: [{ name: "O*NET OnLine: Military Crosswalk Search", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "Ma'aikatar Ƙwadago ta Amurka (VETS): Neman aiki", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Ku nemi MOS, rating ko AFSC ɗinku a O*NET Military Crosswalk. Ku rubuta sunayen ayyukan farar hula uku da ya ba da shawara, da ayyuka biyu daga kowanne.",
          youCanNow: "amfani da O*NET Military Crosswalk don nemo ayyukan farar hula da suka dace da aikinku na soja.",
          quickCheck: [
            { objective: "O4", q: "Me za ku rubuta a O*NET Military Crosswalk don nemo ayyukan da suka dace?", options: ["Lambar Social Security ɗinku", "Adireshin gidanku", "Kamfanin farar hula da kuka fi so", "Lambar aikinku na soja ko sunansa"], answer: 3, why: "Crosswalk yana bincike ta lambar aikin soja ko sunansa, kuma yana nuna ayyukan farar hula da suka dace." },
            { objective: "O4", q: "Crosswalk ya nuna ayyukan farar hula da yawa don lambarku. Me za ku yi a gaba?", options: ["Ku zaɓi na farko ba tare da karantawa ba", "Ku bar jerin ku tambayi aboki", "Ku rubuta sunayen ayyuka uku da ayyuka biyu na kowanne", "Ku rufe shi ku yi hasashen sunan aiki"], answer: 2, why: "Rubuta sunaye da ayyukansu yana ba ku kalmomin farar hula da za ku yi amfani da su a résumé ɗinku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sake rubuta aikin soja da kalmomin farar hula",
          minutes: 5,
          goal: "Yi amfani da AI don sake rubuta aikin soja ɗaya a matsayin layin résumé na farar hula mai sakamako.",
          text: [
            "Manajojin ɗaukar aiki na farar hula ba lallai ba ne su san mene ne platoon sergeant, PMCS ko CONEX. Aikinku shi ne ku faɗi abu ɗaya da kalmominsu: abin da kuka yi, girmansa, da sakamakon da ya kawo.",
            "Ku ba AI aikinku da kalmomi masu sauƙi, da aikin farar hula da kuke nema. Misalin prompt: \"Ka sake rubuta wannan don résumé na mai kula da rumbun ajiyar kaya (warehouse supervisor): ni ke da alhakin ɗakin kayayyaki, nau'o'in kaya 300, na ba sojoji 120 kayan aiki, babu asara a ƙididdigar kaya 2. Ka ba ni layuka 3 da ke farawa da fi'ili mai ƙarfi kuma suna da lambobi.\"",
            "Sannan ku inganta shi da tambayoyin biyo baya: \"Ka cire kalmomin soja.\" \"Ka yi amfani da kalmomin wannan tallar aiki.\" \"Ka gajarta shi.\" Amsar farko daftari ce; ku ne mai gyara."
          ],
          steps: ["Ku rubuta aikin da kalmomi masu sauƙi: me, girmansa, wane sakamako.", "Ku faɗi aikin farar hula da kuke nema.", "Ku nemi layuka 3 masu fi'ili mai ƙarfi da lambobi.", "Ku nemi canji ɗaya, kamar \"ka cire kalmomin soja\".", "Ku karanta shi ku tabbata kowace kalma gaskiya ce."],
          words: [["Layin résumé (résumé bullet)", "gajeren layi ɗaya a takardar bayanin aiki da ke nuna abin da kuka yi da sakamakonsa."], ["Gajartawa (acronym)", "kalmar da aka yi daga harufan farko, kamar PMCS; farar hula sau da yawa ba su san na soja ba."]],
          slides: [
            { title: "Ku faɗe shi da kalmominsu", bullets: ["Abin da kuka yi", "Girmansa: mutane, kuɗi, kayan aiki", "Sakamakon da ya kawo"] },
            { title: "Misalin prompt", bullets: ["\"Ka sake rubutawa don résumé na mai kula da rumbun ajiyar kaya\"", "Ɗakin kayayyaki, nau'o'in kaya 300, sojoji 120, babu asara", "\"Layuka 3, fi'ili masu ƙarfi, lambobi\""] },
            { title: "Sannan ku gyara", bullets: ["\"Ka cire kalmomin soja.\"", "\"Ka yi amfani da kalmomin wannan tallar aiki.\"", "Ku tabbata kowace kalma gaskiya ce"] }
          ],
          tryIt: "Ku zaɓi aiki ɗaya daga hidimarku. Ku nemi mataimakin AI ya sake rubuta shi a matsayin layukan résumé na farar hula uku don sunan aiki ɗaya daga Darasi na 4. Ku nemi ya cire kalmomin soja.",
          youCanNow: "sake rubuta aikin soja a matsayin layukan résumé na farar hula masu sarari, da lambobi da sakamako.",
          quickCheck: [
            { objective: "O5", q: "Wane layin résumé ne aka rubuta don mai ɗaukar aiki na farar hula?", options: ["\"Na jagoranci ƙungiya mai mutane 10 da ta rage lokacin gyaran kayan aiki da 20%\"", "\"Na yi aiki a matsayin NCOIC na motor pool IAW SOP\"", "\"Na yi ayyuka daban-daban da aka ba ni\"", "\"Ni ke kula da kaya\""], answer: 0, why: "Yana amfani da kalmomi masu sauƙi kuma yana nuna abin da kuka yi, girmansa da sakamakon." },
            { objective: "O5", q: "Layin da AI ya rubuta har yanzu yana cewa \"CONUS\" da \"PCS\". Me za ku tambaya a gaba?", options: ["\"Ka ƙara gajartawa.\"", "\"Ka tsawaita shi.\"", "\"Ka cire kalmomin soja ka yi amfani da kalmomin farar hula masu sauƙi.\"", "\"Ka rubuta shi a matsayin waƙa.\""], answer: 2, why: "Tambayar biyo baya da ke neman a cire kalmomin soja tana mayar da daftarin zuwa kalmomin da mai karatu farar hula yake fahimta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tabbatar da amsar da tsara ƙwarewarku ta gaba",
          minutes: 5,
          goal: "Tabbatar da amsar AI a majiyoyin hukuma kuma ku zaɓi ƙwarewa ɗaya da za ku gina a gaba.",
          text: [
            "AI yana iya ƙirƙirar abubuwa: sunan aikin da bai dace ba, takardar shaidar ƙwarewa (certification) da babu ita, ko albashin da ba daidai ba. Ana kiran wannan hallucination (hasashen ƙarya). Ku tabbatar da sunayen ayyuka a O*NET, ku kuma tabbatar da albashi da makomar aiki a Occupational Outlook Handbook na Ofishin Ƙididdigar Ƙwadago (Bureau of Labor Statistics) (bls.gov/ooh).",
            "Ku tabbata layukanku gaskiya ne. Kada ku taɓa bari AI ya ƙara girman matsayinku, lambobinku ko lambobin yabonku. Mai ɗaukar aiki yana iya bincikawa, kuma amincewa tana da wuyar dawowa.",
            "Sannan ku tsara ƙwarewa ɗaya da za ku gina. Taimakon hukuma kyauta ya haɗa da shirin VA na Personalized Career Planning and Guidance (shawarwarin sana'a kyauta ga tsofaffin sojoji da sojoji da suka cancanta) da Transition Assistance Program (shirin taimakon barin aiki) na Ma'aikatar Ƙwadago. Don horo a fasahar zamani, shirin VA na VET TEC 2.0 yana biyan wasu kwasa-kwasan fasaha da ba na digiri ba ga tsofaffin sojoji da suka cancanta. Ku tabbatar da sharuɗɗan cancanta na yanzu a va.gov."
          ],
          steps: ["Ku tabbatar da kowane sunan aiki a O*NET.", "Ku tabbatar da albashi da makomar aiki a Occupational Outlook Handbook.", "Ku tabbata kowace lamba da kowace magana a layukanku gaskiya ce.", "Ku zaɓi ƙwarewa ɗaya da za ku gina, da shirin hukuma ɗaya da zai iya taimakawa."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], ["Occupational Outlook Handbook", "jagora kyauta na Bureau of Labor Statistics game da albashi, ƙaruwar ayyuka da yadda ake shiga kowane aiki."]],
          slides: [
            { title: "Ku tabbatar da amsoshin AI", bullets: ["Sunayen ayyuka: O*NET", "Albashi da makomar aiki: bls.gov/ooh", "Kada ku taɓa ƙara girman matsayi, lambobi ko lambobin yabo"] },
            { title: "Taimakon hukuma kyauta", bullets: ["VA Personalized Career Planning and Guidance", "DOL Transition Assistance Program (TAP)", "VA VET TEC 2.0 don horo a fasahar zamani"] },
            { title: "Matakinku na gaba", bullets: ["Ku zaɓi ƙwarewa ɗaya da za ku gina", "Ku zaɓi shiri ɗaya da zai iya taimakawa", "Ku tabbatar da cancanta a va.gov"] }
          ],
          sources: [
            { name: "Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "Ma'aikatar Ƙwadago ta Amurka: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" }
          ],
          tryIt: "Aikin ƙarshe: ku ɗauki layukanku uku daga Darasi na 5. Ku tabbatar da sunayen ayyukan a O*NET Military Crosswalk, ku nemi AI gyara ɗaya, ku cire duk wani bayanin sirri ko mai muhimmanci, sannan ku ajiye layukan ƙarshe.",
          youCanNow: "tabbatar da amsoshin AI game da sana'a a majiyoyin hukuma, da zaɓar ƙwarewa ɗaya da shiri ɗaya don matakinku na gaba.",
          quickCheck: [
            { objective: "O6", q: "Mene ne hallucination na AI?", options: ["Amsar AI da koyaushe take daidai", "Sabon kayan AI don tsofaffin sojoji", "Hanyar gajarta prompt", "Abin da AI ya rubuta da yake kama da gaskiya amma ƙirƙirarre ne"], answer: 3, why: "AI yana iya ƙirƙirar abubuwa kuma ya yi magana kamar ya tabbata, don haka kuke tabbatar da bayanai a majiyoyin hukuma." },
            { objective: "O6", q: "AI ya faɗa muku matsakaicin albashin wani aikin farar hula. Me za ku yi kafin ku yi amfani da shi?", options: ["Ku sa shi a résumé ɗinku", "Ku tabbatar da shi a Occupational Outlook Handbook na Bureau of Labor Statistics", "Ku tambayi AI ko ya tabbata", "Ku raba shi da abokai a matsayin gaskiya"], answer: 1, why: "Albashi daga majiyoyin hukuma kamar Occupational Outlook Handbook yake zuwa, ba daga AI ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Fassara hidimarku zuwa aikin farar hula",
        questions: [
          { objective: "O4", q: "Me O*NET Military Crosswalk yake yi?", options: ["Yana haɗa lambar aikinku na soja da ayyukan farar hula", "Yana shigar da da'awarku ta VA", "Yana tura résumé ɗinku ga masu ɗaukar aiki", "Yana biyan kuɗin horo"], answer: 0, why: "Kuna shigar da MOS, rating ko AFSC ɗinku, shi kuma yana nuna ayyukan farar hula da suka dace." },
          { objective: "O5", q: "Wane layin résumé ne ya fi kyau ga mai ɗaukar aiki na farar hula?", options: ["\"Na yi PMCS a kan MTV\"", "\"Na kula da manyan motoci 40 da binciken kariya; na rage lalacewa da 30%\"", "\"Ina a motor pool\"", "\"Hooah\""], answer: 1, why: "Yana amfani da kalmomin farar hula, lambobi da sakamako." },
          { objective: "O5", q: "Daftarin AI ya ƙara lambar yabo da ba ku samu ba. Me za ku yi?", options: ["Ku bar ta, tana da daɗin ji", "Ku ƙara girman lambar yabon", "Ku cire ta; kowace magana dole ta zama gaskiya", "Ku tambayi aboki ko ba matsala"], answer: 2, why: "Ana iya bincika maganganun ƙarya, kuma suna iya sa ku rasa aikin." },
          { objective: "O6", q: "A ina za ku tabbatar da albashi da makomar wani aikin farar hula?", options: ["Saƙo a kafar sada zumunta", "Amsar farko ta AI", "Tallar da ke tasowa (pop-up)", "Occupational Outlook Handbook na Bureau of Labor Statistics"], answer: 3, why: "Occupational Outlook Handbook ita ce majiyar hukuma don albashi da makomar aiki." },
          { objective: "O6", q: "Wane shirin VA ne yake ba da shawarwarin sana'a kyauta ga tsofaffin sojoji da suka cancanta?", options: ["Personalized Career Planning and Guidance", "Military Crosswalk", "Google Gemini", "Occupational Outlook Handbook"], answer: 0, why: "VA ta jera Personalized Career Planning and Guidance a matsayin shawarwarin sana'a da ilimi kyauta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga AI da Makomar Ma'aikata",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin AI shi ne:", options: ["Shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum", "Sabuwar rundunar soja", "Wani nau'in waya", "Allon ayyuka na gwamnati"], answer: 0, why: "Shirye-shiryen AI suna rubutu, taƙaitawa, tsara bayanai da gano tsari." },
      { objective: "O1", q: "Wace hanya ce ake amfani da AI a harkar jigila da kayayyaki ta farar hula?", options: ["Sa hannu a kwangiloli a madadin kamfani", "Hasashen kayan da za a buƙata", "Ɗaukar manajoji aiki", "Tuƙa kowace babbar mota"], answer: 1, why: "AI yana taimakawa wajen hasashen kayan da za a buƙata." },
      { objective: "O1", q: "Idan ana amfani da AI a wurin aiki, wane ne ke da alhakin shawarar?", options: ["AI", "Kamfanin manhajar", "Mutumin da ke amfani da shi", "Babu kowa"], answer: 2, why: "AI kayan aiki ne; mutum ne har yanzu yake yanke shawara." },
      { objective: "O2", q: "Wane adireshin shafi ne ke buɗe mataimakin AI kyauta?", options: ["vetjobs.win", "freecash.gift", "army.xyz", "gemini.google.com"], answer: 3, why: "gemini.google.com shi ne adireshin hukuma na Google don Gemini." },
      { objective: "O2", q: "A cikin prompt na \"umarni a sarari\", ma'aunin shi ne:", options: ["Yadda amsa mai kyau take: tsawo, tsari, salon magana", "Matsayinku na soja", "Kalmar sirrinku", "Shagon manhajoji"], answer: 0, why: "Ma'aunin yana faɗa wa mataimakin yadda amsar za ta kasance." },
      { objective: "O2", q: "Wane prompt ne zai kawo amsa mafi amfani?", options: ["\"ayyuka\"", "\"Aiki: ayyukan farar hula masu amfani da ƙwarewata. Yanayi: shekaru 6 a matsayin makanikin motoci. Ma'auni: sunaye 5, layi ɗaya kowanne.\"", "\"taimake ni\"", "\"abubuwan soja\""], answer: 1, why: "Yana ba da aikin, yanayin da ma'aunin." },
      { objective: "O3", q: "Wanne ne kada ku TAƁA rubutawa mataimakin AI na jama'a?", options: ["\"Ka gajarta shi\"", "\"Na jagoranci ƙungiyar mutane 8\"", "Lambar Social Security ɗinku", "\"Mai kula da rumbun ajiyar kaya\""], answer: 2, why: "Lambar Social Security ta sirri ce kuma kada a taɓa sa ta a AI na jama'a." },
      { objective: "O3", q: "OPSEC a hira da AI a rayuwar farar hula na nufin:", options: ["Raba bayanan mission don samun amsoshi mafi kyau", "Rubuta inda rundunarku take", "Amfani da matsayinku na soja a matsayin kalmar sirri", "Kiyaye bayanan classified, controlled da na mission daga ciki"], answer: 3, why: "Irin wannan ladabi yana kare bayanai masu muhimmanci a wajen aikin soja." },
      { objective: "O3", q: "Madadi kamar \"[lambata]\" yana ba ku damar:", options: ["Samun taimako ba tare da rubuta lambar gaske ba", "Ɓoye AI daga mai ɗaukar ku aiki", "Samun albashi da sauri", "Tsallake matakin tabbatarwa"], answer: 0, why: "Ku ne za ku cike lambar gaske da kanku daga baya, ba a intanet ba." },
      { objective: "O4", q: "Wane ne ke tafiyar da O*NET Military Crosswalk?", options: ["Wani mai ɗaukar ma'aikata mai zaman kansa", "Ma'aikatar Ƙwadago ta Amurka", "Tsohuwar rundunarku", "Wani kamfanin AI"], answer: 1, why: "O*NET OnLine shafi ne na Ma'aikatar Ƙwadago." },
      { objective: "O4", q: "A Military Crosswalk, tsohon sojan Navy zai yi bincike ta:", options: ["Lambar yanki (zip code)", "Lambar Social Security", "Lambar rating ko sunan aiki", "Ranar barin aiki"], answer: 2, why: "Kuna zaɓar rundunarku ku rubuta rating ɗinku ko sunan aikinku." },
      { objective: "O4", q: "Wani kayan aiki da Ma'aikatar Ƙwadago ke ɗaukar nauyinsa wanda ke haɗa ayyukan soja da sana'o'in farar hula shi ne:", options: ["Shafin caca (lottery)", "Manhajar katin bashi", "Wasan bidiyo", "Veterans Job Matcher na CareerOneStop"], answer: 3, why: "Veterans Job Matcher na CareerOneStop yana haɗa ayyukan soja da sana'o'in farar hula." },
      { objective: "O5", q: "Layin résumé na farar hula mai ƙarfi yana da:", options: ["Abin da kuka yi, girmansa da sakamakon", "Gajartawar soja kawai", "Aikin mission na rundunarku", "Adireshin gidanku"], answer: 0, why: "Masu ɗaukar aiki na farar hula suna neman aiki, girma da sakamako." },
      { objective: "O5", q: "Wace tambayar biyo baya ce ke taimakawa fassara daftari don farar hula?", options: ["\"Ka ƙara gajartawa.\"", "\"Ka cire kalmomin soja.\"", "\"Ka ƙara lambar DD-214 ɗina.\"", "\"Ka ƙirƙiri lambar yabo.\""], answer: 1, why: "Cire kalmomin soja yana sa ƙwarewarku ta yi sarari ga masu karatu farar hula." },
      { objective: "O5", q: "Daftarin farko da AI ya rubuta na layukanku shi ne:", options: ["Na ƙarshe kuma cikakke", "Abin da za a aika ba tare da karantawa ba", "Daftari da za ku gyara ku tabbatar", "Koyaushe ba daidai ba ne"], answer: 2, why: "Ku ne mai gyara; amsar farko daftari ce." },
      { objective: "O6", q: "Idan AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne, ana kiransa:", options: ["Taron bayani (briefing)", "Crosswalk", "Madadi (placeholder)", "Hallucination"], answer: 3, why: "Wannan shi ne sunan da aka saba da shi don amsoshin AI da aka ƙirƙira." },
      { objective: "O6", q: "A ina ya kamata ku tabbatar da albashin wani aiki kafin ku amince da lambar AI?", options: ["Occupational Outlook Handbook na Bureau of Labor Statistics", "Saƙon tes daga baƙo", "Amsa ta biyu ta AI", "Hoton barkwanci (meme)"], answer: 0, why: "Occupational Outlook Handbook yana ba da alƙaluman albashi da makomar aiki na hukuma." },
      { objective: "O6", q: "Shirin VA na VET TEC 2.0 yana taimakon tsofaffin sojoji da suka cancanta da:", options: ["Lamunin gida", "Horon fasahar zamani da ba na digiri ba", "Kula da lafiya", "Gyaran mota"], answer: 1, why: "VET TEC 2.0 yana biyan wasu shirye-shiryen horon fasahar zamani da ba na digiri ba." },
      { objective: "O6", q: "Wane shirin Ma'aikatar Ƙwadago ne ke taimakon sojoji su koma aikin farar hula?", options: ["O*NET Crosswalk kaɗai", "Google Gemini", "Transition Assistance Program (TAP)", "Wani kwas mai zaman kansa (bootcamp)"], answer: 2, why: "TAP yana ba sojojin da ke barin aiki bayanai, kayan aiki da horo." },
      { objective: "O6", q: "Kafin ku ajiye layukan résumé ɗinku na ƙarshe, ya kamata ku:", options: ["Ƙara lambar bankinku", "Ƙara girman lambobinku", "Tsallake tabbatarwa", "Tabbatar da sunayen ayyuka, ku tabbata kowace magana gaskiya ce, ku cire bayanan sirri"], answer: 3, why: "Wannan shi ne cikakken bincike: daidai, gaskiya kuma lafiya." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      5,
      6,
      9,
      12,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Prompt a sarari",
        objective: "O2",
        notYet: "Prompt ɗin ba shi da sarari, misali \"gyara résumé ɗina\".",
        meets: "Prompt ɗin yana da aiki, yanayi da ma'auni.",
        exceeds: "Yana kuma ambaton sunan aikin farar hula, kuma amsar farko ta kusa shiryawa."
      },
      {
        name: "Kalmomin farar hula",
        objective: "O5",
        notYet: "Layukan har yanzu suna amfani da kalmomin soja ko ba su da sakamako.",
        meets: "Layuka uku da kalmomin farar hula masu sauƙi, kowanne da abin da aka yi da girma ko sakamako.",
        exceeds: "Mai koyo ya nemi gyara ɗaya kuma zai iya faɗin abin da ya gyara."
      },
      {
        name: "An tabbatar da sunayen ayyuka",
        objective: "O4",
        notYet: "An kwafo sunayen ayyuka daga AI ba tare da tabbatarwa ba.",
        meets: "An tabbatar da sunayen ayyukan a O*NET Military Crosswalk.",
        exceeds: "Mai koyo ya kuma tabbatar da albashi ko makomar aiki a Occupational Outlook Handbook."
      },
      {
        name: "Babu bayanan sirri da masu muhimmanci",
        objective: "O3",
        notYet: "Prompt ko layukan suna da lambar sirri ko bayanin mission.",
        meets: "Babu lambobin sirri kuma babu bayanan classified, controlled ko na mission.",
        exceeds: "An yi amfani da madadi, kuma mai koyo zai iya bayyana dalilin cire kowane bayani."
      },
      {
        name: "Kowace magana gaskiya ce",
        objective: "O6",
        notYet: "Wani layi yana da magana, lamba ko lambar yabo da ba gaskiya ba ce.",
        meets: "Kowace magana da kowace lamba a layukan gaskiya ce.",
        exceeds: "Mai koyo ya ambaci ƙwarewa ɗaya da shiri ɗaya don mataki na gaba."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi amfani da sababbin layukansu a neman aiki cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka sami hirar neman aiki ko tayin aikin farar hula cikin kwanaki 90",
      "Masu koyo da suka fara wani kwas na Koach Learn na tsofaffin sojoji ko shirin horo cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ta zamani ko kwamfuta mai intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Shafukan intanet kyauta na O*NET Military Crosswalk da Occupational Outlook Handbook na Bureau of Labor Statistics",
      "Takarda da alƙalami, ko manhajar rubutu, don aikin \"Gwada yanzu\"",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A ajin barin aiki ko cibiyar tsofaffin sojoji: ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, kuna yin ayyukan \"Gwada yanzu\" a lokacin.",
      "Ku tunatar da masu koyo game da OPSEC kafin prompt na farko: babu bayanan classified, controlled ko na mission, kuma babu lambobin sirri.",
      "Ku haɗa masu koyo daga rundunoni daban-daban biyu-biyu don su bayyana wa juna layukansu da kalmomin farar hula masu sauƙi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku nuna wa masu koyo TAP da shawarwarin sana'a na VA don taimakon mutum-da-mutum bayan kwas ɗin."
    ]
  }
};
