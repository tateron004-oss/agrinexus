"use strict";

// Koach Learn course, Hausa (ha) translation of shared/phlebotomy-prep.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// It does NOT teach anyone to draw blood: real draws are learned only in an approved, supervised training program. No clinical advice.

module.exports = {
  id: "phlebotomy-prep-ha",
  lang: "ha",
  translationOf: "phlebotomy-prep",
  category: "Workforce Development",
  name: "Shirye-shiryen Zama Ma'aikacin Ɗiban Jini (Phlebotomy)",
  skills: "Zaɓen shirin horo da takardar shaida, Tabbatar da majiyyaci da duba umarni, Tsarin cika bututu, Matakan ɗiban jini na yau da kullum, Kariya daga cututtuka da allura, Rubuta suna da kula da samfura",
  outcome: "yin jerin abubuwan dubawa naku na aljihu don ɗiban jini na yau da kullum, daga tabbatar da majiyyaci zuwa rubuta suna a bututu da tsaftacewa, tare da tsarin cika bututu na ɗakin gwajinku da matakan tsaro, da shiri don shirin horonku da jarabawar takardar shaida.",
  about: [
    "Ma'aikatan ɗiban jini (phlebotomy technicians) suna ɗiban samfurin jini a asibitoci, ɗakunan gwaji (lab), asibitocin shan magani, cibiyoyin bayar da jini da gidajen majiyyata. Hanya ce mai sauri ta shiga aikin lafiya, kuma tana iya kai ku ga wasu ayyukan ɗakin gwaji da kula da majiyyata.",
    "Wannan kwas ɗin yana koyar da ilimin da ke bayan aikin: takardun shaida da dokokin jiha, yadda ake tabbatar da majiyyaci da duba umarni, tsarin cika bututu, matakan ɗiban jini na yau da kullum, kariya daga cututtuka da allura, da yadda ake rubuta suna a samfura da kula da su don ɗakin gwaji ya yi amfani da su. Yana kuma magana kan sirrin majiyyata a ƙarƙashin dokar HIPAA.",
    "Muhimmi: wannan kwas ɗin ba ya koya muku ɗiban jini, kuma kada ku gwada a jikin kowa. Ana koyon ɗiban jini ne kawai a shirin horo da aka amince da shi, malami yana kallo, bayan kun yi atisaye a hannun roba na koyo. Jarabawar takardar shaida ma tana neman shaidar ɗiban jini a jikin mutane na gaske ƙarƙashin kulawa. Wannan kwas yana shirya ku don wannan shirin da jarabawar; ba ya ba ku takardar shaida ko lasisi.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" a takarda. Akwai ɗan gwaji bayan kowane darasi, gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi jerin abubuwan dubawa naku na aljihu don ɗiban jini na yau da kullum: tabbatar da majiyyaci da duba umarni, shiryawa da kare kanku, tsarin cika bututunku (daga jadawalin shirinku ko na ɗakin gwajinku), matakan ɗiban jini, rubuta suna a gaban majiyyaci, zubar da allura da tsaftacewa. Ku ƙara shiri mai shafi ɗaya: shirin horon da za ku nema, jarabawar takardar shaidar da kuke son ci, abin da jiharku take buƙata, da ranakun da kuke nufi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke neman hanya mai sauri kuma tabbatacciya ta shiga aikin lafiya: masu neman aiki, matasa, baƙi masu shigowa ƙasa (immigrants), tsofaffin sojoji (wasu suna da ƙwarewar aikin lafiya ta soja) da manya da ke komawa karatu.",
    startingPoint: "Suna iya karanta Turanci na yau da kullum kuma suna amfani da waya ko kwamfutar ɗakin karatu. Yawancinsu ba su taɓa aiki a asibiti ko ɗakin gwaji ba, ba su san kalmomin likitanci ba, kuma wasu suna jin tsoron allura ko jini.",
    gap: "Shirye-shiryen horon ɗiban jini da jarabawar takardar shaida suna sa ran masu koyo su san tabbatar da majiyyaci, tsarin cika bututu, matakan saka allura a jijiya, kariya daga cututtuka, kula da samfura da sirri, kuma su yi ɗiban jini ƙarƙashin kulawa. Masu koyo suna buƙatar wannan ilimin, shiri a sarari don horo da jarabawa, da hoto na gaskiya na aikin kafin su yi rajista.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar likitanci",
      "Tsaro: babu ɗiban jini ko atisayen allura a gida; ana yin su ne kawai a shirin da ake kulawa",
      "Na'urori: waya ko kwamfutar ɗakin karatu; takarda ta isa don kowane aiki",
      "Dokokin jihohi sun bambanta (misali California tana bayar da nata takardun shaidar ɗiban jini); masu koyo suna duba jiharsu",
      "Launukan bututu da tsarin cika su suna bin jadawalin kowane ɗakin gwaji; masu koyo suna amfani da jadawalin shirinsu",
      "Sirri: babu bayanin majiyyaci na gaske a kowane aiki"
    ],
    prerequisites: "Babu. Kwas ɗin \"Health Literacy\" (Fahimtar bayanan lafiya) yana taimakawa amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafin NHA na hukuma da shafin ma'aikatar lafiya ta jiharku", action: "rubuta shiri don shirin horon ɗiban jini, ɗiban jinin da ake buƙata ƙarƙashin kulawa da ranar jarabawar takardar shaida", standard: "an tabbatar da kowace buƙata a shafin hukuma" },
    { id: "O2", condition: "Idan aka ba ku majiyyacin atisaye da umarnin ɗakin gwaji", action: "tabbatar da majiyyaci da alamomin tantancewa guda biyu da daidaita umarnin kafin kowane ɗiban jini", standard: "kuna tsayawa a duk lokacin da wani abu bai yi daidai ba" },
    { id: "O3", condition: "Idan aka ba ku launukan bututu da jadawalin shirinku", action: "jera bututun bisa tsarin cika bututu", standard: "ba tare da wani bututu ya fita daga tsari ba" },
    { id: "O4", condition: "Idan aka ba ku matakan saka allura a jijiya na yau da kullum ba a jere ba", action: "jera matakan da faɗin lokacin da za a tsayar da ɗiban jini", standard: "ba tare da wani mataki ya ɓace ba" },
    { id: "O5", condition: "Idan aka ba ku yanayin tsaro na atisaye", action: "zaɓen matakin da ya dace na kariya daga cututtuka da tsaron allura", standard: "kuna samun kowane yanayi daidai" },
    { id: "O6", condition: "Idan aka ba ku samfuran atisaye", action: "yanke shawara ko kowane samfuri an rubuta sunansa kuma an kula da shi sosai har ɗakin gwaji zai karɓe shi", standard: "kuna gane kowane dalilin ƙin karɓa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Aikin, majiyyaci da bututu",
      lessons: [
        {
          title: "Aikin, horo da takardar shaida",
          objectives: ["O1"],
          minutes: 5,
          goal: "Rubuta shiri don shirin horo, ɗiban jini ƙarƙashin kulawa da jarabawar takardar shaida.",
          text: [
            "Ma'aikacin ɗiban jini yana ɗiban jini daga majiyyata don gwaje-gwajen ɗakin gwaji da bayar da jini. Aikin yana buƙatar matakai a hankali, natsuwa tare da majiyyata masu tsoro, da tsaro mai tsauri.",
            "Yawancin mutane suna farawa da shirin horon ɗiban jini a kwalejin al'umma (community college), makarantar manya ko makarantar sana'a. Kuna fara koyo a hannun roba na koyo, sannan ku ɗibi jini a jikin mutane na gaske malami yana kallo. Ba a iya koyon wannan sashe na aikin hannu ta intanet.",
            "Takardar shaida: zaɓi ɗaya da aka saba shi ne Certified Phlebotomy Technician (CPT) na NHA. NHA tana neman takardar kammala sakandare ko GED (ko wadda za a samu nan ba da daɗewa ba), shirin horo ko ƙwarewar aiki ƙarƙashin kulawa, da shaidar aƙalla ɗiban jini ta jijiya 30 da sukar fata (yatsa ko diddige) 10 a jikin mutane masu rai. Wasu ƙungiyoyi, kamar ASCP, ma suna bayar da takardar shaidar ɗiban jini; ku duba shafukansu na hukuma.",
            "Wasu jihohi suna da nasu dokokin. California, misali, tana bayar da takardun shaidar ɗiban jini na jiha ta California Department of Public Health (CDPH), kuma tana neman jarabawa ta ƙasa daga ƙungiyar da aka amince da ita. Ku duba ma'aikatar lafiya ta jiharku kafin ku zaɓi shiri. Dokoki da kuɗaɗe suna canjawa, don haka ku karanta shafukan hukuma."
          ],
          steps: ["Ku nemo shirye-shiryen horon ɗiban jini guda biyu kusa da ku.", "Ku tambayi kowanne: ɗiban jini nawa ɗalibai suke yi ƙarƙashin kulawa, kuma wace takardar shaida yake shirya ku domin ta?", "Ku karanta shafin hukuma na takardar shaidar don ganin buƙatunta na yanzu.", "Ku duba ma'aikatar lafiya ta jiharku don dokokin jiha.", "Ku rubuta ranakun da kuke nufi: farkon horo, ƙarshen horo, jarabawa."],
          words: [["Phlebotomy (ɗiban jini)", "ɗaukar jini daga jikin mutum don gwaji ko bayarwa."], ["Venipuncture (saka allura a jijiya)", "saka allura a cikin jijiya don ɗiban jini."], ["Capillary stick (sukar fata)", "ɗan huji a yatsa ko diddige don samun ɗigon jini kaɗan."], ["Hannun roba na koyo (training arm)", "hannun roba na atisaye da ake amfani da shi don koyon ɗiban jini lafiya."]],
          slides: [
            { title: "Aikin", bullets: ["Ɗiban jini don gwaje-gwaje da bayarwa", "Matakai a hankali, natsuwa, tsaro mai tsauri"] },
            { title: "Horo ne farko", bullets: ["Shirin da aka amince da shi: kwaleji, makarantar manya ko ta sana'a", "Hannun roba na koyo, sannan ɗiban jini na gaske ƙarƙashin kulawa", "Ba a iya koyon aikin hannu ta intanet"] },
            { title: "Takardar shaida", bullets: ["CPT na NHA: horo ko ƙwarewar aiki", "Shaidar ɗiban jini ta jijiya 30 da sukar fata 10", "Wasu ƙungiyoyi, kamar ASCP: ku duba shafukansu"] },
            { title: "Ku duba jiharku", bullets: ["Wasu jihohi suna bayar da nasu takardun shaida", "California: CDPH tare da jarabawa ta ƙasa", "Dokoki da kuɗaɗe suna canjawa: ku karanta shafukan hukuma"] }
          ],
          sources: [
            { name: "NHA: Certified Phlebotomy Technician (CPT)", url: "https://www.nhanow.com/certifications/phlebotomy-technician" },
            { name: "California Department of Public Health: Takardar shaidar ɗiban jini", url: "https://www.cdph.ca.gov/Programs/OSPHLD/LFS/Pages/Phlebotomist.aspx" }
          ],
          tryIt: "Ku rubuta shiri mai shafi ɗaya: shirye-shiryen horo biyu kusa da ku (suna, tsawon lokaci, ɗiban jini ƙarƙashin kulawa, takardar shaidar da suke shirya ku domin ta), takardar shaidar da kuke son samu da buƙatunta daga shafin hukuma, dokokin jiharku, da ranaku uku da kuke nufi.",
          youCanNow: "faɗin abin da ma'aikacin ɗiban jini yake yi, yadda horo yake, abin da CPT na NHA yake nema, da inda za ku duba dokokin jiharku.",
          quickCheck: [
            { objective: "O1", q: "A ina ake koyon ɗiban jini da gaske?", options: ["Daga bidiyo a gida", "A jikin aboki, a hankali", "A shirin horo da aka amince da shi, malami yana kallo", "A jikinku"], answer: 2, why: "Ana koyon ɗiban jini ne kawai a shirin da ake kulawa, farko a hannun roba na koyo." },
            { objective: "O1", q: "Me CPT na NHA yake nema, ban da horo ko ƙwarewar aiki?", options: ["Shaidar ɗiban jini ta jijiya da sukar fata a jikin mutane masu rai ƙarƙashin kulawa", "Digirin aikin jinya", "Lasisin tuƙi", "Babu wani abu kuma"], answer: 0, why: "NHA tana neman shaidar aƙalla ɗiban jini ta jijiya 30 da sukar fata 10." }
          ]
        },
        {
          title: "Majiyyacin da ya dace da umarnin da ya dace",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tabbatar da majiyyaci da alamomin tantancewa guda biyu da daidaita umarnin ɗakin gwaji kafin kowane ɗiban jini.",
          text: [
            "Mataki mafi muhimmanci yana faruwa kafin allura: tabbatar da cewa kuna da majiyyacin da ya dace. Samfuri daga mutumin da ba daidai ba zai iya kai ga magani marar daidai.",
            "Ku yi amfani da aƙalla alamomin tantancewa guda biyu, yawanci cikakken suna da ranar haihuwa. Ku nemi majiyyaci ya faɗe su (\"Don Allah ku faɗa mini cikakken sunanku da ranar haihuwarku\"), maimakon ku tambaya \"Ku ne John Smith?\", domin mutane masu tsoro ko ruɗani suna iya cewa e kawai. A asibiti, ku kuma kwatanta zaren hannu na shaida (ID band) da umarnin.",
            "Sannan ku karanta umarnin ɗakin gwaji (requisition): waɗanne gwaje-gwaje, duk wani umarni na musamman kamar azumi ko lokaci ƙayyadadde, da waɗanne bututu ake buƙata. Idan suna, ranar haihuwa ko wani abu bai yi daidai ba, ku tsaya ku tambayi shugabanku. Kada ku taɓa yin hasashe.",
            "Sirri (HIPAA): umarnin yana nuna bayanan lafiya na sirri. Ku ɓoye shi daga idon mutane, ku yi magana a hankali, kuma ku yi magana game da gwaje-gwajen da majiyyaci da ma'aikatan da ke buƙatar sani kaɗai."
          ],
          steps: ["Ku gabatar da kanku ku bayyana abin da za ku yi.", "Ku nemi majiyyaci ya faɗi cikakken sunansa da ranar haihuwarsa.", "Ku kwatanta su da umarnin (da zaren hannu na shaida a asibiti).", "Ku duba gwaje-gwajen, bututun da duk wani umarni na musamman kamar azumi.", "Idan wani abu bai yi daidai ba, ku tsaya ku tambayi shugabanku."],
          words: [["Alamomin tantance majiyyaci", "bayanai kamar cikakken suna da ranar haihuwa da ake amfani da su don tabbatar da cewa kuna da mutumin da ya dace."], ["Requisition (umarnin gwaji)", "umarnin ɗakin gwaji da ke lissafa majiyyaci da gwaje-gwajen da za a ɗiba."], ["Azumi (fasting)", "rashin cin abinci (wani lokaci har da rashin shan komai sai ruwa) na wani lokaci ƙayyadadde kafin gwaji."], ["HIPAA", "dokar tarayyar Amurka da ke kare sirrin bayanan lafiya."]],
          slides: [
            { title: "Kafin allura", bullets: ["Majiyyacin da ya dace shi ne mafi muhimmanci", "Majiyyacin da ba daidai ba = sakamako da kulawa marasa daidai"] },
            { title: "Alamomin tantancewa guda biyu", bullets: ["Cikakken suna da ranar haihuwa", "Ku nemi majiyyaci ya FAƊE su", "Asibiti: ku duba zaren hannu na shaida ma"] },
            { title: "Ku karanta umarnin", bullets: ["Waɗanne gwaje-gwaje da bututu", "Umarnin azumi ko na lokaci", "Wani abu bai yi daidai ba? Ku tsaya ku tambaya"] },
            { title: "Sirri", bullets: ["Ku ɓoye umarnin daga idon mutane", "Ku yi magana a hankali", "Ku raba ga masu buƙatar sani kaɗai"] }
          ],
          sources: [
            { name: "HHS: HIPAA ga ƙwararru (Dokar sirri)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Ku yi wasan kwaikwayo da aboki, babu allura. Abokinku zai zama majiyyaci mai suna da ranar haihuwa na ƙage; ku kuma kuna riƙe da umarnin gwaji na ƙage da bayani ɗaya ya bambanta. Ku gabatar da kanku, ku nemi ya faɗi sunansa da ranar haihuwarsa, ku kwatanta da umarnin, sannan ku faɗi da babbar murya abin da za ku yi idan bai yi daidai ba.",
          youCanNow: "tantance majiyyaci da alamomi guda biyu, duba umarnin ɗakin gwaji, tsayawa idan wani abu bai yi daidai ba, da kiyaye bayanan a sirri.",
          quickCheck: [
            { objective: "O2", q: "Wace hanya ce mafi kyau ta tabbatar da wanene majiyyaci?", options: ["Ku tambaya \"Ku ne Maria Lopez?\"", "Ku kalli fuskarsa", "Ku tambayi wani a ɗakin jira", "Ku nemi ya faɗi cikakken sunansa da ranar haihuwarsa"], answer: 3, why: "Idan majiyyaci ya faɗi alamomi biyu da kansa, ba zai ce \"e\" don tsoro ga sunan da ba nasa ba." },
            { objective: "O2", q: "Ranar haihuwa a umarnin ba ta yi daidai da abin da majiyyaci ya faɗa ba. Me za ku yi?", options: ["Ku ɗibi jinin duk da haka; sunan ya yi daidai", "Ku tsaya ku tambayi shugabanku", "Ku canja ranar a umarnin", "Ku yi amfani da umarnin wani majiyyaci"], answer: 1, why: "Duk wani rashin daidaito yana tsayar da ɗiban jini har sai an warware shi." }
          ]
        },
        {
          title: "Bututu da tsarin cika su",
          objectives: ["O3"],
          minutes: 6,
          goal: "Jera bututu bisa tsarin cika su ta amfani da jadawalin shirinku.",
          text: [
            "Bututu suna da murafai masu launi da ke nuna abin da ke ciki. Wasu suna da sinadarai (additives) da ke hana jini daskarewa; wasu kuma suna taimaka masa ya daskare. Idan sinadari daga bututu ɗaya ya shiga na gaba, zai iya canja sakamakon gwaji.",
            "Shi yasa ɗakunan gwaji suke bin tsarin cika bututu (order of draw), bisa ma'aunin ɗakin gwaji daga CLSI. Tsari da aka saba shi ne: 1) kwalaben gwajin ƙwayoyin cuta a jini (blood culture), 2) shuɗi mai haske (sodium citrate), 3) ja ko ruwan zinariya (bututun serum, da gel ko babu), 4) kore (heparin), 5) shunayya (EDTA), 6) toka (sodium fluoride da potassium oxalate).",
            "Launukan murafi suna iya bambanta tsakanin masu ƙera bututu, kuma ɗakunan gwaji suna iya samun ƙarin bututu, don haka koyaushe ku yi amfani da jadawalin shirinku ko na ɗakin gwajinku. Ɗalibai da yawa suna koyon wata jimla ta tunawa da tsarin, kuma suna atisaye har ya zama kamar al'ada.",
            "Ana juya bututu masu sinadari a hankali sama da ƙasa da baya (invert) sau da yawa nan da nan bayan an cika su, kamar yadda mai ƙera bututun ya faɗa. Kada ku taɓa girgiza su."
          ],
          words: [["Sinadari (additive)", "wani sinadari a cikin bututu da ke hana jini daskarewa ko ke taimaka masa ya daskare."], ["Tsarin cika bututu (order of draw)", "jerin da aka ƙayyade na cika bututu don sinadarai kada su shiga bututu na gaba."], ["Serum", "ruwan jini da ke rage bayan jinin ya daskare."], ["Juyawa (invert)", "juya bututu a hankali sama da ƙasa da baya."], ["CLSI", "Clinical and Laboratory Standards Institute, ƙungiyar da ke rubuta ma'aunan ɗakunan gwaji."]],
          slides: [
            { title: "Me yasa tsari yake da muhimmanci", bullets: ["Murafai suna nuna abin da ke ciki", "Sinadarin da ya shiga bututu na gaba yana canja sakamako"] },
            { title: "Tsarin cika bututu da aka saba", bullets: ["1. Blood culture  2. Shuɗi mai haske", "3. Ja ko ruwan zinariya  4. Kore", "5. Shunayya  6. Toka"] },
            { title: "Ku yi amfani da jadawalin ɗakin gwajinku", bullets: ["Launuka suna iya bambanta tsakanin masu ƙerawa", "Ɗakunan gwaji suna iya ƙara bututu", "Ku koya har ya zama kamar al'ada"] },
            { title: "Bayan cikawa", bullets: ["Ku juya a hankali, kamar yadda mai ƙerawa ya faɗa", "Kada ku taɓa girgizawa"] }
          ],
          tryIt: "Ku yanka ƙananan takardu shida ku sa musu launi ko suna: toka, ja, blood culture, shunayya, shuɗi mai haske, kore. Ku cakuɗa su ku jera su bisa tsarin cika bututu. Ku yi haka sau biyar, kuna ƙara sauri kowane lokaci. Ku duba amsarku da tsarin da ke wannan darasi, daga baya kuma da jadawalin shirinku.",
          youCanNow: "jera bututun da aka saba bisa tsarin cika su, faɗin dalilin da yasa tsarin yake da muhimmanci, da juya bututu a hankali bayan an cika su.",
          quickCheck: [
            { objective: "O3", q: "A tsarin cika bututu da aka saba, wanne ne yake zuwa farko?", options: ["Shunayya", "Toka", "Kwalaben blood culture", "Kore"], answer: 2, why: "Ana fara ɗiban blood culture don su kasance babu ƙwayoyin cuta daga waje." },
            { objective: "O3", q: "Me yasa ake da tsarin cika bututu?", options: ["Don sinadarai daga bututu ɗaya kada su shiga na gaba", "Don majiyyaci ya ga launuka masu kyau", "Don amfani da ƙananan bututu", "Don ɗiban jini ya yi sauri"], answer: 0, why: "Sinadarin da ya shiga bututu na gaba zai iya canja sakamakon gwaji." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Aikin, majiyyaci da bututu",
        questions: [
          { objective: "O1", q: "Wane ne yake bayar da takardar shaidar Certified Phlebotomy Technician (CPT) da aka bayyana a wannan kwas?", options: ["Ofishin motoci (DMV)", "Kowane asibiti", "NHA, National Healthcareer Association", "Likitan majiyyaci"], answer: 2, why: "NHA ce take bayar da takardar shaidar CPT." },
          { objective: "O1", q: "Kuna zaune a California. Me ya kamata ku kuma duba?", options: ["Dokokin ɗiban jini na California Department of Public Health", "Babu komai; dokokin ƙasa sun isa", "Wani rubutu a shafin blog", "Kamfanin wayarku"], answer: 0, why: "California tana bayar da nata takardun shaidar ɗiban jini ta CDPH." },
          { objective: "O2", q: "Aƙalla alamomin tantance majiyyaci nawa ya kamata ku yi amfani da su?", options: ["Babu ko ɗaya", "Ɗaya", "Biyar", "Biyu"], answer: 3, why: "Aƙalla biyu, yawanci cikakken suna da ranar haihuwa." },
          { objective: "O2", q: "Umarnin ya ce gwajin yana buƙatar azumi. Me za ku yi?", options: ["Ku yi watsi da shi", "Ku duba ko majiyyaci ya yi azumi ku bi dokar ɗakin gwajinku", "Ku ce wa majiyyaci ya fara cin abinci", "Ku ɗibi ƙarin bututu"], answer: 1, why: "Dole a duba umarni na musamman da ke kan umarnin gwaji kafin ɗiban jini." },
          { objective: "O3", q: "A tsarin cika bututu da aka saba, wane bututu ne yake zuwa kafin kore kai tsaye?", options: ["Shunayya", "Toka", "Ja ko ruwan zinariya", "Blood culture"], answer: 2, why: "Tsarin shi ne blood culture, shuɗi mai haske, ja ko ruwan zinariya, kore, shunayya, toka." }
        ]
      }
    },
    {
      name: "Babi na 2: Ɗiban jini, tsaro da samfura",
      lessons: [
        {
          title: "Matakan ɗiban jini na yau da kullum",
          objectives: ["O4"],
          minutes: 6,
          goal: "Jera matakan saka allura a jijiya na yau da kullum da faɗin lokacin tsayawa.",
          text: [
            "Wannan darasi yana koyar da matakan don ku san su kafin shirin horonku. Za ku yi su ne kawai malami yana kallo. Kada ku taɓa gwadawa a jikin mutum a wajen shirin da ake kulawa.",
            "Manyan matakai: ku tabbatar da majiyyaci ku duba umarnin; ku wanke hannuwa ku saka safar hannu (gloves); ku gyara matsayin hannun majiyyaci; ku ɗaura igiyar ɗaure hannu (tourniquet) ku zaɓi jijiya (jijiyar median cubital a lanƙwasar gwiwar hannu sau da yawa ita ce zaɓi na farko); ku tsaftace wurin ku bar shi ya bushe da iska; ku saka allura a kusurwa mara zurfi; ku cika bututu bisa tsarin cika su; ku sassauta igiyar ɗaure hannu; ku cire allura ku kunna na'urar tsaronta; ku danna wurin da gauze; ku rubuta suna a bututu a gaban majiyyaci; ku tsaftace ku duba lafiyar majiyyaci.",
            "Shirye-shirye da yawa suna koyar da cewa kada a bar igiyar ɗaure hannu fiye da kusan minti ɗaya, domin tana iya canja sakamakon gwaji. Ku bi dokokin shirinku.",
            "Ku san lokacin tsayawa: majiyyaci yana jin kamar zai suma ko ya suma, kumburi (hematoma) ya taso da sauri, majiyyaci yana jin zafi mai kaifi, mai harbawa ko kamar wutar lantarki, ko majiyyaci ya nemi ku tsaya. Ku cire igiyar ɗaure hannu da allura, ku danna wurin, ku kiyaye lafiyar majiyyaci, ku nemi taimako."
          ],
          steps: ["Ku tabbatar da majiyyaci ku duba umarnin.", "Ku wanke hannuwa ku saka safar hannu.", "Ku gyara matsayin hannu ku ɗaura igiyar ɗaure hannu.", "Ku zaɓi jijiya, sannan ku tsaftace wurin ku bar shi ya bushe.", "Ku saka allura ku cika bututu bisa tsarin cika su.", "Ku sassauta igiyar ɗaure hannu, ku cire allura ku kunna na'urar tsaro.", "Ku danna wurin da gauze.", "Ku rubuta suna a bututu a gaban majiyyaci, ku tsaftace ku duba lafiyar majiyyaci."],
          words: [["Igiyar ɗaure hannu (tourniquet)", "igiya ko roba da ake ɗaurawa a hannu don jijiyoyi su fito su zama masu sauƙin gani."], ["Jijiyar median cubital", "jijiya a lanƙwasar gwiwar hannu da sau da yawa ita ce zaɓi na farko don ɗiban jini."], ["Hematoma (kumburin jini)", "kumburi na jini a ƙarƙashin fata."], ["Syncope (suma)", "suma: rasa hankali na ɗan lokaci kaɗan."]],
          slides: [
            { title: "Ku koyi matakan, ku yi atisaye ƙarƙashin kulawa", bullets: ["Ku san matakan kafin horo", "Ɗiban jini na gaske sai malami yana kallo"] },
            { title: "Kafin allura", bullets: ["Ku tabbatar da majiyyaci, ku duba umarnin", "Ku wanke hannuwa, ku saka safar hannu", "Igiyar ɗaure hannu, zaɓen jijiya, tsaftacewa da bushewa"] },
            { title: "Ɗiban jini da bayansa", bullets: ["Ku cika bututu bisa tsarin cika su", "Ku cire igiyar, ku cire allura, ku kunna na'urar tsaro", "Ku danna wurin, ku rubuta suna a gaban majiyyaci"] },
            { title: "Lokacin tsayawa", bullets: ["Suma ko jin kamar za a suma", "Kumburi da sauri (hematoma)", "Zafi mai kaifi, mai harbawa ko kamar wutar lantarki", "Majiyyaci ya nemi ku tsaya"] }
          ],
          tryIt: "Babu allura. Ku rubuta matakai takwas na ɗiban jini na yau da kullum a katuna takwas, ku cakuɗa su ku jera su. Sannan, a bayan katin ƙarshe, ku rubuta alamomi huɗu da ke nufin a tsayar da ɗiban jini, da abin da za ku yi a gaba.",
          youCanNow: "lissafa matakan saka allura a jijiya na yau da kullum a jere da faɗin lokacin tsayar da ɗiban jini da abin da za a yi.",
          quickCheck: [
            { objective: "O4", q: "Wane mataki ne yake zuwa kafin tsaftace wurin kai tsaye?", options: ["Rubuta suna a bututu", "Cire allura", "Danna wurin", "Ɗaura igiyar ɗaure hannu da zaɓen jijiya"], answer: 3, why: "Kuna fara nemo jijiya, sannan ku tsaftace wurin ku bar shi ya bushe." },
            { objective: "O4", q: "Yayin ɗiban jini majiyyaci ya ce yana jin kamar zai suma. Me za ku yi?", options: ["Ku gama da sauri", "Ku tsayar da ɗiban jinin, ku kiyaye lafiyarsa ku nemi taimako", "Ku ce masa ya tashi tsaye", "Ku yi watsi da shi"], answer: 1, why: "Jin kamar za a suma alama ce ta tsayawa: cire igiya da allura, danna wurin, kiyaye lafiyar majiyyaci, neman taimako." }
          ]
        },
        {
          title: "Kariya daga cututtuka da tsaron allura",
          objectives: ["O5"],
          minutes: 5,
          goal: "Zaɓi matakin da ya dace na kariya daga cututtuka da tsaron allura a yanayin atisaye.",
          text: [
            "Jini yana iya ɗauke da ƙwayoyin cuta kamar hepatitis B, hepatitis C da HIV, waɗanda ake kira ƙwayoyin cuta masu yaɗuwa ta jini (bloodborne pathogens). Ma'aunin Bloodborne Pathogens Standard na OSHA yana tilasta masu ɗaukar aiki su kasance da shirin kariya daga kamuwa, su bayar da allurar rigakafin hepatitis B, su horar da ma'aikata, su samar da kayan kariya kuma su yi amfani da allurai masu na'urar tsaro.",
            "Al'adunku: ku tsaftace hannuwanku kafin da bayan kowane majiyyaci da kuma lokacin da kuka cire safar hannu; ku saka sabuwar safar hannu ga kowane majiyyaci; ku yi amfani da allurai masu na'urar tsaro ku kunna ta nan take; ku saka allurar da aka yi amfani da ita kai tsaye a akwatin allura (sharps container), kada ku taɓa mayar da murfin allura da hannu, kuma kada ku bar akwatin ya cika ya batse.",
            "Idan allura ta soke ku, ko jini ya taɓa fatarku ko ya shiga idanunku: ku wanke wurin da sabulu da ruwa (ku wanke idanu da ruwa mai yawa), kuma ku sanar da shugabanku nan take don a duba ku. Kada ku jira."
          ],
          steps: ["Ku tsaftace hannuwa kafin da bayan kowane majiyyaci.", "Sabuwar safar hannu ga kowane majiyyaci.", "Ku kunna na'urar tsaro nan da nan bayan allura ta fito.", "Ku saka allura kai tsaye a akwatin allura; kada ku taɓa mayar da murfi da hannu.", "Idan kun kamu: ku wanke, sannan ku sanar nan take."],
          words: [["Ƙwayoyin cuta masu yaɗuwa ta jini (bloodborne pathogens)", "ƙwayoyin cuta a jini da ke iya kawo cuta, kamar hepatitis B, hepatitis C da HIV."], ["OSHA", "Occupational Safety and Health Administration, hukumar tarayyar Amurka ta tsaron wurin aiki."], ["Akwatin allura (sharps container)", "akwati mai ƙarfi mai alama don allurai da aka yi amfani da su da sauran abubuwa masu kaifi."], ["PPE", "kayan kariya na jiki, kamar safar hannu."]],
          slides: [
            { title: "Me yasa yake da muhimmanci", bullets: ["Jini yana iya ɗauke da hepatitis B, hepatitis C, HIV", "Ma'aunin Bloodborne Pathogens na OSHA yana kare ma'aikata"] },
            { title: "Dole mai ɗaukar aiki ya", bullets: ["Samar da shirin kariya daga kamuwa da horo", "Bayar da allurar rigakafin hepatitis B", "Samar da PPE da allurai masu na'urar tsaro"] },
            { title: "Al'adunku", bullets: ["Hannuwa masu tsabta; sabuwar safar hannu ga kowane majiyyaci", "Ku kunna na'urar tsaro nan take", "Kai tsaye a akwatin allura; kada ku mayar da murfi da hannu"] },
            { title: "Idan kun kamu", bullets: ["Ku wanke da sabulu da ruwa; ku wanke idanu da ruwa", "Ku sanar da shugabanku nan take"] }
          ],
          sources: [
            { name: "OSHA: Ƙwayoyin cuta masu yaɗuwa ta jini da hana sukar allura", url: "https://www.osha.gov/bloodborne-pathogens" }
          ],
          tryIt: "Atisaye kawai. Ga kowane yanayi, ku rubuta matakin da ya dace: (1) kun gama da majiyyaci ɗaya kuma na gaba ya zauna, (2) allura ta fito daga jijiya, (3) akwatin allura ya cika har layin alama, (4) kun ji allurar da aka yi amfani da ita ta soke ku ta cikin safar hannu. Amsoshi: ku tsaftace hannuwa ku saka sabuwar safar hannu; ku kunna na'urar tsaro ku saka ta a akwatin allura; ku rufe akwatin ku nemi sabo; ku wanke wurin ku sanar nan take.",
          youCanNow: "zaɓen matakin da ya dace na kariya daga cututtuka da tsaron allura, da faɗin abin da za a yi bayan kamuwa.",
          quickCheck: [
            { objective: "O5", q: "Me za ku yi da allurar da aka yi amfani da ita?", options: ["Ku kunna na'urar tsaronta ku saka ta kai tsaye a akwatin allura", "Ku mayar mata da murfi da hannu", "Ku saka ta a kwandon shara na yau da kullum", "Ku ajiye ta a kan tire sai anjima"], answer: 0, why: "Kunna na'urar tsaro da saka ta kai tsaye a akwatin allura suna hana sukar allura." },
            { objective: "O5", q: "Allurar da aka yi amfani da ita ta soke ku. Me za ku fara yi?", options: ["Ku gama aikinku na yini, sannan ku yanke shawara", "Ku ɓoye shi don kada a ɗora muku laifi", "Ku wanke wurin da sabulu da ruwa ku sanar nan take", "Ku saka bandeji ku manta da shi"], answer: 2, why: "Ku wanke, sannan ku sanar nan take don a duba ku da wuri." }
          ]
        },
        {
          title: "Rubuta suna da kula da samfura, da jerin dubawarku",
          objectives: ["O6"],
          minutes: 5,
          goal: "Yanke shawara ko samfuri an rubuta sunansa kuma an kula da shi sosai har ɗakin gwaji zai karɓe shi.",
          text: [
            "Ɗiban jini mafi kyau ya tafi a banza idan ɗakin gwaji ba zai iya amfani da samfurin ba. Ɗakunan gwaji suna ƙin karɓar samfuran da ba a rubuta suna ba ko aka rubuta ba daidai ba, waɗanda ke cikin bututun da ba daidai ba, waɗanda ba a cika su sosai ba, waɗanda suka daskare alhali bai kamata ba, waɗanda ƙwayoyin jininsu ja suka fashe (hemolyzed, sau da yawa saboda ɗiban jini da ƙarfi ko girgiza bututu), ko waɗanda ba a ajiye su a yanayin zafi ko lokacin da ya dace ba.",
            "Ku rubuta suna a kowane bututu a gaban majiyyaci, nan da nan bayan ɗiban jini, ba kafin ba. Ku bi dokokin ɗakin gwajinku game da abin da ake rubutawa a takardar alama, yawanci cikakken sunan majiyyaci, ranar haihuwa ko lambar shaida, rana da lokaci, da baƙaƙen sunanku (initials). Sannan ku sake kwatanta takardar alamar da umarnin sau ɗaya.",
            "Ku aika samfura yadda ɗakin gwajinku ya ce: wasu ana saka su a kankara, wasu ana kare su daga haske, wasu dole su isa ɗakin gwaji cikin lokaci ƙayyadadde. Ku kiyaye bayanan majiyyaci a sirri a hanya.",
            "Yanzu ku yi aikinku na ƙarshe: jerin abubuwan dubawa naku na aljihu, tare da shirin horonku da jarabawa."
          ],
          steps: ["Ku rubuta suna a kowane bututu a gaban majiyyaci, nan da nan bayan ɗiban jini.", "Ku saka abin da ɗakin gwajinku yake buƙata: suna, ranar haihuwa ko lambar shaida, rana, lokaci, baƙaƙen sunanku.", "Ku kwatanta takardun alama da umarnin.", "Ku kula da bututu ku aika su yadda ɗakin gwaji ya ce (kankara, haske, lokaci).", "Ku sanar da duk wata matsala maimakon aika samfuri marar kyau."],
          words: [["Samfuri (specimen)", "abin da aka ɗauka don gwaji, kamar bututun jini, da ake aikawa ɗakin gwaji."], ["Hemolysis", "lokacin da ƙwayoyin jini ja suka fashe, abin da ke iya lalata sakamakon wasu gwaje-gwaje."], ["Samfurin da aka ƙi", "samfurin da ɗakin gwaji ba zai gwada ba, don haka dole a sake ɗiban jinin majiyyaci."]],
          slides: [
            { title: "Me yasa ɗakunan gwaji suke ƙin samfura", bullets: ["Ba a rubuta suna ba ko an rubuta ba daidai ba", "Bututun da ba daidai ba ko ba a cika sosai ba", "Ya daskare, ya yi hemolysis, zafi marar daidai ko ya makara"] },
            { title: "Ku rubuta suna daidai", bullets: ["A gaban majiyyaci, nan da nan bayan ɗiban jini", "Abin da ɗakin gwajinku yake buƙata: suna, ranar haihuwa ko lamba, rana, lokaci, baƙaƙe", "Ku kwatanta da umarnin"] },
            { title: "Ku kula daidai", bullets: ["Dokokin kankara, haske ko lokaci", "Ku kiyaye bayanai a sirri", "Ku sanar da matsaloli; kada ku taɓa aika samfuri marar kyau"] },
            { title: "Aikin ƙarshe", bullets: ["Jerin dubawarku na aljihu, daga farko har tsaftacewa", "Tsarin cika bututu na ɗakin gwajinku", "Shirin horonku da jarabawa tare da ranaku"] }
          ],
          tryIt: "Aikin ƙarshe. Ku yi jerin abubuwan dubawa na aljihu don ɗiban jini na yau da kullum: tantance majiyyaci da duba umarni, tsabtar hannu da safar hannu, tsarin cika bututu, matakan ɗiban jini, lokacin tsayawa, zubar da allura, rubuta suna a gaban majiyyaci, kula da samfura da tsaftacewa. A baya, ku rubuta shirinku: shirin horo, jarabawar takardar shaida, dokokin jiharku da ranakun da kuke nufi. Kada ku yi amfani da bayanin majiyyaci na gaske.",
          youCanNow: "rubuta suna a samfura da kula da su don ɗakin gwaji ya yi amfani da su, gane dalilan ƙin karɓa, da amfani da jerin dubawarku da shirinku.",
          quickCheck: [
            { objective: "O6", q: "Yaushe kuke rubuta suna a bututu?", options: ["Kafin ku haɗu da majiyyaci", "A ƙarshen aikinku na yini", "A gaban majiyyaci, nan da nan bayan ɗiban jini", "Lokacin da ɗakin gwaji ya kira"], answer: 2, why: "Rubuta suna a gaban majiyyaci nan da nan bayan ɗiban jini yana hana cakuɗewa." },
            { objective: "O6", q: "Bututu ya isa ɗakin gwaji ba tare da suna ba. Me zai faru?", options: ["Ɗakin gwaji zai yi hasashen na wane ne", "Ɗakin gwaji zai ƙi shi kuma dole a sake ɗiban jinin majiyyaci", "Ɗakin gwaji zai gwada shi duk da haka", "Ɗakin gwaji zai rubuta suna daga tunani"], answer: 1, why: "Ana ƙin samfuran da ba su da suna domin babu wanda zai tabbata jinin wane ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ɗiban jini, tsaro da samfura",
        questions: [
          { objective: "O4", q: "Wace jijiya ce sau da yawa ita ce zaɓi na farko don ɗiban jini na yau da kullum?", options: ["Jijiya a ƙafa", "Jijiya a wuya", "Jijiya a bayan hannu kaɗai", "Jijiyar median cubital a lanƙwasar gwiwar hannu"], answer: 3, why: "Jijiyar median cubital sau da yawa ita ce zaɓi na farko domin yawanci tana da sauƙin kaiwa." },
          { objective: "O4", q: "Wanne ne alamar tsayar da ɗiban jini?", options: ["Majiyyaci yana jin zafi mai kaifi, mai harbawa ko kamar wutar lantarki", "Bututu yana cika", "Majiyyaci yana shiru", "Igiyar ɗaure hannu tana ɗaure"], answer: 0, why: "Zafi mai harbawa ko kamar wutar lantarki yana iya nufin an taɓa jijiyar ji (nerve); ku tsaya nan take." },
          { objective: "O5", q: "Wanne ne halin tsaron allura mai aminci?", options: ["Mayar da murfin allura da hannu", "Cika akwatin allura har ya batse", "Saka allurai kai tsaye a akwatin allura", "Barin allurai a kan tire"], answer: 2, why: "Allurai suna shiga akwatin allura kai tsaye, ba a taɓa mayar musu da murfi da hannu ba." },
          { objective: "O5", q: "A ƙarƙashin ma'aunin Bloodborne Pathogens na OSHA, wace allurar rigakafi ce dole masu ɗaukar aiki su bayar?", options: ["Mura", "Hepatitis B", "Kyanda", "Tetanus"], answer: 1, why: "Dole masu ɗaukar aiki su samar da allurar rigakafin hepatitis B ga ma'aikatan da ke fuskantar haɗari." },
          { objective: "O6", q: "Mene ne hemolysis?", options: ["Fashewar ƙwayoyin jini ja", "Wani nau'in bututu", "Rukunin jini", "Ɗiban jini mai tsabta"], answer: 0, why: "Hemolysis shi ne fashewar ƙwayoyin jini ja, abin da ke iya lalata sakamakon wasu gwaje-gwaje." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirye-shiryen Zama Ma'aikacin Ɗiban Jini (Phlebotomy)",
    questions: [
      { objective: "O1", q: "Mene ne phlebotomy?", options: ["Ɗaukar hoton X-ray", "Yin allura", "Ɗiban jini don gwaji ko bayarwa", "Bayar da magungunan da likita ya rubuta"], answer: 2, why: "Phlebotomy tana nufin ɗiban jini." },
      { objective: "O1", q: "Wannan kwas na intanet shi kaɗai zai iya ba ku cancantar ɗiban jini?", options: ["E, bayan jarabawar", "A'a; kuna buƙatar shirin horo da ake kulawa da ɗiban jini ƙarƙashin kulawa", "E, idan kun kalli bidiyo", "E, a kowace jiha"], answer: 1, why: "Ana koyon ɗiban jini na gaske kuma a tabbatar da shi ne kawai a shirin da ake kulawa." },
      { objective: "O1", q: "A ina kuke duba buƙatun takardar shaida na yanzu?", options: ["Shafin hukuma na ƙungiyar da ke bayar da takardar shaidar", "Wani rubutu a kafar sada zumunta", "Aboki", "Tsohon littafin karatu"], answer: 0, why: "Buƙatu da kuɗaɗe suna canjawa; shafin hukuma ne yake da sabon bayani." },
      { objective: "O2", q: "Waɗanne alamomin tantancewa guda biyu ne aka fi amfani da su?", options: ["Lambar ɗaki da launin gado", "Tsawo da nauyi", "Sunan likita da sunan gwaji", "Cikakken suna da ranar haihuwa"], answer: 3, why: "Cikakken suna da ranar haihuwa su ne alamomi biyu da aka saba." },
      { objective: "O2", q: "Mene ne requisition?", options: ["Bututun jini", "Umarnin ɗakin gwaji da ke lissafa majiyyaci da gwaje-gwaje", "Bandeji", "Takardar kuɗi"], answer: 1, why: "Requisition shi ne umarnin ɗakin gwaji." },
      { objective: "O2", q: "Me yasa ake neman majiyyaci ya faɗi sunansa maimakon a tambaya \"Ku ne ...?\"", options: ["Ya fi sauri", "Ya fi ladabi", "Majiyyaci mai tsoro yana iya cewa e ga sunan da ba nasa ba", "Doka ta ce haka"], answer: 2, why: "Idan ya faɗa da kansa, ana gane cakuɗewa." },
      { objective: "O3", q: "A tsarin cika bututu da aka saba, wane bututu ne yake zuwa na ƙarshe?", options: ["Shuɗi mai haske", "Ja", "Kore", "Toka"], answer: 3, why: "Toka (sodium fluoride da potassium oxalate) shi ne na ƙarshe a tsarin da aka saba." },
      { objective: "O3", q: "Wanne ne yake zuwa nan da nan bayan blood culture?", options: ["Shuɗi mai haske (sodium citrate)", "Shunayya", "Toka", "Kore"], answer: 0, why: "Shuɗi mai haske yana bin blood culture a tsarin da aka saba." },
      { objective: "O3", q: "Launukan murafin bututu sun bambanta a sabon ɗakin gwajinku. Me za ku bi?", options: ["Hoton bayanin kwas ɗin", "Abin da kuka tuna daga tsohon aiki", "Jadawalin ɗakin gwajinku na kansa", "Duk abin da ya fi sauri"], answer: 2, why: "Jadawalin kowane ɗakin gwaji shi ne doka, domin masu ƙerawa da ɗakunan gwaji sun bambanta." },
      { objective: "O3", q: "Yaya ake gauraya bututu mai sinadari?", options: ["A girgiza shi da ƙarfi", "A juya shi a hankali, kamar yadda mai ƙerawa ya faɗa", "A bar shi haka", "A dumama shi"], answer: 1, why: "Juyawa a hankali yana gauraya sinadarin ba tare da fasa ƙwayoyin jini ba." },
      { objective: "O4", q: "Wane mataki ne yake zuwa farko?", options: ["Tabbatar da majiyyaci da duba umarni", "Ɗaura igiyar ɗaure hannu", "Saka allura", "Rubuta suna a bututu"], answer: 0, why: "Kowane ɗiban jini yana farawa da majiyyacin da ya dace da umarnin da ya dace." },
      { objective: "O4", q: "Mene ne hematoma?", options: ["Launin bututu", "Wani nau'in allura", "Wuri mai tsabta", "Kumburin jini a ƙarƙashin fata"], answer: 3, why: "Hematoma jini ne da ya taru a ƙarƙashin fata." },
      { objective: "O4", q: "Yaushe kuke sassauta igiyar ɗaure hannu?", options: ["Kafin tsaftace wurin", "Bayan rubuta suna", "Kafin cire allura", "Ba a taɓa ba"], answer: 2, why: "Ana cire igiyar ɗaure hannu kafin allura ta fito." },
      { objective: "O5", q: "Mene ne ƙwayoyin cuta masu yaɗuwa ta jini (bloodborne pathogens)?", options: ["Ƙwayoyin cuta a jini da ke iya kawo cuta", "Injunan ɗakin gwaji", "Sinadaran bututu", "Nau'ikan bandeji"], answer: 0, why: "Hepatitis B, hepatitis C da HIV misalai ne." },
      { objective: "O5", q: "Ma'aunin wace hukumar tarayya ce ke kare ma'aikata daga ƙwayoyin cuta masu yaɗuwa ta jini?", options: ["FDA", "OSHA", "DMV", "IRS"], answer: 1, why: "Ma'aunin Bloodborne Pathogens na OSHA ne ya shafi wannan." },
      { objective: "O5", q: "Jini ya fantsama cikin idonku. Me za ku yi?", options: ["Ku ci gaba da aiki", "Ku murza shi", "Ku jira sai gobe", "Ku wanke shi da ruwa mai yawa ku sanar nan take"], answer: 3, why: "Ku wanke nan take ku sanar don a duba ku." },
      { objective: "O5", q: "Yaushe kuke canja safar hannu?", options: ["Sau ɗaya a rana", "Ga kowane majiyyaci", "Sai idan ta yage", "Ba a taɓa ba"], answer: 1, why: "Sabuwar safar hannu ga kowane majiyyaci tana hana yaɗa ƙwayoyin cuta." },
      { objective: "O6", q: "Wanne ne dalilin da ɗakin gwaji zai ƙi samfuri?", options: ["An rubuta masa suna a gaban majiyyaci", "An aika shi a kan lokaci", "Ya yi hemolysis", "Yana cikin bututun da ya dace"], answer: 2, why: "Hemolysis yana iya lalata sakamako, don haka ɗakin gwaji yana iya ƙin samfurin." },
      { objective: "O6", q: "Me ake rubutawa a takardar alamar bututu?", options: ["Abin da ɗakin gwajinku yake buƙata, yawanci suna, ranar haihuwa ko lambar shaida, rana, lokaci da baƙaƙen sunanku", "Launin bututu kaɗai", "Lambar wayar majiyyaci", "Babu komai"], answer: 0, why: "Ɗakunan gwaji ne ke ƙayyade dokokin takardar alama; waɗannan bayanan su ne aka saba." },
      { objective: "O6", q: "Kun lura cewa ba a cika wani bututu sosai ba. Me za ku yi?", options: ["Ku aika shi duk da haka", "Ku ƙara ruwa", "Ku gauraya shi da wani bututu", "Ku sanar ku bi dokar ɗakin gwajinku; kada ku taɓa aika samfuri marar kyau"], answer: 3, why: "Bututun da ba a cika sosai ba yana iya ba da sakamako marar daidai; ku bi dokar ɗakin gwaji." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 6, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Shirin horo da jarabawa", objective: "O1", notYet: "Ba a ambaci shiri ko jarabawa ba, ko an yi hasashen buƙatu.", meets: "Ya ambaci shirin horo, jarabawar takardar shaida da buƙatunta daga shafin hukuma, dokokin jiha da ranakun da ake nufi.", exceeds: "Ya kwatanta shirye-shirye biyu, har da yawan ɗiban jini ƙarƙashin kulawa da kowanne yake bayarwa." },
      { name: "Tantance majiyyaci da umarni", objective: "O2", notYet: "Jerin dubawar ya tsallake tantance majiyyaci ko duba umarni.", meets: "Yana farawa da alamomi biyu da majiyyaci ya faɗa da duba umarni, tare da \"ku tsaya idan bai yi daidai ba\".", exceeds: "Yana kuma magana kan zaren hannu na shaida a asibiti da umarni na musamman kamar azumi." },
      { name: "Tsarin cika bututu", objective: "O3", notYet: "Wasu bututu sun ɓace ko ba su cikin tsari.", meets: "Dukkan bututu a tsarin da ya dace daga jadawalin shirin ko na ɗakin gwaji.", exceeds: "Ya ƙara dalilin da yasa tsarin yake da muhimmanci, da juya bututu a hankali." },
      { name: "Matakai da alamun tsayawa", objective: "O4", notYet: "Wasu matakai sun ɓace ko ba su cikin tsari, ko babu alamun tsayawa.", meets: "Dukkan matakai a jere, tare da alamomin da ke nufin a tsayar da ɗiban jini.", exceeds: "Ya ƙara abin da za a yi idan majiyyaci ya suma." },
      { name: "Tsaro", objective: "O5", notYet: "Babu matakin tsabtar hannu, safar hannu ko na allura.", meets: "Tsabtar hannu, sabuwar safar hannu, na'urar tsaro, akwatin allura da abin da za a yi bayan kamuwa.", exceeds: "Ya lura da kada a taɓa mayar da murfin allura da hannu da kada a cika akwatin allura ya batse." },
      { name: "Rubuta suna da kula da samfura", objective: "O6", notYet: "Ana rubuta suna kafin ɗiban jini ko nesa da majiyyaci.", meets: "Ana rubuta suna a gaban majiyyaci bayan ɗiban jini, ana kwatantawa da umarni kuma ana bin dokokin kula da samfura.", exceeds: "Ya lissafa dalilai uku da ɗakin gwaji yake ƙin samfura da yadda za a guje wa kowanne." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajista a shirin horon ɗiban jini da aka amince da shi cikin kwanaki 90",
      "Masu koyo da suka ci jarabawar takardar shaidar ɗiban jini kamar CPT na NHA (bisa abin da suka faɗa)",
      "Masu koyo da aka ɗauke su aiki a matsayin ma'aikatan ɗiban jini ko mataimakan ɗakin gwaji cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don shafukan NHA da na ma'aikatar lafiya ta jiha",
      "Takarda, alƙalami masu launi ko ƙananan takardu don atisayen tsarin cika bututu, da katunan rubutu don jerin dubawa",
      "Jadawalin tsarin cika bututu na shirin horonku, idan kuna da shi",
      "Kusan minti 70 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Babu allura, bututu ko jini a wannan kwas; kada ku bar masu koyo su gwada ɗiban jini a jikin juna. Atisayen hannu yana cikin shirin da aka amince da shi kuma ake kulawa.",
      "Masu koyo da ke jin kamar za su suma idan suka ga jini: ku bar su su tsallake hotuna, kuma ku tattauna ko aikin ya dace da su.",
      "Ku kawo jadawalin tsarin cika bututu daga shirin horo ko ɗakin gwaji na yankinku, domin launuka suna iya bambanta.",
      "Ku yi wasan kwaikwayon tantance majiyyaci bibbiyu, tare da wani bayani da aka canja da gangan.",
      "Ku tunatar da masu koyo su duba dokokin jiharsu; wasu jihohi, kamar California, suna bayar da nasu takardun shaida.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
