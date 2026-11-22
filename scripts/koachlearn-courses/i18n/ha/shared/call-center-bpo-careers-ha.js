"use strict";

// Koach Learn course, Hausa (ha) translation of shared/call-center-bpo-careers.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const BLS_CSR = { name: "US Bureau of Labor Statistics (ofishin ƙididdigar aiki na Amurka): Masu hidimar abokan ciniki (ilimi, horo, jadawali, yanayin aiki)", url: "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm" };
const IBPAP = { name: "IBPAP: ƙungiyar kamfanonin IT da BPO ta ƙasar Philippines", url: "https://www.ibpap.org/" };
const FTC_JOBS = { name: "US Federal Trade Commission (hukumar kare masu saye ta Amurka): Zamba ta aiki", url: "https://consumer.ftc.gov/articles/job-scams" };
const FTC_REPORT = { name: "US Federal Trade Commission: kai rahoton zamba (Amurka)", url: "https://reportfraud.ftc.gov/" };
const IOM_IRIS = { name: "IOM IRIS: ɗaukar ma'aikata cikin gaskiya, da ƙa'idar mai ɗaukar aiki ne ke biya", url: "https://iris.iom.int/" };
const ILO_FAIR = { name: "Ƙungiyar Ƙwadago ta Duniya (ILO): ɗaukar ma'aikata cikin adalci", url: "https://www.ilo.org/topics/fair-recruitment" };
const TESDA = { name: "TESDA, Philippines: hukumar ilimin fasaha da horon sana'o'i (horo da takardar shaida; TESDA Online Program)", url: "https://www.tesda.gov.ph/" };
const AJIRA = { name: "Kenya News Agency: an ƙarfafa matasa su rungumi shirin Ajira Digital (shirin gwamnati na aikin intanet)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };

module.exports = {
  id: "call-center-bpo-careers-ha",
  lang: "ha",
  translationOf: "call-center-bpo-careers",
  category: "Workforce Development",
  name: "Sana'o'in Cibiyar Kira (Call Center) da Ayyukan BPO",
  skills: "Sanin nau'o'in ayyukan BPO, Gane masu ɗaukar aiki na bogi, Cin gwaje-gwajen ɗaukar aiki, Gudanar da kira bisa takardar maki ta QA, Cimma lambobin cibiyar kira, Tsara lokutan aiki da hanyar ci gaba",
  outcome: "neman aiki a cibiyar kira ko kamfanin BPO da tsari: zaɓar nau'in aikin BPO da ya dace da ku, tabbatar da cewa mai ɗaukar aiki na gaske ne, yin atisayen gwajin rubutu a kwamfuta, na murya da na kiran gwaji, gudanar da kira yadda takardar maki ta inganci ke so, bayyana lambobin da za a auna ku da su, da tsara lokutan aikinku da matakinku na gaba.",
  about: [
    "Cibiyoyin kira da kamfanonin BPO (masu yi wa wasu kamfanoni aiki) suna ɗaukar mutane da yawa masu takardar kammala sakandare da iya magana mai kyau, a ƙasashe kamar Philippines, India, Kenya, Nigeria, Ghana, Masar, Morocco, Senegal, Mexico, Colombia da Amurka. Da yawa suna ba da horo mai albashi, wasu kuma suna barin mutane su yi aiki daga gida.",
    "Wannan kwas ɗin na masu neman aiki ne, matasa, masu sauya sana'a, da duk wanda yake son sanin yadda wannan aikin yake a gaske kafin ya nema. Za ku koyi nau'o'in ayyukan BPO, yadda ake gane mai ɗaukar aiki na bogi, yadda gwaje-gwajen ɗaukar aiki suke, yadda ake ba kira maki, da yadda mutane ke samun ci gaba.",
    "Kwas ɗin yana shirya ku ne don ku nema; ba ya ba ku aiki ko takardar shaida. Kowane kamfani yana yin nasa gwaje-gwajen ɗaukar aiki. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai ɗan gwaji bayan kowane darasi, gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta tsarinku na kwanaki 90 don samun aikin BPO: nau'in aikin BPO da kuke so da dalili; kamfanoni uku na gaske da kuka duba a shafukansu na hukuma; jerin alamun zamba naku; jadawalin atisaye mai ranaku don rubutu a kwamfuta, karatu da babbar murya da kiran gwaji; kiran atisaye ɗaya da kuka naɗa kuma kuka ba shi maki da samfurin takardar maki ta QA; tsarin shirinku na aikin dare ko na gida; da mataki ɗaya na ci gaba da kuke so cikin shekara ɗaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu neman aiki masu kusan shekara 18 zuwa sama a Afirka, Asiya, Latin Amurka da Amurka: masu barin makaranta, waɗanda suka kammala jami'a ba tare da aiki ba, manyan da ke sauya sana'a, masu komawa aiki da masu magana da harshe na biyu. Da yawa za su yi kwas ɗin a harshensu, su nemi aiki da Turanci, Faransanci ko Sifaniyanci.",
    startingPoint: "Suna iya yin hira da amfani da waya; yawancinsu suna iya amfani da kwamfuta kaɗan. Kaɗan ne suka san yadda ake ɗaukar aiki a BPO, mene ne gwaje-gwajen, ko yadda ake auna aikin cibiyar kira. Da yawa sun ga tallan aiki a kafofin sada zumunta, amma ba sa iya bambance na gaske da na bogi.",
    gap: "Ayyukan BPO sukan zama aikin farko na hukuma ga mutane da yawa, amma masu nema suna faɗuwa a gwaje-gwajen da ba su san da su ba, suna rasa kuɗi ga masu ɗaukar aiki na bogi da ke neman kuɗi, ko suna barin aiki a watannin farko saboda lokutan aiki da maƙasudai sun ba su mamaki. Masu koyo suna buƙatar sanin aikin, duba mai ɗaukar aiki, yin atisayen gwaje-gwajen, da tsara jadawalinsu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; an fassara shi zuwa harsuna goma",
      "Na'urori: sau da yawa waya kaɗai; wasu darussa sun fi kyau a kwamfuta, amma ana iya yin kowane aiki a takarda",
      "Lokaci: darussa na minti 4 zuwa 6",
      "Gwaje-gwajen ɗaukar aiki, albashi, lokutan aiki da dokokin ƙwadago sun bambanta da ƙasa da kamfani; masu koyo suna duba mai ɗaukar aikin da ma'aikatar ƙwadago ta ƙasarsu",
      "Haɗarin zamba yana da yawa: babu lambar katin shaida ta gaske, kalmar sirri ko bayanan banki a kowane aikin atisaye"
    ],
    prerequisites: "Babu. Kwasa-kwasan \"Customer Service Excellence\" (Ƙwarewa a Hidimar Abokan Ciniki) da \"AI a Ayyukan Hidimar Abokan Ciniki\" suna da kyau a gaba ko tare da wannan; masu koyon Turanci suna iya ɗaukar \"Turanci don Wurin Aiki (ESL)\" tare da shi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku bayanan ayyukan BPO guda biyar", action: "rarraba kowane aiki a matsayin na murya ko ba na murya ba, mai shigowa ko mai fita, da faɗin babbar ƙwarewar da yake buƙata", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Idan aka ba ku tallan aiki ko saƙon mai ɗaukar aiki", action: "duba aikin don alamun gargaɗin mai ɗaukar aiki na bogi da faɗin abin da za ku yi a gaba", standard: "kuna ambaton aƙalla alamun gargaɗi huɗu, ba tare da biyan kowane kuɗi ko bayar da takardunku na asali ba" },
    { id: "O3", condition: "Ta amfani da rubutaccen tsarin atisaye da waya ko takarda", action: "kammala kiran gwaji da abokin ciniki wanda ke buɗewa, tabbatarwa, warwarewa, maimaitawa da rufewa", standard: "kuna samun \"Ya cika\" a kowane layi na samfurin takardar maki ta QA" },
    { id: "O4", condition: "Idan aka ba ku samfurin rahoton ma'aikaci", action: "bayyana abin da tsawon lokacin kira, warware matsala a karon farko, gamsuwar abokin ciniki, makin QA da bin jadawali ke auna", standard: "tare da hanya ɗaya ta gaskiya ta inganta kowanne" },
    { id: "O5", condition: "Don aikin dare ko na gida da kuke so", action: "rubuta tsarin shiri don barci, tafiya, kayan aiki da hutu", standard: "wanda ya ƙunshi aƙalla abubuwa biyar, har da madadi idan wuta ko intanet ya ɗauke" },
    { id: "O6", condition: "Ta amfani da burinku da shafukan hukuma na kamfanoni na gaske", action: "rubuta tsarin kwanaki 90 don samun aiki, da mataki na gaba a kan matakan ci gaban BPO", standard: "mai ranaku, kamfanoni uku da aka duba, da burin ci gaba ɗaya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shiga aikin BPO",
      lessons: [
        {
          title: "Mene ne aikin BPO, da nau'o'in ayyukansa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Rarraba ayyukan BPO zuwa na murya ko ba na murya ba, mai shigowa ko mai fita, da faɗin ƙwarewar da kowanne ke buƙata.",
          text: [
            "BPO na nufin business process outsourcing: wani kamfani yana biyan wani kamfani don ya yi masa wani sashe na aikinsa, kamar amsa wa abokan ciniki, sarrafa fom ko duba abubuwan da aka saka a intanet. Kamfanin da ke biya shi ne client (abokin hulɗa), kuma aikin wani client ɗaya ana kiransa account ko campaign.",
            "Ayyukan murya (voice) ta waya ake yin su. Mai shigowa (inbound) na nufin abokan ciniki ne ke kiran ku (taimako kan kuɗin biya, kaya da ake kawowa, tsarin waya). Mai fita (outbound) na nufin ku ne ke kiran su (sayarwa, tambayoyin bincike, tunatarwa, karɓar bashi). Ayyukan da ba na murya ba (non-voice) su ne hira ta rubutu (chat), imel, amsa a kafofin sada zumunta, shigar da bayanai, aikin ofis na baya da duba abubuwan da aka saka a intanet; suna buƙatar iya rubutu da sauri a kwamfuta fiye da magana.",
            "BPO yana ɗaukar mutane da yawa aiki a ƙasashe da yawa. Philippines da India suna yi wa clients masu Turanci da yawa aiki. Kenya, Nigeria, Ghana, Masar da Afirka ta Kudu suna ƙara girma. Morocco, Tunisia, Senegal, Côte d'Ivoire, Madagascar da Mauritius suna yi wa clients masu Faransanci aiki. Mexico da Colombia suna yi wa clients na Amurka da masu Sifaniyanci aiki. A Amurka, cibiyoyin kira suna ɗaukar aiki a kusan kowane fanni.",
            "Harshe sau da yawa shi ne babbar ƙwarewa. Wani account yana iya buƙatar Turanci mai kyau, Faransanci, Sifaniyanci, Larabci ko wani harshe, tare da haƙuri, saurare da ƙwarewar kwamfuta ta farko. Ayyuka da yawa suna neman takardar kammala sakandare, ba digiri ba."
          ],
          words: [
            ["BPO", "business process outsourcing: wani kamfani yana yi wa wani kamfani wani sashe na aikinsa."],
            ["Client da account", "client shi ne kamfanin da ke biyan BPO; account (ko campaign) shi ne aikin da ake yi wa wannan client."],
            ["Na murya da wanda ba na murya ba", "ayyukan murya (voice) kiran waya ne; ayyukan da ba na murya ba (non-voice) su ne chat, imel, bayanai da aikin ofis na baya."],
            ["Mai shigowa da mai fita", "mai shigowa (inbound): abokan ciniki ne ke tuntuɓar ku. Mai fita (outbound): ku ne ke tuntuɓar abokan ciniki."],
            ["Duba abubuwan intanet (content moderation)", "duba rubuce-rubuce, hotuna ko bidiyo don ganin ko sun bi ƙa'idodin wani shafi."]
          ],
          slides: [
            { title: "BPO a jimla ɗaya", bullets: ["Wani kamfani yana biyan wani kamfani don ya yi masa wani sashe na aiki", "Kamfanin da ke biya shi ne client", "Aikin client ɗaya shi ne account"] },
            { title: "Ayyukan murya (voice)", bullets: ["Mai shigowa: abokan ciniki ne ke kiran ku don taimako", "Mai fita: ku ne ke kiran su don sayarwa, bincike ko tunatarwa", "Manyan ƙwarewa: magana a sarari, saurare, haƙuri"] },
            { title: "Ayyukan da ba na murya ba", bullets: ["Chat, imel, amsa a kafofin sada zumunta", "Shigar da bayanai, aikin ofis na baya, duba abubuwan intanet", "Manyan ƙwarewa: rubutu, saurin rubutu a kwamfuta, kiyaye kuskure"] },
            { title: "Inda BPO ke ɗaukar aiki", bullets: ["Philippines, India, Kenya, Nigeria, Ghana, Masar", "Accounts na Faransanci: Morocco, Tunisia, Senegal, Côte d'Ivoire", "Kusa da Amurka: Mexico, Colombia"] }
          ],
          sources: [IBPAP, BLS_CSR],
          tryIt: "A takarda, ku zana tebur mai akwatuna huɗu: murya mai shigowa, murya mai fita, chat ko imel, aikin ofis na baya. Ku saka aiki ɗaya da kuka ga an tallata a kowane akwati, ku rubuta babbar ƙwarewar da yake buƙata, sannan ku zagaye akwatin da ya fi dacewa da ku.",
          youCanNow: "bambance ayyukan BPO na murya da wanda ba na murya ba, masu shigowa da masu fita, da zaɓar nau'in da ya dace da ƙwarewarku.",
          quickCheck: [
            { objective: "O1", q: "Abokan ciniki suna kiran ku don gyara matsalolin kuɗin wayarsu. Wane irin aiki ne wannan?", options: ["Murya mai fita", "Shigar da bayanai a ofis na baya", "Murya mai shigowa", "Duba abubuwan intanet"], answer: 2, why: "Abokan ciniki ne ke kira, kuma aikin ta waya ne: murya mai shigowa." },
            { objective: "O1", q: "Wane aiki ne ke buƙatar iya rubutu da saurin rubutu a kwamfuta fiye da magana?", options: ["Taimako ta imel da chat", "Kiran sayarwa mai fita", "Taimako ta waya mai shigowa", "Tambayoyin bincike ta waya"], answer: 0, why: "Imel da chat ayyuka ne da ba na murya ba: abokan ciniki suna karanta kalmominku, don haka rubutu ya fi muhimmanci." }
          ]
        },
        {
          title: "Gane masu ɗaukar aiki na bogi da zamba ta aiki",
          objectives: ["O2"],
          minutes: 5,
          goal: "Duba tallan aiki ko saƙon mai ɗaukar aiki don alamun zamba, da yanke shawarar abin da za ku yi.",
          text: [
            "Masu ɗaukar aiki na gaske ba sa karɓar kuɗi daga gare ku don ku sami aiki. Masu ɗaukar aiki na bogi suna neman \"kuɗin sarrafa takarda\", \"kuɗin horo\", \"kuɗin gwajin lafiya\", \"kuɗin kayan aiki (uniform)\" ko kuɗin \"kayan farawa\" ko na'urori. Hukumar US Federal Trade Commission ta ce masu ɗaukar aiki masu gaskiya ba za su taɓa neman ku biya don samun aiki ba, kuma aikin ILO da IOM (ƙungiyoyin duniya) kan ɗaukar ma'aikata cikin adalci yana ƙoƙarin ganin masu ɗaukar aiki ne ke biyan kuɗin ɗaukar ma'aikata, ba ma'aikata ba.",
            "Sauran alamun gargaɗi: albashi mai yawa don ɗan aiki kaɗan; hirar neman aiki ta saƙon rubutu kawai a WhatsApp ko Telegram; adireshin imel na kyauta maimakon na kamfanin da kansa; matsa muku ku yanke shawara yau; cak da dole ku saka a banki ku mayar da wani sashe; da neman fasfo ɗinku, katin shaidar ƙasa ko takardun makaranta don su \"ajiye\". Ku riƙe takardunku na asali da kanku. Ku ba da kwafi kawai, kuma ga mai ɗaukar aiki da kuka duba kaɗai.",
            "Don duba mai ɗaukar aiki: ku nemo shafin hukuma na kamfanin da kanku (kada ku yi amfani da hanyar haɗin da ke cikin saƙon), ku nemi aikin iri ɗaya a shafin ayyukansa (careers page), ku nema a can. Don ayyuka a ƙasar waje, ku duba cewa hukumar ɗaukar aikin tana da lasisi daga ma'aikatar ƙwadago ko hukumar ma'aikata 'yan ci-rani ta ƙasarku. Idan wani abu ba daidai ba ne, ku tsaya, ku ajiye saƙonnin, ku kai rahoto ga 'yan sanda ko ofishin kare masu saye ko na ƙwadago na ƙasa (a Amurka: reportfraud.ftc.gov)."
          ],
          steps: [
            "Ku karanta tallan ku rubuta duk abin da ke neman kuɗi ko takardun asali.",
            "Ku nemo shafin hukuma na kamfanin da kanku, ba daga hanyar haɗin da ke cikin saƙon ba.",
            "Ku nemi aikin iri ɗaya a shafin ayyuka na hukuma, ku nema a can.",
            "Don ayyuka a ƙasar waje, ku duba cewa gwamnatinku ta ba hukumar ɗaukar aikin lasisi.",
            "Idan wani abu ba daidai ba ne, ku tsaya, ku ajiye hotunan allo (screenshots), ku kai rahoto."
          ],
          words: [
            ["Mai ɗaukar aiki (recruiter)", "mutum ko hukuma da ke nemo wa wani kamfani ma'aikata."],
            ["Kuɗin ɗaukar aiki (recruitment fee)", "kuɗin da ake karɓa daga ma'aikaci don ya sami aiki; ɗaukar ma'aikata cikin adalci ya ce kada ma'aikata su biya shi."],
            ["Shafin ayyuka (careers page)", "sashen shafin intanet na kamfani da kansa inda yake jera ayyukansa na gaske."],
            ["Hukuma mai lasisi", "hukumar ɗaukar aiki da ke da rajista a gwamnati, wadda za ku iya nema a jerin hukuma."]
          ],
          slides: [
            { title: "Masu ɗaukar aiki na gaske ba sa karɓar kuɗinku", bullets: ["Babu kuɗin sarrafa takarda, horo, gwajin lafiya ko uniform don ɗaukar ku", "Babu biyan kuɗin kayan farawa ko na'urori", "Babu cak da za ku saka a banki ku mayar da kuɗi"] },
            { title: "Ƙarin alamun gargaɗi", bullets: ["Albashi mai yawa don ɗan aiki kaɗan", "Hirar aiki ta saƙon rubutu kawai a WhatsApp ko Telegram", "Imel na kyauta, matsa muku ku yanke shawara yau"] },
            { title: "Ku riƙe takardunku", bullets: ["Kada ku taɓa bayar da fasfo, katin shaida ko takardun shaida na asali", "Ku ba da kwafi kawai, ga mai ɗaukar aiki da kuka duba"] },
            { title: "Ku duba, sannan ku nema", bullets: ["Ku nemo shafin hukuma da kanku", "Ku nema a shafin ayyuka na hukuma", "Ayyuka a waje: ku duba lasisin hukumar", "Wani abu ba daidai ba: ku tsaya, ku ajiye shaida, ku kai rahoto"] }
          ],
          sources: [FTC_JOBS, FTC_REPORT, ILO_FAIR, IOM_IRIS],
          tryIt: "Ku karanta wannan saƙon atisaye: \"Barka! An ɗauke ku aikin cibiyar kira daga gida a dala 900 a mako. Ku aika dala 50 don kayan horo da hoton katin shaidarku ta WhatsApp yau.\" Ku rubuta kowace alamar gargaɗi da kuka gani (akwai aƙalla biyar) da abin da za ku yi.",
          youCanNow: "gane mai ɗaukar aiki na bogi, kiyaye takardunku, da duba aiki a shafin kamfanin da kansa kafin ku nema.",
          quickCheck: [
            { objective: "O2", q: "Wani mai ɗaukar aiki ya ce an ɗauke ku, amma dole ku fara biyan kuɗin horo. Me za ku yi?", options: ["Ku biya, domin horo yana da amfani", "Ku biya rabi yanzu, rabi daga baya", "Ku roƙi aboki ya biya muku", "Ku tsaya: masu ɗaukar aiki na gaske ba sa karɓar kuɗi don ɗaukar ku"], answer: 3, why: "Neman ku biya don samun aiki babbar alamar zamba ce." },
            { objective: "O2", q: "Wani mai ɗaukar aiki don aiki a ƙasar waje yana son ya riƙe fasfo ɗinku. Mene ne amsa mai aminci?", options: ["Ku ba shi na asali don ya yi aikin da sauri", "Ku riƙe fasfo ɗinku na asali, ku ba da kwafi kawai ga mai ɗaukar aiki da kuka duba", "Ku tura shi ta gidan waya zuwa adireshin da ke cikin saƙon", "Ku bar shi wurin abokin mai ɗaukar aikin"], answer: 1, why: "Riƙe takardunku yana kare ku; bayar da su na iya kama ku a cikin aikin rashin adalci." }
          ]
        },
        {
          title: "Wucewa matakai da gwaje-gwajen ɗaukar aiki",
          objectives: ["O3"],
          minutes: 6,
          goal: "Yin atisayen sassan rubutu a kwamfuta, karatu da babbar murya da kiran gwaji na tsarin ɗaukar aiki a BPO.",
          text: [
            "Matakan ɗaukar aiki sun bambanta da kamfani, amma kamfanonin BPO da yawa suna bin hanya kusan iri ɗaya: cike fom ta intanet; gwaji (assessment) mai tambayoyin rubutu a kwamfuta, nahawu, karatu ko saurare; gwajin murya ko harshe inda za ku karanta da babbar murya ko ku amsa tambayoyin da aka naɗa; hirar neman aiki; da kiran gwaji (mock call), wato ɗan wasan kwaikwayo inda mai ɗaukar aiki yake yin kamar abokin ciniki. Sannan sai tayin aiki, duba tarihi ko takardu, da horo mai albashi.",
            "Gwajin murya yana duba ko mutane suna fahimtar ku cikin sauƙi: kalmomi a sarari, gudun magana daidai, nahawu mai kyau da murya mai fara'a. Ba sai kun canja lafazinku (accent) ba. Ku yi magana a hankali sosai, ku kammala kalmominku, ku yi murmushi yayin da kuke magana; mutane suna ji.",
            "Ku yi atisaye a gida kyauta. Ku rubuta shafi daga littafi ko jarida a kowace manhajar rubutu na minti biyar, ku ƙirga kalmomin. Ku karanta gajeren labari da babbar murya, ku naɗa shi a wayarku, sannan ku saurara. Ku yi kiran gwaji da aboki da ke yin kamar abokin ciniki. Bayan an ɗauke ku, yawanci akwai horo a aji kan kayan client, sannan nesting: makonninku na farko a kira na gaske tare da ƙarin taimako."
          ],
          steps: [
            "Rubutu a kwamfuta: ku rubuta daga shafin takarda na minti 5, ku ƙirga kalmomin, ku raba da 5, ku maimaita kowace rana.",
            "Karatu da babbar murya: ku naɗa labari na minti 1, ku saurara, ku gyara kalmomin da kuka yi gaggawa ko kuka tsallake.",
            "Saurare: aboki ya karanta gajeren saƙo, ku rubuta shi, sannan ku duba.",
            "Kiran gwaji: aboki ya yi kamar abokin ciniki mai matsala mai sauƙi; ku buɗe, ku tambaya, ku warware, ku rufe."
          ],
          words: [
            ["Gwaji (assessment)", "gwajin da ke duba ƙwarewa kamar rubutu a kwamfuta, nahawu, karatu da saurare."],
            ["Kalmomi a minti ɗaya (words per minute)", "yawan kalmomin da kuke rubutawa a kwamfuta cikin minti ɗaya; hanya ɗaya ta auna saurin rubutu."],
            ["Kiran gwaji (mock call)", "kiran atisaye inda wani yake yin kamar abokin ciniki; ana amfani da shi a ɗaukar aiki da horo."],
            ["Nesting", "makonnin farko a kira na gaske bayan horo, tare da ƙarin taimako daga mai horarwa (coach)."]
          ],
          slides: [
            { title: "Hanyar ɗaukar aiki da aka saba a BPO", bullets: ["Cike fom, sannan gwaji ta intanet", "Gwajin murya ko harshe, sannan hirar aiki", "Kiran gwaji, tayin aiki, duba takardu, horo mai albashi"] },
            { title: "Gwajin murya", bullets: ["Mutane suna fahimtar ku cikin sauƙi?", "Kalmomi a sarari, gudu daidai, nahawu mai kyau, fara'a", "Ba sai kun canja lafazinku ba"] },
            { title: "Ku yi atisaye kyauta a gida", bullets: ["Ku rubuta daga shafin takarda na minti 5 a rana", "Ku naɗa kanku kuna karatu da babbar murya, ku saurara", "Kiran gwaji tare da aboki a matsayin abokin ciniki"] },
            { title: "Bayan an ɗauke ku", bullets: ["Horo a aji kan kayan client", "Nesting: makonnin farko a kira na gaske tare da coach"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Ku yi ƙananan atisaye uku yau, ku rubuta sakamakon: ku rubuta a kwamfuta na minti 5 ku lissafa kalmominku a minti ɗaya; ku naɗa kanku kuna karanta labari na minti 1, ku rubuta kalmomi biyu da za ku faɗa a sarari; ku rubuta buɗewa ta layi 3 da za ku yi amfani da ita a kiran gwaji.",
          youCanNow: "bayyana matakan ɗaukar aiki da aka saba a BPO, da yin atisayen gwajin rubutu a kwamfuta, na murya da na kiran gwaji a gida.",
          quickCheck: [
            { objective: "O3", q: "Me gwajin murya na BPO ya fi dubawa?", options: ["Ko mutane suna fahimtar ku a sarari", "Ko kuna da lafazin baƙi", "Ko kuna magana da sauri sosai", "Ko kun san farashin kayan client"], answer: 0, why: "Gwajin murya yana duba magana a sarari, gudu, nahawu da yanayin murya, ba wani lafazi na musamman ba." },
            { objective: "O3", q: "A minti 5 kun rubuta kalmomi 150. Kusan nawa ne saurin rubutunku?", options: ["Kalmomi 15 a minti ɗaya", "Kalmomi 75 a minti ɗaya", "Kalmomi 150 a minti ɗaya", "Kalmomi 30 a minti ɗaya"], answer: 3, why: "Kalmomi 150 an raba da minti 5 = kalmomi 30 a minti ɗaya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shiga aikin BPO",
        questions: [
          { objective: "O1", q: "Kuna kiran mutane don tunatar da su kuɗin da ba su biya ba. Wane irin aiki ne wannan?", options: ["Murya mai shigowa", "Murya mai fita", "Taimako ta chat", "Ofis na baya"], answer: 1, why: "Ku ne ke yin kiran, don haka murya ce mai fita." },
          { objective: "O1", q: "A BPO, wane ne client?", options: ["Kamfanin da ke biyan BPO don ya yi masa aiki", "Abokin ciniki da ke kira", "Shugaban ƙungiya (team leader)", "Hukumar ɗaukar aiki"], answer: 0, why: "Client ne ke biyan BPO; abokan cinikinsa su ne mutanen da ma'aikata ke taimakawa." },
          { objective: "O2", q: "Wane saƙo ne ya fi yiwuwa ya zama zamba?", options: ["Imel daga adireshin kamfanin da kansa da ke gayyatar ku zuwa gwaji ta intanet", "Aiki a shafin ayyuka na hukuma na kamfanin", "Saƙon WhatsApp da ke tayin albashi mai yawa idan kun aika kuɗi yau", "Hirar aiki ta waya da aka shirya ta shafin hukuma"], answer: 2, why: "Albashi mai yawa, tuntuɓa ta WhatsApp kawai, neman kuɗi da matsa muku yau duk alamun gargaɗi ne." },
          { objective: "O2", q: "Ta yaya ya kamata ku nemo ayyukan gaske na wani kamfani?", options: ["Ku danna hanyar haɗin da ke cikin saƙon mai ɗaukar aiki", "Ku nemo shafin hukuma na kamfanin da kanku ku yi amfani da shafin ayyukansa", "Ku roƙi mai ɗaukar aikin ya turo hoton allo", "Ku amince da kowane shafi mai tambarin kamfanin"], answer: 1, why: "Nemo shafin hukuma da kanku yana kare ku daga shafukan bogi da aka kwafa da tambarin kamfanin." },
          { objective: "O3", q: "Mene ne kiran gwaji (mock call)?", options: ["Kira na gaske da abokin ciniki mai fushi", "Kiran da kuke yi wa manajanku", "Waƙar da aka naɗa", "Wasan kwaikwayo na atisaye inda wani yake yin kamar abokin ciniki"], answer: 3, why: "Kiran gwaji kiran atisaye ne da ake amfani da shi a ɗaukar aiki da horo." }
        ]
      }
    },
    {
      name: "Babi na 2: Yin aikin da samun ci gaba",
      lessons: [
        {
          title: "Tsarin kira da takardar maki ta QA",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gudanar da kiran atisaye da ke buɗewa, tabbatarwa, warwarewa, maimaitawa da rufewa, da ba shi maki da takardar maki ta QA.",
          text: [
            "Kowane account yana da tsarin kira (call flow): matakan da ma'aikaci ke bi a kowane kira. Tsarin da aka saba shi ne: buɗewa (gaisuwa, sunanku, sunan kamfani, tayin taimako); tabbatarwa (tabbatar da ko wane ne abokin ciniki da tambayoyin tsaro na account); bincike (yin tambayoyi don gano ainihin matsalar); warwarewa (gyara ta ko bayyana mataki na gaba); maimaitawa (faɗin abin da aka yi); da rufewa (tambaya ko akwai wani abu kuma, da yin godiya).",
            "Ƙungiyar tabbatar da inganci (QA) tana sauraron kiran da aka naɗa, tana ba su maki a takardar maki ta QA (scorecard). Layukan sau da yawa sun haɗa da buɗewa, tabbatarwa, saurare da tausayi, bayani daidai, bayanan da kuka rubuta, da rufewa. Wasu layuka na bin ƙa'ida (compliance) ne: tsallake tabbatarwa ko bayyana bayanan sirri na iya sa dukan kiran ya faɗi.",
            "Ku tabbatar ta hanyar da account ɗinku ya horar da ku kawai. Kada ku taɓa neman cikakkiyar kalmar sirri ko code na amfani sau ɗaya da abokin ciniki bai buƙaci ya bayar ba, kuma kada ku taɓa karanta bayanan sirri ga wanda ba ku tabbatar da shi ba. Idan ba ku san amsa ba, ku sa abokin ciniki ya jira cikin ladabi, ku duba knowledge base ko ku tambayi shugaban ƙungiya."
          ],
          steps: [
            "Buɗewa: \"Thank you for calling [company], this is [name]. How may I help you today?\" (Na gode da kiran [kamfani], ni ne [suna]. Ta yaya zan taimaka muku yau?)",
            "Tabbatarwa: ku yi tambayoyin tsaro na account kafin ku tattauna account ɗin.",
            "Bincike: ku yi tambayoyi a buɗe, sannan ku tabbatar da matsalar a jimla ɗaya.",
            "Warwarewa: ku gyara ta, ko ku bayyana mataki na gaba da lokacin da zai faru.",
            "Maimaitawa da rufewa: ku faɗi abin da aka yi, ku tambaya ko akwai wani abu kuma, ku yi godiya."
          ],
          words: [
            ["Tsarin kira (call flow)", "ƙayyadaddun matakan da ma'aikaci ke bi a kowane kira."],
            ["Tabbatarwa (verification)", "duba cewa mai kiran shi ne mai account kafin a tattauna account ɗin."],
            ["QA (tabbatar da inganci)", "ƙungiyar da ke sauraron kira tana ba su maki bisa takardar maki."],
            ["Bin ƙa'ida (compliance)", "bin dokoki da ƙa'idodin client, kamar ƙa'idodin sirri da na tabbatarwa."],
            ["Knowledge base", "ma'ajiyar account ta amsoshi da matakai da aka amince da su."]
          ],
          slides: [
            { title: "Tsarin kira da aka saba", bullets: ["Buɗewa, tabbatarwa, bincike", "Warwarewa, maimaitawa, rufewa"] },
            { title: "Takardar maki ta QA", bullets: ["QA tana sauraron kiran da aka naɗa", "Layuka: buɗewa, tabbatarwa, tausayi, daidaito, bayanai, rufewa", "Kuskuren bin ƙa'ida na iya sa dukan kiran ya faɗi"] },
            { title: "Ku kare abokin ciniki", bullets: ["Ku tabbatar kafin ku tattauna account", "Kada ku nemi kalmar sirri da ba ku buƙata", "Ba ku tabbata ba? Ku sa shi jira cikin ladabi, ku duba knowledge base"] }
          ],
          tryIt: "Ku rubuta gajeren tsarin kiran atisaye: intanet na wani abokin ciniki ya yi jinkiri kwana biyu. Ku yi amfani da dukan matakai shida. Sannan ku yi kiran da aboki ko ku naɗa kanku kuna yin dukan ɓangarorin biyu, ku ba shi maki: a kowane mataki ku rubuta \"Ya cika\" ko \"Bai kai ba tukuna\".",
          youCanNow: "bin tsarin kira daga buɗewa zuwa rufewa, da duba kiranku da takardar maki ta QA.",
          quickCheck: [
            { objective: "O3", q: "Mai kira yana tambaya game da kuɗin da ke cikin account ɗinsa. Me za a fara yi?", options: ["Ku karanta kuɗin nan take", "Ku nemi cikakkiyar kalmar sirrinsa", "Ku tabbatar da ko wane ne shi da tambayoyin tsaro na account", "Ku tura shi zuwa wata ƙungiya"], answer: 2, why: "Tabbatarwa tana kare bayanan sirri na abokin ciniki, kuma yawanci layi ne na bin ƙa'ida a takardar maki." },
            { objective: "O3", q: "Wane mataki ne ke zuwa kafin rufewa kai tsaye?", options: ["Maimaitawa: faɗin abin da aka yi", "Buɗewa", "Tabbatarwa", "Gaisuwa"], answer: 0, why: "Maimaitawa tana tabbatar da abin da aka yi, don abokin ciniki ya tafi da tabbacin sakamakon." }
          ]
        },
        {
          title: "Lambobin aiki, jadawali da kula da kanku",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Bayyana manyan lambobi biyar na cibiyar kira, da rubuta tsarin shiri don aikin dare ko na gida.",
          text: [
            "Ana auna ma'aikata da lambobi, wanda ake kira KPIs sau da yawa. Average handle time (AHT) shi ne matsakaicin tsawon tuntuɓa ɗaya, har da lokacin jira da rubuta bayanai bayan kira. First contact resolution (FCR) shi ne sau nawa ake warware matsala a tuntuɓa ta farko. Customer satisfaction (CSAT) yana fitowa daga gajerun tambayoyin bincike bayan tuntuɓa. Makin QA yana fitowa daga takardar maki. Schedule adherence (bin jadawali) shi ne yadda kuke bin jadawalinku sosai: shiga a kan lokaci da ɗaukar hutu a lokutan da aka tsara.",
            "Lambobin suna jan juna. Gaggawa tana rage AHT, amma tana iya cutar da FCR da CSAT idan abokan ciniki suka sake kira. Hanyar gaskiya ta haɓaka ita ce ku san knowledge base sosai, ku saurara da kyau, ku rubuta bayanai masu kyau don ma'aikaci na gaba kada ya sake farawa.",
            "Accounts da yawa suna aiki awa 24 a rana, don haka lokutan aiki na iya zama da dare, a ƙarshen mako da ranakun hutu, sau da yawa daidai da lokacin ƙasar client. Ku tsara barcinku (ɗaki mai duhu da shiru, sa'o'i iri ɗaya kowace rana), tafiya lafiya da dare, abinci da ruwa. Don aiki daga gida: wuri mai shiru, headset (lasifikan kai mai makirufo), intanet mai sauri isasshe, da madadi idan wuta ko intanet ya ɗauke, tare da ƙa'idodin kamfanin na sirri a gida."
          ],
          words: [
            ["KPI", "key performance indicator: lambar da ake amfani da ita don auna yadda ake yin aiki."],
            ["AHT (average handle time)", "matsakaicin tsawon tuntuɓa ɗaya, har da jira da aikin bayan kira."],
            ["FCR (first contact resolution)", "sau nawa ake warware matsala a kira ko chat na farko."],
            ["CSAT (customer satisfaction)", "makin gamsuwa daga gajerun tambayoyin bincike na abokan ciniki bayan tuntuɓa."],
            ["Bin jadawali (schedule adherence)", "yadda ma'aikaci yake bin jadawalin da aka tsara na shiga, hutu da fita."]
          ],
          slides: [
            { title: "Lambobi biyar da ma'aikata ke haɗuwa da su", bullets: ["AHT: matsakaicin tsawon kira", "FCR: an warware a tuntuɓa ta farko", "CSAT: makin binciken abokan ciniki", "Makin QA da bin jadawali"] },
            { title: "Lambobin suna jan juna", bullets: ["Gaggawa tana rage AHT amma tana iya cutar da FCR da CSAT", "Ku san knowledge base, ku saurara, ku rubuta bayanai masu kyau"] },
            { title: "Aikin dare da sauran lokuta", bullets: ["Dare, ƙarshen mako da ranakun hutu a lokacin ƙasar client", "Sa'o'in barci iri ɗaya a ɗaki mai duhu da shiru", "Ku tsara tafiya lafiya da dare, abinci da ruwa"] },
            { title: "Aiki daga gida", bullets: ["Wuri mai shiru da headset", "Intanet mai sauri isasshe da madadin wuta ko data", "Ku bi ƙa'idodin kamfanin na sirri a gida"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Rahoton atisaye: AHT na Ama minti 4 ne (na ƙungiya minti 6), FCR ɗinta kashi 55 cikin 100 ne (ƙungiya kashi 75 cikin 100), kuma CSAT ɗinta ƙasa yake. A jimla biyu, ku bayyana abin da ke faruwa da gyara ɗaya na gaskiya. Sannan ku rubuta tsarin shirinku mai aƙalla abubuwa biyar: barci, tafiya, abinci, kayan aiki da madadin wuta ko intanet.",
          youCanNow: "bayyana AHT, FCR, CSAT, makin QA da bin jadawali, da tsara barcinku, tafiyarku da shirinku don aikin dare ko na gida.",
          quickCheck: [
            { objective: "O4", q: "Wani ma'aikaci yana da gajeren tsawon kira sosai, amma abokan ciniki da yawa suna sake kira. Wace lamba ce ta fi yiwuwa ta yi ƙasa?", options: ["Bin jadawali", "Saurin rubutu", "Yawan hutu", "Warware matsala a tuntuɓa ta farko (FCR)"], answer: 3, why: "Sake kiran abokan ciniki yana nufin ba a warware matsalolin a karon farko ba, don haka FCR ya yi ƙasa." },
            { objective: "O5", q: "Kuna aiki daga gida, kuma ana yawan ɗauke wuta a yankinku. Me ya kamata ya kasance a tsarin shirinku?", options: ["Babu komai; ku ce ba ku da lafiya idan wuta ta ɗauke", "Madadin wuta ko intanet, da sanar da shugaban ƙungiyarku da wuri", "Yin aiki a gidan shayi mai cunkoso ba tare da izini ba", "Amfani da lasifika a buɗe a ɗakin da ake rabawa"], answer: 1, why: "Madadi da sanarwa da wuri suna sa ku ci gaba da aiki, kuma kuna bin ƙa'idodin kamfanin." }
          ]
        },
        {
          title: "Samun ci gaba da tsarinku na kwanaki 90",
          objectives: ["O6"],
          minutes: 5,
          goal: "Rubuta tsarin kwanaki 90 don samun aiki, da faɗin matakinku na gaba a kan matakan ci gaban BPO.",
          text: [
            "BPO yana da matakan ci gaba. Ma'aikata za su iya zama manyan ma'aikata ko ƙwararru (SME), sannan shugabannin ƙungiya (team leader), sannan manajojin ayyuka (operations manager). Sauran hanyoyi sun haɗa da mai nazarin QA, mai horarwa, workforce management (tsara jadawali da yawan ma'aikata), ɗaukar ma'aikata, rahoto da bayanai, da taimakon IT. Kamfanoni da yawa sun fi son ƙara wa mutanen da suka riga suka san account matsayi.",
            "Abin da ke taimaka muku samun ci gaba: lambobi masu dorewa, zuwa aiki a kai a kai, horar da wasu, harshe na biyu, da gajerun kwasa-kwasai. Wasu gwamnatoci suna ba da horo: TESDA ta Philippines tana kafa ma'auni kuma tana ba da horo da takardar shaida, kuma shirin Ajira Digital na Kenya yana ƙarfafa aikin intanet. Ku duba shafukan hukuma don ganin abin da ake bayarwa yanzu.",
            "Tsarinku na kwanaki 90 yana haɗa komai. Makonni 1 zuwa 2: ku zaɓi nau'in aiki ku duba kamfanoni uku a shafukansu na hukuma. Makonni 3 zuwa 8: ku yi atisayen rubutu a kwamfuta, karatu da babbar murya da kiran gwaji a ƙayyadaddun ranaku, ku nema a shafukan ayyuka na hukuma. Makonni 9 zuwa 12: ku ci gaba da nema, ku bibiya cikin ladabi, ku shirya don horo. Sannan ku rubuta mataki ɗaya na ci gaba da kuke so cikin shekara ɗaya."
          ],
          steps: [
            "Ku rubuta nau'in aikin da kuke so (na murya ko ba na murya ba, mai shigowa ko mai fita) da dalili.",
            "Ku duba kamfanoni uku na gaske a shafukansu na hukuma ku rubuta adiresoshin.",
            "Ku ƙara jerin alamun zamba naku daga Darasi na 2.",
            "Ku saka ranakun atisaye a kalanda: rubutu a kwamfuta, karatu da babbar murya, kiran gwaji.",
            "Ku rubuta tsarin shirinku na aikin dare ko na gida daga Darasi na 5.",
            "Ku faɗi mataki ɗaya na ci gaba na shekara mai zuwa da abu ɗaya da za ku yi don kaiwa gare shi."
          ],
          words: [
            ["SME (subject matter expert)", "ƙwararren ma'aikaci da sauran ma'aikata ke tambaya taimako kan matsaloli masu wuya."],
            ["Shugaban ƙungiya (team leader)", "mai kula da ke horar da ƙungiyar ma'aikata yana kuma duba lambobinsu."],
            ["Workforce management (WFM)", "ƙungiyar da ke hasashen yawan kira tana tsara jadawali da yawan ma'aikata."],
            ["TESDA", "hukumar gwamnatin Philippines ta ilimin fasaha da horon sana'o'i."]
          ],
          slides: [
            { title: "Matakan ci gaba a BPO", bullets: ["Ma'aikaci, babban ma'aikaci ko SME, team leader, operations manager", "Sauran hanyoyi: QA, mai horarwa, workforce management, ɗaukar ma'aikata, IT"] },
            { title: "Abin da ke taimaka muku ci gaba", bullets: ["Lambobi masu dorewa da zuwa aiki a kai a kai", "Horar da wasu da harshe na biyu", "Gajerun kwasa-kwasai da shirye-shiryen horo na hukuma"] },
            { title: "Tsarinku na kwanaki 90", bullets: ["Makonni 1-2: nau'in aiki da kamfanoni uku da aka duba", "Makonni 3-8: atisaye da nema a shafukan hukuma", "Makonni 9-12: bibiya da shiri don horo"] }
          ],
          sources: [TESDA, AJIRA, IBPAP],
          tryIt: "Ku fara tsarinku na kwanaki 90 yanzu. A takarda ko a wata takarda ta kwamfuta, ku rubuta ranar yau, nau'in aikin da kuke so, sunaye da adiresoshin shafukan hukuma na kamfanoni uku da kuka duba, da ranakun atisayenku uku na farko.",
          youCanNow: "rubuta tsarin kwanaki 90 mai ranaku don samun aiki a BPO, da faɗin matakinku na gaba na ci gaba.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne ainihin mataki na ci gaba daga ma'aikaci a kamfanonin BPO da yawa?", options: ["Abokin ciniki", "Client", "Shugaban ƙungiya (team leader)", "Kuɗin ɗaukar aiki"], answer: 2, why: "Ma'aikata sukan koma SME, sannan team leader, sannan operations manager." },
            { objective: "O6", q: "Daga ina ya kamata kamfanonin da ke tsarinku su fito?", options: ["Shafukansu na hukuma da kuka nemo da kanku", "Ƙungiyar WhatsApp da ke sayar da jerin ayyuka", "Kowace talla da ke alƙawarin albashi mai yawa", "Mai ɗaukar aiki da ke neman kuɗi"], answer: 0, why: "Shafukan hukuma da kuka nemo da kanku su ne hanya mafi aminci ta tabbatar da cewa kamfani na gaske ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yin aikin da samun ci gaba",
        questions: [
          { objective: "O3", q: "A takardun maki na QA da yawa, wane kuskure ne zai iya sa dukan kiran ya faɗi?", options: ["Yin godiya sau biyu", "Ɗan tsayawa kafin amsa", "Murmushi yayin magana", "Tsallake tabbatarwa kafin bayyana bayanan account"], answer: 3, why: "Tabbatarwa layi ne na bin ƙa'ida; tsallake ta yana jefa bayanan abokin ciniki cikin haɗari." },
          { objective: "O4", q: "Me CSAT ke auna?", options: ["Tsawon lokacin kiran", "Yadda abokan ciniki suka ce sun gamsu a bincike", "Sau nawa kuka shiga a kan lokaci", "Saurin rubutunku"], answer: 1, why: "CSAT shi ne makin gamsuwar abokin ciniki daga gajerun tambayoyin bincike bayan tuntuɓa." },
          { objective: "O4", q: "Kullum kuna dawowa daga hutu da jinkirin minti 10. Wace lamba ce ke faɗuwa?", options: ["Bin jadawali", "Warware matsala a tuntuɓa ta farko", "Saurin rubutu", "Makin tabbatarwa na QA"], answer: 0, why: "Bin jadawali yana auna yadda kuke bin lokutan shiga da hutunku." },
          { objective: "O5", q: "Za ku fara aikin dare mako mai zuwa. Wanne ne tsari mai kyau?", options: ["Yin barci a lokuta daban-daban kowace rana", "Shan abubuwan sha masu ƙara kuzari maimakon barci", "Sa'o'in barci iri ɗaya a ɗaki mai duhu da shiru, da hanyar komawa gida lafiya", "Tafiya gida kai kaɗai a hanyoyi marasa haske"], answer: 2, why: "Barci a kai a kai a ɗaki mai duhu da tafiya lafiya suna kare lafiyarku da tsaronku a aikin dare." },
          { objective: "O6", q: "Me workforce management (WFM) ke yi?", options: ["Karɓar kiran abokan ciniki kawai", "Hasashen yawan kira da tsara jadawali da yawan ma'aikata", "Sayar da kaya ga clients", "Duba fasfo ɗinku"], answer: 1, why: "WFM tana tsara yawan ma'aikatan da ake buƙata da lokacin da ake buƙatarsu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sana'o'in Cibiyar Kira (Call Center) da Ayyukan BPO",
    questions: [
      { objective: "O1", q: "Mene ne ma'anar BPO?", options: ["Business process outsourcing (ba wani kamfani aikin wani sashe na kasuwanci)", "Ayyukan waya na farko", "Ofishin biyan kuɗi na banki", "Odar kayan kasuwanci"], answer: 0, why: "BPO shi ne business process outsourcing: wani kamfani yana yi wa wani kamfani wani sashe na aikinsa." },
      { objective: "O1", q: "Kuna amsa imel da chat na abokan cinikin wani shagon intanet. Wane irin aiki ne wannan?", options: ["Murya mai fita", "Murya mai shigowa", "Taimako wanda ba na murya ba", "Sayarwa a fili"], answer: 2, why: "Imel da chat aiki ne da ba na murya ba." },
      { objective: "O1", q: "Wani account yana yi wa abokan ciniki masu Faransanci hidima. Wace ƙwarewa ce ta fi muhimmanci ga ma'aikatansa?", options: ["Tuƙa mota", "Faransanci mai kyau a magana da rubutu", "Rubutun hannu da sauri", "Sanin nau'o'in waya da yawa"], answer: 1, why: "Harshen account sau da yawa shi ne babbar ƙwarewar da BPO ke ɗaukar aiki da ita." },
      { objective: "O2", q: "Wanne ne alamar gargaɗin aikin bogi?", options: ["Gwaji ta intanet daga shafin kamfanin da kansa", "Aikin da aka jera a shafin ayyuka na hukuma", "Hirar aiki da aka shirya ta imel na kamfanin da kansa", "Kuɗin da dole ku biya kafin ku fara"], answer: 3, why: "Masu ɗaukar aiki na gaske ba sa karɓar kuɗi daga gare ku don ɗaukar ku." },
      { objective: "O2", q: "Wani \"mai ɗaukar aiki\" ya turo muku cak don ku saka a banki, sannan ya ce ku mayar da wani sashe don kayan aiki. Mene ne wannan?", options: ["Zambar cak na bogi da aka saba", "Hanyar da aka saba ta sayen headset", "Kyautar sa hannu", "Alawus na horo"], answer: 0, why: "Cak ɗin zai dawo daga baya ba tare da kuɗi ba, kuma za ku bi bankin bashin kuɗin da kuka aika." },
      { objective: "O2", q: "Wata hukuma tana muku tayin aikin cibiyar kira a ƙasar waje. Me za ku fara dubawa?", options: ["Yawan mabiyanta a kafofin sada zumunta", "Ko tana alƙawarin albashi mai yawa", "Ko ofishin ƙwadago ko na ma'aikata 'yan ci-rani na gwamnatinku ya ba ta lasisi", "Ko tana son fasfo ɗinku na asali"], answer: 2, why: "Za a iya duba hukuma mai lasisi a jerin hukuma; marasa lasisi babban haɗari ne." },
      { objective: "O3", q: "Wace ce hanya mafi kyau ta shiryawa gwajin murya na BPO?", options: ["Ƙoƙarin kwaikwayon wani lafazi", "Naɗa kanku kuna karatu da babbar murya, ku gyara kalmomin da ba su fita a sarari ba", "Magana da sauri gwargwadon iko", "Haddace farashin kayan client"], answer: 1, why: "Naɗawa da sauraro suna taimaka muku yin magana a sarari da gudu daidai." },
      { objective: "O3", q: "Mene ne nesting?", options: ["Makonninku na farko a kira na gaske tare da ƙarin taimako", "Ɗakin hutu", "Wani irin kuɗin ɗaukar aiki", "Kyautar aikin dare"], answer: 0, why: "Nesting yana zuwa bayan horo a aji: kira na gaske tare da horarwa." },
      { objective: "O3", q: "A tsarin kira, me matakin bincike ke yi?", options: ["Yana yi wa abokin ciniki godiya", "Yana kawo ƙarshen kira", "Yana sa abokin ciniki ya jira", "Yana yin tambayoyi don gano ainihin matsalar"], answer: 3, why: "Bincike yana gano ainihin matsalar kafin ku yi ƙoƙarin warware ta." },
      { objective: "O3", q: "Ba ku san amsar tambayar abokin ciniki ba. Me za ku yi?", options: ["Ku yi zato don kiran ya gajarta", "Ku katse wayar", "Ku sa shi jira cikin ladabi ku duba knowledge base ko ku tambayi team leader", "Ku ce masa ya kira wani kamfani"], answer: 2, why: "Duba amsar da aka amince da ita yana sa bayanin ya zama daidai, kuma kiran ya kasance na ƙwarewa." },
      { objective: "O4", q: "Me AHT ya ƙunsa?", options: ["Lokacin da kuke magana kawai", "Lokacin magana, lokacin jira da rubuta bayanai bayan kira", "Lokacin hutunku kawai", "Lokacin da ke tsakanin aiki ɗaya da na gaba"], answer: 1, why: "Average handle time yana ƙirga dukan tuntuɓar, har da jira da aikin bayan kira." },
      { objective: "O4", q: "Wace ce hanyar gaskiya ta ƙara warware matsala a tuntuɓa ta farko?", options: ["Katse kira masu wuya", "Ce wa abokan ciniki su sake kira daga baya", "Rubuta cewa an warware kira alhali ba a warware ba", "Koyon knowledge base da tabbatar da gyaran kafin rufewa"], answer: 3, why: "Sanin amsoshi da tabbatar da gyara suna warware ƙarin matsaloli a tuntuɓa ta farko." },
      { objective: "O4", q: "Wane ne yawanci ke ba da makin QA?", options: ["Ƙungiyar inganci, ta amfani da takardar maki a kan kiran da aka naɗa", "Abokin ciniki, a bincike", "Lauyan client", "Hukumar ɗaukar aiki"], answer: 0, why: "Masu nazarin QA suna sauraron kira suna ba su maki a takardar maki; CSAT kuma daga abokan ciniki yake." },
      { objective: "O5", q: "Me yasa ayyukan BPO da yawa suke da aikin dare?", options: ["Kiran dare ba a biyan haraji a kansu", "Ofisoshi sun fi araha da dare", "Accounts sukan bi lokacin ƙasar client kuma suna aiki awa 24", "Abokan ciniki suna kira da dare kawai"], answer: 2, why: "Accounts da yawa suna yi wa abokan ciniki a wasu yankunan lokaci hidima, ko suna aiki dare da rana." },
      { objective: "O5", q: "Wane abu ne ya dace a tsarin shirin aiki daga gida?", options: ["Ɗaki mai hayaniya da ake rabawa", "Headset da madadin wuta ko intanet", "Imel na kanku don bayanan abokan ciniki", "Talabijin a kunne lokacin kira"], answer: 1, why: "Headset da madadi suna sa kira ya fita a sarari kuma suna sa ku ci gaba da aiki lokacin da wuta ko intanet ya ɗauke." },
      { objective: "O5", q: "Wane ne tsari mafi aminci na komawa gida bayan aikin dare?", options: ["Ku tsara abin hawa mai aminci ko motar kamfani kafin aikin", "Ku karɓi ɗaukar mota daga kowane baƙo", "Ku yi tafiya kai kaɗai a tituna marasa haske", "Ku yanke shawara idan aikin ya ƙare"], answer: 0, why: "Tsara tafiya mai aminci tun da wuri yana kare ku da dare." },
      { objective: "O6", q: "Wanne ne wata hanya ta daban a sana'ar BPO?", options: ["Abokin ciniki", "Kuɗin ɗaukar aiki", "Mai kira", "Mai nazarin tabbatar da inganci (QA)"], answer: 3, why: "QA, horarwa, workforce management da ɗaukar ma'aikata hanyoyi ne da aka saba." },
      { objective: "O6", q: "Me ke shiga makonni 3 zuwa 8 na tsarinku na kwanaki 90?", options: ["Babu komai; ku jira kira", "Biyan mai ɗaukar aiki don ya nemo muku aiki", "Atisaye a ƙayyadaddun ranaku da nema a shafukan ayyuka na hukuma", "Bayar da fasfo ɗinku ga wata hukuma"], answer: 2, why: "Atisaye a kai a kai da nema a shafukan hukuma su ne ginshiƙin tsarin." },
      { objective: "O6", q: "Me ke taimaka wa ma'aikaci a ƙara masa matsayi zuwa team leader?", options: ["Lambobi masu dorewa, zuwa aiki a kai a kai da taimakon wasu", "Dawowa daga hutu a makare", "Guje wa horar da wasu", "Canja account kowane wata"], answer: 0, why: "Lambobi masu dogaro, zuwa aiki da horar da wasu suna nuna shugabanci." },
      { objective: "O2", q: "Kun gano cewa tayin aiki na bogi ne bayan kun aika hoton katin shaidarku. Me za ku yi?", options: ["Ku aika ƙarin takardu don ku tabbatar da kanku", "Ku biya kuɗin don su mayar muku da hotonku", "Ku goge saƙonnin ku manta", "Ku daina tuntuɓarsu, ku ajiye hotunan allo, ku kai rahoto ga 'yan sanda ko ofishin hukuma na yaƙi da zamba"], answer: 3, why: "Ajiye shaida da kai rahoto suna taimaka wajen kare ku da wasu daga amfani da shaidarku ba bisa ƙa'ida ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 6, 10, 13, 16, 8] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "An zaɓi nau'in aiki", objective: "O1", notYet: "Babu nau'in aiki, ko an haɗa na murya da wanda ba na murya ba.", meets: "Ya faɗi na murya ko ba na murya ba, mai shigowa ko mai fita, da babbar ƙwarewar da yake buƙata.", exceeds: "Ya kuma bayyana dalilin da yasa ya dace da ƙwarewarsa da harsunansa." },
      { name: "An duba kamfanoni, an guje wa zamba", objective: "O2", notYet: "Kamfanonin sun fito daga talla ko saƙonni, ko tsarin yana da biyan kuɗi.", meets: "Kamfanoni uku da adiresoshin shafukansu na hukuma, da jerin alamun zamba aƙalla huɗu.", exceeds: "Ya kuma rubuta yadda ake duba lasisin hukuma don ayyuka a waje, da inda ake kai rahoton zamba." },
      { name: "Kiran atisaye", objective: "O3", notYet: "Kiran da aka naɗa ya tsallake matakai, ko ya tsallake tabbatarwa.", meets: "Ya buɗe, ya tabbatar, ya bincika, ya warware, ya maimaita, ya rufe; \"Ya cika\" a kowane layin takardar maki.", exceeds: "Mai koyo ya faɗi abu ɗaya da zai inganta, kuma ya naɗa ƙoƙari na biyu mafi kyau." },
      { name: "Ya san lambobin", objective: "O4", notYet: "Ba zai iya faɗin abin da AHT, FCR, CSAT, makin QA da bin jadawali ke auna ba.", meets: "Ya bayyana dukansu biyar, kowanne da hanya ɗaya ta gaskiya ta inganta shi.", exceeds: "Ya bayyana yadda gaggawa ke iya rage AHT amma ta cutar da FCR da CSAT." },
      { name: "Tsarin shiri", objective: "O5", notYet: "Abubuwa ƙasa da biyar, ko babu tsarin madadi.", meets: "Aƙalla abubuwa biyar: barci, tafiya, abinci, kayan aiki da madadin wuta ko intanet.", exceeds: "Ya ƙara ƙa'idodin sirri na kamfanin don aikin gida, da tsarin sanar da team leader matsaloli da wuri." },
      { name: "Tsarin kwanaki 90", objective: "O6", notYet: "Babu ranaku, ko ba a faɗi matakin ci gaba ba.", meets: "Matakan atisaye da nema masu ranaku a cikin kwanaki 90, da mataki ɗaya na ci gaba cikin shekara ɗaya.", exceeds: "Ya faɗi takamaiman ƙwarewa ko kwas don matakin ci gaban, da lokacin da zai fara shi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi aiki a aƙalla kamfanonin BPO uku da aka duba cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da aka gayyata zuwa gwajin ɗaukar aiki ko hirar aiki, da waɗanda aka ɗauka, cikin kwanaki 90",
      "Masu koyo da suka ce sun gane ƙoƙarin zamba kuma ba su biya ba",
      "Masu koyo da aka ɗauka da har yanzu suke aiki bayan kwanaki 90 (watannin farko ne mutane da yawa ke barin aiki)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet; takarda da alƙalami don kowane aiki",
      "Wayar da ke naɗa murya don atisayen karatu da babbar murya da kiran gwaji",
      "Abokin atisayen kiran gwaji (aboki, ɗan iyali ko abokin aji), ko mai koyo ya yi dukan ɓangarorin biyu",
      "Shafin takarda daga littafi ko jarida don atisayen rubutu a kwamfuta, da kowace manhajar rubutu",
      "Kusan minti 70 gaba ɗaya, a gajerun zama, tare da atisaye a tsawon tsarin kwanaki 90"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare. Sannan ku yi babi ɗaya a kowane zama, da kiran gwaji bibbiyu a Babi na 2.",
      "Ku kawo tallace-tallacen aiki na gaske na yankinku, an cire sunayen kamfanoni, ku sa masu koyo su rarraba su da nau'in aiki su duba alamun zamba.",
      "Idan za ku iya, ku gayyaci team leader, mai ɗaukar aiki ko mai horarwa daga wani BPO na yankinku don ya bayyana ainihin matakan ɗaukar aikinsu; gwaje-gwajen ɗaukar aiki sun bambanta da kamfani.",
      "Kada ku taɓa neman masu koyo su faɗi lambobin katin shaida, kalmomin sirri ko bayanan banki na gaske a atisaye; ku yi amfani da bayanan account na ƙirƙira.",
      "Don ayyuka a waje, ku nuna wa masu koyo jerin hukuma na hukumomin ɗaukar aiki masu lasisi a ƙasarku, da inda ake kai rahoton ɗaukar aiki ba bisa doka ba.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
