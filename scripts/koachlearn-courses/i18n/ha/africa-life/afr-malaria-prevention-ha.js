"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-malaria-prevention.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const WHO_MALARIA = { name: "Hukumar Lafiya ta Duniya (WHO): Takardar bayani kan zazzaɓin cizon sauro (yaɗuwa, alamomi, alamun haɗari, gidan sauro, feshi, maganin rigakafi, alluran rigakafi, gwaji)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" };
const CDC_MALARIA = { name: "CDC (Cibiyar Kula da Cututtuka ta Amurka): Game da zazzaɓin cizon sauro (cizo da yamma da kuma dare, alamomi, neman magani da sauri)", url: "https://www.cdc.gov/malaria/about/index.html" };
const WHO_WATER = { name: "Hukumar Lafiya ta Duniya (WHO): Takardar bayani kan ruwan sha (randuna da bokitan ruwa a gida wuraren ƙyanƙyasar sauro ne; a rufe su)", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };

module.exports = {
  id: "afr-malaria-prevention-ha",
  lang: "ha",
  translationOf: "afr-malaria-prevention",
  category: "Africa: Life and Work",
  name: "Kare Iyalinku daga Zazzaɓin Cizon Sauro (Malaria)",
  skills: "Sanin yadda zazzaɓin cizon sauro ke yaɗuwa da waɗanda suka fi fuskantar haɗari, Kwana a cikin gidan sauro mai magani kowane dare, Rage sauro a kewayen gida, Amfani da hidimomin asibiti ga mata masu ciki da yara, Yin gwajin kowane zazzaɓi a ranar da ya fara, Gane alamun haɗarin zazzaɓin cizon sauro mai tsanani",
  outcome: "kare iyalinku daga zazzaɓin cizon sauro: kwana a cikin gidan sauro mai magani kowane dare, rage sauro a kewayen gidanku, amfani da hidimomin asibiti ga mata masu ciki da ƙananan yara, yin gwajin kowane zazzaɓi a ranar da ya fara, da gane alamun haɗari da ke nufin ku je asibiti yanzu.",
  about: [
    "Zazzaɓin cizon sauro (malaria) yana yaɗuwa ne ta cizon sauro, kuma Afirka ce ke da mafi yawan masu kamuwa da masu mutuwa a duniya. WHO (Hukumar Lafiya ta Duniya) ta ce a shekarar 2024, yankin Afirka na WHO yana da kusan kashi 95% na masu kamuwa da masu mutuwa a duniya, kuma yara 'yan ƙasa da shekara 5 sun kai kusan uku cikin huɗu na waɗanda suka mutu a can. Ana iya hana zazzaɓin cizon sauro, kuma ana iya warkar da shi idan an gano shi da wuri. Wannan kwas na iyaye mata, iyaye maza, kakanni, masu kula da yara da matasa ne a Najeriya, DR Congo, Kenya, Ghana, Burkina Faso, Mali, Kamaru da ko'ina a Afirka.",
    "Za ku koyi yadda zazzaɓin cizon sauro ke yaɗuwa da waɗanda suka fi fuskantar haɗari, yadda ake rataya da kula da gidan sauro mai magani, yadda ake rage wuraren da sauro ke ƙyanƙyasa da cizo a kewayen gidanku, waɗanne hidimomin asibiti ne ke kare mata masu ciki da ƙananan yara, yadda ake yin gwajin kowane zazzaɓi a ranar da ya fara, da yadda ake gane alamun haɗarin zazzaɓin cizon sauro mai tsanani.",
    "Wannan kwas yana koyar da yadda ake hana cutar da lokacin neman taimako. Ba ya faɗa muku wane magani za ku sha ko nawa: ma'aikacin lafiya ne kaɗai zai iya yin gwajin zazzaɓin cizon sauro ya yanke maganin da za a bayar. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\", kuma tare suna gina tsarin iyalinku na yaƙi da zazzaɓin cizon sauro."
  ],
  finalTask: "Ku yi tsarin iyalinku na yaƙi da zazzaɓin cizon sauro a shafi ɗaya: wane ne a gidanku ya fi fuskantar haɗari; gidan sauro masu magani nawa kuke da su da nawa kuke buƙata, inda kowane mutum ke kwana a cikin ɗaya, da yadda za ku kula da su; abubuwa uku da za ku yi don rage sauro a kewayen gidanku; ziyarar asibiti da aka tsara ga duk mace mai ciki ko ƙaramin yaro; abin da za ku yi a ranar da wani ya kamu da zazzaɓi; da katin alamun haɗari mai suna da lambar waya na asibiti mafi kusa ko na ma'aikacin lafiya na unguwa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Iyaye mata, iyaye maza, kakanni, masu kula da yara da matasa a ko'ina a Afirka, musamman a wuraren da zazzaɓin cizon sauro ya yi yawa, a ƙauyuka, garuruwa da unguwannin da ba a tsara su ba. Da yawa sun taɓa kamuwa da zazzaɓin cizon sauro, kuma suna kula da ƙananan yara ko wata mace mai ciki a iyali.",
    startingPoint: "Sun san sauro ne ke kawo zazzaɓin cizon sauro, kuma da yawa suna da gidan sauro. Amma sau da yawa ba a amfani da gidan sauro kowane dare ko ga kowa, gidan sauro yana da ramuka, ruwa yana kwance a kewayen gida, ana warkar da zazzaɓi a gida da ragowar magani ko maganin kasuwa ba tare da gwaji ba, kuma ba a gane alamun haɗari sai an makara.",
    gap: "Zazzaɓin cizon sauro har yanzu yana kashe ƙananan yara da yawa, kuma yana cutar da mata masu ciki da jariransu. Iyalai suna buƙatar al'adu masu sauƙi na kowace rana (gidan sauro kowane dare, rage sauro) da saurin ɗaukar mataki (gwaji ga kowane zazzaɓi, zuwa asibiti nan take idan an ga alamun haɗari) don hana mutuwa. Waɗannan al'adu kyauta ne ko masu araha, kuma sun fi aiki idan an haɗa su.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; da yawa daga cikin masu koyo Turanci ba harshensu na farko ba ne",
      "Na'urori: waya mai sauƙi da data mai tsada; darussan suna aiki ba tare da intanet ba bayan an sauke su",
      "Kuɗi: ƙaramin kasafi; gidan sauro, gwaje-gwaje da hidimomi da yawa kyauta ne ko masu araha ta asibitoci da shirye-shiryen ƙasa, amma hakan ya bambanta",
      "Lafiya: hanyoyin hana cuta da alamun gargaɗi kaɗai; babu sunayen magunguna don sha da kai, babu adadin magani, babu tsarin jinya, babu gano cuta; masu koyo suna bin asibitinsu, ma'aikacin lafiya na unguwa da ma'aikatar lafiya",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aikin gida da aiki"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka yi la'akari da gidanku", action: "bayyana yadda zazzaɓin cizon sauro ke yaɗuwa da jera waɗanda suka fi fuskantar haɗari a gidanku", standard: "kuna ambaton cizon sauro da dare, da ambaton ƙananan yara da mata masu ciki" },
    { id: "O2", condition: "Idan kuna da gidan sauro mai magani da wuraren da iyalinku ke kwana", action: "rataya gidan sauro mai magani, shigar da gefensa ƙarƙashin gado da gyara duk wani rami", standard: "ta yadda kowane mutum, farawa da ƙananan yara da mata masu ciki, zai kwana a cikin gidan sauro kowane dare" },
    { id: "O3", condition: "Idan aka yi la'akari da kewayen gidanku", action: "kawar da ko rufe wuraren da sauro ke ƙyanƙyasa da toshe hanyoyinsu na shiga gida", standard: "kuna yin aƙalla abubuwa uku cikin mako ɗaya" },
    { id: "O4", condition: "Idan akwai mace mai ciki ko ƙaramin yaro a iyalinku", action: "jera hidimomin zazzaɓin cizon sauro da asibitinku ke ba su da tsara ziyarar", standard: "kuna ambaton fara awon ciki da wuri, da tambaya game da alluran rigakafi da maganin rigakafi inda ake bayarwa" },
    { id: "O5", condition: "Idan wani a iyalinku yana da zazzaɓi a wurin da ake zazzaɓin cizon sauro", action: "kai mutumin gwajin zazzaɓin cizon sauro a ranar da ya fara da bin maganin da ma'aikacin lafiya ya bayar", standard: "ba tare da taɓa ba da ragowar magani ko maganin da ba a sani ba, kuma ba tare da daina sha da wuri ba" },
    { id: "O6", condition: "Idan wani a iyalinku ba shi da lafiya", action: "gane alamun haɗarin zazzaɓin cizon sauro mai tsanani da kai mutumin asibiti nan take", standard: "kuna ambaton aƙalla alamun haɗari huɗu da asibiti mafi kusa ko ma'aikacin lafiya na unguwa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Hana cizon sauro",
      lessons: [
        {
          title: "Yadda zazzaɓin cizon sauro ke yaɗuwa da waɗanda suka fi fuskantar haɗari",
          objectives: ["O1"],
          minutes: 5,
          goal: "Bayyana yadda zazzaɓin cizon sauro ke yaɗuwa da jera waɗanda suka fi fuskantar haɗari a gidanku.",
          text: [
            "Zazzaɓin cizon sauro wata ƙaramar ƙwayar cuta ce (parasite) ke kawo shi. Yana yaɗuwa ta cizon wasu mata sauro (Anopheles). Sauro yana cizon mutumin da ke da zazzaɓin cizon sauro, sannan ya ciji wani ya ba shi. Ba ya wucewa kai tsaye daga mutum zuwa mutum ta taɓawa, abinci ko iska.",
            "Waɗannan sauro suna cizo galibi da yamma da kuma dare, sau da yawa lokacin da mutane ke barci. Alamun zazzaɓin cizon sauro yawanci suna farawa kwana 10 zuwa 15 bayan cizon, da zazzaɓi, sanyi mai rawar jiki da ciwon kai.",
            "WHO ta ce waɗanda suka fi fuskantar haɗarin zazzaɓin cizon sauro mai tsanani su ne jarirai da yara 'yan ƙasa da shekara 5, mata masu ciki, masu cutar HIV, da matafiya da suka zo daga wuraren da babu zazzaɓin cizon sauro. A Afirka, yawancin waɗanda ke mutuwa da zazzaɓin cizon sauro ƙananan yara ne. WHO ta ruwaito cewa Najeriya da DR Congo kaɗai sun kai fiye da kashi 40% na mutuwar zazzaɓin cizon sauro a yankin a shekarar 2024. A yawancin Arewacin Afirka, zazzaɓin cizon sauro na cikin gida ba kasafai ba ne, amma mutanen Maroko, Masar ko Tunisiya da ke tafiya wuraren da ake zazzaɓin cizon sauro suna cikin babban haɗari, kuma ya kamata su ga ma'aikacin lafiya kafin su tafi."
          ],
          words: [["Ƙwayar cuta (parasite)", "ƙaramar halitta mai rai da ke zama a jikin wani tana cutar da shi."], ["Anopheles", "irin sauron da ke yaɗa zazzaɓin cizon sauro."], ["Fuskantar haɗari", "ya fi yiwuwa ya kamu da cuta ko ya yi rashin lafiya mai tsanani."]],
          slides: [
            { title: "Yadda zazzaɓin cizon sauro ke yaɗuwa", bullets: ["Ƙwayar cuta da sauron Anopheles ke ɗauka", "Cizon mara lafiya, sannan mutum na gaba", "Ba ta taɓawa, abinci ko iska ba"] },
            { title: "Lokacin da suke cizo", bullets: ["Galibi da yamma da kuma dare", "Alamomi suna farawa kwana 10 zuwa 15 bayan cizon", "Zazzaɓi, sanyi mai rawar jiki, ciwon kai"] },
            { title: "Waɗanda suka fi fuskantar haɗari", bullets: ["Jarirai da yara 'yan ƙasa da shekara 5", "Mata masu ciki", "Masu HIV; matafiya daga wuraren da babu zazzaɓin cizon sauro"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Ku rubuta sunayen duk wanda ke kwana a gidanku. Ku zagaye sunayen waɗanda suka fi fuskantar haɗari: yara 'yan ƙasa da shekara 5, duk mace mai ciki, duk mai HIV, da baƙi daga wuraren da babu zazzaɓin cizon sauro.",
          youCanNow: "bayyana yadda zazzaɓin cizon sauro ke yaɗuwa da faɗin wane ne a gidanku ya fi fuskantar haɗari.",
          quickCheck: [
            { objective: "O1", q: "Ta yaya zazzaɓin cizon sauro ke yaɗuwa?", options: ["Ta gaisawa da hannu", "Ta cizon wasu irin sauro", "Ta cin mangwaro", "Ta ruwan sama mai sanyi"], answer: 1, why: "Zazzaɓin cizon sauro yana wucewa ta cizon sauron Anopheles mai cutar, ba ta taɓawa, abinci ko yanayi ba." },
            { objective: "O1", q: "Wane ne a iyali ya fi fuskantar haɗarin zazzaɓin cizon sauro mai tsanani?", options: ["Ƙananan yara 'yan ƙasa da shekara 5 da mata masu ciki", "Samari kaɗai", "Kakanni kaɗai", "Babu wanda ya fi wani haɗari"], answer: 0, why: "WHO ta ambaci ƙananan yara da mata masu ciki cikin waɗanda suka fi fuskantar haɗari." }
          ]
        },
        {
          title: "Gidan sauro mai magani kowane dare",
          objectives: ["O2"],
          minutes: 5,
          goal: "Rataya gidan sauro mai magani, shigar da gefensa ƙarƙashin gado da gyara duk wani rami.",
          text: [
            "Gidan sauro da aka sa wa maganin ƙwari (wanda ake kira ITN ko gidan sauro mai daɗewa) yana ɗaya daga cikin manyan hanyoyin da WHO ke ba da shawara don hana zazzaɓin cizon sauro. Gidan sauron yana hana sauro kai muku lokacin da kuke barci, kuma maganin ƙwarin yana kashe ko raunana waɗanda suka sauka a kansa. WHO ta ce sababbin irin gidan sauro sun fi kariya a wuraren da sauro ba sa mutuwa da tsohon maganin ƙwari.",
            "Gidan sauro yana aiki ne kawai idan ana amfani da shi kowane dare, duk shekara, ba lokacin damina kaɗai ba. Ku rataya shi a kan gado ko tabarmar barci har ya kai ƙasa, ku shigar da gefensa ƙarƙashin katifa ko tabarma kafin duhu, sannan ku shiga ba tare da barin wata kafa ba. Idan gidan sauro bai isa kowa ba, ƙananan yara da mata masu ciki ne za su fara kwana a ciki, sannan ku nemi gidan sauro ga sauran.",
            "Ku kula da shi: ku duba ramuka kowane mako, ku ɗinke ko ku ɗaure su nan take. Ku wanke shi a hankali, ba sau da yawa ba, ku shanya shi a inuwa, bisa umarnin da ke kan kwalinsa ko na ma'aikacin lafiya. Kada ku yi amfani da gidan sauro don kamun kifi, shinge ko lambu. Shirye-shiryen ƙasa da yawa suna ba da gidan sauro kyauta a asibitoci, wajen awon ciki, a makarantu ko lokacin kamfe: ku tambayi asibitinku ko ma'aikacin lafiya na unguwa."
          ],
          steps: ["Ku rataya gidan sauro a kan gado ko tabarma har ya kai ƙasa.", "Ku shigar da gefensa ƙarƙashin katifa ko tabarma kafin duhu.", "Ku shiga ba tare da barin wata kafa ba, kowane dare.", "Ku duba ramuka kowane mako ku rufe su nan take.", "Ku wanke shi a hankali, ba sau da yawa ba, ku shanya shi a inuwa.", "Ku tambayi asibitinku ko ma'aikacin lafiya na unguwa game da gidan sauro kyauta."],
          words: [["Maganin ƙwari (insecticide)", "sinadarin da ke kashe ƙwari."], ["ITN (gidan sauro mai magani)", "gidan sauron da aka sa wa maganin ƙwari don korar sauro da kashe su."], ["Kamfe", "lokacin da ma'aikatan lafiya ke raba gidan sauro ko hidimomi ga mutane da yawa."]],
          slides: [
            { title: "Dalilin da yasa gidan sauro mai magani ke aiki", bullets: ["Yana hana sauro lokacin da kuke barci", "Maganin ƙwari yana kashe ko raunana su", "Ɗaya daga cikin manyan hanyoyin WHO na hana zazzaɓin cizon sauro"] },
            { title: "Kowane dare, duk shekara", bullets: ["Gidan sauro ya kai ƙasa", "A shigar da gefensa kafin duhu, babu kafa", "Bai isa ba? Yara da mata masu ciki da farko"] },
            { title: "Ku kula da shi", bullets: ["Ku duba ramuka kowane mako; ku rufe su", "Ku wanke a hankali, ba sau da yawa ba; ku shanya a inuwa", "Kada a yi kamun kifi ko lambu da shi"] },
            { title: "Samun gidan sauro", bullets: ["Asibitoci, awon ciki, makarantu, kamfe", "Ku tambayi asibitinku ko ma'aikacin lafiya na unguwa"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "A daren yau, ku duba kowane gidan sauro a gidanku. Ku rataya kowanne har ya kai ƙasa, ku shigar da gefensa, ku rufe duk wani rami. Ku ƙirga ƙarin gidan sauro nawa iyalinku ke buƙata.",
          youCanNow: "rataya gidan sauro mai magani, shigar da gefensa da kula da shi ta yadda kowa, farawa da waɗanda suka fi fuskantar haɗari, zai kwana a ciki kowane dare.",
          quickCheck: [
            { objective: "O2", q: "Yaushe ya kamata iyalinku su kwana a cikin gidan sauro?", options: ["Lokacin damina kaɗai", "Sai idan wani ba shi da lafiya", "Kowane dare, duk shekara", "Ƙarshen mako kaɗai"], answer: 2, why: "Sauro suna iya cizo su yaɗa zazzaɓin cizon sauro duk shekara; gidan sauro yana aiki ne kawai idan ana amfani da shi kowane dare." },
            { objective: "O2", q: "Kun ga ƙaramin rami a gidan sauro. Me za ku yi?", options: ["Ku jefar da gidan sauron", "Ku yi kamun kifi da shi", "Ku jira har ramin ya ƙara girma", "Ku ɗinke ko ku ɗaure shi nan take"], answer: 3, why: "Sauro suna wucewa ta ƙananan ramuka; rufe su nan take yana sa gidan sauro ya ci gaba da aiki." }
          ]
        },
        {
          title: "Rage sauro da cizo a kewayen gida",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kawar da ko rufe wuraren da sauro ke ƙyanƙyasa da toshe hanyoyinsu na shiga gida.",
          text: [
            "Sauro suna sa ƙwai a cikin ruwan da ke kwance ba ya gudu. Kududdufai, tsofaffin tayoyi, gwangwanaye, fasassun tukwane, magudanan ruwa da suka toshe, randuna da bokitan ruwa da ba a rufe ba duk suna iya zama wuraren ƙyanƙyasa kusa da inda iyalinku ke kwana.",
            "A kewayen gida: ku zubar ko ku juye abubuwan da ke riƙe ruwa; ku rufe randuna, bokitai da tankunan ruwa da murfi ko yadi mai matsewa; ku share magudanan ruwa da suka toshe; ku cike kududdufai da ƙasa. Ku yi haka kowane mako, musamman lokacin damina, kuma ku haɗa kai da maƙwabta, domin sauro suna tashi daga gida zuwa gida.",
            "Ku hana su shiga, ku guji cizo: ku rufe ƙofofi da tagogi da magariba, ku sa raga a tagogi da ramukan rufi idan za ku iya. Da yamma, ku sa riga mai dogon hannu da dogon wando ko dogon zani. Mayukan korar sauro masu DEET, IR3535 ko icaridin suna iya taimakawa bayan magariba; ku yi amfani da su kamar yadda aka rubuta a kwalinsu. Maganin sauro mai hayaƙi (coil) da na'urorin korar sauro suna iya taimakawa, amma ba sa maye gurbin gidan sauro. Idan ma'aikatan feshi na shirin lafiya suka zo yin feshi a cikin gidaje (feshin bango na cikin gida), ku bar su su shiga, ku bi shawararsu game da rashin wanke ko fentin bango bayan haka."
          ],
          steps: ["Ku zagaya gidanku ku nemo duk abin da ke riƙe ruwa mai kwance.", "Ku zubar, ku juye, ku rufe ko ku kawar da shi.", "Ku share magudanan ruwa da suka toshe ku cike kududdufai.", "Ku rufe ƙofofi da tagogi da magariba; ku sa raga idan za ku iya.", "Ku rufe hannaye da ƙafafu da yamma; ku yi amfani da mai korar sauro kamar yadda aka rubuta a kwalinsa.", "Ku bar ma'aikatan feshi na shirin lafiya su shiga."],
          words: [["Wurin ƙyanƙyasa", "ruwa mai kwance inda sauro ke sa ƙwai."], ["Mai korar sauro (repellent)", "man shafawa ko feshi da ke hana sauro sauka a fatarku."], ["Feshin bango na cikin gida (IRS)", "ma'aikatan lafiya suna fesa maganin ƙwari a bangon cikin gida don kashe sauron da ke hutawa a can."]],
          slides: [
            { title: "Sauro suna ƙyanƙyasa a ruwa mai kwance", bullets: ["Kududdufai, tayoyi, gwangwanaye, fasassun tukwane", "Magudanan ruwa da suka toshe, randuna da bokitai a buɗe"] },
            { title: "Kowane mako a kewayen gida", bullets: ["Ku zubar ko ku juye abubuwan da ke riƙe ruwa", "Ku rufe randuna, bokitai da tankuna", "Ku share magudanan ruwa; ku cike kududdufai; ku haɗa kai da maƙwabta"] },
            { title: "Ku hana su shiga, ku guji cizo", bullets: ["Ku rufe ƙofofi da tagogi da magariba; raga", "Dogon hannu da dogon wando da yamma", "Mai korar sauro kamar yadda aka rubuta; ba ya maye gurbin gidan sauro"] },
            { title: "Ma'aikatan feshi", bullets: ["Feshin cikin gida yana kashe sauron da ke hutawa", "Ku bar ma'aikatan shirin lafiya su shiga", "Ku bi shawararsu bayan haka"] }
          ],
          sources: [WHO_MALARIA, WHO_WATER],
          tryIt: "Ku zagaya gidanku yanzu. Ku rubuta kowane wuri mai ruwa mai kwance. Ku zubar, ku rufe ko ku kawar da aƙalla uku a yau, kuma ku shirya sake dubawa kowane mako.",
          youCanNow: "kawar da wuraren ƙyanƙyasar sauro a kewayen gidanku da rage cizo da yamma.",
          quickCheck: [
            { objective: "O3", q: "A ina sauro ke sa ƙwai?", options: ["A busasshen yashi", "A ruwa mai kwance kamar kududdufai, tayoyi da bokitai a buɗe", "A wutar girki", "A cikin burodi"], answer: 1, why: "Sauro suna buƙatar ruwa mai kwance don su sa ƙwai." },
            { objective: "O3", q: "Kuna kunna maganin sauro mai hayaƙi (coil) da yamma. Mene ne gaskiya?", options: ["Yana iya taimakawa, amma har yanzu za ku kwana a cikin gidan sauro", "Ba kwa buƙatar gidan sauro kuma", "Yana warkar da zazzaɓin cizon sauro", "Dole ya ƙone dukan dare kusa da jariri"], answer: 0, why: "Maganin sauro mai hayaƙi da mayukan korar sauro suna ƙara kariya amma ba sa maye gurbin gidan sauro." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Hana cizon sauro",
        questions: [
          { objective: "O1", q: "Yaushe ne sauron zazzaɓin cizon sauro ke cizo galibi?", options: ["Da tsakar rana", "Da safe kaɗai", "Da yamma da kuma dare", "Lokacin rani kaɗai"], answer: 2, why: "Sauron Anopheles suna cizo galibi da yamma da kuma dare, sau da yawa lokacin da mutane ke barci." },
          { objective: "O2", q: "Iyalinku suna da gidan sauro uku kuma mutane biyar ne. Su wane ne za su fara kwana a ciki?", options: ["Uba da manyan 'ya'ya maza", "Baƙi", "Duk wanda ya fara kwanciya", "Ƙananan yara da mace mai ciki"], answer: 3, why: "Ƙananan yara da mata masu ciki ne suka fi fuskantar haɗari, don haka su ne na farko yayin da kuke neman ƙarin gidan sauro." },
          { objective: "O2", q: "Yaya ya kamata a rataya gidan sauro?", options: ["Ya kai ƙasa kuma an shigar da gefensa kafin duhu", "A naɗe shi sama da gado", "Rabin gado kawai", "A kan fuska kawai"], answer: 0, why: "Gidan sauro da ya kai ƙasa kuma aka shigar da gefensa ba ya barin wata kafa ga sauro." },
          { objective: "O3", q: "Akwai tsofaffin tayoyi cike da ruwan sama a bayan gidanku. Me za ku yi?", options: ["Ku bar su; ba naku ba ne", "Ku zubar da ruwan ku ajiye su a bushe, ko ku kawar da su", "Ku ƙara ruwa", "Ku rufe su da gidan sauro"], answer: 1, why: "Ruwan da ke cikin tayoyi wurin ƙyanƙyasa ne; zubar da shi ko kawar da tayoyin yana hana sauro ƙyanƙyasa." },
          { objective: "O3", q: "Ma'aikatan lafiya sun zo don fesa bangon cikin gidanku. Me za ku yi?", options: ["Ku hana su", "Ku wanke bangon nan take bayan haka", "Ku bar su su shiga ku bi shawararsu bayan haka", "Ku yi fenti a kan feshin a ranar"], answer: 2, why: "Feshin bango na cikin gida babbar hanya ce ta WHO; wanke ko fentin bango yana hana shi aiki." }
        ]
      }
    },
    {
      name: "Babi na 2: Kare waɗanda suka fi fuskantar haɗari da ɗaukar mataki da sauri",
      lessons: [
        {
          title: "Kare mata masu ciki da ƙananan yara",
          objectives: ["O4"],
          minutes: 5,
          goal: "Jera hidimomin zazzaɓin cizon sauro da asibitinku ke ba mata masu ciki da ƙananan yara, da tsara ziyarar.",
          text: [
            "Zazzaɓin cizon sauro lokacin ciki yana iya cutar da uwa da jariri: WHO ta ce yana iya sa a haifi jariri kafin lokacinsa ko da ƙaramin nauyi. Mace mai ciki ya kamata ta fara awon ciki da wuri kuma ta je kowace ziyara. Wajen awon ciki a ƙasashe da yawa, za ta iya samun gidan sauro mai magani, gwajin zazzaɓin cizon sauro kuma, inda shirin ƙasa ke bayarwa, maganin rigakafin zazzaɓin cizon sauro lokacin ciki (WHO tana kiran wannan IPTp). Ma'aikacin lafiya ne ke yanke abin da take buƙata da lokacin. Kada ta taɓa shan maganin zazzaɓin cizon sauro lokacin ciki ba tare da ma'aikacin lafiya ba.",
            "Ga ƙananan yara: WHO tana ba da shawarar alluran rigakafin zazzaɓin cizon sauro guda biyu (RTS,S da R21) ga yara a wuraren da zazzaɓin cizon sauro ya yi yawa, kuma ana ƙara su cikin alluran rigakafin yara na yau da kullum a ƙasashen Afirka da yawa. A wasu wurare, misali sassan yankin Sahel kamar Burkina Faso da Mali, ma'aikatan lafiya suna kuma ba ƙananan yara maganin rigakafi lokacin damina (maganin rigakafin zazzaɓin cizon sauro na lokacin damina). Ku tambayi asibitinku abin da ake bayarwa a inda kuke zaune, ku kuma tabbata katin lafiyar yaron ya cika.",
            "Alluran rigakafi da maganin rigakafi suna ƙara kariya, amma WHO ta ce sun fi aiki tare da gidan sauro. Ku ci gaba da amfani da gidan sauro kowane dare. Ku rubuta ranakun asibiti a tsarinku, kuma ku tambayi ma'aikacin lafiya na unguwa idan ba za ku iya zuwa asibiti ba."
          ],
          steps: ["Mace mai ciki: ta fara awon ciki da wuri ta je kowace ziyara.", "Ku tambaya wajen awon ciki game da gidan sauro, gwaji da maganin rigakafin zazzaɓin cizon sauro.", "Yaro: ku tambayi asibiti ko ana ba da alluran rigakafin zazzaɓin cizon sauro a inda kuke zaune, ku tabbata katin lafiyarsa ya cika.", "Ku tambaya ko akwai kamfen maganin rigakafi na lokacin damina a yankinku.", "Ku rubuta kowace ranar asibiti a tsarinku, ku ci gaba da amfani da gidan sauro."],
          words: [["Awon ciki (antenatal care)", "duba lafiyar mace lokacin da take da ciki."], ["Allurar rigakafi (vaccine)", "magani, yawanci allura, da ke taimaka wa jiki ya kare kansa daga wata cuta."], ["Maganin rigakafi", "maganin da ma'aikacin lafiya ke bayarwa don hana cuta kafin ta fara."], ["Katin lafiya", "kati ko ɗan littafin da asibiti ke rubuta alluran rigakafi da duba lafiyar yaro a ciki."]],
          slides: [
            { title: "Zazzaɓin cizon sauro lokacin ciki", bullets: ["Yana iya cutar da uwa da jariri", "Haihuwa kafin lokaci ko jariri mai ƙaramin nauyi", "Ku fara awon ciki da wuri; ku je kowace ziyara"] },
            { title: "Wajen awon ciki, ku tambaya game da", bullets: ["Gidan sauro mai magani da gwajin zazzaɓin cizon sauro", "Maganin rigakafi inda ake bayarwa (IPTp)", "Kada a taɓa shan maganin zazzaɓin cizon sauro ba tare da ma'aikacin lafiya ba"] },
            { title: "Ƙananan yara", bullets: ["Alluran rigakafin RTS,S da R21 inda ake bayarwa", "Maganin rigakafi na lokacin damina a wasu wurare", "Ku tabbata katin lafiya ya cika"] },
            { title: "Har yanzu ku yi amfani da gidan sauro", bullets: ["Alluran rigakafi da magani sun fi aiki tare da gidan sauro", "Ku rubuta ranakun asibiti a tsarinku", "Ku nemi taimakon ma'aikacin lafiya na unguwa"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Idan akwai mace mai ciki ko yaro ɗan ƙasa da shekara 5 a gidanku, ku rubuta ranar asibiti ta gaba ga kowannensu da tambayoyin da za ku yi game da gidan sauro, alluran rigakafi da maganin rigakafi. Idan babu, ku rubuta wa maƙwabci ko ɗan'uwa da za ku iya taimaka wa.",
          youCanNow: "ambaci hidimomin asibiti da ke kare mata masu ciki da ƙananan yara daga zazzaɓin cizon sauro da tsara ziyarar.",
          quickCheck: [
            { objective: "O4", q: "Wata mace a iyalinku tana da ciki. Mene ne mataki na farko don kare ta daga zazzaɓin cizon sauro?", options: ["Ta jira har watan ƙarshe", "Ta sayi maganin zazzaɓin cizon sauro a kasuwa", "Ta fara awon ciki da wuri, ta kwana a cikin gidan sauro, ta tambaya game da kariya daga zazzaɓin cizon sauro", "Ta daina cin 'ya'yan itace"], answer: 2, why: "Fara awon ciki da wuri tare da gidan sauro yana ba ta kariyar da asibiti ke bayarwa." },
            { objective: "O4", q: "An yi wa yaronku allurar rigakafin zazzaɓin cizon sauro. Gidan sauro fa?", options: ["Ku jefar da shi", "Ku yi amfani da shi lokacin damina kaɗai", "Ku ba maƙwabta", "Ku ci gaba da amfani da shi kowane dare; alluran rigakafi sun fi aiki tare da gidan sauro"], answer: 3, why: "WHO ta ce alluran rigakafi sun fi amfani idan an haɗa su da gidan sauro da sauran matakai." }
          ]
        },
        {
          title: "Zazzaɓi: ku yi gwaji a ranar da ya fara",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kai wani a iyali mai zazzaɓi gwajin zazzaɓin cizon sauro a ranar da ya fara.",
          text: [
            "A wurin da ake zazzaɓin cizon sauro, ku ɗauki kowane zazzaɓi a matsayin mai yiwuwa zazzaɓin cizon sauro ne har sai gwaji ya nuna akasin haka. Zazzaɓin cizon sauro yakan fara kamar sauran cututtuka da yawa, da zazzaɓi, sanyi mai rawar jiki, ciwon kai da ciwon jiki, don haka ba za ku iya gane shi da ido ba. WHO tana ba da shawarar a tabbatar da kowane wanda ake zargi da gwaji, gwajin gaggawa (rapid test) ko na'urar hangen ƙananan abubuwa (microscope), kafin a ba da magani.",
            "Ku je a wannan rana zuwa asibiti, cibiyar lafiya ko ma'aikacin lafiya na unguwa da aka horar da zai iya yin gwaji. Gwajin gaggawa yana ɗaukar ɗigon jini daga yatsa, kuma yana ba da sakamako cikin mintuna. Ga yaro ɗan ƙasa da shekara 5, zazzaɓi kada ya taɓa jira sai gobe.",
            "Idan gwajin ya nuna zazzaɓin cizon sauro ne, ma'aikacin lafiya ne zai zaɓi maganin ya faɗa muku yadda za a sha shi. Ku sha shi duka, daidai yadda aka faɗa, ko da mutumin ya ji sauƙi. Kada ku yi amfani da ragowar magani, maganin da aka yi wa wani, ko maganin da ba a sani ba daga kasuwa ko mai talla a hanya: yana iya zama ba irin da ya dace ba, ya yi kaɗan, ko na jabu. Idan gwajin bai nuna zazzaɓin cizon sauro ba, ma'aikacin lafiya zai nemi wani dalili. Idan mutumin bai ji sauƙi ba, ko ya ƙara rashin lafiya, ku koma."
          ],
          steps: ["Zazzaɓi a wurin da ake zazzaɓin cizon sauro? Ku ɗauke shi a matsayin mai yiwuwa zazzaɓin cizon sauro ne.", "Ku je a wannan rana zuwa asibiti ko ma'aikacin lafiya na unguwa da zai iya yin gwaji.", "Idan an gano zazzaɓin cizon sauro: ku sha maganin daidai yadda ma'aikacin lafiya ya faɗa, duka.", "Kada ku taɓa amfani da ragowar magani, aron magani ko maganin da ba a sani ba.", "Bai ji sauƙi ba ko ya ƙara rashin lafiya? Ku koma nan take."],
          words: [["Gwajin gaggawa (RDT)", "gwaji mai sauri da ɗigon jini daga yatsa da ke nuna zazzaɓin cizon sauro cikin mintuna."], ["Sakamako marar cuta (negative)", "gwajin bai gano zazzaɓin cizon sauro ba."], ["Maganin jabu", "maganin da yake kama da na gaske amma adadinsa ba daidai ba ne, ko babu wani abu mai aiki a cikinsa."]],
          slides: [
            { title: "Kowane zazzaɓi zai iya zama zazzaɓin cizon sauro", bullets: ["Zazzaɓi, sanyi mai rawar jiki, ciwon kai, ciwon jiki", "Ba za ku iya gane shi da ido ba", "WHO: gwaji kafin magani"] },
            { title: "Ku yi gwaji a ranar", bullets: ["Asibiti ko ma'aikacin lafiya na unguwa da aka horar", "Gwajin gaggawa: ɗigon jini, mintuna", "Yaro ɗan ƙasa da shekara 5: kada a taɓa jira sai gobe"] },
            { title: "Idan zazzaɓin cizon sauro ne", bullets: ["Ma'aikacin lafiya ne ke zaɓar maganin", "Ku sha shi duka daidai yadda aka faɗa", "Bai ji sauƙi ba ko ya ƙara rashin lafiya? Ku koma"] },
            { title: "Kada ku taɓa", bullets: ["Ragowar magani ko aron magani", "Maganin da ba a sani ba daga mai talla", "Yana iya zama ba daidai ba, kaɗan ko na jabu"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Ku gano inda iyalinku za su iya yin gwajin zazzaɓin cizon sauro a wannan rana: asibiti mafi kusa ko ma'aikacin lafiya na unguwa, lokutan buɗewa, da yadda za ku isa can. Ku rubuta shi a tsarinku.",
          youCanNow: "yin gwajin kowane zazzaɓi a ranar da ya fara da bin maganin ma'aikacin lafiya kaɗai, duka.",
          quickCheck: [
            { objective: "O5", q: "Yaronku yana da zazzaɓi da yamma. Me za ku yi?", options: ["Ku yi gwajin zazzaɓin cizon sauro a wannan rana a asibiti ko wajen ma'aikacin lafiya na unguwa", "Ku jira kwana uku", "Ku ba shi ragowar maganin da ya gabata", "Ku sayi magani daga mai talla"], answer: 0, why: "WHO tana ba da shawarar gwaji kafin magani, kuma zazzaɓin yaro bai kamata ya jira ba." },
            { objective: "O5", q: "Bayan kwana biyu yana shan maganin zazzaɓin cizon sauro, mijinki ya ji sauƙi. Me ya kamata ya yi?", options: ["Ya daina ya ajiye sauran don wani lokaci", "Ya gama shan shi duka daidai yadda ma'aikacin lafiya ya faɗa", "Ya ba maƙwabci sauran", "Ya ninka adadin na gaba"], answer: 1, why: "Daina sha da wuri yana iya sa zazzaɓin cizon sauro ya dawo; ku sha shi duka kamar yadda aka faɗa." }
          ]
        },
        {
          title: "Alamun haɗarin zazzaɓin cizon sauro mai tsanani da tsarin iyalinku",
          objectives: ["O6"],
          minutes: 5,
          goal: "Gane alamun haɗarin zazzaɓin cizon sauro mai tsanani da kai mutumin asibiti nan take.",
          text: [
            "Zazzaɓin cizon sauro yana iya zama mai tsanani da sauri, musamman ga ƙananan yara da mata masu ciki. Zazzaɓin cizon sauro mai tsanani gaggawa ce.",
            "WHO ta jera waɗannan alamun haɗari. Ku je asibiti YANZU, dare ko rana, idan mutumin: ya gaji ko ya raunana sosai, ko ba zai iya zama ko tsayawa ba; ya ruɗe, yana barci sosai ko yana da wuyar tashi; yana farfaɗiya (girgizar jiki), musamman fiye da sau ɗaya; yana wahalar numfashi; fitsarinsa ya yi duhu ko yana da jini; idanunsa ko fatarsa sun yi rawaya; ko yana zubar da jini ta hanyar da ba a saba ba. Yaron da ba zai iya sha ko shan nono ba, ko yana amai da duk abin da ya ci, shi ma yana buƙatar asibiti yanzu.",
            "Ku shirya kafin ya faru: ku rubuta alamun haɗarin da suna, wuri da lambar waya na asibiti mafi kusa, babban asibiti da ma'aikacin lafiya na unguwa a kati a bango; ku san yadda za ku isa can da dare; ku kuma ajiye ɗan kuɗin mota idan za ku iya. Sannan ku sa duk abin da ke cikin wannan kwas a cikin tsarin iyalinku na yaƙi da zazzaɓin cizon sauro."
          ],
          steps: ["Ku koyi alamun haɗari.", "Idan kun ga ko ɗaya: ku je asibiti yanzu, dare ko rana.", "Ku yi kati mai alamun da sunaye da lambobin asibiti mafi kusa da ma'aikacin lafiya.", "Ku tsara yadda za ku yi tafiya da dare, ku ajiye kuɗin mota idan za ku iya.", "Ku rubuta tsarin iyalinku na yaƙi da zazzaɓin cizon sauro."],
          words: [["Zazzaɓin cizon sauro mai tsanani", "zazzaɓin cizon sauro da ya zama haɗari ga rai kuma yana buƙatar asibiti nan take."], ["Farfaɗiya (girgizar jiki)", "girgizar jiki ta farat ɗaya da mutum ba zai iya hanawa ba."], ["Shawara (jaundice)", "launin rawaya a idanu ko fata."]],
          slides: [
            { title: "Zazzaɓin cizon sauro mai tsanani gaggawa ce", bullets: ["Yana iya faruwa da sauri", "Ya fi haɗari ga ƙananan yara da mata masu ciki"] },
            { title: "Ku je YANZU, dare ko rana, idan", bullets: ["Rauni mai tsanani; ruɗewa ko wuyar tashi", "Farfaɗiya (girgizar jiki); wahalar numfashi", "Fitsari mai duhu ko jini; idanu ko fata rawaya; zubar jini", "Yaro ba zai iya sha ko shan nono ba, ko yana amai da komai"] },
            { title: "Ku shirya", bullets: ["Katin alamun haɗari a bango", "Lambobin asibiti, babban asibiti da ma'aikacin lafiya", "Tsarin tafiya da dare; ajiyar kuɗi idan za ku iya"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Ku yi katin alamun haɗarinku yanzu da aƙalla alamomi huɗu da suna da lambar waya na asibiti mafi kusa ko na ma'aikacin lafiya na unguwa. Sannan ku rubuta cikakken tsarin iyalinku na yaƙi da zazzaɓin cizon sauro daga aikin ƙarshe.",
          youCanNow: "gane alamun haɗarin zazzaɓin cizon sauro mai tsanani, neman taimako nan take, da ajiye tsarin iyalinku na yaƙi da zazzaɓin cizon sauro.",
          quickCheck: [
            { objective: "O6", q: "Yaro mai zazzaɓin cizon sauro ya fara farfaɗiya. Me za ku yi?", options: ["Ku jira ku ga ko zai tsaya", "Ku ƙara masa maganin dai", "Ku je asibiti ko babban asibiti yanzu", "Ku bar yaron ya yi barci har ya wuce"], answer: 2, why: "Farfaɗiya alamar haɗarin zazzaɓin cizon sauro mai tsanani ce; gaggawa ce." },
            { objective: "O6", q: "Wace ce alamar haɗarin zazzaɓin cizon sauro mai tsanani?", options: ["Ɗan ciwon kai", "Jin ɗan zafi bayan aiki", "Son cin abinci", "Idanu masu rawaya, ko fitsari mai duhu ko jini"], answer: 3, why: "WHO ta jera shawara (rawayar idanu ko fata) da fitsari mai duhu ko jini a matsayin alamun haɗari da ke buƙatar kulawar gaggawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kare waɗanda suka fi fuskantar haɗari da ɗaukar mataki da sauri",
        questions: [
          { objective: "O4", q: "Me mace mai ciki za ta iya samu wajen awon ciki a ƙasashe da yawa?", options: ["Gidan kamun kifi kyauta", "Gidan sauro mai magani, gwajin zazzaɓin cizon sauro da maganin rigakafi inda shirin ke bayarwa", "Maganin zazzaɓin cizon sauro don ajiyewa a gida", "Babu wani abu game da zazzaɓin cizon sauro"], answer: 1, why: "Awon ciki shi ne wurin da shirye-shirye da yawa ke ba da gidan sauro, gwaji da maganin rigakafi lokacin ciki." },
          { objective: "O4", q: "Waɗanne alluran rigakafi ne WHO ke ba da shawara don zazzaɓin cizon sauro ga yara a wuraren da ya yi yawa?", options: ["RTS,S da R21", "Na shan inna (polio) da kyanda", "Na sarƙewar haƙori (tetanus) kaɗai", "Babu allurar rigakafin zazzaɓin cizon sauro"], answer: 0, why: "WHO tana ba da shawarar RTS,S (tun 2021) da R21 (tun 2023) ga yara a wuraren da zazzaɓin cizon sauro ke matsakaici zuwa yawa." },
          { objective: "O5", q: "Me yasa ake yin gwaji kafin a ba da maganin zazzaɓi?", options: ["Gwaji yana da daɗi", "Don ku sayar da maganin", "Domin cututtuka da yawa suna kama da zazzaɓin cizon sauro; gwajin yana nuna ko shi ne", "Gwaji yana maye gurbin gidan sauro"], answer: 2, why: "Zazzaɓin cizon sauro yana kama da sauran zazzaɓi; gwaji yana tabbatar da cewa an ba da maganin da ya dace." },
          { objective: "O5", q: "Wani mai talla yana ba da ƙwayoyin maganin zazzaɓin cizon sauro masu arha. Me za ku yi?", options: ["Ku saya wa iyali", "Ku saya wa yara kaɗai", "Ku raba wa maƙwabta", "Kada ku saya; ku yi gwaji ku sami magani daga ma'aikacin lafiya"], answer: 3, why: "Maganin da ba a sani ba yana iya zama ba daidai ba ko na jabu; gwaji da maganin ma'aikacin lafiya sune masu aminci." },
          { objective: "O6", q: "Da tsakar dare, 'yarku mai zazzaɓin cizon sauro ta ruɗe kuma tana da wuyar tashi sosai. Me za ku yi?", options: ["Ku je asibiti ko babban asibiti yanzu", "Ku jira safiya", "Ku ƙara mata magani", "Ku sa ta a cikin gidan sauro ku bar ta ta yi barci"], answer: 0, why: "Ruɗewa da wuyar tashi alamun haɗari ne; ku je yanzu, dare ko rana." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kare Iyalinku daga Zazzaɓin Cizon Sauro (Malaria)",
    questions: [
      { objective: "O1", q: "Me ke ɗaukar zazzaɓin cizon sauro daga mutum zuwa mutum?", options: ["Ƙudaje", "Wasu irin sauro (Anopheles)", "Ruwa mai datti", "Tari"], answer: 1, why: "Zazzaɓin cizon sauro yana wucewa ta cizon sauron Anopheles mai cutar." },
      { objective: "O1", q: "Kusan bayan lokaci nawa da cizo alamun zazzaɓin cizon sauro ke farawa?", options: ["A cikin sa'a ɗaya", "Bayan shekara ɗaya", "Kwana 10 zuwa 15", "Ba sa farawa"], answer: 2, why: "WHO ta ce alamomi yawanci suna bayyana kwana 10 zuwa 15 bayan cizon sauro mai cutar." },
      { objective: "O1", q: "'Yar uwarku daga Tunisiya, inda zazzaɓin cizon sauro na cikin gida ba kasafai ba ne, ta ziyarce ku a wurin da ake zazzaɓin cizon sauro. Mene ne gaskiya?", options: ["Ba ta da haɗari domin ita babba ce", "Ba za ta iya kamuwa da zazzaɓin cizon sauro ba", "Tana buƙatar gidan sauro lokacin damina kaɗai", "Tana cikin babban haɗari, ya kamata ta ga ma'aikacin lafiya kafin tafiya ta kuma kwana a cikin gidan sauro"], answer: 3, why: "Matafiya daga wuraren da babu zazzaɓin cizon sauro suna cikin babban haɗari, don haka suna tsarawa tare da ma'aikacin lafiya." },
      { objective: "O2", q: "Me maganin ƙwarin da ke kan gidan sauro mai magani ke yi?", options: ["Yana kashe ko raunana sauron da suka sauka a kansa", "Yana sa gidan sauro ya yi ƙamshi mai daɗi", "Yana warkar da zazzaɓin cizon sauro", "Yana sa gidan sauro ya kasance da tsabta"], answer: 0, why: "Maganin ƙwarin yana kashe ko raunana sauro, don haka gidan sauro ya fi kariya." },
      { objective: "O2", q: "Yaya ya kamata ku shanya gidan sauron da aka wanke?", options: ["A rana mai zafi har mako ɗaya", "A inuwa, bayan an wanke shi a hankali", "A kan wutar girki", "A jike, a kan gado"], answer: 1, why: "Wanke shi a hankali da shanya shi a inuwa suna taimaka wa gidan sauro ya ci gaba da aiki." },
      { objective: "O2", q: "Wane amfani da gidan sauro ne ba daidai ba?", options: ["A kan tabarmar barci", "A kan gadon jariri", "Yin shingen lambun kayan lambu", "A kan gadon mace mai ciki"], answer: 2, why: "Gidan sauro na kwana a ciki ne; amfani da shi don lambu ko kamun kifi yana barin mutane ba tare da kariya ba." },
      { objective: "O3", q: "Wane aiki ne ke rage ƙyanƙyasar sauro a gida?", options: ["Barin bokitai a buɗe", "Ajiye tsofaffin tayoyi a tsakar gida", "Kwana a waje", "Zubar, rufewa ko kawar da abubuwan da ke riƙe ruwa mai kwance"], answer: 3, why: "Kawar da ruwa mai kwance yana ɗauke wuraren da sauro ke sa ƙwai." },
      { objective: "O3", q: "Yaushe ya kamata ku rufe ƙofofi da tagogi don hana sauro shiga?", options: ["Da magariba", "Da tsakar rana", "Ranar Lahadi kaɗai", "Ba a taɓa ba"], answer: 0, why: "Sauron zazzaɓin cizon sauro suna cizo galibi daga yamma zuwa dare." },
      { objective: "O3", q: "Me yasa za ku haɗa kai da maƙwabta kan ruwa mai kwance?", options: ["Don ku ari tayoyinsu", "Domin sauro suna tashi daga gida zuwa gida", "Don su biya kuɗin", "Ba shi da muhimmanci"], answer: 1, why: "Wuraren ƙyanƙyasa a gidan maƙwabci har yanzu suna aiko da sauro gidanku." },
      { objective: "O4", q: "WHO ta ce zazzaɓin cizon sauro lokacin ciki yana iya sa...", options: ["Babu komai", "Tagwaye", "A haifi jariri kafin lokacinsa ko da ƙaramin nauyi", "Ɗan mura kaɗai"], answer: 2, why: "Zazzaɓin cizon sauro lokacin ciki yana iya kawo haihuwa kafin lokaci da ƙaramin nauyin haihuwa." },
      { objective: "O4", q: "A ina za ku gano ko ana ba yara alluran rigakafin zazzaɓin cizon sauro a inda kuke zaune?", options: ["Wani saƙo a kafafen sada zumunta", "Kasuwa", "Hasashen maƙwabci", "Asibitinku ko ma'aikacin lafiya na unguwa"], answer: 3, why: "Shirye-shiryen alluran rigakafi sun bambanta daga wuri zuwa wuri; asibiti ya san abin da ake bayarwa." },
      { objective: "O4", q: "A wasu sassan yankin Sahel, me ma'aikatan lafiya ke ba ƙananan yara lokacin damina?", options: ["Maganin rigakafin zazzaɓin cizon sauro ta hanyar kamfe", "Wayoyi kyauta", "Gidan kamun kifi", "Babu komai"], answer: 0, why: "Ana ba ƙananan yara maganin rigakafin zazzaɓin cizon sauro na lokacin damina a lokutan haɗari a wasu wurare." },
      { objective: "O5", q: "Me WHO ke ba da shawara kafin a yi maganin wanda ake zargi da zazzaɓin cizon sauro?", options: ["A jira mako ɗaya", "Gwaji da gwajin gaggawa ko na'urar microscope", "A tambayi maƙwabci", "A sayi magunguna iri biyu"], answer: 1, why: "WHO tana ba da shawarar a tabbatar da kowane wanda ake zargi da gwaji kafin magani." },
      { objective: "O5", q: "Kuna da ragowar ƙwayoyin magani daga zazzaɓin cizon sauro na bara. Ɗanku yana da zazzaɓi. Me za ku yi?", options: ["Ku ba shi tsofaffin ƙwayoyin", "Ku ba shi rabin tsofaffin ƙwayoyin", "Ku kai shi gwaji a yau; kada ku yi amfani da ragowar magani", "Ku jira ku gani"], answer: 2, why: "Ragowar magani yana iya zama ba irin da ya dace ba ko ya yi kaɗan; ku fara gwaji ku bi ma'aikacin lafiya." },
      { objective: "O5", q: "Gwajin zazzaɓin cizon sauro bai nuna cutar ba, amma yaronku har yanzu yana da zazzaɓi bayan kwana biyu. Me za ku yi?", options: ["Ku daina damuwa", "Ku ba da maganin zazzaɓin cizon sauro duk da haka", "Ku jira wani mako", "Ku koma wajen ma'aikacin lafiya"], answer: 3, why: "Idan zazzaɓin ya ci gaba ko ya ƙara tsanani, ma'aikacin lafiya yana buƙatar sake dubawa." },
      { objective: "O5", q: "Wane ne ke yanke wane maganin zazzaɓin cizon sauro za a sha da nawa?", options: ["Ma'aikacin lafiya da aka horar bayan gwaji", "Mara lafiyan da kansa", "Mai sayarwa a kasuwa", "Saƙon tes"], answer: 0, why: "Ma'aikacin lafiya ne kaɗai zai iya zaɓar maganin da ya dace da adadinsa bayan gwaji." },
      { objective: "O6", q: "Wanne daga cikin waɗannan ke nufin ku je asibiti yanzu?", options: ["Hanci mai zubar da majina", "Wahalar numfashi", "Jin yunwa", "Ƙaramin yanka"], answer: 1, why: "Wahalar numfashi alamar haɗarin zazzaɓin cizon sauro mai tsanani ce." },
      { objective: "O6", q: "Jariri mai zazzaɓi ba ya shan nono kuma yana amai da komai. Me za ku yi?", options: ["Ku sake gwadawa gobe", "Ku ba shi ruwa kawai ku jira", "Ku je asibiti yanzu", "Ku ba shi maganin manya"], answer: 2, why: "Yaron da ba zai iya sha ba ko yana amai da komai yana buƙatar asibiti nan take." },
      { objective: "O6", q: "Me ke taimaka muku ku ɗauki mataki da sauri da dare lokacin gaggawa?", options: ["Babu komai; za ku tuna", "Jerin magunguna da adadinsu", "Lambar sirrin kuɗin wayarku (PIN)", "Katin alamun haɗari mai lambobin asibiti da tsarin tafiya da dare"], answer: 3, why: "Sanin alamomi, wanda za a kira da yadda za a isa can yana ceton lokaci." },
      { objective: "O1", q: "Zazzaɓin cizon sauro zai iya wucewa daga mutum zuwa mutum ta taɓawa ko cin abinci tare?", options: ["A'a; cizon sauro ne ke yaɗa shi", "E, ta taɓawa", "E, ta cin abinci tare", "E, ta iska"], answer: 0, why: "WHO ta ce zazzaɓin cizon sauro ba ya yaɗuwa kai tsaye daga mutum zuwa mutum; sauro ne ke ɗauke da shi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 3, 6, 9, 12, 13, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Waɗanda ke cikin haɗari", objective: "O1", notYet: "Ba a nuna kowa a matsayin wanda ya fi fuskantar haɗari ba, ko tsarin bai faɗi yadda zazzaɓin cizon sauro ke yaɗuwa ba.", meets: "An ambaci ƙananan yara, mata masu ciki da sauran masu babban haɗari a gidan, tare da cizon sauro da dare a matsayin sanadi.", exceeds: "An kuma yi tsari ga baƙi ko matafiya daga wuraren da babu zazzaɓin cizon sauro." },
      { name: "Gidan sauro kowane dare", objective: "O2", notYet: "An ƙirga gidan sauro amma ba a faɗi wanda ke kwana a ciki ba, ko ba a ambaci ramuka ba.", meets: "An jera kowane wurin kwana da gidan sauro, waɗanda suka fi fuskantar haɗari da farko, tare da duba ramuka kowane mako da kulawa a hankali.", exceeds: "An ƙirga gidan sauron da suka rage, kuma mai koyo ya tambayi asibiti ko ma'aikacin lafiya na unguwa yadda za a same su." },
      { name: "Rage sauro", objective: "O3", notYet: "Ƙasa da abubuwa uku, ko abubuwan da ba sa kawar da ruwa mai kwance ko hana cizo.", meets: "Aƙalla abubuwa uku, kamar zubar da abubuwan da ke riƙe ruwa, rufe randuna, share magudanan ruwa da rufe ƙofofi da magariba.", exceeds: "An sa ranar dubawa ta kowane mako, kuma an haɗa da maƙwabta." },
      { name: "Hidimomin asibiti", objective: "O4", notYet: "Ba a tsara ziyarar asibiti ga mace mai ciki ko ƙaramin yaro a gidan ba.", meets: "An rubuta ziyarar awon ciki da ranakun asibitin yara, tare da tambayoyi game da gidan sauro, alluran rigakafi da maganin rigakafi.", exceeds: "An yi rajistar ziyarar ko an je, kuma katin lafiyar yaron ya cika." },
      { name: "Mataki kan zazzaɓi", objective: "O5", notYet: "Tsarin yana da maganin gida da ragowar magani ko maganin kasuwa, ko jira a gani.", meets: "Gwaji a ranar a wani asibiti ko ma'aikacin lafiya na unguwa da aka ambaci sunansa, da cikakken magani kamar yadda ma'aikacin lafiya ya faɗa.", exceeds: "An kuma rubuta lokutan buɗewa da wani wurin gwaji na madadi." },
      { name: "Katin alamun haɗari", objective: "O6", notYet: "Ƙasa da alamun haɗari huɗu, ko babu lambar asibiti.", meets: "Aƙalla alamun haɗari huɗu da suna da lambar waya na asibiti mafi kusa ko na ma'aikacin lafiya.", exceeds: "Akwai kuma tsarin tafiya da dare, kuma babu sunayen magunguna ko adadinsu a katin." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Gidajen da kowane mutum, farawa da ƙananan yara da mata masu ciki, ke kwana a cikin gidan sauro bayan kwana 30 (binciken biyo baya)",
      "Iyalan da ke yin gwajin zazzaɓin cizon sauro a ranar da zazzaɓin yaro ya fara, kamar yadda iyalai ko ma'aikatan lafiya na unguwa suka faɗa",
      "Ƙarin mata masu ciki da ke fara awon ciki da wuri, da ƙarin yaran da alluran rigakafinsu suka cika inda ake ba da alluran rigakafin zazzaɓin cizon sauro",
      "Raguwar yaran da ke isa asibiti a makare da zazzaɓin cizon sauro mai tsanani a damina mai zuwa"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Gidan sauro mai magani don koyon rataya da dubawa (ko na mai koyo)",
      "Allura da zare don rufe ramuka",
      "Takarda da alƙalami don tsarin iyali da katin alamun haɗari",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Yana aiki da kyau da ƙungiyoyin iyaye mata, ƙungiyoyin awon ciki, makarantu, ƙungiyoyin addini, ƙungiyoyin manoma da ziyarar ma'aikatan lafiya na unguwa; ku yi gwajin farko tare.",
      "Ku rataya gidan sauro tare a Darasi na 2, kuma ku zagaya wurin taron don nemo ruwa mai kwance a Darasi na 3.",
      "Ku gayyaci ma'aikacin lafiya na unguwa ko ma'aikaciyar jinya ta asibiti don faɗin abin da asibiti ke bayarwa: gidan sauro kyauta, gwaji, alluran rigakafi da maganin rigakafi sun bambanta daga ƙasa zuwa ƙasa da yanki zuwa yanki.",
      "Kada ku ambaci sunayen magungunan zazzaɓin cizon sauro ko ku ba da adadin magani; ku tura duk tambayoyin magani zuwa asibiti, ma'aikacin lafiya na unguwa ko ma'aikatar lafiya.",
      "Ku yi amfani da saƙonnin yanzu na shirin yaƙi da zazzaɓin cizon sauro na ƙasa lokacin kamfe da damina.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
