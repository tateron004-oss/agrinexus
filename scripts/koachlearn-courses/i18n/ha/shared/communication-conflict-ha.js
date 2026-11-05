"use strict";

// Koach Learn course, Hausa (ha) translation of shared/communication-conflict.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "communication-conflict-ha",
  lang: "ha",
  translationOf: "communication-conflict",
  category: "Athletes",
  name: "Sadarwa da Warware Rikici",
  skills: "Sauraro da kyau, Amfani da jimlar \"Ni\", Fara magana mai wuya, Kwantar da hankali lokacin zafi, Cimma yarjejeniya mai adalci",
  outcome: "yin magana cikin natsuwa da gaskiya game da saɓani na gaske: sauraro har ɗayan mutumin ya ji an fahimce shi, faɗin abin da kuke buƙata ba tare da ɗora laifi ba, kwantar da abubuwa idan sun yi zafi, da amincewa kan mataki na gaba mai adalci da ku duka kuka rubuta.",
  about: [
    "Saɓani yana faruwa ko'ina: a ƙungiya, a wurin aiki, a gida, tare da abokin kasuwanci, abokin ciniki, mai gida ko ɗan agaji. Waɗanda ke iya magance shi ba su ne waɗanda ba sa taɓa jayayya ba. Su ne waɗanda suka san yadda ake saurare, faɗin ra'ayi da samun hanyar ci gaba.",
    "Wannan kwas na kowa ne: 'yan wasa da masu horarwa, ma'aikata da manajoji, masu kasuwanci, ma'aikatan ƙungiyoyin agaji da 'yan agaji, tsofaffin sojoji, matasa, da mutanen da ke sake gina rayuwarsu bayan gidan yari. Misalan sun fito daga ɗakin canja kaya na 'yan wasa, wuraren aiki, shaguna, ofisoshi da teburin gida.",
    "Za ku yi atisayen ƙwarewa biyar: sauraro da kyau, jimlar \"Ni\", fara magana mai wuya, kwantar da hankali lokacin zafi, da cimma yarjejeniya mai adalci. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da ɗan atisaye. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku zaɓi wani saɓani na gaske a rayuwarku (ƙarami ma ya isa). Ku tsara maganar a takarda, sannan ku yi ta, ko ku yi wasan kwaikwayo da aboki: ku maimaita abin da ɗayan ya faɗa da kalmominku, ku yi amfani da jimlar \"Ni\" ɗaya, ku tambayi abin da yake buƙata, sannan ku gama da rubutacciyar yarjejeniya da ke faɗin wane ne zai yi me, kafin yaushe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Duk wanda ke fuskantar saɓani: 'yan wasa da masu horarwa, ma'aikata da manajoji, masu kasuwanci, ma'aikatan ƙungiyoyin agaji da 'yan agaji, tsofaffin sojoji, matasa da mutanen da ke sake gina rayuwarsu bayan gidan yari.",
    startingPoint: "Suna magana da mutane kowace rana kuma sun taɓa magance wasu saɓani, amma sau da yawa suna guje wa magana mai wuya, suna ɗora laifi, suna fushi, ko suna tashi ba tare da tsari a sarari ba.",
    gap: "Rikicin da ba a warware ba yana cutar da ƙungiyoyi, ayyuka, kasuwanci da iyalai. Masu koyo suna buƙatar ƙwarewa ta aiki don saurare, faɗin ra'ayi ba tare da ɗora laifi ba, kwantar da abubuwa da amincewa kan mataki na gaba mai adalci, don saɓani ya ƙare da mafita maimakon ɓarna.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Atisaye yana amfani da ƙananan saɓani na gaske, ko wasan kwaikwayo da aboki",
      "Tsaro: idan rikici yana da haɗari, barazana ko cin zarafi, masu koyo su tafi su nemi taimako ko su je wurin manaja ko HR (sashen ma'aikata)",
      "Sirri: ba dole ne masu koyo su faɗi cikakken bayanin rikicinsu ba",
      "Lokaci: darussa na kusan minti biyar da gajerun atisaye"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "A cikin magana ta gaske", action: "maimaita abin da ɗayan mutumin ya faɗa da kalmominku da yin tambaya a buɗe", standard: "har sai ya yarda cewa kun fahimce shi" },
    { id: "O2", condition: "Idan aka ba ku jimla mai ɗora laifi", action: "sake rubuta ta a matsayin jimlar \"Ni\" mai buƙata a sarari", standard: "ta amfani da tsarin ina jin, idan, saboda, za mu iya" },
    { id: "O3", condition: "Don maganar da kuke ta jinkirtawa", action: "tsara manufa, lokaci, wuri da jimlar farko ta magana mai wuya", standard: "da jimlar farko da za ku iya faɗa da babbar murya cikin natsuwa" },
    { id: "O4", condition: "Idan magana ta yi zafi", action: "kwantar da hankalinku da na ɗayan mutumin da numfashi a hankali, kalmomi masu kwantar da hankali ko hutu mai ƙayyadadden lokaci", standard: "ba tare da ɗaga murya ko cewa \"ka huce\" ba" },
    { id: "O5", condition: "Idan aka ba ku wani saɓani", action: "jera matsayin kowane ɓangare da buƙatarsa ta gaske, da zaɓuɓɓuka uku da za su iya biyan duka biyun", standard: "kafin ku yi hukunci kan kowane zaɓi" },
    { id: "O6", condition: "A ƙarshen magana", action: "rubuta yarjejeniya da ke faɗin wane ne zai yi me, kafin yaushe, da yadda za ku duba ci gaba", standard: "da kowane sashe a rubuce kuma an raba shi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sauraro da magana a sarari",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sauraro da kyau: sa mutane su ji an saurare su",
          minutes: 5,
          goal: "Ku saurari mutum ku maimaita abin da ya faɗa don ya ji an fahimce shi.",
          text: [
            "Yawancin jayayya tana ƙara muni domin kowane mutum yana shagaltuwa da shirya abin da zai faɗa na gaba. Sauraro da kyau yana nufin ku ajiye wannan gefe, ku yi ƙoƙarin fahimtar ɗayan mutumin tukuna.",
            "Akwai sassa huɗu. Ku ba da cikakkiyar kulawa: ku ajiye waya ku kalli mutumin. Ku bar shi ya gama ba tare da katse shi ba. Ku maimaita: ku faɗi abin da kuka ji da kalmominku, misali \"Wato ka ji an bar ka a baya lokacin da aka canja jadawali ba tare da sanarwa ba.\" Sannan ku yi tambaya a buɗe, wadda ba za a iya amsa ta da i ko a'a ba, misali \"Me zai taimaka?\"",
            "Maimaitawa ba yarda ba ce. Kuna nuna cewa kun fahimta ne kawai. Idan mutane suka ji an saurare su, yawanci sukan huce, su fara sauraron ku ma."
          ],
          steps: ["Ku ajiye wayarku ku fuskanci mutumin.", "Ku bar shi ya gama. Kada ku katse shi ko ku gyara abin tukuna.", "Ku maimaita: \"Abin da nake ji shi ne...\"", "Ku yi tambaya a buɗe: \"Me zai taimaka?\" ko \"Ƙara gaya mini game da...\"", "Ku tabbatar: \"Na fahimta daidai?\""],
          words: [["Sauraro da kyau (active listening)", "sauraro don fahimta, sannan nuna wa mutumin cewa kun fahimta."], ["Maimaitawa (reflect back)", "faɗin babban abin da aka faɗa da kalmominku."], ["Tambaya a buɗe", "tambayar da ke buƙatar amsa fiye da i ko a'a."]],
          slides: [
            { title: "Me yasa sauraro yake zuwa farko", bullets: ["Yawancin mutane suna shirya amsa maimakon sauraro", "Mutanen da suka ji an saurare su sukan huce", "Sannan su shirya jin ku"] },
            { title: "Sassa huɗu na sauraro da kyau", bullets: ["Cikakkiyar kulawa: ajiye waya, fuskantar mutumin", "Bar shi ya gama", "Maimaita da kalmominku", "Yin tambaya a buɗe"] },
            { title: "Yadda yake kasancewa", bullets: ["\"Wato ka ji an bar ka a baya lokacin da aka canja jadawali.\"", "\"Me zai taimaka?\"", "\"Na fahimta daidai?\""] },
            { title: "Ku tuna", bullets: ["Maimaitawa ba yarda ba ce", "Tana nuna cewa kun fahimta"] }
          ],
          tryIt: "A maganarku ta gaske ta gaba a yau, da abokin ƙungiya, abokin aiki, aboki ko wani a iyali, ku maimaita abu ɗaya da ya faɗa ku yi tambaya ɗaya a buɗe. Ku lura da yadda ya amsa.",
          youCanNow: "saurare da cikakkiyar kulawa, maimaita abin da kuka ji da yin tambaya a buɗe.",
          quickCheck: [
            { objective: "O1", q: "Mene ne tambaya a buɗe?", options: ["Tambayar da za a iya amsa ta da i ko a'a", "Tambayar da ke gayyatar mutumin ya yi bayani da kalmominsa", "Tambayar da kuke yi a wurin jama'a", "Tambayar da kun riga kun san amsarta"], answer: 1, why: "Tambayoyi a buɗe suna farawa da kalmomi kamar me ko yaya, kuma suna gayyatar cikakkiyar amsa." },
            { objective: "O1", q: "Abokin ƙungiya ya ce, \"Mai horarwa ba ya taɓa sa ni a wasa a rabi na biyu.\" Me za ku faɗa?", options: ["\"Ba gaskiya ba ne.\"", "\"Ya kamata ka ƙara motsa jiki.\"", "\"Wato kana jin ba a ba ka dama mai adalci a ƙarshen wasanni?\"", "\"Ba na son magana a kai.\""], answer: 2, why: "Maimaitawa tana nuna kun ji shi kafin ku amsa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Faɗin abin da kuke buƙata da jimlar \"Ni\"",
          minutes: 5,
          goal: "Mayar da jimla mai ɗora laifi zuwa jimlar \"Ni\" a sarari.",
          text: [
            "\"Kullum kai...\" da \"Ba ka taɓa...\" suna sa mutane su kare kansu, sannan babu mai saurare. Jimlar \"Ni\" tana magana game da abin da ya faru da yadda ya shafe ku, ba tare da kai wa ɗayan mutumin hari ba.",
            "Tsari mai sauƙi: \"Ina jin [yadda kuke ji] idan [abin da ya faru] saboda [dalilin da yake da muhimmanci]. Za mu iya [buƙata]?\" Misali, maimakon \"Ba ka taɓa ba ni ƙwallo ba,\" ku gwada \"Ina jin takaici idan ina a buɗe amma ƙwallon ba ta zo gare ni ba, saboda ina son in taimaka mu ci ƙwallo. Za mu iya kallon bidiyon wasan tare?\"",
            "Ku tsaya kan batu ɗaya, ku bayyana abin da ya faru kamar yadda kyamara za ta gani, sannan ku gama da buƙatar da mutumin zai iya yi da gaske. Muryarku da fuskarku suna da muhimmanci kamar kalmomin, don haka ku sa muryarku ta natsu."
          ],
          steps: ["Ku faɗi abu ɗaya da ya faru, kamar yadda kyamara za ta gani.", "Ku faɗi yadda kuke ji: takaici, damuwa, ɓacin rai, matsi.", "Ku faɗi dalilin da yasa yake da muhimmanci a gare ku.", "Ku nemi canji ɗaya a sarari da za a iya yi."],
          words: [["Jimlar \"Ni\" (\"I\" statement)", "jimlar da ke farawa da yadda kuke ji da buƙatarku, ba laifin ɗayan mutumin ba."], ["Buƙata", "neman abu ɗaya takamaimai da ɗayan mutumin zai iya yi."]],
          slides: [
            { title: "Ɗora laifi yana rufe mutane", bullets: ["\"Kullum kai...\" da \"Ba ka taɓa...\"", "Mutane suna kare kansu maimakon saurare"] },
            { title: "Tsarin jimlar \"Ni\"", bullets: ["Ina jin [yadda kuke ji]", "idan [abin da ya faru]", "saboda [dalilin da yake da muhimmanci]", "Za mu iya [buƙata]?"] },
            { title: "Kafin da bayan", bullets: ["Kafin: \"Ba ka taɓa gyara wuri ba.\"", "Bayan: \"Ina jin matsi idan kwanoni suka taru, saboda ina dafa abinci da wuri.", "Za mu iya karɓa-karɓa kowane dare?\""] },
            { title: "Shawarwari", bullets: ["Batu ɗaya a lokaci ɗaya", "Ku bayyana shi kamar yadda kyamara za ta gani", "Murya mai natsuwa, fuska a sake"] }
          ],
          tryIt: "Ku rubuta jimloli uku masu ɗora laifi da kuka taɓa faɗa ko ji, misali a wurin aiki ko a gida. Ku sake rubuta kowace a matsayin jimlar \"Ni\" mai buƙata a sarari. Ku faɗi mafi kyau da babbar murya.",
          youCanNow: "mayar da jimla mai ɗora laifi zuwa jimlar \"Ni\" mai yadda kuke ji, dalili da buƙata a sarari.",
          quickCheck: [
            { objective: "O2", q: "Mene ne babban bambanci tsakanin jimlar \"Ni\" da jimlar \"Kai\"?", options: ["Jimlar \"Ni\" kullum ta fi tsawo", "Jimlar \"Ni\" tana bayyana yadda kuke ji da buƙatarku maimakon ɗora laifi", "Jimlar \"Kai\" ta fi ladabi", "Babu bambanci"], answer: 1, why: "Jimlolin \"Ni\" suna faɗin yadda kuke ji da buƙatarku, don haka ɗayan mutumin ba ya jin an kai masa hari." },
            { objective: "O2", q: "Abokin zamanku yana barin kwanoni a wurin wanke-wanke. Wanne za ku faɗa?", options: ["\"Ina jin takaici idan kwanoni suka kwana ba a wanke ba, saboda ina dafa abinci da wuri. Za mu iya wanke su kafin barci?\"", "\"Kai malalaci ne sosai.\"", "\"Kullum kana barin ƙazanta.\"", "\"Ba komai, zan yi duka da kaina.\""], answer: 0, why: "Wannan yana bin tsarin ina jin, idan, saboda, za mu iya, da buƙata a sarari." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fara magana mai wuya",
          minutes: 5,
          goal: "Tsara da fara magana mai wuya a lokaci da wuri da suka dace.",
          text: [
            "Mutane da yawa suna guje wa magana mai wuya har sai abin ya fashe. Ɗan tsari yana sauƙaƙa ta sosai. Da farko, ku san abin da kuke so a sarari: ba don ku yi nasara ba, sai don ku gyara matsalar ku kuma kiyaye dangantakar.",
            "Ku zaɓi lokaci da wuri mai kyau: a ɓoye, ba cikin gaggawa ba, kuma ba lokacin da ɗayanku yake fushi, gajiya ko yunwa ba. Ku fara tambaya: \"Kana da minti goma yau? Ina son mu yi magana game da jadawalin kai kaya.\" Tes ko imel na iya shirya maganar, amma ku yi ainihin maganar ido da ido ko ta waya idan za ku iya, domin yanayin murya yana ɓacewa a rubutu.",
            "Ku fara da gajeriyar jimla mai natsuwa da ke faɗin batun da manufarku: \"Ina son mu yi aiki tare da kyau, kuma wani abu yana damu na. Zan iya faɗa, sannan in ji naka ɓangaren?\" Sannan ku yi amfani da jimlar \"Ni\", ku koma saurare."
          ],
          steps: ["Ku rubuta manufarku: yaya sakamako mai kyau zai kasance?", "Ku zaɓi lokaci a ɓoye da ku duka kuke cikin natsuwa.", "Ku tambaya ko yanzu lokaci ne mai kyau.", "Ku fara da batun da manufarku a jimla ɗaya ko biyu.", "Ku yi amfani da jimlar \"Ni\", sannan ku saurare."],
          words: [["Magana mai wuya", "magana game da abu mai wahala, inda zuciya za ta iya tashi."], ["Jimlar farko", "jimla ta farko ko biyu da ke fara maganar cikin natsuwa."]],
          slides: [
            { title: "Ku san manufarku", bullets: ["Ba don ku yi nasara ba", "Don ku gyara matsalar", "Kuma ku kiyaye dangantakar"] },
            { title: "Ku zaɓi lokacin", bullets: ["A ɓoye, ba cikin gaggawa ba", "Ba lokacin fushi, gajiya ko yunwa ba", "Ido da ido ko ta waya idan za ku iya"] },
            { title: "Farawa mai natsuwa", bullets: ["\"Ina son mu yi aiki tare da kyau.\"", "\"Wani abu yana damu na.\"", "\"Zan iya faɗa, sannan in ji naka ɓangaren?\""] },
            { title: "Sannan", bullets: ["Ku yi amfani da jimlar \"Ni\"", "Ku koma saurare"] }
          ],
          tryIt: "Ku yi tunanin maganar da kuke ta jinkirtawa. Ku rubuta manufarku a jimla ɗaya, ku zaɓi lokaci da wuri, ku rubuta jimlarku ta farko. Ku karanta jimlar farko da babbar murya har ta yi kama da natsuwa da sauƙi.",
          youCanNow: "tsara magana mai wuya, zaɓar lokaci mai kyau da fara ta cikin natsuwa.",
          quickCheck: [
            { objective: "O3", q: "Me ya kamata ku yanke kafin fara magana mai wuya?", options: ["Wane ne zai yi nasara", "Manufarku, lokaci da wuri mai kyau, da jimlarku ta farko", "Abin da za ku saka a intanet game da ita", "Yadda za ku ɗaga murya"], answer: 1, why: "Tsara manufa, lokaci, wuri da farawa yana taimaka maganar ta fara cikin natsuwa." },
            { objective: "O3", q: "Kuna buƙatar magana da manajanku game da sa'o'in aikinku, amma yana gaggawar zuwa taro. Me za ku yi?", options: ["Ku tayar da batun yanzu a hanyar ofis", "Ku aika imel na fushi", "Ku bar aiki ba tare da faɗin komai ba", "Ku nemi minti goma a lokaci mafi natsuwa a yau"], answer: 3, why: "Lokaci a ɓoye mai natsuwa yana ba maganar dama mafi kyau." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sauraro da magana a sarari",
        questions: [
          { objective: "O1", q: "Abokin aikinku ya ɓaci game da canjin jadawali. Wace ce amsar sauraro da kyau mafi kyau?", options: ["\"Ba laifina ba ne.\"", "\"Wato ka ji an bar ka a baya domin babu wanda ya sanar da kai. Na fahimta daidai?\"", "\"Bari in gaya maka abin da ya faru da ni.\"", "Ku kalli wayarku yayin da yake magana"], answer: 1, why: "Maimaitawa da tabbatarwa suna nuna kun fahimta." },
          { objective: "O1", q: "Wace ce tambaya a buɗe?", options: ["\"Ka yi fushi?\"", "\"Ka gama?\"", "\"Shi ke nan?\"", "\"Me zai fi taimaka maka yanzu?\""], answer: 3, why: "Ba za a iya amsa ta da i ko a'a kawai ba." },
          { objective: "O2", q: "Wace ce jimlar \"Ni\" mai kyau?", options: ["\"Ina jin damuwa idan kuɗin haya ya makara, saboda za mu iya rasa gidan. Za mu iya saka tunatarwa?\"", "\"Kullum kana makara da kuɗin haya.\"", "\"Ina ganin kai malalaci ne.\"", "\"Ba ka taɓa damuwa da komai ba.\""], answer: 0, why: "Tana faɗin yadda ake ji, abin da ya faru, dalilin da yake da muhimmanci da buƙata a sarari." },
          { objective: "O3", q: "Yaushe ne lokaci mafi kyau don fara magana mai wuya?", options: ["Nan da nan bayan an sha kaye, lokacin da kowa yake fushi", "A gaban dukan ƙungiyar", "Lokaci a ɓoye da ku duka kuke cikin natsuwa", "Ba taɓa ba; ku jira ya wuce"], answer: 2, why: "Wuri a ɓoye da natsuwa suna ba maganar dama mafi kyau." },
          { objective: "O1", q: "Maimaita abin da wani ya faɗa yana nufin:", options: ["Kun yarda da shi", "Kuna nuna kun fahimci abin da ya faɗa", "Kuna maimaita kalmominsa don ku yi masa ba'a", "Kuna canja batu"], answer: 1, why: "Maimaitawa tana game da fahimta ne, ba yarda ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Kwantar da rikici da amincewa kan hanyar ci gaba",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kwantar da hankali lokacin zafi",
          minutes: 5,
          goal: "Kwantar da lokaci mai zafi, a cikinku da kuma a cikin ɗayan mutumin.",
          text: [
            "Idan muka yi fushi, jiki yakan shirya faɗa: zuciya tana bugawa da sauri kuma yana yi wuya a yi tunani a sarari. Babu wani abu mai kyau da ake yanke shawara a kai a wannan hali, don haka aiki na farko shi ne a huce.",
            "Ku fara da kanku: ku shaƙi iska a hankali kuna ƙirga 4, ku fitar kuna ƙirga 6, ku saki hannayenku ku rage muryarku. Ku yi magana a hankali da laushi fiye da ɗayan mutumin. Ku faɗi abin da kuke gani ba tare da hukunci ba: \"Ina ganin wannan yana da muhimmanci sosai a gare ka.\" Ku guji cewa \"Ka huce!\", domin yawanci yana kawo akasin haka.",
            "Idan har yanzu ya yi zafi sosai, ku ɗauki hutu ku sa lokacin dawowa: \"Ina son mu warware wannan. Mu ɗauki minti ashirin mu yi magana ƙarfe 3.\" Idan kun taɓa jin ba ku da aminci, ku tafi ku nemi taimako. Tsaronku yana gaban kowace magana."
          ],
          steps: ["Ku lura da alamominku: zuciya mai sauri, fuska mai zafi, dunƙule hannu.", "Ku yi numfashi: shaƙa ƙirga 4, fitar ƙirga 6, sau kaɗan.", "Ku rage muryarku ku yi magana a hankali.", "Ku faɗi yadda kuke ganin yana ji: \"Ina ganin ka ɓaci.\"", "Idan ya zama dole, ku ɗauki hutu ku sa lokacin dawowa.", "Idan kuna jin ba ku da aminci, ku tafi ku nemi taimako."],
          words: [["Kwantar da rikici (de-escalate)", "huce wani yanayi don kada ya ƙara muni."], ["Hutu (time-out)", "ɗan hutu da aka amince da shi don a huce, tare da lokacin dawowa."]],
          slides: [
            { title: "Fushi yana hana tunani a sarari", bullets: ["Jiki yana shirya faɗa", "Ba a yanke shawara mai kyau cikin zafi", "Aiki na farko: a huce"] },
            { title: "Ku fara kwantar da kanku", bullets: ["Shaƙa ƙirga 4, fitar ƙirga 6", "Ku saki hannayenku", "Ku rage muryarku ku yi magana a hankali"] },
            { title: "Ku kwantar da ɗayan mutumin", bullets: ["Ku faɗi abin da kuke gani: \"Ina ganin wannan yana da muhimmanci a gare ka.\"", "Ku guji cewa \"Ka huce!\"", "Ku saurare ku maimaita"] },
            { title: "Har yanzu yana da zafi?", bullets: ["Ku ɗauki hutu: \"Mu yi magana ƙarfe 3.\"", "Koyaushe ku dawo a wannan lokacin", "Idan kuna jin ba ku da aminci, ku tafi ku nemi taimako"] }
          ],
          tryIt: "Ku yi atisayen numfashin shaƙa 4, fitar 6 sau biyar yanzu. Sannan ku rubuta jimloli biyu masu kwantar da hankali da za ku iya amfani da su: ɗaya da ke faɗin yadda ɗayan mutumin yake ji, ɗaya kuma da ke neman hutu tare da lokacin dawowa.",
          youCanNow: "kwantar da hankalinku, taimaka wa wani ya huce da ɗaukar hutu lafiya idan lokaci ya yi zafi sosai.",
          quickCheck: [
            { objective: "O4", q: "Mene ne numfashin shaƙa 4, fitar 6?", options: ["Shaƙar iska kuna ƙirga 4 da fitar da ita kuna ƙirga 6 don ku huce", "Numfashi mai zurfi huɗu, sannan shida masu sauri", "Riƙe numfashi na daƙiƙa 10", "Numfashi ta baki kawai"], answer: 0, why: "Fitar da numfashi mai tsawo yana taimaka wa jikinku ya huce." },
            { objective: "O4", q: "Jayayya da abokin ciniki tana ƙara ƙara kuma kuna ƙara fushi. Me za ku yi?", options: ["Ku ɗaga muryarku don a ji ku", "Ku ce masa ya huce", "Ku rage saurin numfashinku, ku rage muryarku ku faɗi yadda yake ji", "Ku tafi ba tare da kalma ɗaya ba"], answer: 2, why: "Kwantar da kanku da farko da faɗin yadda yake ji suna huce lokacin." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gano abin da kowane mutum yake buƙata da gaske",
          minutes: 5,
          goal: "Gano buƙatun da ke bayan matsayin kowane ɓangare da jera zaɓuɓɓukan da za su biya duka biyun.",
          text: [
            "A cikin rikici, mutane yawanci suna faɗin matsayi: abin da suka ce suna so. A bayansa akwai buƙata ta gaske: dalilin da yasa suke son sa. 'Yan wasa biyu duka suna son lambar riga ɗaya (matsayi). Ɗaya yana son ta don sa'a; ɗayan kuma domin lambar kakansa ce da ya rasu (buƙatu). Sanin buƙatar yana buɗe sababbin amsoshi.",
            "Ku yi tambayoyin \"me yasa\" a hankali: \"Mene ne ya fi muhimmanci a gare ka a kan wannan?\" ko \"Me yake damun ka game da wannan tsarin?\" Sannan ku faɗi buƙatarku ta haka.",
            "Yanzu ku jera zaɓuɓɓuka tare, ba tare da yin hukunci a kansu tukuna ba. Ku yi ƙoƙarin samun aƙalla uku. Mai shago da ma'aikaci da duka suke son hutu ranar Asabar za su iya samun: karɓa-karɓa a ƙarshen mako, raba lokacin aiki, ko ƙarin kuɗi na ƙarshen mako don ɗaukar ƙarin taimako. Zaɓi mafi kyau yawanci shi ne wanda ke biyan buƙata mafi muhimmanci ta kowane ɓangare."
          ],
          steps: ["Ku rubuta matsayin kowane ɓangare.", "Ku tambayi abin da ya fi muhimmanci a bayansa, ku rubuta buƙatun.", "Ku jera aƙalla zaɓuɓɓuka uku tare, ba tare da hukunci tukuna ba.", "Ku zaɓi wanda ke biyan buƙatu mafi muhimmanci na ɓangarorin biyu."],
          words: [["Matsayi (position)", "abin da mutum ya ce yana so."], ["Buƙata ta gaske (interest)", "ainihin buƙata ko dalilin da ke bayan matsayi."], ["Tattara ra'ayoyi (brainstorm)", "jera ra'ayoyi da yawa da sauri kafin yin hukunci kan kowanne."]],
          slides: [
            { title: "Matsayi da buƙata ta gaske", bullets: ["Matsayi: abin da mutum ya ce yana so", "Buƙata ta gaske: me yasa yake son sa", "Buƙatu suna buɗe sababbin amsoshi"] },
            { title: "Ku tambayi \"me yasa\"", bullets: ["\"Mene ne ya fi muhimmanci a gare ka a kan wannan?\"", "\"Me yake damun ka game da wannan tsarin?\"", "Sannan ku faɗi naku dalilin"] },
            { title: "Ku jera zaɓuɓɓuka tare", bullets: ["Aƙalla ra'ayoyi uku", "Kada ku yi hukunci a kansu tukuna", "Misali: karɓa-karɓa a ƙarshen mako, raba lokaci, ƙarin kuɗi"] },
            { title: "Zaɓi", bullets: ["Ku zaɓi wanda ke biyan manyan buƙatun ɓangarorin biyu"] }
          ],
          tryIt: "Ku ɗauki saɓanin da kuka tsara a Darasi na 3. Ku rubuta matsayinku da buƙatarku ta gaske, da abin da kuke tsammani na ɗayan mutumin ne. Sannan ku jera zaɓuɓɓuka uku da za su iya biyan buƙatun duka biyun.",
          youCanNow: "gano ainihin buƙatun da ke bayan saɓani da jera zaɓuɓɓukan da za su iya yi wa ɓangarorin biyu aiki.",
          quickCheck: [
            { objective: "O5", q: "Mene ne buƙata ta gaske a cikin saɓani?", options: ["Buƙatar farko da mutumin ya nema", "Buƙata ko dalilin da ke bayan abin da mutum yake nema", "Yadda jayayyar take da ban sha'awa", "Kuɗin bashi da ake bi"], answer: 1, why: "Buƙata ta gaske ita ce buƙatar da ke ƙarƙashin matsayi." },
            { objective: "O5", q: "Ku da abokin aikinku duka kuna son hutu ranar Juma'a. Me za ku fara yi?", options: ["Ku jefa kuɗi nan take", "Ku bar wanda ya fi ƙara ya yi nasara", "Ku je wurin shugaba ba tare da magana ba", "Ku tambayi dalilin da yasa kowannenku yake buƙatar Juma'a ku jera zaɓuɓɓuka kaɗan tare"], answer: 3, why: "Gano buƙatar kowane mutum yana buɗe zaɓuɓɓukan da za su yi wa duka aiki." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Cimma yarjejeniya mai adalci",
          minutes: 5,
          goal: "Mayar da magana mai kyau zuwa rubutacciyar yarjejeniya a sarari da bibiyarta.",
          text: [
            "Maganganu masu kyau da yawa suna kasawa domin babu wanda ya faɗi daidai abin da zai faru a gaba. Yarjejeniya a sarari tana amsa tambayoyi uku: wane ne zai yi me, kafin yaushe, da yadda za ku duba ko tana aiki.",
            "Adalci yana nufin mutanen biyu za su iya zama da ita kuma tana girmama babbar buƙatar kowane ɓangare. Ku maimaita ta da babbar murya: \"To, ni zan rufe shago ranar Talata, kai kuma za ka yi aiki safiyar Asabar, daga mako mai zuwa, kuma za mu duba ranar 15.\" Sannan ku rubuta ta a tes, imel ko rubutun da kuke rabawa don kada wani ya tuna ta daban daga baya.",
            "Ku bibiya a ranar da kuka sa. Idan ba ta aiki, ku koma saurare da zaɓuɓɓuka; wannan abu ne na yau da kullum, ba kasawa ba. Don manyan matsaloli, kamar cin zarafi, tsaro, kuɗi ko al'amuran shari'a, ku kawo manaja, HR, mai horarwa, mai sulhu ko wani amintaccen mutum. Ba dole ne ku warware komai ku kaɗai ba."
          ],
          steps: ["Ku faɗi yarjejeniyar da babbar murya: wane ne, me, kafin yaushe.", "Ku tambaya: \"Za mu iya zama da wannan duka?\"", "Ku rubuta ta ku aika kwafi ga ɗayan mutumin.", "Ku sa ranar dubawa.", "Ku bibiya. Idan ba ta aiki, ku sake magana."],
          words: [["Yarjejeniya", "abin da mutanen biyu suka yanke za su yi, an faɗa a sarari."], ["Bibiya (follow up)", "dubawa daga baya don ganin ko yarjejeniyar tana aiki."], ["Mai sulhu (mediator)", "mutum marar son kai da ke taimaka wa ɓangarori biyu su yi magana su amince."]],
          slides: [
            { title: "Yarjejeniya a sarari tana faɗin", bullets: ["Wane ne zai yi me", "Kafin yaushe", "Yadda za ku duba ko tana aiki"] },
            { title: "Ku sa ta zama mai adalci", bullets: ["Mutanen biyu za su iya zama da ita", "Tana girmama babbar buƙatar kowane ɓangare", "Ku tambaya: \"Za mu iya zama da wannan duka?\""] },
            { title: "Ku rubuta ta", bullets: ["Ku maimaita ta da babbar murya", "Ku aika ta ta tes, imel ko rubutun da kuke rabawa", "Ku sa ranar dubawa"] },
            { title: "Bibiya da neman taimako", bullets: ["Ba ta aiki? Ku sake magana", "Manyan batutuwa: manaja, HR, mai horarwa ko mai sulhu"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi (ko ku yi wasan kwaikwayo da aboki) maganar da kuka tsara. Ku maimaita, ku yi amfani da jimlar \"Ni\" ɗaya, ku tambayi abin da yake buƙata, ku amince kan wane ne zai yi me kafin yaushe, sannan ku aika gajeren taƙaitaccen bayani a rubuce.",
          youCanNow: "kammala magana mai wuya da yarjejeniya mai adalci a rubuce da bibiyarta.",
          quickCheck: [
            { objective: "O6", q: "Me yasa ake sa ranar dubawa a yarjejeniya?", options: ["Don ganin ko yarjejeniyar tana aiki da gyara ta idan ba ta aiki", "Don hukunta wanda ya karya ta", "Don kawo ƙarshen dangantakar", "Domin doka ta buƙaci haka"], answer: 0, why: "Dubawa tana bar mutanen biyu su ga ko tsarin yana aiki su daidaita shi." },
            { objective: "O6", q: "Ku da abokin kasuwancinku kun amince kan tsari da baki. Me za ku yi a gaba?", options: ["Ku amince cewa ku duka za ku tuna shi iri ɗaya", "Ku gaya wa wasu mutane naku labarin", "Ku aika gajeren taƙaitaccen bayani a rubuce na wane ne zai yi me kafin yaushe", "Ku jira matsaloli su bayyana"], answer: 2, why: "Taƙaitaccen bayani a rubuce yana nufin babu wanda zai tuna shi daban." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kwantar da rikici da amincewa kan hanyar ci gaba",
        questions: [
          { objective: "O4", q: "Jayayya tana ƙara ƙara. Me ya kamata ku fara yi?", options: ["Ku ƙara murya don a ji ku", "Ku ce \"Ka huce!\"", "Ku tafi kada ku sake dawowa kan batun", "Ku rage saurin numfashinku ku rage muryarku"], answer: 3, why: "Kwantar da kanku da farko yana taimaka a huce lokacin." },
          { objective: "O5", q: "'Yan agaji biyu duka suna son aikin ranar Asabar. Ɗaya yana buƙatar ranakun mako a buɗe don makaranta. Wannan buƙatar ita ce:", options: ["Buƙatarsa ta gaske", "Matsayinsa", "Yarjejeniyarsa", "Hutunsa"], answer: 0, why: "Buƙata ta gaske ita ce ainihin dalilin da ke bayan abin da mutum yake nema." },
          { objective: "O4", q: "Idan kuka ɗauki hutu a lokacin magana mai zafi, ya kamata ku:", options: ["Kada ku sake tayar da batun", "Sa lokacin dawowa ku cika shi", "Saka shi a intanet", "Gaya wa kowa tukuna"], answer: 1, why: "Hutu yana aiki idan kuka dawo a lokacin da aka amince." },
          { objective: "O6", q: "Wace yarjejeniya ce ta fi sarari?", options: ["\"Za mu ƙara ƙoƙari.\"", "\"Mu ƙara dagewa.\"", "\"Ni zan rufe ranar Talata, kai za ka buɗe ranar Asabar, daga Litinin; za mu duba ranar 15.\"", "\"Duk abin da ya yi aiki.\""], answer: 2, why: "Tana faɗin wane ne, me, yaushe da yadda za ku duba." },
          { objective: "O6", q: "Wani rikici ya ƙunshi cin zarafi a wurin aiki. Mene ne mataki daidai?", options: ["Ku kawo manaja ko HR", "Ku magance shi ku kaɗai ko ta halin yaya", "Ku yi watsi da shi", "Ku ƙara jayayya da ƙarfi"], answer: 0, why: "Manyan batutuwa suna buƙatar manaja, HR ko wani amintaccen mutum." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sadarwa da Warware Rikici",
    questions: [
      { objective: "O1", q: "Sauraro da kyau yana nufin:", options: ["Jiran lokacinku na magana", "Sauraro don fahimta, sannan nuna cewa kun fahimta", "Yarda da komai", "Ba da shawara nan take"], answer: 1, why: "Yana game da fahimta da nuna cewa kun fahimta." },
      { objective: "O1", q: "Wanne yake nuna cikakkiyar kulawa?", options: ["Duba waya", "Kallon talabijin", "Ajiye waya, fuskantar mutumin", "Ƙarasa jimlolinsa a madadinsa"], answer: 2, why: "Cikakkiyar kulawa tana nufin babu abin da ke ɗauke hankali." },
      { objective: "O1", q: "\"Wato makarar kayan da aka kawo ta sa ba ka da isasshe don lokacin cin abincin rana?\" misali ne na:", options: ["Ɗora laifi", "Canja batu", "Tambaya a rufe", "Maimaitawa"], answer: 3, why: "Tana faɗin babban abin da aka faɗa da kalmominku." },
      { objective: "O1", q: "Wace BA tambaya a buɗe ba ce?", options: ["\"Ka sami tes ɗina?\"", "\"Me zai taimaka?\"", "\"Yaya hakan ya shafe ka?\"", "\"Mene ne ya fi muhimmanci a gare ka a nan?\""], answer: 0, why: "Za a iya amsa ta da i ko a'a." },
      { objective: "O2", q: "Me yasa jimloli irin \"Kullum kai...\" suke kawo matsala?", options: ["Sun yi gajarta sosai", "Suna sa mutane su kare kansu", "Sun yi ladabi sosai", "Suna da wuyar rubutawa"], answer: 1, why: "Ɗora laifi yana sa mutane su kare kansu maimakon saurare." },
      { objective: "O2", q: "Tsarin jimlar \"Ni\" shi ne:", options: ["Ina nasara idan ka sha kaye", "Ni ne daidai domin na faɗa", "Ina jin ___ idan ___ saboda ___. Za mu iya ___?", "Zan yi watsi da kai har sai ka canja"], answer: 2, why: "Yadda ake ji, abin da ya faru, dalilin da yake da muhimmanci, da buƙata." },
      { objective: "O2", q: "Abokin ƙungiya yana ta makara zuwa atisaye. Wace ce farawa mafi kyau?", options: ["\"Ina jin matsi idan ana fara motsa jiki ba tare da kai ba, saboda muna rasa atisaye. Za ka iya ƙoƙarin zuwa minti 10 da wuri?\"", "\"Ba ka damu da wannan ƙungiyar ba.\"", "\"Kowa yana ganin kai malalaci ne.\"", "Ku yi shiru ku yi ƙorafi ga wasu"], answer: 0, why: "Jimlar \"Ni\" ce mai natsuwa da buƙata a sarari." },
      { objective: "O2", q: "Jimlar \"Ni\" ya kamata ta bayyana abin da ya faru:", options: ["Da zagi mai yawa yadda zai yiwu", "Kamar yadda kyamara za ta gani", "Ta amfani da kowane kuskure na baya", "A cikin hirar rukuni"], answer: 1, why: "Gaskiyar abin da ya faru, ba hukunci ba, yana sa ta natsu." },
      { objective: "O3", q: "Manufarku a magana mai wuya yawanci ita ce:", options: ["Yin nasara a jayayya", "Nuna cewa ɗayan mutumin ba daidai ba ne", "Faɗin kalma ta ƙarshe", "Gyara matsalar da kiyaye dangantakar"], answer: 3, why: "Sakamako mai kyau yana yi wa mutanen biyu aiki." },
      { objective: "O3", q: "Wace ce hanya mafi kyau don shirya magana mai wuya da abokin kasuwancinku?", options: ["Ku tayar da batun a gaban abokan ciniki", "\"Kana da minti goma yau don mu yi magana game da jadawali?\"", "Ku aika tes na fushi da tsakar dare", "Ku jira har sai kun fashe"], answer: 1, why: "Tambaya tukuna da zaɓar lokaci a ɓoye mai natsuwa shi ne ya fi aiki." },
      { objective: "O3", q: "Me yasa za ku yi magana mai wuya ido da ido ko ta waya idan za ku iya?", options: ["Yanayin murya yana iya ɓacewa a rubutu", "Tes haramun ne", "Yana ɗaukar lokaci mai tsawo", "Ya fi ban mamaki"], answer: 0, why: "Murya da fuska suna ɗauke da yanayin da tes yake rasawa." },
      { objective: "O4", q: "Wane tsarin numfashi ne yake taimaka muku ku huce?", options: ["Riƙe numfashi muddin za ku iya", "Numfashi da sauri sosai", "Shaƙa ƙirga 4, fitar ƙirga 6", "Yin ihu don a fitar da shi"], answer: 2, why: "Fitar da numfashi mai tsawo yana taimaka wa jiki ya rage gudu." },
      { objective: "O4", q: "Cewa \"Ka huce!\" ga mutumin da ya ɓaci yawanci:", options: ["Yana huce shi nan take", "Yana ƙara muni", "Yana kawo ƙarshen rikicin", "Yana gina amana"], answer: 1, why: "Yana kama da raina shi; faɗin yadda yake ji ya fi aiki." },
      { objective: "O4", q: "Kuna jin ba ku da aminci a lokacin jayayya. Me za ku yi?", options: ["Ku tsaya ku gama ta", "Ku ɗaga muryarku", "Ku tare ƙofa", "Ku tafi ku nemi taimako"], answer: 3, why: "Tsaronku yana gaban kowace magana." },
      { objective: "O5", q: "\"Ina son ofishin da ke kusurwa\" matsayi ne. Wace ce buƙata ta gaske da za ta iya kasancewa a bayansa?", options: ["Ofishin da ke kusurwa", "Babban tebur a ofishin kusurwa", "Wuri mai shiru don yin kira", "Yin nasara"], answer: 2, why: "Buƙata ta gaske ita ce dalilin da ke bayan matsayi." },
      { objective: "O5", q: "Lokacin da kuke jera zaɓuɓɓuka tare, ya kamata ku:", options: ["Jera ra'ayoyi da yawa kafin yin hukunci kan kowanne", "Ƙi kowane ra'ayi da zarar an faɗa", "Jera naku ra'ayoyi kawai", "Tsaya a ra'ayin farko"], answer: 0, why: "Tattara ra'ayoyi tukuna yana ba da ƙarin zaɓuɓɓuka." },
      { objective: "O5", q: "Zaɓi mafi kyau yawanci shi ne wanda:", options: ["Ya fi sauri a faɗa", "Yake biyan buƙatu mafi muhimmanci na ɓangarorin biyu", "Yake bar wanda ya fi ƙara ya yi nasara", "Ya fi tsada"], answer: 1, why: "Biyan manyan buƙatun ɓangarorin biyu yana sa ya daɗe." },
      { objective: "O6", q: "Yarjejeniya a sarari tana amsa:", options: ["Wane ne ya yi kuskure", "Wane ne ya fara ihu", "Abin da kowa yake tunani", "Wane ne zai yi me, kafin yaushe, da yadda za ku duba"], answer: 3, why: "Waɗannan bayanai suna sa yarjejeniya ta yi aiki." },
      { objective: "O6", q: "Me yasa ake rubuta yarjejeniya?", options: ["Don amfani da ita a kansa daga baya", "Don saka ta a intanet", "Domin tana kama da ta hukuma", "Don kada wani ya tuna ta daban"], answer: 3, why: "Rubutu yana sa mutanen biyu su kasance a kan abu ɗaya." },
      { objective: "O6", q: "A ranar dubawa yarjejeniyar ba ta aiki. Mene ne mataki mafi kyau?", options: ["Ku daina dangantakar", "Ku yi kamar komai lafiya", "Ku sake magana: ku saurare ku duba sababbin zaɓuɓɓuka", "Ku ɗora wa ɗayan mutumin laifi"], answer: 2, why: "Komawa saurare da zaɓuɓɓuka abu ne na yau da kullum." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      5,
      7,
      9,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tsarin maganar",
        objective: "O3",
        notYet: "Babu manufa a sarari, lokaci ko jimlar farko.",
        meets: "Manufa a jimla ɗaya, lokaci da wuri masu natsuwa, da jimlar farko da aka yi atisayenta da babbar murya.",
        exceeds: "Ya kuma tsara yadda zai ɗauki hutu idan abubuwa suka yi zafi."
      },
      {
        name: "Sauraro",
        objective: "O1",
        notYet: "Ya katse magana ko ya yi gaggawar amsa ba tare da maimaitawa ba.",
        meets: "Ya maimaita aƙalla sau ɗaya kuma ya yi tambaya a buɗe.",
        exceeds: "Ɗayan mutumin ya ce ya ji an fahimce shi."
      },
      {
        name: "Jimlar \"Ni\"",
        objective: "O2",
        notYet: "Ya yi amfani da jimlolin \"kai\" masu ɗora laifi.",
        meets: "Ya yi amfani da aƙalla jimlar \"Ni\" ɗaya a sarari mai buƙata.",
        exceeds: "Ya ci gaba da jimlolin \"Ni\" ko da maganar ta yi wuya."
      },
      {
        name: "Buƙatu da zaɓuɓɓuka",
        objective: "O5",
        notYet: "Ya yi jayayya kan matsayi kawai.",
        meets: "Ya tambayi abin da ɗayan mutumin yake buƙata kuma ya duba zaɓi fiye da ɗaya.",
        exceeds: "Ya sami zaɓin da ya biya muhimman buƙatun ɓangarorin biyu."
      },
      {
        name: "Rubutacciyar yarjejeniya",
        objective: "O6",
        notYet: "Babu yarjejeniya, ko ba ta da sarari.",
        meets: "Taƙaitaccen bayani a rubuce na wane ne zai yi me kafin yaushe, an raba shi da ɗayan mutumin.",
        exceeds: "Ya haɗa da ranar dubawa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka ce sun yi magana mai wuya cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce an warware saɓani da rubutacciyar yarjejeniya",
      "Ƙungiyoyi ko shirye-shiryen da suka ce rikice-rikice ƙalilan ne suke kaiwa ga manaja, mai horarwa ko HR",
      "Masu koyo da suka fara wani kwas na Koach Learn na ƙwarewar mu'amala da mutane cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda da alƙalami don tsara maganar da rubuta yarjejeniyar",
      "Aboki ko abokin atisaye don wasan kwaikwayo, idan zai yiwu",
      "Kusan minti 60 gaba ɗaya, tare da lokacin ainihin maganar"
    ],
    facilitatorNotes: [
      "Ku yi amfani da wasan kwaikwayo bibbiyu da saɓani na ƙirƙira ko ƙananan na gaske; babu wanda dole ya faɗi bayanansa na sirri.",
      "Ku nuna sauraro da kyau da jimlolin \"Ni\" da kanku kafin masu koyo su gwada.",
      "Ku tunatar da masu koyo cewa rikice-rikicen da suka ƙunshi haɗari, barazana ko cin zarafi suna buƙatar taimakon manaja, HR ko hukumomi, ba magana tsakanin mutum biyu kaɗai ba.",
      "Ga ƙungiyoyi, ku yi atisaye da rikice-rikicen ƙungiya da aka saba gani kamar lokacin buga wasa, jadawali da ayyukan da ake rabawa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
