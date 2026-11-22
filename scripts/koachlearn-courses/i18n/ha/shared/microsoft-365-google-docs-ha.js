"use strict";

// Koach Learn course, Hausa (ha) translation of shared/microsoft-365-google-docs.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "microsoft-365-google-docs-ha",
  lang: "ha",
  translationOf: "microsoft-365-google-docs",
  category: "Seniors and Technology",
  name: "Tushen Microsoft 365 da Google Docs",
  skills: "Ƙirƙira da ajiye takarda, Tsara rubutu, Rabawa da sharhi, Gina sauƙaƙƙen tebur na lissafi (spreadsheet), Haɗa lambobi da formula, Saukewa a matsayin PDF",
  outcome: "yin takarda mai shafi ɗaya mai kyau da sauƙaƙƙen spreadsheet mai jimla, a Google Docs da Sheets ko a Microsoft Word da Excel na intanet, sannan ku raba su lafiya ku ajiye kwafi a matsayin PDF.",
  about: [
    "Yawancin wuraren aiki, makarantu, coci-coci, ƙungiyoyi da iyalai yanzu suna rubuta takardu suna raba su ta intanet. Zaɓuɓɓuka biyu kyauta da aka fi amfani da su su ne Google Docs da Sheets (da asusun Google) da Microsoft Word da Excel na intanet (da asusun Microsoft). Sunayen maɓallan sun ɗan bambanta, amma ƙwarewar iri ɗaya ce.",
    "A Babi na 1 za ku yi takarda, ku tsara ta, ku raba ta. A Babi na 2 za ku gina ƙaramin spreadsheet, ku haɗa lambobin wani layi da formula, sannan ku ajiye aikinku a matsayin PDF don aikawa ko bugawa.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku bar manhajar a buɗe yayin da kuke karatu don ku yi aikin \"Gwada yanzu\" nan take. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi takardar talla ko wasiƙa mai shafi ɗaya (misali kasuwar kayan gida, ranar aikin sa-kai, ko saƙo ga mai gidan haya) mai take mai kauri, jerin abubuwa masu ɗigo da layin bayanin tuntuɓarku, da ƙaramin spreadsheet da ke lissafa aƙalla kuɗaɗe biyar ya kuma haɗa su da formula ta SUM. Ku raba takardar da mutum ɗaya a matsayin \"view only\" (karantawa kawai), sannan ku sauke dukkan fayilolin biyu a matsayin PDF.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke buƙatar takardun ofis na yau da kullum: tsofaffi, masu neman aiki, masu aikin sa-kai, masu komawa aiki, membobin ƙananan ƙungiyoyin agaji da na al'umma, da matasa da ke fara makaranta ko aiki.",
    startingPoint: "Suna iya amfani da linzamin kwamfuta (mouse) ko allon taɓawa, buɗe burauzar intanet da rubutu. Da yawa suna da adireshin imel amma ba su taɓa yin takarda ko spreadsheet ta intanet ba, ko raba fayil, ko ajiye PDF ba.",
    gap: "Yanzu ana yin wasiƙu, takardun talla, kasafin kuɗi, jerin sunaye da takardun neman aiki a matsayin fayilolin intanet, kuma ofisoshi sau da yawa suna neman PDF. Ba tare da waɗannan ƙwarewa ba, mutane suna dogara ga wasu, suna biyan kuɗin taimakon bugawa, ko suna raba fayiloli masu bayanan sirri ga mutane da yawa fiye da yadda ya kamata.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomi kamar cell, formula da PDF",
      "Na'urori: kwamfuta ko tablet mai burauzar intanet ta fi kyau; waya tana yiwuwa amma ta fi wuya",
      "Asusu: ana buƙatar asusun Google ko Microsoft kyauta; babu tsarin biyan kuɗi",
      "Lokaci: darussa na minti 4 zuwa 6, kusan minti 60 gaba ɗaya",
      "Sirri: ba a taɓa raba fayiloli masu adireshi, lambobin shaida ko bayanan lafiya da \"Anyone with the link\""
    ],
    prerequisites: "Babu, amma kwas ɗin Basic Computer Skills (Ƙwarewar Kwamfuta ta Farko) ko \"Tushen Amfani da Intanet\" yana taimakon masu koyo da ba su saba da mouse da burauza ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da Google Docs ko Word na intanet", action: "buɗe sabuwar takarda mara komai, ba ta suna mai sarari da faɗin inda aka ajiye ta", standard: "da sunan da ke faɗin mene ne fayil ɗin da kuma ambaton ma'ajiyar intanet daidai (Google Drive ko OneDrive)" },
    { id: "O2", condition: "Idan aka ba ku shafin rubutu na yau da kullum", action: "tsara take, jerin abubuwa masu ɗigo da babban rubutu don shafin ya zama mai sauƙin karantawa", standard: "da take a Heading 1, jerin abubuwa masu ɗigo da kalma ɗaya mai kauri" },
    { id: "O3", condition: "Idan aka ba ku takarda da mutumin da ke buƙatar ganinta", action: "raba takardar a mafi ƙanƙantar matakin izini da mutumin yake buƙata da barin sharhi", standard: "kuna zaɓar matakin da ya dace kowane lokaci kuma ba ku taɓa amfani da \"Anyone with the link\" don bayanan sirri ba" },
    { id: "O4", condition: "Ta amfani da Google Sheets ko Excel na intanet", action: "ƙirƙirar spreadsheet mai kanun bayanai a layi na 1 da layukan bayanai biyar", standard: "da abu ɗaya a kowane layi da lambobin da aka rubuta ba tare da kalmomi ba" },
    { id: "O5", condition: "Idan aka ba ku jerin lambobi a ginshiƙi a cikin spreadsheet", action: "rubuta formula ta SUM da ke haɗa ginshiƙin kuma take sabunta kanta", standard: "da jimla daidai da ke canjawa idan aka canja wata lamba" },
    { id: "O6", condition: "Idan aka ba ku takarda ko spreadsheet da aka gama", action: "sauke ta a matsayin PDF da buga ta bayan duba hoton gabanin bugawa (preview)", standard: "kuna samun PDF ɗin a babban fayil na Downloads kuma babu abin da aka yanke a cikin preview" }
  ],
  chapters: [
    {
      name: "Babi na 1: Rubutu da raba takarda",
      lessons: [
        {
          objectives: ["O1"],
          title: "Buɗe Google Docs ko Word na intanet",
          minutes: 5,
          goal: "Buɗe sabuwar takarda mara komai, ba ta suna, da sanin inda aka ajiye ta.",
          text: [
            "Google Docs kyauta ne da asusun Google (asusu ɗaya da Gmail). Ku je docs.google.com ku zaɓi Blank document (takarda mara komai). Microsoft Word na intanet kyauta ne da asusun Microsoft (asusu ɗaya da Outlook.com). Ku je microsoft365.com, ku zaɓi Word, sannan Blank document.",
            "Dukkansu biyu suna ajiye aikinku da kansu yayin da kuke rubutu. Google yana ajiye shi a Google Drive; Microsoft yana ajiye shi a OneDrive. Dukkansu ma'ajiyar intanet ne, wadda ake kira cloud (gajimare), don haka kuna iya sake buɗe fayil ɗin daga kowace kwamfuta ko waya bayan kun shiga asusunku.",
            "Ku ba kowane fayil suna mai sarari a saman hagu, kamar \"Volunteer Day Flyer - May\" (Takardar Ranar Sa-kai - Mayu). Sunaye masu sarari suna sa a sami fayiloli cikin sauƙi daga baya."
          ],
          steps: ["Ku je docs.google.com (Google) ko microsoft365.com (Microsoft) ku shiga asusunku.", "Ku zaɓi takarda mara komai.", "Ku danna sunan da ke saman hagu ku rubuta sunan fayil mai sarari.", "Ku rubuta jimla ɗaya ku duba saƙon cewa an ajiye, kusa da sama."],
          words: [["Cloud (gajimare)", "ma'ajiya a intanet, don ku iya kaiwa ga fayilolinku daga kowace na'ura bayan kun shiga asusu."], ["Google Drive / OneDrive", "ma'ajiyar intanet ta Google da ta Microsoft, inda ake ajiye fayilolinku."], ["Asusu (account)", "sunan shiga da kalmar sirrinku na wata hidima."]],
          sources: [{ name: "Microsoft: free Word, Excel and PowerPoint for the web", url: "https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web" }, { name: "Google Docs", url: "https://docs.google.com" }],
          slides: [
            { title: "Zaɓuɓɓuka biyu kyauta", bullets: ["Google Docs: docs.google.com da asusun Google", "Word na intanet: microsoft365.com da asusun Microsoft"] },
            { title: "Yana ajiye kansa", bullets: ["Google yana ajiyewa a Google Drive", "Microsoft yana ajiyewa a OneDrive", "Ku sake buɗe shi daga kowace na'ura bayan kun shiga asusu"] },
            { title: "Ku ba kowane fayil suna", bullets: ["Ku danna sunan da ke saman hagu", "Ku yi amfani da sunaye masu sarari: \"Volunteer Day Flyer - May\""] }
          ],
          tryIt: "Ku buɗe takarda mara komai a Google Docs ko Word na intanet. Ku sa mata suna \"My Practice Document\" (Takardar Atisayena) ku rubuta jimla ɗaya game da makonku.",
          youCanNow: "buɗe sabuwar takarda, ba ta suna, da sanin cewa tana ajiye kanta a cloud.",
          quickCheck: [
            { objective: "O1", q: "Mene ne cloud?", options: ["Ma'ajiyar intanet da kuke iya kaiwa daga kowace na'ura bayan kun shiga asusu", "Babban fayil da ke kan kwamfuta ɗaya kawai", "Wani nau'in firinta", "Manhajar biyan kuɗi da dole ku saya"], answer: 0, why: "Google Drive da OneDrive ma'ajiyar intanet ne, wadda ake kira cloud." },
            { objective: "O1", q: "Kun rubuta wasiƙa a Google Docs kuma kuna son sake samun ta mako mai zuwa. Me za ku yi yanzu?", options: ["Ku bar sunanta \"Untitled document\"", "Ku buga ta don kada ta ɓace", "Ku danna sunan da ke saman hagu ku rubuta suna mai sarari kamar \"Letter to Landlord - June\"", "Ku kwafe ta a imel zuwa kanku"], answer: 2, why: "Sunan fayil mai sarari yana sa a sami takardar cikin sauƙi daga baya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sa takarda ta yi kyau",
          minutes: 5,
          goal: "Tsara take, jeri da babban rubutu don shafi ya zama mai sauƙin karantawa.",
          text: [
            "Tsarawa (formatting) yana nufin canja yadda rubutu yake. Da farko ku zaɓi rubutun: ku riƙe maɓallin mouse ku ja shi a kan rubutun, ko ku danna kalma sau biyu. Sannan ku yi amfani da layin maɓallai (toolbar) da ke sama: B don kauri (bold), I don karkata (italic), akwatin girma don ƙara girman rubutu, da maɓallan jeri don ɗigo ko lambobi.",
            "Ku yi amfani da salon Heading (kanu) don take. A toolbar ku nemi akwatin da ke cewa \"Normal text\" (Google) ko \"Normal\" (Word) ku zaɓi Heading 1. Kanu suna da kyau kuma suna taimakon manhajojin karanta allo (screen readers) ga makafi.",
            "Ku sauƙaƙa: nau'in rubutu (font) ɗaya mai sauƙin karantawa, girma 11 zuwa 14 don babban rubutu, take mai kauri, gajerun sakin layi da jerin abubuwa masu ɗigo. Idan kun yi kuskure, ku danna Ctrl+Z (Command+Z a Mac) don sokewa."
          ],
          steps: ["Ku zaɓi rubutun da kuke son canjawa.", "Ku zaɓi Heading 1 don take.", "Ku zaɓi wasu layuka ku danna maɓallin jeri mai ɗigo.", "Ku yi amfani da B don sa wata muhimmiyar kalma ta yi kauri.", "Ku danna Ctrl+Z (Command+Z a Mac) don soke kuskure."],
          words: [["Tsarawa (formatting)", "canja yadda rubutu yake: girma, kauri, jeri, kanu."], ["Zaɓa (select)", "yi wa rubutu alama ta hanyar ja mouse a kansa don ku iya canja shi."], ["Toolbar", "layin maɓallai da ke saman manhajar."]],
          slides: [
            { title: "Ku zaɓa, sannan ku canja", bullets: ["Ku ja mouse a kan rubutu ko ku danna kalma sau biyu", "Sannan ku yi amfani da toolbar"] },
            { title: "Tushen toolbar", bullets: ["B = kauri, I = karkata", "Akwatin girma yana ƙara ko rage girman rubutu", "Maɓallan jeri suna yin ɗigo ko lambobi"] },
            { title: "Ku yi amfani da kanu don take", bullets: ["Ku canja \"Normal text\" zuwa Heading 1", "Yana da kyau, kuma yana taimakon screen readers"] },
            { title: "Ku sauƙaƙa", bullets: ["Font ɗaya, girma 11 zuwa 14", "Gajerun sakin layi da ɗigo", "Ctrl+Z (Command+Z a Mac) yana soke kuskure"] }
          ],
          tryIt: "A takardar atisayenku, ku rubuta take da abubuwa uku, kamar abubuwa uku da za a kawo wajen shaƙatawar iyali. Ku sa take ya zama Heading 1, ku sa abubuwan su zama jeri mai ɗigo, ku sa kalma ɗaya ta yi kauri.",
          youCanNow: "tsara shafi da kanu, jeri mai ɗigo da rubutu mai kauri.",
          quickCheck: [
            { objective: "O2", q: "Wane girman rubutu darasin ya ba da shawara don babban rubutu?", options: ["6 zuwa 8", "20 zuwa 24", "30 ko fiye", "11 zuwa 14"], answer: 3, why: "Girma 11 zuwa 14 yana da sauƙin karantawa don babban rubutu." },
            { objective: "O2", q: "Kuna son layuka uku su zama jeri mai ɗigo. Me za ku fara yi?", options: ["Ku danna Ctrl+Z", "Ku zaɓi layukan uku", "Ku canja font na dukkan shafin", "Ku danna Share"], answer: 1, why: "Da farko kuna zaɓar rubutu, sannan ku zaɓi maɓallin jeri mai ɗigo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rabawa lafiya da amfani da sharhi",
          minutes: 5,
          goal: "Raba takarda da mutum ɗaya a matakin izini da ya dace da barin sharhi.",
          text: [
            "Dukkan manhajojin biyu suna da maɓallin Share (raba) a saman dama. Ku rubuta adireshin imel na mutumin ku zaɓi abin da zai iya yi: view only (karantawa kawai), comment (ba da shawara), ko edit (canja fayil ɗin). Ku ba da mafi ƙanƙantar matakin da mutumin yake buƙata.",
            "Ku yi hankali da \"Anyone with the link\" (duk wanda ke da hanyar haɗi). Duk wanda ya sami hanyar haɗin, ko da ta hanyar turawa ne, zai iya buɗe fayil ɗin. Kada ku yi amfani da shi don fayiloli masu bayanan sirri kamar adireshi, lambobin shaida ko bayanan lafiya.",
            "Sharhi (comments) suna bar mutane su ba da ra'ayi ba tare da canja kalmominku ba. Ku zaɓi wani rubutu, sannan ku zaɓi maɓallin sharhi (alamar kumfar magana) ko ku danna dama ku zaɓi Comment. Idan an gyara matsalar, ku zaɓi Resolve (warware)."
          ],
          steps: ["Ku danna Share a saman dama.", "Ku rubuta adireshin imel na mutumin.", "Ku zaɓi View, Comment ko Edit; ku ɗauki mafi ƙanƙantar matakin da yake buƙata.", "Ku aika.", "Don sharhi: ku zaɓi rubutu, ku zaɓi Comment, ku rubuta, sannan ku saka shi."],
          words: [["Rabawa (share)", "bar wani mutum ya buɗe fayil ɗinku."], ["Matakin izini (access level)", "abin da mutum zai iya yi da fayil ɗinku: karantawa, sharhi ko canjawa."], ["Sharhi (comment)", "rubutu a gefen fayil da ba ya canja rubutun."]],
          slides: [
            { title: "Maɓallin Share, saman dama", bullets: ["Ku rubuta imel ɗinsa", "Ku zaɓi View, Comment ko Edit", "Ku ba da mafi ƙanƙantar matakin da yake buƙata"] },
            { title: "Ku yi hankali da \"Anyone with the link\"", bullets: ["Duk wanda ya sami hanyar haɗin zai iya buɗe shi", "Kada ku taɓa amfani da shi don bayanan sirri"] },
            { title: "Sharhi", bullets: ["Ra'ayi ba tare da canja kalmominku ba", "Ku zaɓi rubutu, ku zaɓi Comment", "Ku zaɓi Resolve idan an gyara"] }
          ],
          tryIt: "Ku raba takardar atisayenku da aboki ko ɗan iyali a matsayin view only. Sannan ku ƙara sharhi a kan takenku da ke cewa \"Shin wannan take yana da sarari?\"",
          youCanNow: "raba takarda a matakin izini da ya dace da amfani da sharhi don samun ra'ayi.",
          quickCheck: [
            { objective: "O3", q: "Wane matakin izini ne ke bar wani ya canja kalmomin fayil ɗinku?", options: ["View only", "Comment", "Edit", "Download"], answer: 2, why: "Edit yana bar mutum ya canja fayil ɗin; view da comment ba sa yi." },
            { objective: "O3", q: "Wani aboki ya gyara matsalar da kuka ambata a sharhi. Me za ku yi da sharhin?", options: ["Ku zaɓi Resolve", "Ku goge dukkan takardar", "Ku raba fayil ɗin da Anyone with the link", "Ku bar sabon sharhi a kowane layi"], answer: 0, why: "Resolve yana rufe sharhi da zarar an gyara matsalar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Rubutu da raba takarda",
        questions: [
          { objective: "O1", q: "A ina Google Docs yake ajiye aikinku?", options: ["A kan USB stick (ƙaramin ma'ajiyi) kawai", "Ba ya ajiyewa", "A Google Drive, a intanet", "A kan firinta"], answer: 2, why: "Google Docs yana ajiyewa a Google Drive da kansa." },
          { objective: "O1", q: "Wane sunan fayil ne ya fi kyau?", options: ["\"Untitled document\"", "\"asdf\"", "\"doc1\"", "\"Volunteer Day Flyer - May\""], answer: 3, why: "Suna mai sarari yana sa a sami fayil cikin sauƙi daga baya." },
          { objective: "O2", q: "Kafin ku sa rubutu ya yi kauri, da farko ku:", options: ["Rufe manhajar", "Buga shafin", "Zaɓi rubutun", "Raba fayil ɗin"], answer: 2, why: "Kuna zaɓar rubutu, sannan ku canja shi da toolbar." },
          { objective: "O3", q: "Maƙwabcinku yana buƙatar karanta takardar tallarku kawai. Wane matakin izini za ku ba shi?", options: ["Edit", "Owner (mai shi)", "View only", "Anyone with the link"], answer: 2, why: "Ku ba da mafi ƙanƙantar matakin da mutumin yake buƙata." },
          { objective: "O3", q: "Wata takarda tana da adireshin gidanku da lambar wayarku. Wane zaɓin rabawa ya kamata ku guje wa?", options: ["Rabawa da mutum ɗaya ta imel", "View only", "Comment kawai", "Anyone with the link"], answer: 3, why: "Duk wanda ya sami hanyar haɗin zai iya buɗe fayil mai bayanan sirri." }
        ]
      }
    },
    {
      name: "Babi na 2: Spreadsheet da kammala aiki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Spreadsheet ɗinku na farko",
          minutes: 5,
          goal: "Yi spreadsheet mai kanun bayanai da layukan bayanai biyar.",
          text: [
            "Spreadsheet tebur ne na akwatuna don jerin abubuwa da lambobi. Na Google shi ne Sheets (sheets.google.com); na Microsoft shi ne Excel (ku zaɓi Excel a microsoft365.com). Yana da kyau sosai don kasafin kuɗi, jerin sunaye, jadawali da lissafin kayayyaki.",
            "Ginshiƙai (columns) suna tafiya sama da ƙasa kuma suna da haruffa (A, B, C). Layuka (rows) suna tafiya daga gefe zuwa gefe kuma suna da lambobi (1, 2, 3). Kowane akwati cell ne, kuma ana kiransa da sunan ginshiƙinsa da layinsa, don haka B2 shi ne ginshiƙi B, layi na 2.",
            "Ku saka kanun bayanai a layi na 1, kamar \"Item\" (Abu) a A1 da \"Cost\" (Kuɗi) a B1. Sannan ku rubuta abu ɗaya a kowane layi a ƙasa. Ku rubuta lambobi ba tare da kalmomi ba (12.50, ba \"12.50 dollars\" ba) don spreadsheet ɗin ya iya yin lissafi da su."
          ],
          steps: ["Ku buɗe Google Sheets ko Excel na intanet ku zaɓi spreadsheet mara komai.", "Ku ba fayil ɗin suna.", "Ku rubuta kanun bayanai a layi na 1 (A1: Item, B1: Cost).", "Ku rubuta abubuwa biyar a ginshiƙi A da kuɗinsu a ginshiƙi B.", "Ku sa layi na 1 ya yi kauri."],
          words: [["Spreadsheet", "tebur na cells don jerin abubuwa da lambobi, kamar Google Sheets ko Excel."], ["Cell", "akwati ɗaya a spreadsheet, wanda ake kira da harafin ginshiƙi da lambar layi, kamar B2."], ["Ginshiƙi / layi (column / row)", "ginshiƙai suna tafiya sama da ƙasa (haruffa); layuka suna tafiya daga gefe zuwa gefe (lambobi)."]],
          slides: [
            { title: "Amfanin spreadsheet", bullets: ["Kasafin kuɗi da kuɗaɗe", "Jerin sunaye da jadawali", "Lissafin kayayyaki"] },
            { title: "Ginshiƙai, layuka, cells", bullets: ["Ginshiƙai: haruffa A, B, C", "Layuka: lambobi 1, 2, 3", "Cell B2 = ginshiƙi B, layi na 2"] },
            { title: "Shirya shi", bullets: ["Kanun bayanai a layi na 1", "Abu ɗaya a kowane layi", "Lambobi ba tare da kalmomi ba: 12.50"] }
          ],
          tryIt: "Ku yi spreadsheet mai suna \"Practice Budget\" (Kasafin Atisaye). Ku saka Item da Cost a layi na 1, sannan kuɗaɗe biyar na gaske na mako ko na wani taro, kamar kayan abinci, kuɗin bas ko kayan ado.",
          youCanNow: "shirya spreadsheet mai kanun bayanai da layukan bayanai.",
          quickCheck: [
            { objective: "O4", q: "A spreadsheet, mene ne cell?", options: ["Dukkan shafin bayanai", "Akwati ɗaya, wanda ake kira da ginshiƙinsa da layinsa", "Formula da ke haɗa lambobi", "Sunan fayil da ke sama"], answer: 1, why: "Kowane akwati cell ne, kamar B2 don ginshiƙi B, layi na 2." },
            { objective: "O4", q: "Kuna yin jerin sunaye. A ina za ku rubuta kanun bayanai \"Name\" da \"Phone\"?", options: ["A ƙasan shafin", "A sunan fayil", "Dukkansu a cell ɗaya", "A layi na 1, kanu ɗaya a kowane ginshiƙi"], answer: 3, why: "Kanun bayanai suna zuwa a layi na 1, da abu ɗaya a kowane layi a ƙasa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Haɗa lambobi da formula",
          minutes: 5,
          goal: "Yi amfani da SUM don haɗa ginshiƙi ta yadda jimlar take sabunta kanta.",
          text: [
            "Formula tana gaya wa spreadsheet ya yi lissafi. Kowace formula tana farawa da alamar daidai (=). Don haɗa cells B2 zuwa B6, ku danna cell mara komai a ƙasansu ku rubuta =SUM(B2:B6), sannan ku danna Enter.",
            "Alamar colon (:) tana nufin \"zuwa\", don haka B2:B6 yana nufin B2, B3, B4, B5 da B6. Idan kun canja wata lamba, jimlar tana canjawa da kanta. Wannan shi ne babban amfaninta fiye da na'urar lissafi (calculator).",
            "Wasu sauƙaƙan formula: =AVERAGE(B2:B6) tana ba da matsakaici, kuma =B2*2 tana ninka cell ɗaya sau biyu. Idan kun ga kuskure kamar #NAME?, ku duba rubutun formula da alamar daidai."
          ],
          steps: ["Ku danna cell mara komai a ƙasan lambobinku.", "Ku rubuta =SUM(B2:B6) da cells ɗinku.", "Ku danna Enter.", "Ku canja lamba ɗaya ku kalli jimlar tana sabunta kanta.", "Ku rubuta kalmar Total (jimla) a cell da ke hagunta."],
          words: [["Formula", "umarni da ke farawa da = kuma yana gaya wa spreadsheet ya yi lissafi."], ["SUM", "formula da ke haɗa rukunin cells."], ["Range (rukuni)", "rukunin cells, da ake rubutawa kamar B2:B6 (B2 zuwa B6)."]],
          slides: [
            { title: "Formula tana farawa da =", bullets: ["=SUM(B2:B6) tana haɗa B2 zuwa B6", "Ku danna Enter don ganin amsar"] },
            { title: "Tana sabunta kanta", bullets: ["Ku canja wata lamba", "Jimlar ma tana canjawa"] },
            { title: "Ƙarin sauƙaƙan formula", bullets: ["=AVERAGE(B2:B6) tana ba da matsakaici", "=B2*2 tana ninka cell ɗaya sau biyu", "#NAME? yana nufin ku duba rubutun formula"] }
          ],
          tryIt: "A Practice Budget ɗinku, ku rubuta Total a A7 da =SUM(B2:B6) a B7. Sannan ku canja kuɗi ɗaya ku duba ko jimlar ta canja.",
          youCanNow: "haɗa ginshiƙi da SUM da sanin cewa jimlar tana sabuntawa idan lambobi sun canja.",
          quickCheck: [
            { objective: "O5", q: "Mene ne babban amfanin formula ta SUM fiye da haɗawa da calculator?", options: ["Jimlar tana sabunta kanta idan wata lamba ta canja", "Tana sa lambobi su yi kauri", "Tana mayar da shafin PDF", "Tana raba fayil ɗin da wasu"], answer: 0, why: "Formula tana sake lissafi duk lokacin da wata lamba a cikin rukunin ta canja." },
            { objective: "O5", q: "Kuɗaɗenku suna B2 zuwa B8. Me za ku rubuta a B9 don haɗa su?", options: ["SUM B2 B8", "=B2+B8", "=SUM(B2:B8)", "=AVERAGE(B2:B8)"], answer: 2, why: "=SUM(B2:B8) tana haɗa B2 zuwa B8; =B2+B8 tana haɗa cells biyu kawai." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ajiyewa a matsayin PDF da bugawa",
          minutes: 4,
          goal: "Sauke takarda ko spreadsheet a matsayin PDF da buga ta.",
          text: [
            "PDF fayil ne da yake bayyana iri ɗaya a kowace waya da kwamfuta, kuma mutane ba za su iya canja shi cikin sauƙi ba. Yawancin takardun neman aiki, ofisoshi da makarantu suna neman PDF.",
            "A Google Docs ko Sheets: ku buɗe menu na File, ku zaɓi Download, sannan PDF. A Word ko Excel na intanet: ku buɗe menu na File ku nemi Save as ko Download, sannan ku zaɓi PDF. Fayil ɗin yana zuwa babban fayil na Downloads.",
            "Don bugawa, ku buɗe menu na File ku zaɓi Print, ko ku danna Ctrl+P (Command+P a Mac). Ku fara duba preview don kada a yanke wani abu. A ɗakin karatu, ku tambayi ma'aikata yadda ake biyan kuɗin bugawa."
          ],
          steps: ["Ku buɗe menu na File.", "Ku zaɓi Download (Google) ko Save as / Download (Microsoft).", "Ku zaɓi PDF.", "Ku nemo fayil ɗin a babban fayil na Downloads.", "Don bugawa: Ctrl+P (Command+P a Mac), ku duba preview, sannan ku buga."],
          words: [["PDF", "nau'in fayil da yake bayyana iri ɗaya a ko'ina kuma yana da wuyar canjawa."], ["Babban fayil na Downloads", "wurin da ke kan kwamfuta inda fayilolin da aka sauke suke zuwa."]],
          slides: [
            { title: "Me yasa PDF?", bullets: ["Yana bayyana iri ɗaya a ko'ina", "Yana da wuyar canjawa bisa kuskure", "Wuraren aiki da ofisoshi sau da yawa suna nema"] },
            { title: "Yin PDF", bullets: ["Menu na File, sannan Download (Google)", "Menu na File, sannan Save as ko Download (Microsoft)", "Ku zaɓi PDF; ku duba Downloads"] },
            { title: "Buga shi", bullets: ["Ctrl+P (Command+P a Mac)", "Ku fara duba preview"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi takardar talla ko wasiƙa mai shafi ɗaya da kanu, jeri mai ɗigo da layin bayanin tuntuɓa, tare da spreadsheet mai kuɗaɗe biyar da jimlar SUM. Ku raba takardar a matsayin view only, sannan ku sauke dukkansu biyu a matsayin PDF.",
          youCanNow: "kammala takarda da spreadsheet, raba su lafiya, da ajiye su a matsayin PDF.",
          quickCheck: [
            { objective: "O6", q: "A ina PDF da aka sauke yake zuwa yawanci?", options: ["Cikin akwatin imel ɗinku", "Cikin kwandon shara (recycle bin)", "Cikin cloud kawai", "Cikin babban fayil na Downloads"], answer: 3, why: "Fayilolin da aka sauke suna zuwa babban fayil na Downloads a na'urarku." },
            { objective: "O6", q: "Kuna shirin buga takardar talla a ɗakin karatu. Me za ku fara yi?", options: ["Ku buga kwafi goma nan take", "Ku duba preview na bugawa don kada a yanke wani abu", "Ku goge fayil ɗin", "Ku mayar da fayil ɗin spreadsheet"], answer: 1, why: "Preview yana nuna ko an yanke wani abu kafin ku biya kuɗin bugawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Spreadsheet da kammala aiki",
        questions: [
          { objective: "O4", q: "Mene ne cell C4?", options: ["Layi C, ginshiƙi na 4", "Formula", "Fayil na huɗu", "Ginshiƙi C, layi na 4"], answer: 3, why: "Ana kiran cells da harafin ginshiƙi, sannan lambar layi." },
          { objective: "O4", q: "Yaya ya kamata ku rubuta kuɗin dala goma sha biyu da centi hamsin?", options: ["\"twelve fifty\"", "\"12.50 dollars\"", "12.50", "\"about 12\""], answer: 2, why: "Lambobi ba tare da kalmomi ba suna bar spreadsheet ya yi lissafi." },
          { objective: "O5", q: "Wace formula ce ke haɗa cells B2 zuwa B6?", options: ["add(B2-B6)", "SUM B2 B6", "=SUM(B2:B6)", "B2+B6"], answer: 2, why: "Formula tana farawa da =, kuma B2:B6 yana nufin B2 zuwa B6." },
          { objective: "O5", q: "Kun canja kuɗi ɗaya a kasafin kuɗinku. Me zai faru da jimlar SUM?", options: ["Babu komai", "Za ta zama kuskure", "Dole ku sake rubuta ta", "Za ta sabunta kanta"], answer: 3, why: "Formula tana sake lissafi idan lambobi sun canja." },
          { objective: "O6", q: "Wani ofishi yana neman wasiƙarku a matsayin fayil da yake bayyana iri ɗaya a ko'ina. Za ku aika:", options: ["Hoton allon wayarku (screenshot)", "Hoton allo da kyamara", "Hanyar haɗi ga kowa", "PDF"], answer: 3, why: "PDF yana bayyana iri ɗaya a kowace na'ura." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Microsoft 365 da Google Docs",
    questions: [
      { objective: "O1", q: "Me kuke buƙata don amfani da Google Docs kyauta?", options: ["Asusun Google", "Lasisin biyan kuɗi", "Firinta", "Asusun Microsoft"], answer: 0, why: "Google Docs kyauta ne da asusun Google." },
      { objective: "O1", q: "A ina Word na intanet yake ajiye fayilolinku?", options: ["Google Drive", "Faifan floppy", "OneDrive", "Babu inda"], answer: 2, why: "Microsoft yana ajiyewa a OneDrive." },
      { objective: "O1", q: "Cloud yana nufin:", options: ["Yanayi", "Ƙwayar cuta ta kwamfuta (virus)", "Wani nau'in firinta", "Ma'ajiya a intanet da kuke iya kaiwa daga kowace na'ura"], answer: 3, why: "Ma'ajiyar cloud tana bar ku buɗe fayiloli a ko'ina bayan kun shiga asusu." },
      { objective: "O1", q: "A ina kuke canja sunan Google Doc?", options: ["Ku danna sunan da ke saman hagu", "Ku sake kunna kwamfutar", "Ku fara buga ta", "Ku tura ta imel zuwa kanku"], answer: 0, why: "Sunan fayil yana saman hagu." },
      { objective: "O2", q: "Don canja yadda kalma take, da farko ku:", options: ["Raba fayil ɗin", "Sauke PDF", "Zaɓi kalmar", "Rufe shafin burauza"], answer: 2, why: "Ku fara zaɓa, sannan ku tsara." },
      { objective: "O2", q: "Wace hanya ce mafi kyau ta yin take?", options: ["Rubuta shi da manyan haruffa duka da tazara", "Saka shi a ƙasa", "Sa shi ƙarami sosai", "Zaɓi salon Heading 1"], answer: 3, why: "Salon kanu yana da kyau kuma yana taimakon screen readers." },
      { objective: "O2", q: "Kun yi kuskure wajen tsarawa. Me ke soke shi?", options: ["Ctrl+P", "Ctrl+Z (Command+Z a Mac)", "Rufe burauzar", "Maɓallin Share"], answer: 1, why: "Ctrl+Z ko Command+Z yana soke canjin ƙarshe." },
      { objective: "O3", q: "A ina maɓallin Share yake a dukkan manhajojin biyu?", options: ["Saman dama", "Ƙasan shafin", "A cikin preview na bugawa", "A cikin cell na spreadsheet"], answer: 0, why: "Dukkan manhajojin biyu suna saka Share a saman dama." },
      { objective: "O3", q: "Abokin aikinku ya kamata ya ba da shawarar canje-canje amma kada ya canja kalmominku. Ku ba shi:", options: ["Edit", "Comment", "Owner", "Babu izini"], answer: 1, why: "Izinin Comment yana bar shi ya ba da shawara ba tare da canjawa ba." },
      { objective: "O3", q: "Me yasa za ku yi hankali da \"Anyone with the link\"?", options: ["Yana goge fayil ɗin", "Duk wanda ya sami hanyar haɗin zai iya buɗe shi", "Yana cin kuɗi", "Yana mayar da fayil ɗin PDF"], answer: 1, why: "Hanyoyin haɗi da aka tura suna iya kaiwa ga baƙi." },
      { objective: "O3", q: "Sharhi shi ne:", options: ["Canji a rubutunku", "Rubutu a gefe da ba ya canja rubutun", "PDF", "Formula"], answer: 1, why: "Sharhi yana ba da ra'ayi ba tare da canjawa ba." },
      { objective: "O4", q: "Wane ne amfani mai kyau na spreadsheet?", options: ["Kasafin kuɗin iyali", "Wasiƙar soyayya", "Kundin hotuna", "Kiran waya"], answer: 0, why: "Spreadsheet don jerin abubuwa da lambobi ne." },
      { objective: "O4", q: "Ana kiran ginshiƙai a spreadsheet da:", options: ["Lambobi", "Haruffa", "Launuka", "Emoji"], answer: 1, why: "Ginshiƙai suna amfani da haruffa; layuka suna amfani da lambobi." },
      { objective: "O4", q: "A ina kanun bayanai kamar \"Item\" da \"Cost\" suke zuwa yawanci?", options: ["Layi na 1", "Layi na ƙarshe", "A cikin sharhi", "A sunan fayil"], answer: 0, why: "Kanun bayanai suna zuwa a layin sama." },
      { objective: "O5", q: "Kowace formula tana farawa da:", options: ["Alamar dala", "Alamar daidai (=)", "Kalmar Total", "Tazara"], answer: 1, why: "Alamar = tana gaya wa spreadsheet cewa formula ce." },
      { objective: "O5", q: "A =SUM(B2:B6), colon (:) yana nufin:", options: ["Raba", "Zuwa", "Debe", "Tsaya"], answer: 1, why: "B2:B6 yana nufin B2 zuwa B6." },
      { objective: "O5", q: "Kun ga #NAME? a wani cell. Me ya kamata ku duba?", options: ["Firinta", "Rubutun formula", "Kalmar sirrinku", "Launin fayil"], answer: 1, why: "#NAME? yawanci yana nufin an rubuta formula ba daidai ba." },
      { objective: "O5", q: "Wace formula ce ke ba da matsakaicin B2 zuwa B6?", options: ["=AVERAGE(B2:B6)", "=SUM(B2)", "AVG B2-B6", "=B2"], answer: 0, why: "AVERAGE tana lissafa matsakaicin rukunin cells." },
      { objective: "O6", q: "A Google Docs, yaya ake yin PDF?", options: ["Menu na File, Download, PDF", "Share, Anyone with the link", "Danna Ctrl+Z", "Danna dama sannan Comment"], answer: 0, why: "File, Download, PDF yana ajiye PDF." },
      { objective: "O6", q: "Kafin bugawa, ya kamata ku:", options: ["Duba preview na bugawa", "Goge fayil ɗin", "Raba shi da kowa", "Canja dukkan font"], answer: 0, why: "Preview yana nuna ko an yanke wani abu." }
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
      9,
      13,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Takarda mai shafi ɗaya mai kyau",
        objective: "O2",
        notYet: "Babu take, ko jeri mai ɗigo, ko layin bayanin tuntuɓa.",
        meets: "Take mai kauri a Heading 1, jeri mai ɗigo da layin bayanin tuntuɓa, duka a shafi ɗaya.",
        exceeds: "Yana kuma amfani da font ɗaya mai sauƙi, gajerun sakin layi da sunan fayil mai sarari."
      },
      {
        name: "Rabawa lafiya",
        objective: "O3",
        notYet: "Ba a raba takardar ba, ko an raba ta da izinin edit ko \"Anyone with the link\".",
        meets: "An raba ta da mutum ɗaya a matsayin view only.",
        exceeds: "An kuma bar sharhi na neman ra'ayi kuma an zaɓi Resolve bayan an sami amsa."
      },
      {
        name: "Spreadsheet",
        objective: "O4",
        notYet: "Babu kanun bayanai ko an lissafa ƙasa da kuɗaɗe biyar.",
        meets: "Kanun Item da Cost a layi na 1 da aƙalla kuɗaɗe biyar, ɗaya a kowane layi, an rubuta su a matsayin lambobi.",
        exceeds: "Layi na 1 yana da kauri kuma fayil ɗin yana da suna mai sarari."
      },
      {
        name: "Jimlar SUM",
        objective: "O5",
        notYet: "An rubuta jimlar da hannu ko formula tana ba da kuskure.",
        meets: "Formula ta SUM tana ba da jimla daidai kuma tana sabuntawa idan wani kuɗi ya canja.",
        exceeds: "An kuma rubuta sunan jimlar kuma an ƙara formula ta AVERAGE."
      },
      {
        name: "PDF",
        objective: "O6",
        notYet: "Ɗaya ko dukkan fayilolin biyu ba a ajiye su a matsayin PDF ba.",
        meets: "An sauke takardar da spreadsheet ɗin duka a matsayin PDF kuma ana iya samun su a Downloads.",
        exceeds: "An kuma duba preview na bugawa don kada a yanke wani abu."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na aikin ƙarshe",
      "Masu koyo da suka ce sun yi takarda, kasafin kuɗi ko jerin sunaye na gaske cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka aika PDF don neman aiki, makaranta ko takardar ofis ba tare da taimako ba",
      "Masu koyo da suka ci gaba zuwa wani kwas na gaba, kamar Email and Online Communication (Imel da Sadarwa ta Intanet) ko kwas na neman aiki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko tablet mai intanet da burauzar intanet (waya tana aiki amma ta fi wuya)",
      "Asusun Google ko Microsoft kyauta",
      "Aiki na gaske don atisaye, kamar takardar talla, wasiƙa ko kasafin kuɗi na mako",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Kafin zaman, ku duba cewa kowane mai koyo zai iya shiga asusun Google ko Microsoft; ku taimaka a buɗe asusu tun kafin lokaci don lokacin aji ya tafi kan takardun.",
      "Ku bar kowane mai koyo ya zaɓi Google ko Microsoft ya tsaya da shi a dukkan kwas ɗin; ku haɗa masu koyo da ke amfani da iri ɗaya.",
      "Don atisayen rabawa, ku sa masu koyo su raba da abokin aiki a ɗakin a matsayin view only, ba da \"Anyone with the link\" ba, kuma kada a yi amfani da adireshi ko lambobin shaida na gaske.",
      "A ɗakunan kwamfuta, ku tunatar da masu koyo su fita daga asusunsu a ƙarshe don kada mutum na gaba ya buɗe fayilolinsu.",
      "Idan bugawa tana cin kuɗi a wurin da kuke haɗuwa, ku nuna preview na bugawa da saukar PDF, kuma ku buga ne kawai idan ana buƙata."
    ]
  }
};
