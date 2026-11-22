"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-mother-child-health.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Hakuna dozi za dawa, mipango ya matibabu wala utambuzi wa ugonjwa: kila somo linaelekeza kliniki, mkunga, mhudumu wa afya ya jamii na wizara ya afya, na linafuata miongozo ya WHO.

const WHO_ANC = { name: "WHO: Miongozo mipya ya huduma ya ujauzito kwa uzoefu mzuri wa ujauzito (mawasiliano manane, la kwanza katika wiki 12 za kwanza)", url: "https://www.who.int/news/item/07-11-2016-new-guidelines-on-antenatal-care-for-a-positive-pregnancy-experience" };
const WHO_MATERNAL = { name: "WHO, taarifa fupi: Vifo vya akina mama (sababu kuu; huduma ya mtaalamu kabla, wakati na baada ya kujifungua)", url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality" };
const WHO_NEWBORN = { name: "WHO, taarifa fupi: Vifo vya watoto wachanga (huduma kwa mtoto mchanga na dalili zake za hatari)", url: "https://www.who.int/news-room/fact-sheets/detail/newborn-mortality" };
const WHO_IYCF = { name: "WHO, taarifa fupi: Ulishaji wa watoto wachanga na wadogo", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_DIARRHOEA = { name: "WHO, taarifa fupi: Ugonjwa wa kuhara (kuzuia, huduma nyumbani, dalili za upungufu wa maji mwilini)", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_IMMUNIZATION = { name: "WHO, taarifa fupi: Kiwango cha chanjo (magonjwa ambayo chanjo za watoto zinazuia)", url: "https://www.who.int/news-room/fact-sheets/detail/immunization-coverage" };

module.exports = {
  id: "afr-mother-child-health-sw",
  lang: "sw",
  translationOf: "afr-mother-child-health",
  category: "Africa: Life and Work",
  name: "Afya ya Mama na Mtoto: Ujauzito, Kujifungua na Miaka ya Kwanza",
  skills: "Kupanga mahudhurio ya kliniki wakati wa ujauzito, Kutambua dalili za hatari wakati wa ujauzito na baada ya kujifungua, Kuandaa mpango wa kujifungua, Kumtunza mtoto mchanga katika siku za kwanza, Kutambua dalili za hatari kwa mtoto mchanga au mtoto mdogo, Kuweka kadi ya afya ya mtoto ikiwa sahihi",
  outcome: "kuandaa mpango rahisi wa afya ya familia kwa ujauzito na kwa mtoto mdogo: lini kwenda kliniki, mtoto atazaliwa wapi na mtafikaje huko, jinsi ya kumtunza mtoto mchanga, dalili zipi za hatari zinamaanisha \"nenda kliniki sasa\", na jinsi ya kuhakikisha chanjo na vipimo vya ukuaji vinafanyika kwa wakati.",
  about: [
    "Kozi hii ni kwa akina mama na wanawake wajawazito, akina baba, bibi, dada wakubwa na yeyote anayesaidia kumtunza mwanamke mjamzito au mtoto mdogo, mijini na vijijini kote Afrika. Huhitaji mafunzo yoyote ya afya.",
    "Sura ya 1 inahusu ujauzito na kujifungua: mahudhurio ya kliniki, dalili za hatari zinazomaanisha \"nenda sasa\", na mpango wa kujifungua. Sura ya 2 inahusu siku za kwanza na miaka ya kwanza ya mtoto: huduma kwa mtoto mchanga, dalili za hatari kwa watoto wachanga na wadogo, na ulishaji, chanjo na vipimo vya ukuaji.",
    "Kozi hii inafundisha kuzuia magonjwa, tabia nzuri za afya na wakati wa kutafuta msaada. Haikuambii dawa ipi utumie au kiasi gani, na haichukui nafasi ya muuguzi, mkunga, daktari au mhudumu wa afya ya jamii. Fuata kliniki yako na wizara ya afya ya nchi yako kila wakati. Kila somo linachukua kama dakika tano na linaisha na kazi ya kufanya. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa afya ya familia wa ukurasa mmoja kwa ujauzito au kwa mtoto mdogo katika familia yako (au kwa mfano, kama Amina, mwenye mimba ya miezi 5 huko Kano, au mtoto Kofi, wa miezi 3, huko Kumasi): mahudhurio ya kliniki yaliyobaki, mpango wa kujifungua (mahali, mhudumu wa afya mwenye ujuzi, usafiri, pesa zilizowekwa akiba, nani ataenda naye na nani atabaki kutunza nyumba), hatua za kumtunza mtoto mchanga katika siku ya kwanza, dalili za hatari kwa mama na mtoto pamoja na kliniki iliyo karibu zaidi na namba ya simu ya dharura, na tarehe zinazofuata za chanjo na kipimo cha ukuaji kutoka kwenye kadi ya afya.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Akina mama na wanawake wajawazito, akina baba, bibi na walezi wengine nchini Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Misri na kote Afrika. Wengi wanaishi mbali na hospitali, wanatumia simu ya kawaida ya Android yenye bando ghali, na wanapata ushauri wa afya kutoka kwa familia, majirani na mhudumu wa afya ya jamii.",
    startingPoint: "Wengi wanajua kwamba mwanamke mjamzito anapaswa kwenda kliniki, lakini wengi wanaanza kuchelewa, wanaenda mara chache kuliko inavyoshauriwa, au wanasubiri nyumbani dalili ya hatari inapotokea. Wachache wana mpango wa kujifungua ulioandikwa, pesa za usafiri zilizowekwa akiba, au orodha ya dalili za hatari kwa mtoto mchanga na mtoto mdogo. Wengi wanaweka kadi ya afya ya mtoto lakini hawasomi tarehe ya chanjo inayofuata iliyo juu yake.",
    gap: "Afrika kusini mwa Jangwa la Sahara ina sehemu kubwa ya vifo vya dunia vinavyotokea wakati wa ujauzito na kujifungua, na mwezi wa kwanza ndio wakati wa hatari zaidi kwa mtoto. Vifo vingi kati ya hivi vinafuata kuchelewa: kuchelewa kuamua kwenda, kuchelewa kufika, na kuchelewa kupata huduma. Familia zinazopanga mapema, zinazojua dalili za hatari na zinazohudhuria kliniki kwa wakati huchukua hatua haraka zaidi na kuwaweka akina mama na watoto salama zaidi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la afya linaelezwa",
      "Vifaa: simu ya kawaida; kozi inaweza pia kufundishwa kwa sauti katika kikundi au mkutano wa wanawake",
      "Huduma za afya, mipango ya bure ya kujifungua, ratiba za chanjo na kadi za afya zinatofautiana kati ya nchi na hubadilika: wanafunzi wanakagua na kliniki yao au wizara ya afya",
      "Hakuna dozi za dawa, mipango ya matibabu wala utambuzi wa ugonjwa: kozi inafundisha kuzuia na wakati wa kutafuta msaada",
      "Faragha: wanafunzi hawalazimiki kamwe kueleza habari za ujauzito wao au afya yao mbele ya kikundi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa ujauzito katika familia yako na mwezi unaotarajiwa kujifungua", action: "kuandika mpango wa mahudhurio ya kliniki kwa ujauzito unaoanza katika wiki 12 za kwanza", standard: "wenye angalau mawasiliano manane kama WHO inavyoshauri, au idadi ambayo kliniki yako inakupa" },
    { id: "O2", condition: "Ukipewa orodha ya dalili wakati wa ujauzito au baada ya kujifungua", action: "kuchagua dalili za hatari zinazomaanisha mwanamke lazima aende kliniki sasa", standard: "ukipata angalau 4 kati ya 5 sahihi na ukichagua \"nenda sasa\" badala ya \"subiri uone\"" },
    { id: "O3", condition: "Kwa kujifungua kunakokuja", action: "kuandika mpango wa kujifungua unaotaja kituo cha afya, usafiri, pesa zilizowekwa akiba na watu watakaosaidia", standard: "kila sehemu ikiwa imejazwa na kukubaliwa na familia kabla ya mwezi wa mwisho" },
    { id: "O4", condition: "Kwa siku ya kwanza ya mtoto", action: "kuorodhesha hatua za kumtunza mtoto mchanga: kumweka na joto, kumnyonyesha ndani ya saa ya kwanza na kuweka kitovu kikiwa safi na kikavu", standard: "kwa mpangilio sahihi na bila desturi zenye madhara" },
    { id: "O5", condition: "Ukipewa maelezo ya mtoto mchanga au mtoto mdogo anayeumwa", action: "kutambua dalili za hatari zinazomaanisha mtoto lazima apelekwe kliniki sasa", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O6", condition: "Ukitumia kadi au kitabu cha afya cha mtoto", action: "kutafuta tarehe zinazofuata za chanjo na kipimo cha ukuaji na kuandika hatua ya ulishaji inayofaa umri wa mtoto", standard: "bila mahudhurio yoyote yaliyokosekana kuachwa bila mpango" }
  ],
  chapters: [
    {
      name: "Sura 1: Ujauzito wenye afya na kujifungua salama",
      lessons: [
        {
          title: "Mahudhurio ya kliniki wakati wa ujauzito",
          objectives: ["O1"],
          minutes: 5,
          goal: "Andika mpango wa mahudhurio ya kliniki kwa ujauzito, ukianza katika wiki 12 za kwanza.",
          text: [
            "Huduma wakati wa ujauzito inaitwa huduma ya ujauzito (antenatal care). Katika kila hudhurio, muuguzi au mkunga anapima shinikizo la damu la mama, uzito wake na damu yake, anasikiliza mtoto, na anatoa huduma ambayo kliniki ya nchi yako inatoa. Matatizo mengi yanaweza kugunduliwa mapema, kabla hayajawa hatari.",
            "WHO (Shirika la Afya Duniani) inashauri angalau mawasiliano manane na mhudumu wa afya wakati wa ujauzito, na la kwanza katika wiki 12 za kwanza (miezi mitatu ya kwanza). Kwa hiyo mara tu mwanamke anapodhani ana mimba, anaenda kliniki. Kliniki yako inaweza kukupa ratiba yake yenyewe; ifuate.",
            "Katika hudhurio la kwanza, kliniki kwa kawaida inatoa kitabu au kadi ya afya ya mama na mtoto. Jina lake linatofautiana kati ya nchi (kwa mfano, Kitabu cha Afya ya Mama na Mtoto cha Kenya, au Maternal and Child Health Record Book cha Ghana). Kiweke ndani ya mfuko wa plastiki, kilete kila hudhurio, na uandike tarehe inayofuata kwenye kalenda ya simu yako.",
            "Akina baba na familia wanasaidia pia: saidieni pesa za usafiri, nendeni naye kwenye hudhurio, na mwacheni apumzike. Uliza kliniki au ofisi ya bima yako ya afya kama huduma ya ujauzito ni bure au inalipiwa mahali unapoishi; hili hubadilika, kwa hiyo uliza kila mara."
          ],
          steps: ["Nenda kliniki mara tu unapodhani una mimba, ikiwezekana katika wiki 12 za kwanza.", "Uliza kliniki inapanga mahudhurio mangapi na lini.", "Andika kila tarehe kwenye kitabu na kwenye kalenda ya simu yako.", "Leta kitabu kila hudhurio.", "Ukikosa hudhurio, nenda haraka uwezavyo; usisubiri hudhurio linalofuata."],
          words: [["Huduma ya ujauzito (antenatal care)", "vipimo vya afya vya mwanamke wakati wa ujauzito, kabla mtoto hajazaliwa."], ["Mawasiliano (contact)", "hudhurio au kukutana na mhudumu wa afya, kliniki au nyumbani."], ["Mkunga", "mhudumu wa afya aliyefunzwa kuwatunza wanawake wakati wa ujauzito, kujifungua na baada ya kujifungua."]],
          slides: [
            { title: "Huduma ya ujauzito", bullets: ["Vipimo vya afya wakati wa ujauzito", "Hugundua matatizo mapema", "Shinikizo la damu, uzito, damu na mtoto"] },
            { title: "Lini kwenda", bullets: ["Hudhurio la kwanza katika wiki 12 za kwanza", "WHO inashauri angalau mawasiliano 8", "Fuata ratiba ya kliniki yako"] },
            { title: "Tunza kitabu", bullets: ["Kilete kila hudhurio", "Kiweke kikavu ndani ya mfuko wa plastiki", "Andika tarehe inayofuata kwenye simu yako"] },
            { title: "Familia inaweza kusaidia", bullets: ["Pesa za usafiri", "Kwenda naye kwenye hudhurio", "Kumwacha apumzike"] }
          ],
          sources: [WHO_ANC],
          tryIt: "Chukua ujauzito katika familia yako, au mfano wa Fatou huko Thiès, Senegal, mwenye mimba ya wiki 10. Andika mwezi wa hudhurio la kwanza na uorodheshe miezi ya mahudhurio yanayofuata. Kando ya kila moja, andika nani ataenda naye.",
          youCanNow: "kupanga mahudhurio ya kliniki kwa ujauzito, ukianza mapema, na kuweka tarehe mahali utakapoziona.",
          quickCheck: [
            { objective: "O1", q: "Mwanamke afanye hudhurio lake la kwanza la kliniki lini wakati wa ujauzito?", options: ["Pale tu mtoto anapokaribia kuzaliwa", "Katika miezi mitatu ya mwisho", "Mara tu anapodhani ana mimba, ikiwezekana katika wiki 12 za kwanza", "Pale tu anapojisikia mgonjwa"], answer: 2, why: "WHO inashauri mawasiliano ya kwanza katika wiki 12 za kwanza, ili matatizo yagunduliwe mapema." },
            { objective: "O1", q: "WHO inashauri mawasiliano mangapi na mhudumu wa afya wakati wa ujauzito?", options: ["Angalau manane", "Moja", "Mawili", "Hakuna akijisikia vizuri"], answer: 0, why: "WHO inashauri angalau mawasiliano manane; kliniki yako inaweza kukupa ratiba yake." }
          ]
        },
        {
          title: "Dalili za hatari wakati wa ujauzito na baada ya kujifungua",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tambua dalili za hatari zinazomaanisha mwanamke mjamzito au mama aliyejifungua lazima aende kliniki sasa.",
          text: [
            "Mimba nyingi zinaenda vizuri. Lakini dalili fulani zinamaanisha hatari kwa mama au kwa mtoto. Ukiona dalili hizi, usisubiri uone kama zitapita, na usisubiri hudhurio linalofuata. Nenda kliniki au hospitali sasa, mchana au usiku.",
            "Dalili za hatari wakati wa ujauzito: kutokwa na damu ukeni; maumivu makali ya kichwa pamoja na kuona kwa ukungu; degedege (kifafa cha ghafla); kuvimba uso na mikono; homa; maumivu makali ya tumbo; mtoto kucheza kidogo sana au kutocheza kabisa; chupa kupasuka (maji kutoka) kabla ya uchungu; kushindwa kupumua vizuri.",
            "Dalili za hatari baada ya kujifungua: kutokwa na damu nyingi (vitambaa au pedi zinalowa haraka); homa; uchafu unaotoka ukeni wenye harufu mbaya; maumivu makali ya kichwa, kuona kwa ukungu au degedege; maumivu au uvimbe katika mguu mmoja; huzuni kubwa au kushindwa kumudu maisha kwa siku nyingi.",
            "Kutokwa na damu nyingi, maambukizi na shinikizo la juu la damu ni miongoni mwa sababu kuu za vifo wakati wa ujauzito na kujifungua, na vinaweza kuua haraka. Kasi inaokoa maisha. Mpigie mhudumu wa afya ya jamii au namba ya dharura inayotumika eneo lako mkiwa njiani."
          ],
          steps: ["Jifunze dalili za hatari na ubandike orodha ukutani nyumbani.", "Ukiona dalili moja, acha unachofanya.", "Nenda kliniki au hospitali sasa ukiwa na kitabu.", "Piga simu kabla ya kufika, au mpigie mhudumu wa afya ya jamii mkiwa njiani."],
          words: [["Dalili ya hatari", "ishara kwamba mama au mtoto anaweza kuwa katika hatari kubwa na anahitaji huduma sasa."], ["Degedege (kifafa cha ghafla)", "mwili kutetemeka ghafla bila mtu kuweza kuuzuia."], ["Uchafu wa ukeni", "majimaji yanayotoka ukeni."]],
          slides: [
            { title: "Dalili za hatari: nenda SASA", bullets: ["Usisubiri uone kama itapita", "Usisubiri hudhurio linalofuata", "Mchana au usiku"] },
            { title: "Wakati wa ujauzito", bullets: ["Kutokwa na damu, degedege, homa, maumivu makali ya tumbo", "Maumivu makali ya kichwa na kuona kwa ukungu; uso au mikono kuvimba", "Mtoto kucheza kidogo sana; chupa kupasuka mapema; kushindwa kupumua"] },
            { title: "Baada ya kujifungua", bullets: ["Kutokwa na damu nyingi au homa", "Uchafu wa ukeni wenye harufu mbaya", "Maumivu makali ya kichwa, kuona kwa ukungu au degedege", "Huzuni kubwa au kushindwa kumudu kwa siku nyingi"] },
            { title: "Kasi inaokoa maisha", bullets: ["Chukua kitabu", "Mpigie mhudumu wa afya mkiwa njiani"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Andika dalili za hatari za wakati wa ujauzito na baada ya kujifungua kwenye karatasi moja, kwa lugha yako mwenyewe ukipenda. Ongeza jina la kliniki iliyo karibu zaidi na namba ya simu ya dharura. Ibandike ukutani au hifadhi picha yake kwenye simu yako.",
          youCanNow: "kutambua dalili za hatari wakati wa ujauzito na baada ya kujifungua na kujua kwenda kliniki mara moja.",
          quickCheck: [
            { objective: "O2", q: "Mariam huko Bouaké ana mimba ya miezi 7 na ana maumivu makali ya kichwa na kuona kwa ukungu. Afanye nini?", options: ["Apumzike na aone atakavyojisikia kesho", "Asubiri hudhurio lake linalofuata la kliniki", "Anywe maji zaidi na alale", "Aende kliniki au hospitali sasa"], answer: 3, why: "Maumivu makali ya kichwa pamoja na kuona kwa ukungu ni dalili ya hatari; inaweza kumaanisha shinikizo la juu la damu lenye hatari." },
            { objective: "O2", q: "Ipi ni dalili ya hatari baada ya kujifungua?", options: ["Kujisikia uchovu baada ya kujifungua", "Kutokwa na damu nyingi inayolowesha vitambaa haraka", "Kutaka kulala mtoto anapolala", "Kuhisi njaa"], answer: 1, why: "Kutokwa na damu nyingi baada ya kujifungua ni sababu kuu ya vifo vya akina mama na kunahitaji huduma sasa." }
          ]
        },
        {
          title: "Kuandaa mpango wa kujifungua",
          objectives: ["O3"],
          minutes: 5,
          goal: "Andika mpango wa kujifungua unaotaja mahali, usafiri, pesa na wasaidizi.",
          text: [
            "Hatari nyingi wakati wa kujifungua zinatokea haraka na ni vigumu kuziona zikija. Huduma ya mhudumu wa afya mwenye ujuzi (mkunga, muuguzi au daktari) wakati na baada ya kujifungua inaokoa maisha ya akina mama na watoto. Kwa hiyo mpango salama zaidi ni kujifungulia katika kituo cha afya.",
            "Mpango wa kujifungua unajibu maswali rahisi kabla uchungu haujaanza: Kituo kipi cha afya? Tutafikaje huko usiku? Nani atalipa usafiri, na tumeweka akiba kiasi gani? Nani ataenda naye? Nani atawatunza watoto wengine? Nani anaweza kutoa damu ikihitajika?",
            "Anza kuweka akiba mapema, kidogo kila wiki. Kwa mfano, familia moja huko Kisumu inaweka KES 200 kwa wiki, na familia moja huko Tamale inaweka GHS 20 kwa wiki (hivi ni viwango vya mfano; panga vyako mwenyewe). Hifadhi namba ya boda boda, okada, teksi au gari la wagonjwa kwenye simu sasa.",
            "Katika miezi ya mwisho, andaa begi dogo: kitabu cha afya, vitambaa safi, nguo na kofia ya mtoto, na vitu vya mama. Kubalianeni mpango na familia nzima ili mtu yeyote asibishane uchungu unapoanza."
          ],
          steps: ["Chagua kituo cha afya na ukitembelee kabla ya kujifungua ikiwezekana.", "Panga usafiri wa mchana na usiku, na uhifadhi namba.", "Weka akiba kila wiki kwa usafiri na gharama.", "Chagua nani ataenda naye na nani atabaki kutunza nyumba.", "Andaa begi na mkubaliane mpango na familia."],
          words: [["Mpango wa kujifungua", "mpango ulioandikwa wa mahali na jinsi mtoto atakavyozaliwa na jinsi mtakavyofika huko."], ["Mhudumu wa afya mwenye ujuzi", "mkunga, muuguzi au daktari aliyefunzwa kuhudumia wanawake wanaojifungua."], ["Uchungu", "maumivu na kazi ya mwili inayomsukuma mtoto kutoka."]],
          slides: [
            { title: "Kwa nini mpango wa kujifungua", bullets: ["Hatari za kujifungua zinaweza kuja haraka", "Huduma ya mtaalamu inaokoa akina mama na watoto", "Panga kabla uchungu haujaanza"] },
            { title: "Mpango unajibu", bullets: ["Kituo kipi?", "Usafiri, mchana na usiku?", "Pesa za akiba?", "Nani ataenda naye, nani atatunza nyumba?"] },
            { title: "Weka akiba mapema", bullets: ["Kidogo kila wiki (viwango ni vya mfano)", "Hifadhi namba za usafiri sasa"] },
            { title: "Andaa begi", bullets: ["Kitabu cha afya", "Vitambaa safi, nguo na kofia ya mtoto", "Vitu vya mama"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Andika mpango wa kujifungua kwa ujauzito katika familia yako, au kwa Amina huko Kano anayetarajia kujifungua baada ya miezi mitatu. Jaza: kituo, usafiri (mchana na usiku), akiba ya kila wiki, nani ataenda naye, nani atatunza nyumba, na kilicho ndani ya begi.",
          youCanNow: "kuandika mpango wa kujifungua unaotaja mahali, usafiri, pesa na wasaidizi.",
          quickCheck: [
            { objective: "O3", q: "Mahali salama zaidi pa kujifungulia ni wapi?", options: ["Nyumbani bila mtu aliyefunzwa", "Popote uchungu unapoanzia", "Kituo cha afya chenye mhudumu wa afya mwenye ujuzi", "Njiani, ili kuokoa muda"], answer: 2, why: "Huduma ya mtaalamu wakati na baada ya kujifungua inaokoa maisha ya akina mama na watoto wachanga." },
            { objective: "O3", q: "Familia ikubaliane mpango wa kujifungua lini?", options: ["Uchungu unapoanza", "Kabla ya mwezi wa mwisho wa ujauzito", "Baada ya mtoto kuzaliwa", "Pale tu kuna tatizo"], answer: 1, why: "Kupanga mapema kunazuia kuchelewa na mabishano uchungu unapoanza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Ujauzito wenye afya na kujifungua salama",
        questions: [
          { objective: "O1", q: "Salma huko Asyut anadhani ana mimba ya wiki 8. Hatua bora inayofuata ni ipi?", options: ["Kwenda kliniki sasa kwa hudhurio la kwanza", "Kusubiri hadi mtoto aanze kucheza", "Kusubiri hadi mwezi wa mwisho", "Kumuuliza jirani badala ya kliniki"], answer: 0, why: "WHO inashauri mawasiliano ya kwanza katika wiki 12 za kwanza." },
          { objective: "O1", q: "Kwa nini ulete kitabu cha mama na mtoto kila hudhurio?", options: ["Kliniki italiuza tena", "Ni cha baba peke yake", "Kina kumbukumbu za vipimo na tarehe zinazofuata", "Hakihitajiki baada ya hudhurio la kwanza"], answer: 2, why: "Kitabu kinaweka historia na tarehe za mahudhurio yanayofuata mahali pamoja." },
          { objective: "O2", q: "Ipi kati ya hizi ni dalili ya hatari wakati wa ujauzito?", options: ["Kutamani vyakula fulani", "Mtoto kucheza kidogo sana au kutocheza kabisa", "Kujisikia uchovu kidogo", "Kukojoa mara nyingi zaidi"], answer: 1, why: "Mtoto kucheza kidogo sana kunaweza kumaanisha mtoto yuko hatarini; nenda sasa." },
          { objective: "O2", q: "Akosua ana homa na uchafu wa ukeni wenye harufu mbaya siku tano baada ya kujifungua. Familia ifanye nini?", options: ["Isubiri wiki moja", "Impe chai na apumzike", "Impeleke kliniki sasa", "Isubiri hudhurio la chanjo la mtoto"], answer: 2, why: "Homa na uchafu wenye harufu mbaya ni dalili za maambukizi baada ya kujifungua; anahitaji huduma sasa." },
          { objective: "O3", q: "Ipi ni sehemu ya mpango mzuri wa kujifungua?", options: ["Namba za usafiri wa mchana na usiku zilizohifadhiwa", "Kusubiri kuamua hadi uchungu uanze", "Kutumia akiba kwanza", "Kutoiambia familia"], answer: 0, why: "Usafiri, pesa na wasaidizi waliopangwa mapema vinazuia kuchelewa kwenye hatari." }
        ]
      }
    },
    {
      name: "Sura 2: Siku za kwanza na miaka ya kwanza ya mtoto wako",
      lessons: [
        {
          title: "Kumtunza mtoto mchanga katika siku za kwanza",
          objectives: ["O4"],
          minutes: 5,
          goal: "Orodhesha hatua za kumtunza mtoto mchanga katika siku ya kwanza: joto, kunyonyesha mapema na kitovu safi.",
          text: [
            "Mtoto mchanga hawezi kujiweka na joto mwenyewe. Mkaushe mtoto, kisha mweke ngozi kwa ngozi kifuani mwa mama na kitambaa kikiwafunika wote wawili, na umvalishe kofia. Chelewesha kuoga kwa kwanza; muulize mhudumu wa afya ni lini.",
            "Anza kunyonyesha ndani ya saa ya kwanza baada ya kuzaliwa. Maziwa ya kwanza mazito ya rangi ya njano (kolostramu) ni mazuri kwa mtoto; usiyamwage. WHO inashauri maziwa ya mama peke yake kwa miezi 6 ya kwanza: bila maji, bila chai, bila maji ya glukosi na bila vinywaji au vyakula vingine.",
            "Weka kitovu kikiwa safi na kikavu. Usiweke chochote juu yake isipokuwa mhudumu wa afya amekuambia, na nawa mikono kabla ya kukigusa. Nawa mikono kwa sabuni kabla ya kumnyonyesha na baada ya kumbadilisha mtoto.",
            "Ikiwezekana, kaa kituoni kwa takriban siku moja baada ya kujifungua, na uhudhurie vipimo vya baada ya kujifungua ambavyo kliniki inapanga, kwa mama na kwa mtoto. Sajili kuzaliwa kwa mtoto na uanze chanjo zinazotolewa wakati wa kuzaliwa."
          ],
          steps: ["Mkaushe mtoto na umweke ngozi kwa ngozi juu ya mama, mkiwa mmefunikwa, akiwa na kofia.", "Mnyonyeshe ndani ya saa ya kwanza.", "Mpe maziwa ya mama peke yake.", "Weka kitovu kikiwa safi na kikavu; nawa mikono kabla ya kukigusa.", "Hudhuria vipimo vya baada ya kujifungua; sajili kuzaliwa; anza chanjo."],
          words: [["Mtoto mchanga", "mtoto katika siku zake 28 za kwanza."], ["Ngozi kwa ngozi", "kumshika mtoto bila nguo kifuani mwa mama kilicho wazi ili kumweka mtoto na joto."], ["Kolostramu", "maziwa ya kwanza ya mama, mazito na ya rangi ya njano, yenye kinga nyingi kwa mtoto."], ["Kitovu", "sehemu ya kiungamwana (umbilical cord) inayobaki tumboni mwa mtoto baada ya kuzaliwa."]],
          slides: [
            { title: "Mweke mtoto na joto", bullets: ["Mkaushe mtoto", "Ngozi kwa ngozi juu ya mama, mmefunikwa", "Kofia kichwani; chelewesha kuoga kwa kwanza"] },
            { title: "Nyonyesha mapema", bullets: ["Ndani ya saa ya kwanza", "Kolostramu ni nzuri: usiimwage", "Maziwa ya mama peke yake kwa miezi 6"] },
            { title: "Weka kitovu kikiwa safi", bullets: ["Safi na kikavu", "Usiweke chochote isipokuwa mhudumu wa afya amesema", "Nawa mikono kwanza"] },
            { title: "Baada ya kujifungua", bullets: ["Vipimo kwa mama na mtoto", "Sajili kuzaliwa", "Anza chanjo za wakati wa kuzaliwa"] }
          ],
          sources: [WHO_NEWBORN, WHO_IYCF],
          tryIt: "Andika hatua za kumtunza mtoto mchanga katika siku ya kwanza kwa mpangilio, kama orodha fupi unayoweza kumpa mama mpya au bibi. Kisha andika desturi moja yenye madhara uliyosikia katika eneo lako na hatua salama inayochukua nafasi yake.",
          youCanNow: "kuorodhesha hatua za kumtunza mtoto mchanga katika siku ya kwanza: joto, kunyonyesha mapema, maziwa ya mama peke yake na kitovu safi.",
          quickCheck: [
            { objective: "O4", q: "Kunyonyesha kuanze lini?", options: ["Baada ya mtoto kuoga kwa mara ya kwanza", "Baada ya siku tatu", "Maziwa yanapogeuka meupe", "Ndani ya saa ya kwanza baada ya kuzaliwa"], answer: 3, why: "WHO inashauri kuanza ndani ya saa ya kwanza; maziwa ya kwanza yanamkinga mtoto." },
            { objective: "O4", q: "Ndugu anasema mpe mtoto mchanga maji kwa sababu kuna joto. WHO inashauri nini?", options: ["Maziwa ya mama peke yake kwa miezi 6 ya kwanza", "Maji kila saa", "Maji ya sukari", "Chai pamoja na maziwa ya mama"], answer: 0, why: "Maziwa ya mama yana maji yote ambayo mtoto wa chini ya miezi 6 anahitaji; vinywaji vingine vinaweza kubeba vijidudu." }
          ]
        },
        {
          title: "Dalili za hatari kwa watoto wachanga na watoto wadogo",
          objectives: ["O5"],
          minutes: 5,
          goal: "Tambua dalili za hatari zinazomaanisha mtoto mchanga au mtoto mdogo lazima apelekwe kliniki sasa.",
          text: [
            "Watoto wachanga na watoto wadogo wanaweza kuugua sana haraka sana. Dalili fulani zinamaanisha nenda kliniki sasa, si kesho.",
            "Kwa mtoto mchanga: kutonyonya vizuri au kushindwa kunyonya; kupungua nguvu au kulegea; kupumua haraka au kwa shida; homa, au mwili kuwa baridi; degedege.",
            "Kwa mtoto mdogo: hawezi kunywa wala kunyonya; anatapika kila kitu; degedege; usingizi mzito sana au ni vigumu kumwamsha; kupumua haraka au kwa shida; homa (katika eneo lenye malaria, pima siku hiyo hiyo); kuhara damu, au kuhara pamoja na macho yaliyozama na mtoto mwenye kiu kali sana au dhaifu sana.",
            "Mtoto akiharisha, endelea kumnyonyesha na kumpa vinywaji na chakula, na muulize mhudumu wa afya kuhusu ORS (mchanganyiko wa kurudisha maji mwilini) na zinki. Lakini ukiona dalili ya hatari, nenda sasa. Usitumie dawa kutoka sokoni au kwa jirani bila ushauri wa mhudumu wa afya."
          ],
          steps: ["Angalia dalili za hatari, hata usiku.", "Ukiona moja, nenda kliniki sasa na kadi ya afya ya mtoto.", "Endelea kumnyonyesha na kumpa vinywaji njiani.", "Mpigie mhudumu wa afya ya jamii kama huwezi kufika."],
          words: [["Degedege (kifafa cha ghafla)", "mtoto kutetemeka ghafla bila kuweza kujizuia."], ["Upungufu wa maji mwilini", "mwili unapopoteza maji mengi mno, kwa mfano kwa kuhara au kutapika."], ["ORS", "oral rehydration solution: kinywaji cha maji safi, chumvi na sukari kinachorudisha maji yaliyopotea kwa kuhara."]],
          slides: [
            { title: "Nenda sasa, si kesho", bullets: ["Watoto huugua sana haraka sana", "Chukua kadi ya afya ya mtoto"] },
            { title: "Dalili za hatari kwa mtoto mchanga", bullets: ["Hanyonyi au hawezi kunyonya", "Amelegea au amepungua nguvu", "Kupumua haraka au kwa shida; homa au baridi; degedege"] },
            { title: "Dalili za hatari kwa mtoto mdogo", bullets: ["Hawezi kunywa wala kunyonya; anatapika kila kitu", "Degedege; usingizi mzito sana au ni vigumu kumwamsha", "Kupumua haraka au kwa shida; homa; kuhara damu"] },
            { title: "Kuhara", bullets: ["Endelea kunyonyesha na kumpa vinywaji", "Muulize mhudumu wa afya kuhusu ORS na zinki", "Macho yamezama au dhaifu sana: nenda sasa"] }
          ],
          sources: [WHO_NEWBORN, WHO_DIARRHOEA],
          tryIt: "Tengeneza kadi ya dalili za hatari kwa watoto wachanga na watoto wadogo: safu moja kwa watoto wachanga, nyingine kwa watoto wakubwa zaidi. Ongeza kliniki iliyo karibu zaidi, namba ya mhudumu wa afya ya jamii na jinsi utakavyofika huko usiku.",
          youCanNow: "kutambua dalili za hatari kwa mtoto mchanga au mtoto mdogo na kumpeleka mtoto kliniki mara moja.",
          quickCheck: [
            { objective: "O5", q: "Mtoto wa wiki 3 huko Kumasi anaacha kunyonya na mwili wake ni baridi. Familia ifanye nini?", options: ["Isubiri hadi asubuhi", "Impe mtoto maji", "Iende kliniki sasa", "Impe dawa kutoka sokoni"], answer: 2, why: "Kutonyonya na mwili kuwa baridi ni dalili za hatari kwa mtoto mchanga zinazohitaji huduma sasa." },
            { objective: "O5", q: "Mtoto wa miaka 2 anayeharisha ana macho yaliyozama na ni dhaifu sana. Kipi ni sahihi?", options: ["Kuacha vinywaji vyote", "Kwenda kliniki sasa", "Kuacha kunyonyesha", "Kusubiri siku tatu"], answer: 1, why: "Macho yaliyozama na udhaifu ni dalili za upungufu wa maji mwilini, unaoweza kuua mtoto; nenda sasa." }
          ]
        },
        {
          title: "Ulishaji, chanjo na vipimo vya ukuaji",
          objectives: ["O6"],
          minutes: 6,
          goal: "Tafuta tarehe zinazofuata za chanjo na kipimo cha ukuaji kwenye kadi ya afya ya mtoto na uandike hatua ya ulishaji inayofaa umri wa mtoto.",
          text: [
            "Kadi au kitabu cha afya cha mtoto kinaonyesha chanjo alizopewa, tarehe za chanjo zinazofuata na chati ya ukuaji. Chanjo zinakinga dhidi ya magonjwa kama surua, polio, kifaduro, pepopunda na baadhi ya aina za nimonia na kuhara. Ratiba inatofautiana kati ya nchi; fuata kadi yako na kliniki yako.",
            "Vipimo vya ukuaji kliniki au kwa mhudumu wa afya ya jamii vinampima mtoto uzito na urefu. Mstari wa ukuaji unaonyooka bila kupanda au unaoshuka ni onyo: muulize mhudumu wa afya la kufanya.",
            "Ulishaji kulingana na umri (WHO): maziwa ya mama peke yake kwa miezi 6 ya kwanza. Kuanzia takriban miezi 6, ongeza vyakula laini vya familia vilivyopondwa na uendelee kunyonyesha hadi miaka 2 au zaidi. Anza na kiasi kidogo na polepole umpe zaidi, chakula kizito zaidi na aina nyingi zaidi. Watoto wa miezi 6 hadi 8 wanahitaji milo 2 hadi 3 kwa siku; watoto wa miezi 9 hadi 23 wanahitaji milo 3 hadi 4, pamoja na vitafunio 1 hadi 2 ikihitajika.",
            "Ukikosa tarehe ya chanjo, usikate tamaa: nenda haraka uwezavyo na kliniki itamfidia mtoto chanjo alizokosa. Andika kila tarehe inayofuata kwenye kalenda ya simu yako."
          ],
          steps: ["Fungua kadi ya afya ya mtoto.", "Tafuta chanjo ya mwisho na tarehe inayofuata.", "Tafuta kipimo cha mwisho cha ukuaji na uone kama mstari unapanda.", "Andika hatua ya ulishaji inayofaa umri wa mtoto.", "Weka tarehe zinazofuata kwenye kalenda ya simu yako."],
          words: [["Chanjo", "dawa anayopewa mtoto kumkinga dhidi ya ugonjwa kabla hajaupata; kliniki inaitoa kwa ratiba."], ["Chati ya ukuaji", "chati kwenye kadi inayoonyesha uzito wa mtoto kwa muda."], ["Vyakula vya nyongeza", "kuongeza vyakula vya familia kuanzia takriban miezi 6 huku kunyonyesha kukiendelea."]],
          slides: [
            { title: "Kadi ya afya ya mtoto", bullets: ["Chanjo alizopewa na tarehe zinazofuata", "Chati ya ukuaji", "Ilete kila hudhurio"] },
            { title: "Chanjo na ukuaji", bullets: ["Fuata ratiba ya nchi yako", "Mstari wa ukuaji umenyooka au unashuka: muulize mhudumu wa afya", "Umekosa tarehe? Nenda haraka uwezavyo"] },
            { title: "Ulishaji kulingana na umri (WHO)", bullets: ["Miezi 0-6: maziwa ya mama peke yake", "Kuanzia takriban miezi 6: vyakula laini vya familia pamoja na maziwa ya mama", "Miezi 6-8: milo 2-3; miezi 9-23: milo 3-4, vitafunio 1-2"] }
          ],
          sources: [WHO_IMMUNIZATION, WHO_IYCF],
          tryIt: "Kazi ya mwisho: andika mpango wako wa afya ya familia wa ukurasa mmoja. Weka mahudhurio ya kliniki yaliyobaki, mpango wa kujifungua, hatua za siku ya kwanza za mtoto mchanga, dalili za hatari kwa mama na mtoto pamoja na kliniki na namba ya dharura, na tarehe zinazofuata za chanjo na kipimo cha ukuaji kutoka kwenye kadi pamoja na hatua ya ulishaji inayofaa umri wa mtoto.",
          youCanNow: "kusoma kadi ya afya ya mtoto kupata tarehe zinazofuata za chanjo na kipimo cha ukuaji na kupanga ulishaji unaofaa umri wa mtoto.",
          quickCheck: [
            { objective: "O6", q: "Mtoto Kofi alikosa tarehe yake ya chanjo wiki iliyopita. Familia ifanye nini?", options: ["Isubiri mwaka ujao", "Iruke chanjo hiyo", "Ianze upya kutoka chanjo ya kwanza", "Iende kliniki haraka iwezekanavyo ili afidiwe"], answer: 3, why: "Kliniki inaweza kumfidia mtoto chanjo alizokosa; nenda haraka uwezavyo." },
            { objective: "O6", q: "Mtoto anaanza kula vyakula vya familia pamoja na maziwa ya mama akiwa na umri gani takriban?", options: ["Takriban miezi 6", "Wiki 2", "Mwezi 1", "Miaka 2"], answer: 0, why: "WHO inashauri kuongeza vyakula laini vya familia kuanzia takriban miezi 6 huku kunyonyesha kukiendelea." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Siku za kwanza na miaka ya kwanza ya mtoto wako",
        questions: [
          { objective: "O4", q: "Njia bora ya kumweka mtoto mchanga na joto mara tu baada ya kuzaliwa ni ipi?", options: ["Ngozi kwa ngozi kifuani mwa mama, mmefunikwa, akiwa na kofia", "Kuoga kwa maji baridi", "Kumwacha mtoto bila kufunikwa", "Kumweka mtoto chumba kingine"], answer: 0, why: "Ngozi kwa ngozi inamweka mtoto na joto na inasaidia kunyonyesha kuanze." },
          { objective: "O4", q: "Nini kiwekwe juu ya kitovu?", options: ["Majivu au kinyesi cha ng'ombe", "Hakuna kitu isipokuwa mhudumu wa afya amesema; kiweke safi na kikavu", "Siagi", "Matope"], answer: 1, why: "Kitovu kilicho safi na kikavu kinapunguza hatari ya maambukizi." },
          { objective: "O5", q: "Dalili ipi kwa mtoto mdogo inamaanisha nenda kliniki sasa?", options: ["Kikohozi kidogo huku anakula kama kawaida", "Mtoto hawezi kunywa wala kunyonya", "Kuota meno", "Mafua huku anacheza vizuri"], answer: 1, why: "Kushindwa kunywa au kunyonya ni dalili ya hatari ya jumla." },
          { objective: "O5", q: "Mtoto huko Kano anapumua haraka na kwa shida usiku. Wazazi wafanye nini?", options: ["Wasubiri kliniki ya asubuhi", "Wampe dawa ya kikohozi kutoka dukani", "Waende kliniki au hospitali sasa", "Wapake kifua dawa na kusubiri"], answer: 2, why: "Kupumua haraka au kwa shida kunaweza kumaanisha nimonia na kunahitaji huduma sasa." },
          { objective: "O6", q: "Mstari wa ukuaji kwenye kadi umenyooka bila kupanda kwa miezi miwili. Mzazi afanye nini?", options: ["Hakuna; ni kawaida", "Aache kwenda kliniki", "Ampe maji peke yake", "Amuulize mhudumu wa afya kuhusu hilo"], answer: 3, why: "Mstari ulionyooka au unaoshuka ni onyo; mhudumu wa afya anaweza kusaidia kujua sababu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Afya ya Mama na Mtoto: Ujauzito, Kujifungua na Miaka ya Kwanza",
    questions: [
      { objective: "O1", q: "Huduma kwa mwanamke wakati wa ujauzito inaitwa:", options: ["Huduma ya ujauzito (antenatal care)", "Huduma ya baada ya kujifungua", "Huduma ya kwanza", "Kipimo cha ukuaji"], answer: 0, why: "Antenatal maana yake ni kabla ya kuzaliwa." },
      { objective: "O1", q: "WHO inashauri mawasiliano ya kwanza ya ujauzito yafanyike:", options: ["Katika mwezi wa mwisho", "Katika wiki 12 za kwanza", "Pale tu kuna maumivu", "Baada ya mtoto kuanza kucheza"], answer: 1, why: "Kuanza mapema kunasaidia kugundua matatizo mapema." },
      { objective: "O1", q: "Mwanamke mjamzito alikosa hudhurio la kliniki. Kipi ni bora?", options: ["Asubiri hadi uchungu", "Aache kwenda", "Aende haraka anavyoweza", "Asubiri hudhurio linalofuata"], answer: 2, why: "Kwenda haraka iwezekanavyo kunaweka huduma yake katika mpangilio." },
      { objective: "O2", q: "Ipi ni dalili ya hatari wakati wa ujauzito?", options: ["Kuhisi njaa", "Kuhisi mtoto anapiga teke", "Kutokwa na damu ukeni", "Kutaka kulala zaidi"], answer: 2, why: "Kutokwa na damu wakati wa ujauzito kunaweza kumaanisha hatari kwa mama na mtoto." },
      { objective: "O2", q: "Uso na mikono ya mwanamke mjamzito vinavimba ghafla na ana maumivu makali ya kichwa. Anapaswa:", options: ["Kwenda kliniki sasa", "Kupunguza chumvi na kusubiri", "Kusubiri hudhurio linalofuata", "Kulala ili ipite"], answer: 0, why: "Hizi zinaweza kuwa dalili za shinikizo la juu la damu lenye hatari." },
      { objective: "O2", q: "Siku mbili baada ya kujifungua, mama analowesha vitambaa kwa damu haraka. Familia inapaswa:", options: ["Kusubiri siku moja", "Kumpa chai", "Kumpeleka kliniki sasa", "Kumwambia apumzike"], answer: 2, why: "Kutokwa na damu nyingi baada ya kujifungua kunaweza kuua haraka." },
      { objective: "O2", q: "Ukiona dalili ya hatari, kwa nini usifuate njia ya \"subiri uone\"?", options: ["Kliniki inafunga mapema", "Dalili za hatari zinaweza kuwa mbaya zaidi haraka na kasi inaokoa maisha", "Kusubiri ni rahisi kwa gharama", "Dalili hupotea kila wakati"], answer: 1, why: "Vifo vingi vinafuata kuchelewa kuamua kwenda na kuchelewa kufika." },
      { objective: "O3", q: "Swali lipi linafaa katika mpango wa kujifungua?", options: ["Nguo za mtoto zitakuwa za rangi gani?", "Tutafikaje kituoni usiku?", "Nani atawapikia wageni?", "Mtoto ataitwa nani?"], answer: 1, why: "Usafiri, hasa wa usiku, ni sehemu muhimu ya mpango wa kujifungua." },
      { objective: "O3", q: "Familia huko Dakar inataka pesa ziwe tayari kwa kujifungua. Hatua nzuri ni:", options: ["Kuweka akiba kidogo kila wiki, kuanzia mapema", "Kukopa siku hiyo hiyo", "Kutumaini jirani atalipa", "Kusubiri hadi uchungu"], answer: 0, why: "Kuweka akiba mapema kunamaanisha pesa ziko tayari uchungu unapoanza." },
      { objective: "O3", q: "Nini kinafaa kuwa ndani ya begi la kujifungua?", options: ["Hakuna; kliniki ina kila kitu", "Pesa peke yake", "Chakula cha familia nzima", "Kitabu cha afya, vitambaa safi na nguo za mtoto"], answer: 3, why: "Kitabu na vitu safi kwa mama na mtoto vinahitajika wakati wa kujifungua." },
      { objective: "O4", q: "Kolostramu ni nini?", options: ["Chanjo", "Aina ya chai ya watoto", "Maziwa ya kwanza ya mama, mazito na ya rangi ya njano", "Mafuta ya kupaka mtoto"], answer: 2, why: "Kolostramu ni maziwa ya kwanza na yanamkinga mtoto." },
      { objective: "O4", q: "Kwa miezi 6 ya kwanza, WHO inashauri mtoto apewe:", options: ["Maziwa ya mama na maji", "Maziwa ya mama peke yake", "Uji", "Maziwa ya ng'ombe"], answer: 1, why: "Maziwa ya mama peke yake; hakuna vinywaji wala vyakula vingine." },
      { objective: "O4", q: "Hatua ipi ya siku ya kwanza ni sahihi?", options: ["Kumwogesha mtoto kwa maji baridi mara moja", "Kuweka majivu juu ya kitovu", "Kusubiri siku mbili kabla ya kunyonyesha", "Kumkausha mtoto na kumweka ngozi kwa ngozi"], answer: 3, why: "Kumkausha na kumweka ngozi kwa ngozi kunamweka mtoto mchanga na joto." },
      { objective: "O5", q: "Ipi ni dalili ya hatari kwa mtoto mchanga?", options: ["Kulala kati ya kunyonya", "Kushindwa kunyonya", "Kupiga chafya mara moja", "Kulia kabla ya kunyonya"], answer: 1, why: "Mtoto mchanga anayeshindwa kunyonya anahitaji huduma sasa." },
      { objective: "O5", q: "Mtoto anatapika kila kitu na ana usingizi mzito sana. Familia inapaswa:", options: ["Kusubiri hadi kesho", "Kumpa dawa ya sokoni", "Kutompa vinywaji", "Kwenda kliniki sasa"], answer: 3, why: "Kutapika kila kitu na usingizi mzito sana ni dalili za hatari za jumla." },
      { objective: "O5", q: "Mtoto anaharisha kinyesi chenye damu. Familia inapaswa:", options: ["Kumpeleka mtoto kliniki", "Kuacha chakula na vinywaji vyote", "Kusubiri kipite", "Kumpa vidonge vya jirani"], answer: 0, why: "Damu katika kinyesi ni sababu ya kutafuta huduma." },
      { objective: "O5", q: "Ukiwa njiani kwenda kliniki na mtoto anayeharisha, unapaswa:", options: ["Kuacha kunyonyesha", "Kuendelea kumnyonyesha na kumpa vinywaji", "Kutompa maji", "Kumpa chai kali peke yake"], answer: 1, why: "Vinywaji na maziwa ya mama vinarudisha maji yaliyopotea." },
      { objective: "O6", q: "Unapata tarehe ya chanjo inayofuata wapi?", options: ["Kwenye kadi ya afya ya mtoto", "Kwenye redio", "Kwa muuzaji sokoni", "Hakuna mahali; unakisia"], answer: 0, why: "Kadi inaonyesha chanjo alizopewa na tarehe zinazofuata." },
      { objective: "O6", q: "Kwa ushauri wa WHO, mtoto wa miezi 10 anapaswa kula takriban milo mingapi kwa siku?", options: ["Mmoja", "3 hadi 4, pamoja na vitafunio 1 hadi 2 ikihitajika", "Maziwa ya mama peke yake", "Kumi"], answer: 1, why: "WHO inashauri milo 3 hadi 4 kwa miezi 9 hadi 23, pamoja na vitafunio ikihitajika." },
      { objective: "O6", q: "WHO inashauri kuendelea kunyonyesha hadi umri gani?", options: ["Miezi 3", "Miezi 6", "Mwaka 1 kamili", "Miaka 2 au zaidi"], answer: 3, why: "Kunyonyesha kunaendelea pamoja na vyakula vya familia hadi miaka 2 au zaidi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 6, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mahudhurio ya kliniki", objective: "O1", notYet: "Hakuna tarehe za mahudhurio, au hudhurio la kwanza ni mwishoni mwa ujauzito.", meets: "Anaorodhesha mahudhurio yaliyobaki, la kwanza likiwa katika wiki 12 za kwanza, yameandikwa kwenye kitabu au kwenye simu.", exceeds: "Pia anasema nani ataenda naye kila hudhurio na litalipiwa vipi." },
      { name: "Mpango wa kujifungua", objective: "O3", notYet: "Kitu kimoja au zaidi kinakosekana: mahali, usafiri, pesa au wasaidizi.", meets: "Anataja kituo, usafiri wa mchana na usiku, akiba ya kila wiki, nani ataenda naye na nani atatunza nyumba.", exceeds: "Pia namba za usafiri zimehifadhiwa, begi limeandaliwa na mpango umekubaliwa na familia." },
      { name: "Siku ya kwanza ya mtoto mchanga", objective: "O4", notYet: "Hatua zinakosekana, haziko kwa mpangilio au zina desturi yenye madhara.", meets: "Joto (ngozi kwa ngozi), kunyonyesha ndani ya saa ya kwanza, maziwa ya mama peke yake na kitovu safi na kikavu.", exceeds: "Pia anataja desturi ya eneo lake yenye madhara na hatua salama inayochukua nafasi yake." },
      { name: "Dalili za hatari", objective: "O2", notYet: "Orodha inakosa dalili muhimu au inasema subiri uone.", meets: "Anaorodhesha dalili kuu za hatari kwa mama na mtoto, pamoja na kliniki iliyo karibu zaidi na namba ya dharura.", exceeds: "Pia inahusu usafiri wa usiku na namba ya mhudumu wa afya ya jamii." },
      { name: "Dalili za hatari kwa mtoto", objective: "O5", notYet: "Dalili za hatari kwa mtoto zinakosekana au zimechanganywa na dalili za kawaida.", meets: "Anaorodhesha dalili za hatari kwa mtoto mchanga na mtoto mdogo zinazomaanisha nenda sasa.", exceeds: "Anazieleza kwa uwazi kiasi kwamba bibi au kaka au dada mkubwa anaweza kuzitumia." },
      { name: "Kadi, chanjo na ulishaji", objective: "O6", notYet: "Hakuna tarehe zinazofuata, au ushauri wa ulishaji haufai umri wa mtoto.", meets: "Anatoa tarehe zinazofuata za chanjo na kipimo cha ukuaji kutoka kwenye kadi na hatua sahihi ya ulishaji kwa umri huo.", exceeds: "Tarehe ziko kwenye kalenda ya simu pamoja na vikumbusho." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wajawazito au wanafamilia wanaofanya hudhurio la kwanza la kliniki katika wiki 12 za kwanza (utafiti wa kufuatilia wa siku 30)",
      "Familia zinazoripoti mpango wa kujifungua ulioandikwa, wenye pesa za akiba na usafiri uliopangwa",
      "Watoto ambao mahudhurio yao yanayofuata ya chanjo na kipimo cha ukuaji yanafanyika kwa wakati, kama wanavyoripoti wanafunzi au kliniki washirika",
      "Wahudumu wa afya ya jamii washirika wanaripoti familia zinafika mapema zaidi dalili ya hatari inapotokea"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu ya kawaida, au kipindi cha kikundi ambapo masomo yanasomwa kwa sauti",
      "Kitabu cha afya ya mama na mtoto au kadi ya afya ya mtoto, kama familia inayo",
      "Karatasi na kalamu kwa kadi za dalili za hatari, mpango wa kujifungua na mpango wa afya ya familia",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Washirika wazuri: wahudumu wa afya ya jamii, wakunga wa kliniki, vikundi vya wanawake, vikundi vya akiba na vikundi vya imani; mwalike mkunga au muuguzi ajibu maswali.",
      "Usiwaombe kamwe wanafunzi kueleza habari za ujauzito wao, hali yao ya VVU (HIV) au habari nyingine za afya mbele ya kikundi; tumia mifano ya kozi badala yake.",
      "Usitoe dozi za dawa wala ushauri wa matibabu; peleka maswali yote ya aina hiyo kliniki.",
      "Kagua habari za eneo lako kabla ya kipindi: kituo cha afya kilicho karibu zaidi, namba za dharura, ratiba ya chanjo ya eneo lako na kama huduma ya kujifungua ni bure au inalipiwa.",
      "Waalike akina baba na bibi: maamuzi ya kwenda kliniki mara nyingi hufanywa na familia.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
