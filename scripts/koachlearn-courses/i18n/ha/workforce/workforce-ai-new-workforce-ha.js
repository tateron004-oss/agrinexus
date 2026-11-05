"use strict";

// Koach Learn course, Hausa (ha) translation of workforce/workforce-ai-new-workforce.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const BLS_OOH = { name: "Hukumar Ƙididdigar Ma'aikata ta Amurka (BLS): Occupational Outlook Handbook (da Turanci)", url: "https://www.bls.gov/ooh/" };
const CAREERONESTOP = { name: "CareerOneStop (Ma'aikatar Ƙwadago ta Amurka): nemo horo da American Job Centers (da Turanci)", url: "https://www.careeronestop.org/" };

module.exports = {
  id: "workforce-ai-new-workforce-ha",
  lang: "ha",
  translationOf: "workforce-ai-new-workforce",
  category: "Workforce Development",
  name: "AI a Sabuwar Duniyar Aiki",
  skills: "Fahimtar yadda AI ke canja ayyuka, Raba aikinku zuwa ƙananan ayyuka, Gane ayyukan da AI zai iya taimakawa da su, Nemo bayanan hukuma game da makomar aiki, Gina shirin koyon sababbin ƙwarewa na kwana 90, Magana game da ƙwarewar AI da masu ɗaukar aiki",
  outcome: "raba aikinku na yanzu ko wanda kuke nema zuwa ƙananan ayyuka, alamta waɗanda AI zai iya taimakawa da su da waɗanda suke buƙatar ƙwarewar ɗan adam, duba makomar fannin aikinku a majiyar hukuma, sannan ku mayar da wannan zuwa shirin koyon sababbin ƙwarewa na kwana 90 da gajeriyar hanya ta gaskiya ta bayyana ƙwarewarku ta AI ga mai ɗaukar aiki.",
  about: [
    "Wannan kwas ɗin na masu neman aiki ne da ma'aikata da ke yawan jin cewa AI zai canja ayyuka, kuma suna son sanin abin da hakan yake nufi gare su: ma'aikatan rumbun ajiyar kaya da jigilar kaya, ma'aikatan shago da hidimar abokan ciniki, ma'aikatan ofis, masu taimakon kiwon lafiya, masu sana'o'in hannu da direbobi.",
    "Za ku koyi yadda AI yakan canja ƙananan ayyuka maimakon aiki gaba ɗaya, ku duba aikinku ɗaya bayan ɗaya, ku nemo bayanai amintattu game da fannin aikinku, sannan ku yi shiri mai amfani don gina ƙwarewar da za ta sa ku ci gaba da zama masu daraja. A ƙarshe za ku yi atisayen yadda ake magana game da ƙwarewar AI a hirar neman aiki ko a tattaunawa da shugabanku.",
    "Ba mu faɗin waɗanne ayyuka za su ɓace ba, kuma babu kwas da zai iya alƙawarin aiki ko ƙarin albashi. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi shirinku na aiki da AI: jerin ƙananan ayyukan aikinku na yanzu ko wanda kuke nema, kowanne da alamar \"AI zai iya taimakawa\", \"ƙwarewar ɗan adam\" ko \"duka biyun\"; bayanai uku game da fannin aikinku daga BLS Occupational Outlook Handbook; shirin koyon sababbin ƙwarewa na kwana 90 mai ƙwarewa uku, kayan koyo kyauta da lokacin kowane mako; da amsa ta daƙiƙa 30 ga tambayar \"Yaya kuke amfani da AI a aikinku?\" wadda take ta gaskiya kuma a sarari.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu neman aiki da manyan ma'aikata da ke yawan jin cewa AI zai canja ayyuka: ma'aikatan rumbun ajiyar kaya da jigilar kaya, ma'aikatan shago da hidimar abokan ciniki, ma'aikatan ofis, masu taimakon kiwon lafiya, masu sana'o'in hannu da direbobi.",
    startingPoint: "Sun san aikinsu sosai kuma za su iya amfani da wayar zamani ko kwamfuta. Da yawa suna damuwa ko ba su da tabbas game da AI, ba su taɓa duba bayanan hukuma game da makomar aiki ba, kuma ba su da rubutaccen shiri na gina sababbin ƙwarewa.",
    gap: "AI yana canja waɗanne ayyuka ne ke ɗaukar lokaci a cikin ayyuka da yawa. Masu koyo suna buƙatar ganin waɗanne daga cikin ayyukansu AI zai iya taimakawa da su da waɗanda suke buƙatar ƙwarewar ɗan adam, su duba makomar fannin aikinsu a majiyar hukuma, kuma su bi shiri na gaskiya don gina ƙwarewar da za su iya bayyanawa ga mai ɗaukar aiki da gaskiya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ba a ɗauka cewa suna da ilimin fasaha ba",
      "Na'urori: wayar zamani ko kwamfuta mai intanet; da yawa suna amfani da kwamfutar ɗakin karatu ko ta American Job Center",
      "Lokaci: darussa na kusan minti 5 da shirin 'yan sa'o'i a mako da ya dace da aiki da iyali",
      "Sirri da ƙa'idoji: babu bayanan sirri ko bayanan kamfani na sirri a kayan AI; ƙa'idojin AI na mai ɗaukar aiki su ne na farko",
      "Ƙididdigar makomar aiki daga shafin hukuma na BLS take, ba daga AI ba"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya ɗaukar kwas ɗin \"Essential AI Tools for the Workplace\" (Muhimman Kayan AI a Wurin Aiki) tare da wannan kwas ɗin."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku aikinku na yanzu ko na ƙarshe", action: "jera aƙalla ƙananan ayyuka takwas a cikin aikin da bayyana yadda AI ke shafar ƙananan ayyuka maimakon aiki gaba ɗaya", standard: "da kalmominku" },
    { id: "O2", condition: "Idan aka ba ku jerin ƙananan ayyukanku", action: "sa wa kowane aiki alamar \"AI zai iya taimakawa\", \"ƙwarewar ɗan adam\" ko \"duka biyun\"", standard: "kowane aiki yana da alama, kuma ku ne kuke yanke hukunci na ƙarshe" },
    { id: "O3", condition: "Don aikinku na yanzu ko wanda kuke nema", action: "duba makomar aikin a BLS Occupational Outlook Handbook da nemo American Job Center mafi kusa da ku", standard: "da bayanai uku da aka ɗauko daga shafin hukuma" },
    { id: "O4", condition: "Idan aka ba ku tallace-tallacen aiki guda uku na gaske don aikin da kuke so", action: "zaɓar ƙwarewa uku da za ku gina da bayyana dalilin muhimmancin kowacce", standard: "ƙwarewar kayan AI ɗaya, ƙwarewar fanni ɗaya da ƙwarewar ɗan adam ɗaya" },
    { id: "O5", condition: "Don ƙwarewarku guda uku", action: "rubuta shirin koyon sababbin ƙwarewa na kwana 90 mai kayan koyo, lokacin kowane mako da shaida ga kowace ƙwarewa", standard: "makonni biyu na farko na karatu suna cikin kalandarku" },
    { id: "O6", condition: "Idan mai ɗaukar aiki ya tambayi yadda kuke amfani da AI", action: "ba da amsa ta daƙiƙa 30 bisa tsarin Aiki-Kayan aiki-Dubawa-Sakamako", standard: "wadda take ta gaskiya, a sarari, kuma ta bi ƙa'idojin AI na mai ɗaukar aikinku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda AI ke canja aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI yana canja ƙananan ayyuka, ba aiki gaba ɗaya kawai ba",
          minutes: 5,
          goal: "Bayyana yadda AI ke shafar ƙananan ayyukan da ke cikin aiki.",
          text: [
            "Kowane aiki tarin ƙananan ayyuka ne. Mai karɓar baƙi a asibiti yana amsa waya, yana tsara ganawa, yana duba inshora, yana gaishe da marasa lafiya, kuma yana kwantar da hankalin mutanen da ke damuwa. Shugaban rumbun ajiyar kaya yana tsara sauye-sauyen aiki, yana bin diddigin kaya, yana horar da sababbin ma'aikata, kuma yana warware matsaloli a wurin aiki.",
            "Kayan AI suna da kyau a wasu ayyuka: rubuta daftarin saƙo, taƙaitawa, bincike cikin bayanai, cike fom, rarrabawa da gane alamu. Suna da rauni a wasu: aikin hannu na jiki, fahimtar yanayin mutane, gina amincewa, magance sabon abu, da ɗaukar alhaki.",
            "Saboda haka a ayyuka da yawa, AI yana canja waɗanne ƙananan ayyuka ne ke ɗaukar lokaci. Mutanen da suka koyi amfani da AI don ayyukan yau da kullum sau da yawa suna samun ƙarin lokaci don ayyukan da ke buƙatar ɗan adam, kuma hakan zai iya ƙara musu daraja."
          ],
          words: [["Ƙaramin aiki (task)", "wani yanki na aiki a cikin aiki, kamar tsara ganawa."], ["Aikin yau da kullum (routine task)", "aikin da ake yi ta hanya ɗaya akai-akai."], ["Koyon sababbin ƙwarewa (upskilling)", "koyon sababbin ƙwarewa don ku yi aikinku da kyau ko ku sami ci gaba."]],
          slides: [
            { title: "Aiki tarin ƙananan ayyuka ne", bullets: ["Mai karɓar baƙi: waya, tsara ganawa, inshora, gaisuwa", "Shugaban rumbun kaya: sauye-sauyen aiki, kaya, horo, matsaloli"] },
            { title: "Abin da AI ke yi da kyau", bullets: ["Rubuta daftari da taƙaitawa", "Bincike da cike fom", "Rarrabawa da gane alamu"] },
            { title: "Abin da mutane suka fi yi da kyau", bullets: ["Aikin hannu na jiki", "Fahimtar yanayin mutane da gina amincewa", "Magance sabon abu; ɗaukar alhaki"] }
          ],
          tryIt: "Ku rubuta sunan aikinku na yanzu ko na ƙarshe, sannan ku jera aƙalla ƙananan ayyuka takwas da kuke yi (ko kuka yi) a mako na yau da kullum.",
          youCanNow: "bayyana yadda AI ke shafar ƙananan ayyukan da ke cikin aiki.",
          quickCheck: [
            { objective: "O1", q: "Mene ne aiki, idan kuna tunanin yadda AI ke canja aiki?", options: ["Ƙaramin aiki guda ɗaya", "Sunan aiki kawai", "Tarin ƙananan ayyuka", "Jerin kayan aiki"], answer: 2, why: "Aiki tarin ƙananan ayyuka ne, kuma AI yana canja wasu fiye da wasu." },
            { objective: "O1", q: "Kuna son ganin yadda AI zai iya shafar aikinku. Me za ku fara yi?", options: ["Ku jera ƙananan ayyukan da kuke yi a mako na yau da kullum", "Ku bar aiki ku nemi sabo", "Ku tambayi AI ko za a maye gurbinku", "Ku ƙyale AI gaba ɗaya"], answer: 0, why: "Jera ƙananan ayyukanku yana nuna waɗanda AI zai iya taimakawa da su da waɗanda suka dogara gare ku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sa alama a ayyukanku: AI zai iya taimakawa, ƙwarewar ɗan adam, ko duka biyun",
          minutes: 5,
          goal: "Rarraba ƙananan ayyukan aikinku bisa inda AI zai iya taimakawa.",
          text: [
            "Ku ɗauki jerin ayyukanku ku sa wa kowanne alama. \"AI zai iya taimakawa\": rubuta imel, yin jerin abubuwan dubawa, taƙaita doguwar ƙa'ida. \"Ƙwarewar ɗan adam\": kwantar da hankalin abokin ciniki da ya fusata fuska da fuska, ɗaga kaya da lodawa lafiya, gyara inji. \"Duka biyun\": rubuta rahoto inda AI ke rubuta daftari kuma ku kuke duba gaskiyar bayanai, ko tsara jadawali inda AI ke ba da shawara kuma ku kuke yanke shawara.",
            "Kuna iya neman mataimakin AI ya taimake ku yin tunani: \"Ni shugaban sauyin aiki ne a shago. Ga ayyukana. Waɗanne ne mataimakin AI zai iya taimakawa da su, kuma ta yaya?\" Sannan ku yi amfani da hankalinku; kun san aikin fiye da shi.",
            "Ku duba ayyukan \"ƙwarewar ɗan adam\". Waɗannan ƙarfinku ne da za ku haɓaka kuma ku yi magana a kansu da masu ɗaukar aiki: sadarwa, aiki tare, warware matsaloli, kiyaye lafiya, kulawa."
          ],
          steps: ["Ku sa wa kowane aiki alama: AI zai iya taimakawa, ƙwarewar ɗan adam, ko duka biyun.", "Ku nemi ra'ayoyi daga mataimakin AI, sannan ku yanke shawara da kanku.", "Ku zagaye ayyuka biyu na \"AI zai iya taimakawa\" da za ku gwada a wannan watan.", "Ku ja layi a ƙarƙashin ayyukanku mafi ƙarfi na \"ƙwarewar ɗan adam\"."],
          words: [["Ƙwarewar ɗan adam (human skills)", "ƙwarewa kamar sadarwa, aiki tare, hankali da kulawa da mutane suka fi yi da kyau; ana kuma kiran su soft skills ko durable skills."]],
          slides: [
            { title: "Alamomi uku", bullets: ["AI zai iya taimakawa: imel, jerin dubawa, taƙaitawa", "Ƙwarewar ɗan adam: kwantar da hankali, ɗaga kaya lafiya, gyara", "Duka biyun: AI yana rubuta daftari, ku kuke dubawa da yanke shawara"] },
            { title: "Ku tambayi AI, sannan ku yanke shawara", bullets: ["\"Waɗanne ayyukana ne AI zai iya taimakawa da su?\"", "Kun san aikin fiye da shi"] },
            { title: "Ƙarfinku", bullets: ["Sadarwa da aiki tare", "Warware matsaloli da kiyaye lafiya", "Kulawa da hankali"] }
          ],
          tryIt: "Ku sa wa kowane aiki a jerinku alama. Ku zagaye ayyuka biyu na \"AI zai iya taimakawa\" da za ku gwada a wannan watan, kuma ku ja layi a ƙarƙashin ayyukanku biyu mafi ƙarfi na ƙwarewar ɗan adam.",
          youCanNow: "rarraba ƙananan ayyukan aikinku bisa inda AI zai iya taimakawa da inda ƙwarewarku ta ɗan adam ta fi muhimmanci.",
          quickCheck: [
            { objective: "O2", q: "Wane aiki ne ƙwarewar ɗan adam?", options: ["Kwafar lambobi zuwa fom", "Rubuta rahoton yau da kullum iri ɗaya", "Rarraba imel bisa rana", "Kwantar da hankalin abokin ciniki da ya fusata"], answer: 3, why: "Gina amincewa da kwantar da hankalin mutane suna dogara ga ƙwarewar ɗan adam." },
            { objective: "O2", q: "AI ya sa wa aikinku na \"magance ƙorafe-ƙorafen abokan ciniki\" alamar \"AI zai iya taimakawa\" kawai. Ba ku yarda ba. Me za ku yi?", options: ["Ku karɓi alamar AI", "Ku yanke hukunci na ƙarshe da kanku; wataƙila \"duka biyun\" ne", "Ku goge aikin", "Ku tambayi wani AI daban har ya yarda"], answer: 1, why: "Ku ne kuka fi sanin aikinku, don haka ku ne kuke yanke hukunci na ƙarshe a kowace alama." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nemo bayanai amintattu game da fannin aikinku",
          minutes: 5,
          goal: "Duba makomar aikinku a majiyar hukuma.",
          text: [
            "Labarai game da AI da ayyuka sau da yawa suna tsoratarwa ko suna zuzutawa. Ku yi amfani da majiyoyin hukuma da suka dogara kan bayanai maimakon haka. A Amurka, Hukumar Ƙididdigar Ma'aikata (Bureau of Labor Statistics, BLS) tana wallafa Occupational Outlook Handbook a bls.gov/ooh. Don ɗaruruwan ayyuka, tana nuna abin da aikin ya ƙunsa, horon da aka saba buƙata, albashi da hasashen makomar aikin.",
            "Ku nemi aikinku, sannan ku rubuta: abin da ma'aikata ke yi, yadda ake zama ɗaya daga cikinsu, matsakaicin albashi, da makomar aikin. Ku kuma duba ayyukan da suke da alaƙa; za su iya nuna matakan gaba.",
            "CareerOneStop, daga Ma'aikatar Ƙwadago ta Amurka (US Department of Labor), tana taimaka muku nemo shirye-shiryen horo da American Job Center (cibiyar aiki ta gwamnati) na yankinku, wadda za ta iya ba da hidimomin aiki kyauta. Ku nemi AI ya bayyana duk abin da ke da wuyar fahimta a waɗannan shafuka, amma ku ɗauki lambobin daga shafin da kansa."
          ],
          steps: ["Ku je bls.gov/ooh ku nemi aikinku.", "Ku rubuta: abin da suke yi, yadda ake zama ɗaya, matsakaicin albashi, makomar aiki.", "Ku duba ayyuka biyu masu alaƙa.", "Ku nemo American Job Center na yankinku a CareerOneStop."],
          words: [["BLS", "Bureau of Labor Statistics: hukumar Amurka da ke wallafa bayanan ayyuka da albashi."], ["Makomar aiki (job outlook)", "hasashen canjin yawan ayyuka a wani fannin aiki."], ["Matsakaicin albashi (median pay)", "albashin tsakiya: rabi suna samun fiye da shi, rabi suna samun ƙasa da shi."]],
          slides: [
            { title: "Ku guji zuzutawa", bullets: ["Ku yi amfani da majiyoyin hukuma masu bayanai", "BLS Occupational Outlook Handbook: bls.gov/ooh"] },
            { title: "Abin da za ku rubuta", bullets: ["Abin da ma'aikata ke yi", "Yadda ake zama ɗaya", "Matsakaicin albashi da makomar aiki"] },
            { title: "Taimako kyauta a yankinku", bullets: ["CareerOneStop: horo da cibiyoyin aiki", "American Job Centers suna ba da hidimomin aiki", "Ku ɗauki lambobi daga shafin, ba daga AI ba"] }
          ],
          sources: [BLS_OOH, CAREERONESTOP],
          tryIt: "Ku duba aikinku na yanzu ko wanda kuke nema a bls.gov/ooh. Ku rubuta bayanai uku daga shafin, sannan ku nemo American Job Center mafi kusa da ku a CareerOneStop.",
          youCanNow: "nemo bayanai amintattu game da makomar aiki da horo a fannin aikinku.",
          quickCheck: [
            { objective: "O3", q: "Me Occupational Outlook Handbook ke nunawa?", options: ["Abin da ma'aikata ke yi, yadda ake zama ɗaya, albashi da makomar aiki", "Guraben aiki kusa da ku a yau", "Matsayin bashinku (credit score)", "Ra'ayoyi game da kamfanoni"], answer: 0, why: "OOH daga BLS yana bayyana kowane aiki, albashinsa da makomarsa." },
            { objective: "O3", q: "AI ya faɗa muku cewa fannin aikinku zai ƙaru da 30%. Me za ku yi?", options: ["Ku faɗa wa abokai", "Ku tsara rayuwar aikinku bisa hakan", "Ku duba lambar a shafin hukuma na BLS", "Ku ƙyale duk bayanan ayyuka"], answer: 2, why: "Ƙididdigar makomar aiki daga shafin hukuma take, ba daga AI ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda AI ke canja aiki",
        questions: [
          { objective: "O1", q: "A ayyuka da yawa, AI yafi canja:", options: ["Babu komai", "Waɗanne ƙananan ayyuka ne ke ɗaukar lokaci", "Kowane aiki gaba ɗaya", "Sunan aiki kawai"], answer: 1, why: "AI yana shafar ƙananan ayyukan da ke cikin aiki." },
          { objective: "O2", q: "Wane aiki ne AI yakan yi da kyau?", options: ["Gyara motar ɗaukar kaya (forklift)", "Kwantar da hankalin abokin ciniki da ya fusata fuska da fuska", "Ɗaga akwatuna lafiya", "Rubuta daftarin imel na yau da kullum"], answer: 3, why: "Rubuta daftari ƙarfin kayan AI ne." },
          { objective: "O2", q: "Rubuta rahoto inda AI ke rubuta daftari kuma ku kuke duba gaskiyar bayanai yana da alamar:", options: ["Duka biyun", "Ƙwarewar ɗan adam kawai", "AI kawai", "Babu ɗaya"], answer: 0, why: "AI yana taimakawa, mutum kuma yana dubawa." },
          { objective: "O3", q: "A ina za ku sami makomar aiki ta hukuma ta Amurka don wani aiki?", options: ["Hasashen AI", "Bidiyon da ya yaɗu", "BLS Occupational Outlook Handbook", "Sashen sharhi"], answer: 2, why: "BLS tana wallafa bayanan makomar aiki na hukuma." },
          { objective: "O3", q: "Me American Job Center zai iya bayarwa?", options: ["Bashi", "Tabbacin samun aiki", "Hidimomin aiki kyauta da bayanan horo", "Digirin jami'a"], answer: 2, why: "Suna ba da hidimomin aiki; babu tabbaci." }
        ]
      }
    },
    {
      name: "Babi na 2: Yin shirinku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Zaɓar ƙwarewa uku da za ku gina",
          minutes: 5,
          goal: "Zaɓi ƙwarewa uku da suka dace da aikinku da burinku.",
          text: [
            "Ku zaɓi haɗin gwiwa: ƙwarewar kayan AI ɗaya, ƙwarewa ɗaya ta fannin aikinku, da ƙwarewar ɗan adam ɗaya. Misali ga ma'aikacin rumbun kaya da ke son zama shugaba: (1) amfani da mataimakin AI don rubuta bayanan sauyin aiki a sarari, (2) koyon tsarin sarrafa rumbun kaya da tushen sarrafa kaya, (3) horarwa da jagorantar sababbin ma'aikata.",
            "Ku yi amfani da abin da kuka samo: sashen \"How to become one\" (yadda ake zama ɗaya) na BLS, tallace-tallacen aiki na aikin da kuke so, da jerin ayyukanku. Ƙwarewar da ke bayyana a tallace-tallacen aiki da yawa sun cancanci a koya.",
            "Ku nemi AI ya taimaka wajen kwatantawa: \"Ga tallace-tallacen aiki biyar na shugaban rumbun kaya. Waɗanne ƙwarewa ne suka fi bayyana?\" Ku liƙa tallace-tallacen kawai, babu wani abu na sirri."
          ],
          steps: ["Ku tattara tallace-tallacen aiki uku zuwa biyar na aikin da kuke nema.", "Ku jera ƙwarewar da suka fi nema.", "Ku zaɓi ƙwarewar kayan AI ɗaya, ƙwarewar fanni ɗaya da ƙwarewar ɗan adam ɗaya.", "Ku rubuta dalilin muhimmancin kowacce."],
          words: [["Tallar aiki (job posting)", "sanarwar aiki da ke jera ayyuka da ƙwarewar da ake buƙata."], ["Ƙwarewar fanni (field skill)", "ƙwarewa ta musamman ga irin aikinku, kamar tsarin sarrafa kaya ko kalmomin likitanci."]],
          slides: [
            { title: "Ku zaɓi haɗin ƙwarewa uku", bullets: ["Ƙwarewar kayan AI ɗaya", "Ƙwarewar fanni ɗaya", "Ƙwarewar ɗan adam ɗaya"] },
            { title: "Inda za ku duba", bullets: ["Sashen \"How to become one\" na BLS", "Tallace-tallacen aiki na aikin da kuke nema", "Jerin ayyukanku"] },
            { title: "AI zai iya kwatanta tallace-tallace", bullets: ["\"Waɗanne ƙwarewa ne suka fi bayyana?\"", "Ku liƙa tallace-tallacen kawai, babu na sirri"] }
          ],
          tryIt: "Ku nemo tallace-tallacen aiki uku na aikin da kuke so. Ku tambayi AI waɗanne ƙwarewa ne suka fi bayyana, sannan ku zaɓi ƙwarewarku uku ku rubuta dalilin muhimmancin kowacce.",
          youCanNow: "zaɓar ƙwarewa uku da za ku gina bisa tallace-tallacen aiki na gaske da burinku.",
          quickCheck: [
            { objective: "O4", q: "Wane ne haɗi mai kyau na ƙwarewa uku da za ku gina?", options: ["Kayan AI uku", "Ƙwarewar kayan AI ɗaya, ƙwarewar fanni ɗaya da ƙwarewar ɗan adam ɗaya", "Ƙwarewa uku da kuka riga kuka mallaka", "Kowane uku daga talla"], answer: 1, why: "Haɗin ya ƙunshi amfani da AI, fannin aikinku da ƙwarewar ɗan adam da AI ba zai iya maye gurbinsu ba." },
            { objective: "O4", q: "Kuna son sanin waɗanne ƙwarewa masu ɗaukar aiki ke so don aikin da kuke nema. Me za ku yi?", options: ["Ku yi hasashe", "Ku tambayi aboki a wani fanni daban", "Ku zaɓi ƙwarewar da suka fi kama da wuya", "Ku karanta tallace-tallacen aiki na gaske ku ga waɗanne ƙwarewa ne suka fi bayyana"], answer: 3, why: "Ƙwarewar da ke bayyana a tallace-tallace na gaske da yawa sun cancanci a koya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gina shirin koyon sababbin ƙwarewa na kwana 90",
          minutes: 5,
          goal: "Mayar da ƙwarewarku uku zuwa shiri na kwana 90 mai yiwuwa.",
          text: [
            "Shiri yana sa koyo ya faru. Ga kowace ƙwarewa, ku rubuta: kayan koyo kyauta ko marasa tsada, lokacin kowane mako, da hanyar tabbatar da cewa kun koya. Shaida na iya zama takardar shaida (certificate), aiki da kuka yi (project), samfurin aiki, ko shugabanku ya gan ku kuna yi.",
            "Kayan koyo kyauta sun haɗa da ɗakin karatu na yankinku (da yawa suna ba da kwasa-kwasan intanet kyauta), American Job Centers, kwalejojin al'umma (community colleges), horon mai ɗaukar aiki, da kwasa-kwasai kyauta daga manyan kamfanonin fasaha. Ku duba kuɗi da cikakkun bayanai a shafin hukuma na kowanne.",
            "Ku sa shi ƙarami: sa'o'i biyu ko uku a mako ya fi babban shirin da za ku watsar. Ku yi amfani da mataimakin AI don yin jadawalin kowane mako da yi muku tambayoyin gwaji, kuma ku yi atisayen ƙwarewar AI a ayyuka na gaske a wurin aiki idan mai ɗaukar aikinku ya yarda."
          ],
          steps: ["Ga kowace ƙwarewa: kayan koyo, lokacin kowane mako, shaida.", "Ku duba kuɗi da bayanan kowane kayan koyo a shafinsa na hukuma.", "Ku saka lokutan koyo na kowane mako a kalandarku.", "Ku sake dubawa a rana ta 30, 60 da 90."],
          words: [["Shaidar ƙwarewa (proof of skill)", "abin da ke nuna za ku iya yi: takardar shaida, aiki da kuka yi ko samfurin aiki."], ["Kwalejin al'umma (community college)", "kwalejin gwamnati ta yanki mai kwasa-kwasai da takardun shaida marasa tsada."]],
          slides: [
            { title: "Ga kowace ƙwarewa", bullets: ["Kayan koyo kyauta ko marasa tsada", "Lokacin kowane mako", "Hanyar tabbatar da ita"] },
            { title: "Wuraren koyo kyauta", bullets: ["Kwasa-kwasan intanet na ɗakin karatu", "American Job Centers da kwalejojin al'umma", "Horon mai ɗaukar aiki"] },
            { title: "Ku sa shi ƙarami", bullets: ["Sa'o'i 2-3 a mako da za ku iya ci gaba da yi", "AI yana yin jadawali kuma yana yi muku gwaji", "Ku sake dubawa a rana ta 30, 60 da 90"] }
          ],
          sources: [CAREERONESTOP],
          tryIt: "Ku rubuta shirinku na kwana 90: ga kowace daga cikin ƙwarewarku uku, kayan koyo, lokacin kowane mako da shaida. Ku saka lokutan karatu na makonni biyu na farko a kalandarku.",
          youCanNow: "gina shiri na kwana 90 mai yiwuwa don koyon sababbin ƙwarewa uku.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne shaidar ƙwarewa?", options: ["Faɗin cewa kun ƙware a kai", "Kallon bidiyo ɗaya", "Takardar shaida, aiki da kuka yi ko samfurin aiki", "Ajiye adireshin kwas"], answer: 2, why: "Shaida abu ne da za ku iya nunawa, kamar takardar shaida, aiki da kuka yi ko samfurin aiki." },
            { objective: "O5", q: "Kuna aiki na cikakken lokaci. Wane shirin karatu za ku rubuta?", options: ["Sa'o'i 2 zuwa 3 a mako, a cikin kalandarku", "Sa'o'i 10 kowane dare", "Karatu duk lokacin da kuka ji daɗi", "Karatu a makon da ke gaban hirar aiki kawai"], answer: 0, why: "Ɗan lokaci kaɗan na yau da kullum a kalandarku shi ne shirin da ya fi yiwuwar aiki." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Magana game da ƙwarewar AI da masu ɗaukar aiki",
          minutes: 5,
          goal: "Ba da gajeriyar amsa ta gaskiya kuma a sarari game da yadda kuke amfani da AI a aiki.",
          text: [
            "Masu ɗaukar aiki suna ƙara tambaya, \"Yaya kuke amfani da AI?\" Amsa mai ƙarfi tana a sarari kuma ta gaskiya ce, kuma tana nuna hankali. Ku yi amfani da tsarin: Aiki, Kayan aiki, Dubawa, Sakamako.",
            "Misali: \"Ina amfani da Microsoft Copilot don rubuta daftarin bayanan ƙarshen sauyin aikina (aiki da kayan aiki). Koyaushe ina kwatanta ƙididdigar da rahoton na'urar sikan kafin in aika (dubawa). Yana ceton min kusan minti 15 a kowane sauyin aiki, kuma shugaba na gaba yana samun bayanai mafi sarari (sakamako).\"",
            "Kada ku taɓa zuzutawa. Kada ku yi iƙirarin ƙwarewar da ba ku da ita, kuma ku bi ƙa'idojin AI na mai ɗaukar aikinku: kada ku saka bayanan sirri na kamfani ko na abokan ciniki a kayan AI. Nuna cewa kun san iyakoki wani ɓangare ne na ƙwarewar."
          ],
          steps: ["Ku zaɓi aiki ɗaya na gaske da kuka yi amfani da AI a kai (ko kuka yi atisaye).", "Ku faɗi aikin, kayan aikin, yadda kuka duba shi, da sakamakon.", "Ku sa ya kai kusan daƙiƙa 30.", "Ku yi atisaye da babbar murya."],
          words: [["Ƙa'idojin AI (AI policy)", "dokokin mai ɗaukar aiki game da yadda ma'aikata za su iya amfani da kayan AI."], ["Bayanan sirri na kamfani (confidential information)", "bayanan kamfani ko na abokan ciniki da ba a so a fitar da su wajen kamfanin."]],
          slides: [
            { title: "Aiki, Kayan aiki, Dubawa, Sakamako", bullets: ["Abin da kuka yi", "Wane kayan AI", "Yadda kuka duba shi", "Abin da ya inganta"] },
            { title: "Misali", bullets: ["\"Ina amfani da Copilot don rubuta bayanan ƙarshen sauyin aiki.", "Ina kwatanta ƙididdiga da rahoton na'urar sikan.", "Yana ceton minti 15 a kowane sauyin aiki.\""] },
            { title: "Ku nuna hankali", bullets: ["Kada ku taɓa zuzuta ƙwarewarku", "Ku bi ƙa'idojin AI na mai ɗaukar aikinku", "Ku hana bayanan sirri shiga AI"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala shirinku na aiki da AI: jerin ayyuka masu alama, bayanai uku na BLS, shirinku na kwana 90, da amsa ta daƙiƙa 30 bisa Aiki-Kayan aiki-Dubawa-Sakamako da kuke atisaye da babbar murya.",
          youCanNow: "tsara ci gabanku a duniyar aiki da AI ya canja, da magana game da ƙwarewarku ta AI da gaskiya ga masu ɗaukar aiki.",
          quickCheck: [
            { objective: "O6", q: "A amsar Aiki-Kayan aiki-Dubawa-Sakamako, mene ne Sakamako?", options: ["Sunan kayan AI", "Yadda kuka duba aikin AI", "Abin da kuka tambayi AI", "Abin da ya inganta saboda aikinku"], answer: 3, why: "Sakamako shi ne abin da ya biyo baya, kamar lokacin da aka ceta ko raguwar kurakurai." },
            { objective: "O6", q: "Mai hira ya tambaye ku ko kun yi amfani da AI wajen yin rahotanni. Sau biyu kawai kuka gwada. Me za ku ce?", options: ["Ku ce ku ƙwararru ne", "Ku bayyana sau biyun da gaskiya: aikin, kayan aikin, yadda kuka duba da sakamakon", "Ku ce ba ku taɓa jin labarin AI ba", "Ku canja magana"], answer: 1, why: "Amsa ta gaskiya kuma a sarari tana gina amincewa; kada ku taɓa iƙirarin ƙwarewar da ba ku da ita." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yin shirinku",
        questions: [
          { objective: "O4", q: "Haɗi mai kyau na ƙwarewa uku shi ne:", options: ["Ƙwarewar kayan AI ɗaya, ƙwarewar fanni ɗaya, ƙwarewar ɗan adam ɗaya", "Manhajoji uku kawai da aka zaɓa ba tare da tunani ba", "Ƙwarewar AI kawai", "Babu"], answer: 0, why: "Haɗin yana sa ku daidaita kuma ku zama masu daraja." },
          { objective: "O4", q: "A ina za ku ga waɗanne ƙwarewa masu ɗaukar aiki ke so?", options: ["Hoton barkwanci (meme)", "Taurari da sa'a (horoscope)", "Hasashen AI", "Tallace-tallacen aiki na gaske na aikin da kuke nema"], answer: 3, why: "Tallace-tallacen aiki suna jera ƙwarewar da ake buƙata." },
          { objective: "O5", q: "Wane shiri ne ya fi yiwuwar aiki?", options: ["Sa'o'i 40 a wannan ƙarshen mako kawai", "Sa'o'i 2-3 a mako, a cikin kalandarku", "Duk lokacin da kuka ji daɗi", "Babu shiri"], answer: 1, why: "Ƙananan shirye-shirye masu ɗorewa ake kammalawa." },
          { objective: "O6", q: "A Aiki, Kayan aiki, Dubawa, Sakamako, \"Dubawa\" yana nufin:", options: ["Yadda kuka tabbatar da aikin AI", "Albashinku", "Cakin banki", "Duba imel"], answer: 0, why: "Dubawa yana nuna hankali." },
          { objective: "O6", q: "Me bai kamata ku yi ba idan kuna bayyana ƙwarewar AI?", options: ["Ambaton yadda kuke duba aiki", "Ba da misali a sarari", "Iƙirarin ƙwarewar da ba ku da ita", "Bin ƙa'idojin mai ɗaukar aikinku"], answer: 2, why: "Gaskiya tana da muhimmanci." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI a Sabuwar Duniyar Aiki",
    questions: [
      { objective: "O1", q: "Hanya mafi kyau ta tunanin aiki ita ce:", options: ["Ƙaramin aiki guda ɗaya", "Tarin ƙananan ayyuka", "Suna kawai", "Albashi"], answer: 1, why: "Ayyuka suna ƙunshe da ƙananan ayyuka da yawa." },
      { objective: "O1", q: "Wanne ne aikin yau da kullum (routine)?", options: ["Jagorantar taron ƙungiya", "Ta'azantar da mara lafiya da ke tsoro", "Magance sabuwar matsalar gaggawa", "Rubuta rahoton yau da kullum iri ɗaya"], answer: 3, why: "Ayyukan yau da kullum ana maimaita su ta hanya ɗaya." },
      { objective: "O1", q: "Mene ne koyon sababbin ƙwarewa (upskilling)?", options: ["Wani nau'in AI", "Barin aiki", "Rage sa'o'in aiki", "Koyon sababbin ƙwarewa don ku yi aiki da kyau ko ku sami ci gaba"], answer: 3, why: "Koyon sababbin ƙwarewa yana gina sababbin ƙwarewa." },
      { objective: "O2", q: "Wanne ne ƙwarewar ɗan adam?", options: ["Rarraba takardar lissafi (spreadsheet)", "Gina amincewa da abokan ciniki", "Taƙaita takarda", "Duba kuskuren rubutu"], answer: 1, why: "Gina amincewa ƙarfin ɗan adam ne." },
      { objective: "O2", q: "Idan AI ya sa wa ayyukanku alama, wane ne ke yanke hukunci na ƙarshe?", options: ["Maƙwabcinku", "AI", "Ku", "Babu kowa"], answer: 2, why: "Ku ne kuka fi sanin aikin." },
      { objective: "O2", q: "Me yasa za ku ja layi a ƙarƙashin ayyukanku na ƙwarewar ɗan adam?", options: ["Ƙarfi ne da za ku haɓaka kuma ku yi magana a kai", "Don ku goge su", "Don ku ɓoye su", "Ba su da muhimmanci"], answer: 0, why: "Ƙwarewar ɗan adam tana ci gaba da daraja." },
      { objective: "O3", q: "BLS yana nufin:", options: ["Basic Labor Service", "Business Learning System", "Bureau of Labor Statistics", "Board of Licensed Skills"], answer: 2, why: "BLS tana wallafa bayanan ayyuka." },
      { objective: "O3", q: "Occupational Outlook Handbook yana nuna:", options: ["Abin da ma'aikata ke yi, yadda ake zama ɗaya, albashi da makomar aiki", "Labaran fitattun mutane", "Shawarwarin hannun jari", "Girke-girke"], answer: 0, why: "Waɗannan su ne manyan sassansa." },
      { objective: "O3", q: "Daga ina ya kamata ku ɗauki ƙididdigar makomar aiki?", options: ["Taƙaitawar AI ba tare da dubawa ba", "Shafin hukuma", "Kanun labarai", "Jita-jita"], answer: 1, why: "AI yana iya faɗin lambobi ba daidai ba." },
      { objective: "O3", q: "CareerOneStop daga:", options: ["Kamfanin waya ne", "Kafar sada zumunta ce", "Banki ne", "Ma'aikatar Ƙwadago ta Amurka ne"], answer: 3, why: "Kayan aiki ne na Ma'aikatar Ƙwadago." },
      { objective: "O4", q: "Ƙwarewar da ke bayyana a tallace-tallacen aiki da yawa:", options: ["Sun cancanci a koya", "Ba su da muhimmanci", "Haramtattu ne", "Sun tsufa"], answer: 0, why: "A fili yake masu ɗaukar aiki suna son su." },
      { objective: "O4", q: "Idan kuna liƙa tallace-tallacen aiki a AI, ku bar:", options: ["Jerin ƙwarewa", "Rubutun tallar", "Sunan aikin", "Bayananku na sirri"], answer: 3, why: "Ku hana bayanan sirri shiga." },
      { objective: "O5", q: "Wanne ne shaidar ƙwarewa?", options: ["Jita-jita", "Buri", "Takardar shaida, aiki da kuka yi ko samfurin aiki", "Saƙo a kafar sada zumunta da ke cewa kun ƙware"], answer: 2, why: "Shaida tana nuna abin da za ku iya yi." },
      { objective: "O5", q: "A ina za ku iya samun kwasa-kwasan intanet kyauta sau da yawa?", options: ["Tallace-tallacen da ke tasowa (pop-up)", "Ɗakin karatu na yankinku", "Imel ɗin banza (spam)", "Babu inda"], answer: 1, why: "Ɗakunan karatu da yawa suna ba da kwasa-kwasai kyauta." },
      { objective: "O5", q: "Yaushe ya kamata ku sake duba shirinku na kwana 90?", options: ["Kowace sa'a", "Ba sau ɗaya ba", "A rana ta 1 kawai", "A rana ta 30, 60 da 90"], answer: 3, why: "Dubawa akai-akai yana riƙe ku a kan hanya." },
      { objective: "O6", q: "Amsa mai kyau game da ƙwarewar AI ita ce:", options: ["Wadda aka kwafo daga shafin intanet", "Marar sarari kuma mai zuzutawa", "A sarari kuma ta gaskiya", "Ƙirƙirarriya"], answer: 2, why: "Amsoshi a sarari kuma na gaskiya suna gina amincewa." },
      { objective: "O6", q: "Wanne ya dace a amsar Aiki-Kayan aiki-Dubawa-Sakamako?", options: ["\"Ina kwatanta ƙididdiga da rahoton na'urar sikan.\"", "\"AI yana yin dukkan aikina.\"", "\"Ina liƙa bayanan abokan ciniki a cikin chatbot.\"", "\"Ba na taɓa duba komai.\""], answer: 0, why: "Yana nuna yadda kuke tabbatarwa." },
      { objective: "O6", q: "Kafin ku yi amfani da AI a wurin aiki ya kamata ku san:", options: ["Kalmar sirrin abokin aikinku", "Ƙa'idojin AI na mai ɗaukar aikinku", "Lambobin katin abokan ciniki", "Babu komai"], answer: 1, why: "Ƙa'idoji suna faɗin abin da aka yarda da shi." },
      { objective: "O6", q: "Bayanan sirri na kamfani ya kamata:", options: ["A liƙa su a kowane chatbot", "Su zauna a wajen kayan AI sai dai idan mai ɗaukar aikinku ya amince", "A saka su a intanet", "A raba su da abokai"], answer: 1, why: "Dole ne a kare su." },
      { objective: "O6", q: "Me wannan kwas ɗin ya yi alƙawari game da ayyuka?", options: ["Babu komai; yana taimaka muku tsarawa da gina ƙwarewa", "Tabbacin samun aiki", "Tabbacin ƙarin albashi", "Ƙarin matsayi"], answer: 0, why: "Babu kwas da zai iya alƙawarin sakamako." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 7, 10, 12, 14, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Jerin ayyuka masu alama", objective: "O2", notYet: "Ayyuka ƙasa da takwas, ko ayyukan ba su da alama.", meets: "Aƙalla ayyuka takwas, kowanne da alamar \"AI zai iya taimakawa\", \"ƙwarewar ɗan adam\" ko \"duka biyun\".", exceeds: "An zagaye ayyuka biyu na \"AI zai iya taimakawa\" don gwadawa, kuma an ja layi a ƙarƙashin ƙarfi biyu na ƙwarewar ɗan adam." },
      { name: "Bayanan hukuma game da fanni", objective: "O3", notYet: "Bayanan sun ɓace ko daga AI suka fito.", meets: "Bayanai uku game da fannin daga BLS Occupational Outlook Handbook.", exceeds: "Ya kuma ambaci American Job Center mafi kusa da hidima ɗaya da take bayarwa." },
      { name: "Shirin kwana 90", objective: "O5", notYet: "Ƙwarewar ba su da kayan koyo, lokaci ko shaida.", meets: "Ƙwarewa uku, kowacce da kayan koyo kyauta, lokacin kowane mako da shaida, ana sake dubawa a rana ta 30, 60 da 90.", exceeds: "Makonni biyu na farko na karatu suna cikin kalandar mai koyo." },
      { name: "Amsar AI ta daƙiƙa 30", objective: "O6", notYet: "Amsar ba ta da sarari ko tana iƙirarin ƙwarewar da mai koyo ba shi da ita.", meets: "Amsa ta gaskiya bisa Aiki-Kayan aiki-Dubawa-Sakamako da aka faɗa da babbar murya cikin kusan daƙiƙa 30.", exceeds: "Amsar tana da wata lamba ko sakamako a sarari." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da har yanzu suke bin shirinsu na kwana 90 a rana ta 30 (binciken biyo baya)",
      "Masu koyo da suka sami takardar shaida ko suka kammala kwas daga shirinsu cikin kwana 90",
      "Masu koyo da suka sami sabon aiki, ƙarin matsayi ko ƙarin albashi cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta mai intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Shafukan kyauta na bls.gov/ooh da CareerOneStop, da tallace-tallacen aiki uku na gaske",
      "Takarda, manhajar rubutu ko kalanda don jerin ayyuka da shirin kwana 90",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A cibiyar aiki ko ƙungiyar wurin aiki: ku yi gwajin farko tare, sannan ku sa masu koyo su sa alama a jerin ayyukansu bibbiyu don su iya ƙalubalantar alamomin juna.",
      "Ku faɗa da gaskiya cewa kwas ɗin bai yi alƙawarin aiki ba; yana taimaka wa masu koyo tsarawa da gina ƙwarewa.",
      "Ku tunatar da masu koyo su bi ƙa'idojin AI na mai ɗaukar aikinsu kuma su hana bayanan sirri na kamfani shiga kayan AI.",
      "Ku sa masu koyo su faɗi amsarsu ta daƙiƙa 30 da babbar murya ga abokin atisaye.",
      "Ku ba da maki ga shirin aiki da AI da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
