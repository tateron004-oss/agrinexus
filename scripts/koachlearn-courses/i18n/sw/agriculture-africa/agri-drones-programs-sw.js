"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-drones-programs.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const ODPC = { name: "Ofisi ya Kamishna wa Ulinzi wa Data (ODPC, Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Tume ya Ulinzi wa Data ya Nigeria (NDPC)", url: "https://ndpc.gov.ng" };
const QGIS = { name: "QGIS (programu ya GIS ya bure na ya chanzo huria)", url: "https://qgis.org/" };
const COPERNICUS = { name: "Copernicus Browser (picha za bure za setilaiti za Sentinel)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_ITU_DRONES = { name: "FAO na ITU: E-agriculture in Action: Drones for Agriculture (Droni kwa kilimo, 2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const KCAA_UAS = { name: "Mamlaka ya Usafiri wa Anga ya Kenya (KCAA): Unmanned Aircraft Systems (droni)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Mamlaka ya Usafiri wa Anga ya Nigeria (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems (droni)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-programs-sw",
  lang: "sw",
  translationOf: "agri-drones-programs",
  category: "Agriculture (Africa)",
  name: "Droni kwa Ufuatiliaji wa Kilimo 5: Kuunganisha Data, GIS na Kubuni Programu",
  skills: "Kupanga na kuhifadhi nakala za data ya droni, Kuunganisha ramani za droni na tabaka za GIS na picha za setilaiti, Kulinda data ya wakulima na kupata ridhaa yao, Kuweka lengo la programu ya ufuatiliaji na watumiaji wake, Kupanga timu, vifaa, ratiba na bajeti, Kupima na kuripoti matokeo",
  outcome: "kubuni programu ya ufuatiliaji wa mashamba kwa droni kwa kikundi cha wakulima: lengo lake, watumiaji, mpango wa data wenye GIS na ulinzi wa data, timu, ratiba, bajeti, jinsi inavyojilipia, na jinsi utakavyopima na kuripoti matokeo.",
  about: [
    "Hii ni Kozi ya 5 ya mfululizo wa ufuatiliaji kwa droni. Ni kwa wasimamizi wa ugani, viongozi wa vyama vya ushirika na vikundi vya wakulima, maafisa wa kilimo wa kaunti na majimbo, maafisa wa programu wa NGO (mashirika yasiyo ya kiserikali), wasimamizi wa biashara za kilimo na wajasiriamali wa droni nchini Kenya, Nigeria na kote Afrika wanaotaka kufuatilia mashamba mengi kwa droni, si shamba moja tu.",
    "Sura ya 1 inahusu data: kutaja majina, kuhifadhi na kuweka nakala za data ya droni; kuweka ramani za droni pamoja na mipaka ya mashamba, picha za setilaiti na kumbukumbu za shamba katika GIS; na kulinda data binafsi ya wakulima chini ya sheria kama Sheria ya Ulinzi wa Data ya Kenya 2019 na Sheria ya Ulinzi wa Data ya Nigeria 2023. Sura ya 2 inahusu kubuni programu: kuanza na tatizo halisi na watumiaji halisi, kupanga watu, vifaa, safari za droni na pesa, na kuonyesha kwamba programu inafanya kazi.",
    "Mwishoni utakuwa na muundo wa programu unaoweza kuuwasilisha kwa bodi ya chama cha ushirika, ofisi ya kaunti au jimbo, mfadhili au mwekezaji. Kila sura inaishia na jaribio la maarifa, na kozi inaishia na mtihani wa maswali 20."
  ],
  finalTask: "Andika muundo wa programu wa kurasa mbili wa ufuatiliaji kwa droni kwa chama cha ushirika cha wakulima wadogo 200 (kwa mfano mahindi na maharagwe Trans Nzoia, kahawa Nyeri, au mihogo Jimbo la Ogun): tatizo na lengo, watumiaji na kile kila mmoja anapata, mpango wa data (uhifadhi, tabaka za GIS, matumizi ya setilaiti, ridhaa na ulinzi wa data), timu na vifaa, ratiba ya safari za droni kwa msimu mmoja, bajeti rahisi pamoja na jinsi huduma inavyolipiwa, vipimo vya mafanikio, na jinsi matokeo yatakavyoripotiwa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wasimamizi wa ugani, viongozi wa vyama vya ushirika na vikundi vya wakulima, maafisa wa kilimo wa kaunti na majimbo, maafisa wa programu wa NGO, wasimamizi wa biashara za kilimo na wajasiriamali wa droni nchini Kenya, Nigeria na kote Afrika wanaotaka kufuatilia mashamba mengi kwa droni.",
    startingPoint: "Wanafunzi wanaweza kutengeneza na kusoma ramani za droni na wameona kazi ya droni kwenye shamba moja (Kozi ya 1 hadi 4). Wachache wamepanga data ya mamia ya mashamba, kuunganisha ramani za droni na picha za setilaiti na kumbukumbu katika GIS, kushughulikia data binafsi ya wakulima kwa mujibu wa sheria, au kupanga na kuwekea bajeti programu inayodumu baada ya ruzuku.",
    gap: "Miradi mingi ya droni inaanza na droni badala ya tatizo, inapoteza data, inashughulikia vibaya taarifa binafsi za wakulima, au inasimama ruzuku ikiisha. Muundo wazi wa programu wenye mpango wa data, ridhaa, timu, ratiba, bajeti na vipimo unaruhusu chama cha ushirika, kaunti au biashara kuendesha huduma ambayo wakulima wanaiamini na inayojilipia.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; kila neno la data na GIS linaelezwa",
      "Vifaa: kompyuta ndogo (laptop) yenye QGIS ya bure na lahajedwali (spreadsheet); data ya droni na setilaiti au mifano",
      "Sheria: sheria za ulinzi wa data zinatumika (Sheria ya Ulinzi wa Data ya Kenya 2019, Sheria ya Ulinzi wa Data ya Nigeria 2023 au sheria ya nchi ya mwanafunzi)",
      "Kanuni za usafiri wa anga: marubani wanahitaji leseni na shirika linaweza kuhitaji cheti cha mwendeshaji",
      "Gharama na ada zinatofautiana kwa nchi na hubadilika: wanafunzi wanatumia bei halisi za mahali walipo"
    ],
    prerequisites: "\"Droni kwa Ufuatiliaji wa Kilimo 4: Kilimo cha Usahihi, Tabianchi na Mifugo\", au uzoefu sawa na huo wa ramani za droni."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa data ya droni kutoka mashamba mengi", action: "kuweka mpangilio wa folda, kanuni ya majina, rejista ya safari za droni na nakala za 3-2-1", standard: "ukitumia namba za Shamba (Farm ID) badala ya majina na ukihakikisha nakala zinafunguka" },
    { id: "O2", condition: "Ukipewa ramani za droni, mipaka ya mashamba, picha za setilaiti na kumbukumbu za shamba", action: "kupanga mradi wa GIS unaoziweka kama tabaka na kuunganisha kumbukumbu na mashamba kwa namba ya utambulisho (ID)", standard: "kila tabaka likiwa katika mfumo uleule wa kuratibu (coordinate system)" },
    { id: "O3", condition: "Programu inapokusanya data binafsi ya wakulima", action: "kuandika tamko la ridhaa na hatua za ulinzi wa data zinazofuata sheria", standard: "zikisema kinachokusanywa, kwa nini, nani anakiona, kinawekwa kwa muda gani na kwamba wakulima wanaweza kukataa" },
    { id: "O4", condition: "Kwa kikundi cha wakulima", action: "kuandika lengo la programu lenye namba na tarehe na kuorodhesha watumiaji na kile kila mmoja anapata", standard: "ukianza na tatizo ambalo watumiaji wanalijali na wanaweza kulichukulia hatua" },
    { id: "O5", condition: "Kwa msimu mmoja wa programu", action: "kupanga timu, vifaa, ratiba ya safari za droni na bajeti, na jinsi huduma inavyolipiwa", standard: "ikijumuisha leseni, gharama za mara moja na za uendeshaji, na mpango wa baada ya ruzuku yoyote kuisha" },
    { id: "O6", condition: "Mwishoni mwa msimu", action: "kuchagua vipimo vya mafanikio na kuripoti matokeo kwa kila mtumiaji", standard: "ukilinganisha na hali ya mwanzo (baseline) na kwa ukweli kuhusu kile ambacho hakikufanya kazi" }
  ],
  chapters: [
    {
      name: "Sura 1: Usimamizi na uunganishaji wa data",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupanga, kuhifadhi na kuweka nakala za data ya droni",
          minutes: 5,
          goal: "Weka mfumo wa folda, majina na nakala kwa data ya droni kutoka mashamba mengi.",
          text: [
            "Safari moja ya kuchora ramani inaweza kutoa mamia ya picha na ramani kadhaa kubwa. Kwa mashamba 200 na msimu mzima, hizo zinakuwa maelfu ya faili. Bila mfumo, data inapotea, inachanganyika au inafutwa kwa kuandikwa juu yake, na programu inapoteza imani ya watu.",
            "Tumieni mpangilio mmoja wazi wa folda na kanuni moja ya majina kwa kila mtu: kwa mfano Programu / Farm ID / Field ID / Tarehe / ghafi, iliyochakatwa, ripoti. Tumia namba ya Shamba (Farm ID) badala ya jina la mkulima katika majina ya faili. Weka rejista rahisi (lahajedwali) ya kila safari: tarehe, Farm ID, shamba, rubani, droni, faili, imechakatwa ndiyo au hapana.",
            "Fuata wazo la nakala 3-2-1: nakala tatu, kwenye aina mbili tofauti za hifadhi (kwa mfano kompyuta ndogo na diski ya nje), na nakala moja mahali pengine au kwenye huduma ya wingu (cloud) unayoiamini. Hakikisha nakala zinafunguka. Amua utaweka picha ghafi kwa muda gani, kwa sababu zinajaza hifadhi haraka."
          ],
          steps: ["Kubalianeni mpangilio mmoja wa folda na kanuni moja ya majina kwa timu nzima.", "Ipe kila shamba na kila kipande cha shamba namba ya utambulisho (ID); usiweke majina katika majina ya faili.", "Weka lahajedwali ya rejista ya safari za droni.", "Weka nakala: nakala tatu, aina mbili za hifadhi, moja nje ya ofisi.", "Weka muda wa kutunza picha ghafi."],
          words: [["Data ghafi (raw data)", "picha na kumbukumbu za asili moja kwa moja kutoka kwenye droni."], ["Nakala (backup)", "nakala ya ziada ya data inayowekwa endapo ya asili itapotea."], ["Rejista", "orodha inayoandika kila safari ya droni na faili zake."]],
          slides: [
            { title: "Data inaongezeka haraka", bullets: ["Mamia ya picha kwa kila safari", "Maelfu ya faili kwa kila msimu", "Data iliyopotea au kuchanganyika inapoteza imani"] },
            { title: "Mfumo mmoja kwa kila mtu", bullets: ["Programu / Farm ID / Field ID / Tarehe", "Ghafi, iliyochakatwa, ripoti", "Namba za ID, si majina, katika majina ya faili"] },
            { title: "Weka rejista ya safari", bullets: ["Tarehe, shamba, kipande, rubani, droni", "Faili na hali ya uchakataji"] },
            { title: "Nakala 3-2-1", bullets: ["Nakala tatu", "Aina mbili za hifadhi", "Nakala moja mahali pengine"] }
          ],
          tryIt: "Tengeneza mpangilio wa folda kwenye kompyuta au simu yako kwa programu ya mfano yenye mashamba matatu, na anza lahajedwali ya rejista ya safari yenye safu za somo hili. Ongeza safari mbili za mfano.",
          youCanNow: "kupanga, kusajili na kuweka nakala za data ya droni kwa programu ya mashamba mengi.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini uamue muda wa kutunza picha ghafi?", options: ["Ni kinyume cha sheria kutunza picha ghafi", "Wakulima wanaziomba kila siku", "Picha ghafi zinajaza hifadhi haraka", "Ramani haziwezi kutengenezwa kutoka kwazo"], answer: 2, why: "Picha ghafi zinajaza hifadhi haraka, kwa hiyo programu inaamua zitunzwe kwa muda gani." },
            { objective: "O1", q: "Marubani wawili wanataja faili kwa njia tofauti kwa shamba lilelile. Unafanya nini?", options: ["Mnakubaliana mpangilio mmoja wa folda na kanuni moja ya majina kwa kila mtu", "Kila rubani atumie mfumo wake", "Tumia jina la mkulima katika kila faili", "Futa faili za zamani"], answer: 0, why: "Mpangilio mmoja wazi wa folda na kanuni moja ya majina kwa kila mtu huzuia data kupotea au kuchanganyika." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuunganisha ramani za droni na GIS, setilaiti na kumbukumbu za shamba",
          minutes: 6,
          goal: "Jenga mradi wa GIS unaoweka ramani za droni, mipaka ya mashamba, picha za setilaiti na kumbukumbu za shamba kama tabaka.",
          text: [
            "GIS (mfumo wa taarifa za kijiografia) inakuruhusu kupanga aina tofauti za data juu ya ramani moja. Kwa programu, tabaka za msingi ni mipaka ya mashamba (iliyotembelewa kwa GPS ya simu au kuchorwa kwenye ramani ya droni) na alama za mashamba. Juu yake zinakuja orthomosaic na ramani za NDVI za droni, picha za bure za setilaiti, na kumbukumbu kama tarehe ya kupanda, aina ya mbegu, pembejeo na mavuno.",
            "Picha za bure za setilaiti ya Sentinel-2, unazoweza kuziona kwenye Copernicus Browser, zinakuja kila baada ya siku chache kwa takriban mita 10 kwa pikseli. Hazina undani wa kutosha kuona mmea mmoja, lakini ni nzuri kufuatilia mashamba yote 200 kati ya safari za droni. Tumia setilaiti kuamua mashamba gani yanahitaji kutembelewa na droni, na droni kwa undani.",
            "Unganisha kumbukumbu na mashamba kwa Field ID, ili uweze kuuliza maswali kama: je, mashamba yaliyopata ushauri wa droni yalivuna zaidi? QGIS inaweza kuunganisha (join) lahajedwali na tabaka la mashamba kwa ID. Tumia mfumo uleule wa kuratibu kwa kila tabaka, la sivyo hayatalingana."
          ],
          steps: ["Tengeneza tabaka la mipaka ya mashamba lenye Field ID kwa kila shamba.", "Ongeza ramani za droni za mashamba uliyoruka juu yake.", "Ongeza picha ya bure ya setilaiti ya eneo hilo kwa kipindi hichohicho.", "Unganisha lahajedwali ya kumbukumbu zako na tabaka la mashamba kwa Field ID.", "Hakikisha kila tabaka linalingana (mfumo uleule wa kuratibu)."],
          words: [["Mpaka wa shamba", "umbo kwenye ramani linaloonyesha mzunguko wa shamba."], ["Sentinel-2", "jozi ya setilaiti za Ulaya ambazo picha zake ni za bure; takriban m 10 kwa pikseli."], ["Kuunganisha (join)", "kuunganisha jedwali na maumbo ya ramani kwa kutumia ID wanayoshiriki."], ["Mfumo wa kuratibu (coordinate system)", "kanuni ambayo ramani inatumia kuweka vitu duniani; tabaka lazima zishiriki mmoja ili zilingane."]],
          slides: [
            { title: "Panga tabaka zako", bullets: ["Mipaka ya mashamba na alama za mashamba", "Ramani za droni na NDVI", "Picha za setilaiti", "Kumbukumbu za kupanda, pembejeo na mavuno"] },
            { title: "Setilaiti pamoja na droni", bullets: ["Sentinel-2: bure, kila baada ya siku chache, takriban m 10", "Fuatilia mashamba yote kati ya safari", "Tuma droni pale panapohitaji undani"] },
            { title: "Unganisha kumbukumbu kwa Field ID", bullets: ["Unganisha lahajedwali na mashamba katika QGIS", "Uliza: je, mashamba yaliyoshauriwa yalivuna zaidi?", "Mfumo uleule wa kuratibu kwa tabaka zote"] }
          ],
          sources: [QGIS, COPERNICUS],
          tryIt: "Fungua Copernicus Browser na utafute eneo lako. Kisha katika QGIS, chora mipaka ya mashamba mawili ya mfano, yape Field ID, na uunganishe lahajedwali ndogo yenye tarehe ya kupanda na aina ya mbegu kwa kila moja.",
          youCanNow: "kuunganisha ramani za droni, picha za setilaiti, mipaka ya mashamba na kumbukumbu za shamba katika mradi mmoja wa GIS.",
          quickCheck: [
            { objective: "O2", q: "GIS inakuruhusu kufanya nini?", options: ["Kurusha droni yenyewe", "Kupanga aina tofauti za data juu ya ramani moja", "Kuchaji betri haraka zaidi", "Kuwalipa wakulima kwa pesa za simu"], answer: 1, why: "GIS inapanga tabaka kama mipaka, ramani za droni, picha za setilaiti na kumbukumbu juu ya ramani moja." },
            { objective: "O2", q: "Chama cha ushirika kinataka kufuatilia mashamba yote 200 kila wiki lakini kina droni moja. Unapanga nini?", options: ["Kuruka juu ya kila shamba kila siku", "Kuacha ufuatiliaji", "Kuruka juu ya shamba la mwenyekiti tu", "Kutumia picha za bure za setilaiti kufuatilia mashamba yote na kutuma droni pale zinapoonyesha tatizo"], answer: 3, why: "Setilaiti zinafuatilia mashamba yote kati ya safari; droni zinatoa undani pale unapohitajika." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kulinda data ya wakulima na kupata ridhaa yao",
          minutes: 5,
          goal: "Kusanya na tumia data ya wakulima kwa mujibu wa sheria, kwa ridhaa iliyo wazi na uhifadhi salama.",
          text: [
            "Programu ya ufuatiliaji inashikilia data binafsi: majina, namba za simu, namba za pesa za simu, mahali mashamba yalipo, mavuno na picha za makazi. Sheria za ulinzi wa data zinatumika. Nchini Kenya, Sheria ya Ulinzi wa Data 2019 inasimamiwa na Ofisi ya Kamishna wa Ulinzi wa Data (ODPC), inayosajili wadhibiti na wachakataji wa data. Nchini Nigeria, Sheria ya Ulinzi wa Data ya Nigeria 2023 inasimamiwa na Tume ya Ulinzi wa Data ya Nigeria (NDPC). Nchi nyingine zina sheria zao. Angalia kama shirika lako lazima lijisajili na sheria inataka nini.",
            "Pata ridhaa iliyo wazi kwa lugha ya mkulima: unakusanya nini, kwa nini, nani anaiona, unaiweka kwa muda gani, na kwamba anaweza kukataa au kuomba iondolewe. Kusanya tu kile unachohitaji. Usishiriki data na wanunuzi, wakopeshaji au wengine bila ruhusa.",
            "Weka data salama: nywila kwenye kompyuta na simu, ufikiaji mdogo, na taarifa binafsi zihifadhiwe tofauti na ramani pale inapowezekana. Wakulima wanapaswa kunufaika na data yao wenyewe, kama ramani na ripoti zao, si kuitoa tu bure."
          ],
          steps: ["Orodhesha data binafsi ambayo programu itashikilia.", "Angalia sheria ya ulinzi wa data ya nchi yako na kama lazima ujisajili.", "Andika tamko fupi la ridhaa kwa lugha ya mkulima.", "Kusanya tu unachohitaji; ihifadhi kwa nywila na ufikiaji mdogo.", "Wape wakulima ramani na ripoti zao wenyewe."],
          words: [["Data binafsi", "taarifa kuhusu mtu anayeweza kutambulika, kama jina, namba ya simu au mahali shamba lilipo."], ["Ridhaa", "\"ndiyo\" iliyo wazi kutoka kwa mtu, baada ya kuelewa kitakachofanyika na data yake."], ["Mdhibiti wa data", "shirika linaloamua kwa nini na jinsi data binafsi inavyotumika."]],
          slides: [
            { title: "Programu yako inashikilia data binafsi", bullets: ["Majina, simu, namba za pesa za simu", "Mahali mashamba yalipo, mavuno, picha"] },
            { title: "Sheria inatumika", bullets: ["Kenya: Sheria ya Ulinzi wa Data 2019, ODPC", "Nigeria: Sheria ya Ulinzi wa Data 2023, NDPC", "Nchi nyingine: sheria zao wenyewe"] },
            { title: "Ridhaa na data ya kiwango cha chini", bullets: ["Nini, kwa nini, nani anaiona, kwa muda gani", "Wakulima wanaweza kukataa", "Kusanya tu unachohitaji"] },
            { title: "Iweke salama na kwa haki", bullets: ["Nywila, ufikiaji mdogo", "Hakuna kushiriki bila ruhusa", "Wakulima wanapata ramani zao wenyewe"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Andika tamko la ridhaa la sentensi tano kwa wakulima wanaojiunga na programu ya ufuatiliaji kwa droni, kwa maneno rahisi (na kwa lugha ya mahali kama unaweza): unakusanya nini, kwa nini, nani anaiona, unaiweka kwa muda gani, na jinsi ya kukataa.",
          youCanNow: "kukusanya na kushughulikia data ya wakulima kwa ridhaa yao, ukifuata sheria ya ulinzi wa data ya nchi yako.",
          quickCheck: [
            { objective: "O3", q: "Nchini Kenya, ODPC inamsajili nani?", options: ["Marubani wa droni", "Wauzaji wa mbegu", "Wanunuzi wa mazao tu", "Wadhibiti na wachakataji wa data"], answer: 3, why: "ODPC ya Kenya inasajili wadhibiti na wachakataji wa data chini ya Sheria ya Ulinzi wa Data 2019." },
            { objective: "O3", q: "Mkulima anakuomba uondoe data yake kwenye programu. Unafanya nini?", options: ["Unakataa, kwa sababu data ni mali ya programu", "Unaheshimu ombi lake na kuiondoa, kama tamko la ridhaa lilivyosema anaweza", "Unaiuza kwanza, kisha unaiondoa", "Unapuuza ombi"], answer: 1, why: "Ridhaa inawaambia wakulima kwamba wanaweza kukataa au kuomba data yao iondolewe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Usimamizi na uunganishaji wa data",
        questions: [
          { objective: "O1", q: "Kwa nini utumie Farm ID badala ya majina ya wakulima katika majina ya faili?", options: ["Majina ni marefu mno", "Inalinda faragha na inafanya majina yafanane", "Programu haiwezi kusoma majina", "Droni inataka hivyo"], answer: 1, why: "Namba za ID zinalinda data binafsi na kuweka faili katika mpangilio." },
          { objective: "O1", q: "Wazo la nakala 3-2-1 linamaanisha:", options: ["Nakala tatu, aina mbili za hifadhi, moja nje ya ofisi", "Droni tatu, marubani wawili, shamba moja", "Weka nakala mara moja kila baada ya miaka mitatu", "Futa nakala mbili"], answer: 0, why: "Nakala kadhaa katika sehemu tofauti zinalinda dhidi ya upotevu." },
          { objective: "O2", q: "Katika programu, picha za bure za Sentinel-2 zinatumika vizuri zaidi:", options: ["Kuhesabu mmea mmoja mmoja", "Kuchukua nafasi ya safari zote za droni", "Kusoma majina ya wakulima", "Kufuatilia mashamba yote kati ya safari na kuchagua pa kutuma droni"], answer: 3, why: "Kwa takriban m 10 zinaonyesha mwenendo wa jumla, si mmea mmoja mmoja." },
          { objective: "O2", q: "Tabaka mbili za ramani hazilingani. Sababu inayowezekana ni:", options: ["Mwingiliano mwingi mno", "Simu ya mkulima", "Mifumo tofauti ya kuratibu", "Mashamba mengi mno"], answer: 2, why: "Tabaka lazima zishiriki mfumo mmoja wa kuratibu ili zilingane." },
          { objective: "O3", q: "Nani anasimamia ulinzi wa data nchini Kenya?", options: ["Ofisi ya Kamishna wa Ulinzi wa Data (ODPC)", "KCAA", "Muuzaji wa droni", "Bunge la kaunti"], answer: 0, why: "ODPC inasimamia Sheria ya Ulinzi wa Data ya Kenya 2019." }
        ]
      }
    },
    {
      name: "Sura 2: Kubuni programu ya ufuatiliaji kwa droni",
      lessons: [
        {
          objectives: ["O4"],
          title: "Anza na tatizo na watumiaji",
          minutes: 5,
          goal: "Andika lengo wazi la programu na uorodheshe watumiaji na kile kila mmoja anapata.",
          text: [
            "Miradi mingi ya droni inashindwa kwa sababu inaanza na droni, si tatizo. Anza na tatizo ambalo wakulima na washirika wao wanalijali na wanaweza kulichukulia hatua: kuchelewa kugundua viwavijeshi vamizi (fall armyworm) katika chama cha ushirika cha mahindi, ubora usio sawa wa chai katika mashamba makubwa, miche michache ya mihogo kwa wakulima wa mkataba, au uharibifu wa mafuriko katika skimu za mpunga.",
            "Andika sentensi moja ya lengo yenye namba na tarehe, kwa mfano: Kufikia mwisho wa mvua za masika 2027, gundua maeneo yenye viwavijeshi vamizi kwenye mashamba 200 ya wanachama ndani ya wiki moja tangu uharibifu wa kwanza, na mpe kila mkulima aliyeathirika ushauri uliothibitishwa ndani ya siku tatu.",
            "Orodhesha watumiaji na kile kila mmoja anapata: wakulima (ramani na ushauri rahisi kwenye simu zao), maafisa ugani (pa kutembelea kwanza), bodi ya chama cha ushirika (muhtasari wa msimu), wanunuzi au wasindikaji (makadirio ya mazao, bila data binafsi isipokuwa wakulima wakubali), na ofisi ya kilimo ya kaunti au jimbo kama ni mshirika."
          ],
          steps: ["Taja tatizo kwa sentensi moja.", "Hakikisha watumiaji wanalijali na wanaweza kulichukulia hatua.", "Andika lengo moja lenye namba na tarehe.", "Orodhesha kila kundi la watumiaji, kile linachopokea, na kwa njia gani."],
          words: [["Programu", "huduma iliyopangwa inayoendelea kwa muda kwa watu wengi, si safari moja ya droni."], ["Mtumiaji", "mtu au kundi linalopokea matokeo ya programu na kuyafanyia kazi."]],
          slides: [
            { title: "Tatizo kwanza, droni baadaye", bullets: ["Tatizo ambalo watu wanalijali", "Na wanaweza kulichukulia hatua"] },
            { title: "Lengo lenye namba na tarehe", bullets: ["Gundua maeneo ya viwavijeshi (FAW) kwenye mashamba 200", "Ndani ya wiki moja tangu uharibifu wa kwanza", "Ushauri ndani ya siku tatu"] },
            { title: "Watumiaji na wanachopata", bullets: ["Wakulima: ramani na ushauri rahisi kwenye simu", "Ugani: pa kutembelea kwanza", "Bodi na washirika: muhtasari wa msimu"] }
          ],
          tryIt: "Kwa programu ambayo ungeweza kuendesha, andika tatizo, sentensi moja ya lengo yenye namba na tarehe, na jedwali la angalau makundi manne ya watumiaji na kile kila moja linapokea.",
          youCanNow: "kueleza wazi tatizo, lengo na watumiaji wa programu ya droni.",
          quickCheck: [
            { objective: "O4", q: "Ni nini kinachofanya lengo la programu liwe wazi?", options: ["Sentensi moja yenye namba na tarehe", "Orodha ndefu ya kila kitu droni zinaweza kufanya", "Jina la chapa ya droni", "Picha ya shamba"], answer: 0, why: "Lengo wazi ni sentensi moja yenye namba na tarehe, ili ujue limefikiwa lini." },
            { objective: "O4", q: "Mjumbe wa bodi anataka kununua droni kwanza na kutafuta matumizi baadaye. Unashauri nini?", options: ["Nunua droni ya bei ghali zaidi", "Nunua droni na mamue mwaka ujao", "Anzeni na tatizo ambalo wakulima wanalijali na wanaweza kulichukulia hatua", "Muulize muuzaji wa droni afanye nini"], answer: 2, why: "Miradi mingi ya droni inashindwa kwa sababu inaanza na droni, si tatizo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupanga watu, vifaa, ratiba na pesa",
          minutes: 6,
          goal: "Panga timu, vifaa, ratiba ya safari za droni na bajeti kwa msimu mmoja.",
          text: [
            "Watu: marubani wa droni wenye leseni na waangalizi, mtu wa kuchakata na kuchambua data, maafisa ugani wa kuhakiki shambani na kushauri, na mratibu. Kama programu yako inarusha droni kwa ajili ya wengine au kwa malipo, shirika lako linaweza kuhitaji cheti cha mwendeshaji kutoka mamlaka ya usafiri wa anga, na kila rubani anahitaji leseni ambayo kanuni zako zinataka.",
            "Vifaa: droni (na moja ya akiba), betri za siku nzima, chaja (njia ya kuchaji kwa jua au kwa gari pale umeme usipotegemewa), kompyuta ndogo inayoweza kuchakata ramani, hifadhi, simu au tableti, vifaa vya usalama na usafiri. Ratiba: fuata kalenda ya mazao na uamue safari ngapi kwa kila shamba kwa msimu; panga mashamba kwa maeneo ili timu ifikie mengi kwa siku moja.",
            "Pesa: orodhesha gharama za mara moja (droni, kompyuta, mafunzo, leseni na vyeti) na gharama za uendeshaji (wafanyakazi, usafiri, vifurushi vya data, matengenezo, bima, ada). Kisha amua inalipwaje: ada kwa ekari au hekta inayokusanywa kwa pesa za simu, ushuru mdogo wa chama kwa mazao yanayowasilishwa, mnunuzi au msindikaji anayenufaika, au ruzuku ya serikali au mfadhili kwa kipindi cha kuanzia. Panga kwa ajili ya baada ya ruzuku kuisha."
          ],
          steps: ["Orodhesha kazi za kila mtu na leseni au vyeti ambavyo kila mmoja anahitaji.", "Orodhesha vifaa, pamoja na vya akiba na njia za kuchaji.", "Chora ratiba ya msimu kutoka kalenda ya mazao; panga mashamba kwa maeneo.", "Orodhesha gharama za mara moja na za uendeshaji.", "Chagua jinsi huduma inavyolipiwa, na jinsi itakavyoendelea baada ya ruzuku yoyote."],
          words: [["Gharama ya mara moja", "gharama inayolipwa mara moja, kama kununua droni."], ["Gharama ya uendeshaji", "gharama inayojirudia, kama usafiri na wafanyakazi."], ["Ushuru (levy)", "malipo madogo yanayokusanywa kutoka kwa wanachama, kwa mfano kwa kila kilo inayowasilishwa."]],
          slides: [
            { title: "Watu", bullets: ["Marubani wenye leseni na waangalizi", "Mchakataji na mchambuzi wa data", "Maafisa ugani na mratibu", "Cheti cha mwendeshaji kama kanuni zako zinakitaka"] },
            { title: "Vifaa", bullets: ["Droni na moja ya akiba, betri za siku nzima", "Kuchaji kwa jua au kwa gari", "Kompyuta, hifadhi, simu, usafiri"] },
            { title: "Ratiba", bullets: ["Fuata kalenda ya mazao", "Safari kwa kila shamba kwa msimu", "Panga mashamba kwa maeneo"] },
            { title: "Pesa", bullets: ["Gharama za mara moja na za uendeshaji", "Ada kwa hekta kwa pesa za simu, ushuru, mnunuzi, ruzuku", "Panga kwa ajili ya baada ya ruzuku"] }
          ],
          sources: [KCAA_UAS, NCAA_P21, FAO_ITU_DRONES],
          tryIt: "Kwa programu yako kutoka Somo la 4, andika orodha ya timu, orodha ya vifaa, ratiba ya msimu (wiki zipi unarusha droni wapi) na jedwali rahisi la bajeti la gharama za mara moja na za uendeshaji, pamoja na jinsi kila moja itakavyolipwa.",
          youCanNow: "kupanga timu, vifaa, ratiba na bajeti ya programu ya ufuatiliaji kwa droni.",
          quickCheck: [
            { objective: "O5", q: "Ipi ni gharama ya mara moja kwa programu ya droni?", options: ["Usafiri wa kila wiki", "Vifurushi vya data vya kila mwezi", "Kununua droni na kompyuta", "Mishahara ya wafanyakazi"], answer: 2, why: "Vifaa kama droni na kompyuta ni gharama ya mara moja; usafiri, data na mishahara ni gharama za uendeshaji." },
            { objective: "O5", q: "Mtu wa kujitolea anajitolea kurusha droni kwa ajili ya programu lakini hana leseni ya rubani wa droni. Unafanya nini?", options: ["Usimruhusu kurusha hadi awe na leseni ambayo kanuni zinataka", "Mruhusu kurusha kwenye mashamba madogo tu", "Mruhusu kurusha kama mratibu anaangalia", "Mruhusu kurusha wikendi"], answer: 0, why: "Kila rubani anahitaji leseni ambayo kanuni za nchi zinataka." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupima matokeo na kuripoti",
          minutes: 5,
          goal: "Chagua vipimo vya mafanikio na uripoti matokeo kwa ukweli kwa wakulima na washirika.",
          text: [
            "Programu inafaa kuendelea tu ikiwa inaleta mabadiliko. Chagua vipimo vichache vinavyohusiana na lengo lako: matatizo yaligunduliwa kwa haraka kiasi gani, wakulima wangapi walipata ushauri kwa wakati, wangapi waliufanyia kazi, mavuno au ubora ukilinganisha na mashamba au misimu isiyo na programu, na gharama kwa kila shamba.",
            "Kusanya hali ya mwanzo (baseline) kabla ya kuanza (kwa mfano mavuno ya msimu uliopita au muda wa kugundua matatizo), ili uweze kulinganisha. Waulize wakulima pia: je, ushauri ulikuwa wazi na wenye manufaa, na wangeulipia? Majibu yao ni muhimu kama namba.",
            "Ripoti kwa njia ambayo kila mtumiaji anaweza kuitumia: ujumbe mfupi kwa wakulima, muhtasari wa ukurasa mmoja wenye ramani kwa bodi, ripoti kamili zaidi kwa washirika. Kuwa mkweli kuhusu kile ambacho hakikufanya kazi. Kisha boresha muundo kwa msimu ujao."
          ],
          steps: ["Chagua vipimo vitatu hadi vitano vinavyohusiana na lengo.", "Andika hali ya mwanzo kabla programu haijaanza.", "Kusanya vipimo na maoni ya wakulima wakati wa msimu.", "Ripoti kwa njia inayofaa kila mtumiaji.", "Orodhesha cha kuboresha msimu ujao."],
          words: [["Hali ya mwanzo (baseline)", "hali ilivyokuwa kabla programu haijaanza, inayotumika kulinganisha."], ["Kipimo cha mafanikio", "namba inayoonyesha kama programu ilifikia lengo lake."]],
          slides: [
            { title: "Pima kilicho muhimu", bullets: ["Kasi ya kugundua matatizo", "Wakulima walioshauriwa kwa wakati, na waliochukua hatua", "Mavuno au ubora ukilinganisha na hali ya mwanzo", "Gharama kwa kila shamba"] },
            { title: "Hali ya mwanzo na maoni", bullets: ["Andika hali ya mwanzo", "Uliza wakulima: ulisaidia? ungelipia?"] },
            { title: "Ripoti na boresha", bullets: ["Ujumbe mfupi kwa wakulima", "Ukurasa mmoja na ramani kwa bodi", "Kuwa mkweli; boresha msimu ujao"] }
          ],
          tryIt: "Kazi ya mwisho: andika muundo wako wa programu wa kurasa mbili kwa chama cha ushirika cha wakulima wadogo 200: tatizo na lengo, watumiaji, mpango wa data wenye GIS na ridhaa, timu na vifaa, ratiba ya msimu, bajeti na mfumo wa malipo, vipimo vya mafanikio pamoja na hali ya mwanzo, na kuripoti.",
          youCanNow: "kupima, kuripoti na kuboresha programu ya ufuatiliaji kwa droni, na kuwasilisha muundo kamili wa programu.",
          quickCheck: [
            { objective: "O6", q: "Upi ni mfano wa hali ya mwanzo (baseline)?", options: ["Lengo la msimu ujao", "Mavuno ya msimu uliopita au muda wa kugundua matatizo, vilivyoandikwa kabla ya kuanza", "Bei ya droni", "Tarehe ya mkutano wa bodi"], answer: 1, why: "Hali ya mwanzo ni hali kabla ya programu, ili matokeo yaweze kulinganishwa." },
            { objective: "O6", q: "Wakulima wanasema ramani zilikuwa sahihi lakini ushauri ulikuwa mgumu kuelewa. Unafanya nini?", options: ["Kuiacha nje ya ripoti", "Kuripoti ramani sahihi tu", "Kusimamisha programu", "Kuiripoti kwa ukweli na kubadilisha jinsi ushauri unavyotolewa msimu ujao"], answer: 3, why: "Kuwa mkweli kuhusu kile ambacho hakikufanya kazi, kisha boresha muundo kwa msimu ujao." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kubuni programu ya ufuatiliaji kwa droni",
        questions: [
          { objective: "O4", q: "Kwa nini miradi mingi ya droni inashindwa?", options: ["Droni ni ndogo mno", "Inaanza na droni badala ya tatizo halisi", "Wakulima hawapendi ramani", "Betri ni kubwa mno"], answer: 1, why: "Programu zinafanikiwa zinapotatua tatizo ambalo watumiaji wanalijali." },
          { objective: "O4", q: "Lipi ni lengo bora la programu?", options: ["Kurusha droni sana", "Kutumia teknolojia", "Kugundua maeneo ya viwavijeshi (FAW) kwenye mashamba 200 ndani ya wiki moja tangu uharibifu wa kwanza kufikia mwisho wa mvua za masika 2027", "Kuwa wabunifu"], answer: 2, why: "Lina namba wazi, muda na matokeo." },
          { objective: "O5", q: "Programu yako itarusha droni kwa wakulima wanaolipa. Lazima uangalie nini?", options: ["Kama shirika lako linahitaji cheti cha mwendeshaji na marubani wanahitaji leseni", "Rangi ya droni tu", "Hali ya hewa tu", "Hakuna kitu; wakulima wamekubali"], answer: 0, why: "Kurusha droni kibiashara kwa kawaida kunahitaji cheti cha mwendeshaji na marubani wenye leseni." },
          { objective: "O5", q: "Ipi ni gharama ya uendeshaji?", options: ["Kununua droni ya kwanza", "Kununua kompyuta ndogo", "Mafunzo ya mwanzo", "Usafiri kwenda mashambani kila wiki"], answer: 3, why: "Gharama za uendeshaji zinajirudia katika programu yote." },
          { objective: "O6", q: "Kwa nini ukusanye hali ya mwanzo (baseline)?", options: ["Kujaza fomu", "Kulinganisha matokeo na hali ilivyokuwa kabla ya programu", "Kufuta data ya zamani", "Kuchagua droni"], answer: 1, why: "Bila mahali pa kuanzia huwezi kuonyesha mabadiliko." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Droni kwa Ufuatiliaji wa Kilimo 5: Kuunganisha Data, GIS na Kubuni Programu",
    questions: [
      { objective: "O1", q: "Bila mfumo wa data, programu kubwa ya droni iko hatarini:", options: ["Faili kupotea, kuchanganyika au kufutwa kwa kuandikwa juu yake", "Ramani bora zaidi", "Safari za haraka zaidi", "Droni za bei nafuu zaidi"], answer: 0, why: "Maelfu ya faili yanahitaji mfumo wazi." },
      { objective: "O1", q: "Rejista ya safari za droni inaandika:", options: ["Bei za mazao", "Tarehe, shamba, kipande, rubani, droni, faili na hali", "Hali ya hewa tu", "Taarifa za benki za wakulima"], answer: 1, why: "Inafuatilia kila safari na data yake." },
      { objective: "O1", q: "Ipi ni kanuni nzuri ya folda?", options: ["Majina ya kubahatisha", "Jina kamili la mkulima na namba yake ya simu", "Programu / Farm ID / Field ID / Tarehe", "Kila kitu katika folda moja"], answer: 2, why: "Mpangilio unaofanana unaotumia ID unaweka data katika mpangilio na kwa faragha." },
      { objective: "O1", q: "Katika kanuni ya 3-2-1, 1 inamaanisha:", options: ["Droni moja", "Mkulima mmoja", "Siku moja", "Nakala moja mahali pengine"], answer: 3, why: "Nakala iliyo nje ya ofisi inabaki salama wizi, moto au hitilafu vikitokea ofisini." },
      { objective: "O2", q: "Katika GIS, tabaka za msingi za programu kwa kawaida ni pamoja na:", options: ["Mipaka ya mashamba na alama za mashamba", "Faili za muziki", "Picha za timu tu", "Ankara"], answer: 0, why: "Kila kitu kingine kinawekwa juu ya mashamba na vipande vyake." },
      { objective: "O2", q: "Picha za Sentinel-2 ni takriban mita ngapi kwa pikseli?", options: ["0.01", "10", "1,000", "100,000"], answer: 1, why: "Picha za bure za Sentinel-2 ni takriban m 10 kwa pikseli." },
      { objective: "O2", q: "Kuunganisha lahajedwali na tabaka la mashamba kunahitaji:", options: ["Rangi ileile", "Droni", "ID wanayoshiriki, kama Field ID", "Printa"], answer: 2, why: "ID inaunganisha kila mstari na shamba lake." },
      { objective: "O2", q: "Mradi wa GIS ulioungwa unaweza kusaidia kujibu swali gani?", options: ["Nywila ya mkulima ni ipi?", "Droni ina rangi gani?", "Nani alishinda mechi ya mpira?", "Je, mashamba yaliyopata ushauri wa droni yalivuna zaidi?"], answer: 3, why: "Kuunganisha kumbukumbu na mashamba kunaruhusu ulinganisho kama huo." },
      { objective: "O3", q: "Sheria ya ulinzi wa data ya Nigeria inasimamiwa na:", options: ["Tume ya Ulinzi wa Data ya Nigeria (NDPC)", "NCAA", "Mtengenezaji wa droni", "Chama cha ushirika"], answer: 0, why: "NDPC ilianzishwa chini ya Sheria ya Ulinzi wa Data ya Nigeria 2023." },
      { objective: "O3", q: "Ridhaa halali inamaanisha mkulima:", options: ["Hakuambiwa chochote", "Anaelewa unakusanya nini, kwa nini, nani anaiona, na anaweza kukataa", "Alisaini bila kusoma", "Alitoa PIN yake"], answer: 1, why: "Ridhaa lazima itolewe kwa uelewa na kwa hiari." },
      { objective: "O3", q: "Mnunuzi anaomba orodha ya majina ya wakulima na mavuno yao. Unapaswa:", options: ["Kuituma mara moja", "Kuiweka hadharani", "Kuishiriki tu kwa ruhusa ya wakulima", "Kuiuza"], answer: 2, why: "Data binafsi haishirikiwi bila ruhusa." },
      { objective: "O3", q: "Kukusanya tu kile unachohitaji kunaitwa:", options: ["Kurundika data", "Nakala", "Mwingiliano", "Kupunguza data (data minimisation)"], answer: 3, why: "Data kidogo inamaanisha hatari kidogo, na ni kanuni ya ulinzi wa data." },
      { objective: "O4", q: "Programu inapaswa kuanza na:", options: ["Tatizo ambalo watumiaji wanalijali na wanaweza kulichukulia hatua", "Droni mpya kabisa", "Nembo", "Taarifa kwa vyombo vya habari"], answer: 0, why: "Programu zinazoanza na tatizo zinaleta manufaa." },
      { objective: "O4", q: "Wakulima wanahitaji nini zaidi kutoka kwa programu?", options: ["Faili za picha ghafi", "Ramani na ushauri rahisi kwenye simu zao", "Programu ya GIS", "Leseni ya rubani"], answer: 1, why: "Taarifa rahisi zinazoweza kufanyiwa kazi zinawasaidia wakulima kuchukua hatua." },
      { objective: "O5", q: "Pale umeme usipotegemewa, panga:", options: ["Kutokuwa na betri", "Kurusha droni usiku tu", "Kuchaji kwa jua au kwa gari", "Safari moja kwa mwaka"], answer: 2, why: "Njia za kuchaji zinawezesha timu kurusha droni siku nzima." },
      { objective: "O5", q: "Kupanga mashamba kwa maeneo katika ratiba kunasaidia:", options: ["Kutumia mafuta zaidi", "Kufanya ramani zisionekane vizuri", "Kuepuka leseni", "Kufikia mashamba mengi kwa siku moja"], answer: 3, why: "Safari chache za barabarani zinamaanisha mashamba mengi kwa siku na gharama ndogo." },
      { objective: "O5", q: "Njia moja ya kulipia huduma ya droni ya chama cha ushirika ni:", options: ["Ada ndogo kwa hekta inayolipwa kwa pesa za simu", "Bure milele bila mpango", "Kuuza data ya wakulima", "Kuacha matengenezo"], answer: 0, why: "Ada, ushuru, wanunuzi au ruzuku vinaweza kugharamia huduma kwa uaminifu." },
      { objective: "O5", q: "Kwa nini upange kwa ajili ya baada ya ruzuku kuisha?", options: ["Ruzuku haziishi kamwe", "Ili huduma iendelee ruzuku ikisimama", "Ili kutumia pesa haraka zaidi", "Haihitajiki"], answer: 1, why: "Programu zinazotegemea ruzuku tu mara nyingi husimama." },
      { objective: "O6", q: "Kipi ni kipimo cha mafanikio?", options: ["Idadi ya picha za droni zilizopigwa", "Rangi ya droni", "Wakulima walioshauriwa ndani ya siku tatu tangu tatizo kugunduliwa", "Ukubwa wa ofisi"], answer: 2, why: "Kinapima matokeo ambayo watumiaji wanayajali." },
      { objective: "O6", q: "Unaporipoti, unapaswa:", options: ["Kuficha kile ambacho hakikufanya kazi", "Kumtumia kila mtu ripoti ileile ya kurasa 50", "Kuripoti kwa mfadhili tu", "Kuwa mkweli na kutumia njia ambayo kila mtumiaji anaweza kuitumia"], answer: 3, why: "Ripoti za kweli zinazofaa kila mtumiaji zinajenga imani na maboresho." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      4,
      6,
      9,
      10,
      12,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya muundo na uikague tena.",
    criteria: [
      {
        name: "Tatizo, lengo na watumiaji",
        objective: "O4",
        notYet: "Inaanza na droni, au lengo halina namba wala tarehe.",
        meets: "Tatizo halisi, lengo lenye namba na tarehe, na kila mtumiaji pamoja na kile anachopata.",
        exceeds: "Inaonyesha watumiaji walikubali tatizo, kwa mfano kutoka mkutano wa wakulima."
      },
      {
        name: "Mpango wa data",
        objective: "O1",
        notYet: "Hakuna mpango wa uhifadhi, majina au nakala.",
        meets: "Mpangilio wa folda, Farm ID, rejista ya safari za droni na nakala za 3-2-1.",
        exceeds: "Inasema picha ghafi zinatunzwa kwa muda gani na nani anakagua nakala."
      },
      {
        name: "Matumizi ya GIS na setilaiti",
        objective: "O2",
        notYet: "Hakuna tabaka za GIS wala matumizi ya setilaiti.",
        meets: "Tabaka za GIS zimeorodheshwa, kumbukumbu zimeunganishwa kwa Field ID, na setilaiti zinatumika kuchagua pa kurusha droni.",
        exceeds: "Inataja swali ambalo data iliyoungwa itajibu, kama mavuno yenye ushauri na bila ushauri."
      },
      {
        name: "Ridhaa na ulinzi wa data",
        objective: "O3",
        notYet: "Hakuna ridhaa wala hatua za ulinzi wa data.",
        meets: "Ridhaa kwa lugha ya mkulima, kupunguza data, uhifadhi salama na kutoshiriki bila ruhusa, chini ya sheria inayofaa.",
        exceeds: "Inaangalia kama shirika lazima lijisajili na mamlaka ya ulinzi wa data."
      },
      {
        name: "Timu, ratiba na bajeti",
        objective: "O5",
        notYet: "Inakosa leseni, ratiba au jinsi inavyolipiwa.",
        meets: "Timu yenye leseni, vifaa, ratiba ya safari za msimu, gharama za mara moja na za uendeshaji, na jinsi huduma inavyolipiwa.",
        exceeds: "Inaonyesha mpango wa baada ya ruzuku yoyote kuisha."
      },
      {
        name: "Vipimo na kuripoti",
        objective: "O6",
        notYet: "Hakuna vipimo wala hali ya mwanzo.",
        meets: "Vipimo vichache vinavyohusiana na lengo, hali ya mwanzo, na njia ya ripoti kwa kila mtumiaji.",
        exceeds: "Inajumuisha maoni ya wakulima kuhusu kama ushauri ulikuwa na manufaa na unastahili kulipiwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa muundo wa programu",
      "Wanafunzi wanaowasilisha muundo wao wa programu kwa bodi ya chama cha ushirika, ofisi ya kaunti au jimbo, mfadhili au mwekezaji ndani ya siku 90 (utafiti wa kufuatilia)",
      "Programu zilizobuniwa katika kozi zinazoanza msimu wa majaribio kwa ridhaa ya maandishi ya wakulima",
      "Wanafunzi wanaoendelea na Kozi ya 6 ya mfululizo wa droni"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta ndogo yenye QGIS ya bure na lahajedwali",
      "Ramani za droni, mipaka ya mashamba na kumbukumbu za shamba za mfano, au za mwanafunzi mwenyewe",
      "Bei za mahali za droni, usafiri, data na bima, kama zinapatikana",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuandika muundo wa kurasa mbili"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha shughulikieni chama kimoja cha ushirika cha mfano kama kikundi kabla wanafunzi hawajaandika muundo wao wenyewe.",
      "Tumia Farm ID, si majina au namba halisi za wakulima, katika mifano yote ya darasani.",
      "Waombe wanafunzi waangalie tovuti ya mamlaka ya ulinzi wa data katika nchi yao kwa kanuni za usajili.",
      "Wahimize wanafunzi kujaribu lengo na bajeti yao na chama halisi cha ushirika au mshirika kabla ya kumaliza.",
      "Pima muundo wa programu kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
