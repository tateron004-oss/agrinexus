"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-community-advocacy.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-community-advocacy-ha",
  lang: "ha",
  translationOf: "ai-community-advocacy",
  category: "Non Profits",
  name: "AI don Fafutukar Al'umma",
  skills: "Bayyana matsala da buƙata a sarari, Bincike da tabbatar da majiyoyi, Nemo mai yanke shawara, Rubuta wasiƙa ko ra'ayin jama'a da AI, Yin takardar bayani mai shafi ɗaya, Ba da shaida a gaban jama'a na minti biyu",
  outcome: "shirya ƙaramin kamfen na fafutuka kan wata matsalar unguwa da taimakon AI: bayyana buƙata a sarari, goya mata baya da bayanan da aka tabbatar da labaran gaske, kai ta ga mai yanke shawara da ya dace ta wasiƙa ko ra'ayin jama'a da takardar bayani mai shafi ɗaya, da yin magana a shaidar jama'a ta minti biyu, yayin bin dokokin ƙungiyoyin sa-kai.",
  about: [
    "Fafutuka (advocacy) na nufin yin magana don a canja wani abu: mararrabar hanya mai haɗari, hanyar bas da aka yanke, filin wasa da ke buƙatar fitilu, ko wata doka da ke hana mutane samun aiki ko gida. Al'ummomin da ke magana a sarari da bayanai na gaskiya ana fi saurarensu.",
    "Wannan kwas ɗin na ma'aikata da masu aikin sa-kai na ƙungiyoyin sa-kai ne, da ƙungiyoyin addini da na unguwa, da 'yan al'umma da ke son kawo canji. Mataimakan AI kamar ChatGPT, Microsoft Copilot da Google Gemini za su iya taimakawa wajen bincike, rubuta wasiƙu, yin takardun bayani da gwada jawabai, yayin da muryar al'ummarku da labaranta na gaske suka kasance a tsakiya.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Fafutuka a nan game da batutuwa ce, ba game da 'yan takara ba; ƙungiyoyin sa-kai suna da dokoki na musamman, waɗanda Darasi na 6 ya yi bayani."
  ],
  finalTask: "Ku haɗa kayan fafutuka don wata matsala ta gaske a unguwarku: matsala a jimla ɗaya da buƙata mai sarari, bayanai uku masu majiyoyin hukuma, gajerun labarai biyu na al'umma da aka raba da izini, sunan mai yanke shawara da yadda ake kai masa, wasiƙa ko ra'ayin jama'a ƙasa da kalmomi 300, takardar bayani mai shafi ɗaya, da shaidar minti biyu da kuka gwada da babbar murya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ma'aikata da masu aikin sa-kai na ƙungiyoyin sa-kai, ƙungiyoyin addini da na unguwa, da 'yan al'umma da ke son canja wata matsala ta unguwa, kamar mararrabar hanya mai haɗari, hanyar bas da aka yanke, ko doka da ke hana mutane samun aiki ko gida.",
    startingPoint: "Suna damuwa da wata matsala ta unguwa kuma suna iya magana game da ita da maƙwabta. Da yawa ba su taɓa rubuta ra'ayin jama'a ba, ko nemo mai yanke shawara da ya dace, ko tabbatar da bayanai a majiyoyin hukuma, ko yin magana a taron jama'a.",
    gap: "Al'ummomin da ke magana da buƙata mai sarari, bayanan da aka tabbatar da labaran gaske ana fi saurarensu. Masu koyo suna buƙatar shirya ƙaramin kamfen da taimakon AI, yayin da muryar al'ummarsu ke a tsakiya, kuma suna bin dokokin ƙungiyoyin sa-kai, don ƙoƙarinsu ya kawo canji na gaske.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya ko kwamfuta mai mataimakin AI kyauta da kayan ƙira ko rubutu kyauta",
      "Ana raba labarai ne kawai da izini, kuma bayanan sirri ba sa shiga cikin prompt na AI",
      "Dokokin ƙungiyoyin sa-kai: fafutuka kan batutuwa kawai, babu goyon bayan 'yan takara; masu koyo suna duba jagorar IRS",
      "Lokaci: darussa na kusan minti biyar, da lokacin bincike da gwadawa"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da kayan AI ba za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wata damuwa ta al'umma", action: "rubuta bayanin matsala a jimla ɗaya da buƙata mai sarari da ke faɗin me, daga wa, da zuwa yaushe", standard: "wadda aƙalla mutane biyu da abin ya shafa suka taimaka wajen tsara ta" },
    { id: "O2", condition: "Game da matsalarku", action: "nemo bayanai daga majiyoyin hukuma ko amintattu da tattara labaran al'umma", standard: "da bayanai uku, kowanne da majiyarsa, hanyar haɗi (link) da kwanan wata, da labaran da aka raba da izini kawai" },
    { id: "O3", condition: "Ta amfani da shafukan intanet na hukuma", action: "gane mai yanke shawara, taro na gaba ko ranar ƙarshe ta ra'ayin jama'a, abokan tafiyarku da masu yiwuwar adawa", standard: "tare da tabbatar da mai yanke shawara a majiyar hukuma" },
    { id: "O4", condition: "Ta amfani da bayananku da aka tabbatar da wani labari", action: "rubuta wasiƙa ko ra'ayin jama'a mai ladabi da ke gabatar da buƙatarku", standard: "ƙasa da kalmomi 300, da ko ku wane ne, bayanai, labari da buƙatar" },
    { id: "O5", condition: "Ta amfani da AI don rubutu da kayan ƙira kyauta", action: "yin takardar bayani mai shafi ɗaya da buƙatar a cikin akwati mai sarari", standard: "ta yadda mai karatu zai iya faɗa muku buƙatar bayan minti ɗaya" },
    { id: "O6", condition: "A taron jama'a", action: "ba da shaida ta minti biyu da shirya ayyukan magoya baya cikin dokokin fafutukar ƙungiyoyin sa-kai", standard: "cikin minti biyu ko ƙasa da haka, kuma babu goyon bayan 'yan takara" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gina hujjarku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Bayyana matsalar da buƙatarku",
          minutes: 5,
          goal: "Mayar da damuwar al'umma zuwa bayanin matsala mai sarari da buƙata takamaimai.",
          text: [
            "Manyan damuwoyi kamar \"unguwarmu ba ta da tsaro\" suna da wuyar a yi musu aiki ga jami'ai. Ku taƙaita ta zuwa matsala takamaimai: \"Yara suna ketare hanyoyi shida a titin Main Street a 5th Avenue don zuwa makaranta, kuma babu fitilar ketare hanya.\"",
            "Sannan ku yi buƙata takamaimai: me daidai kuke so, daga wa, zuwa yaushe. \"Muna roƙon Sashen Sufuri na Birni ya saka fitilar masu tafiya a ƙafa a Main da 5th kafin shekarar makaranta mai zuwa.\" Buƙata mai sarari tana ba masu yanke shawara abin da za su ce \"eh\" a kai.",
            "Ku nemi AI ya ƙara mata kaifi: \"Ka taimake ni in mayar da wannan damuwar zuwa matsala a jimla ɗaya da buƙata takamaimai mai yiwuwa: [damuwarku].\" Sannan ku duba ta da mutanen da abin ya fi shafa. Fafutuka tana fi aiki idan al'umma ce ta tsara buƙatar."
          ],
          steps: ["Ku rubuta damuwar da kalmominku.", "Ku taƙaita ta zuwa matsala ɗaya takamaimai, wuri, da mutanen da abin ya shafa.", "Ku rubuta buƙata: me, wa ke yanke shawara, zuwa yaushe.", "Ku nemi AI ya inganta kalmomin.", "Ku duba ta da mutanen da abin ya fi shafa."],
          words: [["Fafutuka (advocacy)", "yin magana don canja wata manufa, al'ada ko shawara."], ["Buƙata (ask)", "takamaiman abin da kuke son mai yanke shawara ya yi."], ["Bayanin matsala", "jimla ɗaya ko biyu da ke bayyana matsalar a sarari."]],
          slides: [
            { title: "Daga damuwa zuwa matsala", bullets: ["\"Babu tsaro\" ya yi faɗi da yawa", "Ku faɗi wurin, mutanen, da matsalar"] },
            { title: "Buƙata takamaimai", bullets: ["Me daidai", "Daga wa", "Zuwa yaushe"] },
            { title: "Al'umma tukuna", bullets: ["AI yana inganta kalmomi", "Mutanen da abin ya shafa suna tsara buƙatar"] }
          ],
          tryIt: "Ku zaɓi wata damuwa ta gaske a unguwarku. Ku rubuta matsala a jimla ɗaya da buƙata takamaimai, ku yi amfani da AI don inganta su, sannan ku nuna su ga mutane biyu da abin ya shafa.",
          youCanNow: "mayar da damuwa zuwa bayanin matsala mai sarari da buƙata takamaimai.",
          quickCheck: [
            { objective: "O1", q: "Waɗanne abubuwa uku buƙata mai ƙarfi take ƙunshe da su?", options: ["Sunanku, shekarunku da adireshinku", "Me, daga wa, da zuwa yaushe", "Taken magana, tambari da launi", "Ƙorafi, barazana da ranar ƙarshe"], answer: 1, why: "Buƙata mai ƙarfi tana faɗin aikin, mai yanke shawara da ranar ƙarshe." },
            { objective: "O1", q: "Damuwar ƙungiyarku ita ce \"unguwarmu ba ta da tsaro.\" Me za ku fara yi?", options: ["Ku taƙaita ta zuwa matsala ɗaya takamaimai da jami'ai za su iya yi wa aiki", "Ku aika ta ga kowane jami'i a jihar", "Ku saka ta a intanet ba tare da canji ba", "Ku jira abubuwa su ƙara lalacewa"], answer: 0, why: "Matsaloli takamaimai suna kawo ayyuka takamaimai da jami'ai za su iya ɗauka." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bincike da tabbatar da majiyoyi",
          minutes: 6,
          goal: "Nemo bayanan da ke goyon bayan hujjarku, ku tabbatar da kowanne a majiyar hukuma ko amintacciya.",
          text: [
            "Bayanai suna sa jami'ai su saurara. Majiyoyi masu amfani: shafukan birni da gunduma (county), rubutattun bayanan taro da kasafin kuɗi, hukumomin jiha, U.S. Census Bureau (hukumar ƙidayar jama'a ta Amurka, data.census.gov) don bayanan yawan jama'a da samun kuɗi, bayanan 'yan sanda ko na sufuri, labaran gida, da binciken jami'o'i ko ƙungiyoyin sa-kai.",
            "AI zai iya ba da shawarar inda za ku duba da abin da za ku nema: \"Waɗanne irin bayanan jama'a ne za su nuna matsalolin tsaron masu tafiya a ƙafa a wata mararraba a wani birni na Amurka, kuma a ina zan same su?\" Amma AI yana iya ƙirƙirar ƙididdiga da bincike. Kada ku taɓa amfani da lamba daga AI sai kun same ta da kanku a asalin majiyar.",
            "Ku tattara bayanai uku masu ƙarfi, kowanne da sunan majiyarsa, hanyar haɗi da kwanan wata. Ku ƙara labaran gaske: na iyaye, ɗalibi, ko mai tsare hanyar ketare. Koyaushe ku nemi izini kafin ku raba labarin wani, kuma ku cire bayanan sirri da ba sa son a bayyana."
          ],
          steps: ["Ku tambayi AI inda za a sami bayanai game da matsalarku.", "Ku je waɗannan majiyoyin da kanku.", "Ku rubuta bayanai uku da majiya, hanyar haɗi da kwanan wata.", "Kada ku taɓa amfani da lambar da ba za ku iya samu a asalin majiyar ba.", "Ku tattara labarai biyu da izini."],
          words: [["Majiya (source)", "inda wani bayani ya fito."], ["Asalin majiya (primary source)", "wurin farko da aka wallafa bayani ko ƙididdiga."], ["Rubutattun bayanan taro (meeting minutes)", "rubutaccen tarihin hukuma na abin da ya faru a taron jama'a."]],
          slides: [
            { title: "Inda bayanai suke", bullets: ["Shafukan birni, gunduma da jiha", "Bayanan ƙidaya da rahotannin hukumomi", "Labaran gida da bincike"] },
            { title: "AI yana nuna hanya, ku kuke tabbatarwa", bullets: ["AI yana iya ƙirƙirar ƙididdiga", "Ku nemo kowace lamba a asalin majiya", "Ku rubuta majiya, hanyar haɗi da kwanan wata"] },
            { title: "Bayanai da labarai", bullets: ["Abin da ya faru da mutane na gaske", "Koyaushe ku nemi izini", "Ku cire bayanan sirri"] }
          ],
          sources: [{ name: "U.S. Census Bureau (hukumar ƙidayar jama'a ta Amurka): data.census.gov", url: "https://data.census.gov/" }],
          tryIt: "Ku nemo bayanai uku game da matsalarku daga majiyoyin hukuma ko amintattu, kowanne da hanyar haɗi da kwanan wata. Ku tambayi mutane biyu ko za ku iya raba labarinsu.",
          youCanNow: "bincika bayanan da aka tabbatar da tattara labaran al'umma da izini.",
          quickCheck: [
            { objective: "O2", q: "Wace ce amintacciyar majiya don bayani game da birninku?", options: ["Wani rubutu a kafar sada zumunta", "Amsar AI ba tare da hanyar haɗi ba", "Shafin hukuma ko rahoton birnin da kansa", "Jita-jita daga maƙwabci"], answer: 2, why: "Majiyoyin hukuma su ne wuraren da za a iya tabbatar da bayanai a kuma ambace su." },
            { objective: "O2", q: "Wani maƙwabci ya ba ku labari mai ratsa zuciya game da yadda ya ji rauni a wurin ketare hanya. Me za ku yi kafin ku yi amfani da shi?", options: ["Ku yi amfani da shi da cikakken sunansa da adireshinsa", "Ku canja bayanan ku yi amfani da shi duk da haka", "Ku fara saka shi a intanet", "Ku nemi izininsa da yadda yake son a ambace shi"], answer: 3, why: "Ana raba labarai ne kawai da izinin mai labarin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nemo mai yanke shawara da lokacin da ya dace",
          minutes: 5,
          goal: "Gane wanda zai iya cewa \"eh\" ga buƙatarku da lokacin da zai yanke shawara.",
          text: [
            "Fafutuka tana gazawa idan ta je ga mutumin da bai dace ba. Ku gano wanda ke da ikon cewa \"eh\": ɗan majalisar birni, kwamitin gunduma, kwamitin makarantu, ɗan majalisar jiha, shugaban wani sashe ko manajan wani kamfani.",
            "Ku tambayi AI: \"A wani birni na Amurka da aka saba, wa ke yanke shawara ko za a saka sabuwar fitilar ketare hanya, kuma wane tsari ake bi?\" Sannan ku tabbatar a shafin birninku, ko ku kira ofishin. Ku koyi jadawalin: lokacin da ake yin kasafin kuɗi, lokacin da majalisa ko kwamiti ke taro, da lokacin da aka buɗe ra'ayin jama'a.",
            "Ku zana taswirar abokan tafiyarku (maƙwabta, makarantu, majami'u, 'yan kasuwa, sauran ƙungiyoyin sa-kai) da duk wanda zai iya adawa, da dalilinsa. Abokan tafiya suna ƙara muku ƙarfi; fahimtar masu adawa tana taimaka muku amsa damuwoyinsu."
          ],
          steps: ["Ku tambayi AI wa yawanci ke yanke shawara kan matsalarku.", "Ku tabbatar a shafin ƙaramar hukumarku ko ta waya.", "Ku nemo ranakun taro, lokacin kasafin kuɗi da lokutan ra'ayin jama'a.", "Ku jera abokan tafiya da masu yiwuwar adawa.", "Ku zaɓi lokacin da za ku ɗauki mataki."],
          words: [["Mai yanke shawara", "mutum ko ƙungiyar da ke da ikon cewa \"eh\" ga buƙatarku."], ["Ra'ayin jama'a (public comment)", "damar da jama'a ke da ita su yi magana ko rubuta wa jami'ai kafin a yanke shawara."], ["Abokin tafiya (ally)", "mutum ko ƙungiyar da ke goyon bayan manufarku."]],
          slides: [
            { title: "Wa zai iya cewa \"eh\"?", bullets: ["Majalisa, kwamiti, ɗan majalisa, shugaban sashe", "Ku tabbatar a shafukan hukuma"] },
            { title: "Ku san jadawalin", bullets: ["Ranakun taro", "Lokacin kasafin kuɗi", "Lokutan ra'ayin jama'a"] },
            { title: "Ku zana taswirar fage", bullets: ["Abokan tafiya: maƙwabta, makarantu, majami'u, 'yan kasuwa", "Masu adawa da dalilansu"] }
          ],
          tryIt: "Ku nemo mai yanke shawara kan matsalarku da taronsa na gaba ko ranar ƙarshe ta ra'ayin jama'a a shafin hukuma. Ku jera abokan tafiya uku da damuwa ɗaya da masu adawa za su iya kawowa.",
          youCanNow: "nemo mai yanke shawara da ya dace, lokacin da ya dace da abokan tafiya don buƙatar fafutuka.",
          quickCheck: [
            { objective: "O3", q: "Wane ne mai yanke shawara a fafutuka?", options: ["Mutum ko ƙungiyar da za ta iya cewa \"eh\" ga buƙatarku", "Duk wanda ya yarda da ku", "Jaridar", "Wanda ya fi ƙara wajen ƙorafi"], answer: 0, why: "Mai yanke shawara yana da ikon biyan buƙatarku." },
            { objective: "O3", q: "Kuna son sabuwar fitila a filin wasa, amma ba ku san wa ke yanke shawara ba. Me za ku yi?", options: ["Ku rubuta wa Shugaban Ƙasa", "Ku duba shafin birni ko ku kira birnin don ku gano", "Ku yi tsammani ku aika ga kwamitin makarantu", "Ku jira har wani ya faɗa muku"], answer: 1, why: "Ku tabbatar da mai yanke shawara a majiyar hukuma kafin ku tuntuɓe shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gina hujjarku",
        questions: [
          { objective: "O1", q: "Wace ce buƙatar fafutuka mafi sarari?", options: ["\"Ku gyara abubuwa\"", "\"Ku gyara tsaro\"", "\"Muna roƙon Sashen Sufuri ya saka fitilar masu tafiya a ƙafa a Main da 5th kafin shekarar makaranta mai zuwa\"", "\"Ku yi wani abu yanzu\""], answer: 2, why: "Tana faɗin me, wa, da zuwa yaushe." },
          { objective: "O2", q: "AI ya ba ku ƙididdiga game da hadurra a mararrabarku. Me za ku yi?", options: ["Ku nemo ta a asalin majiya kafin ku yi amfani da ita", "Ku yi amfani da ita nan take", "Ku ƙara mata yawa", "Ku rubuta ta da baƙi masu kauri"], answer: 0, why: "AI yana iya ƙirƙirar ƙididdiga." },
          { objective: "O2", q: "Kafin ku raba labarin maƙwabci a kamfen ɗinku, dole ne ku:", options: ["Saka adireshinsa", "Canja shi don ya yi kama da ya fi muni", "Babu komai", "Sami izininsa"], answer: 3, why: "Labarai na mutanen da abin ya faru da su ne." },
          { objective: "O3", q: "Me yasa ake nemo mai yanke shawara?", options: ["Don a saka adireshin gidansa", "Fafutuka tana gazawa idan ta je ga mutumin da bai dace ba", "Ba shi da muhimmanci", "Don a guje masa"], answer: 1, why: "Mutumin da ya dace ne kaɗai zai iya cewa \"eh\"." },
          { objective: "O3", q: "Mene ne lokacin ra'ayin jama'a?", options: ["Shirin talabijin", "Damar da jama'a ke da ita su yi magana ko rubutu kafin a yanke shawara", "Ranar ƙarshe ta biyan haraji", "Taro na sirri"], answer: 1, why: "Lokaci ne na hukuma don jama'a su ba da ra'ayinsu." }
        ]
      }
    },
    {
      name: "Babi na 2: Yin magana yadda ya kamata",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta wasiƙa ko ra'ayin jama'a da AI",
          minutes: 5,
          goal: "Rubuta gajerar wasiƙa ko ra'ayin jama'a mai ladabi da ke gabatar da buƙatarku.",
          text: [
            "Wasiƙa ko ra'ayi mai ƙarfi gajere ne (ƙasa da kalmomi 300) kuma yana da sassa huɗu: ko ku wane ne da alaƙarku da matsalar, matsalar da bayani ɗaya ko biyu, gajeren labari na gaske, da buƙatarku takamaimai da godiya.",
            "Ku tambayi AI: \"Ka rubuta ra'ayin jama'a mai ladabi ƙasa da kalmomi 300 zuwa ga Majalisar Birni. Ni iyaye ne a makarantar Lincoln Elementary. Matsala: [matsala]. Bayanai: [bayananku da aka tabbatar]. Labari: [wanda aka raba da izini]. Buƙata: [buƙatarku].\" Sannan ku gyara shi don ya yi kama da ku.",
            "Wasiƙun kai tsaye sun fi wasiƙun bai ɗaya: jami'ai suna lura idan ɗaruruwan saƙonnin AI iri ɗaya suka iso. Ku ƙarfafa magoya baya su ƙara jimlarsu ta kansu. Ku kasance da ladabi ko da kuna fushi; ana watsi da zagi."
          ],
          steps: ["Ko ku wane ne da alaƙarku.", "Matsalar da bayani ɗaya ko biyu da aka tabbatar.", "Gajeren labari na gaske, da aka raba da izini.", "Buƙatarku takamaimai da godiya.", "Ku gyara shi don ya yi kama da ku; ku kiyaye shi ƙasa da kalmomi 300."],
          words: [["Wasiƙa bai ɗaya (form letter)", "wasiƙa ɗaya da mutane da yawa ke aikawa ba tare da canji ko da ɗan canji kaɗan ba."], ["Ɗan mazaɓa (constituent)", "mutumin da ke zaune a yankin wani jami'i, wanda jami'in ke wakilta."]],
          slides: [
            { title: "Sassa huɗu", bullets: ["Ko ku wane ne", "Matsala da bayanai", "Labari na gaske", "Buƙatarku da godiya"] },
            { title: "AI yana rubuta daftari, ku kuke sa naku", bullets: ["Ku ba shi bayanan da aka tabbatar kawai", "Ƙasa da kalmomi 300", "Ku sa ya yi kama da ku"] },
            { title: "Don a saurare ku", bullets: ["Na kai tsaye ya fi wasiƙun iri ɗaya", "Magoya baya suna ƙara kalmominsu", "Ku kasance da ladabi"] }
          ],
          tryIt: "Ku rubuta wasiƙa ko ra'ayin jama'a ƙasa da kalmomi 300 kan matsalarku da taimakon AI, ta amfani da bayananku da aka tabbatar da labarin da aka raba da izini. Ku karanta shi da babbar murya ku gyara shi.",
          youCanNow: "rubuta gajerar wasiƙa ko ra'ayin jama'a mai ladabi da ke gabatar da buƙata mai sarari.",
          quickCheck: [
            { objective: "O4", q: "Wane ne ɗan mazaɓa?", options: ["Ma'aikacin ƙungiyar sa-kai", "Mai neman tasiri da ake biya (lobbyist)", "Ɗan jarida", "Mutumin da ke zaune a yankin wani jami'i"], answer: 3, why: "Jami'ai suna kula da mutanen da suke wakilta." },
            { objective: "O4", q: "AI ya rubuta wasiƙa mai fushi da ke ɗora laifi a kan majalisa. Me za ku yi?", options: ["Ku aika ta don nuna yadda kuka ɓaci", "Ku sake rubuta ta da ladabi, da bayanai, labari da buƙatar", "Ku ƙara kalmomin fushi", "Ku aika wasiƙar iri ɗaya da sunaye 100 na bogi"], answer: 1, why: "Wasiƙun kai tsaye masu ladabi da buƙata mai sarari sun fi yiwuwa a saurare su." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin takardar bayani mai shafi ɗaya",
          minutes: 5,
          goal: "Yi takardar bayani mai shafi ɗaya da jami'ai da maƙwabta masu aiki za su iya karantawa cikin minti ɗaya.",
          text: [
            "Takardar bayani (fact sheet) takarda ce mai shafi ɗaya da kuke bari wa jami'ai, kuke rabawa a intanet, kuke kuma ba magoya baya. Mutane masu aiki suna karanta saman, sannan su leƙa sauran.",
            "Tsari: babban kanun labari mai kauri da ke faɗin matsalar, muhimman bayanai uku da majiyoyinsu, gajeriyar magana ko labari, buƙatar a cikin akwati, da ko ku wane ne tare da bayanan tuntuɓa. Ku yi amfani da kalmomi masu sauƙi, manyan haruffa, da jadawali ko hoto ɗaya mai sauƙi idan zai taimaka.",
            "Ku nemi AI ya rubuta daftarin rubutun daga bayananku, sannan ku tsara shi a Canva ko Google Docs. Ku sake duba kowace lamba da majiya. Ku fassara shi idan al'ummarku na magana da wasu harsuna; AI zai iya rubuta daftarin fassara, amma ku sa wanda ya ƙware a harshen ya duba shi."
          ],
          steps: ["Ku rubuta kanun labari da ke faɗin matsalar.", "Ku ƙara bayanai uku da majiyoyinsu.", "Ku ƙara gajeriyar magana ko labari ɗaya.", "Ku sa buƙatar a cikin akwati.", "Ku tsara shi a shafi ɗaya; ku duba lambobi; ku sa masu ƙwarewa a harshe su duba fassarori."],
          words: [["Takardar bayani (fact sheet)", "takarda mai shafi ɗaya da ke taƙaita matsala, bayanai da buƙata."], ["Kalmomi masu sauƙi (plain language)", "rubutu mai sarari da sauƙi da yawancin mutane za su fahimta."]],
          slides: [
            { title: "Shafi ɗaya, minti ɗaya", bullets: ["Mutane masu aiki suna karanta saman", "Sannan su leƙa sauran"] },
            { title: "Tsari", bullets: ["Kanun labari da ke faɗin matsalar", "Bayanai uku da majiyoyinsu", "Magana, buƙatar a cikin akwati, bayanan tuntuɓa"] },
            { title: "Ku goge shi", bullets: ["Canva ko Google Docs", "Ku sake duba kowace lamba", "Masu ƙwarewa a harshe su duba fassarori"] }
          ],
          tryIt: "Ku yi takardar bayani mai shafi ɗaya kan matsalarku, AI ya rubuta daftarin rubutun, ku kuma yi amfani da Canva ko Google Docs don tsarawa. Ku nemi wani ya karanta ta cikin minti ɗaya ya faɗa muku buƙatar.",
          youCanNow: "yin takardar bayani mai shafi ɗaya mai sarari don wata matsalar fafutuka.",
          quickCheck: [
            { objective: "O5", q: "Don su wane ne takardar bayani galibi?", options: ["Jami'ai da maƙwabta masu aiki da ke buƙatar muhimman abubuwa da sauri", "Mutanen da suka rubuta ta kawai", "Lauyoyi a kotu", "Ɗalibai masu rubuta maƙala"], answer: 0, why: "Takardar bayani tana ba masu karatu masu aiki matsalar, bayanai da buƙatar cikin minti ɗaya." },
            { objective: "O5", q: "Daftarin takardar bayaninku shafuka biyu ne cike da ƙananan haruffa. Me za ku yi?", options: ["Ku ƙara ƙanƙanta haruffan", "Ku ƙara shafi na uku don ƙarin bayanai", "Ku taƙaita ta zuwa shafi ɗaya da buƙatar a cikin akwati mai sarari", "Ku cire buƙatar don samun wuri"], answer: 2, why: "Shafi ɗaya da buƙata mai sarari ya fi sauƙin karantawa da aiki da shi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Shaida a gaban jama'a, magoya baya da dokoki",
          minutes: 6,
          goal: "Ba da shaida ta minti biyu, tara magoya baya, da bin dokokin fafutukar ƙungiyoyin sa-kai.",
          text: [
            "Majalisu da kwamitoci da yawa suna ba kowane mai magana minti biyu ko uku. Ku shirya sigar wasiƙarku ta minti biyu: kusan kalmomi 250 da ake faɗa. Ku nemi AI ya taƙaita ta, sannan ku gwada da babbar murya da agogon lokaci. Ku fara da sunanku da alaƙarku, ku ƙare da buƙatarku, kuma ku zo da kwafin takardar bayaninku.",
            "Ku zo da magoya baya. Ɗaki cike da maƙwabta sanye da launi ɗaya yana aika saƙo. Ku yi amfani da AI don rubuta daftarin gajeren saƙon rajista da tunatarwa, kuma ku taimaki magoya baya su rubuta ra'ayoyinsu na kansu.",
            "Ku san dokokin ƙungiyoyin sa-kai. IRS (hukumar haraji ta Amurka) ta ce ƙungiyar 501(c)(3) za ta iya yin ɗan neman tasiri kan dokoki (lobbying), amma ba a matsayin babban ɓangare na ayyukanta ba, kuma ilmantar da jama'a game da manufofi ba lobbying ba ne. An haramta mata kwata-kwata goyon baya ko adawa da 'yan takarar muƙami, ko da yake ilmantar da masu zaɓe da yi musu rajista ba tare da nuna bangaranci ba an yarda. Ku tambayi lauyan ƙungiyoyin sa-kai ko ƙungiyar ƙungiyoyin sa-kai ta jiharku game da cikakkun bayanai."
          ],
          steps: ["Ku taƙaita wasiƙarku zuwa kusan kalmomi 250 da ake faɗa.", "Ku gwada da babbar murya da agogon lokaci na minti biyu.", "Ku zo da kwafin takardar bayani da magoya baya.", "Ku yi amfani da AI don rubuta daftarin saƙon rajista da tunatarwa.", "Ku duba dokokin ƙungiyoyin sa-kai kan lobbying da 'yan takara."],
          words: [["Shaida (testimony)", "yin magana ga jami'ai a taron jama'a game da wata matsala."], ["Lobbying (neman tasiri kan dokoki)", "ƙoƙarin yin tasiri kan dokoki, kamar tuntuɓar 'yan majalisa game da wani ƙudiri."], ["Ba bangaranci (nonpartisan)", "rashin goyon bayan kowace jam'iyya ko ɗan takara."]],
          slides: [
            { title: "Shaida ta minti biyu", bullets: ["Kusan kalmomi 250 da ake faɗa", "Suna da alaƙa tukuna, buƙata a ƙarshe", "Ku gwada da agogon lokaci"] },
            { title: "Ku zo da magoya baya", bullets: ["Ku zo tare", "AI yana rubuta daftarin rajista da tunatarwa", "Kowane mutum yana ƙara kalmominsa"] },
            { title: "Dokokin 501(c)(3) (IRS)", bullets: ["An yarda da ɗan lobbying, ba babban ɓangare ba", "Babu goyon baya ko adawa da 'yan takara", "An yarda da ilmantar da masu zaɓe ba tare da bangaranci ba"] }
          ],
          sources: [{ name: "IRS: Lobbying (neman tasiri kan dokoki)", url: "https://www.irs.gov/charities-non-profits/lobbying" }, { name: "IRS: Hana ƙungiyoyin 501(c)(3) shiga yaƙin neman zaɓe", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/the-restriction-of-political-campaign-intervention-by-section-501c3-tax-exempt-organizations" }],
          tryIt: "Aikin ƙarshe: ku taƙaita wasiƙarku zuwa shaida ta minti biyu ku gwada ta da babbar murya da agogon lokaci. Ku haɗa ta da matsalarku da buƙatarku, bayanai, labarai, mai yanke shawara, wasiƙa da takardar bayani don kammala kayan fafutukarku.",
          youCanNow: "shirya da aiwatar da ƙaramin kamfen na fafutuka bisa bayanai na gaskiya da taimakon AI, cikin dokoki.",
          quickCheck: [
            { objective: "O6", q: "Mene ne ma'anar ba bangaranci (nonpartisan)?", options: ["Goyon bayan jam'iyya ɗaya", "Gwamnati ce ke biya", "Rashin goyon bayan kowane ɗan takara ko jam'iyya", "Adawa da dukkan jami'ai"], answer: 2, why: "Ba bangaranci na nufin rashin goyon bayan 'yan takara ko jam'iyyu." },
            { objective: "O6", q: "Shaidarku tana ɗaukar minti uku da rabi, amma kuna da minti biyu. Me za ku yi?", options: ["Ku yi magana da sauri", "Ku ci gaba bayan lokaci ya ƙare", "Ku tsallake buƙatar", "Ku taƙaita ta zuwa sunanku, alaƙarku, bayani ɗaya, labari ɗaya da buƙatar, ku gwada da agogon lokaci"], answer: 3, why: "Taƙaitawa zuwa muhimman sassa da gwadawa suna sa ku kasance cikin lokacin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yin magana yadda ya kamata",
        questions: [
          { objective: "O4", q: "Me yasa wasiƙun kai tsaye suka fi ɗaruruwan wasiƙu iri ɗaya?", options: ["Wasiƙu iri ɗaya haramun ne", "Wasiƙun kai tsaye sun fi tsawo", "Ba su fi ba", "Jami'ai suna lura da kuma daraja muryar kowane mutum"], answer: 3, why: "Labarai da kalmomin kai tsaye suna da nauyi fiye da haka." },
          { objective: "O5", q: "Takardar bayani ya kamata ta zama:", options: ["Shafi ɗaya da za a iya karantawa cikin kusan minti ɗaya", "Shafuka ashirin", "Hotuna kawai", "Rubutacciya da kalmomin ƙwararru masu wuya"], answer: 0, why: "Masu karatu masu aiki suna buƙatar gajere kuma mai sarari." },
          { objective: "O5", q: "AI ya fassara takardar bayaninku zuwa Spanish. Me ya kamata ku yi a gaba?", options: ["Ku buga ta ba tare da dubawa ba", "Ku goge sigar Turanci", "Ku sa wanda ya ƙware a harshen ya duba ta", "Ku bar fassarar"], answer: 2, why: "Fassarorin AI suna iya samun kurakurai." },
          { objective: "O6", q: "Kalmomi nawa ne ake faɗa cikin minti biyu, a kusan?", options: ["Kusan 2,500", "Kusan 20", "Kusan 1,000", "Kusan 250"], answer: 3, why: "Yawancin mutane suna faɗin kusan kalmomi 120-130 a minti ɗaya." },
          { objective: "O6", q: "A cewar IRS, ƙungiyar 501(c)(3) za ta iya goyon bayan ɗan takarar muƙami a fili?", options: ["Eh, a kowane lokaci", "A kafar sada zumunta kawai", "A'a, an haramta kwata-kwata", "Ƙananan gudummawa kawai"], answer: 2, why: "IRS ta ce shiga yaƙin neman zaɓe an haramta shi kwata-kwata." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Fafutukar Al'umma",
    questions: [
      { objective: "O1", q: "Fafutuka na nufin:", options: ["Yin zaɓe kawai", "Yin magana don canja wata manufa, al'ada ko shawara", "Tsayawa takara", "Kai ƙarar wani kotu"], answer: 1, why: "Fafutuka game da kawo canji ne ta hanyar yin magana." },
      { objective: "O1", q: "Me yasa ake taƙaita babbar damuwa zuwa matsala takamaimai?", options: ["Jami'ai za su iya yi wa matsaloli takamaimai aiki", "Tana sa ta yi kama da ƙarama", "AI yana buƙatar haka", "Don a guji ɗaukar mataki"], answer: 0, why: "Matsaloli takamaimai suna kawo mafita takamaimai." },
      { objective: "O1", q: "Buƙata mai ƙarfi ta ƙunshi:", options: ["Ji a zuciya kawai", "Barazana", "Me, daga wa, da zuwa yaushe", "Babu cikakken bayani"], answer: 2, why: "Buƙatu masu sarari sun fi sauƙin a ce musu \"eh\"." },
      { objective: "O1", q: "Wa ya kamata ya tsara buƙatar?", options: ["Mutanen da abin ya fi shafa", "AI kaɗai", "Baƙi kaɗai", "Babu kowa"], answer: 0, why: "Fafutukar da al'umma ke jagoranta ta fi ƙarfi." },
      { objective: "O2", q: "A ina za ku sami bayanan yawan jama'a da samun kuɗi na Amurka?", options: ["Wani hoton barkwanci", "Hasashen AI", "Sharhi a kafar sada zumunta", "data.census.gov"], answer: 3, why: "Hukumar ƙidaya (Census Bureau) tana wallafa bayanan hukuma." },
      { objective: "O2", q: "Asalin majiya ita ce:", options: ["Kowane bulogi", "Wurin farko da aka wallafa bayani", "Taƙaitawar AI", "Jita-jita"], answer: 1, why: "Asalin majiyoyi su ne mafiya aminci." },
      { objective: "O2", q: "Ga kowane bayani da kuka tattara, ku rubuta:", options: ["Lambar kawai", "Majiya, hanyar haɗi da kwanan wata", "Babu komai", "Hasashenku"], answer: 1, why: "Majiyoyi suna bar wasu su tabbatar da bayananku." },
      { objective: "O3", q: "Rubutattun bayanan taro (meeting minutes) su ne:", options: ["Tsawon lokacin da taro ya ɗauka", "Wani nau'in agogo", "Littafin sirri", "Rubutaccen tarihin hukuma na taron jama'a"], answer: 3, why: "Suna rubuta abin da aka yanke." },
      { objective: "O3", q: "AI ya ce kwamitin makarantu ne ke yanke shawara kan wuraren ketare hanya. Ya kamata ku:", options: ["Tabbatar a shafin birninku ko ta hanyar kira", "Amince da shi", "Rubuta wa kowane ofishi lokaci ɗaya ba tare da dubawa ba", "Haƙura"], answer: 0, why: "Tsarin kowace ƙaramar hukuma ya bambanta; ku tabbatar a hukumance." },
      { objective: "O3", q: "Me yasa za ku koyi jadawalin kasafin kuɗi?", options: ["Kasafin kuɗi sirri ne", "Ba shi da amfani", "Ana yanke shawarwari da yawa lokacin da ake yin kasafin kuɗi", "Don a tsallake taro"], answer: 2, why: "Daidaita lokacin buƙatarku da shawarwarin kasafin kuɗi yana da muhimmanci." },
      { objective: "O3", q: "Abokin tafiya shi ne:", options: ["Abokin hamayya", "Mai yanke shawara kawai", "Shafin intanet", "Mutum ko ƙungiyar da ke goyon bayan manufarku"], answer: 3, why: "Abokan tafiya suna ƙara ƙarfi da murya." },
      { objective: "O3", q: "Me yasa za ku fahimci masu yiwuwar adawa?", options: ["Don ku zage su", "Don ku yi watsi da su", "Don ku iya amsa damuwoyinsu", "Don ku kwaikwaye su"], answer: 2, why: "Amsa damuwoyi yana gina goyon baya." },
      { objective: "O4", q: "Ɗan mazaɓa shi ne:", options: ["Wani nau'in doka", "Mutumin da ke zaune a yankin wani jami'i", "Lauya", "Ginin birni"], answer: 1, why: "Jami'ai suna kula da 'yan mazaɓarsu." },
      { objective: "O4", q: "Ra'ayin jama'a mai ƙarfi shi ne:", options: ["Ƙasa da kalmomi 300, da ko ku wane ne, bayanai, labari da buƙata", "Mai tsawo iyakar yiwuwa", "Mai fushi da zagi", "Ƙididdiga kawai"], answer: 0, why: "Gajere, na kai tsaye kuma takamaimai shi ya fi aiki." },
      { objective: "O4", q: "Kuna fushi da jami'ai. A wasiƙarku ya kamata ku:", options: ["Yi amfani da zagi", "Yi barazana", "Kasance da ladabi", "Rubuta komai da manyan haruffa"], answer: 2, why: "Saƙonni masu ladabi ana karanta su kuma ana yin la'akari da su." },
      { objective: "O5", q: "A ina buƙatar ya kamata ta bayyana a takardar bayani?", options: ["A cikin akwati mai sarari", "A ɓoye a ƙasa da ƙananan haruffa", "Babu inda", "A baya kawai"], answer: 0, why: "Buƙatar ya kamata ta fito fili." },
      { objective: "O6", q: "A shaidar jama'a, ya kamata ku fara da:", options: ["Dogon tarihi", "Buƙatarku kawai", "Barkwanci", "Sunanku da alaƙarku da matsalar"], answer: 3, why: "Yana gaya wa jami'ai dalilin da yasa kuke da muhimmanci a matsalar." },
      { objective: "O6", q: "A cewar IRS, ilmantar da jama'a game da manufofi:", options: ["Haramun ne koyaushe", "Ba a ɗauke shi lobbying ba", "Ana ƙirga shi yaƙin neman zaɓe", "An hana ƙungiyoyin sa-kai"], answer: 1, why: "IRS ta ce ayyukan ilmantarwa ba lobbying ba ne." },
      { objective: "O6", q: "Ƙungiyar 501(c)(3) za ta iya yin ɗan lobbying, amma:", options: ["Ba tare da iyaka ba", "Ba a matsayin babban ɓangare na ayyukanta ba", "Don 'yan takara kawai", "Ba ko kaɗan ba"], answer: 1, why: "Lobbying mai yawa yana jefa matsayin rashin biyan haraji cikin haɗari." },
      { objective: "O6", q: "Kamfen ɗin yi wa masu zaɓe rajista ba tare da bangaranci ba da ƙungiyar 501(c)(3) ke yi, a cewar IRS:", options: ["An haramta koyaushe", "An yarda ne don jam'iyya ɗaya kawai", "Wajibi ne", "Gabaɗaya an yarda idan da gaske babu bangaranci"], answer: 3, why: "Ba a haramta yi wa masu zaɓe rajista ba tare da bangaranci ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      2,
      5,
      6,
      8,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Matsala da buƙata",
        objective: "O1",
        notYet: "Matsalar ta yi faɗi da yawa, ko buƙatar ba ta da me, daga wa ko zuwa yaushe.",
        meets: "Matsala a jimla ɗaya da buƙata takamaimai mai me, daga wa da zuwa yaushe.",
        exceeds: "Tana nuna yadda mutanen da abin ya shafa suka taimaka wajen tsara buƙatar."
      },
      {
        name: "Bayanai da labarai",
        objective: "O2",
        notYet: "Wani bayani ba shi da majiya, ko an yi amfani da labari ba tare da izini ba.",
        meets: "Bayanai uku da majiya, hanyar haɗi da kwanan wata, da labarai biyu da aka raba da izini.",
        exceeds: "Bayanan sun fito daga asalin majiyoyi, kuma labaran suna amfani da sunayen da mutanen suka zaɓa."
      },
      {
        name: "Mai yanke shawara",
        objective: "O3",
        notYet: "Mai yanke shawara ba daidai ba ne ko ba a tabbatar da shi ba.",
        meets: "An tabbatar da mai yanke shawara da ranar ƙarshe ta gaba a shafin hukuma.",
        exceeds: "Ya kuma jera abokan tafiya da amsa ga babbar damuwar masu adawa."
      },
      {
        name: "Wasiƙa ko ra'ayi da takardar bayani",
        objective: "O4",
        notYet: "Ya wuce kalmomi 300, babu ladabi, ko babu buƙata mai sarari.",
        meets: "Ƙasa da kalmomi 300, da ladabi, da ko ku wane ne, bayanai, labari da buƙatar; takardar bayani ta isa a shafi ɗaya.",
        exceeds: "Mai karatu zai iya faɗin buƙatar bayan minti ɗaya da takardar bayani."
      },
      {
        name: "Shaida da dokoki",
        objective: "O6",
        notYet: "Ya wuce minti biyu, ba a gwada ba, ko ya ambaci goyon bayan ɗan takara.",
        meets: "An gwada da babbar murya cikin minti biyu ko ƙasa, an fara da suna da alaƙa, kuma game da batun kawai.",
        exceeds: "Ya haɗa da shirin magoya baya su halarta ko su ba da ra'ayi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka aika wasiƙa ko ra'ayin jama'a, ko suka yi magana a taron jama'a, cikin kwanaki 60 (binciken biyo baya)",
      "Kamfen ɗin da mai yanke shawara ya amsa, ya saka batun a ajanda, ko ya biya buƙatar",
      "Yawan 'yan al'umma da suka shiga kamfen bayan kwas ɗin",
      "Masu koyo da suka fara wani kwas na ƙungiyoyin sa-kai na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini",
      "Canva ko Google Docs don takardar bayani",
      "Agogon lokaci don gwada shaida",
      "Kusan minti 60 don darussa da gwaje-gwaje, da lokacin bincike da gwadawa"
    ],
    facilitatorNotes: [
      "Ku bar ƙungiyoyi su yi aiki kan matsala ɗaya ta unguwa da suke rabawa, don masu koyo su raba bincike su kuma gwada shaida tare.",
      "Ku tunatar da ma'aikatan ƙungiyoyin sa-kai cewa ƙungiyoyin 501(c)(3) ba za su goyi bayan 'yan takara ba; ku nuna musu jagorar IRS don yanayinsu.",
      "Ana raba labarai ne kawai da izini; ku kiyaye bayanan sirri daga cikin prompt na AI.",
      "Ku sa masu koyo su gwada shaida da babbar murya da agogon lokaci a gaban ƙungiyar.",
      "Ku ba da maki ga kayan fafutuka da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
