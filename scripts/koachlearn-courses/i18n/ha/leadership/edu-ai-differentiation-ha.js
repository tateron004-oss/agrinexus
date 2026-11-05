"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-ai-differentiation.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-ai-differentiation-ha",
  lang: "ha",
  translationOf: "edu-ai-differentiation",
  category: "Leadership Development",
  name: "Bambanta Koyarwa da Taimakon AI",
  skills: "Rubuta gajeren gwajin farko, Tsara ayyuka masu matakai, Gina allon zaɓi, Raba ɗalibai rukuni bisa shaida, Gudanar da aji mai bambanta koyarwa, Duba adalci",
  outcome: "bambanta darasi ɗaya da AI daga farko har ƙarshe: gajeren gwajin farko, ayyuka uku masu matakai zuwa manufa ɗaya, allon zaɓi, da shirin raba rukuni mai sauyawa bisa shaida, wanda aka duba don daidaito da adalci.",
  about: [
    "Wannan kwas na malaman aji ne, masu horar da malamai (coaches) da shugabannin makaranta da ke son kowane ɗalibi ya kai ga burin ajinsa ta hanyoyi daban-daban. Bambanta koyarwa ya daɗe yana da wuya, domin yin nau'o'i da yawa na kowane abu yana cin lokaci. AI zai iya yin nau'o'in; malami ne har yanzu ke yanke wanda ke buƙatar me, da dalili.",
    "Babi na 1 yana gina kayan aiki: gwajin farko, ayyuka masu matakai da allunan zaɓi. Babi na 2 yana kan amfani da su: raba ɗalibai rukuni mai sauyawa bisa shaida, gudanar da aji mai bambanta koyarwa, da tabbatar da cewa bambanta koyarwa yana buɗe ƙofofi, ba ya kulle ɗalibai a ƙananan matakai ba.",
    "Kada ku taɓa saka sunayen ɗalibai, makinsu ko wani bayani da ke nuna su a cikin kayan aikin da gundumar ilimi (district) ɗinku ba ta amince da shi ba; ku yi amfani da bayanan ƙirƙira don yin atisaye. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku bambanta darasi ɗaya na gaske: ku rubuta gwajin farko mai tambayoyi biyar tare da amsoshinsa, ayyuka uku masu matakai da duk suke kaiwa ga manufa ɗaya (ƙarin taimako, matakin aji, ƙarin zurfi), allon zaɓi mai murabba'i tara don atisaye, da shirin raba rukuni da aka gina daga sakamakon gwajin farko na wani aji na ƙirƙira (babu sunaye na gaske). Ku duba kowane aiki don daidaito da adalci, sannan ku rubuta yadda da lokacin da ɗalibai za su sauya rukuni.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Malaman aji, masu horar da malamai da shugabannin makaranta da ke son kowane ɗalibi ya kai ga burin ajinsa ta hanyoyi daban-daban, kuma suka fara amfani da AI don rage lokacin shirya darasi.",
    startingPoint: "Suna iya shirya darasi su koyar da shi ga dukan aji, kuma su ba da gwaji. Wasu sun gwada mataimakin AI don takardun atisaye. Kaɗan ne suke da al'adar yin ayyuka masu matakai, allunan zaɓi ko rukunoni masu sauyawa cikin sauri.",
    gap: "Yin nau'o'i da yawa na kowane aiki yana ɗaukar lokaci fiye da wanda yawancin malamai ke da shi, don haka ana yawan tsallake bambanta koyarwa ko ya zama rukunoni na dindindin na ƙasa da sama. Malamai suna buƙatar amfani da AI don yin nau'o'in yayin da su ne ke yanke shawara, suna kiyaye sirrin ɗalibai, kuma suna riƙe babban buri ga kowane ɗalibi.",
    constraints: [
      "Lokaci: gajerun darussa da suka dace da lokacin shirya darasi",
      "Na'urori: kwamfutar makaranta ko laptop mai mataimakin AI da gundumar ilimi ta amince da shi",
      "Sirri: babu sunayen ɗalibai, maki ko bayanan da ke nuna su a kayan aikin da gundumar ba ta amince da su ba; atisaye yana amfani da bayanan ƙirƙira",
      "Dole ne a ci gaba da ba da sauƙaƙawar IEP da 504 da doka ta wajabta a kowane nau'i",
      "Dole ne malami ya duba kowane aikin da AI ya yi don daidaito da adalci kafin amfani da shi"
    ],
    prerequisites: "Babu. Malaman da ba su saba da kayan aikin AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku aiki ɗaya da kuke koyarwa", action: "bayyana bambanta koyarwa bisa shiri, sha'awa da hanyar koyo da aka fi so, da bayanin abin da AI ke yi da abin da malami ke yanke wa", standard: "ana riƙe burin koyo ɗaya a kowane nau'i" },
    { id: "O2", condition: "Idan aka ba ku manufar koyo ɗaya da mataimakin AI", action: "ƙirƙirar gwajin farko mai tambayoyi biyar tare da amsoshinsa da ayyuka uku masu matakai", standard: "duka matakan uku suna atisayen manufa ɗaya" },
    { id: "O3", condition: "Idan aka ba ku ƙwarewa ɗaya da za a yi atisaye", action: "ƙirƙirar allon zaɓi mai murabba'i tara da murabba'in tilas", standard: "kowane murabba'i yana atisayen ƙwarewar kuma yana ɗaukar kusan lokaci ɗaya" },
    { id: "O4", condition: "Idan aka ba ku sakamakon gwajin farko na wani aji na ƙirƙira", action: "raba ɗalibai rukuni bisa shaida da rubuta lokacin da yadda za su sauya rukuni", standard: "ana amfani da lambobi maimakon sunaye, kuma babu rukunin dindindin" },
    { id: "O5", condition: "Lokacin da kuke shirya darasi mai bambanta koyarwa", action: "shirya al'adu, katunan aiki da tsarin lokaci na ajin", standard: "an rufe yadda ɗalibai ke samun aikinsu, abin da za su yi idan sun makale, da abin da za su yi idan sun gama" },
    { id: "O6", condition: "Idan aka ba ku darasi mai bambanta koyarwa da aka gama", action: "duba shi don manufa ɗaya, sauyawa, salo da samun dama, da gyara duk abin da bai cika ba", standard: "ya ci duk binciken adalci guda huɗu" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gina kayan bambanta koyarwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Bambanta koyarwa a minti ɗaya, da inda AI ke taimakawa",
          minutes: 5,
          goal: "Bayyana bambanta koyarwa bisa shiri, sha'awa da hanyar koyo da aka fi so, da faɗin aikin AI.",
          text: [
            "Bambanta koyarwa yana nufin daidaita yadda ɗalibai ke kaiwa ga burin koyo ɗaya. Malamai sukan bambanta bisa shiri (abin da ɗalibi ya riga ya sani kuma zai iya yi), sha'awa (abin da ke jan hankalinsa) da hanyar koyo da aka fi so (misali karatu, tattaunawa, zane ko ginawa). Burin ba ya canjawa; hanyar ce ke canjawa.",
            "AI yana taimakawa a sashe mai jinkiri: yin nau'o'i da yawa na aiki, misalai bisa sha'awa, ko jerin atisaye iri-iri. Zai iya mayar da jerin tambayoyi ɗaya uku, ko mayar da karatu ɗaya nau'o'i game da wasanni, waƙa da girki da ƙwarewa ɗaya.",
            "AI bai san ɗalibanku ba. Malami ne ke yanke burin, ya karanta shaidar, ya zaɓi wanda zai bi wace hanya, kuma ya duba kowane nau'i don daidaito da adalci."
          ],
          words: [["Bambanta koyarwa (differentiation)", "daidaita yadda ɗalibai ke kaiwa ga burin koyo ɗaya."], ["Shiri (readiness)", "abin da ɗalibi ya riga ya sani kuma zai iya yi a wata ƙwarewa."], ["Hanyar koyo da aka fi so", "hanyar da ɗalibi ke yawan koyo da kyau, kamar tattaunawa ko zane."]],
          slides: [
            { title: "Buri ɗaya, hanyoyi daban-daban", bullets: ["Shiri: abin da suka sani yanzu", "Sha'awa: abin da ke jan hankalinsu", "Hanyar koyo: yadda suka fi aiki da kyau"] },
            { title: "AI yana yin nau'o'in", bullets: ["Aiki ɗaya ya zama matakai uku", "Ƙwarewa ɗaya, sha'awoyi daban-daban", "Jerin atisaye iri-iri"] },
            { title: "Malami ne ke yanke shawara", bullets: ["Burin da shaidar", "Wanda zai bi wace hanya", "Binciken daidaito da adalci"] }
          ],
          tryIt: "Ku ɗauki aiki ɗaya da kuke koyarwa. Ku nemi AI ya sake rubuta shi ta hanyoyi uku don sha'awoyi daban-daban (misali wasanni, waƙa, girki) da ƙwarewa ɗaya. Ku duba cewa kowanne yana riƙe da ƙwarewar.",
          youCanNow: "bayyana bambanta koyarwa da amfani da AI don yin nau'o'in aiki yayin da ku ne ke yanke shawara.",
          quickCheck: [
            { objective: "O1", q: "Me ke canjawa idan kun bambanta darasi?", options: ["Hanyar da ɗalibai ke bi zuwa ga burin", "Burin koyon kansa", "Ma'aunin matakin aji", "Ɗaliban da za su rubuta jarabawar ƙarshe"], answer: 0, why: "A bambanta koyarwa burin ba ya canjawa; hanyar ce kaɗai ke canjawa." },
            { objective: "O1", q: "AI ya mayar da aikin karatunku nau'in wasanni, nau'in waƙa da nau'in girki. Me za ku yi a gaba?", options: ["Ku raba su ba tare da karanta su ba", "Ku duba cewa kowane nau'i har yanzu yana atisayen ƙwarewa ɗaya", "Ku ba kowane ɗalibi nau'in wasanni", "Ku nemi AI ya zaɓi ɗalibin da zai sami kowane nau'i"], answer: 1, why: "AI yana yin nau'o'in, amma malami ne ke duba su kuma ya yanke wanda zai sami wanne." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gwaje-gwajen farko da ayyuka masu matakai",
          minutes: 6,
          goal: "Rubuta gajeren gwajin farko da ayyuka uku masu matakai zuwa manufa ɗaya.",
          text: [
            "Ku fara da shaida. Ku nemi AI ya rubuta gwajin farko mai tambayoyi biyar kan manufar: tambayoyi biyu kan ƙwarewar da ake buƙata kafin ita, biyu kan manufar kanta, ɗaya ta ƙalubale. Ku nemi amsoshi da abin da kowace amsar kuskure ke nunawa. Ku duba kowace tambaya.",
            "Ayyuka masu matakai suna kaiwa ga manufa ɗaya da matakan taimako da zurfi daban-daban. Prompt (umarni): \"Manufa: [ku manna]. Ka rubuta ayyuka uku. Mataki na 1: ƙarin taimako (misalin da aka warware, matakai, jerin kalmomi). Mataki na 2: matakin aji. Mataki na 3: ƙarin zurfi (aiki mafi wuya ko amfani a rayuwa ta gaske). Duka ukun dole su yi atisayen manufar. Ka haɗa da amsoshi.\"",
            "Ku duba cewa Mataki na 1 ba sauƙaƙa kawai aka yi ba, amma an ba da taimako zuwa ga manufa ɗaya, kuma Mataki na 3 ya fi zurfi, ba aiki mafi yawa kawai ba. Ɗalibai a kowane mataki ya kamata su gama bayan sun yi atisayen manufar."
          ],
          steps: ["Ku nemi gwajin farko mai tambayoyi biyar tare da amsoshi.", "Ku duba kowace tambaya da amsoshin.", "Ku nemi matakai uku zuwa manufa ɗaya.", "Mataki na 1 da taimako, ba mafi sauƙi ba; Mataki na 3 mafi zurfi, ba mafi tsawo ba.", "Ku duba duk amsoshin."],
          words: [["Gwajin farko (pre-assessment)", "gajeren gwaji kafin koyarwa don ganin abin da ɗalibai suka riga suka sani."], ["Aiki mai matakai (tiered task)", "nau'o'in aiki a matakan taimako ko zurfi daban-daban, da nufin buri ɗaya."], ["Aikin canja wuri (transfer task)", "amfani da ƙwarewa a sabon yanayi, sau da yawa na rayuwa ta gaske."]],
          slides: [
            { title: "Ku fara da shaida", bullets: ["Tambayoyi 5: ƙwarewar farko, manufa, ƙalubale", "Amsoshi da abin da amsoshin kuskure ke nunawa"] },
            { title: "Matakai uku, manufa ɗaya", bullets: ["Mataki na 1: ƙarin taimako", "Mataki na 2: matakin aji", "Mataki na 3: ƙarin zurfi ko canja wuri"] },
            { title: "Ku duba matakan", bullets: ["Mataki na 1 da taimako, ba mafi sauƙi ba", "Mataki na 3 mafi zurfi, ba mafi tsawo ba", "Kowa yana atisayen manufar"] }
          ],
          tryIt: "Ku rubuta gwajin farko mai tambayoyi biyar da ayyuka uku masu matakai don manufa ɗaya da AI. Ku duba cewa duka matakan uku suna atisayen manufa ɗaya.",
          youCanNow: "ƙirƙirar gwajin farko da ayyuka masu matakai da duk suke kaiwa ga buri ɗaya.",
          quickCheck: [
            { objective: "O2", q: "Me ya kamata gwajin farko mai tambayoyi biyar na wannan darasi ya ƙunsa?", options: ["Tambayoyin ƙalubale biyar", "Tambayoyi biyar kan darasin bara", "Tambayoyi biyu kan ƙwarewar farko, biyu kan manufar da ɗaya ta ƙalubale", "Tambayoyin da ɗalibai za su ci tabbas kawai"], answer: 2, why: "Wannan haɗin yana nuna wanda ke buƙatar taimako kan ƙwarewar farko, wanda ya shirya, da wanda ya shirya don ƙari." },
            { objective: "O2", q: "Aikin Mataki na 3 ɗinku aikin Mataki na 2 ne da tambayoyi ninki biyu. Me za ku yi?", options: ["Ku bar shi, domin ƙarin aiki ya fi wuya", "Ku cire Mataki na 3", "Ku ba rukunin masu buƙatar taimako", "Ku maye gurbinsa da aiki mafi zurfi, kamar amfani da ƙwarewar a sabon yanayi"], answer: 3, why: "Mataki na 3 ya kamata ya fi zurfi, ba aiki mafi yawa kawai ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Allunan zaɓi",
          minutes: 5,
          goal: "Gina allon zaɓi mai murabba'i tara don atisaye da AI.",
          text: [
            "Allon zaɓi (choice board) jadawali ne na ayyuka, sau da yawa murabba'i tara, da duk suke atisayen ƙwarewa ɗaya ta hanyoyi daban-daban: rubutu, zane, bayani da baki, warware tambayoyi, ginawa, koyar da wani. Ɗalibai suna zaɓar adadi da aka ƙayyade, misali uku a layi ɗaya.",
            "Prompt: \"Ka yi allon zaɓi 3 da 3 don ɗaliban aji na 6 da ke atisayen [ƙwarewa]. Kowane murabba'i hanya ce daban ta atisaye: rubutu, zane, tattaunawa, warware tambayoyi, ƙirƙira, rayuwa ta gaske. Kowane murabba'i dole ya yi atisayen ƙwarewar. Ka saka murabba'in tilas a tsakiya.\"",
            "Ku duba cewa kowane murabba'i da gaske yana atisayen ƙwarewar kuma yana ɗaukar kusan lokaci ɗaya, kuma akwai kayan aikin da ake buƙata. Zaɓi yana ƙara sha'awa; bai kamata ya zama hanyar guje wa sashe mai wuya ba."
          ],
          steps: ["Ku faɗi ƙwarewar da aji.", "Ku nemi allo 3 da 3 mai hanyoyin atisaye iri-iri.", "Ku mayar da murabba'in tsakiya na tilas.", "Ku duba cewa kowane murabba'i yana atisayen ƙwarewar kuma lokacinsu kusan ɗaya ne.", "Ku duba cewa akwai kayan aikin."],
          words: [["Allon zaɓi (choice board)", "jadawalin ayyuka da ke atisayen ƙwarewa ɗaya ta hanyoyi daban-daban, wanda ɗalibai ke zaɓa daga ciki."], ["Na tilas (must-do)", "aikin da kowane ɗalibi zai kammala."]],
          slides: [
            { title: "Jadawalin hanyoyin atisaye", bullets: ["Rubutu, zane, tattaunawa, warwarewa, ginawa", "Ɗalibai suna zaɓa, misali uku a layi ɗaya"] },
            { title: "Prompt ɗin", bullets: ["3 da 3, hanyoyin atisaye iri-iri", "Kowane murabba'i yana atisayen ƙwarewar", "Na tilas a tsakiya"] },
            { title: "Ku duba shi", bullets: ["Ƙwarewa ɗaya, kusan lokaci ɗaya", "Akwai kayan aiki", "Zaɓi, ba guje wa aiki ba"] }
          ],
          tryIt: "Ku gina allon zaɓi 3 da 3 da AI don ƙwarewa ɗaya. Ku duba kowane murabba'i ku maye gurbin duk wanda ba ya atisayen ƙwarewar.",
          youCanNow: "ƙirƙirar allunan zaɓi da ke ba da zaɓi na gaske yayin da ake atisayen ƙwarewa ɗaya.",
          quickCheck: [
            { objective: "O3", q: "Mene ne allon zaɓi?", options: ["Jadawalin ayyuka da duk suke atisayen ƙwarewa ɗaya ta hanyoyi daban-daban", "Jerin batutuwa daban-daban da ɗalibai za su iya tsallakewa", "Taswirar wuraren zama", "Allon da ɗalibai ke jefa ƙuri'a kan aikin gida"], answer: 0, why: "Kowane murabba'i yana atisayen ƙwarewa ɗaya; hanyar atisayen ce kaɗai ke canjawa." },
            { objective: "O3", q: "Wani murabba'i a allon zaɓin da AI ya yi yana neman ɗalibai su zana dabbar da suka fi so, wanda ba ya atisayen ƙwarewar. Me za ku yi?", options: ["Ku bar shi don ɗalibai su sami zaɓi mai daɗi", "Ku mayar da shi murabba'in tilas", "Ku maye gurbinsa da murabba'in da ke atisayen ƙwarewar", "Ku cire dukan allon"], answer: 2, why: "Bai kamata zaɓi ya zama hanyar guje wa ƙwarewar ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gina kayan bambanta koyarwa",
        questions: [
          { objective: "O1", q: "A bambanta koyarwa, me ba ya canjawa?", options: ["Hanyar", "Kayan aikin", "Burin koyo", "Rukunin"], answer: 2, why: "Burin ba ya canjawa; hanyar ce ke canjawa." },
          { objective: "O1", q: "Me AI BAI sani ba lokacin bambanta koyarwa?", options: ["Ɗalibanku", "Yadda ake sake rubuta aiki", "Yadda ake yin matakai uku", "Sha'awoyin da aka saba"], answer: 0, why: "Malamai ne suka san ɗalibai kuma suke yanke hanyoyi." },
          { objective: "O2", q: "Aiki mai kyau na Mataki na 1 shi ne:", options: ["Wata ƙwarewa daban mafi sauƙi", "Tsallake manufar", "Canza launi kawai", "Mai taimako zuwa ga manufa ɗaya"], answer: 3, why: "Taimako, ba ƙaramin buri ba." },
          { objective: "O2", q: "Aiki mai kyau na Mataki na 3 shi ne:", options: ["Ƙarin tambayoyi iri ɗaya", "Mafi zurfi, kamar aikin canja wuri", "Na zaɓi", "Mafi gajarta"], answer: 1, why: "Ƙarin zurfi yana nufin zurfi, ba yawa ba." },
          { objective: "O3", q: "Kowane murabba'i a allon zaɓi ya kamata:", options: ["Ya buƙaci kayan aiki na musamman", "Ya zama wasa", "Ya ɗauki lokaci daban-daban", "Ya yi atisayen ƙwarewa ɗaya"], answer: 3, why: "Zaɓin hanya, ƙwarewa ɗaya." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da bambanta koyarwa da kyau",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rukunoni masu sauyawa bisa shaida",
          minutes: 6,
          goal: "Raba ɗalibai rukuni bisa shaidar gwajin farko da shirya yadda za su sauya.",
          text: [
            "Rukunoni masu sauyawa suna canjawa akai-akai, bisa shaidar yanzu kan wata ƙwarewa, ba bisa wani laƙabi ba. Bayan gwajin farko, ku raba sakamakon zuwa rukunoni don wannan manufa: masu buƙatar taimako kan ƙwarewar farko, waɗanda suka shirya don manufar, waɗanda suka shirya don ƙarin zurfi.",
            "AI zai iya taimaka muku ganin salo, amma makin ɗalibai tare da sunayensu bayanan ilimi ne (education records) da doka ke kare su. Ko dai ku yi rabawar da kanku a littafin makinku, ku yi amfani da kayan aikin da gundumar ta amince da shi, ko ku maye gurbin sunaye da lambobi kafin amfani da AI. Ku yi atisaye da aji na ƙirƙira.",
            "Ku shirya sauyawa: bayan kowane bincike (takardar fita, wato exit ticket, ko tambaya mai mahimmanci, wato hinge question), ɗalibai suna komawa rukunin da ya dace da su yanzu. Ku rubuta lokacin da za ku sake dubawa da yadda ɗalibi ke hawa sama. Rukunonin da ba sa canjawa sukan zama tracking (kullewa a mataki ɗaya)."
          ],
          steps: ["Ku raba sakamakon gwajin farko bisa ƙwarewa, ba laƙabi ba.", "Ku yi amfani da littafin makinku ko kayan aikin da aka amince da shi; kada ku taɓa saka sunaye a kayan aikin da ba a amince da su ba.", "Ku kafa rukunoni uku don wannan manufa.", "Ku shirya sake dubawa bayan kowane darasi.", "Ku sauya ɗalibai yayin da shaida ke canjawa."],
          words: [["Rukuni mai sauyawa (flexible grouping)", "raba ɗalibai rukuni bisa shaidar yanzu kan wata ƙwarewa, wanda ke canjawa akai-akai."], ["Tracking", "ajiye ɗalibai a rukunin mataki ɗaya na dogon lokaci, wanda zai iya takaita damarsu."]],
          slides: [
            { title: "Rukunoni daga shaida", bullets: ["Bisa ƙwarewar yanzu, ba laƙabi ba", "Taimakon ƙwarewar farko, a shirye, ƙarin zurfi"] },
            { title: "Ku kare bayanan ɗalibai", bullets: ["Maki tare da sunaye bayanan ilimi ne", "Littafin maki ko kayan aikin da aka amince da shi", "Ko lambobi, ba sunaye ba"] },
            { title: "Ku sa rukunoni su riƙa sauyawa", bullets: ["Ku sake dubawa bayan kowane darasi", "Ɗalibai suna sauyawa yayin da shaida ke canjawa", "Rukunonin dindindin suna zama tracking"] }
          ],
          sources: [{ name: "FERPA: Kare Sirrin Ɗalibai (dokar Amurka)", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Ku ƙirƙiri sakamakon gwajin farko na ɗalibai 24 ta amfani da lambobi (S1 zuwa S24). Ku kafa rukunoni uku don manufar ku rubuta lokacin da yadda ɗalibai za su sauya tsakaninsu.",
          youCanNow: "raba ɗalibai rukuni mai sauyawa bisa shaida da sa rukunoni su riƙa sauyawa.",
          quickCheck: [
            { objective: "O4", q: "Me ke sa rukuni ya zama \"mai sauyawa\"?", options: ["Ɗalibai suna zaɓar kowane rukuni da suke so", "Yana canjawa akai-akai, bisa shaidar yanzu kan wata ƙwarewa", "Yana zama iri ɗaya dukan shekara", "Ya dogara ne kan laƙabin ɗalibi"], answer: 1, why: "Rukunoni masu sauyawa suna bin shaidar yanzu kuma suna canjawa yayin da ɗalibai ke koyo." },
            { objective: "O4", q: "Kuna son AI ya taimaka muku ganin salo a makin gwajin farko na ajinku. Me za ku fara yi?", options: ["Ku manna littafin maki da sunaye", "Ku tura makin ga abokin aiki ta imel", "Ku liƙa makin a bango", "Ku maye gurbin sunaye da lambobi kamar S1, ko ku yi amfani da kayan aikin da gundumar ta amince da shi"], answer: 3, why: "Makin ɗalibai tare da sunaye bayanan ilimi ne, don haka ku kare su kafin amfani da AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gudanar da aji mai bambanta koyarwa",
          minutes: 5,
          goal: "Shirya al'adun da ke sa darasi mai bambanta koyarwa ya yi aiki a cikin aji.",
          text: [
            "Darussa masu bambanta koyarwa sun fi faɗuwa saboda tsari fiye da kayan aiki. Ku shirya al'adu: yadda ɗalibai ke sanin aikinsu (slide ko kati mai sunayen rukunoni ko launuka), inda kayan aiki suke, abin da za su yi idan sun makale (\"ku tambayi uku kafin ni\", katin taimako), da abin da za su yi idan sun gama (allon zaɓi).",
            "Ku shirya lokacinku: ku fara da ɗan gajeren darasi ga dukan aji, sannan ku zauna da rukunin da ya fi buƙatar ku yayin da sauran ke aiki, sannan ku duba kowane rukuni. AI zai iya rubuta daftarin katunan aiki, katunan taimako da tsarin lokaci.",
            "Ku sa ya zama na yau da kullum. Ku yi amfani da sunayen rukuni marasa nuna matsayi (launuka ko siffofi, ba \"ƙasa\" da \"sama\" ba), ku canja rukunoni akai-akai, kuma ku bar kowane rukuni ya yi aiki mai ban sha'awa. Ɗalibai suna lura idan wani rukuni koyaushe yana samun ayyuka marasa daɗi."
          ],
          steps: ["Ku nuna wa kowane rukuni aikinsa a sarari.", "Ku kafa al'adun kayan aiki, makalewa da gamawa.", "Ɗan gajeren darasi, sannan lokacin malami tare da rukunin da ya fi buƙata.", "Ku duba kowane rukuni.", "Ku yi amfani da sunaye marasa nuna matsayi da aiki mai ban sha'awa ga kowa."],
          words: [["Al'ada (routine)", "hanya ta yau da kullum ta yin wani abu da ɗalibai ke koyo kuma suke bi."], ["Koyarwar ƙaramin rukuni", "malami yana koyar da ɗalibai kaɗan a lokaci ɗaya yayin da sauran ke aiki."]],
          slides: [
            { title: "Tsari ne ke kawo nasara", bullets: ["Katunan aiki a sarari", "Al'adun kayan aiki, makalewa da gamawa"] },
            { title: "Ku shirya lokacinku", bullets: ["Ɗan gajeren darasi ga dukan aji", "Ku zauna da rukunin da ya fi buƙatar ku", "Ku duba kowane rukuni"] },
            { title: "Ku sa ya zama na yau da kullum", bullets: ["Sunayen rukuni marasa nuna matsayi", "Rukunoni suna canjawa akai-akai", "Aiki mai ban sha'awa ga kowane rukuni"] }
          ],
          tryIt: "Ku yi amfani da AI don rubuta daftarin katunan aiki na matakanku uku, katin taimako na lokacin da ɗalibai suka makale, da tsarin lokaci na aji na minti 50.",
          youCanNow: "gudanar da darasi mai bambanta koyarwa da al'adu a sarari da hanyoyin raba rukuni masu adalci.",
          quickCheck: [
            { objective: "O5", q: "Me yasa darussa masu bambanta koyarwa suka fi faɗuwa?", options: ["Tsari da al'adu", "Takardun atisaye kaɗan", "Ɗalibai ba sa son zaɓi", "AI yana yin nau'o'i da yawa"], answer: 0, why: "Darasin ya ce sun fi faɗuwa saboda tsari fiye da kayan aiki." },
            { objective: "O5", q: "Ɗalibai sun gama aikin matakinsu minti goma kafin lokaci. Me ya kamata shirinku ya ce su yi?", options: ["Su jira shiru", "Su fara aikin mataki na gaba", "Su je allon zaɓi", "Su shiga rukunin malami"], answer: 2, why: "Ya kamata shirin ya faɗi abin da za a yi idan an gama, kamar allon zaɓi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Duba bambanta koyarwa don adalci",
          minutes: 6,
          goal: "Duba cewa bambanta koyarwa yana buɗe ƙofofi maimakon rage buri.",
          text: [
            "Bambanta koyarwa zai iya zama rage buri a ɓoye: wasu ɗalibai koyaushe suna samun ayyuka mafi sauƙi kuma ba sa taɓa kaiwa ga burin matakin aji. Ku duba abubuwa huɗu. Manufa ɗaya: shin kowane ɗalibi yana atisayen manufar matakin aji? Sauyawa: shin ɗalibai sun canja rukuni a cikin darussan?",
            "Salo: ku duba (tare da kariyar sirri) waɗanda ke ƙarewa a kowane rukuni a tsawon lokaci. Idan ɗalibai daga wani asali, masu koyon Turanci ko ɗalibai masu nakasa koyaushe suna rukunin masu buƙatar taimako, ku tambayi dalili. Samun dama: shin taimako kamar karantawa da babbar murya ko hotuna yana kaiwa ga kowane ɗalibin da ke buƙata, har da sauƙaƙawar IEP da 504 da doka ta wajabta?",
            "Kayan AI suna buƙatar wannan bincike: shin misalai da sunaye iri-iri ne kuma masu ladabi, ba tare da ra'ayin wariya (stereotype) game da wanda ya iya me ba? Shugabanni za su iya neman ƙungiyoyi su kawo darasi ɗaya mai bambanta koyarwa zuwa taro su yi wannan bincike tare."
          ],
          steps: ["Manufa ɗaya ga kowane mataki?", "Shin ɗalibai sun sauya tsakanin rukunoni?", "Wane ne koyaushe a wane rukuni, kuma me yasa?", "Shin taimako da sauƙaƙawar da doka ta wajabta suna kaiwa ga kowa?", "Shin misalan AI iri-iri ne kuma ba tare da ra'ayin wariya ba?"],
          words: [["Buri (expectations)", "abin da malamai suka yarda ɗalibai za su iya cimmawa, wanda ke tsara abin da ake koya musu."], ["Ra'ayin wariya (stereotype)", "tunani marar adalci kuma kafaffe game da wani rukunin mutane."]],
          slides: [
            { title: "Ku yi hankali da rage buri", bullets: ["Kowane mataki yana kaiwa ga burin matakin aji", "Ɗalibai suna sauyawa tsakanin rukunoni"] },
            { title: "Ku duba salo", bullets: ["Wane ne koyaushe a rukunin masu buƙatar taimako?", "Masu koyon Turanci, nakasa, asali", "Ku tambayi dalili"] },
            { title: "Samun dama da abun ciki", bullets: ["Taimako da sauƙaƙawa suna kaiwa ga kowa", "Misalan AI iri-iri, babu ra'ayin wariya"] }
          ],
          tryIt: "Aikin ƙarshe: ku haɗa darasinku mai bambanta koyarwa (gwajin farko da amsoshi, matakai uku, allon zaɓi, shirin raba rukuni daga bayanan ƙirƙira tare da ƙa'idojin sauyawa), sannan ku yi binciken adalci guda huɗu a kansa ku gyara duk abin da bai cika ba.",
          youCanNow: "bambanta darussa da AI ta hanyar da ke riƙe babban buri ga kowane ɗalibi.",
          quickCheck: [
            { objective: "O6", q: "Me binciken adalci na \"manufa ɗaya\" ke tambaya?", options: ["Shin duk rukunoni suna samun takardar atisaye iri ɗaya?", "Shin kowane ɗalibi yana atisayen manufar matakin aji?", "Shin duk rukunoni suna gamawa a lokaci ɗaya?", "Shin duk ɗalibai suna samun maki iri ɗaya?"], answer: 1, why: "Bai kamata bambanta koyarwa ya nisanta wasu ɗalibai daga burin matakin aji ba." },
            { objective: "O6", q: "A cikin darussan, ɗalibai iri ɗaya daga wani asali koyaushe suna rukunin masu buƙatar taimako. Me za ku yi?", options: ["Ku bar su a can, tunda yana aiki", "Ku sauya su zuwa ƙarin zurfi ba tare da shaida ba", "Ku daina amfani da rukunoni", "Ku tambayi dalili, ku duba ko raba rukunin yana nuna ƙwarewar ne ko wani abu daban"], answer: 3, why: "Irin wannan salo alamar gargaɗi ce cewa bambanta koyarwa yana zama rage buri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da bambanta koyarwa da kyau",
        questions: [
          { objective: "O4", q: "Rukunoni masu sauyawa sun dogara ne kan:", options: ["Laƙabi daga bara", "Shaharar ɗalibi", "Shaidar yanzu kan wata ƙwarewa", "Taswirar wuraren zama"], answer: 2, why: "Shaida kan ƙwarewar yanzu ce ke yanke hukunci." },
          { objective: "O4", q: "Kuna son AI ya taimaka wajen raba sakamakon gwajin farko. Me ke da aminci?", options: ["Amfani da lambobi maimakon sunaye, ko kayan aikin da aka amince da shi", "Manna sunaye da maki a kayan aiki kyauta", "Saka sakamakon a intanet", "Tura su ga wani kamfani ta imel"], answer: 0, why: "Maki tare da sunaye bayanan ilimi ne." },
          { objective: "O5", q: "Wane sunayen rukuni ne suka fi kyau?", options: ["Ƙasa, tsakiya, sama", "Launuka ko siffofi", "Masu wayo da masu jinkiri", "Makin jarabawar ɗalibai"], answer: 1, why: "Sunaye marasa nuna matsayi suna hana sa wa ɗalibai laƙabi." },
          { objective: "O6", q: "Masu koyon Turanci koyaushe suna rukunin masu buƙatar taimako a dukan darussan. Me ya kamata ku yi?", options: ["Ku tambayi dalili ku duba ko raba rukunin yana nuna harshe ne maimakon fahimta", "Babu komai", "Ku mayar da shi na dindindin", "Ku cire su daga ajin"], answer: 0, why: "Salo zai iya nuna raba rukuni marar adalci." },
          { objective: "O4", q: "Mene ne haɗarin rukunonin da ba sa taɓa canjawa?", options: ["Babu", "Suna adana lokaci", "Suna inganta koyo", "Suna zama tracking"], answer: 3, why: "Rukunonin dindindin suna takaita dama." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Bambanta Koyarwa da Taimakon AI",
    questions: [
      { objective: "O1", q: "Bambanta koyarwa yana nufin:", options: ["Ba da buri daban-daban", "Daidaita yadda ɗalibai ke kaiwa ga buri ɗaya", "Azuzuwa daban-daban", "Ƙaramin aiki ga wasu"], answer: 1, why: "Buri ɗaya, hanyoyi daban-daban." },
      { objective: "O1", q: "Shiri (readiness) yana nufin:", options: ["Shekaru", "Zuwa a kan lokaci", "Abin da ɗalibi ya riga ya sani kuma zai iya yi", "Saurin karatu kawai"], answer: 2, why: "Ya danganci kowace ƙwarewa." },
      { objective: "O1", q: "Nau'o'i bisa sha'awa suna riƙe da:", options: ["Babu ƙwarewa", "Ƙwarewoyi daban-daban", "Ƙwarewa ɗaya", "Batun kawai"], answer: 2, why: "Yanayin ne ke canjawa, ba ƙwarewar ba." },
      { objective: "O1", q: "Wane ne ke yanke wane ɗalibi zai bi wace hanya?", options: ["Malami", "AI", "Kamfanin da ke sayar da kayan", "Iyayen ɗalibi su kaɗai"], answer: 0, why: "Malamai ne ke karanta shaida kuma su yanke shawara." },
      { objective: "O2", q: "Ana ba da gwajin farko:", options: ["Ga wasu ɗalibai kawai", "A ƙarshen shekara", "Ba a taɓa ba", "Kafin koyarwa"], answer: 3, why: "Yana nuna inda ɗalibai suke farawa." },
      { objective: "O2", q: "Gwajin farko mai kyau ya ƙunshi:", options: ["Tambayoyi mafi wuya kawai", "Ƙwarewar farko, manufar da tambayar ƙalubale", "Tambayoyin ra'ayi kawai", "Babu komai game da manufar"], answer: 1, why: "Yana nuna bambancin shirin ɗalibai." },
      { objective: "O2", q: "Ayyuka masu matakai suna nufin:", options: ["Manyan ɗalibai kawai", "Manufofi daban-daban", "Babu manufa", "Manufa ɗaya"], answer: 3, why: "Matakai suna bambanta taimako da zurfi, ba burin ba." },
      { objective: "O2", q: "Aikin canja wuri:", options: ["Yana kwafar amsa", "Yana mayar da ɗalibi wata makaranta", "Yana amfani da ƙwarewa a sabon yanayi", "Sake rubuta jarabawa ne"], answer: 2, why: "Yana zurfafa koyo." },
      { objective: "O3", q: "Allon zaɓi yawanci yana da:", options: ["Murabba'i tara na ayyuka don ƙwarewa ɗaya", "Aiki ɗaya", "Wasanni kawai", "Maki"], answer: 0, why: "Jadawalin hanyoyin atisaye ne." },
      { objective: "O3", q: "Murabba'in tilas a allon zaɓi:", options: ["Na zaɓi ne", "Kowane ɗalibi ne ke kammala shi", "Na malami ne", "Na manyan ɗalibai ne kawai"], answer: 1, why: "Yana tabbatar da babban atisayen." },
      { objective: "O3", q: "Murabba'ai a allon zaɓi ya kamata su ɗauki:", options: ["Kusan lokaci ɗaya", "Lokaci daban-daban sosai", "Babu lokaci", "Lokacin aikin gida kawai"], answer: 0, why: "Zaɓi mai adalci yana buƙatar ƙoƙari kusan ɗaya." },
      { objective: "O4", q: "Makin ɗalibai tare da sunaye:", options: ["Mallakar kamfanonin AI ne", "Na jama'a ne", "Suna da aminci a kowace manhaja", "Bayanan ilimi ne da FERPA ke karewa"], answer: 3, why: "Ku kare su." },
      { objective: "O4", q: "Maye gurbin sunaye da lambobi kamar S1 yana taimakawa:", options: ["Ba da maki da sauri", "Kare sirrin ɗalibai lokacin atisaye da AI", "Ɓoye maki daga malamai", "Babu komai"], answer: 1, why: "Lambobi suna cire sunayen da ke nuna ɗalibai." },
      { objective: "O4", q: "Ya kamata ɗalibai su sauya tsakanin rukunoni:", options: ["A ƙarshen shekara kawai", "Ba a taɓa ba", "Yayin da sabuwar shaida ta nuna canji", "Ba tare da tsari ba"], answer: 2, why: "Mai sauyawa yana nufin canjawa tare da shaida." },
      { objective: "O5", q: "Darussa masu bambanta koyarwa sukan faɗi saboda:", options: ["Azuzuwa masu haske", "Ra'ayoyi da yawa", "Tsari da al'adu", "Gajerun sunaye"], answer: 2, why: "Al'adu ne ke sa su yi aiki." },
      { objective: "O5", q: "\"Ku tambayi uku kafin ni\" al'ada ce don:", options: ["Lokacin da ɗalibai suka makale", "Lokacin da ɗalibai suka gama", "Yin layi", "Lokacin abinci"], answer: 0, why: "Yana gina dogaro da kai." },
      { objective: "O5", q: "Lokacin aikin rukuni, malami ya kamata ya fara zama da:", options: ["Shugaban makaranta", "Babu kowa", "Rukunin ƙarin zurfi kawai", "Rukunin da ya fi buƙatar sa"], answer: 3, why: "Lokacin malami yana zuwa inda ya fi muhimmanci." },
      { objective: "O6", q: "Bambanta koyarwa yana zama rage buri idan:", options: ["Kowane mataki yana kaiwa ga burin", "Wasu ɗalibai ba sa taɓa atisayen burin matakin aji", "Rukunoni suna canjawa akai-akai", "Ana ba da taimako"], answer: 1, why: "Duk ɗalibai suna buƙatar burin matakin aji." },
      { objective: "O6", q: "Sauƙaƙawar IEP da 504 da doka ta wajabta a darasi mai bambanta koyarwa:", options: ["Suna aiki a jarabawa kawai", "Matakai suna maye gurbinsu", "Na zaɓi ne", "Dole ne a ci gaba da ba da su"], answer: 3, why: "Doka ta wajabta su." },
      { objective: "O6", q: "Misalan da AI ya yi ya kamata a duba su don:", options: ["Tsawo kawai", "Girman rubutu kawai", "Bambanci da ra'ayin wariya", "Babu komai"], answer: 2, why: "Kayan aiki ya kamata su zama masu adalci da ladabi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 4, 6, 8, 11, 13, 14, 17, 19]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Gwajin farko",
        objective: "O2",
        notYet: "Tambayoyi ƙasa da biyar, babu amsoshi, ko babu alaƙa da manufar.",
        meets: "Tambayoyi biyar (ƙwarewar farko, manufa, ƙalubale) tare da amsoshi.",
        exceeds: "Amsoshin suna kuma faɗin abin da kowace amsar kuskure ke nunawa."
      },
      {
        name: "Ayyuka masu matakai",
        objective: "O2",
        notYet: "Matakan suna atisayen buri daban-daban, ko Mataki na 3 ƙarin aiki ne kawai.",
        meets: "Matakai uku (ƙarin taimako, matakin aji, ƙarin zurfi) duk suna atisayen manufa ɗaya, tare da amsoshi.",
        exceeds: "Mataki na 1 yana da taimako a sarari kuma Mataki na 3 aikin canja wuri ne na gaske."
      },
      {
        name: "Allon zaɓi",
        objective: "O3",
        notYet: "Wasu murabba'ai ba sa atisayen ƙwarewar.",
        meets: "Murabba'i tara da duk suke atisayen ƙwarewar, da murabba'in tilas a tsakiya.",
        exceeds: "Murabba'an suna ɗaukar kusan lokaci ɗaya kuma suna amfani da hanyoyin aiki daban-daban."
      },
      {
        name: "Shirin raba rukuni",
        objective: "O4",
        notYet: "Yana amfani da sunaye na gaske, ko rukunoni ba sa canjawa.",
        meets: "Rukunoni sun fito daga sakamakon ƙirƙira da lambobi, kuma shirin ya faɗi lokacin da yadda ɗalibai ke sauyawa.",
        exceeds: "Ya ambaci sake dubawar, kamar takardar fita (exit ticket), da ke sauya ɗalibai."
      },
      {
        name: "Binciken adalci",
        objective: "O6",
        notYet: "Ba a yi binciken adalci ba.",
        meets: "An yi duk binciken huɗu (manufa ɗaya, sauyawa, salo, samun dama) kuma an gyara abin da bai cika ba.",
        exceeds: "Zai iya faɗin abin da ya canja saboda binciken."
      }
    ]
  },
  evaluation: {
    results: [
      "Malaman da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Malaman da suka koyar da aƙalla darasi ɗaya mai bambanta koyarwa cikin kwanaki 30 (binciken biyo baya)",
      "Lokacin shirya darasi da malamai suka ce sun adana wajen yin nau'o'in ayyuka",
      "Makarantun da shugabanninsu suka yi binciken adalci tare da ƙungiya"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai mataimakin AI da gundumar ilimi ɗinku ta amince da shi",
      "Manufar darasi ɗaya na gaske da kuke koyarwa",
      "Jerin ɗaliban aji na ƙirƙira da lambobi (S1 zuwa S24)",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku gudanar da shi a matsayin zaman horon malamai: ku yi gwajin farko tare, sannan ku sa malamai su kawo darasi ɗaya da za su koyar nan ba da jimawa ba.",
      "Kada ku taɓa bar mahalarta su manna sunayen ɗalibai na gaske ko makinsu a AI; ku ba su aji na ƙirƙira da lambobi.",
      "Ku haɗa malamai daga aji ɗaya ko darasi ɗaya biyu-biyu don su duba matakan juna.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Shugabanni za su iya kammalawa da binciken adalci guda huɗu da aka yi tare a kan darasi ɗaya da aka raba."
    ]
  }
};
