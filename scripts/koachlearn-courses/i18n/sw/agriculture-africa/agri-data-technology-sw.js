"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-data-technology.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KMD = { name: "Idara ya Hali ya Hewa ya Kenya (KMD): utabiri na taarifa za hali ya hewa kwa wakulima", url: "https://meteo.go.ke" };
const NIMET = { name: "Shirika la Hali ya Hewa la Nigeria (NiMet)", url: "https://nimet.gov.ng" };
const COPERNICUS = { name: "Copernicus Browser (picha za bure za setilaiti za Sentinel)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_EO = { name: "FAO GIEWS Earth Observation (ramani za mvua, NDVI na shinikizo kwa kilimo)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const KALRO = { name: "Shirika la Utafiti wa Kilimo na Mifugo la Kenya (KALRO)", url: "https://www.kalro.org" };
const KOBO = { name: "KoboToolbox (fomu za bure za kukusanya data)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Ofisi ya Kamishna wa Ulinzi wa Data (ODPC), Kenya", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Tume ya Ulinzi wa Data ya Nigeria (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-data-technology-sw",
  lang: "sw",
  translationOf: "agri-data-technology",
  category: "Agriculture (Africa)",
  name: "Data na Teknolojia katika Kilimo",
  skills: "Kutafuta na kukagua taarifa za kilimo zinazoaminika, Kukusanya data ya shamba kwenye simu, Kutumia taarifa za bure za hali ya hewa na setilaiti, Kuchambua kumbukumbu za shamba kwenye spreadsheet, Kutumia wasaidizi wa AI kwa uwajibikaji kwa maswali ya kilimo, Kulinda data ya shamba lako",
  outcome: "kutumia simu janja ya bei nafuu kukusanya data ya shamba lako, kuongeza taarifa za bure za hali ya hewa na setilaiti, kuichambua kwenye spreadsheet ili kufanya uamuzi bora wa shamba, kukagua ushauri wa apps na zana za AI dhidi ya vyanzo vinavyoaminika, na kuweka data yako salama.",
  about: [
    "Kozi hii ni ya wakulima, vijana wajasiriamali wa kilimo, viongozi wa vikundi vya wakulima na vyama vya ushirika, na maafisa ugani nchini Kenya, Nigeria na kote Afrika walio na simu janja (hata ya bei nafuu) na wanaotaka kuitumia kulima vizuri zaidi. Huhitaji kompyuta, lakini kompyuta inasaidia kwa Sura 2.",
    "Sura 1 inahusu kukusanya taarifa: kupata ushauri wa kilimo unaoaminika na kuepuka ulaghai, kurekodi data ya shamba lako kwenye simu, na kutumia utabiri wa bure wa hali ya hewa na ramani za setilaiti. Sura 2 inahusu kutumia taarifa: kuchambua kumbukumbu zako kwenye spreadsheet ya bure, kuuliza wasaidizi wa AI maswali mazuri ya kilimo na kukagua majibu yao, na kulinda data yako.",
    "Zana za bure zinatumika katika kozi yote: Google Sheets au toleo la bure la wavuti la Microsoft Excel, zana za bure za fomu, idara za kitaifa za hali ya hewa, ramani za FAO za uchunguzi wa dunia kutoka angani, na wasaidizi wa AI wa bure. Kila somo linaishia na kazi. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tengeneza jedwali la data ya shamba kwa msimu mmoja (vipande vya shamba, mazao, aina za mbegu, tarehe za kupanda, pembejeo na gharama, mvua au maelezo ya utabiri, maelezo ya ukaguzi wa shamba, mavuno na mauzo), lijaze kwa data halisi au ya mfano kwa angalau vipande vitatu, tengeneza chati moja inayolinganisha vipande, andika uamuzi mmoja utakaofanya msimu ujao kwa sababu yake, na andika vyanzo ulivyokagua na jinsi unavyoweka data salama.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima, vijana wajasiriamali wa kilimo, viongozi wa vikundi vya wakulima na vyama vya ushirika, na maafisa ugani nchini Kenya, Nigeria na kote Afrika walio na simu janja, hata ya bei nafuu, na wanaotaka kuitumia kulima vizuri zaidi.",
    startingPoint: "Wengi hutumia simu kupiga simu, pesa kwa simu, WhatsApp na Facebook, na hupata ushauri wa kilimo kutoka kwa majirani, maduka ya pembejeo (agrovet), redio na vikundi vya mitandao ya kijamii. Wachache huweka kumbukumbu za shamba kwa maandishi, hutumia spreadsheet, husoma utabiri rasmi au ramani za setilaiti, au hukagua ushauri wa AI na apps dhidi ya chanzo kinachoaminika.",
    gap: "Bila kumbukumbu zao wenyewe, wakulima hawawezi kuona ni kipande gani, aina gani ya mbegu au mbinu gani inalipa kweli, na ushauri usio sahihi, pembejeo bandia na ulaghai wa data huwagharimu pesa. Kurekodi, kuchambua na kukagua taarifa kwenye simu waliyo nayo tayari kunawasaidia kufanya maamuzi bora, kuonyesha historia yao kwa wakopeshaji na wanunuzi, na kuweka data yao salama.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la teknolojia linaelezwa",
      "Vifaa: simu janja ya bei nafuu yenye bando kidogo; kompyuta inasaidia tu katika Sura 2",
      "Mtandao: mtandao hafifu vijijini, kwa hiyo fomu zinazofanya kazi bila intaneti na majedwali yaliyohifadhiwa ni muhimu",
      "Muda: masomo mafupi yanayoingia kati ya kazi za shamba",
      "Faragha na ulaghai: usiandike kamwe PIN, namba za kitambulisho au taarifa za benki kwenye apps, majedwali au zana za AI"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa simu janja wanapaswa kwanza kuweza kufungua app na kuandika ujumbe."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa ushauri wa kilimo kutoka kwenye ujumbe, app au kwa jirani", action: "kukagua nani anasema, kama unafaa eneo lako na zao lako, kama ni wa karibuni na kama wanauza kitu", standard: "kabla ya kutumia pesa, na kutambua dalili zozote za ulaghai" },
    { id: "O2", condition: "Ukitumia spreadsheet ya bure au app ya fomu kwenye simu yako", action: "kutengeneza jedwali la data ya shamba lenye mstari mmoja kwa kila tukio na jina lisilobadilika kwa kila kipande", standard: "lenye angalau safu za tarehe, kipande, shughuli, kiasi na gharama" },
    { id: "O3", condition: "Kwa eneo lako na msimu wako", action: "kupata utabiri rasmi wa hali ya hewa na ramani ya bure ya setilaiti au ya mvua na kurekodi kile zinachoonyesha kwenye jedwali la shamba lako", standard: "pamoja na chanzo na tarehe" },
    { id: "O4", condition: "Ukipewa kumbukumbu za angalau vipande vitatu", action: "kukokotoa mavuno na faida kwa ekari kwa fomula, kutengeneza chati ya pau na kuandika uamuzi mmoja wa msimu ujao", standard: "kwa hesabu sahihi na uamuzi unaotokana na namba" },
    { id: "O5", condition: "Ukitumia msaidizi wa AI wa bure", action: "kuandika swali la kilimo lililo wazi na kukagua jibu kwa afisa ugani, agrovet au lebo ya bidhaa", standard: "kabla ya kuchukua hatua, bila kuandika taarifa yoyote binafsi" },
    { id: "O6", condition: "App, mnunuzi au kikundi kinapoomba data ya shamba", action: "kuamua nini cha kushiriki, na nani na kwa nini, na kulinda kilichobaki", standard: "kwa kufuata haki zako za ulinzi wa data katika nchi yako na kuomba ridhaa ya wengine" }
  ],
  chapters: [
    {
      name: "Sura 1: Kukusanya taarifa nzuri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupata taarifa za kilimo zinazoaminika",
          minutes: 5,
          goal: "Pima kama ushauri wa kilimo unaaminika kabla ya kuufuata.",
          text: [
            "Wakulima hupata ushauri kutoka sehemu nyingi: maafisa ugani, taasisi za utafiti kama KALRO nchini Kenya, programu za maendeleo ya kilimo za majimbo ya Nigeria, FAO na vituo vya CGIAR, maduka ya pembejeo (agrovet), vipindi vya redio na TV, huduma za SMS na apps, vikundi vya WhatsApp na Facebook, na majirani. Baadhi ya ushauri ni mzuri sana; mwingine si sahihi, umepitwa na wakati, au unajaribu kukuuzia kitu.",
            "Uliza maswali manne kuhusu ushauri wowote: Nani anasema, na je, anajua (taasisi ya utafiti au afisa aliyefunzwa, au akaunti isiyojulikana)? Je, ni kwa eneo langu na zao langu? Je, ni wa karibuni? Je, wanauza kitu? Kagua ushauri muhimu kwa chanzo cha pili kinachoaminika kabla ya kutumia pesa.",
            "Jihadhari na ulaghai: mbegu na mbolea bandia, bidhaa za \"miujiza\", kazi au ruzuku bandia zinazoomba ada, na ujumbe unaojifanya kuwa wa programu ya serikali unaoomba PIN yako ya pesa kwa simu. Nunua pembejeo kwa wauzaji waliosajiliwa na ripoti bidhaa bandia kwa mamlaka husika."
          ],
          steps: ["Uliza: nani anasema, na je, anajua?", "Uliza: je, ni kwa eneo langu na zao langu, na ni wa karibuni?", "Uliza: je, wanauza kitu?", "Kagua kwa chanzo cha pili kinachoaminika kabla ya kutumia pesa.", "Nunua pembejeo kwa wauzaji waliosajiliwa; usitoe PIN yako kamwe."],
          words: [["Afisa ugani", "mshauri aliyefunzwa kutoka serikalini au kwenye mradi anayewasaidia wakulima."], ["Taasisi ya utafiti", "shirika linalojaribu na kutengeneza mbinu za kilimo na aina za mbegu, kama KALRO."], ["Ulaghai", "hila ya kuchukua pesa zako au taarifa zako."]],
          slides: [
            { title: "Vyanzo vingi", bullets: ["Ugani, taasisi za utafiti, FAO, CGIAR", "Agrovet, redio, SMS na apps", "Vikundi vya mitandao ya kijamii na majirani"] },
            { title: "Maswali manne", bullets: ["Nani anasema, na je, anajua?", "Kwa eneo langu na zao langu?", "Ni wa karibuni?", "Je, wanauza kitu?"] },
            { title: "Jihadhari na ulaghai", bullets: ["Mbegu na mbolea bandia, bidhaa za miujiza", "Ruzuku au kazi zinazoomba ada", "Usitoe PIN yako kamwe"] }
          ],
          sources: [KALRO],
          tryIt: "Tafuta ushauri mmoja wa kilimo uliouona karibuni (kwenye redio, WhatsApp au kutoka kwa muuzaji). Jibu maswali manne kuuhusu, na uukague kwa chanzo cha pili kinachoaminika. Andika kama utaufuata.",
          youCanNow: "kupima kama ushauri wa kilimo unaaminika na kutambua ulaghai wa kawaida.",
          quickCheck: [
            { objective: "O1", q: "Swali gani linakusaidia kupima ushauri wa kilimo?", options: ["Watu wangapi walipenda chapisho?", "Je, ni kwa eneo langu na zao langu, na ni wa karibuni?", "Je, ujumbe ni mrefu?", "Je, una picha nyingi?"], answer: 1, why: "Kukagua nani anasema, kama unafaa eneo lako na zao lako, na kama ni wa karibuni kunaonyesha kama ushauri unaaminika." },
            { objective: "O1", q: "Ujumbe unasema umeshinda ruzuku ya kilimo na unaomba PIN yako ya pesa kwa simu. Unafanya nini?", options: ["Kutuma PIN haraka", "Kulipa ada ndogo kwanza", "Kuuchukulia kama ulaghai na kutotoa PIN", "Kuutuma kwa kikundi chako ili mtume maombi"], answer: 2, why: "Programu za kweli haziombi kamwe PIN yako wala ada ili kutoa ruzuku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kurekodi data ya shamba lako kwenye simu",
          minutes: 6,
          goal: "Weka mfumo rahisi wa simu wa kurekodi vipande, pembejeo, ukaguzi na mavuno.",
          text: [
            "Kumbukumbu zako mwenyewe ndizo data yenye thamani zaidi uliyo nayo, kwa sababu zinahusu shamba lako. App ya spreadsheet (Google Sheets au Microsoft Excel, zote ni bure kwenye simu) inafaa vizuri: mstari mmoja kwa kila tukio, na safu kama tarehe, kipande, zao, shughuli, kiasi, gharama na maelezo.",
            "Kipe kila kipande jina fupi au namba na usilibadilishe. Rekodi alama ya GPS au mpaka wa takriban kwa kila kipande (apps nyingi za ramani zinakuruhusu kuweka pini na kushiriki viwianishi vyake). Piga picha za matatizo na uzipe jina lenye tarehe na kipande. Kwa vikundi na vyama vya ushirika, zana za bure za fomu kama KoboToolbox zinawawezesha wanachama wengi kujaza fomu ileile kwenye simu zao, hata bila intaneti, na kuituma wanapopata mtandao.",
            "Fanya iwe rahisi kiasi cha kufanya kila mara. Safu tano zinazojazwa kila wiki zina thamani kuliko safu ishirini zilizojazwa mara moja. Hifadhi nakala ya jedwali (spreadsheet nyingi za mtandaoni huhifadhi zenyewe) na usiweke namba binafsi kama PIN au namba za kitambulisho ndani yake."
          ],
          steps: ["Fungua app ya bure ya spreadsheet na utengeneze safu: tarehe, kipande, zao, shughuli, kiasi, gharama, maelezo.", "Kipe kila kipande jina na urekodi pini ya GPS yake.", "Ongeza mstari kila unapopanda, kuweka pembejeo, kukagua shamba, kuvuna au kuuza.", "Zipe picha jina lenye tarehe na kipande.", "Kwa vikundi: fikiria fomu ya pamoja inayofanya kazi bila intaneti."],
          words: [["Spreadsheet", "jedwali la mistari na safu kwenye simu au kompyuta la kurekodi na kukokotoa."], ["Pini ya GPS", "alama iliyohifadhiwa kwenye ramani pamoja na viwianishi vyake."], ["Bila intaneti (offline)", "kufanya kazi bila muunganisho wa intaneti."]],
          slides: [
            { title: "Data yako ni dhahabu", bullets: ["Inahusu shamba LAKO", "Mstari mmoja kwa kila tukio"] },
            { title: "Safu za kuanzia", bullets: ["Tarehe, kipande, zao, shughuli", "Kiasi, gharama, maelezo"] },
            { title: "Tabia nzuri", bullets: ["Majina yaleyale ya vipande kila mara", "Pini ya GPS kwa kila kipande, picha zenye tarehe", "Rahisi kiasi cha kufanya kila wiki"] },
            { title: "Vikundi na usalama", bullets: ["Fomu za pamoja zisizohitaji intaneti, mfano KoboToolbox", "Hifadhi nakala; hakuna PIN wala namba za kitambulisho"] }
          ],
          sources: [KOBO],
          tryIt: "Tengeneza jedwali la shamba lako kwenye simu yako lenye safu hizo saba. Ongeza vipande vyako na angalau mistari mitano ya shughuli halisi za msimu huu. Weka pini ya GPS kwa kipande kimoja na uhifadhi viwianishi vyake kwenye maelezo.",
          youCanNow: "kurekodi shughuli, pembejeo na mavuno ya shamba lako kwenye simu kwa njia moja isiyobadilika.",
          quickCheck: [
            { objective: "O2", q: "Katika jedwali la data ya shamba, mstari mmoja ni nini?", options: ["Tukio moja, kama kupanda au kuuza", "Msimu mzima mmoja", "Zao moja kwa miaka yote", "Namba moja ya simu"], answer: 0, why: "Mstari mmoja kwa kila tukio, wenye tarehe, kipande, shughuli, kiasi na gharama, hufanya kumbukumbu ziwe rahisi kujumlisha." },
            { objective: "O2", q: "Kikundi chako cha wakulima kinataka wanachama watume ripoti za ukaguzi wa shamba kutoka maeneo yenye mtandao hafifu. Mnaweza kutumia nini?", options: ["Simu ndefu kila wiki", "Maelezo ya karatasi yanayobaki nyumbani", "App tofauti kwa kila mwanachama", "Zana ya fomu ya pamoja kama KoboToolbox inayofanya kazi bila intaneti"], answer: 3, why: "Zana za fomu kama KoboToolbox zinawawezesha wanachama wengi kujaza fomu ileile bila intaneti na kuituma wanapopata mtandao." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutumia taarifa za bure za hali ya hewa na setilaiti",
          minutes: 6,
          goal: "Tumia utabiri rasmi na ramani za bure za setilaiti kusaidia maamuzi ya shamba.",
          text: [
            "Idara za kitaifa za hali ya hewa hutoa utabiri kwa ajili ya wakulima: nchini Kenya, Idara ya Hali ya Hewa ya Kenya (KMD) hutoa utabiri wa msimu na taarifa za hali ya hewa kwa kilimo; nchini Nigeria, NiMet hutoa utabiri wa tabianchi wa msimu na utabiri mwingine. Andika kile wanachosema kwa eneo lako kwenye jedwali la shamba lako, pamoja na tarehe, ili baadaye uone jinsi ulivyolingana na msimu wako.",
            "Taarifa za bure za setilaiti pia zinasaidia. Kurasa za FAO za uchunguzi wa dunia kutoka angani zinaonyesha ramani za mvua, uoto (NDVI) na shinikizo kwa kilimo kwa nchi na kanda, zinazosaidia kuona kama kipindi cha ukame ni cha eneo lako tu au kimeenea. Copernicus Browser inaonyesha picha za bure za setilaiti ya Sentinel-2 kila baada ya siku chache kwa takriban mita 10 kwa kila pikseli, zinatosha kuona umbo la mashamba na kama shamba kubwa ni la kijani zaidi au la kahawia zaidi kuliko mwezi uliopita.",
            "Ikiwezekana, pima mvua mwenyewe kwa kipimo rahisi cha mvua na uirekodi kila siku. Kumbukumbu yako ya mvua, kando ya tarehe zako za kupanda na mavuno yako, inaonyesha haraka kinachofanya kazi kwenye shamba lako."
          ],
          steps: ["Tafuta utabiri wa idara yako ya kitaifa ya hali ya hewa kwa eneo lako.", "Uandike kwenye jedwali la shamba lako pamoja na tarehe.", "Angalia ramani za FAO za uchunguzi wa dunia kwa nchi yako.", "Tafuta shamba lako kwenye Copernicus Browser na ulinganishe tarehe mbili.", "Rekodi mvua ya kila siku kwa kipimo rahisi ikiwezekana."],
          words: [["Taarifa ya hali ya hewa kwa kilimo", "ripoti ya hali ya hewa iliyoandikwa kwa ajili ya wakulima (kwa Kiingereza: agrometeorological bulletin)."], ["Picha ya setilaiti", "picha ya dunia iliyopigwa kutoka angani."], ["Kipimo cha mvua", "chombo rahisi chenye vipimo kinachopima mvua."]],
          slides: [
            { title: "Utabiri rasmi", bullets: ["Kenya: utabiri wa msimu wa KMD, taarifa za hali ya hewa kwa kilimo", "Nigeria: NiMet", "Uandike kwenye jedwali lako pamoja na tarehe"] },
            { title: "Taarifa za bure za setilaiti", bullets: ["FAO: ramani za mvua, NDVI, shinikizo", "Copernicus Browser: Sentinel-2, takriban m 10", "Je, ukame ni wa eneo lako tu au umeenea?"] },
            { title: "Kipimo chako cha mvua", bullets: ["Rekodi mvua kila siku", "Linganisha na tarehe za kupanda na mavuno"] }
          ],
          sources: [KMD, NIMET, FAO_EO, COPERNICUS],
          tryIt: "Tafuta utabiri wa msimu huu kwa eneo lako na uuandike kwenye jedwali la shamba lako. Kisha tafuta eneo lako kwenye ramani za FAO za uchunguzi wa dunia au kwenye Copernicus Browser na uandike jambo moja unaloliona.",
          youCanNow: "kutumia utabiri rasmi na ramani za bure za setilaiti pamoja na kumbukumbu za shamba lako.",
          quickCheck: [
            { objective: "O3", q: "Utabiri rasmi wa msimu kwa wakulima nchini Nigeria unatoka wapi?", options: ["Ukurasa wa Facebook", "Kampuni ya mbegu", "Jirani", "NiMet"], answer: 3, why: "NiMet hutoa utabiri wa tabianchi wa msimu na utabiri mwingine wa Nigeria." },
            { objective: "O3", q: "Unataka kujua kama kipindi cha ukame kipo kwenye shamba lako tu au kote kanda. Unakagua nini?", options: ["Kiwango cha betri ya simu yako", "Ramani za FAO za uchunguzi wa dunia za mvua na uoto", "Tangazo la redio", "Pakiti ya mbegu ya mwaka jana"], answer: 1, why: "Ramani za FAO za uchunguzi wa dunia zinaonyesha mvua, uoto na shinikizo kwa nchi na kanda." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kukusanya taarifa nzuri",
        questions: [
          { objective: "O1", q: "Ujumbe wa WhatsApp unatangaza \"mbolea ya miujiza\" kutoka kwa muuzaji asiyejulikana. Unapaswa:", options: ["Kuinunua haraka kabla haijaisha", "Kukagua kwa chanzo kinachoaminika kama afisa ugani kabla ya kutumia pesa", "Kuutuma kwa kila mtu", "Kutuma PIN yako ili kuagiza"], answer: 1, why: "Wauzaji wasiojulikana na madai ya miujiza ni dalili za hatari." },
          { objective: "O2", q: "Safu ipi inafaa katika jedwali la data ya shamba?", options: ["PIN yako ya pesa kwa simu", "Namba yako ya kitambulisho", "Tarehe, kipande na shughuli", "Nywila yako"], answer: 2, why: "Kumbukumbu zinahitaji matukio, si namba binafsi." },
          { objective: "O2", q: "Kwa nini kipe kila kipande jina lisilobadilika?", options: ["Ili kumbukumbu ziweze kulinganishwa kwa muda", "Linapendeza", "Simu inalihitaji", "Halina manufaa"], answer: 0, why: "Majina yasiyobadilika yanakuwezesha kujumlisha na kulinganisha vipande." },
          { objective: "O3", q: "Picha za bure za Sentinel-2 kwenye Copernicus Browser zinaonyesha nini?", options: ["Wadudu mmoja mmoja", "Salio lako la benki", "Hali ya hewa ya mwaka ujao", "Mashamba kwa takriban mita 10 kwa pikseli kila baada ya siku chache"], answer: 3, why: "Ni za bure, za mara kwa mara na hazionyeshi vitu vidogo sana." },
          { objective: "O3", q: "Kwa nini urekodi utabiri kwenye jedwali la shamba lako pamoja na tarehe?", options: ["Ili baadaye uulinganishe na kilichotokea kweli shambani kwako", "Idara ya hali ya hewa inalihitaji", "Ili kushiriki na wanunuzi", "Ili kujaza nafasi"], answer: 0, why: "Kwa misimu kadhaa, unajifunza jinsi utabiri unavyolingana na shamba lako." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia taarifa kufanya maamuzi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuchambua kumbukumbu zako kwenye spreadsheet",
          minutes: 6,
          goal: "Kokotoa mavuno na faida kwa kila kipande na utengeneze chati ya kuvilinganisha.",
          text: [
            "Kumbukumbu zinakuwa na manufaa unapozijumlisha. Kwenye spreadsheet yako, tengeneza jedwali la muhtasari: mstari mmoja kwa kila kipande wenye ukubwa wake, gharama yote, mavuno, mapato, kisha mavuno kwa ekari na faida kwa ekari. Spreadsheet hufanya hesabu kwa fomula rahisi, kwa mfano =SUM kujumlisha gharama na kugawanya ili kupata mavuno kwa ekari.",
            "Kisha tengeneza chati. Chagua majina ya vipande na mavuno kwa ekari (au faida kwa ekari) na uweke chati ya pau. Chati inafanya tofauti ziwe rahisi kuona na kueleza kwa familia, kikundi au mkopeshaji.",
            "Tafuta sababu: je, kipande bora kilipata samadi, tarehe ya kupanda ya mapema, aina tofauti ya mbegu, au mvua zaidi? Je, kipande dhaifu kilikuwa na wadudu au maji yaliyotuama? Andika uamuzi mmoja wa msimu ujao, na uendelee kurekodi ili uweze kuujaribu."
          ],
          steps: ["Tengeneza jedwali la muhtasari: kipande, ukubwa, gharama yote, mavuno, mapato.", "Tumia =SUM kwa jumla na ugawanye kupata mavuno na faida kwa ekari.", "Chagua majina ya vipande na mavuno kwa ekari; weka chati ya pau.", "Tafuta sababu katika maelezo yako.", "Andika uamuzi mmoja wa msimu ujao."],
          words: [["Fomula", "maelekezo ndani ya kisanduku cha spreadsheet yanayokokotoa, kama =SUM(B2:B10)."], ["Mavuno kwa ekari", "kiasi kipande kilichotoa kugawanywa kwa ukubwa wake."], ["Chati ya pau", "chati yenye pau zinazolinganisha viasi."]],
          slides: [
            { title: "Jumlisha", bullets: ["Mstari mmoja kwa kila kipande", "Ukubwa, gharama, mavuno, mapato", "Mavuno na faida kwa ekari"] },
            { title: "Acha jedwali lifanye hesabu", bullets: ["=SUM kwa jumla", "Gawanya kupata namba kwa ekari"] },
            { title: "Tengeneza chati", bullets: ["Majina ya vipande + mavuno kwa ekari", "Weka chati ya pau", "Rahisi kuwaeleza wengine"] },
            { title: "Tafuta sababu, amua", bullets: ["Samadi, wakati, aina ya mbegu, mvua, wadudu?", "Uamuzi mmoja wa msimu ujao"] }
          ],
          tryIt: "Tengeneza jedwali la muhtasari kwa angalau vipande vitatu (namba halisi au za mfano), kokotoa mavuno na faida kwa ekari kwa fomula, weka chati ya pau, na uandike uamuzi mmoja wa msimu ujao.",
          youCanNow: "kuchambua kumbukumbu za shamba kwenye spreadsheet na kutumia chati kulinganisha vipande na kuamua.",
          quickCheck: [
            { objective: "O4", q: "Faida kwa ekari ni nini?", options: ["Mavuno yote tu", "Gharama yote tu", "Mapato kutoa gharama, kugawanywa kwa ukubwa wa kipande kwa ekari", "Bei ya gunia moja"], answer: 2, why: "Faida kwa ekari inachukua mapato kutoa gharama na kugawanya kwa ukubwa wa kipande ili vipande vya ukubwa tofauti viweze kulinganishwa." },
            { objective: "O4", q: "Jedwali lako la muhtasari linaonyesha kipande kimoja kilitoa mahindi mengi zaidi. Unafanya nini baadaye?", options: ["Kutafuta sababu kama samadi au tarehe ya kupanda na kuandika uamuzi mmoja", "Kufuta vipande vingine kwenye jedwali", "Kuacha kuweka kumbukumbu", "Kupanda kipande hicho tu milele bila kukagua"], answer: 0, why: "Kupata sababu na kuandika uamuzi mmoja unaoweza kuujaribu msimu ujao kunageuza kumbukumbu kuwa kilimo bora." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutumia wasaidizi wa AI kwa maswali ya kilimo, kwa uwajibikaji",
          minutes: 5,
          goal: "Uliza msaidizi wa AI swali la kilimo lililo wazi na ukague jibu kabla ya kuchukua hatua.",
          text: [
            "Wasaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot na Google Gemini wanaweza kueleza mawazo ya kilimo, kusaidia kupanga msimu, kuandika rasimu ya ujumbe kwa mnunuzi, kutafsiri, au kusaidia kutengeneza fomula ya spreadsheet. Uliza kwa uwazi: sema zao lako, eneo, msimu, ukubwa wa shamba na unachotaka, kwa mfano: \"Ninalima ekari 2 za mahindi Bungoma. Mvua fupi zinaanza Oktoba. Nitengenezee orodha rahisi ya kila wiki kuanzia kutayarisha shamba hadi kuvuna. Tumia sentensi fupi.\"",
            "AI inaweza kukosea, kuwa imepitwa na wakati, au kutoa ushauri wa nchi nyingine. Inaweza kutaja bidhaa ambazo hazijasajiliwa katika nchi yako au viwango visivyo sahihi. Usifuate kamwe ushauri wa AI kuhusu viuatilifu, viwango vya mbolea, dawa za mifugo au pesa bila kukagua kwa afisa ugani wako, agrovet, lebo ya bidhaa au chanzo kingine kinachoaminika.",
            "Usiandike taarifa binafsi kwenye msaidizi wa AI: namba yako ya kitambulisho, PIN ya pesa kwa simu, taarifa za benki au data binafsi ya watu wengine. Tumia AI kama mwanzo wa kusaidia, si neno la mwisho."
          ],
          steps: ["Sema zao lako, eneo, msimu, ukubwa wa shamba na unachotaka.", "Omba sentensi fupi au orodha ya kukagua.", "Uliza maswali ya kufuatilia ili kuboresha jibu.", "Kagua ushauri wa viuatilifu, mbolea, dawa na pesa kwa chanzo kinachoaminika.", "Usiandike kamwe PIN, namba za kitambulisho au taarifa za benki."],
          words: [["Msaidizi wa AI", "programu ya kompyuta unayozungumza nayo kwa maneno ya kawaida inayoandika majibu."], ["Prompt", "unachoandika au kusema kwa msaidizi wa AI."]],
          slides: [
            { title: "AI inaweza kusaidia nini", bullets: ["Kueleza mawazo, kupanga msimu", "Kuandika rasimu za ujumbe, kutafsiri", "Kutengeneza fomula za spreadsheet"] },
            { title: "Uliza kwa uwazi", bullets: ["Zao, eneo, msimu, ukubwa wa shamba", "Unachotaka na kwa namna gani", "Sentensi fupi, orodha ya kukagua"] },
            { title: "Kagua kabla ya kutenda", bullets: ["Viuatilifu, viwango, dawa, pesa", "Afisa ugani, agrovet, lebo", "AI inaweza kukosea au kuwa ya nchi nyingine"] },
            { title: "Usiweke data binafsi", bullets: ["Hakuna PIN, namba za kitambulisho au za benki", "Hakuna data ya watu wengine"] }
          ],
          tryIt: "Muulize msaidizi wa AI wa bure orodha ya kila wiki ya zao lako kuu msimu huu, ukitumia mtindo wa prompt wa somo hili. Weka alama kwa kila kipengele kinachohitaji kukaguliwa kwa chanzo kinachoaminika, na ukague kimoja kati yake.",
          youCanNow: "kuuliza msaidizi wa AI swali la kilimo lililo wazi na kukagua jibu lake kabla ya kuchukua hatua.",
          quickCheck: [
            { objective: "O5", q: "Lipi ni swali la kilimo lililo wazi kwa msaidizi wa AI?", options: ["\"Ninalima ekari 1 ya maharagwe Kakamega. Mvua ndefu zinaanza Machi. Nipe orodha fupi ya kupanda.\"", "\"kilimo\"", "\"Niambie kila kitu kuhusu mazao.\"", "\"maharagwe?\""], answer: 0, why: "Linataja zao, eneo, msimu, ukubwa wa shamba na unachotaka." },
            { objective: "O5", q: "Msaidizi wa AI anakupa kiwango cha mbolea kwa zao lako. Unafanya nini?", options: ["Kukitumia leo", "Kukiongeza mara mbili ili kuwa salama", "Kukikagua kwa afisa ugani wako, agrovet au lebo", "Kukiweka kwenye kikundi chako kama ukweli"], answer: 2, why: "AI inaweza kutoa viwango visivyo sahihi au ushauri wa nchi nyingine, kwa hiyo viwango lazima vikaguliwe kwanza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kulinda na kushiriki data ya shamba lako",
          minutes: 5,
          goal: "Amua data gani ya shamba ya kushiriki, na nani, na uweke iliyobaki salama.",
          text: [
            "Data ya shamba lako ina thamani: wanunuzi, wakopeshaji, kampuni za bima, kampuni za pembejeo na apps wanaweza kuitaka. Kushiriki kunaweza kukusaidia kupata mkopo, bima au mkataba, lakini unapaswa kujua unachoshiriki, kwa nini na na nani. Soma kile app au programu inachosema itafanya na data yako, na sema hapana kama huridhiki.",
            "Sheria za ulinzi wa data zinakupa haki juu ya data yako binafsi. Nchini Kenya, Sheria ya Ulinzi wa Data ya 2019 (Data Protection Act 2019) inasimamiwa na Ofisi ya Kamishna wa Ulinzi wa Data (ODPC); nchini Nigeria, Sheria ya Ulinzi wa Data ya Nigeria ya 2023 (Nigeria Data Protection Act 2023) inasimamiwa na Tume ya Ulinzi wa Data ya Nigeria (NDPC). Ukikusanya data kutoka kwa wakulima wengine, kwa mfano kama kiongozi wa kikundi, lazima pia uheshimu haki zao: omba ridhaa yao na uiweke salama.",
            "Weka simu yako na majedwali yako salama: kufuli ya skrini, nywila imara kwenye akaunti zako, nakala za akiba, na uangalifu na simu za kushirikiana. Shiriki muhtasari (kama mavuno kwa ekari) badala ya kila kitu pale unapotosha."
          ],
          steps: ["Kabla ya kushiriki, uliza: nini, kwa nini, na nani, na mimi napata nini?", "Soma masharti ya data ya app au programu.", "Omba ridhaa ya wakulima wengine kabla ya kukusanya data yao.", "Funga simu yako; tumia nywila imara; hifadhi nakala.", "Shiriki muhtasari badala ya taarifa zote inapowezekana."],
          words: [["Data binafsi", "taarifa kuhusu mtu anayeweza kutambulika."], ["Ridhaa", "ndiyo iliyo wazi baada ya kuelewa kitakachofanyika na data."], ["Sheria ya ulinzi wa data", "sheria inayodhibiti jinsi data binafsi inavyoweza kukusanywa na kutumiwa."]],
          slides: [
            { title: "Data yako ina thamani", bullets: ["Wanunuzi, wakopeshaji, kampuni za bima, apps wanaitaka", "Kushiriki kunaweza kusaidia: mikopo, bima, mikataba", "Jua nini, kwa nini, na nani"] },
            { title: "Haki zako", bullets: ["Kenya: Data Protection Act 2019, ODPC", "Nigeria: Data Protection Act 2023, NDPC", "Heshimu data ya wakulima wengine pia"] },
            { title: "Iweke salama", bullets: ["Kufuli ya skrini, nywila imara, nakala za akiba", "Uangalifu na simu za kushirikiana", "Shiriki muhtasari unapotosha"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Kazi ya mwisho: kamilisha jedwali la data ya shamba lako la msimu kwa angalau vipande vitatu, tengeneza chati moja ya kulinganisha, andika uamuzi mmoja wa msimu ujao, orodhesha vyanzo ulivyokagua, na andika hatua tatu unazochukua kuweka data salama.",
          youCanNow: "kukusanya, kuchambua, kushiriki na kulinda data ya shamba lako ili kufanya maamuzi bora.",
          quickCheck: [
            { objective: "O6", q: "Ni chombo gani kinasimamia ulinzi wa data nchini Kenya?", options: ["Idara ya Hali ya Hewa ya Kenya", "Ofisi ya Kamishna wa Ulinzi wa Data (ODPC)", "KALRO", "Kampuni yako ya mtandao wa simu"], answer: 1, why: "Sheria ya Ulinzi wa Data ya Kenya ya 2019 inasimamiwa na ODPC." },
            { objective: "O6", q: "Mkopeshaji anataka kuona jinsi shamba lako linavyofanya. Unashiriki nini?", options: ["Nywila ya simu yako", "PIN yako ya pesa kwa simu", "Data binafsi ya wanachama wote", "Muhtasari kama mavuno kwa ekari, baada ya kusoma jinsi watakavyoutumia"], answer: 3, why: "Muhtasari mara nyingi unatosha, na unapaswa kujua unachoshiriki, kwa nini na na nani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia taarifa kufanya maamuzi",
        questions: [
          { objective: "O4", q: "Fomula ipi ya spreadsheet inajumlisha safu ya gharama?", options: ["=SUM", "=PIN", "=PHOTO", "=RAIN"], answer: 0, why: "=SUM inajumlisha kundi la visanduku." },
          { objective: "O4", q: "Kipande A kilitoa kg 900 kwenye nusu ekari. Mavuno yake kwa ekari ni:", options: ["kg 90", "kg 450", "kg 900", "kg 1,800"], answer: 3, why: "900 kugawanywa kwa ekari 0.5 ni kg 1,800 kwa ekari." },
          { objective: "O5", q: "Msaidizi wa AI anapendekeza kiuatilifu na kiwango. Unapaswa:", options: ["Kunyunyiza mara moja", "Kuongeza kiwango mara mbili ili kuwa salama", "Kuipa PIN yako", "Kukagua usajili na kiwango kwa afisa ugani, agrovet au lebo"], answer: 3, why: "AI inaweza kutaja bidhaa na viwango visivyo sahihi au visivyosajiliwa." },
          { objective: "O5", q: "Kipi SI salama kuandika kwenye msaidizi wa AI?", options: ["Zao lako na eneo lako", "PIN yako ya pesa kwa simu", "Tarehe za msimu wako", "Ukubwa wa shamba lako"], answer: 1, why: "PIN na namba za kitambulisho lazima zibaki siri." },
          { objective: "O6", q: "Kama kiongozi wa kikundi anayekusanya data ya shamba ya wanachama, lazima:", options: ["Uombe ridhaa na uiweke salama", "Uiuze kwa wanunuzi", "Uiweke mtandaoni", "Ukusanye kadiri iwezekanavyo"], answer: 0, why: "Sheria za ulinzi wa data zinalinda data binafsi ya watu wengine." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Data na Teknolojia katika Kilimo",
    questions: [
      { objective: "O1", q: "Kwa kawaida, kipi ni chanzo kinachoaminika cha ushauri wa kilimo?", options: ["Akaunti isiyojulikana inayouza bidhaa za miujiza", "Taasisi ya utafiti kama KALRO au afisa ugani aliyefunzwa", "Ujumbe wa mnyororo", "Tangazo linalojitokeza ghafla"], answer: 1, why: "Vyanzo vilivyofunzwa na vinavyowajibika vinaaminika zaidi." },
      { objective: "O1", q: "Kabla ya kutumia pesa kwa ushauri mpya, unapaswa:", options: ["Kutenda mara moja", "Kumuuliza mgeni", "Kukagua kwa chanzo cha pili kinachoaminika", "Kupuuza ushauri wote"], answer: 2, why: "Chanzo cha pili kinanasa makosa na ulaghai." },
      { objective: "O1", q: "Ujumbe unasema ruzuku ya serikali inahitaji ada na PIN yako. Huo ni:", options: ["Huenda ni ulaghai", "Kawaida", "Unahitajika kisheria", "Mkopo"], answer: 0, why: "Programu za kweli haziombi PIN yako." },
      { objective: "O2", q: "Data yako ya shamba yenye thamani zaidi kwa kawaida ni:", options: ["Data kuhusu nchi nyingine", "Matangazo", "Habari za watu maarufu", "Kumbukumbu za shamba lako mwenyewe"], answer: 3, why: "Zinahusu vipande vyako, pembejeo zako na matokeo yako." },
      { objective: "O2", q: "Jedwali zuri la shamba lina:", options: ["Safu moja tu", "Mstari mmoja kwa kila tukio wenye tarehe, kipande, shughuli, kiasi, gharama, maelezo", "Picha tu", "Nywila"], answer: 1, why: "Mistari na safu zisizobadilika huwezesha uchambuzi." },
      { objective: "O2", q: "Pini ya GPS inarekodi:", options: ["Mvua", "Bei ya zao", "Viwianishi vya mahali", "pH ya udongo"], answer: 2, why: "Pini huhifadhi mahali kwenye ramani." },
      { objective: "O2", q: "KoboToolbox inavisaidia vikundi:", options: ["Kujaza fomu ileile kwenye simu, hata bila intaneti", "Kurusha droni", "Kulipa mikopo", "Kuotesha mbegu"], answer: 0, why: "Fomu za pamoja zisizohitaji intaneti hurahisisha ukusanyaji wa data ya kikundi." },
      { objective: "O2", q: "Safu tano zinazojazwa kila wiki:", options: ["Ni mbaya kuliko ishirini zilizojazwa mara moja", "Hazina manufaa", "Ni kinyume cha sheria", "Zina thamani kuliko safu ishirini zilizojazwa mara moja"], answer: 3, why: "Kumbukumbu za mara kwa mara na rahisi ndizo zenye manufaa." },
      { objective: "O3", q: "Taarifa rasmi za hali ya hewa kwa kilimo nchini Kenya zinatoka:", options: ["KCAA", "Idara ya Hali ya Hewa ya Kenya", "Kampuni ya mbegu", "ODPC"], answer: 1, why: "KMD hutoa utabiri na taarifa za hali ya hewa kwa kilimo." },
      { objective: "O3", q: "Ramani za FAO za uchunguzi wa dunia zinaweza kuonyesha:", options: ["Salio lako la benki", "Bei za soko tu", "Mvua, uoto na shinikizo kwa kilimo", "Majina ya wadudu"], answer: 2, why: "FAO GIEWS huonyesha kwenye ramani mvua, NDVI na viashiria vya shinikizo." },
      { objective: "O3", q: "Kipimo rahisi cha mvua kinakuwezesha:", options: ["Kurekodi mvua yako mwenyewe ya kila siku", "Kutabiri mwaka ujao", "Kupima pH ya udongo", "Kuhesabu mimea"], answer: 0, why: "Kumbukumbu yako ya mvua inaunganisha hali ya hewa na mavuno yako." },
      { objective: "O4", q: "Mavuno kwa ekari ni:", options: ["Mavuno mara bei", "Gharama kugawanywa kwa mapato", "Ukubwa wa kipande mara mvua", "Mavuno kugawanywa kwa ukubwa wa kipande"], answer: 3, why: "Inafanya vipande vya ukubwa tofauti viweze kulinganishwa." },
      { objective: "O4", q: "Chati ya pau inakusaidia:", options: ["Kuficha namba", "Kuona na kueleza tofauti kati ya vipande", "Kuhifadhi picha", "Kutuma pesa"], answer: 1, why: "Pau hufanya ulinganisho uwe rahisi kuona." },
      { objective: "O4", q: "Baada ya kupata kipande chako bora, hatua inayofuata ni:", options: ["Kufuta kumbukumbu", "Kuacha kurekodi", "Kutafuta sababu na kuandika uamuzi mmoja wa msimu ujao", "Kuuza simu"], answer: 2, why: "Uchambuzi unapaswa kuleta uamuzi unaoweza kuujaribu." },
      { objective: "O5", q: "Prompt ya AI iliyo wazi kwa kilimo inajumuisha:", options: ["Zao, eneo, msimu, ukubwa wa shamba na unachotaka", "Namba yako ya kitambulisho", "Neno moja tu", "Taarifa zako za benki"], answer: 0, why: "Maelezo ya hali yako yanamsaidia msaidizi kutoa majibu yenye manufaa." },
      { objective: "O5", q: "Ushauri wa AI kuhusu dawa za mifugo unapaswa:", options: ["Kufuatwa kama ulivyo", "Kupuuzwa kabisa", "Kusambazwa kwa wengi", "Kukaguliwa kwa daktari wa mifugo au chanzo kinachoaminika kabla ya kutenda"], answer: 3, why: "AI inaweza kukosea; dawa zinahitaji ushauri wa mtaalamu." },
      { objective: "O6", q: "Nchini Nigeria, ulinzi wa data unasimamiwa na:", options: ["NCAA", "Tume ya Ulinzi wa Data ya Nigeria (NDPC)", "NiMet", "NAFDAC"], answer: 1, why: "NDPC inasimamia Nigeria Data Protection Act 2023." },
      { objective: "O6", q: "Kabla app haijakusanya data ya shamba lako, unapaswa:", options: ["Kutosoma chochote kamwe", "Kutoa data yote", "Kusoma itakachofanya na data na kuamua", "Kutoa PIN yako"], answer: 2, why: "Jua unachoshiriki, kwa nini na na nani." },
      { objective: "O6", q: "Kushiriki muhtasari kama mavuno kwa ekari badala ya taarifa zote:", options: ["Kunaweza kutosha na kunalinda faragha yako", "Hakuruhusiwi kamwe", "Ni ulaghai", "Hakuna manufaa"], answer: 0, why: "Shiriki kinachohitajika tu." },
      { objective: "O6", q: "Kipi kinaweka data ya simu yako salama zaidi?", options: ["Kutokuwa na kufuli ya skrini", "Kushiriki nywila", "Kutohifadhi nakala kamwe", "Kufuli ya skrini, nywila imara na nakala za akiba"], answer: 3, why: "Hatua hizi za msingi zinalinda kumbukumbu zako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      8,
      9,
      11,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya jedwali na ulikague tena.",
    criteria: [
      {
        name: "Jedwali la data ya shamba",
        objective: "O2",
        notYet: "Safu zinakosekana, au vipande vina majina tofauti katika mistari tofauti.",
        meets: "Mstari mmoja kwa kila tukio wenye tarehe, kipande, shughuli, kiasi na gharama, na majina yasiyobadilika ya vipande, kwa angalau vipande vitatu.",
        exceeds: "Pia lina maelezo ya ukaguzi wa shamba, picha au alama za GPS zilizounganishwa na vipande."
      },
      {
        name: "Maelezo ya hali ya hewa na setilaiti",
        objective: "O3",
        notYet: "Hakuna taarifa ya utabiri wala ya mvua.",
        meets: "Utabiri rasmi au ramani ya setilaiti au ya mvua imeandikwa pamoja na chanzo na tarehe yake.",
        exceeds: "Inajumuisha kumbukumbu ya mwanafunzi ya kipimo chake cha mvua kando ya utabiri."
      },
      {
        name: "Uchambuzi na chati",
        objective: "O4",
        notYet: "Hakuna jedwali la muhtasari, au hesabu si sahihi.",
        meets: "Mavuno na faida kwa ekari ni sahihi kwa kila kipande na yanaonyeshwa kwenye chati ya pau.",
        exceeds: "Chati inaelezwa kwa sentensi moja au mbili kwa kikundi au mkopeshaji."
      },
      {
        name: "Uamuzi wa msimu ujao",
        objective: "O4",
        notYet: "Hakuna uamuzi, au hautokani na namba.",
        meets: "Uamuzi mmoja ulio wazi unaotokana na kile jedwali linachoonyesha.",
        exceeds: "Inaeleza jinsi kumbukumbu za msimu ujao zitakavyoujaribu uamuzi huo."
      },
      {
        name: "Vyanzo vilivyokaguliwa",
        objective: "O1",
        notYet: "Ushauri kutoka apps, AI au mitandao ya kijamii unatumiwa bila kukaguliwa.",
        meets: "Inaandika ni vyanzo gani vinavyoaminika vilitumika kukagua ushauri, pamoja na jibu lolote la AI.",
        exceeds: "Inataja chanzo cha pili kwa kila ushauri muhimu."
      },
      {
        name: "Data imewekwa salama",
        objective: "O6",
        notYet: "Jedwali lina PIN, namba za kitambulisho au data ya watu wengine bila ridhaa.",
        meets: "Hakuna namba binafsi; kuna maelezo kuhusu nakala za akiba, kufuli ya skrini na kinachoshirikiwa na nani.",
        exceeds: "Inaonyesha muhtasari mfupi ulioandaliwa kwa ajili ya kushiriki badala ya jedwali zima."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa jedwali la data ya shamba",
      "Wanafunzi ambao bado wanarekodi data ya shamba kwenye simu zao siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kufanya uamuzi wa shamba kutokana na kumbukumbu zao au kukagua ushauri kabla ya kununua pembejeo",
      "Wanafunzi wanaoripoti kuepuka pembejeo bandia, ruzuku bandia au ulaghai wa PIN"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, hata ya bei nafuu; kompyuta inasaidia kwa Sura 2",
      "Zana za bure: Google Sheets au toleo la bure la wavuti la Microsoft Excel, app ya ramani, na msaidizi wa AI wa bure",
      "Kumbukumbu halisi au za mfano za shamba kwa angalau vipande vitatu; kipimo rahisi cha mvua kama kipo",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa kujaza jedwali la data ya shamba"
    ],
    facilitatorNotes: [
      "Katika kikundi cha wakulima au kipindi cha ugani: fanyeni jaribio la awali pamoja, kisha tengenezeni jedwali moja la mfano la pamoja kwenye simu ili kila mtu aone safu.",
      "Andaa data ya mfano kwa wanafunzi ambao bado hawana kumbukumbu, ili kila mtu afanye mazoezi ya fomula na chati.",
      "Usiwaombe wanafunzi kamwe kuandika PIN, namba za kitambulisho au taarifa za benki kwenye majedwali, fomu au zana za AI; tumia vishika-nafasi.",
      "Kikundi kinapokusanya data ya wanachama, eleza ridhaa na mkubaliane nani anaweza kuona jedwali.",
      "Pima jedwali la mwisho kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
