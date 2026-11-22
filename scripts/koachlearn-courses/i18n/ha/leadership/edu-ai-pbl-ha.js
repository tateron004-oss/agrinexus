"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-ai-pbl.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-ai-pbl-ha",
  lang: "ha",
  translationOf: "edu-ai-pbl",
  category: "Leadership Development",
  name: "AI da Koyo ta Hanyar Ayyuka (PBL)",
  skills: "Tsara aiki mai babbar tambaya, Tsara matakai da rubric da taimakon AI, Koya wa ɗalibai bincike da AI cikin gaskiya, Kafa dokokin amfani da AI a kowane matakin aiki, Auna tsarin aiki da koyon kowane ɗalibi, Shirya baje-koli a gaban jama'a",
  outcome: "tsara darasin koyo ta hanyar ayyuka (PBL) da taimakon AI, mai babbar tambaya, matakai, rubric da samfuri na gaske da za a nuna wa jama'a, tare da dokokin amfani da AI a sarari a kowane mataki, littafin AI na ɗalibi, da wuraren dubawa da ke nuna koyon kowane ɗalibi da kansa.",
  about: [
    "Wannan kwas na malamai ne, masu horar da malamai da shugabannin makaranta da ke amfani, ko suke son amfani, da koyo ta hanyar ayyuka (PBL). A PBL, ɗalibai suna koyo ta hanyar yin aiki na tsawon lokaci kan tambaya ta gaske, sannan su nuna samfurinsu ga masu sauraro na gaske. AI yana canja yadda ɗalibai ke bincike, ƙirƙira da aiki tare; kuma yana sauƙaƙa tsallake koyon.",
    "Babi na 1 yana amfani da AI don tsara aikin: babbar tambaya, buɗe aikin, matakai da rubric, kuma yana koya wa ɗalibai bincike da AI cikin gaskiya. Babi na 2 yana gudanar da aikin: dokokin AI a kowane mataki, kayan aikin ƙungiya, wuraren dubawa da ke nuna koyon kowane ɗalibi, da samfurin jama'a tare da bayyana amfanin AI da gaskiya.",
    "Ku yi amfani da kayan aikin da aka amince da su kaɗai don duk abin da ɗalibai ke yi, kuma kada ku saka bayanan ɗalibai a kayan aikin da ba a amince da su ba. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku tsara darasin PBL na mako biyu zuwa huɗu: babbar tambaya, abin buɗe aiki, matakai huɗu zuwa shida kowanne da matakin amfani da AI, rubric na samfurin ƙarshe da na tsarin aiki, wurin dubawa na kowane ɗalibi a kowane mataki, samfurin littafin AI na ɗalibi, da shirin baje-koli a gaban masu sauraro na gaske. Ku nemi abokin aiki ya duba shi, sannan ku gyara sashe ɗaya bisa shawararsa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Malaman aji, masu horar da malamai da shugabannin makaranta da ke gudanar, ko suke son gudanar, da darussan koyo ta hanyar ayyuka (PBL), kuma suke buƙatar shiri don ɗaliban da ke da kayan AI.",
    startingPoint: "Suna iya tsara darussa da ayyukan ƙungiya, kuma suna ba da maki ga samfurin ƙarshe. Wasu sun taɓa gudanar da aiki. Kaɗan ne suka taɓa kafa dokokin AI a kowane matakin aiki, ko suka gina wuraren dubawa da ke nuna koyon kowane ɗalibi da kansa.",
    gap: "Ɗalibi yana iya tambayar AI amsar babbar tambaya cikin daƙiƙoƙi, kuma samfurin ƙungiya yana iya ɓoye wanda ya koyi me. Malamai suna buƙatar tsara ayyuka inda bincike ya kasance na gaske, amfani da AI ya kasance a sarari kuma da gaskiya a kowane mataki, kuma koyon kowane ɗalibi ya bayyana.",
    constraints: [
      "Lokaci: gajerun darussa da suka dace da lokacin shiri; darasin kansa yana ɗaukar mako biyu zuwa huɗu",
      "Na'urori: kwamfutar makaranta mai mataimakin AI da gundumar makaranta ta yarda da shi",
      "Sirri: sunayen ɗalibai da makinsu ba sa shiga kayan aikin da gundumar ba ta amince da su ba",
      "Dokokin makaranta game da hotuna, sunaye, rikodi da rabawa a intanet suna aiki a baje-kolin",
      "Ma'aunin karatu (standards) daga majiyar hukuma suke zuwa, ba daga AI ba"
    ],
    prerequisites: "Babu. Malaman da suke sababbi ga kayan AI za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku ra'ayin aiki", action: "lissafa muhimman abubuwan aiki mai ƙarfi da rubuta babbar tambaya da AI ba zai iya amsawa kawai ba", standard: "da tambaya ta wurinku ko ta kanku, kuma a buɗe" },
    { id: "O2", condition: "Idan aka ba ku ajinku, darasinku, ma'aunin karatu da tsawon aikin", action: "amfani da AI don rubuta daftarin abin buɗe aiki, matakai huɗu zuwa shida da rubric mai sassa biyu", standard: "an duba shi da ma'aunin karatunku, kuma jadawalin ya yiwu" },
    { id: "O3", condition: "Idan ɗalibai suna bincike kan batun aiki", action: "koyar da tsarin bincika, nemo, tabbatar da ambaton majiya, tare da littafin bincike", standard: "ta yadda kowane bayani da aka yi amfani da shi an tabbatar da shi da majiya ta gaske" },
    { id: "O4", condition: "Idan aka ba ku matakan aikinku", action: "kafa matakin amfani da AI ga kowane mataki da ba ɗalibai samfurin littafin AI", standard: "tare da dalilin da ɗalibai za su fahimta ga kowane mataki" },
    { id: "O5", condition: "Idan aka ba ku aikin ƙungiya", action: "tsara wurin dubawa na kowane ɗalibi a kowane mataki", standard: "ta yadda kowane ɗalibi zai iya bayyana aikin ƙungiyar da nasa sashe" },
    { id: "O6", condition: "Idan aikin ya ƙare", action: "tsara baje-koli a gaban jama'a mai masu sauraro na gaske, bayyana amfanin AI da tunani kan koyo na ɗalibai", standard: "kuna bin dokokin makarantarku game da hotuna, sunaye da rabawa a intanet" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara aikin da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Muhimman abubuwan PBL da matsayin AI a cikinsu",
          minutes: 5,
          goal: "Ambaci muhimman abubuwan aiki mai ƙarfi, da inda AI ke taimakawa ko ke cutarwa.",
          text: [
            "Ayyuka masu ƙarfi suna da wasu muhimman abubuwa iri ɗaya: babbar tambaya a buɗe da ke da muhimmanci ga ɗalibai; bincike mai ɗorewa na tsawon lokaci; aiki na gaske da ke da alaƙa da duniya ta gaske; murya da zaɓin ɗalibai; suka da gyara; da samfurin jama'a da ake nuna wa masu sauraro fiye da malami.",
            "AI zai iya taimaka wa malami ya tsara duk wannan da sauri, kuma zai iya taimaka wa ɗalibai su tattara ra'ayoyi, su yi bincike, su rubuta daftari kuma su sami ra'ayi. Amma kuma yana iya katse binciken: ɗalibi yana iya tambayar AI amsar babbar tambaya cikin daƙiƙoƙi.",
            "Don haka ku tsara aikin da wannan a zuciya. Babbar tambaya ta zama ta wurinku ko ta kanku sosai har AI ba zai iya amsa ta kawai ba (\"Ta yaya za mu rage ɓarnar abinci a ɗakin cin abincin makarantarmu?\" maimakon \"Me ke haddasa ɓarnar abinci?\"), kuma koyon ya bayyana a tsarin aikin, ba a samfurin kaɗai ba."
          ],
          words: [["Koyo ta hanyar ayyuka (PBL)", "koyo ta hanyar yin aiki na tsawon lokaci kan tambaya ta gaske da nuna samfuri ga masu sauraro."], ["Babbar tambaya (driving question)", "tambaya a buɗe da ke jagorantar dukkan aikin."], ["Na gaske (authentic)", "mai alaƙa da mutane, wurare da matsaloli na gaske."]],
          slides: [
            { title: "Muhimman abubuwan PBL", bullets: ["Babbar tambaya; bincike mai ɗorewa", "Aiki na gaske; murya da zaɓi", "Suka da gyara; samfurin jama'a"] },
            { title: "AI yana iya taimakawa ko ya katse koyo", bullets: ["Yana taimakawa wajen tsarawa, tattara ra'ayoyi, bincike, daftari", "Yana iya amsa tambaya ta gama-gari cikin daƙiƙoƙi"] },
            { title: "Ku tsara da wannan a zuciya", bullets: ["Babbar tambaya ta wurinku ko ta kanku", "Koyo yana bayyana a tsarin aikin"] }
          ],
          tryIt: "Ku nemi kayan AI ya amsa wata babbar tambaya da kuka taɓa amfani da ita ko kuka gani. Sannan ku sake rubuta tambayar ta yadda za ta zama ta wurinku ko ta kanku sosai har AI ba zai iya amsa ta kawai ba.",
          youCanNow: "ambaci muhimman abubuwan PBL mai ƙarfi da tsara manyan tambayoyi da AI ba zai iya katsewa ba.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne ɗaya daga cikin muhimman abubuwan PBL?", options: ["Takardar aiki da malami kaɗai ke ba da maki", "Jarabawa ɗaya a ƙarshe", "Suka da gyara", "Batun da malami ke zaɓa ba tare da zaɓin ɗalibai ba"], answer: 2, why: "Ayyuka masu ƙarfi suna da suka da gyara, tare da murya, zaɓi da samfurin jama'a." },
            { objective: "O1", q: "Babbar tambayarku ita ce \"Me ke haddasa gurɓacewar iska?\" Ta yaya za ku canja ta?", options: ["Ku mayar da ita ta wurinku, kamar \"Ta yaya za mu rage motocin da ke tsaye da inji a kunne a wajen makarantarmu?\"", "Ku gajarta ta", "Ku ƙara bayanai a cikinta", "Ku nemi AI ya fara amsa ta"], answer: 0, why: "Tambaya ta wurinku ko ta kanku tana hana AI amsa ta kawai." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Manyan tambayoyi, buɗe aiki, matakai da rubric",
          minutes: 6,
          goal: "Amfani da AI don rubuta daftarin babbar tambaya, abin buɗe aiki, matakai da rubric na aikin.",
          text: [
            "Ku ba AI ajin, darasin, ma'aunin karatu (daga majiyarku ta hukuma), tsawon aikin, da yanayin al'ummarku (a gama-gari). Ku nemi zaɓuɓɓuka biyar na babbar tambaya, sannan ku zaɓi ɗaya ku gyara ta tare da ɗalibai idan kuna iya.",
            "Ku nemi abin buɗe aiki da ke tayar da sha'awa (baƙo, wani abu mai ban mamaki, matsalar wurinku, ziyarar wani wuri) da matakai huɗu zuwa shida: bincike, shiri, daftarin farko ko samfurin gwaji, suka, gyara, samfurin ƙarshe. Ku nemi ilimin da kowane mataki ke buƙata, don ku tsara ƙananan darussa.",
            "Ku nemi rubric mai sassa biyu: samfurin ƙarshe (abin da ke ciki da ingancinsa) da tsarin aiki (aiki tare, gyara, amfani da shaida). Ku duba cewa kowane sashe na rubric ya dace da ma'aunin karatunku, kuma jadawalin ya yiwu; AI yakan cushe abubuwa da yawa."
          ],
          steps: ["Ku ba da aji, darasi, ma'aunin karatu, tsawon aiki da yanayi.", "Ku zaɓi babbar tambaya ku gyara ta.", "Ku rubuta daftarin abin buɗe aiki da matakai 4-6.", "Ku lissafa ilimin da kowane mataki ke buƙata.", "Ku rubuta daftarin rubric na samfuri da na tsarin aiki; ku duba ma'aunin karatu da jadawali."],
          words: [["Abin buɗe aiki (entry event)", "ayyukan da ke fara aiki kuma ke tayar da tambayoyi."], ["Mataki (milestone)", "wurin dubawa inda wani sashe na aikin ya kamata ya kammala."], ["Suka (critique)", "ra'ayi mai tsari kan aikin da ake ci gaba da yi."]],
          slides: [
            { title: "Ku ba AI bayanan yanayi", bullets: ["Aji, darasi, ma'aunin karatu", "Tsawon aiki, yanayin al'umma"] },
            { title: "Ku rubuta daftarin tsarin", bullets: ["Zaɓuɓɓukan babbar tambaya", "Abin buɗe aiki", "Matakai 4-6 da ilimin da suke buƙata"] },
            { title: "Rubric mai sassa biyu", bullets: ["Samfuri: abin da ke ciki da inganci", "Tsarin aiki: aiki tare, gyara, shaida", "Ku duba ma'aunin karatu da jadawali"] }
          ],
          tryIt: "Ku yi amfani da AI don rubuta daftarin babbar tambaya, abin buɗe aiki, matakai da rubric mai sassa biyu don aikin da za ku iya koyarwa. Ku daidaita jadawalin ya dace da kalandarku.",
          youCanNow: "tsara tsarin aiki da sauri da AI, da duba shi da ma'aunin karatu da lokaci.",
          quickCheck: [
            { objective: "O2", q: "Wane sassa biyu ne rubric na PBL ya kamata ya ba da maki?", options: ["Rubutu daidai da tsabta", "Samfurin ƙarshe da tsarin aiki", "Zuwa makaranta da aikin gida", "Sauri da tsawo"], answer: 1, why: "Ba da maki ga tsarin aiki (aiki tare, gyara, shaida) tare da samfuri yana ba da lada ga koyon." },
            { objective: "O2", q: "Jadawalin aikin da AI ya yi yana cushe matakai takwas cikin mako biyu. Me za ku yi?", options: ["Ku bar shi, tunda AI ne ya tsara shi", "Ku ƙara matakai", "Ku cire rubric don a sami lokaci", "Ku rage shi zuwa shiri mai yiwuwa, kamar matakai huɗu zuwa shida"], answer: 3, why: "AI yakan cushe abubuwa da yawa, don haka ku duba cewa jadawalin ya yiwu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bincike da AI: nema, tabbatarwa, ambaton majiya",
          minutes: 5,
          goal: "Koya wa ɗalibai tsarin bincike da ke amfani da AI ba tare da amincewa da shi ido rufe ba.",
          text: [
            "A ayyuka, ɗalibai suna bincike. AI zai iya taimaka musu su fahimci batu, su fito da tambayoyi kuma su sami kalmomin nema, amma yana iya ƙirƙirar bayanai da majiyoyi. Ku koyar da tsari mai matakai uku: Bincika da AI (\"Waɗanne tambayoyi zan yi game da ɓarnar abinci a makarantu?\" \"Waɗanne kalmomi zan nema?\"); Nemo majiyoyi na gaske (injunan nema, rumbunan bayanai na ɗakin karatu, hira da mutane, bayanan wurinku); Tabbatar da kuma ambaci majiya (ku duba kowane bayani da aƙalla majiya ta gaske ɗaya, ku ambaci wannan majiyar, ba AI ba).",
            "Majiyoyi na farko (primary sources) ƙarfi ne na PBL: ɗalibai za su iya yin hira da ma'aikatan ɗakin cin abinci, su yi binciken ra'ayin abokan aji (ba tare da sunaye ba), su auna ɓarnar da kansu. AI ba zai iya yi musu wannan ba, kuma wannan yana sa binciken ya kasance na gaske.",
            "Ku sa ɗalibai su riƙe littafin bincike: tambaya, majiya, abin da suka koya, da yadda suka tabbatar da shi."
          ],
          steps: ["Bincika: ku yi amfani da AI don fito da tambayoyi da kalmomin nema.", "Nemo majiyoyi na gaske: nema, rumbunan bayanai, hira, bayanan wurinku.", "Ku tabbatar da kowane bayani da majiya ta gaske.", "Ku ambaci majiya ta gaske, ba AI ba.", "Ku riƙe littafin bincike."],
          words: [["Majiya ta farko (primary source)", "shaida daga tushe kai tsaye, kamar hira, binciken ra'ayi ko aunawa."], ["Littafin bincike", "rubutun tambayoyi, majiyoyi, abin da aka gano da yadda aka tabbatar."]],
          slides: [
            { title: "Tsarin bincike mai matakai uku", bullets: ["Bincika da AI: tambayoyi, kalmomin nema", "Nemo majiyoyi na gaske", "Tabbatar, kuma ku ambaci majiya ta gaske"] },
            { title: "Majiyoyi na farko", bullets: ["Hira, binciken ra'ayi ba tare da sunaye ba, aunawa", "AI ba zai iya yi musu wannan ba"] },
            { title: "Littafin bincike", bullets: ["Tambaya, majiya, abin da aka koya, yadda aka tabbatar"] }
          ],
          tryIt: "Ku rubuta tsarin binciken da samfurin littafin bincike don aikinku. Ku gwada shi da kanku kan tambayar bincike ɗaya daga aikin.",
          youCanNow: "koya wa ɗalibai bincike da AI yayin da suke dogara ga majiyoyi na gaske da aka tabbatar.",
          quickCheck: [
            { objective: "O3", q: "Me ya kamata ɗalibai su ambata a matsayin majiya a aikinsu?", options: ["Majiya ta gaske da suka duba", "Kayan AI", "Babu komai, idan AI ya taimaka", "Sunan injin nema"], answer: 0, why: "Tsarin shi ne a tabbatar da kowane bayani da majiya ta gaske, a ambaci wannan majiyar." },
            { objective: "O3", q: "Wata ƙungiya tana son sanin yawan abincin da ɗakin cin abincinsu ke zubarwa. Wane mataki ne ya fi ƙarfi?", options: ["Su tambayi AI adadi", "Su kwafi adadi daga kowane shafin intanet", "Su auna ɓarnar da kansu ko su yi hira da ma'aikatan ɗakin cin abinci", "Su yi hasashe su ci gaba"], answer: 2, why: "Majiyoyi na farko suna sa binciken ya kasance na gaske, kuma AI ba zai iya tattara su a madadin ɗalibai ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara aikin da AI",
        questions: [
          { objective: "O1", q: "Wace babbar tambaya ce ta fi wuya AI ya amsa kawai?", options: ["Me ke haddasa ɓarnar abinci?", "Mene ne ɓarnar abinci?", "Ta yaya za mu rage ɓarnar abinci a ɗakin cin abincinmu?", "Wane ne ya ƙirƙiro takin gargajiya (compost)?"], answer: 2, why: "Tambayoyi na wurinku suna buƙatar binciken ɗalibai da kansu." },
          { objective: "O2", q: "Mene ne abin buɗe aiki?", options: ["Ayyukan da ke fara aiki kuma ke tayar da tambayoyi", "Gabatarwar ƙarshe", "Jarabawa", "Takardar izinin tafiya ziyara"], answer: 0, why: "Yana tayar da sha'awa a farko." },
          { objective: "O2", q: "Rubric na PBL mai sassa biyu yana ba da maki ga:", options: ["Samfurin ƙarshe kaɗai", "Gabatarwa kaɗai", "Zuwa makaranta kaɗai", "Samfurin da tsarin aiki"], answer: 3, why: "Tsarin aiki yana nuna koyo a kan hanya." },
          { objective: "O3", q: "Ɗalibai ya kamata su ambata a matsayin majiya:", options: ["Kayan AI", "Majiya ta gaske da suka tabbatar", "Babu komai", "Wikipedia kaɗai"], answer: 1, why: "AI ba majiya amintacciya ba ne; majiyoyi na gaske su ne." },
          { objective: "O3", q: "Wanne ne majiya ta farko?", options: ["Taƙaitawar AI", "Amsar chatbot", "Taƙaitawar littafin karatu", "Hira da ma'aikatan ɗakin cin abinci"], answer: 3, why: "Shaida daga tushe kai tsaye tana sa bincike ya kasance na gaske." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanarwa da auna aikin",
      lessons: [
        {
          objectives: ["O4"],
          title: "Dokokin AI a kowane mataki da littafin AI na ɗalibi",
          minutes: 5,
          goal: "Kafa matakin amfani da AI ga kowane mataki, da littafin da ɗalibai ke riƙewa.",
          text: [
            "Doka ɗaya ta AI don dukkan aiki ba ta da tsari sosai. Ku kafa mataki ga kowane matakin aiki, ta amfani da ma'aunin makarantarku. Misali: tattara ra'ayoyi, an yarda da AI don ra'ayoyi; bincike, AI don tambayoyi da kalmomin nema kaɗai; daftarin farko, babu AI (ɗalibai suna nuna tunaninsu); suka, an yarda da ra'ayin AI tare da ra'ayin abokan aji; samfurin ƙarshe, an yarda da kayan AI don zane da kammalawa, tare da bayyanawa.",
            "Ɗalibai suna riƙe littafin AI: kwanan wata, kayan aiki, abin da suka tambaya, abin da suka yi amfani da shi, da abin da suka canja. Yana ɗaukar minti ɗaya kowane rubutu, kuma yana sa amfani da AI ya bayyana kuma ya kasance da gaskiya.",
            "Ku bayyana dalilai. Ɗalibai suna bin dokokin da suka fahimta: \"Daftarin farko babu AI ne domin muna buƙatar ganin tunaninku kafin kowa ya taimaka.\""
          ],
          steps: ["Ku lissafa matakan aikin.", "Ku kafa matakin amfani da AI ga kowanne.", "Ku rubuta dalilin kowane mataki.", "Ku ba ɗalibai samfurin littafin AI.", "Ku duba littattafan a kowane mataki."],
          words: [["Littafin AI", "rubutun ɗalibi na lokacin da kuma yadda ya yi amfani da AI."], ["Bayyanawa (disclosure)", "faɗin a fili yadda aka yi amfani da AI."]],
          slides: [
            { title: "Mataki ga kowane sashe", bullets: ["Tattara ra'ayoyi: an yarda da ra'ayoyi", "Bincike: tambayoyi da kalmomin nema", "Daftarin farko: babu AI", "Samfurin ƙarshe: an yarda da kaya, tare da bayyanawa"] },
            { title: "Littafin AI", bullets: ["Kwanan wata, kayan aiki, abin da aka tambaya", "Abin da aka yi amfani da shi, abin da aka canja"] },
            { title: "Ku bayyana dalili", bullets: ["\"Muna buƙatar ganin tunaninku tukuna\""] }
          ],
          tryIt: "Ku rubuta matakin amfani da AI da dalili a layi ɗaya ga kowane matakin aikinku, kuma ku yi samfurin littafin AI na shafi ɗaya ga ɗalibai.",
          youCanNow: "kafa dokokin AI a sarari, mataki-mataki, don aiki, da sa amfani da AI ya bayyana.",
          quickCheck: [
            { objective: "O4", q: "Me littafin AI na ɗalibi yake rubutawa?", options: ["Makin ƙarshe kaɗai", "Kwanan wata, kayan aiki, abin da aka tambaya, abin da aka yi amfani da shi da abin da aka canja", "Kalmar sirrin ɗalibin", "Tsawon kowane lokacin darasi"], answer: 1, why: "Littafin yana sa amfani da AI ya bayyana kuma ya kasance da gaskiya, gajeren rubutu ɗaya a lokaci ɗaya." },
            { objective: "O4", q: "Wani ɗalibi ya tambayi dalilin da yasa daftarin farko babu AI. Me za ku ce?", options: ["Domin ba a taɓa yarda da AI ba", "Domin dokokin sun ce haka", "Domin AI yana da jinkiri sosai", "Domin muna buƙatar ganin tunaninka kafin kowa ya taimaka"], answer: 3, why: "Ɗalibai suna bin dokokin da suka fahimta, don haka ku ba da dalili." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Wuraren dubawa da ke nuna koyon kowane ɗalibi",
          minutes: 6,
          goal: "Tsara wuraren dubawa da ke nuna abin da kowane ɗalibi ya koya a aikin ƙungiya.",
          text: [
            "Samfurin ƙungiya yana iya ɓoye wanda ya koyi me, kuma AI yana ƙara sauƙaƙa hakan. Ku ƙara wuraren dubawa na kowane ɗalibi a kowane mataki: ɗan gwaji kafin fita (exit ticket) kan ilimin wannan mataki, ganawa ta minti biyu, rubutaccen tunani kan koyo, ko bayanin kowane ɗalibi kan wani sashe na aikin ƙungiyar.",
            "Ku yi amfani da AI don taimaka muku shiri: tambayoyin kowane wurin dubawa, tambayoyin ganawa, da tambayoyin tunani (\"Me ka canja bayan suka, kuma me yasa?\"). Kada ku saka sunayen ɗalibai da makinsu a kayan aikin da ba a amince da su ba yayin da kuke rubuta sakamako.",
            "Ku yi amfani da kayan aikin ƙungiya da kyau: AI zai iya taimaka wa ƙungiyoyi su raba ayyuka, su tsara jadawali kuma su sami ra'ayi kan daftari bisa rubric. Amma kowane ɗalibi ya kamata ya iya bayyana aikin ƙungiyar da nasa gudummawa."
          ],
          steps: ["Ku ƙara wurin dubawa na kowane ɗalibi a kowane mataki.", "Ku yi amfani da AI don rubuta tambayoyin dubawa, ganawa da tunani.", "Ku rubuta sakamako a littafin makinku ko a kayan aikin da aka amince da shi.", "Ku bar ƙungiyoyi su yi amfani da AI don tsari da ra'ayi kan daftari yadda aka yarda.", "Kowane ɗalibi yana bayyana aikin da nasa sashe."],
          words: [["Wurin dubawa (checkpoint)", "ɗan dubawa na kowane ɗalibi kan koyo yayin aiki."], ["Ganawa (conference)", "gajeriyar hira tsakanin malami da ɗalibi ɗaya game da aikinsa."], ["Tunani kan koyo (reflection)", "rubutu ko magana game da abin da kuka koya da yadda kuka koya."]],
          slides: [
            { title: "Samfurin ƙungiya yana iya ɓoye koyo", bullets: ["Ku ƙara wuraren dubawa na kowane ɗalibi", "Gwajin fita, ganawa, tunani kan koyo"] },
            { title: "AI yana taimaka muku shiri", bullets: ["Tambayoyin dubawa da na ganawa", "Tambayoyin tunani kan koyo", "Ana ajiye bayanai a kayan aikin da aka amince da su"] },
            { title: "Kayan ƙungiya, shaidar kowane ɗalibi", bullets: ["AI don tsari da ra'ayi kan daftari", "Kowane ɗalibi yana bayyana aikin da nasa sashe"] }
          ],
          tryIt: "Ku yi amfani da AI don rubuta daftarin wurin dubawa na kowane ɗalibi ga kowane mataki (tambayar gwajin fita ɗaya, tambayar ganawa ɗaya ko tambayar tunani ɗaya).",
          youCanNow: "auna koyon kowane ɗalibi a cikin aikin ƙungiya.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne wurin dubawa na ɗalibi ɗaya?", options: ["Ganawa ta minti biyu da ɗalibi ɗaya", "Fosta na ƙarshe na ƙungiyar", "Maki ɗaya na ƙungiya don dukkan aikin", "Ƙuri'ar aji"], answer: 0, why: "Wuraren dubawa na kowane ɗalibi suna nuna abin da kowane ɗalibi ya koya, ba ƙungiyar kaɗai ba." },
            { objective: "O5", q: "Kuna rubuta sakamakon wuraren dubawa da taimakon AI. Me za ku yi?", options: ["Ku liƙa sunayen ɗalibai da makinsu a kowane kayan AI", "Ku saka sakamakon a shafin intanet na aji", "Kada ku saka sunaye da maki a kayan aikin da gundumar ba ta amince da su ba", "Ku tsallake rubuta sakamako"], answer: 2, why: "Sunayen ɗalibai da makinsu ba sa shiga kayan aikin da ba a amince da su ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Samfurin jama'a, baje-koli da tunani kan koyo",
          minutes: 6,
          goal: "Tsara baje-koli na gaske tare da bayyana amfanin AI da gaskiya da tunani kan koyo na ɗalibai.",
          text: [
            "Masu sauraro na gaske suna ɗaga ingancin aiki: iyaye, mutanen al'umma, ƙwararru na wurin, hukumar makaranta ko kamfanin da ke fuskantar matsalar. Ku tsara baje-kolin da wuri, kuma ku gayyaci mutane da gajeren saƙo (AI zai iya rubuta daftarinsa).",
            "Ku nemi ƙungiyoyi su haɗa bayanin amfanin AI da samfurinsu (\"Mun yi amfani da AI don tattara ra'ayoyin zane da duba nahawu; dukkan bayanan bincike mu muka tattara su da kanmu\"). Bayyanawa da gaskiya sashe ne na mutuncin samfurin, kuma masu sauraro suna girmama shi.",
            "Ku kare ɗalibai: ku bi dokokin makarantarku game da hotuna, sunaye da rikodi, da rabawa a intanet. Ku ƙare da tunani kan koyo: abin da ɗalibai suka koya game da batun, game da aiki tare, da lokacin da AI ya taimaka ko ya kawo cikas."
          ],
          steps: ["Ku zaɓi masu sauraro na gaske ku gayyace su da wuri.", "Ƙungiyoyi suna ƙara bayanin amfanin AI a samfurinsu.", "Ku bi dokokin makaranta game da hotuna, sunaye da rabawa a intanet.", "Ku gudanar da baje-kolin.", "Ku ƙare da tunani kan koyo, aiki tare da AI."],
          words: [["Baje-koli (showcase)", "taron da ɗalibai ke gabatar da aikinsu ga masu sauraro."], ["Masu sauraro na gaske", "mutane na gaske da suka damu da aikin, fiye da malami."]],
          slides: [
            { title: "Masu sauraro na gaske", bullets: ["Iyaye, ƙwararru, al'umma, hukumar makaranta", "Ku gayyace su da wuri"] },
            { title: "Bayanin AI a kowane samfuri", bullets: ["Abin da AI ya yi da abin da ɗalibai suka yi", "Gaskiya sashe ne na mutunci"] },
            { title: "Ku kare, ku yi tunani", bullets: ["Dokokin makaranta kan hotuna da sunaye", "Tunani: batu, aiki tare, AI"] }
          ],
          tryIt: "Aikin ƙarshe: ku haɗa darasin PBL ɗinku (babbar tambaya, abin buɗe aiki, matakai da matakan AI, rubric na samfuri da na tsarin aiki, wuraren dubawa na kowane ɗalibi, littafin AI na ɗalibi, shirin baje-koli). Ku raba shi da abokin aiki, ku gyara sashe ɗaya bisa shawararsa.",
          youCanNow: "jagorantar koyo ta hanyar ayyuka inda AI ke tallafa wa bincike na gaske, kuma koyon kowane ɗalibi ya bayyana.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne masu sauraro na gaske ga aiki?", options: ["Malami kaɗai", "Ƙwararru na wurin ko iyayen da suka damu da matsalar", "Chatbot na AI", "Ɗalibai a ƙungiya ɗaya"], answer: 1, why: "Mutane na gaske da suka damu da aikin suna ɗaga ingancinsa." },
            { objective: "O6", q: "Wani ɗan uwa a baje-kolin yana son saka hotunan ɗalibai a intanet. Me za ku duba?", options: ["Babu komai; taron jama'a ne", "Ko hotunan suna da kyau", "Ko AI zai iya gyara su", "Dokokin makarantarku game da hotuna, sunaye da rabawa a intanet"], answer: 3, why: "Ku kare ɗalibai ta hanyar bin dokokin makaranta kan hotuna da rabawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanarwa da auna aikin",
        questions: [
          { objective: "O4", q: "Me yasa za a kafa matakin amfani da AI ga kowane mataki maimakon ɗaya don dukkan aikin?", options: ["AI ne ke buƙatar haka", "Ya fi gajarta", "Matakai daban-daban suna gina ƙwarewa daban-daban", "Don rikita ɗalibai"], answer: 2, why: "Daftarin farko yana iya buƙatar babu AI, yayin da kammalawa za ta iya amfani da shi." },
          { objective: "O4", q: "Me littafin AI na ɗalibi yake rubutawa?", options: ["Kwanan wata, kayan aiki, abin da aka tambaya, aka yi amfani da shi da aka canja", "Maki", "Kalmomin sirri", "Bayanan malami"], answer: 0, why: "Yana sa amfani da AI ya bayyana kuma ya kasance da gaskiya." },
          { objective: "O5", q: "Ta yaya za ku ga abin da kowane ɗalibi ya koya a aikin ƙungiya?", options: ["Ku ba da maki ga samfurin ƙungiya kaɗai", "Ku ƙara wuraren dubawa na kowane ɗalibi a kowane mataki", "Ku tambayi AI", "Ku tsallake aunawa"], answer: 1, why: "Dubawa ta kowane ɗalibi tana nuna koyon kowane ɗalibi." },
          { objective: "O6", q: "Me ya kamata bayanin amfanin AI na ƙungiya ya faɗa?", options: ["Abin da AI ya yi da abin da ɗalibai suka yi", "Babu komai", "Farashin kayan aikin kaɗai", "Cewa babu AI a duniya"], answer: 0, why: "Bayyanawa da gaskiya sashe ne na mutunci." },
          { objective: "O6", q: "Kafin saka aikin ɗalibai a intanet bayan baje-kolin, ku duba:", options: ["Ra'ayin AI", "Babu komai", "Nau'in rubutu (font) kaɗai", "Dokokin makarantarku game da hotuna, sunaye da rabawa a intanet"], answer: 3, why: "Dokokin sirrin ɗalibai suna aiki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI da Koyo ta Hanyar Ayyuka (PBL)",
    questions: [
      { objective: "O1", q: "PBL yana nufin ɗalibai suna koyo ta hanyar:", options: ["Karanta littattafan karatu kaɗai", "Yin aiki na tsawon lokaci kan tambaya ta gaske da nuna samfuri", "Yin ƙananan gwaje-gwaje kowace rana kaɗai", "Kallon bidiyo"], answer: 1, why: "Wannan shi ne zuciyar PBL." },
      { objective: "O1", q: "Babbar tambaya ya kamata ta kasance:", options: ["Ta sirri", "Wadda za a iya amsawa da kalma ɗaya", "A buɗe, kuma mai ma'ana ga ɗalibai", "Daga rumbun tambayoyin jarabawa"], answer: 2, why: "Tana jagorantar bincike mai ɗorewa." },
      { objective: "O1", q: "Mayar da babbar tambaya ta wurinku yana taimakawa domin:", options: ["Ba ta buƙatar bincike", "Ta fi gajarta", "AI ba zai iya amsa ta kawai ba", "Tana guje wa ma'aunin karatu"], answer: 2, why: "Tambayoyi na wurinku suna buƙatar bincike na gaske." },
      { objective: "O1", q: "Wanne ne muhimmin abu na PBL?", options: ["Samfurin jama'a ga masu sauraro na gaske", "Babu gyara", "Malami kaɗai ne mai sauraro", "Babu zaɓin ɗalibai"], answer: 0, why: "Samfuran jama'a suna ɗaga inganci." },
      { objective: "O2", q: "Matakai (milestones) su ne:", options: ["Matakan rubric", "Maki", "Ziyarar wurare", "Wuraren dubawa inda sassan aikin ya kamata su kammala"], answer: 3, why: "Suna ba aikin tsari." },
      { objective: "O2", q: "Ga kowane mataki, AI zai iya lissafa:", options: ["Sunayen ɗalibai", "Ilimin da yake buƙata, don tsara ƙananan darussa", "Maki", "Kalmomin sirri"], answer: 1, why: "Wannan yana taimakawa wajen tsara koyarwa." },
      { objective: "O2", q: "Jadawalin aikin da AI ya yi sau da yawa:", options: ["Yana tsallake matakai", "Yana barin lokaci mai yawa", "Koyaushe cikakke ne", "Yana cushe abubuwa da yawa"], answer: 3, why: "Ku duba shi da kalandarku." },
      { objective: "O3", q: "Mataki na 1 na tsarin bincike shi ne:", options: ["Ambaton AI a matsayin majiya", "Kwafar amsar AI", "Bincika da AI: tambayoyi da kalmomin nema", "Tsallake bincike"], answer: 2, why: "AI yana taimakawa wajen fara bincike, ba gama shi ba." },
      { objective: "O3", q: "Kowane bayanin da ɗalibai ke amfani da shi ya kamata:", options: ["A tabbatar da shi da majiya ta gaske", "A ɗauko shi daga AI", "Kada a tabbatar da shi", "A ƙirƙira shi"], answer: 0, why: "AI yana iya ƙirƙirar bayanai." },
      { objective: "O3", q: "Binciken ra'ayin abokan aji ba tare da sunaye ba shi ne:", options: ["Taƙaitawar AI", "Majiya ta farko", "Bita ta biyu (secondary)", "Abin da ba a yarda da shi ba"], answer: 1, why: "Ɗalibai suna tattara shaida daga tushe kai tsaye." },
      { objective: "O3", q: "Littafin bincike yana rubuta:", options: ["Tambaya, majiya, abin da aka koya da yadda aka tabbatar da shi", "Kalmomin sirri", "Maki", "Odar abincin rana"], answer: 0, why: "Yana rubuta bincike na gaske." },
      { objective: "O4", q: "Me yasa daftarin farko zai iya zama mataki babu AI?", options: ["Domin daftari ba shi da muhimmanci", "AI haramun ne", "Don a rage kuɗi", "Don a ga tunanin ɗalibai da kansu kafin a taimaka"], answer: 3, why: "Tunani tukuna, taimako daga baya." },
      { objective: "O4", q: "Dokokin da ɗalibai ke fahimta su ne:", options: ["Dokokin sirri", "Dokokin da aka bayyana dalilansu", "Dokokin da ke canjawa kowace rana", "Dokoki daga AI"], answer: 1, why: "Dalilai suna sa ɗalibai su karɓi dokokin." },
      { objective: "O5", q: "Wurin dubawa na ɗalibi ɗaya zai iya zama:", options: ["Makin ƙungiya", "Samfurin ƙarshe na ƙungiya kaɗai", "Ganawa ta minti biyu", "Babu komai"], answer: 2, why: "Yana nuna koyon ɗalibi ɗaya." },
      { objective: "O5", q: "Tambayoyin tunani kan koyo suna tambayar ɗalibai:", options: ["Makinsu", "Kalmar sirrinsu", "Abin da suka canja da dalili", "Babu komai"], answer: 2, why: "Tunani kan koyo yana zurfafa koyo." },
      { objective: "O5", q: "Kowane ɗalibi a ƙungiya ya kamata ya iya:", options: ["Bayyana aikin ƙungiyar da nasa sashe", "Gabatar da shafin bayaninsa (slide) kaɗai", "Yin shiru", "Barin AI ya bayyana"], answer: 0, why: "Fahimta tare sashe ne na koyo." },
      { objective: "O6", q: "Masu sauraro na gaske su ne:", options: ["Babu kowa", "Malami kaɗai", "Kayan AI", "Mutane na gaske da suka damu da aikin"], answer: 3, why: "Masu sauraro na gaske suna ɗaga inganci." },
      { objective: "O6", q: "Bayanin amfanin AI a samfuri yana nuna:", options: ["Farashin AI", "Abin da AI ya yi da abin da ɗalibai suka yi", "Makin ɗalibai", "Babu komai"], answer: 1, why: "Bayyanawa a fili yana gina amana." },
      { objective: "O6", q: "Hotunan ɗalibai a baje-kolin ya kamata su bi:", options: ["Dokokin kamfanin kayan aiki", "Babu dokoki", "Abin da ke tashe a kafofin sada zumunta", "Dokokin makaranta kan hotuna da sunaye"], answer: 3, why: "Sirrin ɗalibai yana da muhimmanci." },
      { objective: "O6", q: "Tunani na ƙarshe kan koyo ya kamata ya ƙunshi:", options: ["Kayan AI kaɗai", "Maki kaɗai", "Batun, aiki tare da lokacin da AI ya taimaka ko ya kawo cikas", "Babu komai"], answer: 2, why: "Ɗalibai suna koyo daga tunani kan dukkan abubuwa uku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      7,
      8,
      11,
      13,
      15,
      16,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Babbar tambaya da buɗe aiki",
        objective: "O1",
        notYet: "Tambayar a rufe take ko AI zai iya amsa ta, ko babu abin buɗe aiki.",
        meets: "Babbar tambaya a buɗe, ta wurinku ko ta kanku, da abin buɗe aiki da ke tayar da tambayoyi.",
        exceeds: "Ɗalibai sun taimaka wajen zaɓa ko gyara tambayar."
      },
      {
        name: "Matakai da rubric",
        objective: "O2",
        notYet: "Matakai ƙasa da huɗu, ko rubric yana ba da maki ga samfurin kaɗai.",
        meets: "Matakai huɗu zuwa shida a jadawali mai yiwuwa, da rubric na samfuri da na tsarin aiki, wanda ya dace da ma'aunin karatu.",
        exceeds: "Kowane mataki yana lissafa ilimin da yake buƙata da ɗan darasin da zai koyar da shi."
      },
      {
        name: "Matakan AI da littafi",
        objective: "O4",
        notYet: "Doka ɗaya ta AI don dukkan aikin, ko babu littafin AI na ɗalibi.",
        meets: "Kowane mataki yana da matakin amfani da AI, kuma akwai samfurin littafin AI na ɗalibi.",
        exceeds: "Kowane mataki yana tare da dalilin da aka rubuta don ɗalibai."
      },
      {
        name: "Wuraren dubawa na kowane ɗalibi",
        objective: "O5",
        notYet: "Samfurin ƙungiya kaɗai ake aunawa.",
        meets: "Wurin dubawa na kowane ɗalibi a kowane mataki.",
        exceeds: "Wuraren dubawa sun bambanta (gwajin fita, ganawa, tunani kan koyo) kuma sun dace da kowane mataki."
      },
      {
        name: "Shirin baje-koli",
        objective: "O6",
        notYet: "Babu masu sauraro na gaske, ko babu bayanin amfanin AI.",
        meets: "Baje-koli a gaban jama'a mai masu sauraro na gaske, bayanin amfanin AI da tunani kan koyo, bisa dokokin makaranta.",
        exceeds: "Yana ambaton takamaiman masu sauraro da yadda za a gayyace su."
      },
      {
        name: "Ra'ayin abokin aiki",
        objective: "O2",
        notYet: "Ba a raba shirin da abokin aiki ba.",
        meets: "Abokin aiki ya duba shirin, kuma an gyara sashe ɗaya.",
        exceeds: "Zai iya faɗin abin da ya canja da dalilin da yasa ya fi kyau."
      }
    ]
  },
  evaluation: {
    results: [
      "Malaman da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa rubric)",
      "Malaman da suka gudanar da darasin PBL mai matakan amfani da AI a zangon karatu na gaba (binciken biyo baya)",
      "Baje-kolin da aka gudanar a gaban masu sauraro na gaske daga al'umma",
      "Malaman da suka ɗauki wani kwas na Koach Learn kan AI ga malamai"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai mataimakin AI da gundumar makarantarku ta yarda da shi",
      "Ma'aunin karatunku daga majiyar hukuma, da ma'aunin amfani da AI na makarantarku, idan akwai",
      "Abokin aiki da zai duba shirin",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku gudanar da shi tare da ƙungiyoyin malaman aji ɗaya ko darasi ɗaya: ku yi gwajin farko tare, sannan kowace ƙungiya ta tsara darasi ɗaya.",
      "Ku ware lokaci don duba shirin da abokin aiki a ƙarshe; ku haɗa malamai daga ƙungiyoyi daban-daban idan zai yiwu.",
      "Ku tunatar da mahalarta cewa sunayen ɗalibai da makinsu ba sa shiga kayan AI da ba a amince da su ba.",
      "Ku sa shugabannin makaranta su tabbatar da dokokin hotunan baje-koli da rabawa a intanet kafin ƙungiyoyi su tsara tarukansu.",
      "Ku ba da maki ga aikin ƙarshe da rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
