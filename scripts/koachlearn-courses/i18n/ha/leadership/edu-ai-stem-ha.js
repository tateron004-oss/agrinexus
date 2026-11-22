"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-ai-stem.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-ai-stem-ha",
  lang: "ha",
  translationOf: "edu-ai-stem",
  category: "Leadership Development",
  name: "AI a Koyar da STEM",
  skills: "Ƙirƙirar tambayoyin STEM da amsoshin da aka tabbatar, Amfani da AI a matsayin mai taimakon rubuta code a binciken bayanai, Koyar da yadda AI ke koyo daga bayanai, Tabbatar da iƙirarin AI kamar masanin kimiyya, Amfani da AI a tsarin ƙirar injiniya, Tsara ayyukan da ke nuna tunanin ɗalibai",
  outcome: "tsara da koyar da darasin STEM da ɗalibai ke amfani da AI a matsayin kayan aiki, don taimakon rubuta code, nazarin bayanai ko tunanin zane-zane, sannan su tabbatar da abin da ya bayar kamar masana kimiyya da injiniyoyi, tare da ayyukan da ke nuna tunanin ɗalibai a fili.",
  about: [
    "Wannan kwas ɗin na malaman kimiyya, fasaha, injiniya da lissafi (STEM) ne, da masu horar da malamai da shugabanni. AI kayan aiki ne na koyon STEM, kuma shi kansa wani fanni ne na STEM. Ya kamata ɗalibai su koyi amfani da shi, su duba shi, kuma su fahimci yadda yake aiki.",
    "Babi na 1 yana amfani da AI a matsayin kayan aikin malami da ɗalibi: tambayoyin atisaye da amsoshin da aka tabbatar, kwaikwayo (simulation) da zana jadawali, da binciken bayanai inda AI ke taimakawa wajen rubuta code. Babi na 2 yana mai da AI abin da ake koyo: yadda na'urori ke koyo daga bayanai, tabbatar da iƙirarin AI kamar masanin kimiyya, AI a tsarin ƙirar injiniya, da ayyukan da ke riƙe tunanin ɗalibai a tsakiya.",
    "Amfanin ɗalibai da kayan AI ya dogara da amincewar hukumar ilimi ta yankinku (district) da ƙa'idojin shekarun kowane kayan aiki. Kada ku saka bayanan ɗalibai a kayan aikin da ba a amince da su ba. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku tsara, kuma (idan za ku iya) ku koyar da darasin STEM ɗaya inda ɗalibai ke amfani da kayan AI da aka amince da shi a matsayin wani ɓangare na bincike, misali neman AI ya taimaka wajen rubuta code na Python a Google Colab don zana jadawalin bayanan jama'a (public dataset), ko tunanin zane-zane don ƙalubalen injiniya. Dole darasin ya ƙunshi matakin tabbatarwa (ɗalibai suna duba code, lambobi ko iƙirarin AI da bayanai, lissafi ko gwaji), aikin da ɗalibai ke bayanin tunaninsu da kalmominsu, da matakin amfani da AI (AI use level) na aikin.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Malaman kimiyya, fasaha, injiniya da lissafi, masu horar da malamai da shugabannin makaranta da ke son ɗalibai su yi amfani da AI a matsayin kayan aiki a bincike da zane, yayin da suke gina tunani na gaske.",
    startingPoint: "Suna iya koyar da darussan STEM, gudanar da gwaje-gwaje a ɗakin gwaji (lab) da ba da tambayoyin atisaye. Wasu sun yi amfani da mataimakin AI don yin tambayoyin atisaye. Kaɗan ne ke da al'adar duba lissafi, code ko iƙirarin AI, ko tsara ayyukan da tunanin ɗalibai ke bayyana a fili.",
    gap: "AI yana yin kurakurai yana magana kamar ya tabbata a lissafi mai matakai da yawa, code, zane-zane da ambaton majiyoyi, kuma yana iya warware tambayoyin littafi da yawa a madadin ɗalibai. Malamai suna buƙatar darussan da ɗalibai ke amfani da AI kamar yadda masana kimiyya da injiniyoyi za su yi: a matsayin mai taimako wanda abin da ya bayar zato ne da za a gwada, ɗalibai kuma suna bayanin tunaninsu.",
    constraints: [
      "Lokaci: gajerun darussa da suka dace da lokacin tsara darasi",
      "Na'urori: kwamfutar makaranta; wasu kayan aiki (Google Colab, Teachable Machine) suna buƙatar asusu da amincewar hukumar ilimi",
      "Sirri da ƙa'idoji: ku duba manufofin hukumar ilimi da sharuɗɗan kayan aiki kafin ɗalibai su yi amfani da kowane kayan AI ko na intanet",
      "Ba a ba da tabbacin albarkatun kayan aiki na kyauta ba, don haka tsare-tsare suna buƙatar madadi, kuma ɗalibai su riƙa ajiye aikinsu akai-akai",
      "Dole a duba kowace tambaya, bayani da code da AI ya yi kafin ɗalibai su gani"
    ],
    prerequisites: "Babu. Malaman da ba su saba da kayan AI ba za su iya fara ɗaukar kwas ɗin gabatarwa kan AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku tambayoyin atisayen STEM da AI ya yi tare da amsoshinsu", action: "duba kowace amsa da wata hanya ta biyu, na'urar lissafi (calculator) ko kayan zana jadawali", standard: "kafin ɗalibai su ga kowace tambaya" },
    { id: "O2", condition: "Idan aka ba ku bayanan jama'a (public dataset) da mai taimakon AI na rubuta code", action: "tsara binciken bayanai inda ɗalibai ke rubuta bayani (comment) a kowane layin code, suna hasashen sakamako, kuma suna duba lamba ɗaya da hannu", standard: "tare da dukkan matakan fahimta" },
    { id: "O3", condition: "Idan aka ba ku bayani, kwatanci ko zanen da AI ya yi", action: "nemo da gyara kuskuren fahimta ta hanyar duba shi da manhajar karatunku ko majiya amintacciya", standard: "kafin ku yi amfani da shi a aji" },
    { id: "O4", condition: "Ta amfani da kayan aiki na kyauta ko atisayen katuna ba tare da na'ura ba", action: "bayyana yadda koyon na'ura (machine learning) ke amfani da bayanan horo don yin hasashe, da dalilin da yasa bayanai iri-iri ke da muhimmanci", standard: "tare da misalin aji da ke aiki" },
    { id: "O5", condition: "Idan aka ba ku iƙirarin AI kamar ƙididdiga, canjin ma'auni ko ambaton majiya", action: "aiwatar da tsarin iƙirari, shaida, gwaji, ƙarshe", standard: "har ku kai ga karɓa, ƙi ko babu isasshiyar shaida, tare da dalili" },
    { id: "O6", condition: "Lokacin tsara aikin STEM ko ƙalubalen zane", action: "tsara aikin da ɗalibai ke nuna tunaninsu da kansu, da sanya masa matakin amfani da AI", standard: "tare da matakin tabbatarwa da bayani da kalmomin ɗalibai" }
  ],
  chapters: [
    {
      name: "Babi na 1: AI a matsayin kayan aikin STEM",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tambayoyin atisaye da amsoshin da aka tabbatar",
          minutes: 5,
          goal: "Yi tambayoyin atisayen STEM da AI, kuma ku tabbatar da kowace amsa.",
          text: [
            "AI yana iya yin tambayoyin atisaye da yawa da sauri: tambayoyin labari na rayuwa ta gaske, tambayoyi a matakan wahala daban-daban, da amsoshi mataki-mataki. Wannan yana ajiye lokaci, amma an san AI yana yin kurakuran lissafi da tunani, musamman a tambayoyi masu matakai da yawa, kuma yana iya faɗin amsar da ba daidai ba kamar ya tabbata.",
            "Don haka ku tabbatar da kowace amsa. Ku warware ta da kanku, ku duba ta da na'urar lissafi ko kayan zana jadawali kamar Desmos, ko ku nemi AI ya duba amsarsa da wata hanya ta biyu ku kwatanta. Idan hanyoyin biyu ba su yi daidai ba, ku warware ta da kanku.",
            "Ku nemi tambayoyi masu lambobi masu sauƙi don atisaye, ko lambobi na gaske marasa sauƙi don aiki a rayuwa. Ku nemi kurakuran da ɗalibai suka saba yi a kowace tambaya; waɗannan suna zama tambayoyin tattaunawa masu kyau."
          ],
          steps: ["Ku nemi tambayoyi a matakin da kuma yanayin da kuke buƙata.", "Ku nemi amsoshi mataki-mataki.", "Ku warware ko ku duba kowace amsa da na'urar lissafi ko kayan zana jadawali.", "Ku nemi hanya ta biyu ku kwatanta.", "Ku nemi kurakuran da aka saba yi don tattaunawa."],
          words: [["Amsa mataki-mataki (worked solution)", "amsar da ke nuna kowane mataki."], ["Tabbatarwa (verify)", "duba cewa wani abu daidai ne ta amfani da wata hanya ko majiya."]],
          slides: [
            { title: "Atisaye cikin sauri", bullets: ["Tambayoyin labari na rayuwa ta gaske", "Matakan wahala daban-daban", "Amsoshi mataki-mataki"] },
            { title: "AI yana yin kurakuran lissafi", bullets: ["Musamman tambayoyi masu matakai da yawa", "Yana iya kuskure yana magana kamar ya tabbata", "Ku tabbatar da kowace amsa"] },
            { title: "Yadda ake tabbatarwa", bullets: ["Ku warware ta da kanku", "Na'urar lissafi ko kayan zana jadawali kamar Desmos", "Hanya ta biyu; ku kwatanta"] }
          ],
          tryIt: "Ku nemi AI ya ba ku tambayoyi shida masu matakai da yawa kan wani darasi da kuke koyarwa, tare da amsoshi. Ku tabbatar da kowace ɗaya, ku ƙirga nawa ne ba daidai ba.",
          youCanNow: "yin tambayoyin atisayen STEM da AI da tabbatar da kowace amsa kafin ɗalibai su gani.",
          quickCheck: [
            { objective: "O1", q: "A ina ne AI ya fi yiwuwa ya yi kuskure a lissafi?", options: ["Kwafin kalmomin tambaya", "Tambayoyi masu matakai da yawa", "Rubuta labarin tambaya", "Zaɓar lambobi masu sauƙi"], answer: 1, why: "AI yana yin kurakuran lissafi da tunani, musamman a matakai da yawa." },
            { objective: "O1", q: "Amsar mataki-mataki ta AI da binciken na'urar lissafinku sun ba da amsoshi daban. Me za ku yi?", options: ["Ku amince da AI domin ya nuna matakai", "Ku amince da na'urar lissafi ba tare da dubawa ba", "Ku cire tambayar ba tare da dubawa ba", "Ku warware tambayar da kanku"], answer: 3, why: "Idan hanyoyi biyu ba su yi daidai ba, darasin ya ce ku warware ta da kanku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Binciken bayanai da AI a matsayin mai taimakon code",
          minutes: 6,
          goal: "Tsara binciken bayanai inda AI ke taimakawa wajen rubuta code da ɗalibai ke dubawa da bayani.",
          text: [
            "Bayanai na gaske suna sa STEM ya zama na gaske. Ɗalibai za su iya bincika bayanan jama'a (yanayi, lafiya, wasanni, muhalli) a Google Colab, littafin rubutun Python na kyauta a cikin burauzar intanet; yana buƙatar asusun Google, kuma ba a ba da tabbacin albarkatunsa na kyauta ba, don haka a riƙa ajiye aiki akai-akai. Ku fara duba ƙa'idojin hukumar ilimi game da asusun Google na ɗalibai.",
            "AI zai iya zama mai taimakon code: ɗalibai suna bayyana abin da suke so (\"karanta wannan CSV ka zana jadawalin layi na zafin yanayi a kowane wata\") sai AI ya ba da shawarar code. Ta haka ɗalibai da yawa za su iya gudanar da code da ba za su iya rubutawa su kaɗai ba tukuna, kuma su koya daga gare shi.",
            "Ku gina fahimta a ciki: dole ɗalibai su ƙara bayani (comment) a kowane layi da ke faɗin abin da yake yi, su yi hasashen jadawalin kafin su gudanar da code, kuma su duba lamba ɗaya a sakamakon da hannu. Idan ba za su iya bayanin code ɗin ba, ba su koye shi ba tukuna."
          ],
          steps: ["Ku zaɓi bayanan jama'a da tambaya.", "Ɗalibai su nemi AI ya taimaka wajen rubuta code na mataki ɗaya.", "Ɗalibai su rubuta bayani a kowane layi da kalmominsu.", "Su yi hasashen sakamako, sannan su gudanar da code.", "Su duba lamba ɗaya da hannu."],
          words: [["Bayanai (dataset)", "tarin bayanai da aka tsara, sau da yawa a tebur."], ["CSV", "nau'in fayil mai sauƙi na tebur, inda ake raba ƙima da waƙafi."], ["Bayanin code (code comment)", "rubutu a cikin code, sau da yawa yana farawa da #, da ke bayyana abin da code ɗin yake yi."]],
          slides: [
            { title: "Bayanai na gaske, kayan aiki na kyauta", bullets: ["Bayanan jama'a: yanayi, lafiya, wasanni", "Google Colab: kyauta, a cikin burauza", "Ku duba ƙa'idojin hukumar ilimi game da asusun ɗalibai"] },
            { title: "AI a matsayin mai taimakon code", bullets: ["Ku bayyana matakin da kalmomi", "AI yana ba da shawarar code", "Ɗalibai suna gudanar da abin da ba za su iya rubutawa ba tukuna"] },
            { title: "Gina fahimta", bullets: ["Bayani a kowane layi", "Hasashe, sannan gudanarwa", "Duba lamba ɗaya da hannu"] }
          ],
          sources: [{ name: "Google Colab FAQ (tambayoyin da ake yawan yi)", url: "https://research.google.com/colaboratory/faq.html" }],
          tryIt: "Ku nemo bayanan jama'a kan wani batu da ɗalibanku ke damuwa da shi. Ku yi amfani da AI don taimakon rubuta code a Colab da ke zana jadawalin abu ɗaya, ku ƙara bayani a kowane layi, sannan ku duba lamba ɗaya da hannu.",
          youCanNow: "tsara binciken bayanai inda AI ke taimakawa da code, ɗalibai kuma suna nuna fahimtarsu.",
          quickCheck: [
            { objective: "O2", q: "Mene ne Google Colab?", options: ["Littafin rubutun Python na kyauta da ke aiki a cikin burauza", "Shirin ƙididdiga na biya", "Kayan aiki da ke yin slides kawai", "Bayanan yanayi da aka tattara"], answer: 0, why: "Colab yana bar ɗalibai su gudanar da Python a burauza da asusun Google." },
            { objective: "O2", q: "Ɗalibi ya gudanar da code da AI ya rubuta ya sami jadawali, amma ba zai iya faɗin abin da code ɗin yake yi ba. Me za ku yi?", options: ["Ku karɓi jadawalin a matsayin an gama", "Ku sa shi ya rubuta bayani a kowane layi da kalmominsa, ya kuma duba lamba ɗaya da hannu", "Ku nemi AI ya rubuta shiri mafi tsawo", "Ku ba shi ƙaramin maki ku wuce"], answer: 1, why: "Idan ɗalibai ba za su iya bayanin code ɗin ba, ba su koye shi ba tukuna." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kwaikwayo, hotuna da bayanai",
          minutes: 5,
          goal: "Yi amfani da AI don yin bayanai da hotuna, kuma ku duba su don kuskuren fahimta.",
          text: [
            "AI yana iya bayyana ra'ayoyin STEM ta hanyoyi daban-daban (kwatanci, mataki-mataki, labari) kuma ya ba da shawarar zane-zane, kwaikwayo (simulation) ko nune-nune. Kayan kwaikwayo da zana jadawali na kyauta kamar PhET simulations da Desmos suna bar ɗalibai su bincika; AI zai iya taimaka muku rubuta tambayoyin jagora.",
            "Ku kula da kuskuren fahimta. Kwatancin AI yana iya ɓatar da mutum (misali, bayanin wutar lantarki da kwararar ruwa ta hanyoyin da ba sa ɗorewa), kuma zane-zanen da AI ya yi suna iya zama ba daidai ba a kimiyya. Ku duba kowane bayani da manhajar karatunku da majiya amintacciya.",
            "Wata dabara mai amfani a aji: ku ba ɗalibai bayanin AI mai kuskure (da gangan ko na gaske) ku nemi su nemo shi su gyara shi. Nemo kurakurai a abin da AI ya bayar ƙwarewa ce ta kimiyya."
          ],
          steps: ["Ku nemi AI ya ba da bayanai biyu ko uku na wani ra'ayi.", "Ku duba kowanne da manhajar karatunku da majiya amintacciya.", "Ku yi amfani da AI don rubuta tambayoyin jagora na kwaikwayo.", "Ku duba zane-zane don ingancin kimiyya.", "Ku sa ɗalibai su nemo kurakurai a bayanin AI."],
          words: [["Kwaikwayo (simulation)", "samfurin kwamfuta da ke bar ku bincika yadda wani abu ke aiki."], ["Kwatanci (analogy)", "bayyana wani abu ta hanyar kwatanta shi da abin da aka sani."], ["Kuskuren fahimta (misconception)", "ra'ayin da ba daidai ba da aka saba da shi game da yadda wani abu ke aiki."]],
          slides: [
            { title: "Bayanai da kwaikwayo", bullets: ["Hanyoyi da yawa na bayyana ra'ayi ɗaya", "Tambayoyin jagora don PhET ko Desmos"] },
            { title: "Ku kula da kuskuren fahimta", bullets: ["Kwatanci yana iya ɓatarwa", "Zane-zanen AI suna iya zama ba daidai ba", "Ku duba da majiya amintacciya"] },
            { title: "Nemo kuskuren", bullets: ["Ku ba ɗalibai bayanin AI mai kuskure", "Su nemo shi su gyara shi"] }
          ],
          tryIt: "Ku nemi AI ya bayyana wani ra'ayin STEM da kuke koyarwa ta hanyoyi biyu daban-daban. Ku nemo duk wani kuskuren fahimta a kowanne, ku rubuta aikin nemo-kuskure ga ɗalibai.",
          youCanNow: "amfani da bayanai da kwaikwayo na AI yayin da kuke kama kuskuren fahimta a cikinsu.",
          quickCheck: [
            { objective: "O3", q: "Mene ne haɗarin kwatancin AI a kimiyya?", options: ["Koyaushe yana da tsawo sosai", "Ba za a iya buga shi ba", "Yana iya ɓatarwa inda kwatancin bai dace ba", "Yana aiki a lissafi kaɗai"], answer: 2, why: "Kwatanci kamar ruwa don wutar lantarki yana iya kasawa ya haifar da kuskuren fahimta." },
            { objective: "O3", q: "Zanen da AI ya yi da kuke shirin nunawa yana kama da ba daidai ba a wuri ɗaya. Me za ku yi?", options: ["Ku duba shi da manhajar karatunku ko majiya amintacciya ku gyara shi", "Ku nuna shi duk da haka domin AI ya yi shi", "Ku sa ɗalibai su haddace shi", "Ku goge duk zanen AI da kuke da shi"], answer: 0, why: "Zane-zanen AI suna iya zama ba daidai ba a kimiyya, don haka ku duba su kafin amfani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: AI a matsayin kayan aikin STEM",
        questions: [
          { objective: "O1", q: "AI ya ba da amsa mataki-mataki ga tambaya mai matakai da yawa. Ya kamata ku:", options: ["Yi amfani da ita yadda take", "Tsawaita ta", "Tabbatar da ita kafin ɗalibai su gani", "Goge matakan"], answer: 2, why: "AI yana yin kurakuran lissafi da tunani." },
          { objective: "O1", q: "Hanya mai kyau ta tabbatar da amsar AI ita ce:", options: ["Duba ta da hanya ta biyu ko na'urar lissafi", "Sake yin tambayar ku karɓi amsa iri ɗaya", "Amince da ita idan tana magana kamar ta tabbata", "Neman ɗalibi ya yi tsammani"], answer: 0, why: "Hanya ta biyu tana kama kurakurai." },
          { objective: "O2", q: "Albarkatun kyauta na Google Colab:", options: ["An ba da tabbacinsu kuma ba su da iyaka", "Na biya ne kawai", "Na malamai ne kawai", "Ba a ba da tabbacinsu ba; a riƙa ajiye aiki akai-akai"], answer: 3, why: "Colab ya ce ba a ba da tabbacin albarkatun kyauta ba." },
          { objective: "O2", q: "Ɗalibai sun yi amfani da AI don rubuta code. Ta yaya za su nuna fahimta?", options: ["Su gudanar da shi ba tare da karantawa ba", "Su rubuta bayani a kowane layi da kalmominsu su kuma duba sakamako da hannu", "Su kwafe shi zuwa wani littafin rubutu", "Su nemi AI ya bayyana shi ga malami"], answer: 1, why: "Bayani da dubawa suna gina fahimta." },
          { objective: "O3", q: "Me yasa za ku ba ɗalibai bayanin AI mai kuskure?", options: ["Don ruɗar da su", "Gwajin sauri ne", "Don ajiye lokaci", "Nemo kurakurai a abin da AI ya bayar ƙwarewa ce ta kimiyya"], answer: 3, why: "Duba iƙirari shi ne abin da masana kimiyya ke yi." }
        ]
      }
    },
    {
      name: "Babi na 2: AI a matsayin fannin STEM",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yadda na'urori ke koyo daga bayanai",
          minutes: 6,
          goal: "Koyar da ainihin ra'ayin koyon na'ura da misali na aikin hannu.",
          text: [
            "Koyon na'ura (machine learning) fanni ne na STEM da ɗalibai za su iya fahimta. Ainihin ra'ayin: maimakon rubuta ƙa'idoji, muna nuna wa shiri misalai masu lakabi da yawa (bayanan horo, training data) sai ya nemo tsari, sannan ya yi hasashe kan sababbin misalai. Daidaitonsa ya dogara da bayanan: misalai kaɗan, ko misalan da ba iri-iri ba, suna kawo hasashe marasa daidai.",
            "Aikin hannu: kayan aiki na kyauta kamar Teachable Machine na Google suna bar ɗalibai su horar da mai rarraba hotuna ko sauti mai sauƙi a burauza; ku duba sharuɗɗansa da amincewar hukumar ilimi kafin ɗalibai su yi amfani da shi. Akwai kuma hanya ba tare da na'ura ba: ɗalibai suna rarraba katunan dabbobi bisa siffofinsu suna rubuta ƙa'idoji, sannan su gwada su da sababbin katuna.",
            "Sannan ku yi manyan tambayoyi: Me zai faru idan bayanan horo suna nuna nau'in misali ɗaya kawai? Ta yaya za mu auna daidaito? Wannan yana haɗa koyon na'ura da ƙididdiga, ingancin bayanai da adalci."
          ],
          steps: ["Ku bayyana: misalai masu lakabi suna shiga, ana nemo tsari, hasashe yana fitowa.", "Ku horar da mai rarrabawa mai sauƙi, ko ku yi rarraba katuna ba tare da na'ura ba.", "Ku gwada shi da sababbin misalai.", "Ku canja bayanan horo ku ga abin da zai faru.", "Ku tattauna daidaito, ingancin bayanai da adalci."],
          words: [["Koyon na'ura (machine learning)", "shirye-shiryen da ke koyon tsari daga misalai maimakon bin ƙa'idojin da aka rubuta da hannu."], ["Bayanan horo (training data)", "misalai masu lakabi da shiri ke koyo daga gare su."], ["Mai rarrabawa (classifier)", "shirin da ke rarraba abubuwa zuwa rukuni-rukuni."]],
          slides: [
            { title: "Koyon na'ura a layi ɗaya", bullets: ["Misalai masu lakabi suna shiga", "Ana nemo tsari", "Hasashe kan sababbin misalai"] },
            { title: "Aikin hannu", bullets: ["Horar da mai rarrabawa mai sauƙi a burauza", "Ko rarraba katuna ba tare da na'ura ba", "Ku fara duba sharuɗɗa da amincewa"] },
            { title: "Manyan tambayoyi", bullets: ["Idan bayanan na gefe ɗaya ne fa?", "Ta yaya muke auna daidaito?", "Haɗi da ƙididdiga da adalci"] }
          ],
          tryIt: "Ku tsara atisaye na minti 20 inda ɗalibai ke horar da (ko kwaikwaya ba tare da na'ura ba) mai rarrabawa mai sauƙi, sannan su canja bayanan horo su bayyana abin da ya faru da hasashensa.",
          youCanNow: "koyar da ainihin ra'ayin koyon na'ura da atisaye na aikin hannu.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ainihin ra'ayin koyon na'ura?", options: ["Mutum yana rubuta kowace ƙa'ida da hannu", "Shirin yana haddace amsa ɗaya", "Kwamfuta tana tsammani ba tare da tsari ba", "Shiri yana nemo tsari a misalai masu lakabi da yawa"], answer: 3, why: "Koyon na'ura yana koyo daga bayanan horo maimakon ƙa'idojin da aka rubuta da hannu." },
            { objective: "O4", q: "Ajinku ba shi da na'urori don Teachable Machine. Me za ku yi?", options: ["Ku tsallake batun", "Ku yi hanyar ba tare da na'ura ba: rarraba katunan dabbobi bisa siffofi, rubuta ƙa'idoji, gwadawa da sababbin katuna", "Ku nuna bidiyo kawai", "Ku jira sai shekara mai zuwa"], answer: 1, why: "Atisayen katuna ba tare da na'ura ba yana koyar da ra'ayi ɗaya ba tare da na'urori ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tabbatar da iƙirarin AI kamar masanin kimiyya",
          minutes: 5,
          goal: "Koyar da ɗalibai tsarin gwada iƙirarin AI da shaida.",
          text: [
            "Tunanin kimiyya shi ne mafi kyawun kariya daga kurakuran AI. Ku koyar da tsari mai matakai huɗu: Iƙirari: me AI ya faɗa daidai? Shaida: wane bayani ko majiya zai nuna gaskiya ne? Gwaji: ku duba iƙirarin da bayanai, lissafi, gwaji ko majiya amintacciya. Ƙarshe: karɓa, ƙi ko \"babu isasshiyar shaida\".",
            "Ku yi atisaye da iƙirarin STEM da AI zai iya kuskurewa: canjin ma'auni, ƙididdiga, iƙirarin sanadi da sakamako, dabarar sinadarai (chemical formula), ko ambaton majiyar da wataƙila babu ita. Ɗalibai suna koyon cewa dole a nemo majiyoyin AI a duba su, ba a amince da su kai tsaye ba.",
            "Wannan tsari yana aiki a dukkan darussa kuma yana gina al'adar da kuke so ta rayuwa: abin da AI ya bayar zato ne da za a gwada, ba amsar da za a kwafa ba."
          ],
          steps: ["Iƙirari: ku faɗi daidai abin da AI ya ce.", "Shaida: me zai nuna gaskiya ne?", "Gwaji: bayanai, lissafi, gwaji ko majiya amintacciya.", "Ƙarshe: karɓa, ƙi ko babu isasshiyar shaida."],
          words: [["Iƙirari (claim)", "faɗin cewa wani abu gaskiya ne."], ["Zato (hypothesis)", "ra'ayin da za a iya gwadawa."], ["Ambaton majiya (citation)", "nuni ga inda aka samo bayani."]],
          slides: [
            { title: "Tsari mai matakai huɗu", bullets: ["Iƙirari", "Shaida", "Gwaji", "Ƙarshe"] },
            { title: "Iƙirarin atisaye", bullets: ["Canjin ma'auni da ƙididdiga", "Sanadi da sakamako", "Ambaton majiyoyin da wataƙila babu su"] },
            { title: "Al'adar rayuwa", bullets: ["Abin da AI ya bayar zato ne", "Ku gwada shi, kada ku kwafe shi"] }
          ],
          tryIt: "Ku tattara iƙirarin STEM guda uku daga kayan AI kan wani batu da kuke koyarwa. Ku wuce kowanne ta tsarin matakai huɗu, ku rubuta waɗanda suka tsaya.",
          youCanNow: "koyar da ɗalibai su gwada iƙirarin AI kamar masana kimiyya.",
          quickCheck: [
            { objective: "O5", q: "A tsarin tabbatarwa, me ke zuwa nan da nan bayan \"Iƙirari\"?", options: ["Ƙarshe", "Gwaji", "Shaida", "Wallafawa"], answer: 2, why: "Tsarin shi ne Iƙirari, Shaida, Gwaji, Ƙarshe." },
            { objective: "O5", q: "AI ya ba ɗalibai ƙididdiga tare da ambaton majiya. Me ya kamata su yi?", options: ["Su kwafi ambaton majiyar zuwa rahotonsu", "Su tambayi AI ko ambaton na gaske ne", "Su yi watsi da ƙididdigar", "Su nemo majiyar su duba cewa akwai ita kuma ta faɗi haka"], answer: 3, why: "Dole a nemo majiyoyin AI a duba su, ba a amince da su kai tsaye ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ƙirar injiniya da ayyukan da ke nuna tunani",
          minutes: 6,
          goal: "Yi amfani da AI a tsarin ƙirar injiniya, ku tsara ayyukan da tunani ke bayyana a fili.",
          text: [
            "A tsarin ƙirar injiniya (fayyace matsala, tunanin ra'ayoyi, tsarawa, ginawa, gwadawa, ingantawa), AI ya fi amfani a matakan tunanin ra'ayoyi da ingantawa: samar da ra'ayoyin zane da yawa, ba da shawarar gwaje-gwaje, ko bayyana dalilin da yasa samfurin farko (prototype) ya kasa. Ɗalibai ne har yanzu ke zaɓa, ginawa, gwadawa da ba da hujja.",
            "Saboda AI yana iya warware tambayoyin littafi da yawa, ku tsara ayyukan da tunani ke bayyana: ku nemi ɗalibai su bayyana dalilin da yasa hanya ke aiki, su kwatanta hanyoyi biyu, su nemo kuskure, su yi hasashe kafin lissafi, ko su yi amfani da ra'ayin a bayanansu ko zanensu. Bayani da baki da littafin rubutun ɗakin gwaji (lab notebook) suna nuna tunani.",
            "Ku sanya wa kowane aiki matakin amfani da AI (AI use level) don ɗalibai su san lokacin da AI kayan aiki ne da lokacin da dole a nuna ƙwarewar su kaɗai, kuma ku bayyana dalilin."
          ],
          steps: ["Ku yi amfani da AI don tunanin ra'ayoyi da ingantawa a zane.", "Ɗalibai suna zaɓa, ginawa, gwadawa da ba da hujja.", "Tsara ayyuka: bayani, kwatantawa, nemo kurakurai, hasashe, aiwatarwa.", "Ku yi amfani da bayani da baki da littafin rubutun ɗakin gwaji.", "Ku sanya matakin amfani da AI ga kowane aiki."],
          words: [["Tsarin ƙirar injiniya (engineering design process)", "zagayen fayyace matsala, zanawa, ginawa, gwadawa da ingantawa."], ["Samfurin farko (prototype)", "samfurin farko da aka gina don gwada ra'ayi."], ["Littafin rubutun ɗakin gwaji (lab notebook)", "rubutun abin da ɗalibi ya yi, ya gani da abin da ya kammala."]],
          slides: [
            { title: "AI a ƙirar injiniya", bullets: ["Tunanin ra'ayoyi da yawa", "Shawarar gwaje-gwaje; bayanin kasawa", "Ɗalibai suna zaɓa, gini, gwaji, ba da hujja"] },
            { title: "Ku bar tunani a fili", bullets: ["Bayyana dalili, kwatanta hanyoyi", "Nemo kuskure, hasashe da farko", "Aiwatarwa a bayanansu ko zanensu"] },
            { title: "Sanya matakin amfani da AI", bullets: ["Lokacin da AI kayan aiki ne", "Lokacin da ake nuna ƙwarewar ba tare da AI ba"] }
          ],
          tryIt: "Aikin ƙarshe: ku tsara darasin STEM ɗinku inda ɗalibai ke amfani da kayan AI da aka amince da shi a bincike ko ƙalubalen zane, tare da matakin tabbatarwa, aikin tunani da kalmominsu, da matakin amfani da AI. Ku koyar da shi idan za ku iya, ku rubuta abin da ɗalibai suka gano lokacin da suka duba AI.",
          youCanNow: "jagorantar koyon STEM inda ɗalibai ke amfani da AI a matsayin kayan aiki, suna duba shi sosai, kuma tunaninsu yana bayyana a fili.",
          quickCheck: [
            { objective: "O6", q: "A wane mataki na tsarin ƙirar injiniya ne AI ya fi amfani?", options: ["Tunanin ra'ayoyi da ingantawa", "Gini da gwaji kawai", "Fayyace matsala kawai", "Babu ko ɗaya daga cikin matakan"], answer: 0, why: "AI yana taimakawa wajen samar da ra'ayoyi da bayanin kasawa; ɗalibai ne har yanzu ke zaɓa, gini, gwaji da ba da hujja." },
            { objective: "O6", q: "AI zai iya warware tambayoyin littafinku. Me za ku canja don tunani ya bayyana a fili?", options: ["Ku ba da ƙarin tambayoyi iri ɗaya", "Ku hana na'urar lissafi", "Ku nemi ɗalibai su yi hasashe da farko su bayyana dalilin da yasa hanyar ke aiki", "Ku ba da amsoshin tun da wuri"], answer: 2, why: "Hasashe, bayani da kwatanta hanyoyi suna nuna tunanin da AI ba zai iya yi musu ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: AI a matsayin fannin STEM",
        questions: [
          { objective: "O4", q: "A koyon na'ura, bayanan horo su ne:", options: ["Maki na ƙarshe", "Code ɗin shirin", "Misalai masu lakabi da shiri ke koyo daga gare su", "Kalmar sirri"], answer: 2, why: "Ana koyon tsari daga misalai." },
          { objective: "O4", q: "Mai rarrabawa da aka horar da hotunan nau'in kare ɗaya kawai zai fi yiwuwa:", options: ["Yi hasashe marasa daidai kan misalai iri-iri", "Gane dukkan dabbobi babu kuskure", "Ƙi aiki", "Ƙara sauri"], answer: 0, why: "Bayanai na gefe ɗaya suna kawo hasashe marasa kyau." },
          { objective: "O5", q: "Mene ne mataki na 3 na tsarin tabbatarwa?", options: ["Iƙirari", "Gwaji", "Shaida", "Ƙarshe"], answer: 1, why: "Ku gwada iƙirarin da bayanai ko majiya amintacciya." },
          { objective: "O5", q: "AI ya ba da ambaton majiya don ƙididdiga. Ya kamata ɗalibai:", options: ["Su nemo majiyar su duba cewa akwai ita kuma ta faɗi haka", "Su kwafe shi", "Su yi watsi da shi", "Su ambaci AI a maimakon haka"], answer: 0, why: "Wataƙila majiyoyin da AI ya ambata babu su." },
          { objective: "O6", q: "Wane aiki ne ya fi riƙe tunanin ɗalibai a fili?", options: ["Warware tambayoyin littafi 20 a gida", "Kallon bidiyo kawai", "Kwafin takardar amsoshi", "Hasashe kafin lissafi da bayyana dalilin da yasa hanyar ke aiki"], answer: 3, why: "Hasashe da bayani suna nuna tunani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI a Koyar da STEM",
    questions: [
      { objective: "O1", q: "STEM yana nufin:", options: ["Ɗalibai, malamai, editoci, manajoji", "Kimiyya, fasaha, injiniya da lissafi", "Karatu, gwaji, kimantawa, haddacewa", "Shirye-shirye, kayan aiki, imel, kafofin watsa labarai"], answer: 1, why: "Fannoni huɗun nan." },
      { objective: "O1", q: "AI ya fi yawan kuskure a:", options: ["Jerin launuka", "Saƙonnin gaisuwa", "Tambayoyin lissafi masu matakai da yawa", "Rubutun kalmomin da aka saba"], answer: 2, why: "Tunani mai matakai da yawa yana kawo kurakurai." },
      { objective: "O1", q: "Desmos yana da amfani wajen:", options: ["Imel", "Ba da maki ga rubutattun makaloli", "Zana jadawali da duba lissafi", "Halartar aji"], answer: 2, why: "Kayan zana jadawali suna tabbatar da amsoshi ta gani." },
      { objective: "O1", q: "Neman AI ya faɗi kurakuran da aka saba yi a tambaya yana ba ku:", options: ["Tambayoyin tattaunawa game da kuskuren fahimta", "Amsar ƙarshe", "Maki", "Gajeriyar hanya"], answer: 0, why: "Kurakurai suna kawo tattaunawa mai kyau." },
      { objective: "O2", q: "Google Colab shi ne:", options: ["Manhajar bidiyo", "Kwamfutar tafi-da-gidanka ta biya", "Kayan ba da maki", "Littafin rubutun Python na kyauta a cikin burauza"], answer: 3, why: "Yana gudanar da Python ta intanet." },
      { objective: "O2", q: "Fayil ɗin CSV shi ne:", options: ["Hoto", "Fayil mai sauƙi na tebur da ake raba ƙima da waƙafi", "Bidiyo", "Fayil ɗin kalmar sirri"], answer: 1, why: "An saba amfani da shi don bayanai." },
      { objective: "O2", q: "Bayanin code (comment) yana bayyana:", options: ["Babu komai", "Yanayi", "Makin ɗalibi", "Abin da layin code ke yi"], answer: 3, why: "Bayanai suna nuna fahimta." },
      { objective: "O2", q: "Hasashen jadawali kafin gudanar da code yana taimakon ɗalibai:", options: ["Gudanar da code da sauri", "Tsallake koyo", "Yin tunani kan abin da ya kamata code ɗin ya yi", "Guje wa kurakurai kai tsaye"], answer: 2, why: "Hasashe yana gina tunani." },
      { objective: "O3", q: "Kwatancin AI a kimiyya zai iya:", options: ["Ɓatarwa idan bai dace ba", "Ba zai taɓa yin kuskure ba", "Maye gurbin gwaje-gwaje", "Tabbatar da iƙirari"], answer: 0, why: "Ku duba kwatanci don kuskuren fahimta." },
      { objective: "O3", q: "Kwaikwayo (simulation) yana bar ɗalibai:", options: ["Guje wa tunani", "Bincika yadda wani abu ke aiki da samfuri", "Ba wa kansu maki", "Tsallake darasi"], answer: 1, why: "Samfura suna taimakon bincike." },
      { objective: "O4", q: "Koyon na'ura yana nemo:", options: ["Tsari a misalai masu lakabi", "Ƙa'idojin da aka rubuta da hannu kawai", "Kalmomin sirri", "Fayilolin da suka ɓace"], answer: 0, why: "Yana koyo daga bayanai." },
      { objective: "O4", q: "Idan bayanan horo ba iri-iri ba ne, hasashe:", options: ["Suna tsayawa gaba ɗaya", "Koyaushe daidai ne", "Suna ƙara sauri", "Wataƙila ba za su yi daidai ba kan sababbin misalai"], answer: 3, why: "Ingancin bayanai ne ke ƙayyade daidaito." },
      { objective: "O4", q: "Kafin ɗalibai su yi amfani da kayan aiki kamar Teachable Machine, ku duba:", options: ["Launinsa", "Sharuɗɗansa da amincewar hukumar ilimi", "Shahararsa", "Babu komai"], answer: 1, why: "Amfanin ɗalibai yana buƙatar amincewa da duba shekaru." },
      { objective: "O4", q: "Atisayen koyon na'ura ba tare da na'ura ba yana amfani da:", options: ["Wayoyi kawai", "Kwamfutocin tafi-da-gidanka kawai", "Katuna da ƙa'idoji, babu na'urori", "Mutum-mutumin inji (robot)"], answer: 2, why: "Ana iya koyar da ra'ayoyi ba tare da na'urori ba." },
      { objective: "O5", q: "A tsarin tabbatarwa, \"ƙarshe\" zai iya zama:", options: ["Ƙi koyaushe", "Karɓa koyaushe", "Karɓa, ƙi ko babu isasshiyar shaida", "Tsallakewa"], answer: 2, why: "Shaida ce ke yanke hukunci." },
      { objective: "O5", q: "Ya kamata a ɗauki abin da AI ya bayar a matsayin:", options: ["Zato da za a gwada", "Amsar ƙarshe", "Doka", "Maki"], answer: 0, why: "Ku gwada kafin ku amince." },
      { objective: "O6", q: "A ƙirar injiniya, AI ya fi amfani wajen:", options: ["Ba da maki ga zane-zane", "Gina samfurin farko a madadin ɗalibai", "Gwada kayan gini da kansa", "Tunanin ra'ayoyi da ingantawa"], answer: 3, why: "Ɗalibai ne har yanzu ke gini, gwaji da ba da hujja." },
      { objective: "O6", q: "Samfurin farko (prototype) shi ne:", options: ["Kaya na ƙarshe", "Samfurin farko don gwada ra'ayi", "Makin jarabawa", "Lasisin manhaja"], answer: 1, why: "Ana gwada samfuran farko ana inganta su." },
      { objective: "O6", q: "Littafin rubutun ɗakin gwaji yana nuna:", options: ["Halartar aji", "Amsar ƙarshe kawai", "Tsarin darasin malami", "Abin da ɗalibi ya yi, ya gani da abin da ya kammala"], answer: 3, why: "Yana sa tunani ya bayyana." },
      { objective: "O6", q: "Ya kamata a sanya wa kowane aikin STEM:", options: ["Kalmar sirri", "Farashi", "Matakin amfani da AI", "Babu komai"], answer: 2, why: "Ɗalibai suna buƙatar sanin lokacin da aka yarda da AI." }
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
      11,
      14,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "AI a matsayin kayan aiki a bincike",
        objective: "O2",
        notYet: "AI yana yi wa ɗalibai binciken, ko ba a amince da kayan aikin ba.",
        meets: "Ɗalibai suna amfani da kayan AI da aka amince da shi don wani sashe ɗaya bayyananne, kamar rubuta code ko tunanin zane-zane.",
        exceeds: "Ɗalibai kuma suna hasashen abin da ya kamata sakamakon AI ya nuna kafin su gudanar da shi."
      },
      {
        name: "Matakin tabbatarwa",
        objective: "O5",
        notYet: "Babu matakin da ɗalibai ke duba abin da AI ya bayar.",
        meets: "Ɗalibai suna duba code, lambobi ko iƙirarin AI da bayanai, lissafi ko gwaji.",
        exceeds: "Ɗalibai suna rubuta ƙarshe: karɓa, ƙi ko babu isasshiyar shaida, tare da dalili."
      },
      {
        name: "Tunani da kalmominsu",
        objective: "O6",
        notYet: "Ɗalibai suna miƙa amsa ko jadawali kawai.",
        meets: "Aikin da ɗalibai ke bayanin tunaninsu da kalmominsu.",
        exceeds: "Ɗalibai kuma suna kwatanta hanyoyi biyu ko nemo kuskure."
      },
      {
        name: "Matakin amfani da AI",
        objective: "O6",
        notYet: "Ba a ba da matakin amfani da AI ba.",
        meets: "An sanya wa aikin matakin amfani da AI.",
        exceeds: "Tsarin yana bayyana wa ɗalibai dalilin da yasa wannan mataki ya dace da aikin."
      },
      {
        name: "Malami ya duba kayan koyarwa",
        objective: "O1",
        notYet: "Ba a duba tambayoyi, code ko bayanan da AI ya yi ba.",
        meets: "An duba kowace amsa da bayani da AI ya yi kafin aji.",
        exceeds: "Tsarin ya ambaci hanyar da aka yi amfani da ita wajen dubawa, kamar na'urar lissafi, Desmos ko majiya amintacciya."
      }
    ]
  },
  evaluation: {
    results: [
      "Malaman da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Malaman da suka koyar da darasin STEM mai matakin tabbatar da AI cikin kwanaki 30 (binciken biyo baya)",
      "Ɗaliban da za su iya faɗin kuskuren AI da suka gano da yadda suka duba shi",
      "Malaman da suka ɗauki wani kwas na Koach Learn kan AI ga malamai"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai mataimakin AI da hukumar ilimi ta yankinku ta yarda da shi",
      "Kayan aiki na kyauta kamar Desmos, PhET simulations, Google Colab ko Teachable Machine, inda hukumar ilimi ta amince da su",
      "Darasin STEM ɗaya ko ƙalubalen zane da za ku koyar nan ba da daɗewa ba",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku gudanar da shi a matsayin zaman sashe (department): ku yi gwajin farko tare, sannan kowane malami ya tsara darasi ɗaya don ajinsa.",
      "Ku duba amincewar hukumar ilimi da ƙa'idojin asusun ɗalibai kafin kowa ya gwada Colab ko Teachable Machine da ɗalibai.",
      "Ku sa malamai bibbiyu su musanya tambayoyin atisaye ɗaya da AI ya yi, su tabbatar da amsoshin juna da wata hanya ta biyu.",
      "Ku yi amfani da atisayen katuna ba tare da na'ura ba idan na'urori ko amincewa ba su shirya ba.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
