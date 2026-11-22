"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-ai-web-development.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-ai-web-development-ha",
  lang: "ha",
  translationOf: "underserved-ai-web-development",
  category: "Undeserved Community",
  name: "Gina Shafin Intanet da Taimakon AI",
  skills: "Tsara shafin intanet mai shafi ɗaya, Gina shafi kyauta da Google Sites, Rubuta kalmomin shafi da AI, Karantawa da gyara HTML mai sauƙi, Saka lambar da AI ya rubuta lafiya, Wallafawa da duba shafi",
  outcome: "tsarawa, ginawa da wallafa shafin intanet mai shafi ɗaya kyauta don kasuwancin iyali, ƙungiya ko ƙungiyar al'umma da Google Sites, ta amfani da mataimakin AI kyauta don rubuta kalmomin da ɗan guntun HTML da kuke karantawa, gwadawa da gyarawa da kanku.",
  about: [
    "Shafin intanet yana taimaka wa mutane su sami ƙungiyar coci, ƙungiyar unguwa, shirin koyarwa ko ƙaramin kasuwancin iyali. Ba sai kuna da kuɗi ko digiri a kimiyyar kwamfuta ba kafin ku yi ɗaya.",
    "A wannan kwas ɗin za ku tsara shafi ɗaya, ku gina shi da Google Sites (kyauta da asusun Google), ku yi amfani da mataimakin AI kyauta don taimakon rubuta kalmomin, kuma ku koyi isasshen HTML, wato harshen shafukan intanet, don karantawa, gwadawa da gyara ɗan guntun lambar da AI ya rubuta muku.",
    "Kuna iya aiki a kwamfutar gida ko ta ɗakin karatu. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" da ke gina ainihin shafinku. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku wallafa shafin Google Site mai shafi ɗaya don ƙungiyar al'umma ko ƙaramin kasuwanci na gaske ko na atisaye. Dole ya kasance yana da take a sarari, gajeren sashen \"Game da mu\" da AI ya taimaka kuma kuka gyara da kalmominku, ƙaramin akwatin HTML mai lokutan aiki da hanyoyin tuntuɓa da kuka gwada kuka gyara, babu adireshin gida na sirri ko lambar wayar mutum, kuma dole ya yi kyau a waya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa a al'ummomin da ba a kula da su sosai ba, waɗanda ke son shafin intanet don ƙungiyar coci, ƙungiyar unguwa, shirin koyarwa, ƙungiya ko ƙaramin kasuwancin iyali, da mutanen da ke son fara aikin gina shafukan intanet.",
    startingPoint: "Suna amfani da waya kuma suna ziyartar shafukan intanet. Ba su taɓa gina shafin intanet ko karanta HTML ba, kuma wataƙila suna da asusun Google amma ba su yi amfani da Google Sites ba. Wasu sun ɗan yi amfani da mataimakin AI.",
    gap: "Ƙungiyoyi da ƙananan kasuwanci da ba a iya samun su a intanet suna rasa membobi da abokan ciniki, kuma biyan kuɗin shafin intanet ya fi ƙarfinsu. Masu koyo suna buƙatar tsarawa da wallafa shafi kyauta, amfani da AI don kalmomi da lamba yayin da suke tabbatar da kowane bayani, da kiyaye bayanan sirri.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 7)",
      "Na'urori: ana buƙatar kwamfuta don gini a Google Sites; waya don duba shafin da ke kan intanet",
      "Kuɗi: asusun Google, Google Sites da editan HTML na intanet kyauta kaɗai",
      "Tsaro: a gwada duk lambar AI, HTML mai sauƙi kaɗai, kuma babu script da ba ku nema ba",
      "Sirri: babu adireshin gida, lambar wayar mutum ko hotunan yara ba tare da izini a rubuce ba"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas ɗin \"Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da ƙungiya ko kasuwanci na gaske ko na atisaye", action: "tsara shafin intanet mai shafi ɗaya tare da masu karanta shi, abu ɗaya da baƙi za su yi, sassa da hotuna", standard: "mai sassa huɗu ko biyar da hotunan da kuke da izinin amfani da su kaɗai" },
    { id: "O2", condition: "Ta amfani da asusun Google kyauta", action: "ƙirƙirar Google Site mai take, akwatin rubutu ga kowane sashe da kuka tsara da theme mai sauƙin karantawa", standard: "ba tare da taimakon kowa ba" },
    { id: "O3", condition: "Idan kuna da ainihin bayanan ƙungiyarku", action: "rubuta sashen Game da Mu da mataimakin AI kuma ku gyara shi da kalmominku", standard: "kuna cire kowane bayani da ba daidai ba ko ƙirƙirarre" },
    { id: "O4", condition: "Idan aka ba ku ɗan guntun HTML a editan intanet", action: "gane tags ɗinsa da canja kalmomin da ke tsakaninsu", standard: "ta yadda shafin zai ci gaba da aiki daidai" },
    { id: "O5", condition: "Ta amfani da mataimakin AI kyauta", action: "neman akwatin HTML mai sauƙi, gwada shi, gyara matsala ɗaya da saka shi a Google Site ɗinku", standard: "kowane bayani daidai kuma babu script da ba ku nema ba" },
    { id: "O6", condition: "Idan shafinku ya shirya", action: "wallafa shi, duba shi a waya da cire bayanan sirri", standard: "hanyoyin haɗi suna aiki, rubutu yana karantuwa, kuma babu adireshin sirri, lambar mutum ko hotunan da ba a amince da su ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsarawa da gina shafinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yadda shafukan intanet ke aiki, da tsara shafinku",
          minutes: 4,
          goal: "Rubuta tsari mai sauƙi don shafin intanet mai shafi ɗaya.",
          text: [
            "Shafin intanet tarin shafuka ne da aka ajiye a wata kwamfuta da ake kira server. Idan kun rubuta adireshi, burauzarku tana tambayar server ɗin shafin, sannan ta nuna muku shi.",
            "Kafin ku gina, ku tsara. Ku amsa tambayoyi huɗu: Don wa shafin yake? Mene ne abu ɗaya da baƙi za su yi (kira, ziyara, rajista, ba da gudummawa)? Waɗanne sassa kuke buƙata? Waɗanne hotuna za ku iya amfani da su da izini?",
            "Yawancin ƙananan shafukan al'umma suna buƙatar sassa kaɗan kawai: take, \"Game da mu\", abin da kuke bayarwa, lokutan aiki da yadda za a tuntuɓe ku."
          ],
          steps: ["Ku rubuta don wa shafin yake.", "Ku rubuta abu ɗaya da kuke son baƙi su yi.", "Ku jera sassa huɗu ko biyar.", "Ku jera hotunan da kuka mallaka ko kuke da izinin amfani da su."],
          words: [["Shafin intanet (website)", "shafi ɗaya ko fiye da mutane za su iya ziyarta a intanet."], ["Server", "kwamfutar da ke ajiye shafukan intanet kuma tana tura shafuka ga baƙi."], ["Burauzar intanet (browser)", "shirin da kuke amfani da shi don ziyartar shafukan intanet, kamar Chrome, Edge ko Safari."]],
          slides: [
            { title: "Yadda shafin intanet ke aiki", bullets: ["An ajiye shafuka a server", "Burauzarku tana neman shafin", "Server ɗin yana mayar da shi"] },
            { title: "Ku tsara da tambayoyi huɗu", bullets: ["Don wa yake?", "Me baƙi za su yi?", "Waɗanne sassa kuke buƙata?", "Waɗanne hotuna za ku iya amfani da su?"] },
            { title: "Shafi ɗaya mai sauƙi", bullets: ["Take", "Game da mu da abin da kuke bayarwa", "Lokutan aiki da yadda za a tuntuɓe ku"] }
          ],
          tryIt: "Ku zaɓi ƙungiya ta gaske ko ta atisaye (misali ƙungiyar koyar da matasa ko motar sayar da abinci ta iyali). Ku rubuta tsarinku: don wa yake, abu ɗaya da baƙi za su yi, sassa biyar da hotuna biyu da za ku iya amfani da su.",
          youCanNow: "bayyana yadda shafin intanet ke isowa gare ku da tsara shafi ɗaya.",
          quickCheck: [
            { objective: "O1", q: "Mene ne server?", options: ["Kwamfutar da ke ajiye shafukan intanet kuma tana tura shafuka", "Allon da kuke kallo", "Adireshin shafin intanet", "Wani nau'in waya"], answer: 0, why: "Server yana ajiye shafukan intanet kuma yana tura su idan burauza ta nema." },
            { objective: "O1", q: "Shafin motar abincinku ya kamata ya sa mutane su zo su ci abinci. Mene ne abu ɗayan?", options: ["Karanta tarihin tacos", "Gano a ina da yaushe motar za ta kasance", "Rubuta dogon sharhi", "Sauke wani fayil"], answer: 1, why: "Abu ɗayan shi ne abin da kuka fi son baƙi su yi, kamar zuwa wajen motar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gina shafi kyauta da Google Sites",
          minutes: 5,
          goal: "Ƙirƙiri Google Site mai take da sassan da kuka tsara.",
          text: [
            "Google Sites kayan gina shafin intanet ne kyauta da ke zuwa tare da asusun Google. Kuna gini ta danna abubuwa da rubutu, ba ta rubuta lamba (code) ba.",
            "Ku buɗe sites.google.com a kwamfuta ku fara sabon shafi, ko fanko ko daga template. Ku ba shafin suna ku rubuta taken shafi. A gefen dama za ku sami Insert (don ƙara akwatunan rubutu, hotuna da sauransu), Pages da Themes.",
            "Ku ƙara akwatin rubutu ga kowane sashe daga tsarinku. Ku zaɓi theme mai launuka masu sauƙin karantawa. Google Sites yana ajiye aikinku yayin da kuke ci gaba."
          ],
          steps: ["Ku je sites.google.com ku shiga da asusun Google ɗinku.", "Ku fara sabon shafi daga fanko ko daga template.", "Ku rubuta sunan shafin da taken shafi.", "Ku yi amfani da Insert a dama don ƙara akwatin rubutu ga kowane sashe.", "Ku zaɓi theme mai sauƙin karantawa."],
          words: [["Template", "zane da aka riga aka shirya wanda kuke cikawa da kalmominku."], ["Theme", "launuka da salon rubutu (fonts) da ake amfani da su a duk shafinku."]],
          sources: [{ name: "Google Sites Help: Create, name or copy a site", url: "https://support.google.com/sites/answer/6372878" }],
          slides: [
            { title: "Google Sites", bullets: ["Kyauta tare da asusun Google", "Kuna gini ta danna abubuwa da rubutu", "Yana ajiye aiki yayin da kuke ci gaba"] },
            { title: "Ku fara shafinku", bullets: ["Ku buɗe sites.google.com", "Ku fara da fanko ko daga template", "Ku rubuta sunan shafi da taken shafi"] },
            { title: "Ku ƙara sassanku", bullets: ["Insert a dama: akwatunan rubutu, hotuna", "Akwatin rubutu ɗaya ga kowane sashe", "Ku zaɓi theme mai sauƙin karantawa"] }
          ],
          tryIt: "Ku fara sabon Google Site don ƙungiyarku. Ku ƙara take da akwatin rubutu fanko ga kowane sashe a tsarinku, sannan ku zaɓi theme.",
          youCanNow: "gina tsarin farko na shafin intanet kyauta da Google Sites.",
          quickCheck: [
            { objective: "O2", q: "Me theme yake canjawa a Google Sites?", options: ["Adireshin shafinku", "Wanda zai iya ganin shafin", "Launuka da salon rubutu", "Bayanan shafin"], answer: 2, why: "Theme yana saita launuka da salon rubutun shafinku." },
            { objective: "O2", q: "Kuna son ƙara sashen \"Lokutan aiki\" a Google Site ɗinku. Me za ku danna?", options: ["Publish", "Themes", "Pages", "Insert, sannan akwatin rubutu"], answer: 3, why: "Insert a gefen dama yana ƙara akwatunan rubutu, hotuna da sauransu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta kalmomin shafinku da AI",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI kyauta don rubuta daftarin sashen Game da mu, sannan ku mai da shi naku.",
          text: [
            "Mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini zai iya rubuta daftarin farko na kalmomin shafinku. Ku ba shi bayanan gaskiya da salon da kuke so.",
            "Misalin prompt: \"Ka rubuta Game da Mu mai kalmomi 60, mai fara'a, don ƙungiyar koyarwa bayan makaranta kyauta a cibiyar al'umma. Muna taimaka wa yara daga aji 3 zuwa 8 a karatu da lissafi. Ka yi amfani da kalmomi masu sauƙi.\"",
            "Sannan ku gyara. Ku gyara duk bayanin da AI ya yi kuskure ko ya ƙirƙira, ku cire kalmomin da ba su yi kama da ku ba, kuma kada ku taɓa bari ya ƙirƙiri farashi, kyaututtuka ko alkawuran da ba za ku iya cikawa ba. Shafinku yana magana a madadin ƙungiyarku, don haka ku ne ke da alhakin kowace kalma."
          ],
          steps: ["Ku ba AI ainihin bayanan ƙungiyarku da salon da kuke so.", "Ku nemi gajeren daftari mai iyakar kalmomi.", "Ku gyara bayanan da ba daidai ba ko ƙirƙirarru.", "Ku sake rubuta wasu sassa don su yi kama da ku, sannan ku liƙa a shafinku."],
          words: [["Daftari (draft)", "sigar farko da za ku inganta."], ["Salo (tone)", "yadda rubutu yake sauti: mai fara'a, mai muhimmanci, mai daɗi."]],
          slides: [
            { title: "AI yana rubuta daftarin farko", bullets: ["Ku ba shi bayanan gaskiya", "Ku faɗi salon da iyakar kalmomi"] },
            { title: "Misalin prompt", bullets: ["\"Ka rubuta Game da Mu mai kalmomi 60, mai fara'a,", "don ƙungiyar koyarwa bayan makaranta kyauta ta aji 3 zuwa 8.", "Ka yi amfani da kalmomi masu sauƙi.\""] },
            { title: "Ku ne kuke gyarawa", bullets: ["Ku gyara bayanan da ba daidai ba ko ƙirƙirarru", "Babu farashi, kyaututtuka ko alkawuran ƙarya", "Ku sa ya yi kama da ku"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya rubuta Game da Mu mai kalmomi 60 don ƙungiyarku. Ku gyara bayani ɗaya ko jimla ɗaya, sannan ku liƙa sigar da kuka gyara a Google Site ɗinku.",
          youCanNow: "amfani da AI don rubuta daftarin kalmomin shafi da gyara shi don ya zama gaskiya kuma ya yi kama da ku.",
          quickCheck: [
            { objective: "O3", q: "Me yasa za ku ba AI iyakar kalmomi don Game da Mu ɗinku?", options: ["Don daftarin ya zama gajere kuma ya dace da shafinku", "Don ya rage kuɗi", "Don ya yi amfani da kalmomi masu wuya", "Don ya ƙara bayanai"], answer: 0, why: "Iyakar kalmomi tana sa daftarin ya yi gajarta yadda ya dace da ƙaramin shafin intanet." },
            { objective: "O3", q: "Daftarin AI ya ce koyarwarku \"tana da tabbacin ɗaga maki\". Me za ku yi?", options: ["Ku bar shi; yana da daɗin ji", "Ku cire alkawarin da ba za ku iya cikawa ba", "Ku ƙara girmansa ku yi masa duhu", "Ku ƙara wani tabbaci na biyu"], answer: 1, why: "Kada ku taɓa bari AI ya ƙara alkawuran da ba za ku iya cikawa ba; ku ne ke da alhakin kowace kalma." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsarawa da gina shafinku",
        questions: [
          { objective: "O1", q: "Me server yake yi?", options: ["Yana ajiye shafukan intanet kuma yana tura shafuka ga baƙi", "Yana buga shafuka a takarda", "Yana cajin wayarku", "Yana rubuta kalmominku"], answer: 0, why: "Server ita ce kwamfutar da ke riƙe da shafin kuma tana tura shafuka." },
          { objective: "O1", q: "Wace tambaya ce ta dace a tsarin shafinku?", options: ["Mene ne kalmar sirrina?", "Mene ne abu ɗaya da baƙi za su yi?", "Mene ne lambar bankina?", "Me na ci yau?"], answer: 1, why: "Sanin abu ɗayan yana taimaka muku tsara shafin." },
          { objective: "O2", q: "Me kuke buƙata don amfani da Google Sites kyauta?", options: ["Kamfanin ajiye shafi da ake biya", "Digiri a kimiyyar kwamfuta", "Asusun Google", "Katin bashi (credit card)"], answer: 2, why: "Google Sites yana zuwa kyauta tare da asusun Google." },
          { objective: "O2", q: "A Google Sites, a ina kuke ƙara akwatunan rubutu da hotuna?", options: ["Kwandon shara", "Wurin adireshi", "Firinta", "Insert, a gefen dama"], answer: 3, why: "Allon Insert a dama yana ƙara abubuwa." },
          { objective: "O3", q: "Daftarin AI ya ce ƙungiyarku \"ta ci kyautar ƙasa\" amma ba ta ci ba. Me za ku yi?", options: ["Ku cire shi kafin wallafawa", "Ku bar shi, yana da daɗin ji", "Ku ƙara girmansa", "Ku nemi AI ya ƙara kyaututtuka"], answer: 0, why: "Ku ne ke da alhakin kowace kalma; ku cire bayanan ƙirƙirarru." }
        ]
      }
    },
    {
      name: "Babi na 2: Lamba, wallafawa da dubawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Karanta HTML mai sauƙi",
          minutes: 5,
          goal: "Karanta ɗan guntun HTML kuma ku canja kalmominsa lafiya.",
          text: [
            "HTML shi ne harshen da ake rubuta shafukan intanet da shi. Yana amfani da tags a cikin alamomin < da >. Yawancin tags suna zuwa biyu-biyu: tag na buɗewa kamar <h2> da tag na rufewa kamar </h2>, da kalmomi a tsakani.",
            "Tags da aka saba: <h2> don kanun rubutu, <p> don sakin layi, <ul> da <li> don jeri mai ɗigo, <strong> don rubutu mai duhu, da <a href=\"...\"> don hanyar haɗi (link).",
            "Kuna iya yin atisaye kyauta, ba tare da asusu ba, a editan intanet kamar W3Schools Tryit Editor: ku liƙa HTML a hagu, ku danna Run, ku ga shafin a dama. Da farko, ku canja kalmomin da ke tsakanin tags kawai, sannan ku sake danna Run."
          ],
          steps: ["Ku buɗe editan HTML na intanet kyauta.", "Ku liƙa ɗan guntun HTML.", "Ku danna Run don ganin sakamakon.", "Ku canja kalmomin da ke tsakanin tags biyu ku sake danna Run."],
          words: [["HTML", "harshen da ake amfani da shi don rubuta shafukan intanet."], ["Tag", "alama a cikin < da >, kamar <p>, da ke gaya wa burauza mene ne wani abu."], ["Tag na rufewa (closing tag)", "tag na ƙarshe mai karkatacciyar layi, kamar </p>."]],
          slides: [
            { title: "HTML yana gina shafukan intanet", bullets: ["Tags a cikin < da >", "Buɗewa <p> ... rufewa </p>"] },
            { title: "Tags da ya kamata ku sani", bullets: ["<h2> kanun rubutu, <p> sakin layi", "<ul> da <li> jeri mai ɗigo", "<strong> rubutu mai duhu, <a> hanyar haɗi"] },
            { title: "Ku yi atisaye kyauta", bullets: ["Editan intanet kamar W3Schools Tryit", "Ku liƙa, ku danna Run, ku duba", "Ku canja kalmomin da ke tsakanin tags"] }
          ],
          tryIt: "A editan HTML na intanet kyauta, ku rubuta <h2>Our Hours</h2><p>Mondays 3 to 6 pm</p>. Ku danna Run, ku canja lokutan, sannan ku sake danna Run.",
          youCanNow: "karanta tags na HTML masu sauƙi da canja kalmomin da ke cikinsu lafiya.",
          quickCheck: [
            { objective: "O4", q: "Wane tag ne ke yin abu ɗaya a jeri mai ɗigo?", options: ["<p>", "<h2>", "<li>", "<strong>"], answer: 2, why: "<li> yana nuna kowane abu a jeri mai ɗigo, a cikin <ul>." },
            { objective: "O4", q: "Kuna son canja \"Mondays\" zuwa \"Tuesdays\" a <p>Mondays 3 to 6 pm</p>. Me za ku canja?", options: ["Tag ɗin <p>", "Tag ɗin </p>", "Ku goge tags ɗin", "Kalmar da ke tsakanin tags kawai"], answer: 3, why: "Da farko, ku canja kalmomin da ke tsakanin tags kawai don HTML ɗin ya ci gaba da aiki." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sa AI ya rubuta lamba, sannan gwadawa da gyarawa",
          minutes: 6,
          goal: "Nemi AI ya ba ku ƙaramin akwatin HTML, ku gwada shi, ku gyara matsala ɗaya ku saka shi a shafinku.",
          text: [
            "Mataimakan AI suna iya rubuta HTML. Ku faɗi daidai abin da kuke so: \"Ka rubuta HTML mai sauƙi kawai, ba JavaScript, don akwati mai kanun rubutu Lokutan aiki da Tuntuɓa, jerin lokutan aikinmu (Litinin zuwa Alhamis ƙarfe 3 zuwa 6 na yamma), da hanyar haɗi zuwa imel ɗinmu. Ka yi amfani da bango mai haske da manyan haruffa.\"",
            "Koyaushe ku gwada lambar AI kafin ku yi amfani da ita. Ku liƙa ta a editan intanet, ku danna Run ku duba: Kowane bayani daidai ne? Hanyar haɗin tana aiki? Rubutun yana da sauƙin karantawa? Idan wani abu ba daidai ba ne, ku gaya wa AI daidai abin da zai gyara, ko ku gyara kalmomin da kanku.",
            "Kada ku liƙa lambar da ba ku fahimta ba daga baƙi, ko daga AI idan tana da script da ba ku nema ba. Don ƙara akwatinku a Google Sites: ku danna Insert, sannan Embed, ku zaɓi Embed code, ku liƙa HTML ɗinku, ku danna Next sannan Insert."
          ],
          steps: ["Ku nemi AI ya rubuta HTML mai sauƙi kawai, da ainihin lokutan aikinku da hanyoyin tuntuɓa.", "Ku gwada ta a editan intanet.", "Ku gyara abu ɗaya: bayani, hanyar haɗi ko girman rubutu.", "A Google Sites: Insert, Embed, Embed code, liƙa, Next, Insert."],
          words: [["Lamba (code)", "umarnin da aka rubuta wa kwamfuta, kamar HTML."], ["Embed (saka)", "sanya wani guntun lamba ko abu a cikin shafi."], ["Bug (kuskure)", "kuskure a lamba da ke sa ta yi aiki ba daidai ba."]],
          sources: [{ name: "Google Sites Help: Embed HTML or JavaScript in your site", url: "https://support.google.com/sites/answer/90569" }],
          slides: [
            { title: "Ku nemi lamba daga AI a sarari", bullets: ["HTML mai sauƙi kawai, ba JavaScript", "Ainihin lokutan aikinku da hanyoyin tuntuɓa", "Manyan haruffa masu sauƙin karantawa"] },
            { title: "Ku gwada kafin ku yi amfani", bullets: ["Ku liƙa ku danna Run a editan", "Bayanai daidai? Hanyar haɗi tana aiki? Mai sauƙin karantawa?", "Ku gyara, ko ku nemi AI ya gyara abu ɗaya"] },
            { title: "Ku ƙara shi a Google Sites", bullets: ["Insert, sannan Embed", "Ku zaɓi Embed code ku liƙa", "Next, sannan Insert"] }
          ],
          tryIt: "Ku nemi AI ya rubuta akwatin HTML mai sauƙi na Lokutan aiki da Tuntuɓa don ƙungiyarku. Ku gwada shi, ku gyara matsala ɗaya, sannan ku saka shi a Google Site ɗinku.",
          youCanNow: "samun HTML mai aiki daga AI, gwada shi, gyara shi da ƙara shi a shafi.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za ku nemi AI ya rubuta \"HTML mai sauƙi kawai, ba JavaScript\"?", options: ["HTML mai sauƙi ya fi aminci kuma ya fi sauƙin dubawa ga mai farawa", "Ba a yarda da JavaScript a intanet ba", "HTML ya fi arha", "AI ba zai iya rubuta JavaScript ba"], answer: 0, why: "HTML mai sauƙi yana da sauƙin karantawa da gwadawa, kuma babu script da ba ku nema ba." },
            { objective: "O5", q: "Kun gwada akwatin AI kuma hanyar haɗin imel ba ta aiki. Me za ku yi?", options: ["Ku saka shi duk da haka", "Ku gaya wa AI daidai abin da zai gyara, ko ku gyara da kanku, sannan ku sake gwadawa", "Ku goge dukan shafinku", "Ku cire imel ɗin daga tsarin"], answer: 1, why: "Ku gyara matsala ɗayan ku sake gwadawa kafin ku yi amfani da lambar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Wallafawa da duba shafinku",
          minutes: 5,
          goal: "Wallafa shafinku, ku duba shi a waya ku kiyaye bayanan sirri.",
          text: [
            "Idan shafinku ya shirya, ku danna Publish a saman dama na Google Sites. Ku zaɓi adireshin shafi ku wallafa. Kuna iya yin canje-canje daga baya ku sake wallafawa.",
            "Ku duba shafinku da ke kan intanet a waya, domin yawancin baƙi za su yi amfani da waya. Rubutun ya isa girma? Hanyoyin haɗi suna aiki? Hotuna suna bayyana? Ku nemi aboki shi ma ya gwada.",
            "Ku kiyaye sirri. Kada ku saka adireshin gida, lambar wayar mutum ko hotunan yara ba tare da izini a rubuce daga iyaye ko mai kula da su ba. Ku yi amfani da imel na ƙungiya ko wurin taro na jama'a a maimakon haka."
          ],
          steps: ["Ku danna Publish, ku zaɓi adireshin shafin, sannan ku wallafa.", "Ku buɗe adireshin shafin a waya.", "Ku duba girman rubutu, hanyoyin haɗi da hotuna.", "Ku cire duk wani adireshin sirri, lambar mutum ko hoto marar izini."],
          words: [["Wallafawa (publish)", "sa shafinku ya fito a intanet ta yadda duk wanda ke da adireshin zai iya ganinsa."], ["Adireshin shafi (web address)", "rubutun da kuke rubutawa don ziyartar shafi, ana kuma kiransa URL."]],
          slides: [
            { title: "Wallafawa", bullets: ["Ku danna Publish a saman dama", "Ku zaɓi adireshin shafi", "Kuna iya sabuntawa ku sake wallafawa"] },
            { title: "Ku duba a waya", bullets: ["Rubutu ya isa girma?", "Hanyoyin haɗi suna aiki?", "Hotuna suna bayyana? Ku nemi aboki ya gwada"] },
            { title: "Ku kiyaye sirri", bullets: ["Babu adireshin gida ko lambar wayar mutum", "Babu hotunan yara ba tare da izini ba", "Ku yi amfani da imel na ƙungiya ko wurin jama'a"] }
          ],
          tryIt: "Aikin ƙarshe: ku wallafa Google Site ɗinku mai shafi ɗaya tare da sashen Game da mu da kuka gyara da akwatin Lokutan aiki da Tuntuɓa da kuka gwada. Ku duba shi a waya ku cire duk wani abu na sirri.",
          youCanNow: "wallafa shafin intanet mai aiki, duba shi a waya da hana bayanan sirri shiga cikinsa.",
          quickCheck: [
            { objective: "O6", q: "Me ke faruwa idan kun danna Publish a Google Sites?", options: ["Ana goge shafin", "Ku kaɗai za ku iya ganinsa", "Shafin yana fitowa a intanet a adireshin da kuka zaɓa", "Yana buga shafin a takarda"], answer: 2, why: "Wallafawa tana sa shafin ya fito a intanet a adireshinsa." },
            { objective: "O6", q: "Shafinku yana nuna lambar wayar wani memba. Me za ku yi?", options: ["Ku bar ta; tana taimaka wa mutane su kira", "Ku rage girmanta", "Ku nemi baƙi kada su kira ta", "Ku sauya ta da imel na ƙungiya ku sake wallafawa"], answer: 3, why: "Lambobin mutum ba sa shiga shafukan jama'a; ku yi amfani da imel na ƙungiya a maimakon haka." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Lamba, wallafawa da dubawa",
        questions: [
          { objective: "O4", q: "Mene ne HTML?", options: ["Wani nau'in waya", "Harshen da ake rubuta shafukan intanet da shi", "Kalmar sirri", "Manhajar imel"], answer: 1, why: "Ana rubuta shafukan intanet da HTML." },
          { objective: "O4", q: "Wanne ne tag na rufewa?", options: ["<p>", "<h2>", "</p>", "<li>"], answer: 2, why: "Tags na rufewa suna da karkatacciyar layi (/)." },
          { objective: "O5", q: "AI ya ba ku HTML don shafinku. Me za ku fara yi?", options: ["Ku wallafa ta ba tare da dubawa ba", "Ku tura ta ga baƙi", "Ku goge shafinku", "Ku gwada ta a editan intanet ku duba bayanan"], answer: 3, why: "Gwadawa tana kama kurakurai da bayanan da ba daidai ba kafin baƙi su gani." },
          { objective: "O5", q: "Yaya ake ƙara lambar HTML a Google Site?", options: ["Insert, Embed, Embed code, liƙa, Next, Insert", "A buga ta a takarda", "A tura ta ga Google ta imel", "A rubuta ta a taken shafi"], answer: 0, why: "Wannan ita ce hanyar Embed code a Google Sites." },
          { objective: "O6", q: "Wanne ne ba shi da haɗari a saka a shafin jama'a na ƙungiyar al'umma?", options: ["Adireshin gidanku", "Adireshin imel na ƙungiya", "Hoton yaro ba tare da izini ba", "Lambar wayarku ta kanku"], answer: 1, why: "Imel na ƙungiya yana bar mutane su tuntuɓe ku ba tare da bayyana bayanan sirri ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gina Shafin Intanet da Taimakon AI",
    questions: [
      { objective: "O1", q: "Idan kun rubuta adireshin shafi, me ke faruwa?", options: ["Burauzarku tana tambayar server shafin", "Ana buga shafin a takarda", "Wayarku tana rubuta shafin", "Babu komai"], answer: 0, why: "Server yana tura shafin zuwa burauzarku." },
      { objective: "O1", q: "Wanne ne burauzar intanet?", options: ["Spreadsheet (takardar lissafi)", "Chrome", "Firinta", "Saƙon tes"], answer: 1, why: "Chrome, Edge da Safari burauzoji ne." },
      { objective: "O1", q: "Mataki na farko na gina shafi shi ne:", options: ["Biyan kuɗin talla", "Zaɓar launuka kawai", "Yin tsari mai sauƙi", "Wallafa shafi fanko"], answer: 2, why: "Tsari yana gaya muku abin da shafin yake buƙata." },
      { objective: "O1", q: "Wane sashe ne ƙaramin shafin al'umma yawanci yake buƙata?", options: ["Adireshin gidajen membobi", "Lambobin banki", "Kalmomin sirri", "Yadda za a tuntuɓe ku"], answer: 3, why: "Baƙi suna buƙatar hanyar tuntuɓar ku." },
      { objective: "O2", q: "Google Sites shi ne:", options: ["Kayan gina shafin intanet kyauta tare da asusun Google", "Manhaja ta biya kawai", "Kamfanin waya", "Shafin kafofin sada zumunta"], answer: 0, why: "Yana zuwa kyauta tare da asusun Google." },
      { objective: "O2", q: "Template shi ne:", options: ["Kalmar sirri", "Zane da aka riga aka shirya wanda kuke cikawa", "Wani nau'in server", "Bug"], answer: 1, why: "Templates suna ba ku zanen farawa." },
      { objective: "O2", q: "Theme yana sarrafa:", options: ["Wanda zai iya ziyarta", "Adireshin shafi", "Launuka da salon rubutu", "Asusunku"], answer: 2, why: "Themes suna saita kamannin shafin." },
      { objective: "O3", q: "Wane prompt ne zai kawo mafi kyawun daftarin Game da Mu?", options: ["\"shafin intanet\"", "\"rubuta abubuwa\"", "\"taimako\"", "\"Ka rubuta Game da Mu mai kalmomi 60, mai fara'a, don ƙungiyar koyarwa kyauta ta aji 3 zuwa 8. Ka yi amfani da kalmomi masu sauƙi.\""], answer: 3, why: "Yana ba da bayanai, tsawo da salo." },
      { objective: "O3", q: "Wane ne ke da alhakin kowace kalma a shafinku?", options: ["Ku da ƙungiyarku", "AI", "Google", "Babu kowa"], answer: 0, why: "AI yana rubuta daftari, amma ku ne kuke wallafawa kuma kalmomin naku ne." },
      { objective: "O4", q: "Mene ne tag a HTML?", options: ["Takardar farashi", "Alama a cikin < da > kamar <p>", "Hoto", "Adireshin shafi"], answer: 1, why: "Tags suna gaya wa burauza mene ne kowane sashe." },
      { objective: "O4", q: "Wane tag ne ke yin sakin layi?", options: ["<li>", "<a>", "<p>", "<ul>"], answer: 2, why: "<p> yana nufin paragraph (sakin layi)." },
      { objective: "O4", q: "A editan HTML na intanet, yaya kuke ganin shafinku?", options: ["Ku buga shi a takarda", "Ku tura shi ta imel", "Ku sake kunna kwamfuta", "Ku danna Run"], answer: 3, why: "Run yana nuna sakamakon HTML ɗinku." },
      { objective: "O5", q: "Lokacin neman lamba daga AI don shafin mai farawa, buƙata mai aminci ita ce:", options: ["\"HTML mai sauƙi kawai, ba JavaScript\"", "\"Ka ƙara duk script da kake so\"", "\"Ka kwafo lamba daga kowane shafi\"", "\"Ka saka kalmar sirrina\""], answer: 0, why: "HTML mai sauƙi ya fi sauƙin karantawa, gwadawa da amincewa." },
      { objective: "O5", q: "Bug shi ne:", options: ["Theme na shafin intanet", "Kuskure a lamba da ke sa ta yi aiki ba daidai ba", "Adireshin shafi", "Wani nau'in template"], answer: 1, why: "Bugs kurakurai ne da ake nema a gyara." },
      { objective: "O5", q: "Lambar AI tana nuna lokacin rufewa da ba daidai ba. Ya kamata ku:", options: ["Wallafa duk da haka", "Goge dukan shafin", "Gyara kalmomin ko neman AI ya gyara wannan abu ɗaya", "Kau da kai"], answer: 2, why: "Ku gyara takamaiman matsalar, sannan ku sake gwadawa." },
      { objective: "O5", q: "Mene ne ma'anar \"embed\"?", options: ["Goge shafi", "Buga shafi a takarda", "Canja kalmar sirrinku", "Sanya lamba ko wani abu a cikin shafi"], answer: 3, why: "Embed yana saka akwatin HTML ɗinku a cikin shafin." },
      { objective: "O6", q: "Don Google Site ɗinku ya fito a intanet, kuna danna:", options: ["Publish", "Delete", "Print", "Undo"], answer: 0, why: "Publish yana sa shafin ya bayyana a adireshinsa." },
      { objective: "O6", q: "Me yasa za ku duba shafinku a waya?", options: ["Wayoyi ba sa iya nuna shafukan intanet", "Yawancin baƙi suna amfani da waya", "Yana canja adireshin", "Doka ta wajabta"], answer: 1, why: "Baƙi da yawa za su ga shafinku a waya." },
      { objective: "O6", q: "Wanne ne BAI kamata ya shiga shafinku na jama'a ba?", options: ["Lokutan aikin ƙungiya", "Imel na ƙungiya", "Hoton yaro ba tare da izini a rubuce daga iyaye ba", "Abin da kuke bayarwa"], answer: 2, why: "Hotunan yara suna buƙatar izini daga iyaye ko mai kula da su." },
      { objective: "O6", q: "Bayan wallafawa, kuna iya canja Google Site ɗinku?", options: ["A'a, har abada", "Sai kun biya", "Sai kun sake farawa daga farko", "I, ku gyara ku sake wallafawa"], answer: 3, why: "Kuna iya sabuntawa ku sake wallafawa a kowane lokaci." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 7, 9, 13, 15, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "An gina shafi", objective: "O2", notYet: "Babu take a sarari, ko wasu sassa sun ɓace.", meets: "Google Site mai take a sarari da sassan da aka tsara a theme mai sauƙin karantawa.", exceeds: "Abu ɗaya da baƙi za su yi yana da sauƙin gani." },
      { name: "Game da mu", objective: "O3", notYet: "An liƙa rubutun AI kamar yadda yake, ko da bayanan da ba daidai ba ko ƙirƙirarru.", meets: "Gajeren Game da Mu mai bayanan gaskiya, da aka gyara da kalmomin mai koyo.", exceeds: "Mai koyo zai iya nuna abin da ya canja da dalili." },
      { name: "Akwatin Lokutan aiki da Tuntuɓa", objective: "O5", notYet: "Babu akwatin HTML, ko ba a gwada shi ba.", meets: "Akwatin HTML mai sauƙi da aka gwada a edita, aka gyara matsala ɗaya, aka saka a shafin.", exceeds: "Mai koyo zai iya bayyana abin da kowane tag a akwatin yake yi." },
      { name: "An wallafa kuma ya dace da waya", objective: "O6", notYet: "Ba a wallafa ba, ko ba a duba a waya ba.", meets: "An wallafa kuma an duba a waya: rubutu yana karantuwa, hanyoyin haɗi suna aiki, hotuna suna bayyana.", exceeds: "Aboki ma ya gwada shi kuma an gyara duk matsalolin." },
      { name: "Sirri", objective: "O6", notYet: "Adireshin gida, lambar mutum ko hoton yaro marar izini yana a shafin.", meets: "Imel na ƙungiya ko wurin jama'a kawai, kuma babu bayanan sirri.", exceeds: "Duk hotunan mallakar mai koyo ne ko an yi amfani da su da izini a rubuce." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin al'umma ko ƙananan kasuwanci masu shafin da mai koyo ya gina a intanet cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ɗauki wani kwas na shafukan intanet ko rubuta lamba cikin kwanaki 60",
      "Ƙungiyoyin da suka ce sun sami sababbin membobi, abokan ciniki ko kira daga shafinsu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet (ta ɗakin karatu ko ta gida) don gina shafin, da waya don duba shi",
      "Asusun Google kyauta don Google Sites",
      "Mataimakin AI kyauta da editan HTML na intanet kyauta kamar W3Schools Tryit Editor",
      "Ainihin bayanan ƙungiyar: suna, abin da take bayarwa, lokutan aiki da imel na ƙungiya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku fara taimakawa da shiga asusun Google; shi ne ke ɗaukar lokaci mafi yawa ga masu farawa.",
      "Idan zai yiwu, ku sa masu koyo su gina shafi don ƙungiya ta gaske da suke ciki, da amincewar ƙungiyar.",
      "Ku duba kowane shafin da aka wallafa don adireshin gida, lambobin mutum da hotunan yara marasa izini.",
      "Ku tunatar da masu koyo su gwada duk lambar AI kuma su nemi HTML mai sauƙi kawai.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
