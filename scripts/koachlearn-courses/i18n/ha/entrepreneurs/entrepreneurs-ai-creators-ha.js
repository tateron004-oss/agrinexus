"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-ai-creators.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-ai-creators-ha",
  lang: "ha",
  translationOf: "entrepreneurs-ai-creators",
  category: "Entrepreneurs",
  name: "AI ga Masu Ƙirƙirar Abun Ciki da Masu Tasiri (Influencers)",
  skills: "Zaɓar fannin ku da ginshiƙan abun ciki, Rubuta rubutun bidiyo da AI, Gyara da sake amfani da abun ciki, Sanya alamar AI a dandali, Bayyana yarjejeniyar kamfanoni, Kare haƙƙinku da na wasu",
  outcome: "tsara, rubuta da shirya abun ciki na mako ɗaya da taimakon AI, mayar da bidiyo ɗaya zuwa rubuce-rubuce da yawa, sanya alamar AI daidai a kan abun ciki mai kama da gaske, bayyana yarjejeniyar kamfanoni yadda FTC take so, da mutunta haƙƙin mallaka da muryoyi da fuskokin wasu mutane.",
  about: [
    "Masu ƙirƙirar abun ciki (creators) da masu tasiri (influencers) suna gudanar da ƙananan kasuwancin kafofin watsa labarai: suna yin abun ciki, suna tara masu bibiya, kuma suna samun kuɗi ta yarjejeniyar kamfanoni (brand deals), hanyoyin haɗi na kwamishan (affiliate links), kayayyaki da shirye-shiryen dandali. AI zai iya taimakawa da ra'ayoyi, rubutun bidiyo, gyara, rubutun ƙasa (captions) da sake amfani da abun ciki, ta yadda mutum ɗaya zai iya yin aikin ƙaramar ƙungiya.",
    "Wannan kwas ɗin na masu ƙirƙirar abun ciki ne na kowane girma, waɗanda ke son yin aiki da sauri ba tare da rasa muryarsu ko amincewar masu bibiyarsu ba. A Babi na 1 za ku zaɓi fanninku da ginshiƙan abun ciki, ku rubuta rubutun bidiyo da AI, ku kuma gyara da sake amfani da abun ciki. A Babi na 2 za ku koyi lokacin da za ku sanya alamar AI a dandali, yadda ake bayyana yarjejeniyar kamfanoni bisa jagorancin FTC, da yadda za ku kare haƙƙinku da mutunta na wasu.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin hannu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Dokokin dandali suna canjawa sau da yawa; ku duba shafukan taimako na kowane dandali. Wannan ba shawarar shari'a ba ce; ku yi magana da lauya game da kwangiloli da haƙƙoƙi."
  ],
  finalTask: "Ku shirya kayan abun cikinku (creator content kit): bayanin fanninku da ginshiƙan abun ciki guda uku, tsarin abun ciki na kwanaki 7, cikakken rubutun bidiyo ɗaya mai ƙaƙƙarfan farawa (hook) (da aka rubuta da AI, da muryarku), dogon bidiyo ko rubutu ɗaya da aka mayar zuwa aƙalla gajerun guda uku masu rubutun ƙasa, jerin dubawa na sanya alamar AI don dandalinku, da misalin rubutun talla mai bayyanawa a sarari kuma daidai.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙirƙirar abun ciki da masu tasiri, sababbi ko masu girma, da ke gudanar da ƙaramin kasuwancin kafofin watsa labarai a dandali kamar YouTube, TikTok ko Instagram, kuma suke samun kuɗi ta yarjejeniyar kamfanoni, hanyoyin haɗi na kwamishan, kayayyaki ko shirye-shiryen dandali.",
    startingPoint: "Suna iya ɗaukar bidiyo da waya, saka abun ciki da amfani da manhajojin sada zumunta. Wasu sun gwada kayan AI don rubutun ƙasa ko ra'ayoyi, amma ba tare da tsari, murya tabbatacciya, ko fahimtar dokokin sanya alama, bayyanawa da haƙƙin mallaka ba.",
    gap: "Masu ƙirƙirar abun ciki da ke saka abubuwa ba tare da tsari ba suna gajiya, kuma waɗanda ke amfani da AI ba tare da kulawa ba suna iya rasa muryarsu, saka bayanan ƙarya, karya dokokin sanya alama na dandali, ko kasa bin dokokin bayyanawa na FTC. Masu koyo suna buƙatar hanyar aiki da AI da za a iya maimaitawa, wadda ke sa abun cikinsu ya kasance na gaskiya, bisa doka, kuma nasu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya ko kwamfuta mai intanet da mataimakin AI kyauta",
      "Lokaci: darussa na kusan minti 5 da suka dace da jadawalin saka abun ciki",
      "Dokoki: dokokin sanya alamar AI na dandali, dokokin FTC kan tallata kaya (endorsement) da haƙƙin mallaka suna aiki kuma suna iya canjawa",
      "Sirri da haƙƙoƙi: kada ku taɓa kwaikwayon muryar ko fuskar wani mutum, kuma ku kiyaye bayanan sirri daga kayan AI"
    ],
    prerequisites: "Babu. Masu koyo da suke sababbi ga kayan AI za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da mataimakin AI don ra'ayoyi", action: "rubuta bayanin fanni, ginshiƙan abun ciki guda uku da tsarin abun ciki na kwanaki 7", standard: "ta yadda kowane rubutu a cikin tsarin ya dace da ɗaya daga cikin ginshiƙan" },
    { id: "O2", condition: "Idan kuna da misalan rubutun ƙasa ko maganarku", action: "rubuta gajeren rubutun bidiyo mai ƙaƙƙarfan farawa (hook) da taimakon AI", standard: "ta yadda zai yi kama da ku idan aka karanta shi da babbar murya, kuma an tabbatar da kowane bayani" },
    { id: "O3", condition: "Idan kuna da dogon bidiyo ko rubutu ɗaya", action: "mayar da shi zuwa aƙalla gajerun guda uku masu rubutun ƙasa", standard: "an gyara kowane kuskure a rubutun ƙasa, kuma kowane guda yana da ma'ana shi kaɗai" },
    { id: "O4", condition: "Idan kuna da jerin rubuce-rubuce da dokokin dandalinku", action: "yanke waɗanne rubuce-rubuce ke buƙatar alamar AI da rubuta jerin dubawa na sanya alama", standard: "ana sanya alama a kowane rubutun AI mai kama da gaske, da kuma idan ana shakka" },
    { id: "O5", condition: "Idan kuna da yarjejeniyar kamfani ko kayan kyauta", action: "rubuta rubutun talla mai bayyanawa a sarari a farko", standard: "an nuna kuma an faɗi bayyanawar da wuri, kuma kowane iƙirari na gaskiya ne" },
    { id: "O6", condition: "Ta amfani da kayan AI da kwangilolin kamfanoni", action: "jera dokoki don amfani da aikin wasu da kare abun cikinku da kamanninku", standard: "aƙalla dokoki uku, ciki har da rashin kwaikwayon murya ko fuska ba tare da izini ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ƙirƙira da sauri ta AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fanninku da ginshiƙan abun cikinku",
          minutes: 5,
          goal: "Rubuta bayanin fanni da ginshiƙan abun ciki guda uku don tasharku.",
          text: [
            "Masu kallo suna bibiyar masu ƙirƙirar abun ciki da suke magana kan wani abu a sarari. Bayanin fanni (niche) yana faɗin wa kuke yin abun ciki don su, da abin da suke samu: \"Girkin gida mai araha ga ɗaliban jami'a\", \"Ɗaga nauyi ga mata sama da shekaru 40 masu farawa\", \"Shawarwarin ƙaramin kasuwanci ga masu aski\".",
            "Ginshiƙan abun ciki (content pillars) su ne batutuwa uku ko huɗu da kuke komawa gare su akai-akai. Don girki mai araha: girke-girke masu arha, dabarun sayayya, asalin ilimin kicin, da yinin rayuwata. Ginshiƙai suna sauƙaƙa tsarawa, kuma suna taimaka wa masu kallo su san abin da za su sa rai.",
            "Ku tambayi AI: \"Fannina shi ne [fanni]. Ka ba ni shawarar ginshiƙan abun ciki guda biyar da ra'ayoyin bidiyo goma ga kowanne.\" Ku riƙe ra'ayoyin da suka dace da ainihin ƙwarewarku da halinku; muryarku ita ce abin da AI ba zai iya kwaikwaya ba."
          ],
          steps: ["Ku rubuta wa kuke yin abun ciki don su da abin da suke samu.", "Ku nemi AI ya ba da ginshiƙai biyar da ra'ayoyi ga kowanne.", "Ku zaɓi ginshiƙai uku da suka dace da ainihin ƙwarewarku.", "Ku yi tsarin kwanaki 7 daga ra'ayoyin."],
          words: [["Fanni (niche)", "takamaiman batu da masu kallon da abun cikinku ke yi wa hidima."], ["Ginshiƙin abun ciki (content pillar)", "babban batu da kuke saka abubuwa a kai akai-akai."]],
          slides: [
            { title: "Ku yi magana kan abu ɗaya a sarari", bullets: ["Don su waye", "Me suke samu", "\"Girki mai araha ga ɗaliban jami'a\""] },
            { title: "Ginshiƙan abun ciki", bullets: ["Batutuwa uku ko huɗu da ake maimaitawa", "Tsarawa mai sauƙi", "Masu kallo sun san abin da za su sa rai"] },
            { title: "AI don ra'ayoyi", bullets: ["Ginshiƙai da ra'ayoyi goma ga kowanne", "Ku riƙe abin da ya dace da ainihin ƙwarewarku", "Muryarku taku ce"] }
          ],
          tryIt: "Ku rubuta bayanin fanninku, ku zaɓi ginshiƙai uku da taimakon AI, sannan ku gina tsarin abun ciki na kwanaki 7.",
          youCanNow: "bayyana fanninku da tsara abun ciki bisa ginshiƙai masu sarari.",
          quickCheck: [
            { objective: "O1", q: "Me bayanin fanni yake faɗa wa mutane?", options: ["Yawan masu bibiyarku", "Manhajojin da kuke amfani da su", "Wa kuke yin abun ciki don su da abin da suke samu", "Sau nawa kuke saka abubuwa"], answer: 2, why: "Bayanin fanni yana ambaton masu kallonku da abin da suke samu daga gare ku." },
            { objective: "O1", q: "AI ya ba da shawarar ra'ayin rubutu da bai dace da ko ɗaya daga cikin ginshiƙanku uku ba. Me za ku yi?", options: ["Ku saka shi duk da haka domin AI ne ya ba da shawara", "Ku tsallake shi ko ku gyara shi ya dace da ginshiƙi", "Ku ƙara sabon ginshiƙi ga kowane ra'ayi", "Ku goge ginshiƙanku ku sake farawa"], answer: 1, why: "Ginshiƙai suna sa tsarinku ya mai da hankali, don haka ra'ayoyi su dace da ɗaya daga cikinsu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta rubutun bidiyo da AI da muryarku",
          minutes: 5,
          goal: "Rubuta gajeren rubutun bidiyo mai ƙaƙƙarfan farawa da taimakon AI, wanda yake kama da ku.",
          text: [
            "Gajerun bidiyo suna rayuwa ko mutuwa a daƙiƙoƙin farko. Hook (farawa) shi ne layin farko da ke sa mutane su tsaya: wani abin mamaki na gaskiya, alƙawari mai ƙarfi da za ku iya cikawa, ko tambayar da masu kallonku suke yi tuni.",
            "Ku taimaka wa AI ya yi kama da ku: ku liƙa rubutun ƙasa guda biyu naku ko rubutaccen kwafin maganarku (transcript), ku ce \"Ka bi wannan murya.\" Sannan ku tambaya: \"Ka rubuta rubutun bidiyo na daƙiƙa 45 kan [ra'ayi]. Ka ba ni zaɓuɓɓukan hook guda biyar, sannan rubutun mai saƙo mai sarari da kiran yin aiki (call to action).\" Ku zaɓi hook ɗaya ku gyara rubutun ta karanta shi da babbar murya.",
            "Ku tabbatar da bayanai, musamman kan lafiya, kuɗi, motsa jiki ko shari'a. AI yana iya ƙirƙirar bincike da lambobi. Idan ba za ku iya tabbatar da wani bayani ba, ku cire shi ko ku faɗi inda masu kallo za su iya dubawa."
          ],
          steps: ["Ku ba AI misalan ainihin muryarku.", "Ku nemi hook biyar da gajeren rubutu.", "Ku zaɓi hook ɗaya ku karanta rubutun da babbar murya.", "Ku gyara har ya yi kama da ku.", "Ku tabbatar da kowane bayani; ku cire abin da ba za ku iya tabbatarwa ba."],
          words: [["Hook (farawa)", "layin farko da ke sa mutane su ci gaba da kallo."], ["Kiran yin aiki (call to action)", "abin da kuke roƙon masu kallo su yi a gaba, kamar bibiya ko yin sharhi."], ["Rubutaccen kwafi (transcript)", "kalmomin wani abu da aka faɗa, a rubuce."]],
          slides: [
            { title: "Daƙiƙoƙin farko suna da muhimmanci", bullets: ["Wani abin mamaki na gaskiya", "Alƙawarin da za ku iya cikawa", "Tambayar da suke yi tuni"] },
            { title: "Ku sa AI ya yi kama da ku", bullets: ["Ku liƙa rubutun ƙasa ko transcript naku", "\"Ka bi wannan murya\"", "Hook biyar, sannan rubutun"] },
            { title: "Ku tabbatar da bayanai", bullets: ["AI yana iya ƙirƙirar bincike da lambobi", "Lafiya, kuɗi, motsa jiki, shari'a: ku tabbatar", "Ba za ku iya tabbatarwa ba? Ku cire shi"] }
          ],
          tryIt: "Ku rubuta rubutun bidiyo ɗaya na daƙiƙa 45 da taimakon AI ta amfani da misalan muryarku. Ku zaɓi hook, ku karanta shi da babbar murya, ku gyara shi, sannan ku tabbatar da kowane bayani.",
          youCanNow: "rubuta abun ciki da AI da ke jan hankali kuma yake kama da ku.",
          quickCheck: [
            { objective: "O2", q: "Mene ne aikin hook na rubutun bidiyo?", options: ["Sa mutane su ci gaba da kallo tun daga layin farko", "Jera masu ɗaukar nauyinku", "Kammala bidiyon", "Nuna sunan tasharku"], answer: 0, why: "Hook shi ne layin farko da ke sa mutane su tsaya." },
            { objective: "O2", q: "Rubutun da AI ya yi yana da tauri kuma bai yi kama da ku ko kaɗan ba. Me za ku yi?", options: ["Ku saka shi yadda yake", "Ku nemi AI ya tsawaita shi", "Ku ba AI misalan kalmominku, sannan ku karanta shi da babbar murya ku gyara", "Ku yi amfani da wani batu daban"], answer: 2, why: "Misalanku da gyara ta karantawa da babbar murya suna sa rubutun ya yi kama da ku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gyara da sake amfani da abun ciki da AI",
          minutes: 5,
          goal: "Mayar da dogon bidiyo ko rubutu ɗaya zuwa gajerun guda da yawa masu rubutun ƙasa.",
          text: [
            "Sake amfani (repurposing) yana nufin mayar da abun ciki guda ɗaya zuwa da yawa. Bidiyo na minti 10 zai iya zama gajerun guntu guda uku, rubutun hotuna masu zamewa (carousel), sakin layi na wasiƙar labarai (newsletter) da wasu kalamai. Kayan AI za su iya nemo lokuta masu muhimmanci, yanke guntu, ƙara rubutun ƙasa da canja girma don kowane dandali.",
            "Manhajojin gyara da yawa (misali CapCut, Canva, Descript ko editan dandalinku) yanzu suna da abubuwan AI kamar rubutun ƙasa na atomatik (auto-captions), cire bango da shawarar guntu. Abubuwan da tsare-tsaren suna canjawa; ku duba shafukan taimako na kowace manhaja.",
            "Koyaushe ku duba rubutun ƙasa na AI don kurakurai, musamman sunaye, lambobi da kalmomin titi (slang), kuma ku duba cewa guntun yana da ma'ana shi kaɗai, kuma bai karkatar da abin da ku ko baƙonku kuka faɗa ba."
          ],
          steps: ["Ku zaɓi dogon bidiyo ko rubutu ɗaya.", "Ku yi amfani da AI don nemo lokuta masu muhimmanci uku zuwa biyar.", "Ku yanke guntu ku ƙara rubutun ƙasa na atomatik.", "Ku gyara kurakuran rubutun ƙasa ku canja girma don kowane dandali.", "Ku rubuta rubutun ƙasa ga kowanne da taimakon AI."],
          words: [["Sake amfani (repurpose)", "mayar da abun ciki guda ɗaya zuwa wasu da yawa."], ["Rubutun ƙasa na atomatik (auto-captions)", "rubutun ƙasa da aka yi kai tsaye daga sautin bidiyo."], ["Carousel", "rubutu mai hotuna da yawa da mutane ke zamewa su gani."]],
          slides: [
            { title: "Guda ɗaya, rubuce-rubuce da yawa", bullets: ["Gajerun guntu", "Carousel da kalamai", "Sakin layi na wasiƙar labarai"] },
            { title: "Abubuwan gyara na AI", bullets: ["Nemo lokuta masu muhimmanci da yanke guntu", "Rubutun ƙasa na atomatik da canja girma", "Ku duba shafukan taimako na kowace manhaja"] },
            { title: "Ku duba komai", bullets: ["Ku gyara sunaye, lambobi, kalmomin titi", "Kowane guntu ya kasance da ma'ana shi kaɗai", "Kada ku taɓa karkatar da abin da wani ya faɗa"] }
          ],
          tryIt: "Ku mayar da dogon bidiyo ko rubutu ɗaya zuwa aƙalla gajerun guda uku masu rubutun ƙasa. Ku gyara kowane kuskure a rubutun ƙasa.",
          youCanNow: "sake amfani da abun ciki da kayan AI yayin da kuke kiyaye daidaitonsa.",
          quickCheck: [
            { objective: "O3", q: "Me sake amfani da abun ciki yake nufi?", options: ["Goge tsofaffin rubuce-rubuce", "Kwafin bidiyon wani mai ƙirƙira", "Saka guntu ɗaya sau da yawa a rana ɗaya", "Mayar da abun ciki guda ɗaya zuwa guda da yawa"], answer: 3, why: "Sake amfani yana yin guda da yawa, kamar gajerun guntu, daga dogon guda ɗaya." },
            { objective: "O3", q: "Kun yanke gajeren guntu, amma shi kaɗai yana sa baƙon ya yi kamar ya faɗi akasin abin da yake nufi. Me za ku yi?", options: ["Ku saka shi domin zai sami masu kallo", "Ku zaɓi wani yanki daban da ke kiyaye ainihin ma'anarsa", "Ku ƙara rubutu da ke cewa an gyara shi", "Ku saka shi a dandali ɗaya kawai"], answer: 1, why: "Gajeren guntu dole ya kasance da ma'ana shi kaɗai, kuma kada ya karkatar da abin da aka faɗa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ƙirƙira da sauri ta AI",
        questions: [
          { objective: "O1", q: "Wanne ne bayanin fanni mai sarari?", options: ["Abun ciki", "Girkin gida mai araha ga ɗaliban jami'a", "Bidiyo game da abubuwa", "Komai ga kowa"], answer: 1, why: "Yana faɗin don su waye, da abin da suke samu." },
          { objective: "O1", q: "Mene ne ginshiƙan abun ciki?", options: ["Kayan kyamararku", "Ginshiƙai a ɗakin ɗaukar bidiyonku", "Yawan masu bibiyarku", "Batutuwa uku ko huɗu da kuke saka abubuwa a kai akai-akai"], answer: 3, why: "Ginshiƙai suna jagorantar tsarawa." },
          { objective: "O2", q: "Ta yaya za ku taimaka wa AI ya yi rubutu da muryarku?", options: ["Ku liƙa misalan rubutun ƙasa ko maganarku", "Ku nemi ya kwaikwayi wani mai ƙirƙira", "Ku ba shi kalmar sirrinku", "Ku yi amfani da emoji fiye da haka"], answer: 0, why: "Misalai suna nuna wa AI salonku." },
          { objective: "O2", q: "Rubutun motsa jiki na AI ya ambaci wani bincike da ba za ku iya samu ba. Me za ku yi?", options: ["Ku ƙirƙiri hanyar haɗi", "Ku bar shi", "Ku cire shi ko ku nuna wa masu kallo inda za su iya dubawa", "Ku faɗe shi da ƙarfi"], answer: 2, why: "AI yana iya ƙirƙirar bincike; kada ku raba bayanan da ba a tabbatar ba." },
          { objective: "O3", q: "Rubutun ƙasa na atomatik ya rubuta sunan baƙo ba daidai ba. Me za ku yi?", options: ["Ku cire baƙon", "Ku saka shi duk da haka", "Ku gyara shi kafin ku saka", "Ku kashe sauti"], answer: 2, why: "Ku duba rubutun ƙasa na AI don kurakurai." }
        ]
      }
    },
    {
      name: "Babi na 2: Kiyaye amincewar masu kallonku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Sanya alamar abun cikin AI a dandali",
          minutes: 5,
          goal: "Yanke lokacin da dandali ke buƙatar ku sanya alama a kan abun cikin AI mai kama da gaske, ku sanya ta.",
          text: [
            "Dandali suna ƙara dokoki kan abun cikin AI. YouTube, misali, yana buƙatar masu ƙirƙira su bayyana abun ciki da yake kama da gaske kuma aka yi shi ko aka canja shi sosai da AI: sa mutum na gaske ya yi kamar ya faɗi ko ya yi abin da bai yi ba, canja bidiyon wani abu ko wuri na gaske, ko ƙirƙirar wani yanayi mai kama da gaske da bai faru ba. Kuna bayyanawa ta hanyar zaɓin amfani da AI (AI-use setting) lokacin da kuke ɗorawa (upload).",
            "YouTube ba ya buƙatar bayyanawa ga abun ciki da a fili ba na gaske ba ne, ƙananan gyare-gyare kamar gyaran launi, matatun kwalliya (beauty filters) ko dusashe bango, ko amfani da AI don ra'ayoyi, rubutun bidiyo, sunaye ko ƙananan hotunan bidiyo (thumbnails). Masu ƙirƙira da suke ƙin bayyanawa akai-akai suna iya fuskantar sanya alama, cirewa, ko rasa shiga shirin abokan hulɗa (partner program).",
            "Sauran dandali, kamar TikTok da manhajojin Meta, suna da nasu dokokin sanya alama; ku duba shafukan taimako na kowane dandali. Idan kuna shakka, ku sanya alama: gaskiya tana kiyaye amincewar masu kallonku."
          ],
          steps: ["Ku tambaya: shin wannan yana kama da gaske, kuma AI ne ya yi shi ko ya canja shi sosai?", "Idan haka ne, ku yi amfani da alamar AI ko zaɓin bayyanawa na dandalin.", "Ku duba shafin taimako na kowane dandali don dokokinsa.", "Idan kuna shakka, ku sanya alama."],
          words: [["Abun ciki na roba (synthetic content)", "hotuna, bidiyo ko sauti da AI ya yi ko ya canja."], ["Zaɓin bayyanawa (disclosure setting)", "zaɓi lokacin saka abu da ke nuna cewa AI ne ya yi abun ciki ko ya canja shi."]],
          slides: [
            { title: "YouTube: ku bayyana idan yana kama da gaske", bullets: ["Mutum na gaske yana faɗin abin da bai faɗa ba", "Abubuwa ko wurare na gaske da aka canja", "Yanayi mai kama da gaske da bai faru ba"] },
            { title: "YouTube: ba a buƙata ba", bullets: ["Abun ciki da a fili ba na gaske ba ne", "Gyaran launi, matatu, dusashe bango", "AI don ra'ayoyi, rubutun bidiyo, sunaye, thumbnails"] },
            { title: "Kowane dandali ya bambanta", bullets: ["Ku duba shafukan taimako na TikTok da Meta", "Idan kuna shakka, ku sanya alama"] }
          ],
          sources: [{ name: "YouTube Help: Disclosing use of altered or synthetic content", url: "https://support.google.com/youtube/answer/14328491" }],
          tryIt: "Ku duba rubuce-rubucenku biyar na ƙarshe ko tsarin makonku na gaba. Ga kowanne, ku yanke ko yana buƙatar alamar AI a dandalinku, da dalili. Ku rubuta gajeren jerin dubawa na sanya alama.",
          youCanNow: "sanya alama daidai a kan abun cikin AI mai kama da gaske a dandalinku.",
          quickCheck: [
            { objective: "O4", q: "Wane irin rubutu ne ya fi yiwuwa ya buƙaci alamar AI?", options: ["Bidiyon AI mai kama da gaske na wani wuri na gaske", "Rubutun bidiyo da AI ya taimaka muku rubutawa", "Bidiyo mai rubutun ƙasa na atomatik", "Hoto mai sauƙin matatar launi"], answer: 0, why: "Dandali suna neman ku sanya alama a kan abun cikin AI mai kama da gaske da masu kallo za su iya ɗauka a matsayin na gaske." },
            { objective: "O4", q: "Ba ku tabbata ko wani rubutu yana buƙatar alamar AI ba. Me za ku yi?", options: ["Ku bar shi ba alama", "Ku goge rubutun", "Ku sanya alama", "Ku tambayi masu bibiya a sharhi"], answer: 2, why: "Idan ana shakka, sanya alama shi ne zaɓi mafi aminci." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Bayyana yarjejeniyar kamfanoni yadda FTC take so",
          minutes: 5,
          goal: "Rubuta rubutun talla mai bayyanawa a sarari kuma daidai.",
          text: [
            "Idan wani kamfani ya biya ku, ya ba ku kayayyaki kyauta, kwamishan ko tafiya, kuma masu kallonku ba za su yi tsammanin wannan alaƙar ba, dole ku bayyana ta, ko da kun riƙe kayan kyautar, kuma ko da ƙananan kyautai ne. Ku bayyana a kowane rubutun talla; ba za ku ɗauka cewa masu kallo sun ga na baya ba.",
            "Jagorancin FTC (hukumar kasuwanci ta Amurka) kan tallata kaya ya ce dole bayyanawa ta kasance mai sauƙin gani da fahimta. \"#ad\" ko \"Ad:\" a farko, ko \"Sponsored by XYZ\" (XYZ ne ya ɗauki nauyi), suna aiki da kyau. Alamomi marasa sarari kamar \"#partner\", \"#ambassador\" ko \"#sp\", ko bayyanawar da aka ɓoye a sharhi, a ƙarshen dogon rubutun ƙasa ko bayan \"more\", sau da yawa ba sa aiki. A bidiyo, ku bayyana a cikin bidiyon kansa, mafi kyau a faɗa kuma a nuna, kuma da wuri; ku maimaita ta yayin watsa kai tsaye (live).",
            "Ku faɗi abin da kuka yarda da shi da gaske daga amfani na gaske kawai, kuma kada ku taɓa saka sharhin ƙarya. Kayan bayyanawa na dandali suna taimakawa amma wataƙila ba su isa su kaɗai ba; ku ƙara naku. AI zai iya rubuta daftarin rubutun talla, amma ku ne ke da alhakin bayyanawar da kowane iƙirari."
          ],
          steps: ["Ku duba ko kuna da muhimmiyar alaƙa: biya, kayan kyauta, kwamishan, tafiya.", "Ku saka \"#ad\" ko \"Sponsored\" a farkon rubutun ƙasa.", "A bidiyo, ku faɗa kuma ku nuna ta da wuri; ku maimaita ta yayin live.", "Ku yi iƙirari daga ainihin abin da kuka gani kawai.", "Ku yi amfani da kayan dandali DA bayyanawarku."],
          words: [["Muhimmiyar alaƙa (material connection)", "dangantaka kamar biya ko kayan kyauta da masu kallo ba za su yi tsammani ba."], ["Tallata kaya (endorsement)", "saƙon da masu kallo ke ganin yana nuna ainihin ra'ayinku game da wani kaya."]],
          slides: [
            { title: "Lokacin bayyanawa", bullets: ["An biya, kayan kyauta, kwamishan, tafiya", "Ko da ƙananan kyautai", "A kowane rubutun talla"] },
            { title: "Yadda ake bayyanawa", bullets: ["\"#ad\" ko \"Ad:\" a farko", "\"Sponsored by XYZ\"", "Ba a ɓoye a sharhi ko bayan \"more\" ba"] },
            { title: "A bidiyo da live", bullets: ["Ku faɗa kuma ku nuna", "Da wuri a cikin bidiyon", "Ku maimaita yayin watsa kai tsaye"] },
            { title: "Iƙirari na gaskiya", bullets: ["Ainihin abin da kuka gani kawai", "Ku ƙara bayyanawarku ma"] }
          ],
          sources: [{ name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Ku rubuta misalin rubutun talla da taimakon AI don wani kaya da kuke amfani da shi da gaske. Ku saka bayyanawa a sarari a farko, ku rubuta bayyanawar da za a faɗa a bidiyo, sannan ku duba cewa kowane iƙirari na gaskiya ne.",
          youCanNow: "bayyana yarjejeniyar kamfanoni a sarari kuma da gaskiya yadda FTC take so.",
          quickCheck: [
            { objective: "O5", q: "A ina ya kamata bayyanawar yarjejeniyar kamfani ta bayyana a rubutun ƙasa?", options: ["A ƙarshe sosai, bayan hashtags", "A bayanin bayananku (bio) kawai", "A sharhi a ƙarƙashin rubutun", "A farko, inda mutane ke fara gani"], answer: 3, why: "Bayyanawa mai sarari tana zuwa inda masu kallo ke ganinta nan take." },
            { objective: "O5", q: "An biya ku don ambaton wani kaya a bidiyo. Me za ku yi?", options: ["Ku ambaci yarjejeniyar a cikin bayanin bidiyo (description) kawai", "Ku faɗa kuma ku nuna bayyanawar da wuri a bidiyon", "Ku tsallake bayyanawa domin kamfanin sananne ne", "Ku bayyana kawai idan wani mai kallo ya tambaya"], answer: 1, why: "A bidiyo, ya kamata a faɗi bayyanawar kuma a nuna ta da wuri." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kare haƙƙinku da mutunta na wasu",
          minutes: 5,
          goal: "Yi amfani da AI ba tare da kwafin wasu ba, ku kuma kare abun cikinku da kamanninku.",
          text: [
            "Kada ku yi amfani da AI don kwafin bidiyon wani mai ƙirƙira, tambarin (logo) wani kamfani, ko muryar ko fuskar wani ba tare da izini ba. Sa mutum na gaske ya yi kamar ya faɗi ko ya yi abin da bai yi ba zai iya ruɗar masu kallo, karya dokokin dandali, kuma ya kawo ƙarar shari'a. Ku yi amfani da waƙoƙi da guntun bidiyo da kuke da haƙƙinsu, ko ɗakin ajiyar waƙoƙi masu lasisi na dandalin.",
            "Mallaka: Ofishin Haƙƙin Mallaka na Amurka (US Copyright Office) ya ce abun da AI kaɗai ya ƙirƙira ba shi da kariyar haƙƙin mallaka (copyright), amma aikin ƙirƙirarku na kanku, ciki har da gyare-gyarenku da tsarin da kuka yi a matsayin mutum, zai iya samun kariya. Gwargwadon yadda abun cikinku yake da muryarku, bidiyonku da ra'ayoyinku, gwargwadon yadda yake naku.",
            "Ku kare kanku: ku karanta kwangilolin kamfanoni don ganin wa ya mallaki abun cikin, tsawon lokacin da za su iya amfani da shi, da ko za su iya amfani da fuskarku ko muryarku da AI. Ku riƙe ainihin kwafin ayyukanku. Ku sa lauya ya duba duk kwangilar da ke ba da haƙƙin abun cikinku ko kamanninku."
          ],
          steps: ["Kada ku taɓa amfani da AI don kwafin wani mai ƙirƙira, kamfani, ko muryar ko fuskar wani ba tare da izini ba.", "Ku yi amfani da waƙoƙi da guntun bidiyo masu lasisi.", "Ku sa muryarku, bidiyonku da ra'ayoyinku a tsakiya.", "Ku karanta kwangiloli don mallaka, lokacin amfani da amfani da kamanninku da AI.", "Ku sa lauya ya duba kwangilolin da ke ba da haƙƙoƙi."],
          words: [["Kamanni (likeness)", "fuskarku, muryarku da ainihinku."], ["Lasisi (license)", "izinin amfani da wani abu bisa sharuɗɗa ƙayyadaddu."], ["Haƙƙin amfani (usage rights)", "abin da kamfani zai iya yi da abun cikinku, da tsawon lokaci."]],
          slides: [
            { title: "Ku mutunta wasu", bullets: ["Babu kwafin masu ƙirƙira, tambari, muryoyi ko fuskoki", "Ku yi amfani da waƙoƙi da guntun bidiyo masu lasisi"] },
            { title: "Haƙƙin mallaka da AI", bullets: ["Abun da AI kaɗai ya yi: ba shi da kariya", "Aikin ƙirƙirarku a matsayin mutum zai iya samu", "Muryarku da bidiyonku = naku"] },
            { title: "Ku kare kanku", bullets: ["Wa ya mallaki abun cikin? Har tsawon wane lokaci?", "Za su iya amfani da fuskarku ko muryarku da AI?", "Lauya ya duba yarjejeniyar haƙƙoƙi"] }
          ],
          sources: [{ name: "US Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }, { name: "US Copyright Office: Part 2 Copyrightability report announcement", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Aikin ƙarshe: ku rubuta dokoki uku da za ku bi kan amfani da aikin wasu da haƙƙoƙinku, sannan ku haɗa kayan abun cikinku: fanni da ginshiƙai, tsarin kwanaki 7, rubutun bidiyo, guda da aka sake amfani da su, jerin dubawa na sanya alamar AI, da misalin rubutun talla.",
          youCanNow: "ƙirƙira da AI a matsayin mai ƙirƙirar abun ciki yayin da kuke kiyaye amincewar masu kallonku da kare haƙƙin kowa.",
          quickCheck: [
            { objective: "O6", q: "Me ya kamata ku duba a kwangilar kamfani?", options: ["Wa ya mallaki abun cikin, har tsawon wane lokaci, da amfani da kamanninku da AI", "Yawan kuɗin biya kawai", "Ranar saka abu kawai", "Launukan tambarin kamfanin"], answer: 0, why: "Mallaka, iyakar lokaci da haƙƙin kamanni suna kare ku da aikinku." },
            { objective: "O6", q: "Wani mai bibiya ya nemi ku yi amfani da AI don kwaikwayon muryar wani shahararren mai ƙirƙira a bidiyon barkwanci. Me za ku yi?", options: ["Ku yi, domin barkwanci ne kawai", "Ku yi amma ku ƙara ƙaramin rubutu", "Ku yi a dandali ɗaya kawai", "Ku ƙi, sai dai idan kuna da izinin wannan mai ƙirƙira"], answer: 3, why: "Kwaikwayon muryar wani mutum ba tare da izini ba bai dace ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kiyaye amincewar masu kallonku",
        questions: [
          { objective: "O4", q: "A YouTube, wanne ne ke buƙatar bayyanawar AI?", options: ["Bidiyo mai kama da gaske na mutum na gaske yana faɗin abin da bai taɓa faɗa ba", "Gyaran launi", "Amfani da AI don tunanin sunaye", "Dodon zane-zane (cartoon)"], answer: 0, why: "Abun ciki da aka canja mai kama da gaske da ke nuna mutum na gaske yana buƙatar bayyanawa." },
          { objective: "O4", q: "Shin YouTube yana buƙatar bayyanawa idan AI ya taimaka wajen rubuta rubutun bidiyonku kawai?", options: ["Don dogayen bidiyo kawai", "Eh, koyaushe", "A ranar Lahadi kawai", "A'a"], answer: 3, why: "Amfani da AI don ra'ayoyi ko rubutun bidiyo ba ya buƙatar bayyanawa." },
          { objective: "O5", q: "Wani kamfani ya turo muku takalman wasanni kyauta, kuma kun saka rubutu game da su. Me ya kamata ku yi?", options: ["Babu komai, kun riƙe su", "Ku bayyana a sarari, kamar \"Gifted by XYZ\" ko \"#ad\" a farko", "Ku ɓoye shi a sharhi", "Ku yi amfani da \"#sp\" a ƙarshe"], answer: 1, why: "Kayan kyauta muhimmiyar alaƙa ne da ke buƙatar bayyanawa a sarari." },
          { objective: "O5", q: "A bidiyon talla, bayyanawar ya kamata ta kasance:", options: ["A cikin bidiyon kansa, an faɗa kuma an nuna, da wuri", "A cikin bayanin bidiyo kawai", "A cikin hanyar haɗi kawai", "A ƙarshe sosai kawai"], answer: 0, why: "Jagorancin FTC ya ce ku bayyana a cikin bidiyon, mafi kyau ta hanyoyi biyu." },
          { objective: "O6", q: "Za ku iya amfani da AI don kwaikwayon muryar wani mai ƙirƙira a bidiyonku ba tare da izini ba?", options: ["Idan gajere ne kawai", "Eh", "A'a", "Don barkwanci kawai"], answer: 2, why: "Kwaikwayon muryar wani ba tare da izini ba zai iya ruɗar mutane kuma ya keta haƙƙoƙi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Masu Ƙirƙirar Abun Ciki da Masu Tasiri (Influencers)",
    questions: [
      { objective: "O1", q: "Masu ƙirƙirar abun ciki sau da yawa suna samun kuɗi ta:", options: ["Cin caca kawai", "Yarjejeniyar kamfanoni, hanyoyin haɗi na kwamishan, kayayyaki da shirye-shiryen dandali", "Tallafin gwamnati kawai", "Babu komai"], answer: 1, why: "Waɗannan hanyoyin samun kuɗi ne da aka saba gani ga masu ƙirƙira." },
      { objective: "O1", q: "Bayanin fanni yana faɗin:", options: ["Yawan masu bibiyarku", "Kamfanin kyamararku", "Kalmar sirrinku", "Wa kuke yin abun ciki don su da abin da suke samu"], answer: 3, why: "Yana bayyana masu kallonku da amfanin da kuke ba su." },
      { objective: "O1", q: "Me yasa ake da ginshiƙan abun ciki?", options: ["Suna ɓoye tallace-tallace", "Doka ce ta buƙace su", "Suna maye gurbin rubutun bidiyo", "Suna sauƙaƙa tsarawa kuma suna sa masu kallo su san abin da za su sa rai"], answer: 3, why: "Ginshiƙai suna ba da tsari." },
      { objective: "O2", q: "Hook shi ne:", options: ["Hoton ƙarshe na bidiyo", "Layin farko da ke sa mutane su tsaya", "Tambarin mai ɗaukar nauyi", "Girman thumbnail"], answer: 1, why: "Daƙiƙoƙin farko ne ke yanke ko mutane za su tsaya." },
      { objective: "O2", q: "Bayan AI ya rubuta daftarin rubutun bidiyo, ya kamata ku:", options: ["Kwafe shi ga wani mai ƙirƙira", "Saka shi ba tare da karantawa ba", "Karanta shi da babbar murya ku gyara shi ya yi kama da ku", "Ƙara bayanan ƙarya"], answer: 2, why: "Muryarku ce ke riƙe masu kallonku." },
      { objective: "O2", q: "Kan batutuwan lafiya ko kuɗi, bayanan AI ya kamata a:", options: ["Tabbatar da su kafin a raba", "Amince da su gaba ɗaya", "Ƙara musu girma", "Ɓoye su"], answer: 0, why: "AI yana iya ƙirƙirar bayanai da bincike." },
      { objective: "O3", q: "Sake amfani da abun ciki yana nufin:", options: ["Sayen masu bibiya", "Goge tsofaffin bidiyo", "Mayar da abun ciki guda ɗaya zuwa da yawa", "Sake saka bidiyon wani"], answer: 2, why: "Bidiyo ɗaya zai iya zama rubuce-rubuce da yawa." },
      { objective: "O3", q: "Kafin ku saka rubutun ƙasa na AI, ku duba:", options: ["Sunaye, lambobi da kalmomin titi", "Babu komai", "Salon rubutu (font) kawai", "Emoji kawai"], answer: 0, why: "Rubutun ƙasa na atomatik sau da yawa yana yin kuskure a can." },
      { objective: "O3", q: "Gajeren guntu dole ya:", options: ["Ba da mamaki ko ta halin ƙaƙa", "Kasance da ma'ana shi kaɗai kuma kada ya karkatar da abin da aka faɗa", "Cire duk bayanin yanayi", "Canja kalmomin baƙo"], answer: 1, why: "Daidaito yana kiyaye amincewa." },
      { objective: "O4", q: "A YouTube, ana yin bayyanawar AI:", options: ["Ba a yi ko kaɗan", "A sharhi kawai", "Ta imel zuwa YouTube", "Da zaɓin amfani da AI lokacin ɗorawa"], answer: 3, why: "YouTube Studio yana da zaɓin amfani da AI lokacin ɗorawa." },
      { objective: "O4", q: "Wanne ne BA ya buƙatar bayyanawa a YouTube?", options: ["Matatar kwalliya", "Labarin ƙarya mai kama da gaske", "Mutum na gaske da aka sa ya faɗi ƙarya", "Yanayi mai kama da gaske da bai taɓa faruwa ba"], answer: 0, why: "Ƙananan gyare-gyaren kwalliya ba a buƙatar bayyanawa." },
      { objective: "O4", q: "Ƙin bayyanawa akai-akai a YouTube zai iya kawo:", options: ["Babu komai", "Ƙarin masu kallo", "Kyauta", "Sanya alama, cirewa ko rasa shiga shirin abokan hulɗa"], answer: 3, why: "Shafin taimako na YouTube ya jera waɗannan sakamako." },
      { objective: "O4", q: "Idan ba ku tabbata ko za ku sanya alama a kan abun cikin AI ba, ya kamata ku:", options: ["Goge asusunku", "Ɓoye shi", "Sanya alama", "Nemi masu kallo su yi hasashe"], answer: 2, why: "Gaskiya tana kare amincewa." },
      { objective: "O5", q: "Muhimmiyar alaƙa (material connection) ita ce:", options: ["Wayar intanet ɗinku", "Dangantaka kamar biya ko kayan kyauta da masu kallo ba za su yi tsammani ba", "Sharhin aboki", "Manhajar gyaran bidiyonku"], answer: 1, why: "Wannan ita ce abin da dole a bayyana." },
      { objective: "O5", q: "Wace bayyanawa ce a sarari?", options: ["\"#partner\" bayan \"more\"", "\"#sp\" a ƙarshe", "Rubutu a cikin sharhi", "\"#ad\" a farkon rubutun ƙasa"], answer: 3, why: "FTC ta lissafa \"#ad\" a farko a matsayin wadda za ta yi aiki." },
      { objective: "O5", q: "Yayin watsa kai tsaye (live) da mai ɗaukar nauyi, ya kamata ku:", options: ["Kada ku taɓa ambatonsa", "Ku faɗe shi sau ɗaya kafin ku fara live", "Ku maimaita bayyanawar yayin watsawar", "Ku saka shi a wani tsohon rubutu"], answer: 2, why: "Mutane suna shiga watsa kai tsaye a lokuta daban-daban." },
      { objective: "O5", q: "Shin kayan haɗin gwiwar talla (paid-partnership) na dandali yana isa shi kaɗai koyaushe?", options: ["Ba koyaushe ba; ku ƙara bayyanawarku ma", "Eh, koyaushe", "Ba a yarda da shi ba", "Don manyan masu ƙirƙira kawai"], answer: 0, why: "Jagorancin FTC ya ce kayan dandali ba tabbaci ba ne." },
      { objective: "O6", q: "A cewar Ofishin Haƙƙin Mallaka, abun da AI kaɗai ya ƙirƙira:", options: ["Mallakin dandalin ne", "Ba shi da kariyar haƙƙin mallaka", "Naku ne kai tsaye", "Dukiyar kamfanin ce ta jama'a"], answer: 1, why: "Haƙƙin mallaka yana kare aikin da mutum ya ƙirƙira." },
      { objective: "O6", q: "A kwangilar kamfani, ya kamata ku duba:", options: ["Tambarin kawai", "Wa ya mallaki abun cikin, har tsawon wane lokaci, da amfani da kamanninku da AI", "Babu komai", "Salon emoji kawai"], answer: 1, why: "Waɗannan sharuɗɗa suna shafar haƙƙoƙinku." },
      { objective: "O6", q: "Wa ya kamata ya duba kwangilar da ke ba da haƙƙin fuskarku ko muryarku?", options: ["Lauya", "AI kawai", "Masu bibiyarku", "Babu kowa"], answer: 0, why: "Lauya zai iya kare haƙƙoƙinku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      5,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Fanni, ginshiƙai da tsari",
        objective: "O1",
        notYet: "Fannin ba shi da sarari, ko tsarin yana da rubuce-rubucen da ba su dace da kowane ginshiƙi ba.",
        meets: "Bayanin fanni mai sarari, ginshiƙai uku da tsarin kwanaki 7 inda kowane rubutu ya dace da ginshiƙi.",
        exceeds: "Tsarin kuma yana haɗa nau'o'in abun ciki daban-daban, kuma yana faɗin abin da masu kallo ke samu daga kowane rubutu."
      },
      {
        name: "Rubutun bidiyo da muryarku",
        objective: "O2",
        notYet: "Rubutun ba shi da hook, bai yi kama da ku ba, ko yana da bayanan da ba a tabbatar ba.",
        meets: "Gajeren rubutu mai ƙaƙƙarfan hook da ke kama da ku, an tabbatar da bayanansa.",
        exceeds: "Kun gwada hook fiye da ɗaya kuma za ku iya faɗin dalilin da yasa kuka zaɓi wannan."
      },
      {
        name: "Guda da aka sake amfani da su",
        objective: "O3",
        notYet: "Ƙasa da guda uku, ko rubutun ƙasa masu kurakurai.",
        meets: "Aƙalla gajerun guda uku masu rubutun ƙasa daidai, kuma kowanne yana da ma'ana shi kaɗai.",
        exceeds: "An tsara kowane guda don dandalin da za a saka shi."
      },
      {
        name: "Jerin dubawa na sanya alamar AI",
        objective: "O4",
        notYet: "Babu jerin dubawa, ko an bar abun cikin AI mai kama da gaske ba alama.",
        meets: "Jerin dubawa da ke faɗin lokacin sanya alama a kan abun cikin AI a dandalinku, ciki har da idan ana shakka.",
        exceeds: "Yana kuma faɗin inda za a samo dokar kowane dandali don ku iya duba canje-canje."
      },
      {
        name: "Bayyanawa a rubutun talla",
        objective: "O5",
        notYet: "Babu bayyanawa, ko an ɓoye ta, ko ta zo a makare.",
        meets: "Bayyanawa a sarari a farko, tare da bayyanawar da za a faɗa a bidiyo, da iƙirari na gaskiya.",
        exceeds: "Yana kuma tsara maimaita bayyanawa don watsa kai tsaye ko dogayen bidiyo."
      },
      {
        name: "Dokokin haƙƙoƙi",
        objective: "O6",
        notYet: "Ƙasa da dokoki uku, ko wata doka da ke ba da damar kwafin aikin wasu ko kamanninsu.",
        meets: "Dokoki uku masu sarari kan amfani da aikin wasu da kare naku.",
        exceeds: "Dokokin kuma sun haɗa da abin da za a duba a kwangilar kamfani kafin sa hannu."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka saka abubuwa bisa tsarinsu na kwanaki 7 aƙalla tsawon cikakken mako ɗaya (binciken biyo baya)",
      "Masu koyo da suka sami yarjejeniyar kamfani ko kuɗin kwamishan cikin kwanaki 90, tare da bayyanawa daidai",
      "Masu koyo da suka fara wani kwas na kasuwanci na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet da kyamarar waya",
      "Mataimakin AI kyauta (kamar ChatGPT, Microsoft Copilot ko Google Gemini) da editan bidiyo kyauta mai rubutun ƙasa na atomatik",
      "Dogon bidiyo ko rubutu ɗaya naku don sake amfani da shi",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi kowane mai koyo ya zo da misalan rubutun ƙasa nasa ko guntun bidiyo da aka ɗauka, don daftarin AI ya bi muryarsa.",
      "Ku buɗe shafin taimako na sanya alamar AI na kowane dandali tare, domin dokoki suna canjawa; kada ku dogara da taƙaitawar AI.",
      "Ku yi amfani da abun ciki da mai koyo ya yi da kansa ko yake da izinin amfani da shi kawai a ayyukan atisaye.",
      "Ku tunatar da masu koyo cewa lauya ya kamata ya duba kwangilolin da ke ba da haƙƙin fuskarsu ko muryarsu.",
      "Ku ba da maki ga kayan abun ciki da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
