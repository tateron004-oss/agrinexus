"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-ai-productivity-leadership.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "veterans-ai-productivity-leadership-ha",
  lang: "ha",
  translationOf: "veterans-ai-productivity-leadership",
  category: "Veterans (military)",
  name: "AI don Ƙara Yawan Aiki da Shugabanci",
  skills: "Tsara aikin ƙungiya na mako da AI, Rubuta imel na BLUF, Taƙaita taro zuwa ayyukan da za a yi, Ba da ra'ayi a sarari, Raba aiki da jerin abubuwan dubawa, Amfani da AI cikin hankali da bayanan ƙungiya",
  outcome: "amfani da mataimakin AI don tsara aikin ƙaramar ƙungiya na mako, rubuta imel na bayani mai sarari da ke fara da babban batu (BLUF), da mayar da bayanan taro zuwa ayyukan da za a yi masu mai aiki da kwanan wata, yayin da kuke kiyaye bayanan sirri na membobin ƙungiya daga kayan AI na jama'a.",
  about: [
    "Wannan kwas na tsoffin sojoji ne da suka jagoranci mutane a cikin kakin soja, a matsayin NCO (ƙananan hafsoshi), petty officer, hafsoshi ko shugabannin ƙungiya, kuma yanzu suke jagoranci ko suke son jagoranci a wuraren aikin farar hula. Halayen shugabancinku suna tafiya tare da ku; kalmomi da kayan aiki ne kawai suka ɗan bambanta.",
    "Za ku yi amfani da mataimakin AI kyauta don tsara aikin ƙungiya na mako, rubuta gajerun bayanai masu sarari, mayar da bayanan taro marasa tsari zuwa ayyukan da za a yi, shirya ra'ayi (feedback) da raba aiki da kyau. Za ku kuma koyi ƙa'idojin amfani da AI cikin hankali da bayanan wasu mutane.",
    "Kowane darasi yana ɗaukar kusan minti biyar: ku karanta, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Don ƙungiya ta gaske ko ta atisaye mai mutane uku zuwa shida: ku yi amfani da mataimakin AI don gina tsarin mako ɗaya mai abubuwan da suka fi muhimmanci da masu aiki, ku rubuta imel na bayani mai fara da babban batu (BLUF) zuwa ga manajanku, sannan ku mayar da ɗan gajeren bayanan taro zuwa tebur na ayyukan da za a yi mai mai aiki da kwanan ƙarewa. Ku yi amfani da matsayi (role) maimakon sunaye, kuma ku bar kowane bayanin sirri a waje.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsoffin sojoji da suka jagoranci mutane a cikin kakin soja a matsayin NCO, petty officer, hafsoshi ko shugabannin ƙungiya, kuma yanzu suke jagoranci ko suke son jagorantar ƙananan ƙungiyoyi a wuraren aikin farar hula.",
    startingPoint: "Suna da ƙwarewa sosai wajen tsarawa, ba da bayani (briefing), duba aiki bayan an gama (after-action review) da kula da mutane. Suna iya amfani da imel da kwamfuta. Ba sa amfani da mataimakan AI sosai don aikin shugabanci, kuma rubutun soja yana iya yin kama da tsauri ga masu karatu farar hula.",
    gap: "Ƙungiyoyin farar hula suna sa ran tsare-tsare, imel da ra'ayi da kalmomin farar hula, kuma wuraren aiki da yawa yanzu suna amfani da kayan AI. Masu koyo suna buƙatar amfani da mataimakin AI don rage lokaci a tsarawa, bayanai, bayanan taro, ra'ayi da raba aiki, yayin da suke kiyaye bayanan sirri na membobin ƙungiya a waje, kuma su ci gaba da ɗaukar alhakin aikin ƙarshe.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: kwamfuta ko wayar zamani mai intanet da mataimakin AI kyauta",
      "Sirri da ƙa'ida: matsayi maimakon sunaye, babu albashi, lafiya ko bayanan ma'aikata a kayan AI na jama'a, kuma ƙa'idar AI ta mai ɗaukar aiki ce ta farko",
      "Lokaci: darussa na kusan minti 5 da suka dace da ranar aiki",
      "Atisaye yana amfani da ƙungiya ta gaske ko ta atisaye mai mutane uku zuwa shida"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas ɗin \"Gabatarwa ga AI da Makomar Ma'aikata\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan ƙungiya na mako", action: "amfani da mataimakin AI don gina tsarin mako da aka jera bisa muhimmanci, mai mai aiki ga kowane aiki", standard: "kuma ku gyara duk abin da ya yi kuskure da hankalinku" },
    { id: "O2", condition: "Idan aka ba ku rubutu marar tsari zuwa ga manaja", action: "rubuta imel mai fara da babban batu (BLUF) da taimakon AI", standard: "babban batun yana cikin jimla ta farko, da sautin abokantaka na ƙwararru" },
    { id: "O3", condition: "Idan aka ba ku ɗan gajeren bayanan taro", action: "mayar da bayanan zuwa shawarwarin da aka yanke, ayyukan da za a yi da tambayoyin da suka rage, da AI", standard: "kowane aiki yana da mai aiki ɗaya da kwanan ƙarewa" },
    { id: "O4", condition: "Idan aka ba ku wani abu da abokin aiki ya yi", action: "rubuta daftarin ra'ayi a tsarin yanayi-hali-tasiri (SBI), sannan ku sake rubuta shi da kalmominku", standard: "kuna bayanin halin da kuka gani kawai" },
    { id: "O5", condition: "Idan aka ba ku aikin da za ku iya ba wani", action: "ƙirƙirar jerin abubuwan dubawa na raba aiki mai manufa, ma'auni, ranar ƙarshe, kayan aiki da lokutan dubawa", standard: "da dukkan sassan da ake buƙata" },
    { id: "O6", condition: "Duk lokacin da kuke amfani da AI da bayanan ƙungiya ko kamfani", action: "bin ƙa'idar AI ta mai ɗaukar aikinku, amfani da matsayi maimakon sunaye da kiyaye bayanan sirri a waje", standard: "babu bayanan sirri a kowane prompt, kuma ku ne ke da alhakin aikin ƙarshe" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kammala aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Daga tsara aikin soja zuwa tsarin ƙungiya na mako",
          minutes: 5,
          goal: "Yi amfani da AI don mayar da jerin ayyuka zuwa tsarin mako da aka jera bisa muhimmanci, mai masu aiki.",
          text: [
            "A aikin soja kuna tsarawa daga manufar aiki (mission): abin da dole a yi, zuwa yaushe, da waɗanne mutane da kayan aiki. Ƙungiyoyin farar hula suna buƙatar abu ɗaya; sau da yawa suna kiran shi tsarin aiki (work plan) ko tsarin aikin project.",
            "Ku ba mataimakin AI jerin ayyukanku, ranakun ƙarshe da matsayin membobin ƙungiya, ku nemi ya jera su bisa muhimmanci ya kuma tsara makon. Misali: \"Ga ayyuka 8 na ƙungiyata ta rumbun ajiyar kaya mai mutane 5 a wannan makon, tare da ranakun ƙarshe. Ka jera su bisa gaggawa da muhimmanci, ka yi tebur na Litinin zuwa Jumma'a mai matsayin mai aiki ga kowanne.\"",
            "Ku yi amfani da matsayi, ba cikakkun sunaye ba (\"Shugaban shift A\", \"Mai tuƙa forklift 2\"). Sannan ku yi amfani da hankalinku: AI bai san cewa wani yana hutu ba, ko cewa wani abokin ciniki ya fi muhimmanci ba. Ku ne kuke gyarawa da amincewa da tsarin."
          ],
          steps: ["Ku rubuta ayyukan mako da ranakun ƙarshe.", "Ku rubuta matsayin membobin ƙungiya, ba sunaye ba.", "Ku nemi AI ya jera su bisa gaggawa da muhimmanci, ya yi teburin mako.", "Ku gyara saboda abin da AI bai sani ba: hutu, ƙwarewa, manyan abokan ciniki.", "Ku raba tsarin ƙarshe da ƙungiyar."],
          words: [["Tsarin aiki (work plan)", "jerin ayyuka masu masu aiki da kwanan wata; irin na farar hula na tsarin aikin soja (operations plan)."], ["Gaggawa da muhimmanci", "gaggawa yana nufin a yi yanzu; muhimmanci yana nufin abin da ya fi amfani ga burin. Ba koyaushe ɗaya suke ba."]],
          slides: [
            { title: "Ƙwarewa ɗaya, sababbin kalmomi", bullets: ["Tsara aikin soja = tsarin aiki (work plan)", "Me, zuwa yaushe, wa, da me"] },
            { title: "Bari AI ya jera ya tsara", bullets: ["Ku ba da ayyuka, ranakun ƙarshe da matsayi", "Ku nemi jeri bisa muhimmanci da teburin mako"] },
            { title: "Ku ne kuke amincewa da tsarin", bullets: ["Ku yi amfani da matsayi, ba sunaye ba", "Ku gyara saboda hutu, ƙwarewa, manyan abokan ciniki", "Ku raba tsarin ƙarshe"] }
          ],
          tryIt: "Ku rubuta ayyuka shida da ƙungiyarku (ta gaske ko ta atisaye) dole ta yi a wannan makon. Ku nemi mataimakin AI ya jera su bisa gaggawa da muhimmanci, ya tsara tebur na Litinin zuwa Jumma'a mai matsayin mai aiki ga kowanne. Ku canja abu ɗaya da ya yi kuskure.",
          youCanNow: "mayar da jerin ayyuka zuwa tsarin ƙungiya na mako da aka jera bisa muhimmanci da AI, da gyara shi da hankalinku.",
          quickCheck: [
            { objective: "O1", q: "Mene ne ma'anar jera ayyuka bisa gaggawa da muhimmanci?", options: ["Ku fara yin ayyuka mafi sauƙi", "Ku yanke waɗanne ayyuka ne ake buƙata nan ba da jimawa ba da waɗanda suka fi muhimmanci", "Ku ba mutum ɗaya kowane aiki", "Ku yi ayyuka bisa jerin haruffa"], answer: 1, why: "Gaggawa da muhimmanci sun bambanta, don haka jera su bisa duka biyu yana nuna abin da za a fara yi." },
            { objective: "O1", q: "Tsarin mako na AI ya ba mutum ɗaya dukkan ayyuka shida. Me za ku yi?", options: ["Ku karɓa domin AI ne ya yanke", "Ku goge tsarin ku yi komai da kanku", "Ku nemi AI ya ƙara ayyuka", "Ku yi amfani da hankalinku don raba aikin ku gyara tsarin"], answer: 3, why: "AI yana rubuta daftarin tsarin, amma ku kuka san ƙungiyarku kuma ku ne kuke amincewa da na ƙarshe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta imel da bayanai na BLUF",
          minutes: 5,
          goal: "Rubuta gajeren imel mai fara da babban batu da taimakon AI.",
          text: [
            "BLUF (bottom line up front: babban batu a farko) yana aiki a ofisoshin farar hula ma, ko da mutane ba sa amfani da wannan kalma. Ku sa babban batun ko shawarar da kuke buƙata a jimla ta farko. Sannan ku ba da gajerun dalilai da matakai na gaba.",
            "Ku nemi AI ya sake rubuta dogon daftari: \"Ka sake rubuta wannan a matsayin gajeren imel zuwa ga manajana. Ka sa babban batu a jimla ta farko, sannan layuka uku masu digo (bullet), sannan mataki na gaba. Sautin abokantaka na ƙwararru. Babu kalmomin soja.\"",
            "Ku duba sautin. Rubutun soja yana iya yin kama da tsauri ga masu karatu farar hula. Ɗan \"Na gode\" ko \"Ina farin cikin tattaunawa\" yana taimakawa. Ku karanta shi sau ɗaya kamar ku ne kuka karɓa."
          ],
          steps: ["Ku rubuta abin da kuke son faɗa, ko da ba shi da tsari.", "Ku nemi AI ya sa babban batu a farko, sannan layuka masu digo, sannan mataki na gaba.", "Ku nemi ya cire kalmomin soja ya yi amfani da sautin abokantaka na ƙwararru.", "Ku karanta shi kamar ku ne kuka karɓa, ku gyara duk abin da ba shi da sarari."],
          words: [["BLUF", "bottom line up front: babban batu ko buƙata yana zuwa farko."], ["Sauti (tone)", "yadda rubutunku yake ji ga mai karatu: na abokantaka, mai tsauri, na ladabi sosai."]],
          slides: [
            { title: "BLUF yana aiki a ko'ina", bullets: ["Babban batu ko buƙata a farko", "Gajerun dalilai a gaba", "Mataki na gaba a ƙarshe"] },
            { title: "Ku nemi AI ya sake rubutawa", bullets: ["\"Babban batu a jimla ta farko\"", "\"Layuka uku, sannan mataki na gaba\"", "\"Na abokantaka, na ƙwararru, babu kalmomin soja\""] },
            { title: "Ku duba sautin", bullets: ["Rubutun soja yana iya yin kama da tsauri", "Ku ƙara \"Na gode\" ko \"Ina farin cikin tattaunawa\"", "Ku karanta shi kamar ku ne kuka karɓa"] }
          ],
          tryIt: "Ku rubuta rubutu marar tsari zuwa ga manaja game da jinkiri a wani aiki. Ku nemi mataimakin AI ya sake rubuta shi a matsayin imel na BLUF mai layuka uku da mataki na gaba, da sautin abokantaka na ƙwararru.",
          youCanNow: "rubuta gajeren imel mai sarari da ke fara da babban batu, wanda ya dace da wurin aikin farar hula.",
          quickCheck: [
            { objective: "O2", q: "A imel na BLUF, me ke zuwa farko?", options: ["Babban batu ko buƙata", "Dogon labarin baya", "Sa hannunku", "Jerin dukkan waɗanda suka taimaka"], answer: 0, why: "Babban batu a farko yana nufin mai karatu yana ganin muhimmin batu ko buƙata nan take." },
            { objective: "O2", q: "Imel ɗin da AI ya rubuta yana da gajarta da tsauri. Me za ku yi kafin ku aika?", options: ["Ku aika kamar yadda yake", "Ku ninka tsawonsa sau biyu", "Ku ƙara layin abokantaka ku karanta shi kamar ku ne kuka karɓa", "Ku cire babban batun"], answer: 2, why: "Layin abokantaka da karantawa kamar mai karɓa suna sa shi ya kasance a sarari kuma na ƙwararru." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mayar da bayanan taro zuwa ayyukan da za a yi",
          minutes: 5,
          goal: "Yi amfani da AI don mayar da bayanan taro zuwa tebur na ayyuka masu masu aiki da kwanakin ƙarewa.",
          text: [
            "Taro yana ɓata lokaci idan babu wanda ya fita da sanin wa zai yi me. Al'adar duba aiki bayan an gama tana gyara wannan: me aka yanke, wa ke da alhakin kowane aiki, kuma yaushe ne ranar ƙarshe.",
            "Ku liƙa bayananku (da matsayi maimakon sunaye, kuma babu bayanan sirri) ku tambaya: \"Ka mayar da waɗannan bayanai zuwa: 1) shawarwarin da aka yanke, 2) tebur na ayyukan da za a yi mai mai aiki da kwanan ƙarewa, 3) tambayoyin da suka rage.\" Idan wani aiki ba shi da mai aiki ko kwanan wata, ya kamata AI ya nuna shi.",
            "Kayan aiki da yawa na wurin aiki, kamar Microsoft Teams mai Copilot ko Google Meet mai Gemini, suna iya taƙaita taro idan mai ɗaukar aikinku ya kunna hakan. Ku bi ƙa'idodin mai ɗaukar aikinku game da ɗaukar sauti da AI, kuma ku faɗa wa mutane idan ana ɗaukar taron ko ana taƙaita shi."
          ],
          steps: ["Ku rubuta gajerun bayanai yayin taron.", "Ku canja sunaye zuwa matsayi ku cire bayanan sirri.", "Ku nemi AI ya ba da shawarwari, tebur na ayyuka mai mai aiki da kwanan ƙarewa, da tambayoyin da suka rage.", "Ku cike duk mai aiki ko kwanan wata da ya ɓace.", "Ku aika taƙaitawar ga ƙungiyar a ranar."],
          words: [["Aikin da za a yi (action item)", "aiki daga taro mai mai aiki ɗaya da kwanan ƙarewa."], ["Duba aiki bayan an gama (after-action review)", "ɗan gajeren duba baya: me ya faru, me ya yi aiki, me za a canja."]],
          slides: [
            { title: "Kowane taro ya kamata ya ƙare da", bullets: ["Shawarwarin da aka yanke", "Ayyukan da za a yi: mai aiki + kwanan ƙarewa", "Tambayoyin da suka rage"] },
            { title: "Ku nemi AI ya tsara bayanan", bullets: ["Ku liƙa bayanai da matsayi, ba sunaye ba", "Ku nemi shawarwari, ayyuka, tambayoyi", "Ya nuna inda mai aiki ko kwanan wata ya ɓace"] },
            { title: "Ku bi ƙa'idodin wurin aiki", bullets: ["Ku yi amfani da kayan AI na taro idan an yarda kawai", "Ku faɗa wa mutane idan kuna ɗauka ko taƙaitawa", "Ku aika taƙaitawar a ranar"] }
          ],
          tryIt: "Ku rubuta layuka biyar na bayanan taro na atisaye. Ku nemi mataimakin AI ya mayar da su zuwa shawarwari, tebur na ayyuka mai matsayin mai aiki da kwanan ƙarewa, da tambayoyin da suka rage.",
          youCanNow: "mayar da bayanan taro zuwa tebur na ayyuka mai sarari, mai masu aiki da kwanakin wata.",
          quickCheck: [
            { objective: "O3", q: "Mece ce tambayar da ta rage a taƙaitawar taro?", options: ["Aiki mai mai aiki", "Shawarar da ƙungiyar ta yanke", "Tambayar da ba wanda zai iya yi", "Abin da ba a yanke ba tukuna, wanda ke buƙatar amsa daga baya"], answer: 3, why: "Tambayoyin da suka rage batutuwa ne da taron bai warware ba, an jera su don kada a manta da su." },
            { objective: "O3", q: "Teburin ayyuka na AI yana da \"Yin odar kayan gyara\" ba tare da mai aiki ba. Me za ku yi?", options: ["Ku bar shi; wani zai yi", "Ku ba shi mai aiki ɗaya da kwanan ƙarewa", "Ku ba kowa", "Ku goge shi"], answer: 1, why: "Aikin da za a yi yana cika ne kawai idan yana da mai aiki ɗaya da kwanan ƙarewa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kammala aiki",
        questions: [
          { objective: "O1", q: "Wane suna ne farar hula suka saba amfani da shi don tsarin aikin soja (mission ko operations plan)?", options: ["Tsarin aiki (work plan) ko tsarin project", "Takardar bayanin kai (résumé)", "Kasafin kuɗi", "Teburin fassara ƙwarewa (crosswalk)"], answer: 0, why: "Ƙungiyoyin farar hula yawanci suna kiran shi tsarin aiki ko tsarin project." },
          { objective: "O6", q: "Me yasa za ku yi amfani da matsayi kamar \"Shugaban shift A\" maimakon sunaye a prompt na AI?", options: ["AI ba ya iya karanta sunaye", "Don kiyaye bayanan membobin ƙungiya a sirri", "Sunaye suna tsawaita amsoshi", "Ya fi sauƙin rubutawa"], answer: 1, why: "Matsayi yana ba AI abin da yake buƙata ba tare da raba bayanan mutane ba." },
          { objective: "O1", q: "Tsarin AI ya sa babban aiki a ranar da wani yake hutu. Ku:", options: ["Ku bar tsarin AI yadda yake", "Ku soke aikin", "Ku gyara tsarin da hankalinku", "Ku nemi mutumin ya fasa hutunsa"], answer: 2, why: "Kun san abubuwan da AI bai sani ba; ku ne kuke amincewa da tsarin ƙarshe." },
          { objective: "O2", q: "Me ke shiga jimla ta farko ta imel na BLUF?", options: ["Doguwar gaisuwa", "Tarihin baya", "Barkwanci", "Babban batu ko buƙata"], answer: 3, why: "Babban batu a farko: babban batun yana zuwa farko." },
          { objective: "O3", q: "Me ke sa aikin da za a yi ya cika?", options: ["Mai aiki ɗaya da kwanan ƙarewa", "Dogon bayani", "Kowa ne ke da alhakinsa", "Babu kwanan wata, don ya zama sassauƙa"], answer: 0, why: "Aikin da za a yi yana buƙatar mai aiki ɗaya a sarari da kwanan ƙarewa." }
        ]
      }
    },
    {
      name: "Babi na 2: Jagorantar mutane tare da AI a matsayin mataimaki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Shirya ra'ayi mai sarari da adalci",
          minutes: 5,
          goal: "Yi amfani da AI don rubuta daftarin ra'ayi a tsarin yanayi-hali-tasiri, sannan ku mayar da shi naku.",
          text: [
            "Ra'ayi (feedback) mai kyau yana da takamaiman bayani kuma game da hali yake, ba game da halayyar mutum ba. Tsari mai sauƙi shi ne yanayi, hali, tasiri (SBI): \"A miƙa aikin shift na ranar Talata (yanayi), kun bi kowane odar da ke buɗe ɗaya bayan ɗaya (hali), kuma shift na gaba ya fara ba tare da jinkiri ba (tasiri).\" Yana aiki don yabo da kuma gyara.",
            "AI zai iya taimaka muku wajen shiryawa: \"Ka taimake ni in rubuta ra'ayi na SBI ga wani memba na ƙungiya da ya yi latti zuwa taron safe (huddle) sau uku a wannan watan. Ka sa ya kasance mai ladabi, ka ƙare shi da tambayar da ke gayyatar ya faɗi nasa ɓangaren.\" Ku yi amfani da matsayi, ba suna ba.",
            "Ku isar da shi da kanku, ido da ido ko ta kira, kuma ku saurara. AI yana taimaka muku shirya kalmomi; amana tsakaninku da mutanenku daga gare ku take."
          ],
          steps: ["Ku zaɓi takamaiman yanayi ɗaya.", "Ku bayyana halin da kuka gani, ba halayyar mutumin ba.", "Ku faɗi tasirin a kan ƙungiya ko aikin.", "Ku nemi AI ya taimaka wajen faɗar shi cikin ladabi, da matsayi ba suna ba.", "Ku isar da shi da kanku kuma ku saurara."],
          words: [["SBI", "situation, behavior, impact (yanayi, hali, tasiri): hanya mai sauƙi ta ba da ra'ayi a sarari."], ["Hali (behavior)", "abin da wani ya yi ko ya faɗa, wanda za ku iya gani ko ji."]],
          slides: [
            { title: "Ra'ayi na SBI", bullets: ["Yanayi: yaushe da a ina", "Hali: abin da suka yi", "Tasiri: sakamakon a kan ƙungiya ko aiki"] },
            { title: "Bari AI ya taimaka muku shiryawa", bullets: ["Ku yi amfani da matsayi, ba suna ba", "Ku nemi kalmomi masu ladabi", "Ku ƙare da tambaya don su faɗi nasu ɓangaren"] },
            { title: "Ku ne kuke isar da shi", bullets: ["Ido da ido ko ta kira", "Ku saurara", "Amana daga gare ku take, ba daga kayan aikin ba"] }
          ],
          tryIt: "Ku yi tunanin abu ɗaya da wani abokin aiki ya yi da kyau kwanan nan. Ku nemi mataimakin AI ya taimaka muku rubuta yabo na SBI game da shi, da matsayi ba suna ba. Sannan ku sake rubuta shi da kalmominku.",
          youCanNow: "shirya ra'ayi mai sarari da adalci na yanayi-hali-tasiri da taimakon AI, da isar da shi da kanku.",
          quickCheck: [
            { objective: "O4", q: "A ra'ayi na SBI, mene ne sashen hali?", options: ["Ra'ayinku game da ɗabi'ar mutumin", "Ranar taron", "Abin da mutumin ya yi wanda kuka gani ko kuka ji", "Tasirin a kan yanayin zuciyarku"], answer: 2, why: "Hali shi ne takamaiman aikin da kuka gani, ba hukunci game da mutumin ba." },
            { objective: "O4", q: "AI ya rubuta yabo ga abokin aiki wanda yake jin kamar ba na zuciya ba. Me za ku yi?", options: ["Ku sake rubuta shi da kalmominku ku ba da shi da kanku", "Ku aika rubutun AI ta imel kamar yadda yake", "Ku bar AI ya aika", "Ku bar yabon"], answer: 0, why: "AI zai iya taimaka muku shiryawa, amma ra'ayi ya kamata ya kasance da kalmominku kuma daga gare ku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Raba aiki da jerin abubuwan dubawa mai sarari",
          minutes: 5,
          goal: "Yi amfani da AI don gina jerin abubuwan dubawa na raba aiki da ke faɗin aikin, ma'auni, ranar ƙarshe da lokacin dubawa.",
          text: [
            "Kun san niyyar kwamanda (commander's intent): ku faɗa wa mutane manufa da yadda ƙarshen zai kasance, ba matakai kawai ba, don su iya daidaitawa. Raba aiki a farar hula yana aiki haka.",
            "Miƙa aiki mai kyau yana ƙunshe da: aikin, dalilin da yasa yake da muhimmanci (niyya), yadda aikin da aka gama yake kama (ma'auni), ranar ƙarshe, kayan aiki da ikon da suke da shi, da yaushe za ku duba. Ku tambayi AI: \"Ka yi jerin abubuwan dubawa na raba aiki mai shafi ɗaya don miƙa rahoton ƙididdigar kaya na mako ga sabon memba na ƙungiya. Ka haɗa manufa, ma'auni, ranar ƙarshe, kayan aiki da lokutan dubawa.\"",
            "Sannan ku miƙa shi ido da ido, ku nemi su sake bayyana muku shi, sannan ku ja da baya. Ku duba a lokutan da aka amince da su maimakon ku tsaya a kansu koyaushe."
          ],
          steps: ["Ku faɗi aikin da dalilin da yasa yake da muhimmanci.", "Ku bayyana yadda aikin da aka gama yake kama.", "Ku sa ranar ƙarshe, kayan aiki da iko.", "Ku nemi AI ya mayar da wannan zuwa jerin abubuwan dubawa mai shafi ɗaya.", "Ku miƙa shi, ku nemi su sake bayyana muku, ku duba kamar yadda aka amince."],
          words: [["Raba aiki (delegate)", "ba wani aiki da ikon yin sa."], ["Niyya (intent)", "manufa da yadda ƙarshen aiki zai kasance, don mutane su iya daidaitawa idan abubuwa sun canja."]],
          slides: [
            { title: "Niyyar kwamanda, irin ta farar hula", bullets: ["Manufa da yadda ƙarshe zai kasance", "Ba matakai kawai ba", "Don mutane su iya daidaitawa"] },
            { title: "Miƙa aiki mai kyau yana ƙunshe da", bullets: ["Aikin da dalilin muhimmancinsa", "Ma'auni da ranar ƙarshe", "Kayan aiki, iko da lokutan dubawa"] },
            { title: "Sannan ku ja da baya", bullets: ["Ku nemi su sake bayyana muku", "Ku duba a lokutan da aka amince", "Kada ku tsaya a kansu koyaushe"] }
          ],
          tryIt: "Ku zaɓi aiki ɗaya da za ku iya ba wani. Ku nemi mataimakin AI ya yi jerin abubuwan dubawa na raba aiki mai shafi ɗaya mai manufa, ma'auni, ranar ƙarshe, kayan aiki da lokutan dubawa.",
          youCanNow: "raba aiki da jerin abubuwan dubawa mai sarari da ke ba da manufa, ma'auni, ranar ƙarshe da lokutan dubawa.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za ku haɗa manufa idan kuna raba aiki?", options: ["Don mutumin kada ya iya canja komai", "Don mutumin ya iya daidaitawa idan abubuwa sun canja", "Don kada ku taɓa buƙatar dubawa", "Don aikin ya ɗauki lokaci mai tsawo"], answer: 1, why: "Sanin manufa da yadda ƙarshe zai kasance yana bar mutane su yi zaɓi mai kyau idan tsare-tsare sun canja." },
            { objective: "O5", q: "Kun miƙa rahoton da za a gama ranar Jumma'a. Me za ku yi a gaba?", options: ["Ku jira har Jumma'a kuna fata", "Ku karɓe aikin nan take", "Ku sake yin shi da kanku ba tare da tambaya ba", "Ku duba a lokutan da aka amince"], answer: 3, why: "Lokutan dubawa da aka amince suna bar ku gano matsaloli da wuri ba tare da takura ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Amfani da AI cikin hankali a matsayin shugaba",
          minutes: 5,
          goal: "Yi amfani da ƙa'idoji uku na amfani da AI cikin hankali da bayanan ƙungiya da na kamfani.",
          text: [
            "A matsayinku na shugaba, ku ne abin koyi. Ƙa'ida ta 1: ku bi ƙa'idar AI ta mai ɗaukar aikinku. Kamfanoni da yawa suna faɗin waɗanne kayan AI aka amince da su da waɗanne bayanai za a iya sakawa a ciki. Idan babu ƙa'ida, ku tambaya.",
            "Ƙa'ida ta 2: ku kiyaye bayanan sirri na mutane daga kayan AI na jama'a: matsalolin aiki tare da suna, lafiya, albashi, adireshin gida, ko duk abin da aka faɗa a asirce. Ku kiyaye sirrin abokan ciniki da na kamfani a waje ma. Ku yi amfani da matsayi da bayanai na gama-gari.",
            "Ƙa'ida ta 3: sakamakon naku ne. Ku duba gaskiya, lambobi da sautin kafin wani abu ya fita. Idan AI ya taimaka wajen rubuta wani abu mai muhimmanci, ku karanta kowace kalma. Faɗa wa ƙungiyarku yadda kuke amfani da AI, da yadda su ma za su iya amfani da shi, yana gina amana."
          ],
          steps: ["Ku nemo ku karanta ƙa'idar AI ta mai ɗaukar aikinku, ko ku tambayi manajanku.", "Ku yi amfani da kayan aikin da aka amince da su kawai don bayanan aiki.", "Ku kiyaye bayanan sirri da na asirce daga AI na jama'a.", "Ku duba duk abin da AI ya rubuta kafin ya fita.", "Ku faɗa wa ƙungiyarku yadda za a iya amfani da AI."],
          words: [["Ƙa'idar AI (AI policy)", "dokokin mai ɗaukar aiki game da waɗanne kayan AI za a iya amfani da su da waɗanne bayanai za a iya sakawa a ciki."], ["Na asirce (confidential)", "bayanan da ake son a ajiye su a sirri a cikin ƙungiya ko kamfani."]],
          slides: [
            { title: "Ƙa'ida ta 1: Ku bi ƙa'idar", bullets: ["Ku yi amfani da kayan AI da aka amince da su", "Babu ƙa'ida? Ku tambaya"] },
            { title: "Ƙa'ida ta 2: Ku kare mutane", bullets: ["Babu sunaye tare da matsalolin aiki, lafiya ko albashi", "Babu sirrin abokan ciniki ko na kamfani", "Ku yi amfani da matsayi da kalmomi na gama-gari"] },
            { title: "Ƙa'ida ta 3: Sakamakon naku ne", bullets: ["Ku duba gaskiya, lambobi da sauti", "Ku karanta kowace kalma ta aiki mai muhimmanci", "Ku kasance a fili da ƙungiyarku game da AI"] }
          ],
          tryIt: "Aikin ƙarshe: don ƙungiya mai mutane uku zuwa shida, ku yi amfani da mataimakin AI don gina tsarin mako ɗaya mai masu aiki, ku rubuta imel na bayani na BLUF, sannan ku mayar da gajerun bayanan taro zuwa tebur na ayyukan da za a yi. Ku yi amfani da matsayi maimakon sunaye, kuma ku duba cewa babu bayanin sirri a cikin ko ɗaya.",
          youCanNow: "amfani da AI a matsayin shugaba ta hanyar da ke bin ƙa'ida, ke kare mutanenku kuma ke sa ku ɗauki alhaki.",
          quickCheck: [
            { objective: "O6", q: "Wace ƙa'ida ce ke zuwa farko idan kuna amfani da AI a wurin aiki?", options: ["Ku bi ƙa'idar AI ta mai ɗaukar aikinku", "Ku yi amfani da kowane kayan aiki da kuke so", "Ku liƙa komai don AI ya sami cikakken bayani", "Ku bar AI ya yanke shawarar ƙarshe"], answer: 0, why: "Ƙa'idar mai ɗaukar aikinku ce ke faɗin waɗanne kayan aiki da bayanai za ku iya amfani da su." },
            { objective: "O6", q: "Kuna son taimakon AI da rubutu game da matsalar albashin wani memba na ƙungiya. Me za ku yi?", options: ["Ku liƙa sunansa da bayanan albashinsa", "Ku liƙa dukkan fayil ɗinsa", "Ku bar bayanan sirri a waje ku bayyana yanayin da matsayi", "Ku saka shi a hira ta jama'a"], answer: 2, why: "Albashi da bayanan kai ba sa shiga kayan AI na jama'a; matsayi yana kiyaye mutumin a sirri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Jagorantar mutane tare da AI a matsayin mataimaki",
        questions: [
          { objective: "O4", q: "Me SBI yake nufi?", options: ["Situation, behavior, impact (yanayi, hali, tasiri)", "Staff, budget, inventory (ma'aikata, kasafi, kaya)", "Speed, balance, intent (gudu, daidaito, niyya)", "Safety, briefing, inspection (tsaro, bayani, dubawa)"], answer: 0, why: "SBI tsari ne mai sauƙi na ba da ra'ayi a sarari." },
          { objective: "O4", q: "Wane ra'ayi ne ya dogara ga hali?", options: ["\"Kai malalaci ne.\"", "\"Kun iso minti 15 a makare zuwa taron safe sau uku a wannan watan.\"", "\"Kana da mummunar ɗabi'a.\"", "\"Kai ne mafi muni.\""], answer: 1, why: "Yana bayyana abin da mutumin ya yi, wanda za a iya gani." },
          { objective: "O5", q: "A raba aiki, \"niyya\" (intent) tana nufin:", options: ["Takamaiman matakai kawai", "Ranar ƙarshe kawai", "Manufa da yadda ƙarshe zai kasance, don mutane su iya daidaitawa", "Yadda kuke ji game da aikin"], answer: 2, why: "Niyya tana bar mutane su daidaita idan abubuwa sun canja." },
          { objective: "O6", q: "Kamfaninku ba shi da ƙa'idar AI. Me za ku yi?", options: ["Ku yi amfani da kowane kayan aiki da kowane bayani", "Ku hana kowa amfani da AI da kanku", "Ku liƙa bayanan abokan ciniki a chatbot na jama'a", "Ku tambayi manajanku kafin ku yi amfani da AI da bayanan aiki"], answer: 3, why: "Idan babu ƙa'ida, ku tambaya kafin ku saka bayanan aiki a AI." },
          { objective: "O6", q: "Wanne ne ba laifi a saka a prompt na AI na jama'a?", options: ["\"Wani memba na ƙungiya ya yi latti zuwa taron safe sau uku\"", "Matsalar lafiyar wani ma'aikaci da sunansa", "Lambobin asusun abokan ciniki", "Adireshin gidajen ƙungiyarku"], answer: 0, why: "Bayani na gama-gari bisa matsayi yana kiyaye bayanan mutane a sirri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Ƙara Yawan Aiki da Shugabanci",
    questions: [
      { objective: "O1", q: "Tsarin aiki na farar hula yana ƙunshe da:", options: ["Wanda ke jagoranci kawai", "Me, zuwa yaushe, wa da me", "Kasafin kuɗi kawai", "Lokacin taro kawai"], answer: 1, why: "Kamar tsarin aikin soja, yana ƙunshe da ayyuka, ranaku, mutane da kayan aiki." },
      { objective: "O1", q: "Idan kuna neman AI ya jera ayyuka, yana taimakawa a nemi:", options: ["Jeri barkatai", "Jeri bisa haruffa", "Jeri bisa gaggawa da muhimmanci", "Aiki mafi tsawo a farko"], answer: 2, why: "Gaggawa da muhimmanci suna ba da jerin abubuwan da suka fi muhimmanci mai amfani." },
      { objective: "O1", q: "Gaggawa da muhimmanci:", options: ["Koyaushe ɗaya suke", "Dukansu kalmomi ne na \"mai sauƙi\"", "Kalmomin soja ne kawai", "Ba koyaushe abu ɗaya ba ne"], answer: 3, why: "Gaggawa yana nufin yanzu; muhimmanci yana nufin abin da ya fi amfani ga burin." },
      { objective: "O1", q: "Wa ke amincewa da tsarin ƙungiya na ƙarshe?", options: ["Ku, shugaba", "AI", "Sabon memba na ƙungiya", "Babu kowa"], answer: 0, why: "Kuna amfani da hankalin da AI ba shi da shi." },
      { objective: "O2", q: "BLUF yana nufin:", options: ["Briefing, lesson, update, follow-up", "Bottom line up front (babban batu a farko)", "Basic leadership under fire", "Best last unit file"], answer: 1, why: "Ku sa babban batu a farko." },
      { objective: "O2", q: "Rubutun soja yana iya yin kama da tsauri ga farar hula. Gyara mai kyau shi ne:", options: ["Ku tsawaita shi", "Ku ƙara gajartattun kalmomi (acronym)", "Ku ƙara layin abokantaka kamar \"Ina farin cikin tattaunawa\"", "Ku rubuta shi duka da manyan haruffa"], answer: 2, why: "Sautin abokantaka na ƙwararru yana taimakawa masu karatu farar hula." },
      { objective: "O2", q: "Kafin ku aika imel da AI ya rubuta, ya kamata ku:", options: ["Aika shi ba tare da karantawa ba", "Ƙara kalmomin soja", "Tsawaita shi", "Karanta shi kamar ku ne kuka karɓa ku gyara duk abin da ba shi da sarari"], answer: 3, why: "Abin da kuka aika naku ne." },
      { objective: "O3", q: "Taƙaitawar taro ya kamata ta ƙunshi:", options: ["Shawarwari, ayyuka masu mai aiki da kwanan wata, da tambayoyin da suka rage", "Waɗanda suka halarta kawai", "Barkwanci kawai", "Lokacin farawa kawai"], answer: 0, why: "Wannan yana faɗa wa kowa wa zai yi me zuwa yaushe." },
      { objective: "O6", q: "Kafin ku liƙa bayanan taro a AI na jama'a, ya kamata ku:", options: ["Ƙara lambobin wayar kowa", "Canja sunaye zuwa matsayi ku cire bayanan sirri", "Ƙara sirrin kamfani", "Kada ku yi komai"], answer: 1, why: "Ku fara kare bayanan mutane." },
      { objective: "O6", q: "Amfani da kayan AI na taƙaita taro a wurin aiki ba laifi ba ne idan:", options: ["Babu wanda ya sani", "Kuna amfani da asusunku na kai da bayanan kamfani", "Mai ɗaukar aikinku ya yarda kuma an faɗa wa mutane", "Koyaushe, komai ƙa'idoji"], answer: 2, why: "Ku bi ƙa'idodin mai ɗaukar aikinku kuma ku kasance a fili game da ɗaukar taro." },
      { objective: "O3", q: "Aikin da ba shi da mai aiki ya kamata a:", options: ["Yi watsi da shi", "Ba kowa", "Goge shi", "Ba shi mai aiki ɗaya da kwanan ƙarewa"], answer: 3, why: "Idan kowa ne ke da alhaki, sau da yawa babu wanda zai yi." },
      { objective: "O4", q: "Ra'ayi mai kyau game da shi ne:", options: ["Halin da kuka gani", "Halayyar mutumin", "Jita-jita", "Yanayin zuciyarku"], answer: 0, why: "Hali yana da takamaiman bayani kuma yana da adalci." },
      { objective: "O4", q: "A ra'ayi na SBI, \"tasiri\" (impact) shi ne:", options: ["Matsayin mutumin a aiki", "Sakamakon a kan ƙungiya ko aikin", "Hukunci", "Kwanan wata"], answer: 1, why: "Tasiri yana bayyana dalilin da yasa halin yake da muhimmanci." },
      { objective: "O4", q: "Wa ya kamata ya isar da ra'ayin da AI ya taimaka shiryawa?", options: ["AI ta imel", "Abokin aiki", "Ku, ido da ido ko ta kira", "Babu kowa"], answer: 2, why: "Amana daga gare ku take, ba daga kayan aikin ba." },
      { objective: "O5", q: "Idan kuna raba aiki, bayan kun miƙa aikin ya kamata ku:", options: ["Yi shi da kanku duk da haka", "Tsaya a kan kowane mataki", "Kada ku sake dubawa", "Duba a lokutan da aka amince"], answer: 3, why: "Lokutan dubawa da aka amince suna daidaita amana da ɗaukar alhaki." },
      { objective: "O5", q: "Miƙa aiki mai kyau yana haɗa:", options: ["Manufa, ma'auni, ranar ƙarshe, kayan aiki da lokutan dubawa", "Ranar ƙarshe kawai", "\"Ka yi\" kawai", "Kalmar sirrinku"], answer: 0, why: "Waɗannan sassa suna bar mutumin ya yi nasara." },
      { objective: "O5", q: "Neman mutumin ya sake bayyana muku aikin yana taimaka muku:", options: ["Ɓata lokaci", "Tabbatar cewa ya fahimta", "Gwada ƙwaƙwalwarsa don wasa", "Guje wa ba da niyya"], answer: 1, why: "Yana gano rashin fahimta da wuri." },
      { objective: "O6", q: "Ƙa'ida ta 1 ta amfani da AI a matsayin shugaba ita ce:", options: ["Yi amfani da kowane kayan aiki kyauta don komai", "Kada ku taɓa amfani da AI", "Ku bi ƙa'idar AI ta mai ɗaukar aikinku", "Bari ƙungiyar ta yanke shawara ita kaɗai"], answer: 2, why: "Ƙa'ida ce ke faɗin waɗanne kayan aiki da bayanai aka yarda da su." },
      { objective: "O6", q: "Wanne ne kada ya taɓa shiga kayan AI na jama'a?", options: ["\"Ka tsara makona\"", "\"Ka sake rubuta wannan imel\"", "Jerin sunayen ayyuka", "Bayanan albashi da lafiya na wani ma'aikaci da sunansa"], answer: 3, why: "Wannan bayanin sirri ne na asirce." },
      { objective: "O6", q: "Idan AI ya taimaka wajen rubuta muhimmin rahoto, wa ke da alhakinsa?", options: ["Ku", "Kamfanin AI", "Mai karatu", "Babu kowa"], answer: 0, why: "Sakamakon naku ne, don haka ku duba kowace kalma." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      4,
      7,
      8,
      10,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tsarin mako",
        objective: "O1",
        notYet: "Ayyukan ba a jera su bisa muhimmanci ba, ko wasu ba su da mai aiki.",
        meets: "Tsarin mako ɗaya mai abubuwan da suka fi muhimmanci da matsayin mai aiki ga kowane aiki.",
        exceeds: "Mai koyo ya canja wani abu da AI ya yi kuskure kuma zai iya faɗin dalili."
      },
      {
        name: "Imel na bayani na BLUF",
        objective: "O2",
        notYet: "Babban batun yana ɓoye, ko sautin yana da tsauri.",
        meets: "Jimla ta farko tana faɗin babban batu, da gajerun layuka masu digo da mataki na gaba, cikin sautin ƙwararru.",
        exceeds: "An karanta imel ɗin kamar mai karɓa, kuma an rage shi zuwa mafi ƙarancin kalmomi."
      },
      {
        name: "Ayyukan da za a yi",
        objective: "O3",
        notYet: "Wasu ayyuka ba su da mai aiki ko kwanan ƙarewa.",
        meets: "Shawarwari, ayyuka masu mai aiki ɗaya da kwanan ƙarewa kowanne, da tambayoyin da suka rage.",
        exceeds: "Kwanakin ƙarewa sun dace da tsarin mako, kuma tambayoyin da suka rage suna da wanda zai amsa su."
      },
      {
        name: "Sirri da ƙa'ida",
        objective: "O6",
        notYet: "Suna ko bayanin sirri yana cikin prompt ko aikin.",
        meets: "Matsayi maimakon sunaye, kuma babu bayanin sirri a ko'ina.",
        exceeds: "Mai koyo ya faɗi ƙa'idar AI ta mai ɗaukar aikinsa ko tambayar da zai yi wa manajansa game da ita."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi amfani da tsarin mako, imel na BLUF ko teburin ayyuka a wurin aiki cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka shiga ko suka ci gaba da matsayin shugaban ƙungiya, mai kulawa ko manaja na farar hula cikin watanni 6",
      "Masu koyo da suka fara wani kwas na Koach Learn na tsoffin sojoji ko na shugabanci cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko wayar zamani mai intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini, ko kayan aikin da mai ɗaukar aikinku ya amince da shi",
      "Jerin ayyuka da bayanan taro na atisaye masu amfani da matsayi, ba sunaye ba",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku samar da yanayin ƙungiya na atisaye masu matsayi kamar \"Shugaban shift A\" don kada kowa ya yi amfani da sunaye ko bayanan abokan aiki na gaske.",
      "Ku nemi masu koyo su duba ƙa'idar AI ta mai ɗaukar aikinsu kafin su yi amfani da AI da bayanan aiki na gaske.",
      "Ku haɗa masu koyo bibbiyu don su karanta imel ɗin BLUF na juna kamar masu karɓa, kuma su ba da shawara ɗaya.",
      "Ku yi atisayen ra'ayi na SBI da babbar murya bibbiyu bayan daftarin AI, don masu koyo su mayar da shi nasu.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
