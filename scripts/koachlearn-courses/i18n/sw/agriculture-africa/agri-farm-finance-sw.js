"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-farm-finance.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const VSLA = { name: "VSL Associates: mbinu ya VSLA (hisa, mfuko wa mikopo, mfuko wa jamii, mzunguko wa mwaka mmoja, kugawana)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya: orodha ya SACCO zenye leseni zinazopokea amana", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: sheria za taasisi za fedha ndogo (systemes financiers decentralises) katika nchi za XOF", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Benki Kuu ya Nigeria (Central Bank of Nigeria): benki za fedha ndogo", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const NIRSAL = { name: "NIRSAL Plc, Nigeria: maelezo ya jumla (dhamana za hatari ya mikopo kwa mikopo ya kilimo)", url: "https://nirsal.com/who-we-are/overview/" };
const GIRSAL = { name: "Graphic Online, Ghana: GIRSAL yatunuku taasisi za fedha kwa kukopesha kilimo", url: "https://www.graphic.com.gh/news/general-news/increasing-lending-support-for-agriculture-sector-girsal-honours-11-financial-institutions-individuals.html" };
const WRSC = { name: "Baraza la Mfumo wa Stakabadhi za Ghala, Kenya (Warehouse Receipt System Council: maghala yaliyothibitishwa na stakabadhi za ghala)", url: "https://www.wrsc.go.ke" };
const GCX_EWR = { name: "MyJoyOnline (31 Oktoba 2019): GCX na ARB Apex Bank wazindua mikopo ya stakabadhi za ghala za kielektroniki", url: "https://www.myjoyonline.com/gcx-arb-apex-bank-launch-gha%C2%A250m-support-for-ghanaian-smallholder-farmers/" };
const GCX_ADEHYEMAN = { name: "Ghana News Agency (Juni 2023): Adehyeman Savings and Loans na Ghana Commodity Exchange washirikiana kusaidia wakulima", url: "https://gna.org.gh/2023/06/adehyeman-ghana-commodity-exchange-partner-to-support-farmers/" };
const OAF = { name: "One Acre Fund: kuhusu sisi (mikopo, pembejeo za shamba na mafunzo; nchi)", url: "https://oneacrefund.org/about-us" };
const ENABLE = { name: "IITA: Sudan yazindua mpango wa ENABLE Youth (mpango wa Benki ya Maendeleo ya Afrika kwa vijana wajasiriamali wa kilimo)", url: "https://iita.org/news-item/sudan-launches-enable-youth-program/" };
const YEDF = { name: "Youth Enterprise Development Fund, Kenya (mikopo kwa biashara za vijana, pamoja na mkopo wa Agri-Biz)", url: "https://www.youthfund.go.ke" };
const DERFJ = { name: "DER/FJ, Senegal: Delegation generale a l'Entrepreneuriat rapide des Femmes et des Jeunes (ujasiriamali wa wanawake na vijana)", url: "https://der.sn" };
const FCCPC = { name: "FCCPC, Nigeria: hali ya usajili wa wakopeshaji wa kidijitali (apps za mikopo zilizoidhinishwa)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const CBK_DCP = { name: "Benki Kuu ya Kenya (Central Bank of Kenya): usimamizi wa benki, pamoja na orodha ya watoa mikopo ya kidijitali wenye leseni", url: "https://www.centralbank.go.ke/bank-supervision/" };

module.exports = {
  id: "agri-farm-finance-sw",
  lang: "sw",
  translationOf: "agri-farm-finance",
  category: "Agriculture (Africa)",
  name: "Kupata Fedha za Shamba Lako: Mikopo, Ruzuku na Wawekezaji",
  skills: "Kukokotoa kiasi cha fedha unachohitaji, Kutumia vikundi vya akiba, VSLA na SACCO, Kulinganisha mikopo ya kilimo na mipango ya kulipa, Kutumia stakabadhi za ghala na mikopo ya pembejeo, Kupata ruzuku halisi na kuepuka ulaghai, Kuandika ombi la fedha la ukurasa mmoja",
  outcome: "kukokotoa hasa kiasi cha fedha shamba lako linachohitaji na lini, kulinganisha vikundi vya akiba, SACCO, mikopo, stakabadhi za ghala, mikopo ya pembejeo na ruzuku, kutambua ulaghai wa mkopo au ruzuku, na kuandika ombi la fedha la ukurasa mmoja ambalo mkopeshaji, mpango au mwekezaji anaweza kulikubali.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wakulima wa kibiashara wanaokua, vijana wajasiriamali wa kilimo, vikundi vya wanawake na vijana, viongozi wa vyama vya ushirika na maafisa ugani nchini Kenya, Nigeria, Ghana, Senegal, Cote d'Ivoire na kote Afrika wanaohitaji fedha kuanza, kuendelea au kukua.",
    "Sura ya 1 inahusu fedha zilizo karibu nawe: kukokotoa kiasi unachohitaji na kwa ajili ya nini, vikundi vya akiba, VSLA na SACCO, na mikopo ya kilimo ya taasisi za fedha ndogo na benki. Sura ya 2 inahusu milango mingine: mikopo ya stakabadhi za ghala na mikopo ya pembejeo kutoka kwa wanunuzi na mipango ya mikataba, ruzuku na mipango ya vijana na jinsi ya kuepuka ulaghai, na kuandika ombi la fedha la ukurasa mmoja. Inajenga juu ya kozi \"Biashara ya Kilimo na Usimamizi wa Shamba\", inayoonyesha jinsi ya kukokotoa gharama yote ya mkopo.",
    "Takwimu zote za fedha ni mifano ya kubuni; viwango vya riba, ada na mipango hubadilika, kwa hiyo kagua ofa ya sasa. Kozi hii inaeleza jinsi kila aina ya fedha inavyofanya kazi na hatari zake. Haitoi ushauri wa kukopa wala wa uwekezaji. Kopa kile tu mpango wako unachohitaji, soma kila mkataba wote, hakikisha mkopeshaji ana leseni, na muulize mshauri unayemwamini kama chama chako cha ushirika, SACCO, afisa ugani au wakili kabla ya kusaini."
  ],
  finalTask: "Andika ombi la fedha la ukurasa mmoja kwa shamba lako (au shamba la mfano): wewe ni nani na shamba lako; fedha ni za nini hasa, kiasi chote, kiasi unachoweka mwenyewe na pengo unaloomba; jinsi fedha zitakavyoleta mapato (gharama kwa kila kipimo, faida ghafi au muda wa kurudisha); aina ya fedha unayoomba na kwa nini inafaa; mpango wa kulipa unaolingana na wakati fedha zako zinapoingia; dhamana zako; hatari zako kuu na jinsi unavyozisimamia; na kumbukumbu zako au historia yako ya kazi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wakulima wa kibiashara wanaokua, vijana wajasiriamali wa kilimo, vikundi vya wanawake na vijana, viongozi wa vyama vya ushirika na maafisa ugani nchini Kenya, Nigeria, Ghana na Afrika Magharibi inayozungumza Kifaransa, wanaolima mazao au kufuga wanyama na samaki, na wanaotaka fedha kuanza, kupanua au kuvuka msimu.",
    startingPoint: "Wengi wamekopa kutoka kwa familia, chama au kikundi cha akiba, duka au app ya mikopo ya simu. Wachache wameandaa bajeti ya maandishi kwa mkopo, wamelinganisha ofa kwa gharama yote na tarehe za kulipa, wametumia stakabadhi ya ghala au wamekagua kama mkopeshaji au mpango ni halisi. Baadhi wamelengwa na ofa za uongo za ruzuku na mikopo.",
    gap: "Mara nyingi wakulima hukopa kiasi kisicho sahihi, kwa wakati usio sahihi, kutoka kwa mkopeshaji asiyefaa, na malipo yanayotakiwa kabla ya mavuno, au hupoteza fedha kwa ruzuku za uongo na apps za mikopo zisizo na leseni. Kujua pengo lao halisi la fedha na chaguo zinazofaa kunawasaidia kukopa kidogo na vizuri zaidi, kutumia akiba za vikundi na mikopo inayolipwa baada ya mavuno, na kuwasilisha ombi lililo wazi ambalo wakopeshaji na mipango wanalichukulia kwa uzito.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la fedha linaelezwa",
      "Vifaa: simu ya kawaida na kikokotoo; daftari kwa bajeti na ombi",
      "Muda: masomo ya dakika 5 hadi 6 yanayoingia kati ya kazi za shamba",
      "Viwango, ada na mipango hubadilika na hutofautiana kati ya nchi: hakuna viwango wala tarehe za mwisho zinazotolewa; wanafunzi wanakagua ofa ya sasa na mdhibiti",
      "Hakuna ushauri wa kukopa wala wa uwekezaji; usiandike kamwe PIN, nywila au taarifa za benki kwenye apps au zana za AI kwa mazoezi"
    ],
    prerequisites: "Hakuna. Kozi \"Biashara ya Kilimo na Usimamizi wa Shamba\" (kumbukumbu, mtiririko wa fedha, gharama ya mkopo) na \"Uhasibu wa Shamba na Usimamizi wa Uwekezaji\" (gharama kwa kila kipimo, muda wa kurudisha) zinasaidia katika hesabu."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mpango wa shamba pamoja na gharama zake", action: "kukokotoa jumla ya fedha zinazohitajika, mchango wako mwenyewe na pengo la fedha, zikigawanywa katika mtaji wa uendeshaji na vifaa, pamoja na mwezi kila moja inapohitajika", standard: "kwa hesabu sahihi na bila matumizi ya nyumbani kuchanganywa ndani" },
    { id: "O2", condition: "Ukipewa kikundi cha akiba, VSLA au SACCO unachoweza kujiunga nacho", action: "kueleza jinsi kuweka akiba, kukopa, udhamini na kugawana vinavyofanya kazi ndani yake na kuorodhesha hatari zake", standard: "ukitaja angalau sheria tatu za kukagua kabla ya kujiunga" },
    { id: "O3", condition: "Ukipewa ofa mbili za mikopo", action: "kulinganisha gharama yote, dhamana na tarehe za kulipa za kila moja na kuchagua inayofaa mavuno yako", standard: "ukikokotoa jumla utakayolipa kwa kila moja na kukagua miezi ya kulipa dhidi ya mtiririko wako wa fedha" },
    { id: "O4", condition: "Ukipewa ofa ya stakabadhi ya ghala au ya mkopo wa pembejeo", action: "kuorodhesha gharama zake, unachotakiwa kufanya na kinachotokea bei au mavuno yakishuka", standard: "ukitaja angalau masharti manne na hatari mbili" },
    { id: "O5", condition: "Ukipewa ruzuku, mpango wa vijana au ofa ya mkopo", action: "kuikagua kwenye tovuti rasmi au orodha ya mdhibiti na kutambua dalili za hatari za ulaghai", standard: "kabla ya kulipa, kutoa taarifa au kutuma maombi" },
    { id: "O6", condition: "Ukitumia takwimu za shamba lako mwenyewe", action: "kuandika ombi la fedha la ukurasa mmoja ambalo mkopeshaji, mpango au mwekezaji anaweza kulitathmini", standard: "likijumuisha lengo, kiasi, mchango wako, jinsi linavyoleta mapato, kulipa, dhamana na hatari" }
  ],
  chapters: [
    {
      name: "Sura 1: Hitaji lako na fedha zilizo karibu nawe",
      lessons: [
        {
          title: "Unahitaji fedha kiasi gani, na kwa ajili ya nini",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kokotoa jumla ya fedha unazohitaji, mchango wako mwenyewe na pengo la fedha, kwa kila mwezi.",
          text: [
            "Kabla ya kutafuta fedha, andika hasa ni za nini. Mtaji wa uendeshaji unalipia mzunguko mmoja wa uzalishaji: mbegu, mbolea, chakula cha mifugo, vifaranga au vifaranga vya samaki, vibarua, huduma za daktari wa mifugo na usafiri. Unarudi unapouza. Vifaa na majengo (pampu, banda, ghala) hudumu miaka mingi na hurudisha fedha polepole. Mara nyingi wakopeshaji huvishughulikia kwa njia tofauti, kwa muda tofauti wa mkopo, kwa hiyo viorodheshe kando.",
            "Mfano (takwimu za kubuni kwa naira), kundi la kuku wa nyama nchini Nigeria: vifaranga, chakula, huduma za daktari wa mifugo na vibarua 1,200,000 (mtaji wa uendeshaji); vyombo vya maji, vyombo vya chakula na matengenezo ya banda 300,000 (vifaa). Jumla 1,500,000. Umeweka akiba ya 500,000. Pengo la fedha = 1,500,000 - 500,000 = 1,000,000. Pengo hilo, si jumla, ndilo unaloliomba.",
            "Kisha weka kila gharama katika mwezi inapohitajika, ukitumia mpango wako wa mtiririko wa fedha, ili uombe fedha unapozihitaji na usilipe riba kwa fedha zilizokaa bila kazi. Weka akiba ndogo ya ziada kwa ajili ya kupanda kwa bei. Usichanganye matumizi ya nyumbani kama ada za shule: kopa kwa ajili ya shamba kile tu shamba linachoweza kulipa."
          ],
          steps: ["Orodhesha kila gharama katika mpango wako.", "Weka alama kwa kila moja: mtaji wa uendeshaji au vifaa.", "Zijumlishe upate jumla ya hitaji.", "Toa fedha utakazoweka mwenyewe.", "Tofauti ndiyo pengo lako la fedha.", "Weka kila gharama katika mwezi inapohitajika, na ongeza akiba ndogo ya ziada."],
          words: [["Mtaji wa uendeshaji", "fedha zinazolipia mzunguko mmoja wa uzalishaji na kurudi unapouza."], ["Pengo la fedha", "fedha unazobaki kuhitaji baada ya mchango wako mwenyewe: jumla ya hitaji - fedha zako."], ["Mchango wako mwenyewe", "fedha au vitu unavyoweka katika mpango wewe mwenyewe."]],
          slides: [
            { title: "Aina mbili za hitaji", bullets: ["Mtaji wa uendeshaji: mzunguko mmoja, unarudi wakati wa kuuza", "Vifaa na majengo: hudumu miaka, hurudisha polepole", "Viorodheshe kando"] },
            { title: "Mfano wa kuku wa nyama (NGN, wa kubuni)", bullets: ["Mtaji wa uendeshaji 1,200,000 + vifaa 300,000 = 1,500,000", "Fedha zako 500,000", "Pengo la fedha 1,000,000: omba hiki"] },
            { title: "Muda na nidhamu", bullets: ["Weka kila gharama katika mwezi wake", "Akiba ndogo ya ziada kwa kupanda kwa bei", "Hakuna matumizi ya nyumbani katika mkopo wa shamba"] }
          ],
          tryIt: "Kwa mpango mmoja kwenye shamba lako, orodhesha kila gharama, weka alama mtaji wa uendeshaji au vifaa, jumlisha, toa fedha zako mwenyewe, na andika pengo la fedha na mwezi kila sehemu inapohitajika.",
          youCanNow: "kukokotoa hasa kiasi cha fedha mpango wa shamba lako unachohitaji, kwa ajili ya nini na lini, na pengo unalohitaji kulipatia fedha.",
          quickCheck: [
            { objective: "O1", q: "Mpango unagharimu 800,000 na una 300,000 zako mwenyewe. Pengo la fedha ni kiasi gani?", options: ["1,100,000", "800,000", "500,000", "300,000"], answer: 2, why: "800,000 - 300,000 = 500,000." },
            { objective: "O1", q: "Kipi ni mtaji wa uendeshaji kwa bwawa la samaki?", options: ["Vifaranga vya samaki na chakula kwa mzunguko mmoja", "Kuchimba bwawa", "Pampu ya maji", "Uzio"], answer: 0, why: "Vifaranga vya samaki na chakula vinatumika katika mzunguko mmoja na fedha hurudi samaki wanapouzwa." }
          ]
        },
        {
          title: "Vikundi vya akiba, VSLA na SACCO",
          objectives: ["O2"],
          minutes: 6,
          goal: "Eleza jinsi VSLA na SACCO zinavyofanya kazi na orodhesha sheria za kukagua kabla ya kujiunga.",
          text: [
            "Chama cha akiba na mikopo cha kijiji (VSLA) ni kikundi, mara nyingi cha wanachama 10 hadi 25, kinachokutana kila wiki. Katika kila mkutano wanachama hununua hisa 1 hadi 5 kwa bei ya hisa ambayo kikundi kinaiweka kwa mwaka. Akiba zinaingia katika mfuko wa mikopo. Kwa kawaida wanachama wanaweza kukopa hadi mara tatu ya akiba zao kwa muda wa hadi miezi mitatu, wakilipa ada ya huduma ambayo kikundi kinaiweka. Vikundi vingi pia vina mfuko mdogo wa jamii kwa dharura. Baada ya kama mwaka mmoja, mikopo yote inalipwa na fedha, pamoja na ada za huduma, zinagawanywa kulingana na akiba ya kila mwanachama.",
            "SACCO (chama cha ushirika cha akiba na mikopo; katika Afrika Magharibi inayozungumza Kifaransa, mutuelle au caisse) ni chama cha ushirika cha fedha kinachomilikiwa na wanachama, mara nyingi kikubwa zaidi na rasmi zaidi. Unaweka akiba mara kwa mara, na mara nyingi mikopo inahusiana na kiasi ulichoweka akiba na inahitaji wadhamini: wanachama wanaoahidi kulipa usipolipa. Nchini Kenya, SASRA inatoa leseni kwa SACCO zinazopokea amana na inachapisha orodha. Katika nchi za faranga ya CFA, taasisi za fedha ndogo na vyama vya mikopo vinafuata sheria za BCEAO.",
            "Kabla ya kujiunga, kagua: katiba au kanuni za maandishi, bei ya hisa au kiasi cha akiba, sheria za mikopo na ada, jinsi fedha zinavyowekwa salama (sanduku la fedha lenye kufuli au akaunti yenye leseni), jinsi kumbukumbu zinavyowekwa na kusomwa kwa sauti, na maana ya kuwa mdhamini. Ukimdhamini rafiki mkopo na asilipe, huenda ukalazimika kulipa wewe."
          ],
          steps: ["Omba kuona sheria za maandishi za kikundi.", "Kagua bei ya hisa au kiasi cha akiba na siku za mikutano.", "Kagua ukubwa wa mkopo, muda wake na ada ya huduma.", "Kagua jinsi fedha taslimu na kumbukumbu zinavyowekwa salama.", "Uliza maana ya kuwa mdhamini kwako.", "Kwa SACCO, hakikisha imesajiliwa au ina leseni."],
          words: [["VSLA", "chama cha akiba na mikopo cha kijiji: kikundi kinachoweka akiba kila wiki, kinakopesha wanachama na kugawana mwisho wa mzunguko."], ["Kugawana", "siku ambayo kikundi kinalipa akiba zote na mapato kwa wanachama kulingana na akiba zao."], ["SACCO", "chama cha ushirika cha akiba na mikopo: kikundi kinachomilikiwa na wanachama kinachopokea akiba na kutoa mikopo."], ["Mdhamini", "mtu anayeahidi kulipa mkopo ikiwa mkopaji hatalipa."]],
          slides: [
            { title: "VSLA: jinsi inavyofanya kazi", bullets: ["Wanachama 10-25 wanakutana kila wiki; wananunua hisa 1-5", "Kopa hadi mara 3 ya akiba kwa hadi miezi 3", "Kugawana baada ya kama mwaka mmoja"] },
            { title: "SACCO", bullets: ["Chama cha ushirika cha akiba na mikopo kinachomilikiwa na wanachama", "Mikopo inahusiana na akiba; wadhamini", "Kenya: kagua orodha ya SASRA ya SACCO zenye leseni"] },
            { title: "Kagua kabla ya kujiunga", bullets: ["Sheria za maandishi; kiasi cha akiba", "Ukubwa wa mkopo, muda, ada", "Fedha na kumbukumbu salama; wajibu wa mdhamini"] }
          ],
          sources: [VSLA, SASRA, BCEAO_SFD],
          tryIt: "Uliza kikundi cha akiba, VSLA au SACCO kilicho karibu nawe (au tumia mfano) sheria zake. Andika kiasi cha akiba, ukubwa wa mkopo, muda wa mkopo, ada, jinsi fedha taslimu zinavyowekwa salama, na kile mdhamini anachotakiwa kufanya.",
          youCanNow: "kueleza jinsi vikundi vya akiba, VSLA na SACCO vinavyofanya kazi na kukagua sheria zake kabla ya kujiunga au kudhamini mkopo.",
          quickCheck: [
            { objective: "O2", q: "Katika VSLA, fedha zinagawanywaje mwisho wa mzunguko?", options: ["Sawa kwa wote, bila kujali kila mmoja aliweka kiasi gani", "Kwa mwenyekiti", "Kwa aliyekopa zaidi", "Kulingana na akiba ya kila mwanachama"], answer: 3, why: "Wanachama walionunua hisa nyingi zaidi wanapata sehemu kubwa zaidi ya jumla." },
            { objective: "O2", q: "Unamdhamini rafiki mkopo wa SACCO na anaacha kulipa. Nini kinaweza kutokea?", options: ["Hakuna; udhamini ni utaratibu tu", "Huenda ukalazimika kulipa sehemu au mkopo wote", "SACCO inafuta mkopo", "Familia ya rafiki yako inalipa yenyewe"], answer: 1, why: "Mdhamini anaahidi kulipa ikiwa mkopaji hatalipa." }
          ]
        },
        {
          title: "Mikopo ya kilimo ya taasisi za fedha ndogo na benki",
          objectives: ["O3"],
          minutes: 6,
          goal: "Linganisha ofa mbili za mikopo kwa gharama yote, dhamana na jinsi malipo yanavyolingana na mavuno yako.",
          text: [
            "Benki na taasisi za fedha ndogo hukopesha kiasi kidogo, mara nyingi kwa vikundi; benki za biashara na za kilimo hukopesha kiasi kikubwa, mara nyingi kwa dhamana zaidi. Uliza kama riba ni kwa mwezi au kwa mwaka, na kama ni riba ya kiwango bapa au ya salio linalopungua. Kiwango bapa kinatoza riba kwa kiasi chote kwa muda wote wa mkopo; riba ya salio linalopungua inatoza tu kwa kile unachodaiwa bado, kwa hiyo namba ileile inagharimu kidogo. Ongeza kila ada na gharama ya bima upate jumla utakayolipa.",
            "Dhamana ni kile mkopeshaji anachoweza kuchukua usipolipa: hati ya ardhi, gari, vifaa, akiba inayoshikiliwa na mkopeshaji, udhamini wa kikundi, au stakabadhi ya ghala. Baadhi ya serikali zinawaunga mkono wakopeshaji kwa dhamana za mikopo, kama NIRSAL nchini Nigeria (hadi 75% ya kinga kwa wakopeshaji) na GIRSAL nchini Ghana. Hizi zinamlinda mkopeshaji na zinaweza kuzifanya benki ziwe tayari zaidi kuwakopesha wakulima, lakini bado unadaiwa mkopo wote.",
            "Linganisha malipo na mavuno yako. Mfano (takwimu za kubuni kwa shilingi za Kenya), kukopa 100,000 kwa msimu wa mahindi: Ofa A ni 10,000 kila mwezi kwa miezi 12 kuanzia mwezi ujao, jumla 120,000. Ofa B ni malipo moja ya 112,000 katika mwezi 6, baada ya mavuno. B inagharimu kidogo na inalipwa fedha zako zinapoingia; A inaomba malipo kabla hujauza chochote. Omba muda wa msamaha au kulipa wakati wa mavuno, na hakikisha mkopeshaji ana leseni ya benki kuu."
          ],
          steps: ["Uliza: riba kwa mwezi au kwa mwaka? Kiwango bapa au salio linalopungua?", "Ongeza riba, ada na bima upate jumla utakayolipa.", "Uliza dhamana au udhamini unaohitajika.", "Weka tarehe za kulipa kwenye mpango wako wa mtiririko wa fedha.", "Omba muda wa msamaha au kulipa wakati wa mavuno ikihitajika.", "Hakikisha mkopeshaji ana leseni; soma mkataba wote."],
          words: [["Kiwango bapa", "riba inayotozwa kwa kiasi chote ulichokopa kwa muda wote wa mkopo, hata unapolipa."], ["Salio linalopungua", "riba inayotozwa tu kwa kiasi unachodaiwa bado."], ["Dhamana", "kitu ambacho mkopeshaji anaweza kuchukua usipolipa."], ["Muda wa msamaha", "muda mwanzoni mwa mkopo ambao hutakiwi kulipa."], ["Dhamana ya mkopo", "ahadi ya mtu au taasisi ya tatu kulipia sehemu ya hasara ya mkopeshaji ikiwa mkopaji hatalipa."]],
          slides: [
            { title: "Ijue riba", bullets: ["Kwa mwezi au kwa mwaka?", "Kiwango bapa: riba kwa kiasi chote muda wote", "Salio linalopungua: tu kwa kile unachodaiwa bado"] },
            { title: "Dhamana na udhamini", bullets: ["Hati ya ardhi, vifaa, akiba, udhamini wa kikundi", "NIRSAL (Nigeria), GIRSAL (Ghana) zinaunga mkono wakopeshaji", "Bado unadaiwa mkopo wote"] },
            { title: "Linganisha malipo na mavuno (mfano KES)", bullets: ["A: 10,000 x 12 kuanzia mwezi ujao = 120,000", "B: 112,000 mara moja katika mwezi 6, baada ya mavuno", "B inagharimu kidogo na inafaa wakati fedha zinapoingia"] }
          ],
          sources: [CBN_MFB, NIRSAL, GIRSAL],
          tryIt: "Chukua ofa mbili za mikopo, halisi au za mfano. Kwa kila moja, andika kiasi, riba (kwa mwezi au mwaka, bapa au salio linalopungua), ada, jumla utakayolipa, dhamana na miezi ya kulipa. Weka alama miezi ya kulipa kwenye mpango wako wa mtiririko wa fedha na uchague inayofaa zaidi.",
          youCanNow: "kulinganisha ofa za mikopo kwa gharama yote, dhamana na muda wa kulipa na kuchagua inayofaa mavuno yako.",
          quickCheck: [
            { objective: "O3", q: "Mikopo miwili inaonyesha namba ileile, 2% kwa mwezi. Mmoja ni kiwango bapa, mwingine salio linalopungua. Upi kwa kawaida unagharimu kidogo?", options: ["Mkopo wa kiwango bapa", "Inagharimu sawa kila wakati", "Mkopo wa salio linalopungua", "Inategemea rangi ya fomu"], answer: 2, why: "Salio linalopungua linatoza tu kwa kile unachodaiwa bado, kwa hiyo jumla ya riba ni ndogo zaidi." },
            { objective: "O3", q: "Mahindi yako yanauzwa katika mwezi 6. Mpango upi wa kulipa unafaa zaidi?", options: ["Malipo ya kila wiki kuanzia wiki 1", "Malipo ya kila mwezi kuanzia mwezi ujao", "Malipo ya kila siku", "Muda wa msamaha na kulipa baada ya mavuno"], answer: 3, why: "Kulipa fedha za mavuno zinapoingia kunaepusha malipo yaliyokosekana na kulazimika kuuza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Hitaji lako na fedha zilizo karibu nawe",
        questions: [
          { objective: "O1", q: "Kwa nini uorodheshe mtaji wa uendeshaji na vifaa kando?", options: ["Wakopeshaji wanaweza kuvishughulikia tofauti kwa sababu vinarudisha fedha kwa muda tofauti", "Inafanya orodha iwe ndefu zaidi", "Vifaa havihitaji fedha kamwe", "Hakuna sababu"], answer: 0, why: "Mtaji wa uendeshaji unarudi katika mzunguko mmoja; vifaa vinarudisha kwa miaka." },
          { objective: "O1", q: "Je, uongeze ada za shule katika ombi la mkopo wa shamba?", options: ["Ndiyo, kila wakati", "Ndiyo, ikiwa mkopeshaji hauulizi", "Hapana, kopa kwa ajili ya shamba kile tu shamba linachoweza kulipa", "Wakati wa kiangazi tu"], answer: 2, why: "Matumizi ya nyumbani hayaleti mapato, kwa hiyo yanafanya mkopo wa shamba kuwa mgumu zaidi kulipa." },
          { objective: "O2", q: "Katika VSLA ya kawaida, mwanachama anaweza kukopa kiasi gani kwa kawaida?", options: ["Kiasi chochote", "Hadi kama mara tatu ya akiba yake", "Akiba yake mwenyewe tu", "Mara kumi ya akiba yake"], answer: 1, why: "Mikopo ya VSLA kwa kawaida ina kikomo cha kama mara tatu ya akiba ya mwanachama." },
          { objective: "O2", q: "Ni taasisi gani nchini Kenya inayotoa leseni kwa SACCO zinazopokea amana?", options: ["KALRO", "KAMIS", "Kenya Meteorological Department", "SASRA"], answer: 3, why: "SASRA inatoa leseni na kusimamia SACCO zinazopokea amana na inaziorodhesha." },
          { objective: "O3", q: "Kopa 50,000, lipa 5,000 kila mwezi kwa miezi 12 pamoja na ada ya 2,000. Gharama yote ya mkopo ni kiasi gani?", options: ["12,000", "60,000", "10,000", "2,000"], answer: 0, why: "Unalipa 60,000 + 2,000 = 62,000, ambayo ni 12,000 zaidi ya ulichokopa." }
        ]
      }
    },
    {
      name: "Sura 2: Milango mingine ya fedha, na kuziomba",
      lessons: [
        {
          title: "Stakabadhi za ghala na mikopo ya pembejeo",
          objectives: ["O4"],
          minutes: 6,
          goal: "Orodhesha gharama, wajibu na hatari za mkopo wa stakabadhi ya ghala na ofa ya mkopo wa pembejeo.",
          text: [
            "Mkopo wa stakabadhi ya ghala: unapeleka mazao safi, makavu na yaliyopangwa kwa daraja kwenye ghala lililothibitishwa. Yanapimwa uzito na kukaguliwa, nawe unapata stakabadhi inayothibitisha kwamba unamiliki kiasi hicho na ubora huo. Benki mshirika inaweza kukopesha kwa kutumia stakabadhi, kwa hiyo unapata fedha sasa na unaweza kuuza baadaye bei zikiwa nzuri zaidi; mkopo unalipwa kutoka kwa mauzo. Nchini Kenya, Baraza la Mfumo wa Stakabadhi za Ghala (Warehouse Receipt System Council) linathibitisha maghala. Nchini Ghana, Ghana Commodity Exchange na ARB Apex Bank walizindua mikopo ya stakabadhi za ghala za kielektroniki mwaka 2019, na mwaka 2023 kampuni ya akiba na mikopo ilijiunga kutoa mikopo inayotegemea mazao ambayo wakulima hulipa baada ya kuuza. Muulize mkopeshaji atakopesha sehemu gani ya thamani ya mazao na kwa muda gani.",
            "Gharama na hatari: ada za kuhifadhi na kushughulikia, bima, riba na usafiri. Bei zikishuka badala ya kupanda, mauzo huenda yasitoshe kulipa mkopo na ada. Mazao lazima yafikie daraja, kwa hiyo kukausha au kuchambua vibaya kunapunguza thamani yake. Kokotoa bei unayohitaji kwa njia ya kulinganisha gharama na mapato ya kuhifadhi kutoka kozi ya kudhibiti hatari.",
            "Mkopo wa pembejeo: mnunuzi, mchakataji, mpango wa wakulima wa mkataba (outgrower) au shirika linakupa mbegu, mbolea au vifaranga kwa mkopo, mara nyingi pamoja na mafunzo, nawe unalipa kwa awamu au gharama inakatwa kutoka kwa malipo yako ya mavuno. One Acre Fund inafanya kazi hivi na wakulima nchini Kenya, Nigeria na nchi nyingine. Kagua: bei za pembejeo ukilinganisha na bei za fedha taslimu, ada zote, kiasi kinachokatwa wakati wa mavuno, kama lazima uwauzie wao tu, kinachotokea mavuno yakishindwa, na adhabu ya kuuza kwa mnunuzi mwingine."
          ],
          steps: ["Stakabadhi ya ghala: tafuta ghala lililothibitishwa na wakopeshaji washirika wake.", "Uliza ada za kuhifadhi, kushughulikia, bima na mkopo.", "Uliza unaweza kukopa kiasi gani kwa mazao hayo na kwa muda gani.", "Kokotoa bei ya kuuza unayohitaji kulipa kila kitu.", "Mkopo wa pembejeo: linganisha bei za pembejeo na bei za fedha taslimu na orodhesha kila ada.", "Uliza kinachotokea mavuno yakishindwa na kama lazima uwauzie wao tu."],
          words: [["Stakabadhi ya ghala", "hati kutoka ghala lililothibitishwa inayothibitisha kwamba unamiliki mazao yaliyohifadhiwa ya kiasi na ubora fulani."], ["Ghala lililothibitishwa", "ghala lililokaguliwa na kuidhinishwa kuhifadhi mazao kwa usalama na kutoa stakabadhi."], ["Mkopo wa pembejeo", "mbegu, mbolea au pembejeo nyingine zinazotolewa sasa na kulipiwa baadaye, mara nyingi kutoka kwa mavuno."], ["Mpango wa wakulima wa mkataba (outgrower)", "utaratibu ambapo kampuni inawapa wakulima pembejeo na ushauri na kununua mazao yao."]],
          slides: [
            { title: "Mikopo ya stakabadhi za ghala", bullets: ["Peleka mazao yaliyopangwa kwa daraja; pata stakabadhi", "Kopa kwa kuitumia; uza baadaye", "Kenya: Baraza la WRS; Ghana: maghala ya GCX"] },
            { title: "Gharama na hatari", bullets: ["Kuhifadhi, kushughulikia, bima, riba", "Bei zinaweza kushuka badala ya kupanda", "Mazao lazima yafikie daraja"] },
            { title: "Mkopo wa pembejeo", bullets: ["Pembejeo sasa, zinalipwa kwa awamu au wakati wa mavuno", "Wanunuzi, wachakataji, mipango ya outgrower, One Acre Fund", "Linganisha na bei za fedha taslimu; orodhesha ada zote"] },
            { title: "Uliza kabla ya kusaini", bullets: ["Nini kinakatwa wakati wa mavuno?", "Je, lazima uwauzie wao tu?", "Itakuwaje mavuno yakishindwa?"] }
          ],
          sources: [WRSC, GCX_EWR, GCX_ADEHYEMAN, OAF],
          tryIt: "Chagua ama mkopo wa stakabadhi ya ghala ama ofa ya mkopo wa pembejeo karibu nawe (au mfano). Andika angalau masharti manne (gharama, kiasi, muda, makato au sheria za kuuza) na hatari mbili, na useme kama inafaa shamba lako.",
          youCanNow: "kueleza jinsi mikopo ya stakabadhi za ghala na mikopo ya pembejeo inavyofanya kazi na kukagua gharama na hatari zake kabla ya kusaini.",
          quickCheck: [
            { objective: "O4", q: "Stakabadhi ya ghala inathibitisha nini?", options: ["Kwamba unamiliki kiasi na ubora fulani wa mazao yaliyohifadhiwa", "Kwamba umelipa kodi zako", "Kwamba bei itapanda", "Kwamba benki imeidhinisha mkopo"], answer: 0, why: "Stakabadhi ni uthibitisho wa umiliki wa mazao yaliyopangwa kwa daraja na kuhifadhiwa, ambao mkopeshaji anaweza kuukubali." },
            { objective: "O4", q: "Mpango wa mkopo wa pembejeo unakata gharama ya pembejeo kutoka kwa malipo yako ya mavuno. Unapaswa kukagua nini?", options: ["Aina ya mbegu tu", "Hakuna; kampuni inaamua", "Bei za pembejeo ukilinganisha na bei za fedha taslimu, ada zote na kinachotokea mavuno yakishindwa", "Tarehe ya mafunzo tu"], answer: 2, why: "Masharti haya yanaamua kiasi unacholipa kweli na nani anabeba hasara ya mazao kushindwa." }
          ]
        },
        {
          title: "Ruzuku, mipango ya vijana na kuepuka ulaghai",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kagua ruzuku, mpango wa vijana au ofa ya mkopo kwenye chanzo rasmi na utambue dalili za ulaghai.",
          text: [
            "Ruzuku hazilipwi, lakini kuna ushindani mkubwa, zina sheria za jinsi unavyotumia fedha, na zinaomba ripoti. \"Mifuko ya vijana\" mingi kwa kweli ni mikopo au mafunzo. Mifano unayoweza kukagua: mpango wa ENABLE Youth wa Benki ya Maendeleo ya Afrika (AfDB) unafundisha na kusaidia vijana wajasiriamali wa kilimo katika nchi kadhaa za Afrika, pamoja na washirika kama IITA; Youth Enterprise Development Fund ya Kenya inatoa mikopo kwa biashara za vijana, pamoja na mkopo wa Agri-Biz; DER/FJ ya Senegal inafadhili miradi ya wanawake na vijana, pamoja na katika kilimo, hasa kupitia mikopo. Mipango inafunguliwa na kufungwa na inabadilisha sheria zake: daima kagua kwenye tovuti rasmi au ofisi kwamba wito uko wazi sasa kabla ya kutuma maombi.",
            "Walaghai wanaiga majina na nembo za mipango halisi kwenye mitandao ya kijamii na WhatsApp. Dalili za hatari: lazima ulipe ada ya \"kushughulikia\" au ya \"usajili\" kabla ya kupata ruzuku au mkopo; idhini \"imehakikishwa\"; unaharakishwa; unaombwa PIN yako, msimbo wa mara moja au picha za kitambulisho kwa ujumbe; mhusika anatumia namba au barua pepe binafsi; au app ya mikopo inataka kufikia namba zako zote za simu. Mipango halisi haitozi ada ya kutuma maombi na kamwe haiombi PIN yako.",
            "Kagua kila mkopeshaji na app ya mikopo: nchini Kenya, Benki Kuu ya Kenya inachapisha orodha ya watoa mikopo ya kidijitali wenye leseni na SASRA inaorodhesha SACCO zenye leseni; nchini Nigeria, FCCPC inachapisha rejista ya wakopeshaji wa kidijitali walioidhinishwa na Benki Kuu ya Nigeria inatoa leseni kwa benki za fedha ndogo; katika nchi za faranga ya CFA, kagua na BCEAO au ofisi ya kitaifa ya fedha ndogo. Ukiwa na shaka, muulize chama chako cha ushirika au afisa ugani."
          ],
          steps: ["Tafuta mpango kwenye tovuti au ofisi yake rasmi, si tangazo la mitandao ya kijamii.", "Hakikisha wito uko wazi sasa na usome sheria.", "Usilipe kamwe ada ya kutuma maombi au ya kupokea ruzuku.", "Usitoe kamwe PIN yako, msimbo wa mara moja au nywila.", "Kagua wakopeshaji na apps za mikopo kwenye orodha ya mdhibiti.", "Muulize chama chako cha ushirika au afisa ugani ukiwa na shaka."],
          words: [["Ruzuku", "fedha zinazotolewa kwa lengo fulani ambazo hazilipwi, kwa kawaida pamoja na sheria na ripoti."], ["Wito wa maombi", "tangazo kwamba mpango unapokea maombi, pamoja na tarehe ya kuanza na ya mwisho."], ["Ulaghai", "hila ya kuiba fedha au taarifa."], ["Mdhibiti", "taasisi rasmi inayotoa leseni na kusimamia wakopeshaji, SACCO au kampuni za bima."]],
          slides: [
            { title: "Ruzuku na mipango ya vijana", bullets: ["Ruzuku: hazilipwi, lakini kuna ushindani, zina sheria", "Mifuko mingi ya vijana ni mikopo au mafunzo", "Hakikisha wito uko wazi sasa, kwenye tovuti rasmi"] },
            { title: "Mifano ya kukagua", bullets: ["AfDB ENABLE Youth (pamoja na IITA)", "Kenya: mikopo ya Youth Enterprise Development Fund", "Senegal: DER/FJ kwa wanawake na vijana"] },
            { title: "Dalili za hatari za ulaghai", bullets: ["Ada ya kutuma maombi au ya kupokea fedha", "Idhini \"imehakikishwa\"; wanakuharakisha", "Wanaomba PIN, msimbo au picha za kitambulisho kwa ujumbe"] },
            { title: "Kagua kwa mdhibiti", bullets: ["Kenya: wakopeshaji wa kidijitali wa CBK; SACCO za SASRA", "Nigeria: apps za mikopo za FCCPC; fedha ndogo za CBN", "Nchi za CFA: BCEAO au ofisi ya kitaifa"] }
          ],
          sources: [ENABLE, YEDF, DERFJ, CBK_DCP, FCCPC],
          tryIt: "Tafuta ruzuku moja, mpango wa vijana au app ya mikopo uliyowahi kusikia. Ikague kwenye tovuti rasmi au orodha ya mdhibiti, na uandike: je, ni halisi, je, iko wazi sasa, je, ni ruzuku au mkopo, na dalili zozote za hatari unazoziona.",
          youCanNow: "kukagua kama ruzuku, mpango au mkopeshaji ni halisi na yuko wazi, na kutambua dalili za hatari za ulaghai.",
          quickCheck: [
            { objective: "O5", q: "Ujumbe wa WhatsApp unasema umeshinda ruzuku ya shamba na lazima ulipe ada ya kushughulikia ya 5,000. Hii ni nini?", options: ["Hatua ya kawaida ya ruzuku", "Dalili ya hatari ya ulaghai", "Sheria ya serikali", "Malipo ya mkopo"], answer: 1, why: "Ruzuku halisi hazikutozi ada ili upokee fedha." },
            { objective: "O5", q: "Nchini Nigeria, unaweza kukagua wapi kama app ya mikopo imeidhinishwa?", options: ["Tangazo la app yenyewe", "Maoni ya rafiki", "Idadi ya mara ilivyopakuliwa", "Rejista ya FCCPC ya wakopeshaji wa kidijitali"], answer: 3, why: "FCCPC inachapisha orodha ya wakopeshaji wa kidijitali walioidhinishwa." }
          ]
        },
        {
          title: "Kuandika ombi la fedha la ukurasa mmoja",
          objectives: ["O6"],
          minutes: 6,
          goal: "Andika ombi la fedha la ukurasa mmoja kwa shamba lako.",
          text: [
            "Ombi la fedha linamweleza mkopeshaji, mpango au mwekezaji unachohitaji, kwa nini, na jinsi kitakavyolipwa au kuleta faida. Liweke kwenye ukurasa mmoja wenye vichwa vilivyo wazi: wewe ni nani na shamba lako (mahali, ardhi, shughuli, miaka ya kulima); lengo na kiasi (jumla ya hitaji, mchango wako mwenyewe, pengo unaloomba, likigawanywa katika mtaji wa uendeshaji na vifaa); jinsi linavyoleta mapato (gharama kwa kila kipimo, faida ghafi au muda wa kurudisha kutoka kwa kumbukumbu zako); fedha unazoomba na kwa nini zinafaa; mpango wa kulipa kwa kila mwezi, unaolingana na mtiririko wako wa fedha; dhamana au udhamini; hatari na jinsi unavyozisimamia (bima, mikataba, kugawanya shughuli, kuhifadhi); na historia yako ya kazi (kumbukumbu zilizowekwa, mikopo iliyolipwa zamani, uanachama wa kikundi).",
            "Wawekezaji ni tofauti na wakopeshaji. Mwekezaji anaweka fedha ili apate sehemu ya biashara na faida zake za baadaye (umiliki wa hisa), badala ya kulipwa kwa riba. Kwa kawaida wawekezaji wa hisa hutafuta biashara zinazokua kama wachakataji au mashamba makubwa yenye kumbukumbu na timu. Unaachia sehemu ya umiliki na sehemu ya udhibiti, kwa hiyo pata ushauri wa kisheria na kamwe usisaini usichoelewa.",
            "Kabla ya kulituma, kagua hesabu mara mbili, muombe kiongozi wa chama cha ushirika, afisa ugani au mshauri alisome, na ambatisha kumbukumbu zako. Usiweke kamwe nywila, PIN au taarifa kamili za benki katika ombi; zitoe tu kupitia utaratibu rasmi wa mkopeshaji."
          ],
          steps: ["Wewe ni nani na shamba lako.", "Lengo, jumla ya hitaji, mchango wako na pengo.", "Jinsi linavyoleta mapato: gharama kwa kila kipimo, faida au muda wa kurudisha.", "Aina ya fedha na mpango wa kulipa kwa kila mwezi.", "Dhamana au udhamini; hatari na jinsi unavyozisimamia.", "Historia ya kazi; kagua hesabu na muombe mshauri alisome."],
          words: [["Ombi la fedha", "hati fupi inayomwomba mkopeshaji, mpango au mwekezaji fedha, ikionyesha lengo, kiasi na kulipa."], ["Umiliki wa hisa (equity)", "sehemu ya umiliki wa biashara ambayo mwekezaji anaipata kwa fedha zake."], ["Historia ya kazi", "uthibitisho wa ulichofanya zamani, kama kumbukumbu zilizowekwa na mikopo iliyolipwa."]],
          slides: [
            { title: "Ukurasa mmoja, vichwa vilivyo wazi", bullets: ["Wewe ni nani na shamba lako", "Lengo, jumla ya hitaji, fedha zako, pengo", "Jinsi linavyoleta mapato: gharama kwa kipimo, faida, muda wa kurudisha"] },
            { title: "Kulipa na dhamana", bullets: ["Kulipa kwa kila mwezi, kulingana na mtiririko wa fedha", "Dhamana au udhamini", "Hatari na jinsi unavyozisimamia"] },
            { title: "Wawekezaji ni tofauti", bullets: ["Fedha kwa sehemu ya biashara (umiliki wa hisa)", "Unaachia sehemu ya umiliki na udhibiti", "Pata ushauri wa kisheria kwanza"] },
            { title: "Kabla ya kutuma", bullets: ["Kagua hesabu mara mbili; ambatisha kumbukumbu", "Muombe mshauri alisome", "Hakuna PIN wala nywila katika ombi"] }
          ],
          tryIt: "Kazi ya mwisho: andika ombi lako la fedha la ukurasa mmoja lenye lengo, jumla ya hitaji, mchango wako na pengo, jinsi linavyoleta mapato, aina ya fedha na kwa nini, mpango wa kulipa kwa kila mwezi, dhamana, hatari na historia yako ya kazi. Muombe mtu mmoja unayemwamini alisome.",
          youCanNow: "kuandika ombi la fedha la ukurasa mmoja lililo wazi, linaloungwa mkono na hesabu zako mwenyewe, ambalo mkopeshaji, mpango au mwekezaji anaweza kulitathmini.",
          quickCheck: [
            { objective: "O6", q: "Ombi lako linapaswa kuomba kiasi gani?", options: ["Pengo la fedha baada ya mchango wako mwenyewe", "Gharama yote, bila kuhesabu fedha zako", "Kiasi chochote mkopeshaji atakachotoa", "Mara mbili ya gharama yote kwa usalama"], answer: 0, why: "Kuomba pengo kunaonyesha kujitolea kwako na kunaweka mkopo mdogo iwezekanavyo." },
            { objective: "O6", q: "Mwekezaji wa hisa anapata nini kwa fedha zake?", options: ["Riba ya kila mwezi isiyobadilika tu", "Hakuna kitu", "Sehemu ya biashara na faida zake za baadaye", "Hati ya ardhi yako"], answer: 2, why: "Umiliki wa hisa maana yake ni kumiliki sehemu ya biashara." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Milango mingine ya fedha, na kuziomba",
        questions: [
          { objective: "O4", q: "Katika mkopo wa stakabadhi ya ghala, nini kinatokea bei zikishuka badala ya kupanda?", options: ["Benki inafuta mkopo", "Mauzo huenda yasitoshe kulipa mkopo na ada", "Ghala linalipa tofauti", "Hakuna kinachobadilika"], answer: 1, why: "Bado unadaiwa mkopo na ada bila kujali bei." },
          { objective: "O4", q: "Ipi ni sheria ya kawaida katika mpango wa outgrower au wa mkopo wa pembejeo?", options: ["Hulipi kamwe", "Lazima uuze kwa mtu yeyote isipokuwa wao", "Pembejeo ni bure kila wakati", "Gharama ya pembejeo inakatwa kutoka kwa malipo yako ya mavuno"], answer: 3, why: "Mipango mingi inarudisha gharama ya pembejeo wanaponunua mazao yako." },
          { objective: "O5", q: "Kabla ya kutuma maombi kwa mpango wa vijana wajasiriamali wa kilimo, unapaswa kwanza:", options: ["Kukagua kwenye tovuti rasmi kwamba wito uko wazi sasa", "Kulipa ada ya usajili", "Kutuma PIN yako kwa waandaaji", "Kuushiriki kwenye mitandao ya kijamii"], answer: 0, why: "Mipango inafunguliwa na kufungwa; tovuti rasmi inaonyesha kilicho halisi na cha sasa." },
          { objective: "O5", q: "App ya mikopo inaomba kufikia namba zote za simu ulizohifadhi. Hii ni:", options: ["Sheria ya kawaida ya benki", "Inatakiwa na sheria", "Dalili ya hatari; hakikisha kwanza app ina leseni", "Dalili ya mkopeshaji mzuri"], answer: 2, why: "Apps zisizo na leseni hutumia orodha za namba kuwaaibisha wakopaji; kagua orodha ya mdhibiti." },
          { objective: "O6", q: "Kipi kinafaa kuwa katika ombi la fedha la ukurasa mmoja?", options: ["PIN yako ya pesa kwa simu", "Mpango wa kulipa wa kila mwezi unaolingana na mtiririko wako wa fedha", "Kurasa kumi za picha tu", "Madeni ya majirani zako"], answer: 1, why: "Wakopeshaji wanahitaji kuona jinsi na lini utalipa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kupata Fedha za Shamba Lako: Mikopo, Ruzuku na Wawekezaji",
    questions: [
      { objective: "O1", q: "Jumla ya hitaji 2,000,000; fedha zako 600,000. Pengo la fedha ni:", options: ["2,600,000", "600,000", "1,400,000", "2,000,000"], answer: 2, why: "2,000,000 - 600,000 = 1,400,000." },
      { objective: "O1", q: "Mtaji wa uendeshaji ni fedha ambazo:", options: ["Zinalipia mzunguko mmoja wa uzalishaji na kurudi unapouza", "Zinanunua ardhi", "Zinalipa ada za shule", "Hazilipwi kamwe"], answer: 0, why: "Zinagharamia pembejeo na vibarua kwa mzunguko mmoja." },
      { objective: "O1", q: "Kwa nini uweke kila gharama katika mwezi inapohitajika?", options: ["Wakopeshaji wanapenda orodha ndefu", "Ili ukope zaidi ya unavyohitaji", "Haileti tofauti", "Ili upate fedha unapozihitaji na usilipe riba kwa fedha zisizo na kazi"], answer: 3, why: "Muda mzuri unaweka mikopo na riba chini iwezekanavyo." },
      { objective: "O2", q: "VSLA ya kawaida inakutana mara ngapi?", options: ["Mara moja kwa mwaka", "Kila wiki", "Siku ya kugawana tu", "Kamwe"], answer: 1, why: "Mikutano ya kila wiki ndipo wanachama hununua hisa na kulipa mikopo." },
      { objective: "O2", q: "Mfuko wa jamii wa VSLA ni kwa ajili ya nini?", options: ["Kumlipa mwenyekiti", "Kununua ardhi", "Dharura za wanachama", "Sherehe tu"], answer: 2, why: "Mfuko wa jamii unawasaidia wanachama wakati wa dharura." },
      { objective: "O2", q: "Kabla ya kujiunga na kikundi cha akiba, unapaswa kukagua nini?", options: ["Sheria zake za maandishi, ada za mikopo na jinsi fedha zinavyowekwa salama", "Mwenyekiti ni nani tu", "Mahali pa mkutano tu", "Hakuna kitu"], answer: 0, why: "Sheria zilizo wazi na fedha salama zinalinda akiba yako." },
      { objective: "O3", q: "Riba ya salio linalopungua inatozwa kwa:", options: ["Kiasi chote kwa muda wote wa mkopo", "Hakuna kitu", "Ada tu", "Kiasi unachodaiwa bado tu"], answer: 3, why: "Unapolipa, riba inapungua." },
      { objective: "O3", q: "Mpango wa dhamana ya mikopo kama NIRSAL unafanya nini?", options: ["Unafuta mikopo ya wakulima", "Unalipia sehemu ya hasara ya mkopeshaji ikiwa mkopaji hatalipa", "Unalipa riba ya wakulima", "Unatoa ruzuku za bure"], answer: 1, why: "Unawalinda wakopeshaji ili wakopeshe zaidi; bado unadaiwa mkopo wote." },
      { objective: "O3", q: "Kipi ni dhamana?", options: ["Zao unalopenda zaidi", "Hati ya ardhi au vifaa ambavyo mkopeshaji anaweza kuchukua usipolipa", "Namba yako ya simu", "Bei ya soko"], answer: 1, why: "Dhamana ni kinga kwa mkopeshaji." },
      { objective: "O3", q: "Ofa A: lipa 120,000 kila mwezi kuanzia mwezi ujao. Ofa B: lipa 112,000 mara moja baada ya mavuno. Kwa mkulima wa mazao, B:", options: ["Inagharimu zaidi na inafaa kidogo", "Ni kinyume cha sheria kila wakati", "Inagharimu kidogo na inalipwa fedha za mavuno zinapoingia", "Ni sawa na A"], answer: 2, why: "Jumla ya B ni ndogo zaidi na inadaiwa wakati mkulima ana fedha." },
      { objective: "O4", q: "Unapeleka mazao wapi ili upate stakabadhi ya ghala?", options: ["Duka lolote", "Nyumbani", "Kwa mfanyabiashara uliyekutana naye sasa hivi", "Ghala lililothibitishwa"], answer: 3, why: "Ni maghala yaliyothibitishwa tu yanayotoa stakabadhi ambazo wakopeshaji wanazikubali." },
      { objective: "O4", q: "Nchini Kenya, ni taasisi gani inayothibitisha maghala kwa stakabadhi za ghala?", options: ["Baraza la Mfumo wa Stakabadhi za Ghala (Warehouse Receipt System Council)", "KAMIS", "NAFDAC", "Kenya Meteorological Department"], answer: 0, why: "Baraza la WRS linathibitisha na kudhibiti maghala." },
      { objective: "O4", q: "Kuuza kwa mnunuzi mwingine (side-selling) ni nini?", options: ["Kuuza kando ya barabara", "Kuuza mazao uliyomwahidi mnunuzi mmoja kwa mtu mwingine", "Kuuza kwa chama cha ushirika", "Kuuza kwa awamu"], answer: 1, why: "Kunavunja makubaliano ya mkopo wa pembejeo au mkataba na kunaweza kuleta adhabu." },
      { objective: "O5", q: "Mpango halisi wa ruzuku:", options: ["Unaomba ada kabla ya kukulipa", "Unaomba PIN yako", "Haukutozi ada ya kutuma maombi", "Unahakikisha idhini kwa kila mtu"], answer: 2, why: "Ada, maombi ya PIN na ahadi za uhakika ni dalili za ulaghai." },
      { objective: "O5", q: "Youth Enterprise Development Fund ya Kenya hasa inatoa:", options: ["Ardhi ya bure", "Mikopo kwa biashara za vijana", "Bima ya mazao", "Utabiri wa hali ya hewa"], answer: 1, why: "Inatoa mikopo, pamoja na mkopo wa Agri-Biz, na msaada wa biashara." },
      { objective: "O5", q: "Unapaswa kukagua wapi app ya mikopo ya kidijitali ya Kenya?", options: ["Ukurasa wake wa mitandao ya kijamii", "Idadi ya nyota zake", "Kikundi cha ujumbe cha rafiki", "Orodha ya Benki Kuu ya Kenya ya watoa mikopo ya kidijitali wenye leseni"], answer: 3, why: "CBK inatoa leseni kwa watoa mikopo ya kidijitali na inachapisha orodha." },
      { objective: "O6", q: "Kichwa kipi kinamwonyesha mkopeshaji jinsi fedha zitakavyoleta mapato?", options: ["Gharama kwa kila kipimo, faida ghafi au muda wa kurudisha", "Rangi unayoipenda", "Majina ya majirani zako", "PIN yako"], answer: 0, why: "Takwimu hizi zinaonyesha kwamba fedha zitaleta mapato ya kulipa." },
      { objective: "O6", q: "Historia yako ya kazi katika ombi la fedha maana yake ni:", options: ["Kasi yako ya kukimbia", "Uthibitisho wa ulichofanya, kama kumbukumbu zilizowekwa na mikopo iliyolipwa", "Namba za simu ulizohifadhi", "Orodha ya matamanio"], answer: 1, why: "Kazi ya zamani inawasaidia wakopeshaji kuuamini mpango wako." },
      { objective: "O6", q: "Kabla ya kutuma ombi la fedha, unapaswa:", options: ["Kuongeza PIN yako ili kuharakisha", "Kuongeza ukubwa wa namba", "Kukagua hesabu mara mbili na kumwomba mshauri alisome", "Kulituma kwa kila namba unayoipata mtandaoni"], answer: 2, why: "Hesabu zilizokaguliwa na msomaji wa pili zinafanya ombi kuwa imara na salama zaidi." },
      { objective: "O6", q: "Unaachia nini unapochukua umiliki wa hisa kutoka kwa mwekezaji?", options: ["Hakuna kitu", "Uanachama wako wa kikundi cha akiba", "Ardhi yako yote moja kwa moja", "Sehemu ya umiliki na sehemu ya udhibiti wa biashara"], answer: 3, why: "Umiliki wa hisa maana yake ni kwamba mwekezaji anamiliki sehemu ya biashara." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 3, 5, 6, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya ombi na uikague tena.",
    criteria: [
      { name: "Hitaji na pengo la fedha", objective: "O1", notYet: "Kiasi ni kubahatisha, au matumizi ya nyumbani yamechanganywa ndani.", meets: "Jumla ya hitaji, mchango wako na pengo ni sahihi, vimegawanywa katika mtaji wa uendeshaji na vifaa, pamoja na miezi.", exceeds: "Inajumuisha akiba ndogo ya ziada na inaonyesha kila takwimu ya gharama ilikotoka." },
      { name: "Aina sahihi ya fedha", objective: "O2", notYet: "Hakuna sababu inayotolewa kwa aina ya fedha iliyochaguliwa.", meets: "Inataja aina ya fedha (kikundi, SACCO, mkopo, stakabadhi ya ghala, mkopo wa pembejeo, ruzuku au umiliki wa hisa) na kwa nini inafaa.", exceeds: "Inalinganisha angalau chaguo mbili, pamoja na akiba ya kikundi, na inaeleza uamuzi." },
      { name: "Mpango wa kulipa", objective: "O3", notYet: "Hakuna mpango wa kulipa, au malipo yanaanza kabla ya mapato yoyote.", meets: "Malipo ya kila mwezi pamoja na gharama yote, yanayolingana na mpango wa mtiririko wa fedha na mavuno.", exceeds: "Inaonyesha kinachotokea katika msimu mbaya na jinsi malipo yangeendelea kulipwa." },
      { name: "Dhamana na masharti", objective: "O4", notYet: "Dhamana, udhamini au masharti muhimu hayapo.", meets: "Dhamana au udhamini umetajwa, pamoja na masharti makuu na hatari mbili.", exceeds: "Inaeleza jinsi stakabadhi ya ghala, mkataba au bima inavyopunguza hatari ya mkopeshaji." },
      { name: "Imekaguliwa na salama", objective: "O5", notYet: "Mkopeshaji au mpango haujakaguliwa, au taarifa binafsi kama PIN zimewekwa.", meets: "Mkopeshaji au mpango umekaguliwa kwenye tovuti rasmi au orodha ya mdhibiti, na hakuna misimbo binafsi iliyowekwa.", exceeds: "Inaandika tarehe ya kukagua na kwamba wito au ofa iko wazi sasa." },
      { name: "Ombi lililo wazi la ukurasa mmoja", objective: "O6", notYet: "Ni refu kuliko ukurasa mmoja au halina lengo, kiasi au jinsi linavyoleta mapato.", meets: "Ukurasa mmoja unaojumuisha lengo, kiasi, mchango wako, jinsi linavyoleta mapato, kulipa, dhamana, hatari na historia ya kazi.", exceeds: "Limesomwa na mshauri, kumbukumbu zimeambatishwa na maoni yake yameshughulikiwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa ombi la fedha",
      "Wanafunzi wanaoripoti kujiunga na kikundi cha akiba au SACCO, au kuomba fedha kwa ombi la maandishi, ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kuchagua mkopo wenye malipo baada ya mavuno, au kukopa kidogo kuliko walivyopanga mwanzoni",
      "Wanafunzi wanaoripoti kukagua mkopeshaji, app ya mikopo au ofa ya ruzuku kwenye orodha rasmi, au kukataa ulaghai wa ada-kwa-ruzuku",
      "Vyama vya ushirika au wakopeshaji washirika wanaripoti maombi kamili zaidi na malipo machache yaliyokosekana kutoka kwa waliohitimu kozi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari na kalamu, na simu ya kawaida yenye kikokotoo",
      "Mpango wa shamba wa mwanafunzi, kumbukumbu na mpango wa mtiririko wa fedha, au takwimu za mfano za kozi",
      "Ofa halisi au za mfano za mikopo, sheria za kikundi cha akiba na kipeperushi cha mkopo wa pembejeo au cha stakabadhi ya ghala kutoka eneo hilo, ikiwa vinapatikana",
      "Kama dakika 80 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuandika ombi la fedha"
    ],
    facilitatorNotes: [
      "Katika kikundi cha wakulima au kipindi cha ugani: fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi pamoja na kazi za \"Jaribu sasa\" wawili wawili.",
      "Alika SACCO, VSLA au mkopeshaji mwenye leseni aeleze sheria zake, lakini usimpendekeze mkopeshaji yeyote; waache wanafunzi waulize maswali ya somo.",
      "Kabla ya kutaja ruzuku au mpango wowote wa vijana, kagua kwenye tovuti yake rasmi kwamba uko wazi; usisambaze kamwe viungo kutoka mitandao ya kijamii.",
      "Usiwaombe kamwe wanafunzi watoe PIN, nywila, namba za vitambulisho au taarifa za benki kwa mazoezi; tumieni mifano badala yake.",
      "Pima ombi la fedha kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati; himiza wanafunzi kulionyesha chama chao cha ushirika au mkopeshaji."
    ]
  }
};
