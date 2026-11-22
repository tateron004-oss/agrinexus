"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-scaling-ai-business.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-scaling-ai-business-ha",
  lang: "ha",
  translationOf: "entrepreneurs-scaling-ai-business",
  category: "Entrepreneurs",
  name: "Faɗaɗa Kasuwanci da Taimakon AI",
  skills: "Sanin muhimman lambobinku, Gano wurin da aiki ke tsayawa, Mayar da aiki zuwa tsari, Ɗaukar mataimaka, Ƙara abokan ciniki mataki-mataki, Kiyaye inganci yayin girma",
  outcome: "amfani da AI don karanta muhimman lambobin kasuwancinku, gano abin da ke hana girma, mayar da aikinku zuwa tsarin da wasu za su iya bi, da rubuta shirin faɗaɗa na kwanaki 90 mai ma'ana tare da duban inganci.",
  about: [
    "Faɗaɗa kasuwanci yana nufin ƙara tallace-tallace ba tare da kuɗin kashewa, sa'o'in aiki da kurakurai sun ƙaru da sauri iri ɗaya ba. Wannan kwas na masu kasuwancin da ya riga ya yi aiki ne, waɗanda suke shirye su faɗaɗa shi, tare da AI yana yin ƙarin ayyukan yau da kullum.",
    "A Babi na 1 za ku yi amfani da AI don fahimtar lambobinku, gano wuri ɗaya da aiki ke tsayawa yana rage muku sauri, da mayar da aikinku zuwa rubutaccen tsari. A Babi na 2 za ku shirya ɗaukar mataimaka ('yan kwangila, ma'aikata da kayan AI), zaɓi hanyoyin samun abokan ciniki, da saita duban inganci da haɗari don kada girma ya lalata abin da abokan ciniki ke so.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aiki kan kasuwancinku. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Batutuwan haraji, ɗaukar ma'aikata da doka suna da hanyar haɗi zuwa majiyoyin hukuma; ku tuntuɓi akawu ko lauya game da halin da kuke ciki."
  ],
  finalTask: "Ku rubuta shirin faɗaɗa na kwanaki 90 a shafi ɗaya: muhimman lambobinku biyar na yau da burinku, babban wurin da aiki ke tsayawa da yadda za ku cire shi, tsare-tsare biyu da za ku rubuta, mataimakin da za ku ƙara (mutum ko kayan AI) da kuɗinsa, hanya ɗaya ta samun abokan ciniki da za ku gwada, da duban inganci uku da za ku riƙa yi kowane mako.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci a Amurka waɗanda kasuwancinsu ya riga ya yi aiki kuma suna da abokan ciniki na dindindin, waɗanda suke shirye su girma kuma suna son AI ya yi ƙarin ayyukan yau da kullum.",
    startingPoint: "Suna sayarwa, suna hidimar abokan ciniki, kuma su ne suke yin yawancin manyan ayyuka da kansu. Da yawa ba sa bin muhimman lambobinsu kowane wata, ba su da tsare-tsare rubuce da yawa, kuma ba su shirya ɗaukar ma'aikata ko gwajin girma ba.",
    gap: "Faɗaɗa kasuwancin da ke asara a kowace siyarwa, ko wanda ke dogara ga lokacin mai shi a kowane aiki, yana ƙara girman matsaloli, ba rage su ba. Masu kasuwanci suna buƙatar karanta lambobinsu, gyara babban wurin da aiki ke tsayawa, rubuta tsare-tsare, ƙara mataimakan da suka dace, da gwada girma tare da duban inganci, don kasuwancin ya girma ba tare da ya lalace ba.",
    constraints: [
      "Kalmomi masu sauƙi da lissafin spreadsheet na farko",
      "Na'urori: kwamfuta mai spreadsheet da mataimakin AI kyauta",
      "Lokaci: kusan minti biyar a kowane darasi, da aiki kan lambobi da tsare-tsaren mai kasuwancin",
      "Batutuwan haraji da ɗaukar ma'aikata (kamar matsayin ma'aikaci) suna da hanyar haɗi zuwa majiyoyin hukuma; masu kasuwanci suna tuntuɓar akawu ko lauya",
      "Ana cire sunayen abokan ciniki kafin a saka kowane bayanin kasuwanci a AI"
    ],
    prerequisites: "Ana ba da shawarar kwas ɗin \"AI for Business Productivity\" (AI don Ƙara Yawan Aiki a Kasuwanci), da kasuwancin da ya yi tallace-tallace na aƙalla watanni shida."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da lambobin kasuwanci na watanni shida ba tare da sunayen abokan ciniki ba", action: "bin muhimman lambobi biyar a spreadsheet da amfani da AI don bayanin yadda suke canjawa", standard: "kuna duba lissafin AI kuma kuna faɗin ko kowace siyarwa tana kawo riba" },
    { id: "O2", condition: "Idan kuna da matakan babban aikinku tare da lokacin kowanne", action: "gano wurin da aiki ke tsayawa da zaɓar gyara ɗaya: cire shi, sa na'ura ta yi shi, ko ba wani", standard: "gyaran ya shirya don gwadawa a wannan watan" },
    { id: "O3", condition: "Idan akwai manyan ayyuka biyu da kuke yi da kanku", action: "rubuta kowanne a matsayin tsari mai matakai, jerin dubawa (checklist) da ma'aunin inganci", standard: "ta yadda wani zai iya bin sa ba tare da yin tambayoyi ba" },
    { id: "O4", condition: "Idan kun san taimakon da kasuwancinku ya fi buƙata", action: "zaɓar tsakanin kayan AI da mutum, da shirya bayanin aiki mai adalci", standard: "da kalmomin da suka shafi aikin kawai, da bayani kan matsayin ma'aikaci bisa rukunai uku na IRS" },
    { id: "O5", condition: "Idan akwai hanyoyin samun abokan ciniki da dama", action: "shirya gwajin kwanaki 30 na hanya ɗaya mai buri, ma'auni da iyakar kashe kuɗi", standard: "kuna kwatanta kuɗin samun kowane sabon abokin ciniki da muhimman lambobinku" },
    { id: "O6", condition: "Don shirinku na faɗaɗa na kwanaki 90", action: "saita duban inganci uku na kowane mako, da bitar kayan AI da bayanan abokan ciniki", standard: "kuna bitar shirin duk bayan makonni biyu" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shirya don girma",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sanin muhimman lambobinku",
          minutes: 5,
          goal: "Bin muhimman lambobi biyar da amfani da AI don bayanin ma'anarsu.",
          text: [
            "Ba za ku iya ƙara abin da ba ku auna ba. Lambobi biyar suna da muhimmanci ga yawancin ƙananan kasuwanci: kuɗin shiga na wata (kuɗin da ke shigowa), kuɗin kashewa, riba (abin da ya rage), yawan abokan ciniki, da darajar kowane abokin ciniki a tsawon lokaci idan aka kwatanta da kuɗin samun sa.",
            "Ku saka watanni shida na ƙarshe a spreadsheet. Sannan ku nemi AI ya taimaka muku karanta shi: \"Ga kuɗin shiga, kuɗin kashewa da yawan abokan cinikina na kowane wata (babu sunaye). Wane yanayi kake gani? Wace lamba ya kamata ta dame ni?\" Ku duba lissafinsa da kanku.",
            "Kasuwanci ya shirya faɗaɗa idan kowace siyarwa tana kawo riba, kuma abokan ciniki suna dawowa ko suna ba da shawarar ku ga wasu. Idan kowace siyarwa tana asara, girma yana ƙara girman asarar."
          ],
          steps: ["Ku yi spreadsheet mai kuɗin shiga, kuɗin kashewa, riba da yawan abokan ciniki na watanni shida.", "Ku lissafa matsakaicin siyarwa da kuɗin samun abokin ciniki ɗaya.", "Ku nemi AI ya bayyana yanayi da haɗari (babu sunayen abokan ciniki).", "Ku sake yin kowane lissafi da kanku.", "Ku rubuta jimla ɗaya: shin kowace siyarwa tana kawo riba?"],
          words: [["Kuɗin shiga (revenue)", "duk kuɗin da ke shigowa daga tallace-tallace."], ["Riba (profit)", "kuɗin shiga a cire kuɗin kashewa."], ["Kuɗin samun abokin ciniki (customer acquisition cost)", "abin da kuke kashewa, a matsakaici, don samun sabon abokin ciniki ɗaya."], ["Faɗaɗa (scale)", "ƙara tallace-tallace da sauri fiye da kuɗin kashewa da ƙoƙari."]],
          slides: [
            { title: "Muhimman lambobi biyar", bullets: ["Kuɗin shiga da kuɗin kashewa", "Riba", "Yawan abokan ciniki", "Darajar abokin ciniki da kuɗin samun sa"] },
            { title: "AI yana karanta yanayin lambobi", bullets: ["Watanni shida a spreadsheet", "Ku nemi AI ya nuna yanayi da haɗari", "Ku duba lissafin da kanku"] },
            { title: "Kun shirya faɗaɗawa?", bullets: ["Kowace siyarwa tana kawo riba", "Abokan ciniki suna dawowa ko suna ba da shawarar ku", "Idan siyarwa tana asara, girma yana ƙara asarar"] }
          ],
          tryIt: "Ku gina takardar lambobinku na watanni shida, ku nemi AI ya nuna yanayi da haɗari ɗaya, ku duba lissafinsa, sannan ku rubuta ko kowace siyarwa tana kawo riba.",
          youCanNow: "bin muhimman lambobinku da yanke hukunci ko kasuwancinku ya shirya faɗaɗa.",
          quickCheck: [
            { objective: "O1", q: "Mene ne kuɗin samun abokin ciniki?", options: ["Abin da kuke kashewa a matsakaici don samun sabon abokin ciniki ɗaya", "Farashin da abokin ciniki ke biya", "Kuɗin hayarku", "Yawan abokan cinikinku"], answer: 0, why: "Yana nuna nawa kowane sabon abokin ciniki yake ci muku kafin ku same shi." },
            { objective: "O1", q: "AI ya ce ribarku ta ninka a watan jiya, amma kuna jin ba daidai ba ne. Me za ku yi?", options: ["Ku yi murna ku ɗauki ma'aikata nan take", "Ku duba lissafin da kanku a spreadsheet", "Ku nemi AI ya sake faɗa", "Ku ƙyale lambobinku"], answer: 1, why: "Koyaushe ku duba lissafin AI kafin ku yi aiki da shi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gano wurin da aiki ke tsayawa",
          minutes: 5,
          goal: "Gano mataki ɗaya da ya fi iyakance yawan aikin da kasuwancinku zai iya ɗauka.",
          text: [
            "Wurin da aiki ke tsayawa (bottleneck) shi ne mafi ƙunci da ke iyakance komai. A kasuwancin kek yana iya zama sararin murhu; a kasuwancin hidima sau da yawa lokacin mai kasuwanci ne na rubuta ƙiyasin farashi, bibiya ko duban inganci.",
            "Ku jera matakai tun daga tuntuɓar farko har zuwa abokin ciniki mai farin ciki, da lokacin da kowanne ke ɗauka ga kowane abokin ciniki. Ku tambayi AI: \"Ga matakaina da lokutansu. Ina ne aiki ke tsayawa, kuma waɗanne hanyoyi uku ne za a gyara shi: cire matakin, sa na'ura ta yi shi, ko ba wani?\"",
            "Ku fara gyara wurin da aiki ke tsayawa. Hanzarta kowane mataki dabam ba ya taimakawa, domin aiki har yanzu yana taruwa a wuri mai ƙuncin."
          ],
          steps: ["Ku jera kowane mataki tun daga tuntuɓar farko har zuwa kammala aikin.", "Ku rubuta lokacin da kowane mataki ke ɗauka ga kowane abokin ciniki da wanda ke yin sa.", "Ku nemi AI ya gano wurin da aiki ke tsayawa ya ba da shawarar gyara.", "Ku zaɓi: cire shi, sa na'ura ta yi shi, ko ba wani.", "Ku shirya gyara ɗaya da za ku gwada a wata mai zuwa."],
          words: [["Wurin da aiki ke tsayawa (bottleneck)", "mataki mafi jinkiri, wanda ke iyakance yawan abin da dukan kasuwancin zai iya yi."], ["Ba wani (hand off)", "ba wani mutum aiki don ya yi shi."]],
          slides: [
            { title: "Wuri mafi ƙunci", bullets: ["Yana iyakance komai", "Sau da yawa lokacin mai kasuwanci ne"] },
            { title: "Ku gano shi", bullets: ["Ku jera matakai da lokaci ga kowane abokin ciniki", "Ku tambayi AI inda aiki ke taruwa"] },
            { title: "Ku fara gyara shi", bullets: ["Cire shi, sa na'ura ta yi shi, ko ba wani", "Hanzarta sauran matakai ba ya taimakawa"] }
          ],
          tryIt: "Ku rubuta matakanku da lokutansu, ku nemi AI ya gano wurin da aiki ke tsayawa, sannan ku zaɓi gyara ɗaya (cire shi, sa na'ura ta yi shi, ko ba wani) da za ku gwada a wannan watan.",
          youCanNow: "gano matakin da ke iyakance girmanku da zaɓar gyara.",
          quickCheck: [
            { objective: "O2", q: "Mene ne wurin da aiki ke tsayawa (bottleneck)?", options: ["Matakinku mafi sauri", "Wani nau'in kwalba", "Mataki mafi jinkiri da ke iyakance komai", "Sabon abokin ciniki"], answer: 2, why: "Aiki yana taruwa a wurin, don haka yana iyakance girma." },
            { objective: "O2", q: "Kowane ƙiyasin farashi yana jiran ku rubuta shi, kuma oda suna taruwa. Wane gyara za ku iya zaɓa?", options: ["Ku hanzarta isar da kaya maimakon haka", "Ku karɓi ƙarin oda", "Ku daina aika ƙiyasin farashi", "Ku yi amfani da samfurin ƙiyasi ko ku ba mataimaki da aka horar aikin ƙiyasi"], answer: 3, why: "Sa na'ura ta yi matakin, ko ba wani shi, yana sakin hanyar aiki." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mayar da aikinku zuwa tsari",
          minutes: 5,
          goal: "Rubuta manyan ayyuka biyu a matsayin tsarin da wani (ko kayan AI) zai iya gudanarwa.",
          text: [
            "Idan komai yana cikin kanku, kasuwancin ba zai iya girma fiye da ku ba. Tsari shi ne rubutacciyar hanyar yin aiki: matakai, kayan aiki, jerin dubawa, da yadda \"aiki mai kyau\" yake.",
            "Ku ɗauki bidiyo ko murya yayin da kuke yin aiki, ko ku rubuta taƙaitattun bayanai, sannan ku nemi AI ya mayar da su zuwa SOP (ƙa'idar aiki ta yau da kullum) mai jerin dubawa da ma'aunin inganci. Ku nuna matakan da kayan AI za su iya yi, da inda dole mutum ya duba.",
            "Ku gwada kowane tsari ta hanyar sa wani ya bi shi yayin da kuke kallo shiru. Kowace tambaya da ya yi tana nuna mataki da ya ɓace. Ku ajiye dukan tsare-tsare a wuri ɗaya da kowa zai iya gani."
          ],
          steps: ["Ku zaɓi ayyuka biyu da suka fi ɗaukar lokacinku.", "Ku ɗauki bidiyo ko ku rubuta bayanai yayin da kuke yin kowanne.", "Ku nemi AI ya mayar da bayanan zuwa SOP mai jerin dubawa da ma'aunin inganci.", "Ku nuna matakan AI da wuraren da mutum zai duba.", "Ku gwada da wani mutum ku cike giɓin."],
          words: [["Tsari (system)", "rubutacciyar hanyar yin aiki da za a iya maimaitawa."], ["SOP", "standard operating procedure (ƙa'idar aiki ta yau da kullum): rubutattun matakan yin aiki."], ["Ma'aunin inganci (quality standard)", "bayani a sarari na yadda aiki mai kyau yake."]],
          slides: [
            { title: "Ku fitar da shi daga kanku", bullets: ["Tsari = matakai, kayan aiki, jerin dubawa, ma'auni", "Kasuwancin zai iya girma fiye da ku"] },
            { title: "Ku gina shi da AI", bullets: ["Ku ɗauki bidiyo ko ku rubuta taƙaitattun bayanai", "AI yana mayar da su zuwa SOP", "Ku nuna matakan AI da wuraren duban mutum"] },
            { title: "Ku gwada shi", bullets: ["Wani ya bi shi", "Kowace tambaya = mataki da ya ɓace", "Ku ajiye dukan tsare-tsare a wuri ɗaya"] }
          ],
          tryIt: "Ku mayar da ɗaya daga cikin manyan ayyukanku biyu zuwa SOP da taimakon AI, tare da jerin dubawa da ma'aunin inganci. Ku sa wani ya gwada shi idan za ku iya.",
          youCanNow: "mayar da ilimin aikinku zuwa tsare-tsaren da wasu ko kayan AI za su iya gudanarwa.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ma'aunin inganci a cikin SOP?", options: ["Bayani a sarari na yadda sakamako mai kyau yake", "Farashin kayan aikin", "Sa hannun mai kasuwanci", "Jerin abokan ciniki"], answer: 0, why: "Ma'aunin inganci yana faɗa wa mutum ma'anar aiki mai kyau." },
            { objective: "O3", q: "Wani mataimaki yana ta kiran ku da tambayoyi yayin da yake bin SOP ɗinku. Me za ku yi?", options: ["Ku sake yin aikin da kanku", "Ku ƙara bayanan da suka ɓace a SOP ku sake gwadawa", "Ku kori mataimakin", "Ku jefar da SOP ɗin"], answer: 1, why: "Tambayoyi suna nuna inda SOP bai cika ba tukuna." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shirya don girma",
        questions: [
          { objective: "O1", q: "Kowace siyarwa tana asarar ɗan kuɗi. Me zai faru idan kun faɗaɗa?", options: ["Riba za ta bayyana da kanta", "Asarar za ta ƙaru", "Babu abin da zai canja", "Kuɗin kashewa za su ɓace"], answer: 1, why: "Girma yana ninka duk abin da kowace siyarwa ke yi." },
          { objective: "O1", q: "Mene ne riba?", options: ["Yawan abokan ciniki", "Duk kuɗin da ke shigowa", "Farashinku", "Kuɗin shiga a cire kuɗin kashewa"], answer: 3, why: "Riba ita ce abin da ya rage bayan kuɗin kashewa." },
          { objective: "O1", q: "AI ya ce kuɗin kashewarku ya ƙaru da 40%. Me ya kamata ku yi?", options: ["Ku duba lissafin da kanku a spreadsheet", "Ku yarda ku firgita", "Ku goge spreadsheet ɗin", "Ku ƙyale shi"], answer: 0, why: "Lissafin AI yana iya zama ba daidai ba; ku tabbatar." },
          { objective: "O2", q: "Mene ne wurin da aiki ke tsayawa (bottleneck)?", options: ["Babban abokin cinikinku", "Wani nau'in kwalba", "Mataki mafi jinkiri da ke iyakance komai", "Hanyar tallace-tallace"], answer: 2, why: "Shi ne wuri mafi ƙunci a cikin aikinku." },
          { objective: "O3", q: "Ta yaya za ku san SOP ya cika?", options: ["AI ne ya rubuta shi", "Yana da tsawo sosai", "Wani zai iya bin sa ba tare da yin tambayoyi ba", "Yana da kyakkyawan suna"], answer: 2, why: "Tambayoyi lokacin gwaji suna nuna matakan da suka ɓace." }
        ]
      }
    },
    {
      name: "Babi na 2: Girma ba tare da lalacewa ba",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ɗaukar mataimaka: mutane da kayan AI",
          minutes: 6,
          goal: "Yanke shawarar wane taimako za ku ƙara, da shirya bayanin aiki.",
          text: [
            "Wasu ayyuka sun fi dacewa a ba kayan AI ko na'ura mai aiki da kanta (automation): rarrabawa, rubuta daftari, tsara jadawali. Wasu suna buƙatar mutum: hukunci, aikin hannu, da dangantaka da abokan ciniki. Ku yi amfani da wurin da aiki ke tsayawa da tsare-tsarenku don yanke shawara.",
            "Idan kun ɗauki mutum, AI zai iya rubuta daftarin bayanin aiki mai sarari daga SOP ɗinku: ayyuka, ƙwarewa, sa'o'i da iyakar albashi. Ku duba cewa kalmomin suna da adalci kuma ba sa ware kowa, ku cire duk abin da bai shafi aikin ba.",
            "Ɗan kwangila ko ma'aikaci? IRS (hukumar haraji ta Amurka) tana duba nau'o'in shaida uku: iko kan halayya (shin ku ne kuke iko kan yadda ake yin aikin?), iko kan kuɗi (wa ke iko kan biya, kashe kuɗi da kayan aiki?) da nau'in dangantaka (kwangiloli, alawus, aiki mai ci gaba kuma mai muhimmanci ga kasuwancin). Kuskure a nan zai iya jawo muku haraji da tara; ku karanta shafin IRS, ku tambayi akawu ko lauya. Dokokin jiha za su iya fi tsanani."
          ],
          steps: ["Ku jera ayyukan da kuke son a cire daga kanku.", "Ku nuna kowanne: kayan AI, ɗan kwangila ko ma'aikaci.", "Ku sa AI ya rubuta daftarin bayanin aiki daga SOP ɗinku.", "Ku duba kalmomin don adalci ku cire buƙatun da ba su shafi aikin ba.", "Ku karanta shafin IRS na matsayin ma'aikaci ku tambayi akawu kafin ku ɗauki kowa."],
          words: [["Ɗan kwangila (contractor)", "mutumin da ke da nasa kasuwanci kuma yana yi muku aiki, yawanci shi ne ke iko kan yadda yake yin sa."], ["Ma'aikaci (employee)", "mutumin da ku ne kuke iko kan aikinsa; ku ne kuke cirewa da biyan harajin ma'aikata."], ["Bayanin aiki (role description)", "rubutaccen taƙaitaccen bayanin ayyuka, ƙwarewa, sa'o'i da albashin wani aiki."]],
          slides: [
            { title: "Mutum ko kayan AI?", bullets: ["AI: rarrabawa, rubuta daftari, tsara jadawali", "Mutane: hukunci, aikin hannu, dangantaka"] },
            { title: "Bayanin aiki da AI", bullets: ["Daftari daga SOP ɗinku", "Ayyuka, ƙwarewa, sa'o'i, iyakar albashi", "Ku duba kalmomi suna da adalci kuma sun shafi aikin"] },
            { title: "Ɗan kwangila ko ma'aikaci? (IRS)", bullets: ["Iko kan halayya", "Iko kan kuɗi", "Nau'in dangantaka", "Ku tambayi akawu; dokokin jiha za su iya fi tsanani"] }
          ],
          sources: [{ name: "IRS: Independent Contractor (Self-Employed) or Employee? (Ɗan kwangila ko ma'aikaci?)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" }],
          tryIt: "Ku zaɓi taimakon da kuka fi buƙata. Idan mutum ne, ku sa AI ya rubuta daftarin bayanin aiki daga SOP ɗinku ku duba adalcinsa; ku rubuta ko kuna ganin aikin ɗan kwangila ne ko na ma'aikaci da dalili, ta amfani da rukunai uku na IRS.",
          youCanNow: "zaɓar tsakanin kayan AI da mutane don girma, da shirya bayanin aiki mai adalci.",
          quickCheck: [
            { objective: "O4", q: "Wane aiki ne yawanci yake buƙatar mutum maimakon AI?", options: ["Rarraba imel", "Rubuta daftarin samfuri", "Gina dangantaka da manyan abokan ciniki", "Taƙaita bayanai"], answer: 2, why: "Dangantaka tana buƙatar hukuncin mutum da amincewa." },
            { objective: "O4", q: "Bayanin aikin da AI ya rubuta yana cewa \"matashi, ɗan ƙungiya mai kuzari\". Me za ku yi?", options: ["Ku bar shi", "Ku ƙara siffofi", "Ku saka shi kamar yadda yake", "Ku canja shi zuwa kalmomi masu adalci da suka shafi aikin"], answer: 3, why: "Bayanin aiki ya kamata ya zama mai adalci kuma game da aikin." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ƙara abokan ciniki mataki-mataki",
          minutes: 5,
          goal: "Zaɓi hanya ɗaya ta samun abokan ciniki da tsara ƙaramin gwaji da za a iya aunawa.",
          text: [
            "Hanyoyin samun abokan ciniki su ne yadda sababbin abokan ciniki ke samun ku: shawarar abokan ciniki ga wasu (referrals), haɗin gwiwa, binciken yanki da jerin taswira, kafofin sada zumunta, imel, tallace-tallacen da ake biya, da kasuwannin intanet. Yawancin ƙananan kasuwanci sun fi girma ta hanya ɗaya ko biyu da aka yi da kyau.",
            "Ku tambayi AI: \"Kasuwancina [nau'i] ne mai hidima ga [abokin ciniki]. Ka ba da shawarar hanyoyi biyar na samun abokan ciniki, yadda kowanne zai yi aiki a gare ni, nawa zai ci, da yadda zan auna shi.\" Ku zaɓi wanda ya dace da abokin cinikinku da kasafin kuɗinku.",
            "Ku yi ƙaramin gwaji na kwanaki 30 mai buri a sarari: \"Ku nemi tsofaffin abokan ciniki 20 su ba da shawarar ku ga wasu; buri: sababbin masu sha'awa 5.\" Ku auna sakamakon, ku kwatanta kuɗin samun kowane sabon abokin ciniki da lambobinku na Darasi na 1, sannan kawai ku ƙara kashe kuɗi."
          ],
          steps: ["Ku nemi AI hanyoyi biyar na samun abokan ciniki tare da kuɗinsu da ma'aunansu.", "Ku zaɓi ɗaya da ya dace da abokin cinikinku da kasafin kuɗinku.", "Ku saita gwajin kwanaki 30 mai buri a sarari.", "Ku bi sakamako da kuɗin samun kowane sabon abokin ciniki.", "Ku yanke shawara: ku ƙara shi, ku canja shi ko ku daina."],
          words: [["Hanyar samun abokan ciniki (growth channel)", "hanyar da sababbin abokan ciniki ke samun ku su saya daga gare ku."], ["Shawarar abokin ciniki (referral)", "lokacin da abokin ciniki ya ba da shawarar ku ga wani."], ["Gwaji (test)", "ƙaramin ƙoƙari mai iyakar lokaci da buri a sarari."]],
          slides: [
            { title: "Yadda abokan ciniki ke samun ku", bullets: ["Shawarar abokan ciniki da haɗin gwiwa", "Binciken yanki, kafofin sada zumunta, imel", "Tallace-tallacen da ake biya da kasuwannin intanet"] },
            { title: "Ku zaɓi ɗaya ko biyu", bullets: ["Ku nemi AI zaɓuɓɓuka, kuɗi, ma'auni", "Ku zaɓi abin da ya dace da abokin ciniki da kasafin kuɗi"] },
            { title: "Ku fara gwaji ƙarami", bullets: ["Kwanaki 30, buri a sarari", "Ku bi kuɗin samun kowane sabon abokin ciniki", "Ƙara, canja ko daina"] }
          ],
          tryIt: "Ku zaɓi hanya ɗaya ta samun abokan ciniki da taimakon AI, ku rubuta gwajin kwanaki 30: abin da za ku yi, buri, yadda za ku auna shi, da iyakar kuɗin da za ku kashe.",
          youCanNow: "zaɓar hanyar samun abokan ciniki da gwada ta kafin ku ƙara kashe kuɗi.",
          quickCheck: [
            { objective: "O5", q: "Me gwajin girma mai kyau na kwanaki 30 ya ƙunsa?", options: ["Buri a sarari da iyakar kashe kuɗi", "Kashe kuɗi gwargwadon iko", "Babu hanyar auna shi", "Kowace hanya a lokaci ɗaya"], answer: 0, why: "Buri da iyaka suna faɗa muku ko hanyar tana aiki ba tare da babban haɗari ba." },
            { objective: "O5", q: "Gwajinku yana kawo abokan ciniki, amma kowanne yana ci fiye da darajarsa a gare ku. Me za ku yi?", options: ["Ku ƙara kashe kuɗi a kansa", "Ku daina ko ku canja hanyar kafin ku ƙara kashe kuɗi", "Ku ƙyale lambobin", "Ku rage farashinku"], answer: 1, why: "Ku kwatanta kuɗin samun kowane sabon abokin ciniki da darajar abokin ciniki kafin ku faɗaɗa wata hanya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kiyaye inganci yayin girma",
          minutes: 5,
          goal: "Saita duban inganci na kowane mako da shiri kan haɗarin AI da bayanai yayin girma.",
          text: [
            "Girma sau da yawa yana lalata inganci: aikin gaggawa, jinkirin amsa, daftarin AI da babu wanda ya duba. Ku zaɓi lambobin inganci uku da za ku riƙa duba kowane mako, kamar matsakaicin maki na ra'ayoyin abokan ciniki (reviews), lokacin amsawa, da yawan sake yin aiki ko mayar da kuɗi.",
            "Yayin da ƙarin aiki ke wucewa ta kayan AI, haɗari ma yana ƙaruwa: ƙarin bayanan abokan ciniki a cikin ƙarin kayan aiki, ƙarin abubuwan AI da ke fita. Ku duba waɗanne kayan aiki ke riƙe da bayanan abokan ciniki, wa ke da damar shiga, kuma cewa har yanzu mutum yana duba duk abin da abokan ciniki za su gani.",
            "Ku haɗa shi duka a shirin kwanaki 90. Ku nemi AI ya taimaka muku tsara shi, amma kowace lamba da kwanan wata ya kamata ta zama wadda kuka yarda da ita. Ku yi bitarsa duk bayan makonni biyu ku daidaita."
          ],
          steps: ["Ku zaɓi lambobin inganci uku da za ku bi kowane mako.", "Ku jera kayan aikin da ke riƙe da bayanan abokan ciniki da waɗanda za su iya shiga.", "Ku tabbatar cewa mutum yana duba duk abin da abokan ciniki ke gani.", "Ku nemi AI ya tsara shirinku na kwanaki 90 daga bayananku.", "Ku saita bita duk bayan makonni biyu."],
          words: [["Duban inganci (quality check)", "duba lamba ko samfurin aiki a kai a kai don tabbatar da cewa ma'auni yana nan."], ["Yawan mayar da kuɗi (refund rate)", "kashi na tallace-tallacen da kuka mayar wa abokan ciniki kuɗinsu."]],
          slides: [
            { title: "Girma zai iya lalata inganci", bullets: ["Aikin gaggawa, jinkirin amsa", "Daftarin AI da babu wanda ya duba"] },
            { title: "Ku duba lambobi uku kowane mako", bullets: ["Maki na ra'ayoyin abokan ciniki", "Lokacin amsawa", "Yawan sake yin aiki ko mayar da kuɗi"] },
            { title: "Haɗarin AI da bayanai ma suna ƙaruwa", bullets: ["Waɗanne kayan aiki ke riƙe da bayanan abokan ciniki?", "Wa ke da damar shiga?", "Mutum yana duba abin da abokan ciniki ke gani"] },
            { title: "Shirinku na kwanaki 90", bullets: ["AI yana tsara shi; ku ne kuke saka lambobi na gaske", "Bita duk bayan makonni biyu"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta shirinku na faɗaɗa na kwanaki 90 a shafi ɗaya: muhimman lambobi da buri, gyaran wurin da aiki ke tsayawa, tsare-tsare biyu, mataimakin da za ku ƙara, gwajin girma ɗaya, da duban inganci uku na kowane mako.",
          youCanNow: "tsara da gudanar da girma tare da AI yayin da kuke kare inganci da bayanan abokan ciniki.",
          quickCheck: [
            { objective: "O6", q: "Wace ce lambar inganci ta kowane mako?", options: ["Launin da kuka fi so", "Yawan mabiya a kafofin sada zumunta", "Yawan sake yin aiki ko mayar da kuɗi", "Girman ofis"], answer: 2, why: "Yawan sake yin aiki da mayar da kuɗi suna nuna ko inganci yana raguwa." },
            { objective: "O6", q: "Tallace-tallace suna ƙaruwa, amma koke-koke sun ninka a wannan watan. Me shirinku ya ce ku yi?", options: ["Ku ci gaba da girma da sauri", "Ku ƙyale shi har zuwa kwata mai zuwa", "Ku cire duban inganci", "Ku nemo dalilin ku gyara shi kafin ku ƙara abokan ciniki"], answer: 3, why: "Duban inganci yana nan ne don kada girma ya lalata abin da abokan ciniki ke so." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Girma ba tare da lalacewa ba",
        questions: [
          { objective: "O4", q: "Wane aiki ne ya fi dacewa a ba kayan AI?", options: ["Rarraba buƙatun da ke shigowa", "Gina amincewa da babban abokin cinikinku", "Aikin gyara da hannu", "Yanke shawarar wanda za a ɗauka aiki"], answer: 0, why: "Rarrabawa ta yau da kullum ta dace da AI; hukunci da dangantaka suna buƙatar mutane." },
          { objective: "O4", q: "Wanne ne ɗaya daga cikin rukunai uku na IRS don matsayin ma'aikaci?", options: ["Nau'in waya", "Launin da aka fi so", "Shekarun karatu", "Iko kan halayya"], answer: 3, why: "Iko kan halayya, iko kan kuɗi da nau'in dangantaka su ne rukunai uku." },
          { objective: "O5", q: "Kafin ku ƙara kashe kuɗi a wata hanyar samun abokan ciniki, ya kamata ku:", options: ["Kashe dukan kasafin kuɗinku", "Yi ƙaramin gwaji da aka auna", "Kwaikwayi abokin hamayya", "Ƙyale aunawa"], answer: 1, why: "Gwaji yana nuna ko yana aiki kafin ku zuba jari." },
          { objective: "O6", q: "Wace ce lambar inganci mai kyau ta kowane mako?", options: ["Matsakaicin lokacin amsa wa abokan ciniki", "Yawan manhajojin da kuke amfani da su", "Girman tambarinku (logo)", "Tsawon bayanin kanku a kafofin sada zumunta"], answer: 0, why: "Lokacin amsawa yana nuna ko hidima tana raguwa." },
          { objective: "O6", q: "Yayin da ƙarin aiki ke wucewa ta kayan AI, ya kamata ku:", options: ["Ba kowane kayan aiki dukan bayananku", "Daina duba aikin AI", "Duba waɗanne kayan aiki ke riƙe da bayanan abokan ciniki da wa ke da damar shiga", "Cire duban mutane"], answer: 2, why: "Haɗarin bayanai da inganci yana ƙaruwa tare da girma." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Faɗaɗa Kasuwanci da Taimakon AI",
    questions: [
      { objective: "O1", q: "Faɗaɗa kasuwanci yana nufin:", options: ["Ƙara farashi kawai", "Ƙara tallace-tallace da sauri fiye da kuɗin kashewa da ƙoƙari", "Yin aiki ƙarin sa'o'i", "Sayen ƙarin kayan aiki"], answer: 1, why: "Wannan ita ce ma'anar da kwas ɗin ke amfani da ita." },
      { objective: "O1", q: "Kuɗin shiga (revenue) shi ne:", options: ["Yawan abokan cinikinku", "Abin da ya rage bayan kuɗin kashewa", "Kuɗin kayan aikinku", "Duk kuɗin da ke shigowa daga tallace-tallace"], answer: 3, why: "Kuɗin shiga shi ne kuɗin da ke shigowa." },
      { objective: "O1", q: "Kuɗin samun abokin ciniki shi ne:", options: ["Haraji", "Farashinku", "Kuɗin hayarku", "Abin da kuke kashewa a matsakaici don samun sabon abokin ciniki ɗaya"], answer: 3, why: "Wannan ita ce ma'anarsa." },
      { objective: "O1", q: "Kafin ku nemi AI ya bincika lambobinku, ya kamata ku:", options: ["Ƙara lambobin kati", "Cire sunayen abokan ciniki", "Ƙara kalmomin sirri", "Saka su a intanet"], answer: 1, why: "Ku kiyaye bayanan sirri daga kayan AI." },
      { objective: "O1", q: "Kasuwanci ya shirya faɗaɗa idan:", options: ["Yana da manhajoji da yawa", "Yana da sabon tambari", "Kowace siyarwa tana kawo riba kuma abokan ciniki suna dawowa ko suna ba da shawara", "Mai shi yana aiki sa'o'i 80"], answer: 2, why: "Tallace-tallace masu riba da ake maimaitawa za su iya girma." },
      { objective: "O2", q: "A kasuwancin hidima, wurin da aiki ke tsayawa sau da yawa shi ne:", options: ["Lokacin mai kasuwanci", "Launin motar", "Rubutun shafin intanet", "Yawan mabiya"], answer: 0, why: "Masu kasuwanci sau da yawa suna yin ƙiyasin farashi, bibiya da dubawa da kansu." },
      { objective: "O2", q: "Hanyoyi uku na gyara wurin da aiki ke tsayawa su ne:", options: ["Ƙara, rage ko daskarar da farashi", "Ƙyale, ɓoye ko jinkirta", "Cire shi, sa na'ura ta yi shi, ko ba wani", "Saya, sayar ko yin haya"], answer: 2, why: "Waɗannan suna cire iyakar." },
      { objective: "O2", q: "Me yasa za a fara gyara wurin da aiki ke tsayawa?", options: ["Hanzarta sauran matakai ba ya taimakawa yayin da aiki ke taruwa a can", "Shi ne mataki mafi arha", "Shi ne mafi daɗi", "Saboda AI ya faɗa"], answer: 0, why: "Wuri mafi ƙunci yana iyakance dukan aikin." },
      { objective: "O3", q: "Tsari shi ne:", options: ["Sunan kamfanin kwamfuta", "Rubutacciyar hanyar yin aiki da za a iya maimaitawa", "Hanyar tallace-tallace", "Takardar haraji"], answer: 1, why: "Wannan ita ce ma'anarsa." },
      { objective: "O3", q: "SOP ya kamata ya ƙunshi:", options: ["Lambobin katin abokan ciniki", "Suna kawai", "Kalmomin sirrinku", "Matakai, jerin dubawa da ma'aunin inganci"], answer: 3, why: "Waɗannan suna sa a iya maimaita aikin kuma a duba shi." },
      { objective: "O3", q: "A cikin SOP, kuna nuna matakan AI da:", options: ["Inda dole mutum ya duba", "Waƙoƙin da kuka fi so", "Farashin abokan hamayya", "Babu wani abu dabam"], answer: 0, why: "Duban mutum yana kiyaye inganci." },
      { objective: "O4", q: "Wane aiki ne ke buƙatar mutum maimakon AI?", options: ["Taƙaita bayanai", "Rarraba imel", "Rubuta daftarin jadawali", "Gina dangantaka da abokan ciniki"], answer: 3, why: "Dangantaka da hukunci suna buƙatar mutane." },
      { objective: "O4", q: "Idan AI ya rubuta daftarin bayanin aiki, ya kamata ku:", options: ["Ƙara iyakar shekaru", "Saka shi ba tare da canji ba", "Duba shi don kalmomi masu adalci da suka shafi aikin", "Cire iyakar albashi"], answer: 2, why: "Kalmomi masu adalci suna hana matsalolin nuna wariya." },
      { objective: "O4", q: "Don neman IRS ta yanke hukunci kan matsayin ma'aikaci, kowane ɓangare zai iya cike:", options: ["Form 1040-ES", "Form SS-8", "W-2", "Tsarin kasuwanci (business plan)"], answer: 1, why: "Shafin IRS ya ambaci Form SS-8." },
      { objective: "O4", q: "Kuskure a matsayin ma'aikaci zai iya jawo:", options: ["Babu komai", "Talla kyauta", "Rage kuɗin kashewa har abada", "Haraji da tara"], answer: 3, why: "Kuskuren rarraba ma'aikata yana da sakamako na haraji." },
      { objective: "O5", q: "Wace ce hanyar samun abokan ciniki?", options: ["SOP ɗinku", "Spreadsheet ɗinku", "Shawarar abokan ciniki ga wasu", "Wurin da aikinku ke tsayawa"], answer: 2, why: "Shawarar abokan ciniki tana kawo sababbin abokan ciniki." },
      { objective: "O5", q: "Gwaji mai kyau na kwanaki 30 yana da:", options: ["Buri a sarari da iyakar kashe kuɗi", "Babu ma'auni", "Kasafin kuɗi marar iyaka", "Babu ranar ƙarewa"], answer: 0, why: "Buri da iyaka suna sa gwaji ya yi amfani." },
      { objective: "O5", q: "Bayan gwajin girma, kuna kwatanta kuɗin samun kowane sabon abokin ciniki da:", options: ["Tambarin abokin hamayyarku", "Muhimman lambobinku, kamar darajar abokin ciniki", "Yanayin iska", "Kuɗin wayarku"], answer: 1, why: "Hanya tana da amfani idan abokan ciniki sun fi daraja fiye da abin da suke ci." },
      { objective: "O6", q: "Wace ce lambar inganci da za ku riƙa duba yayin girma?", options: ["Yawan nau'o'in rubutu (fonts)", "Yawan sake yin aiki ko mayar da kuɗi", "Yawan tsire-tsiren ofis", "Tsawon sa hannun imel"], answer: 1, why: "Sake yin aiki da mayar da kuɗi suna nuna inganci yana raguwa." },
      { objective: "O6", q: "Sau nawa ya kamata ku yi bitar shirinku na kwanaki 90?", options: ["Duk bayan makonni biyu", "Ba sau ɗaya ba", "Sau ɗaya a ƙarshe kawai", "Kowace sa'a"], answer: 0, why: "Bita a kai a kai tana ba ku damar daidaitawa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      5,
      8,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Muhimman lambobi",
        objective: "O1",
        notYet: "Lambobi ƙasa da biyar, babu buri, ko ba a duba lissafin AI ba.",
        meets: "Muhimman lambobi biyar na yau tare da burin kwanaki 90, an duba lissafi.",
        exceeds: "Ya faɗi a sarari ko kowace siyarwa tana kawo riba, da dalili."
      },
      {
        name: "Gyaran wurin da aiki ke tsayawa",
        objective: "O2",
        notYet: "Ba a ambaci wurin da aiki ke tsayawa ba, ko gyaran bai bayyana ba.",
        meets: "Babban wurin da aiki ke tsayawa da gyara ɗaya: cire shi, sa na'ura ta yi shi, ko ba wani.",
        exceeds: "Ya nuna lokutan matakai da ke tabbatar da cewa nan ne aiki ke tsayawa."
      },
      {
        name: "Tsare-tsare",
        objective: "O3",
        notYet: "Tsare-tsare ƙasa da biyu, ko babu matakai ko ma'aunin inganci.",
        meets: "An ambaci tsare-tsare biyu, kowanne da matakai, jerin dubawa da ma'aunin inganci.",
        exceeds: "Aƙalla ɗaya wani mutum ya gwada shi."
      },
      {
        name: "Mataimaki da gwajin girma",
        objective: "O5",
        notYet: "Babu kuɗin mataimakin, ko gwajin girma ba shi da buri ko iyaka.",
        meets: "Mataimakin da za a ƙara tare da kuɗinsa, da gwajin girma ɗaya mai buri, ma'auni da iyaka.",
        exceeds: "An rubuta matsayin ma'aikaci bisa rukunan IRS, da shirin kwatanta kuɗin samun kowane sabon abokin ciniki."
      },
      {
        name: "Duban inganci",
        objective: "O6",
        notYet: "Duba ƙasa da uku, ko babu ranar bita.",
        meets: "Duban inganci uku na kowane mako da bita duk bayan makonni biyu.",
        exceeds: "Ya kuma haɗa da duba waɗanne kayan AI ke riƙe da bayanan abokan ciniki."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu kasuwanci da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da suka kammala gyaran wurin da aiki ke tsayawa da gwajin girma ɗaya cikin kwanaki 90 (binciken biyo baya)",
      "Canji a kuɗin shiga da ribar kowace siyarwa da masu kasuwanci suka bayar bayan kwanaki 90",
      "Masu kasuwanci da suka ƙara mataimaki (mutum ko kayan AI) tare da rubutaccen tsari da zai bi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai spreadsheet da mataimakin AI kyauta",
      "Lambobin tallace-tallace da kuɗin kashewa na watanni shida ba tare da sunayen abokan ciniki ba",
      "Samfurin shirin kwanaki 90 na shafi ɗaya",
      "Kusan minti 75 don darussa da gwaje-gwaje, da ƙarin lokaci kan lambobin mai kasuwancin"
    ],
    facilitatorNotes: [
      "Ku nemi masu kasuwanci su kawo lambobin watanni shida kafin zama na farko.",
      "Ku duba cewa an cire sunayen abokan ciniki kafin a saka kowane bayani a AI.",
      "Ku tura tambayoyin matsayin ma'aikaci, haraji da ɗaukar ma'aikata zuwa shafukan IRS da akawu ko lauya.",
      "Ku sa masu kasuwanci su gabatar da shirinsu na kwanaki 90 a ƙananan rukunai don samun ra'ayi.",
      "Ku ba da maki ga shirin da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
