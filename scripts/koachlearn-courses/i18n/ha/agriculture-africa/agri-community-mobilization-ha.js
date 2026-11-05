"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-community-mobilization.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_MECH = { name: "FAO: Injiniyoyin Noma Masu Ɗorewa (Sustainable Agricultural Mechanization): abin da FAO ke yi (hidimomin haya, tallafi ga ƙananan manoma)", url: "https://www.fao.org/sustainable-agricultural-mechanization/overview/what-fao-does/en/" };
const KEPHIS_SEED = { name: "KEPHIS (Kenya): hidimomin tabbatar da ingancin iri da kare nau'in shuka", url: "https://www.kephis.go.ke/seed-certification-services" };
const NASC_FAKE = { name: "Muryar Najeriya (Voice of Nigeria): Majalisar Iri ta Ƙasa (NASC) ta gargaɗi manoma game da iri na bogi (ku saya daga dillalan da aka yi wa rajista; alamar tabbaci)", url: "https://von.gov.ng/nasc-cautions-farmers-over-fake-seeds/" };
const GH_ACT803 = { name: "UNEP LEAP: Dokar Shuke-shuke da Taki ta Ghana, 2010 (Act 803): rajistar iri da taki (PPRSD)", url: "https://leap.unep.org/en/countries/gh/national-legislation/plants-and-fertilizer-act-2010-no-803" };
const FAO_PEST_REG = { name: "Kayan Aikin FAO na Rajistar Magungunan Ƙwari: jerin rajistar magungunan ƙwari na ƙasashen Afirka", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const ICA = { name: "International Cooperative Alliance (Ƙungiyar Haɗin Gwiwa ta Duniya): asali, ɗabi'u da ƙa'idodin ƙungiyar haɗin gwiwa", url: "https://ica.coop/en/cooperatives/cooperative-identity" };

module.exports = {
  id: "agri-community-mobilization-ha",
  lang: "ha",
  translationOf: "agri-community-mobilization",
  category: "Agriculture (Africa)",
  name: "Haɗa Kan Al'umma: Raba Injiniyoyi da Ciniki Don Kayan Noma",
  skills: "Gano buƙatun al'umma, Kira da gudanar da taron farko, Amincewa da manufa da dokoki, Haɗa kuɗi don injiniyoyi da hayar tarakta, Saye da yawa da ciniki don kayan noma na gaskiya, Kiyaye amana da bayanai a buɗe",
  outcome: "haɗa manoman al'ummarku kan buƙata ɗaya da kowa yake da ita, amincewa da manufa da dokoki masu adalci, da rubuta tsari don sayen iri da taki da yawa ko raba tarakta ko wata inji, tare da bayanai a buɗe da ke kiyaye amanar kowa.",
  about: [
    "Manomi ɗaya shi kaɗai yana biyan farashi mafi tsada don buhun taki kuma yana jiran tarakta har makonni. Manoma ashirin tare za su iya ciniki don farashi mafi kyau, su duba cewa kayan noma na gaske ne, kuma su yi odar inji ko su raba ta a lokacin da ya dace. Wannan kwas ɗin na manoma jagorori ne, shugabannin ƙungiyoyin manoma, jami'an faɗaɗa aikin gona (extension workers), ƙungiyoyin matasa da na mata, da duk wanda ke shirye ya haɗa kan maƙwabta a Kenya, Najeriya, Ghana, Burkina Faso da ko'ina a Afirka.",
    "Za ku gano abin da al'ummarku ke buƙata, ku kira ku gudanar da taron farko, ku amince da manufa ɗaya da dokoki masu sauƙi, ku tsara haɗa kuɗi don inji ko hayar tarakta, ku sayi kayan noma da yawa ku yi ciniki da masu sayarwa, ku guji iri da taki na bogi, ku warware rikici, ku ajiye bayanai a buɗe, kuma ku tabbatar mata da matasa suna da murya ta gaske.",
    "Yana ginuwa kan kwas ɗin \"Ƙungiyoyin Haɗin Gwiwa na Manoma da Kai Amfanin Gona Kasuwa\" (Farmer Cooperatives and Getting to Market), wanda ke bayanin rajista ta hukuma, dokokin ƙungiya da sayarwa tare, don haka ba ya maimaita su. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" a cikin al'ummarku. Adadin kuɗin da aka ambata misali ne kawai."
  ],
  finalTask: "Ku rubuta tsari don al'ummarku: ko dai tsarin sayen kayan noma da yawa (mambobi, yawan kaya, kuɗin ajiya na farko, farashin masu sayarwa uku a rubuce, yadda za ku duba cewa kayan na gaske ne, kawowa da rabawa) ko yarjejeniyar raba inji (inji ko hidimar haya, jadawalin oda, kuɗin biya, asusun gyara, mai tuƙa inji, da abin da zai faru idan ta lalace), tare da bayanan da za ku nuna wa mambobi da yadda mata da matasa za su shiga.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma jagorori, shugabannin ƙungiyoyin manoma da na ƙauye, jami'an faɗaɗa aikin gona, da mambobin ƙungiyoyin mata da matasa a Kenya, Najeriya, Ghana, Afirka ta Yamma mai magana da Faransanci da ko'ina a Afirka. Yawancinsu suna noma ƙananan gonaki na masara, rogo, shinkafa, dawa, wake, gyaɗa ko kayan lambu.",
    startingPoint: "Sun san maƙwabtansu da matsalolin da suke da su tare, kamar huɗa a makare, taki mai tsada da iri na bogi. Wasu suna cikin ƙungiyoyi na gargajiya ko ƙungiyoyin adashe. Kaɗan ne suka taɓa gudanar da taron tsara aiki, tara kuɗi don saye tare ko yin ciniki da mai sayarwa.",
    gap: "Manoma suna rasa amfanin gona da kuɗi idan huɗa ta yi latti, kayan noma suka yi tsada sosai ko suka zama na bogi, kuma ƙungiyoyi suna wargajewa saboda kuɗi. Shugabanni suna buƙatar gano buƙatu, shirya taro mai adalci, amincewa da dokoki, gudanar da tsarin saye tare ko raba inji, da ajiye bayanai a buɗe don amana ta ɗore, har da mata da matasa waɗanda sau da yawa ake barinsu a baya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; da yawa daga cikin masu koyo Turanci harshe na biyu ne a gare su, kuma ana iya yin taruka da harsunan gida",
      "Na'urori: waya mai sauƙi don kira, saƙon tes (SMS) da kuɗin waya (mobile money); littattafan rajista na takarda",
      "Kuɗi: ƙananan kuɗaɗe da aka tara daga mambobi da yawa; ba za a ɓoye kowace asara ba",
      "Dokoki: dokokin iri, taki da magungunan ƙwari da jerin rajistarsu sun bambanta a kowace ƙasa kuma suna canjawa; masu koyo suna duba hukumomin ƙasarsu",
      "Lokaci: dole taruka su dace da aikin gona, kasuwanni da ayyukan gida, musamman ga mata"
    ],
    prerequisites: "Babu. Zai taimaka: kwas ɗin \"Ƙungiyoyin Haɗin Gwiwa na Manoma da Kai Amfanin Gona Kasuwa\" (Farmer Cooperatives and Getting to Market), don rajista ta hukuma daga baya."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "A ƙauyenku ko ƙungiyar manomanku", action: "gano buƙatun noma da al'umma ke da su tare, da jera manyan uku", standard: "bayan tambayar aƙalla gidaje goma, har da mata da matasan manoma" },
    { id: "O2", condition: "Idan an san babbar buƙatar da kowa yake da ita", action: "kira da gudanar da taron farko da zai amince da manufa ɗaya da dokoki a rubuce", standard: "tare da ajanda, rubutaccen bayanin taro (minutes), sunan wanda zai yi kowane aiki, da dokoki kan kuɗi, yanke shawara da barin ƙungiya" },
    { id: "O3", condition: "Idan ana buƙatar huɗa, sussuka ko wata inji", action: "rubuta tsarin raba inji ko hayar tarakta", standard: "wanda ya ƙunshi haya ko saye, jadawalin oda mai adalci, kuɗin biya, asusun gyara, mai tuƙa inji, da abin da zai faru idan ta lalace" },
    { id: "O4", condition: "Idan an karɓi odar iri da taki ta mambobi", action: "tsara saye da yawa, kwatanta farashin aƙalla masu sayarwa uku, da yin ciniki", standard: "tare da rubuta kuɗin ajiya na farko, duba cewa kayan na gaske ne kuma an yi musu rajista, da rasit da sunan ƙungiya" },
    { id: "O5", condition: "Yayin da ƙungiyar ke sarrafa kuɗi da yanke shawara", action: "ajiye bayanai a buɗe, warware saɓani ta matakan da aka amince da su, da ba mata da matasa matsayi na gaske", standard: "ta yadda kowane mamba zai ga inda kowane biya ya tafi, kuma mata da matasa suna riƙe da ayyuka ko muƙaman shugabanci" }
  ],
  chapters: [
    {
      name: "Babi na 1: Haɗa kan al'umma",
      lessons: [
        {
          title: "Gano buƙatun al'ummarku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tambayi aƙalla gidaje goma game da matsalolin noma, ku jera manyan buƙatu uku da kowa yake da su.",
          text: [
            "Mutane suna shiga ƙungiya idan ta warware matsalar da suke ji a jikinsu. Don haka kafin ku kira taro, ku gano abin da maƙwabtanku ke buƙata da gaske. Kada ku yi zato: shugaba yana iya tunanin tarakta ce, alhali yawancin manoma suna cewa iri na bogi ne ko farashin taki.",
            "Ku ziyarci ko ku kira aƙalla gidaje goma. Ku yi tambayoyi iri ɗaya kaɗan: Mene ne manyan amfanin gonarku ko dabbobinku? Me ya hana girbinku na ƙarshe? Nawa kuke biya don huɗa, iri da taki, kuma yaushe kuke samun su? Me za ku yi tare da maƙwabta? Ku tambayi mata da matasan manoma ma, ba maigida kaɗai ba; matsalolinsu na iya bambanta, kamar rashin takardar mallakar ƙasa don samun bashi, ko kasancewa na ƙarshe da tarakta ke zuwa wurinsu.",
            "Ku rubuta amsoshin a takarda ɗaya: layi ɗaya na kowane gida, ginshiƙi ɗaya na kowace matsala. Ku ƙirga gidaje nawa ne suka ambaci kowace matsala. Manyan uku su ne buƙatun al'ummarku. Kuna iya kuma zana taswira mai sauƙi ta ƙauyen da ke nuna gonaki, hanyoyi, shagunan kayan noma da inda tarakta ko injin niƙa yake. Waya na iya taimaka muku ƙirga da jera amsoshin."
          ],
          steps: ["Ku rubuta tambayoyi masu sauƙi huɗu ko biyar.", "Ku tambayi aƙalla gidaje goma, har da mata da matasan manoma.", "Ku rubuta amsoshin a tebur: layi ɗaya na kowane gida.", "Ku ƙirga mutane nawa ne suka ambaci kowace matsala.", "Ku jera manyan buƙatu uku da kowa yake da su."],
          words: [["Haɗa kan al'umma (mobilization)", "tara mutane don su yi aiki tare kan buƙatar da suke da ita tare."], ["Taswirar buƙatu (needs map)", "rubutu mai sauƙi na matsalolin da gidaje ke da su tare da inda kayan aiki suke."], ["Gida (household)", "mutanen da ke zaune da noma tare kuma suke raba abinci da kuɗi."]],
          slides: [
            { title: "Ku fara da buƙata", bullets: ["Mutane suna shiga don warware matsalar da suke ji", "Kada ku yi zato: ku fara tambaya", "Ra'ayin shugaba na iya zama ba shi ne babbar buƙata ba"] },
            { title: "Ku tambayi gidaje goma ko fiye", bullets: ["Me ya hana girbinku na ƙarshe?", "Nawa kuke biya don huɗa, iri, taki?", "Ku tambayi mata da matasan manoma ma"] },
            { title: "Ku ƙirga ku jera", bullets: ["Layi ɗaya na kowane gida", "Ku ƙirga kowace matsala", "Manyan uku = buƙatun kowa"] }
          ],
          tryIt: "Ku yi wa aƙalla gidaje goma a al'ummarku tambayoyinku. Ku sa amsoshin a tebur, ku ƙirga kowace matsala, ku rubuta manyan buƙatu uku da kowa yake da su.",
          youCanNow: "gano buƙatun noma na al'ummarku da jera manyan matsaloli uku da kowa yake da su.",
          quickCheck: [
            { objective: "O1", q: "Me yasa za a tambayi gidaje kafin a kira taro?", options: ["Don a tara kuɗi da wuri", "Don a zaɓi shugaba", "Don a sayar musu da kayan noma", "Don a gano matsalolin da mutane ke da su tare da gaske"], answer: 3, why: "Ƙungiya tana ɗorewa idan ta warware buƙatar da yawancin mambobi ke ji, ba ra'ayin shugaba kaɗai ba." },
            { objective: "O1", q: "Su wa ya kamata ku haɗa yayin tambaya game da buƙatu?", options: ["Mata da matasan manoma tare da masu gidaje", "Tsofaffin maza kaɗai", "Masu tarakta kaɗai", "Masu iya karatu kaɗai"], answer: 0, why: "Mata da matasa na iya fuskantar matsaloli daban, don haka barin su yana ba da hoton da ba daidai ba." }
          ]
        },
        {
          title: "Kira da gudanar da taron farko",
          objectives: ["O2"],
          minutes: 5,
          goal: "Gudanar da taron farko da ajanda, wanda zai ƙare da ayyuka a sarari da rubutaccen bayanin taro.",
          text: [
            "Ku zaɓi lokaci da wuri da suka dace da yawancin mutane: bayan aikin gona, ba ranar kasuwa ba, a wurin da mata da matasa za su iya zuwa cikin sauƙi, kamar makaranta, coci, masallaci ko ƙarƙashin wata sananniyar bishiya. Ku gayyaci mutane da kanku, ta waya, saƙon tes ko baki, da kuma ta hannun mutane masu daraja kamar dagaci, malamin addini ko jami'in faɗaɗa aikin gona. Ku faɗa musu manufar a jimla ɗaya: 'Mu tattauna yadda za mu sami taki da araha a wannan damina.'",
            "Ku ajiye ajanda mai abubuwa huɗu ko biyar kuma ku sa taron ya yi gajarta: maraba da manufa; abin da taswirar buƙatu ta nuna; ra'ayoyi kan abin da za a yi tare; amincewa da mataki na farko; wa zai yi me kuma zuwa yaushe. Ku zaɓi wanda zai jagoranci taron da wanda zai rubuta bayanin taro. Ku bar kowa ya yi magana, ku kuma tambayi mutane masu shiru kai tsaye.",
            "Ku ƙare da shawarwari, ba magana kawai ba. Ku rubuta kowane aiki, wanda zai yi shi da kuma rana. Ku karanta bayanin taron da babbar murya ku amince da taro na gaba. Misali: wata ƙungiyar manoman dawa a Burkina Faso ta amince a taronta na farko ta tara odar taki cikin makonni biyu, tare da mambobi biyu, ɗaya daga cikinsu budurwa, da za su tattara jerin."
          ],
          steps: ["Ku zaɓi lokaci da wuri da suka dace da yawancin mutane, har da mata da matasa.", "Ku gayyata da kanku da kuma ta hannun mutane masu daraja, tare da manufa a jimla ɗaya.", "Ku shirya gajeriyar ajanda: manufa, buƙatun da aka gano, ra'ayoyi, mataki na farko, ayyuka.", "Ku zaɓi shugaban taro da mai rubuta bayanin taro; ku bar kowa ya yi magana.", "Ku ƙare da ayyuka, sunaye da ranaku; ku karanta bayanin taron da babbar murya."],
          words: [["Ajanda", "jerin abubuwan da taro zai tattauna, bi da bi."], ["Bayanin taro (minutes)", "rubutaccen tarihin abin da taro ya yanke da wanda zai yi me."], ["Shugaban taro (chair)", "mutumin da ke jagorantar taron kuma yake kiyaye lokaci."]],
          slides: [
            { title: "Lokaci, wuri, gayyata", bullets: ["Bayan aikin gona, ba ranar kasuwa ba", "Wurin da mata da matasa za su iya zuwa", "Ku gayyata da kanku; manufa a jimla ɗaya"] },
            { title: "Gajeriyar ajanda", bullets: ["Manufa; abin da taswirar buƙatu ta nuna", "Ra'ayoyi; amincewa da mataki na farko", "Wa zai yi me, zuwa yaushe"] },
            { title: "Ku ƙare da shawarwari", bullets: ["Ayyuka, sunaye, ranaku a bayanin taro", "Ku karanta bayanin taron da babbar murya", "Ku sa ranar taro na gaba"] }
          ],
          tryIt: "Ku rubuta gayyatar (jimla ɗaya ta manufa, lokaci da wuri) da ajanda mai abubuwa biyar don taronku na farko. Idan za ku iya, ku gudanar da shi, ku rubuta bayanin taro mai aƙalla ayyuka biyu, sunaye da ranaku.",
          youCanNow: "kira da gudanar da gajeren taron farko da ke ƙarewa da ayyuka, sunaye, ranaku da bayanin taro.",
          quickCheck: [
            { objective: "O2", q: "Wane lokacin taro ne yawanci ya fi dacewa da manoma?", options: ["Ranar kasuwa da tsakar rana", "Bayan aikin gona, a wurin da yawancin mutane za su iya zuwa", "Da sassafe sosai, nesa da ƙauye", "Duk lokacin da shugaba ya samu sarari"], answer: 1, why: "Lokaci da wuri masu dacewa suna bar yawancin mambobi, har da mata da matasa, su halarta." },
            { objective: "O2", q: "Ta yaya ya kamata taron farko ya ƙare?", options: ["Da dogon jawabi", "Kowa ya biya kuɗi nan take", "Da ayyuka, sunaye da ranaku a rubuce a bayanin taro", "Ba tare da wata shawara ba"], answer: 2, why: "Ayyuka a sarari tare da sunaye da ranaku suna mayar da magana zuwa aiki." }
          ]
        },
        {
          title: "Manufa ɗaya, dokoki masu adalci da haɗa kowa",
          objectives: ["O2", "O5"],
          minutes: 6,
          goal: "Rubuta manufa ɗaya da dokoki masu sauƙi biyar da ƙungiyarku ta amince da su.",
          text: [
            "Manufa ɗaya ta kasance takamaimai kuma tana da rana: 'Zuwa 1 ga Maris, mu sayi buhunan taki 200 tare a farashi ƙasa da abin da mambobi ke biya su kaɗai.' ko 'A wannan damina, a huɗa gonar kowane mamba cikin makonni biyu bayan ruwan sama na farko.' Manufa a sarari tana faɗa wa mambobi yadda nasara take.",
            "Ku amince da dokoki masu sauƙi kafin kowane kuɗi ya motsa: wa zai iya shiga kuma nawa zai biya; yadda ake yanke shawara (misali mamba ɗaya, ƙuri'a ɗaya, kamar yadda ƙungiyoyin haɗin gwiwa ke yi); wa ke riƙe da kuɗi kuma ta yaya (asusun banki ko na kuɗin waya na ƙungiya, tare da mutane biyu da za su amince da biya); me zai faru idan wani bai biya ba ko bai kawo ba; da yadda mamba zai bar ƙungiya ya karɓi kuɗinsa. Ku rubuta dokokin ku karanta su da babbar murya don mambobin da ba sa iya karatu su ma su amince.",
            "Ku ba mata da matasa wuri da gangan. Ku yi taruka a lokacin da za su iya halarta, ku bar mambobi su shiga da sunansu ko da ba su da takardar mallakar ƙasa, ku kuma ba su muƙamai na gaske kamar ma'aji, mai karɓar odar inji ko mai duba kayan noma. Ƙungiyoyin da ke haɗa su sau da yawa suna da mambobi da yawa, amana da yawa da ƙwarewa da yawa, kamar matasan da suka iya amfani da waya da kuɗin waya sosai. Idan ƙungiyarku ta shirya yin rajista ta hukuma, ku duba kwas ɗin \"Ƙungiyoyin Haɗin Gwiwa na Manoma da Kai Amfanin Gona Kasuwa\"."
          ],
          steps: ["Ku rubuta manufa ɗaya mai adadi da rana.", "Ku amince da dokoki kan shiga, yanke shawara, kuɗi, rashin biya ko rashin kawowa, da barin ƙungiya.", "Ku karanta dokokin da babbar murya ku rubuta amincewar a bayanin taro.", "Ku ba mata da matasa muƙamai na gaske da lokutan taro da suka dace da su."],
          words: [["Manufa ɗaya (shared goal)", "sakamako ɗaya a sarari da dukan ƙungiya ke so, mai adadi da rana."], ["Mai sa hannu (signatory)", "mutumin da aka ba izinin amincewa da biya daga asusun ƙungiya."], ["Haɗa kowa (inclusion)", "tabbatar da cewa kowa, har da mata da matasa, zai iya shiga, ya yi magana kuma ya jagoranta."]],
          slides: [
            { title: "Manufa mai adadi da rana", bullets: ["'Zuwa 1 ga Maris, mu sayi buhuna 200 tare'", "'A huɗa kowace gona cikin makonni biyu bayan ruwan farko'", "Tana nuna yadda nasara take"] },
            { title: "Dokoki kafin kuɗi ya motsa", bullets: ["Shiga da kuɗin shiga; mamba ɗaya, ƙuri'a ɗaya", "Asusun ƙungiya; mutane biyu suna amincewa da biya", "Rashin biya ko kawowa; barin ƙungiya da mayar da kuɗi"] },
            { title: "Ku haɗa mata da matasa", bullets: ["Lokuta da wuraren da za su iya halarta", "Shiga da sunansu, ba tare da takardar mallakar ƙasa ba", "Muƙamai na gaske: ma'aji, mai karɓar oda, mai duba kaya"] }
          ],
          sources: [ICA],
          tryIt: "Ku rubuta manufar ƙungiyarku mai adadi da rana, da dokoki biyar kan shiga, yanke shawara, kuɗi, rashin biya ko rashin kawowa, da barin ƙungiya. Ku ambaci muƙami ɗaya da mace ko matashin mamba zai riƙe.",
          youCanNow: "rubuta manufa ɗaya a sarari da dokoki masu adalci, da ba mata da matasa matsayi na gaske a ƙungiya.",
          quickCheck: [
            { objective: "O2", q: "Wace manufa ce ta fi sarari?", options: ["Zuwa 1 ga Maris, mu sayi buhunan taki 200 tare a farashi mafi ƙasa", "Mu taimaki manoma", "Mu inganta abubuwa", "Mu sami taki wani lokaci"], answer: 0, why: "Manufa mai adadi da rana tana nuna daidai yadda nasara take." },
            { objective: "O5", q: "Wata budurwa ba ta da takardar mallakar ƙasa amma tana noma gonarta. Me ya kamata dokokin ƙungiya su ba ta dama?", options: ["Ba za ta iya shiga ba", "Za ta shiga ta hannun mijinta kaɗai", "Za ta iya halarta amma ba za ta jefa ƙuri'a ba", "Ta shiga da sunanta kuma ta iya riƙe muƙami"], answer: 3, why: "Barin mata da matasa su shiga su jagoranta da sunansu yana gina ƙungiya mafi girma da ƙarfi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Haɗa kan al'umma",
        questions: [
          { objective: "O1", q: "Kun tambayi gidaje goma sha biyu. Takwas sun ambaci iri na bogi, uku sun ambaci tarakta. Mene ne babbar buƙatar kowa?", options: ["Tarakta", "Sabuwar hanya", "Iri na bogi", "Makaranta"], answer: 2, why: "Matsalar da gidaje mafi yawa suka ambata ita ce babbar buƙatar kowa." },
          { objective: "O1", q: "Mene ne taswirar buƙatu?", options: ["Rubutu mai sauƙi na matsalolin da gidaje ke da su tare da inda kayan aiki suke", "Taswirar hanya zuwa birni", "Jerin farashin amfanin gona", "Bayanin asusun banki"], answer: 0, why: "Taswirar buƙatu tana nuna matsalolin kowa da kayan aikin gida kamar shagunan kayan noma da injiniyoyi." },
          { objective: "O2", q: "Wa ke rubuta abin da taro ya yanke?", options: ["Dagaci", "Mai sayarwa", "Babu kowa", "Mai rubuta bayanin taro"], answer: 3, why: "Mai rubuta bayanin taro yana rubuta shawarwari, ayyuka, sunaye da ranaku." },
          { objective: "O2", q: "Yaushe ya kamata ƙungiya ta amince da dokokinta kan kuɗi?", options: ["Bayan matsala ta faru", "Kafin a tara kowane kuɗi", "Sai lokacin da ƙungiya ta yi rajista", "Ba sai an yi ba; amana ta isa"], answer: 1, why: "Amincewa da dokoki da farko yana hana rikici idan an haɗa kuɗi." },
          { objective: "O5", q: "Me ke taimaka wa mata su halarci taron ƙungiya?", options: ["Taruka a lokuta da wuraren da suka dace da su", "Taruka ranar kasuwa kaɗai", "Taruka da daddare nesa", "Taruka don masu gidaje kaɗai"], answer: 0, why: "Lokaci da wuri masu dacewa suna cire wani shingen da mata ke yawan fuskanta." }
        ]
      }
    },
    {
      name: "Babi na 2: Haɗa kuɗi, saye tare da kiyaye amana",
      lessons: [
        {
          title: "Haɗa kuɗi don injiniyoyi da hayar tarakta",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rubuta tsari don raba inji ko hayar hidimar tarakta a matsayin ƙungiya.",
          text: [
            "Da farko ku yanke: haya ko saye? Sayen tarakta yana da tsada sosai kuma yana buƙatar mai, gyara, ƙwararren mai tuƙi da isasshen aiki don ta riƙa aiki. Ga yawancin ƙananan ƙungiyoyi, hayar hidimar tarakta a matsayin ƙungiya ita ce mataki na farko: mai ba da haya sau da yawa zai ba da lokaci ko farashi mafi kyau ga gonaki da yawa da ke kusa da juna. FAO tana goyon bayan hidimomin haya a matsayin hanyar da ƙananan manoma za su sami injiniyoyi. Manhajojin oda da wakilai, kamar Hello Tractor a wasu sassan Najeriya da Kenya, suna haɗa manoma da masu tarakta; ku duba abin da ke aiki a yankinku. Ƙananan injiniyoyin da za a raba, kamar injin sussuka, injin ɓalle masara ko injin niƙa, ƙungiya za ta iya saya.",
            "Ku tsara jadawali cikin adalci. Huɗa ko shuka a makare yana rage amfanin gona, kuma kowa yana son inji a ranaku iri ɗaya. Ku amince da tsarin bi da bi tun da wuri: ta yanki da hanya don ajiye mai da tafiya, ta ƙuri'ar sa'a, ko ta buƙatar shuka, kuma ku canja wanda zai fara kowace damina. Ku rubuta jadawalin ku raba shi. Ku amince da abin da zai faru idan ruwan sama ko lalacewa ya dakatar da aiki.",
            "Ku amince da kuɗin biya da kashe-kashe: abin da mambobi za su biya a kowace eka ko kowace awa (adadi misali ne kawai: XOF, KES, NGN ko GHS a kowace eka), biya kafin ranar ko a ranar, da asusun gyara na daban ga injin da ƙungiya ta mallaka don kada gyara ya dakatar da damina. Ku naɗa ƙwararren mai tuƙa inji, ku ajiye littafin aiki na awoyi, mai, gonakin da aka yi wa aiki da gyare-gyare, kuma ku ajiye injin a wuri mai aminci."
          ],
          steps: ["Ku yanke haya ko saye, bisa kuɗi, ƙwarewa da yawan aiki.", "Ku jera gonakin mambobi, girmansu da ranakun da suke buƙatar inji.", "Ku amince da jadawali mai adalci (ta hanya, ƙuri'ar sa'a ko buƙatar shuka) kuma ku canja wanda zai fara.", "Ku sa kuɗin biya, lokacin biya da asusun gyara.", "Ku naɗa mai tuƙi ku ajiye littafin aiki; ku amince da abin da zai faru idan ta lalace."],
          words: [["Hidimar haya (hire service)", "mai ba da hidima da ke kawo tarakta ko inji ya yi aikin don kuɗi."], ["Asusun gyara (maintenance fund)", "kuɗin da aka ware daga kuɗin biya don biyan gyara da kula da inji."], ["Littafin aiki (logbook)", "rubutun awoyin inji, mai, gonakin da aka yi wa aiki da gyare-gyare."]],
          slides: [
            { title: "Haya ko saye?", bullets: ["Saye: kuɗi mai yawa, mai, gyara, mai tuƙi", "Yawancin ƙananan ƙungiyoyi suna farawa da haya tare", "Ƙananan injiniyoyin rabawa: sussuka, ɓalle masara, niƙa"] },
            { title: "Jadawali mai adalci", bullets: ["Ku jera gonaki, girmansu da ranakun buƙata", "Bi da bi ta hanya, ƙuri'ar sa'a ko buƙatar shuka", "Ku canja wanda zai fara kowace damina"] },
            { title: "Kuɗin biya da kulawa", bullets: ["Kuɗi a kowace eka ko awa (adadi misali ne kawai)", "Asusun gyara don gyare-gyare", "Ƙwararren mai tuƙi; littafin awoyi da mai"] }
          ],
          sources: [FAO_MECH],
          tryIt: "Ku zaɓi inji ko hidimar haya da ƙungiyarku ke buƙata. Ku jera gonakin mambobi biyar, girmansu da ranaku, sannan ku rubuta jadawalin oda, kuɗi a kowace eka, dokar asusun gyara idan kun mallaki injin, da abin da zai faru idan ta lalace.",
          youCanNow: "rubuta tsari mai adalci don hayar ko raba tarakta ko inji, tare da jadawali, kuɗin biya da gyara.",
          quickCheck: [
            { objective: "O3", q: "Me yasa ƙananan ƙungiyoyi da yawa ke hayar hidimar tarakta maimakon su saya?", options: ["Haya kyauta ce koyaushe", "Ba a iya sayen tarakta a Afirka", "Saye yana buƙatar kuɗi mai yawa, gyara, mai tuƙi da isasshen aiki", "Hidimomin haya ba sa zuwa a kan lokaci"], answer: 2, why: "Mallakar tarakta tana kawo manyan kashe-kashe da buƙatu; hayar ƙungiya na iya ba da dama ba tare da su ba." },
            { objective: "O3", q: "Asusun gyara don me ne?", options: ["Biyan shugaba albashi", "Biyan gyara don inji ya ci gaba da aiki", "Sayen iri", "Biyan kuɗin taruka"], answer: 1, why: "Ware kuɗi don gyara yana hana lalacewa ta kawo ƙarshen damina." }
          ]
        },
        {
          title: "Saye da yawa, ciniki da guje wa kayan noma na bogi",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tsara sayen iri ko taki da yawa, kwatanta farashi uku, da duba cewa kayan na gaske ne.",
          text: [
            "Ku fara tattara odar: sunan kowane mamba, kayan noman, yawansa da kuɗin ajiya da ya biya, duka a rubuce a littafin oda kuma a karanta su ga kowa. Ku haɗa jimlar. Babbar oda tabbatacciya tana ba ku ƙarfin ciniki. Ku nemi aƙalla masu sayarwa uku da aka yi wa rajista (dillalan kayan noma, masu rarrabawa ko kamfanoni) su ba ku farashi a rubuce: farashin kowane buhu, kawowa zuwa ƙauyenku, rana, alama da nau'in iri, da duk wani ragi don cikakken kaya.",
            "Ku yi ciniki kan abin da ya fi farashi: kawowa kyauta ko a araha, kawowa kafin lokacin shuka, nuni ko horo kyauta, biyan wani kaso idan an kawo, da rasit da sunan ƙungiya. Ku kwatanta farashi bisa jimlar kuɗin har kayan ya iso, ba farashin buhu kaɗai ba. Kada ku taɓa ba mutum ɗaya duka kuɗin a hannu; ku biya daga asusun ƙungiya tare da rasit.",
            "Iri, taki da maganin ƙwari na bogi haɗari ne na gaske. Ku saya daga dillalan da aka yi wa rajista kaɗai. Ku duba hatimi, lakabi, lambar rukuni (batch) da ranaku, kuma ku tabbata buhunan ba su yage ba ko an sake ɗinke su. A Kenya, KEPHIS ce ke kula da iri da aka tabbatar; a Najeriya, Majalisar Iri ta Ƙasa (NASC) tana gaya wa manoma su saya daga dillalan da aka yi wa rajista kuma su nemi alamar tabbacinta; a Ghana, Hukumar Kare Shuke-shuke da Sa Ido (PPRSD) tana kula da iri da taki ƙarƙashin Dokar Shuke-shuke da Taki. Dole magungunan ƙwari su kasance a jerin rajistar ƙasarku. Ku ajiye rasit da ɗan samfuri, kuma ku kai rahoton kayan bogi ga hukumar ƙasa."
          ],
          steps: ["Ku tattara odar kowane mamba da kuɗin ajiyarsa a littafin oda; ku karanta shi ga kowa.", "Ku sami farashi a rubuce daga aƙalla masu sayarwa uku da aka yi wa rajista.", "Ku yi ciniki kan farashi, kawowa, rana, horo da sharuɗɗan biya.", "Ku kwatanta jimlar kuɗi har kaya ya iso ku zaɓa; ku biya daga asusun ƙungiya tare da rasit.", "Ranar kawowa, ku duba hatimi, lakabi, lambar rukuni da alamar tabbaci; ku raba da rasit ga kowane mamba."],
          words: [["Saye da yawa (bulk buying)", "sayen kaya mai yawa tare don samun farashi mafi ƙasa ko sharuɗɗa mafi kyau."], ["Farashi a rubuce (quote)", "farashi da sharuɗɗan mai sayarwa a rubuce kafin ku saya."], ["Dillalin kayan noma (agro-dealer)", "shago ko ɗan kasuwa da ke sayar da iri, taki da sauran kayan noma."], ["Iri da aka tabbatar (certified seed)", "irin da hukumar iri ta ƙasa ta duba cewa nau'in daidai ne kuma yana da inganci."]],
          slides: [
            { title: "Ku fara tattara oda", bullets: ["Suna, kayan noma, yawa, kuɗin ajiya", "A rubuce a littafin oda kuma a karanta ga kowa", "Babbar oda tabbatacciya tana ba da ƙarfin ciniki"] },
            { title: "Farashi uku, sannan ciniki", bullets: ["Aƙalla masu sayarwa uku da aka yi wa rajista, a rubuce", "Farashi, kawowa, rana, horo, sharuɗɗan biya", "Ku kwatanta jimla har kaya ya iso; rasit da sunan ƙungiya"] },
            { title: "Ku guji kayan noma na bogi", bullets: ["Dillalan rajista kaɗai; ku duba hatimi, lakabi, ranaku", "Kenya: KEPHIS; Najeriya: alamar NASC; Ghana: PPRSD", "Magungunan ƙwari a jerin rajistar ƙasa; ku kai rahoton bogi"] }
          ],
          sources: [KEPHIS_SEED, NASC_FAKE, GH_ACT803, FAO_PEST_REG],
          tryIt: "Ku yi takardar oda don aƙalla mambobi biyar (suna, kayan noma, yawa, kuɗin ajiya). Ku rubuta tambayoyin da za ku yi wa masu sayarwa uku da aka yi wa rajista, da jerin abubuwan dubawa ranar kawowa don gane iri ko taki na bogi.",
          youCanNow: "tsara sayen kayan noma da yawa, yin ciniki da masu sayarwa uku, da duba cewa iri da taki na gaske ne.",
          quickCheck: [
            { objective: "O4", q: "Ta yaya ya kamata ku kwatanta farashin masu sayarwa?", options: ["Farashin buhu kaɗai", "Wane mai sayarwa ne abokinku", "Wane ne ke da babban shago", "Jimlar kuɗi har kaya ya iso, da rana, inganci da sharuɗɗa"], answer: 3, why: "Farashin buhu mai araha na iya ɓoye kuɗin sufuri mai yawa ko kawowa a makare; ku kwatanta dukan cinikin." },
            { objective: "O4", q: "Ranar kawowa, wasu buhunan iri suna kama da an sake ɗinke su kuma ba su da alamar tabbaci. Me za ku yi?", options: ["Ku ƙi karɓa, ku ajiye shaida ku kai rahoto ga hukumar iri", "Ku karɓa don ajiye lokaci", "Ku raba su a ɓoye", "Ku haɗa su da iri mai kyau"], answer: 0, why: "Buhunan da aka sake ɗinkewa babu alama alamun iri na bogi ne; ku ƙi, ku ajiye shaida, ku kai rahoto." }
          ]
        },
        {
          title: "Kiyaye amana: bayanai a buɗe da warware rikici",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ajiye bayanan kuɗin da aka haɗa a buɗe, da warware saɓani ta matakan da aka amince da su.",
          text: [
            "Ƙungiyoyi ba safai suke rushewa saboda rashin ra'ayoyi ba; suna rushewa idan mambobi suka daina amincewa da inda kuɗi ya tafi. Ku sa kowane shilling, naira, cedi ko franc ya zama mai sauƙin bibiya: littafin oda don kuɗin ajiya, rasit na kowane kuɗi da ya shigo ko ya fita, biya daga asusun ƙungiya da mutane biyu ke amincewa da shi, da littafin aikin inji idan kuna raba ɗaya.",
            "Ku sa bayanai a buɗe. Ku karanta taƙaitaccen bayanin kuɗi da babbar murya a kowane taro: kuɗin da ya shigo, wanda ya fita, abin da ya rage, da abin da aka saya wa wane. Ku liƙa jerin oda da jadawali a inda mambobi za su gani, ko ku raba hoto a rukunin hira na ƙungiya. Ku bar kowane mamba ya duba littattafan. Ku canja masu kula da kuɗi lokaci zuwa lokaci.",
            "Saɓani zai faru: wani ya sami tarakta a makare, buhu ya ɓace, mamba bai biya ba. Ku bi matakan da ke cikin dokokinku: da farko ku yi magana kai tsaye; sannan kwamitin ya saurari ɓangarorin biyu ya duba bayanai; sannan dukan ƙungiya ta yanke shawara; idan ya zama dole, ku nemi wani mutum mai daraja daga waje kamar jami'in faɗaɗa aikin gona, dagaci ko jami'in ƙungiyoyin haɗin gwiwa. Ku yanke shawara bisa gaskiyar da ke cikin bayanai, ba bisa wanda ya fi ƙara murya ba. Ku tabbatar mata da matasa ma za su iya kawo matsala, kuma ana jin ƙorafinsu."
          ],
          steps: ["Ku ajiye littafin oda, rasit, asusun ƙungiya mai masu amincewa biyu da littafin aiki.", "Ku karanta taƙaitaccen bayanin kuɗi da babbar murya a kowane taro.", "Ku liƙa jerin sunaye da jadawali a inda mambobi za su gani.", "Ku warware saɓani ta matakan da aka amince da su, ta amfani da bayanai.", "Ku canja masu muƙaman kuɗi kuma ku tabbata kowa zai iya kawo matsala."],
          words: [["Bayyana gaskiya (transparency)", "barin kuɗi da shawarwari a buɗe don kowane mamba ya gani."], ["Mai sasantawa (mediator)", "mutum mai daraja wanda ba ya goyon bayan kowa, da ke taimaka wa ɓangarori biyu su sasanta."], ["Abin da ya rage (balance)", "kuɗin da ya rage bayan an cire kuɗin da ya fita daga wanda ya shigo."]],
          slides: [
            { title: "Amana tana bin kuɗi", bullets: ["Littafin oda da rasit na komai", "Asusun ƙungiya; masu amincewa biyu", "Littafin aikin inji idan kuna raba ɗaya"] },
            { title: "Ku sa bayanai a buɗe", bullets: ["Ku karanta kuɗin shiga, fita da abin da ya rage da murya", "Ku liƙa jerin sunaye da jadawali; ku raba hoto", "Kowane mamba zai iya duba littattafan"] },
            { title: "Warware saɓani", bullets: ["Magana kai tsaye; kwamiti ya saurari ɓangarori biyu", "Dukan ƙungiya ta yanke; mai sasantawa daga waje idan ya zama dole", "Ku yanke bisa bayanai; ku saurari mata da matasa"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarinku na sayen kayan noma da yawa ko yarjejeniyar raba inji. Ku haɗa mambobi, bayanan da za ku ajiye ku karanta da murya, matakan warware saɓani, da muƙaman da mata da matasa za su riƙe.",
          youCanNow: "ajiye kuɗin da aka haɗa a buɗe kuma mai sauƙin bibiya, warware saɓani cikin adalci, da kiyaye amanar kowa.",
          quickCheck: [
            { objective: "O5", q: "Me ya fi gina amana a ƙungiyar da ke haɗa kuɗi?", options: ["Ma'aji ya ajiye littattafan a gidansa", "Karanta kuɗin shiga, fita da abin da ya rage da babbar murya a kowane taro", "Biyan masu sayarwa da tsabar kuɗi ba tare da rasit ba", "Shugaba kaɗai ya san abin da ya rage"], answer: 1, why: "Bayanai a buɗe suna bar kowane mamba ya ga inda kuɗi ya tafi." },
            { objective: "O5", q: "Wata mamba ta ce ita ce ta ƙarshe da ta sami tarakta kuma. Mene ne mataki na farko?", options: ["Cire ta daga ƙungiya", "Yin watsi da maganar", "Yin magana kai tsaye, sannan duba jadawali da bayanai", "Mayar mata da kuɗinta a rufe ƙungiya"], answer: 2, why: "Bin matakan da aka amince da su da duba bayanai yana warware maganar cikin adalci." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Haɗa kuɗi, saye tare da kiyaye amana",
        questions: [
          { objective: "O3", q: "Mene ne hidimar haya?", options: ["Asusun ajiyar kuɗi na ƙungiya", "Mai ba da hidima da ke kawo inji ya yi aikin don kuɗi", "Kamfanin iri", "Bashin banki"], answer: 1, why: "Hidimar haya tana bar manoma su yi amfani da tarakta ko inji ba tare da sun mallake ta ba." },
          { objective: "O3", q: "Kowa yana son tarakta a ranaku uku iri ɗaya. Mene ne adalci?", options: ["Abokan shugaba su fara", "Duk wanda ya fi ƙara murya", "Duk wanda ya biya ƙarin kuɗi a ɓoye", "Tsarin bi da bi da aka amince ta hanya, ƙuri'ar sa'a ko buƙatar shuka, mai canjawa kowace damina"], answer: 3, why: "Tsarin bi da bi da aka amince da shi mai canjawa adalci ne kuma yana ajiye mai da tafiya." },
          { objective: "O4", q: "Me yasa za a tattara oda da kuɗin ajiya kafin a yi magana da masu sayarwa?", options: ["Don a kashe kuɗin da wuri", "Don a guji rubuta komai", "Babbar oda tabbatacciya tana ba da ƙarfin ciniki", "Masu sayarwa suna neman lambobin sirri (PIN) na mambobi"], answer: 2, why: "Masu sayarwa suna ba da sharuɗɗa mafi kyau idan sun san oda ta gaske ce kuma babba." },
          { objective: "O4", q: "Wanne ne alamar taki ko iri na bogi?", options: ["Buhunan da suka yage ko aka sake ɗinkewa babu lakabi ko alama", "Buhu mai hatimi da lambar rukuni", "Rasit daga dillalin da aka yi wa rajista", "Alamar tabbaci"], answer: 0, why: "Hatimin da ya karye da rashin lakabi ko alama alamun gargaɗi ne na kayan noma na bogi." },
          { objective: "O5", q: "Wa ya kamata ya amince da biya daga asusun ƙungiya?", options: ["Duk wanda ya nema", "Mai sayarwa", "Mutum ɗaya shi kaɗai", "Masu sa hannu biyu da aka amince da su"], answer: 3, why: "Masu amincewa biyu suna sa ya yi wuya a yi amfani da kuɗi ba daidai ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Haɗa Kan Al'umma: Raba Injiniyoyi da Ciniki Don Kayan Noma",
    questions: [
      { objective: "O1", q: "Mene ne haɗa kan al'umma?", options: ["Ƙaura zuwa birni", "Tara mutane don su yi aiki tare kan buƙatar da suke da ita tare", "Sayen waya", "Sayar da amfanin gona shi kaɗai"], answer: 1, why: "Haɗa kan al'umma yana nufin shirya mutane kan buƙatar da suke da ita tare." },
      { objective: "O1", q: "Aƙalla gidaje nawa ya kamata ku tambaya yayin gano buƙatu?", options: ["Ɗaya", "Biyu", "Shugabanni kaɗai", "Goma"], answer: 3, why: "Tambayar aƙalla gidaje goma tana ba da hoto mai adalci na buƙatun kowa." },
      { objective: "O1", q: "Me yasa za a haɗa matasan manoma a taswirar buƙatu?", options: ["Matsalolinsu na iya bambanta, kamar rashin takardar ƙasa ko zama na ƙarshe a samun hidima", "Sun fi kowa kuɗi", "Su ne suka mallaki dukan tarakta", "Ba a buƙata ba"], answer: 0, why: "Matasa da mata na iya fuskantar shinge daban da ya kamata ƙungiya ta warware su ma." },
      { objective: "O1", q: "Bayan ƙirga amsoshi, me za ku yi?", options: ["Ku yar da takardar", "Ku zaɓi abin da shugaba ya fi so", "Ku jera manyan buƙatu uku na kowa", "Ku fara tara kuɗi"], answer: 2, why: "Jerawa yana nuna waɗanne buƙatu ne yawancin gidaje ke da su." },
      { objective: "O2", q: "Me ya kamata gayyatar taron farko ta ƙunsa?", options: ["Jerin bashin mambobi", "Babu komai, lokaci kawai", "Neman kuɗi", "Manufa a jimla ɗaya, lokaci da wuri"], answer: 3, why: "Manufa a sarari tana faɗa wa mutane dalilin da yasa zuwa yake da amfani." },
      { objective: "O2", q: "Mene ne ajanda?", options: ["Jerin abubuwan da taro zai tattauna, bi da bi", "Odar tarakta", "Farashi a rubuce daga mai sayarwa", "Bayanin asusun banki"], answer: 0, why: "Ajanda tana sa taro ya yi gajarta kuma ya bi hanya." },
      { objective: "O2", q: "Wace manufa ce ta fi sarari?", options: ["Mu fi kyau a bana", "Mu taimaki kowa", "A huɗa gonar kowane mamba cikin makonni biyu bayan ruwan sama na farko", "Mu sami injiniyoyi wata rana"], answer: 2, why: "Tana ambaton sakamako da lokaci, don haka ƙungiya za ta ga ko ta yi nasara." },
      { objective: "O2", q: "Wace doka ya kamata a amince da ita kafin a tara kuɗi?", options: ["Launin rigunan ƙungiya", "Yadda mamba zai bar ƙungiya ya karɓi kuɗinsa", "Inda shugaba yake zaune", "Wace tashar rediyo za a saurara"], answer: 1, why: "Dokoki kan barin ƙungiya da mayar da kuɗi suna hana rikici idan an haɗa kuɗi." },
      { objective: "O3", q: "Wanne ne yawanci mataki na farko zuwa injiniyoyi ga ƙaramar ƙungiya?", options: ["Sayen babbar tarakta da bashi", "Gina masana'anta", "Kowane mamba ya sayi tarakta", "Hayar hidimar tarakta tare"], answer: 3, why: "Hayar ƙungiya tana ba da dama ba tare da manyan kashe-kashen mallaka ba." },
      { objective: "O3", q: "Me littafin aikin inji ke rubutawa?", options: ["Ranakun haihuwar mambobi", "Awoyi, mai, gonakin da aka yi wa aiki da gyare-gyare", "Farashin amfanin gona", "Halartar taro"], answer: 1, why: "Littafin aiki yana nuna yadda ake amfani da inji da kuma kula da ita." },
      { objective: "O3", q: "Huɗa a makare yawanci tana kawo:", options: ["Ƙarin amfanin gona", "Babu canji", "Raguwar amfanin gona", "Taki kyauta"], answer: 2, why: "Huɗa da shuka a makare suna rage amfanin gona, shi yasa jadawali mai adalci yake da muhimmanci." },
      { objective: "O3", q: "Wata ƙungiya ta mallaki injin ɓalle masara. Daga ina kuɗin gyara yake fitowa?", options: ["Asusun gyara da aka ware daga kuɗin biya", "Aljihun shugaba", "Mai sayarwa", "Babu inda; a daina amfani da ita"], answer: 0, why: "Asusun gyara daga kuɗin biya yana sa inji ta ci gaba da aiki." },
      { objective: "O4", q: "Aƙalla farashin masu sayarwa nawa a rubuce ya kamata ku kwatanta?", options: ["Uku", "Ɗaya", "Babu", "Ashirin"], answer: 0, why: "Farashi uku suna nuna farashi mai adalci kuma suna ba ku damar ciniki." },
      { objective: "O4", q: "Ban da farashi, me kuma za ku iya yin ciniki a kai?", options: ["Sunan iyalin mai sayarwa", "Lambobin sirri (PIN) na mambobi", "Kawowa zuwa ƙauye kafin lokacin shuka", "Farashi mafi tsada"], answer: 2, why: "Kawowa, lokaci, horo da sharuɗɗan biya suna da daraja kamar farashin buhu." },
      { objective: "O4", q: "A Najeriya, wace hukuma ce ke gargaɗi game da iri na bogi kuma take amfani da alamar tabbaci?", options: ["KEPHIS", "Majalisar Iri ta Ƙasa (NASC)", "PPRSD", "KEBS"], answer: 1, why: "NASC tana gaya wa manoma su saya daga dillalan da aka yi wa rajista kuma su nemi alamar tabbacinta." },
      { objective: "O4", q: "Ta yaya ya kamata ƙungiya ta biya mai sayarwa?", options: ["Tsabar kuɗi a hannun mamba ɗaya", "Zuwa asusun baƙo", "Ba tare da kowane rasit ba", "Daga asusun ƙungiya, tare da rasit da sunan ƙungiya"], answer: 3, why: "Biyan ƙungiya tare da rasit yana sa kuɗi ya zama mai sauƙin bibiya." },
      { objective: "O5", q: "Me yasa za a karanta taƙaitaccen bayanin kuɗi da babbar murya a taruka?", options: ["Don a cike lokaci", "Don a kunyata mambobi", "Saboda doka ta ce a rera waƙa", "Don mambobin da ba sa iya karatu su ma su ga inda kuɗi ya tafi"], answer: 3, why: "Karantawa da murya yana sa bayanai su zama a buɗe ga kowane mamba." },
      { objective: "O5", q: "Wa zai iya taimakawa idan kwamiti bai iya warware rikici ba?", options: ["Mutum mai daraja daga waje, kamar jami'in faɗaɗa aikin gona ko na ƙungiyoyin haɗin gwiwa", "Mai sayarwa", "Babu kowa", "Mamban da ya fi ƙara murya"], answer: 0, why: "Mai sasantawa wanda ba ya goyon bayan kowa zai iya taimaka wa ɓangarorin biyu su yarda." },
      { objective: "O5", q: "A kan me ya kamata shawarwari a rikici su dogara?", options: ["Wanda ya fi tsufa", "Wanda ya fi ihu", "Gaskiyar da ke cikin bayanai", "Jita-jita"], answer: 2, why: "Bayanai suna nuna abin da ya faru da gaske, don haka shawarwari su zama masu adalci." },
      { objective: "O5", q: "Me ke taimaka wa mata da matasa su shiga?", options: ["Muƙamai don masu gidaje kaɗai", "Muƙamai na gaske kamar ma'aji ko mai karɓar odar inji", "Taruka da daddare nesa", "Zama mamba sai da takardar ƙasa"], answer: 1, why: "Ba mata da matasa matsayi na gaske yana gina amana da ƙungiya mafi ƙarfi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin ku sake gwadawa.",
    criteria: [
      { name: "Taswirar buƙatu", objective: "O1", notYet: "Buƙatar zaton shugaba ce, ko an tambayi gidaje ƙasa da goma.", meets: "An tambayi aƙalla gidaje goma, har da mata da matasa, kuma an jera manyan buƙatu uku.", exceeds: "Ya haɗa da taswira mai sauƙi ta ƙauye mai gonaki, hanyoyi, shagunan kayan noma da injiniyoyi." },
      { name: "Manufa da dokoki", objective: "O2", notYet: "Babu manufa a sarari, ko babu dokoki a rubuce kan kuɗi da barin ƙungiya.", meets: "Manufa mai adadi da rana, da dokoki a rubuce kan shiga, yanke shawara, kuɗi, rashin biya da barin ƙungiya, an amince da su a bayanin taro.", exceeds: "An karanta dokokin da babbar murya, kuma an rubuta amincewar mambobi da sunayensu." },
      { name: "Tsarin injiniyoyi", objective: "O3", notYet: "Babu jadawali ko kuɗin biya, ko babu tsari idan inji ta lalace.", meets: "An yanke haya ko saye, jadawali mai adalci, kuɗin biya, asusun gyara ko sharuɗɗan haya, mai tuƙi da dokar lalacewa.", exceeds: "Mai ba da haya ko mai inji ya tabbatar da tsarin, kuma wanda zai fara yana canjawa kowace damina." },
      { name: "Tsarin saye da yawa", objective: "O4", notYet: "Babu littafin oda, farashi a rubuce ƙasa da uku, ko babu duba kayan bogi.", meets: "An rubuta oda da kuɗin ajiya, an kwatanta farashi uku a rubuce bisa kuɗi har kaya ya iso, biya ta asusun ƙungiya da duba kayan na gaske ranar kawowa.", exceeds: "Yana nuna abin da aka samu a ciniki (farashi, kawowa, horo) kuma ya ambaci hukumar da za a kai rahoton kayan bogi." },
      { name: "Amana da haɗa kowa", objective: "O5", notYet: "Mutum ɗaya kaɗai ke ajiye bayanai, ko mata da matasa ba su da wani matsayi.", meets: "Bayanai a buɗe da ake karantawa da murya, matakan warware saɓani da aka amince da su, da muƙaman mata da matasa da aka ambata.", exceeds: "Muƙaman kuɗi suna canjawa, kuma mata da matasa suna riƙe da aƙalla muƙamin shugabanci ɗaya." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da suka kammala sayen kayan noma da yawa ko damina ɗaya ta raba inji cikin watanni 6 (binciken biyo baya)",
      "Mambobin da suka ce suna biyan ƙasa da yadda suke biya a kowane buhu, ko suna samun huɗa da wuri fiye da lokacin da suke su kaɗai",
      "Ƙungiyoyin da ba su da rikicin kuɗi da ba a warware ba bayan damina ɗaya, kuma ana karanta bayanai da murya a taruka",
      "Kason muƙaman ƙungiya da mata da matasan mambobi ke riƙewa"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai sauƙi don kira, saƙon tes da kuɗin waya; wayar zamani tana taimakawa wajen ɗaukar hoton jerin sunaye",
      "Littafin rubutu don taswirar buƙatu, bayanin taro, littafin oda da littafin aiki",
      "Samfuran dokoki da takardar oda masu sauƙi (mai horarwa zai iya kwafo su daga darussan)",
      "Samfuran buhunan iri da taki ko lakabinsu don koyon gane kayan bogi",
      "Kusan minti 90 gaba ɗaya, a gajerun zama, da lokacin ziyartar gidaje da masu sayarwa"
    ],
    facilitatorNotes: [
      "Ku gudanar da kwas ɗin da ƙauye ko ƙungiya ta gaske: ku yi taswirar buƙatu da taron farko da gaske, a tsakanin zama.",
      "Ku yi zama a lokacin da mata da matasa za su iya halarta, kuma ku gayyace su su jagoranci taro ko su rubuta bayanin taro.",
      "Ku kawo buhunan kayan noma na gaske ko lakabinsu, ku tambayi hukumar iri ko ta kare shuke-shuke ta ƙasa (KEPHIS, NASC, PPRSD ko hukumar ƙasarku) yadda za a duba su; kada ku faɗi kuɗi ko farashi daga ka.",
      "Ku yi wasan kwaikwayo na ciniki da mai sayarwa da na rikici kan odar tarakta da ta yi latti, ta amfani da samfuran bayanai.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric; idan ƙungiyar ta shirya yin rajista ta hukuma, ku nuna musu kwas ɗin \"Ƙungiyoyin Haɗin Gwiwa na Manoma da Kai Amfanin Gona Kasuwa\"."
    ]
  }
};
