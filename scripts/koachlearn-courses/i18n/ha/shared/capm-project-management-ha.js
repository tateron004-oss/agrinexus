"use strict";

// Koach Learn course, Hausa (ha) translation of shared/capm-project-management.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "capm-project-management-ha",
  lang: "ha",
  translationOf: "capm-project-management",
  category: "Workforce Development",
  name: "Tushen Gudanar da Project (Shirin CAPM)",
  skills: "Bayyana project da iyakokinsa, Rubuta takardar kafa project (charter), Gina WBS da nemo hanya mafi muhimmanci (critical path), Sarrafa haɗari da canje-canje, Zaɓar hanyar tsari-gaba ko Agile, Shirya jarabawar CAPM",
  outcome: "tsara ƙaramin project na gaske yadda jarabawar CAPM take sa rai: rubuta takardar kafa project, raba aikin zuwa ƙananan sassa, nemo hanya mafi muhimmanci (critical path), bin diddigin haɗari da canje-canje, zaɓar hanyar da ta dace, da gina naku shiri mai ranaku don shirya wa CAPM.",
  about: [
    "Wannan kwas ɗin na masu neman aiki ne, tsofaffin sojoji, matasa, masu ƙananan kasuwanci da duk wanda yake son aikin farko a fannin project, kamar mai tsara ayyukan project (project coordinator), mataimakin project ko jagoran ƙungiya. Kuma mataki na farko ne zuwa Certified Associate in Project Management (CAPM), takardar shaida ta matakin farko daga Project Management Institute (PMI), ƙungiyar duniya ta masu gudanar da project.",
    "Za ku koyi muhimman kayan aiki: takardar kafa project (charter), jerin masu ruwa da tsaki, rabe-raben aiki (WBS), jadawalin lokaci mai hanya mafi muhimmanci (critical path), rajistar haɗari da rajistar canje-canje. Za ku gwada kowanne a takarda ko a spreadsheet kyauta, ta amfani da ƙaramin project daga rayuwarku ko aikinku.",
    "Wannan kwas ɗin yana SHIRYA ku ne. Ba ya ba ku CAPM. PMI ce kaɗai take bayar da ita, kuma PMI ce take kafa ƙa'idoji: wane ne zai iya nema, awoyin karatun da ake buƙata, kuɗin jarabawa, jarabawar kanta da yadda ake sabunta ta. Waɗannan suna iya canjawa, don haka za ku duba su da kanku a pmi.org.",
    "Kowane darasi yana ɗaukar kusan minti biyar, sannan akwai aikin \"Gwada yanzu\" da tambayoyi biyu gajeru. Akwai gwajin farko a farko, gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku gudanar da shirinku na CAPM kamar project. Ku yi takardar kafa project mai shafi ɗaya (manufa, fagen aiki, mai ɗaukar nauyi, ma'aunin nasara), rabe-raben aiki (WBS) na karatunku, jadawali mai ranaku da muhimman matakai (milestones) da ke ƙarewa a ranar jarabawar da kuka sa a gaba kuma yana nuna hanya mafi muhimmanci (critical path), rajistar haɗari mai aƙalla haɗari uku (kowanne da maki, mataki da mai kula da shi), da jerin shafukan PMI na hukuma da kuka duba don cancanta, kuɗi da jerin batutuwan jarabawa (Exam Content Outline) na yanzu.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa a Amurka da sauran ƙasashe da ke son aikin farko a fannin project ko CAPM: masu neman aiki, tsofaffin sojoji da ke komawa aikin farar hula, masu dawowa gida daga gidan yari, masu ƙananan kasuwanci, ma'aikatan ƙungiyoyin sa-kai, da ma'aikatan da suke riga suna tsara ayyuka ba tare da wannan sunan aiki ba.",
    startingPoint: "Yawancinsu sun taɓa tsara aiki ba bisa ƙa'ida ba (biki, ƙaura, jadawalin aiki, aikin soja, shirin coci ko masallaci) amma ba su yi amfani da kayan aikin project na hukuma ko kalmominsa ba. Wasu suna iya amfani da spreadsheet mai sauƙi; kaɗan ne suka taɓa ganin Gantt chart ko rajistar haɗari.",
    gap: "Masu ɗaukar aiki suna ambaton tsara project da CAPM a tallace-tallacen aiki, kuma jarabawar tana amfani da kalmomin PMI. Masu koyo suna buƙatar mayar da abin da suke riga suna yi ba bisa ƙa'ida ba zuwa kayan aiki da kalmomi na hukuma, kuma suna buƙatar shiri na gaskiya don cika sharuɗɗan PMI da cin jarabawar.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar PMI",
      "Na'urori: takarda da alƙalami sun isa ga kowane aiki; spreadsheet kyauta (Google Sheets ko Excel online) yana taimakawa",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki da iyali",
      "Ƙa'idojin PMI, kuɗi da jerin batutuwan jarabawa suna canjawa: masu koyo suna tabbatar da su a pmi.org, ba daga wannan kwas ba",
      "Kwas ɗin yana shiryawa ne; ba ya bayar da CAPM, kuma ba ya ƙirguwa kai tsaye cikin awoyin karatun da PMI take buƙata"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da spreadsheet ba za su iya fara ɗaukar \"Excel and Spreadsheets\" (Excel da Spreadsheet); \"Gudanar da Ayyuka ta Hanyar Agile\" kwas ne mai kyau na gaba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku bayanin wani aiki", action: "gane ko project ne da faɗin matakan rayuwarsa da manyan iyakokinsa", standard: "daidai a aƙalla misalai 4 cikin 5" },
    { id: "O2", condition: "Don ƙaramin project na gaske", action: "rubuta takardar kafa project mai shafi ɗaya da jerin masu ruwa da tsaki tare da sha'awa da ƙarfin faɗa a ji na kowanne", standard: "tare da manufa, abin da ke ciki da wanda ba ya ciki, mai ɗaukar nauyi, ranar ƙarshe da ma'aunin nasara da za a iya auna" },
    { id: "O3", condition: "Idan aka ba ku manufar project da jerin ayyuka da tsawon lokacinsu", action: "gina rabe-raben aiki (WBS) da jadawalin lokaci da ke nuna hanya mafi muhimmanci (critical path)", standard: "tare da nuna kowane dogaro da lissafin tsawon hanya mafi muhimmanci daidai" },
    { id: "O4", condition: "Don wannan project ɗin", action: "rubuta haɗari a rajistar haɗari da sarrafa buƙatar canji ta hanyar sarrafa canji (change control)", standard: "tare da maki, mataki da mai kula ɗaya ga kowane haɗari, kuma ba a yi canji ba tare da amincewa ba" },
    { id: "O5", condition: "Idan aka ba ku gajeren labarin wani project", action: "zaɓar hanyar tsari-gaba (predictive), Agile ko gauraye (hybrid) da bayyana dalilin zaɓin", standard: "tare da ba da aƙalla dalilai biyu daga labarin" },
    { id: "O6", condition: "Ta amfani da shafukan PMI na hukuma", action: "gina shirin karatu da jarabawar CAPM mai ranaku", standard: "tare da duba cancanta, jera batutuwan jarabawa (Exam Content Outline) da ranar jarabawar da kuka sa a gaba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Fara project ta hanyar da ta dace",
      lessons: [
        {
          title: "Abin da ke sa aiki ya zama project",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gane ko wani aiki project ne da faɗin matakansa da iyakokinsa.",
          text: [
            "Project aiki ne na ɗan lokaci don ƙirƙirar sabon abu: yana da farko, ƙarshe da sakamako na musamman. Buɗe motar sayar da abinci, ƙaurar da ofis, shirin rajistar masu zaɓe ko gina shafin intanet duk project ne. Dafa abincin rana iri ɗaya kowace rana, ko amsa wayoyi a kowane lokacin aiki, ayyukan yau da kullum ne (operations), ba project ba.",
            "Yawancin project suna bi ta matakai. Hanya mai sauƙi ta ganin su: fara (a amince kan dalili da abin da za a yi), tsara (yadda, yaushe, wa, nawa), yin aikin, sa ido da sarrafa shi, da rufewa (miƙa sakamakon da rubuta darussan da aka koya). PMI tana kiran mutane da hanyoyin da ke jagorantar wannan \"project management\" (gudanar da project).",
            "Kowane project yana da iyakoki (constraints). Uku na gargajiya su ne fagen aiki (scope, abin da za ku bayar), jadawalin lokaci (schedule) da kuɗi (cost). Inganci, kayan aiki da mutane, da haɗari ma suna da muhimmanci. Idan ɗaya ya canja, sauran suna ji: idan kun ƙara aiki da ranar ƙarshe iri ɗaya, kuna buƙatar ƙarin mutane ko kuɗi, ko kuma inganci ya ragu."
          ],
          steps: ["Ku tambaya: shin wannan aikin yana da farko da ƙarshe a sarari?", "Ku tambaya: shin yana ƙirƙirar sabon abu ko wani abu daban?", "Idan amsar duka biyu e ce, project ne. Idan yana maimaituwa kowace rana, aikin yau da kullum ne.", "Ku faɗi matakin da yake ciki yanzu da iyakarsa mafi tsanani."],
          words: [["Project", "aiki na ɗan lokaci mai farko, ƙarshe da sakamako na musamman."], ["Ayyukan yau da kullum (operations)", "aikin da ake maimaitawa kullum don kasuwanci ya ci gaba da tafiya."], ["Iyaka (constraint)", "abin da ke iyakance project, kamar lokaci, kuɗi ko fagen aiki."], ["Fagen aiki (scope)", "dukkan aiki da sakamakon da project zai bayar, ba fiye da haka ba."], ["Matakan rayuwar project (life cycle)", "matakan da project yake bi daga farko har rufewa."]],
          slides: [
            { title: "Project ko aikin yau da kullum?", bullets: ["Project: na ɗan lokaci, mai farko, ƙarshe da sakamako na musamman", "Aikin yau da kullum: aiki iri ɗaya da ake maimaitawa kowace rana"] },
            { title: "Matakai biyar masu sauƙi", bullets: ["Fara: dalili da abin da za a yi", "Tsara: yadda, yaushe, wa, nawa", "Yi aikin, sannan sa ido da sarrafa shi", "Rufe: miƙa sakamako da rubuta darussan da aka koya"] },
            { title: "Iyakokin project", bullets: ["Fagen aiki, jadawalin lokaci da kuɗi", "Har ila yau inganci, kayan aiki da mutane, da haɗari", "Idan ɗaya ya canja, sauran suna ji"] }
          ],
          sources: [{ name: "Project Management Institute: Mene ne gudanar da project? (What is project management?)", url: "https://www.pmi.org/about/learn-about-pmi/what-is-project-management" }],
          tryIt: "Ku rubuta ayyuka biyar daga rayuwarku, aikinku ko aikin sojanku. Ku sa wa kowanne P (project) ko O (aikin yau da kullum). Ga kowane project, ku rubuta iyakarsa mafi tsanani: fagen aiki, lokaci ko kuɗi.",
          youCanNow: "bambanta project da aikin yau da kullum, faɗin matakansa da faɗin wace iyaka ce ta fi tsanani.",
          quickCheck: [
            { objective: "O1", q: "Wanne daga cikin waɗannan project ne?", options: ["Cika kaya a kan shelf kowane dare", "Amsa kiran abokan ciniki a kowane lokacin aiki", "Buɗe shago na biyu kafin watan Yuni", "Biyan albashi duk bayan mako biyu"], answer: 2, why: "Buɗe sabon wuri na ɗan lokaci ne, yana da ranar ƙarshe kuma yana ƙirƙirar sabon abu." },
            { objective: "O1", q: "Mai ɗaukar nauyi ya ƙara sababbin abubuwa uku amma ya bar ranar ƙarshe da kasafin kuɗi iri ɗaya. Me zai fi yiwuwa ya lalace?", options: ["Babu komai; fagen aiki ba ya shafar sauran iyakoki", "Inganci, sai dai idan an ƙara lokaci, mutane ko kuɗi", "Sunan project ɗin kawai", "Jerin masu ruwa da tsaki"], answer: 1, why: "Fagen aiki, lokaci da kuɗi suna da alaƙa; ƙarin aiki da lokaci da kuɗi iri ɗaya yana matsa wa inganci." }
          ]
        },
        {
          title: "Takardar kafa project da masu ruwa da tsakinku",
          objectives: ["O2"],
          minutes: 6,
          goal: "Rubuta takardar kafa project mai shafi ɗaya da jerin masu ruwa da tsaki don ƙaramin project.",
          text: [
            "Takardar kafa project (project charter) ita ce takardar da ke fara project a hukumance. Tana ambaton mai ɗaukar nauyi (sponsor, mutumin da ke amincewa da project kuma yake ba da kuɗinsa) kuma tana ba manajan project ikon amfani da mutane da kuɗi. Ku ɗauke ta kamar umarnin aiki: babu charter, babu project.",
            "Charter mai kyau mai shafi ɗaya tana da: dalili (me yasa), manufa mai ma'auni (\"buɗe rajistar ma'ajiyar abinci ta intanet kafin 1 ga Maris, iyalai 50 su yi rajista a watan farko\"), abin da ke cikin fagen aiki da wanda ba ya ciki, ranar ƙarshe da muhimman matakai, kasafin kuɗi, manyan haɗari, da sunan mai ɗaukar nauyi.",
            "Masu ruwa da tsaki (stakeholders) su ne duk wanda yake shafar project ko project yake shafarsa: mai ɗaukar nauyi, ƙungiyar aiki, abokan ciniki, makwabta, masu duba aiki na hukuma, masu kawo kaya. Ku jera su, sannan ku sa kowanne a kan teburi mai sauƙi na ƙarfin faɗa a ji (babba ko ƙarami) da sha'awa (babba ko ƙarama). Faɗa a ji babba da sha'awa babba: ku kula da su sosai. Faɗa a ji babba, sha'awa ƙarama: ku gamsar da su. Faɗa a ji ƙarami, sha'awa babba: ku sanar da su. Ƙarami da ƙarama: ku duba su lokaci-lokaci."
          ],
          steps: ["Ku rubuta dalilin a jimla ɗaya.", "Ku rubuta manufa mai lamba da rana.", "Ku jera abin da ke cikin fagen aiki da wanda ba ya ciki.", "Ku ƙara ranar ƙarshe, muhimman matakai, kasafin kuɗi da mai ɗaukar nauyi.", "Ku jera masu ruwa da tsaki ku sa kowanne a kan teburin faɗa a ji da sha'awa."],
          words: [["Takardar kafa project (project charter)", "takardar da ke fara project a hukumance kuma tana ba manajan project iko."], ["Mai ɗaukar nauyi (sponsor)", "mutum ko ƙungiyar da ke amincewa, ba da kuɗi da goyon bayan project."], ["Masu ruwa da tsaki (stakeholders)", "duk wanda yake shafar project ko project yake shafarsa."], ["Muhimmin mataki (milestone)", "wani muhimmin wuri a jadawali, ba shi da tsawon lokaci nasa, kamar \"an amince da izini\"."]],
          slides: [
            { title: "Charter tana fara project", bullets: ["Tana ambaton mai ɗaukar nauyi", "Tana ba manajan project iko", "Babu charter, babu project"] },
            { title: "Abin da ke cikin shafi ɗaya", bullets: ["Dalili da manufa da za a iya auna", "Abin da ke cikin fagen aiki da wanda ba ya ciki", "Ranar ƙarshe, muhimman matakai, kasafin kuɗi, manyan haɗari"] },
            { title: "Teburin masu ruwa da tsaki", bullets: ["Faɗa a ji babba, sha'awa babba: ku kula da su sosai", "Faɗa a ji babba, sha'awa ƙarama: ku gamsar da su", "Faɗa a ji ƙarami, sha'awa babba: ku sanar da su"] }
          ],
          tryIt: "Ku zaɓi ƙaramin project na gaske, kamar taron iyali, tara kuɗi na coci ko masallaci, kasuwar sayar da tsofaffin kaya, ko tsabtace ɗakin ajiya a wurin aiki. Ku rubuta charter mai shafi ɗaya da dukkan sassan da ke sama, sannan ku jera aƙalla masu ruwa da tsaki biyar ku sa kowanne a kan teburin.",
          youCanNow: "rubuta charter mai shafi ɗaya da yanke yadda za ku yi aiki da kowane mai ruwa da tsaki.",
          quickCheck: [
            { objective: "O2", q: "Wace manufa ce ta fi dacewa da charter?", options: ["\"Inganta shafin intanet\"", "\"Yin aiki mai kyau kan rajista\"", "\"Ƙoƙarin gamawa da wuri\"", "\"Buɗe rajistar intanet kafin 1 ga Maris, iyalai 50 su yi rajista a watan farko\""], answer: 3, why: "Manufa mai kyau tana da lamba da rana, don kowa ya san ko an cimma ta." },
            { objective: "O2", q: "Mai duba aiki na birni yana da faɗa a ji babba amma ƙaramar sha'awa a project ɗinku. Yaya za ku yi da shi?", options: ["Ku gamsar da shi: ku biya buƙatunsa ba tare da yawan bayani ba", "Ku yi watsi da shi har ƙarshe", "Ku tura masa kowane bayanin yau da kullum", "Ku mai da shi mai ɗaukar nauyi"], answer: 0, why: "Masu faɗa a ji babba da ƙaramar sha'awa ana gamsar da su don kada su hana project." }
          ]
        },
        {
          title: "Raba aiki da nemo hanya mafi muhimmanci (critical path)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gina rabe-raben aiki (WBS) da jadawalin lokaci, da nuna hanya mafi muhimmanci.",
          text: [
            "Rabe-raben aiki (work breakdown structure, WBS) yana raba dukkan project zuwa ƙananan sassan abubuwan da za a bayar, mataki-mataki, har kowane sashe ya yi ƙanƙanta da za a iya ƙiyasta shi a ba mutum ɗaya. Mafi ƙanƙantar sashe shi ne ƙaramin kunshin aiki (work package). Idan ba ya cikin WBS, ba ya cikin project.",
            "Na gaba, ku jera ayyuka, tsawon lokacin kowanne (duration) da wanda dole ya gama kafin wani ya fara (dogaro, dependencies). Ku zana su kamar akwatuna da kibiyoyi, daga hagu zuwa dama. Misali: A, samun izini (kwana 2); B, gina rumfa (kwana 3, bayan A); C, odar alluna (kwana 1, bayan A); D, kafa rumfa a kasuwar baje koli (kwana 2, bayan B da C).",
            "Ku haɗa kowace hanya daga farko zuwa ƙarshe. A-B-D yana ɗaukar 2 + 3 + 2 = kwana 7. A-C-D yana ɗaukar 2 + 1 + 2 = kwana 5. Hanya mafi tsawo ita ce hanya mafi muhimmanci (critical path): tana kafa mafi saurin lokacin gamawa, kwana 7. Jinkiri a A, B ko D yana jinkirta dukkan project. C yana da rarar lokaci (float ko slack) ta 7 - 5 = kwana 2: yana iya jinkiri kwana 2 ba tare da ya motsa ranar gamawa ba."
          ],
          steps: ["Ku rubuta manyan abubuwan da project zai bayar a matsayin mataki na farko na WBS.", "Ku raba kowanne har sashe ya yi ƙanƙanta da mutum ɗaya zai iya ƙiyasta shi.", "Ku jera ayyuka da tsawon lokacinsu da abin da kowanne dole ya jira.", "Ku zana akwatuna da kibiyoyi, sannan ku haɗa kowace hanya.", "Hanya mafi tsawo ita ce hanya mafi muhimmanci; sauran suna da rarar lokaci."],
          words: [["Rabe-raben aiki (WBS)", "bishiyar da ke raba abubuwan da project zai bayar zuwa ƙananan sassa."], ["Ƙaramin kunshin aiki (work package)", "mafi ƙanƙantar sashe a WBS, wanda za a iya ƙiyasta shi a ba wani."], ["Dogaro (dependency)", "alaƙar da ke nufin dole wani aiki ya gama (ko ya fara) kafin wani ya iya."], ["Hanya mafi muhimmanci (critical path)", "mafi tsawon jerin ayyuka masu alaƙa; tana kafa mafi saurin lokacin da project zai iya gamawa."], ["Rarar lokaci (float ko slack)", "tsawon lokacin da wani aiki zai iya jinkiri ba tare da ya jinkirta gamawar project ba."], ["Gantt chart", "jadawalin sanduna da ke nuna kowane aiki a kan kalanda."]],
          slides: [
            { title: "Rabe-raben aiki (WBS)", bullets: ["Dukkan project, sannan abubuwan bayarwa, sannan ƙananan kunshin aiki", "Kowane kunshin aiki: mai kula ɗaya, mai sauƙin ƙiyasi", "Idan ba ya cikin WBS, ba ya cikin project"] },
            { title: "Tsawon lokaci da dogaro", bullets: ["Tsawon lokacin kowane aiki", "Abin da dole ya gama kafin ya fara", "Ku zana akwatuna da kibiyoyi, daga hagu zuwa dama"] },
            { title: "Nemo hanya mafi muhimmanci", bullets: ["Ku haɗa kowace hanya daga farko zuwa ƙarshe", "Misali: A-B-D = kwana 7, A-C-D = kwana 5", "Hanya mafi tsawo = hanya mafi muhimmanci = kwana 7"] },
            { title: "Rarar lokaci (float)", bullets: ["Aikin C zai iya jinkiri kwana 2 ba tare da ya motsa gamawa ba", "Ayyukan hanya mafi muhimmanci ba su da rarar lokaci", "Ku fi sa ido kan ayyuka masu muhimmanci"] }
          ],
          tryIt: "Ku ɗauki project ɗin da ke cikin charter ɗinku. Ku zana WBS mai aƙalla matakai biyu a takarda. Sannan ku jera ayyuka biyar zuwa takwas da tsawon lokacinsu da dogaronsu, ku zana su kamar akwatuna da kibiyoyi, ku haɗa kowace hanya, ku zagaye hanya mafi muhimmanci. Ku rubuta rarar lokacin wani aiki da ba ya kanta.",
          youCanNow: "raba project zuwa WBS, gina jadawali mai sauƙi da nemo hanya mafi muhimmanci da rarar lokaci.",
          quickCheck: [
            { objective: "O3", q: "Hanya ta 1 tana ɗaukar kwana 9, Hanya ta 2 kwana 6. Wace ce hanya mafi muhimmanci, kuma project zai ɗauki kwana nawa?", options: ["Hanya ta 2, kwana 6", "Duka hanyoyin biyu, kwana 15", "Hanya ta 1, kwana 9", "Hanya ta 1, kwana 3"], answer: 2, why: "Hanya mafi tsawo ita ce hanya mafi muhimmanci, kuma tana kafa mafi saurin gamawa: kwana 9." },
            { objective: "O3", q: "Wani aiki yana da rarar lokaci ta kwana 2 kuma ya jinkirta kwana 1. Me zai faru da ranar gamawa?", options: ["Ba za ta motsa ba", "Za ta koma baya kwana 1", "Za ta koma baya kwana 2", "Za a soke project"], answer: 0, why: "Aiki zai iya jinkiri har zuwa rarar lokacinsa ba tare da jinkirta gamawa ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Fara project ta hanyar da ta dace",
        questions: [
          { objective: "O1", q: "Me ya bambanta project da aikin yau da kullum?", options: ["Project ya fi tsada", "Project na ɗan lokaci ne kuma yana ƙirƙirar sakamako na musamman", "Aikin yau da kullum ba ya taɓa amfani da jadawali", "Project ba shi da kasafin kuɗi"], answer: 1, why: "Project yana da farko, ƙarshe da sakamako na musamman; aikin yau da kullum yana maimaituwa." },
          { objective: "O2", q: "Wace takarda ce ke fara project a hukumance kuma tana ba manajan project iko?", options: ["Rajistar haɗari", "Gantt chart", "Rahoton darussan da aka koya", "Takardar kafa project (charter)"], answer: 3, why: "Charter tana amincewa da project kuma tana ambaton mai ɗaukar nauyi." },
          { objective: "O2", q: "Makwabta suna da sha'awa sosai a tsabtace wurin shaƙatawa da kuke yi amma ba za su iya hana shi ba. Mene ne hanya mafi kyau?", options: ["Ku sanar da su", "Ku kula da su sosai kamar mai ɗaukar nauyi", "Ku bar su a waje da jerin", "Ku nemi su ba da kuɗi"], answer: 0, why: "Masu ƙaramin faɗa a ji da babbar sha'awa ana sanar da su." },
          { objective: "O3", q: "Mene ne ƙaramin kunshin aiki (work package)?", options: ["Akwatin da kayan project suke zuwa a ciki", "Rahoton ƙarshe", "Mafi ƙanƙantar sashe na WBS, wanda za a iya ƙiyasta shi a ba wani", "Kasafin kuɗin mai ɗaukar nauyi"], answer: 2, why: "Ƙaramin kunshin aiki shi ne mataki mafi ƙasa na rabe-raben aiki." },
          { objective: "O3", q: "Ayyuka: A (kwana 3), sannan B (kwana 4) da C (kwana 2) duka bayan A, sannan D (kwana 1) bayan B da C. Hanya mafi muhimmanci tsawonta kwana nawa?", options: ["Kwana 6", "Kwana 10", "Kwana 7", "Kwana 8"], answer: 3, why: "A-B-D = 3 + 4 + 1 = kwana 8, ya fi A-C-D = kwana 6 tsawo." }
        ]
      }
    },
    {
      name: "Babi na 2: Riƙe project a kan hanya da shirya wa CAPM",
      lessons: [
        {
          title: "Haɗari, matsaloli da sarrafa canji",
          objectives: ["O4"],
          minutes: 6,
          goal: "Rubuta haɗari a rajistar haɗari da tura buƙatar canji ta hanyar sarrafa canji.",
          text: [
            "Haɗari (risk) wani abu ne da ZAI IYA faruwa kuma zai shafi project. Matsala (issue) ita ce abin da ke faruwa YANZU. Ku rubuta haɗari da wuri a rajistar haɗari (risk register): haɗarin, yiwuwarsa (yaya zai iya faruwa, 1 zuwa 5), tasirinsa (yaya muninsa, 1 zuwa 5), maki (yiwuwa sau tasiri), mataki da mai kula ɗaya.",
            "Akwai manyan matakai huɗu game da barazana. Guje masa (avoid: canja shirin don kada ya faru). Mayar da shi ga wani (transfer: misali da inshora ko kwangila). Rage shi (mitigate: sa ya rage yiwuwa ko ya rage cutarwa). Amince da shi (accept: kada ku yi komai yanzu, amma ku sa ido, kuma watakila ku ajiye ɗan lokaci ko kuɗi a gefe). Misali: ruwan sama a bikin waje, yiwuwa 3, tasiri 4, maki 12; mataki: rage shi ta hanyar hayar tanti; mai kula: Maria.",
            "Canje-canje za su zo. Ƙarin aiki ba tare da izini ba ana kiransa scope creep. Don hana shi, ku yi amfani da sarrafa canji (change control): ku rubuta buƙatar canji, ku duba tasirinsa kan fagen aiki, lokaci, kuɗi, inganci da haɗari, mutumin da ya dace (sau da yawa mai ɗaukar nauyi ko kwamitin canji) ya amince ko ya ƙi, sannan ku sabunta shirin da rajistar canje-canje. Babu amincewa, babu canji."
          ],
          steps: ["Ku jera abin da zai iya lalacewa (da abin da zai iya fi yadda aka tsara).", "Ku ba kowane haɗari maki: yiwuwa x tasiri.", "Ku zaɓi mataki: guje masa, mayar ga wani, rage shi ko amince da shi.", "Ku ba kowane haɗari mai kula ɗaya.", "Ga kowane canji: ku rubuta shi, ku duba tasirinsa, ku sami amincewa, sannan ku sabunta shirin."],
          words: [["Haɗari (risk)", "wani abu marar tabbas da zai iya faruwa kuma zai shafi project."], ["Matsala (issue)", "matsalar da take riga tana faruwa."], ["Rajistar haɗari (risk register)", "teburin haɗari da makinsu, matakansu da masu kula da su."], ["Rage haɗari (mitigate)", "sa haɗari ya rage yiwuwa ko ya rage cutarwa."], ["Scope creep", "aikin da aka ƙara wa project ba tare da amincewa ba."], ["Sarrafa canji (change control)", "hanyar dubawa, amincewa ko ƙin canje-canje kafin a yi su."]],
          slides: [
            { title: "Haɗari ko matsala?", bullets: ["Haɗari: zai iya faruwa", "Matsala: tana faruwa yanzu", "Ku rubuta haɗari da wuri"] },
            { title: "Rajistar haɗari", bullets: ["Yiwuwa x tasiri = maki", "Mataki ɗaya da mai kula ɗaya ga kowane haɗari", "Ku duba ta a kowane taron ƙungiya"] },
            { title: "Matakai huɗu game da barazana", bullets: ["Guje masa, mayar ga wani, rage shi, amince da shi", "Misali: haɗarin ruwan sama, maki 12, a rage shi da tanti"] },
            { title: "Sarrafa canji", bullets: ["Ku rubuta buƙatar", "Ku duba tasiri kan fagen aiki, lokaci, kuɗi, inganci, haɗari", "A amince ko a ƙi, sannan ku sabunta shirin"] }
          ],
          tryIt: "Ku yi rajistar haɗari don project ɗinku a spreadsheet ko a takarda da ginshiƙai: haɗari, yiwuwa, tasiri, maki, mataki, mai kula. Ku ƙara aƙalla haɗari uku. Sannan ku rubuta buƙatar canji ɗaya da wani zai iya nema, ku rubuta tasirinta kan lokaci da kuɗi da wanda dole ya amince da ita.",
          youCanNow: "riƙe rajistar haɗari da hana scope creep ta hanyar sarrafa canji.",
          quickCheck: [
            { objective: "O4", q: "Wani haɗari yana da yiwuwa 4 da tasiri 3. Makinsa nawa ne?", options: ["7", "12", "1", "43"], answer: 1, why: "Maki = yiwuwa x tasiri = 4 x 3 = 12." },
            { objective: "O4", q: "Wani ɗan ƙungiya ya ƙara sabon abu saboda abokin ciniki ya nema a hanyar wucewa. Me ya faru ba daidai ba?", options: ["Babu komai; abokan ciniki su ne na farko", "Rajistar haɗari ta yi tsawo sosai", "Charter ta yi gajarta sosai", "Scope creep: canjin ya tsallake sarrafa canji"], answer: 3, why: "Dole a rubuta canje-canje, a duba tasirinsu kuma a amince da su kafin a fara aiki." }
          ]
        },
        {
          title: "Tsari-gaba, Agile ko gauraye: zaɓar hanya",
          objectives: ["O5"],
          minutes: 5,
          goal: "Zaɓar hanyar tsari-gaba (predictive), Agile ko gauraye (hybrid) don project da ba da dalilai.",
          text: [
            "Hanyar tsari-gaba (predictive, wani lokaci ana kiranta waterfall ko hanyar bin shiri) tana tsara fagen aiki, jadawali da kuɗi tun farko kuma tana bin shirin, canje-canje kuma suna bi ta sarrafa canji. Ta dace da aikin da buƙatunsa suke a sarari kuma ba sa canjawa, kuma canji yana da tsada, kamar gina hanyar hawa ta keken guragu (ramp), ƙaurar da rumbun ajiya ko aikin gini mai izini.",
            "Hanyar Agile tana bayar da aiki a gajerun zagaye (iterations ko sprints), tana karɓar ra'ayi a kowane lokaci kuma tana daidaita shirin. Ta dace da aikin da buƙatunsa ba su bayyana ba ko za su canja, kamar sabuwar manhaja (app) ko sabuwar hidima inda dole ku koyi abin da abokan ciniki suke so. Scrum da Kanban hanyoyin Agile ne da aka saba amfani da su.",
            "Hanyar gauraye (hybrid) tana haɗa su: misali, shirin tsari-gaba don sayen kayan aiki da ranar buɗewa tabbatacciya, tare da sprints na Agile don shafin intanet da talla. Ko wace hanya kuka zaɓa, dole wani ya fahimci buƙatu (requirements): abin da abokin ciniki yake buƙata da gaske. Tattarawa, rubutawa da duba buƙatu ana kiransa nazarin buƙatu (business analysis), kuma yana cikin abin da CAPM ta ƙunsa."
          ],
          steps: ["Ku tambaya: shin buƙatun suna a sarari kuma ba sa canjawa?", "Ku tambaya: yaya tsadar canji a ƙarshen project?", "Ku tambaya: shin za mu iya bayarwa mu karɓi ra'ayi a ƙananan sassa?", "A sarari kuma canji yana da tsada: tsari-gaba. Ba a sarari ba kuma mai sauƙin bayarwa a sassa: Agile. Haɗaka: gauraye."],
          words: [["Hanyar tsari-gaba (predictive)", "tsara fagen aiki, lokaci da kuɗi tun farko, sannan a bi shirin; ana kuma kiranta waterfall."], ["Hanyar Agile", "bayar da aiki a gajerun zagaye, karɓar ra'ayi da daidaita shirin."], ["Hanyar gauraye (hybrid)", "haɗakar sassan tsari-gaba da na Agile a project ɗaya."], ["Buƙata (requirement)", "abin da sakamakon dole ya cika, kamar \"abokan ciniki za su iya biya ta waya\"."], ["Nazarin buƙatu (business analysis)", "nemo, rubutawa da duba abin da abokin ciniki yake buƙata da gaske."]],
          slides: [
            { title: "Tsari-gaba (bin shiri)", bullets: ["Tsara fagen aiki, jadawali da kuɗi tun farko", "Ya fi kyau idan buƙatu suna a sarari kuma ba sa canjawa", "Misali: gina hanyar hawa ta keken guragu"] },
            { title: "Agile", bullets: ["Gajerun zagaye tare da ra'ayi a kowane lokaci", "Ya fi kyau idan buƙatu ba su bayyana ba ko za su canja", "Misali: sabuwar manhajar waya don abokan ciniki"] },
            { title: "Gauraye da buƙatu", bullets: ["Haɗa duka biyu a project ɗaya", "Koyaushe ku nemo abin da abokin ciniki yake buƙata da gaske", "Wannan aikin shi ne nazarin buƙatu (business analysis)"] }
          ],
          sources: [{ name: "Manifesto for Agile Software Development (Sanarwar Agile)", url: "https://agilemanifesto.org/" }, { name: "The Scrum Guide (Jagorar Scrum)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Ku karanta waɗannan uku: (1) shimfiɗa kwalta a filin ajiye motoci na coci da izini da kasafin kuɗi tabbatattu; (2) sabuwar manhajar isar da kaya inda abokan ciniki suke ci gaba da neman canje-canje; (3) buɗe gidan abinci da rana tabbatacciya da sabon shafin odar abinci ta intanet. Ku rubuta tsari-gaba, Agile ko gauraye ga kowanne, da dalilai biyu. Sannan ku yanke wace hanya ce ta dace da project ɗinku da dalili.",
          youCanNow: "zaɓar hanyar tsari-gaba, Agile ko gauraye da bayyana dalilin da ya sa ta dace.",
          quickCheck: [
            { objective: "O5", q: "Wata ƙungiya tana gina sabuwar manhaja kuma har yanzu ba ta san waɗanne abubuwa abokan ciniki za su yi amfani da su ba. Wace hanya ce ta fi dacewa?", options: ["Tsari-gaba, a tabbatar da kowane abu yanzu", "Babu wata hanya", "Agile, bayar da ƙananan sassa da karɓar ra'ayi", "A jira har abokan ciniki su aiko da cikakken jeri"], answer: 2, why: "Buƙatun da ba su bayyana ba sun dace da Agile: gajerun zagaye da ra'ayi suna nuna abin da abokan ciniki suke so." },
            { objective: "O5", q: "Shimfiɗa kwalta a filin ajiye motoci da izini tabbatacce, kasafin kuɗi tabbatacce da bayanai a sarari ya dace da wace hanya?", options: ["Tsari-gaba", "Agile", "Kanban kawai", "Babu, domin aikin yau da kullum ne"], answer: 0, why: "Buƙatu a sarari marasa canji da tsadar canji a ƙarshe sun dace da shirin tsari-gaba." }
          ]
        },
        {
          title: "CAPM: duba ƙa'idoji da tsara jarabawarku",
          objectives: ["O6"],
          minutes: 6,
          goal: "Gina shirin karatu da jarabawar CAPM mai ranaku daga shafukan PMI na hukuma.",
          text: [
            "Certified Associate in Project Management (CAPM) takardar shaida ce ta matakin farko da Project Management Institute (PMI) kaɗai take bayarwa. An yi ta ne don masu farawa, don haka ba ta neman shekarun gogewa a project kamar yadda Project Management Professional (PMP) ta PMI take nema. PMI tana buƙatar wani karatu na gudanar da project kafin ku zauna jarabawar. Wannan kwas ɗin yana shirya ku; ba shi ne takardar shaidar ba, kuma yana iya ƙirguwa ko kada ya ƙirgu cikin awoyin karatun PMI, don haka ku duba pmi.org.",
            "Kafin ku tsara, ku karanta shafin CAPM na hukuma na PMI da littafin jagorar CAPM (handbook) da Exam Content Outline (jerin batutuwan jarabawa) da yake haɗawa da su. Ku rubuta: wane ne ya cancanta, awoyin karatu nawa kuke buƙata da abin da ke ƙirguwa, kuɗin yanzu (membobin PMI da waɗanda ba membobi ba suna iya biyan kuɗi daban), yadda da inda za ku iya zama jarabawar, da yadda ake riƙe takardar shaidar (dole a sabunta ta). Jerin batutuwa na baya-bayan nan sun ƙunshi tushen gudanar da project, hanyoyin tsari-gaba, hanyoyin Agile da nazarin buƙatu, amma ku yi amfani da jerin da PMI take nunawa a yau.",
            "Tsofaffin sojojin Amurka: GI Bill (tallafin karatu na tsofaffin sojoji) yana iya mayar da kuɗin jarabawar lasisi da takardar shaida. Ku duba shafin kuɗin jarabawa na VA (Ma'aikatar Tsofaffin Sojoji) da GI Bill Comparison Tool don ganin ko an amince da jarabawa. A wajen Amurka, PMI tana da reshe (chapter) a ƙasashe da yawa; ku nemi ɗaya a pmi.org don ƙungiyoyin karatu. Ku yi hankali da duk wanda ke sayar da \"tabbacin cin jarabawa\" ko tambayoyin jarabawa na gaske: wannan ya saɓa wa ƙa'idojin PMI kuma zai iya sa ku rasa takardar shaidar."
          ],
          steps: ["Ku buɗe pmi.org ku nemo shafin CAPM, littafin jagora (handbook) da Exam Content Outline.", "Ku rubuta cancanta, awoyin karatu, kuɗi, tsarin jarabawa da ƙa'idojin sabuntawa.", "Ku zaɓi ranar jarabawa da za ku sa a gaba bayan mako 8 zuwa 12 (ko wadda ta dace da rayuwarku).", "Ku raba karatunku zuwa WBS bisa batutuwan jarabawa, da muhimman matakai da gwaje-gwajen atisaye.", "Ku ƙara rajistar haɗari: awoyin aiki, iyali, tsoron jarabawa, kuɗi."],
          words: [["CAPM", "Certified Associate in Project Management, takardar shaida ta matakin farko daga PMI."], ["PMI", "Project Management Institute, ƙungiyar da ke bayar da CAPM da PMP."], ["Exam Content Outline", "jerin batutuwan da jarabawa ta ƙunsa, na hukuma daga PMI."], ["PMP", "Project Management Professional, takardar shaidar PMI don gogaggun manajojin project."], ["Cancanta (eligibility)", "sharuɗɗan da dole ku cika kafin ku iya neman zama jarabawar."]],
          slides: [
            { title: "Mece ce CAPM", bullets: ["Takardar shaida ta matakin farko, PMI kaɗai take bayarwa", "Ba a buƙatar shekarun gogewa a project, ba kamar PMP ba", "Wannan kwas yana shirya ku; ba shi ne takardar shaidar ba"] },
            { title: "Ku duba a pmi.org", bullets: ["Cancanta da awoyin karatu", "Kuɗin yanzu, na membobi da waɗanda ba membobi ba", "Tsarin jarabawa, Exam Content Outline, sabuntawa"] },
            { title: "Taimako da kuɗi", bullets: ["Tsofaffin sojoji: GI Bill yana iya mayar da kuɗin jarabawar takardar shaida", "Ku duba va.gov da GI Bill Comparison Tool", "A wajen Amurka: ku nemo reshen PMI na kusa"] },
            { title: "Ku tsara jarabawarku kamar project", bullets: ["Charter: manufa da ranar jarabawar da kuka sa a gaba", "WBS bisa batutuwan jarabawa, da muhimman matakai", "Rajistar haɗari; kada ku taɓa sayen \"tambayoyin jarabawa na gaske\""] }
          ],
          sources: [{ name: "PMI: Certified Associate in Project Management (CAPM)", url: "https://www.pmi.org/certifications/certified-associate-capm" }, { name: "PMI: Takardun shaida (Certifications)", url: "https://www.pmi.org/certifications" }, { name: "U.S. Department of Veterans Affairs: Mayar da kuɗin jarabawar lasisi ko takardar shaida", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" }],
          tryIt: "Aikin ƙarshe: ku buɗe shafin CAPM na PMI ku rubuta cancanta, awoyin karatu, kuɗi da batutuwan jarabawa. Sannan ku tsara shirinku na CAPM kamar project: charter mai shafi ɗaya da ranar jarabawar da kuka sa a gaba, WBS na karatunku bisa batutuwa, jadawali mai ranaku da muhimman matakai da hanya mafi muhimmanci a nuna, da rajistar haɗari mai aƙalla haɗari uku. Ku ƙara jerin shafukan PMI da kuka duba.",
          youCanNow: "duba ƙa'idojin CAPM na PMI na yanzu da gina naku shirin karatu da jarabawa mai ranaku.",
          quickCheck: [
            { objective: "O6", q: "Wane ne yake bayar da CAPM?", options: ["Wannan kwas ɗin", "Hukumar lasisi ta jiharku", "Kowane kamfanin horarwa", "Project Management Institute (PMI)"], answer: 3, why: "PMI kaɗai take bayar da CAPM; kwasa-kwasai suna shiryawa ne kawai." },
            { objective: "O6", q: "A ina ya kamata ku duba kuɗin CAPM na yanzu da awoyin karatu?", options: ["Wani rubutu a kafofin sada zumunta", "Shafin CAPM na hukuma na PMI da littafin jagora a pmi.org", "Mai sayar da jarabawowin atisaye", "Amsar wani chatbot na AI"], answer: 1, why: "Kuɗi da sharuɗɗa suna canjawa; shafukan PMI da kanta su ne majiyar hukuma." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Riƙe project a kan hanya da shirya wa CAPM",
        questions: [
          { objective: "O4", q: "Mai kawo muku kaya zai iya yin jinkiri. Kun shirya mai kawo kaya na biyu don kariya. Wane mataki ne wannan?", options: ["Amince da shi", "Guje masa", "Rage shi", "Yin watsi da shi"], answer: 2, why: "Mai kawo kaya na biyu yana rage cutarwar barazanar, wato rage haɗari (mitigation)." },
          { objective: "O4", q: "Mai ɗaukar nauyi ya nemi babban dandali. Me ya kamata ya fara faruwa?", options: ["A gina shi nan take", "A rubuta buƙatar canji a duba tasirinta kan lokaci da kuɗi", "A ƙi duk canje-canje", "A cire wani aiki ba tare da faɗa wa kowa ba"], answer: 1, why: "Sarrafa canji yana duba tasiri kuma yana samun amincewa kafin kowane canji." },
          { objective: "O5", q: "Wane hali ne ya dace da hanyar gauraye (hybrid)?", options: ["Sabon gidan abinci mai ranar buɗewa tabbatacciya tare da sabon shafin oda da ake ginawa a sprints", "Shimfiɗa titi da zane tabbatacce", "Amsa waya kowace rana", "Fenti ɗaki ɗaya"], answer: 0, why: "Gauraye yana haɗa shirin tsari-gaba don sassan da ba sa canjawa da Agile don sassan da za su canja." },
          { objective: "O6", q: "Ta yaya CAPM ta bambanta da PMP?", options: ["Jiharku ce take bayar da CAPM", "Babu bambanci", "PMP ta masu farawa ce", "CAPM ta matakin farko ce kuma ba ta neman shekarun gogewa a project"], answer: 3, why: "CAPM ita ce takardar shaidar PMI ta matakin farko; PMP ta gogaggun manajojin project ce." },
          { objective: "O6", q: "Wani a intanet yana sayar da \"tambayoyin jarabawar CAPM na gaske\". Me za ku yi?", options: ["Ku saya don ku ci da sauri", "Ku raba su da ƙungiyar karatunku", "Ku ƙi: ya saɓa wa ƙa'idojin PMI kuma zai iya sa ku rasa takardar shaidar", "Ku yi amfani da su sau ɗaya kawai"], answer: 2, why: "Amfani da tambayoyin jarabawa da aka fallasa ya saɓa wa ƙa'idojin PMI; ku yi karatu daga jerin batutuwa da gwaje-gwajen atisaye na gaskiya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Gudanar da Project (Shirin CAPM)",
    questions: [
      { objective: "O1", q: "Wanne aikin yau da kullum ne, ba project ba?", options: ["Gina sabon shafin intanet", "Sarrafa odar abokan ciniki kowace rana", "Ƙaurar da ofis zuwa sabon birni", "Shirya baje kolin ayyuka na sau ɗaya"], answer: 1, why: "Sarrafa oda kullum yana maimaituwa; sauran na ɗan lokaci ne da sakamako na musamman." },
      { objective: "O1", q: "Waɗanne iyakoki uku ne iyakoki uku na gargajiya (triple constraint)?", options: ["Takarda, alƙalami da firinta", "Mai ɗaukar nauyi, ƙungiya da abokin ciniki", "Haɗari, matsala da canji", "Fagen aiki, jadawalin lokaci da kuɗi"], answer: 3, why: "Fagen aiki, jadawalin lokaci da kuɗi su ne uku na gargajiya, kuma suna shafar juna." },
      { objective: "O1", q: "A wane mataki ne kuke miƙa sakamako da rubuta darussan da aka koya?", options: ["Rufewa", "Farawa", "Tsarawa", "Yin aikin"], answer: 0, why: "Rufewa yana miƙa sakamako kuma yana ajiye darussa don lokaci na gaba." },
      { objective: "O2", q: "Wane ne yake amincewa da project kuma yake ba da kuɗinsa?", options: ["Sabon ɗan ƙungiya", "Kowane mai ruwa da tsaki daidai", "Mai ɗaukar nauyi (sponsor)", "Mai kawo kaya"], answer: 2, why: "Mai ɗaukar nauyi yana amincewa, ba da kuɗi da goyon bayan project." },
      { objective: "O2", q: "Wanne ne yake cikin takardar kafa project (charter)?", options: ["Manufa mai ma'auni da rana, da abin da ke ciki da wanda ba ya cikin fagen aiki", "Odar abincin rana ta kowane ɗan ƙungiya", "Cikakken jerin ayyukan yau da kullum", "Takardar harajin bara"], answer: 0, why: "Charter tana ba da dalili, manufa da za a iya auna, fagen aiki, ranar ƙarshe, kasafin kuɗi da mai ɗaukar nauyi." },
      { objective: "O2", q: "Wani ɗan majalisar birni yana da faɗa a ji babba da sha'awa babba a lambun al'ummarku. Yaya za ku yi da shi?", options: ["Ku sanar da shi da takarda sau ɗaya a shekara", "Ku duba shi lokaci-lokaci", "Ku bar shi a waje da jerin", "Ku kula da shi sosai"], answer: 3, why: "Masu faɗa a ji babba da sha'awa babba ana kula da su sosai." },
      { objective: "O3", q: "Mene ne amfanin rabe-raben aiki (WBS)?", options: ["Jera haɗarin project", "Raba abubuwan bayarwa zuwa ƙananan sassa da za a iya ƙiyasta a ba wani", "Amincewa da canje-canje", "Biyan ƙungiya"], answer: 1, why: "WBS yana raba dukkan project zuwa ƙananan kunshin aiki." },
      { objective: "O3", q: "Mece ce hanya mafi muhimmanci (critical path)?", options: ["Mafi gajeren jerin ayyuka", "Ayyukan da mai ɗaukar nauyi ya fi so", "Mafi tsawon jerin ayyuka masu alaƙa, wanda ke kafa mafi saurin gamawa", "Jerin haɗari"], answer: 2, why: "Hanya mafi tsawo tana kafa mafi gajeren tsawon lokacin da project zai iya ɗauka." },
      { objective: "O3", q: "Hanyoyi: A-B-E = kwana 10, A-C-E = kwana 7, A-D-E = kwana 9. Rarar lokacin hanyar A-D-E nawa ne?", options: ["Kwana 0", "Kwana 3", "Kwana 9", "Kwana 1"], answer: 3, why: "Hanya mafi muhimmanci kwana 10 ce, don haka A-D-E zai iya jinkiri 10 - 9 = kwana 1." },
      { objective: "O3", q: "Wani aiki a kan hanya mafi muhimmanci ya jinkirta kwana 2. Me zai faru?", options: ["Ranar gamawar project za ta koma baya kwana 2 sai dai idan kun dawo da lokaci", "Babu komai, domin yana da rarar lokaci", "Kasafin kuɗi ne kawai zai canja", "Aikin zai fita daga WBS"], answer: 0, why: "Ayyukan hanya mafi muhimmanci ba su da rarar lokaci, don haka jinkirinsu yana motsa ranar gamawa." },
      { objective: "O4", q: "Mene ne bambancin haɗari da matsala?", options: ["Babu bambanci", "Matsala zai iya faruwa; haɗari yana faruwa yanzu", "Haɗari zai iya faruwa; matsala tana faruwa yanzu", "Haɗari game da kuɗi ne kawai"], answer: 2, why: "Haɗari ba shi da tabbas kuma na gaba ne; matsala abu ne da ke faruwa yanzu." },
      { objective: "O4", q: "Kun sayi inshorar biki idan wurin taron ya soke. Wane mataki ne wannan?", options: ["Guje masa", "Mayar da shi ga wani (transfer)", "Amince da shi", "Rage shi"], answer: 1, why: "Inshora tana mayar da tasirin kuɗi ga wani, wato mayarwa ga wani (transfer)." },
      { objective: "O4", q: "Mene ne scope creep?", options: ["Kayan aikin jadawali", "Hanyar ba haɗari maki", "Wani nau'in mai ruwa da tsaki", "Aikin da aka ƙara wa project ba tare da amincewa ba"], answer: 3, why: "Scope creep shi ne ƙarin aiki da ba a amince da shi ba; sarrafa canji yana hana shi." },
      { objective: "O5", q: "Buƙatu suna a sarari kuma ba sa canjawa, kuma canje-canje a ƙarshe suna da tsada sosai. Wace hanya ce ta dace?", options: ["Tsari-gaba (predictive)", "Agile", "Babu shiri", "Canji kowane mako"], answer: 0, why: "Buƙatu a sarari marasa canji da canje-canje masu tsada sun dace da hanyar bin shiri." },
      { objective: "O5", q: "Mene ne nazarin buƙatu (business analysis)?", options: ["Ƙirga kuɗi a ƙarshe", "Zaɓar abincin rana na ƙungiya", "Nemo, rubutawa da duba abin da abokin ciniki yake buƙata da gaske", "Sa hannu a charter"], answer: 2, why: "Nazarin buƙatu yana gano ainihin buƙatu." },
      { objective: "O5", q: "Wata ƙungiyar sa-kai tana gina sabuwar manhaja don masu aikin sa-kai kuma tana sa ran ra'ayoyi za su canja abubuwan da ke ciki. Wace hanya ce ta fi dacewa?", options: ["Tsari-gaba, a tabbatar da dukkan abubuwa yanzu", "Agile, bayar da ƙananan sassa da karɓar ra'ayi", "Babu wata hanya", "A gina duka a nuna kawai a ƙarshe"], answer: 1, why: "Buƙatu masu canjawa sun dace da gajerun zagaye da ra'ayi na Agile." },
      { objective: "O6", q: "Me wannan kwas ɗin yake ba ku game da CAPM?", options: ["Takardar shaidar CAPM da kanta", "Tabbacin cin jarabawa", "Zama memba na PMI", "Shiri a muhimman ra'ayoyi; PMI kaɗai take bayar da CAPM"], answer: 3, why: "Kwas ɗin yana shirya ku; PMI kaɗai take bayar da takardar shaidar." },
      { objective: "O6", q: "Wace takarda ta hukuma ce ke jera batutuwan da jarabawar CAPM ta ƙunsa?", options: ["Exam Content Outline na PMI", "Rubutu a dandalin tattaunawa na intanet", "Bayanin aikinku", "Talla a kafofin sada zumunta"], answer: 0, why: "PMI tana wallafa Exam Content Outline ga kowace jarabawa." },
      { objective: "O6", q: "Wani tsohon soja yana son taimako wajen biyan kuɗin jarabawar CAPM. A ina ya kamata ya duba?", options: ["Mai sayar da gwaje-gwajen atisaye", "Bankinsa", "Shafin kuɗin jarabawar lasisi da takardar shaida na VA da GI Bill Comparison Tool", "Kowane dandalin tattaunawa"], answer: 2, why: "GI Bill yana iya mayar da kuɗin jarabawowin takardar shaida da aka amince da su; shafukan VA suna bayanin yadda." },
      { objective: "O6", q: "Mece ce hanya mafi kyau ta tsara jarabawar CAPM?", options: ["Ku yi karatu duk lokacin da kuka tuna", "Ku ɗauke ta kamar project: charter, WBS bisa batutuwa, jadawali mai ranaku da rajistar haɗari", "Ku sayi tambayoyin jarabawa na gaske", "Ku zauna jarabawa ba tare da duba cancanta ba"], answer: 1, why: "Shiri mai ranaku da aka gina daga jerin batutuwan PMI na hukuma shi ne hanyar da za a amince da ita." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 8, 10, 13, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake miƙawa.",
    criteria: [
      { name: "Takardar kafa project (charter)", objective: "O2", notYet: "Manufar ba ta bayyana ba ko ba ta da rana, ko babu abin da ke ciki da wanda ba ya cikin fagen aiki.", meets: "Shafi ɗaya mai dalili, manufa mai lamba da rana, abin da ke ciki da wanda ba ya cikin fagen aiki, mai ɗaukar nauyi da muhimman matakai.", exceeds: "Har ila yau yana jera masu ruwa da tsaki da faɗa a jinsu da sha'awarsu da yadda za a riƙa sanar da kowanne." },
      { name: "WBS da jadawali", objective: "O3", notYet: "An jera ayyuka ba tare da rabe-rabe, tsawon lokaci ko dogaro ba.", meets: "WBS mai aƙalla matakai biyu da jadawali mai ranaku da muhimman matakai, dogaro da hanya mafi muhimmanci a nuna.", exceeds: "Yana nuna rarar lokacin ayyukan da ba sa kan hanya mafi muhimmanci, kuma an lissafa tsawon hanya mafi muhimmanci daidai." },
      { name: "Rajistar haɗari", objective: "O4", notYet: "Haɗari ƙasa da uku, ko haɗari marasa mataki ko mai kula.", meets: "Aƙalla haɗari uku, kowanne da yiwuwa, tasiri, maki, mataki da mai kula ɗaya.", exceeds: "Yana amfani da fiye da nau'in mataki ɗaya kuma yana da bayanin sarrafa canji kan yadda za a canja shirin." },
      { name: "Hanya", objective: "O5", notYet: "Ba a zaɓi hanya ba, ko ba a ba da dalili ba.", meets: "Ya ambaci tsari-gaba, Agile ko gauraye don shirin karatu kuma ya ba da dalilai biyu.", exceeds: "Yana nuna yadda ake amfani da hanyar, misali zagayen karatu na mako-mako tare da bita." },
      { name: "An duba ƙa'idojin CAPM na hukuma", objective: "O6", notYet: "An kwafo kuɗi, awoyi ko batutuwan jarabawa daga majiyar da ba ta hukuma ba, ko an bar su.", meets: "Ya jera cancanta, awoyin karatu, kuɗi da batutuwan jarabawa daga shafukan PMI, tare da sunayen shafukan.", exceeds: "Har ila yau ya jera taimako da kuɗi (misali GI Bill ko taimakon mai ɗaukar aiki) da reshen PMI na kusa ko ƙungiyar karatu." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi CAPM ko suka kammala karatun da PMI take buƙata cikin kwanaki 90 (binciken biyo baya)",
      "Masu koyo da suka ci CAPM ko aka ɗauke su aiki ko aka ƙara musu matsayi zuwa mai tsara ayyukan project, mataimaki ko jagoran ƙungiya",
      "Masu koyo da suka ce sun yi amfani da charter, jadawali ko rajistar haɗari a wurin aiki ko a al'ummarsu cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda da alƙalami, ko spreadsheet kyauta (Google Sheets ko Excel online)",
      "Intanet don karanta shafin CAPM na PMI, littafin jagora da Exam Content Outline a pmi.org",
      "Ƙaramin project na gaske don tsarawa (iyali, aiki, coci ko masallaci, al'umma ko rundunar soja)",
      "Kusan minti 75 zuwa 90 gaba ɗaya, a gajerun zama, tare da lokacin aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku warware misalin hanya mafi muhimmanci a kan allo kafin masu koyo su yi nasu.",
      "Ku bar masu koyo su yi amfani da project daga rayuwarsu; tsofaffin sojoji za su iya mayar da shirin aikin soja zuwa charter, WBS da rajistar haɗari.",
      "Ku buɗe pmi.org tare a zama na ƙarshe don masu koyo su ga cancanta, kuɗi da Exam Content Outline na yanzu; kada ku faɗi lambobi daga ka.",
      "Ku bayyana cewa kwas ɗin yana shirya masu koyo ne kuma ba ya bayar da CAPM; ku faɗa musu su tambayi PMI ko yana ƙirguwa cikin awoyin karatun da ake buƙata.",
      "Ku yi gargaɗi game da masu sayar da tambayoyin jarabawa na gaske ko tabbacin cin jarabawa, kuma ku ba da maki ga aikin ƙarshe da ma'aunin rubric."
    ]
  }
};
