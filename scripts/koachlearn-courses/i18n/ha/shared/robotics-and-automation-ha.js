"use strict";

// Koach Learn course, Hausa (ha) translation of shared/robotics-and-automation.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "robotics-and-automation-ha",
  lang: "ha",
  translationOf: "robotics-and-automation",
  category: "Youth",
  name: "Gabatarwa ga Robot, AI da Sarrafa Kai (Automation)",
  skills: "Bayanin ji-tunani-aiki, Haɗa na'urorin ji da na motsi, Rubuta algorithm, Shirya robot na kwamfuta da bulo-bulo, Amfani da na'urar ji don yanke shawara, Gwadawa da gyara kurakurai",
  outcome: "tsarawa da shirya robot na kwamfuta (virtual) da bulo-bulo na kyauta ta yadda zai bi hanya, ya yi amfani da na'urar ji don kauce wa bango, kuma a gwada shi a gyara har ya yi aiki.",
  about: [
    "Robot da injunan sarrafa kai (automation) suna cikin rumbunan ajiya, gonaki, asibitoci, motoci da gidaje. Wannan kwas ɗin yana nuna yadda suke aiki kuma yana barin ku shirya ɗaya da kanku, ba tare da sayen robot ba, kuma ba tare da sanin shirye-shiryen kwamfuta (coding) a da ba.",
    "Kwas ɗin na matasa ne masu sha'awar ayyukan fasaha, tsofaffin sojoji da suka yi aiki da injuna marasa matuƙi ko gyaran kayan aiki kuma suke son hanyar aikin farar hula, da duk wanda ke son fahimtar injunan da ke canja wuraren aiki.",
    "Za ku koyi tunanin ji-tunani-aiki, ku tsara motsin robot a takarda, sannan ku shirya robot na kwamfuta kyauta a burauzar intanet ta amfani da bulo-bulo. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "A wani kayan aikin robot na kwamfuta kyauta kamar VEXcode VR, ku rubuta shiri da bulo-bulo da ke tuƙa robot ɗin a siffar murabba'i, sannan shiri na biyu da ke tuƙa shi gaba har na'urar ji ta gano bango, ya tsaya, ya juya, ya ci gaba. Ku gwada shi, ku gyara aƙalla kuskure ɗaya, sannan ku rubuta jimloli uku da ke bayanin abin da robot ɗin yake ji, yadda yake yanke shawara da yadda yake aiki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa (daga ƙaramar sakandare zuwa matasa manya) masu sha'awar robot, coding ko ayyukan fasaha, a makaranta, shirye-shiryen bayan makaranta, ɗakunan karatu ko cibiyoyin matasa.",
    startingPoint: "Suna iya amfani da kwamfuta, Chromebook ko tablet da burauzar intanet, kuma sun ga robot a bidiyo ko a shaguna. Yawancinsu ba su taɓa rubuta shiri ko tsara algorithm ba.",
    gap: "Robot da sarrafa kai suna ƙaruwa a rumbunan ajiya, masana'antu, gonaki da asibitoci, kuma ayyukan masu gyara (technician) da masu shirye-shirye suna buƙatar mutanen da za su iya tsara matakai, rubuta code, gwadawa da gyarawa. Masu koyo suna buƙatar nasara ta farko da hannunsu da robot na kwamfuta don su sami ƙarfin gwiwa kuma su ga hanyar shiga waɗannan ayyuka.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 8)",
      "Na'urori: kwamfuta, Chromebook ko tablet mai burauzar intanet; ba a buƙatar robot na gaske",
      "Lokaci: darussa na minti 5, kusan minti 60 gaba ɗaya",
      "Nau'o'in kayan aiki na kyauta da abubuwan da ke cikinsu suna iya canjawa; ku yi amfani da wanda makaranta ko ɗakin karatu ya fi so",
      "Tsaro: ana amfani da robot na masana'antu na gaske ne kawai bayan horon tsaro na wurin"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku misalan injuna na gaske", action: "gane waɗanne ne robot, waɗanne ne sarrafa kai, waɗanne ne ke amfani da AI, da bayanin zagayen ji-tunani-aiki", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Idan aka ba ku aikin da dole robot ya yi", action: "zaɓar na'urorin ji (sensors) da na motsi (actuators) da yake buƙata", standard: "da dalili ga kowane sashe" },
    { id: "O3", condition: "Idan aka ba ku aikin robot", action: "rubuta algorithm da kalmomi masu sauƙi mai cikakkun matakai, maimaitawa (loop) da shawarar idan-to (if-then)", standard: "ta yadda zai yi aiki idan kun bi shi da kanku" },
    { id: "O4", condition: "Ta amfani da kayan aikin robot na kwamfuta kyauta kamar VEXcode VR", action: "shirya robot ɗin da bulo-bulo don ya tuƙa siffar murabba'i", standard: "ta yadda zai dawo kusa da inda ya fara" },
    { id: "O5", condition: "Idan aka ba ku robot da dole ya kauce wa bango", action: "ƙara idan-to da ke amfani da na'urar ji a cikin shirin da gyara aƙalla kuskure ɗaya", standard: "kuna canja abu ɗaya a lokaci ɗaya har robot ɗin ya tsaya ya juya a bango" },
    { id: "O6", condition: "Idan aka ba ku wurin aiki da ke amfani da robot", action: "ambaci ayyuka na gaske da ke da alaƙa da robot da ƙa'idojin tsaro da mutane ke bi kusa da robot", standard: "kuna ambaton aƙalla ayyuka biyu da ƙa'idojin tsaro biyu" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda robot da sarrafa kai ke aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Robot, sarrafa kai da AI: mene ne bambancin?",
          minutes: 4,
          goal: "Raba injuna na gaske zuwa robot, sarrafa kai da AI, da bayanin ji-tunani-aiki.",
          text: [
            "Sarrafa kai (automation) yana nufin inji ko shiri yana yin aiki da kansa bayan an saita shi, kamar zagayen injin wanke kwanuka ko bel ɗin ɗaukar kaya a masana'anta. Robot kuma inji ne da zai iya jin abubuwan da ke kewaye da shi kuma ya motsa ko ya yi aiki a ciki, kamar robot mai share ƙasa ko robot na rumbun ajiya da ke ɗaukar shiryayyu.",
            "Kowane robot yana bin zagaye ɗaya: ji, tunani, aiki. Yana ji da na'urorin ji (kyamara, maɓallin bugu, na'urar auna nisa), yana tunani da shirin kwamfuta da ke yanke abin da zai yi, kuma yana aiki da injuna (motors), ƙafafu, hannaye ko masu kamawa. Sannan ya sake ji.",
            "AI wani nau'in shirin tunani ne da ke koyon tsari daga misalai, kamar gane mutum a hoton kyamara. Robot da yawa suna amfani da ƙa'idoji masu sauƙi, ba AI ba. Wasu suna amfani da AI don gani, tsara hanya ko fahimtar magana."
          ],
          words: [["Sarrafa kai (automation)", "inji ko shiri da ke yin aiki da kansa bayan an saita shi."], ["Robot", "inji da zai iya jin abubuwan da ke kewaye da shi kuma ya yi aiki a ciki."], ["Ji-tunani-aiki (sense-think-act)", "zagayen da kowane robot ke bi: karɓar bayani, yanke shawara, sannan motsi ko aiki."], ["AI", "artificial intelligence (basirar na'ura): shirye-shiryen da ke koyon tsari daga misalai don yanke shawara."]],
          slides: [
            { title: "Sarrafa kai da robot", bullets: ["Sarrafa kai: yana yin aikin da aka saita da kansa", "Robot: yana jin abubuwan da ke kewaye da shi kuma yana aiki a ciki"] },
            { title: "Zagayen robot", bullets: ["Ji: na'urorin ji suna karɓar bayani", "Tunani: shiri yana yanke shawara", "Aiki: injuna, ƙafafu ko hannaye suna motsi", "Sannan a sake ji"] },
            { title: "Inda AI ke shiga", bullets: ["AI yana koyon tsari daga misalai", "Robot da yawa suna amfani da ƙa'idoji masu sauƙi, ba AI ba", "Wasu suna amfani da AI don gani, tsari ko saurare"] }
          ],
          tryIt: "Ku zaɓi injuna uku da kuka gani (misali robot mai share ƙasa, injin biyan kuɗi da kanku a shago, jirgi mara matuƙi na kai kaya). Ga kowanne, ku rubuta ko sarrafa kai ne ko robot, da hanya ɗaya da yake ji, yake tunani da yake aiki.",
          youCanNow: "bambance sarrafa kai, robot da AI, da bayanin kowane robot ta amfani da ji-tunani-aiki.",
          quickCheck: [
            { objective: "O1", q: "Me robot yake yi a matakin \"aiki\" na ji-tunani-aiki?", options: ["Yana motsi ko yin wani abu da injuna, ƙafafu ko masu kamawa", "Yana auna duniya da na'urorin ji", "Yana yanke abin da zai yi da shiri", "Yana kashe kansa"], answer: 0, why: "Aiki yana nufin motsi ko yin wani abu da injuna, ƙafafu, hannaye ko masu kamawa." },
            { objective: "O1", q: "Wani abokinku ya ce kowane robot yana amfani da AI. Me za ku faɗa masa?", options: ["Gaskiya ne; robot ba zai iya aiki ba tare da AI ba", "AI yana nufin robot yana da ƙafafu", "Robot da yawa suna bin ƙa'idoji masu sauƙi; wasu ne kawai ke amfani da AI", "Robot da AI abu ɗaya ne"], answer: 2, why: "Robot da yawa suna amfani da ƙa'idoji masu sauƙi; wasu suna amfani da AI don gani, tsara hanya ko fahimtar magana." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Na'urorin ji da na motsi: hankula da tsokokin robot",
          minutes: 5,
          goal: "Haɗa na'urorin ji da na motsi da aka saba da ayyukan da suke yi.",
          text: [
            "Na'urorin ji (sensors) su ne hankulan robot. Na'urar auna nisa tana auna nisan wani abu. Na'urar bugu (bump sensor) tana sanin lokacin da robot ya taɓa wani abu. Kyamara tana ganin hotuna. Na'urar layi ko launi tana ganin ƙasa. Na'urar GPS tana sanin wuri a waje.",
            "Na'urorin motsi (actuators) su ne tsokokin robot: duk abin da ke sa shi motsi ko aiki. Injuna (motors) suna juya ƙafafu, servo suna juya gaɓɓai zuwa kusurwa daidai, kuma masu kamawa (grippers) ko kofunan tsotsa suna ɗaukar abubuwa.",
            "Idan kuna tsara robot, ku fara da aikin. Robot da dole ya tsaya kafin ya bugi bango yana buƙatar na'urar auna nisa ko na bugu da injunan tuƙi. Robot da ke raba akwatunan ja da shuɗi yana buƙatar na'urar launi da mai kamawa."
          ],
          words: [["Na'urar ji (sensor)", "sashe da ke karɓar bayani, kamar nisa, taɓawa, haske ko hotuna."], ["Na'urar motsi (actuator)", "sashe da ke sa robot ya motsa ko ya yi aiki, kamar inji (motor) ko mai kamawa."], ["Servo", "inji da ke juyawa zuwa kusurwa daidai."]],
          slides: [
            { title: "Na'urorin ji = hankula", bullets: ["Na'urar nisa, na bugu, kyamara", "Na'urar layi ko launi", "GPS don sanin wuri a waje"] },
            { title: "Na'urorin motsi = tsokoki", bullets: ["Injuna suna juya ƙafafu", "Servo suna juyawa zuwa kusurwa daidai", "Masu kamawa suna ɗaukar abubuwa"] },
            { title: "Ku fara da aikin", bullets: ["Tsayawa kafin bango: na'urar nisa + injuna", "Rabawa da launi: na'urar launi + mai kamawa"] }
          ],
          tryIt: "Ku tsara a takarda robot don aiki ɗaya, kamar shayar da shuke-shuke ko ɗaukar akwati daga wani gefen ɗaki zuwa wani. Ku jera na'urorin ji da na motsi da yake buƙata, da dalilin kowanne.",
          youCanNow: "zaɓar na'urorin ji da na motsi da robot ke buƙata don wani aiki.",
          quickCheck: [
            { objective: "O2", q: "Wane sashe ne na'urar motsi (actuator)?", options: ["Kyamara", "Mai kamawa (gripper)", "Na'urar bugu", "Na'urar layi"], answer: 1, why: "Na'urorin motsi suna sa robot ya motsa ko ya yi aiki; mai kamawa yana ɗaukar abubuwa." },
            { objective: "O2", q: "Kuna tsara robot da ke bin baƙin layi a ƙasa. Wace na'urar ji za ku ƙara?", options: ["Na'urar GPS", "Na'urar bugu", "Makirufo", "Na'urar layi ko launi"], answer: 3, why: "Na'urar layi ko launi tana kallon ƙasa kuma tana iya bin layi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta algorithm kafin ku rubuta code",
          minutes: 5,
          goal: "Rubuta tsari mataki-mataki mai maimaitawa da shawara da robot zai iya bi.",
          text: [
            "Algorithm jerin cikakkun matakai ne don kammala aiki. Robot ba ya iya tsammani, don haka dole kowane mataki ya kasance a sarari: \"tuƙa gaba santimita 50\" maimakon \"ɗan je gaba kaɗan\".",
            "Abubuwa biyu suna ƙarfafa algorithm. Maimaitawa (loop) tana maimaita matakai, kamar \"maimaita sau 4: tuƙa gaba, juya dama digiri 90\" don tuƙa murabba'i. Shawara, wadda ake kira idan-to (if-then), tana zaɓar abin da za a yi: \"idan bango ya fi kusa da santimita 10, to ka tsaya; idan ba haka ba, ka ci gaba da tuƙi\".",
            "Ku fara rubuta shi da kalmomi masu sauƙi ko ku zana zanen matakai (flowchart). Sannan ku bi shi da kanku kamar ku ne robot ɗin. Idan kun bugi wani abu a takarda, robot ɗin ma zai buga."
          ],
          steps: ["Ku rubuta manufar a jimla ɗaya.", "Ku jera kowane mataki a jere, da adadi daidai.", "Ku nemi matakan da ke maimaituwa ku mayar da su maimaitawa (loop).", "Ku ƙara duk wata shawarar idan-to da ke amfani da na'urar ji.", "Ku bi shi da kanku don gwada shi."],
          words: [["Algorithm", "jerin cikakkun matakai don kammala aiki."], ["Maimaitawa (loop)", "rukunin matakai da ke maimaituwa."], ["Idan-to (if-then)", "shawara: idan wani abu gaskiya ne, a yi abu ɗaya; idan ba haka ba, a yi wani."], ["Zanen matakai (flowchart)", "zanen algorithm da akwatuna da kibiyoyi."]],
          slides: [
            { title: "Algorithm dole ya zama daidai", bullets: ["\"Tuƙa gaba cm 50\", ba \"ɗan je gaba kaɗan\" ba", "Robot ba ya iya tsammani"] },
            { title: "Maimaitawa da shawarwari", bullets: ["Maimaitawa: sau 4, gaba sannan juya dama 90", "Idan bango ya fi kusa da cm 10, tsaya; idan ba haka ba, ci gaba"] },
            { title: "Ku fara gwadawa a takarda", bullets: ["Ku rubuta shi ko ku zana zanen matakai", "Ku bi shi kamar ku ne robot", "Ku gyara shi kafin ku rubuta code"] }
          ],
          tryIt: "Ku rubuta algorithm mai maimaitawa don robot ya tuƙa siffar murabba'i. Sannan ku ƙara matakin idan-to don ya tsaya idan wani abu ya tare masa hanya. Ku bi shi da abin wasa, waya ko ƙafafunku.",
          youCanNow: "rubuta algorithm a sarari mai maimaitawa da shawarar idan-to, da gwada shi a takarda.",
          quickCheck: [
            { objective: "O3", q: "Me maimaitawa (loop) take yi a algorithm?", options: ["Tana tsayar da robot", "Tana zaɓi tsakanin ayyuka biyu", "Tana maimaita rukunin matakai", "Tana auna nisa"], answer: 2, why: "Maimaitawa tana maimaita matakai, kamar tuƙa gaba da juyawa sau huɗu don murabba'i." },
            { objective: "O3", q: "Tsarinku yana cewa \"ɗan je gaba kaɗan\". Me za ku canja kafin rubuta code?", options: ["Ku ba da adadi daidai, kamar santimita 50", "Babu komai; robot zai yi tsammani", "Ku ƙara matakai bayansa", "Ku cire matakin"], answer: 0, why: "Robot ba ya iya tsammani, don haka kowane mataki yana buƙatar adadi daidai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda robot da sarrafa kai ke aiki",
        questions: [
          { objective: "O1", q: "Waɗanne matakai uku ne kowane robot ke maimaitawa?", options: ["Saya, gina, sayar", "Fara, tsaya, dakata", "Ji, tunani, aiki", "Caji, tuƙi, faki"], answer: 2, why: "Robot yana ji, yana yanke shawara da shiri, sannan yana aiki, kuma yana maimaitawa." },
          { objective: "O2", q: "Wane sashe ne na'urar ji?", options: ["Na'urar auna nisa", "Injin ƙafa", "Mai kamawa", "Batir"], answer: 0, why: "Na'urar auna nisa tana karɓar bayani; injuna da masu kamawa na'urorin motsi ne." },
          { objective: "O2", q: "Dole robot ya raba akwatunan ja da na shuɗi. Me ya fi buƙata?", options: ["Na'urar GPS", "Lasifika mai ƙara sosai", "Babban batir kawai", "Na'urar launi da mai kamawa"], answer: 3, why: "Dole ya ga launi kuma ya ɗauki akwatuna." },
          { objective: "O3", q: "Wane umarni ne ya isa sarari ga robot?", options: ["\"Ɗan je kaɗan\"", "\"Tuƙa gaba santimita 50\"", "\"Juya kamar dama\"", "\"Yi abin nan\""], answer: 1, why: "Robot yana buƙatar adadi daidai." },
          { objective: "O3", q: "\"Maimaita sau 4: tuƙa gaba, juya dama digiri 90\" yana amfani da:", options: ["Na'urar ji", "Maimaitawa (loop)", "Mai kamawa", "Kalmar sirri"], answer: 1, why: "Maimaitawa tana maimaita matakai; wannan yana tuƙa murabba'i." }
        ]
      }
    },
    {
      name: "Babi na 2: Shirya robot da amfani da su",
      lessons: [
        {
          objectives: ["O4"],
          title: "Shirya robot na kwamfuta da bulo-bulo",
          minutes: 6,
          goal: "Buɗe robot na kwamfuta kyauta ku shirya shi ya tuƙa murabba'i.",
          text: [
            "Kuna iya koyon shirya robot a burauzar intanet ba tare da robot ba. VEXcode VR, daga kamfanin VEX Robotics, yana da nau'i na kyauta da ke amfani da bulo-bulo da ake ja a ajiye, kamar Scratch, kuma yana aiki a kwamfuta, Chromebook da tablet a vr.vex.com. Akwai wasu zaɓuɓɓuka na kyauta; makarantarku ko ɗakin karatu na iya samun wanda suka fi so.",
            "Bulo-bulo suna haɗuwa kamar guntuwar wasan wasa (puzzle). Bulon \"drive forward\" (tuƙa gaba) yana motsa robot, bulon \"turn right\" (juya dama) yana juya shi, kuma bulon \"repeat\" (maimaita) yana yin maimaitawa. Kuna danna Start (fara) don kallon robot yana bin shirinku a filin wasa na kwamfuta.",
            "Ku mayar da algorithm ɗinku na takarda zuwa bulo-bulo mataki ɗaya bayan ɗaya. Ku gudanar da shi bayan kowane canji don ku san wane bulo ya jawo me."
          ],
          steps: ["Ku buɗe vr.vex.com a burauzar intanet.", "Ku zaɓi filin wasa mai sauƙi mai fili a ƙasa.", "Ku ja bulon tuƙa gaba da bulon juya dama zuwa cikin shirin.", "Ku naɗe su a cikin bulon maimaita da aka saita zuwa 4.", "Ku danna Start ku kalla. Ku daidaita nisa ko juyawa har ya tuƙa murabba'i mai kyau."],
          words: [["Shirya da bulo-bulo (block coding)", "shirye-shirye ta hanyar haɗa bulo-bulo masu hoto maimakon buga code."], ["Filin wasa (playground)", "wurin kwamfuta da robot na kwaikwayo ke tuƙi a ciki."], ["Na'urar kwaikwayo (simulator)", "manhajar da ke aiki kamar inji na gaske don ku yi atisaye lafiya."]],
          slides: [
            { title: "Atisaye ba tare da robot ba", bullets: ["Shirya da bulo-bulo kyauta a burauza", "VEXcode VR: vr.vex.com", "Yana aiki a kwamfuta, Chromebook da tablet"] },
            { title: "Bulo-bulo suna haɗuwa", bullets: ["Tuƙa gaba, juya dama", "Bulon maimaita = maimaitawa (loop)", "Ku danna Start ku kalla"] },
            { title: "Ku gina a ƙananan matakai", bullets: ["Ku mayar da tsarinku na takarda zuwa bulo-bulo", "Ku gudanar bayan kowane canji", "Ku daidaita har ya yi aiki"] }
          ],
          sources: [{ name: "VEX Robotics: VEXcode VR", url: "https://www.vexrobotics.com/vexcode-vr" }],
          tryIt: "A VEXcode VR ko wani robot na kwamfuta kyauta, ku shirya robot ɗin ya tuƙa murabba'i ta amfani da bulon maimaita. Ku sa ya ƙare kusa da inda ya fara.",
          youCanNow: "shirya robot na kwamfuta da bulo-bulo, ta amfani da maimaitawa don tuƙa murabba'i.",
          quickCheck: [
            { objective: "O4", q: "A shirya da bulo-bulo, me maɓallin Start yake yi?", options: ["Yana goge bulo-bulonku", "Yana ajiye shirinku a filasha (USB)", "Yana buɗe sabon filin wasa", "Yana gudanar da shirin don ku kalli robot yana bin sa"], answer: 3, why: "Danna Start yana gudanar da shirin a filin wasa na kwamfuta." },
            { objective: "O4", q: "Kun ƙara sababbin bulo biyar a lokaci ɗaya kuma robot ɗin ya yi karo. Me ya kamata ku yi?", options: ["Ƙara wasu bulo-bulo", "Gudanar da shirin bayan kowane canji", "Amfani da robot na gaske a maimakon haka", "Kashe na'urar ji"], answer: 1, why: "Gudanarwa bayan kowane canji tana nuna wane bulo ya jawo me." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Amfani da na'urar ji don yanke shawara, sannan gyara kurakurai",
          minutes: 6,
          goal: "Ƙara idan-to da ke amfani da na'urar ji a shirin robot ku gyara kuskure.",
          text: [
            "Robot da ke bin ƙayyadaddun matakai kawai kamar makaho ne. Ku ƙara na'urar ji kuma zai iya mayar da martani. A shirya da bulo-bulo, kuna amfani da bulon \"if\" (idan) da karatun na'urar ji a ciki, kamar \"idan nisa bai kai milimita 100 ba\".",
            "Tsari da aka saba: maimaitawa ta har abada (forever loop), a cikinta idan-to-in ba haka ba (if-then-else). Idan bango ya yi kusa, a tsaya a juya. In ba haka ba, a tuƙa gaba. Robot yana duba na'urar ji akai-akai, wannan shi ne zagayen ji-tunani-aiki a cikin code.",
            "Kurakurai (bugs) abu ne na yau da kullum. Gyara kurakurai (debugging) yana nufin nemo su da gyara su. Ku canja abu ɗaya a lokaci ɗaya, ku gudanar, ku kalla. Kurakuran da aka saba: juyawar ba ta kai digiri 90 daidai ba, lambar nisa tana cikin ma'aunin da ba daidai ba, ko wani bulo yana waje da maimaitawar."
          ],
          steps: ["Ku ƙara maimaitawa ta har abada.", "A cikinta, ku ƙara bulon idan-to-in ba haka ba.", "Ku sa duban na'urar auna nisa a cikin \"idan\".", "To: a tsaya a juya. In ba haka ba: a tuƙa gaba.", "Ku gudanar, ku nemi kuskure, ku canja abu ɗaya, ku sake gudanarwa."],
          words: [["Kuskure (bug)", "kuskure a shiri da ke sa shi yin abin da ba daidai ba."], ["Gyara kurakurai (debugging)", "nemo kurakurai da gyara su."], ["Maimaitawa ta har abada (forever loop)", "maimaitawa da ke ci gaba har sai an tsayar da shirin."]],
          slides: [
            { title: "Na'urorin ji suna sa robot ya mayar da martani", bullets: ["Ku yi amfani da bulon idan da karatun na'urar ji", "Misali: idan nisa < mm 100"] },
            { title: "Tsarin", bullets: ["Maimaitawa ta har abada", "Idan ya yi kusa: tsaya ka juya", "In ba haka ba: tuƙa gaba"] },
            { title: "Gyara kurakurai", bullets: ["Ku canja abu ɗaya a lokaci ɗaya", "Ku duba juyawa, ma'auni da wurin bulo-bulo", "Kurakurai abu ne na yau da kullum"] }
          ],
          tryIt: "Ku shirya robot ɗin ya tuƙa gaba har na'urar auna nisa ta gano bango, sannan ya tsaya, ya juya, ya ci gaba. Ku rubuta kuskure ɗaya da kuka gamu da shi da yadda kuka gyara shi.",
          youCanNow: "amfani da karatun na'urar ji a idan-to-in ba haka ba don sa robot ya mayar da martani, da gyara kurakuran shirin.",
          quickCheck: [
            { objective: "O5", q: "A shirin kauce wa bango, me yasa ake amfani da maimaitawa ta har abada?", options: ["Don robot ya ci gaba da duba na'urar ji akai-akai", "Don robot ya duba sau ɗaya kawai", "Don shirin kada ya taɓa farawa", "Don robot ya tuƙa murabba'i"], answer: 0, why: "Maimaitawa ta har abada tana maimaita duban na'urar ji, wato ji-tunani-aiki a cikin code." },
            { objective: "O5", q: "Robot ɗinku yana tsayawa mita 1 daga bango maimakon kusa da shi. Wane kuskure ne mai yiwuwa?", options: ["Robot yana buƙatar sabon batir", "Filin wasan ya lalace", "Lambar nisa tana cikin ma'aunin da ba daidai ba", "Bangon ya yi tsayi sosai"], answer: 2, why: "Nisa a ma'aunin da ba daidai ba, kamar santimita maimakon milimita, kuskure ne da aka saba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Inda robot ke aiki, da aiki lafiya tare da su",
          minutes: 5,
          goal: "Ambaci ayyuka na gaske da ke da alaƙa da robot da ƙa'idojin tsaro da mutane ke bi kusa da robot.",
          text: [
            "Ana amfani da robot da sarrafa kai a rumbunan ajiya (motsa shiryayyu da kunshin kaya), masana'antu (walda, ɗaure kaya), gonaki (tatsar madara, fesa magani, jirage marasa matuƙi), asibitoci (kai kayan aiki, taimaka wa likitocin tiyata) da soja (kawar da bama-bamai, jiragen sama marasa matuƙi).",
            "Har yanzu mutane suna yin ayyuka masu muhimmanci: masu gyaran robot (robotics technicians) suna gyara da kula da robot, masu sarrafa su suna tafiyar da su da kallon su, kuma masu shirye-shirye da injiniyoyi suna tsara su. Ayyukan masu gyara da yawa suna farawa da takardar shaida ta kwalejin al'umma (community college) ko horon soja.",
            "Tsaro shi ne na farko. Robot na masana'antu suna iya motsi da sauri kuma su buga da ƙarfi. Ma'aikata suna nisantar wuraren robot da aka yi wa alama, suna amfani da maɓallin tsayarwa na gaggawa, kuma suna kulle wutar lantarki kafin gyara. Robot masu aiki tare (cobots) an tsara su don yin aiki kusa da mutane, amma ƙa'ida ɗaya ce: ku bi horon tsaro na wurin."
          ],
          words: [["Mai gyaran robot (robotics technician)", "mutumin da ke girkawa, kula da kuma gyara robot."], ["Cobot", "robot mai aiki tare (collaborative robot) da aka gina don yin aiki kusa da mutane."], ["Maɓallin tsayarwa na gaggawa (emergency stop)", "babban maɓalli da ke tsayar da inji nan take."]],
          slides: [
            { title: "Inda robot ke aiki", bullets: ["Rumbunan ajiya, masana'antu, gonaki", "Asibitoci da soja"] },
            { title: "Ayyuka da robot", bullets: ["Masu gyara suna gyara da kula da su", "Masu sarrafa su suna tafiyar da su da kallon su", "Masu shirye-shirye da injiniyoyi suna tsara su"] },
            { title: "Tsaro shi ne na farko", bullets: ["Ku nisanci wuraren robot da aka yi wa alama", "Ku san maɓallin tsayarwa na gaggawa", "Ku bi horon tsaro na wurin"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala shirinku na murabba'i da shirinku na na'urar ji a kayan aikin robot na kwamfuta, ku gyara aƙalla kuskure ɗaya, sannan ku rubuta jimloli uku da ke bayanin abin da robot ɗinku yake ji, yadda yake yanke shawara da yadda yake aiki.",
          youCanNow: "shirya robot na kwamfuta da ke ji kuma yana mayar da martani, bayanin yadda yake aiki, da ambaton ayyuka na gaske da ke da alaƙa da robot da ƙa'idojin tsaro.",
          quickCheck: [
            { objective: "O6", q: "Wane ne ke gyara da kula da robot a masana'anta ko rumbun ajiya?", options: ["Mai karɓar kuɗi", "Mai gyaran robot (robotics technician)", "Direban kai kaya", "Abokin ciniki"], answer: 1, why: "Masu gyaran robot ne ke gyara da kula da robot." },
            { objective: "O6", q: "Kuna zagaya wani rumbun ajiya kuma kun ga robot suna motsi bayan layin da aka yi wa alama. Me za ku yi?", options: ["Ku ƙetare layin don ku ƙara gani", "Ku taɓa robot don ku ga ko zai tsaya", "Ku danna maɓallai barkatai", "Ku nisanci wurin da aka yi wa alama ku bi ƙa'idojin tsaro na jagoran"], answer: 3, why: "Robot na masana'antu suna iya motsi da sauri kuma su buga da ƙarfi, don haka mutane suna nisantar wuraren robot da aka yi wa alama." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Shirya robot da amfani da su",
        questions: [
          { objective: "O4", q: "Mene ne na'urar kwaikwayo (simulator)?", options: ["Robot na gaske", "Wani nau'in na'urar ji", "Batir na robot", "Manhajar da ke aiki kamar inji na gaske don ku yi atisaye"], answer: 3, why: "Na'urar kwaikwayo tana barin ku yi atisaye lafiya ba tare da inji na gaske ba." },
          { objective: "O4", q: "Wane bulo ne ke sa robot ya maimaita matakai?", options: ["Repeat (maimaita)", "Stop (tsaya)", "Start (fara)", "Print (buga)"], answer: 0, why: "Bulon maimaita yana yin maimaitawa (loop)." },
          { objective: "O5", q: "Wane shiri ne ke barin robot ya kauce wa bango?", options: ["Tuƙa gaba har abada ba tare da dubawa ba", "Juya dama sau ɗaya", "Har abada: idan bango ya yi kusa, tsaya ka juya; in ba haka ba tuƙa gaba", "Tsaya a farko"], answer: 2, why: "Idan-to-in ba haka ba yana amfani da na'urar ji don mayar da martani." },
          { objective: "O5", q: "Robot ɗinku yana ɗan wuce gona da iri wajen juyawa kowane lokaci. Mece ce hanya mafi kyau ta gyara?", options: ["Goge dukan shirin", "Canja bulo biyar a lokaci ɗaya", "Haƙura", "Ɗan canja adadin juyawa ku sake gudanarwa"], answer: 3, why: "Ku canja abu ɗaya a lokaci ɗaya ku gwada." },
          { objective: "O6", q: "Me ya kamata ma'aikaci ya yi kafin ya gyara robot na masana'anta?", options: ["Shiga ciki yayin da yake aiki", "Roƙon robot ɗin ya tsaya", "Bin horon tsaro da kulle wutar lantarki", "Kashe fitilu"], answer: 2, why: "Kulle wutar lantarki da bin horo suna kiyaye lafiyar mutane." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga Robot, AI da Sarrafa Kai (Automation)",
    questions: [
      { objective: "O1", q: "Injin wanke kwanuka da ke yin zagayensa misali ne na:", options: ["Cobot", "Sarrafa kai (automation)", "Na'urar ji", "Zanen matakai"], answer: 1, why: "Yana yin aikin da aka saita da kansa bayan an fara shi." },
      { objective: "O1", q: "Me ke sa inji ya zama robot?", options: ["Yana iya jin abubuwan da ke kewaye da shi kuma ya yi aiki a ciki", "Yana da tsada", "Yana da allo", "Yana amfani da wutar lantarki"], answer: 0, why: "Robot yana ji kuma yana aiki a duniya." },
      { objective: "O1", q: "A ji-tunani-aiki, sashen \"tunani\" ana yin sa ne da:", options: ["Ƙafafu", "Batir", "Shirin", "Fenti"], answer: 2, why: "Shirin ne ke yanke abin da za a yi." },
      { objective: "O1", q: "Shin dukan robot suna amfani da AI?", options: ["A'a, da yawa suna bin ƙa'idoji masu sauƙi", "Eh, koyaushe", "Robot masu share ƙasa kawai", "A fina-finai kawai"], answer: 0, why: "Robot da yawa suna gudanar da shirye-shirye masu sauƙi bisa ƙa'idoji." },
      { objective: "O2", q: "Wanne ne na'urar motsi (actuator)?", options: ["Kyamara", "Na'urar bugu", "GPS", "Inji (motor)"], answer: 3, why: "Injuna suna sa robot ya motsa." },
      { objective: "O2", q: "Servo shi ne:", options: ["Na'urar auna nisa", "Inji da ke juyawa zuwa kusurwa daidai", "Cajar batir", "Wani nau'in maimaitawa"], answer: 1, why: "Ana amfani da servo don gaɓɓan da ke buƙatar kusurwa daidai." },
      { objective: "O2", q: "Dole robot ya san lokacin da ya taɓa wani abu. Wace na'urar ji ta dace?", options: ["Lasifika", "Na'urar bugu", "Fitilar launi", "Agogo"], answer: 1, why: "Na'urar bugu tana gano taɓawa." },
      { objective: "O3", q: "Algorithm shi ne:", options: ["Sunan kamfanin robot", "Wani nau'in inji", "Ƙa'idar tsaro", "Jerin cikakkun matakai don kammala aiki"], answer: 3, why: "Algorithm tsari ne na mataki-mataki." },
      { objective: "O3", q: "Me yasa za a fara gwada algorithm a takarda?", options: ["Don nemo kurakurai kafin rubuta code", "Domin robot yana buƙatar takarda", "Don a tsawaita shi", "Doka ce ta tilasta"], answer: 0, why: "Bin sa da kanku yana gano kurakurai da wuri." },
      { objective: "O3", q: "\"Idan bango ya yi kusa, tsaya; in ba haka ba ka tuƙa\" shi ne:", options: ["Maimaitawa (loop)", "Mai kamawa", "Shawarar idan-to (if-then)", "Filin wasa"], answer: 2, why: "Yana zaɓi tsakanin ayyuka bisa wani sharaɗi." },
      { objective: "O3", q: "Zanen matakai (flowchart) yana nuna algorithm da:", options: ["Rubutun waƙa", "Hotuna", "Kalmomin sirri", "Akwatuna da kibiyoyi"], answer: 3, why: "Zanen matakai yana zana matakai a matsayin akwatuna da aka haɗa da kibiyoyi." },
      { objective: "O4", q: "Shirya da bulo-bulo (block coding) yana nufin:", options: ["Buga dogon code kawai", "Toshe shafukan intanet", "Haɗa bulo-bulo masu hoto don yin shiri", "Gini da bulo na katako"], answer: 2, why: "Bulo-bulo guntuwar code ne masu hoto." },
      { objective: "O4", q: "Sau nawa ya kamata ku maimaita \"gaba, juya dama 90\" don tuƙa murabba'i?", options: ["2", "3", "4", "10"], answer: 2, why: "Murabba'i yana da gefe huɗu da juyawa huɗu." },
      { objective: "O4", q: "Me yasa za ku gudanar da shirinku bayan kowane ɗan canji?", options: ["Don ku san wane canji ya jawo me", "Don a ƙara amfani da batir", "Domin dole ne", "Don a goge bulo-bulo"], answer: 0, why: "Ƙananan matakai suna sa a gano matsaloli cikin sauƙi." },
      { objective: "O5", q: "Maimaitawa ta har abada (forever loop):", options: ["Tana gudana sau ɗaya", "Tana kashe robot", "Tana ci gaba da maimaitawa har sai shirin ya tsaya", "Na'urar ji ce"], answer: 2, why: "Tana maimaitawa akai-akai." },
      { objective: "O5", q: "Gyara kurakurai (debugging) yana nufin:", options: ["Nemo da gyara kurakurai a shiri", "Share ƙwari daga jikin robot", "Sayen sabon robot", "Kashe na'urorin ji"], answer: 0, why: "Kurakurai (bugs) kurakurai ne a shiri." },
      { objective: "O5", q: "Robot ɗinku ba ya taɓa tsayawa a bango. Wane kuskure ne mai yiwuwa?", options: ["Robot ɗin yana da launin da ba daidai ba", "Allon ya yi haske sosai", "Filin wasan ya yi kyau sosai", "Duban na'urar ji yana waje da maimaitawar ko yana amfani da nisan da ba daidai ba"], answer: 3, why: "Wurin da ba daidai ba ko lambobin da ba daidai ba a duban na'urar ji kurakurai ne da aka saba." },
      { objective: "O6", q: "Wanne ne aiki na gaske tare da robot?", options: ["Mai duba sa'a na robot", "Mai gyaran robot (robotics technician)", "Mai fentin na'urar ji kawai", "Babu ko ɗaya"], answer: 1, why: "Masu gyara suna girkawa, kula da kuma gyara robot." },
      { objective: "O6", q: "Cobot shi ne:", options: ["Robot na girki kawai", "Robot da aka tsara don yin aiki kusa da mutane", "Robot da ya lalace", "Robot marar na'urorin ji"], answer: 1, why: "Robot masu aiki tare an gina su don yin aiki tare da mutane." },
      { objective: "O6", q: "Kun ga hannun robot mai sauri yana aiki bayan layin da aka yi wa alama. Me za ku yi?", options: ["Ku shiga don ku ƙara gani", "Ku taɓa shi don gwada shi", "Ku kashe na'urorin jinsa", "Ku nisanci wurin da aka yi wa alama ku bi ƙa'idojin tsaro na wurin"], answer: 3, why: "Wuraren da aka yi wa alama suna hana mutane shiga hanyar robot." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [1, 3, 4, 6, 7, 9, 12, 15, 16, 19]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Shirin murabba'i", objective: "O4", notYet: "Robot ɗin ba ya tuƙa murabba'i, ko shirin ba shi da maimaitawa.", meets: "Bulon maimaita yana tuƙa robot ɗin a murabba'i da ke ƙarewa kusa da farko.", exceeds: "An daidaita nisa da juyawa ta yadda murabba'in ya yi kyau kuma ya yi daidai." },
      { name: "Shirin kauce wa bango", objective: "O5", notYet: "Robot ɗin yana bugun bango ko ba ya sake motsi.", meets: "Maimaitawa ta har abada da idan-to-in ba haka ba: yana tsayawa ya juya a bango, sannan ya ci gaba da tuƙi.", exceeds: "Yana aiki daga wurin farawa fiye da ɗaya a filin wasan." },
      { name: "Gwadawa da gyara kurakurai", objective: "O5", notYet: "Ba a nemo ko gyara wani kuskure ba.", meets: "An nemo kuma an gyara aƙalla kuskure ɗaya ta hanyar canja abu ɗaya a lokaci ɗaya.", exceeds: "Mai koyo zai iya bayanin abin da ya jawo kuskuren da yadda ya gano shi." },
      { name: "Tsari kafin code", objective: "O3", notYet: "Babu rubutaccen tsari, ko matakai kamar \"ɗan je kaɗan\".", meets: "Tsari da kalmomi masu sauƙi mai cikakkun matakai, maimaitawa da idan-to.", exceeds: "An bi tsarin a takarda kuma an gyara shi kafin rubuta code." },
      { name: "An bayyana ji, tunani, aiki", objective: "O1", notYet: "Jimloli ukun ba su nan ko ba su ambaci na'urar ji ba.", meets: "Jimloli uku suna faɗin abin da robot ɗin yake ji, yadda yake yanke shawara da yadda yake aiki.", exceeds: "Yana kuma faɗin ko robot ɗin yana amfani da AI ko ƙa'idoji masu sauƙi, da dalili." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka shiga ƙungiyar robot, ajin coding ko shirin STEM (kimiyya, fasaha, injiniya da lissafi) cikin kwanaki 60",
      "Masu koyo da suka fara wani kwas na fasaha na Koach Learn cikin kwanaki 30",
      "Masu koyo da suka ce suna sha'awar hanyar aikin mai gyaran robot, shirye-shirye ko injiniya (binciken biyo baya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta, Chromebook ko tablet mai burauzar intanet da intanet",
      "Kayan aikin robot na kwamfuta kyauta kamar VEXcode VR (vr.vex.com), ko wanda makaranta ko ɗakin karatu ya fi so",
      "Takarda da alƙalami don algorithm da zanen matakai",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisayen code, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku nuna bulo-bulon farko a allon da kowa ke gani.",
      "Ku sa masu koyo su yi wasan kwaikwayon algorithm: ɗaya yana karanta matakai, ɗayan kuma yana bin su daidai, don a nuna dalilin da yasa dole matakai su zama daidai.",
      "Ku haɗa masu koyo bibbiyu don gyara kurakurai: ɗaya yana gudanar da shirin, ɗayan yana neman kuskuren.",
      "Idan za a ziyarci wurin da ke da robot na gaske, ku bi ƙa'idojin tsaro na wurin kuma ku kasance tare da jagora koyaushe.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
