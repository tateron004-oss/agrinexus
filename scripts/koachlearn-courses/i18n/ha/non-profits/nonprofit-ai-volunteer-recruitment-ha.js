"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-ai-volunteer-recruitment.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-ai-volunteer-recruitment-ha",
  lang: "ha",
  translationOf: "nonprofit-ai-volunteer-recruitment",
  category: "Non Profits",
  name: "Ɗaukar Masu Aikin Sa-kai da AI",
  skills: "Rubuta bayanin aikin sa-kai, Rubuta saƙonnin neman masu sa-kai, Gina fom ɗin rajista, Rubuta saƙonnin maraba da tunatarwa, Riƙe masu sa-kai su ci gaba da zuwa",
  outcome: "amfani da mataimakin AI kyauta don rubuta bayanin aikin sa-kai a sarari, saƙon neman masu sa-kai da saƙon maraba, kafa fom ɗin rajista mai sauƙi, da tsara yadda za ku gode wa masu sa-kai da kuka ɗauka ku riƙe su.",
  about: [
    "Wannan kwas ɗin na ma'aikatan ƙungiyoyin sa-kai da na addini ne, da masu shirya masu aikin sa-kai, waɗanda ke buƙatar ƙarin masu taimako don shirye-shirye kamar rumbun abinci (food pantry), koyar da yara, taruka, tsaftace unguwa da jagoranci (mentoring).",
    "Za ku yi amfani da mataimakin AI (kamar ChatGPT, Microsoft Copilot ko Google Gemini) don rubuta kalmomin, da kayan aiki kyauta kamar Google Forms ko Microsoft Forms don karɓar rajista. Ku ne masu iko kan kowane saƙo, kuma ba za ku saka bayanan sirri na masu sa-kai a cikin AI ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku haɗa cikakken kayan ɗaukar masu sa-kai don wani aikin sa-kai na gaske: bayanin aikin, saƙo ɗaya a kafofin sada zumunta, imel ɗaya ga magoya baya, fom ɗin rajista mai 'yan tambayoyi masu sauƙi, saƙon maraba da tunatarwa ta mako ɗaya, da ɗan gajeren shirin godiya. Ku yi amfani da AI don rubuta daftari, sannan ku gyara kowane yanki da salon maganarku, ku kuma tabbatar da duk ranaku da bayanai.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ma'aikatan ƙungiyoyin sa-kai da na addini, da masu shirya masu aikin sa-kai, waɗanda ke buƙatar ƙarin masu taimako don shirye-shirye kamar rumbun abinci, koyar da yara, taruka, tsaftace unguwa da jagoranci.",
    startingPoint: "Suna ɗaukar masu sa-kai ta hanyar roƙon 'yan mutane ɗaya kawai, sau da yawa da saƙo na gama-gari kamar \"muna buƙatar taimako\". Wasu suna amfani da imel da kafofin sada zumunta; kaɗan ne suka taɓa rubuta bayanin aiki, gina fom ɗin rajista ko tsara yadda za su riƙe masu sa-kai.",
    gap: "Roƙo marar sarari yana samun 'yan amsoshi kaɗan, kuma sababbin masu sa-kai da suka ji sun ɓace ba sa dawowa. Masu shirya suna buƙatar kayan aiki a sarari da za su iya maimaitawa don ɗauka, maraba da riƙe masu sa-kai, suna amfani da AI don rubuta daftari da sauri yayin da suke kare bayanan masu sa-kai.",
    constraints: [
      "Lokaci: masu shirya suna da ayyuka da yawa, don haka kowane darasi kusan minti 5 ne",
      "Sirri: babu lambar Social Security ko ranar haihuwa a fom mai sauƙi; bayanan masu sa-kai suna zama a kayan aikin fom, ba a cikin AI ba",
      "Binciken baya (background check) don ayyukan da suka shafi yara ko mutane masu rauni yana bin hanyar da ƙungiyar ta amince da ita",
      "Labarai suna buƙatar izini, ko kuma dole su zama ƙirƙirarru",
      "Kayan aiki kyauta kamar Google Forms ko Microsoft Forms"
    ],
    prerequisites: "Kwas ɗin \"Introduction to AI for Nonprofits\" (Gabatarwa ga AI don Ƙungiyoyin Sa-kai), ko ɗan ƙwarewa wajen amfani da mataimakin AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku bayanan wani aikin sa-kai ɗaya", action: "rubuta bayanin aiki da ke faɗin me za a yi, yaushe, a ina, me yasa, waɗanne bincike ake buƙata da wanda za a tuntuɓa", standard: "an tabbatar da kowane bayani kuma an ƙara bayanan tuntuɓarku" },
    { id: "O2", condition: "Ta amfani da bayanin aikinku", action: "rubuta gajeren saƙo a kafofin sada zumunta da imel ga magoya baya da taimakon AI", standard: "kowanne da kira-zuwa-aiki ɗaya, kuma labaran ƙirƙirarru ne ko waɗanda aka amince da su kaɗai" },
    { id: "O3", condition: "Don al'ummarku", action: "jera sababbin wuraren samun masu sa-kai da hanyoyin sauƙaƙa shiga aikin", standard: "an tabbatar cewa kowace ƙungiya ko shafi na gaske ne kafin a tuntuɓe shi" },
    { id: "O4", condition: "Ta amfani da Google Forms ko Microsoft Forms", action: "ƙirƙirar gajeren fom ɗin rajista da ke tambayar abin da kuke buƙata kawai", standard: "ba a tambayi bayanan sirri ba, kuma ku da kanku kun gwada fom ɗin" },
    { id: "O5", condition: "Don sabon mai sa-kai", action: "rubuta saƙon maraba da tunatarwa masu madadi (placeholders)", standard: "da rana, lokaci, wuri, abin da za a kawo da mutumin da za a tuntuɓa" },
    { id: "O6", condition: "Don masu sa-kai da kuka ɗauka", action: "tsara yadda za ku gode musu, ku nuna musu sakamako, ku nemi ra'ayoyinsu", standard: "da ranaku a kalandarku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Samun masu sa-kai da suka dace",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rubuta bayanin aikin sa-kai a sarari",
          minutes: 5,
          goal: "Rubuta bayanin aiki da ke faɗa wa mai sa-kai daidai me zai yi, yaushe, a ina da me yasa.",
          text: [
            "Mutane suna cewa \"eh\" idan sun san daidai abin da suke shiga. Roƙo marar sarari kamar \"Muna buƙatar taimako!\" yana samun 'yan amsoshi kaɗan. Aiki mai sarari yana samun fiye.",
            "Bayanin aiki mai kyau yana amsa: Me zan yi? Yaushe, kuma na tsawon wane lokaci? A ina? Waɗanne ƙwarewa ko bincike ake buƙata (misali binciken baya don aiki da yara)? Me yasa yake da muhimmanci? Wa zan tuntuɓa?",
            "Ku ba AI bayanan, ku nemi ya rubuta su. Misali: \"Ka rubuta gajeren bayanin aikin sa-kai don mai taimako a rumbun abinci ranar Asabar, ƙarfe 9 na safe zuwa 12 na rana sau biyu a wata, ɗaga kaya har zuwa fam 20, ba a buƙatar ƙwarewa. Mai daɗi kuma a sarari, ƙasa da kalmomi 150.\""
          ],
          steps: ["Ku rubuta ayyukan, jadawalin, wurin da duk wani abin da ake buƙata.", "Ku rubuta jimla ɗaya kan dalilin da yasa aikin yake da muhimmanci.", "Ku nemi AI ya mayar da bayananku gajeren bayanin aiki.", "Ku tabbatar da kowane bayani, ku ƙara bayanan tuntuɓarku da kanku."],
          words: [["Bayanin aiki (role description)", "gajeren rubutu game da aikin sa-kai: ayyuka, lokaci, wuri, abubuwan da ake buƙata da manufa."], ["Binciken baya (background check)", "duba bayanan tarihin mutum, wanda sau da yawa ake buƙata don aiki da yara ko mutane masu rauni."]],
          slides: [
            { title: "Roƙo mai sarari yana samun \"eh\" da yawa", bullets: ["\"Muna buƙatar taimako!\" ba shi da sarari", "Ku faɗi daidai me za a yi, yaushe da a ina"] },
            { title: "Bayanin aiki yana amsa", bullets: ["Me zan yi? Yaushe kuma na tsawon wane lokaci?", "A ina? Waɗanne ƙwarewa ko bincike?", "Me yasa yake da muhimmanci? Wa zan tuntuɓa?"] },
            { title: "Ku bar AI ya rubuta shi", bullets: ["Ku ba shi bayananku", "Ku nemi mai daɗi, a sarari, gajere", "Ku tabbatar da kowane bayani da kanku"] }
          ],
          tryIt: "Ku zaɓi wani aikin sa-kai na gaske da ƙungiyarku ke buƙata. Ku rubuta bayanansa, ku nemi AI ya rubuta bayanin aiki ƙasa da kalmomi 150, sannan ku gyara duk abin da ba daidai ba.",
          youCanNow: "rubuta bayanin aikin sa-kai a sarari da taimakon AI.",
          quickCheck: [
            { objective: "O1", q: "Me yasa bayanin aiki mai sarari yake samun amsoshi da yawa?", options: ["Mutane suna cewa \"eh\" idan sun san daidai abin da suke shiga", "Ya fi tsawo", "Yana da alamun motsin rai (!) da yawa", "Yana ɓoye lokacin da ake buƙata"], answer: 0, why: "Roƙo marar sarari yana samun 'yan amsoshi kaɗan; aiki mai sarari yana samun fiye." },
            { objective: "O1", q: "Aikin koyar da yara na ƙungiyarku yana da alaƙa da yara. Me dole bayanin ya ambata?", options: ["Babu wani ƙari", "Cewa ana buƙatar binciken baya", "Sunayen yaran", "Makin yaran a makaranta"], answer: 1, why: "Bayanin aiki yana faɗin binciken da ake buƙata, kamar binciken baya don aiki da yara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta saƙonni da imel na neman masu sa-kai",
          minutes: 5,
          goal: "Mayar da bayanin aiki ɗaya zuwa saƙo a kafofin sada zumunta da imel ga magoya baya.",
          text: [
            "Wurare daban-daban suna buƙatar tsawo daban-daban. Saƙo a kafofin sada zumunta gajere ne kuma mai daɗi, da mataki ɗaya a sarari. Imel ga magoya baya zai iya ba da ɗan labari da ƙarin bayani.",
            "Ku nemi AI ya rubuta duka biyun daga bayanin aiki ɗaya: \"Ta amfani da wannan bayanin aiki, ka rubuta saƙon Facebook mai kalmomi 50 da kira-zuwa-aiki ɗaya, da imel mai kalmomi 150 ga magoya bayanmu da ya fara da ɗan gajeren labari game da wani iyali da muke yi wa hidima.\" Ku yi amfani da labarin ƙirƙira ko wanda aka amince da shi; kada ku taɓa amfani da bayanan sirri na mutum na gaske ba tare da izini ba.",
            "Ku nemi nau'o'i da dama ku zaɓi wanda ya fi kama da salon maganarku. Ku ƙara ainihin hanyar haɗin rajista (link) da kanku."
          ],
          steps: ["Ku liƙa bayanin aikinku a cikin AI.", "Ku nemi gajeren saƙon kafofin sada zumunta da kira-zuwa-aiki ɗaya.", "Ku nemi imel mafi tsawo ga magoya baya.", "Ku nemi nau'i biyu na kowanne, ku zaɓi ɗaya.", "Ku ƙara ainihin hanyar haɗin rajista, ku tabbatar da bayanan."],
          words: [["Kira-zuwa-aiki (call to action)", "abu ɗaya da kuke neman mai karatu ya yi, kamar \"Ku yi rajista a nan\"."], ["Magoya baya (supporters)", "mutanen da suka riga sun san ƙungiyarku kuma suke kula da ita: masu ba da gudummawa, mambobi, tsofaffin masu sa-kai."]],
          slides: [
            { title: "Ku dace saƙon da wurin", bullets: ["Saƙon kafofin sada zumunta: gajere, mataki ɗaya", "Imel: ɗan labari da ƙarin bayani"] },
            { title: "Ku nemi AI ya rubuta duka biyun", bullets: ["Ku liƙa bayanin aikin", "Ku nemi saƙo da imel", "Ku nemi nau'i biyu na kowanne"] },
            { title: "Kafin ku wallafa", bullets: ["Ku zaɓi wanda ya fi kama da salon maganarku", "Ku ƙara ainihin hanyar haɗin rajista", "Babu labaran sirri ba tare da izini ba"] }
          ],
          tryIt: "Ku yi amfani da bayanin aikinku daga Darasi na 1 don samun saƙon kafofin sada zumunta mai kalmomi 50 da imel mai kalmomi 150 ga magoya baya. Ku zaɓi mafi kyawun nau'in kowanne ku gyara shi.",
          youCanNow: "ƙirƙirar saƙonni da imel na neman masu sa-kai don masu karatu daban-daban daga bayanin aiki ɗaya.",
          quickCheck: [
            { objective: "O2", q: "Wanne ne ya fi tsawo kuma zai iya ba da ɗan labari?", options: ["Saƙo a kafofin sada zumunta", "Tunatarwa ta tes", "Imel ga magoya baya", "Tambaya a fom"], answer: 2, why: "Saƙon kafofin sada zumunta gajere ne; imel ga magoya baya zai iya ba da labari da ƙarin bayani." },
            { objective: "O2", q: "Saƙon da AI ya rubuta ba shi da hanyar haɗin rajista. Me za ku yi?", options: ["Ku wallafa shi haka", "Ku nemi AI ya ƙirƙiri hanyar haɗi", "Ku cire kira-zuwa-aikin", "Ku ƙara ainihin hanyar haɗin rajista da kanku"], answer: 3, why: "Ku ƙara ainihin hanyar haɗin rajista da kanku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kai wa sababbin nau'o'in masu sa-kai",
          minutes: 5,
          goal: "Yi amfani da AI don tunanin inda za a sami masu sa-kai da yadda za a sauƙaƙa shiga ayyuka.",
          text: [
            "Ƙungiyoyi da yawa suna roƙon 'yan mutane ɗaya kawai a kai a kai. AI yana da kyau wajen tunanin sababbin wuraren nema: kwalejoji da makarantun sakandare na yankin da ɗalibansu ke buƙatar awannin hidima, kamfanonin da ke da ranakun sa-kai, al'ummomin addini, cibiyoyin tsofaffi, da shafukan intanet da ke jera ayyukan sa-kai.",
            "Ku tambayi AI: \"Ka jera wurare 10 a birni mai matsakaicin girma don ɗaukar masu sa-kai na rumbun abinci a ƙarshen mako, da jimla ɗaya da za a faɗa wa kowanne.\" Ku tabbatar cewa duk ƙungiya ko shafin da ya ambata na gaske ne kafin ku tuntuɓe shi.",
            "Ku kuma tambaya yadda za a sauƙaƙa wa mutane su ce \"eh\": gajerun lokutan aiki, ayyukan da iyali za su iya yi tare, ayyuka daga gida kamar yin kira ko rubuta katuna, da takardu a harsunan da al'ummarku ke magana."
          ],
          steps: ["Ku nemi AI ya jera wuraren samun masu sa-kai.", "Ku nemi jimla ɗaya da za a faɗa wa kowanne.", "Ku tabbatar cewa kowane wuri ko shafi na gaske ne.", "Ku tambaya yadda za a sauƙaƙa shiga aikin.", "Ku zaɓi manyan wurare uku da za ku gwada."],
          words: [["Awannin hidima (service hours)", "awannin aikin sa-kai da makarantu ko shirye-shirye ke neman ɗalibai su cika."], ["Aiki daga gida (remote task)", "aikin sa-kai da ake yi daga gida, kamar kira, katuna ko taimako ta intanet."]],
          slides: [
            { title: "Ku duba bayan 'yan mutane ɗaya", bullets: ["Makarantu da kwalejoji", "Kamfanonin da ke da ranakun sa-kai", "Al'ummomin addini da cibiyoyin tsofaffi"] },
            { title: "Ku yi tunani tare da AI", bullets: ["Ku nemi wurare 10 da abin da za a faɗa", "Ku tabbatar cewa kowane wuri na gaske ne"] },
            { title: "Ku sauƙaƙa cewa \"eh\"", bullets: ["Gajerun lokutan aiki", "Ayyukan iyali da ayyuka daga gida", "Harsunan al'ummarku"] }
          ],
          tryIt: "Ku nemi AI ya jera wurare 10 don ɗaukar masu sa-kai don aikinku a yankinku. Ku tabbatar da su, sannan ku zaɓi manyan uku ku rubuta wanda za ku tuntuɓa.",
          youCanNow: "samun sababbin hanyoyin masu sa-kai da sauƙaƙa shiga ayyuka.",
          quickCheck: [
            { objective: "O3", q: "Wanne ne aiki daga gida da ke sauƙaƙa shiga aikin?", options: ["Yin kira ko rubuta katuna", "Ɗaga kwalaye ranar Asabar", "Tuƙa motar kai kaya", "Gudanar da dandalin taro"], answer: 0, why: "Ayyuka daga gida kamar yin kira ko rubuta katuna sun fi sauƙi a ce musu \"eh\"." },
            { objective: "O3", q: "Iyalai da yawa da kuke yi wa hidima suna magana da Spanish, kuma kuna son su ma su yi aikin sa-kai. Me zai taimaka?", options: ["Ku wallafa da Turanci kawai", "Ku ba da takardu a harsunan da al'ummarku ke magana", "Ku nemi AI ya zaɓi masu sa-kai", "Ku tilasta dogayen lokutan aiki"], answer: 1, why: "Takardu a harsunan al'ummarku suna sauƙaƙa shiga ayyuka." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Samun masu sa-kai da suka dace",
        questions: [
          { objective: "O1", q: "Wane roƙon masu sa-kai ne zai fi yiwuwa ya sami amsoshi mafi yawa?", options: ["\"Muna buƙatar taimako!\"", "\"Ana neman masu sa-kai, bayani daga baya.\"", "\"Mai taimako a rumbun abinci, Asabar ƙarfe 9 zuwa 12 na rana, sau biyu a wata, ba a buƙatar ƙwarewa.\"", "\"Akwai kowa?\""], answer: 2, why: "Aiki mai sarari yana faɗin me za a yi, yaushe da a ina." },
          { objective: "O2", q: "Mene ne kira-zuwa-aiki?", options: ["Abu ɗaya da kuke neman mai karatu ya yi", "Kiran waya ga mai sa-kai", "Wani nau'in AI", "Taron kwamitin gudanarwa"], answer: 0, why: "Yana faɗa wa mai karatu mataki na gaba, kamar \"Ku yi rajista a nan\"." },
          { objective: "O3", q: "AI ya ba da shawarar wata ƙungiyar sa-kai ta yankinku da ba ku taɓa ji ba. Me za ku yi?", options: ["Ku tuntuɓe su nan take da jerin masu sa-kainku", "Ku saka ta a shafinku na intanet", "Ku ɗauka cewa na gaske ce", "Ku tabbatar cewa na gaske ce kafin ku tuntuɓe ta"], answer: 3, why: "AI yana iya ƙirƙirar sunaye; ku fara tabbatarwa." },
          { objective: "O3", q: "Wace ce hanyar sauƙaƙa shiga aiki?", options: ["Dogayen lokutan aiki kawai", "Ba da gajerun lokutan aiki da ayyuka daga gida", "Neman ƙwarewa ta shekaru goma", "Karɓar waɗanda suka riga suke aikin sa-kai kawai"], answer: 1, why: "Ayyuka masu sassauci suna bar mutane da yawa su ce \"eh\"." },
          { objective: "O2", q: "Kuna son labari a imel ɗinku ga magoya baya. Wanne ne ba shi da haɗari?", options: ["Sunan wani abokin hulɗa na gaske da halin da yake ciki ba tare da izini ba", "Labarin ƙirƙira ko wanda aka amince da shi", "Adireshin gidan wani mai sa-kai", "Yawan gudummawar wani mai bayarwa"], answer: 1, why: "Kada ku taɓa raba bayanan sirri na mutane na gaske ba tare da izini ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Rajista, maraba da riƙe masu sa-kai",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gina fom ɗin rajista mai sauƙi",
          minutes: 5,
          goal: "Ƙirƙiri gajeren fom ɗin rajista na intanet, ku tambayi abin da kuke buƙata kawai.",
          text: [
            "Kayan aikin fom kyauta kamar Google Forms ko Microsoft Forms yana bar mutane su yi rajista ta hanyar haɗi (link). Amsoshin suna shiga cikin takardar lissafi (spreadsheet) da ku ke iko da ita.",
            "Ku tambayi abin da kuke buƙata kawai: suna, imel ko lambar waya, waɗanne lokutan aiki za su iya, da duk abin da dole ku sani (kamar harsunan da suke magana). Kada ku tambayi lambar Social Security, ranar haihuwa ko wasu bayanan sirri a fom mai sauƙi. Idan ana buƙatar binciken baya, ku yi amfani da hanyar da ƙungiyarku ta amince da ita.",
            "AI zai iya ba da shawarar tambayoyi da kalmomi: \"Ka ba da shawarar gajerun tambayoyi 6 na fom ɗin rajista don aikin sa-kai a rumbun abinci.\" Ku ne kuke gina fom ɗin da kanku, kuma amsoshin suna zama a kayan aikin fom ɗinku, ba a cikin AI ba."
          ],
          steps: ["Ku buɗe Google Forms ko Microsoft Forms ku fara fom marar komai.", "Ku nemi AI ya ba da shawarar gajerun tambayoyi.", "Ku bar abin da kuke buƙata da gaske kawai.", "Ku saka zaɓuɓɓukan lokutan aiki a matsayin akwatunan zaɓi (checkboxes).", "Ku gwada fom ɗin da kanku, sannan ku kwafi hanyar haɗin rabawa."],
          words: [["Fom (form)", "jerin tambayoyi na intanet da mutane ke cikewa; ana ajiye muku amsoshin."], ["Bayanan sirri", "bayanan da za su iya cutar da mutum idan aka raba su, kamar lambobin shaida ko bayanan lafiya."]],
          slides: [
            { title: "Kayan aikin fom kyauta", bullets: ["Google Forms ko Microsoft Forms", "Mutane suna rajista ta hanyar haɗi", "Amsoshi suna shiga takardar lissafi da ku ke iko da ita"] },
            { title: "Ku tambayi abin da kuke buƙata kawai", bullets: ["Suna da yadda za a tuntuɓe su", "Waɗanne lokutan aiki za su iya", "Babu lambobin shaida ko ranar haihuwa"] },
            { title: "Aikin AI", bullets: ["Ba da shawarar tambayoyi da kalmomi", "Ku ne kuke gina fom ɗin", "Amsoshi ba sa taɓa shiga AI"] }
          ],
          tryIt: "Ku gina fom ɗin rajista don aikinku mai tambayoyi shida ko ƙasa da haka. Ku cike shi da kanku don gwadawa, sannan ku kwafi hanyar haɗin zuwa saƙonku na neman masu sa-kai.",
          youCanNow: "gina gajeren fom ɗin rajistar masu sa-kai mai aminci.",
          quickCheck: [
            { objective: "O4", q: "Ina amsoshin rajista ke zuwa a kayan aikin fom kyauta?", options: ["Cikin mataimakin AI", "Shafinku na kafofin sada zumunta", "Cikin takardar lissafi da ku ke iko da ita", "Ga kowane mai sa-kai"], answer: 2, why: "Amsoshi suna shiga takardar lissafi da ku ke iko da ita." },
            { objective: "O4", q: "Aikin yana buƙatar binciken baya. Yaya za ku yi da shi?", options: ["Ku ƙara lambar Social Security a fom mai sauƙi", "Ku tambayi ranar haihuwa a fom ɗin", "Ku tsallake shi", "Ku yi amfani da hanyar binciken baya da ƙungiyarku ta amince da ita"], answer: 3, why: "Kada ku karɓi bayanan sirri a fom mai sauƙi; ku yi amfani da hanyar da aka amince da ita." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Saƙonnin maraba da tunatarwa",
          minutes: 4,
          goal: "Rubuta saƙon maraba da tunatarwa da ke sa sababbin masu sa-kai su ji a shirye.",
          text: [
            "Kwanakin farko ne ke yanke ko sabon mai sa-kai zai dawo. Maraba da sauri tana sa mutane su ji ana son su kuma suna a shirye.",
            "Maraba mai kyau tana cewa na gode, tana tabbatar da rana, lokaci da wuri, tana faɗin abin da za a sa ko a kawo, tana ambaton mutumin da za a tuntuɓa, kuma tana faɗin yadda aikin farko zai kasance. Tunatarwa 'yan kwanaki kafin aikin tana maimaita muhimman bayanan.",
            "Ku nemi AI ya rubuta duka biyun, ta amfani da madadi (placeholders): \"Ka rubuta imel na maraba mai daɗi ga sabon mai sa-kai a rumbun abinci. Ka yi amfani da [name], [shift date], [contact person]. Ƙasa da kalmomi 120.\" Sannan ku cike bayanan ta kayan aikin imel ɗinku ko mail merge, ba ta AI ba."
          ],
          steps: ["Ku jera abin da sabon mai sa-kai ke buƙatar sani.", "Ku nemi AI ya rubuta saƙon maraba mai madadi.", "Ku nemi AI ya rubuta gajeriyar tunatarwa ta 'yan kwanaki kafin aikin.", "Ku cike bayanan a kayan aikin imel ɗinku.", "Ku tabbatar da kowace rana da lokaci."],
          words: [["Shigar da sabon mai sa-kai (onboarding)", "taimaka wa sabon mai sa-kai ya shirya: maraba, horo da aikin farko."], ["Madadi (placeholder)", "abin da ke tsaye a wurin wani bayani, kamar [name], wanda za ku maye gurbinsa da ainihin bayanin daga baya."]],
          slides: [
            { title: "Kwanakin farko suna da muhimmanci", bullets: ["Maraba mai daɗi tana dawo da mutane"] },
            { title: "Maraba mai kyau tana faɗin", bullets: ["Na gode", "Rana, lokaci da wuri", "Abin da za a sa ko a kawo", "Wanda za a tuntuɓa"] },
            { title: "Ku rubuta daftari da madadi", bullets: ["[name], [shift date], [contact person]", "Ku cike bayanai a kayan aikin imel ɗinku", "Ku aika tunatarwa 'yan kwanaki kafin aikin"] }
          ],
          tryIt: "Ku nemi AI ya rubuta imel na maraba da tunatarwa ta tes masu madadi don aikinku. Ku gyara duka biyun don su yi kama da salon ƙungiyarku.",
          youCanNow: "rubuta saƙonnin maraba da tunatarwa da ke taimaka wa sababbin masu sa-kai su zo a shirye.",
          quickCheck: [
            { objective: "O5", q: "Me ke yanke ko sabon mai sa-kai zai dawo?", options: ["Kwanakin farko", "Tsawon fom ɗin", "Launin takardar talla", "Yawan hashtag da kuka yi amfani da su"], answer: 0, why: "Kwanakin farko ne ke yanke ko sabon mai sa-kai zai dawo." },
            { objective: "O5", q: "Sabon mai sa-kai zai fara ranar Asabar kuma bai ji daga gare ku ba. Me za ku fara aikawa?", options: ["Babu komai har sai ranar Asabar", "Maraba mai daɗi da rana, lokaci, wuri, abin da za a kawo da wanda za a tuntuɓa", "Neman gudummawa", "Dogon littafin dokoki"], answer: 1, why: "Maraba mai kyau tana tabbatar da bayanan kuma tana ambaton wanda za a tuntuɓa don su ji a shirye." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gode wa masu sa-kai da riƙe su",
          minutes: 5,
          goal: "Yi shiri mai sauƙi don gode wa masu sa-kai da sanin dalilin da yasa suke zama ko suke barin aikin.",
          text: [
            "Riƙe mai sa-kai ya fi sauƙi fiye da samun sabo. Mutane suna zama idan sun ji ana gode musu, suna da amfani, kuma suna cikin ƙungiya.",
            "Hanyoyi masu sauƙi na godiya: rubutaccen saƙo na musamman bayan aikin farko, nuna musu abin da aikinsu ya kawo (\"Ƙungiyar ranar Asabar ta shirya kwalaye 300\"), yaba musu a wani taro, da neman ra'ayoyinsu. AI zai iya taimakawa wajen rubuta saƙonnin godiya da gajerun binciken ra'ayi, kamar tambayoyi uku kan abin da ya yi kyau da abin da za a canja.",
            "Ku rubuta gajeren shiri: yaushe za ku gode wa mutane, yaya za ku nuna sakamako, da yaushe za ku nemi ra'ayoyinsu. Sannan ku saka shi a kalandarku."
          ],
          steps: ["Ku tsara godiya bayan aikin farko.", "Ku tsara yadda za ku nuna sakamako ga masu sa-kai.", "Ku nemi AI ya rubuta daftarin binciken ra'ayi mai tambayoyi uku.", "Ku saka ranakun godiya da binciken a kalandarku."],
          words: [["Riƙewa (retention)", "sa masu sa-kai su ci gaba da dawowa a tsawon lokaci."], ["Binciken ra'ayi (feedback survey)", "'yan tambayoyi da ke tambayar mutane abin da ya yi kyau da abin da za a canja."]],
          slides: [
            { title: "Me yasa mutane suke zama", bullets: ["Suna jin ana gode musu", "Suna jin suna da amfani", "Suna jin suna cikin ƙungiya"] },
            { title: "Hanyoyin godiya", bullets: ["Saƙo bayan aikin farko", "Nuna sakamako: \"mun shirya kwalaye 300\"", "Yabo da neman ra'ayoyinsu"] },
            { title: "Shirinku na riƙewa", bullets: ["Yaushe za ku gode", "Yaya za ku nuna sakamako", "Yaushe za ku nemi ra'ayoyi"] }
          ],
          tryIt: "Aikin ƙarshe: ku haɗa cikakken kayan ɗaukar masu sa-kai: bayanin aiki, saƙon kafofin sada zumunta, imel, fom ɗin rajista, saƙon maraba, tunatarwa da shirin godiya. Ku gyara kowane yanki ku tabbatar da kowane bayani.",
          youCanNow: "ɗauka, maraba da riƙe masu sa-kai da saƙonnin da AI ya rubuta, waɗanda kuka tabbatar kuka mayar da su naku.",
          quickCheck: [
            { objective: "O6", q: "Wace ce hanya mai sauƙi ta gode wa masu sa-kai?", options: ["Neman su ɗauko abokai biyar", "Aika musu takardar biyan kuɗin kayayyaki", "Nuna musu abin da aikinsu ya kawo", "Ba su ƙarin lokutan aiki ba tare da tambaya ba"], answer: 2, why: "Nuna sakamako, kamar kwalayen da aka shirya, yana nuna wa masu sa-kai cewa aikinsu yana da muhimmanci." },
            { objective: "O6", q: "Kun rubuta shirin godiya amma kuna ci gaba da mantawa da shi. Me za ku yi?", options: ["Ku watsar da shirin", "Ku nemi AI ya tuna muku shi", "Ku gode wa mutane sau ɗaya a shekara kawai", "Ku saka kowane mataki a kalandarku da ranaku"], answer: 3, why: "Ku rubuta shirin ku saka shi a kalandarku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Rajista, maraba da riƙe masu sa-kai",
        questions: [
          { objective: "O4", q: "Wace tambaya BA ta dace ba a fom ɗin rajistar masu sa-kai mai sauƙi?", options: ["Waɗanne lokutan aiki za ku iya?", "Imel ko lambar wayarku", "Harsunan da kuke magana", "Lambar Social Security ɗinku"], answer: 3, why: "Lambobin shaida na sirri ba su dace da fom mai sauƙi ba." },
          { objective: "O4", q: "Ina ya kamata amsoshin fom na masu sa-kai su zauna?", options: ["A kayan aikin fom ɗinku da takardar lissafi", "An liƙa su a hirar AI", "An wallafa su a intanet", "A cikin hirar tes ta rukuni"], answer: 0, why: "Bayanan sirri suna zama a kayan aikin da ku ke iko da su, ba a cikin AI ba." },
          { objective: "O5", q: "Saƙon maraba mai kyau ya haɗa da:", options: ["Tambari kawai", "Neman kuɗi", "Rana, lokaci, wuri da mutumin da za a tuntuɓa", "Ba komai sai \"Na gode\""], answer: 2, why: "Bayanai a sarari suna taimaka wa sababbin masu sa-kai su zo a shirye." },
          { objective: "O5", q: "Yaushe ya kamata ku aika tunatarwa?", options: ["Wata ɗaya bayan aikin", "Ba sau ɗaya ba", "Sai idan sun rasa aikin", "'Yan kwanaki kafin aikin"], answer: 3, why: "Tunatarwa jim kaɗan kafin aikin tana taimaka wa mutane su tuna." },
          { objective: "O6", q: "Me ke taimakawa wajen sa masu sa-kai su ci gaba da dawowa?", options: ["Rashin tuntuɓarsu ko kaɗan", "Dogayen lokutan aiki ba tare da hutu ba", "Nuna musu abin da aikinsu ya kawo", "Watsi da ra'ayoyinsu"], answer: 2, why: "Mutane suna zama idan sun ga tasirin aikinsu kuma sun ji ana gode musu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ɗaukar Masu Aikin Sa-kai da AI",
    questions: [
      { objective: "O1", q: "Bayanin aiki mai sarari yana amsa:", options: ["Sunan ƙungiyar kawai", "Me za a yi, yaushe, a ina, me yasa da wanda za a tuntuɓa", "Albashin darakta", "Babu wani abu takamaimai"], answer: 1, why: "Bayanai a sarari suna taimaka wa mutane su ce \"eh\"." },
      { objective: "O1", q: "Yaushe ake yawan buƙatar binciken baya?", options: ["Don ayyukan da suka shafi yara ko mutane masu rauni", "Don kowane imel", "Ba sau ɗaya ba", "Don masu ba da gudummawa kawai"], answer: 0, why: "Ƙungiyoyi sau da yawa suna buƙatar bincike don ayyukan da suka shafi yara ko mutane masu rauni." },
      { objective: "O1", q: "Me za ku ba AI don ya rubuta bayanin aiki?", options: ["Lambobin wayar masu sa-kai", "Kalmar sirrinku", "Bayanan aikin", "Babu komai"], answer: 2, why: "AI yana rubuta bayanan da kuka ba shi." },
      { objective: "O1", q: "Bayan AI ya rubuta daftarin bayanin aiki, ku:", options: ["Tabbatar da kowane bayani ku ƙara bayanan tuntuɓarku", "Wallafa shi ba tare da karantawa ba", "Ƙara adireshin wani mai sa-kai", "Goge shi"], answer: 0, why: "Ku ne ke da alhakin ingancin bayanan." },
      { objective: "O2", q: "Saƙon neman masu sa-kai a kafofin sada zumunta ya kamata ya zama:", options: ["Mai shafuka goma", "Cike da labaran sirri", "Ba tare da hanyar haɗi ba", "Gajere da mataki ɗaya a sarari"], answer: 3, why: "Gajerun saƙonni masu mataki ɗaya sun fi aiki." },
      { objective: "O2", q: "Imel ga magoya baya zai iya:", options: ["Haɗa da yawan gudummawar masu bayarwa", "Ba da ɗan gajeren labari da ƙarin bayani", "Jera sunayen abokan hulɗa", "Tsallake hanyar haɗin rajista"], answer: 1, why: "Imel yana da ƙarin fili don labari da bayanai." },
      { objective: "O2", q: "Me yasa za ku nemi AI ya rubuta nau'i biyu?", options: ["Don amfani da bayanai ninki biyu", "Don zaɓar wanda ya fi kama da salon maganarku", "AI yana buƙatar haka", "Don ruɗa masu karatu"], answer: 1, why: "Kwatanta nau'o'i yana taimaka muku zaɓar salon maganarku." },
      { objective: "O3", q: "Wanne ne sabon wuri mai kyau don samun masu sa-kai?", options: ["Mutane biyar ɗin nan kawai", "Jerin lambobin waya na sirri na wani baƙo", "Jerin imel na saƙonnin banza (spam)", "Makarantar sakandare ta yankin da ɗalibanta ke buƙatar awannin hidima"], answer: 3, why: "Ɗalibai sau da yawa suna buƙatar awannin hidima." },
      { objective: "O3", q: "AI ya ambaci wani shafin intanet na masu sa-kai da ba ku sani ba. Ya kamata ku:", options: ["Fara tabbatar cewa na gaske ne", "Aika masa jerin masu sa-kainku", "Biya shi nan take", "Amince da shi"], answer: 0, why: "AI yana iya ƙirƙirar sunaye da shafuka." },
      { objective: "O3", q: "Me ke sauƙaƙa shiga aiki?", options: ["Lokacin aiki na awa 12", "Tsauraran dokokin ƙwarewa", "Aiki daga gida kamar rubuta katuna", "Takardu da Turanci kaɗai a yankin da ake magana da Spanish"], answer: 2, why: "Ayyuka daga gida da masu sassauci sun dace da mutane da yawa." },
      { objective: "O4", q: "Waɗanne kayan aiki kyauta ne za su iya yin fom ɗin rajista?", options: ["Na'urar lissafi (calculator)", "Manhajar hotuna", "Manhajar waƙa", "Google Forms ko Microsoft Forms"], answer: 3, why: "Dukansu suna yin fom na intanet da ke ajiye amsoshi." },
      { objective: "O4", q: "A fom ɗin rajista mai sauƙi, ku tambayi:", options: ["Kowane bayani da za ku iya tunani", "Bayanan banki", "Abin da kuke buƙata da gaske kawai", "Ranar haihuwa da lambobin shaida"], answer: 2, why: "Ƙarancin bayanai yana nufin ƙarancin haɗari da rajista mai sauri." },
      { objective: "O4", q: "Aikin AI wajen gina fom shi ne:", options: ["Ajiye amsoshin masu sa-kai", "Ba da shawarar tambayoyi da kalmomi", "Yin binciken baya", "Amincewa da masu sa-kai"], answer: 1, why: "Ku ne kuke gina fom ɗin; amsoshi suna zama a kayan aikinku." },
      { objective: "O4", q: "Kafin ku raba hanyar haɗin fom ɗinku, ya kamata ku:", options: ["Cike shi da kanku don gwadawa", "Goge rabin tambayoyin ba tare da tsari ba", "Ɓoye hanyar haɗin", "Nemi AI ya cike shi"], answer: 0, why: "Gwadawa yana kama kurakurai kafin masu sa-kai su gan su." },
      { objective: "O5", q: "Onboarding (shigar da sabon mai sa-kai) yana nufin:", options: ["Cire masu sa-kai", "Sayen jirgin ruwa", "Taimaka wa sabon mai sa-kai ya shirya", "Rubuta neman tallafi (grant)"], answer: 2, why: "Onboarding ya haɗa da maraba, horo da aikin farko." },
      { objective: "O5", q: "Yaya ya kamata sunan mai sa-kai ya bayyana a prompt na AI don imel na maraba?", options: ["A matsayin [name], wanda za a cike daga baya", "Cikakken suna da adireshi", "Suna da lambar waya", "Suna da ranar haihuwa"], answer: 0, why: "Madadi suna hana bayanan sirri shiga AI." },
      { objective: "O5", q: "A ina kuke cike ainihin bayanai a imel na maraba?", options: ["A hirar AI", "A saƙon da kowa zai gani", "A allon da ake rabawa a ɗakin karatu", "A kayan aikin imel ɗinku ko mail merge"], answer: 3, why: "Ainihin bayanai suna zama a kayan aikin da ku ke iko da su." },
      { objective: "O6", q: "Me yasa masu sa-kai suke zama?", options: ["Ba a taɓa tuntuɓarsu ba", "Suna jin ana gode musu, suna da amfani, kuma suna cikin ƙungiya", "Ba su da zaɓi", "Lokutan aiki suna ƙara tsawo"], answer: 1, why: "Godiya da manufa suna sa mutane su ci gaba da dawowa." },
      { objective: "O6", q: "Gajeren binciken ra'ayi ya kamata ya tambayi:", options: ["Asusun bankinsu", "Abin da ya yi kyau da abin da za a canja", "Tarihin lafiyarsu", "Kalmar sirrinsu"], answer: 1, why: "Ra'ayoyi suna taimaka muku inganta yadda abubuwa suke tafiya." },
      { objective: "O6", q: "Shirinku na godiya ya kamata ya kasance:", options: ["A zuciyarku kawai", "Ana yin sa sau ɗaya a kowace shekara biyar", "An bar wa AI ya aika", "A kalandarku da ranaku"], answer: 3, why: "Saka shi a jadawali yana tabbatar da cewa za a yi shi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      4,
      7,
      11,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Bayanin aiki",
        objective: "O1",
        notYet: "Ya rasa me za a yi, yaushe, a ina, me yasa ko wanda za a tuntuɓa.",
        meets: "Yana amsa me za a yi, yaushe, a ina, me yasa, duk binciken da ake buƙata da wanda za a tuntuɓa.",
        exceeds: "Gajere ne, mai daɗi, kuma wanda ya san aikin ya duba shi."
      },
      {
        name: "Saƙo da imel",
        objective: "O2",
        notYet: "Babu kira-zuwa-aiki a sarari, ko an yi amfani da labarin mutum na gaske ba tare da izini ba.",
        meets: "Gajeren saƙo da imel ga magoya baya, kowanne da mataki ɗaya da ainihin hanyar haɗin rajista.",
        exceeds: "Mai koyo ya gwada nau'o'i kuma ya zaɓi wanda ya fi kama da salon ƙungiyar."
      },
      {
        name: "Fom ɗin rajista",
        objective: "O4",
        notYet: "Yana tambayar bayanan sirri ko ba a gwada shi ba.",
        meets: "'Yan tambayoyi masu sauƙi da ke tambayar abin da ake buƙata kawai, kuma mai koyo ya gwada shi.",
        exceeds: "Yana tambaya game da harsuna ko zaɓin lokutan aiki da ke taimakawa wajen dace masu sa-kai da aiki."
      },
      {
        name: "Maraba da tunatarwa",
        objective: "O5",
        notYet: "Ya rasa rana, lokaci, wuri ko mutumin da za a tuntuɓa.",
        meets: "Maraba da tunatarwa ta mako ɗaya da dukkan muhimman bayanai, ta amfani da madadi.",
        exceeds: "Yana faɗin yadda aikin farko zai kasance da abin da za a sa ko a kawo."
      },
      {
        name: "Shirin godiya",
        objective: "O6",
        notYet: "Babu shiri, ko babu ranaku.",
        meets: "Yana faɗin yaushe za a gode wa mutane, yaya za a nuna sakamako da yaushe za a nemi ra'ayoyi, da ranaku.",
        exceeds: "Ya haɗa da gajeren binciken ra'ayi kan abin da ya yi kyau da abin da za a canja."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Sababbin rajistar masu sa-kai don aikin cikin kwanaki 30 (binciken biyo baya)",
      "Sababbin masu sa-kai da suka dawo don aiki na biyu",
      "Ƙungiyoyin da suka kai ga sabon rukunin masu sa-kai, kamar ɗalibai ko kamfanoni"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta da Google Forms ko Microsoft Forms",
      "Bayanan wani aikin sa-kai na gaske ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku sa kowane mai koyo ya zo da aiki ɗaya na gaske da yake buƙatar cikewa.",
      "Ku sa masu koyo su cike fom ɗin rajistar junansu don gwada su.",
      "Ku tunatar da masu koyo kada su karɓi lambobin Social Security ko ranar haihuwa a fom masu sauƙi.",
      "Ku tunatar da masu koyo su tabbatar cewa duk ƙungiya ko shafin intanet da AI ya ba da shawara na gaske ne kafin su tuntuɓe shi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
