"use strict";

// Koach Learn course, Hausa (ha) translation of shared/cybersecurity-analyst-entry.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// The made-up practice log, exam codes, Windows event numbers and menu names stay as written in English.

const SEC = { name: "Takardar shaidar CompTIA Security+ (shafin hukuma)", url: "https://www.comptia.org/en-us/certifications/security/" };
const V7 = { name: "Bayanan jarabawar CompTIA Security+ V7 (SY0-701)", url: "https://www.comptia.org/en-us/certifications/security/v7/" };
const V8 = { name: "Bayanan jarabawar CompTIA Security+ V8 (SY0-801)", url: "https://www.comptia.org/en-us/certifications/security/v8/" };
const CISA = { name: "CISA: Kyawawan hanyoyin tsaron intanet (cybersecurity)", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" };

module.exports = {
  id: "cybersecurity-analyst-entry-ha",
  lang: "ha",
  translationOf: "cybersecurity-analyst-entry",
  category: "Workforce Development",
  name: "Tsaron Intanet na Matakin Farko (Shirin Jarabawar CompTIA Security+)",
  skills: "Amfani da CIA triad, Auna haɗari, Zaɓar matakan tsaro, Ƙarfafa tsaron kwamfuta, Duba log, Bin matakan amsa wa matsalar tsaro",
  outcome: "tunani da aiki kamar mai nazarin tsaro na matakin farko: rarraba matsala bisa CIA triad, auna haɗari ku zaɓi matakin tsaro, ƙarfafa tsaron kwamfutarku, gano alamun gargaɗi a log na shiga asusu, bin matakan amsa wa matsalar tsaro, da bin shirinku mai kwanan wata don jarabawar CompTIA Security+.",
  about: [
    "Masu nazarin tsaro (security analysts) suna kare kwamfutoci, asusu da bayanan wata ƙungiya. Suna lura da alamun gargaɗi, suna duba saitunan na'urori, kuma suna ɗaukar mataki idan wani abu ya lalace. CompTIA Security+ yana ɗaya daga cikin sanannun takardun shaida (certification) don fara wannan aiki.",
    "Wannan kwas ɗin yana shirya ku don Security+. Ba ya ba ku takardar shaidar; CompTIA ne ke bayar da ita idan kun ci jarabawar. Jarabawar tana canjawa a ƙarshen 2026, don haka Darasi na 1 yana nuna muku yadda za ku zaɓi nau'in da ya dace da inda za ku duba bayanan yanzu.",
    "Duk abin da ke nan na kariya ne. Kuna yin atisaye a kwamfutarku da asusunku kaɗai, da kuma a kan log na ƙirƙira da ke cikin darussan. Kada ku taɓa gwada, bincika (scan) ko shiga tsarin kwamfutar da ba naku ba, ko wanda ba ku da izini a rubuce don amfani da shi: hakan yana iya zama laifi.",
    "Idan kun kasance sababbi a harkar tsaro, ku fara ɗaukar kwas ɗin \"Introduction to Cybersecurity\" (Gabatarwa ga Tsaron Intanet). Yana koyar da kalmomin sirri, tabbatarwa ta matakai da yawa (MFA) da zamba ta saƙo (phishing) don asusunku; wannan kwas ɗin yana ginuwa a kansa don aiki."
  ],
  finalTask: "Ku haɗa fayil ɗin farko na aikinku na tsaro (portfolio): (1) jerin duba ƙarfafa tsaro (hardening) na kwamfutarku, da ke nuna kowane saiti da kuka duba da sakamakonsa; (2) gajeren rahoton matsalar tsaro kan log na atisaye na Darasi na 5: abin da kuka gani, dalilin da yasa yake da shakku, tasirinsa a CIA da ƙimar haɗarinsa, da matakan amsa wa matsalar da za ku ɗauka; da (3) shirinku na karatu da jarabawar Security+: nau'in jarabawar da za ku yi da dalili, ranar da kuke nufi, kowane fanni (domain) da nauyinsa, da sa'o'in karatunku a kowane mako.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa da ke neman aikin tsaro na farko: masu neman aiki, tsofaffin sojoji (da yawa suna da izinin tsaro ko sun yi aikin IT), masu canja sana'a, da ma'aikatan taimakon IT da ke son ci gaba. Asalinsu ya bambanta; yawancinsu suna amfani da kwamfuta kullum amma ba su taɓa aikin tsaro ba.",
    startingPoint: "Sun san tsaron kai na asali (kalmomin sirri, MFA, phishing) ko za su iya samu daga \"Introduction to Cybersecurity\". Ba su taɓa karanta log ba, ko auna haɗari, ko bin tsarin amsa wa matsalar tsaro ba. Kaɗan ne suka san yadda aka tsara jarabawar Security+ ko cewa tana canjawa.",
    gap: "Ayyukan tsaro na farko suna sa ran halayen mai nazari: rarraba matsaloli, auna haɗari, duba saituna, karanta log da bin matakan amsa wa matsala cikin natsuwa. Masu koyo kuma suna buƙatar shiri a sarari mai kwanan wata don nau'in Security+ da ya dace, don kada su yi karatun jarabawar da ake shirin dainawa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalma ta musamman",
      "Kariya kaɗai: atisaye a na'urarku da bayanan ƙirƙira; babu bincike (scan) ko gwajin tsarin wasu mutane",
      "Na'urori: kwamfuta ɗaya ta Windows ko Mac; wasu saituna suna buƙatar asusun admin, don haka kwamfutocin ɗakin karatu ba za su nuna su ba",
      "Lokaci: darussa na minti 4 zuwa 6",
      "Jarabawar tana canjawa a ƙarshen 2026: dole masu koyo su duba comptia.org don nau'i, ranaku da farashi"
    ],
    prerequisites: "Sabawa da kwamfuta da tsaron asusu na asali. Yana da kyau a fara ɗaukar \"Introduction to Cybersecurity\" da \"Tushen Taimakon IT (Shirin Jarabawar CompTIA A+)\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku gajeren labarin matsalar tsaro", action: "rarraba wane sashe na CIA triad (sirri, ingancin bayanai ko samuwa) matsalar ke cutarwa", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Idan aka ba ku barazana ga wata ƙungiya", action: "auna haɗarinta ta yiwuwa da tasiri, da zaɓar nau'in matakin tsaro don rage ta", standard: "tare da dalilin ƙimar da kuma na matakin" },
    { id: "O3", condition: "Ta amfani da kwamfutarku ta Windows ko Mac", action: "duba da rubuta saitunan sabuntawa, firewall, antivirus, nau'in asusu, kulle allo da ɓoye bayanan faifai", standard: "an duba kowane abu kuma an rubuta duk wani gibi" },
    { id: "O4", condition: "Idan aka ba ku gajeren log na shiga asusu", action: "yi wa layukan da ke da shakku alama, da bayyana dalilin da yasa kowanne ke da shakku", standard: "kuna gano kowane maimaicin gazawar shiga da nasarar shiga mai ban mamaki da ta biyo bayansu" },
    { id: "O5", condition: "Idan aka ba ku labarin matsalar tsaro", action: "jera matakan amsa wa matsalar tsaro bisa tsari, da rubuta mataki ɗaya na aiki ga kowanne", standard: "ba tare da wani mataki ya ɓace ba, kuma an ajiye shaidu" },
    { id: "O6", condition: "Ta amfani da shafukan hukuma na CompTIA Security+", action: "rubuta shirin karatu da jarabawa da ke faɗin nau'in jarabawar da ranar da kuke nufi", standard: "ya ƙunshi kowane fanni da nauyinsa da lokacin karatu a kowane mako" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tunani kamar mai nazarin tsaro",
      lessons: [
        {
          title: "Aikin mai nazari da jarabawar Security+",
          objectives: ["O6"],
          minutes: 6,
          goal: "Zaɓi nau'in jarabawar Security+ da ya dace da ranar jarabawarku, ku jera fannoninsa.",
          text: [
            "Ayyukan tsaro na farko sun haɗa da mai nazarin tsaro (security analyst), mai nazarin SOC (cibiyar ayyukan tsaro), da mai kula da tsaro ko tsarin kwamfuta (administrator). Masu nazari suna lura da faɗakarwa (alerts) da log, suna duba cewa an saita tsarin lafiya, kuma suna taimakawa wajen amsa wa matsalolin tsaro. Da yawa suna farawa a taimakon IT sannan su ci gaba.",
            "CompTIA ne ke bayar da Security+ idan kun ci jarabawa ɗaya. Lokacin da muka duba a watan Oktoba 2026, jarabawar tana da tambayoyi har 90 cikin minti 90, na zaɓi daga amsoshi (multiple-choice) da na aiki a zahiri (performance-based). CompTIA tana ba da shawarar Network+ da kusan shekaru biyu na aikin tsaro ko kula da tsarin kwamfuta, amma ta lissafa waɗannan a matsayin ƙwarewar da ake ba da shawara, ba dole ba.",
            "Jarabawar tana canjawa. Nau'i na 7 (SY0-701) yana nan yanzu; an tsara cewa jarabawarsa ta Turanci za ta daina a ranar 11 June 2027. Ana sa ran Nau'i na 8 (SY0-801) a ranar 17 November 2026 ko kusa da ita. Idan ranar jarabawarku ta yi nisa cikin 2027, ku yi karatun V8. Idan za ku yi jarabawa nan ba da daɗewa ba, V7 zai iya dacewa. Ku duba shafukan hukuma: ranaku suna iya canjawa.",
            "Kowane nau'i yana da fannoni (domains) biyar da nauyinsu. A duka biyun, ayyukan tsaro (security operations) shi ne mafi girma (kusan kashi 27 zuwa 28 cikin ɗari). Lokacin karatunku ya bi nauyin fannonin."
          ],
          steps: ["Ku buɗe shafin hukuma na Security+ da shafukan jarabawar V7 da V8.", "Ku zaɓi ranar da kuke son yin jarabawa.", "Ku zaɓi nau'in da zai kasance a wannan ranar.", "Ku rubuta lambar jarabawarsa (exam code), fannoni biyar da nauyinsu.", "Ku duba farashin yanzu da hanyoyin yin jarabawar a shafin hukuma."],
          words: [["SOC", "security operations center (cibiyar ayyukan tsaro): ƙungiyar da ke lura da tsarin kwamfutocin wata ƙungiya don gano hare-hare."], ["Mai nazarin tsaro (security analyst)", "mutumin da ke lura da, dubawa, da amsa wa matsalolin tsaro."], ["Nau'in jarabawa (exam version)", "wani nau'i na jarabawar da ke da lambarsa da batutuwansa; tsofaffin nau'o'i suna dainawa."], ["Dainawa (retire)", "lokacin da ba a sake bayar da wani nau'in jarabawa."]],
          slides: [
            { title: "Ayyukan tsaro na farko", bullets: ["Mai nazarin tsaro ko na SOC", "Mai kula da tsaro ko tsarin kwamfuta", "Da yawa suna farawa a taimakon IT"] },
            { title: "Tushen Security+ (an duba Oct 2026)", bullets: ["Jarabawa ɗaya, tambayoyi har 90, minti 90", "Zaɓi daga amsoshi da aiki a zahiri", "CompTIA ke bayarwa; wannan kwas yana shirya ku"] },
            { title: "Zaɓi nau'inku", bullets: ["V7 = SY0-701: na Turanci zai daina 11 June 2027", "V8 = SY0-801: ana sa ransa kusan 17 November 2026", "Ku daidaita nau'in da ranar jarabawarku"] },
            { title: "Ku yi karatu bisa nauyi", bullets: ["Fannoni biyar a kowane nau'i", "Ayyukan tsaro shi ne mafi girma", "Ku duba comptia.org kafin ku yi rajista"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Ku zaɓi watan da kuke son yin jarabawa. Ta amfani da shafukan hukuma, ku yanke V7 ko V8 ku rubuta jimla ɗaya da ke faɗin dalili. Sannan ku jera fannoni biyar na wannan nau'in da nauyinsu, ku zagaye mafi girma.",
          youCanNow: "faɗin abin da mai nazarin tsaro na farko ke yi, zaɓar nau'in Security+ da ya dace da ranar jarabawarku, da jera fannoninsa.",
          quickCheck: [
            { objective: "O6", q: "Kuna shirin yin jarabawa a ƙarshen 2027. Wane nau'i za ku yi karatunsa?", options: ["V7 (SY0-701), domin shi ne tsoho", "Kowane nau'i; duk ɗaya ne", "V8 (SY0-801), domin an tsara V7 na Turanci zai daina a June 2027", "Babu nau'i; ku yi A+ kawai"], answer: 2, why: "Ku yi karatun nau'in da za a ci gaba da bayarwa a ranar jarabawarku; ku duba shafukan hukuma." },
            { objective: "O6", q: "Wane ne ke bayar da takardar shaidar Security+?", options: ["CompTIA, idan kun ci jarabawar", "Wannan kwas ɗin", "Wurin aikinku", "Kowane shafin tsaro a intanet"], answer: 0, why: "CompTIA ke bayar da Security+; wannan kwas ɗin yana shirya ku don jarabawar." }
          ]
        },
        {
          title: "CIA triad, barazana, rauni da haɗari",
          objectives: ["O1", "O2"],
          minutes: 6,
          goal: "Rarraba matsalar tsaro da CIA triad, ku auna haɗarinta.",
          text: [
            "Tsaro yana kare abubuwa uku, da ake kira CIA triad. Sirri (confidentiality): mutanen da suka dace kaɗai ke iya ganin bayanai. Ingancin bayanai (integrity): bayanai daidai suke, kuma ba a canja su ba tare da izini ba. Samuwa (availability): tsarin kwamfuta da bayanai suna aiki lokacin da mutane ke buƙatarsu.",
            "Misalai: kwamfutar tafi-da-gidanka (laptop) da aka sace mai fayilolin abokan ciniki tana cutar da sirri. Wani da ya canja lambobin albashi yana cutar da ingancin bayanai. Ransomware da ke kulle kowane fayil, ko shafin intanet da aka kashe, yana cutar da samuwa.",
            "Barazana (threat) ita ce abin da zai iya kawo cuta (ɓarawo, ɗan damfara, guguwa). Rauni (vulnerability) shi ne gibin da barazanar za ta iya amfani da shi (kwamfutar da ba a sabunta ba, kalmar sirri mai rauni, ƙofar da ba a kulle ba). Haɗari (risk) shi ne yiwuwar cutar, a haɗa da girman illarta (tasiri, impact).",
            "Masu nazari sau da yawa suna auna haɗari a tebur mai sauƙi: yiwuwa ƙarama, matsakaiciya ko babba, da tasiri ƙarami, matsakaici ko babba. Babbar yiwuwa da babban tasiri suna zuwa saman jerin."
          ],
          steps: ["Ku faɗi abin da zai iya lalacewa.", "Ku tambaya: shin yana cutar da sirri, ingancin bayanai ko samuwa?", "Ku faɗi barazanar da raunin.", "Ku auna yiwuwa: ƙarama, matsakaiciya ko babba.", "Ku auna tasiri: ƙarami, matsakaici ko babba.", "Ku sa haɗarin babba-da-babba a gaba."],
          words: [["CIA triad", "confidentiality, integrity da availability (sirri, ingancin bayanai da samuwa): manufofi uku na tsaro."], ["Barazana (threat)", "wani abu ko wani mutum da zai iya kawo cuta."], ["Rauni (vulnerability)", "gibin da barazana za ta iya amfani da shi."], ["Haɗari (risk)", "yiwuwar cuta da girman illarta."], ["Ransomware", "muguwar manhaja (malware) da ke kulle fayiloli tana neman a biya kuɗi."]],
          slides: [
            { title: "CIA triad", bullets: ["Sirri: mutanen da suka dace kaɗai ke gani", "Ingancin bayanai: ya kasance daidai", "Samuwa: yana aiki lokacin da ake buƙata"] },
            { title: "Misalai", bullets: ["Laptop da aka sace mai fayiloli: sirri", "Lambobin albashi da aka canja: ingancin bayanai", "Ransomware, shafin da aka kashe: samuwa"] },
            { title: "Barazana, rauni, haɗari", bullets: ["Barazana: abin da zai iya kawo cuta", "Rauni: gibin", "Haɗari: yiwuwa da tasiri tare"] },
            { title: "Ku auna shi", bullets: ["Yiwuwa: ƙarama, matsakaiciya, babba", "Tasiri: ƙarami, matsakaici, babba", "Babba da babba suna zuwa farko"] }
          ],
          tryIt: "Don wani ƙaramin kasuwanci da kuka sani (shagon unguwa, ofishin coci ko masallaci, teburin karɓar baƙi na asibiti), ku jera abubuwa uku da za su iya lalacewa. Ga kowanne, ku rubuta wane sashe na CIA yake cutarwa, barazanar, raunin, da ƙimar yiwuwa da tasiri.",
          youCanNow: "rarraba matsalar tsaro bisa CIA triad da auna haɗarinta ta yiwuwa da tasiri.",
          quickCheck: [
            { objective: "O1", q: "Wani ya canja kuɗaɗen da ke kan takardun biya (invoices) ba tare da izini ba. Wane sashe na CIA triad aka cutar?", options: ["Sirri", "Samuwa", "Babu", "Ingancin bayanai"], answer: 3, why: "Ingancin bayanai yana nufin bayanai su kasance daidai; canji ba tare da izini ba yana karya shi." },
            { objective: "O2", q: "Ba a sabunta wata kwamfutar ofis ba tsawon shekara ɗaya. A harshen haɗari, rashin sabuntawar shi ne:", options: ["Barazana", "Rauni", "Matakin tsaro", "Matsalar tsaro"], answer: 1, why: "Rashin sabuntawa gibi ne da barazana za ta iya amfani da shi." }
          ]
        },
        {
          title: "Matakan tsaro da ƙaramin izini (least privilege)",
          objectives: ["O2"],
          minutes: 5,
          goal: "Zaɓi nau'in matakin tsaro don rage wani haɗari.",
          text: [
            "Matakin tsaro (control) shi ne duk abin da ke rage haɗari. Security+ yana rarraba matakai ta hanyoyi biyu. Ta rukuni: na fasaha (technical: firewall, ɓoye bayanai, MFA), na gudanarwa (managerial: dokokin ƙungiya, binciken haɗari), na aiki (operational: horaswa, masu gadi, hanyoyin aikin da mutane ke bi) da na zahiri (physical: makullai, katin shaida, kyamarori).",
            "Ta abin da suke yi: matakan hanawa (preventive) suna dakatar da hari (makulli, MFA). Matakan ganowa (detective) suna lura da shi (kyamara, faɗakarwar log). Matakan gyara (corrective) suna gyara abubuwa bayan haka (dawo da fayiloli daga ajiyar madadi, backup). Matakan tsoratarwa (deterrent) suna hana mutane gwadawa (alamar gargaɗi). Matakan maye gurbi (compensating) suna tsayawa a madadin babban mataki idan ba zai yiwu ba.",
            "Babbar doka ita ce ƙaramin izini (least privilege): ku ba kowane mutum izinin da yake buƙata don aikinsa kaɗai, ba fiye ba. Mai karɓar kuɗi (cashier) ba ya buƙatar shiga tsarin albashi. Idan an ƙwace wani asusu, ƙaramin izini yana iyakance ɓarnar.",
            "Kariya mai kyau tana amfani da matakai da yawa a jere, don idan ɗaya ya gaza, wani yana ci gaba da kariya (kariya mai zurfi, defense in depth)."
          ],
          words: [["Matakin tsaro (control)", "duk abin da ke rage haɗari."], ["Hanawa / ganowa / gyara (preventive / detective / corrective)", "matakan da ke dakatar da, lura da, ko gyara matsalar tsaro."], ["Ƙaramin izini (least privilege)", "ba kowane mutum izinin da aikinsa ke buƙata kaɗai."], ["Kariya mai zurfi (defense in depth)", "amfani da matakan kariya da yawa a jere."], ["Firewall", "kayan aiki da ke bari ko hana zirga-zirgar network bisa dokoki."]],
          slides: [
            { title: "Rukunan matakan tsaro", bullets: ["Na fasaha: firewall, ɓoye bayanai, MFA", "Na gudanarwa: dokokin ƙungiya, binciken haɗari", "Na aiki: horaswa, hanyoyin aiki", "Na zahiri: makullai, katin shaida, kyamarori"] },
            { title: "Abin da matakai ke yi", bullets: ["Hanawa: dakatar da shi", "Ganowa: lura da shi", "Gyara: gyara bayan haka", "Tsoratarwa da maye gurbi"] },
            { title: "Ƙaramin izini", bullets: ["Izinin da aikin ke buƙata kaɗai", "Yana iyakance ɓarna idan an ƙwace asusu"] },
            { title: "Kariya mai zurfi", bullets: ["Matakai da yawa a jere", "Idan ɗaya ya gaza, wani yana ci gaba da kariya"] }
          ],
          sources: [V7, V8],
          tryIt: "Ku ɗauki haɗari uku daga Darasi na 2. Ga kowanne, ku zaɓi matakin tsaro ɗaya. Ku rubuta rukuninsa (na fasaha, na gudanarwa, na aiki ko na zahiri) da abin da yake yi (hanawa, ganowa ko gyara). Sannan ku rubuta dokar ƙaramin izini ɗaya don wannan kasuwancin.",
          youCanNow: "zaɓar matakin tsaro don wani haɗari, faɗin rukuninsa da nau'insa, da amfani da ƙaramin izini.",
          quickCheck: [
            { objective: "O2", q: "Kyamarar tsaro da ke ɗaukar hoton duk wanda ya shiga, galibi wane nau'in matakin tsaro ce?", options: ["Ganowa (detective)", "Gyara (corrective)", "Na gudanarwa (managerial)", "Maye gurbi (compensating)"], answer: 0, why: "Kyamarori suna lura da abubuwan da suka faru suna ɗaukarsu, don haka matakan ganowa ne (kuma na zahiri)." },
            { objective: "O2", q: "Sabon mai karɓar kuɗi yana neman izinin shiga tsarin albashi. Bisa ƙaramin izini, za ku:", options: ["Ba shi cikakken izinin admin don a tsira", "Raba masa kalmar sirrinku", "Ba shi izini idan aikinsa yana buƙata da gaske kaɗai", "Ba kowa izinin shiga komai"], answer: 2, why: "Ƙaramin izini yana ba da izinin da matsayin aiki ke buƙata kaɗai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tunani kamar mai nazarin tsaro",
        questions: [
          { objective: "O1", q: "An kashe shafin intanet na ɗaukar lokacin ganin likita na wani asibiti tsawon yini ɗaya. Wane sashe na CIA aka cutar?", options: ["Sirri", "Ingancin bayanai", "Samuwa", "Babu ɗaya daga cikinsu"], answer: 2, why: "Mutane ba su iya amfani da tsarin lokacin da suke buƙatarsa ba: samuwa." },
          { objective: "O1", q: "Wani ma'aikaci ya tura jerin abokan ciniki ta imel ga wanda bai dace ba a wajen kamfanin. Wane sashe na CIA aka cutar?", options: ["Sirri", "Samuwa", "Ingancin bayanai", "Ƙaramin izini"], answer: 0, why: "Wanda bai kamata ya gani ba ya ga bayanan." },
          { objective: "O2", q: "Wane haɗari ne yawanci za a fara magancewa?", options: ["Ƙaramar yiwuwa, ƙaramin tasiri", "Ƙaramar yiwuwa, matsakaicin tasiri", "Matsakaiciyar yiwuwa, ƙaramin tasiri", "Babbar yiwuwa, babban tasiri"], answer: 3, why: "Babbar yiwuwa da babban tasiri shi ne haɗari mafi tsanani." },
          { objective: "O2", q: "Dawo da fayiloli daga ajiyar madadi (backup) bayan ransomware wane nau'in matakin tsaro ne?", options: ["Tsoratarwa", "Gyara", "Hanawa", "Na gudanarwa"], answer: 1, why: "Matakan gyara suna gyara abubuwa bayan wani abu ya faru." },
          { objective: "O6", q: "A duka nau'o'in Security+ biyu, wane fanni ne ke da nauyi mafi girma?", options: ["Tushen ra'ayoyin tsaro (general security concepts)", "Gudanar da shirin tsaro (security program management)", "Ayyukan tsaro (security operations)", "Tsarin gine-ginen tsaro (security architecture)"], answer: 2, why: "Ayyukan tsaro yana da kusan kashi 27 zuwa 28 cikin ɗari a duka nau'o'in biyu." }
        ]
      }
    },
    {
      name: "Babi na 2: Ayyukan tsaro a zahiri",
      lessons: [
        {
          title: "Ƙarfafa tsaron kwamfutarku (hardening)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Duba da rubuta manyan saitunan tsaro a kwamfutarku.",
          text: [
            "Ƙarfafa tsaro (hardening) yana nufin sa tsari ya fi wuyar kai wa hari ta hanyar kunna kariya da kashe abin da ba a buƙata. Masu nazari suna duba wannan a kwamfutocin kamfani kowace rana. Ku yi atisaye a kwamfutarku kaɗai.",
            "Ku duba abubuwa shida. Sabuntawa (updates): an saka su? Firewall: yana kunne? Antivirus: yana kunne kuma sabo ne (Microsoft Defender yana cikin Windows tun farko; Mac yana da kariyar malware a ciki)? Nau'in asusu: kuna amfani da asusun yau da kullum (standard) don aikin kullum, da admin sai lokacin da ake buƙata? Kulle allo: yana kullewa bayan 'yan mintuna kuma yana neman kalmar sirri ko PIN? Ɓoye bayanan faifai (disk encryption): yana kunne (BitLocker ko Device Encryption a kwamfutocin Windows da yawa, FileVault a Mac)?",
            "A Windows, ku duba cikin Settings don Windows Update da Accounts, ku buɗe Windows Security don firewall da kariya daga ƙwayoyin cuta (virus). A Mac, ku duba cikin System Settings don Software Update, Network > Firewall, Users & Groups, Lock Screen, da Privacy & Security > FileVault. Sunayen menu suna iya canjawa tsakanin nau'o'i; ku yi bincike a Settings idan ba ku samu ba.",
            "Idan za ku kunna ɓoye bayanan faifai, ku fara ajiye maɓallin dawowa (recovery key) a wuri mai aminci, ba a intanet ba. Idan babu shi, kuna iya rasa fayilolinku. Idan ba ku da tabbas, ku rubuta shi a matsayin gibi ku nemi taimako maimakon haka."
          ],
          steps: ["Sabuntawa: ku duba ku saka.", "Firewall: ku tabbatar yana kunne.", "Antivirus: ku tabbatar yana kunne kuma sabo ne.", "Asusu: ku rubuta ko asusunku na kullum na yau da kullum (standard) ne ko admin.", "Kulle allo: ku saita shi ya kulle bayan 'yan mintuna.", "Ɓoye bayanan faifai: ku duba ko yana kunne; ku ajiye maɓallin dawowa kafin ku kunna shi.", "Ku rubuta kowane sakamako da duk wani gibi."],
          words: [["Ƙarfafa tsaro (hardening)", "sa tsari ya fi wuyar kai wa hari ta hanyar kunna kariya da cire abin da ba a buƙata."], ["Ɓoye bayanan faifai (disk encryption)", "rikita duk abin da ke kan faifai ta yadda ɓarawo ba zai iya karantawa ba sai da maɓalli."], ["Maɓallin dawowa (recovery key)", "dogon code da ke buɗe faifan da aka ɓoye idan ba za ku iya shiga ba."], ["Ma'auni na asali (baseline)", "saitunan tsaro na yau da kullum da kowace kwamfuta a ƙungiya ya kamata ta kasance da su."]],
          slides: [
            { title: "Ƙarfafa tsaro", bullets: ["Ku kunna kariya", "Ku kashe abin da ba a buƙata", "A kwamfutarku kaɗai"] },
            { title: "Ku duba abubuwa shida", bullets: ["Sabuntawa, firewall, antivirus", "Asusun yau da kullum (standard) don amfanin kullum", "Kulle allo da ɓoye bayanan faifai"] },
            { title: "Inda za ku duba", bullets: ["Windows: Settings da Windows Security", "Mac: System Settings, Privacy & Security", "Sunayen menu suna canjawa: ku yi bincike"] },
            { title: "Ku yi hankali da ɓoye bayanai", bullets: ["Ku fara ajiye maɓallin dawowa, ba a intanet ba", "Ba ku da tabbas? Ku rubuta shi a matsayin gibi ku tambaya"] }
          ],
          sources: [CISA],
          tryIt: "A kwamfutarku, ku duba dukkan abubuwa shida. Ku yi tebur mai ginshiƙai uku: saiti, abin da kuka samu, da abin da za a gyara. Wannan shi ne sashe na 1 na aikinku na ƙarshe.",
          youCanNow: "duba manyan saitunan tsaron kwamfuta da rubuta gibin, kamar yadda mai nazari ke duba ma'aunin asali (baseline).",
          quickCheck: [
            { objective: "O3", q: "Kafin ku kunna ɓoye bayanan faifai, me ya kamata ku yi?", options: ["Ku kashe firewall", "Ku ajiye maɓallin dawowa a wuri mai aminci, ba a intanet ba", "Ku goge fayilolinku", "Ku raba kalmar sirrinku"], answer: 1, why: "Idan babu maɓallin dawowa, kuna iya rasa damar shiga fayilolinku." },
            { objective: "O3", q: "Wane asusu ya kamata ku yi amfani da shi don aikin kullum?", options: ["Asusun admin", "Asusun da ake rabawa marar kalmar sirri", "Asusun baƙo (guest) mai fayilolinku", "Asusun yau da kullum (standard)"], answer: 3, why: "Asusun yau da kullum yana iyakance abin da malware ko kuskure za su iya canjawa." }
          ]
        },
        {
          title: "Karanta log da gano ayyuka masu shakku",
          objectives: ["O4"],
          minutes: 6,
          goal: "Yi wa layukan da ke da shakku alama a log na shiga asusu, ku faɗi dalili.",
          text: [
            "Log jerin abubuwan da tsari ke rubutawa ne, kowanne da lokacinsa. Masu nazari suna karanta log na shiga asusu (sign-in) don gano hare-hare. A Windows, Event Viewer yana ajiye log na Security (kallonsa yana buƙatar asusun admin); gazawar shiga tana bayyana a matsayin event 4625, nasarar shiga kuma a matsayin 4624. A nan za mu yi amfani da log na ƙirƙira maimakon haka.",
            "Log na atisaye (na ƙirƙira): 02:14:01 FAILED user=jlopez from 203.0.113.50. 02:14:03 FAILED user=jlopez from 203.0.113.50. 02:14:05 FAILED user=jlopez from 203.0.113.50. 02:14:07 FAILED user=jlopez from 203.0.113.50. 02:14:09 SUCCESS user=jlopez from 203.0.113.50. 08:02:30 SUCCESS user=mchen from 10.0.0.12. (FAILED = an gaza, SUCCESS = an yi nasara.)",
            "Alamun gargaɗi: gazawar shiga da yawa cikin 'yan daƙiƙoƙi (wani yana hasashen kalmar sirri), sannan nasara daga adireshi ɗaya (wataƙila ya yi hasashe daidai). Haka kuma lokuta masu ban mamaki (ƙarfe 2 na dare ga ma'aikacin ƙarfe 9 zuwa 5), shiga daga wuri da ba a saba ba, da asusu ɗaya da ke shiga daga wurare biyu masu nisa a kusan lokaci ɗaya.",
            "Aikinku shi ne ku lura, ku rubuta, ku kai rahoto, ba ku rama ba. Ku rubuta abin da kuka gani, lokutan, asusun da adireshin, ku miƙa shi bisa tsarin ƙungiyarku."
          ],
          steps: ["Ku karanta kowane layi: lokaci, sakamako, asusu, adireshi.", "Ku nemi gazawa da yawa cikin ɗan lokaci.", "Ku nemi nasara nan da nan bayan gazawa daga adireshi ɗaya.", "Ku nemi lokuta ko wurare masu ban mamaki.", "Ku rubuta kowane layi mai shakku da dalilinsa.", "Ku kai rahoto; kada ku taɓa ƙoƙarin shiga ɗayan tsarin da kanku."],
          words: [["Log", "jerin abubuwan da tsari ke rubutawa, kowanne da lokacinsa."], ["Event Viewer", "kayan aikin Windows don karanta log na tsari da na tsaro."], ["Brute force", "hasashen kalmar sirri ta hanyar gwada abubuwa da yawa da sauri sosai."], ["Alama (indicator)", "wata shaida a cikin bayanai da ke nuna cewa wani mummunan abu yana iya faruwa."]],
          slides: [
            { title: "Log yana ba da labarin", bullets: ["Kowane layi: lokaci, abin da ya faru, asusu, adireshi", "Windows: Event Viewer, log na Security", "4625 = gazawar shiga, 4624 = nasara"] },
            { title: "Alamun gargaɗi", bullets: ["Gazawa da yawa cikin daƙiƙoƙi", "Sannan nasara daga adireshi ɗaya", "Lokuta ko wurare masu ban mamaki"] },
            { title: "A cikin log na atisaye", bullets: ["Gazawa 4 ga jlopez cikin daƙiƙa 8 a ƙarfe 2:14 na dare", "Sannan nasara daga adireshi ɗaya", "mchen a ƙarfe 8:02 na safe yana kama da na al'ada"] },
            { title: "Aikinku", bullets: ["Ku lura, ku rubuta, ku kai rahoto", "Kada ku taɓa ramawa ko kutsawa"] }
          ],
          tryIt: "Ku kwafe log na atisaye a takarda. Ku zagaye kowane layi mai shakku ku rubuta dalili. Ku auna haɗarin (yiwuwa da tasiri) da sashen CIA da ke cikin haɗari. Ku ajiye wannan don sashe na 2 na aikinku na ƙarshe.",
          youCanNow: "karanta log na shiga asusu, yi wa layukan da ke da shakku alama, da bayyana dalilin da yasa suke da muhimmanci.",
          quickCheck: [
            { objective: "O4", q: "A cikin log na atisaye, wane layi ne ya fi damuwa?", options: ["Nasarar 02:14:09 ta jlopez nan da nan bayan gazawa huɗu", "Nasarar 08:02:30 ta mchen", "Gazawar shiga ta farko kaɗai", "Babu; gazawar shiga kullum na al'ada ce"], answer: 0, why: "Nasara nan da nan bayan gazawa masu sauri daga adireshi ɗaya tana nuna cewa an yi hasashen kalmar sirri daidai." },
            { objective: "O4", q: "Kun ga alamun hari a cikin log. Me za ku yi?", options: ["Ku kutsa kwamfutar maharin don ramawa", "Ku ƙyale shi har safe", "Ku goge log ɗin", "Ku rubuta bayanan ku kai rahoto bisa tsarin ƙungiyarku"], answer: 3, why: "Masu nazari suna rubutawa suna kai rahoto; ramawa laifi ne, kuma goge log yana lalata shaida." }
          ]
        },
        {
          title: "Amsa wa matsalar tsaro, da shirinku na Security+",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Jera matakan amsa wa matsalar tsaro don wani labari, ku rubuta shirin karatun Security+ mai kwanan wata.",
          text: [
            "Matsalar tsaro (incident) wani abu ne na tsaro da ke kawo cuta ko barazanar cuta. Ƙungiyoyi suna bin matakai da aka tsara don mutane su kasance cikin natsuwa. Security+ yana amfani da: shiri (preparation), ganowa (detection), nazari (analysis), takaitawa (containment), kawarwa (eradication), farfaɗowa (recovery), da darussan da aka koya (lessons learned).",
            "Ga shigar jlopez: shiri (ƙungiyar tana da tsari da lambobin tuntuɓa tun kafin haka); ganowa (kun ga layukan log ɗin); nazari (ku tabbatar gaskiya ne: shin jlopez ya shiga da ƙarfe 2 na dare?); takaitawa (ku kulle asusun ku kawo ƙarshen zamansa a buɗe); kawarwa (ku canja kalmar sirri, ku kunna MFA, ku cire duk abin da maharin ya saka); farfaɗowa (ku mayar wa jlopez damar shiga lafiya ku ci gaba da lura da asusun); darussan da aka koya (me zai hana wannan?).",
            "Ku ajiye shaidu: kada ku goge log ko ku share kwamfuta tsaf kafin ƙungiyarku ta ce a yi. Ku rubuta lokuta da ayyuka yayin da kuke tafiya. Ku kai rahoto ga mutumin da tsarinku ya ambata.",
            "Yanzu ku shirya jarabawarku. Ku yi amfani da nau'in da kuka zaɓa a Darasi na 1. Ku saita ranar da kuke nufi. Ku ba manyan fannoni ƙarin makonni. Ku yi atisaye da manufofin jarabawa na hukuma (exam objectives), rubuce-rubucenku na ƙarfafa tsaro da na log, da gwaje-gwajen da ke nan. Ku zaɓi sa'o'in kowane mako da suka dace da rayuwarku. Kafin ku yi rajista, ku duba farashi da hanyoyin yin jarabawa a shafin hukuma, ku kuma tambayi shirye-shiryen neman aiki, na tsofaffin sojoji ko na masu dawowa gida daga gidan yari game da taimakon kuɗin jarabawa."
          ],
          steps: ["Shiri: ku san tsarin da wanda za ku kira.", "Ganowa: ku lura da alamun gargaɗi.", "Nazari: ku tabbatar gaskiya ne da girman matsalar.", "Takaitawa: ku hana ta yaɗuwa.", "Kawarwa: ku cire tushen matsalar.", "Farfaɗowa: ku koma yadda aka saba ku ci gaba da lura.", "Darussan da aka koya: ku rubuta abin da za a canja.", "Shiri na jarabawa: nau'i, ranar da kuke nufi, fannoni da nauyinsu, sa'o'in kowane mako."],
          words: [["Matsalar tsaro (incident)", "wani abu na tsaro da ke kawo cuta ko barazanar cuta."], ["Takaitawa (containment)", "hana matsalar tsaro yaɗuwa."], ["Kawarwa (eradication)", "cire tushen matsalar tsaro."], ["Shaida (evidence)", "log, fayiloli da rubuce-rubuce da ke nuna abin da ya faru; dole a ajiye su."]],
          slides: [
            { title: "Matakan amsa wa matsalar tsaro", bullets: ["Shiri, ganowa, nazari", "Takaitawa, kawarwa, farfaɗowa", "Darussan da aka koya"] },
            { title: "Labarin jlopez", bullets: ["Ku tabbatar da mai asusun", "Ku kulle asusun; ku canja kalmar sirri; ku kunna MFA", "Ku mayar da damar shiga ku lura da asusun"] },
            { title: "Ku ajiye shaidu", bullets: ["Kada ku goge log ko share na'ura da wuri", "Ku rubuta lokuta da ayyuka yayin da kuke tafiya"] },
            { title: "Shirinku na Security+", bullets: ["Nau'i da ranar da kuke nufi", "Fannoni da nauyinsu; ƙarin makonni ga manya", "Sa'o'in kowane mako; ku duba farashi a comptia.org"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Aikin ƙarshe: ku haɗa teburinku na ƙarfafa tsaro (Darasi na 4), rahoton matsalar tsaro don log na jlopez tare da tasirinsa a CIA, ƙimar haɗari da mataki ɗaya na aiki ga kowane matakin amsa, da shirinku na Security+ mai nau'i, ranar da kuke nufi, fannoni da nauyinsu, da sa'o'in kowane mako.",
          youCanNow: "bin matakan amsa wa matsalar tsaro don labarin da ke kama da na gaske, da bin shirinku mai kwanan wata zuwa Security+.",
          quickCheck: [
            { objective: "O5", q: "Kun tabbatar an ƙwace wani asusu. Mene ne mataki na gaba?", options: ["Darussan da aka koya", "Takaitawa: ku kulle asusun ku kawo ƙarshen zamansa", "Farfaɗowa", "Shiri"], answer: 1, why: "Bayan ganowa da nazari, kuna takaita matsalar don kada ta yaɗu." },
            { objective: "O6", q: "Me ya dace a cikin shirin karatun Security+?", options: ["Kalmar \"Security+\" kaɗai", "Jerin kayan kutse (hacking) don gwadawa a kan wasu", "Nau'in jarabawa, ranar da kuke nufi, fannoni da nauyinsu da sa'o'in kowane mako", "Kalmomin sirrinku"], answer: 2, why: "Shiri yana faɗin nau'in da ya dace, rana, abin da za a karanta da lokacin karantawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ayyukan tsaro a zahiri",
        questions: [
          { objective: "O3", q: "Wanne ne ɓangare na ƙarfafa tsaron kwamfuta?", options: ["Kashe sabuntawa", "Kunna firewall da kulle allo", "Amfani da asusun admin don komai", "Raba maɓallin dawowa a intanet"], answer: 1, why: "Ƙarfafa tsaro yana kunna kariya kamar firewall da kulle allo." },
          { objective: "O4", q: "Gazawar shiga goma ga asusu ɗaya cikin daƙiƙa biyar daga adireshi ɗaya galibi tana nufin:", options: ["Mai asusun ya manta ya yi cajin waya", "Zirga-zirga ta al'ada", "Matsalar firinta", "Wani yana hasashen kalmar sirri"], answer: 3, why: "Gazawa masu sauri da yawa alamar harin hasashen kalmar sirri ne (brute force)." },
          { objective: "O4", q: "A Windows, wane kayan aiki ne ke ba ku damar karanta log na Security?", options: ["Event Viewer", "Paint", "Notepad kaɗai", "Na'urar lissafi (calculator)"], answer: 0, why: "Event Viewer yana nuna log na Windows, har da log na Security." },
          { objective: "O5", q: "Wane mataki ne ke zuwa nan da nan bayan takaitawa?", options: ["Ganowa", "Shiri", "Kawarwa", "Nazari"], answer: 2, why: "Bayan hana yaɗuwa, kuna cire tushen matsalar: kawarwa." },
          { objective: "O5", q: "Yayin matsalar tsaro, me yasa ya kamata ku ajiye log kuma kada ku share kwamfuta nan take?", options: ["Log shaida ne na abin da ya faru", "Share kwamfuta kullum laifi ne", "Log yana sa kwamfuta ta yi sauri", "Ba shi da muhimmanci"], answer: 0, why: "Log da na'urori shaidu ne; ƙungiya ce ke yanke lokacin da ya dace a tsaftace." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tsaron Intanet na Matakin Farko (Shirin Jarabawar CompTIA Security+)",
    questions: [
      { objective: "O6", q: "Mece ce lambar jarabawar (exam code) Security+ V8?", options: ["SY0-701", "220-1201", "SY0-801", "DA0-002"], answer: 2, why: "V8 shi ne SY0-801; V7 shi ne SY0-701." },
      { objective: "O6", q: "Me yasa za ku duba shafin hukuma na CompTIA kafin ku yi rajista?", options: ["Nau'o'in jarabawa, ranaku da farashi suna iya canjawa", "Shi kaɗai ne wurin da ke da kayan kutse na atisaye", "Yana bayar da takardar shaida kyauta", "Ba ku buƙatar dubawa"], answer: 0, why: "Nau'o'i suna dainawa kuma farashi yana canjawa; shafin hukuma shi ne na yanzu." },
      { objective: "O6", q: "Wane fanni ya kamata ya sami lokacin karatu mafi yawa a shirin Security+?", options: ["Mafi ƙanƙanta", "Ayyukan tsaro, mafi girma", "Babu; ku karanta ba tare da tsari ba", "Fannin da kuke so kaɗai"], answer: 1, why: "Fanni mafi girma yana da tambayoyi mafi yawa." },
      { objective: "O1", q: "Ransomware ya kulle kowane fayil a wani ofis. Wane sashe na CIA ne ya fi shan wahala?", options: ["Sirri", "Ingancin bayanai", "Ƙaramin izini", "Samuwa"], answer: 3, why: "Mutane ba za su iya amfani da fayilolinsu ba: samuwa." },
      { objective: "O1", q: "Sirri (confidentiality) yana nufin:", options: ["Tsari yana aiki lokacin da ake buƙata", "Mutanen da suka dace kaɗai ke iya ganin bayanan", "An ajiye madadin bayanai (backup)", "An buga bayanai a takarda"], answer: 1, why: "Sirri yana nisanta bayanai daga mutanen da bai kamata su gani ba." },
      { objective: "O1", q: "Wani ɗalibi ya canja makinsa a tsarin makaranta. Wane sashe na CIA aka cutar?", options: ["Ingancin bayanai", "Samuwa", "Sirri", "Tsoratarwa"], answer: 0, why: "An canja bayanan ba tare da izini ba, don haka ba su da daidai kuma." },
      { objective: "O2", q: "Kalmar sirri mai rauni a asusun admin ita ce:", options: ["Barazana", "Matakin tsaro", "Rauni", "Maɓallin dawowa"], answer: 2, why: "Gibi ne da maharin zai iya amfani da shi." },
      { objective: "O2", q: "MFA (tabbatarwa ta matakai da yawa) wajen shiga asusu galibi shi ne:", options: ["Matakin gyara", "Matakin ganowa", "Alamar tsoratarwa", "Matakin hanawa na fasaha"], answer: 3, why: "Yana hana ƙwace asusu da yawa kafin su faru, ta amfani da fasaha." },
      { objective: "O2", q: "Ana auna haɗari ta:", options: ["Yiwuwa da tasiri", "Girman allo", "Yawan kwamfutoci", "Yadda ofis ɗin yake sabo"], answer: 0, why: "Haɗari yana haɗa yiwuwar cuta da girman illarta." },
      { objective: "O2", q: "Rubutacciyar dokar ƙungiya da ke faɗin wanda zai iya shiga fayilolin abokan ciniki, wane rukunin matakin tsaro ce?", options: ["Na zahiri", "Na gudanarwa", "Na fasaha", "Na gyara"], answer: 1, why: "Dokokin ƙungiya da shawarwarin haɗari matakan gudanarwa ne." },
      { objective: "O3", q: "Wane kayan aiki ne ke cikin Windows tun farko don kariya daga ƙwayoyin cuta?", options: ["Microsoft Defender a cikin Windows Security", "Event Viewer", "Paint", "Task Scheduler kaɗai"], answer: 0, why: "Microsoft Defender shi ne antivirus da ke cikin Windows Security." },
      { objective: "O3", q: "Ana amfani da FileVault a Mac don:", options: ["Kunna waƙa", "Aika imel", "Ɓoye bayanan faifai", "Buga takarda"], answer: 2, why: "FileVault yana ɓoye bayanan faifan Mac." },
      { objective: "O3", q: "A ina ya kamata ku yi atisayen ƙarfafa tsaro?", options: ["A kwamfutar maƙwabci", "A kwamfutarku", "A server na tsohon wurin aikinku", "A kowace Wi-Fi ta jama'a"], answer: 1, why: "Ku yi atisaye a na'urorin da kuka mallaka ko kuke da izini a rubuce don amfani da su kaɗai." },
      { objective: "O4", q: "Mene ne log?", options: ["Jerin kalmomin sirri", "Wani nau'in ƙwayar cuta (virus)", "Dokar firewall", "Jerin abubuwan da tsari ke rubutawa, kowanne da lokacinsa"], answer: 3, why: "Log yana rubuta abubuwa da lokutansu don masu nazari su ga abin da ya faru." },
      { objective: "O4", q: "Wace shigar asusu ce ta fi ban mamaki ga ma'aikacin ofis na ƙarfe 9 zuwa 5?", options: ["8:55 na safe daga network na ofis", "12:30 na rana daga network na ofis", "3:10 na dare daga wata ƙasa", "4:45 na yamma daga network na ofis"], answer: 2, why: "Lokuta da wurare masu ban mamaki alamun gargaɗi ne." },
      { objective: "O4", q: "Event 4625 na Windows yana nufin:", options: ["Gazawar shiga", "Nasarar shiga", "Aikin firinta", "Sabuntawar manhaja"], answer: 0, why: "4625 gazawar shiga ce; 4624 nasarar shiga ce." },
      { objective: "O5", q: "Mene ne matakin FARKO na amsa wa matsalar tsaro?", options: ["Farfaɗowa", "Shiri", "Kawarwa", "Darussan da aka koya"], answer: 1, why: "Shiri ne ke zuwa farko: tsare-tsare da lambobin tuntuɓa suna shirye kafin matsala ta faru." },
      { objective: "O5", q: "Canja kalmar sirri da cire abin da maharin ya saka shi ne:", options: ["Ganowa", "Shiri", "Darussan da aka koya", "Kawarwa"], answer: 3, why: "Kawarwa tana cire tushen matsalar tsaro." },
      { objective: "O5", q: "Bayan asusun ya sake zama lafiya, ƙungiyar ta zauna ta tambayi me zai hana wannan. Wannan shi ne:", options: ["Darussan da aka koya", "Takaitawa", "Ganowa", "Nazari"], answer: 0, why: "Darussan da aka koya shi ne mataki na ƙarshe: a inganta don kada ya sake faruwa." },
      { objective: "O5", q: "Kun ga hari na zuwa daga adireshin waje. Me BA za ku yi ba?", options: ["Rubuta lokuta", "Kai rahoto ga ƙungiyarku", "Ƙoƙarin kutsa kwamfutar maharin", "Ajiye log"], answer: 2, why: "Ramawa laifi ne kuma ba aikin mai nazari ba ne; ku rubuta ku kai rahoto." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 6, 8, 10, 13, 14, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Teburin ƙarfafa tsaro", objective: "O3", notYet: "Ba a duba wasu daga cikin saituna shida ba.", meets: "An duba dukkan saituna shida a kwamfutarku, tare da sakamako da gibi.", exceeds: "Kowane gibi yana da gyara da dalili, kuma an rubuta shirin ajiye maɓallin dawowa." },
      { name: "Duba log", objective: "O4", notYet: "Bai ga gazawa masu sauri ba ko nasarar da ta biyo bayansu.", meets: "Ya yi wa kowane layi mai shakku alama kuma ya faɗi dalili.", exceeds: "Ya kuma faɗi yadda na al'ada yake, da ƙarin bayanan da za su tabbatar da shi." },
      { name: "CIA da haɗari", objective: "O1", notYet: "Ba a faɗi sashen CIA ba, ko an faɗi wanda bai dace ba.", meets: "Ya faɗi sashen CIA da ke cikin haɗari, ya ba da ƙimar yiwuwa da tasiri tare da dalili.", exceeds: "Ya bayyana yadda haɗarin zai iya canjawa idan an ƙara matakin tsaro." },
      { name: "Matakan tsaro", objective: "O2", notYet: "Babu matakin tsaro, ko matakin da bai dace da haɗarin ba.", meets: "Ya faɗi aƙalla matakin tsaro ɗaya da ya dace, tare da rukuninsa da nau'insa.", exceeds: "Ya yi amfani da matakai a jere da dokar ƙaramin izini." },
      { name: "Matakan amsa wa matsala", objective: "O5", notYet: "Wasu matakai sun ɓace ko ba bisa tsari ba, ko an lalata shaida.", meets: "Dukkan matakai bakwai bisa tsari, kowanne da mataki ɗaya na aiki, kuma an ajiye shaida.", exceeds: "Ya faɗi wanda ake sanarwa a kowane mataki, da yadda darussan da aka koya za su canja tsarin." },
      { name: "Shirin karatu da jarabawa", objective: "O6", notYet: "Babu nau'i ko rana, ko wasu fannoni sun ɓace.", meets: "Ya faɗi V7 ko V8 da dalili, ranar da yake nufi, kowane fanni da nauyinsa da sa'o'in kowane mako.", exceeds: "Ya ba fannoni masu nauyi ƙarin makonni, kuma ya faɗi inda za a duba farashi da samun taimakon kuɗin jarabawa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajista ko suka ci Security+ cikin watanni 6 (binciken biyo baya)",
      "Masu koyo da suka nemi ko suka fara aikin tsaro, na SOC ko na IT cikin watanni 6",
      "Masu koyo da suka ce sun gyara aƙalla gibin tsaro ɗaya a gida ko a wurin aiki cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ɗaya ta Windows ko Mac da mai koyo ya mallaka ko yake da izinin canjawa (wasu saituna suna buƙatar asusun admin)",
      "Takarda da alƙalami, ko takardar kwamfuta, don teburori, rahoton matsalar tsaro da shirin",
      "Shafukan hukuma na CompTIA Security+ V7 da V8",
      "Kusan minti 90 gaba ɗaya, a gajerun zama, da ƙarin lokacin karatu na jarabawar a kai a kai"
    ],
    facilitatorNotes: [
      "Ku faɗi dokar a farkon kowane zama: kariya kaɗai, na'urorin mutum da bayanan ƙirƙira kaɗai; gwajin tsarin wasu ba tare da izini a rubuce ba yana iya zama laifi.",
      "Ku duba shafukan hukuma na Security+ kafin kowace ƙungiyar masu koyo; ranakun dainawar V7 da fitowar V8 suna iya canjawa.",
      "A kwamfutocin ɗakin atisaye da ake rabawa, masu koyo ba za su ga wasu saituna ba; ku bar su su kammala Darasi na 4 a gida ko a matsayin nunawa.",
      "Ku gudanar da Darasi na 6 a matsayin atisayen tebur (tabletop): mutum ɗaya ya karanta log ɗin, ƙungiyar ta bi kowane matakin amsa da babbar murya.",
      "Ku tunatar da masu koyo cewa wannan kwas yana shirya su, ba ya bayar da Security+; ku nuna musu shirye-shiryen yankinsu da ke taimakawa da kuɗin jarabawa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
