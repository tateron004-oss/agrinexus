"use strict";

// Koach Learn course, Hausa (ha) translation of shared/excel-spreadsheets.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Formulas and the English menu names of Excel and Google Sheets stay as written, because the apps show them in English.

module.exports = {
  id: "excel-spreadsheets-ha",
  lang: "ha",
  translationOf: "excel-spreadsheets",
  category: "Small Business",
  name: "Excel da Spreadsheet don Aiki",
  skills: "Shigar da bayanai da tsara su, Ƙara jimla da matsakaici da SUM da AVERAGE, Yanke hukunci da IF, Jera da tace bayanai, Yin jadawali mai sauƙi, Daskarar da layin kanun bayanai da raba takarda",
  outcome: "gina spreadsheet mai tsabta na aiki a Excel ko Google Sheets: shigar da bayanai da tsara su, ƙara jimla da matsakaici da formula, sa wa layuka suna da IF, jera da tace bayanai, yin jadawali mai sauƙi, daskarar da layin kanun bayanai, da raba shi lafiya da abokin aiki.",
  about: [
    "Ana amfani da spreadsheet a kusan kowane wurin aiki: shago yana bin diddigin sayarwa, ƙungiyar agaji tana bin diddigin gudummawa da awannin masu sa kai, shugaban ma'aikata yana bin diddigin lokutan aiki, iyali kuma suna bin diddigin kasafin kuɗi. Sanin sa sosai ƙwarewa ce da masu ɗaukar aiki suke nema.",
    "Wannan kwas ɗin yana aiki a Microsoft Excel (a kwamfuta, ko kyauta a intanet a office.com da asusun Microsoft) da kuma Google Sheets (kyauta da asusun Google a sheets.google.com). Formula iri ɗaya ne a duka biyun. Idan sunayen menu sun bambanta, darasin zai faɗa muku duka biyun ko ya bayyana abin da za ku yi.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku duba hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" a spreadsheet na gaske. Za ku gina takardar atisaye ɗaya a duk tsawon kwas ɗin. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku gina takardar \"Weekly Sales\" (sayarwar mako), ko \"Volunteer Hours\" (awannin masu sa kai) ko \"Shift Hours\" (awannin aiki), mai layuka aƙalla 8: kanun bayanai da rubutu mai kauri (bold), kuɗi a tsarin currency, jimla da SUM da matsakaici da AVERAGE, ginshiƙin IF da ke sa wa kowane layi suna (misali \"Goal met\" ko \"Below goal\"), bayanai a jere daga mafi girma zuwa mafi ƙanƙanta, filter a layin kanun bayanai, jadawalin ginshiƙai (column chart), layin sama a daskare, da fayil ɗin da aka raba da mutum ɗaya a matsayin mai kallo (viewer).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci, ma'aikatansu, masu neman aiki da masu sa kai da ke buƙatar bin diddigin sayarwa, awanni, kaya ko gudummawa a wurin aiki. Da yawa sun taɓa ganin spreadsheet amma ba su taɓa gina ɗaya daga farko ba.",
    startingPoint: "Suna iya amfani da kwamfuta ko waya, su yi rubutu, kuma su buɗe burauzar intanet. Ba sa amfani da formula, jerawa, jadawali ko saitunan rabawa sosai, ko kwata-kwata.",
    gap: "Ayyuka da yawa da ƙananan kasuwanci suna sa ran ƙwarewar spreadsheet ta asali, kuma bayanan da ake ajiyewa a takarda ko a takardu marasa tsari suna kawo kurakurai. Gina takarda mai tsabta mai jimla, sunaye, jadawali da rabawa lafiya yana adana lokaci kuma yana ƙara damar mai koyo na samun aiki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun matakai",
      "Na'urori: kwamfuta mai Excel, Excel a intanet ko Google Sheets ta fi kyau; waya ta fi wuya",
      "Lokaci: kusan minti 5 a kowane darasi tare da atisaye da hannu",
      "Menu sun ɗan bambanta tsakanin Excel da Google Sheets; an nuna duka biyun",
      "Sirri: babu kalmomin sirri (password), lambobin Social Security ko bayanan banki a takardun atisaye ko waɗanda aka raba"
    ],
    prerequisites: "Babu. Masu koyo da suke sababbi ga kwamfuta za su iya fara ɗaukar kwas na ƙwarewar kwamfuta ta asali."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "A cikin fayil maras komai na Excel ko Google Sheets", action: "shigar da ƙaramin tebur mai kanun bayanai a layi na 1 da bayani ɗaya a kowane layi", standard: "da irin bayani ɗaya kaɗai a kowane ginshiƙi" },
    { id: "O2", condition: "Idan aka ba ku teburin bayanai", action: "tsara kanun bayanai da rubutu mai kauri (bold), kuɗi a tsarin currency, da faɗin ginshiƙai yadda suka dace", standard: "ta yadda za a karanta shi a sarari da kallo ɗaya" },
    { id: "O3", condition: "Idan aka ba ku ginshiƙin lambobi", action: "rubuta formula na SUM, AVERAGE da na layi, sannan kwafe su ƙasa da fill handle", standard: "da sakamako daidai kuma babu saƙon kuskure" },
    { id: "O4", condition: "Idan aka ba ku ƙa'ida kamar burin sayarwa ko awanni 40", action: "rubuta formula na IF da ke sa wa kowane layi suna", standard: "da suna daidai a kowane layi" },
    { id: "O5", condition: "Idan aka ba ku tebur mai layuka aƙalla 8", action: "jera dukkan teburin, ƙara filter, da daskarar da layin kanun bayanai", standard: "ba tare da cakuɗa kowane layi ba" },
    { id: "O6", condition: "Idan aka ba ku sunaye da lambobi", action: "yin jadawalin ginshiƙai (column chart) da raba fayil ɗin da mafi ƙanƙantar izinin da mutumin yake buƙata", standard: "babu bayanan sirri a takardar da aka raba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gina takardarku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cell, layuka, ginshiƙai da shigar da bayanai",
          minutes: 5,
          goal: "Buɗe sabon spreadsheet ku shigar da ƙaramin teburin bayanai mai kanun bayanai.",
          text: [
            "Spreadsheet wani tsari ne na akwatuna. Ginshiƙai (columns) suna tafiya sama da ƙasa kuma suna da haruffa (A, B, C). Layuka (rows) suna tafiya daga hagu zuwa dama kuma suna da lambobi (1, 2, 3). Kowane akwati cell ne, kuma ana kiran sa da ginshiƙinsa da layinsa: cell na saman hagu shi ne A1. Fayil ɗaya zai iya ɗaukar takardu (sheets) da yawa, waɗanda suke bayyana a matsayin tab a ƙasa.",
            "Don shigar da bayani, ku danna cell, ku rubuta, sannan ku danna Enter don sauka ƙasa ko Tab don matsawa dama. Ku sa kanun bayanai a layi na 1, kamar Date, Item, Quantity da Price, da bayani ɗaya a kowane layi a ƙasa. Ku sa irin bayani ɗaya kaɗai a kowane ginshiƙi: kwanan wata kaɗai a ginshiƙin Date, lambobi kaɗai a Price.",
            "Don gyara cell, ku danna shi ku rubuta a kansa, ko ku danna sau biyu don gyara wani sashe nasa. Undo (Ctrl+Z a Windows, Cmd+Z a Mac) yana dawo da canjinku na ƙarshe. Excel a intanet da Google Sheets suna ajiye aikinku yayin da kuke aiki; a Excel na kwamfuta, ku riƙa ajiyewa (save) akai-akai.",
            "Don farawa: a Google Sheets, ku je sheets.google.com ku zaɓi spreadsheet maras komai (blank). A Excel, ku buɗe Excel (ko Excel a intanet a office.com) ku zaɓi blank workbook."
          ],
          steps: ["Ku buɗe spreadsheet maras komai a Google Sheets ko Excel.", "Ku danna cell A1 ku rubuta kanun bayanai na farko. Ku danna Tab don matsawa dama.", "Ku rubuta sauran kanun bayanai a layi na 1.", "Ku shigar da bayani ɗaya a kowane layi, kuna farawa daga layi na 2.", "Ku ba fayil ɗin suna mai sarari, kamar \"Weekly Sales - March\"."],
          words: [["Cell", "akwati ɗaya a cikin tsarin, wanda ake kira da harafin ginshiƙi da lambar layi, kamar B3."], ["Kanun bayani (header)", "sunan da ke saman ginshiƙi wanda ke faɗin abin da ke cikinsa."], ["Workbook", "fayil na Excel; zai iya ɗaukar takardu da yawa."]],
          slides: [
            { title: "Tsarin akwatuna", bullets: ["Ginshiƙai suna da haruffa; layuka suna da lambobi", "Ana kiran cell kamar A1 ko B3", "Tab a ƙasa takardu ne daban-daban"] },
            { title: "Shigar da bayanai", bullets: ["Ku danna, ku rubuta, sannan Enter (ƙasa) ko Tab (dama)", "Kanun bayanai a layi na 1", "Bayani ɗaya a kowane layi, irin bayani ɗaya a kowane ginshiƙi"] },
            { title: "Gyara da ajiyewa", bullets: ["Ku rubuta a kan cell ko ku danna sau biyu don gyara", "Undo: Ctrl+Z (Windows) ko Cmd+Z (Mac)", "Na intanet suna ajiyewa yayin da kuke aiki"] }
          ],
          tryIt: "Ku buɗe spreadsheet maras komai. A layi na 1 ku rubuta kanun bayanai Day, Item, Quantity, Price. Ku shigar da layuka 8 na sayarwar atisaye (misali Mon, Coffee, 12, 3.50). Ku sa wa fayil ɗin suna \"Practice Sales\".",
          youCanNow: "buɗe spreadsheet, nemo kowane cell da sunansa, da shigar da tebur mai tsabta mai kanun bayanai.",
          quickCheck: [
            { objective: "O1", q: "Mene ne cell?", options: ["Ginshiƙi gaba ɗaya", "Tab a ƙasan fayil ɗin", "Akwati ɗaya a cikin tsarin, wanda ake kira da ginshiƙinsa da layinsa", "Sunan fayil ɗin"], answer: 2, why: "Kowane akwati a cikin tsarin cell ne, ana kiran sa da harafin ginshiƙi da lambar layi, kamar A1." },
            { objective: "O1", q: "Kuna yin jerin farashi. Me zai shiga ginshiƙin Price?", options: ["Farashi da sunayen kaya a haɗe", "Farashi kaɗai", "Farashi da bayanai game da kowane abokin ciniki", "Duk abin da ya dace"], answer: 1, why: "Ku sa irin bayani ɗaya a kowane ginshiƙi, don haka ginshiƙin Price yana ɗauke da lambobi kaɗai." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tsarawa don ya zama mai sauƙin karantawa",
          minutes: 4,
          goal: "Tsara kanun bayanai, kuɗi da faɗin ginshiƙai don takardar ta zama a sarari.",
          text: [
            "Tsarawa (formatting) yana canja yadda bayani yake kama, ba abin da yake ba. Tsari mai kyau yana sa takarda ta zama mai sauƙin karantawa da kallo ɗaya.",
            "Ku sa kanun bayanai su yi kauri (bold): ku zaɓi layi na 1 ku danna maɓallin B (Bold) a kan toolbar, ko ku danna Ctrl+B (Cmd+B a Mac). Kuna kuma iya ƙara launi a bayan layin kanun bayanai.",
            "Ku nuna kuɗi a tsarin currency: ku zaɓi ginshiƙin Price, sannan ku buɗe menu na tsarin lamba (number format) ku zaɓi Currency. A Excel yana kan tab ɗin Home; a Google Sheets yana ƙarƙashin Format, sannan Number, kuma akwai maɓallin $ a kan toolbar.",
            "Ku sa ginshiƙai su dace: ku danna sau biyu a kan layin da ke tsakanin haruffan ginshiƙai biyu a sama, sai ginshiƙin hagu ya canja faɗinsa don ya dace da bayaninsa mafi tsawo. Wannan yana aiki a Excel da Google Sheets duka."
          ],
          steps: ["Ku zaɓi layi na 1 ta danna lamba 1 a hagu.", "Ku danna Bold (B) ko ku danna Ctrl+B.", "Ku zaɓi ginshiƙin Price ta danna harafinsa.", "Ku zaɓi Currency daga menu na number format (Excel: tab ɗin Home; Sheets: Format > Number, ko maɓallin $).", "Ku danna sau biyu a kan iyakar da ke tsakanin haruffan ginshiƙai don daidaita faɗin."],
          words: [["Tsarawa (formatting)", "canja yadda bayani yake kama (bold, launi, currency) ba tare da canja ƙimarsa ba."], ["Zaɓa (select)", "danna ko ja kan cell don zaɓar su kafin ku yi wani abu da su."]],
          slides: [
            { title: "Tsarawa yana canja kamanni", bullets: ["Ba ƙimar da ke ciki ba", "Yana sa takarda ta zama mai sauƙin karantawa"] },
            { title: "Kanun bayanai masu kauri (bold)", bullets: ["Ku zaɓi layi na 1", "Ku danna B ko Ctrl+B (Cmd+B a Mac)", "Ku ƙara launi a baya idan kuna so"] },
            { title: "Kuɗi a tsarin currency", bullets: ["Ku zaɓi ginshiƙin", "Excel: menu na number format a tab ɗin Home", "Sheets: Format > Number, ko maɓallin $"] },
            { title: "Daidaita ginshiƙai", bullets: ["Ku danna sau biyu a kan layin tsakanin haruffan ginshiƙai", "Yana aiki a Excel da Google Sheets"] }
          ],
          tryIt: "A takardarku ta Practice Sales, ku sa layi na 1 ya yi kauri (bold) da launi mai haske a baya, ku nuna ginshiƙin Price a tsarin currency, sannan ku daidaita faɗin kowane ginshiƙi.",
          youCanNow: "tsara kanun bayanai, kuɗi da faɗin ginshiƙai don takarda ta zama a sarari kuma ta ƙwararru.",
          quickCheck: [
            { objective: "O2", q: "Me tsarawa (formatting) yake canjawa?", options: ["Yadda bayani yake kama, ba abin da yake ba", "Lambobin da ke cikin cell ɗinku", "Formula da ke takardarku", "Wanda zai iya buɗe fayil ɗin"], answer: 0, why: "Tsarawa yana canja yadda bayani yake kama, kamar bold ko currency, ba ƙimarsa ba." },
            { objective: "O2", q: "Wani ginshiƙi ya yi kunkuntar sosai kuma yana yanke rubutu. Me za ku yi?", options: ["Ku goge dogayen bayanai", "Ku sa rubutun ya yi ƙanƙanta sosai", "Ku sake rubuta rubutun a cell biyu", "Ku danna sau biyu a kan layin tsakanin haruffan ginshiƙai a sama"], answer: 3, why: "Danna iyakar sau biyu yana canja faɗin ginshiƙin don ya dace da bayaninsa mafi tsawo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Jimla da matsakaici da SUM da AVERAGE",
          minutes: 5,
          goal: "Rubuta formula na SUM da AVERAGE ku kwafe formula ƙasa a cikin ginshiƙi.",
          text: [
            "Formula koyaushe yana farawa da alamar daidai (=). Yana iya yin lissafi da sunayen cell: =C2*D2 yana ninka yawan kaya a C2 da farashin a D2. Idan kun canja C2, amsar tana sabuntawa da kanta.",
            "SUM yana tara jerin cell (range). Ana rubuta range a matsayin cell na farko, alamar colon (:), cell na ƙarshe: =SUM(E2:E9) yana tara E2 har zuwa E9. AVERAGE yana nemo matsakaici: =AVERAGE(E2:E9). Duka biyun suna aiki iri ɗaya a Excel da Google Sheets.",
            "Don kwafe formula ƙasa a ginshiƙi, ku danna cell mai formula, sannan ku ja ɗan ƙaramin akwatin da ke kusurwar ƙasa ta dama (fill handle) zuwa ƙasa. Sunayen cell suna canjawa a kowane layi: E2 ya zama E3, E4 da sauransu.",
            "Ku duba aikinku: idan formula ya nuna kuskure kamar #NAME? ko #VALUE!, ku nemi kuskuren rubutu a sunan aikin (function) ko rubutu a cikin ginshiƙin lambobi."
          ],
          steps: ["A E1 ku rubuta kanun bayani Total.", "A E2 ku rubuta =C2*D2 ku danna Enter.", "Ku ja fill handle daga E2 zuwa ƙasa har layi na ƙarshe.", "A ƙarƙashin layi na ƙarshe, ku rubuta =SUM(E2:E9) don babban jimla.", "A ƙarƙashinsa, ku rubuta =AVERAGE(E2:E9) don matsakaicin sayarwa."],
          words: [["Formula", "lissafi a cikin cell da ke farawa da = kuma yana sabuntawa idan bayanai suka canja."], ["Range", "rukunin cell da ake rubutawa na farko:na ƙarshe, kamar E2:E9."], ["Fill handle", "ɗan ƙaramin akwati a ƙasa ta dama na cell da aka zaɓa wanda kuke ja don kwafewa."]],
          slides: [
            { title: "Formula suna farawa da =", bullets: ["=C2*D2 yana ninka cell biyu", "Ku canja bayanai, amsar tana sabuntawa"] },
            { title: "SUM da AVERAGE", bullets: ["=SUM(E2:E9) yana tara range", "=AVERAGE(E2:E9) yana nemo matsakaici", "Iri ɗaya a Excel da Google Sheets"] },
            { title: "Kwafe formula zuwa ƙasa", bullets: ["Ku ja fill handle a kusurwar cell ɗin", "Sunayen cell suna canjawa a kowane layi"] },
            { title: "Kurakurai", bullets: ["#NAME?: ku duba yadda aka rubuta sunan", "#VALUE!: rubutu a inda ya kamata lamba ta kasance"] }
          ],
          tryIt: "A takardarku, ku ƙara ginshiƙin Total da =C2*D2 da aka kwafe zuwa ƙasa, sannan ku ƙara babban jimla da SUM da matsakaicin sayarwa da AVERAGE a ƙarƙashin ginshiƙin. Ku canja yawan kaya ɗaya ku kalli jimlolin suna sabuntawa.",
          youCanNow: "rubuta formula na SUM da AVERAGE, ninka cell, da kwafe formula ƙasa a ginshiƙi.",
          quickCheck: [
            { objective: "O3", q: "Me =C2*D2 yake yi?", options: ["Yana tara C2 da D2", "Yana ninka ƙimar C2 da ƙimar D2", "Yana kwafe C2 zuwa D2", "Yana nuna kuskure"], answer: 1, why: "Alamar * tana ninkawa, don haka =C2*D2 yana ninka yawan kaya da farashi." },
            { objective: "O3", q: "Kuna buƙatar jimlar E2 har zuwa E9. Me za ku rubuta?", options: ["SUM E2 to E9", "=E2+E9", "=SUM(E2:E9)", "=TOTAL E2-E9"], answer: 2, why: "SUM yana tara range da aka rubuta cell na farko, colon, cell na ƙarshe, kuma kowane formula yana farawa da =." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gina takardarku",
        questions: [
          { objective: "O1", q: "Mene ne sunan cell da ke ginshiƙi C, layi na 4?", options: ["4C", "C4", "Row C", "Cell 34"], answer: 1, why: "Ana kiran cell da harafin ginshiƙinsa, sannan lambar layinsa." },
          { objective: "O1", q: "A ina kanun bayananku za su kasance?", options: ["A layi na 1, ɗaya a kowane ginshiƙi", "A ƙasa", "A cell barkatai", "A wani fayil daban"], answer: 0, why: "Kanun bayanai a layi na 1 suna sa wa kowane ginshiƙin bayanai da ke ƙasa suna." },
          { objective: "O2", q: "Kuna son farashi su bayyana da alamar dala. Me za ku yi?", options: ["Ku rubuta $ kafin kowace lamba", "Ku sa ginshiƙin ya yi kauri (bold)", "Ku goge farashin", "Ku zaɓi Currency daga menu na number format"], answer: 3, why: "Tsarin currency yana ƙara alamar kuɗi da adadin bayan digo a kowane cell." },
          { objective: "O3", q: "Wane formula ne yake tara cell B2 har zuwa B10?", options: ["SUM B2-B10", "=ADD(B2,B10)", "=SUM(B2:B10)", "B2+B10"], answer: 2, why: "Formula suna farawa da =, kuma range yana amfani da colon." },
          { objective: "O3", q: "Me zai faru idan kuka ja fill handle zuwa ƙasa daga cell mai =C2*D2?", options: ["Ana kwafe formula kuma yana canjawa a kowane layi", "Ana goge cell ɗin", "Kowane layi yana samun =C2*D2 daidai yadda yake", "Ana raba takardar"], answer: 0, why: "Sunayen cell suna canjawa layi bayan layi: C3*D3, C4*D4 da sauransu." }
        ]
      }
    },
    {
      name: "Babi na 2: Aiki da bayananku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yanke hukunci da IF",
          minutes: 5,
          goal: "Rubuta formula na IF da ke sa wa kowane layi suna bisa wata ƙa'ida.",
          text: [
            "IF yana duba wani sharaɗi, kuma yana nuna sakamako ɗaya idan gaskiya ne, da wani daban idan ba gaskiya ba ne. Tsarin shi ne =IF(test, value if true, value if false): wato gwaji, sakamakon idan gaskiya ne, sakamakon idan ba gaskiya ba ne.",
            "Misalai: =IF(E2>=50,\"Goal met\",\"Below goal\") yana sa wa sayarwa suna (an cimma buri, ko ƙasa da buri). =IF(C2>40,\"Overtime\",\"Regular\") yana sa wa awannin mako suna (ƙarin awanni, ko na yau da kullum). =IF(D2=\"\",\"Missing\",\"OK\") yana nuna cell maras komai. Amsoshi na rubutu suna shiga cikin alamar zance biyu (\" \"); lambobi ba sa shiga.",
            "Alamomin kwatantawa: > ya fi, < ya gaza, >= ya fi ko ya yi daidai, <= ya gaza ko ya yi daidai, = ya yi daidai, <> bai yi daidai ba.",
            "IF yana aiki iri ɗaya a Excel da Google Sheets. Idan saitin yankin takardarku yana amfani da waƙafi (,) don adadin bayan digo, mai raba sassan zai iya zama semicolon (;) maimakon waƙafi; manhajar za ta nuna muku tsarin yayin da kuke rubutu."
          ],
          steps: ["Ku ƙara kanun bayani, kamar Status, a ginshiƙi maras komai na gaba.", "A layi na 2 ku rubuta =IF(", "Ku rubuta gwajin, kamar E2>=50, sannan waƙafi.", "Ku rubuta sakamakon gaskiya a cikin alamar zance, waƙafi, sakamakon ba gaskiya ba a cikin alamar zance, sannan ).", "Ku danna Enter ku kwafe formula zuwa ƙasa da fill handle."],
          words: [["IF", "aiki (function) da ke nuna sakamako ɗaya idan gwaji gaskiya ne, da wani daban idan ba gaskiya ba ne."], ["Sharaɗi (condition)", "gwajin da ke cikin formula na IF, kamar E2>=50."]],
          slides: [
            { title: "Tsarin IF", bullets: ["=IF(test, if true, if false)", "Iri ɗaya a Excel da Google Sheets"] },
            { title: "Misalai", bullets: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(C2>40,\"Overtime\",\"Regular\")", "Rubutu a cikin alamar zance biyu; lambobi ba tare da su ba"] },
            { title: "Alamomin kwatantawa", bullets: ["> ya fi, < ya gaza", ">= aƙalla, <= mafi yawa", "= ya yi daidai, <> bai yi daidai ba"] }
          ],
          tryIt: "Ku ƙara ginshiƙin Status a takardarku da =IF(E2>=50,\"Goal met\",\"Below goal\") ku kwafe shi zuwa ƙasa. Ku canja jimla ɗaya don ta wuce 50 ku kalli sunan yana canjawa.",
          youCanNow: "rubuta formula na IF da ke sa wa layuka suna da kansa bisa wata ƙa'ida.",
          quickCheck: [
            { objective: "O4", q: "Me aikin IF yake yi?", options: ["Yana tara ginshiƙin lambobi", "Yana jera teburin", "Yana yin jadawali", "Yana nuna sakamako ɗaya idan gwaji gaskiya ne, da wani idan ba gaskiya ba ne"], answer: 3, why: "Tsarin shi ne =IF(test, value if true, value if false)." },
            { objective: "O4", q: "Kuna son sa wa sayarwar 50 ko fiye suna \"Goal met\". Wane formula za ku rubuta a layi na 2?", options: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(E2<50,Goal met,Below goal)", "=SUM(E2>=50)", "=IF(\"Goal met\")"], answer: 0, why: "Gwajin E2>=50 yana zuwa da farko, kuma sakamakon rubutu suna shiga cikin alamar zance biyu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Jerawa, tacewa da daskarar da layin kanun bayanai",
          minutes: 5,
          goal: "Jera bayananku, tace su don nuna wasu layuka kaɗai, da daskarar da layin kanun bayanai.",
          text: [
            "Jerawa (sort) yana sa layuka a tsari, kamar sayarwa mafi girma da farko ko sunaye daga A zuwa Z. Tacewa (filter) yana ɓoye layukan da ba ku buƙata yanzu, kamar nuna layukan \"Below goal\" kaɗai. Babu ɗayansu da ke goge wani bayani.",
            "Excel: ku danna kowane cell a teburinku, ku je tab ɗin Data, ku zaɓi Sort don zaɓar ginshiƙi da tsari, ko ku zaɓi Filter don ƙara kibiyoyi masu buɗewa a layin kanun bayanai. Google Sheets: ku zaɓi bayananku, ku buɗe menu na Data ku zaɓi Sort range (ku nuna cewa bayanan suna da layin kanun bayanai), ko ku zaɓi Create a filter don ƙara kibiyoyin. Ku danna kibiya a kanun bayani don jerawa ko don zaɓar ƙimomin da kuke son gani kaɗai.",
            "Koyaushe ku jera dukkan teburin, ba ginshiƙi ɗaya shi kaɗai ba, in ba haka ba layuka za su cakuɗe. Zaɓar cell ɗaya a cikin teburin a Excel, ko dukkan range a Sheets, yana kiyaye layuka a haɗe.",
            "Daskarewa (freeze) yana sa layin kanun bayanai ya kasance a allo yayin da kuke gungurawa ƙasa a dogon jeri. Excel: tab ɗin View, Freeze Panes, sannan Freeze Top Row. Google Sheets: menu na View, Freeze, sannan 1 row."
          ],
          steps: ["Ku danna cikin teburinku (Excel) ko ku zaɓi dukkan teburin (Sheets).", "Jerawa: Excel tab ɗin Data > Sort; Sheets Data > Sort range, da layin kanun bayanai.", "Tacewa: Excel tab ɗin Data > Filter; Sheets Data > Create a filter.", "Ku yi amfani da kibiyar da ke kanun bayani don nuna layukan da kuke so kaɗai.", "Daskarewa: Excel View > Freeze Panes > Freeze Top Row; Sheets View > Freeze > 1 row."],
          words: [["Jerawa (sort)", "sa layuka a tsari bisa ginshiƙi ɗaya, tare da kiyaye kowane layi a haɗe."], ["Tacewa (filter)", "ɓoye layukan da ba su dace da abin da kuka zaɓa ba, ba tare da goge su ba."], ["Daskarewa (freeze)", "sa layuka ko ginshiƙai su kasance a allo yayin da kuke gungurawa."]],
          slides: [
            { title: "Jerawa da tacewa", bullets: ["Sort: sa layuka a tsari", "Filter: nuna layukan da kuke so kaɗai", "Babu ɗayansu da ke goge bayanai"] },
            { title: "A Excel", bullets: ["Tab ɗin Data > Sort", "Tab ɗin Data > Filter yana ƙara kibiyoyi a kanun bayanai", "View > Freeze Panes > Freeze Top Row"] },
            { title: "A Google Sheets", bullets: ["Data > Sort range (bayanan suna da layin kanun bayanai)", "Data > Create a filter", "View > Freeze > 1 row"] },
            { title: "Ku kiyaye layuka a haɗe", bullets: ["Ku jera dukkan teburin, kada ku taɓa jera ginshiƙi ɗaya shi kaɗai"] }
          ],
          tryIt: "Ku jera takardarku bisa Total daga mafi girma zuwa mafi ƙanƙanta. Ku ƙara filter ku nuna layukan \"Below goal\" kaɗai, sannan ku share filter ɗin. Ku daskarar da layin sama ku gungura ƙasa don ku tabbata kanun bayanai suna nan.",
          youCanNow: "jera da tace bayanai lafiya, da daskarar da layin kanun bayanai.",
          quickCheck: [
            { objective: "O5", q: "Me daskarar da layin kanun bayanai yake yi?", options: ["Yana kulle fayil ɗin don kada kowa ya gyara", "Yana sa layin kanun bayanai ya kasance a allo yayin da kuke gungurawa ƙasa", "Yana goge layukan da ke ƙasa", "Yana sa kanun bayanai ya zama shuɗi"], answer: 1, why: "Daskarewa yana sa kanun bayanai su bayyana yayin da kuke gungurawa a dogon jeri." },
            { objective: "O5", q: "Kuna son ganin layukan \"Below goal\" kaɗai a yanzu, ba tare da rasa kowane bayani ba. Me za ku yi amfani da shi?", options: ["Ku goge sauran layukan", "Ku jera ginshiƙi ɗaya shi kaɗai", "Filter a layin kanun bayanai", "Freeze Panes"], answer: 2, why: "Filter yana ɓoye layukan da ba ku buƙata yanzu kuma ba ya goge komai." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yin jadawali da raba takardarku",
          minutes: 5,
          goal: "Yi jadawalin ginshiƙai mai sauƙi ku raba takardar da izinin da ya dace.",
          text: [
            "Jadawali (chart) yana mayar da lambobi zuwa hoto. Jadawalin ginshiƙai (column chart) yana da kyau wajen kwatanta yawa, kamar sayarwa a kowace rana ko awannin masu sa kai a kowane mutum.",
            "Ku zaɓi ginshiƙai biyu: sunayen (kamar Day) da lambobin (kamar Total), tare da kanun bayanai. Don zaɓar ginshiƙai biyu da ba su kusa da juna ba, ku riƙe Ctrl (Cmd a Mac) yayin da kuke zaɓar na biyu. Excel: ku je tab ɗin Insert ku zaɓi column chart (ko Recommended Charts). Google Sheets: ku buɗe menu na Insert ku zaɓi Chart; editan jadawali yana buɗewa a dama, inda za ku iya zaɓar Column chart. Ku danna taken jadawalin don canja sunansa.",
            "Don rabawa: a Google Sheets, ku danna maɓallin Share a saman dama, ku rubuta imel ɗin mutumin, ku zaɓi Viewer (mai kallo), Commenter (mai sharhi) ko Editor (mai gyara). A Excel, dole ne a ajiye fayil ɗin a OneDrive ko SharePoint; sannan ku danna Share, ku ƙara imel ɗin, ku zaɓi ko za su iya gyarawa ko kallo kaɗai.",
            "Ku raba lafiya: ku ba da mafi ƙanƙantar izinin da mutumin yake buƙata (kallo kaɗai idan karantawa kawai yake buƙata), kuma kada ku taɓa sa kalmomin sirri (password), lambobin Social Security ko bayanan banki a takardar da aka raba."
          ],
          steps: ["Ku zaɓi ginshiƙin sunaye da ginshiƙin lambobi, tare da kanun bayanai.", "Excel: tab ɗin Insert > column chart. Sheets: Insert > Chart, sannan ku zaɓi Column chart.", "Ku canja sunan taken jadawalin.", "Ku danna Share, ku ƙara imel ɗin mutumin.", "Ku zaɓi kallo kaɗai sai dai idan suna buƙatar gyarawa, sannan ku aika."],
          words: [["Column chart (jadawalin ginshiƙai)", "jadawali mai sanduna a tsaye, mai kyau wajen kwatanta yawa."], ["Viewer (mai kallo)", "wanda zai iya ganin fayil da aka raba amma ba zai iya canja shi ba."], ["Editor (mai gyara)", "wanda zai iya canja fayil da aka raba."]],
          slides: [
            { title: "Ku zaɓi jadawalin da ya dace", bullets: ["Column chart: kwatanta yawa", "Misali: sayarwa a kowace rana, awanni a kowane mutum"] },
            { title: "Yin jadawalin", bullets: ["Ku zaɓi sunaye da lambobi tare da kanun bayanai", "Excel: tab ɗin Insert > column chart", "Sheets: Insert > Chart > Column chart"] },
            { title: "Ku raba shi", bullets: ["Ku danna Share, ku ƙara imel", "Ku zaɓi kallo ko gyara", "Fayilolin Excel dole su kasance a OneDrive ko SharePoint"] },
            { title: "Ku raba lafiya", bullets: ["Ku ba da mafi ƙanƙantar izinin da ake buƙata", "Babu kalmomin sirri, lambobin shaida ko na banki a takardun da aka raba"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala takardarku mai layuka aƙalla 8, kanun bayanai masu kauri (bold), currency, SUM da AVERAGE, ginshiƙin Status na IF, an jera daga mafi girma zuwa mafi ƙanƙanta, filter, column chart na Day da Total, da layin sama a daskare. Sannan ku raba shi da mutum ɗaya a matsayin mai kallo (viewer).",
          youCanNow: "yin jadawalin ginshiƙai daga bayananku da raba spreadsheet da izinin da ya dace.",
          quickCheck: [
            { objective: "O6", q: "Wane jadawali ne yake da kyau wajen kwatanta yawa, kamar awanni a kowane mutum?", options: ["Column chart (jadawalin ginshiƙai)", "Takarda maras komai", "Filter", "Layi da aka daskare"], answer: 0, why: "Darasin ya ce column chart yana da kyau wajen kwatanta yawa." },
            { objective: "O6", q: "Manajanku yana buƙatar karanta takardarku kawai. Wane izini za ku bayar idan kun raba ta?", options: ["Editor", "Owner", "Duk mai hanyar haɗi (link) zai iya gyarawa", "Viewer"], answer: 3, why: "Ku ba da mafi ƙanƙantar izinin da mutumin yake buƙata; kallo kaɗai idan karantawa kawai yake buƙata." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Aiki da bayananku",
        questions: [
          { objective: "O4", q: "Me =IF(C2>40,\"Overtime\",\"Regular\") zai nuna idan C2 ya zama 45?", options: ["Regular", "45", "Overtime", "Kuskure"], answer: 2, why: "45 ya fi 40, don haka sakamakon gaskiya ne yake bayyana." },
          { objective: "O4", q: "A formula na IF, a ina sakamakon rubutu suke shiga?", options: ["Cikin alamar zance biyu", "Cikin baka", "Bayan alamar #", "Babu inda"], answer: 0, why: "Dole sakamakon rubutu su kasance cikin alamar zance biyu." },
          { objective: "O5", q: "Me filter yake yi?", options: ["Yana goge layuka", "Yana canja lambobin", "Yana raba fayil ɗin", "Yana ɓoye layukan da ba su dace ba, ba tare da goge su ba"], answer: 3, why: "Tacewa yana ɓoye layuka kawai; share shi yana sake nuna su." },
          { objective: "O5", q: "Ta yaya za ku sa layin kanun bayanai ya kasance a allo a Google Sheets?", options: ["Format > Bold", "View > Freeze > 1 row", "Insert > Chart", "Data > Sort range"], answer: 1, why: "Daskarar da layi na 1 yana sa shi ya bayyana yayin da kuke gungurawa." },
          { objective: "O6", q: "Wani mai sa kai yana buƙatar karanta takardarku kawai. Wane izini za ku bayar?", options: ["Editor", "Owner", "Viewer", "Babu; ku aika kalmar sirrinku"], answer: 2, why: "Ku ba da mafi ƙanƙantar izinin da mutumin yake buƙata." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Excel da Spreadsheet don Aiki",
    questions: [
      { objective: "O1", q: "A spreadsheet, ana sa wa ginshiƙai suna da:", options: ["Lambobi", "Haruffa", "Launuka", "Kwanan wata"], answer: 1, why: "Ginshiƙai suna amfani da haruffa; layuka suna amfani da lambobi." },
      { objective: "O1", q: "Wane maɓalli ne yake matsar da ku cell ɗaya zuwa dama bayan kun rubuta?", options: ["Tab", "Enter", "Shift", "Esc"], answer: 0, why: "Tab yana matsawa dama; Enter yana sauka ƙasa." },
      { objective: "O1", q: "Wane tsari ne mafi kyau don jerin gudummawa?", options: ["Kowace gudummawa a fayil daban", "Dukkan bayanai a cell ɗaya", "Cell barkatai a cikin takardar", "Kanun bayanai a layi na 1 da gudummawa ɗaya a kowane layi"], answer: 3, why: "Bayani ɗaya a kowane layi a ƙarƙashin kanun bayanai masu sarari yana sa bayanai su yi amfani." },
      { objective: "O1", q: "Kun rubuta lamba ba daidai ba. Hanya mafi sauri don dawo da canjinku na ƙarshe ita ce:", options: ["Rufe fayil ɗin", "Undo: Ctrl+Z (Cmd+Z a Mac)", "Goge ginshiƙin", "Fara sabon fayil"], answer: 1, why: "Undo yana mayar da aikinku na ƙarshe." },
      { objective: "O2", q: "Tsara lamba a tsarin currency:", options: ["Yana canja yadda take kama, ba ƙimarta ba", "Yana ninka ƙimar sau biyu", "Yana goge lambar", "Yana mayar da ita rubutun da ba za a iya tarawa ba"], answer: 0, why: "Tsarawa yana canja kamanni kawai." },
      { objective: "O2", q: "Ta yaya za ku sa ginshiƙi ya dace da bayaninsa mafi tsawo?", options: ["Ku rubuta sarari (spaces)", "Ku goge kanun bayani", "Ku danna sau biyu a kan layin tsakanin haruffan ginshiƙai", "Ku danna Enter sau biyu"], answer: 2, why: "Danna iyakar sau biyu yana daidaita faɗin ginshiƙin." },
      { objective: "O3", q: "Kowane formula yana farawa da:", options: ["Alamar ƙari kaɗai", "Alamar dala", "Harafi", "Alamar daidai"], answer: 3, why: "Alamar = tana gaya wa manhajar cewa formula ne." },
      { objective: "O3", q: "Wanne ne yake nemo matsakaicin D2 zuwa D20?", options: ["=AVERAGE(D2:D20)", "=AVG D2 D20", "AVERAGE=D2:D20", "=SUM(D2:D20)"], answer: 0, why: "AVERAGE da range da aka rubuta na farko:na ƙarshe." },
      { objective: "O3", q: "Kun canja yawan kaya da formula na SUM yake amfani da shi. Me zai faru ga jimlar?", options: ["Babu komai", "Tana sabuntawa da kanta", "Tana nuna kuskure", "Ana goge ta"], answer: 1, why: "Formula suna sake lissafi idan bayanansu suka canja." },
      { objective: "O3", q: "Wani cell yana nuna #NAME?. Mene ne dalilin da ya fi yiwuwa?", options: ["An raba fayil ɗin", "Ginshiƙin yana da kauri (bold)", "An rubuta sunan aikin (function) ba daidai ba", "An daskarar da takardar"], answer: 2, why: "#NAME? yawanci yana nufin manhajar ba ta gane sunan aikin ba." },
      { objective: "O3", q: "Mene ne fill handle?", options: ["Wani menu", "Ɗan ƙaramin akwati a kusurwar ƙasa ta dama na cell da ake amfani da shi don kwafewa", "Maɓallin Share", "Wani nau'in jadawali"], answer: 1, why: "Jan sa yana kwafe formula kuma yana canja sunayen cell." },
      { objective: "O4", q: "Wane formula ne yake nuna \"Missing\" idan D2 babu komai, da \"OK\" idan akwai?", options: ["=IF(D2=\"\",\"Missing\",\"OK\")", "=SUM(D2)", "=IF(D2,OK,Missing)", "=AVERAGE(\"Missing\")"], answer: 0, why: "Gwajin D2=\"\" yana duba ko cell babu komai." },
      { objective: "O4", q: "Me <> yake nufi a formula?", options: ["Ya fi", "Ya yi daidai", "Ya gaza", "Bai yi daidai ba"], answer: 3, why: "<> yana nufin bai yi daidai ba." },
      { objective: "O5", q: "A Excel, a ina Sort da Filter suke?", options: ["Tab ɗin File", "Tab ɗin Data", "Tab ɗin Help", "Tab ɗin Draw"], answer: 1, why: "Sort da Filter suna kan tab ɗin Data na Excel." },
      { objective: "O5", q: "A Google Sheets, ta yaya za ku ƙara kibiyoyin filter a layin kanun bayanai?", options: ["Data > Create a filter", "Insert > Chart", "Format > Number", "File > Share"], answer: 0, why: "Create a filter yana ƙara kibiyoyi a kowane kanun bayani." },
      { objective: "O5", q: "Me yasa kada ku taɓa jera ginshiƙi ɗaya kaɗai na tebur?", options: ["Yana da jinkiri sosai", "Yana goge takardar", "Layuka suna cakuɗewa", "Yana raba fayil ɗin"], answer: 2, why: "Jera ginshiƙi ɗaya shi kaɗai yana raba ƙimomi da sauran layinsu." },
      { objective: "O5", q: "A Excel, ta yaya za ku sa layi na 1 ya kasance a bayyane yayin gungurawa?", options: ["Insert > Chart", "Home > Bold", "Data > Filter", "View > Freeze Panes > Freeze Top Row"], answer: 3, why: "Freeze Top Row yana sa kanun bayanai su kasance a allo." },
      { objective: "O6", q: "Wane jadawali ne mafi kyau don kwatanta sayarwa a kowace rana?", options: ["Column chart (jadawalin ginshiƙai)", "Babu jadawali", "Jadawali marar sunaye", "Hoton fanke (pie) da kuka zana"], answer: 0, why: "Column chart yana kwatanta yawa gefe da gefe." },
      { objective: "O6", q: "A Google Sheets, ta yaya za ku fara jadawali?", options: ["Data > Sort range", "Insert > Chart", "View > Freeze", "Format > Bold"], answer: 1, why: "Insert > Chart yana buɗe editan jadawali." },
      { objective: "O6", q: "Me bai kamata ya TAƁA shiga takardar da kuka raba ba?", options: ["Jimlolin sayarwa", "Sunayen kaya", "Kalmomin sirri da lambobin Social Security", "Kwanan wata"], answer: 2, why: "Ana iya yin amfani da lambobin sirri ba daidai ba idan aka raba fayil ɗin." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      4,
      6,
      8,
      11,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Teburin bayanai mai tsabta",
        objective: "O1",
        notYet: "Layuka ƙasa da 8, babu kanun bayanai, ko bayanai iri-iri a haɗe a ginshiƙi ɗaya.",
        meets: "Kanun bayanai a layi na 1, layuka aƙalla 8, irin bayani ɗaya a kowane ginshiƙi.",
        exceeds: "Fayil ɗin da tab ɗin takardar suna da sunaye masu sarari."
      },
      {
        name: "Mai sauƙin karantawa",
        objective: "O2",
        notYet: "Kanun bayanai ba su da tsari, kuɗi ba a tsarin currency yake ba, ko rubutu ya yanke.",
        meets: "Kanun bayanai masu kauri (bold), kuɗi a tsarin currency, ginshiƙai sun dace da bayanansu.",
        exceeds: "Layin kanun bayanai kuma yana da launi a baya, kuma takardar tana da tsabta."
      },
      {
        name: "Jimla da matsakaici",
        objective: "O3",
        notYet: "An rubuta jimloli da hannu, ko wani formula yana nuna kuskure.",
        meets: "Jimla ta SUM da matsakaici na AVERAGE da ke ba da sakamako daidai.",
        exceeds: "Jimlolin layuka suna amfani da formula da aka kwafe zuwa ƙasa da fill handle."
      },
      {
        name: "Sunayen IF",
        objective: "O4",
        notYet: "Babu ginshiƙin IF, ko sunayen ba daidai ba ne.",
        meets: "Ginshiƙin IF yana sa wa kowane layi suna daidai, kamar \"Goal met\" ko \"Below goal\".",
        exceeds: "Zai iya bayyana gwajin kuma ya canja lambar buri don sunayen su sabunta."
      },
      {
        name: "An jera, an tace kuma an daskare",
        objective: "O5",
        notYet: "Layuka sun cakuɗe, ko babu jerawa, filter ko daskarewa.",
        meets: "An jera bayanai daga mafi girma zuwa mafi ƙanƙanta, akwai filter a layin kanun bayanai, kuma layin sama a daskare.",
        exceeds: "Zai iya amfani da filter don nuna suna ɗaya kaɗai sannan ya share shi."
      },
      {
        name: "Jadawali da rabawa lafiya",
        objective: "O6",
        notYet: "Babu jadawali, ko an raba da izinin gyara kai tsaye ko tare da bayanan sirri.",
        meets: "Column chart mai take, kuma an raba fayil ɗin da mutum ɗaya a matsayin mai kallo (viewer), babu bayanan sirri.",
        exceeds: "Zai iya faɗin dalilin da yasa ya zaɓi wannan matakin izini."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi amfani da spreadsheet a wurin aiki ko a kasuwancinsu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka rubuta ƙwarewar spreadsheet a takardar bayanin aikinsu (CV) ko suka sami aikin da ke amfani da ita",
      "Masu koyo da suka fara wani kwas na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai Excel, Excel a intanet ko Google Sheets (kyauta da asusun Google)",
      "Bayanan misali: sayarwar mako ɗaya, awannin aiki ko awannin masu sa kai mai layuka aƙalla 8",
      "Adireshin imel na mutum ɗaya da za a raba masa takardar da aka kammala",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nuna kowane mataki sau ɗaya a babban allo a Excel da Google Sheets duka, sannan ku bar masu koyo su maimaita shi.",
      "Ku ba masu koyo bayanan misali da aka shirya, don kada kowa ya yi amfani da bayanan abokan ciniki na gaske ko na sirri.",
      "Ku lura da masu koyo da ke jera ginshiƙi ɗaya shi kaɗai; ku sa su yi Undo su jera dukkan teburin.",
      "Ku tunatar da masu koyo su raba a matsayin Viewer sai dai idan mutumin yana buƙatar gyarawa, kuma kada su taɓa sa kalmomin sirri ko lambobin shaida a takardar da aka raba.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
