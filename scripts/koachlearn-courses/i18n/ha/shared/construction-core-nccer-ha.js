"use strict";

// Koach Learn course, Hausa (ha) translation of shared/construction-core-nccer.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "construction-core-nccer-ha",
  lang: "ha",
  translationOf: "construction-core-nccer",
  category: "Workforce Development",
  name: "Tushen Ƙwarewar Gini (Shirin NCCER Core)",
  skills: "Gane haɗurran wurin gini da kariyarsu, Karanta tef ɗin aunawa da lissafin gini, Zaɓa da duba kayan aikin hannu da na wuta, Karanta zane-zanen gini na asali, Ɗaukar kaya lafiya, Shirin horo da jarabawar NCCER Core",
  outcome: "shirya wa horon NCCER Core: faɗin manyan haɗurran wurin gini da yadda ake kare su, karanta tef ɗin aunawa har zuwa kashi ɗaya cikin goma sha shida na inci, mayar da zane mai sauƙi zuwa jerin yanka, duba kayan aiki kafin ku yi amfani da shi, tsara ɗaukar kaya lafiya, da rubuta tsari mai ranaku don horo da jarabawa a cibiyar da NCCER ta amince da ita.",
  about: [
    "NCCER Core shi ne tsarin karatu na farko ga yawancin sana'o'in gini a Amurka, kamar aikin kafinta, wutar lantarki, famfo, HVAC (na'urorin sanyaya da dumama iska) da walda. Makarantun sakandare da yawa, kwalejojin al'umma, shirye-shiryen masu dawowa gida, shirye-shiryen tsofaffin sojoji da shirye-shiryen kafin koyon sana'a suna koyar da shi. Wannan kwas ɗin na duk mai son farawa da wuri ne: matasa, masu canja sana'a, tsofaffin sojoji da masu dawowa gida daga gidan yari.",
    "Za ku yi atisayen ilimin tushe: tsaro a wurin gini, lissafin gini da tef ɗin aunawa, kayan aikin hannu da na wuta, karanta zane-zane, ɗaukar kaya da zama ɗan ƙungiya nagari. A ƙarshe za ku yi fakitin shiri na gaske: jerin yanka na atisaye da tsari mai ranaku don horo da jarabawa.",
    "Wannan kwas ɗin yana SHIRYA ku ne. Ba ya ba ku takardar shaidar NCCER. Ana samun takardun shaidar NCCER ta wuraren horo da NCCER ta amince da su, da jarabawar rubutu da ayyukan hannu da kuke yi gaban ƙwararren mai tantancewa. Ana koyon kayan aiki, tsani da ɗaukar kaya gaban malami, ba daga bidiyo kaɗai ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" da takarda, fensir da tef ɗin aunawa idan kuna da shi. Akwai ɗan gwaji bayan kowane darasi da kowane babi, kuma jarabawa mai tambayoyi 20 tana rufe kwas ɗin."
  ],
  finalTask: "Ku yi fakitin shirinku na Core. Sashe na 1: daga zane mai sauƙi na firam ɗin katako mai faɗin inci 36 da tsayin inci 24, da aka yi da katakai masu kaurin inci 3/4, ku rubuta jerin yanka (sashe, guda nawa, tsawo har zuwa 1/16 na inci), ku faɗi zarton da za ku yi amfani da shi da abubuwa uku da za ku duba kafin amfani da shi, ku tsara yadda za ku ɗauki katakan ku jera su, kuma ku faɗi haɗurran Focus Four da za su iya kasancewa a wurin gini na gaske, da kariya ga kowanne. Sashe na 2: ku rubuta tsarin horo da jarabawa: cibiya ko shirin NCCER mafi kusa (daga shafin Find a Center), sassan Core da za ku karanta, ranar farawa, lokacin karatu na kowane mako, da ranar da kuke son yin jarabawar Core.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu neman aiki da ke son fara aikin gini: matasa da suka gama sakandare, masu canja sana'a, tsofaffin sojoji da masu dawowa gida daga gidan yari. Wasu za su shiga shirin kafin koyon sana'a, koyon sana'a ko shirin aiki da ke koyar da NCCER Core; wasu kuma suna son nuna wa mai ɗaukar aiki cewa a shirye suke su koya.",
    startingPoint: "Suna iya karanta gajerun umarni da yin lissafin lambobi cikakku. Da yawa ba su taɓa karanta tef ɗin aunawa fiye da alamomin inci ba, ba su yi aiki da ɓangarori (fractions) ba tun makaranta, ba su karanta zanen gini ba, ko amfani da kayan aikin wuta ƙarƙashin ƙa'idar tsaro ba.",
    gap: "Masu ɗaukar aikin gini da shirye-shiryen koyon sana'a suna sa ran sabbin ma'aikata su san tsaro, aunawa, kayan aiki da zane-zane na asali tun ranar farko. Masu koyo da suka zo da wannan ilimin suna koyo da sauri a horon hannu, sun fi zama lafiya a wurin aiki, kuma sun fi yiwuwa su gama Core su shiga wata sana'a.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 8); ana bayanin kowace kalmar sana'a",
      "Na'urori: waya ko kwamfutar ɗakin karatu; atisaye yana yiwuwa a takarda, da tef ɗin aunawa idan mai koyo yana da shi",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki da ganawa",
      "Tsaro: babu atisayen kayan aikin wuta, tsani ko ɗaukar kaya shi kaɗai; ana koyon su gaban malami",
      "Kwas ɗin yana shiryawa ne kawai; takardun shaidar NCCER suna fitowa daga shirye-shiryen da aka amince da su, kuma buƙatu na iya canjawa"
    ],
    prerequisites: "Lissafin lambobi cikakku da karanta gajerun umarni. Kwas ɗin \"Everyday Math\" (Lissafin yau da kullum) da \"Tushen Tsaro a Wurin Aiki (OSHA)\" suna taimakawa, amma ba dole ba ne."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku hoton wurin gini ko jerin ayyuka", action: "gane haɗurran Focus Four da faɗin kariya ga kowanne", standard: "kuna samun aƙalla 4 cikin 5 daidai, har da ƙa'idar kariyar faɗuwa ta ƙafa 6 da ƙa'idojin tsani" },
    { id: "O2", condition: "Ta amfani da tef ɗin aunawa ko zanensa, da takarda", action: "karanta ma'auni har zuwa 1/16 na inci mafi kusa, da tara, cirewa da canja ƙafa da inci", standard: "aƙalla amsoshi 4 cikin 5 daidai sosai" },
    { id: "O3", condition: "Idan aka ba ku aikin yanka, huda ko ɗaurawa", action: "zaɓar kayan aikin hannu ko na wuta da ya dace da rubuta abubuwan tsaro da za a duba kafin amfani da shi", standard: "kuna faɗin aƙalla abubuwa uku daidai na dubawa, har da garkuwa, waya, da kashe wuta kafin canja ruwan zarto ko kan huji" },
    { id: "O4", condition: "Idan aka ba ku zanen gini mai sauƙi", action: "nemo akwatin bayani, sikeli, ra'ayoyi da ma'auni, da mayar da su jerin yanka", standard: "kowane tsawo daidai har zuwa 1/16 na inci mafi kusa" },
    { id: "O5", condition: "Idan aka ba ku kayan gini da za a motsa ko a ajiye", action: "tsara ɗagawa, ɗauka da jerawa lafiya, har da lokacin neman taimako ko na'ura", standard: "kuna duba nauyi, hanya, yanayin jiki wajen ɗagawa da jerawa" },
    { id: "O6", condition: "Ta amfani da shafin NCCER da kalandarku", action: "rubuta tsarin horo da jarabawa na NCCER Core mai cibiya, sassa da ranaku", standard: "da cibiya ko shiri na gaske, duk sassan Core a rubuce da ranar jarabawa da ake nufi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsaro, lissafi da aunawa",
      lessons: [
        {
          title: "Menene NCCER Core da yadda ake samun takardar shaida",
          objectives: ["O6"],
          minutes: 5,
          goal: "Bayanin abin da NCCER Core ya ƙunsa da yadda mai koyo ke samun takardar shaidar NCCER.",
          text: [
            "NCCER ita ce National Center for Construction Education and Research (Cibiyar Ƙasa ta Ilimi da Bincike kan Gini a Amurka). Tana rubuta horo don sana'o'in gini kuma tana ajiye bayanan takardun shaidar da mutane suka samu. Core shi ne tsarin karatu na farko da yawancin sana'o'i ke ginuwa a kai.",
            "A bugu na 6 na Core, sassan (modules) su ne: Basic Safety (Construction Site Safety Orientation), Introduction to Construction Math, Introduction to Hand Tools, Introduction to Power Tools, Introduction to Construction Drawings, Basic Communication Skills, Basic Employability Skills da Introduction to Materials Handling. Build Your Future in Construction da Introduction to Basic Rigging na zaɓi ne. Ku duba shafin Core, domin bugu-bugu suna canjawa.",
            "Ana samun takardun shaidar NCCER a wuraren horo da aka amince da su. Kuna yin jarabawar rubutu kan abin da kuka sani, kuma kuna yin ayyuka lafiya yayin da mai tantancewa ke kallo. Ana ajiye sakamakonku ƙarƙashin lambar NCCER taku, don masu ɗaukar aiki su iya duba su a intanet.",
            "Ana yawan koyar da Core a makarantun sakandare, kwalejojin al'umma, shirye-shiryen aiki da na masu dawowa gida, da shirye-shiryen kafin koyon sana'a. Ku yi amfani da shafin Find a Center na NCCER don neman ɗaya kusa da ku. Wannan kwas ɗin yana shirya ku; ba ya ba ku takardar shaida."
          ],
          steps: ["Ku buɗe nccer.org ku nemo shafin Core a cikin jerin sana'o'i (craft catalog).", "Ku rubuta sassan Core na bugun yanzu.", "Ku buɗe shafin Find a Center ku nema kusa da ku.", "Ku rubuta wurare biyu kusa da ku da yadda za a tuntuɓe su."],
          words: [["NCCER", "National Center for Construction Education and Research: ƙungiyar da ke rubuta wannan horon gini kuma take bin diddigin takardun shaida."], ["Core", "tsarin karatu na farko na NCCER; yawancin sana'o'in gini suna farawa da shi."], ["Sashe (module)", "kashi ɗaya na tsarin karatu, kamar babi ɗaya na littafi, da jarabawarsa."], ["Takardar shaida (credential)", "shaidar cewa kun ci horo da jarabawa, wadda mai ɗaukar aiki zai iya dubawa."], ["An amince da shi (accredited)", "NCCER ta yarda ya horar kuma ya gwada masu koyo don takardun shaidar NCCER."], ["Kafin koyon sana'a (pre-apprenticeship)", "gajeren shiri da ke shirya ku don shiga koyon sana'a mai albashi (apprenticeship)."]],
          slides: [
            { title: "NCCER Core", bullets: ["Tsarin karatu na farko ga yawancin sana'o'in gini", "Kafinta, wutar lantarki, famfo, HVAC, walda suna ginuwa a kai"] },
            { title: "Sassan Core, bugu na 6", bullets: ["Tsaro, lissafi, kayan aikin hannu, kayan aikin wuta, zane-zane", "Sadarwa, shirin aiki, ɗaukar kaya", "Na zaɓi: Build Your Future, Basic Rigging"] },
            { title: "Yadda ake samun shi", bullets: ["Ku yi horo a wurin da NCCER ta amince da shi", "Ku ci jarabawar rubutu", "Ku yi ayyuka lafiya gaban mai tantancewa", "Ana ajiye sakamako ƙarƙashin lambar NCCER taku"] },
            { title: "Wannan kwas ɗin", bullets: ["Yana shirya ku", "Ba ya ba da takardar shaida", "Ku yi amfani da Find a Center don nemo shiri"] }
          ],
          sources: [
            { name: "NCCER: Tsarin karatun Core (craft catalog)", url: "https://www.nccer.org/craft-catalog/core/" },
            { name: "NCCER: Takardun shaida da masana'antu suka amince da su", url: "https://www.nccer.org/credentials-certifications/industry-recognized-credentials/" },
            { name: "NCCER: Find a Center (Nemo cibiya)", url: "https://www.nccer.org/find-a-center/" },
            { name: "Apprenticeship.gov: Menene shirin kafin koyon sana'a?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" }
          ],
          tryIt: "Ku buɗe shafin NCCER Core da shafin Find a Center. A takarda, ku rubuta sassan Core da sunayen wurare biyu kusa da ku da ke koyarwa ko gwajin NCCER. Idan ba za ku iya shiga intanet ba, ku rubuta sassan daga wannan darasi, kuma ku tambayi American Job Center (cibiyar taimakon aiki ta gwamnati) na yankinku waɗanne shirye-shirye ke koyar da NCCER Core.",
          youCanNow: "faɗin abin da NCCER Core ya ƙunsa, yadda ake samun takardun shaidarsa, da inda za ku nemi shiri kusa da ku.",
          quickCheck: [
            { objective: "O6", q: "A ina ake samun takardun shaidar NCCER?", options: ["Daga kowane kwas na bidiyo a intanet", "A wurin horo da NCCER ta amince da shi", "Ta sayen takardar shaida a intanet", "Daga ofishin lasisin mota na jiharku (DMV)"], answer: 1, why: "Takardun shaidar NCCER suna fitowa daga wuraren da aka amince da su, da jarabawar rubutu da ayyukan hannu." },
            { objective: "O6", q: "Me wannan kwas na Koach Learn ke yi?", options: ["Yana ba ku takardar shaidar NCCER Core", "Yana maye gurbin jarabawar ayyukan hannu", "Yana shirya ku don horo da jarabawar Core", "Yana mai da ku ɗan kwangila mai lasisi"], answer: 2, why: "Yana shirya ku ne; takardar shaida tana fitowa daga shirin da aka amince da shi." }
          ]
        },
        {
          title: "Tsaro a wurin gini: Focus Four da kariyarsu",
          objectives: ["O1"],
          minutes: 6,
          goal: "Gane haɗurran Focus Four a wurin gini da faɗin kariya ga kowanne.",
          text: [
            "OSHA (hukumar tsaro da lafiyar ma'aikata ta Amurka) tana kiran manyan abubuwa huɗu da suka fi kashe mutane a aikin gini Focus Four: faɗuwa, abu ya buge mutum (struck-by), maƙalewa a ciki ko tsakanin abubuwa (caught-in or -between), da wutar lantarki ta kama mutum (electrocution). Basic Safety a Core yana farawa daga nan.",
            "Faɗuwa: OSHA tana buƙatar kariyar faɗuwa a tsawon ƙafa shida ko fiye a aikin gini, kamar shingen gefe (guardrails), ragar tsaro ko igiyar ɗaure jiki da ke tsayar da faɗuwa. Ku rufe ko ku kewaye ramuka. A tsanin da ake ɗauka da ake amfani da shi don hawa sama, sandunan gefensa dole su wuce saman wurin sauka da aƙalla ƙafa 3, kuma ƙafar tsanin tana nesa da bango kusan ƙafa ɗaya ga kowace ƙafa huɗu ta tsawo (ƙa'idar 4 zuwa 1).",
            "Abu ya buge mutum: ku sa hular kariya da riga mai haske, kada ku tsaya ƙarƙashin kaya da ake ɗagawa, kuma kada ku taɓa tsayawa bayan mota da ke ja da baya. Maƙalewa: kada ku shiga rami mara kariya, ku nisanci sassan na'ura masu motsi da injunan da ke juyawa. Wutar lantarki: ku duba sama don wayoyin wuta, ku yi amfani da kayan aiki a soket mai GFCI, kuma kada ku yi aiki a kan layin wuta mai rai sai idan an horar da ku kuma an ba ku izini.",
            "Kayan kariya (PPE) su ne layin kariya na ƙarshe. Gilashin kariya, hular kariya, safar hannu, kariyar kunne da takalman aiki suna kare ku, amma cire haɗarin ko kewaye shi ne ke zuwa farko. Idan wani abu ya yi kama da ba shi da aminci, ku tsaya ku gaya wa mai kula da ku."
          ],
          steps: ["Ku duba aikin da wurin da ke kewaye da shi.", "Ku tambaya: wani zai iya faɗuwa, a buge shi, ya maƙale, ko ya taɓa wutar lantarki?", "Ku faɗi kariyar: shinge, rufi, nisa, kariya ko kashe wuta.", "Ku sa kayan kariya (PPE) da suka dace.", "Idan ba za ku iya kare haɗarin ba, ku tsaya ku gaya wa mai kula da ku."],
          words: [["Focus Four", "sunan da OSHA ta ba manyan abubuwa huɗu da ke kashe mutane a aikin gini: faɗuwa, buguwa, maƙalewa, da wutar lantarki."], ["Kariyar faɗuwa (fall protection)", "shingen gefe, ragar tsaro ko igiyar ɗaure jiki da ke hana ko tsayar da faɗuwa."], ["GFCI", "ground-fault circuit interrupter: na'urar da ke yanke wuta da sauri idan wuta ta zube, don hana girgizar wuta."], ["PPE", "kayan kariya na kai: hular kariya, gilashin kariya, safar hannu, takalma, kariyar kunne, riga mai haske."], ["Kariya (control)", "hanyar cire haɗari ko rage shi."]],
          slides: [
            { title: "Focus Four", bullets: ["Faɗuwa", "Abu ya buge mutum (struck-by)", "Maƙalewa a ciki ko tsakanin abubuwa", "Wutar lantarki (electrocution)"] },
            { title: "Faɗuwa", bullets: ["Kariyar faɗuwa a ƙafa 6 ko fiye a aikin gini", "Ku rufe ko ku kewaye ramuka", "Sandunan tsani ƙafa 3 sama da wurin sauka; ƙa'idar 4 zuwa 1"] },
            { title: "Buguwa, maƙalewa, wutar lantarki", bullets: ["Hular kariya, riga mai haske, kada ku tsaya ƙarƙashin kaya", "Babu rami mara kariya; ku nisanci sassa masu motsi", "Ku duba sama don wayoyin wuta; GFCI; babu aikin wuta mai rai ba horo"] },
            { title: "PPE shi ne layi na ƙarshe", bullets: ["Ku cire ko ku kewaye haɗarin da farko", "Sannan ku sa PPE da ya dace", "Ba aminci? Ku tsaya ku gaya wa mai kula da ku"] }
          ],
          sources: [
            { name: "OSHA: Horon Focus Four na aikin gini", url: "https://www.osha.gov/training/outreach/construction/focus-four" },
            { name: "OSHA: Kariyar faɗuwa", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: 29 CFR 1926.1053, Tsani", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" }
          ],
          tryIt: "Ku zana wurin gini mai sauƙi a takarda: firam ɗin gida mai hawa biyu, tsani, rami, wayar wuta da babbar mota. Ku yi alamar haɗarin Focus Four ɗaya ga kowanne, ku rubuta kariyar a gefensa. Sannan ku lissafa nisan da ƙafar tsani ya kamata ta kasance daga bango idan tsanin ya kai ƙafa 16 sama (amsa: kusan ƙafa 4).",
          youCanNow: "faɗin haɗurran Focus Four, ba da kariya ga kowanne, da amfani da ƙa'idar ƙafa 6 da ƙa'idojin tsani.",
          quickCheck: [
            { objective: "O1", q: "Wani ma'aikaci yana bakin rufi a tsawon ƙafa 10 babu shingen gefe. Me ya shafe shi?", options: ["Babu komai, ƙasa da ƙafa 20 ne", "Hular kariya kaɗai ake buƙata", "Safar hannu za ta magance matsalar", "Ana buƙatar kariyar faɗuwa a ƙafa 6 ko fiye"], answer: 3, why: "OSHA tana buƙatar kariyar faɗuwa a ƙafa shida ko fiye a aikin gini." },
            { objective: "O1", q: "Tsani ya kai ƙafa 12 sama a jikin bango. Kusan nisan nawa ya kamata ƙafarsa ta kasance daga bango?", options: ["Ƙafa 3", "Ƙafa 6", "Ƙafa 1", "Ƙafa 12"], answer: 0, why: "Ƙa'idar 4 zuwa 1: ƙafa 1 waje ga kowace ƙafa 4 sama, don haka 12 / 4 = ƙafa 3." }
          ]
        },
        {
          title: "Lissafin gini: tef ɗin aunawa da ɓangarori",
          objectives: ["O2"],
          minutes: 6,
          goal: "Karanta tef ɗin aunawa har zuwa 1/16 na inci mafi kusa da tara da canja ƙafa da inci.",
          text: [
            "Yawancin tef ɗin aunawa a aikin gini a Amurka suna raba kowane inci zuwa kashi goma sha shida. Layi mafi tsawo a tsakiyar inci shi ne 1/2. Layukan da suka biyo baya a gajarta su ne 1/4 da 3/4, sannan na takwas-takwas, sannan layuka mafi gajarta su ne na goma sha shida-goma sha shida. Ku ƙirga ƙananan layukan bayan cikakken inci na ƙarshe: ƙananan layuka 6 bayan inci 5 shi ne 5 6/16, wanda ya ragu zuwa 5 3/8.",
            "Don rage ɓangare, ku raba sama da ƙasa da 2 har sai lambar sama ta zama mara cika (odd): 12/16 = 6/8 = 3/4. Don tara ɓangarori, ku ba su lambar ƙasa ɗaya: 2 3/4 + 1 5/8 = 2 6/8 + 1 5/8 = 3 11/8 = 4 3/8.",
            "Ƙafa ɗaya inci 12 ce. Don canja ƙafa zuwa inci, ku ninka da 12 ku ƙara sauran inci: ƙafa 7 da inci 4 = 84 + 4 = inci 88. Don canja inci zuwa ƙafa, ku raba da 12; abin da ya rage inci ne: inci 100 = ƙafa 8 da inci 4.",
            "Ku duba ko kusurwa ta yi daidai (square) da ƙa'idar 3-4-5: ku auna ƙafa 3 a gefe ɗaya da ƙafa 4 a ɗayan gefen; idan nisan tsakanin alamomin biyu ya zama ƙafa 5, kusurwar ta yi daidai. Ku auna sau biyu, ku yanka sau ɗaya."
          ],
          steps: ["Ku nemo cikakken inci na ƙarshe kafin ƙarshen abin da kuke aunawa.", "Ku ƙirga layukan goma sha shida bayansa.", "Ku rubuta lambar a matsayin goma sha shida-goma sha shida, sannan ku rage ta.", "Don ƙafa da inci, ku ninka ƙafa da 12 ku ƙara inci.", "Ku duba amsarku ta sake aunawa."],
          words: [["Kashi ɗaya cikin goma sha shida (sixteenth)", "1/16 na inci, alama mafi ƙanƙanta a yawancin tef ɗin aunawa na gini."], ["Rage ɓangare (reduce)", "rubuta ɓangare da ƙananan lambobi masu ma'ana ɗaya, kamar 8/16 = 1/2."], ["Daidai (square)", "kusurwa mai digiri 90 daidai."], ["Ƙa'idar 3-4-5", "hanyar duba ko kusurwa ta yi daidai: 3 da 4 a gefuna suna ba da 5 a tsallake."]],
          slides: [
            { title: "Karanta tef ɗin", bullets: ["An raba kowane inci zuwa 16", "Layi mafi tsawo a tsakiya: 1/2", "Sannan 1/4 da 3/4, sannan na takwas, sannan na goma sha shida"] },
            { title: "Ɓangarori a wurin aiki", bullets: ["Rage: 12/16 = 6/8 = 3/4", "Lambar ƙasa ɗaya don tarawa: 2 3/4 + 1 5/8 = 4 3/8"] },
            { title: "Ƙafa da inci", bullets: ["Ƙafa 1 = inci 12", "Ƙafa 7 inci 4 = inci 88", "Inci 100 = ƙafa 8 inci 4"] },
            { title: "Duba kusurwa", bullets: ["Ƙafa 3 a gefe ɗaya, ƙafa 4 a ɗayan", "Tsallake na ƙafa 5 = daidai", "Ku auna sau biyu, ku yanka sau ɗaya"] }
          ],
          tryIt: "A takarda, ku warware: (1) ƙafa 9 da inci 7 a inci; (2) 3 7/16 + 2 5/8; (3) inci 50 a ƙafa da inci; (4) 10/16 da aka rage. Amsoshi: inci 115; 6 1/16; ƙafa 4 da inci 2; 5/8. Idan kuna da tef ɗin aunawa, ku auna tebur, ƙofa da littafi har zuwa 1/16 na inci mafi kusa.",
          youCanNow: "karanta tef ɗin aunawa har zuwa 1/16 na inci, rage da tara ɓangarori, canja ƙafa da inci, da duba ko kusurwa ta yi daidai.",
          quickCheck: [
            { objective: "O2", q: "Ƙafa 6 da inci 3 inci nawa ne?", options: ["Inci 63", "Inci 75", "Inci 72", "Inci 93"], answer: 1, why: "6 x 12 = 72, a ƙara 3 = inci 75." },
            { objective: "O2", q: "Nawa ne 2 1/2 + 1 3/8?", options: ["3 4/10", "3 1/2", "3 7/8", "4 1/8"], answer: 2, why: "2 4/8 + 1 3/8 = 3 7/8." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsaro, lissafi da aunawa",
        questions: [
          { objective: "O6", q: "Wanne daga cikin waɗannan sashe ne da ake buƙata a NCCER Core, bugu na 6?", options: ["Introduction to Construction Math (Lissafin gini)", "Advanced Pipe Welding (Walda bututu na gaba)", "Commercial Driving (Tukin manyan motoci)", "Real Estate Law (Dokar gidaje da filaye)"], answer: 0, why: "Introduction to Construction Math ɗaya ne daga cikin sassan Core." },
          { objective: "O1", q: "Wanne BA ɗaya daga cikin haɗurran Focus Four na OSHA ba ne?", options: ["Faɗuwa", "Wutar lantarki", "Kurakuran takardu", "Abu ya buge mutum"], answer: 2, why: "Focus Four su ne faɗuwa, buguwa, maƙalewa a ciki ko tsakanin abubuwa, da wutar lantarki." },
          { objective: "O1", q: "Kun toshe zarto a soket a wurin gini. Me ke kare ku daga girgizar wuta idan wuta ta zube?", options: ["Waya mafi tsawo", "Safar hannu mai jiƙa", "Naɗe filogi da tef", "GFCI"], answer: 3, why: "GFCI yana yanke wuta da sauri idan wuta ta zube." },
          { objective: "O2", q: "Kun ƙirga alamomin goma sha shida 10 bayan inci 4. Menene ma'aunin?", options: ["4 1/10", "4 5/8", "4 3/4", "4 1/2"], answer: 1, why: "10/16 ya ragu zuwa 5/8, don haka inci 4 5/8." },
          { objective: "O2", q: "Kun auna ƙafa 3 da ƙafa 4 a gefuna biyu na kusurwa. Tsallaken ƙafa 5 da inci 2 ne. Me hakan ke nufi?", options: ["Kusurwar ta yi daidai", "Tef ɗin ya lalace", "Kusurwar ba ta yi daidai ba tukuna", "Dole ku yi amfani da ƙafa 6 maimakon haka"], answer: 2, why: "Kusurwa da ta yi daidai tana ba da ƙafa 5 daidai a tsallake." }
        ]
      }
    },
    {
      name: "Babi na 2: Kayan aiki, zane-zane da shirinku",
      lessons: [
        {
          title: "Kayan aikin hannu da na wuta: zaɓa, duba, yi amfani lafiya",
          objectives: ["O3"],
          minutes: 6,
          goal: "Zaɓar kayan aiki da ya dace da aiki da rubuta abubuwan tsaro da za a duba kafin amfani da shi.",
          text: [
            "Ku zaɓi kayan aikin da aka yi don aikin. Guduma mai ƙugiya (claw hammer) tana kafa ƙusoshi kuma tana cire su; tef ɗin aunawa, speed square da level (ma'aunin daidaito) suna yin alama da dubawa; zarton hannu ko zarto mai zagaye (circular saw) yana yanka katakai; injin huji (drill) yana kafa sukurori kuma yana huda ramuka; wuƙar aiki (utility knife) tana zana layi a jikin allon drywall. Amfani da kayan aiki marar dacewa, kamar sukudireba a matsayin cizel, yana jawo rauni da ɓarna.",
            "Kafin ku yi amfani da kowane kayan aiki, ku duba shi. Kayan aikin hannu: babu kai mara ɗauri, babu hannu mai tsagewa ko kan bugawa da ya bazu kamar laima (mushroomed). Kayan aikin wuta: garkuwa tana nan kuma tana aiki, waya da filogi babu yanka ko rashin ƙafar ƙasa (ground pin), maɓalli yana aiki, ruwan zarto ko kan huji yana da kaifi kuma irin wanda ya dace.",
            "Idan za ku canja ruwan zarto ko kan huji, ku cire filogi ko ku fitar da batir. Kada ku taɓa ɗaukar kayan aiki ta wayarsa ko ku fizge wayar. Ku cire wayoyi daga hanyoyin wucewa. Ku sa gilashin kariya kowane lokaci, da kariyar kunne idan kayan aiki suna da ƙara mai yawa.",
            "Amfani da kayan aiki ƙwarewar hannu ce. Ku koyi kowane kayan aikin wuta ku yi atisaye da shi gaban malami kafin ku yi amfani da shi da kanku, kuma ku bi littafin umarnin mai ƙera da ƙa'idojin wurin aikinku."
          ],
          steps: ["Ku zaɓi kayan aikin da aka yi don aikin.", "Ku duba shi: hannu, kai, garkuwa, waya, filogi, maɓalli, ruwan zarto ko kan huji.", "Ku sa gilashin kariya da sauran PPE.", "Ku cire filogi ko batir kafin canja ruwan zarto ko kan huji.", "Ku yi wa kayan aiki da ya lalace alama ku kai rahoto; kada ku yi amfani da shi."],
          words: [["Garkuwa (guard)", "murfi a jikin kayan aikin wuta da ke nisantar da hannuwanku daga ruwan zarto ko sassa masu motsi."], ["Ƙafar ƙasa (ground pin)", "ƙafa ta uku mai zagaye a jikin filogi da ke taimakawa wajen hana girgizar wuta."], ["Speed square", "kayan aiki mai siffar alwatika don zana layuka madaidaita da masu karkata."], ["Ya bazu (mushroomed)", "idan ƙarshen bugawa na cizel ko punch ya bazu saboda bugu; guntayensa na iya fita su yi tsalle."]],
          slides: [
            { title: "Kayan aiki da ya dace, aiki da ya dace", bullets: ["Guduma: kafa da cire ƙusoshi", "Zarto: yanka; injin huji: ramuka da sukurori", "Square da level: alama da dubawa"] },
            { title: "Ku duba kafin amfani", bullets: ["Kayan aikin hannu: babu kai mara ɗauri ko hannu mai tsagewa", "Kayan aikin wuta: garkuwa, waya, filogi, maɓalli, ruwan zarto"] },
            { title: "Halaye masu aminci", bullets: ["Ku cire filogi kafin canja ruwan zarto ko kan huji", "Kada ku ɗauka ta waya", "Gilashin kariya kowane lokaci"] },
            { title: "Aikin hannu gaban malami", bullets: ["Ku fara atisayen kowane kayan aikin wuta da mai horarwa", "Ku bi littafin umarni da ƙa'idojin wurin aiki", "Ku yi wa kayan aiki da suka lalace alama ku kai rahoto"] }
          ],
          sources: [
            { name: "OSHA: Kayan aikin hannu da na wuta", url: "https://www.osha.gov/hand-power-tools" }
          ],
          tryIt: "Ga kowane aiki, ku rubuta kayan aikin da abubuwa uku da za ku duba: (1) yanka katako 2x4 zuwa tsawo; (2) kafa sukurori a jikin katakon bene (deck board); (3) cire ƙusa da ya lanƙwasa. Misali ga (1): zarto mai zagaye; garkuwa tana rufewa da kanta, waya da filogi ba su lalace ba, ruwan zarto yana da kaifi kuma an matse shi.",
          youCanNow: "zaɓar kayan aiki don aiki, duba shi, da bin halaye masu aminci na kayan aikin hannu da na wuta.",
          quickCheck: [
            { objective: "O3", q: "Kuna buƙatar canja ruwan zarto mai zagaye. Me za ku fara yi?", options: ["Cire filogin zarton", "Danne maɓallin kunnawa", "Cire garkuwa gaba ɗaya", "Ce wa abokin aiki ya riƙe shi yana aiki"], answer: 0, why: "Cire filogi, ko fitar da batir, yana hana zarton tashi yayin da hannuwanku ke kan ruwan zarto." },
            { objective: "O3", q: "Filogin wayar ƙari (extension cord) ba shi da ƙafar ƙasa. Me za ku yi?", options: ["Ku yi amfani da shi idan kuna sauri", "Ku rufe ramin da tef", "Ku daina amfani da shi ku kai rahoto", "Ku yanke filogin"], answer: 2, why: "Filogi da ya lalace haɗarin girgizar wuta ne; ku yi masa alama ku kai rahoto." }
          ]
        },
        {
          title: "Karanta zane-zanen gini da yin jerin yanka",
          objectives: ["O4", "O2"],
          minutes: 6,
          goal: "Nemo akwatin bayani, sikeli, ra'ayoyi da ma'auni a jikin zane da rubuta jerin yanka daga gare shi.",
          text: [
            "Zane-zanen gini, wanda ake kira plans ko blueprints, suna nuna abin da za a gina. Ku fara da akwatin bayani (title block): sunan aikin, lambar takarda, rana, wanda ya zana da sikeli. Legend (jerin alamomi) yana bayanin alamomi da gajartattun kalmomi.",
            "Zane-zane suna nuna ra'ayoyi (views) daban-daban. Plan view yana kallo daga sama zuwa ƙasa. Elevation yana kallon gefe ɗaya kai tsaye. Section yanka ne ta cikin gini da ke nuna ciki. Detail yana nuna sashe ɗaya kusa-kusa.",
            "Sikeli yana faɗin yadda zane ya yi daidai da girman gaske. A inci 1/4 = ƙafa 1, layi mai tsawon inci 2 1/2 ƙafa 10 ne. Koyaushe ku yi amfani da ma'aunin da aka rubuta; idan ma'aunin da aka rubuta babu shi ko bai dace ba, ku tambayi mai kula da ku maimakon ku auna takardar.",
            "Jerin yanka (cut list) yana mayar da zane zuwa guntayen da za a yanka: suna, guda nawa, tsawo. Ga firam mai faɗin inci 36 da tsayin inci 24 da aka yi da katakai na inci 3/4, inda guntayen gefe ke shiga tsakanin na sama da na ƙasa: na sama da na ƙasa guda 2 ne a inci 36; na gefe guda 2 ne a 24 - 3/4 - 3/4 = inci 22 1/2."
          ],
          steps: ["Ku karanta akwatin bayani: aiki, takarda, rana da sikeli.", "Ku karanta legend don alamomi.", "Ku nemo ra'ayin da kuke buƙata: plan, elevation, section ko detail.", "Ku rubuta ma'aunin kowane sashe.", "Ku cire inda sassa ke shiga juna, sannan ku rubuta jerin yanka: sashe, guda nawa, tsawo."],
          words: [["Akwatin bayani (title block)", "akwati a jikin zane mai sunan aikin, lambar takarda, rana da sikeli."], ["Sikeli (scale)", "yadda girman zane ya yi daidai da girman gaske, kamar inci 1/4 = ƙafa 1."], ["Plan view", "zane da ke kallo daga sama zuwa ƙasa."], ["Elevation", "zane da ke kallon gefe ɗaya kai tsaye."], ["Jerin yanka (cut list)", "jerin guntayen da za a yanka, da yawansu da tsawonsu."]],
          slides: [
            { title: "Ku fara da akwatin bayani", bullets: ["Aiki, lambar takarda, rana", "Sikeli", "Sannan legend don alamomi"] },
            { title: "Ra'ayoyi huɗu", bullets: ["Plan: daga sama", "Elevation: gefe ɗaya", "Section: yanka; detail: kusa-kusa"] },
            { title: "Sikeli da ma'auni", bullets: ["Inci 1/4 = ƙafa 1: inci 2 1/2 a takarda = ƙafa 10", "Ku yi amfani da ma'aunin da aka rubuta; kada ku auna takarda", "Babu shi ko ba daidai ba? Ku tambayi mai kula da ku"] },
            { title: "Yin jerin yanka", bullets: ["Sashe, guda nawa, tsawo", "Ku cire inda sassa ke shiga juna", "Firam 36 x 24: 2 a inci 36, 2 a inci 22 1/2"] }
          ],
          tryIt: "Ku zana akwati a takarda ku rubuta faɗinsa inci 48 da tsayinsa inci 30, da aka yi da katakai na inci 3/4, inda na gefe ke shiga tsakanin na sama da na ƙasa. Ku rubuta jerin yanka. Amsa: 2 a inci 48 da 2 a inci 28 1/2. Sannan: a inci 1/4 = ƙafa 1, tsawon bango nawa ne idan an zana shi inci 3 3/4? (Amsa: ƙafa 15.)",
          youCanNow: "karanta akwatin bayani, sikeli da ra'ayoyin zane mai sauƙi da mayar da ma'auninsa zuwa jerin yanka.",
          quickCheck: [
            { objective: "O4", q: "A ina za ku sami sikeli da lambar takarda a jikin zane?", options: ["A cikin section view", "A cikin akwatin bayani (title block)", "A bayan takardar", "A cikin legend na alamomi kawai"], answer: 1, why: "Akwatin bayani yana ɗauke da sunan aikin, lambar takarda, rana da sikeli." },
            { objective: "O4", q: "Sikeli inci 1/4 = ƙafa 1 ne. An zana bango inci 2. Tsawonsa nawa ne?", options: ["Ƙafa 2", "Ƙafa 4", "Ƙafa 6", "Ƙafa 8"], answer: 3, why: "Inci 2 kashi takwas ne na kwata-kwatan inci, don haka ƙafa 8." }
          ]
        },
        {
          title: "Ɗaukar kaya, aikin ƙungiya da shirinku na Core",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Tsara ɗagawa da ɗaukar kaya lafiya da rubuta tsarin horo da jarabawa mai ranaku na NCCER Core.",
          text: [
            "Kafin ku ɗaga, ku auna kayan da ido: nauyinsa, girmansa, ko yana da gefuna masu kaifi. Ku duba hanyarku don abubuwan da za su iya kayar da ku da ƙofofi. Idan yana da nauyi ko wuyar riƙewa, ku nemi abokin aiki ko ku yi amfani da keken ɗaukar kaya, dolly ko wata na'ura da aka horar da ku a kanta. Ku ɗaga da ƙafafunku: ƙafafu a buɗe, ku lanƙwasa gwiwoyi, ku riƙe kayan kusa da jikinku, kada ku murɗa jiki. Ku juya da ƙafafunku.",
            "Ku jera kaya a ƙasa mai lebur kuma mai ƙarfi, masu nauyi a ƙasa, kuma ku yi amfani da blocking ko cross-stacking don kada tarin ya zame ko ya mirgina. Ku bar hanyoyin wucewa da ƙofofin fita a buɗe. Ku ɗauki dogayen katakai da ƙarshen gaba a sama, kuma ku kula da ƙarshen baya idan kuna juyawa.",
            "'Yan ƙungiya nagari suna zuwa a kan lokaci, a shirye, da PPE ɗinsu. Suna saurara, suna maimaita umarni (\"Yanka guda huɗu a 22 da rabi, na ji\"), suna tambaya idan ba su tabbata ba, kuma suna kai rahoton haɗari nan take. Core yana koyar da waɗannan a matsayin Basic Communication da Basic Employability Skills.",
            "Yanzu ku yi shirinku. Ku zaɓi cibiya ko shiri, ku rubuta sassan Core, ku zaɓi ranar farawa da lokacin karatu na kowane mako, kuma ku sa ranar da kuke son yin jarabawarku. Ku sa ranakun a kalandarku kuma ku gaya wa wani da zai riƙa tambayar ku."
          ],
          steps: ["Ku auna kayan da hanyar da ido.", "Ku nemi taimako ko na'ura don kaya masu nauyi ko masu wuyar riƙewa.", "Ku ɗaga da ƙafafunku, ku riƙe kusa, kada ku murɗa.", "Ku jera a ƙasa mai ƙarfi, masu nauyi a ƙasa, hanyoyin wucewa a buɗe.", "Ku rubuta shirinku: cibiya, sassa, ranar farawa, lokacin kowane mako, ranar jarabawa."],
          words: [["Blocking", "guntayen katako da ake sanyawa don hana tari mirgina ko zamewa."], ["Cross-stacking", "jera kowane mataki a kwance a kan wanda ke ƙasansa don tarin ya tsaya da ƙarfi."], ["Maimaita umarni (repeat back)", "faɗa wa wanda ya ba da umarni abin da ya ce, don ku duka ku san an ji daidai."]],
          slides: [
            { title: "Kafin ku ɗaga", bullets: ["Ku auna nauyi, girma da gefuna", "Ku duba hanya", "Mai nauyi ko mai wuya? Ku nemi taimako ko na'ura"] },
            { title: "Ɗagawa da jerawa", bullets: ["Ku lanƙwasa gwiwoyi, ku riƙe kusa, kada ku murɗa", "Masu nauyi a ƙasa, da blocking ko cross-stacking", "Hanyoyin wucewa da ƙofofin fita a buɗe"] },
            { title: "Ku zama ɗan ƙungiya nagari", bullets: ["A kan lokaci, a shirye, da PPE", "Ku maimaita umarni", "Ku tambaya idan ba ku tabbata ba; ku kai rahoton haɗari"] },
            { title: "Shirinku na Core", bullets: ["Cibiya ko shiri kusa da ku", "Sassan Core da lokacin karatu na kowane mako", "Ranar farawa da ranar jarabawa"] }
          ],
          sources: [
            { name: "NCCER: Find a Center (Nemo cibiya)", url: "https://www.nccer.org/find-a-center/" },
            { name: "NCCER: Tsarin karatun Core (craft catalog)", url: "https://www.nccer.org/craft-catalog/core/" },
            { name: "Apprenticeship.gov: Mai nemo ayyukan koyon sana'a", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }
          ],
          tryIt: "Ku rubuta tsarin ɗaukar katakai goma na 2x6 masu tsawon ƙafa 12 daga babbar mota zuwa wurin aiki da ke nesa da ƙafa 50: duba nauyi, hanya, wanda zai taimaka, yadda za ku ɗauka, da yadda za ku jera. Sannan ku fara shirinku na Core: ku rubuta cibiyar da kuka samu a Darasi na 1, sassan Core, ranar farawa, lokacin karatunku na kowane mako da ranar jarabawa.",
          youCanNow: "tsara ɗagawa, ɗauka da jerawa lafiya, zama ɗan ƙungiya nagari, da rubuta tsari mai ranaku don horo da jarabawar NCCER Core.",
          quickCheck: [
            { objective: "O5", q: "Wani akwati ya fi nauyin da za ku iya ɗagawa cikin sauƙi. Me za ku yi?", options: ["Ku ɗaga shi da sauri don ku gama", "Ku murɗa jiki don ku jefa shi sama", "Ku nemi abokin aiki ko ku yi amfani da keken ɗaukar kaya", "Ku ja shi ta kusurwa ɗaya"], answer: 2, why: "Kaya masu nauyi ko masu wuyar riƙewa suna buƙatar taimako ko na'ura." },
            { objective: "O6", q: "Wanne tsarin horo ne ya cika?", options: ["\"Zan yi karatu wani lokaci.\"", "\"Zan nemi cibiya daga baya.\"", "\"Zan yi jarabawa wata rana.\"", "\"Cibiya: shirin aiki na gundumar; sassan Core; farawa Nov 3; Talata da Alhamis 6-8 na yamma; jarabawa Feb 15.\""], answer: 3, why: "Yana faɗin cibiya, sassa, ranar farawa, lokacin kowane mako da ranar jarabawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kayan aiki, zane-zane da shirinku",
        questions: [
          { objective: "O3", q: "Kafin amfani da zarton wuta, wanne dubawa ya fi muhimmanci?", options: ["Garkuwa tana aiki kuma waya ba ta lalace ba", "Zarton yana da kyakkyawan launi", "Wayar ta yi tsawon da za ta kai motarku", "Ruwan zarton ya dushe don ya yanka a hankali"], answer: 0, why: "Garkuwa mai aiki da waya mai aminci suna hana yankewa da girgizar wuta." },
          { objective: "O4", q: "Wanne ra'ayi ne ke kallon gefe ɗaya na gini kai tsaye?", options: ["Plan view", "Elevation", "Detail", "Akwatin bayani"], answer: 1, why: "Elevation yana nuna gefe ɗaya kai tsaye." },
          { objective: "O4", q: "Firam yana da tsayin inci 40. Na gefe suna shiga tsakanin katakan sama da ƙasa masu kaurin inci 3/4. Tsawon na gefe nawa ne?", options: ["Inci 40", "Inci 39 1/4", "Inci 38 1/2", "Inci 41 1/2"], answer: 2, why: "40 - 3/4 - 3/4 = inci 38 1/2." },
          { objective: "O5", q: "Yaya ya kamata ku jera katakai a wurin aiki?", options: ["A kan laka mai laushi", "A gaban ƙofar fita", "Masu sauƙi a ƙasa", "A ƙasa mai ƙarfi, da blocking ko cross-stacking, hanyoyin wucewa a buɗe"], answer: 3, why: "Ƙasa mai ƙarfi, blocking ko cross-stacking da hanyoyin wucewa a buɗe suna sa tari ya tsaya kuma mutane su zauna lafiya." },
          { objective: "O5", q: "Shugaban aikinku ya ce \"Yanka guda huɗu a 22 da rabi.\" Wace amsa ce mai kyau?", options: ["\"Guda huɗu a 22 da rabi, na ji.\"", "Babu komai; ku fara yanka kawai", "\"Ko ma menene.\"", "\"Zan yi hasashen sauran.\""], answer: 0, why: "Maimaita umarni yana nuna an ji daidai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Ƙwarewar Gini (Shirin NCCER Core)",
    questions: [
      { objective: "O6", q: "Me NCCER ke nufi?", options: ["National Council for Contractor Employment Rules", "National Center for Construction Education and Research", "New Construction Codes and Electrical Regulations", "National Committee on Carpentry and Electrical Repair"], answer: 1, why: "NCCER ita ce National Center for Construction Education and Research." },
      { objective: "O6", q: "Yaya ake samun takardar shaidar NCCER?", options: ["Kallon bidiyo da buga takardar shaida", "Biyan kuɗi a intanet ba tare da jarabawa ba", "Cin jarabawar rubutu da yin ayyuka gaban mai tantancewa a wurin da aka amince da shi", "Aiki rana ɗaya a kowane wurin gini"], answer: 2, why: "Takardun shaida suna buƙatar jarabawar rubutu da ayyukan hannu a wurin da aka amince da shi." },
      { objective: "O6", q: "Wane shafin NCCER ne ke taimaka muku nemo wurin horo ko jarabawa?", options: ["Find a Center", "Legend", "Takardar bayanan tsaro (safety data sheet)", "Takardar albashinku"], answer: 0, why: "Shafin Find a Center na NCCER yana lissafa wuraren horo da jarabawa." },
      { objective: "O1", q: "Wanne jeri ne Focus Four na OSHA?", options: ["Ƙara, zafi, ƙura da sanyi", "Faɗuwa, buguwa, maƙalewa a ciki ko tsakanin abubuwa, wutar lantarki", "Gobara, ambaliya, iska da dusar ƙanƙara", "Takardu, ƙarin lokaci, hutu da albashi"], answer: 1, why: "Waɗannan huɗun ne ke jawo yawancin mutuwa a aikin gini." },
      { objective: "O1", q: "A wane tsawo OSHA ke buƙatar kariyar faɗuwa a aikin gini?", options: ["Ƙafa 2", "Ƙafa 20", "Ƙafa 10", "Ƙafa 6"], answer: 3, why: "OSHA tana buƙatar kariyar faɗuwa a ƙafa shida ko fiye a aikin gini." },
      { objective: "O1", q: "Tsani ya kai wurin sauka na sama. Nisan nawa sandunan gefensa dole su wuce saman wurin saukar?", options: ["Aƙalla ƙafa 3", "Daidai da shi", "Inci 6", "Aƙalla ƙafa 10"], answer: 0, why: "Ƙa'idar tsani ta OSHA: sandunan gefe aƙalla ƙafa 3 sama da wurin sauka na sama." },
      { objective: "O1", q: "Kun ga wayar wuta a sama inda ƙungiya ke son ɗaga tsani. Me za ku yi?", options: ["Ku ɗaga shi da sauri", "Ku yi amfani da tsanin ƙarfe", "Ku tsaya ku gaya wa mai kulawa kafin a ci gaba da aiki", "Ku taɓa wayar don ku gwada ta"], answer: 2, why: "Wutar lantarki haɗarin Focus Four ne; ku tsaya ku kai rahoto." },
      { objective: "O2", q: "Ƙafa 8 da inci 5 inci nawa ne?", options: ["85", "96", "105", "101"], answer: 3, why: "8 x 12 = 96, a ƙara 5 = inci 101." },
      { objective: "O2", q: "Menene 14/16 idan aka rage shi?", options: ["7/8", "3/4", "1/2", "14/8"], answer: 0, why: "Ku raba sama da ƙasa da 2: 7/8." },
      { objective: "O2", q: "Nawa ne 1 3/4 + 2 3/8?", options: ["3 6/12", "4 1/8", "3 3/8", "4 3/4"], answer: 1, why: "1 6/8 + 2 3/8 = 3 9/8 = 4 1/8." },
      { objective: "O3", q: "Wanne kayan aiki aka yi don kafa da cire ƙusoshi?", options: ["Speed square", "Wuƙar aiki", "Guduma mai ƙugiya", "Level"], answer: 2, why: "Guduma mai ƙugiya tana kafa ƙusoshi kuma tana cire su." },
      { objective: "O3", q: "Kan guduma ba ya da ɗauri a jikin hannunta. Me za ku yi?", options: ["Ku yi amfani da ita a hankali", "Ku yi mata alama ku daina amfani da ita ku kai rahoto", "Ku naɗe ta da tef", "Ku ba abokin aiki aro"], answer: 1, why: "Kai mara ɗauri na iya fita ya yi tsalle; ku daina amfani da kayan aikin ku kai rahoto." },
      { objective: "O3", q: "Wanne hali ne mai aminci da kayan aikin wuta masu waya?", options: ["Ɗaukar kayan aikin ta wayarsa", "Cire garkuwa don ku ga da kyau", "Fizge filogi ta wayar", "Cire wayoyi daga hanyoyin wucewa da sa gilashin kariya"], answer: 3, why: "Hanyoyin wucewa a buɗe suna hana kaɗuwa, kuma gilashin kariya yana kare idanunku." },
      { objective: "O4", q: "Wane ra'ayin zane ne ke kallo daga sama zuwa ƙasa?", options: ["Plan view", "Elevation", "Section", "Detail"], answer: 0, why: "Plan view yana kallo daga sama zuwa ƙasa." },
      { objective: "O4", q: "Ma'aunin da aka rubuta a jikin zane bai yi daidai da abin da kuka auna a takarda ba. Me za ku yi?", options: ["Ku yi amfani da ma'aunin takardarku", "Ku yi amfani da ma'aunin da aka rubuta, ko ku tambayi mai kula da ku idan ya yi kama da kuskure", "Ku ɗauki tsakiyar biyun", "Ku tsallake wannan sashe"], answer: 1, why: "Ma'aunin da aka rubuta shi ne ke da iko; ku tambaya idan wani abu bai dace ba." },
      { objective: "O4", q: "A inci 1/4 = ƙafa 1, tsawon bango nawa ne idan an zana shi inci 5?", options: ["Ƙafa 5", "Ƙafa 10", "Ƙafa 20", "Ƙafa 25"], answer: 2, why: "Inci 5 kwata-kwatan inci ashirin ne, don haka ƙafa 20." },
      { objective: "O5", q: "Wace hanya ce daidai ta ɗagawa?", options: ["Lanƙwasa a ƙugu da ƙafafu madaidaita", "Murɗa jiki don ajiye kayan", "Riƙe kayan nesa da jikinku", "Lanƙwasa gwiwoyi, riƙe kayan kusa, juyawa da ƙafafunku"], answer: 3, why: "Amfani da ƙafafunku da riƙe kayan kusa suna kare bayanku." },
      { objective: "O5", q: "Kuna ɗaukar dogon katako ta ƙofa. Me za ku kula da shi?", options: ["Ƙarshen baya na katakon idan kuna juyawa", "Wayarku kawai", "Babu komai; katakai ba su da nauyi", "Fitilun silin"], answer: 0, why: "Ƙarshen baya yana juyawa idan kun juya kuma zai iya bugun mutane ko abubuwa." },
      { objective: "O5", q: "Kafin ku motsa kaya, me za ku fara auna da ido?", options: ["Wanda ke kallo", "Nauyi, girma da gefunan kayan, da hanya", "Launin kayan", "Saurin da za ku iya gudu da shi"], answer: 1, why: "Sanin kayan da hanya yana faɗa muku ko kuna buƙatar taimako ko na'ura." },
      { objective: "O6", q: "Me ya kamata ya kasance a cikin tsarin horo da jarabawa?", options: ["Kalmar \"wata rana\" kawai", "Lambar sirrin bankinku (PIN)", "Cibiya, sassa, ranar farawa, lokacin karatu na kowane mako da ranar jarabawa", "Jerin kayan aikin da za ku saya kafin ku fara"], answer: 2, why: "Tsari mai wuri, sassa da ranaku shi ne wanda za ku iya bi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 4, 5, 7, 9, 11, 13, 15, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Jerin yanka", objective: "O4", notYet: "Babu tsawo, ko ba a la'akari da katakai na inci 3/4 ba.", meets: "Guda biyu a inci 36 da biyu a inci 22 1/2, da sunayen guntaye da yawansu.", exceeds: "Yana kuma lura da faɗin hanyar zarto (kerf) kuma yana nuna gefen da za a auna daga gare shi." },
      { name: "Aunawa da lissafi", objective: "O2", notYet: "Ɓangarori ba daidai ba ne ko ba a rage su ba.", meets: "Kowane tsawo daidai ne har zuwa 1/16 na inci mafi kusa kuma an rage shi.", exceeds: "Yana nuna lissafin kuma yana duba ko firam ɗin ya yi daidai da ƙa'idar 3-4-5." },
      { name: "Zaɓin kayan aiki da dubawa", objective: "O3", notYet: "Babu kayan aiki da aka faɗi, ko abubuwan dubawa ƙasa da uku.", meets: "Yana faɗin zarto da ya dace da abubuwa uku daidai na dubawa, har da garkuwa, waya da cire filogi kafin canja ruwan zarto.", exceeds: "Yana kuma lissafa PPE kuma yana cewa za a yi amfani da kayan aikin ne kawai bayan horo da malami." },
      { name: "Ɗaukar kaya lafiya", objective: "O5", notYet: "Babu tsari na nauyi, hanya ko jerawa.", meets: "Yana duba nauyi, hanya, yanayin jiki wajen ɗagawa da jerawa.", exceeds: "Yana kuma faɗin lokacin neman mataimaki ko na'ura da yadda ake ɗaukar dogayen katakai a wurin juyawa." },
      { name: "Haɗurran wurin aiki", objective: "O1", notYet: "Ba a faɗi haɗurra ba.", meets: "Yana faɗin aƙalla haɗurran Focus Four biyu da za su iya kasancewa da kariya ga kowanne.", exceeds: "Yana rufe duka huɗun da kariyarsu." },
      { name: "Tsarin horo da jarabawa", objective: "O6", notYet: "Babu cibiya ko babu ranaku.", meets: "Cibiya ko shiri na gaske, sassan Core, ranar farawa, lokacin karatu na kowane mako da ranar jarabawa.", exceeds: "Ranakun suna cikin kalanda kuma an faɗi sunan mai taimako." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajista a shirin NCCER Core ko shirin kafin koyon sana'a cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka sami takardun shaidar NCCER Core, bisa faɗinsu ko na shirin abokin aiki",
      "Masu koyo da aka ɗauka aikin gini ko koyon sana'a cikin watanni 6",
      "Shirye-shiryen abokan aiki sun ce sabbin ɗaliban Core suna da ƙarancin giɓi a tsaro da lissafi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda, fensir da rula; tef ɗin aunawa idan akwai",
      "Waya ko kwamfuta don buɗe nccer.org da osha.gov",
      "Kwafin zanen firam na atisaye da aka buga don zaman rukuni",
      "Kusan minti 75 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku koyar da babi ɗaya a kowane zama, da ayyukan \"Gwada yanzu\" a yi su nan take.",
      "Ku kawo tef ɗin aunawa da yawa; ku sa masu koyo su karanta alamomi a tef ɗin juna kuma su duba amsoshi bibbiyu.",
      "Kada ku bar masu koyo su yi amfani da kayan aikin wuta, tsani ko na'urorin ɗaga kaya a wannan kwas; ƙwararren malamin NCCER ne ke koyar da su gaba da gaba.",
      "Ku taimaka wa masu koyo su yi amfani da shafin Find a Center na NCCER kuma ku haɗa su da shirye-shiryen Core na yanki, shirye-shiryen kafin koyon sana'a ko American Job Center.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ga masu koyo da ke dawowa gida, ku nuna musu masu ɗaukar aiki da shirye-shiryen da ke ba da dama ta biyu; ga tsofaffin sojoji, ku tambayi VA (hukumar tsofaffin sojoji) game da amfani da tallafin ilimi don koyon sana'a ko horo."
    ]
  }
};
