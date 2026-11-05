"use strict";

// Koach Learn course, Hausa (ha) translation of shared/smartphone-tablet.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "smartphone-tablet-ha",
  lang: "ha",
  translationOf: "smartphone-tablet",
  category: "Seniors and Technology",
  name: "Amfani da Wayar Zamani da Tablet",
  skills: "Amfani da allon taɓawa, Kira da saƙon tes, Ɗaukar hoto da aika shi, Saka manhajoji lafiya, Kulle na'ura da sabunta ta",
  outcome: "amfani da wayar zamani ko tablet da kanku: buɗe ta, yin kira, aika saƙon tes da hoto, saka manhaja daga shagon hukuma, da ajiye na'urar a kulle kuma sabuntacciya.",
  about: [
    "Wayar zamani (smartphone) ko tablet tana ba ku damar kira da tura saƙon tes ga iyali, ganin hotunan jikoki, duba yanayi, nemo mota ko bas, da magana da likitanku. Wannan kwas ɗin na duk wanda yake sabo da waɗannan na'urori, ko wanda yake son ya ƙara ƙarfin gwiwa.",
    "Za ku koyi allon taɓawa, kira da saƙon tes, kyamara, yadda ake saka manhaja (app) lafiya, da yadda ake ajiye na'urarku a kulle kuma sabuntacciya. Matakan suna aiki a wayoyin Android da iPhone da iPad; inda suka bambanta, za mu faɗa.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" da na'urarku a hannunku. Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Da wayarku ko tablet ɗinku: ku buɗe ta, ku kira wani da kuka sani (ko kiran bidiyo), ku tura masa saƙon tes da hoton da kuka ɗauka yanzu, ku saka manhaja ɗaya kyauta mai amfani daga shagon manhajoji na hukuma, sannan ku duba cewa makullin allo yana kunne kuma manhajar na'urar (software) sabuntacciya ce.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya masu sabuwar waya ko tablet, ko wadda ba sa yawan amfani da ita: tsofaffi, mutanen da iyali ko wani shiri ya ba su waya, masu dawowa cikin al'umma, sababbin shigowa ƙasa da masu kula da marasa lafiya.",
    startingPoint: "Suna iya kunna na'urar kuma wataƙila su amsa kira. Da yawa ba su da tabbas kan yadda ake yawo a allon taɓawa, canja girman rubutu, ajiye lambobin mutane, aika hoto, saka manhaja lafiya, ko ajiye na'urar a kulle kuma sabuntacciya.",
    gap: "Yanzu ta waya da tablet ne mutane suke kaiwa ga iyali, likitoci, kantin magani, bankuna da hidimomi. Waɗanda ba za su iya amfani da su da kansu ba suna rasa kira da saƙonni, suna wahala wajen karanta allo, suna saka manhajoji na bogi, ko suna rasa bayanan sirri idan waya ta ɓace.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin motsin yatsa da kalmomi kamar icon (alama) da permission (izini)",
      "Na'urori: wayar Android, iPhone ko tablet ta mai koyo; ana ba da matakai na duka biyun",
      "Lokaci: kusan minti 5 a kowane darasi, kusan minti 60 gaba ɗaya",
      "Kuɗi: manhajoji kyauta kaɗai, daga shagon manhajoji na hukuma",
      "Sirri: masu koyo ba sa taɓa ba wanda ya kira su code da aka turo ta tes, kuma ba sa taɓa tura hoton katin shaida ko katin banki ga baƙi"
    ],
    prerequisites: "Babu. Ana buƙatar waya ko tablet mai caji."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da wayarku ko tablet ɗinku", action: "buɗe ta, amfani da taɓawa, gogewa, dannewa da riƙewa da matsewa, buɗe manhaja da komawa allon gida", standard: "ba tare da taimakon kowa ba" },
    { id: "O2", condition: "A cikin manhajar Settings (Saituna)", action: "canja girman rubutu, hasken allo da ƙarar sauti don na'urar ta zama mai sauƙin gani da ji", standard: "kowanne a matakin da ya dace da ku" },
    { id: "O3", condition: "Idan akwai wanda kuke son ku kai gare shi", action: "ajiye shi a matsayin contact (lambar mutum), kiransa da tura masa saƙon tes, da kula da kiran lambobin da ba ku sani ba lafiya", standard: "an yi kiran, an aika saƙon, kuma ba a taɓa ba wanda ya kira code ba" },
    { id: "O4", condition: "Ta amfani da manhajar Camera (kyamara) da Photos ko Gallery (hotuna)", action: "ɗaukar hoto mai kyau da tura shi a saƙon tes ga wanda kuka sani", standard: "hoton yana bayyane sosai kuma babu wani abu na sirri a ciki" },
    { id: "O5", condition: "A shagon manhajoji na hukuma", action: "nemo manhaja kyauta ku saka ta bayan duba wanda ya yi ta, maki da sharhi, da zaɓin izinin da za ku bayar", standard: "ana bayar da izinin da manhajar take buƙata da gaske kaɗai" },
    { id: "O6", condition: "A na'urarku", action: "kunna makullin allo mai ƙarfi, duba sabunta manhajar na'ura (software update) da kunna Find My Device ko Find My", standard: "makullin ba mai sauƙin hasashe ba ne kuma na'urar sabuntacciya ce" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sabawa da na'urarku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Asalin allon taɓawa: taɓawa, gogewa da allon gida",
          minutes: 5,
          goal: "Buɗe na'urarku, buɗe manhaja, da komawa allon gida.",
          text: [
            "Wayar zamani waya ce da take kuma ƙaramar kwamfuta. Tablet abu ɗaya ne amma da babban allo. Yawancinsu suna amfani da Android (Google ne ya yi shi, kuma Samsung, Motorola da wasu suna amfani da shi) ko iOS da iPadOS (Apple ne ya yi su don iPhone da iPad).",
            "Kuna sarrafa ta da yatsanku. Taɓawa (tap): ku taɓa ku saki, don buɗe wani abu. Gogewa (swipe): ku ja yatsanku a kan allo, don canja shafi ko gangarawa. Dannewa da riƙewa (press and hold): ku bar yatsanku a kan allo, don ganin ƙarin zaɓuɓɓuka. Matsewa (pinch): ku buɗe yatsu biyu don ƙara girman abu, ku haɗa su don rage shi.",
            "Allon gida yana nuna manhajojinku a matsayin ƙananan hotuna da ake kira icon (alama). Don komawa gida, ku goge sama daga gefen ƙasan allo, ko ku danna maɓallin gida idan na'urarku tana da shi."
          ],
          steps: ["Ku danna maɓallin gefe ko na sama don tayar da allo.", "Ku goge sama ku saka lambar sirrinku, ko ku yi amfani da hoton yatsa ko fuska.", "Ku taɓa alamar manhaja don buɗe ta.", "Ku goge sama daga ƙasa (ko ku danna maɓallin gida) don komawa gida.", "Ku buɗe yatsu biyu a kan hoto don ƙara girmansa."],
          words: [["Wayar zamani (smartphone)", "waya da take kuma ƙaramar kwamfuta mai allon taɓawa."], ["Icon (alama)", "ƙaramin hoto da kuke taɓawa don buɗe manhaja."], ["Allon gida (home screen)", "babban allo da ke nuna manhajojinku."], ["Gogewa (swipe)", "jan yatsanku a kan allo."]],
          slides: [
            { title: "Manyan nau'i biyu", bullets: ["Android: Samsung, Motorola, Google Pixel da wasu", "iPhone da iPad na Apple"] },
            { title: "Motsin yatsa", bullets: ["Taɓawa: buɗe wani abu", "Gogewa: gangarawa ko canja shafi", "Dannewa da riƙewa: ƙarin zaɓuɓɓuka", "Matsewa: ƙara ko rage girma"] },
            { title: "Komawa gida", bullets: ["Ku goge sama daga gefen ƙasan allo", "Ko ku danna maɓallin gida idan kuna da shi"] }
          ],
          tryIt: "Ku tayar da na'urarku ku buɗe ta. Ku buɗe manhajar Camera ko Weather (yanayi), ku goge nan da can, sannan ku koma allon gida. Ku yi haka sau uku har ya zama muku da sauƙi.",
          youCanNow: "buɗe na'urarku, buɗe manhaja da taɓawa, gangarawa da gogewa, da komawa allon gida.",
          quickCheck: [
            { objective: "O1", q: "Me dannewa da riƙewa yake yi?", options: ["Yana kashe waya", "Yana nuna ƙarin zaɓuɓɓuka", "Yana ɗaukar hoto", "Yana yin kira"], answer: 1, why: "Barin yatsanku a kan allo yana nuna ƙarin zaɓuɓɓuka." },
            { objective: "O1", q: "Kuna cikin manhaja kuma kuna son komawa allon gida. Me za ku yi?", options: ["Ku kashe waya ku sake kunna ta", "Ku haɗa yatsu biyu", "Ku cire batir", "Ku goge sama daga gefen ƙasa, ko ku danna maɓallin gida"], answer: 3, why: "Gogewa sama daga ƙasa, ko maɓallin gida, yana mayar da ku allon gida." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sauƙaƙa gani da ji",
          minutes: 4,
          goal: "Ƙara girman rubutu, da daidaita ƙarar sauti da hasken allo yadda ya dace da ku.",
          text: [
            "Kuna iya canja na'urarku don ta fi sauƙin amfani. Duk waɗannan suna cikin manhajar Settings (Saituna), wadda yawanci alamarta giya ce (gear, kamar ƙafar keke mai haƙora).",
            "Babban rubutu: ku buɗe Settings, ku nemi Display ko Accessibility, ku nemo text size ko font size (girman rubutu). Hasken allo: ku nemo shi a Display, ko ku goge ƙasa daga saman allo don sarrafawa da sauri. Ƙarar sauti: ku yi amfani da maɓallan gefe.",
            "Idan ba ku sami wani abu ba, ku yi amfani da akwatin bincike a saman Settings ku rubuta kalma kamar \"text size\". Na'urorin Android da Apple duka kuma suna da abubuwan sauƙaƙawa kamar gilashin ƙara girma da karanta allo da babbar murya."
          ],
          steps: ["Ku buɗe manhajar Settings (alamar giya).", "Ku taɓa akwatin bincike a sama ku rubuta \"text size\".", "Ku ja maɓallin zamewa har rubutun ya zama mai sauƙin karantawa.", "Ku goge ƙasa daga sama don canja hasken allo.", "Ku yi amfani da maɓallan gefe don ƙarar sauti."],
          words: [["Settings (Saituna)", "manhajar da kuke canja yadda na'urarku take aiki a cikinta."], ["Accessibility (sauƙaƙawa)", "abubuwan da ke sa na'ura ta fi sauƙin gani, ji ko taɓawa."]],
          slides: [
            { title: "Manhajar Settings", bullets: ["Yawanci alamarta giya ce (gear)", "Inda kuke canja yadda na'urarku take aiki"] },
            { title: "Sauƙin gani da ji", bullets: ["Girman rubutu a Display ko Accessibility", "Hasken allo a Display ko a sarrafawa da sauri", "Ƙarar sauti: maɓallan gefe"] },
            { title: "Ba ku samu ba?", bullets: ["Ku yi amfani da akwatin bincike a saman Settings", "Ku rubuta kalma kamar \"text size\""] }
          ],
          tryIt: "Ku buɗe Settings, ku bincika \"text size\" ku ƙara girman rubutu mataki ɗaya. Sannan ku goge ƙasa daga sama ku canja hasken allo.",
          youCanNow: "ƙara girman rubutu da daidaita hasken allo da ƙarar sauti don na'urarku ta yi muku daɗin amfani.",
          quickCheck: [
            { objective: "O2", q: "Wace alama manhajar Settings take yawan amfani da ita?", options: ["Kyamara", "Kumfar magana", "Giya (gear)", "Ƙugiyar takarda"], answer: 2, why: "Settings yawanci alamarta giya ce." },
            { objective: "O2", q: "Allon ya yi duhu sosai don karantawa a waje. Me za ku yi?", options: ["Ku goge ƙasa daga sama ku ƙara hasken allo", "Ku sayi sabuwar waya", "Ku danna maɓallan ƙarar sauti", "Ku goge wata manhaja"], answer: 0, why: "Ana samun sarrafa hasken allo da sauri ta gogewa ƙasa daga saman allo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kira, lambobin mutane da saƙon tes",
          minutes: 5,
          goal: "Ajiye lambar mutum, yin kira da tura saƙon tes.",
          text: [
            "Manhajar Phone (waya) tana yin kira. Manhajar Contacts (lambobin mutane; a wasu wayoyi tana cikin manhajar Phone) tana ajiye sunaye da lambobi, don ku iya kira ta taɓa suna maimakon rubuta lamba.",
            "Manhajar Messages (saƙonni) tana tura saƙon tes. Ku taɓa maɓallin sabon saƙo, ku zaɓi mutum, ku rubuta a akwatin da ke ƙasa, sannan ku taɓa kibiyar aikawa.",
            "Idan lambar da ba ku sani ba ta kira, kuna iya barinta ta tafi voicemail (saƙon murya). Mai kira na gaske zai bar saƙo. Kada ku taɓa ba wanda ya kira ku code daga saƙon tes."
          ],
          steps: ["Ku buɗe Contacts (ko Phone, sannan Contacts).", "Ku taɓa maɓallin + don ƙara mutum: suna da lamba. Ku ajiye (Save).", "Ku taɓa sunan, sannan alamar waya don kira.", "Ku buɗe Messages ku taɓa maɓallin sabon saƙo.", "Ku zaɓi mutumin, ku rubuta saƙonku ku taɓa aikawa."],
          words: [["Contact (lambar mutum)", "suna da lambar waya da aka ajiye."], ["Saƙon tes (text message)", "gajeren saƙon rubutu da ake turawa daga waya zuwa waya."], ["Voicemail (saƙon murya)", "saƙon da aka naɗa idan ba ku amsa kira ba."]],
          slides: [
            { title: "Manhajoji uku", bullets: ["Phone: yin kira", "Contacts: ajiye sunaye da lambobi", "Messages: tura saƙon tes"] },
            { title: "Ƙara lambar mutum", bullets: ["Ku taɓa +", "Ku saka suna da lamba", "Ku taɓa Save (ajiye)"] },
            { title: "Tura saƙon tes", bullets: ["Maɓallin sabon saƙo", "Ku zaɓi mutumin", "Ku rubuta ku taɓa kibiyar aikawa"] },
            { title: "Lambobin da ba ku sani ba", bullets: ["Ku bar su su tafi voicemail", "Kada ku taɓa ba mai kira code daga tes"] }
          ],
          tryIt: "Ku ajiye lambar wani a iyali ko aboki ɗaya. Ku kira shi ta taɓa sunansa, sannan ku tura masa gajeren saƙo: \"Ina koyon amfani da wayata!\"",
          youCanNow: "ajiye lambar mutum, kiran mutum ta sunansa da tura saƙon tes.",
          quickCheck: [
            { objective: "O3", q: "Wace manhaja ce take tura saƙon tes?", options: ["Messages", "Camera", "Settings", "Photos"], answer: 0, why: "Manhajar Messages ce take tura saƙon tes." },
            { objective: "O3", q: "Lambar da ba ku sani ba ta kira ku. Me za ku yi?", options: ["Ku amsa ku ba da bayanan bankinku", "Ku sake kira nan take ku karanta duk wani code", "Ku bar ta ta tafi voicemail; mai kira na gaske zai bar saƙo", "Ku kashe wayarku har mako ɗaya"], answer: 2, why: "Barin kiran da ba ku sani ba ya tafi voicemail yana da aminci; masu kira na gaske suna barin saƙo." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sabawa da na'urarku",
        questions: [
          { objective: "O1", q: "Wane motsin yatsa ne yake ƙara girman hoto?", options: ["Taɓawa sau ɗaya", "Buɗe yatsu biyu", "Danna maɓallin ƙarar sauti", "Gogewa ƙasa"], answer: 1, why: "Buɗe yatsu biyu yana ƙara girma." },
          { objective: "O1", q: "Ta yaya ake yawan komawa allon gida?", options: ["Kashe waya", "Girgiza waya", "Gogewa sama daga ƙasa ko danna maɓallin gida", "Buɗe kyamara"], answer: 2, why: "Gogewa sama daga ƙasa ko danna maɓallin gida yana mayar da ku allon gida." },
          { objective: "O2", q: "Rubutun wayarku ya yi ƙanƙanta. A ina za ku gyara shi?", options: ["Settings, a ƙarƙashin Display ko Accessibility", "Manhajar Camera", "Manhajar Phone", "Saƙon tes"], answer: 0, why: "Girman rubutu yana cikin Settings a ƙarƙashin Display ko Accessibility." },
          { objective: "O3", q: "Me yasa za ku ajiye lambar mutum a Contacts?", options: ["Yana sa waya ta yi sauri", "Yana cajin batir", "Yana ɓoye lambarsa", "Don ku iya kira ko tura tes ta taɓa sunansa"], answer: 3, why: "Contact yana ba ku damar kaiwa ga mutum ta sunansa." },
          { objective: "O3", q: "Wani ya kira ya ce ku karanta masa code da aka turo muku ta tes yanzu. Me za ku yi?", options: ["Ku karanta masa", "Ku tura masa ta tes", "Kada ku bayar da shi, ku katse wayar", "Ku saka shi a intanet"], answer: 2, why: "Wannan code yana kare asusunku; kamfanoni na gaske ba sa neman sa." }
        ]
      }
    },
    {
      name: "Babi na 2: Hotuna, manhajoji da kiyaye na'urarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ɗaukar hoto da aika shi",
          minutes: 5,
          goal: "Ɗaukar hoto ku tura shi ga wani a saƙon tes.",
          text: [
            "Ku buɗe manhajar Camera, ku nuna ta ga abin da kuke so, ku taɓa babban maɓalli mai zagaye. Ku riƙe na'urar ba tare da motsi ba. Ku taɓa abin da kuke ɗauka a kan allo don ya fito sarai.",
            "Ana ajiye hotunanku a manhajar Photos ko Gallery. Don tura ɗaya, ku buɗe shi, ku taɓa maɓallin Share (raba; sau da yawa akwati ne mai kibiya, ko ɗigo uku da layuka suka haɗa), ku zaɓi Messages ko imel, sannan mutumin.",
            "Ku yi tunani kafin ku raba. Kada ku tura hoton katin shaidarku, katin banki, tikiti mai barcode, ko wani abu na sirri ga mutanen da ba ku sani ba."
          ],
          steps: ["Ku buɗe manhajar Camera.", "Ku nuna, ku riƙe ba motsi, ku taɓa abin da kuke ɗauka don ya fito sarai.", "Ku taɓa babban maɓalli mai zagaye.", "Ku buɗe Photos ko Gallery ku taɓa hoton.", "Ku taɓa Share, ku zaɓi Messages, ku zaɓi mutumin ku aika."],
          words: [["Gallery ko Photos", "manhajar da ake ajiye hotunanku a cikinta."], ["Maɓallin Share (raba)", "maɓallin da ke tura hoto ko fayil ga wani mutum ko wata manhaja."]],
          slides: [
            { title: "Ɗaukar hoto", bullets: ["Ku buɗe manhajar Camera", "Ku taɓa abin da kuke ɗauka don ya fito sarai", "Ku taɓa babban maɓalli mai zagaye"] },
            { title: "Tura hoto", bullets: ["Ku buɗe Photos ko Gallery", "Ku taɓa Share", "Ku zaɓi Messages da mutumin"] },
            { title: "Ku yi tunani kafin ku raba", bullets: ["Babu hoton katin shaida ko katin banki", "Babu takardun sirri ga baƙi"] }
          ],
          tryIt: "Ku ɗauki hoton wani abu mai kyau kusa da ku: shuka, abinci ko wani wuri. Ku tura shi a saƙon tes ga mutumin da kuka ajiye a Darasi na 3.",
          youCanNow: "ɗaukar hoto mai sarari da tura shi ga wani ta saƙon tes.",
          quickCheck: [
            { objective: "O4", q: "Me maɓallin Share yake ba ku damar yi da hoto?", options: ["Goge shi", "Ƙara girmansa", "Sake ɗaukarsa", "Tura shi ta tes ko imel"], answer: 3, why: "Share yana ba ku damar zaɓar Messages ko imel da mutumin da za ku tura wa hoton." },
            { objective: "O4", q: "Hotunanku suna ta fitowa ba sarai ba. Me za ku yi?", options: ["Ku girgiza waya yayin ɗauka", "Ku riƙe ba motsi ku taɓa abin da kuke ɗauka a allo kafin ku ɗauka", "Ku rage hasken allo", "Ku ɗauka daga nesa sosai"], answer: 1, why: "Riƙewa ba motsi da taɓa abin da kuke ɗauka suna sa hoton ya fito sarai." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Saka manhajoji lafiya",
          minutes: 5,
          goal: "Nemo manhaja kyauta ku saka ta daga shagon manhajoji na hukuma.",
          text: [
            "Manhajoji (apps) suna ƙara sababbin abubuwan da na'urarku za ta iya yi: taswira, yanayi, kiran bidiyo, bankinku, kantin maganinku. Ku samo su daga shagon hukuma kaɗai: Google Play Store a Android, ko App Store a iPhone da iPad.",
            "Ku nemi manhajar da sunanta. Kafin ku saka, ku duba sunan kamfanin da ya yi ta (developer), yawan sharhi (reviews), da maki (rating). Manhajoji na bogi suna kwaikwayon sunayen gaske, don haka ku tabbata daga ainihin kamfanin take.",
            "Idan manhaja ta nemi izinin amfani da wurin da kuke (location), kyamara, lambobin mutane ko makirufo, ku tambayi kanku ko tana buƙatarsa da gaske. Manhajar fitila ba ta buƙatar lambobin mutanenku. Kuna iya ƙi, kuma ku canja shi daga baya a Settings."
          ],
          steps: ["Ku buɗe Play Store (Android) ko App Store (Apple).", "Ku taɓa Search (bincike) ku rubuta sunan manhajar.", "Ku duba sunan wanda ya yi ta, maki da yawan sharhi.", "Ku taɓa Install ko Get.", "Idan an nemi izini, ku bayar da abin da ya dace kaɗai."],
          words: [["Manhaja (app)", "shiri a wayarku ko tablet da ke yin wani irin aiki ɗaya."], ["Developer (wanda ya yi manhaja)", "kamfani ko mutumin da ya yi manhajar."], ["Permission (izini)", "yardarku cewa manhaja ta yi amfani da wani abu kamar kyamararku ko wurin da kuke."]],
          slides: [
            { title: "Shagunan hukuma kaɗai", bullets: ["Android: Google Play Store", "iPhone da iPad: App Store"] },
            { title: "Kafin ku saka", bullets: ["Ku duba cewa wanda ya yi ta ainihin kamfani ne", "Ku duba maki da yawan sharhi", "Manhajoji na bogi suna kwaikwayon sunayen gaske"] },
            { title: "Izini (permissions)", bullets: ["Manhajar tana buƙatarsa da gaske?", "Fitila ba ta buƙatar lambobin mutanenku", "Kuna iya canja shi daga baya a Settings"] }
          ],
          tryIt: "Ku buɗe shagon manhajoji na hukuma ku saka manhaja ɗaya kyauta mai amfani gare ku, misali ta yanayi, ta kantin maganinku ko ta bas. Ku fara duba sunan wanda ya yi ta.",
          youCanNow: "nemo manhaja, duba ta, saka ta daga shagon hukuma, da yanke wane izini za ku bayar.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za ku duba sunan wanda ya yi manhaja kafin ku saka ta?", options: ["Don nemo farashin manhajar a shago", "Don canja girman rubutun waya", "Manhajoji na bogi suna kwaikwayon sunayen gaske, don haka ku tabbata daga ainihin kamfanin take", "Don ganin wanda ya kira ku"], answer: 2, why: "Manhajoji na bogi suna kwaikwayon sunayen manhajoji na gaske, don haka sunan wanda ya yi ta yana nuna ko ta gaske ce." },
            { objective: "O5", q: "Wata manhajar wasa tana neman izinin amfani da makirufo da lambobin mutanenku. Me za ku yi?", options: ["Ku ƙi sai dai idan tana buƙatarsu da gaske; kuna iya canjawa daga baya a Settings", "Ku yarda da komai koyaushe", "Ku goge lambobin mutanenku", "Ku ba ta kalmar sirrinku"], answer: 0, why: "Ku bayar da izinin da manhaja take buƙata da gaske kaɗai; kuna iya canja su daga baya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ajiye na'urarku a kulle, sabuntacciya da caji",
          minutes: 5,
          goal: "Kunna makullin allo da duba sabunta manhajar na'ura.",
          text: [
            "Makullin allo yana hana wasu amfani da wayarku idan ta ɓace ko an sace ta. Ku yi amfani da PIN (lambar sirri) mai lambobi aƙalla shida, ko hoton yatsa ko fuska. Kada ku yi amfani da 123456 ko ranar haihuwarku.",
            "Sabuntawa (updates) suna gyara matsalolin tsaro. Ku nemo su a Settings: a Android ku nemi Software update ko System update; a iPhone da iPad ku je General, sannan Software Update. Ku saka caji ku yi amfani da Wi-Fi lokacin da kuke sabuntawa.",
            "Idan wayarku ta ɓace, Find My Device na Android da Find My na Apple suna iya nuna ta a taswira ko su kulle ta. Ku kunna su yanzu, tun tana hannunku."
          ],
          steps: ["Ku buɗe Settings ku bincika \"screen lock\" ko \"passcode\".", "Ku saka PIN mai lambobi aƙalla shida, ko hoton yatsa ko fuska.", "Ku bincika \"software update\" a Settings ku saka duk wani sabuntawa.", "Ku bincika \"Find My\" a Settings ku tabbata yana kunne.", "Ku yi cajin na'urarku kowane dare."],
          words: [["PIN", "lambar sirri da ke buɗe na'urarku."], ["Software update (sabunta manhajar na'ura)", "gyara da ingantawa kyauta daga kamfanin da ya yi na'urar."], ["Find My Device / Find My", "kayan aikin Android da Apple da ke taimaka muku nemo na'urar da ta ɓace."], ["Wi-Fi", "intanet mara waya a gida, ɗakin karatu ko wani wuri."]],
          slides: [
            { title: "Ku kulle allonku", bullets: ["PIN mai lambobi shida ko fiye", "Ko hoton yatsa ko fuska", "Ba 123456 ko ranar haihuwarku ba"] },
            { title: "Ku sabunta na'urarku", bullets: ["Sabuntawa suna gyara matsalolin tsaro", "Settings, sannan Software update", "Ku saka caji ku yi amfani da Wi-Fi"] },
            { title: "Idan ta ɓace", bullets: ["Android: Find My Device", "Apple: Find My", "Ku kunna shi yanzu"] }
          ],
          tryIt: "Atisayen aikin ƙarshe: ku duba cewa makullin allonku yana kunne, ku bincika \"software update\" a Settings ku ga ko akwai sabuntawa da ke jira, ku kunna Find My Device ko Find My. Sannan ku yi aikin ƙarshe: kira, tura sabon hoto ta tes, da saka manhaja ɗaya mai amfani.",
          youCanNow: "ajiye na'urarku a kulle, sabuntacciya, kuma mai yiwuwar samuwa idan ta ɓace.",
          quickCheck: [
            { objective: "O6", q: "Wanne a cikin waɗannan makullin allo ne mai rauni?", options: ["Hoton yatsanku", "Fuskarku", "PIN mai lambobi shida da ke da wuyar hasashe", "123456"], answer: 3, why: "123456 ko ranar haihuwarku suna da sauƙin hasashe." },
            { objective: "O6", q: "Kuna son ku iya nemo wayarku idan ta ɓace. Me za ku yi yanzu?", options: ["Ku jira har ta ɓace, sannan ku nemi saiti", "Ku kunna Find My Device (Android) ko Find My (Apple)", "Ku rubuta PIN ɗinku a bayan waya", "Ku kashe makullin allo"], answer: 1, why: "Dole a kunna waɗannan kayan aiki tun wayar tana hannunku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Hotuna, manhajoji da kiyaye na'urarku",
        questions: [
          { objective: "O4", q: "A ina ake ajiye hotunan da kuka ɗauka?", options: ["A manhajar Phone", "A Photos ko Gallery", "A Settings", "A shagon manhajoji"], answer: 1, why: "Manhajar Photos ko Gallery ce take riƙe hotunanku." },
          { objective: "O5", q: "A ina ne wuri mai aminci don samun manhajoji a iPhone?", options: ["Hanyar haɗi (link) a tes daga baƙo", "Kowane shafin intanet", "Tallar da ke tasowa (pop-up)", "App Store"], answer: 3, why: "Ku saka manhajoji daga shagon hukuma kaɗai." },
          { objective: "O5", q: "Manhajar fitila tana neman ganin lambobin mutanenku. Mene ne zaɓi mafi kyau?", options: ["Ku ƙi; ba ta buƙatarsu", "Ku yarda da komai", "Ku ba ta kalmar sirrinku", "Ku goge lambobin mutanenku"], answer: 0, why: "Ku bayar da izinin da manhaja take buƙata da gaske kaɗai." },
          { objective: "O6", q: "Wane makullin allo ne ya fi ƙarfi?", options: ["Babu makulli", "123456", "Ranar haihuwarku", "PIN mai lambobi shida da ba shi da sauƙin hasashe"], answer: 3, why: "PIN da ba a bayyane yake ba ya fi wuyar hasashe." },
          { objective: "O6", q: "Me yasa za ku saka sabunta manhajar na'ura?", options: ["Suna goge hotunanku", "Suna gyara matsalolin tsaro", "Suna cin kuɗi", "Suna kashe waya har abada"], answer: 1, why: "Sabuntawa suna gyara matsalolin da masu laifi za su iya amfani da su." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Amfani da Wayar Zamani da Tablet",
    questions: [
      { objective: "O1", q: "Wane kamfani ne yake yin iPhone?", options: ["Samsung", "Google", "Apple", "Motorola"], answer: 2, why: "Apple ne yake yin iPhone da iPad." },
      { objective: "O1", q: "Me taɓawa (tap) take yi?", options: ["Tana buɗe wani abu", "Tana kashe waya", "Tana goge manhaja", "Tana yin kira da kanta"], answer: 0, why: "Taɓawa da sauri tana buɗe manhaja ko zaɓar wani abu." },
      { objective: "O1", q: "Don gangarawa ƙasan shafi, kuna:", options: ["Matsewa", "Danna maɓallin kunnawa", "Gogewa sama ko ƙasa", "Girgiza na'urar"], answer: 2, why: "Gogewa tana motsa shafin." },
      { objective: "O1", q: "Ƙananan hotunan da ke allon gida ana kiransu:", options: ["Contacts", "Icons (alamomi)", "Saƙonni", "Sabuntawa"], answer: 1, why: "Icons su ne hotunan da kuke taɓawa don buɗe manhajoji." },
      { objective: "O2", q: "Wace manhaja ce alamarta giya kuma tana ba ku damar canja girman rubutu?", options: ["Camera", "Messages", "Settings", "Photos"], answer: 2, why: "Settings ita ce inda kuke canja yadda na'urar take aiki." },
      { objective: "O2", q: "Ba ku iya samun wani saiti ba. Me ya fi sauri?", options: ["Sayen sabuwar waya", "Amfani da akwatin bincike a saman Settings", "Kashe ta ku sake kunnawa", "Buɗe kyamara"], answer: 1, why: "Binciken Settings yana nemo abubuwa ta sunansu." },
      { objective: "O2", q: "A ina za ku iya canja hasken allo da sauri a yawancin na'urori?", options: ["Gogewa ƙasa daga saman allo", "Manhajar Phone", "Shagon manhajoji", "Lambobin mutanenku"], answer: 0, why: "Sarrafawa da sauri a sama sun haɗa da hasken allo." },
      { objective: "O3", q: "Don kiran mutum ta taɓa sunansa, da farko ku:", options: ["Saka sabuwar manhaja", "Ajiye shi a matsayin contact", "Ɗauki hotonsa", "Sabunta waya"], answer: 1, why: "Contact da aka ajiye yana haɗa suna da lamba." },
      { objective: "O3", q: "Wace manhaja ce take tura saƙon tes?", options: ["Camera", "Settings", "Weather", "Messages"], answer: 3, why: "Messages tana turawa da karɓar saƙon tes." },
      { objective: "O3", q: "Lambar da ba ku sani ba ta kira. Zaɓi mai aminci shi ne:", options: ["Bari ta tafi voicemail", "Ba su code daga saƙonninku", "Faɗa musu PIN ɗinku", "Tura musu hoton katin bankinku"], answer: 0, why: "Mai kira na gaske zai bar saƙon murya." },
      { objective: "O4", q: "Don hoto ya fito sarai, kuna:", options: ["Girgiza waya", "Taɓa abin da kuke ɗauka a allo kafin ku ɗauka", "Kashe allo", "Haɗa yatsu biyu"], answer: 1, why: "Taɓa abin da kuke ɗauka yana gaya wa kyamara inda za ta mayar da hankali." },
      { objective: "O4", q: "Don tura hoto, ku buɗe shi ku taɓa:", options: ["Delete (goge)", "Ƙarar sauti", "Settings", "Share"], answer: 3, why: "Share yana tura hoton ga mutum ko manhaja." },
      { objective: "O4", q: "Wane hoto ne kada ku taɓa tura wa baƙo?", options: ["Faɗuwar rana", "Fure", "Katin shaidarku ko katin bankinku", "Abincin rana"], answer: 2, why: "Ana iya amfani da katin shaida da katin banki don yi muku sata." },
      { objective: "O5", q: "Shagon manhajoji na hukuma a Android shi ne:", options: ["Hanyar haɗi a tes", "Tallar da ke tasowa", "Kowane shafin intanet", "Google Play Store"], answer: 3, why: "Google Play shi ne shagon hukuma na Android." },
      { objective: "O5", q: "Kafin ku saka manhaja, ku duba:", options: ["Babu komai", "Launin alamarta kawai", "Wanda ya yi ta, maki da sharhi", "Kuɗin da ke bankinku"], answer: 2, why: "Manhajoji na bogi suna kwaikwayon sunaye, don haka ku duba wanda ya yi ta." },
      { objective: "O5", q: "Izini (permission) shi ne:", options: ["Wani irin hoto", "Yardarku cewa manhaja ta yi amfani da abubuwa kamar kyamara ko wurin da kuke", "Kuɗin waya", "Wani irin saƙon tes"], answer: 1, why: "Manhajoji suna neman izini don amfani da sassan na'urarku." },
      { objective: "O6", q: "Makullin allo yana taimakawa saboda:", options: ["Yana rage kuɗin kira", "Yana ɗaukar hotuna", "Yana ƙara girman rubutu", "Yana hana wasu amfani da wayarku idan ta ɓace"], answer: 3, why: "Makulli yana ajiye bayananku a sirri." },
      { objective: "O6", q: "A iPhone, Software Update yana ƙarƙashin:", options: ["Camera", "Photos", "Messages", "Settings, sannan General"], answer: 3, why: "Sabuntawar iPhone suna cikin Settings, General, Software Update." },
      { objective: "O6", q: "Idan kuna saka babban sabuntawa, ya fi kyau ku:", options: ["Kashe Wi-Fi", "Bar batir ya yi ƙasa", "Yi amfani da Wi-Fi ku saka caji", "Yi shi yayin kira"], answer: 2, why: "Wi-Fi da caji suna hana sabuntawar tsayawa a tsakiya." },
      { objective: "O6", q: "Find My Device (Android) da Find My (Apple) suna taimaka muku:", options: ["Nemo tsarin waya mai arha", "Nemo sababbin abokai", "Nemo manhajoji kyauta", "Nemo na'urar da ta ɓace a taswira"], answer: 3, why: "Suna nuna, kullewa ko ƙarar da na'urar da ta ɓace." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      4,
      6,
      7,
      9,
      11,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kira",
        objective: "O3",
        notYet: "Ba a yi kira ko kiran bidiyo ba, ko mai koyo ya buƙaci taimako don nemo mutumin.",
        meets: "Yana kira ko kiran bidiyo ga lambar mutum da aka ajiye ba tare da taimako ba.",
        exceeds: "Yana kuma fara ajiye sabuwar lamba da suna da lamba."
      },
      {
        name: "Saƙon tes da hoto",
        objective: "O4",
        notYet: "Ba a tura saƙon ko hoton ba, ko hoton yana nuna bayanan sirri.",
        meets: "Yana ɗaukar hoto mai sarari ya tura shi a saƙon tes ga wanda ya sani.",
        exceeds: "Yana amfani da maɓallin Share daga Photos ko Gallery ya ƙara gajeren saƙo."
      },
      {
        name: "Saka manhaja",
        objective: "O5",
        notYet: "Ba a saka manhaja ba, ko ta fito daga wajen shagon hukuma.",
        meets: "An saka manhaja ɗaya kyauta daga shagon hukuma bayan an duba wanda ya yi ta da sharhi.",
        exceeds: "Yana kuma ƙin izinin da manhajar ba ta buƙata."
      },
      {
        name: "Makulli da sabuntawa",
        objective: "O6",
        notYet: "Babu makullin allo, ko makulli mai sauƙi kamar 123456.",
        meets: "Makullin allo mai ƙarfi yana kunne kuma manhajar na'ura sabuntacciya ce.",
        exceeds: "Find My Device ko Find My ma yana kunne."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na aikin ƙarshe",
      "Masu koyo da suka ce suna amfani da wayarsu ko tablet da kansu don kira, saƙon tes da hotuna bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun saka manhaja mai amfani, kamar ta kantin magani, banki ko kiran bidiyo, lafiya daga shagon hukuma",
      "Masu koyo da suka ci gaba zuwa wani kwas, kamar \"Tushen Amfani da Intanet\" ko Email and Online Communication (Imel da Sadarwa ta Intanet)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko tablet ta mai koyo mai caji (Android, iPhone ko iPad)",
      "Wi-Fi don saka manhajoji da sabuntawa",
      "Lambar aboki ko wani a iyali don kira da tura tes, ko ta abokin aji",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ku raba masu koyo bisa irin na'urarsu (Android ko Apple) don matakan da ke allo su yi daidai da abin da suke gani.",
      "Ku bar masu koyo su yi kowace taɓawa da kansu; idan dole ne ku nuna wani abu, ku yi amfani da na'urarku.",
      "Wasu manhajoji suna neman kalmar sirrin asusu lokacin saka su; ku bar mai koyo ya rubuta ta a ɓoye, kuma kada ku taɓa nema ko rubuta PIN ko kalmar sirrinsu.",
      "Ku sa masu koyo su kira juna su tura wa juna tes a aji, don kada kowa ya bayar da lambarsa ta sirri da ba ya son bayarwa.",
      "Ku zo da caja, ku shirya sabuntawa a ƙarshen zama, domin suna iya ɗaukar lokaci mai tsawo."
    ]
  }
};
