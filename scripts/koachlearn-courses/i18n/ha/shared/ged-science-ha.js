"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ged-science.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const GED_SUBJECTS = { name: "GED Testing Service: darussan jarabawa (lokaci, nau'ikan tambayoyi, na'urar lissafi)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SCIENCE = { name: "GED Testing Service: jarabawar Kimiyya", url: "https://ged.com/about_test/test_subjects/science/" };
const GED_SCORES = { name: "GED Testing Service: maki", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: gwaje-gwajen misali kyauta (da Turanci da Sifaniyanci)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, gwajin atisaye na hukuma", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, wata jarabawar daidai da kammala sakandare (shafin hukuma)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-science-ha",
  lang: "ha",
  translationOf: "ged-science",
  category: "Workforce Development",
  name: "Shirin Jarabawar GED: Kimiyya",
  skills: "Karanta rubutun kimiyya, Gane abubuwan da ke canjawa (variables) a gwaji, Karanta tebura da zane-zanen jadawali, Lissafin kimiyya (matsakaici, tsakiya, tazara, dabarun lissafi), Auna sakamako, Yin shirin karatu",
  outcome: "karanta rubutun kimiyya, tebur ko zanen jadawali ku amsa tambayoyi irin na GED game da shi, faɗin abubuwan da ke canjawa (variables) a gwaji, yin lissafin kimiyya da jarabawar ke nema, da auna ko bayanan (data) suna goyon bayan wani sakamako.",
  about: [
    "Wannan kwas na manya ne da ke shirin jarabawar Kimiyya ta GED: masu neman aiki, masu dawowa gida daga gidan yari, tsofaffin sojoji, matasa, baƙi masu zama a Amurka da duk wanda ke komawa karatu. Ba sai kun zama masanin kimiyya ba. Jarabawar galibi game da karanta kimiyya ne, fahimtar gwaje-gwaje, da aiki da lambobi da zane-zanen jadawali.",
    "Kwas ɗin yana shirya ku don jarabawar. Ba ya ba ku takardar shaidar GED. GED Testing Service ne ke gudanar da jarabawar, kuma jiharku ce ke sa dokokin zama jarabawar. Wasu jihohi suna amfani da wata jarabawa mai suna HiSET. Ku duba ged.com da ofishin ilimin manya na jiharku don dokoki, kuɗi da wuraren jarabawa na yanzu.",
    "Kowane darasi yana koyar da ƙwarewa ɗaya da misalai da aka warware, da atisayen \"Gwada yanzu\" mai bayanin amsoshi, sannan ɗan gwaji mai tambayoyi biyu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe.",
    "Aikin ƙarshe ƙaramin gwajinku ne na kicin, mai aminci: za ku shirya gwaji na adalci, ku rubuta bayanan a tebur, ku nemo matsakaici, ku zana jadawali, ku rubuta sakamakon da bayanan ke goyon baya."
  ],
  finalTask: "Ku shirya ku yi ƙaramin gwaji na kicin mai aminci (misali: shin yawan juyawa yana canja saurin narkewar sukari a ruwa?). Ku rubuta tambaya da hasashe (hypothesis), ku faɗi abin da kuke canjawa, abin da kuke aunawa da abubuwan da kuke bari iri ɗaya, ku maimaita kowane gwaji sau uku, ku rubuta sakamakon a tebur, ku nemo matsakaicin kowace ƙungiya, ku zana jadawalin sanduna, sannan ku rubuta sakamako mai jimloli biyu da bayanan ke goyon baya. Ku ƙara shirin karatunku na GED mai kwanaki a ƙasa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke shirin jarabawar Kimiyya ta GED: masu neman aiki, masu dawowa gida daga gidan yari, tsofaffin sojoji, matasan da suka bar makaranta, baƙi masu zama a Amurka da manya da ke komawa karatu bayan shekaru da yawa.",
    startingPoint: "Suna iya karanta rubutun yau da kullum da yin lissafi mai sauƙi. Da yawa ba su yi darasin kimiyya ba tsawon shekaru, kuma suna ganin darasin yana da wuya ko cike da abubuwan haddacewa. Wasu har yanzu suna gina ƙarfin gwiwa a Turanci ko lissafi.",
    gap: "Jarabawar Kimiyya ta GED game da karanta rubutun kimiyya ne, fahimtar yadda gwaje-gwaje ke aiki, da amfani da lambobi, tebura da zane-zanen jadawali. Waɗannan ƙwarewa ne da ake iya koya, kuma ana amfani da su a aiki a fannin lafiya, masana'antu, ɗakunan gwaji (lab) da sana'o'in hannu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar kimiyya",
      "Na'urori: waya, kwamfutar ɗakin karatu, ko takarda da alƙalami; na'urar lissafi mai sauƙi tana taimakawa",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki, ganawa da iyali",
      "Aminci: gwaje-gwajen gida suna amfani da ruwa, sukari, gishiri da ruwan famfo mai sanyi-sanyi ko mai ɗumi kawai; babu wuta, harshen wuta ko sinadarai",
      "Dokokin jarabawa, kuɗi da wace jarabawa jiha ke amfani da ita (GED ko HiSET) suna canjawa; masu koyo suna duba ged.com da jiharsu"
    ],
    prerequisites: "Babu. Masu koyo da ke buƙatar taimako da matsakaici ko karanta jadawali za su iya ɗaukar kwas ɗin Lissafi na GED ko kwas ɗin lissafin yau da kullum a lokaci ɗaya."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafin GED na hukuma", action: "lissafa sassa, nau'ikan tambayoyi, lokaci da kayan aikin jarabawar Kimiyya ta GED, da rubuta shirin karatu mai kwanaki", standard: "da sunayen dukkan fannoni uku na ƙwarewa da aƙalla ranar karatu ɗaya kowane mako har zuwa jarabawar" },
    { id: "O2", condition: "Idan aka ba ku gajeren rubutun kimiyya", action: "gane babban ra'ayi da iƙirarin da hujjojin rubutun ke goyon baya", standard: "kuna nuna jimla ko lambar da ke goyon bayan kowace amsa" },
    { id: "O3", condition: "Idan aka ba ku bayanin wani gwaji", action: "faɗin hasashe (hypothesis) da abin da aka canja, abin da aka auna, da abubuwan da aka bari iri ɗaya", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O4", condition: "Idan aka ba ku tebur ko zanen jadawali", action: "karanta ƙima, bayyana yanayin canji (trend), da zaɓar sakamakon da bayanan ke goyon baya", standard: "ba tare da ƙara abubuwan da babu su a cikin bayanan ba" },
    { id: "O5", condition: "Idan aka ba ku ɗan ƙaramin bayanai ko dabarar lissafi (formula)", action: "lissafa matsakaici (mean), tsakiya (median), mafi yawa (mode) da tazara (range), ko amfani da dabarar lissafi don samun amsa", standard: "da ma'auni (units) daidai, kuna samun aƙalla 4 cikin 5 daidai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Karanta kimiyya da fahimtar gwaje-gwaje",
      lessons: [
        {
          title: "Yadda jarabawar Kimiyya ta GED ke aiki",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lissafa sassa da kayan aikin jarabawar Kimiyya ta GED, ku rubuta shirin karatu mai kwanaki.",
          text: [
            "GED tana da jarabawa huɗu: Lissafi (Math), Tunani ta Hanyar Harshe (Reasoning Through Language Arts), Kimiyya (Science) da Nazarin Zamantakewa (Social Studies). Kuna iya zama su ɗaya bayan ɗaya. GED Testing Service ne ke yin jarabawar. Wasu jihohi suna amfani da wata jarabawar daidai da kammala sakandare, HiSET, don haka ku duba wace jarabawa jiharku ke amfani da ita.",
            "A ged.com, an rubuta cewa jarabawar Kimiyya minti 90 ce babu hutu. Tana da fannoni uku na ƙwarewa: karanta kimiyya don fahimtar ma'ana, tsarawa da fassara gwaje-gwajen kimiyya, da amfani da lambobi da zane-zane a kimiyya. Tambayoyin suna da zaɓi (multiple choice), cike gurbi, ja da ajiye (drag and drop), zaɓar wuri a hoto, da jerin zaɓi (drop-down).",
            "Ana ba ku na'urar lissafi a kan allo da takardar bayanin na'urar lissafi, kuma ged.com ta ce kuna iya kawo na'urar lissafinku ta TI-30XS zuwa cibiyar jarabawa. Ged.com ta kuma ce ba sai kun haddace dabarun lissafi ba: ana ba da bayanan da kuke buƙata tare da kowace tambaya. Ba jarabawar abubuwan da aka haddace ba ce; tana gwada yadda kuke karatu da tunani.",
            "Ged.com ta rubuta maki 145 a matsayin makin cin kowane darasi. Lokaci da dokoki suna iya canjawa, don haka ku duba ged.com kafin ku yi rajista. Ged.com tana da gwaje-gwajen misali kyauta da gwajin atisaye na hukuma, GED Ready."
          ],
          steps: ["Ku je ged.com ku karanta shafin jarabawar Kimiyya.", "Ku rubuta lokaci, fannoni uku na ƙwarewa da kayan aikin da ake ba ku.", "Ku yi gwajin misali na Kimiyya kyauta don ku ga matsayinku.", "Ku zaɓi makon da kuke son zama jarabawa.", "Ku rubuta aƙalla ranar karatu ɗaya kowane mako, da ƙwarewar da za ku yi atisaye a kanta."],
          words: [["GED", "jarabawar daidai da kammala sakandare; cin dukkan darussa huɗu yana ba da takardar shaida da masu ɗaukar aiki da kwalejoji da yawa ke karɓa kamar takardar kammala sakandare."], ["HiSET", "wata jarabawar daidai da kammala sakandare da wasu jihohi ke amfani da ita."], ["TI-30XS", "samfurin na'urar lissafin hannu da jarabawar GED ke amfani da shi a kan allo, kuma ake yarda da shi a cibiyoyin jarabawa."], ["Takardar bayanin na'urar lissafi", "takardar da ake bayarwa a jarabawa wadda ke nuna yadda ake amfani da maɓallan na'urar lissafi."]],
          slides: [
            { title: "Jarabawar Kimiyya ta GED (ku duba ged.com)", bullets: ["Minti 90, babu hutu", "Tambayoyi masu zaɓi da wasu nau'ikan tambayoyi", "Makin cin da aka rubuta: 145"] },
            { title: "Fannoni uku na ƙwarewa", bullets: ["Karanta kimiyya don fahimtar ma'ana", "Tsarawa da fassara gwaje-gwaje", "Amfani da lambobi da zane-zane"] },
            { title: "Kayan aikin da ake ba ku", bullets: ["Na'urar lissafi a kan allo da takardar bayani", "Kuna iya kawo TI-30XS zuwa cibiyar jarabawa", "Ana ba da bayanan da ake buƙata tare da kowace tambaya"] },
            { title: "Ku yi shiri", bullets: ["Ku fara yin gwajin misali kyauta", "Ku zaɓi makon jarabawa", "Ku yi karatu kaɗan, yawancin kwanakin mako"] }
          ],
          sources: [GED_SUBJECTS, GED_SCIENCE, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Ku buɗe ged.com ku yi gwajin misali na Kimiyya kyauta (ko ku karanta shafin Kimiyya idan ba za ku iya yin gwajin yanzu ba). Ku rubuta shirin karatunku: makon da kuke son zama jarabawa da rana ɗaya kowane mako tare da ƙwarewar da za ku yi atisaye a kanta: karanta kimiyya, gwaje-gwaje, ko lambobi da jadawali. Ku ajiye shi don aikin ƙarshe.",
          youCanNow: "faɗin sassa da kayan aikin jarabawar Kimiyya ta GED, da bin shirin karatu mai kwanaki.",
          quickCheck: [
            { objective: "O1", q: "Bisa ga ged.com, me ya kamata ku haddace don jarabawar Kimiyya ta GED?", options: ["Kowace dabarar lissafi a kimiyya", "Teburin sinadarai (periodic table)", "Ba dabarun lissafi ba: ana ba da bayanan da kuke buƙata tare da kowace tambaya", "Sunayen dukkan masana kimiyya"], answer: 2, why: "Ged.com ta ce ba sai kun haddace dabarun lissafi ba; ana ba da bayanan da ake buƙata." },
            { objective: "O1", q: "Wanne ne ɗaya daga cikin fannoni uku na ƙwarewa a jarabawar Kimiyya?", options: ["Tsarawa da fassara gwaje-gwajen kimiyya", "Rubuta kalmomin kimiyya daidai", "Zana dabbobi", "Haɗa kwamfuta"], answer: 0, why: "Ged.com ta lissafa karanta don fahimtar ma'ana, gwaje-gwaje, da lambobi da zane-zane." }
          ]
        },
        {
          title: "Karanta rubutun kimiyya",
          objectives: ["O2"],
          minutes: 5,
          goal: "Gane babban ra'ayin rubutun kimiyya da iƙirarin da hujjojinsa ke goyon baya.",
          text: [
            "Rubutun kimiyya yana kama da mai wuya saboda sababbin kalmomi, amma kuna karanta shi kamar kowane rubutu. Ku nemo abin da ya fi magana a kai, ku nemo abubuwa na gaskiya da lambobin da ke goyon bayansa. Sau da yawa rubutun yana bayanin kalma mai wuya a cikinsa. Ku nemi \"ana kiransa\", \"ma'anarsa\" ko kalmomi a tsakanin waƙafi bayan kalmar.",
            "Misali da aka warware. \"Gumi yana sanyaya jiki. Idan gumi ya ƙafe, wato ya canja daga ruwa zuwa iska (gas), yana ɗauke zafi daga fata. A ranakun da iska ke da danshi sosai, iskar tana riƙe da ruwa mai yawa tun farko, don haka gumi yana ƙafewa a hankali.\" Babban ra'ayi: gumi yana sanyaya jiki ta hanyar ƙafewa. Iƙirarin da aka goyi baya: kuna iya jin zafi fiye da haka a ranakun danshi saboda gumi yana bushewa a hankali.",
            "Ana goyon bayan iƙirari ne kawai idan rubutun ya ba da hujja a kansa. \"Gumi yana ƙona kitse\" ba shi da goyon baya; rubutun bai ce komai game da kitse ba. Ku zaɓi amsar da rubutun ya tabbatar, ba wadda ta fi jin kamar kimiyya ba."
          ],
          steps: ["Ku fara karanta tambayar.", "Ku karanta rubutun; ku zagaye sababbin kalmomi ku nemi ma'anarsu kusa da su.", "Ku faɗi babban ra'ayi a jimla ɗaya.", "Ga kowane zaɓin amsa, ku tambayi: a ina rubutun ya tabbatar da wannan?", "Ku goge zaɓuɓɓukan da ke ƙara abubuwan da rubutun bai bayar ba."],
          words: [["Ƙafewa (evaporate)", "canjawa daga ruwa zuwa iska (gas), kamar kududdufi da ke bushewa."], ["Danshi (humid)", "lokacin da iska ke riƙe da tururin ruwa mai yawa."], ["Iƙirari (claim)", "magana da ke cewa wani abu gaskiya ne."], ["Mai goyon baya (supported)", "wanda hujjoji a cikin rubutu ko bayanai suka tabbatar."]],
          slides: [
            { title: "Ku karanta kimiyya kamar kowane rubutu", bullets: ["Me ya fi magana a kai?", "Waɗanne abubuwa na gaskiya da lambobi ke goyon bayansa?"] },
            { title: "Sababbin kalmomi", bullets: ["Ku nemi \"ana kiransa\" ko \"ma'anarsa\"", "Ku nemi ma'ana a tsakanin waƙafi bayan kalmar"] },
            { title: "Akwai goyon baya ko babu?", bullets: ["Akwai goyon baya: rubutun ya tabbatar da shi", "Babu goyon baya: yana ƙara abubuwan da babu su a rubutun", "Kada ku zaɓi amsa don kawai tana jin kamar ta masana"] }
          ],
          tryIt: "Rubutun atisaye: \"Tsirrai suna yin abincinsu da kansu ta hanyar photosynthesis (yin abinci da hasken rana). Suna amfani da haske, ruwa da carbon dioxide, wata iska (gas) da ke cikin iska, don yin sukari. Suna sakin oxygen a sakamakon haka.\" 1) Babban ra'ayi? 2) Wane iƙirari ne ke da goyon baya: (a) tsiron da aka ajiye a cikin ɗaki mai duhu zai sha wahalar yin abinci, ko (b) tsirrai suna buƙatar lemun kwalba (soda) don girma? Amsoshi: 1) Tsirrai suna yin abinci daga haske, ruwa da carbon dioxide. 2) (a): rubutun ya ce tsirrai suna buƙatar haske. (b) babu shi a rubutun.",
          youCanNow: "nemo babban ra'ayin rubutun kimiyya da zaɓar iƙirarin da hujjojinsa ke goyon baya.",
          quickCheck: [
            { objective: "O2", q: "Wani rubutu ya ce, \"Alluran rigakafi suna koya wa immune system, tsarin kariyar jiki, gane ƙwayoyin cuta.\" Mene ne ma'anar \"immune system\" a nan?", options: ["Wani nau'in ƙwayar cuta", "Tsarin kariyar jiki", "Ofishin likita", "Wani nau'in maganin da ake haɗiyewa"], answer: 1, why: "An ba da ma'anar a tsakanin waƙafi nan da nan bayan kalmar." },
            { objective: "O2", q: "Wani rubutu ya ce ƙarfe (steel) yana yin tsatsa da sauri a iska mai danshi da gishiri. Wane iƙirari ne ke da goyon baya?", options: ["Ƙarfe ba ya taɓa yin tsatsa", "Gishiri yana ƙara ƙarfin ƙarfe", "Tsatsa tana faruwa a hamada kawai", "Gadar ƙarfe kusa da teku tana iya buƙatar ƙarin kariya daga tsatsa"], answer: 3, why: "Iskar teku tana da danshi da gishiri, kuma rubutun ya ce hakan yana hanzarta tsatsa." }
          ]
        },
        {
          title: "Gwaje-gwaje: hasashe da abubuwan da ke canjawa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Faɗin hasashe da abin da aka canja, abin da aka auna, da abubuwan da aka bari iri ɗaya a gwaji.",
          text: [
            "Gwaji (experiment) yana gwada wata tambaya. Hasashe (hypothesis) tsammani ne da ake iya gwadawa game da amsar, sau da yawa ana rubuta shi \"Idan ..., to ...\". Misali: \"Idan tsirrai sun sami ƙarin awoyin haske, to za su ƙara tsayi.\"",
            "Independent variable (abin da aka canja) shi ne abu ɗaya da masanin kimiyya ke canjawa da gangan (awoyin haske). Dependent variable (abin da aka auna) shi ne abin da ake aunawa don ganin tasirin (tsayin tsiro). Controlled variables (abubuwan da aka bari iri ɗaya) ana barin su iri ɗaya don gwajin ya zama na adalci (nau'in tsiro ɗaya, tukunya ɗaya, ruwa ɗaya, ƙasa ɗaya).",
            "Dabarar tunawa: dependent variable ya dogara ne da independent variable. Tsayi ya dogara da haske. Gwaji na adalci yana canja abu ɗaya kawai a lokaci ɗaya. Idan kun canja haske da ruwa tare, ba za ku iya sanin wanne ne ya sa tsiron ya girma ba.",
            "Gwaje-gwaje masu kyau suna maimaita kowane gwaji sau da yawa, kuma sau da yawa suna da control group (ƙungiyar kwatantawa), wato ƙungiyar da ba a canja mata komai ba, don kwatantawa da ita. Ƙarin maimaitawa yana sa sakamakon ya fi zama abin dogaro."
          ],
          steps: ["Ku nemo tambayar da ake gwadawa.", "Ku nemo abu ɗaya da aka canja da gangan: independent variable.", "Ku nemo abin da aka auna: dependent variable.", "Ku lissafa abubuwan da aka bari iri ɗaya: controlled variables.", "Ku tabbata abu ɗaya ne kawai ya canja, kuma an maimaita gwaje-gwajen."],
          words: [["Hasashe (hypothesis)", "tsammani da ake iya gwadawa, sau da yawa \"Idan ..., to ...\"."], ["Independent variable", "abu ɗaya da kuke canjawa da gangan."], ["Dependent variable", "abin da kuke aunawa don ganin tasirin."], ["Controlled variable", "abin da kuke bari iri ɗaya don gwajin ya zama na adalci."], ["Control group (ƙungiyar kwatantawa)", "ƙungiyar da ba a canja mata komai ba, ana amfani da ita don kwatantawa."]],
          slides: [
            { title: "Hasashe (hypothesis)", bullets: ["Tsammani da ake iya gwadawa", "\"Idan ƙarin haske, to tsirrai masu tsayi\""] },
            { title: "Nau'ikan variables guda uku", bullets: ["Independent: abin da kuke canjawa", "Dependent: abin da kuke aunawa", "Controlled: abin da kuke bari iri ɗaya"] },
            { title: "Gwaji na adalci", bullets: ["Ku canja abu ɗaya kawai", "Ku maimaita kowane gwaji", "Ku kwatanta da ƙungiyar kwatantawa (control group)"] }
          ],
          tryIt: "Atisaye: Wani ma'aikaci yana gwada ko sabon safar hannu yana sa hannaye su fi ɗumi. Ma'aikata goma suna saka sabon safar hannu, goma kuma suna saka tsohon, a waje na minti 30 a lokaci ɗaya. Ana auna zafin hannaye. Ku faɗi: 1) independent variable, 2) dependent variable, 3) controlled variables biyu, 4) hasashe. Amsoshi: 1) nau'in safar hannu; 2) zafin hannaye; 3) lokacin da aka yi a waje, yanayi iri ɗaya, lokaci ɗaya na rana; 4) \"Idan ma'aikata sun saka sabon safar hannu, to hannayensu za su fi ɗumi.\"",
          youCanNow: "karanta gwaji ku faɗi hasashensa da variables ɗinsa, da gane gwajin da ba na adalci ba.",
          quickCheck: [
            { objective: "O3", q: "Wani ɗalibi yana gwada ko gishiri yana canja saurin narkewar ƙanƙara. Mene ne dependent variable?", options: ["Yawan gishiri", "Girman ƙanƙarar", "Zafin ɗakin", "Lokacin da ƙanƙarar ke ɗauka kafin ta narke"], answer: 3, why: "Lokacin narkewa shi ne abin da ake aunawa; ya dogara da gishirin." },
            { objective: "O3", q: "Me yasa gwaji ya kamata ya canja abu ɗaya kawai a lokaci ɗaya?", options: ["Don ku san wane canji ne ya kawo sakamakon", "Don ya fi sauri", "Don ya yi amfani da takarda kaɗan", "Ba shi da muhimmanci"], answer: 0, why: "Idan abubuwa biyu sun canja, ba za ku iya sanin wanne ne ya kawo bambancin ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Karanta kimiyya da fahimtar gwaje-gwaje",
        questions: [
          { objective: "O1", q: "Wane kayan aiki ne ged.com ta ce ana ba ku a jarabawar Kimiyya?", options: ["Waya", "Na'urar lissafi a kan allo da takardar bayanin na'urar lissafi", "Littafin kimiyya", "Littafin dabarun lissafi da kuka rubuta"], answer: 1, why: "Ged.com ta lissafa na'urar lissafi a kan allo da takardar bayanin na'urar lissafi." },
          { objective: "O2", q: "Wani rubutu ya ce, \"Motsa jiki yana ƙara bugun zuciya, wato adadin bugun zuciya a minti ɗaya.\" Wane iƙirari ne ke da goyon baya?", options: ["Motsa jiki yana rage bugun zuciya", "Ana auna bugun zuciya da mil", "Motsa jiki yana sa zuciya ta ƙara bugawa a minti ɗaya", "Bugun zuciya ba ya canjawa"], answer: 2, why: "Rubutun ya ce motsa jiki yana ƙara bugun zuciya a minti ɗaya." },
          { objective: "O3", q: "\"Idan na shayar da tumatir kowace rana, to za su ƙara yawan 'ya'ya.\" Mene ne wannan?", options: ["Sakamako (conclusion)", "Hasashe (hypothesis)", "Teburin bayanai", "Ƙungiyar kwatantawa"], answer: 1, why: "Tsammani ne na \"Idan ..., to ...\" da ake iya gwadawa." },
          { objective: "O3", q: "A gwajin tumatir, mene ne independent variable?", options: ["Sau nawa ake shayar da tsirran", "Yawan 'ya'yan", "Nau'in ƙasa", "Girman tukwanen"], answer: 0, why: "Shayarwa ita ce abin da aka canja da gangan." },
          { objective: "O3", q: "Wanne ne controlled variable a gwajin tumatir?", options: ["Sau nawa ake shayar da su", "Yawan tumatir da aka samu", "Hasashen", "Nau'in tsiron tumatir ɗaya ga kowace ƙungiya"], answer: 3, why: "Amfani da nau'in tsiro ɗaya yana sa gwajin ya zama na adalci." }
        ]
      }
    },
    {
      name: "Babi na 2: Lambobi, tebura da zane-zanen jadawali a kimiyya",
      lessons: [
        {
          title: "Karanta tebura da zane-zanen jadawali",
          objectives: ["O4"],
          minutes: 5,
          goal: "Karanta ƙima daga tebur ko jadawali, ku bayyana yanayin canji, ku zaɓi sakamakon da bayanan ke goyon baya.",
          text: [
            "Tambayoyin kimiyya da yawa suna ba ku tebur ko zanen jadawali (graph). Da farko ku karanta take, alamomi (labels) da ma'auni (units). A jadawali, alamar da ke ƙasa (x-axis) yawanci ita ce independent variable, alamar da ke gefe (y-axis) kuma ita ce dependent variable.",
            "Misali da aka warware. Tebur: \"Awoyin haske a rana: 4, 8, 12. Matsakaicin tsayin tsiro bayan makonni 3: 5 cm, 9 cm, 14 cm.\" Karanta ƙima: a awa 8, tsirrai sun yi tsayin 9 cm. Yanayin canji: yayin da haske ke ƙaruwa, tsayi yana ƙaruwa. Sakamakon da aka goyi baya: a wannan gwajin, ƙarin haske ya tafi tare da tsirrai masu tsayi.",
            "Kada ku wuce bayanan. Teburin bai nuna awa 20 na haske ba, don haka ba za ku iya faɗin abin da zai faru a lokacin ba. Bai kuma nuna ruwa ko ƙasa ba, don haka sakamako game da su ba shi da goyon baya.",
            "Nau'ikan jadawali: jadawalin sanduna (bar graph) yana kwatanta ƙungiyoyi, jadawalin layi (line graph) yana nuna canji a tsawon lokaci ko yanayin canji, jadawalin da'ira (pie chart) kuma yana nuna sassan abu ɗaya cikakke."
          ],
          steps: ["Ku karanta take, alamomi da ma'auni.", "Ku nemo ƙimar da tambayar ke magana a kai.", "Ku bayyana yanayin canji: yana hawa, yana sauka, ko babu tsari a sarari.", "Ku zaɓi sakamakon da ke cikin iyakar bayanan.", "Ku goge amsoshi game da abubuwan da bayanan ba su nuna ba."],
          words: [["Yanayin canji (trend)", "yadda bayanai ke tafiya gaba ɗaya: suna hawa, suna sauka ko suna nan daidai."], ["X-axis", "layin da ke ratsa ƙasan jadawali."], ["Y-axis", "layin da ke hawa gefen jadawali."], ["Ma'auni (units)", "abin da ake auna lamba da shi, kamar cm, digiri ko minti."]],
          slides: [
            { title: "Ku fara karanta alamomi", bullets: ["Take, alamomi da ma'auni", "Ƙasa (x-axis): yawanci abin da aka canja", "Gefe (y-axis): yawanci abin da aka auna"] },
            { title: "Ku nemo yanayin canji", bullets: ["Yana hawa, yana sauka, ko babu tsari a sarari", "Ku faɗe shi a jimla ɗaya"] },
            { title: "Ku tsaya cikin bayanan", bullets: ["Babu tsammani fiye da lambobin da aka nuna", "Babu sakamako game da abubuwan da ba a auna ba"] },
            { title: "Nau'ikan jadawali", bullets: ["Sanduna: yana kwatanta ƙungiyoyi", "Layi: canji a tsawon lokaci", "Da'ira: sassan abu cikakke"] }
          ],
          tryIt: "Teburin atisaye: \"Zafin ruwa (digiri C): 10, 20, 30, 40. Lokacin narkewar ƙullin sukari (daƙiƙa): 120, 90, 60, 40.\" 1) Tsawon lokaci nawa a digiri 30? 2) Mene ne yanayin canji? 3) Wane sakamako ne ke da goyon baya: (a) ruwa mai ɗumi ya narkar da sukari da sauri a wannan gwajin, ko (b) gishiri yana narkewa da sauri fiye da sukari? Amsoshi: 1) Daƙiƙa 60. 2) Yayin da zafi ke ƙaruwa, lokacin narkewa yana raguwa. 3) (a); ba a gwada gishiri ba.",
          youCanNow: "karanta tebur ko jadawali, bayyana yanayin canjinsa, da zaɓar sakamakon da bayanan ke goyon baya.",
          quickCheck: [
            { objective: "O4", q: "Wani jadawali yana nuna matsakaicin zafin wani gari yana hawa kowace shekara goma daga 1980 zuwa 2020. Mene ne yanayin canji?", options: ["Yana sauka", "Babu canji", "Yana hawa a tsawon lokaci", "Ba za a iya karanta shi ba"], answer: 2, why: "Ƙimomin suna hawa a cikin shekarun." },
            { objective: "O4", q: "Wani tebur yana nuna tsayin tsiro a awa 4, 8 da 12 na haske. Wane sakamako ne ya wuce bayanan?", options: ["Tsirrai masu awa 8 sun fi masu awa 4 tsayi", "Tsirran da aka ba awa 24 na haske za su fi kowa tsayi", "Tsayi ya ƙaru yayin da haske ya ƙaru", "Tsirrai masu awa 12 sun fi girma a wannan gwajin"], answer: 1, why: "Ba a gwada awa 24 ba, don haka bayanan ba za su iya faɗa muku haka ba." }
          ]
        },
        {
          title: "Lissafin kimiyya: matsakaici, tazara da dabarun lissafi",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lissafa mean, median, mode da range na bayanai, ku yi amfani da dabarar lissafi da aka bayar.",
          text: [
            "Bayanai (don atisaye kawai): bugun zuciya bayan tafiya, a bugawa a minti ɗaya: 80, 84, 84, 90, 92. Mean (matsakaici): ku haɗa su ku raba da adadinsu: 430 / 5 = 86. Median (tsakiya): lambar tsakiya idan an jera su a tsari: 84. Mode (mafi yawa): lambar da ta fi fitowa: 84. Range (tazara): mafi girma a cire mafi ƙanƙanta: 92 - 80 = 12.",
            "Idan adadin ƙimomin lamba ce ta biyu-biyu (even), median shi ne matsakaicin lambobi biyu na tsakiya. Ga 3, 5, 7, 9: (5 + 7) / 2 = 6.",
            "Ana ba da dabarun lissafi a jarabawa. Ku saka lambobin ku riƙe ma'aunin. Gudu = nisa / lokaci: babbar mota ta yi tafiyar mil 120 a awa 2, don haka gudu = 120 / 2 = mil 60 a awa ɗaya. Density (cunkoson nauyi) = nauyi / girman wuri: ƙulli mai nauyin gram 40 da girman wuri cubic centimeter 20 yana da density 40 / 20 = gram 2 a kowane cubic centimeter.",
            "Ku duba ko amsarku tana da ma'ana. Mean dole ya kasance tsakanin mafi ƙanƙanta da mafi girma. Ku rubuta ma'auni tare da kowace amsa."
          ],
          steps: ["Ku jera bayanan daga mafi ƙanƙanta zuwa mafi girma.", "Mean: ku haɗa dukkan ƙimomin ku raba da adadinsu.", "Median: ku nemo tsakiya (ko matsakaicin ƙimomi biyu na tsakiya).", "Mode: ƙimar da ta fi yawa. Range: mafi girma a cire mafi ƙanƙanta.", "Don dabarar lissafi: ku rubuta ta, ku saka lambobi, ku warware, ku ƙara ma'auni."],
          words: [["Mean (matsakaici)", "jimilla da aka raba da adadin ƙimomin."], ["Median (tsakiya)", "ƙimar tsakiya idan an jera lambobi a tsari."], ["Mode (mafi yawa)", "ƙimar da ta fi fitowa."], ["Range (tazara)", "ƙima mafi girma a cire mafi ƙanƙanta."], ["Density", "yawan nauyin da aka cunkusa a wani wuri: nauyi a raba da girman wuri."]],
          slides: [
            { title: "Lambobi huɗu da ke bayyana bayanai", bullets: ["Mean: jimilla a raba da adadi", "Median: ƙimar tsakiya a tsari", "Mode: ƙimar da ta fi yawa", "Range: mafi girma a cire mafi ƙanƙanta"] },
            { title: "Misali da aka warware", bullets: ["Bayanai: 80, 84, 84, 90, 92", "Mean 86, median 84, mode 84, range 12"] },
            { title: "Amfani da dabarar lissafi da aka bayar", bullets: ["Gudu = nisa / lokaci", "Density = nauyi / girman wuri", "Ku saka lambobi, ku warware, ku rubuta ma'auni"] }
          ],
          tryIt: "Don atisaye kawai. 1) Minti da ƙanƙara ta ɗauka kafin ta narke a gwaje-gwaje biyar: 6, 7, 7, 8, 12. Ku nemo mean, median, mode da range. 2) Mai keke ya yi tafiyar mil 30 a awa 3. Gudu = nisa / lokaci. Amsoshi: 1) Mean 40 / 5 = minti 8; median 7; mode 7; range 12 - 6 = minti 6. 2) 30 / 3 = mil 10 a awa ɗaya.",
          youCanNow: "nemo mean, median, mode da range na bayanai, da amfani da dabarar lissafin kimiyya da ma'auni daidai.",
          quickCheck: [
            { objective: "O5", q: "Bayanai: 2, 4, 4, 6, 9. Mene ne mean?", options: ["4", "5", "6", "7"], answer: 1, why: "2 + 4 + 4 + 6 + 9 = 25, kuma 25 / 5 = 5." },
            { objective: "O5", q: "Wani dutse yana da nauyin gram 60 da girman wuri cubic centimeter 20. Density = nauyi / girman wuri. Mene ne density?", options: ["Gram 40 a kowane cubic centimeter", "Gram 1,200 a kowane cubic centimeter", "Gram 80 a kowane cubic centimeter", "Gram 3 a kowane cubic centimeter"], answer: 3, why: "60 / 20 = gram 3 a kowane cubic centimeter." }
          ]
        },
        {
          title: "Haɗa komai tare: gwajinku na adalci",
          objectives: ["O3", "O4", "O5"],
          minutes: 6,
          goal: "Shirya gwaji na adalci, ku rubuta bayanai a tebur, ku nemo mean, ku rubuta sakamakon da bayanan ke goyon baya.",
          text: [
            "Yanzu ku yi amfani da kowace ƙwarewa a lokaci ɗaya. Tambayoyin jarabawa da yawa suna bayyana gwaji cikakke tare da tebur, sannan su tambaye ku game da variables, lissafi da sakamako. Yin ƙaramin gwaji da kanku yana sa waɗannan tambayoyi su fi sauƙi sosai.",
            "Misalin kicin mai aminci. Tambaya: shin juyawa yana canja saurin narkewar sukari? Hasashe: idan aka juya ruwan, to sukarin zai narke da sauri. Independent variable: an juya ko ba a juya ba. Dependent variable: lokacin narkewa (daƙiƙa). Abubuwan da aka bari iri ɗaya: kofi ɗaya, yawan ruwan famfo ɗaya, zafin ruwa ɗaya, ƙullin sukari ɗaya kowane lokaci. Ku yi gwaji uku na kowanne.",
            "Sakamakon misali (don atisaye kawai). An juya: daƙiƙa 40, 45, 50; mean 45. Ba a juya ba: daƙiƙa 170, 180, 190; mean 180. Sakamako: a wannan gwajin, juyawa ya sa sukari ya narke da sauri, kusan sau 4 da sauri a matsakaici. Jadawalin sanduna mai sanduna biyu (an juya, ba a juya ba) yana nuna haka a sarari.",
            "Aminci: ku yi amfani da ruwan famfo mai sanyi-sanyi ko mai ɗumi daga famfo kawai, sukari ko gishiri, da kofuna masu tsabta. Babu murhu, babu harshen wuta kuma babu sinadaran wanke-wanke. Kada ku sha ko ku ɗanɗana komai a lokacin gwajin."
          ],
          steps: ["Ku rubuta tambayarku da hasashen \"Idan ..., to ...\".", "Ku faɗi independent, dependent da controlled variables.", "Ku yi aƙalla gwaji uku na kowace ƙungiya ku rubuta sakamakon a tebur.", "Ku nemo mean na kowace ƙungiya.", "Ku zana jadawalin sanduna ku rubuta sakamako mai jimloli biyu wanda ke cikin iyakar bayananku."],
          words: [["Gwaji ɗaya (trial)", "yin gwajin sau ɗaya."], ["Teburin bayanai", "layuka da ginshiƙai da ke riƙe da sakamakonku."], ["Sakamako (conclusion)", "abin da sakamakon ke nunawa, a jimla ɗaya ko biyu."]],
          slides: [
            { title: "Gwajinku na adalci", bullets: ["Tambaya da hasashe", "Independent, dependent, controlled variables", "Gwaji uku ga kowace ƙungiya"] },
            { title: "Ku rubuta ku lissafa", bullets: ["Ku rubuta sakamako a tebur", "Ku nemo mean na kowace ƙungiya", "Ku zana jadawalin sanduna"] },
            { title: "Ku rubuta sakamako", bullets: ["Ku faɗi abin da bayanan ke nunawa", "Ku tsaya cikin bayananku", "Ku faɗi hanya ɗaya ta inganta gwajin"] },
            { title: "Ku zauna lafiya", bullets: ["Ruwan famfo, sukari ko gishiri kawai", "Babu murhu, harshen wuta ko sinadarai", "Kada ku ɗanɗana ko ku sha samfuran"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi ƙaramin gwajinku na kicin mai aminci (juyawa da sukari, ko wani gwaji mai canji ɗaya da ruwa, sukari ko gishiri). Ku rubuta tambaya, hasashe da variables, ku rubuta gwaji uku na kowace ƙungiya a tebur, ku nemo kowane mean, ku zana jadawalin sanduna ku rubuta sakamako mai jimloli biyu. Ku ƙara shirin karatunku na GED mai kwanaki a ƙasa, ku ba shi maki da rubric.",
          youCanNow: "shirya da yin gwaji na adalci, rubuta bayanan ku nemo matsakaicinsu, da rubuta sakamakon da bayanan ke goyon baya.",
          quickCheck: [
            { objective: "O3", q: "A gwajin juyawa, me dole ya kasance iri ɗaya don gwajin ya zama na adalci?", options: ["Yawa da zafin ruwan", "Ko an juya ruwan ko ba a juya ba", "Lokacin narkewa", "Sakamakon"], answer: 0, why: "Yawan ruwa da zafinsa controlled variables ne; juyawa kawai ne ke canjawa." },
            { objective: "O4", q: "Mean na an juya: daƙiƙa 45. Mean na ba a juya ba: daƙiƙa 180. Wane sakamako ne ke da goyon baya?", options: ["Juyawa yana sa sukari ya fi zaƙi", "A wannan gwajin, juyawa ya sa sukari ya narke da sauri", "Gishiri yana narkewa da sauri fiye da sukari", "Juyawa ba shi da wani tasiri"], answer: 1, why: "Kofunan da aka juya sun narke da sauri sosai, kuma sakamakon yana cikin iyakar bayanan." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Lambobi, tebura da zane-zanen jadawali a kimiyya",
        questions: [
          { objective: "O4", q: "A yawancin jadawalin kimiyya, me ake nunawa a layin ƙasa (x-axis)?", options: ["Take", "Sakamako", "Yawanci independent variable, wato abin da aka canja", "Ma'aunin kuɗi"], answer: 2, why: "X-axis yawanci yana nuna abin da masanin kimiyya ya canja." },
          { objective: "O4", q: "Wane jadawali ne ya fi dacewa don kwatanta matsakaicin tsayin tsirrai a ƙungiyoyi uku?", options: ["Jadawalin sanduna", "Taswira", "Jadawalin da'ira na lambun gaba ɗaya", "Hoto"], answer: 0, why: "Jadawalin sanduna yana kwatanta ƙungiyoyi gefe da gefe." },
          { objective: "O5", q: "Bayanai: 10, 12, 15, 15, 18. Mene ne range?", options: ["15", "14", "13", "8"], answer: 3, why: "18 - 10 = 8." },
          { objective: "O5", q: "Bayanai: 3, 8, 6, 1, 7. Mene ne median?", options: ["3", "6", "7", "5"], answer: 1, why: "A tsari: 1, 3, 6, 7, 8. Ƙimar tsakiya ita ce 6." },
          { objective: "O5", q: "Wata bas ta yi tafiyar mil 150 a awa 3. Gudu = nisa / lokaci. Mene ne gudun?", options: ["Mil 450 a awa ɗaya", "Mil 153 a awa ɗaya", "Mil 50 a awa ɗaya", "Mil 147 a awa ɗaya"], answer: 2, why: "150 / 3 = mil 50 a awa ɗaya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirin Jarabawar GED: Kimiyya",
    questions: [
      { objective: "O1", q: "Me wannan kwas yake yi muku?", options: ["Yana shirya ku don jarabawar Kimiyya ta GED", "Yana ba ku takardar shaidar GED", "Yana sa ku zama masanin kimiyya mai lasisi", "Yana maye gurbin jarabawar GED"], answer: 0, why: "Kwas ɗin yana shirya ku; GED Testing Service ne ke gudanar da jarabawar, jiharku kuma ke ba da takardar shaida." },
      { objective: "O1", q: "Wace ce wata jarabawar daidai da kammala sakandare da wasu jihohi ke amfani da ita?", options: ["ACT", "CDL", "HiSET", "TOEFL"], answer: 2, why: "HiSET wata jarabawa ce ta daidai da kammala sakandare." },
      { objective: "O1", q: "Wane fannin ƙwarewa ne ged.com ta lissafa a jarabawar Kimiyya?", options: ["Haddace sunayen ƙasusuwa", "Amfani da lambobi da zane-zane a kimiyya", "Zana taswira", "Rubuta waƙoƙi"], answer: 1, why: "Fannoni uku su ne karanta don fahimtar ma'ana, gwaje-gwaje, da lambobi da zane-zane." },
      { objective: "O1", q: "A ina ya kamata ku duba lokaci, kuɗi da dokokin jarabawar GED na yanzu?", options: ["Tsohuwar takardar talla", "Wurin aboki", "Sharhi a ƙarƙashin bidiyo", "Ged.com da ofishin ilimin manya na jiharku"], answer: 3, why: "Dokoki da kuɗi suna canjawa; majiyoyin hukuma ne ke da na yanzu." },
      { objective: "O2", q: "Wani rubutu yana bayanin sabuwar kalma a tsakanin waƙafi nan da nan bayanta. Me ya kamata ku yi?", options: ["Ku tsallake rubutun", "Ku yi amfani da wannan ma'anar don fahimtar rubutun", "Ku yi tsammanin wata ma'ana daban", "Ku nemo ta a wayarku a lokacin jarabawa"], answer: 1, why: "Rubutu sau da yawa yana bayanin kalmomi masu wuya a cikinsa." },
      { objective: "O2", q: "Wani rubutu ya ce ƙudan zuma suna ɗaukar pollen (garin fure) tsakanin furanni, wanda ke taimaka wa amfanin gona da yawa su yi 'ya'ya. Wane iƙirari ne ke da goyon baya?", options: ["Ƙarancin ƙudan zuma zai iya nufin ƙarancin 'ya'ya daga wasu amfanin gona", "Ƙudan zuma ne ke yin dukkan abinci", "Ƙudan zuma suna cin 'ya'yan itace", "Furanni ba sa buƙatar pollen"], answer: 0, why: "Idan ƙudan zuma suna taimaka wa amfanin gona yin 'ya'ya, ƙarancinsu zai iya rage 'ya'yan." },
      { objective: "O2", q: "Wane zaɓin amsa ne ya kamata ku goge?", options: ["Wanda rubutun ya tabbatar", "Wanda ke da lamba daga rubutun", "Wanda ke ƙara abubuwan da rubutun bai taɓa bayarwa ba", "Wanda ke maimaita babban ra'ayi"], answer: 2, why: "Amsoshin da ke ƙara abubuwan da babu su a rubutun ba su da goyon baya." },
      { objective: "O3", q: "Mene ne hasashe (hypothesis)?", options: ["Amsar ƙarshe", "Tsammani da ake iya gwadawa, sau da yawa \"Idan ..., to ...\"", "Jadawali", "Jerin kayan aiki"], answer: 1, why: "Hasashe tsammani ne da ake iya gwadawa game da abin da zai faru." },
      { objective: "O3", q: "Wani gwaji yana duba ko waƙa (kiɗa) tana canja saurin da ma'aikata ke cike kwalaye. Mene ne independent variable?", options: ["Yawan kwalayen da aka cike", "Girman kwalayen", "Lokacin rana", "Akwai waƙa ko babu waƙa"], answer: 3, why: "Waƙa ita ce abu ɗaya da aka canja da gangan." },
      { objective: "O3", q: "A gwajin waƙa, mene ne dependent variable?", options: ["Yawan kwalayen da aka cike", "Akwai waƙa ko babu waƙa", "Sunayen ma'aikatan", "Nau'in selotep"], answer: 0, why: "Kwalayen da aka cike su ne abin da aka auna." },
      { objective: "O3", q: "Me yasa ake maimaita kowane gwaji sau da yawa?", options: ["Don a yi amfani da ƙarin kayayyaki", "Don gwajin ya ƙara tsawo", "Don sakamakon ya fi zama abin dogaro", "Don a canja ƙarin variables"], answer: 2, why: "Ƙarin maimaitawa yana rage damar sakamako ɗaya baƙo ya ruɗe ku." },
      { objective: "O3", q: "Mene ne control group (ƙungiyar kwatantawa)?", options: ["Ƙungiyar da ke da mutane mafi yawa", "Ƙungiyar da ba a canja mata komai ba, don kwatantawa", "Masana kimiyyar da ke gudanar da gwajin", "Ƙungiyar da ke canja abubuwa biyu"], answer: 1, why: "Ƙungiyar kwatantawa tana nuna abin da ke faruwa ba tare da canjin ba." },
      { objective: "O4", q: "Wani jadawalin layi yana nuna zafin jikin mara lafiya yana sauka kowace awa bayan magani (don atisaye kawai). Mene ne yanayin canji?", options: ["Yana sauka", "Yana hawa", "Yana nan daidai", "Babu bayanai"], answer: 0, why: "Ƙimomin suna sauka kowace awa." },
      { objective: "O4", q: "Me ya kamata ku fara karantawa a jadawali?", options: ["Lamba mafi ƙanƙanta", "Zaɓuɓɓukan amsa kawai", "Launin sandunan", "Take, alamomi da ma'auni"], answer: 3, why: "Alamomi da ma'auni suna faɗa muku ma'anar lambobin." },
      { objective: "O4", q: "Wani tebur ya gwada ruwa mai digiri 10, 20 da 30. Wace magana ce ta wuce bayanan?", options: ["An gwada ruwa mai digiri 30", "Sakamakon digiri 20 yana cikin teburin", "A digiri 100 sukari yana narkewa nan take", "Gwajin ya yi amfani da yanayin zafi uku"], answer: 2, why: "Ba a gwada digiri 100 ba, don haka bayanan ba za su iya nuna haka ba." },
      { objective: "O4", q: "Wane jadawali ne ke nuna sassan abu ɗaya cikakke?", options: ["Jadawalin layi", "Jadawalin da'ira (pie chart)", "Jadawalin ɗigo (scatter plot)", "Layin lambobi"], answer: 1, why: "Jadawalin da'ira yana raba abu cikakke zuwa sassa." },
      { objective: "O5", q: "Bayanai: 5, 7, 7, 9, 12. Mene ne mode?", options: ["5", "8", "12", "7"], answer: 3, why: "7 ne ya fi fitowa." },
      { objective: "O5", q: "Bayanai: 6, 8, 10, 12. Mene ne median?", options: ["9", "8", "10", "36"], answer: 0, why: "Ƙimomi biyu na tsakiya su ne 8 da 10, kuma (8 + 10) / 2 = 9." },
      { objective: "O5", q: "Wata mota ta yi tafiyar mil 200 a awa 4. Gudu = nisa / lokaci. Mene ne gudun?", options: ["Mil 800 a awa ɗaya", "Mil 50 a awa ɗaya", "Mil 204 a awa ɗaya", "Mil 196 a awa ɗaya"], answer: 1, why: "200 / 4 = mil 50 a awa ɗaya." },
      { objective: "O5", q: "Bayanai: 20, 30, 40. Mene ne mean?", options: ["90", "20", "30", "40"], answer: 2, why: "20 + 30 + 40 = 90, kuma 90 / 3 = 30." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [2, 3, 5, 8, 9, 13, 14, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake yin gwajin.",
    criteria: [
      { name: "Tambaya da hasashe", objective: "O3", notYet: "Babu tambaya, ko ba za a iya gwada hasashen ba.", meets: "Tambaya a sarari da hasashen \"Idan ..., to ...\".", exceeds: "Hasashen yana kuma faɗin dalilin da yasa marubucin ke tsammanin wannan sakamakon." },
      { name: "Variables da gwaji na adalci", objective: "O3", notYet: "Babu variables, ko fiye da abu ɗaya ya canja.", meets: "An faɗi independent, dependent da aƙalla controlled variables biyu; abu ɗaya kawai ya canja.", exceeds: "Yana kuma da ƙungiyar kwatantawa (control group) kuma ya bayyana muhimmancin kowane controlled variable." },
      { name: "Bayanai da lissafi", objective: "O5", notYet: "Gwaje-gwaje ƙasa da uku a kowace ƙungiya, ko mean ba daidai ba ne.", meets: "Gwaje-gwaje uku a kowace ƙungiya a tebur, tare da mean daidai da ma'auni.", exceeds: "Yana kuma ba da range na kowace ƙungiya kuma ya yi magana kan yawan bambancin gwaje-gwajen." },
      { name: "Jadawali da sakamako", objective: "O4", notYet: "Babu jadawali, ko sakamakon yana iƙirarin fiye da abin da bayanan ke nunawa.", meets: "Jadawalin sanduna mai alamomi da sakamako mai jimloli biyu wanda ke cikin iyakar bayanan.", exceeds: "Yana kuma faɗin hanya ɗaya ta inganta gwajin a gaba." },
      { name: "Karanta sakamakon", objective: "O2", notYet: "Sakamakon bai dace da lambobin ba.", meets: "Sakamakon ya dace da lambobin da ke cikin teburin.", exceeds: "Yana nuna ainihin lambobin da ke goyon bayan sakamakon." },
      { name: "Shirin karatu", objective: "O1", notYet: "Babu shirin karatu, ko babu kwanaki.", meets: "Shirin karatu mai aƙalla rana ɗaya kowane mako har zuwa makon jarabawa.", exceeds: "Yana kuma da ranar GED Ready ko ranar jarabawa da aka yi rajista." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko fiye a kowane layin rubric",
      "Masu koyo da suka yi GED Ready ko gwajin misali kyauta na ged.com cikin kwanaki 30",
      "Masu koyo da suka yi rajista ko suka ci jarabawar Kimiyya ta GED cikin kwanaki 90 (bisa faɗinsu)",
      "Shirye-shiryen abokan aiki sun ce ƙarin masu koyo suna ci gaba zuwa horon aiki a fannin lafiya, ɗakunan gwaji ko sana'o'in hannu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, tablet ko kwamfuta mai intanet, ko darussan da aka buga a takarda",
      "Takarda, alƙalami da na'urar lissafi mai sauƙi (na'urar lissafin waya tana aiki don atisaye)",
      "Don aikin ƙarshe: kofuna biyu masu tsabta, ruwan famfo, ƙullin sukari ko gishiri, cokali, da agogon waya (timer)",
      "Gwaje-gwajen misali kyauta na ged.com; GED Ready idan mai koyo ya zaɓi ya saya",
      "Kusan minti 90 don darussa da gwaje-gwaje, da kusan minti 45 don aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku fara da gwajin farko da gwajin misali na Kimiyya kyauta na ged.com don gano fannin ƙwarewar da kowane mai koyo ya fi buƙata.",
      "Ku fara yin gwajin juyawa a matsayin nuni ga ƙungiya gaba ɗaya, sannan ku sa masu koyo su tsara nasu gwajin mai canji ɗaya.",
      "Ku duba kowane shirin gwaji don aminci kafin masu koyo su yi shi: babu abin da ke ba da zafi, harshen wuta, sinadarai ko ɗanɗanawa.",
      "Ku yi atisayen karanta jadawali da babbar murya: take, alamomi, ma'auni, yanayin canji, sannan sakamako.",
      "Ku duba wace jarabawa jiharku ke amfani da ita (GED ko HiSET), ku raba wuraren jarabawa na kusa da duk wani taimakon kuɗi."
    ]
  }
};
