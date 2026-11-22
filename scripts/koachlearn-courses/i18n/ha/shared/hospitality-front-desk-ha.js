"use strict";

// Koach Learn course, Hausa (ha) translation of shared/hospitality-front-desk.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "hospitality-front-desk-ha",
  lang: "ha",
  translationOf: "hospitality-front-desk",
  category: "Workforce Development",
  name: "Ayyukan Otal da Karɓar Baƙi: Teburin Karɓar Baƙi da Hidimar Baƙi",
  skills: "Shigar da baƙi da sallamar su, Karanta lissafin kuɗin baƙo (folio), Warware matsalolin baƙi, Kare sirrin baƙi da lafiyarsu, Gudanar da aikin sauyi a teburin karɓar baƙi, Shirin samun takardar shaidar CFDR",
  outcome: "yin aikin sauyi a teburin karɓar baƙi na otal yadda ya kamata: shigar da baƙo da sallamar sa, bayyana lissafin kuɗi, warware matsala cikin natsuwa, kare sirrin baƙi da lafiyarsu, da bin rubutaccen shiri zuwa aikin teburin karɓar baƙi da takardar shaida.",
  about: [
    "Otal-otal suna ɗaukar ma'aikatan teburin karɓar baƙi (front desk) a kowane birni da ƙananan garuruwa da yawa, kuma da yawa suna ɗaukar mutanen da ba su taɓa aiki a otal ba idan suna da fara'a, amintattu kuma masu kulawa. Wannan kwas ɗin na masu neman aiki ne, matasa, mutanen da ke dawowa gida daga gidan yari, da duk wanda ke son mataki na farko a aikin karɓar baƙi.",
    "Za ku yi atisayen ainihin aikin teburin: shigar da baƙo, karanta lissafin kuɗin baƙo (folio), sallamar baƙo, magance otal da ya cika ko baƙo mai fushi, da bin dokokin da ke kare baƙi, kamar kada ku taɓa faɗin lambar ɗaki da babbar murya.",
    "Kwas ɗin yana shirya ku don aikin da kuma don takardar shaidar teburin karɓar baƙi kamar START Certified Front Desk Representative (CFDR) daga American Hotel & Lodging Educational Institute (AHLEI, cibiyar koyar da ayyukan otal ta Amurka). Ba ya ba da wannan takardar shaida; kuna samun ta ne ta hanyar ɗaukar kwas da jarabawar AHLEI da kanta.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\" da ɗan gwaji mai tambayoyi biyu. Akwai gwajin ilimi bayan kowane babi, jarabawa mai tambayoyi 20 a ƙarshe, da aikin ƙarshe da za ku iya nunawa a hirar neman aiki."
  ],
  finalTask: "Ku haɗa kayan aikinku na teburin karɓar baƙi: (1) jerin abubuwan yi na shafi ɗaya don farko, tsakiya da ƙarshen sauyin aiki a teburin karɓar baƙi; (2) rubutun shigar da baƙo da za ku iya faɗa da babbar murya, tare da dokar sirri a ciki; (3) shirin kwanaki 30 mai ranaku: otal uku da za ku nemi aiki a cikinsu, lokacin da za ku yi atisayen rubutun da wani, da lokacin da za ku duba shafin AHLEI CFDR ko ku tambayi mai ɗaukar aiki game da horon teburin karɓar baƙi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa da ke neman aikin farko ko aiki mafi kyau: masu neman aiki, mutanen da ke dawowa gida daga gidan yari, baƙi 'yan ci-rani, masu sauya sana'a da matasa a shirye-shiryen aiki. Yawancinsu sun yi amfani da waya kuma sun yi magana da abokan ciniki, amma ba su taɓa aiki a otal ba.",
    startingPoint: "Suna iya gaishe mutane da amfani da wayar zamani. Yawancinsu ba su yi amfani da manhajar otal ba, ba su karanta lissafin kuɗin baƙo ba, kuma ba su kula da biyan kuɗi, makullai da dokokin sirrin baƙi ba.",
    gap: "Otal-otal suna ɗaukar ma'aikatan teburin karɓar baƙi duk shekara kuma sau da yawa suna horarwa a wurin aiki, amma suna son mutanen da suka riga suka san matakan farko na shigar da baƙo da sallamar sa, masu iya natsuwa da baƙi masu fushi, kuma masu kare sirrin baƙi da lafiyarsu. Sanin waɗannan matakai, da samun shiri zuwa takardar shaida, yana sa a fi saurin ɗaukar mai koyo aiki kuma yana taimaka masa ya riƙe aikin.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 7)",
      "Na'urori: waya ko kwamfutar ɗakin karatu; duk atisaye yana yiwuwa a takarda",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki da ganawa",
      "Ba a buƙatar ainihin manhajar otal; tsarin otal-otal ya bambanta, don haka kwas ɗin yana koyar da matakai, ba sunayen menu ba",
      "Sirri: atisaye yana amfani da baƙi, lambobin kati da lambobin ɗaki na ƙirƙira kaɗai",
      "Dokokin ɗaukar aiki sun bambanta: iyakar shekaru ga matasa da binciken tarihin mutum sun bambanta daga jiha zuwa jiha da daga mai ɗaukar aiki zuwa wani"
    ],
    prerequisites: "Babu. Kwas ɗin \"Customer Service Excellence\" (Ƙwarewa a Hidimar Abokan Ciniki) abokin tafiya ne mai kyau don ƙwarewar hidima gaba ɗaya."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku tallar neman ma'aikacin teburin karɓar baƙi", action: "jera manyan ayyukan teburin karɓar baƙi, ƙwarewar da otal-otal ke nema da takardar shaidar da ta dace da aikin", standard: "kuna ambaton aƙalla ayyuka huɗu da inda za a duba takardar shaidar" },
    { id: "O2", condition: "Idan aka ba ku baƙon atisaye mai ajiyar ɗaki", action: "shigar da baƙon mataki-mataki, daga gaisuwa zuwa miƙa masa makulli", standard: "ba tare da tsallake wani mataki ba kuma ba tare da faɗin lambar ɗaki da babbar murya ba" },
    { id: "O3", condition: "Idan aka ba ku folio na baƙon atisaye a lokacin sallama", action: "bayyana kowane caji a kan folio ɗin da sallamar baƙon", standard: "an bayyana kowane caji, kuma an kai duk cajin da ba daidai ba ga manaja ko an gyara shi bisa dokoki" },
    { id: "O4", condition: "Idan aka ba ku baƙo mai fushi ko otal da ya cika", action: "warware matsalar baƙon da neman gafara, zaɓuɓɓuka da rubutaccen bayanin biyo baya", standard: "kuna cikin natsuwa kuma kuna ba baƙon aƙalla zaɓuɓɓuka biyu" },
    { id: "O5", condition: "Idan aka ba ku wani yanayi na sirri, tsaro ko gaggawa a teburin", action: "amsawa bisa dokokin tsaro da sirri na otal", standard: "ba tare da taɓa ba da lambar ɗakin baƙo ko makullinsa ba, da kiran 911 ko manaja idan ya cancanta" }
  ],
  chapters: [
    {
      name: "Babi na 1: Aiki a teburin karɓar baƙi",
      lessons: [
        {
          title: "Aikin teburin karɓar baƙi da hanyar zuwa gare shi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jera manyan ayyukan teburin karɓar baƙi da takardar shaidar da za ta taimaka a ɗauke ku aiki.",
          text: [
            "Teburin karɓar baƙi shi ne cibiyar otal. Ma'aikatan teburin karɓar baƙi (ana kuma kiran su guest service agents) suna maraba da baƙi, suna shigar da su da sallamar su, suna karɓar ajiyar ɗaki, suna amsa waya, suna kula da biyan kuɗi da makullai, suna warware matsaloli kuma suna isar da saƙonni ga masu tsaftace ɗakuna da masu gyara. Mai binciken lissafin dare (night auditor) yana aiki cikin dare, yana duba lissafin ranar kuma yana rufe ranar kasuwanci.",
            "Otal-otal suna fara duba hali da amincewa. Tallar neman aiki sau da yawa tana neman fara'a, magana a sarari, ƙwarewar kwamfuta ta farko, kulawa wajen sarrafa kuɗi da kati, da iya aiki da dare, ƙarshen mako da ranakun hutu. Sanin wani harshe na biyu ƙari ne a birane da yawa.",
            "Takardar shaida tana iya sa ku fice. American Hotel & Lodging Educational Institute (AHLEI) tana ba da kwas da jarabawa ta intanet ta START Certified Front Desk Representative (CFDR). Wannan kwas ɗin yana shirya ku don aikin da irin wannan jarabawa; ba ya ba da takardar shaidar. Ku duba shafin AHLEI don sabbin bayanai, ko ku tambayi otal ko yana biyan kuɗin horo. Wasu masu ɗaukar aiki kuma suna ba da koyon sana'a a wurin aiki (apprenticeship), da aka jera a apprenticeship.gov.",
            "Matasa: ayyuka da sa'o'in da za ku iya yi sun dogara da shekarunku da jiharku. Ku duba dol.gov/youthrules da ofishin ƙwadago na jiharku. Idan kuna da tarihin laifi, otal-otal da yawa suna ɗaukar aiki cikin adalci: ku faɗi gaskiya a takardar neman aiki kuma ku kasance a shirye ku yi magana game da abin da kuka yi tun daga lokacin."
          ],
          words: [["Ma'aikacin teburin karɓar baƙi (front desk agent)", "ma'aikacin otal da ke shigar da baƙi da sallamar su kuma yake taimaka musu lokacin zamansu; ana kuma kiran sa guest service agent."], ["Mai binciken lissafin dare (night auditor)", "ma'aikacin teburin karɓar baƙi na dare da ke duba cajin ranar da biyan kuɗi kuma yake rufe ranar kasuwanci."], ["Takardar shaida (credential)", "satifiket da ke nuna cewa kun ci wani kwas ko jarabawa."], ["AHLEI", "American Hotel & Lodging Educational Institute, cibiyar da ke ba da horon otal da jarabawar takardar shaida."]],
          slides: [
            { title: "Abin da teburin karɓar baƙi ke yi", bullets: ["Maraba da baƙi, shigar da su da sallamar su", "Karɓar ajiyar ɗaki da amsa waya", "Kula da biyan kuɗi da makullan ɗaki", "Warware matsaloli da isar da saƙonni ga sauran ƙungiyoyi"] },
            { title: "Abin da otal-otal ke nema", bullets: ["Fara'a, magana a sarari da amincewa", "Kulawa da tsabar kuɗi, kati da makullai", "Ƙwarewar kwamfuta ta farko", "Aiki da dare, ƙarshen mako da ranakun hutu"] },
            { title: "Takardar shaida da za ta taimaka", bullets: ["AHLEI START Certified Front Desk Representative (CFDR)", "Wannan kwas yana shirya ku; jarabawar AHLEI ce ke ba da ita", "Ku duba shafin AHLEI don sabbin bayanai"] },
            { title: "Ku duba dokokinku", bullets: ["Matasa: dol.gov/youthrules da ofishin ƙwadago na jiharku", "Koyon sana'a a wurin aiki: apprenticeship.gov", "Tarihin laifi: ku faɗi gaskiya ku nuna abin da kuka yi tun daga lokacin"] }
          ],
          sources: [
            { name: "AHLEI: START Certified Front Desk Representative (CFDR) Online Course and Exam", url: "https://shopahlei.servsafebrands.com/start-cfdr-online-course-and-exam" },
            { name: "AHLEI: jarabawar takardar shaida (certification exams)", url: "https://shopahlei.servsafebrands.com/training-and-certification/resourcetype/certification-exam" },
            { name: "Apprenticeship.gov (Ma'aikatar Ƙwadago ta Amurka)", url: "https://www.apprenticeship.gov/" },
            { name: "YouthRules! (Ma'aikatar Ƙwadago ta Amurka)", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Ku nemo tallar neman ma'aikacin teburin karɓar baƙi ko guest service agent ta gaske kusa da ku (shafin neman aiki ko shafin ayyuka na wani otal). A takarda, ku jera ayyuka huɗu da ta ambata, ƙwarewa uku da take nema, da lokutan aiki. Ku zagaya ƙwarewa ɗaya da kuka riga kuke da ita da ɗaya da kuke buƙatar ginawa.",
          youCanNow: "faɗin abin da ma'aikacin teburin karɓar baƙi ke yi, ambaci ƙwarewar da otal-otal ke nema, da ambaci takardar shaidar da za ta taimaka da inda za a duba ta.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne aikin teburin karɓar baƙi na yau da kullum?", options: ["Gyara na'urar sanyaya ɗaki", "Dafa karin kumallo ga baƙi", "Shigar da baƙi da sallamar su", "Tsaftace wurin wanka (pool)"], answer: 2, why: "Shigar da baƙi da sallamar su su ne ainihin aikin teburin karɓar baƙi; gyare-gyare, dafa abinci da tsaftacewa na sauran ƙungiyoyi ne." },
            { objective: "O1", q: "Me wannan kwas ɗin yake yi game da takardar shaidar CFDR?", options: ["Yana ba da satifiket ɗin CFDR", "Yana shirya ku; kuna samun takardar shaidar ta hanyar kwas da jarabawar AHLEI", "Yana maye gurbin buƙatar kowane horo", "Daidai yake da lasisin jiha"], answer: 1, why: "AHLEI ce ke ba da CFDR bayan kwas da jarabawarta; wannan kwas yana shirya ku ne kawai." }
          ]
        },
        {
          title: "Shigar da baƙo (check-in)",
          objectives: ["O2"],
          minutes: 6,
          goal: "Shigar da baƙon atisaye a matakai bakwai, daga gaisuwa zuwa makulli.",
          text: [
            "Shigar da baƙo shi ne lokaci na farko na gaske da baƙo yake da otal. Ku yi shi a tsari ɗaya kowane lokaci don kada wani abu ya ɓace, ko da akwai layi.",
            "Ku gaishe baƙon, ku nemo ajiyar ɗakinsa kuma ku duba cewa katin shaida mai hoto ya yi daidai da sunan. Ku tabbatar da ranaku, irin ɗaki da farashi. Ku karɓi katin biyan kuɗi, ko kuɗin ajiya bisa dokokin otal; otal-otal da yawa suna riƙe wani adadi a katin don zaman da ƙarin caji (hold), kuma kuna bayyana hakan da kalmomi masu sauƙi.",
            "Ku ba da katin makulli kuma ku nuna lambar ɗaki a kan ambulan makulli ko takarda, amma kada ku faɗi lambar ɗakin da babbar murya: sauran mutane a harabar otal suna iya ji. Ku bayyana abubuwan farko (Wi-Fi, karin kumallo, lokacin sallama) kuma ku tambaya ko suna buƙatar wani abu.",
            "Kowane otal yana amfani da tsarin kwamfuta, da ake kira property management system (PMS), don rubuta duk wannan. Tsare-tsare sun bambanta, kuma otal zai horar da ku a nasa; matakan ba sa canjawa."
          ],
          steps: ["Ku gaishe baƙon da murmushi da sunanku.", "Ku nemo ajiyar ɗakin kuma ku duba cewa katin shaida mai hoto ya yi daidai da ita.", "Ku tabbatar da ranaku, irin ɗaki da farashi.", "Ku karɓi katin biyan kuɗi ko kuɗin ajiya kuma ku bayyana duk wani hold.", "Ku yi katin makulli kuma ku rubuta lambar ɗaki a kan ambulan makulli; kada ku faɗe ta da murya.", "Ku bayyana Wi-Fi, karin kumallo da lokacin sallama.", "Ku tambaya \"Akwai wani abu kuma da zan taimaka da shi?\" kuma ku yi musu fatan zama mai daɗi."],
          words: [["Ajiyar ɗaki (reservation)", "yarjejeniyar da ke riƙe ɗaki ga baƙo don wasu ranaku."], ["Farashi (rate)", "kuɗin ɗaki na kowane dare."], ["Hold (izinin riƙe kuɗi)", "adadin da otal ke riƙewa a katin baƙo don biyan zaman da ƙarin caji; ba shi ne cajin ƙarshe ba."], ["Property management system (PMS)", "tsarin kwamfuta na otal don ajiyar ɗaki, ɗakuna, shigar da baƙi, lissafin kuɗi da sallama."]],
          slides: [
            { title: "Shigar da baƙo, a hanya ɗaya kowane lokaci", bullets: ["Ku gaishe da murmushi da sunanku", "Ku nemo ajiyar ɗakin ku duba katin shaida mai hoto", "Ku tabbatar da ranaku, irin ɗaki da farashi"] },
            { title: "Biyan kuɗi da makullai", bullets: ["Ku karɓi kati ko kuɗin ajiya bisa dokokin otal", "Ku bayyana duk wani hold da kalmomi masu sauƙi", "Ku yi katin makulli"] },
            { title: "Dokar sirri", bullets: ["Ku rubuta lambar ɗaki a kan ambulan makulli", "Ku nuna ta; kada ku taɓa faɗin ta da murya", "Sauran mutane a harabar otal suna iya ji"] },
            { title: "Ku gama da kyau", bullets: ["Wi-Fi, karin kumallo da lokacin sallama", "\"Akwai wani abu kuma da zan taimaka da shi?\"", "Ku yi musu fatan zama mai daɗi"] }
          ],
          tryIt: "Tare da aboki ko a gaban madubi, ku shigar da baƙon ƙirƙira: \"Malama Rivera, dare biyu, ɗaki ɗaya mai babban gado (king).\" Ku faɗi dukkan matakai bakwai da babbar murya. Ku rubuta ɗaki 214 a kan ambulan makulli na takarda kuma ku nuna shi maimakon faɗin sa. Ku yi sau biyu, na biyun cikin ƙasa da minti uku.",
          youCanNow: "shigar da baƙo a matakai bakwai da miƙa masa makulli ba tare da faɗin lambar ɗaki da babbar murya ba.",
          quickCheck: [
            { objective: "O2", q: "Kuna miƙa wa baƙo makulli. Me za ku yi da lambar ɗakin?", options: ["Ku faɗe ta da ƙarfi don ya tuna", "Ku faɗa wa duk layin don su sani", "Ku tura ta ta tes ga abokin baƙon", "Ku rubuta ta a kan ambulan makulli ku nuna ta"], answer: 3, why: "Faɗin lambar ɗaki da murya yana sa baƙi a harabar otal su san inda baƙon yake zama." },
            { objective: "O2", q: "Me za ku duba nan da nan bayan kun nemo ajiyar ɗakin?", options: ["Cewa katin shaida mai hoto ya yi daidai da sunan da ke kan ajiyar", "Aikin baƙon", "Yadda baƙon ya zo otal", "Adireshin gidan baƙon a kafafen sada zumunta"], answer: 0, why: "Daidaita katin shaida da ajiyar ɗakin yana tabbatar da cewa ɗakin ya tafi ga mutumin da ya dace." }
          ]
        },
        {
          title: "Karanta folio da sallamar baƙo (check-out)",
          objectives: ["O3"],
          minutes: 5,
          goal: "Bayyana kowane caji a kan folio na baƙo da sallamar baƙon.",
          text: [
            "Folio shi ne lissafin kuɗin baƙo. Yana jera farashin ɗaki na kowane dare, haraji da duk wani ƙarin caji, kamar ajiye mota, abincin da aka kawo ɗaki, ƙaramin firiji na kayan sha (mini-bar) ko kuɗin sallama a makare, da kowane biyan kuɗi.",
            "A lokacin sallama, ku gaishe baƙon, ku tambaye shi yadda zamansa ya kasance, kuma ku buga ko ku tura folio ta imel. Ku bi shi layi-layi idan baƙon yana so, kuma ku saurari duk abin da bai yi daidai ba a zamansa.",
            "Idan baƙon ya yi tambaya game da wani caji, ku natsu kuma ku duba shi tare. Idan kuskure ne a fili da otal ya bar ku ku gyara, ku gyara shi ku faɗa. Idan ba a ba ku izinin cire shi ba, ku ce \"Bari in kira manajana don mu warware wannan,\" kuma kada ku yi gardama. Otal-otal da yawa kuma suna ba da sallama cikin sauri ta waya, talabijin ko manhaja.",
            "Ku kare bayanan kati: kada ku taɓa rubuta ko karanta cikakkiyar lambar kati da murya. Folio yana nuna lambobi kaɗan na ƙarshe kawai."
          ],
          steps: ["Ku gaishe baƙon ku tambaye shi yadda zamansa ya kasance.", "Ku buga ko ku tura folio ta imel.", "Ku bi kowane caji idan baƙon ya tambaya.", "Ku gyara kuskure a fili idan otal ɗinku ya ba da izini; idan ba haka ba, ku kira manaja.", "Ku karɓi biyan kuɗi na ƙarshe, ku gode wa baƙon kuma ku gayyace shi ya dawo."],
          words: [["Folio", "lissafin kuɗin baƙo, mai jera cajin ɗaki, haraji, ƙarin caji da biyan kuɗi."], ["Ƙarin caji (incidentals)", "ƙarin kuɗi lokacin zama, kamar ajiye mota, abinci ko kiran waya."], ["Sallama a makare (late check-out)", "barin otal bayan lokacin sallama na yau da kullum, wani lokaci da kuɗi."], ["Sallama cikin sauri (express check-out)", "sallama ba tare da tsayawa a teburi ba, ta waya, talabijin ko manhaja."]],
          slides: [
            { title: "Folio shi ne lissafin kuɗin baƙo", bullets: ["Farashin ɗaki na kowane dare, da haraji", "Ƙarin caji: ajiye mota, abinci, sallama a makare", "Kowane biyan kuɗi da aka yi"] },
            { title: "Sallamar baƙo", bullets: ["Ku tambaya yadda zaman ya kasance", "Ku buga ko ku tura folio ta imel", "Ku bi caji idan baƙon ya tambaya"] },
            { title: "An yi tambaya game da caji", bullets: ["Ku natsu ku duba shi tare", "Ku gyara kuskure a fili idan an ba ku izini", "Idan ba haka ba: \"Bari in kira manajana.\""] },
            { title: "Ku kare bayanan kati", bullets: ["Kada ku taɓa rubuta cikakkiyar lambar kati", "Kada ku taɓa karanta ta da murya", "Folio yana nuna lambobi kaɗan na ƙarshe kawai"] }
          ],
          tryIt: "Ku yi folio na atisaye a takarda don baƙon ƙirƙira: dare biyu a $129, haraji a matsayin layi na daban (ku yi amfani da kowane adadin ƙirƙira), ajiye mota $15 kowane dare, da cajin abincin da aka kawo ɗaki na $12 guda ɗaya da baƙon ya ce bai yi oda ba. Ku haɗa jimla, sannan ku rubuta abin da za ku faɗa game da kowane layi da yadda za ku magance cajin abincin.",
          youCanNow: "karanta folio layi-layi, bayyana kowane caji, da magance cajin da aka yi tambaya a kai cikin natsuwa bisa dokokin otal.",
          quickCheck: [
            { objective: "O3", q: "Mene ne folio?", options: ["Makullin ɗakin baƙo", "Lissafin kuɗin baƙo mai caji da biyan kuɗi", "Jerin dokokin otal", "Jadawalin tsaftace ɗakuna"], answer: 1, why: "Folio yana jera kowane cajin ɗaki, haraji, ƙarin caji da biyan kuɗi na zaman." },
            { objective: "O3", q: "Baƙo ya yi tambaya game da cajin da ba a ba ku izinin cire shi ba. Me za ku ce?", options: ["\"Kai, dole ka biya shi.\"", "\"Zan goge shi kawai.\"", "\"Bari in kira manajana don mu warware wannan.\"", "\"Ka kira bankinka.\""], answer: 2, why: "Kiran manaja yana sa ku natsu kuma ku kasance cikin dokoki, kuma baƙon ya sami amsa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Aiki a teburin karɓar baƙi",
        questions: [
          { objective: "O1", q: "Wane ma'aikaci ne ke duba cajin ranar cikin dare kuma ya rufe ranar kasuwanci?", options: ["Mai binciken lissafin dare (night auditor)", "Mai tsaftace ɗakuna", "Mai dafa abinci", "Mai ajiye motoci (valet)"], answer: 0, why: "Mai binciken lissafin dare yana daidaita cajin ranar da biyan kuɗi kuma yana rufe ranar." },
          { objective: "O1", q: "A ina za ku duba sabbin bayanai game da takardar shaidar START CFDR?", options: ["Wani rubutu a kafafen sada zumunta", "Aboki da ya ji labarinta", "Duk shafin da ke sayar da satifiket", "Shafin hukuma na AHLEI"], answer: 3, why: "AHLEI ce ke ba da CFDR, don haka shafinta na hukuma yana da sabbin bayanai." },
          { objective: "O2", q: "Baƙo a lokacin shiga ya tambaya, \"Wane ɗaki ne nawa?\" a harabar otal mai cunkoso. Me za ku yi?", options: ["Ku faɗi lambar da ƙarfi", "Ku nuna lambar da aka rubuta a kan ambulan makulli", "Ku ƙi faɗa masa", "Ku rubuta ta a allon harabar otal"], answer: 1, why: "Nuna lambar da aka rubuta yana faɗa wa baƙon ba tare da faɗa wa kowa ba." },
          { objective: "O2", q: "Me yasa kuke bayyana hold na kati a lokacin shiga?", options: ["Don baƙon ya san cewa an riƙe wani adadi don zaman da ƙarin caji, ba a caje shi a matsayin na ƙarshe ba", "Don baƙon ya biya sau biyu", "Domin shi ne lissafin ƙarshe", "Hold sirri ne kuma bai kamata a bayyana shi ba"], answer: 0, why: "Bayani a sarari yana hana mamaki da ƙorafi idan baƙi suka ga hold a katinsu." },
          { objective: "O3", q: "Folio yana nuna ajiye mota na dare uku, amma baƙon ya zauna dare biyu. Mene ne mataki na farko mafi kyau?", options: ["Ku yi watsi da shi", "Ku faɗa wa baƙon cewa bai yi daidai ba", "Ku duba shi tare ku gyara shi ko ku kira manaja bisa dokoki", "Ku caje wani dare don ya yi daidai"], answer: 2, why: "Dubawa tare da bin dokokin gyara yana yi wa baƙon adalci." }
        ]
      }
    },
    {
      name: "Babi na 2: Matsaloli, sirri da sauyin aikinku",
      lessons: [
        {
          title: "Warware matsalolin baƙi, ko da otal ya cika",
          objectives: ["O4"],
          minutes: 5,
          goal: "Warware matsalar baƙo da neman gafara, zaɓuɓɓuka biyu da rubutaccen bayanin biyo baya.",
          text: [
            "Abubuwa suna lalacewa a otal: ɗaki bai shirya ba, na'urar sanyaya ɗaki tana ƙara, ajiyar ɗaki ta ɓace. Baƙon ya gaji kuma yana son gyara. Aikinku shi ne ku natsu, ku ɗauki matsalar a matsayin taku, kuma ku ba da zaɓuɓɓuka.",
            "Ku yi amfani da matakai huɗu: ku saurara ba tare da katse magana ba, ku nemi gafara (\"Yi haƙuri, ba irin wannan zaman muke so muku ba\"), ku ba da aƙalla zaɓuɓɓuka biyu (wani ɗaki, gyara kafin wani lokaci, tayin manaja), sannan ku bi diddigi kuma ku rubuta shi a littafin sauyin aiki (shift log) don sauyi na gaba ya sani.",
            "Wani lokaci otal ya karɓi ajiyar ɗaki fiye da ɗakunan da yake da su (overbooked), kuma baƙo mai ajiyar ɗaki ba shi da ɗaki. Otal-otal suna iya \"walk\" baƙon: wato su yi masa ajiyar ɗaki a wani otal na kusa. Ku bi dokar walk ta otal ɗinku kuma ku kira manaja. Kada ku taɓa alƙawarin kuɗi ko darare kyauta da ba a ba ku izinin bayarwa ba.",
            "Idan baƙo ya yi ihu, ya yi barazana ko ya zama mai haɗari, ba dole ne ku magance shi ku kaɗai ba. Ku koma baya kuma ku kira manajanku ko jami'an tsaro."
          ],
          steps: ["Ku saurari dukkan matsalar ba tare da katse magana ba.", "Ku nemi gafara kuma ku gode wa baƙon da ya faɗa muku.", "Ku ba da aƙalla zaɓuɓɓuka biyu da aka ba ku izinin bayarwa.", "Ku yi abin da kuka yi alƙawari, ko ku kira manaja.", "Ku bi diddigi da baƙon kuma ku rubuta shi a littafin sauyin aiki."],
          words: [["Overbooked (ajiyar ɗaki fiye da kima)", "lokacin da otal yake da ajiyar ɗaki fiye da ɗakuna."], ["Walking a guest (tura baƙo wani otal)", "yi wa baƙon da bai sami ɗaki ajiyar ɗaki a wani otal na kusa, bisa dokar otal."], ["Littafin sauyin aiki (shift log)", "rubutaccen littafi ko na kwamfuta inda teburin karɓar baƙi ke rubuta matsaloli da saƙonni don sauyi na gaba."]],
          slides: [
            { title: "Matakai huɗu don kowace matsala", bullets: ["Ku saurara ba tare da katse magana ba", "Ku nemi gafara ku gode musu", "Ku ba da aƙalla zaɓuɓɓuka biyu", "Ku bi diddigi ku rubuta shi a littafi"] },
            { title: "Idan otal ya cika", bullets: ["Otal-otal suna iya \"walk\" baƙo zuwa otal na kusa", "Ku bi dokar walk ku kira manaja", "Kada ku taɓa alƙawarin abin da ba za ku iya bayarwa ba"] },
            { title: "Idan baƙo ya zama mai haɗari", bullets: ["Ku koma baya daga teburin", "Ku kira manajanku ko jami'an tsaro", "Ba ku magance barazana ku kaɗai"] }
          ],
          tryIt: "Ku rubuta abin da za ku faɗa wa wannan baƙon: \"Na yi ajiyar ɗaki mai gadaje biyu kuma kun ba ni ɗaki mai babban gado ɗaya. Yarana suna tare da ni.\" Ku rubuta neman gafararku, zaɓuɓɓuka biyu da za ku iya bayarwa, da bayanin layi ɗaya da za ku sa a littafin sauyin aiki. Sannan ku faɗe shi da babbar murya.",
          youCanNow: "kwantar da hankalin baƙo mai fushi, ba da zaɓuɓɓuka biyu, bin diddigi da rubuta matsalar a littafi, da sanin lokacin kiran manaja.",
          quickCheck: [
            { objective: "O4", q: "Ɗakin baƙo bai shirya ba. Wace amsa ce ta bi matakai huɗun?", options: ["\"Ba laifina ba ne, ka dawo anjima.\"", "\"Ɗakuna ba sa shiryawa a kan lokaci.\"", "\"Ga mako guda kyauta.\"", "\"Yi haƙuri. Zan iya ajiye kayanka in kira ka kafin ƙarfe 3 na rana, ko in duba wani ɗaki yanzu.\""], answer: 3, why: "Tana neman gafara kuma tana ba da zaɓuɓɓuka biyu da ma'aikacin zai iya bayarwa." },
            { objective: "O4", q: "Otal ya karɓi ajiyar ɗaki fiye da kima kuma baƙo ba shi da ɗaki. Me za ku yi?", options: ["Ku bi dokar walk ku kira manaja", "Ku faɗa wa baƙon ya kwana a harabar otal", "Ku yi alƙawarin mayar da kuɗin wata guda", "Ku soke ɗakin wani baƙo ba tare da tambaya ba"], answer: 0, why: "Tura baƙo wani otal bisa doka, tare da manaja, ita ce hanyar da otal-otal ke magance ajiyar ɗaki fiye da kima cikin adalci." }
          ]
        },
        {
          title: "Sirrin baƙi, makullai da tsaro",
          objectives: ["O5"],
          minutes: 6,
          goal: "Amsa yanayin sirri, makulli da tsaro bisa dokokin otal.",
          text: [
            "Sirrin baƙi yana kare mutane. Kada ku taɓa faɗa wa mai kira ko baƙo mai ziyara ko wani yana zaune a otal ko wane ɗaki yake. Ku ce \"Ba zan iya bayar da bayanan baƙi ba, amma zan iya haɗa ka da ɗakin idan baƙon yana zaune a nan\" ko ku karɓi saƙo. Kada ku taɓa ba da makulli ga wanda sunansa ba ya kan ɗakin ba tare da tsarin tantance shaida na otal ba.",
            "Katin makulli: ku duba katin shaida kafin ku yi sabon makulli, kada ku taɓa barin katin makulli ko na'urar makulli inda baƙi za su iya kai hannu, kuma ku ba da rahoton ɓatan makullin buɗe kowane ɗaki (master key) nan take.",
            "Dabbobin hidima (service animals): ƙarƙashin ADA, idan ba a gane a fili ba, ma'aikata suna iya yin tambayoyi biyu kawai: shin ana buƙatar karen saboda nakasa, kuma wane aiki ko hidima aka horar da shi ya yi. Ba za ku iya neman takardu ba ko ku caji kuɗin dabbar gida ga dabbar hidima ba.",
            "Ku lura da alamun safarar mutane (human trafficking), kamar mutumin da ake ganin wani yana sarrafa shi, an koya masa abin da zai faɗa, ko yana tsoro. Kada ku fuskanci kowa. Ku faɗa wa manajanku kuma ku bi dokar otal; kuna iya ba da rahoto ga National Human Trafficking Hotline (layin wayar ƙasa kan safarar mutane) a 1-888-373-7888. A kowace gaggawa (gobara, rashin lafiya, tashin hankali), ku fara kiran 911 (ko lambar gaggawa ta yankinku), sannan manajanku."
          ],
          steps: ["Kada ku taɓa tabbatar da cewa baƙo yana zaune ko ku faɗi lambar ɗaki.", "Ku yi tayin haɗa kiran da ɗakin ko ku karɓi saƙo.", "Ku duba katin shaida kafin ku yi kowane sabon makulli.", "Don dabbar hidima, ku yi tambayoyi biyu da aka yarda da su kawai idan ya cancanta.", "Ku ba da rahoton alamun safarar mutane ga manajanku; kada ku fuskanci kowa.", "A gaggawa, ku fara kiran 911, sannan manajanku."],
          words: [["Kula da makullai (key control)", "dokokin yin makullan ɗaki, ajiye su da bin diddigin su don mutanen da suka dace kaɗai su shiga."], ["ADA", "Americans with Disabilities Act, dokar Amurka da ke kare masu nakasa, har da amfani da dabbobin hidima."], ["Dabbar hidima (service animal)", "ƙarƙashin ADA, karen da aka horar ya yi aiki ko hidima ga mai nakasa."], ["Safarar mutane (human trafficking)", "amfani da ƙarfi, yaudara ko barazana don tilasta wani ya yi aiki ko ayyukan jima'i."]],
          slides: [
            { title: "Ku kare sirrin baƙi", bullets: ["Kada ku taɓa tabbatar da wanda ke zaune", "Kada ku taɓa faɗin lambar ɗaki", "\"Zan iya haɗa ka da ɗakin ko in karɓi saƙo.\""] },
            { title: "Kula da makullai", bullets: ["Ku duba katin shaida kafin kowane sabon makulli", "Ku ajiye makullai da na'urar makulli nesa da hannun baƙi", "Ku ba da rahoton ɓatan master key nan take"] },
            { title: "Dabbobin hidima (ADA)", bullets: ["Ku tambaya kawai: ana buƙatar sa saboda nakasa?", "Kuma: wane aiki ko hidima aka horar da shi ya yi?", "Babu takardu, babu kuɗin dabbar gida ga dabbar hidima"] },
            { title: "Alamun safarar mutane da gaggawa", bullets: ["Ku lura da wanda ake sarrafawa, aka koya masa magana ko yake tsoro", "Kada ku fuskanci kowa; ku faɗa wa manajanku", "Layin waya: 1-888-373-7888", "Gaggawa: ku fara kiran 911, sannan manajanku"] }
          ],
          sources: [
            { name: "ADA.gov: ADA Requirements: Service Animals (dokokin ADA kan dabbobin hidima)", url: "https://www.ada.gov/resources/service-animals-2010-requirements/" },
            { name: "DHS Blue Campaign: Indicators of Human Trafficking (alamun safarar mutane)", url: "https://www.dhs.gov/blue-campaign/indicators-human-trafficking" },
            { name: "AHLA Foundation: No Room For Trafficking (horo kyauta ga ma'aikatan otal)", url: "https://www.ahlafoundation.org/nrft/" }
          ],
          tryIt: "Ku rubuta amsarku ga kowanne: (1) Wani mai kira ya ce \"Ka haɗa ni da matata, Jane Lee. Wane ɗaki take?\" (2) Wani mutum ba tare da katin shaida ba ya ce ya ɓatar da makullin ɗaki 305. (3) Wani baƙo yana da kare; ba ku tabbata ko dabbar hidima ce ba. Sannan, idan za ku iya, ku ɗauki horon kyauta na minti 30 \"Your Role in Preventing Human Trafficking\" (Rawarku wajen Hana Safarar Mutane) da aka haɗa daga shafin No Room For Trafficking na AHLA Foundation.",
          youCanNow: "kare sirrin baƙi a waya da a teburi, kula da makullai, magance dabbar hidima bisa ADA, da ba da rahoton alamun safarar mutane da gaggawa ta hanyar da ta dace.",
          quickCheck: [
            { objective: "O5", q: "Wani mai kira ya tambaya wane ɗaki wani baƙo yake. Me za ku ce?", options: ["Ku ba da lambar ɗakin", "\"Ba zan iya bayar da bayanan baƙi ba, amma zan iya haɗa ka ko in karɓi saƙo.\"", "\"Ta tafi awa ɗaya da ta wuce.\"", "\"Ka sake kira idan na gama aiki.\""], answer: 1, why: "Kada ku taɓa tabbatar da cewa baƙo yana zaune ko ku faɗi lambar ɗaki; haɗawa ko karɓar saƙo yana kare baƙon." },
            { objective: "O5", q: "Baƙo yana da kare kuma ba a gane a fili cewa dabbar hidima ce ba. Me za ku iya tambaya?", options: ["Takardun shaidar karen", "Wace nakasa baƙon yake da ita", "Ya fara biyan kuɗin dabbar gida", "Ko ana buƙatar karen saboda nakasa da wane aiki aka horar da shi ya yi"], answer: 3, why: "ADA tana yarda da waɗannan tambayoyi biyu kawai; babu takardu kuma babu kuɗin dabbar gida ga dabbar hidima." }
          ]
        },
        {
          title: "Jerin abubuwan yi na sauyin aikinku da shirin aikinku",
          objectives: ["O1", "O2"],
          minutes: 5,
          goal: "Rubuta jerin abubuwan yi na sauyin aiki a teburin karɓar baƙi da shirin kwanaki 30 zuwa aikin teburin karɓar baƙi.",
          text: [
            "Ma'aikatan teburin karɓar baƙi nagari suna aiki da jerin abubuwan yi. A farkon sauyin aiki: ku zo da wuri, ku karanta littafin sauyin aiki, ku ƙirga aljihun kuɗinku (cash drawer) tare da manaja ko bisa tsarin otal, kuma ku duba baƙin da za su shigo yau, waɗanda za su tafi, da ɗakunan da suka shirya.",
            "Lokacin sauyin aiki: ku gaishe kowane baƙo, ku shigar da su da sallamar su da matakai iri ɗaya, ku amsa waya kafin ƙara ta uku idan za ku iya, ku tsaftace teburin kuma ku kiyaye makullai. A ƙarshe: ku gama ayyukan da ba a gama ba, ku sake ƙirga aljihun kuɗinku, kuma ku rubuta duk abin da sauyi na gaba ya kamata ya sani a littafin.",
            "Yanzu ku tsara hanyarku. Ku zaɓi otal uku kusa da ku, ku yi atisayen rubutun shigar da baƙo da mutum na gaske, kuma ku yanke lokacin da za ku duba shafin AHLEI CFDR ko ku tambayi mai ɗaukar aiki ko yana biyan kuɗin horo. Ku sa ranaku na gaske ga kowane mataki. Ku kawo jerin abubuwan yinku da rubutunku zuwa hirar neman aiki: yana nuna cewa kun riga kun san aikin."
          ],
          steps: ["Ku rubuta ayyukan farkon sauyin aiki.", "Ku rubuta ayyukan lokacin sauyin aiki.", "Ku rubuta ayyukan ƙarshen sauyin aiki.", "Ku rubuta rubutun shigar da baƙo tare da dokar sirri a ciki.", "Ku rubuta shirin kwanaki 30 mai ranaku: otal uku, atisaye, da duba takardar shaida."],
          words: [["Aljihun kuɗi (cash drawer ko bank)", "tsabar kuɗin da ma'aikacin teburin karɓar baƙi ke da alhakinsa lokacin sauyin aiki; ana ƙirga shi a farko da ƙarshe."], ["Masu shigowa da masu tafiya (arrivals and departures)", "jerin baƙin da ke shigowa da masu sallama yau."], ["Miƙa sauyin aiki (shift handoff)", "miƙa ayyukan da ba a gama ba da bayanai ga sauyi na gaba."]],
          slides: [
            { title: "Farkon sauyin aiki", bullets: ["Ku zo da wuri ku karanta littafin sauyin aiki", "Ku ƙirga aljihun kuɗi bisa tsarin otal", "Ku duba masu shigowa, masu tafiya da ɗakunan da suka shirya"] },
            { title: "Lokacin sauyin aiki", bullets: ["Matakan shigar da baƙo da sallama iri ɗaya kowane lokaci", "Ku amsa waya da sauri da ladabi", "Ku tsaftace teburin ku kiyaye makullai"] },
            { title: "Ƙarshen sauyin aiki", bullets: ["Ku gama ayyukan da ba a gama ba", "Ku sake ƙirga aljihun kuɗi", "Ku rubuta abin da sauyi na gaba ya kamata ya sani"] },
            { title: "Shirinku na kwanaki 30", bullets: ["Otal uku da za ku nemi aiki, tare da ranaku", "Ku yi atisayen rubutunku da mutum na gaske", "Ku duba shafin AHLEI CFDR ko ku tambaya game da horo"] }
          ],
          tryIt: "Ku gina kayan aikinku a takarda ko a takardar kwamfuta kyauta: jerin abubuwan yi na sauyin aikinku (farko, tsakiya, ƙarshe), rubutun shigar da baƙo a matakai bakwai, da shirin kwanaki 30 mai ranaku na gaske. Ku nemi wani ya yi kamar baƙo yayin da kuke karanta rubutun.",
          youCanNow: "nuna wa manajan ɗaukar aiki jerin abubuwan yi na sauyin aiki a teburin karɓar baƙi, rubutun shigar da baƙo da shiri mai ranaku zuwa aikin da takardar shaida.",
          quickCheck: [
            { objective: "O1", q: "Wanne ya dace a shirin kwanaki 30 na neman aikin teburin karɓar baƙi?", options: ["\"Wata rana zan nemi aiki\"", "\"Zan nemi aiki a otal uku masu suna kafin ranar 15 kuma in yi atisayen rubutuna ranar 10\"", "\"Zan biya wani don aiki tabbatacce\"", "\"Zan jira otal ya kira ni\""], answer: 1, why: "Shiri na gaske yana ambaton takamaiman matakai tare da ranaku." },
            { objective: "O2", q: "Mene ne aiki mai kyau a farkon sauyin aiki?", options: ["Karanta littafin sauyin aiki da duba masu shigowa yau", "Barin aljihun kuɗi ba a ƙirga ba", "Kashe wayoyi", "Ba da makullai na ajiya don a ajiye lokaci"], answer: 0, why: "Karanta littafin da duba masu shigowa yana faɗa muku abin da sauyin aiki ke buƙata kafin baƙi su iso." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Matsaloli, sirri da sauyin aikinku",
        questions: [
          { objective: "O4", q: "Me ya kamata ku yi koyaushe bayan kun warware matsalar baƙo?", options: ["Ku manta da ita", "Ku saka ta a intanet", "Ku bi diddigi ku rubuta ta a littafin sauyin aiki", "Ku caji baƙon ƙari"], answer: 2, why: "Bin diddigi da rubutawa yana sa sauyi na gaba ya sani kuma yana nuna wa baƙon cewa kuna kulawa." },
          { objective: "O4", q: "Wani baƙo ya fara ihun barazana a teburi. Me za ku yi?", options: ["Ku mayar masa da ihu", "Ku koma baya ku kira manajanku ko jami'an tsaro", "Ku tsallake teburin", "Ku yi watsi da shi ku ci gaba da rubutu"], answer: 1, why: "Ba ku magance barazana ku kaɗai; komawa baya da neman taimako yana kare kowa." },
          { objective: "O5", q: "Wani mai ziyara ba tare da katin shaida ba ya ce ya ɓatar da makullin ɗaki 305. Me za ku yi?", options: ["Ku yi masa makulli da sauri", "Ku ba shi master key", "Ku faɗa masa wanda ke cikin 305", "Ku bi tsarin tantance shaida; babu makulli ba tare da shi ba"], answer: 3, why: "Kula da makullai yana nufin duba katin shaida kafin kowane sabon makulli, don baƙi da ba a sani ba kada su shiga ɗakuna." },
          { objective: "O5", q: "Wani baƙo ya faɗi a harabar otal. Mene ne matakinku na farko?", options: ["Ku kira 911 (ko lambar gaggawa ta yankinku), sannan manajanku", "Ku gama shigar da baƙo na gaba", "Ku saka shi a intanet", "Ku jira ku gani ko zai tashi"], answer: 0, why: "A kowace gaggawar rashin lafiya, ku fara kiran 911; sannan ku faɗa wa manajanku." },
          { objective: "O5", q: "Kun lura da wani matashi da ake ganin wani babba yana sarrafa shi kuma ya koya masa abin da zai faɗa. Me za ku yi?", options: ["Ku fuskanci babban mutumin", "Ku tambayi matashin da ƙarfi ko ana safarar sa", "Kada ku fuskanci kowa; ku faɗa wa manajanku ku bi dokar otal", "Ku yi watsi da shi"], answer: 2, why: "Fuskantar mutane yana iya jefa su cikin haɗari; ku ba da rahoto ga manajanku da layin waya da ya dace." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ayyukan Otal da Karɓar Baƙi: Teburin Karɓar Baƙi da Hidimar Baƙi",
    questions: [
      { objective: "O1", q: "Wanne ne babban aikin ma'aikacin teburin karɓar baƙi?", options: ["Gyara famfunan ɗaki", "Karɓar ajiyar ɗaki da amsa waya", "Wanke kayan wankin otal", "Dafa abincin da ake kawo ɗaki"], answer: 1, why: "Ajiyar ɗaki da waya aikin teburin karɓar baƙi ne; sauran na wasu ƙungiyoyi ne." },
      { objective: "O1", q: "Wa ke ba da takardar shaidar START Certified Front Desk Representative (CFDR)?", options: ["American Hotel & Lodging Educational Institute (AHLEI)", "IRS (hukumar haraji ta Amurka)", "DMV na jiharku (ofishin motoci)", "Kowane baƙon otal"], answer: 0, why: "AHLEI ce ke ba da kwas da jarabawar CFDR." },
      { objective: "O1", q: "Wani matashi yana son aikin teburin karɓar baƙi. A ina zai duba waɗanne ayyuka da sa'o'i aka yarda da su?", options: ["Tsammanin aboki", "Kowace tallar aiki", "dol.gov/youthrules da ofishin ƙwadago na jiharsa", "Babu inda; dokokin matasa iri ɗaya ne ko'ina"], answer: 2, why: "Dokokin aikin matasa sun dogara da shekaru da jiha, don haka a duba shafukan hukuma." },
      { objective: "O1", q: "Me otal-otal ke fara nema a sabon ma'aikacin teburin karɓar baƙi?", options: ["Shekaru na aikin otal kawai", "Digirin jami'a kawai", "Mallakar mota kawai", "Mutum mai fara'a, amintacce, mai kulawa da kuɗi da makullai"], answer: 3, why: "Otal-otal sau da yawa suna horarwa a wurin aiki kuma suna ɗaukar aiki saboda hali da amincewa." },
      { objective: "O2", q: "Mene ne tsarin da ya dace don fara shigar da baƙo?", options: ["Ku yi makulli, sannan ku gaishe baƙon", "Ku gaishe, ku nemo ajiyar ɗaki, ku duba katin shaida", "Ku karɓi kuɗi, sannan ku gano ko su wane ne", "Ku faɗi lambar ɗaki, sannan ku gaishe"], answer: 1, why: "Ku fara gaishewa, sannan ku nemo ajiyar ɗaki ku daidaita katin shaida." },
      { objective: "O2", q: "Mene ne property management system (PMS)?", options: ["Tsarin kwamfuta na otal don ajiyar ɗaki, ɗakuna da lissafin kuɗi", "Jadawalin tsaftacewa", "Manhajar ajiye mota", "Wani irin katin makulli"], answer: 0, why: "PMS yana rubuta ajiyar ɗaki, shigar da baƙo, lissafin kuɗi da sallama." },
      { objective: "O2", q: "Ta yaya za ku faɗa wa baƙo lambar ɗakinsa a lokacin shiga?", options: ["Ku sanar da ita ga harabar otal", "Ku faɗe ta da ihu yayin da yake tafiya", "Ku rubuta ta a kan ambulan makulli ku nuna ta", "Ku saka ta a allo"], answer: 2, why: "Rubutawa da nunawa yana kiyaye sirrin lambar ɗakin." },
      { objective: "O2", q: "Me ya kamata ku bayyana kafin baƙon ya bar teburin?", options: ["Adireshin gidan manaja", "Lambobin ɗakin sauran baƙi", "Lambobin ƙararrawar otal", "Wi-Fi, karin kumallo da lokacin sallama"], answer: 3, why: "Waɗannan abubuwan farko suna taimaka wa baƙon kuma suna rage kiran waya zuwa teburin." },
      { objective: "O3", q: "Wanne ne ƙarin caji (incidental)?", options: ["Ajiye mota ko abincin da aka kawo ɗaki", "Kuɗin hayar gidan baƙon", "Kuɗin wutar lantarki na otal", "Albashinku"], answer: 0, why: "Ƙarin caji abubuwa ne na ƙari lokacin zama, kamar ajiye mota da abinci." },
      { objective: "O3", q: "Ta yaya cikakkiyar lambar kati za ta bayyana idan kuna magana da baƙo game da lissafin kuɗi?", options: ["A karanta ta da murya gaba ɗaya", "A rubuta ta a ƙaramar takarda mai manne", "Ba a taɓa karanta ta ko rubuta ta; lambobi kaɗan na ƙarshe kawai", "A tura ta ga baƙon ta tes"], answer: 2, why: "Kare lambobin kati yana hana zamba; folio yana nuna lambobi kaɗan na ƙarshe kawai." },
      { objective: "O3", q: "Baƙo ya ce cajin abincin da aka kawo ɗaki ba nasa ba ne. Ba a ba ku izinin cire caji ba. Me za ku yi?", options: ["Ku yi gardama har sai ya biya", "Ku goge shi duk da haka", "Ku faɗa masa ya kai ƙara ga bankinsa", "Ku duba shi tare da shi ku kira manajanku"], answer: 3, why: "Natsuwa da kiran manaja yana bin dokoki kuma yana sa baƙon ya sami amsa." },
      { objective: "O3", q: "Mene ne sallama cikin sauri (express check-out)?", options: ["Sallama ba tare da tsayawa a teburi ba, ta waya, talabijin ko manhaja", "Tafiya ba tare da biya ba", "Lif mai sauri", "Sallama da tsakar dare kawai"], answer: 0, why: "Sallama cikin sauri tana bar baƙi su tafi ba tare da jira a layi ba." },
      { objective: "O4", q: "Mene ne matakai huɗu don matsalar baƙo?", options: ["Watsi, jira, ɗora laifi, tafiya", "Saurara, neman gafara, ba da zaɓuɓɓuka, bin diddigi da rubutawa", "Gardama, mayar da kuɗi, neman gafara, mantawa", "Turawa, katse waya, rubutawa, maimaitawa"], answer: 1, why: "Saurara, neman gafara, ba da zaɓuɓɓuka da bin diddigi suna warware yawancin matsaloli." },
      { objective: "O4", q: "Mene ne ma'anar \"walking a guest\"?", options: ["Raka baƙo zuwa lif", "Fitar da karen baƙo yawo", "Yi wa baƙo ajiyar ɗaki a otal na kusa idan naku ya karɓi ajiya fiye da kima", "Neman baƙo ya tafi"], answer: 2, why: "Otal-otal suna tura baƙi wani otal bisa doka idan sun karɓi ajiyar ɗaki fiye da kima." },
      { objective: "O4", q: "Wani baƙo yana son mako guda kyauta saboda talabijin bai yi aiki ba. Ba a ba ku izinin bayar da hakan ba. Me za ku yi?", options: ["Ku yi alƙawari duk da haka", "Ku faɗa masa yana ƙarya", "Ku katse masa waya", "Ku nemi gafara, ku ba da zaɓuɓɓukan da aka ba ku izini, ku kira manaja don duk wani ƙari"], answer: 3, why: "Kada ku taɓa alƙawarin abin da ba za ku iya bayarwa ba; ku ba da abin da za ku iya ku kira manaja." },
      { objective: "O4", q: "Me yasa ake rubuta matsalolin baƙi a littafin sauyin aiki?", options: ["Don sauyi na gaba ya sani kuma ya bi diddigi", "Don ɗora wa baƙon laifi", "Domin baƙi suna karanta shi", "Ba a buƙata"], answer: 0, why: "Littafin yana isar da muhimman bayanai ga sauyi na gaba." },
      { objective: "O5", q: "Wani a teburi ya tambaya, \"Shugabana, Mr. Diaz, yana zaune a nan?\" Me za ku ce?", options: ["\"Eh, ɗaki 410.\"", "\"Ba zan iya bayar da bayanan baƙi ba, amma zan iya karɓar saƙo.\"", "\"Ya shigo jiya.\"", "\"Bari in nemo adireshin gidansa.\""], answer: 1, why: "Ba ku taɓa tabbatar da cewa baƙo yana zaune; karɓar saƙo yana kare shi." },
      { objective: "O5", q: "Ƙarƙashin ADA, me BA za ku iya yi da dabbar hidima ba?", options: ["Tambaya ko ana buƙatar karen saboda nakasa", "Tambaya wane aiki aka horar da shi ya yi", "Caji kuɗin dabbar gida ko neman takardu", "Maraba da baƙon"], answer: 2, why: "ADA ta hana kuɗin dabbar gida da neman takardu ga dabbobin hidima." },
      { objective: "O5", q: "Mece ce lambar National Human Trafficking Hotline (layin wayar ƙasa kan safarar mutane)?", options: ["411", "1-800-555-0000", "Lambar teburin karɓar baƙi na otal", "1-888-373-7888"], answer: 3, why: "1-888-373-7888 ita ce National Human Trafficking Hotline da DHS ta jera." },
      { objective: "O5", q: "Ƙararrawar gobara ta yi ƙara kuma kuna jin warin hayaƙi. Me za a fara?", options: ["Ku kira 911 (ko lambar gaggawa ta yankinku) ku bi shirin gaggawa na otal", "Ku gama shigar da baƙon da kuke yi", "Ku saka bidiyo", "Ku jira baƙo ya yi ƙorafi"], answer: 0, why: "A gaggawa, ku fara kiran 911 kuma ku bi shirin gaggawa na otal." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 6, 8, 10, 12, 13, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Jerin abubuwan yi na sauyin aiki", objective: "O1", notYet: "Jerin ba shi da farko, tsakiya ko ƙarshen sauyin aiki.", meets: "Yana da ayyukan farko, tsakiya da ƙarshe, har da littafin sauyin aiki da ƙirga aljihun kuɗi.", exceeds: "Yana kuma ƙara ayyukan kula da makullai da waya, kuma ya dace a shafi ɗaya a sarari." },
      { name: "Rubutun shigar da baƙo", objective: "O2", notYet: "Akwai matakan da suka ɓace ko rubutun yana faɗin lambar ɗaki da murya.", meets: "Dukkan matakai bakwai a tsari, tare da rubuta lambar ɗaki da nuna ta, ba faɗin ta ba.", exceeds: "An karanta shi da murya ga abokin atisaye cikin ƙasa da minti uku, tare da gaisuwa da rufewa masu daɗi." },
      { name: "Folio da sallama", objective: "O3", notYet: "Ba zai iya bayyana caji ba, ko zai yi gardama game da cajin da aka yi tambaya a kai.", meets: "Yana bayyana kowane caji a folio na atisaye kuma yana cewa a gyara kuskure a fili ko a kira manaja.", exceeds: "Yana kuma bayyana hold na kati da kalmomi masu sauƙi kuma ba ya taɓa nuna cikakkiyar lambar kati." },
      { name: "Warware matsala", objective: "O4", notYet: "Amsar tana gardama, tana ɗora laifi ko tana alƙawarin abin da ma'aikacin ba zai iya bayarwa ba.", meets: "Yana neman gafara, yana ba da aƙalla zaɓuɓɓuka biyu da aka yarda da su kuma yana rubuta bayani a littafin sauyin aiki.", exceeds: "Yana kuma faɗin lokacin kiran manaja da yadda zai bi diddigi da baƙon." },
      { name: "Sirri da tsaro", objective: "O5", notYet: "Yana faɗin lambar ɗaki, yana ba da makulli ba tare da katin shaida ba, ko zai fuskanci wanda ake zargi da safarar mutane.", meets: "Yana kare bayanan baƙi, yana duba katin shaida don makullai, kuma yana ba da rahoton gaggawa da alamun safarar mutane yadda ya dace.", exceeds: "Yana kuma magance dabbar hidima da tambayoyi biyu na ADA kawai kuma ya ɗauki horon kyauta kan safarar mutane." },
      { name: "Shirin kwanaki 30", objective: "O1", notYet: "Babu ranaku, ko babu otal masu suna.", meets: "Otal uku masu suna, ranar atisaye da ranar duba shafin CFDR ko tambaya game da horo.", exceeds: "Yana kuma jera wanda zai zama mai shaida masa (reference) da yadda zai riƙa zuwa kowane sauyin aiki." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi aƙalla ayyukan otal ko karɓar baƙi uku cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da aka ɗauka aiki a teburin karɓar baƙi, hidimar baƙi ko wani aikin otal cikin kwanaki 90",
      "Masu koyo da suka fara takardar shaidar teburin karɓar baƙi kamar AHLEI CFDR cikin kwanaki 90",
      "Otal-otal abokan aiki sun ce sabbin ma'aikata suna buƙatar ƙarancin horon farko na teburin karɓar baƙi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet, ko darussan a takarda",
      "Takarda da alƙalami don folio na atisaye, ambulan makulli da jerin abubuwan yi na sauyin aiki",
      "Abokin atisaye da zai yi kamar baƙo (aboki, ɗan iyali ko abokin aji)",
      "Kusan minti 75 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku shirya teburin karɓar baƙi na kwaikwayo da tebur, ambulan makulli na takarda da folio na atisaye; masu koyo su riƙa canjawa tsakanin ma'aikaci da baƙo.",
      "Ku yi amfani da sunayen baƙi, lambobin kati da lambobin ɗaki na ƙirƙira kaɗai a duk atisaye.",
      "Ku gayyaci manajan otal na yankinku ya kalli wasan kwaikwayon shigar da baƙo kuma ya yi magana game da yadda yake ɗaukar aiki.",
      "Shirye-shiryen matasa: ku duba dokokin jiha kan sa'o'in aikin matasa kafin a sa kowa aiki; shirye-shiryen masu dawowa gida: ku nuna wa masu koyo masu ɗaukar aiki da aka san suna ba da dama cikin adalci (fair-chance hiring).",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
