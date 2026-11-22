"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-ai-learning-hobbies.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "seniors-ai-learning-hobbies-ha",
  lang: "ha",
  translationOf: "seniors-ai-learning-hobbies",
  category: "Seniors and Technology",
  name: "AI don Koyo da Abubuwan Sha'awa",
  skills: "Neman AI ya koya muku mataki-mataki, Gwada kanku da AI, Yin tsarin koyo, Nemo bidiyoyin koyarwa masu kyau, Amfani da AI don aikin sha'awa",
  outcome: "amfani da mataimakin AI don yin tsarin koyo mai sauƙi na makonni biyu kan wani abin sha'awa ko batun da kuke so, ku bar shi ya koya muku kuma ya gwada ku mataki-mataki, sannan ku kammala zaman atisaye na farko.",
  about: [
    "Ba a taɓa makara wajen koyo ba. Wannan kwas ɗin na tsofaffi ne da ke son fara sabon abin sha'awa, komawa ga wani tsoho, ko koyon wani abu da suka daɗe suna son sani: noman lambu, tarihin iyali, zane, sabon harshe, tsuntsaye, waƙa ko tarihi.",
    "Za ku yi amfani da mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini a matsayin malami mai haƙuri da ba ya gajiya da maimaitawa. Za ku nemi ya koya muku ƙanana-ƙanana matakai, ya gwada ku, ya tsara atisayenku, kuma ya taimaka da aikin sha'awa na gaske.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku yi aikin \"Gwada yanzu\" kowane lokaci; waɗannan ayyuka suna gina tsarin koyonku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku zaɓi abin sha'awa ko batu ɗaya. Ku nemi mataimakin AI ya yi muku tsarin koyo na makonni biyu da gajerun zama na kowace rana, ku nemi ya koya muku darasi na farko mataki-mataki, ku bar shi ya gwada ku da tambayoyi uku, sannan ku rubuta abu ɗaya da za ku yi atisaye a kai gobe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffi, sau da yawa waɗanda suka yi ritaya, masu ƙarin lokaci kuma suna son koyon sabon abu ko komawa ga abin sha'awa: noman lambu, zane, waƙa, sana'ar hannu, kallon tsuntsaye ko tarihin iyali.",
    startingPoint: "Suna iya amfani da waya, tablet ko kwamfuta don kira, imel da wasu shafukan intanet. Da yawa ba su taɓa amfani da mataimakin AI a matsayin malami ba, ko neman bidiyoyin koyarwa a YouTube ba.",
    gap: "Koyon sabon abin sha'awa yana sa ƙwaƙwalwa ta yi aiki kuma yana haɗa mutane, amma azuzuwa suna iya yin tsada, nisa, ko sauri sosai. Mataimakin AI zai iya koyarwa yadda mai koyo yake so, ya gwada shi, kuma ya yi masa tsari, matuƙar mai koyo yana tabbatar da bayanan tsaro kuma ba ya amincewa da shi kan bayanan tarihin iyali.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli, da manyan matakai masu sauƙi",
      "Na'urori: waya, tablet ko kwamfuta mai intanet; babban allo yana taimakawa wajen kallon bidiyo",
      "Lokaci: kusan minti 5 a kowane darasi, da gajerun zaman atisaye na kowace rana",
      "Ƙarfi da lafiya sun bambanta; dole tsare-tsare su ba da damar gajerun zama da ranakun hutu",
      "Sirri: kada a saka bayanan sirri na 'yan uwa masu rai a cikin AI"
    ],
    prerequisites: "Kwas ɗin \"AI for Seniors: Using AI Assistants\" (AI ga Tsofaffi: Amfani da Mataimakan AI) yana da amfani a fara da shi, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da mataimakin AI kyauta", action: "neman ya koya muku wani batu mataki-mataki, kuna faɗin abin da kuka riga kuka sani da neman ya jira ku ce \"na gaba\"", standard: "kuna samun ƙananan matakai da za ku iya bi a hankalinku" },
    { id: "O2", condition: "Bayan gajeren darasi", action: "neman mataimakin ya gwada ku da tambaya ɗaya a lokaci ɗaya, kuma ya sake bayanin duk abin da kuka kasa", standard: "kuna amsa aƙalla 2 cikin tambayoyi 3 da kalmominku" },
    { id: "O3", condition: "Idan kuna da abin sha'awa ko batun da kuke so", action: "neman tsarin koyo na makonni biyu da ya dace da lokacinku, kayanku da ƙarfinku", standard: "da ƙaramin buri ɗaya a kowace rana, a rubuce a kalanda ko takarda" },
    { id: "O4", condition: "Idan akwai wata fasaha da ta fi sauƙin koyo ta hanyar kallo", action: "nemo bidiyon koyarwa na masu farawa a YouTube, kuna tsallake talla da hanyoyin haɗi na yin rajista", standard: "kuna zaɓar bidiyo mai sarari na masu farawa" },
    { id: "O5", condition: "Idan kuna da aikin sha'awa kamar lambu ko littafin hotuna", action: "neman jerin kayayyaki da matakai masu sauƙi, da tabbatar da bayanan tsaro a lakabin kaya ko wata majiya amintacciya", standard: "kafin ku saya ko ku yi amfani da duk wani abu mai haɗari" },
    { id: "O6", condition: "Idan kuna da wani tunanin iyali", action: "rubuta gajeren labarin iyali da muryarku tare da taimakon AI, kuna neman bayanan tarihi a shafuka amintattu maimakon AI", standard: "ba tare da bayanan sirri na 'yan uwa masu rai ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: AI a matsayin malaminku mai haƙuri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Neman AI ya koya muku, mataki ɗaya a lokaci ɗaya",
          minutes: 5,
          goal: "Ku nemi mataimakin AI ya koya muku wani batu a ƙanana, masu sarari matakai, yadda kuke so.",
          text: [
            "Mataimakin AI zai iya zama kamar malami mai haƙuri. Zai yi bayanin abu sau nawa kuke buƙata, ta hanyoyi daban-daban, kuma ba ya gajiya da tambayoyi.",
            "Ku faɗa masa abin da kuke son koyo, abin da kuka riga kuka sani, da yadda kuke son koyo. Misali: \"Ina son fara kallon tsuntsaye a bayan gidana. Ni sabon shiga ne gaba ɗaya. Ka koya mini abubuwa uku na farko da ya kamata in sani, ɗaya bayan ɗaya, da gajerun jimloli. Ka jira in ce 'na gaba' kafin ka ci gaba.\"",
            "Neman ya jira \"na gaba\" yana sa kowane mataki ya zama ƙarami, don ku gwada shi ko ku yi tunani a kai kafin ku ci gaba."
          ],
          steps: ["Ku faɗi abin da kuke son koyo.", "Ku faɗi abin da kuka riga kuka sani, ko da babu komai.", "Ku nemi gajerun matakai masu sauƙi.", "Ku nemi ya jira ku ce \"na gaba\"."],
          words: [["Malami mai koyarwa ɗaya-ɗaya (tutor)", "malamin da ke taimakon mutum ɗaya ya koya yadda yake so, a hankalinsa."]],
          slides: [
            { title: "Malami mai haƙuri", bullets: ["Yana bayani sau nawa kuke buƙata", "Ba ya gajiya da tambayoyi"] },
            { title: "Ku faɗa masa", bullets: ["Abin da kuke son koyo", "Abin da kuka riga kuka sani", "Yadda kuke son koyo"] },
            { title: "Ku sa matakai su zama ƙanana", bullets: ["\"Ka koya mini abu ɗaya a lokaci ɗaya.\"", "\"Ka jira in ce 'na gaba'.\""] }
          ],
          tryIt: "Ku zaɓi wani batu da kuke son sani. Ku nemi mataimakin AI ya koya muku abubuwa uku na farko da ya kamata ku sani, ɗaya bayan ɗaya, yana jiran ku ce \"na gaba\". Ku bi dukkan uku ɗin.",
          youCanNow: "neman mataimakin AI ya koya muku wani batu a ƙananan matakai, yadda kuke so.",
          quickCheck: [
            { objective: "O1", q: "Me yasa mataimakin AI zai iya zama malami mai kyau?", options: ["Ya san komai game da ku", "Yana sake bayani sau nawa da ta hanyoyi nawa kuke buƙata, ba tare da gajiya ba", "Yana ba da maki kamar makaranta", "Yana aiki ga yara kawai"], answer: 1, why: "Darasin ya ce mataimakin kamar malami ne mai haƙuri da ba ya gajiya da tambayoyi." },
            { objective: "O1", q: "Kuna son koyon busa harmonica (sarewar baki) kuma ba ku taɓa gwadawa ba. Me za ku faɗa wa mataimakin?", options: ["\"Harmonica.\"", "\"Ka faɗa mini komai game da waƙa.\"", "\"Ni sabon shiga ne gaba ɗaya. Ka koya mini abubuwa uku na farko, ɗaya bayan ɗaya. Ka jira in ce na gaba.\"", "\"Ka kunna mini waƙa.\""], answer: 2, why: "Faɗin abin da kuka sani da neman ƙananan matakai masu jiran \"na gaba\" yana sa koyo ya tafi yadda kuke so." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gwada kanku don ku ƙara tunawa",
          minutes: 4,
          goal: "Ku nemi mataimakin AI ya gwada ku kan abin da kuka gama koyo.",
          text: [
            "Muna ƙara tunawa idan muka yi ƙoƙarin tuno wani abu, ba wai kawai sake karanta shi ba. Ɗan gajeren gwaji yana ɗaya daga cikin hanyoyi mafi kyau na sa sabon ilimi ya zauna.",
            "Bayan darasi, ku tambaya: \"Ka gwada ni da tambayoyi uku masu sauƙi game da abin da ka gama koya mini. Ka yi tambaya ɗaya a lokaci ɗaya, ka faɗa mini ko na yi daidai.\" Ku amsa da kalmominku. Idan kun kasa ɗaya, ku nemi ya sake bayani ta wata hanya daban.",
            "Ku sake yin wannan gwajin washegari. Ɗan atisaye da aka raba a kwanaki da yawa ya fi yawan atisaye a lokaci ɗaya."
          ],
          steps: ["Ku gama gajeren darasi.", "Ku nemi tambayoyi uku masu sauƙi, ɗaya bayan ɗaya.", "Ku amsa da kalmominku.", "Ku nemi sabon bayani kan duk abin da kuka kasa.", "Ku maimaita gwajin gobe."],
          words: [["Tuno (recall)", "dawo da wani abu a zuciya daga ƙwaƙwalwa."]],
          slides: [
            { title: "Gwaje-gwaje suna taimaka muku tunawa", bullets: ["Tuno abu ya fi sake karantawa", "Gajere kuma akai-akai shi ne mafi kyau"] },
            { title: "Ku nemi gwaji", bullets: ["\"Ka gwada ni da tambayoyi uku masu sauƙi.\"", "\"Ɗaya bayan ɗaya; ka faɗa mini ko na yi daidai.\""] },
            { title: "Kun kasa ɗaya?", bullets: ["Ku nemi bayani ta wata hanya daban", "Ku sake gwadawa gobe"] }
          ],
          tryIt: "Ku nemi mataimakin ya gwada ku da tambayoyi uku game da abin da ya koya muku a Darasi na 1. Ku amsa su ɗaya bayan ɗaya.",
          youCanNow: "amfani da AI don gwada kanku da ƙara tuna abin da kuke koyo.",
          quickCheck: [
            { objective: "O2", q: "Me yasa ɗan gajeren gwaji yake taimaka muku koyo?", options: ["Ƙoƙarin tuno abu yana taimaka muku tuna shi", "Yana tsawaita darasin", "Yana ba ku maki don ajiya", "Yana maye gurbin atisaye"], answer: 0, why: "Muna ƙara tunawa idan muka yi ƙoƙarin tuno abu, ba wai sake karanta shi kawai ba." },
            { objective: "O2", q: "Kun kasa wata tambaya game da kukan tsuntsaye. Me za ku yi?", options: ["Ku daina koyon wannan batu", "Ku tsallake ta ku ci gaba", "Ku yi fushi da mataimakin", "Ku nemi ya sake bayanin wannan sashe ta wata hanya daban"], answer: 3, why: "Ku nemi sabon bayani kan duk abin da kuka kasa, sannan ku sake gwadawa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin tsarin koyo mai sauƙi",
          minutes: 5,
          goal: "Ku nemi mataimakin AI ya yi muku gajeren tsarin koyo mai yiwuwa.",
          text: [
            "Tsari yana mayar da \"wata rana\" zuwa \"yau\". Ku nemi mataimakin ya yi muku tsari na makonni biyu da gajerun zama da suka dace da ƙarfinku da jadawalinku.",
            "Misali: \"Ka yi mini tsari na makonni biyu don koyon zanen ruwan launi (watercolor) na farko. Zan iya yin atisaye minti 20 a rana, kwana biyar a mako. Ina da ƙaramin akwatin launi da takarda. Ka sa kowace rana ta zama ƙaramin buri ɗaya.\"",
            "Ku duba tsarin ku canja duk abin da bai dace ba. Ku nemi ya sauƙaƙa ranakun, ya gajarta su, ko ya ƙara ranakun hutu. Sannan ku rubuta tsarin a kalandarku ko a takarda kusa da kujerarku."
          ],
          steps: ["Ku faɗi abin da kuke son koyo da tsawon lokacin.", "Ku faɗi minti nawa da kwana nawa za ku iya yin atisaye.", "Ku faɗi kayan da kuke da su tuni.", "Ku nemi ƙaramin buri ɗaya a kowace rana.", "Ku gyara tsarin, sannan ku rubuta shi."],
          words: [["Tsarin koyo", "jerin abin da za a yi atisaye a kai kowace rana don cimma wani buri."]],
          slides: [
            { title: "Daga wata rana zuwa yau", bullets: ["Gajeren tsari mai yiwuwa", "Ƙaramin buri ɗaya kowace rana"] },
            { title: "Ku faɗa wa mataimakin", bullets: ["Me za ku koya, da tsawon lokacin", "Minti da kwanakin da za ku iya atisaye", "Kayan da kuke da su tuni"] },
            { title: "Ku sa ya dace da ku", bullets: ["Ku nemi ranaku masu sauƙi ko gajeru", "Ku ƙara ranakun hutu", "Ku rubuta shi a kalandarku"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya yi muku tsarin koyo na makonni biyu kan batunku, da ƙaramin buri ɗaya a rana da lokacin da za ku iya bayarwa. Ku yi canji ɗaya don ya fi dacewa da ku, sannan ku rubuta ranaku uku na farko.",
          youCanNow: "yin tsarin koyo mai yiwuwa tare da AI wanda ya dace da lokacinku da ƙarfinku.",
          quickCheck: [
            { objective: "O3", q: "Me ya kamata tsarin koyo mai kyau ya kasance da shi kowace rana?", options: ["Atisaye na awanni da yawa", "Ƙaramin buri ɗaya da ya dace da lokacinku", "Jarabawa", "Sabon abin sha'awa"], answer: 1, why: "Ƙaramin buri ɗaya a kowace rana yana mayar da \"wata rana\" zuwa \"yau\"." },
            { objective: "O3", q: "Tsarin da AI ya ba ku yana gajiyar da ku sosai. Me za ku yi?", options: ["Ku bar abin sha'awar", "Ku bi shi duk da haka", "Ku nemi ya gajarta ranakun ko ya ƙara ranakun hutu", "Ku fara sabon abin sha'awa"], answer: 2, why: "Kuna iya neman mataimakin ya canja tsarin don ya dace da ƙarfinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: AI a matsayin malaminku mai haƙuri",
        questions: [
          { objective: "O1", q: "Me yasa za ku nemi mataimakin ya jira ku ce \"na gaba\"?", options: ["Don ya daina aiki", "Don ya yi sauri", "Don kowane mataki ya zama ƙarami ku yi tunani a kai", "Dole ne don shiga asusu"], answer: 2, why: "Ƙananan matakai a hankalinku sun fi sauƙin koyo." },
          { objective: "O1", q: "Me ya kamata ku faɗa wa mataimakin idan kuna son koyon wani abu?", options: ["Abin da kuke son koyo, abin da kuka sani, da yadda kuke son koyo", "Lambar bankinku", "Kalma ɗaya kawai", "Kalmar sirrinku"], answer: 0, why: "Waɗannan bayanai suna taimaka masa ya koyar a matakin da ya dace." },
          { objective: "O2", q: "Wanne ne ke taimaka muku ƙara tunawa?", options: ["Karanta shafi ɗaya sau goma", "Koyon komai a rana ɗaya", "Rashin yin atisaye kwata-kwata", "Amsa ɗan gajeren gwaji"], answer: 3, why: "Tuno amsoshi yana sa ilimi ya zauna." },
          { objective: "O2", q: "Kun kasa wata tambayar gwaji. Mene ne mataki mai kyau na gaba?", options: ["Ku bar abin sha'awar", "Ku nemi ya sake bayani ta wata hanya daban", "Ku goge manhajar", "Ku tsallake batun har abada"], answer: 1, why: "Sabon bayani yakan sa abin ya fahimtu." },
          { objective: "O3", q: "Tsarin koyo mai kyau yana da:", options: ["Aikin awanni goma a rana", "Ƙaramin buri ɗaya a kowace rana da ya dace da lokacinku", "Babu ranaku kwata-kwata", "Manyan buri kawai"], answer: 1, why: "Ƙananan buri masu yiwuwa suna sa ku ci gaba." }
        ]
      }
    },
    {
      name: "Babi na 2: Jin daɗin abubuwan sha'awarku da AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nemo bidiyoyin koyarwa masu kyau",
          minutes: 5,
          goal: "Ku nemo bidiyon koyarwa mai amfani kuma ku auna ko yana da kyau.",
          text: [
            "Wasu fasahohi sun fi sauƙin koyo ta hanyar kallo: ɗinkin saƙa (knitting), datse fure, ko kiɗan guitar. YouTube yana da bidiyoyin koyarwa kyauta kan kusan kowane abin sha'awa.",
            "Ku fara neman mataimakin AI ya ba ku kalmomin bincike masu kyau: \"Me zan nema a YouTube don koyon ɗinkin saƙa na farko?\" Sannan ku buɗe YouTube, ku taɓa akwatin bincike (gilashin ƙara girma), ku rubuta waɗannan kalmomi. Ku nemi bidiyoyin da aka yi don masu farawa, masu taken da ke da sarari da sharhi masu amfani.",
            "Kuna iya dakatarwa, komawa baya ku sake kallo sau nawa kuke so. Ku yi hankali da talla da hanyoyin haɗi a bayanin bidiyo da ke neman ku saya ko ku yi rajista; ba ku buƙatar su don koyo."
          ],
          steps: ["Ku nemi AI ya ba ku kalmomin bincike masu kyau.", "Ku buɗe YouTube ku taɓa gilashin ƙara girma.", "Ku rubuta kalmomin ku nemi bidiyoyin masu farawa.", "Ku dakatar ku sake kallo sau nawa kuke buƙata.", "Ku tsallake talla da hanyoyin haɗi masu neman ku saya ko ku yi rajista."],
          words: [["YouTube", "shafin intanet da manhaja kyauta mai bidiyoyi kan kusan kowane batu."], ["Akwatin bincike", "inda kuke rubuta kalmomi don nemo wani abu; sau da yawa ana nuna shi da gilashin ƙara girma."]],
          slides: [
            { title: "Koyo ta hanyar kallo", bullets: ["Ɗinkin saƙa, noman lambu, waƙa da ƙari", "Kyauta a YouTube"] },
            { title: "Nemo bidiyo mai kyau", bullets: ["Ku nemi AI ya ba ku kalmomin bincike", "Ku taɓa gilashin ƙara girma ku rubuta", "Ku zaɓi bidiyoyin masu farawa"] },
            { title: "Ku kalla yadda kuke so", bullets: ["Ku dakatar ku sake kallo", "Ku tsallake talla da hanyoyin \"saya yanzu\""] }
          ],
          tryIt: "Ku tambayi mataimakin AI me za ku nema a YouTube don rana ta farko ta tsarin koyonku. Ku nema, ku kalli bidiyo ɗaya na masu farawa, kuma ku dakatar da shi aƙalla sau ɗaya don gwada wani mataki.",
          youCanNow: "nemo bidiyo mai amfani na masu farawa da koyo daga gare shi yadda kuke so.",
          quickCheck: [
            { objective: "O4", q: "Me gilashin ƙara girma a YouTube yake yi?", options: ["Yana ƙara girman bidiyon", "Yana buɗe akwatin bincike", "Yana ƙara sauti", "Yana sayen bidiyon"], answer: 1, why: "Gilashin ƙara girma maɓallin bincike ne inda kuke rubuta kalmominku." },
            { objective: "O4", q: "Wani bidiyon ɗinkin saƙa yana nuna hanyar haɗi ta \"saya cikakken kwas\". Me za ku yi?", options: ["Ku tsallake ta; ba ku buƙatar ta don koyo", "Ku saya nan take", "Ku saka lambar katinku don ganin ƙari", "Ku daina kallon bidiyoyi"], answer: 0, why: "Talla da hanyoyin haɗi masu neman ku saya ko ku yi rajista ba dole ba ne don koyo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Amfani da AI don aikin sha'awa",
          minutes: 5,
          goal: "Ku yi amfani da mataimakin AI don tsara aikin sha'awa na gaske daga farko zuwa ƙarshe.",
          text: [
            "AI zai iya taimaka muku tsara aiki: ƙaramin lambun kayan lambu, littafin hotuna don ranar haihuwar jika, littafin girke-girken iyali, ko gidan tsuntsaye.",
            "Ku bayyana aikin ku nemi jerin kayayyaki da matakai: \"Ka taimake ni in yi ƙaramin littafin hotuna na shekarar farko ta jikata. Ka jera kayayyakin da matakan. Ka sa ya zama mai sauƙi.\" Don lambu, ku ƙara yankinku da lokacin shekara: \"Ina zaune a Ohio kuma ina da baranda mai rana. Waɗanne kayan lambu uku ne masu sauƙin shukawa a tukwane a wannan lokacin bazara (spring)?\"",
            "Don duk abin da ya shafi tsaro, kamar kayan aiki, sinadarai ko tsire-tsire da ka iya cutar da dabbobin gida, ku duba lakabin kayan ko wata majiya amintacciya kamar shagon kayan lambu na yankinku ko ɗakin karatu."
          ],
          steps: ["Ku bayyana aikin da wanda aka yi shi dominsa.", "Ku ƙara yankinku, lokacin shekara ko girman wurinku idan yana da muhimmanci.", "Ku nemi jerin kayayyaki da matakai masu sauƙi.", "Ku tabbatar da bayanan tsaro a lakabin kaya ko wata majiya amintacciya."],
          words: [["Jerin kayayyaki", "abubuwan da kuke buƙatar tattarawa kafin ku fara wani aiki."]],
          slides: [
            { title: "Ku tsara aiki na gaske", bullets: ["Lambu, littafin hotuna, littafin girke-girke, gidan tsuntsaye"] },
            { title: "Ku nemi", bullets: ["Jerin kayayyaki", "Matakai masu sauƙi", "Shawarwarin da suka dace da yankinku da lokacin shekara"] },
            { title: "Ku zauna lafiya", bullets: ["Ku duba lakabin kayan aiki da sinadarai", "Ku tambayi shagon kayan lambu ko ɗakin karatu"] }
          ],
          tryIt: "Ku zaɓi ƙaramin aiki da ya shafi batunku. Ku nemi mataimakin AI ya ba ku jerin kayayyaki da matakai masu sauƙi, sannan ku zagaye kayan da kuke da su tuni.",
          youCanNow: "tsara aikin sha'awa tare da AI, daga kayayyaki zuwa matakai.",
          quickCheck: [
            { objective: "O5", q: "Mene ne jerin kayayyaki?", options: ["Jerin shaguna kusa da ku", "Rasidin sayayya", "Jerin abokan da za su iya taimakawa", "Abubuwan da kuke buƙata kafin ku fara wani aiki"], answer: 3, why: "Jerin kayayyaki yana nuna abin da kuke buƙata kafin ku fara." },
            { objective: "O5", q: "AI ya ba da shawarar wata shuka don barandarku, kuma kuna da kyanwa. Me za ku yi?", options: ["Ku saya nan take", "Ku tambayi AI ko ya tabbata", "Ku tambayi shagon kayan lambu ko ku duba lakabin shukar ko ba ta da haɗari ga dabbobin gida", "Ku yi watsi da tambayar"], answer: 2, why: "Ana tabbatar da bayanan tsaro, kamar tsire-tsiren da ka iya cutar da dabbobin gida, a lakabi ko wata majiya amintacciya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Binciken tarihin iyali da labarai",
          minutes: 5,
          goal: "Ku yi amfani da AI don taimaka muku rubuta labarin iyali don rabawa.",
          text: [
            "Tsofaffi da yawa suna son binciken tarihin iyali da miƙa labarai ga jikoki. AI zai iya taimaka muku mayar da tunaninku zuwa gajeren labari da wasu za su ji daɗinsa.",
            "Ku faɗa masa wani tunani da kalmominku: \"Mahaifina yana da gidan burodi a Chicago a shekarun 1950. Ina taimaka masa ranakun Asabar. Ka taimake ni in rubuta wannan a matsayin labari mai shafi ɗaya ga jikokina, da muryata.\" Sannan ku yi canje-canje don ya yi kama da ku.",
            "AI bai san ainihin tarihin iyalinku ba, don haka kada ku nemi ya cike bayanai game da kakanninku; yana iya ƙirƙirar su. Don bayanan tarihi, shafuka kamar FamilySearch (kyauta) ko teburin taimakon tarihin iyali (genealogy) na ɗakin karatu na yankinku sun fi kyau a duba. Kada ku saka bayanan sirri na 'yan uwa masu rai a cikin AI."
          ],
          steps: ["Ku faɗa wa AI wani tunani da kalmominku.", "Ku nemi labari mai shafi ɗaya da muryarku.", "Ku canja duk abin da bai yi kama da ku ba.", "Ku nemi bayanan tarihi a shafuka amintattu, ba a AI ba.", "Ku raba labarin da iyali."],
          words: [["Tarihin zuriya (genealogy)", "nazarin tarihin iyali da kakanni."], ["Kakan-kakanni", "ɗan uwa daga zamanin da, kamar kakan kakanku."]],
          slides: [
            { title: "Ku mayar da tunani zuwa labarai", bullets: ["Ku faɗa wa AI tunanin da kalmominku", "Ku nemi gajeren labari da muryarku"] },
            { title: "Bayanai daga takardun tarihi suke", bullets: ["AI yana iya ƙirƙirar bayanan iyali", "Ku gwada FamilySearch ko ɗakin karatunku"] },
            { title: "Ku raba shi", bullets: ["Kada ku saka bayanan sirri na 'yan uwa masu rai", "Ku karanta shi da babbar murya ga jikoki"] }
          ],
          tryIt: "Aikin ƙarshe: ku zaɓi abin sha'awa ko batu ɗaya, ku nemi mataimakin AI ya yi muku tsari na makonni biyu, ku bar shi ya koya muku darasi na farko mataki-mataki, ku bar shi ya gwada ku da tambayoyi uku, sannan ku rubuta abu ɗaya da za ku yi atisaye a kai gobe.",
          youCanNow: "amfani da AI don koyo, tsara ayyukan sha'awa da rubuta labaran iyali.",
          quickCheck: [
            { objective: "O6", q: "Mene ne tarihin zuriya (genealogy)?", options: ["Nazarin tarihin iyali", "Wani nau'in lambu", "Wani salon zane", "Manhajar bidiyo"], answer: 0, why: "Tarihin zuriya (genealogy) shi ne nazarin tarihin iyali." },
            { objective: "O6", q: "Kuna son sanin inda aka haifi kakar kakarku. A ina za ku duba?", options: ["Ku nemi AI ya cike shi", "Ku yi hasashe ku rubuta a labarin", "Ku saka bayanan 'yan uwanku a intanet", "FamilySearch ko teburin taimakon tarihin iyali na ɗakin karatunku"], answer: 3, why: "AI yana iya ƙirƙirar bayanan iyali; ainihin takardun tarihi suna a shafuka amintattu ko a ɗakin karatu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Jin daɗin abubuwan sha'awarku da AI",
        questions: [
          { objective: "O4", q: "Ta yaya AI zai taimaka muku nemo bidiyon koyarwa mai kyau?", options: ["Yana goge talla", "Yana ɗaukar bidiyon", "Yana biyan kuɗinsa", "Yana ba da shawarar kalmomin bincike masu kyau"], answer: 3, why: "Kalmomin bincike masu kyau suna kawo bidiyoyi mafi kyau." },
          { objective: "O4", q: "Wata hanyar haɗi a bayanin bidiyo tana cewa \"Saya cikakken kwas yanzu\". Kuna buƙatarta don koyo?", options: ["A'a, kuna iya tsallake ta", "Ee, koyaushe", "Ee, dole ne", "A ƙarshen mako kawai"], answer: 0, why: "Bidiyoyi kyauta suna koyar da abubuwa da yawa; ba dole ku saya ba." },
          { objective: "O5", q: "Don tsarin lambun kayan lambu, me ya kamata ku faɗa wa AI?", options: ["Kalmar sirrinku", "Lambar bankinku", "Yankinku, lokacin shekara da girman wurinku", "Babu komai"], answer: 2, why: "Yanki, lokacin shekara da girman wuri suna shafar abin da zai yi kyau." },
          { objective: "O5", q: "AI ya ba da shawarar wani maganin feshi na lambu. Ta yaya za ku tabbatar ba shi da haɗari?", options: ["Ku amince da AI", "Ku tambayi baƙo", "Ku ƙara feshi", "Ku karanta lakabin ko ku tambayi shagon kayan lambu"], answer: 3, why: "Bayanan tsaro ya kamata su fito daga lakabi ko majiyoyi amintattu." },
          { objective: "O6", q: "Me yasa ba za ku nemi AI ya ba ku bayanai game da kakannin kakanninku ba?", options: ["Yana da tsada", "Yana da jinkiri sosai", "Yana iya ƙirƙirar su", "Faransanci kawai yake magana"], answer: 2, why: "AI bai san tarihin iyalinku ba; takardun tarihi ne suka sani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Koyo da Abubuwan Sha'awa",
    questions: [
      { objective: "O1", q: "Mataimakin AI zai iya zama kamar:", options: ["Likitanku", "Malami mai haƙuri", "Bankinku", "Mai sayar da magani (pharmacist)"], answer: 1, why: "Yana bayanin abubuwa sau nawa kuke buƙata." },
      { objective: "O1", q: "Wace buƙata ce za ta fi koya muku?", options: ["\"Ni sabon shiga ne. Ka koya mini abubuwa uku game da tsuntsayen bayan gida, ɗaya bayan ɗaya.\"", "\"tsuntsaye\"", "\"koyarwa\"", "\"komai\""], answer: 0, why: "Tana faɗin batun, matakinku da saurin da kuke so." },
      { objective: "O1", q: "Faɗin \"ka jira in ce na gaba\" yana taimakawa ta hanyar:", options: ["Sa kowane mataki ya zama ƙarami", "Ƙara ƙarar sauti", "Kashe na'urar", "Rage kuɗi"], answer: 0, why: "Ƙananan matakai suna ba ku damar yin tunani kafin ku ci gaba." },
      { objective: "O1", q: "Malami mai koyarwa ɗaya-ɗaya (tutor) shi ne:", options: ["Wani nau'in waya", "Malamin da ke taimakon mutum ɗaya yadda yake so", "Ƙarshen adireshin shafi", "Bidiyo"], answer: 1, why: "Irin wannan malami yana koyar da mutum ɗaya a lokaci ɗaya." },
      { objective: "O2", q: "Wanne ne ke taimaka muku tuna sabon ilimi?", options: ["Koyon komai a dare ɗaya", "Rashin yin bita kwata-kwata", "Gwada kanku", "Tsallake atisaye"], answer: 2, why: "Tuno amsoshi yana ƙarfafa ƙwaƙwalwa." },
      { objective: "O2", q: "Ta yaya ya kamata AI ya gwada ku?", options: ["Ba tare da faɗin ko kun yi daidai ba", "Tambayoyi hamsin a lokaci ɗaya", "Tambayoyi masu wuya kawai", "Tambaya ɗaya a lokaci ɗaya, yana faɗin ko kun yi daidai"], answer: 3, why: "Ɗaya bayan ɗaya tare da faɗin sakamako shi ne mafi sauƙi." },
      { objective: "O2", q: "Atisaye ya fi aiki idan:", options: ["Sau ɗaya a shekara ne", "Duk a lokaci ɗaya ne", "Gajere ne kuma an raba shi a kwanaki da yawa", "Sai lokacin da kuka gaji kawai"], answer: 2, why: "Atisayen da aka raba yana taimakon ƙwaƙwalwa." },
      { objective: "O3", q: "Tsarin koyo mai kyau ya haɗa da:", options: ["Ƙaramin buri ɗaya kowace rana", "Babu buri", "Awanni na atisaye kowace rana", "Jarabawar ƙarshe kawai"], answer: 0, why: "Ƙananan buri na kowace rana suna yiwuwa." },
      { objective: "O3", q: "Idan tsarin ya yi muku wuya sosai, kuna iya:", options: ["Goge tsarin", "Dainawa", "Yin shi duka duk da haka", "Neman AI ya sauƙaƙa ranakun ko ya ƙara ranakun hutu"], answer: 3, why: "Ya kamata tsari ya dace da ku." },
      { objective: "O3", q: "Me ya kamata ku faɗa wa AI idan kuna neman tsari?", options: ["Kalmar sirrinku", "Minti da kwanakin da za ku iya yin atisaye", "Lambar bankinku", "Lambar Medicare ɗinku"], answer: 1, why: "Lokacin da kuke da shi yana tsara yadda tsarin zai kasance." },
      { objective: "O4", q: "Gilashin ƙara girma a YouTube shi ne:", options: ["Ƙarar sauti", "Maɓallin bincike", "Maɓallin kunnawa da kashewa", "Kyamara"], answer: 1, why: "Yana buɗe akwatin bincike." },
      { objective: "O4", q: "Idan kuna kallon bidiyon koyarwa, kuna iya:", options: ["Rashin komawa baya", "Kallo sau ɗaya kawai", "Rashin dakatar da shi", "Dakatarwa ku sake kallo sau nawa kuke so"], answer: 3, why: "Dakatarwa tana ba ku damar gwada kowane mataki." },
      { objective: "O4", q: "Tallace-tallacen da ke neman ku yi rajista ko ku saya:", options: ["Ba dole ba ne don koyo", "Dole ne", "Daga gwamnati suke", "Wani sashe ne na darasin"], answer: 0, why: "Kuna iya koyo ba tare da su ba." },
      { objective: "O5", q: "Don aikin sha'awa, AI zai iya ba ku:", options: ["Kuɗin da ke asusun bankinku", "Kayayyakin da kansu", "Jerin kayayyaki da matakai masu sauƙi", "Takardar likita"], answer: 2, why: "Zai iya tsarawa; ku ne kuke tattarawa da yin aikin." },
      { objective: "O5", q: "Jerin kayayyaki shi ne:", options: ["Lambar waya", "Rasidin cefane", "Kalmar sirri", "Abubuwan da kuke buƙata kafin ku fara"], answer: 3, why: "Yana jera abin da za ku tattara." },
      { objective: "O5", q: "Ya kamata a tabbatar da bayanan tsaro game da kayan aiki ko sinadarai:", options: ["Ba a taɓa ba", "Da AI kawai", "A lakabin kaya ko da wata majiya amintacciya", "Da baƙo"], answer: 2, why: "Lakabi da masana abin dogaro ne." },
      { objective: "O6", q: "Tarihin zuriya (genealogy) shi ne:", options: ["Wata shukar lambu", "Nazarin tarihin iyali", "Manhajar waya", "Wani nau'in fenti"], answer: 1, why: "Tarihin zuriya yana bin diddigin kakanni." },
      { objective: "O6", q: "AI zai iya taimaka muku da labarin iyali ta hanyar:", options: ["Mayar da tunaninku zuwa gajeren labari da muryarku", "Sanin ranakun haihuwar kakanninku", "Nemo adireshin 'yan uwanku", "Sa hannu a takardu"], answer: 0, why: "Yana tsara kalmominku; ku ne kuke ba da tunanin." },
      { objective: "O6", q: "A ina ya kamata ku nemi ainihin takardun tarihin iyali?", options: ["FamilySearch ko taimakon tarihin iyali na ɗakin karatunku", "A AI kawai", "Tallar da ke tasowa (pop-up)", "Jita-jitar kafofin sada zumunta"], answer: 0, why: "Takardun tarihi suna fitowa daga majiyoyi amintattu na takardu." },
      { objective: "O6", q: "Me ya kamata ku hana shiga AI idan kuna rubuta labaran iyali?", options: ["Launin da kuka fi so", "Bayanan sirri na 'yan uwa masu rai", "Sunan dabbar gida", "Lokacin shekara"], answer: 1, why: "Bayanan sirri na 'yan uwa masu rai sun cancanci kariya." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      4,
      7,
      10,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tsari na makonni biyu",
        objective: "O3",
        notYet: "Babu tsari, ko tsarin da bai dace da lokacinku ko kayanku ba.",
        meets: "Tsari na makonni biyu da gajerun zama na kowace rana da ƙaramin buri ɗaya kowace rana.",
        exceeds: "An gyara tsarin don ƙara ranakun hutu ko ranaku masu sauƙi, kuma an rubuta shi."
      },
      {
        name: "Darasi na farko mataki-mataki",
        objective: "O1",
        notYet: "An nemi komai a lokaci ɗaya.",
        meets: "An nemi mataimakin ya koyar da darasi na farko mataki-mataki yadda mai koyo yake so.",
        exceeds: "An faɗi abin da aka riga aka sani don matakan su fara a matakin da ya dace."
      },
      {
        name: "An gwada kai",
        objective: "O2",
        notYet: "An tsallake gwajin.",
        meets: "An amsa tambayoyin gwaji uku, ɗaya bayan ɗaya, da kalmomin mai koyo.",
        exceeds: "An nemi sabon bayani kan duk abin da aka kasa kuma an sake gwadawa."
      },
      {
        name: "Atisaye na gaba",
        objective: "O3",
        notYet: "Ba a rubuta komai don gobe ba.",
        meets: "An rubuta abu ɗaya da za a yi atisaye a kai gobe.",
        exceeds: "An zaɓi lokaci don shi kuma an saka shi a kalanda."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da har yanzu suke atisayen abin sha'awarsu a binciken biyo baya na kwanaki 30",
      "Masu koyo da suka raba wani aiki ko labarin iyali da iyalinsu ko wata ƙungiya",
      "Masu koyo da suka fara wani kwas na Seniors and Technology (Tsofaffi da Fasaha) cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani, tablet ko kwamfuta mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini) da YouTube",
      "Takarda da alƙalami, ko kalanda, don tsarin koyo",
      "Kusan minti 60 gaba ɗaya, a gajerun zama masu natsuwa: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi kowane mai koyo ya zaɓi abin sha'awar da yake so kafin zama na farko; yana ƙarfafa shi.",
      "Ku nuna YouTube a babban allo kuma ku nuna talla da hanyoyin haɗi na rajista kafin masu koyo su fara bincike da kansu.",
      "Ku tunatar da masu koyo su tabbatar da bayanan tsaro game da kayan aiki, sinadarai da tsire-tsire a lakabin kaya ko a shagon kayan lambu.",
      "Don labaran iyali, ku tunatar da masu koyo cewa AI yana iya ƙirƙirar bayanan iyali, kuma su kiyaye bayanan 'yan uwa masu rai a sirri.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
