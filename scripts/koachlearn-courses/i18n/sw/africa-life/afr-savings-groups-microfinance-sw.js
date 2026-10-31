"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-savings-groups-microfinance.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const VSLA = { name: "VSL Associates: mbinu ya VSLA (hisa, mfuko wa mikopo, mfuko wa jamii, mzunguko wa mwaka mmoja, mgao)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya: orodha ya SACCO zenye leseni ya kupokea amana", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: kanuni za taasisi za fedha ndogo (systèmes financiers décentralisés) katika nchi zinazotumia XOF", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Benki Kuu ya Nigeria: benki za fedha ndogo (microfinance)", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const BOG = { name: "Benki ya Ghana: taasisi zote zenye leseni na utaratibu wa malalamiko", url: "https://www.bog.gov.gh" };
const CBK_DCP = { name: "Benki Kuu ya Kenya: usimamizi wa benki, pamoja na benki za fedha ndogo na watoa mikopo ya kidijitali wenye leseni", url: "https://www.centralbank.go.ke/bank-supervision/" };
const FCCPC = { name: "FCCPC, Nigeria: hali ya usajili wa wakopeshaji wa kidijitali (apps za mikopo zilizoidhinishwa)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const SEC_NG = { name: "Nairametrics (14 Mei 2026): SEC Nigeria yaonya dhidi ya mipango ya Ponzi inayotangazwa kwenye WhatsApp, TikTok na Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-savings-groups-microfinance-sw",
  lang: "sw",
  translationOf: "afr-savings-groups-microfinance",
  category: "Africa: Life and Work",
  name: "Vikundi vya Akiba na Fedha Ndogo (Chama, VSLA, Tontine, Esusu)",
  skills: "Kuchagua kati ya kikundi cha mzunguko na kikundi cha akiba na mikopo, Kuandika mpango wa akiba wa kila mwezi, Kukagua kanuni za kikundi, Kutunza kumbukumbu na pesa za kikundi kwa usalama, Kulinganisha mikopo ya fedha ndogo na ya vikundi, Kutambua mipango ya Ponzi na wakopeshaji bandia",
  outcome: "kuchagua kikundi cha akiba kinachofaa lengo lako, kukagua kanuni na kumbukumbu zake, kulinganisha mkopo wa fedha ndogo au wa kikundi kwa jumla utakayolipa, kutambua mpango wa Ponzi au mkopeshaji bandia, na kufuata mpango wako wa akiba wa kila mwezi ulioandikwa.",
  about: [
    "Kote Afrika, watu huweka akiba pamoja: chama na mchezo (merry-go-round) nchini Kenya, esusu na ajo nchini Nigeria, susu nchini Ghana, tontine nchini Senegal, Côte d'Ivoire na Kamerun (njangi katika sehemu ya Kamerun inayozungumza Kiingereza), gam'eya nchini Misri na daret nchini Moroko. Vikundi vya akiba, SACCO na benki za fedha ndogo huwasaidia mamilioni ya watu kulipa ada ya shule, kujaza duka bidhaa au kuvuka mwezi mgumu.",
    "Kozi hii ni kwa wafanyabiashara, wazazi, mafundi, wafanyakazi na vijana wanaotaka kuweka akiba mara kwa mara au kukopa kwa uangalifu. Utajifunza aina mbili kuu za vikundi, jinsi ya kuandika mpango wa akiba, unachopaswa kukagua katika kanuni na kumbukumbu za kikundi, jinsi ya kulinganisha mkopo kwa jumla utakayolipa, na jinsi ya kutambua mipango inayoiba akiba za watu.",
    "Kila somo linachukua kama dakika tano, na kazi ya \"Jaribu sasa\", swali fupi la kujipima, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kiasi chote cha pesa ni mifano tu. Kozi hii inaeleza jinsi huduma zinavyofanya kazi na hatari zake; haikuambii uweke pesa zako wapi."
  ],
  finalTask: "Andika mpango wako wa akiba wa kila mwezi kwenye ukurasa mmoja: lengo lako na tarehe unayolihitaji, jumla, kiasi cha kuweka kila wiki au kila mwezi, mahali utakapoweka akiba (kikundi, SACCO, benki ya fedha ndogo au akaunti), na karatasi ya ukaguzi yenye majibu yako kuhusu kikundi au taasisi: kanuni zake zilizoandikwa, jinsi pesa na kumbukumbu zinavyotunzwa, leseni yake (kama inapokea amana au inakopesha kama biashara), na gharama ya jumla ya mkopo wowote.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana kote Afrika, mijini na vijijini: wafanyabiashara, mafundi, akina mama na akina baba, wafanyakazi na vijana, wengi wao tayari wakiwa katika chama, esusu, susu au tontine. Mifano inatoka Kenya, Nigeria, Ghana, Senegal, Kamerun, Côte d'Ivoire, Misri na Moroko.",
    startingPoint: "Wengi tayari huweka akiba katika kikundi kisicho rasmi au kwenye pochi ya pesa ya simu, lakini bila lengo lililoandikwa. Baadhi wamejiunga na kikundi bila kusoma kanuni zake, wamekopa bila kuhesabu jumla ya marejesho, au wamepoteza pesa katika kikundi kilichovunjika au mpango wa \"zidisha pesa zako mara mbili\".",
    gap: "Wanafunzi wanahitaji kuchagua aina sahihi ya kikundi kwa lengo lao, kukagua kanuni na kumbukumbu kabla ya kukiamini kikundi na pesa zao, kulinganisha mikopo kwa kile watakacholipa kweli, na kutambua mipango ya Ponzi na wakopeshaji wasio na leseni, ili akiba zao zikue badala ya kupotea.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; imetafsiriwa kwa Kifaransa na Kiarabu",
      "Vifaa: simu ya kawaida; vikundi vingi hukutana ana kwa ana na hutunza kumbukumbu kwenye karatasi",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi na siku za mikutano ya kikundi",
      "Kanuni na leseni zinatofautiana kati ya nchi na hubadilika: wanafunzi hukagua orodha za sasa za mdhibiti",
      "Pesa: mifano tu; hakuna ushauri wa uwekezaji; usitoe kamwe PIN au nywila"
    ],
    prerequisites: "Hakuna. Kujua kujumlisha na kuzidisha kidogo, ukitumia kikokotoo cha simu, kunasaidia."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa lengo la akiba na aina mbili za vikundi", action: "kueleza jinsi kikundi cha mzunguko na kikundi cha akiba na mikopo vinavyofanya kazi na kuchagua kinachofaa lengo", standard: "ukitoa sababu moja ya uchaguzi wako na hatari moja ya kila kikundi" },
    { id: "O2", condition: "Ukipewa lengo na mapato yako mwenyewe", action: "kuandika mpango wa akiba wa kila mwezi wenye lengo, jumla, tarehe, kiasi kwa wiki au kwa mwezi na mahali utakapoweka akiba", standard: "kwa hesabu inayofikia lengo kufikia tarehe hiyo" },
    { id: "O3", condition: "Ukipewa katiba au kanuni za kikundi", action: "kuzikagua kwa kanuni muhimu: michango, mikutano, mikopo, faini, kuondoka, mgao na nani anadhibiti pesa", standard: "ukipata angalau sita kati ya saba na kutaja zile zinazokosekana" },
    { id: "O4", condition: "Katika mkutano wa kikundi", action: "kurekodi michango na mikopo katika kitabu cha mwanachama au kitabu cha kumbukumbu na kukagua kuwa pesa na kumbukumbu zinalingana", standard: "kila kiasi kikisomwa kwa sauti na kukubaliwa mbele ya wanachama" },
    { id: "O5", condition: "Ukipewa ofa ya mkopo wa fedha ndogo au wa kikundi", action: "kuhesabu jumla utakayolipa na kulinganisha tarehe za marejesho na mapato yako", standard: "kabla ya kusaini, na ukieleza dhamana ya pamoja inamaanisha nini kwako" },
    { id: "O6", condition: "Ukipewa ofa ya kuweka akiba, kuwekeza au kukopa", action: "kutambua dalili za hatari za mpango wa Ponzi au mkopeshaji bandia na kumkagua mtoa huduma kwenye orodha rasmi ya mdhibiti", standard: "kabla ya kulipa au kutoa taarifa zozote" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuweka akiba pamoja",
      lessons: [
        {
          title: "Aina mbili za vikundi vya akiba",
          objectives: ["O1"],
          minutes: 5,
          goal: "Eleza jinsi kikundi cha mzunguko na kikundi cha akiba na mikopo vinavyofanya kazi, na uchague kimoja kwa lengo lako.",
          text: [
            "Kikundi cha mzunguko (mchezo au merry-go-round, esusu, ajo, susu, tontine, njangi, gam'eya au daret) ni rahisi. Kila mwanachama analipa kiasi kile kile kila wiki au kila mwezi, na kila mara mwanachama mmoja anachukua jumla yote, kwa zamu, hadi kila mtu apate mara moja. Mfano: wanachama 10 kila mmoja analipa KES 1,000 kwa mwezi; kila mwezi mwanachama mmoja anapata KES 10,000.",
            "Kinafaa kupata kiasi kikubwa kwa mara moja: ada ya shule, cherehani, bidhaa za duka. Hatari zake: wanaopata mapema wanaweza kuacha kulipa, na hakuna anayepata faida yoyote kwa pesa hizo. Wanaopata mapema wanapata mkopo usio na riba; wanaopata mwisho kwa kweli wanakopesha kikundi.",
            "Kikundi cha akiba na mikopo (VSLA, ASCA au chama nyingi, na kwa namna kubwa na rasmi zaidi, SACCO) huweka pesa pamoja. Wanachama huweka akiba kila mkutano, akiba hizo zinakuwa mfuko wa mikopo, wanachama hukopa na kurudisha pamoja na ada ya huduma ambayo kikundi kinaweka, na mwisho wa mzunguko, mara nyingi kama mwaka mmoja, kila kitu kinagawanywa kulingana na kiasi ambacho kila mwanachama aliweka. Hatari zake: mikopo isiyorudishwa, na pesa zinazoibiwa au kurekodiwa vibaya.",
            "Chagua kulingana na lengo lako. Unahitaji kiasi kikubwa hivi karibuni: kikundi cha mzunguko kinaweza kufaa. Unataka kuweka akiba kwa utaratibu na nafasi ya kukopa: kikundi cha akiba na mikopo kinaweza kufaa. Watu wengi hutumia vyote viwili."
          ],
          words: [["Kikundi cha mzunguko (ROSCA)", "wanachama hulipa kiasi kile kile na kila mmoja huchukua jumla yote kwa zamu."], ["Kikundi cha akiba na mikopo", "wanachama huweka akiba katika mfuko wa pamoja, hukopeshana na hugawana mwisho wa mzunguko (VSLA, ASCA, SACCO)."], ["Mgao", "siku ambayo kikundi hulipa wanachama akiba zote na mapato kulingana na akiba za kila mmoja."]],
          slides: [
            { title: "Kikundi cha mzunguko", bullets: ["Kila mtu analipa sawa; mmoja anachukua jumla kwa zamu", "Esusu, ajo, susu, tontine, njangi, gam'eya, daret", "Kinafaa kwa kiasi kikubwa; hatari: wanaopata mapema huacha kulipa"] },
            { title: "Kikundi cha akiba na mikopo", bullets: ["Akiba zinakuwa mfuko wa mikopo", "Wanachama hukopa na kurudisha pamoja na ada ya huduma", "Mgao kulingana na akiba za kila mmoja; hatari: mikopo isiyorudishwa"] },
            { title: "Chagua kulingana na lengo lako", bullets: ["Kiasi kikubwa hivi karibuni: kikundi cha mzunguko kinaweza kufaa", "Akiba ya utaratibu na mikopo: VSLA au SACCO", "Watu wengi hutumia vyote viwili"] }
          ],
          sources: [VSLA],
          tryIt: "Fikiria kikundi ulichomo au unachokijua. Je, ni cha mzunguko au cha akiba na mikopo? Andika jambo moja kinachofaa na hatari moja.",
          youCanNow: "kueleza aina mbili za vikundi vya akiba na kuchagua kinachofaa lengo lako.",
          quickCheck: [
            { objective: "O1", q: "Wanachama kumi na wawili kila mmoja analipa GHS 200 kwa mwezi na mwanachama mmoja anachukua jumla yote kila mwezi. Hiki ni kikundi cha aina gani?", options: ["Kikundi cha akiba na mikopo", "Benki ya fedha ndogo", "Kikundi cha mzunguko", "Mpango wa Ponzi"], answer: 2, why: "Kila mtu analipa sawa na kuchukua jumla kwa zamu: kikundi cha mzunguko (susu)." },
            { objective: "O1", q: "Katika VSLA, pesa hugawanywaje mwisho wa mzunguko?", options: ["Kulingana na kiasi ambacho kila mwanachama aliweka", "Sawa kwa wote, bila kujali kila mmoja aliweka kiasi gani", "Zote kwa mwenyekiti", "Kwa aliyekopa zaidi"], answer: 0, why: "Wanachama walioweka zaidi hupata sehemu kubwa zaidi ya mfuko na mapato yake." }
          ]
        },
        {
          title: "Lengo lako na mpango wa akiba wa kila mwezi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Andika mpango wa akiba unaofikia lengo kufikia tarehe fulani.",
          text: [
            "Kuweka akiba kunafanya kazi vizuri zaidi ukiwa na lengo lililo wazi: ni kwa ajili ya nini, linagharimu kiasi gani na unalihitaji lini. \"Ada ya shule ya NGN 120,000 kufikia Januari\" ni lengo. \"Weka akiba zaidi\" si lengo.",
            "Gawanya jumla kwa idadi ya wiki au miezi uliyonayo. Mfano: NGN 120,000 katika miezi 8 ni NGN 15,000 kwa mwezi. Kama ni nyingi mno, badilisha tarehe, lengo au matumizi yako. Angalia mapato yako katika miezi mizuri na mibaya; mfanyabiashara anaweza kuweka akiba zaidi wakati wa msimu wa biashara nyingi.",
            "Amua pesa zitakaa wapi: kikundi cha akiba, SACCO, benki ya fedha ndogo, benki au akaunti ya akiba ya simu. Weka kiasi kidogo cha dharura unachoweza kukipata haraka, tofauti na pesa za lengo.",
            "Jilipe kwanza: weka akiba siku ile ile pesa zinapoingia, kabla ya matumizi mengine. Mfano: Aïcha, msusi wa nywele mjini Abidjan, anaweka XOF 5,000 katika tontine yake kila Jumamosi kabla ya kununua kitu kingine chochote."
          ],
          steps: ["Andika lengo, jumla na tarehe.", "Hesabu wiki au miezi hadi tarehe hiyo.", "Gawanya jumla kwa idadi hiyo.", "Linganisha na mapato yako katika mwezi mbaya.", "Chagua mahali pa kuweka akiba.", "Weka akiba siku ile ile pesa zinapoingia."],
          words: [["Lengo la akiba", "unachowekea akiba, kinagharimu kiasi gani na kufikia lini."], ["Pesa za dharura", "kiasi kidogo kilichowekwa kando kwa matatizo ya ghafla, rahisi kukipata."]],
          slides: [
            { title: "Lengo lililo wazi", bullets: ["Ni kwa nini, kiasi gani, kufikia lini", "\"Ada ya shule NGN 120,000 kufikia Januari\"", "Si tu \"weka akiba zaidi\""] },
            { title: "Fanya hesabu", bullets: ["Jumla / miezi = kiasi kwa mwezi", "NGN 120,000 / 8 = NGN 15,000 (mfano)", "Ni nyingi mno? Badilisha tarehe, lengo au matumizi"] },
            { title: "Wapi na lini", bullets: ["Kikundi, SACCO, benki ya fedha ndogo au akaunti", "Weka pesa za dharura tofauti", "Weka akiba kwanza, siku pesa zinapoingia"] }
          ],
          tryIt: "Andika lengo moja halisi lenye jumla na tarehe. Gawanya ili upate kiasi kwa wiki au kwa mwezi, na ulinganishe na mapato yako katika mwezi mbaya. Libadilishe hadi lifanye kazi.",
          youCanNow: "kuandika mpango wa akiba wenye lengo, jumla, tarehe na kiasi kwa wiki au kwa mwezi.",
          quickCheck: [
            { objective: "O2", q: "Unahitaji KES 24,000 katika miezi 6. Unaweka akiba kiasi gani kila mwezi?", options: ["KES 2,400", "KES 6,000", "KES 3,000", "KES 4,000"], answer: 3, why: "24,000 ukigawanya kwa 6 ni 4,000." },
            { objective: "O2", q: "Lipi ni lengo la akiba lililo wazi?", options: ["\"Weka akiba zaidi mwaka huu\"", "\"Cherehani inayogharimu GHS 1,500 kufikia Juni\"", "\"Kuwa tajiri\"", "\"Acha kutumia pesa\""], answer: 1, why: "Linasema ni nini, kiasi gani na kufikia lini." }
          ]
        },
        {
          title: "Kukagua kanuni za kikundi kabla ya kujiunga",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kagua kanuni zilizoandikwa za kikundi kwa mambo saba muhimu.",
          text: [
            "Kikundi imara kina kanuni zilizoandikwa, mara nyingi huitwa katiba au sheria ndogo, zilizokubaliwa na wanachama wote. Omba kuziona kabla ya kujiunga. Kama hakuna, omba kikundi kiziandike kwanza.",
            "Kagua mambo saba: 1. Michango: kiasi gani, mara ngapi, na nini kinatokea ukichelewa kulipa (faini). 2. Mikutano: lini na wapi. 3. Mikopo: nani anaweza kukopa, kiasi gani, kwa muda gani, ada ya huduma na nini kinatokea mkopo usiporudishwa. 4. Faini na nidhamu. 5. Kuondoka: utapataje pesa zako ukiondoka au ukihama. 6. Mgao au mpangilio wa zamu: lini na jinsi gani. 7. Nani anadhibiti pesa: viongozi, jinsi wanavyochaguliwa, na nani anasaini.",
            "Baadhi ya vikundi husajiliwa, kwa mfano kama kikundi cha kujisaidia, ushirika au SACCO; uliza ofisi ya maendeleo ya jamii au ya ushirika ya eneo lako ni nini kinachohusika unakoishi. Kikundi kinachopokea amana kutoka kwa umma kama biashara kinaweza kuhitaji leseni kutoka kwa mdhibiti.",
            "Mfano: chama ya Grace mjini Nakuru imeandika katika kanuni zake kuwa mweka hazina hawezi pia kushika funguo za sanduku la pesa, na wanachama hupiga kura kwa kila mkopo."
          ],
          steps: ["Omba kuona kanuni zilizoandikwa.", "Kagua michango na faini za kuchelewa.", "Kagua siku za mikutano.", "Kagua kanuni za mikopo na nini kinatokea mkopo usiporudishwa.", "Kagua jinsi ya kuondoka na kupata pesa zako.", "Kagua mgao au mpangilio wa zamu.", "Kagua nani anadhibiti na kusaini kwa ajili ya pesa."],
          words: [["Katiba (sheria ndogo)", "kanuni zilizoandikwa ambazo kikundi kinakubaliana na kuzifuata."], ["Viongozi", "wanachama waliochaguliwa kuongoza: mara nyingi mwenyekiti, katibu na mweka hazina."]],
          slides: [
            { title: "Omba kanuni zilizoandikwa", bullets: ["Katiba au sheria ndogo, zilizokubaliwa na wanachama", "Hakuna kanuni? Omba kikundi kiziandike"] },
            { title: "Mambo saba ya kukagua", bullets: ["Michango na faini; mikutano", "Mikopo na mikopo isiyorudishwa; kuondoka", "Mgao au zamu; nani anadhibiti pesa"] },
            { title: "Usajili", bullets: ["Baadhi ya vikundi husajiliwa katika eneo lao", "Uliza ofisi ya maendeleo ya jamii au ya ushirika", "Kupokea amana za umma kunaweza kuhitaji leseni"] }
          ],
          sources: [SASRA, BCEAO_SFD],
          tryIt: "Pata kanuni za kikundi ulichomo au unachotaka kujiunga nacho (au andika unachokijua). Weka alama kwa kila moja ya mambo saba. Andika yanayokosekana kama maswali ya kuuliza katika mkutano ujao.",
          youCanNow: "kukagua kanuni za kikundi kwa mambo saba muhimu kabla ya kukiamini na pesa zako.",
          quickCheck: [
            { objective: "O3", q: "Swali lipi linakagua kanuni ya \"kuondoka\"?", options: ["Tunakutana lini?", "Mwenyekiti ni nani?", "Sanduku la pesa lina rangi gani?", "Nikihamia mji mwingine, nitapataje akiba zangu?"], answer: 3, why: "Kanuni ya kuondoka inasema jinsi mwanachama anavyopata pesa zake." },
            { objective: "O3", q: "Kikundi hakina kanuni zilizoandikwa. Hatua ya busara kabla ya kujiunga ni ipi?", options: ["Kuwaomba wanachama wakubaliane na kuandika kanuni kwanza", "Kujiunga na kutumaini mambo yatakuwa mazuri", "Kumpa mwenyekiti akiba zako azitunze", "Kujiunga na vikundi viwili ili uwe salama"], answer: 0, why: "Kanuni zilizoandikwa huzuia migogoro mingi kuhusu pesa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuweka akiba pamoja",
        questions: [
          { objective: "O1", q: "Katika kikundi cha mzunguko, nani anabeba hatari kubwa zaidi?", options: ["Mwanachama anayechukua jumla kwanza", "Wanachama wanaochukua jumla mwisho, kama wa mapema wataacha kulipa", "Benki", "Hakuna mtu"], answer: 1, why: "Wanaochukua mwisho wamelipa kwa miezi mingi na hupoteza kama wa mapema wataacha kulipa." },
          { objective: "O1", q: "Unataka kuweka akiba kwa utaratibu na kukopa viasi vidogo wakati wa mwaka. Kipi kinaweza kufaa zaidi?", options: ["Kikundi cha mzunguko tu", "Mpango wa Ponzi", "Kuficha pesa chini ya kitanda", "Kikundi cha akiba na mikopo kama VSLA"], answer: 3, why: "VSLA inawaruhusu wanachama kuweka akiba na kukopa kutoka mfuko wa pamoja." },
          { objective: "O2", q: "Lengo lako ni GHS 900 katika miezi 3. Kiasi gani kila mwezi?", options: ["GHS 300", "GHS 450", "GHS 270", "GHS 90"], answer: 0, why: "900 ukigawanya kwa 3 ni 300." },
          { objective: "O3", q: "Lipi SI mojawapo ya kanuni saba za kukagua?", options: ["Kanuni za mikopo", "Mgao au zamu", "Chakula anachopenda mwenyekiti", "Nani anadhibiti pesa"], answer: 2, why: "Saba ni michango, mikutano, mikopo, faini, kuondoka, mgao na udhibiti wa pesa." },
          { objective: "O3", q: "Kwa nini ukague nani anasaini na kudhibiti pesa?", options: ["Ili mtu mmoja asiweze kuzichukua peke yake", "Ili mikutano iwe mifupi", "Ili kupunguza faini", "Ili kikundi kisilipe kodi"], answer: 0, why: "Udhibiti wa pamoja unazuia kiongozi mmoja kutumia pesa vibaya." }
        ]
      }
    },
    {
      name: "Sura 2: Kumbukumbu, mikopo na kubaki salama",
      lessons: [
        {
          title: "Kumbukumbu na usalama wa pesa katika mikutano",
          objectives: ["O4"],
          minutes: 5,
          goal: "Rekodi michango na mikopo na ukague kuwa pesa zinalingana na kumbukumbu.",
          text: [
            "Vikundi vingi vinavyoanguka huanza na kumbukumbu mbovu au mtu mmoja kushika pesa. Vikundi vizuri hutunza kumbukumbu ambazo kila mwanachama anaweza kuzifuatilia.",
            "Zana za kawaida: kila mwanachama ana kitabu chake (passbook) kinachoonyesha akiba na mikopo yake, kikundi kina kitabu cha kumbukumbu, na katika VSLA nyingi sanduku la pesa lina kufuli tatu na funguo tatu zinazoshikwa na wanachama watatu tofauti ambao si mtunza sanduku. Baadhi ya vikundi huweka pesa katika akaunti ya kikundi ya benki au ya simu inayohitaji watia sahihi wawili au watatu.",
            "Katika kila mkutano: kila mchango na kila rejesho huhesabiwa mbele ya wanachama, huandikwa katika kitabu cha mwanachama na kitabu cha kumbukumbu, na jumla husomwa kwa sauti. Mwishoni, pesa zilizohesabiwa lazima zilingane na kumbukumbu. Zisipolingana, simameni mjue sababu kabla mtu yeyote hajaondoka.",
            "Mfano: katika VSLA mjini Tamale, katibu anasoma salio kwa sauti na wanachama wawili wanahesabu pesa. Zinalingana: GHS 3,450. Sanduku linafungwa na funguo zinaenda nyumbani na wanachama watatu tofauti."
          ],
          steps: ["Hesabu kila malipo mbele ya wanachama.", "Yaandike katika kitabu cha mwanachama na kitabu cha kumbukumbu.", "Soma jumla kwa sauti.", "Hesabu pesa na ulinganishe na kitabu cha kumbukumbu.", "Zisipolingana, jueni sababu kabla mtu yeyote hajaondoka.", "Funga pesa; funguo au uwezo wa kusaini kwa wanachama tofauti."],
          words: [["Kitabu cha mwanachama (passbook)", "kitabu cha mwanachama mwenyewe kinachoonyesha akiba na mikopo yake."], ["Mtia sahihi", "mtu anayeruhusiwa kusaini kwa ajili ya akaunti ya kikundi; vikundi vizuri vinahitaji wawili au zaidi."]],
          slides: [
            { title: "Kwa nini kumbukumbu ni muhimu", bullets: ["Kumbukumbu mbovu na mtu mmoja kushika pesa", "ndipo vikundi vingi vinapokosea"] },
            { title: "Zana", bullets: ["Vitabu vya wanachama na kitabu cha kumbukumbu", "Sanduku la pesa lenye kufuli tatu, washika funguo watatu", "Akaunti ya kikundi yenye watia sahihi wawili au zaidi"] },
            { title: "Kila mkutano", bullets: ["Hesabuni mbele ya wanachama; andikeni", "Someni jumla kwa sauti", "Pesa zilingane na kumbukumbu kabla mtu hajaondoka"] }
          ],
          sources: [VSLA],
          tryIt: "Tengeneza jedwali rahisi la kumbukumbu kwa mkutano mmoja: jina la mwanachama, akiba iliyolipwa, mkopo uliorudishwa, mkopo mpya. Ongeza wanachama watatu wa mfano. Jumlisha kila safu na ukague kuwa jumla zinalingana na pesa ambazo ungehesabu.",
          youCanNow: "kurekodi michango na mikopo katika mkutano na kukagua kuwa pesa zinalingana na kumbukumbu.",
          quickCheck: [
            { objective: "O4", q: "Mwisho wa mkutano, pesa ni pungufu kwa GHS 200 ukilinganisha na kitabu cha kumbukumbu. Unafanya nini?", options: ["Kupuuza; zitalingana wakati ujao", "Kumwacha mweka hazina aeleze mwezi ujao", "Kusimama na kujua sababu kabla mtu yeyote hajaondoka", "Kuchana ukurasa"], answer: 2, why: "Tofauti lazima itafutwe wakati kila mtu yupo na kumbukumbu bado ni mpya akilini." },
            { objective: "O4", q: "Kwa nini VSLA nyingi huwapa wanachama watatu tofauti funguo tatu?", options: ["Ili hakuna mtu mmoja anayeweza kufungua sanduku peke yake", "Kwa sababu kufuli ni rahisi kununua", "Ili mikutano iwe mirefu", "Ili mtunza sanduku aweze kulifungua nyumbani"], answer: 0, why: "Funguo za pamoja zinamaanisha pesa zinaweza kufunguliwa tu wanachama wakiwepo." }
          ]
        },
        {
          title: "Mikopo ya fedha ndogo na ya vikundi",
          objectives: ["O5"],
          minutes: 6,
          goal: "Hesabu jumla utakayolipa kwa mkopo na ulinganishe tarehe na mapato yako.",
          text: [
            "Benki na taasisi za fedha ndogo (microfinance) hukopesha viasi vidogo kwa watu na biashara ndogo, mara nyingi kupitia vikundi. Nchini Nigeria, Benki Kuu inatoa leseni kwa benki za fedha ndogo; nchini Kenya, Benki Kuu inatoa leseni kwa benki za fedha ndogo na watoa mikopo ya kidijitali; nchini Ghana, Benki ya Ghana inaorodhesha taasisi zenye leseni; katika nchi zinazotumia XOF kama Senegal na Côte d'Ivoire, fedha ndogo hufuata kanuni za BCEAO (benki kuu ya nchi hizo).",
            "Usilinganishe mikopo kwa kiwango cha riba wanachotaja tu. Omba jumla utakayolipa, kwa maandishi, pamoja na ada zote, bima na gharama nyingine. Mfano (namba za kubuni): unakopa KES 10,000; unalipa KES 1,000 kwa wiki kwa wiki 12. Jumla iliyolipwa: KES 12,000, kwa hiyo mkopo unagharimu KES 2,000.",
            "Linganisha tarehe za marejesho na mapato yako. Rejesho la kila wiki ni gumu kama unapata pesa kila mwezi au kwa msimu. Uliza nini kinatokea ukichelewa kulipa: faini, na kama inaripotiwa kwa ofisi ya kumbukumbu za mikopo (credit bureau).",
            "Mikopo mingi ya vikundi hutumia dhamana ya pamoja: mwanachama mmoja asipolipa, wengine lazima walipe kwa niaba yake. Jiunge tu na watu unaowaamini, na ujue kuwa huenda ukamlipia mtu mwingine. Kopa kwa kitu kinachoingiza au kuokoa pesa, si kulipa mkopo mwingine."
          ],
          steps: ["Omba jumla ya kulipa, kwa maandishi, pamoja na ada zote.", "Hesabu gharama: jumla iliyolipwa toa kiasi ulichokopa.", "Andika tarehe za marejesho.", "Linganisha kila tarehe na mapato yako katika mwezi mbaya.", "Uliza kuhusu faini za kuchelewa na kuripotiwa kwa credit bureau.", "Uliza kama mkopo una dhamana ya pamoja."],
          words: [["Fedha ndogo (microfinance)", "mikopo midogo na huduma za akiba kwa watu na biashara ndogo."], ["Jumla iliyolipwa", "pesa zote unazorudisha, pamoja na riba na ada."], ["Dhamana ya pamoja", "wanachama wa kikundi lazima walipe kwa niaba ya mwanachama asiyerudisha mkopo."], ["Credit bureau", "kampuni inayorekodi jinsi watu wanavyorudisha mikopo; wakopeshaji huikagua."]],
          slides: [
            { title: "Nani anakopesha", bullets: ["Benki na taasisi za fedha ndogo, mara nyingi kwa vikundi", "Zenye leseni ya benki kuu (CBN, CBK, Benki ya Ghana)", "Nchi za XOF: kanuni za BCEAO"] },
            { title: "Linganisha jumla iliyolipwa", bullets: ["Iombe kwa maandishi, pamoja na ada zote", "Mfano: KES 1,000 x wiki 12 = KES 12,000", "Gharama = KES 12,000 - KES 10,000 = KES 2,000"] },
            { title: "Tarehe na dhamana ya pamoja", bullets: ["Tarehe za marejesho lazima ziendane na mapato yako", "Faini za kuchelewa; credit bureau", "Mikopo ya vikundi: huenda ukawalipia wengine"] }
          ],
          sources: [CBN_MFB, CBK_DCP, BOG, BCEAO_SFD],
          tryIt: "Tumia mfano huu au ofa halisi: kopa NGN 50,000 na ulipe NGN 4,800 kwa wiki kwa wiki 12. Hesabu jumla iliyolipwa na gharama. Kisha andika kama malipo ya kila wiki yanaendana na mapato yako.",
          youCanNow: "kuhesabu jumla utakayolipa kwa mkopo na kukagua kuwa tarehe zinaendana na mapato yako kabla ya kusaini.",
          quickCheck: [
            { objective: "O5", q: "Unakopa GHS 1,000 na unalipa GHS 120 kwa mwezi kwa miezi 10. Jumla iliyolipwa ni kiasi gani?", options: ["GHS 1,000", "GHS 1,120", "GHS 1,200", "GHS 120"], answer: 2, why: "120 x 10 = 1,200." },
            { objective: "O5", q: "Katika mkopo wa kikundi wenye dhamana ya pamoja, mwanachama mmoja anaacha kulipa. Nini kinaweza kutokea?", options: ["Hakuna kitu", "Wanachama wengine lazima walipe kwa niaba yake", "Mkopeshaji anafuta mkopo", "Mwenyekiti wa kikundi peke yake ndiye analipa"], answer: 1, why: "Dhamana ya pamoja inamaanisha wanachama hulipiana mikopo isiyolipwa." }
          ]
        },
        {
          title: "Mipango ya Ponzi, wakopeshaji bandia na mpango wako",
          objectives: ["O6", "O2"],
          minutes: 6,
          goal: "Tambua dalili za hatari za mpango wa Ponzi au mkopeshaji bandia na umkague mtoa huduma kwenye orodha ya mdhibiti.",
          text: [
            "Mpango wa Ponzi huwalipa wanachama wa mwanzo kwa pesa za wanachama wapya. Huanguka kila wakati, na watu wengi hupoteza akiba zao. Dalili za hatari: ahadi za kuzidisha pesa zako mara mbili au faida kubwa iliyohakikishwa kwa muda mfupi, shinikizo la kuwaleta marafiki na familia, zawadi kwa kuleta watu, biashara ambayo hakuna anayeweza kuieleza, na matangazo kupitia vikundi vya WhatsApp, TikTok, Instagram au Telegram na watu maarufu mtandaoni. SEC ya Nigeria (mdhibiti wa masoko ya mitaji) imeonya kuhusu mipango kama hii mara nyingi.",
            "Wakopeshaji bandia na apps za mikopo: wanaomba ada kabla ya kukupa mkopo, wanaomba PIN au nywila yako, wanataka kuona namba zote za simu ulizohifadhi, au wanawatisha na kuwaaibisha wakopaji. Wakopeshaji halisi hawahitaji PIN yako kamwe.",
            "Kagua kabla ya kulipa au kutoa taarifa. Mtafute mtoa huduma kwenye orodha rasmi ya mdhibiti: SASRA kwa SACCO zinazopokea amana na Benki Kuu ya Kenya kwa benki za fedha ndogo na wakopeshaji wa kidijitali nchini Kenya; CBN kwa benki za fedha ndogo na orodha ya FCCPC ya wakopeshaji wa kidijitali walioidhinishwa nchini Nigeria; orodha ya Benki ya Ghana ya taasisi zenye leseni; BCEAO na wizara za fedha za kitaifa katika nchi za XOF. Kama hayumo kwenye orodha, usimtumie.",
            "Kisha maliza mpango wako: lengo, jumla, tarehe, kiasi kwa wiki au kwa mwezi, mahali unapoweka akiba, na majibu ya karatasi yako ya ukaguzi kuhusu kikundi au taasisi."
          ],
          steps: ["Uliza: inaahidi faida iliyohakikishwa au kubwa sana kwa haraka?", "Uliza: inanilipa kwa kuwaleta wengine?", "Uliza: inataka ada kwanza, au PIN yangu?", "Itafute kwenye orodha rasmi ya mdhibiti.", "Haimo kwenye orodha, au kuna dalili yoyote ya hatari: usilipe.", "Andika mpango wako wa akiba wa kila mwezi na karatasi ya ukaguzi."],
          words: [["Mpango wa Ponzi", "udanganyifu unaowalipa wanachama wa zamani kwa pesa za wanachama wapya hadi unapoanguka."], ["Mdhibiti", "chombo rasmi kinachotoa leseni na kusimamia watoa huduma za fedha, kama benki kuu."], ["Mwenye leseni", "aliyeruhusiwa rasmi na mdhibiti kufanya biashara hii."]],
          slides: [
            { title: "Dalili za hatari za Ponzi", bullets: ["\"Zidisha pesa zako mara mbili\"; faida kubwa iliyohakikishwa", "Zawadi kwa kuwaleta marafiki", "Biashara isiyoelezeka; inasukumwa kwenye mitandao ya kijamii"] },
            { title: "Dalili za mkopeshaji bandia", bullets: ["Ada kabla ya mkopo", "Anaomba PIN au nywila yako", "Anataka namba zako zote za simu; anatisha wakopaji"] },
            { title: "Kagua orodha rasmi", bullets: ["Kenya: SASRA, CBK", "Nigeria: CBN, wakopeshaji walioidhinishwa na FCCPC", "Ghana: Benki ya Ghana; XOF: BCEAO"] },
            { title: "Maliza mpango wako", bullets: ["Lengo, jumla, tarehe, kiasi kwa mwezi", "Mahali unapoweka akiba", "Majibu ya karatasi ya ukaguzi"] }
          ],
          sources: [SEC_NG, SASRA, CBK_DCP, FCCPC, BOG, BCEAO_SFD],
          tryIt: "Kazi ya mwisho: andika mpango wako wa akiba wa kila mwezi wenye lengo, jumla, tarehe, kiasi kwa wiki au kwa mwezi na mahali utakapoweka akiba. Ongeza karatasi ya ukaguzi: kanuni za kikundi, jinsi pesa na kumbukumbu zinavyotunzwa, leseni (iliyokaguliwa kwenye orodha ya mdhibiti ikihitajika) na gharama ya jumla ya mkopo wowote.",
          youCanNow: "kutambua mpango wa Ponzi au mkopeshaji bandia, kumkagua mtoa huduma kwenye orodha rasmi, na kufuata mpango wako wa akiba ulioandikwa.",
          quickCheck: [
            { objective: "O6", q: "Kikundi cha WhatsApp kinaahidi kuzidisha pesa zako mara mbili ndani ya siku 30 na kinakulipa kwa kila rafiki unayemleta. Ni nini?", options: ["Kikundi cha akiba", "Benki ya fedha ndogo yenye leseni", "Kikundi cha mzunguko", "Dalili za mpango wa Ponzi"], answer: 3, why: "Faida ya haraka iliyohakikishwa na zawadi kwa kuleta watu ni dalili za kawaida za Ponzi." },
            { objective: "O6", q: "App ya mkopo inaomba \"ada ya usindikaji\" kabla ya kutuma mkopo. Unafanya nini?", options: ["Usilipe; iangalie kwenye orodha ya mdhibiti", "Lipa haraka kabla ofa haijaisha", "Lipa nusu", "Toa PIN yako badala yake"], answer: 0, why: "Ada kabla ya mkopo ni dalili ya mkopeshaji bandia; kagua orodha rasmi kwanza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kumbukumbu, mikopo na kubaki salama",
        questions: [
          { objective: "O4", q: "Nini kinapaswa kufanyika kwa kila mchango katika mkutano?", options: ["Mweka hazina anaupeleka nyumbani kuuhesabu", "Unahesabiwa mbele ya wanachama na kuandikwa katika kitabu cha mwanachama na kitabu cha kumbukumbu", "Unaandikwa wiki ijayo", "Unaenda moja kwa moja kwenye simu ya mwenyekiti"], answer: 1, why: "Kuhesabu na kurekodi mbele ya wanachama huweka kumbukumbu za kweli." },
          { objective: "O4", q: "Akaunti ya kikundi inapaswa kuhitaji:", options: ["Sahihi ya mweka hazina peke yake", "Hakuna sahihi", "Watia sahihi wawili au zaidi", "PIN mpya kwa kila mwanachama"], answer: 2, why: "Zaidi ya mtia sahihi mmoja inazuia mtu mmoja kuchukua pesa." },
          { objective: "O5", q: "Njia bora ya kulinganisha mikopo miwili ni ipi?", options: ["Afisa wa mikopo mwenye urafiki zaidi", "Kiwango cha riba kwenye tangazo", "Idhini ya haraka zaidi", "Jumla utakayolipa, pamoja na ada zote, na tarehe zinazoendana na mapato yako"], answer: 3, why: "Jumla iliyolipwa inaonyesha gharama halisi; tarehe zinaonyesha kama unaweza kulipa." },
          { objective: "O6", q: "Nchini Kenya, unakagua wapi kama SACCO inaruhusiwa kupokea amana?", options: ["Orodha ya SASRA ya SACCO zenye leseni ya kupokea amana", "Ukurasa wa Facebook", "Kipeperushi cha SACCO yenyewe tu", "Neno la rafiki"], answer: 0, why: "SASRA inatoa leseni kwa SACCO zinazopokea amana na inachapisha orodha." },
          { objective: "O6", q: "Ipi ni dalili ya hatari ya mkopeshaji bandia?", options: ["Anatoa gharama ya jumla kwa maandishi", "Anaomba PIN yako au ada kabla ya mkopo", "Yumo kwenye orodha ya benki kuu", "Anaeleza faini za kuchelewa"], answer: 1, why: "Wakopeshaji halisi hawahitaji PIN yako kamwe na hawatozi ada kabla ya kukopesha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Vikundi vya Akiba na Fedha Ndogo (Chama, VSLA, Tontine, Esusu)",
    questions: [
      { objective: "O1", q: "Esusu, susu, tontine na gam'eya kwa kawaida ni:", options: ["Benki za fedha ndogo", "Vikundi vya akiba vya mzunguko", "Apps za mikopo", "Kampuni za bima"], answer: 1, why: "Ni majina ya kienyeji ya vikundi ambamo wanachama huchukua jumla kwa zamu." },
      { objective: "O1", q: "Kikundi cha akiba na mikopo kinafanya nini ambacho kikundi cha mzunguko hakifanyi?", options: ["Kinawakopesha wanachama akiba na kugawa pamoja na mapato", "Kinampa kila mwanachama jumla kwa zamu", "Hakikutani kamwe", "Hakina kanuni"], answer: 0, why: "VSLA au ASCA ina mfuko wa mikopo na hugawa akiba pamoja na ada za huduma." },
      { objective: "O1", q: "Ipi ni hatari ya kikundi cha mzunguko?", options: ["Kinalipa riba kubwa", "Kina leseni ya benki kuu", "Kina sanduku lenye kufuli tatu", "Wanachama waliochukua jumla mapema wanaweza kuacha kulipa"], answer: 3, why: "Wanaopata mapema wakiacha kulipa, wanawaumiza wanachama ambao bado wanasubiri." },
      { objective: "O2", q: "Unahitaji XOF 60,000 katika wiki 12. Kiasi gani kila wiki?", options: ["XOF 6,000", "XOF 12,000", "XOF 4,000", "XOF 5,000"], answer: 3, why: "60,000 ukigawanya kwa 12 ni 5,000." },
      { objective: "O2", q: "\"Jilipe kwanza\" inamaanisha:", options: ["Jinunulie zawadi", "Mlipe mwenyekiti wa kikundi kwanza", "Kopa kabla ya kuweka akiba", "Weka akiba siku pesa zinapoingia, kabla ya matumizi mengine"], answer: 3, why: "Kuweka akiba kwanza kunahakikisha inafanyika kabla pesa hazijatumika." },
      { objective: "O2", q: "Mpango wako unahitaji EGP 900 kwa mwezi lakini unaweza kuweka EGP 600 tu. Unaweza kufanya nini?", options: ["Kukopa kutoka app ya mikopo", "Kuacha kuweka akiba", "Kusogeza tarehe mbele, kupunguza lengo au kupunguza matumizi", "Kujiunga na mpango unaozidisha pesa mara mbili"], answer: 2, why: "Badilisha tarehe, lengo au matumizi yako hadi mpango ufae." },
      { objective: "O2", q: "Kwa nini uweke pesa za dharura tofauti na akiba ya lengo lako?", options: ["Ili tatizo la ghafla lisimalize akiba ya lengo lako", "Kwa sababu benki zinadai hivyo", "Ili kulipa faini za kikundi", "Zinaleta faida zaidi"], answer: 0, why: "Kiasi tofauti cha dharura kinalinda lengo dhidi ya mambo yasiyotarajiwa." },
      { objective: "O3", q: "Katiba ya kikundi ni nini?", options: ["Shajara ya mwenyekiti", "App ya mikopo", "Kanuni zilizoandikwa ambazo wanachama wanakubaliana na kuzifuata", "Sanduku la pesa"], answer: 2, why: "Katiba au sheria ndogo ni kanuni zilizoandikwa za kikundi." },
      { objective: "O3", q: "Kanuni ipi inakuambia nini kinatokea mkopo wa mwanachama usiporudishwa?", options: ["Kanuni ya mikutano", "Kanuni ya mikopo", "Kanuni ya mgao", "Hakuna kanuni yoyote"], answer: 1, why: "Kanuni za mikopo zinahusu nani anakopa, kiasi gani na nini kinatokea mkopo usiporudishwa." },
      { objective: "O3", q: "Kanuni za kikundi hazisemi jinsi mwanachama anavyoondoka. Unafanya nini?", options: ["Kuomba kikundi kiongeze kanuni ya kuondoka kabla ya kujiunga", "Kujiunga hata hivyo", "Kuondoka bila kumwambia mtu", "Kuchukua akiba zako kutoka sanduku"], answer: 0, why: "Kanuni inayokosekana ni swali la kumaliza kabla ya kukiamini kikundi na pesa." },
      { objective: "O4", q: "Kitabu cha mwanachama (passbook) ni nini?", options: ["Kitabu cha mwanachama kinachoonyesha akiba na mikopo yake", "Pasipoti", "Kadi ya benki", "App ya mikopo"], answer: 0, why: "Kitabu cha kila mwanachama kinaonyesha akiba na mikopo yake mwenyewe." },
      { objective: "O4", q: "Mwisho wa kila mkutano:", options: ["Mwenyekiti anaweka pesa nyumbani bila kuzihesabu", "Pesa zilizohesabiwa lazima zilingane na kitabu cha kumbukumbu", "Kumbukumbu zinatupwa", "Mweka hazina peke yake ndiye anasoma jumla"], answer: 1, why: "Pesa na kumbukumbu lazima zilingane, na jumla zisomwe kwa sauti." },
      { objective: "O4", q: "Kwa nini usome jumla kwa sauti katika mikutano?", options: ["Ili mikutano iwe mirefu", "Ili kujionyesha", "Ili kila mwanachama asikie na aweze kukubali hesabu", "Kwa sababu ni sheria kila mahali"], answer: 2, why: "Kusoma kwa sauti kunawaruhusu wanachama wote, pamoja na wasioweza kusoma, kukagua hesabu." },
      { objective: "O5", q: "Unakopa MAD 2,000 na unalipa MAD 250 kwa mwezi kwa miezi 10. Mkopo unagharimu kiasi gani?", options: ["MAD 250", "MAD 2,500", "MAD 2,000", "MAD 500"], answer: 3, why: "Jumla iliyolipwa 2,500 toa 2,000 ulizokopa = 500." },
      { objective: "O5", q: "Unapata pesa hasa baada ya mavuno au wakati wa msimu wa biashara nyingi. Unapaswa kukagua nini katika mkopo?", options: ["Rangi ya fomu", "Aina ya simu ya afisa", "Hakuna kitu", "Tarehe za marejesho ukilinganisha na mapato yako"], answer: 3, why: "Tarehe za marejesho lazima ziendane na wakati pesa zinapoingia." },
      { objective: "O5", q: "Dhamana ya pamoja inamaanisha:", options: ["Wanachama wanalipa kwa niaba ya mwanachama asiyerudisha mkopo", "Benki inalipa mkopo wako", "Hakuna anayerudisha", "Unaweza kukopa mara mbili"], answer: 0, why: "Katika dhamana ya pamoja, kikundi hulipa mikopo isiyolipwa." },
      { objective: "O5", q: "Mkopeshaji anapaswa kukupa nini kabla ya kusaini?", options: ["Simu ya bure", "Kiwango cha riba tu", "Jumla ya kulipa, kwa maandishi, pamoja na ada zote na tarehe", "Kumbukumbu ya mkopo wa jirani yako"], answer: 2, why: "Jumla na tarehe zilizoandikwa zinakuwezesha kulinganisha na kupanga." },
      { objective: "O6", q: "Ipi ni dalili ya hatari ya Ponzi?", options: ["Kanuni zilizoandikwa", "Faida kubwa iliyohakikishwa kwa haraka na zawadi kwa kuleta watu", "Wanachama wanasoma jumla kwa sauti", "Sanduku la pesa lenye kufuli tatu"], answer: 1, why: "Faida ya haraka iliyohakikishwa na zawadi kwa kuleta watu ni dalili za kawaida za Ponzi." },
      { objective: "O6", q: "Nchini Nigeria, unakagua wapi kama app ya mkopo imeidhinishwa?", options: ["Maoni ya watumiaji ndani ya app yenyewe", "Kikundi cha WhatsApp", "Video ya TikTok", "Orodha ya FCCPC ya wakopeshaji wa kidijitali waliosajiliwa"], answer: 3, why: "FCCPC inachapisha hali ya usajili wa wakopeshaji wa kidijitali." },
      { objective: "O6", q: "Mtoa huduma hayumo kwenye orodha ya mdhibiti. Unafanya nini?", options: ["Kumtumia kwa viasi vidogo tu", "Kulipa kama rafiki amemshauri", "Kutomtumia", "Kumpa PIN yako ili akague"], answer: 2, why: "Watoa huduma wasio kwenye orodha hawasimamiwi; pesa zako hazilindwi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Lengo wazi na hesabu", objective: "O2", notYet: "Hakuna jumla au tarehe, au kiasi kwa mwezi hakifikii lengo.", meets: "Lengo, jumla, tarehe na kiasi kwa wiki au kwa mwezi, na hesabu inayolingana.", exceeds: "Pia amelinganisha na mapato ya mwezi mbaya na anaweka pesa za dharura tofauti." },
      { name: "Aina sahihi ya akiba", objective: "O1", notYet: "Hakuna mahali pa kuweka akiba palipochaguliwa, au hakuna sababu.", meets: "Anataja mahali akiba itawekwa na anatoa sababu moja inayofaa lengo na hatari moja.", exceeds: "Analinganisha njia mbili (kwa mfano kikundi cha mzunguko na SACCO) kabla ya kuchagua." },
      { name: "Kanuni za kikundi zimekaguliwa", objective: "O3", notYet: "Kanuni hazikuonekana au mambo chini ya manne kati ya saba yalikaguliwa.", meets: "Angalau mambo sita kati ya saba ya kanuni yamekaguliwa, na yanayokosekana yameorodheshwa kama maswali.", exceeds: "Yote saba yamekaguliwa na kanuni zinazokosekana zimepelekwa kwa kikundi." },
      { name: "Kumbukumbu na usalama wa pesa", objective: "O4", notYet: "Haelezi jinsi pesa na kumbukumbu zinavyotunzwa.", meets: "Anaeleza jinsi pesa zinavyotunzwa (sanduku lenye kufuli tatu au akaunti yenye watia sahihi wawili au zaidi) na kwamba jumla husomwa kwa sauti.", exceeds: "Ameweka jedwali la mfano la kumbukumbu linalolingana." },
      { name: "Gharama ya mkopo na usalama", objective: "O5", notYet: "Mkopo umepangwa bila jumla ya kulipa.", meets: "Mkopo wowote una jumla ya kulipa, gharama na tarehe zilizolinganishwa na mapato; au mpango hauna mkopo.", exceeds: "Pia anataja faini za kuchelewa, kuripotiwa kwa credit bureau na dhamana ya pamoja." },
      { name: "Ukaguzi wa leseni na ulaghai", objective: "O6", notYet: "Mtoa huduma asiye na leseni au mpango wenye dalili za hatari umo katika mpango.", meets: "Taasisi yoyote inayopokea amana au inayokopesha kama biashara imekaguliwa kwenye orodha rasmi ya mdhibiti, na hakuna dalili za hatari.", exceeds: "Anataja orodha aliyotumia na tarehe aliyokagua." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti, baada ya siku 30, kuweka akiba kila wiki au kila mwezi kulingana na mpango wao",
      "Vikundi washirika vinavyoanza kutumia kanuni zilizoandikwa, vitabu vya wanachama na kusoma jumla kwa sauti",
      "Wanafunzi wanaoripoti kukataa mpango wa Ponzi au mkopeshaji asiye na leseni ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi, kalamu na kikokotoo cha simu",
      "Katiba au kanuni za kikundi, kama mwanafunzi yuko katika kikundi",
      "Orodha rasmi ya mdhibiti wa nchi yako (SASRA, CBK, CBN, FCCPC, Benki ya Ghana, BCEAO), iliyofunguliwa mara moja kwenye simu au kuchapishwa",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Inafaa sana kuendeshwa ndani ya chama, VSLA, susu, tontine au kikundi cha wanawake kilichopo: somo moja kwa kila mkutano, na jaribio la awali katika mkutano wa kwanza.",
      "Tumia kanuni za kikundi chenyewe kama maandishi ya mazoezi katika Somo la 3, na mkutano wa kuigiza wenye pesa za kuchezea katika Somo la 4.",
      "Usipendekeze benki, SACCO, app au mpango wowote maalum; wafundishe wanafunzi kukagua orodha ya mdhibiti wao wenyewe.",
      "Hakikisha orodha za wadhibiti ni za sasa kabla ya kipindi; majina na anwani za tovuti zinaweza kubadilika.",
      "Usiwaombe kamwe wanafunzi kutoa PIN, nywila au salio halisi la akaunti zao mbele ya kikundi."
    ]
  }
};
